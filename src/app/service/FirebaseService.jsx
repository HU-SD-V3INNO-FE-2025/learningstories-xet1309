import {GoogleAuthProvider, signInWithPopup, signOut} from "firebase/auth";
import { auth } from "/src/app/config/auth_firebase_config.jsx"


export const signInWithGoogle = async () => {

    const provider = new GoogleAuthProvider();

    try {
        const result = await signInWithPopup(auth, provider)
        console.log("User logged in successfully" + " " + result.user.email)
        return result.user;
    } catch(error) {
        console.error("Something went wrong while logging in" + " " + error)
        return error;
    }
}

export const signOutWithGoogle = async () => {
    try {
        await signOut(auth);
        console.log("User logged out successfully")
    } catch(error) {
        console.error("Something went wrong while logging out" + " " + error)
    }
}

export const getUser = () => {
    return auth.currentUser
}


