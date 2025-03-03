
function App() {

    const cacheName = "testCache"
    const imagePathOne = "learningstories-xet1309/AH%20Conceptueel%20Model.png";
    const imagePathTwo = "learningstories-xet1309/Zuil%204.png";

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
