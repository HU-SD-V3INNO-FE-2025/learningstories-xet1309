const cacheName = "testCache";

export const addToCache = async (imagePath) => {
    const cache = await caches.open(cacheName);
    await cache.add(imagePath);
};

export const removeFromCache = async (imagePath) => {
    const cache = await caches.open(cacheName);
    await cache.delete(imagePath);
};

export const getFromCache = async (imagePath) => {
    const cache = await caches.open(cacheName);
    const match = await cache.match(imagePath);
    if (match) {
        return match;
    }
    return null;
};
