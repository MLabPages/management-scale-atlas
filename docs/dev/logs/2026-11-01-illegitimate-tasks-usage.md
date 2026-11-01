# v0.118.0 定時拡充（不当なタスク、ATAI と AIAS-21 の使用研究）

日付: 2026-11-01

## 追加

- 概念 `illegitimate-tasks`（不当なタスク）と尺度 `semmer-bits-8`（BITS-8）を追加した
- `sindermann-atai-5` の `usageStudies` を1件追加した（1件から2件）
- `wang-wang-aias-21` の `usageStudies` を1件追加した（2件から3件）
- 概念140、尺度190、使用研究229、選択ガイド76、関係16。版は v0.117.0 から v0.118.0。`meta.updated` は 2026-11-01。`meta.scope` は `140概念・190尺度`
- 開発論文は `usageStudies` に入れていない
- 既存概念への逆リンクは足していない

## 本文から確認した値

### BITS-8

- Crossref。著者 Norbert K. Semmer、Franziska Tschan、Laurenz L. Meier、Stephanie Facchin、Nicola Jacobshagen。Applied Psychology, 59(1), 70–96。DOI `10.1111/j.1464-0597.2009.00416.x`。オンライン 2009-12-18、印刷 2010-01。ライセンスは Wiley の vor 条件
- 出版組版を開いた。柱は Applied Psychology: An International Review。登録年は印刷年の2010
- 8項目。不必要なタスク4、不合理なタスク4。二次因子としてもモデル化する
- Study 1 は5件法（1＝never～5＝frequently）。全体 α = .83。N=199。平均 2.16（SD 0.60）
- Study 2 は7件法（1＝never～7＝frequently）。全体 α = .88。N=205。平均 3.19（SD 1.16）。質問紙はフランス語
- 下位尺度の α は本文にない。採点（合計か平均か）の明示はない。平均 2.16 は 1–5 の範囲にあり、8項目合計の理論範囲 8–40 とは一致しない。平均採点とは断定しない
- Study 1 の2構成概念モデルは χ²=139.07、df=75、CFI=.95、TLI=.94、RMSEA=.07。Study 2 は χ²=182.62、df=98、CFI=.97、TLI=.97、RMSEA=.07
- 相関係数の個別値は、確認した表の組版が崩れて読めないため記録していない
- 尺度の利用許諾の明記はない。項目の全文リストはなく、例示のみ。項目本文は転載していない
- Study 1 はドイツ語圏スイス。質問紙言語の明記はない

### ATAI の使用研究

- Crossref。著者 Sara Sáez-Velasco、Mario Alaguero-Rodríguez、Sonia Rodríguez-Cano、Vanesa Delgado-Benito。Sustainability, 17(7), 3096。DOI `10.3390/su17073096`。2025-03-31。CC BY 4.0
- 出版社ページの本文を開いた。ブルゴス大学、ビデオゲームデザイン学位4年。N=23（男性14、女性9、21–44歳、M 24.04）。2024年10–11月
- 5項目。11件法（0＝strongly disagree～10＝strongly agree）。受容は P2 と P4 の平均、拒否は P1・P3・P5 の平均。原版の Fear を rejection と呼ぶ。項目の割当は原版と一致する
- この標本の α は受容 0.614、拒否 0.693。受容の平均 6.43、拒否の平均 4.7
- 実施言語と翻訳手続きの明記はない。開発者は著者に含まれない。N=23 は小さい

### AIAS-21 の使用研究

- Crossref。著者 Sai Liu、Yanchao Xiao、Manhua Nie、Xiaoqiong Yuan、Liping Wang、Mi Wang、Zhimei Wu。BMC Nursing, 24, article-number 1511。DOI `10.1186/s12912-025-04142-1`。2025-11-21。CC BY-NC-ND 4.0
- 出版社ページの本文を開いた。湖南省の看護師。配布478、有効450（94.14%）。女性437名（97.11%）。2025年4月5–15日。倫理は LYEC2025-0062
- 21項目。7件法。合計点。この標本の全体 α は 0.98。得点は 61.95 ± 24.92
- 方法節は原典を2023年と書き、引用文献は2022年。原典の AI構成 α として 0.916 を引用する。原典から記録した値は .961。0.916 はこの標本の α ではない
- 開発者の Wang, Y.-Y. と Wang, Y.-S. は著者に含まれない。同姓の Liping Wang と Mi Wang は別人
- 同じ論文の GAAIS は15項目。登録済みの20項目版の使用研究には入れていない
- 包含基準は中国語の読解。AIAS の翻訳手続きの明記はない

