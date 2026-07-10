# Axiomake · 器象量化研究所 — 项目交接（Claude Code 请先读本文件）

## 一句话
马斯克系资产（TSLA / SPCX）的**自动核实证据账本 + 第一性原理分析台 + AI 分析师判断层**。
纯静态站（GitHub Pages），Actions 每日 06:30（北京时间）自动抓数据、按规则核实入库、生成研报、自动发布。
**无后端、无构建步骤。全站数据为构建情景（2026 推演），非现实数据——免责声明已声明此点，不可删。**

## 运行 / 预览 / 部署
- 本地预览：仓库根目录 `python -m http.server 8000`（或 8777）→ 浏览器打开。改完刷新即见；浏览器常缓存 data.js，用 `fetch('data.js',{cache:'reload'})` 或硬刷新。
- 部署：`git push` 到 `main` → Pages 自动发布 → https://data4954.github.io/musk-intel-dashboard/ （仓库 About 已指向它）。
- 自动化：`.github/workflows/update.yml` 每日 UTC 22:30（北京 06:30）跑 update.py + report.py 并自动 commit+push。**本地改动要尽快 push**，否则与机器人提交分叉；分叉时账本按 id 做并集合并（只追加纪律，双方零丢失），不可硬覆盖。
- 改完必做：`node --check data.js`；index.html 的大 `<script>` 抽出跑 `node --check`；改 report.py 跑 `python -m py_compile`。
- **编辑大文件用 Python re 脚本**（本仓库中文多、CRLF/LF 混合，PowerShell here-string 匹配常失败）。

## 文件地图
- `index.html` — 全站单文件（内联 CSS + JS）。视图在 `Views = {...}`，导航序 `const NAVS`，渲染入口 `render(id)`，工具 `esc/evChip/daysTo/allLedger/renderCall/mdToHtml`。
- `data.js` — 唯一数据源 `window.MUSKINTEL_DATA`。update.py 整体 JSON 重写但**保留未知键**（analyst_calls 安全）。
- `scripts/update.py` — 每日抓取+核实入库（规则 R1-R6 见文件头）。
- `scripts/report.py` — 研报生成器。结构：摘要→核心变化→分板块判定（3.2/3.3 为表格）→风险→数据附录→**六、分析师判读（自动读 analyst_calls 注入，非留白）**。无 C 级未核实区。
- `reports/` + `reports.js` — 研报归档与前端零请求加载。

## data.js 关键结构
- `ledger[]` 事件账本（**只追加**）；`audit[]` 审计留痕；`market{quotes,series}`；`health{sources}`。
- `analyst_calls[]` **分析师判断层**（站的灵魂）：每条七件套 = title/thesis（可证伪主论点）/ chain[]（推理链）/ inversion（隐含定价反解）/ bull+bull_hold（多空对辩）/ falsifiers[]（带日期证伪条件）/ evidence[]（挂 A/B 级依据），外加 scale/conviction/review_by/written/topic。前端 `renderCall()` 渲染，**复核到期自动标红**。
- `scissors[]` 剪刀差、`teardowns[]` 解剖台、`supply[]` 8 层供应链、`techtree[]` 六技术线（供应链第一性五步框架）、`political{...}`、`persons[]+person_edges[]`、`entities[]+edges[]`、`valuation`、`countdowns[]`。

## 硬纪律（代码即纪律，不可违反）
1. **不编造**：查不到写"未核"。判断层是唯一例外通道——但必须显式标注"构建情景推演·非机器核实"+挂 A/B 依据+带证伪条件（双层分离：机器层零观点，判断层可原创）。
2. **证据分级 A/B/C**：A 官方文件 > B 多源交叉 > C 单源。**C 级任何展示层都不出现**（账本留存备审计）；A 级条目须带来源与采集时间。
3. **尺度/适用期标注**：结论有有效期；判断卡过期自动标红"暂停引用"。
4. **机器不越权**：自动入库不打影响分；机器报告判语=已入库判定×当期状态。
5. **破坏性变更先确认**；账本冲突用 id 并集合并。
6. **更新节奏**：自动项每日 06:30；人工项事件驱动、**最长月度，无季度档、无周几制**。

