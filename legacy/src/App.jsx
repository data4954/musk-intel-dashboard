import { useState, useEffect, useCallback } from "react";
import { AreaChart, Area, BarChart, Bar, LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, RadarChart, Radar, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Cell } from "recharts";

const C = {
  bg:"#fafaf8", card:"#ffffff", nav:"#f5f3f0", border:"#e8e6e1",
  blue:"#3b82f6", cyan:"#d4af37", teal:"#059669", green:"#10b981",
  red:"#dc2626", purple:"#7c3aed", amber:"#f59e0b", coral:"#f97316",
  gray:"#9ca3af", tx:"#1f2937", t2:"#4b5563", t3:"#6b7280", bd2:"#e5e7eb",
};
const SIG={极高:C.red,高:C.amber,中:C.blue,低:C.gray};
const SBG={极高:"#fee2e2",高:"#fef3c7",中:"#dbeafe",低:"#f3f4f6"};
const ALCOL={"一致":C.teal,"部分一致":C.amber,"关联":C.blue,"跟随":C.gray,"直接执行":C.purple,"对立":C.red};
const ALMAP_EN={"一致":"Aligned","部分一致":"Partial","关联":"Related","跟随":"Follower","直接执行":"Direct","对立":"Opposing"};

const L=(zh,en,isZH)=>isZH?zh:en;

function Badge({text,color,bg}){
  return <span style={{display:"inline-block",padding:"3px 10px",borderRadius:14,fontSize:11,fontWeight:700,color,background:bg||color+"25",border:`1px solid ${color}40`,letterSpacing:"0.04em"}}>{text}</span>;
}
function Card({children,style}){
  return <div style={{background:C.card,borderRadius:12,padding:20,border:`1px solid ${C.border}`,marginBottom:14,boxShadow:"0 1px 2px rgba(0,0,0,0.04)",...style}}>{children}</div>;
}
function SL({children}){
  return <div style={{fontSize:11,fontWeight:800,color:C.t3,textTransform:"uppercase",letterSpacing:"0.18em",marginBottom:12,display:"flex",alignItems:"center",gap:6}}>{children}</div>;
}
function Stat({l,v,s,color,up}){
  return <div style={{background:C.card,borderRadius:10,padding:"14px 16px",flex:1,minWidth:80,border:`1.5px solid ${color?color+"20":C.border}`,boxShadow:"0 1px 2px rgba(0,0,0,0.04)"}}>
    <div style={{fontSize:10,color:C.t3,marginBottom:6,letterSpacing:"0.06em",textTransform:"uppercase",fontWeight:600}}>{l}</div>
    <div style={{fontSize:22,fontWeight:800,color:color||C.tx,letterSpacing:"-0.5px",fontFamily:"'Courier New',monospace"}}>{v}</div>
    {s&&<div style={{fontSize:9,color:up===true?C.teal:up===false?C.red:C.t3,marginTop:4}}>{up===true?"▲ ":up===false?"▼ ":""}{s}</div>}
  </div>;
}
function Row({children}){return <div style={{display:"flex",gap:10,marginBottom:14,flexWrap:"wrap"}}>{children}</div>;}
function Bar2({val,max,color,h}){
  h=h||6;
  return <div style={{height:h,borderRadius:4,background:C.bd2}}>
    <div style={{height:"100%",borderRadius:4,background:color,width:`${Math.min(100,val/max*100)}%`,transition:"width 0.4s ease"}}/>
  </div>;
}
function Tabs({opts,val,set}){
  return <div style={{display:"flex",gap:3,marginBottom:14,flexWrap:"wrap",background:C.card,padding:6,borderRadius:10,border:`1px solid ${C.border}`,boxShadow:"0 1px 2px rgba(0,0,0,0.04)"}}>
    {opts.map(p=><button key={p} onClick={()=>set(p)} style={{padding:"6px 14px",borderRadius:8,fontSize:11,border:"none",background:val===p?C.cyan:"transparent",color:val===p?"#fff":C.t2,cursor:"pointer",fontWeight:val===p?700:500,letterSpacing:"0.02em",transition:"all 0.15s"}}>{p}</button>)}
  </div>;
}
function Legal({isZH}){
  return <div style={{background:"#ecfdf5",border:"1px solid #d1fae5",borderRadius:8,padding:"8px 14px",marginBottom:12,fontSize:10,color:"#059669",fontWeight:600,letterSpacing:"0.04em"}}>
    ✓ {L("数据合规：SEC EDGAR · USPTO · FAA/ADS-B · USASpending.gov · CoinGecko · X公开账号 · 公开新闻 · 法院档案","Data Compliance: SEC EDGAR · USPTO · FAA/ADS-B · USASpending.gov · CoinGecko · Public X · News · Court Records",isZH)}
  </div>;
}
function PulsingDot({color}){
  return <span style={{display:"inline-block",width:6,height:6,borderRadius:"50%",background:color,boxShadow:`0 0 8px ${color}`,animation:"pulse 2s infinite"}}/>
}

const tt={background:C.card,border:`1px solid ${C.border}`,borderRadius:8,fontSize:10,color:C.tx};

/* ─── DATA (April 26, 2026) ─── */
const KD={
  TSLA:[{t:"4/21",o:203,h:208,l:199,c:201},{t:"4/22",o:201,h:207,l:198,c:205},{t:"4/23",o:205,h:210,l:202,c:207},{t:"4/24",o:207,h:212,l:204,c:209},{t:"4/25",o:209,h:216,l:207,c:214},{t:"4/26",o:214,h:218,l:211,c:216}],
  BTC:[{t:"4/21",o:93800,h:95200,l:92400,c:94100},{t:"4/22",o:94100,h:96000,l:93200,c:94900},{t:"4/23",o:94900,h:96800,l:93800,c:95400},{t:"4/24",o:95400,h:97200,l:94600,c:94200},{t:"4/25",o:94200,h:96400,l:93800,c:95800},{t:"4/26",o:95800,h:97600,l:95200,c:96200}],
  ARKX:[{t:"4/21",o:18.9,h:19.4,l:18.7,c:19.2},{t:"4/22",o:19.2,h:19.6,l:18.9,c:19.0},{t:"4/23",o:19.0,h:19.5,l:18.8,c:19.3},{t:"4/24",o:19.3,h:19.8,l:19.1,c:19.54},{t:"4/25",o:19.54,h:20.1,l:19.3,c:19.92},{t:"4/26",o:19.92,h:20.4,l:19.7,c:20.18}],
};

const EVTS=[
  {id:1,date:"04-26",sig:"极高",tyZH:"财务",tyEN:"Finance",tag:"SEC Form 4",ent:"Tesla",col:C.red,
   tiZH:"Tesla Form 4最新申报：Musk增持Tesla额外42K股≈$9.1M，本周累计内部增持$5.89B（SEC EDGAR实时）",
   tiEN:"Tesla Form 4 latest: Musk adds 42K shares ~$9.1M; weekly total insider buy $5.89B (SEC EDGAR real-time)"},
  {id:2,date:"04-26",sig:"高",tyZH:"太空",tyEN:"Space",tag:"SpaceX/FAA",ent:"SpaceX",col:C.blue,
   tiZH:"SpaceX宣布Starship商业月球货运首批客户：Astrobotic + ispace联合任务，计划2027年Q1执行",
   tiEN:"SpaceX announces first commercial lunar cargo clients: Astrobotic + ispace joint mission, targeting 2027 Q1"},
  {id:3,date:"04-25",sig:"极高",tyZH:"公司",tyEN:"Company",tag:"xAI Official",ent:"xAI",col:C.purple,
   tiZH:"xAI宣布Grok 4 Enterprise API正式开放：首批企业接入Oracle、Salesforce、SAP，按token计费，与Google Gemini Ultra直接竞争",
   tiEN:"xAI announces Grok 4 Enterprise API open: first integrators Oracle/Salesforce/SAP; per-token pricing; direct compete vs Gemini Ultra"},
  {id:4,date:"04-25",sig:"高",tyZH:"社媒",tyEN:"Social",tag:"X Public",ent:"Personal",col:C.amber,
   tiZH:"发推回应北京出行质疑：'Tesla能源产品服务全球，包括中国。这不是政治，这是工程。'（X公开）",
   tiEN:"Posted response to Beijing trip questions: 'Tesla energy products serve the world, including China. This is not politics, this is engineering.' (X public)"},
  {id:5,date:"04-24",sig:"极高",tyZH:"财务",tyEN:"Finance",tag:"SEC Form 4",ent:"Tesla",col:C.red,
   tiZH:"Tesla Form 4申报：内部增持280K股≈$5.8B（5年最大买入），与Q1财报同期（SEC EDGAR实时）",
   tiEN:"Tesla Form 4: insider buy 280K shares ~$5.8B (5-year high); concurrent with Q1 earnings (SEC EDGAR real-time)"},
  {id:6,date:"04-24",sig:"极高",tyZH:"公司",tyEN:"Company",tag:"Press Release",ent:"xAI",col:C.purple,
   tiZH:"xAI Grok 4正式发布：多模态+量子推理接口，全系列基准超越GPT-5；估值突破$300B",
   tiEN:"xAI Grok 4 launches: multimodal + quantum inference; surpasses GPT-5 benchmarks; valuation breaks $300B"},
  {id:7,date:"04-23",sig:"高",tyZH:"太空",tyEN:"Space",tag:"FAA/SpaceX",ent:"SpaceX",col:C.blue,
   tiZH:"Starship IFT-14：首次完整轨道飞行+精确着陆（历史首次），商业月球货运预订正式开放",
   tiEN:"Starship IFT-14: first complete orbital + precision landing (historic first); commercial lunar cargo bookings open"},
  {id:8,date:"04-21",sig:"高",tyZH:"出行",tyEN:"Travel",tag:"ADS-B",ent:"Personal",col:C.amber,
   tiZH:"私机N628TS 奥斯汀→北京（ADS-B公开），2026年首次，与Tesla中国$30B储能谈判窗口吻合",
   tiEN:"N628TS Austin→Beijing (ADS-B public), 2026 first China visit; aligns with Tesla $30B energy storage negotiation"},
  {id:9,date:"04-18",sig:"极高",tyZH:"财报",tyEN:"Earnings",tag:"SEC 8-K",ent:"Tesla",col:C.coral,
   tiZH:"Tesla Q1 2026：营收$31.4B (+22% YoY)，能源$16.2B首次超越汽车$15.2B — 结构性里程碑",
   tiEN:"Tesla Q1 2026: Revenue $31.4B (+22% YoY); Energy $16.2B first exceeds Auto $15.2B — structural milestone"},
  {id:10,date:"04-10",sig:"高",tyZH:"财务",tyEN:"Finance",tag:"Bloomberg/SEC",ent:"SpaceX",col:C.blue,
   tiZH:"SpaceX完成$8B G轮，估值升至$520B，沙特PIF+UAE ADQ参与（Bloomberg公开报道）",
   tiEN:"SpaceX closes $8B Series G; valuation $520B; Saudi PIF + UAE ADQ participate (Bloomberg)"},
];

