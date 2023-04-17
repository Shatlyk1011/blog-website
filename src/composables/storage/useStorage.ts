import { ref } from "vue";
import { storage } from "@/firebase/config";
import { uploadBytes, ref as FBref, getDownloadURL } from "firebase/storage";
import getUser from "@/composables/getUser";

const { user } = getUser();

const useStorage = () => {
  const error = ref();
  // covers/image.jpg
  const imageRef = ref();
  const imageUrl = ref();

  const uploadImage = async (path: string, image: File) => {
    imageRef.value = `${path}/${user.value?.uid}/${image.name}`;
    const storageRef = FBref(storage, imageRef.value);

    try {
      const res = await uploadBytes(storageRef, image);

      //get url of an uploaded image
      imageUrl.value = await getDownloadURL(storageRef);
    } catch (err: any) {
      error.value = err.message;
    }
  };

  // const deleteImage = async (path) => {};

  return { error, imageUrl, imageRef, uploadImage };
};

export default useStorage;
