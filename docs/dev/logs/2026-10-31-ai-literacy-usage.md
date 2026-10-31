# v0.117.0 定時拡充（AIリテラシー、AIAS-4 と AIAS-21 の使用研究）

日付: 2026-10-31

## 追加

- 概念 `ai-literacy`（AIリテラシー）と尺度 `carolus-mails-34`（MAILS）を追加した
- `grassini-aias-4` の `usageStudies` を1件追加した（4件から5件）
- `wang-wang-aias-21` の `usageStudies` を1件追加した（1件から2件）
- 概念139、尺度189、使用研究227、選択ガイド75、関係16。版は v0.116.0 から v0.117.0。`meta.updated` は 2026-10-31。`meta.scope` は `139概念・189尺度`
- 開発論文は `usageStudies` に入れていない
- `attitudes-toward-ai` の `relatedConcepts` と caution に、MAILS は別概念で合算しない旨を足した。旗艦の項目数、回答形式、信頼性、利用条件、`verifiedAt` は変えていない。`technology-readiness` への逆リンクは足していない

## 本文から確認した値

### MAILS

- Crossref。著者 Astrid Carolus、Martin J. Koch、Samantha Straka、Marc Erich Latoschik、Carolin Wienrich。Computers in Human Behavior: Artificial Humans, 1(2), 100014。DOI `10.1016/j.chbah.2023.100014`。印刷の date-parts は 2023-08。vor は CC BY-NC-ND 4.0
- 出版版 PDF を開いた。Available online 5 October 2023。Received 30 May 2023、revised 11 September 2023、accepted 16 September 2023
- 34項目。二次因子 AI literacy は18項目。Use & apply AI 6（α = 0.93）、Know & understand AI 6（α = 0.87）、Detect AI 3（α = 0.77）、AI Ethics 3。Create AI 4（α = 0.92）は AI literacy に載らない。問題解決3（α = 0.84）と学習3（α = 0.84）は AI Self-efficacy。説得リテラシー3（α = 0.66）と感情調節3（α = 0.71）は AI Self-competency
- AI Ethics の α は、出版版6ページの行末が「Cronbach’s α」で、次の行が「= 75」。小数点のない 75 は α として読めない。0.75 には補わない。本文は、説得リテラシー以外は α > .7 と書く
- 11件法（0–10）。0は能力がほとんど、またはまったくない。10は非常によく、またはほぼ完全に備わっている。中間のラベルはない
- 修正後の CFA は χ²(513) = 886.87、p < 0.001、CFI = 0.926、RMSEA = 0.057（95% CI [0.051, 0.063]）、SRMR = 0.079
- 標本はドイツ語を第一言語とする成人300名。2022-11-03〜04。SoSci Survey。Prolific。平均年齢 32.13（SD 11.66、18–72）。ドイツ在住 77.00%、オーストリア 7.00%。女性145名（48.33%）、男性152名（50.67%）、diverse 3名（1.00%）
- 合計か平均かの採点規則は本文にない。尺度の利用許諾の明記はない。論文は CC BY-NC-ND 4.0
- 付録の項目は英語。実施言語の明記はない。ドイツ語実施とは断定しない
- Crossref は erratum（DOI `10.1016/j.chbah.2026.100353`）をこの DOI に紐づける。題名は倫理承認とインフォームドコンセントの訂正。erratum の本文は未取得。項目数と α は 2023 年の出版版から採った
- 項目本文は転載していない

### AIAS-4 の使用研究

- Crossref。著者 Neslihan Arslan、Özge Mengi Çelik、Ümmügülsüm Güler、Emine Merve Ekici。BMC Public Health, 26, 2730。DOI `10.1186/s12889-026-28997-4`。2026-08-13。CC BY-NC-ND 4.0
- 出版社ページの本文を開いた。トルコ・アンカラの成人 N=1,350（女性1,036、男性314、18–65歳、年齢の中央値 21.00、IQR 7.00）。2025年8月〜2026年4月。スノーボール。Google Forms。倫理は 2025/357
- Arslan ら（2025）のトルコ語版。4項目・単一因子。10件法（1 = Not at all、10 = Completely Agree）。4項目の平均（1–10）
- 本標本の α = 0.890。本文の 0.90 は original study の参照値
- 中央値 7.00（IQR 2.75）。MEDAS と rho = −0.057（p = 0.037）。生態フットプリント意識と rho = 0.091（p < 0.001）。炭素フットプリント意識と rho = 0.058（p = 0.032）。重回帰の B = 1.151（p < 0.001）。R² = 0.310
- 開発者 Grassini は著者に含まれない。筆頭著者はトルコ語版検証の筆頭著者。この論文は検証研究ではない

### AIAS-21 の使用研究

