# v0.105.0 ResearchGate の URL を外す

日付: 2026-10-21

## 範囲

`data.js` の `researchgate.net` は4件だった。README と `docs/` の URL は、同じ3文献を指す作業ログ3件だった。単語としての「ResearchGate」（URL ではない）は、サーバント・リーダーシップの日本語注記や過去の判断メモに残っている。そこは URL ではないので変えていない。

件数は変えていない。131概念・179尺度・207使用研究・67選択ガイド・16関係。書誌、項目、α、利用条件、`sourceLocator` の文言は変えていない。

## 差し替え

| 概念・尺度 | フィールド | 旧 URL | 新 URL | 確認 |
| --- | --- | --- | --- | --- |
| ワーク・ファミリー・コンフリクト / `carlson-wfcs-18` の測定根拠 | `fullTextUrl` | `https://www.researchgate.net/publication/228079357_Construction_and_Initial_Validation_of_a_Multidimensional_Measure_of_Work-Family_Conflict` | `https://doi.org/10.1006/jvbe.1999.1713` | Crossref `https://api.crossref.org/works/10.1006/jvbe.1999.1713`。Dawn S. Carlson、K. Michele Kacmar、Larry J. Williams。題名は Construction and Initial Validation of a Multidimensional Measure of Work–Family Conflict。Journal of Vocational Behavior, 56(2), 249–276。印刷は2000年4月。登録の `url` はもともとこの DOI。 |
| 組織学習能力 / `chiva-olc-14` の測定根拠 | `fullTextUrl` | `https://www.researchgate.net/publication/242026262_Measuring_organisational_learning_capability_among_the_workforce` | `https://doi.org/10.1108/01437720710755227` | Crossref `https://api.crossref.org/works/10.1108/01437720710755227`。Ricardo Chiva、Joaquín Alegre、Rafael Lapiedra。題名は Measuring organisational learning capability among the workforce。International Journal of Manpower, 28(3/4), 224–242。2007年。登録の `url` はもともとこの DOI。 |
| 情報源信頼性 / `ohanian-source-credibility-15` の Koay ら（2022）使用研究 | `fullTextUrl` | `https://www.researchgate.net/publication/351269353_Social_media_influencer_marketing_The_moderating_role_of_materialism` | `https://doi.org/10.1108/EBR-02-2021-0032` | Crossref `https://api.crossref.org/works/10.1108/EBR-02-2021-0032`。Kian Yeik Koay、Man Lai Cheung、Patrick Chin-Hooi Soh、Chai Wen Teoh。題名は Social media influencer marketing: the moderating role of materialism。European Business Review, 34(2), 224–243。オンライン公開は2021-10-14、印刷は2022-02-01。登録の `doi` は `10.1108/ebr-02-2021-0032`、`url` は同じ DOI。 |
| ブランド信頼 / `brand-trust-scale-delgado-ballester` の Rosenberger III（2009）使用研究 | `url` | `https://www.researchgate.net/publication/260268176_Brand_Trust_An_Australian_Replication_of_a_Two-Factor_Structure` | `https://hdl.handle.net/1959.13/920528` | Crossref の `query.title` と `query.bibliographic`（著者 Rosenberger、2008–2011）に、この題名のレコードはなかった。Figshare API `https://api.figshare.com/v2/articles/29017943` の引用は Rosenberger III, Philip (2009)。題名は Brand trust: an Australian replication of a two-factor structure。種別は conference contribution。`publisherPublication` は 2009-01-01。`doi` と `resource_doi` は空。ハンドルは `1959.13/920528`。抄録は Delgado-Ballester らの2因子を、シャンプーについて154名で追試したと書き、登録の標本・文脈と一致する。 |

## URL を空にした件

ない。Rosenberger III（2009）は DOI も、ANZMAC の論文単位の公式ページも確認できなかった。ANZMAC の現行サイトはプロシーディングス全体を Google Drive のフォルダとして示し、2009年の元サイトは国立図書館のウェブアーカイブにあるが、論文ファイル名までは特定できなかった。使用研究は DOI か URL の少なくとも一方が必要なので、URL は空にせず、リポジトリ自身の引用が示すハンドルにした。これは出版社ページではない。ResearchGate、Academia.edu、Semantic Scholar の PDF は使っていない。

## ログの URL

次の作業ログにあった ResearchGate へのリンクを外し、同じセルに既にあった DOI だけを残した。

- `docs/dev/logs/2026-10-01-local-literature-verification.md`（Chiva ら）
- `docs/dev/logs/2026-10-02-local-literature-verification.md`（Carlson ら）
- `docs/dev/logs/2026-10-02-marketing-literature-verification.md`（Koay ら）

## 検証

`verify-data.mjs` は、`http` または `https` でホストが `researchgate.net`（サブドメインを含む）の文字列を、`url` 以外の `fullTextUrl` も含めて失敗させる。自己テストは使用研究の `url` と測定根拠の `fullTextUrl` の両方を見る。
