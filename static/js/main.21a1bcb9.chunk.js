(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,function(){!function(n){"use strict";function r(n,r,t){return t.a=n,t.f=r,t}function t(n){return r(2,n,function(r){return function(t){return n(r,t)}})}function e(n){return r(3,n,function(r){return function(t){return function(e){return n(r,t,e)}}})}function u(n){return r(4,n,function(r){return function(t){return function(e){return function(u){return n(r,t,e,u)}}}})}function i(n){return r(5,n,function(r){return function(t){return function(e){return function(u){return function(i){return n(r,t,e,u,i)}}}}})}function o(n){return r(6,n,function(r){return function(t){return function(e){return function(u){return function(i){return function(o){return n(r,t,e,u,i,o)}}}}}})}function a(n,r,t){return 2===n.a?n.f(r,t):n(r)(t)}function f(n,r,t,e){return 3===n.a?n.f(r,t,e):n(r)(t)(e)}function c(n,r,t,e,u){return 4===n.a?n.f(r,t,e,u):n(r)(t)(e)(u)}function v(n,r,t,e,u,i){return 5===n.a?n.f(r,t,e,u,i):n(r)(t)(e)(u)(i)}function s(n,r,t,e,u,i,o){return 6===n.a?n.f(r,t,e,u,i,o):n(r)(t)(e)(u)(i)(o)}var d=e(function(n,r,t){for(var e=Array(n),u=0;u<n;u++)e[u]=t(r+u);return e}),l=t(function(n,r){for(var t=Array(n),e=0;e<n&&r.b;e++)t[e]=r.a,r=r.b;return t.length=e,T(t,r)}),b=t(function(n,r){return r[n]}),h={$:0};function g(n,r){return{$:1,a:n,b:r}}var p=t(g);function $(n){for(var r=h,t=n.length;t--;)r=g(n[t],r);return r}function m(n){for(var r=[];n.b;n=n.b)r.push(n.a);return r}var w=e(function(n,r,t){for(var e=[];r.b&&t.b;r=r.b,t=t.b)e.push(a(n,r.a,t.a));return $(e)}),y=t(function(n,r){return $(m(r).sort(function(r,t){var e=a(n,r,t);return e===cr?0:e===vr?-1:1}))});function k(n){throw Error("https://github.com/elm/core/blob/1.0.0/hints/"+n+".md")}function A(n,r){for(var t,e=[],u=j(n,r,0,e);u&&(t=e.pop());u=j(t.a,t.b,0,e));return u}function j(n,r,t,e){if(t>100)return e.push(T(n,r)),!0;if(n===r)return!0;if("object"!==typeof n||null===n||null===r)return"function"===typeof n&&k(5),!1;for(var u in n.$<0&&(n=br(n),r=br(r)),n)if(!j(n[u],r[u],t+1,e))return!1;return!0}function E(n,r,t){if("object"!==typeof n)return n===r?0:n<r?-1:1;if("undefined"===typeof n.$)return(t=E(n.a,r.a))?t:(t=E(n.b,r.b))?t:E(n.c,r.c);for(;n.b&&r.b&&!(t=E(n.a,r.a));n=n.b,r=r.b);return t||(n.b?1:r.b?-1:0)}var _=t(function(n,r){var t=E(n,r);return t<0?vr:t?dr:cr}),N=0;function T(n,r){return{a:n,b:r}}function L(n,r,t){return{a:n,b:r,c:t}}function x(n,r){var t={};for(var e in n)t[e]=n[e];for(var e in r)t[e]=r[e];return t}function C(n,r){if("string"===typeof n)return n+r;if(!n.b)return r;var t=g(n.a,r);n=n.b;for(var e=t;n.b;n=n.b)e=e.b=g(n.a,r);return t}var O=Math.ceil,F=Math.floor,Y=Math.log;function q(n){return{$:0,a:n}}function B(n){return{$:2,b:n,c:null}}var R=t(function(n,r){return{$:3,b:n,d:r}}),S=0;function W(n){var r={$:0,e:S++,f:n,g:null,h:[]};return I(r),r}function J(n){return B(function(r){r(q(W(n)))})}function D(n,r){n.h.push(r),I(n)}var G=t(function(n,r){return B(function(t){D(n,r),t(q(N))})}),P=!1,z=[];function I(n){if(z.push(n),!P){for(P=!0;n=z.shift();)M(n);P=!1}}function M(n){for(;n.f;){var r=n.f.$;if(0===r||1===r){for(;n.g&&n.g.$!==r;)n.g=n.g.i;if(!n.g)return;n.f=n.g.b(n.f.a),n.g=n.g.i}else{if(2===r)return void(n.f.c=n.f.b(function(r){n.f=r,I(n)}));if(5===r){if(0===n.h.length)return;n.f=n.f.b(n.h.shift())}else n.g={$:3===r?0:1,b:n.f.b,i:n.g},n.f=n.f.d}}}var K=t(function(n,r){return r.join(n)}),Z=e(function(n,r,t){return t.slice(n,r)}),U=t(function(n,r){return r.indexOf(n)>-1}),X=t(function(n,r){return 0===r.indexOf(n)}),V=t(function(n,r){var t=n.length;if(t<1)return h;for(var e=0,u=[];(e=r.indexOf(n,e))>-1;)u.push(e),e+=t;return $(u)});function H(n){return{$:2,b:n}}H(function(n){return"number"!==typeof n?fn("an INT",n):-2147483647<n&&n<2147483647&&(0|n)===n?Nt(n):!isFinite(n)||n%1?fn("an INT",n):Nt(n)}),H(function(n){return"boolean"===typeof n?Nt(n):fn("a BOOL",n)}),H(function(n){return"number"===typeof n?Nt(n):fn("a FLOAT",n)}),H(function(n){return Nt(sn(n))});var Q=H(function(n){return"string"===typeof n?Nt(n):n instanceof String?Nt(n+""):fn("a STRING",n)}),nn=t(function(n,r){return{$:6,d:n,b:r}});var rn=t(function(n,r){return function(n,r){return{$:9,f:n,g:r}}(n,[r])}),tn=t(function(n,r){return en(n,dn(r))});function en(n,r){switch(n.$){case 2:return n.b(r);case 5:return null===r?Nt(n.c):fn("null",r);case 3:return on(r)?un(n.b,r,$):fn("a LIST",r);case 4:return on(r)?un(n.b,r,an):fn("an ARRAY",r);case 6:var t=n.d;if("object"!==typeof r||null===r||!(t in r))return fn("an OBJECT with a field named `"+t+"`",r);var e=en(n.b,r[t]);return kt(e)?e:_t(a(Lt,t,e.a));case 7:var u=n.e;return on(r)?u<r.length?(e=en(n.b,r[u]),kt(e)?e:_t(a(xt,u,e.a))):fn("a LONGER array. Need index "+u+" but only see "+r.length+" entries",r):fn("an ARRAY",r);case 8:if("object"!==typeof r||null===r||on(r))return fn("an OBJECT",r);var i=h;for(var o in r)if(r.hasOwnProperty(o)){if(e=en(n.b,r[o]),!kt(e))return _t(a(Lt,o,e.a));i=g(T(o,e.a),i)}return Nt(Lr(i));case 9:for(var f=n.f,c=n.g,v=0;v<c.length;v++){if(e=en(c[v],r),!kt(e))return e;f=f(e.a)}return Nt(f);case 10:return e=en(n.b,r),kt(e)?en(n.h(e.a),r):e;case 11:for(var s=h,d=n.g;d.b;d=d.b){if(e=en(d.a,r),kt(e))return e;s=g(e.a,s)}return _t(Ct(Lr(s)));case 1:return _t(a(Tt,n.a,sn(r)));case 0:return Nt(n.a)}}function un(n,r,t){for(var e=r.length,u=Array(e),i=0;i<e;i++){var o=en(n,r[i]);if(!kt(o))return _t(a(xt,i,o.a));u[i]=o.a}return Nt(t(u))}function on(n){return Array.isArray(n)||"undefined"!==typeof FileList&&n instanceof FileList}function an(n){return a(Et,n.length,function(r){return n[r]})}function fn(n,r){return _t(a(Tt,"Expecting "+n,sn(r)))}function cn(n,r){if(n===r)return!0;if(n.$!==r.$)return!1;switch(n.$){case 0:case 1:return n.a===r.a;case 2:return n.b===r.b;case 5:return n.c===r.c;case 3:case 4:case 8:return cn(n.b,r.b);case 6:return n.d===r.d&&cn(n.b,r.b);case 7:return n.e===r.e&&cn(n.b,r.b);case 9:return n.f===r.f&&vn(n.g,r.g);case 10:return n.h===r.h&&cn(n.b,r.b);case 11:return vn(n.g,r.g)}}function vn(n,r){var t=n.length;if(t!==r.length)return!1;for(var e=0;e<t;e++)if(!cn(n[e],r[e]))return!1;return!0}function sn(n){return n}function dn(n){return n}sn(null);var ln={};function bn(n,r,t,e,u){return{b:n,c:r,d:t,e:e,f:u}}function hn(n,r){var t={g:r,h:void 0},e=n.c,u=n.d,i=n.e,o=n.f;return t.h=W(a(R,function n(r){return a(R,n,{$:5,b:function(n){var a=n.a;return 0===n.$?f(u,t,a,r):i&&o?c(e,t,a.i,a.j,r):f(e,t,i?a.i:a.j,r)}})},n.b))}var gn,pn=t(function(n,r){return B(function(t){n.g(r),t(q(N))})}),$n=t(function(n,r){return a(G,n.h,{$:0,a:r})});function mn(n){return function(r){return{$:1,k:n,l:r}}}function wn(n,r,t){var e={};for(var u in yn(!0,r,e,null),yn(!1,t,e,null),n)D(n[u],{$:"fx",a:e[u]||{i:h,j:h}})}function yn(n,r,t,e){switch(r.$){case 1:var u=r.k,i=function(n,t,e){return a(n?ln[t].e:ln[t].f,function(n){for(var r=e;r;r=r.q)n=r.p(n);return n},r.l)}(n,u,e);return void(t[u]=function(n,r,t){return t=t||{i:h,j:h},n?t.i=g(r,t.i):t.j=g(r,t.j),t}(n,i,t[u]));case 2:for(var o=r.m;o.b;o=o.b)yn(n,o.a,t,e);return;case 3:return void yn(n,r.o,t,{p:r.n,q:e})}}var kn="undefined"!==typeof document?document:{};function An(n,r){n.appendChild(r)}function jn(n){return{$:0,a:n}}var En=t(function(n,r){return t(function(t,e){for(var u=[],i=0;e.b;e=e.b){var o=e.a;i+=o.b||0,u.push(o)}return i+=u.length,{$:1,c:r,d:xn(t),e:u,f:n,b:i}})})(void 0);t(function(n,r){return t(function(t,e){for(var u=[],i=0;e.b;e=e.b){var o=e.a;i+=o.b.b||0,u.push(o)}return i+=u.length,{$:2,c:r,d:xn(t),e:u,f:n,b:i}})})(void 0);var _n,Nn=t(function(n,r){return{$:"a0",n:n,o:r}}),Tn=t(function(n,r){return{$:"a2",n:n,o:r}}),Ln=t(function(n,r){return{$:"a3",n:n,o:r}});function xn(n){for(var r={};n.b;n=n.b){var t=n.a,e=t.$,u=t.n,i=t.o;if("a2"!==e){var o=r[e]||(r[e]={});"a3"===e&&"class"===u?Cn(o,u,i):o[u]=i}else"className"===u?Cn(r,u,dn(i)):r[u]=dn(i)}return r}function Cn(n,r,t){var e=n[r];n[r]=e?e+" "+t:t}function On(n,r){var t=n.$;if(5===t)return On(n.k||(n.k=n.m()),r);if(0===t)return kn.createTextNode(n.a);if(4===t){for(var e=n.k,u=n.j;4===e.$;)"object"!==typeof u?u=[u,e.j]:u.push(e.j),e=e.k;var i={j:u,p:r};return(o=On(e,i)).elm_event_node_ref=i,o}if(3===t)return Fn(o=n.h(n.g),r,n.d),o;var o=n.f?kn.createElementNS(n.f,n.c):kn.createElement(n.c);gn&&"a"==n.c&&o.addEventListener("click",gn(o)),Fn(o,r,n.d);for(var a=n.e,f=0;f<a.length;f++)An(o,On(1===t?a[f]:a[f].b,r));return o}function Fn(n,r,t){for(var e in t){var u=t[e];"a1"===e?Yn(n,u):"a0"===e?Rn(n,r,u):"a3"===e?qn(n,u):"a4"===e?Bn(n,u):("value"!==e&&"checked"!==e||n[e]!==u)&&(n[e]=u)}}function Yn(n,r){var t=n.style;for(var e in r)t[e]=r[e]}function qn(n,r){for(var t in r){var e=r[t];"undefined"!==typeof e?n.setAttribute(t,e):n.removeAttribute(t)}}function Bn(n,r){for(var t in r){var e=r[t],u=e.f,i=e.o;"undefined"!==typeof i?n.setAttributeNS(u,t,i):n.removeAttributeNS(u,t)}}function Rn(n,r,t){var e=n.elmFs||(n.elmFs={});for(var u in t){var i=t[u],o=e[u];if(i){if(o){if(o.q.$===i.$){o.q=i;continue}n.removeEventListener(u,o)}o=Sn(r,i),n.addEventListener(u,o,_n&&{passive:ge(i)<2}),e[u]=o}else n.removeEventListener(u,o),e[u]=void 0}}try{window.addEventListener("t",null,Object.defineProperty({},"passive",{get:function(){_n=!0}}))}catch(n){}function Sn(n,r){function t(r){var e=t.q,u=en(e.a,r);if(kt(u)){for(var i,o=ge(e),a=u.a,f=o?o<3?a.a:a.t:a,c=1==o?a.b:3==o&&a.ac,v=(c&&r.stopPropagation(),(2==o?a.b:3==o&&a.aa)&&r.preventDefault(),n);i=v.j;){if("function"==typeof i)f=i(f);else for(var s=i.length;s--;)f=i[s](f);v=v.p}v(f,c)}}return t.q=r,t}function Wn(n,r){return n.$==r.$&&cn(n.a,r.a)}function Jn(n,r,t,e){var u={$:r,r:t,s:e,t:void 0,u:void 0};return n.push(u),u}function Dn(n,r,t,e){if(n!==r){var u=n.$,i=r.$;if(u!==i){if(1!==u||2!==i)return void Jn(t,0,e,r);r=function(n){for(var r=n.e,t=r.length,e=Array(t),u=0;u<t;u++)e[u]=r[u].b;return{$:1,c:n.c,d:n.d,e:e,f:n.f,b:n.b}}(r),i=1}switch(i){case 5:for(var o=n.l,a=r.l,f=o.length,c=f===a.length;c&&f--;)c=o[f]===a[f];if(c)return void(r.k=n.k);r.k=r.m();var v=[];return Dn(n.k,r.k,v,0),void(v.length>0&&Jn(t,1,e,v));case 4:for(var s=n.j,d=r.j,l=!1,b=n.k;4===b.$;)l=!0,"object"!==typeof s?s=[s,b.j]:s.push(b.j),b=b.k;for(var h=r.k;4===h.$;)l=!0,"object"!==typeof d?d=[d,h.j]:d.push(h.j),h=h.k;return l&&s.length!==d.length?void Jn(t,0,e,r):((l?function(n,r){for(var t=0;t<n.length;t++)if(n[t]!==r[t])return!1;return!0}(s,d):s===d)||Jn(t,2,e,d),void Dn(b,h,t,e+1));case 0:return void(n.a!==r.a&&Jn(t,3,e,r.a));case 1:return void Gn(n,r,t,e,zn);case 2:return void Gn(n,r,t,e,In);case 3:if(n.h!==r.h)return void Jn(t,0,e,r);var g=Pn(n.d,r.d);g&&Jn(t,4,e,g);var p=r.i(n.g,r.g);return void(p&&Jn(t,5,e,p))}}}function Gn(n,r,t,e,u){if(n.c===r.c&&n.f===r.f){var i=Pn(n.d,r.d);i&&Jn(t,4,e,i),u(n,r,t,e)}else Jn(t,0,e,r)}function Pn(n,r,t){var e;for(var u in n)if("a1"!==u&&"a0"!==u&&"a3"!==u&&"a4"!==u)if(u in r){var i=n[u],o=r[u];i===o&&"value"!==u&&"checked"!==u||"a0"===t&&Wn(i,o)||((e=e||{})[u]=o)}else(e=e||{})[u]=t?"a1"===t?"":"a0"===t||"a3"===t?void 0:{f:n[u].f,o:void 0}:"string"===typeof n[u]?"":null;else{var a=Pn(n[u],r[u]||{},u);a&&((e=e||{})[u]=a)}for(var f in r)f in n||((e=e||{})[f]=r[f]);return e}function zn(n,r,t,e){var u=n.e,i=r.e,o=u.length,a=i.length;o>a?Jn(t,6,e,{v:a,i:o-a}):o<a&&Jn(t,7,e,{v:o,e:i});for(var f=o<a?o:a,c=0;c<f;c++){var v=u[c];Dn(v,i[c],t,++e),e+=v.b||0}}function In(n,r,t,e){for(var u=[],i={},o=[],a=n.e,f=r.e,c=a.length,v=f.length,s=0,d=0,l=e;s<c&&d<v;){var b=(_=a[s]).a,h=(N=f[d]).a,g=_.b,p=N.b,$=void 0,m=void 0;if(b!==h){var w=a[s+1],y=f[d+1];if(w){var k=w.a,A=w.b;m=h===k}if(y){var j=y.a,E=y.b;$=b===j}if($&&m)Dn(g,E,u,++l),Kn(i,u,b,p,d,o),l+=g.b||0,Zn(i,u,b,A,++l),l+=A.b||0,s+=2,d+=2;else if($)l++,Kn(i,u,h,p,d,o),Dn(g,E,u,l),l+=g.b||0,s+=1,d+=2;else if(m)Zn(i,u,b,g,++l),l+=g.b||0,Dn(A,p,u,++l),l+=A.b||0,s+=2,d+=1;else{if(!w||k!==j)break;Zn(i,u,b,g,++l),Kn(i,u,h,p,d,o),l+=g.b||0,Dn(A,E,u,++l),l+=A.b||0,s+=2,d+=2}}else Dn(g,p,u,++l),l+=g.b||0,s++,d++}for(;s<c;){var _;Zn(i,u,(_=a[s]).a,g=_.b,++l),l+=g.b||0,s++}for(;d<v;){var N,T=T||[];Kn(i,u,(N=f[d]).a,N.b,void 0,T),d++}(u.length>0||o.length>0||T)&&Jn(t,8,e,{w:u,x:o,y:T})}var Mn="_elmW6BL";function Kn(n,r,t,e,u,i){var o=n[t];if(!o)return i.push({r:u,A:o={c:0,z:e,r:u,s:void 0}}),void(n[t]=o);if(1===o.c){i.push({r:u,A:o}),o.c=2;var a=[];return Dn(o.z,e,a,o.r),o.r=u,void(o.s.s={w:a,A:o})}Kn(n,r,t+Mn,e,u,i)}function Zn(n,r,t,e,u){var i=n[t];if(i){if(0===i.c){i.c=2;var o=[];return Dn(e,i.z,o,u),void Jn(r,9,u,{w:o,A:i})}Zn(n,r,t+Mn,e,u)}else{var a=Jn(r,9,u,void 0);n[t]={c:1,z:e,r:u,s:a}}}function Un(n,r,t,e){return 0===t.length?n:(function n(r,t,e,u){!function r(t,e,u,i,o,a,f){for(var c=u[i],v=c.r;v===o;){var s=c.$;if(1===s)n(t,e.k,c.s,f);else if(8===s)c.t=t,c.u=f,(d=c.s.w).length>0&&r(t,e,d,0,o,a,f);else if(9===s){c.t=t,c.u=f;var d,l=c.s;l&&(l.A.s=t,(d=l.w).length>0&&r(t,e,d,0,o,a,f))}else c.t=t,c.u=f;if(!(c=u[++i])||(v=c.r)>a)return i}var b=e.$;if(4===b){for(var h=e.k;4===h.$;)h=h.k;return r(t,h,u,i,o+1,a,t.elm_event_node_ref)}for(var g=e.e,p=t.childNodes,$=0;$<g.length;$++){o++;var m=1===b?g[$]:g[$].b,w=o+(m.b||0);if(o<=v&&v<=w&&(!(c=u[i=r(p[$],m,u,i,o,w,f)])||(v=c.r)>a))return i;o=w}return i}(r,t,e,0,0,t.b,u)}(n,r,t,e),Xn(n,t))}function Xn(n,r){for(var t=0;t<r.length;t++){var e=r[t],u=e.t,i=Vn(u,e);u===n&&(n=i)}return n}function Vn(n,r){switch(r.$){case 0:return function(n){var t=n.parentNode,e=On(r.s,r.u);return e.elm_event_node_ref||(e.elm_event_node_ref=n.elm_event_node_ref),t&&e!==n&&t.replaceChild(e,n),e}(n);case 4:return Fn(n,r.u,r.s),n;case 3:return n.replaceData(0,n.length,r.s),n;case 1:return Xn(n,r.s);case 2:return n.elm_event_node_ref?n.elm_event_node_ref.j=r.s:n.elm_event_node_ref={j:r.s,p:r.u},n;case 6:for(var t=r.s,e=0;e<t.i;e++)n.removeChild(n.childNodes[t.v]);return n;case 7:for(var u=(t=r.s).e,i=n.childNodes[e=t.v];e<u.length;e++)n.insertBefore(On(u[e],r.u),i);return n;case 9:if(!(t=r.s))return n.parentNode.removeChild(n),n;var o=t.A;return"undefined"!==typeof o.r&&n.parentNode.removeChild(n),o.s=Xn(n,t.w),n;case 8:return function(n,r){var t=r.s,e=function(n,r){if(n){for(var t=kn.createDocumentFragment(),e=0;e<n.length;e++){var u=n[e].A;An(t,2===u.c?u.s:On(u.z,r.u))}return t}}(t.y,r);n=Xn(n,t.w);for(var u=t.x,i=0;i<u.length;i++){var o=u[i],a=o.A,f=2===a.c?a.s:On(a.z,r.u);n.insertBefore(f,n.childNodes[o.r])}return e&&An(n,e),n}(n,r);case 5:return r.s(n);default:k(10)}}var Hn=u(function(n,r,t,e){return function(n,r,t,e,u,i){var o=a(tn,n,sn(r?r.flags:void 0));kt(o)||k(2);var f={},c=(o=t(o.a)).a,v=i(d,c),s=function(n,r){var t;for(var e in ln){var u=ln[e];u.a&&((t=t||{})[e]=u.a(e,r)),n[e]=hn(u,r)}return t}(f,d);function d(n,r){v(c=(o=a(e,n,c)).a,r),wn(f,o.b,u(c))}return wn(f,o.b,u(c)),s?{ports:s}:{}}(r,e,n.aP,n.aY,n.aW,function(r,t){var e=n.N&&n.N(r),u=n.aZ,i=kn.title,o=kn.body,c=function n(r){if(3===r.nodeType)return jn(r.textContent);if(1!==r.nodeType)return jn("");for(var t=h,e=r.attributes,u=e.length;u--;){var i=e[u];t=g(a(Ln,i.name,i.value),t)}var o=r.tagName.toLowerCase(),c=h,v=r.childNodes;for(u=v.length;u--;)c=g(n(v[u]),c);return f(En,o,t,c)}(o);return function(n,r){r(n);var t=0;function e(){t=1===t?0:(Qn(e),r(n),1)}return function(u,i){n=u,i?(r(n),2===t&&(t=1)):(0===t&&Qn(e),t=2)}}(t,function(n){gn=e;var t=u(n),a=En("body")(h)(t.aG),f=function(n,r){var t=[];return Dn(n,r,t,0),t}(c,a);o=Un(o,c,f,r),c=a,gn=0,i!==t.aX&&(kn.title=i=t.aX)})})}),Qn=("undefined"!==typeof cancelAnimationFrame&&cancelAnimationFrame,"undefined"!==typeof requestAnimationFrame?requestAnimationFrame:function(n){return setTimeout(n,1e3/60)});function nr(){return Le(kn.location.href).a||k(1)}var rr,tr,er=t(function(n,r){return a(be,fe,B(function(){history.pushState({},"",r),n()}))}),ur={addEventListener:function(){},removeEventListener:function(){}},ir="undefined"!==typeof document?document:ur,or="undefined"!==typeof window?window:ur,ar=e(function(n,r,t){return J(B(function(){function e(n){W(t(n))}return n.addEventListener(r,e,_n&&{passive:!0}),function(){n.removeEventListener(r,e)}}))}),fr=t(function(n,r){var t=en(n,r);return kt(t)?ct(t.a):vt}),cr=1,vr=0,sr=p,dr=2,lr=e(function(n,r,t){for(;;){if(-2===t.$)return r;var e=t.d,u=n,i=f(n,t.b,t.c,f(lr,n,r,t.e));n=u,r=i,t=e}}),br=function(n){return f(lr,e(function(n,r,t){return a(sr,T(n,r),t)}),h,n)},hr=e(function(n,r,t){for(;;){if(E(n,r)>=1)return t;var e=n,u=r-1,i=a(sr,r,t);n=e,r=u,t=i}}),gr=t(function(n,r){return f(hr,n,r,h)}),pr=e(function(n,r,t){for(;;){if(!t.b)return r;var e=t.b,u=n,i=a(n,t.a,r);n=u,r=i,t=e}}),$r={$:-2},mr=$r,wr=mr,yr=i(function(n,r,t,e,u){return{$:-1,a:n,b:r,c:t,d:e,e:u}}),kr=_,Ar=i(function(n,r,t,e,u){if(-1!==u.$||u.a){if(-1!==e.$||e.a||-1!==e.d.$||e.d.a)return v(yr,n,r,t,e,u);var i=e.d;return o=e.e,v(yr,0,e.b,e.c,v(yr,1,i.b,i.c,i.d,i.e),v(yr,1,r,t,o,u))}var o,a=u.b,f=u.c,c=u.d,s=u.e;return-1!==e.$||e.a?v(yr,n,a,f,v(yr,0,r,t,e,c),s):v(yr,0,r,t,v(yr,1,e.b,e.c,e.d,o=e.e),v(yr,1,a,f,c,s))}),jr=e(function(n,r,t){if(-2===t.$)return v(yr,0,n,r,$r,$r);var e=t.a,u=t.b,i=t.c,o=t.d,c=t.e;switch(a(kr,n,u)){case 0:return v(Ar,e,u,i,f(jr,n,r,o),c);case 1:return v(yr,e,u,r,o,c);default:return v(Ar,e,u,i,o,f(jr,n,r,c))}}),Er=e(function(n,r,t){var e=f(jr,n,r,t);return-1!==e.$||e.a?e:v(yr,1,e.b,e.c,e.d,e.e)}),_r=t(function(n,r){return f(Er,n,0,r)}),Nr=function(n){return f(pr,_r,wr,n)},Tr=Nr(a(gr,1,16)),Lr=function(n){return f(pr,sr,h,n)},xr=u(function(n,r,t,e){if(e.b){var u=e.a,i=e.b;if(i.b){var o=i.a,v=i.b;if(v.b){var s=v.a,d=v.b;if(d.b){var l=d.b;return a(n,u,a(n,o,a(n,s,a(n,d.a,t>500?f(pr,n,r,Lr(l)):c(xr,n,r,t+1,l)))))}return a(n,u,a(n,o,a(n,s,r)))}return a(n,u,a(n,o,r))}return a(n,u,r)}return r}),Cr=e(function(n,r,t){return c(xr,n,r,0,t)}),Or=t(function(n,r){return f(Cr,t(function(r,t){return a(sr,n(r),t)}),h,r)}),Fr=u(function(n,r,t,e){return{$:0,a:n,b:r,c:t,d:e}}),Yr=O,qr=t(function(n,r){return Y(r)/Y(n)}),Br=Yr(a(qr,2,32)),Rr=[],Sr=c(Fr,0,Br,Rr,Rr),Wr=function(n){return{$:1,a:n}},Jr=l,Dr=t(function(n,r){for(;;){var t=a(Jr,32,n),e=t.b,u=a(sr,{$:0,a:t.a},r);if(!e.b)return Lr(u);n=e,r=u}}),Gr=t(function(n,r){for(;;){var t=Yr(r/32);if(1===t)return a(Jr,32,n).a;n=a(Dr,n,h),r=t}}),Pr=F,zr=t(function(n,r){return E(n,r)>0?n:r}),Ir=function(n){return n.length},Mr=t(function(n,r){if(r.a){var t=32*r.a,e=Pr(a(qr,32,t-1)),u=n?Lr(r.d):r.d,i=a(Gr,u,r.a);return c(Fr,Ir(r.c)+t,a(zr,5,e*Br),i,r.c)}return c(Fr,Ir(r.c),Br,Rr,r.c)}),Kr=e(function(n,r,t){for(;;){var e=a(Jr,32,n),u=e.a,i=e.b;if(E(Ir(u),32)<0)return a(Mr,!0,{d:r,a:t,c:u});n=i,r=a(sr,Wr(u),r),t+=1}}),Zr=e(function(n,r,t){for(;;){if(-2===t.$)return r;var e=t.e,u=n,i=f(n,t.b,t.c,f(Zr,n,r,t.d));n=u,r=i,t=e}}),Ur=function(n){if(-1===n.$&&-1===n.d.$&&-1===n.e.$){if(-1!==n.e.d.$||n.e.d.a){var r=n.d,t=n.e;return o=t.b,a=t.c,e=t.d,s=t.e,v(yr,1,n.b,n.c,v(yr,0,r.b,r.c,r.d,r.e),v(yr,0,o,a,e,s))}var e,u=n.d,i=n.e,o=i.b,a=i.c,f=(e=i.d).d,c=e.e,s=i.e;return v(yr,0,e.b,e.c,v(yr,1,n.b,n.c,v(yr,0,u.b,u.c,u.d,u.e),f),v(yr,1,o,a,c,s))}return n},Xr=function(n){if(-1===n.$&&-1===n.d.$&&-1===n.e.$){if(-1!==n.d.d.$||n.d.d.a){var r=n.d,t=n.e;return c=t.b,s=t.c,d=t.d,l=t.e,v(yr,1,e=n.b,u=n.c,v(yr,0,r.b,r.c,r.d,a=r.e),v(yr,0,c,s,d,l))}var e=n.b,u=n.c,i=n.d,o=i.d,a=i.e,f=n.e,c=f.b,s=f.c,d=f.d,l=f.e;return v(yr,0,i.b,i.c,v(yr,1,o.b,o.c,o.d,o.e),v(yr,1,e,u,a,v(yr,0,c,s,d,l)))}return n},Vr=r(7,tr=function(n,r,t,e,u,i,o){if(-1!==i.$||i.a){n:for(;;){if(-1===o.$&&1===o.a){if(-1===o.d.$){if(1===o.d.a)return Xr(r);break n}return Xr(r)}break n}return r}return v(yr,t,i.b,i.c,i.d,v(yr,0,e,u,i.e,o))},function(n){return function(r){return function(t){return function(e){return function(u){return function(i){return function(o){return tr(n,r,t,e,u,i,o)}}}}}}}),Hr=function(n){if(-1===n.$&&-1===n.d.$){var r=n.a,t=n.b,e=n.c,u=n.d,i=u.d,o=n.e;if(1===u.a){if(-1!==i.$||i.a){var a=Ur(n);if(-1===a.$){var f=a.e;return v(Ar,a.a,a.b,a.c,Hr(a.d),f)}return $r}return v(yr,r,t,e,Hr(u),o)}return v(yr,r,t,e,Hr(u),o)}return $r},Qr=t(function(n,r){if(-2===r.$)return $r;var t,e,u,i,o,f,c,s,d=r.a,l=r.b,b=r.c,h=r.d,g=r.e;if(E(n,l)<0){if(-1===h.$&&1===h.a){var p=h.d;if(-1!==p.$||p.a){var $=Ur(r);if(-1===$.$){var m=$.e;return v(Ar,$.a,$.b,$.c,a(Qr,n,$.d),m)}return $r}return v(yr,d,l,b,a(Qr,n,h),g)}return v(yr,d,l,b,a(Qr,n,h),g)}return a(nt,n,(e=n,u=r,i=d,o=l,f=b,c=h,s=g,7===(t=Vr).a?t.f(e,u,i,o,f,c,s):t(e)(u)(i)(o)(f)(c)(s)))}),nt=t(function(n,r){if(-1===r.$){var t=r.a,e=r.b,u=r.c,i=r.d,o=r.e;if(A(n,e)){var f=function(n){for(;;){if(-1!==n.$||-1!==n.d.$)return n;n=n.d}}(o);return-1===f.$?v(Ar,t,f.b,f.c,i,Hr(o)):$r}return v(Ar,t,e,u,i,a(Qr,n,o))}return $r}),rt=t(function(n,r){var t=a(Qr,n,r);return-1!==t.$||t.a?t:v(yr,1,t.b,t.c,t.d,t.e)}),tt=t(function(n,r){return f(Zr,e(function(n,r,t){return a(rt,n,t)}),n,r)}),et=t(function(n,r){return a(tt,n,r)}),ut=function(n){return t=n.b?a(et,Tr,function(n){return Nr(a(Or,function(n){return n.J},n))}(n)):Tr,u=t,(r=f(lr,e(function(n,r,t){return a(sr,n,t)}),h,u)).b?f(Kr,r,h,0):Sr;var r,t,u},it=function(n){return{$:3,a:n}},ot=4294967295>>>32-Br,at=b,ft=e(function(n,r,t){for(;;){var e=a(at,ot&r>>>n,t);if(e.$)return a(at,ot&r,e.a);n-=Br,r=r,t=e.a}}),ct=function(n){return{$:0,a:n}},vt={$:1},st=t(function(n,r){var t=r.a,e=r.b,u=r.c,i=r.d;return n<0||E(n,t)>-1?vt:E(n,function(n){return n>>>5<<5}(t))>-1?ct(a(at,ot&n,i)):ct(f(ft,e,n,u))}),dt=t(function(n,r){return r.$?n:r.a}),lt=t(function(n,r){return{$:0,a:n,b:r}}),bt=function(n){var r=n.b;return a(lt,1664525*n.a+r>>>0,r)},ht=function(n){var r=n.a,t=277803737*(r^r>>>4+(r>>>28));return(t>>>22^t)>>>0},gt=t(function(n,r){return function(t){var e=E(n,r)<0?T(n,r):T(r,n),u=e.a,i=e.b-u+1;if(i-1&i){var o=(-i>>>0)%i>>>0;return function(n){for(;;){var r=ht(n),t=bt(n);if(E(r,o)>=0)return T(r%i+u,t);n=t}}(t)}return T(((i-1&ht(t))>>>0)+u,bt(t))}}),pt=t(function(n,r){var t=r;return function(r){var e=t(r),u=e.b;return T(n(e.a),u)}}),$t=R,mt=q,wt=(rr=function(n){return n},B(function(n){n(q(rr(Date.now())))})),yt=a($t,function(n){return mt(function(n){var r=bt(a(lt,0,1013904223));return bt(a(lt,r.a+n>>>0,r.b))}(n))},wt),kt=function(n){return!n.$},At=d,jt=i(function(n,r,t,e,u){for(;;){if(r<0)return a(Mr,!1,{d:e,a:t/32|0,c:u});var i=Wr(f(At,32,r,n));n=n,r-=32,t=t,e=a(sr,i,e),u=u}}),Et=t(function(n,r){if(n>0){var t=n%32;return v(jt,r,n-t-32,n,h,f(At,t,n-t,r))}return Sr}),_t=function(n){return{$:1,a:n}},Nt=function(n){return{$:0,a:n}},Tt=t(function(n,r){return{$:3,a:n,b:r}}),Lt=t(function(n,r){return{$:0,a:n,b:r}}),xt=t(function(n,r){return{$:1,a:n,b:r}}),Ct=function(n){return{$:2,a:n}},Ot=w,Ft=function(n){return n+""},Yt=t(function(n,r){return a(K,n,m(r))}),qt=pn,Bt=t(function(n,r){return n(r)}),Rt=e(function(n,r,t){if(r.b){var e=r.b,u=a(Bt,r.a,t),i=u.b;return a($t,function(){return f(Rt,n,e,i)},a(qt,n,u.a))}return mt(t)});ln.Random=bn(yt,Rt,e(function(n,r,t){return mt(t)}),t(function(n,r){return a(pt,n,r)}));var St=mn("Random"),Wt=t(function(n,r){return St(a(pt,n,r))}),Jt=t(function(n,r){return r+4*(n-1)}),Dt=t(function(n,r){var t=a(Jt,r.p,r.o),e=a(Jt,n.p,n.o);return E(e,t)>0?2:E(e,t)<0?0:1}),Gt=y,Pt=function(n){return a(Or,function(n){return x(n,{J:a(Jt,n.p,n.o)})},a(Gt,Dt,n))},zt={$:2,m:h},It=function(n){return E((e=n,f(pr,t(function(n,r){return r+1}),0,e)),16)<0?(r=ut(Pt(n)),a(Wt,it,function(n){return a(pt,function(r){return function(n){return{o:(n-1)%4+1,J:n,x:!1,T:!0,p:1+((n-1)/4|0),f:2}}(a(dt,1,a(st,r-1,n)))},a(gt,1,n.a))}(r))):zt;var r,e},Mt=t(function(n,r){return{Y:r,h:h,ad:n}}),Kt=e(function(n,r,t){return T(a(Mt,r,t),It(h))}),Zt={$:5},Ut={$:7},Xt={$:6},Vt={$:4},Ht={$:0},Qt=rn,ne=a(Qt,function(n){switch(n){case"ArrowUp":return Vt;case"ArrowDown":return Zt;case"ArrowRight":return Xt;case"ArrowLeft":return Ut;default:return Ht}},a(nn,"key",Q)),re=e(function(n,r,t){return{$:0,a:n,b:r,c:t}}),te=t(function(n,r){return{aq:r,aA:n}}),ee=mt(a(te,h,mr)),ue=function(n){return T(C(n.a?"w_":"d_",n.b),n)},ie=t(function(n,r){return{ai:r,Y:n}}),oe=$n,ae=t(function(n,r){return a($t,function(r){return mt(n(r))},r)}),fe=function(n){for(;;)n=n},ce=mt(0),ve=e(function(n,r,t){return a($t,function(r){return a($t,function(t){return mt(a(n,r,t))},t)},r)}),se=function(n){return f(Cr,ve(sr),mt(h),n)},de=t(function(n,r){var t=r;return J(a($t,qt(n),t))});ln.Task=bn(ce,e(function(n,r){return a(ae,function(){return 0},se(a(Or,de(n),r)))}),e(function(){return mt(0)}),t(function(n,r){return a(ae,n,r)}));var le=mn("Task"),be=t(function(n,r){return le(a(ae,n,r))}),he=function(n){return{$:0,a:n}},ge=function(n){switch(n.$){case 0:return 0;case 1:return 1;case 2:return 2;default:return 3}},pe=Z,$e=t(function(n,r){return n<1?r:f(pe,n,r.length,r)}),me=X,we=V,ye=function(n){return""===n},ke=t(function(n,r){return n<1?"":f(pe,0,n,r)}),Ae=U,je=o(function(n,r,t,e,u,i){return{aj:i,al:r,ap:e,ar:t,au:n,av:u}}),Ee=i(function(n,r,t,e,u){if(ye(u)||a(Ae,"@",u))return vt;var i=a(we,":",u);if(i.b){if(i.b.b)return vt;var o=i.a,f=function(n){for(var r=0,t=n.charCodeAt(0),e=43==t||45==t?1:0,u=e;u<n.length;++u){var i=n.charCodeAt(u);if(i<48||57<i)return vt;r=10*r+i-48}return u==e?vt:ct(45==t?-r:r)}(a($e,o+1,u));if(1===f.$)return vt;var c=f;return ct(s(je,n,a(ke,o,u),c,r,t,e))}return ct(s(je,n,u,vt,r,t,e))}),_e=u(function(n,r,t,e){if(ye(e))return vt;var u=a(we,"/",e);if(u.b){var i=u.a;return v(Ee,n,a($e,i,e),r,t,a(ke,i,e))}return v(Ee,n,"/",r,t,e)}),Ne=e(function(n,r,t){if(ye(t))return vt;var e=a(we,"?",t);if(e.b){var u=e.a;return c(_e,n,ct(a($e,u+1,t)),r,a(ke,u,t))}return c(_e,n,vt,r,t)}),Te=t(function(n,r){if(ye(r))return vt;var t=a(we,"#",r);if(t.b){var e=t.a;return f(Ne,n,ct(a($e,e+1,r)),a(ke,e,r))}return f(Ne,n,vt,r)}),Le=function(n){return a(me,"http://",n)?a(Te,0,a($e,7,n)):a(me,"https://",n)?a(Te,1,a($e,8,n)):vt},xe=e(function(n,r,t){return a(ae,function(n){return T(r,n)},f(ar,t.a?or:ir,t.b,function(t){return a(oe,n,a(ie,r,t))}))}),Ce=function(n){return f(pr,t(function(n,r){return f(Er,n.a,n.b,r)}),mr,n)},Oe=o(function(n,r,u,i,o,a){var v=f(Zr,e(function(t,e,i){n:for(;;){var o=i.a,a=i.b;if(o.b){var v=o.a,s=v.a,d=v.b,l=o.b;if(E(s,t)<0){t=t,e=e,i=T(l,f(n,s,d,a));continue n}return E(s,t)>0?T(o,f(u,t,e,a)):T(l,c(r,s,d,e,a))}return T(o,f(u,t,e,a))}}),T(br(i),a),o),s=v.a,d=v.b;return f(pr,t(function(r,t){return f(n,r.a,r.b,t)}),d,s)}),Fe=t(function(n,r){return f(Zr,Er,r,n)}),Ye=function(n){return B(function(r){var t=n.f;2===t.$&&t.c&&t.c(),n.f=null,r(q(N))})},qe=e(function(n,r,t){var i=e(function(r,t,e){var u=e.c;return L(e.a,e.b,a(sr,f(xe,n,r,t),u))}),o=e(function(n,r,t){var e=t.b,u=t.c;return L(a(sr,r,t.a),e,u)}),c=u(function(n,r,t,e){var u=e.c;return L(e.a,f(Er,n,r,e.b),u)}),v=a(Or,ue,r),d=s(Oe,o,c,i,t.aq,Ce(v),L(h,mr,h)),l=d.b,b=d.c;return a($t,function(n){return mt(a(te,v,a(Fe,l,Ce(n))))},a($t,function(){return se(b)},se(a(Or,Ye,d.a))))}),Be=e(function(n,r,t){var e=n(r);return e.$?t:a(sr,e.a,t)}),Re=t(function(n,r){return f(Cr,Be(n),h,r)});ln["Browser.Events"]=bn(ee,qe,e(function(n,r,t){var e=r.Y,u=r.ai,i=a(Re,function(n){var r=n.b.c;return A(n.a,e)?a(fr,r,u):vt},t.aA);return a($t,function(){return mt(t)},se(a(Or,qt(n),i)))}),0,t(function(n,r){return f(re,r.a,r.b,a(Qt,n,r.c))}));var Se,We,Je,De,Ge,Pe,ze=mn("Browser.Events"),Ie=a(e(function(n,r,t){return ze(f(re,n,r,t))}),0,"keydown"),Me=t(function(n,r){return a(sr,n,a(Or,function(n){return x(n,{T:!1})},r))}),Ke=t(function(n,r){return f(Cr,t(function(r,t){return n(r)?a(sr,r,t):t}),h,r)}),Ze=e(function(n,r,e){return f(Ot,t(function(n,r){return x(n,{p:r})}),a(Ke,function(n){return A(n.o,r)},e),n)}),Ue=u(function(n,r,t,e){n:for(;;){if(!e.b)return A(r.f,t.f)?Lr(a(sr,x(r,{x:!0,f:2*r.f}),n)):Lr(a(sr,t,a(sr,r,n)));if(e.b.b){var u=e.a,i=e.b,o=i.a,f=i.b;if(A(r.f,t.f)){n=a(sr,x(r,{x:!0,f:2*r.f}),n),r=u,t=o,e=f;continue n}n=a(sr,r,n),r=t,t=u,e=a(sr,o,f)}else{if(u=e.a,A(r.f,t.f))return $([x(r,{x:!0,f:2*r.f}),u]);n=a(sr,r,n),r=t,t=u,e=h}}}),Xe=function(n){if(n.b&&n.b.b){var r=n.b;return c(Ue,h,n.a,r.a,r.b)}return n},Ve=Lr(a(gr,1,4)),He=t(function(n,r){return r.b?f(Cr,sr,r,n):n}),Qe=function(n){return f(Cr,He,h,n)},nu=t(function(n,r){return Qe($([f(Ze,n,1,Xe(f(Ze,n,1,r))),f(Ze,n,2,Xe(f(Ze,Ve,2,r))),f(Ze,n,3,Xe(f(Ze,n,3,r))),f(Ze,n,4,Xe(f(Ze,n,4,r)))]))}),ru=function(n){return a(Or,function(n){return x(n,{x:!1})},n)},tu=e(function(n,r,e){return f(Ot,t(function(n,r){return x(n,{o:r})}),a(Ke,function(n){return A(n.p,r)},e),n)}),eu=t(function(n,r){return Qe($([f(tu,n,1,Xe(f(tu,n,1,r))),f(tu,n,2,Xe(f(tu,Ve,2,r))),f(tu,n,3,Xe(f(tu,n,3,r))),f(tu,n,4,Xe(f(tu,n,4,r)))]))}),uu=a(gr,1,4),iu=function(n){return B(function(r){var t=setTimeout(function(){r(q(N))},n);return function(){clearTimeout(t)}})},ou=a(be,t(function(n){return n})({$:2}),iu(300)),au=t(function(n,r){return n+4*(r-1)}),fu=t(function(n,r){var t=a(au,r.p,r.o),e=a(au,n.p,n.o);return E(e,t)>0?2:E(e,t)<0?0:1}),cu=function(n){return a(Or,function(n){return x(n,{J:a(au,n.p,n.o)})},a(Gt,fu,n))},vu=er,su=t(function(n,r){return 1===n.$?r:r+":"+Ft(n.a)}),du=e(function(n,r,t){return 1===r.$?t:C(t,C(n,r.a))}),lu=t(function(n,r){switch(n.$){case 0:return T(r,zt);case 1:return T(x(r,{h:h}),It(h));case 2:return T(r,It(r.h));case 3:return T(x(r,{h:a(Me,n.a,r.h)}),zt);case 4:return T(x(r,{h:(e=Pt(r.h),Pt(a(nu,uu,ru(e))))}),ou);case 5:return T(x(r,{h:function(n){return Pt(a(nu,Ve,ru(n)))}(Pt(r.h))}),ou);case 7:return T(x(r,{h:function(n){return Pt(a(eu,uu,ru(n)))}(cu(r.h))}),ou);case 6:return T(x(r,{h:function(n){return Pt(a(eu,Ve,ru(n)))}(cu(r.h))}),ou);case 8:var t=n.a;return T(r,t.$?function(n){return a(be,fe,B(function(){try{or.location=n}catch(n){kn.location.reload(!1)}}))}(t.a):a(vu,r.Y,function(n){return f(du,"#",n.aj,f(du,"?",n.av,C(a(su,n.ar,C(n.au?"https://":"http://",n.al)),n.ap)))}(t.a)));default:return T(x(r,{ad:n.a}),zt)}var e}),bu=En("button"),hu=En("div"),gu=En("p"),pu=En("strong"),$u=jn,mu=sn,wu=t(function(n,r){return a(Tn,n,mu(r))}),yu=wu("className"),ku=Nn,Au=t(function(n,r){return a(ku,n,{$:0,a:r})}),ju=a(hu,$([yu("above-game")]),$([a(gu,$([yu("game-intro")]),$([$u("Join the numbers and get to the "),a(pu,h,$([$u("2048 tile!")]))])),a(bu,$([yu("restart-button"),(Se={$:1},a(Au,"click",he(Se)))]),$([$u("New Game")]))])),Eu=a(En("hr"),h,h),_u=a(gu,$([yu("game-explanation")]),$([a(pu,$([yu("important")]),$([$u("How to play: ")])),$u("Use your "),a(pu,h,$([$u("arrow keys")])),$u(" to move the tiles. When two tiles with the same number touch, they "),a(pu,h,$([$u("merge into one!")]))])),Nu=En("a"),Tu=function(n){return a(wu,"href",/^javascript:/i.test((r=n).replace(/\s/g,""))?"":r);var r},Lu=wu("target"),xu=a(gu,h,$([$u("Original 2048 created by "),a(Nu,$([Tu("http://gabrielecirulli.com"),Lu("_blank")]),$([$u("Gabriele Cirulli. ")])),$u("Based on "),a(Nu,$([Tu("https://itunes.apple.com/us/app/1024!/id823499224"),Lu("_blank")]),$([$u("1024 by Veewo Studio ")])),$u("and conceptually similar to "),a(Nu,$([Tu("http://asherv.com/threes/"),Lu("_blank")]),$([$u("Threes by Asher Vollmer.")]))])),Cu=En("h1"),Ou=a(hu,$([yu("heading")]),$([a(Cu,$([yu("title")]),$([$u("Elm 2048")])),a(hu,$([yu("scores-container")]),$([a(hu,$([yu("score-container")]),$([$u("0")])),a(hu,$([yu("best-container")]),$([$u("0")]))]))])),Fu=a(hu,$([yu("game-message")]),$([a(gu,h,h),a(hu,$([yu("lower")]),$([a(Nu,$([yu("keep-playing-button")]),$([$u("Keep going")])),a(Nu,$([yu("retry-button")]),$([$u("Try again")]))]))])),Yu=a(gu,h,$([a(pu,$([yu("important")]),$([$u("Note: ")])),$u("This is not the official version of 2048! It is an Elm implementation of Gabriele Cirulli's "),a(Nu,$([Tu("https://github.com/gabrielecirulli/2048")]),$([$u("2048 game")])),$u(". You can find the code for this Elm implementation here: "),a(Nu,$([Tu("https://github.com/stepheneb/elm-2048")]),$([$u("github.com/stepheneb/elm-2048")])),$u(".")])),qu=a(hu,$([yu("grid-row")]),$([a(hu,$([yu("grid-cell")]),h),a(hu,$([yu("grid-cell")]),h),a(hu,$([yu("grid-cell")]),h),a(hu,$([yu("grid-cell")]),h)])),Bu=a(hu,$([yu("grid-container")]),$([qu,qu,qu,qu])),Ru=function(n){return a(hu,$([yu(function(n){return C(a(Yt," ",$(["tile","tile-"+Ft(n.f),"tile-position-"+Ft(n.o)+"-"+Ft(n.p)])),C(function(n){return n.T?" tile-new ":""}(n),function(n){return n.x?" tile-merged ":""}(n)))}(n))]),$([a(hu,$([yu("tile-inner")]),$([$u(Ft(n.f))]))]))};We={Main:{init:(De=(Je={aP:Kt,aS:function(n){return{$:9,a:n}},aT:function(n){return{$:8,a:n}},aW:function(){return Ie(ne)},aY:lu,aZ:function(n){return{aG:$([a(hu,$([yu("container")]),$([Ou,ju,a(hu,$([yu("game-container")]),$([Fu,Bu,(r=n.h,a(hu,$([yu("tile-container")]),function(n){return a(Or,Ru,n)}(r)))])),_u,Eu,Yu,Eu,xu]))]),aX:"Elm 2048"};var r}}).aS,Ge=Je.aT,Pe=function(){Pe.a(De(nr()))},Hn({N:function(n){return Pe.a=n,or.addEventListener("popstate",Pe),or.navigator.userAgent.indexOf("Trident")<0||or.addEventListener("hashchange",Pe),t(function(r,t){if(!t.ctrlKey&&!t.metaKey&&!t.shiftKey&&t.button<1&&!r.target&&!r.hasAttribute("download")){t.preventDefault();var e=r.href,u=nr(),i=Le(e).a;n(Ge(i&&u.au===i.au&&u.al===i.al&&u.ar.a===i.ar.a?{$:0,a:i}:function(n){return{$:1,a:n}}(e)))}})},aP:function(n){return f(Je.aP,n,nr(),Pe)},aZ:Je.aZ,aY:Je.aY,aW:Je.aW}))(he(0))(0)}},n.Elm?function n(r,t){for(var e in t)e in r?"init"==e?k(6):n(r[e],t[e]):r[e]=t[e]}(n.Elm,We):n.Elm=We}(this)},function(n,r,t){t(3),n.exports=t(11)},,,,,,,,function(){},function(n,r,t){"use strict";t.r(r),t(10);var e=t(1),u=!("localhost"!==window.location.hostname&&"[::1]"!==window.location.hostname&&!window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function i(n){navigator.serviceWorker.register(n).then(function(n){n.onupdatefound=function(){var r=n.installing;r.onstatechange=function(){"installed"===r.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(n){console.error("Error during service worker registration:",n)})}e.Elm.Main.init({node:document.getElementById("root")}),function(){if("serviceWorker"in navigator){if(new URL("/elm-2048",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var n="".concat("/elm-2048","/service-worker.js");u?function(n){fetch(n).then(function(r){404===r.status||-1===r.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(n){n.unregister().then(function(){window.location.reload()})}):i(n)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(n):i(n)})}}(),window.addEventListener("keydown",function(n){n.key.includes("Arrow")&&n.preventDefault()})}],[[2,1,2]]]);
//# sourceMappingURL=main.21a1bcb9.chunk.js.map