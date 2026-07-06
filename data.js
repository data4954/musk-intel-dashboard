// Axiomake 数据文件 —— 由 GitHub Actions scripts/update.py 维护，请勿手动编辑
// 编码: UTF-8 | 模式版本: 2 | 账本模型: 只追加不覆盖 | 全自动核实规则 R1-R6 见 update.py 头注
window.MUSKINTEL_DATA = {
 "meta": {
  "schema_version": 2,
  "generated_at": "2026-07-07T01:12:21+08:00",
  "generator": "GitHub Actions · scripts/update.py",
  "note": "种子数据校准至2026-07-05；v2起由GitHub Actions全自动核实入库（规则R1-R6见scripts/update.py）"
 },
 "market": {
  "asof": "2026-07-07",
  "quotes": [
   {
    "sym": "TSLA",
    "name": "Tesla",
    "price": 418.515,
    "chg": 10.22,
    "mcap": "≈$1.26T",
    "src": "Yahoo 2026-07-07",
    "status": "green"
   },
   {
    "sym": "SPCX",
    "name": "SpaceX(含xAI)",
    "price": 160.79,
    "chg": 4.93,
    "mcap": "≈$2.6T",
    "note": "2026-06-12 IPO 发行价≈$135",
    "src": "Yahoo 2026-07-07",
    "status": "green"
   },
   {
    "sym": "BTC-USD",
    "name": "Bitcoin",
    "price": 63715.4,
    "chg": 3.63,
    "src": "Yahoo 2026-07-07",
    "status": "green"
   },
   {
    "sym": "DOGE-USD",
    "name": "Dogecoin",
    "price": 0.0767,
    "chg": 3.59,
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
     "c": 418.515
    }
   ],
   "SPCX": [
    {
     "d": "2026-07-06",
     "c": 162.0
    },
    {
     "d": "2026-07-07",
     "c": 160.79
    }
   ],
   "BTC-USD": [
    {
     "d": "2026-07-06",
     "c": 61529.14
    },
    {
     "d": "2026-07-07",
     "c": 63715.4
    }
   ],
   "DOGE-USD": [
    {
     "d": "2026-07-06",
     "c": 0.0746
    },
    {
     "d": "2026-07-07",
     "c": 0.0767
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
     "v": "SpaceX 1832 · xAI 213 在招（2026-07-07；Tesla 无免费接口）",
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
   "owner": "TSLA"
  },
  {
   "line": "算力 Colossus",
   "state": "供给约束 ★",
   "constraint": "电力并网+许可(非GPU)",
   "unlock": "燃气轮机许可裁决/互联队列",
   "meaning": "需求已锁($26B/年合同)，看电不看芯片",
   "watch": "ERCOT/TVA队列、许可诉讼、自建fab里程碑",
   "owner": "SPCX"
  },
  {
   "line": "Starlink",
   "state": "双增长",
   "constraint": "频谱/单星容量(香农极限)",
   "unlock": "V3卫星代际",
   "meaning": "稳态复利；在轨8000+颗=全球LEO 2/3",
   "watch": "订户数、V3容量、Kuiper 07-30死线",
   "owner": "SPCX"
  },
  {
   "line": "发射服务",
   "state": "垄断+自造需求",
   "constraint": "星舰复用经济性",
   "unlock": "试飞×复用周转×翻新成本三变量",
   "meaning": "高凸性期权；外部订单占比萎缩=封闭经济警报",
   "watch": "复用曲线、外部商业订单占比",
   "owner": "SPCX"
  },
  {
   "line": "电动车",
   "state": "需求约束 ⚠",
   "constraint": "价格弹性/中国竞争",
   "unlock": "FSD中国Q3'26(软件变需求变量)",
   "meaning": "防守盘；降价史=需求约束自供状态证词",
   "watch": "周度上险数、降价动作",
   "owner": "TSLA"
  },
  {
   "line": "Robotaxi",
   "state": "监管供给约束",
   "constraint": "州牌照+3项NHTSA联邦调查",
   "unlock": "逐州备案",
   "meaning": "$350/股溢价主载体；42辆 vs Waymo 577辆",
   "watch": "州备案(先行L3)、调查进展、车队周计数",
   "owner": "TSLA"
  },
  {
   "line": "Optimus",
   "state": "供给缺口 ✗",
   "constraint": "谐波减速器全球产能(10倍+缺口)",
   "unlock": "自研执行器产线验证",
   "meaning": "头号证伪对象=头号先机，二者必居其一",
   "watch": "执行器招聘/设备采购(L1/L3)、Tier-1订单(L6)",
   "owner": "TSLA"
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
   "owner": "TSLA"
  },
  {
   "line": "地面运输",
   "carrier": "EV/FSD/Robotaxi",
   "trl": 7,
   "metric": "$/mile",
   "tipping": "无人出行 $/mile < 私家车持有成本",
   "cn": "比亚迪/华为系/萝卜快跑",
   "verdict": "EV中方领先；无监督FSD美方领先，Q3中国审批=两树接触点",
   "owner": "TSLA"
  },
  {
   "line": "航天",
   "carrier": "Falcon/Starship/Starlink",
   "trl": 8,
   "metric": "$/kg 至 LEO",
   "tipping": "<$150/kg → 轨道工业化经济成立",
   "cn": "长征系/朱雀/天龙",
   "verdict": "美方代差领先(复用)",
   "owner": "SPCX"
  },
  {
   "line": "计算",
   "carrier": "Colossus/自建fab/Grok",
   "trl": 8,
   "metric": "$/GW、$/M token",
   "tipping": "轨道算力见三档物理判定(当前:物理紧张)",
   "cn": "DeepSeek/通义/字节",
   "verdict": "算法差距收窄，算力(电力)是新战场",
   "owner": "SPCX"
  },
  {
   "line": "机器人",
   "carrier": "Optimus",
   "trl": 5,
   "metric": "$/工时",
   "tipping": "机器人$/工时 < 最低工资 → 劳动力经济学重写",
   "cn": "宇树/智元/傅利叶",
   "verdict": "中方供应链(减速器)占先，集成度美方下注",
   "owner": "TSLA"
  },
  {
   "line": "脑机",
   "carrier": "Neuralink N1/R1",
   "trl": 5,
   "metric": "通道×带宽/$",
   "tipping": "患者数×带宽倍增节奏",
   "cn": "脑虎/中科院系",
   "verdict": "美方临床进度领先",
   "owner": "私营"
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
  "last_run": "2026-07-07 01:12",
  "sources": {
   "yahoo": "green",
   "edgar": "fused",
   "launchlib": "green",
   "rss": "green",
   "greenhouse": "green",
   "fec": "green"
  },
  "fail_counts": {
   "yahoo": 0,
   "edgar": 5,
   "launchlib": 0,
   "rss": 0,
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
   "name": "Falcon 9 Block 5 | Globalstar 2-R Mission 1 (x 9)",
   "net": "2026-07-31T00:00:00Z",
   "status": "To Be Determined"
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
 ]
};
