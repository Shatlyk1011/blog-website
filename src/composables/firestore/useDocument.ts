import { ref } from "vue";
import { db } from "@/firebase/config.ts";
import { addDoc, collection, updateDoc, setDoc, doc } from "firebase/firestore";
import { Post, PostDraft } from "@/assets/Types";

const error = ref<string | null>(null);

const addDocument = async (coll: string, data: Post | PostDraft) => {
  const colRef = collection(db, coll);

  try {
    error.value = null;
    await addDoc(colRef, data);
  } catch (err: any) {
    error.value = err.message;
  }
};

const updateDocument = async (
  coll: string,
  id: string,
  data: Post | PostDraft
) => {
  const docRef = doc(db, coll, id);

  try {
    await setDoc(docRef, data);
  } catch (err: any) {
    error.value = err.message;
  }
};

const useDocument = () => {
  return { addDocument, updateDocument, error };
};

export default useDocument;
