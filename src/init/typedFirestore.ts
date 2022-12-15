import * as admin from "firebase-admin";
import { TypedFirestoreUniv } from 'fireschema';
import firestoreModel from "../fireschema/firestoreModel";

const serviceAccount = require("path/to/serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const createFirestoreStaticAdmin = (raw: any) => {
  return {
    arrayRemove: raw.FieldValue.arrayRemove.bind(raw.FieldValue),
    arrayUnion: raw.FieldValue.arrayUnion.bind(raw.FieldValue),
    deleteField: raw.FieldValue.delete.bind(raw.FieldValue),
    documentId: raw.FieldPath.documentId.bind(raw.FieldPath),
    increment: raw.FieldValue.increment.bind(raw.FieldValue),
    serverTimestamp: raw.FieldValue.serverTimestamp.bind(raw.FieldValue),
    Timestamp: raw.Timestamp,
  };
};

export const db = admin.firestore();
export const typedFirestore = new TypedFirestoreUniv(firestoreModel, createFirestoreStaticAdmin(admin.firestore), db);