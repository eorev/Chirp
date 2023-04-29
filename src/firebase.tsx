import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {
    getAuth,
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    User,
    signOut,
    signInWithEmailAndPassword
} from "firebase/auth";
import { useEffect, useState } from "react";

const firebaseConfig = {
    apiKey: "AIzaSyDTDKOmK4mn6oq2vDC4bzmHlhv_05DeIus",
    authDomain: "bluehenshuffle.firebaseapp.com",
    projectId: "bluehenshuffle",
    storageBucket: "bluehenshuffle.appspot.com",
    messagingSenderId: "463035576313",
    appId: "1:463035576313:web:7e16779c70cb446855d728",
    measurementId: "G-LM4Y2H7RRN"
  };

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export function signup(email: string, password: string) {
    return createUserWithEmailAndPassword(auth, email, password);
}

export function login(email: string, password: string) {
    return signInWithEmailAndPassword(auth, email, password);
}

export function logout() {
    return signOut(auth);
}

export function useAuth() {
    const [currentUser, setCurrentUser] = useState<User>();

    useEffect(() => {
        const unsub = onAuthStateChanged(auth, (user) =>
            setCurrentUser(user as User)
        );
        return unsub;
    }, []);

    return currentUser;
}

export default getFirestore();