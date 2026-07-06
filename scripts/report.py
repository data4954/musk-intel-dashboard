# -*- coding: utf-8 -*-
"""Axiomake 定期报告生成器（GitHub Actions 版）
每日随 update.py 运行，自行判断当天该出哪些报告（北京时间）:
  周报  周日          覆盖近 7 天
  月报  每月 1 日     覆盖上个自然月
  季报  1/4/7/10 月 1 日   覆盖上季度（含重计算清单）
  年报  1 月 1 日     覆盖上一年（含主论点年审）
产物: reports/<年>/MuskIntel_<类型>_<日期>.md + reports/index.json（站内归档页读取）
纪律: A/B 级进结论；C 级单列"未核实区"，不进结论；熔断源写进头条
强制补发: 环境变量 FORCE_REPORT=weekly|monthly|quarterly|yearly
"""
import json, re, os
from datetime import datetime, timezone, timedelta

CST = timezone(timedelta(hours=8))
NOW = datetime.now(CST)
TODAY = NOW.strftime("%Y-%m-%d")

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
RPTS = os.path.join(ROOT, "reports")
IDX  = os.path.join(RPTS, "index.json")

def load_data():
    raw = open(os.path.join(ROOT, "data.js"), encoding="utf-8").read()
    return json.loads(re.search(r"window\.MUSKINTEL_DATA\s*=\s*(\{.*\});?\s*$", raw, re.S).group(1))

def days_to(dstr):
    return (datetime.strptime(dstr, "%Y-%m-%d").replace(tzinfo=CST) - NOW).days + 1

def quote_change(D, sym, since):
    ser = D.get("market", {}).get("series", {}).get(sym, [])
    inwin = [p for p in ser if p["d"] >= since]
    if len(inwin) >= 2 and inwin[0]["c"]:
        return round((inwin[-1]["c"] - inwin[0]["c"]) / inwin[0]["c"] * 100, 1)
    return None

def build(D, kind, since, label):
    L = [r for r in D["ledger"] if since <= r.get("ts", "") <= TODAY]
    ab = [r for r in L if r.get("ev") in ("A", "B")]
    c  = [r for r in L if r.get("ev") == "C"]
    fused = [k for k, v in D.get("health", {}).get("sources", {}).items() if v in ("fused", "red")]

    md = [f"# Axiomake {kind} · {TODAY}", "", f"覆盖区间: {since} ~ {TODAY}（{label}）", ""]
    if fused:
        md += ["## ⚠ 头条：数据源异常（R6 熔断纪律）",
               "以下源失败或熔断，期间对应板块数据陈旧，结论可信度相应打折: " + ", ".join(fused), ""]

    md += [f"## 一、区间事件（A/B 级 · 进结论 · {len(ab)} 条）", ""]
    for r in sorted(ab, key=lambda x: x["ts"]):
        p = r.get("payload", {})
        imp = f"（影响{'+' if p.get('impact',0)>0 else ''}{p['impact']}）" if p.get("impact") is not None else ""
        md.append(f"- {r['ts']} [{r['ev']}/{r.get('scope','1y')}] {r['title']}{imp}")
        if p.get("note"): md.append(f"  - {p['note']}")
    if not ab: md.append("- （无）")

    md += ["", f"## 二、未核实区（C 级单源 · 不进结论 · {len(c)} 条）", ""]
    md += [f"- {r['ts']} {r['title']}" for r in sorted(c, key=lambda x: x["ts"])] or ["- （无）"]

    md += ["", "## 三、行情区间变动（免费源延迟约15分钟，日频快照）", ""]
    for q in D.get("market", {}).get("quotes", []):
        ch = quote_change(D, q["sym"], since)
        cur = f"${q['price']}" if q.get("price") is not None else (q.get("mcap") or "—")
        md.append(f"- {q['name']}（{q['sym']}）: 现值 {cur}"
                  + (f"，区间 {'+' if ch>=0 else ''}{ch}%" if ch is not None else "，区间数据不足")
                  + (f"（{q.get('src','')}）" if q.get("src") else ""))

    md += ["", "## 四、剪刀差状态（状态翻转触发头条）", ""]
    md += [f"- {s['line']}: {s['state']}（约束: {s['constraint']}；盯: {s['watch']}）" for s in D.get("scissors", [])]

    md += ["", "## 五、倒计时", ""]
    for cd in D.get("countdowns", []):
        d = days_to(cd["date"])
        md.append(f"- {cd['label']}: {d} 天（{cd['date']}）" if d >= 0 else f"- {cd['label']}: 已过（{cd['date']}）")

    proms = [r for r in D["ledger"] if r.get("type") == "promise"]
    md += ["", f"## 六、承诺库核对（{len(proms)} 条）", ""]
    md += [f"- {r['ts']} [{r['ev']}/{r.get('scope','')}] {r['title']} → 状态: {r.get('payload',{}).get('status','未核')}"
           for r in proms]

    if kind in ("季报", "年报"):
        md += ["", "## 七、重计算清单（人工执行项）", "",
               "- 莱特定律曲线重拟合", "- 成本地板输入更新", "- 承诺库兑现核对",
               "- 中美六线技术树季判", "- 评分权重再平衡"]
    if kind == "年报":
        md += ["", "## 八、主论点年审（系统的灵魂条款 · 人工填写）", "",
               "- 去年核心判断的证实/证伪清单: （待填）",
               "- 决策校准: 决策日志存于浏览器本地，请在【决策与档案】导出备份后对照复盘"]

    h = D.get("health", {})
    md += ["", "---", f"数据健康: {json.dumps(h.get('sources',{}), ensure_ascii=False)} · 最后抓取 {h.get('last_run','未核')}",
           "自动核实规则 R1-R6 见 scripts/update.py；C 级不进结论为硬纪律。",
           "对外发布版请手动删除原始行情数值（规避数据源转发授权），观点与自制图表可自由发布。"]
    return "\n".join(md) + "\n"

def due_kinds():
    force = os.environ.get("FORCE_REPORT", "").strip()
    if force:
        return {"weekly": [("周报", 7)], "monthly": [("月报", 31)],
                "quarterly": [("季报", 92)], "yearly": [("年报", 365)]}.get(force, [])
    kinds = []
    if NOW.weekday() == 6: kinds.append(("周报", 7))
    if NOW.day == 1:
        kinds.append(("月报", 31))
        if NOW.month in (1, 4, 7, 10): kinds.append(("季报", 92))
        if NOW.month == 1: kinds.append(("年报", 365))
    return kinds

def main():
    D = load_data()
    idx = []
    if os.path.exists(IDX):
        idx = json.load(open(IDX, encoding="utf-8"))
    made = 0
    for kind, days in due_kinds():
        since = (NOW - timedelta(days=days)).strftime("%Y-%m-%d")
        ydir = os.path.join(RPTS, str(NOW.year)); os.makedirs(ydir, exist_ok=True)
        fname = f"Axiomake_{kind}_{TODAY}.md"
        rel = f"reports/{NOW.year}/{fname}"
        if any(e["path"] == rel for e in idx): continue          # 幂等：同日同类不重发
        open(os.path.join(ydir, fname), "w", encoding="utf-8").write(
            build(D, kind, since, f"近{days}天"))
        idx.insert(0, {"type": kind, "date": TODAY, "path": rel,
                       "title": f"Axiomake {kind} {TODAY}"})
        made += 1
    if made:
        os.makedirs(RPTS, exist_ok=True)
        json.dump(idx[:500], open(IDX, "w", encoding="utf-8"), ensure_ascii=False, indent=1)
    print(f"reports generated: {made}")

if __name__ == "__main__":
    main()
