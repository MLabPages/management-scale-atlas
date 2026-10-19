# v0.102.0 定時拡充（静かな退職、CPC-12R と DUWAS-10 の使用研究）

日付: 2026-10-19

## 追加

- 概念 `quiet-quitting`（静かな退職（クワイエット・クイッティング） / Quiet Quitting）と尺度 `galanis-qqs-9`（QQS-9）を追加。Galanis, Katsiroumpa, Vraka, Siskou, Konstantakopoulou, Moisoglou, Gallos, & Kaitelidou（2023）。AIMS Public Health, 10(4), 828–848。DOI `10.3934/publichealth.2023055`。Received 2023-08-20、Accepted 2023-10-07、Published 2023-10-17。CC BY 4.0（論文末尾）。PMC10764970。`sourceUrl` は DOI のみ。出版社 PDF の直リンクは載せない
- 原典の略称は QQS。レコードの略称は QQS-9（項目数を示す）。`versionType` は `original`。`parentScaleId` は空。`recordStatus` は `verified-metadata`
- 9項目・3因子。Detachment（心理的離脱・4項目：原典番号 #7, #8, #11, #18）、Lack of initiative（主体性の欠如・3項目：#9, #10, #12）、Lack of motivation（動機づけの欠如・2項目：#3, #5）。5件法。叙述文7項目は同意形式（1＝strongly disagree～5＝strongly agree）。「How often」形式の2項目（#12, #18）は頻度形式（1＝never～5＝always）
- `reverseItems` は原典番号 `[3, 5, 12]`。逆転後に高得点ほど静かな退職が強い。最終9項目へ振り直した番号ではない。項目本文は転載しない
- 採点は9項目の平均（1～5）を総得点、各因子も項目平均。高いほど静かな退職の水準が高い。原典はカットオフを設定していない。カットオフは別論文（Arch Hellen Med 2024）にあり、未確認のため使わない
- 開発の流れは、文献レビューと就業者6名の面接で38項目、専門家6名の CVR で18項目、認知面接5名・パイロット30名（face validity index .833–.967）、項目分析で9項目
- 開発標本はギリシャの公共・民間部門の就業者 922名（便宜標本、2023年6月、SNS・ブログ・メール・SMS・対面。参加条件は18歳以上でギリシャ語を理解できること）。半分割で EFA n=461、CFA n=461。EFA（promax）3因子の分散説明率 65.028%（Table 3）。CFA は χ²/df=3.184、RMSEA=0.069（90% CI 0.052–0.087）、GFI=0.964、NFI=0.939、CFI=0.957、標準化負荷 0.478–0.878、detachment と lack of initiative の因子間相関 r=0.81（Figure 2）
- 信頼性（全922名、Table 5）は総得点 α=0.803、ω=0.806、Detachment α=0.707、ω=0.711、Lack of initiative α=0.706、ω=0.735、Lack of motivation α=0.747（ω は項目数不足で算出不可）。再検査（50名、2週間）は項目の Cohen's κ 0.836–0.945、総得点 ICC 0.993、因子 ICC 0.987–0.992。併存妥当性（Table 4、n=922）は総得点と JSS r=−0.46、CBI 業務関連 0.45、個人 0.39、クライアント関連 0.34、単一項目バーンアウト 0.29、離職意向（Spearman）0.48
- `psychometricEvidence` は開発論文の1件。`usageStudies` は空。開発論文は使用研究に入れない
- 実施言語は本文に明記がないため断定しない。参加条件はギリシャ語理解。論文の項目表記は英語。英語版・ギリシャ語版などは著者サイトで配布
- `usagePermission` は `research-use`。著者サイト（http://scholar.uoa.gr/pegalan/quiet-quitting-scale）は、非営利の教育・研究目的は無償、関連論文の引用が条件、翻訳は著者へ写しを送ることが条件、と明記する（2026-10-19 確認）。論文自体は CC BY 4.0。商用利用の条件は未確認。`itemPublicationStatus` は `source-open`（CPC-12R と同じ。原典 Table 3 に英文項目があるが転載しない）。`items` は空
- 日本語は `unconfirmed`。著者サイトの翻訳版一覧（ドイツ語、ギリシャ語、ラトビア語、イタリア語、中国語、トルコ語、ポルトガル語、タイ語）に日本語はない。中国語版（Zhang ら 2025、BMC Nursing、DOI 10.1186/s12912-025-02921-4）などの他言語版は別レコードにしない
- `relatedConcepts` は存在する `work-engagement`、`burnout`、`turnover-intention`、`job-satisfaction`。2026-10-07 の判断どおり、既存概念への逆リンクは足さない。`typicalAntecedents` と `typicalOutcomes` は空。decisionGuide は QQS-9 の1択。選択ガイドは64から65。関係レコードは追加しない
- 既存 `dudasova-cpc-12r` に `usageStudies` を1件追加。それまで空。Schelleman-Offermans, Dito, Gudeta, Fourie, Kebede, Mazzucato, & Jonas（2024）。BMC Public Health, 24, 1157。DOI `10.1186/s12889-024-18678-5`（2024-04-25、CC BY 4.0）。フル12項目。3WE プロジェクト。エチオピアの FDI 系アパレル・花卉。分析標本 2,477名、平均 27.51歳。Amharic と Afaan Oromo。原版6件法から5件法への変更は adaptation。旗艦の responseFormat は変えない。この標本の α=.798。本文が併記する .82 は Lorenz ら（2016）の参照値。本文の信頼性の一文は「CPC-12」と書くが、測定の記述と参考文献 [58] は CPC-12R を指す。その表記の揺れは adaptation に残した。notes の「usageStudies は空」は件数に合わせて直した。旗艦の項目数・回答形式・α・利用条件・日本語状態は変えていない
- 既存 `schaufeli-duwas-10` に `usageStudies` を1件追加。それまで空。Makhdoom, Malik, Atta, Malik, Qureshi, Shahid, & Tang（2022）。Frontiers in Public Health, 10, 968837。DOI `10.3389/fpubh.2022.968837`（2022-10-25、CC BY 4.0、PMC9641097）。フル10項目。パキスタンの公立大学教員 1,008名。ウルドゥー語（Makhdoom 2021 の博士論文による訳）。4件法（本文の表記は「1 = very unlikely to 4 = Always」）。分析は総得点（Table 1 の M=26.92）。この標本の α は総得点 0.76（Table 1）。Instruments 節の 0.65（WE）、0.63（WC）、0.74（全体）はウルドゥー語版の α として書かれた値で、この標本の値かどうか本文から確定できないので、この研究の α には使わない。旗艦の responseFormat は変えない。notes の「使用研究は空」は件数に合わせて直した。旗艦の項目数・回答形式・α・利用条件・日本語状態は変えていない
- 概念129、尺度177、使用研究203、選択ガイド65、関係16。版は v0.101.0 から v0.102.0。日本語の検証済みは24のまま。関連版は14のまま。未確認は107から108。日本語使用例は17のまま。登録3・4項目は29のまま。使用研究側の3・4項目は27のまま

