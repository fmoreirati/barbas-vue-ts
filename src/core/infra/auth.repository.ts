//https://firebase.google.com/docs/auth/web/start?hl=pt&authuser=0#web-namespaced-api_1

import { app } from "./firebase";
import { getAuth, createUserWithEmailAndPassword, 
    signInWithEmailAndPassword } from "firebase/auth";

const auth = getAuth(app);

export function addAuth(email: string, password: string) {
    return createUserWithEmailAndPassword(auth, email, password);
}

export function removeAuth() {
    return auth.currentUser?.delete();
}

export function postLoginEmail(email: string, password: string){
return signInWithEmailAndPassword (auth,email,password)
    
}