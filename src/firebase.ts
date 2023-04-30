// src/firebase.ts
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyALAZTs5OUIc-f-MJQtORNFdlvmdyBup8E",
  authDomain: "chirptwo.firebaseapp.com",
  projectId: "chirptwo",
  storageBucket: "chirptwo.appspot.com",
  messagingSenderId: "979071640850",
  appId: "1:979071640850:web:f5849281029a19d3a87fcb",
  measurementId: "G-0DSWE0409K"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const firestore = getFirestore(app);
export { getFirestore };