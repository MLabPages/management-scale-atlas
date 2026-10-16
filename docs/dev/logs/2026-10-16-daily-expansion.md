# v0.98.0 定時拡充（BAT-23、TPS-7 と PLB-22 の使用研究）

日付: 2026-10-16

## 追加

- 新概念は作らない。既存概念 `burnout` に尺度 `schaufeli-bat-23`（BAT-23）を1件追加。Schaufeli, W. B., Desart, S., & De Witte, H.（2020）。International Journal of Environmental Research and Public Health, 17(24), 9495。DOI `10.3390/ijerph17249495`。オンライン公開 2020-12-18。CC BY 4.0。`sourceUrl` は DOI のみ
- 23項目・4次元（疲弊8、心的距離5、認知的障害5、情緒的障害5）。5件法の頻度（1＝never～5＝always）。全項目が症状方向で、逆転項目は確認されない。二次因子モデルを採用。総得点と4下位尺度を使える。臨床カットオフは本論文では確立されていない。フランドルの就業者 N=1,500 を折半（EFA n=750 / CFA n=750）。α は疲弊 .92、心的距離 .91、認知的障害 .92、情緒的障害 .90、BAT-C 合計 .95。BAT-S .90（心理的 .81、心身症的 .85）
- 二次症状 BAT-S（心理的愁訴5・心身症的愁訴5。合計33項目）は別尺度にしない。抑うつ気分は含まれず、4DSQ の抑うつ下位尺度の併用が推奨される
- `usagePermission` は `open`。公式サイト https://burnoutassessmenttool.be/en/ の「無償・許諾不要・改変不可・引用必須」に最も近い既存列挙値。`research-use` は学術無料・商業は事前許諾なので使わない。`itemPublicationStatus` は `not-published`。`items` は空。`japaneseVersionStatus` は `validated`。`versionType` は `original`。`recordStatus` は `verified-metadata`。`psychometricEvidence` は開発論文の1件。`usageStudies` は空
- 日本語は同じレコード。Sakakibara, Shimazu, Toyama, & Schaufeli（2020）。Frontiers in Psychology, 11, 1819。DOI `10.3389/fpsyg.2020.01819`（2020-08-11、CC BY 4.0）。BAT-JC 23項目。N=982、再検査485名（招待498）。α は BAT-JC .96。検証論文は使用研究に入れない。原典と日本語版で下位尺度の項目番号の並びが異なるため、項目番号では対応づけない
- `burnout` に decisionGuide がなかったため、MBI-GS と BAT-23 を比べるガイドを新設。選択ガイドは63から64
- 既存 `edmondson-tps-7` に `usageStudies` を1件追加。Wang, Chen, & Zhu（2021）。Frontiers in Psychology, 11, 598090。DOI `10.3389/fpsyg.2020.598090`（2021-01-12、CC BY 4.0）。フル7項目。中国南部、リーダー81名・部下342名の3時点。中国語。5件法への変更は adaptation。旗艦の7件法は変えない。α=.78
- 既存 `zhang-plb-22` に `usageStudies` を1件追加。それまで空。Stynen & Semeijn（2023）。Frontiers in Psychology, 14, 1148822。DOI `10.3389/fpsyg.2023.1148822`（2023-11-24、CC BY 4.0）。フル22項目。オランダの11組織、両時点完答 N=287。5件法の同意尺度への変更は adaptation。旗艦の頻度形式は変えない。α=.94。施行言語は本文に明記がない
- 概念128、尺度174、使用研究197、選択ガイド64、関係16。版は v0.97.0 から v0.98.0。日本語の検証済みは22から23。関連版は14のまま。未確認は106のまま。日本語使用例は17のまま。登録3・4項目は29のまま。使用研究側の3・4項目は27のまま

## 重複確認

作業開始時の tip は `b52c9cb`（v0.97.0、128概念・173尺度・195使用研究・63選択ガイド・16関係、日本語は検証済み22・関連版14・未確認106）。`origin/main` と一致。作業ツリーは clean。

`data.js` を次の文字列で検索した。BAT、Burnout Assessment、`10.3390/ijerph17249495`、`10.3389/fpsyg.2020.01819`、`10.3389/fpsyg.2020.598090`、`10.3389/fpsyg.2023.1148822`、Stynen、Sakakibara。追加対象の尺度と使用研究は未登録だった。ヒットした BAT は、ワーカホリズム notes の未登録尺度 WorkBAT だけであり、BAT-23 とは別なので追加していない。

既存 ID は、概念 `burnout`、尺度 `edmondson-tps-7`、尺度 `zhang-plb-22`（Zhang 2015、DOI `10.5465/amj.2012.0995`）を確認して使った。

## 根拠として確認したこと

