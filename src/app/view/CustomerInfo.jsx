import {useState} from "react";

const CustomerInfo = ({ addCustomer, customers, removeCustomer, updateCustomer }) => {
    const [name, setName] = useState(null);
    const [email, setEmail] = useState(null);
    const [isEditing, setIsEditing] = useState(null);
    const [selectedCustomer, setSelectedCustomer] = useState(null);

    const handleOnClick = () => {
        if (!name || !email) return

        const customer = {
            name,
            email,
        }

        console.log(selectedCustomer);
        console.log(customer);

        if (isEditing) {
            const customerToUpdate = {
                ...customer,
                key: selectedCustomer.key
            }
            updateCustomer(customerToUpdate);
        } else {
            addCustomer(customer)
        }
    }

    return (
        <>
            <div>
                <form>
                    <h2>{isEditing ? "Update Customer" : "Add Customer"}</h2>
                    <input type="text" className="name" onChange={(e) => setName(e.target.value)} />
                    <input type="text" className="email" onChange={(e) => setEmail(e.target.value)} />
                    <button onClick={handleOnClick} type="submit">{isEditing ? "Update" : "Add"}</button>
                </form>
            </div>
            <div>
                <h2>Customers</h2>
                <div>
                    {customers.map(customer => (
                        <div key={customer.key} className="customer-name">
                            <p>Name: {customer.name}</p>
                            <p>Email: {customer.email}</p>
                            <button onClick={() => removeCustomer(customer)} type="submit">Remove</button>
                            <button onClick={() => {
                                setIsEditing(true)
                                setSelectedCustomer(customer)
                            }} type="submit">Edit</button>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default CustomerInfo