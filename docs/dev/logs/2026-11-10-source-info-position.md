# 尺度詳細の原典・文献情報を上部へ移動

- 尺度詳細ダイアログで、原典・文献情報（タイトル、著者・年・掲載誌、Google Scholar・DOI・原文リンク）を尺度名と概念名の直下へ移した。従来は使用研究や日本語情報の後にあり、下までスクロールしないと見えなかった。
- 上部で見分けやすいよう `source-summary` の枠付き表示を追加した。表示内容とデータは変更していない。
- 確認：`node --check app.js`、`node verify-data.mjs`、`git diff --check`。ローカルHTTPサーバーで Brand Experience Scale の詳細を開き、PC幅と390px幅で最初の画面に原典情報が表示されることを確認した。
