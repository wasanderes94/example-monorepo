(()=>{"use strict";var e,t,r,o,a,n={},i={};function f(e){var t=i[e];if(void 0!==t)return t.exports;var r=i[e]={id:e,loaded:!1,exports:{}};return n[e].call(r.exports,r,r.exports,f),r.loaded=!0,r.exports}f.m=n,f.c=i,e=[],f.O=(t,r,o,a)=>{if(!r){var n=1/0;for(d=0;d<e.length;d++){r=e[d][0],o=e[d][1],a=e[d][2];for(var i=!0,u=0;u<r.length;u++)(!1&a||n>=a)&&Object.keys(f.O).every((e=>f.O[e](r[u])))?r.splice(u--,1):(i=!1,a<n&&(n=a));if(i){e.splice(d--,1);var l=o();void 0!==l&&(t=l)}}return t}a=a||0;for(var d=e.length;d>0&&e[d-1][2]>a;d--)e[d]=e[d-1];e[d]=[r,o,a]},f.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return f.d(t,{a:t}),t},r=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,f.t=function(e,o){if(1&o&&(e=this(e)),8&o)return e;if("object"==typeof e&&e){if(4&o&&e.__esModule)return e;if(16&o&&"function"==typeof e.then)return e}var a=Object.create(null);f.r(a);var n={};t=t||[null,r({}),r([]),r(r)];for(var i=2&o&&e;"object"==typeof i&&!~t.indexOf(i);i=r(i))Object.getOwnPropertyNames(i).forEach((t=>n[t]=()=>e[t]));return n.default=()=>e,f.d(a,n),a},f.d=(e,t)=>{for(var r in t)f.o(t,r)&&!f.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},f.f={},f.e=e=>Promise.all(Object.keys(f.f).reduce(((t,r)=>(f.f[r](e,t),t)),[])),f.u=e=>"assets/js/"+({53:"935f2afb",85:"1f391b9e",224:"412de8da",237:"1df93b7f",414:"393be207",514:"1be78505",575:"7572a7cb",734:"297747bf",918:"17896441",919:"7a1db4f6"}[e]||e)+"."+{53:"ffaa45dd",85:"91c2db5b",224:"d51255f7",237:"b0e97392",414:"20692350",514:"eb4a3140",575:"33f440ab",666:"0d58fa5f",734:"5ad8aee6",918:"cf170c30",919:"cdb4ad67",972:"9fe7a70a"}[e]+".js",f.miniCssF=e=>{},f.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),f.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),o={},a="website-action:",f.l=(e,t,r,n)=>{if(o[e])o[e].push(t);else{var i,u;if(void 0!==r)for(var l=document.getElementsByTagName("script"),d=0;d<l.length;d++){var c=l[d];if(c.getAttribute("src")==e||c.getAttribute("data-webpack")==a+r){i=c;break}}i||(u=!0,(i=document.createElement("script")).charset="utf-8",i.timeout=120,f.nc&&i.setAttribute("nonce",f.nc),i.setAttribute("data-webpack",a+r),i.src=e),o[e]=[t];var b=(t,r)=>{i.onerror=i.onload=null,clearTimeout(s);var a=o[e];if(delete o[e],i.parentNode&&i.parentNode.removeChild(i),a&&a.forEach((e=>e(r))),t)return t(r)},s=setTimeout(b.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=b.bind(null,i.onerror),i.onload=b.bind(null,i.onload),u&&document.head.appendChild(i)}},f.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},f.p="/example-monorepo/",f.gca=function(e){return e={17896441:"918","935f2afb":"53","1f391b9e":"85","412de8da":"224","1df93b7f":"237","393be207":"414","1be78505":"514","7572a7cb":"575","297747bf":"734","7a1db4f6":"919"}[e]||e,f.p+f.u(e)},(()=>{var e={303:0,532:0};f.f.j=(t,r)=>{var o=f.o(e,t)?e[t]:void 0;if(0!==o)if(o)r.push(o[2]);else if(/^(303|532)$/.test(t))e[t]=0;else{var a=new Promise(((r,a)=>o=e[t]=[r,a]));r.push(o[2]=a);var n=f.p+f.u(t),i=new Error;f.l(n,(r=>{if(f.o(e,t)&&(0!==(o=e[t])&&(e[t]=void 0),o)){var a=r&&("load"===r.type?"missing":r.type),n=r&&r.target&&r.target.src;i.message="Loading chunk "+t+" failed.\n("+a+": "+n+")",i.name="ChunkLoadError",i.type=a,i.request=n,o[1](i)}}),"chunk-"+t,t)}},f.O.j=t=>0===e[t];var t=(t,r)=>{var o,a,n=r[0],i=r[1],u=r[2],l=0;if(n.some((t=>0!==e[t]))){for(o in i)f.o(i,o)&&(f.m[o]=i[o]);if(u)var d=u(f)}for(t&&t(r);l<n.length;l++)a=n[l],f.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return f.O(d)},r=self.webpackChunkwebsite_action=self.webpackChunkwebsite_action||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})()})();