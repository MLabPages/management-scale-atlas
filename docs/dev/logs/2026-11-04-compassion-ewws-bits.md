# v0.121.0 定時拡充（職場のコンパッション、EWWS と BITS-8 の使用研究）

日付: 2026-11-04

## 追加

- 概念 `workplace-compassion`（職場のコンパッション）と尺度 `mandliya-wcs-12`（WCS）を追加した
- `bartels-ewws-8` の `usageStudies` を1件追加した（0件から1件）
- `semmer-bits-8` の `usageStudies` を1件追加した（1件から2件）
- 概念143、尺度193、使用研究234、選択ガイド79、関係16。版は v0.120.0 から v0.121.0。`meta.updated` は 2026-11-04。`meta.scope` は `143概念・193尺度`
- 開発論文は `usageStudies` に入れていない
- 既存概念への逆リンクは足していない

## 本文から確認した値

### WCS

- Crossref。著者 Anshul Mandliya、Jatin Pandey。Frontiers in Psychology, 14, 1142309。DOI `10.3389/fpsyg.2023.1142309`。2023-03-30。CC BY 4.0
- 出版社ページの本文、Table 2、Table 3、Table 4、Table 5、Table 6、倫理声明を開いた
- 12項目。気づき3、共感3、意味づけ3、行為3。初期47項目から、Qソートで36項目、相関で16項目、探索的因子分析で12項目
- 7件法。Study 2 は almost never true ～ almost always true。1と7の数字は Study 4 が書く
- 旗艦の係数αは Study 2 の全体 0.915（N=406）。下位は 0.875、0.849、0.823、0.873
- Study 3 の節の全体 α は 0.93（節の標本は276名）。旗艦にしない
- 本文の確認的因子分析は χ²/df = 112.057/59、CFI = 0.982、RMSEA = 0.057。Table 5 は χ²/df = 2.014、df = 48、CFI = 0.981、RMSEA = 0.061。一致しないので、どちらにも寄せない
- Table 4 と Table 5 の表題は study 2（N=276）。節は Study 3。Study 2 の N は 406。表題には寄せない
- Bartlett の本文の表記は χ² (4050.65) = 120。括弧の位置は入れ替えない
- Table 2 の負荷の一つは 0.0.637 と印刷されている。0.637 には直さない
- 採点（合計か平均か）の明示はない。Table 6 の WCS 平均 4.622（SD 1.054、N=255）は 1–7 の範囲
- 抄録の947名は、内容の仕分け10、Study 2 の406、Study 3 の276、Study 4 の255 の合計と一致する
- 限界の節は、標本を英語圏（主に米国）に限ったと書く
- 倫理審査は現地の法令と機関の要件では不要。書面の同意を取得
- 尺度の利用許諾の明記はない。項目本文は転載していない

### EWWS の使用研究

- Crossref。著者 Anita de Vries、Vera M. A. Broks、Wim Bloemers、Jeroen Kuntze、Reinout E. de Vries。PLOS ONE, 17(7), e0272095。DOI `10.1371/journal.pone.0272095`。2022-07-28。CC BY 4.0
- 8項目。対人と個人内に等分。5件法（1＝strongly disagree～5＝strongly agree）。中間のアンカーは本文にない
- この研究の α は全体 .81、個人内 .74、対人 .84
- 参加435名と同僚963名。品質確認のあと最終359名（女性68.8%、平均年齢40.3、SD 12.5）。抄録の459名は、435名とも359名とも一致しない
- EWWS は T1。HEXACO はオランダ語版、BAT はオランダ語の仕事関連版と本文が書く。EWWS の翻訳手続きは本文にない
- 倫理はオープン大学、登録番号 U/2019/08651
- 開発者（Bartels、Peterson、Reina）は著者に含まれない
- 項目本文は転載していない

### BITS-8 の使用研究

