self.addEventListener("install", e => {
  e.waitUntil(
    caches.open("pks-cache").then(cache => {
      return cache.addAll(["index.html", "pks.js", "manifest.json"]);
    })
  );
});

self.addEventListener("fetch", e => {
  e.respondWith(
    caches.match(e.request).then(response => response || fetch(e.request))
  );
});