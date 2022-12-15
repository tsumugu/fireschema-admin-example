import { z } from 'zod';
import { timestampType, DataModel } from 'fireschema';
import { Merge } from 'type-fest';

export const UserType = z.object({
  name: z.string(),
  age: z.number().min(13), // 13歳未満は登録できない
  mailaddress: z.string().email(), // EMail形式のみ許容
  createdAt: timestampType() // タイムスタンプは独自のtimestampTypeを使う
});

// typeof や z.inferを使うことで型に変換できる
export type User = z.infer<typeof UserType>;

// タイムスタンプが独自なので、汎用的なDate型に変換する
type UserDecoded = Merge<User, { createdAt: Date }>;

// DataModelを作成する。withConverterのconverterのようなイメージ
// これは型付きでFirestoreを扱うために必要となる。
export const UserModel = new DataModel({
  schema: UserType,
  decoder: (data: User): UserDecoded => ({
    ...data,
    createdAt: data.createdAt.toDate()
  }),
});