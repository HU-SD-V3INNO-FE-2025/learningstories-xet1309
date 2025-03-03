import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "./services/auth/auth_firebase_config.js";

function App() {

    const handleClick = async () => {
        const provider = new GoogleAuthProvider();
        const result = await signInWithPopup(auth, provider);
        console.log(result.user);
    }

  return (
    <>
      <button onClick={handleClick} >Click to login with Google</button>
    </>
  )
}

export default App
