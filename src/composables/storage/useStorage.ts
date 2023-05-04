import { useUserStore } from "@/stores/user";
import { ref, computed, onMounted } from "vue";
import { storage } from "@/firebase/config";
import {
  uploadBytes,
  ref as storageRef,
  getDownloadURL,
  getStorage,
  deleteObject,
} from "firebase/storage";

const useStorage = () => {
  const userStore = useUserStore();
  const user = computed(() => userStore.user);

  const error = ref();
  const imageRef = ref();
  const imageUrl = ref();

  const uploadImage = async (path: string, image: File) => {
    imageRef.value = `${path}/${user.value?.uid}/${image.name}`;
    const strRef = storageRef(storage, imageRef.value);

    try {
      const res = await uploadBytes(strRef, image);
      //get url of an uploaded image
      imageUrl.value = await getDownloadURL(strRef);
    } catch (err: any) {
      error.value = err.message;
    }
  };

  const deleteImage = async (path: string) => {
    const storage = getStorage();
    const imgRef = storageRef(storage, path);
    try {
      await deleteObject(imgRef);
      console.log("img deleted");
    } catch (err: any) {
      error.value = err.message;
    }
  };

  return { error, imageUrl, imageRef, uploadImage, deleteImage };
};

export default useStorage;
