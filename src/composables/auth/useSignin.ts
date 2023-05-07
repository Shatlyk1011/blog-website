import { ref } from "vue";

import { auth } from "@/firebase/config";
import { signInWithEmailAndPassword } from "firebase/auth";

const error = ref<string | null>(null);
const isPending = ref(false);

const login = async (email: string, password: string) => {
  error.value = null;
  isPending.value = true;

  try {
    const res = await signInWithEmailAndPassword(auth, email, password);
    console.log();
    if (!res) {
      throw new Error();
    }

    error.value = null;
    isPending.value = false;
  } catch (err: any) {
    if (err.code === "auth/wrong-password") {
      error.value = "Неверный пароль. Поробуйте еще раз.";
    } else if (err.code === "auth/user-not-found") {
      error.value = "Такого пользователя не существует.";
    } else if (err.code === "auth/invalid-email") {
      error.value = "Такого email не существует";
    } else if (err.code === "auth/network-request-failed") {
      error.value = "Неполадки с интернетом...";
    } else {
      error.value = "Что то пошло не так...";
    }
    isPending.value = false;
  }
};

const useLogin = () => {
  return { error, isPending, login };
};

export default useLogin;
