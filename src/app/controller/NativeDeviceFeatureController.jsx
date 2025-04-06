import {NativeDeviceFeaturesComponent} from "../view/NativeDeviceFeaturesComponent.jsx";
import {useEffect, useRef, useState} from "react";


export const NativeDeviceFeatureController = () => {
    const [webcams, setWebcams] = useState([]);
    const [isCameraSelected, setIsCameraSelected] = useState(false);
    const [selectedCamera, setSelectedCamera] = useState(null);
    const [capturedImage, setCapturedImage] = useState(null);

    const videoRef = useRef(null);

    const startCamera = () => {
        if (!isCameraSelected) return

        const constraints = {
            audio: false,
            video: selectedCamera ? { deviceId: { exact: selectedCamera } } : true,
        }

        const videoElement = videoRef.current;
        console.log(videoElement);

        navigator.mediaDevices.getUserMedia(constraints)
            .then((mediaStream) => {
                videoElement.srcObject = mediaStream;
                videoElement.onloadedmetadata = (e) => {
                    videoElement.play();
                };
            })
            .catch ((error) =>{
                console.error(`Something went wrong ...`, error);
            });
    }

    const stopCamera = () => {
        const videoElement = videoRef.current;
        if (videoElement.srcObject) {
            videoElement.srcObject.getTracks().forEach((track) => track.stop());
        }

        setIsCameraSelected(false);
    }

    const captureHandler = () => {
        const videoElement = videoRef.current;
        const canvas = document.createElement('canvas');
        canvas.width = videoElement.videoWidth;
        canvas.height = videoElement.videoHeight;
        canvas.getContext('2d').drawImage(videoElement, 0, 0, canvas.width, canvas.height);

        const imageURL = canvas.toDataURL('image/png');
        setCapturedImage(imageURL);

        canvas.toBlob((blob) => {
            const item = new ClipboardItem({ 'image/png': blob });
            navigator.clipboard.write([item]);
        });
    }

    const selectCamera = (e) => {
        setSelectedCamera(e.target.value);
        setIsCameraSelected(true);
    };


    useEffect(() => {
        const fetchWebcams = async () => {
            const devices = await navigator.mediaDevices.enumerateDevices();
            setWebcams(devices.filter(device => device.kind === 'videoinput'));
        };
        fetchWebcams();
    }, []);




    return(
        <NativeDeviceFeaturesComponent
            startCamera={startCamera}
            captureHandler={captureHandler}
            stopCamera={stopCamera}
            selectCamera={selectCamera}
            webcams={webcams}
            videoRef={videoRef}
            capturedImage={capturedImage}
        />
    )
}