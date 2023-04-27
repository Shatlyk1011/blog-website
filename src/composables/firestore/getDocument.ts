import { ref } from "vue";
import { doc, getDoc as getD } from "firebase/firestore";
import { db } from "@/firebase/config";
import { Post } from "@/assets/Types";

let document = ref<Post>();
const error = ref<string | null>(null);

const getDoc = async (collection: string, id: string) => {
  const docRef = doc(db, collection, id);

  const docSnap = await getD(docRef);
  if (docSnap.exists()) {
    document.value = docSnap.data() as Post;
  } else {
    console.log("error in getDocument");
    error.value = "Что то пошло не так";
  }
};

const getDocument = () => {
  return { document, error, getDoc };
};

export default getDocument;
