// Axiomake 数据文件 —— 由 GitHub Actions scripts/update.py 维护，请勿手动编辑
// 编码: UTF-8 | 模式版本: 2 | 账本模型: 只追加不覆盖 | 全自动核实规则 R1-R6 见 update.py 头注
window.MUSKINTEL_DATA = {
 "meta": {
  "schema_version": 2,
  "generated_at": "2026-07-07T07:35:30+08:00",
  "generator": "GitHub Actions · scripts/update.py",
  "note": "种子数据校准至2026-07-05；v2起由GitHub Actions全自动核实入库（规则R1-R6见scripts/update.py）"
 },
 "market": {
  "asof": "2026-07-07",
  "quotes": [
   {
    "sym": "TSLA",
    "name": "Tesla",
    "price": 419.77,
    "chg": 10.55,
    "mcap": "≈$1.26T",
    "src": "Yahoo 2026-07-07",
    "status": "green"
   },
   {
    "sym": "SPCX",
    "name": "SpaceX(含xAI)",
    "price": 160.42,
    "chg": 4.69,
    "mcap": "≈$2.6T",
    "note": "2026-06-12 IPO 发行价≈$135",
    "src": "Yahoo 2026-07-07",
    "status": "green"
   },
   {
    "sym": "BTC-USD",
    "name": "Bitcoin",
    "price": 64097.81,
    "chg": 4.25,
    "src": "Yahoo 2026-07-07",
    "status": "green"
   },
   {
    "sym": "DOGE-USD",
    "name": "Dogecoin",
    "price": 0.0768,
    "chg": 3.66,
    "src": "Yahoo 2026-07-07",
    "status": "green"
   }
  ],
  "series": {
   "TSLA": [
    {
     "d": "2026-07-06",
     "c": 393.45
    },
    {
     "d": "2026-07-07",
     "c": 419.77
    }
   ],
   "SPCX": [
    {
     "d": "2026-07-06",
     "c": 162.0
    },
    {
     "d": "2026-07-07",
     "c": 160.42
    }
   ],
   "BTC-USD": [
    {
     "d": "2026-07-06",
     "c": 61529.14
    },
    {
     "d": "2026-07-07",
     "c": 64097.81
    }
   ],
   "DOGE-USD": [
    {
     "d": "2026-07-06",
     "c": 0.0746
    },
    {
     "d": "2026-07-07",
     "c": 0.0768
    }
   ]
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
  },
  {
   "id": "NEWS-fdbcb1a34a83",
   "type": "event",
   "ts": "2026-07-06",
   "ev": "C",
   "scope": "1y",
   "tags": [
    "news"
   ],
   "title": "SpaceX IPO 令 Elon Musk 成为全球首位「兆美元富豪」",
   "payload": {
    "src": "Hypebeast CN",
    "srcs": [
     "https://news.google.com/rss/articles/CBMihgFBVV95cUxPSlFfSzh6M1ViblFSUXhQd1B3UmtNcV83NE1FekQzTVJ6dUR2NV9TWmtEMEJkRWUxNXp4RUI4R3Rydy1MSlF1VVhHZW9QcThtVjhGYWI5X3F3Vjk2Sk9WZFF6VnVYWG03SUU5eG1kb1JkWjhTQ1E2ZkhyamNYSjVfYTBidG9JUQ?oc=5"
    ],
    "note": "R3 单源未交叉，C 级默认不进结论"
   }
  },
  {
   "id": "NEWS-d6493b601020",
   "type": "event",
   "ts": "2026-07-06",
   "ev": "C",
   "scope": "1y",
   "tags": [
    "news"
   ],
   "title": "SpaceX股票上市首日飙升，马斯克成为全球首位万亿富翁",
   "payload": {
    "src": "美国之音",
    "srcs": [
     "https://news.google.com/rss/articles/CBMiyAFBVV95cUxNMF92TnVFcjRzcnVkUFZ3MWlCWDVaZFprUG9RTklFS05OX29ZU2FDUGNPbUw0NHhfbFZOOXRjY183UHdNS09VR0JqREhXU283NEltNHhSNWRQbXVadWZFVmJxRExlejRybDZnbFRuVlBwTjRzMFhVWVpWQ1ZlbC15MUVyVkxGb2IxSUZzOHpKbHlaZW5QOGpWeHIyRUlBbkZabW03TFRNUHlFelJTbEwtVHVQdkU4Q1BhWk0zTVJjS1ItTkZnbmdSMdIBywFBVV95cUxNT25FQU1nY0xyRjdLVmxndWtDOUdla1o3UzNTS0FFY3ZUVGdudVlfMDJObkpwQUhEdnJvWXhjRHBaTXVWSmU0TUF6Z2ItalNVREl2NG9NaDBYVGVDaE1nREdNYUs2SktzOEZma01kVl9DcFJVWjExbHppS2VRdHg4a3JGaG56c1RLZUptRk5hbmdZZGxFc2RIQnVBWE51LWQ1akpTbl95aHNXX1BSUjJ4NHZON3pvclFaYjQ2WHpNVkxvdXFsWWJyOWFWTQ?oc=5"
    ],
    "note": "R3 单源未交叉，C 级默认不进结论"
   }
  },
  {
   "id": "NEWS-68cdde643ce1",
   "type": "event",
   "ts": "2026-07-06",
   "ev": "C",
   "scope": "1y",
   "tags": [
    "news"
   ],
   "title": "$SpaceX(SPCX)$ $特斯拉(TSLA)$ Elon Musk，世界首富，身价超1.35万亿美元！见证历史！2...",
   "payload": {
    "src": "雪球",
    "srcs": [
     "https://news.google.com/rss/articles/CBMiUEFVX3lxTE5tMUxUWFlESmhYNDBjTUd0WWpEUW9ZeE45VFFkemxybms0QkVXanMzZlZ2YVI1ZV95ZkpVUlJGWWowbGFSRXk5TkRrZEs5eVZC?oc=5"
    ],
    "note": "R3 单源未交叉，C 级默认不进结论"
   }
  },
  {
   "id": "NEWS-2ed5db8f37a7",
   "type": "event",
   "ts": "2026-07-06",
   "ev": "C",
   "scope": "1y",
   "tags": [
    "news"
   ],
   "title": "🔥🚗 Elon Musk把Tesla的故事又往前推了一步：不是只有Robotaxi，也不是只有$TSLA的Optimus",
   "payload": {
    "src": "Moomoo",
    "srcs": [
     "https://news.google.com/rss/articles/CBMirwFBVV95cUxOR2lON1Mtb0Q2bVEwV21fcjdlYTkxdEthUWluYWpoMVZSVlg1M1Rub05iV2d3ZVl1Q2lON2dkM1kyOEhzamxPUENNbmh3NHhvekI3U2w2WDVZNVFaS2p2WS16RlFxdEpTa29FWVFxQmlMZnJyYlZxX2xlcHRqajVGRjJMenFJOHI0cjNPdzR6NnBuRVNxN1FoSGZ6R21xRFBlRDdCeFFLNDBQNnZ5czNj?oc=5"
    ],
    "note": "R3 单源未交叉，C 级默认不进结论"
   }
  },
  {
   "id": "NEWS-df79bfe8193b",
   "type": "event",
   "ts": "2026-07-06",
   "ev": "C",
   "scope": "1y",
   "tags": [
    "news"
   ],
   "title": "马斯克宣布解散xAI，把数据中心整租给了他讨厌的Anthropic",
   "payload": {
    "src": "麻省理工科技评论",
    "srcs": [
     "https://news.google.com/rss/articles/CBMiV0FVX3lxTFBCelFQQ1l5WkY5MFJ1OFZueXhoWDB5MXlXVmRVN2RjRlNHMWVLc3BNQ3RHdGlsSGw1STh3ME14ZFh4eGc1SjhvOU9yYVpMNjduNWlMeXNMZw?oc=5"
    ],
    "note": "R3 单源未交叉，C 级默认不进结论"
   }
  },
  {
   "id": "NEWS-f485869136fb",
   "type": "event",
   "ts": "2026-07-06",
   "ev": "C",
   "scope": "1y",
   "tags": [
    "news"
   ],
   "title": "Musk2011年火箭终局说|elon musk|spacex|波音|洛克希德|中国|猎鹰9号_新浪新闻",
   "payload": {
    "src": "新浪网",
    "srcs": [
     "https://news.google.com/rss/articles/CBMiY0FVX3lxTE1kalp1eC1kd3BoUXFDcmZ5Wnk5VUtzQkRiYlVkY2FMNUZSZkNUbk9Sc1ZscVBUcTZncEI5RXBLdV9jYUd2WU5oM1BnaHJtR0Y4bDE0Q1JzUWhrRndWYVQxaDhncw?oc=5"
    ],
    "note": "R3 单源未交叉，C 级默认不进结论"
   }
  },
  {
   "id": "NEWS-8f45bf034ee1",
   "type": "event",
   "ts": "2026-07-06",
   "ev": "C",
   "scope": "1y",
   "tags": [
    "news"
   ],
   "title": "Elon Musk 称全新 Tesla Roadster「大概率」将在 2026 年 4 月亮相",
   "payload": {
    "src": "Hypebeast CN",
    "srcs": [
     "https://news.google.com/rss/articles/CBMigwFBVV95cUxNM3ZRTDhuLXFzdE52QkFwRGk3VTlUekx5bkJubzAwb3AzeXRBX0ttbmtHNGFPOWp4dTV2QXhLN2w5TGhXczc3bU9vcFRUckJfbnpmcWF1VjNqNXpVMEhWdjlrcEp4eVhUczNHZURlYzFfZ3JXRHZzSExXWmVBYVRGTDhtOA?oc=5"
    ],
    "note": "R3 单源未交叉，C 级默认不进结论"
   }
  },
  {
   "id": "NEWS-5e3a68280d95",
   "type": "event",
   "ts": "2026-07-06",
   "ev": "C",
   "scope": "1y",
   "tags": [
    "news"
   ],
   "title": "SpaceX股东独家回应：合并突然且迅速，源于马斯克的巨大野心",
   "payload": {
    "src": "证券时报",
    "srcs": [
     "https://news.google.com/rss/articles/CBMiXEFVX3lxTFBVYkxGdlhYeW9IYXNZbFZWUXJtZlg0MHZaRkk4aFgxdG9HY0lyVTYyRV94djFOYWxuMFdocXkwVnJLZ0ZJSWNTVzJHS1JqNkcwNUV1dmpFSVpQaVV0?oc=5"
    ],
    "note": "R3 单源未交叉，C 级默认不进结论"
   }
  },
  {
   "id": "NEWS-32e3e54b67b2",
   "type": "event",
   "ts": "2026-07-06",
   "ev": "C",
   "scope": "1y",
   "tags": [
    "news"
   ],
   "title": "电影音乐网站- 新闻 - Elon Musk Unveiled – The Tesla Experiment",
   "payload": {
    "src": "Film Music Site",
    "srcs": [
     "https://news.google.com/rss/articles/CBMicEFVX3lxTE5zcXNoZE12SFFfVVdfSngzQjJBc3BDa3BTRU14M210ZU1jbk1SYkRSZ1Uta19PSk1JOXlnaHNiNnlkcm1PRFI1RFVoOFFhZ2F6R2tlRVAzZktRQVlMSXFzczBHeXIxSkp6VVBGWFdCbjg?oc=5"
    ],
    "note": "R3 单源未交叉，C 级默认不进结论"
   }
  },
  {
   "id": "NEWS-b10f26f5b6b7",
   "type": "event",
   "ts": "2026-07-06",
   "ev": "C",
   "scope": "1y",
   "tags": [
    "news"
   ],
   "title": "马斯克的SpaceX准备将100万颗AI算力卫星送入太空",
   "payload": {
    "src": "BBC",
    "srcs": [
     "https://news.google.com/rss/articles/CBMiZkFVX3lxTE5taks3eV9wUVE3N2V0dFF1UDFYb0dzRFc5X3BLR0R0WlpNSlJpWHVyeWlib2pHR3ZXT3NMU3BhcXM3ZmthTGhPdnlkTUJJWWpPTTV1M2xIYmlieFMzajFhYnZmSlhUd9IBa0FVX3lxTFB6aTJSUnRfVnVEaF96ZGxLeHZucVNMN1RPMFNMQmFnLWNHMmxJMHlXcG1OaERVRVA2TFU4RXRXRVhPdURaQVQtV3BZRlphTHFaeE5jd2V0U0FiNDV4MjU3RzVjWmZKU1VYajZR?oc=5"
    ],
    "note": "R3 单源未交叉，C 级默认不进结论"
   }
  },
  {
   "id": "NEWS-2f58be1606d5",
   "type": "event",
   "ts": "2026-07-06",
   "ev": "C",
   "scope": "1y",
   "tags": [
    "news"
   ],
   "title": "尽管因 xAI 造成了 50 亿美元的损失，马斯克的 SpaceX 仍持有价值 6.03 亿美元的比特币",
   "payload": {
    "src": "CoinDesk",
    "srcs": [
     "https://news.google.com/rss/articles/CBMi0gFBVV95cUxPcG1KRmNuMTNveHE1SlF4NUVRVzk5VzNzUlM4YlpyTExxaWh2NmxONTNsU2x1N2ZiaE5vR1JNMjlkeFVGeFlLNEo3cjluNTM4ZWs2NF9zNmlSRGRwdkdQMW1IS1RNRGJQd1JHYmFBaWNjdEctVVVlY1drODRwWUFtV0lpNHhIN0dveUVCdlNYSU1KNTJWcVZvOHNHUi1VbDhiQ0t1OTF1RjJiaGhyN3JIZHU1R25lVW5Zb3hPb0lQQ19Da1pzNWdJUFV2S3c5eW9BMGc?oc=5"
    ],
    "note": "R3 单源未交叉，C 级默认不进结论"
   }
  },
  {
   "id": "NEWS-9ead97fbc3d1",
   "type": "event",
   "ts": "2026-07-06",
   "ev": "C",
   "scope": "1y",
   "tags": [
    "news"
   ],
   "title": "Leverage Shares将推出全球首只3倍做多SpaceX ETP，代码ELON/MUSK",
   "payload": {
    "src": "TradingView",
    "srcs": [
     "https://news.google.com/rss/articles/CBMiZ0FVX3lxTE9BRHFKaEUyXzQ2QTlaMHlGN21OUmJMMHN0ZVN2b3dXQTBoLXlwU0xUX2t2MFM2T1hnOVpnQWlndFM4VWVydk9UM0NsVzRpNm0wQ2hRQkxUTFNUek9iUFlFcS0wMm9QM1U?oc=5"
    ],
    "note": "R3 单源未交叉，C 级默认不进结论"
   }
  },
  {
   "id": "NEWS-d648f8881775",
   "type": "event",
   "ts": "2026-07-07",
   "ev": "C",
   "scope": "1y",
   "tags": [
    "news"
   ],
   "title": "Elon Musk Needs the Cultish Support of Everyday Investors to Pull off the Massive SpaceX IPO",
   "payload": {
    "src": "富途牛牛",
    "srcs": [
     "https://news.google.com/rss/articles/CBMinwFBVV95cUxPbnlRY0pUNzcydjBCTmp6V3JoV3hIbzQxd1loek5pX1pCdVA3NkZtSC11X3NYMlYwbG1YMXNxYTFCaGFmSEF5U252WHFsRjduU053QlJDeGZRVWZfN1AyZldLZEdsQ1liN3lYRUhkaTZXcnJSX0N6WkJwZ1lHNGVlam85NHlzd2x1NVJjankwLXVYUDdvVi1GNnRUNHdwR2c?oc=5"
    ],
    "note": "R3 单源未交叉，C 级默认不进结论"
   }
  },
  {
   "id": "NEWS-d64aa2c38f7e",
   "type": "event",
   "ts": "2026-07-07",
   "ev": "C",
   "scope": "1y",
   "tags": [
    "news"
   ],
   "title": "Chinese Solar Stocks Plunge as Firms Deny Musk Space Project Links",
   "payload": {
    "src": "一财全球Yicai Global",
    "srcs": [
     "https://news.google.com/rss/articles/CBMinwFBVV95cUxNT3Nia1dpRFFRYkVwQzZwalc3NTRFcUpvWFRjQWt6WDVrUkR5TnVwV1FobnNkMjNOckVmTnh6OURyaG9Vcmd5NVpORmJZUG9scjRDMThCemVXNkFWWkdJdVpLWWhTbVN3U3JRdVBITHV3dU40dE5NQ0oxbG5LYTk3dmdZWjY3X21Cc0c5RDBldmRCV3h1a2QwNHB6d0dMMDQ?oc=5"
    ],
    "note": "R3 单源未交叉，C 级默认不进结论"
   }
  },
  {
   "id": "NEWS-a43a46af0b5b",
   "type": "event",
   "ts": "2026-07-07",
   "ev": "C",
   "scope": "1y",
   "tags": [
    "news"
   ],
   "title": "SpaceX 股价：埃隆·马斯克公司首次公开募股前市场三周内下跌27%",
   "payload": {
    "src": "CoinDesk",
    "srcs": [
     "https://news.google.com/rss/articles/CBMisAFBVV95cUxNcG1jbi0yeURLQW9RSDlMT3MtSTgwUmJ6Ynl0Y09XdTZSRVM1eWlhN0lxdVFQMUhzallPc0xzYnlDVkFuQXhEeVJyVk9uWVBvZnRQbkhKUXREdWxkdWlJTzJCS3NFV1diZHNuX2RNUmpPYlR3TTNlcFJUeHA0VDJXZjJmeTFDQkVTVnhxUjVrVlVyV3h0M2dQZF92VzFFdU4xZVk0cGhHdENhamJKN0FkMg?oc=5"
    ],
    "note": "R3 单源未交叉，C 级默认不进结论"
   }
  },
  {
   "id": "NEWS-d5748b092591",
   "type": "event",
   "ts": "2026-07-07",
   "ev": "C",
   "scope": "1y",
   "tags": [
    "news"
   ],
   "title": "誰可以購買馬斯克旗下SpaceX首發股",
   "payload": {
    "src": "大纪元",
    "srcs": [
     "https://news.google.com/rss/articles/CBMiYEFVX3lxTE5qSTBZMjBDbFNIZFkyamg3aFhfTEhOMFE5bWd4WjU2R1RUbVdmWDB0NW5ZY0NCeTh3czBHdUhxSXNJdmpNbFhVN2pnY2dlM3pwMnZOb1luQmkyMU9yN1lDddIBZkFVX3lxTFBOZmRCQWN2QW1MOFQwSHN3TDN1Q0lLdFpoYi12QVFnOUFXTVJXajJxb3JxeVZ0OFFscm9NdTFLZWN0Z1hLWUxmWTd2TTF0cnZEXzVVZ3A2dFB6dms0NWR3R2E3WG9sdw?oc=5"
    ],
    "note": "R3 单源未交叉，C 级默认不进结论"
   }
  },
  {
   "id": "NEWS-fe4d7ef10101",
   "type": "event",
   "ts": "2026-07-07",
   "ev": "C",
   "scope": "1y",
   "tags": [
    "news"
   ],
   "title": "身价破1.1兆美元 马斯克成首位“兆万富翁”",
   "payload": {
    "src": "8world",
    "srcs": [
     "https://news.google.com/rss/articles/CBMimAFBVV95cUxPbGk0OFNLM09wTUIxejJCcWRWR1FYT3VZMU1hMUYtOXpjTWFaVnZGYmhPN3dST3RobDVadkV5NXd3WlNIcjFvMGVtR2ZyRFBqcDRqdUUxdjk2TEZ4NjU2bHJYNndhaThqRzIyaHNtb29nWjhaeGcxQXVBdXZjYlJtSWhNamxueGctYm5mbDZpOTZGcGFKenpGSg?oc=5"
    ],
    "note": "R3 单源未交叉，C 级默认不进结论"
   }
  },
  {
   "id": "NEWS-28b5ddf4a6b6",
   "type": "event",
   "ts": "2026-07-07",
   "ev": "C",
   "scope": "1y",
   "tags": [
    "news"
   ],
   "title": "马斯克：SpaceX、特斯拉，将联手在德州建芯片厂，落实「Terafab」计划",
   "payload": {
    "src": "雪球",
    "srcs": [
     "https://news.google.com/rss/articles/CBMiS0FVX3lxTFBRVVJSU0o0cXpjTVRSNmhkVzgzSUlzZENYUG1DbkdQS014bVVFMDR0emZwMUhmU2RWUExiSU9tRURDTzZHNl94ckJxcw?oc=5"
    ],
    "note": "R3 单源未交叉，C 级默认不进结论"
   }
  },
  {
   "id": "NEWS-4180d7ed1ddf",
   "type": "event",
   "ts": "2026-07-07",
   "ev": "C",
   "scope": "1y",
   "tags": [
    "news"
   ],
   "title": "我觉得最讨厌SpaceX和Elon Musk的人一定是Rocket Lab的老板小胖子Peter Beck[吃瓜][吃瓜][吃瓜]​当年SpaceX推出Transport Rideshare拼车任务，小胖子的Electron小火箭的发射任务就大幅减少，而今天SpaceX强势上市，Rocket Lab的股价就应声跳水，整个美",
   "payload": {
    "src": "新浪网",
    "srcs": [
     "https://news.google.com/rss/articles/CBMiY0FVX3lxTE9Qa01Ha0ZmM0VIeENBdTVLWkVvc3FtVTd4eExGUnhQNE9MUHdrTzc0bnFnSzl3LWIwTkljM3hjZHdtdUVneFVTenRzZl8wcDljSXpYVzBNcTYwQlpPZFNtdWVUMA?oc=5"
    ],
    "note": "R3 单源未交叉，C 级默认不进结论"
   }
  },
  {
   "id": "NEWS-f28ac055ceda",
   "type": "event",
   "ts": "2026-07-07",
   "ev": "C",
   "scope": "1y",
   "tags": [
    "news"
   ],
   "title": "SpaceX員工財富或可買下聖安東尼奧40%住房",
   "payload": {
    "src": "大纪元",
    "srcs": [
     "https://news.google.com/rss/articles/CBMiYEFVX3lxTE9McXZHTlNiQjc3NFpXTGNaZ0Y3dHB5dXB4SlM1U3oycTNtMTM1UEp1NW42LTRLU1NUTGpLQU5tLTNNQlpmSk1hUzNfLWRuY29IVlJtcHJQdGhQRGVybFl5SdIBZkFVX3lxTFA0ZEI4MnFaM1gyRE5pUnVjTlN2N0RJSTBQTURlUU1uelZ1Z0R2OC01UGFTUHV5djBtTTg3YzI3TnB0SU9Qb3p0aF9LelU1VWZ2b2d4dU42RWhHb2YxOFUzdGM1THk5QQ?oc=5"
    ],
    "note": "R3 单源未交叉，C 级默认不进结论"
   }
  },
  {
   "id": "NEWS-6dc7a4250f27",
   "type": "event",
   "ts": "2026-07-07",
   "ev": "C",
   "scope": "1y",
   "tags": [
    "news"
   ],
   "title": "SpaceX IPO承销团队，至少包括21间投行，上市的内部代号为Project Apex",
   "payload": {
    "src": "雪球",
    "srcs": [
     "https://news.google.com/rss/articles/CBMiS0FVX3lxTE02Z3BaRHJ5bVhpZUdTdFdlaE5zX3ZFamVYNXE2cVFUYjRYZ2VLRXFGSm9YdXd4RHg4SVl1RUZmVGxoOVM5VjI0TVRzOA?oc=5"
    ],
    "note": "R3 单源未交叉，C 级默认不进结论"
   }
  },
  {
   "id": "NEWS-8d78ec0b7a33",
   "type": "event",
   "ts": "2026-07-07",
   "ev": "C",
   "scope": "1y",
   "tags": [
    "news"
   ],
   "title": "马斯克称脑机接口是“耶稣级别”的技术",
   "payload": {
    "src": "华尔街日报中文网",
    "srcs": [
     "https://news.google.com/rss/articles/CBMilAFBVV95cUxQUEtONmZxNGVXX0ROWFNsS1VjdlAzMGp6LTZjNmdaczk0eDBYMW1ENV9leUwtOEVWSzJCVDZuLVRiY2I3RExST0RWa2tJMnpDc1loWFVPRVNDOEliUEZSWVlDZ0tlUEI1clM2NkhYMnI2QWN1dlotaFc4UU5tSUphc0xqSHVqa3VYcGZmMWl2UGZGLURE?oc=5"
    ],
    "note": "R3 单源未交叉，C 级默认不进结论"
   }
  },
  {
   "id": "NEWS-ce4cd1f47302",
   "type": "event",
   "ts": "2026-07-07",
   "ev": "C",
   "scope": "1y",
   "tags": [
    "news"
   ],
   "title": "马斯克旗下SpaceX和xAI合并，估值将达1.25万亿美元",
   "payload": {
    "src": "华尔街日报中文网",
    "srcs": [
     "https://news.google.com/rss/articles/CBMigAFBVV95cUxNY2xWQkFDVkw5YTV0WndURGVqeVdiamdxbmhmSlNNbDRJOTBzekl4VXFQaW12VndPVXMxUXM4U3V2MFROeWRRTng3aGNfenRLVVhjUzBrTmdiN0JUSDZoZ1kzNGF3UmtEYm15WU43UGZBVE9FQnZycV9NM2k1SERtMg?oc=5"
    ],
    "note": "R3 单源未交叉，C 级默认不进结论"
   }
  },
  {
   "id": "NEWS-2975b3f7faac",
   "type": "event",
   "ts": "2026-07-07",
   "ev": "C",
   "scope": "1y",
   "tags": [
    "news"
   ],
   "title": "马斯克访谈再放暴论",
   "payload": {
    "src": "风闻",
    "srcs": [
     "https://news.google.com/rss/articles/CBMiW0FVX3lxTE82dVlwUTBEVXZIQUNUc21CczhGZlg3aDUydTVJbkpLTGNGbnhXRGF5RlBfX0wyUEIwclItMnhuc1hWTlYwMmVkQnA5NHZrUUczLWljRHdpZUw4VWs?oc=5"
    ],
    "note": "R3 单源未交叉，C 级默认不进结论"
   }
  },
  {
   "id": "NEWS-5c076d4b8d75",
   "type": "event",
   "ts": "2026-07-07",
   "ev": "C",
   "scope": "1y",
   "tags": [
    "news"
   ],
   "title": "比特币新闻：埃隆·马斯克的SpaceX原持有7.8亿美元比特币投资，在提交首次公开募股申请前，现市值降至约5.45亿美元",
   "payload": {
    "src": "CoinDesk",
    "srcs": [
     "https://news.google.com/rss/articles/CBMi0wFBVV95cUxPUjdHQ1dWRXp1X1FObjdPVWdRMnlOZ0VDaGRLUHVKTjV5NndybDlXVU5HZFVOYkFYUWRUMVFCWWdDV2wtZnV3RXZlanBaMGw3MTJSRFBZUE1ZRFhheGNNNTk0S0Y2VXFia0pCM1lXSEFEMzNnTW5YaWNnQWlkdE9iaVZHM3ZZekJVazdlTXVmSnJwRDNlaWNKbWQwUnJxZ2o5UTdZQ0VQY2drV0tQSFFFa0R0SzdNMmsySGNBdnFVV05UVTJHX19hdEQ3eGVhRHAzTC1V?oc=5"
    ],
    "note": "R3 单源未交叉，C 级默认不进结论"
   }
  },
  {
   "id": "NEWS-c74d2e8cefb3",
   "type": "event",
   "ts": "2026-07-07",
   "ev": "C",
   "scope": "1y",
   "tags": [
    "news"
   ],
   "title": "SpaceX星舰V3首飞推迟",
   "payload": {
    "src": "华尔街日报中文网",
    "srcs": [
     "https://news.google.com/rss/articles/CBMib0FVX3lxTE9qbWZLTGFBdm80Q09lMFVaQjI1SWRXSGcwTXR4djNTUnZWM1ppb0l4SFFFUmxkTFJWNTVPRWFGTXJjZ2p6OHU2TUdpbk5KNVdmSWllNTNlZjlCM3g2QlR0QXVTYlF2RThBNmF0SkhlNA?oc=5"
    ],
    "note": "R3 单源未交叉，C 级默认不进结论"
   }
  },
  {
   "id": "NEWS-8925bf7e747b",
   "type": "event",
   "ts": "2026-07-07",
   "ev": "C",
   "scope": "1y",
   "tags": [
    "news"
   ],
   "title": "创始团队出走一半，马斯克连夜调整xAI愿景，用百万GPU追平推理短板",
   "payload": {
    "src": "麻省理工科技评论",
    "srcs": [
     "https://news.google.com/rss/articles/CBMiV0FVX3lxTE9TM0Jld0djNnRxR1RJdktKM2Mycm5EdVNPcHVEWVlGM0IzQW9CSS1WRTVPQ0NRSnI5S0xTYXBBNzE3YXNPS0xidWZMS1hud1hDWEhMTEx1TQ?oc=5"
    ],
    "note": "R3 单源未交叉，C 级默认不进结论"
   }
  },
  {
   "id": "NEWS-71f70d9710e1",
   "type": "event",
   "ts": "2026-07-07",
   "ev": "C",
   "scope": "1y",
   "tags": [
    "news"
   ],
   "title": "WSJ称SpaceX曾向投资者展示手机形态AI设备原型，Musk否认",
   "payload": {
    "src": "디지털투데이",
    "srcs": [
     "https://news.google.com/rss/articles/CBMiuAFBVV95cUxOLVA4TU80Wl9wb3hnNURPZ2hZVGx3UzZMV3pPVmlOcTlweFNvSmw1SHdEUFJRVnBuNnNodjF5b1lwMkJ3QzJQdS0yNWVKcWdPRFEzVFdJa1RBVV93WFFRZHkxRGlKM2lkX3lrUTFGNllLTzRaX1I4UV9wSnFLU2tSUlh4d25CancyeDNWS0VpeHc4MmJzUXNsR1I0UGUtUkM4SWZmZ1g5NjJiRXZWVG80R1d3MXNGZmx4?oc=5"
    ],
    "note": "R3 单源未交叉，C 级默认不进结论"
   }
  },
  {
   "id": "NEWS-a1b1efbd6088",
   "type": "event",
   "ts": "2026-07-07",
   "ev": "C",
   "scope": "1y",
   "tags": [
    "news"
   ],
   "title": "史上最强并购打造探索宇宙巨头：SpaceX合并xAI",
   "payload": {
    "src": "维科号",
    "srcs": [
     "https://news.google.com/rss/articles/CBMiT0FVX3lxTE5yejIwVEpoRE9iXzFJd0lHUXUtd3pTazBPbE9lV2k2ek15VWlraHFNaENraEJXM1ktbURDMS1vN3I2YTg4RXczUmZGalo1c2c?oc=5"
    ],
    "note": "R3 单源未交叉，C 级默认不进结论"
   }
  },
  {
   "id": "NEWS-a2f30d467d78",
   "type": "event",
   "ts": "2026-07-07",
   "ev": "C",
   "scope": "1y",
   "tags": [
    "news"
   ],
   "title": "xAI联合创始人相继出走，马斯克称须推倒重建",
   "payload": {
    "src": "华尔街日报中文网",
    "srcs": [
     "https://news.google.com/rss/articles/CBMijwFBVV95cUxPNlduRlpGMy1BSEwzLTJ0YjZYaVMxbmtUd1lGc0xwdFZKQ2NKYUhyZll6VzctVDZnMnpwNWFjanVqeEVVSWRTZGd1cklZdGx1dVpWVG16UXlWaXl6b1dpOU8xcTRleERLWERNZ3IyNS1BNEw2X2JlVURuc3hQM2J6TUVNZGc4djdRUk85WGFNOA?oc=5"
    ],
    "note": "R3 单源未交叉，C 级默认不进结论"
   }
  },
  {
   "id": "PNEWS-ba394dc9a11c",
   "type": "event",
   "ts": "2026-07-07",
   "ev": "C",
   "scope": "1y",
   "tags": [
    "news",
    "person:birchall"
   ],
   "title": "马斯克悬了？曾给奥尔特曼特斯拉席位，红颜知己证词反帮OpenAI",
   "payload": {
    "src": "https://news.google.com/rss/articles/CBMiSEFVX3lxTE1iVWt0OTdRME1BbWpqekdWcy1LcHVBSkg5MDRoVVR6NFpHTGRiYXVRNy1oNWZldms0U09waFA0cGNfc0lja0hFQw?oc=5",
    "note": "人物通道自动抓取（R3 单源 C 级，不进结论）"
   }
  },
  {
   "id": "PNEWS-c5fe0ea98ca0",
   "type": "event",
   "ts": "2026-07-07",
   "ev": "C",
   "scope": "1y",
   "tags": [
    "news",
    "person:birchall"
   ],
   "title": "马斯克重建xAI组织图曝光，12名旧臣空降，三线大换血",
   "payload": {
    "src": "https://news.google.com/rss/articles/CBMiTkFVX3lxTFBJcDh6OTRyamc3Vy0zclVaY05KWWs4LVVSVU90azVzNUV4RHZFbU5CWElaMHNIdU9lZnF3ZDRjc1RDWTl3R0VhODROY1dLUQ?oc=5",
    "note": "人物通道自动抓取（R3 单源 C 级，不进结论）"
   }
  },
  {
   "id": "PNEWS-efbe2c616c81",
   "type": "event",
   "ts": "2026-07-07",
   "ev": "C",
   "scope": "1y",
   "tags": [
    "news",
    "person:kimbal"
   ],
   "title": "全球首位萬億富豪怎養成？馬斯克母親曝六家規",
   "payload": {
    "src": "https://news.google.com/rss/articles/CBMiYEFVX3lxTFB5MEhycXZzVERLUE5MRlV1WWJfY0NQLW5fS05HSGtaRWQzdjYzZXpjNTE3UkJ2em52MEJxZ0ZEYnhxZkpSaFdRc2JpbDZmOUxCTUo1ZUV4Y2p3Tk52YURaLdIBZkFVX3lxTFBsdk8zNy1lVUdnZ0RtU3pmRTdmLVJ1MXM2bWs1MGJjY0V0c2F1V0NHMzF1bU1Cb2lBdHhQcUpOTVcyNkhnQzlaX0ZIMHRuLWE3SUxZRVNWTk5EX1ZiS1V6UjlJQWRSQQ?oc=5",
    "note": "人物通道自动抓取（R3 单源 C 级，不进结论）"
   }
  },
  {
   "id": "PNEWS-70a6197a2ff7",
   "type": "event",
   "ts": "2026-07-07",
   "ev": "C",
   "scope": "1y",
   "tags": [
    "news",
    "person:kimbal"
   ],
   "title": "两名特斯拉董事会成员深陷Epstein文件风波：接下来会发生什么？",
   "payload": {
    "src": "https://news.google.com/rss/articles/CBMisgFBVV95cUxOOWExaDRCYlkyeVNCSzRiSTJtUXlDclUyQWotWnpSR3dRaHpOTEN2NzdvWFB0WDlsRHp6b0E2OTdiR1FoY084TWlMNGdQTm5FMDg1NjdmLWNac3ZUT25od0JCUl9HMGluWGZxMU5reFU5R2xfaFNoQ3gyUHNQQlFuOUNfcFVIRERIZ0pjenNpSldWemJiUjdvSi1FOE5kZURuM0RlOHpfV1paS056YXBkUkpB?oc=5",
    "note": "人物通道自动抓取（R3 单源 C 级，不进结论）"
   }
  },
  {
   "id": "PNEWS-fd2c16a0cf67",
   "type": "event",
   "ts": "2026-07-07",
   "ev": "C",
   "scope": "1y",
   "tags": [
    "news",
    "person:ellison"
   ],
   "title": "7月全球十大富豪",
   "payload": {
    "src": "https://news.google.com/rss/articles/CBMiUEFVX3lxTE9Eak8tb2w3YzVGeC1heXpXVWZOSXFybUktZVptcGs0VXVmdTNhUnlGc1I2ZWh2dWFkT1ZPSHJDd2dnTF9ZRjF0eHdKSUdySzBH?oc=5",
    "note": "人物通道自动抓取（R3 单源 C 级，不进结论）"
   }
  },
  {
   "id": "PNEWS-343109598ac7",
   "type": "event",
   "ts": "2026-07-07",
   "ev": "C",
   "scope": "1y",
   "tags": [
    "news",
    "person:ellison"
   ],
   "title": "扎克伯格、埃里森和黄仁勋将加入特朗普的科技委员会",
   "payload": {
    "src": "https://news.google.com/rss/articles/CBMirAFBVV95cUxON3UxUmNDTGpLLVZSNXpuOVFRQkdBcklQX014dFFjV3FTN3lZbGpwNW4xNFNrVkhHMFA0NzFxeWtTRzJLS3F5eXVZdDJ4cXdMaTU1TW0wNVlsTmRVWjQzNTJYQW9ISUYxNlpvZzVxN05VeFJXZXNTV3dLeXctcXpkX1dYTnNFOS1xNHhsMmVBMVB5U0FPWlRKazFDWFdmVFVwaVhtOGp6UGt0Q01k?oc=5",
    "note": "人物通道自动抓取（R3 单源 C 级，不进结论）"
   }
  },
  {
   "id": "PNEWS-dec97b0ce008",
   "type": "event",
   "ts": "2026-07-07",
   "ev": "C",
   "scope": "1y",
   "tags": [
    "news",
    "person:sacks"
   ],
   "title": "企业应该“小心”大模型“学会然后抄袭”？ 美国风投家David Sacks表示",
   "payload": {
    "src": "https://news.google.com/rss/articles/CBMiVkFVX3lxTE1YekpsYUVzUWVWRnlBWGJoRW5EM1pxWGxVN2JZbTZIbUtkZW1jUTk0NnNoN3pBX1hVLXV1bndtYUgzd3pHTlUtWW83bmZlSF8zSVg4bDln?oc=5",
    "note": "人物通道自动抓取（R3 单源 C 级，不进结论）"
   }
  },
  {
   "id": "PNEWS-f2026a7e330c",
   "type": "event",
   "ts": "2026-07-07",
   "ev": "C",
   "scope": "1y",
   "tags": [
    "news",
    "person:sacks"
   ],
   "title": "资本唯一的信仰是自利",
   "payload": {
    "src": "https://news.google.com/rss/articles/CBMiW0FVX3lxTE4zeGZCc0t0bnpZV0E0c3dSMnNxTXU1SklCZGl2SEFDbUNtbE54N2xWQzdZVDYzYjhrbFJuVjNxaTVIai04a3gyREo4RTZzOWs2UDNOOEE0SzdIX0k?oc=5",
    "note": "人物通道自动抓取（R3 单源 C 级，不进结论）"
   }
  },
  {
   "id": "PNEWS-85b091cf4f72",
   "type": "event",
   "ts": "2026-07-07",
   "ev": "C",
   "scope": "1y",
   "tags": [
    "news",
    "person:thiel"
   ],
   "title": "美国有人发癫：教皇这么干，“为中方办事”",
   "payload": {
    "src": "https://news.google.com/rss/articles/CBMiakFVX3lxTFB2QldiVHdjTm8za3RwbDgxSHUtZndxTjhHdEx3bGVtT1o4dWw4X3FXRnhDaUQxYVFQcExDN0kyN3VIZzdnMW16TDFHSkYxOFR4R01mZGZVaVNEY3FZbVVlT1U0RnF6c3hORWc?oc=5",
    "note": "人物通道自动抓取（R3 单源 C 级，不进结论）"
   }
  },
  {
   "id": "PNEWS-422f400e04d7",
   "type": "event",
   "ts": "2026-07-07",
   "ev": "C",
   "scope": "1y",
   "tags": [
    "news",
    "person:thiel"
   ],
   "title": "彼得·蒂尔，Palantir的联合创始人，批评了教皇利奥十四世对人工智能监管的呼吁，指责他服务于中国的利益。",
   "payload": {
    "src": "https://news.google.com/rss/articles/CBMivwFBVV95cUxOR3VPei1SMHFGMmxnT29JQjFhY3E3RjMxZ19zXzl3RDlaWlBPUGpmN0dOUktaaHB6NjhOaXpCVHdFaUw5SV9EQTVJTVRBQU1rMGZQYXNIbzlPSng2blI4Tko5OU9rTHJRdHUwUmx4SHA5Y290dXpQYnZaTFR1bW92R0NSeERybEhOUG9NNzhDUTAwMEJvZjVuNGdBb3pQNzZXU3hyWnVuNXdzUnB4THVmNVpNdFFJbVRFVHhTU1pKSQ?oc=5",
    "note": "人物通道自动抓取（R3 单源 C 级，不进结论）"
   }
  },
  {
   "id": "PNEWS-c5f4cb0e4bd9",
   "type": "event",
   "ts": "2026-07-07",
   "ev": "C",
   "scope": "1y",
   "tags": [
    "news",
    "person:andreessen"
   ],
   "title": "硅谷教父 Marc Andreessen：别内省了，去解决瓶颈——从 Netscape 到 a16z 的“反停滞”方法论",
   "payload": {
    "src": "https://news.google.com/rss/articles/CBMiSEFVX3lxTFBTNzZsM2pxTHZHUmhfQmpLVnNPRlVfbkNoZUExXy1XVk53eUJlaWpKcS1LRFlPNmFUZFVfaDdYYzJzZHhRQVZhag?oc=5",
    "note": "人物通道自动抓取（R3 单源 C 级，不进结论）"
   }
  },
  {
   "id": "PNEWS-673042baa803",
   "type": "event",
   "ts": "2026-07-07",
   "ev": "C",
   "scope": "1y",
   "tags": [
    "news",
    "person:andreessen"
   ],
   "title": "唐杰回应马斯克预测|marc andreessen|唐杰|马斯克|fable 5|anthropic_新浪新闻",
   "payload": {
    "src": "https://news.google.com/rss/articles/CBMiY0FVX3lxTE5rRnBiLTdmaTAzeDRqbDRXM01aU3F2dFo4Um5VM3dRUWJXbUhCbzFjSE5yQ05PajlOdzBBZTZlNVEybW56cW16X2h6MmxfdmdadWRKbVNxVTY5M2hDdDVuZXBpTQ?oc=5",
    "note": "人物通道自动抓取（R3 单源 C 级，不进结论）"
   }
  },
  {
   "id": "PNEWS-60a04857c2e4",
   "type": "event",
   "ts": "2026-07-07",
   "ev": "C",
   "scope": "1y",
   "tags": [
    "news",
    "person:baron"
   ],
   "title": "🔥🎯为什么我会特别在意 Ron Baron 再次喊出：$TSLA 十年看到 10,000 美元？ 1️⃣ 先看人，不看数字。",
   "payload": {
    "src": "https://news.google.com/rss/articles/CBMitAFBVV95cUxOcTh5Y1JkZkhsRDQ3VjN2OFNpbVFEVnVLS2hXOHdadGZVODNES1pBOXdsaGdwVlBBak1DbVR5YU1pdS0zMS1idmhPNkFaeXNSeG9oNVFvSHVscmllRkRaM2wzVy1Hc3h2bzFqSXl2bXYtYkpXaUNGNlBtVEU4LVlrWDc2R2NhMm1qZGlBa2MtUHFuTDBZN21rMXNMcVhCWVFndDRTcHNxcHRzRk5RRkt3bEtSUTY?oc=5",
    "note": "人物通道自动抓取（R3 单源 C 级，不进结论）"
   }
  },
  {
   "id": "PNEWS-7639aeffd367",
   "type": "event",
   "ts": "2026-07-07",
   "ev": "C",
   "scope": "1y",
   "tags": [
    "news",
    "person:baron"
   ],
   "title": "马斯克披露Neuralink突破：仿生腿技术将助瘫痪者恢复行动能力",
   "payload": {
    "src": "https://news.google.com/rss/articles/CBMiVEFVX3lxTE96UWhPVVh1TDB6VHVtZ1dRaFo4b1VQVmtvdkxrZ3lpdFFoMUt0NV9CNUFqanV5cmRNSzdkUElBbGIzMkNwa1gxVHEtajA2aHFBcXJrVA?oc=5",
    "note": "人物通道自动抓取（R3 单源 C 级，不进结论）"
   }
  },
  {
   "id": "PNEWS-a813382899e9",
   "type": "event",
   "ts": "2026-07-07",
   "ev": "C",
   "scope": "1y",
   "tags": [
    "news",
    "person:wood"
   ],
   "title": "追踪Cathie Wood：重仓特斯拉并看涨，大幅减持Strata Critical Medical",
   "payload": {
    "src": "https://news.google.com/rss/articles/CBMiswFBVV95cUxNYjh4eXdwc1dlLVQzVEowMjNyV1ByN3BQUDBwX2NvRi01N2I4WTE3WDgzd3JHUFJzMlZfbmNuYmtJSkFDSnVSNGUzMU9IQWZtazZHNGRkQkRaNzFTSWd6MzZuMkFkT0VPX1hGckQ3eDdGS0IwaWZzemh2WjVPWUY2Y1lWeTMzdmN6QUI2U01lTkp3S1MxT1o3YTdkb1JDUC1qWWRCcmt4SnRkRkF5OV8wTzN4Yw?oc=5",
    "note": "人物通道自动抓取（R3 单源 C 级，不进结论）"
   }
  },
  {
   "id": "PNEWS-02f7b4e8e12e",
   "type": "event",
   "ts": "2026-07-07",
   "ev": "C",
   "scope": "1y",
   "tags": [
    "news",
    "person:wood"
   ],
   "title": "Cathie Wood旗下ARK基金周四卖出阿里巴巴ADR 三周前刚加仓",
   "payload": {
    "src": "https://news.google.com/rss/articles/CBMiYEFVX3lxTE9uS0lzRXdNclRZWTZCUm9WQllTTFhibXMwTnhIZDF0SHNjQlZaZmVrTldGdUNNZHE0OEZNalVhSHJTMmhSa3M0R3M3RmJJa000TU5HeldmaV9rVUxSWHlKMg?oc=5",
    "note": "人物通道自动抓取（R3 单源 C 级，不进结论）"
   }
  },
  {
   "id": "PNEWS-4499cfc20b5b",
   "type": "event",
   "ts": "2026-07-07",
   "ev": "C",
   "scope": "1y",
   "tags": [
    "news",
    "person:griffin"
   ],
   "title": "Ken Griffin的对冲基金卖出闪迪买入一只量子计算股票，释放了什么信号？",
   "payload": {
    "src": "https://news.google.com/rss/articles/CBMi0wJBVV95cUxPT1JpOFFFOUdtcThqcC1SeUpwWEZrZm55SU9Vc0cwVlhZam95eE8yRXBXWjN1dUc2bVBlVkR0OG9rZHZXTUdNX09LME53bHJiejhxbXhaV0tQanhqa2pxMG53bDItR1V4LVYyUkZqbjhrSHRnVWpaOFZQTFRRWHJlb0NIRDMtUl9yMnk0aGotajdjV29xX2pLV1p4ZFdwUmVSeXAtY2RkQUdJR3JzMU9kM2E2NnhPa0N5UnJVRl9iN2ZzLW85RGtWblpmWVpnN1BITmZVNnE5Qi1KM3ItM2ZfNUMyMTlCWmRGNnpUOXUzOHFER0R5ZEV6SnMyN29SNGFkTEVrWFZTd3R5aUZPWHpHbFQxS2lsWjdyNTJqZXFIcFpCSTlrcTdXRzR0RFRCS1hRUnI1S0FYaWtzTFVudWpjSlluVTVnQTJlNUFJbzVrVTZHR0k?oc=5",
    "note": "人物通道自动抓取（R3 单源 C 级，不进结论）"
   }
  },
  {
   "id": "PNEWS-a15179213fbc",
   "type": "event",
   "ts": "2026-07-07",
   "ev": "C",
   "scope": "1y",
   "tags": [
    "news",
    "person:griffin"
   ],
   "title": "新对冲基金之王Ken Griffin：08年差点崩盘、汲取经验涅槃重生、下一步或奔向政坛",
   "payload": {
    "src": "https://news.google.com/rss/articles/CBMiU0FVX3lxTE5Eb09wNjZvNk9JLXhjSVYwSHZmX3EtZ0U5S3I3N2w0WkQtYk9feVZHVlRPR0h5RkxTeHRtVzRMVENRSzZfMzB5MVNXOE9tQVlTdWxB?oc=5",
    "note": "人物通道自动抓取（R3 单源 C 级，不进结论）"
   }
  },
  {
   "id": "NEWS-9cd86a771b3b",
   "type": "event",
   "ts": "2026-07-07",
   "ev": "C",
   "scope": "1y",
   "tags": [
    "news"
   ],
   "title": "马斯克1.25万亿美元并购案幕后：一场AI与太空的豪赌",
   "payload": {
    "src": "华尔街日报中文网",
    "srcs": [
     "https://news.google.com/rss/articles/CBMickFVX3lxTE1NNzBZTl8xVDVIZ0xSYlhzNEMwcXZtSXB4cUZFcGk2UmQxMXJvTEtxVTBEckdTc2JVb19abU9uZVNteDU1TUhKRGRBRUdmN2k1STBJd01tSm5SWHZFLXVFdVdMcnpKSXpjc1cyTWtBYmV2QQ?oc=5"
    ],
    "note": "R3 单源未交叉，C 级默认不进结论"
   }
  },
  {
   "id": "NEWS-4d04b79ba476",
   "type": "event",
   "ts": "2026-07-07",
   "ev": "C",
   "scope": "1y",
   "tags": [
    "news"
   ],
   "title": "SpaceX 与特斯拉若真合并，投资者该狂欢还是趁早离场？",
   "payload": {
    "src": "TradingKey",
    "srcs": [
     "https://news.google.com/rss/articles/CBMiywFBVV95cUxQN3NDQnRBeDhwclJ4WlZGVTlHT1lQbmVDMTQwQmxIRHRnS3NwRUZMLUpYMHBkVTlNUjVSVU9SLUxBczFNTjBTNG9YNVpWOWNiVU03WlB1WlliY1lhZ183Q19falJVams5bnR6R2RzbFJsZXk4bkhSNkh4VUtQcEw5UXZMRkQzVlptZWhVVjhEbTcxZnhyLUg5em9XUTNpRktWYVRoakJTcUxjaF9Yd1VEWnNVS1pOanlPWVBSdjktMW5fd1VPZDdHM2lnUQ?oc=5"
    ],
    "note": "R3 单源未交叉，C 级默认不进结论"
   }
  },
  {
   "id": "NEWS-b57d45a36008",
   "type": "event",
   "ts": "2026-07-07",
   "ev": "C",
   "scope": "1y",
   "tags": [
    "news"
   ],
   "title": "德国人为何不买Tesla？调查：因为Elon Musk的政治立场",
   "payload": {
    "src": "MyWheels 车天地",
    "srcs": [
     "https://news.google.com/rss/articles/CBMirwJBVV95cUxOYzlENkFLR19rMElXX0xEV3E0M1pKN2I3b01DbUpXM0lzUVBmaWx2eDZUejJabUpFeV9XWWVGdkwtcHdtQmUwOE1nWVlqSGtVRGhjeFFwYXhxOHR5bWFCYzJHXzZ1YWpDSnVILU1fWEhpdFlQYWc3Ni14VDZuNGpIUmhGWVplN1RBanRiY0RWejU2YnpubVFNVUtVdkJtTlJpbm9ReEhWdXVjUEljT3FwckdDQV9ZTVF6S1BFU1lUbHprYVRDRERNVDNGMFpmLU16QURNT1FBRkJXWGJ2SmdvREtGdDc1MW9YLWtUR2NIcjZTc1h5eXFIUmduRWlReHdpRVQ2M0lER2ozVE5XcnQySmd4aUR0cVJ0Wm02MExRdmo0cFl0c0RLLWNPTEJUT1E?oc=5"
    ],
    "note": "R3 单源未交叉，C 级默认不进结论"
   }
  },
  {
   "id": "NEWS-0be40af7ec57",
   "type": "event",
   "ts": "2026-07-07",
   "ev": "C",
   "scope": "1y",
   "tags": [
    "news"
   ],
   "title": "在与埃隆·马斯克的xAI达成巨额交易后，SpaceX的6.5亿美元比特币将何去何从",
   "payload": {
    "src": "CoinDesk",
    "srcs": [
     "https://news.google.com/rss/articles/CBMiwgFBVV95cUxQQUlGNVhLaTVYb3BBMEZkUmVPMTRpQzJDb0NBQnIxMHZUS1ZnTkRpQTZBTmRVWTVhRndKbC1pT1g4UHRpQ3FfRFBNTmdYWHkwOGMwcFZ1MF9TeDF6Z1BTcDlFUk1YN1c0Nkx1RDZYaWEybnZSUW1GbEo2alRBOGZtQW01M091RlVUb0FCRm1jUlRuVi1JMTBUU2o2TjgyT2IxR09qZzBhZ3JNczZUN0JTQ0t5dFZjcjh2ZldIRVVFV1hrdw?oc=5"
    ],
    "note": "R3 单源未交叉，C 级默认不进结论"
   }
  },
  {
   "id": "NEWS-431ccc05a3e1",
   "type": "event",
   "ts": "2026-07-07",
   "ev": "C",
   "scope": "1y",
   "tags": [
    "news"
   ],
   "title": "SpaceX上市首日高开11%，市值达1.78万亿美元",
   "payload": {
    "src": "纬度新闻网",
    "srcs": [
     "https://news.google.com/rss/articles/CBMiZkFVX3lxTE5hbzM3SEdmNE5lUGxQT0tIR1NjM3B3MzVLb1BXMmxSNFBNSG5sMW1vYjR4UV9EMXUxM1g5cnh1YnZWS3o0RG9wRFRVWXFLZ09feU9aRS1kUmk3UXgxdk5CVFZXR2FRQQ?oc=5"
    ],
    "note": "R3 单源未交叉，C 级默认不进结论"
   }
  },
  {
   "id": "NEWS-17e8ae5ab034",
   "type": "event",
   "ts": "2026-07-07",
   "ev": "C",
   "scope": "1y",
   "tags": [
    "news"
   ],
   "title": "xAI完成200亿美元E轮融资，超额实现目标",
   "payload": {
    "src": "华尔街日报中文网",
    "srcs": [
     "https://news.google.com/rss/articles/CBMigAJBVV95cUxQa1JvZ29FcUNCdU40aE50cXJFSEZqQkJPVHdZbGVhVy1rWlM1UEhQUzZDOUlaekV1MnNHakhKbzN2SVJlSUE5Vzh1LWJDT2tNTy15WUl5NVVTUkN4RVVqUGJickFWVWZHR0tucHZZOWdsSEg0bi1HTjdWbFRMS3hLUjBLVzBNYlM4eS00U0wxOTc0M2FmRm5CdTdERGR2N2NKUjREZUh4ZnI0Mmdpc1lsei1wUmFQQ2FMV2lCcnFMSEI5OE02VEItdWQ5ZDgtMGtjaDBlRE11S2ZXb01JeWRBV2taQU4ybjBMWkRpNzc0TTM2eTVvMnoyYjVpRWplMGZO?oc=5"
    ],
    "note": "R3 单源未交叉，C 级默认不进结论"
   }
  },
  {
   "id": "PNEWS-308e40f3d33d",
   "type": "event",
   "ts": "2026-07-07",
   "ev": "C",
   "scope": "1y",
   "tags": [
    "news",
    "person:birchall"
   ],
   "title": "马斯克重建xAI组织图曝光 核心盟友全面接管",
   "payload": {
    "src": "https://news.google.com/rss/articles/CBMicEFVX3lxTE5KeFJVdXc4NGh3ZjJqODFMMlR4X3JQMWJaWTFIU3RHRFUzMXFwVGZvdzV2cm85c3hHRXc2b1h1ZkFSaDY2OG96VmVnRHdxWTJJTzZ1VzM3MzZWaERwWDhTeVR5UW9zbjlGQkg0VTUyNmo?oc=5",
    "note": "人物通道自动抓取（R3 单源 C 级，不进结论）"
   }
  },
  {
   "id": "PNEWS-c87bd3e80523",
   "type": "event",
   "ts": "2026-07-07",
   "ev": "C",
   "scope": "1y",
   "tags": [
    "news",
    "person:birchall"
   ],
   "title": "xAI多位高管离职前曾与马斯克亲信顾问发生冲突",
   "payload": {
    "src": "https://news.google.com/rss/articles/CBMiggFBVV95cUxONEJhQWhlUG5aS2xZZDBaY1ZVSnNSZlRCSU53QmVycTctLXdaY1psNkF5NWZBTElDc1BxbWYtX1dWYlM0UUtORXQ4TEdmalBJV2s5YWRqcEo5bl90S1A3cEZ1YUxMbXFhVm0wTVRNUDVKVk15VzVHZFh0bVBwSjZVVnln?oc=5",
    "note": "人物通道自动抓取（R3 单源 C 级，不进结论）"
   }
  },
  {
   "id": "PNEWS-f8689ae66d81",
   "type": "event",
   "ts": "2026-07-07",
   "ev": "C",
   "scope": "1y",
   "tags": [
    "news",
    "person:kimbal"
   ],
   "title": "马斯克弟弟金巴尔·马斯克一天内减持超800万美元特斯拉股票",
   "payload": {
    "src": "https://news.google.com/rss/articles/CBMiZkFVX3lxTE1IWGhhY2xQZ3g2eW9jVmxRNDl2dkFlbVVxX3pCZzFCY0hQZV9BLU9SeUFzWWV0Nm42dnZOUEdPMGNjV0lZZHJCcnhTU3RmXzkxRXF0dThpUG43dms1TGhHa3c2ODU4Zw?oc=5",
    "note": "人物通道自动抓取（R3 单源 C 级，不进结论）"
   }
  },
  {
   "id": "PNEWS-65f78733ba40",
   "type": "event",
   "ts": "2026-07-07",
   "ev": "C",
   "scope": "1y",
   "tags": [
    "news",
    "person:kimbal"
   ],
   "title": "全球首富阿爸 接受专访爆料 马斯克兄弟持有大量比特币",
   "payload": {
    "src": "https://news.google.com/rss/articles/CBMiZEFVX3lxTE42TmktOERtaEVvWS1jejlUWjV5aXh1X3YxR1hEOXFtMDd1cG5uaUNWdnFjSGtCMGR5djMxQUMweVc1N1NEQVc0ZzhVUzAtUTF6cTIxekJQYWZNOUgtQVd5OF9rMHQ?oc=5",
    "note": "人物通道自动抓取（R3 单源 C 级，不进结论）"
   }
  },
  {
   "id": "PNEWS-88d2b7941e0d",
   "type": "event",
   "ts": "2026-07-07",
   "ev": "C",
   "scope": "1y",
   "tags": [
    "news",
    "person:ellison"
   ],
   "title": "五段婚姻，浪子不老：81岁首富Larry Ellison的狂野人生",
   "payload": {
    "src": "https://news.google.com/rss/articles/CBMif0FVX3lxTE9VWnU4ZFFmbG1YV2dldVg5WEtNVWJtYmpoZXNJODU0aVE4Vlc1OW95ZGw4Q2xiWWM2elo0b2FEVnZQc0xWWDYyYXdISzl6elVySERSaW9mWERSU1hWb3AxVHJ4clVjOUE1eE5ucWpCVlhHUUJGR3ZPMTJPYWF2U3c?oc=5",
    "note": "人物通道自动抓取（R3 单源 C 级，不进结论）"
   }
  },
  {
   "id": "PNEWS-c4faa0d858ae",
   "type": "event",
   "ts": "2026-07-07",
   "ev": "C",
   "scope": "1y",
   "tags": [
    "news",
    "person:ellison"
   ],
   "title": "3万员工+亲儿子全卖！甲骨文血色梭哈，全押OpenAI",
   "payload": {
    "src": "https://news.google.com/rss/articles/CBMiSEFVX3lxTE8zT2pCNTNoQ1JPSXhDNllzOFdlVEZySjRWNVhndGg4czRVM290QlFzQkw3U2xNYmltVHI1Y0FmWDRBUTJDSUVoMA?oc=5",
    "note": "人物通道自动抓取（R3 单源 C 级，不进结论）"
   }
  },
  {
   "id": "PNEWS-22eadae5f6dc",
   "type": "event",
   "ts": "2026-07-07",
   "ev": "C",
   "scope": "1y",
   "tags": [
    "news",
    "person:sacks"
   ],
   "title": "David Sacks：Anthropic公司Fable模型被发现安全漏洞后未修复，政府不得已管制",
   "payload": {
    "src": "https://news.google.com/rss/articles/CBMiZkFVX3lxTFByRk9LeG1xMVdRNm5SY1pYSGxLLTB1VE9xOUlUVElCWmZ1RWNzTnlua3ZfbWZDLTZ6ZVZfZDZLekdyTlRUY2xmd0ZXbFVWREFEbDJ6SnFuRmdyaEI0bk1FMVlFYTBhQQ?oc=5",
    "note": "人物通道自动抓取（R3 单源 C 级，不进结论）"
   }
  },
  {
   "id": "PNEWS-9a1bb42ca0ce",
   "type": "event",
   "ts": "2026-07-07",
   "ev": "C",
   "scope": "1y",
   "tags": [
    "news",
    "person:sacks"
   ],
   "title": "白宫加密货币专员大卫·萨克斯调任总统咨询委员会职务",
   "payload": {
    "src": "https://news.google.com/rss/articles/CBMiywFBVV95cUxNVEhENHVCQ2t4NE5rYTVoTVRVTDVRTkdxUTZZODVuZ1FGc2QtWFJZYzE2el9IUEZJUFhRRWF1ZHRWWFpVUXdPVDZZSlJZbi15eW1GbUZoUzJhOXd0ODBpY0I0RHFlMHNsekNxR2tjbm9nUnFoemxxa01RVnJTcVBONThzeWZNZVkxRUp6RXZWR2JTQkFCVlB1bTMwcFBxNWRvQTY0UVJjMkZEQTV4NzdwWGRXZG1HSUc5bkRfSkticl9fbEU3bWhyTzdFWQ?oc=5",
    "note": "人物通道自动抓取（R3 单源 C 级，不进结论）"
   }
  },
  {
   "id": "PNEWS-9052457117ae",
   "type": "event",
   "ts": "2026-07-07",
   "ev": "C",
   "scope": "1y",
   "tags": [
    "news",
    "person:thiel"
   ],
   "title": "“硅谷风投教父”押宝海洋数据中心",
   "payload": {
    "src": "https://news.google.com/rss/articles/CBMijwFBVV95cUxNemtIVmhGRmpXV3RsR1pXcmJPa1VGZ3M4T2N1S2hETmg4UmROdkJ6Z1VTaWVLYjBBeklscUIyRW1lbUtjWG1LdEJUSmp6SlRyTHRicmVlQlByeHIyaHByZXZHQmNDRExFUk9tRUFkMm9qOWMzSFc4enRNZTFnUUloR3RnRFRndUR6SzBESFVJcw?oc=5",
    "note": "人物通道自动抓取（R3 单源 C 级，不进结论）"
   }
  },
  {
   "id": "PNEWS-248e199a5af4",
   "type": "event",
   "ts": "2026-07-07",
   "ev": "C",
   "scope": "1y",
   "tags": [
    "news",
    "person:thiel"
   ],
   "title": "如果SpaceX失败，这个基金就不存在了——Founders Fund 6亿美元豪赌，赢回了500亿",
   "payload": {
    "src": "https://news.google.com/rss/articles/CBMiU0FVX3lxTFBFOG10UGY3UGxDM0hvdkFRaEpKYVFIZFR0Yk5uM3A0SmtRTk9YQUZOenFQWlFDYVpWVjlyeDRPUWNjcTI2dXpDdThoVVFqMXBUV1lr?oc=5",
    "note": "人物通道自动抓取（R3 单源 C 级，不进结论）"
   }
  },
  {
   "id": "PNEWS-edb543b2e566",
   "type": "event",
   "ts": "2026-07-07",
   "ev": "C",
   "scope": "1y",
   "tags": [
    "news",
    "person:andreessen"
   ],
   "title": "科技界大佬 A16z 联合创始人 Marc Andreessen ，成为了川普的国防政策委员会成员",
   "payload": {
    "src": "https://news.google.com/rss/articles/CBMiY0FVX3lxTE5xcTVkOEJPbnRVUDBJM1c1M2M3VG9WOFZ5UmVGelhpNjhJcU5aNnExYm51ZGNYTE1OekZlYlhoaXh6RVVrWFY3dDVLUk9VVVBUaFdBYWlaclM0Z3hmeDBBdEwyMA?oc=5",
    "note": "人物通道自动抓取（R3 单源 C 级，不进结论）"
   }
  },
  {
   "id": "PNEWS-fbdbce4fc6b3",
   "type": "event",
   "ts": "2026-07-07",
   "ev": "C",
   "scope": "1y",
   "tags": [
    "news",
    "person:andreessen"
   ],
   "title": "a16z创始人深度对谈：AI没有泡沫，但中美真正的对决在机器人",
   "payload": {
    "src": "https://news.google.com/rss/articles/CBMiTkFVX3lxTE4xd2JIcHdhNS1oRmI5U3RBV3ZjaTh0WndrVUp6ME45ZEpCS1JVeEFHaUx1Y2ZENUlZX2o4MzhpejdjTVNUM3dLTGFpT250Zw?oc=5",
    "note": "人物通道自动抓取（R3 单源 C 级，不进结论）"
   }
  },
  {
   "id": "PNEWS-97bc97b7e632",
   "type": "event",
   "ts": "2026-07-07",
   "ev": "C",
   "scope": "1y",
   "tags": [
    "news",
    "person:baron"
   ],
   "title": "马斯克专访：明年Q1发Grok 5，亲自主抓A15芯片，考虑自建晶圆厂",
   "payload": {
    "src": "https://news.google.com/rss/articles/CBMiU0FVX3lxTE5FYm9YdDhVbWpZMERGcng4OTRyUzhXRWUxWDlZVnB5TE5tMUhleHM0cnE3Mkt3VVBrcUNXRm1KbHVkMGlGX2RnRUk0ZWJ3VnJodHpn?oc=5",
    "note": "人物通道自动抓取（R3 单源 C 级，不进结论）"
   }
  },
  {
   "id": "PNEWS-ef8fe5b41378",
   "type": "event",
   "ts": "2026-07-07",
   "ev": "C",
   "scope": "1y",
   "tags": [
    "news",
    "person:baron"
   ],
   "title": "马斯克：特斯拉股东赞成560亿美元薪酬方案",
   "payload": {
    "src": "https://news.google.com/rss/articles/CBMiWEFVX3lxTE9kbW12eEc0WGVyRkswVGtPLVNGaG5QQnYwdkpfdnZydzJucThpSkhtWXo1Z1ZIaGNtN2hyOFRINktpNTNCX2ZGWWV3Z25FaTRQTFZFSHJpRWY?oc=5",
    "note": "人物通道自动抓取（R3 单源 C 级，不进结论）"
   }
  },
  {
   "id": "PNEWS-0c5b8db6f31e",
   "type": "event",
   "ts": "2026-07-07",
   "ev": "C",
   "scope": "1y",
   "tags": [
    "news",
    "person:wood"
   ],
   "title": "Cathie Wood ：AI最深远应用是多组学，将重构全球医疗体系",
   "payload": {
    "src": "https://news.google.com/rss/articles/CBMiZkFVX3lxTE1CeXNxak1BR1VFU19WTHd4NktxRVdaOF92cWtUd2NWa3RSQVJDcm1lRUFoOFUzeEFLSUdFWGJHN0p6U3dfYUpOR0wyckJBcmhSckR5VEpGRk9xbHE1NlF6VjJKQWU5dw?oc=5",
    "note": "人物通道自动抓取（R3 单源 C 级，不进结论）"
   }
  },
  {
   "id": "PNEWS-176a080a64bf",
   "type": "event",
   "ts": "2026-07-07",
   "ev": "C",
   "scope": "1y",
   "tags": [
    "news",
    "person:wood"
   ],
   "title": "Cathie Wood连夜抛售RKLB！女股神“叛变”背后，藏着太空板块一个让普通人破产的惊天真相？#美股#投资#股市 Southampton Local Elections 2026 (2hUlGe4Y1R)",
   "payload": {
    "src": "https://news.google.com/rss/articles/CBMiW0FVX3lxTE5kbFZRLUF0VVlDaU5KZXktamJMMGRtMTc5dkpwWXR2dmhjc19Ed0QybXBpZGZXTlFKcnphUWI1TC1KTzJ6N3d0NEN1LVlEdEVZcUZJTkJtd2ZBdmM?oc=5",
    "note": "人物通道自动抓取（R3 单源 C 级，不进结论）"
   }
  },
  {
   "id": "PNEWS-022eb3450d93",
   "type": "event",
   "ts": "2026-07-07",
   "ev": "C",
   "scope": "1y",
   "tags": [
    "news",
    "person:griffin"
   ],
   "title": "对冲基金大佬Ken Griffin加入担忧美联储独立性的高管行列",
   "payload": {
    "src": "https://news.google.com/rss/articles/CBMi2AJBVV95cUxQY3BJRENqUUYwUjBhQ19DTzZMbHlmSTBRUHZseFFVMHpkMjBGMzRUUnJlbWpJTVNrTlVYejlPclJPS0lzUm9fNUtqeWtLcXp1dGladkpHX1hucC1JSmY3N1R6NEhFaTZVbFltSEV2WlZfWERsNjdPdHQ1Vl83S2ZSaFFpT01ndUtlbVV4aGVLN2RMTU5DLWNtQ3c1MlhjWXpkVVhWZGZURndvdkRmVndjOVVKZy1xTjJkeERuZmI2Rkk2bm11QU5pWXlkczltVURYd0pFYms3OV9DQVZBRDE2SUJFY0twX0R2WVdFUmNRWFM0YUdIeExuQnRrajFfZldFbG00Wld1bWxyRXRkekp3ZTgwdkpPUzRkb1Z6NFdVbUhsbWdOanJpdFdOTXFfMG90UjY4d1ZvZEFuQ0lLWWJ2VGg1M3RPU0hDaHdwSm1waE9xcVppbElmZQ?oc=5",
    "note": "人物通道自动抓取（R3 单源 C 级，不进结论）"
   }
  },
  {
   "id": "PNEWS-7079a2d86e02",
   "type": "event",
   "ts": "2026-07-07",
   "ev": "C",
   "scope": "1y",
   "tags": [
    "news",
    "person:griffin"
   ],
   "title": "How Citadel's Ken Griffin Views Opportunities in China's Economy and Market (AI Translation)",
   "payload": {
    "src": "https://news.google.com/rss/articles/CBMi6wFBVV95cUxNV1Bfak5uazdqVGhnQmhqTzVTMnREazJxVjVJakkzZTRwakFBVFBZRFNRQ01mRzVwcDFXS2NwXzNLR1g2N2x0dVpSWjFPODUyMUJGRVk5NU85SlQtdExDVVVwZm5JMW1HNmZ5djdOZkJBYUQzWFYyUEdwWlRnaDMxaWhsZFJJeklSc0g4MUJhWDZxaWt6c1ZMeldnbVdhUTNMYUNsU085SUs1X1M4Q1lSX2Y1Q1RCMjRmVmQ2LWdQdUlXa0V5bTFERkRDclJNYnc1aXZqcGJwRzhHVG91M1Y2eWhkU2FOOHRZc3dJ?oc=5",
    "note": "人物通道自动抓取（R3 单源 C 级，不进结论）"
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
     "v": "SpaceX 1834 · xAI 212 在招（2026-07-07；Tesla 无免费接口）",
     "st": "green",
     "src": "Greenhouse API·每日自动",
     "feeds": [
      "算力/xAI",
      "发射/Starlink"
     ]
    },
    {
     "k": "关键人状态机",
     "v": "xAI 12联创并购后仅剩马斯克1人；CFO Armstrong 离职；Starlink副总裁 Nicolls 接管xAI",
     "st": "red",
     "src": "B:多源 2026",
     "feeds": [
      "组织风险"
     ]
    },
    {
     "k": "H-1B/PERM 新工作地",
     "v": "人工/季更项",
     "st": "yellow",
     "src": "DOL公开库｜人工/季更（DOL 无免费结构化源）",
     "feeds": [
      "制造扩张"
     ]
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
     "v": "人工/季更项",
     "st": "yellow",
     "src": "Google Patents API｜人工/季更（PatentsView 需密钥）",
     "feeds": [
      "Optimus",
      "FSD"
     ]
    },
    {
     "k": "FCC频谱/星座申请",
     "v": "direct-to-cell 扩容申请在途",
     "st": "green",
     "src": "FCC IBFS",
     "feeds": [
      "Starlink"
     ]
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
     "v": "人工/季更项",
     "st": "yellow",
     "src": "FAA公示｜人工/季更（仅网页公示）",
     "feeds": [
      "发射"
     ]
    },
    {
     "k": "州级Robotaxi备案",
     "v": "内华达备案曝光(06-20)",
     "st": "green",
     "src": "A:州文件",
     "feeds": [
      "Robotaxi"
     ]
    },
    {
     "k": "孟菲斯燃气轮机许可诉讼",
     "v": "进行中=Colossus电力约束的法律形态",
     "st": "red",
     "src": "法院公开系统",
     "feeds": [
      "算力/xAI"
     ]
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
     "src": "参议院LDA库｜人工/季更（季度披露）",
     "feeds": [
      "政治通道"
     ]
    },
    {
     "k": "FEC捐款流向",
     "v": "近90天无申报记录（截至 2026-07-07，A:FEC）",
     "st": "green",
     "src": "FEC API·每日自动(试点)",
     "feeds": [
      "政治通道"
     ]
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
     "v": "待首轮自动更新",
     "st": "yellow",
     "src": "EDGAR·每日自动",
     "feeds": [
      "TSLA定价"
     ]
    },
    {
     "k": "Kimbal Form 4",
     "v": "待首轮自动更新（独立信号源）",
     "st": "yellow",
     "src": "EDGAR·每日自动",
     "feeds": [
      "TSLA定价"
     ]
    },
    {
     "k": "质押率×股价强平距离",
     "v": "待Proxy更新",
     "st": "yellow",
     "src": "A:Proxy｜人工/季更（Proxy 年更）",
     "feeds": [
      "TSLA定价"
     ]
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
     "src": "财报电话会｜人工/季更（财报季）",
     "feeds": [
      "储能",
      "EV"
     ]
    },
    {
     "k": "三花/拓普执行器扩产公告",
     "v": "Optimus供给缺口的验证通道",
     "st": "yellow",
     "src": "公司公告｜人工/季更（公司公告人工）",
     "feeds": [
      "Optimus"
     ]
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
     "v": "自动通道暂停（免费公开源已收费）；历史两次验证：北京→FSD进展、利雅得→主权资本",
     "st": "yellow",
     "src": "ADS-B Exchange｜人工/季更（免费公开源已收费，自动通道暂停）",
     "feeds": [
      "政治通道",
      "EV"
     ]
    },
    {
     "k": "ERCOT/TVA互联队列",
     "v": "数据中心扩张最早物理承诺",
     "st": "yellow",
     "src": "电网公示｜人工/季更（网页公示人工）",
     "feeds": [
      "算力/xAI"
     ]
    },
    {
     "k": "Giga/星舰基地社区影像",
     "v": "Fremont Optimus线改造中(Model S/X停产)",
     "st": "green",
     "src": "B:社区+媒体｜人工/季更（人工）",
     "feeds": [
      "Optimus",
      "发射"
     ]
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
     "v": "人工/季更项",
     "st": "yellow",
     "src": "X公开帖｜人工/季更（X API 收费，自动通道暂停）",
     "feeds": [
      "组织风险"
     ]
    },
    {
     "k": "凌晨发帖密度(危机探测)",
     "v": "人工/季更项",
     "st": "yellow",
     "src": "X公开帖｜人工/季更（X API 收费）",
     "feeds": [
      "组织风险"
     ]
    },
    {
     "k": "数字化承诺自动提取",
     "v": "4条在库",
     "st": "green",
     "src": "承诺库",
     "feeds": [
      "信用底账"
     ]
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
   "watch": "新厂节点/电芯自供比/backlog",
   "owner": "TSLA",
   "valid": "12–18个月"
  },
  {
   "line": "算力 Colossus",
   "state": "供给约束 ★",
   "constraint": "电力并网+许可(非GPU)",
   "unlock": "燃气轮机许可裁决/互联队列",
   "meaning": "需求已锁($26B/年合同)，看电不看芯片",
   "watch": "ERCOT/TVA队列、许可诉讼、自建fab里程碑",
   "owner": "SPCX",
   "valid": "6–12个月（许可裁决前）"
  },
  {
   "line": "Starlink",
   "state": "双增长",
   "constraint": "频谱/单星容量(香农极限)",
   "unlock": "V3卫星代际",
   "meaning": "稳态复利；在轨8000+颗=全球LEO 2/3",
   "watch": "订户数、V3容量、Kuiper 07-30死线",
   "owner": "SPCX",
   "valid": "5年（稳态复利）"
  },
  {
   "line": "发射服务",
   "state": "垄断+自造需求",
   "constraint": "星舰复用经济性",
   "unlock": "试飞×复用周转×翻新成本三变量",
   "meaning": "高凸性期权；外部订单占比萎缩=封闭经济警报",
   "watch": "复用曲线、外部商业订单占比",
   "owner": "SPCX",
   "valid": "5年（复用曲线主线）"
  },
  {
   "line": "电动车",
   "state": "需求约束 ⚠",
   "constraint": "价格弹性/中国竞争",
   "unlock": "FSD中国Q3'26(软件变需求变量)",
   "meaning": "防守盘；降价史=需求约束自供状态证词",
   "watch": "周度上险数、降价动作",
   "owner": "TSLA",
   "valid": "至FSD中国审批（Q3'26）"
  },
  {
   "line": "Robotaxi",
   "state": "监管供给约束",
   "constraint": "州牌照+3项NHTSA联邦调查",
   "unlock": "逐州备案",
   "meaning": "$350/股溢价主载体；42辆 vs Waymo 577辆",
   "watch": "州备案(先行L3)、调查进展、车队周计数",
   "owner": "TSLA",
   "valid": "逐州备案推进期（1-2年）"
  },
  {
   "line": "Optimus",
   "state": "供给缺口 ✗",
   "constraint": "谐波减速器全球产能(10倍+缺口)",
   "unlock": "自研执行器产线验证",
   "meaning": "头号证伪对象=头号先机，二者必居其一",
   "watch": "执行器招聘/设备采购(L1/L3)、Tier-1订单(L6)",
   "owner": "TSLA",
   "valid": "5年（执行器验证前不翻转）"
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
   "verdict": "中方产能领先，成本曲线两强并行",
   "owner": "TSLA",
   "valid": "季判（成本曲线滚动）"
  },
  {
   "line": "地面运输",
   "carrier": "EV/FSD/Robotaxi",
   "trl": 7,
   "metric": "$/mile",
   "tipping": "无人出行 $/mile < 私家车持有成本",
   "cn": "比亚迪/华为系/萝卜快跑",
   "verdict": "EV中方领先；无监督FSD美方领先，Q3中国审批=两树接触点",
   "owner": "TSLA",
   "valid": "季判（Q3中国审批为近期变量）"
  },
  {
   "line": "航天",
   "carrier": "Falcon/Starship/Starlink",
   "trl": 8,
   "metric": "$/kg 至 LEO",
   "tipping": "<$150/kg → 轨道工业化经济成立",
   "cn": "长征系/朱雀/天龙",
   "verdict": "美方代差领先(复用)",
   "owner": "SPCX",
   "valid": "5年（复用代差）"
  },
  {
   "line": "计算",
   "carrier": "Colossus/自建fab/Grok",
   "trl": 8,
   "metric": "$/GW、$/M token",
   "tipping": "轨道算力见三档物理判定(当前:物理紧张)",
   "cn": "DeepSeek/通义/字节",
   "verdict": "算法差距收窄，算力(电力)是新战场",
   "owner": "SPCX",
   "valid": "季判（算法收窄+电力战场）"
  },
  {
   "line": "机器人",
   "carrier": "Optimus",
   "trl": 5,
   "metric": "$/工时",
   "tipping": "机器人$/工时 < 最低工资 → 劳动力经济学重写",
   "cn": "宇树/智元/傅利叶",
   "verdict": "中方供应链(减速器)占先，集成度美方下注",
   "owner": "TSLA",
   "valid": "5年（供应链卡位）"
  },
  {
   "line": "脑机",
   "carrier": "Neuralink N1/R1",
   "trl": 5,
   "metric": "通道×带宽/$",
   "tipping": "患者数×带宽倍增节奏",
   "cn": "脑虎/中科院系",
   "verdict": "美方临床进度领先",
   "owner": "私营",
   "valid": "20年（临床长周期）"
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
  "last_run": "2026-07-07 07:35",
  "sources": {
   "yahoo": "green",
   "edgar": "fused",
   "launchlib": "green",
   "rss": "red",
   "greenhouse": "green",
   "fec": "green"
  },
  "fail_counts": {
   "yahoo": 0,
   "edgar": 7,
   "launchlib": 0,
   "rss": 1,
   "greenhouse": 0,
   "fec": 0
  }
 },
 "launches": [
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
  },
  {
   "name": "Falcon 9 Block 5 | Starlink Group 10-45",
   "net": "2026-07-14T07:15:00Z",
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
  },
  {
   "ts": "2026-07-06",
   "rule": "R3",
   "action": "入库",
   "ev": "C",
   "title": "SpaceX IPO 令 Elon Musk 成为全球首位「兆美元富豪」 - Hypebeast CN",
   "src": "https://news.google.com/rss/articles/CBMihgFBVV95cUxPSlFfSzh6M1ViblFSUXhQd1B3UmtNcV83NE1FekQzTVJ6dUR2NV9TWmtEMEJkRWUxNXp4RUI4R3Rydy1MSlF1VVhHZW9QcThtVjhGYWI5X3F3Vjk2Sk9WZFF6VnVYWG03SUU5eG1kb1JkWjhTQ1E2ZkhyamNYSjVfYTBidG9JUQ?oc=5"
  },
  {
   "ts": "2026-07-06",
   "rule": "R3",
   "action": "入库",
   "ev": "C",
   "title": "SpaceX股票上市首日飙升，马斯克成为全球首位万亿富翁 - 美国之音",
   "src": "https://news.google.com/rss/articles/CBMiyAFBVV95cUxNMF92TnVFcjRzcnVkUFZ3MWlCWDVaZFprUG9RTklFS05OX29ZU2FDUGNPbUw0NHhfbFZOOXRjY183UHdNS09VR0JqREhXU283NEltNHhSNWRQbXVadWZFVmJxRExlejRybDZnbFRuVlBwTjRzMFhVWVpWQ1ZlbC15MUVyVkxGb2IxSUZzOHpKbHlaZW5QOGpWeHIyRUlBbkZabW03TFRNUHlFelJTbEwtVHVQdkU4Q1BhWk0zTVJjS1ItTkZnbmdSMdIBywFBVV95cUxNT25FQU1nY0xyRjdLVmxndWtDOUdla1o3UzNTS0FFY3ZUVGdudVlfMDJObkpwQUhEdnJvWXhjRHBaTXVWSmU0TUF6Z2ItalNVREl2NG9NaDBYVGVDaE1nREdNYUs2SktzOEZma01kVl9DcFJVWjExbHppS2VRdHg4a3JGaG56c1RLZUptRk5hbmdZZGxFc2RIQnVBWE51LWQ1akpTbl95aHNXX1BSUjJ4NHZON3pvclFaYjQ2WHpNVkxvdXFsWWJyOWFWTQ?oc=5"
  },
  {
   "ts": "2026-07-06",
   "rule": "R3",
   "action": "入库",
   "ev": "C",
   "title": "$SpaceX(SPCX)$ $特斯拉(TSLA)$ Elon Musk，世界首富，身价超1.35万亿美元！见证历史！2... - 雪球",
   "src": "https://news.google.com/rss/articles/CBMiUEFVX3lxTE5tMUxUWFlESmhYNDBjTUd0WWpEUW9ZeE45VFFkemxybms0QkVXanMzZlZ2YVI1ZV95ZkpVUlJGWWowbGFSRXk5TkRrZEs5eVZC?oc=5"
  },
  {
   "ts": "2026-07-06",
   "rule": "R3",
   "action": "入库",
   "ev": "C",
   "title": "🔥🚗 Elon Musk把Tesla的故事又往前推了一步：不是只有Robotaxi，也不是只有$TSLA的Optimus - Moomoo",
   "src": "https://news.google.com/rss/articles/CBMirwFBVV95cUxOR2lON1Mtb0Q2bVEwV21fcjdlYTkxdEthUWluYWpoMVZSVlg1M1Rub05iV2d3ZVl1Q2lON2dkM1kyOEhzamxPUENNbmh3NHhvekI3U2w2WDVZNVFaS2p2WS16RlFxdEpTa29FWVFxQmlMZnJyYlZxX2xlcHRqajVGRjJMenFJOHI0cjNPdzR6NnBuRVNxN1FoSGZ6R21xRFBlRDdCeFFLNDBQNnZ5czNj?oc=5"
  },
  {
   "ts": "2026-07-06",
   "rule": "R3",
   "action": "入库",
   "ev": "C",
   "title": "马斯克宣布解散xAI，把数据中心整租给了他讨厌的Anthropic - 麻省理工科技评论",
   "src": "https://news.google.com/rss/articles/CBMiV0FVX3lxTFBCelFQQ1l5WkY5MFJ1OFZueXhoWDB5MXlXVmRVN2RjRlNHMWVLc3BNQ3RHdGlsSGw1STh3ME14ZFh4eGc1SjhvOU9yYVpMNjduNWlMeXNMZw?oc=5"
  },
  {
   "ts": "2026-07-06",
   "rule": "R3",
   "action": "入库",
   "ev": "C",
   "title": "Musk2011年火箭终局说|elon musk|spacex|波音|洛克希德|中国|猎鹰9号_新浪新闻 - 新浪网",
   "src": "https://news.google.com/rss/articles/CBMiY0FVX3lxTE1kalp1eC1kd3BoUXFDcmZ5Wnk5VUtzQkRiYlVkY2FMNUZSZkNUbk9Sc1ZscVBUcTZncEI5RXBLdV9jYUd2WU5oM1BnaHJtR0Y4bDE0Q1JzUWhrRndWYVQxaDhncw?oc=5"
  },
  {
   "ts": "2026-07-06",
   "rule": "R3",
   "action": "入库",
   "ev": "C",
   "title": "Elon Musk 称全新 Tesla Roadster「大概率」将在 2026 年 4 月亮相 - Hypebeast CN",
   "src": "https://news.google.com/rss/articles/CBMigwFBVV95cUxNM3ZRTDhuLXFzdE52QkFwRGk3VTlUekx5bkJubzAwb3AzeXRBX0ttbmtHNGFPOWp4dTV2QXhLN2w5TGhXczc3bU9vcFRUckJfbnpmcWF1VjNqNXpVMEhWdjlrcEp4eVhUczNHZURlYzFfZ3JXRHZzSExXWmVBYVRGTDhtOA?oc=5"
  },
  {
   "ts": "2026-07-06",
   "rule": "R3",
   "action": "入库",
   "ev": "C",
   "title": "SpaceX股东独家回应：合并突然且迅速，源于马斯克的巨大野心 - 证券时报",
   "src": "https://news.google.com/rss/articles/CBMiXEFVX3lxTFBVYkxGdlhYeW9IYXNZbFZWUXJtZlg0MHZaRkk4aFgxdG9HY0lyVTYyRV94djFOYWxuMFdocXkwVnJLZ0ZJSWNTVzJHS1JqNkcwNUV1dmpFSVpQaVV0?oc=5"
  },
  {
   "ts": "2026-07-06",
   "rule": "R3",
   "action": "入库",
   "ev": "C",
   "title": "电影音乐网站- 新闻 - Elon Musk Unveiled – The Tesla Experiment - Film Music Site",
   "src": "https://news.google.com/rss/articles/CBMicEFVX3lxTE5zcXNoZE12SFFfVVdfSngzQjJBc3BDa3BTRU14M210ZU1jbk1SYkRSZ1Uta19PSk1JOXlnaHNiNnlkcm1PRFI1RFVoOFFhZ2F6R2tlRVAzZktRQVlMSXFzczBHeXIxSkp6VVBGWFdCbjg?oc=5"
  },
  {
   "ts": "2026-07-06",
   "rule": "R3",
   "action": "入库",
   "ev": "C",
   "title": "马斯克的SpaceX准备将100万颗AI算力卫星送入太空 - BBC",
   "src": "https://news.google.com/rss/articles/CBMiZkFVX3lxTE5taks3eV9wUVE3N2V0dFF1UDFYb0dzRFc5X3BLR0R0WlpNSlJpWHVyeWlib2pHR3ZXT3NMU3BhcXM3ZmthTGhPdnlkTUJJWWpPTTV1M2xIYmlieFMzajFhYnZmSlhUd9IBa0FVX3lxTFB6aTJSUnRfVnVEaF96ZGxLeHZucVNMN1RPMFNMQmFnLWNHMmxJMHlXcG1OaERVRVA2TFU4RXRXRVhPdURaQVQtV3BZRlphTHFaeE5jd2V0U0FiNDV4MjU3RzVjWmZKU1VYajZR?oc=5"
  },
  {
   "ts": "2026-07-06",
   "rule": "R3",
   "action": "入库",
   "ev": "C",
   "title": "尽管因 xAI 造成了 50 亿美元的损失，马斯克的 SpaceX 仍持有价值 6.03 亿美元的比特币 - CoinDesk",
   "src": "https://news.google.com/rss/articles/CBMi0gFBVV95cUxPcG1KRmNuMTNveHE1SlF4NUVRVzk5VzNzUlM4YlpyTExxaWh2NmxONTNsU2x1N2ZiaE5vR1JNMjlkeFVGeFlLNEo3cjluNTM4ZWs2NF9zNmlSRGRwdkdQMW1IS1RNRGJQd1JHYmFBaWNjdEctVVVlY1drODRwWUFtV0lpNHhIN0dveUVCdlNYSU1KNTJWcVZvOHNHUi1VbDhiQ0t1OTF1RjJiaGhyN3JIZHU1R25lVW5Zb3hPb0lQQ19Da1pzNWdJUFV2S3c5eW9BMGc?oc=5"
  },
  {
   "ts": "2026-07-06",
   "rule": "R3",
   "action": "入库",
   "ev": "C",
   "title": "Leverage Shares将推出全球首只3倍做多SpaceX ETP，代码ELON/MUSK - TradingView",
   "src": "https://news.google.com/rss/articles/CBMiZ0FVX3lxTE9BRHFKaEUyXzQ2QTlaMHlGN21OUmJMMHN0ZVN2b3dXQTBoLXlwU0xUX2t2MFM2T1hnOVpnQWlndFM4VWVydk9UM0NsVzRpNm0wQ2hRQkxUTFNUek9iUFlFcS0wMm9QM1U?oc=5"
  },
  {
   "ts": "2026-07-07",
   "rule": "R3",
   "action": "入库",
   "ev": "C",
   "title": "Elon Musk Needs the Cultish Support of Everyday Investors to Pull off the Massiv",
   "src": "https://news.google.com/rss/articles/CBMinwFBVV95cUxPbnlRY0pUNzcydjBCTmp6V3JoV3hIbzQxd1loek5pX1pCdVA3NkZtSC11X3NYMlYwbG1YMXNxYTFCaGFmSEF5U252WHFsRjduU053QlJDeGZRVWZfN1AyZldLZEdsQ1liN3lYRUhkaTZXcnJSX0N6WkJwZ1lHNGVlam85NHlzd2x1NVJjankwLXVYUDdvVi1GNnRUNHdwR2c?oc=5"
  },
  {
   "ts": "2026-07-07",
   "rule": "R3",
   "action": "入库",
   "ev": "C",
   "title": "Chinese Solar Stocks Plunge as Firms Deny Musk Space Project Links - 一财全球Yicai G",
   "src": "https://news.google.com/rss/articles/CBMinwFBVV95cUxNT3Nia1dpRFFRYkVwQzZwalc3NTRFcUpvWFRjQWt6WDVrUkR5TnVwV1FobnNkMjNOckVmTnh6OURyaG9Vcmd5NVpORmJZUG9scjRDMThCemVXNkFWWkdJdVpLWWhTbVN3U3JRdVBITHV3dU40dE5NQ0oxbG5LYTk3dmdZWjY3X21Cc0c5RDBldmRCV3h1a2QwNHB6d0dMMDQ?oc=5"
  },
  {
   "ts": "2026-07-07",
   "rule": "R3",
   "action": "入库",
   "ev": "C",
   "title": "SpaceX 股价：埃隆·马斯克公司首次公开募股前市场三周内下跌27% - CoinDesk",
   "src": "https://news.google.com/rss/articles/CBMisAFBVV95cUxNcG1jbi0yeURLQW9RSDlMT3MtSTgwUmJ6Ynl0Y09XdTZSRVM1eWlhN0lxdVFQMUhzallPc0xzYnlDVkFuQXhEeVJyVk9uWVBvZnRQbkhKUXREdWxkdWlJTzJCS3NFV1diZHNuX2RNUmpPYlR3TTNlcFJUeHA0VDJXZjJmeTFDQkVTVnhxUjVrVlVyV3h0M2dQZF92VzFFdU4xZVk0cGhHdENhamJKN0FkMg?oc=5"
  },
  {
   "ts": "2026-07-07",
   "rule": "R3",
   "action": "入库",
   "ev": "C",
   "title": "誰可以購買馬斯克旗下SpaceX首發股 - 大纪元",
   "src": "https://news.google.com/rss/articles/CBMiYEFVX3lxTE5qSTBZMjBDbFNIZFkyamg3aFhfTEhOMFE5bWd4WjU2R1RUbVdmWDB0NW5ZY0NCeTh3czBHdUhxSXNJdmpNbFhVN2pnY2dlM3pwMnZOb1luQmkyMU9yN1lDddIBZkFVX3lxTFBOZmRCQWN2QW1MOFQwSHN3TDN1Q0lLdFpoYi12QVFnOUFXTVJXajJxb3JxeVZ0OFFscm9NdTFLZWN0Z1hLWUxmWTd2TTF0cnZEXzVVZ3A2dFB6dms0NWR3R2E3WG9sdw?oc=5"
  },
  {
   "ts": "2026-07-07",
   "rule": "R3",
   "action": "入库",
   "ev": "C",
   "title": "身价破1.1兆美元 马斯克成首位“兆万富翁” - 8world",
   "src": "https://news.google.com/rss/articles/CBMimAFBVV95cUxPbGk0OFNLM09wTUIxejJCcWRWR1FYT3VZMU1hMUYtOXpjTWFaVnZGYmhPN3dST3RobDVadkV5NXd3WlNIcjFvMGVtR2ZyRFBqcDRqdUUxdjk2TEZ4NjU2bHJYNndhaThqRzIyaHNtb29nWjhaeGcxQXVBdXZjYlJtSWhNamxueGctYm5mbDZpOTZGcGFKenpGSg?oc=5"
  },
  {
   "ts": "2026-07-07",
   "rule": "R3",
   "action": "入库",
   "ev": "C",
   "title": "马斯克：SpaceX、特斯拉，将联手在德州建芯片厂，落实「Terafab」计划 - 雪球",
   "src": "https://news.google.com/rss/articles/CBMiS0FVX3lxTFBRVVJSU0o0cXpjTVRSNmhkVzgzSUlzZENYUG1DbkdQS014bVVFMDR0emZwMUhmU2RWUExiSU9tRURDTzZHNl94ckJxcw?oc=5"
  },
  {
   "ts": "2026-07-07",
   "rule": "R3",
   "action": "入库",
   "ev": "C",
   "title": "我觉得最讨厌SpaceX和Elon Musk的人一定是Rocket Lab的老板小胖子Peter Beck[吃瓜][吃瓜][吃瓜]​当年SpaceX推出Tran",
   "src": "https://news.google.com/rss/articles/CBMiY0FVX3lxTE9Qa01Ha0ZmM0VIeENBdTVLWkVvc3FtVTd4eExGUnhQNE9MUHdrTzc0bnFnSzl3LWIwTkljM3hjZHdtdUVneFVTenRzZl8wcDljSXpYVzBNcTYwQlpPZFNtdWVUMA?oc=5"
  },
  {
   "ts": "2026-07-07",
   "rule": "R3",
   "action": "入库",
   "ev": "C",
   "title": "SpaceX員工財富或可買下聖安東尼奧40%住房 - 大纪元",
   "src": "https://news.google.com/rss/articles/CBMiYEFVX3lxTE9McXZHTlNiQjc3NFpXTGNaZ0Y3dHB5dXB4SlM1U3oycTNtMTM1UEp1NW42LTRLU1NUTGpLQU5tLTNNQlpmSk1hUzNfLWRuY29IVlJtcHJQdGhQRGVybFl5SdIBZkFVX3lxTFA0ZEI4MnFaM1gyRE5pUnVjTlN2N0RJSTBQTURlUU1uelZ1Z0R2OC01UGFTUHV5djBtTTg3YzI3TnB0SU9Qb3p0aF9LelU1VWZ2b2d4dU42RWhHb2YxOFUzdGM1THk5QQ?oc=5"
  },
  {
   "ts": "2026-07-07",
   "rule": "R3",
   "action": "入库",
   "ev": "C",
   "title": "SpaceX IPO承销团队，至少包括21间投行，上市的内部代号为Project Apex - 雪球",
   "src": "https://news.google.com/rss/articles/CBMiS0FVX3lxTE02Z3BaRHJ5bVhpZUdTdFdlaE5zX3ZFamVYNXE2cVFUYjRYZ2VLRXFGSm9YdXd4RHg4SVl1RUZmVGxoOVM5VjI0TVRzOA?oc=5"
  },
  {
   "ts": "2026-07-07",
   "rule": "R3",
   "action": "入库",
   "ev": "C",
   "title": "马斯克称脑机接口是“耶稣级别”的技术 - 华尔街日报中文网",
   "src": "https://news.google.com/rss/articles/CBMilAFBVV95cUxQUEtONmZxNGVXX0ROWFNsS1VjdlAzMGp6LTZjNmdaczk0eDBYMW1ENV9leUwtOEVWSzJCVDZuLVRiY2I3RExST0RWa2tJMnpDc1loWFVPRVNDOEliUEZSWVlDZ0tlUEI1clM2NkhYMnI2QWN1dlotaFc4UU5tSUphc0xqSHVqa3VYcGZmMWl2UGZGLURE?oc=5"
  },
  {
   "ts": "2026-07-07",
   "rule": "R3",
   "action": "入库",
   "ev": "C",
   "title": "马斯克旗下SpaceX和xAI合并，估值将达1.25万亿美元 - 华尔街日报中文网",
   "src": "https://news.google.com/rss/articles/CBMigAFBVV95cUxNY2xWQkFDVkw5YTV0WndURGVqeVdiamdxbmhmSlNNbDRJOTBzekl4VXFQaW12VndPVXMxUXM4U3V2MFROeWRRTng3aGNfenRLVVhjUzBrTmdiN0JUSDZoZ1kzNGF3UmtEYm15WU43UGZBVE9FQnZycV9NM2k1SERtMg?oc=5"
  },
  {
   "ts": "2026-07-07",
   "rule": "R3",
   "action": "入库",
   "ev": "C",
   "title": "马斯克访谈再放暴论 - 风闻",
   "src": "https://news.google.com/rss/articles/CBMiW0FVX3lxTE82dVlwUTBEVXZIQUNUc21CczhGZlg3aDUydTVJbkpLTGNGbnhXRGF5RlBfX0wyUEIwclItMnhuc1hWTlYwMmVkQnA5NHZrUUczLWljRHdpZUw4VWs?oc=5"
  },
  {
   "ts": "2026-07-07",
   "rule": "R3",
   "action": "入库",
   "ev": "C",
   "title": "比特币新闻：埃隆·马斯克的SpaceX原持有7.8亿美元比特币投资，在提交首次公开募股申请前，现市值降至约5.45亿美元 - CoinDesk",
   "src": "https://news.google.com/rss/articles/CBMi0wFBVV95cUxPUjdHQ1dWRXp1X1FObjdPVWdRMnlOZ0VDaGRLUHVKTjV5NndybDlXVU5HZFVOYkFYUWRUMVFCWWdDV2wtZnV3RXZlanBaMGw3MTJSRFBZUE1ZRFhheGNNNTk0S0Y2VXFia0pCM1lXSEFEMzNnTW5YaWNnQWlkdE9iaVZHM3ZZekJVazdlTXVmSnJwRDNlaWNKbWQwUnJxZ2o5UTdZQ0VQY2drV0tQSFFFa0R0SzdNMmsySGNBdnFVV05UVTJHX19hdEQ3eGVhRHAzTC1V?oc=5"
  },
  {
   "ts": "2026-07-07",
   "rule": "R3",
   "action": "入库",
   "ev": "C",
   "title": "SpaceX星舰V3首飞推迟 - 华尔街日报中文网",
   "src": "https://news.google.com/rss/articles/CBMib0FVX3lxTE9qbWZLTGFBdm80Q09lMFVaQjI1SWRXSGcwTXR4djNTUnZWM1ppb0l4SFFFUmxkTFJWNTVPRWFGTXJjZ2p6OHU2TUdpbk5KNVdmSWllNTNlZjlCM3g2QlR0QXVTYlF2RThBNmF0SkhlNA?oc=5"
  },
  {
   "ts": "2026-07-07",
   "rule": "R3",
   "action": "入库",
   "ev": "C",
   "title": "创始团队出走一半，马斯克连夜调整xAI愿景，用百万GPU追平推理短板 - 麻省理工科技评论",
   "src": "https://news.google.com/rss/articles/CBMiV0FVX3lxTE9TM0Jld0djNnRxR1RJdktKM2Mycm5EdVNPcHVEWVlGM0IzQW9CSS1WRTVPQ0NRSnI5S0xTYXBBNzE3YXNPS0xidWZMS1hud1hDWEhMTEx1TQ?oc=5"
  },
  {
   "ts": "2026-07-07",
   "rule": "R3",
   "action": "入库",
   "ev": "C",
   "title": "WSJ称SpaceX曾向投资者展示手机形态AI设备原型，Musk否认 - 디지털투데이",
   "src": "https://news.google.com/rss/articles/CBMiuAFBVV95cUxOLVA4TU80Wl9wb3hnNURPZ2hZVGx3UzZMV3pPVmlOcTlweFNvSmw1SHdEUFJRVnBuNnNodjF5b1lwMkJ3QzJQdS0yNWVKcWdPRFEzVFdJa1RBVV93WFFRZHkxRGlKM2lkX3lrUTFGNllLTzRaX1I4UV9wSnFLU2tSUlh4d25CancyeDNWS0VpeHc4MmJzUXNsR1I0UGUtUkM4SWZmZ1g5NjJiRXZWVG80R1d3MXNGZmx4?oc=5"
  },
  {
   "ts": "2026-07-07",
   "rule": "R3",
   "action": "入库",
   "ev": "C",
   "title": "史上最强并购打造探索宇宙巨头：SpaceX合并xAI - 维科号",
   "src": "https://news.google.com/rss/articles/CBMiT0FVX3lxTE5yejIwVEpoRE9iXzFJd0lHUXUtd3pTazBPbE9lV2k2ek15VWlraHFNaENraEJXM1ktbURDMS1vN3I2YTg4RXczUmZGalo1c2c?oc=5"
  },
  {
   "ts": "2026-07-07",
   "rule": "R3",
   "action": "入库",
   "ev": "C",
   "title": "xAI联合创始人相继出走，马斯克称须推倒重建 - 华尔街日报中文网",
   "src": "https://news.google.com/rss/articles/CBMijwFBVV95cUxPNlduRlpGMy1BSEwzLTJ0YjZYaVMxbmtUd1lGc0xwdFZKQ2NKYUhyZll6VzctVDZnMnpwNWFjanVqeEVVSWRTZGd1cklZdGx1dVpWVG16UXlWaXl6b1dpOU8xcTRleERLWERNZ3IyNS1BNEw2X2JlVURuc3hQM2J6TUVNZGc4djdRUk85WGFNOA?oc=5"
  },
  {
   "ts": "2026-07-07",
   "rule": "R3",
   "action": "入库",
   "ev": "C",
   "title": "人物动态通道 18 条（明细见各人物卡）",
   "src": ""
  },
  {
   "ts": "2026-07-07",
   "rule": "R3",
   "action": "入库",
   "ev": "C",
   "title": "马斯克1.25万亿美元并购案幕后：一场AI与太空的豪赌 - 华尔街日报中文网",
   "src": "https://news.google.com/rss/articles/CBMickFVX3lxTE1NNzBZTl8xVDVIZ0xSYlhzNEMwcXZtSXB4cUZFcGk2UmQxMXJvTEtxVTBEckdTc2JVb19abU9uZVNteDU1TUhKRGRBRUdmN2k1STBJd01tSm5SWHZFLXVFdVdMcnpKSXpjc1cyTWtBYmV2QQ?oc=5"
  },
  {
   "ts": "2026-07-07",
   "rule": "R3",
   "action": "入库",
   "ev": "C",
   "title": "SpaceX 与特斯拉若真合并，投资者该狂欢还是趁早离场？ - TradingKey",
   "src": "https://news.google.com/rss/articles/CBMiywFBVV95cUxQN3NDQnRBeDhwclJ4WlZGVTlHT1lQbmVDMTQwQmxIRHRnS3NwRUZMLUpYMHBkVTlNUjVSVU9SLUxBczFNTjBTNG9YNVpWOWNiVU03WlB1WlliY1lhZ183Q19falJVams5bnR6R2RzbFJsZXk4bkhSNkh4VUtQcEw5UXZMRkQzVlptZWhVVjhEbTcxZnhyLUg5em9XUTNpRktWYVRoakJTcUxjaF9Yd1VEWnNVS1pOanlPWVBSdjktMW5fd1VPZDdHM2lnUQ?oc=5"
  },
  {
   "ts": "2026-07-07",
   "rule": "R3",
   "action": "入库",
   "ev": "C",
   "title": "德国人为何不买Tesla？调查：因为Elon Musk的政治立场 - MyWheels 车天地",
   "src": "https://news.google.com/rss/articles/CBMirwJBVV95cUxOYzlENkFLR19rMElXX0xEV3E0M1pKN2I3b01DbUpXM0lzUVBmaWx2eDZUejJabUpFeV9XWWVGdkwtcHdtQmUwOE1nWVlqSGtVRGhjeFFwYXhxOHR5bWFCYzJHXzZ1YWpDSnVILU1fWEhpdFlQYWc3Ni14VDZuNGpIUmhGWVplN1RBanRiY0RWejU2YnpubVFNVUtVdkJtTlJpbm9ReEhWdXVjUEljT3FwckdDQV9ZTVF6S1BFU1lUbHprYVRDRERNVDNGMFpmLU16QURNT1FBRkJXWGJ2SmdvREtGdDc1MW9YLWtUR2NIcjZTc1h5eXFIUmduRWlReHdpRVQ2M0lER2ozVE5XcnQySmd4aUR0cVJ0Wm02MExRdmo0cFl0c0RLLWNPTEJUT1E?oc=5"
  },
  {
   "ts": "2026-07-07",
   "rule": "R3",
   "action": "入库",
   "ev": "C",
   "title": "在与埃隆·马斯克的xAI达成巨额交易后，SpaceX的6.5亿美元比特币将何去何从 - CoinDesk",
   "src": "https://news.google.com/rss/articles/CBMiwgFBVV95cUxQQUlGNVhLaTVYb3BBMEZkUmVPMTRpQzJDb0NBQnIxMHZUS1ZnTkRpQTZBTmRVWTVhRndKbC1pT1g4UHRpQ3FfRFBNTmdYWHkwOGMwcFZ1MF9TeDF6Z1BTcDlFUk1YN1c0Nkx1RDZYaWEybnZSUW1GbEo2alRBOGZtQW01M091RlVUb0FCRm1jUlRuVi1JMTBUU2o2TjgyT2IxR09qZzBhZ3JNczZUN0JTQ0t5dFZjcjh2ZldIRVVFV1hrdw?oc=5"
  },
  {
   "ts": "2026-07-07",
   "rule": "R3",
   "action": "入库",
   "ev": "C",
   "title": "SpaceX上市首日高开11%，市值达1.78万亿美元 - 纬度新闻网",
   "src": "https://news.google.com/rss/articles/CBMiZkFVX3lxTE5hbzM3SEdmNE5lUGxQT0tIR1NjM3B3MzVLb1BXMmxSNFBNSG5sMW1vYjR4UV9EMXUxM1g5cnh1YnZWS3o0RG9wRFRVWXFLZ09feU9aRS1kUmk3UXgxdk5CVFZXR2FRQQ?oc=5"
  },
  {
   "ts": "2026-07-07",
   "rule": "R3",
   "action": "入库",
   "ev": "C",
   "title": "xAI完成200亿美元E轮融资，超额实现目标 - 华尔街日报中文网",
   "src": "https://news.google.com/rss/articles/CBMigAJBVV95cUxQa1JvZ29FcUNCdU40aE50cXJFSEZqQkJPVHdZbGVhVy1rWlM1UEhQUzZDOUlaekV1MnNHakhKbzN2SVJlSUE5Vzh1LWJDT2tNTy15WUl5NVVTUkN4RVVqUGJickFWVWZHR0tucHZZOWdsSEg0bi1HTjdWbFRMS3hLUjBLVzBNYlM4eS00U0wxOTc0M2FmRm5CdTdERGR2N2NKUjREZUh4ZnI0Mmdpc1lsei1wUmFQQ2FMV2lCcnFMSEI5OE02VEItdWQ5ZDgtMGtjaDBlRE11S2ZXb01JeWRBV2taQU4ybjBMWkRpNzc0TTM2eTVvMnoyYjVpRWplMGZO?oc=5"
  },
  {
   "ts": "2026-07-07",
   "rule": "R3",
   "action": "入库",
   "ev": "C",
   "title": "人物动态通道 18 条（明细见各人物卡）",
   "src": ""
  }
 ],
 "persons": [
  {
   "id": "musk",
   "name": "Elon Musk",
   "short": "MUSK",
   "zone": "中心",
   "role": "中心节点",
   "org": "TSLA/SPCX",
   "tier": "本人",
   "x": 330,
   "y": 210,
   "aliases": [],
   "func": "整个网络的超中心节点——图论意义上的关键人风险：任何以他为中介的路径都是单点故障",
   "signal": "本人言论成本≈0（低信息量），资金动作与法律申报成本高（高信息量）。判读一律用行为不用言论",
   "watch": "Form 4 方向、健康/法律事件、注意力分配漂移（承诺库自动追踪）",
   "channel": "EDGAR(A)/FEC(A)/承诺库"
  },
  {
   "id": "birchall",
   "name": "Jared Birchall",
   "short": "Birchall",
   "zone": "家族",
   "role": "家办管理人",
   "org": "Excession LLC",
   "tier": "家族执行",
   "x": 150,
   "y": 150,
   "aliases": [
    "Birchall",
    "伯奇尔"
   ],
   "func": "家族资本唯一非血缘全权执行节点：家办+信托+私人事务一肩挑（公开记录：Proxy/多源）",
   "signal": "高信息量：家办操作在公告之前发生——其动向≈资产结构变动的先行指标。结构洞位置：家族资产↔机构资本的唯一桥",
   "watch": "离职/新设实体/信托重组/新增州注册——任一发生=家族资本重组预警",
   "channel": "Proxy(A)/州注册文件(A)/媒体(B)"
  },
  {
   "id": "kimbal",
   "name": "Kimbal Musk",
   "short": "Kimbal",
   "zone": "家族",
   "role": "胞弟/董事",
   "org": "Tesla/SpaceX 董事会",
   "tier": "家族",
   "x": 165,
   "y": 300,
   "aliases": [
    "Kimbal",
    "金博尔"
   ],
   "func": "家族+董事会双重身份，与本人共享信息集但独立决策",
   "signal": "独立信号源机制：两个共享信息集的节点同窗口同方向交易，信息含量倍增（剥离个人流动性需求这一混杂变量）",
   "watch": "与 Elon 同窗口 Form 4 同方向=强信号；单独减持=弱信号",
   "channel": "EDGAR Form 4(A)"
  },
  {
   "id": "ellison",
   "name": "Larry Ellison",
   "short": "Ellison",
   "zone": "资本",
   "role": "Oracle 联创",
   "org": "Oracle",
   "tier": "盟友/算力资本",
   "x": 470,
   "y": 95,
   "aliases": [
    "Ellison",
    "埃里森",
    "甲骨文"
   ],
   "func": "传统企业 IT ↔ 马斯克系的桥接点；曾任 Tesla 董事（A:Proxy）",
   "signal": "利益绑定判读：Oracle 云与 xAI/Colossus 存在算力商业关系时，其公开表态含仓位成分，按 B 级打折",
   "watch": "Oracle 与马斯克系合同变动/13F 持仓变动",
   "channel": "13F(A)/Oracle 财报(A)/言论(C)"
  },
  {
   "id": "thiel",
   "name": "Peter Thiel",
   "short": "Thiel",
   "zone": "资本",
   "role": "投资人",
   "org": "Founders Fund",
   "tier": "网络根节点",
   "x": 580,
   "y": 150,
   "aliases": [
    "Thiel",
    "蒂尔"
   ],
   "func": "PayPal 网络根节点：不直接重仓马斯克系，但控制人脉拓扑（Sacks 等政治节点经此网络输送）",
   "signal": "拓扑价值>资金价值：其公开与马斯克分歧=网络层裂缝，先于资金层出现",
   "watch": "公开分歧言论/政治押注转向",
   "channel": "FEC(A)/公开言论(C)"
  },
  {
   "id": "andreessen",
   "name": "Marc Andreessen",
   "short": "a16z",
   "zone": "资本",
   "role": "风投",
   "org": "a16z",
   "tier": "盟友/资本",
   "x": 610,
   "y": 255,
   "aliases": [
    "Andreessen",
    "安德森"
   ],
   "func": "风投侧盟友，xAI 投资人（B:多源）",
   "signal": "基金配置动作=对叙事的付费投票；公开站台=低成本信号，按 C 级处理",
   "watch": "后续轮跟投/停投",
   "channel": "基金公告(B)/言论(C)"
  },
  {
   "id": "baron",
   "name": "Ron Baron",
   "short": "Baron",
   "zone": "资本",
   "role": "机构多头",
   "org": "Baron Capital",
   "tier": "叙事传播层",
   "x": 540,
   "y": 350,
   "aliases": [
    "Baron",
    "巴伦"
   ],
   "func": "长期机构多头。判读定位：叙事溢价的传播层而非信息层——影响散户资金流，不产生新信息",
   "signal": "清仓/大幅减持=叙事层裂缝信号；加仓表态=无增量信息",
   "watch": "13F 季度持仓变动",
   "channel": "13F(A)/公开信(C)"
  },
  {
   "id": "wood",
   "name": "Cathie Wood",
   "short": "C.Wood",
   "zone": "资本",
   "role": "机构多头",
   "org": "ARK Invest",
   "tier": "叙事传播层",
   "x": 430,
   "y": 390,
   "aliases": [
    "Cathie",
    "木头姐",
    "ARK"
   ],
   "func": "同 Baron：传播层节点，其目标价模型是叙事放大器",
   "signal": "ARK 日频持仓公开=罕见的高频机构行为数据；连续卖出与公开唱多背离=行为>言论的经典判读场景",
   "watch": "ARK 日频交易与言论的背离度",
   "channel": "ARK 日频披露(A)/13F(A)"
  },
  {
   "id": "sacks",
   "name": "David Sacks",
   "short": "Sacks",
   "zone": "政治",
   "role": "白宫 AI/加密事务",
   "org": "White House",
   "tier": "政治接口",
   "x": 260,
   "y": 390,
   "aliases": [
    "Sacks",
    "萨克斯"
   ],
   "func": "马斯克政治资产的制度化形态：PayPal 网络成员进入政策岗位=私人关系转为制度通道",
   "signal": "传导链：其政策文本→AI/自动驾驶监管环境→FSD/xAI 估值。岗位存续本身就是信号",
   "watch": "去职=政治资产贬值预警；政策文本措辞变化",
   "channel": "白宫公开记录(A)/LDA(A)/言论(C)"
  },
  {
   "id": "griffin",
   "name": "Ken Griffin",
   "short": "Griffin",
   "zone": "对手",
   "role": "对冲基金",
   "org": "Citadel",
   "tier": "对手方",
   "x": 120,
   "y": 420,
   "aliases": [
    "Griffin",
    "格里芬",
    "Citadel"
   ],
   "func": "对手方+做市商双重角色：其公开表态与做市持仓可以反向（公开记录有分歧史）",
   "signal": "做市商的言论信息量极低（对冲后无方向暴露）；13F 显示的期权结构才有内容",
   "watch": "13F 期权持仓结构/公开做空表态",
   "channel": "13F(A)/言论(C-)"
  }
 ],
 "person_edges": [
  {
   "a": "thiel",
   "b": "sacks",
   "kind": "PayPal 网络",
   "ev": "A",
   "note": "同源人脉，政治节点经此输送"
  },
  {
   "a": "thiel",
   "b": "musk",
   "kind": "PayPal 网络(历史)",
   "ev": "A",
   "note": "合并造就，关系有分合史"
  },
  {
   "a": "birchall",
   "b": "kimbal",
   "kind": "家族事务协调",
   "ev": "推断",
   "note": "家办与家族董事的职能重叠"
  },
  {
   "a": "ellison",
   "b": "musk",
   "kind": "算力/董事会史",
   "ev": "A",
   "note": "曾任 Tesla 董事；算力商业关系"
  },
  {
   "a": "sacks",
   "b": "musk",
   "kind": "政治接口",
   "ev": "A",
   "note": "公开岗位"
  },
  {
   "a": "birchall",
   "b": "musk",
   "kind": "全权执行",
   "ev": "A",
   "note": "家办/信托"
  },
  {
   "a": "kimbal",
   "b": "musk",
   "kind": "家族/董事",
   "ev": "A",
   "note": "Form 4 独立信号源"
  },
  {
   "a": "thiel",
   "b": "andreessen",
   "kind": "风投同业",
   "ev": "B",
   "note": "联合参投史"
  },
  {
   "a": "andreessen",
   "b": "musk",
   "kind": "xAI 投资",
   "ev": "B",
   "note": "基金公告"
  },
  {
   "a": "baron",
   "b": "musk",
   "kind": "机构多头",
   "ev": "A",
   "note": "13F"
  },
  {
   "a": "wood",
   "b": "musk",
   "kind": "机构多头",
   "ev": "A",
   "note": "13F/日频披露"
  },
  {
   "a": "griffin",
   "b": "musk",
   "kind": "公开分歧",
   "ev": "B",
   "note": "媒体多源"
  }
 ],
 "pol_biz": [
  {
   "line": "SpaceX 载人/发射",
   "channel": "NASA 预算与人事",
   "dep": "CCP/HLS 合同收入；载人航天双向人质结构（NASA 无替代运力）",
   "state": "顺风",
   "lag": "0-6月",
   "watch": "合同公告/NASA局长人事/预算案",
   "ev": "A"
  },
  {
   "line": "Starlink/Starshield",
   "channel": "五角大楼+国务院",
   "dep": "DoD 合同；地缘准入即时变现（委内瑞拉案例：和解→市场准入，账本E007）",
   "state": "顺风",
   "lag": "0-3月",
   "watch": "合同披露/新市场开通公告",
   "ev": "A/B"
  },
  {
   "line": "Starlink 频谱",
   "channel": "FCC 裁决",
   "dep": "direct-to-cell 扩容申请在途；Kuiper 07-30 部署死线=竞争格局裁决点",
   "state": "中性",
   "lag": "0-6月",
   "watch": "FCC IBFS 文件/07-30 倒计时",
   "ev": "A"
  },
  {
   "line": "Tesla FSD/Robotaxi",
   "channel": "NHTSA + 州监管",
   "dep": "3 项联邦调查在身；州级备案是最干净先行信号（内华达实证，账本E012）",
   "state": "逆风",
   "lag": "1-12月",
   "watch": "调查进展/逐州备案",
   "ev": "A"
  },
  {
   "line": "Tesla 中国",
   "channel": "中美双边+审批",
   "dep": "FSD 全面审批预期 Q3'26；上海工厂+电池供应链=双向人质结构",
   "state": "中性偏顺",
   "lag": "0-6月",
   "watch": "审批节点/关税动作",
   "ev": "B"
  },
  {
   "line": "Tesla 能源/制造",
   "channel": "国会预算(IRA/关税)",
   "dep": "补贴与关税结构影响储能/整车成本地板",
   "state": "中性",
   "lag": "6-18月",
   "watch": "预算案/关税清单",
   "ev": "B"
  },
  {
   "line": "xAI Colossus 电力",
   "channel": "环保监管+地方政府",
   "dep": "孟菲斯燃气轮机许可诉讼=算力扩张的法律约束形态（先行引擎L3在库）",
   "state": "逆风",
   "lag": "1-12月",
   "watch": "法院公开系统/ERCOT-TVA队列",
   "ev": "A"
  },
  {
   "line": "SPCX 股东结构",
   "channel": "财政部 CFIUS",
   "dep": "海湾主权资本(HUMAIN/QIA/MGX)持股，审查敞口随选举风向摆动",
   "state": "悬置",
   "lag": "事件驱动",
   "watch": "国会听证/CFIUS 动作",
   "ev": "B"
  }
 ],
 "pol_lens": [
  {
   "lens": "地缘政治风险（Geopolitical Risk）",
   "claim": "马斯克系已成为半主权行为体，其政治敞口不能用普通公司政治风险模型定价。",
   "mech": "同时是政府承包商（收入依赖）、规制对象（调查在身）、舆论平台主（X）、地缘工具持有者（星链）——四重身份互为抵押品。星链的委内瑞拉/乌克兰准入证明它能independent行使准国家权力；海湾主权资本入股则把中东地缘直接嵌入股东结构。",
   "read": "当前处于'和解后修复'阶段，四重身份的抵押品网络稳定运行；真正的系统性风险不在任何单一事件，而在委托人更替(11-03/2028)导致整张抵押品网络重新定价。",
   "chain": "地缘资本—准入链",
   "stage": "当前：和解修复期"
  },
  {
   "lens": "委托-代理与规制俘获（Principal-Agent / Regulatory Capture）",
   "claim": "这是双向规制俘获，不是单向的企业游说政府。",
   "mech": "政府难彻底惩罚它（NASA 载人无替代=人质），它也无法彻底摆脱政府（合同收入+调查抓手）。旋转门(Sacks)把关系制度化，主权资本(CFIUS敞口)是第四层绑定。委托人(总统)是代理人(马斯克)的权力来源，但代理人握有委托人依赖的关键能力——经典的相互套牢。",
   "read": "共生均衡运行中；脆弱点是委托人任期有限(2028硬终点)，博弈论预言临近终点合作激励衰减、背叛概率上升。",
   "chain": "政商旋转门链",
   "stage": "跨阶段（结构性）"
  },
  {
   "lens": "重复博弈与威慑（Repeated Game / Deterrence）",
   "claim": "2025 的决裂-和解已完成一轮完整博弈展示，双方威慑能力已被验证为可信。",
   "mech": "双方各持毁灭性筹码（政府：合同审查+调查升级；马斯克：舆论动员+爱泼斯坦档案），2025-06~07 都真实动用过惩罚路径，随后回到合作。'美国党'未注销=保留在手的看跌威慑期权；金援=沉没成本型可置信承诺信号。",
   "read": "合作均衡+双向威慑在架；11-03 是外生冲击点——委托人权力削弱会直接改变支付矩阵，可能触发新一轮背叛。",
   "chain": "决裂—报复—和解链",
   "stage": "当前：威慑均衡"
  },
  {
   "lens": "政治经济学与产业政策（Political Economy）",
   "claim": "帝国的成本地板与需求基座被三条政策管道系统性决定，政治不是外生扰动而是内生变量。",
   "mech": "① IRA 补贴/关税→储能与整车单位经济（补贴变动=成本曲线平移）；② 联邦采购周期→SPCX 收入的准财政基座；③ 监管个案(NHTSA/FAA/环保诉讼)→各产品线的行政成本段。这些成本记在监管账上而非损益表，但真实存在。",
   "read": "补贴中性、采购顺风、三案(NHTSA/FAA/孟菲斯)悬置压制资本开支回报确定性。",
   "chain": "（对应先行引擎 L3/L7 监管层）",
   "stage": "当前：悬置压制"
  },
  {
   "lens": "政治风险的资产定价（Political Risk Pricing）",
   "claim": "政治敞口在两标的上是不对称期权结构，且同源不可分散。",
   "mech": "TSLA 政治 beta 集中在监管路径→二元事件期权（赛前 IV 抬升、赛后单边释放）；SPCX 集中在合同+审查→缓变信用利差型。两者同源于同一委托人关系，双持仓政治敞口是叠加而非分散。TSLA 溢价 93% 押未来业务，久期极长→本质是长久期政治期权，对委托人更替的 beta 远高于其现金流。",
   "read": "距头号二元事件(11-03)的定价窗口收窄；纪律=二元事件用情景加权而非均值预期定价，事件前减敞口、事件后按情景树执行。",
   "chain": "决裂—报复—和解链（提供 2025-07 暴跌剧本作为定价参照）",
   "stage": "当前：定价窗口收窄"
  }
 ],
 "travel": {
  "channel_note": "ADS-B 实时源已收费，自动通道暂停；公开可核实的延迟通道=@ElonJetNextDay（24 小时延迟，合规）。本模块只记录：① 机队/基地等耐久结构事实（真源）；② 有公开报道来源的具体行程。不脑补航迹、不涉私人生活。年飞行约 441 架次（G650ER，公开统计），高频=常态商务通勤，判读价值在'异常目的地'而非频次本身。",
  "verified": [
   {
    "d": "2025-04",
    "dest": "北京",
    "evt": "访问后 FSD 中国进展公开化",
    "src": "公开报道·历史验证锚点"
   },
   {
    "d": "2025-10",
    "dest": "利雅得",
    "evt": "访问后主权资本(HUMAIN $3B)入局 Series E",
    "src": "公开报道·历史验证锚点"
   }
  ],
  "log": [],
  "assets": [
   {
    "reg": "N628TS",
    "model": "Gulfstream G650ER",
    "role": "主力远程机",
    "src": "公开 FAA 注册/ElonJet"
   },
   {
    "reg": "N502SX",
    "model": "Gulfstream G550",
    "role": "中程",
    "src": "公开 FAA 注册"
   },
   {
    "reg": "N272BG",
    "model": "Gulfstream G550",
    "role": "中程",
    "src": "公开 FAA 注册"
   }
  ],
  "base_triangle": [
   "奥斯汀(居所/得州总部)",
   "湾区(Tesla Fremont)",
   "南加州(SpaceX Hawthorne)",
   "华盛顿(政治事务)"
  ]
 },
 "supply": [
  {
   "ind": "储能 Megapack",
   "owner": "TSLA",
   "tag": "储能",
   "thesis": "全系唯一供不应求线：约束在电芯产能而非需求，扩产=直接增利。第一性=每 kWh 的锂电化学成本地板。",
   "layers": [
    {
     "layer": 1,
     "node": "电化学能量密度地板",
     "state": "LFP 化学体系理论比能量有上限；成本随锂价与制造学习率下行",
     "st": "yellow",
     "watch": "碳酸锂现货价（成本直接传导毛利）",
     "src": "A:公开大宗行情",
     "ev": "A",
     "lname": "物理约束"
    },
    {
     "layer": 2,
     "node": "碳酸锂/正负极材料",
     "state": "LFP 正极去钴，供给弹性优于三元；宁德时代为主供",
     "st": "green",
     "watch": "盐湖/锂矿开工率、正极厂扩产",
     "src": "B:公司公告/行业协会",
     "ev": "B",
     "lname": "上游原料"
    },
    {
     "layer": 3,
     "node": "LFP 电芯",
     "state": "占 Megapack 成本 60%+；自产 vs 宁德外购比例是毛利胜负手",
     "st": "yellow",
     "watch": "电芯自供比例（休斯顿厂爬坡）",
     "src": "A:财报电话会",
     "ev": "A",
     "lname": "核心部件"
    },
    {
     "layer": 4,
     "node": "电芯干电极工艺",
     "state": "4680 干电极良率爬坡=成本主变量；工艺链删除环节",
     "st": "yellow",
     "watch": "良率里程碑、单线节拍",
     "src": "B:多源+专利",
     "ev": "B",
     "lname": "制造工艺"
    },
    {
     "layer": 5,
     "node": "休斯顿 Megapack 3 厂",
     "state": "Megapack 3 工艺代际=件数删减；产能=利润进度表",
     "st": "green",
     "watch": "新厂投产节点、年化 GWh",
     "src": "A:财报/州建设文件",
     "ev": "A",
     "lname": "产能规模"
    },
    {
     "layer": 6,
     "node": "Megapack 集装箱",
     "state": "标准化集装箱=可复制的电池价格期货",
     "st": "green",
     "watch": "单柜出货、backlog 订单",
     "src": "A:财报",
     "ev": "A",
     "lname": "集成产品"
    },
    {
     "layer": 7,
     "node": "电网侧客户",
     "state": "公用事业/数据中心配储需求刚性上升（AI 电力荒外溢）",
     "st": "green",
     "watch": "backlog、区域并网队列",
     "src": "B:公司+电网公示",
     "ev": "B",
     "lname": "市场需求"
    },
    {
     "layer": 8,
     "node": "毛利可持续性",
     "state": "39.5% 毛利需三分解：锂价下行/设计降本/供需溢价——可持续性完全不同",
     "st": "yellow",
     "watch": "毛利率分解、Q1'26 部署 8.8GWh 双纪录能否延续",
     "src": "A:财报",
     "ev": "A",
     "lname": "护城河"
    }
   ],
   "valid": "12–18个月（至休斯顿Megapack3满产前，供给约束逻辑成立）"
  },
  {
   "ind": "电动车 / FSD / Robotaxi",
   "owner": "TSLA",
   "tag": "EV",
   "thesis": "三态叠加：整车是需求约束（防守盘），FSD 是软件变需求变量，Robotaxi 是监管供给约束（溢价主载体）。第一性=$/mile 低于私家车持有成本的拐点。",
   "layers": [
    {
     "layer": 1,
     "node": "$/mile 成本地板",
     "state": "无人出行单位成本跌破私家车持有成本=需求引爆点",
     "st": "yellow",
     "watch": "单车折旧+能耗+保险的每英里成本",
     "src": "B:测算",
     "ev": "B",
     "lname": "物理约束"
    },
    {
     "layer": 2,
     "node": "电池/稀土/芯片",
     "state": "EV 上游与储能共享；FSD 芯片自研 HW（Dojo/自研 SoC）",
     "st": "yellow",
     "watch": "HW 迭代、稀土永磁供给",
     "src": "B:多源",
     "ev": "B",
     "lname": "上游原料"
    },
    {
     "layer": 3,
     "node": "一体压铸件+结构电池包",
     "state": "后底板 70+ 冲压件→1-2 铸件=工艺链删除；命门=压铸机(IDRA/力劲)",
     "st": "green",
     "watch": "压铸机采购、免热处理合金良率",
     "src": "A:供应链+专利",
     "ev": "A",
     "lname": "核心部件"
    },
    {
     "layer": 4,
     "node": "FSD 数据-算法飞轮",
     "state": "端到端神经网络需海量真实里程；Colossus 提供训练算力",
     "st": "yellow",
     "watch": "接管率(MPI)、版本迭代节奏",
     "src": "C:公司口径需打折",
     "ev": "C",
     "lname": "制造工艺"
    },
    {
     "layer": 5,
     "node": "整车产能",
     "state": "Fremont/上海/得州；Model Y 平台学习率样本充足",
     "st": "green",
     "watch": "周度产量、降价动作",
     "src": "A:交付数据",
     "ev": "A",
     "lname": "产能规模"
    },
    {
     "layer": 6,
     "node": "Robotaxi 车队",
     "state": "42 辆 vs Waymo 577 辆；规模差距是当前现实",
     "st": "yellow",
     "watch": "车队周计数、单车日订单",
     "src": "B:州文件+媒体",
     "ev": "B",
     "lname": "集成产品"
    },
    {
     "layer": 7,
     "node": "逐州监管备案",
     "state": "州牌照=最干净先行信号（内华达实证 06-20）；联邦 NHTSA 3 项调查压制",
     "st": "red",
     "watch": "逐州备案进度、调查裁决、FSD 中国 Q3 审批",
     "src": "A:州文件/NHTSA公示",
     "ev": "A",
     "lname": "市场需求"
    },
    {
     "layer": 8,
     "node": "$350/股溢价证伪点",
     "state": "溢价 93% 押 Robotaxi/Optimus/FSD；本人承认 Robotaxi 2027 前无有意义收入",
     "st": "red",
     "watch": "溢价 vs 车队实际单位经济、11-03 与 Q3 两个二元事件",
     "src": "A:财报电话会",
     "ev": "A",
     "lname": "护城河"
    }
   ],
   "valid": "至2026-11-03与FSD中国审批两个二元事件落地前（溢价定价窗口）"
  },
  {
   "ind": "发射 / Starlink",
   "owner": "SPCX",
   "tag": "发射",
   "thesis": "垄断现金流底仓+高凸性期权。第一性=$/kg 至 LEO 跌破 $150 则轨道工业化经济成立。Starlink 的物理天花板是频谱与单星容量（香农极限），不是发射。",
   "layers": [
    {
     "layer": 1,
     "node": "$/kg 至 LEO",
     "state": "Falcon9 ~$2,700 → 星舰闸门 <$150；决定轨道数据中心叙事生死",
     "st": "yellow",
     "watch": "星舰 $/kg 曲线（试飞×复用×翻新成本三变量）",
     "src": "A:公开+S-1",
     "ev": "A",
     "lname": "物理约束"
    },
    {
     "layer": 2,
     "node": "甲烷/不锈钢/推进剂",
     "state": "星舰用液氧甲烷+不锈钢箭体=材料成本暴力下压",
     "st": "green",
     "watch": "Raptor 单台成本(目标十万美元量级)",
     "src": "B:多源",
     "ev": "B",
     "lname": "上游原料"
    },
    {
     "layer": 3,
     "node": "Raptor 3 发动机",
     "state": "全流量分级燃烧=更低涡温=更长寿命=更多复用；帝国 Idiot Index 收敛最狠单品",
     "st": "green",
     "watch": "单台工时、增材制造占比",
     "src": "B:公司+媒体",
     "ev": "B",
     "lname": "核心部件"
    },
    {
     "layer": 4,
     "node": "星舰复用工艺",
     "state": "试飞×复用周转×翻新成本三变量决定经济性",
     "st": "yellow",
     "watch": "复用曲线、翻新成本",
     "src": "A:试飞记录",
     "ev": "A",
     "lname": "制造工艺"
    },
    {
     "layer": 5,
     "node": "发射节奏/产能",
     "state": "Falcon 高频发射=垄断现金流；星舰产能爬坡中",
     "st": "green",
     "watch": "近期发射次数、外部商业订单占比",
     "src": "A:发射日程",
     "ev": "A",
     "lname": "产能规模"
    },
    {
     "layer": 6,
     "node": "Starlink 星座+终端",
     "state": "在轨 8000+颗=全球 LEO 2/3；卫星=会飞的路由器，$/Gbps 为唯一度量",
     "st": "green",
     "watch": "订户数、V3 单星容量、终端 BOM",
     "src": "A/B:FCC+公司",
     "ev": "A",
     "lname": "集成产品"
    },
    {
     "layer": 7,
     "node": "频谱/地缘准入",
     "state": "direct-to-cell 扩容 FCC 申请在途；地缘准入即时变现(委内瑞拉案例)",
     "st": "yellow",
     "watch": "FCC IBFS、Kuiper 07-30 死线、新市场开通",
     "src": "A:FCC IBFS",
     "ev": "A",
     "lname": "市场需求"
    },
    {
     "layer": 8,
     "node": "外部订单占比证伪点",
     "state": "外部商业订单占比萎缩=封闭经济警报（自造需求撑发射）",
     "st": "yellow",
     "watch": "外部订单占比、频谱容量物理天花板",
     "src": "B:披露",
     "ev": "B",
     "lname": "护城河"
    }
   ],
   "valid": "5年尺度（星舰$/kg曲线与频谱容量的长周期主线）"
  },
  {
   "ind": "算力 Colossus / xAI",
   "owner": "SPCX",
   "tag": "算力/xAI",
   "thesis": "需求已锁($26B/年合同)，瓶颈是电力链不是芯片——'看电不看芯片'。第一性=$/GPU-月的电力+折旧成本堆栈，且外部可与 Anthropic/Google 实付租金对表证伪。",
   "layers": [
    {
     "layer": 1,
     "node": "电力并网物理约束",
     "state": "单机架功率密度=传统数据中心数倍；瓶颈是供电链非算力",
     "st": "red",
     "watch": "ERCOT/TVA 互联队列、变压器/开关柜 2-4 年交付队列",
     "src": "A:电网公示",
     "ev": "A",
     "lname": "物理约束"
    },
    {
     "layer": 2,
     "node": "燃气轮机/自建电源",
     "state": "VoltaGrid 燃气轮机(孟菲斯许可诉讼中)=电力约束的法律形态",
     "st": "red",
     "watch": "许可诉讼裁决、自建电源里程碑",
     "src": "A:法院公开系统",
     "ev": "A",
     "lname": "上游原料"
    },
    {
     "layer": 3,
     "node": "GPU/自研加速器",
     "state": "GPU 供给已非主约束；自建 fab 叙事在途",
     "st": "yellow",
     "watch": "自建 fab 里程碑、GPU 到货",
     "src": "B:多源",
     "ev": "B",
     "lname": "核心部件"
    },
    {
     "layer": 4,
     "node": "数据中心建造节拍",
     "state": "122 天建成 10 万卡已验证执行力；可复制性取决于电力设备供应链",
     "st": "green",
     "watch": "建造节拍、机架上电数",
     "src": "B:公司+媒体",
     "ev": "B",
     "lname": "制造工艺"
    },
    {
     "layer": 5,
     "node": "Colossus 装机",
     "state": "当前 300MW+，目标 GW 级；受电力并网约束",
     "st": "yellow",
     "watch": "装机 MW→GW 爬坡",
     "src": "B:公司",
     "ev": "B",
     "lname": "产能规模"
    },
    {
     "layer": 6,
     "node": "Grok 模型/API",
     "state": "Grok 企业 API=算力变现出口",
     "st": "yellow",
     "watch": "API 客户、模型代际",
     "src": "C:公司口径打折",
     "ev": "C",
     "lname": "集成产品"
    },
    {
     "layer": 7,
     "node": "算力租赁客户",
     "state": "Anthropic $1.25B/月 + Google $920M/月 ≈ $26B/年已签约",
     "st": "green",
     "watch": "续约、新增租户、实付对表",
     "src": "A:S-1/多源",
     "ev": "A",
     "lname": "市场需求"
    },
    {
     "layer": 8,
     "node": "租赁毛利证伪点",
     "state": "SPCX 估值中唯一可逐季证伪部分：用电价+GPU折旧反推毛利，与外部实付租金对表",
     "st": "yellow",
     "watch": "单位算力毛利 vs 电价+折旧模型",
     "src": "A:S-1拆解",
     "ev": "A",
     "lname": "护城河"
    }
   ],
   "valid": "6–12个月（电力许可诉讼裁决前，瓶颈判定成立）"
  },
  {
   "ind": "Optimus 人形机器人",
   "owner": "TSLA",
   "tag": "Optimus",
   "thesis": "头号证伪对象=头号先机，二者必居其一。第一性=旋转执行器的谐波减速器全球产能，存在 10 倍+缺口。整机是叙事，执行器是物理。",
   "layers": [
    {
     "layer": 1,
     "node": "执行器产能物理约束",
     "state": "千万台整机⇒上亿执行器/年 vs 全球谐波减速器产能千万级=10倍+缺口",
     "st": "red",
     "watch": "减速器全球产能 vs Optimus 目标",
     "src": "A:行业产能公开",
     "ev": "A",
     "lname": "物理约束"
    },
    {
     "layer": 2,
     "node": "稀土永磁/磁钢",
     "state": "无框力矩电机磁钢=稀土暴露；地缘供给敏感",
     "st": "yellow",
     "watch": "稀土价格、磁材供给",
     "src": "B:行业",
     "ev": "B",
     "lname": "上游原料"
    },
    {
     "layer": 3,
     "node": "谐波减速器/行星滚柱丝杠",
     "state": "核心命门件；哈默纳科/绿的谐波 vs Tesla 自研集成执行器",
     "st": "red",
     "watch": "Tesla 自研执行器产线验证 vs Tier-1 订单",
     "src": "A:招聘/设备采购信号",
     "ev": "A",
     "lname": "核心部件"
    },
    {
     "layer": 4,
     "node": "执行器产线工艺",
     "state": "自研自产复制 4680 剧本=唯一破局路径",
     "st": "red",
     "watch": "执行器产线招聘与设备采购(L1/L3先行信号)",
     "src": "A:招聘公开库",
     "ev": "A",
     "lname": "制造工艺"
    },
    {
     "layer": 5,
     "node": "整机产能",
     "state": "Fremont 线改造中(Model S/X 停产腾产能)",
     "st": "yellow",
     "watch": "整机下线数、产线改造进度",
     "src": "B:社区影像+媒体",
     "ev": "B",
     "lname": "产能规模"
    },
    {
     "layer": 6,
     "node": "灵巧手/整机集成",
     "state": "22 自由度腱绳 vs 直驱=成本与能力权衡",
     "st": "yellow",
     "watch": "灵巧手迭代、整机演示可信度",
     "src": "C:发布会需打折",
     "ev": "C",
     "lname": "集成产品"
    },
    {
     "layer": 7,
     "node": "工厂内部署",
     "state": "先在自有工厂上岗=最干净的真实需求验证",
     "st": "yellow",
     "watch": "自有工厂实际部署数",
     "src": "C:公司口径",
     "ev": "C",
     "lname": "市场需求"
    },
    {
     "layer": 8,
     "node": "$/工时证伪点",
     "state": "机器人 $/工时 < 最低工资=劳动力经济学重写；分水岭=执行器产线落地",
     "st": "red",
     "watch": "执行器招聘/设备采购、Tier-1 订单",
     "src": "A:招聘+公告",
     "ev": "A",
     "lname": "护城河"
    }
   ],
   "valid": "5年尺度（执行器产线能否落地是分水岭，短期不证伪）"
  },
  {
   "ind": "Neuralink 脑机",
   "owner": "私营",
   "tag": "脑机",
   "thesis": "20 年尺度标的，TRL 4-5。第一性=毫瓦级功耗(组织热损伤上限)与带宽是物理死敌；产能天花板是 R1 手术机器人节拍，不是发布会。",
   "layers": [
    {
     "layer": 1,
     "node": "功耗-带宽物理死敌",
     "state": "毫瓦级功耗(热损伤上限)↔带宽，物理对立",
     "st": "yellow",
     "watch": "每代通道数×带宽/功耗",
     "src": "B:论文/公司",
     "ev": "B",
     "lname": "物理约束"
    },
    {
     "layer": 2,
     "node": "柔性电极材料",
     "state": "聚合物+铂铱柔性电极丝，细于发丝",
     "st": "green",
     "watch": "电极工艺良率",
     "src": "B:公司",
     "ev": "B",
     "lname": "上游原料"
    },
    {
     "layer": 3,
     "node": "定制 ASIC/感应充电",
     "state": "N1 植入体核心器件",
     "st": "yellow",
     "watch": "ASIC 迭代",
     "src": "C:公司",
     "ev": "C",
     "lname": "核心部件"
    },
    {
     "layer": 4,
     "node": "R1 手术机器人",
     "state": "植入节拍=产能天花板(人手无法植入)",
     "st": "yellow",
     "watch": "R1 台数×单台手术时长",
     "src": "B:公司+FDA",
     "ev": "B",
     "lname": "制造工艺"
    },
    {
     "layer": 5,
     "node": "临床产能",
     "state": "看 R1 台数×节拍，不看发布会",
     "st": "yellow",
     "watch": "累计植入患者数",
     "src": "B:FDA/临床登记",
     "ev": "B",
     "lname": "产能规模"
    },
    {
     "layer": 6,
     "node": "N1+R1 系统",
     "state": "植入体+手术机器人整体系统",
     "st": "yellow",
     "watch": "系统可靠性",
     "src": "C:公司",
     "ev": "C",
     "lname": "集成产品"
    },
    {
     "layer": 7,
     "node": "患者/适应症",
     "state": "从瘫痪适应症起步，逐步扩展",
     "st": "yellow",
     "watch": "适应症审批、患者招募",
     "src": "A:FDA公开",
     "ev": "A",
     "lname": "市场需求"
    },
    {
     "layer": 8,
     "node": "规模化证伪点",
     "state": "TRL 4-5，20 年标的；证伪点=R1 节拍能否工业化",
     "st": "yellow",
     "watch": "患者数×带宽倍增节奏",
     "src": "B:多源",
     "ev": "B",
     "lname": "护城河"
    }
   ],
   "valid": "20年尺度（TRL 4-5，长周期标的）"
  }
 ],
 "supply_layer_def": [
  {
   "n": "L1 第一性原理",
   "d": "决定该产业成本地板与物理天花板的底层约束"
  },
  {
   "n": "L2 上游材料/基础研究",
   "d": "原材料与基础科学供给"
  },
  {
   "n": "L3 关键元件/核心器件",
   "d": "最卡脖子的单一部件"
  },
  {
   "n": "L4 制造工艺/产线",
   "d": "把元件变成量产品的工艺链"
  },
  {
   "n": "L5 产能/规模",
   "d": "产能爬坡与规模经济"
  },
  {
   "n": "L6 集成产品",
   "d": "整机/整线交付形态"
  },
  {
   "n": "L7 部署/渠道/客户",
   "d": "落地、渠道与真实需求"
  },
  {
   "n": "L8 变现/护城河/证伪点",
   "d": "利润形态、护城河时间常数、最该被证伪的环节"
  }
 ],
 "supply_note": "读法：每条产业线从 L1(物理约束)到 L8(证伪点)是一条完整供应链；红灯层=该产业当前最卡的环节，也是投资该线最该盯的先行信号。灯色=环节状态(绿正常/黄观察/红约束)，非重要性。产能与合同数字标证据级，公司单方口径一律打折至 C。",
 "pol_capital": [
  {
   "cls": "制度性权力",
   "item": "旋转门在任岗位（Sacks 白宫 AI/加密事务）",
   "origin": "2025 政府效率部时期铺设",
   "since": "2025-01",
   "state": "在任",
   "usable": "高（政策文本直接影响 AI/自动驾驶监管环境）",
   "decay": "随委托人任期硬衰减，2028 终点",
   "ev": "A"
  },
  {
   "cls": "制度性权力",
   "item": "政府承包商地位（NASA/DoD 收入依赖）",
   "origin": "载人航天无替代运力",
   "since": "长期",
   "state": "稳固",
   "usable": "高（'大而不能倒'的谈判筹码）",
   "decay": "极慢（替代运力开发以十年计）",
   "ev": "A"
  },
  {
   "cls": "关系性资本",
   "item": "与白宫的直接通道（决裂后重建）",
   "origin": "2025-12 重启金援→2026-01 海湖庄园晚宴",
   "since": "2026-01",
   "state": "和解后修复中",
   "usable": "中（关系刚修复，信任折价未完全回吐）",
   "decay": "中（单次背叛已发生，恐怖平衡态）",
   "ev": "B"
  },
  {
   "cls": "关系性资本",
   "item": "PayPal 网络（Thiel/Sacks 等根节点）",
   "origin": "历史合伙关系",
   "since": "长期",
   "state": "活跃",
   "usable": "高（人脉拓扑，非资金）",
   "decay": "极慢",
   "ev": "A"
  },
  {
   "cls": "舆论性资本",
   "item": "X 平台舆论动员力",
   "origin": "2022 收购 Twitter",
   "since": "2022-10",
   "state": "持有",
   "usable": "高（可即时动员，是对政府的反向威慑工具）",
   "decay": "慢（但受 DSA/监管侵蚀）",
   "ev": "A"
  },
  {
   "cls": "舆论性资本",
   "item": "'美国党'威慑期权（未注销）",
   "origin": "2025-07 建党→搁置",
   "since": "2025-07",
   "state": "搁置未注销",
   "usable": "条件性（保留在手的看跌威慑）",
   "decay": "随选举结果重定价",
   "ev": "A"
  },
  {
   "cls": "资本性杠杆",
   "item": "中期选举金援（换监管善意）",
   "origin": "2025-12 重启，2026 持续投放",
   "since": "2025-12",
   "state": "投放中",
   "usable": "高（可置信承诺信号，沉没成本型）",
   "decay": "选举后价值兑现或归零",
   "ev": "A"
  },
  {
   "cls": "地缘性筹码",
   "item": "星链地缘准入工具（委内瑞拉/乌克兰）",
   "origin": "2026-01 星链进委内瑞拉",
   "since": "2026-01",
   "state": "活跃",
   "usable": "高（可即时兑换市场准入）",
   "decay": "慢",
   "ev": "B"
  },
  {
   "cls": "地缘性筹码",
   "item": "海湾主权资本绑定（HUMAIN/QIA/MGX）",
   "origin": "2026-01 xAI Series E 入股",
   "since": "2026-01",
   "state": "已入股（现 SPCX 股东）",
   "usable": "中（换资本+地缘缓冲，代价是 CFIUS 敞口）",
   "decay": "随中美/中东地缘摆动",
   "ev": "B"
  }
 ],
 "pol_liab": [
  {
   "item": "民主党系统性敌意",
   "trigger": "11-03 翻盘即清算",
   "since": "长期",
   "sev": "高",
   "note": "翻盘情景=监管反转+主权持股审查+建党期权重启，复演 2025-07 暴跌剧本"
  },
  {
   "item": "欧盟 DSA + Grok 深度伪造多国调查",
   "trigger": "S-1 已列风险因素",
   "since": "2025",
   "sev": "中",
   "note": "舆论资本的监管侵蚀通道"
  },
  {
   "item": "爱泼斯坦'核按钮'（已按过一次）",
   "trigger": "决裂期已动用",
   "since": "2025-06",
   "sev": "高",
   "note": "恐怖平衡：双方都有一次性毁灭性筹码，动用即互毁"
  },
  {
   "item": "空军叫停先例（报复通道随时重开）",
   "trigger": "2025-07 决裂期实锤",
   "since": "2025-07",
   "sev": "中",
   "note": "证明政府惩罚路径真实存在且可低成本重启"
  },
  {
   "item": "非美国出生→无总统资格",
   "trigger": "结构性",
   "since": "永久",
   "sev": "结构",
   "note": "政治权力上限是'租借'的，无法转为自有主权权力——决定其政治资本永远是他人授予、可收回"
  }
 ],
 "pol_chains": [
  {
   "name": "决裂—报复—和解链（完整重复博弈样本）",
   "nodes": [
    {
     "d": "2025-05",
     "e": "反'大而美'法案，特马公开决裂"
    },
    {
     "d": "2025-06",
     "e": "爱泼斯坦档案爆料（动用毁灭性筹码）"
    },
    {
     "d": "2025-07",
     "e": "宣布'美国党'；报复实锤：NASA 局长提名撤回、空军叫停太平洋试验"
    },
    {
     "d": "2025-09",
     "e": "柯克追悼会同场'刹车'，波动率收敛"
    },
    {
     "d": "2025-12",
     "e": "重启金援共和党（可置信承诺信号）"
    },
    {
     "d": "2026-01",
     "e": "海湖庄园晚宴 + 星链进委内瑞拉（和解即时变现地缘准入）"
    }
   ],
   "read": "这是一轮完整的以牙还牙-修复博弈：双方各持人质、都动用过惩罚路径、最终回到合作均衡。启示——合作是均衡不是善意，2028 委托人任期终点临近时合作激励将衰减。"
  },
  {
   "name": "政商旋转门链（私人关系→制度通道）",
   "nodes": [
    {
     "d": "2024-07",
     "e": "助选/介入政治"
    },
    {
     "d": "2025-01",
     "e": "政府效率部时期铺设人脉"
    },
    {
     "d": "2025+",
     "e": "Sacks 进白宫任 AI/加密事务，PayPal 网络成员制度化"
    },
    {
     "d": "持续",
     "e": "政策文本→AI/自动驾驶监管环境→FSD/xAI 估值"
    }
   ],
   "read": "私人关系转化为制度通道的标准路径。岗位存续本身=信号；去职=政治资产贬值预警。"
  },
  {
   "name": "地缘资本—准入链（主权租金→市场+缓冲）",
   "nodes": [
    {
     "d": "2026-01",
     "e": "海湾主权资本(HUMAIN $3B/QIA/MGX)入股 xAI Series E"
    },
    {
     "d": "2026-02",
     "e": "xAI 并入 SpaceX，主权资本变为 SPCX 股东"
    },
    {
     "d": "2026-06",
     "e": "SPCX IPO，主权持股显性化"
    },
    {
     "d": "或有",
     "e": "CFIUS/国会审查敞口随选举风向摆动"
    }
   ],
   "read": "地缘租金换资本+政治缓冲，代价是把自己接入 CFIUS 审查射程。这是把地缘风险资本化的双刃操作。"
  }
 ],
 "pol_note": "本页为对构建情景(2026)的政治-地缘专业推演。方法：政治资本按存量表(五类资产/负债)编目、每项标来源事件与时间链、可动用性与衰减时间常数；五视角为地缘政治风险/委托代理/重复博弈/政治经济学/政治风险定价五层递进，各自绑定一条可回测事件链并标注所处阶段。随周报刷新的是'当前判读'与阶段定位，框架结构稳定。"
};
