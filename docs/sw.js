if(!self.define){let e,s={};const n=(n,i)=>(n=new URL(n+".js",i).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(i,a)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(s[t])return;let o={};const r=e=>n(e,t),c={module:{uri:t},exports:o,require:r};s[t]=Promise.all(i.map((e=>c[e]||r(e)))).then((e=>(a(...e),o)))}}define(["./workbox-06ec3b03"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index-1f862974.css",revision:null},{url:"assets/index-8d069983.js",revision:null},{url:"index.html",revision:"b40547a4d37649a571314b08e2dc5107"},{url:"registerSW.js",revision:"d135fa27fb5711dc89669d0dea8efd2a"},{url:"icons/favicon.svg",revision:"757e803aaa3862dcd6b5a19762657609"},{url:"icons/transparent/manifest-icon-192.png",revision:"913c47954b2bb459bdee94c13bb22433"},{url:"icons/transparent/manifest-icon-512.png",revision:"e102e5656bcfb82b6a1db95d46daf813"},{url:"icons/maskable/manifest-icon-192.png",revision:"f8e824fce767038170a9e1833ecfa207"},{url:"icons/maskable/manifest-icon-512.png",revision:"a2aac3eca9af903a64d5843ad78afc9e"},{url:"manifest.webmanifest",revision:"9af3a10122112f96b8dd16b8d60fadf2"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html"))),e.registerRoute(/^https:\/\/madcampos.dev\/tojs-styleguide\/.*/iu,new e.CacheFirst({cacheName:"app-cache",plugins:[new e.ExpirationPlugin({maxAgeSeconds:2592e3,maxEntries:100})]}),"GET"),e.registerRoute(/^(?!https:\/\/madcampos.dev\/tojs-styleguide\/).*/iu,new e.NetworkOnly,"GET")}));
