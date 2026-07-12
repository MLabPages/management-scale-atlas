// すべて画面検証用サンプル。尺度項目本文は収録しない。
const ATLAS_DATA={
  meta:{version:"0.1.0",status:"prototype",updated:"2026-07-12"},
  concepts:[
    ["brand-experience","ブランド経験","Brand Experience","ブランドに関する刺激によって生じる感覚・感情・認知・行動上の反応。","ブランド・消費者経験",["brand-attachment","customer-experience"]],
    ["brand-attachment","ブランド愛着","Brand Attachment","消費者とブランドを結ぶ情緒的な結びつき。","ブランド・消費者経験",["brand-experience","brand-loyalty"]],
    ["brand-loyalty","ブランド・ロイヤルティ","Brand Loyalty","ブランドを選好し継続的に選択しようとする傾向。","ブランド・消費者経験",["brand-attachment","trust"]],
    ["customer-experience","顧客経験","Customer Experience","顧客接点を通じた認知・感情・感覚・行動・社会的反応。","ブランド・消費者経験",["brand-experience","flow"]],
    ["sense-of-agency","主体感","Sense of Agency","自分が行為とその結果を生み出しているという感覚。","身体性・没入・主体感",["presence","flow"]],
    ["presence","プレゼンス","Presence","媒介された環境に実際に存在しているように感じる状態。","身体性・没入・主体感",["sense-of-agency","flow"]],
    ["flow","フロー","Flow","活動に深く集中し、行為と意識が一体化した経験。","身体性・没入・主体感",["presence","customer-experience"]],
    ["ai-self-efficacy","AI自己効力感","AI Self-Efficacy","AIを理解し活用して課題を遂行できるという自己認知。","AI・自己効力感・就業能力",["ai-literacy","employability"]],
    ["ai-literacy","AIリテラシー","AI Literacy","AIを理解・評価し、適切に利用するための知識と能力。","AI・自己効力感・就業能力",["ai-self-efficacy","trust"]],
    ["employability","就業能力","Employability","就業を獲得・維持し、変化へ適応するための資源や能力。","AI・自己効力感・就業能力",["ai-self-efficacy","ai-literacy"]]
  ].map(x=>({id:x[0],nameJa:x[1],nameEn:x[2],definitionJa:x[3],domain:x[4],relatedConcepts:x[5],parentConcepts:[],childConcepts:[],typicalAntecedents:[],typicalOutcomes:[],references:[],sample:true})),
  scales:[
    ["bx-original","Brand Experience Scale","BXS","brand-experience",2009,12,["感覚","感情","行動","知的"],"7件法","一般消費者","none","unknown","original"],
    ["bx-short","Short Brand Experience Scale","S-BXS","brand-experience",2015,6,["経験"],"7件法","一般消費者","research-use","unknown","short"],
    ["ba-scale","Brand Attachment Scale","BAS","brand-attachment",2010,10,["結びつき","顕著性"],"11件法","ブランド利用者","none","permission-required","original"],
    ["ba-short","Brief Brand Attachment Measure","B-BAM","brand-attachment",2016,4,["愛着"],"7件法","一般消費者","translated","unknown","short"],
    ["loyalty-att","Attitudinal Brand Loyalty Scale","ABLS","brand-loyalty",2001,8,["選好","コミットメント"],"7件法","既存顧客","validated","research-use","original"],
    ["loyalty-brief","Brief Loyalty Intentions Scale","BLIS","brand-loyalty",2005,3,["再購買","推奨"],"7件法","既存顧客","translated","unknown","short"],
    ["cx-multi","Customer Experience Quality Scale","EXQ","customer-experience",2012,19,["商品経験","成果重視","真実の瞬間","安心"],"7件法","サービス顧客","none","unknown","original"],
    ["cx-brief","Brief Customer Experience Scale","B-CXS","customer-experience",2018,8,["認知","感情"],"5件法","サービス顧客","validated","open","short"],
    ["agency-general","General Sense of Agency Scale","SoAS","sense-of-agency",2017,13,["肯定的主体感","否定的主体感"],"5件法","成人","validated","research-use","original"],
    ["agency-brief","Brief Sense of Agency Scale","B-SoAS","sense-of-agency",2020,5,["主体感"],"5件法","成人","translated","unknown","short"],
    ["presence-itc","ITC Sense of Presence Inventory","ITC-SOPI","presence",2001,44,["空間的存在","関与","自然さ","悪影響"],"5件法","メディア利用者","translated","research-use","original"],
    ["presence-brief","Brief Presence Measure","BPM","presence",2004,6,["空間的存在"],"7件法","VR利用者","none","unknown","short"],
    ["flow-state","Flow State Scale","FSS","flow",1996,36,["9下位次元"],"5件法","活動参加者","validated","research-use","original"],
    ["flow-short","Short Flow Scale","SFS","flow",2002,9,["フロー"],"5件法","活動参加者","validated","research-use","short"],
    ["ai-se-general","AI Self-Efficacy Scale","AISES","ai-self-efficacy",2023,12,["学習","応用","評価"],"7件法","大学生","none","unknown","original"],
    ["ai-se-brief","Brief AI Self-Efficacy Scale","B-AISES","ai-self-efficacy",2024,5,["AI自己効力感"],"5件法","大学生・就業者","translated","unknown","short"],
    ["ai-lit-multi","Multidimensional AI Literacy Scale","MAILS","ai-literacy",2023,34,["利用","理解","検知","倫理"],"6件法","成人","translated","research-use","original"],
    ["ai-lit-brief","Brief AI Literacy Scale","BAILS","ai-literacy",2024,8,["機能","倫理"],"5件法","大学生","none","unknown","short"],
    ["employability-grad","Graduate Employability Scale","GES","employability",2014,24,["人的資本","社会資本","適応性"],"5件法","大学生","translated","research-use","original"],
    ["employability-brief","Brief Self-Perceived Employability Scale","B-SPE","employability",2015,5,["内部","外部"],"5件法","大学生・就業者","validated","unknown","short"]
  ].map((x,i)=>({id:x[0],name:x[1],abbreviation:x[2],conceptId:x[3],authors:["サンプル著者"],year:x[4],sourceTitle:"画面検証用のサンプル文献情報",journal:"Sample Journal",doi:"",itemCount:x[5],dimensions:x[6],responseFormat:x[7],reverseItems:[],scoring:"原典を確認",targetPopulation:x[8].split("・"),language:"English",versionType:x[11],parentScaleId:null,japaneseVersionStatus:x[9],validationStudies:[],usagePermission:x[10],itemPublicationStatus:"not-published",items:[],notes:"試作データ。実在情報として引用しないでください。",sample:true}))
};
