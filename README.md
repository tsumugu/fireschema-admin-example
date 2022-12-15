# Fireschema を Firebase Admin SDK から呼び出すサンプル
## 1. パッケージのインストール

```
npm ci --legacy-peer-deps
```

## 2. キーの設定
```src/init/typedFirestore.ts``` にサービスアカウント鍵のパスを記述します

```
const serviceAccount = require("path/to/serviceAccountKey.json");
```

## 3. 実行

```
npx ts-node src/index.ts
```

うまくいけばコンソールに読み取り結果が出力されます。