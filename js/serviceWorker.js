

// Array of file names to cache
const cacheFiles = [
    '/',
    './index.html',
    './restaurant.html',
    './css/styles.css',
    './css/responsive.css',
    './data/restaurants.json',
    './img/1.jpg',
    './img/2.jpg',
    './img/3.jpg',
    './img/4.jpg',
    './img/5.jpg',
    './img/6.jpg',
    './img/7.jpg',
    './img/8.jpg',
    './img/9.jpg',
    './img/10.jpg',
    './js/main.js',
    './js/restaurant_info.js',
    './js/dbhelper.js',

];
let cacheName = 'restaurant-cache';

//When our service worker is registered, an installation event is fired.
self.addEventListener('install', function (event) {
//Steps to install the service worker
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            console.log(cache opened);
            return cache.addAll(cacheFiles);

          })
    );
});

self.addEventListener('activate',  event => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request, {ignoreSearch:true}).then(response => {
      return response || fetch(event.request);
    })
    .catch(err => console.log(err, event.request))
  );
});
