import { ref, watchEffect } from "vue";
import { db } from "@/firebase/config";
import { onSnapshot, doc, updateDoc } from "firebase/firestore";
import { Post, Comment, PostDraft } from "@/assets/Types";

type Data = Post | Comment | PostDraft | null;
type Error = null | string;
const getDocSnap = (collection: string, id: string) => {
  const document = ref<Data>(null);
  const error = ref<Error>(null);

  const docRef = doc(db, collection, id);
  const unsub = onSnapshot(
    docRef,
    (doc: any) => {
      if (doc.data()) {
        document.value = { ...doc.data(), id: doc.id };
        error.value = null;
      } else {
        error.value = "Такого документа не существует";
      }
    },
    (err) => {
      console.log("error in getDocSnap", err.message, err.cause);
    }
  );

  watchEffect((onInvalidate) => {
    onInvalidate(() => unsub());
  });

  return { document, error };
};

export default getDocSnap;
