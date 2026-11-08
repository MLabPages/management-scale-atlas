# v0.125.0 定時拡充（ワーク・ファミリー・エンリッチメントの日本語版、FSSB-SF の使用研究）

日付: 2026-11-08

## 追加

- 概念 `work-family-enrichment`（ワーク・ファミリー・エンリッチメント）と尺度 `hara-wfes-j-18`（ワーク・ファミリー・エンリッチメント尺度日本語版）を追加した
- `hammer-fssb-sf-4` の `usageStudies` を1件追加した（1件から2件）
- 概念146、尺度198、使用研究240、選択ガイド82、関係16。版は v0.124.0 から v0.125.0。`meta.updated` は 2026-11-08。`meta.scope` は `146概念・198尺度`
- 想定は、新概念と日本語版で概念146・尺度198、日本語の検証済みは27から28、使用研究を1件足して240、選択ガイド82。英語旗艦は HOLD なので、尺度は日本語版の別レコード1件。実績はこの想定と一致した
- 開発論文と検証論文は `usageStudies` に入れていない
- 既存概念への逆リンクは足していない。関係レコードは追加していない

## 本文から確認した値

### 英語の WFES は HOLD

- Crossref。著者 Dawn S. Carlson、K. Michele Kacmar、Julie Holliday Wayne、Joseph G. Grzywacz。Journal of Vocational Behavior, 68(1), 131–164。DOI `10.1016/j.jvb.2005.02.002`。issued は 2006-02。ライセンスは Elsevier の tdm
- ScienceDirect は 403。Unpaywall、OpenAlex、Semantic Scholar は OA 全文なし。出版社ページか公式 OA（著者手稿）の本文・表は開いていない
- Academia.edu と ResearchGate は使っていない
- 原（2018）が引用する原著の N＝243、全体 α＝.92、CFI＝.95、RMSEA＝.06 は、英語版の値にしていない
- 二次資料だけで項目数、件法、α、標本、利用条件は埋めていない

### 概念

- 定義は、一方の役割の経験が他方の役割の生活の質を向上させる程度（Greenhaus & Powell, 2006）
- Crossref。著者 Jeffrey H. Greenhaus、Gary N. Powell。Academy of Management Review, 31(1), 72–92。DOI `10.5465/amr.2006.19379625`。issued は 2006-01。ライセンス欄は空。AMR の本文は未開封
- 原（2018）の引用文は「一方の役割の経験により他方の役割の生活の質を向上させる」で、「程度」がない。指定の定義と原の引用文は、どちらにも寄せない
- ワーク・ファミリー・コンフリクト、ポジティブ・スピルオーバー、ファシリテーションとは別。得点は合算しない
- `relatedConcepts` は存在する `work-family-conflict` と `family-supportive-supervisor-behaviors` のみ。ポジティブ・スピルオーバーとファシリテーションは未登録なので入れていない

### 日本語版 WFES

- 2026-11-08 に J-STAGE の PDF を開いた。論文ページは https://www.jstage.jst.go.jp/article/jaiop/31/2/31_139/_article/-char/ja 。PDF は https://www.jstage.jst.go.jp/article/jaiop/31/2/31_139/_pdf
- doi.org の `10.32222/jaiop.31.2_139` は J-STAGE に解決する。Crossref API は 404。`doi` は空。`sourceUrl` は論文ページ
- 題名は「ワーク・ファミリー・エンリッチメントの日本語版尺度の作成と心理プロセスの検討」。英語題は Development of the Japanese Version of Work-Family Enrichment Scale and Examination of its Psychological Process
- 著者は原 健之。ヘッダの所属は白百合女子大学大学院。英語表記は HARA Takeyuki (Shirayuri University)。一方に寄せない
- 産業・組織心理学研究, 31(2), 139–154。受稿 2017-04-12、受理 2018-01-14。登録年は刊行年 2018
- Carlson ら（2006）の WFES。第一著者 Carlson から日本語版の作成許可（日本時間 2016-05-31 11時56分06秒）。翻訳、バイリンガルの確認、翻訳会社のバックトランスレーション、原文との照合
- 18項目・6因子、各3。仕事から家庭への発達・感情・資本、家庭から仕事への発達・感情・効率
- 5件法（1＝全くあてはまらない～5＝全くそのとおりである）
- 研究1。東京都の保育園4園。配布1,244、分析277（男性103、女性170、性別不明4）。平均年齢37.03（N＝270、SD＝5.07、レンジ22–53）。有効回答率22.27%。2016年9月。年齢の N は277と一致しない
- 最尤法の確認的因子分析。CFI＝.97、RMSEA＝.059（90% CI [.047, .070]）。因子間相関は本文が .29−.78 と書く
- 下位の α は .85、.89、.93、.90、.89、.91。本文の範囲 .85−.93 はこの6つと一致する。表1注の18項目全体は研究1が .93
- 方法節は Cronback と印刷する。Cronbach には直さない
- 採点（合計か平均か）の明示は、研究1の方法節にない
- `versionType` は `translated`。`parentScaleId` は空。英語原版が未登録なので親子リンクはしない
- `usagePermission` は `unknown`。許可は日本語版の作成であり、第三者の無条件利用ではない
- `itemPublicationStatus` は `not-published`。`items` は空。表1の項目は転載していない
- `japaneseVersionStatus` は `validated`。検証論文は使用研究に入れない
- 研究2は同じ論文の心理プロセス。2016年10月。保育園8園。配布808、回答344。分析はフルタイム共働きの男性96、女性170。合計は266。有効回答率32.92%は 266/808 と一致し、344/808 ではない。使用研究にしない。研究2の係数は研究1の下位 α に混ぜない
- `verifiedAt` は 2026-11-08

