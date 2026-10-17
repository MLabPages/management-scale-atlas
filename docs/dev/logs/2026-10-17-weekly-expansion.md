# v0.100.0 定時拡充（BAT-12、PLB-22 と BAT-23 の使用研究）

日付: 2026-10-17

## 追加

- 新概念は作らない。既存概念 `burnout` に尺度 `hadzibajramovic-bat-12`（BAT-12）を1件追加。Hadžibajramović, E., Schaufeli, W., & De Witte, H.（2022）。BMC Public Health, 22, 560。DOI `10.1186/s12889-022-12946-y`。2022-03-22 公開。CC BY 4.0。`sourceUrl` は DOI のみ
- 親は `schaufeli-bat-23`。`versionType` は `short`。`parentScaleId` は `schaufeli-bat-23`。12項目・4下位尺度×3（疲弊、心的距離、認知的障害、情緒的障害）。心的距離・認知的障害・情緒的障害は BAT15 の段階で各3項目。疲弊は6から3。BAT15 は別尺度にしない。5件法の頻度（1＝never～5＝always）。4下位尺度は単一のバーンアウト得点に合成できる
- オランダとフランドル（ベルギー）の就業者代表標本（各 n=1500）。完全回答 n=2978（オランダ 1500、フランドル 1478）。原版オランダ語 BAT-23。Rasch 分析と項目内容分析・専門家判断。年齢・性別・国で DIF なし
- 信頼性は α ではない。Person Separation Index（PSI）。subsample 1（n=800）は12項目 .91、4 testlets .82。subsample 2（n=800）は12項目 .90、4 testlets .81。`psychometricEvidence` は1件
- `usagePermission` は `open`。公式サイト https://burnoutassessmenttool.be/en/ の無償・許諾不要・改変不可・引用必須。公式質問票に短縮版項目の印がある。`itemPublicationStatus` は `not-published`。`items` は空。`japaneseVersionStatus` は `unconfirmed`。`recordStatus` は `verified-metadata`。`usageStudies` は空。開発論文は使用研究に入れない。Sakakibara ら（2020）の BAT-J は23項目版なので日本語根拠にしない。BAT4（2024）は登録しない
- BAT-23 の notes に、短縮版が別レコードである旨を足した。項目数、回答形式、開発論文の α、利用条件、日本語根拠は変えていない
- 既存 `zhang-plb-22` に `usageStudies` を1件追加。既存の Stynen & Semeijn（2023）は残す。Meng, Xu, Abuliezi, Lyu, & Zhang（2023）。Frontiers in Psychology, 14, 1052732。DOI `10.3389/fpsyg.2023.1052732`（epub 2023-04-06、CC BY 4.0）。フル22項目。中国本土、60チーム・メンバー254名。中国語（Brislin 1980）。5件法の同意形式への変更は adaptation。旗艦の頻度形式は変えない。α=.94
- 既存 `schaufeli-bat-23` に `usageStudies` を1件追加。それまで空。Brulin ら（2025）。BMJ Open, 15(4), e090966。DOI `10.1136/bmjopen-2024-090966`（epub 2025-04-10、CC BY-NC 4.0）。フル23項目。スウェーデンの医師、ベースライン2761名、両時点1575名。α は全体 .95、疲弊 .92、心的距離 .84、情緒的障害 .90、認知的障害 .85。実施言語は本文に明記がない
- 概念128、尺度175、使用研究199、選択ガイド64、関係16。版は v0.99.0 から v0.100.0。日本語の検証済みは23のまま。関連版は14のまま。未確認は106から107。日本語使用例は17のまま。登録3・4項目は29のまま。使用研究側の3・4項目は27のまま

## 見送り

- PCQ-24 の Su & Hahn（2023、Behav Sci 13:981）。例示項目が原典と異なり、本研究の PCQ の α を本文から確認できない
- KSS-7 の Al-Rjoub & Mrayyan（2024）。α .78 は本研究の値ではなく、回答形式の表記も誤記

## 重複確認

作業開始時の tip は `8d069a7`（v0.99.0、128概念・174尺度・197使用研究・64選択ガイド・16関係、日本語は検証済み23・関連版14・未確認106）。`origin/main` と一致。作業ツリーは clean。

`data.js` を次の文字列で検索した。`10.1186/s12889-022-12946-y`、`10.3389/fpsyg.2023.1052732`、`10.1136/bmjopen-2024-090966`、BAT-12、Meng、Brulin。追加対象の尺度と使用研究は未登録だった。

