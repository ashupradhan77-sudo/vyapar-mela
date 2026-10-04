const CACHE_NAME='vyapar-mela-shell-v1';
self.addEventListener('install',e=>self.skipWaiting());
self.addEventListener('activate',e=>e.waitUntil(self.clients.claim()));
self.addEventListener('fetch',e=>{
  if (e.request.method !== 'GET') return;
  // Keep the Google Apps Script content live; cache only the local shell.
  if (new URL(e.request.url).origin === self.location.origin) {
    e.respondWith(fetch(e.request).catch(()=>caches.match(e.request)));
  }
});
