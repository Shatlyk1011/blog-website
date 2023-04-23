import { defineStore } from "pinia";
import { onAuthStateChanged, User } from "firebase/auth";
import { auth } from "@/firebase/config";

interface State {
  user: User | null;
  loading: boolean;
}

export const useUserStore = defineStore("user", {
  state: (): State => ({
    user: null,
    loading: true,
  }),
  actions: {
    initUser() {
      onAuthStateChanged(auth, (_user) => {
        console.log("PINIA user state changed:", _user);
        if (_user) {
          this.user = _user;
        }
        this.loading = false;
      });
    },
  },
});
