# -*- coding: utf-8 -*-
"""Axiomake 全自动抓取 + 核实入库引擎（GitHub Actions 版）
运行环境: GitHub Actions ubuntu-latest（海外直连，无需代理）
用法: python3 scripts/update.py   （仓库根目录需含 data.js）

自动核实规则（全部写死在此，页面【决策与档案】审计视图逐条展示执行记录）:
  R1  官方结构化源（SEC data.sec.gov 的 Form 4）→ A 级自动入库
  R2  新闻聚簇: 同一事件 ≥2 家不同媒体报道 → B 级自动入库（存全部来源 URL）
  R3  单源新闻 → C 级自动入库，payload 标注"单源未交叉"；报告中 C 级单列、不进结论
  R4  账本只追加、不覆盖；与最近 60 天账本条目做标题相似度去重
  R5  自动入库一律不填 impact（影响评分是分析判断，机器不越权）
  R6  源失败 → 沿用旧值并标注陈旧；连续 3 次失败熔断，写进周报头条
"""
import json, re, os, time, hashlib, urllib.request, urllib.error, urllib.parse
from datetime import datetime, timezone, timedelta

CST   = timezone(timedelta(hours=8))          # 报告与时间戳统一北京时间
NOW   = datetime.now(CST)
ASOF  = NOW.strftime("%Y-%m-%d")
STAMP = NOW.strftime("%Y-%m-%d %H:%M")

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DATA = os.path.join(ROOT, "data.js")
NEW  = os.path.join(ROOT, "data_new.js")
LOG  = os.path.join(ROOT, "诊断日志.txt")
UA   = {"User-Agent": "Axiomake-Research/1.0 (non-profit personal use; contact: data4954@users.noreply.github.com)"}
MAXB = 15 * 1024 * 1024
NEWS_DAILY_CAP = 6        # 每日新闻入库上限，控噪
DEDUP_WINDOW_D = 60       # 去重回看窗口（天）
SIM_THRESHOLD  = 0.40     # 标题字符二元组 Jaccard 相似度阈值（启发式）
# 诚实边界: 中文媒体对同一事件措辞差异大（如"兆美元富豪"vs"万亿富翁"），
# 词面相似度聚不到一簇 → R2 触发偏少，多数新闻落 C 级。这是保守方向的误差
# （漏升级，不会错升级）；C 级不进结论的纪律兜底。语义级聚簇需付费模型，不引入。

def log(msg):
    lines = []
    if os.path.exists(LOG):
        lines = open(LOG, encoding="utf-8").read().splitlines()
    lines.append(f"[{STAMP}] {msg}")
    open(LOG, "w", encoding="utf-8").write("\n".join(lines[-500:]) + "\n")   # 封顶500行

def get(url, timeout=20, tries=2):
    for i in range(tries):
        try:
            req = urllib.request.Request(url, headers=UA)
            with urllib.request.urlopen(req, timeout=timeout) as r:
                return r.read().decode("utf-8", "replace")
        except Exception as e:
            if i == tries - 1:
                log(f"抓取失败 {url[:80]} : {e}")
            time.sleep(3)
    return None

# ---------- 相似度（中文友好：字符二元组 Jaccard） ----------
def norm_title(t):
    t = re.sub(r"\s*[-–—|·]\s*[^-–—|·]{2,20}$", "", t)      # 去掉尾部媒体名
    t = re.sub(r"[\s\W_]+", "", t.lower())
    return t

def bigrams(s):
    return {s[i:i+2] for i in range(len(s)-1)} if len(s) > 1 else {s}

def sim(a, b):
    A, B = bigrams(norm_title(a)), bigrams(norm_title(b))
    if not A or not B: return 0.0
    return len(A & B) / len(A | B)

