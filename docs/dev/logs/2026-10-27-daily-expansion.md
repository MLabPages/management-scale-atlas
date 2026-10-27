# v0.112.0 定時拡充（AIの脅威知覚、GAAIS の使用研究）

日付: 2026-10-27

## 追加

- 概念 `perceived-ai-threat`（AIの脅威知覚 / Perceived Threats of Artificial Intelligence）と尺度 `kieslich-tai-12`（TAI）を追加。既存の `schepman-rodway-gaais-20`（GAAIS）に `usageStudies` を1件追加した。概念135、尺度184、使用研究220、選択ガイド71、関係16。版は v0.111.0 から v0.112.0。`meta.updated` は 2026-10-27。`meta.scope` は `135概念・184尺度`
- Kieslich, K., Lünich, M., & Marcinkowski, F.（2021）。The Threats of Artificial Intelligence Scale (TAI): Development, Measurement and Test Over Three Application Domains。International Journal of Social Robotics, 13(7), 1563–1577。DOI `10.1007/s12369-020-00734-w`。Crossref で著者・題名・巻号頁が一致。オンライン 2021-01-29、印刷 2021-11。登録年は 2021。Crossref ライセンスは CC BY 4.0、Open Access（Projekt DEAL）。`sourceUrl` は DOI のみ。`versionType` は `original`。`parentScaleId` は空。`recordStatus` は `verified-metadata`。`verifiedAt` は 2026-10-27
- 定義は、特定の適用領域で AI システムが果たす機能（認識・予測・推奨・意思決定）が自分にとってどの程度脅威かという認知的評価。恐れ（fear）そのものではなくその前提となる脅威知覚であり、AI 一般への評価的態度とは区別する。分野は技術レディネスと同じ「技術受容・情報システム」
- 12項目・4次元（各3項目）。Recognition（RCG1–3）、Prediction（PDC1–3）、Recommendation（RCM1–3）、Decision-making（DSM1–3）。教示文 “If you now think of the use of AI in [specific context], how threatening do you think computer applications of artificial intelligence are that...” に続く穴埋め形式で、（object）/（action）に領域語を入れる。領域ごとに使うツールボックス型で、領域が違えば得点を比較・合算しない。5件法（1＝non-threatening～5＝very threatening）。採点は次元ごと。論文は CFA の潜在因子で分析し、二次因子として扱わないと明記する。下位尺度の項目平均などの具体的な採点規則は論文に明記がないため書かない。必要な機能次元だけ使ってよいと著者は推奨する。`reverseItems` は空。逆転項目は指定範囲にないため記録しない。前調査（N=304）で perceiving と identification を区別できなかったため Recognition に統合
- 開発標本はドイツの非代表 SoSci Open Access Panel。2019-09-30～10-14。完答917名から除外後 N=891（融資審査 296、採用 294、医療 301 に無作為割付）。女性50.0%、平均年齢約46歳（SD 15.66）。言語は German（ドイツの調査。英語の項目表記は論文に掲載）。`psychometricEvidence` は開発論文の1件。`url` は DOI のみ
- Table 2 の Cronbach α は、融資審査 RCG .896・PDC .919・RCM .913・DSM .921、採用 .865・.865・.868・.858、医療 .806・.889・.854・.870（範囲 .80–.92）。AVE .598–.798。Fornell-Larcker で弁別妥当性。測定不変性は配置・メトリック不変が支持され、スカラーは DSM3 の切片を自由にした部分スカラー不変（最終モデル χ²(174)=254.555、TLI=.988、RMSEA=.039、SRMR=.037）。厳密不変は棄却。融資審査領域で RCG2・RCG3 の Prediction への交差負荷あり。脅威知覚は恐れ（3項目、別尺度）を小さく予測（B=.186）。意思決定機能が全領域で最も脅威と知覚された。総合の単一 α は指定にないため記さない
- `usagePermission` は `unknown`。論文は CC BY 4.0 だが、尺度の利用許諾は未確認。ATAI（`sindermann-atai-5`）と同じ扱い。`itemPublicationStatus` は `source-open`。英語の項目表記は論文にあるが転載しない。`items` は空。開発論文は使用研究に入れない。`usageStudies` は空。日本語は `unconfirmed`
- `relatedConcepts` は存在する `attitudes-toward-ai`、`technology-readiness`、`perceived-usefulness`、`perceived-ease-of-use`、`perceived-enjoyment`、`social-influence`、`facilitating-conditions`。decisionGuide は TAI（12項目）の1択。選択ガイドは70から71。関係レコードは追加しない。`attitudes-toward-ai` の `relatedConcepts` に `perceived-ai-threat` を追加した。これは指定どおりの片側の追加で、`technology-readiness` など他の既存概念への逆リンクは足していない
- `attitudes-toward-ai` の caution の「短縮版 GAAIS-10・Kieslich らの TAI は別尺度で未登録」は、「短縮版 GAAIS-10 は未登録。Kieslich らの TAI は別概念 perceived-ai-threat（AIの脅威知覚）に登録済みで、GAAIS・ATAI とは合算しない」に最小限修正した。他の文言は変えていない。GAAIS と ATAI の `applicationEvidence.summary` と notes にある同じ「TAI 未登録」も、同じ文に直した。GAAIS と ATAI の `scoring` は「合算しない」であり「未登録」ではないため変えていない。ATAI の旗艦値と `verifiedAt`（2026-10-26）は変えていない
- GAAIS の使用研究は2件から3件。既存の Tuncer と Tuncer（2024）と Pakiş Çetin と Bilgin（2026）は残し、その後ろに追加した。既存エントリの中身は変えていない
- Hacıalioğlu, N., Boyraz Şeker, E., & Kaya, F.（2025）。Nurses’ attitudes towards artificial intelligence: relationship between cognitive flexibility and emotion regulation。BMC Psychology, 13, 1121。DOI `10.1186/s40359-025-03467-5`。Crossref で著者・題名・誌名が一致。2025-10-09 公開。CC BY-NC-ND 4.0。`url` は DOI のみ。`fullTextUrl` は付けない
- フル20項目（肯定12・否定8）。`language` は Turkish。Kaya ら（2024, Int J Hum Comput Interact, 10.1080/10447318.2022.2151730）のトルコ語版。トルコ・エルズルム県の二次病院の看護師377名（対象約510名、回答率73.9%）。2025年1～3月、対面で質問紙を配布・回収。女性90.5%、平均年齢33.3（SD 7.17、20–55）。87.3%が月1回以上AIを利用。倫理はアタテュルク大学医学部倫理委員会、尺度所有者の許諾取得と記載。5件法（1＝strongly disagree～5＝strongly agree）。肯定・否定の下位尺度ごとに合計得点で報告（肯定 12–60、否定 8–40）。否定項目は逆転せず否定的態度として得点化。旗艦の項目平均採点と `responseFormat` は変えない
- この標本の α は肯定 .92、否定 .87。平均 肯定 42.93（SD 9.94）、否定 22.41（SD 6.56）。肯定と否定は r=−.23。重回帰で再評価（reappraisal）は肯定的態度を正に（β=.203）、否定的態度を負に（β=−.184）予測し、認知的柔軟性は独立の寄与なし（R² 約7%・4%）。Table 2 では否定的態度と再評価の相関が 0.19（符号なし）と記載され、本文の r=−0.191 と符号が食い違う。その食い違いは result に残した。本文の .88/.83（開発者）と .82/.84（Kaya ら）は参照値であり、この標本の α にしない。第3著者 Kaya, F. はトルコ語版の筆頭著者だが、開発者（Schepman・Rodway）は著者に含まれない。開発論文・検証研究ではない。項目本文は転載しない。使用研究の `verifiedAt` は 2026-10-27
- GAAIS の尺度 `verifiedAt` は 2026-10-27。notes の使用研究は、Tuncer と Tuncer（2024）、Pakiş Çetin と Bilgin（2026）、Hacıalioğlu ら（2025）の3件、に合わせた。`scoring`、`japaneseStatusNote`、旗艦の項目平均、既存2件は変えていない
- 日本語の検証済みは26のまま。関連版は14のまま。未確認は111から112（追加した TAI が `unconfirmed`）。日本語使用例は18のまま。言語的妥当性確認は2、翻訳・因子構造等の検討は5、日本語で独自開発は6、開発論文内の日本語検証は1のまま。登録版そのものが3・4項目の尺度は29のまま（TAI は12項目）。使用研究側の3・4項目は27のまま（追加は20項目）

