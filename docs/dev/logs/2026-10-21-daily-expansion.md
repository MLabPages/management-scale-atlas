# v0.104.0 定時拡充（職場いじめ、CS-12 と KSS-7 の使用研究）

日付: 2026-10-21

## 追加

- 概念 `workplace-bullying`（職場いじめ / Workplace bullying）と尺度 `einarsen-naq-r-22`（NAQ-R）を追加。Einarsen, S., Hoel, H., & Notelaers, G.（2009）。Measuring exposure to bullying and harassment at work: Validity, factor structure and psychometric properties of the Negative Acts Questionnaire-Revised。Work & Stress, 23(1), 24–44。DOI `10.1080/02678370902815673`。Taylor & Francis（Routledge）の有料論文（CC ではない）。`sourceUrl` は DOI のみ
- 版元本文（VOR）は未開封。確認は出版社の抄録（Crossref/Ingenta）と二次資料。`versionType` は `original`。`parentScaleId` は空。`recordStatus` は `verified-metadata`。`language` は English（英国標本）。`verifiedAt` は 2026-10-21
- 定義は、職場で一人または複数の者から、長期間にわたり持続的・反復的に否定的行為を受け、自分を守ることが難しい状況（Tsuno ら 2010 の NAQ-R 定義文の要旨）。職場インシビリティ、虐待的監督、職場排斥とは区別する
- 22項目。抄録では3因子（personal bullying、work-related bullying、physically intimidating bullying）だが単一因子としても使える。英国の異質な就業者標本 5,288名の再分析。単一項目の被害自認と高相関。潜在クラス分析で曝露の程度の群を区別する。下位の項目数は Einarsen ら（2009）の分類として二次資料で person-related 12、work-related 7、physically intimidating 3。根拠は Notelaers, Van der Heijden, Hoel, & Einarsen（2019）Work & Stress, 33(1), 58–75、DOI `10.1080/02678373.2018.1457736`（CC BY 4.0）p.60 と、Tsuno ら（2010）Table 2 の (w)/(p)/(i) 注記（w=7、p=12、i=3 で一致）
- 回答形式は過去6か月の頻度の5件法（1＝Never、2＝Now and then、3＝Monthly、4＝Weekly、5＝Daily）。根拠は Tsuno ら（2010）Measurements 節。原典 VOR では未確認である旨を notes に書いた。項目は行動記述で「いじめ」「ハラスメント」の語を含まない（Tsuno ら 2010、UiB）。定義提示後の被害自認の単一項目は尺度の項目数に含めない。項目本文は転載しない
- 開発論文の標本αは VOR 未開封のため記さない。二次資料の .90 は原典表で未確認のため採用しない（KH-12 と同じ扱い）。`psychometricEvidence` は抄録で確認できた事項の1件（N=5,288、3因子／単一因子、基準関連妥当性）
- `usagePermission` は `permission-required`。Bergen Bullying Research Group（UiB）公式ページ https://www.uib.no/en/rg/bbrg/44045/naq （2026-10-21 確認）は、非営利研究は無償だが、利用には連絡（研究計画と所属の提出）、NAQ データの提供、研究目的（非営利）に限ること、1許可1プロジェクト、翻訳を提供することを条件とする。要点は `usagePermissionNote` に書いた
- `itemPublicationStatus` は `not-published`。原典 VOR は未開封で、原典での項目掲載は未確認。Tsuno ら（2010）が Table 2 に英語22項目、Appendix に日本語版を掲載しているが、画面の「原著で公開」は `sourceUrl`（有料の原典 DOI）を開くため、`source-open` にしない。`items` は空
- `usageStudies` は空。開発論文は使用研究に入れない。日本語は `validated`。Tsuno, K., Kawakami, N., Inoue, A., & Abe, K.（2010）。Journal of Occupational Health, 52(4), 216–226。DOI `10.1539/joh.L10036`（J-STAGE 公開 2010-06-21、Free access。CC ではない）。関東の地方自治体7職場の公務員。配布4,072、回収2,194（46.7%）、欠損除外後1,626名（男830・女796）。英語版を著者が平易な日本語へ翻訳し、産業保健スタッフ9名が確認し、逆翻訳を Bergen Bullying Research Group に送って項目#17を修正。22項目・5件法の頻度。α は男性 0.95、女性 0.91（Table 1）。EFA は3因子だが原典と構造が異なる（第1因子が分散の44.8%）。CFA は全モデルで不十分（CFI 0.84–0.87、RMSEA 0.087–0.096）で、著者は1因子構造がよりよく当てはまると述べる。LIPT、被害自認、心理的苦痛（K6）、葛藤、支援、相互作用的公正と予想どおり相関。Table 1 の得点範囲「23–115」は22項目と合わないため採用しない。検証論文は使用研究に入れない。`japaneseEvidence` は1件（kind は `psychometric-validation`）
- `relatedConcepts` は存在する `workplace-incivility`、`abusive-supervision`、`workplace-ostracism`、`burnout`。2026-10-07 の判断どおり、既存概念への逆リンクは足さない。`typicalAntecedents` と `typicalOutcomes` は空。decisionGuide は NAQ-R の1択。S-NAQ、旧 NAQ、LIPT、Takaki らの12項目、Tsuno の日本語版は別レコードにしない旨を caution に書いた。選択ガイドは66から67。関係レコードは追加しない
- 既存 `dobrow-calling-12` に `usageStudies` を1件追加。それまで空。Ma, G., Wang, L., Sun, S., & Lu, L.（2025）。Frontiers in Psychology, 16, 1415426。DOI `10.3389/fpsyg.2025.1415426`（2025-03-20、CC BY 4.0、PMC11965595）。フル12項目（3.3.4 節。CFA の4因子モデル df=854 は 9+12+12+10 項目と整合）。中国の広東・浙江・北京の11社、2波（2か月間隔）、有効337名。Brislin（1980）に沿った翻訳・逆翻訳の中国語。全尺度共通の5件法 Likert（1＝strongly disagree～5＝strongly agree）。原版7件法からの変更は adaptation。旗艦の responseFormat は変えない。この標本の Cronbach's α=0.959。開発者は著者に入っていない。同論文の IL-9 などは登録しない。notes の「usageStudies は空」は件数に合わせて直した。旗艦の項目数・α・利用条件・日本語状態は変えていない
- 既存 `lee-knowledge-sharing-7` に `usageStudies` を1件追加。それまで空。Wang, Y., Liu, J., & Zhu, Y.（2018）。Frontiers in Psychology, 9, 1727。DOI `10.3389/fpsyg.2018.01727`（2018-09-19、CC BY 4.0、PMC6156152）。Lee（2001）の7項目尺度を使用（Measures は seven-item scale）。中国広東省のソフトウェア企業50社、3時点（3か月間隔）、チームリーダー106名・メンバー328名。知識共有は第2時点にメンバーが回答。翻訳・逆翻訳。全尺度共通の5件法 Likert（1＝disagree strongly～5＝agree strongly）。例示項目は組織成員間の共有に言い換えており、原典の IS アウトソーシング（service provider）文脈からの adaptation。この標本の Cronbach's α=0.78（全体7項目の単一α）。旗艦の下位α（Explicit .901、Implicit .758）と「原典には全体αなし」は変えていない。同論文の EH-9・TPS-7 は登録しない。notes の「使用研究は空」は件数に合わせて直した
- 概念131、尺度179、使用研究207、選択ガイド67、関係16。版は v0.103.0 から v0.104.0。日本語の検証済みは24から25。関連版は14のまま。未確認は109のまま。日本語使用例は17のまま。登録3・4項目は29のまま。使用研究側の3・4項目は27のまま

