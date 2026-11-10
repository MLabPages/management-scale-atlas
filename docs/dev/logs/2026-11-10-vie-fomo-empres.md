# v0.127.0 定時拡充（バーチャル・インフルエンサーの推薦効果、FoMO と EmpRes の使用研究）

日付: 2026-11-10

## 追加

- 概念 `virtual-influencer-effectiveness`（バーチャル・インフルエンサーの推薦効果）と尺度 `cho-vie-26`（VIE）を追加した
- `przybylski-fomo-10` の `usageStudies` を1件追加した（0件から1件）
- `naswall-empres-9` の `usageStudies` を1件追加した（2件から3件）
- 概念148、尺度200、使用研究243、選択ガイド84、関係16。版は v0.126.0 から v0.127.0。`meta.updated` は 2026-11-10。`meta.scope` は `148概念・200尺度`
- 開発論文は `usageStudies` に入れていない
- 既存概念への逆リンクは足していない。関係レコードは追加していない
- `app.js` は変えていない

## 本文から確認した値

### VIE

- Crossref。著者 Yoon Y. Cho。Journal of Theoretical and Applied Electronic Commerce Research, 20(2), 90。DOI `10.3390/jtaer20020090`。issued は 2025-05-01。ライセンスは CC BY 4.0 の vor
- 2026-11-10 に MDPI の HTML を開いた。受稿 2025-03-12、改訂 2025-04-23、受理 2025-04-29、公開 2025-05-01
- 26項目。コミュニケーション10、物語の戦略6、視覚的外見5、人間らしい動き5。初期51項目から、負荷 0.50 未満と、二つ以上の因子へ 0.40 を超えて載る項目を除いた
- 5件法（1＝strongly disagree～5＝strongly agree）
- 探索的因子分析は208名。KMO=0.96。Bartlett の χ²=8393.48（df=1275）。固有値 9.42、8.89、7.88、5.55。説明率 18.48%、17.43%、15.44%、10.88%。累積 62.23%。負荷 0.51–0.76
- 確認的因子分析は209名。χ²=532.97、df=292、p<0.001、TLI=0.94、CFI=0.94、NFI=0.91、SRMR=0.04、RMSEA=0.05
- Table 5 の α は、コミュニケーション 0.94（CR 0.94、AVE 0.61）、物語の戦略 0.90（CR 0.89、AVE 0.58）、視覚的外見 0.84（CR 0.85、AVE 0.53）、人間らしい動き 0.88（CR 0.89、AVE 0.61）。負荷 0.65–0.82。26項目全体の単一 α は書いていない
- 二次の確認的因子分析も n=209。χ²=465.42、df=289、TLI=0.95、CFI=0.96、NFI=0.90、SRMR=0.04、RMSEA=0.05
- 各一次因子から1項目を選んだ4項目の α=0.85 は登録しない。26項目版の係数にしない
- 完了423名から6名を除き417名。208と209の合計は417。男性212、女性205。方法節は18–65歳、考察は18–64歳、表3は >60。一致しないので寄せない
- 表の項目は英語。質問紙の言語の明記はない。考察は Korean respondents と書く
- 表4と表5で、人間らしい動きの最後の項目の英語が一致しない。項目本文は転載しない
- `usagePermission` は `unknown`。`itemPublicationStatus` は `source-open`。`items` は空
- `japaneseVersionStatus` は `unconfirmed`。開発論文は使用研究に入れない
- `relatedConcepts` は `source-credibility` と `brand-anthropomorphism`。逆リンクは足していない
- `verifiedAt` は 2026-11-10

### FoMO の使用研究

- Xu, Y., & Tian, Y.（2023）。Frontiers in Psychiatry, 14, 1301198。DOI `10.3389/fpsyt.2023.1301198`。公開 2023-11-10。CC BY 4.0
- Crossref で著者 Yang Xu、Yu Tian、題名、14巻、論文番号 1301198、issued 2023-11-10、ライセンス CC BY 4.0 が一致
- Przybylski らの10項目。両端は 1＝not at all true of me、5＝extremely true of me。中間のアンカーの再記述はない
- Study 1 の α は 0.85。分析78名（募集80名から2名を除外）。算出人数を78と80のどちらとも書いていない
- 男性35名（44.87%）。平均年齢 20.31（SD 2.03）。男女の平均 24.91 と 24.41 は 10–50 に入り、1–5 には入らない。合計とは断定しない
- Study 2 の72名には、この α を転用しない
- 実施言語の明記はない。開発者は著者に含まれない。検証研究ではない
- 旗艦の5件法と10項目の平均は変えていない。心理測定根拠の `verifiedAt` は 2026-11-09 のまま。尺度の `verifiedAt` は 2026-11-10

### EmpRes の使用研究

