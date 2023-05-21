(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function Rf(t,e){const n=Object.create(null),r=t.split(",");for(let i=0;i<r.length;i++)n[r[i]]=!0;return e?i=>!!n[i.toLowerCase()]:i=>!!n[i]}function Of(t){if(Z(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],i=Ve(r)?Ob(r):Of(r);if(i)for(const s in i)e[s]=i[s]}return e}else{if(Ve(t))return t;if(Me(t))return t}}const Ab=/;(?![^(]*\))/g,xb=/:([^]+)/,Rb=/\/\*.*?\*\//gs;function Ob(t){const e={};return t.replace(Rb,"").split(Ab).forEach(n=>{if(n){const r=n.split(xb);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function Nf(t){let e="";if(Ve(t))e=t;else if(Z(t))for(let n=0;n<t.length;n++){const r=Nf(t[n]);r&&(e+=r+" ")}else if(Me(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Nb="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Pb=Rf(Nb);function Zg(t){return!!t||t===""}const un=t=>Ve(t)?t:t==null?"":Z(t)||Me(t)&&(t.toString===rv||!oe(t.toString))?JSON.stringify(t,ev,2):String(t),ev=(t,e)=>e&&e.__v_isRef?ev(t,e.value):_i(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,i])=>(n[`${r} =>`]=i,n),{})}:tv(e)?{[`Set(${e.size})`]:[...e.values()]}:Me(e)&&!Z(e)&&!iv(e)?String(e):e,Re={},bi=[],rn=()=>{},Db=()=>!1,Mb=/^on[^a-z]/,Ec=t=>Mb.test(t),Pf=t=>t.startsWith("onUpdate:"),it=Object.assign,Df=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Lb=Object.prototype.hasOwnProperty,ge=(t,e)=>Lb.call(t,e),Z=Array.isArray,_i=t=>Io(t)==="[object Map]",tv=t=>Io(t)==="[object Set]",Ub=t=>Io(t)==="[object RegExp]",oe=t=>typeof t=="function",Ve=t=>typeof t=="string",Mf=t=>typeof t=="symbol",Me=t=>t!==null&&typeof t=="object",nv=t=>Me(t)&&oe(t.then)&&oe(t.catch),rv=Object.prototype.toString,Io=t=>rv.call(t),Fb=t=>Io(t).slice(8,-1),iv=t=>Io(t)==="[object Object]",Lf=t=>Ve(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,ka=Rf(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Tc=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},$b=/-(\w)/g,_n=Tc(t=>t.replace($b,(e,n)=>n?n.toUpperCase():"")),Vb=/\B([A-Z])/g,ni=Tc(t=>t.replace(Vb,"-$1").toLowerCase()),Ic=Tc(t=>t.charAt(0).toUpperCase()+t.slice(1)),Ol=Tc(t=>t?`on${Ic(t)}`:""),Ks=(t,e)=>!Object.is(t,e),Ei=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},Ba=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},pu=t=>{const e=parseFloat(t);return isNaN(e)?t:e},Bb=t=>{const e=Ve(t)?Number(t):NaN;return isNaN(e)?t:e};let qd;const jb=()=>qd||(qd=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let Pt;class sv{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Pt,!e&&Pt&&(this.index=(Pt.scopes||(Pt.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=Pt;try{return Pt=this,e()}finally{Pt=n}}}on(){Pt=this}off(){Pt=this.parent}stop(e){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0,this._active=!1}}}function ov(t){return new sv(t)}function Hb(t,e=Pt){e&&e.active&&e.effects.push(t)}function Uf(){return Pt}function av(t){Pt&&Pt.cleanups.push(t)}const Ff=t=>{const e=new Set(t);return e.w=0,e.n=0,e},cv=t=>(t.w&hr)>0,lv=t=>(t.n&hr)>0,zb=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=hr},Wb=t=>{const{deps:e}=t;if(e.length){let n=0;for(let r=0;r<e.length;r++){const i=e[r];cv(i)&&!lv(i)?i.delete(t):e[n++]=i,i.w&=~hr,i.n&=~hr}e.length=n}},ja=new WeakMap;let Es=0,hr=1;const gu=30;let Zt;const Br=Symbol(""),vu=Symbol("");class $f{constructor(e,n=null,r){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,Hb(this,r)}run(){if(!this.active)return this.fn();let e=Zt,n=ir;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=Zt,Zt=this,ir=!0,hr=1<<++Es,Es<=gu?zb(this):Gd(this),this.fn()}finally{Es<=gu&&Wb(this),hr=1<<--Es,Zt=this.parent,ir=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Zt===this?this.deferStop=!0:this.active&&(Gd(this),this.onStop&&this.onStop(),this.active=!1)}}function Gd(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let ir=!0;const uv=[];function Ji(){uv.push(ir),ir=!1}function Zi(){const t=uv.pop();ir=t===void 0?!0:t}function Ot(t,e,n){if(ir&&Zt){let r=ja.get(t);r||ja.set(t,r=new Map);let i=r.get(n);i||r.set(n,i=Ff()),fv(i)}}function fv(t,e){let n=!1;Es<=gu?lv(t)||(t.n|=hr,n=!cv(t)):n=!t.has(Zt),n&&(t.add(Zt),Zt.deps.push(t))}function Nn(t,e,n,r,i,s){const o=ja.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&Z(t)){const c=Number(r);o.forEach((l,u)=>{(u==="length"||u>=c)&&a.push(l)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":Z(t)?Lf(n)&&a.push(o.get("length")):(a.push(o.get(Br)),_i(t)&&a.push(o.get(vu)));break;case"delete":Z(t)||(a.push(o.get(Br)),_i(t)&&a.push(o.get(vu)));break;case"set":_i(t)&&a.push(o.get(Br));break}if(a.length===1)a[0]&&yu(a[0]);else{const c=[];for(const l of a)l&&c.push(...l);yu(Ff(c))}}function yu(t,e){const n=Z(t)?t:[...t];for(const r of n)r.computed&&Kd(r);for(const r of n)r.computed||Kd(r)}function Kd(t,e){(t!==Zt||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}function qb(t,e){var n;return(n=ja.get(t))===null||n===void 0?void 0:n.get(e)}const Gb=Rf("__proto__,__v_isRef,__isVue"),hv=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Mf)),Kb=Vf(),Yb=Vf(!1,!0),Qb=Vf(!0),Yd=Xb();function Xb(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=de(this);for(let s=0,o=this.length;s<o;s++)Ot(r,"get",s+"");const i=r[e](...n);return i===-1||i===!1?r[e](...n.map(de)):i}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){Ji();const r=de(this)[e].apply(this,n);return Zi(),r}}),t}function Jb(t){const e=de(this);return Ot(e,"has",t),e.hasOwnProperty(t)}function Vf(t=!1,e=!1){return function(r,i,s){if(i==="__v_isReactive")return!t;if(i==="__v_isReadonly")return t;if(i==="__v_isShallow")return e;if(i==="__v_raw"&&s===(t?e?m_:vv:e?gv:pv).get(r))return r;const o=Z(r);if(!t){if(o&&ge(Yd,i))return Reflect.get(Yd,i,s);if(i==="hasOwnProperty")return Jb}const a=Reflect.get(r,i,s);return(Mf(i)?hv.has(i):Gb(i))||(t||Ot(r,"get",i),e)?a:qe(a)?o&&Lf(i)?a:a.value:Me(a)?t?Hf(a):es(a):a}}const Zb=dv(),e_=dv(!0);function dv(t=!1){return function(n,r,i,s){let o=n[r];if(Ni(o)&&qe(o)&&!qe(i))return!1;if(!t&&(!Ha(i)&&!Ni(i)&&(o=de(o),i=de(i)),!Z(n)&&qe(o)&&!qe(i)))return o.value=i,!0;const a=Z(n)&&Lf(r)?Number(r)<n.length:ge(n,r),c=Reflect.set(n,r,i,s);return n===de(s)&&(a?Ks(i,o)&&Nn(n,"set",r,i):Nn(n,"add",r,i)),c}}function t_(t,e){const n=ge(t,e);t[e];const r=Reflect.deleteProperty(t,e);return r&&n&&Nn(t,"delete",e,void 0),r}function n_(t,e){const n=Reflect.has(t,e);return(!Mf(e)||!hv.has(e))&&Ot(t,"has",e),n}function r_(t){return Ot(t,"iterate",Z(t)?"length":Br),Reflect.ownKeys(t)}const mv={get:Kb,set:Zb,deleteProperty:t_,has:n_,ownKeys:r_},i_={get:Qb,set(t,e){return!0},deleteProperty(t,e){return!0}},s_=it({},mv,{get:Yb,set:e_}),Bf=t=>t,kc=t=>Reflect.getPrototypeOf(t);function Jo(t,e,n=!1,r=!1){t=t.__v_raw;const i=de(t),s=de(e);n||(e!==s&&Ot(i,"get",e),Ot(i,"get",s));const{has:o}=kc(i),a=r?Bf:n?Wf:Ys;if(o.call(i,e))return a(t.get(e));if(o.call(i,s))return a(t.get(s));t!==i&&t.get(e)}function Zo(t,e=!1){const n=this.__v_raw,r=de(n),i=de(t);return e||(t!==i&&Ot(r,"has",t),Ot(r,"has",i)),t===i?n.has(t):n.has(t)||n.has(i)}function ea(t,e=!1){return t=t.__v_raw,!e&&Ot(de(t),"iterate",Br),Reflect.get(t,"size",t)}function Qd(t){t=de(t);const e=de(this);return kc(e).has.call(e,t)||(e.add(t),Nn(e,"add",t,t)),this}function Xd(t,e){e=de(e);const n=de(this),{has:r,get:i}=kc(n);let s=r.call(n,t);s||(t=de(t),s=r.call(n,t));const o=i.call(n,t);return n.set(t,e),s?Ks(e,o)&&Nn(n,"set",t,e):Nn(n,"add",t,e),this}function Jd(t){const e=de(this),{has:n,get:r}=kc(e);let i=n.call(e,t);i||(t=de(t),i=n.call(e,t)),r&&r.call(e,t);const s=e.delete(t);return i&&Nn(e,"delete",t,void 0),s}function Zd(){const t=de(this),e=t.size!==0,n=t.clear();return e&&Nn(t,"clear",void 0,void 0),n}function ta(t,e){return function(r,i){const s=this,o=s.__v_raw,a=de(o),c=e?Bf:t?Wf:Ys;return!t&&Ot(a,"iterate",Br),o.forEach((l,u)=>r.call(i,c(l),c(u),s))}}function na(t,e,n){return function(...r){const i=this.__v_raw,s=de(i),o=_i(s),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,l=i[t](...r),u=n?Bf:e?Wf:Ys;return!e&&Ot(s,"iterate",c?vu:Br),{next(){const{value:f,done:h}=l.next();return h?{value:f,done:h}:{value:a?[u(f[0]),u(f[1])]:u(f),done:h}},[Symbol.iterator](){return this}}}}function zn(t){return function(...e){return t==="delete"?!1:this}}function o_(){const t={get(s){return Jo(this,s)},get size(){return ea(this)},has:Zo,add:Qd,set:Xd,delete:Jd,clear:Zd,forEach:ta(!1,!1)},e={get(s){return Jo(this,s,!1,!0)},get size(){return ea(this)},has:Zo,add:Qd,set:Xd,delete:Jd,clear:Zd,forEach:ta(!1,!0)},n={get(s){return Jo(this,s,!0)},get size(){return ea(this,!0)},has(s){return Zo.call(this,s,!0)},add:zn("add"),set:zn("set"),delete:zn("delete"),clear:zn("clear"),forEach:ta(!0,!1)},r={get(s){return Jo(this,s,!0,!0)},get size(){return ea(this,!0)},has(s){return Zo.call(this,s,!0)},add:zn("add"),set:zn("set"),delete:zn("delete"),clear:zn("clear"),forEach:ta(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(s=>{t[s]=na(s,!1,!1),n[s]=na(s,!0,!1),e[s]=na(s,!1,!0),r[s]=na(s,!0,!0)}),[t,n,e,r]}const[a_,c_,l_,u_]=o_();function jf(t,e){const n=e?t?u_:l_:t?c_:a_;return(r,i,s)=>i==="__v_isReactive"?!t:i==="__v_isReadonly"?t:i==="__v_raw"?r:Reflect.get(ge(n,i)&&i in r?n:r,i,s)}const f_={get:jf(!1,!1)},h_={get:jf(!1,!0)},d_={get:jf(!0,!1)},pv=new WeakMap,gv=new WeakMap,vv=new WeakMap,m_=new WeakMap;function p_(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function g_(t){return t.__v_skip||!Object.isExtensible(t)?0:p_(Fb(t))}function es(t){return Ni(t)?t:zf(t,!1,mv,f_,pv)}function v_(t){return zf(t,!1,s_,h_,gv)}function Hf(t){return zf(t,!0,i_,d_,vv)}function zf(t,e,n,r,i){if(!Me(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const s=i.get(t);if(s)return s;const o=g_(t);if(o===0)return t;const a=new Proxy(t,o===2?r:n);return i.set(t,a),a}function sr(t){return Ni(t)?sr(t.__v_raw):!!(t&&t.__v_isReactive)}function Ni(t){return!!(t&&t.__v_isReadonly)}function Ha(t){return!!(t&&t.__v_isShallow)}function yv(t){return sr(t)||Ni(t)}function de(t){const e=t&&t.__v_raw;return e?de(e):t}function Pi(t){return Ba(t,"__v_skip",!0),t}const Ys=t=>Me(t)?es(t):t,Wf=t=>Me(t)?Hf(t):t;function qf(t){ir&&Zt&&(t=de(t),fv(t.dep||(t.dep=Ff())))}function Gf(t,e){t=de(t);const n=t.dep;n&&yu(n)}function qe(t){return!!(t&&t.__v_isRef===!0)}function ut(t){return wv(t,!1)}function y_(t){return wv(t,!0)}function wv(t,e){return qe(t)?t:new w_(t,e)}class w_{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:de(e),this._value=n?e:Ys(e)}get value(){return qf(this),this._value}set value(e){const n=this.__v_isShallow||Ha(e)||Ni(e);e=n?e:de(e),Ks(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:Ys(e),Gf(this))}}function $e(t){return qe(t)?t.value:t}const b_={get:(t,e,n)=>$e(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const i=t[e];return qe(i)&&!qe(n)?(i.value=n,!0):Reflect.set(t,e,n,r)}};function bv(t){return sr(t)?t:new Proxy(t,b_)}class __{constructor(e){this.dep=void 0,this.__v_isRef=!0;const{get:n,set:r}=e(()=>qf(this),()=>Gf(this));this._get=n,this._set=r}get value(){return this._get()}set value(e){this._set(e)}}function E_(t){return new __(t)}function T_(t){const e=Z(t)?new Array(t.length):{};for(const n in t)e[n]=_v(t,n);return e}class I_{constructor(e,n,r){this._object=e,this._key=n,this._defaultValue=r,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return qb(de(this._object),this._key)}}function _v(t,e,n){const r=t[e];return qe(r)?r:new I_(t,e,n)}var Ev;class k_{constructor(e,n,r,i){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this[Ev]=!1,this._dirty=!0,this.effect=new $f(e,()=>{this._dirty||(this._dirty=!0,Gf(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!i,this.__v_isReadonly=r}get value(){const e=de(this);return qf(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}Ev="__v_isReadonly";function C_(t,e,n=!1){let r,i;const s=oe(t);return s?(r=t,i=rn):(r=t.get,i=t.set),new k_(r,i,s||!i,n)}function or(t,e,n,r){let i;try{i=r?t(...r):t()}catch(s){Cc(s,e,n)}return i}function Ht(t,e,n,r){if(oe(t)){const s=or(t,e,n,r);return s&&nv(s)&&s.catch(o=>{Cc(o,e,n)}),s}const i=[];for(let s=0;s<t.length;s++)i.push(Ht(t[s],e,n,r));return i}function Cc(t,e,n,r=!0){const i=e?e.vnode:null;if(e){let s=e.parent;const o=e.proxy,a=n;for(;s;){const l=s.ec;if(l){for(let u=0;u<l.length;u++)if(l[u](t,o,a)===!1)return}s=s.parent}const c=e.appContext.config.errorHandler;if(c){or(c,null,10,[t,o,a]);return}}S_(t,n,i,r)}function S_(t,e,n,r=!0){console.error(t)}let Qs=!1,wu=!1;const gt=[];let fn=0;const Ti=[];let Cn=null,Nr=0;const Tv=Promise.resolve();let Kf=null;function Yf(t){const e=Kf||Tv;return t?e.then(this?t.bind(this):t):e}function A_(t){let e=fn+1,n=gt.length;for(;e<n;){const r=e+n>>>1;Xs(gt[r])<t?e=r+1:n=r}return e}function Qf(t){(!gt.length||!gt.includes(t,Qs&&t.allowRecurse?fn+1:fn))&&(t.id==null?gt.push(t):gt.splice(A_(t.id),0,t),Iv())}function Iv(){!Qs&&!wu&&(wu=!0,Kf=Tv.then(Cv))}function x_(t){const e=gt.indexOf(t);e>fn&&gt.splice(e,1)}function R_(t){Z(t)?Ti.push(...t):(!Cn||!Cn.includes(t,t.allowRecurse?Nr+1:Nr))&&Ti.push(t),Iv()}function em(t,e=Qs?fn+1:0){for(;e<gt.length;e++){const n=gt[e];n&&n.pre&&(gt.splice(e,1),e--,n())}}function kv(t){if(Ti.length){const e=[...new Set(Ti)];if(Ti.length=0,Cn){Cn.push(...e);return}for(Cn=e,Cn.sort((n,r)=>Xs(n)-Xs(r)),Nr=0;Nr<Cn.length;Nr++)Cn[Nr]();Cn=null,Nr=0}}const Xs=t=>t.id==null?1/0:t.id,O_=(t,e)=>{const n=Xs(t)-Xs(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function Cv(t){wu=!1,Qs=!0,gt.sort(O_);const e=rn;try{for(fn=0;fn<gt.length;fn++){const n=gt[fn];n&&n.active!==!1&&or(n,null,14)}}finally{fn=0,gt.length=0,kv(),Qs=!1,Kf=null,(gt.length||Ti.length)&&Cv()}}function N_(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||Re;let i=n;const s=e.startsWith("update:"),o=s&&e.slice(7);if(o&&o in r){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:f,trim:h}=r[u]||Re;h&&(i=n.map(d=>Ve(d)?d.trim():d)),f&&(i=n.map(pu))}let a,c=r[a=Ol(e)]||r[a=Ol(_n(e))];!c&&s&&(c=r[a=Ol(ni(e))]),c&&Ht(c,t,6,i);const l=r[a+"Once"];if(l){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,Ht(l,t,6,i)}}function Sv(t,e,n=!1){const r=e.emitsCache,i=r.get(t);if(i!==void 0)return i;const s=t.emits;let o={},a=!1;if(!oe(t)){const c=l=>{const u=Sv(l,e,!0);u&&(a=!0,it(o,u))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!s&&!a?(Me(t)&&r.set(t,null),null):(Z(s)?s.forEach(c=>o[c]=null):it(o,s),Me(t)&&r.set(t,o),o)}function Sc(t,e){return!t||!Ec(e)?!1:(e=e.slice(2).replace(/Once$/,""),ge(t,e[0].toLowerCase()+e.slice(1))||ge(t,ni(e))||ge(t,e))}let lt=null,Ac=null;function za(t){const e=lt;return lt=t,Ac=t&&t.type.__scopeId||null,e}function Xf(t){Ac=t}function Jf(){Ac=null}function Dt(t,e=lt,n){if(!e||t._n)return t;const r=(...i)=>{r._d&&fm(-1);const s=za(e);let o;try{o=t(...i)}finally{za(s),r._d&&fm(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function Nl(t){const{type:e,vnode:n,proxy:r,withProxy:i,props:s,propsOptions:[o],slots:a,attrs:c,emit:l,render:u,renderCache:f,data:h,setupState:d,ctx:g,inheritAttrs:y}=t;let _,w;const v=za(t);try{if(n.shapeFlag&4){const T=i||r;_=ln(u.call(T,T,f,s,d,h,g)),w=c}else{const T=e;_=ln(T.length>1?T(s,{attrs:c,slots:a,emit:l}):T(s,null)),w=e.props?c:P_(c)}}catch(T){Ms.length=0,Cc(T,t,1),_=Ie(Wt)}let b=_;if(w&&y!==!1){const T=Object.keys(w),{shapeFlag:R}=b;T.length&&R&7&&(o&&T.some(Pf)&&(w=D_(w,o)),b=Pn(b,w))}return n.dirs&&(b=Pn(b),b.dirs=b.dirs?b.dirs.concat(n.dirs):n.dirs),n.transition&&(b.transition=n.transition),_=b,za(v),_}const P_=t=>{let e;for(const n in t)(n==="class"||n==="style"||Ec(n))&&((e||(e={}))[n]=t[n]);return e},D_=(t,e)=>{const n={};for(const r in t)(!Pf(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function M_(t,e,n){const{props:r,children:i,component:s}=t,{props:o,children:a,patchFlag:c}=e,l=s.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?tm(r,o,l):!!o;if(c&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const h=u[f];if(o[h]!==r[h]&&!Sc(l,h))return!0}}}else return(i||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?tm(r,o,l):!0:!!o;return!1}function tm(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let i=0;i<r.length;i++){const s=r[i];if(e[s]!==t[s]&&!Sc(n,s))return!0}return!1}function L_({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const Av=t=>t.__isSuspense;function U_(t,e){e&&e.pendingBranch?Z(t)?e.effects.push(...t):e.effects.push(t):R_(t)}function Ca(t,e){if(We){let n=We.provides;const r=We.parent&&We.parent.provides;r===n&&(n=We.provides=Object.create(r)),n[t]=e}}function zt(t,e,n=!1){const r=We||lt;if(r){const i=r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(i&&t in i)return i[t];if(arguments.length>1)return n&&oe(e)?e.call(r.proxy):e}}function F_(t,e){return Zf(t,null,e)}const ra={};function sn(t,e,n){return Zf(t,e,n)}function Zf(t,e,{immediate:n,deep:r,flush:i,onTrack:s,onTrigger:o}=Re){const a=Uf()===(We==null?void 0:We.scope)?We:null;let c,l=!1,u=!1;if(qe(t)?(c=()=>t.value,l=Ha(t)):sr(t)?(c=()=>t,r=!0):Z(t)?(u=!0,l=t.some(b=>sr(b)||Ha(b)),c=()=>t.map(b=>{if(qe(b))return b.value;if(sr(b))return Dr(b);if(oe(b))return or(b,a,2)})):oe(t)?e?c=()=>or(t,a,2):c=()=>{if(!(a&&a.isUnmounted))return f&&f(),Ht(t,a,3,[h])}:c=rn,e&&r){const b=c;c=()=>Dr(b())}let f,h=b=>{f=w.onStop=()=>{or(b,a,4)}},d;if(no)if(h=rn,e?n&&Ht(e,a,3,[c(),u?[]:void 0,h]):c(),i==="sync"){const b=OE();d=b.__watcherHandles||(b.__watcherHandles=[])}else return rn;let g=u?new Array(t.length).fill(ra):ra;const y=()=>{if(w.active)if(e){const b=w.run();(r||l||(u?b.some((T,R)=>Ks(T,g[R])):Ks(b,g)))&&(f&&f(),Ht(e,a,3,[b,g===ra?void 0:u&&g[0]===ra?[]:g,h]),g=b)}else w.run()};y.allowRecurse=!!e;let _;i==="sync"?_=y:i==="post"?_=()=>ot(y,a&&a.suspense):(y.pre=!0,a&&(y.id=a.uid),_=()=>Qf(y));const w=new $f(c,_);e?n?y():g=w.run():i==="post"?ot(w.run.bind(w),a&&a.suspense):w.run();const v=()=>{w.stop(),a&&a.scope&&Df(a.scope.effects,w)};return d&&d.push(v),v}function $_(t,e,n){const r=this.proxy,i=Ve(t)?t.includes(".")?xv(r,t):()=>r[t]:t.bind(r,r);let s;oe(e)?s=e:(s=e.handler,n=e);const o=We;Mi(this);const a=Zf(i,s.bind(r),n);return o?Mi(o):jr(),a}function xv(t,e){const n=e.split(".");return()=>{let r=t;for(let i=0;i<n.length&&r;i++)r=r[n[i]];return r}}function Dr(t,e){if(!Me(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),qe(t))Dr(t.value,e);else if(Z(t))for(let n=0;n<t.length;n++)Dr(t[n],e);else if(tv(t)||_i(t))t.forEach(n=>{Dr(n,e)});else if(iv(t))for(const n in t)Dr(t[n],e);return t}function Rv(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Oc(()=>{t.isMounted=!0}),Nc(()=>{t.isUnmounting=!0}),t}const Vt=[Function,Array],V_={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Vt,onEnter:Vt,onAfterEnter:Vt,onEnterCancelled:Vt,onBeforeLeave:Vt,onLeave:Vt,onAfterLeave:Vt,onLeaveCancelled:Vt,onBeforeAppear:Vt,onAppear:Vt,onAfterAppear:Vt,onAppearCancelled:Vt},setup(t,{slots:e}){const n=Mc(),r=Rv();let i;return()=>{const s=e.default&&eh(e.default(),!0);if(!s||!s.length)return;let o=s[0];if(s.length>1){for(const y of s)if(y.type!==Wt){o=y;break}}const a=de(t),{mode:c}=a;if(r.isLeaving)return Pl(o);const l=nm(o);if(!l)return Pl(o);const u=Js(l,a,r,n);Di(l,u);const f=n.subTree,h=f&&nm(f);let d=!1;const{getTransitionKey:g}=l.type;if(g){const y=g();i===void 0?i=y:y!==i&&(i=y,d=!0)}if(h&&h.type!==Wt&&(!er(l,h)||d)){const y=Js(h,a,r,n);if(Di(h,y),c==="out-in")return r.isLeaving=!0,y.afterLeave=()=>{r.isLeaving=!1,n.update.active!==!1&&n.update()},Pl(o);c==="in-out"&&l.type!==Wt&&(y.delayLeave=(_,w,v)=>{const b=Nv(r,h);b[String(h.key)]=h,_._leaveCb=()=>{w(),_._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=v})}return o}}},Ov=V_;function Nv(t,e){const{leavingVNodes:n}=t;let r=n.get(e.type);return r||(r=Object.create(null),n.set(e.type,r)),r}function Js(t,e,n,r){const{appear:i,mode:s,persisted:o=!1,onBeforeEnter:a,onEnter:c,onAfterEnter:l,onEnterCancelled:u,onBeforeLeave:f,onLeave:h,onAfterLeave:d,onLeaveCancelled:g,onBeforeAppear:y,onAppear:_,onAfterAppear:w,onAppearCancelled:v}=e,b=String(t.key),T=Nv(n,t),R=(A,H)=>{A&&Ht(A,r,9,H)},U=(A,H)=>{const K=H[1];R(A,H),Z(A)?A.every(le=>le.length<=1)&&K():A.length<=1&&K()},P={mode:s,persisted:o,beforeEnter(A){let H=a;if(!n.isMounted)if(i)H=y||a;else return;A._leaveCb&&A._leaveCb(!0);const K=T[b];K&&er(t,K)&&K.el._leaveCb&&K.el._leaveCb(),R(H,[A])},enter(A){let H=c,K=l,le=u;if(!n.isMounted)if(i)H=_||c,K=w||l,le=v||u;else return;let j=!1;const _e=A._enterCb=xe=>{j||(j=!0,xe?R(le,[A]):R(K,[A]),P.delayedLeave&&P.delayedLeave(),A._enterCb=void 0)};H?U(H,[A,_e]):_e()},leave(A,H){const K=String(t.key);if(A._enterCb&&A._enterCb(!0),n.isUnmounting)return H();R(f,[A]);let le=!1;const j=A._leaveCb=_e=>{le||(le=!0,H(),_e?R(g,[A]):R(d,[A]),A._leaveCb=void 0,T[K]===t&&delete T[K])};T[K]=t,h?U(h,[A,j]):j()},clone(A){return Js(A,e,n,r)}};return P}function Pl(t){if(xc(t))return t=Pn(t),t.children=null,t}function nm(t){return xc(t)?t.children?t.children[0]:void 0:t}function Di(t,e){t.shapeFlag&6&&t.component?Di(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function eh(t,e=!1,n){let r=[],i=0;for(let s=0;s<t.length;s++){let o=t[s];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:s);o.type===ct?(o.patchFlag&128&&i++,r=r.concat(eh(o.children,e,a))):(e||o.type!==Wt)&&r.push(a!=null?Pn(o,{key:a}):o)}if(i>1)for(let s=0;s<r.length;s++)r[s].patchFlag=-2;return r}function Yt(t){return oe(t)?{setup:t,name:t.name}:t}const Ii=t=>!!t.type.__asyncLoader,xc=t=>t.type.__isKeepAlive,B_={name:"KeepAlive",__isKeepAlive:!0,props:{include:[String,RegExp,Array],exclude:[String,RegExp,Array],max:[String,Number]},setup(t,{slots:e}){const n=Mc(),r=n.ctx;if(!r.renderer)return()=>{const v=e.default&&e.default();return v&&v.length===1?v[0]:v};const i=new Map,s=new Set;let o=null;const a=n.suspense,{renderer:{p:c,m:l,um:u,o:{createElement:f}}}=r,h=f("div");r.activate=(v,b,T,R,U)=>{const P=v.component;l(v,b,T,0,a),c(P.vnode,v,b,T,P,a,R,v.slotScopeIds,U),ot(()=>{P.isDeactivated=!1,P.a&&Ei(P.a);const A=v.props&&v.props.onVnodeMounted;A&&Bt(A,P.parent,v)},a)},r.deactivate=v=>{const b=v.component;l(v,h,null,1,a),ot(()=>{b.da&&Ei(b.da);const T=v.props&&v.props.onVnodeUnmounted;T&&Bt(T,b.parent,v),b.isDeactivated=!0},a)};function d(v){Dl(v),u(v,n,a,!0)}function g(v){i.forEach((b,T)=>{const R=Cu(b.type);R&&(!v||!v(R))&&y(T)})}function y(v){const b=i.get(v);!o||!er(b,o)?d(b):o&&Dl(o),i.delete(v),s.delete(v)}sn(()=>[t.include,t.exclude],([v,b])=>{v&&g(T=>Ts(v,T)),b&&g(T=>!Ts(b,T))},{flush:"post",deep:!0});let _=null;const w=()=>{_!=null&&i.set(_,Ml(n.subTree))};return Oc(w),th(w),Nc(()=>{i.forEach(v=>{const{subTree:b,suspense:T}=n,R=Ml(b);if(v.type===R.type&&v.key===R.key){Dl(R);const U=R.component.da;U&&ot(U,T);return}d(v)})}),()=>{if(_=null,!e.default)return null;const v=e.default(),b=v[0];if(v.length>1)return o=null,v;if(!to(b)||!(b.shapeFlag&4)&&!(b.shapeFlag&128))return o=null,b;let T=Ml(b);const R=T.type,U=Cu(Ii(T)?T.type.__asyncResolved||{}:R),{include:P,exclude:A,max:H}=t;if(P&&(!U||!Ts(P,U))||A&&U&&Ts(A,U))return o=T,b;const K=T.key==null?R:T.key,le=i.get(K);return T.el&&(T=Pn(T),b.shapeFlag&128&&(b.ssContent=T)),_=K,le?(T.el=le.el,T.component=le.component,T.transition&&Di(T,T.transition),T.shapeFlag|=512,s.delete(K),s.add(K)):(s.add(K),H&&s.size>parseInt(H,10)&&y(s.values().next().value)),T.shapeFlag|=256,o=T,Av(b.type)?b:T}}},mL=B_;function Ts(t,e){return Z(t)?t.some(n=>Ts(n,e)):Ve(t)?t.split(",").includes(e):Ub(t)?t.test(e):!1}function j_(t,e){Pv(t,"a",e)}function H_(t,e){Pv(t,"da",e)}function Pv(t,e,n=We){const r=t.__wdc||(t.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return t()});if(Rc(e,r,n),n){let i=n.parent;for(;i&&i.parent;)xc(i.parent.vnode)&&z_(r,e,n,i),i=i.parent}}function z_(t,e,n,r){const i=Rc(e,t,r,!0);Dv(()=>{Df(r[e],i)},n)}function Dl(t){t.shapeFlag&=-257,t.shapeFlag&=-513}function Ml(t){return t.shapeFlag&128?t.ssContent:t}function Rc(t,e,n=We,r=!1){if(n){const i=n[t]||(n[t]=[]),s=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;Ji(),Mi(n);const a=Ht(e,n,t,o);return jr(),Zi(),a});return r?i.unshift(s):i.push(s),s}}const jn=t=>(e,n=We)=>(!no||t==="sp")&&Rc(t,(...r)=>e(...r),n),W_=jn("bm"),Oc=jn("m"),q_=jn("bu"),th=jn("u"),Nc=jn("bum"),Dv=jn("um"),G_=jn("sp"),K_=jn("rtg"),Y_=jn("rtc");function Q_(t,e=We){Rc("ec",t,e)}function X_(t,e){const n=lt;if(n===null)return t;const r=Lc(n)||n.proxy,i=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[o,a,c,l=Re]=e[s];o&&(oe(o)&&(o={mounted:o,updated:o}),o.deep&&Dr(a),i.push({dir:o,instance:r,value:a,oldValue:void 0,arg:c,modifiers:l}))}return t}function Cr(t,e,n,r){const i=t.dirs,s=e&&e.dirs;for(let o=0;o<i.length;o++){const a=i[o];s&&(a.oldValue=s[o].value);let c=a.dir[r];c&&(Ji(),Ht(c,n,8,[t.el,a,t,e]),Zi())}}const nh="components";function Zs(t,e){return Lv(nh,t,!0,e)||t}const Mv=Symbol();function pL(t){return Ve(t)?Lv(nh,t,!1)||t:t||Mv}function Lv(t,e,n=!0,r=!1){const i=lt||We;if(i){const s=i.type;if(t===nh){const a=Cu(s,!1);if(a&&(a===e||a===_n(e)||a===Ic(_n(e))))return s}const o=rm(i[t]||s[t],e)||rm(i.appContext[t],e);return!o&&r?s:o}}function rm(t,e){return t&&(t[e]||t[_n(e)]||t[Ic(_n(e))])}function Uv(t,e,n,r){let i;const s=n&&n[r];if(Z(t)||Ve(t)){i=new Array(t.length);for(let o=0,a=t.length;o<a;o++)i[o]=e(t[o],o,void 0,s&&s[o])}else if(typeof t=="number"){i=new Array(t);for(let o=0;o<t;o++)i[o]=e(o+1,o,void 0,s&&s[o])}else if(Me(t))if(t[Symbol.iterator])i=Array.from(t,(o,a)=>e(o,a,void 0,s&&s[a]));else{const o=Object.keys(t);i=new Array(o.length);for(let a=0,c=o.length;a<c;a++){const l=o[a];i[a]=e(t[l],l,a,s&&s[a])}}else i=[];return n&&(n[r]=i),i}function gL(t,e,n={},r,i){if(lt.isCE||lt.parent&&Ii(lt.parent)&&lt.parent.isCE)return e!=="default"&&(n.name=e),Ie("slot",n,r&&r());let s=t[e];s&&s._c&&(s._d=!1),Ye();const o=s&&Fv(s(n)),a=ar(ct,{key:n.key||o&&o.key||`_${e}`},o||(r?r():[]),o&&t._===1?64:-2);return!i&&a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),s&&s._c&&(s._d=!0),a}function Fv(t){return t.some(e=>to(e)?!(e.type===Wt||e.type===ct&&!Fv(e.children)):!0)?t:null}const bu=t=>t?Yv(t)?Lc(t)||t.proxy:bu(t.parent):null,Ps=it(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>bu(t.parent),$root:t=>bu(t.root),$emit:t=>t.emit,$options:t=>rh(t),$forceUpdate:t=>t.f||(t.f=()=>Qf(t.update)),$nextTick:t=>t.n||(t.n=Yf.bind(t.proxy)),$watch:t=>$_.bind(t)}),Ll=(t,e)=>t!==Re&&!t.__isScriptSetup&&ge(t,e),J_={get({_:t},e){const{ctx:n,setupState:r,data:i,props:s,accessCache:o,type:a,appContext:c}=t;let l;if(e[0]!=="$"){const d=o[e];if(d!==void 0)switch(d){case 1:return r[e];case 2:return i[e];case 4:return n[e];case 3:return s[e]}else{if(Ll(r,e))return o[e]=1,r[e];if(i!==Re&&ge(i,e))return o[e]=2,i[e];if((l=t.propsOptions[0])&&ge(l,e))return o[e]=3,s[e];if(n!==Re&&ge(n,e))return o[e]=4,n[e];_u&&(o[e]=0)}}const u=Ps[e];let f,h;if(u)return e==="$attrs"&&Ot(t,"get",e),u(t);if((f=a.__cssModules)&&(f=f[e]))return f;if(n!==Re&&ge(n,e))return o[e]=4,n[e];if(h=c.config.globalProperties,ge(h,e))return h[e]},set({_:t},e,n){const{data:r,setupState:i,ctx:s}=t;return Ll(i,e)?(i[e]=n,!0):r!==Re&&ge(r,e)?(r[e]=n,!0):ge(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(s[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:i,propsOptions:s}},o){let a;return!!n[o]||t!==Re&&ge(t,o)||Ll(e,o)||(a=s[0])&&ge(a,o)||ge(r,o)||ge(Ps,o)||ge(i.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:ge(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};let _u=!0;function Z_(t){const e=rh(t),n=t.proxy,r=t.ctx;_u=!1,e.beforeCreate&&im(e.beforeCreate,t,"bc");const{data:i,computed:s,methods:o,watch:a,provide:c,inject:l,created:u,beforeMount:f,mounted:h,beforeUpdate:d,updated:g,activated:y,deactivated:_,beforeDestroy:w,beforeUnmount:v,destroyed:b,unmounted:T,render:R,renderTracked:U,renderTriggered:P,errorCaptured:A,serverPrefetch:H,expose:K,inheritAttrs:le,components:j,directives:_e,filters:xe}=e;if(l&&eE(l,r,null,t.appContext.config.unwrapInjectedRef),o)for(const ye in o){const Ce=o[ye];oe(Ce)&&(r[ye]=Ce.bind(n))}if(i){const ye=i.call(n,n);Me(ye)&&(t.data=es(ye))}if(_u=!0,s)for(const ye in s){const Ce=s[ye],Qt=oe(Ce)?Ce.bind(n,n):oe(Ce.get)?Ce.get.bind(n,n):rn,kr=!oe(Ce)&&oe(Ce.set)?Ce.set.bind(n):rn,Xt=ke({get:Qt,set:kr});Object.defineProperty(r,ye,{enumerable:!0,configurable:!0,get:()=>Xt.value,set:At=>Xt.value=At})}if(a)for(const ye in a)$v(a[ye],r,n,ye);if(c){const ye=oe(c)?c.call(n):c;Reflect.ownKeys(ye).forEach(Ce=>{Ca(Ce,ye[Ce])})}u&&im(u,t,"c");function ve(ye,Ce){Z(Ce)?Ce.forEach(Qt=>ye(Qt.bind(n))):Ce&&ye(Ce.bind(n))}if(ve(W_,f),ve(Oc,h),ve(q_,d),ve(th,g),ve(j_,y),ve(H_,_),ve(Q_,A),ve(Y_,U),ve(K_,P),ve(Nc,v),ve(Dv,T),ve(G_,H),Z(K))if(K.length){const ye=t.exposed||(t.exposed={});K.forEach(Ce=>{Object.defineProperty(ye,Ce,{get:()=>n[Ce],set:Qt=>n[Ce]=Qt})})}else t.exposed||(t.exposed={});R&&t.render===rn&&(t.render=R),le!=null&&(t.inheritAttrs=le),j&&(t.components=j),_e&&(t.directives=_e)}function eE(t,e,n=rn,r=!1){Z(t)&&(t=Eu(t));for(const i in t){const s=t[i];let o;Me(s)?"default"in s?o=zt(s.from||i,s.default,!0):o=zt(s.from||i):o=zt(s),qe(o)&&r?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[i]=o}}function im(t,e,n){Ht(Z(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function $v(t,e,n,r){const i=r.includes(".")?xv(n,r):()=>n[r];if(Ve(t)){const s=e[t];oe(s)&&sn(i,s)}else if(oe(t))sn(i,t.bind(n));else if(Me(t))if(Z(t))t.forEach(s=>$v(s,e,n,r));else{const s=oe(t.handler)?t.handler.bind(n):e[t.handler];oe(s)&&sn(i,s,t)}}function rh(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:i,optionsCache:s,config:{optionMergeStrategies:o}}=t.appContext,a=s.get(e);let c;return a?c=a:!i.length&&!n&&!r?c=e:(c={},i.length&&i.forEach(l=>Wa(c,l,o,!0)),Wa(c,e,o)),Me(e)&&s.set(e,c),c}function Wa(t,e,n,r=!1){const{mixins:i,extends:s}=e;s&&Wa(t,s,n,!0),i&&i.forEach(o=>Wa(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const a=tE[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const tE={data:sm,props:xr,emits:xr,methods:xr,computed:xr,beforeCreate:kt,created:kt,beforeMount:kt,mounted:kt,beforeUpdate:kt,updated:kt,beforeDestroy:kt,beforeUnmount:kt,destroyed:kt,unmounted:kt,activated:kt,deactivated:kt,errorCaptured:kt,serverPrefetch:kt,components:xr,directives:xr,watch:rE,provide:sm,inject:nE};function sm(t,e){return e?t?function(){return it(oe(t)?t.call(this,this):t,oe(e)?e.call(this,this):e)}:e:t}function nE(t,e){return xr(Eu(t),Eu(e))}function Eu(t){if(Z(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function kt(t,e){return t?[...new Set([].concat(t,e))]:e}function xr(t,e){return t?it(it(Object.create(null),t),e):e}function rE(t,e){if(!t)return e;if(!e)return t;const n=it(Object.create(null),t);for(const r in e)n[r]=kt(t[r],e[r]);return n}function iE(t,e,n,r=!1){const i={},s={};Ba(s,Dc,1),t.propsDefaults=Object.create(null),Vv(t,e,i,s);for(const o in t.propsOptions[0])o in i||(i[o]=void 0);n?t.props=r?i:v_(i):t.type.props?t.props=i:t.props=s,t.attrs=s}function sE(t,e,n,r){const{props:i,attrs:s,vnode:{patchFlag:o}}=t,a=de(i),[c]=t.propsOptions;let l=!1;if((r||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let f=0;f<u.length;f++){let h=u[f];if(Sc(t.emitsOptions,h))continue;const d=e[h];if(c)if(ge(s,h))d!==s[h]&&(s[h]=d,l=!0);else{const g=_n(h);i[g]=Tu(c,a,g,d,t,!1)}else d!==s[h]&&(s[h]=d,l=!0)}}}else{Vv(t,e,i,s)&&(l=!0);let u;for(const f in a)(!e||!ge(e,f)&&((u=ni(f))===f||!ge(e,u)))&&(c?n&&(n[f]!==void 0||n[u]!==void 0)&&(i[f]=Tu(c,a,f,void 0,t,!0)):delete i[f]);if(s!==a)for(const f in s)(!e||!ge(e,f))&&(delete s[f],l=!0)}l&&Nn(t,"set","$attrs")}function Vv(t,e,n,r){const[i,s]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(ka(c))continue;const l=e[c];let u;i&&ge(i,u=_n(c))?!s||!s.includes(u)?n[u]=l:(a||(a={}))[u]=l:Sc(t.emitsOptions,c)||(!(c in r)||l!==r[c])&&(r[c]=l,o=!0)}if(s){const c=de(n),l=a||Re;for(let u=0;u<s.length;u++){const f=s[u];n[f]=Tu(i,c,f,l[f],t,!ge(l,f))}}return o}function Tu(t,e,n,r,i,s){const o=t[n];if(o!=null){const a=ge(o,"default");if(a&&r===void 0){const c=o.default;if(o.type!==Function&&oe(c)){const{propsDefaults:l}=i;n in l?r=l[n]:(Mi(i),r=l[n]=c.call(null,e),jr())}else r=c}o[0]&&(s&&!a?r=!1:o[1]&&(r===""||r===ni(n))&&(r=!0))}return r}function Bv(t,e,n=!1){const r=e.propsCache,i=r.get(t);if(i)return i;const s=t.props,o={},a=[];let c=!1;if(!oe(t)){const u=f=>{c=!0;const[h,d]=Bv(f,e,!0);it(o,h),d&&a.push(...d)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!s&&!c)return Me(t)&&r.set(t,bi),bi;if(Z(s))for(let u=0;u<s.length;u++){const f=_n(s[u]);om(f)&&(o[f]=Re)}else if(s)for(const u in s){const f=_n(u);if(om(f)){const h=s[u],d=o[f]=Z(h)||oe(h)?{type:h}:Object.assign({},h);if(d){const g=lm(Boolean,d.type),y=lm(String,d.type);d[0]=g>-1,d[1]=y<0||g<y,(g>-1||ge(d,"default"))&&a.push(f)}}}const l=[o,a];return Me(t)&&r.set(t,l),l}function om(t){return t[0]!=="$"}function am(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function cm(t,e){return am(t)===am(e)}function lm(t,e){return Z(e)?e.findIndex(n=>cm(n,t)):oe(e)&&cm(e,t)?0:-1}const jv=t=>t[0]==="_"||t==="$stable",ih=t=>Z(t)?t.map(ln):[ln(t)],oE=(t,e,n)=>{if(e._n)return e;const r=Dt((...i)=>ih(e(...i)),n);return r._c=!1,r},Hv=(t,e,n)=>{const r=t._ctx;for(const i in t){if(jv(i))continue;const s=t[i];if(oe(s))e[i]=oE(i,s,r);else if(s!=null){const o=ih(s);e[i]=()=>o}}},zv=(t,e)=>{const n=ih(e);t.slots.default=()=>n},aE=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=de(e),Ba(e,"_",n)):Hv(e,t.slots={})}else t.slots={},e&&zv(t,e);Ba(t.slots,Dc,1)},cE=(t,e,n)=>{const{vnode:r,slots:i}=t;let s=!0,o=Re;if(r.shapeFlag&32){const a=e._;a?n&&a===1?s=!1:(it(i,e),!n&&a===1&&delete i._):(s=!e.$stable,Hv(e,i)),o=e}else e&&(zv(t,e),o={default:1});if(s)for(const a in i)!jv(a)&&!(a in o)&&delete i[a]};function Wv(){return{app:null,config:{isNativeTag:Db,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let lE=0;function uE(t,e){return function(r,i=null){oe(r)||(r=Object.assign({},r)),i!=null&&!Me(i)&&(i=null);const s=Wv(),o=new Set;let a=!1;const c=s.app={_uid:lE++,_component:r,_props:i,_container:null,_context:s,_instance:null,version:NE,get config(){return s.config},set config(l){},use(l,...u){return o.has(l)||(l&&oe(l.install)?(o.add(l),l.install(c,...u)):oe(l)&&(o.add(l),l(c,...u))),c},mixin(l){return s.mixins.includes(l)||s.mixins.push(l),c},component(l,u){return u?(s.components[l]=u,c):s.components[l]},directive(l,u){return u?(s.directives[l]=u,c):s.directives[l]},mount(l,u,f){if(!a){const h=Ie(r,i);return h.appContext=s,u&&e?e(h,l):t(h,l,f),a=!0,c._container=l,l.__vue_app__=c,Lc(h.component)||h.component.proxy}},unmount(){a&&(t(null,c._container),delete c._container.__vue_app__)},provide(l,u){return s.provides[l]=u,c}};return c}}function Iu(t,e,n,r,i=!1){if(Z(t)){t.forEach((h,d)=>Iu(h,e&&(Z(e)?e[d]:e),n,r,i));return}if(Ii(r)&&!i)return;const s=r.shapeFlag&4?Lc(r.component)||r.component.proxy:r.el,o=i?null:s,{i:a,r:c}=t,l=e&&e.r,u=a.refs===Re?a.refs={}:a.refs,f=a.setupState;if(l!=null&&l!==c&&(Ve(l)?(u[l]=null,ge(f,l)&&(f[l]=null)):qe(l)&&(l.value=null)),oe(c))or(c,a,12,[o,u]);else{const h=Ve(c),d=qe(c);if(h||d){const g=()=>{if(t.f){const y=h?ge(f,c)?f[c]:u[c]:c.value;i?Z(y)&&Df(y,s):Z(y)?y.includes(s)||y.push(s):h?(u[c]=[s],ge(f,c)&&(f[c]=u[c])):(c.value=[s],t.k&&(u[t.k]=c.value))}else h?(u[c]=o,ge(f,c)&&(f[c]=o)):d&&(c.value=o,t.k&&(u[t.k]=o))};o?(g.id=-1,ot(g,n)):g()}}}const ot=U_;function fE(t){return hE(t)}function hE(t,e){const n=jb();n.__VUE__=!0;const{insert:r,remove:i,patchProp:s,createElement:o,createText:a,createComment:c,setText:l,setElementText:u,parentNode:f,nextSibling:h,setScopeId:d=rn,insertStaticContent:g}=t,y=(m,p,E,I=null,S=null,D=null,F=!1,N=null,M=!!p.dynamicChildren)=>{if(m===p)return;m&&!er(m,p)&&(I=L(m),At(m,S,D,!0),m=null),p.patchFlag===-2&&(M=!1,p.dynamicChildren=null);const{type:x,ref:X,shapeFlag:z}=p;switch(x){case Pc:_(m,p,E,I);break;case Wt:w(m,p,E,I);break;case Sa:m==null&&v(p,E,I,F);break;case ct:j(m,p,E,I,S,D,F,N,M);break;default:z&1?R(m,p,E,I,S,D,F,N,M):z&6?_e(m,p,E,I,S,D,F,N,M):(z&64||z&128)&&x.process(m,p,E,I,S,D,F,N,M,pe)}X!=null&&S&&Iu(X,m&&m.ref,D,p||m,!p)},_=(m,p,E,I)=>{if(m==null)r(p.el=a(p.children),E,I);else{const S=p.el=m.el;p.children!==m.children&&l(S,p.children)}},w=(m,p,E,I)=>{m==null?r(p.el=c(p.children||""),E,I):p.el=m.el},v=(m,p,E,I)=>{[m.el,m.anchor]=g(m.children,p,E,I,m.el,m.anchor)},b=({el:m,anchor:p},E,I)=>{let S;for(;m&&m!==p;)S=h(m),r(m,E,I),m=S;r(p,E,I)},T=({el:m,anchor:p})=>{let E;for(;m&&m!==p;)E=h(m),i(m),m=E;i(p)},R=(m,p,E,I,S,D,F,N,M)=>{F=F||p.type==="svg",m==null?U(p,E,I,S,D,F,N,M):H(m,p,S,D,F,N,M)},U=(m,p,E,I,S,D,F,N)=>{let M,x;const{type:X,props:z,shapeFlag:J,transition:re,dirs:ue}=m;if(M=m.el=o(m.type,D,z&&z.is,z),J&8?u(M,m.children):J&16&&A(m.children,M,null,I,S,D&&X!=="foreignObject",F,N),ue&&Cr(m,null,I,"created"),P(M,m,m.scopeId,F,I),z){for(const Se in z)Se!=="value"&&!ka(Se)&&s(M,Se,null,z[Se],D,m.children,I,S,$);"value"in z&&s(M,"value",null,z.value),(x=z.onVnodeBeforeMount)&&Bt(x,I,m)}ue&&Cr(m,null,I,"beforeMount");const Ae=(!S||S&&!S.pendingBranch)&&re&&!re.persisted;Ae&&re.beforeEnter(M),r(M,p,E),((x=z&&z.onVnodeMounted)||Ae||ue)&&ot(()=>{x&&Bt(x,I,m),Ae&&re.enter(M),ue&&Cr(m,null,I,"mounted")},S)},P=(m,p,E,I,S)=>{if(E&&d(m,E),I)for(let D=0;D<I.length;D++)d(m,I[D]);if(S){let D=S.subTree;if(p===D){const F=S.vnode;P(m,F,F.scopeId,F.slotScopeIds,S.parent)}}},A=(m,p,E,I,S,D,F,N,M=0)=>{for(let x=M;x<m.length;x++){const X=m[x]=N?Jn(m[x]):ln(m[x]);y(null,X,p,E,I,S,D,F,N)}},H=(m,p,E,I,S,D,F)=>{const N=p.el=m.el;let{patchFlag:M,dynamicChildren:x,dirs:X}=p;M|=m.patchFlag&16;const z=m.props||Re,J=p.props||Re;let re;E&&Sr(E,!1),(re=J.onVnodeBeforeUpdate)&&Bt(re,E,p,m),X&&Cr(p,m,E,"beforeUpdate"),E&&Sr(E,!0);const ue=S&&p.type!=="foreignObject";if(x?K(m.dynamicChildren,x,N,E,I,ue,D):F||Ce(m,p,N,null,E,I,ue,D,!1),M>0){if(M&16)le(N,p,z,J,E,I,S);else if(M&2&&z.class!==J.class&&s(N,"class",null,J.class,S),M&4&&s(N,"style",z.style,J.style,S),M&8){const Ae=p.dynamicProps;for(let Se=0;Se<Ae.length;Se++){const Ge=Ae[Se],Jt=z[Ge],li=J[Ge];(li!==Jt||Ge==="value")&&s(N,Ge,Jt,li,S,m.children,E,I,$)}}M&1&&m.children!==p.children&&u(N,p.children)}else!F&&x==null&&le(N,p,z,J,E,I,S);((re=J.onVnodeUpdated)||X)&&ot(()=>{re&&Bt(re,E,p,m),X&&Cr(p,m,E,"updated")},I)},K=(m,p,E,I,S,D,F)=>{for(let N=0;N<p.length;N++){const M=m[N],x=p[N],X=M.el&&(M.type===ct||!er(M,x)||M.shapeFlag&70)?f(M.el):E;y(M,x,X,null,I,S,D,F,!0)}},le=(m,p,E,I,S,D,F)=>{if(E!==I){if(E!==Re)for(const N in E)!ka(N)&&!(N in I)&&s(m,N,E[N],null,F,p.children,S,D,$);for(const N in I){if(ka(N))continue;const M=I[N],x=E[N];M!==x&&N!=="value"&&s(m,N,x,M,F,p.children,S,D,$)}"value"in I&&s(m,"value",E.value,I.value)}},j=(m,p,E,I,S,D,F,N,M)=>{const x=p.el=m?m.el:a(""),X=p.anchor=m?m.anchor:a("");let{patchFlag:z,dynamicChildren:J,slotScopeIds:re}=p;re&&(N=N?N.concat(re):re),m==null?(r(x,E,I),r(X,E,I),A(p.children,E,X,S,D,F,N,M)):z>0&&z&64&&J&&m.dynamicChildren?(K(m.dynamicChildren,J,E,S,D,F,N),(p.key!=null||S&&p===S.subTree)&&sh(m,p,!0)):Ce(m,p,E,X,S,D,F,N,M)},_e=(m,p,E,I,S,D,F,N,M)=>{p.slotScopeIds=N,m==null?p.shapeFlag&512?S.ctx.activate(p,E,I,F,M):xe(p,E,I,S,D,F,M):he(m,p,M)},xe=(m,p,E,I,S,D,F)=>{const N=m.component=IE(m,I,S);if(xc(m)&&(N.ctx.renderer=pe),kE(N),N.asyncDep){if(S&&S.registerDep(N,ve),!m.el){const M=N.subTree=Ie(Wt);w(null,M,p,E)}return}ve(N,m,p,E,S,D,F)},he=(m,p,E)=>{const I=p.component=m.component;if(M_(m,p,E))if(I.asyncDep&&!I.asyncResolved){ye(I,p,E);return}else I.next=p,x_(I.update),I.update();else p.el=m.el,I.vnode=p},ve=(m,p,E,I,S,D,F)=>{const N=()=>{if(m.isMounted){let{next:X,bu:z,u:J,parent:re,vnode:ue}=m,Ae=X,Se;Sr(m,!1),X?(X.el=ue.el,ye(m,X,F)):X=ue,z&&Ei(z),(Se=X.props&&X.props.onVnodeBeforeUpdate)&&Bt(Se,re,X,ue),Sr(m,!0);const Ge=Nl(m),Jt=m.subTree;m.subTree=Ge,y(Jt,Ge,f(Jt.el),L(Jt),m,S,D),X.el=Ge.el,Ae===null&&L_(m,Ge.el),J&&ot(J,S),(Se=X.props&&X.props.onVnodeUpdated)&&ot(()=>Bt(Se,re,X,ue),S)}else{let X;const{el:z,props:J}=p,{bm:re,m:ue,parent:Ae}=m,Se=Ii(p);if(Sr(m,!1),re&&Ei(re),!Se&&(X=J&&J.onVnodeBeforeMount)&&Bt(X,Ae,p),Sr(m,!0),z&&ce){const Ge=()=>{m.subTree=Nl(m),ce(z,m.subTree,m,S,null)};Se?p.type.__asyncLoader().then(()=>!m.isUnmounted&&Ge()):Ge()}else{const Ge=m.subTree=Nl(m);y(null,Ge,E,I,m,S,D),p.el=Ge.el}if(ue&&ot(ue,S),!Se&&(X=J&&J.onVnodeMounted)){const Ge=p;ot(()=>Bt(X,Ae,Ge),S)}(p.shapeFlag&256||Ae&&Ii(Ae.vnode)&&Ae.vnode.shapeFlag&256)&&m.a&&ot(m.a,S),m.isMounted=!0,p=E=I=null}},M=m.effect=new $f(N,()=>Qf(x),m.scope),x=m.update=()=>M.run();x.id=m.uid,Sr(m,!0),x()},ye=(m,p,E)=>{p.component=m;const I=m.vnode.props;m.vnode=p,m.next=null,sE(m,p.props,I,E),cE(m,p.children,E),Ji(),em(),Zi()},Ce=(m,p,E,I,S,D,F,N,M=!1)=>{const x=m&&m.children,X=m?m.shapeFlag:0,z=p.children,{patchFlag:J,shapeFlag:re}=p;if(J>0){if(J&128){kr(x,z,E,I,S,D,F,N,M);return}else if(J&256){Qt(x,z,E,I,S,D,F,N,M);return}}re&8?(X&16&&$(x,S,D),z!==x&&u(E,z)):X&16?re&16?kr(x,z,E,I,S,D,F,N,M):$(x,S,D,!0):(X&8&&u(E,""),re&16&&A(z,E,I,S,D,F,N,M))},Qt=(m,p,E,I,S,D,F,N,M)=>{m=m||bi,p=p||bi;const x=m.length,X=p.length,z=Math.min(x,X);let J;for(J=0;J<z;J++){const re=p[J]=M?Jn(p[J]):ln(p[J]);y(m[J],re,E,null,S,D,F,N,M)}x>X?$(m,S,D,!0,!1,z):A(p,E,I,S,D,F,N,M,z)},kr=(m,p,E,I,S,D,F,N,M)=>{let x=0;const X=p.length;let z=m.length-1,J=X-1;for(;x<=z&&x<=J;){const re=m[x],ue=p[x]=M?Jn(p[x]):ln(p[x]);if(er(re,ue))y(re,ue,E,null,S,D,F,N,M);else break;x++}for(;x<=z&&x<=J;){const re=m[z],ue=p[J]=M?Jn(p[J]):ln(p[J]);if(er(re,ue))y(re,ue,E,null,S,D,F,N,M);else break;z--,J--}if(x>z){if(x<=J){const re=J+1,ue=re<X?p[re].el:I;for(;x<=J;)y(null,p[x]=M?Jn(p[x]):ln(p[x]),E,ue,S,D,F,N,M),x++}}else if(x>J)for(;x<=z;)At(m[x],S,D,!0),x++;else{const re=x,ue=x,Ae=new Map;for(x=ue;x<=J;x++){const Nt=p[x]=M?Jn(p[x]):ln(p[x]);Nt.key!=null&&Ae.set(Nt.key,x)}let Se,Ge=0;const Jt=J-ue+1;let li=!1,Hd=0;const ps=new Array(Jt);for(x=0;x<Jt;x++)ps[x]=0;for(x=re;x<=z;x++){const Nt=m[x];if(Ge>=Jt){At(Nt,S,D,!0);continue}let cn;if(Nt.key!=null)cn=Ae.get(Nt.key);else for(Se=ue;Se<=J;Se++)if(ps[Se-ue]===0&&er(Nt,p[Se])){cn=Se;break}cn===void 0?At(Nt,S,D,!0):(ps[cn-ue]=x+1,cn>=Hd?Hd=cn:li=!0,y(Nt,p[cn],E,null,S,D,F,N,M),Ge++)}const zd=li?dE(ps):bi;for(Se=zd.length-1,x=Jt-1;x>=0;x--){const Nt=ue+x,cn=p[Nt],Wd=Nt+1<X?p[Nt+1].el:I;ps[x]===0?y(null,cn,E,Wd,S,D,F,N,M):li&&(Se<0||x!==zd[Se]?Xt(cn,E,Wd,2):Se--)}}},Xt=(m,p,E,I,S=null)=>{const{el:D,type:F,transition:N,children:M,shapeFlag:x}=m;if(x&6){Xt(m.component.subTree,p,E,I);return}if(x&128){m.suspense.move(p,E,I);return}if(x&64){F.move(m,p,E,pe);return}if(F===ct){r(D,p,E);for(let z=0;z<M.length;z++)Xt(M[z],p,E,I);r(m.anchor,p,E);return}if(F===Sa){b(m,p,E);return}if(I!==2&&x&1&&N)if(I===0)N.beforeEnter(D),r(D,p,E),ot(()=>N.enter(D),S);else{const{leave:z,delayLeave:J,afterLeave:re}=N,ue=()=>r(D,p,E),Ae=()=>{z(D,()=>{ue(),re&&re()})};J?J(D,ue,Ae):Ae()}else r(D,p,E)},At=(m,p,E,I=!1,S=!1)=>{const{type:D,props:F,ref:N,children:M,dynamicChildren:x,shapeFlag:X,patchFlag:z,dirs:J}=m;if(N!=null&&Iu(N,null,E,m,!0),X&256){p.ctx.deactivate(m);return}const re=X&1&&J,ue=!Ii(m);let Ae;if(ue&&(Ae=F&&F.onVnodeBeforeUnmount)&&Bt(Ae,p,m),X&6)C(m.component,E,I);else{if(X&128){m.suspense.unmount(E,I);return}re&&Cr(m,null,p,"beforeUnmount"),X&64?m.type.remove(m,p,E,S,pe,I):x&&(D!==ct||z>0&&z&64)?$(x,p,E,!1,!0):(D===ct&&z&384||!S&&X&16)&&$(M,p,E),I&&ci(m)}(ue&&(Ae=F&&F.onVnodeUnmounted)||re)&&ot(()=>{Ae&&Bt(Ae,p,m),re&&Cr(m,null,p,"unmounted")},E)},ci=m=>{const{type:p,el:E,anchor:I,transition:S}=m;if(p===ct){Xo(E,I);return}if(p===Sa){T(m);return}const D=()=>{i(E),S&&!S.persisted&&S.afterLeave&&S.afterLeave()};if(m.shapeFlag&1&&S&&!S.persisted){const{leave:F,delayLeave:N}=S,M=()=>F(E,D);N?N(m.el,D,M):M()}else D()},Xo=(m,p)=>{let E;for(;m!==p;)E=h(m),i(m),m=E;i(p)},C=(m,p,E)=>{const{bum:I,scope:S,update:D,subTree:F,um:N}=m;I&&Ei(I),S.stop(),D&&(D.active=!1,At(F,m,p,E)),N&&ot(N,p),ot(()=>{m.isUnmounted=!0},p),p&&p.pendingBranch&&!p.isUnmounted&&m.asyncDep&&!m.asyncResolved&&m.suspenseId===p.pendingId&&(p.deps--,p.deps===0&&p.resolve())},$=(m,p,E,I=!1,S=!1,D=0)=>{for(let F=D;F<m.length;F++)At(m[F],p,E,I,S)},L=m=>m.shapeFlag&6?L(m.component.subTree):m.shapeFlag&128?m.suspense.next():h(m.anchor||m.el),Y=(m,p,E)=>{m==null?p._vnode&&At(p._vnode,null,null,!0):y(p._vnode||null,m,p,null,null,null,E),em(),kv(),p._vnode=m},pe={p:y,um:At,m:Xt,r:ci,mt:xe,mc:A,pc:Ce,pbc:K,n:L,o:t};let Fe,ce;return e&&([Fe,ce]=e(pe)),{render:Y,hydrate:Fe,createApp:uE(Y,Fe)}}function Sr({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function sh(t,e,n=!1){const r=t.children,i=e.children;if(Z(r)&&Z(i))for(let s=0;s<r.length;s++){const o=r[s];let a=i[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=i[s]=Jn(i[s]),a.el=o.el),n||sh(o,a)),a.type===Pc&&(a.el=o.el)}}function dE(t){const e=t.slice(),n=[0];let r,i,s,o,a;const c=t.length;for(r=0;r<c;r++){const l=t[r];if(l!==0){if(i=n[n.length-1],t[i]<l){e[r]=i,n.push(r);continue}for(s=0,o=n.length-1;s<o;)a=s+o>>1,t[n[a]]<l?s=a+1:o=a;l<t[n[s]]&&(s>0&&(e[r]=n[s-1]),n[s]=r)}}for(s=n.length,o=n[s-1];s-- >0;)n[s]=o,o=e[o];return n}const mE=t=>t.__isTeleport,Ds=t=>t&&(t.disabled||t.disabled===""),um=t=>typeof SVGElement<"u"&&t instanceof SVGElement,ku=(t,e)=>{const n=t&&t.to;return Ve(n)?e?e(n):null:n},pE={__isTeleport:!0,process(t,e,n,r,i,s,o,a,c,l){const{mc:u,pc:f,pbc:h,o:{insert:d,querySelector:g,createText:y,createComment:_}}=l,w=Ds(e.props);let{shapeFlag:v,children:b,dynamicChildren:T}=e;if(t==null){const R=e.el=y(""),U=e.anchor=y("");d(R,n,r),d(U,n,r);const P=e.target=ku(e.props,g),A=e.targetAnchor=y("");P&&(d(A,P),o=o||um(P));const H=(K,le)=>{v&16&&u(b,K,le,i,s,o,a,c)};w?H(n,U):P&&H(P,A)}else{e.el=t.el;const R=e.anchor=t.anchor,U=e.target=t.target,P=e.targetAnchor=t.targetAnchor,A=Ds(t.props),H=A?n:U,K=A?R:P;if(o=o||um(U),T?(h(t.dynamicChildren,T,H,i,s,o,a),sh(t,e,!0)):c||f(t,e,H,K,i,s,o,a,!1),w)A||ia(e,n,R,l,1);else if((e.props&&e.props.to)!==(t.props&&t.props.to)){const le=e.target=ku(e.props,g);le&&ia(e,le,null,l,0)}else A&&ia(e,U,P,l,1)}qv(e)},remove(t,e,n,r,{um:i,o:{remove:s}},o){const{shapeFlag:a,children:c,anchor:l,targetAnchor:u,target:f,props:h}=t;if(f&&s(u),(o||!Ds(h))&&(s(l),a&16))for(let d=0;d<c.length;d++){const g=c[d];i(g,e,n,!0,!!g.dynamicChildren)}},move:ia,hydrate:gE};function ia(t,e,n,{o:{insert:r},m:i},s=2){s===0&&r(t.targetAnchor,e,n);const{el:o,anchor:a,shapeFlag:c,children:l,props:u}=t,f=s===2;if(f&&r(o,e,n),(!f||Ds(u))&&c&16)for(let h=0;h<l.length;h++)i(l[h],e,n,2);f&&r(a,e,n)}function gE(t,e,n,r,i,s,{o:{nextSibling:o,parentNode:a,querySelector:c}},l){const u=e.target=ku(e.props,c);if(u){const f=u._lpa||u.firstChild;if(e.shapeFlag&16)if(Ds(e.props))e.anchor=l(o(t),e,a(t),n,r,i,s),e.targetAnchor=f;else{e.anchor=o(t);let h=f;for(;h;)if(h=o(h),h&&h.nodeType===8&&h.data==="teleport anchor"){e.targetAnchor=h,u._lpa=e.targetAnchor&&o(e.targetAnchor);break}l(f,e,u,n,r,i,s)}qv(e)}return e.anchor&&o(e.anchor)}const vL=pE;function qv(t){const e=t.ctx;if(e&&e.ut){let n=t.children[0].el;for(;n!==t.targetAnchor;)n.nodeType===1&&n.setAttribute("data-v-owner",e.uid),n=n.nextSibling;e.ut()}}const ct=Symbol(void 0),Pc=Symbol(void 0),Wt=Symbol(void 0),Sa=Symbol(void 0),Ms=[];let tn=null;function Ye(t=!1){Ms.push(tn=t?null:[])}function vE(){Ms.pop(),tn=Ms[Ms.length-1]||null}let eo=1;function fm(t){eo+=t}function Gv(t){return t.dynamicChildren=eo>0?tn||bi:null,vE(),eo>0&&tn&&tn.push(t),t}function jt(t,e,n,r,i,s){return Gv(ae(t,e,n,r,i,s,!0))}function ar(t,e,n,r,i){return Gv(Ie(t,e,n,r,i,!0))}function to(t){return t?t.__v_isVNode===!0:!1}function er(t,e){return t.type===e.type&&t.key===e.key}const Dc="__vInternal",Kv=({key:t})=>t??null,Aa=({ref:t,ref_key:e,ref_for:n})=>t!=null?Ve(t)||qe(t)||oe(t)?{i:lt,r:t,k:e,f:!!n}:t:null;function ae(t,e=null,n=null,r=0,i=null,s=t===ct?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Kv(e),ref:e&&Aa(e),scopeId:Ac,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:r,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:lt};return a?(oh(c,n),s&128&&t.normalize(c)):n&&(c.shapeFlag|=Ve(n)?8:16),eo>0&&!o&&tn&&(c.patchFlag>0||s&6)&&c.patchFlag!==32&&tn.push(c),c}const Ie=yE;function yE(t,e=null,n=null,r=0,i=null,s=!1){if((!t||t===Mv)&&(t=Wt),to(t)){const a=Pn(t,e,!0);return n&&oh(a,n),eo>0&&!s&&tn&&(a.shapeFlag&6?tn[tn.indexOf(t)]=a:tn.push(a)),a.patchFlag|=-2,a}if(xE(t)&&(t=t.__vccOpts),e){e=wE(e);let{class:a,style:c}=e;a&&!Ve(a)&&(e.class=Nf(a)),Me(c)&&(yv(c)&&!Z(c)&&(c=it({},c)),e.style=Of(c))}const o=Ve(t)?1:Av(t)?128:mE(t)?64:Me(t)?4:oe(t)?2:0;return ae(t,e,n,r,i,o,s,!0)}function wE(t){return t?yv(t)||Dc in t?it({},t):t:null}function Pn(t,e,n=!1){const{props:r,ref:i,patchFlag:s,children:o}=t,a=e?_E(r||{},e):r;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&Kv(a),ref:e&&e.ref?n&&i?Z(i)?i.concat(Aa(e)):[i,Aa(e)]:Aa(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==ct?s===-1?16:s|16:s,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Pn(t.ssContent),ssFallback:t.ssFallback&&Pn(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function Ct(t=" ",e=0){return Ie(Pc,null,t,e)}function bE(t,e){const n=Ie(Sa,null,t);return n.staticCount=e,n}function Is(t="",e=!1){return e?(Ye(),ar(Wt,null,t)):Ie(Wt,null,t)}function ln(t){return t==null||typeof t=="boolean"?Ie(Wt):Z(t)?Ie(ct,null,t.slice()):typeof t=="object"?Jn(t):Ie(Pc,null,String(t))}function Jn(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Pn(t)}function oh(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(Z(e))n=16;else if(typeof e=="object")if(r&65){const i=e.default;i&&(i._c&&(i._d=!1),oh(t,i()),i._c&&(i._d=!0));return}else{n=32;const i=e._;!i&&!(Dc in e)?e._ctx=lt:i===3&&lt&&(lt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else oe(e)?(e={default:e,_ctx:lt},n=32):(e=String(e),r&64?(n=16,e=[Ct(e)]):n=8);t.children=e,t.shapeFlag|=n}function _E(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const i in r)if(i==="class")e.class!==r.class&&(e.class=Nf([e.class,r.class]));else if(i==="style")e.style=Of([e.style,r.style]);else if(Ec(i)){const s=e[i],o=r[i];o&&s!==o&&!(Z(s)&&s.includes(o))&&(e[i]=s?[].concat(s,o):o)}else i!==""&&(e[i]=r[i])}return e}function Bt(t,e,n,r=null){Ht(t,e,7,[n,r])}const EE=Wv();let TE=0;function IE(t,e,n){const r=t.type,i=(e?e.appContext:t.appContext)||EE,s={uid:TE++,vnode:t,type:r,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new sv(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Bv(r,i),emitsOptions:Sv(r,i),emit:null,emitted:null,propsDefaults:Re,inheritAttrs:r.inheritAttrs,ctx:Re,data:Re,props:Re,attrs:Re,slots:Re,refs:Re,setupState:Re,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=N_.bind(null,s),t.ce&&t.ce(s),s}let We=null;const Mc=()=>We||lt,Mi=t=>{We=t,t.scope.on()},jr=()=>{We&&We.scope.off(),We=null};function Yv(t){return t.vnode.shapeFlag&4}let no=!1;function kE(t,e=!1){no=e;const{props:n,children:r}=t.vnode,i=Yv(t);iE(t,n,i,e),aE(t,r);const s=i?CE(t,e):void 0;return no=!1,s}function CE(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=Pi(new Proxy(t.ctx,J_));const{setup:r}=n;if(r){const i=t.setupContext=r.length>1?AE(t):null;Mi(t),Ji();const s=or(r,t,0,[t.props,i]);if(Zi(),jr(),nv(s)){if(s.then(jr,jr),e)return s.then(o=>{hm(t,o,e)}).catch(o=>{Cc(o,t,0)});t.asyncDep=s}else hm(t,s,e)}else Qv(t,e)}function hm(t,e,n){oe(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Me(e)&&(t.setupState=bv(e)),Qv(t,n)}let dm;function Qv(t,e,n){const r=t.type;if(!t.render){if(!e&&dm&&!r.render){const i=r.template||rh(t).template;if(i){const{isCustomElement:s,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:c}=r,l=it(it({isCustomElement:s,delimiters:a},o),c);r.render=dm(i,l)}}t.render=r.render||rn}Mi(t),Ji(),Z_(t),Zi(),jr()}function SE(t){return new Proxy(t.attrs,{get(e,n){return Ot(t,"get","$attrs"),e[n]}})}function AE(t){const e=r=>{t.exposed=r||{}};let n;return{get attrs(){return n||(n=SE(t))},slots:t.slots,emit:t.emit,expose:e}}function Lc(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(bv(Pi(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Ps)return Ps[n](t)},has(e,n){return n in e||n in Ps}}))}function Cu(t,e=!0){return oe(t)?t.displayName||t.name:t.name||e&&t.__name}function xE(t){return oe(t)&&"__vccOpts"in t}const ke=(t,e)=>C_(t,e,no);function ts(t,e,n){const r=arguments.length;return r===2?Me(e)&&!Z(e)?to(e)?Ie(t,null,[e]):Ie(t,e):Ie(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&to(n)&&(n=[n]),Ie(t,e,n))}const RE=Symbol(""),OE=()=>zt(RE),NE="3.2.47",PE="http://www.w3.org/2000/svg",Pr=typeof document<"u"?document:null,mm=Pr&&Pr.createElement("template"),DE={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const i=e?Pr.createElementNS(PE,t):Pr.createElement(t,n?{is:n}:void 0);return t==="select"&&r&&r.multiple!=null&&i.setAttribute("multiple",r.multiple),i},createText:t=>Pr.createTextNode(t),createComment:t=>Pr.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Pr.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,i,s){const o=n?n.previousSibling:e.lastChild;if(i&&(i===s||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),n),!(i===s||!(i=i.nextSibling)););else{mm.innerHTML=r?`<svg>${t}</svg>`:t;const a=mm.content;if(r){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function ME(t,e,n){const r=t._vtc;r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function LE(t,e,n){const r=t.style,i=Ve(n);if(n&&!i){if(e&&!Ve(e))for(const s in e)n[s]==null&&Su(r,s,"");for(const s in n)Su(r,s,n[s])}else{const s=r.display;i?e!==n&&(r.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(r.display=s)}}const pm=/\s*!important$/;function Su(t,e,n){if(Z(n))n.forEach(r=>Su(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=UE(t,e);pm.test(n)?t.setProperty(ni(r),n.replace(pm,""),"important"):t[r]=n}}const gm=["Webkit","Moz","ms"],Ul={};function UE(t,e){const n=Ul[e];if(n)return n;let r=_n(e);if(r!=="filter"&&r in t)return Ul[e]=r;r=Ic(r);for(let i=0;i<gm.length;i++){const s=gm[i]+r;if(s in t)return Ul[e]=s}return e}const vm="http://www.w3.org/1999/xlink";function FE(t,e,n,r,i){if(r&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(vm,e.slice(6,e.length)):t.setAttributeNS(vm,e,n);else{const s=Pb(e);n==null||s&&!Zg(n)?t.removeAttribute(e):t.setAttribute(e,s?"":n)}}function $E(t,e,n,r,i,s,o){if(e==="innerHTML"||e==="textContent"){r&&o(r,i,s),t[e]=n??"";return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const c=n??"";(t.value!==c||t.tagName==="OPTION")&&(t.value=c),n==null&&t.removeAttribute(e);return}let a=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=Zg(n):n==null&&c==="string"?(n="",a=!0):c==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(e)}function di(t,e,n,r){t.addEventListener(e,n,r)}function VE(t,e,n,r){t.removeEventListener(e,n,r)}function BE(t,e,n,r,i=null){const s=t._vei||(t._vei={}),o=s[e];if(r&&o)o.value=r;else{const[a,c]=jE(e);if(r){const l=s[e]=WE(r,i);di(t,a,l,c)}else o&&(VE(t,a,o,c),s[e]=void 0)}}const ym=/(?:Once|Passive|Capture)$/;function jE(t){let e;if(ym.test(t)){e={};let r;for(;r=t.match(ym);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):ni(t.slice(2)),e]}let Fl=0;const HE=Promise.resolve(),zE=()=>Fl||(HE.then(()=>Fl=0),Fl=Date.now());function WE(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Ht(qE(r,n.value),e,5,[r])};return n.value=t,n.attached=zE(),n}function qE(t,e){if(Z(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>i=>!i._stopped&&r&&r(i))}else return e}const wm=/^on[a-z]/,GE=(t,e,n,r,i=!1,s,o,a,c)=>{e==="class"?ME(t,r,i):e==="style"?LE(t,n,r):Ec(e)?Pf(e)||BE(t,e,n,r,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):KE(t,e,r,i))?$E(t,e,r,s,o,a,c):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),FE(t,e,r,i))};function KE(t,e,n,r){return r?!!(e==="innerHTML"||e==="textContent"||e in t&&wm.test(e)&&oe(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||wm.test(e)&&Ve(n)?!1:e in t}const Wn="transition",gs="animation",ah=(t,{slots:e})=>ts(Ov,Jv(t),e);ah.displayName="Transition";const Xv={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},YE=ah.props=it({},Ov.props,Xv),Ar=(t,e=[])=>{Z(t)?t.forEach(n=>n(...e)):t&&t(...e)},bm=t=>t?Z(t)?t.some(e=>e.length>1):t.length>1:!1;function Jv(t){const e={};for(const j in t)j in Xv||(e[j]=t[j]);if(t.css===!1)return e;const{name:n="v",type:r,duration:i,enterFromClass:s=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:c=s,appearActiveClass:l=o,appearToClass:u=a,leaveFromClass:f=`${n}-leave-from`,leaveActiveClass:h=`${n}-leave-active`,leaveToClass:d=`${n}-leave-to`}=t,g=QE(i),y=g&&g[0],_=g&&g[1],{onBeforeEnter:w,onEnter:v,onEnterCancelled:b,onLeave:T,onLeaveCancelled:R,onBeforeAppear:U=w,onAppear:P=v,onAppearCancelled:A=b}=e,H=(j,_e,xe)=>{Qn(j,_e?u:a),Qn(j,_e?l:o),xe&&xe()},K=(j,_e)=>{j._isLeaving=!1,Qn(j,f),Qn(j,d),Qn(j,h),_e&&_e()},le=j=>(_e,xe)=>{const he=j?P:v,ve=()=>H(_e,j,xe);Ar(he,[_e,ve]),_m(()=>{Qn(_e,j?c:s),kn(_e,j?u:a),bm(he)||Em(_e,r,y,ve)})};return it(e,{onBeforeEnter(j){Ar(w,[j]),kn(j,s),kn(j,o)},onBeforeAppear(j){Ar(U,[j]),kn(j,c),kn(j,l)},onEnter:le(!1),onAppear:le(!0),onLeave(j,_e){j._isLeaving=!0;const xe=()=>K(j,_e);kn(j,f),ey(),kn(j,h),_m(()=>{j._isLeaving&&(Qn(j,f),kn(j,d),bm(T)||Em(j,r,_,xe))}),Ar(T,[j,xe])},onEnterCancelled(j){H(j,!1),Ar(b,[j])},onAppearCancelled(j){H(j,!0),Ar(A,[j])},onLeaveCancelled(j){K(j),Ar(R,[j])}})}function QE(t){if(t==null)return null;if(Me(t))return[$l(t.enter),$l(t.leave)];{const e=$l(t);return[e,e]}}function $l(t){return Bb(t)}function kn(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t._vtc||(t._vtc=new Set)).add(e)}function Qn(t,e){e.split(/\s+/).forEach(r=>r&&t.classList.remove(r));const{_vtc:n}=t;n&&(n.delete(e),n.size||(t._vtc=void 0))}function _m(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let XE=0;function Em(t,e,n,r){const i=t._endId=++XE,s=()=>{i===t._endId&&r()};if(n)return setTimeout(s,n);const{type:o,timeout:a,propCount:c}=Zv(t,e);if(!o)return r();const l=o+"end";let u=0;const f=()=>{t.removeEventListener(l,h),s()},h=d=>{d.target===t&&++u>=c&&f()};setTimeout(()=>{u<c&&f()},a+1),t.addEventListener(l,h)}function Zv(t,e){const n=window.getComputedStyle(t),r=g=>(n[g]||"").split(", "),i=r(`${Wn}Delay`),s=r(`${Wn}Duration`),o=Tm(i,s),a=r(`${gs}Delay`),c=r(`${gs}Duration`),l=Tm(a,c);let u=null,f=0,h=0;e===Wn?o>0&&(u=Wn,f=o,h=s.length):e===gs?l>0&&(u=gs,f=l,h=c.length):(f=Math.max(o,l),u=f>0?o>l?Wn:gs:null,h=u?u===Wn?s.length:c.length:0);const d=u===Wn&&/\b(transform|all)(,|$)/.test(r(`${Wn}Property`).toString());return{type:u,timeout:f,propCount:h,hasTransform:d}}function Tm(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,r)=>Im(n)+Im(t[r])))}function Im(t){return Number(t.slice(0,-1).replace(",","."))*1e3}function ey(){return document.body.offsetHeight}const ty=new WeakMap,ny=new WeakMap,ry={name:"TransitionGroup",props:it({},YE,{tag:String,moveClass:String}),setup(t,{slots:e}){const n=Mc(),r=Rv();let i,s;return th(()=>{if(!i.length)return;const o=t.moveClass||`${t.name||"v"}-move`;if(!nT(i[0].el,n.vnode.el,o))return;i.forEach(ZE),i.forEach(eT);const a=i.filter(tT);ey(),a.forEach(c=>{const l=c.el,u=l.style;kn(l,o),u.transform=u.webkitTransform=u.transitionDuration="";const f=l._moveCb=h=>{h&&h.target!==l||(!h||/transform$/.test(h.propertyName))&&(l.removeEventListener("transitionend",f),l._moveCb=null,Qn(l,o))};l.addEventListener("transitionend",f)})}),()=>{const o=de(t),a=Jv(o);let c=o.tag||ct;i=s,s=e.default?eh(e.default()):[];for(let l=0;l<s.length;l++){const u=s[l];u.key!=null&&Di(u,Js(u,a,r,n))}if(i)for(let l=0;l<i.length;l++){const u=i[l];Di(u,Js(u,a,r,n)),ty.set(u,u.el.getBoundingClientRect())}return Ie(c,null,s)}}},JE=t=>delete t.mode;ry.props;const yL=ry;function ZE(t){const e=t.el;e._moveCb&&e._moveCb(),e._enterCb&&e._enterCb()}function eT(t){ny.set(t,t.el.getBoundingClientRect())}function tT(t){const e=ty.get(t),n=ny.get(t),r=e.left-n.left,i=e.top-n.top;if(r||i){const s=t.el.style;return s.transform=s.webkitTransform=`translate(${r}px,${i}px)`,s.transitionDuration="0s",t}}function nT(t,e,n){const r=t.cloneNode();t._vtc&&t._vtc.forEach(o=>{o.split(/\s+/).forEach(a=>a&&r.classList.remove(a))}),n.split(/\s+/).forEach(o=>o&&r.classList.add(o)),r.style.display="none";const i=e.nodeType===1?e:e.parentNode;i.appendChild(r);const{hasTransform:s}=Zv(r);return i.removeChild(r),s}const km=t=>{const e=t.props["onUpdate:modelValue"]||!1;return Z(e)?n=>Ei(e,n):e};function rT(t){t.target.composing=!0}function Cm(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const wL={created(t,{modifiers:{lazy:e,trim:n,number:r}},i){t._assign=km(i);const s=r||i.props&&i.props.type==="number";di(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),s&&(a=pu(a)),t._assign(a)}),n&&di(t,"change",()=>{t.value=t.value.trim()}),e||(di(t,"compositionstart",rT),di(t,"compositionend",Cm),di(t,"change",Cm))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:r,number:i}},s){if(t._assign=km(s),t.composing||document.activeElement===t&&t.type!=="range"&&(n||r&&t.value.trim()===e||(i||t.type==="number")&&pu(t.value)===e))return;const o=e??"";t.value!==o&&(t.value=o)}},iT=["ctrl","shift","alt","meta"],sT={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>iT.some(n=>t[`${n}Key`]&&!e.includes(n))},bL=(t,e)=>(n,...r)=>{for(let i=0;i<e.length;i++){const s=sT[e[i]];if(s&&s(n,e))return}return t(n,...r)},oT={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},_L=(t,e)=>n=>{if(!("key"in n))return;const r=ni(n.key);if(e.some(i=>i===r||oT[i]===r))return t(n)},aT={beforeMount(t,{value:e},{transition:n}){t._vod=t.style.display==="none"?"":t.style.display,n&&e?n.beforeEnter(t):vs(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:r}){!e!=!n&&(r?e?(r.beforeEnter(t),vs(t,!0),r.enter(t)):r.leave(t,()=>{vs(t,!1)}):vs(t,e))},beforeUnmount(t,{value:e}){vs(t,e)}};function vs(t,e){t.style.display=e?t._vod:"none"}const cT=it({patchProp:GE},DE);let Sm;function lT(){return Sm||(Sm=fE(cT))}const uT=(...t)=>{const e=lT().createApp(...t),{mount:n}=e;return e.mount=r=>{const i=fT(r);if(!i)return;const s=e._component;!oe(s)&&!s.render&&!s.template&&(s.template=i.innerHTML),i.innerHTML="";const o=n(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},e};function fT(t){return Ve(t)?document.querySelector(t):t}var hT=!1;/*!
  * pinia v2.0.35
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */let iy;const Uc=t=>iy=t,sy=Symbol();function Au(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var Ls;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(Ls||(Ls={}));function dT(){const t=ov(!0),e=t.run(()=>ut({}));let n=[],r=[];const i=Pi({install(s){Uc(i),i._a=s,s.provide(sy,i),s.config.globalProperties.$pinia=i,r.forEach(o=>n.push(o)),r=[]},use(s){return!this._a&&!hT?r.push(s):n.push(s),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return i}const oy=()=>{};function Am(t,e,n,r=oy){t.push(e);const i=()=>{const s=t.indexOf(e);s>-1&&(t.splice(s,1),r())};return!n&&Uf()&&av(i),i}function ui(t,...e){t.slice().forEach(n=>{n(...e)})}function xu(t,e){t instanceof Map&&e instanceof Map&&e.forEach((n,r)=>t.set(r,n)),t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const r=e[n],i=t[n];Au(i)&&Au(r)&&t.hasOwnProperty(n)&&!qe(r)&&!sr(r)?t[n]=xu(i,r):t[n]=r}return t}const mT=Symbol();function pT(t){return!Au(t)||!t.hasOwnProperty(mT)}const{assign:Xn}=Object;function gT(t){return!!(qe(t)&&t.effect)}function vT(t,e,n,r){const{state:i,actions:s,getters:o}=e,a=n.state.value[t];let c;function l(){a||(n.state.value[t]=i?i():{});const u=T_(n.state.value[t]);return Xn(u,s,Object.keys(o||{}).reduce((f,h)=>(f[h]=Pi(ke(()=>{Uc(n);const d=n._s.get(t);return o[h].call(d,d)})),f),{}))}return c=ay(t,l,e,n,r,!0),c}function ay(t,e,n={},r,i,s){let o;const a=Xn({actions:{}},n),c={deep:!0};let l,u,f=Pi([]),h=Pi([]),d;const g=r.state.value[t];!s&&!g&&(r.state.value[t]={}),ut({});let y;function _(P){let A;l=u=!1,typeof P=="function"?(P(r.state.value[t]),A={type:Ls.patchFunction,storeId:t,events:d}):(xu(r.state.value[t],P),A={type:Ls.patchObject,payload:P,storeId:t,events:d});const H=y=Symbol();Yf().then(()=>{y===H&&(l=!0)}),u=!0,ui(f,A,r.state.value[t])}const w=s?function(){const{state:A}=n,H=A?A():{};this.$patch(K=>{Xn(K,H)})}:oy;function v(){o.stop(),f=[],h=[],r._s.delete(t)}function b(P,A){return function(){Uc(r);const H=Array.from(arguments),K=[],le=[];function j(he){K.push(he)}function _e(he){le.push(he)}ui(h,{args:H,name:P,store:R,after:j,onError:_e});let xe;try{xe=A.apply(this&&this.$id===t?this:R,H)}catch(he){throw ui(le,he),he}return xe instanceof Promise?xe.then(he=>(ui(K,he),he)).catch(he=>(ui(le,he),Promise.reject(he))):(ui(K,xe),xe)}}const T={_p:r,$id:t,$onAction:Am.bind(null,h),$patch:_,$reset:w,$subscribe(P,A={}){const H=Am(f,P,A.detached,()=>K()),K=o.run(()=>sn(()=>r.state.value[t],le=>{(A.flush==="sync"?u:l)&&P({storeId:t,type:Ls.direct,events:d},le)},Xn({},c,A)));return H},$dispose:v},R=es(T);r._s.set(t,R);const U=r._e.run(()=>(o=ov(),o.run(()=>e())));for(const P in U){const A=U[P];if(qe(A)&&!gT(A)||sr(A))s||(g&&pT(A)&&(qe(A)?A.value=g[P]:xu(A,g[P])),r.state.value[t][P]=A);else if(typeof A=="function"){const H=b(P,A);U[P]=H,a.actions[P]=A}}return Xn(R,U),Xn(de(R),U),Object.defineProperty(R,"$state",{get:()=>r.state.value[t],set:P=>{_(A=>{Xn(A,P)})}}),r._p.forEach(P=>{Xn(R,o.run(()=>P({store:R,app:r._a,pinia:r,options:a})))}),g&&s&&n.hydrate&&n.hydrate(R.$state,g),l=!0,u=!0,R}function yT(t,e,n){let r,i;const s=typeof e=="function";typeof t=="string"?(r=t,i=s?n:e):(i=t,r=t.id);function o(a,c){const l=Mc();return a=a||l&&zt(sy,null),a&&Uc(a),a=iy,a._s.has(r)||(s?ay(r,e,i,a):vT(r,i,a)),a._s.get(r)}return o.$id=r,o}function xm(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function V(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?xm(Object(n),!0).forEach(function(r){et(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):xm(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function qa(t){return qa=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},qa(t)}function wT(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function Rm(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function bT(t,e,n){return e&&Rm(t.prototype,e),n&&Rm(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function et(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function ch(t,e){return ET(t)||IT(t,e)||cy(t,e)||CT()}function ko(t){return _T(t)||TT(t)||cy(t)||kT()}function _T(t){if(Array.isArray(t))return Ru(t)}function ET(t){if(Array.isArray(t))return t}function TT(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function IT(t,e){var n=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var r=[],i=!0,s=!1,o,a;try{for(n=n.call(t);!(i=(o=n.next()).done)&&(r.push(o.value),!(e&&r.length===e));i=!0);}catch(c){s=!0,a=c}finally{try{!i&&n.return!=null&&n.return()}finally{if(s)throw a}}return r}}function cy(t,e){if(t){if(typeof t=="string")return Ru(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Ru(t,e)}}function Ru(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function kT(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function CT(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Om=function(){},lh={},ly={},uy=null,fy={mark:Om,measure:Om};try{typeof window<"u"&&(lh=window),typeof document<"u"&&(ly=document),typeof MutationObserver<"u"&&(uy=MutationObserver),typeof performance<"u"&&(fy=performance)}catch{}var ST=lh.navigator||{},Nm=ST.userAgent,Pm=Nm===void 0?"":Nm,dr=lh,Pe=ly,Dm=uy,sa=fy;dr.document;var Hn=!!Pe.documentElement&&!!Pe.head&&typeof Pe.addEventListener=="function"&&typeof Pe.createElement=="function",hy=~Pm.indexOf("MSIE")||~Pm.indexOf("Trident/"),oa,aa,ca,la,ua,Dn="___FONT_AWESOME___",Ou=16,dy="fa",my="svg-inline--fa",Gr="data-fa-i2svg",Nu="data-fa-pseudo-element",AT="data-fa-pseudo-element-pending",uh="data-prefix",fh="data-icon",Mm="fontawesome-i2svg",xT="async",RT=["HTML","HEAD","STYLE","SCRIPT"],py=function(){try{return!0}catch{return!1}}(),Oe="classic",Be="sharp",hh=[Oe,Be];function Co(t){return new Proxy(t,{get:function(n,r){return r in n?n[r]:n[Oe]}})}var ro=Co((oa={},et(oa,Oe,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),et(oa,Be,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular"}),oa)),io=Co((aa={},et(aa,Oe,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),et(aa,Be,{solid:"fass",regular:"fasr"}),aa)),so=Co((ca={},et(ca,Oe,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),et(ca,Be,{fass:"fa-solid",fasr:"fa-regular"}),ca)),OT=Co((la={},et(la,Oe,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),et(la,Be,{"fa-solid":"fass","fa-regular":"fasr"}),la)),NT=/fa(s|r|l|t|d|b|k|ss|sr)?[\-\ ]/,gy="fa-layers-text",PT=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,DT=Co((ua={},et(ua,Oe,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),et(ua,Be,{900:"fass",400:"fasr"}),ua)),vy=[1,2,3,4,5,6,7,8,9,10],MT=vy.concat([11,12,13,14,15,16,17,18,19,20]),LT=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Mr={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},oo=new Set;Object.keys(io[Oe]).map(oo.add.bind(oo));Object.keys(io[Be]).map(oo.add.bind(oo));var UT=[].concat(hh,ko(oo),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",Mr.GROUP,Mr.SWAP_OPACITY,Mr.PRIMARY,Mr.SECONDARY]).concat(vy.map(function(t){return"".concat(t,"x")})).concat(MT.map(function(t){return"w-".concat(t)})),Us=dr.FontAwesomeConfig||{};function FT(t){var e=Pe.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function $T(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}if(Pe&&typeof Pe.querySelector=="function"){var VT=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];VT.forEach(function(t){var e=ch(t,2),n=e[0],r=e[1],i=$T(FT(n));i!=null&&(Us[r]=i)})}var yy={styleDefault:"solid",familyDefault:"classic",cssPrefix:dy,replacementClass:my,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Us.familyPrefix&&(Us.cssPrefix=Us.familyPrefix);var Li=V(V({},yy),Us);Li.autoReplaceSvg||(Li.observeMutations=!1);var W={};Object.keys(yy).forEach(function(t){Object.defineProperty(W,t,{enumerable:!0,set:function(n){Li[t]=n,Fs.forEach(function(r){return r(W)})},get:function(){return Li[t]}})});Object.defineProperty(W,"familyPrefix",{enumerable:!0,set:function(e){Li.cssPrefix=e,Fs.forEach(function(n){return n(W)})},get:function(){return Li.cssPrefix}});dr.FontAwesomeConfig=W;var Fs=[];function BT(t){return Fs.push(t),function(){Fs.splice(Fs.indexOf(t),1)}}var qn=Ou,pn={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function jT(t){if(!(!t||!Hn)){var e=Pe.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;for(var n=Pe.head.childNodes,r=null,i=n.length-1;i>-1;i--){var s=n[i],o=(s.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=s)}return Pe.head.insertBefore(e,r),t}}var HT="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function ao(){for(var t=12,e="";t-- >0;)e+=HT[Math.random()*62|0];return e}function ns(t){for(var e=[],n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function dh(t){return t.classList?ns(t.classList):(t.getAttribute("class")||"").split(" ").filter(function(e){return e})}function wy(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function zT(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,'="').concat(wy(t[n]),'" ')},"").trim()}function Fc(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,": ").concat(t[n].trim(),";")},"")}function mh(t){return t.size!==pn.size||t.x!==pn.x||t.y!==pn.y||t.rotate!==pn.rotate||t.flipX||t.flipY}function WT(t){var e=t.transform,n=t.containerWidth,r=t.iconWidth,i={transform:"translate(".concat(n/2," 256)")},s="translate(".concat(e.x*32,", ").concat(e.y*32,") "),o="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),a="rotate(".concat(e.rotate," 0 0)"),c={transform:"".concat(s," ").concat(o," ").concat(a)},l={transform:"translate(".concat(r/2*-1," -256)")};return{outer:i,inner:c,path:l}}function qT(t){var e=t.transform,n=t.width,r=n===void 0?Ou:n,i=t.height,s=i===void 0?Ou:i,o=t.startCentered,a=o===void 0?!1:o,c="";return a&&hy?c+="translate(".concat(e.x/qn-r/2,"em, ").concat(e.y/qn-s/2,"em) "):a?c+="translate(calc(-50% + ".concat(e.x/qn,"em), calc(-50% + ").concat(e.y/qn,"em)) "):c+="translate(".concat(e.x/qn,"em, ").concat(e.y/qn,"em) "),c+="scale(".concat(e.size/qn*(e.flipX?-1:1),", ").concat(e.size/qn*(e.flipY?-1:1),") "),c+="rotate(".concat(e.rotate,"deg) "),c}var GT=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function by(){var t=dy,e=my,n=W.cssPrefix,r=W.replacementClass,i=GT;if(n!==t||r!==e){var s=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),a=new RegExp("\\.".concat(e),"g");i=i.replace(s,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(a,".".concat(r))}return i}var Lm=!1;function Vl(){W.autoAddCss&&!Lm&&(jT(by()),Lm=!0)}var KT={mixout:function(){return{dom:{css:by,insertCss:Vl}}},hooks:function(){return{beforeDOMElementCreation:function(){Vl()},beforeI2svg:function(){Vl()}}}},Mn=dr||{};Mn[Dn]||(Mn[Dn]={});Mn[Dn].styles||(Mn[Dn].styles={});Mn[Dn].hooks||(Mn[Dn].hooks={});Mn[Dn].shims||(Mn[Dn].shims=[]);var nn=Mn[Dn],_y=[],YT=function t(){Pe.removeEventListener("DOMContentLoaded",t),Ga=1,_y.map(function(e){return e()})},Ga=!1;Hn&&(Ga=(Pe.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(Pe.readyState),Ga||Pe.addEventListener("DOMContentLoaded",YT));function QT(t){Hn&&(Ga?setTimeout(t,0):_y.push(t))}function So(t){var e=t.tag,n=t.attributes,r=n===void 0?{}:n,i=t.children,s=i===void 0?[]:i;return typeof t=="string"?wy(t):"<".concat(e," ").concat(zT(r),">").concat(s.map(So).join(""),"</").concat(e,">")}function Um(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var XT=function(e,n){return function(r,i,s,o){return e.call(n,r,i,s,o)}},Bl=function(e,n,r,i){var s=Object.keys(e),o=s.length,a=i!==void 0?XT(n,i):n,c,l,u;for(r===void 0?(c=1,u=e[s[0]]):(c=0,u=r);c<o;c++)l=s[c],u=a(u,e[l],l,e);return u};function JT(t){for(var e=[],n=0,r=t.length;n<r;){var i=t.charCodeAt(n++);if(i>=55296&&i<=56319&&n<r){var s=t.charCodeAt(n++);(s&64512)==56320?e.push(((i&1023)<<10)+(s&1023)+65536):(e.push(i),n--)}else e.push(i)}return e}function Pu(t){var e=JT(t);return e.length===1?e[0].toString(16):null}function ZT(t,e){var n=t.length,r=t.charCodeAt(e),i;return r>=55296&&r<=56319&&n>e+1&&(i=t.charCodeAt(e+1),i>=56320&&i<=57343)?(r-55296)*1024+i-56320+65536:r}function Fm(t){return Object.keys(t).reduce(function(e,n){var r=t[n],i=!!r.icon;return i?e[r.iconName]=r.icon:e[n]=r,e},{})}function Du(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,i=r===void 0?!1:r,s=Fm(e);typeof nn.hooks.addPack=="function"&&!i?nn.hooks.addPack(t,Fm(e)):nn.styles[t]=V(V({},nn.styles[t]||{}),s),t==="fas"&&Du("fa",e)}var fa,ha,da,vi=nn.styles,eI=nn.shims,tI=(fa={},et(fa,Oe,Object.values(so[Oe])),et(fa,Be,Object.values(so[Be])),fa),ph=null,Ey={},Ty={},Iy={},ky={},Cy={},nI=(ha={},et(ha,Oe,Object.keys(ro[Oe])),et(ha,Be,Object.keys(ro[Be])),ha);function rI(t){return~UT.indexOf(t)}function iI(t,e){var n=e.split("-"),r=n[0],i=n.slice(1).join("-");return r===t&&i!==""&&!rI(i)?i:null}var Sy=function(){var e=function(s){return Bl(vi,function(o,a,c){return o[c]=Bl(a,s,{}),o},{})};Ey=e(function(i,s,o){if(s[3]&&(i[s[3]]=o),s[2]){var a=s[2].filter(function(c){return typeof c=="number"});a.forEach(function(c){i[c.toString(16)]=o})}return i}),Ty=e(function(i,s,o){if(i[o]=o,s[2]){var a=s[2].filter(function(c){return typeof c=="string"});a.forEach(function(c){i[c]=o})}return i}),Cy=e(function(i,s,o){var a=s[2];return i[o]=o,a.forEach(function(c){i[c]=o}),i});var n="far"in vi||W.autoFetchSvg,r=Bl(eI,function(i,s){var o=s[0],a=s[1],c=s[2];return a==="far"&&!n&&(a="fas"),typeof o=="string"&&(i.names[o]={prefix:a,iconName:c}),typeof o=="number"&&(i.unicodes[o.toString(16)]={prefix:a,iconName:c}),i},{names:{},unicodes:{}});Iy=r.names,ky=r.unicodes,ph=$c(W.styleDefault,{family:W.familyDefault})};BT(function(t){ph=$c(t.styleDefault,{family:W.familyDefault})});Sy();function gh(t,e){return(Ey[t]||{})[e]}function sI(t,e){return(Ty[t]||{})[e]}function Lr(t,e){return(Cy[t]||{})[e]}function Ay(t){return Iy[t]||{prefix:null,iconName:null}}function oI(t){var e=ky[t],n=gh("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function mr(){return ph}var vh=function(){return{prefix:null,iconName:null,rest:[]}};function $c(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.family,r=n===void 0?Oe:n,i=ro[r][t],s=io[r][t]||io[r][i],o=t in nn.styles?t:null;return s||o||null}var $m=(da={},et(da,Oe,Object.keys(so[Oe])),et(da,Be,Object.keys(so[Be])),da);function Vc(t){var e,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,i=r===void 0?!1:r,s=(e={},et(e,Oe,"".concat(W.cssPrefix,"-").concat(Oe)),et(e,Be,"".concat(W.cssPrefix,"-").concat(Be)),e),o=null,a=Oe;(t.includes(s[Oe])||t.some(function(l){return $m[Oe].includes(l)}))&&(a=Oe),(t.includes(s[Be])||t.some(function(l){return $m[Be].includes(l)}))&&(a=Be);var c=t.reduce(function(l,u){var f=iI(W.cssPrefix,u);if(vi[u]?(u=tI[a].includes(u)?OT[a][u]:u,o=u,l.prefix=u):nI[a].indexOf(u)>-1?(o=u,l.prefix=$c(u,{family:a})):f?l.iconName=f:u!==W.replacementClass&&u!==s[Oe]&&u!==s[Be]&&l.rest.push(u),!i&&l.prefix&&l.iconName){var h=o==="fa"?Ay(l.iconName):{},d=Lr(l.prefix,l.iconName);h.prefix&&(o=null),l.iconName=h.iconName||d||l.iconName,l.prefix=h.prefix||l.prefix,l.prefix==="far"&&!vi.far&&vi.fas&&!W.autoFetchSvg&&(l.prefix="fas")}return l},vh());return(t.includes("fa-brands")||t.includes("fab"))&&(c.prefix="fab"),(t.includes("fa-duotone")||t.includes("fad"))&&(c.prefix="fad"),!c.prefix&&a===Be&&(vi.fass||W.autoFetchSvg)&&(c.prefix="fass",c.iconName=Lr(c.prefix,c.iconName)||c.iconName),(c.prefix==="fa"||o==="fa")&&(c.prefix=mr()||"fas"),c}var aI=function(){function t(){wT(this,t),this.definitions={}}return bT(t,[{key:"add",value:function(){for(var n=this,r=arguments.length,i=new Array(r),s=0;s<r;s++)i[s]=arguments[s];var o=i.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(a){n.definitions[a]=V(V({},n.definitions[a]||{}),o[a]),Du(a,o[a]);var c=so[Oe][a];c&&Du(c,o[a]),Sy()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var i=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(i).map(function(s){var o=i[s],a=o.prefix,c=o.iconName,l=o.icon,u=l[2];n[a]||(n[a]={}),u.length>0&&u.forEach(function(f){typeof f=="string"&&(n[a][f]=l)}),n[a][c]=l}),n}}]),t}(),Vm=[],yi={},ki={},cI=Object.keys(ki);function lI(t,e){var n=e.mixoutsTo;return Vm=t,yi={},Object.keys(ki).forEach(function(r){cI.indexOf(r)===-1&&delete ki[r]}),Vm.forEach(function(r){var i=r.mixout?r.mixout():{};if(Object.keys(i).forEach(function(o){typeof i[o]=="function"&&(n[o]=i[o]),qa(i[o])==="object"&&Object.keys(i[o]).forEach(function(a){n[o]||(n[o]={}),n[o][a]=i[o][a]})}),r.hooks){var s=r.hooks();Object.keys(s).forEach(function(o){yi[o]||(yi[o]=[]),yi[o].push(s[o])})}r.provides&&r.provides(ki)}),n}function Mu(t,e){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];var s=yi[t]||[];return s.forEach(function(o){e=o.apply(null,[e].concat(r))}),e}function Kr(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];var i=yi[t]||[];i.forEach(function(s){s.apply(null,n)})}function Ln(){var t=arguments[0],e=Array.prototype.slice.call(arguments,1);return ki[t]?ki[t].apply(null,e):void 0}function Lu(t){t.prefix==="fa"&&(t.prefix="fas");var e=t.iconName,n=t.prefix||mr();if(e)return e=Lr(n,e)||e,Um(xy.definitions,n,e)||Um(nn.styles,n,e)}var xy=new aI,uI=function(){W.autoReplaceSvg=!1,W.observeMutations=!1,Kr("noAuto")},fI={i2svg:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Hn?(Kr("beforeI2svg",e),Ln("pseudoElements2svg",e),Ln("i2svg",e)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot;W.autoReplaceSvg===!1&&(W.autoReplaceSvg=!0),W.observeMutations=!0,QT(function(){dI({autoReplaceSvgRoot:n}),Kr("watch",e)})}},hI={icon:function(e){if(e===null)return null;if(qa(e)==="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:Lr(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){var n=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],r=$c(e[0]);return{prefix:r,iconName:Lr(r,n)||n}}if(typeof e=="string"&&(e.indexOf("".concat(W.cssPrefix,"-"))>-1||e.match(NT))){var i=Vc(e.split(" "),{skipLookups:!0});return{prefix:i.prefix||mr(),iconName:Lr(i.prefix,i.iconName)||i.iconName}}if(typeof e=="string"){var s=mr();return{prefix:s,iconName:Lr(s,e)||e}}}},$t={noAuto:uI,config:W,dom:fI,parse:hI,library:xy,findIconDefinition:Lu,toHtml:So},dI=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot,r=n===void 0?Pe:n;(Object.keys(nn.styles).length>0||W.autoFetchSvg)&&Hn&&W.autoReplaceSvg&&$t.dom.i2svg({node:r})};function Bc(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(function(r){return So(r)})}}),Object.defineProperty(t,"node",{get:function(){if(Hn){var r=Pe.createElement("div");return r.innerHTML=t.html,r.children}}}),t}function mI(t){var e=t.children,n=t.main,r=t.mask,i=t.attributes,s=t.styles,o=t.transform;if(mh(o)&&n.found&&!r.found){var a=n.width,c=n.height,l={x:a/c/2,y:.5};i.style=Fc(V(V({},s),{},{"transform-origin":"".concat(l.x+o.x/16,"em ").concat(l.y+o.y/16,"em")}))}return[{tag:"svg",attributes:i,children:e}]}function pI(t){var e=t.prefix,n=t.iconName,r=t.children,i=t.attributes,s=t.symbol,o=s===!0?"".concat(e,"-").concat(W.cssPrefix,"-").concat(n):s;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:V(V({},i),{},{id:o}),children:r}]}]}function yh(t){var e=t.icons,n=e.main,r=e.mask,i=t.prefix,s=t.iconName,o=t.transform,a=t.symbol,c=t.title,l=t.maskId,u=t.titleId,f=t.extra,h=t.watchable,d=h===void 0?!1:h,g=r.found?r:n,y=g.width,_=g.height,w=i==="fak",v=[W.replacementClass,s?"".concat(W.cssPrefix,"-").concat(s):""].filter(function(H){return f.classes.indexOf(H)===-1}).filter(function(H){return H!==""||!!H}).concat(f.classes).join(" "),b={children:[],attributes:V(V({},f.attributes),{},{"data-prefix":i,"data-icon":s,class:v,role:f.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(y," ").concat(_)})},T=w&&!~f.classes.indexOf("fa-fw")?{width:"".concat(y/_*16*.0625,"em")}:{};d&&(b.attributes[Gr]=""),c&&(b.children.push({tag:"title",attributes:{id:b.attributes["aria-labelledby"]||"title-".concat(u||ao())},children:[c]}),delete b.attributes.title);var R=V(V({},b),{},{prefix:i,iconName:s,main:n,mask:r,maskId:l,transform:o,symbol:a,styles:V(V({},T),f.styles)}),U=r.found&&n.found?Ln("generateAbstractMask",R)||{children:[],attributes:{}}:Ln("generateAbstractIcon",R)||{children:[],attributes:{}},P=U.children,A=U.attributes;return R.children=P,R.attributes=A,a?pI(R):mI(R)}function Bm(t){var e=t.content,n=t.width,r=t.height,i=t.transform,s=t.title,o=t.extra,a=t.watchable,c=a===void 0?!1:a,l=V(V(V({},o.attributes),s?{title:s}:{}),{},{class:o.classes.join(" ")});c&&(l[Gr]="");var u=V({},o.styles);mh(i)&&(u.transform=qT({transform:i,startCentered:!0,width:n,height:r}),u["-webkit-transform"]=u.transform);var f=Fc(u);f.length>0&&(l.style=f);var h=[];return h.push({tag:"span",attributes:l,children:[e]}),s&&h.push({tag:"span",attributes:{class:"sr-only"},children:[s]}),h}function gI(t){var e=t.content,n=t.title,r=t.extra,i=V(V(V({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),s=Fc(r.styles);s.length>0&&(i.style=s);var o=[];return o.push({tag:"span",attributes:i,children:[e]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var jl=nn.styles;function Uu(t){var e=t[0],n=t[1],r=t.slice(4),i=ch(r,1),s=i[0],o=null;return Array.isArray(s)?o={tag:"g",attributes:{class:"".concat(W.cssPrefix,"-").concat(Mr.GROUP)},children:[{tag:"path",attributes:{class:"".concat(W.cssPrefix,"-").concat(Mr.SECONDARY),fill:"currentColor",d:s[0]}},{tag:"path",attributes:{class:"".concat(W.cssPrefix,"-").concat(Mr.PRIMARY),fill:"currentColor",d:s[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:s}},{found:!0,width:e,height:n,icon:o}}var vI={found:!1,width:512,height:512};function yI(t,e){!py&&!W.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function Fu(t,e){var n=e;return e==="fa"&&W.styleDefault!==null&&(e=mr()),new Promise(function(r,i){if(Ln("missingIconAbstract"),n==="fa"){var s=Ay(t)||{};t=s.iconName||t,e=s.prefix||e}if(t&&e&&jl[e]&&jl[e][t]){var o=jl[e][t];return r(Uu(o))}yI(t,e),r(V(V({},vI),{},{icon:W.showMissingIcons&&t?Ln("missingIconAbstract")||{}:{}}))})}var jm=function(){},$u=W.measurePerformance&&sa&&sa.mark&&sa.measure?sa:{mark:jm,measure:jm},ks='FA "6.3.0"',wI=function(e){return $u.mark("".concat(ks," ").concat(e," begins")),function(){return Ry(e)}},Ry=function(e){$u.mark("".concat(ks," ").concat(e," ends")),$u.measure("".concat(ks," ").concat(e),"".concat(ks," ").concat(e," begins"),"".concat(ks," ").concat(e," ends"))},wh={begin:wI,end:Ry},xa=function(){};function Hm(t){var e=t.getAttribute?t.getAttribute(Gr):null;return typeof e=="string"}function bI(t){var e=t.getAttribute?t.getAttribute(uh):null,n=t.getAttribute?t.getAttribute(fh):null;return e&&n}function _I(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(W.replacementClass)}function EI(){if(W.autoReplaceSvg===!0)return Ra.replace;var t=Ra[W.autoReplaceSvg];return t||Ra.replace}function TI(t){return Pe.createElementNS("http://www.w3.org/2000/svg",t)}function II(t){return Pe.createElement(t)}function Oy(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.ceFn,r=n===void 0?t.tag==="svg"?TI:II:n;if(typeof t=="string")return Pe.createTextNode(t);var i=r(t.tag);Object.keys(t.attributes||[]).forEach(function(o){i.setAttribute(o,t.attributes[o])});var s=t.children||[];return s.forEach(function(o){i.appendChild(Oy(o,{ceFn:r}))}),i}function kI(t){var e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}var Ra={replace:function(e){var n=e[0];if(n.parentNode)if(e[1].forEach(function(i){n.parentNode.insertBefore(Oy(i),n)}),n.getAttribute(Gr)===null&&W.keepOriginalSource){var r=Pe.createComment(kI(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(e){var n=e[0],r=e[1];if(~dh(n).indexOf(W.replacementClass))return Ra.replace(e);var i=new RegExp("".concat(W.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var s=r[0].attributes.class.split(" ").reduce(function(a,c){return c===W.replacementClass||c.match(i)?a.toSvg.push(c):a.toNode.push(c),a},{toNode:[],toSvg:[]});r[0].attributes.class=s.toSvg.join(" "),s.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",s.toNode.join(" "))}var o=r.map(function(a){return So(a)}).join(`
`);n.setAttribute(Gr,""),n.innerHTML=o}};function zm(t){t()}function Ny(t,e){var n=typeof e=="function"?e:xa;if(t.length===0)n();else{var r=zm;W.mutateApproach===xT&&(r=dr.requestAnimationFrame||zm),r(function(){var i=EI(),s=wh.begin("mutate");t.map(i),s(),n()})}}var bh=!1;function Py(){bh=!0}function Vu(){bh=!1}var Ka=null;function Wm(t){if(Dm&&W.observeMutations){var e=t.treeCallback,n=e===void 0?xa:e,r=t.nodeCallback,i=r===void 0?xa:r,s=t.pseudoElementsCallback,o=s===void 0?xa:s,a=t.observeMutationsRoot,c=a===void 0?Pe:a;Ka=new Dm(function(l){if(!bh){var u=mr();ns(l).forEach(function(f){if(f.type==="childList"&&f.addedNodes.length>0&&!Hm(f.addedNodes[0])&&(W.searchPseudoElements&&o(f.target),n(f.target)),f.type==="attributes"&&f.target.parentNode&&W.searchPseudoElements&&o(f.target.parentNode),f.type==="attributes"&&Hm(f.target)&&~LT.indexOf(f.attributeName))if(f.attributeName==="class"&&bI(f.target)){var h=Vc(dh(f.target)),d=h.prefix,g=h.iconName;f.target.setAttribute(uh,d||u),g&&f.target.setAttribute(fh,g)}else _I(f.target)&&i(f.target)})}}),Hn&&Ka.observe(c,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function CI(){Ka&&Ka.disconnect()}function SI(t){var e=t.getAttribute("style"),n=[];return e&&(n=e.split(";").reduce(function(r,i){var s=i.split(":"),o=s[0],a=s.slice(1);return o&&a.length>0&&(r[o]=a.join(":").trim()),r},{})),n}function AI(t){var e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),r=t.innerText!==void 0?t.innerText.trim():"",i=Vc(dh(t));return i.prefix||(i.prefix=mr()),e&&n&&(i.prefix=e,i.iconName=n),i.iconName&&i.prefix||(i.prefix&&r.length>0&&(i.iconName=sI(i.prefix,t.innerText)||gh(i.prefix,Pu(t.innerText))),!i.iconName&&W.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=t.firstChild.data)),i}function xI(t){var e=ns(t.attributes).reduce(function(i,s){return i.name!=="class"&&i.name!=="style"&&(i[s.name]=s.value),i},{}),n=t.getAttribute("title"),r=t.getAttribute("data-fa-title-id");return W.autoA11y&&(n?e["aria-labelledby"]="".concat(W.replacementClass,"-title-").concat(r||ao()):(e["aria-hidden"]="true",e.focusable="false")),e}function RI(){return{iconName:null,title:null,titleId:null,prefix:null,transform:pn,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function qm(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=AI(t),r=n.iconName,i=n.prefix,s=n.rest,o=xI(t),a=Mu("parseNodeAttributes",{},t),c=e.styleParser?SI(t):[];return V({iconName:r,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:i,transform:pn,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:s,styles:c,attributes:o}},a)}var OI=nn.styles;function Dy(t){var e=W.autoReplaceSvg==="nest"?qm(t,{styleParser:!1}):qm(t);return~e.extra.classes.indexOf(gy)?Ln("generateLayersText",t,e):Ln("generateSvgReplacementMutation",t,e)}var pr=new Set;hh.map(function(t){pr.add("fa-".concat(t))});Object.keys(ro[Oe]).map(pr.add.bind(pr));Object.keys(ro[Be]).map(pr.add.bind(pr));pr=ko(pr);function Gm(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Hn)return Promise.resolve();var n=Pe.documentElement.classList,r=function(f){return n.add("".concat(Mm,"-").concat(f))},i=function(f){return n.remove("".concat(Mm,"-").concat(f))},s=W.autoFetchSvg?pr:hh.map(function(u){return"fa-".concat(u)}).concat(Object.keys(OI));s.includes("fa")||s.push("fa");var o=[".".concat(gy,":not([").concat(Gr,"])")].concat(s.map(function(u){return".".concat(u,":not([").concat(Gr,"])")})).join(", ");if(o.length===0)return Promise.resolve();var a=[];try{a=ns(t.querySelectorAll(o))}catch{}if(a.length>0)r("pending"),i("complete");else return Promise.resolve();var c=wh.begin("onTree"),l=a.reduce(function(u,f){try{var h=Dy(f);h&&u.push(h)}catch(d){py||d.name==="MissingIcon"&&console.error(d)}return u},[]);return new Promise(function(u,f){Promise.all(l).then(function(h){Ny(h,function(){r("active"),r("complete"),i("pending"),typeof e=="function"&&e(),c(),u()})}).catch(function(h){c(),f(h)})})}function NI(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Dy(t).then(function(n){n&&Ny([n],e)})}function PI(t){return function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(e||{}).icon?e:Lu(e||{}),i=n.mask;return i&&(i=(i||{}).icon?i:Lu(i||{})),t(r,V(V({},n),{},{mask:i}))}}var DI=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,i=r===void 0?pn:r,s=n.symbol,o=s===void 0?!1:s,a=n.mask,c=a===void 0?null:a,l=n.maskId,u=l===void 0?null:l,f=n.title,h=f===void 0?null:f,d=n.titleId,g=d===void 0?null:d,y=n.classes,_=y===void 0?[]:y,w=n.attributes,v=w===void 0?{}:w,b=n.styles,T=b===void 0?{}:b;if(e){var R=e.prefix,U=e.iconName,P=e.icon;return Bc(V({type:"icon"},e),function(){return Kr("beforeDOMElementCreation",{iconDefinition:e,params:n}),W.autoA11y&&(h?v["aria-labelledby"]="".concat(W.replacementClass,"-title-").concat(g||ao()):(v["aria-hidden"]="true",v.focusable="false")),yh({icons:{main:Uu(P),mask:c?Uu(c.icon):{found:!1,width:null,height:null,icon:{}}},prefix:R,iconName:U,transform:V(V({},pn),i),symbol:o,title:h,maskId:u,titleId:g,extra:{attributes:v,styles:T,classes:_}})})}},MI={mixout:function(){return{icon:PI(DI)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=Gm,n.nodeCallback=NI,n}}},provides:function(e){e.i2svg=function(n){var r=n.node,i=r===void 0?Pe:r,s=n.callback,o=s===void 0?function(){}:s;return Gm(i,o)},e.generateSvgReplacementMutation=function(n,r){var i=r.iconName,s=r.title,o=r.titleId,a=r.prefix,c=r.transform,l=r.symbol,u=r.mask,f=r.maskId,h=r.extra;return new Promise(function(d,g){Promise.all([Fu(i,a),u.iconName?Fu(u.iconName,u.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(y){var _=ch(y,2),w=_[0],v=_[1];d([n,yh({icons:{main:w,mask:v},prefix:a,iconName:i,transform:c,symbol:l,maskId:f,title:s,titleId:o,extra:h,watchable:!0})])}).catch(g)})},e.generateAbstractIcon=function(n){var r=n.children,i=n.attributes,s=n.main,o=n.transform,a=n.styles,c=Fc(a);c.length>0&&(i.style=c);var l;return mh(o)&&(l=Ln("generateAbstractTransformGrouping",{main:s,transform:o,containerWidth:s.width,iconWidth:s.width})),r.push(l||s.icon),{children:r,attributes:i}}}},LI={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.classes,s=i===void 0?[]:i;return Bc({type:"layer"},function(){Kr("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(a){Array.isArray(a)?a.map(function(c){o=o.concat(c.abstract)}):o=o.concat(a.abstract)}),[{tag:"span",attributes:{class:["".concat(W.cssPrefix,"-layers")].concat(ko(s)).join(" ")},children:o}]})}}}},UI={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.title,s=i===void 0?null:i,o=r.classes,a=o===void 0?[]:o,c=r.attributes,l=c===void 0?{}:c,u=r.styles,f=u===void 0?{}:u;return Bc({type:"counter",content:n},function(){return Kr("beforeDOMElementCreation",{content:n,params:r}),gI({content:n.toString(),title:s,extra:{attributes:l,styles:f,classes:["".concat(W.cssPrefix,"-layers-counter")].concat(ko(a))}})})}}}},FI={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.transform,s=i===void 0?pn:i,o=r.title,a=o===void 0?null:o,c=r.classes,l=c===void 0?[]:c,u=r.attributes,f=u===void 0?{}:u,h=r.styles,d=h===void 0?{}:h;return Bc({type:"text",content:n},function(){return Kr("beforeDOMElementCreation",{content:n,params:r}),Bm({content:n,transform:V(V({},pn),s),title:a,extra:{attributes:f,styles:d,classes:["".concat(W.cssPrefix,"-layers-text")].concat(ko(l))}})})}}},provides:function(e){e.generateLayersText=function(n,r){var i=r.title,s=r.transform,o=r.extra,a=null,c=null;if(hy){var l=parseInt(getComputedStyle(n).fontSize,10),u=n.getBoundingClientRect();a=u.width/l,c=u.height/l}return W.autoA11y&&!i&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,Bm({content:n.innerHTML,width:a,height:c,transform:s,title:i,extra:o,watchable:!0})])}}},$I=new RegExp('"',"ug"),Km=[1105920,1112319];function VI(t){var e=t.replace($I,""),n=ZT(e,0),r=n>=Km[0]&&n<=Km[1],i=e.length===2?e[0]===e[1]:!1;return{value:Pu(i?e[0]:e),isSecondary:r||i}}function Ym(t,e){var n="".concat(AT).concat(e.replace(":","-"));return new Promise(function(r,i){if(t.getAttribute(n)!==null)return r();var s=ns(t.children),o=s.filter(function(P){return P.getAttribute(Nu)===e})[0],a=dr.getComputedStyle(t,e),c=a.getPropertyValue("font-family").match(PT),l=a.getPropertyValue("font-weight"),u=a.getPropertyValue("content");if(o&&!c)return t.removeChild(o),r();if(c&&u!=="none"&&u!==""){var f=a.getPropertyValue("content"),h=~["Sharp"].indexOf(c[2])?Be:Oe,d=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(c[2])?io[h][c[2].toLowerCase()]:DT[h][l],g=VI(f),y=g.value,_=g.isSecondary,w=c[0].startsWith("FontAwesome"),v=gh(d,y),b=v;if(w){var T=oI(y);T.iconName&&T.prefix&&(v=T.iconName,d=T.prefix)}if(v&&!_&&(!o||o.getAttribute(uh)!==d||o.getAttribute(fh)!==b)){t.setAttribute(n,b),o&&t.removeChild(o);var R=RI(),U=R.extra;U.attributes[Nu]=e,Fu(v,d).then(function(P){var A=yh(V(V({},R),{},{icons:{main:P,mask:vh()},prefix:d,iconName:b,extra:U,watchable:!0})),H=Pe.createElement("svg");e==="::before"?t.insertBefore(H,t.firstChild):t.appendChild(H),H.outerHTML=A.map(function(K){return So(K)}).join(`
`),t.removeAttribute(n),r()}).catch(i)}else r()}else r()})}function BI(t){return Promise.all([Ym(t,"::before"),Ym(t,"::after")])}function jI(t){return t.parentNode!==document.head&&!~RT.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(Nu)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function Qm(t){if(Hn)return new Promise(function(e,n){var r=ns(t.querySelectorAll("*")).filter(jI).map(BI),i=wh.begin("searchPseudoElements");Py(),Promise.all(r).then(function(){i(),Vu(),e()}).catch(function(){i(),Vu(),n()})})}var HI={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=Qm,n}}},provides:function(e){e.pseudoElements2svg=function(n){var r=n.node,i=r===void 0?Pe:r;W.searchPseudoElements&&Qm(i)}}},Xm=!1,zI={mixout:function(){return{dom:{unwatch:function(){Py(),Xm=!0}}}},hooks:function(){return{bootstrap:function(){Wm(Mu("mutationObserverCallbacks",{}))},noAuto:function(){CI()},watch:function(n){var r=n.observeMutationsRoot;Xm?Vu():Wm(Mu("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},Jm=function(e){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce(function(r,i){var s=i.toLowerCase().split("-"),o=s[0],a=s.slice(1).join("-");if(o&&a==="h")return r.flipX=!0,r;if(o&&a==="v")return r.flipY=!0,r;if(a=parseFloat(a),isNaN(a))return r;switch(o){case"grow":r.size=r.size+a;break;case"shrink":r.size=r.size-a;break;case"left":r.x=r.x-a;break;case"right":r.x=r.x+a;break;case"up":r.y=r.y-a;break;case"down":r.y=r.y+a;break;case"rotate":r.rotate=r.rotate+a;break}return r},n)},WI={mixout:function(){return{parse:{transform:function(n){return Jm(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-transform");return i&&(n.transform=Jm(i)),n}}},provides:function(e){e.generateAbstractTransformGrouping=function(n){var r=n.main,i=n.transform,s=n.containerWidth,o=n.iconWidth,a={transform:"translate(".concat(s/2," 256)")},c="translate(".concat(i.x*32,", ").concat(i.y*32,") "),l="scale(".concat(i.size/16*(i.flipX?-1:1),", ").concat(i.size/16*(i.flipY?-1:1),") "),u="rotate(".concat(i.rotate," 0 0)"),f={transform:"".concat(c," ").concat(l," ").concat(u)},h={transform:"translate(".concat(o/2*-1," -256)")},d={outer:a,inner:f,path:h};return{tag:"g",attributes:V({},d.outer),children:[{tag:"g",attributes:V({},d.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:V(V({},r.icon.attributes),d.path)}]}]}}}},Hl={x:0,y:0,width:"100%",height:"100%"};function Zm(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function qI(t){return t.tag==="g"?t.children:[t]}var GI={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-mask"),s=i?Vc(i.split(" ").map(function(o){return o.trim()})):vh();return s.prefix||(s.prefix=mr()),n.mask=s,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(e){e.generateAbstractMask=function(n){var r=n.children,i=n.attributes,s=n.main,o=n.mask,a=n.maskId,c=n.transform,l=s.width,u=s.icon,f=o.width,h=o.icon,d=WT({transform:c,containerWidth:f,iconWidth:l}),g={tag:"rect",attributes:V(V({},Hl),{},{fill:"white"})},y=u.children?{children:u.children.map(Zm)}:{},_={tag:"g",attributes:V({},d.inner),children:[Zm(V({tag:u.tag,attributes:V(V({},u.attributes),d.path)},y))]},w={tag:"g",attributes:V({},d.outer),children:[_]},v="mask-".concat(a||ao()),b="clip-".concat(a||ao()),T={tag:"mask",attributes:V(V({},Hl),{},{id:v,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[g,w]},R={tag:"defs",children:[{tag:"clipPath",attributes:{id:b},children:qI(h)},T]};return r.push(R,{tag:"rect",attributes:V({fill:"currentColor","clip-path":"url(#".concat(b,")"),mask:"url(#".concat(v,")")},Hl)}),{children:r,attributes:i}}}},KI={provides:function(e){var n=!1;dr.matchMedia&&(n=dr.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){var r=[],i={fill:"currentColor"},s={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:V(V({},i),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=V(V({},s),{},{attributeName:"opacity"}),a={tag:"circle",attributes:V(V({},i),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||a.children.push({tag:"animate",attributes:V(V({},s),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:V(V({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(a),r.push({tag:"path",attributes:V(V({},i),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:V(V({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:V(V({},i),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:V(V({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},YI={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-symbol"),s=i===null?!1:i===""?!0:i;return n.symbol=s,n}}}},QI=[KT,MI,LI,UI,FI,HI,zI,WI,GI,KI,YI];lI(QI,{mixoutsTo:$t});$t.noAuto;var My=$t.config,XI=$t.library;$t.dom;var Ya=$t.parse;$t.findIconDefinition;$t.toHtml;var JI=$t.icon;$t.layer;var ZI=$t.text;$t.counter;function ep(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function en(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?ep(Object(n),!0).forEach(function(r){xt(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):ep(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function Qa(t){return Qa=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Qa(t)}function xt(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function e2(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function t2(t,e){if(t==null)return{};var n=e2(t,e),r,i;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(i=0;i<s.length;i++)r=s[i],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}function Bu(t){return n2(t)||r2(t)||i2(t)||s2()}function n2(t){if(Array.isArray(t))return ju(t)}function r2(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function i2(t,e){if(t){if(typeof t=="string")return ju(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return ju(t,e)}}function ju(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function s2(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var o2=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Ly={exports:{}};(function(t){(function(e){var n=function(w,v,b){if(!l(v)||f(v)||h(v)||d(v)||c(v))return v;var T,R=0,U=0;if(u(v))for(T=[],U=v.length;R<U;R++)T.push(n(w,v[R],b));else{T={};for(var P in v)Object.prototype.hasOwnProperty.call(v,P)&&(T[w(P,b)]=n(w,v[P],b))}return T},r=function(w,v){v=v||{};var b=v.separator||"_",T=v.split||/(?=[A-Z])/;return w.split(T).join(b)},i=function(w){return g(w)?w:(w=w.replace(/[\-_\s]+(.)?/g,function(v,b){return b?b.toUpperCase():""}),w.substr(0,1).toLowerCase()+w.substr(1))},s=function(w){var v=i(w);return v.substr(0,1).toUpperCase()+v.substr(1)},o=function(w,v){return r(w,v).toLowerCase()},a=Object.prototype.toString,c=function(w){return typeof w=="function"},l=function(w){return w===Object(w)},u=function(w){return a.call(w)=="[object Array]"},f=function(w){return a.call(w)=="[object Date]"},h=function(w){return a.call(w)=="[object RegExp]"},d=function(w){return a.call(w)=="[object Boolean]"},g=function(w){return w=w-0,w===w},y=function(w,v){var b=v&&"process"in v?v.process:v;return typeof b!="function"?w:function(T,R){return b(T,w,R)}},_={camelize:i,decamelize:o,pascalize:s,depascalize:o,camelizeKeys:function(w,v){return n(y(i,v),w)},decamelizeKeys:function(w,v){return n(y(o,v),w,v)},pascalizeKeys:function(w,v){return n(y(s,v),w)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};t.exports?t.exports=_:e.humps=_})(o2)})(Ly);var a2=Ly.exports,c2=["class","style"];function l2(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var r=n.indexOf(":"),i=a2.camelize(n.slice(0,r)),s=n.slice(r+1).trim();return e[i]=s,e},{})}function u2(t){return t.split(/\s+/).reduce(function(e,n){return e[n]=!0,e},{})}function _h(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var r=(t.children||[]).map(function(c){return _h(c)}),i=Object.keys(t.attributes||{}).reduce(function(c,l){var u=t.attributes[l];switch(l){case"class":c.class=u2(u);break;case"style":c.style=l2(u);break;default:c.attrs[l]=u}return c},{attrs:{},class:{},style:{}});n.class;var s=n.style,o=s===void 0?{}:s,a=t2(n,c2);return ts(t.tag,en(en(en({},e),{},{class:i.class,style:en(en({},i.style),o)},i.attrs),a),r)}var Uy=!1;try{Uy=!0}catch{}function f2(){if(!Uy&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function $s(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?xt({},t,e):{}}function h2(t){var e,n=(e={"fa-spin":t.spin,"fa-pulse":t.pulse,"fa-fw":t.fixedWidth,"fa-border":t.border,"fa-li":t.listItem,"fa-inverse":t.inverse,"fa-flip":t.flip===!0,"fa-flip-horizontal":t.flip==="horizontal"||t.flip==="both","fa-flip-vertical":t.flip==="vertical"||t.flip==="both"},xt(e,"fa-".concat(t.size),t.size!==null),xt(e,"fa-rotate-".concat(t.rotation),t.rotation!==null),xt(e,"fa-pull-".concat(t.pull),t.pull!==null),xt(e,"fa-swap-opacity",t.swapOpacity),xt(e,"fa-bounce",t.bounce),xt(e,"fa-shake",t.shake),xt(e,"fa-beat",t.beat),xt(e,"fa-fade",t.fade),xt(e,"fa-beat-fade",t.beatFade),xt(e,"fa-flash",t.flash),xt(e,"fa-spin-pulse",t.spinPulse),xt(e,"fa-spin-reverse",t.spinReverse),e);return Object.keys(n).map(function(r){return n[r]?r:null}).filter(function(r){return r})}function tp(t){if(t&&Qa(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(Ya.icon)return Ya.icon(t);if(t===null)return null;if(Qa(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}var d2=Yt({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(e){return[!0,!1,"horizontal","vertical","both"].indexOf(e)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(e){return["right","left"].indexOf(e)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(e){return[90,180,270].indexOf(Number.parseInt(e,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(e){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(e)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(e,n){var r=n.attrs,i=ke(function(){return tp(e.icon)}),s=ke(function(){return $s("classes",h2(e))}),o=ke(function(){return $s("transform",typeof e.transform=="string"?Ya.transform(e.transform):e.transform)}),a=ke(function(){return $s("mask",tp(e.mask))}),c=ke(function(){return JI(i.value,en(en(en(en({},s.value),o.value),a.value),{},{symbol:e.symbol,title:e.title}))});sn(c,function(u){if(!u)return f2("Could not find one or more icon(s)",i.value,a.value)},{immediate:!0});var l=ke(function(){return c.value?_h(c.value.abstract[0],{},r):null});return function(){return l.value}}});Yt({name:"FontAwesomeLayers",props:{fixedWidth:{type:Boolean,default:!1}},setup:function(e,n){var r=n.slots,i=My.familyPrefix,s=ke(function(){return["".concat(i,"-layers")].concat(Bu(e.fixedWidth?["".concat(i,"-fw")]:[]))});return function(){return ts("div",{class:s.value},r.default?r.default():[])}}});Yt({name:"FontAwesomeLayersText",props:{value:{type:[String,Number],default:""},transform:{type:[String,Object],default:null},counter:{type:Boolean,default:!1},position:{type:String,default:null,validator:function(e){return["bottom-left","bottom-right","top-left","top-right"].indexOf(e)>-1}}},setup:function(e,n){var r=n.attrs,i=My.familyPrefix,s=ke(function(){return $s("classes",[].concat(Bu(e.counter?["".concat(i,"-layers-counter")]:[]),Bu(e.position?["".concat(i,"-layers-").concat(e.position)]:[])))}),o=ke(function(){return $s("transform",typeof e.transform=="string"?Ya.transform(e.transform):e.transform)}),a=ke(function(){var l=ZI(e.value.toString(),en(en({},o.value),s.value)),u=l.abstract;return e.counter&&(u[0].attributes.class=u[0].attributes.class.replace("fa-layers-text","")),u[0]}),c=ke(function(){return _h(a.value,{},r)});return function(){return c.value}}});var m2={prefix:"fas",iconName:"strikethrough",icon:[512,512,[],"f0cc","M161.3 144c3.2-17.2 14-30.1 33.7-38.6c21.1-9 51.8-12.3 88.6-6.5c11.9 1.9 48.8 9.1 60.1 12c17.1 4.5 34.6-5.6 39.2-22.7s-5.6-34.6-22.7-39.2c-14.3-3.8-53.6-11.4-66.6-13.4c-44.7-7-88.3-4.2-123.7 10.9c-36.5 15.6-64.4 44.8-71.8 87.3c-.1 .6-.2 1.1-.2 1.7c-2.8 23.9 .5 45.6 10.1 64.6c4.5 9 10.2 16.9 16.7 23.9H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H270.1c-.1 0-.3-.1-.4-.1l-1.1-.3c-36-10.8-65.2-19.6-85.2-33.1c-9.3-6.3-15-12.6-18.2-19.1c-3.1-6.1-5.2-14.6-3.8-27.4zM348.9 337.2c2.7 6.5 4.4 15.8 1.9 30.1c-3 17.6-13.8 30.8-33.9 39.4c-21.1 9-51.7 12.3-88.5 6.5c-18-2.9-49.1-13.5-74.4-22.1c-5.6-1.9-11-3.7-15.9-5.4c-16.8-5.6-34.9 3.5-40.5 20.3s3.5 34.9 20.3 40.5c3.6 1.2 7.9 2.7 12.7 4.3l0 0 0 0c24.9 8.5 63.6 21.7 87.6 25.6l0 0 .2 0c44.7 7 88.3 4.2 123.7-10.9c36.5-15.6 64.4-44.8 71.8-87.3c3.6-21 2.7-40.4-3.1-58.1H335.1c7 5.6 11.4 11.2 13.9 17.2z"]},p2={prefix:"fas",iconName:"reply",icon:[512,512,[61714,"mail-reply"],"f3e5","M205 34.8c11.5 5.1 19 16.6 19 29.2v64H336c97.2 0 176 78.8 176 176c0 113.3-81.5 163.9-100.2 174.1c-2.5 1.4-5.3 1.9-8.1 1.9c-10.9 0-19.7-8.9-19.7-19.7c0-7.5 4.3-14.4 9.8-19.5c9.4-8.8 22.2-26.4 22.2-56.7c0-53-43-96-96-96H224v64c0 12.6-7.4 24.1-19 29.2s-25 3-34.4-5.4l-160-144C3.9 225.7 0 217.1 0 208s3.9-17.7 10.6-23.8l160-144c9.4-8.5 22.9-10.6 34.4-5.4z"]},g2={prefix:"fas",iconName:"laptop-code",icon:[640,512,[],"f5fc","M64 96c0-35.3 28.7-64 64-64H512c35.3 0 64 28.7 64 64V352H512V96H128V352H64V96zM0 403.2C0 392.6 8.6 384 19.2 384H620.8c10.6 0 19.2 8.6 19.2 19.2c0 42.4-34.4 76.8-76.8 76.8H76.8C34.4 480 0 445.6 0 403.2zM281 209l-31 31 31 31c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-48-48c-9.4-9.4-9.4-24.6 0-33.9l48-48c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9zM393 175l48 48c9.4 9.4 9.4 24.6 0 33.9l-48 48c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l31-31-31-31c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0z"]},v2={prefix:"fas",iconName:"bars",icon:[448,512,["navicon"],"f0c9","M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"]},y2={prefix:"fas",iconName:"circle-exclamation",icon:[512,512,["exclamation-circle"],"f06a","M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-384c13.3 0 24 10.7 24 24V264c0 13.3-10.7 24-24 24s-24-10.7-24-24V152c0-13.3 10.7-24 24-24zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"]},w2={prefix:"fas",iconName:"heading",icon:[448,512,["header"],"f1dc","M0 64C0 46.3 14.3 32 32 32H80h48c17.7 0 32 14.3 32 32s-14.3 32-32 32H112V208H336V96H320c-17.7 0-32-14.3-32-32s14.3-32 32-32h48 48c17.7 0 32 14.3 32 32s-14.3 32-32 32H400V240 416h16c17.7 0 32 14.3 32 32s-14.3 32-32 32H368 320c-17.7 0-32-14.3-32-32s14.3-32 32-32h16V272H112V416h16c17.7 0 32 14.3 32 32s-14.3 32-32 32H80 32c-17.7 0-32-14.3-32-32s14.3-32 32-32H48V240 96H32C14.3 96 0 81.7 0 64z"]},b2={prefix:"fas",iconName:"highlighter",icon:[576,512,[],"f591","M315 315l158.4-215L444.1 70.6 229 229 315 315zm-187 5l0 0V248.3c0-15.3 7.2-29.6 19.5-38.6L420.6 8.4C428 2.9 437 0 446.2 0c11.4 0 22.4 4.5 30.5 12.6l54.8 54.8c8.1 8.1 12.6 19 12.6 30.5c0 9.2-2.9 18.2-8.4 25.6L334.4 396.5c-9 12.3-23.4 19.5-38.6 19.5H224l-25.4 25.4c-12.5 12.5-32.8 12.5-45.3 0l-50.7-50.7c-12.5-12.5-12.5-32.8 0-45.3L128 320zM7 466.3l63-63 70.6 70.6-31 31c-4.5 4.5-10.6 7-17 7H24c-13.3 0-24-10.7-24-24v-4.7c0-6.4 2.5-12.5 7-17z"]},_2={prefix:"fas",iconName:"underline",icon:[448,512,[],"f0cd","M16 64c0-17.7 14.3-32 32-32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H128V224c0 53 43 96 96 96s96-43 96-96V96H304c-17.7 0-32-14.3-32-32s14.3-32 32-32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H384V224c0 88.4-71.6 160-160 160s-160-71.6-160-160V96H48C30.3 96 16 81.7 16 64zM0 448c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32z"]},E2={prefix:"fas",iconName:"bold",icon:[384,512,[],"f032","M0 64C0 46.3 14.3 32 32 32H80 96 224c70.7 0 128 57.3 128 128c0 31.3-11.3 60.1-30 82.3c37.1 22.4 62 63.1 62 109.7c0 70.7-57.3 128-128 128H96 80 32c-17.7 0-32-14.3-32-32s14.3-32 32-32H48V256 96H32C14.3 96 0 81.7 0 64zM224 224c35.3 0 64-28.7 64-64s-28.7-64-64-64H112V224H224zM112 288V416H256c35.3 0 64-28.7 64-64s-28.7-64-64-64H224 112z"]},T2={prefix:"fas",iconName:"image",icon:[512,512,[],"f03e","M0 96C0 60.7 28.7 32 64 32H448c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zM323.8 202.5c-4.5-6.6-11.9-10.5-19.8-10.5s-15.4 3.9-19.8 10.5l-87 127.6L170.7 297c-4.6-5.7-11.5-9-18.7-9s-14.2 3.3-18.7 9l-64 80c-5.8 7.2-6.9 17.1-2.9 25.4s12.4 13.6 21.6 13.6h96 32H424c8.9 0 17.1-4.9 21.2-12.8s3.6-17.4-1.4-24.7l-120-176zM112 192a48 48 0 1 0 0-96 48 48 0 1 0 0 96z"]},I2={prefix:"fas",iconName:"italic",icon:[384,512,[],"f033","M128 64c0-17.7 14.3-32 32-32H352c17.7 0 32 14.3 32 32s-14.3 32-32 32H293.3L160 416h64c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H90.7L224 96H160c-17.7 0-32-14.3-32-32z"]},k2={prefix:"fas",iconName:"list-ol",icon:[512,512,["list-1-2","list-numeric"],"f0cb","M24 56c0-13.3 10.7-24 24-24H80c13.3 0 24 10.7 24 24V176h16c13.3 0 24 10.7 24 24s-10.7 24-24 24H40c-13.3 0-24-10.7-24-24s10.7-24 24-24H56V80H48C34.7 80 24 69.3 24 56zM86.7 341.2c-6.5-7.4-18.3-6.9-24 1.2L51.5 357.9c-7.7 10.8-22.7 13.3-33.5 5.6s-13.3-22.7-5.6-33.5l11.1-15.6c23.7-33.2 72.3-35.6 99.2-4.9c21.3 24.4 20.8 60.9-1.1 84.7L86.8 432H120c13.3 0 24 10.7 24 24s-10.7 24-24 24H32c-9.5 0-18.2-5.6-22-14.4s-2.1-18.9 4.3-25.9l72-78c5.3-5.8 5.4-14.6 .3-20.5zM224 64H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H224c-17.7 0-32-14.3-32-32s14.3-32 32-32zm0 160H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H224c-17.7 0-32-14.3-32-32s14.3-32 32-32zm0 160H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H224c-17.7 0-32-14.3-32-32s14.3-32 32-32z"]},C2={prefix:"fas",iconName:"code",icon:[640,512,[],"f121","M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3L562.7 256l-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z"]},S2={prefix:"fas",iconName:"arrow-right",icon:[448,512,[8594],"f061","M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"]},A2={prefix:"fas",iconName:"heart",icon:[512,512,[128153,128154,128155,128156,128420,129293,129294,129505,9829,10084,61578],"f004","M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"]},x2={prefix:"fas",iconName:"eye",icon:[576,512,[128065],"f06e","M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z"]},R2={prefix:"fas",iconName:"arrow-left",icon:[448,512,[8592],"f060","M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"]},O2={prefix:"fas",iconName:"caret-down",icon:[320,512,[],"f0d7","M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"]},N2={prefix:"fas",iconName:"ellipsis",icon:[448,512,["ellipsis-h"],"f141","M0 256a56 56 0 1 1 112 0A56 56 0 1 1 0 256zm160 0a56 56 0 1 1 112 0 56 56 0 1 1 -112 0zm216-56a56 56 0 1 1 0 112 56 56 0 1 1 0-112z"]},P2={prefix:"fas",iconName:"paragraph",icon:[448,512,[182],"f1dd","M192 32h64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H384l0 352c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-352H288V448c0 17.7-14.3 32-32 32s-32-14.3-32-32V352H192c-88.4 0-160-71.6-160-160s71.6-160 160-160z"]},D2={prefix:"fas",iconName:"link",icon:[640,512,[128279,"chain"],"f0c1","M562.8 267.7c56.5-56.5 56.5-148 0-204.5c-50-50-128.8-56.5-186.3-15.4l-1.6 1.1c-14.4 10.3-17.7 30.3-7.4 44.6s30.3 17.7 44.6 7.4l1.6-1.1c32.1-22.9 76-19.3 103.8 8.6c31.5 31.5 31.5 82.5 0 114L405.3 334.8c-31.5 31.5-82.5 31.5-114 0c-27.9-27.9-31.5-71.8-8.6-103.8l1.1-1.6c10.3-14.4 6.9-34.4-7.4-44.6s-34.4-6.9-44.6 7.4l-1.1 1.6C189.5 251.2 196 330 246 380c56.5 56.5 148 56.5 204.5 0L562.8 267.7zM43.2 244.3c-56.5 56.5-56.5 148 0 204.5c50 50 128.8 56.5 186.3 15.4l1.6-1.1c14.4-10.3 17.7-30.3 7.4-44.6s-30.3-17.7-44.6-7.4l-1.6 1.1c-32.1 22.9-76 19.3-103.8-8.6C57 372 57 321 88.5 289.5L200.7 177.2c31.5-31.5 82.5-31.5 114 0c27.9 27.9 31.5 71.8 8.6 103.9l-1.1 1.6c-10.3 14.4-6.9 34.4 7.4 44.6s34.4 6.9 44.6-7.4l1.1-1.6C416.5 260.8 410 182 360 132c-56.5-56.5-148-56.5-204.5 0L43.2 244.3z"]},M2={prefix:"fas",iconName:"magnifying-glass",icon:[512,512,[128269,"search"],"f002","M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"]},L2={prefix:"fas",iconName:"list-ul",icon:[512,512,["list-dots"],"f0ca","M64 144a48 48 0 1 0 0-96 48 48 0 1 0 0 96zM192 64c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zM64 464a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm48-208a48 48 0 1 0 -96 0 48 48 0 1 0 96 0z"]},U2={prefix:"fas",iconName:"quote-left",icon:[448,512,[8220,"quote-left-alt"],"f10d","M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z"]},F2={prefix:"fas",iconName:"image-portrait",icon:[384,512,["portrait"],"f3e0","M384 64c0-35.3-28.7-64-64-64H64C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64l0-384zM128 192a64 64 0 1 1 128 0 64 64 0 1 1 -128 0zM80 356.6c0-37.9 30.7-68.6 68.6-68.6h86.9c37.9 0 68.6 30.7 68.6 68.6c0 15.1-12.3 27.4-27.4 27.4H107.4C92.3 384 80 371.7 80 356.6z"]},$2={prefix:"fas",iconName:"book-open",icon:[576,512,[128214,128366],"f518","M249.6 471.5c10.8 3.8 22.4-4.1 22.4-15.5V78.6c0-4.2-1.6-8.4-5-11C247.4 52 202.4 32 144 32C93.5 32 46.3 45.3 18.1 56.1C6.8 60.5 0 71.7 0 83.8V454.1c0 11.9 12.8 20.2 24.1 16.5C55.6 460.1 105.5 448 144 448c33.9 0 79 14 105.6 23.5zm76.8 0C353 462 398.1 448 432 448c38.5 0 88.4 12.1 119.9 22.6c11.3 3.8 24.1-4.6 24.1-16.5V83.8c0-12.1-6.8-23.3-18.1-27.6C529.7 45.3 482.5 32 432 32c-58.4 0-103.4 20-123 35.6c-3.3 2.6-5 6.8-5 11V456c0 11.4 11.7 19.3 22.4 15.5z"]},V2={prefix:"fas",iconName:"circle-xmark",icon:[512,512,[61532,"times-circle","xmark-circle"],"f057","M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z"]},B2=V2,j2={prefix:"fas",iconName:"x",icon:[384,512,[120],"58","M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z"]};const H2="modulepreload",z2=function(t){return"/"+t},np={},ri=function(e,n,r){if(!n||n.length===0)return e();const i=document.getElementsByTagName("link");return Promise.all(n.map(s=>{if(s=z2(s),s in np)return;np[s]=!0;const o=s.endsWith(".css"),a=o?'[rel="stylesheet"]':"";if(!!r)for(let u=i.length-1;u>=0;u--){const f=i[u];if(f.href===s&&(!o||f.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${s}"]${a}`))return;const l=document.createElement("link");if(l.rel=o?"stylesheet":H2,o||(l.as="script",l.crossOrigin=""),l.href=s,document.head.appendChild(l),o)return new Promise((u,f)=>{l.addEventListener("load",u),l.addEventListener("error",()=>f(new Error(`Unable to preload CSS for ${s}`)))})})).then(()=>e())};/*!
  * vue-router v4.1.6
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const mi=typeof window<"u";function W2(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const Te=Object.assign;function zl(t,e){const n={};for(const r in e){const i=e[r];n[r]=on(i)?i.map(t):t(i)}return n}const Vs=()=>{},on=Array.isArray,q2=/\/$/,G2=t=>t.replace(q2,"");function Wl(t,e,n="/"){let r,i={},s="",o="";const a=e.indexOf("#");let c=e.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(r=e.slice(0,c),s=e.slice(c+1,a>-1?a:e.length),i=t(s)),a>-1&&(r=r||e.slice(0,a),o=e.slice(a,e.length)),r=X2(r??e,n),{fullPath:r+(s&&"?")+s+o,path:r,query:i,hash:o}}function K2(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function rp(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function Y2(t,e,n){const r=e.matched.length-1,i=n.matched.length-1;return r>-1&&r===i&&Ui(e.matched[r],n.matched[i])&&Fy(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Ui(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Fy(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!Q2(t[n],e[n]))return!1;return!0}function Q2(t,e){return on(t)?ip(t,e):on(e)?ip(e,t):t===e}function ip(t,e){return on(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function X2(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/");let i=n.length-1,s,o;for(s=0;s<r.length;s++)if(o=r[s],o!==".")if(o==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(s-(s===r.length?1:0)).join("/")}var co;(function(t){t.pop="pop",t.push="push"})(co||(co={}));var Bs;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Bs||(Bs={}));function J2(t){if(!t)if(mi){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),G2(t)}const Z2=/^[^#]+#/;function ek(t,e){return t.replace(Z2,"#")+e}function tk(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const jc=()=>({left:window.pageXOffset,top:window.pageYOffset});function nk(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),i=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;e=tk(i,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function sp(t,e){return(history.state?history.state.position-e:-1)+t}const Hu=new Map;function rk(t,e){Hu.set(t,e)}function ik(t){const e=Hu.get(t);return Hu.delete(t),e}let sk=()=>location.protocol+"//"+location.host;function $y(t,e){const{pathname:n,search:r,hash:i}=e,s=t.indexOf("#");if(s>-1){let a=i.includes(t.slice(s))?t.slice(s).length:1,c=i.slice(a);return c[0]!=="/"&&(c="/"+c),rp(c,"")}return rp(n,t)+r+i}function ok(t,e,n,r){let i=[],s=[],o=null;const a=({state:h})=>{const d=$y(t,location),g=n.value,y=e.value;let _=0;if(h){if(n.value=d,e.value=h,o&&o===g){o=null;return}_=y?h.position-y.position:0}else r(d);i.forEach(w=>{w(n.value,g,{delta:_,type:co.pop,direction:_?_>0?Bs.forward:Bs.back:Bs.unknown})})};function c(){o=n.value}function l(h){i.push(h);const d=()=>{const g=i.indexOf(h);g>-1&&i.splice(g,1)};return s.push(d),d}function u(){const{history:h}=window;h.state&&h.replaceState(Te({},h.state,{scroll:jc()}),"")}function f(){for(const h of s)h();s=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u),{pauseListeners:c,listen:l,destroy:f}}function op(t,e,n,r=!1,i=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:i?jc():null}}function ak(t){const{history:e,location:n}=window,r={value:$y(t,n)},i={value:e.state};i.value||s(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function s(c,l,u){const f=t.indexOf("#"),h=f>-1?(n.host&&document.querySelector("base")?t:t.slice(f))+c:sk()+t+c;try{e[u?"replaceState":"pushState"](l,"",h),i.value=l}catch(d){console.error(d),n[u?"replace":"assign"](h)}}function o(c,l){const u=Te({},e.state,op(i.value.back,c,i.value.forward,!0),l,{position:i.value.position});s(c,u,!0),r.value=c}function a(c,l){const u=Te({},i.value,e.state,{forward:c,scroll:jc()});s(u.current,u,!0);const f=Te({},op(r.value,c,null),{position:u.position+1},l);s(c,f,!1),r.value=c}return{location:r,state:i,push:a,replace:o}}function ck(t){t=J2(t);const e=ak(t),n=ok(t,e.state,e.location,e.replace);function r(s,o=!0){o||n.pauseListeners(),history.go(s)}const i=Te({location:"",base:t,go:r,createHref:ek.bind(null,t)},e,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>e.state.value}),i}function lk(t){return t=location.host?t||location.pathname+location.search:"",t.includes("#")||(t+="#"),ck(t)}function uk(t){return typeof t=="string"||t&&typeof t=="object"}function Vy(t){return typeof t=="string"||typeof t=="symbol"}const Gn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},By=Symbol("");var ap;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(ap||(ap={}));function Fi(t,e){return Te(new Error,{type:t,[By]:!0},e)}function In(t,e){return t instanceof Error&&By in t&&(e==null||!!(t.type&e))}const cp="[^/]+?",fk={sensitive:!1,strict:!1,start:!0,end:!0},hk=/[.+*?^${}()[\]/\\]/g;function dk(t,e){const n=Te({},fk,e),r=[];let i=n.start?"^":"";const s=[];for(const l of t){const u=l.length?[]:[90];n.strict&&!l.length&&(i+="/");for(let f=0;f<l.length;f++){const h=l[f];let d=40+(n.sensitive?.25:0);if(h.type===0)f||(i+="/"),i+=h.value.replace(hk,"\\$&"),d+=40;else if(h.type===1){const{value:g,repeatable:y,optional:_,regexp:w}=h;s.push({name:g,repeatable:y,optional:_});const v=w||cp;if(v!==cp){d+=10;try{new RegExp(`(${v})`)}catch(T){throw new Error(`Invalid custom RegExp for param "${g}" (${v}): `+T.message)}}let b=y?`((?:${v})(?:/(?:${v}))*)`:`(${v})`;f||(b=_&&l.length<2?`(?:/${b})`:"/"+b),_&&(b+="?"),i+=b,d+=20,_&&(d+=-8),y&&(d+=-20),v===".*"&&(d+=-50)}u.push(d)}r.push(u)}if(n.strict&&n.end){const l=r.length-1;r[l][r[l].length-1]+=.7000000000000001}n.strict||(i+="/?"),n.end?i+="$":n.strict&&(i+="(?:/|$)");const o=new RegExp(i,n.sensitive?"":"i");function a(l){const u=l.match(o),f={};if(!u)return null;for(let h=1;h<u.length;h++){const d=u[h]||"",g=s[h-1];f[g.name]=d&&g.repeatable?d.split("/"):d}return f}function c(l){let u="",f=!1;for(const h of t){(!f||!u.endsWith("/"))&&(u+="/"),f=!1;for(const d of h)if(d.type===0)u+=d.value;else if(d.type===1){const{value:g,repeatable:y,optional:_}=d,w=g in l?l[g]:"";if(on(w)&&!y)throw new Error(`Provided param "${g}" is an array but it is not repeatable (* or + modifiers)`);const v=on(w)?w.join("/"):w;if(!v)if(_)h.length<2&&(u.endsWith("/")?u=u.slice(0,-1):f=!0);else throw new Error(`Missing required param "${g}"`);u+=v}}return u||"/"}return{re:o,score:r,keys:s,parse:a,stringify:c}}function mk(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function pk(t,e){let n=0;const r=t.score,i=e.score;for(;n<r.length&&n<i.length;){const s=mk(r[n],i[n]);if(s)return s;n++}if(Math.abs(i.length-r.length)===1){if(lp(r))return 1;if(lp(i))return-1}return i.length-r.length}function lp(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const gk={type:0,value:""},vk=/[a-zA-Z0-9_]/;function yk(t){if(!t)return[[]];if(t==="/")return[[gk]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(d){throw new Error(`ERR (${n})/"${l}": ${d}`)}let n=0,r=n;const i=[];let s;function o(){s&&i.push(s),s=[]}let a=0,c,l="",u="";function f(){l&&(n===0?s.push({type:0,value:l}):n===1||n===2||n===3?(s.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:l,regexp:u,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),l="")}function h(){l+=c}for(;a<t.length;){if(c=t[a++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(l&&f(),o()):c===":"?(f(),n=1):h();break;case 4:h(),n=r;break;case 1:c==="("?n=2:vk.test(c)?h():(f(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+c:n=3:u+=c;break;case 3:f(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${l}"`),f(),o(),i}function wk(t,e,n){const r=dk(yk(t.path),n),i=Te(r,{record:t,parent:e,children:[],alias:[]});return e&&!i.record.aliasOf==!e.record.aliasOf&&e.children.push(i),i}function bk(t,e){const n=[],r=new Map;e=hp({strict:!1,end:!0,sensitive:!1},e);function i(u){return r.get(u)}function s(u,f,h){const d=!h,g=_k(u);g.aliasOf=h&&h.record;const y=hp(e,u),_=[g];if("alias"in u){const b=typeof u.alias=="string"?[u.alias]:u.alias;for(const T of b)_.push(Te({},g,{components:h?h.record.components:g.components,path:T,aliasOf:h?h.record:g}))}let w,v;for(const b of _){const{path:T}=b;if(f&&T[0]!=="/"){const R=f.record.path,U=R[R.length-1]==="/"?"":"/";b.path=f.record.path+(T&&U+T)}if(w=wk(b,f,y),h?h.alias.push(w):(v=v||w,v!==w&&v.alias.push(w),d&&u.name&&!fp(w)&&o(u.name)),g.children){const R=g.children;for(let U=0;U<R.length;U++)s(R[U],w,h&&h.children[U])}h=h||w,(w.record.components&&Object.keys(w.record.components).length||w.record.name||w.record.redirect)&&c(w)}return v?()=>{o(v)}:Vs}function o(u){if(Vy(u)){const f=r.get(u);f&&(r.delete(u),n.splice(n.indexOf(f),1),f.children.forEach(o),f.alias.forEach(o))}else{const f=n.indexOf(u);f>-1&&(n.splice(f,1),u.record.name&&r.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function c(u){let f=0;for(;f<n.length&&pk(u,n[f])>=0&&(u.record.path!==n[f].record.path||!jy(u,n[f]));)f++;n.splice(f,0,u),u.record.name&&!fp(u)&&r.set(u.record.name,u)}function l(u,f){let h,d={},g,y;if("name"in u&&u.name){if(h=r.get(u.name),!h)throw Fi(1,{location:u});y=h.record.name,d=Te(up(f.params,h.keys.filter(v=>!v.optional).map(v=>v.name)),u.params&&up(u.params,h.keys.map(v=>v.name))),g=h.stringify(d)}else if("path"in u)g=u.path,h=n.find(v=>v.re.test(g)),h&&(d=h.parse(g),y=h.record.name);else{if(h=f.name?r.get(f.name):n.find(v=>v.re.test(f.path)),!h)throw Fi(1,{location:u,currentLocation:f});y=h.record.name,d=Te({},f.params,u.params),g=h.stringify(d)}const _=[];let w=h;for(;w;)_.unshift(w.record),w=w.parent;return{name:y,path:g,params:d,matched:_,meta:Tk(_)}}return t.forEach(u=>s(u)),{addRoute:s,resolve:l,removeRoute:o,getRoutes:a,getRecordMatcher:i}}function up(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function _k(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:Ek(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function Ek(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="boolean"?n:n[r];return e}function fp(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function Tk(t){return t.reduce((e,n)=>Te(e,n.meta),{})}function hp(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function jy(t,e){return e.children.some(n=>n===t||jy(t,n))}const Hy=/#/g,Ik=/&/g,kk=/\//g,Ck=/=/g,Sk=/\?/g,zy=/\+/g,Ak=/%5B/g,xk=/%5D/g,Wy=/%5E/g,Rk=/%60/g,qy=/%7B/g,Ok=/%7C/g,Gy=/%7D/g,Nk=/%20/g;function Eh(t){return encodeURI(""+t).replace(Ok,"|").replace(Ak,"[").replace(xk,"]")}function Pk(t){return Eh(t).replace(qy,"{").replace(Gy,"}").replace(Wy,"^")}function zu(t){return Eh(t).replace(zy,"%2B").replace(Nk,"+").replace(Hy,"%23").replace(Ik,"%26").replace(Rk,"`").replace(qy,"{").replace(Gy,"}").replace(Wy,"^")}function Dk(t){return zu(t).replace(Ck,"%3D")}function Mk(t){return Eh(t).replace(Hy,"%23").replace(Sk,"%3F")}function Lk(t){return t==null?"":Mk(t).replace(kk,"%2F")}function Xa(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function Uk(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let i=0;i<r.length;++i){const s=r[i].replace(zy," "),o=s.indexOf("="),a=Xa(o<0?s:s.slice(0,o)),c=o<0?null:Xa(s.slice(o+1));if(a in e){let l=e[a];on(l)||(l=e[a]=[l]),l.push(c)}else e[a]=c}return e}function dp(t){let e="";for(let n in t){const r=t[n];if(n=Dk(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(on(r)?r.map(s=>s&&zu(s)):[r&&zu(r)]).forEach(s=>{s!==void 0&&(e+=(e.length?"&":"")+n,s!=null&&(e+="="+s))})}return e}function Fk(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=on(r)?r.map(i=>i==null?null:""+i):r==null?r:""+r)}return e}const $k=Symbol(""),mp=Symbol(""),Hc=Symbol(""),Th=Symbol(""),Wu=Symbol("");function ys(){let t=[];function e(r){return t.push(r),()=>{const i=t.indexOf(r);i>-1&&t.splice(i,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function Zn(t,e,n,r,i){const s=r&&(r.enterCallbacks[i]=r.enterCallbacks[i]||[]);return()=>new Promise((o,a)=>{const c=f=>{f===!1?a(Fi(4,{from:n,to:e})):f instanceof Error?a(f):uk(f)?a(Fi(2,{from:e,to:f})):(s&&r.enterCallbacks[i]===s&&typeof f=="function"&&s.push(f),o())},l=t.call(r&&r.instances[i],e,n,c);let u=Promise.resolve(l);t.length<3&&(u=u.then(c)),u.catch(f=>a(f))})}function ql(t,e,n,r){const i=[];for(const s of t)for(const o in s.components){let a=s.components[o];if(!(e!=="beforeRouteEnter"&&!s.instances[o]))if(Vk(a)){const l=(a.__vccOpts||a)[e];l&&i.push(Zn(l,n,r,s,o))}else{let c=a();i.push(()=>c.then(l=>{if(!l)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${s.path}"`));const u=W2(l)?l.default:l;s.components[o]=u;const h=(u.__vccOpts||u)[e];return h&&Zn(h,n,r,s,o)()}))}}return i}function Vk(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function pp(t){const e=zt(Hc),n=zt(Th),r=ke(()=>e.resolve($e(t.to))),i=ke(()=>{const{matched:c}=r.value,{length:l}=c,u=c[l-1],f=n.matched;if(!u||!f.length)return-1;const h=f.findIndex(Ui.bind(null,u));if(h>-1)return h;const d=gp(c[l-2]);return l>1&&gp(u)===d&&f[f.length-1].path!==d?f.findIndex(Ui.bind(null,c[l-2])):h}),s=ke(()=>i.value>-1&&zk(n.params,r.value.params)),o=ke(()=>i.value>-1&&i.value===n.matched.length-1&&Fy(n.params,r.value.params));function a(c={}){return Hk(c)?e[$e(t.replace)?"replace":"push"]($e(t.to)).catch(Vs):Promise.resolve()}return{route:r,href:ke(()=>r.value.href),isActive:s,isExactActive:o,navigate:a}}const Bk=Yt({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:pp,setup(t,{slots:e}){const n=es(pp(t)),{options:r}=zt(Hc),i=ke(()=>({[vp(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[vp(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const s=e.default&&e.default(n);return t.custom?s:ts("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:i.value},s)}}}),jk=Bk;function Hk(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function zk(t,e){for(const n in e){const r=e[n],i=t[n];if(typeof r=="string"){if(r!==i)return!1}else if(!on(i)||i.length!==r.length||r.some((s,o)=>s!==i[o]))return!1}return!0}function gp(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const vp=(t,e,n)=>t??e??n,Wk=Yt({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=zt(Wu),i=ke(()=>t.route||r.value),s=zt(mp,0),o=ke(()=>{let l=$e(s);const{matched:u}=i.value;let f;for(;(f=u[l])&&!f.components;)l++;return l}),a=ke(()=>i.value.matched[o.value]);Ca(mp,ke(()=>o.value+1)),Ca($k,a),Ca(Wu,i);const c=ut();return sn(()=>[c.value,a.value,t.name],([l,u,f],[h,d,g])=>{u&&(u.instances[f]=l,d&&d!==u&&l&&l===h&&(u.leaveGuards.size||(u.leaveGuards=d.leaveGuards),u.updateGuards.size||(u.updateGuards=d.updateGuards))),l&&u&&(!d||!Ui(u,d)||!h)&&(u.enterCallbacks[f]||[]).forEach(y=>y(l))},{flush:"post"}),()=>{const l=i.value,u=t.name,f=a.value,h=f&&f.components[u];if(!h)return yp(n.default,{Component:h,route:l});const d=f.props[u],g=d?d===!0?l.params:typeof d=="function"?d(l):d:null,_=ts(h,Te({},g,e,{onVnodeUnmounted:w=>{w.component.isUnmounted&&(f.instances[u]=null)},ref:c}));return yp(n.default,{Component:_,route:l})||_}}});function yp(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const qk=Wk;function Gk(t){const e=bk(t.routes,t),n=t.parseQuery||Uk,r=t.stringifyQuery||dp,i=t.history,s=ys(),o=ys(),a=ys(),c=y_(Gn);let l=Gn;mi&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=zl.bind(null,C=>""+C),f=zl.bind(null,Lk),h=zl.bind(null,Xa);function d(C,$){let L,Y;return Vy(C)?(L=e.getRecordMatcher(C),Y=$):Y=C,e.addRoute(Y,L)}function g(C){const $=e.getRecordMatcher(C);$&&e.removeRoute($)}function y(){return e.getRoutes().map(C=>C.record)}function _(C){return!!e.getRecordMatcher(C)}function w(C,$){if($=Te({},$||c.value),typeof C=="string"){const m=Wl(n,C,$.path),p=e.resolve({path:m.path},$),E=i.createHref(m.fullPath);return Te(m,p,{params:h(p.params),hash:Xa(m.hash),redirectedFrom:void 0,href:E})}let L;if("path"in C)L=Te({},C,{path:Wl(n,C.path,$.path).path});else{const m=Te({},C.params);for(const p in m)m[p]==null&&delete m[p];L=Te({},C,{params:f(C.params)}),$.params=f($.params)}const Y=e.resolve(L,$),pe=C.hash||"";Y.params=u(h(Y.params));const Fe=K2(r,Te({},C,{hash:Pk(pe),path:Y.path})),ce=i.createHref(Fe);return Te({fullPath:Fe,hash:pe,query:r===dp?Fk(C.query):C.query||{}},Y,{redirectedFrom:void 0,href:ce})}function v(C){return typeof C=="string"?Wl(n,C,c.value.path):Te({},C)}function b(C,$){if(l!==C)return Fi(8,{from:$,to:C})}function T(C){return P(C)}function R(C){return T(Te(v(C),{replace:!0}))}function U(C){const $=C.matched[C.matched.length-1];if($&&$.redirect){const{redirect:L}=$;let Y=typeof L=="function"?L(C):L;return typeof Y=="string"&&(Y=Y.includes("?")||Y.includes("#")?Y=v(Y):{path:Y},Y.params={}),Te({query:C.query,hash:C.hash,params:"path"in Y?{}:C.params},Y)}}function P(C,$){const L=l=w(C),Y=c.value,pe=C.state,Fe=C.force,ce=C.replace===!0,m=U(L);if(m)return P(Te(v(m),{state:typeof m=="object"?Te({},pe,m.state):pe,force:Fe,replace:ce}),$||L);const p=L;p.redirectedFrom=$;let E;return!Fe&&Y2(r,Y,L)&&(E=Fi(16,{to:p,from:Y}),kr(Y,Y,!0,!1)),(E?Promise.resolve(E):H(p,Y)).catch(I=>In(I)?In(I,2)?I:Qt(I):ye(I,p,Y)).then(I=>{if(I){if(In(I,2))return P(Te({replace:ce},v(I.to),{state:typeof I.to=="object"?Te({},pe,I.to.state):pe,force:Fe}),$||p)}else I=le(p,Y,!0,ce,pe);return K(p,Y,I),I})}function A(C,$){const L=b(C,$);return L?Promise.reject(L):Promise.resolve()}function H(C,$){let L;const[Y,pe,Fe]=Kk(C,$);L=ql(Y.reverse(),"beforeRouteLeave",C,$);for(const m of Y)m.leaveGuards.forEach(p=>{L.push(Zn(p,C,$))});const ce=A.bind(null,C,$);return L.push(ce),fi(L).then(()=>{L=[];for(const m of s.list())L.push(Zn(m,C,$));return L.push(ce),fi(L)}).then(()=>{L=ql(pe,"beforeRouteUpdate",C,$);for(const m of pe)m.updateGuards.forEach(p=>{L.push(Zn(p,C,$))});return L.push(ce),fi(L)}).then(()=>{L=[];for(const m of C.matched)if(m.beforeEnter&&!$.matched.includes(m))if(on(m.beforeEnter))for(const p of m.beforeEnter)L.push(Zn(p,C,$));else L.push(Zn(m.beforeEnter,C,$));return L.push(ce),fi(L)}).then(()=>(C.matched.forEach(m=>m.enterCallbacks={}),L=ql(Fe,"beforeRouteEnter",C,$),L.push(ce),fi(L))).then(()=>{L=[];for(const m of o.list())L.push(Zn(m,C,$));return L.push(ce),fi(L)}).catch(m=>In(m,8)?m:Promise.reject(m))}function K(C,$,L){for(const Y of a.list())Y(C,$,L)}function le(C,$,L,Y,pe){const Fe=b(C,$);if(Fe)return Fe;const ce=$===Gn,m=mi?history.state:{};L&&(Y||ce?i.replace(C.fullPath,Te({scroll:ce&&m&&m.scroll},pe)):i.push(C.fullPath,pe)),c.value=C,kr(C,$,L,ce),Qt()}let j;function _e(){j||(j=i.listen((C,$,L)=>{if(!Xo.listening)return;const Y=w(C),pe=U(Y);if(pe){P(Te(pe,{replace:!0}),Y).catch(Vs);return}l=Y;const Fe=c.value;mi&&rk(sp(Fe.fullPath,L.delta),jc()),H(Y,Fe).catch(ce=>In(ce,12)?ce:In(ce,2)?(P(ce.to,Y).then(m=>{In(m,20)&&!L.delta&&L.type===co.pop&&i.go(-1,!1)}).catch(Vs),Promise.reject()):(L.delta&&i.go(-L.delta,!1),ye(ce,Y,Fe))).then(ce=>{ce=ce||le(Y,Fe,!1),ce&&(L.delta&&!In(ce,8)?i.go(-L.delta,!1):L.type===co.pop&&In(ce,20)&&i.go(-1,!1)),K(Y,Fe,ce)}).catch(Vs)}))}let xe=ys(),he=ys(),ve;function ye(C,$,L){Qt(C);const Y=he.list();return Y.length?Y.forEach(pe=>pe(C,$,L)):console.error(C),Promise.reject(C)}function Ce(){return ve&&c.value!==Gn?Promise.resolve():new Promise((C,$)=>{xe.add([C,$])})}function Qt(C){return ve||(ve=!C,_e(),xe.list().forEach(([$,L])=>C?L(C):$()),xe.reset()),C}function kr(C,$,L,Y){const{scrollBehavior:pe}=t;if(!mi||!pe)return Promise.resolve();const Fe=!L&&ik(sp(C.fullPath,0))||(Y||!L)&&history.state&&history.state.scroll||null;return Yf().then(()=>pe(C,$,Fe)).then(ce=>ce&&nk(ce)).catch(ce=>ye(ce,C,$))}const Xt=C=>i.go(C);let At;const ci=new Set,Xo={currentRoute:c,listening:!0,addRoute:d,removeRoute:g,hasRoute:_,getRoutes:y,resolve:w,options:t,push:T,replace:R,go:Xt,back:()=>Xt(-1),forward:()=>Xt(1),beforeEach:s.add,beforeResolve:o.add,afterEach:a.add,onError:he.add,isReady:Ce,install(C){const $=this;C.component("RouterLink",jk),C.component("RouterView",qk),C.config.globalProperties.$router=$,Object.defineProperty(C.config.globalProperties,"$route",{enumerable:!0,get:()=>$e(c)}),mi&&!At&&c.value===Gn&&(At=!0,T(i.location).catch(pe=>{}));const L={};for(const pe in Gn)L[pe]=ke(()=>c.value[pe]);C.provide(Hc,$),C.provide(Th,es(L)),C.provide(Wu,c);const Y=C.unmount;ci.add(C),C.unmount=function(){ci.delete(C),ci.size<1&&(l=Gn,j&&j(),j=null,c.value=Gn,At=!1,ve=!1),Y()}}};return Xo}function fi(t){return t.reduce((e,n)=>e.then(()=>n()),Promise.resolve())}function Kk(t,e){const n=[],r=[],i=[],s=Math.max(e.matched.length,t.matched.length);for(let o=0;o<s;o++){const a=e.matched[o];a&&(t.matched.find(l=>Ui(l,a))?r.push(a):n.push(a));const c=t.matched[o];c&&(e.matched.find(l=>Ui(l,c))||i.push(c))}return[n,r,i]}function EL(){return zt(Hc)}function Yk(){return zt(Th)}const Qk="/assets/hero-f77533c6.jpg",Xk=(t,e)=>{const r=(t.indexOf(e)+1)%t.length;return t[r]},Ih=t=>(Xf("data-v-8707800e"),t=t(),Jf(),t),Jk={class:"hero"},Zk={class:"container"},eC={class:"description"},tC=Ih(()=>ae("br",null,null,-1)),nC=Ih(()=>ae("p",null," Блог о веб разработке, дизайне и о многом другом. Просто о сложном! ",-1)),rC=Ih(()=>ae("div",{class:"img-container"},[ae("img",{src:Qk,alt:"Hero image"})],-1)),iC=Yt({__name:"Hero",setup(t){const e=ut("Создавай");let n=ut();return Oc(()=>{n.value=setInterval(()=>{const i=ut(["Создавай","Делись","Узнавай"]);e.value=Xk(i.value,e.value)},2700)}),Nc(()=>{clearInterval(n.value)}),(i,s)=>{const o=Zs("router-link");return Ye(),jt("section",Jk,[ae("div",Zk,[ae("div",eC,[ae("h1",null,[ae("span",null,[Ct(un(e.value)+" ",1),tC]),Ct(" вместе с нами! ")]),nC,Ie(o,{to:"/all-posts",type:"button",tabindex:"0",class:"btn"},{default:Dt(()=>[Ct("Перейти к постам")]),_:1})]),rC])])}}});const rs=(t,e)=>{const n=t.__vccOpts||t;for(const[r,i]of e)n[r]=i;return n},sC=rs(iC,[["__scopeId","data-v-8707800e"]]),oC={class:"post-item"},aC={class:"container"},cC={class:"description"},lC={class:"tags"},uC={class:"img-container"},fC=["src"],hC={class:"read"},dC={class:"credentials"},mC={class:"posted"},pC={class:"author"},gC=Yt({__name:"PostItem",props:{post:{type:Object,required:!0}},setup(t){return(e,n)=>{const r=Zs("router-link");return Ye(),jt("div",oC,[ae("div",aC,[ae("div",cC,[Ie(r,{to:{name:"Post",params:{id:t.post.id}},class:"heading"},{default:Dt(()=>[Ct(un(t.post.title),1)]),_:1},8,["to"]),ae("ul",lC,[(Ye(!0),jt(ct,null,Uv(t.post.tags,i=>(Ye(),ar(r,{to:{name:"AllPosts",params:{tag:i}},class:"tag",key:i},{default:Dt(()=>[Ct(" #"+un(i),1)]),_:2},1032,["to"]))),128))])]),ae("div",uC,[ae("img",{src:t.post.imageUrl,alt:""},null,8,fC),ae("div",hC,[Ie(r,{tabindex:"0",class:"link",to:{name:"Post",params:{id:t.post.id}}},{default:Dt(()=>[Ct(" Прочитать ")]),_:1},8,["to"])])]),ae("div",dC,[ae("div",mC,[Ct(" Создан: "),ae("span",null,un(t.post.createdAt),1)]),ae("div",pC,[Ct(" Автор: "),ae("span",null,un(t.post.userInfo.author),1)])])])])}}});const vC=rs(gC,[["__scopeId","data-v-862a3cfa"]]),yC=Yt({__name:"Posts",props:{posts:{type:Array}},setup(t){return(e,n)=>(Ye(!0),jt(ct,null,Uv(t.posts,r=>(Ye(),ar(vC,{key:r.id,post:r},null,8,["post"]))),128))}}),wC="/assets/instagram-b2328e32.svg",bC="/assets/vk-1f2375f6.svg",_C="/assets/telegram-6cd4bc30.svg";const EC={},TC=bE('<div class="container" data-v-71452135><p data-v-71452135>Для сотрудничество напишите в мессенджерах</p><div class="icons" data-v-71452135><a target="_blank" href="https://instagram.com/shatlykabdullayew" data-v-71452135><img src="'+wC+'" alt="instagram" data-v-71452135></a><a target="_blank" href="https://vk.com/shatlyk99" data-v-71452135><img src="'+bC+'" alt="telegram" data-v-71452135></a><a target="_blank" href="https://t.me/sh_1415926535" data-v-71452135><img src="'+_C+'" alt="vk" data-v-71452135></a></div></div>',1),IC=[TC];function kC(t,e){return Ye(),jt("footer",null,IC)}const CC=rs(EC,[["render",kC],["__scopeId","data-v-71452135"]]);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ky=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},SC=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],c=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Yy={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,c=i+2<t.length,l=c?t[i+2]:0,u=s>>2,f=(s&3)<<4|a>>4;let h=(a&15)<<2|l>>6,d=l&63;c||(d=64,o||(h=64)),r.push(n[u],n[f],n[h],n[d])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Ky(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):SC(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const l=i<t.length?n[t.charAt(i)]:64;++i;const f=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||l==null||f==null)throw new AC;const h=s<<2|a>>4;if(r.push(h),l!==64){const d=a<<4&240|l>>2;if(r.push(d),f!==64){const g=l<<6&192|f;r.push(g)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class AC extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const xC=function(t){const e=Ky(t);return Yy.encodeByteArray(e,!0)},Ja=function(t){return xC(t).replace(/\./g,"")},Qy=function(t){try{return Yy.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RC(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OC=()=>RC().__FIREBASE_DEFAULTS__,NC=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},PC=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Qy(t[1]);return e&&JSON.parse(e)},zc=()=>{try{return OC()||NC()||PC()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Xy=t=>{var e,n;return(n=(e=zc())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Jy=t=>{const e=Xy(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},DC=()=>{var t;return(t=zc())===null||t===void 0?void 0:t.config},Zy=t=>{var e;return(e=zc())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MC{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function e0(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[Ja(JSON.stringify(n)),Ja(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _t(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function LC(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(_t())}function UC(){var t;const e=(t=zc())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function FC(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function $C(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function VC(){const t=_t();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function BC(){try{return typeof indexedDB=="object"}catch{return!1}}function jC(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HC="FirebaseError";class Tn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=HC,Object.setPrototypeOf(this,Tn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ao.prototype.create)}}class Ao{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?zC(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Tn(i,a,r)}}function zC(t,e){return t.replace(WC,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const WC=/\{\$([^}]+)}/g;function qC(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Za(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(wp(s)&&wp(o)){if(!Za(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function wp(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xo(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Cs(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function Ss(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function GC(t,e){const n=new KC(t,e);return n.subscribe.bind(n)}class KC{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");YC(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Gl),i.error===void 0&&(i.error=Gl),i.complete===void 0&&(i.complete=Gl);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function YC(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Gl(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Le(t){return t&&t._delegate?t._delegate:t}class gr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rr="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QC{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new MC;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(JC(e))try{this.getOrInitializeService({instanceIdentifier:Rr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Rr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Rr){return this.instances.has(e)}getOptions(e=Rr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:XC(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Rr){return this.component?this.component.multipleInstances?e:Rr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function XC(t){return t===Rr?void 0:t}function JC(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZC{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new QC(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var we;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(we||(we={}));const eS={debug:we.DEBUG,verbose:we.VERBOSE,info:we.INFO,warn:we.WARN,error:we.ERROR,silent:we.SILENT},tS=we.INFO,nS={[we.DEBUG]:"log",[we.VERBOSE]:"log",[we.INFO]:"info",[we.WARN]:"warn",[we.ERROR]:"error"},rS=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=nS[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class kh{constructor(e){this.name=e,this._logLevel=tS,this._logHandler=rS,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in we))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?eS[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,we.DEBUG,...e),this._logHandler(this,we.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,we.VERBOSE,...e),this._logHandler(this,we.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,we.INFO,...e),this._logHandler(this,we.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,we.WARN,...e),this._logHandler(this,we.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,we.ERROR,...e),this._logHandler(this,we.ERROR,...e)}}const iS=(t,e)=>e.some(n=>t instanceof n);let bp,_p;function sS(){return bp||(bp=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function oS(){return _p||(_p=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const t0=new WeakMap,qu=new WeakMap,n0=new WeakMap,Kl=new WeakMap,Ch=new WeakMap;function aS(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(cr(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&t0.set(n,t)}).catch(()=>{}),Ch.set(e,t),e}function cS(t){if(qu.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});qu.set(t,e)}let Gu={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return qu.get(t);if(e==="objectStoreNames")return t.objectStoreNames||n0.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return cr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function lS(t){Gu=t(Gu)}function uS(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Yl(this),e,...n);return n0.set(r,e.sort?e.sort():[e]),cr(r)}:oS().includes(t)?function(...e){return t.apply(Yl(this),e),cr(t0.get(this))}:function(...e){return cr(t.apply(Yl(this),e))}}function fS(t){return typeof t=="function"?uS(t):(t instanceof IDBTransaction&&cS(t),iS(t,sS())?new Proxy(t,Gu):t)}function cr(t){if(t instanceof IDBRequest)return aS(t);if(Kl.has(t))return Kl.get(t);const e=fS(t);return e!==t&&(Kl.set(t,e),Ch.set(e,t)),e}const Yl=t=>Ch.get(t);function hS(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=cr(o);return r&&o.addEventListener("upgradeneeded",c=>{r(cr(o.result),c.oldVersion,c.newVersion,cr(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(c=>{s&&c.addEventListener("close",()=>s()),i&&c.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}const dS=["get","getKey","getAll","getAllKeys","count"],mS=["put","add","delete","clear"],Ql=new Map;function Ep(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Ql.get(e))return Ql.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=mS.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||dS.includes(n)))return;const s=async function(o,...a){const c=this.transaction(o,i?"readwrite":"readonly");let l=c.store;return r&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),i&&c.done]))[0]};return Ql.set(e,s),s}lS(t=>({...t,get:(e,n,r)=>Ep(e,n)||t.get(e,n,r),has:(e,n)=>!!Ep(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pS{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(gS(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function gS(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Ku="@firebase/app",Tp="0.9.7";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yr=new kh("@firebase/app"),vS="@firebase/app-compat",yS="@firebase/analytics-compat",wS="@firebase/analytics",bS="@firebase/app-check-compat",_S="@firebase/app-check",ES="@firebase/auth",TS="@firebase/auth-compat",IS="@firebase/database",kS="@firebase/database-compat",CS="@firebase/functions",SS="@firebase/functions-compat",AS="@firebase/installations",xS="@firebase/installations-compat",RS="@firebase/messaging",OS="@firebase/messaging-compat",NS="@firebase/performance",PS="@firebase/performance-compat",DS="@firebase/remote-config",MS="@firebase/remote-config-compat",LS="@firebase/storage",US="@firebase/storage-compat",FS="@firebase/firestore",$S="@firebase/firestore-compat",VS="firebase",BS="9.19.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yu="[DEFAULT]",jS={[Ku]:"fire-core",[vS]:"fire-core-compat",[wS]:"fire-analytics",[yS]:"fire-analytics-compat",[_S]:"fire-app-check",[bS]:"fire-app-check-compat",[ES]:"fire-auth",[TS]:"fire-auth-compat",[IS]:"fire-rtdb",[kS]:"fire-rtdb-compat",[CS]:"fire-fn",[SS]:"fire-fn-compat",[AS]:"fire-iid",[xS]:"fire-iid-compat",[RS]:"fire-fcm",[OS]:"fire-fcm-compat",[NS]:"fire-perf",[PS]:"fire-perf-compat",[DS]:"fire-rc",[MS]:"fire-rc-compat",[LS]:"fire-gcs",[US]:"fire-gcs-compat",[FS]:"fire-fst",[$S]:"fire-fst-compat","fire-js":"fire-js",[VS]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ec=new Map,Qu=new Map;function HS(t,e){try{t.container.addComponent(e)}catch(n){Yr.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Qr(t){const e=t.name;if(Qu.has(e))return Yr.debug(`There were multiple attempts to register component ${e}.`),!1;Qu.set(e,t);for(const n of ec.values())HS(n,t);return!0}function Wc(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zS={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},lr=new Ao("app","Firebase",zS);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WS{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new gr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw lr.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const is=BS;function r0(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Yu,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw lr.create("bad-app-name",{appName:String(i)});if(n||(n=DC()),!n)throw lr.create("no-options");const s=ec.get(i);if(s){if(Za(n,s.options)&&Za(r,s.config))return s;throw lr.create("duplicate-app",{appName:i})}const o=new ZC(i);for(const c of Qu.values())o.addComponent(c);const a=new WS(n,r,o);return ec.set(i,a),a}function Sh(t=Yu){const e=ec.get(t);if(!e&&t===Yu)return r0();if(!e)throw lr.create("no-app",{appName:t});return e}function vn(t,e,n){var r;let i=(r=jS[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Yr.warn(a.join(" "));return}Qr(new gr(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qS="firebase-heartbeat-database",GS=1,lo="firebase-heartbeat-store";let Xl=null;function i0(){return Xl||(Xl=hS(qS,GS,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(lo)}}}).catch(t=>{throw lr.create("idb-open",{originalErrorMessage:t.message})})),Xl}async function KS(t){try{return(await i0()).transaction(lo).objectStore(lo).get(s0(t))}catch(e){if(e instanceof Tn)Yr.warn(e.message);else{const n=lr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Yr.warn(n.message)}}}async function Ip(t,e){try{const r=(await i0()).transaction(lo,"readwrite");return await r.objectStore(lo).put(e,s0(t)),r.done}catch(n){if(n instanceof Tn)Yr.warn(n.message);else{const r=lr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Yr.warn(r.message)}}}function s0(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YS=1024,QS=30*24*60*60*1e3;class XS{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new ZS(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=kp();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=QS}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=kp(),{heartbeatsToSend:n,unsentEntries:r}=JS(this._heartbeatsCache.heartbeats),i=Ja(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function kp(){return new Date().toISOString().substring(0,10)}function JS(t,e=YS){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Cp(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Cp(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class ZS{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return BC()?jC().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await KS(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Ip(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Ip(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Cp(t){return Ja(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eA(t){Qr(new gr("platform-logger",e=>new pS(e),"PRIVATE")),Qr(new gr("heartbeat",e=>new XS(e),"PRIVATE")),vn(Ku,Tp,t),vn(Ku,Tp,"esm2017"),vn("fire-js","")}eA("");var tA="firebase",nA="9.19.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */vn(tA,nA,"app");var rA=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},q,Ah=Ah||{},ne=rA||self;function tc(){}function qc(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Ro(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function iA(t){return Object.prototype.hasOwnProperty.call(t,Jl)&&t[Jl]||(t[Jl]=++sA)}var Jl="closure_uid_"+(1e9*Math.random()>>>0),sA=0;function oA(t,e,n){return t.call.apply(t.bind,arguments)}function aA(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function yt(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?yt=oA:yt=aA,yt.apply(null,arguments)}function ma(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function ht(t,e){function n(){}n.prototype=e.prototype,t.X=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Wb=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(r,o)}}function Er(){this.s=this.s,this.o=this.o}var cA=0;Er.prototype.s=!1;Er.prototype.na=function(){!this.s&&(this.s=!0,this.M(),cA!=0)&&iA(this)};Er.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const o0=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function xh(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function Sp(t,e){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(qc(r)){const i=t.length||0,s=r.length||0;t.length=i+s;for(let o=0;o<s;o++)t[i+o]=r[o]}else t.push(r)}}function wt(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}wt.prototype.h=function(){this.defaultPrevented=!0};var lA=function(){if(!ne.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{ne.addEventListener("test",tc,e),ne.removeEventListener("test",tc,e)}catch{}return t}();function nc(t){return/^[\s\xa0]*$/.test(t)}var Ap=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function Zl(t,e){return t<e?-1:t>e?1:0}function Gc(){var t=ne.navigator;return t&&(t=t.userAgent)?t:""}function hn(t){return Gc().indexOf(t)!=-1}function Rh(t){return Rh[" "](t),t}Rh[" "]=tc;function uA(t){var e=dA;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var fA=hn("Opera"),$i=hn("Trident")||hn("MSIE"),a0=hn("Edge"),Xu=a0||$i,c0=hn("Gecko")&&!(Gc().toLowerCase().indexOf("webkit")!=-1&&!hn("Edge"))&&!(hn("Trident")||hn("MSIE"))&&!hn("Edge"),hA=Gc().toLowerCase().indexOf("webkit")!=-1&&!hn("Edge");function l0(){var t=ne.document;return t?t.documentMode:void 0}var rc;e:{var eu="",tu=function(){var t=Gc();if(c0)return/rv:([^\);]+)(\)|;)/.exec(t);if(a0)return/Edge\/([\d\.]+)/.exec(t);if($i)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(hA)return/WebKit\/(\S+)/.exec(t);if(fA)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(tu&&(eu=tu?tu[1]:""),$i){var nu=l0();if(nu!=null&&nu>parseFloat(eu)){rc=String(nu);break e}}rc=eu}var dA={};function mA(){return uA(function(){let t=0;const e=Ap(String(rc)).split("."),n=Ap("9").split("."),r=Math.max(e.length,n.length);for(let o=0;t==0&&o<r;o++){var i=e[o]||"",s=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],i[0].length==0&&s[0].length==0)break;t=Zl(i[1].length==0?0:parseInt(i[1],10),s[1].length==0?0:parseInt(s[1],10))||Zl(i[2].length==0,s[2].length==0)||Zl(i[2],s[2]),i=i[3],s=s[3]}while(t==0)}return 0<=t})}var Ju;if(ne.document&&$i){var xp=l0();Ju=xp||parseInt(rc,10)||void 0}else Ju=void 0;var pA=Ju;function uo(t,e){if(wt.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(c0){e:{try{Rh(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:gA[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&uo.X.h.call(this)}}ht(uo,wt);var gA={2:"touch",3:"pen",4:"mouse"};uo.prototype.h=function(){uo.X.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Oo="closure_listenable_"+(1e6*Math.random()|0),vA=0;function yA(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.ha=i,this.key=++vA,this.ba=this.ea=!1}function Kc(t){t.ba=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function Oh(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function u0(t){const e={};for(const n in t)e[n]=t[n];return e}const Rp="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function f0(t,e){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)t[n]=r[n];for(let s=0;s<Rp.length;s++)n=Rp[s],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function Yc(t){this.src=t,this.g={},this.h=0}Yc.prototype.add=function(t,e,n,r,i){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var o=ef(t,e,r,i);return-1<o?(e=t[o],n||(e.ea=!1)):(e=new yA(e,this.src,s,!!r,i),e.ea=n,t.push(e)),e};function Zu(t,e){var n=e.type;if(n in t.g){var r=t.g[n],i=o0(r,e),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(Kc(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function ef(t,e,n,r){for(var i=0;i<t.length;++i){var s=t[i];if(!s.ba&&s.listener==e&&s.capture==!!n&&s.ha==r)return i}return-1}var Nh="closure_lm_"+(1e6*Math.random()|0),ru={};function h0(t,e,n,r,i){if(r&&r.once)return m0(t,e,n,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)h0(t,e[s],n,r,i);return null}return n=Mh(n),t&&t[Oo]?t.N(e,n,Ro(r)?!!r.capture:!!r,i):d0(t,e,n,!1,r,i)}function d0(t,e,n,r,i,s){if(!e)throw Error("Invalid event type");var o=Ro(i)?!!i.capture:!!i,a=Dh(t);if(a||(t[Nh]=a=new Yc(t)),n=a.add(e,n,r,o,s),n.proxy)return n;if(r=wA(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)lA||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(g0(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function wA(){function t(n){return e.call(t.src,t.listener,n)}const e=bA;return t}function m0(t,e,n,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)m0(t,e[s],n,r,i);return null}return n=Mh(n),t&&t[Oo]?t.O(e,n,Ro(r)?!!r.capture:!!r,i):d0(t,e,n,!0,r,i)}function p0(t,e,n,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)p0(t,e[s],n,r,i);else r=Ro(r)?!!r.capture:!!r,n=Mh(n),t&&t[Oo]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],n=ef(s,n,r,i),-1<n&&(Kc(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete t.g[e],t.h--)))):t&&(t=Dh(t))&&(e=t.g[e.toString()],t=-1,e&&(t=ef(e,n,r,i)),(n=-1<t?e[t]:null)&&Ph(n))}function Ph(t){if(typeof t!="number"&&t&&!t.ba){var e=t.src;if(e&&e[Oo])Zu(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(g0(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=Dh(e))?(Zu(n,t),n.h==0&&(n.src=null,e[Nh]=null)):Kc(t)}}}function g0(t){return t in ru?ru[t]:ru[t]="on"+t}function bA(t,e){if(t.ba)t=!0;else{e=new uo(e,this);var n=t.listener,r=t.ha||t.src;t.ea&&Ph(t),t=n.call(r,e)}return t}function Dh(t){return t=t[Nh],t instanceof Yc?t:null}var iu="__closure_events_fn_"+(1e9*Math.random()>>>0);function Mh(t){return typeof t=="function"?t:(t[iu]||(t[iu]=function(e){return t.handleEvent(e)}),t[iu])}function st(){Er.call(this),this.i=new Yc(this),this.P=this,this.I=null}ht(st,Er);st.prototype[Oo]=!0;st.prototype.removeEventListener=function(t,e,n,r){p0(this,t,e,n,r)};function ft(t,e){var n,r=t.I;if(r)for(n=[];r;r=r.I)n.push(r);if(t=t.P,r=e.type||e,typeof e=="string")e=new wt(e,t);else if(e instanceof wt)e.target=e.target||t;else{var i=e;e=new wt(r,t),f0(e,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];i=pa(o,r,!0,e)&&i}if(o=e.g=t,i=pa(o,r,!0,e)&&i,i=pa(o,r,!1,e)&&i,n)for(s=0;s<n.length;s++)o=e.g=n[s],i=pa(o,r,!1,e)&&i}st.prototype.M=function(){if(st.X.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)Kc(n[r]);delete t.g[e],t.h--}}this.I=null};st.prototype.N=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};st.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function pa(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.ba&&o.capture==n){var a=o.listener,c=o.ha||o.src;o.ea&&Zu(t.i,o),i=a.call(c,r)!==!1&&i}}return i&&!r.defaultPrevented}var Lh=ne.JSON.stringify;function _A(){var t=w0;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class EA{constructor(){this.h=this.g=null}add(e,n){const r=v0.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var v0=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new TA,t=>t.reset());class TA{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function IA(t){ne.setTimeout(()=>{throw t},0)}function y0(t,e){tf||kA(),nf||(tf(),nf=!0),w0.add(t,e)}var tf;function kA(){var t=ne.Promise.resolve(void 0);tf=function(){t.then(CA)}}var nf=!1,w0=new EA;function CA(){for(var t;t=_A();){try{t.h.call(t.g)}catch(n){IA(n)}var e=v0;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}nf=!1}function Qc(t,e){st.call(this),this.h=t||1,this.g=e||ne,this.j=yt(this.lb,this),this.l=Date.now()}ht(Qc,st);q=Qc.prototype;q.ca=!1;q.R=null;q.lb=function(){if(this.ca){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-t):(this.R&&(this.g.clearTimeout(this.R),this.R=null),ft(this,"tick"),this.ca&&(Uh(this),this.start()))}};q.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Uh(t){t.ca=!1,t.R&&(t.g.clearTimeout(t.R),t.R=null)}q.M=function(){Qc.X.M.call(this),Uh(this),delete this.g};function Fh(t,e,n){if(typeof t=="function")n&&(t=yt(t,n));else if(t&&typeof t.handleEvent=="function")t=yt(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:ne.setTimeout(t,e||0)}function b0(t){t.g=Fh(()=>{t.g=null,t.i&&(t.i=!1,b0(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class SA extends Er{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:b0(this)}M(){super.M(),this.g&&(ne.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function fo(t){Er.call(this),this.h=t,this.g={}}ht(fo,Er);var Op=[];function _0(t,e,n,r){Array.isArray(n)||(n&&(Op[0]=n.toString()),n=Op);for(var i=0;i<n.length;i++){var s=h0(e,n[i],r||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function E0(t){Oh(t.g,function(e,n){this.g.hasOwnProperty(n)&&Ph(e)},t),t.g={}}fo.prototype.M=function(){fo.X.M.call(this),E0(this)};fo.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Xc(){this.g=!0}Xc.prototype.Aa=function(){this.g=!1};function AA(t,e,n,r,i,s){t.info(function(){if(t.g)if(s)for(var o="",a=s.split("&"),c=0;c<a.length;c++){var l=a[c].split("=");if(1<l.length){var u=l[0];l=l[1];var f=u.split("_");o=2<=f.length&&f[1]=="type"?o+(u+"="+l+"&"):o+(u+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function xA(t,e,n,r,i,s,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+`
`+n+`
`+s+" "+o})}function wi(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+OA(t,n)+(r?" "+r:"")})}function RA(t,e){t.info(function(){return"TIMEOUT: "+e})}Xc.prototype.info=function(){};function OA(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return Lh(n)}catch{return e}}var ii={},Np=null;function Jc(){return Np=Np||new st}ii.Pa="serverreachability";function T0(t){wt.call(this,ii.Pa,t)}ht(T0,wt);function ho(t){const e=Jc();ft(e,new T0(e))}ii.STAT_EVENT="statevent";function I0(t,e){wt.call(this,ii.STAT_EVENT,t),this.stat=e}ht(I0,wt);function St(t){const e=Jc();ft(e,new I0(e,t))}ii.Qa="timingevent";function k0(t,e){wt.call(this,ii.Qa,t),this.size=e}ht(k0,wt);function No(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return ne.setTimeout(function(){t()},e)}var Zc={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},C0={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function $h(){}$h.prototype.h=null;function Pp(t){return t.h||(t.h=t.i())}function S0(){}var Po={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function Vh(){wt.call(this,"d")}ht(Vh,wt);function Bh(){wt.call(this,"c")}ht(Bh,wt);var rf;function el(){}ht(el,$h);el.prototype.g=function(){return new XMLHttpRequest};el.prototype.i=function(){return{}};rf=new el;function Do(t,e,n,r){this.l=t,this.j=e,this.m=n,this.U=r||1,this.S=new fo(this),this.O=NA,t=Xu?125:void 0,this.T=new Qc(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new A0}function A0(){this.i=null,this.g="",this.h=!1}var NA=45e3,sf={},ic={};q=Do.prototype;q.setTimeout=function(t){this.O=t};function of(t,e,n){t.K=1,t.v=nl(Un(e)),t.s=n,t.P=!0,x0(t,null)}function x0(t,e){t.F=Date.now(),Mo(t),t.A=Un(t.v);var n=t.A,r=t.U;Array.isArray(r)||(r=[String(r)]),U0(n.i,"t",r),t.C=0,n=t.l.H,t.h=new A0,t.g=i1(t.l,n?e:null,!t.s),0<t.N&&(t.L=new SA(yt(t.La,t,t.g),t.N)),_0(t.S,t.g,"readystatechange",t.ib),e=t.H?u0(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.da(t.A,t.u,t.s,e)):(t.u="GET",t.g.da(t.A,t.u,null,e)),ho(),AA(t.j,t.u,t.A,t.m,t.U,t.s)}q.ib=function(t){t=t.target;const e=this.L;e&&xn(t)==3?e.l():this.La(t)};q.La=function(t){try{if(t==this.g)e:{const u=xn(this.g);var e=this.g.Ea();const f=this.g.aa();if(!(3>u)&&(u!=3||Xu||this.g&&(this.h.h||this.g.fa()||Up(this.g)))){this.I||u!=4||e==7||(e==8||0>=f?ho(3):ho(2)),tl(this);var n=this.g.aa();this.Y=n;t:if(R0(this)){var r=Up(this.g);t="";var i=r.length,s=xn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Ur(this),js(this);var o="";break t}this.h.i=new ne.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=n==200,xA(this.j,this.u,this.A,this.m,this.U,u,n),this.i){if(this.Z&&!this.J){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!nc(a)){var l=a;break t}}l=null}if(n=l)wi(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,af(this,n);else{this.i=!1,this.o=3,St(12),Ur(this),js(this);break e}}this.P?(O0(this,u,o),Xu&&this.i&&u==3&&(_0(this.S,this.T,"tick",this.hb),this.T.start())):(wi(this.j,this.m,o,null),af(this,o)),u==4&&Ur(this),this.i&&!this.I&&(u==4?e1(this.l,this):(this.i=!1,Mo(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,St(12)):(this.o=0,St(13)),Ur(this),js(this)}}}catch{}finally{}};function R0(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Da:!1}function O0(t,e,n){let r=!0,i;for(;!t.I&&t.C<n.length;)if(i=PA(t,n),i==ic){e==4&&(t.o=4,St(14),r=!1),wi(t.j,t.m,null,"[Incomplete Response]");break}else if(i==sf){t.o=4,St(15),wi(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else wi(t.j,t.m,i,null),af(t,i);R0(t)&&i!=ic&&i!=sf&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,St(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.$&&(t.$=!0,e=t.l,e.g==t&&e.$&&!e.K&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),Kh(e),e.K=!0,St(11))):(wi(t.j,t.m,n,"[Invalid Chunked Response]"),Ur(t),js(t))}q.hb=function(){if(this.g){var t=xn(this.g),e=this.g.fa();this.C<e.length&&(tl(this),O0(this,t,e),this.i&&t!=4&&Mo(this))}};function PA(t,e){var n=t.C,r=e.indexOf(`
`,n);return r==-1?ic:(n=Number(e.substring(n,r)),isNaN(n)?sf:(r+=1,r+n>e.length?ic:(e=e.substr(r,n),t.C=r+n,e)))}q.cancel=function(){this.I=!0,Ur(this)};function Mo(t){t.V=Date.now()+t.O,N0(t,t.O)}function N0(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=No(yt(t.gb,t),e)}function tl(t){t.B&&(ne.clearTimeout(t.B),t.B=null)}q.gb=function(){this.B=null;const t=Date.now();0<=t-this.V?(RA(this.j,this.A),this.K!=2&&(ho(),St(17)),Ur(this),this.o=2,js(this)):N0(this,this.V-t)};function js(t){t.l.G==0||t.I||e1(t.l,t)}function Ur(t){tl(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,Uh(t.T),E0(t.S),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function af(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||cf(n.h,t))){if(!t.J&&cf(n.h,t)&&n.G==3){try{var r=n.Fa.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)ac(n),sl(n);else break e;Gh(n),St(18)}}else n.Ba=i[1],0<n.Ba-n.T&&37500>i[2]&&n.L&&n.A==0&&!n.v&&(n.v=No(yt(n.cb,n),6e3));if(1>=V0(n.h)&&n.ja){try{n.ja()}catch{}n.ja=void 0}}else Fr(n,11)}else if((t.J||n.g==t)&&ac(n),!nc(e))for(i=n.Fa.g.parse(e),e=0;e<i.length;e++){let l=i[e];if(n.T=l[0],l=l[1],n.G==2)if(l[0]=="c"){n.I=l[1],n.ka=l[2];const u=l[3];u!=null&&(n.ma=u,n.j.info("VER="+n.ma));const f=l[4];f!=null&&(n.Ca=f,n.j.info("SVER="+n.Ca));const h=l[5];h!=null&&typeof h=="number"&&0<h&&(r=1.5*h,n.J=r,n.j.info("backChannelRequestTimeoutMs_="+r)),r=n;const d=t.g;if(d){const g=d.g?d.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(g){var s=r.h;s.g||g.indexOf("spdy")==-1&&g.indexOf("quic")==-1&&g.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(jh(s,s.h),s.h=null))}if(r.D){const y=d.g?d.g.getResponseHeader("X-HTTP-Session-Id"):null;y&&(r.za=y,Ue(r.F,r.D,y))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-t.F,n.j.info("Handshake RTT: "+n.P+"ms")),r=n;var o=t;if(r.sa=r1(r,r.H?r.ka:null,r.V),o.J){B0(r.h,o);var a=o,c=r.J;c&&a.setTimeout(c),a.B&&(tl(a),Mo(a)),r.g=o}else J0(r);0<n.i.length&&ol(n)}else l[0]!="stop"&&l[0]!="close"||Fr(n,7);else n.G==3&&(l[0]=="stop"||l[0]=="close"?l[0]=="stop"?Fr(n,7):qh(n):l[0]!="noop"&&n.l&&n.l.wa(l),n.A=0)}}ho(4)}catch{}}function DA(t){if(t.W&&typeof t.W=="function")return t.W();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(qc(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function MA(t){if(t.oa&&typeof t.oa=="function")return t.oa();if(!t.W||typeof t.W!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(qc(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function P0(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(qc(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=MA(t),r=DA(t),i=r.length,s=0;s<i;s++)e.call(void 0,r[s],n&&n[s],t)}var D0=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function LA(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var s=t[n].substring(0,r);i=t[n].substring(r+1)}else s=t[n];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function Hr(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof Hr){this.h=e!==void 0?e:t.h,sc(this,t.j),this.s=t.s,this.g=t.g,oc(this,t.m),this.l=t.l,e=t.i;var n=new mo;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),Dp(this,n),this.o=t.o}else t&&(n=String(t).match(D0))?(this.h=!!e,sc(this,n[1]||"",!0),this.s=As(n[2]||""),this.g=As(n[3]||"",!0),oc(this,n[4]),this.l=As(n[5]||"",!0),Dp(this,n[6]||"",!0),this.o=As(n[7]||"")):(this.h=!!e,this.i=new mo(null,this.h))}Hr.prototype.toString=function(){var t=[],e=this.j;e&&t.push(xs(e,Mp,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(xs(e,Mp,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(xs(n,n.charAt(0)=="/"?$A:FA,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",xs(n,BA)),t.join("")};function Un(t){return new Hr(t)}function sc(t,e,n){t.j=n?As(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function oc(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Dp(t,e,n){e instanceof mo?(t.i=e,jA(t.i,t.h)):(n||(e=xs(e,VA)),t.i=new mo(e,t.h))}function Ue(t,e,n){t.i.set(e,n)}function nl(t){return Ue(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function As(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function xs(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,UA),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function UA(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var Mp=/[#\/\?@]/g,FA=/[#\?:]/g,$A=/[#\?]/g,VA=/[#\?@]/g,BA=/#/g;function mo(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Tr(t){t.g||(t.g=new Map,t.h=0,t.i&&LA(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}q=mo.prototype;q.add=function(t,e){Tr(this),this.i=null,t=ss(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function M0(t,e){Tr(t),e=ss(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function L0(t,e){return Tr(t),e=ss(t,e),t.g.has(e)}q.forEach=function(t,e){Tr(this),this.g.forEach(function(n,r){n.forEach(function(i){t.call(e,i,r,this)},this)},this)};q.oa=function(){Tr(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const i=t[r];for(let s=0;s<i.length;s++)n.push(e[r])}return n};q.W=function(t){Tr(this);let e=[];if(typeof t=="string")L0(this,t)&&(e=e.concat(this.g.get(ss(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};q.set=function(t,e){return Tr(this),this.i=null,t=ss(this,t),L0(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};q.get=function(t,e){return t?(t=this.W(t),0<t.length?String(t[0]):e):e};function U0(t,e,n){M0(t,e),0<n.length&&(t.i=null,t.g.set(ss(t,e),xh(n)),t.h+=n.length)}q.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const s=encodeURIComponent(String(r)),o=this.W(r);for(r=0;r<o.length;r++){var i=s;o[r]!==""&&(i+="="+encodeURIComponent(String(o[r]))),t.push(i)}}return this.i=t.join("&")};function ss(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function jA(t,e){e&&!t.j&&(Tr(t),t.i=null,t.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(M0(this,r),U0(this,i,n))},t)),t.j=e}var HA=class{constructor(e,n){this.h=e,this.g=n}};function F0(t){this.l=t||zA,ne.PerformanceNavigationTiming?(t=ne.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(ne.g&&ne.g.Ga&&ne.g.Ga()&&ne.g.Ga().$b),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var zA=10;function $0(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function V0(t){return t.h?1:t.g?t.g.size:0}function cf(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function jh(t,e){t.g?t.g.add(e):t.h=e}function B0(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}F0.prototype.cancel=function(){if(this.i=j0(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function j0(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return xh(t.i)}function Hh(){}Hh.prototype.stringify=function(t){return ne.JSON.stringify(t,void 0)};Hh.prototype.parse=function(t){return ne.JSON.parse(t,void 0)};function WA(){this.g=new Hh}function qA(t,e,n){const r=n||"";try{P0(t,function(i,s){let o=i;Ro(i)&&(o=Lh(i)),e.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function GA(t,e){const n=new Xc;if(ne.Image){const r=new Image;r.onload=ma(ga,n,r,"TestLoadImage: loaded",!0,e),r.onerror=ma(ga,n,r,"TestLoadImage: error",!1,e),r.onabort=ma(ga,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=ma(ga,n,r,"TestLoadImage: timeout",!1,e),ne.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function ga(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch{}}function Lo(t){this.l=t.ac||null,this.j=t.jb||!1}ht(Lo,$h);Lo.prototype.g=function(){return new rl(this.l,this.j)};Lo.prototype.i=function(t){return function(){return t}}({});function rl(t,e){st.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=zh,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}ht(rl,st);var zh=0;q=rl.prototype;q.open=function(t,e){if(this.readyState!=zh)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,po(this)};q.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||ne).fetch(new Request(this.B,e)).then(this.Wa.bind(this),this.ga.bind(this))};q.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Uo(this)),this.readyState=zh};q.Wa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,po(this)),this.g&&(this.readyState=3,po(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(typeof ne.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;H0(this)}else t.text().then(this.Va.bind(this),this.ga.bind(this))};function H0(t){t.j.read().then(t.Ta.bind(t)).catch(t.ga.bind(t))}q.Ta=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Uo(this):po(this),this.readyState==3&&H0(this)}};q.Va=function(t){this.g&&(this.response=this.responseText=t,Uo(this))};q.Ua=function(t){this.g&&(this.response=t,Uo(this))};q.ga=function(){this.g&&Uo(this)};function Uo(t){t.readyState=4,t.l=null,t.j=null,t.A=null,po(t)}q.setRequestHeader=function(t,e){this.v.append(t,e)};q.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};q.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function po(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(rl.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var KA=ne.JSON.parse;function je(t){st.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=z0,this.K=this.L=!1}ht(je,st);var z0="",YA=/^https?$/i,QA=["POST","PUT"];q=je.prototype;q.Ka=function(t){this.L=t};q.da=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():rf.g(),this.C=this.u?Pp(this.u):Pp(rf),this.g.onreadystatechange=yt(this.Ha,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(s){Lp(this,s);return}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const s of r.keys())n.set(s,r.get(s));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(s=>s.toLowerCase()=="content-type"),i=ne.FormData&&t instanceof ne.FormData,!(0<=o0(QA,e))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of n)this.g.setRequestHeader(s,o);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{G0(this),0<this.B&&((this.K=XA(this.g))?(this.g.timeout=this.B,this.g.ontimeout=yt(this.qa,this)):this.A=Fh(this.qa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(s){Lp(this,s)}};function XA(t){return $i&&mA()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}q.qa=function(){typeof Ah<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,ft(this,"timeout"),this.abort(8))};function Lp(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,W0(t),il(t)}function W0(t){t.D||(t.D=!0,ft(t,"complete"),ft(t,"error"))}q.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,ft(this,"complete"),ft(this,"abort"),il(this))};q.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),il(this,!0)),je.X.M.call(this)};q.Ha=function(){this.s||(this.F||this.v||this.l?q0(this):this.fb())};q.fb=function(){q0(this)};function q0(t){if(t.h&&typeof Ah<"u"&&(!t.C[1]||xn(t)!=4||t.aa()!=2)){if(t.v&&xn(t)==4)Fh(t.Ha,0,t);else if(ft(t,"readystatechange"),xn(t)==4){t.h=!1;try{const a=t.aa();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=a===0){var i=String(t.H).match(D0)[1]||null;if(!i&&ne.self&&ne.self.location){var s=ne.self.location.protocol;i=s.substr(0,s.length-1)}r=!YA.test(i?i.toLowerCase():"")}n=r}if(n)ft(t,"complete"),ft(t,"success");else{t.m=6;try{var o=2<xn(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.aa()+"]",W0(t)}}finally{il(t)}}}}function il(t,e){if(t.g){G0(t);const n=t.g,r=t.C[0]?tc:null;t.g=null,t.C=null,e||ft(t,"ready");try{n.onreadystatechange=r}catch{}}}function G0(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(ne.clearTimeout(t.A),t.A=null)}function xn(t){return t.g?t.g.readyState:0}q.aa=function(){try{return 2<xn(this)?this.g.status:-1}catch{return-1}};q.fa=function(){try{return this.g?this.g.responseText:""}catch{return""}};q.Sa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),KA(e)}};function Up(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case z0:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}q.Ea=function(){return this.m};q.Oa=function(){return typeof this.j=="string"?this.j:String(this.j)};function K0(t){let e="";return Oh(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function Wh(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=K0(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):Ue(t,e,n))}function ws(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function Y0(t){this.Ca=0,this.i=[],this.j=new Xc,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=ws("failFast",!1,t),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=ws("baseRetryDelayMs",5e3,t),this.bb=ws("retryDelaySeedMs",1e4,t),this.$a=ws("forwardChannelMaxRetries",2,t),this.ta=ws("forwardChannelRequestTimeoutMs",2e4,t),this.ra=t&&t.xmlHttpFactory||void 0,this.Da=t&&t.Zb||!1,this.J=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.I="",this.h=new F0(t&&t.concurrentRequestLimit),this.Fa=new WA,this.O=t&&t.fastHandshake||!1,this.N=t&&t.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=t&&t.Xb||!1,t&&t.Aa&&this.j.Aa(),t&&t.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&t&&t.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}q=Y0.prototype;q.ma=8;q.G=1;function qh(t){if(Q0(t),t.G==3){var e=t.U++,n=Un(t.F);Ue(n,"SID",t.I),Ue(n,"RID",e),Ue(n,"TYPE","terminate"),Fo(t,n),e=new Do(t,t.j,e,void 0),e.K=2,e.v=nl(Un(n)),n=!1,ne.navigator&&ne.navigator.sendBeacon&&(n=ne.navigator.sendBeacon(e.v.toString(),"")),!n&&ne.Image&&(new Image().src=e.v,n=!0),n||(e.g=i1(e.l,null),e.g.da(e.v)),e.F=Date.now(),Mo(e)}n1(t)}function sl(t){t.g&&(Kh(t),t.g.cancel(),t.g=null)}function Q0(t){sl(t),t.u&&(ne.clearTimeout(t.u),t.u=null),ac(t),t.h.cancel(),t.m&&(typeof t.m=="number"&&ne.clearTimeout(t.m),t.m=null)}function ol(t){$0(t.h)||t.m||(t.m=!0,y0(t.Ja,t),t.C=0)}function JA(t,e){return V0(t.h)>=t.h.j-(t.m?1:0)?!1:t.m?(t.i=e.D.concat(t.i),!0):t.G==1||t.G==2||t.C>=(t.Za?0:t.$a)?!1:(t.m=No(yt(t.Ja,t,e),t1(t,t.C)),t.C++,!0)}q.Ja=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const i=new Do(this,this.j,t,void 0);let s=this.s;if(this.S&&(s?(s=u0(s),f0(s,this.S)):s=this.S),this.o!==null||this.N||(i.H=s,s=null),this.O)e:{for(var e=0,n=0;n<this.i.length;n++){t:{var r=this.i[n];if("__data__"in r.g&&(r=r.g.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.i.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=X0(this,i,e),n=Un(this.F),Ue(n,"RID",t),Ue(n,"CVER",22),this.D&&Ue(n,"X-HTTP-Session-Id",this.D),Fo(this,n),s&&(this.N?e="headers="+encodeURIComponent(String(K0(s)))+"&"+e:this.o&&Wh(n,this.o,s)),jh(this.h,i),this.Ya&&Ue(n,"TYPE","init"),this.O?(Ue(n,"$req",e),Ue(n,"SID","null"),i.Z=!0,of(i,n,null)):of(i,n,e),this.G=2}}else this.G==3&&(t?Fp(this,t):this.i.length==0||$0(this.h)||Fp(this))};function Fp(t,e){var n;e?n=e.m:n=t.U++;const r=Un(t.F);Ue(r,"SID",t.I),Ue(r,"RID",n),Ue(r,"AID",t.T),Fo(t,r),t.o&&t.s&&Wh(r,t.o,t.s),n=new Do(t,t.j,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.i=e.D.concat(t.i)),e=X0(t,n,1e3),n.setTimeout(Math.round(.5*t.ta)+Math.round(.5*t.ta*Math.random())),jh(t.h,n),of(n,r,e)}function Fo(t,e){t.ia&&Oh(t.ia,function(n,r){Ue(e,r,n)}),t.l&&P0({},function(n,r){Ue(e,r,n)})}function X0(t,e,n){n=Math.min(t.i.length,n);var r=t.l?yt(t.l.Ra,t.l,t):null;e:{var i=t.i;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=i[0].h,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let c=0;c<n;c++){let l=i[c].h;const u=i[c].g;if(l-=s,0>l)s=Math.max(0,i[c].h-100),a=!1;else try{qA(u,o,"req"+l+"_")}catch{r&&r(u)}}if(a){r=o.join("&");break e}}}return t=t.i.splice(0,n),e.D=t,r}function J0(t){t.g||t.u||(t.Z=1,y0(t.Ia,t),t.A=0)}function Gh(t){return t.g||t.u||3<=t.A?!1:(t.Z++,t.u=No(yt(t.Ia,t),t1(t,t.A)),t.A++,!0)}q.Ia=function(){if(this.u=null,Z0(this),this.$&&!(this.K||this.g==null||0>=this.P)){var t=2*this.P;this.j.info("BP detection timer enabled: "+t),this.B=No(yt(this.eb,this),t)}};q.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,St(10),sl(this),Z0(this))};function Kh(t){t.B!=null&&(ne.clearTimeout(t.B),t.B=null)}function Z0(t){t.g=new Do(t,t.j,"rpc",t.Z),t.o===null&&(t.g.H=t.s),t.g.N=0;var e=Un(t.sa);Ue(e,"RID","rpc"),Ue(e,"SID",t.I),Ue(e,"CI",t.L?"0":"1"),Ue(e,"AID",t.T),Ue(e,"TYPE","xmlhttp"),Fo(t,e),t.o&&t.s&&Wh(e,t.o,t.s),t.J&&t.g.setTimeout(t.J);var n=t.g;t=t.ka,n.K=1,n.v=nl(Un(e)),n.s=null,n.P=!0,x0(n,t)}q.cb=function(){this.v!=null&&(this.v=null,sl(this),Gh(this),St(19))};function ac(t){t.v!=null&&(ne.clearTimeout(t.v),t.v=null)}function e1(t,e){var n=null;if(t.g==e){ac(t),Kh(t),t.g=null;var r=2}else if(cf(t.h,e))n=e.D,B0(t.h,e),r=1;else return;if(t.G!=0){if(t.pa=e.Y,e.i)if(r==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var i=t.C;r=Jc(),ft(r,new k0(r,n)),ol(t)}else J0(t);else if(i=e.o,i==3||i==0&&0<t.pa||!(r==1&&JA(t,e)||r==2&&Gh(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),i){case 1:Fr(t,5);break;case 4:Fr(t,10);break;case 3:Fr(t,6);break;default:Fr(t,2)}}}function t1(t,e){let n=t.Xa+Math.floor(Math.random()*t.bb);return t.l||(n*=2),n*e}function Fr(t,e){if(t.j.info("Error code "+e),e==2){var n=null;t.l&&(n=null);var r=yt(t.kb,t);n||(n=new Hr("//www.google.com/images/cleardot.gif"),ne.location&&ne.location.protocol=="http"||sc(n,"https"),nl(n)),GA(n.toString(),r)}else St(2);t.G=0,t.l&&t.l.va(e),n1(t),Q0(t)}q.kb=function(t){t?(this.j.info("Successfully pinged google.com"),St(2)):(this.j.info("Failed to ping google.com"),St(1))};function n1(t){if(t.G=0,t.la=[],t.l){const e=j0(t.h);(e.length!=0||t.i.length!=0)&&(Sp(t.la,e),Sp(t.la,t.i),t.h.i.length=0,xh(t.i),t.i.length=0),t.l.ua()}}function r1(t,e,n){var r=n instanceof Hr?Un(n):new Hr(n,void 0);if(r.g!="")e&&(r.g=e+"."+r.g),oc(r,r.m);else{var i=ne.location;r=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var s=new Hr(null,void 0);r&&sc(s,r),e&&(s.g=e),i&&oc(s,i),n&&(s.l=n),r=s}return n=t.D,e=t.za,n&&e&&Ue(r,n,e),Ue(r,"VER",t.ma),Fo(t,r),r}function i1(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Da&&!t.ra?new je(new Lo({jb:!0})):new je(t.ra),e.Ka(t.H),e}function s1(){}q=s1.prototype;q.xa=function(){};q.wa=function(){};q.va=function(){};q.ua=function(){};q.Ra=function(){};function cc(){if($i&&!(10<=Number(pA)))throw Error("Environmental error: no available transport.")}cc.prototype.g=function(t,e){return new Ut(t,e)};function Ut(t,e){st.call(this),this.g=new Y0(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.S=t,(t=e&&e.Yb)&&!nc(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!nc(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new os(this)}ht(Ut,st);Ut.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;St(0),t.V=e,t.ia=n||{},t.L=t.Y,t.F=r1(t,null,t.V),ol(t)};Ut.prototype.close=function(){qh(this.g)};Ut.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=Lh(t),t=n);e.i.push(new HA(e.ab++,t)),e.G==3&&ol(e)};Ut.prototype.M=function(){this.g.l=null,delete this.j,qh(this.g),delete this.g,Ut.X.M.call(this)};function o1(t){Vh.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}ht(o1,Vh);function a1(){Bh.call(this),this.status=1}ht(a1,Bh);function os(t){this.g=t}ht(os,s1);os.prototype.xa=function(){ft(this.g,"a")};os.prototype.wa=function(t){ft(this.g,new o1(t))};os.prototype.va=function(t){ft(this.g,new a1)};os.prototype.ua=function(){ft(this.g,"b")};cc.prototype.createWebChannel=cc.prototype.g;Ut.prototype.send=Ut.prototype.u;Ut.prototype.open=Ut.prototype.m;Ut.prototype.close=Ut.prototype.close;Zc.NO_ERROR=0;Zc.TIMEOUT=8;Zc.HTTP_ERROR=6;C0.COMPLETE="complete";S0.EventType=Po;Po.OPEN="a";Po.CLOSE="b";Po.ERROR="c";Po.MESSAGE="d";st.prototype.listen=st.prototype.N;je.prototype.listenOnce=je.prototype.O;je.prototype.getLastError=je.prototype.Oa;je.prototype.getLastErrorCode=je.prototype.Ea;je.prototype.getStatus=je.prototype.aa;je.prototype.getResponseJson=je.prototype.Sa;je.prototype.getResponseText=je.prototype.fa;je.prototype.send=je.prototype.da;je.prototype.setWithCredentials=je.prototype.Ka;var ZA=function(){return new cc},ex=function(){return Jc()},su=Zc,tx=C0,nx=ii,$p={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},rx=Lo,va=S0,ix=je;const Vp="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}mt.UNAUTHENTICATED=new mt(null),mt.GOOGLE_CREDENTIALS=new mt("google-credentials-uid"),mt.FIRST_PARTY=new mt("first-party-uid"),mt.MOCK_USER=new mt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let as="9.19.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xr=new kh("@firebase/firestore");function Bp(){return Xr.logLevel}function G(t,...e){if(Xr.logLevel<=we.DEBUG){const n=e.map(Yh);Xr.debug(`Firestore (${as}): ${t}`,...n)}}function Fn(t,...e){if(Xr.logLevel<=we.ERROR){const n=e.map(Yh);Xr.error(`Firestore (${as}): ${t}`,...n)}}function lc(t,...e){if(Xr.logLevel<=we.WARN){const n=e.map(Yh);Xr.warn(`Firestore (${as}): ${t}`,...n)}}function Yh(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function te(t="Unexpected state"){const e=`FIRESTORE (${as}) INTERNAL ASSERTION FAILED: `+t;throw Fn(e),new Error(e)}function De(t,e){t||te()}function se(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class B extends Tn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ur{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c1{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class sx{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(mt.UNAUTHENTICATED))}shutdown(){}}class ox{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class ax{constructor(e){this.t=e,this.currentUser=mt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=c=>this.i!==r?(r=this.i,n(c)):Promise.resolve();let s=new ur;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new ur,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const c=s;e.enqueueRetryable(async()=>{await c.promise,await i(this.currentUser)})},a=c=>{G("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(G("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new ur)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(G("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(De(typeof r.accessToken=="string"),new c1(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return De(e===null||typeof e=="string"),new mt(e)}}class cx{constructor(e,n,r){this.h=e,this.l=n,this.m=r,this.type="FirstParty",this.user=mt.FIRST_PARTY,this.g=new Map}p(){return this.m?this.m():null}get headers(){this.g.set("X-Goog-AuthUser",this.h);const e=this.p();return e&&this.g.set("Authorization",e),this.l&&this.g.set("X-Goog-Iam-Authorization-Token",this.l),this.g}}class lx{constructor(e,n,r){this.h=e,this.l=n,this.m=r}getToken(){return Promise.resolve(new cx(this.h,this.l,this.m))}start(e,n){e.enqueueRetryable(()=>n(mt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class ux{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class fx{constructor(e){this.I=e,this.forceRefresh=!1,this.appCheck=null,this.T=null}start(e,n){const r=s=>{s.error!=null&&G("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.T;return this.T=s.token,G("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{G("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.I.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.I.getImmediate({optional:!0});s?i(s):G("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(De(typeof n.token=="string"),this.T=n.token,new ux(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hx(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l1{static A(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=hx(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function be(t,e){return t<e?-1:t>e?1:0}function Vi(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Je{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new B(k.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new B(k.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new B(k.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new B(k.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Je.fromMillis(Date.now())}static fromDate(e){return Je.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Je(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?be(this.nanoseconds,e.nanoseconds):be(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ie{constructor(e){this.timestamp=e}static fromTimestamp(e){return new ie(e)}static min(){return new ie(new Je(0,0))}static max(){return new ie(new Je(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class go{constructor(e,n,r){n===void 0?n=0:n>e.length&&te(),r===void 0?r=e.length-n:r>e.length-n&&te(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return go.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof go?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Ne extends go{construct(e,n,r){return new Ne(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new B(k.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new Ne(n)}static emptyPath(){return new Ne([])}}const dx=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class vt extends go{construct(e,n,r){return new vt(e,n,r)}static isValidIdentifier(e){return dx.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),vt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new vt(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new B(k.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new B(k.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[i+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new B(k.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new B(k.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new vt(n)}static emptyPath(){return new vt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q{constructor(e){this.path=e}static fromPath(e){return new Q(Ne.fromString(e))}static fromName(e){return new Q(Ne.fromString(e).popFirst(5))}static empty(){return new Q(Ne.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ne.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Ne.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Q(new Ne(e.slice()))}}function mx(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=ie.fromTimestamp(r===1e9?new Je(n+1,0):new Je(n,r));return new vr(i,Q.empty(),e)}function px(t){return new vr(t.readTime,t.key,-1)}class vr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new vr(ie.min(),Q.empty(),-1)}static max(){return new vr(ie.max(),Q.empty(),-1)}}function gx(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=Q.comparator(t.documentKey,e.documentKey),n!==0?n:be(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vx="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class yx{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $o(t){if(t.code!==k.FAILED_PRECONDITION||t.message!==vx)throw t;G("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&te(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new O((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof O?n:O.resolve(n)}catch(n){return O.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):O.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):O.reject(n)}static resolve(e){return new O((n,r)=>{n(e)})}static reject(e){return new O((n,r)=>{r(e)})}static waitFor(e){return new O((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},c=>r(c))}),o=!0,s===i&&n()})}static or(e){let n=O.resolve(!1);for(const r of e)n=n.next(i=>i?O.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new O((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let c=0;c<s;c++){const l=c;n(e[l]).next(u=>{o[l]=u,++a,a===s&&r(o)},u=>i(u))}})}static doWhile(e,n){return new O((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function Vo(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qh{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ot(r),this.ut=r=>n.writeSequenceNumber(r))}ot(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ut&&this.ut(e),e}}Qh.ct=-1;function al(t){return t==null}function uc(t){return t===0&&1/t==-1/0}function wx(t){return typeof t=="number"&&Number.isInteger(t)&&!uc(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jp(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function si(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function u1(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tt{constructor(e,n){this.comparator=e,this.root=n||at.EMPTY}insert(e,n){return new tt(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,at.BLACK,null,null))}remove(e){return new tt(this.comparator,this.root.remove(e,this.comparator).copy(null,null,at.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new ya(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new ya(this.root,e,this.comparator,!1)}getReverseIterator(){return new ya(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new ya(this.root,e,this.comparator,!0)}}class ya{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class at{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??at.RED,this.left=i??at.EMPTY,this.right=s??at.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new at(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return at.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return at.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,at.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,at.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw te();const e=this.left.check();if(e!==this.right.check())throw te();return e+(this.isRed()?0:1)}}at.EMPTY=null,at.RED=!0,at.BLACK=!1;at.EMPTY=new class{constructor(){this.size=0}get key(){throw te()}get value(){throw te()}get color(){throw te()}get left(){throw te()}get right(){throw te()}copy(t,e,n,r,i){return this}insert(t,e,n){return new at(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ze{constructor(e){this.comparator=e,this.data=new tt(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Hp(this.data.getIterator())}getIteratorFrom(e){return new Hp(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Ze)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Ze(this.comparator);return n.data=e,n}}class Hp{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mt{constructor(e){this.fields=e,e.sort(vt.comparator)}static empty(){return new Mt([])}unionWith(e){let n=new Ze(vt.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Mt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Vi(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bx extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Et{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(r){try{return atob(r)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new bx("Invalid base64 string: "+i):i}}(e);return new Et(n)}static fromUint8Array(e){const n=function(r){let i="";for(let s=0;s<r.length;++s)i+=String.fromCharCode(r[s]);return i}(e);return new Et(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let r=0;r<e.length;r++)n[r]=e.charCodeAt(r);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return be(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Et.EMPTY_BYTE_STRING=new Et("");const _x=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function yr(t){if(De(!!t),typeof t=="string"){let e=0;const n=_x.exec(t);if(De(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Qe(t.seconds),nanos:Qe(t.nanos)}}function Qe(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Bi(t){return typeof t=="string"?Et.fromBase64String(t):Et.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function f1(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function h1(t){const e=t.mapValue.fields.__previous_value__;return f1(e)?h1(e):e}function vo(t){const e=yr(t.mapValue.fields.__local_write_time__.timestampValue);return new Je(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ex{constructor(e,n,r,i,s,o,a,c){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=c}}class yo{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new yo("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof yo&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wa={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Jr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?f1(t)?4:Tx(t)?9007199254740991:10:te()}function En(t,e){if(t===e)return!0;const n=Jr(t);if(n!==Jr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return vo(t).isEqual(vo(e));case 3:return function(r,i){if(typeof r.timestampValue=="string"&&typeof i.timestampValue=="string"&&r.timestampValue.length===i.timestampValue.length)return r.timestampValue===i.timestampValue;const s=yr(r.timestampValue),o=yr(i.timestampValue);return s.seconds===o.seconds&&s.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(r,i){return Bi(r.bytesValue).isEqual(Bi(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(r,i){return Qe(r.geoPointValue.latitude)===Qe(i.geoPointValue.latitude)&&Qe(r.geoPointValue.longitude)===Qe(i.geoPointValue.longitude)}(t,e);case 2:return function(r,i){if("integerValue"in r&&"integerValue"in i)return Qe(r.integerValue)===Qe(i.integerValue);if("doubleValue"in r&&"doubleValue"in i){const s=Qe(r.doubleValue),o=Qe(i.doubleValue);return s===o?uc(s)===uc(o):isNaN(s)&&isNaN(o)}return!1}(t,e);case 9:return Vi(t.arrayValue.values||[],e.arrayValue.values||[],En);case 10:return function(r,i){const s=r.mapValue.fields||{},o=i.mapValue.fields||{};if(jp(s)!==jp(o))return!1;for(const a in s)if(s.hasOwnProperty(a)&&(o[a]===void 0||!En(s[a],o[a])))return!1;return!0}(t,e);default:return te()}}function wo(t,e){return(t.values||[]).find(n=>En(n,e))!==void 0}function ji(t,e){if(t===e)return 0;const n=Jr(t),r=Jr(e);if(n!==r)return be(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return be(t.booleanValue,e.booleanValue);case 2:return function(i,s){const o=Qe(i.integerValue||i.doubleValue),a=Qe(s.integerValue||s.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return zp(t.timestampValue,e.timestampValue);case 4:return zp(vo(t),vo(e));case 5:return be(t.stringValue,e.stringValue);case 6:return function(i,s){const o=Bi(i),a=Bi(s);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(i,s){const o=i.split("/"),a=s.split("/");for(let c=0;c<o.length&&c<a.length;c++){const l=be(o[c],a[c]);if(l!==0)return l}return be(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,s){const o=be(Qe(i.latitude),Qe(s.latitude));return o!==0?o:be(Qe(i.longitude),Qe(s.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,s){const o=i.values||[],a=s.values||[];for(let c=0;c<o.length&&c<a.length;++c){const l=ji(o[c],a[c]);if(l)return l}return be(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,s){if(i===wa.mapValue&&s===wa.mapValue)return 0;if(i===wa.mapValue)return 1;if(s===wa.mapValue)return-1;const o=i.fields||{},a=Object.keys(o),c=s.fields||{},l=Object.keys(c);a.sort(),l.sort();for(let u=0;u<a.length&&u<l.length;++u){const f=be(a[u],l[u]);if(f!==0)return f;const h=ji(o[a[u]],c[l[u]]);if(h!==0)return h}return be(a.length,l.length)}(t.mapValue,e.mapValue);default:throw te()}}function zp(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return be(t,e);const n=yr(t),r=yr(e),i=be(n.seconds,r.seconds);return i!==0?i:be(n.nanos,r.nanos)}function Hi(t){return lf(t)}function lf(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(r){const i=yr(r);return`time(${i.seconds},${i.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?Bi(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,Q.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(r){let i="[",s=!0;for(const o of r.values||[])s?s=!1:i+=",",i+=lf(o);return i+"]"}(t.arrayValue):"mapValue"in t?function(r){const i=Object.keys(r.fields||{}).sort();let s="{",o=!0;for(const a of i)o?o=!1:s+=",",s+=`${a}:${lf(r.fields[a])}`;return s+"}"}(t.mapValue):te();var e,n}function Wp(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function uf(t){return!!t&&"integerValue"in t}function Xh(t){return!!t&&"arrayValue"in t}function qp(t){return!!t&&"nullValue"in t}function Gp(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Oa(t){return!!t&&"mapValue"in t}function Hs(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return si(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Hs(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Hs(t.arrayValue.values[n]);return e}return Object.assign({},t)}function Tx(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rt{constructor(e){this.value=e}static empty(){return new Rt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Oa(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Hs(n)}setAll(e){let n=vt.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=Hs(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());Oa(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return En(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];Oa(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){si(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new Rt(Hs(this.value))}}function d1(t){const e=[];return si(t.fields,(n,r)=>{const i=new vt([n]);if(Oa(r)){const s=d1(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new Mt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pt{constructor(e,n,r,i,s,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new pt(e,0,ie.min(),ie.min(),ie.min(),Rt.empty(),0)}static newFoundDocument(e,n,r,i){return new pt(e,1,n,ie.min(),r,i,0)}static newNoDocument(e,n){return new pt(e,2,n,ie.min(),ie.min(),Rt.empty(),0)}static newUnknownDocument(e,n){return new pt(e,3,n,ie.min(),ie.min(),Rt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(ie.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Rt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Rt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ie.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof pt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new pt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fc{constructor(e,n){this.position=e,this.inclusive=n}}function Kp(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=Q.comparator(Q.fromName(o.referenceValue),n.key):r=ji(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function Yp(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!En(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ci{constructor(e,n="asc"){this.field=e,this.dir=n}}function Ix(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m1{}class Xe extends m1{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new Cx(e,n,r):n==="array-contains"?new xx(e,r):n==="in"?new Rx(e,r):n==="not-in"?new Ox(e,r):n==="array-contains-any"?new Nx(e,r):new Xe(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new Sx(e,r):new Ax(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(ji(n,this.value)):n!==null&&Jr(this.value)===Jr(n)&&this.matchesComparison(ji(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return te()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class an extends m1{constructor(e,n){super(),this.filters=e,this.op=n,this.ht=null}static create(e,n){return new an(e,n)}matches(e){return p1(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ht!==null||(this.ht=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ht}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.lt(n=>n.isInequality());return e!==null?e.field:null}lt(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function p1(t){return t.op==="and"}function g1(t){return kx(t)&&p1(t)}function kx(t){for(const e of t.filters)if(e instanceof an)return!1;return!0}function ff(t){if(t instanceof Xe)return t.field.canonicalString()+t.op.toString()+Hi(t.value);if(g1(t))return t.filters.map(e=>ff(e)).join(",");{const e=t.filters.map(n=>ff(n)).join(",");return`${t.op}(${e})`}}function v1(t,e){return t instanceof Xe?function(n,r){return r instanceof Xe&&n.op===r.op&&n.field.isEqual(r.field)&&En(n.value,r.value)}(t,e):t instanceof an?function(n,r){return r instanceof an&&n.op===r.op&&n.filters.length===r.filters.length?n.filters.reduce((i,s,o)=>i&&v1(s,r.filters[o]),!0):!1}(t,e):void te()}function y1(t){return t instanceof Xe?function(e){return`${e.field.canonicalString()} ${e.op} ${Hi(e.value)}`}(t):t instanceof an?function(e){return e.op.toString()+" {"+e.getFilters().map(y1).join(" ,")+"}"}(t):"Filter"}class Cx extends Xe{constructor(e,n,r){super(e,n,r),this.key=Q.fromName(r.referenceValue)}matches(e){const n=Q.comparator(e.key,this.key);return this.matchesComparison(n)}}class Sx extends Xe{constructor(e,n){super(e,"in",n),this.keys=w1("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class Ax extends Xe{constructor(e,n){super(e,"not-in",n),this.keys=w1("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function w1(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>Q.fromName(r.referenceValue))}class xx extends Xe{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Xh(n)&&wo(n.arrayValue,this.value)}}class Rx extends Xe{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&wo(this.value.arrayValue,n)}}class Ox extends Xe{constructor(e,n){super(e,"not-in",n)}matches(e){if(wo(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!wo(this.value.arrayValue,n)}}class Nx extends Xe{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Xh(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>wo(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Px{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.ft=null}}function Qp(t,e=null,n=[],r=[],i=null,s=null,o=null){return new Px(t,e,n,r,i,s,o)}function Jh(t){const e=se(t);if(e.ft===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>ff(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),al(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Hi(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Hi(r)).join(",")),e.ft=n}return e.ft}function Zh(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!Ix(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!v1(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Yp(t.startAt,e.startAt)&&Yp(t.endAt,e.endAt)}function hf(t){return Q.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cs{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=c,this.dt=null,this.wt=null,this.startAt,this.endAt}}function Dx(t,e,n,r,i,s,o,a){return new cs(t,e,n,r,i,s,o,a)}function cl(t){return new cs(t)}function Xp(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function ed(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function ll(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function b1(t){return t.collectionGroup!==null}function Si(t){const e=se(t);if(e.dt===null){e.dt=[];const n=ll(e),r=ed(e);if(n!==null&&r===null)n.isKeyField()||e.dt.push(new Ci(n)),e.dt.push(new Ci(vt.keyField(),"asc"));else{let i=!1;for(const s of e.explicitOrderBy)e.dt.push(s),s.field.isKeyField()&&(i=!0);if(!i){const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.dt.push(new Ci(vt.keyField(),s))}}}return e.dt}function $n(t){const e=se(t);if(!e.wt)if(e.limitType==="F")e.wt=Qp(e.path,e.collectionGroup,Si(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const s of Si(e)){const o=s.dir==="desc"?"asc":"desc";n.push(new Ci(s.field,o))}const r=e.endAt?new fc(e.endAt.position,e.endAt.inclusive):null,i=e.startAt?new fc(e.startAt.position,e.startAt.inclusive):null;e.wt=Qp(e.path,e.collectionGroup,n,e.filters,e.limit,r,i)}return e.wt}function df(t,e){e.getFirstInequalityField(),ll(t);const n=t.filters.concat([e]);return new cs(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function mf(t,e,n){return new cs(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function ul(t,e){return Zh($n(t),$n(e))&&t.limitType===e.limitType}function _1(t){return`${Jh($n(t))}|lt:${t.limitType}`}function pf(t){return`Query(target=${function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(r=>y1(r)).join(", ")}]`),al(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(r=>function(i){return`${i.field.canonicalString()} (${i.dir})`}(r)).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Hi(r)).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Hi(r)).join(",")),`Target(${n})`}($n(t))}; limitType=${t.limitType})`}function fl(t,e){return e.isFoundDocument()&&function(n,r){const i=r.key.path;return n.collectionGroup!==null?r.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):Q.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)}(t,e)&&function(n,r){for(const i of Si(n))if(!i.field.isKeyField()&&r.data.field(i.field)===null)return!1;return!0}(t,e)&&function(n,r){for(const i of n.filters)if(!i.matches(r))return!1;return!0}(t,e)&&function(n,r){return!(n.startAt&&!function(i,s,o){const a=Kp(i,s,o);return i.inclusive?a<=0:a<0}(n.startAt,Si(n),r)||n.endAt&&!function(i,s,o){const a=Kp(i,s,o);return i.inclusive?a>=0:a>0}(n.endAt,Si(n),r))}(t,e)}function Mx(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function E1(t){return(e,n)=>{let r=!1;for(const i of Si(t)){const s=Lx(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function Lx(t,e,n){const r=t.field.isKeyField()?Q.comparator(e.key,n.key):function(i,s,o){const a=s.data.field(i),c=o.data.field(i);return a!==null&&c!==null?ji(a,c):te()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return te()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ls{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){si(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return u1(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ux=new tt(Q.comparator);function Vn(){return Ux}const T1=new tt(Q.comparator);function Rs(...t){let e=T1;for(const n of t)e=e.insert(n.key,n);return e}function I1(t){let e=T1;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function $r(){return zs()}function k1(){return zs()}function zs(){return new ls(t=>t.toString(),(t,e)=>t.isEqual(e))}const Fx=new tt(Q.comparator),$x=new Ze(Q.comparator);function fe(...t){let e=$x;for(const n of t)e=e.add(n);return e}const Vx=new Ze(be);function C1(){return Vx}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function S1(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:uc(e)?"-0":e}}function A1(t){return{integerValue:""+t}}function Bx(t,e){return wx(e)?A1(e):S1(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hl{constructor(){this._=void 0}}function jx(t,e,n){return t instanceof hc?function(r,i){const s={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return i&&(s.fields.__previous_value__=i),{mapValue:s}}(n,e):t instanceof zi?R1(t,e):t instanceof bo?O1(t,e):function(r,i){const s=x1(r,i),o=Jp(s)+Jp(r._t);return uf(s)&&uf(r._t)?A1(o):S1(r.serializer,o)}(t,e)}function Hx(t,e,n){return t instanceof zi?R1(t,e):t instanceof bo?O1(t,e):n}function x1(t,e){return t instanceof dc?uf(n=e)||function(r){return!!r&&"doubleValue"in r}(n)?e:{integerValue:0}:null;var n}class hc extends hl{}class zi extends hl{constructor(e){super(),this.elements=e}}function R1(t,e){const n=N1(e);for(const r of t.elements)n.some(i=>En(i,r))||n.push(r);return{arrayValue:{values:n}}}class bo extends hl{constructor(e){super(),this.elements=e}}function O1(t,e){let n=N1(e);for(const r of t.elements)n=n.filter(i=>!En(i,r));return{arrayValue:{values:n}}}class dc extends hl{constructor(e,n){super(),this.serializer=e,this._t=n}}function Jp(t){return Qe(t.integerValue||t.doubleValue)}function N1(t){return Xh(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zx{constructor(e,n){this.field=e,this.transform=n}}function Wx(t,e){return t.field.isEqual(e.field)&&function(n,r){return n instanceof zi&&r instanceof zi||n instanceof bo&&r instanceof bo?Vi(n.elements,r.elements,En):n instanceof dc&&r instanceof dc?En(n._t,r._t):n instanceof hc&&r instanceof hc}(t.transform,e.transform)}class qx{constructor(e,n){this.version=e,this.transformResults=n}}class qt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new qt}static exists(e){return new qt(void 0,e)}static updateTime(e){return new qt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Na(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class dl{}function P1(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new td(t.key,qt.none()):new Bo(t.key,t.data,qt.none());{const n=t.data,r=Rt.empty();let i=new Ze(vt.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new Ir(t.key,r,new Mt(i.toArray()),qt.none())}}function Gx(t,e,n){t instanceof Bo?function(r,i,s){const o=r.value.clone(),a=eg(r.fieldTransforms,i,s.transformResults);o.setAll(a),i.convertToFoundDocument(s.version,o).setHasCommittedMutations()}(t,e,n):t instanceof Ir?function(r,i,s){if(!Na(r.precondition,i))return void i.convertToUnknownDocument(s.version);const o=eg(r.fieldTransforms,i,s.transformResults),a=i.data;a.setAll(D1(r)),a.setAll(o),i.convertToFoundDocument(s.version,a).setHasCommittedMutations()}(t,e,n):function(r,i,s){i.convertToNoDocument(s.version).setHasCommittedMutations()}(0,e,n)}function Ws(t,e,n,r){return t instanceof Bo?function(i,s,o,a){if(!Na(i.precondition,s))return o;const c=i.value.clone(),l=tg(i.fieldTransforms,a,s);return c.setAll(l),s.convertToFoundDocument(s.version,c).setHasLocalMutations(),null}(t,e,n,r):t instanceof Ir?function(i,s,o,a){if(!Na(i.precondition,s))return o;const c=tg(i.fieldTransforms,a,s),l=s.data;return l.setAll(D1(i)),l.setAll(c),s.convertToFoundDocument(s.version,l).setHasLocalMutations(),o===null?null:o.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(u=>u.field))}(t,e,n,r):function(i,s,o){return Na(i.precondition,s)?(s.convertToNoDocument(s.version).setHasLocalMutations(),null):o}(t,e,n)}function Kx(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=x1(r.transform,i||null);s!=null&&(n===null&&(n=Rt.empty()),n.set(r.field,s))}return n||null}function Zp(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,r){return n===void 0&&r===void 0||!(!n||!r)&&Vi(n,r,(i,s)=>Wx(i,s))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Bo extends dl{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Ir extends dl{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function D1(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function eg(t,e,n){const r=new Map;De(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,Hx(o,a,n[i]))}return r}function tg(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,jx(s,o,e))}return r}class td extends dl{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Yx extends dl{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qx{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&Gx(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Ws(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Ws(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=k1();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const c=P1(o,a);c!==null&&r.set(i.key,c),o.isValidDocument()||o.convertToNoDocument(ie.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),fe())}isEqual(e){return this.batchId===e.batchId&&Vi(this.mutations,e.mutations,(n,r)=>Zp(n,r))&&Vi(this.baseMutations,e.baseMutations,(n,r)=>Zp(n,r))}}class nd{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){De(e.mutations.length===r.length);let i=Fx;const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new nd(e,n,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xx{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jx{constructor(e){this.count=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ke,me;function Zx(t){switch(t){default:return te();case k.CANCELLED:case k.UNKNOWN:case k.DEADLINE_EXCEEDED:case k.RESOURCE_EXHAUSTED:case k.INTERNAL:case k.UNAVAILABLE:case k.UNAUTHENTICATED:return!1;case k.INVALID_ARGUMENT:case k.NOT_FOUND:case k.ALREADY_EXISTS:case k.PERMISSION_DENIED:case k.FAILED_PRECONDITION:case k.ABORTED:case k.OUT_OF_RANGE:case k.UNIMPLEMENTED:case k.DATA_LOSS:return!0}}function M1(t){if(t===void 0)return Fn("GRPC error has no .code"),k.UNKNOWN;switch(t){case Ke.OK:return k.OK;case Ke.CANCELLED:return k.CANCELLED;case Ke.UNKNOWN:return k.UNKNOWN;case Ke.DEADLINE_EXCEEDED:return k.DEADLINE_EXCEEDED;case Ke.RESOURCE_EXHAUSTED:return k.RESOURCE_EXHAUSTED;case Ke.INTERNAL:return k.INTERNAL;case Ke.UNAVAILABLE:return k.UNAVAILABLE;case Ke.UNAUTHENTICATED:return k.UNAUTHENTICATED;case Ke.INVALID_ARGUMENT:return k.INVALID_ARGUMENT;case Ke.NOT_FOUND:return k.NOT_FOUND;case Ke.ALREADY_EXISTS:return k.ALREADY_EXISTS;case Ke.PERMISSION_DENIED:return k.PERMISSION_DENIED;case Ke.FAILED_PRECONDITION:return k.FAILED_PRECONDITION;case Ke.ABORTED:return k.ABORTED;case Ke.OUT_OF_RANGE:return k.OUT_OF_RANGE;case Ke.UNIMPLEMENTED:return k.UNIMPLEMENTED;case Ke.DATA_LOSS:return k.DATA_LOSS;default:return te()}}(me=Ke||(Ke={}))[me.OK=0]="OK",me[me.CANCELLED=1]="CANCELLED",me[me.UNKNOWN=2]="UNKNOWN",me[me.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",me[me.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",me[me.NOT_FOUND=5]="NOT_FOUND",me[me.ALREADY_EXISTS=6]="ALREADY_EXISTS",me[me.PERMISSION_DENIED=7]="PERMISSION_DENIED",me[me.UNAUTHENTICATED=16]="UNAUTHENTICATED",me[me.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",me[me.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",me[me.ABORTED=10]="ABORTED",me[me.OUT_OF_RANGE=11]="OUT_OF_RANGE",me[me.UNIMPLEMENTED=12]="UNIMPLEMENTED",me[me.INTERNAL=13]="INTERNAL",me[me.UNAVAILABLE=14]="UNAVAILABLE",me[me.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rd{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return ba}static getOrCreateInstance(){return ba===null&&(ba=new rd),ba}onExistenceFilterMismatch(e){const n=Symbol();return this.onExistenceFilterMismatchCallbacks.set(n,e),()=>this.onExistenceFilterMismatchCallbacks.delete(n)}notifyOnExistenceFilterMismatch(e){this.onExistenceFilterMismatchCallbacks.forEach(n=>n(e))}}let ba=null;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ml{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,jo.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new ml(ie.min(),i,C1(),Vn(),fe())}}class jo{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new jo(r,n,fe(),fe(),fe())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pa{constructor(e,n,r,i){this.It=e,this.removedTargetIds=n,this.key=r,this.Tt=i}}class L1{constructor(e,n){this.targetId=e,this.Et=n}}class U1{constructor(e,n,r=Et.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class ng{constructor(){this.At=0,this.Rt=ig(),this.vt=Et.EMPTY_BYTE_STRING,this.bt=!1,this.Pt=!0}get current(){return this.bt}get resumeToken(){return this.vt}get Vt(){return this.At!==0}get St(){return this.Pt}Dt(e){e.approximateByteSize()>0&&(this.Pt=!0,this.vt=e)}Ct(){let e=fe(),n=fe(),r=fe();return this.Rt.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:te()}}),new jo(this.vt,this.bt,e,n,r)}xt(){this.Pt=!1,this.Rt=ig()}Nt(e,n){this.Pt=!0,this.Rt=this.Rt.insert(e,n)}kt(e){this.Pt=!0,this.Rt=this.Rt.remove(e)}Ot(){this.At+=1}$t(){this.At-=1}Mt(){this.Pt=!0,this.bt=!0}}class eR{constructor(e){this.Ft=e,this.Bt=new Map,this.Lt=Vn(),this.qt=rg(),this.Ut=new Ze(be)}Kt(e){for(const n of e.It)e.Tt&&e.Tt.isFoundDocument()?this.Gt(n,e.Tt):this.Qt(n,e.key,e.Tt);for(const n of e.removedTargetIds)this.Qt(n,e.key,e.Tt)}zt(e){this.forEachTarget(e,n=>{const r=this.jt(n);switch(e.state){case 0:this.Wt(n)&&r.Dt(e.resumeToken);break;case 1:r.$t(),r.Vt||r.xt(),r.Dt(e.resumeToken);break;case 2:r.$t(),r.Vt||this.removeTarget(n);break;case 3:this.Wt(n)&&(r.Mt(),r.Dt(e.resumeToken));break;case 4:this.Wt(n)&&(this.Ht(n),r.Dt(e.resumeToken));break;default:te()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Bt.forEach((r,i)=>{this.Wt(i)&&n(i)})}Jt(e){var n;const r=e.targetId,i=e.Et.count,s=this.Yt(r);if(s){const o=s.target;if(hf(o))if(i===0){const a=new Q(o.path);this.Qt(r,a,pt.newNoDocument(a,ie.min()))}else De(i===1);else{const a=this.Zt(r);a!==i&&(this.Ht(r),this.Ut=this.Ut.add(r),(n=rd.instance)===null||n===void 0||n.notifyOnExistenceFilterMismatch({localCacheCount:a,existenceFilterCount:e.Et.count}))}}}Xt(e){const n=new Map;this.Bt.forEach((s,o)=>{const a=this.Yt(o);if(a){if(s.current&&hf(a.target)){const c=new Q(a.target.path);this.Lt.get(c)!==null||this.te(o,c)||this.Qt(o,c,pt.newNoDocument(c,e))}s.St&&(n.set(o,s.Ct()),s.xt())}});let r=fe();this.qt.forEach((s,o)=>{let a=!0;o.forEachWhile(c=>{const l=this.Yt(c);return!l||l.purpose===2||(a=!1,!1)}),a&&(r=r.add(s))}),this.Lt.forEach((s,o)=>o.setReadTime(e));const i=new ml(e,n,this.Ut,this.Lt,r);return this.Lt=Vn(),this.qt=rg(),this.Ut=new Ze(be),i}Gt(e,n){if(!this.Wt(e))return;const r=this.te(e,n.key)?2:0;this.jt(e).Nt(n.key,r),this.Lt=this.Lt.insert(n.key,n),this.qt=this.qt.insert(n.key,this.ee(n.key).add(e))}Qt(e,n,r){if(!this.Wt(e))return;const i=this.jt(e);this.te(e,n)?i.Nt(n,1):i.kt(n),this.qt=this.qt.insert(n,this.ee(n).delete(e)),r&&(this.Lt=this.Lt.insert(n,r))}removeTarget(e){this.Bt.delete(e)}Zt(e){const n=this.jt(e).Ct();return this.Ft.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ot(e){this.jt(e).Ot()}jt(e){let n=this.Bt.get(e);return n||(n=new ng,this.Bt.set(e,n)),n}ee(e){let n=this.qt.get(e);return n||(n=new Ze(be),this.qt=this.qt.insert(e,n)),n}Wt(e){const n=this.Yt(e)!==null;return n||G("WatchChangeAggregator","Detected inactive target",e),n}Yt(e){const n=this.Bt.get(e);return n&&n.Vt?null:this.Ft.ne(e)}Ht(e){this.Bt.set(e,new ng),this.Ft.getRemoteKeysForTarget(e).forEach(n=>{this.Qt(e,n,null)})}te(e,n){return this.Ft.getRemoteKeysForTarget(e).has(n)}}function rg(){return new tt(Q.comparator)}function ig(){return new tt(Q.comparator)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tR=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),nR=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),rR=(()=>({and:"AND",or:"OR"}))();class iR{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function mc(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function F1(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function sR(t,e){return mc(t,e.toTimestamp())}function yn(t){return De(!!t),ie.fromTimestamp(function(e){const n=yr(e);return new Je(n.seconds,n.nanos)}(t))}function id(t,e){return function(n){return new Ne(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function $1(t){const e=Ne.fromString(t);return De(H1(e)),e}function gf(t,e){return id(t.databaseId,e.path)}function ou(t,e){const n=$1(e);if(n.get(1)!==t.databaseId.projectId)throw new B(k.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new B(k.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new Q(V1(n))}function vf(t,e){return id(t.databaseId,e)}function oR(t){const e=$1(t);return e.length===4?Ne.emptyPath():V1(e)}function yf(t){return new Ne(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function V1(t){return De(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function sg(t,e,n){return{name:gf(t,e),fields:n.value.mapValue.fields}}function aR(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:te()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(c,l){return c.useProto3Json?(De(l===void 0||typeof l=="string"),Et.fromBase64String(l||"")):(De(l===void 0||l instanceof Uint8Array),Et.fromUint8Array(l||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const l=c.code===void 0?k.UNKNOWN:M1(c.code);return new B(l,c.message||"")}(o);n=new U1(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=ou(t,r.document.name),s=yn(r.document.updateTime),o=r.document.createTime?yn(r.document.createTime):ie.min(),a=new Rt({mapValue:{fields:r.document.fields}}),c=pt.newFoundDocument(i,s,o,a),l=r.targetIds||[],u=r.removedTargetIds||[];n=new Pa(l,u,c.key,c)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=ou(t,r.document),s=r.readTime?yn(r.readTime):ie.min(),o=pt.newNoDocument(i,s),a=r.removedTargetIds||[];n=new Pa([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=ou(t,r.document),s=r.removedTargetIds||[];n=new Pa([],s,i,null)}else{if(!("filter"in e))return te();{e.filter;const r=e.filter;r.targetId;const i=r.count||0,s=new Jx(i),o=r.targetId;n=new L1(o,s)}}return n}function cR(t,e){let n;if(e instanceof Bo)n={update:sg(t,e.key,e.value)};else if(e instanceof td)n={delete:gf(t,e.key)};else if(e instanceof Ir)n={update:sg(t,e.key,e.data),updateMask:vR(e.fieldMask)};else{if(!(e instanceof Yx))return te();n={verify:gf(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,s){const o=s.transform;if(o instanceof hc)return{fieldPath:s.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof zi)return{fieldPath:s.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof bo)return{fieldPath:s.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof dc)return{fieldPath:s.field.canonicalString(),increment:o._t};throw te()}(0,r))),e.precondition.isNone||(n.currentDocument=function(r,i){return i.updateTime!==void 0?{updateTime:sR(r,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:te()}(t,e.precondition)),n}function lR(t,e){return t&&t.length>0?(De(e!==void 0),t.map(n=>function(r,i){let s=r.updateTime?yn(r.updateTime):yn(i);return s.isEqual(ie.min())&&(s=yn(i)),new qx(s,r.transformResults||[])}(n,e))):[]}function uR(t,e){return{documents:[vf(t,e.path)]}}function fR(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=vf(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=vf(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(c){if(c.length!==0)return j1(an.create(c,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const s=function(c){if(c.length!==0)return c.map(l=>function(u){return{field:pi(u.field),direction:mR(u.dir)}}(l))}(e.orderBy);s&&(n.structuredQuery.orderBy=s);const o=function(c,l){return c.useProto3Json||al(l)?l:{value:l}}(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),n}function hR(t){let e=oR(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){De(r===1);const u=n.from[0];u.allDescendants?i=u.collectionId:e=e.child(u.collectionId)}let s=[];n.where&&(s=function(u){const f=B1(u);return f instanceof an&&g1(f)?f.getFilters():[f]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(u=>function(f){return new Ci(gi(f.field),function(h){switch(h){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(f.direction))}(u)));let a=null;n.limit&&(a=function(u){let f;return f=typeof u=="object"?u.value:u,al(f)?null:f}(n.limit));let c=null;n.startAt&&(c=function(u){const f=!!u.before,h=u.values||[];return new fc(h,f)}(n.startAt));let l=null;return n.endAt&&(l=function(u){const f=!u.before,h=u.values||[];return new fc(h,f)}(n.endAt)),Dx(e,i,o,s,a,"F",c,l)}function dR(t,e){const n=function(r,i){switch(i){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return te()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function B1(t){return t.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=gi(e.unaryFilter.field);return Xe.create(n,"==",{doubleValue:NaN});case"IS_NULL":const r=gi(e.unaryFilter.field);return Xe.create(r,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=gi(e.unaryFilter.field);return Xe.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const s=gi(e.unaryFilter.field);return Xe.create(s,"!=",{nullValue:"NULL_VALUE"});default:return te()}}(t):t.fieldFilter!==void 0?function(e){return Xe.create(gi(e.fieldFilter.field),function(n){switch(n){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return te()}}(e.fieldFilter.op),e.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(e){return an.create(e.compositeFilter.filters.map(n=>B1(n)),function(n){switch(n){case"AND":return"and";case"OR":return"or";default:return te()}}(e.compositeFilter.op))}(t):te()}function mR(t){return tR[t]}function pR(t){return nR[t]}function gR(t){return rR[t]}function pi(t){return{fieldPath:t.canonicalString()}}function gi(t){return vt.fromServerFormat(t.fieldPath)}function j1(t){return t instanceof Xe?function(e){if(e.op==="=="){if(Gp(e.value))return{unaryFilter:{field:pi(e.field),op:"IS_NAN"}};if(qp(e.value))return{unaryFilter:{field:pi(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(Gp(e.value))return{unaryFilter:{field:pi(e.field),op:"IS_NOT_NAN"}};if(qp(e.value))return{unaryFilter:{field:pi(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:pi(e.field),op:pR(e.op),value:e.value}}}(t):t instanceof an?function(e){const n=e.getFilters().map(r=>j1(r));return n.length===1?n[0]:{compositeFilter:{op:gR(e.op),filters:n}}}(t):te()}function vR(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function H1(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zr{constructor(e,n,r,i,s=ie.min(),o=ie.min(),a=Et.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new zr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new zr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new zr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yR{constructor(e){this.se=e}}function wR(t){const e=hR({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?mf(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bR{constructor(){this.He=new _R}addToCollectionParentIndex(e,n){return this.He.add(n),O.resolve()}getCollectionParents(e,n){return O.resolve(this.He.getEntries(n))}addFieldIndex(e,n){return O.resolve()}deleteFieldIndex(e,n){return O.resolve()}getDocumentsMatchingTarget(e,n){return O.resolve(null)}getIndexType(e,n){return O.resolve(0)}getFieldIndexes(e,n){return O.resolve([])}getNextCollectionGroupToUpdate(e){return O.resolve(null)}getMinOffset(e,n){return O.resolve(vr.min())}getMinOffsetFromCollectionGroup(e,n){return O.resolve(vr.min())}updateCollectionGroup(e,n,r){return O.resolve()}updateIndexEntries(e,n){return O.resolve()}}class _R{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new Ze(Ne.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new Ze(Ne.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wi{constructor(e){this.Rn=e}next(){return this.Rn+=2,this.Rn}static vn(){return new Wi(0)}static bn(){return new Wi(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ER{constructor(){this.changes=new ls(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,pt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?O.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TR{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IR{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&Ws(r.mutation,i,Mt.empty(),Je.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,fe()).next(()=>r))}getLocalViewOfDocuments(e,n,r=fe()){const i=$r();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=Rs();return s.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=$r();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,fe()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,i){let s=Vn();const o=zs(),a=zs();return n.forEach((c,l)=>{const u=r.get(l.key);i.has(l.key)&&(u===void 0||u.mutation instanceof Ir)?s=s.insert(l.key,l):u!==void 0?(o.set(l.key,u.mutation.getFieldMask()),Ws(u.mutation,l,u.mutation.getFieldMask(),Je.now())):o.set(l.key,Mt.empty())}),this.recalculateAndSaveOverlays(e,s).next(c=>(c.forEach((l,u)=>o.set(l,u)),n.forEach((l,u)=>{var f;return a.set(l,new TR(u,(f=o.get(l))!==null&&f!==void 0?f:null))}),a))}recalculateAndSaveOverlays(e,n){const r=zs();let i=new tt((o,a)=>o-a),s=fe();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(c=>{const l=n.get(c);if(l===null)return;let u=r.get(c)||Mt.empty();u=a.applyToLocalView(l,u),r.set(c,u);const f=(i.get(a.batchId)||fe()).add(c);i=i.insert(a.batchId,f)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),l=c.key,u=c.value,f=k1();u.forEach(h=>{if(!s.has(h)){const d=P1(n.get(h),r.get(h));d!==null&&f.set(h,d),s=s.add(h)}}),o.push(this.documentOverlayCache.saveOverlays(e,l,f))}return O.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r){return function(i){return Q.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):b1(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r):this.getDocumentsMatchingCollectionQuery(e,n,r)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):O.resolve($r());let a=-1,c=s;return o.next(l=>O.forEach(l,(u,f)=>(a<f.largestBatchId&&(a=f.largestBatchId),s.get(u)?O.resolve():this.remoteDocumentCache.getEntry(e,u).next(h=>{c=c.insert(u,h)}))).next(()=>this.populateOverlays(e,l,s)).next(()=>this.computeViews(e,c,l,fe())).next(u=>({batchId:a,changes:I1(u)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new Q(n)).next(r=>{let i=Rs();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r){const i=n.collectionGroup;let s=Rs();return this.indexManager.getCollectionParents(e,i).next(o=>O.forEach(o,a=>{const c=function(l,u){return new cs(u,null,l.explicitOrderBy.slice(),l.filters.slice(),l.limit,l.limitType,l.startAt,l.endAt)}(n,a.child(i));return this.getDocumentsMatchingCollectionQuery(e,c,r).next(l=>{l.forEach((u,f)=>{s=s.insert(u,f)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(e,n,r){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(s=>(i=s,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i))).next(s=>{i.forEach((a,c)=>{const l=c.getKey();s.get(l)===null&&(s=s.insert(l,pt.newInvalidDocument(l)))});let o=Rs();return s.forEach((a,c)=>{const l=i.get(a);l!==void 0&&Ws(l.mutation,c,Mt.empty(),Je.now()),fl(n,c)&&(o=o.insert(a,c))}),o})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kR{constructor(e){this.serializer=e,this.Zn=new Map,this.Xn=new Map}getBundleMetadata(e,n){return O.resolve(this.Zn.get(n))}saveBundleMetadata(e,n){var r;return this.Zn.set(n.id,{id:(r=n).id,version:r.version,createTime:yn(r.createTime)}),O.resolve()}getNamedQuery(e,n){return O.resolve(this.Xn.get(n))}saveNamedQuery(e,n){return this.Xn.set(n.name,function(r){return{name:r.name,query:wR(r.bundledQuery),readTime:yn(r.readTime)}}(n)),O.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CR{constructor(){this.overlays=new tt(Q.comparator),this.ts=new Map}getOverlay(e,n){return O.resolve(this.overlays.get(n))}getOverlays(e,n){const r=$r();return O.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.re(e,n,s)}),O.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.ts.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.ts.delete(r)),O.resolve()}getOverlaysForCollection(e,n,r){const i=$r(),s=n.length+1,o=new Q(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,l=c.getKey();if(!n.isPrefixOf(l.path))break;l.path.length===s&&c.largestBatchId>r&&i.set(c.getKey(),c)}return O.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new tt((l,u)=>l-u);const o=this.overlays.getIterator();for(;o.hasNext();){const l=o.getNext().value;if(l.getKey().getCollectionGroup()===n&&l.largestBatchId>r){let u=s.get(l.largestBatchId);u===null&&(u=$r(),s=s.insert(l.largestBatchId,u)),u.set(l.getKey(),l)}}const a=$r(),c=s.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((l,u)=>a.set(l,u)),!(a.size()>=i)););return O.resolve(a)}re(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.ts.get(i.largestBatchId).delete(r.key);this.ts.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new Xx(n,r));let s=this.ts.get(n);s===void 0&&(s=fe(),this.ts.set(n,s)),this.ts.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sd{constructor(){this.es=new Ze(rt.ns),this.ss=new Ze(rt.rs)}isEmpty(){return this.es.isEmpty()}addReference(e,n){const r=new rt(e,n);this.es=this.es.add(r),this.ss=this.ss.add(r)}os(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.us(new rt(e,n))}cs(e,n){e.forEach(r=>this.removeReference(r,n))}hs(e){const n=new Q(new Ne([])),r=new rt(n,e),i=new rt(n,e+1),s=[];return this.ss.forEachInRange([r,i],o=>{this.us(o),s.push(o.key)}),s}ls(){this.es.forEach(e=>this.us(e))}us(e){this.es=this.es.delete(e),this.ss=this.ss.delete(e)}fs(e){const n=new Q(new Ne([])),r=new rt(n,e),i=new rt(n,e+1);let s=fe();return this.ss.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new rt(e,0),r=this.es.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class rt{constructor(e,n){this.key=e,this.ds=n}static ns(e,n){return Q.comparator(e.key,n.key)||be(e.ds,n.ds)}static rs(e,n){return be(e.ds,n.ds)||Q.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SR{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.ws=1,this._s=new Ze(rt.ns)}checkEmpty(e){return O.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new Qx(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this._s=this._s.add(new rt(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return O.resolve(o)}lookupMutationBatch(e,n){return O.resolve(this.gs(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.ys(r),s=i<0?0:i;return O.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return O.resolve(this.mutationQueue.length===0?-1:this.ws-1)}getAllMutationBatches(e){return O.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new rt(n,0),i=new rt(n,Number.POSITIVE_INFINITY),s=[];return this._s.forEachInRange([r,i],o=>{const a=this.gs(o.ds);s.push(a)}),O.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Ze(be);return n.forEach(i=>{const s=new rt(i,0),o=new rt(i,Number.POSITIVE_INFINITY);this._s.forEachInRange([s,o],a=>{r=r.add(a.ds)})}),O.resolve(this.ps(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;Q.isDocumentKey(s)||(s=s.child(""));const o=new rt(new Q(s),0);let a=new Ze(be);return this._s.forEachWhile(c=>{const l=c.key.path;return!!r.isPrefixOf(l)&&(l.length===i&&(a=a.add(c.ds)),!0)},o),O.resolve(this.ps(a))}ps(e){const n=[];return e.forEach(r=>{const i=this.gs(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){De(this.Is(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this._s;return O.forEach(n.mutations,i=>{const s=new rt(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this._s=r})}En(e){}containsKey(e,n){const r=new rt(n,0),i=this._s.firstAfterOrEqual(r);return O.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,O.resolve()}Is(e,n){return this.ys(e)}ys(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}gs(e){const n=this.ys(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AR{constructor(e){this.Ts=e,this.docs=new tt(Q.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Ts(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return O.resolve(r?r.document.mutableCopy():pt.newInvalidDocument(n))}getEntries(e,n){let r=Vn();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():pt.newInvalidDocument(i))}),O.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=Vn();const o=n.path,a=new Q(o.child("")),c=this.docs.getIteratorFrom(a);for(;c.hasNext();){const{key:l,value:{document:u}}=c.getNext();if(!o.isPrefixOf(l.path))break;l.path.length>o.length+1||gx(px(u),r)<=0||(i.has(u.key)||fl(n,u))&&(s=s.insert(u.key,u.mutableCopy()))}return O.resolve(s)}getAllFromCollectionGroup(e,n,r,i){te()}Es(e,n){return O.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new xR(this)}getSize(e){return O.resolve(this.size)}}class xR extends ER{constructor(e){super(),this.Jn=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.Jn.addEntry(e,i)):this.Jn.removeEntry(r)}),O.waitFor(n)}getFromCache(e,n){return this.Jn.getEntry(e,n)}getAllFromCache(e,n){return this.Jn.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RR{constructor(e){this.persistence=e,this.As=new ls(n=>Jh(n),Zh),this.lastRemoteSnapshotVersion=ie.min(),this.highestTargetId=0,this.Rs=0,this.vs=new sd,this.targetCount=0,this.bs=Wi.vn()}forEachTarget(e,n){return this.As.forEach((r,i)=>n(i)),O.resolve()}getLastRemoteSnapshotVersion(e){return O.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return O.resolve(this.Rs)}allocateTargetId(e){return this.highestTargetId=this.bs.next(),O.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Rs&&(this.Rs=n),O.resolve()}Sn(e){this.As.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.bs=new Wi(n),this.highestTargetId=n),e.sequenceNumber>this.Rs&&(this.Rs=e.sequenceNumber)}addTargetData(e,n){return this.Sn(n),this.targetCount+=1,O.resolve()}updateTargetData(e,n){return this.Sn(n),O.resolve()}removeTargetData(e,n){return this.As.delete(n.target),this.vs.hs(n.targetId),this.targetCount-=1,O.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.As.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.As.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),O.waitFor(s).next(()=>i)}getTargetCount(e){return O.resolve(this.targetCount)}getTargetData(e,n){const r=this.As.get(n)||null;return O.resolve(r)}addMatchingKeys(e,n,r){return this.vs.os(n,r),O.resolve()}removeMatchingKeys(e,n,r){this.vs.cs(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),O.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.vs.hs(n),O.resolve()}getMatchingKeysForTargetId(e,n){const r=this.vs.fs(n);return O.resolve(r)}containsKey(e,n){return O.resolve(this.vs.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OR{constructor(e,n){this.Ps={},this.overlays={},this.Vs=new Qh(0),this.Ss=!1,this.Ss=!0,this.referenceDelegate=e(this),this.Ds=new RR(this),this.indexManager=new bR,this.remoteDocumentCache=function(r){return new AR(r)}(r=>this.referenceDelegate.Cs(r)),this.serializer=new yR(n),this.xs=new kR(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Ss=!1,Promise.resolve()}get started(){return this.Ss}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new CR,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Ps[e.toKey()];return r||(r=new SR(n,this.referenceDelegate),this.Ps[e.toKey()]=r),r}getTargetCache(){return this.Ds}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.xs}runTransaction(e,n,r){G("MemoryPersistence","Starting transaction:",e);const i=new NR(this.Vs.next());return this.referenceDelegate.Ns(),r(i).next(s=>this.referenceDelegate.ks(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Os(e,n){return O.or(Object.values(this.Ps).map(r=>()=>r.containsKey(e,n)))}}class NR extends yx{constructor(e){super(),this.currentSequenceNumber=e}}class od{constructor(e){this.persistence=e,this.$s=new sd,this.Ms=null}static Fs(e){return new od(e)}get Bs(){if(this.Ms)return this.Ms;throw te()}addReference(e,n,r){return this.$s.addReference(r,n),this.Bs.delete(r.toString()),O.resolve()}removeReference(e,n,r){return this.$s.removeReference(r,n),this.Bs.add(r.toString()),O.resolve()}markPotentiallyOrphaned(e,n){return this.Bs.add(n.toString()),O.resolve()}removeTarget(e,n){this.$s.hs(n.targetId).forEach(i=>this.Bs.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Bs.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}Ns(){this.Ms=new Set}ks(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return O.forEach(this.Bs,r=>{const i=Q.fromPath(r);return this.Ls(e,i).next(s=>{s||n.removeEntry(i,ie.min())})}).next(()=>(this.Ms=null,n.apply(e)))}updateLimboDocument(e,n){return this.Ls(e,n).next(r=>{r?this.Bs.delete(n.toString()):this.Bs.add(n.toString())})}Cs(e){return 0}Ls(e,n){return O.or([()=>O.resolve(this.$s.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Os(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ad{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.Vi=r,this.Si=i}static Di(e,n){let r=fe(),i=fe();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new ad(e,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PR{constructor(){this.Ci=!1}initialize(e,n){this.xi=e,this.indexManager=n,this.Ci=!0}getDocumentsMatchingQuery(e,n,r,i){return this.Ni(e,n).next(s=>s||this.ki(e,n,i,r)).next(s=>s||this.Oi(e,n))}Ni(e,n){if(Xp(n))return O.resolve(null);let r=$n(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=mf(n,null,"F"),r=$n(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=fe(...s);return this.xi.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(c=>{const l=this.$i(n,a);return this.Mi(n,l,o,c.readTime)?this.Ni(e,mf(n,null,"F")):this.Fi(e,l,n,c)}))})))}ki(e,n,r,i){return Xp(n)||i.isEqual(ie.min())?this.Oi(e,n):this.xi.getDocuments(e,r).next(s=>{const o=this.$i(n,s);return this.Mi(n,o,r,i)?this.Oi(e,n):(Bp()<=we.DEBUG&&G("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),pf(n)),this.Fi(e,o,n,mx(i,-1)))})}$i(e,n){let r=new Ze(E1(e));return n.forEach((i,s)=>{fl(e,s)&&(r=r.add(s))}),r}Mi(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Oi(e,n){return Bp()<=we.DEBUG&&G("QueryEngine","Using full collection scan to execute query:",pf(n)),this.xi.getDocumentsMatchingQuery(e,n,vr.min())}Fi(e,n,r,i){return this.xi.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DR{constructor(e,n,r,i){this.persistence=e,this.Bi=n,this.serializer=i,this.Li=new tt(be),this.qi=new ls(s=>Jh(s),Zh),this.Ui=new Map,this.Ki=e.getRemoteDocumentCache(),this.Ds=e.getTargetCache(),this.xs=e.getBundleCache(),this.Gi(r)}Gi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new IR(this.Ki,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ki.setIndexManager(this.indexManager),this.Bi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Li))}}function MR(t,e,n,r){return new DR(t,e,n,r)}async function z1(t,e){const n=se(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.Gi(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let c=fe();for(const l of i){o.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}for(const l of s){a.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}return n.localDocuments.getDocuments(r,c).next(l=>({Qi:l,removedBatchIds:o,addedBatchIds:a}))})})}function LR(t,e){const n=se(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.Ki.newChangeBuffer({trackRemovals:!0});return function(o,a,c,l){const u=c.batch,f=u.keys();let h=O.resolve();return f.forEach(d=>{h=h.next(()=>l.getEntry(a,d)).next(g=>{const y=c.docVersions.get(d);De(y!==null),g.version.compareTo(y)<0&&(u.applyToRemoteDocument(g,c),g.isValidDocument()&&(g.setReadTime(c.commitVersion),l.addEntry(g)))})}),h.next(()=>o.mutationQueue.removeMutationBatch(a,u))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(o){let a=fe();for(let c=0;c<o.mutationResults.length;++c)o.mutationResults[c].transformResults.length>0&&(a=a.add(o.batch.mutations[c].key));return a}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function W1(t){const e=se(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ds.getLastRemoteSnapshotVersion(n))}function UR(t,e){const n=se(t),r=e.snapshotVersion;let i=n.Li;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.Ki.newChangeBuffer({trackRemovals:!0});i=n.Li;const a=[];e.targetChanges.forEach((u,f)=>{const h=i.get(f);if(!h)return;a.push(n.Ds.removeMatchingKeys(s,u.removedDocuments,f).next(()=>n.Ds.addMatchingKeys(s,u.addedDocuments,f)));let d=h.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.has(f)?d=d.withResumeToken(Et.EMPTY_BYTE_STRING,ie.min()).withLastLimboFreeSnapshotVersion(ie.min()):u.resumeToken.approximateByteSize()>0&&(d=d.withResumeToken(u.resumeToken,r)),i=i.insert(f,d),function(g,y,_){return g.resumeToken.approximateByteSize()===0||y.snapshotVersion.toMicroseconds()-g.snapshotVersion.toMicroseconds()>=3e8?!0:_.addedDocuments.size+_.modifiedDocuments.size+_.removedDocuments.size>0}(h,d,u)&&a.push(n.Ds.updateTargetData(s,d))});let c=Vn(),l=fe();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,u))}),a.push(FR(s,o,e.documentUpdates).next(u=>{c=u.zi,l=u.ji})),!r.isEqual(ie.min())){const u=n.Ds.getLastRemoteSnapshotVersion(s).next(f=>n.Ds.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(u)}return O.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,c,l)).next(()=>c)}).then(s=>(n.Li=i,s))}function FR(t,e,n){let r=fe(),i=fe();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=Vn();return n.forEach((a,c)=>{const l=s.get(a);c.isFoundDocument()!==l.isFoundDocument()&&(i=i.add(a)),c.isNoDocument()&&c.version.isEqual(ie.min())?(e.removeEntry(a,c.readTime),o=o.insert(a,c)):!l.isValidDocument()||c.version.compareTo(l.version)>0||c.version.compareTo(l.version)===0&&l.hasPendingWrites?(e.addEntry(c),o=o.insert(a,c)):G("LocalStore","Ignoring outdated watch update for ",a,". Current version:",l.version," Watch version:",c.version)}),{zi:o,ji:i}})}function $R(t,e){const n=se(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function VR(t,e){const n=se(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Ds.getTargetData(r,e).next(s=>s?(i=s,O.resolve(i)):n.Ds.allocateTargetId(r).next(o=>(i=new zr(e,o,0,r.currentSequenceNumber),n.Ds.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.Li.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.Li=n.Li.insert(r.targetId,r),n.qi.set(e,r.targetId)),r})}async function wf(t,e,n){const r=se(t),i=r.Li.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Vo(o))throw o;G("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.Li=r.Li.remove(e),r.qi.delete(i.target)}function og(t,e,n){const r=se(t);let i=ie.min(),s=fe();return r.persistence.runTransaction("Execute query","readonly",o=>function(a,c,l){const u=se(a),f=u.qi.get(l);return f!==void 0?O.resolve(u.Li.get(f)):u.Ds.getTargetData(c,l)}(r,o,$n(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Ds.getMatchingKeysForTargetId(o,a.targetId).next(c=>{s=c})}).next(()=>r.Bi.getDocumentsMatchingQuery(o,e,n?i:ie.min(),n?s:fe())).next(a=>(BR(r,Mx(e),a),{documents:a,Wi:s})))}function BR(t,e,n){let r=t.Ui.get(e)||ie.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.Ui.set(e,r)}class ag{constructor(){this.activeTargetIds=C1()}tr(e){this.activeTargetIds=this.activeTargetIds.add(e)}er(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Xi(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class jR{constructor(){this.Br=new ag,this.Lr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.Br.tr(e),this.Lr[e]||"not-current"}updateQueryState(e,n,r){this.Lr[e]=n}removeLocalQueryTarget(e){this.Br.er(e)}isLocalQueryTarget(e){return this.Br.activeTargetIds.has(e)}clearQueryState(e){delete this.Lr[e]}getAllActiveQueryTargets(){return this.Br.activeTargetIds}isActiveQueryTarget(e){return this.Br.activeTargetIds.has(e)}start(){return this.Br=new ag,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HR{qr(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cg{constructor(){this.Ur=()=>this.Kr(),this.Gr=()=>this.Qr(),this.zr=[],this.jr()}qr(e){this.zr.push(e)}shutdown(){window.removeEventListener("online",this.Ur),window.removeEventListener("offline",this.Gr)}jr(){window.addEventListener("online",this.Ur),window.addEventListener("offline",this.Gr)}Kr(){G("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.zr)e(0)}Qr(){G("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.zr)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let _a=null;function au(){return _a===null?_a=268435456+Math.round(2147483648*Math.random()):_a++,"0x"+_a.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zR={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WR{constructor(e){this.Wr=e.Wr,this.Hr=e.Hr}Jr(e){this.Yr=e}Zr(e){this.Xr=e}onMessage(e){this.eo=e}close(){this.Hr()}send(e){this.Wr(e)}no(){this.Yr()}so(e){this.Xr(e)}io(e){this.eo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dt="WebChannelConnection";class qR extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.ro=n+"://"+e.host,this.oo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get uo(){return!1}co(e,n,r,i,s){const o=au(),a=this.ao(e,n);G("RestConnection",`Sending RPC '${e}' ${o}:`,a,r);const c={};return this.ho(c,i,s),this.lo(e,a,c,r).then(l=>(G("RestConnection",`Received RPC '${e}' ${o}: `,l),l),l=>{throw lc("RestConnection",`RPC '${e}' ${o} failed with error: `,l,"url: ",a,"request:",r),l})}fo(e,n,r,i,s,o){return this.co(e,n,r,i,s)}ho(e,n,r){e["X-Goog-Api-Client"]="gl-js/ fire/"+as,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,s)=>e[s]=i),r&&r.headers.forEach((i,s)=>e[s]=i)}ao(e,n){const r=zR[e];return`${this.ro}/v1/${n}:${r}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}lo(e,n,r,i){const s=au();return new Promise((o,a)=>{const c=new ix;c.setWithCredentials(!0),c.listenOnce(tx.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case su.NO_ERROR:const u=c.getResponseJson();G(dt,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(u)),o(u);break;case su.TIMEOUT:G(dt,`RPC '${e}' ${s} timed out`),a(new B(k.DEADLINE_EXCEEDED,"Request time out"));break;case su.HTTP_ERROR:const f=c.getStatus();if(G(dt,`RPC '${e}' ${s} failed with status:`,f,"response text:",c.getResponseText()),f>0){let h=c.getResponseJson();Array.isArray(h)&&(h=h[0]);const d=h==null?void 0:h.error;if(d&&d.status&&d.message){const g=function(y){const _=y.toLowerCase().replace(/_/g,"-");return Object.values(k).indexOf(_)>=0?_:k.UNKNOWN}(d.status);a(new B(g,d.message))}else a(new B(k.UNKNOWN,"Server responded with status "+c.getStatus()))}else a(new B(k.UNAVAILABLE,"Connection failed."));break;default:te()}}finally{G(dt,`RPC '${e}' ${s} completed.`)}});const l=JSON.stringify(i);G(dt,`RPC '${e}' ${s} sending request:`,i),c.send(n,"POST",l,r,15)})}wo(e,n,r){const i=au(),s=[this.ro,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=ZA(),a=ex(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(c.xmlHttpFactory=new rx({})),this.ho(c.initMessageHeaders,n,r),c.encodeInitMessageHeaders=!0;const l=s.join("");G(dt,`Creating RPC '${e}' stream ${i}: ${l}`,c);const u=o.createWebChannel(l,c);let f=!1,h=!1;const d=new WR({Wr:y=>{h?G(dt,`Not sending because RPC '${e}' stream ${i} is closed:`,y):(f||(G(dt,`Opening RPC '${e}' stream ${i} transport.`),u.open(),f=!0),G(dt,`RPC '${e}' stream ${i} sending:`,y),u.send(y))},Hr:()=>u.close()}),g=(y,_,w)=>{y.listen(_,v=>{try{w(v)}catch(b){setTimeout(()=>{throw b},0)}})};return g(u,va.EventType.OPEN,()=>{h||G(dt,`RPC '${e}' stream ${i} transport opened.`)}),g(u,va.EventType.CLOSE,()=>{h||(h=!0,G(dt,`RPC '${e}' stream ${i} transport closed`),d.so())}),g(u,va.EventType.ERROR,y=>{h||(h=!0,lc(dt,`RPC '${e}' stream ${i} transport errored:`,y),d.so(new B(k.UNAVAILABLE,"The operation could not be completed")))}),g(u,va.EventType.MESSAGE,y=>{var _;if(!h){const w=y.data[0];De(!!w);const v=w,b=v.error||((_=v[0])===null||_===void 0?void 0:_.error);if(b){G(dt,`RPC '${e}' stream ${i} received error:`,b);const T=b.status;let R=function(P){const A=Ke[P];if(A!==void 0)return M1(A)}(T),U=b.message;R===void 0&&(R=k.INTERNAL,U="Unknown error status: "+T+" with message "+b.message),h=!0,d.so(new B(R,U)),u.close()}else G(dt,`RPC '${e}' stream ${i} received:`,w),d.io(w)}}),g(a,nx.STAT_EVENT,y=>{y.stat===$p.PROXY?G(dt,`RPC '${e}' stream ${i} detected buffering proxy`):y.stat===$p.NOPROXY&&G(dt,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{d.no()},0),d}}function cu(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pl(t){return new iR(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q1{constructor(e,n,r=1e3,i=1.5,s=6e4){this.Ws=e,this.timerId=n,this._o=r,this.mo=i,this.yo=s,this.po=0,this.Io=null,this.To=Date.now(),this.reset()}reset(){this.po=0}Eo(){this.po=this.yo}Ao(e){this.cancel();const n=Math.floor(this.po+this.Ro()),r=Math.max(0,Date.now()-this.To),i=Math.max(0,n-r);i>0&&G("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.po} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Io=this.Ws.enqueueAfterDelay(this.timerId,i,()=>(this.To=Date.now(),e())),this.po*=this.mo,this.po<this._o&&(this.po=this._o),this.po>this.yo&&(this.po=this.yo)}vo(){this.Io!==null&&(this.Io.skipDelay(),this.Io=null)}cancel(){this.Io!==null&&(this.Io.cancel(),this.Io=null)}Ro(){return(Math.random()-.5)*this.po}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G1{constructor(e,n,r,i,s,o,a,c){this.Ws=e,this.bo=r,this.Po=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.Vo=0,this.So=null,this.Do=null,this.stream=null,this.Co=new q1(e,n)}xo(){return this.state===1||this.state===5||this.No()}No(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.ko()}async stop(){this.xo()&&await this.close(0)}Oo(){this.state=0,this.Co.reset()}$o(){this.No()&&this.So===null&&(this.So=this.Ws.enqueueAfterDelay(this.bo,6e4,()=>this.Mo()))}Fo(e){this.Bo(),this.stream.send(e)}async Mo(){if(this.No())return this.close(0)}Bo(){this.So&&(this.So.cancel(),this.So=null)}Lo(){this.Do&&(this.Do.cancel(),this.Do=null)}async close(e,n){this.Bo(),this.Lo(),this.Co.cancel(),this.Vo++,e!==4?this.Co.reset():n&&n.code===k.RESOURCE_EXHAUSTED?(Fn(n.toString()),Fn("Using maximum backoff delay to prevent overloading the backend."),this.Co.Eo()):n&&n.code===k.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.qo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Zr(n)}qo(){}auth(){this.state=1;const e=this.Uo(this.Vo),n=this.Vo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Vo===n&&this.Ko(r,i)},r=>{e(()=>{const i=new B(k.UNKNOWN,"Fetching auth token failed: "+r.message);return this.Go(i)})})}Ko(e,n){const r=this.Uo(this.Vo);this.stream=this.Qo(e,n),this.stream.Jr(()=>{r(()=>(this.state=2,this.Do=this.Ws.enqueueAfterDelay(this.Po,1e4,()=>(this.No()&&(this.state=3),Promise.resolve())),this.listener.Jr()))}),this.stream.Zr(i=>{r(()=>this.Go(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}ko(){this.state=5,this.Co.Ao(async()=>{this.state=0,this.start()})}Go(e){return G("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Uo(e){return n=>{this.Ws.enqueueAndForget(()=>this.Vo===e?n():(G("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class GR extends G1{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}Qo(e,n){return this.connection.wo("Listen",e,n)}onMessage(e){this.Co.reset();const n=aR(this.serializer,e),r=function(i){if(!("targetChange"in i))return ie.min();const s=i.targetChange;return s.targetIds&&s.targetIds.length?ie.min():s.readTime?yn(s.readTime):ie.min()}(e);return this.listener.zo(n,r)}jo(e){const n={};n.database=yf(this.serializer),n.addTarget=function(i,s){let o;const a=s.target;return o=hf(a)?{documents:uR(i,a)}:{query:fR(i,a)},o.targetId=s.targetId,s.resumeToken.approximateByteSize()>0?o.resumeToken=F1(i,s.resumeToken):s.snapshotVersion.compareTo(ie.min())>0&&(o.readTime=mc(i,s.snapshotVersion.toTimestamp())),o}(this.serializer,e);const r=dR(this.serializer,e);r&&(n.labels=r),this.Fo(n)}Wo(e){const n={};n.database=yf(this.serializer),n.removeTarget=e,this.Fo(n)}}class KR extends G1{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s,this.Ho=!1}get Jo(){return this.Ho}start(){this.Ho=!1,this.lastStreamToken=void 0,super.start()}qo(){this.Ho&&this.Yo([])}Qo(e,n){return this.connection.wo("Write",e,n)}onMessage(e){if(De(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Ho){this.Co.reset();const n=lR(e.writeResults,e.commitTime),r=yn(e.commitTime);return this.listener.Zo(r,n)}return De(!e.writeResults||e.writeResults.length===0),this.Ho=!0,this.listener.Xo()}tu(){const e={};e.database=yf(this.serializer),this.Fo(e)}Yo(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>cR(this.serializer,r))};this.Fo(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YR extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.eu=!1}nu(){if(this.eu)throw new B(k.FAILED_PRECONDITION,"The client has already been terminated.")}co(e,n,r){return this.nu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.connection.co(e,n,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===k.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new B(k.UNKNOWN,i.toString())})}fo(e,n,r,i){return this.nu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.fo(e,n,r,s,o,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===k.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new B(k.UNKNOWN,s.toString())})}terminate(){this.eu=!0}}class QR{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.su=0,this.iu=null,this.ru=!0}ou(){this.su===0&&(this.uu("Unknown"),this.iu=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.iu=null,this.cu("Backend didn't respond within 10 seconds."),this.uu("Offline"),Promise.resolve())))}au(e){this.state==="Online"?this.uu("Unknown"):(this.su++,this.su>=1&&(this.hu(),this.cu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.uu("Offline")))}set(e){this.hu(),this.su=0,e==="Online"&&(this.ru=!1),this.uu(e)}uu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}cu(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ru?(Fn(n),this.ru=!1):G("OnlineStateTracker",n)}hu(){this.iu!==null&&(this.iu.cancel(),this.iu=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XR{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.lu=[],this.fu=new Map,this.du=new Set,this.wu=[],this._u=s,this._u.qr(o=>{r.enqueueAndForget(async()=>{oi(this)&&(G("RemoteStore","Restarting streams for network reachability change."),await async function(a){const c=se(a);c.du.add(4),await Ho(c),c.mu.set("Unknown"),c.du.delete(4),await gl(c)}(this))})}),this.mu=new QR(r,i)}}async function gl(t){if(oi(t))for(const e of t.wu)await e(!0)}async function Ho(t){for(const e of t.wu)await e(!1)}function K1(t,e){const n=se(t);n.fu.has(e.targetId)||(n.fu.set(e.targetId,e),ud(n)?ld(n):us(n).No()&&cd(n,e))}function Y1(t,e){const n=se(t),r=us(n);n.fu.delete(e),r.No()&&Q1(n,e),n.fu.size===0&&(r.No()?r.$o():oi(n)&&n.mu.set("Unknown"))}function cd(t,e){t.gu.Ot(e.targetId),us(t).jo(e)}function Q1(t,e){t.gu.Ot(e),us(t).Wo(e)}function ld(t){t.gu=new eR({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ne:e=>t.fu.get(e)||null}),us(t).start(),t.mu.ou()}function ud(t){return oi(t)&&!us(t).xo()&&t.fu.size>0}function oi(t){return se(t).du.size===0}function X1(t){t.gu=void 0}async function JR(t){t.fu.forEach((e,n)=>{cd(t,e)})}async function ZR(t,e){X1(t),ud(t)?(t.mu.au(e),ld(t)):t.mu.set("Unknown")}async function eO(t,e,n){if(t.mu.set("Online"),e instanceof U1&&e.state===2&&e.cause)try{await async function(r,i){const s=i.cause;for(const o of i.targetIds)r.fu.has(o)&&(await r.remoteSyncer.rejectListen(o,s),r.fu.delete(o),r.gu.removeTarget(o))}(t,e)}catch(r){G("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await pc(t,r)}else if(e instanceof Pa?t.gu.Kt(e):e instanceof L1?t.gu.Jt(e):t.gu.zt(e),!n.isEqual(ie.min()))try{const r=await W1(t.localStore);n.compareTo(r)>=0&&await function(i,s){const o=i.gu.Xt(s);return o.targetChanges.forEach((a,c)=>{if(a.resumeToken.approximateByteSize()>0){const l=i.fu.get(c);l&&i.fu.set(c,l.withResumeToken(a.resumeToken,s))}}),o.targetMismatches.forEach(a=>{const c=i.fu.get(a);if(!c)return;i.fu.set(a,c.withResumeToken(Et.EMPTY_BYTE_STRING,c.snapshotVersion)),Q1(i,a);const l=new zr(c.target,a,1,c.sequenceNumber);cd(i,l)}),i.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(r){G("RemoteStore","Failed to raise snapshot:",r),await pc(t,r)}}async function pc(t,e,n){if(!Vo(e))throw e;t.du.add(1),await Ho(t),t.mu.set("Offline"),n||(n=()=>W1(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{G("RemoteStore","Retrying IndexedDB access"),await n(),t.du.delete(1),await gl(t)})}function J1(t,e){return e().catch(n=>pc(t,n,e))}async function vl(t){const e=se(t),n=wr(e);let r=e.lu.length>0?e.lu[e.lu.length-1].batchId:-1;for(;tO(e);)try{const i=await $R(e.localStore,r);if(i===null){e.lu.length===0&&n.$o();break}r=i.batchId,nO(e,i)}catch(i){await pc(e,i)}Z1(e)&&ew(e)}function tO(t){return oi(t)&&t.lu.length<10}function nO(t,e){t.lu.push(e);const n=wr(t);n.No()&&n.Jo&&n.Yo(e.mutations)}function Z1(t){return oi(t)&&!wr(t).xo()&&t.lu.length>0}function ew(t){wr(t).start()}async function rO(t){wr(t).tu()}async function iO(t){const e=wr(t);for(const n of t.lu)e.Yo(n.mutations)}async function sO(t,e,n){const r=t.lu.shift(),i=nd.from(r,e,n);await J1(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await vl(t)}async function oO(t,e){e&&wr(t).Jo&&await async function(n,r){if(i=r.code,Zx(i)&&i!==k.ABORTED){const s=n.lu.shift();wr(n).Oo(),await J1(n,()=>n.remoteSyncer.rejectFailedWrite(s.batchId,r)),await vl(n)}var i}(t,e),Z1(t)&&ew(t)}async function lg(t,e){const n=se(t);n.asyncQueue.verifyOperationInProgress(),G("RemoteStore","RemoteStore received new credentials");const r=oi(n);n.du.add(3),await Ho(n),r&&n.mu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.du.delete(3),await gl(n)}async function aO(t,e){const n=se(t);e?(n.du.delete(2),await gl(n)):e||(n.du.add(2),await Ho(n),n.mu.set("Unknown"))}function us(t){return t.yu||(t.yu=function(e,n,r){const i=se(e);return i.nu(),new GR(n,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,r)}(t.datastore,t.asyncQueue,{Jr:JR.bind(null,t),Zr:ZR.bind(null,t),zo:eO.bind(null,t)}),t.wu.push(async e=>{e?(t.yu.Oo(),ud(t)?ld(t):t.mu.set("Unknown")):(await t.yu.stop(),X1(t))})),t.yu}function wr(t){return t.pu||(t.pu=function(e,n,r){const i=se(e);return i.nu(),new KR(n,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,r)}(t.datastore,t.asyncQueue,{Jr:rO.bind(null,t),Zr:oO.bind(null,t),Xo:iO.bind(null,t),Zo:sO.bind(null,t)}),t.wu.push(async e=>{e?(t.pu.Oo(),await vl(t)):(await t.pu.stop(),t.lu.length>0&&(G("RemoteStore",`Stopping write stream with ${t.lu.length} pending writes`),t.lu=[]))})),t.pu}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fd{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new ur,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new fd(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new B(k.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function hd(t,e){if(Fn("AsyncQueue",`${e}: ${t}`),Vo(t))return new B(k.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ai{constructor(e){this.comparator=e?(n,r)=>e(n,r)||Q.comparator(n.key,r.key):(n,r)=>Q.comparator(n.key,r.key),this.keyedMap=Rs(),this.sortedSet=new tt(this.comparator)}static emptySet(e){return new Ai(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Ai)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Ai;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ug{constructor(){this.Iu=new tt(Q.comparator)}track(e){const n=e.doc.key,r=this.Iu.get(n);r?e.type!==0&&r.type===3?this.Iu=this.Iu.insert(n,e):e.type===3&&r.type!==1?this.Iu=this.Iu.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.Iu=this.Iu.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.Iu=this.Iu.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.Iu=this.Iu.remove(n):e.type===1&&r.type===2?this.Iu=this.Iu.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.Iu=this.Iu.insert(n,{type:2,doc:e.doc}):te():this.Iu=this.Iu.insert(n,e)}Tu(){const e=[];return this.Iu.inorderTraversal((n,r)=>{e.push(r)}),e}}class qi{constructor(e,n,r,i,s,o,a,c,l){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=l}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new qi(e,n,Ai.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&ul(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cO{constructor(){this.Eu=void 0,this.listeners=[]}}class lO{constructor(){this.queries=new ls(e=>_1(e),ul),this.onlineState="Unknown",this.Au=new Set}}async function tw(t,e){const n=se(t),r=e.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new cO),i)try{s.Eu=await n.onListen(r)}catch(o){const a=hd(o,`Initialization of query '${pf(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,s),s.listeners.push(e),e.Ru(n.onlineState),s.Eu&&e.vu(s.Eu)&&dd(n)}async function nw(t,e){const n=se(t),r=e.query;let i=!1;const s=n.queries.get(r);if(s){const o=s.listeners.indexOf(e);o>=0&&(s.listeners.splice(o,1),i=s.listeners.length===0)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function uO(t,e){const n=se(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.listeners)a.vu(i)&&(r=!0);o.Eu=i}}r&&dd(n)}function fO(t,e,n){const r=se(t),i=r.queries.get(e);if(i)for(const s of i.listeners)s.onError(n);r.queries.delete(e)}function dd(t){t.Au.forEach(e=>{e.next()})}class rw{constructor(e,n,r){this.query=e,this.bu=n,this.Pu=!1,this.Vu=null,this.onlineState="Unknown",this.options=r||{}}vu(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new qi(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Pu?this.Su(e)&&(this.bu.next(e),n=!0):this.Du(e,this.onlineState)&&(this.Cu(e),n=!0),this.Vu=e,n}onError(e){this.bu.error(e)}Ru(e){this.onlineState=e;let n=!1;return this.Vu&&!this.Pu&&this.Du(this.Vu,e)&&(this.Cu(this.Vu),n=!0),n}Du(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.xu||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Su(e){if(e.docChanges.length>0)return!0;const n=this.Vu&&this.Vu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Cu(e){e=qi.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Pu=!0,this.bu.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iw{constructor(e){this.key=e}}class sw{constructor(e){this.key=e}}class hO{constructor(e,n){this.query=e,this.Lu=n,this.qu=null,this.hasCachedResults=!1,this.current=!1,this.Uu=fe(),this.mutatedKeys=fe(),this.Ku=E1(e),this.Gu=new Ai(this.Ku)}get Qu(){return this.Lu}zu(e,n){const r=n?n.ju:new ug,i=n?n.Gu:this.Gu;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const c=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,l=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((u,f)=>{const h=i.get(u),d=fl(this.query,f)?f:null,g=!!h&&this.mutatedKeys.has(h.key),y=!!d&&(d.hasLocalMutations||this.mutatedKeys.has(d.key)&&d.hasCommittedMutations);let _=!1;h&&d?h.data.isEqual(d.data)?g!==y&&(r.track({type:3,doc:d}),_=!0):this.Wu(h,d)||(r.track({type:2,doc:d}),_=!0,(c&&this.Ku(d,c)>0||l&&this.Ku(d,l)<0)&&(a=!0)):!h&&d?(r.track({type:0,doc:d}),_=!0):h&&!d&&(r.track({type:1,doc:h}),_=!0,(c||l)&&(a=!0)),_&&(d?(o=o.add(d),s=y?s.add(u):s.delete(u)):(o=o.delete(u),s=s.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),s=s.delete(u.key),r.track({type:1,doc:u})}return{Gu:o,ju:r,Mi:a,mutatedKeys:s}}Wu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r){const i=this.Gu;this.Gu=e.Gu,this.mutatedKeys=e.mutatedKeys;const s=e.ju.Tu();s.sort((l,u)=>function(f,h){const d=g=>{switch(g){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return te()}};return d(f)-d(h)}(l.type,u.type)||this.Ku(l.doc,u.doc)),this.Hu(r);const o=n?this.Ju():[],a=this.Uu.size===0&&this.current?1:0,c=a!==this.qu;return this.qu=a,s.length!==0||c?{snapshot:new qi(this.query,e.Gu,i,s,e.mutatedKeys,a===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),Yu:o}:{Yu:o}}Ru(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Gu:this.Gu,ju:new ug,mutatedKeys:this.mutatedKeys,Mi:!1},!1)):{Yu:[]}}Zu(e){return!this.Lu.has(e)&&!!this.Gu.has(e)&&!this.Gu.get(e).hasLocalMutations}Hu(e){e&&(e.addedDocuments.forEach(n=>this.Lu=this.Lu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Lu=this.Lu.delete(n)),this.current=e.current)}Ju(){if(!this.current)return[];const e=this.Uu;this.Uu=fe(),this.Gu.forEach(r=>{this.Zu(r.key)&&(this.Uu=this.Uu.add(r.key))});const n=[];return e.forEach(r=>{this.Uu.has(r)||n.push(new sw(r))}),this.Uu.forEach(r=>{e.has(r)||n.push(new iw(r))}),n}Xu(e){this.Lu=e.Wi,this.Uu=fe();const n=this.zu(e.documents);return this.applyChanges(n,!0)}tc(){return qi.fromInitialDocuments(this.query,this.Gu,this.mutatedKeys,this.qu===0,this.hasCachedResults)}}class dO{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class mO{constructor(e){this.key=e,this.ec=!1}}class pO{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.nc={},this.sc=new ls(a=>_1(a),ul),this.ic=new Map,this.rc=new Set,this.oc=new tt(Q.comparator),this.uc=new Map,this.cc=new sd,this.ac={},this.hc=new Map,this.lc=Wi.bn(),this.onlineState="Unknown",this.fc=void 0}get isPrimaryClient(){return this.fc===!0}}async function gO(t,e){const n=CO(t);let r,i;const s=n.sc.get(e);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.tc();else{const o=await VR(n.localStore,$n(e));n.isPrimaryClient&&K1(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,i=await vO(n,e,r,a==="current",o.resumeToken)}return i}async function vO(t,e,n,r,i){t.dc=(f,h,d)=>async function(g,y,_,w){let v=y.view.zu(_);v.Mi&&(v=await og(g.localStore,y.query,!1).then(({documents:R})=>y.view.zu(R,v)));const b=w&&w.targetChanges.get(y.targetId),T=y.view.applyChanges(v,g.isPrimaryClient,b);return hg(g,y.targetId,T.Yu),T.snapshot}(t,f,h,d);const s=await og(t.localStore,e,!0),o=new hO(e,s.Wi),a=o.zu(s.documents),c=jo.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),l=o.applyChanges(a,t.isPrimaryClient,c);hg(t,n,l.Yu);const u=new dO(e,n,o);return t.sc.set(e,u),t.ic.has(n)?t.ic.get(n).push(e):t.ic.set(n,[e]),l.snapshot}async function yO(t,e){const n=se(t),r=n.sc.get(e),i=n.ic.get(r.targetId);if(i.length>1)return n.ic.set(r.targetId,i.filter(s=>!ul(s,e))),void n.sc.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await wf(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),Y1(n.remoteStore,r.targetId),bf(n,r.targetId)}).catch($o)):(bf(n,r.targetId),await wf(n.localStore,r.targetId,!0))}async function wO(t,e,n){const r=SO(t);try{const i=await function(s,o){const a=se(s),c=Je.now(),l=o.reduce((h,d)=>h.add(d.key),fe());let u,f;return a.persistence.runTransaction("Locally write mutations","readwrite",h=>{let d=Vn(),g=fe();return a.Ki.getEntries(h,l).next(y=>{d=y,d.forEach((_,w)=>{w.isValidDocument()||(g=g.add(_))})}).next(()=>a.localDocuments.getOverlayedDocuments(h,d)).next(y=>{u=y;const _=[];for(const w of o){const v=Kx(w,u.get(w.key).overlayedDocument);v!=null&&_.push(new Ir(w.key,v,d1(v.value.mapValue),qt.exists(!0)))}return a.mutationQueue.addMutationBatch(h,c,_,o)}).next(y=>{f=y;const _=y.applyToLocalDocumentSet(u,g);return a.documentOverlayCache.saveOverlays(h,y.batchId,_)})}).then(()=>({batchId:f.batchId,changes:I1(u)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(s,o,a){let c=s.ac[s.currentUser.toKey()];c||(c=new tt(be)),c=c.insert(o,a),s.ac[s.currentUser.toKey()]=c}(r,i.batchId,n),await zo(r,i.changes),await vl(r.remoteStore)}catch(i){const s=hd(i,"Failed to persist write");n.reject(s)}}async function ow(t,e){const n=se(t);try{const r=await UR(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.uc.get(s);o&&(De(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.ec=!0:i.modifiedDocuments.size>0?De(o.ec):i.removedDocuments.size>0&&(De(o.ec),o.ec=!1))}),await zo(n,r,e)}catch(r){await $o(r)}}function fg(t,e,n){const r=se(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.sc.forEach((s,o)=>{const a=o.view.Ru(e);a.snapshot&&i.push(a.snapshot)}),function(s,o){const a=se(s);a.onlineState=o;let c=!1;a.queries.forEach((l,u)=>{for(const f of u.listeners)f.Ru(o)&&(c=!0)}),c&&dd(a)}(r.eventManager,e),i.length&&r.nc.zo(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function bO(t,e,n){const r=se(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.uc.get(e),s=i&&i.key;if(s){let o=new tt(Q.comparator);o=o.insert(s,pt.newNoDocument(s,ie.min()));const a=fe().add(s),c=new ml(ie.min(),new Map,new Ze(be),o,a);await ow(r,c),r.oc=r.oc.remove(s),r.uc.delete(e),md(r)}else await wf(r.localStore,e,!1).then(()=>bf(r,e,n)).catch($o)}async function _O(t,e){const n=se(t),r=e.batch.batchId;try{const i=await LR(n.localStore,e);cw(n,r,null),aw(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await zo(n,i)}catch(i){await $o(i)}}async function EO(t,e,n){const r=se(t);try{const i=await function(s,o){const a=se(s);return a.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let l;return a.mutationQueue.lookupMutationBatch(c,o).next(u=>(De(u!==null),l=u.keys(),a.mutationQueue.removeMutationBatch(c,u))).next(()=>a.mutationQueue.performConsistencyCheck(c)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(c,l,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,l)).next(()=>a.localDocuments.getDocuments(c,l))})}(r.localStore,e);cw(r,e,n),aw(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await zo(r,i)}catch(i){await $o(i)}}function aw(t,e){(t.hc.get(e)||[]).forEach(n=>{n.resolve()}),t.hc.delete(e)}function cw(t,e,n){const r=se(t);let i=r.ac[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.ac[r.currentUser.toKey()]=i}}function bf(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.ic.get(e))t.sc.delete(r),n&&t.nc.wc(r,n);t.ic.delete(e),t.isPrimaryClient&&t.cc.hs(e).forEach(r=>{t.cc.containsKey(r)||lw(t,r)})}function lw(t,e){t.rc.delete(e.path.canonicalString());const n=t.oc.get(e);n!==null&&(Y1(t.remoteStore,n),t.oc=t.oc.remove(e),t.uc.delete(n),md(t))}function hg(t,e,n){for(const r of n)r instanceof iw?(t.cc.addReference(r.key,e),TO(t,r)):r instanceof sw?(G("SyncEngine","Document no longer in limbo: "+r.key),t.cc.removeReference(r.key,e),t.cc.containsKey(r.key)||lw(t,r.key)):te()}function TO(t,e){const n=e.key,r=n.path.canonicalString();t.oc.get(n)||t.rc.has(r)||(G("SyncEngine","New document in limbo: "+n),t.rc.add(r),md(t))}function md(t){for(;t.rc.size>0&&t.oc.size<t.maxConcurrentLimboResolutions;){const e=t.rc.values().next().value;t.rc.delete(e);const n=new Q(Ne.fromString(e)),r=t.lc.next();t.uc.set(r,new mO(n)),t.oc=t.oc.insert(n,r),K1(t.remoteStore,new zr($n(cl(n.path)),r,2,Qh.ct))}}async function zo(t,e,n){const r=se(t),i=[],s=[],o=[];r.sc.isEmpty()||(r.sc.forEach((a,c)=>{o.push(r.dc(c,e,n).then(l=>{if((l||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(c.targetId,l!=null&&l.fromCache?"not-current":"current"),l){i.push(l);const u=ad.Di(c.targetId,l);s.push(u)}}))}),await Promise.all(o),r.nc.zo(i),await async function(a,c){const l=se(a);try{await l.persistence.runTransaction("notifyLocalViewChanges","readwrite",u=>O.forEach(c,f=>O.forEach(f.Vi,h=>l.persistence.referenceDelegate.addReference(u,f.targetId,h)).next(()=>O.forEach(f.Si,h=>l.persistence.referenceDelegate.removeReference(u,f.targetId,h)))))}catch(u){if(!Vo(u))throw u;G("LocalStore","Failed to update sequence numbers: "+u)}for(const u of c){const f=u.targetId;if(!u.fromCache){const h=l.Li.get(f),d=h.snapshotVersion,g=h.withLastLimboFreeSnapshotVersion(d);l.Li=l.Li.insert(f,g)}}}(r.localStore,s))}async function IO(t,e){const n=se(t);if(!n.currentUser.isEqual(e)){G("SyncEngine","User change. New user:",e.toKey());const r=await z1(n.localStore,e);n.currentUser=e,function(i,s){i.hc.forEach(o=>{o.forEach(a=>{a.reject(new B(k.CANCELLED,s))})}),i.hc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await zo(n,r.Qi)}}function kO(t,e){const n=se(t),r=n.uc.get(e);if(r&&r.ec)return fe().add(r.key);{let i=fe();const s=n.ic.get(e);if(!s)return i;for(const o of s){const a=n.sc.get(o);i=i.unionWith(a.view.Qu)}return i}}function CO(t){const e=se(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=ow.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=kO.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=bO.bind(null,e),e.nc.zo=uO.bind(null,e.eventManager),e.nc.wc=fO.bind(null,e.eventManager),e}function SO(t){const e=se(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=_O.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=EO.bind(null,e),e}class dg{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=pl(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return MR(this.persistence,new PR,e.initialUser,this.serializer)}createPersistence(e){return new OR(od.Fs,this.serializer)}createSharedClientState(e){return new jR}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class AO{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>fg(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=IO.bind(null,this.syncEngine),await aO(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new lO}createDatastore(e){const n=pl(e.databaseInfo.databaseId),r=(i=e.databaseInfo,new qR(i));var i;return function(s,o,a,c){return new YR(s,o,a,c)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return n=this.localStore,r=this.datastore,i=e.asyncQueue,s=a=>fg(this.syncEngine,a,0),o=cg.D()?new cg:new HR,new XR(n,r,i,s,o);var n,r,i,s,o}createSyncEngine(e,n){return function(r,i,s,o,a,c,l){const u=new pO(r,i,s,o,a,c);return l&&(u.fc=!0),u}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=se(e);G("RemoteStore","RemoteStore shutting down."),n.du.add(5),await Ho(n),n._u.shutdown(),n.mu.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uw{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.gc(this.observer.next,e)}error(e){this.observer.error?this.gc(this.observer.error,e):Fn("Uncaught Error in snapshot listener:",e.toString())}yc(){this.muted=!0}gc(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xO{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=mt.UNAUTHENTICATED,this.clientId=l1.A(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{G("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(G("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new B(k.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new ur;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=hd(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function lu(t,e){t.asyncQueue.verifyOperationInProgress(),G("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await z1(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function mg(t,e){t.asyncQueue.verifyOperationInProgress();const n=await OO(t);G("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(i=>lg(e.remoteStore,i)),t.setAppCheckTokenChangeListener((i,s)=>lg(e.remoteStore,s)),t._onlineComponents=e}function RO(t){return t.name==="FirebaseError"?t.code===k.FAILED_PRECONDITION||t.code===k.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function OO(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){G("FirestoreClient","Using user provided OfflineComponentProvider");try{await lu(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!RO(n))throw n;lc("Error using user provided cache. Falling back to memory cache: "+n),await lu(t,new dg)}}else G("FirestoreClient","Using default OfflineComponentProvider"),await lu(t,new dg);return t._offlineComponents}async function fw(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(G("FirestoreClient","Using user provided OnlineComponentProvider"),await mg(t,t._uninitializedComponentsProvider._online)):(G("FirestoreClient","Using default OnlineComponentProvider"),await mg(t,new AO))),t._onlineComponents}function NO(t){return fw(t).then(e=>e.syncEngine)}async function _f(t){const e=await fw(t),n=e.eventManager;return n.onListen=gO.bind(null,e.syncEngine),n.onUnlisten=yO.bind(null,e.syncEngine),n}function PO(t,e,n={}){const r=new ur;return t.asyncQueue.enqueueAndForget(async()=>function(i,s,o,a,c){const l=new uw({next:f=>{s.enqueueAndForget(()=>nw(i,u));const h=f.docs.has(o);!h&&f.fromCache?c.reject(new B(k.UNAVAILABLE,"Failed to get document because the client is offline.")):h&&f.fromCache&&a&&a.source==="server"?c.reject(new B(k.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(f)},error:f=>c.reject(f)}),u=new rw(cl(o.path),l,{includeMetadataChanges:!0,xu:!0});return tw(i,u)}(await _f(t),t.asyncQueue,e,n,r)),r.promise}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pg=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hw(t,e,n){if(!n)throw new B(k.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function DO(t,e,n,r){if(e===!0&&r===!0)throw new B(k.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function gg(t){if(!Q.isDocumentKey(t))throw new B(k.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function vg(t){if(Q.isDocumentKey(t))throw new B(k.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function yl(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":te()}function Gt(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new B(k.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=yl(t);throw new B(k.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yg{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new B(k.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.cache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new B(k.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,DO("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wl{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new yg({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new B(k.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new B(k.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new yg(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new sx;switch(n.type){case"firstParty":return new lx(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new B(k.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=pg.get(e);n&&(G("ComponentProvider","Removing Datastore"),pg.delete(e),n.terminate())}(this),Promise.resolve()}}function MO(t,e,n,r={}){var i;const s=(t=Gt(t,wl))._getSettings();if(s.host!=="firestore.googleapis.com"&&s.host!==e&&lc("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},s),{host:`${e}:${n}`,ssl:!1})),r.mockUserToken){let o,a;if(typeof r.mockUserToken=="string")o=r.mockUserToken,a=mt.MOCK_USER;else{o=e0(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const c=r.mockUserToken.sub||r.mockUserToken.user_id;if(!c)throw new B(k.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new mt(c)}t._authCredentials=new ox(new c1(o,a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new fr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new bt(this.firestore,e,this._key)}}class ai{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new ai(this.firestore,e,this._query)}}class fr extends ai{constructor(e,n,r){super(e,n,cl(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new bt(this.firestore,null,new Q(e))}withConverter(e){return new fr(this.firestore,e,this._path)}}function LO(t,e,...n){if(t=Le(t),hw("collection","path",e),t instanceof wl){const r=Ne.fromString(e,...n);return vg(r),new fr(t,null,r)}{if(!(t instanceof bt||t instanceof fr))throw new B(k.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ne.fromString(e,...n));return vg(r),new fr(t.firestore,null,r)}}function UO(t,e,...n){if(t=Le(t),arguments.length===1&&(e=l1.A()),hw("doc","path",e),t instanceof wl){const r=Ne.fromString(e,...n);return gg(r),new bt(t,null,new Q(r))}{if(!(t instanceof bt||t instanceof fr))throw new B(k.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ne.fromString(e,...n));return gg(r),new bt(t.firestore,t instanceof fr?t.converter:null,new Q(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FO{constructor(){this.Nc=Promise.resolve(),this.kc=[],this.Oc=!1,this.$c=[],this.Mc=null,this.Fc=!1,this.Bc=!1,this.Lc=[],this.Co=new q1(this,"async_queue_retry"),this.qc=()=>{const n=cu();n&&G("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Co.vo()};const e=cu();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.qc)}get isShuttingDown(){return this.Oc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Uc(),this.Kc(e)}enterRestrictedMode(e){if(!this.Oc){this.Oc=!0,this.Bc=e||!1;const n=cu();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.qc)}}enqueue(e){if(this.Uc(),this.Oc)return new Promise(()=>{});const n=new ur;return this.Kc(()=>this.Oc&&this.Bc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.kc.push(e),this.Gc()))}async Gc(){if(this.kc.length!==0){try{await this.kc[0](),this.kc.shift(),this.Co.reset()}catch(e){if(!Vo(e))throw e;G("AsyncQueue","Operation failed with retryable error: "+e)}this.kc.length>0&&this.Co.Ao(()=>this.Gc())}}Kc(e){const n=this.Nc.then(()=>(this.Fc=!0,e().catch(r=>{this.Mc=r,this.Fc=!1;const i=function(s){let o=s.message||"";return s.stack&&(o=s.stack.includes(s.message)?s.stack:s.message+`
`+s.stack),o}(r);throw Fn("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.Fc=!1,r))));return this.Nc=n,n}enqueueAfterDelay(e,n,r){this.Uc(),this.Lc.indexOf(e)>-1&&(n=0);const i=fd.createAndSchedule(this,e,n,r,s=>this.Qc(s));return this.$c.push(i),i}Uc(){this.Mc&&te()}verifyOperationInProgress(){}async zc(){let e;do e=this.Nc,await e;while(e!==this.Nc)}jc(e){for(const n of this.$c)if(n.timerId===e)return!0;return!1}Wc(e){return this.zc().then(()=>{this.$c.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.$c)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.zc()})}Hc(e){this.Lc.push(e)}Qc(e){const n=this.$c.indexOf(e);this.$c.splice(n,1)}}function wg(t){return function(e,n){if(typeof e!="object"||e===null)return!1;const r=e;for(const i of n)if(i in r&&typeof r[i]=="function")return!0;return!1}(t,["next","error","complete"])}class br extends wl{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new FO,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||dw(this),this._firestoreClient.terminate()}}function $O(t,e){const n=typeof t=="object"?t:Sh(),r=typeof t=="string"?t:e||"(default)",i=Wc(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=Jy("firestore");s&&MO(i,...s)}return i}function pd(t){return t._firestoreClient||dw(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function dw(t){var e,n,r;const i=t._freezeSettings(),s=function(o,a,c,l){return new Ex(o,a,c,l.host,l.ssl,l.experimentalForceLongPolling,l.experimentalAutoDetectLongPolling,l.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._firestoreClient=new xO(t._authCredentials,t._appCheckCredentials,t._queue,s),!((n=i.cache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.cache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.cache.kind,_offline:i.cache._offlineComponentProvider,_online:i.cache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gi{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Gi(Et.fromBase64String(e))}catch(n){throw new B(k.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Gi(Et.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bl{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new B(k.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new vt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _l{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gd{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new B(k.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new B(k.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return be(this._lat,e._lat)||be(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VO=/^__.*__$/;class BO{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Ir(e,this.data,this.fieldMask,n,this.fieldTransforms):new Bo(e,this.data,n,this.fieldTransforms)}}class mw{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new Ir(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function pw(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw te()}}class El{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.Jc(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Yc(){return this.settings.Yc}Zc(e){return new El(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Xc(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Zc({path:r,ta:!1});return i.ea(e),i}na(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Zc({path:r,ta:!1});return i.Jc(),i}sa(e){return this.Zc({path:void 0,ta:!0})}ia(e){return gc(e,this.settings.methodName,this.settings.ra||!1,this.path,this.settings.oa)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Jc(){if(this.path)for(let e=0;e<this.path.length;e++)this.ea(this.path.get(e))}ea(e){if(e.length===0)throw this.ia("Document fields must not be empty");if(pw(this.Yc)&&VO.test(e))throw this.ia('Document fields cannot begin and end with "__"')}}class jO{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||pl(e)}ua(e,n,r,i=!1){return new El({Yc:e,methodName:n,oa:r,path:vt.emptyPath(),ta:!1,ra:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Tl(t){const e=t._freezeSettings(),n=pl(t._databaseId);return new jO(t._databaseId,!!e.ignoreUndefinedProperties,n)}function gw(t,e,n,r,i,s={}){const o=t.ua(s.merge||s.mergeFields?2:0,e,n,i);vd("Data must be an object, but it was:",o,r);const a=vw(r,o);let c,l;if(s.merge)c=new Mt(o.fieldMask),l=o.fieldTransforms;else if(s.mergeFields){const u=[];for(const f of s.mergeFields){const h=Ef(e,f,n);if(!o.contains(h))throw new B(k.INVALID_ARGUMENT,`Field '${h}' is specified in your field mask but missing from your input data.`);ww(u,h)||u.push(h)}c=new Mt(u),l=o.fieldTransforms.filter(f=>c.covers(f.field))}else c=null,l=o.fieldTransforms;return new BO(new Rt(a),c,l)}class Il extends _l{_toFieldTransform(e){if(e.Yc!==2)throw e.Yc===1?e.ia(`${this._methodName}() can only appear at the top level of your update data`):e.ia(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Il}}function HO(t,e,n){return new El({Yc:3,oa:e.settings.oa,methodName:t._methodName,ta:n},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class zO extends _l{constructor(e,n){super(e),this.ca=n}_toFieldTransform(e){const n=HO(this,e,!0),r=this.ca.map(s=>fs(s,n)),i=new zi(r);return new zx(e.path,i)}isEqual(e){return this===e}}function WO(t,e,n,r){const i=t.ua(1,e,n);vd("Data must be an object, but it was:",i,r);const s=[],o=Rt.empty();si(r,(c,l)=>{const u=yd(e,c,n);l=Le(l);const f=i.na(u);if(l instanceof Il)s.push(u);else{const h=fs(l,f);h!=null&&(s.push(u),o.set(u,h))}});const a=new Mt(s);return new mw(o,a,i.fieldTransforms)}function qO(t,e,n,r,i,s){const o=t.ua(1,e,n),a=[Ef(e,r,n)],c=[i];if(s.length%2!=0)throw new B(k.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let h=0;h<s.length;h+=2)a.push(Ef(e,s[h])),c.push(s[h+1]);const l=[],u=Rt.empty();for(let h=a.length-1;h>=0;--h)if(!ww(l,a[h])){const d=a[h];let g=c[h];g=Le(g);const y=o.na(d);if(g instanceof Il)l.push(d);else{const _=fs(g,y);_!=null&&(l.push(d),u.set(d,_))}}const f=new Mt(l);return new mw(u,f,o.fieldTransforms)}function GO(t,e,n,r=!1){return fs(n,t.ua(r?4:3,e))}function fs(t,e){if(yw(t=Le(t)))return vd("Unsupported field value:",e,t),vw(t,e);if(t instanceof _l)return function(n,r){if(!pw(r.Yc))throw r.ia(`${n._methodName}() can only be used with update() and set()`);if(!r.path)throw r.ia(`${n._methodName}() is not currently supported inside arrays`);const i=n._toFieldTransform(r);i&&r.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.ta&&e.Yc!==4)throw e.ia("Nested arrays are not supported");return function(n,r){const i=[];let s=0;for(const o of n){let a=fs(o,r.sa(s));a==null&&(a={nullValue:"NULL_VALUE"}),i.push(a),s++}return{arrayValue:{values:i}}}(t,e)}return function(n,r){if((n=Le(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return Bx(r.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const i=Je.fromDate(n);return{timestampValue:mc(r.serializer,i)}}if(n instanceof Je){const i=new Je(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:mc(r.serializer,i)}}if(n instanceof gd)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof Gi)return{bytesValue:F1(r.serializer,n._byteString)};if(n instanceof bt){const i=r.databaseId,s=n.firestore._databaseId;if(!s.isEqual(i))throw r.ia(`Document reference is for database ${s.projectId}/${s.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:id(n.firestore._databaseId||r.databaseId,n._key.path)}}throw r.ia(`Unsupported field value: ${yl(n)}`)}(t,e)}function vw(t,e){const n={};return u1(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):si(t,(r,i)=>{const s=fs(i,e.Xc(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function yw(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Je||t instanceof gd||t instanceof Gi||t instanceof bt||t instanceof _l)}function vd(t,e,n){if(!yw(n)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(n)){const r=yl(n);throw r==="an object"?e.ia(t+" a custom object"):e.ia(t+" "+r)}}function Ef(t,e,n){if((e=Le(e))instanceof bl)return e._internalPath;if(typeof e=="string")return yd(t,e);throw gc("Field path arguments must be of type string or ",t,!1,void 0,n)}const KO=new RegExp("[~\\*/\\[\\]]");function yd(t,e,n){if(e.search(KO)>=0)throw gc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new bl(...e.split("."))._internalPath}catch{throw gc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function gc(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(s||o)&&(c+=" (found",s&&(c+=` in field ${r}`),o&&(c+=` in document ${i}`),c+=")"),new B(k.INVALID_ARGUMENT,a+t+c)}function ww(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bw{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new bt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new YO(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(wd("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class YO extends bw{data(){return super.data()}}function wd(t,e){return typeof e=="string"?yd(t,e):e instanceof bl?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QO(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new B(k.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class bd{}class _w extends bd{}function XO(t,e,...n){let r=[];e instanceof bd&&r.push(e),r=r.concat(n),function(i){const s=i.filter(a=>a instanceof Ed).length,o=i.filter(a=>a instanceof _d).length;if(s>1||s>0&&o>0)throw new B(k.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class _d extends _w{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new _d(e,n,r)}_apply(e){const n=this._parse(e);return Ew(e._query,n),new ai(e.firestore,e.converter,df(e._query,n))}_parse(e){const n=Tl(e.firestore);return function(i,s,o,a,c,l,u){let f;if(c.isKeyField()){if(l==="array-contains"||l==="array-contains-any")throw new B(k.INVALID_ARGUMENT,`Invalid Query. You can't perform '${l}' queries on documentId().`);if(l==="in"||l==="not-in"){_g(u,l);const h=[];for(const d of u)h.push(bg(a,i,d));f={arrayValue:{values:h}}}else f=bg(a,i,u)}else l!=="in"&&l!=="not-in"&&l!=="array-contains-any"||_g(u,l),f=GO(o,s,u,l==="in"||l==="not-in");return Xe.create(c,l,f)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}class Ed extends bd{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Ed(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:an.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(r,i){let s=r;const o=i.getFlattenedFilters();for(const a of o)Ew(s,a),s=df(s,a)}(e._query,n),new ai(e.firestore,e.converter,df(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Td extends _w{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new Td(e,n)}_apply(e){const n=function(r,i,s){if(r.startAt!==null)throw new B(k.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(r.endAt!==null)throw new B(k.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const o=new Ci(i,s);return function(a,c){if(ed(a)===null){const l=ll(a);l!==null&&Tw(a,l,c.field)}}(r,o),o}(e._query,this._field,this._direction);return new ai(e.firestore,e.converter,function(r,i){const s=r.explicitOrderBy.concat([i]);return new cs(r.path,r.collectionGroup,s,r.filters.slice(),r.limit,r.limitType,r.startAt,r.endAt)}(e._query,n))}}function JO(t,e="asc"){const n=e,r=wd("orderBy",t);return Td._create(r,n)}function bg(t,e,n){if(typeof(n=Le(n))=="string"){if(n==="")throw new B(k.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!b1(e)&&n.indexOf("/")!==-1)throw new B(k.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(Ne.fromString(n));if(!Q.isDocumentKey(r))throw new B(k.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Wp(t,new Q(r))}if(n instanceof bt)return Wp(t,n._key);throw new B(k.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${yl(n)}.`)}function _g(t,e){if(!Array.isArray(t)||t.length===0)throw new B(k.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Ew(t,e){if(e.isInequality()){const r=ll(t),i=e.field;if(r!==null&&!r.isEqual(i))throw new B(k.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${r.toString()}' and '${i.toString()}'`);const s=ed(t);s!==null&&Tw(t,i,s)}const n=function(r,i){for(const s of r)for(const o of s.getFlattenedFilters())if(i.indexOf(o.op)>=0)return o.op;return null}(t.filters,function(r){switch(r){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new B(k.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new B(k.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function Tw(t,e,n){if(!n.isEqual(e))throw new B(k.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}class ZO{convertValue(e,n="none"){switch(Jr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Qe(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Bi(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw te()}}convertObject(e,n){const r={};return si(e.fields,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(e){return new gd(Qe(e.latitude),Qe(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=h1(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(vo(e));default:return null}}convertTimestamp(e){const n=yr(e);return new Je(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Ne.fromString(e);De(H1(r));const i=new yo(r.get(1),r.get(3)),s=new Q(r.popFirst(5));return i.isEqual(n)||Fn(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Iw(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Os{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class kw extends bw{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Da(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(wd("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Da extends kw{data(e={}){return super.data(e)}}class eN{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new Os(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Da(this._firestore,this._userDataWriter,r.key,r,new Os(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new B(k.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(r,i){if(r._snapshot.oldDocs.isEmpty()){let s=0;return r._snapshot.docChanges.map(o=>{const a=new Da(r._firestore,r._userDataWriter,o.doc.key,o.doc,new Os(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);return o.doc,{type:"added",doc:a,oldIndex:-1,newIndex:s++}})}{let s=r._snapshot.oldDocs;return r._snapshot.docChanges.filter(o=>i||o.type!==3).map(o=>{const a=new Da(r._firestore,r._userDataWriter,o.doc.key,o.doc,new Os(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);let c=-1,l=-1;return o.type!==0&&(c=s.indexOf(o.doc.key),s=s.delete(o.doc.key)),o.type!==1&&(s=s.add(o.doc),l=s.indexOf(o.doc.key)),{type:tN(o.type),doc:a,oldIndex:c,newIndex:l}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function tN(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return te()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function IL(t){t=Gt(t,bt);const e=Gt(t.firestore,br);return PO(pd(e),t._key).then(n=>Sw(e,t,n))}class Cw extends ZO{constructor(e){super(),this.firestore=e}convertBytes(e){return new Gi(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new bt(this.firestore,null,n)}}function kL(t,e,n){t=Gt(t,bt);const r=Gt(t.firestore,br),i=Iw(t.converter,e,n);return kl(r,[gw(Tl(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,qt.none())])}function CL(t,e,n,...r){t=Gt(t,bt);const i=Gt(t.firestore,br),s=Tl(i);let o;return o=typeof(e=Le(e))=="string"||e instanceof bl?qO(s,"updateDoc",t._key,e,n,r):WO(s,"updateDoc",t._key,e),kl(i,[o.toMutation(t._key,qt.exists(!0))])}function SL(t){return kl(Gt(t.firestore,br),[new td(t._key,qt.none())])}function AL(t,e){const n=Gt(t.firestore,br),r=UO(t),i=Iw(t.converter,e);return kl(n,[gw(Tl(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,qt.exists(!1))]).then(()=>r)}function nN(t,...e){var n,r,i;t=Le(t);let s={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||wg(e[o])||(s=e[o],o++);const a={includeMetadataChanges:s.includeMetadataChanges};if(wg(e[o])){const f=e[o];e[o]=(n=f.next)===null||n===void 0?void 0:n.bind(f),e[o+1]=(r=f.error)===null||r===void 0?void 0:r.bind(f),e[o+2]=(i=f.complete)===null||i===void 0?void 0:i.bind(f)}let c,l,u;if(t instanceof bt)l=Gt(t.firestore,br),u=cl(t._key.path),c={next:f=>{e[o]&&e[o](Sw(l,t,f))},error:e[o+1],complete:e[o+2]};else{const f=Gt(t,ai);l=Gt(f.firestore,br),u=f._query;const h=new Cw(l);c={next:d=>{e[o]&&e[o](new eN(l,h,f,d))},error:e[o+1],complete:e[o+2]},QO(t._query)}return function(f,h,d,g){const y=new uw(g),_=new rw(h,y,d);return f.asyncQueue.enqueueAndForget(async()=>tw(await _f(f),_)),()=>{y.yc(),f.asyncQueue.enqueueAndForget(async()=>nw(await _f(f),_))}}(pd(l),u,a,c)}function kl(t,e){return function(n,r){const i=new ur;return n.asyncQueue.enqueueAndForget(async()=>wO(await NO(n),r,i)),i.promise}(pd(t),e)}function Sw(t,e,n){const r=n.docs.get(e._key),i=new Cw(t);return new kw(t,i,e._key,r,new Os(n.hasPendingWrites,n.fromCache),e.converter)}function xL(...t){return new zO("arrayUnion",t)}(function(t,e=!0){(function(n){as=n})(is),Qr(new gr("firestore",(n,{instanceIdentifier:r,options:i})=>{const s=n.getProvider("app").getImmediate(),o=new br(new ax(n.getProvider("auth-internal")),new fx(n.getProvider("app-check-internal")),function(a,c){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new B(k.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new yo(a.options.projectId,c)}(s,r),s);return i=Object.assign({useFetchStreams:e},i),o._setSettings(i),o},"PUBLIC").setMultipleInstances(!0)),vn(Vp,"3.10.0",t),vn(Vp,"3.10.0","esm2017")})();function Id(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function Aw(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const rN=Aw,xw=new Ao("auth","Firebase",Aw());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Eg=new kh("@firebase/auth");function Ma(t,...e){Eg.logLevel<=we.ERROR&&Eg.error(`Auth (${is}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kt(t,...e){throw kd(t,...e)}function wn(t,...e){return kd(t,...e)}function Rw(t,e,n){const r=Object.assign(Object.assign({},rN()),{[e]:n});return new Ao("auth","Firebase",r).create(e,{appName:t.name})}function iN(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&Kt(t,"argument-error"),Rw(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function kd(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return xw.create(t,...e)}function ee(t,e,...n){if(!t)throw kd(e,...n)}function Rn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Ma(e),new Error(e)}function Bn(t,e){t||Rn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tg=new Map;function On(t){Bn(t instanceof Function,"Expected a class definition");let e=Tg.get(t);return e?(Bn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Tg.set(t,e),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sN(t,e){const n=Wc(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Za(s,e??{}))return i;Kt(i,"already-initialized")}return n.initialize({options:e})}function oN(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(On);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tf(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function aN(){return Ig()==="http:"||Ig()==="https:"}function Ig(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cN(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(aN()||FC()||"connection"in navigator)?navigator.onLine:!0}function lN(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wo{constructor(e,n){this.shortDelay=e,this.longDelay=n,Bn(n>e,"Short delay should be less than long delay!"),this.isMobile=LC()||$C()}get(){return cN()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cd(t,e){Bn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ow{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;Rn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;Rn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;Rn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uN={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fN=new Wo(3e4,6e4);function qo(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function hs(t,e,n,r,i={}){return Nw(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=xo(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),Ow.fetch()(Pw(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},s))})}async function Nw(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},uN),e);try{const i=new hN(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Ea(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ea(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw Ea(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw Ea(t,"user-disabled",o);const u=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw Rw(t,u,l);Kt(t,u)}}catch(i){if(i instanceof Tn)throw i;Kt(t,"network-request-failed",{message:String(i)})}}async function Go(t,e,n,r,i={}){const s=await hs(t,e,n,r,i);return"mfaPendingCredential"in s&&Kt(t,"multi-factor-auth-required",{_serverResponse:s}),s}function Pw(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Cd(t.config,i):`${t.config.apiScheme}://${i}`}class hN{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(wn(this.auth,"network-request-failed")),fN.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Ea(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=wn(t,e,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dN(t,e){return hs(t,"POST","/v1/accounts:delete",e)}async function mN(t,e){return hs(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qs(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function pN(t,e=!1){const n=Le(t),r=await n.getIdToken(e),i=Sd(r);ee(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:qs(uu(i.auth_time)),issuedAtTime:qs(uu(i.iat)),expirationTime:qs(uu(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function uu(t){return Number(t)*1e3}function Sd(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Ma("JWT malformed, contained fewer than 3 sections"),null;try{const i=Qy(n);return i?JSON.parse(i):(Ma("Failed to decode base64 JWT payload"),null)}catch(i){return Ma("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function gN(t){const e=Sd(t);return ee(e,"internal-error"),ee(typeof e.exp<"u","internal-error"),ee(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ki(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Tn&&vN(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function vN({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yN{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dw{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=qs(this.lastLoginAt),this.creationTime=qs(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vc(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Ki(t,mN(n,{idToken:r}));ee(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?_N(s.providerUserInfo):[],a=bN(t.providerData,o),c=t.isAnonymous,l=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),u=c?l:!1,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new Dw(s.createdAt,s.lastLoginAt),isAnonymous:u};Object.assign(t,f)}async function wN(t){const e=Le(t);await vc(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function bN(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function _N(t){return t.map(e=>{var{providerId:n}=e,r=Id(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function EN(t,e){const n=await Nw(t,{},async()=>{const r=xo({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=Pw(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Ow.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _o{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ee(e.idToken,"internal-error"),ee(typeof e.idToken<"u","internal-error"),ee(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):gN(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return ee(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await EN(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new _o;return r&&(ee(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(ee(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(ee(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new _o,this.toJSON())}_performRefresh(){return Rn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kn(t,e){ee(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Wr{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=Id(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new yN(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Dw(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Ki(this,this.stsTokenManager.getToken(this.auth,e));return ee(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return pN(this,e)}reload(){return wN(this)}_assign(e){this!==e&&(ee(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Wr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){ee(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await vc(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Ki(this,dN(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,c,l,u;const f=(r=n.displayName)!==null&&r!==void 0?r:void 0,h=(i=n.email)!==null&&i!==void 0?i:void 0,d=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,g=(o=n.photoURL)!==null&&o!==void 0?o:void 0,y=(a=n.tenantId)!==null&&a!==void 0?a:void 0,_=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,w=(l=n.createdAt)!==null&&l!==void 0?l:void 0,v=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:b,emailVerified:T,isAnonymous:R,providerData:U,stsTokenManager:P}=n;ee(b&&P,e,"internal-error");const A=_o.fromJSON(this.name,P);ee(typeof b=="string",e,"internal-error"),Kn(f,e.name),Kn(h,e.name),ee(typeof T=="boolean",e,"internal-error"),ee(typeof R=="boolean",e,"internal-error"),Kn(d,e.name),Kn(g,e.name),Kn(y,e.name),Kn(_,e.name),Kn(w,e.name),Kn(v,e.name);const H=new Wr({uid:b,auth:e,email:h,emailVerified:T,displayName:f,isAnonymous:R,photoURL:g,phoneNumber:d,tenantId:y,stsTokenManager:A,createdAt:w,lastLoginAt:v});return U&&Array.isArray(U)&&(H.providerData=U.map(K=>Object.assign({},K))),_&&(H._redirectEventId=_),H}static async _fromIdTokenResponse(e,n,r=!1){const i=new _o;i.updateFromServerResponse(n);const s=new Wr({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await vc(s),s}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mw{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Mw.type="NONE";const kg=Mw;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function La(t,e,n){return`firebase:${t}:${e}:${n}`}class xi{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=La(this.userKey,i.apiKey,s),this.fullPersistenceKey=La("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Wr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new xi(On(kg),e,r);const i=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let s=i[0]||On(kg);const o=La(r,e.config.apiKey,e.name);let a=null;for(const l of n)try{const u=await l._get(o);if(u){const f=Wr._fromJSON(e,u);l!==s&&(a=f),s=l;break}}catch{}const c=i.filter(l=>l._shouldAllowMigration);return!s._shouldAllowMigration||!c.length?new xi(s,e,r):(s=c[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==s)try{await l._remove(o)}catch{}})),new xi(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cg(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Fw(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Lw(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Vw(e))return"Blackberry";if(Bw(e))return"Webos";if(Ad(e))return"Safari";if((e.includes("chrome/")||Uw(e))&&!e.includes("edge/"))return"Chrome";if($w(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Lw(t=_t()){return/firefox\//i.test(t)}function Ad(t=_t()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Uw(t=_t()){return/crios\//i.test(t)}function Fw(t=_t()){return/iemobile/i.test(t)}function $w(t=_t()){return/android/i.test(t)}function Vw(t=_t()){return/blackberry/i.test(t)}function Bw(t=_t()){return/webos/i.test(t)}function Cl(t=_t()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function TN(t=_t()){var e;return Cl(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function IN(){return VC()&&document.documentMode===10}function jw(t=_t()){return Cl(t)||$w(t)||Bw(t)||Vw(t)||/windows phone/i.test(t)||Fw(t)}function kN(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hw(t,e=[]){let n;switch(t){case"Browser":n=Cg(_t());break;case"Worker":n=`${Cg(_t())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${is}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CN{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const c=e(s);o(c)}catch(c){a(c)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SN{constructor(e,n,r){this.app=e,this.heartbeatServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Sg(this),this.idTokenSubscription=new Sg(this),this.beforeStateQueue=new CN(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=xw,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=On(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await xi.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c!=null&&c.user)&&(i=c.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return ee(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await vc(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=lN()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Le(e):null;return n&&ee(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&ee(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(On(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Ao("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&On(e)||this._popupRedirectResolver;ee(n,this,"argument-error"),this.redirectPersistenceManager=await xi.create(this,[On(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return ee(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof n=="function"?e.addObserver(n,r,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ee(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Hw(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return r&&(n["X-Firebase-Client"]=r),n}}function ds(t){return Le(t)}class Sg{constructor(e){this.auth=e,this.observer=null,this.addObserver=GC(n=>this.observer=n)}get next(){return ee(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function AN(t,e,n){const r=ds(t);ee(r._canInitEmulator,r,"emulator-config-failed"),ee(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=zw(e),{host:o,port:a}=xN(e),c=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||RN()}function zw(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function xN(t){const e=zw(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Ag(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:Ag(o)}}}function Ag(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function RN(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xd{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Rn("not implemented")}_getIdTokenResponse(e){return Rn("not implemented")}_linkToIdToken(e,n){return Rn("not implemented")}_getReauthenticationResolver(e){return Rn("not implemented")}}async function ON(t,e){return hs(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function NN(t,e){return Go(t,"POST","/v1/accounts:signInWithPassword",qo(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function PN(t,e){return Go(t,"POST","/v1/accounts:signInWithEmailLink",qo(t,e))}async function DN(t,e){return Go(t,"POST","/v1/accounts:signInWithEmailLink",qo(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eo extends xd{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new Eo(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Eo(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return NN(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return PN(e,{email:this._email,oobCode:this._password});default:Kt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return ON(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return DN(e,{idToken:n,email:this._email,oobCode:this._password});default:Kt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ri(t,e){return Go(t,"POST","/v1/accounts:signInWithIdp",qo(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MN="http://localhost";class Zr extends xd{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Zr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Kt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=Id(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Zr(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Ri(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Ri(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Ri(e,n)}buildRequest(){const e={requestUri:MN,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=xo(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LN(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function UN(t){const e=Cs(Ss(t)).link,n=e?Cs(Ss(e)).deep_link_id:null,r=Cs(Ss(t)).deep_link_id;return(r?Cs(Ss(r)).link:null)||r||n||e||t}class Rd{constructor(e){var n,r,i,s,o,a;const c=Cs(Ss(e)),l=(n=c.apiKey)!==null&&n!==void 0?n:null,u=(r=c.oobCode)!==null&&r!==void 0?r:null,f=LN((i=c.mode)!==null&&i!==void 0?i:null);ee(l&&u&&f,"argument-error"),this.apiKey=l,this.operation=f,this.code=u,this.continueUrl=(s=c.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=UN(e);try{return new Rd(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ms{constructor(){this.providerId=ms.PROVIDER_ID}static credential(e,n){return Eo._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Rd.parseLink(n);return ee(r,"argument-error"),Eo._fromEmailAndCode(e,r.code,r.tenantId)}}ms.PROVIDER_ID="password";ms.EMAIL_PASSWORD_SIGN_IN_METHOD="password";ms.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Od{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ko extends Od{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tr extends Ko{constructor(){super("facebook.com")}static credential(e){return Zr._fromParams({providerId:tr.PROVIDER_ID,signInMethod:tr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return tr.credentialFromTaggedObject(e)}static credentialFromError(e){return tr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return tr.credential(e.oauthAccessToken)}catch{return null}}}tr.FACEBOOK_SIGN_IN_METHOD="facebook.com";tr.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sn extends Ko{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Zr._fromParams({providerId:Sn.PROVIDER_ID,signInMethod:Sn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Sn.credentialFromTaggedObject(e)}static credentialFromError(e){return Sn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Sn.credential(n,r)}catch{return null}}}Sn.GOOGLE_SIGN_IN_METHOD="google.com";Sn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class An extends Ko{constructor(){super("github.com")}static credential(e){return Zr._fromParams({providerId:An.PROVIDER_ID,signInMethod:An.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return An.credentialFromTaggedObject(e)}static credentialFromError(e){return An.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return An.credential(e.oauthAccessToken)}catch{return null}}}An.GITHUB_SIGN_IN_METHOD="github.com";An.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nr extends Ko{constructor(){super("twitter.com")}static credential(e,n){return Zr._fromParams({providerId:nr.PROVIDER_ID,signInMethod:nr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return nr.credentialFromTaggedObject(e)}static credentialFromError(e){return nr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return nr.credential(n,r)}catch{return null}}}nr.TWITTER_SIGN_IN_METHOD="twitter.com";nr.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function FN(t,e){return Go(t,"POST","/v1/accounts:signUp",qo(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ei{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Wr._fromIdTokenResponse(e,r,i),o=xg(r);return new ei({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=xg(r);return new ei({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function xg(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yc extends Tn{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,yc.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new yc(e,n,r,i)}}function Ww(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?yc._fromErrorAndOperation(t,s,e,r):s})}async function $N(t,e,n=!1){const r=await Ki(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return ei._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function VN(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const s=await Ki(t,Ww(r,i,e,t),n);ee(s.idToken,r,"internal-error");const o=Sd(s.idToken);ee(o,r,"internal-error");const{sub:a}=o;return ee(t.uid===a,r,"user-mismatch"),ei._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Kt(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qw(t,e,n=!1){const r="signIn",i=await Ww(t,r,e),s=await ei._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function BN(t,e){return qw(ds(t),e)}async function RL(t,e,n){const r=ds(t),i=await FN(r,{returnSecureToken:!0,email:e,password:n}),s=await ei._fromIdTokenResponse(r,"signIn",i);return await r._updateCurrentUser(s.user),s}function OL(t,e,n){return BN(Le(t),ms.credential(e,n))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jN(t,e){return hs(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function NL(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=Le(t),s={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await Ki(r,jN(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find(({providerId:c})=>c==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function HN(t,e,n,r){return Le(t).onIdTokenChanged(e,n,r)}function zN(t,e,n){return Le(t).beforeAuthStateChanged(e,n)}function WN(t,e,n,r){return Le(t).onAuthStateChanged(e,n,r)}function qN(t){return Le(t).signOut()}const wc="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gw{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(wc,"1"),this.storage.removeItem(wc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GN(){const t=_t();return Ad(t)||Cl(t)}const KN=1e3,YN=10;class Kw extends Gw{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=GN()&&kN(),this.fallbackToPolling=jw(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);IN()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,YN):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},KN)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Kw.type="LOCAL";const QN=Kw;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yw extends Gw{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Yw.type="SESSION";const Qw=Yw;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function XN(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sl{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Sl(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async l=>l(n.origin,s)),c=await XN(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Sl.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nd(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JN{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,c)=>{const l=Nd("",20);i.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(f){const h=f;if(h.data.eventId===l)switch(h.data.status){case"ack":clearTimeout(u),s=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(h.data.response);break;default:clearTimeout(u),clearTimeout(s),c(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bn(){return window}function ZN(t){bn().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xw(){return typeof bn().WorkerGlobalScope<"u"&&typeof bn().importScripts=="function"}async function e3(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function t3(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function n3(){return Xw()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jw="firebaseLocalStorageDb",r3=1,bc="firebaseLocalStorage",Zw="fbase_key";class Yo{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Al(t,e){return t.transaction([bc],e?"readwrite":"readonly").objectStore(bc)}function i3(){const t=indexedDB.deleteDatabase(Jw);return new Yo(t).toPromise()}function If(){const t=indexedDB.open(Jw,r3);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(bc,{keyPath:Zw})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(bc)?e(r):(r.close(),await i3(),e(await If()))})})}async function Rg(t,e,n){const r=Al(t,!0).put({[Zw]:e,value:n});return new Yo(r).toPromise()}async function s3(t,e){const n=Al(t,!1).get(e),r=await new Yo(n).toPromise();return r===void 0?null:r.value}function Og(t,e){const n=Al(t,!0).delete(e);return new Yo(n).toPromise()}const o3=800,a3=3;class eb{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await If(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>a3)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Xw()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Sl._getInstance(n3()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await e3(),!this.activeServiceWorker)return;this.sender=new JN(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||t3()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await If();return await Rg(e,wc,"1"),await Og(e,wc),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Rg(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>s3(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Og(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Al(i,!1).getAll();return new Yo(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),o3)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}eb.type="LOCAL";const c3=eb;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function l3(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function u3(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=wn("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",l3().appendChild(r)})}function f3(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new Wo(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tb(t,e){return e?On(e):(ee(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pd extends xd{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ri(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Ri(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Ri(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function h3(t){return qw(t.auth,new Pd(t),t.bypassAuthState)}function d3(t){const{auth:e,user:n}=t;return ee(n,e,"internal-error"),VN(n,new Pd(t),t.bypassAuthState)}async function m3(t){const{auth:e,user:n}=t;return ee(n,e,"internal-error"),$N(n,new Pd(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nb{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return h3;case"linkViaPopup":case"linkViaRedirect":return m3;case"reauthViaPopup":case"reauthViaRedirect":return d3;default:Kt(this.auth,"internal-error")}}resolve(e){Bn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Bn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const p3=new Wo(2e3,1e4);async function PL(t,e,n){const r=ds(t);iN(t,e,Od);const i=tb(r,n);return new Vr(r,"signInViaPopup",e,i).executeNotNull()}class Vr extends nb{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Vr.currentPopupAction&&Vr.currentPopupAction.cancel(),Vr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ee(e,this.auth,"internal-error"),e}async onExecution(){Bn(this.filter.length===1,"Popup operations only handle one event");const e=Nd();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(wn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(wn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Vr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(wn(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,p3.get())};e()}}Vr.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const g3="pendingRedirect",Ua=new Map;class v3 extends nb{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Ua.get(this.auth._key());if(!e){try{const r=await y3(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Ua.set(this.auth._key(),e)}return this.bypassAuthState||Ua.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function y3(t,e){const n=_3(e),r=b3(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function w3(t,e){Ua.set(t._key(),e)}function b3(t){return On(t._redirectPersistence)}function _3(t){return La(g3,t.config.apiKey,t.name)}async function E3(t,e,n=!1){const r=ds(t),i=tb(r,e),o=await new v3(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const T3=10*60*1e3;class I3{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!k3(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!rb(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(wn(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=T3&&this.cachedEventUids.clear(),this.cachedEventUids.has(Ng(e))}saveEventToCache(e){this.cachedEventUids.add(Ng(e)),this.lastProcessedEventTime=Date.now()}}function Ng(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function rb({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function k3(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return rb(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function C3(t,e={}){return hs(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S3=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,A3=/^https?/;async function x3(t){if(t.config.emulator)return;const{authorizedDomains:e}=await C3(t);for(const n of e)try{if(R3(n))return}catch{}Kt(t,"unauthorized-domain")}function R3(t){const e=Tf(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!A3.test(n))return!1;if(S3.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const O3=new Wo(3e4,6e4);function Pg(){const t=bn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function N3(t){return new Promise((e,n)=>{var r,i,s;function o(){Pg(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Pg(),n(wn(t,"network-request-failed"))},timeout:O3.get()})}if(!((i=(r=bn().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=bn().gapi)===null||s===void 0)&&s.load)o();else{const a=f3("iframefcb");return bn()[a]=()=>{gapi.load?o():n(wn(t,"network-request-failed"))},u3(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw Fa=null,e})}let Fa=null;function P3(t){return Fa=Fa||N3(t),Fa}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const D3=new Wo(5e3,15e3),M3="__/auth/iframe",L3="emulator/auth/iframe",U3={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},F3=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function $3(t){const e=t.config;ee(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Cd(e,L3):`https://${t.config.authDomain}/${M3}`,r={apiKey:e.apiKey,appName:t.name,v:is},i=F3.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${xo(r).slice(1)}`}async function V3(t){const e=await P3(t),n=bn().gapi;return ee(n,t,"internal-error"),e.open({where:document.body,url:$3(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:U3,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=wn(t,"network-request-failed"),a=bn().setTimeout(()=>{s(o)},D3.get());function c(){bn().clearTimeout(a),i(r)}r.ping(c).then(c,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const B3={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},j3=500,H3=600,z3="_blank",W3="http://localhost";class Dg{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function q3(t,e,n,r=j3,i=H3){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},B3),{width:r.toString(),height:i.toString(),top:s,left:o}),l=_t().toLowerCase();n&&(a=Uw(l)?z3:n),Lw(l)&&(e=e||W3,c.scrollbars="yes");const u=Object.entries(c).reduce((h,[d,g])=>`${h}${d}=${g},`,"");if(TN(l)&&a!=="_self")return G3(e||"",a),new Dg(null);const f=window.open(e||"",a,u);ee(f,t,"popup-blocked");try{f.focus()}catch{}return new Dg(f)}function G3(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const K3="__/auth/handler",Y3="emulator/auth/handler";function Mg(t,e,n,r,i,s){ee(t.config.authDomain,t,"auth-domain-config-required"),ee(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:is,eventId:i};if(e instanceof Od){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",qC(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,l]of Object.entries(s||{}))o[c]=l}if(e instanceof Ko){const c=e.getScopes().filter(l=>l!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];return`${Q3(t)}?${xo(a).slice(1)}`}function Q3({config:t}){return t.emulator?Cd(t,Y3):`https://${t.authDomain}/${K3}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fu="webStorageSupport";class X3{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Qw,this._completeRedirectFn=E3,this._overrideRedirectResult=w3}async _openPopup(e,n,r,i){var s;Bn((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=Mg(e,n,r,Tf(),i);return q3(e,o,Nd())}async _openRedirect(e,n,r,i){return await this._originValidation(e),ZN(Mg(e,n,r,Tf(),i)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Bn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await V3(e),r=new I3(e);return n.register("authEvent",i=>(ee(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(fu,{type:fu},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[fu];o!==void 0&&n(!!o),Kt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=x3(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return jw()||Ad()||Cl()}}const J3=X3;var Lg="@firebase/auth",Ug="0.22.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z3{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){ee(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eP(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function tP(t){Qr(new gr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),{apiKey:s,authDomain:o}=r.options;return((a,c)=>{ee(s&&!s.includes(":"),"invalid-api-key",{appName:a.name}),ee(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const l={apiKey:s,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Hw(t)},u=new SN(a,c,l);return oN(u,n),u})(r,i)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Qr(new gr("auth-internal",e=>{const n=ds(e.getProvider("auth").getImmediate());return(r=>new Z3(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),vn(Lg,Ug,eP(t)),vn(Lg,Ug,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nP=5*60,rP=Zy("authIdTokenMaxAge")||nP;let Fg=null;const iP=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>rP)return;const i=n==null?void 0:n.token;Fg!==i&&(Fg=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function sP(t=Sh()){const e=Wc(t,"auth");if(e.isInitialized())return e.getImmediate();const n=sN(t,{popupRedirectResolver:J3,persistence:[c3,QN,Qw]}),r=Zy("authTokenSyncURL");if(r){const s=iP(r);zN(n,s,()=>s(n.currentUser)),HN(n,o=>s(o))}const i=Xy("auth");return i&&AN(n,`http://${i}`),n}tP("Browser");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ib="firebasestorage.googleapis.com",sb="storageBucket",oP=2*60*1e3,aP=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ze extends Tn{constructor(e,n,r=0){super(hu(e),`Firebase Storage: ${n} (${hu(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,ze.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return hu(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var He;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(He||(He={}));function hu(t){return"storage/"+t}function Dd(){const t="An unknown error occurred, please check the error payload for server response.";return new ze(He.UNKNOWN,t)}function cP(t){return new ze(He.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function lP(t){return new ze(He.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function uP(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new ze(He.UNAUTHENTICATED,t)}function fP(){return new ze(He.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function hP(t){return new ze(He.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function dP(){return new ze(He.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function mP(){return new ze(He.CANCELED,"User canceled the upload/download.")}function pP(t){return new ze(He.INVALID_URL,"Invalid URL '"+t+"'.")}function gP(t){return new ze(He.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function vP(){return new ze(He.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+sb+"' property when initializing the app?")}function yP(){return new ze(He.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function wP(){return new ze(He.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function bP(t){return new ze(He.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function kf(t){return new ze(He.INVALID_ARGUMENT,t)}function ob(){return new ze(He.APP_DELETED,"The Firebase app was deleted.")}function _P(t){return new ze(He.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Gs(t,e){return new ze(He.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function bs(t){throw new ze(He.INTERNAL_ERROR,"Internal error: "+t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lt{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=Lt.makeFromUrl(e,n)}catch{return new Lt(e,"")}if(r.path==="")return r;throw gP(e)}static makeFromUrl(e,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(T){T.path.charAt(T.path.length-1)==="/"&&(T.path_=T.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+i+o,"i"),c={bucket:1,path:3};function l(T){T.path_=decodeURIComponent(T.path)}const u="v[A-Za-z0-9_]+",f=n.replace(/[.]/g,"\\."),h="(/([^?#]*).*)?$",d=new RegExp(`^https?://${f}/${u}/b/${i}/o${h}`,"i"),g={bucket:1,path:3},y=n===ib?"(?:storage.googleapis.com|storage.cloud.google.com)":n,_="([^?#]*)",w=new RegExp(`^https?://${y}/${i}/${_}`,"i"),b=[{regex:a,indices:c,postModify:s},{regex:d,indices:g,postModify:l},{regex:w,indices:{bucket:1,path:2},postModify:l}];for(let T=0;T<b.length;T++){const R=b[T],U=R.regex.exec(e);if(U){const P=U[R.indices.bucket];let A=U[R.indices.path];A||(A=""),r=new Lt(P,A),R.postModify(r);break}}if(r==null)throw pP(e);return r}}class EP{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TP(t,e,n){let r=1,i=null,s=null,o=!1,a=0;function c(){return a===2}let l=!1;function u(..._){l||(l=!0,e.apply(null,_))}function f(_){i=setTimeout(()=>{i=null,t(d,c())},_)}function h(){s&&clearTimeout(s)}function d(_,...w){if(l){h();return}if(_){h(),u.call(null,_,...w);return}if(c()||o){h(),u.call(null,_,...w);return}r<64&&(r*=2);let b;a===1?(a=2,b=0):b=(r+Math.random())*1e3,f(b)}let g=!1;function y(_){g||(g=!0,h(),!l&&(i!==null?(_||(a=2),clearTimeout(i),f(0)):_||(a=1)))}return f(0),s=setTimeout(()=>{o=!0,y(!0)},n),y}function IP(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kP(t){return t!==void 0}function CP(t){return typeof t=="object"&&!Array.isArray(t)}function Md(t){return typeof t=="string"||t instanceof String}function $g(t){return Ld()&&t instanceof Blob}function Ld(){return typeof Blob<"u"&&!UC()}function Vg(t,e,n,r){if(r<e)throw kf(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw kf(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xl(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function ab(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var qr;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(qr||(qr={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function SP(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,s=e.indexOf(t)!==-1;return n||i||s}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AP{constructor(e,n,r,i,s,o,a,c,l,u,f,h=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=c,this.timeout_=l,this.progressCallback_=u,this.connectionFactory_=f,this.retry=h,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((d,g)=>{this.resolve_=d,this.reject_=g,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new Ta(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=a=>{const c=a.loaded,l=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(c,l)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const a=s.getErrorCode()===qr.NO_ERROR,c=s.getStatus();if(!a||SP(c,this.additionalRetryCodes_)&&this.retry){const u=s.getErrorCode()===qr.ABORT;r(!1,new Ta(!1,null,u));return}const l=this.successCodes_.indexOf(c)!==-1;r(!0,new Ta(l,s))})},n=(r,i)=>{const s=this.resolve_,o=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const c=this.callback_(a,a.getResponse());kP(c)?s(c):s()}catch(c){o(c)}else if(a!==null){const c=Dd();c.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,c)):o(c)}else if(i.canceled){const c=this.appDelete_?ob():mP();o(c)}else{const c=dP();o(c)}};this.canceled_?n(!1,new Ta(!1,null,!0)):this.backoffId_=TP(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&IP(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Ta{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function xP(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function RP(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function OP(t,e){e&&(t["X-Firebase-GMPID"]=e)}function NP(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function PP(t,e,n,r,i,s,o=!0){const a=ab(t.urlParams),c=t.url+a,l=Object.assign({},t.headers);return OP(l,e),xP(l,n),RP(l,s),NP(l,r),new AP(c,t.method,l,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DP(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function MP(...t){const e=DP();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(Ld())return new Blob(t);throw new ze(He.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function LP(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function UP(t){if(typeof atob>"u")throw bP("base-64");return atob(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gn={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class du{constructor(e,n){this.data=e,this.contentType=n||null}}function FP(t,e){switch(t){case gn.RAW:return new du(cb(e));case gn.BASE64:case gn.BASE64URL:return new du(lb(t,e));case gn.DATA_URL:return new du(VP(e),BP(e))}throw Dd()}function cb(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const s=r,o=t.charCodeAt(++n);r=65536|(s&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function $P(t){let e;try{e=decodeURIComponent(t)}catch{throw Gs(gn.DATA_URL,"Malformed data URL.")}return cb(e)}function lb(t,e){switch(t){case gn.BASE64:{const i=e.indexOf("-")!==-1,s=e.indexOf("_")!==-1;if(i||s)throw Gs(t,"Invalid character '"+(i?"-":"_")+"' found: is it base64url encoded?");break}case gn.BASE64URL:{const i=e.indexOf("+")!==-1,s=e.indexOf("/")!==-1;if(i||s)throw Gs(t,"Invalid character '"+(i?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=UP(e)}catch(i){throw i.message.includes("polyfill")?i:Gs(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}class ub{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw Gs(gn.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=jP(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function VP(t){const e=new ub(t);return e.base64?lb(gn.BASE64,e.rest):$P(e.rest)}function BP(t){return new ub(t).contentType}function jP(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rr{constructor(e,n){let r=0,i="";$g(e)?(this.data_=e,r=e.size,i=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=i}size(){return this.size_}type(){return this.type_}slice(e,n){if($g(this.data_)){const r=this.data_,i=LP(r,e,n);return i===null?null:new rr(i)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new rr(r,!0)}}static getBlob(...e){if(Ld()){const n=e.map(r=>r instanceof rr?r.data_:r);return new rr(MP.apply(null,n))}else{const n=e.map(o=>Md(o)?FP(gn.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const i=new Uint8Array(r);let s=0;return n.forEach(o=>{for(let a=0;a<o.length;a++)i[s++]=o[a]}),new rr(i,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fb(t){let e;try{e=JSON.parse(t)}catch{return null}return CP(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HP(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function zP(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function hb(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function WP(t,e){return e}class Tt{constructor(e,n,r,i){this.server=e,this.local=n||e,this.writable=!!r,this.xform=i||WP}}let Ia=null;function qP(t){return!Md(t)||t.length<2?t:hb(t)}function db(){if(Ia)return Ia;const t=[];t.push(new Tt("bucket")),t.push(new Tt("generation")),t.push(new Tt("metageneration")),t.push(new Tt("name","fullPath",!0));function e(s,o){return qP(o)}const n=new Tt("name");n.xform=e,t.push(n);function r(s,o){return o!==void 0?Number(o):o}const i=new Tt("size");return i.xform=r,t.push(i),t.push(new Tt("timeCreated")),t.push(new Tt("updated")),t.push(new Tt("md5Hash",null,!0)),t.push(new Tt("cacheControl",null,!0)),t.push(new Tt("contentDisposition",null,!0)),t.push(new Tt("contentEncoding",null,!0)),t.push(new Tt("contentLanguage",null,!0)),t.push(new Tt("contentType",null,!0)),t.push(new Tt("metadata","customMetadata",!0)),Ia=t,Ia}function GP(t,e){function n(){const r=t.bucket,i=t.fullPath,s=new Lt(r,i);return e._makeStorageReference(s)}Object.defineProperty(t,"ref",{get:n})}function KP(t,e,n){const r={};r.type="file";const i=n.length;for(let s=0;s<i;s++){const o=n[s];r[o.local]=o.xform(r,e[o.server])}return GP(r,t),r}function mb(t,e,n){const r=fb(e);return r===null?null:KP(t,r,n)}function YP(t,e,n,r){const i=fb(e);if(i===null||!Md(i.downloadTokens))return null;const s=i.downloadTokens;if(s.length===0)return null;const o=encodeURIComponent;return s.split(",").map(l=>{const u=t.bucket,f=t.fullPath,h="/b/"+o(u)+"/o/"+o(f),d=xl(h,n,r),g=ab({alt:"media",token:l});return d+g})[0]}function QP(t,e){const n={},r=e.length;for(let i=0;i<r;i++){const s=e[i];s.writable&&(n[s.server]=t[s.local])}return JSON.stringify(n)}class Ud{constructor(e,n,r,i){this.url=e,this.method=n,this.handler=r,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pb(t){if(!t)throw Dd()}function XP(t,e){function n(r,i){const s=mb(t,i,e);return pb(s!==null),s}return n}function JP(t,e){function n(r,i){const s=mb(t,i,e);return pb(s!==null),YP(s,i,t.host,t._protocol)}return n}function gb(t){function e(n,r){let i;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?i=fP():i=uP():n.getStatus()===402?i=lP(t.bucket):n.getStatus()===403?i=hP(t.path):i=r,i.status=n.getStatus(),i.serverResponse=r.serverResponse,i}return e}function vb(t){const e=gb(t);function n(r,i){let s=e(r,i);return r.getStatus()===404&&(s=cP(t.path)),s.serverResponse=i.serverResponse,s}return n}function ZP(t,e,n){const r=e.fullServerUrl(),i=xl(r,t.host,t._protocol),s="GET",o=t.maxOperationRetryTime,a=new Ud(i,s,JP(t,n),o);return a.errorHandler=vb(e),a}function eD(t,e){const n=e.fullServerUrl(),r=xl(n,t.host,t._protocol),i="DELETE",s=t.maxOperationRetryTime;function o(c,l){}const a=new Ud(r,i,o,s);return a.successCodes=[200,204],a.errorHandler=vb(e),a}function tD(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function nD(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=tD(null,e)),r}function rD(t,e,n,r,i){const s=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let b="";for(let T=0;T<2;T++)b=b+Math.random().toString().slice(2);return b}const c=a();o["Content-Type"]="multipart/related; boundary="+c;const l=nD(e,r,i),u=QP(l,n),f="--"+c+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+u+`\r
--`+c+`\r
Content-Type: `+l.contentType+`\r
\r
`,h=`\r
--`+c+"--",d=rr.getBlob(f,r,h);if(d===null)throw yP();const g={name:l.fullPath},y=xl(s,t.host,t._protocol),_="POST",w=t.maxUploadRetryTime,v=new Ud(y,_,XP(t,n),w);return v.urlParams=g,v.headers=o,v.body=d.uploadData(),v.errorHandler=gb(e),v}class iD{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=qr.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=qr.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=qr.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,i){if(this.sent_)throw bs("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),i!==void 0)for(const s in i)i.hasOwnProperty(s)&&this.xhr_.setRequestHeader(s,i[s].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw bs("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw bs("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw bs("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw bs("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class sD extends iD{initXhr(){this.xhr_.responseType="text"}}function Fd(){return new sD}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ti{constructor(e,n){this._service=e,n instanceof Lt?this._location=n:this._location=Lt.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new ti(e,n)}get root(){const e=new Lt(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return hb(this._location.path)}get storage(){return this._service}get parent(){const e=HP(this._location.path);if(e===null)return null;const n=new Lt(this._location.bucket,e);return new ti(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw _P(e)}}function oD(t,e,n){t._throwIfRoot("uploadBytes");const r=rD(t.storage,t._location,db(),new rr(e,!0),n);return t.storage.makeRequestWithTokens(r,Fd).then(i=>({metadata:i,ref:t}))}function aD(t){t._throwIfRoot("getDownloadURL");const e=ZP(t.storage,t._location,db());return t.storage.makeRequestWithTokens(e,Fd).then(n=>{if(n===null)throw wP();return n})}function cD(t){t._throwIfRoot("deleteObject");const e=eD(t.storage,t._location);return t.storage.makeRequestWithTokens(e,Fd)}function lD(t,e){const n=zP(t._location.path,e),r=new Lt(t._location.bucket,n);return new ti(t.storage,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uD(t){return/^[A-Za-z]+:\/\//.test(t)}function fD(t,e){return new ti(t,e)}function yb(t,e){if(t instanceof $d){const n=t;if(n._bucket==null)throw vP();const r=new ti(n,n._bucket);return e!=null?yb(r,e):r}else return e!==void 0?lD(t,e):t}function hD(t,e){if(e&&uD(e)){if(t instanceof $d)return fD(t,e);throw kf("To use ref(service, url), the first argument must be a Storage instance.")}else return yb(t,e)}function Bg(t,e){const n=e==null?void 0:e[sb];return n==null?null:Lt.makeFromBucketSpec(n,t)}function dD(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:i}=r;i&&(t._overrideAuthToken=typeof i=="string"?i:e0(i,t.app.options.projectId))}class $d{constructor(e,n,r,i,s){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._bucket=null,this._host=ib,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=oP,this._maxUploadRetryTime=aP,this._requests=new Set,i!=null?this._bucket=Lt.makeFromBucketSpec(i,this._host):this._bucket=Bg(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Lt.makeFromBucketSpec(this._url,e):this._bucket=Bg(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Vg("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Vg("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new ti(this,e)}_makeRequest(e,n,r,i,s=!0){if(this._deleted)return new EP(ob());{const o=PP(e,this._appId,r,i,n,this._firebaseVersion,s);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,i).getPromise()}}const jg="@firebase/storage",Hg="0.11.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wb="storage";function DL(t,e,n){return t=Le(t),oD(t,e,n)}function ML(t){return t=Le(t),aD(t)}function LL(t){return t=Le(t),cD(t)}function UL(t,e){return t=Le(t),hD(t,e)}function mD(t=Sh(),e){t=Le(t);const r=Wc(t,wb).getImmediate({identifier:e}),i=Jy("storage");return i&&pD(r,...i),r}function pD(t,e,n,r={}){dD(t,e,n,r)}function gD(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new $d(n,r,i,e,is)}function vD(){Qr(new gr(wb,gD,"PUBLIC").setMultipleInstances(!0)),vn(jg,Hg,""),vn(jg,Hg,"esm2017")}vD();const yD={apiKey:{}.VITE_APP_FIREBASE_API_KEY,authDomain:"blog-website-e2738.firebaseapp.com",projectId:"blog-website-e2738",storageBucket:"blog-website-e2738.appspot.com",messagingSenderId:"745669798970",appId:"1:745669798970:web:2e97b01a7f359701afd903",measurementId:"G-JZ5JYDZC95"},wD=r0(yD),bD=$O(),Yi=sP(),FL=new Sn,$L=new An,VL=mD(wD);Yi.languageCode="ru";Yi.currentUser;var _D={};function Qo(){return _D}function To(t){var e=new Date(Date.UTC(t.getFullYear(),t.getMonth(),t.getDate(),t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds()));return e.setUTCFullYear(t.getFullYear()),t.getTime()-e.getTime()}function nt(t,e){if(e.length<t)throw new TypeError(t+" argument"+(t>1?"s":"")+" required, but only "+e.length+" present")}function $a(t){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?$a=function(n){return typeof n}:$a=function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},$a(t)}function Ft(t){nt(1,arguments);var e=Object.prototype.toString.call(t);return t instanceof Date||$a(t)==="object"&&e==="[object Date]"?new Date(t.getTime()):typeof t=="number"||e==="[object Number]"?new Date(t):((typeof t=="string"||e==="[object String]")&&typeof console<"u"&&(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn(new Error().stack)),new Date(NaN))}function zg(t){nt(1,arguments);var e=Ft(t);return e.setHours(0,0,0,0),e}var ED=864e5;function TD(t,e){nt(2,arguments);var n=zg(t),r=zg(e),i=n.getTime()-To(n),s=r.getTime()-To(r);return Math.round((i-s)/ED)}function Va(t){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?Va=function(n){return typeof n}:Va=function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},Va(t)}function ID(t){return nt(1,arguments),t instanceof Date||Va(t)==="object"&&Object.prototype.toString.call(t)==="[object Date]"}function kD(t){if(nt(1,arguments),!ID(t)&&typeof t!="number")return!1;var e=Ft(t);return!isNaN(Number(e))}function _r(t){if(t===null||t===!0||t===!1)return NaN;var e=Number(t);return isNaN(e)?e:e<0?Math.ceil(e):Math.floor(e)}function CD(t,e){nt(2,arguments);var n=Ft(t).getTime(),r=_r(e);return new Date(n+r)}function Cf(t,e){nt(2,arguments);var n=_r(e);return CD(t,-n)}var SD=864e5;function AD(t){nt(1,arguments);var e=Ft(t),n=e.getTime();e.setUTCMonth(0,1),e.setUTCHours(0,0,0,0);var r=e.getTime(),i=n-r;return Math.floor(i/SD)+1}function _c(t){nt(1,arguments);var e=1,n=Ft(t),r=n.getUTCDay(),i=(r<e?7:0)+r-e;return n.setUTCDate(n.getUTCDate()-i),n.setUTCHours(0,0,0,0),n}function bb(t){nt(1,arguments);var e=Ft(t),n=e.getUTCFullYear(),r=new Date(0);r.setUTCFullYear(n+1,0,4),r.setUTCHours(0,0,0,0);var i=_c(r),s=new Date(0);s.setUTCFullYear(n,0,4),s.setUTCHours(0,0,0,0);var o=_c(s);return e.getTime()>=i.getTime()?n+1:e.getTime()>=o.getTime()?n:n-1}function xD(t){nt(1,arguments);var e=bb(t),n=new Date(0);n.setUTCFullYear(e,0,4),n.setUTCHours(0,0,0,0);var r=_c(n);return r}var RD=6048e5;function OD(t){nt(1,arguments);var e=Ft(t),n=_c(e).getTime()-xD(e).getTime();return Math.round(n/RD)+1}function Qi(t,e){var n,r,i,s,o,a,c,l;nt(1,arguments);var u=Qo(),f=_r((n=(r=(i=(s=e==null?void 0:e.weekStartsOn)!==null&&s!==void 0?s:e==null||(o=e.locale)===null||o===void 0||(a=o.options)===null||a===void 0?void 0:a.weekStartsOn)!==null&&i!==void 0?i:u.weekStartsOn)!==null&&r!==void 0?r:(c=u.locale)===null||c===void 0||(l=c.options)===null||l===void 0?void 0:l.weekStartsOn)!==null&&n!==void 0?n:0);if(!(f>=0&&f<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var h=Ft(t),d=h.getUTCDay(),g=(d<f?7:0)+d-f;return h.setUTCDate(h.getUTCDate()-g),h.setUTCHours(0,0,0,0),h}function _b(t,e){var n,r,i,s,o,a,c,l;nt(1,arguments);var u=Ft(t),f=u.getUTCFullYear(),h=Qo(),d=_r((n=(r=(i=(s=e==null?void 0:e.firstWeekContainsDate)!==null&&s!==void 0?s:e==null||(o=e.locale)===null||o===void 0||(a=o.options)===null||a===void 0?void 0:a.firstWeekContainsDate)!==null&&i!==void 0?i:h.firstWeekContainsDate)!==null&&r!==void 0?r:(c=h.locale)===null||c===void 0||(l=c.options)===null||l===void 0?void 0:l.firstWeekContainsDate)!==null&&n!==void 0?n:1);if(!(d>=1&&d<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var g=new Date(0);g.setUTCFullYear(f+1,0,d),g.setUTCHours(0,0,0,0);var y=Qi(g,e),_=new Date(0);_.setUTCFullYear(f,0,d),_.setUTCHours(0,0,0,0);var w=Qi(_,e);return u.getTime()>=y.getTime()?f+1:u.getTime()>=w.getTime()?f:f-1}function ND(t,e){var n,r,i,s,o,a,c,l;nt(1,arguments);var u=Qo(),f=_r((n=(r=(i=(s=e==null?void 0:e.firstWeekContainsDate)!==null&&s!==void 0?s:e==null||(o=e.locale)===null||o===void 0||(a=o.options)===null||a===void 0?void 0:a.firstWeekContainsDate)!==null&&i!==void 0?i:u.firstWeekContainsDate)!==null&&r!==void 0?r:(c=u.locale)===null||c===void 0||(l=c.options)===null||l===void 0?void 0:l.firstWeekContainsDate)!==null&&n!==void 0?n:1),h=_b(t,e),d=new Date(0);d.setUTCFullYear(h,0,f),d.setUTCHours(0,0,0,0);var g=Qi(d,e);return g}var PD=6048e5;function DD(t,e){nt(1,arguments);var n=Ft(t),r=Qi(n,e).getTime()-ND(n,e).getTime();return Math.round(r/PD)+1}function Ee(t,e){for(var n=t<0?"-":"",r=Math.abs(t).toString();r.length<e;)r="0"+r;return n+r}var MD={y:function(e,n){var r=e.getUTCFullYear(),i=r>0?r:1-r;return Ee(n==="yy"?i%100:i,n.length)},M:function(e,n){var r=e.getUTCMonth();return n==="M"?String(r+1):Ee(r+1,2)},d:function(e,n){return Ee(e.getUTCDate(),n.length)},a:function(e,n){var r=e.getUTCHours()/12>=1?"pm":"am";switch(n){case"a":case"aa":return r.toUpperCase();case"aaa":return r;case"aaaaa":return r[0];case"aaaa":default:return r==="am"?"a.m.":"p.m."}},h:function(e,n){return Ee(e.getUTCHours()%12||12,n.length)},H:function(e,n){return Ee(e.getUTCHours(),n.length)},m:function(e,n){return Ee(e.getUTCMinutes(),n.length)},s:function(e,n){return Ee(e.getUTCSeconds(),n.length)},S:function(e,n){var r=n.length,i=e.getUTCMilliseconds(),s=Math.floor(i*Math.pow(10,r-3));return Ee(s,n.length)}};const Yn=MD;var hi={am:"am",pm:"pm",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},LD={G:function(e,n,r){var i=e.getUTCFullYear()>0?1:0;switch(n){case"G":case"GG":case"GGG":return r.era(i,{width:"abbreviated"});case"GGGGG":return r.era(i,{width:"narrow"});case"GGGG":default:return r.era(i,{width:"wide"})}},y:function(e,n,r){if(n==="yo"){var i=e.getUTCFullYear(),s=i>0?i:1-i;return r.ordinalNumber(s,{unit:"year"})}return Yn.y(e,n)},Y:function(e,n,r,i){var s=_b(e,i),o=s>0?s:1-s;if(n==="YY"){var a=o%100;return Ee(a,2)}return n==="Yo"?r.ordinalNumber(o,{unit:"year"}):Ee(o,n.length)},R:function(e,n){var r=bb(e);return Ee(r,n.length)},u:function(e,n){var r=e.getUTCFullYear();return Ee(r,n.length)},Q:function(e,n,r){var i=Math.ceil((e.getUTCMonth()+1)/3);switch(n){case"Q":return String(i);case"QQ":return Ee(i,2);case"Qo":return r.ordinalNumber(i,{unit:"quarter"});case"QQQ":return r.quarter(i,{width:"abbreviated",context:"formatting"});case"QQQQQ":return r.quarter(i,{width:"narrow",context:"formatting"});case"QQQQ":default:return r.quarter(i,{width:"wide",context:"formatting"})}},q:function(e,n,r){var i=Math.ceil((e.getUTCMonth()+1)/3);switch(n){case"q":return String(i);case"qq":return Ee(i,2);case"qo":return r.ordinalNumber(i,{unit:"quarter"});case"qqq":return r.quarter(i,{width:"abbreviated",context:"standalone"});case"qqqqq":return r.quarter(i,{width:"narrow",context:"standalone"});case"qqqq":default:return r.quarter(i,{width:"wide",context:"standalone"})}},M:function(e,n,r){var i=e.getUTCMonth();switch(n){case"M":case"MM":return Yn.M(e,n);case"Mo":return r.ordinalNumber(i+1,{unit:"month"});case"MMM":return r.month(i,{width:"abbreviated",context:"formatting"});case"MMMMM":return r.month(i,{width:"narrow",context:"formatting"});case"MMMM":default:return r.month(i,{width:"wide",context:"formatting"})}},L:function(e,n,r){var i=e.getUTCMonth();switch(n){case"L":return String(i+1);case"LL":return Ee(i+1,2);case"Lo":return r.ordinalNumber(i+1,{unit:"month"});case"LLL":return r.month(i,{width:"abbreviated",context:"standalone"});case"LLLLL":return r.month(i,{width:"narrow",context:"standalone"});case"LLLL":default:return r.month(i,{width:"wide",context:"standalone"})}},w:function(e,n,r,i){var s=DD(e,i);return n==="wo"?r.ordinalNumber(s,{unit:"week"}):Ee(s,n.length)},I:function(e,n,r){var i=OD(e);return n==="Io"?r.ordinalNumber(i,{unit:"week"}):Ee(i,n.length)},d:function(e,n,r){return n==="do"?r.ordinalNumber(e.getUTCDate(),{unit:"date"}):Yn.d(e,n)},D:function(e,n,r){var i=AD(e);return n==="Do"?r.ordinalNumber(i,{unit:"dayOfYear"}):Ee(i,n.length)},E:function(e,n,r){var i=e.getUTCDay();switch(n){case"E":case"EE":case"EEE":return r.day(i,{width:"abbreviated",context:"formatting"});case"EEEEE":return r.day(i,{width:"narrow",context:"formatting"});case"EEEEEE":return r.day(i,{width:"short",context:"formatting"});case"EEEE":default:return r.day(i,{width:"wide",context:"formatting"})}},e:function(e,n,r,i){var s=e.getUTCDay(),o=(s-i.weekStartsOn+8)%7||7;switch(n){case"e":return String(o);case"ee":return Ee(o,2);case"eo":return r.ordinalNumber(o,{unit:"day"});case"eee":return r.day(s,{width:"abbreviated",context:"formatting"});case"eeeee":return r.day(s,{width:"narrow",context:"formatting"});case"eeeeee":return r.day(s,{width:"short",context:"formatting"});case"eeee":default:return r.day(s,{width:"wide",context:"formatting"})}},c:function(e,n,r,i){var s=e.getUTCDay(),o=(s-i.weekStartsOn+8)%7||7;switch(n){case"c":return String(o);case"cc":return Ee(o,n.length);case"co":return r.ordinalNumber(o,{unit:"day"});case"ccc":return r.day(s,{width:"abbreviated",context:"standalone"});case"ccccc":return r.day(s,{width:"narrow",context:"standalone"});case"cccccc":return r.day(s,{width:"short",context:"standalone"});case"cccc":default:return r.day(s,{width:"wide",context:"standalone"})}},i:function(e,n,r){var i=e.getUTCDay(),s=i===0?7:i;switch(n){case"i":return String(s);case"ii":return Ee(s,n.length);case"io":return r.ordinalNumber(s,{unit:"day"});case"iii":return r.day(i,{width:"abbreviated",context:"formatting"});case"iiiii":return r.day(i,{width:"narrow",context:"formatting"});case"iiiiii":return r.day(i,{width:"short",context:"formatting"});case"iiii":default:return r.day(i,{width:"wide",context:"formatting"})}},a:function(e,n,r){var i=e.getUTCHours(),s=i/12>=1?"pm":"am";switch(n){case"a":case"aa":return r.dayPeriod(s,{width:"abbreviated",context:"formatting"});case"aaa":return r.dayPeriod(s,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return r.dayPeriod(s,{width:"narrow",context:"formatting"});case"aaaa":default:return r.dayPeriod(s,{width:"wide",context:"formatting"})}},b:function(e,n,r){var i=e.getUTCHours(),s;switch(i===12?s=hi.noon:i===0?s=hi.midnight:s=i/12>=1?"pm":"am",n){case"b":case"bb":return r.dayPeriod(s,{width:"abbreviated",context:"formatting"});case"bbb":return r.dayPeriod(s,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return r.dayPeriod(s,{width:"narrow",context:"formatting"});case"bbbb":default:return r.dayPeriod(s,{width:"wide",context:"formatting"})}},B:function(e,n,r){var i=e.getUTCHours(),s;switch(i>=17?s=hi.evening:i>=12?s=hi.afternoon:i>=4?s=hi.morning:s=hi.night,n){case"B":case"BB":case"BBB":return r.dayPeriod(s,{width:"abbreviated",context:"formatting"});case"BBBBB":return r.dayPeriod(s,{width:"narrow",context:"formatting"});case"BBBB":default:return r.dayPeriod(s,{width:"wide",context:"formatting"})}},h:function(e,n,r){if(n==="ho"){var i=e.getUTCHours()%12;return i===0&&(i=12),r.ordinalNumber(i,{unit:"hour"})}return Yn.h(e,n)},H:function(e,n,r){return n==="Ho"?r.ordinalNumber(e.getUTCHours(),{unit:"hour"}):Yn.H(e,n)},K:function(e,n,r){var i=e.getUTCHours()%12;return n==="Ko"?r.ordinalNumber(i,{unit:"hour"}):Ee(i,n.length)},k:function(e,n,r){var i=e.getUTCHours();return i===0&&(i=24),n==="ko"?r.ordinalNumber(i,{unit:"hour"}):Ee(i,n.length)},m:function(e,n,r){return n==="mo"?r.ordinalNumber(e.getUTCMinutes(),{unit:"minute"}):Yn.m(e,n)},s:function(e,n,r){return n==="so"?r.ordinalNumber(e.getUTCSeconds(),{unit:"second"}):Yn.s(e,n)},S:function(e,n){return Yn.S(e,n)},X:function(e,n,r,i){var s=i._originalDate||e,o=s.getTimezoneOffset();if(o===0)return"Z";switch(n){case"X":return qg(o);case"XXXX":case"XX":return Or(o);case"XXXXX":case"XXX":default:return Or(o,":")}},x:function(e,n,r,i){var s=i._originalDate||e,o=s.getTimezoneOffset();switch(n){case"x":return qg(o);case"xxxx":case"xx":return Or(o);case"xxxxx":case"xxx":default:return Or(o,":")}},O:function(e,n,r,i){var s=i._originalDate||e,o=s.getTimezoneOffset();switch(n){case"O":case"OO":case"OOO":return"GMT"+Wg(o,":");case"OOOO":default:return"GMT"+Or(o,":")}},z:function(e,n,r,i){var s=i._originalDate||e,o=s.getTimezoneOffset();switch(n){case"z":case"zz":case"zzz":return"GMT"+Wg(o,":");case"zzzz":default:return"GMT"+Or(o,":")}},t:function(e,n,r,i){var s=i._originalDate||e,o=Math.floor(s.getTime()/1e3);return Ee(o,n.length)},T:function(e,n,r,i){var s=i._originalDate||e,o=s.getTime();return Ee(o,n.length)}};function Wg(t,e){var n=t>0?"-":"+",r=Math.abs(t),i=Math.floor(r/60),s=r%60;if(s===0)return n+String(i);var o=e||"";return n+String(i)+o+Ee(s,2)}function qg(t,e){if(t%60===0){var n=t>0?"-":"+";return n+Ee(Math.abs(t)/60,2)}return Or(t,e)}function Or(t,e){var n=e||"",r=t>0?"-":"+",i=Math.abs(t),s=Ee(Math.floor(i/60),2),o=Ee(i%60,2);return r+s+n+o}const UD=LD;var Gg=function(e,n){switch(e){case"P":return n.date({width:"short"});case"PP":return n.date({width:"medium"});case"PPP":return n.date({width:"long"});case"PPPP":default:return n.date({width:"full"})}},Eb=function(e,n){switch(e){case"p":return n.time({width:"short"});case"pp":return n.time({width:"medium"});case"ppp":return n.time({width:"long"});case"pppp":default:return n.time({width:"full"})}},FD=function(e,n){var r=e.match(/(P+)(p+)?/)||[],i=r[1],s=r[2];if(!s)return Gg(e,n);var o;switch(i){case"P":o=n.dateTime({width:"short"});break;case"PP":o=n.dateTime({width:"medium"});break;case"PPP":o=n.dateTime({width:"long"});break;case"PPPP":default:o=n.dateTime({width:"full"});break}return o.replace("{{date}}",Gg(i,n)).replace("{{time}}",Eb(s,n))},$D={p:Eb,P:FD};const VD=$D;var BD=["D","DD"],jD=["YY","YYYY"];function HD(t){return BD.indexOf(t)!==-1}function zD(t){return jD.indexOf(t)!==-1}function Kg(t,e,n){if(t==="YYYY")throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(e,"`) for formatting years to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if(t==="YY")throw new RangeError("Use `yy` instead of `YY` (in `".concat(e,"`) for formatting years to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if(t==="D")throw new RangeError("Use `d` instead of `D` (in `".concat(e,"`) for formatting days of the month to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if(t==="DD")throw new RangeError("Use `dd` instead of `DD` (in `".concat(e,"`) for formatting days of the month to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"))}var WD={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},qD=function(e,n,r){var i,s=WD[e];return typeof s=="string"?i=s:n===1?i=s.one:i=s.other.replace("{{count}}",n.toString()),r!=null&&r.addSuffix?r.comparison&&r.comparison>0?"in "+i:i+" ago":i};const GD=qD;function Oi(t){return function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.width?String(e.width):t.defaultWidth,r=t.formats[n]||t.formats[t.defaultWidth];return r}}var KD={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},YD={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},QD={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},XD={date:Oi({formats:KD,defaultWidth:"full"}),time:Oi({formats:YD,defaultWidth:"full"}),dateTime:Oi({formats:QD,defaultWidth:"full"})};const JD=XD;var ZD={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},e4=function(e,n,r,i){return ZD[e]};const t4=e4;function dn(t){return function(e,n){var r=n!=null&&n.context?String(n.context):"standalone",i;if(r==="formatting"&&t.formattingValues){var s=t.defaultFormattingWidth||t.defaultWidth,o=n!=null&&n.width?String(n.width):s;i=t.formattingValues[o]||t.formattingValues[s]}else{var a=t.defaultWidth,c=n!=null&&n.width?String(n.width):t.defaultWidth;i=t.values[c]||t.values[a]}var l=t.argumentCallback?t.argumentCallback(e):e;return i[l]}}var n4={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},r4={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},i4={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},s4={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},o4={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},a4={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},c4=function(e,n){var r=Number(e),i=r%100;if(i>20||i<10)switch(i%10){case 1:return r+"st";case 2:return r+"nd";case 3:return r+"rd"}return r+"th"},l4={ordinalNumber:c4,era:dn({values:n4,defaultWidth:"wide"}),quarter:dn({values:r4,defaultWidth:"wide",argumentCallback:function(e){return e-1}}),month:dn({values:i4,defaultWidth:"wide"}),day:dn({values:s4,defaultWidth:"wide"}),dayPeriod:dn({values:o4,defaultWidth:"wide",formattingValues:a4,defaultFormattingWidth:"wide"})};const u4=l4;function mn(t){return function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.width,i=r&&t.matchPatterns[r]||t.matchPatterns[t.defaultMatchWidth],s=e.match(i);if(!s)return null;var o=s[0],a=r&&t.parsePatterns[r]||t.parsePatterns[t.defaultParseWidth],c=Array.isArray(a)?h4(a,function(f){return f.test(o)}):f4(a,function(f){return f.test(o)}),l;l=t.valueCallback?t.valueCallback(c):c,l=n.valueCallback?n.valueCallback(l):l;var u=e.slice(o.length);return{value:l,rest:u}}}function f4(t,e){for(var n in t)if(t.hasOwnProperty(n)&&e(t[n]))return n}function h4(t,e){for(var n=0;n<t.length;n++)if(e(t[n]))return n}function Tb(t){return function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=e.match(t.matchPattern);if(!r)return null;var i=r[0],s=e.match(t.parsePattern);if(!s)return null;var o=t.valueCallback?t.valueCallback(s[0]):s[0];o=n.valueCallback?n.valueCallback(o):o;var a=e.slice(i.length);return{value:o,rest:a}}}var d4=/^(\d+)(th|st|nd|rd)?/i,m4=/\d+/i,p4={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},g4={any:[/^b/i,/^(a|c)/i]},v4={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},y4={any:[/1/i,/2/i,/3/i,/4/i]},w4={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},b4={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},_4={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},E4={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},T4={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},I4={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},k4={ordinalNumber:Tb({matchPattern:d4,parsePattern:m4,valueCallback:function(e){return parseInt(e,10)}}),era:mn({matchPatterns:p4,defaultMatchWidth:"wide",parsePatterns:g4,defaultParseWidth:"any"}),quarter:mn({matchPatterns:v4,defaultMatchWidth:"wide",parsePatterns:y4,defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:mn({matchPatterns:w4,defaultMatchWidth:"wide",parsePatterns:b4,defaultParseWidth:"any"}),day:mn({matchPatterns:_4,defaultMatchWidth:"wide",parsePatterns:E4,defaultParseWidth:"any"}),dayPeriod:mn({matchPatterns:T4,defaultMatchWidth:"any",parsePatterns:I4,defaultParseWidth:"any"})};const C4=k4;var S4={code:"en-US",formatDistance:GD,formatLong:JD,formatRelative:t4,localize:u4,match:C4,options:{weekStartsOn:0,firstWeekContainsDate:1}};const Ib=S4;var A4=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,x4=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,R4=/^'([^]*?)'?$/,O4=/''/g,N4=/[a-zA-Z]/;function P4(t,e,n){var r,i,s,o,a,c,l,u,f,h,d,g,y,_,w,v,b,T;nt(2,arguments);var R=String(e),U=Qo(),P=(r=(i=n==null?void 0:n.locale)!==null&&i!==void 0?i:U.locale)!==null&&r!==void 0?r:Ib,A=_r((s=(o=(a=(c=n==null?void 0:n.firstWeekContainsDate)!==null&&c!==void 0?c:n==null||(l=n.locale)===null||l===void 0||(u=l.options)===null||u===void 0?void 0:u.firstWeekContainsDate)!==null&&a!==void 0?a:U.firstWeekContainsDate)!==null&&o!==void 0?o:(f=U.locale)===null||f===void 0||(h=f.options)===null||h===void 0?void 0:h.firstWeekContainsDate)!==null&&s!==void 0?s:1);if(!(A>=1&&A<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var H=_r((d=(g=(y=(_=n==null?void 0:n.weekStartsOn)!==null&&_!==void 0?_:n==null||(w=n.locale)===null||w===void 0||(v=w.options)===null||v===void 0?void 0:v.weekStartsOn)!==null&&y!==void 0?y:U.weekStartsOn)!==null&&g!==void 0?g:(b=U.locale)===null||b===void 0||(T=b.options)===null||T===void 0?void 0:T.weekStartsOn)!==null&&d!==void 0?d:0);if(!(H>=0&&H<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(!P.localize)throw new RangeError("locale must contain localize property");if(!P.formatLong)throw new RangeError("locale must contain formatLong property");var K=Ft(t);if(!kD(K))throw new RangeError("Invalid time value");var le=To(K),j=Cf(K,le),_e={firstWeekContainsDate:A,weekStartsOn:H,locale:P,_originalDate:K},xe=R.match(x4).map(function(he){var ve=he[0];if(ve==="p"||ve==="P"){var ye=VD[ve];return ye(he,P.formatLong)}return he}).join("").match(A4).map(function(he){if(he==="''")return"'";var ve=he[0];if(ve==="'")return D4(he);var ye=UD[ve];if(ye)return!(n!=null&&n.useAdditionalWeekYearTokens)&&zD(he)&&Kg(he,e,String(t)),!(n!=null&&n.useAdditionalDayOfYearTokens)&&HD(he)&&Kg(he,e,String(t)),ye(j,he,P.localize,_e);if(ve.match(N4))throw new RangeError("Format string contains an unescaped latin alphabet character `"+ve+"`");return he}).join("");return xe}function D4(t){var e=t.match(R4);return e?e[1].replace(O4,"'"):t}function M4(t,e,n){var r,i,s,o,a,c,l,u,f,h;nt(2,arguments);var d=Ft(t),g=Ft(e),y=Qo(),_=(r=(i=n==null?void 0:n.locale)!==null&&i!==void 0?i:y.locale)!==null&&r!==void 0?r:Ib,w=_r((s=(o=(a=(c=n==null?void 0:n.weekStartsOn)!==null&&c!==void 0?c:n==null||(l=n.locale)===null||l===void 0||(u=l.options)===null||u===void 0?void 0:u.weekStartsOn)!==null&&a!==void 0?a:y.weekStartsOn)!==null&&o!==void 0?o:(f=y.locale)===null||f===void 0||(h=f.options)===null||h===void 0?void 0:h.weekStartsOn)!==null&&s!==void 0?s:0);if(!_.localize)throw new RangeError("locale must contain localize property");if(!_.formatLong)throw new RangeError("locale must contain formatLong property");if(!_.formatRelative)throw new RangeError("locale must contain formatRelative property");var v=TD(d,g);if(isNaN(v))throw new RangeError("Invalid time value");var b;v<-6?b="other":v<-1?b="lastWeek":v<0?b="yesterday":v<1?b="today":v<2?b="tomorrow":v<7?b="nextWeek":b="other";var T=Cf(d,To(d)),R=Cf(g,To(g)),U=_.formatRelative(b,T,R,{locale:_,weekStartsOn:w});return P4(d,U,{locale:_,weekStartsOn:w})}function Yg(t,e,n){nt(2,arguments);var r=Qi(t,n),i=Qi(e,n);return r.getTime()===i.getTime()}function _s(t,e){if(t.one!==void 0&&e===1)return t.one;var n=e%10,r=e%100;return n===1&&r!==11?t.singularNominative.replace("{{count}}",String(e)):n>=2&&n<=4&&(r<10||r>20)?t.singularGenitive.replace("{{count}}",String(e)):t.pluralGenitive.replace("{{count}}",String(e))}function It(t){return function(e,n){return n!=null&&n.addSuffix?n.comparison&&n.comparison>0?t.future?_s(t.future,e):"через "+_s(t.regular,e):t.past?_s(t.past,e):_s(t.regular,e)+" назад":_s(t.regular,e)}}var L4={lessThanXSeconds:It({regular:{one:"меньше секунды",singularNominative:"меньше {{count}} секунды",singularGenitive:"меньше {{count}} секунд",pluralGenitive:"меньше {{count}} секунд"},future:{one:"меньше, чем через секунду",singularNominative:"меньше, чем через {{count}} секунду",singularGenitive:"меньше, чем через {{count}} секунды",pluralGenitive:"меньше, чем через {{count}} секунд"}}),xSeconds:It({regular:{singularNominative:"{{count}} секунда",singularGenitive:"{{count}} секунды",pluralGenitive:"{{count}} секунд"},past:{singularNominative:"{{count}} секунду назад",singularGenitive:"{{count}} секунды назад",pluralGenitive:"{{count}} секунд назад"},future:{singularNominative:"через {{count}} секунду",singularGenitive:"через {{count}} секунды",pluralGenitive:"через {{count}} секунд"}}),halfAMinute:function(e,n){return n!=null&&n.addSuffix?n.comparison&&n.comparison>0?"через полминуты":"полминуты назад":"полминуты"},lessThanXMinutes:It({regular:{one:"меньше минуты",singularNominative:"меньше {{count}} минуты",singularGenitive:"меньше {{count}} минут",pluralGenitive:"меньше {{count}} минут"},future:{one:"меньше, чем через минуту",singularNominative:"меньше, чем через {{count}} минуту",singularGenitive:"меньше, чем через {{count}} минуты",pluralGenitive:"меньше, чем через {{count}} минут"}}),xMinutes:It({regular:{singularNominative:"{{count}} минута",singularGenitive:"{{count}} минуты",pluralGenitive:"{{count}} минут"},past:{singularNominative:"{{count}} минуту назад",singularGenitive:"{{count}} минуты назад",pluralGenitive:"{{count}} минут назад"},future:{singularNominative:"через {{count}} минуту",singularGenitive:"через {{count}} минуты",pluralGenitive:"через {{count}} минут"}}),aboutXHours:It({regular:{singularNominative:"около {{count}} часа",singularGenitive:"около {{count}} часов",pluralGenitive:"около {{count}} часов"},future:{singularNominative:"приблизительно через {{count}} час",singularGenitive:"приблизительно через {{count}} часа",pluralGenitive:"приблизительно через {{count}} часов"}}),xHours:It({regular:{singularNominative:"{{count}} час",singularGenitive:"{{count}} часа",pluralGenitive:"{{count}} часов"}}),xDays:It({regular:{singularNominative:"{{count}} день",singularGenitive:"{{count}} дня",pluralGenitive:"{{count}} дней"}}),aboutXWeeks:It({regular:{singularNominative:"около {{count}} недели",singularGenitive:"около {{count}} недель",pluralGenitive:"около {{count}} недель"},future:{singularNominative:"приблизительно через {{count}} неделю",singularGenitive:"приблизительно через {{count}} недели",pluralGenitive:"приблизительно через {{count}} недель"}}),xWeeks:It({regular:{singularNominative:"{{count}} неделя",singularGenitive:"{{count}} недели",pluralGenitive:"{{count}} недель"}}),aboutXMonths:It({regular:{singularNominative:"около {{count}} месяца",singularGenitive:"около {{count}} месяцев",pluralGenitive:"около {{count}} месяцев"},future:{singularNominative:"приблизительно через {{count}} месяц",singularGenitive:"приблизительно через {{count}} месяца",pluralGenitive:"приблизительно через {{count}} месяцев"}}),xMonths:It({regular:{singularNominative:"{{count}} месяц",singularGenitive:"{{count}} месяца",pluralGenitive:"{{count}} месяцев"}}),aboutXYears:It({regular:{singularNominative:"около {{count}} года",singularGenitive:"около {{count}} лет",pluralGenitive:"около {{count}} лет"},future:{singularNominative:"приблизительно через {{count}} год",singularGenitive:"приблизительно через {{count}} года",pluralGenitive:"приблизительно через {{count}} лет"}}),xYears:It({regular:{singularNominative:"{{count}} год",singularGenitive:"{{count}} года",pluralGenitive:"{{count}} лет"}}),overXYears:It({regular:{singularNominative:"больше {{count}} года",singularGenitive:"больше {{count}} лет",pluralGenitive:"больше {{count}} лет"},future:{singularNominative:"больше, чем через {{count}} год",singularGenitive:"больше, чем через {{count}} года",pluralGenitive:"больше, чем через {{count}} лет"}}),almostXYears:It({regular:{singularNominative:"почти {{count}} год",singularGenitive:"почти {{count}} года",pluralGenitive:"почти {{count}} лет"},future:{singularNominative:"почти через {{count}} год",singularGenitive:"почти через {{count}} года",pluralGenitive:"почти через {{count}} лет"}})},U4=function(e,n,r){return L4[e](n,r)};const F4=U4;var $4={full:"EEEE, d MMMM y 'г.'",long:"d MMMM y 'г.'",medium:"d MMM y 'г.'",short:"dd.MM.y"},V4={full:"H:mm:ss zzzz",long:"H:mm:ss z",medium:"H:mm:ss",short:"H:mm"},B4={any:"{{date}}, {{time}}"},j4={date:Oi({formats:$4,defaultWidth:"full"}),time:Oi({formats:V4,defaultWidth:"full"}),dateTime:Oi({formats:B4,defaultWidth:"any"})};const H4=j4;var Vd=["воскресенье","понедельник","вторник","среду","четверг","пятницу","субботу"];function z4(t){var e=Vd[t];switch(t){case 0:return"'в прошлое "+e+" в' p";case 1:case 2:case 4:return"'в прошлый "+e+" в' p";case 3:case 5:case 6:return"'в прошлую "+e+" в' p"}}function Qg(t){var e=Vd[t];return t===2?"'во "+e+" в' p":"'в "+e+" в' p"}function W4(t){var e=Vd[t];switch(t){case 0:return"'в следующее "+e+" в' p";case 1:case 2:case 4:return"'в следующий "+e+" в' p";case 3:case 5:case 6:return"'в следующую "+e+" в' p"}}var q4={lastWeek:function(e,n,r){var i=e.getUTCDay();return Yg(e,n,r)?Qg(i):z4(i)},yesterday:"'вчера в' p",today:"'сегодня в' p",tomorrow:"'завтра в' p",nextWeek:function(e,n,r){var i=e.getUTCDay();return Yg(e,n,r)?Qg(i):W4(i)},other:"P"},G4=function(e,n,r,i){var s=q4[e];return typeof s=="function"?s(n,r,i):s};const K4=G4;var Y4={narrow:["до н.э.","н.э."],abbreviated:["до н. э.","н. э."],wide:["до нашей эры","нашей эры"]},Q4={narrow:["1","2","3","4"],abbreviated:["1-й кв.","2-й кв.","3-й кв.","4-й кв."],wide:["1-й квартал","2-й квартал","3-й квартал","4-й квартал"]},X4={narrow:["Я","Ф","М","А","М","И","И","А","С","О","Н","Д"],abbreviated:["янв.","фев.","март","апр.","май","июнь","июль","авг.","сент.","окт.","нояб.","дек."],wide:["январь","февраль","март","апрель","май","июнь","июль","август","сентябрь","октябрь","ноябрь","декабрь"]},J4={narrow:["Я","Ф","М","А","М","И","И","А","С","О","Н","Д"],abbreviated:["янв.","фев.","мар.","апр.","мая","июн.","июл.","авг.","сент.","окт.","нояб.","дек."],wide:["января","февраля","марта","апреля","мая","июня","июля","августа","сентября","октября","ноября","декабря"]},Z4={narrow:["В","П","В","С","Ч","П","С"],short:["вс","пн","вт","ср","чт","пт","сб"],abbreviated:["вск","пнд","втр","срд","чтв","птн","суб"],wide:["воскресенье","понедельник","вторник","среда","четверг","пятница","суббота"]},eM={narrow:{am:"ДП",pm:"ПП",midnight:"полн.",noon:"полд.",morning:"утро",afternoon:"день",evening:"веч.",night:"ночь"},abbreviated:{am:"ДП",pm:"ПП",midnight:"полн.",noon:"полд.",morning:"утро",afternoon:"день",evening:"веч.",night:"ночь"},wide:{am:"ДП",pm:"ПП",midnight:"полночь",noon:"полдень",morning:"утро",afternoon:"день",evening:"вечер",night:"ночь"}},tM={narrow:{am:"ДП",pm:"ПП",midnight:"полн.",noon:"полд.",morning:"утра",afternoon:"дня",evening:"веч.",night:"ночи"},abbreviated:{am:"ДП",pm:"ПП",midnight:"полн.",noon:"полд.",morning:"утра",afternoon:"дня",evening:"веч.",night:"ночи"},wide:{am:"ДП",pm:"ПП",midnight:"полночь",noon:"полдень",morning:"утра",afternoon:"дня",evening:"вечера",night:"ночи"}},nM=function(e,n){var r=Number(e),i=n==null?void 0:n.unit,s;return i==="date"?s="-е":i==="week"||i==="minute"||i==="second"?s="-я":s="-й",r+s},rM={ordinalNumber:nM,era:dn({values:Y4,defaultWidth:"wide"}),quarter:dn({values:Q4,defaultWidth:"wide",argumentCallback:function(e){return e-1}}),month:dn({values:X4,defaultWidth:"wide",formattingValues:J4,defaultFormattingWidth:"wide"}),day:dn({values:Z4,defaultWidth:"wide"}),dayPeriod:dn({values:eM,defaultWidth:"any",formattingValues:tM,defaultFormattingWidth:"wide"})};const iM=rM;var sM=/^(\d+)(-?(е|я|й|ое|ье|ая|ья|ый|ой|ий|ый))?/i,oM=/\d+/i,aM={narrow:/^((до )?н\.?\s?э\.?)/i,abbreviated:/^((до )?н\.?\s?э\.?)/i,wide:/^(до нашей эры|нашей эры|наша эра)/i},cM={any:[/^д/i,/^н/i]},lM={narrow:/^[1234]/i,abbreviated:/^[1234](-?[ыои]?й?)? кв.?/i,wide:/^[1234](-?[ыои]?й?)? квартал/i},uM={any:[/1/i,/2/i,/3/i,/4/i]},fM={narrow:/^[яфмаисонд]/i,abbreviated:/^(янв|фев|март?|апр|ма[йя]|июн[ья]?|июл[ья]?|авг|сент?|окт|нояб?|дек)\.?/i,wide:/^(январ[ья]|феврал[ья]|марта?|апрел[ья]|ма[йя]|июн[ья]|июл[ья]|августа?|сентябр[ья]|октябр[ья]|октябр[ья]|ноябр[ья]|декабр[ья])/i},hM={narrow:[/^я/i,/^ф/i,/^м/i,/^а/i,/^м/i,/^и/i,/^и/i,/^а/i,/^с/i,/^о/i,/^н/i,/^я/i],any:[/^я/i,/^ф/i,/^мар/i,/^ап/i,/^ма[йя]/i,/^июн/i,/^июл/i,/^ав/i,/^с/i,/^о/i,/^н/i,/^д/i]},dM={narrow:/^[впсч]/i,short:/^(вс|во|пн|по|вт|ср|чт|че|пт|пя|сб|су)\.?/i,abbreviated:/^(вск|вос|пнд|пон|втр|вто|срд|сре|чтв|чет|птн|пят|суб).?/i,wide:/^(воскресень[ея]|понедельника?|вторника?|сред[аы]|четверга?|пятниц[аы]|суббот[аы])/i},mM={narrow:[/^в/i,/^п/i,/^в/i,/^с/i,/^ч/i,/^п/i,/^с/i],any:[/^в[ос]/i,/^п[он]/i,/^в/i,/^ср/i,/^ч/i,/^п[ят]/i,/^с[уб]/i]},pM={narrow:/^([дп]п|полн\.?|полд\.?|утр[оа]|день|дня|веч\.?|ноч[ьи])/i,abbreviated:/^([дп]п|полн\.?|полд\.?|утр[оа]|день|дня|веч\.?|ноч[ьи])/i,wide:/^([дп]п|полночь|полдень|утр[оа]|день|дня|вечера?|ноч[ьи])/i},gM={any:{am:/^дп/i,pm:/^пп/i,midnight:/^полн/i,noon:/^полд/i,morning:/^у/i,afternoon:/^д[ен]/i,evening:/^в/i,night:/^н/i}},vM={ordinalNumber:Tb({matchPattern:sM,parsePattern:oM,valueCallback:function(e){return parseInt(e,10)}}),era:mn({matchPatterns:aM,defaultMatchWidth:"wide",parsePatterns:cM,defaultParseWidth:"any"}),quarter:mn({matchPatterns:lM,defaultMatchWidth:"wide",parsePatterns:uM,defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:mn({matchPatterns:fM,defaultMatchWidth:"wide",parsePatterns:hM,defaultParseWidth:"any"}),day:mn({matchPatterns:dM,defaultMatchWidth:"wide",parsePatterns:mM,defaultParseWidth:"any"}),dayPeriod:mn({matchPatterns:pM,defaultMatchWidth:"wide",parsePatterns:gM,defaultParseWidth:"any"})};const yM=vM;var wM={code:"ru",formatDistance:F4,formatLong:H4,formatRelative:K4,localize:iM,match:yM,options:{weekStartsOn:1,firstWeekContainsDate:1}};const bM=wM,_M=()=>{const t=ut(null);let e=LO(bD,"posts");const n=XO(e,JO("createdAt","desc")),r=new Date,i=nN(n,s=>{let o=[];s.docs.forEach(a=>{let c=Number(a.data().createdAt.toDate()),l=M4(c,r,{locale:bM});o.push({...a.data(),id:a.id,createdAt:l})}),t.value=o});return F_(s=>{s(()=>i())}),{posts:t}},EM=t=>(Xf("data-v-79419c10"),t=t(),Jf(),t),TM={class:"homeview"},IM=EM(()=>ae("div",{class:"heading"},"Последние посты",-1)),kM={class:"container"},CM=Yt({__name:"HomeView",setup(t){const{posts:e}=_M();return(n,r)=>(Ye(),jt(ct,null,[ae("div",TM,[Ie(sC),IM,ae("div",kM,[Ie(yC,{posts:$e(e)},null,8,["posts"])])]),Ie(CC)],64))}});const SM=rs(CM,[["__scopeId","data-v-79419c10"]]),AM=()=>ri(()=>import("./AllPostsView-20d4426e.js"),["assets/AllPostsView-20d4426e.js","assets/Loading-de1bfe1d.js","assets/Loading-1df4c54e.css","assets/AllPostsView-e8d2b694.css"]),xM=()=>ri(()=>import("./CreatePostView-6922bd47.js"),["assets/CreatePostView-6922bd47.js","assets/getDocument-6b082c2b.js","assets/Input-0466daf4.js","assets/useStorage-2a32704d.js","assets/Loading-de1bfe1d.js","assets/Loading-1df4c54e.css","assets/getDocument-cff6a263.css","assets/CreatePostView-3fbde038.css"]),RM=()=>ri(()=>import("./SigninView-5afbd497.js"),["assets/SigninView-5afbd497.js","assets/Input-0466daf4.js","assets/SigninView-e5139451.css"]),OM=()=>ri(()=>import("./SignupView-f830a301.js"),["assets/SignupView-f830a301.js","assets/Input-0466daf4.js","assets/SignupView-dd6459e8.css"]),NM=()=>ri(()=>import("./PostView-5e6cedd4.js"),["assets/PostView-5e6cedd4.js","assets/useStorage-2a32704d.js","assets/Loading-de1bfe1d.js","assets/Loading-1df4c54e.css","assets/PostView-dca9716d.css"]),PM=()=>ri(()=>import("./DraftsView-e2b3dd75.js"),[]),DM=()=>ri(()=>import("./UpdatePostView-988fb10c.js"),["assets/UpdatePostView-988fb10c.js","assets/getDocument-6b082c2b.js","assets/Input-0466daf4.js","assets/useStorage-2a32704d.js","assets/Loading-de1bfe1d.js","assets/Loading-1df4c54e.css","assets/getDocument-cff6a263.css","assets/UpdatePostView-7f5a9a56.css"]),Xg=(t,e,n)=>{Yi.currentUser?n():n({name:"Signup"})},MM=[{path:"/",name:"Home",component:SM},{path:"/all-posts/:tag?",name:"AllPosts",component:AM},{path:"/create-post",name:"CreatePost",component:xM,beforeEnter:Xg},{path:"/signin",name:"Signin",component:RM},{path:"/signup",name:"Signup",component:OM},{path:"/post/:id",name:"Post",component:NM,props:!0},{path:"/drafts",name:"Drafts",component:PM},{path:"/update-post/:id",name:"UpdatePost",component:DM,props:!0,beforeEnter:Xg}],LM=Gk({history:lk(),routes:MM,scrollBehavior(){return{top:0,left:0,behavior:"smooth"}}});function Bd(t){return Uf()?(av(t),!0):!1}function Xi(t){return typeof t=="function"?t():$e(t)}const jd=typeof window<"u",Rl=()=>{},Sf=UM();function UM(){var t;return jd&&((t=window==null?void 0:window.navigator)==null?void 0:t.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent)}function FM(...t){if(t.length!==1)return _v(...t);const e=t[0];return typeof e=="function"?Hf(E_(()=>({get:e,set:Rl}))):ut(e)}function Ns(t){var e;const n=Xi(t);return(e=n==null?void 0:n.$el)!=null?e:n}const kb=jd?window:void 0;function mu(...t){let e,n,r,i;if(typeof t[0]=="string"||Array.isArray(t[0])?([n,r,i]=t,e=kb):[e,n,r,i]=t,!e)return Rl;Array.isArray(n)||(n=[n]),Array.isArray(r)||(r=[r]);const s=[],o=()=>{s.forEach(u=>u()),s.length=0},a=(u,f,h,d)=>(u.addEventListener(f,h,d),()=>u.removeEventListener(f,h,d)),c=sn(()=>[Ns(e),Xi(i)],([u,f])=>{o(),u&&s.push(...n.flatMap(h=>r.map(d=>a(u,h,d,f))))},{immediate:!0,flush:"post"}),l=()=>{c(),o()};return Bd(l),l}let Jg=!1;function $M(t,e,n={}){const{window:r=kb,ignore:i=[],capture:s=!0,detectIframe:o=!1}=n;if(!r)return;Sf&&!Jg&&(Jg=!0,Array.from(r.document.body.children).forEach(h=>h.addEventListener("click",Rl)));let a=!0;const c=h=>i.some(d=>{if(typeof d=="string")return Array.from(r.document.querySelectorAll(d)).some(g=>g===h.target||h.composedPath().includes(g));{const g=Ns(d);return g&&(h.target===g||h.composedPath().includes(g))}}),u=[mu(r,"click",h=>{const d=Ns(t);if(!(!d||d===h.target||h.composedPath().includes(d))){if(h.detail===0&&(a=!c(h)),!a){a=!0;return}e(h)}},{passive:!0,capture:s}),mu(r,"pointerdown",h=>{const d=Ns(t);d&&(a=!h.composedPath().includes(d)&&!c(h))},{passive:!0}),o&&mu(r,"blur",h=>{var d;const g=Ns(t);((d=r.document.activeElement)==null?void 0:d.tagName)==="IFRAME"&&!(g!=null&&g.contains(r.document.activeElement))&&e(h)})].filter(Boolean);return()=>u.forEach(h=>h())}const VM=Yt({name:"OnClickOutside",props:["as","options"],emits:["trigger"],setup(t,{slots:e,emit:n}){const r=ut();return $M(r,i=>{n("trigger",i)},t.options),()=>{if(e.default)return ts(t.as||"div",{ref:r},e.default())}}});function BM(t){var e;const n=Xi(t);return(e=n==null?void 0:n.$el)!=null?e:n}const jM=jd?window:void 0;function HM(...t){let e,n,r,i;if(typeof t[0]=="string"||Array.isArray(t[0])?([n,r,i]=t,e=jM):[e,n,r,i]=t,!e)return Rl;Array.isArray(n)||(n=[n]),Array.isArray(r)||(r=[r]);const s=[],o=()=>{s.forEach(u=>u()),s.length=0},a=(u,f,h,d)=>(u.addEventListener(f,h,d),()=>u.removeEventListener(f,h,d)),c=sn(()=>[BM(e),Xi(i)],([u,f])=>{o(),u&&s.push(...n.flatMap(h=>r.map(d=>a(u,h,d,f))))},{immediate:!0,flush:"post"}),l=()=>{c(),o()};return Bd(l),l}function Cb(t){const e=window.getComputedStyle(t);if(e.overflowX==="scroll"||e.overflowY==="scroll"||e.overflowX==="auto"&&t.clientHeight<t.scrollHeight||e.overflowY==="auto"&&t.clientWidth<t.scrollWidth)return!0;{const n=t.parentNode;return!n||n.tagName==="BODY"?!1:Cb(n)}}function zM(t){const e=t||window.event,n=e.target;return Cb(n)?!1:e.touches.length>1?!0:(e.preventDefault&&e.preventDefault(),!1)}function WM(t,e=!1){const n=ut(e);let r=null,i;sn(FM(t),a=>{if(a){const c=a;i=c.style.overflow,n.value&&(c.style.overflow="hidden")}},{immediate:!0});const s=()=>{const a=Xi(t);!a||n.value||(Sf&&(r=HM(a,"touchmove",c=>{zM(c)},{passive:!1})),a.style.overflow="hidden",n.value=!0)},o=()=>{const a=Xi(t);!a||!n.value||(Sf&&(r==null||r()),a.style.overflow=i,n.value=!1)};return Bd(o),ke({get(){return n.value},set(a){a?s():o()}})}function qM(){let t=!1;const e=ut(!1);return(n,r)=>{if(e.value=r.value,t)return;t=!0;const i=WM(n,r.value);sn(e,s=>i.value=s)}}qM();const GM=yT("user",()=>{const t=ut(Yi.currentUser);return WN(Yi,e=>{t.value=e}),{user:t}}),Af=ut(null),xf=ut(null),KM=async()=>{try{Af.value=null,xf.value=!0,await qN(Yi)}catch(t){Af.value=t.message,xf.value=!1}},YM=()=>({logout:KM,error:Af,isPending:xf}),Sb=t=>(Xf("data-v-69064d4f"),t=t(),Jf(),t),QM={class:"nav"},XM={class:"btns"},JM={key:1,class:"error"},ZM=["src"],eL={key:1},tL={key:2},nL={class:"dropdown"},rL={class:"li-info"},iL={class:"email"},sL=Sb(()=>ae("li",{class:"li-myposts",tabindex:"0"},"Мои посты",-1)),oL=Sb(()=>ae("p",null,"Выйти",-1)),aL=[oL],cL=Yt({__name:"Nav",setup(t){const{logout:e,error:n}=YM(),r=ut(!1),i=GM(),s=ke(()=>i.user),o=ut(),a=ut(!1),c=ke(()=>a.value?["fas","x"]:["fas","bars"]),l=()=>{a.value=!a.value,o.value.classList.toggle("active")},u=async()=>{r.value=!1,await e()};return(f,h)=>{const d=Zs("router-link"),g=Zs("font-awesome-icon");return Ye(),jt("div",QM,[ae("nav",null,[Ie(d,{to:{name:"Home"},type:"logo",class:"logo"},{default:Dt(()=>[Ct("set-web")]),_:1}),Ie(g,{class:"icon",icon:$e(c),onClick:l},null,8,["icon"]),ae("div",{class:"wrapper",ref_key:"wrapper",ref:o},[ae("ul",null,[Ie(d,{"outer-link":"",class:"link",to:"/all-posts"},{default:Dt(()=>[Ct("Все посты")]),_:1}),Ie(d,{class:"link",to:"#"},{default:Dt(()=>[Ct("Поиск")]),_:1})]),ae("div",XM,[$e(s)?(Ye(),ar(d,{key:0,class:"btn create-btn",to:{name:"CreatePost"}},{default:Dt(()=>[Ct("Создать пост")]),_:1})):Is("",!0),$e(n)?(Ye(),jt("div",JM,un($e(n)),1)):Is("",!0),$e(s)?Is("",!0):(Ye(),ar(d,{key:2,class:"btn login-btn",to:"/signup"},{default:Dt(()=>[Ct("Войти")]),_:1})),$e(s)?(Ye(),ar($e(VM),{key:3,tabindex:"0",class:"profile",onTrigger:h[1]||(h[1]=y=>r.value=!1)},{default:Dt(()=>{var y,_;return[ae("div",{class:"info",onClick:h[0]||(h[0]=w=>r.value=!r.value)},[$e(s).photoURL?(Ye(),jt("img",{key:0,src:$e(s).photoURL,alt:""},null,8,ZM)):$e(s).photoURL?(Ye(),jt("p",tL,un((_=$e(s).email)==null?void 0:_.slice(0,1).toUpperCase()),1)):(Ye(),jt("p",eL,un((y=$e(s).displayName)==null?void 0:y.slice(0,1).toUpperCase()),1))]),Ie(ah,{name:"dropdown-animation"},{default:Dt(()=>[X_(ae("div",nL,[ae("ul",null,[ae("li",rL,[ae("div",null,un($e(s).displayName),1),ae("p",iL,un($e(s).email),1)]),ae("li",null,[Ie(d,{to:"/drafts",tabindex:"0"},{default:Dt(()=>[Ct("Черновик")]),_:1})]),sL,ae("li",{role:"button",class:"li-logout",onClick:u,tabindex:"0"},aL)])],512),[[aT,r.value]])]),_:1})]}),_:1})):Is("",!0)])],512)])])}}});const lL=rs(cL,[["__scopeId","data-v-69064d4f"]]),uL={class:"app"},fL=Yt({__name:"App",setup(t){const e=Yk(),n=ke(()=>!(e.name=="CreatePost"||e.name=="UpdatePost"));return ke(()=>!(e.name=="CreatePost"||e.name=="UpdatePost")),(r,i)=>{const s=Zs("router-view");return Ye(),jt(ct,null,[$e(n)?(Ye(),ar(lL,{key:0})):Is("",!0),ae("main",uL,[Ie(s)])],64)}}});const hL=rs(fL,[["__scopeId","data-v-dc9d94e0"]]);XI.add(E2,I2,m2,D2,C2,_2,O2,P2,L2,T2,R2,S2,k2,F2,x2,j2,w2,g2,U2,$2,N2,B2,y2,A2,p2,b2,v2,M2);const dL=dT();uT(hL).use(dL).component("font-awesome-icon",d2).use(LM).mount("#app");export{UO as $,pL as A,Nf as B,OL as C,Yi as D,bL as E,ct as F,un as G,RL as H,NL as I,PL as J,mL as K,FL as L,An as M,$L as N,Uv as O,gL as P,vL as Q,aT as R,M4 as S,ah as T,bM as U,VM as V,Je as W,_L as X,yL as Y,xL as Z,yC as _,jt as a,nN as a0,F_ as a1,bD as a2,Nc as a3,ts as a4,es as a5,Pi as a6,Yf as a7,E_ as a8,Mc as a9,y_ as aa,sn as ab,j_ as ac,H_ as ad,EL as ae,IL as af,LO as ag,AL as ah,kL as ai,SL as aj,CL as ak,UL as al,VL as am,DL as an,ML as ao,mD as ap,LL as aq,ae as b,ke as c,Yt as d,Is as e,Ie as f,_M as g,ar as h,Yk as i,LM as j,Zs as k,Jf as l,CC as m,rs as n,Ye as o,Xf as p,Ct as q,ut as r,bE as s,Oc as t,$e as u,wL as v,X_ as w,GM as x,qe as y,Dt as z};
