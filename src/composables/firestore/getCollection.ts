import { ref, watchEffect } from "vue";

import { db } from "@/firebase/config.ts";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { Post, PostDraft } from "@/assets/Types";

const getCollection = (coll: string) => {
  const documents = ref<Post[] | null>(null);
  let colRef = collection(db, coll);
  const q = query(colRef, orderBy("createdAt", "desc"));

  const unsubscribe = onSnapshot(q, (snap) => {
    let results: Post[] = [];
    console.log("snap", snap);
    snap.docs.forEach((doc) => {
      results.push({
        ...(doc.data() as Post),
        id: doc.id,
      });
    });

    documents.value = results;
  });
  /* test */
  // const commentsCollection = collection(colRef, "comments");
  /*   const newCommentUnsubscribe = onSnapshot(colRef, (qSnap) => {
    qSnap.docChanges().forEach((change) => {
      console.log("change", change);
      if (change.type === "added") {
        const newComment = change.doc.data();
        console.log("new comment", newComment);
      }
    });
  }); */
  /* test */

  watchEffect((onInvalidate) => {
    onInvalidate(() => unsubscribe());
    // onInvalidate(() => newCommentUnsubscribe());
  });

  return { documents };
};

export default getCollection;
