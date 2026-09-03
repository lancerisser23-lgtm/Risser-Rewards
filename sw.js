const CACHE='oak-arrow-v51-5';
const CORE=['./','./index.html','./manifest.webmanifest','./icon-192.png','./icon-512.png',
'./assets/noah-avatar.png','./assets/eli-avatar.png','./assets/shepherd-avatar.png','./assets/juniper-avatar.png',
'./assets/noah-world.png','./assets/eli-world.png','./assets/shepherd-world.png','./assets/juniper-world.png'];
self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(CORE)).then(()=>self.skipWaiting())));
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',e=>{if(e.request.method!=='GET')return;e.respondWith(fetch(e.request).then(r=>{let copy=r.clone();caches.open(CACHE).then(c=>c.put(e.request,copy));return r}).catch(()=>caches.match(e.request).then(r=>r||caches.match('./index.html'))))});
