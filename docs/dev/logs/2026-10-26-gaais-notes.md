# v0.110.0 GAAIS の notes を現状に合わせる

日付: 2026-10-26

## 範囲

`schepman-rodway-gaais-20` の notes と、同じ英文が残っていた `japaneseStatusNote` だけを直した。概念、尺度、使用研究、選択ガイド、関係の件数は変えていない。134概念・183尺度・217使用研究・70選択ガイド・16関係。`meta.version` は `0.110.0`。`meta.updated` は 2026-10-26。`meta.scope` は `134概念・183尺度` のまま。

他の尺度・概念、GAAIS の `scoring`、`usageStudies` の中身、旗艦の項目数・回答形式・信頼性・利用条件・日本語状態、`verifiedAt`（2026-10-24）は変えていない。`app.js` は変えていない。

## notes

- 日本語版 GAAIS-J で除外された項目 Neg3 の英語の項目本文1文を削除した。項目番号 Neg3 と、GAAIS-J では除外されたという事実は残した。同じ括弧書きは `japaneseStatusNote` にもあったので、同じ置換で削った。`scoring` は「Neg3 削除」とだけ書き、英文はなかった。`applicationEvidence`、概念の caution、`japaneseEvidence` の `sourceLocator` も英文はなかった。
- 「usageStudies は空」は、使用研究が Tuncer と Tuncer（2024）の1件である、に書き直した。この1件は v0.109.0 で登録済みの `usageStudies` を指す。DOI、標本、α、得点は notes に足していない。
- 「短縮版 GAAIS-10、Sindermann らの ATAI、Kieslich らの TAI は別尺度で未登録」は、ATAI（`sindermann-atai-5`、Sindermann ら 2021）が同じ概念 `attitudes-toward-ai` に登録済みで、GAAIS とは得点を合算しない、に書き直した。短縮版 GAAIS-10 と Kieslich らの TAI は未登録のまま。ATAI の書誌は新たに作っていない。

## 検証

`node --check data.js`、`node verify-data.mjs`、`node verify-data.mjs --self-test`、`git diff --check` は通過した。`data.js` に Neg3 の英文は残っていない。

`verify-data.mjs` の件数は、概念134、尺度183、使用研究217、選択ガイド70、関係16。登録版そのものが3・4項目は29。個別使用研究で3・4項目版を確認済みは27。日本語は検証済み26、言語的妥当性確認2、日本語使用例18、翻訳・因子構造等の検討5、関連版14、日本語で独自開発6、開発論文内の日本語検証1、未確認111。v0.109.0 と同じ。

ローカルの `index.html` をヘッドレス Chrome で開いた確認では、ヘッダは `v0.110.0 実データ版`、件数は `134概念・183尺度・個別使用研究217件`、フッタは `v0.110.0`。コンソールエラーはなかった。キーワード「GAAIS」は2件（GAAIS と ATAI）。GAAIS の詳細に、英語の項目本文はなく、Neg3 と「GAAIS-J では除外」がある。使用研究は Tuncer と Tuncer（2024）の1件。ATAI は `sindermann-atai-5` として登録済みで、得点は合算しない、と出る。「usageStudies は空」は出ない。幅390pxではカード幅358px、左16px、ページの横溢れなし。
