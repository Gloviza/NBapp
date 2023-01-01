var CACHE_NAME = "pwa-walart";
var urlsToCache = [
  "/nbapp/",
  "/nbapp/Pediatric",
  "/nbapp/Gyn-P1",
  "/nbapp/Gyn-P2",
  "/nbapp/Phy-P1",
  "/nbapp/Phy-P2",
  "/nbapp/Sur-P1",
  "/nbapp/Sur-P2",
];

// Install a service worker
this.addEventListener("install", (event) => {
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME).then(function (cache) {
      console.log("Opened cache");
      return cache.addAll(urlsToCache);
    })
  );
});

// Cache and return requests
this.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then(function (response) {
      // Cache hit - return response
      if (response) {
        return response;
      }
      return fetch(event.request);
    })
  );
});

// Update a service worker
this.addEventListener("activate", (event) => {
  var cacheWhitelist = ["pwa-task-manager"];
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
