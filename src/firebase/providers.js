import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { FirebaseAuth } from "./config";

const googleProvider = new GoogleAuthProvider()

export const googleSignInWithPopup = async ()=>{
    const result = await signInWithPopup(FirebaseAuth,googleProvider)
    const {user} = result
    console.log(user)
    return user
}