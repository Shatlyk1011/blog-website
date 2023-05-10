import { initializeApp } from "firebase/app";
import { getFirestore, serverTimestamp, Timestamp } from "firebase/firestore";
import { getAuth, GoogleAuthProvider, GithubAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "blog-website-e2738.firebaseapp.com",
  projectId: "blog-website-e2738",
  storageBucket: "blog-website-e2738.appspot.com",
  messagingSenderId: "745669798970",
  appId: "1:745669798970:web:2e97b01a7f359701afd903",
  measurementId: "G-JZ5JYDZC95",
};

//init firebase
const app = initializeApp(firebaseConfig);

//init services
const db = getFirestore();

//authentication
const auth = getAuth();
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

//Storage
const storage = getStorage(app);

auth.languageCode = "ru";

const user = auth.currentUser;

export { db, auth, googleProvider, user, githubProvider, storage };
