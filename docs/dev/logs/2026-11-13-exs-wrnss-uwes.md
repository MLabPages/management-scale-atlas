# 2026-11-13 従業員経験、職場の関係欲求の満足、UWES-9 の使用研究

- セマンティック版は v0.131.0。概念152、尺度204、使用研究248、選択ガイド88、関係16。`app.js`、`items.js`、`index.html`、CSS、`verify-data.mjs` は変えていない。項目本文は載せていない。
- 詳細画面の概要は、項目数・下位次元・回答形式・版区分を上部に出す。EXS の下位次元は5件で、Table 4 の項目行は各4。W-RNSS の下位次元は5件で、各次元の項目数は本文にない。回答形式は、最初の括弧の前が件法になるように書いた。
- 新規は Employee Experience Scale。DOI `10.1057/s41599-025-04926-5`。Crossref は 2025-05-02、Humanities and Social Sciences Communications、12、605、CC BY-NC-ND 4.0。著者は Pengcheng Yang、Suchuan Zhang。20項目。確認的因子分析の α は 0.87（427名）。探索的因子分析の表の全体 0.76 と、本文の36項目の 0.76 は寄せていない。項目本文は転載していない。掲載候補にはしていない。
- 新規は Workplace Relational Needs Satisfaction Scale。DOI `10.3389/fpsyg.2024.1419765`。Crossref は 2024-06-27、Frontiers in Psychology、15、1419765、CC BY 4.0。著者は Veronika Hanc、Gregor Žvelc、Boštjan Bajec。20項目。Table 5 の全体 α は 0.93（273名）。下位は 0.89、0.87、0.83、0.77、0.81。抄録の不等号は寄せていない。バイファクターの AIC は抄録 13289.27、表 13289.72。一般の RNSS は未登録。原著者は共著者なので使用研究に入れていない。20項目の全文表はない。掲載候補にはしていない。
- UWES-9 の使用研究は同じ Hanc ら（2024）。9項目。0＝never～6＝always, every day。旗艦の7件法と同じ件数。α は全体 0.93、活力 0.84、熱意 0.88、没頭 0.83。スロベニア語。Tement（2014）の DOI は転記していない。
- 見送り。SMMWC（DOI `10.1371/journal.pone.0319429`）は15項目と5件法まで読めるが、この標本の α がない。ソーシャルメディア疲労（DOI `10.1371/journal.pone.0245464`）は ω=0.83 で、係数αがない。LMWB（DOI `10.3389/fpsyg.2026.1803662`）は職場のガスライティングおよび虐待的監督と重なり、確認的因子分析の df=2 は10項目と一致しない。FoMO の eスポーツ論文（DOI `10.3389/fpsyg.2026.1998160`）は件法が never～always。SLAW-3 の韓国語検証、WCS の Rohaeni と開発者共著、GWQ-12 の検証と別尺度、PELS の開発者による紹介、VIE の独立使用、指定の HOLD は変更していない。
- 確認は `node --check data.js`、`node --check items.js`、`node --check verify-data.mjs`、`node verify-data.mjs`、`node verify-data.mjs --self-test`、`git diff --check`。
