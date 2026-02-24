// JavaScript
// Service Worker: Handles offline loading
//Purpose: The Service Worker allows the app to load even with a spotty internet connection by caching resources.
/* --- THE SERVICE WORKER --- */
const CACHE_NAME = 'vmsnews-v1';
const ASSETS_TO_CACHE = [
    'index.html',
    'manifest.json',
    'icon-192.png',
    'icon-512.png'
];

// Install Event: Save assets to local device
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            return cache.addAll(ASSETS_TO_CACHE);
        })
    );
});

// Fetch Event: Serve from cache if offline
self.addEventListener('fetch', (event) => {
    event.respondWith(
        fetch(event.request).catch(() => {
            return caches.match(event.request);
        })
    );
});
