# v0.88.0 心理的資本（PCQ-24）

日付: 2026-10-07

## 追加

- 新概念 `psychological-capital`（心理的資本 / Psychological Capital (PsyCap)）
- 新尺度 `luthans-pcq-24`（PCQ-24）。Luthans, Avolio, Avey, & Norman（2007）。Personnel Psychology, 60(3), 541–572。DOI `10.1111/j.1744-6570.2007.00083.x`
- Hope、Efficacy、Resilience、Optimism の各6項目、計24。6件法（1＝strongly disagree～6＝strongly agree）。等ウェイト。状態的な枠
- `sourceUrl` は Mind Garden の製品ページ（https://www.mindgarden.com/136-psychological-capital-questionnaire）。`doi` は開発論文。画面では DOI リンクと公式資料リンクが分かれる
- `usagePermission` は `commercial`。`itemPublicationStatus` は `not-published`。`items` は空。`japaneseVersionStatus` は `unconfirmed`。`versionType` は `original`。`recordStatus` は `verified-metadata`
- 概念109、尺度152、使用研究183、選択ガイド43、関係16。版は v0.87.0 から v0.88.0。日本語未確認は90から91。検証済みレコードは18のまま。登録版そのものが3・4項目の尺度は27のまま

## 根拠として確認したこと

- 週次根拠 `uploads/weekly-evidence-2026-10-07.md`（2026-10-07）。Candidate 1 は ACCEPT。作業開始時の tip は `3cdfd1a`（v0.87.0、108概念・151尺度・183使用研究）
- 開発論文の確認抜粋は、4構成から各最良6項目、6件法（1＝strongly disagree～6＝strongly agree）
- Görgens-Ekermans & Herbert（2013）、SA Journal of Industrial Psychology, 39(2), Art. #1131。DOI `10.4102/sajip.v39i2.1131`。各6項目と 1–6 Likert。使用研究にはしない
- Mind Garden は Length 24、尺度名 Hope / Efficacy / Resilience / Optimism、Research Permission と License to Administer の分離、Japanese Self Form の品質未保証

## 関連概念

- 新概念の `relatedConcepts` は、存在する `general-self-efficacy`、`work-engagement`、`authentic-leadership`、`thriving-at-work`
- `general-self-efficacy.relatedConcepts` は登録前から `psychological-capital` を指していた。概念を足すとその参照が解決する
- 相手3概念への逆リンクは足さない。一般性自己効力感がワーク・エンゲイジメントを指し、ワーク・エンゲイジメントが一般性自己効力感を指さない、という既存の非対称と同じ扱い

## 入れなかったもの

- PCQ の項目本文
- 二次ソースが挙げる逆転項目番号。開発論文の確認抜粋と Mind Garden 製品ページでは番号が確定していない
- PCQ-12、CPC-12、CPC-12R、PCQJ の同時登録
- 池田ら（2023）CPC-12R（DOI `10.3389/fpsyg.2022.1053601`）を PCQ の日本語 `validated` または `translation-study` にすること
- Luthans ら（2007）と Görgens-Ekermans & Herbert（2013）を `usageStudies` に入れること
- Aad-3（`mackenzie-lutz-aad-3`）の使用研究。HOLD
- UTAUT-SI（`venkatesh-utaut-social-influence-4`）と UTAUT-FC（`venkatesh-utaut-facilitating-conditions-4`）の使用研究。HOLD

## 検証

- `node --check data.js` 成功
- `node verify-data.mjs` 成功。概念109、尺度152、使用研究183、登録3・4項目27、使用研究側の3・4項目26、選択ガイド43、関係16。日本語は検証済み18、使用例16、未確認91
- `node verify-data.mjs --self-test` と `git diff --check` 成功
- 関連概念4件はすべて存在。`general-self-efficacy` は `psychological-capital` を指す。相手3概念への逆リンクはない
- `items` は空、`itemPublicationStatus` は `not-published`、`japaneseVersionStatus` は `unconfirmed`、`usagePermission` は `commercial`、`reverseItems` は空
- Aad-3、UTAUT-SI、UTAUT-FC の `usageStudies` は空のまま
- `psychometricEvidence` は1件にまとめた。2件以上あると、既存のカード要約が「複数環境・日本語での検証根拠あり」になる。日本語は未確認なので、その表示は使わない。Görgens-Ekermans & Herbert（2013）と Mind Garden の内容は、その1件の result と notes、`sourceUrl` に残す
- ローカル静的サーバと headless Chrome で、見出しが v0.88.0・109概念・152尺度・使用研究183件になることを確認した。検索「心理的資本」は PCQ-24 の1件。カードは「日本語版・使用例を未確認」「商用ライセンス」で、使用先行研究バッジはない。カード要約の「実研究での使用版あり（24項目）」は、既存表示が `applicationEvidence` をそう呼ぶためであり、`usageStudies` は0のまま。詳細は24項目、6件法、商用ライセンス、DOI と Mind Garden、項目は「掲載していません」、CPC-12R を別尺度とする注意がある。「複数環境・日本語での検証根拠あり」は出ない。概念詳細の関連は一般性自己効力感、ワーク・エンゲイジメント、真正なリーダーシップ、職場での繁栄。一般性自己効力感の詳細に「心理的資本」が出る。研究設計は24項目、使用研究0、商用ライセンス。検索 CSV/JSON と設計 JSON に DOI があり、項目本文はない。設計アシスタントは PCQ-24 を候補にし、日本語未確認と使用研究未登録を出す。Aad-3、UTAUT-SI、UTAUT-FC の検索に使用先行研究バッジはない。幅390pxの詳細ダイアログは幅352px、左19px、右371pxで画面内に収まった
