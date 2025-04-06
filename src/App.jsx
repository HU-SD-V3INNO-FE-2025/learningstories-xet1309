import CacheComponentController from "./app/controller/CacheComponentController.jsx";
import FirebaseController from "./app/controller/FirebaseController.jsx";
import React from "react";
import CustomerInfoController from "./app/controller/CustomerInfoController.jsx";
import {NativeDeviceFeatureController} from "./app/controller/NativeDeviceFeatureController.jsx";


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
                <NativeDeviceFeatureController/>
            </div>

        </>

    )


}

export default App;
