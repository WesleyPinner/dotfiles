"use strict";(("undefined"!=typeof self?self:global).webpackChunkclient_web=("undefined"!=typeof self?self:global).webpackChunkclient_web||[]).push([[7170],{75459:(e,t,n)=>{n.r(t),n.d(t,{HomeAdsFetcher:()=>w,default:()=>A});var i=n(79474),s=n(30323),o=n(6514),r=n(3273),l=n(30939),d=n(92462);const c=18e5;const u=1,f=.5,a={threshold:[0,f,u]};var b=n(13274);const v=(0,i.lazy)((()=>Promise.all([n.e(4151),n.e(2945),n.e(7599)]).then(n.bind(n,20965)))),h=(0,i.lazy)((()=>Promise.all([n.e(4151),n.e(599)]).then(n.bind(n,98412)))),m=(0,i.lazy)((()=>n.e(6665).then(n.bind(n,21778))));function w(){const{fetchAndSetHomeAd:e,setHomeAd:t,homeAd:n}=(0,s.bT)(),{homeAdElement:w,setHomeAdElement:A}=(0,o.y)(),y=n&&"then"in n,{visibilityState:E}=function({target:e}){const[t,n]=(0,i.useState)("visible_unknown");return(0,i.useEffect)((()=>{if(e){const t=new IntersectionObserver((([{intersectionRatio:e}])=>n((()=>e>=u?"visible_100":e>=f?"visible_50":e<f?"visible_0":"visible_unknown"))),a);return t.observe(e),()=>t.disconnect()}n("visible_unknown")}),[e]),{visibilityState:t}}({target:w??void 0});if((0,i.useEffect)((function(){return e?.(),()=>t(void 0)}),[e,t]),function({visibilityState:e,homeAdIsCurrentlyBeingFetched:t}){const{fetchAndSetHomeAd:n}=(0,s.bT)(),o=(0,l.n)(),u=(0,d.$)(),[f,a]=(0,i.useState)(),b=(0,r.A)((()=>!t&&n?.()));(0,i.useEffect)((()=>{o&&u&&("visible_50"===e||"visible_100"===e)&&f&&Date.now()-f>=c&&b()}),[o,f,u,e,b]),(0,i.useEffect)((()=>{t||a(Date.now())}),[t,a])}({visibilityState:E,homeAdIsCurrentlyBeingFetched:y}),!n||y)return null;const S="text/html"===n.display[0]?.mimeType;return(0,b.jsx)(i.Suspense,{children:S?(0,b.jsx)(v,{homeAd:n,ref:A}):(0,b.jsx)(m,{homeAd:n,visibilityState:E,children:(0,b.jsx)(h,{homeAd:n,ref:A})})})}const A=w},6514:(e,t,n)=>{n.d(t,{H:()=>o,y:()=>s});var i=n(79474);function s(){const[e,t]=(0,i.useState)(null);return{homeAdElement:e,setHomeAdElement:t}}const o=i.forwardRef},92462:(e,t,n)=>{n.d(t,{$:()=>s});var i=n(79474);const s=()=>{const[e,t]=(0,i.useState)(document.hasFocus());return(0,i.useEffect)((()=>{function e(){t(!0)}function n(){t(!1)}return window.addEventListener("focus",e),window.addEventListener("blur",n),()=>{window.removeEventListener("focus",e),window.removeEventListener("blur",n)}}),[]),e}}}]);
//# sourceMappingURL=home-ads-fetcher.js.map