## 見送り

- ATAI の2件目の独立使用研究。Sindermann ら（2022）Discover Psychology は開発者チームのため除外。他の独立使用は未発見
- GWQ-12 の使用研究。新規の独立研究なし
- EmpRes。本文非公開
- AI不安尺度 AIAS（Wang & Wang 2022）。出版社本文を取得できず、今回は見送り
- 既存 HOLD は変更していない。CSR-17、Aad-3、UTAUT-SI、UTAUT-FC、P–O fit-3、RC-3、Price Consciousness 5

## 重複確認

作業開始時の tip は `be9fd2c`（v0.111.0。134概念・183尺度・219使用研究・70選択ガイド・16関係）。`origin/main` と一致。作業ツリーは clean。

`data.js` を次の DOI で検索した。`10.1007/s12369-020-00734-w`、`10.1186/s40359-025-03467-5`。追加前は未登録だった。既存 ID は概念 `attitudes-toward-ai`、`technology-readiness`、`perceived-usefulness`、`perceived-ease-of-use`、`perceived-enjoyment`、`social-influence`、`facilitating-conditions`、尺度 `schepman-rodway-gaais-20`、`sindermann-atai-5`。関係レコードは追加していない。

## 根拠として確認したこと

- 数値と書誌は指定された文言だけを使った。指定にない係数・人数・言語・アンカー・採点方法は作っていない。総合の単一 α、下位尺度の項目平均、CFI、逆転項目番号は指定にないため書いていない
- TAI の書誌、12項目、4次元、穴埋めの教示、5件法、次元ごとの採点、二次因子にしないという明記、標本、Table 2 の α、AVE、測定不変性、交差負荷、恐れの予測、意思決定機能が最も脅威であることは指定の範囲
- Hacıalioğlu らの書誌、20項目、トルコ語版、5件法の合計、否定項目を逆転しないこと、この標本の α と平均、相関、重回帰、Table 2 と本文の符号の食い違い、参照値、第3著者がトルコ語版の筆頭著者であることは指定の範囲。旗艦の項目平均は変えていない
- URL は DOI。`fullTextUrl` は付けていない。ResearchGate、第三者 PDF、PMC の URL は使っていない
- 使用研究のフィールド順は既存の Tuncer と Tuncer（2024）と同じ。`title`、`authors`、`year`、`context`、`sample`、`itemCount`、`responseFormat`、`language`、`adaptation`、`result`、`doi`、`url`、`sourceLocator`、`verifiedAt`
- ヘッダの版表示は `app.js` が `data.js` の `meta.version` を読む。スキーマは変えていないため、`app.js` と `index.html` は変更していない
- `docs/decisions.md` は変えていない。新規概念の分け方と、指定された逆リンク以外を足さない扱いは、このログと current-state に書いた

