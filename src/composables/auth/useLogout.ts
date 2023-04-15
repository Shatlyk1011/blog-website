import { ref } from "vue";

import { auth } from "@/firebase/config";
import { signOut } from "firebase/auth";

const error = ref<string | null>(null);
const isPending = ref<boolean | null>(null);

const logout = async () => {
  try {
    error.value = null;
    isPending.value = true;
    await signOut(auth);
  } catch (err: any) {
    error.value = err.message;
    isPending.value = false;
  }
};

const useLogout = () => {
  return { logout, error, isPending };
};

export default useLogout;
