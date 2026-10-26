# v0.111.0 定時拡充（ATAI と GAAIS の使用研究）

日付: 2026-10-26

## 追加

- 新概念・新尺度は作っていない。既存の `sindermann-atai-5`（ATAI）と `schepman-rodway-gaais-20`（GAAIS）に `usageStudies` を1件ずつ追加した。概念134、尺度183、使用研究219、選択ガイド70、関係16。版は v0.110.0 から v0.111.0。`meta.updated` は 2026-10-26。`meta.scope` は `134概念・183尺度` のまま
- ATAI の使用研究は0件から1件。Laupichler, M. C., Aster, A., Meyerheim, M., Raupach, T., & Mergen, M.（2024）。Medical students' AI literacy and attitudes towards AI: a cross-sectional two-center study using pre-validated assessment instruments。BMC Medical Education, 24, 401。DOI `10.1186/s12909-024-05400-7`。2024-04-10 公開。CC BY 4.0。PMC11007897 は URL にしない。`url` は DOI のみ。`fullTextUrl` は付けない
- 検証済みドイツ語版 ATAI の全5項目。`language` は German。ドイツ2医学部（ボン大学・ザールラント大学）の医学生。2023年10〜12月のオンライン調査。完答444件から除外後 N=377（MS1 142名、MS2 235名）。7件法（SNAIL に合わせて原版の11件法から変更）。項目はランダム順に提示。11件法から7件法への変更は adaptation。旗艦の `responseFormat`（11件法）と項目割当（受容は項目02, 04、恐れは項目01, 03, 05）は変えない。本文は Sindermann らの2因子解（受容・恐れ）を採用したと記載する一方、受容3項目・恐れ2項目と書いており、原版と一致しない。その不一致は adaptation に残した
- この標本の α は MS1 で受容 .53［.35, .67］・恐れ .61［.48, .71］、MS2 で受容 .60［.48, .69］・恐れ .64［.56, .72］。ポリコリック相関による2因子 CFA は MS1 CFI 1.000・TLI 1.012・RMSEA <.001・SRMR .027、MS2 CFI 1.000・TLI 1.016・RMSEA <.001・SRMR .008、因子間相関 −0.83。全体平均は受容 4.24（SD 0.93）、恐れ 3.41（SD 1.02）。受容は SNAIL 合計と τ=.29。開発者（Sindermann ら）は著者に含まれない。開発論文・検証研究ではない。項目本文は転載しない。使用研究の `verifiedAt` は 2026-10-26
- ATAI の尺度 `verifiedAt` は 2026-10-26。notes の「usageStudies は空」は「使用研究は Laupichler ら（2024）の1件」に最小限だけ直した。notes 末尾の `verifiedAt` の日付も尺度の確認日に合わせた。`japaneseVersionStatus` は `unconfirmed` のまま。`japaneseStatusNote`、`usageEvidence`、`scoring`、`responseFormat`、`dimensions`、`psychometricEvidence`、`applicationEvidence` は変えていない
- GAAIS の使用研究は1件から2件。既存の Tuncer と Tuncer（2024）は残し、その後ろに追加した。既存エントリの中身は変えていない
- Pakiş Çetin, S., & Bilgin, N.（2026）。Factors associated with job finding anxiety among senior health sciences students: the role of attitudes toward artificial intelligence。BMC Medical Education, 26, 562。DOI `10.1186/s12909-026-08905-5`。2026-02-28 公開。CC BY 4.0。PMC13059450 は URL にしない。`url` は DOI のみ。`fullTextUrl` は付けない
- フル20項目（肯定12・否定8）。`language` は Turkish。Kaya ら（2024, Int J Hum Comput Interact, 10.1080/10447318.2022.2151730）のトルコ語版。トルコの1大学（Manisa Celal Bayar University）保健科学部の最終学年学生326名（母集団478名）。看護123・助産94・理学療法リハビリ62・社会福祉47。2024年11月22日〜12月20日、対面の質問紙調査。女性85.9%、平均年齢 22.08（SD 1.28）。尺度使用は検証研究の著者からメールで許諾。5件法。下位尺度（肯定 PATAI・否定 NATAI）ごとに項目平均で報告。旗艦の項目平均採点と `responseFormat` は変えない
- この標本の α は肯定（PATAI）.90、否定（NATAI）.87。平均は PATAI 3.55（SD 0.64）、NATAI 3.05（SD 0.76）。PATAI・NATAI とも就職不安尺度（JFAS）と有意な相関なし（r=.031、−.037）。重回帰（調整済み R²=.169）では、インターネット技術利用・学科・医療での AI 利用の知識が就職不安と関連。本文の Kaya らの .82/.84 は参照値であり、この標本の α にしない。開発者（Schepman・Rodway）は著者に含まれない。開発論文・検証研究ではない。項目本文は転載しない。使用研究の `verifiedAt` は 2026-10-26
- GAAIS の尺度 `verifiedAt` は 2026-10-26。notes の「使用研究は Tuncer と Tuncer（2024）の1件」は、Tuncer と Tuncer（2024）と Pakiş Çetin と Bilgin（2026）の2件、に合わせた。`scoring`、`japaneseStatusNote`、`usageEvidence`、既存の Tuncer エントリは変えていない
- 日本語の検証済みは26のまま。関連版は14のまま。未確認は111のまま。日本語使用例は18のまま。登録版そのものが3・4項目の尺度は29のまま。使用研究側の3・4項目は27のまま（追加は5項目と20項目）

