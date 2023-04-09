import { db } from "@/firebase/config.ts";
import { addDoc, collection } from "firebase/firestore";
import Post from "../assets/types/Post";

const addDocument = async (coll: string, data: Post) => {
  const colRef = collection(db, coll);

  await addDoc(colRef, data);
};

const useDocument = () => {
  return { addDocument };
};

export default useDocument;