## UI 设计系统（已定型，改动须整体一致）
- **暖色系（Claude 风）**：底 `#f6f4ef`、面板 `#fffdf9`、墨字 `#2b2721`、accent 陶土 `#c15f3c`（链接/眉标/焦点/当前态）。语义色全部降饱和：绿 `#3e8a68`、红 `#c0554a`、琥珀 `#b07a2e`、蓝 `#5570bd`（证据B/SPCX）、紫 `#7263b5`、玫瑰 `#b06a8b`。**禁止纯色/高对比色/纯黑色块**（深色只允许小点与细线）。
- **业务线六色**（全站统一）：储能绿 / 车系陶红 / 航天蓝 / 算力紫 / Optimus 琥珀 / Neuralink 玫瑰。
- **带中文的图表一律 HTML/CSS**；SVG 仅允许画纯线条（发散图的边）。孤字防线：全局 `word-break:keep-all`。
- **Treemap（热力图）标准**：面积 × 明暗 = 程度（次序量用开方压差保小块可读），色相 = 业务线/类型，图例必须写清编码含义。先行引擎与物理供需各一张。
- **发散图标准**：HTML 绝对定位节点（中文原生对齐）+ SVG 纯线条边；`.netbox/.gnode/.pdet` 通用交互（点节点高亮关系链+下方详情面板，点空白复位）；人物页默认展开 musk 档案，人物卡已全量并入面板（无独立人物卡板块）。
- **禁项**：数字序号编码（①②、L1-L8、1.2.3. 前缀——列头/名字本身承载信息）、口语化表述（"怎么读这页/这个站是什么"→"报告结构/系统定位/图例"）、"帝国"等带倾向词、点击筛选类无意义交互。
- 布局：主次靠字号/色/留白；卡片双列消右侧空白；信息密集处用表格；说明文字并入卡内不独占大块。

## 页面架构（NAVS 顺序即阅读逻辑：结构→人→政治→基本面→长期→信号→定价→判断）
纵览（系统定位三合一卡+判定快照+主脉络+按行业分组时间线）→ 关系图谱（发散图+结构板+连带谱+传导链）→ 人物网络（发散图+档案面板）→ 政治地缘（二元事件卡置顶+周期+资本存量+传导矩阵）→ 物理供需（约束态热力图+剪刀差+解剖台双列+成本地板）→ 技术树（TRL 条形+六线供应链第一性解剖）→ 先行引擎（8层流程条+紧缺度热力图+信号扫描+Optimus三信号+逐线详情）→ 市场资本（估值解剖条+决策卡）→ 趋势报告（浅暖报告头+阅读逻辑说明+**判断层4卡**+机器研报+数据维护清单）。
`decide`（决策档案）已从导航隐藏，代码与 localStorage 功能保留，可随时恢复。


## 待办与观察点
1. **判断层复核**：4 条判断最近到期 2026-11-04（中期选举次日），到期站上自动标红，需重写或续期。
2. 人工项按维护清单（趋势报告页底）事件驱动更新，最长月度。
3. 旧 Vercel 部署（musk-intel-dashboard.vercel.app）已失效，属用户 Vercel 账号，可自行删除。

## 已知状态
- Pages 偶被关：仓库 Settings→Pages → Deploy from a branch → main /(root)。
- EDGAR 对 GitHub IP 间歇 403 → 熔断进报告头警示，成功一次自动复位，属预期。
- git 凭据已存于本机凭据管理器（push 可用）；GitHub API 操作可经 `git credential fill` 取令牌（仅限用户明确要求的仓库操作）。
- index.html 行尾 CRLF/LF 混合——用 Python re 编辑，勿用 PS here-string 精确匹配。