## 見送り

- S-NAQ（Notelaers ら 2019、9項目）。α の記載がなく、回答件数の記述が曖昧なため今回は登録しない
- KSS-7 の SAGE Open Nursing 2024（DOI `10.1177/23779608241306999`）。α が引用値のため入れない
- Frontiers 2022 の心理資本×知識共有。Lee 尺度ではない10項目のため入れない
- 旧 NAQ（Einarsen & Raknes 1997）、LIPT、Takaki ら（2009）の12項目版。Tsuno ら（2010）の日本語版は別レコードにしない
- Ma ら（2025）の IL-9 など、Wang ら（2018）の EH-9・TPS-7 は今回の usage にしない
- 既存 HOLD は変更していない。CSR-17、Aad-3、UTAUT-SI／FC、P–O fit-3、RC-3、Price Consciousness 5、Brand Affect 3／OBE-4 の日本語、Mitchell–Ambrose 5、CX18 の第2使用、Brand Hate-18 の使用、Frontiers 2020 の JIS、LEB-10 の Khan、Voice-6 の Chen、PSI-18、PCQ-24 の Su & Hahn、KSS-7 の Al-Rjoub、LAWS の Ayase／Nagano、Kantur & Iseri-Say、BAT-12 の Izdebski／Pederson、Galanis 後続、EmpRes・SPOQ・FoMO・WLB、DUBS、Matsuo WORK 2024

