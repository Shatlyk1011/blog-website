import { ref } from "vue";
import { doc, getDoc as getD } from "firebase/firestore";
import { db } from "@/firebase/config";

let document = ref<any>(null);
const error = ref<string | null>(null);

const getDoc = async (collection: string, id: string) => {
  const docRef = doc(db, collection, id);

  const docSnap = await getD(docRef);
  if (docSnap.exists()) {
    document.value = docSnap.data();
  }
};

const getSingleDocument = () => {
  return { document, error, getDoc };
};

export default getSingleDocument;