## 採否

- 項目本文は転載しない。TAI の `itemPublicationStatus` は ATAI と同じ `source-open`。論文が CC BY 4.0 で英語の項目表記を掲載していても、アトラスには転載しない
- 開発論文（Kieslich ら 2021）は `usageStudies` に入れない
- Hacıalioğlu らは GAAIS の開発者ではないので使用研究に入れる。Kaya, F. はトルコ語版の筆頭著者だが、Schepman・Rodway は著者に含まれない。本文の .88/.83 と .82/.84 はこの標本の α にしない。否定項目を逆転しない合計は adaptation。旗艦の `responseFormat` と項目平均は変えない
- TAI の日本語は未確認。GAAIS の日本語（`validated`）は変えていない
- 他の尺度・概念・relations・items・既存の usageStudies は変えていない。HOLD 中の CSR-17、Aad-3、UTAUT-SI／FC、P–O fit-3、RC-3、Price Consciousness 5 には触れていない

## 入れなかったもの

- TAI と GAAIS の項目本文
- TAI の下位尺度項目平均、総合の単一 α、CFI、逆転項目番号
- Hacıalioğlu らの `fullTextUrl`
- ATAI の2件目、GWQ-12 の新規使用、EmpRes、AIAS
- 既存 HOLD
- `app.js`、`index.html`、`styles.css`、`relations.js`、`verify-data.mjs`、`AGENTS.md`、`docs/decisions.md`。`.wrangler/` などの生成物

