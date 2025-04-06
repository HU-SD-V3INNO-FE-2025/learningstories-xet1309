import CacheComponentController from "./app/controller/CacheComponentController.jsx";
import FirebaseController from "./app/controller/FirebaseController.jsx";
import React from "react";
import CustomerInfoController from "./app/controller/CustomerInfoController.jsx";
import {WebcamController} from "./app/controller/WebcamController.jsx";
import {UserLocationController} from "./app/controller/UserLocationController.jsx";


function App() {
    return (
        <>
            <div>
                <h1>Cache LearningStory</h1>
                <CacheComponentController/>;
            </div>

            <div>
                <h1>Firebase Service</h1>
                <FirebaseController/>
            </div>

            <div>
                <h1>IndexDB</h1>
                <CustomerInfoController/>
            </div>

            <div>
                <h1>Native Device Features/PWA</h1>
                <WebcamController/>
                <UserLocationController/>
            </div>

        </>

    )


}

export default App;
