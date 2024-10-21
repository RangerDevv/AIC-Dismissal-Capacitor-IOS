import{s as B,d as U,o as q,e as A,t as j}from"../chunks/scheduler.Y7QR3Ia1.js";import{S as z,i as M,s as W,p as h,j as F,f as b,v as g,w as P,x as w,d as E,e as G,c as H,a as J,b as y,y as p,t as K,n as Q,o as X,z as L,A as v,B as k,C as I,D as R,E as D}from"../chunks/index.rNqrds2l.js";const Y="modulepreload",Z=function(a,e){return new URL(a,e).href},O={},m=function(e,n,i){let r=Promise.resolve();if(n&&n.length>0){const _=document.getElementsByTagName("link");r=Promise.all(n.map(t=>{if(t=Z(t,i),t in O)return;O[t]=!0;const s=t.endsWith(".css"),l=s?'[rel="stylesheet"]':"";if(!!i)for(let u=_.length-1;u>=0;u--){const d=_[u];if(d.href===t&&(!s||d.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${t}"]${l}`))return;const o=document.createElement("link");if(o.rel=s?"stylesheet":Y,s||(o.as="script",o.crossOrigin=""),o.href=t,document.head.appendChild(o),s)return new Promise((u,d)=>{o.addEventListener("load",u),o.addEventListener("error",()=>d(new Error(`Unable to preload CSS for ${t}`)))})}))}return r.then(()=>e()).catch(_=>{const t=new Event("vite:preloadError",{cancelable:!0});if(t.payload=_,window.dispatchEvent(t),!t.defaultPrevented)throw _})},se={};function $(a){let e,n,i;var r=a[1][0];function _(t,s){return{props:{data:t[3],form:t[2]}}}return r&&(e=v(r,_(a)),a[12](e)),{c(){e&&k(e.$$.fragment),n=h()},l(t){e&&I(e.$$.fragment,t),n=h()},m(t,s){e&&R(e,t,s),b(t,n,s),i=!0},p(t,s){if(s&2&&r!==(r=t[1][0])){if(e){L();const l=e;g(l.$$.fragment,1,0,()=>{D(l,1)}),P()}r?(e=v(r,_(t)),t[12](e),k(e.$$.fragment),w(e.$$.fragment,1),R(e,n.parentNode,n)):e=null}else if(r){const l={};s&8&&(l.data=t[3]),s&4&&(l.form=t[2]),e.$set(l)}},i(t){i||(e&&w(e.$$.fragment,t),i=!0)},o(t){e&&g(e.$$.fragment,t),i=!1},d(t){t&&E(n),a[12](null),e&&D(e,t)}}}function x(a){let e,n,i;var r=a[1][0];function _(t,s){return{props:{data:t[3],$$slots:{default:[ee]},$$scope:{ctx:t}}}}return r&&(e=v(r,_(a)),a[11](e)),{c(){e&&k(e.$$.fragment),n=h()},l(t){e&&I(e.$$.fragment,t),n=h()},m(t,s){e&&R(e,t,s),b(t,n,s),i=!0},p(t,s){if(s&2&&r!==(r=t[1][0])){if(e){L();const l=e;g(l.$$.fragment,1,0,()=>{D(l,1)}),P()}r?(e=v(r,_(t)),t[11](e),k(e.$$.fragment),w(e.$$.fragment,1),R(e,n.parentNode,n)):e=null}else if(r){const l={};s&8&&(l.data=t[3]),s&8215&&(l.$$scope={dirty:s,ctx:t}),e.$set(l)}},i(t){i||(e&&w(e.$$.fragment,t),i=!0)},o(t){e&&g(e.$$.fragment,t),i=!1},d(t){t&&E(n),a[11](null),e&&D(e,t)}}}function ee(a){let e,n,i;var r=a[1][1];function _(t,s){return{props:{data:t[4],form:t[2]}}}return r&&(e=v(r,_(a)),a[10](e)),{c(){e&&k(e.$$.fragment),n=h()},l(t){e&&I(e.$$.fragment,t),n=h()},m(t,s){e&&R(e,t,s),b(t,n,s),i=!0},p(t,s){if(s&2&&r!==(r=t[1][1])){if(e){L();const l=e;g(l.$$.fragment,1,0,()=>{D(l,1)}),P()}r?(e=v(r,_(t)),t[10](e),k(e.$$.fragment),w(e.$$.fragment,1),R(e,n.parentNode,n)):e=null}else if(r){const l={};s&16&&(l.data=t[4]),s&4&&(l.form=t[2]),e.$set(l)}},i(t){i||(e&&w(e.$$.fragment,t),i=!0)},o(t){e&&g(e.$$.fragment,t),i=!1},d(t){t&&E(n),a[10](null),e&&D(e,t)}}}function T(a){let e,n=a[6]&&V(a);return{c(){e=G("div"),n&&n.c(),this.h()},l(i){e=H(i,"DIV",{id:!0,"aria-live":!0,"aria-atomic":!0,style:!0});var r=J(e);n&&n.l(r),r.forEach(E),this.h()},h(){y(e,"id","svelte-announcer"),y(e,"aria-live","assertive"),y(e,"aria-atomic","true"),p(e,"position","absolute"),p(e,"left","0"),p(e,"top","0"),p(e,"clip","rect(0 0 0 0)"),p(e,"clip-path","inset(50%)"),p(e,"overflow","hidden"),p(e,"white-space","nowrap"),p(e,"width","1px"),p(e,"height","1px")},m(i,r){b(i,e,r),n&&n.m(e,null)},p(i,r){i[6]?n?n.p(i,r):(n=V(i),n.c(),n.m(e,null)):n&&(n.d(1),n=null)},d(i){i&&E(e),n&&n.d()}}}function V(a){let e;return{c(){e=K(a[7])},l(n){e=Q(n,a[7])},m(n,i){b(n,e,i)},p(n,i){i&128&&X(e,n[7])},d(n){n&&E(e)}}}function te(a){let e,n,i,r,_;const t=[x,$],s=[];function l(o,u){return o[1][1]?0:1}e=l(a),n=s[e]=t[e](a);let c=a[5]&&T(a);return{c(){n.c(),i=W(),c&&c.c(),r=h()},l(o){n.l(o),i=F(o),c&&c.l(o),r=h()},m(o,u){s[e].m(o,u),b(o,i,u),c&&c.m(o,u),b(o,r,u),_=!0},p(o,[u]){let d=e;e=l(o),e===d?s[e].p(o,u):(L(),g(s[d],1,1,()=>{s[d]=null}),P(),n=s[e],n?n.p(o,u):(n=s[e]=t[e](o),n.c()),w(n,1),n.m(i.parentNode,i)),o[5]?c?c.p(o,u):(c=T(o),c.c(),c.m(r.parentNode,r)):c&&(c.d(1),c=null)},i(o){_||(w(n),_=!0)},o(o){g(n),_=!1},d(o){o&&(E(i),E(r)),s[e].d(o),c&&c.d(o)}}}function ne(a,e,n){let{stores:i}=e,{page:r}=e,{constructors:_}=e,{components:t=[]}=e,{form:s}=e,{data_0:l=null}=e,{data_1:c=null}=e;U(i.page.notify);let o=!1,u=!1,d=null;q(()=>{const f=i.page.subscribe(()=>{o&&(n(6,u=!0),j().then(()=>{n(7,d=document.title||"untitled page")}))});return n(5,o=!0),f});function N(f){A[f?"unshift":"push"](()=>{t[1]=f,n(0,t)})}function S(f){A[f?"unshift":"push"](()=>{t[0]=f,n(0,t)})}function C(f){A[f?"unshift":"push"](()=>{t[0]=f,n(0,t)})}return a.$$set=f=>{"stores"in f&&n(8,i=f.stores),"page"in f&&n(9,r=f.page),"constructors"in f&&n(1,_=f.constructors),"components"in f&&n(0,t=f.components),"form"in f&&n(2,s=f.form),"data_0"in f&&n(3,l=f.data_0),"data_1"in f&&n(4,c=f.data_1)},a.$$.update=()=>{a.$$.dirty&768&&i.page.set(r)},[t,_,s,l,c,o,u,d,i,r,N,S,C]}class oe extends z{constructor(e){super(),M(this,e,ne,te,B,{stores:8,page:9,constructors:1,components:0,form:2,data_0:3,data_1:4})}}const ae=[()=>m(()=>import("../nodes/0.ZO1fwFGi.js"),__vite__mapDeps([0,1,2,3,4,5,6]),import.meta.url),()=>m(()=>import("../nodes/1.HeuCsOzd.js"),__vite__mapDeps([7,1,2,5]),import.meta.url),()=>m(()=>import("../nodes/2.uWPrqqNY.js"),__vite__mapDeps([8,1,2,3]),import.meta.url),()=>m(()=>import("../nodes/3.4RI4asvq.js"),__vite__mapDeps([9,1,2,10,3,4]),import.meta.url),()=>m(()=>import("../nodes/4.dEGqruDC.js"),__vite__mapDeps([11,1,2,10,3,4,12]),import.meta.url),()=>m(()=>import("../nodes/5.0gyXrGlE.js"),__vite__mapDeps([13,1,2,10,3,4]),import.meta.url),()=>m(()=>import("../nodes/6.rjtnLOtN.js"),__vite__mapDeps([14,1,2,10,3,4]),import.meta.url),()=>m(()=>import("../nodes/7.Uwp4UkCK.js"),__vite__mapDeps([15,1,2,10,3,4]),import.meta.url),()=>m(()=>import("../nodes/8.ZiH_wmF0.js"),__vite__mapDeps([16,1,2,5]),import.meta.url),()=>m(()=>import("../nodes/9.mMxhyhwo.js"),__vite__mapDeps([17,1,2,3,18,5,4]),import.meta.url),()=>m(()=>import("../nodes/10.89yCv3Jw.js"),__vite__mapDeps([19,1,2,18,5,3,4]),import.meta.url),()=>m(()=>import("../nodes/11.yZwYjp3W.js"),__vite__mapDeps([20,1,2]),import.meta.url)],le=[],fe={"/":[2],"/allUsers":[3],"/dashboard/parentDash":[4],"/dashboard/teacherDash":[5],"/dashboard/teacherDash/master":[7],"/dashboard/teacherDash/[slug]":[6],"/deleteAccount":[8],"/loginRegister/login":[9],"/loginRegister/register":[10],"/privacy":[11]},_e={handleError:({error:a})=>{console.error(a)},reroute:()=>{}};export{fe as dictionary,_e as hooks,se as matchers,ae as nodes,oe as root,le as server_loads};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["../nodes/0.ZO1fwFGi.js","../chunks/scheduler.Y7QR3Ia1.js","../chunks/index.rNqrds2l.js","../chunks/appwrite.uMEoJwqV.js","../chunks/ids.oU3rm6Oc.js","../chunks/entry.rk_BG9Dm.js","../assets/0.t8Yt2c5Q.css","../nodes/1.HeuCsOzd.js","../nodes/2.uWPrqqNY.js","../nodes/3.4RI4asvq.js","../chunks/each.6w4Ej4nR.js","../nodes/4.dEGqruDC.js","../assets/4.mtMb4gUt.css","../nodes/5.0gyXrGlE.js","../nodes/6.rjtnLOtN.js","../nodes/7.Uwp4UkCK.js","../nodes/8.ZiH_wmF0.js","../nodes/9.mMxhyhwo.js","../chunks/user.Y0kslX4O.js","../nodes/10.89yCv3Jw.js","../nodes/11.yZwYjp3W.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
