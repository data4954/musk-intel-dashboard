// Axiomake 数据文件 —— 由 GitHub Actions scripts/update.py 维护，请勿手动编辑
// 编码: UTF-8 | 模式版本: 2 | 账本模型: 只追加不覆盖 | 全自动核实规则 R1-R6 见 update.py 头注
window.MUSKINTEL_DATA = {
 "meta": {
  "schema_version": 2,
  "generated_at": "2026-07-06T06:19:14+00:00",
  "generator": "fetcher.py",
  "note": "种子数据校准至2026-07-05；v2起由GitHub Actions全自动核实入库（规则R1-R6见scripts/update.py）"
 },
 "market": {
  "asof": "2026-07-06",
  "quotes": [
   {
    "sym": "TSLA",
    "name": "Tesla",
    "price": 379.0,
    "chg": -1.2,
    "mcap": "≈$1.26T",
    "src": "seed/待更新",
    "status": "yellow"
   },
   {
    "sym": "SPCX",
    "name": "SpaceX(含xAI)",
    "price": null,
    "chg": null,
    "mcap": "≈$2.6T",
    "note": "2026-06-12 IPO 发行价≈$135",
    "src": "B: TradingKey/Capital.com 2026-06",
    "status": "yellow"
   },
   {
    "sym": "BTC-USD",
    "name": "Bitcoin",
    "price": null,
    "chg": null,
    "src": "待更新",
    "status": "yellow"
   },
   {
    "sym": "DOGE-USD",
    "name": "Dogecoin",
    "price": null,
    "chg": null,
    "src": "待更新",
    "status": "yellow"
   },
   {
    "sym": "LITHIUM",
    "name": "碳酸锂(参考)",
    "price": null,
    "chg": null,
    "unit": "CNY/T",
    "src": "待更新",
    "status": "yellow"
   }
  ],
  "series": {
   "TSLA": [],
   "SPCX": []
  }
 },
 "entities": [
  {
   "id": "musk",
   "type": "person",
   "name": "Elon Musk",
   "note": "关键人风险源/注意力资产"
  },
  {
   "id": "tsla",
   "type": "company",
   "name": "Tesla (TSLA)",
   "status": "上市",
   "note": "车/储能/FSD/Optimus"
  },
  {
   "id": "spcx",
   "type": "company",
   "name": "SpaceX (SPCX)",
   "status": "上市 2026-06-12",
   "note": "发射/Starlink/xAI/X/Colossus，2026-02吞并xAI"
  },
  {
   "id": "xai",
   "type": "absorbed",
   "name": "xAI(含X)",
   "status": "2026-02并入SpaceX",
   "note": "换股比 1 xAI = 0.1433 SPCX"
  },
  {
   "id": "nlink",
   "type": "company",
   "name": "Neuralink",
   "status": "私募",
   "note": "脑机接口，人体试验中"
  },
  {
   "id": "boring",
   "type": "company",
   "name": "Boring Co.",
   "status": "私募",
   "note": "隧道"
  },
  {
   "id": "excession",
   "type": "family",
   "name": "Excession 家族办公室",
   "note": "管理人 Jared Birchall"
  },
  {
   "id": "trust",
   "type": "family",
   "name": "马斯克信托",
   "note": "TSLA/SPCX 持股主体，Form 4 间接持有栏"
  },
  {
   "id": "kimbal",
   "type": "family",
   "name": "Kimbal Musk",
   "note": "Tesla/SpaceX 董事，Form 4 独立信号源"
  },
  {
   "id": "foundation",
   "type": "family",
   "name": "Musk Foundation",
   "note": "IRS 990 年度公开"
  },
  {
   "id": "adastra",
   "type": "family",
   "name": "Ad Astra 学校(奥斯汀)",
   "note": "教育布局/人才管道"
  },
  {
   "id": "starbase",
   "type": "family",
   "name": "Starbase 市",
   "note": "2025公投建市，物理根基"
  },
  {
   "id": "humain",
   "type": "capital",
   "name": "HUMAIN(沙特)",
   "note": "xAI Series E 注资$3B"
  },
  {
   "id": "qia",
   "type": "capital",
   "name": "QIA(卡塔尔)",
   "note": "Series E 参投"
  },
  {
   "id": "mgx",
   "type": "capital",
   "name": "MGX(阿布扎比)",
   "note": "Series E 参投"
  },
  {
   "id": "whitehouse",
   "type": "political",
   "name": "白宫/特朗普",
   "note": "状态机见政治页"
  },
  {
   "id": "gop",
   "type": "political",
   "name": "共和党",
   "note": "2026中期金援对象"
  },
  {
   "id": "nhtsa",
   "type": "regulator",
   "name": "NHTSA",
   "note": "3项联邦调查在身"
  },
  {
   "id": "faa",
   "type": "regulator",
   "name": "FAA",
   "note": "星舰许可"
  },
  {
   "id": "fcc",
   "type": "regulator",
   "name": "FCC",
   "note": "频谱/Kuiper死线"
  },
  {
   "id": "china",
   "type": "political",
   "name": "中国市场",
   "note": "FSD审批预期2026-Q3"
  }
 ],
 "edges": [
  {
   "from": "tsla",
   "to": "xai",
   "kind": "资金流",
   "label": "$2B 认购 Series E 优先股",
   "date": "2026-01",
   "ev": "A",
   "src": "https://fortune.com 2026-02-02 报道/8-K"
  },
  {
   "from": "xai",
   "to": "spcx",
   "kind": "股权",
   "label": "全股并入，1 xAI=0.1433 SPCX，$1.25T",
   "date": "2026-02-02",
   "ev": "B",
   "src": "CNBC/Bloomberg 2026-02"
  },
  {
   "from": "musk",
   "to": "spcx",
   "kind": "资金流",
   "label": "个人注资 $2B",
   "date": "2026",
   "ev": "B",
   "src": "财经媒体多源"
  },
  {
   "from": "humain",
   "to": "xai",
   "kind": "资金流",
   "label": "$3B Series E",
   "date": "2026-01",
   "ev": "B",
   "src": "Sacra 公司档案"
  },
  {
   "from": "qia",
   "to": "xai",
   "kind": "资金流",
   "label": "Series E 参投",
   "date": "2026-01",
   "ev": "B",
   "src": "Sacra"
  },
  {
   "from": "mgx",
   "to": "xai",
   "kind": "资金流",
   "label": "Series E 参投",
   "date": "2026-01",
   "ev": "B",
   "src": "Sacra"
  },
  {
   "from": "tsla",
   "to": "spcx",
   "kind": "关联交易",
   "label": "合建芯片厂(奥斯汀)",
   "date": "2026",
   "ev": "B",
   "src": "财经媒体多源"
  },
  {
   "from": "musk",
   "to": "trust",
   "kind": "股权",
   "label": "主要持股经信托",
   "ev": "A",
   "src": "Proxy statement"
  },
  {
   "from": "trust",
   "to": "tsla",
   "kind": "股权",
   "label": "TSLA 持股",
   "ev": "A",
   "src": "Form 4 间接持有栏"
  },
  {
   "from": "foundation",
   "to": "adastra",
   "kind": "资金流",
   "label": "九位数注资",
   "ev": "A",
   "src": "IRS 990"
  },
  {
   "from": "musk",
   "to": "starbase",
   "kind": "根基",
   "label": "居住地/公司镇",
   "date": "2025",
   "ev": "A",
   "src": "公投记录"
  },
  {
   "from": "musk",
   "to": "gop",
   "kind": "政治恩惠",
   "label": "中期选举金援",
   "date": "2026",
   "ev": "A",
   "src": "FEC 48h披露"
  },
  {
   "from": "spcx",
   "to": "whitehouse",
   "kind": "人质依赖",
   "label": "NASA/DoD 收入 ↔ 载人航天依赖",
   "ev": "B",
   "src": "合同披露"
  },
  {
   "from": "nhtsa",
   "to": "tsla",
   "kind": "监管管辖",
   "label": "3项联邦调查",
   "ev": "A",
   "src": "NHTSA 公示"
  },
  {
   "from": "china",
   "to": "tsla",
   "kind": "监管管辖",
   "label": "FSD 全面审批预期 Q3'26",
   "ev": "B",
   "src": "财经媒体多源"
  },
  {
   "from": "kimbal",
   "to": "tsla",
   "kind": "股权",
   "label": "董事持股，历史高位减持",
   "ev": "A",
   "src": "Form 4"
  }
 ],
 "ledger": [
  {
   "id": "E001",
   "type": "event",
   "ts": "2025-03-28",
   "ev": "B",
   "scope": "1y",
   "tags": [
    "xai",
    "x"
   ],
   "title": "xAI 以 $33B 全股收购 X",
   "payload": {
    "impact": 1,
    "src": "多源财经"
   }
  },
  {
   "id": "E002",
   "type": "event",
   "ts": "2025-05-30",
   "ev": "B",
   "scope": "1y",
   "tags": [
    "musk",
    "whitehouse"
   ],
   "title": "马斯克离开政府效率部(DOGE)",
   "payload": {
    "impact": 0,
    "src": "多源"
   }
  },
  {
   "id": "E003",
   "type": "event",
   "ts": "2025-06-05",
   "ev": "B",
   "scope": "1y",
   "tags": [
    "musk",
    "whitehouse"
   ],
   "title": "特马公开决裂：反对'大而美'法案、爱泼斯坦档案爆料",
   "payload": {
    "impact": -3,
    "src": "多源",
    "note": "TSLA 单日重挫；特朗普威胁审查政府合同"
   }
  },
  {
   "id": "E004",
   "type": "event",
   "ts": "2025-07-05",
   "ev": "A",
   "scope": "1y",
   "tags": [
    "musk",
    "gop"
   ],
   "title": "马斯克宣布成立'美国党'",
   "payload": {
    "impact": -2,
    "src": "本人X帖",
    "note": "随后因顾及万斯关系搁置；报复实锤期：NASA局长提名撤回、空军叫停太平洋试验"
   }
  },
  {
   "id": "E005",
   "type": "event",
   "ts": "2025-09-21",
   "ev": "B",
   "scope": "1y",
   "tags": [
    "musk",
    "whitehouse"
   ],
   "title": "柯克追悼会：特马同场'刹车'",
   "payload": {
    "impact": 1,
    "src": "多源"
   }
  },
  {
   "id": "E006",
   "type": "event",
   "ts": "2025-12-15",
   "ev": "B",
   "scope": "1y",
   "tags": [
    "musk",
    "gop"
   ],
   "title": "Axios：马斯克重启资助共和党，'坚定重回阵营'",
   "payload": {
    "impact": 2,
    "src": "Axios"
   }
  },
  {
   "id": "E007",
   "type": "event",
   "ts": "2026-01-05",
   "ev": "B",
   "scope": "1y",
   "tags": [
    "musk",
    "whitehouse",
    "spcx"
   ],
   "title": "海湖庄园晚宴 + 星链进入委内瑞拉",
   "payload": {
    "impact": 2,
    "src": "多源",
    "note": "政治和解→地缘市场准入的直接变现案例"
   }
  },
  {
   "id": "E008",
   "type": "event",
   "ts": "2026-01-20",
   "ev": "B",
   "scope": "1y",
   "tags": [
    "xai",
    "humain",
    "qia",
    "mgx"
   ],
   "title": "xAI Series E：$20B @ $230B 估值；沙特HUMAIN $3B、QIA、MGX 参投",
   "payload": {
    "impact": 2,
    "src": "Sacra"
   }
  },
  {
   "id": "E009",
   "type": "event",
   "ts": "2026-01-28",
   "ev": "A",
   "scope": "1y",
   "tags": [
    "tsla",
    "xai"
   ],
   "title": "Tesla 以 $2B 认购 xAI Series E 优先股",
   "payload": {
    "impact": 1,
    "src": "8-K/Fortune"
   }
  },
  {
   "id": "E010",
   "type": "event",
   "ts": "2026-02-02",
   "ev": "B",
   "scope": "5y",
   "tags": [
    "spcx",
    "xai"
   ],
   "title": "SpaceX 全股收购 xAI：SpaceX $1T + xAI $250B = $1.25T",
   "payload": {
    "impact": 3,
    "src": "CNBC/Bloomberg",
    "note": "换股比 0.1433；官方理由含轨道数据中心叙事"
   }
  },
  {
   "id": "E011",
   "type": "event",
   "ts": "2026-06-12",
   "ev": "A",
   "scope": "1y",
   "tags": [
    "spcx"
   ],
   "title": "SPCX 纳斯达克 IPO：估值 $1.77T，募资 $75B，史上最大",
   "payload": {
    "impact": 3,
    "src": "S-1/多源",
    "note": "发行价≈$135；上市后市值升至≈$2.6T"
   }
  },
  {
   "id": "E012",
   "type": "event",
   "ts": "2026-06-20",
   "ev": "B",
   "scope": "1y",
   "tags": [
    "tsla",
    "nhtsa"
   ],
   "title": "内华达运输局 Robotaxi 备案曝光，TSLA 短线上涨",
   "payload": {
    "impact": 1,
    "src": "州备案+媒体",
    "note": "州级备案=最干净先行信号的实证"
   }
  },
  {
   "id": "E013",
   "type": "event",
   "ts": "2026-07-03",
   "ev": "B",
   "scope": "1y",
   "tags": [
    "spcx"
   ],
   "title": "S-1 细节：trailing 收入 $18B；Anthropic $1.25B/月、Google $920M/月租用 Colossus",
   "payload": {
    "impact": 2,
    "src": "247WallSt 拆解 S-1",
    "note": "年化$26B已签约算力收入；Q1'26 亏损 $4.28B"
   }
  },
  {
   "id": "P001",
   "type": "promise",
   "ts": "2026-02-02",
   "ev": "B",
   "scope": "5y",
   "tags": [
    "spcx"
   ],
   "title": "承诺：2030 年收入 $1T",
   "payload": {
    "deadline": "2030-12-31",
    "status": "物理紧张",
    "basis": "=2025收入的53倍，需三线同走历史最陡学习率"
   }
  },
  {
   "id": "P002",
   "type": "promise",
   "ts": "2025-11-06",
   "ev": "B",
   "scope": "5y",
   "tags": [
    "tsla"
   ],
   "title": "承诺：Optimus 年产 1000 万台",
   "payload": {
    "deadline": "2030-12-31",
    "status": "物理不可行(现有供应链)",
    "basis": "需上亿执行器/年 vs 全球减速器产能千万级；除非自研自产复制4680剧本"
   }
  },
  {
   "id": "P003",
   "type": "promise",
   "ts": "2026-04-22",
   "ev": "B",
   "scope": "1y",
   "tags": [
    "tsla"
   ],
   "title": "本人承认：Robotaxi 2027 年前无有意义收入",
   "payload": {
    "deadline": "2027-01-01",
    "status": "已兑现(反向)",
    "basis": "财报电话会"
   }
  },
  {
   "id": "P004",
   "type": "promise",
   "ts": "2026-02-02",
   "ev": "C",
   "scope": "20y",
   "tags": [
    "spcx"
   ],
   "title": "叙事：轨道数据中心",
   "payload": {
    "deadline": "—",
    "status": "物理紧张",
    "basis": "真空只剩辐射散热→质量惩罚；成本闸门=星舰$/kg<$150"
   }
  }
 ],
 "countdowns": [
  {
   "label": "TSLA Q2 财报",
   "date": "2026-07-22",
   "scope": "1y"
  },
  {
   "label": "CME SPCX 单股期货上线",
   "date": "2026-07-27",
   "scope": "1y"
  },
  {
   "label": "Kuiper FCC 部署死线",
   "date": "2026-07-30",
   "scope": "1y"
  },
  {
   "label": "FSD 中国全面审批(预期Q3末)",
   "date": "2026-09-30",
   "scope": "1y"
  },
  {
   "label": "美国中期选举(头号二元事件)",
   "date": "2026-11-03",
   "scope": "1y"
  }
 ],
 "political": {
  "machine": [
   {
    "phase": "蜜月",
    "span": "2024-07 ~ 2025-05",
    "facts": "助选/DOGE效率部/留宿白宫",
    "implication": "合同顺风+监管松绑预期"
   },
   {
    "phase": "决裂",
    "span": "2025-05 ~ 2025-07",
    "facts": "反'大而美'法案、爱泼斯坦爆料、07-05建美国党",
    "implication": "报复实锤：NASA局长提名撤回、空军叫停试验、威胁审查合同"
   },
   {
    "phase": "冷战试探",
    "span": "2025-08 ~ 2025-11",
    "facts": "建党搁置(顾及万斯2028)、09-21追悼会刹车",
    "implication": "波动率收敛，政治折价缓慢回吐"
   },
   {
    "phase": "和解",
    "span": "2025-12 ~ 2026-01",
    "facts": "重启金援共和党、01-05海湖庄园晚宴+星链委内瑞拉",
    "implication": "和解可即时兑换地缘市场准入"
   },
   {
    "phase": "当前",
    "span": "2026-02 ~ 今",
    "facts": "全力金援共和党保中期；'美国党'未注销、等待选举结果",
    "implication": "11-03 二元期权：共和党保住=顺风延续；民主党翻盘=监管反转+建党期权可能重启"
   }
  ],
  "balance": {
   "assets": [
    "中期金援(换监管善意)",
    "X平台舆论动员力",
    "星链地缘筹码(委内瑞拉/乌克兰)",
    "政府合同人质互持(NASA载人依赖)"
   ],
   "liabilities": [
    "民主党系统性敌意(翻盘即清算)",
    "欧盟DSA+Grok深度伪造多国调查(S-1风险因素)",
    "爱泼斯坦'核按钮'已按过一次(恐怖平衡)",
    "空军叫停先例(报复通道随时重开)"
   ]
  },
  "external": [
   {
    "force": "海湾主权资本",
    "fact": "HUMAIN $3B/QIA/MGX 已入股(现SPCX股东)",
    "risk": "CFIUS/国会审查随中期风向摆动"
   },
   {
    "force": "中国",
    "fact": "FSD审批预期Q3'26；上海工厂+电池稀土供应链",
    "risk": "双边人质结构：市场准入↔华盛顿缓冲作用"
   },
   {
    "force": "建制反扑",
    "fact": "反马超级PAC组建；两党吸收其主张",
    "risk": "非美国出生无总统资格→政治权力是租借的"
   }
  ]
 },
 "leading": [
  {
   "layer": 1,
   "name": "人才流",
   "lead": "6-18月",
   "items": [
    {
     "k": "招聘岗位计数(按公司×职能)",
     "v": "待抓取",
     "st": "yellow",
     "src": "careers JSON接口"
    },
    {
     "k": "关键人状态机",
     "v": "xAI 12联创并购后仅剩马斯克1人；CFO Armstrong 离职；Starlink副总裁 Nicolls 接管xAI",
     "st": "red",
     "src": "B:多源 2026"
    },
    {
     "k": "H-1B/PERM 新工作地",
     "v": "待抓取",
     "st": "yellow",
     "src": "DOL公开库"
    }
   ]
  },
  {
   "layer": 2,
   "name": "专利与标准",
   "lead": "12-36月",
   "items": [
    {
     "k": "USPTO发明人聚类",
     "v": "待抓取",
     "st": "yellow",
     "src": "Google Patents API"
    },
    {
     "k": "FCC频谱/星座申请",
     "v": "direct-to-cell 扩容申请在途",
     "st": "green",
     "src": "FCC IBFS"
    }
   ]
  },
  {
   "layer": 3,
   "name": "监管文件流",
   "lead": "1-12月",
   "items": [
    {
     "k": "FAA星舰许可进度",
     "v": "待抓取",
     "st": "yellow",
     "src": "FAA公示"
    },
    {
     "k": "州级Robotaxi备案",
     "v": "内华达备案曝光(06-20)",
     "st": "green",
     "src": "A:州文件"
    },
    {
     "k": "孟菲斯燃气轮机许可诉讼",
     "v": "进行中=Colossus电力约束的法律形态",
     "st": "red",
     "src": "法院公开系统"
    }
   ]
  },
  {
   "layer": 4,
   "name": "政治接触面",
   "lead": "0-6月",
   "items": [
    {
     "k": "LDA游说议题清单",
     "v": "待抓取(季度)",
     "st": "yellow",
     "src": "参议院LDA库"
    },
    {
     "k": "FEC捐款流向",
     "v": "中期金援投放中",
     "st": "green",
     "src": "A:FEC 48h"
    }
   ]
  },
  {
   "layer": 5,
   "name": "资本流(权重×3)",
   "lead": "0-6月",
   "items": [
    {
     "k": "Musk Form 4",
     "v": "待抓取",
     "st": "yellow",
     "src": "A:EDGAR"
    },
    {
     "k": "Kimbal Form 4",
     "v": "待抓取(独立信号源)",
     "st": "yellow",
     "src": "A:EDGAR"
    },
    {
     "k": "质押率×股价强平距离",
     "v": "待Proxy更新",
     "st": "yellow",
     "src": "A:Proxy"
    }
   ]
  },
  {
   "layer": 6,
   "name": "供应链回声",
   "lead": "3-9月",
   "items": [
    {
     "k": "宁德/松下产能指引",
     "v": "待财报季",
     "st": "yellow",
     "src": "财报电话会"
    },
    {
     "k": "锂期货远期曲线结构",
     "v": "待抓取",
     "st": "yellow",
     "src": "期货行情"
    },
    {
     "k": "三花/拓普执行器扩产公告",
     "v": "Optimus供给缺口的验证通道",
     "st": "yellow",
     "src": "公司公告"
    }
   ]
  },
  {
   "layer": 7,
   "name": "物理活动",
   "lead": "0-3月",
   "items": [
    {
     "k": "公务机ADS-B(仅本人)",
     "v": "历史两次验证：北京→FSD进展、利雅得→主权资本",
     "st": "green",
     "src": "ADS-B Exchange"
    },
    {
     "k": "ERCOT/TVA互联队列",
     "v": "数据中心扩张最早物理承诺",
     "st": "yellow",
     "src": "电网公示"
    },
    {
     "k": "Giga/星舰基地社区影像",
     "v": "Fremont Optimus线改造中(Model S/X停产)",
     "st": "green",
     "src": "B:社区+媒体"
    }
   ]
  },
  {
   "layer": 8,
   "name": "注意力与言论",
   "lead": "0-4周",
   "items": [
    {
     "k": "发帖主题占比漂移",
     "v": "待抓取",
     "st": "yellow",
     "src": "X公开帖"
    },
    {
     "k": "凌晨发帖密度(危机探测)",
     "v": "待抓取",
     "st": "yellow",
     "src": "X公开帖"
    },
    {
     "k": "数字化承诺自动提取",
     "v": "4条在库",
     "st": "green",
     "src": "承诺库"
    }
   ]
  }
 ],
 "scissors": [
  {
   "line": "储能 Megapack",
   "state": "供给约束 ★",
   "constraint": "LFP电芯产能",
   "unlock": "休斯顿Megapack 3厂投产",
   "meaning": "扩产=增利，全系最干净；Q1'26 部署8.8GWh、毛利39.5%双纪录",
   "watch": "新厂节点/电芯自供比/backlog"
  },
  {
   "line": "算力 Colossus",
   "state": "供给约束 ★",
   "constraint": "电力并网+许可(非GPU)",
   "unlock": "燃气轮机许可裁决/互联队列",
   "meaning": "需求已锁($26B/年合同)，看电不看芯片",
   "watch": "ERCOT/TVA队列、许可诉讼、自建fab里程碑"
  },
  {
   "line": "Starlink",
   "state": "双增长",
   "constraint": "频谱/单星容量(香农极限)",
   "unlock": "V3卫星代际",
   "meaning": "稳态复利；在轨8000+颗=全球LEO 2/3",
   "watch": "订户数、V3容量、Kuiper 07-30死线"
  },
  {
   "line": "发射服务",
   "state": "垄断+自造需求",
   "constraint": "星舰复用经济性",
   "unlock": "试飞×复用周转×翻新成本三变量",
   "meaning": "高凸性期权；外部订单占比萎缩=封闭经济警报",
   "watch": "复用曲线、外部商业订单占比"
  },
  {
   "line": "电动车",
   "state": "需求约束 ⚠",
   "constraint": "价格弹性/中国竞争",
   "unlock": "FSD中国Q3'26(软件变需求变量)",
   "meaning": "防守盘；降价史=需求约束自供状态证词",
   "watch": "周度上险数、降价动作"
  },
  {
   "line": "Robotaxi",
   "state": "监管供给约束",
   "constraint": "州牌照+3项NHTSA联邦调查",
   "unlock": "逐州备案",
   "meaning": "$350/股溢价主载体；42辆 vs Waymo 577辆",
   "watch": "州备案(先行L3)、调查进展、车队周计数"
  },
  {
   "line": "Optimus",
   "state": "供给缺口 ✗",
   "constraint": "谐波减速器全球产能(10倍+缺口)",
   "unlock": "自研执行器产线验证",
   "meaning": "头号证伪对象=头号先机，二者必居其一",
   "watch": "执行器招聘/设备采购(L1/L3)、Tier-1订单(L6)"
  }
 ],
 "teardowns": [
  {
   "id": "modely",
   "name": "① Model Y",
   "role": "制造物理学旗舰",
   "core": "一体化压铸+结构化电池包",
   "facts": [
    "后底板 70+ 冲压件 → 1-2 件铸件 = 工艺链删除",
    "电池包=车身结构件，包壳承担双重物理任务",
    "免热处理铸铝合金为自研材料",
    "4680 干电极良率爬坡为成本主变量"
   ],
   "chain": "命门供应商：一体压铸机(意德拉/力劲—中国供应链强项)",
   "verdict": "成本地板距离中等；学习率样本充足"
  },
  {
   "id": "megapack",
   "name": "② Megapack 3",
   "role": "唯一供不应求产品线",
   "core": "集装箱形状的电池价格期货",
   "facts": [
    "LFP 电芯占成本 60%+，碳酸锂价直接传导毛利",
    "39.5% 毛利需三分解：锂价下行/设计降本/供需溢价——可持续性完全不同",
    "休斯顿厂 = Megapack 3 工艺代际(件数删减)"
   ],
   "chain": "电芯自产 vs 宁德外购比例演变",
   "verdict": "扩产进度表=利润进度表"
  },
  {
   "id": "raptor",
   "name": "③ Raptor 3",
   "role": "$/kg 地板所在地",
   "core": "暴力简化：管线/隔热层集成进主体",
   "facts": [
    "目标单台成本十万美元量级(传统氢氧机数千万量级)",
    "全流量分级燃烧=更低涡轮温度=更长寿命=更多复用",
    "全帝国 Idiot Index 收敛最狠单品"
   ],
   "chain": "增材制造占比/单台工时演进",
   "verdict": "直接决定星舰$/kg与轨道数据中心叙事生死"
  },
  {
   "id": "starlink",
   "name": "④ Starlink V3+终端",
   "role": "最干净莱特定律实证",
   "core": "卫星=会飞的路由器，$/Gbps 唯一正确度量",
   "facts": [
    "初代终端 BOM 远高于 $499 售价(卖一亏一)→数代腰斩至转正",
    "V3 单星容量跃升一个量级+激光星间链路",
    "对照：Kuiper ~150颗 vs 8000+颗，FCC死线07-30"
   ],
   "chain": "砷化镓/氮化镓射频器件",
   "verdict": "频谱容量是物理天花板，不是发射"
  },
  {
   "id": "colossus",
   "name": "⑤ Colossus 机架",
   "role": "算力最小可拆单元",
   "core": "瓶颈是电力链不是芯片",
   "facts": [
    "单机架功率密度=传统数据中心数倍",
    "供电链(变压器/开关柜)全行业2-4年交付队列=真瓶颈",
    "122天建成10万卡已验证执行力；可复制性取决于电力设备供应链",
    "$/GPU-月成本堆栈可与 Anthropic $1.25B/月、Google $920M/月实付租金对表——外部可证伪"
   ],
   "chain": "VoltaGrid燃气轮机(许可诉讼中)",
   "verdict": "SPCX估值中唯一可逐季证伪的部分"
  },
  {
   "id": "actuator",
   "name": "⑥ Optimus 旋转执行器",
   "role": "不拆整机拆命门件",
   "core": "整机是叙事，执行器是物理",
   "facts": [
    "单台约14-40个执行器，核心=谐波减速器/行星滚柱丝杠",
    "千万台整机 ⇒ 上亿执行器/年 vs 全球产能千万级 = 10倍+缺口",
    "无框力矩电机磁钢=稀土暴露；灵巧手22自由度腱绳vs直驱成本差"
   ],
   "chain": "哈默纳科/绿的谐波产能 vs Tesla自研集成执行器",
   "verdict": "分水岭指标：执行器产线的招聘与设备采购"
  },
  {
   "id": "n1",
   "name": "⑦ Neuralink N1+R1",
   "role": "脑机第一性约束",
   "core": "功耗(毫瓦级热损伤上限)与带宽是物理死敌",
   "facts": [
    "柔性电极丝：聚合物+铂铱，细于发丝",
    "R1手术机器人节拍=产能天花板(人手无法植入)",
    "评估规模化看R1台数×单台手术时长，不看发布会"
   ],
   "chain": "定制ASIC/感应充电",
   "verdict": "TRL 4-5，20年尺度标的"
  }
 ],
 "techtree": [
  {
   "line": "能源",
   "carrier": "电池/Megapack/光伏",
   "trl": 9,
   "metric": "$/kWh 存储",
   "tipping": "储能+光伏度电 < 天然气峰值电 → 电网结构性替代",
   "cn": "宁德/比亚迪刀片",
   "verdict": "中方产能领先，成本曲线两强并行"
  },
  {
   "line": "地面运输",
   "carrier": "EV/FSD/Robotaxi",
   "trl": 7,
   "metric": "$/mile",
   "tipping": "无人出行 $/mile < 私家车持有成本",
   "cn": "比亚迪/华为系/萝卜快跑",
   "verdict": "EV中方领先；无监督FSD美方领先，Q3中国审批=两树接触点"
  },
  {
   "line": "航天",
   "carrier": "Falcon/Starship/Starlink",
   "trl": 8,
   "metric": "$/kg 至 LEO",
   "tipping": "<$150/kg → 轨道工业化经济成立",
   "cn": "长征系/朱雀/天龙",
   "verdict": "美方代差领先(复用)"
  },
  {
   "line": "计算",
   "carrier": "Colossus/自建fab/Grok",
   "trl": 8,
   "metric": "$/GW、$/M token",
   "tipping": "轨道算力见三档物理判定(当前:物理紧张)",
   "cn": "DeepSeek/通义/字节",
   "verdict": "算法差距收窄，算力(电力)是新战场"
  },
  {
   "line": "机器人",
   "carrier": "Optimus",
   "trl": 5,
   "metric": "$/工时",
   "tipping": "机器人$/工时 < 最低工资 → 劳动力经济学重写",
   "cn": "宇树/智元/傅利叶",
   "verdict": "中方供应链(减速器)占先，集成度美方下注"
  },
  {
   "line": "脑机",
   "carrier": "Neuralink N1/R1",
   "trl": 5,
   "metric": "通道×带宽/$",
   "tipping": "患者数×带宽倍增节奏",
   "cn": "脑虎/中科院系",
   "verdict": "美方临床进度领先"
  }
 ],
 "convergence": [
  {
   "point": "Robotaxi",
   "cross": "运输×AI",
   "gap": "监管供给(州牌照)",
   "status": "5y"
  },
  {
   "point": "轨道数据中心",
   "cross": "航天×计算×能源",
   "gap": "星舰$/kg<$150 + 辐射散热质量惩罚",
   "status": "20y/物理紧张"
  },
  {
   "point": "Optimus",
   "cross": "机器人×AI×制造",
   "gap": "执行器供给缺口10倍+",
   "status": "5-20y/待自研验证"
  },
  {
   "point": "手机直连",
   "cross": "航天×通信",
   "gap": "频谱与单星容量",
   "status": "5y/推进中"
  }
 ],
 "valuation": {
  "spcx": {
   "mcap": "≈$2.6T",
   "rev_ttm": "$18B(+33%)",
   "ps": "90x+",
   "q1_loss": "$4.28B",
   "locked": "Anthropic $1.25B/月 + Google $920M/月 ≈ $26B/年",
   "claim": "2030收入$1T(=2025×53)",
   "anchor": "Colossus租赁毛利可用电价+GPU折旧外部反推——唯一可证伪锚"
  },
  "tsla": {
   "price": "≈$379",
   "auto_anchor": "$27-30/股(2026 EPS≈$1.80-1.95 × 15x)",
   "premium": "≈$350/股 ≈ 市值93% 押注 Robotaxi/Optimus/FSD",
   "cash": "capex >$25B(3×2025)，后三季FCF为负",
   "hidden_gem": "储能：唯一增长+利润双具业务线"
  }
 },
 "health": {
  "last_run": "2026-07-06 06:19",
  "sources": {
   "yahoo": "red",
   "stooq": "yellow",
   "edgar": "green",
   "launchlib": "green",
   "rss": "green"
  },
  "fail_counts": {}
 },
 "launches": [
  {
   "name": "Falcon 9 Block 5 | Starlink Group 10-50",
   "net": "2026-07-05T10:50:00Z",
   "status": "Launch Successful"
  },
  {
   "name": "Falcon 9 Block 5 | Transporter 17 (Dedicated SSO Rideshare)",
   "net": "2026-07-07T07:10:00Z",
   "status": "Go for Launch"
  },
  {
   "name": "Falcon 9 Block 5 | Starlink Group 10-42",
   "net": "2026-07-09T09:05:00Z",
   "status": "Go for Launch"
  },
  {
   "name": "Falcon 9 Block 5 | Starlink Group 17-48",
   "net": "2026-07-11T02:00:00Z",
   "status": "Go for Launch"
  },
  {
   "name": "Falcon 9 Block 5 | Starlink Group 15-14",
   "net": "2026-07-13T22:38:00Z",
   "status": "Go for Launch"
  }
 ],
 "audit": [
  {
   "ts": "2026-06-09",
   "rule": "迁移",
   "action": "旧待审队列迁入审计（未入库）",
   "ev": "A",
   "title": "TSLA Form 4: 4  - Statement of changes in beneficial ownership of securities",
   "src": "https://www.sec.gov/Archives/edgar/data/1318605/000110465926071970/0001104659-26-071970-index.htm"
  },
  {
   "ts": "2026-05-04",
   "rule": "迁移",
   "action": "旧待审队列迁入审计（未入库）",
   "ev": "A",
   "title": "TSLA Form 4: 4  - Statement of changes in beneficial ownership of securities",
   "src": "https://www.sec.gov/Archives/edgar/data/1318605/000110465926055079/0001104659-26-055079-index.htm"
  },
  {
   "ts": "2026-04-02",
   "rule": "迁移",
   "action": "旧待审队列迁入审计（未入库）",
   "ev": "A",
   "title": "TSLA Form 4: 4  - Statement of changes in beneficial ownership of securities",
   "src": "https://www.sec.gov/Archives/edgar/data/1318605/000197292826000002/0001972928-26-000002-index.htm"
  },
  {
   "ts": "2026-03-09",
   "rule": "迁移",
   "action": "旧待审队列迁入审计（未入库）",
   "ev": "A",
   "title": "TSLA Form 4: 4  - Statement of changes in beneficial ownership of securities",
   "src": "https://www.sec.gov/Archives/edgar/data/1318605/000110465926025379/0001104659-26-025379-index.htm"
  },
  {
   "ts": "2026-01-12",
   "rule": "迁移",
   "action": "旧待审队列迁入审计（未入库）",
   "ev": "A",
   "title": "TSLA Form 4: 4  - Statement of changes in beneficial ownership of securities",
   "src": "https://www.sec.gov/Archives/edgar/data/1318605/000197292826000001/0001972928-26-000001-index.htm"
  },
  {
   "ts": "2026-07-06",
   "rule": "迁移",
   "action": "旧待审队列迁入审计（未入库）",
   "ev": "C",
   "title": "SpaceX IPO 令 Elon Musk 成为全球首位「兆美元富豪」 - Hypebeast CN",
   "src": "https://news.google.com/rss/articles/CBMihgFBVV95cUxPSlFfSzh6M1ViblFSUXhQd1B3UmtNcV83NE1FekQzTVJ6dUR2NV9TWmtEMEJkRWUxNXp4RUI4R3Rydy1MSlF1VVhHZW9QcThtVjhGYWI5X3F3Vjk2Sk9WZFF6VnVYWG03SUU5eG1kb1JkWjhTQ1E2ZkhyamNYSjVfYTBidG9JUQ?oc=5"
  },
  {
   "ts": "2026-07-06",
   "rule": "迁移",
   "action": "旧待审队列迁入审计（未入库）",
   "ev": "C",
   "title": "SpaceX股票上市首日飙升，马斯克成为全球首位万亿富翁 - 美国之音",
   "src": "https://news.google.com/rss/articles/CBMiyAFBVV95cUxNMF92TnVFcjRzcnVkUFZ3MWlCWDVaZFprUG9RTklFS05OX29ZU2FDUGNPbUw0NHhfbFZOOXRjY183UHdNS09VR0JqREhXU283NEltNHhSNWRQbXVadWZFVmJxRExlejRybDZnbFRuVlBwTjRzMFhVWVpWQ1ZlbC15MUVyVkxGb2IxSUZzOHpKbHlaZW5QOGpWeHIyRUlBbkZabW03TFRNUHlFelJTbEwtVHVQdkU4Q1BhWk0zTVJjS1ItTkZnbmdSMdIBywFBVV95cUxNT25FQU1nY0xyRjdLVmxndWtDOUdla1o3UzNTS0FFY3ZUVGdudVlfMDJObkpwQUhEdnJvWXhjRHBaTXVWSmU0TUF6Z2ItalNVREl2NG9NaDBYVGVDaE1nREdNYUs2SktzOEZma01kVl9DcFJVWjExbHppS2VRdHg4a3JGaG56c1RLZUptRk5hbmdZZGxFc2RIQnVBWE51LWQ1akpTbl95aHNXX1BSUjJ4NHZON3pvclFaYjQ2WHpNVkxvdXFsWWJyOWFWTQ?oc=5"
  },
  {
   "ts": "2026-07-06",
   "rule": "迁移",
   "action": "旧待审队列迁入审计（未入库）",
   "ev": "C",
   "title": "SpaceX让Musk的身家超过了比特币——这位“加密教父”下一步会怎么做？ - Moomoo",
   "src": "https://news.google.com/rss/articles/CBMiswFBVV95cUxQdDFYd0ZwbE9NdXh6eWJrU1FrLW40UEpadFVycGRUMUFCMHFYZWZMd2tQbzdwdkJmTTJwWXJyRzh0emNNSWFKLVBZUWthVndlTm44bXRsZUdfUS1iZXBvMEpLdmxpUFJmZzlQbnRyUWdIZ0x2UnI1WWdxcTR4ZHhtaC04dE5iWUlLTEV5LV9zMlJiYXV6M25fcmdDUHlQMks0Z3FSc3FtYnNkeHNEVkg0bDFOWQ?oc=5"
  },
  {
   "ts": "2026-07-06",
   "rule": "迁移",
   "action": "旧待审队列迁入审计（未入库）",
   "ev": "C",
   "title": "Musk宣布Grok 4.5于SpaceX及Tesla启动内部测试 - 品玩",
   "src": "https://news.google.com/rss/articles/CBMiSEFVX3lxTFBVX0xaN0puaWV3cWJrOVJfSzlwdlUxX21aZTAtUW4zY3hqVUtiMi0wbC1EV3hVRUdhaEZPN1NZX29BUnlpcmhqMw?oc=5"
  },
  {
   "ts": "2026-07-06",
   "rule": "迁移",
   "action": "旧待审队列迁入审计（未入库）",
   "ev": "C",
   "title": "Chinese Solar Stocks Plunge as Firms Deny Musk Space Project Links - 一财全球Yicai Global",
   "src": "https://news.google.com/rss/articles/CBMinwFBVV95cUxNT3Nia1dpRFFRYkVwQzZwalc3NTRFcUpvWFRjQWt6WDVrUkR5TnVwV1FobnNkMjNOckVmTnh6OURyaG9Vcmd5NVpORmJZUG9scjRDMThCemVXNkFWWkdJdVpLWWhTbVN3U3JRdVBITHV3dU40dE5NQ0oxbG5LYTk3dmdZWjY3X21Cc0c5RDBldmRCV3h1a2QwNHB6d0dMMDQ?oc=5"
  },
  {
   "ts": "2026-07-06",
   "rule": "迁移",
   "action": "旧待审队列迁入审计（未入库）",
   "ev": "C",
   "title": "$SpaceX(SPCX)$ $特斯拉(TSLA)$ Elon Musk，世界首富，身价超1.35万亿美元！见证历史！2... - 雪球",
   "src": "https://news.google.com/rss/articles/CBMiUEFVX3lxTE5tMUxUWFlESmhYNDBjTUd0WWpEUW9ZeE45VFFkemxybms0QkVXanMzZlZ2YVI1ZV95ZkpVUlJGWWowbGFSRXk5TkRrZEs5eVZC?oc=5"
  },
  {
   "ts": "2026-07-06",
   "rule": "迁移",
   "action": "旧待审队列迁入审计（未入库）",
   "ev": "C",
   "title": "SpaceX登陆纳斯达克马斯克远程敲钟，开盘股价大涨29% - 凤凰网",
   "src": "https://news.google.com/rss/articles/CBMiSEFVX3lxTFBmaEYyRzc2MWhGY2VKdWlSUElnZjFydzY3UEdHelRvemVLMm5nUFZpemxiNllMVVZKeTljbWpUWVhlQjhSdE1vYQ?oc=5"
  },
  {
   "ts": "2026-07-06",
   "rule": "迁移",
   "action": "旧待审队列迁入审计（未入库）",
   "ev": "C",
   "title": "马斯克宣布解散xAI，把数据中心整租给了他讨厌的Anthropic - 麻省理工科技评论",
   "src": "https://news.google.com/rss/articles/CBMiV0FVX3lxTFBCelFQQ1l5WkY5MFJ1OFZueXhoWDB5MXlXVmRVN2RjRlNHMWVLc3BNQ3RHdGlsSGw1STh3ME14ZFh4eGc1SjhvOU9yYVpMNjduNWlMeXNMZw?oc=5"
  }
 ]
};