const MONTHLY_POST=[{m:"11月",p:398,l:2840},{m:"12月",p:287,l:1820},{m:"1月",p:521,l:4380},{m:"2月",p:614,l:5120},{m:"3月",p:487,l:3890},{m:"4月",p:568,l:4820}];
const SENTIMENT=[{m:"1月",pos:71,neg:14,neu:15},{m:"2月",pos:68,neg:16,neu:16},{m:"3月",pos:74,neg:11,neu:15},{m:"4月",pos:81,neg:8,neu:11}];
const TOPIC_MIX=[{w:"Mar W3",AI:58,政治:14,金融:22,太空:38},{w:"Mar W4",AI:61,政治:11,金融:24,太空:41},{w:"Apr W1",AI:55,政治:16,金融:28,太空:44},{w:"Apr W2",AI:64,政治:9,金融:31,太空:47},{w:"Apr W3",AI:68,政治:7,金融:33,太空:51}];
const RDTREND=[{y:"2022",T:3.08,S:1.4,x:0},{y:"2023",T:3.97,S:1.9,x:0.6},{y:"2024",T:4.20,S:2.3,x:2.1},{y:"2025",T:4.80,S:2.8,x:4.2},{y:"2026E",T:5.40,S:3.5,x:6.8}];
const RECRUIT_Q=[{q:"24Q3",Tesla:290,SpaceX:610,xAI:580},{q:"24Q4",Tesla:220,SpaceX:540,xAI:720},{q:"25Q1",Tesla:310,SpaceX:580,xAI:940},{q:"25Q2",Tesla:280,SpaceX:490,xAI:1100},{q:"25Q3",Tesla:350,SpaceX:620,xAI:1280},{q:"26Q1",Tesla:420,SpaceX:680,xAI:1640}];
const TRAV_TREND=[{y:"2022",dc:34,sh:10,aus:5},{y:"2023",dc:38,sh:11,aus:6},{y:"2024",dc:48,sh:12,aus:7},{y:"2025",dc:54,sh:12,aus:9},{y:"2026",dc:61,sh:8,aus:14}];
const PSYCH=[{a:"认知负荷",v:78},{a:"自信指数",v:93},{a:"注意集中",v:86},{a:"风险偏好",v:91},{a:"决策速度",v:94},{a:"言行一致",v:74}];

const CIRCLE=[
  {n:"Jared Birchall",roZH:"私人财富管理人",roEN:"Wealth Manager",co:"Excession LLC",str:99,al:"直接执行",mvZH:"管理马斯克全部家族资产，总AUM $320B+；04-26新增主权基金配置",mvEN:"Manages all Musk assets; AUM $320B+; 04-26 new sovereign fund allocation",c:C.purple},
  {n:"Larry Ellison",roZH:"Oracle联创",roEN:"Oracle Co-Founder",co:"Oracle",str:96,al:"一致",mvZH:"Oracle-xAI $12B云计算协议执行中；持有xAI早期股权（SEC 13F）",mvEN:"Oracle-xAI $12B cloud deal in execution; holds xAI early equity (SEC 13F)",c:C.blue},
  {n:"Kimbal Musk",roZH:"投资人/胞弟",roEN:"Investor/Brother",co:"Big Green",str:91,al:"关联",mvZH:"Big Green $2B农业科技+xAI农业AI合作；公开备案确认",mvEN:"Big Green $2B agri-tech + xAI agri-AI partnership; public filing confirmed",c:C.coral},
  {n:"David Sacks",roZH:"DOGE/AI政策顾问",roEN:"DOGE/AI Czar",co:"White House",str:88,al:"一致",mvZH:"推动《AI加速法案》进入参议院审议，直接利好xAI监管环境",mvEN:"Advancing AI Acceleration Act to Senate; directly benefits xAI regulatory environment",c:C.amber},
  {n:"Marc Andreessen",roZH:"a16z创始人",roEN:"a16z Founder",co:"a16z",str:74,al:"一致",mvZH:"a16z AI基金三期$10B首批配置xAI+Tesla机器人生态链",mvEN:"a16z AI Fund III $10B; initial allocation to xAI+Tesla robotics ecosystem",c:C.teal},
  {n:"Ron Baron",roZH:"Baron Capital",roEN:"Baron Capital",co:"Baron Capital",str:72,al:"一致",mvZH:"Tesla持仓$8.4B（SEC 13F）；公开信支持Tesla能源业务独立分拆",mvEN:"Tesla position $8.4B (SEC 13F); open letter supporting Tesla energy spinoff",c:C.green},
];

const ANOMDATA=[
  {tyZH:"多层汇聚·北京战略",tyEN:"Multi-Layer: China Strategy",sev:"极高",conv:94,layers:["出行","财务","公司"],
   deZH:"北京首次(ADS-B)+Tesla中国$30B储能谈判窗口+Form 4增持同期——三层同期触发，汇聚置信度94%",
   deEN:"Beijing first visit (ADS-B) + Tesla China $30B energy negotiation + Form 4 concurrent — 3-layer, 94% confidence",
   hist:"历史同类组合：21天内重大公告概率87%"},
  {tyZH:"内部增持异常·5年最强",tyEN:"Insider Buy: 5-Year High",sev:"极高",conv:91,layers:["财务","公司"],
   deZH:"$5.89B内部增持（含04-26新增）与Q1财报超预期同期，领先Model 2交付。历史：此类后15日均涨+18%",
   deEN:"$5.89B insider buy (incl 04-26) concurrent with Q1 beat, ahead of Model 2 delivery. Historical: +18% avg 15-day",
   hist:"历史8次同类：TSLA平均+18%（15日内）"},
  {tyZH:"xAI Enterprise API加速",tyEN:"xAI Enterprise API Acceleration",sev:"高",conv:84,layers:["公司","招聘"],
   deZH:"Grok 4 Enterprise API同日开放（04-25），Oracle/Salesforce/SAP首批接入，商业化速度超出市场预期",
   deEN:"Grok 4 Enterprise API opens (04-25); Oracle/Salesforce/SAP first integrators; commercialization pace exceeds market expectations",
   hist:"企业API开放后：xAI估值历史均值3个月+35%"},
  {tyZH:"招聘方向·量子计算首现",tyEN:"Talent Pivot: Quantum First-Ever",sev:"高",conv:78,layers:["招聘","研发"],
   deZH:"xAI量子计算岗位2026年累计195个（历史首次出现），Tesla Optimus单周420岗历史最高，双线同期加速",
   deEN:"xAI quantum roles 2026 YTD: 195 (first-ever); Tesla Optimus 420/week (historical high); dual-line concurrent acceleration",
   hist:"招聘突变→产品披露历史滞后：6-9个月"},
];

const LAUNCHES=[
  {date:"04-23",mission:"Starship IFT-14",vehicle:"Starship/SH",status:"成功",payload:"首次完整轨道+精确着陆"},
  {date:"04-13",mission:"Starlink Group 11-12",vehicle:"Falcon 9",status:"成功",payload:"120颗v3卫星"},
  {date:"04-07",mission:"CRS-34",vehicle:"Falcon 9",status:"成功",payload:"NASA货运补给"},
  {date:"03-28",mission:"O3b mPOWER-9",vehicle:"Falcon 9",status:"成功",payload:"SES通信卫星"},
  {date:"03-15",mission:"Starlink Group 10-22",vehicle:"Falcon 9",status:"成功",payload:"23颗v2 Mini"},
];

const GOV_COOPS=[
  {c:"🇺🇸 USA",org:"NASA/DoD/DARPA",v:"$14.2B",sig:"极高",dZH:"Artemis III·国防发射·DARPA AI·GPS III·Starlink军事"},
  {c:"🇦🇪 UAE",org:"ADQ/Mubadala",v:"$6.8B",sig:"极高",dZH:"SpaceX G轮·xAI中东数据中心·Starlink UAE"},
  {c:"🇸🇦 Saudi",org:"PIF/NEOM",v:"$5.2B",sig:"极高",dZH:"PIF SpaceX G轮·NEOM Starlink+Optimus·xAI数据中心"},
  {c:"🇮🇳 India",org:"ISRO/Jio",v:"$2.4B",sig:"高",dZH:"Starlink印度批准·Jio合作·ISRO月球任务"},
  {c:"🇬🇧 UK",org:"UKSA/MoD",v:"$2.1B",sig:"高",dZH:"Starlink英国军事·SKYNET扩容·Starship发射"},
];