# ---------- 主流程 ----------
def main():
    if not os.path.exists(DATA):
        log("错误: data.js 不存在，本次中止"); return 1
    raw = open(DATA, encoding="utf-8").read()
    m = re.search(r"window\.MUSKINTEL_DATA\s*=\s*(\{.*\});?\s*$", raw, re.S)
    if not m:
        log("错误: data.js 结构异常，本次中止（旧数据保留）"); return 1
    D = json.loads(m.group(1))
    health = {}
    fails  = D.get("health", {}).get("fail_counts", {})
    audit  = []          # 本轮审计记录，前端展示
    ledger_ids    = {r["id"] for r in D["ledger"]}
    recent_titles = [r["title"] for r in D["ledger"]
                     if r.get("ts", "") >= (NOW - timedelta(days=DEDUP_WINDOW_D)).strftime("%Y-%m-%d")]

    def bump(src_key, ok):
        health[src_key] = "green" if ok else "red"
        fails[src_key] = 0 if ok else fails.get(src_key, 0) + 1
        if fails[src_key] >= 3:
            health[src_key] = "fused"
            log(f"熔断: {src_key} 连续 {fails[src_key]} 次失败，进周报头条")

    # 1) 行情: Yahoo chart API（v8，无需 crumb）
    ok_quotes = 0
    for q in D["market"]["quotes"]:
        sym = q["sym"]
        txt = get(f"https://query1.finance.yahoo.com/v8/finance/chart/{sym}?range=5d&interval=1d")
        px = chg = None
        if txt:
            try:
                meta = json.loads(txt)["chart"]["result"][0]["meta"]
                px  = meta.get("regularMarketPrice")
                prev = meta.get("chartPreviousClose")
                if px is not None and prev:
                    chg = round((px - prev) / prev * 100, 2)
            except Exception:
                pass
        if px is not None:
            q["price"] = round(float(px), 4)
            if chg is not None: q["chg"] = chg
            q["status"] = "green"; q["src"] = f"Yahoo {ASOF}"
            series = D["market"]["series"].setdefault(sym, [])
            if not series or series[-1]["d"] != ASOF:          # 账本: 只追加，日频一条
                series.append({"d": ASOF, "c": q["price"]})
            else:
                series[-1]["c"] = q["price"]
            ok_quotes += 1
        else:
            q["status"] = "yellow"
            log(f"提示: {sym} 行情失败，沿用上次值（页面标注陈旧）")
    bump("yahoo", ok_quotes > 0)

    # 2) SEC data.sec.gov: Tesla Form 4 → R1 官方源 A 级自动入库
    txt = get("https://data.sec.gov/submissions/CIK0001318605.json", timeout=25)
    if txt:
        try:
            sub = json.loads(txt)["filings"]["recent"]
            n_in = 0
            for form, date, acc, doc in zip(sub["form"], sub["filingDate"],
                                            sub["accessionNumber"], sub["primaryDocument"]):
                if form != "4": continue
                if date < (NOW - timedelta(days=90)).strftime("%Y-%m-%d"): break
                acc_nodash = acc.replace("-", "")
                url = f"https://www.sec.gov/Archives/edgar/data/1318605/{acc_nodash}/{doc}"
                eid = "EDGAR-" + hashlib.md5(acc.encode()).hexdigest()[:12]
                if eid in ledger_ids: continue
                D["ledger"].append({
                    "id": eid, "type": "event", "ts": date, "ev": "A", "scope": "1y",
                    "tags": ["tsla", "form4"],
                    "title": f"TSLA Form 4 内部人交易申报（{date}）",
                    "payload": {"src": url,
                                "note": "R1 官方结构化源自动入库；方向与金额请点开原文判读，机器不代判"}})
                ledger_ids.add(eid); n_in += 1
                audit.append({"ts": ASOF, "rule": "R1", "action": "入库", "ev": "A",
                              "title": f"Form 4 {date}", "src": url})
            bump("edgar", True)
            if n_in: log(f"EDGAR: 自动入库 {n_in} 条 Form 4（A级）")
        except Exception as e:
            bump("edgar", False); log(f"EDGAR 解析失败: {e}")
    else:
        bump("edgar", False)

    # 3) 发射日程（整表替换，非账本数据）
    txt = get("https://ll.thespacedevs.com/2.2.0/launch/upcoming/?search=SpaceX&limit=5&mode=list", timeout=25)
    if txt:
        try:
            D["launches"] = [{"name": x["name"], "net": x["net"], "status": x["status"]["name"]}
                             for x in json.loads(txt).get("results", [])]
            bump("launchlib", True)
        except Exception:
            bump("launchlib", False)
    else:
        bump("launchlib", False)

    # 4) 新闻 RSS → R2/R3 聚簇核实入库
    txt = get("https://news.google.com/rss/search?q=SpaceX+OR+Tesla+OR+xAI+OR+Neuralink+%22Elon+Musk%22&hl=zh-CN&gl=CN&ceid=CN:zh-Hans", timeout=25)
    if txt:
        items = []
        for mm in re.finditer(r"<item><title>(.*?)</title><link>(.*?)</link>(?:.*?<pubDate>(.*?)</pubDate>)?", txt, re.S):
            title = re.sub(r"<!\[CDATA\[|\]\]>", "", mm.group(1)).strip()
            outlet_m = re.search(r"[-–—]\s*([^-–—]{2,25})$", title)
            items.append({"title": title, "link": mm.group(2),
                          "outlet": (outlet_m.group(1).strip() if outlet_m else "未知媒体")})
            if len(items) >= 40: break
        # 聚簇：贪心，相似度 ≥ SIM_THRESHOLD 归同簇（阈值为启发式，误合/漏合都会在审计视图留痕可查）
        clusters = []
        for it in items:
            for c in clusters:
                if sim(it["title"], c[0]["title"]) >= SIM_THRESHOLD:
                    c.append(it); break
            else:
                clusters.append([it])
        n_in = 0
        for c in clusters:
            if n_in >= NEWS_DAILY_CAP: break
            rep = c[0]
            rid = "NEWS-" + hashlib.md5(norm_title(rep["title"]).encode()).hexdigest()[:12]
            if rid in ledger_ids: continue
            if any(sim(rep["title"], t) >= SIM_THRESHOLD for t in recent_titles):   # R4 跨日去重
                audit.append({"ts": ASOF, "rule": "R4", "action": "跳过(账本已有同题)",
                              "ev": "-", "title": rep["title"][:80], "src": rep["link"]})
                continue
            outlets = {x["outlet"] for x in c}
            multi = len(outlets) >= 2
            ev = "B" if multi else "C"
            D["ledger"].append({
                "id": rid, "type": "event", "ts": ASOF, "ev": ev, "scope": "1y", "tags": ["news"],
                "title": re.sub(r"\s*[-–—]\s*[^-–—]{2,25}$", "", rep["title"]),
                "payload": {"src": "; ".join(sorted(outlets)),
                            "srcs": [x["link"] for x in c[:5]],
                            "note": (f"R2 多源交叉自动定 B（{len(outlets)} 家媒体同报）" if multi
                                     else "R3 单源未交叉，C 级默认不进结论")}})
            ledger_ids.add(rid); recent_titles.append(rep["title"]); n_in += 1
            audit.append({"ts": ASOF, "rule": "R2" if multi else "R3", "action": "入库", "ev": ev,
                          "title": rep["title"][:80], "src": rep["link"]})
        bump("rss", True)
        log(f"新闻: {len(items)} 条原始 → {len(clusters)} 簇 → 入库 {n_in} 条（上限{NEWS_DAILY_CAP}）")
    else:
        bump("rss", False)


    # ---------- 人物动态追踪（每人独立新闻通道；C级默认，tag=person:<id>） ----------
    PERSON_QUERIES = {
        "birchall": "\"Jared Birchall\"", "kimbal": "\"Kimbal Musk\"",
        "ellison": "\"Larry Ellison\"", "sacks": "\"David Sacks\"",
        "thiel": "\"Peter Thiel\"", "andreessen": "\"Marc Andreessen\"",
        "baron": "\"Ron Baron\" Tesla", "wood": "\"Cathie Wood\"",
        "griffin": "\"Ken Griffin\" Citadel"}
    p_in = 0
    for pid, q in PERSON_QUERIES.items():
        t = get(f"https://news.google.com/rss/search?q={urllib.parse.quote(q)}&hl=zh-CN&gl=CN&ceid=CN:zh-Hans", timeout=20)
        if not t: continue
        n_this = 0
        for mm in re.finditer(r"<item><title>(.*?)</title><link>(.*?)</link>", t):
            if n_this >= 2: break                                  # 每人每日上限2条，控噪
            title = re.sub(r"<!\[CDATA\[|\]\]>", "", mm.group(1)).strip()
            rid = "PNEWS-" + hashlib.md5((pid + norm_title(title)).encode()).hexdigest()[:12]
            if rid in ledger_ids: continue
            if any(sim(title, x) >= SIM_THRESHOLD for x in recent_titles): continue
            D["ledger"].append({"id": rid, "type": "event", "ts": ASOF, "ev": "C", "scope": "1y",
                "tags": ["news", "person:" + pid],
                "title": re.sub(r"\s*[-–—]\s*[^-–—]{2,25}$", "", title),
                "payload": {"src": mm.group(2), "note": "人物通道自动抓取（R3 单源 C 级，不进结论）"}})
            ledger_ids.add(rid); recent_titles.append(title); n_this += 1; p_in += 1
    if p_in:
        log(f"人物动态: 新入库 {p_in} 条（C级，按人物tag挂卡）")
        audit.append({"ts": ASOF, "rule": "R3", "action": "入库", "ev": "C",
                      "title": f"人物动态通道 {p_in} 条（明细见各人物卡）", "src": ""})

    # ---------- 先行引擎自动项 ----------
    def set_leading(key_sub, v, st):
        for L in D.get("leading", []):
            for it in L["items"]:
                if key_sub in it["k"]:
                    it["v"] = v; it["st"] = st; return True
        return False

    # L1 招聘: Greenhouse 公开接口（SpaceX/xAI；Tesla 无免费口，如实缺席）
    gh = {}
    for slug in ("spacex", "xai"):
        t = get(f"https://boards-api.greenhouse.io/v1/boards/{slug}/jobs", timeout=25)
        if t:
            try: gh[slug] = json.loads(t).get("meta", {}).get("total") or len(json.loads(t).get("jobs", []))
            except Exception: pass
    if gh:
        set_leading("招聘岗位计数",
                    f"SpaceX {gh.get('spacex','未核')} · xAI {gh.get('xai','未核')} 在招（{ASOF}；Tesla 无免费接口）",
                    "green")
        bump("greenhouse", True)
    else:
        bump("greenhouse", False)

    # L4 FEC 捐款（试点 DEMO_KEY，限速共享，失败即降级）
    t = get("https://api.open.fec.gov/v1/schedules/schedule_a/?contributor_name=musk%2C+elon&api_key=DEMO_KEY&sort=-contribution_receipt_date&per_page=20", timeout=25)
    if t:
        try:
            rs = json.loads(t).get("results", [])
            cutoff = (NOW - timedelta(days=90)).strftime("%Y-%m-%d")
            recent = [r for r in rs if (r.get("contribution_receipt_date") or "")[:10] >= cutoff]
            if recent:
                total = sum(r.get("contribution_receipt_amount") or 0 for r in recent)
                latest = recent[0]["contribution_receipt_date"][:10]
                set_leading("FEC捐款流向", f"近90天 ${total:,.0f}／{len(recent)}笔，最新 {latest}（A:FEC）", "green")
            else:
                set_leading("FEC捐款流向", f"近90天无申报记录（截至 {ASOF}，A:FEC）", "green")
            bump("fec", True)
        except Exception:
            bump("fec", False)
    else:
        bump("fec", False)

    # L5 Form 4 申报人回填（每轮最多解析5份原文；只补 payload.owner，不改历史标题）
    parsed = 0
    owners_seen = {}
    for r in D["ledger"]:
        if not str(r.get("id","")).startswith("EDGAR-"): continue
        if r.get("ts","") < (NOW - timedelta(days=90)).strftime("%Y-%m-%d"): continue
        ow = (r.get("payload") or {}).get("owner")
        if not ow and parsed < 5:
            doc_url = (r.get("payload") or {}).get("src","")
            raw_url = re.sub(r"xslF345X\d+/", "", doc_url)
            t = get(raw_url, timeout=20)
            if t:
                mo = re.search(r"<rptOwnerName>(.*?)</rptOwnerName>", t) or re.search(r"(Musk\s+Kimbal|Kimbal\s+Musk|Musk\s+Elon|Elon\s+Musk)", t)
                if mo:
                    ow = mo.group(1).strip()
                    r.setdefault("payload", {})["owner"] = ow
            parsed += 1
        if ow:
            key = "kimbal" if "kimbal" in ow.lower() else ("musk" if "musk" in ow.lower() else "other")
            if r["ts"] > owners_seen.get(key, ""): owners_seen[key] = r["ts"]
    if owners_seen.get("musk"):
        set_leading("Musk Form 4", f"最近申报 {owners_seen['musk']}（A:EDGAR，点开原文判方向）", "green")
    if owners_seen.get("kimbal"):
        set_leading("Kimbal Form 4", f"最近申报 {owners_seen['kimbal']}（A:EDGAR，独立信号源）", "green")

    # 5) 元信息 + 审计追加 + 验证闸门 + 原子替换
    D["meta"]["generated_at"] = NOW.isoformat(timespec="seconds")
    D["meta"]["generator"] = "GitHub Actions · scripts/update.py"
    D["market"]["asof"] = ASOF
    D["audit"] = (D.get("audit", []) + audit)[-120:]           # 审计留痕，封顶120条
    D["health"] = {"last_run": STAMP, "sources": health, "fail_counts": fails}
    D.pop("pending_queue", None)                               # 全自动模式：待审队列退役

    out = ("// Axiomake 数据文件 —— 由 GitHub Actions scripts/update.py 维护，请勿手动编辑\n"
           "// 编码: UTF-8 | 模式版本: 2 | 账本模型: 只追加不覆盖 | 全自动核实规则 R1-R6 见 update.py 头注\n"
           "window.MUSKINTEL_DATA = " + json.dumps(D, ensure_ascii=False, indent=1) + ";\n")
    json.loads(re.search(r"=\s*(\{.*\});", out, re.S).group(1))     # 检1 可解析
    assert D.get("ledger") and D.get("entities")                     # 检2 必填
    data = out.encode("utf-8")                                       # 检3 编码
    if len(data) > MAXB:                                             # 检4 体积
        log("错误: 超过15MB预算，本次丢弃。建议: 年度归档分片"); return 1
    open(NEW, "wb").write(data)
    os.replace(NEW, DATA)                                            # 原子替换（历史版本由 git 承担）
    log(f"更新成功。账本 {len(D['ledger'])} 条，本轮审计 {len(audit)} 条")
    return 0

if __name__ == "__main__":
    try:
        raise SystemExit(main())
    except SystemExit:
        raise
    except Exception as e:
        log(f"错误: 更新器异常 {e}。影响: 本次未更新，旧数据保留")
        raise
