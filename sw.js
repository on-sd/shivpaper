const dataCacheName="Shivpaper-data",
cacheName="shivpaper",
filesToCache=[
"/",
"/index.html",
"/wallpaper.html",
"/smartphone.html",
"/laptop.html",
"/logo.html",
"/about.html",
"/css/app.css",
"/css/bootstrap.min.css",
"/js/app.js",
"/js/navitem.min.js",
"/js/bootstrap.bundle.min.js",
"/iconfull.svg",
"/logo90.png",
];

self.addEventListener("install",function(e){console.log("[ServiceWorker] Install"),e.waitUntil(caches.open(cacheName).then(function(e){return console.log("[ServiceWorker] Caching app shell"),e.addAll(filesToCache)}))}),self.addEventListener("activate",function(e){return console.log("[ServiceWorker] Activate"),e.waitUntil(caches.keys().then(function(e){return Promise.all(e.map(function(e){if(e!==cacheName&&e!==dataCacheName)return console.log("[ServiceWorker] Removing old cache",e),caches.delete(e)}))})),self.clients.claim()}),self.addEventListener("fetch",function(e){console.log("[Service Worker] Fetch",e.request.url),e.respondWith(caches.match(e.request).then(function(t){return t||fetch(e.request)}))});
