# v0.90.0 技術レディネス（TRI 2.0）、吸収能力（ACAP-14）、Thriving-10 の使用研究

日付: 2026-10-09

## 追加

- 新概念 `technology-readiness`（技術レディネス / Technology Readiness）。領域は技術受容・情報システム
- 新尺度 `parasuraman-colby-tri-2-16`（TRI 2.0）。Parasuraman & Colby（2015）。Journal of Service Research, 18(1), 59–74。DOI `10.1177/1094670514539730`
- 16項目（楽観・革新・不快・不安の各4、Table 5）。5件法の同意形式。Table 5 の α は .80／.83／.70／.71（N=878）。不安の .77 は採らない
- `usagePermission` は `permission-required`（Table 2 の注。著者の書面許諾）。`itemPublicationStatus` は `not-published`。`items` は空。`japaneseVersionStatus` は `unconfirmed`。`versionType` は `original`。`recordStatus` は `verified-metadata`。`psychometricEvidence` は1件
- 表番号は OnlineFirst 版で確認した。印刷版ページとの対応は未確認のため、ページ番号ではなく表番号で引用する
- 新概念 `absorptive-capacity`（吸収能力 / Absorptive Capacity）。領域は戦略・組織能力
- 新尺度 `flatten-acap-14`（ACAP-14）。Flatten, Engelen, Zahra, & Brettel（2011）。European Management Journal, 29(2), 98–116。DOI `10.1016/j.emj.2010.11.002`
- Table 10（p. 110）の14項目（獲得3・同化4・変換4・活用3）。7件法 Likert 型（p. 105。両端アンカーは確認箇所にない）。標本2（n=361）の α は Table 8 で .73／.85／.93／.80。`usagePermission` は `unknown`。項目本文は空
- 既存 `porath-thriving-10`（Thriving-10）に、これまで無かった `usageStudies` を1件追加。Ni, Zeng, & Zhou（2023）。Frontiers in Psychology。DOI `10.3389/fpsyg.2023.1136470`（PMC10702575）
- 概念112、尺度155、使用研究185、選択ガイド46、関係16。版は v0.89.0 から v0.90.0。日本語未確認は92から94。検証済みレコードは18のまま。登録版そのものが3・4項目の尺度は28のまま（TRI 2.0 は16項目、ACAP-14 は14項目）。使用研究側の3・4項目は26のまま（追加した使用研究は10項目）

## 根拠として確認したこと

- 根拠報告書 `uploads/weekly-evidence-2026-10-09.md`（候補セット 2026-10-09、根拠確認 2026-10-09）。3候補とも ACCEPT。作業開始時の tip は `249539c`（v0.89.0、110概念・153尺度・184使用研究・44選択ガイド・16関係、日本語未確認92、検証済み18）
- TRI 2.0 の項目数、回答形式、α、N=878、許諾注は、出版論文の OnlineFirst 版で確認済みの値だけを使った。第三者の文書共有サイトの URL は載せていない
- ACAP-14 の最終14項目、7件法、標本2の α は、出版論文の印刷ページ（Table 10、Table 8、p. 105、p. 110）で確認済みの値だけを使った。2026-10-01／04 の HOLD（方法・項目表が未取得）は解除した
- Thriving-10 の使用は PMC 全文。フル10項目（学習5・活力5）、7件法、有効372名、Table 2 の α 0.868／0.767／0.809。筆頭は Ni, Zeng, & Zhou であり、Jiang らではない

## 関連概念

- 技術レディネスの `relatedConcepts` は、存在する `perceived-usefulness`、`perceived-ease-of-use`、`perceived-enjoyment`、`consumer-innovativeness`、`internet-privacy-concerns`
- 吸収能力の `relatedConcepts` は、存在する `organizational-learning-capability`、`market-orientation`、`entrepreneurial-orientation`
- 2026-10-07 の判断どおり、関連概念は対称である必要はない。相手側への逆リンクは足さない
- 登録済みの関係レコードは16のまま。関連概念リンクから作る文献調査待ちは、この8組が加わる。これは関係の追加ではない

## 入れなかったもの

- TRI 2.0 と ACAP-14 の項目本文
- Parasuraman & Colby（2015）と Flatten ら（2011）の開発論文を `usageStudies` に入れること
- TRI 1.0（36項目）、Lin & Hsieh（2012）の16項目、Radius Insights の10項目版
- 不安感 α の第三者値 .77
- 中野（2026、DOI `10.11207/soshikikagaku.20260430-1`）を日本語版、`usage-example`、`japaneseEvidence` にすること。15項目・7件法のため `japaneseStatusNote` のみ
- Zahra & George（2002）、研究開発費などの代理指標、後続の11項目短縮
- 標本1の285社と283票を、どちらかに決めて埋めること
- 程・渡邉（2024、DOI `10.11497/jasmin.202411.0_174`）を日本語版にすること
- Thriving-10 の原典 `reverseItems` と `responseFormat`（通例5件法 Likert）の変更。第4・第8項目の逆転は Ni らの質問紙番号
- 同じ論文の DUWAS 10項目を `schaufeli-duwas-10` の使用研究にすること
- CSR-17、Aad-3、UTAUT-SI／FC、P–O fit-3、RC-3 の使用研究、Price Consciousness 5。HOLD のまま

## 検証

- `node --check data.js` 成功
- `node verify-data.mjs` 成功。概念112、尺度155、使用研究185、登録3・4項目28、使用研究側の3・4項目26、選択ガイド46、関係16。日本語は検証済み18、未確認94
- `node verify-data.mjs --self-test` 成功
- `git diff --check` 成功
- 報告書の想定件数（112概念・155尺度・使用研究185・選択ガイド46・関係16・日本語未確認94・検証済み18）と一致した。登録3・4項目が28のままなのは、追加尺度の項目数が16と14だからである。使用研究側の3・4項目が26のままなのは、追加した使用研究が10項目だからである