- 数値は依頼文に書かれた値だけを使った。依頼文にない係数・人数・言語は作っていない
- BAT-23 の書誌、23項目と4次元、5件法、折半標本、適合度、α、BAT-S、4DSQ、公式サイトの利用条件、日本語版の標本・α・適合・再検査は依頼文の範囲
- 著者の名は依頼文がイニシャルのため、フルネームは補わない
- Wang らの年は2021（公開 2021-01-12）。DOI のパスに 2020 が含まれる
- Stynen らの施行言語は本文に明記がない。オランダの組織であることをもってオランダ語とは書かない
- 生活満足は PLB と正の関連まで。職の不安定感の部分媒介は職務満足とキャリア満足

## 採否

- `sourceUrl` と使用研究の `url` は DOI。公式サイトは BAT の利用条件の根拠として notes に残す。第三者の PDF ホスト URL は保存しない
- 項目本文は転載しない。`itemPublicationStatus` は直近の新規尺度と同じ `not-published`
- 開発論文（Schaufeli ら 2020）と日本語検証論文（Sakakibara ら 2020）は `usageStudies` に入れない
- `psychometricEvidence` は開発論文の1件。日本語の測定結果は `japaneseEvidence` と `japaneseStatusNote` に書く
- TPS-7 と PLB-22 の旗艦 `responseFormat` は変えない。件数・アンカーの変更は adaptation
- Wang らの中国語と、言語未記載の Stynen らは、日本語の `usage-example` にしない
- 観光ドメインのレコードは編集していない
- 既存概念への逆リンクは足さない。関係レコードは追加しない

## 入れなかったもの

- BAT-23、TPS-7、PLB-22 の項目本文
- BAT-S の別尺度。Schaufeli ら（2020）と Sakakibara ら（2020）を使用研究に入れること
- Stynen らの施行言語の推測。生活満足に対する媒介の断定
- 観光尺度（MTE-24、DES-15、4E-16、PA-12、ESS-10、SUS-TAS-44、RETS-12、RETS-JP-11、Tourism NS-21）の変更
- HOLD。CSR-17 の使用研究、Aad-3 の使用研究、UTAUT-SI／FC の使用研究、P–O fit-3 の使用研究、RC-3 の使用研究、Price Consciousness 5、Brand Affect 3／OBE-4 の日本語、Mitchell–Ambrose 5、CX Scale 18 の二件目使用研究、Brand Hate-18 の使用研究、Frontiers 2020 の JIS、LEB-10 の Khan（2025）、Voice-6 の Chen（2023）、PSI-18、Nagano 2024 日本語版 LAWS、Matsuo WORK 2024
- `app.js`、`index.html`、`styles.css`。`.wrangler/` などの生成物

## 検証

- `node verify-data.mjs` 成功。概念128、尺度174、使用研究197、登録3・4項目29、使用研究側の3・4項目27、選択ガイド64、関係16。日本語は検証済み23、言語的妥当性確認2、日本語使用例17、翻訳・因子構造等の検討5、関連版の日本語根拠14、日本語で独自開発6、開発論文内の日本語検証1、未確認106
- `node verify-data.mjs --self-test` 成功
- `node --check data.js` 成功
- `node --check app.js` 成功（`app.js` は変更していない）
- `git diff --check` 成功
- 想定件数（128概念・174尺度・使用研究197、関係16、日本語は検証済み23／関連版14／未確認106）と一致した。選択ガイドが64なのは、バーンアウトに判断ガイドがなかったため1件足したからである
- ブラウザ確認は、このセッションの Browser プラグインが使えなかったため、システムの Chrome（headless）でローカルの `index.html` を開いて行った。1365×900 と 390×844。コンソールエラーとページエラーはなし
- 検索: 「BAT-23」は1件。カードは23項目、検証済み日本語版、掲載・利用可。使用先行研究のバッジはない。詳細は5件法、項目本文は「掲載していません」、DOI は開発論文と Sakakibara ら、BAT-S と項目番号の注意がある。リンクは DOI か Google Scholar
- TPS-7 の旗艦は7件法のまま。詳細に Wang ら（2021）があり、5件法への変更は使用研究側。PLB-22 の旗艦は頻度形式のまま。詳細に Stynen & Semeijn（2023）があり、実施言語は未記載、同意尺度への変更は使用研究側
- 概念「バーンアウト」に目的別ガイドがある。MBI-GS と BAT-23 の両方が開く。比較表は両方を並べ、回答形式と利用条件（申請が必要／掲載・利用可）を旗艦のまま示す。研究設計の JSON/CSV は略称 MBI-GS・BAT-23 と BAT の DOI を含む。MBI-GS の原典 DOI は従来どおり空。先行研究 CSV に Wang と Stynen の DOI は入り、Sakakibara らの検証論文は入らない
- 設計アシスタントは概念ごとに1候補を出す既存の動きのまま。バーンアウトの自動候補は MBI-GS、別候補に BAT-23。空の検索は「条件に合う尺度がありません」。観光の MTE-24 は残っている。390px では検索と詳細ダイアログに横はみ出しはなかった
