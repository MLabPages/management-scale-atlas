# v0.120.0 定時拡充（職場の退屈、BITS-8 の使用研究）

日付: 2026-11-03

## 追加

- 概念 `workplace-boredom`（職場の退屈）と尺度 `reijseger-dubs-6`（DUBS）を追加した
- `semmer-bits-8` の `usageStudies` を1件追加した（0件から1件）
- 概念142、尺度192、使用研究232、選択ガイド78、関係16。版は v0.119.0 から v0.120.0。`meta.updated` は 2026-11-03。`meta.scope` は `142概念・192尺度`
- 開発論文は `usageStudies` に入れていない
- 日本語の検証論文は `usageStudies` に入れていない
- 既存概念への逆リンクは足していない

## 本文から確認した値

### DUBS

- Crossref。著者 Gaby Reijseger、Wilmar B. Schaufeli、Maria C.W. Peeters、Toon W. Taris、Ilona van Beek、Else Ouweneel。Anxiety, Stress & Coping, 26(5), 508–525。DOI `10.1080/10615806.2012.720676`。issued は 2013-09。ライセンス欄は空
- 確認した全文は、Taylor & Francis のダウンロード表記（University Library Utrecht、2013-09-16）が付いた PDF。ヘッダは Accepted author version posted online 2012-09-10、Published online 2012-09-21。受領 2011-11-30、最終稿受領 2012-08-09。本文の頁送りは印刷頁の組版ではない
- 初期8項目。Sample 1 の主成分分析で2項目を除き、6項目・単一因子。6項目の主成分は分散の51.0%。Sample 1 の6項目の係数αは .80。項目合計相関の平均は .55
- 8項目の表の α .80 は第1成分（第2成分は .46）で、6項目の α とは別
- 旗艦の回答形式は Sample 1 の7件法（0＝never～6＝always）。Sample 2 と Sample 3 は5件法（1＝never～5＝always）
- Sample 1 は N=2,342。Sample 2 は N=1,642。Sample 3 は N=2,331。合計6,315
- 誤差相関なしの CFA は、Sample 2 が CFI .94、RMSEA .15。Sample 3 が CFI .95、RMSEA .14。誤差相関2組を許すと RMSEA は .06 と .08
- Table 2（標準化、N=6,315）の退屈の対角は .87。平均 0.00（SD 1.00）は素点ではない
- 採点（合計か平均か）の明示はない。Sample 1 の M = .84 は7件法の文に添えられ、6項目化のあとかどうかは文だけでは分からない
- 尺度の利用許諾の明記はない。項目本文は転載していない
- 実施言語の明記はない。表の項目は英語。標本はオランダの組織の就業者

### DUBS の日本語版

- Crossref。著者 Michiko Kawada、Akihito Shimazu、Masahito Tokita、Daisuke Miyanaka、Wilmar B Schaufeli。Journal of Occupational Health, 64(1)。DOI `10.1002/1348-9585.12354`。published-online 2022-08-25。published-print 2022-01-13。CC BY-NC-ND 4.0
- 出版社ページは Published 25 August 2022、Accepted 01 August 2022
- 6項目。7件法（0＝never～6＝always）。合計したうえで平均。この標本の α = .88。N=1,358
- Table 5 の英語6項目は、原典が残した6項目と一致する。削除した2項目は表にない
- 方法節は、6項目が落ち着かなさを含む5つの現れ方を測ると書く。項目の対応は Table 5 を採る
- 1因子の CFA は、論文の表記で Δχ²[9] = 271.38、CFI = 0.94、TLI = 0.89、SRMR = 0.04、RMSEA = 0.14
- 第3波は 2020-12-08〜17。第1波1,600名から追跡。回答1,385名（86.6%）。休業または欠損の27名を除き1,358名。平均年齢41.1（SD 10.4）。男性692名（51.0%）
- 第4波の日付は本文が 2020-03-08〜20 と書く。第3波より前になる。年は直していない。再検査は両方に答えた1,229名。本文は間隔を3か月、ICC = 0.62 と書く
- 倫理は Public Health Research Center（20E0004）。UMIN000040683
- Appendix S1 の日本語文は開いていない
- 開発者 Schaufeli は共著者。検証研究であり、使用研究にしない

### BITS-8 の使用研究

