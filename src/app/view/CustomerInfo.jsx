import {useState} from "react";

const CustomerInfo = ({ addCustomer, customers, removeCustomer, updateCustomer }) => {
    const [name, setName] = useState(null);
    const [email, setEmail] = useState(null);

    const handleOnClick = () => {
        if (!name || !email) return
        addCustomer({ name, email });
        setName(null);
        setEmail(null);
    }

    return (
        <>
            <div>
                <form>
                    <h2>Add customer</h2>
                    <input type="text" className="name" onChange={(e) => setName(e.target.value)} />
                    <input type="text" className="email" onChange={(e) => setEmail(e.target.value)} />
                    <button onClick={handleOnClick} type="submit">Add Customer</button>
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
                            <button onClick={() => updateCustomer(customer)} type="submit">Edit</button>

                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default CustomerInfo