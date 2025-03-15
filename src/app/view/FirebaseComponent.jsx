

const FirebaseComponent = ({ signIn, signOut, user }) => {

    return (
        <>
            {user && (
                <>
                    <p>Logged in as: {user.email}</p>
                    <p>Also known as: {user.displayName}</p>
                    <img src={user.photoURL}  alt="Profile picture"  />
                </>
            )}
            {/*<input type="text" className="email"/>*/}
            {/*<input type="text" className="password"/>*/}
            <button onClick={signIn}>Sign in</button>
            <button onClick={signOut}>Sign out</button>
        </>
    )
}

export default FirebaseComponent