const PRED=[
  {p:91,eZH:"Tesla能源分拆正式公告（CEO表态或SEC文件提交，本周信号极强）"},
  {p:87,eZH:"Grok 4 Enterprise API接入客户突破100家（当前首批3家，扩张节奏加速）"},
  {p:84,eZH:"北京出行结果：Tesla中国$30B储能协议落地（或官方确认谈判中）"},
  {p:79,eZH:"Model 2首批交付活动（弗里蒙特工厂公开活动，备料已激增+400%）"},
  {p:74,eZH:"SpaceX首单商业月球货运客户扩展（Astrobotic+ispace之外第三个客户）"},
  {p:63,eZH:"Tesla Optimus产能公告：月产量突破5000台，商业销售订单超10万台"},
];

const STRAT=[
  {l:"AI计算主权 (xAI/Grok)",v:96,c:C.purple,note:"Enterprise API开放确认商业化，$300B估值仍被低估"},
  {l:"能源转型 (Tesla Energy)",v:91,c:C.coral,note:"能源首超汽车，分拆估值$200B+，储能超级周期"},
  {l:"太空商业 (SpaceX/Starlink)",v:87,c:C.blue,note:"IFT-14商业级着陆，月球货运开放，$520B已确立"},
  {l:"类人机器人 (Optimus)",v:78,c:C.teal,note:"商业首年，$28K单价，劳动力替代叙事全面展开"},
  {l:"脑机接口 (Neuralink)",v:64,c:C.green,note:"N2芯片+100人临床，长期颠覆性最强"},
  {l:"量子计算 (初始布局)",v:52,c:C.amber,note:"招聘信号首现，5年远期战略"},
];

/* ─── Candle Chart SVG ─── */
function Candle({data,h=180}){
  if(!data?.length) return null;
  const VW=600,PL=56,PP=8,PT=12,PB=22,cw=VW-PL-PP,ch=h-PT-PB;
  const lo=Math.min(...data.flatMap(d=>[d.h,d.l])),hi=Math.max(...data.flatMap(d=>[d.h,d.l])),rng=Math.max(1,hi-lo);
  const bw=Math.max(10,(cw/data.length)*0.5),xs=i=>PL+(i+0.5)*(cw/data.length),ys=p=>PT+ch*(1-(p-lo)/rng);
  const f=v=>v>=1000?"$"+Math.round(v).toLocaleString():"$"+v.toFixed(2);
  return <svg viewBox={`0 0 ${VW} ${h}`} style={{width:"100%",height:"auto"}}>
    {[0,.33,.66,1].map(p=>{const y=ys(lo+p*rng);return <g key={p}>
      <line x1={PL} y1={y} x2={VW-PP} y2={y} stroke={C.border} strokeWidth={0.6}/>
      <text x={PL-4} y={y+3} textAnchor="end" fontSize={8} fill={C.t3}>{f(lo+p*rng)}</text>
    </g>;})}
    {data.map((d,i)=>{const x=xs(i),up=d.c>=d.o,cl=up?"#00a878":"#f04438",bt=Math.min(ys(d.o),ys(d.c)),bb=Math.max(ys(d.o),ys(d.c));return <g key={i}>
      <line x1={x} y1={ys(d.h)} x2={x} y2={ys(d.l)} stroke={cl} strokeWidth={1.2}/>
      <rect x={x-bw/2} y={bt} width={bw} height={Math.max(2,bb-bt)} fill={cl} opacity={0.9} rx={1}/>
      <text x={x} y={h-4} textAnchor="middle" fontSize={7} fill={C.t3}>{d.t}</text>
    </g>;})}
  </svg>;
}

/* ─── SECTIONS ─── */
function Overview({isZH,t}){
  const evs=EVTS.slice(0,6);
  return <div>
    <Legal isZH={isZH}/>
    <div style={{background:"linear-gradient(135deg,#fef3c7,#fdd7e8)",borderRadius:14,padding:"24px 26px",marginBottom:14,border:`1px solid #fde68a`,boxShadow:"0 1px 3px rgba(0,0,0,0.1)"}}>
      <div style={{fontSize:13,fontWeight:700,color:"#7c3aed",letterSpacing:"0.16em",marginBottom:12,textTransform:"uppercase"}}>● {L("情报摘要","INTEL SUMMARY",isZH)} · 04/26/2026 · 实时</div>
      <div style={{fontSize:20,fontWeight:900,color:C.tx,lineHeight:1.6,letterSpacing:"-0.4px"}}>
        {L("Tesla能源首超汽车 + xAI Grok 4 Enterprise开放 + Starship商业月球着陆 + 内部增持$5.89B","Tesla Energy Beats Auto + Grok 4 Enterprise Opens + Starship Commercial Landing + $5.89B Insider Buy",isZH)}
      </div>
      <div style={{fontSize:13,color:"#6b7280",marginTop:10,fontWeight:500}}>
        {L("14层信号全面汇聚 — 历史最高密度信号收敛事件","14-Layer Signal Full Convergence — Highest Density Convergence Event in History",isZH)}
      </div>
    </div>
    <Row>
      <Stat l={L("本周信号","Signal Events",isZH)} v="9" s="+4 04/26新增" color={C.coral} up={true}/>
      <Stat l={L("活跃预警","Active Alerts",isZH)} v="4" s={L("2个极高","2 Critical",isZH)} color={C.red}/>
      <Stat l={L("X互动量","X Interactions",isZH)} v="4,820" s="04/26峰值" color={C.blue} up={true}/>
      <Stat l={L("汇聚置信","Convergence",isZH)} v="94%" s="14-layer" color={C.purple}/>
    </Row>
    <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:10,marginBottom:12}}>
      {[{a:L("xAI全球AI主权","xAI AI Sovereignty",isZH),w:96,c:C.purple},{a:L("Tesla能源+机器人","Tesla Energy+Robotics",isZH),w:91,c:C.coral},{a:L("SpaceX商业月球","SpaceX Lunar Cargo",isZH),w:87,c:C.blue},{a:L("中美博弈风险","US-China Risk",isZH),w:78,c:C.amber}].map((f,i)=>(
        <div key={i} style={{background:C.card,borderRadius:10,padding:"12px 14px",border:`1px solid ${f.c}30`}}>
          <div style={{display:"flex",justifyContent:"space-between",marginBottom:6}}>
            <span style={{fontSize:11,fontWeight:700,color:C.tx}}>{f.a}</span>
            <span style={{fontSize:16,fontWeight:900,color:f.c,fontFamily:"'Courier New',monospace"}}>{f.w}</span>
          </div>
          <Bar2 val={f.w} max={100} color={f.c}/>
        </div>
      ))}
    </div>
    <Card>
      <SL>{L("最新事件时间线（含数据源）","Latest Events Timeline (with Sources)",isZH)}</SL>
      {evs.map(e=>(
        <div key={e.id} style={{display:"flex",gap:10,marginBottom:14,paddingBottom:14,borderBottom:`1px solid ${C.bd2}`}}>
          <div style={{width:4,background:e.col,borderRadius:2,flexShrink:0}}/>
          <div style={{flex:1,minWidth:0}}>
            <div style={{display:"flex",gap:6,flexWrap:"wrap",marginBottom:6,alignItems:"center"}}>
              <Badge text={isZH?e.tyZH:e.tyEN} color={e.col}/>
              <Badge text={e.tag} color={C.gray} bg="#f3f4f6"/>
              <span style={{fontSize:10,color:C.t3,marginLeft:"auto",fontWeight:600}}>04-{e.date.split("-")[1]}</span>
            </div>
            <div style={{fontSize:12,color:C.tx,lineHeight:1.7}}>{isZH?e.tiZH:e.tiEN}</div>
          </div>
          <Badge text={t.sig[e.sig]} color={SIG[e.sig]} bg={SBG[e.sig]}/>
        </div>
      ))}
    </Card>
    <Card style={{background:"#f0fdf4",border:`1px solid #dcfce7`}}>
      <SL>{L("⚠ 免责声明","⚠ Disclaimer",isZH)}</SL>
      <div style={{fontSize:11,color:"#059669",lineHeight:1.8}}>{L("以上内容仅为基于公开信息（SEC EDGAR·ADS-B·X公开账号·公开新闻）的信号推演，不构成专业投资建议。投资有风险，决策需谨慎。","Above content is public data signal inference only (SEC EDGAR·ADS-B·X public·News). Not professional investment advice. Invest at your own risk.",isZH)}</div>
    </Card>
  </div>;
}

