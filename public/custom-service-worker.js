importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.4.1/workbox-sw.js');

if (workbox) {
  console.log(`Yay! Workbox is loaded 🎉`);
} else {
  console.log(`Boo! Workbox didn't load 😬`);
}

workbox.routing.registerRoute(
  'https://reqres.in/api/users/2',
  workbox.strategies.staleWhileRevalidate()
)

workbox.routing.registerRoute(
  'https://reqres.in/api/users/3',
  workbox.strategies.staleWhileRevalidate()
)

workbox.routing.registerRoute(
  'https://reqres.in/api/users/4',
  workbox.strategies.staleWhileRevalidate()
)

workbox.routing.registerRoute(
  /\.(?:js|css|html)$/,
  workbox.strategies.networkFirst(),
)
workbox.routing.registerRoute(
  'http://localhost:3000',
  workbox.strategies.networkFirst()
)

workbox.routing.registerRoute(
  new RegExp('https://reqres.in/api'),
  workbox.strategies.staleWhileRevalidate()
)
