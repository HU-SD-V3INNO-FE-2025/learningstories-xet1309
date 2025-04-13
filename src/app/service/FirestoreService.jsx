import {addDoc, collection, deleteDoc, doc, onSnapshot, setDoc} from "firebase/firestore"
import {database} from "/src/app/config/auth_firebase_config.jsx"

export const saveCustomer = async (customer) => {
    try {
        await addDoc(collection(database, "customers_learningstory"), customer);
        console.log("User saved successfully")
    } catch (error) {
        console.error("Something went wrong while saving customer", error)
    }
}

export const deleteCustomer = async (id) => {
    try {
        await deleteDoc(doc(database, "customers_learningstory", id));
    } catch (error) {
        console.error("Error deleting customer", error)
    }
}

export const updateCustomer = async (id, customer) => {
    try {
        await setDoc(doc(database, "customers_learningstory", id), customer);
    } catch (error) {
        console.error("Error updating customer", error)
    }
}

export const observeCustomers = (callback) => {
    return onSnapshot(
        collection(database, "customers_learningstory"),
        (snapshot) => {
            const customers = snapshot.docs.map(doc => ({id: doc.id, ...doc.data()}));
            callback(customers);
        }
    );
}