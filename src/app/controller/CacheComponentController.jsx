import {addToCache, getFromCache, removeFromCache} from "../service/CacheComponentService.jsx";
import imagePathOne from "/AH Conceptueel Model.png"
import CacheComponent from "../view/CacheComponent.jsx";
import {useEffect, useState} from "react";
import imagePathTwo from "/Zuil 4.png";

const CacheComponentController = () => {
    const [image, setImage] = useState(null);

    useEffect(() => {
        fetchImage()
    },[])

    const fetchImage = async () => {
        const cacheItem = await getFromCache(imagePathOne)
        if (cacheItem) {
            setImage(cacheItem.url)
        } else {
            setImage(imagePathTwo)
        }
    }


    const handleAddToCache = async () => {
        await addToCache(imagePathOne)
        // setImage(imagePathTwo)
    }

    const handleRemoveFromCache = async () => {
        await removeFromCache(imagePathOne)
    }

    return (
        <CacheComponent handleAddToCache={handleAddToCache} handleRemoveFromCache={handleRemoveFromCache} image={image} />
    )

}

export default CacheComponentController