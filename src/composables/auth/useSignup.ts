import { ref, watchEffect } from "vue";

import { auth } from "@/firebase/config";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

const error = ref<string | null>(null);
const isPending = ref(false);

const signup = async (email: string, password: string, userName: string) => {
  error.value = null;
  isPending.value = true;

  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);

    if (auth.currentUser) {
      await updateProfile(auth.currentUser, { displayName: userName });
    }

    if (!res) {
      throw new Error("Could not complete signup");
    }

    error.value = null;
    isPending.value = false;
  } catch (err: any) {
    error.value = "Что то пошло не так. Попробуйте позже";
    console.log("signuperror", err.message);
    isPending.value = false;
  }
};

const useSignup = () => {
  return { error, isPending, signup };
};

export default useSignup;
