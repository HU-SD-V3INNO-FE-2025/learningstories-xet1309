import {useState} from "react";

const CustomerInfo = ({ addCustomer }) => {
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
                    <input type="text" className="name" onChange={(e) => setName(e.target.value)} />
                    <input type="email" className="email" onChange={(e) => setEmail(e.target.value)} />
                    <button onClick={handleOnClick} type="button">Add Customer</button>
                </form>
            </div>
        </>
    )
}