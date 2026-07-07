# Axiomake · 器象量化研究所 — 项目交接（Claude Code 请先读本文件）

## 一句话
马斯克系资产（TSLA / SPCX）的**自动核实证据账本 + 第一性原理分析台**。纯静态站（GitHub Pages），
GitHub Actions 每日 06:30（北京时间）自动抓数据、按规则核实入库、按周期生成研报。**无后端、无构建步骤**。

## 运行 / 预览 / 部署
- 本地预览（无需构建）：仓库根目录 `python -m http.server 8000` → 浏览器开 `http://localhost:8000`。改完刷新即见。
- 部署：`git push` 到 `main` → Actions 自动跑 → GitHub Pages 发布到 https://data4954.github.io/musk-intel-dashboard/
- 数据/报告由 Actions 自动提交（scripts/update.py + report.py）。本地改 index.html/data.js 直接 push 即可。
- 验证 JS 语法（改完必做）：把 index.html 里那段大 `<script>` 抽出跑 `node --check`。

## 文件地图
- `index.html` — 全站单文件（内联 CSS + JS）。所有视图在 JS 的 `Views = {...}` 对象里，每个键=一个导航页。
  导航顺序在 `const NAVS=[...]`。渲染入口 `render(id)`。工具函数 `esc/evChip/daysTo/allLedger`。
- `data.js` — 数据账本，`window.MUSKINTEL_DATA = {...}`。**唯一数据源**，前端与脚本都读它。
- `scripts/update.py` — 每日抓取+核实入库引擎（行情/SEC Form4/发射/招聘/FEC/新闻/人物动态）。规则 R1-R6 见文件头。
- `scripts/report.py` — 研报生成器（周/月/季/年），产出 reports/*.md + reports.js（前端 zero-fetch 读取）+ state.json（状态快照做差分）。
- `.github/workflows/update.yml` — 定时任务（cron UTC 22:30 = 北京 06:30）。
- `reports/` — 研报归档。`私有-方法论存档.json` 不在仓库（在用户本机 E 盘，方法论不上网）。

## data.js 关键结构（都是数组/对象，前端按键渲染）
- `ledger[]` 事件账本（只追加）；每条 {id,type,ts,ev(A/B/C),scope(1y/5y/20y),tags[],title,payload}
- `entities[]` + `edges[]` 关系图谱；`persons[]` + `person_edges[]` 人物网络
- `scissors[]` 供需剪刀差（含 owner/valid 适用期）；`teardowns[]` 产品解剖（含 valid/asof）
- `supply[]` 先行引擎产业供应链（每条 8 层 layers，含 lname 层名/valid 适用期）
- `techtree[]` 技术树（principle/chain_edu·ind·dev/stage/valid/bottleneck）
- `political{machine,balance,external}` + `pol_capital[]`/`pol_liab[]`/`pol_chains[]`/`pol_lens[]`/`pol_biz[]`
- `valuation{tsla,spcx}`；`countdowns[]`；`market{quotes,series}`；`health{sources}`

## 硬纪律（不可违反，代码即纪律）
1. **不编造**：查不到写"未核"，绝不流畅填坑。演示值/推断必须标明。
2. **证据分级 A/B/C**：A 官方文件 > B 多源财经 > C 单源；C 级不进结论。全站保留，勿删。
3. **尺度/适用期标注**：每个结论标它适用的时间尺度（1y/5y/20y）或有效期。"结论有有效期，不是一年到头一个结论"。
4. **机器不越权**：自动入库不打影响分（影响=人工判断）。研报判语=已入库判定×当期状态，不凭空产新观点。
5. **破坏性变更先确认**：拆纪律/删功能前先讲清后果、拿到用户明确授权。

## UI 约定（血泪教训，务必遵守）
- **不用 SVG 画带中文文字的图表**——中文宽度对不齐会错位。用 HTML/CSS（grid/flex）做图表，中文原生对齐。
  参考已改好的 `.sup-grid`（先行引擎）、`.struct-board`（关系图谱）。
- **孤字占行是大忌**：已全局加 `word-break:keep-all`；新写窄单元格注意别让中文逐字换行。
- **禁止单字/单元素独占一行**；多列布局用 masonry（`column-count` + `break-inside:avoid`）避免孤列。
- 扁平化浅色风（参考马斯克系商业站）：白底、近黑字、品牌蓝 #3e6ae1、语义色 绿#0a8754/红#d3212c/琥珀#e0a012。
- 全宽居中单列（无侧栏），`.shell` max-width ~1240px。字体已偏小，用户要求整体偏大。


## 待办（用户明确要的，按优先级）
1. **关系图谱**：他要**保留可视化关系图 + 把实体清单信息并入图节点**（不是删图换文字板，我上一版删错了）。
   需要一个中文对齐不重叠的节点关系图（建议用 HTML 定位或成熟库如 Cytoscape/D3，本地可迭代）。
2. **决策档案/趋势报告板块**：这是全站灵魂与聚焦点。他要**你自己的原创结论与思想深度**，不是数据二次解说。
   目前研报是状态机模板拼装，需要真正的分析师判断层（可接 LLM API 生成，输出标注来源）。
3. **全站图表化**：尽量用关系图/图表/流程图表达文字、关系、逻辑、结论，减少纯文字堆砌。
4. 字体整体再放大约 10%（上一版曾做过但因沙盒重置丢失，需复核当前是否已生效）。
5. 政治五视角/物理供需/技术树继续按"事件链+时间链+适用期"深化，随周报更新。

## 已知状态
- Pages 偶尔被关（需在仓库 Settings→Pages 重开：Deploy from a branch → main /root）。
- EDGAR 对 GitHub IP 间歇 403，会熔断进周报头条，成功一次自动复位——属预期。
- 决策日志/批注存浏览器 localStorage，不上仓库；换浏览器前需在【决策档案】导出备份。
