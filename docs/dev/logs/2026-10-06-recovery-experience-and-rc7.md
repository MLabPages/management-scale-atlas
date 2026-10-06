# v0.87.0 リカバリー経験（REQ-16／REQ-J）と関係的コミットメント原版7項目

日付: 2026-10-06

## 追加・修正

- 新概念 `recovery-experience`（リカバリー経験 / Recovery Experiences）
- 新尺度 `sonnentag-req-16`（REQ-16）。Sonnentag & Fritz（2007）。Journal of Occupational Health Psychology, 12(3), 204–221。DOI `10.1037/1076-8998.12.3.204`
- 4下位尺度×4項目＝16。5件法（1＝do not agree at all～5＝fully agree）。仕事後の自由な夕方。較正／交差検証のαは心理的距離 .84／.85、リラックス .85／.85、熟達 .79／.85、コントロール .85／.85
- 新尺度 `shimazu-req-j`（REQ-J）。島津・Sonnentag・窪田・川上（2012）。Journal of Occupational Health, 54(3), 196–205。DOI `10.1539/joh.11-0220-OA`。`versionType` は `translated`。親は `sonnentag-req-16`
- フル16、日本の従業員 N=2,520、4因子を優先する確認的因子分析。αは 0.85／0.89／0.87／0.85。回答件数は根拠抜粋で未確定
- 既存 `morgan-hunt-relationship-commitment-3` を `morgan-hunt-relationship-commitment-7`（RC-7）へ改めた。付録Aは7項目、α=.895、複合信頼性 .895、VEE .626、平均負荷量 .736、7件法
- 概念108、尺度151、使用研究183、選択ガイド42、関係16。版は v0.86.0 から v0.87.0。日本語の検証済みレコードは16から18。未確認は90のまま。登録版そのものが3・4項目の尺度は28から27

## 根拠として確認したこと

- 週次根拠 `uploads/weekly-evidence-2026-10-06.md`（2026-10-06）。Sonnentag & Fritz（2007）は Uni Konstanz OA PDF、島津ら（2012）は著者 PDF、Morgan & Hunt（1994）は OA PDF を開いた ACCEPT
- Crossref で3件の書誌が一致。Sonnentag は Sabine Sonnentag、Charlotte Fritz。島津らは Akihito Shimazu、Sabine Sonnentag、Kazumi Kubota、Norito Kawakami。Morgan & Hunt は Robert M. Morgan、Shelby D. Hunt。誌名・巻号・頁は根拠ファイルと一致
- 作業開始時の `origin/main` は `6903057`（v0.86.0）。差分なし

## 入れなかったもの

- Sonnentag & Fritz（2007）と島津ら（2012）を `usageStudies` に入れること
- 心理的距離だけ、または他の1下位尺度だけの利用をフル16項目の使用として入れること
- REQ-16 と REQ-J の項目文を `items[]` に転記すること
- Table 2 の適合度、Table 3 の負荷量、Sonnentag 側の標本人数、REQ-J の回答件数。根拠抜粋に数値がない
- 関係的コミットメントの3項目短縮レコードと、その使用研究
- Allen & Meyer の感情的コミットメントの転用
- Lopez（2009）と Astakhova（2016）を Cable & DeRue の P–O fit 3項目の使用として入れること
- Price Consciousness

## 検証

- `node verify-data.mjs` 成功。概念108、尺度151、使用研究183、登録3・4項目27、使用研究側の3・4項目26、選択ガイド42、関係16。日本語は検証済み18、使用例16、未確認90
- `node verify-data.mjs --self-test` と `node --check data.js` 成功
- 画面確認は同じログの追記で記録する
