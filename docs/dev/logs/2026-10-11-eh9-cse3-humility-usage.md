# v0.92.0 謙虚なリーダーシップ（EH-9）、創造的自己効力感（CSE-3）、EH-9 の使用研究

日付: 2026-10-11

## 追加

- 新概念 `humble-leadership`（謙虚なリーダーシップ / Humble Leadership (Expressed Humility)）。領域は組織行動・人的資源
- 新尺度 `owens-expressed-humility-9`（EH-9）。Owens, Johnson, & Mitchell（2013）。Organization Science, 24(5), 1517–1538。DOI `10.1287/orsc.1120.0795`
- 9項目（正確な自己認識への意欲・他者の強みの評価・教えられやすさが各3）。3因子は高次の expressed humility に載る反射型。他者評定。Study 1 は strongly disagree～strongly agree の Likert。Study 3 は five-point（5＝strongly agree）。Sample A（N=164）の α=.94。Sample D（N=511）の α=.95。Study 3 の Table 7 対角は .97（従業員704名）。旗艦αは .94
- `usagePermission` は `permission-required`（© 2013 INFORMS。著者PDFの terms で商業利用は出版社許諾）。`itemPublicationStatus` は `not-published`。`items` は空。`japaneseVersionStatus` は `unconfirmed`。`versionType` は `original`。`recordStatus` は `verified-metadata`。`psychometricEvidence` は1件
- 新概念 `creative-self-efficacy`（創造的自己効力感 / Creative Self-Efficacy）。領域は組織行動・人的資源
- 新尺度 `tierney-farmer-cse-3`（CSE-3）。Tierney & Farmer（2002）。Academy of Management Journal, 45(6), 1137–1148。登録 DOI `10.5465/3069429`（JSTOR 別名 `10.2307/3069429`）
- 3項目・単一次元。7件法（1＝very strongly disagree～7＝very strongly agree）。α は manufacturing .83、operations .87。この回答形式と α は Abulela（2024）の原典要約。`usagePermission` は `unknown`。項目本文は空
- 既存 `owens-expressed-humility-9` に `usageStudies` を1件追加。Qian, Li, Song, Wang, Wang, Chang, & Xiong（2018）。Frontiers in Psychology, 9, 563。DOI `10.3389/fpsyg.2018.00563`（CC BY）
- 概念116、尺度159、使用研究187、選択ガイド50、関係16。版は v0.91.0 から v0.92.0。日本語未確認は96から98。検証済みレコードは18のまま。登録3・4項目は28から29。使用研究側の3・4項目は26のまま

## 根拠として確認したこと

- 作業開始時の tip は `71f52d5`（v0.91.0、114概念・157尺度・186使用研究・48選択ガイド・16関係、日本語未確認96、検証済み18）
- EH-9 の項目数、因子、他者評定、回答の両端、α、標本人数は、著者公開PDF（https://faculty.washington.edu/mdj3/Humility%20and%20performance.pdf）の Table 2、Table 3、Study 1、Study 3 Method、Table 7。書誌は Crossref（Bradley P. Owens、Michael D. Johnson、Terence R. Mitchell。2013年10月、24(5), 1517–1538）
- PDF 抽出で小数が崩れた適合度のカイ二乗や再検査相関は記録していない。旗艦αは Sample A の .94。Study 3 の .97 は対角の別値
- 著者PDFの terms は、研究・教育・私的研究を認め、商業利用と自動ダウンロードは出版社の明示的承認がなければ不可（permissions@informs.org）
- CSE-3 の書誌は Crossref。保持 DOI は `10.2307/3069429`、AOM の版リンクは `10.5465/3069429`。登録 DOI は AOM 形式。著者名はイニシャルのまま（P. Tierney、S. M. Farmer）
- 7件法と α は Abulela（2024-01-19、DOI `10.3389/feduc.2023.1306532`）が Tierney & Farmer（2002）を要約した段落。AMJ 原典の表は未開封。項目の通例文言は確認したが、アトラスには書いていない
- EH-9 の使用は Frontiers 全文。フル9項目。中国のホテルグループ。上司64名から各5名の部下を無作為抽出、有効は上司57名と部下248名。Brislin（1980）の翻訳・逆翻訳。7件法。α=0.93。サンプル項目は写していない

## 関連概念