- Crossref。著者 Arianna Costantini、Michela Vignoli、Lorenzo Avanzi。Journal of Business and Psychology, 41(3), 587–600。DOI `10.1007/s10869-025-10080-1`。オンライン 2025-10-29、印刷 2026-06。CC BY 4.0。登録年は印刷年
- 出版社ページと出版 PDF の Measures、Table 1、Table 2 を開いた
- 8項目。不必要4、不合理4。イタリア語。5件法（1＝never～5＝frequently）
- 方法節は McDonald の ω が .85 と .87。順は不必要、不合理
- Table 1 の対角は不必要 (.85)、不合理 (.87)。平均は 3.09（SD 0.92）と 2.63（SD 0.98）、N=299。表注は対角を Cronbach の α とする。数値は一致し、係数の名前は一致しない。どちらにも寄せない
- 同意667名、照合後299名（本文は45%）。本文は男性53%。Table 1 の性別平均は 0.46（0＝男性、1＝女性）。一致しないので、どちらにも寄せない
- 本文の確認的因子分析は unrelated tasks と書く。Table 2 は unreasonable と unnecessary。項目の記述は unreasonable。unrelated には読み替えない
- 多項式回帰の前に、5件法の中点3で中心化した
- 開発者は著者に含まれない。開発論文・検証研究ではない
- 項目本文は転載していない

## 見送り

- DUBS。Li, Kaltiainen, & Hakanen（2024、DOI `10.1186/s12889-024-18430-z`）は Dutch Boredom Scale から3項目を抜いている。6項目版の使用研究にしない
- DUBS のファルシ語版（Iran Occupational Health）は8項目の検証研究
- EWWS。Fatemi ら（2024）は前回の見送りのまま。インドネシア語版の適応（DOI `10.24036/rapun.v13i2.117090`）は検証研究
- BITS のポルトガル語版（DOI `10.1186/s40359-023-01061-1`）、ポーランド語版（DOI `10.1038/s41598-023-34006-0`）、スウェーデン語版（DOI `10.1186/s12889-024-19393-x`）は検証研究。Gahrmann と Klumb（2024）は変更していない
- DAI。DOI `10.56294/dm2025210` の方法節の α = 0.87 は Morales-García らの検証値で、この標本の係数ではない
- FSSB-SF、感情労働の ELS、AILS、SNAIL、AISES、MAILS の使用研究と短縮版 Koch 2024、K-AAAW、GAAIS Atalla 2024、ハンガリー語版 Rózsa 2025、ATAI 日本語版（OSF のみ）は変更していない

## 採否

- 項目本文は転載しない。WCS の `itemPublicationStatus` は `source-open`。`items` は空
- 第三者サイトの URL は使っていない。`sourceUrl` と使用研究の `url` は DOI
- 値を創作していない。確認的因子分析の二つの適合度、Bartlett の括弧、Table 2 の 0.0.637、EWWS の抄録459名、BITS の ω と α の名前、男性53% と性別平均 0.46、本文の unrelated は、どちらにも寄せていない
- `app.js`、`index.html`、`.wrangler/` は変えていない

## 検証

`node --check data.js`、`node verify-data.mjs`、`node verify-data.mjs --self-test` は通過した。`verify-data.mjs` の件数は、概念143、尺度193、使用研究234、選択ガイド79、関係16。登録版そのものが3・4項目は30。個別使用研究で3・4項目版を確認済みは28。日本語は検証済み27、言語的妥当性確認2、日本語使用例18、翻訳・因子構造等の検討5、関連版14、日本語で独自開発6、開発論文内の日本語検証1、未確認120。追加分の URL に `researchgate.net` はない。`git diff --check` は指摘なし。

ローカルの `index.html` をヘッドレス Chrome で開いた確認では、ヘッダは `v0.121.0 実データ版`、件数は `143概念・193尺度・個別使用研究234件`、フッタは `v0.121.0`。コンソールエラーはなかった。キーワード「WCS」は1件。詳細は12項目、最終確認日 2026-11-04、Study 2 の係数α 0.915、原文リンクは DOI `10.3389/fpsyg.2023.1142309`。項目本文（I notice my co-worker's など）は出ない。キーワード「存在しない尺度zzzz」は該当なし。キーワード「EWWS」の詳細に de Vries ほかの題名、α .81、DOI `10.1371/journal.pone.0272095` が出る。キーワード「BITS」の詳細は使用先行研究2件で、Ma と Xie に加え Costantini ほかと DOI `10.1007/s10869-025-10080-1` が出る。概念一覧に「職場のコンパッション」が出る。研究設計に WCS と EWWS を入れると合計20項目。再読み込み後も選択は2件のまま。検索結果の JSON 出力は `0.121.0` を含む。幅390pxでは詳細ダイアログは幅352px、左19px、ページの横溢れなし。概念カードは幅358px、左16px。幅1280pxでは詳細ダイアログは幅720px、左273px、横溢れなし。