## 見送り

- ATAI 候補の Caffaratti（2025）。α が単一値のみで、採点が不明のため今回は見送り
- GAAIS の改変・短縮・中国語版の使用研究。Szopiński（2026）、Liu（2026）、Dai（2026）、Özenir（2026）、Békés（2026）。検証研究も使用研究にしない
- CS-12 の日本語。12項目版の検証・使用は見つからず HOLD
- GWQ-12 と EmpRes は今回未着手
- 既存 HOLD は変更していない。CSR-17、Aad-3、UTAUT-SI、UTAUT-FC、P–O fit-3、RC-3、Price Consciousness 5

## 重複確認

作業開始時の tip は `36f68f1`（v0.110.0。134概念・183尺度・217使用研究・70選択ガイド・16関係）。`origin/main` と一致。作業ツリーは clean。

`data.js` を次の DOI で検索した。`10.1186/s12909-024-05400-7`、`10.1186/s12909-026-08905-5`。追加前は未登録だった。既存 ID は `sindermann-atai-5` と `schepman-rodway-gaais-20`。逆リンクは足していない。関係レコードは追加していない。

## 根拠として確認したこと

- 数値と書誌は指定された文言だけを使った。指定にない係数・人数・言語・アンカー・採点方法は作っていない
- Laupichler らの書誌、5項目、ドイツ語版、7件法への変更、項目割当の不一致、この標本の α と信頼区間、CFA、平均、SNAIL との τ、開発者が著者に含まれないことは指定の範囲。旗艦の11件法と項目割当は変えていない
- Pakiş Çetin らの書誌、20項目、トルコ語版、5件法、項目平均、この標本の α、平均、JFAS との相関、重回帰、参照値 .82/.84、メール許諾は指定の範囲。旗艦の項目平均は変えていない
- URL は DOI。`fullTextUrl` は付けていない。ResearchGate、第三者 PDF、PMC の URL は使っていない
- フィールド順は既存の Tuncer と Tuncer（2024）と同じ。`title`、`authors`、`year`、`context`、`sample`、`itemCount`、`responseFormat`、`language`、`adaptation`、`result`、`doi`、`url`、`sourceLocator`、`verifiedAt`
- ヘッダの版表示は `app.js` が `data.js` の `meta.version` を読む。スキーマは変えていないため、`app.js` と `index.html` は変更していない

## 採否

