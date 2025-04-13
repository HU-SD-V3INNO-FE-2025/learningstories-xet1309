import {FirestoreComponent} from "../view/FirestoreComponent.jsx";
import {useState} from "react";
import {saveCustomer} from "../service/FirestoreService.jsx";


export const FirestoreController = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [customers, setCustomers] = useState([]);

    const onSubmit = async (e) => {
        e.preventDefault();

        const customer = {
            name: name,
            email: email,
        }
        await saveCustomer(customer)
        setEmail("")
        setName("")
    }

    return(
        <FirestoreComponent
            name={name}
            setName={setName}
            email={email}
            setEmail={setEmail}
            customers={customers}
            onSubmit={onSubmit}
        />
    )
}