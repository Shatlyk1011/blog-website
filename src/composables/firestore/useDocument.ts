import { db } from "@/firebase/config.ts";
import { addDoc, collection } from "firebase/firestore";
import { Post, PostDraft } from "@/assets/Types";

const addDocument = async (coll: string, data: Post | PostDraft) => {
  const colRef = collection(db, coll);

  await addDoc(colRef, data);
};

const useDocument = () => {
  return { addDocument };
};

export default useDocument;
