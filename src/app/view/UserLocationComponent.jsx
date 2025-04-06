

export const UserLocationComponent = ({
                                   getUserLocation,
                                   userLocation,
                               }) => {
    return (
        <div>
            <h2>Get user location</h2>
            {userLocation && (
                <span>Location: {userLocation.latitude} | {userLocation.longitude}</span>

            )}
            <button onClick={getUserLocation}>Get current location</button>
        </div>
    )
}