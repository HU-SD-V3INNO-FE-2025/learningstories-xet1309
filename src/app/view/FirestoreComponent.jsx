

export const FirestoreComponent = ({
       name, setName,
       email, setEmail,
       customers,
       onSubmit
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
                    <div key={index}>
                        <p>{customer.name}</p>
                    </div>
                ))
            )}
        </>
    )
}