# v0.89.0 知覚楽しさ（ENJ-3）と MBI-GS の使用研究

日付: 2026-10-09

## 追加

- 新概念 `perceived-enjoyment`（知覚楽しさ / Perceived Enjoyment）。領域は技術受容・情報システム
- 新尺度 `davis-bagozzi-warshaw-enjoyment-3`（ENJ-3）。Davis, Bagozzi, & Warshaw（1992）。Journal of Applied Social Psychology, 22(14), 1111–1132。DOI `10.1111/j.1559-1816.1992.tb00945.x`
- 3項目。7件法の両極形式。2項目は likely/unlikely、1項目は unpleasant/pleasant。定義は p. 1113。研究1は α=.81（MBA学生 n=200、Table 1）。研究2はシステム名入りの would 形式で α=.92（n=80、p. 1124）
- `itemPublicationStatus` は `not-published`。`items` は空。`japaneseVersionStatus` は `unconfirmed`。`versionType` は `original`。`recordStatus` は `verified-metadata`。`usagePermission` は `unknown`
- 既存 `maslach-burnout-inventory-general-survey`（MBI-GS）に、これまで無かった `usageStudies` を1件追加。Seibt & Kreuzfeld（2021）。IJERPH, 18(4), 1535。DOI `10.3390/ijerph18041535`（PMC7914652）
- 概念110、尺度153、使用研究184、選択ガイド44、関係16。版は v0.88.0 から v0.89.0。日本語未確認は91から92。検証済みレコードは18のまま。登録版そのものが3・4項目の尺度は27から28（ENJ-3 が3項目のため）。使用研究側の3・4項目は26のまま

## 根拠として確認したこと

- 週次根拠 `uploads/weekly-evidence-2026-10-08.md`（候補セット 2026-10-08、根拠確認 2026-10-09）。Candidate 1 と 2 は ACCEPT。作業開始時の tip は `1f23a6d`（v0.88.0、109概念・152尺度・183使用研究・43選択ガイド・16関係、日本語未確認91）
- ENJ-3 の項目数、回答形式、α、標本、ページは、出版論文のスキャンと二次ソースの一致で確認済みの値だけを使った。第三者の文書共有サイトの URL は載せていない
- MBI-GS の使用は PMC 全文。16項目（5＋5＋6）、0–6件法、この標本のα 0.79〜0.84（下位尺度別の内訳なし）、教員12,014名。Kalimo 式の総合得点は adaptation に書いた。採点方針（総合得点に統合しない）は変えていない

## 関連概念

- 新概念の `relatedConcepts` は、存在する `perceived-usefulness`、`perceived-ease-of-use`、`social-influence`、`facilitating-conditions`、`flow`
- 2026-10-07 の判断どおり、関連概念は対称である必要はない。相手5概念への逆リンクは足さない
- 登録済みの関係レコードは16のまま。関連概念リンクから作る文献調査待ちは、この5組が加わり269から274になる。これは関係の追加ではない

## 入れなかったもの

- ENJ-3 の項目本文
- Davis ら（1992）の開発論文を `usageStudies` に入れること
- UTAUT2 の快楽動機、van der Heijden（2004）の意味微分4組、Moon & Kim の playfulness、Koufaris の enjoyment
- 中川（2021、DOI `10.32299/jsmdreview.5.2_41`）を日本語版、`usage-example`、`japaneseEvidence` にすること
- Bodendieck ら（2022、DOI `10.1186/s12875-022-01831-7`）。項目数とαが本文にない
- Pina ら（2022、DOI `10.1371/journal.pone.0268636`）。予備
- CSR-17（`turker-perceived-csr-17`）の使用研究。HOLD。Cek & Eyupoglu（2019、DOI `10.4102/sajbm.v50i1.1481`）は Methods で17項目とαを述べるが、Table 3 の測定モデルは削減後の指標であり、フル17項目の使用として受理しない
- P–O fit-3、RC-3、Aad-3、UTAUT-SI／FC、Price Consciousness 5

## 検証

- `node --check data.js` 成功
- `node verify-data.mjs` 成功。概念110、尺度153、使用研究184、登録3・4項目28、使用研究側の3・4項目26、選択ガイド44、関係16。日本語は検証済み18、使用例16、未確認92
- `node verify-data.mjs --self-test` と `git diff --check` 成功
- 関連概念5件はすべて存在。相手側からの逆リンクはない。`items` は空。`psychometricEvidence` は1件。CSR-17 の `usageStudies` は空のまま。第三者共有サイトの URL は `data.js` にない
- 報告書の選択ガイド44、関係16、日本語未確認92は一致した。登録3・4項目が28なのは、ENJ-3 の `itemCount` が3だからである
- ローカル静的サーバと headless Chrome で、見出しが v0.89.0・110概念・153尺度・使用研究184件になることを確認した。検索「知覚楽しさ」は ENJ-3 の1件。使用先行研究バッジはなく、「複数環境・日本語での検証根拠あり」も出ない。詳細は3項目、両極形式、α=.81／.92、DOI、中川（2021）を日本語版にしない注意、項目は「掲載していません」。検索「MBI-GS」は使用先行研究1件。詳細に Seibt & Kreuzfeld、12,014名、Kalimo の重み、α 0.79、DOI へのリンク、項目非掲載がある。検索「CSR-17」に使用先行研究バッジはなく、Cek & Eyupoglu の DOI もない。研究設計で ENJ-3 と MBI-GS を並べ、MBI-GS の採用根拠を Seibt らの使用研究にすると、画面と設計 JSON・先行研究 CSV に DOI `10.3390/ijerph18041535` と16項目が出る。検索結果の CSV/JSON にも ENJ-3 の DOI があり、項目本文も第三者共有サイトの URL もない。概念詳細の関連は知覚有用性、知覚容易性、社会的影響、促進条件、フロー。注意に UTAUT2 と van der Heijden がある。知覚有用性の詳細に「知覚楽しさ」はない。設計アシスタントは ENJ-3 を候補にし、日本語未確認を出す。関係画面で知覚楽しさを中心にすると、文献調査待ちが5件。幅390pxの詳細ダイアログは幅352px、左19px、右371pxで画面内に収まった