- 謙虚なリーダーシップの `relatedConcepts` は、存在する `inclusive-leadership`、`servant-leadership`、`empowering-leadership`、`authentic-leadership`、`ethical-leadership`、`leader-member-exchange`
- 創造的自己効力感の `relatedConcepts` は、存在する `general-self-efficacy`、`psychological-capital`、`innovative-work-behavior`
- 創造的パーソナルアイデンティティは概念がないので、decisionGuide の注意にだけ書く
- 2026-10-07 の判断どおり、関連概念は対称である必要はない。相手側への逆リンクは足さない
- 登録済みの関係レコードは16のまま。関連概念リンクから作る文献調査待ちが増える。これは関係の追加ではない

## 入れなかったもの

- EH-9 と CSE-3 の項目本文。Qian らのサンプル項目も転載しない
- Owens ら（2013）と Tierney & Farmer（2002）の開発論文を `usageStudies` に入れること
- Ou ら（2014）の19項目、HEXACO honesty-humility、modesty
- Karwowski らの SSCS CSE-6、Beghetto（2006）の3項目、Abbott（2010）の多次元版
- PCQ-24 の Efficacy 下位を CSE-3 と同一視すること
- `10.2307/3069309`（別論文）
- Abulela が同じ段落で述べる初期プール13項目と従業員233名。原典の表を開いていないため、尺度レコードの確定値にはしない
- EH-9 の原典 `responseFormat`（5件法）の変更。Qian らの7件法は adaptation
- Qian ら（2018）を日本語の `usage-example` や `japaneseEvidence` にすること
- 既存概念への逆リンク
- CSR-17、Aad-3、UTAUT-SI／FC、P–O fit-3、RC-3、Price Consciousness 5、Brand Affect 3／OBE-4 の日本語、CX Scale 18 の第2使用研究、Mitchell–Ambrose の5項目、Brand Hate-18 の使用研究、自己一致性（Sirgy）、サービス・リカバリー公正（Tax ら）、`ahearne-leb-10` の候補使用研究、Voice-6 の4項目抜粋。HOLD のまま

## 検証

- `node --check data.js` 成功
- `node verify-data.mjs` 成功。概念116、尺度159、使用研究187、登録3・4項目29、使用研究側の3・4項目26、選択ガイド50、関係16。日本語は検証済み18、未確認98
- `node verify-data.mjs --self-test` 成功
- 想定件数（116概念・159尺度・使用研究187・選択ガイド50・関係16・日本語未確認98・検証済み18）と一致した。登録3・4項目が29なのは、CSE-3 の `itemCount` が3だからである。使用研究側の3・4項目が26のままなのは、追加した使用研究が9項目だからである
- ローカル静的サーバと headless Chrome で、見出しが v0.92.0・116概念・159尺度・個別使用研究187件になることを確認した。検索「謙虚なリーダーシップ」に EH-9 が出る。カードは「申請が必要」「日本語版・使用例を未確認」「使用先行研究 1件」で、「複数環境・日本語での検証根拠あり」は出ない。詳細は9項目、5件法、α=.94、DOI `10.1287/orsc.1120.0795`、項目は「掲載していません」。Qian らの9項目、248名、α=0.93、7件法、DOI `10.3389/fpsyg.2018.00563` がある。原典の回答形式は5件法のまま。項目の通例文言はない
- 検索「創造的自己効力感」は CSE-3 の1件。使用先行研究バッジはなく、「複数環境・日本語での検証根拠あり」も出ない。詳細は3項目、7件法、α=.83／.87、DOI `10.5465/3069429`、項目非掲載。検索結果 JSON にこの DOI があり、項目本文はない。検索「CSR-17」に使用先行研究バッジはない
- 概念詳細の謙虚なリーダーシップは、インクルーシブ・リーダーシップ、サーバント、エンパワーリングを関連に出す。インクルーシブ・リーダーシップの関連概念に謙虚なリーダーシップはない。創造的自己効力感の注意に、一般性自己効力感、PCQ の Efficacy、創造的パーソナルアイデンティティがある
- 設計アシスタントは両概念を選ぶと、EH-9（9項目）と CSE-3（3項目）、合計12項目。EH-9 の採用根拠を Qian らの使用研究にすると、設計 JSON に DOI `10.3389/fpsyg.2018.00563` と `10.5465/3069429` が出る。先行研究 CSV に使用研究の DOI がある。項目本文はない
- 関係画面で謙虚なリーダーシップを中心にすると、インクルーシブ・リーダーシップが関連概念の調査待ちに出る。根拠つき関係は16のまま
- 幅390pxの EH-9 詳細ダイアログは幅352px、左19px、右371pxで画面内に収まった
