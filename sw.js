/* STACK TMS — 오프라인 사용을 위한 서비스 워커
   항상 인터넷에서 새 파일을 먼저 받고, 안 되면(현장 통신 불량) 저장해 둔 파일을 씁니다.
   내용을 고쳐도 다음 접속 때 자동으로 반영됩니다. */
const CACHE = "stack-tms-v1";
const SHELL = ["./", "./index.html", "./data.js", "./manifest.webmanifest", "./icons/icon.svg", "./icons/icon-192.png"];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(SHELL)).then(() => self.skipWaiting()));
});
self.addEventListener("activate", e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener("fetch", e => {
  if (e.request.method !== "GET") return;
  e.respondWith(
    fetch(e.request).then(res => {
      if (res.ok && (new URL(e.request.url).origin === location.origin || e.request.url.includes("pretendard"))) {
        const copy = res.clone();
        caches.open(CACHE).then(c => c.put(e.request, copy));
      }
      return res;
    }).catch(() => caches.match(e.request, { ignoreSearch: true }))
  );
});
