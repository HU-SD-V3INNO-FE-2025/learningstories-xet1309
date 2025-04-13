

export const FirestoreComponent = ({
       name, setName,
       email, setEmail,
       customers,
       onSubmit,
    onDelete,
    onUpdate,
                                   }) => {
    return (
        <>
            <form onSubmit={onSubmit}>
                <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
                <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <button type="submit">Save</button>
            </form>

            <span>Customers</span>
            {customers && customers.length > 0 && (
                customers.map((customer, index) => (
                    <div key={customer.id}>
                        <p>{customer.name}</p>
                        <button onClick={() => onDelete(customer.id)}>Delete</button>
                        <button onClick={() => onUpdate(customer)}>Edit</button>
                    </div>
                ))
            )}
        </>
    )
}