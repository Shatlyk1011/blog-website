import { ref } from "vue";
import { db } from "@/firebase/config.ts";
import {
  addDoc,
  collection,
  setDoc,
  updateDoc,
  deleteDoc,
  doc,
  onSnapshot,
} from "firebase/firestore";
import { Post, PostDraft, Comment } from "@/assets/Types";

const error = ref<string | null>(null);

type Data = Comment | Post | PostDraft;

const addDocument = async (coll: string, data: Data) => {
  const colRef = collection(db, coll);

  try {
    error.value = null;
    await addDoc(colRef, data);
  } catch (err: any) {
    error.value = err.message;
  }
};

// update or create
const setDocument = async (coll: string, id: string, data: Data) => {
  const docRef = doc(db, coll, id);

  try {
    await setDoc(docRef, data);
  } catch (err: any) {
    error.value = err.message;
  }
};

const deleteDocument = async (coll: string, id: string) => {
  try {
    const docRef = doc(db, coll, id);
    await deleteDoc(docRef);
    console.log("doc deleted");
  } catch (err: any) {
    console.log("error useDocument");
    error.value = err.message;
  }
};

const updateDocument = async (coll: string, id: string, data: Data) => {
  const docRef = doc(db, coll, id);

  try {
    await updateDoc(docRef, { ...data }); //??
    console.log("post updated");
  } catch (err: any) {
    console.log("ERROR IN UDPATE DOC");
    error.value = err.message;
  }
};

const useDocument = () => {
  return { addDocument, setDocument, deleteDocument, error, updateDocument };
};

export default useDocument;
