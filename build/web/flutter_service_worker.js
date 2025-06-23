'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"build/web/main.dart.js": "c30cb9fcec2b54db22319f7551d22b34",
"build/web/manifest.json": "425315709ef0aa76bea3e3f14ab8d9b1",
"build/web/icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"build/web/icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"build/web/icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"build/web/icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"build/web/index.html": "0e957d07cec8a4b29781da3e1366d4a2",
"build/web/flutter_bootstrap.js": "0b00263964d66a24ea65fb3f4916151f",
"build/web/canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"build/web/canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"build/web/canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"build/web/canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"build/web/canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"build/web/canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"build/web/canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"build/web/canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"build/web/canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"build/web/canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"build/web/flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"build/web/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"build/web/assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"build/web/assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"build/web/assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"build/web/assets/NOTICES": "ae41ea2e645699fda4e4789a0e341ea5",
"build/web/assets/fonts/MaterialIcons-Regular.otf": "8ea08ea2444cc58ec5807fd7669e488f",
"build/web/assets/AssetManifest.bin": "693635b5258fe5f1cda720cf224f158c",
"build/web/assets/AssetManifest.bin.json": "69a99f98c8b1fb8111c5fb961769fcd8",
"build/web/version.json": "b3b87f9153d4406c14bc11865bbe1089",
"build/web/favicon.png": "5dcef449791fa27946b3d35ad8803796",
".dart_tool/package_config.json": "1f63f0f2c24f5c3b867fb861b5652371",
".dart_tool/package_config_subset": "323726027f5f2925fb1df03a01404d70",
".dart_tool/flutter_build/4fdf32e3f71d02b76e34cf45605086e2/web_static_assets.stamp": "728f3191266737c4c9f3ad57cd671339",
".dart_tool/flutter_build/4fdf32e3f71d02b76e34cf45605086e2/flutter_assets.d": "99f73f7d4d8832200832dc8fc25ac75a",
".dart_tool/flutter_build/4fdf32e3f71d02b76e34cf45605086e2/web_release_bundle.stamp": "29747dfe77f56c6f0dcf6814095f06c4",
".dart_tool/flutter_build/4fdf32e3f71d02b76e34cf45605086e2/dart2js.d": "f4ea90d379253fa1800359069b6f0d6e",
".dart_tool/flutter_build/4fdf32e3f71d02b76e34cf45605086e2/main.dart.js": "c30cb9fcec2b54db22319f7551d22b34",
".dart_tool/flutter_build/4fdf32e3f71d02b76e34cf45605086e2/app.dill": "f720f6c7b1902cae9b648d5144d6a992",
".dart_tool/flutter_build/4fdf32e3f71d02b76e34cf45605086e2/web_service_worker.stamp": "35062d6fb526416ccdd6b8ba140aa696",
".dart_tool/flutter_build/4fdf32e3f71d02b76e34cf45605086e2/gen_localizations.stamp": "436d2f2faeb7041740ee3f49a985d62a",
".dart_tool/flutter_build/4fdf32e3f71d02b76e34cf45605086e2/web_templated_files.stamp": "2a242b4838568181637aa6c12154749f",
".dart_tool/flutter_build/4fdf32e3f71d02b76e34cf45605086e2/main.dart": "9efae2e8f114c8261cf0483cef953b89",
".dart_tool/flutter_build/4fdf32e3f71d02b76e34cf45605086e2/dart2js.stamp": "4937115d05ad3c394681746abf107ec8",
".dart_tool/flutter_build/4fdf32e3f71d02b76e34cf45605086e2/app.dill.deps": "5fa63cb8c456c8e18d6743ab2f7255a2",
".dart_tool/flutter_build/4fdf32e3f71d02b76e34cf45605086e2/main.dart.js.deps": "3efa4aac681ef01c73894c1b09e0a0e8",
".dart_tool/flutter_build/4fdf32e3f71d02b76e34cf45605086e2/web_resources.d": "1f3b8ae21f0cd9e0b2921a1fa527d6ce",
".dart_tool/flutter_build/4fdf32e3f71d02b76e34cf45605086e2/outputs.json": "5dd81cf9592b2daef7c1fd3e14e13680",
".dart_tool/flutter_build/4fdf32e3f71d02b76e34cf45605086e2/service_worker.d": "a63bd352b43f499ed551b8600cb61d35",
".dart_tool/flutter_build/4fdf32e3f71d02b76e34cf45605086e2/web_entrypoint.stamp": "c0f63152497c223de8887a8f49c24857",
".dart_tool/flutter_build/4fdf32e3f71d02b76e34cf45605086e2/web_plugin_registrant.dart": "7ed35bc85b7658d113371ffc24d07117",
".dart_tool/dartpad/web_plugin_registrant.dart": "7ed35bc85b7658d113371ffc24d07117",
".dart_tool/version": "6bdd30ec2a3735b54ddfda0378b87fc1",
"analysis_options.yaml": "66d03d7647c8e438164feaf5b922d44a",
"_redirects": "d38a2b58df330c85e0029eecf71d7c26",
"main.dart.js": "276fe3ed2a79abd4bae20074cf925deb",
"manifest.json": "d41d8cd98f00b204e9800998ecf8427e",
"web/manifest.json": "425315709ef0aa76bea3e3f14ab8d9b1",
"web/icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"web/icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"web/icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"web/icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"web/index.html": "9befea0a07395c670c7e38cc8fd7d67d",
"web/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"firebase-debug.log": "aef82c5df267bdcfcab433d471a4a126",
"index.html": "ce7934a99ee35c18114c32b6ff8f4335",
"/": "ce7934a99ee35c18114c32b6ff8f4335",
"index_custom_backup.html": "13d8d4b773ed19e532a9bf84c2c3eb4a",
"flutter_bootstrap.js": "7ae2ce79a2cafee72c14b89961e94645",
"README.md": "ac18482fc28234fc361bcd7776f73e29",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"web.iml": "731a1a3080009db8d4572ef3fb1679c3",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"assets/_redirects": "d38a2b58df330c85e0029eecf71d7c26",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/font.ttf": "d41d8cd98f00b204e9800998ecf8427e",
"assets/AssetManifest.json": "9dc022756a1f1298f64e98b2aca60ed3",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/image.png": "d41d8cd98f00b204e9800998ecf8427e",
"assets/NOTICES": "7d5250197dd0bfb9266ff5f8fe04b4c7",
"assets/fonts/MaterialIcons-Regular.otf": "42a1c51ed565eca3f7e9736a48901157",
"assets/AssetManifest.bin": "6bd58e04b7223bd6bd2d1cc23c4d8cfe",
"assets/AssetManifest.bin.json": "5af12b1420b92e9b0a353bc940b615a4",
"version.json": "b363a67cd7f62e426b29b6af4dc6c460",
".idea/runConfigurations/main_dart.xml": "2b82ac5d547e7256de51268edfd10dc3",
".idea/workspace.xml": "cc5f609be0f96835c87839f62217d14b",
".idea/libraries/Dart_SDK.xml": "622b54234fa6cb90895dad58f83ecb72",
".idea/libraries/KotlinJavaRuntime.xml": "4b0df607078b06360237b0a81046129d",
".idea/modules.xml": "6e562bd2e74aaa79b0f10c5b25fab769",
"favicon.png": "d41d8cd98f00b204e9800998ecf8427e"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
