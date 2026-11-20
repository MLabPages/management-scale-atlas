# 2026-11-20 失敗から学ぶ風土、JCS・PES の使用研究

- セマンティック版は v0.138.0。概念163、尺度216、使用研究256、選択ガイド99、関係16。`app.js`、`items.js`、`index.html`、CSS、`verify-data.mjs` は変えていない。項目本文は載せていない。
- 新規は、失敗から学ぶ風土。DOI `10.3389/fpsyg.2022.911311`。Crossref は 2022-08-08、Frontiers in Psychology、13巻、911311、CC BY 4.0。著者は Michelle Chin Chin Lee、Su Woan Wo。原典の略称は LMCS。17項目・単一次元。専門家パネルで23項目→CFA（N=554）で因子負荷 .40 未満の6項目（原典番号 6, 10, 16, 19, 20, 21）を削除して17項目1因子。5件法（1＝strongly disagree～5＝strongly agree）。逆転項目の記載なし。合計か平均かは本文に明記なし。最終モデル（誤差共分散5組を許容）χ²/df=3.764、CFI=.926、GFI=.911、AGFI=.880、RMSEA=.071、SRMR=.0466、標準化負荷 .460–.750。係数α=.921、McDonald ω=.922。再検査は10–14日後 n=468。マレーシアのホワイトカラー従業員554名。実施言語は本文に明記なし。項目本文は転載していない。
- JCS の使用研究は Miser（2026）。DOI `10.3389/fpsyg.2026.1792640`。Crossref は 2026-05-11、Frontiers in Psychology、17巻、1792640、CC BY 4.0。トルコの ICT 専門職、回答403名・分析314名。Tims ら（2012）の4次元21項目、Akın ら（2014）のトルコ語適応版。Table 3 で全体 α=.820。媒介仮説は支持されなかった。開発者は著者に含まれない。
- PES の使用研究は同じ Miser（2026）。12項目・4次元。本文は autonomy と書く。旗艦の Self-determination には寄せない。Table 3 で全体 α=.878。媒介仮説は支持されなかった。開発者は著者に含まれない。
- 見送り。MAILS の Arranz-García ほか 2026、NLWLS、CS-12 日本語、ATAI 5件法版・日本語版、WILS・SMMS・WPS・MV-12・BWS の独立使用など、指定の HOLD は変更していない。
- 確認は `node --check data.js`、`node verify-data.mjs`、`git diff --check`。