既存 ID は、概念 `burnout`、尺度 `schaufeli-bat-23`、尺度 `zhang-plb-22` を確認して使った。短縮版の `versionType` は既存レコードの `short`、`parentScaleId` は親の ID。

## 根拠として確認したこと

- 数値は根拠メモに書かれた値だけを使った。メモにない係数・人数・言語は作っていない
- BAT-12 の書誌、12項目と4下位尺度、5件法、標本、PSI、公式サイトの利用条件、日本語を unconfirmed にすること、開発論文を使用研究にしないことは根拠メモの範囲
- 著者の名は根拠メモがイニシャルのため、フルネームは補わない
- Meng らの回答形式の変更は adaptation。旗艦の `responseFormat` は変えない
- Brulin らの施行言語は本文に明記がない。スウェーデンの医師であることをもって言語は書かない
- URL は DOI と出版社ページ（Frontiers、BMJ Open）。第三者 PDF サイトの URL は保存しない

## 採否

- 項目本文は転載しない。`itemPublicationStatus` は直近の新規尺度と同じ `not-published`
- 開発論文（Hadžibajramović ら 2022）は `usageStudies` に入れない
- `psychometricEvidence` は短縮論文の1件。PSI を α と書かない
- `burnout` の decisionGuide は変えない。選択ガイドの件数は64のまま
- Meng らの中国語と、言語未記載の Brulin らは、日本語の `usage-example` にしない
- 既存概念への逆リンクは足さない。関係レコードは追加しない

## 入れなかったもの

- BAT-12、BAT-23、PLB-22 の項目本文
- BAT4。BAT15 の別尺度。Hadžibajramović ら（2022）を使用研究に入れること
- Brulin らの施行言語の推測。BAT-23 の項目数・回答形式・開発論文の α・利用条件・日本語根拠の変更
- PCQ-24 の Su & Hahn（2023）。KSS-7 の Al-Rjoub & Mrayyan（2024）
- HOLD。CSR-17、Aad-3、UTAUT-SI／FC、P–O fit-3、RC-3、Price Consciousness 5、Brand Affect 3／OBE-4 の日本語、Mitchell–Ambrose 5、CX Scale 18 の二件目使用研究、Brand Hate-18 の使用研究、Frontiers 2020 の JIS、LEB-10 の Khan（2025）、Voice-6 の Chen（2023）、PSI-18、Nagano 2024 日本語版 LAWS、Matsuo WORK 2024
- `app.js`、`index.html`、`styles.css`。`.wrangler/` などの生成物

## 検証

- `node verify-data.mjs` 成功。概念128、尺度175、使用研究199、登録3・4項目29、使用研究側の3・4項目27、選択ガイド64、関係16。日本語は検証済み23、言語的妥当性確認2、日本語使用例17、翻訳・因子構造等の検討5、関連版の日本語根拠14、日本語で独自開発6、開発論文内の日本語検証1、未確認107
- `node verify-data.mjs --self-test` 成功
- `node --check data.js` 成功
- `node --check app.js` 成功（`app.js` は変更していない）
- `git diff --check` 成功
- ブラウザはローカルの `index.html`（http://127.0.0.1:8765）を Chrome で開いた。コンソールエラーとページエラーはなし。1365×900 と 390×844
- 検索「BAT-12」は1件。カードは12項目、短縮版、日本語未確認、掲載・利用可。使用先行研究のバッジはない。詳細に PSI（12項目 .91／.90、4 testlets .82／.81）、親は BAT-23、項目本文は非掲載、DOI は短縮論文。リンクに第三者 PDF サイトはない
- PLB-22 の旗艦は頻度形式（0＝not at all～4＝a lot）のまま。詳細に使用先行研究2件。Meng ら（2023）は中国語、5件法の同意、α=.94。Stynen & Semeijn（2023）は残っている
- BAT-23 の旗艦は23項目・5件法・利用条件の注記・検証済み日本語のまま。詳細に Brulin ら（2025）。実施言語は未記載。スウェーデン語とは書いていない
- 比較は BAT-23 と BAT-12。版区分は原版と短縮版。親尺度は BAT-23。使用先行研究は1件と0件。回答形式はどちらも5件法の頻度。利用条件はどちらも掲載・利用可
- 研究設計の JSON に BAT-12 と BAT-23 の略称が入る。先行研究 CSV の usage-study 行に Brulin の DOI が入り、BAT-12 の開発論文 DOI は original 行。Sakakibara らの検証論文は usage-study 行に入らない
- 空の検索は「条件に合う尺度がありません」。観光の MTE-24 は残っている。390px では横はみ出しはなかった（scrollWidth 390、clientWidth 390）
