import { ref, watchEffect } from "vue";

import { db } from "@/firebase/config.ts";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { Post } from "@/assets/Types";

const getCollection = (coll: string) => {
  const documents = ref<Post[] | null>(null);
  let colRef = collection(db, coll);
  const q = query(colRef, orderBy("createdAt", "desc"));

  const unSub = onSnapshot(q, (snap) => {
    let results: Post[] = [];
    snap.docs.forEach((doc) => {
      results.push({
        ...(doc.data() as Post),
        id: doc.id,
      });
    });
    documents.value = results;
  });

  watchEffect((onInvalidate) => {
    onInvalidate(() => unSub());
  });

  return { documents };
};

export default getCollection;
