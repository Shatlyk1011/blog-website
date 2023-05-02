import { ref } from "vue";
import { doc, getDoc as getD } from "firebase/firestore";
import { db } from "@/firebase/config";
import { Post } from "@/assets/Types";

let document = ref<Post>();
const error = ref<string | null>(null);

const getDoc = async (collection: string, id: string) => {
  const docRef = doc(db, collection, id);
  error.value = null;
  const docSnap = await getD(docRef);
  if (docSnap.exists()) {
    error.value = null;
    document.value = docSnap.data() as Post;
  } else {
    console.log("no documents getDocument");
    error.value = "Такого поста не существует. Попробуйте еще раз.";
  }
};

const getDocument = () => {
  return { document, error, getDoc };
};

export default getDocument;
