import { FirestoreModel } from 'fireschema';
import { UserModel } from './entity/user';

// FirestoreModelを作成する。コレクション名・ドキュメント名・モデル・ルールを設定する
const firestoreModel = new FirestoreModel({
  'function requestUserIs(uid)': `
    return request.auth.uid == uid;
  `,
  collectionGroups: {
  },
  '/users/{userID}': {
    model: UserModel,
    allow: {
      read: true,
      create: 'requestUserIs(userID)',
      update: 'requestUserIs(userID)',
      delete: 'requestUserIs(userID)',
    }
  }
});
export default firestoreModel; // 別ファイルで読み込ませるためにexport