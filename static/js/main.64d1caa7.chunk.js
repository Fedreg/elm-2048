(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,function(){!function(n){"use strict";function r(n,r,t){return t.a=n,t.f=r,t}function t(n){return r(2,n,function(r){return function(t){return n(r,t)}})}function e(n){return r(3,n,function(r){return function(t){return function(e){return n(r,t,e)}}})}function u(n){return r(4,n,function(r){return function(t){return function(e){return function(u){return n(r,t,e,u)}}}})}function i(n){return r(5,n,function(r){return function(t){return function(e){return function(u){return function(i){return n(r,t,e,u,i)}}}}})}function o(n){return r(6,n,function(r){return function(t){return function(e){return function(u){return function(i){return function(o){return n(r,t,e,u,i,o)}}}}}})}function a(n,r,t){return 2===n.a?n.f(r,t):n(r)(t)}function f(n,r,t,e){return 3===n.a?n.f(r,t,e):n(r)(t)(e)}function c(n,r,t,e,u){return 4===n.a?n.f(r,t,e,u):n(r)(t)(e)(u)}function v(n,r,t,e,u,i){return 5===n.a?n.f(r,t,e,u,i):n(r)(t)(e)(u)(i)}function s(n,r,t,e,u,i,o){return 6===n.a?n.f(r,t,e,u,i,o):n(r)(t)(e)(u)(i)(o)}var d=e(function(n,r,t){for(var e=Array(n),u=0;u<n;u++)e[u]=t(r+u);return e}),l=t(function(n,r){for(var t=Array(n),e=0;e<n&&r.b;e++)t[e]=r.a,r=r.b;return t.length=e,N(t,r)}),b=t(function(n,r){return r[n]}),h={$:0};function g(n,r){return{$:1,a:n,b:r}}var $=t(g);function p(n){for(var r=h,t=n.length;t--;)r=g(n[t],r);return r}function m(n){for(var r=[];n.b;n=n.b)r.push(n.a);return r}var w=e(function(n,r,t){for(var e=[];r.b&&t.b;r=r.b,t=t.b)e.push(a(n,r.a,t.a));return p(e)}),y=t(function(n,r){return p(m(r).sort(function(r,t){var e=a(n,r,t);return e===dr?0:e===lr?-1:1}))});function k(n){throw Error("https://github.com/elm/core/blob/1.0.0/hints/"+n+".md")}function A(n,r){for(var t,e=[],u=_(n,r,0,e);u&&(t=e.pop());u=_(t.a,t.b,0,e));return u}function _(n,r,t,e){if(t>100)return e.push(N(n,r)),!0;if(n===r)return!0;if("object"!==typeof n||null===n||null===r)return"function"===typeof n&&k(5),!1;for(var u in n.$<0&&(n=$r(n),r=$r(r)),n)if(!_(n[u],r[u],t+1,e))return!1;return!0}function E(n,r,t){if("object"!==typeof n)return n===r?0:n<r?-1:1;if("undefined"===typeof n.$)return(t=E(n.a,r.a))?t:(t=E(n.b,r.b))?t:E(n.c,r.c);for(;n.b&&r.b&&!(t=E(n.a,r.a));n=n.b,r=r.b);return t||(n.b?1:r.b?-1:0)}var j=t(function(n,r){var t=E(n,r);return t<0?lr:t?hr:dr}),x=0;function N(n,r){return{a:n,b:r}}function L(n,r,t){return{a:n,b:r,c:t}}function T(n,r){var t={};for(var e in n)t[e]=n[e];for(var e in r)t[e]=r[e];return t}function C(n,r){if("string"===typeof n)return n+r;if(!n.b)return r;var t=g(n.a,r);n=n.b;for(var e=t;n.b;n=n.b)e=e.b=g(n.a,r);return t}var O=t(function(n,r){return n+r}),S=Math.ceil,F=Math.floor,W=Math.log;function B(n){return{$:0,a:n}}function R(n){return{$:2,b:n,c:null}}var D=t(function(n,r){return{$:3,b:n,d:r}}),M=0;function q(n){var r={$:0,e:M++,f:n,g:null,h:[]};return I(r),r}function K(n){return R(function(r){r(B(q(n)))})}function J(n,r){n.h.push(r),I(n)}var V=t(function(n,r){return R(function(t){J(n,r),t(B(x))})}),Z=!1,z=[];function I(n){if(z.push(n),!Z){for(Z=!0;n=z.shift();)P(n);Z=!1}}function P(n){for(;n.f;){var r=n.f.$;if(0===r||1===r){for(;n.g&&n.g.$!==r;)n.g=n.g.i;if(!n.g)return;n.f=n.g.b(n.f.a),n.g=n.g.i}else{if(2===r)return void(n.f.c=n.f.b(function(r){n.f=r,I(n)}));if(5===r){if(0===n.h.length)return;n.f=n.f.b(n.h.shift())}else n.g={$:3===r?0:1,b:n.f.b,i:n.g},n.f=n.f.d}}}var G=t(function(n,r){return r.join(n)}),U=e(function(n,r,t){return t.slice(n,r)}),Y=t(function(n,r){return r.indexOf(n)>-1}),H=t(function(n,r){return 0===r.indexOf(n)}),Q=t(function(n,r){var t=n.length;if(t<1)return h;for(var e=0,u=[];(e=r.indexOf(n,e))>-1;)u.push(e),e+=t;return p(u)});function X(n){return{$:2,b:n}}X(function(n){return"number"!==typeof n?cn("an INT",n):-2147483647<n&&n<2147483647&&(0|n)===n?Ft(n):!isFinite(n)||n%1?cn("an INT",n):Ft(n)}),X(function(n){return"boolean"===typeof n?Ft(n):cn("a BOOL",n)}),X(function(n){return"number"===typeof n?Ft(n):cn("a FLOAT",n)}),X(function(n){return Ft(dn(n))});var nn=X(function(n){return"string"===typeof n?Ft(n):n instanceof String?Ft(n+""):cn("a STRING",n)}),rn=t(function(n,r){return{$:6,d:n,b:r}});var tn=t(function(n,r){return function(n,r){return{$:9,f:n,g:r}}(n,[r])}),en=t(function(n,r){return un(n,ln(r))});function un(n,r){switch(n.$){case 2:return n.b(r);case 5:return null===r?Ft(n.c):cn("null",r);case 3:return an(r)?on(n.b,r,p):cn("a LIST",r);case 4:return an(r)?on(n.b,r,fn):cn("an ARRAY",r);case 6:var t=n.d;if("object"!==typeof r||null===r||!(t in r))return cn("an OBJECT with a field named `"+t+"`",r);var e=un(n.b,r[t]);return Lt(e)?e:St(a(Bt,t,e.a));case 7:var u=n.e;return an(r)?u<r.length?(e=un(n.b,r[u]),Lt(e)?e:St(a(Rt,u,e.a))):cn("a LONGER array. Need index "+u+" but only see "+r.length+" entries",r):cn("an ARRAY",r);case 8:if("object"!==typeof r||null===r||an(r))return cn("an OBJECT",r);var i=h;for(var o in r)if(r.hasOwnProperty(o)){if(e=un(n.b,r[o]),!Lt(e))return St(a(Bt,o,e.a));i=g(N(o,e.a),i)}return Ft(Fr(i));case 9:for(var f=n.f,c=n.g,v=0;v<c.length;v++){if(e=un(c[v],r),!Lt(e))return e;f=f(e.a)}return Ft(f);case 10:return e=un(n.b,r),Lt(e)?un(n.h(e.a),r):e;case 11:for(var s=h,d=n.g;d.b;d=d.b){if(e=un(d.a,r),Lt(e))return e;s=g(e.a,s)}return St(Dt(Fr(s)));case 1:return St(a(Wt,n.a,dn(r)));case 0:return Ft(n.a)}}function on(n,r,t){for(var e=r.length,u=Array(e),i=0;i<e;i++){var o=un(n,r[i]);if(!Lt(o))return St(a(Rt,i,o.a));u[i]=o.a}return Ft(t(u))}function an(n){return Array.isArray(n)||"undefined"!==typeof FileList&&n instanceof FileList}function fn(n){return a(Ot,n.length,function(r){return n[r]})}function cn(n,r){return St(a(Wt,"Expecting "+n,dn(r)))}function vn(n,r){if(n===r)return!0;if(n.$!==r.$)return!1;switch(n.$){case 0:case 1:return n.a===r.a;case 2:return n.b===r.b;case 5:return n.c===r.c;case 3:case 4:case 8:return vn(n.b,r.b);case 6:return n.d===r.d&&vn(n.b,r.b);case 7:return n.e===r.e&&vn(n.b,r.b);case 9:return n.f===r.f&&sn(n.g,r.g);case 10:return n.h===r.h&&vn(n.b,r.b);case 11:return sn(n.g,r.g)}}function sn(n,r){var t=n.length;if(t!==r.length)return!1;for(var e=0;e<t;e++)if(!vn(n[e],r[e]))return!1;return!0}function dn(n){return n}function ln(n){return n}dn(null);var bn={};function hn(n,r,t,e,u){return{b:n,c:r,d:t,e:e,f:u}}function gn(n,r){var t={g:r,h:void 0},e=n.c,u=n.d,i=n.e,o=n.f;return t.h=q(a(D,function n(r){return a(D,n,{$:5,b:function(n){var a=n.a;return 0===n.$?f(u,t,a,r):i&&o?c(e,t,a.i,a.j,r):f(e,t,i?a.i:a.j,r)}})},n.b))}var $n,pn=t(function(n,r){return R(function(t){n.g(r),t(B(x))})}),mn=t(function(n,r){return a(V,n.h,{$:0,a:r})});function wn(n){return function(r){return{$:1,k:n,l:r}}}function yn(n,r,t){var e={};for(var u in kn(!0,r,e,null),kn(!1,t,e,null),n)J(n[u],{$:"fx",a:e[u]||{i:h,j:h}})}function kn(n,r,t,e){switch(r.$){case 1:var u=r.k,i=function(n,t,e){return a(n?bn[t].e:bn[t].f,function(n){for(var r=e;r;r=r.q)n=r.p(n);return n},r.l)}(n,u,e);return void(t[u]=function(n,r,t){return t=t||{i:h,j:h},n?t.i=g(r,t.i):t.j=g(r,t.j),t}(n,i,t[u]));case 2:for(var o=r.m;o.b;o=o.b)kn(n,o.a,t,e);return;case 3:return void kn(n,r.o,t,{p:r.n,q:e})}}var An="undefined"!==typeof document?document:{};function _n(n,r){n.appendChild(r)}function En(n){return{$:0,a:n}}var jn=t(function(n,r){return t(function(t,e){for(var u=[],i=0;e.b;e=e.b){var o=e.a;i+=o.b||0,u.push(o)}return i+=u.length,{$:1,c:r,d:Sn(t),e:u,f:n,b:i}})})(void 0),xn=t(function(n,r){return t(function(t,e){for(var u=[],i=0;e.b;e=e.b){var o=e.a;i+=o.b.b||0,u.push(o)}return i+=u.length,{$:2,c:r,d:Sn(t),e:u,f:n,b:i}})})(void 0);var Nn,Ln=t(function(n,r){return{$:5,l:[n,r],m:function(){return n(r)},k:void 0}}),Tn=t(function(n,r){return{$:"a0",n:n,o:r}}),Cn=t(function(n,r){return{$:"a2",n:n,o:r}}),On=t(function(n,r){return{$:"a3",n:n,o:r}});function Sn(n){for(var r={};n.b;n=n.b){var t=n.a,e=t.$,u=t.n,i=t.o;if("a2"!==e){var o=r[e]||(r[e]={});"a3"===e&&"class"===u?Fn(o,u,i):o[u]=i}else"className"===u?Fn(r,u,ln(i)):r[u]=ln(i)}return r}function Fn(n,r,t){var e=n[r];n[r]=e?e+" "+t:t}function Wn(n,r){var t=n.$;if(5===t)return Wn(n.k||(n.k=n.m()),r);if(0===t)return An.createTextNode(n.a);if(4===t){for(var e=n.k,u=n.j;4===e.$;)"object"!==typeof u?u=[u,e.j]:u.push(e.j),e=e.k;var i={j:u,p:r};return(o=Wn(e,i)).elm_event_node_ref=i,o}if(3===t)return Bn(o=n.h(n.g),r,n.d),o;var o=n.f?An.createElementNS(n.f,n.c):An.createElement(n.c);$n&&"a"==n.c&&o.addEventListener("click",$n(o)),Bn(o,r,n.d);for(var a=n.e,f=0;f<a.length;f++)_n(o,Wn(1===t?a[f]:a[f].b,r));return o}function Bn(n,r,t){for(var e in t){var u=t[e];"a1"===e?Rn(n,u):"a0"===e?qn(n,r,u):"a3"===e?Dn(n,u):"a4"===e?Mn(n,u):("value"!==e&&"checked"!==e||n[e]!==u)&&(n[e]=u)}}function Rn(n,r){var t=n.style;for(var e in r)t[e]=r[e]}function Dn(n,r){for(var t in r){var e=r[t];"undefined"!==typeof e?n.setAttribute(t,e):n.removeAttribute(t)}}function Mn(n,r){for(var t in r){var e=r[t],u=e.f,i=e.o;"undefined"!==typeof i?n.setAttributeNS(u,t,i):n.removeAttributeNS(u,t)}}function qn(n,r,t){var e=n.elmFs||(n.elmFs={});for(var u in t){var i=t[u],o=e[u];if(i){if(o){if(o.q.$===i.$){o.q=i;continue}n.removeEventListener(u,o)}o=Kn(r,i),n.addEventListener(u,o,Nn&&{passive:Ee(i)<2}),e[u]=o}else n.removeEventListener(u,o),e[u]=void 0}}try{window.addEventListener("t",null,Object.defineProperty({},"passive",{get:function(){Nn=!0}}))}catch(n){}function Kn(n,r){function t(r){var e=t.q,u=un(e.a,r);if(Lt(u)){for(var i,o=Ee(e),a=u.a,f=o?o<3?a.a:a.t:a,c=1==o?a.b:3==o&&a.af,v=(c&&r.stopPropagation(),(2==o?a.b:3==o&&a.ad)&&r.preventDefault(),n);i=v.j;){if("function"==typeof i)f=i(f);else for(var s=i.length;s--;)f=i[s](f);v=v.p}v(f,c)}}return t.q=r,t}function Jn(n,r){return n.$==r.$&&vn(n.a,r.a)}function Vn(n,r,t,e){var u={$:r,r:t,s:e,t:void 0,u:void 0};return n.push(u),u}function Zn(n,r,t,e){if(n!==r){var u=n.$,i=r.$;if(u!==i){if(1!==u||2!==i)return void Vn(t,0,e,r);r=function(n){for(var r=n.e,t=r.length,e=Array(t),u=0;u<t;u++)e[u]=r[u].b;return{$:1,c:n.c,d:n.d,e:e,f:n.f,b:n.b}}(r),i=1}switch(i){case 5:for(var o=n.l,a=r.l,f=o.length,c=f===a.length;c&&f--;)c=o[f]===a[f];if(c)return void(r.k=n.k);r.k=r.m();var v=[];return Zn(n.k,r.k,v,0),void(v.length>0&&Vn(t,1,e,v));case 4:for(var s=n.j,d=r.j,l=!1,b=n.k;4===b.$;)l=!0,"object"!==typeof s?s=[s,b.j]:s.push(b.j),b=b.k;for(var h=r.k;4===h.$;)l=!0,"object"!==typeof d?d=[d,h.j]:d.push(h.j),h=h.k;return l&&s.length!==d.length?void Vn(t,0,e,r):((l?function(n,r){for(var t=0;t<n.length;t++)if(n[t]!==r[t])return!1;return!0}(s,d):s===d)||Vn(t,2,e,d),void Zn(b,h,t,e+1));case 0:return void(n.a!==r.a&&Vn(t,3,e,r.a));case 1:return void zn(n,r,t,e,Pn);case 2:return void zn(n,r,t,e,Gn);case 3:if(n.h!==r.h)return void Vn(t,0,e,r);var g=In(n.d,r.d);g&&Vn(t,4,e,g);var $=r.i(n.g,r.g);return void($&&Vn(t,5,e,$))}}}function zn(n,r,t,e,u){if(n.c===r.c&&n.f===r.f){var i=In(n.d,r.d);i&&Vn(t,4,e,i),u(n,r,t,e)}else Vn(t,0,e,r)}function In(n,r,t){var e;for(var u in n)if("a1"!==u&&"a0"!==u&&"a3"!==u&&"a4"!==u)if(u in r){var i=n[u],o=r[u];i===o&&"value"!==u&&"checked"!==u||"a0"===t&&Jn(i,o)||((e=e||{})[u]=o)}else(e=e||{})[u]=t?"a1"===t?"":"a0"===t||"a3"===t?void 0:{f:n[u].f,o:void 0}:"string"===typeof n[u]?"":null;else{var a=In(n[u],r[u]||{},u);a&&((e=e||{})[u]=a)}for(var f in r)f in n||((e=e||{})[f]=r[f]);return e}function Pn(n,r,t,e){var u=n.e,i=r.e,o=u.length,a=i.length;o>a?Vn(t,6,e,{v:a,i:o-a}):o<a&&Vn(t,7,e,{v:o,e:i});for(var f=o<a?o:a,c=0;c<f;c++){var v=u[c];Zn(v,i[c],t,++e),e+=v.b||0}}function Gn(n,r,t,e){for(var u=[],i={},o=[],a=n.e,f=r.e,c=a.length,v=f.length,s=0,d=0,l=e;s<c&&d<v;){var b=(j=a[s]).a,h=(x=f[d]).a,g=j.b,$=x.b,p=void 0,m=void 0;if(b!==h){var w=a[s+1],y=f[d+1];if(w){var k=w.a,A=w.b;m=h===k}if(y){var _=y.a,E=y.b;p=b===_}if(p&&m)Zn(g,E,u,++l),Yn(i,u,b,$,d,o),l+=g.b||0,Hn(i,u,b,A,++l),l+=A.b||0,s+=2,d+=2;else if(p)l++,Yn(i,u,h,$,d,o),Zn(g,E,u,l),l+=g.b||0,s+=1,d+=2;else if(m)Hn(i,u,b,g,++l),l+=g.b||0,Zn(A,$,u,++l),l+=A.b||0,s+=2,d+=1;else{if(!w||k!==_)break;Hn(i,u,b,g,++l),Yn(i,u,h,$,d,o),l+=g.b||0,Zn(A,E,u,++l),l+=A.b||0,s+=2,d+=2}}else Zn(g,$,u,++l),l+=g.b||0,s++,d++}for(;s<c;){var j;Hn(i,u,(j=a[s]).a,g=j.b,++l),l+=g.b||0,s++}for(;d<v;){var x,N=N||[];Yn(i,u,(x=f[d]).a,x.b,void 0,N),d++}(u.length>0||o.length>0||N)&&Vn(t,8,e,{w:u,x:o,y:N})}var Un="_elmW6BL";function Yn(n,r,t,e,u,i){var o=n[t];if(!o)return i.push({r:u,A:o={c:0,z:e,r:u,s:void 0}}),void(n[t]=o);if(1===o.c){i.push({r:u,A:o}),o.c=2;var a=[];return Zn(o.z,e,a,o.r),o.r=u,void(o.s.s={w:a,A:o})}Yn(n,r,t+Un,e,u,i)}function Hn(n,r,t,e,u){var i=n[t];if(i){if(0===i.c){i.c=2;var o=[];return Zn(e,i.z,o,u),void Vn(r,9,u,{w:o,A:i})}Hn(n,r,t+Un,e,u)}else{var a=Vn(r,9,u,void 0);n[t]={c:1,z:e,r:u,s:a}}}function Qn(n,r,t,e){return 0===t.length?n:(function n(r,t,e,u){!function r(t,e,u,i,o,a,f){for(var c=u[i],v=c.r;v===o;){var s=c.$;if(1===s)n(t,e.k,c.s,f);else if(8===s)c.t=t,c.u=f,(d=c.s.w).length>0&&r(t,e,d,0,o,a,f);else if(9===s){c.t=t,c.u=f;var d,l=c.s;l&&(l.A.s=t,(d=l.w).length>0&&r(t,e,d,0,o,a,f))}else c.t=t,c.u=f;if(!(c=u[++i])||(v=c.r)>a)return i}var b=e.$;if(4===b){for(var h=e.k;4===h.$;)h=h.k;return r(t,h,u,i,o+1,a,t.elm_event_node_ref)}for(var g=e.e,$=t.childNodes,p=0;p<g.length;p++){o++;var m=1===b?g[p]:g[p].b,w=o+(m.b||0);if(o<=v&&v<=w&&(!(c=u[i=r($[p],m,u,i,o,w,f)])||(v=c.r)>a))return i;o=w}return i}(r,t,e,0,0,t.b,u)}(n,r,t,e),Xn(n,t))}function Xn(n,r){for(var t=0;t<r.length;t++){var e=r[t],u=e.t,i=nr(u,e);u===n&&(n=i)}return n}function nr(n,r){switch(r.$){case 0:return function(n){var t=n.parentNode,e=Wn(r.s,r.u);return e.elm_event_node_ref||(e.elm_event_node_ref=n.elm_event_node_ref),t&&e!==n&&t.replaceChild(e,n),e}(n);case 4:return Bn(n,r.u,r.s),n;case 3:return n.replaceData(0,n.length,r.s),n;case 1:return Xn(n,r.s);case 2:return n.elm_event_node_ref?n.elm_event_node_ref.j=r.s:n.elm_event_node_ref={j:r.s,p:r.u},n;case 6:for(var t=r.s,e=0;e<t.i;e++)n.removeChild(n.childNodes[t.v]);return n;case 7:for(var u=(t=r.s).e,i=n.childNodes[e=t.v];e<u.length;e++)n.insertBefore(Wn(u[e],r.u),i);return n;case 9:if(!(t=r.s))return n.parentNode.removeChild(n),n;var o=t.A;return"undefined"!==typeof o.r&&n.parentNode.removeChild(n),o.s=Xn(n,t.w),n;case 8:return function(n,r){var t=r.s,e=function(n,r){if(n){for(var t=An.createDocumentFragment(),e=0;e<n.length;e++){var u=n[e].A;_n(t,2===u.c?u.s:Wn(u.z,r.u))}return t}}(t.y,r);n=Xn(n,t.w);for(var u=t.x,i=0;i<u.length;i++){var o=u[i],a=o.A,f=2===a.c?a.s:Wn(a.z,r.u);n.insertBefore(f,n.childNodes[o.r])}return e&&_n(n,e),n}(n,r);case 5:return r.s(n);default:k(10)}}var rr=u(function(n,r,t,e){return function(n,r,t,e,u,i){var o=a(en,n,dn(r?r.flags:void 0));Lt(o)||k(2);var f={},c=(o=t(o.a)).a,v=i(d,c),s=function(n,r){var t;for(var e in bn){var u=bn[e];u.a&&((t=t||{})[e]=u.a(e,r)),n[e]=gn(u,r)}return t}(f,d);function d(n,r){v(c=(o=a(e,n,c)).a,r),yn(f,o.b,u(c))}return yn(f,o.b,u(c)),s?{ports:s}:{}}(r,e,n.aS,n.a$,n.aZ,function(r,t){var e=n.P&&n.P(r),u=n.a0,i=An.title,o=An.body,c=function n(r){if(3===r.nodeType)return En(r.textContent);if(1!==r.nodeType)return En("");for(var t=h,e=r.attributes,u=e.length;u--;){var i=e[u];t=g(a(On,i.name,i.value),t)}var o=r.tagName.toLowerCase(),c=h,v=r.childNodes;for(u=v.length;u--;)c=g(n(v[u]),c);return f(jn,o,t,c)}(o);return function(n,r){r(n);var t=0;function e(){t=1===t?0:(tr(e),r(n),1)}return function(u,i){n=u,i?(r(n),2===t&&(t=1)):(0===t&&tr(e),t=2)}}(t,function(n){$n=e;var t=u(n),a=jn("body")(h)(t.aJ),f=function(n,r){var t=[];return Zn(n,r,t,0),t}(c,a);o=Qn(o,c,f,r),c=a,$n=0,i!==t.a_&&(An.title=i=t.a_)})})}),tr=("undefined"!==typeof cancelAnimationFrame&&cancelAnimationFrame,"undefined"!==typeof requestAnimationFrame?requestAnimationFrame:function(n){return setTimeout(n,1e3/60)});function er(){return De(An.location.href).a||k(1)}var ur,ir,or=t(function(n,r){return a(Ae,$e,R(function(){history.pushState({},"",r),n()}))}),ar={addEventListener:function(){},removeEventListener:function(){}},fr="undefined"!==typeof document?document:ar,cr="undefined"!==typeof window?window:ar,vr=e(function(n,r,t){return K(R(function(){function e(n){q(t(n))}return n.addEventListener(r,e,Nn&&{passive:!0}),function(){n.removeEventListener(r,e)}}))}),sr=t(function(n,r){var t=un(n,r);return Lt(t)?ht(t.a):gt}),dr=1,lr=0,br=$,hr=2,gr=e(function(n,r,t){for(;;){if(-2===t.$)return r;var e=t.d,u=n,i=f(n,t.b,t.c,f(gr,n,r,t.e));n=u,r=i,t=e}}),$r=function(n){return f(gr,e(function(n,r,t){return a(br,N(n,r),t)}),h,n)},pr=e(function(n,r,t){for(;;){if(E(n,r)>=1)return t;var e=n,u=r-1,i=a(br,r,t);n=e,r=u,t=i}}),mr=t(function(n,r){return f(pr,n,r,h)}),wr=e(function(n,r,t){for(;;){if(!t.b)return r;var e=t.b,u=n,i=a(n,t.a,r);n=u,r=i,t=e}}),yr=function(n){return n},kr={$:-2},Ar=kr,_r=Ar,Er=i(function(n,r,t,e,u){return{$:-1,a:n,b:r,c:t,d:e,e:u}}),jr=j,xr=i(function(n,r,t,e,u){if(-1!==u.$||u.a){if(-1!==e.$||e.a||-1!==e.d.$||e.d.a)return v(Er,n,r,t,e,u);var i=e.d;return o=e.e,v(Er,0,e.b,e.c,v(Er,1,i.b,i.c,i.d,i.e),v(Er,1,r,t,o,u))}var o,a=u.b,f=u.c,c=u.d,s=u.e;return-1!==e.$||e.a?v(Er,n,a,f,v(Er,0,r,t,e,c),s):v(Er,0,r,t,v(Er,1,e.b,e.c,e.d,o=e.e),v(Er,1,a,f,c,s))}),Nr=e(function(n,r,t){if(-2===t.$)return v(Er,0,n,r,kr,kr);var e=t.a,u=t.b,i=t.c,o=t.d,c=t.e;switch(a(jr,n,u)){case 0:return v(xr,e,u,i,f(Nr,n,r,o),c);case 1:return v(Er,e,u,r,o,c);default:return v(xr,e,u,i,o,f(Nr,n,r,c))}}),Lr=e(function(n,r,t){var e=f(Nr,n,r,t);return-1!==e.$||e.a?e:v(Er,1,e.b,e.c,e.d,e.e)}),Tr=t(function(n,r){return f(Lr,n,0,r)}),Cr=function(n){return f(wr,Tr,_r,n)},Or=Cr(a(mr,1,16)),Sr=O,Fr=function(n){return f(wr,br,h,n)},Wr=u(function(n,r,t,e){if(e.b){var u=e.a,i=e.b;if(i.b){var o=i.a,v=i.b;if(v.b){var s=v.a,d=v.b;if(d.b){var l=d.b;return a(n,u,a(n,o,a(n,s,a(n,d.a,t>500?f(wr,n,r,Fr(l)):c(Wr,n,r,t+1,l)))))}return a(n,u,a(n,o,a(n,s,r)))}return a(n,u,a(n,o,r))}return a(n,u,r)}return r}),Br=e(function(n,r,t){return c(Wr,n,r,0,t)}),Rr=t(function(n,r){return f(Br,t(function(r,t){return a(br,n(r),t)}),h,r)}),Dr=u(function(n,r,t,e){return{$:0,a:n,b:r,c:t,d:e}}),Mr=S,qr=t(function(n,r){return W(r)/W(n)}),Kr=Mr(a(qr,2,32)),Jr=[],Vr=c(Dr,0,Kr,Jr,Jr),Zr=function(n){return{$:1,a:n}},zr=l,Ir=t(function(n,r){for(;;){var t=a(zr,32,n),e=t.b,u=a(br,{$:0,a:t.a},r);if(!e.b)return Fr(u);n=e,r=u}}),Pr=t(function(n,r){for(;;){var t=Mr(r/32);if(1===t)return a(zr,32,n).a;n=a(Ir,n,h),r=t}}),Gr=F,Ur=t(function(n,r){return E(n,r)>0?n:r}),Yr=function(n){return n.length},Hr=t(function(n,r){if(r.a){var t=32*r.a,e=Gr(a(qr,32,t-1)),u=n?Fr(r.d):r.d,i=a(Pr,u,r.a);return c(Dr,Yr(r.c)+t,a(Ur,5,e*Kr),i,r.c)}return c(Dr,Yr(r.c),Kr,Jr,r.c)}),Qr=e(function(n,r,t){for(;;){var e=a(zr,32,n),u=e.a,i=e.b;if(E(Yr(u),32)<0)return a(Hr,!0,{d:r,a:t,c:u});n=i,r=a(br,Zr(u),r),t+=1}}),Xr=e(function(n,r,t){for(;;){if(-2===t.$)return r;var e=t.e,u=n,i=f(n,t.b,t.c,f(Xr,n,r,t.d));n=u,r=i,t=e}}),nt=function(n){if(-1===n.$&&-1===n.d.$&&-1===n.e.$){if(-1!==n.e.d.$||n.e.d.a){var r=n.d,t=n.e;return o=t.b,a=t.c,e=t.d,s=t.e,v(Er,1,n.b,n.c,v(Er,0,r.b,r.c,r.d,r.e),v(Er,0,o,a,e,s))}var e,u=n.d,i=n.e,o=i.b,a=i.c,f=(e=i.d).d,c=e.e,s=i.e;return v(Er,0,e.b,e.c,v(Er,1,n.b,n.c,v(Er,0,u.b,u.c,u.d,u.e),f),v(Er,1,o,a,c,s))}return n},rt=function(n){if(-1===n.$&&-1===n.d.$&&-1===n.e.$){if(-1!==n.d.d.$||n.d.d.a){var r=n.d,t=n.e;return c=t.b,s=t.c,d=t.d,l=t.e,v(Er,1,e=n.b,u=n.c,v(Er,0,r.b,r.c,r.d,a=r.e),v(Er,0,c,s,d,l))}var e=n.b,u=n.c,i=n.d,o=i.d,a=i.e,f=n.e,c=f.b,s=f.c,d=f.d,l=f.e;return v(Er,0,i.b,i.c,v(Er,1,o.b,o.c,o.d,o.e),v(Er,1,e,u,a,v(Er,0,c,s,d,l)))}return n},tt=r(7,ir=function(n,r,t,e,u,i,o){if(-1!==i.$||i.a){n:for(;;){if(-1===o.$&&1===o.a){if(-1===o.d.$){if(1===o.d.a)return rt(r);break n}return rt(r)}break n}return r}return v(Er,t,i.b,i.c,i.d,v(Er,0,e,u,i.e,o))},function(n){return function(r){return function(t){return function(e){return function(u){return function(i){return function(o){return ir(n,r,t,e,u,i,o)}}}}}}}),et=function(n){if(-1===n.$&&-1===n.d.$){var r=n.a,t=n.b,e=n.c,u=n.d,i=u.d,o=n.e;if(1===u.a){if(-1!==i.$||i.a){var a=nt(n);if(-1===a.$){var f=a.e;return v(xr,a.a,a.b,a.c,et(a.d),f)}return kr}return v(Er,r,t,e,et(u),o)}return v(Er,r,t,e,et(u),o)}return kr},ut=t(function(n,r){if(-2===r.$)return kr;var t,e,u,i,o,f,c,s,d=r.a,l=r.b,b=r.c,h=r.d,g=r.e;if(E(n,l)<0){if(-1===h.$&&1===h.a){var $=h.d;if(-1!==$.$||$.a){var p=nt(r);if(-1===p.$){var m=p.e;return v(xr,p.a,p.b,p.c,a(ut,n,p.d),m)}return kr}return v(Er,d,l,b,a(ut,n,h),g)}return v(Er,d,l,b,a(ut,n,h),g)}return a(it,n,(e=n,u=r,i=d,o=l,f=b,c=h,s=g,7===(t=tt).a?t.f(e,u,i,o,f,c,s):t(e)(u)(i)(o)(f)(c)(s)))}),it=t(function(n,r){if(-1===r.$){var t=r.a,e=r.b,u=r.c,i=r.d,o=r.e;if(A(n,e)){var f=function(n){for(;;){if(-1!==n.$||-1!==n.d.$)return n;n=n.d}}(o);return-1===f.$?v(xr,t,f.b,f.c,i,et(o)):kr}return v(xr,t,e,u,i,a(ut,n,o))}return kr}),ot=t(function(n,r){var t=a(ut,n,r);return-1!==t.$||t.a?t:v(Er,1,t.b,t.c,t.d,t.e)}),at=t(function(n,r){return f(Xr,e(function(n,r,t){return a(ot,n,t)}),n,r)}),ft=t(function(n,r){return a(at,n,r)}),ct=function(n){return t=n.b?a(ft,Or,function(n){return Cr(a(Rr,function(n){return n.V},n))}(n)):Or,u=t,(r=f(gr,e(function(n,r,t){return a(br,n,t)}),h,u)).b?f(Qr,r,h,0):Vr;var r,t,u},vt=function(n){return{$:3,a:n}},st=t(function(n,r){return{g:(r-1)%4+1,V:r,x:0,y:!1,W:!0,h:1+((r-1)/4|0),e:n}}),dt=4294967295>>>32-Kr,lt=b,bt=e(function(n,r,t){for(;;){var e=a(lt,dt&r>>>n,t);if(e.$)return a(lt,dt&r,e.a);n-=Kr,r=r,t=e.a}}),ht=function(n){return{$:0,a:n}},gt={$:1},$t=t(function(n,r){var t=r.a,e=r.b,u=r.c,i=r.d;return n<0||E(n,t)>-1?gt:E(n,function(n){return n>>>5<<5}(t))>-1?ht(a(lt,dt&n,i)):ht(f(bt,e,n,u))}),pt=t(function(n,r){return r.$?n:r.a}),mt=t(function(n,r){return{$:0,a:n,b:r}}),wt=function(n){var r=n.b;return a(mt,1664525*n.a+r>>>0,r)},yt=function(n){var r=n.a,t=277803737*(r^r>>>4+(r>>>28));return(t>>>22^t)>>>0},kt=t(function(n,r){return function(t){var e,u=wt(t),i=(e=r-n)<0?-e:e,o=yt(u);return N((1*(67108863&yt(t))*134217728+1*(134217727&o))/9007199254740992*i+n,wt(u))}}),At=t(function(n,r){return function(t){var e=E(n,r)<0?N(n,r):N(r,n),u=e.a,i=e.b-u+1;if(i-1&i){var o=(-i>>>0)%i>>>0;return function(n){for(;;){var r=yt(n),t=wt(n);if(E(r,o)>=0)return N(r%i+u,t);n=t}}(t)}return N(((i-1&yt(t))>>>0)+u,wt(t))}}),_t=e(function(n,r,t){var e=r,u=t;return function(r){var t=e(r),i=t.a,o=u(t.b),f=o.b;return N(a(n,i,o.a),f)}}),Et=D,jt=B,xt=(ur=yr,R(function(n){n(B(ur(Date.now())))})),Nt=a(Et,function(n){return jt(function(n){var r=wt(a(mt,0,1013904223));return wt(a(mt,r.a+n>>>0,r.b))}(n))},xt),Lt=function(n){return!n.$},Tt=d,Ct=i(function(n,r,t,e,u){for(;;){if(r<0)return a(Hr,!1,{d:e,a:t/32|0,c:u});var i=Zr(f(Tt,32,r,n));n=n,r-=32,t=t,e=a(br,i,e),u=u}}),Ot=t(function(n,r){if(n>0){var t=n%32;return v(Ct,r,n-t-32,n,h,f(Tt,t,n-t,r))}return Vr}),St=function(n){return{$:1,a:n}},Ft=function(n){return{$:0,a:n}},Wt=t(function(n,r){return{$:3,a:n,b:r}}),Bt=t(function(n,r){return{$:0,a:n,b:r}}),Rt=t(function(n,r){return{$:1,a:n,b:r}}),Dt=function(n){return{$:2,a:n}},Mt=w,qt=function(n){return n+""},Kt=t(function(n,r){return a(G,n,m(r))}),Jt=pn,Vt=t(function(n,r){return n(r)}),Zt=e(function(n,r,t){if(r.b){var e=r.b,u=a(Vt,r.a,t),i=u.b;return a(Et,function(){return f(Zt,n,e,i)},a(Jt,n,u.a))}return jt(t)}),zt=e(function(n,r,t){return jt(t)}),It=t(function(n,r){var t=r;return function(r){var e=t(r),u=e.b;return N(n(e.a),u)}});bn.Random=hn(Nt,Zt,zt,t(function(n,r){return a(It,n,r)}));var Pt=wn("Random"),Gt=t(function(n,r){return Pt(a(It,n,r))}),Ut=t(function(n,r){return r+4*(n-1)}),Yt=t(function(n,r){var t=a(Ut,r.h,r.g),e=a(Ut,n.h,n.g);return E(e,t)>0?2:E(e,t)<0?0:1}),Ht=y,Qt=function(n){return a(Rr,function(n){return T(n,{V:a(Ut,n.h,n.g)})},a(Ht,Yt,n))},Xt={$:2,m:h},ne=function(n){return E((e=n,f(wr,t(function(n,r){return r+1}),0,e)),16)<0?(r=ct(Qt(n)),a(Gt,vt,function(n){return f(_t,t(function(r,t){return a(st,function(n){return n>.9?4:2}(t),a(pt,1,a($t,r-1,n)))}),a(At,1,n.a),a(kt,0,1))}(r))):Xt;var r,e},re=t(function(n,r){return{K:0,x:r,M:1,Z:0,i:h,ag:n}}),te=e(function(n,r,t){return N(a(re,r,t),ne(h))}),ee={$:5},ue={$:7},ie={$:6},oe={$:4},ae={$:0},fe=tn,ce=a(fe,function(n){switch(n){case"ArrowUp":return oe;case"ArrowDown":return ee;case"ArrowRight":return ie;case"ArrowLeft":return ue;default:return ae}},a(rn,"key",nn)),ve=e(function(n,r,t){return{$:0,a:n,b:r,c:t}}),se=t(function(n,r){return{at:r,aD:n}}),de=jt(a(se,h,Ar)),le=function(n){return N(C(n.a?"w_":"d_",n.b),n)},be=t(function(n,r){return{al:r,x:n}}),he=mn,ge=t(function(n,r){return a(Et,function(r){return jt(n(r))},r)}),$e=function(n){for(;;)n=n},pe=jt(0),me=e(function(n,r,t){return a(Et,function(r){return a(Et,function(t){return jt(a(n,r,t))},t)},r)}),we=function(n){return f(Br,me(br),jt(h),n)},ye=t(function(n,r){var t=r;return K(a(Et,Jt(n),t))});bn.Task=hn(pe,e(function(n,r){return a(ge,function(){return 0},we(a(Rr,ye(n),r)))}),e(function(){return jt(0)}),t(function(n,r){return a(ge,n,r)}));var ke=wn("Task"),Ae=t(function(n,r){return ke(a(ge,n,r))}),_e=function(n){return{$:0,a:n}},Ee=function(n){switch(n.$){case 0:return 0;case 1:return 1;case 2:return 2;default:return 3}},je=U,xe=t(function(n,r){return n<1?r:f(je,n,r.length,r)}),Ne=H,Le=Q,Te=function(n){return""===n},Ce=t(function(n,r){return n<1?"":f(je,0,n,r)}),Oe=Y,Se=o(function(n,r,t,e,u,i){return{am:i,ao:r,as:e,au:t,ax:n,ay:u}}),Fe=i(function(n,r,t,e,u){if(Te(u)||a(Oe,"@",u))return gt;var i=a(Le,":",u);if(i.b){if(i.b.b)return gt;var o=i.a,f=function(n){for(var r=0,t=n.charCodeAt(0),e=43==t||45==t?1:0,u=e;u<n.length;++u){var i=n.charCodeAt(u);if(i<48||57<i)return gt;r=10*r+i-48}return u==e?gt:ht(45==t?-r:r)}(a(xe,o+1,u));if(1===f.$)return gt;var c=f;return ht(s(Se,n,a(Ce,o,u),c,r,t,e))}return ht(s(Se,n,u,gt,r,t,e))}),We=u(function(n,r,t,e){if(Te(e))return gt;var u=a(Le,"/",e);if(u.b){var i=u.a;return v(Fe,n,a(xe,i,e),r,t,a(Ce,i,e))}return v(Fe,n,"/",r,t,e)}),Be=e(function(n,r,t){if(Te(t))return gt;var e=a(Le,"?",t);if(e.b){var u=e.a;return c(We,n,ht(a(xe,u+1,t)),r,a(Ce,u,t))}return c(We,n,gt,r,t)}),Re=t(function(n,r){if(Te(r))return gt;var t=a(Le,"#",r);if(t.b){var e=t.a;return f(Be,n,ht(a(xe,e+1,r)),a(Ce,e,r))}return f(Be,n,gt,r)}),De=function(n){return a(Ne,"http://",n)?a(Re,0,a(xe,7,n)):a(Ne,"https://",n)?a(Re,1,a(xe,8,n)):gt},Me=e(function(n,r,t){return a(ge,function(n){return N(r,n)},f(vr,t.a?cr:fr,t.b,function(t){return a(he,n,a(be,r,t))}))}),qe=function(n){return f(wr,t(function(n,r){return f(Lr,n.a,n.b,r)}),Ar,n)},Ke=o(function(n,r,u,i,o,a){var v=f(Xr,e(function(t,e,i){n:for(;;){var o=i.a,a=i.b;if(o.b){var v=o.a,s=v.a,d=v.b,l=o.b;if(E(s,t)<0){t=t,e=e,i=N(l,f(n,s,d,a));continue n}return E(s,t)>0?N(o,f(u,t,e,a)):N(l,c(r,s,d,e,a))}return N(o,f(u,t,e,a))}}),N($r(i),a),o),s=v.a,d=v.b;return f(wr,t(function(r,t){return f(n,r.a,r.b,t)}),d,s)}),Je=t(function(n,r){return f(Xr,Lr,r,n)}),Ve=function(n){return R(function(r){var t=n.f;2===t.$&&t.c&&t.c(),n.f=null,r(B(x))})},Ze=e(function(n,r,t){var i=e(function(r,t,e){var u=e.c;return L(e.a,e.b,a(br,f(Me,n,r,t),u))}),o=e(function(n,r,t){var e=t.b,u=t.c;return L(a(br,r,t.a),e,u)}),c=u(function(n,r,t,e){var u=e.c;return L(e.a,f(Lr,n,r,e.b),u)}),v=a(Rr,le,r),d=s(Ke,o,c,i,t.at,qe(v),L(h,Ar,h)),l=d.b,b=d.c;return a(Et,function(n){return jt(a(se,v,a(Je,l,qe(n))))},a(Et,function(){return we(b)},we(a(Rr,Ve,d.a))))}),ze=e(function(n,r,t){var e=n(r);return e.$?t:a(br,e.a,t)}),Ie=t(function(n,r){return f(Br,ze(n),h,r)});bn["Browser.Events"]=hn(de,Ze,e(function(n,r,t){var e=r.x,u=r.al,i=a(Ie,function(n){var r=n.b.c;return A(n.a,e)?a(sr,r,u):gt},t.aD);return a(Et,function(){return jt(t)},we(a(Rr,Jt(n),i)))}),0,t(function(n,r){return f(ve,r.a,r.b,a(fe,n,r.c))}));var Pe,Ge,Ue,Ye,He,Qe,Xe=wn("Browser.Events"),nu=a(e(function(n,r,t){return Xe(f(ve,n,r,t))}),0,"keydown"),ru=t(function(n,r){return a(br,T(n,{x:r.M}),a(Rr,function(n){return T(n,{W:!1})},r.i))}),tu=u(function(n,r,t,e){n:for(;;){if(!e.b)return A(r.e,t.e)?Fr(a(br,T(r,{y:!0,e:2*r.e}),n)):Fr(a(br,t,a(br,r,n)));if(e.b.b){var u=e.a,i=e.b,o=i.a,f=i.b;if(A(r.e,t.e)){n=a(br,T(r,{y:!0,e:2*r.e}),n),r=u,t=o,e=f;continue n}n=a(br,r,n),r=t,t=u,e=a(br,o,f)}else{if(u=e.a,A(r.e,t.e))return Fr(a(br,u,a(br,T(r,{y:!0,e:2*r.e}),n)));n=a(br,r,n),r=t,t=u,e=h}}}),eu=function(n){if(n.b&&n.b.b){var r=n.b;return c(tu,h,n.a,r.a,r.b)}return n},uu=function(n){return a(Rr,function(n){return T(n,{y:!1})},n)},iu=function(n){return f(Mt,t(function(n,r){return T(n,{h:r})}),n,Fr(a(mr,1,4)))},ou=t(function(n,r){return E(n.g,r.g)>0?2:E(n.g,r.g)<0?0:1}),au=t(function(n,r){return f(Br,t(function(r,t){return n(r)?a(br,r,t):t}),h,r)}),fu=t(function(n,r){return a(Rr,function(r){return n?Fr(r):yr(r)},p([a(Ht,ou,a(au,function(n){return 1===n.g},r)),a(Ht,ou,a(au,function(n){return 2===n.g},r)),a(Ht,ou,a(au,function(n){return 3===n.g},r)),a(Ht,ou,a(au,function(n){return 4===n.g},r))]))}),cu=t(function(n,r){return r.b?f(Br,br,r,n):n}),vu=function(n){return f(Br,cu,h,n)},su=function(n){return f(Mt,t(function(n,r){return T(n,{g:r})}),n,a(mr,1,4))},du=t(function(n,r){return E(n.h,r.h)>0?2:E(n.h,r.h)<0?0:1}),lu=t(function(n,r){return a(Rr,function(r){return n?Fr(r):yr(r)},p([a(Ht,du,a(au,function(n){return 1===n.h},r)),a(Ht,du,a(au,function(n){return 2===n.h},r)),a(Ht,du,a(au,function(n){return 3===n.h},r)),a(Ht,du,a(au,function(n){return 4===n.h},r))]))}),bu=function(n){return f(Mt,t(function(n,r){return T(n,{g:r})}),n,Fr(a(mr,1,4)))},hu=function(n){return f(Mt,t(function(n,r){return T(n,{h:r})}),n,a(mr,1,4))},gu=function(n){return R(function(r){var t=setTimeout(function(){r(B(x))},n);return function(){clearTimeout(t)}})},$u=a(Ae,t(function(n){return n})({$:2}),gu(300)),pu=or,mu=t(function(n,r){return 1===n.$?r:r+":"+qt(n.a)}),wu=e(function(n,r,t){return 1===r.$?t:C(t,C(n,r.a))}),yu=t(function(n,r){switch(n.$){case 0:return N(r,Xt);case 1:return N(T(r,{i:h}),ne(h));case 2:return N(r,ne(r.i));case 3:return N(function(n){var r=f(wr,Sr,0,a(Rr,function(n){return n.e},n.i));return T(n,{K:a(Ur,r,n.K),Z:r})}(T(r,{M:r.M+1,i:Qt(a(ru,n.a,r))})),Xt);case 4:return N(T(r,{i:(e=r.i,Qt(vu(a(Rr,hu,a(Rr,eu,a(Rr,hu,a(fu,0,uu(e))))))))}),$u);case 5:return N(T(r,{i:Qt(vu(a(Rr,iu,a(Rr,eu,a(Rr,iu,a(fu,1,uu(r.i)))))))}),$u);case 7:return N(T(r,{i:Qt(vu(a(Rr,su,a(Rr,eu,a(Rr,su,a(lu,0,uu(r.i)))))))}),$u);case 6:return N(T(r,{i:Qt(vu(a(Rr,bu,a(Rr,eu,a(Rr,bu,a(lu,1,uu(r.i)))))))}),$u);case 8:var t=n.a;return N(r,t.$?function(n){return a(Ae,$e,R(function(){try{cr.location=n}catch(n){An.location.reload(!1)}}))}(t.a):a(pu,r.x,function(n){return f(wu,"#",n.am,f(wu,"?",n.ay,C(a(mu,n.au,C(n.ax?"https://":"http://",n.ao)),n.as)))}(t.a)));default:return N(T(r,{ag:n.a}),Xt)}var e}),ku=jn("button"),Au=jn("div"),_u=jn("p"),Eu=jn("strong"),ju=En,xu=dn,Nu=t(function(n,r){return a(Cn,n,xu(r))}),Lu=Nu("className"),Tu=Tn,Cu=t(function(n,r){return a(Tu,n,{$:0,a:r})}),Ou=a(Au,p([Lu("above-game")]),p([a(_u,p([Lu("game-intro")]),p([ju("Join the numbers and get to the "),a(Eu,h,p([ju("2048 tile!")]))])),a(ku,p([Lu("restart-button"),(Pe={$:1},a(Cu,"click",_e(Pe)))]),p([ju("New Game")]))])),Su=a(jn("hr"),h,h),Fu=a(_u,p([Lu("game-explanation")]),p([a(Eu,p([Lu("important")]),p([ju("How to play: ")])),ju("Use your "),a(Eu,h,p([ju("arrow keys")])),ju(" to move the tiles. When two tiles with the same number touch, they "),a(Eu,h,p([ju("merge into one!")]))])),Wu=jn("a"),Bu=function(n){return a(Nu,"href",/^javascript:/i.test((r=n).replace(/\s/g,""))?"":r);var r},Ru=Nu("target"),Du=a(_u,h,p([ju("Original 2048 created by "),a(Wu,p([Bu("http://gabrielecirulli.com"),Ru("_blank")]),p([ju("Gabriele Cirulli. ")])),ju("Based on "),a(Wu,p([Bu("https://itunes.apple.com/us/app/1024!/id823499224"),Ru("_blank")]),p([ju("1024 by Veewo Studio ")])),ju("and conceptually similar to "),a(Wu,p([Bu("http://asherv.com/threes/"),Ru("_blank")]),p([ju("Threes by Asher Vollmer.")]))])),Mu=jn("h1"),qu=a(Au,p([Lu("game-message")]),p([a(_u,h,h),a(Au,p([Lu("lower")]),p([a(Wu,p([Lu("keep-playing-button")]),p([ju("Keep going")])),a(Wu,p([Lu("retry-button")]),p([ju("Try again")]))]))])),Ku=a(_u,h,p([a(Eu,p([Lu("important")]),p([ju("Note: ")])),ju("This is not the official version of 2048! It is an "),ju("implementation of Gabriele Cirulli's "),a(Wu,p([Bu("https://github.com/gabrielecirulli/2048")]),p([ju("2048 game ")])),ju("written in "),a(Wu,p([Bu("https://elm-lang.org/")]),p([ju("Elm")])),ju(". You can find the code for this Elm implementation here: "),a(Wu,p([Bu("https://github.com/stepheneb/elm-2048")]),p([ju("github.com/stepheneb/elm-2048")])),ju(".")])),Ju=a(Au,p([Lu("grid-row")]),p([a(Au,p([Lu("grid-cell")]),h),a(Au,p([Lu("grid-cell")]),h),a(Au,p([Lu("grid-cell")]),h),a(Au,p([Lu("grid-cell")]),h)])),Vu=a(Au,p([Lu("grid-container")]),p([Ju,Ju,Ju,Ju])),Zu=function(n){return a(Au,p([Lu(function(n){return C(a(Kt," ",p(["tile","tile-"+qt(n.e),"tile-position-"+qt(n.g)+"-"+qt(n.h)])),C(function(n){return n.W?" tile-new ":""}(n),function(n){return n.y?" tile-merged ":""}(n)))}(n))]),p([a(Au,p([Lu("tile-inner")]),p([ju(qt(n.e))]))]))},zu=Ln,Iu=function(n){return N(qt(n.x),a(zu,Zu,n))},Pu=function(n){return xn(function(n){return"script"==n?"p":n}(n))};Ge={Main:{init:(Ye=(Ue={aS:te,aV:function(n){return{$:9,a:n}},aW:function(n){return{$:8,a:n}},aZ:function(){return nu(ce)},a$:yu,a0:function(n){return{aJ:p([a(Au,p([Lu("container")]),p([function(n){return a(Au,p([Lu("heading")]),p([a(Mu,p([Lu("title")]),p([ju("Elm 2048")])),a(Au,p([Lu("scores-container")]),p([a(Au,p([Lu("score-container")]),p([ju(qt(n.Z))])),a(Au,p([Lu("best-container")]),p([ju(qt(n.K))]))]))]))}(n),Ou,a(Au,p([Lu("game-container")]),p([qu,Vu,(r=n.i,f(Pu,"div",p([Lu("tile-container")]),function(n){return a(Rr,Iu,n)}(r)))])),Fu,Su,Ku,Su,Du]))]),a_:"Elm 2048"};var r}}).aV,He=Ue.aW,Qe=function(){Qe.a(Ye(er()))},rr({P:function(n){return Qe.a=n,cr.addEventListener("popstate",Qe),cr.navigator.userAgent.indexOf("Trident")<0||cr.addEventListener("hashchange",Qe),t(function(r,t){if(!t.ctrlKey&&!t.metaKey&&!t.shiftKey&&t.button<1&&!r.target&&!r.hasAttribute("download")){t.preventDefault();var e=r.href,u=er(),i=De(e).a;n(He(i&&u.ax===i.ax&&u.ao===i.ao&&u.au.a===i.au.a?{$:0,a:i}:function(n){return{$:1,a:n}}(e)))}})},aS:function(n){return f(Ue.aS,n,er(),Qe)},a0:Ue.a0,a$:Ue.a$,aZ:Ue.aZ}))(_e(0))(0)}},n.Elm?function n(r,t){for(var e in t)e in r?"init"==e?k(6):n(r[e],t[e]):r[e]=t[e]}(n.Elm,Ge):n.Elm=Ge}(this)},function(n,r,t){t(3),n.exports=t(11)},,,,,,,,function(){},function(n,r,t){"use strict";t.r(r),t(10);var e=t(1),u=!("localhost"!==window.location.hostname&&"[::1]"!==window.location.hostname&&!window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function i(n){navigator.serviceWorker.register(n).then(function(n){n.onupdatefound=function(){var r=n.installing;r.onstatechange=function(){"installed"===r.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(n){console.error("Error during service worker registration:",n)})}e.Elm.Main.init({node:document.getElementById("root")}),function(){if("serviceWorker"in navigator){if(new URL("/elm-2048",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var n="".concat("/elm-2048","/service-worker.js");u?function(n){fetch(n).then(function(r){404===r.status||-1===r.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(n){n.unregister().then(function(){window.location.reload()})}):i(n)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(n):i(n)})}}(),window.addEventListener("keydown",function(n){n.key.includes("Arrow")&&n.preventDefault()})}],[[2,1,2]]]);
//# sourceMappingURL=main.64d1caa7.chunk.js.map