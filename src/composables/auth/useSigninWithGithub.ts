import { ref } from "vue";
import { auth, githubProvider } from "@/firebase/config";
import { signInWithPopup, GithubAuthProvider } from "firebase/auth";

const useSigninWithGithub = () => {
  const error = ref();

  const signinWithGithub = () => {
    signInWithPopup(auth, githubProvider).then((res) => {
      console.log("res", res, res.user);
      const credential = GithubAuthProvider.credentialFromResult(res);

      const token = credential?.accessToken;
      console.log("token", token);
      const user = res.user;
      console.log(user);
    });
  };
  return { error, signinWithGithub };
};
export default useSigninWithGithub;
