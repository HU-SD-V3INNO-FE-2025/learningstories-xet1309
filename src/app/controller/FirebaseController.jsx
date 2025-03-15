import {getUser, signInWithGoogle} from "../service/FirebaseService.jsx";
import {useState} from "react";
import {signOutWithGoogle} from "../service/FirebaseService.jsx";
import FirebaseComponent from "../view/FirebaseComponent.jsx";
import {auth} from "../config/auth_firebase_config.jsx";



const FirebaseController = () => {
    const [user, setUser] = useState(null);

    const handleSignIn = async () => {
        await signInWithGoogle()
        setUser(getUser())
    }

    const handleSignOut = async () => {
        await signOutWithGoogle()
        setUser(null)
    }

    return(
        <FirebaseComponent signIn={handleSignIn} signOut={handleSignOut} user={user} />
    )
}

export default FirebaseController;