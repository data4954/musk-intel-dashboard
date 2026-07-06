# -*- coding: utf-8 -*-
"""Axiomake 研报生成器 v2（付费研报规格 · 判语=状态机+机制模板，不虚构新观点）
周报(周日)/月报(1日)/季报(1,4,7,10月1日)/年报(1月1日)；FORCE_REPORT 补发
结构: 执行摘要 → 核心变化与判定修正 → 分板块判定 → 风险提示 → 未核实区 → 数据附录 → 分析师判读(人工栏)
纪律: A/B 进结论, C 隔离; 判语全部由已入库判定+当期状态拼装, 模板出处可溯; 熔断进头条
"""
import json, re, os
from datetime import datetime, timezone, timedelta

CST = timezone(timedelta(hours=8))
NOW = datetime.now(CST)
TODAY = NOW.strftime("%Y-%m-%d")
ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
RPTS = os.path.join(ROOT, "reports")
IDX  = os.path.join(RPTS, "index.json")
STF  = os.path.join(RPTS, "state.json")

def load_data():
    raw = open(os.path.join(ROOT, "data.js"), encoding="utf-8").read()
    return json.loads(re.search(r"window\.MUSKINTEL_DATA\s*=\s*(\{.*\});?\s*$", raw, re.S).group(1))

def load_state():
    try: return json.load(open(STF, encoding="utf-8"))
    except Exception: return {}

def snap(D):
    return {"scissors": {x["line"]: x["state"] for x in D.get("scissors", [])},
            "promises": {r["id"]: (r.get("payload") or {}).get("status","") for r in D["ledger"] if r.get("type")=="promise"},
            "health": D.get("health",{}).get("sources",{}),
            "ab_count_30d": len([r for r in D["ledger"] if r.get("ev") in ("A","B")
                                 and r.get("ts","") >= (NOW - timedelta(days=30)).strftime("%Y-%m-%d")])}

def days_to(dstr):
    return (datetime.strptime(dstr, "%Y-%m-%d").replace(tzinfo=CST) - NOW).days + 1

def series_stats(D, sym, since):
    ser = [p for p in D.get("market",{}).get("series",{}).get(sym,[]) if p["d"] >= since and p.get("c")]
    if len(ser) < 2: return None
    cs = [p["c"] for p in ser]
    moves = [abs(cs[i]-cs[i-1])/cs[i-1]*100 for i in range(1,len(cs)) if cs[i-1]]
    return {"hi": max(cs), "lo": min(cs), "chg": round((cs[-1]-cs[0])/cs[0]*100,1),
            "maxmove": round(max(moves),1) if moves else None, "n": len(cs)}

def daily_chg(D, sym, day):
    ser = D.get("market",{}).get("series",{}).get(sym,[])
    for i,p in enumerate(ser):
        if p["d"] == day and i > 0 and ser[i-1].get("c"):
            return round((p["c"]-ser[i-1]["c"])/ser[i-1]["c"]*100,1)
    return None