## 次回候補

- ATAI の、開発者チーム以外による2件目の独立使用。Sindermann ら（2022）Discover Psychology は混ぜない
- ATAI の査読済み日本語版。今回も未確認のまま
- GWQ-12 の、開発論文以外のフル12項目の独立使用
- EmpRes は本文が確認できるまで HOLD
- AIAS（Wang & Wang 2022）は出版社本文が取れるまで見送り
- GAAIS-10 は未登録のまま。GAAIS-J の19項目を原版20項目と混ぜないこと
- 引き続き HOLD の CSR-17、Aad-3、UTAUT-SI／FC、P–O fit-3、RC-3、Price Consciousness 5

## 検証

`node --check data.js`、`node verify-data.mjs`、`node verify-data.mjs --self-test`、`git diff --check` は通過した。`package.json` はリポジトリにない。検証スクリプトはリポジトリルートの `verify-data.mjs`。

`verify-data.mjs` の件数は、概念135、尺度184、使用研究220、選択ガイド71、関係16。登録版そのものが3・4項目は29。個別使用研究で3・4項目版を確認済みは27。日本語は検証済み26、言語的妥当性確認2、日本語使用例18、翻訳・因子構造等の検討5、関連版14、日本語で独自開発6、開発論文内の日本語検証1、未確認112。v0.111.0 からの想定（概念135、尺度184、使用研究220、選択ガイド71、関係16、検証済み26、関連版14、未確認112、日本語使用例18、登録3・4項目29、使用研究側3・4項目27）と一致した。

ローカルの `index.html` をヘッドレス Chrome で開いた確認では、ヘッダは `v0.112.0 実データ版`、件数は `135概念・184尺度・個別使用研究220件`、フッタは `v0.112.0`。コンソールエラーはなかった。概念一覧の「脅威知覚」は1概念（AIの脅威知覚）。判断ガイドは TAI の1択で、穴埋め、二次因子として合算しない、GAAIS・ATAI とは合算しない、と出る。関連概念に AIに対する一般的態度 と 技術レディネス が出る。概念一覧の「一般的態度」は1概念のまま。その詳細の関連概念に AIの脅威知覚 が出る。caution は、短縮版 GAAIS-10 は未登録、TAI は `perceived-ai-threat` に登録済み、と書く。TAI の詳細は12項目、5件法（1＝non-threatening～5＝very threatening）、利用条件未確認、日本語は未確認、使用先行研究は未登録、最終確認日 2026-10-27。原文リンクは DOI `10.1007/s12369-020-00734-w`。`itemPublicationStatus` が `source-open` のため項目欄は「原著で公開」で、項目本文の列挙はない。`items` は空。GAAIS の詳細は使用先行研究3件、旗艦の項目平均、最終確認日 2026-10-27。DOI の順は Tuncer ら `10.1177/20552076241277025`、Pakiş Çetin ら `10.1186/s12909-026-08905-5`、Hacıalioğlu ら `10.1186/s40359-025-03467-5`。3件目に平均 42.93 と、Table 2 の 0.19（符号なし）が本文の r=−0.191 と食い違う旨が出る。旗艦の回答形式は変えていない。空の検索語「存在しない尺度zzzz」は該当なし。キーワード「GAAIS」は3件（GAAIS、ATAI、TAI。TAI の notes が GAAIS に触れるため）。研究設計に TAI と GAAIS を入れると合計32項目（12+20）。検索結果の出力に TAI（使用0、DOI `10.1007/s12369-020-00734-w`）と GAAIS（使用3、3件の題名）が出る。幅390pxでは詳細ダイアログは `position: fixed`、幅352px、左19px、ページの横溢れなし。
