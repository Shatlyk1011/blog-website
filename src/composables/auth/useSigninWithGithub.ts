import { ref } from "vue";
import { auth, githubProvider } from "@/firebase/config";
import { signInWithPopup, GithubAuthProvider } from "firebase/auth";

const useSigninWithGithub = () => {
  const error = ref();

  const signinWithGithub = async () => {
    try {
      const res = await signInWithPopup(auth, githubProvider);
      const credential = GithubAuthProvider.credentialFromResult(res);
      const token = credential?.accessToken;
      console.log("token", token);
    } catch (err: any) {
      error.value = err.message;
      console.log(err.message);
    }
  };
  return { error, signinWithGithub };
};
export default useSigninWithGithub;