def build(D, kind, since, label):
    Lw  = [r for r in D["ledger"] if since <= r.get("ts","") <= TODAY]
    ab  = sorted([r for r in Lw if r.get("ev") in ("A","B")], key=lambda x:x["ts"])
    c   = sorted([r for r in Lw if r.get("ev")=="C"], key=lambda x:x["ts"])
    sc  = D.get("scissors", [])
    pol = D.get("political", {})
    V   = D.get("valuation", {})
    fused = [k for k,v in D.get("health",{}).get("sources",{}).items() if v in ("fused","red")]
    prev, cur = load_state().get(kind, {}), snap(D)
    d_mid = days_to("2026-11-03")
    phase = (pol.get("machine") or [{}])[-1]
    clean = [s for s in sc if "★" in s.get("state","")]
    risky = [s for s in sc if "✗" in s.get("state","") or "⚠" in s.get("state","")]
    bad_prom = [r for r in D["ledger"] if r.get("type")=="promise"
                and any(k in (r.get("payload") or {}).get("status","") for k in ("不可行","紧张"))]

    # —— 核心变化（状态差分）——
    changes = []
    for line, st_now in cur["scissors"].items():
        st_old = prev.get("scissors",{}).get(line)
        if st_old and st_old != st_now:
            changes.append(f"**剪刀差翻转** {line}: {st_old} → {st_now}。约束态翻转=该线定价逻辑换轨（供给约束看产能、需求约束看价格弹性），估值权重需重估。")
    for pid, st_now in cur["promises"].items():
        st_old = prev.get("promises",{}).get(pid)
        if st_old and st_old != st_now:
            t = next((r["title"] for r in D["ledger"] if r["id"]==pid), pid)
            changes.append(f"**承诺状态变化** {t}: {st_old} → {st_now}。承诺库是叙事溢价的信用底账，状态迁移直接作用于溢价扣减项。")
    for k, v_now in cur["health"].items():
        v_old = prev.get("health",{}).get(k)
        if v_old and v_old != v_now and ("fused" in (v_old,v_now) or "red" in (v_old,v_now)):
            changes.append(f"**数据通道** {k}: {v_old} → {v_now}（该通道覆盖板块的时效性相应打折）")
    if prev.get("ab_count_30d") is not None and abs(cur["ab_count_30d"]-prev["ab_count_30d"]) >= 3:
        changes.append(f"**事件密度** 30天A/B级 {prev['ab_count_30d']} → {cur['ab_count_30d']}（信息流{'升温' if cur['ab_count_30d']>prev['ab_count_30d'] else '降温'}）")

    md = [f"# Axiomake {kind}", "",
          f"**期号** {TODAY} ｜ **覆盖** {since} ~ {TODAY}（{label}）｜ **性质** 个人研究 · 非投资建议",
          f"**方法** 判语=已入库判定×当期状态（机制模板可溯源）；A/B 级进结论，C 级隔离；影响评分为人工项", ""]
    if fused:
        md += [f"> ⚠ **数据通道警示**：{', '.join(fused)} 失败/熔断，相关板块时效打折（R6 纪律）", ""]

    # —— 一、执行摘要 ——
    md += ["## 一、执行摘要", ""]
    md += [f"1. **政治时钟**：白宫—马斯克系关系处于「{phase.get('phase','未核')}」段（{phase.get('span','')}）。距中期选举 **{d_mid} 天**——{phase.get('implication','')}。该二元事件是 TSLA 叙事溢价与 SPCX 政府线的共同主导变量。"]
    if clean:
        md += [f"2. **最净主线**：{'、'.join(x['line'] for x in clean)}——供给约束+高毛利，扩产即增利，只盯产能节点（{'；'.join(x['watch'] for x in clean)}）。"]
    if risky:
        md += [f"3. **头号证伪对象**：{'、'.join(x['line'] for x in risky)}——{'；'.join(x['meaning'] for x in risky)}。"]
    if V.get("tsla"):
        md += [f"4. **TSLA 定价结构**：车业务锚 {V['tsla'].get('auto_anchor','未核')}，叙事溢价 {V['tsla'].get('premium','未核')}——溢价的兑现依赖 11-03 与 FSD 中国审批两个二元事件，本质是事件期权组合而非现金流贴现。"]
    if V.get("spcx"):
        md += [f"5. **SPCX 可证伪锚**：{V['spcx'].get('anchor','未核')}；收入承诺 {V['spcx'].get('claim','未核')}（承诺库判定：物理紧张）。"]
    if bad_prom:
        md += [f"6. **信用底账警示**：{len(bad_prom)} 项在库承诺处于物理不可行/紧张状态——{'；'.join(r['title'] for r in bad_prom[:3])}。叙事溢价中对应部分应按零计。"]
    md += [""]

    # —— 二、核心变化与判定修正 ——
    md += ["## 二、核心变化与判定修正", ""]
    md += [f"- {x}" for x in changes] if changes else \
          (["- 本期无状态翻转：既有判定全部维持。维持判定也是判定——变化才触发重估，这是本报告拒绝凑字的方式。"] if prev
           else ["- 首期报告，无对比基线；自下期起本节只呈现翻转项与修正项。"])
    md += [""]

    # —— 三、分板块判定 ——
    md += ["## 三、分板块判定", "", "### 3.1 政治与地缘（风险乘数层）", ""]
    md += [f"- 阶段判定：「{phase.get('phase','')}」（{phase.get('facts','')}）→ {phase.get('implication','')}"]
    md += [f"- 情景树（赛前写死纪律）：共和党保住 → 顺风延续；民主党翻盘 → 监管反转 + 「美国党」期权重启（2025-07 暴跌剧本）。距离 {d_mid} 天。"]
    if pol.get("balance"):
        md += [f"- 资产端 {len(pol['balance'].get('assets',[]))} 项 vs 负债端 {len(pol['balance'].get('liabilities',[]))} 项；负债端首项：{(pol['balance'].get('liabilities') or ['—'])[0]}"]
    md += ["", "### 3.2 物理与供需（约束态层）", ""]
    for x in sc:
        md += [f"- **{x['line']}**［{x['state']}］：{x['meaning']} 盯：{x['watch']}"]
    md += ["", "### 3.3 市场与资本（定价层）", ""]
    for q in D.get("market",{}).get("quotes",[]):
        st = series_stats(D, q["sym"], since)
        curp = f"${q['price']}" if q.get("price") is not None else (q.get("mcap") or "—")
        if st:
            md += [f"- {q['name']}: 现值 {curp}，区间 {'+' if st['chg']>=0 else ''}{st['chg']}%（高 {st['hi']}/低 {st['lo']}，最大单日 {st['maxmove']}%，{st['n']} 样本）"]
        else:
            md += [f"- {q['name']}: 现值 {curp}（区间样本不足，账本积累 <2 交易日）"]
    aligned = [(r, daily_chg(D,"TSLA",r["ts"])) for r in ab]
    aligned = [(r,cg) for r,cg in aligned if cg is not None]
    if aligned:
        md += ["", "| 事件日 | 事件 | 当日TSLA |", "|---|---|---|"]
        md += [f"| {r['ts']} | {r['title'][:44]} | {'+' if cg>=0 else ''}{cg}% |" for r,cg in aligned]
        md += ["", "（相关非因果；窗口污染自查）"]
    md += ["", "### 3.4 人物网络与资本流（信号层）", ""]
    f4 = [r for r in ab if "form4" in (r.get("tags") or [])]
    md += [f"- 本期 Form 4 申报 {len(f4)} 条（A级）" + ("："+"；".join(f"{r['ts']} {(r.get('payload') or {}).get('owner','申报人待解析')}" for r in f4[:4]) if f4 else "——资本流信号权重×3，无申报本身也是信息（无减持压力窗口）")]
    reds = [f"L{L['layer']} {L['name']}" for L in D.get("leading",[]) if any(i["st"]=="red" for i in L["items"])]
    md += [f"- 先行引擎：{'**多层同红（系统级预警）**：' + '、'.join(reds) if len(reds)>=2 else ('单层孤红：'+reds[0]+'（观察级）' if reds else '无红灯层')}"]
    md += ["", "### 3.5 事件账本（本期 A/B 级 · 进结论依据）", ""]
    md += [f"- {r['ts']} [{r['ev']}/{r.get('scope','1y')}] {r['title']}" + (f"（影响{'+' if (r.get('payload') or {}).get('impact',0)>0 else ''}{(r.get('payload') or {}).get('impact')}）" if (r.get('payload') or {}).get('impact') is not None else "") for r in ab] or ["- （无）"]
    md += [""]

    # —— 四、风险提示 ——
    md += ["## 四、风险提示", ""]
    for li in (pol.get("balance",{}).get("liabilities") or [])[:4]:
        md += [f"- {li}"]
    for r in bad_prom[:3]:
        md += [f"- 承诺风险：{r['title']}（{(r.get('payload') or {}).get('status','')}——{(r.get('payload') or {}).get('basis','')}）"]
    if fused: md += [f"- 数据风险：{', '.join(fused)} 通道异常，本期相关判定基于陈旧值"]
    md += ["", f"## 五、未核实区（C 级单源 · {len(c)} 条 · 不进任何结论）", ""]
    md += [f"- {r['ts']} {r['title'][:60]}" for r in c[:10]] or ["- （无）"]
    if len(c) > 10: md += [f"- …另 {len(c)-10} 条见站内账本"]

    # —— 六、数据附录 ——
    md += ["", "## 六、数据附录", "", "**倒计时**", ""]
    md += [f"- {cd['label']}: {days_to(cd['date'])} 天（{cd['date']}）" for cd in D.get("countdowns",[]) if days_to(cd["date"])>=0]
    md += ["", "**承诺库全量**", ""]
    md += [f"- {r['ts']} [{r['ev']}/{r.get('scope','')}] {r['title']} → {(r.get('payload') or {}).get('status','未核')}" for r in D["ledger"] if r.get("type")=="promise"]
    if kind in ("季报","年报"):
        md += ["", "**重计算清单（人工执行）**", "", "- 莱特定律曲线重拟合", "- 成本地板输入更新",
               "- 承诺库兑现核对", "- 中美六线技术树季判", "- 评分权重再平衡"]
    if kind == "年报":
        md += ["", "**主论点年审（人工填写——系统的灵魂条款）**", "", "- 去年核心判断证实/证伪清单：（待填）",
               "- 决策校准：从【决策档案】导出决策日志对照复盘"]

    # —— 七、分析师判读（人工栏） ——
    md += ["", "## 七、分析师判读（人工栏）", "",
           "> 本节留白待填。机器判语到此为止——事件到论点的增量因果判读、仓位含义、下期关注清单，",
           "> 由你在站内【决策档案】研究笔记中撰写后誊入，或接入 LLM API 自动生成（输出须标「AI生成未核」）。", ""]
    h = D.get("health",{})
    md += ["---", f"数据健康 {json.dumps(h.get('sources',{}),ensure_ascii=False)} · 最后抓取 {h.get('last_run','未核')} · 核实规则 R1-R6 见 scripts/update.py",
           "判语生成方式：状态机×已入库机制模板（模板即账本内判定，无凭空观点）。对外发布删除原始行情数值。"]
    return "\n".join(md) + "\n"

