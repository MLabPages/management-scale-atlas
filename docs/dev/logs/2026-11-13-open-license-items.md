# オープンライセンスの項目本文を詳細画面へ出す

- 版は v0.130.0。機能用とデータ用で版を分けない。`data.js` の変更は `meta.version` を `0.129.0` から `0.130.0` にした1行。`meta.updated` は 2026-11-12。件数は 150概念・202尺度・247使用研究・86選択ガイド・16関係のまま。
- 本文は `items.js` の `window.ATLAS_ITEMS`。`index.html` は `data.js` の直後に読む。`published: true` で項目がある尺度だけ、詳細の尺度項目欄に本文・回答アンカー・逆転の印・ライセンスと出典を出す。ファイルが無いときは、その尺度の従来表示に戻る。
- 掲載は15尺度・166項目。SoAS 13、CBE-BL 6、J-MVS-P6 6、PELS 24、CPC-12R 12、GWQ-12 12、AIAS-4 4、DAI 5、EWWS 8、WCS 12、BAT-23 23、BAT-12 12、BWS 7、CX Scale 18、VEQ-AG 4。書き起こしの id はすべて `data.js` にあり、項目数も一致した。不一致で除外したものはない。
- 掲載しない。区分 A のうち原文未確定の WSC-8、ATAI、TAI、VIE、ZEF。区分 B 28、C 8、不明 146。VIE は表4と表5の英語が一致しないので寄せない。BAT-23 と BAT-12 は原文のまま、改変不可・2020年論文の引用必須を出す。
- `data.js` のメモに残る「転載しない」は消していない。掲載する尺度の詳細では、その文だけ表示から外す。検索・比較・CSV/JSON の列は変えていない。出力に項目本文は入らない。
- 戻し方は、この変更を revert する。

確認:

- `node --check app.js`、`node --check items.js`、`node --check verify-data.mjs`
- `node verify-data.mjs` は成功。概念150、尺度202、使用研究247、選択ガイド86、関係16。掲載する項目本文は15尺度・166項目。
- `node verify-data.mjs --self-test` は成功。項目本文の存在しない id、ライセンス、URL、項目数、ResearchGate を検出する。
- `git diff --check` は空。
- ローカルの `index.html` をヘッドレス Chrome で開いた。ヘッダは `v0.130.0 実データ版`、件数は `150概念・202尺度・個別使用研究247件`、フッタは `v0.130.0`。コンソールエラーはなかった。
- BAT-23 の詳細は23項目。先頭は “At work, I feel mentally exhausted”。アンカーは 1＝Never から 5＝Always。改変不可・引用必須と、Schaufeli, Desart, & De Witte（2020）の引用が出る。項目欄に「転載しない」は出ない。
- J-MVS-P6 は6項目。先頭は「高価な家，車，衣服を持つ人々に私は憧れを抱く」。アンカーは 1＝まったくあてはまらない、5＝かなりあてはまる。ライセンスは「CC BY 4.0 の下で原典から転載」。
- BWS は幹 “On a scale of 1 (low) to 10 (high)...” と、方法節の両端 “Low Inclusion” / “High Inclusion” を両方出す。
- DAI はスペイン語5項目と、表の英語併記。PELS は24項目で、幹は “My leader…”。
- ZEF は「原著で公開」のまま。項目本文も転載表記も出ない。FoMO は「掲載していません」。
- `ATLAS_ITEMS` を外すと、BAT-23 は「掲載していません」、ZEF は「原著で公開」に戻る。
- キーワード「存在しない尺度zzzz」は0件。「ZEF」は1件。収録状況の項目本文は 15／202尺度。研究設計に BAT-23 と FoMO を入れると両方が出る。検索結果の JSON は `0.130.0` を含み、項目本文 “mentally exhausted” は含まない。
- 幅1280pxでは詳細ダイアログは幅720px、横溢れなし。幅390pxでは詳細ダイアログは幅352px、左19px、EWWS は8項目、横溢れなし。
