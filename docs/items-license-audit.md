# 項目本文の掲載可否（2026-11-13）

対象は v0.129.0 時点の 150概念・202尺度。区分は、公開サイトへ項目本文を転載してよいかを見たもので、尺度の利用条件 `usagePermission` とは別である。根拠は出版版のライセンス、公式配布、原典の項目所在に限る。1行ごとの根拠は [items-license-audit.csv](items-license-audit.csv)。

| 区分 | 定義 | 件数 | 今回の掲載 |
|---|---|---|---|
| A | 出版版が CC BY（または公式に自由利用と明記）で、項目本文が論文本文・付録・公式配布物にある | 20 | 原文を確定できた 15 |
| B | 非商用のみ、NC/ND、条件の食い違い、研究利用のみ、権利が原典に残りうる | 28 | 載せない |
| C | 商用・有料、または事前許諾が必須 | 8 | 載せない |
| 不明 | 転載を許すライセンスも、掲載不可の明記も確認できなかった | 146 | 載せない |

合計 202。

## 掲載した15尺度（166項目）

原文は `items.js`。文言は変えていない。

| 尺度 | id | 項目数 |
|---|---|---|
| Sense of Agency Scale（SoAS） | `sense-of-agency-scale` | 13 |
| Consumer Brand Engagement Beyond the Likes Scale（CBE-BL 6） | `consumer-brand-engagement-beyond-likes-6` | 6 |
| Japanese Material Values Scale – Positive-worded 6-item form（J-MVS-P6） | `j-mvs-p6-ohno-6` | 6 |
| Psychological Empowerment Leadership Scale（PELS） | `schermuly-pels-24` | 24 |
| Compound Psychological Capital Scale – Revised（CPC-12R） | `dudasova-cpc-12r` | 12 |
| Gaslighting at Work Questionnaire（GWQ-12） | `kukreja-pandey-gwq-12` | 12 |
| AI Attitude Scale（AIAS-4） | `grassini-aias-4` | 4 |
| Dependence on Artificial Intelligence Scale（DAI） | `morales-garcia-dai-5` | 5 |
| Eudaimonic Workplace Well-being Scale（EWWS） | `bartels-ewws-8` | 8 |
| Workplace Compassion Scale（WCS） | `mandliya-wcs-12` | 12 |
| Burnout Assessment Tool（BAT-23） | `schaufeli-bat-23` | 23 |
| Burnout Assessment Tool – 12 item（BAT-12） | `hadzibajramovic-bat-12` | 12 |
| Belonging at Work Scale（BWS） | `lee-baggley-bws-7` | 7 |
| Customer Experience Scale for Omnichannel Environments（CX Scale） | `customer-experience-scale-gahler-18` | 18 |
| Virtual Embodiment Questionnaire – Control / Agency Subscale（VEQ-AG） | `virtual-embodiment-questionnaire-agency` | 4 |

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
