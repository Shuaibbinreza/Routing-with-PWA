const CACHE_NAME = 'v1';

// List of URLs to cache for the initial visit
const urlsToCache = [
    '/',
    '/products',
    '/products/p1',
    '/products/p2',
    '/index.html',
    '/styles.css',
    '/script.js',
    // Add more paths to cache as needed
];

// Install service worker and cache static assets
this.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            return cache.addAll(urlsToCache);
        })
    );
});

// Fetch event listener to intercept network requests
this.addEventListener('fetch', (event) => {
    event.respondWith(
        // Try to fetch the requested resource from the cache
        caches.match(event.request).then((response) => {
            // If found in cache, return the cached response
            if (response) {
                return response;
            }

            // If not found in cache, fetch from network
            return fetch(event.request).then((response) => {
                // Clone the response to use it and cache it
                const responseToCache = response.clone();
                caches.open(CACHE_NAME).then((cache) => {
                    cache.put(event.request, responseToCache);
                });
                // Return the response to the browser
                return response;
            });
        })
    );
});

// Activate event listener to clean up outdated caches
this.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cacheName) => {
                    if (cacheName !== CACHE_NAME) {
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});