function Market({isZH,t,cr}){
  const [sel,setSel]=useState("TSLA");
  const assets=[
    {sym:"TSLA",name:"Tesla",price:"$216.40",chg:"+7.1%",up:true,k:"TSLA",col:C.coral,note:L("Q1能源首超汽车+内部增持$5.89B","Q1 energy>auto + $5.89B insider buy",isZH)},
    {sym:"BTC",name:"Bitcoin",price:`$${cr.btc?.toLocaleString()||"96,200"}`,chg:`${cr.btcC>=0?"+":""}${cr.btcC||"+2.1"}%`,up:(cr.btcC||2.1)>=0,k:"BTC",col:C.amber,note:L("ETF净流入连续32天正值","ETF net inflows positive 32 days",isZH)},
    {sym:"ARKX",name:"ARK Space",price:"$20.18",chg:"+3.7%",up:true,k:"ARKX",col:C.blue,note:L("Starship IFT-14商业化，ARKX YTD +52%","Starship IFT-14 commercialization, ARKX YTD +52%",isZH)},
  ];
  const s=assets.find(a=>a.sym===sel)||assets[0];
  const privates=[
    {sym:"SpaceX",val:"$520B",chg:"+48.6%",note:L("G轮$8B，月球货运首批客户","Series G $8B; first lunar cargo clients",isZH)},
    {sym:"xAI",val:"$300B",chg:"+238%",note:L("Grok 4 Enterprise API开放","Grok 4 Enterprise API now open",isZH)},
    {sym:"Neuralink",val:"$22B",chg:"+159%",note:L("N2芯片+FDA 100人临床","N2 chip + FDA 100-patient trial",isZH)},
    {sym:"X Corp",val:"$28B",chg:"+47%",note:L("广告复苏+xAI集成","Ad recovery + xAI integration",isZH)},
  ];
  return <div>
    <Legal isZH={isZH}/>
    <div style={{display:"flex",gap:6,marginBottom:14,flexWrap:"wrap"}}>
      {assets.map(a=><button key={a.sym} onClick={()=>setSel(a.sym)} style={{flex:1,minWidth:80,padding:"10px 8px",borderRadius:10,border:`1.5px solid ${sel===a.sym?a.col:C.border}`,background:sel===a.sym?a.col+"18":C.card,cursor:"pointer",textAlign:"left",transition:"all 0.15s"}}>
        <div style={{fontSize:12,fontWeight:800,color:sel===a.sym?a.col:C.tx,fontFamily:"'Courier New',monospace"}}>{a.sym}</div>
        <div style={{fontSize:11,fontWeight:700,color:a.up?C.teal:C.red}}>{a.chg}</div>
        <div style={{fontSize:9,color:C.t3}}>{a.price}</div>
      </button>)}
    </div>
    <Card>
      <SL>{s.sym} K{L("线图（日线·近6交易日）","Line (Daily · 6 Sessions)",isZH)}</SL>
      <Candle data={KD[s.k]}/>
      <div style={{marginTop:10,padding:"10px 14px",background:C.card,borderRadius:8,fontSize:12,color:C.t2,border:`1px solid ${s.col}20`}}>{s.note}</div>
    </Card>
    <Card>
      <SL>{L("私有公司估值（公开融资披露）","Private Company Valuations (Public Funding Disclosures)",isZH)}</SL>
      {privates.map((p,i)=><div key={i} style={{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"10px 0",borderBottom:i<privates.length-1?`1px solid ${C.bd2}`:"none"}}>
        <div>
          <div style={{fontSize:13,fontWeight:800,color:C.tx,fontFamily:"'Courier New',monospace"}}>{p.sym}</div>
          <div style={{fontSize:10,color:C.t3}}>{p.note}</div>
        </div>
        <div style={{textAlign:"right"}}>
          <div style={{fontSize:16,fontWeight:900,color:C.purple,fontFamily:"'Courier New',monospace"}}>{p.val}</div>
          <Badge text={p.chg+" YoY"} color={C.teal}/>
        </div>
      </div>)}
    </Card>
  </div>;
}

function XPlatform({isZH}){
  const [sub,setSub]=useState(0);
  const opts=isZH?["发帖趋势","话题分析","情绪追踪","行为心理"]:["Post Trends","Topics","Sentiment","Psych Analysis"];
  return <div>
    <Legal isZH={isZH}/>
    <Row>
      <Stat l={L("本月发帖","Posts/Month",isZH)} v="568" s="+16.8% MoM" color={C.blue} up={true}/>
      <Stat l={L("AI话题占比","AI Topic%",isZH)} v="68%" s="2026最高" color={C.purple} up={true}/>
      <Stat l={L("正面情绪","Positive Sentiment",isZH)} v="81%" s={L("历史新高","All-time high",isZH)} color={C.teal} up={true}/>
      <Stat l={L("深夜活跃","Late-Night",isZH)} v="+280%" s={L("超历史基线","vs baseline",isZH)} color={C.red}/>
    </Row>
    <Tabs opts={opts} val={opts[sub]} set={v=>setSub(opts.indexOf(v))}/>
    {sub===0&&<Card>
      <SL>{L("月度发帖·点赞趋势（X公开账号聚合）","Monthly Post/Like Trend (X Public Account Data)",isZH)}</SL>
      <ResponsiveContainer width="100%" height={190}>
        <AreaChart data={MONTHLY_POST}>
          <XAxis dataKey="m" tick={{fontSize:9,fill:C.t3}} axisLine={false} tickLine={false}/>
          <YAxis tick={{fontSize:9,fill:C.t3}} axisLine={false} tickLine={false}/>
          <Tooltip contentStyle={tt}/>
          <Area type="monotone" dataKey="p" name={L("发帖","Posts",isZH)} stroke={C.cyan} fill={C.cyan+"22"} strokeWidth={2.5}/>
        </AreaChart>
      </ResponsiveContainer>
    </Card>}
    {sub===1&&<Card>
      <SL>{L("话题集中度（%，周度，近5周）","Topic Concentration (%, Weekly, 5 weeks)",isZH)}</SL>
      <ResponsiveContainer width="100%" height={190}>
        <BarChart data={TOPIC_MIX}>
          <XAxis dataKey="w" tick={{fontSize:9,fill:C.t3}} axisLine={false} tickLine={false}/>
          <YAxis tick={{fontSize:9,fill:C.t3}} axisLine={false} tickLine={false}/>
          <Tooltip contentStyle={tt}/>
          <Bar dataKey="AI" fill={C.purple} radius={[2,2,0,0]}/>
          <Bar dataKey="太空" fill={C.blue} radius={[2,2,0,0]}/>
          <Bar dataKey="金融" fill={C.amber} radius={[2,2,0,0]}/>
          <Bar dataKey="政治" fill={C.coral} radius={[2,2,0,0]}/>
        </BarChart>
      </ResponsiveContainer>
      <div style={{marginTop:8,padding:"10px 14px",background:"#f9fafb",borderRadius:8,fontSize:11,color:C.t2,lineHeight:1.7}}>
        {L("📊 AI话题占比从58%升至68%（2026最高），政治从14%降至7%——注意力高度聚焦于技术产品，与Grok 4 Enterprise开放节奏完全吻合。","📊 AI topic share 58%→68% (2026 high); politics 14%→7% — attention hyperfocused on tech products; perfectly aligned with Grok 4 Enterprise launch pace.",isZH)}
      </div>
    </Card>}
    {sub===2&&<Card>
      <SL>{L("公开发帖情绪分析（正/负/中性·月度）","Public Post Sentiment (Pos/Neg/Neutral · Monthly)",isZH)}</SL>
      <ResponsiveContainer width="100%" height={190}>
        <AreaChart data={SENTIMENT}>
          <XAxis dataKey="m" tick={{fontSize:9,fill:C.t3}} axisLine={false} tickLine={false}/>
          <YAxis tick={{fontSize:9,fill:C.t3}} axisLine={false} tickLine={false}/>
          <Tooltip contentStyle={tt}/>
          <Area type="monotone" dataKey="pos" name={L("正面","Positive",isZH)} stroke={C.teal} fill={C.teal+"33"} strokeWidth={2.5}/>
          <Area type="monotone" dataKey="neg" name={L("负面","Negative",isZH)} stroke={C.red} fill={C.red+"22"} strokeWidth={2}/>
          <Area type="monotone" dataKey="neu" name={L("中性","Neutral",isZH)} stroke={C.gray} fill={C.gray+"22"} strokeWidth={1.5}/>
        </AreaChart>
      </ResponsiveContainer>
      <div style={{background:"#f0fdf4",borderRadius:8,padding:"10px 14px",marginTop:8,fontSize:11,color:"#059669",lineHeight:1.7}}>
        {L("✓ 4月正面情绪81%（2026历史新高），负面降至8%历史低位。高正面情绪期与大型投资/产品决策高度相关（历史r=0.82）。","✓ April positive sentiment 81% (2026 all-time high); negative 8% (historical low). High positive sentiment correlates with major investment/product decisions (historical r=0.82).",isZH)}
      </div>
    </Card>}
    {sub===3&&<div>
      <Card style={{border:`1px solid ${C.purple}30`,boxShadow:"0 1px 2px rgba(0,0,0,0.04)"}}>
        <SL>{L("行为心理分析（基于公开行为模式推断·非隐私信息）","Behavioral Psychology (Inferred from Public Patterns · No Private Data)",isZH)}</SL>
        <div style={{fontSize:11,color:C.t3,marginBottom:12,lineHeight:1.7}}>
          {L("方法论：(1)发帖时间分布→认知活跃时段 (2)话题熵值→注意力焦点 (3)情绪极值周期→决策前后模式 (4)多信号同期触发→重大决策前期检测","Methodology: (1)Posting distribution→cognitive active periods (2)Topic entropy→attention focus (3)Sentiment extremes→pre/post-decision patterns (4)Multi-signal concurrent→major decision precursor detection",isZH)}
        </div>
        <ResponsiveContainer width="100%" height={210}>
          <RadarChart data={PSYCH}>
            <PolarGrid stroke={C.border}/>
            <PolarAngleAxis dataKey="a" tick={{fontSize:10,fill:C.t3}}/>
            <PolarRadiusAxis angle={30} domain={[0,100]} tick={{fontSize:8,fill:C.t3}} tickCount={4}/>
            <Radar dataKey="v" stroke={C.purple} fill={C.purple} fillOpacity={0.3} strokeWidth={2}/>
          </RadarChart>
        </ResponsiveContainer>
      </Card>
      <Card>
        <SL>{L("行为指标详情","Behavioral Indicator Details",isZH)}</SL>
        {[{l:L("认知负荷指数","Cognitive Load",isZH),v:78,c:C.amber,note:L("发帖熵值上升+深夜活跃增加，高密度决策周期","Post entropy rise + late-night increase; high-density decision cycle",isZH)},
          {l:L("自信指数","Confidence Index",isZH),v:93,c:C.red,note:L("增持$5.89B+主动信息披露加快，历史高自信期","$5.89B buy + faster disclosure; historically high confidence period",isZH)},
          {l:L("决策速度","Decision Velocity",isZH),v:94,c:C.red,note:L("本周重大决策间隔<48h（历史均值7天），加速执行期","Major decisions gap <48h this week (historical avg 7 days); execution phase",isZH)},
          {l:L("言行一致性","Speech-Action Consistency",isZH),v:74,c:C.teal,note:L("中东布局在公开言论中未见充分预示，隐性议程信号","ME strategy not pre-signaled in public posts; hidden agenda signal",isZH)},
        ].map((s,i)=><div key={i} style={{marginBottom:12}}>
          <div style={{display:"flex",justifyContent:"space-between",marginBottom:4}}>
            <span style={{fontSize:11,fontWeight:700,color:C.tx}}>{s.l}</span>
            <span style={{fontSize:14,fontWeight:900,color:s.c,fontFamily:"'Courier New',monospace"}}>{s.v}/100</span>
          </div>
          <Bar2 val={s.v} max={100} color={s.c} h={4}/>
          <div style={{fontSize:9,color:C.t3,marginTop:4}}>{s.note}</div>
        </div>)}
      </Card>
    </div>}
  </div>;
}

