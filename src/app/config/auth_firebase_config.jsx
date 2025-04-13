import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCSRvJn_B__2T0CL0-3RRGRz7f1bXTCSLI",
    authDomain: "learningstories-a4558.firebaseapp.com",
    projectId: "learningstories-a4558",
    storageBucket: "learningstories-a4558.firebasestorage.app",
    messagingSenderId: "695422300730",
    appId: "1:695422300730:web:ca6f358101f7481b067b03",
    measurementId: "G-D0WJBYXWYV"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const database = getFirestore(app);

export default app