### FSSB-SF の使用研究

- Crossref。著者 Xiao Zhao、Tian Zhang、Myeongcheol Choi、Jingyi Xu。Frontiers in Psychology, 15, 1339899。DOI `10.3389/fpsyg.2024.1339899`。公開 2024-06-21。VOR は CC BY 4.0
- 題名は Are different generations of female employees trapped by work-family conflicts? A study on the impact of family-supportive supervisor behavior on thriving at work
- Hammer ら（2013）の4項目短縮版。各次元から代表1項目。引用文献の DOI は `10.1037/a0032612`。誌名の綴りは J Occutional と印刷されている
- 5件法（1＝strongly disagree～5＝strongly agree）は、用いた尺度すべてに共通。旗艦と同じ
- 全標本 N=279 の α=0.827。post-70s は 0.853（N=93）、post-80s は 0.849（N=96）、post-90s は 0.809（N=90）。全標本の CR は 0.802、AVE は 0.504
- 配布450、完全349（77.6%）。世代比較のため各群から100を無作為に選び、有効279。349は完全回答で、αの全標本は279
- 年齢は 23–53 と書き、post-90s を 24–33、post-80s を 34–43、post-70s を 44–53 とも書く。下限は一致しない。どちらにも寄せない
- 平均 3.545（SD 0.736）は 1–5 の範囲。4項目合計の 4–20 とは一致しない。平均採点とは断定しない
- 実施言語を中国語と明記した文は、FSSB の節にない。全尺度に double translation。Chinese context と書くのはワーク・ファミリー・バランスの節
- 例示項目が1つある。4項目すべての文言照合には使わない。項目本文は転載していない
- 倫理は Gachon University の Institutional Review Board。書面の同意
- 開発者は著者に含まれない。開発論文・検証研究ではない
- `url` は DOI のみ。`verifiedAt` は 2026-11-08
- 旗艦の5件法、項目数、`usagePermission`、日本語は変えていない。心理測定根拠と Escribano の `verifiedAt` は 2026-11-07 のまま。尺度の `verifiedAt` は 2026-11-08

## 見送り

- 英語の Carlson ら（2006）WFES。本文・表が開かない
- Kacmar ら（2014）の短縮6項目
- Wayne ら（2004）の4項目 facilitation
- 改訂日本語版、短縮日本語版
- Komlenac, Stockinger, & Hochleitner（2022）。International Journal of Environmental Research and Public Health, 19(9), 5769。DOI `10.3390/ijerph19095769`。公開 2022-05-09。CC BY 4.0。FSSB-SF の4項目、5件法、平均。抽出した Table 2 は全体の α=0.89、女性 0.89、男性 0.88、N=133 と読める。品質上の却下ではない。今回の使用研究は Zhao の1件にした
- FSSB-14、Luo ら（2022）、Yang ら（2023）、Li と Liu（2023）、Kawasumi らの日本語14項目、DUBS の Li ら（2024）、EWWS の Fatemi ら（2024）、および前回までの HOLD は変更していない
- B の薄い尺度（WCS、EmpRes の追加、QQS-9、KH-12、CS-12）は、今回は本文を開いていない。前回までの HOLD のまま

## 採否

- 項目本文は転載しない。WFES-J の `items` は空。`itemPublicationStatus` は `not-published`。FSSB-SF の `itemPublicationStatus` は `not-published` のまま
- `usagePermission` は WFES-J が `unknown`。FSSB-SF は `unknown` のまま。新しい列挙値は作らない
- 第三者サイトの URL は `data.js` に入れていない。WFES-J の `sourceUrl` は J-STAGE の論文ページ。使用研究の `url` は DOI
- 値を創作していない。英語版の項目数・件法・α、採点式、Zhao の実施言語、研究1の年齢 N と分析 N の差は、本文のまま残している
- `app.js`、`index.html`、`.wrangler/` は変えていない

## 検証

`node --check data.js`、`node verify-data.mjs`、`node verify-data.mjs --self-test` は通過した。`verify-data.mjs` の件数は、概念146、尺度198、使用研究240、選択ガイド82、関係16。登録版そのものが3・4項目は32。個別使用研究で3・4項目版を確認済みは29。日本語は検証済み28、言語的妥当性確認2、日本語使用例18、翻訳・因子構造等の検討5、関連版14、日本語で独自開発6、開発論文内の日本語検証1、未確認124。追加分の URL に `researchgate.net` はない。`git diff --check` は指摘なし。

ローカルの `index.html` をヘッドレス Chrome で開いた確認では、ヘッダは `v0.125.0 実データ版`、件数は `146概念・198尺度・個別使用研究240件`、フッタは `v0.125.0`。コンソールエラーはなかった。キーワード「WFES」の詳細は、最終確認日 2026-11-08、18項目、検証済み日本語版、項目本文は「掲載していません」。表1の項目文は出ない。キーワード「FSSB」は1件。詳細は最終確認日 2026-11-08、使用先行研究は2件、Zhao ほかの 0.827。キーワード「存在しない尺度zzzz」は該当なし。研究設計に WFES-J と FSSB-SF を入れると合計22項目、選択は2件。再読み込み後も選択は2件のまま。検索結果の JSON 出力は `0.125.0` を含む。CSV 出力は WFES-J-18 と「ワーク・ファミリー・エンリッチメント」を含む。幅390pxでは詳細ダイアログは幅352px、左19px、概念カードは幅358px、左16px、ページの横溢れなし。幅1280pxでは詳細ダイアログは幅720px、左280px、横溢れなし。