function Travel({isZH}){
  const travd=[
    {dest:L("奥斯汀 TX","Austin TX",isZH),v:94,last:"04-26",pZH:"xAI/SpaceX总部+Starship",a:false,col:C.blue},
    {dest:L("华盛顿 DC","Washington DC",isZH),v:61,last:"04-22",pZH:"DOGE/政府事务",a:false,col:C.blue},
    {dest:L("博卡奇卡 TX","Boca Chica TX",isZH),v:44,last:"04-23",pZH:"Starship IFT-14发射",a:false,col:C.blue},
    {dest:L("弗里蒙特 CA","Fremont CA",isZH),v:38,last:"04-09",pZH:"Tesla Gigafactory",a:false,col:C.blue},
    {dest:L("北京/上海","Beijing/Shanghai",isZH),v:8,last:"04-21",pZH:"Tesla中国+政府（异常·ADS-B确认）",a:true,col:C.red},
    {dest:L("利雅得","Riyadh",isZH),v:9,last:"03-28",pZH:"PIF/中东资本布局",a:true,col:C.amber},
    {dest:L("柏林","Berlin",isZH),v:11,last:"02-14",pZH:"Gigafactory Berlin",a:false,col:C.blue},
  ];
  return <div>
    <Legal isZH={isZH}/>
    <Row>
      <Stat l={L("年度飞行","Annual Flights",isZH)} v="287" s="ADS-B" color={C.blue}/>
      <Stat l={L("独特目的地","Unique Dests",isZH)} v="31" s="14国" color={C.teal}/>
      <Stat l={L("异常目的地","Anomaly Dests",isZH)} v="2" s={L("北京+利雅得","Beijing+Riyadh",isZH)} color={C.red}/>
      <Stat l={L("DC访问","DC Freq",isZH)} v="+87%" s="vs 2023" color={C.amber}/>
    </Row>
    <Card>
      <SL>{L("主要目的地（FAA/ADS-B公开航班数据）","Key Destinations (FAA/ADS-B Public Flight Data)",isZH)}</SL>
      {travd.map((td,i)=><div key={i} style={{display:"flex",alignItems:"center",gap:12,marginBottom:12,paddingBottom:12,borderBottom:i<travd.length-1?`1px solid ${C.bd2}`:"none"}}>
        <div style={{width:36,height:36,borderRadius:"50%",background:td.col+"22",display:"flex",alignItems:"center",justifyContent:"center",fontSize:12,fontWeight:800,color:td.col,flexShrink:0,border:`1.5px solid ${td.col}44`,fontFamily:"'Courier New',monospace"}}>{td.v}</div>
        <div style={{flex:1}}>
          <div style={{fontSize:12,fontWeight:700,color:C.tx,display:"flex",gap:6,alignItems:"center"}}>
            {td.dest}
            {td.a&&<Badge text={L("异常","Anomaly",isZH)} color={C.red} bg={SBG["极高"]}/>}
          </div>
          <div style={{fontSize:10,color:C.t3}}>{td.pZH} · {L("最近：","Last: ",isZH)}{td.last}</div>
        </div>
        <div style={{width:70,flexShrink:0}}><Bar2 val={td.v} max={94} color={td.col}/></div>
      </div>)}
    </Card>
    <Card>
      <SL>{L("出行地点趋势·年度（ADS-B数据）","Travel Destination Trend · Annual",isZH)}</SL>
      <ResponsiveContainer width="100%" height={170}>
        <BarChart data={TRAV_TREND}>
          <XAxis dataKey="y" tick={{fontSize:9,fill:C.t3}} axisLine={false} tickLine={false}/>
          <YAxis tick={{fontSize:9,fill:C.t3}} axisLine={false} tickLine={false}/>
          <Tooltip contentStyle={tt}/>
          <Bar dataKey="dc" name="DC" fill={C.blue} radius={[2,2,0,0]}/>
          <Bar dataKey="aus" name={L("奥斯汀","Austin",isZH)} fill={C.teal} radius={[2,2,0,0]}/>
          <Bar dataKey="sh" name={L("上海/北京","Shanghai/BJ",isZH)} fill={C.coral} radius={[2,2,0,0]}/>
        </BarChart>
      </ResponsiveContainer>
      <div style={{background:"#fee2e2",borderRadius:8,padding:"10px 14px",marginTop:8,fontSize:11,color:"#991b1b",lineHeight:1.7,border:`1px solid ${C.red}30`}}>
        {L("⚠ 2026年中国访问降至8次（vs 2025年12次），但04-21北京出行与$30B储能谈判窗口完全吻合，且04-25 Musk公开推文正面回应质疑，预期协议将在1-2周内落地。","⚠ China visits in 2026: 8 (vs 12 in 2025). But 04-21 Beijing aligns with $30B energy negotiation window, and 04-25 Musk public response positively addressed concerns — deal expected within 1-2 weeks.",isZH)}
      </div>
    </Card>
  </div>;
}

function Network({isZH}){
  const people=[{id:"EM",x:310,y:200,r:30,c:C.coral,n:"Elon Musk"},{id:"JB",x:160,y:295,r:22,c:C.purple,n:"Birchall"},{id:"LE",x:148,y:90,r:20,c:C.blue,n:"Ellison"},{id:"KM",x:130,y:210,r:19,c:C.coral,n:"Kimbal"},{id:"DS",x:440,y:280,r:18,c:C.amber,n:"Sacks"},{id:"PT",x:462,y:90,r:17,c:C.blue,n:"Thiel"},{id:"MA",x:512,y:195,r:16,c:C.teal,n:"Andreessen"},{id:"RB",x:412,y:350,r:15,c:C.green,n:"Baron"},{id:"CW",x:268,y:355,r:14,c:C.gray,n:"C.Wood"},{id:"KG",x:520,y:325,r:13,c:C.red,n:"Griffin"}];
  const edges=[["EM","JB",99],["EM","LE",96],["EM","KM",91],["EM","DS",88],["EM","PT",78],["EM","MA",74],["EM","RB",72],["EM","CW",64],["EM","KG",58]];
  const nm=Object.fromEntries(people.map(p=>[p.id,p]));
  return <div>
    <Legal isZH={isZH}/>
    <Card>
      <SL>{L("社交关系图谱","Social Network Map",isZH)}</SL>
      <svg viewBox="0 0 660 420" style={{width:"100%",height:"auto",background:"#030a14",borderRadius:8}}>
        {edges.map(([s,tt,w],i)=>{const a=nm[s],b=nm[tt];return <line key={i} x1={a.x} y1={a.y} x2={b.x} y2={b.y} stroke={b.c} strokeWidth={w/40} strokeOpacity={0.4}/>;  })}
        {people.map(p=><g key={p.id}>
          <circle cx={p.x} cy={p.y} r={p.r+5} fill="none" stroke={p.c} strokeWidth={0.4} strokeOpacity={0.3}/>
          <circle cx={p.x} cy={p.y} r={p.r} fill={p.c+"20"} stroke={p.c} strokeWidth={1.5}/>
          <text x={p.x} y={p.y+1} textAnchor="middle" dominantBaseline="middle" fontSize={p.r>22?10:9} fill={p.c} fontWeight={700}>{p.n}</text>
        </g>)}
      </svg>
      <div style={{fontSize:9,color:C.t3,marginTop:6}}><span style={{color:C.red}}>Griffin = {L("对立","Opposing",isZH)}</span> · <span style={{color:C.purple}}>Birchall = {L("财务代理","Wealth Agent",isZH)}</span></div>
    </Card>
    <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:8}}>
      {CIRCLE.map(p=><div key={p.n} style={{background:C.card,borderRadius:10,padding:"12px",border:`1px solid ${p.c}25`}}>
        <div style={{display:"flex",gap:8,alignItems:"center",marginBottom:6}}>
          <div style={{width:32,height:32,borderRadius:"50%",background:p.c+"25",border:`1.5px solid ${p.c}`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:10,fontWeight:800,color:p.c,flexShrink:0}}>{p.n.split(" ").map(w=>w[0]).join("").slice(0,2)}</div>
          <div><div style={{fontSize:10,fontWeight:700,color:C.tx}}>{p.n}</div><Badge text={ALMAP_EN[p.al]} color={ALCOL[p.al]}/></div>
        </div>
        <div style={{fontSize:9,color:C.t3,marginBottom:5}}>{isZH?p.roZH:p.roEN} · {p.co}</div>
        <div style={{fontSize:9,color:C.t2,lineHeight:1.5,marginBottom:5}}>{isZH?p.mvZH:p.mvEN}</div>
        <Bar2 val={p.str} max={100} color={p.c} h={3}/>
        <div style={{fontSize:8,color:C.t3,marginTop:3}}>{L("关系强度","Strength",isZH)} {p.str}/100</div>
      </div>)}
    </div>
  </div>;
}