def due_kinds():
    force = os.environ.get("FORCE_REPORT","").strip()
    if force:
        return {"weekly":[("周报",7)],"monthly":[("月报",31)],
                "quarterly":[("季报",92)],"yearly":[("年报",365)]}.get(force,[])
    kinds = []
    if NOW.weekday()==6: kinds.append(("周报",7))
    if NOW.day==1:
        kinds.append(("月报",31))
        if NOW.month in (1,4,7,10): kinds.append(("季报",92))
        if NOW.month==1: kinds.append(("年报",365))
    return kinds

def main():
    D = load_data()
    idx = json.load(open(IDX,encoding="utf-8")) if os.path.exists(IDX) else []
    made = 0
    for kind, days in due_kinds():
        since = (NOW - timedelta(days=days)).strftime("%Y-%m-%d")
        ydir = os.path.join(RPTS,str(NOW.year)); os.makedirs(ydir,exist_ok=True)
        rel = f"reports/{NOW.year}/Axiomake_{kind}_{TODAY}.md"
        if any(e["path"]==rel for e in idx): continue
        open(os.path.join(ROOT,rel),"w",encoding="utf-8").write(build(D,kind,since,f"近{days}天"))
        idx.insert(0,{"type":kind,"date":TODAY,"path":rel,"title":f"Axiomake {kind} {TODAY}"})
        made += 1
    if made:
        json.dump(idx[:500],open(IDX,"w",encoding="utf-8"),ensure_ascii=False,indent=1)
        st = load_state()
        for kind,_ in due_kinds(): st[kind]=snap(load_data())
        json.dump(st,open(STF,"w",encoding="utf-8"),ensure_ascii=False,indent=1)
    # reports.js: 每类最新一期全文 + 归档索引，随页面 <script> 加载（本地双击也可读，不依赖 fetch）
    latest = {}
    for e in idx:
        if e["type"] not in latest:
            p = os.path.join(ROOT, e["path"])
            if os.path.exists(p):
                latest[e["type"]] = {"title": e["title"], "date": e["date"], "md": open(p, encoding="utf-8").read()}
    open(os.path.join(ROOT, "reports.js"), "w", encoding="utf-8").write(
        "// 由 report.py 维护\nwindow.AXIOMAKE_REPORTS = " +
        json.dumps({"latest": latest, "archive": idx[:200]}, ensure_ascii=False) + ";\n")
    print(f"reports generated: {made}")

if __name__ == "__main__":
    main()
