# v0.124.0 定時拡充（家族支援的上司行動、EmpRes の使用研究）

日付: 2026-11-07

## 追加

- 概念 `family-supportive-supervisor-behaviors`（家族支援的上司行動）と尺度 `hammer-fssb-sf-4`（FSSB-SF）を追加した
- `hammer-fssb-sf-4` の `usageStudies` を1件追加した（0件から1件）
- `naswall-empres-9` の `usageStudies` を1件追加した（1件から2件）
- 概念145、尺度197、使用研究239、選択ガイド81、関係16。版は v0.123.0 から v0.124.0。`meta.updated` は 2026-11-07。`meta.scope` は `145概念・197尺度`
- 開発論文は `usageStudies` に入れていない
- 既存概念への逆リンクは足していない。関係レコードは追加していない

## 本文から確認した値

確認の前提は 2026-11-07 の指定。係数と標本は、APA の VOR を開かず、PMC 著者原稿（PMC3863646）および二次の OA 使用研究の方法節と照合済みの値だけを記録した。この登録作業では Crossref の書誌とライセンスを再確認した。PMC 本文は、この作業では開いていない。

### FSSB-SF

- Crossref。著者 Leslie B. Hammer、Ellen Ernst Kossek、Todd Bodner、Tori Crain。Journal of Occupational Health Psychology, 18(3), 285–296。DOI `10.1037/a0032612`。issued は 2013。ライセンス欄は空。`sourceUrl` は DOI のみ
- 題名は Measurement development and validation of the Family Supportive Supervisor Behavior Short-Form (FSSB-SF)
- 4項目・超一次元。emotional support、instrumental support、role modeling、creative work-family management から各1項目
- 5件法（1＝strongly disagree～5＝strongly agree）
- 旗艦の係数αは、Study 1 の FSSB-SF が .823（元の小売標本の短縮）、Study 2 が .88（情報技術専門職823名と上司219名の検証標本）
- 採点（合計か平均か）の明示はない。合計とも平均とも断定していない
- 親は Hammer ら（2009）の FSSB-14（未登録）。`parentScaleId` は空。`versionType` は `original`。短縮だが、開発論文自体が FSSB-SF の開発である
- `usagePermission` は `unknown`。`itemPublicationStatus` は `not-published`。`items` は空。項目本文は転載していない
- 日本語は `unconfirmed`。Kawasumi ら（J UOEH 2026）は日本語の14項目版なので、SF の日本語根拠にしていない
- `relatedConcepts` は存在する `work-family-conflict` のみ。一般的な上司支援は未登録なので入れていない
- APA の VOR PDF は未開封。出版版で値が違う可能性がある、と notes に書いた。PMC の URL は載せていない

### FSSB-SF の使用研究

- Crossref。著者 Pablo I. Escribano。Frontiers in Psychology, 13, 1026352。DOI `10.3389/fpsyg.2022.1026352`。公開 2022-12-06。VOR は CC BY 4.0
- 題名は A relational identity approach to study the antecedents of family supportive supervision
- Hammer ら（2013）の FSSB-SF のフル4項目。5件法（1＝strongly disagree～5＝strongly agree）は旗艦と同じ
- この標本の α=.91。チリの民間銀行。部下205名、上司84名の対応
- 開発者は著者に含まれない。項目本文は転載していない
- `url` は DOI のみ。`verifiedAt` は 2026-11-07

### EmpRes の使用研究

