import imagePathTwo from "/Zuil 4.png"

const CacheComponent = ({ handleAddToCache, handleRemoveFromCache, image }) => {
    return (
        <>
            <img id="image-element" src={image} alt="Cached Image"/>
            <button onClick={handleAddToCache}>handleAddToCache 1</button>
            <button onClick={handleRemoveFromCache}>handleRemoveFromCache 2</button>

        </>
    )
}

export default CacheComponent