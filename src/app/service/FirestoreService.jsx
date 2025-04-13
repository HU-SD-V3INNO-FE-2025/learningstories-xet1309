import { doc, collection, setDoc, getDoc, addDoc } from "firebase/firestore"
import { database } from "/src/app/config/auth_firebase_config.jsx"

export const saveCustomer = async (customer) => {
    try {
        await addDoc(collection(database, "customers_learningstory"), customer);
        console.log("User saved successfully")
    } catch (error) {
        console.error("Something went wrong while saving customer", error)
    }
}