- Crossref。著者 Marjolein C. J. Caniëls。Frontiers in Psychology, 13, 1066909。DOI `10.3389/fpsyg.2022.1066909`。公開 2023-01-09。巻は13。VOR は CC BY 4.0
- 題名は How perceptual differences between leaders and followers affect the resilience-workability relationship
- Näswall et al.（2019）の9項目 resilience at work / EmpRes を明示
- オランダのリーダー—フォロワー dyad。最終146組
- 信頼性は McDonald の ω=0.80。係数αにはしていない
- 回答形式の再記述はない。旗艦の7件法（1＝Never～7＝Almost always）は変えていない
- 開発者は著者に含まれない。項目本文は転載していない
- JMP 2019 の表の係数は旗艦にしていない。心理測定根拠の `verifiedAt` は 2026-11-05 のまま。Mao らの `verifiedAt` は 2026-11-05 のまま。尺度の `verifiedAt` は 2026-11-07
- 旗艦の9項目、`usagePermission`（`research-use`）、日本語は変えていない

## 見送り

- FSSB-14 本体。未登録のまま。親子リンクはしていない
- Luo ら（2022、DOI `10.3389/fpsyg.2022.992458`）。role modeling を除いた3項目・6件法の改変
- Yang ら（2023、DOI `10.3389/fpsyg.2023.1079201`）。Hammer 2009 の引用で4項目・7件法
- Kawasumi らの日本語14項目版
- 感情労働の ELS（Brotheridge）、AILS、SNAIL
- 前回までの HOLD は変更していない

## 採否

- 項目本文は転載しない。FSSB-SF の `items` は空。`itemPublicationStatus` は `not-published`。EmpRes の `itemPublicationStatus` は `not-published` のまま
- `usagePermission` は FSSB-SF が `unknown`。EmpRes は `research-use` のまま。新しい列挙値は作らない
- 第三者サイトの URL は `data.js` に入れていない。`sourceUrl` と使用研究の `url` は DOI
- 値を創作していない。採点式、FSSB の実施言語、Study 1 の人数、Caniëls の回答形式は、指定にないので書いていない
- `app.js`、`index.html`、`.wrangler/` は変えていない

## 検証

`node --check data.js`、`node verify-data.mjs`、`node verify-data.mjs --self-test` は通過した。`verify-data.mjs` の件数は、概念145、尺度197、使用研究239、選択ガイド81、関係16。登録版そのものが3・4項目は32。個別使用研究で3・4項目版を確認済みは29。日本語は検証済み27、言語的妥当性確認2、日本語使用例18、翻訳・因子構造等の検討5、関連版14、日本語で独自開発6、開発論文内の日本語検証1、未確認124。追加分の URL に `researchgate.net` はない。`git diff --check` は指摘なし。

ローカルの `index.html` をヘッドレス Chrome で開いた確認では、ヘッダは `v0.124.0 実データ版`、件数は `145概念・197尺度・個別使用研究239件`、フッタは `v0.124.0`。コンソールエラーはなかった。キーワード「FSSB」は1件。詳細は最終確認日 2026-11-07、4項目、5件法（1＝strongly disagree～5＝strongly agree）、利用条件未確認、使用先行研究は1件、Escribano（2022）の α=.91、DOI `10.1037/a0032612` と `10.3389/fpsyg.2022.1026352`。項目本文は出ない。画面は「掲載していません」。キーワード「EmpRes」は1件。詳細の旗艦は7件法のまま。使用先行研究は2件。Mao ほか（2022）と Caniëls（2023）、ω=0.80、DOI `10.3389/fpsyg.2022.1066909`。最終確認日は 2026-11-07。心理測定根拠の 2026-11-05 は残る。概念「家族支援的上司行動」の詳細は、目的別ガイド、FSSB-SF、ワーク・ファミリー・コンフリクト。キーワード「存在しない尺度zzzz」は該当なし。研究設計に FSSB-SF と EmpRes を入れると合計13項目、選択は2件。再読み込み後も選択は2件のまま。検索結果の JSON 出力は `0.124.0` を含む。CSV 出力は FSSB-SF と DOI `10.1037/a0032612` を含む。幅390pxでは詳細ダイアログは幅352px、左19px、概念カードは幅358px、左16px、ページの横溢れなし。幅1280pxでは詳細ダイアログは幅720px、左280px、横溢れなし。