- Crossref。著者 Claudia Russo、Luciano Romano、Davide Clemente、Leonardo Iacovone、Thomas Edward Gladwin、Angelo Panno。Frontiers in Psychology, 16, 1559457。DOI `10.3389/fpsyg.2025.1559457`。2025-05-06。CC BY 4.0
- 出版社ページの本文を開いた。便宜抽出のオンライン調査。成人 N=335（18–79歳、M 29.96、SD 13.88。女性175名 52.2%、男性160名 47.8%。イタリア国籍 98.2%）。倫理は Università Europea di Roma（prot. n. 01/2025）
- 21項目。バックトランスレーションでイタリア語。7件法（1＝completely disagree～7＝completely agree）
- 本標本の α と ω は 0.94。Table 2 は M 3.78、SD 1.18、範囲 1.00–7.00
- 肯定的な AI 態度と r = −.43、AI の利用と r = −.35、AI の知識と r = −.38（いずれも p < .01）
- 女性 M 4.00（SD 1.13）、男性 M 3.52（SD 1.19）、F(1, 332) = 14.34、p < .001、η²p = 0.04
- 本文は合計か平均かを明記していない。範囲は 1–7 で、原典の合計点の規準とは一致しない。平均採点とは断定しない
- 4次元ごとの α は報告していない。項目を削ったとは書いていない
- 開発者 Wang・Wang は著者に含まれない。開発論文・検証研究ではない
- 同じ論文の GAAIS は肯定12項目だけで、Schepman & Rodway（2023）を引用している。GAAIS の使用研究には入れていない

## 見送り

- AILS（Wang, B., Rau, P.-L. P., & Yuan, T., 2023）。Behaviour & Information Technology, 42(9), 1324–1337。DOI `10.1080/0144929X.2022.2072768`。Crossref の書誌は一致（オンライン 2022-05-10、印刷 2023-07-04）。出版社本文は取得できず、項目数・次元・回答形式・α・標本・利用条件を本文と表で確認していない。ResearchGate と第三者 PDF は使っていない
- SNAIL は引き続き HOLD。本文は開いていない
- MAILS の短縮版（Koch ら 2024, Heliyon）。著者ページに題名がある。本文は未確認のため登録しない
- AIAS-4 のトルコ語版検証。Satici ら（2025、DOI `10.1186/s40359-025-02505-6`）は題名が適応と構成概念妥当性で、Grassini が共著者。Köse ら（DOI `10.1007/s12144-025-07418-6`）と Balıkçı ら（DOI `10.30900/kafkasegt.1509077`）は題名が妥当性・信頼性。使用研究にしない。係数は転記していない
- Güler を筆頭とする別の 2026 年論文は特定できなかった。Ümmügülsüm Güler は Arslan ら（2026）の第3著者
- AIAS-21 のドイツ語版（PLOS One、DOI `10.1371/journal.pone.0333073`）は題名が翻訳と検証。使用研究にしない。係数は転記していない
- Wu, Ni, He, & Wee（2026、DOI `10.3389/fpsyg.2026.1884382`）は、既存の使用研究の Wee が共著者。今回の1件にはしていない。係数は転記していない
- 既存 HOLD（CSR-17、Aad-3、UTAUT-SI／FC、P–O fit-3、RC-3 usage、Price Consciousness 5、ATAI 日本語版 Hitsuwari & Takano 2025、テクノストレス Ragu-Nathan 2008、EmpRes、AISES、K-AAAW）は変更していない

## 採否

- 項目本文は転載しない。MAILS の `itemPublicationStatus` は `not-published`。`items` は空
- 第三者サイトの URL は使っていない。`sourceUrl` と使用研究の `url` は DOI
- 値を創作していない。AI Ethics の α、MAILS の採点式、MAILS の実施言語、Russo らの合計か平均かは空欄か「未確認」
- `app.js`、`index.html`、`.wrangler/` は変えていない

## 検証

`node --check data.js`、`node verify-data.mjs`、`node verify-data.mjs --self-test`、`git diff --check` は通過した。

`verify-data.mjs` の件数は、概念139、尺度189、使用研究227、選択ガイド75、関係16。登録版そのものが3・4項目は30。個別使用研究で3・4項目版を確認済みは28。日本語は検証済み26、言語的妥当性確認2、日本語使用例18、翻訳・因子構造等の検討5、関連版14、日本語で独自開発6、開発論文内の日本語検証1、未確認117。想定と一致した。`data.js` に `researchgate.net` はない。

ローカルの `index.html` をヘッドレス Chrome で開いた確認では、ヘッダは `v0.117.0 実データ版`、件数は `139概念・189尺度・個別使用研究227件`、フッタは `v0.117.0`。コンソールエラーはなかった。キーワード「MAILS」は1件。カードは34項目、利用条件未確認、使用先行研究の表示はない。詳細は最終確認日 2026-10-31、11件法（0–10）、AI Ethics の印刷「= 75」、原文リンクは DOI `10.1016/j.chbah.2023.100014`。項目本文（I can operate など）は出ない。キーワード「AIAS-4」のカードは使用先行研究5件。詳細の旗艦は10件法（1＝Not at all～10＝Completely Agree）のまま。リンクに DOI `10.1186/s12889-026-28997-4` がある。キーワード「AIAS-21」の詳細は使用先行研究2件。リンクは DOI `10.1038/s41598-026-59141-2` と `10.3389/fpsyg.2025.1559457`。項目欄は「掲載していません」。空の検索語「存在しない尺度zzzz」は該当なし。概念一覧の「AIリテラシー」は判断ガイドに34項目と、合算しない旨が出る。関連概念に AIに対する一般的態度 と 技術レディネス が出る。技術レディネスの詳細には AIリテラシー は出ない。一般的態度の詳細には出る。研究設計に MAILS と AIAS-21 を入れると合計55項目。再読み込み後も2件のまま。検索結果の JSON に MAILS と DOI が出て、ResearchGate の URL はない。幅390pxでは詳細ダイアログは `position: fixed`、幅352px、左19px、ページの横溢れなし。概念カードは幅358px、左16px、横溢れなし。
