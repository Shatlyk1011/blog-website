import { ref, watchEffect } from "vue";
import { Post } from "@/assets/Types";

import { db } from "@/firebase/config";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";

import formatRelative from "date-fns/formatRelative";
import { ru } from "date-fns/locale";
import { Timestamp } from "firebase/firestore";

const getPosts = () => {
  const posts = ref<Post[] | null>(null);
  let colRef = collection(db, "posts");
  const q = query(colRef, orderBy("createdAt", "desc"));
  const date = new Date();

  const unsubscribe = onSnapshot(q, (snap) => {
    let results: Post[] = [];

    snap.docs.forEach((doc) => {
      //formatting date
      let newFormat = Number((doc.data().createdAt as Timestamp).toDate());
      let formatTime = formatRelative(newFormat, date, { locale: ru });
      results.push({
        ...(doc.data() as Post),
        id: doc.id,
        createdAt: formatTime,
      });
    });

    posts.value = results;
  });

  watchEffect((onInvalidate) => {
    onInvalidate(() => unsubscribe());
  });

  return { posts };
};

export default getPosts;