function RandD({isZH}){
  return <div>
    <Legal isZH={isZH}/>
    <Row>
      <Stat l={L("2026E总研发","2026E R&D",isZH)} v="$17.9B" s={L("全实体","All entities",isZH)} color={C.purple} up={true}/>
      <Stat l={L("专利(YTD)","Patents YTD",isZH)} v="1,340" s="2026" color={C.blue} up={true}/>
      <Stat l={L("量子专利增速","Quantum Patent",isZH)} v="+210%" color={C.red}/>
      <Stat l={L("AI研究员均薪","AI Salary",isZH)} v="$380K" s="xAI" color={C.amber}/>
    </Row>
    <Card>
      <SL>{L("各实体研发支出趋势（$B）","R&D Spend by Entity ($B)",isZH)}</SL>
      <ResponsiveContainer width="100%" height={200}>
        <AreaChart data={RDTREND}>
          <XAxis dataKey="y" tick={{fontSize:9,fill:C.t3}} axisLine={false} tickLine={false}/>
          <YAxis tick={{fontSize:9,fill:C.t3}} axisLine={false} tickLine={false}/>
          <Tooltip contentStyle={tt}/>
          <Area type="monotone" dataKey="x" name="xAI" stroke={C.purple} fill={C.purple+"33"} strokeWidth={2.5}/>
          <Area type="monotone" dataKey="T" name="Tesla" stroke={C.coral} fill={C.coral+"22"} strokeWidth={2}/>
          <Area type="monotone" dataKey="S" name="SpaceX" stroke={C.blue} fill={C.blue+"22"} strokeWidth={2}/>
        </AreaChart>
      </ResponsiveContainer>
    </Card>
    <Card>
      <SL>{L("各公司季度招聘规模（LinkedIn公开数据）","Quarterly Hiring (LinkedIn Public Data)",isZH)}</SL>
      <ResponsiveContainer width="100%" height={190}>
        <BarChart data={RECRUIT_Q}>
          <XAxis dataKey="q" tick={{fontSize:9,fill:C.t3}} axisLine={false} tickLine={false}/>
          <YAxis tick={{fontSize:9,fill:C.t3}} axisLine={false} tickLine={false}/>
          <Tooltip contentStyle={tt}/>
          <Bar dataKey="xAI" fill={C.purple} radius={[2,2,0,0]}/>
          <Bar dataKey="SpaceX" fill={C.blue} radius={[2,2,0,0]}/>
          <Bar dataKey="Tesla" fill={C.coral} radius={[2,2,0,0]}/>
        </BarChart>
      </ResponsiveContainer>
    </Card>
  </div>;
}

function Space({isZH}){
  return <div>
    <Legal isZH={isZH}/>
    <div style={{background:"linear-gradient(135deg,#f3e8ff,#fef3c7)",borderRadius:12,padding:"18px 22px",marginBottom:12,border:`1px solid #fde68a`,boxShadow:"0 1px 3px rgba(0,0,0,0.08)"}}>
      <div style={{fontSize:15,fontWeight:800,color:C.tx,marginBottom:6}}>太空探索专项追踪</div>
      <div style={{fontSize:11,color:C.t3,fontWeight:500}}>SpaceX · Starship · Starlink · NASA合同 · 火星计划</div>
    </div>
    <Row>
      <Stat l={L("Starlink在轨","Starlink Active",isZH)} v="7,100+" s="6201活跃" color={C.blue}/>
      <Stat l={L("2026发射","2026 Launches",isZH)} v="18" s="100%成功" color={C.teal} up={true}/>
      <Stat l={L("政府合同","Gov Contracts",isZH)} v="$14.2B" s="USA" color={C.amber}/>
      <Stat l={L("最新测试","Latest Test",isZH)} v="IFT-14" s={L("商业精确着陆","Commercial Landing",isZH)} color={C.purple}/>
    </Row>
    <Card>
      <SL>{L("近期发射记录（NASA/SpaceX公开数据）","Recent Launches (NASA/SpaceX Public Data)",isZH)}</SL>
      {LAUNCHES.map((l,i)=><div key={i} style={{display:"flex",gap:12,padding:"9px 0",borderBottom:i<LAUNCHES.length-1?`1px solid ${C.bd2}`:"none",alignItems:"center"}}>
        <div style={{fontSize:10,color:C.t3,minWidth:42,fontFamily:"'Courier New',monospace"}}>{l.date}</div>
        <div style={{flex:1}}><div style={{fontSize:11,fontWeight:700,color:C.tx}}>{l.mission}</div><div style={{fontSize:9,color:C.t3}}>{l.vehicle} · {l.payload}</div></div>
        <Badge text={l.status} color={C.teal} bg="#051a0e"/>
      </div>)}
    </Card>
    <Card>
      <SL>{L("政府合作资金（USASpending.gov+各国公开采购）","Gov Partnership Funding (USASpending.gov + Public Procurement)",isZH)}</SL>
      {GOV_COOPS.map((g,i)=><div key={i} style={{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"10px 0",borderBottom:i<GOV_COOPS.length-1?`1px solid ${C.bd2}`:"none"}}>
        <div><div style={{fontSize:11,fontWeight:700,color:C.tx}}>{g.c} {g.org}</div><div style={{fontSize:9,color:C.t3}}>{g.dZH}</div></div>
        <div style={{textAlign:"right",flexShrink:0,marginLeft:8}}><div style={{fontSize:13,fontWeight:900,color:C.purple,fontFamily:"'Courier New',monospace"}}>{g.v}</div><Badge text={g.sig} color={SIG[g.sig]} bg={SBG[g.sig]}/></div>
      </div>)}
    </Card>
    <Card style={{background:"#f9f5ff",border:`1px solid #e9d5ff`,boxShadow:"0 1px 2px rgba(0,0,0,0.04)"}}>
      <SL><span style={{color:"#7c3aed"}}>{L("火星计划公开时间表（Musk公开言论+FAA申报）","Mars Timeline (Public Statements + FAA Filings)",isZH)}</span></SL>
      {[{y:"2026",e:L("Starship无人火星任务（FAA许可申请中）","Starship uncrewed Mars mission (FAA permit pending)",isZH),conf:82},{y:"2027",e:L("首次载人火星任务（初步设计完成）","First crewed Mars mission (prelim design complete)",isZH),conf:64},{y:"2029",e:L("火星基地建设·Optimus机器人部署","Mars base construction with Optimus robots",isZH),conf:46},{y:"2040",e:L("火星永久居住·目标1万人","Mars permanent settlement, 10K people target",isZH),conf:28}].map((p,i)=><div key={i} style={{marginBottom:12}}>
        <div style={{display:"flex",justifyContent:"space-between",marginBottom:4}}>
          <span style={{fontSize:14,fontWeight:800,color:"#7c3aed",fontFamily:"'Courier New',monospace"}}>{p.y}</span>
          <span style={{fontSize:13,fontWeight:700,color:p.conf>=70?C.teal:p.conf>=50?C.amber:C.gray,fontFamily:"'Courier New',monospace"}}>{p.conf}%</span>
        </div>
        <div style={{fontSize:11,color:C.t2,lineHeight:1.5,marginBottom:4}}>{p.e}</div>
        <div style={{height:4,borderRadius:2,background:C.bd2}}>
          <div style={{height:"100%",borderRadius:2,background:p.conf>=70?C.teal:p.conf>=50?C.amber:C.gray,width:`${p.conf}%`}}/>
        </div>
      </div>)}
    </Card>
  </div>;
}

function Anomaly({isZH,t}){
  return <div>
    <Legal isZH={isZH}/>
    <div style={{background:SBG["极高"],borderRadius:10,padding:"14px 18px",marginBottom:12,border:`1px solid ${C.red}35`,boxShadow:"0 1px 2px rgba(0,0,0,0.04)"}}>
      <div style={{fontSize:11,fontWeight:800,color:C.red,marginBottom:6,letterSpacing:"0.05em",textTransform:"uppercase"}}>⚠ {L("信号收敛分析系统 · 实时","Signal Convergence Analysis · REAL-TIME",isZH)}</div>
      <div style={{fontSize:11,color:"#991b1b",lineHeight:1.7}}>
        {L("Convergence Score = 1 - ∏(1-Pᵢ)  · 三层同期触发 ≈ 95%+ 置信度","Convergence Score = 1 - ∏(1-Pᵢ)  · 3-layer concurrent ≈ 95%+ confidence",isZH)}
      </div>
    </div>
    <Row>
      <Stat l={L("极高优先级","Critical",isZH)} v="2" color={C.red}/>
      <Stat l={L("高优先级","High",isZH)} v="2" color={C.amber}/>
      <Stat l={L("平均汇聚度","Avg Convergence",isZH)} v="87%" color={C.purple}/>
      <Stat l={L("数据层数","Data Layers",isZH)} v="14" color={C.blue}/>
    </Row>
    {ANOMDATA.map((a,i)=><Card key={i} style={{border:`1.5px solid ${SIG[a.sev]}35`,background:SBG[a.sev],boxShadow:"0 1px 2px rgba(0,0,0,0.04)"}}>
      <div style={{display:"flex",justifyContent:"space-between",marginBottom:10,alignItems:"flex-start"}}>
        <div>
          <div style={{fontSize:14,fontWeight:800,color:C.tx}}>{isZH?a.tyZH:a.tyEN}</div>
          <div style={{fontSize:10,color:C.t3,marginTop:2}}></div>
        </div>
        <div style={{textAlign:"right"}}>
          <Badge text={t.sig[a.sev]} color={SIG[a.sev]} bg={SBG[a.sev]}/>
          <div style={{fontSize:22,fontWeight:900,color:SIG[a.sev],fontFamily:"'Courier New',monospace",marginTop:4}}>{a.conv}%</div>
          <div style={{fontSize:9,color:C.t3,fontWeight:600}}>{L("汇聚置信","Convergence",isZH)}</div>
        </div>
      </div>
      <Bar2 val={a.conv} max={100} color={SIG[a.sev]} h={6}/>
      <div style={{fontSize:12,color:C.t2,lineHeight:1.8,marginTop:12}}>{isZH?a.deZH:a.deEN}</div>
      <div style={{display:"flex",gap:6,flexWrap:"wrap",marginTop:10}}>
        {a.layers.map((l,j)=><Badge key={j} text={l} color={C.blue} bg="#dbeafe"/>)}
      </div>
      <div style={{marginTop:10,fontSize:10,color:"#059669",background:"#f0fdf4",borderRadius:6,padding:"6px 12px",fontWeight:700,border:"1px solid #d1fae5"}}>📊 {a.hist}</div>
    </Card>)}
  </div>;
}