- 項目本文は転載しない
- Laupichler らは ATAI の開発者ではないので使用研究に入れる。7件法への変更と、本文の項目数（受容3・恐れ2）が原版（受容2・恐れ3）と一致しない点は adaptation。旗艦の `responseFormat` と `dimensions` は変えない
- Pakiş Çetin らは GAAIS の開発者ではないので使用研究に入れる。Kaya らの .82/.84 はこの標本の α にしない
- ATAI の日本語は未確認のまま。OSF の登録と J-ATTARI-12 は変えていない
- 他の尺度・概念・relations・items・既存の usageStudies は変えていない

## 入れなかったもの

- ATAI と GAAIS の項目本文
- Laupichler らと Pakiş Çetin らの `fullTextUrl`。PMC の URL
- Caffaratti（2025）、Szopiński（2026）、Liu（2026）、Dai（2026）、Özenir（2026）、Békés（2026）
- CS-12 の日本語、GWQ-12、EmpRes
- 既存 HOLD
- `app.js`、`index.html`、`styles.css`、`relations.js`、`verify-data.mjs`、`AGENTS.md`、`docs/decisions.md`。`.wrangler/` などの生成物

## 次回候補

- ATAI の査読済み日本語版。今回も未確認のまま
- ATAI の Caffaratti（2025）は、α が単一値のみで採点が分かるまで見送り
- GAAIS の、原版20項目と同一と確認できる独立使用。改変・短縮・中国語版（Szopiński 2026、Liu 2026、Dai 2026、Özenir 2026、Békés 2026）と検証研究は混ぜない
- GAAIS-J の19項目を原版20項目と混ぜないこと
- CS-12 の12項目日本語版。今回は検証・使用が見つからず HOLD
- GWQ-12 と EmpRes
- 引き続き HOLD の CSR-17、Aad-3、UTAUT-SI／FC、P–O fit-3、RC-3、Price Consciousness 5

## 検証

`node --check data.js`、`node verify-data.mjs`、`node verify-data.mjs --self-test`、`git diff --check` は通過した。`package.json` はリポジトリにない。検証スクリプトはリポジトリルートの `verify-data.mjs`。

`verify-data.mjs` の件数は、概念134、尺度183、使用研究219、選択ガイド70、関係16。登録版そのものが3・4項目は29。個別使用研究で3・4項目版を確認済みは27。日本語は検証済み26、言語的妥当性確認2、日本語使用例18、翻訳・因子構造等の検討5、関連版14、日本語で独自開発6、開発論文内の日本語検証1、未確認111。v0.110.0 からの想定（概念134、尺度183、使用研究219、選択ガイド70、関係16、検証済み26、関連版14、未確認111、日本語使用例18、登録3・4項目29、使用研究側3・4項目27）と一致した。

ローカルの `index.html` をヘッドレス Chrome で開いた確認では、ヘッダは `v0.111.0 実データ版`、件数は `134概念・183尺度・個別使用研究219件`、フッタは `v0.111.0`。コンソールエラーはなかった。キーワード「ATAI」は2件（GAAIS と ATAI）。ATAI の詳細は5項目、旗艦の11件法、利用条件未確認、日本語は未確認、使用先行研究1件、最終確認日 2026-10-26。Laupichler らのリンクは DOI `10.1186/s12909-024-05400-7`。この使用研究の回答は7件法。項目欄に項目本文の列挙はない。GAAIS の詳細は使用先行研究2件、旗艦の項目平均、最終確認日 2026-10-26。Tuncer らの DOI が先、Pakiş Çetin らの DOI `10.1186/s12909-026-08905-5` が後。Neg3 の英語項目本文は出ない。空の検索語「存在しない尺度zzzz」は該当なし。概念一覧の「一般的態度」は1概念。研究設計に ATAI と GAAIS を入れると合計25項目。採用根拠に Laupichler らの使用研究が出る。幅390pxでは詳細ダイアログは `position: fixed`、幅352px、左19px、ページの横溢れなし。
