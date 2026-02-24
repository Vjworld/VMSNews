// JavaScript
// Service Worker: Handles offline loading
self.addEventListener('fetch', (event) => {
    event.respondWith(
        fetch(event.request).catch(() => caches.match(event.request))
    );
});

//Purpose: The Service Worker allows the app to load even with a spotty internet connection by caching resources.