- Li, X., & Zhang, J.（2022）。Frontiers in Psychology, 13, 938878。DOI `10.3389/fpsyg.2022.938878`。公開 2022-09-09。CC BY 4.0
- Crossref で著者 Xu Li、Jianyu Zhang、題名、13巻、論文番号 938878、issued 2022-09-09、ライセンス CC BY 4.0 が一致
- Näswall ら（2019）の9項目。中国語。Brislin（2016）と本文が書く翻訳・逆翻訳
- 5件法（1＝strongly disagree～5＝strongly agree）。旗艦の頻度7件法からの変更は adaptation。旗艦は変えていない
- この研究の α は 0.920。算出人数の別記はない
- 有効はリーダー85名（94.4%）、従業員417名（92.7%）。時点2でチームリーダーが従業員レジリエンスを評定する。例示項目は一人称のまま。評定者と人称は一致しないので寄せない
- Table 2 の平均 4.121（SD 0.548）は 1–5 の範囲。平均採点とは断定しない
- 開発者は著者に含まれない。JMP 2019 の表の係数は旗艦にしない
- 心理測定根拠の `verifiedAt` は 2026-11-05 のまま。Mao らは 2026-11-05、Caniëls は 2026-11-07 のまま。尺度の `verifiedAt` は 2026-11-10

## 見送り

- FoMO のスペイン語検証（Current Psychology、DOI `10.1007/s12144-026-09750-x`）、中国語検証（DOI `10.3390/ijerph18189896`）、フランス語検証は、検証研究なので使用研究にしない。中国語版は2因子としても扱われている
- EmpRes の Frontiers in Psychology（DOI `10.3389/fpsyg.2026.1728062`）は、例示項目が上司名を足した文言で、9項目全体が原版と同一とは断定できない
- EmpRes の Frontiers in Psychology（DOI `10.3389/fpsyg.2026.1789646`）は、Näswall ら（2015）を引用し α=0.889、N=631 だが、項目数の明示がない
- FSSB の教師研究（DOI `10.3389/fpsyg.2023.1129486`）は Hammer ら（2009）の4項目と書き、2013年の SF とは明記していない
- FSSB の日記研究（DOI `10.3389/fpsyg.2020.555501`）は4項目と α=0.94 が読める。今回の使用研究は Li と Zhang の1件にした。品質上の却下ではない
- Komlenac ら（2022）、Luo ら（2022）、Yang ら（2023）、Kawasumi の14項目、Carlson 2006 英語版、Kacmar 2014、Wayne 2004、SLAW-1、GAAIS 短縮8項目、DUBS の Li 2024、DAI 後続、WCS ポルトガル語 Martins、Rohaeni 2026、Febrina と Salendu 2023、Satmaz 2026、ATAI 日本語版（OSF）、GAAIS Atalla 2024、GAAIS ハンガリー語 Rózsa 2025、MAILS の使用研究、ELS は、指定の HOLD のまま
- WCS、SLAW-3、PELS、ATAI、日本語版 WFES は、今回の確認範囲で、項目数・回答形式・この標本の α・N を本文で閉じた独立使用を採用しなかった
- アパレル・カスタマイズのブランド価値尺度と、食品産業のブランド・パーソナリティ尺度は、表の α と既存概念との切り分けを閉じる前に見送った
- VIE の4項目は登録しない

## 検証

`node --check data.js`、`node --check app.js`、`node --check verify-data.mjs`、`node --check relation-model.js`、`node --check relations.js`、`node --check collect-literature.mjs`、`node verify-data.mjs`、`node verify-data.mjs --self-test` は通過した。`verify-data.mjs` の件数は、概念148、尺度200、使用研究243、選択ガイド84、関係16。登録版そのものが3・4項目は32。個別使用研究で3・4項目版を確認済みは29。日本語は検証済み28、言語的妥当性確認2、日本語使用例18、翻訳・因子構造等の検討5、関連版14、日本語で独自開発6、開発論文内の日本語検証1、未確認126。`data.js` に `researchgate.net` はない。`git diff --check` は指摘なし。

ローカルの `index.html` をヘッドレス Chrome で開いた確認では、ヘッダは `v0.127.0 実データ版`、件数は `148概念・200尺度・個別使用研究243件`、フッタは `v0.127.0`。コンソールエラーはなかった。キーワード「FoMO」は1件で、使用先行研究は1件。詳細に Xu と 0.85、最終確認日 2026-11-10 が出る。キーワード「EmpRes」は1件で、使用先行研究は3件。詳細に Li と 0.920 が出る。キーワード「存在しない尺度zzzz」は0件。概念「バーチャル・インフルエンサーの推薦効果」の詳細は、判断ガイド1択、関連概念に情報源信頼性と擬人化が出る。VIE の詳細は26項目、係数 0.94、項目は「原著で公開」、項目本文の trustworthy は出ない。研究設計に VIE と FoMO を入れると選択は2件、合計36項目。再読み込み後も選択は2件のまま。検索結果の JSON は `0.127.0` と `cho-vie-26` を含む。CSV の行は「バーチャル・インフルエンサーの推薦効果」と「取り残されることへの恐れ」を含む。幅390pxでは詳細ダイアログは幅352px、左19px、ページの横溢れなし。幅1280pxでは詳細ダイアログは幅720px、左273px、横溢れなし。
