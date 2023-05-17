import { ref } from "vue";

import { defineStore } from "pinia";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/firebase/config";

export const useUserStore = defineStore("user", () => {
  const user = ref(auth.currentUser);

  onAuthStateChanged(auth, (_user) => {
    user.value = _user;
  });

  return { user };
});