## 見送り

- Kantur & Iseri-Say（2015）の組織レジリエンス尺度。本文内で integrity 因子の項目数が Table 3/4 では2項目、結論では3項目と食い違う。RMSEA が「.8」と誤記されている。利用条件が不明。HOLD
- BAT-12 の Izdebski ら（2023、ポーランド）。BAT 手引き（2019）を引用し、Hadžibajramović ら（2022）の12項目と同一の項目セットか本文で確定できない。HOLD。登録しない
- BAT-12 のイタリア版・クロアチア版は検証研究なので usage にしない

## 重複確認

作業開始時の tip は `5315503`（v0.101.0、PR #55。128概念・176尺度・201使用研究・64選択ガイド・16関係。日本語は検証済み24・関連版14・未確認107）。`origin/main` と一致。作業ツリーは clean。open PR は依頼時点でなし。

`data.js` を次の文字列で検索した。`10.3934/publichealth.2023055`、`10.1186/s12889-024-18678-5`、`10.3389/fpubh.2022.968837`、`quiet-quitting`、`galanis-qqs-9`、`QQS-9`、Schelleman-Offermans、Makhdoom。追加対象は未登録だった。

既存 ID は、概念 `work-engagement`、`burnout`、`turnover-intention`、`job-satisfaction`、尺度 `dudasova-cpc-12r`、尺度 `schaufeli-duwas-10` を確認して使った。逆リンクは足していない。

## 根拠として確認したこと

- 数値は 2026-10-19 の作業指示に書かれた値だけを使った。指示にない係数・人数・言語・アンカーは作っていない
- QQS-9 の書誌、9項目と3因子、原典番号、5件法の二系統、逆転3項目、開発の流れ、Table 3・Table 4・Table 5・Figure 2、著者サイトの利用条件、項目非転載、開発論文を使用研究にしないことは指示の範囲
- 実施言語は本文に明記がない。ギリシャ語理解を参加条件であることと、論文の項目が英語であることをもって、実施言語をギリシャ語とも英語とも断定しない
- Schelleman-Offermans らの5件法と現地語化は adaptation。旗艦の `responseFormat` は変えない。本文の「CPC-12」表記と .82 の参照値は残す
- Makhdoom らの4件法表記とウルドゥー語訳は adaptation。旗艦の `responseFormat` は変えない。Instruments 節の下位 α はこの標本の α にしない
- URL は DOI と出版社ページ。第三者 PDF サイトの URL は保存しない。QQS-9 の PMC は識別子として notes と sourceLocator に書く

