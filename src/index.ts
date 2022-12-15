import * as admin from "firebase-admin";
import { typedFirestore } from "./init/typedFirestore";

(async () => {
  // 型付きで書き込み
  await typedFirestore.collection("users").doc("xxxxxxxx").create({
    name: "Namae",
    age: 22,
    mailaddress: "test@example.com",
    createdAt: admin.firestore.FieldValue.serverTimestamp()
  });

  // 型付きで読み込み
  const userInfo = await typedFirestore.collection("users").doc("xxxxxxxx").get();
  console.log(userInfo.data());

  // 上書き
  await typedFirestore.collection("users").doc("xxxxxxxx").update({
    age: 23
  });

  // 削除
  await typedFirestore.collection("users").doc("xxxxxxxx").delete();
})();