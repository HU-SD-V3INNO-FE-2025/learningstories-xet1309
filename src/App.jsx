import CacheComponentController from "./app/controller/CacheComponentController.jsx";
import FirebaseController from "./app/controller/FirebaseController.jsx";
import React from "react";


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

        </>

    )


}

export default App;
