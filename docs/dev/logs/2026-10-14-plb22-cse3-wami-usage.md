# v0.95.0 パラドキシカル・リーダーシップ（PLB-22）、CSE-3 と WAMI-10 の使用研究

日付: 2026-10-14

## 追加

- 新概念 `paradoxical-leadership`（パラドキシカル・リーダーシップ / Paradoxical Leadership）。領域は組織行動・人的資源
- 新尺度 `zhang-plb-22`（PLB-22）。Zhang, Y., Waldman, D. A., Han, Y.-L., & Li, X.-B.（2015）。Academy of Management Journal, 58(2), 538–566。DOI `10.5465/amj.2012.0995`。`sourceUrl` は DOI のみ
- 22項目・5次元（UI 5、SO 5、CA 4、RF 4、DC 4）。26項目から Sample 2 の EFA で交差負荷4項目を削除。5件法の頻度（0＝not at all～4＝a lot）。部下による直属上司の評定。double-barreled 設計（意図的）。反射型の一次・二次因子。旗艦 α は Sample 5（N=478）の Table 5 対角 .94
- `usagePermission` は `unknown`。`itemPublicationStatus` は `not-published`。`items` は空。`japaneseVersionStatus` は `unconfirmed`。`versionType` は `original`。`recordStatus` は `verified-metadata`。`psychometricEvidence` は1件。`usageStudies` は空
- 既存 `tierney-farmer-cse-3` に `usageStudies` を1件追加。それまで空。Tu, Cheng, & Liu（2019）。Frontiers in Psychology, 10, 1215。DOI `10.3389/fpsyg.2019.01215`（CC BY 4.0）
- 既存 `steger-wami-10` に `usageStudies` を1件追加。それまで空。Letona-Ibañez, Martinez-Rodriguez, Ortiz-Marques, Carrasco, & Amillano（2021）。IJERPH, 18(10), 5383。DOI `10.3390/ijerph18105383`（CC BY 4.0）
- 概念119、尺度162、使用研究195、選択ガイド53、関係16。版は v0.94.0 から v0.95.0。日本語未確認は99から100。検証済みレコードは18のまま。日本語使用例は17のまま。登録3・4項目は29のまま。使用研究側の3・4項目は26から27

## 根拠として確認したこと

- 作業開始時の tip は `c0d7665`（v0.94.0、118概念・161尺度・193使用研究・52選択ガイド・16関係、日本語未確認99、検証済み18、日本語使用例17）。`origin/main` と一致
- 数値は添付の根拠メモ（2026-10-14）に確認済みの値だけを使った。メモにない値は作っていない
- PLB-22 の書誌は Zhang, Y., Waldman, D. A., Han, Y.-L., & Li, X.-B.（2015）。題名 Paradoxical leader behaviors in people management: Antecedents and consequences。所属は Peking University、Arizona State University、Shanghai University of Finance and Economics、East China University of Science and Technology（Crossref と一致）。著者と所属の対応はメモにないため書かない。著者のフルネームは補わない
- 22項目と5次元、5件法（0＝not at all～4＝a lot）、他者評定、double-barreled、二次因子、旗艦 α=.94（Sample 5, N=478）、次元別の信頼性、再検査 .69、二次因子の適合は、メモが出版版（VoR）の Study 1・Table 1・2・3・5・7・Study 2 Measures で確認した範囲
- Sample 4 Time 2 の .84、.90、.91、.90、.85 は、Time 1 の DC、RF、UI、CA、SO と同じ順の続きとして記録した。172 と 116 は時点に割り当てない
- 実施言語は中国語（脚注2、Brislin 1980）。項目は英語で論文に掲載
- CSE-3 の使用は Frontiers 全文。フル3項目。中国の大手通信会社、195組（回答率84.8%）。女性53.3%、平均年齢28.59歳。CSE は従業員の自己評定（時点1）。中国語（Brislin 1986）。α=0.83（Measures 本文と Table 2 対角）。7件法の上端誤記は adaptation。項目本文は写していない
- WAMI-10 の使用は IJERPH 全文。フル10項目のスペイン語訳。5件法（1＝totally untrue～5＝totally true）。Table 1 対角の α=0.899（N=814）。本文の 0.84 は本研究の値と明記がない。就業者814名（スペイン）。下位次元の α は報告なし。項目本文は写していない

## 採否

- `sourceUrl` は DOI。ResearchGate 等の第三者ホスト URL は保存しない
- Table 2 に項目文があっても転載しない。`usagePermission` は `unknown`
- `psychometricEvidence` は1件にまとめる。使用研究がない尺度を複数件に分けると、カード要約が「複数環境・日本語での検証根拠あり」になる
- 旗艦 α は Sample 5 の .94。Sample 3 subsample 1 の .95 と、Study 2 の上司集計 .94 では置き換えない
- 開発論文（Study 1・Study 2）は `usageStudies` に入れない
- `relatedConcepts` は存在する `humble-leadership`、`leader-member-exchange`、`transformational-leadership` だけ。取引型と家父長型は未登録なのでリンクにしない。既存概念への逆リンクは足さない。既存のリーダーシップ概念の choice／label は変えない
- CSE-3 と WAMI-10 の旗艦 `responseFormat` は変えない。Tu らの上端誤記と、Letona-Ibañez らの totally untrue～totally true は adaptation
- Tu らの中国語と Letona-Ibañez らのスペイン語は、日本語の `usage-example` にしない
- WAMI の本研究の α は 0.899。本文の 0.84 は注記のみ
- Tu らの WOS 10項目（adapted）は CSE-3 に入れない

