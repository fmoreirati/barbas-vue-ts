//https://firebase.google.com/docs/auth/web/start?hl=pt&authuser=0#web-namespaced-api_1

import { app } from "./firebase";
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signInWithPopup,
    GoogleAuthProvider,
} from "firebase/auth";

const auth = getAuth(app);

export function addAuth(email: string, password: string) {
    return createUserWithEmailAndPassword(auth, email, password);
}

export function removeAuth() {
    return auth.currentUser?.delete();
}

export function postLoginEmail(email: string, password: string) {
    return signInWithEmailAndPassword(auth, email, password);
}

export function getloginGoogle() {
    const provider = new GoogleAuthProvider();
    return signInWithPopup(auth, provider)
    .then(result => {
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential?.accessToken;
    const user = result.user;
        return user;
    }).catch(error => {
    
    const errorCode = error.code;
    const errorMessage = error.message;
    
    const email = error.customData.email;
    const credential = GoogleAuthProvider.credentialFromError(error);
     
    throw new Error(error);
    
  });
}