- Crossref。著者 Qian Ma、Yuxuan Xie。Behavioral Sciences, 14(7), 600。DOI `10.3390/bs14070600`。2024-07-14。CC BY 4.0
- 出版社ページの本文と Table 2、Appendix A を開いた。8項目。不合理4、不必要4
- 引用7は Semmer ほか（2010）、Applied Psychology, 59, 70–96。登録済みの原典と一致する
- 5件法。アンカーの言葉は本文と付録にない
- この標本の α は 0.88。Table 2 の平均 2.45（SD 0.72、N=285）
- 山東省のエネルギー企業。Time 1 は460名。無効54名を除外。Time 2 は335名（72.83%）。335/460 は72.83%。最終285名（61.96%）
- 男性41.1%。学士75.4%。平均年齢31歳（22–59、SD 6.936）。在籍7.80年（SD 6.779）
- 中国語。Brislin の翻訳・逆翻訳
- 6因子モデルの χ² = 830.620、df = 449。32項目（BITS 8 を含む）と自由度が一致する
- 不当なタスクはサイバーローフィングと r = 0.483（p < 0.001）
- 開発者は著者に含まれない。開発論文・検証研究ではない
- 項目本文は転載していない

## 見送り

- EWWS。Fatemi ら（2024、DOI `10.1080/01612840.2024.2371942`）は抄録が Eudaimonic Workplace Well-being Scale の使用を書く。出版社の本文は開いておらず、項目数・回答形式・αは確認していない
- EWWS。Asiva と Rahmi（DOI `10.54373/imeij.v6i7.4567`）は出版社ページの抄録が EWWS と書く。項目数・回答形式・αはない
- EWWS のインドネシア語版適応（DOI `10.24036/rapun.v13i2.117090`）は検証研究
- BITS-8 の Gahrmann と Klumb（2024）は前回の見送りのまま。ポルトガル語版・スペイン語版の検証研究は使用研究にしない
- FSSB-SF、感情労働の ELS、AILS、SNAIL、AISES、MAILS 短縮版 Koch 2024、K-AAAW、GAAIS Atalla 2024、ATAI 日本語版（OSF登録のみ）は変更していない
- 環境のための組織市民行動（Boiral と Paillé、2012）は出版社の本文を開いていない。候補にはしていない

## 採否

- 項目本文は転載しない。DUBS の `itemPublicationStatus` は `not-published`。`items` は空
- 第三者サイトの URL は使っていない。`sourceUrl` と使用研究の `url` は DOI
- 値を創作していない。DUBS の採点式、Sample 1 の M = .84 を6項目の平均にした断定、Table 2 の 0.00 を素点にした値、BITS のアンカー、第4波の年の書き換えはしていない
- `app.js`、`index.html`、`.wrangler/` は変えていない

## 検証

`node --check data.js`、`node verify-data.mjs`、`node verify-data.mjs --self-test` は通過した。`verify-data.mjs` の件数は、概念142、尺度192、使用研究232、選択ガイド78、関係16。登録版そのものが3・4項目は30。個別使用研究で3・4項目版を確認済みは28。日本語は検証済み27、言語的妥当性確認2、日本語使用例18、翻訳・因子構造等の検討5、関連版14、日本語で独自開発6、開発論文内の日本語検証1、未確認119。`data.js` に `researchgate.net` はない。`git diff --check` は指摘なし。

ローカルの `index.html` をヘッドレス Chrome で開いた確認では、ヘッダは `v0.120.0 実データ版`、件数は `142概念・192尺度・個別使用研究232件`、フッタは `v0.120.0`。コンソールエラーはなかった。キーワード「DUBS」は1件。カードは6項目、検証済み日本語版、利用条件未確認、使用先行研究の表示はない。詳細は最終確認日 2026-11-03、7件法（0＝never）、Sample 1 の係数α .80。原文リンクは DOI `10.1080/10615806.2012.720676`。日本語根拠の DOI `10.1002/1348-9585.12354` が出る。項目本文（At work, time goes by など）は出ない。キーワード「存在しない尺度zzzz」は該当なし。キーワード「BITS」のカードは使用先行研究1件。詳細に Ma と Xie の題名、α 0.88、DOI `10.3390/bs14070600` が出て、項目本文（should be done by someone else）と ResearchGate の URL は出ない。概念一覧に「職場の退屈」が出る。研究設計に DUBS と BITS-8 を入れると合計14項目。再読み込み後も選択は2件のまま。検索結果の JSON と CSV の出力ボタンは押せる。検索データに2件の DOI が出て、ResearchGate の URL はない。幅390pxでは詳細ダイアログは幅352px、左19px、ページの横溢れなし。概念カードは幅358px、左16px、横溢れなし。幅1280pxでは詳細ダイアログは幅720px、左280px。
