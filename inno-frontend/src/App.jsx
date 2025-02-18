
function App() {

    const cacheName = "testCache"
    const imagePathOne = "/AH Conceptueel Model (2).png"
    const imagePathTwo = "/Zuil 4.png"

    const handleAddToCache = () => {
        caches.open(cacheName)
            .then(cache => {
                cache.add(imagePathOne)
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

  return (
      <>
          <img src={imagePathTwo} alt="Image Two" />
          <button onClick={handleAddToCache}>handleAddToCache 1</button>
          <button onClick={handleRemoveFromCache}>handleRemoveFromCache 2</button>

      </>
  )
}

export default App
