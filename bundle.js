(()=>{"use strict";var e,r={230:(e,r,t)=>{t.r(r),t.d(r,{default:()=>c});var n=t(933),o=t.n(n),i=t(476),a=t.n(i)()(o());a.push([e.id,":root {\r\n  --main-bg-color: #b7d4a8;\r\n\t--main-border-color: #000\r\n}\r\n* {\r\n    margin: 0;\r\n    padding: 0;\r\n    box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n\theight: 100vh;\r\n\tdisplay: flex;\r\n\tjustify-content: center;\r\n\talign-items: center;\r\n\tfont-size: 20px;\r\n\tfont-weight: bold;\r\n\tfont-family: Courier;\r\n}\r\n\r\n#main {\r\n\twidth: 360px;\r\n\theight: 420px;\r\n\tbackground-color: var(--main-bg-color);\r\n\tborder: 10px solid var(--main-border-color);\r\n\tborder-radius: 40px;\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\tjustify-content: space-around;\r\n\talign-items: center;\r\n}\r\n\r\n#stage {\r\n\twidth: 300px;\r\n\theight: 300px;\r\n\tborder: 2px solid var(--main-border-color);\r\n\tposition: relative;\r\n}\r\n#snake div {\r\n\twidth: 10px;\r\n\theight: 10px;\r\n\tbackground-color: var(--main-border-color);\r\n\tborder: 1px solid var(--main-bg-color);\r\n\tposition: absolute;\r\n}\r\n#food {\r\n\twidth: 10px;\r\n\theight: 10px;\r\n\tbackground-color: var(--main-border-color);\r\n\tborder: 1px solid var(--main-bg-color);\r\n\tposition: absolute;\r\n\tleft: 40px;\r\n\ttop: 100px;\r\n}\r\n\r\n#score-panel {\r\n\twidth: 300px;\r\n\tdisplay: flex;\r\n\tjustify-content: space-between;\r\n}",""]);const c=a},476:e=>{e.exports=function(e){var r=[];return r.toString=function(){return this.map((function(r){var t="",n=void 0!==r[5];return r[4]&&(t+="@supports (".concat(r[4],") {")),r[2]&&(t+="@media ".concat(r[2]," {")),n&&(t+="@layer".concat(r[5].length>0?" ".concat(r[5]):""," {")),t+=e(r),n&&(t+="}"),r[2]&&(t+="}"),r[4]&&(t+="}"),t})).join("")},r.i=function(e,t,n,o,i){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(n)for(var c=0;c<this.length;c++){var d=this[c][0];null!=d&&(a[d]=!0)}for(var s=0;s<e.length;s++){var l=[].concat(e[s]);n&&a[l[0]]||(void 0!==i&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=i),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),r.push(l))}},r}},933:e=>{e.exports=function(e){return e[1]}},542:(e,r,t)=>{t.r(r),t.d(r,{default:()=>x});var n=t(892),o=t.n(n),i=t(760),a=t.n(i),c=t(311),d=t.n(c),s=t(192),l=t.n(s),u=t(60),f=t.n(u),p=t(865),h=t.n(p),v=t(230),m={};m.styleTagTransform=h(),m.setAttributes=l(),m.insert=d().bind(null,"head"),m.domAPI=a(),m.insertStyleElement=f();var y=o()(v.default,m);if(!v.default.locals||e.hot.invalidate){var b=!v.default.locals,g=b?v:v.default.locals;e.hot.accept(230,(r=>{v=t(230),function(e,r,t){if(!e&&r||e&&!r)return!1;var n;for(n in e)if((!t||"default"!==n)&&e[n]!==r[n])return!1;for(n in r)if(!(t&&"default"===n||e[n]))return!1;return!0}(g,b?v:v.default.locals,b)?(g=b?v:v.default.locals,y(v.default)):e.hot.invalidate()}))}e.hot.dispose((function(){y()}));const x=v.default&&v.default.locals?v.default.locals:void 0},892:e=>{var r=[];function t(e){for(var t=-1,n=0;n<r.length;n++)if(r[n].identifier===e){t=n;break}return t}function n(e,n){for(var i={},a=[],c=0;c<e.length;c++){var d=e[c],s=n.base?d[0]+n.base:d[0],l=i[s]||0,u="".concat(s," ").concat(l);i[s]=l+1;var f=t(u),p={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==f)r[f].references++,r[f].updater(p);else{var h=o(p,n);n.byIndex=c,r.splice(c,0,{identifier:u,updater:h,references:1})}a.push(u)}return a}function o(e,r){var t=r.domAPI(r);return t.update(e),function(r){if(r){if(r.css===e.css&&r.media===e.media&&r.sourceMap===e.sourceMap&&r.supports===e.supports&&r.layer===e.layer)return;t.update(e=r)}else t.remove()}}e.exports=function(e,o){var i=n(e=e||[],o=o||{});return function(e){e=e||[];for(var a=0;a<i.length;a++){var c=t(i[a]);r[c].references--}for(var d=n(e,o),s=0;s<i.length;s++){var l=t(i[s]);0===r[l].references&&(r[l].updater(),r.splice(l,1))}i=d}}},311:e=>{var r={};e.exports=function(e,t){var n=function(e){if(void 0===r[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}r[e]=t}return r[e]}(e);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");n.appendChild(t)}},60:e=>{e.exports=function(e){var r=document.createElement("style");return e.setAttributes(r,e.attributes),e.insert(r,e.options),r}},192:(e,r,t)=>{e.exports=function(e){var r=t.nc;r&&e.setAttribute("nonce",r)}},760:e=>{e.exports=function(e){var r=e.insertStyleElement(e);return{update:function(t){!function(e,r,t){var n="";t.supports&&(n+="@supports (".concat(t.supports,") {")),t.media&&(n+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(n+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),n+=t.css,o&&(n+="}"),t.media&&(n+="}"),t.supports&&(n+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),r.styleTagTransform(n,e,r.options)}(r,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(r)}}}},865:e=>{e.exports=function(e,r){if(r.styleSheet)r.styleSheet.cssText=e;else{for(;r.firstChild;)r.removeChild(r.firstChild);r.appendChild(document.createTextNode(e))}}},499:(e,r,t)=>{t(542),new(t(495).default)},886:(e,r)=>{Object.defineProperty(r,"__esModule",{value:!0});var t=function(){function e(){this.element=document.getElementById("food"),this._position={x:this.element.offsetLeft,y:this.element.offsetTop}}return Object.defineProperty(e.prototype,"position",{get:function(){return this._position},enumerable:!1,configurable:!0}),e.prototype.changePosition=function(){var e=10*Math.floor(30*Math.random()),r=10*Math.floor(30*Math.random());this.element.style.left="".concat(e,"px"),this.element.style.top="".concat(r,"px")},e}();r.default=t},495:(e,r,t)=>{Object.defineProperty(r,"__esModule",{value:!0});var n=t(886),o=t(866),i=t(561),a=function(){function e(){this.direction="",this.isLive=!0,this.snake=new o.default,this.food=new n.default,this.csorePanel=new i.default,this.init()}return e.prototype.init=function(){document.addEventListener("keydown",this.keydownHandle.bind(this)),this.run()},e.prototype.keydownHandle=function(e){this.direction=e.key},e.prototype.run=function(){var e=this.snake.position;switch(this.direction){case"ArrowUp":e.y-=10;break;case"ArrowDown":e.y+=10;break;case"ArrowLeft":e.x-=10;break;case"ArrowRight":e.x+=10}this.checkCollision(e);try{this.snake.position=e}catch(e){this.isLive=!1,alert(e.message)}this.isLive&&setTimeout(this.run.bind(this),300-30*(this.csorePanel.level-1))},e.prototype.checkCollision=function(e){e.x===this.food.position.x&&e.y===this.food.position.y&&(this.food.changePosition(),this.csorePanel.addScore(),this.snake.addBody())},e}();r.default=a},561:(e,r)=>{Object.defineProperty(r,"__esModule",{value:!0});var t=function(){function e(e,r){void 0===e&&(e=10),void 0===r&&(r=10),this.score=0,this._level=1,this.maxLevel=e,this.upScore=r,this.scoreElement=document.getElementById("score"),this.levelElement=document.getElementById("level")}return Object.defineProperty(e.prototype,"level",{get:function(){return this._level},enumerable:!1,configurable:!0}),e.prototype.addScore=function(){this.score++,this.scoreElement.innerHTML=this.score.toString(),this.score%this.upScore==0&&this.levelUp()},e.prototype.levelUp=function(){this._level<this.maxLevel&&(this._level++,this.levelElement.innerHTML=this._level.toString())},e}();r.default=t},866:(e,r)=>{Object.defineProperty(r,"__esModule",{value:!0});var t=function(){function e(){this.head=document.querySelector("#snake > div"),this.bodiesContent=document.getElementById("snake"),this.bodies=this.bodiesContent.getElementsByTagName("div"),this._position={x:this.head.offsetLeft,y:this.head.offsetTop}}return Object.defineProperty(e.prototype,"position",{get:function(){return this._position},set:function(e){if(e.x<0||e.x>290||e.y<0||e.y>290)throw new Error("撞牆了");this.head.style.left="".concat(e.x,"px"),this.head.style.top="".concat(e.y,"px")},enumerable:!1,configurable:!0}),e.prototype.addBody=function(){var e=document.createElement("div");this.bodiesContent.insertAdjacentElement("beforeend",e)},e}();r.default=t}},t={};function n(e){var o=t[e];if(void 0!==o){if(void 0!==o.error)throw o.error;return o.exports}var i=t[e]={id:e,exports:{}};try{var a={id:e,module:i,factory:r[e],require:n};n.i.forEach((function(e){e(a)})),i=a.module,a.factory.call(i.exports,i,i.exports,a.require)}catch(e){throw i.error=e,e}return i.exports}n.m=r,n.c=t,n.i=[],n.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return n.d(r,{a:r}),r},n.d=(e,r)=>{for(var t in r)n.o(r,t)&&!n.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},n.hu=e=>e+"."+n.h()+".hot-update.js",n.hmrF=()=>"index."+n.h()+".hot-update.json",n.h=()=>"5275db4b9cfecc762849",n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),e={},n.l=(r,t,o,i)=>{if(e[r])e[r].push(t);else{var a,c;if(void 0!==o)for(var d=document.getElementsByTagName("script"),s=0;s<d.length;s++){var l=d[s];if(l.getAttribute("src")==r){a=l;break}}a||(c=!0,(a=document.createElement("script")).charset="utf-8",a.timeout=120,n.nc&&a.setAttribute("nonce",n.nc),a.src=r),e[r]=[t];var u=(t,n)=>{a.onerror=a.onload=null,clearTimeout(f);var o=e[r];if(delete e[r],a.parentNode&&a.parentNode.removeChild(a),o&&o.forEach((e=>e(n))),t)return t(n)},f=setTimeout(u.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=u.bind(null,a.onerror),a.onload=u.bind(null,a.onload),c&&document.head.appendChild(a)}},n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e,r,t,o,i={},a=n.c,c=[],d=[],s="idle";function l(e){s=e;for(var r=[],t=0;t<d.length;t++)r[t]=d[t].call(null,e);return Promise.all(r)}function u(e){if(0===r.length)return e();var t=r;return r=[],Promise.all(t).then((function(){return u(e)}))}function f(e){if("idle"!==s)throw new Error("check() is only allowed in idle status");return l("check").then(n.hmrM).then((function(o){return o?l("prepare").then((function(){var i=[];return r=[],t=[],Promise.all(Object.keys(n.hmrC).reduce((function(e,r){return n.hmrC[r](o.c,o.r,o.m,e,t,i),e}),[])).then((function(){return u((function(){return e?h(e):l("ready").then((function(){return i}))}))}))})):l(v()?"ready":"idle").then((function(){return null}))}))}function p(e){return"ready"!==s?Promise.resolve().then((function(){throw new Error("apply() is only allowed in ready status")})):h(e)}function h(e){e=e||{},v();var r=t.map((function(r){return r(e)}));t=void 0;var n=r.map((function(e){return e.error})).filter(Boolean);if(n.length>0)return l("abort").then((function(){throw n[0]}));var i=l("dispose");r.forEach((function(e){e.dispose&&e.dispose()}));var a,c=l("apply"),d=function(e){a||(a=e)},s=[];return r.forEach((function(e){if(e.apply){var r=e.apply(d);if(r)for(var t=0;t<r.length;t++)s.push(r[t])}})),Promise.all([i,c]).then((function(){return a?l("fail").then((function(){throw a})):o?h(e).then((function(e){return s.forEach((function(r){e.indexOf(r)<0&&e.push(r)})),e})):l("idle").then((function(){return s}))}))}function v(){if(o)return t||(t=[]),Object.keys(n.hmrI).forEach((function(e){o.forEach((function(r){n.hmrI[e](r,t)}))})),o=void 0,!0}n.hmrD=i,n.i.push((function(h){var v,m,y,b,g=h.module,x=function(t,n){var o=a[n];if(!o)return t;var i=function(r){if(o.hot.active){if(a[r]){var i=a[r].parents;-1===i.indexOf(n)&&i.push(n)}else c=[n],e=r;-1===o.children.indexOf(r)&&o.children.push(r)}else console.warn("[HMR] unexpected require("+r+") from disposed module "+n),c=[];return t(r)},d=function(e){return{configurable:!0,enumerable:!0,get:function(){return t[e]},set:function(r){t[e]=r}}};for(var f in t)Object.prototype.hasOwnProperty.call(t,f)&&"e"!==f&&Object.defineProperty(i,f,d(f));return i.e=function(e){return function(e){switch(s){case"ready":return l("prepare"),r.push(e),u((function(){return l("ready")})),e;case"prepare":return r.push(e),e;default:return e}}(t.e(e))},i}(h.require,h.id);g.hot=(v=h.id,m=g,b={_acceptedDependencies:{},_acceptedErrorHandlers:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_selfInvalidated:!1,_disposeHandlers:[],_main:y=e!==v,_requireSelf:function(){c=m.parents.slice(),e=y?void 0:v,n(v)},active:!0,accept:function(e,r,t){if(void 0===e)b._selfAccepted=!0;else if("function"==typeof e)b._selfAccepted=e;else if("object"==typeof e&&null!==e)for(var n=0;n<e.length;n++)b._acceptedDependencies[e[n]]=r||function(){},b._acceptedErrorHandlers[e[n]]=t;else b._acceptedDependencies[e]=r||function(){},b._acceptedErrorHandlers[e]=t},decline:function(e){if(void 0===e)b._selfDeclined=!0;else if("object"==typeof e&&null!==e)for(var r=0;r<e.length;r++)b._declinedDependencies[e[r]]=!0;else b._declinedDependencies[e]=!0},dispose:function(e){b._disposeHandlers.push(e)},addDisposeHandler:function(e){b._disposeHandlers.push(e)},removeDisposeHandler:function(e){var r=b._disposeHandlers.indexOf(e);r>=0&&b._disposeHandlers.splice(r,1)},invalidate:function(){switch(this._selfInvalidated=!0,s){case"idle":t=[],Object.keys(n.hmrI).forEach((function(e){n.hmrI[e](v,t)})),l("ready");break;case"ready":Object.keys(n.hmrI).forEach((function(e){n.hmrI[e](v,t)}));break;case"prepare":case"check":case"dispose":case"apply":(o=o||[]).push(v)}},check:f,apply:p,status:function(e){if(!e)return s;d.push(e)},addStatusHandler:function(e){d.push(e)},removeStatusHandler:function(e){var r=d.indexOf(e);r>=0&&d.splice(r,1)},data:i[v]},e=void 0,b),g.parents=c,g.children=[],c=[],h.require=x})),n.hmrC={},n.hmrI={}})(),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var r=n.g.document;if(!e&&r&&(r.currentScript&&(e=r.currentScript.src),!e)){var t=r.getElementsByTagName("script");t.length&&(e=t[t.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),(()=>{var e,r,t,o,i=n.hmrS_jsonp=n.hmrS_jsonp||{826:0},a={};function c(e){return new Promise(((r,t)=>{a[e]=r;var o=n.p+n.hu(e),i=new Error;n.l(o,(r=>{if(a[e]){a[e]=void 0;var n=r&&("load"===r.type?"missing":r.type),o=r&&r.target&&r.target.src;i.message="Loading hot update chunk "+e+" failed.\n("+n+": "+o+")",i.name="ChunkLoadError",i.type=n,i.request=o,t(i)}}))}))}function d(a){function c(e){for(var r=[e],t={},o=r.map((function(e){return{chain:[e],id:e}}));o.length>0;){var i=o.pop(),a=i.id,c=i.chain,s=n.c[a];if(s&&(!s.hot._selfAccepted||s.hot._selfInvalidated)){if(s.hot._selfDeclined)return{type:"self-declined",chain:c,moduleId:a};if(s.hot._main)return{type:"unaccepted",chain:c,moduleId:a};for(var l=0;l<s.parents.length;l++){var u=s.parents[l],f=n.c[u];if(f){if(f.hot._declinedDependencies[a])return{type:"declined",chain:c.concat([u]),moduleId:a,parentId:u};-1===r.indexOf(u)&&(f.hot._acceptedDependencies[a]?(t[u]||(t[u]=[]),d(t[u],[a])):(delete t[u],r.push(u),o.push({chain:c.concat([u]),id:u})))}}}}return{type:"accepted",moduleId:e,outdatedModules:r,outdatedDependencies:t}}function d(e,r){for(var t=0;t<r.length;t++){var n=r[t];-1===e.indexOf(n)&&e.push(n)}}n.f&&delete n.f.jsonpHmr,e=void 0;var s={},l=[],u={},f=function(e){console.warn("[HMR] unexpected require("+e.id+") to disposed module")};for(var p in r)if(n.o(r,p)){var h,v=r[p],m=!1,y=!1,b=!1,g="";switch((h=v?c(p):{type:"disposed",moduleId:p}).chain&&(g="\nUpdate propagation: "+h.chain.join(" -> ")),h.type){case"self-declined":a.onDeclined&&a.onDeclined(h),a.ignoreDeclined||(m=new Error("Aborted because of self decline: "+h.moduleId+g));break;case"declined":a.onDeclined&&a.onDeclined(h),a.ignoreDeclined||(m=new Error("Aborted because of declined dependency: "+h.moduleId+" in "+h.parentId+g));break;case"unaccepted":a.onUnaccepted&&a.onUnaccepted(h),a.ignoreUnaccepted||(m=new Error("Aborted because "+p+" is not accepted"+g));break;case"accepted":a.onAccepted&&a.onAccepted(h),y=!0;break;case"disposed":a.onDisposed&&a.onDisposed(h),b=!0;break;default:throw new Error("Unexception type "+h.type)}if(m)return{error:m};if(y)for(p in u[p]=v,d(l,h.outdatedModules),h.outdatedDependencies)n.o(h.outdatedDependencies,p)&&(s[p]||(s[p]=[]),d(s[p],h.outdatedDependencies[p]));b&&(d(l,[h.moduleId]),u[p]=f)}r=void 0;for(var x,w=[],E=0;E<l.length;E++){var _=l[E],I=n.c[_];I&&(I.hot._selfAccepted||I.hot._main)&&u[_]!==f&&!I.hot._selfInvalidated&&w.push({module:_,require:I.hot._requireSelf,errorHandler:I.hot._selfAccepted})}return{dispose:function(){var e;t.forEach((function(e){delete i[e]})),t=void 0;for(var r,o=l.slice();o.length>0;){var a=o.pop(),c=n.c[a];if(c){var d={},u=c.hot._disposeHandlers;for(E=0;E<u.length;E++)u[E].call(null,d);for(n.hmrD[a]=d,c.hot.active=!1,delete n.c[a],delete s[a],E=0;E<c.children.length;E++){var f=n.c[c.children[E]];f&&(e=f.parents.indexOf(a))>=0&&f.parents.splice(e,1)}}}for(var p in s)if(n.o(s,p)&&(c=n.c[p]))for(x=s[p],E=0;E<x.length;E++)r=x[E],(e=c.children.indexOf(r))>=0&&c.children.splice(e,1)},apply:function(e){for(var r in u)n.o(u,r)&&(n.m[r]=u[r]);for(var t=0;t<o.length;t++)o[t](n);for(var i in s)if(n.o(s,i)){var c=n.c[i];if(c){x=s[i];for(var d=[],f=[],p=[],h=0;h<x.length;h++){var v=x[h],m=c.hot._acceptedDependencies[v],y=c.hot._acceptedErrorHandlers[v];if(m){if(-1!==d.indexOf(m))continue;d.push(m),f.push(y),p.push(v)}}for(var b=0;b<d.length;b++)try{d[b].call(null,x)}catch(r){if("function"==typeof f[b])try{f[b](r,{moduleId:i,dependencyId:p[b]})}catch(t){a.onErrored&&a.onErrored({type:"accept-error-handler-errored",moduleId:i,dependencyId:p[b],error:t,originalError:r}),a.ignoreErrored||(e(t),e(r))}else a.onErrored&&a.onErrored({type:"accept-errored",moduleId:i,dependencyId:p[b],error:r}),a.ignoreErrored||e(r)}}}for(var g=0;g<w.length;g++){var E=w[g],_=E.module;try{E.require(_)}catch(r){if("function"==typeof E.errorHandler)try{E.errorHandler(r,{moduleId:_,module:n.c[_]})}catch(t){a.onErrored&&a.onErrored({type:"self-accept-error-handler-errored",moduleId:_,error:t,originalError:r}),a.ignoreErrored||(e(t),e(r))}else a.onErrored&&a.onErrored({type:"self-accept-errored",moduleId:_,error:r}),a.ignoreErrored||e(r)}}return l}}}self.webpackHotUpdate=(e,t,i)=>{for(var c in t)n.o(t,c)&&(r[c]=t[c]);i&&o.push(i),a[e]&&(a[e](),a[e]=void 0)},n.hmrI.jsonp=function(e,i){r||(r={},o=[],t=[],i.push(d)),n.o(r,e)||(r[e]=n.m[e])},n.hmrC.jsonp=function(a,s,l,u,f,p){f.push(d),e={},t=s,r=l.reduce((function(e,r){return e[r]=!1,e}),{}),o=[],a.forEach((function(r){n.o(i,r)&&void 0!==i[r]&&(u.push(c(r)),e[r]=!0)})),n.f&&(n.f.jsonpHmr=function(r,t){e&&!n.o(e,r)&&n.o(i,r)&&void 0!==i[r]&&(t.push(c(r)),e[r]=!0)})},n.hmrM=()=>{if("undefined"==typeof fetch)throw new Error("No browser support: need fetch API");return fetch(n.p+n.hmrF()).then((e=>{if(404!==e.status){if(!e.ok)throw new Error("Failed to fetch update manifest "+e.statusText);return e.json()}}))}})(),n(499)})();