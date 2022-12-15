# Fireschema + Firebase Admin SDK で読み書きをするサンプル
## 1. パッケージのインストール

```
npm ci --legacy-peer-deps
```

## 2. キーの設定
```src/init/typedFirestore.ts``` にサービスアカウント鍵のパスを記述します

```
const serviceAccount = require("path/to/serviceAccountKey.json");
```

## 3. Firestore 読み書き

```
npx ts-node src/index.ts
```

うまくいけばコンソールに読み取り結果が出力されます。

## 4. セキュリティルールの生成

```
npx fireschema rules src/fireschema/firestoreModel.ts
```

うまくいけばルートに ```firestore.rules``` が生成されます。
