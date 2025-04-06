

export const NativeDeviceFeaturesComponent = ({
                                                  startCamera,
                                                  captureHandler,
                                                  stopCamera,
                                                  selectCamera,
                                                  webcams,
                                                  videoRef,
                                                  capturedImage
                                              }) => {
    return (
        <>  <h1>Native Device Features</h1>

            <div style={{
                display: 'flex',
                flexDirection: 'row',
            }} >
                <div>
                    <h2>Webcam-Feature</h2>
                    <button onClick={startCamera}>Start camera</button>
                    <button onClick={captureHandler}>Take a capturedImage</button>
                    <button onClick={stopCamera}>Stop camera</button>

                    <video ref={videoRef} autoPlay width="640" height="480"/>

                    <h3>Webcams</h3>
                    <label htmlFor="camera-select">Available webcams:</label>
                    <select name="cameras" id="camera-select" onChange={selectCamera}>
                        <option value="">Select a camera</option>
                        {webcams.map((webcam, index) => (
                            <option key={webcam.deviceId} value={webcam.deviceId}>
                                {webcam.label || `Camera ${index + 1}`}
                            </option>
                        ))}
                    </select>
                </div>

                <div>
                {capturedImage && (
                        <img src={capturedImage} alt="Picture"/>
                    )}
                </div>
            </div>

        </>
    );
};