## 採否

- 項目本文は転載しない。QQS-9 の `itemPublicationStatus` は `source-open`（原典 Table 3 に英文9項目がある。CPC-12R と同じ既存の値）。`items` は空
- 開発論文（Galanis ら 2023）は `usageStudies` に入れない
- `psychometricEvidence` は開発論文の1件。使用研究が空の尺度で測定根拠を分けると、カード要約が「複数環境・日本語での検証根拠あり」になる
- 選択ガイドは新概念内だけで1件増える。既存概念への逆リンクは足さない。関係レコードは追加しない
- Amharic／Afaan Oromo とウルドゥー語の使用は、日本語の `usage-example` にしない
- CPC-12R と DUWAS-10 の旗艦の項目数、回答形式、α、利用条件、日本語状態は変えない

## 入れなかったもの

- QQS-9、CPC-12R、DUWAS-10 の項目本文
- QQS-9 のカットオフ。Arch Hellen Med 2024 の基準値。中国語版などの他言語版レコード
- 実施言語の断定。商用利用の条件
- Schelleman-Offermans らの .82 をこの研究の α にすること。本文の「CPC-12」表記を消すこと
- Makhdoom らの Instruments 節 0.65／0.63／0.74 をこの研究の α にすること
- Kantur & Iseri-Say（2015）。BAT-12 の Izdebski ら（2023）。BAT-12 のイタリア版・クロアチア版を usage にすること
- 既存 HOLD。CSR-17、Aad-3、UTAUT-SI／FC、P–O fit-3 の usage、RC-3 の usage、Price Consciousness 5、Brand Affect 3・OBE-4 の日本語、CX Scale 18 の第2 usage、Mitchell–Ambrose 5、Brand Hate-18 の usage、PSI-18、Frontiers 2020 の JIS、LEB-10 の Khan、Voice-6 の Chen、LAWS の Ayase／Nagano、観光ドメイン
- `app.js`、`index.html`、`styles.css`、`relations.js`。`.wrangler/` などの生成物。`docs/decisions.md`（判断の新設なし）

## 次回候補

- 引き続き HOLD の CSR-17、Aad-3、UTAUT-SI／FC、P–O fit-3、RC-3、Price Consciousness 5、Brand Affect 3／OBE-4 の日本語、Mitchell–Ambrose 5、CX Scale 18 の第2使用、Brand Hate-18 の使用、Frontiers 2020 の JIS、LEB-10 の Khan、Voice-6 の Chen、PSI-18、LAWS の Ayase／Nagano
- Kantur & Iseri-Say（2015）は、integrity の項目数と RMSEA の誤記、利用条件が解消するまで登録しない
- BAT-12 の Izdebski ら（2023）は、Hadžibajramović ら（2022）の12項目と同一セットか本文で確定できるまで usage にしない
- QQS-9 の独立した使用研究（開発論文以外）と、確認できた日本語版
- 観光尺度の回答形式・独立した使用研究

## 検証

`node --check data.js`、`node verify-data.mjs`、`node verify-data.mjs --self-test`、`git diff --check` は通過した。

`verify-data.mjs` の件数は、概念129、尺度177、使用研究203、選択ガイド65、関係16。登録版そのものが3・4項目は29。個別使用研究で3・4項目版を確認済みは27。日本語は検証済み24、言語的妥当性確認2、日本語使用例17、翻訳・因子構造等の検討5、関連版14、日本語で独自開発6、開発論文内の日本語検証1、未確認108。

`data.js` を読み込んだ確認では、`meta.version` は `0.102.0`、`meta.updated` は `2026-10-19`、`meta.scope` は `129概念・177尺度`。`galanis-qqs-9` は `itemPublicationStatus` が `source-open`、`items` は空、`usageStudies` は空、`psychometricEvidence` は1件、`reverseItems` は `[3, 5, 12]`、`japaneseVersionStatus` は `unconfirmed`。`quiet-quitting` への逆リンクはない。`dudasova-cpc-12r` の旗艦は6件法・12項目・`open`・`validated`・`source-open`・`verifiedAt` `2026-10-18` のまま、usage は DOI `10.1186/s12889-024-18678-5` の1件。`schaufeli-duwas-10` の旗艦は通例4件法・10項目・`research-use`・`validated-in-development-paper`・`not-published`・`verifiedAt` `2026-09-30` のまま、usage は DOI `10.3389/fpubh.2022.968837` の1件。
