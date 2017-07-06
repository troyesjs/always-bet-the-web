const CACHE_NAME = 'static-resources';

self.addEventListener('install', event => {
    console.log('The service worker is being installed.');

    event.waitUntil(
        caches.open(CACHE_NAME).then( cache => {
            return cache.addAll([
                './index.html',
                './webrtc.css',
                './img/play.png',
                './img/webcam.png',
                './record.js'
            ]);
        })
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.open(CACHE_NAME).then( cache => {
            return cache.match(event.request).then(function (matching) {
                if(matching){

                    console.log('CACHE HIT', event.request.url);
                    return matching;
                }
                console.log('CACHE MISS', event.request.url);
                return fetch(event.request);
            });
        })
    );
});
