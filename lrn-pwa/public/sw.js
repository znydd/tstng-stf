// A name for our cache
const CACHE_NAME = "version-1";

// A list of all the files we want to cache
const urlsToCache = [
  "/",
  "/index.html",
  "/styles.css",
  "/main.js",
  "/icons/icon-192x192.png",
];

// 1. Installation: Cache the files
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log("Opened cache");
      return cache.addAll(urlsToCache); // Add all our files to the cache
    }),
  );
});

// 2. Fetch: Serve files from cache
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      // If we found the file in the cache, return it.
      // Otherwise, fetch it from the network.
      return response || fetch(event.request);
    }),
  );
});

// 3. Activation: Clean up old caches
self.addEventListener("activate", (event) => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            // If this cache name is not in our whitelist, delete it
            return caches.delete(cacheName);
          }
        }),
      );
    }),
  );
});
