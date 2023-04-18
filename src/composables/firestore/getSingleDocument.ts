import { ref } from "vue";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/firebase/config";

let document = ref<any>(null);
const error = ref<string | null>(null);

const getDocument = async (collection: string, id: string) => {
  const docRef = doc(db, collection, id);

  const docSnap = await getDoc(docRef);
  console.log("docSnap", docSnap.data());
  if (docSnap.exists()) {
    document.value = docSnap.data();
  }
};

const getSingleDocument = () => {
  return { document, error, getDocument };
};

export default getSingleDocument;