## 重複確認

作業開始時の tip は `0ca20d3`（v0.103.0、PR #57。130概念・178尺度・205使用研究・66選択ガイド・16関係）。`origin/main` と一致。作業ツリーは clean。

`data.js` を次の文字列で検索した。`10.1080/02678370902815673`、`10.1539/joh.L10036`、`10.3389/fpsyg.2025.1415426`、`10.3389/fpsyg.2018.01727`、`workplace-bullying`、`einarsen-naq-r-22`、`NAQ-R`。追加対象は未登録だった。

既存 ID は、概念 `workplace-incivility`、`abusive-supervision`、`workplace-ostracism`、`burnout`、尺度 `dobrow-calling-12`、尺度 `lee-knowledge-sharing-7` を確認して使った。逆リンクは足していない。

## 根拠として確認したこと

- 数値は 2026-10-21 の作業指示に書かれた値だけを使った。指示にない係数・人数・言語・アンカーは作っていない
- NAQ-R の書誌、22項目、3因子／単一因子、N=5,288、被害自認との高相関、潜在クラス分析、下位項目数の二次資料、回答形式の出典、利用条件、項目非転載、開発論文と日本語検証を使用研究にしないことは指示の範囲
- 開発標本の α は記さない。二次資料の .90 は採用しない
- 回答形式は Tsuno ら（2010）Measurements 節。原典 VOR では未確認
- Ma らの5件法は adaptation。旗艦の7件法は変えない。α=0.959 はこの使用研究の値
- Wang らの α=0.78 は全体7項目のこの標本の値であり、旗艦の下位αに置き換えない。旗艦の「原典には全体αなし」は残す
- URL は DOI と、利用条件の根拠である UiB 公式ページ。第三者 PDF サイトの URL は保存しない。`sourceUrl` は DOI のみ
- ヘッダの版表示は `app.js` が `data.js` の `meta.version` を読む。`index.html` に版の固定文字列はなかったため、`index.html` は変更していない

## 採否

- 項目本文は転載しない。NAQ-R の `itemPublicationStatus` は `not-published`。原典 VOR が未開封で、`source-open` の画面は原典 DOI を「原著で公開」として開く。Tsuno ら（2010）の Table 2 と Appendix は二次資料の掲載であり、原著の公開にはしない。迷ったときの保守的な値でもある。`items` は空
- 開発論文（Einarsen ら 2009）と日本語検証（Tsuno ら 2010）は `usageStudies` に入れない
- `psychometricEvidence` は抄録の1件。日本語の係数は `japaneseEvidence` に置く。使用研究が空の尺度で測定根拠を複数に分けると、カード要約が「複数環境・日本語での検証根拠あり」になる。`japaneseVersionStatus` が `validated` のときは、その要約は既存の表示規則で出る
- 選択ガイドは新概念内だけで1件増える。既存概念への逆リンクは足さない。関係レコードは追加しない
- 中国の CS-12 使用と KSS-7 使用は、日本語の `usage-example` にしない
- CS-12 と KSS-7 の旗艦の項目数、回答形式、信頼性、利用条件、日本語状態は変えない
- S-NAQ、旧 NAQ、LIPT、Takaki らの12項目は別レコードにしない

## 入れなかったもの

- NAQ-R、CS-12、KSS-7 の項目本文
- NAQ-R の開発標本α。二次資料の .90。Table 1 の得点範囲「23–115」
- 原典 VOR を開いたこととしての頁番号、因子負荷、適合度
- Tsuno らの日本語版を別尺度にすること。Tsuno らを使用研究にすること
- Ma ら（2025）の IL-9 など。Wang ら（2018）の EH-9・TPS-7
- S-NAQ。SAGE Open Nursing 2024。Frontiers 2022 の10項目知識共有。旧 NAQ、LIPT、Takaki らの12項目
- 既存 HOLD。CSR-17、Aad-3、UTAUT-SI／FC、P–O fit-3 の usage、RC-3 の usage、Price Consciousness 5、Brand Affect 3・OBE-4 の日本語、CX Scale 18 の第2 usage、Mitchell–Ambrose 5、Brand Hate-18 の usage、PSI-18、Frontiers 2020 の JIS、LEB-10 の Khan、Voice-6 の Chen、LAWS の Ayase／Nagano、Kantur & Iseri-Say（2015）、BAT-12 の Izdebski ら（2023）と Pederson & Slowiak（2026）、Galanis チームの後続、EmpRes、SPOQ、FoMO、WLB、DUBS、Matsuo WORK 2024、PCQ-24 の Su & Hahn、KSS-7 の Al-Rjoub
- `app.js`、`index.html`、`styles.css`、`relations.js`、`verify-data.mjs`、`AGENTS.md`。`.wrangler/` などの生成物。`HANDOFF.md`、`docs/decisions.md`（判断の新設なし）

