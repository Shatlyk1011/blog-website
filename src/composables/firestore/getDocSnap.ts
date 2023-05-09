import { ref, watchEffect } from "vue";
import { db } from "@/firebase/config";
import { onSnapshot, doc } from "firebase/firestore";
import { Post } from "@/assets/Types";

import formatRelative from "date-fns/formatRelative";
import { ru } from "date-fns/locale";
import { Timestamp } from "firebase/firestore";

const date = new Date();

type Data = Post | null;

type Error = null | string;
const getDocSnap = (collection: string, id: string) => {
  const document = ref<Data>(null);
  const error = ref<Error>(null);

  const docRef = doc(db, collection, id);

  const unsub = onSnapshot(
    docRef,
    (doc: any) => {
      if (doc.data()) {
        //formatting date
        const formatDate = (arg: string) => {
          let newFormat = Number(doc.data()[arg].toDate());
          return formatRelative(newFormat, date, { locale: ru });
        };
        let createFormat = formatDate("createdAt");
        let editFormat;
        if (doc.data().editedAt) {
          editFormat = formatDate("editedAt");
        }
        document.value = {
          ...doc.data(),
          id: doc.id,
          createdAt: createFormat,
          editedAt: editFormat,
        };
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
