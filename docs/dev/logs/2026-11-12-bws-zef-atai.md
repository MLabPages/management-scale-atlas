# 2026-11-12 職場での所属感、ZEF と ATAI の使用研究

- セマンティック版は v0.129.0。概念150、尺度202、使用研究247、選択ガイド86、関係16。`app.js` は変えていない。
- 詳細画面（2026-11-10、1656964・e5c718e・e597bb2）は、原典を上部に、項目数・下位次元・回答形式・版区分を概要に出す。使用件数の未集計欄は外し、`usageEvidence` がある尺度だけ参照ノートになる。今回の追加に `usageEvidence` はない。BWS の下位次元は1件なので、概要は単一次元になる。回答形式は、最初の括弧の前が「10件法」になるように書いた。両端の文言は括弧の中で二つ残した。
- 新規は Belonging at Work Scale。DOI `10.1371/journal.pone.0346786`。Crossref は 2026-04-10、PLOS One、21(4)、e0346786、CC BY 4.0。著者は Dayna Lee-Baggley、Hayam Bakour、Bill Howatt、Debra Gilin、Ehsan Etezad。7項目。Study 1 の α は .95（分析1,535名）。Study 2 の α は .96（分析3,148名）。確認的因子分析は残差相関つきで df = 10。項目本文は転載していない。
- ZEF の使用研究は Emmamally、Wentzel、Brysiewicz（2024）。DOI `10.4102/hsag.v29i0.2675`。Crossref は 2024-11-08、Health SA Gesondheid、29(0)、a2675、CC BY 4.0。15項目。二つの件法は旗艦と同じ。α は 0.96。分析146名。招待の321と316、回答率47.4%と148/316、得点の15–75と 3.12 は寄せていない。
- ATAI の使用研究は Lialiou ほか（2026）。DOI `10.3390/nursrep16040133`。Crossref は 2026-04-13、Nursing Reports、16(4)、133、CC BY 4.0。5項目。11件法は旗艦と同じ。α は受容 0.857、恐れ 0.715。最終276名。方法の全体平均と結果の下位尺度平均は寄せていない。ギリシャ語版の検証論文は under press で開いていない。
- 見送り。タイの ZEF（DOI `10.12688/f1000research.146084.2`）は、全項目を not at all～extremely にし、この標本の α が本文にない。中国の ZEF（DOI `10.1038/s41598-025-04157-3`）は15項目、α=0.85、完了291名まで読めるが、件法が 5-point Likert だけで二つのアンカーを分けていない。今回の1件は Emmamally らにした。品質上の却下ではない。WCS の Rohaeni、開発者共著の Acta Psychologica、Kouvela の11項目、GAAIS のイタリア語・ハンガリー語検証、FoMO の各国語検証、EmpRes 2026 の2件、FSSB の Pan・教師研究・日記研究、Leslie、Dove Press、アパレルと食品のブランド尺度、Carlson 2006、Kacmar 2014、Wayne 2004、Komlenac 2022、GAAIS Atalla 2024、ATAI 日本語版（OSF のみ）、WCS ポルトガル語 Martins、Febrina と Salendu、Satmaz、VIE の独立使用、PELS の開発者による紹介、SLAW-3 の韓国語検証は変更していない。
- 確認は `node verify-data.mjs`、`node verify-data.mjs --self-test`、`git diff --check`。