## 見送り

- MAILS の独立した使用研究。Koch ら（2024）の短縮版は本文未確認。エクアドルの高校生を対象とした MDPI 論文は妥当性・測定不変性・潜在プロファイルが題名で、使用研究にしていない
- GWQ-12。ギリシャの Healthcare 論文（DOI `10.3390/healthcare13131574` と `10.3390/healthcare14162552`）は Gaslighting at Work Scale（11項目、loss of self-trust と abuse of power）で、Kukreja & Pandey の12項目ではない。ペルシア語版と韓国語版は検証研究
- GAAIS の追加。劉ら（2025）と重慶の看護師研究は中国語15項目版。登録済み20項目ではない
- CS-12 の日本語版。JAAS 27(3) の論文は7項目で、12項目版ではない
- AILS は開発論文の出版社本文が未取得のまま。劉らが12項目 AILS を使っていることは、開発論文の項目数・α・利用条件の確認に代えない
- LMWB（Luo & Wang、2026、DOI `10.3389/fpsyg.2026.1803662`）。10項目、7件法、Sample 3a の α = 0.937 は本文にある。CFA 表は χ²=4.383、df=2 で、10項目の単一因子モデルの自由度と両立しない。登録しない
- Sindermann ら（2022）の Discover Psychology は開発者チームのため、ATAI の使用研究にしない
- 既存 HOLD（CSR-17、Aad-3、UTAUT-SI／FC、P–O fit-3、RC-3 usage、Price Consciousness 5、ATAI 日本語版 Hitsuwari & Takano 2025、テクノストレス Ragu-Nathan 2008、EmpRes、AISES、K-AAAW、SNAIL、MAILS 短縮版、Güler 2026、Wu 2026）は変更していない

## 採否

- 項目本文は転載しない。BITS-8 の `itemPublicationStatus` は `not-published`。`items` は空
- 第三者サイトの URL は使っていない。`sourceUrl` と使用研究の `url` は DOI
- 値を創作していない。下位尺度の α、採点式、Study 1 の質問紙言語、相関係数の個別値、AIAS の実施言語は空欄か「未確認」
- `app.js`、`index.html`、`.wrangler/` は変えていない

## 検証

`node --check data.js`、`node verify-data.mjs`、`node verify-data.mjs --self-test` は通過した。`verify-data.mjs` の件数は、概念140、尺度190、使用研究229、選択ガイド76、関係16。登録版そのものが3・4項目は30。個別使用研究で3・4項目版を確認済みは28。日本語は検証済み26、言語的妥当性確認2、日本語使用例18、翻訳・因子構造等の検討5、関連版14、日本語で独自開発6、開発論文内の日本語検証1、未確認118。`data.js` に `researchgate.net` はない。

ローカルの `index.html` をヘッドレス Chrome で開いた確認では、ヘッダは `v0.118.0 実データ版`、件数は `140概念・190尺度・個別使用研究229件`、フッタは `v0.118.0`。コンソールエラーはなかった。キーワード「BITS」は1件。カードは8項目、利用条件未確認、使用先行研究の表示はない。詳細は最終確認日 2026-11-01、5件法（1＝never）、全体 α .83、原文リンクは DOI `10.1111/j.1464-0597.2009.00416.x`。項目本文（they have to be done at all など）は出ない。項目欄は「掲載していません」。キーワード「ATAI」の該当カードは使用先行研究2件。詳細の旗艦は11件法のまま。リンクに DOI `10.3390/su17073096` がある。この標本の α 0.614 が出る。キーワード「AIAS-21」の詳細は使用先行研究3件。リンクに DOI `10.1186/s12912-025-04142-1` がある。全体 α 0.98 が出る。旗艦は合計点のまま。空の検索語「存在しない尺度zzzz」は該当なし。概念一覧に「不当なタスク」が出る。研究設計に BITS-8、ATAI、AIAS-21 を入れると合計34項目。再読み込み後も選択は残る。検索データの JSON に3件の DOI が出て、ResearchGate の URL はない。幅390pxでは詳細ダイアログは幅352px、左19px、ページの横溢れなし。概念カードは幅358px、左16px、横溢れなし。
