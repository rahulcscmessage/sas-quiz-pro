self.addEventListener("install", function(event) {
  event.waitUntil(
    caches.open("sas-quiz-cache").then(function(cache) {
      return cache.addAll([
        "https://sasquizpro.blogspot.com/"
      ]);
    })
  );
});

self.addEventListener("fetch", function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
  );
});
