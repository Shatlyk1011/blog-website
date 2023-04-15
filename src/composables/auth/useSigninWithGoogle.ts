import { ref } from "vue";
import { auth, googleProvider } from "@/firebase/config";
import { signInWithPopup } from "firebase/auth";

const useSigninWithGoogle = () => {
  const error = ref();

  const signinWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (err: any) {
      error.value = err.message;
    }
  };
  return { error, signinWithGoogle };
};

export default useSigninWithGoogle;
