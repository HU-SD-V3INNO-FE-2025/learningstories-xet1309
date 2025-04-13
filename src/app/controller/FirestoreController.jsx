import {FirestoreComponent} from "../view/FirestoreComponent.jsx";
import {useEffect, useState} from "react";
import {deleteCustomer, observeCustomers, saveCustomer, updateCustomer} from "../service/FirestoreService.jsx";


export const FirestoreController = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [customers, setCustomers] = useState([]);
    const [id, setId] = useState(null);

    useEffect(() => {
        const unsubscribe = observeCustomers(setCustomers);
        return () => unsubscribe();
    }, []);

    const createCustomerObject = () => {
        return {
            name: name,
            email: email,
        }
    }

    const onSubmit = async (e) => {
        e.preventDefault();

        const customer = createCustomerObject()

        if (id) {
            await updateCustomer(id, customer)
        } else {
            await saveCustomer(customer);
        }

        setEmail("")
        setName("")
        setId(null)
    }

    const onDelete = async (id) => {
        await deleteCustomer(id);
    }

    const onUpdate = async (customer) => {
        setName(customer.name)
        setEmail(customer.email)
        setId(customer.id)
    }

    return(
        <FirestoreComponent
            name={name}
            setName={setName}
            email={email}
            setEmail={setEmail}
            customers={customers}
            onSubmit={onSubmit}
            onDelete={onDelete}
            onUpdate={onUpdate}
        />
    )
}