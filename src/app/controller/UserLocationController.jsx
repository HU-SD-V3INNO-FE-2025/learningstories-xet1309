import {UserLocationComponent} from "../view/UserLocationComponent.jsx";
import {useState} from "react";


export const UserLocationController = () => {
    const [userLocation, setUserLocation] = useState(null)

    const getUserLocation = async () => {
        navigator.geolocation.getCurrentPosition(
            position => {
                const { latitude, longitude } = position.coords;
                setUserLocation({ latitude, longitude });
            }, (error) => {
                console.error("Error getting location", error);
                setUserLocation(null);
            }
        )
    }

    return(
        <UserLocationComponent
            getUserLocation={getUserLocation}
            userLocation={userLocation}
        />
    )
}