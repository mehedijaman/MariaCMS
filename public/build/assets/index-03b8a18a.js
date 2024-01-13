import{I as oe,r as S,N as se,z as ue,x as q,u as ie,P as le,R as fe,S as ce,y as N,i as A,p as pe,U as de}from"./app-2598048d.js";var M;const X=typeof window<"u",ve=e=>typeof e=="function",_e=e=>typeof e=="string",Oe=()=>{};X&&((M=window==null?void 0:window.navigator)!=null&&M.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function j(e){return typeof e=="function"?e():ie(e)}function me(e,r){function t(...n){return new Promise((a,o)=>{Promise.resolve(e(()=>r.apply(this,n),{fn:r,thisArg:this,args:n})).then(a).catch(o)})}return t}const Y=e=>e();function ge(e=Y){const r=S(!0);function t(){r.value=!1}function n(){r.value=!0}const a=(...o)=>{r.value&&e(...o)};return{isActive:ce(r),pause:t,resume:n,eventFilter:a}}function ye(e){return e}function Z(e){return le()?(fe(e),!0):!1}function we(e){return typeof e=="function"?N(e):S(e)}function ee(e,r=!0){se()?ue(e):r?e():q(e)}function sr(e=!1,r={}){const{truthyValue:t=!0,falsyValue:n=!1}=r,a=oe(e),o=S(e);function i(u){if(arguments.length)return o.value=u,o.value;{const p=j(t);return o.value=o.value===p?j(n):p,o.value}}return a?i:[o,i]}var T=Object.getOwnPropertySymbols,he=Object.prototype.hasOwnProperty,Pe=Object.prototype.propertyIsEnumerable,be=(e,r)=>{var t={};for(var n in e)he.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&T)for(var n of T(e))r.indexOf(n)<0&&Pe.call(e,n)&&(t[n]=e[n]);return t};function Se(e,r,t={}){const n=t,{eventFilter:a=Y}=n,o=be(n,["eventFilter"]);return A(e,me(a,r),o)}var $e=Object.defineProperty,Ee=Object.defineProperties,Ie=Object.getOwnPropertyDescriptors,C=Object.getOwnPropertySymbols,re=Object.prototype.hasOwnProperty,te=Object.prototype.propertyIsEnumerable,k=(e,r,t)=>r in e?$e(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,je=(e,r)=>{for(var t in r||(r={}))re.call(r,t)&&k(e,t,r[t]);if(C)for(var t of C(r))te.call(r,t)&&k(e,t,r[t]);return e},Ne=(e,r)=>Ee(e,Ie(r)),Ae=(e,r)=>{var t={};for(var n in e)re.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&C)for(var n of C(e))r.indexOf(n)<0&&te.call(e,n)&&(t[n]=e[n]);return t};function Ce(e,r,t={}){const n=t,{eventFilter:a}=n,o=Ae(n,["eventFilter"]),{eventFilter:i,pause:u,resume:p,isActive:l}=ge(a);return{stop:Se(e,r,Ne(je({},o),{eventFilter:i})),pause:u,resume:p,isActive:l}}function De(e){var r;const t=j(e);return(r=t==null?void 0:t.$el)!=null?r:t}const E=X?window:void 0;function Q(...e){let r,t,n,a;if(_e(e[0])||Array.isArray(e[0])?([t,n,a]=e,r=E):[r,t,n,a]=e,!r)return Oe;Array.isArray(t)||(t=[t]),Array.isArray(n)||(n=[n]);const o=[],i=()=>{o.forEach(f=>f()),o.length=0},u=(f,d,m,v)=>(f.addEventListener(d,m,v),()=>f.removeEventListener(d,m,v)),p=A(()=>[De(r),j(a)],([f,d])=>{i(),f&&o.push(...t.flatMap(m=>n.map(v=>u(f,m,v,d))))},{immediate:!0,flush:"post"}),l=()=>{p(),i()};return Z(l),l}function Fe(e,r=!1){const t=S(),n=()=>t.value=!!e();return n(),ee(n,r),t}function Le(e,r={}){const{window:t=E}=r,n=Fe(()=>t&&"matchMedia"in t&&typeof t.matchMedia=="function");let a;const o=S(!1),i=()=>{a&&("removeEventListener"in a?a.removeEventListener("change",u):a.removeListener(u))},u=()=>{n.value&&(i(),a=t.matchMedia(we(e).value),o.value=a.matches,"addEventListener"in a?a.addEventListener("change",u):a.addListener(u))};return pe(u),Z(()=>i()),o}const F=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},L="__vueuse_ssr_handlers__";F[L]=F[L]||{};const Me=F[L];function ne(e,r){return Me[e]||r}function Te(e){return e==null?"any":e instanceof Set?"set":e instanceof Map?"map":e instanceof Date?"date":typeof e=="boolean"?"boolean":typeof e=="string"?"string":typeof e=="object"?"object":Number.isNaN(e)?"any":"number"}var ke=Object.defineProperty,R=Object.getOwnPropertySymbols,Qe=Object.prototype.hasOwnProperty,Re=Object.prototype.propertyIsEnumerable,V=(e,r,t)=>r in e?ke(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,x=(e,r)=>{for(var t in r||(r={}))Qe.call(r,t)&&V(e,t,r[t]);if(R)for(var t of R(r))Re.call(r,t)&&V(e,t,r[t]);return e};const Ve={boolean:{read:e=>e==="true",write:e=>String(e)},object:{read:e=>JSON.parse(e),write:e=>JSON.stringify(e)},number:{read:e=>Number.parseFloat(e),write:e=>String(e)},any:{read:e=>e,write:e=>String(e)},string:{read:e=>e,write:e=>String(e)},map:{read:e=>new Map(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e.entries()))},set:{read:e=>new Set(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e))},date:{read:e=>new Date(e),write:e=>e.toISOString()}},W="vueuse-storage";function xe(e,r,t,n={}){var a;const{flush:o="pre",deep:i=!0,listenToStorageChanges:u=!0,writeDefaults:p=!0,mergeDefaults:l=!1,shallow:f,window:d=E,eventFilter:m,onError:v=s=>{console.error(s)}}=n,_=(f?de:S)(r);if(!t)try{t=ne("getDefaultStorage",()=>{var s;return(s=E)==null?void 0:s.localStorage})()}catch(s){v(s)}if(!t)return _;const g=j(r),I=Te(g),w=(a=n.serializer)!=null?a:Ve[I],{pause:O,resume:h}=Ce(_,()=>P(_.value),{flush:o,deep:i,eventFilter:m});return d&&u&&(Q(d,"storage",y),Q(d,W,D)),y(),_;function P(s){try{if(s==null)t.removeItem(e);else{const c=w.write(s),b=t.getItem(e);b!==c&&(t.setItem(e,c),d&&d.dispatchEvent(new CustomEvent(W,{detail:{key:e,oldValue:b,newValue:c,storageArea:t}})))}}catch(c){v(c)}}function $(s){const c=s?s.newValue:t.getItem(e);if(c==null)return p&&g!==null&&t.setItem(e,w.write(g)),g;if(!s&&l){const b=w.read(c);return ve(l)?l(b,g):I==="object"&&!Array.isArray(b)?x(x({},g),b):b}else return typeof c!="string"?c:w.read(c)}function D(s){y(s.detail)}function y(s){if(!(s&&s.storageArea!==t)){if(s&&s.key==null){_.value=g;return}if(!(s&&s.key!==e)){O();try{_.value=$(s)}catch(c){v(c)}finally{s?q(h):h()}}}}}function ae(e){return Le("(prefers-color-scheme: dark)",e)}var We=Object.defineProperty,z=Object.getOwnPropertySymbols,ze=Object.prototype.hasOwnProperty,Je=Object.prototype.propertyIsEnumerable,J=(e,r,t)=>r in e?We(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,Be=(e,r)=>{for(var t in r||(r={}))ze.call(r,t)&&J(e,t,r[t]);if(z)for(var t of z(r))Je.call(r,t)&&J(e,t,r[t]);return e};function He(e={}){const{selector:r="html",attribute:t="class",initialValue:n="auto",window:a=E,storage:o,storageKey:i="vueuse-color-scheme",listenToStorageChanges:u=!0,storageRef:p,emitAuto:l}=e,f=Be({auto:"",light:"light",dark:"dark"},e.modes||{}),d=ae({window:a}),m=N(()=>d.value?"dark":"light"),v=p||(i==null?S(n):xe(i,n,o,{window:a,listenToStorageChanges:u})),_=N({get(){return v.value==="auto"&&!l?m.value:v.value},set(O){v.value=O}}),g=ne("updateHTMLAttrs",(O,h,P)=>{const $=a==null?void 0:a.document.querySelector(O);if($)if(h==="class"){const D=P.split(/\s/g);Object.values(f).flatMap(y=>(y||"").split(/\s/g)).filter(Boolean).forEach(y=>{D.includes(y)?$.classList.add(y):$.classList.remove(y)})}else $.setAttribute(h,P)});function I(O){var h;const P=O==="auto"?m.value:O;g(r,t,(h=f[P])!=null?h:P)}function w(O){e.onChanged?e.onChanged(O,I):I(O)}return A(_,w,{flush:"post",immediate:!0}),l&&A(m,()=>w(_.value),{flush:"post"}),ee(()=>w(_.value)),_}var Ue=Object.defineProperty,Ge=Object.defineProperties,Ke=Object.getOwnPropertyDescriptors,B=Object.getOwnPropertySymbols,qe=Object.prototype.hasOwnProperty,Xe=Object.prototype.propertyIsEnumerable,H=(e,r,t)=>r in e?Ue(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,Ye=(e,r)=>{for(var t in r||(r={}))qe.call(r,t)&&H(e,t,r[t]);if(B)for(var t of B(r))Xe.call(r,t)&&H(e,t,r[t]);return e},Ze=(e,r)=>Ge(e,Ke(r));function ur(e={}){const{valueDark:r="dark",valueLight:t="",window:n=E}=e,a=He(Ze(Ye({},e),{onChanged:(u,p)=>{var l;e.onChanged?(l=e.onChanged)==null||l.call(e,u==="dark"):p(u)},modes:{dark:r,light:t}})),o=ae({window:n});return N({get(){return a.value==="dark"},set(u){u===o.value?a.value="auto":a.value=u?"dark":"light"}})}var U;(function(e){e.UP="UP",e.RIGHT="RIGHT",e.DOWN="DOWN",e.LEFT="LEFT",e.NONE="NONE"})(U||(U={}));var er=Object.defineProperty,G=Object.getOwnPropertySymbols,rr=Object.prototype.hasOwnProperty,tr=Object.prototype.propertyIsEnumerable,K=(e,r,t)=>r in e?er(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,nr=(e,r)=>{for(var t in r||(r={}))rr.call(r,t)&&K(e,t,r[t]);if(G)for(var t of G(r))tr.call(r,t)&&K(e,t,r[t]);return e};const ar={easeInSine:[.12,0,.39,0],easeOutSine:[.61,1,.88,1],easeInOutSine:[.37,0,.63,1],easeInQuad:[.11,0,.5,0],easeOutQuad:[.5,1,.89,1],easeInOutQuad:[.45,0,.55,1],easeInCubic:[.32,0,.67,0],easeOutCubic:[.33,1,.68,1],easeInOutCubic:[.65,0,.35,1],easeInQuart:[.5,0,.75,0],easeOutQuart:[.25,1,.5,1],easeInOutQuart:[.76,0,.24,1],easeInQuint:[.64,0,.78,0],easeOutQuint:[.22,1,.36,1],easeInOutQuint:[.83,0,.17,1],easeInExpo:[.7,0,.84,0],easeOutExpo:[.16,1,.3,1],easeInOutExpo:[.87,0,.13,1],easeInCirc:[.55,0,1,.45],easeOutCirc:[0,.55,.45,1],easeInOutCirc:[.85,0,.15,1],easeInBack:[.36,0,.66,-.56],easeOutBack:[.34,1.56,.64,1],easeInOutBack:[.68,-.6,.32,1.6]};nr({linear:ye},ar);export{sr as a,ur as u};