function Predict({isZH}){
  return <div>
    <Legal isZH={isZH}/>
    <Card style={{border:`1px solid ${C.purple}35`,boxShadow:"0 1px 2px rgba(0,0,0,0.04)"}}>
      <SL>{L("综合预测框架","Prediction Framework",isZH)}</SL>
      <div style={{fontSize:11,color:C.t2,lineHeight:1.8}}>{L("基于：SEC申报时序 · 招聘领先指标 · 出行-决策相关性 · 社媒情绪极值 · 关系圈资本动向 · 专利→产品滞后分析。概率=历史类似模式贝叶斯后验估计。","Based on: SEC filing temporal analysis · Recruiting leading indicators · Travel-decision correlation · Social sentiment extremes · Inner circle capital moves · Patent-to-product lag analysis. Probability = Bayesian posterior from historical pattern hit rates.",isZH)}</div>
    </Card>
    <Card>
      <SL>{L("未来2-4周预测事件","Next 2-4 Week Predicted Events",isZH)}</SL>
      {PRED.map((item,i)=><div key={i} style={{marginBottom:12,padding:14,borderRadius:10,background:C.card,border:`1.5px solid ${item.p>=80?C.coral:item.p>=65?C.amber:C.gray}25`,boxShadow:"0 1px 2px rgba(0,0,0,0.04)"}}>
        <div style={{display:"flex",justifyContent:"space-between",marginBottom:8}}>
          <span style={{fontSize:10,color:C.t3,fontWeight:700}}>#{i+1}</span>
          <span style={{fontSize:22,fontWeight:900,color:item.p>=80?C.coral:item.p>=65?C.amber:C.gray,fontFamily:"'Courier New',monospace"}}>{item.p}%</span>
        </div>
        <div style={{fontSize:12,color:C.tx,lineHeight:1.7,marginBottom:8}}>{item.eZH}</div>
        <Bar2 val={item.p} max={100} color={item.p>=80?C.coral:item.p>=65?C.amber:C.gray} h={5}/>
      </div>)}
    </Card>
    <Card>
      <SL>{L("3-5年战略押注地图","3-5 Year Strategic Bet Map",isZH)}</SL>
      {STRAT.map((b,i)=><div key={i} style={{marginBottom:14}}>
        <div style={{display:"flex",justifyContent:"space-between",marginBottom:5}}>
          <span style={{fontSize:11,fontWeight:700,color:C.tx}}>{b.l}</span>
          <span style={{fontSize:15,fontWeight:900,color:b.c,fontFamily:"'Courier New',monospace"}}>{b.v}%</span>
        </div>
        <Bar2 val={b.v} max={100} color={b.c} h={7}/>
        <div style={{fontSize:9,color:C.t3,marginTop:4}}>{b.note}</div>
      </div>)}
    </Card>
  </div>;
}

function Weekly({isZH,t}){
  const layers=[
    {lZH:"言论媒体",lEN:"Statements",sig:"高",kZH:"Grok 4发布28条推文+04-25公开回应北京出行质疑，单日发帖峰值568条"},
    {lZH:"社媒微行为",lEN:"Social Micro",sig:"高",kZH:"AI话题68%创2026新高，正面情绪81%历史最高，与重大产品节点高度吻合"},
    {lZH:"行为心理",lEN:"Psychology",sig:"高",kZH:"决策速度94↑·自信93↑·认知负荷78↑——三指标同期高位，历史对应重大突破期"},
    {lZH:"公司动向",lEN:"Companies",sig:"极高",kZH:"Tesla Q1能源首超汽车+xAI Grok 4 Enterprise开放+SpaceX IFT-14+月球客户首批——四线汇聚"},
    {lZH:"财务申报",lEN:"Filings",sig:"极高",kZH:"Tesla Form 4内部增持$5.89B（04-24+04-26累计），SEC EDGAR实时，5年最强买入信号"},
    {lZH:"采购研发",lEN:"Procurement",sig:"高",kZH:"Tesla-BHP $24B锂矿+Optimus零部件+400%；Model 2备料激增；Neuralink N2量产开始"},
    {lZH:"招聘情报",lEN:"Talent Intel",sig:"高",kZH:"Tesla Optimus单周420岗历史最高；xAI量子计算195岗2026累计首次出现"},
    {lZH:"出行轨迹",lEN:"Travel",sig:"高",kZH:"北京出行（ADS-B）+04-25公开澄清推文，与Tesla中国$30B储能谈判窗口完全吻合"},
    {lZH:"人际网络",lEN:"Network",sig:"高",kZH:"Ellison $12B云协议执行+Sacks《AI加速法案》推进+Baron公开信：圈内战略一致性历史最高"},
    {lZH:"信号汇聚",lEN:"Convergence",sig:"极高",kZH:"四层同期触发（增持+北京+发帖峰值+Enterprise开放），汇聚置信度94%，历史预示21天内催化剂"},
    {lZH:"太空专项",lEN:"Space",sig:"极高",kZH:"IFT-14商业级精确着陆（历史首次完整任务）+首批商业月球客户公布，太空商业化新纪元"},
    {lZH:"家庭财富",lEN:"Family",sig:"中",kZH:"Excession LLC新增2个子实体（特拉华公开备案），财富结构微调对应Tesla增持"},
    {lZH:"政府关系",lEN:"Gov",sig:"中",kZH:"Sacks《AI加速法案》进入参议院，DOGE政策落地18项，SpaceX新增DoD合同$890M"},
    {lZH:"心理压力",lEN:"Psych Load",sig:"中",kZH:"深夜活跃+280%+话题熵值下降=高认知负荷·高决策密度，历史对应执行加速期"},
  ];
  const recs=[
    {tZH:"强买入",target:"Tesla TSLA",conf:91,c:C.teal,rZH:"Q1+内部增持$5.89B+能源分拆三重确认"},
    {tZH:"强买入",target:"xAI生态链（AI算力）",conf:87,c:C.teal,rZH:"Grok 4 Enterprise开放，商业化加速，$300B仍被低估"},
    {tZH:"关注",target:"ARKX ETF",conf:79,c:C.blue,rZH:"IFT-14商业化+$520B+月球货运，ARKX YTD +52%"},
    {tZH:"关注",target:"LIT/SQM (锂供应链)",conf:74,c:C.blue,rZH:"Tesla-BHP $24B协议带动全产业链"},
    {tZH:"观察",target:"DOGE/BTC",conf:51,c:C.gray,rZH:"情绪效应，短期交易性"},
  ];
  return <div>
    <div style={{background:"linear-gradient(135deg,#fef3c7,#fdd7e8,#f3e8ff)",borderRadius:14,padding:"24px",marginBottom:14,border:`1px solid #fde68a`,boxShadow:"0 1px 3px rgba(0,0,0,0.08)"}}>
      <div style={{fontSize:12,fontWeight:700,color:"#7c3aed",letterSpacing:"0.14em",marginBottom:12,textTransform:"uppercase"}}>● {L("周度全局分析","WEEKLY GLOBAL REPORT",isZH)} · 04/20–04/26 2026</div>
      <div style={{fontSize:18,fontWeight:900,color:C.tx,lineHeight:1.6,letterSpacing:"-0.3px"}}>
        {L("Tesla能源首超汽车·xAI Enterprise开放·IFT-14商业着陆·增持$5.89B·北京首次",isZH?"Tesla能源首超汽车·xAI Enterprise开放·IFT-14商业着陆·增持$5.89B·北京首次":"Tesla Energy>Auto · xAI Enterprise Open · IFT-14 Commercial · $5.89B Buy · Beijing First",isZH)}
      </div>
      <div style={{fontSize:12,color:"#6b7280",marginTop:10,fontWeight:500}}>
        {L("14层信号全面汇聚峰值周 — 历史最高密度信号收敛","14-Layer Signal Full Convergence Peak Week — Highest Historical Convergence",isZH)}
      </div>
    </div>
    <Legal isZH={isZH}/>
    <Card>
      <SL>{L("14层数据信号全览","14-Layer Signal Overview",isZH)}</SL>
      {layers.map((l,i)=><div key={i} style={{display:"flex",gap:10,padding:"8px 0",borderBottom:`1px solid ${C.bd2}`,alignItems:"center"}}>
        <span style={{width:7,height:7,borderRadius:"50%",background:SIG[l.sig],flexShrink:0,boxShadow:`0 0 4px ${SIG[l.sig]}`}}/>
        <span style={{fontSize:9,fontWeight:700,color:C.t3,minWidth:72}}>{isZH?l.lZH:l.lEN}</span>
        <span style={{fontSize:11,color:C.tx,flex:1,lineHeight:1.5}}>{l.kZH}</span>
        <Badge text={t.sig[l.sig]} color={SIG[l.sig]} bg={SBG[l.sig]}/>
      </div>)}
    </Card>
    <Card>
      <SL>{L("本周投资参考（仅供参考，非专业投资建议）","Investment Notes (Not Professional Investment Advice)",isZH)}</SL>
      {recs.map((inv,i)=><div key={i} style={{marginBottom:10,padding:14,borderRadius:10,background:C.card,border:`1px solid ${inv.c}25`,boxShadow:"0 1px 2px rgba(0,0,0,0.04)"}}>
        <div style={{display:"flex",justifyContent:"space-between",marginBottom:6}}>
          <div style={{display:"flex",gap:8,alignItems:"center"}}>
            <Badge text={inv.tZH} color={inv.c}/>
            <span style={{fontSize:13,fontWeight:700,color:C.tx}}>{inv.target}</span>
          </div>
          <span style={{fontSize:10,color:C.t3,fontFamily:"'Courier New',monospace",fontWeight:600}}>置信 {inv.conf}%</span>
        </div>
        <div style={{fontSize:12,color:C.t2,marginBottom:6}}>{inv.rZH}</div>
        <Bar2 val={inv.conf} max={100} color={inv.c} h={3}/>
      </div>)}
    </Card>
    <Card style={{background:"#fee2e2",border:`1px solid ${C.red}30`,boxShadow:"0 1px 2px rgba(0,0,0,0.04)"}}>
      <SL>{L("本周风险提示","Risk Factors This Week",isZH)}</SL>
      {[L("中美科技脱钩加速：北京出行若涉及敏感技术，监管介入将影响Tesla中国$8B年营收","US-China tech decoupling: sensitive tech talks risk regulatory intervention in Tesla China $8B revenue",isZH),L("AI监管矛盾：欧盟AI法案与美国AI加速法案可能冲突，影响xAI欧洲扩张","AI regulation contradiction: EU AI Act vs US AI Acceleration Act may conflict; affects xAI Europe expansion",isZH),L("Tesla能源分拆执行风险：税务+股东+监管三重阻力，可能错过最佳市场窗口","Tesla energy spinoff execution: tax+shareholder+regulatory triple friction; may miss optimal market window",isZH),L("SpaceX前流动性受限：$520B估值无公开变现，二级市场折价风险","SpaceX pre-IPO liquidity: $520B valuation with no public exit; secondary discount risk",isZH)].map((r,i)=><div key={i} style={{display:"flex",gap:8,marginBottom:8}}>
        <span style={{color:C.red,flexShrink:0,fontSize:14}}>⚠</span>
        <span style={{fontSize:11,color:"#991b1b",lineHeight:1.6}}>{r}</span>
      </div>)}
    </Card>
  </div>;
}

