# v0.75.0 ブランド・ヘイト（Brand Hate-18）と Voice-6／AS-15 の使用研究

日付: 2026-09-28

## 追加

- 概念 `brand-hate`（ブランド・ヘイト）
- 尺度 `zarantonello-brand-hate-18`。Zarantonello, Romani, Grappi, & Bagozzi（2016）, Journal of Product & Brand Management, 25(1), 11–25。DOI `10.1108/JPBM-01-2015-0799`。18項目。使用研究は空。日本語状況は `unconfirmed`
- `van-dyne-lepine-voice-6` の使用研究1件。Kalenychenko, Mozalov, Petukhova, & Yevchenko（2023）。International Journal of Organizational Leadership, 12(Second Special Issue), 18–28。DOI `10.33844/ijol.2023.60355`
- `tepper-abusive-supervision-15` の使用研究1件。Wu & Cao（2015）。Journal of Human Resource and Sustainability Studies, 3, 171–178。DOI `10.4236/jhrss.2015.34023`

## 根拠として確認したこと

- Emerald 抄録と機関リポジトリ抄録: Study 1 で尺度を開発。原典 PDF の表は未開封
- 同一著者の総説（DOI `10.1146/annurev-psych-010419-051008`）: 18項目、6一次元（anger、contempt/disgust、fear、disappointment、shame、dehumanization）。active は前2、passive は後4。αと回答形式はこの総説にも数値がない
- Kalenychenko らの公開 PDF: six-item、Van Dyne and LePine (1998)、自己評定の I 主語、5件法（almost never～almost always）、有効356名。本文 α=.84。Table 1 対角は .74
- Wu & Cao の公開 PDF: Tepper (2000) with 15 items、5件法（never～very often）、α=.97、配布360・有効339、部下の自己報告。DOI の題名は仕事–家庭葛藤と情緒的消耗の媒介

## 入れなかったもの

- Hegner らの Brand Hate 6項目、Kucuk 系、Fetscherin の Sternberg 適応、Romani らの NEB 18項目
- Mitchell & Ambrose（2007）の5項目短縮
- Van Dyne & LePine（1998）と Tepper（2000）の開発論文を usageStudies に入れること
- LePine & Van Dyne（1998）Journal of Applied Psychology を出典とする Voice 使用研究
- CX Scale 18 の第2 usage、Brand Affect 3 と OBE-4 の日本語（HOLD）
- 項目本文
- 原典表を開かずに埋めた Brand Hate の α と回答形式

## 検証

- 作業開始時の origin/main は `d019acd`（v0.74.0）
- `node verify-data.mjs` 成功。概念70、尺度105、使用研究165、日本語未確認54。翻訳・因子構造等の検討4、関連版13。登録版そのものが3・4項目22、使用研究での3・4項目25、目的別ガイド9
- `node verify-data.mjs --self-test` 成功
- `node --check data.js`、`node --check app.js`、`git diff --check` 成功
- ローカルの静的サーバと headless Chrome で、見出しが v0.75.0・70概念・105尺度・使用研究165件になることを確認した。ブランド・ヘイトの検索は Brand Hate-18 の1件で、使用先行研究は未登録、詳細の項目リストは空。概念一覧の検索でもブランド・ヘイトだけが出る。Voice-6 の詳細に Kalenychenko らの使用研究1件（本文α=.84、Table 1 対角 .74）、AS-15 の詳細に Wu & Cao の使用研究1件（α=.97、15項目）が出る。3尺度を研究設計に入れると合計39項目・概念数3。Hegner と Mitchell の尺度レコードはない。幅390pxでも詳細ダイアログは画面内に収まった