## 次回候補

- NAQ-R の独立した使用研究（フル22項目、その標本の α）
- S-NAQ の原典確認（α と回答件数）
- CS-12 の日本語12項目版
- QQS-9 の、Galanis チーム以外の独立した使用研究
- PLB-22 の Li 2020
- ACAP-14 と DC-14 の使用研究の厚み
- 引き続き HOLD の CSR-17、Aad-3、UTAUT-SI／FC、P–O fit-3、RC-3、Price Consciousness 5、Brand Affect 3／OBE-4 の日本語、Mitchell–Ambrose 5、CX Scale 18 の第2使用、Brand Hate-18 の使用、Frontiers 2020 の JIS、LEB-10 の Khan、Voice-6 の Chen、PSI-18、LAWS の Ayase／Nagano

## 検証

`node --check data.js`、`node --check app.js`、`node verify-data.mjs`、`node verify-data.mjs --self-test`、`git diff --check` は通過した。

`verify-data.mjs` の件数は、概念131、尺度179、使用研究207、選択ガイド67、関係16。登録版そのものが3・4項目は29。個別使用研究で3・4項目版を確認済みは27。日本語は検証済み25、言語的妥当性確認2、日本語使用例17、翻訳・因子構造等の検討5、関連版14、日本語で独自開発6、開発論文内の日本語検証1、未確認109。v0.103.0 からの想定（概念131、尺度179、使用研究207、選択ガイド67、関係16、検証済み25、関連版14、未確認109、日本語使用例17、登録3・4項目29、使用研究側3・4項目27）と一致した。他の日本語区分も不変だった。

ローカルの `index.html` をブラウザで開いた確認では、ヘッダは `v0.104.0 実データ版`、件数は `131概念・179尺度・個別使用研究207件`、フッタは `v0.104.0`。キーワード「職場いじめ」で NAQ-R が1件出る。詳細は22項目、過去6か月の5件法頻度、申請が必要、日本語は検証済み、使用研究は未登録、項目本文は「掲載していません」。キーワード「NAQ-R」でも1件。CS-12 の詳細は旗艦の7件法のまま、Ma ら（α=0.959、有効337名）が出る。KSS-7 の詳細に Wang ら（α=0.78）が出て、下位α .901／.758 と「原典には全体αなし」も残る。比較に NAQ-R・CS-12・KSS-7 を入れると合計41項目。概念一覧の「職場いじめ」は1概念。設計アシスタントの概念検索に職場いじめが出る。幅390pxでも NAQ-R のカードが出る（カード幅358px、左16px）。

`data.js` を読み込んだ確認では、`meta.version` は `0.104.0`、`meta.updated` は `2026-10-21`、`meta.scope` は `131概念・179尺度`。`einarsen-naq-r-22` は `itemPublicationStatus` が `not-published`、`items` は空、`usageStudies` は空、`psychometricEvidence` は1件、`japaneseVersionStatus` は `validated`、`usagePermission` は `permission-required`、`language` は English（英国標本）、`parentScaleId` は空、`verifiedAt` は `2026-10-21`。`workplace-bullying` への逆リンクはない。`dobrow-calling-12` の旗艦は7件法・12項目・`research-use`・`unconfirmed`・`source-open`・`verifiedAt` `2026-10-20` のまま、usage は DOI `10.3389/fpsyg.2025.1415426` の1件。`lee-knowledge-sharing-7` の旗艦は5件法・7項目・`unknown`・`validated`・`not-published`・`verifiedAt` `2026-10-15` のまま、usage は DOI `10.3389/fpsyg.2018.01727` の1件。