## 関連概念

- パラドキシカル・リーダーシップの `relatedConcepts` は、存在する `humble-leadership`、`leader-member-exchange`、`transformational-leadership`
- 2026-10-07 の判断どおり、関連概念は対称である必要はない。相手側への逆リンクは足さない
- 登録済みの関係レコードは16のまま。関連概念リンクから作る文献調査待ちが増える。これは関係の追加ではない

## 入れなかったもの

- PLB-22、CSE-3、WAMI-10 の項目本文。論文に項目があっても転載しない
- Zhang ら（2015）の開発論文を `usageStudies` に入れること
- PsycTESTS の尺度データセットを旗艦 DOI の代わりにすること。DOI 番号はメモにないため書かない
- 第三者ホストの URL
- 既存概念への逆リンク。新規の関係レコード。既存リーダーシップ概念の choice／label の変更
- Tu ら（2019）の WOS 10項目。旗艦の `responseFormat` を変えること。上端誤記を strongly agree と訂正して書くこと
- Letona-Ibañez ら（2021）の本文 0.84 を本研究の α にすること。旗艦の `responseFormat` を変えること
- PMC9598897（CSE の例示項目が原典と一致しない）。Junça-Silva ら（2022）の WAMI（CC BY ではない）。Matsuo らの EH-9 日本語。PSI-18
- CSR-17、Aad-3、UTAUT-SI／FC、P–O fit-3、RC-3、Price Consciousness 5、LAWS の Ayase／Nagano、Brand Affect 3／OBE-4 の日本語、Mitchell–Ambrose 5、CX Scale 18 の第2使用、Brand Hate-18 の使用、LEB-10 の Khan（2025）、Voice-6 の Chen（2023）、Frontiers 2020 の JIS、自己一致性、サービス・リカバリー公正、`ahearne-leb-10`、DC-14、PSI。HOLD のまま

## 検証

- `node --check data.js` 成功
- `node --check app.js` 成功（`app.js` は変更していない）
- `node verify-data.mjs` 成功。概念119、尺度162、使用研究195、登録3・4項目29、使用研究側の3・4項目27、選択ガイド53、関係16。日本語は検証済み18、言語的妥当性確認2、日本語使用例17、翻訳・因子構造等の検討5、関連版の日本語根拠13、日本語で独自開発6、開発論文内の日本語検証1、未確認100
- `node verify-data.mjs --self-test` 成功
- `git diff --check` 成功
- 想定件数（119概念・162尺度・使用研究195）と一致した。選択ガイドが53なのは新概念に判断ガイドを1件足したからである。日本語未確認が100なのは PLB-22 が `unconfirmed` だからである。使用研究側の3・4項目が27なのは、Tu らの使用が3項目だからである。登録3・4項目が29のまま、関係が16のまま、検証済み18と使用例17がそのままなのは、追加した尺度が22項目で、追加した使用研究が3項目と10項目で、日本語状況を変えていないからである
- ローカル静的サーバと headless Chrome で、見出しが v0.95.0・119概念・162尺度・個別使用研究195件になることを確認した。検索「パラドキシカル」に PLB-22 が出る。カードは「利用条件未確認」「日本語版・使用例を未確認」で、使用先行研究バッジは出ない。「複数環境・日本語での検証根拠あり」も出ない。`applicationEvidence` があるため要約は「実研究での使用版あり（22項目）」で、これは開発論文の項目数であり使用研究ではない。原文リンクは DOI。詳細は22項目、5件法の頻度（0＝not at all～4＝a lot）、DOI `10.5465/amj.2012.0995`、項目は「掲載していません」。Sample 5 の .94 がある。使用先行研究は未登録。項目本文はない
- 検索「創造的自己効力感」の CSE-3 は使用先行研究 1件。詳細の原典は7件法（1＝very strongly disagree～7＝very strongly agree）のまま。Tu らの α=0.83、中国語、上端の誤記、DOI `10.3389/fpsyg.2019.01215` がある。項目本文はない
- 検索「WAMI」の WAMI-10 は使用先行研究 1件。詳細の原典は通例5件法（absolutely untrue–absolutely true）のまま。Letona-Ibañez らの 0.899、totally untrue～totally true、DOI `10.3390/ijerph18105383` がある。本文の 0.84 は注記にとどまる
- 比較表に PLB-22、CSE-3、WAMI-10 が出る。合計35項目。旗艦の回答形式はそれぞれの原典のまま
- 研究設計で CSE-3 と WAMI-10 の採用根拠を使用研究にすると、設計 JSON に DOI `10.5465/amj.2012.0995`、`10.3389/fpsyg.2019.01215`、`10.3390/ijerph18105383` がある。先行研究 CSV に Tu と Letona-Ibañez がある。検索結果 JSON の PLB-22 は `items` が空で、ResearchGate の URL はない
- 概念詳細のパラドキシカル・リーダーシップは、謙虚なリーダーシップ、リーダー・メンバー交換関係、変革型リーダーシップを関連に出す。謙虚なリーダーシップの関連概念にパラドキシカル・リーダーシップはない
- 関係画面でパラドキシカル・リーダーシップを中心にすると、謙虚なリーダーシップが出て文献調査待ちである。登録済みの関係レコードは16のまま
- 設計アシスタントは3概念を選ぶと、PLB-22（22項目）、CSE-3（3項目）、WAMI-10（10項目）、合計35項目
- 幅390pxの PLB-22 詳細ダイアログは幅352px、左19px、右371pxで画面内に収まった
