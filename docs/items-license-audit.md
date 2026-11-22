# 項目本文の掲載可否（2026-11-23 更新）

対象は v0.129.0 時点の 150概念・202尺度。区分は、公開サイトへ項目本文を転載してよいかを見たもので、尺度の利用条件 `usagePermission` とは別である。根拠は出版版のライセンス、公式配布、原典の項目所在に限る。1行ごとの根拠は [items-license-audit.csv](items-license-audit.csv)。

| 区分 | 定義 | 件数 | 今回の掲載 |
|---|---|---|---|
| A | 項目本文が論文本文・付録・公式配布物にあり、出版版の CC BY や公式の条件が転載の根拠になる | 19 | 14 |
| B | 非商用のみ、NC/ND、条件の食い違い、研究利用のみ、元尺度の権利が残りうる | 29 | 載せない |
| C | 商用・有料、または事前許諾が必須 | 8 | 載せない |
| 不明 | 転載を許すライセンスも、掲載不可の明記も確認できなかった | 146 | 載せない |

合計 202。

## 掲載していた15尺度の再確認

2026-11-23 に掲載中だった15尺度・166項目を、出版社版の項目欄とライセンス、必要に応じて補足資料・公式質問票と照合した。確認日現在の掲載は14尺度・160項目。

| 尺度 | 項目数 | 判定 | 出典と転載根拠 |
|---|---:|---|---|
| SoAS | 13 | 掲載継続 | [Frontiers](https://doi.org/10.3389/fpsyg.2017.01552) の Table 1。CC BY 4.0。 |
| CBE-BL 6 | 6 | 掲載継続 | [Frontiers](https://doi.org/10.3389/fpsyg.2021.692000) の Table 2。CC BY 4.0。 |
| J-MVS-P6 | 6 | 掲載停止（B） | [BMC Psychology](https://doi.org/10.1186/s40359-022-00889-3) の補足資料2で原文を確認。原著には元尺度開発者から得た掲載許可の記載があり、第三者による再掲載まで含むことは確認できなかった。[慶應前野研究室](https://lab.sdm.keio.ac.jp/maenolab/J-MVS-P6.htm) は原文を公開している。 |
| PELS | 24 | 掲載継続 | [Frontiers](https://doi.org/10.3389/fpsyg.2025.1539085) の Table 1 と続表。CC BY 4.0。 |
| CPC-12R | 12 | 掲載継続 | [PLOS ONE](https://doi.org/10.1371/journal.pone.0247114) の [S1 Appendix](https://doi.org/10.1371/journal.pone.0247114.s005)。CC BY 4.0。レジリエンス3項目は [訂正記事](https://doi.org/10.1371/journal.pone.0301794) とも一致。 |
| GWQ-12 | 12 | 掲載継続 | [Frontiers](https://doi.org/10.3389/fpsyg.2023.1099485) の Table 2。CC BY 4.0。 |
| AIAS-4 | 4 | 掲載継続 | [Frontiers](https://doi.org/10.3389/fpsyg.2023.1191628) の本文。候補5項目から第4項目を除いた版。CC BY 4.0。 |
| DAI | 5 | 掲載継続 | [Frontiers](https://doi.org/10.3389/feduc.2024.1323898) の Table 2。スペイン語と英語の両方を照合。CC BY 4.0。 |
| EWWS | 8 | 掲載継続 | [PLOS ONE](https://doi.org/10.1371/journal.pone.0215957) の Appendix。CC BY 4.0。 |
| WCS | 12 | 掲載継続 | [Frontiers](https://doi.org/10.3389/fpsyg.2023.1142309) の Appendix A。CC BY 4.0。 |
| BAT-23 | 23 | 掲載継続 | [開発論文](https://pmc.ncbi.nlm.nih.gov/articles/PMC7766078/) の Appendix B・Table A2。CC BY 4.0。 |
| BAT-12 | 12 | 掲載継続 | [公式英語質問票](https://burnoutassessmenttool.be/wp-content/uploads/2020/08/BAT-English.pdf) の短縮版マークと [短縮版論文](https://doi.org/10.1186/s12889-022-12946-y) で版を確認。項目本文は CC BY 4.0 の開発論文 Appendix B にも収録。 |
| BWS | 7 | 掲載継続 | [PLOS ONE](https://doi.org/10.1371/journal.pone.0346786) の Table 1 を出版 XML で照合。CC BY 4.0。 |
| CX Scale | 18 | 掲載継続 | [Sage 出版版](https://doi.org/10.1177/10946705221126590) の Table 3 と Rights and permissions。CC BY 4.0。 |
| VEQ-AG | 4 | 掲載継続 | [IEEE 出版版 PDF](https://ieeexplore.ieee.org/ielx7/2945/9254192/09199571.pdf) の Table 3 の Agency 部分と第1頁のライセンス表示。CC BY 4.0。 |

BAT-23 と BAT-12 は、論文の CC BY 4.0 に加え、公式が無償・事前許諾不要と書き、同時に改変不可・指定文献の引用必須とする。原文のまま掲載する。

id の不一致はなかった。掲載した尺度の項目数は、いずれも `data.js` の `itemCount` と一致した。

## 区分 A だが掲載していない5尺度

- WSC-8（`kouvonen-wsc-8`）。出版版は CC BY 2.0 で Table 1 に項目がある。今回、項目本文を書き起こせる出版版 PDF を開けなかった。
- ATAI（`sindermann-atai-5`）。出版版は CC BY 4.0 で Table 1 に項目がある。出版版 PDF を開けなかった。投稿稿からは書き起こさない。
- TAI（`kieslich-tai-12`）。出版版は CC BY 4.0。入手できたのは arXiv の投稿稿だけなので、出版版の文言としては使わない。
- VIE（`cho-vie-26`）。出版版は CC BY 4.0。Table 4 と Table 5 で、Human-like movement の第5項目の英語が一致しない。一方に寄せない。
- ZEF（`fauville-zef-15`）。出版版は CC BY 4.0 で Table 3 に項目がある。出版版 PDF を開けなかった。

## 不明のままにした例

Turnover Intention Scale（TIS-6）は、出版版に Creative Commons Attribution の表示がある。項目は例示2件だけで、6項目の全文は論文にない。A にはしない。

グリーンOAの投稿稿だけが CC のものは、出版版の転載許諾にしていない。