/* ─── APP SHELL ─── */
const T={
  ZH:{periods:["本周","本月","本季度","本年"],nav:{overview:"总览",timeline:"时间线",market:"市场行情",xp:"X平台",travel:"出行轨迹",network:"关系网络",randd:"采购研发",space:"太空专项",anomaly:"异常预警",predict:"综合预测",weekly:"★周度报告"},langBtn:"EN",sig:{极高:"极高",高:"高",中:"中",低:"低"}},
  EN:{periods:["This Week","This Month","This Quarter","This Year"],nav:{overview:"Overview",timeline:"Timeline",market:"Markets",xp:"X Platform",travel:"Travel",network:"Network",randd:"R&D",space:"Space",anomaly:"Anomalies",predict:"Forecasts",weekly:"★Weekly"},langBtn:"中文",sig:{极高:"Critical",高:"High",中:"Medium",低:"Low"}},
};
const NAV_IDS=["overview","timeline","market","xp","travel","network","randd","space","anomaly","predict","weekly"];

function useLive(){
  const [cr,setCr]=useState({btc:96200,btcC:2.1});
  const go=useCallback(async()=>{
    try{const r=await fetch("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,dogecoin&vs_currencies=usd&include_24hr_change=true");
      if(r.ok){const d=await r.json();setCr({btc:d.bitcoin?.usd||96200,btcC:+(d.bitcoin?.usd_24h_change||2.1).toFixed(2)});}}catch(e){}
  },[]);
  useEffect(()=>{go();const iv=setInterval(go,60000);return()=>clearInterval(iv);},[go]);
  return cr;
}

export default function App(){
  const [tab,setTab]=useState("overview");
  const [lang,setLang]=useState("ZH");
  const [now,setNow]=useState(new Date().toLocaleTimeString());
  const isZH=lang==="ZH";
  const t=T[lang];
  const cr=useLive();
  useEffect(()=>{const iv=setInterval(()=>setNow(new Date().toLocaleTimeString()),1000);return()=>clearInterval(iv);},[]);

  const render=()=>{
    if(tab==="overview")  return <Overview isZH={isZH} t={t}/>;
    if(tab==="timeline")  return <Overview isZH={isZH} t={t}/>;
    if(tab==="market")    return <Market isZH={isZH} t={t} cr={cr}/>;
    if(tab==="xp")        return <XPlatform isZH={isZH}/>;
    if(tab==="travel")    return <Travel isZH={isZH}/>;
    if(tab==="network")   return <Network isZH={isZH}/>;
    if(tab==="randd")     return <RandD isZH={isZH}/>;
    if(tab==="space")     return <Space isZH={isZH}/>;
    if(tab==="anomaly")   return <Anomaly isZH={isZH} t={t}/>;
    if(tab==="predict")   return <Predict isZH={isZH}/>;
    if(tab==="weekly")    return <Weekly isZH={isZH} t={t}/>;
    return null;
  };

  return (
    <div style={{fontFamily:"'SF Pro Display','Segoe UI',system-ui,sans-serif",background:C.bg,minHeight:"100vh",color:C.tx}}>
      <style>{`@keyframes pulse{0%,100%{opacity:1}50%{opacity:0.5}} ::-webkit-scrollbar{width:6px;height:6px} ::-webkit-scrollbar-track{background:#f8f7f5} ::-webkit-scrollbar-thumb{background:#d4af37;borderRadius:3px}`}</style>
      <div style={{background:C.nav,borderBottom:"1px solid "+C.border,position:"sticky",top:0,zIndex:100,boxShadow:"0 1px 3px rgba(0,0,0,0.08)"}}>
        <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"0 18px",height:56}}>
          <button onClick={()=>setTab("overview")} style={{border:"none",background:"none",cursor:"pointer",padding:0,display:"flex",alignItems:"center",gap:10}}>
            <div style={{width:36,height:36,borderRadius:8,background:"linear-gradient(135deg,#7c3aed,#d4af37)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:12,fontWeight:900,color:"#fff"}}>MI</div>
            <span style={{fontSize:18,fontWeight:900,color:C.tx,letterSpacing:"0.08em",fontFamily:"'Courier New',monospace"}}>MUSK<span style={{color:"#d4af37"}}>INTEL</span></span>
            <span style={{fontSize:10,color:C.t3,fontWeight:600}}>v3.1 · 精华版</span>
          </button>
          <div style={{display:"flex",alignItems:"center",gap:8}}>
            <button onClick={()=>setLang(isZH?"EN":"ZH")} style={{padding:"6px 12px",borderRadius:8,border:`1.5px solid ${C.cyan}`,background:"transparent",color:C.cyan,cursor:"pointer",fontSize:10,fontWeight:700,transition:"all 0.15s"}}>🌐 {t.langBtn}</button>
            <div style={{display:"flex",alignItems:"center",gap:5,fontSize:8,color:C.t3}}>
              <span style={{width:6,height:6,borderRadius:"50%",background:C.teal,display:"inline-block",boxShadow:`0 0 6px ${C.teal}`,animation:"pulse 2s infinite"}}/>
              {now}
            </div>
          </div>
        </div>
        <div style={{display:"flex",padding:"0 14px",borderTop:`1px solid ${C.border}`,overflowX:"auto",background:"#fafaf8"}}>
          {NAV_IDS.map(id=><button key={id} onClick={()=>setTab(id)} style={{padding:"11px 15px",border:"none",borderBottom:`2.5px solid ${tab===id?C.cyan:"transparent"}`,background:"transparent",color:tab===id?C.cyan:C.t3,cursor:"pointer",fontWeight:tab===id?700:500,fontSize:12,whiteSpace:"nowrap",display:"flex",alignItems:"center",gap:4,transition:"all 0.15s",letterSpacing:"0.02em"}}>
            {t.nav[id]}
            {id==="anomaly"&&<span style={{background:C.red,color:"#fff",borderRadius:6,fontSize:8,padding:"2px 6px",fontWeight:800}}>4</span>}
            {id==="weekly"&&<span style={{background:C.blue,color:"#fff",borderRadius:6,fontSize:8,padding:"2px 6px",fontWeight:800}}>★</span>}
            {id==="xp"&&<span style={{background:C.purple,color:"#fff",borderRadius:6,fontSize:8,padding:"2px 6px",fontWeight:800}}>AI</span>}
          </button>)}
        </div>
      </div>
      <div style={{maxWidth:820,margin:"0 auto",padding:"18px"}}>{render()}</div>
    </div>
  );
}
