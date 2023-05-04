import { ref } from "vue";

import { defineStore } from "pinia";
import { onAuthStateChanged, User } from "firebase/auth";
import { auth } from "@/firebase/config";

interface State {
  user: User | null;
}

export const useUserStore = defineStore("user", () => {
  const user = ref(auth.currentUser);

  onAuthStateChanged(auth, (_user) => {
    console.log("PINIA user state changed:", _user);
    user.value = _user;
  });

  return { user };
});
