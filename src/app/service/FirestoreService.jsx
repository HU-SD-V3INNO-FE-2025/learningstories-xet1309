import { doc, collection, setDoc, getDoc } from "firebase/firestore"
import { database } from "src/app/config/auth_firebase_config.jsx"

export const saveCustomer = async (customer) => {
    const customerDocRef = doc(collection(database, "customers_learningstory"));
    try {
        await setDoc(
            customerDocRef, customer
        )
        console.log("User saved successfully")
    } catch (error) {
        console.error("Something went wrong while saving customer", error)
    }
}