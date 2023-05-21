import { ref } from "vue";
import { auth, githubProvider } from "@/firebase/config";
import { signInWithPopup, GithubAuthProvider } from "firebase/auth";

const useSigninWithGithub = () => {
  const error = ref();

  const signinWithGithub = () => {
    signInWithPopup(auth, githubProvider).then((res) => {
      const credential = GithubAuthProvider.credentialFromResult(res);
    });
  };
  return { error, signinWithGithub };
};
export default useSigninWithGithub;
