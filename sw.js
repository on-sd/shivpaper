/* var dataCacheName="Shivpaper-data",
cacheName="shivpaper",
filesToCache=[
 "/shivpaper/",
 "/shivpaper/index.html",
 "/shivpaper/wallpaper.html",
 "/shivpaper/smartphone.html",
 "/shivpaper/laptop.html",
 "/shivpaper/logo.html",
 "/shivpaper/about.html",
 "/shivpaper/css/app.css",
 "/shivpaper/css/bootstrap.min.css",
 "/shivpaper/css/IconsRound.woff2",
 "/shivpaper/js/app.js",
 "/shivpaper/js/navitem.min.js",
 "/shivpaper/js/bootstrap.bundle.min.js",
 "/shivpaper/icon.svg",
 "/shivpaper/icon.png",

];*/

// self.addEventListener("install",function(e){console.log("[ServiceWorker] Install"),e.waitUntil(caches.open(cacheName).then(function(e){return console.log("[ServiceWorker] Caching app shell"),e.addAll(filesToCache)}))});
// self.addEventListener("activate",function(e){return console.log("[ServiceWorker] Activate"),e.waitUntil(caches.keys().then(function(e){return Promise.all(e.map(function(e){if(e!==cacheName&&e!==dataCacheName)return console.log("[ServiceWorker] Removing old cache",e),caches.delete(e)}))})),self.clients.claim()});
self.addEventListener("fetch",function(e){console.log("[Service Worker] Fetch",e.request.url),e.respondWith(caches.match(e.request).then(function(t){return t||fetch(e.request)}))});
