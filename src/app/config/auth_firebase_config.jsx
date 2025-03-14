import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDH8hQdrgCsjDg8tXDykWpGViR3Hug1ZmU",
    authDomain: "innofrontend.firebaseapp.com",
    projectId: "innofrontend",
    storageBucket: "innofrontend.firebasestorage.app",
    messagingSenderId: "637215016272",
    appId: "1:637215016272:web:eca101d8908c87612b9855"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();

export default app