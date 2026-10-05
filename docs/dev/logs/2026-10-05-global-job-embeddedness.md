# v0.86.0 職務埋め込み（Global JE-7）と日本語使用例1件

日付: 2026-10-05

## 追加

- 新概念 `job-embeddedness`（職務埋め込み / Job Embeddedness）
- 新尺度 `crossley-global-je-7`（Global JE-7）。Crossley, Bennett, Jex, & Burnfield（2007）。Journal of Applied Psychology, 92(4), 1031–1042。DOI `10.1037/0021-9010.92.4.1031`
- 7項目、単一次元・反射型。Table 2 の6番目（脚注 a）が逆転。開いた著者稿の回答は5件法（5 = strongly agree）
- パイロット N=87、α=.88。本調査 N=306、α=.89。CFA は χ²(14)=79.95、CFI .94、GFI .93、SRMR .04。複合 JE との r=.59
- 使用研究1件と日本語 `usage-example` 1件。Allen, Peltokorpi, & Rubenstein（2016）Study 1。DOI `10.1037/apl0000134`。首都圏のフルタイム従業員、T3 有効597名、7件法、逆翻訳、α=.84
- 概念107、尺度149、使用研究182、選択ガイド41、関係16。版は v0.85.1 から v0.86.0。日本語未確認は90のまま

## 根拠として確認したこと

- 週次メモ（2026-10-05）が開いた UNL 著者稿。Method の Global job embeddedness、Table 2、Table 3、弁別妥当性。copy of record ではない
- 同じメモが開いた Warwick 著者稿の Allen ら（2016）Study 1 Method と Table 1。copy of record ではない
- Crossref で3件の書誌が一致。Crossley 2007 は Craig D. Crossley, Rebecca J. Bennett, Steve M. Jex, Jennifer L. Burnfield、JAP 92(4), 1031–1042。Allen 2016 は David G. Allen, Vesa Peltokorpi, Alex L. Rubenstein、JAP 101(12), 1670–1686。正誤 2011 は JAP 96(6), 1316、DOI `10.1037/a0025569`
- 低端アンカー 1 = strongly disagree と、仕事内外を考慮させる教示の追記は、正誤の本文ではなく PsycNET 抄録（検索結果経由）の範囲。正誤本文は未開封
- 開いた Study 1 の標本は首都圏のフルタイム従業員。雇用形態を正社員とは追加断定しない

## 入れなかったもの

- Crossley ら（2007）の開発論文と Crossley ら（2011）の正誤を `usageStudies` に入れること
- 7項目の項目文を `items[]` に転記すること
- Mitchell ら（2001）の複合職務埋め込み、Lee らの on/off 版、Allen ら Study 2 の Mitchell 短縮9項目
- 正誤本文を開かずに、教示文が原論文から脱落していたことを確定事実として書くこと
- Price Consciousness、JIS-4 の Frontiers in Psychology（2020）、Sultana ら（2022）
- 小山・石山（2025）など、原典を開いていない日本語文献

## 検証

- 作業開始時の `origin/main` は `46679eb`（v0.85.1）
- `node verify-data.mjs` 成功。概念107、尺度149、使用研究182、選択ガイド41、関係16。日本語は検証済み16、使用例16、未確認90
- `node verify-data.mjs --self-test`、`node --check data.js`、`node --check app.js`、`git diff --check` 成功
- ローカル静的サーバと headless Chrome で、見出しが v0.86.0・107概念・149尺度・使用研究182件になることを確認した。「職務埋め込み」と「Global JE-7」の検索は1件。尺度詳細に Allen ら（2016）、DOI `10.1037/apl0000134`、有効597名、α=.84、7件法、Table 2 の6番目の逆転、項目は「掲載していません」。項目文 "It would be easy for me to leave" は出てこない
- 比較・研究設計では合計7項目。使用研究を採用根拠にすると JSON と先行研究CSVに当該 DOI・7項目・597名が出る。検索結果の CSV/JSON にも Global JE-7 が出る
- 概念詳細の decisionGuide は Mitchell 複合版、TIS-6、組織コミットメントと分ける。幅390pxの詳細ダイアログは幅352pxで画面内に収まった
- 概念定義は「埋め込まれ、離れにくい」とした。「とどまりにくく」は使わない
