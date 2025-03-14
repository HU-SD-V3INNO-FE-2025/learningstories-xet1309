import imagePathOne from "/public/AH Conceptueel Model.png"
import imagePathTwo from "/public/Zuil 4.png"


function App() {

    const cacheName = "testCache"
    // const imagePathOne = "public/AH Conceptueel Model.png"
    // const imagePathTwo = "public/Zuil 4.png"

    const handleAddToCache = () => {
        caches.open(cacheName)
            .then(cache => {
                cache.add(imagePathOne)
                replaceImage()
            })
            .catch(error => {
                console.log(error)
            })
    }

    const handleRemoveFromCache = () => {
        caches.open(cacheName)
            .then(cache => {
                cache.delete(imagePathOne)
            })
            .catch(error => {
                console.log(error)
            })
    }

    const replaceImage = () => {
        const imageElement = document.getElementById('image-element')
        imageElement.src = imagePathOne
    }

    return (
        <>
            <img id="image-element" src={imagePathTwo} alt="Image Two" />
            <button onClick={handleAddToCache}>handleAddToCache 1</button>
            <button onClick={handleRemoveFromCache}>handleRemoveFromCache 2</button>

        </>
    )
}

export default App
