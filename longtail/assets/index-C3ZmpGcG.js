(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const il="180",Nu=0,Vl=1,Fu=2,Mh=1,Ou=2,In=3,Gn=0,ze=1,We=2,On=0,Mi=1,Hs=2,Wl=3,Xl=4,zu=5,pi=100,Bu=101,ku=102,Hu=103,Gu=104,Vu=200,Wu=201,Xu=202,qu=203,ra=204,oa=205,Yu=206,Ku=207,$u=208,Ju=209,Zu=210,ju=211,Qu=212,tf=213,ef=214,aa=0,la=1,ca=2,ts=3,ha=4,ua=5,fa=6,da=7,Sh=0,nf=1,sf=2,ei=0,yh=1,Eh=2,bh=3,sl=4,wh=5,Th=6,Ah=7,Rh=300,es=301,ns=302,pa=303,ma=304,Qr=306,is=1e3,vi=1001,ga=1002,Je=1003,rf=1004,ir=1005,en=1006,go=1007,Nn=1008,yn=1009,Ch=1010,Ph=1011,Gs=1012,rl=1013,bi=1014,Mn=1015,zn=1016,ol=1017,al=1018,Vs=1020,Lh=35902,Dh=35899,Ih=1021,Uh=1022,nn=1023,Ws=1026,Xs=1027,ll=1028,cl=1029,Nh=1030,hl=1031,ul=1033,Fr=33776,Or=33777,zr=33778,Br=33779,va=35840,xa=35841,_a=35842,Ma=35843,Sa=36196,ya=37492,Ea=37496,ba=37808,wa=37809,Ta=37810,Aa=37811,Ra=37812,Ca=37813,Pa=37814,La=37815,Da=37816,Ia=37817,Ua=37818,Na=37819,Fa=37820,Oa=37821,za=36492,Ba=36494,ka=36495,Ha=36283,Ga=36284,Va=36285,Wa=36286,of=3200,af=3201,Fh=0,lf=1,ti="",ye="srgb",ss="srgb-linear",Wr="linear",oe="srgb",Di=7680,ql=519,cf=512,hf=513,uf=514,Oh=515,ff=516,df=517,pf=518,mf=519,Yl=35044,fl=35048,Kl="300 es",Sn=2e3,Xr=2001;class ds{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const s=n[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const Ce=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let $l=1234567;const Ds=Math.PI/180,rs=180/Math.PI;function Pi(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ce[i&255]+Ce[i>>8&255]+Ce[i>>16&255]+Ce[i>>24&255]+"-"+Ce[t&255]+Ce[t>>8&255]+"-"+Ce[t>>16&15|64]+Ce[t>>24&255]+"-"+Ce[e&63|128]+Ce[e>>8&255]+"-"+Ce[e>>16&255]+Ce[e>>24&255]+Ce[n&255]+Ce[n>>8&255]+Ce[n>>16&255]+Ce[n>>24&255]).toLowerCase()}function Qt(i,t,e){return Math.max(t,Math.min(e,i))}function dl(i,t){return(i%t+t)%t}function gf(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function vf(i,t,e){return i!==t?(e-i)/(t-i):0}function Is(i,t,e){return(1-e)*i+e*t}function xf(i,t,e,n){return Is(i,t,1-Math.exp(-e*n))}function _f(i,t=1){return t-Math.abs(dl(i,t*2)-t)}function Mf(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function Sf(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function yf(i,t){return i+Math.floor(Math.random()*(t-i+1))}function Ef(i,t){return i+Math.random()*(t-i)}function bf(i){return i*(.5-Math.random())}function wf(i){i!==void 0&&($l=i);let t=$l+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Tf(i){return i*Ds}function Af(i){return i*rs}function Rf(i){return(i&i-1)===0&&i!==0}function Cf(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Pf(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Lf(i,t,e,n,s){const r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),c=r((t+n)/2),h=o((t+n)/2),u=r((t-n)/2),f=o((t-n)/2),d=r((n-t)/2),g=o((n-t)/2);switch(s){case"XYX":i.set(a*h,l*u,l*f,a*c);break;case"YZY":i.set(l*f,a*h,l*u,a*c);break;case"ZXZ":i.set(l*u,l*f,a*h,a*c);break;case"XZX":i.set(a*h,l*g,l*d,a*c);break;case"YXY":i.set(l*d,a*h,l*g,a*c);break;case"ZYZ":i.set(l*g,l*d,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Ki(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Ie(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const vo={DEG2RAD:Ds,RAD2DEG:rs,generateUUID:Pi,clamp:Qt,euclideanModulo:dl,mapLinear:gf,inverseLerp:vf,lerp:Is,damp:xf,pingpong:_f,smoothstep:Mf,smootherstep:Sf,randInt:yf,randFloat:Ef,randFloatSpread:bf,seededRandom:wf,degToRad:Tf,radToDeg:Af,isPowerOfTwo:Rf,ceilPowerOfTwo:Cf,floorPowerOfTwo:Pf,setQuaternionFromProperEuler:Lf,normalize:Ie,denormalize:Ki};class rt{constructor(t=0,e=0){rt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Qt(this.x,t.x,e.x),this.y=Qt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Qt(this.x,t,e),this.y=Qt(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Qt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Qt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class gn{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3];const f=r[o+0],d=r[o+1],g=r[o+2],x=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=f,t[e+1]=d,t[e+2]=g,t[e+3]=x;return}if(u!==x||l!==f||c!==d||h!==g){let m=1-a;const p=l*f+c*d+h*g+u*x,S=p>=0?1:-1,_=1-p*p;if(_>Number.EPSILON){const T=Math.sqrt(_),A=Math.atan2(T,p*S);m=Math.sin(m*A)/T,a=Math.sin(a*A)/T}const v=a*S;if(l=l*m+f*v,c=c*m+d*v,h=h*m+g*v,u=u*m+x*v,m===1-a){const T=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=T,c*=T,h*=T,u*=T}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,o){const a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[o],f=r[o+1],d=r[o+2],g=r[o+3];return t[e]=a*g+h*u+l*d-c*f,t[e+1]=l*g+h*f+c*u-a*d,t[e+2]=c*g+h*d+a*f-l*u,t[e+3]=h*g-a*u-l*f-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),u=a(r/2),f=l(n/2),d=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=f*h*u+c*d*g,this._y=c*d*u-f*h*g,this._z=c*h*g+f*d*u,this._w=c*h*u-f*d*g;break;case"YXZ":this._x=f*h*u+c*d*g,this._y=c*d*u-f*h*g,this._z=c*h*g-f*d*u,this._w=c*h*u+f*d*g;break;case"ZXY":this._x=f*h*u-c*d*g,this._y=c*d*u+f*h*g,this._z=c*h*g+f*d*u,this._w=c*h*u-f*d*g;break;case"ZYX":this._x=f*h*u-c*d*g,this._y=c*d*u+f*h*g,this._z=c*h*g-f*d*u,this._w=c*h*u+f*d*g;break;case"YZX":this._x=f*h*u+c*d*g,this._y=c*d*u+f*h*g,this._z=c*h*g-f*d*u,this._w=c*h*u-f*d*g;break;case"XZY":this._x=f*h*u-c*d*g,this._y=c*d*u-f*h*g,this._z=c*h*g+f*d*u,this._w=c*h*u+f*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],u=e[10],f=n+a+u;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-l)*d,this._y=(r-c)*d,this._z=(o-s)*d}else if(n>a&&n>u){const d=2*Math.sqrt(1+n-a-u);this._w=(h-l)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+c)/d}else if(a>u){const d=2*Math.sqrt(1+a-n-u);this._w=(r-c)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(l+h)/d}else{const d=2*Math.sqrt(1+u-n-a);this._w=(o-s)/d,this._x=(r+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Qt(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-s*a,this._w=o*h-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,o=this._w;let a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const d=1-e;return this._w=d*o+e*this._w,this._x=d*n+e*this._x,this._y=d*s+e*this._y,this._z=d*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-e)*h)/c,f=Math.sin(e*h)/c;return this._w=o*u+this._w*f,this._x=n*u+this._x*f,this._y=s*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class L{constructor(t=0,e=0,n=0){L.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Jl.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Jl.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*n),h=2*(a*e-r*s),u=2*(r*n-o*e);return this.x=e+l*c+o*u-a*h,this.y=n+l*h+a*c-r*u,this.z=s+l*u+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Qt(this.x,t.x,e.x),this.y=Qt(this.y,t.y,e.y),this.z=Qt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Qt(this.x,t,e),this.y=Qt(this.y,t,e),this.z=Qt(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Qt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return xo.copy(this).projectOnVector(t),this.sub(xo)}reflect(t){return this.sub(xo.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Qt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const xo=new L,Jl=new gn;class Zt{constructor(t,e,n,s,r,o,a,l,c){Zt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c)}set(t,e,n,s,r,o,a,l,c){const h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],f=n[2],d=n[5],g=n[8],x=s[0],m=s[3],p=s[6],S=s[1],_=s[4],v=s[7],T=s[2],A=s[5],C=s[8];return r[0]=o*x+a*S+l*T,r[3]=o*m+a*_+l*A,r[6]=o*p+a*v+l*C,r[1]=c*x+h*S+u*T,r[4]=c*m+h*_+u*A,r[7]=c*p+h*v+u*C,r[2]=f*x+d*S+g*T,r[5]=f*m+d*_+g*A,r[8]=f*p+d*v+g*C,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*r*h+n*a*l+s*r*c-s*o*l}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=h*o-a*c,f=a*l-h*r,d=c*r-o*l,g=e*u+n*f+s*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/g;return t[0]=u*x,t[1]=(s*c-h*n)*x,t[2]=(a*n-s*o)*x,t[3]=f*x,t[4]=(h*e-s*l)*x,t[5]=(s*r-a*e)*x,t[6]=d*x,t[7]=(n*l-c*e)*x,t[8]=(o*e-n*r)*x,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(_o.makeScale(t,e)),this}rotate(t){return this.premultiply(_o.makeRotation(-t)),this}translate(t,e){return this.premultiply(_o.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const _o=new Zt;function zh(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function qs(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Df(){const i=qs("canvas");return i.style.display="block",i}const Zl={};function Ys(i){i in Zl||(Zl[i]=!0,console.warn(i))}function If(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}const jl=new Zt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ql=new Zt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Uf(){const i={enabled:!0,workingColorSpace:ss,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===oe&&(s.r=Bn(s.r),s.g=Bn(s.g),s.b=Bn(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===oe&&(s.r=ji(s.r),s.g=ji(s.g),s.b=ji(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===ti?Wr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Ys("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Ys("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[ss]:{primaries:t,whitePoint:n,transfer:Wr,toXYZ:jl,fromXYZ:Ql,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:ye},outputColorSpaceConfig:{drawingBufferColorSpace:ye}},[ye]:{primaries:t,whitePoint:n,transfer:oe,toXYZ:jl,fromXYZ:Ql,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:ye}}}),i}const ne=Uf();function Bn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ji(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Ii;class Nf{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Ii===void 0&&(Ii=qs("canvas")),Ii.width=t.width,Ii.height=t.height;const s=Ii.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=Ii}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=qs("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Bn(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Bn(e[n]/255)*255):e[n]=Bn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Ff=0;class pl{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Ff++}),this.uuid=Pi(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Mo(s[o].image)):r.push(Mo(s[o]))}else r=Mo(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function Mo(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Nf.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Of=0;const So=new L;class Re extends ds{constructor(t=Re.DEFAULT_IMAGE,e=Re.DEFAULT_MAPPING,n=vi,s=vi,r=en,o=Nn,a=nn,l=yn,c=Re.DEFAULT_ANISOTROPY,h=ti){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Of++}),this.uuid=Pi(),this.name="",this.source=new pl(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new rt(0,0),this.repeat=new rt(1,1),this.center=new rt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Zt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(So).x}get height(){return this.source.getSize(So).y}get depth(){return this.source.getSize(So).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Rh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case is:t.x=t.x-Math.floor(t.x);break;case vi:t.x=t.x<0?0:1;break;case ga:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case is:t.y=t.y-Math.floor(t.y);break;case vi:t.y=t.y<0?0:1;break;case ga:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Re.DEFAULT_IMAGE=null;Re.DEFAULT_MAPPING=Rh;Re.DEFAULT_ANISOTROPY=1;class se{constructor(t=0,e=0,n=0,s=1){se.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const l=t.elements,c=l[0],h=l[4],u=l[8],f=l[1],d=l[5],g=l[9],x=l[2],m=l[6],p=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+x)<.1&&Math.abs(g+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const _=(c+1)/2,v=(d+1)/2,T=(p+1)/2,A=(h+f)/4,C=(u+x)/4,P=(g+m)/4;return _>v&&_>T?_<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(_),s=A/n,r=C/n):v>T?v<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),n=A/s,r=P/s):T<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(T),n=C/r,s=P/r),this.set(n,s,r,e),this}let S=Math.sqrt((m-g)*(m-g)+(u-x)*(u-x)+(f-h)*(f-h));return Math.abs(S)<.001&&(S=1),this.x=(m-g)/S,this.y=(u-x)/S,this.z=(f-h)/S,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Qt(this.x,t.x,e.x),this.y=Qt(this.y,t.y,e.y),this.z=Qt(this.z,t.z,e.z),this.w=Qt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Qt(this.x,t,e),this.y=Qt(this.y,t,e),this.z=Qt(this.z,t,e),this.w=Qt(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Qt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class zf extends ds{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:en,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new se(0,0,t,e),this.scissorTest=!1,this.viewport=new se(0,0,t,e);const s={width:t,height:e,depth:n.depth},r=new Re(s);this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(t={}){const e={minFilter:en,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const s=Object.assign({},t.textures[e].image);this.textures[e].source=new pl(s)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class sn extends zf{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Bh extends Re{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Je,this.minFilter=Je,this.wrapR=vi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Bf extends Re{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Je,this.minFilter=Je,this.wrapR=vi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Vn{constructor(t=new L(1/0,1/0,1/0),e=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(cn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(cn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=cn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,cn):cn.fromBufferAttribute(r,o),cn.applyMatrix4(t.matrixWorld),this.expandByPoint(cn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),sr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),sr.copy(n.boundingBox)),sr.applyMatrix4(t.matrixWorld),this.union(sr)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,cn),cn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ms),rr.subVectors(this.max,Ms),Ui.subVectors(t.a,Ms),Ni.subVectors(t.b,Ms),Fi.subVectors(t.c,Ms),qn.subVectors(Ni,Ui),Yn.subVectors(Fi,Ni),oi.subVectors(Ui,Fi);let e=[0,-qn.z,qn.y,0,-Yn.z,Yn.y,0,-oi.z,oi.y,qn.z,0,-qn.x,Yn.z,0,-Yn.x,oi.z,0,-oi.x,-qn.y,qn.x,0,-Yn.y,Yn.x,0,-oi.y,oi.x,0];return!yo(e,Ui,Ni,Fi,rr)||(e=[1,0,0,0,1,0,0,0,1],!yo(e,Ui,Ni,Fi,rr))?!1:(or.crossVectors(qn,Yn),e=[or.x,or.y,or.z],yo(e,Ui,Ni,Fi,rr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,cn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(cn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(An[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),An[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),An[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),An[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),An[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),An[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),An[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),An[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(An),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const An=[new L,new L,new L,new L,new L,new L,new L,new L],cn=new L,sr=new Vn,Ui=new L,Ni=new L,Fi=new L,qn=new L,Yn=new L,oi=new L,Ms=new L,rr=new L,or=new L,ai=new L;function yo(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){ai.fromArray(i,r);const a=s.x*Math.abs(ai.x)+s.y*Math.abs(ai.y)+s.z*Math.abs(ai.z),l=t.dot(ai),c=e.dot(ai),h=n.dot(ai);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const kf=new Vn,Ss=new L,Eo=new L;class ps{constructor(t=new L,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):kf.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ss.subVectors(t,this.center);const e=Ss.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Ss,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Eo.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ss.copy(t.center).add(Eo)),this.expandByPoint(Ss.copy(t.center).sub(Eo))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const Rn=new L,bo=new L,ar=new L,Kn=new L,wo=new L,lr=new L,To=new L;class kh{constructor(t=new L,e=new L(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Rn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Rn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Rn.copy(this.origin).addScaledVector(this.direction,e),Rn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){bo.copy(t).add(e).multiplyScalar(.5),ar.copy(e).sub(t).normalize(),Kn.copy(this.origin).sub(bo);const r=t.distanceTo(e)*.5,o=-this.direction.dot(ar),a=Kn.dot(this.direction),l=-Kn.dot(ar),c=Kn.lengthSq(),h=Math.abs(1-o*o);let u,f,d,g;if(h>0)if(u=o*l-a,f=o*a-l,g=r*h,u>=0)if(f>=-g)if(f<=g){const x=1/h;u*=x,f*=x,d=u*(u+o*f+2*a)+f*(o*u+f+2*l)+c}else f=r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;else f=-r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;else f<=-g?(u=Math.max(0,-(-o*r+a)),f=u>0?-r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c):f<=g?(u=0,f=Math.min(Math.max(-r,-l),r),d=f*(f+2*l)+c):(u=Math.max(0,-(o*r+a)),f=u>0?r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c);else f=o>0?-r:r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(bo).addScaledVector(ar,f),d}intersectSphere(t,e){Rn.subVectors(t.center,this.origin);const n=Rn.dot(this.direction),s=Rn.dot(Rn)-n*n,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,s=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,s=(t.min.x-f.x)*c),h>=0?(r=(t.min.y-f.y)*h,o=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,o=(t.min.y-f.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(t.min.z-f.z)*u,l=(t.max.z-f.z)*u):(a=(t.max.z-f.z)*u,l=(t.min.z-f.z)*u),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Rn)!==null}intersectTriangle(t,e,n,s,r){wo.subVectors(e,t),lr.subVectors(n,t),To.crossVectors(wo,lr);let o=this.direction.dot(To),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Kn.subVectors(this.origin,t);const l=a*this.direction.dot(lr.crossVectors(Kn,lr));if(l<0)return null;const c=a*this.direction.dot(wo.cross(Kn));if(c<0||l+c>o)return null;const h=-a*Kn.dot(To);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class te{constructor(t,e,n,s,r,o,a,l,c,h,u,f,d,g,x,m){te.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c,h,u,f,d,g,x,m)}set(t,e,n,s,r,o,a,l,c,h,u,f,d,g,x,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=f,p[3]=d,p[7]=g,p[11]=x,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new te().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/Oi.setFromMatrixColumn(t,0).length(),r=1/Oi.setFromMatrixColumn(t,1).length(),o=1/Oi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const f=o*h,d=o*u,g=a*h,x=a*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=d+g*c,e[5]=f-x*c,e[9]=-a*l,e[2]=x-f*c,e[6]=g+d*c,e[10]=o*l}else if(t.order==="YXZ"){const f=l*h,d=l*u,g=c*h,x=c*u;e[0]=f+x*a,e[4]=g*a-d,e[8]=o*c,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=d*a-g,e[6]=x+f*a,e[10]=o*l}else if(t.order==="ZXY"){const f=l*h,d=l*u,g=c*h,x=c*u;e[0]=f-x*a,e[4]=-o*u,e[8]=g+d*a,e[1]=d+g*a,e[5]=o*h,e[9]=x-f*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const f=o*h,d=o*u,g=a*h,x=a*u;e[0]=l*h,e[4]=g*c-d,e[8]=f*c+x,e[1]=l*u,e[5]=x*c+f,e[9]=d*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const f=o*l,d=o*c,g=a*l,x=a*c;e[0]=l*h,e[4]=x-f*u,e[8]=g*u+d,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=d*u+g,e[10]=f-x*u}else if(t.order==="XZY"){const f=o*l,d=o*c,g=a*l,x=a*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=f*u+x,e[5]=o*h,e[9]=d*u-g,e[2]=g*u-d,e[6]=a*h,e[10]=x*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Hf,t,Gf)}lookAt(t,e,n){const s=this.elements;return Ke.subVectors(t,e),Ke.lengthSq()===0&&(Ke.z=1),Ke.normalize(),$n.crossVectors(n,Ke),$n.lengthSq()===0&&(Math.abs(n.z)===1?Ke.x+=1e-4:Ke.z+=1e-4,Ke.normalize(),$n.crossVectors(n,Ke)),$n.normalize(),cr.crossVectors(Ke,$n),s[0]=$n.x,s[4]=cr.x,s[8]=Ke.x,s[1]=$n.y,s[5]=cr.y,s[9]=Ke.y,s[2]=$n.z,s[6]=cr.z,s[10]=Ke.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],f=n[9],d=n[13],g=n[2],x=n[6],m=n[10],p=n[14],S=n[3],_=n[7],v=n[11],T=n[15],A=s[0],C=s[4],P=s[8],E=s[12],y=s[1],D=s[5],I=s[9],O=s[13],B=s[2],H=s[6],X=s[10],tt=s[14],q=s[3],ct=s[7],st=s[11],xt=s[15];return r[0]=o*A+a*y+l*B+c*q,r[4]=o*C+a*D+l*H+c*ct,r[8]=o*P+a*I+l*X+c*st,r[12]=o*E+a*O+l*tt+c*xt,r[1]=h*A+u*y+f*B+d*q,r[5]=h*C+u*D+f*H+d*ct,r[9]=h*P+u*I+f*X+d*st,r[13]=h*E+u*O+f*tt+d*xt,r[2]=g*A+x*y+m*B+p*q,r[6]=g*C+x*D+m*H+p*ct,r[10]=g*P+x*I+m*X+p*st,r[14]=g*E+x*O+m*tt+p*xt,r[3]=S*A+_*y+v*B+T*q,r[7]=S*C+_*D+v*H+T*ct,r[11]=S*P+_*I+v*X+T*st,r[15]=S*E+_*O+v*tt+T*xt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],u=t[6],f=t[10],d=t[14],g=t[3],x=t[7],m=t[11],p=t[15];return g*(+r*l*u-s*c*u-r*a*f+n*c*f+s*a*d-n*l*d)+x*(+e*l*d-e*c*f+r*o*f-s*o*d+s*c*h-r*l*h)+m*(+e*c*u-e*a*d-r*o*u+n*o*d+r*a*h-n*c*h)+p*(-s*a*h-e*l*u+e*a*f+s*o*u-n*o*f+n*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=t[9],f=t[10],d=t[11],g=t[12],x=t[13],m=t[14],p=t[15],S=u*m*c-x*f*c+x*l*d-a*m*d-u*l*p+a*f*p,_=g*f*c-h*m*c-g*l*d+o*m*d+h*l*p-o*f*p,v=h*x*c-g*u*c+g*a*d-o*x*d-h*a*p+o*u*p,T=g*u*l-h*x*l-g*a*f+o*x*f+h*a*m-o*u*m,A=e*S+n*_+s*v+r*T;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/A;return t[0]=S*C,t[1]=(x*f*r-u*m*r-x*s*d+n*m*d+u*s*p-n*f*p)*C,t[2]=(a*m*r-x*l*r+x*s*c-n*m*c-a*s*p+n*l*p)*C,t[3]=(u*l*r-a*f*r-u*s*c+n*f*c+a*s*d-n*l*d)*C,t[4]=_*C,t[5]=(h*m*r-g*f*r+g*s*d-e*m*d-h*s*p+e*f*p)*C,t[6]=(g*l*r-o*m*r-g*s*c+e*m*c+o*s*p-e*l*p)*C,t[7]=(o*f*r-h*l*r+h*s*c-e*f*c-o*s*d+e*l*d)*C,t[8]=v*C,t[9]=(g*u*r-h*x*r-g*n*d+e*x*d+h*n*p-e*u*p)*C,t[10]=(o*x*r-g*a*r+g*n*c-e*x*c-o*n*p+e*a*p)*C,t[11]=(h*a*r-o*u*r-h*n*c+e*u*c+o*n*d-e*a*d)*C,t[12]=T*C,t[13]=(h*x*s-g*u*s+g*n*f-e*x*f-h*n*m+e*u*m)*C,t[14]=(g*a*s-o*x*s-g*n*l+e*x*l+o*n*m-e*a*m)*C,t[15]=(o*u*s-h*a*s+h*n*l-e*u*l-o*n*f+e*a*f)*C,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,u=a+a,f=r*c,d=r*h,g=r*u,x=o*h,m=o*u,p=a*u,S=l*c,_=l*h,v=l*u,T=n.x,A=n.y,C=n.z;return s[0]=(1-(x+p))*T,s[1]=(d+v)*T,s[2]=(g-_)*T,s[3]=0,s[4]=(d-v)*A,s[5]=(1-(f+p))*A,s[6]=(m+S)*A,s[7]=0,s[8]=(g+_)*C,s[9]=(m-S)*C,s[10]=(1-(f+x))*C,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=Oi.set(s[0],s[1],s[2]).length();const o=Oi.set(s[4],s[5],s[6]).length(),a=Oi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],hn.copy(this);const c=1/r,h=1/o,u=1/a;return hn.elements[0]*=c,hn.elements[1]*=c,hn.elements[2]*=c,hn.elements[4]*=h,hn.elements[5]*=h,hn.elements[6]*=h,hn.elements[8]*=u,hn.elements[9]*=u,hn.elements[10]*=u,e.setFromRotationMatrix(hn),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=Sn,l=!1){const c=this.elements,h=2*r/(e-t),u=2*r/(n-s),f=(e+t)/(e-t),d=(n+s)/(n-s);let g,x;if(l)g=r/(o-r),x=o*r/(o-r);else if(a===Sn)g=-(o+r)/(o-r),x=-2*o*r/(o-r);else if(a===Xr)g=-o/(o-r),x=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=u,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=Sn,l=!1){const c=this.elements,h=2/(e-t),u=2/(n-s),f=-(e+t)/(e-t),d=-(n+s)/(n-s);let g,x;if(l)g=1/(o-r),x=o/(o-r);else if(a===Sn)g=-2/(o-r),x=-(o+r)/(o-r);else if(a===Xr)g=-1/(o-r),x=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=u,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=g,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Oi=new L,hn=new te,Hf=new L(0,0,0),Gf=new L(1,1,1),$n=new L,cr=new L,Ke=new L,tc=new te,ec=new gn;class an{constructor(t=0,e=0,n=0,s=an.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],u=s[2],f=s[6],d=s[10];switch(e){case"XYZ":this._y=Math.asin(Qt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Qt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Qt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Qt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Qt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-Qt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return tc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(tc,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return ec.setFromEuler(this),this.setFromQuaternion(ec,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}an.DEFAULT_ORDER="XYZ";class Hh{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Vf=0;const nc=new L,zi=new gn,Cn=new te,hr=new L,ys=new L,Wf=new L,Xf=new gn,ic=new L(1,0,0),sc=new L(0,1,0),rc=new L(0,0,1),oc={type:"added"},qf={type:"removed"},Bi={type:"childadded",child:null},Ao={type:"childremoved",child:null};class de extends ds{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Vf++}),this.uuid=Pi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=de.DEFAULT_UP.clone();const t=new L,e=new an,n=new gn,s=new L(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new te},normalMatrix:{value:new Zt}}),this.matrix=new te,this.matrixWorld=new te,this.matrixAutoUpdate=de.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=de.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Hh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return zi.setFromAxisAngle(t,e),this.quaternion.multiply(zi),this}rotateOnWorldAxis(t,e){return zi.setFromAxisAngle(t,e),this.quaternion.premultiply(zi),this}rotateX(t){return this.rotateOnAxis(ic,t)}rotateY(t){return this.rotateOnAxis(sc,t)}rotateZ(t){return this.rotateOnAxis(rc,t)}translateOnAxis(t,e){return nc.copy(t).applyQuaternion(this.quaternion),this.position.add(nc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(ic,t)}translateY(t){return this.translateOnAxis(sc,t)}translateZ(t){return this.translateOnAxis(rc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Cn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?hr.copy(t):hr.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),ys.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Cn.lookAt(ys,hr,this.up):Cn.lookAt(hr,ys,this.up),this.quaternion.setFromRotationMatrix(Cn),s&&(Cn.extractRotation(s.matrixWorld),zi.setFromRotationMatrix(Cn),this.quaternion.premultiply(zi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(oc),Bi.child=t,this.dispatchEvent(Bi),Bi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(qf),Ao.child=t,this.dispatchEvent(Ao),Ao.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Cn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Cn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Cn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(oc),Bi.child=t,this.dispatchEvent(Bi),Bi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ys,t,Wf),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ys,Xf,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),u=o(t.shapes),f=o(t.skeletons),d=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}de.DEFAULT_UP=new L(0,1,0);de.DEFAULT_MATRIX_AUTO_UPDATE=!0;de.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const un=new L,Pn=new L,Ro=new L,Ln=new L,ki=new L,Hi=new L,ac=new L,Co=new L,Po=new L,Lo=new L,Do=new se,Io=new se,Uo=new se;class fn{constructor(t=new L,e=new L,n=new L){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),un.subVectors(t,e),s.cross(un);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){un.subVectors(s,e),Pn.subVectors(n,e),Ro.subVectors(t,e);const o=un.dot(un),a=un.dot(Pn),l=un.dot(Ro),c=Pn.dot(Pn),h=Pn.dot(Ro),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;const f=1/u,d=(c*l-a*h)*f,g=(o*h-a*l)*f;return r.set(1-d-g,g,d)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Ln)===null?!1:Ln.x>=0&&Ln.y>=0&&Ln.x+Ln.y<=1}static getInterpolation(t,e,n,s,r,o,a,l){return this.getBarycoord(t,e,n,s,Ln)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Ln.x),l.addScaledVector(o,Ln.y),l.addScaledVector(a,Ln.z),l)}static getInterpolatedAttribute(t,e,n,s,r,o){return Do.setScalar(0),Io.setScalar(0),Uo.setScalar(0),Do.fromBufferAttribute(t,e),Io.fromBufferAttribute(t,n),Uo.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(Do,r.x),o.addScaledVector(Io,r.y),o.addScaledVector(Uo,r.z),o}static isFrontFacing(t,e,n,s){return un.subVectors(n,e),Pn.subVectors(t,e),un.cross(Pn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return un.subVectors(this.c,this.b),Pn.subVectors(this.a,this.b),un.cross(Pn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return fn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return fn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return fn.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return fn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return fn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let o,a;ki.subVectors(s,n),Hi.subVectors(r,n),Co.subVectors(t,n);const l=ki.dot(Co),c=Hi.dot(Co);if(l<=0&&c<=0)return e.copy(n);Po.subVectors(t,s);const h=ki.dot(Po),u=Hi.dot(Po);if(h>=0&&u<=h)return e.copy(s);const f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(ki,o);Lo.subVectors(t,r);const d=ki.dot(Lo),g=Hi.dot(Lo);if(g>=0&&d<=g)return e.copy(r);const x=d*c-l*g;if(x<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(n).addScaledVector(Hi,a);const m=h*g-d*u;if(m<=0&&u-h>=0&&d-g>=0)return ac.subVectors(r,s),a=(u-h)/(u-h+(d-g)),e.copy(s).addScaledVector(ac,a);const p=1/(m+x+f);return o=x*p,a=f*p,e.copy(n).addScaledVector(ki,o).addScaledVector(Hi,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Gh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Jn={h:0,s:0,l:0},ur={h:0,s:0,l:0};function No(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class kt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=ye){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ne.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=ne.workingColorSpace){return this.r=t,this.g=e,this.b=n,ne.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=ne.workingColorSpace){if(t=dl(t,1),e=Qt(e,0,1),n=Qt(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=No(o,r,t+1/3),this.g=No(o,r,t),this.b=No(o,r,t-1/3)}return ne.colorSpaceToWorking(this,s),this}setStyle(t,e=ye){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=ye){const n=Gh[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Bn(t.r),this.g=Bn(t.g),this.b=Bn(t.b),this}copyLinearToSRGB(t){return this.r=ji(t.r),this.g=ji(t.g),this.b=ji(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ye){return ne.workingToColorSpace(Pe.copy(this),t),Math.round(Qt(Pe.r*255,0,255))*65536+Math.round(Qt(Pe.g*255,0,255))*256+Math.round(Qt(Pe.b*255,0,255))}getHexString(t=ye){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ne.workingColorSpace){ne.workingToColorSpace(Pe.copy(this),e);const n=Pe.r,s=Pe.g,r=Pe.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=ne.workingColorSpace){return ne.workingToColorSpace(Pe.copy(this),e),t.r=Pe.r,t.g=Pe.g,t.b=Pe.b,t}getStyle(t=ye){ne.workingToColorSpace(Pe.copy(this),t);const e=Pe.r,n=Pe.g,s=Pe.b;return t!==ye?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Jn),this.setHSL(Jn.h+t,Jn.s+e,Jn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Jn),t.getHSL(ur);const n=Is(Jn.h,ur.h,e),s=Is(Jn.s,ur.s,e),r=Is(Jn.l,ur.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Pe=new kt;kt.NAMES=Gh;let Yf=0;class ms extends ds{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Yf++}),this.uuid=Pi(),this.name="",this.type="Material",this.blending=Mi,this.side=Gn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ra,this.blendDst=oa,this.blendEquation=pi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new kt(0,0,0),this.blendAlpha=0,this.depthFunc=ts,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ql,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Di,this.stencilZFail=Di,this.stencilZPass=Di,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Mi&&(n.blending=this.blending),this.side!==Gn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ra&&(n.blendSrc=this.blendSrc),this.blendDst!==oa&&(n.blendDst=this.blendDst),this.blendEquation!==pi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ts&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ql&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Di&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Di&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Di&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class _n extends ms{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new kt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new an,this.combine=Sh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Se=new L,fr=new rt;let Kf=0;class Me{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Kf++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Yl,this.updateRanges=[],this.gpuType=Mn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)fr.fromBufferAttribute(this,e),fr.applyMatrix3(t),this.setXY(e,fr.x,fr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Se.fromBufferAttribute(this,e),Se.applyMatrix3(t),this.setXYZ(e,Se.x,Se.y,Se.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Se.fromBufferAttribute(this,e),Se.applyMatrix4(t),this.setXYZ(e,Se.x,Se.y,Se.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Se.fromBufferAttribute(this,e),Se.applyNormalMatrix(t),this.setXYZ(e,Se.x,Se.y,Se.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Se.fromBufferAttribute(this,e),Se.transformDirection(t),this.setXYZ(e,Se.x,Se.y,Se.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Ki(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Ie(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Ki(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ie(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Ki(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ie(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Ki(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ie(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Ki(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ie(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Ie(e,this.array),n=Ie(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Ie(e,this.array),n=Ie(n,this.array),s=Ie(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Ie(e,this.array),n=Ie(n,this.array),s=Ie(s,this.array),r=Ie(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Yl&&(t.usage=this.usage),t}}class Vh extends Me{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Wh extends Me{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Yt extends Me{constructor(t,e,n){super(new Float32Array(t),e,n)}}let $f=0;const Qe=new te,Fo=new de,Gi=new L,$e=new Vn,Es=new Vn,Te=new L;class ue extends ds{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:$f++}),this.uuid=Pi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(zh(t)?Wh:Vh)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Zt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Qe.makeRotationFromQuaternion(t),this.applyMatrix4(Qe),this}rotateX(t){return Qe.makeRotationX(t),this.applyMatrix4(Qe),this}rotateY(t){return Qe.makeRotationY(t),this.applyMatrix4(Qe),this}rotateZ(t){return Qe.makeRotationZ(t),this.applyMatrix4(Qe),this}translate(t,e,n){return Qe.makeTranslation(t,e,n),this.applyMatrix4(Qe),this}scale(t,e,n){return Qe.makeScale(t,e,n),this.applyMatrix4(Qe),this}lookAt(t){return Fo.lookAt(t),Fo.updateMatrix(),this.applyMatrix4(Fo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Gi).negate(),this.translate(Gi.x,Gi.y,Gi.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,r=t.length;s<r;s++){const o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Yt(n,3))}else{const n=Math.min(t.length,e.count);for(let s=0;s<n;s++){const r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Vn);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];$e.setFromBufferAttribute(r),this.morphTargetsRelative?(Te.addVectors(this.boundingBox.min,$e.min),this.boundingBox.expandByPoint(Te),Te.addVectors(this.boundingBox.max,$e.max),this.boundingBox.expandByPoint(Te)):(this.boundingBox.expandByPoint($e.min),this.boundingBox.expandByPoint($e.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ps);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(t){const n=this.boundingSphere.center;if($e.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];Es.setFromBufferAttribute(a),this.morphTargetsRelative?(Te.addVectors($e.min,Es.min),$e.expandByPoint(Te),Te.addVectors($e.max,Es.max),$e.expandByPoint(Te)):($e.expandByPoint(Es.min),$e.expandByPoint(Es.max))}$e.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)Te.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Te));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Te.fromBufferAttribute(a,c),l&&(Gi.fromBufferAttribute(t,c),Te.add(Gi)),s=Math.max(s,n.distanceToSquared(Te))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Me(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let P=0;P<n.count;P++)a[P]=new L,l[P]=new L;const c=new L,h=new L,u=new L,f=new rt,d=new rt,g=new rt,x=new L,m=new L;function p(P,E,y){c.fromBufferAttribute(n,P),h.fromBufferAttribute(n,E),u.fromBufferAttribute(n,y),f.fromBufferAttribute(r,P),d.fromBufferAttribute(r,E),g.fromBufferAttribute(r,y),h.sub(c),u.sub(c),d.sub(f),g.sub(f);const D=1/(d.x*g.y-g.x*d.y);isFinite(D)&&(x.copy(h).multiplyScalar(g.y).addScaledVector(u,-d.y).multiplyScalar(D),m.copy(u).multiplyScalar(d.x).addScaledVector(h,-g.x).multiplyScalar(D),a[P].add(x),a[E].add(x),a[y].add(x),l[P].add(m),l[E].add(m),l[y].add(m))}let S=this.groups;S.length===0&&(S=[{start:0,count:t.count}]);for(let P=0,E=S.length;P<E;++P){const y=S[P],D=y.start,I=y.count;for(let O=D,B=D+I;O<B;O+=3)p(t.getX(O+0),t.getX(O+1),t.getX(O+2))}const _=new L,v=new L,T=new L,A=new L;function C(P){T.fromBufferAttribute(s,P),A.copy(T);const E=a[P];_.copy(E),_.sub(T.multiplyScalar(T.dot(E))).normalize(),v.crossVectors(A,E);const D=v.dot(l[P])<0?-1:1;o.setXYZW(P,_.x,_.y,_.z,D)}for(let P=0,E=S.length;P<E;++P){const y=S[P],D=y.start,I=y.count;for(let O=D,B=D+I;O<B;O+=3)C(t.getX(O+0)),C(t.getX(O+1)),C(t.getX(O+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Me(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);const s=new L,r=new L,o=new L,a=new L,l=new L,c=new L,h=new L,u=new L;if(t)for(let f=0,d=t.count;f<d;f+=3){const g=t.getX(f+0),x=t.getX(f+1),m=t.getX(f+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,x),o.fromBufferAttribute(e,m),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,d=e.count;f<d;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Te.fromBufferAttribute(t,e),Te.normalize(),t.setXYZ(e,Te.x,Te.y,Te.z)}toNonIndexed(){function t(a,l){const c=a.array,h=a.itemSize,u=a.normalized,f=new c.constructor(l.length*h);let d=0,g=0;for(let x=0,m=l.length;x<m;x++){a.isInterleavedBufferAttribute?d=l[x]*a.data.stride+a.offset:d=l[x]*h;for(let p=0;p<h;p++)f[g++]=c[d++]}return new Me(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new ue,n=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=t(l,n);e.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){const f=c[h],d=t(f,n);l.push(d)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){const d=c[u];h.push(d.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone());const s=t.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(e))}const r=t.morphAttributes;for(const c in r){const h=[],u=r[c];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,h=o.length;c<h;c++){const u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const lc=new te,li=new kh,dr=new ps,cc=new L,pr=new L,mr=new L,gr=new L,Oo=new L,vr=new L,hc=new L,xr=new L;class ve extends de{constructor(t=new ue,e=new _n){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){vr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=a[l],u=r[l];h!==0&&(Oo.fromBufferAttribute(u,t),o?vr.addScaledVector(Oo,h):vr.addScaledVector(Oo.sub(e),h))}e.add(vr)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),dr.copy(n.boundingSphere),dr.applyMatrix4(r),li.copy(t.ray).recast(t.near),!(dr.containsPoint(li.origin)===!1&&(li.intersectSphere(dr,cc)===null||li.origin.distanceToSquared(cc)>(t.far-t.near)**2))&&(lc.copy(r).invert(),li.copy(t.ray).applyMatrix4(lc),!(n.boundingBox!==null&&li.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,li)))}_computeIntersections(t,e,n){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,x=f.length;g<x;g++){const m=f[g],p=o[m.materialIndex],S=Math.max(m.start,d.start),_=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let v=S,T=_;v<T;v+=3){const A=a.getX(v),C=a.getX(v+1),P=a.getX(v+2);s=_r(this,p,t,n,c,h,u,A,C,P),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,d.start),x=Math.min(a.count,d.start+d.count);for(let m=g,p=x;m<p;m+=3){const S=a.getX(m),_=a.getX(m+1),v=a.getX(m+2);s=_r(this,o,t,n,c,h,u,S,_,v),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,x=f.length;g<x;g++){const m=f[g],p=o[m.materialIndex],S=Math.max(m.start,d.start),_=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let v=S,T=_;v<T;v+=3){const A=v,C=v+1,P=v+2;s=_r(this,p,t,n,c,h,u,A,C,P),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,d.start),x=Math.min(l.count,d.start+d.count);for(let m=g,p=x;m<p;m+=3){const S=m,_=m+1,v=m+2;s=_r(this,o,t,n,c,h,u,S,_,v),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function Jf(i,t,e,n,s,r,o,a){let l;if(t.side===ze?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,t.side===Gn,a),l===null)return null;xr.copy(a),xr.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(xr);return c<e.near||c>e.far?null:{distance:c,point:xr.clone(),object:i}}function _r(i,t,e,n,s,r,o,a,l,c){i.getVertexPosition(a,pr),i.getVertexPosition(l,mr),i.getVertexPosition(c,gr);const h=Jf(i,t,e,n,pr,mr,gr,hc);if(h){const u=new L;fn.getBarycoord(hc,pr,mr,gr,u),s&&(h.uv=fn.getInterpolatedAttribute(s,a,l,c,u,new rt)),r&&(h.uv1=fn.getInterpolatedAttribute(r,a,l,c,u,new rt)),o&&(h.normal=fn.getInterpolatedAttribute(o,a,l,c,u,new L),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new L,materialIndex:0};fn.getNormal(pr,mr,gr,f.normal),h.face=f,h.barycoord=u}return h}class bn extends ue{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],h=[],u=[];let f=0,d=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,s,o,2),g("x","z","y",1,-1,t,n,-e,s,o,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Yt(c,3)),this.setAttribute("normal",new Yt(h,3)),this.setAttribute("uv",new Yt(u,2));function g(x,m,p,S,_,v,T,A,C,P,E){const y=v/C,D=T/P,I=v/2,O=T/2,B=A/2,H=C+1,X=P+1;let tt=0,q=0;const ct=new L;for(let st=0;st<X;st++){const xt=st*D-O;for(let At=0;At<H;At++){const qt=At*y-I;ct[x]=qt*S,ct[m]=xt*_,ct[p]=B,c.push(ct.x,ct.y,ct.z),ct[x]=0,ct[m]=0,ct[p]=A>0?1:-1,h.push(ct.x,ct.y,ct.z),u.push(At/C),u.push(1-st/P),tt+=1}}for(let st=0;st<P;st++)for(let xt=0;xt<C;xt++){const At=f+xt+H*st,qt=f+xt+H*(st+1),$t=f+(xt+1)+H*(st+1),Ot=f+(xt+1)+H*st;l.push(At,qt,Ot),l.push(qt,$t,Ot),q+=6}a.addGroup(d,q,E),d+=q,f+=tt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new bn(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function os(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Ue(i){const t={};for(let e=0;e<i.length;e++){const n=os(i[e]);for(const s in n)t[s]=n[s]}return t}function Zf(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Xh(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ne.workingColorSpace}const wi={clone:os,merge:Ue};var jf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Qf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ee extends ms{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=jf,this.fragmentShader=Qf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=os(t.uniforms),this.uniformsGroups=Zf(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class qh extends de{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new te,this.projectionMatrix=new te,this.projectionMatrixInverse=new te,this.coordinateSystem=Sn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Zn=new L,uc=new rt,fc=new rt;class Fe extends qh{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=rs*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Ds*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return rs*2*Math.atan(Math.tan(Ds*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Zn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Zn.x,Zn.y).multiplyScalar(-t/Zn.z),Zn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Zn.x,Zn.y).multiplyScalar(-t/Zn.z)}getViewSize(t,e){return this.getViewBounds(t,uc,fc),e.subVectors(fc,uc)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Ds*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Vi=-90,Wi=1;class td extends de{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Fe(Vi,Wi,t,e);s.layers=this.layers,this.add(s);const r=new Fe(Vi,Wi,t,e);r.layers=this.layers,this.add(r);const o=new Fe(Vi,Wi,t,e);o.layers=this.layers,this.add(o);const a=new Fe(Vi,Wi,t,e);a.layers=this.layers,this.add(a);const l=new Fe(Vi,Wi,t,e);l.layers=this.layers,this.add(l);const c=new Fe(Vi,Wi,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,l]=e;for(const c of e)this.remove(c);if(t===Sn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Xr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,h]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,f,d),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Yh extends Re{constructor(t=[],e=es,n,s,r,o,a,l,c,h){super(t,e,n,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class ed extends sn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Yh(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new bn(5,5,5),r=new Ee({name:"CubemapFromEquirect",uniforms:os(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:ze,blending:On});r.uniforms.tEquirect.value=e;const o=new ve(s,r),a=e.minFilter;return e.minFilter===Nn&&(e.minFilter=en),new td(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}}class pn extends de{constructor(){super(),this.isGroup=!0,this.type="Group"}}const nd={type:"move"};class zo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new pn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new pn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new pn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const x of t.hand.values()){const m=e.getJointPose(x,n),p=this._getHandJoint(c,x);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,g=.005;c.inputState.pinching&&f>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(nd)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new pn;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class ml{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new kt(t),this.density=e}clone(){return new ml(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class id extends de{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new an,this.environmentIntensity=1,this.environmentRotation=new an,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class gl extends Re{constructor(t=null,e=1,n=1,s,r,o,a,l,c=Je,h=Je,u,f){super(null,o,a,l,c,h,s,r,u,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class dc extends Me{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Xi=new te,pc=new te,Mr=[],mc=new Vn,sd=new te,bs=new ve,ws=new ps;class Us extends ve{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new dc(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,sd)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Vn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Xi),mc.copy(t.boundingBox).applyMatrix4(Xi),this.boundingBox.union(mc)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new ps),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Xi),ws.copy(t.boundingSphere).applyMatrix4(Xi),this.boundingSphere.union(ws)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(t,e){const n=this.matrixWorld,s=this.count;if(bs.geometry=this.geometry,bs.material=this.material,bs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ws.copy(this.boundingSphere),ws.applyMatrix4(n),t.ray.intersectsSphere(ws)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Xi),pc.multiplyMatrices(n,Xi),bs.matrixWorld=pc,bs.raycast(t,Mr);for(let o=0,a=Mr.length;o<a;o++){const l=Mr[o];l.instanceId=r,l.object=this,e.push(l)}Mr.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new dc(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new gl(new Float32Array(s*this.count),s,this.count,ll,Mn));const r=this.morphTexture.source.data.data;let o=0;for(let c=0;c<n.length;c++)o+=n[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=s*t;r[l]=a,r.set(n,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Bo=new L,rd=new L,od=new Zt;class Qn{constructor(t=new L(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=Bo.subVectors(n,e).cross(rd.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Bo),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||od.getNormalMatrix(t),s=this.coplanarPoint(Bo).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ci=new ps,ad=new rt(.5,.5),Sr=new L;class vl{constructor(t=new Qn,e=new Qn,n=new Qn,s=new Qn,r=new Qn,o=new Qn){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Sn,n=!1){const s=this.planes,r=t.elements,o=r[0],a=r[1],l=r[2],c=r[3],h=r[4],u=r[5],f=r[6],d=r[7],g=r[8],x=r[9],m=r[10],p=r[11],S=r[12],_=r[13],v=r[14],T=r[15];if(s[0].setComponents(c-o,d-h,p-g,T-S).normalize(),s[1].setComponents(c+o,d+h,p+g,T+S).normalize(),s[2].setComponents(c+a,d+u,p+x,T+_).normalize(),s[3].setComponents(c-a,d-u,p-x,T-_).normalize(),n)s[4].setComponents(l,f,m,v).normalize(),s[5].setComponents(c-l,d-f,p-m,T-v).normalize();else if(s[4].setComponents(c-l,d-f,p-m,T-v).normalize(),e===Sn)s[5].setComponents(c+l,d+f,p+m,T+v).normalize();else if(e===Xr)s[5].setComponents(l,f,m,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ci.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ci.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ci)}intersectsSprite(t){ci.center.set(0,0,0);const e=ad.distanceTo(t.center);return ci.radius=.7071067811865476+e,ci.applyMatrix4(t.matrixWorld),this.intersectsSphere(ci)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(Sr.x=s.normal.x>0?t.max.x:t.min.x,Sr.y=s.normal.y>0?t.max.y:t.min.y,Sr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Sr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class ld extends ms{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new kt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const gc=new te,Xa=new kh,yr=new ps,Er=new L;class Kh extends de{constructor(t=new ue,e=new ld){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),yr.copy(n.boundingSphere),yr.applyMatrix4(s),yr.radius+=r,t.ray.intersectsSphere(yr)===!1)return;gc.copy(s).invert(),Xa.copy(t.ray).applyMatrix4(gc);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,u=n.attributes.position;if(c!==null){const f=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let g=f,x=d;g<x;g++){const m=c.getX(g);Er.fromBufferAttribute(u,m),vc(Er,m,l,s,t,e,this)}}else{const f=Math.max(0,o.start),d=Math.min(u.count,o.start+o.count);for(let g=f,x=d;g<x;g++)Er.fromBufferAttribute(u,g),vc(Er,g,l,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function vc(i,t,e,n,s,r,o){const a=Xa.distanceSqToPoint(i);if(a<e){const l=new L;Xa.closestPointToPoint(i,l),l.applyMatrix4(n);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}class as extends Re{constructor(t,e,n,s,r,o,a,l,c){super(t,e,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class $h extends Re{constructor(t,e,n=bi,s,r,o,a=Je,l=Je,c,h=Ws,u=1){if(h!==Ws&&h!==Xs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:t,height:e,depth:u};super(f,s,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new pl(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class Jh extends Re{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Ns extends ue{constructor(t=1,e=1,n=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:t,height:e,capSegments:n,radialSegments:s,heightSegments:r},e=Math.max(0,e),n=Math.max(1,Math.floor(n)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));const o=[],a=[],l=[],c=[],h=e/2,u=Math.PI/2*t,f=e,d=2*u+f,g=n*2+r,x=s+1,m=new L,p=new L;for(let S=0;S<=g;S++){let _=0,v=0,T=0,A=0;if(S<=n){const E=S/n,y=E*Math.PI/2;v=-h-t*Math.cos(y),T=t*Math.sin(y),A=-t*Math.cos(y),_=E*u}else if(S<=n+r){const E=(S-n)/r;v=-h+E*e,T=t,A=0,_=u+E*f}else{const E=(S-n-r)/n,y=E*Math.PI/2;v=h+t*Math.sin(y),T=t*Math.cos(y),A=t*Math.sin(y),_=u+f+E*u}const C=Math.max(0,Math.min(1,_/d));let P=0;S===0?P=.5/s:S===g&&(P=-.5/s);for(let E=0;E<=s;E++){const y=E/s,D=y*Math.PI*2,I=Math.sin(D),O=Math.cos(D);p.x=-T*O,p.y=v,p.z=T*I,a.push(p.x,p.y,p.z),m.set(-T*O,A,T*I),m.normalize(),l.push(m.x,m.y,m.z),c.push(y+P,C)}if(S>0){const E=(S-1)*x;for(let y=0;y<s;y++){const D=E+y,I=E+y+1,O=S*x+y,B=S*x+y+1;o.push(D,I,O),o.push(I,B,O)}}}this.setIndex(o),this.setAttribute("position",new Yt(a,3)),this.setAttribute("normal",new Yt(l,3)),this.setAttribute("uv",new Yt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ns(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}}class xl extends ue{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);const r=[],o=[],a=[],l=[],c=new L,h=new rt;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,f=3;u<=e;u++,f+=3){const d=n+u/e*s;c.x=t*Math.cos(d),c.y=t*Math.sin(d),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[f]/t+1)/2,h.y=(o[f+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new Yt(o,3)),this.setAttribute("normal",new Yt(a,3)),this.setAttribute("uv",new Yt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new xl(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class En extends ue{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const h=[],u=[],f=[],d=[];let g=0;const x=[],m=n/2;let p=0;S(),o===!1&&(t>0&&_(!0),e>0&&_(!1)),this.setIndex(h),this.setAttribute("position",new Yt(u,3)),this.setAttribute("normal",new Yt(f,3)),this.setAttribute("uv",new Yt(d,2));function S(){const v=new L,T=new L;let A=0;const C=(e-t)/n;for(let P=0;P<=r;P++){const E=[],y=P/r,D=y*(e-t)+t;for(let I=0;I<=s;I++){const O=I/s,B=O*l+a,H=Math.sin(B),X=Math.cos(B);T.x=D*H,T.y=-y*n+m,T.z=D*X,u.push(T.x,T.y,T.z),v.set(H,C,X).normalize(),f.push(v.x,v.y,v.z),d.push(O,1-y),E.push(g++)}x.push(E)}for(let P=0;P<s;P++)for(let E=0;E<r;E++){const y=x[E][P],D=x[E+1][P],I=x[E+1][P+1],O=x[E][P+1];(t>0||E!==0)&&(h.push(y,D,O),A+=3),(e>0||E!==r-1)&&(h.push(D,I,O),A+=3)}c.addGroup(p,A,0),p+=A}function _(v){const T=g,A=new rt,C=new L;let P=0;const E=v===!0?t:e,y=v===!0?1:-1;for(let I=1;I<=s;I++)u.push(0,m*y,0),f.push(0,y,0),d.push(.5,.5),g++;const D=g;for(let I=0;I<=s;I++){const B=I/s*l+a,H=Math.cos(B),X=Math.sin(B);C.x=E*X,C.y=m*y,C.z=E*H,u.push(C.x,C.y,C.z),f.push(0,y,0),A.x=H*.5+.5,A.y=X*.5*y+.5,d.push(A.x,A.y),g++}for(let I=0;I<s;I++){const O=T+I,B=D+I;v===!0?h.push(B,B+1,O):h.push(B+1,B,O),P+=3}c.addGroup(p,P,v===!0?1:2),p+=P}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new En(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class to extends En{constructor(t=1,e=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new to(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class _l extends ue{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};const r=[],o=[];a(s),c(n),h(),this.setAttribute("position",new Yt(r,3)),this.setAttribute("normal",new Yt(r.slice(),3)),this.setAttribute("uv",new Yt(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(S){const _=new L,v=new L,T=new L;for(let A=0;A<e.length;A+=3)d(e[A+0],_),d(e[A+1],v),d(e[A+2],T),l(_,v,T,S)}function l(S,_,v,T){const A=T+1,C=[];for(let P=0;P<=A;P++){C[P]=[];const E=S.clone().lerp(v,P/A),y=_.clone().lerp(v,P/A),D=A-P;for(let I=0;I<=D;I++)I===0&&P===A?C[P][I]=E:C[P][I]=E.clone().lerp(y,I/D)}for(let P=0;P<A;P++)for(let E=0;E<2*(A-P)-1;E++){const y=Math.floor(E/2);E%2===0?(f(C[P][y+1]),f(C[P+1][y]),f(C[P][y])):(f(C[P][y+1]),f(C[P+1][y+1]),f(C[P+1][y]))}}function c(S){const _=new L;for(let v=0;v<r.length;v+=3)_.x=r[v+0],_.y=r[v+1],_.z=r[v+2],_.normalize().multiplyScalar(S),r[v+0]=_.x,r[v+1]=_.y,r[v+2]=_.z}function h(){const S=new L;for(let _=0;_<r.length;_+=3){S.x=r[_+0],S.y=r[_+1],S.z=r[_+2];const v=m(S)/2/Math.PI+.5,T=p(S)/Math.PI+.5;o.push(v,1-T)}g(),u()}function u(){for(let S=0;S<o.length;S+=6){const _=o[S+0],v=o[S+2],T=o[S+4],A=Math.max(_,v,T),C=Math.min(_,v,T);A>.9&&C<.1&&(_<.2&&(o[S+0]+=1),v<.2&&(o[S+2]+=1),T<.2&&(o[S+4]+=1))}}function f(S){r.push(S.x,S.y,S.z)}function d(S,_){const v=S*3;_.x=t[v+0],_.y=t[v+1],_.z=t[v+2]}function g(){const S=new L,_=new L,v=new L,T=new L,A=new rt,C=new rt,P=new rt;for(let E=0,y=0;E<r.length;E+=9,y+=6){S.set(r[E+0],r[E+1],r[E+2]),_.set(r[E+3],r[E+4],r[E+5]),v.set(r[E+6],r[E+7],r[E+8]),A.set(o[y+0],o[y+1]),C.set(o[y+2],o[y+3]),P.set(o[y+4],o[y+5]),T.copy(S).add(_).add(v).divideScalar(3);const D=m(T);x(A,y+0,S,D),x(C,y+2,_,D),x(P,y+4,v,D)}}function x(S,_,v,T){T<0&&S.x===1&&(o[_]=S.x-1),v.x===0&&v.z===0&&(o[_]=T/2/Math.PI+.5)}function m(S){return Math.atan2(S.z,-S.x)}function p(S){return Math.atan2(-S.y,Math.sqrt(S.x*S.x+S.z*S.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new _l(t.vertices,t.indices,t.radius,t.details)}}class wn{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){const n=this.getLengths();let s=0;const r=n.length;let o;e?o=e:o=t*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);const h=n[s],f=n[s+1]-h,d=(o-h)/f;return(s+d)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),l=e||(o.isVector2?new rt:new L);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){const n=new L,s=[],r=[],o=[],a=new L,l=new te;for(let d=0;d<=t;d++){const g=d/t;s[d]=this.getTangentAt(g,new L)}r[0]=new L,o[0]=new L;let c=Number.MAX_VALUE;const h=Math.abs(s[0].x),u=Math.abs(s[0].y),f=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),f<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let d=1;d<=t;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(s[d-1],s[d]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(Qt(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(a,g))}o[d].crossVectors(s[d],r[d])}if(e===!0){let d=Math.acos(Qt(r[0].dot(r[t]),-1,1));d/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(d=-d);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],d*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Ml extends wn{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new rt){const n=e,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+t*r;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=l-this.aX,d=c-this.aY;l=f*h-d*u+this.aX,c=f*u+d*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class cd extends Ml{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Sl(){let i=0,t=0,e=0,n=0;function s(r,o,a,l){i=r,t=a,e=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,u){let f=(o-r)/c-(a-r)/(c+h)+(a-o)/h,d=(a-o)/h-(l-o)/(h+u)+(l-a)/u;f*=h,d*=h,s(o,a,f,d)},calc:function(r){const o=r*r,a=o*r;return i+t*r+e*o+n*a}}}const br=new L,ko=new Sl,Ho=new Sl,Go=new Sl;class yl extends wn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new L){const n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(br.subVectors(s[0],s[1]).add(s[0]),c=br);const u=s[a%r],f=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(br.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=br),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(u),d),x=Math.pow(u.distanceToSquared(f),d),m=Math.pow(f.distanceToSquared(h),d);x<1e-4&&(x=1),g<1e-4&&(g=x),m<1e-4&&(m=x),ko.initNonuniformCatmullRom(c.x,u.x,f.x,h.x,g,x,m),Ho.initNonuniformCatmullRom(c.y,u.y,f.y,h.y,g,x,m),Go.initNonuniformCatmullRom(c.z,u.z,f.z,h.z,g,x,m)}else this.curveType==="catmullrom"&&(ko.initCatmullRom(c.x,u.x,f.x,h.x,this.tension),Ho.initCatmullRom(c.y,u.y,f.y,h.y,this.tension),Go.initCatmullRom(c.z,u.z,f.z,h.z,this.tension));return n.set(ko.calc(l),Ho.calc(l),Go.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new L().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function xc(i,t,e,n,s){const r=(n-t)*.5,o=(s-e)*.5,a=i*i,l=i*a;return(2*e-2*n+r+o)*l+(-3*e+3*n-2*r-o)*a+r*i+e}function hd(i,t){const e=1-i;return e*e*t}function ud(i,t){return 2*(1-i)*i*t}function fd(i,t){return i*i*t}function Fs(i,t,e,n){return hd(i,t)+ud(i,e)+fd(i,n)}function dd(i,t){const e=1-i;return e*e*e*t}function pd(i,t){const e=1-i;return 3*e*e*i*t}function md(i,t){return 3*(1-i)*i*i*t}function gd(i,t){return i*i*i*t}function Os(i,t,e,n,s){return dd(i,t)+pd(i,e)+md(i,n)+gd(i,s)}class Zh extends wn{constructor(t=new rt,e=new rt,n=new rt,s=new rt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new rt){const n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Os(t,s.x,r.x,o.x,a.x),Os(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class vd extends wn{constructor(t=new L,e=new L,n=new L,s=new L){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new L){const n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Os(t,s.x,r.x,o.x,a.x),Os(t,s.y,r.y,o.y,a.y),Os(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class jh extends wn{constructor(t=new rt,e=new rt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new rt){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new rt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class xd extends wn{constructor(t=new L,e=new L){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new L){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new L){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Qh extends wn{constructor(t=new rt,e=new rt,n=new rt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new rt){const n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Fs(t,s.x,r.x,o.x),Fs(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class tu extends wn{constructor(t=new L,e=new L,n=new L){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new L){const n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Fs(t,s.x,r.x,o.x),Fs(t,s.y,r.y,o.y),Fs(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class El extends wn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new rt){const n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return n.set(xc(a,l.x,c.x,h.x,u.x),xc(a,l.y,c.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new rt().fromArray(s))}return this}}var qr=Object.freeze({__proto__:null,ArcCurve:cd,CatmullRomCurve3:yl,CubicBezierCurve:Zh,CubicBezierCurve3:vd,EllipseCurve:Ml,LineCurve:jh,LineCurve3:xd,QuadraticBezierCurve:Qh,QuadraticBezierCurve3:tu,SplineCurve:El});class _d extends wn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new qr[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const o=s[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){const h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(new qr[s.type]().fromJSON(s))}return this}}class qa extends _d{constructor(t){super(),this.type="Path",this.currentPoint=new rt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new jh(this.currentPoint.clone(),new rt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){const r=new Qh(this.currentPoint.clone(),new rt(t,e),new rt(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,o){const a=new Zh(this.currentPoint.clone(),new rt(t,e),new rt(n,s),new rt(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new El(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,s,r,o),this}absarc(t,e,n,s,r,o){return this.absellipse(t,e,n,n,s,r,o),this}ellipse(t,e,n,s,r,o,a,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,s,r,o,a,l),this}absellipse(t,e,n,s,r,o,a,l){const c=new Ml(t,e,n,s,r,o,a,l);if(this.curves.length>0){const u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class gs extends qa{constructor(t){super(t),this.uuid=Pi(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(new qa().fromJSON(s))}return this}}function Md(i,t,e=2){const n=t&&t.length,s=n?t[0]*e:i.length;let r=eu(i,0,s,e,!0);const o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(n&&(r=wd(i,t,r,e)),i.length>80*e){a=1/0,l=1/0;let h=-1/0,u=-1/0;for(let f=e;f<s;f+=e){const d=i[f],g=i[f+1];d<a&&(a=d),g<l&&(l=g),d>h&&(h=d),g>u&&(u=g)}c=Math.max(h-a,u-l),c=c!==0?32767/c:0}return Ks(r,o,e,a,l,c,0),o}function eu(i,t,e,n,s){let r;if(s===Fd(i,t,e,n)>0)for(let o=t;o<e;o+=n)r=_c(o/n|0,i[o],i[o+1],r);else for(let o=e-n;o>=t;o-=n)r=_c(o/n|0,i[o],i[o+1],r);return r&&ls(r,r.next)&&(Js(r),r=r.next),r}function Ti(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(ls(e,e.next)||ge(e.prev,e,e.next)===0)){if(Js(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Ks(i,t,e,n,s,r,o){if(!i)return;!o&&r&&Pd(i,n,s,r);let a=i;for(;i.prev!==i.next;){const l=i.prev,c=i.next;if(r?yd(i,n,s,r):Sd(i)){t.push(l.i,i.i,c.i),Js(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=Ed(Ti(i),t),Ks(i,t,e,n,s,r,2)):o===2&&bd(i,t,e,n,s,r):Ks(Ti(i),t,e,n,s,r,1);break}}}function Sd(i){const t=i.prev,e=i,n=i.next;if(ge(t,e,n)>=0)return!1;const s=t.x,r=e.x,o=n.x,a=t.y,l=e.y,c=n.y,h=Math.min(s,r,o),u=Math.min(a,l,c),f=Math.max(s,r,o),d=Math.max(a,l,c);let g=n.next;for(;g!==t;){if(g.x>=h&&g.x<=f&&g.y>=u&&g.y<=d&&As(s,a,r,l,o,c,g.x,g.y)&&ge(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function yd(i,t,e,n){const s=i.prev,r=i,o=i.next;if(ge(s,r,o)>=0)return!1;const a=s.x,l=r.x,c=o.x,h=s.y,u=r.y,f=o.y,d=Math.min(a,l,c),g=Math.min(h,u,f),x=Math.max(a,l,c),m=Math.max(h,u,f),p=Ya(d,g,t,e,n),S=Ya(x,m,t,e,n);let _=i.prevZ,v=i.nextZ;for(;_&&_.z>=p&&v&&v.z<=S;){if(_.x>=d&&_.x<=x&&_.y>=g&&_.y<=m&&_!==s&&_!==o&&As(a,h,l,u,c,f,_.x,_.y)&&ge(_.prev,_,_.next)>=0||(_=_.prevZ,v.x>=d&&v.x<=x&&v.y>=g&&v.y<=m&&v!==s&&v!==o&&As(a,h,l,u,c,f,v.x,v.y)&&ge(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;_&&_.z>=p;){if(_.x>=d&&_.x<=x&&_.y>=g&&_.y<=m&&_!==s&&_!==o&&As(a,h,l,u,c,f,_.x,_.y)&&ge(_.prev,_,_.next)>=0)return!1;_=_.prevZ}for(;v&&v.z<=S;){if(v.x>=d&&v.x<=x&&v.y>=g&&v.y<=m&&v!==s&&v!==o&&As(a,h,l,u,c,f,v.x,v.y)&&ge(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function Ed(i,t){let e=i;do{const n=e.prev,s=e.next.next;!ls(n,s)&&iu(n,e,e.next,s)&&$s(n,s)&&$s(s,n)&&(t.push(n.i,e.i,s.i),Js(e),Js(e.next),e=i=s),e=e.next}while(e!==i);return Ti(e)}function bd(i,t,e,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Id(o,a)){let l=su(o,a);o=Ti(o,o.next),l=Ti(l,l.next),Ks(o,t,e,n,s,r,0),Ks(l,t,e,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function wd(i,t,e,n){const s=[];for(let r=0,o=t.length;r<o;r++){const a=t[r]*n,l=r<o-1?t[r+1]*n:i.length,c=eu(i,a,l,n,!1);c===c.next&&(c.steiner=!0),s.push(Dd(c))}s.sort(Td);for(let r=0;r<s.length;r++)e=Ad(s[r],e);return e}function Td(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){const n=(i.next.y-i.y)/(i.next.x-i.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=n-s}return e}function Ad(i,t){const e=Rd(i,t);if(!e)return t;const n=su(e,i);return Ti(n,n.next),Ti(e,e.next)}function Rd(i,t){let e=t;const n=i.x,s=i.y;let r=-1/0,o;if(ls(i,e))return e;do{if(ls(i,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){const u=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(u<=n&&u>r&&(r=u,o=e.x<e.next.x?e:e.next,u===n))return o}e=e.next}while(e!==t);if(!o)return null;const a=o,l=o.x,c=o.y;let h=1/0;e=o;do{if(n>=e.x&&e.x>=l&&n!==e.x&&nu(s<c?n:r,s,l,c,s<c?r:n,s,e.x,e.y)){const u=Math.abs(s-e.y)/(n-e.x);$s(e,i)&&(u<h||u===h&&(e.x>o.x||e.x===o.x&&Cd(o,e)))&&(o=e,h=u)}e=e.next}while(e!==a);return o}function Cd(i,t){return ge(i.prev,i,t.prev)<0&&ge(t.next,i,i.next)<0}function Pd(i,t,e,n){let s=i;do s.z===0&&(s.z=Ya(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Ld(s)}function Ld(i){let t,e=1;do{let n=i,s;i=null;let r=null;for(t=0;n;){t++;let o=n,a=0;for(let c=0;c<e&&(a++,o=o.nextZ,!!o);c++);let l=e;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||n.z<=o.z)?(s=n,n=n.nextZ,a--):(s=o,o=o.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=o}r.nextZ=null,e*=2}while(t>1);return i}function Ya(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function Dd(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function nu(i,t,e,n,s,r,o,a){return(s-o)*(t-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(n-a)}function As(i,t,e,n,s,r,o,a){return!(i===o&&t===a)&&nu(i,t,e,n,s,r,o,a)}function Id(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!Ud(i,t)&&($s(i,t)&&$s(t,i)&&Nd(i,t)&&(ge(i.prev,i,t.prev)||ge(i,t.prev,t))||ls(i,t)&&ge(i.prev,i,i.next)>0&&ge(t.prev,t,t.next)>0)}function ge(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function ls(i,t){return i.x===t.x&&i.y===t.y}function iu(i,t,e,n){const s=Tr(ge(i,t,e)),r=Tr(ge(i,t,n)),o=Tr(ge(e,n,i)),a=Tr(ge(e,n,t));return!!(s!==r&&o!==a||s===0&&wr(i,e,t)||r===0&&wr(i,n,t)||o===0&&wr(e,i,n)||a===0&&wr(e,t,n))}function wr(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function Tr(i){return i>0?1:i<0?-1:0}function Ud(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&iu(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function $s(i,t){return ge(i.prev,i,i.next)<0?ge(i,t,i.next)>=0&&ge(i,i.prev,t)>=0:ge(i,t,i.prev)<0||ge(i,i.next,t)<0}function Nd(i,t){let e=i,n=!1;const s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function su(i,t){const e=Ka(i.i,i.x,i.y),n=Ka(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function _c(i,t,e,n){const s=Ka(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Js(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Ka(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Fd(i,t,e,n){let s=0;for(let r=t,o=e-n;r<e;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}class Od{static triangulate(t,e,n=2){return Md(t,e,n)}}class Fn{static area(t){const e=t.length;let n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return Fn.area(t)<0}static triangulateShape(t,e){const n=[],s=[],r=[];Mc(t),Sc(n,t);let o=t.length;e.forEach(Mc);for(let l=0;l<e.length;l++)s.push(o),o+=e[l].length,Sc(n,e[l]);const a=Od.triangulate(n,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}}function Mc(i){const t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function Sc(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}class eo extends ue{constructor(t=new gs([new rt(.5,.5),new rt(-.5,.5),new rt(-.5,-.5),new rt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,s=[],r=[];for(let a=0,l=t.length;a<l;a++){const c=t[a];o(c)}this.setAttribute("position",new Yt(s,3)),this.setAttribute("uv",new Yt(r,2)),this.computeVertexNormals();function o(a){const l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1;let f=e.bevelEnabled!==void 0?e.bevelEnabled:!0,d=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:d-.1,x=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3;const p=e.extrudePath,S=e.UVGenerator!==void 0?e.UVGenerator:zd;let _,v=!1,T,A,C,P;p&&(_=p.getSpacedPoints(h),v=!0,f=!1,T=p.computeFrenetFrames(h,!1),A=new L,C=new L,P=new L),f||(m=0,d=0,g=0,x=0);const E=a.extractPoints(c);let y=E.shape;const D=E.holes;if(!Fn.isClockWise(y)){y=y.reverse();for(let k=0,W=D.length;k<W;k++){const G=D[k];Fn.isClockWise(G)&&(D[k]=G.reverse())}}function O(k){const G=10000000000000001e-36;let K=k[0];for(let Q=1;Q<=k.length;Q++){const V=Q%k.length,nt=k[V],St=nt.x-K.x,yt=nt.y-K.y,w=St*St+yt*yt,M=Math.max(Math.abs(nt.x),Math.abs(nt.y),Math.abs(K.x),Math.abs(K.y)),N=G*M*M;if(w<=N){k.splice(V,1),Q--;continue}K=nt}}O(y),D.forEach(O);const B=D.length,H=y;for(let k=0;k<B;k++){const W=D[k];y=y.concat(W)}function X(k,W,G){return W||console.error("THREE.ExtrudeGeometry: vec does not exist"),k.clone().addScaledVector(W,G)}const tt=y.length;function q(k,W,G){let K,Q,V;const nt=k.x-W.x,St=k.y-W.y,yt=G.x-k.x,w=G.y-k.y,M=nt*nt+St*St,N=nt*w-St*yt;if(Math.abs(N)>Number.EPSILON){const Y=Math.sqrt(M),at=Math.sqrt(yt*yt+w*w),Z=W.x-St/Y,Lt=W.y+nt/Y,gt=G.x-w/at,It=G.y+yt/at,Ut=((gt-Z)*w-(It-Lt)*yt)/(nt*w-St*yt);K=Z+nt*Ut-k.x,Q=Lt+St*Ut-k.y;const ht=K*K+Q*Q;if(ht<=2)return new rt(K,Q);V=Math.sqrt(ht/2)}else{let Y=!1;nt>Number.EPSILON?yt>Number.EPSILON&&(Y=!0):nt<-Number.EPSILON?yt<-Number.EPSILON&&(Y=!0):Math.sign(St)===Math.sign(w)&&(Y=!0),Y?(K=-St,Q=nt,V=Math.sqrt(M)):(K=nt,Q=St,V=Math.sqrt(M/2))}return new rt(K/V,Q/V)}const ct=[];for(let k=0,W=H.length,G=W-1,K=k+1;k<W;k++,G++,K++)G===W&&(G=0),K===W&&(K=0),ct[k]=q(H[k],H[G],H[K]);const st=[];let xt,At=ct.concat();for(let k=0,W=B;k<W;k++){const G=D[k];xt=[];for(let K=0,Q=G.length,V=Q-1,nt=K+1;K<Q;K++,V++,nt++)V===Q&&(V=0),nt===Q&&(nt=0),xt[K]=q(G[K],G[V],G[nt]);st.push(xt),At=At.concat(xt)}let qt;if(m===0)qt=Fn.triangulateShape(H,D);else{const k=[],W=[];for(let G=0;G<m;G++){const K=G/m,Q=d*Math.cos(K*Math.PI/2),V=g*Math.sin(K*Math.PI/2)+x;for(let nt=0,St=H.length;nt<St;nt++){const yt=X(H[nt],ct[nt],V);Pt(yt.x,yt.y,-Q),K===0&&k.push(yt)}for(let nt=0,St=B;nt<St;nt++){const yt=D[nt];xt=st[nt];const w=[];for(let M=0,N=yt.length;M<N;M++){const Y=X(yt[M],xt[M],V);Pt(Y.x,Y.y,-Q),K===0&&w.push(Y)}K===0&&W.push(w)}}qt=Fn.triangulateShape(k,W)}const $t=qt.length,Ot=g+x;for(let k=0;k<tt;k++){const W=f?X(y[k],At[k],Ot):y[k];v?(C.copy(T.normals[0]).multiplyScalar(W.x),A.copy(T.binormals[0]).multiplyScalar(W.y),P.copy(_[0]).add(C).add(A),Pt(P.x,P.y,P.z)):Pt(W.x,W.y,0)}for(let k=1;k<=h;k++)for(let W=0;W<tt;W++){const G=f?X(y[W],At[W],Ot):y[W];v?(C.copy(T.normals[k]).multiplyScalar(G.x),A.copy(T.binormals[k]).multiplyScalar(G.y),P.copy(_[k]).add(C).add(A),Pt(P.x,P.y,P.z)):Pt(G.x,G.y,u/h*k)}for(let k=m-1;k>=0;k--){const W=k/m,G=d*Math.cos(W*Math.PI/2),K=g*Math.sin(W*Math.PI/2)+x;for(let Q=0,V=H.length;Q<V;Q++){const nt=X(H[Q],ct[Q],K);Pt(nt.x,nt.y,u+G)}for(let Q=0,V=D.length;Q<V;Q++){const nt=D[Q];xt=st[Q];for(let St=0,yt=nt.length;St<yt;St++){const w=X(nt[St],xt[St],K);v?Pt(w.x,w.y+_[h-1].y,_[h-1].x+G):Pt(w.x,w.y,u+G)}}}et(),it();function et(){const k=s.length/3;if(f){let W=0,G=tt*W;for(let K=0;K<$t;K++){const Q=qt[K];mt(Q[2]+G,Q[1]+G,Q[0]+G)}W=h+m*2,G=tt*W;for(let K=0;K<$t;K++){const Q=qt[K];mt(Q[0]+G,Q[1]+G,Q[2]+G)}}else{for(let W=0;W<$t;W++){const G=qt[W];mt(G[2],G[1],G[0])}for(let W=0;W<$t;W++){const G=qt[W];mt(G[0]+tt*h,G[1]+tt*h,G[2]+tt*h)}}n.addGroup(k,s.length/3-k,0)}function it(){const k=s.length/3;let W=0;wt(H,W),W+=H.length;for(let G=0,K=D.length;G<K;G++){const Q=D[G];wt(Q,W),W+=Q.length}n.addGroup(k,s.length/3-k,1)}function wt(k,W){let G=k.length;for(;--G>=0;){const K=G;let Q=G-1;Q<0&&(Q=k.length-1);for(let V=0,nt=h+m*2;V<nt;V++){const St=tt*V,yt=tt*(V+1),w=W+K+St,M=W+Q+St,N=W+Q+yt,Y=W+K+yt;Wt(w,M,N,Y)}}}function Pt(k,W,G){l.push(k),l.push(W),l.push(G)}function mt(k,W,G){lt(k),lt(W),lt(G);const K=s.length/3,Q=S.generateTopUV(n,s,K-3,K-2,K-1);R(Q[0]),R(Q[1]),R(Q[2])}function Wt(k,W,G,K){lt(k),lt(W),lt(K),lt(W),lt(G),lt(K);const Q=s.length/3,V=S.generateSideWallUV(n,s,Q-6,Q-3,Q-2,Q-1);R(V[0]),R(V[1]),R(V[3]),R(V[1]),R(V[2]),R(V[3])}function lt(k){s.push(l[k*3+0]),s.push(l[k*3+1]),s.push(l[k*3+2])}function R(k){r.push(k.x),r.push(k.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return Bd(e,n,t)}static fromJSON(t,e){const n=[];for(let r=0,o=t.shapes.length;r<o;r++){const a=e[t.shapes[r]];n.push(a)}const s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new qr[s.type]().fromJSON(s)),new eo(n,t.options)}}const zd={generateTopUV:function(i,t,e,n,s){const r=t[e*3],o=t[e*3+1],a=t[n*3],l=t[n*3+1],c=t[s*3],h=t[s*3+1];return[new rt(r,o),new rt(a,l),new rt(c,h)]},generateSideWallUV:function(i,t,e,n,s,r){const o=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],u=t[n*3+2],f=t[s*3],d=t[s*3+1],g=t[s*3+2],x=t[r*3],m=t[r*3+1],p=t[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new rt(o,1-l),new rt(c,1-u),new rt(f,1-g),new rt(x,1-p)]:[new rt(a,1-l),new rt(h,1-u),new rt(d,1-g),new rt(m,1-p)]}};function Bd(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){const r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class no extends ue{constructor(t=[new rt(0,-.5),new rt(.5,0),new rt(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=Qt(s,0,Math.PI*2);const r=[],o=[],a=[],l=[],c=[],h=1/e,u=new L,f=new rt,d=new L,g=new L,x=new L;let m=0,p=0;for(let S=0;S<=t.length-1;S++)switch(S){case 0:m=t[S+1].x-t[S].x,p=t[S+1].y-t[S].y,d.x=p*1,d.y=-m,d.z=p*0,x.copy(d),d.normalize(),l.push(d.x,d.y,d.z);break;case t.length-1:l.push(x.x,x.y,x.z);break;default:m=t[S+1].x-t[S].x,p=t[S+1].y-t[S].y,d.x=p*1,d.y=-m,d.z=p*0,g.copy(d),d.x+=x.x,d.y+=x.y,d.z+=x.z,d.normalize(),l.push(d.x,d.y,d.z),x.copy(g)}for(let S=0;S<=e;S++){const _=n+S*h*s,v=Math.sin(_),T=Math.cos(_);for(let A=0;A<=t.length-1;A++){u.x=t[A].x*v,u.y=t[A].y,u.z=t[A].x*T,o.push(u.x,u.y,u.z),f.x=S/e,f.y=A/(t.length-1),a.push(f.x,f.y);const C=l[3*A+0]*v,P=l[3*A+1],E=l[3*A+0]*T;c.push(C,P,E)}}for(let S=0;S<e;S++)for(let _=0;_<t.length-1;_++){const v=_+S*t.length,T=v,A=v+t.length,C=v+t.length+1,P=v+1;r.push(T,A,P),r.push(C,P,A)}this.setIndex(r),this.setAttribute("position",new Yt(o,3)),this.setAttribute("uv",new Yt(a,2)),this.setAttribute("normal",new Yt(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new no(t.points,t.segments,t.phiStart,t.phiLength)}}class Ji extends _l{constructor(t=1,e=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Ji(t.radius,t.detail)}}class ln extends ue{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,u=t/a,f=e/l,d=[],g=[],x=[],m=[];for(let p=0;p<h;p++){const S=p*f-o;for(let _=0;_<c;_++){const v=_*u-r;g.push(v,-S,0),x.push(0,0,1),m.push(_/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let S=0;S<a;S++){const _=S+c*p,v=S+c*(p+1),T=S+1+c*(p+1),A=S+1+c*p;d.push(_,v,A),d.push(v,T,A)}this.setIndex(d),this.setAttribute("position",new Yt(g,3)),this.setAttribute("normal",new Yt(x,3)),this.setAttribute("uv",new Yt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ln(t.width,t.height,t.widthSegments,t.heightSegments)}}class bl extends ue{constructor(t=.5,e=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);const a=[],l=[],c=[],h=[];let u=t;const f=(e-t)/s,d=new L,g=new rt;for(let x=0;x<=s;x++){for(let m=0;m<=n;m++){const p=r+m/n*o;d.x=u*Math.cos(p),d.y=u*Math.sin(p),l.push(d.x,d.y,d.z),c.push(0,0,1),g.x=(d.x/e+1)/2,g.y=(d.y/e+1)/2,h.push(g.x,g.y)}u+=f}for(let x=0;x<s;x++){const m=x*(n+1);for(let p=0;p<n;p++){const S=p+m,_=S,v=S+n+1,T=S+n+2,A=S+1;a.push(_,v,A),a.push(v,T,A)}}this.setIndex(a),this.setAttribute("position",new Yt(l,3)),this.setAttribute("normal",new Yt(c,3)),this.setAttribute("uv",new Yt(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new bl(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class tr extends ue{constructor(t=new gs([new rt(0,.5),new rt(-.5,-.5),new rt(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};const n=[],s=[],r=[],o=[];let a=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let h=0;h<t.length;h++)c(t[h]),this.addGroup(a,l,h),a+=l,l=0;this.setIndex(n),this.setAttribute("position",new Yt(s,3)),this.setAttribute("normal",new Yt(r,3)),this.setAttribute("uv",new Yt(o,2));function c(h){const u=s.length/3,f=h.extractPoints(e);let d=f.shape;const g=f.holes;Fn.isClockWise(d)===!1&&(d=d.reverse());for(let m=0,p=g.length;m<p;m++){const S=g[m];Fn.isClockWise(S)===!0&&(g[m]=S.reverse())}const x=Fn.triangulateShape(d,g);for(let m=0,p=g.length;m<p;m++){const S=g[m];d=d.concat(S)}for(let m=0,p=d.length;m<p;m++){const S=d[m];s.push(S.x,S.y,0),r.push(0,0,1),o.push(S.x,S.y)}for(let m=0,p=x.length;m<p;m++){const S=x[m],_=S[0]+u,v=S[1]+u,T=S[2]+u;n.push(_,v,T),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes;return kd(e,t)}static fromJSON(t,e){const n=[];for(let s=0,r=t.shapes.length;s<r;s++){const o=e[t.shapes[s]];n.push(o)}return new tr(n,t.curveSegments)}}function kd(i,t){if(t.shapes=[],Array.isArray(i))for(let e=0,n=i.length;e<n;e++){const s=i[e];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t}class Xe extends ue{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const h=[],u=new L,f=new L,d=[],g=[],x=[],m=[];for(let p=0;p<=n;p++){const S=[],_=p/n;let v=0;p===0&&o===0?v=.5/e:p===n&&l===Math.PI&&(v=-.5/e);for(let T=0;T<=e;T++){const A=T/e;u.x=-t*Math.cos(s+A*r)*Math.sin(o+_*a),u.y=t*Math.cos(o+_*a),u.z=t*Math.sin(s+A*r)*Math.sin(o+_*a),g.push(u.x,u.y,u.z),f.copy(u).normalize(),x.push(f.x,f.y,f.z),m.push(A+v,1-_),S.push(c++)}h.push(S)}for(let p=0;p<n;p++)for(let S=0;S<e;S++){const _=h[p][S+1],v=h[p][S],T=h[p+1][S],A=h[p+1][S+1];(p!==0||o>0)&&d.push(_,v,A),(p!==n-1||l<Math.PI)&&d.push(v,T,A)}this.setIndex(d),this.setAttribute("position",new Yt(g,3)),this.setAttribute("normal",new Yt(x,3)),this.setAttribute("uv",new Yt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Xe(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Ai extends ue{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);const o=[],a=[],l=[],c=[],h=new L,u=new L,f=new L;for(let d=0;d<=n;d++)for(let g=0;g<=s;g++){const x=g/s*r,m=d/n*Math.PI*2;u.x=(t+e*Math.cos(m))*Math.cos(x),u.y=(t+e*Math.cos(m))*Math.sin(x),u.z=e*Math.sin(m),a.push(u.x,u.y,u.z),h.x=t*Math.cos(x),h.y=t*Math.sin(x),f.subVectors(u,h).normalize(),l.push(f.x,f.y,f.z),c.push(g/s),c.push(d/n)}for(let d=1;d<=n;d++)for(let g=1;g<=s;g++){const x=(s+1)*d+g-1,m=(s+1)*(d-1)+g-1,p=(s+1)*(d-1)+g,S=(s+1)*d+g;o.push(x,m,S),o.push(m,p,S)}this.setIndex(o),this.setAttribute("position",new Yt(a,3)),this.setAttribute("normal",new Yt(l,3)),this.setAttribute("uv",new Yt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ai(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class wl extends ue{constructor(t=new tu(new L(-1,-1,0),new L(-1,1,0),new L(1,1,0)),e=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:s,closed:r};const o=t.computeFrenetFrames(e,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new L,l=new L,c=new rt;let h=new L;const u=[],f=[],d=[],g=[];x(),this.setIndex(g),this.setAttribute("position",new Yt(u,3)),this.setAttribute("normal",new Yt(f,3)),this.setAttribute("uv",new Yt(d,2));function x(){for(let _=0;_<e;_++)m(_);m(r===!1?e:0),S(),p()}function m(_){h=t.getPointAt(_/e,h);const v=o.normals[_],T=o.binormals[_];for(let A=0;A<=s;A++){const C=A/s*Math.PI*2,P=Math.sin(C),E=-Math.cos(C);l.x=E*v.x+P*T.x,l.y=E*v.y+P*T.y,l.z=E*v.z+P*T.z,l.normalize(),f.push(l.x,l.y,l.z),a.x=h.x+n*l.x,a.y=h.y+n*l.y,a.z=h.z+n*l.z,u.push(a.x,a.y,a.z)}}function p(){for(let _=1;_<=e;_++)for(let v=1;v<=s;v++){const T=(s+1)*(_-1)+(v-1),A=(s+1)*_+(v-1),C=(s+1)*_+v,P=(s+1)*(_-1)+v;g.push(T,A,P),g.push(A,C,P)}}function S(){for(let _=0;_<=e;_++)for(let v=0;v<=s;v++)c.x=_/e,c.y=v/s,d.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new wl(new qr[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}class Hd extends Ee{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class ni extends ms{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new kt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new kt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Fh,this.normalScale=new rt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new an,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Gd extends ms{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=of,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Vd extends ms{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Vo={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(this.files[i]=t)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class Wd{constructor(t,e,n){const s=this;let r=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.abortController=new AbortController,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){const u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=c.length;u<f;u+=2){const d=c[u],g=c[u+1];if(d.global&&(d.lastIndex=0),d.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}}const Xd=new Wd;class Tl{constructor(t){this.manager=t!==void 0?t:Xd,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}}Tl.DEFAULT_MATERIAL_NAME="__DEFAULT";const qi=new WeakMap;class qd extends Tl{constructor(t){super(t)}load(t,e,n,s){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,o=Vo.get(`image:${t}`);if(o!==void 0){if(o.complete===!0)r.manager.itemStart(t),setTimeout(function(){e&&e(o),r.manager.itemEnd(t)},0);else{let u=qi.get(o);u===void 0&&(u=[],qi.set(o,u)),u.push({onLoad:e,onError:s})}return o}const a=qs("img");function l(){h(),e&&e(this);const u=qi.get(this)||[];for(let f=0;f<u.length;f++){const d=u[f];d.onLoad&&d.onLoad(this)}qi.delete(this),r.manager.itemEnd(t)}function c(u){h(),s&&s(u),Vo.remove(`image:${t}`);const f=qi.get(this)||[];for(let d=0;d<f.length;d++){const g=f[d];g.onError&&g.onError(u)}qi.delete(this),r.manager.itemError(t),r.manager.itemEnd(t)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),Vo.add(`image:${t}`,a),r.manager.itemStart(t),a.src=t,a}}class Yd extends Tl{constructor(t){super(t)}load(t,e,n,s){const r=new Re,o=new qd(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){r.image=a,r.needsUpdate=!0,e!==void 0&&e(r)},n,s),r}}class io extends de{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new kt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class Kd extends io{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(de.DEFAULT_UP),this.updateMatrix(),this.groundColor=new kt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const Wo=new te,yc=new L,Ec=new L;class Al{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new rt(512,512),this.mapType=yn,this.map=null,this.mapPass=null,this.matrix=new te,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new vl,this._frameExtents=new rt(1,1),this._viewportCount=1,this._viewports=[new se(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;yc.setFromMatrixPosition(t.matrixWorld),e.position.copy(yc),Ec.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Ec),e.updateMatrixWorld(),Wo.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Wo,e.coordinateSystem,e.reversedDepth),e.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Wo)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class $d extends Al{constructor(){super(new Fe(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(t){const e=this.camera,n=rs*2*t.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=t.distance||e.far;(n!==e.fov||s!==e.aspect||r!==e.far)&&(e.fov=n,e.aspect=s,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}class Jd extends io{constructor(t,e,n=0,s=Math.PI/3,r=0,o=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(de.DEFAULT_UP),this.updateMatrix(),this.target=new de,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new $d}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}const bc=new te,Ts=new L,Xo=new L;class Zd extends Al{constructor(){super(new Fe(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new rt(4,2),this._viewportCount=6,this._viewports=[new se(2,1,1,1),new se(0,1,1,1),new se(3,1,1,1),new se(1,1,1,1),new se(3,0,1,1),new se(1,0,1,1)],this._cubeDirections=[new L(1,0,0),new L(-1,0,0),new L(0,0,1),new L(0,0,-1),new L(0,1,0),new L(0,-1,0)],this._cubeUps=[new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,0,1),new L(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Ts.setFromMatrixPosition(t.matrixWorld),n.position.copy(Ts),Xo.copy(n.position),Xo.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Xo),n.updateMatrixWorld(),s.makeTranslation(-Ts.x,-Ts.y,-Ts.z),bc.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(bc,n.coordinateSystem,n.reversedDepth)}}class ru extends io{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Zd}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class Rl extends qh{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class jd extends Al{constructor(){super(new Rl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class wc extends io{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(de.DEFAULT_UP),this.updateMatrix(),this.target=new de,this.shadow=new jd}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Qd extends Fe{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class tp{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=performance.now();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function Tc(i,t,e,n){const s=ep(n);switch(e){case Ih:return i*t;case ll:return i*t/s.components*s.byteLength;case cl:return i*t/s.components*s.byteLength;case Nh:return i*t*2/s.components*s.byteLength;case hl:return i*t*2/s.components*s.byteLength;case Uh:return i*t*3/s.components*s.byteLength;case nn:return i*t*4/s.components*s.byteLength;case ul:return i*t*4/s.components*s.byteLength;case Fr:case Or:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case zr:case Br:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case xa:case Ma:return Math.max(i,16)*Math.max(t,8)/4;case va:case _a:return Math.max(i,8)*Math.max(t,8)/2;case Sa:case ya:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Ea:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ba:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case wa:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Ta:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Aa:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Ra:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Ca:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Pa:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case La:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Da:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Ia:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Ua:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Na:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Fa:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Oa:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case za:case Ba:case ka:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Ha:case Ga:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Va:case Wa:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function ep(i){switch(i){case yn:case Ch:return{byteLength:1,components:1};case Gs:case Ph:case zn:return{byteLength:2,components:1};case ol:case al:return{byteLength:2,components:4};case bi:case rl:case Mn:return{byteLength:4,components:1};case Lh:case Dh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:il}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=il);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function ou(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function np(i){const t=new WeakMap;function e(a,l){const c=a.array,h=a.usage,u=c.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,c,h),a.onUploadCallback();let d;if(c instanceof Float32Array)d=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=i.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=i.SHORT;else if(c instanceof Uint32Array)d=i.UNSIGNED_INT;else if(c instanceof Int32Array)d=i.INT;else if(c instanceof Int8Array)d=i.BYTE;else if(c instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){const h=l.array,u=l.updateRanges;if(i.bindBuffer(c,a),u.length===0)i.bufferSubData(c,0,h);else{u.sort((d,g)=>d.start-g.start);let f=0;for(let d=1;d<u.length;d++){const g=u[f],x=u[d];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++f,u[f]=x)}u.length=f+1;for(let d=0,g=u.length;d<g;d++){const x=u[d];i.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var ip=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,sp=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,rp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,op=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ap=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,lp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,cp=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,hp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,up=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,fp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,dp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,pp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,mp=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,gp=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,vp=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,xp=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,_p=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Mp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Sp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,yp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Ep=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,bp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,wp=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Tp=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Ap=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Rp=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Cp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Pp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Lp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Dp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ip="gl_FragColor = linearToOutputTexel( gl_FragColor );",Up=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Np=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Fp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Op=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,zp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Bp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,kp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Hp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Gp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Vp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Wp=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Xp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,qp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Yp=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Kp=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,$p=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Jp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Zp=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,jp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Qp=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,tm=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,em=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,nm=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,im=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,sm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,rm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,om=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,am=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,lm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,cm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,hm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,um=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,fm=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,dm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,pm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,mm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,gm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,vm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,xm=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,_m=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Mm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Sm=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,ym=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Em=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,bm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,wm=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Tm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Am=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Rm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Cm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Pm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Lm=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Dm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Im=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Um=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Nm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Fm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Om=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,zm=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Bm=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,km=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Hm=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Gm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Vm=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Wm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Xm=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,qm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ym=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Km=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,$m=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Jm=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Zm=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,jm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Qm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,t0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,e0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const n0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,i0=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,s0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,r0=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,o0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,a0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,l0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,c0=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,h0=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,u0=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,f0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,d0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,p0=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,m0=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,g0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,v0=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,x0=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,_0=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,M0=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,S0=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,y0=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,E0=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,b0=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,w0=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,T0=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,A0=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,R0=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,C0=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,P0=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,L0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,D0=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,I0=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,U0=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,N0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,jt={alphahash_fragment:ip,alphahash_pars_fragment:sp,alphamap_fragment:rp,alphamap_pars_fragment:op,alphatest_fragment:ap,alphatest_pars_fragment:lp,aomap_fragment:cp,aomap_pars_fragment:hp,batching_pars_vertex:up,batching_vertex:fp,begin_vertex:dp,beginnormal_vertex:pp,bsdfs:mp,iridescence_fragment:gp,bumpmap_pars_fragment:vp,clipping_planes_fragment:xp,clipping_planes_pars_fragment:_p,clipping_planes_pars_vertex:Mp,clipping_planes_vertex:Sp,color_fragment:yp,color_pars_fragment:Ep,color_pars_vertex:bp,color_vertex:wp,common:Tp,cube_uv_reflection_fragment:Ap,defaultnormal_vertex:Rp,displacementmap_pars_vertex:Cp,displacementmap_vertex:Pp,emissivemap_fragment:Lp,emissivemap_pars_fragment:Dp,colorspace_fragment:Ip,colorspace_pars_fragment:Up,envmap_fragment:Np,envmap_common_pars_fragment:Fp,envmap_pars_fragment:Op,envmap_pars_vertex:zp,envmap_physical_pars_fragment:$p,envmap_vertex:Bp,fog_vertex:kp,fog_pars_vertex:Hp,fog_fragment:Gp,fog_pars_fragment:Vp,gradientmap_pars_fragment:Wp,lightmap_pars_fragment:Xp,lights_lambert_fragment:qp,lights_lambert_pars_fragment:Yp,lights_pars_begin:Kp,lights_toon_fragment:Jp,lights_toon_pars_fragment:Zp,lights_phong_fragment:jp,lights_phong_pars_fragment:Qp,lights_physical_fragment:tm,lights_physical_pars_fragment:em,lights_fragment_begin:nm,lights_fragment_maps:im,lights_fragment_end:sm,logdepthbuf_fragment:rm,logdepthbuf_pars_fragment:om,logdepthbuf_pars_vertex:am,logdepthbuf_vertex:lm,map_fragment:cm,map_pars_fragment:hm,map_particle_fragment:um,map_particle_pars_fragment:fm,metalnessmap_fragment:dm,metalnessmap_pars_fragment:pm,morphinstance_vertex:mm,morphcolor_vertex:gm,morphnormal_vertex:vm,morphtarget_pars_vertex:xm,morphtarget_vertex:_m,normal_fragment_begin:Mm,normal_fragment_maps:Sm,normal_pars_fragment:ym,normal_pars_vertex:Em,normal_vertex:bm,normalmap_pars_fragment:wm,clearcoat_normal_fragment_begin:Tm,clearcoat_normal_fragment_maps:Am,clearcoat_pars_fragment:Rm,iridescence_pars_fragment:Cm,opaque_fragment:Pm,packing:Lm,premultiplied_alpha_fragment:Dm,project_vertex:Im,dithering_fragment:Um,dithering_pars_fragment:Nm,roughnessmap_fragment:Fm,roughnessmap_pars_fragment:Om,shadowmap_pars_fragment:zm,shadowmap_pars_vertex:Bm,shadowmap_vertex:km,shadowmask_pars_fragment:Hm,skinbase_vertex:Gm,skinning_pars_vertex:Vm,skinning_vertex:Wm,skinnormal_vertex:Xm,specularmap_fragment:qm,specularmap_pars_fragment:Ym,tonemapping_fragment:Km,tonemapping_pars_fragment:$m,transmission_fragment:Jm,transmission_pars_fragment:Zm,uv_pars_fragment:jm,uv_pars_vertex:Qm,uv_vertex:t0,worldpos_vertex:e0,background_vert:n0,background_frag:i0,backgroundCube_vert:s0,backgroundCube_frag:r0,cube_vert:o0,cube_frag:a0,depth_vert:l0,depth_frag:c0,distanceRGBA_vert:h0,distanceRGBA_frag:u0,equirect_vert:f0,equirect_frag:d0,linedashed_vert:p0,linedashed_frag:m0,meshbasic_vert:g0,meshbasic_frag:v0,meshlambert_vert:x0,meshlambert_frag:_0,meshmatcap_vert:M0,meshmatcap_frag:S0,meshnormal_vert:y0,meshnormal_frag:E0,meshphong_vert:b0,meshphong_frag:w0,meshphysical_vert:T0,meshphysical_frag:A0,meshtoon_vert:R0,meshtoon_frag:C0,points_vert:P0,points_frag:L0,shadow_vert:D0,shadow_frag:I0,sprite_vert:U0,sprite_frag:N0},Mt={common:{diffuse:{value:new kt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Zt},alphaMap:{value:null},alphaMapTransform:{value:new Zt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Zt}},envmap:{envMap:{value:null},envMapRotation:{value:new Zt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Zt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Zt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Zt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Zt},normalScale:{value:new rt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Zt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Zt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Zt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Zt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new kt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new kt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Zt},alphaTest:{value:0},uvTransform:{value:new Zt}},sprite:{diffuse:{value:new kt(16777215)},opacity:{value:1},center:{value:new rt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Zt},alphaMap:{value:null},alphaMapTransform:{value:new Zt},alphaTest:{value:0}}},xn={basic:{uniforms:Ue([Mt.common,Mt.specularmap,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.fog]),vertexShader:jt.meshbasic_vert,fragmentShader:jt.meshbasic_frag},lambert:{uniforms:Ue([Mt.common,Mt.specularmap,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.fog,Mt.lights,{emissive:{value:new kt(0)}}]),vertexShader:jt.meshlambert_vert,fragmentShader:jt.meshlambert_frag},phong:{uniforms:Ue([Mt.common,Mt.specularmap,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.fog,Mt.lights,{emissive:{value:new kt(0)},specular:{value:new kt(1118481)},shininess:{value:30}}]),vertexShader:jt.meshphong_vert,fragmentShader:jt.meshphong_frag},standard:{uniforms:Ue([Mt.common,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.roughnessmap,Mt.metalnessmap,Mt.fog,Mt.lights,{emissive:{value:new kt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:jt.meshphysical_vert,fragmentShader:jt.meshphysical_frag},toon:{uniforms:Ue([Mt.common,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.gradientmap,Mt.fog,Mt.lights,{emissive:{value:new kt(0)}}]),vertexShader:jt.meshtoon_vert,fragmentShader:jt.meshtoon_frag},matcap:{uniforms:Ue([Mt.common,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.fog,{matcap:{value:null}}]),vertexShader:jt.meshmatcap_vert,fragmentShader:jt.meshmatcap_frag},points:{uniforms:Ue([Mt.points,Mt.fog]),vertexShader:jt.points_vert,fragmentShader:jt.points_frag},dashed:{uniforms:Ue([Mt.common,Mt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:jt.linedashed_vert,fragmentShader:jt.linedashed_frag},depth:{uniforms:Ue([Mt.common,Mt.displacementmap]),vertexShader:jt.depth_vert,fragmentShader:jt.depth_frag},normal:{uniforms:Ue([Mt.common,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,{opacity:{value:1}}]),vertexShader:jt.meshnormal_vert,fragmentShader:jt.meshnormal_frag},sprite:{uniforms:Ue([Mt.sprite,Mt.fog]),vertexShader:jt.sprite_vert,fragmentShader:jt.sprite_frag},background:{uniforms:{uvTransform:{value:new Zt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:jt.background_vert,fragmentShader:jt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Zt}},vertexShader:jt.backgroundCube_vert,fragmentShader:jt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:jt.cube_vert,fragmentShader:jt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:jt.equirect_vert,fragmentShader:jt.equirect_frag},distanceRGBA:{uniforms:Ue([Mt.common,Mt.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:jt.distanceRGBA_vert,fragmentShader:jt.distanceRGBA_frag},shadow:{uniforms:Ue([Mt.lights,Mt.fog,{color:{value:new kt(0)},opacity:{value:1}}]),vertexShader:jt.shadow_vert,fragmentShader:jt.shadow_frag}};xn.physical={uniforms:Ue([xn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Zt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Zt},clearcoatNormalScale:{value:new rt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Zt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Zt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Zt},sheen:{value:0},sheenColor:{value:new kt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Zt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Zt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Zt},transmissionSamplerSize:{value:new rt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Zt},attenuationDistance:{value:0},attenuationColor:{value:new kt(0)},specularColor:{value:new kt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Zt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Zt},anisotropyVector:{value:new rt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Zt}}]),vertexShader:jt.meshphysical_vert,fragmentShader:jt.meshphysical_frag};const Ar={r:0,b:0,g:0},hi=new an,F0=new te;function O0(i,t,e,n,s,r,o){const a=new kt(0);let l=r===!0?0:1,c,h,u=null,f=0,d=null;function g(_){let v=_.isScene===!0?_.background:null;return v&&v.isTexture&&(v=(_.backgroundBlurriness>0?e:t).get(v)),v}function x(_){let v=!1;const T=g(_);T===null?p(a,l):T&&T.isColor&&(p(T,1),v=!0);const A=i.xr.getEnvironmentBlendMode();A==="additive"?n.buffers.color.setClear(0,0,0,1,o):A==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||v)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(_,v){const T=g(v);T&&(T.isCubeTexture||T.mapping===Qr)?(h===void 0&&(h=new ve(new bn(1,1,1),new Ee({name:"BackgroundCubeMaterial",uniforms:os(xn.backgroundCube.uniforms),vertexShader:xn.backgroundCube.vertexShader,fragmentShader:xn.backgroundCube.fragmentShader,side:ze,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(A,C,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),hi.copy(v.backgroundRotation),hi.x*=-1,hi.y*=-1,hi.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(hi.y*=-1,hi.z*=-1),h.material.uniforms.envMap.value=T,h.material.uniforms.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(F0.makeRotationFromEuler(hi)),h.material.toneMapped=ne.getTransfer(T.colorSpace)!==oe,(u!==T||f!==T.version||d!==i.toneMapping)&&(h.material.needsUpdate=!0,u=T,f=T.version,d=i.toneMapping),h.layers.enableAll(),_.unshift(h,h.geometry,h.material,0,0,null)):T&&T.isTexture&&(c===void 0&&(c=new ve(new ln(2,2),new Ee({name:"BackgroundMaterial",uniforms:os(xn.background.uniforms),vertexShader:xn.background.vertexShader,fragmentShader:xn.background.fragmentShader,side:Gn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=T,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=ne.getTransfer(T.colorSpace)!==oe,T.matrixAutoUpdate===!0&&T.updateMatrix(),c.material.uniforms.uvTransform.value.copy(T.matrix),(u!==T||f!==T.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,u=T,f=T.version,d=i.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null))}function p(_,v){_.getRGB(Ar,Xh(i)),n.buffers.color.setClear(Ar.r,Ar.g,Ar.b,v,o)}function S(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(_,v=1){a.set(_),l=v,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(_){l=_,p(a,l)},render:x,addToRenderList:m,dispose:S}}function z0(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null);let r=s,o=!1;function a(y,D,I,O,B){let H=!1;const X=u(O,I,D);r!==X&&(r=X,c(r.object)),H=d(y,O,I,B),H&&g(y,O,I,B),B!==null&&t.update(B,i.ELEMENT_ARRAY_BUFFER),(H||o)&&(o=!1,v(y,D,I,O),B!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(B).buffer))}function l(){return i.createVertexArray()}function c(y){return i.bindVertexArray(y)}function h(y){return i.deleteVertexArray(y)}function u(y,D,I){const O=I.wireframe===!0;let B=n[y.id];B===void 0&&(B={},n[y.id]=B);let H=B[D.id];H===void 0&&(H={},B[D.id]=H);let X=H[O];return X===void 0&&(X=f(l()),H[O]=X),X}function f(y){const D=[],I=[],O=[];for(let B=0;B<e;B++)D[B]=0,I[B]=0,O[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:I,attributeDivisors:O,object:y,attributes:{},index:null}}function d(y,D,I,O){const B=r.attributes,H=D.attributes;let X=0;const tt=I.getAttributes();for(const q in tt)if(tt[q].location>=0){const st=B[q];let xt=H[q];if(xt===void 0&&(q==="instanceMatrix"&&y.instanceMatrix&&(xt=y.instanceMatrix),q==="instanceColor"&&y.instanceColor&&(xt=y.instanceColor)),st===void 0||st.attribute!==xt||xt&&st.data!==xt.data)return!0;X++}return r.attributesNum!==X||r.index!==O}function g(y,D,I,O){const B={},H=D.attributes;let X=0;const tt=I.getAttributes();for(const q in tt)if(tt[q].location>=0){let st=H[q];st===void 0&&(q==="instanceMatrix"&&y.instanceMatrix&&(st=y.instanceMatrix),q==="instanceColor"&&y.instanceColor&&(st=y.instanceColor));const xt={};xt.attribute=st,st&&st.data&&(xt.data=st.data),B[q]=xt,X++}r.attributes=B,r.attributesNum=X,r.index=O}function x(){const y=r.newAttributes;for(let D=0,I=y.length;D<I;D++)y[D]=0}function m(y){p(y,0)}function p(y,D){const I=r.newAttributes,O=r.enabledAttributes,B=r.attributeDivisors;I[y]=1,O[y]===0&&(i.enableVertexAttribArray(y),O[y]=1),B[y]!==D&&(i.vertexAttribDivisor(y,D),B[y]=D)}function S(){const y=r.newAttributes,D=r.enabledAttributes;for(let I=0,O=D.length;I<O;I++)D[I]!==y[I]&&(i.disableVertexAttribArray(I),D[I]=0)}function _(y,D,I,O,B,H,X){X===!0?i.vertexAttribIPointer(y,D,I,B,H):i.vertexAttribPointer(y,D,I,O,B,H)}function v(y,D,I,O){x();const B=O.attributes,H=I.getAttributes(),X=D.defaultAttributeValues;for(const tt in H){const q=H[tt];if(q.location>=0){let ct=B[tt];if(ct===void 0&&(tt==="instanceMatrix"&&y.instanceMatrix&&(ct=y.instanceMatrix),tt==="instanceColor"&&y.instanceColor&&(ct=y.instanceColor)),ct!==void 0){const st=ct.normalized,xt=ct.itemSize,At=t.get(ct);if(At===void 0)continue;const qt=At.buffer,$t=At.type,Ot=At.bytesPerElement,et=$t===i.INT||$t===i.UNSIGNED_INT||ct.gpuType===rl;if(ct.isInterleavedBufferAttribute){const it=ct.data,wt=it.stride,Pt=ct.offset;if(it.isInstancedInterleavedBuffer){for(let mt=0;mt<q.locationSize;mt++)p(q.location+mt,it.meshPerAttribute);y.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=it.meshPerAttribute*it.count)}else for(let mt=0;mt<q.locationSize;mt++)m(q.location+mt);i.bindBuffer(i.ARRAY_BUFFER,qt);for(let mt=0;mt<q.locationSize;mt++)_(q.location+mt,xt/q.locationSize,$t,st,wt*Ot,(Pt+xt/q.locationSize*mt)*Ot,et)}else{if(ct.isInstancedBufferAttribute){for(let it=0;it<q.locationSize;it++)p(q.location+it,ct.meshPerAttribute);y.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=ct.meshPerAttribute*ct.count)}else for(let it=0;it<q.locationSize;it++)m(q.location+it);i.bindBuffer(i.ARRAY_BUFFER,qt);for(let it=0;it<q.locationSize;it++)_(q.location+it,xt/q.locationSize,$t,st,xt*Ot,xt/q.locationSize*it*Ot,et)}}else if(X!==void 0){const st=X[tt];if(st!==void 0)switch(st.length){case 2:i.vertexAttrib2fv(q.location,st);break;case 3:i.vertexAttrib3fv(q.location,st);break;case 4:i.vertexAttrib4fv(q.location,st);break;default:i.vertexAttrib1fv(q.location,st)}}}}S()}function T(){P();for(const y in n){const D=n[y];for(const I in D){const O=D[I];for(const B in O)h(O[B].object),delete O[B];delete D[I]}delete n[y]}}function A(y){if(n[y.id]===void 0)return;const D=n[y.id];for(const I in D){const O=D[I];for(const B in O)h(O[B].object),delete O[B];delete D[I]}delete n[y.id]}function C(y){for(const D in n){const I=n[D];if(I[y.id]===void 0)continue;const O=I[y.id];for(const B in O)h(O[B].object),delete O[B];delete I[y.id]}}function P(){E(),o=!0,r!==s&&(r=s,c(r.object))}function E(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:P,resetDefaultState:E,dispose:T,releaseStatesOfGeometry:A,releaseStatesOfProgram:C,initAttributes:x,enableAttribute:m,disableUnusedAttributes:S}}function B0(i,t,e){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),e.update(h,n,1)}function o(c,h,u){u!==0&&(i.drawArraysInstanced(n,c,h,u),e.update(h,n,u))}function a(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let d=0;for(let g=0;g<u;g++)d+=h[g];e.update(d,n,1)}function l(c,h,u,f){if(u===0)return;const d=t.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<c.length;g++)o(c[g],h[g],f[g]);else{d.multiDrawArraysInstancedWEBGL(n,c,0,h,0,f,0,u);let g=0;for(let x=0;x<u;x++)g+=h[x]*f[x];e.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function k0(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const C=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(C){return!(C!==nn&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(C){const P=C===zn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(C!==yn&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==Mn&&!P)}function l(C){if(C==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=e.logarithmicDepthBuffer===!0,f=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),S=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),_=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),T=g>0,A=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:f,maxTextures:d,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:S,maxVaryings:_,maxFragmentUniforms:v,vertexTextures:T,maxSamples:A}}function H0(i){const t=this;let e=null,n=0,s=!1,r=!1;const o=new Qn,a=new Zt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){const d=u.length!==0||f||n!==0||s;return s=f,n=u.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){e=h(u,f,0)},this.setState=function(u,f,d){const g=u.clippingPlanes,x=u.clipIntersection,m=u.clipShadows,p=i.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{const S=r?0:n,_=S*4;let v=p.clippingState||null;l.value=v,v=h(g,f,_,d);for(let T=0;T!==_;++T)v[T]=e[T];p.clippingState=v,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,f,d,g){const x=u!==null?u.length:0;let m=null;if(x!==0){if(m=l.value,g!==!0||m===null){const p=d+x*4,S=f.matrixWorldInverse;a.getNormalMatrix(S),(m===null||m.length<p)&&(m=new Float32Array(p));for(let _=0,v=d;_!==x;++_,v+=4)o.copy(u[_]).applyMatrix4(S,a),o.normal.toArray(m,v),m[v+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,m}}function G0(i){let t=new WeakMap;function e(o,a){return a===pa?o.mapping=es:a===ma&&(o.mapping=ns),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===pa||a===ma)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new ed(l.height);return c.fromEquirectangularTexture(i,o),t.set(o,c),o.addEventListener("dispose",s),e(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}const Zi=4,Ac=[.125,.215,.35,.446,.526,.582],mi=20,qo=new Rl,Rc=new kt;let Yo=null,Ko=0,$o=0,Jo=!1;const fi=(1+Math.sqrt(5))/2,Yi=1/fi,Cc=[new L(-fi,Yi,0),new L(fi,Yi,0),new L(-Yi,0,fi),new L(Yi,0,fi),new L(0,fi,-Yi),new L(0,fi,Yi),new L(-1,1,-1),new L(1,1,-1),new L(-1,1,1),new L(1,1,1)],V0=new L;class Pc{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100,r={}){const{size:o=256,position:a=V0}=r;Yo=this._renderer.getRenderTarget(),Ko=this._renderer.getActiveCubeFace(),$o=this._renderer.getActiveMipmapLevel(),Jo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,s,l,a),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ic(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Dc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Yo,Ko,$o),this._renderer.xr.enabled=Jo,t.scissorTest=!1,Rr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===es||t.mapping===ns?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Yo=this._renderer.getRenderTarget(),Ko=this._renderer.getActiveCubeFace(),$o=this._renderer.getActiveMipmapLevel(),Jo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:en,minFilter:en,generateMipmaps:!1,type:zn,format:nn,colorSpace:ss,depthBuffer:!1},s=Lc(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Lc(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=W0(r)),this._blurMaterial=X0(r,t,e)}return s}_compileMaterial(t){const e=new ve(this._lodPlanes[0],t);this._renderer.compile(e,qo)}_sceneToCubeUV(t,e,n,s,r){const l=new Fe(90,1,e,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,d=u.toneMapping;u.getClearColor(Rc),u.toneMapping=ei,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(s),u.clearDepth(),u.setRenderTarget(null));const x=new _n({name:"PMREM.Background",side:ze,depthWrite:!1,depthTest:!1}),m=new ve(new bn,x);let p=!1;const S=t.background;S?S.isColor&&(x.color.copy(S),t.background=null,p=!0):(x.color.copy(Rc),p=!0);for(let _=0;_<6;_++){const v=_%3;v===0?(l.up.set(0,c[_],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[_],r.y,r.z)):v===1?(l.up.set(0,0,c[_]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[_],r.z)):(l.up.set(0,c[_],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[_]));const T=this._cubeSize;Rr(s,v*T,_>2?T:0,T,T),u.setRenderTarget(s),p&&u.render(m,l),u.render(t,l)}m.geometry.dispose(),m.material.dispose(),u.toneMapping=d,u.autoClear=f,t.background=S}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===es||t.mapping===ns;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ic()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Dc());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new ve(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const l=this._cubeSize;Rr(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,qo)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Cc[(s-r-1)%Cc.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new ve(this._lodPlanes[s],c),f=c.uniforms,d=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*mi-1),x=r/g,m=isFinite(r)?1+Math.floor(h*x):mi;m>mi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${mi}`);const p=[];let S=0;for(let C=0;C<mi;++C){const P=C/x,E=Math.exp(-P*P/2);p.push(E),C===0?S+=E:C<m&&(S+=2*E)}for(let C=0;C<p.length;C++)p[C]=p[C]/S;f.envMap.value=t.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:_}=this;f.dTheta.value=g,f.mipInt.value=_-n;const v=this._sizeLods[s],T=3*v*(s>_-Zi?s-_+Zi:0),A=4*(this._cubeSize-v);Rr(e,T,A,3*v,2*v),l.setRenderTarget(e),l.render(u,qo)}}function W0(i){const t=[],e=[],n=[];let s=i;const r=i-Zi+1+Ac.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let l=1/a;o>i-Zi?l=Ac[o-i+Zi-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),h=-c,u=1+c,f=[h,h,u,h,u,u,h,h,u,u,h,u],d=6,g=6,x=3,m=2,p=1,S=new Float32Array(x*g*d),_=new Float32Array(m*g*d),v=new Float32Array(p*g*d);for(let A=0;A<d;A++){const C=A%3*2/3-1,P=A>2?0:-1,E=[C,P,0,C+2/3,P,0,C+2/3,P+1,0,C,P,0,C+2/3,P+1,0,C,P+1,0];S.set(E,x*g*A),_.set(f,m*g*A);const y=[A,A,A,A,A,A];v.set(y,p*g*A)}const T=new ue;T.setAttribute("position",new Me(S,x)),T.setAttribute("uv",new Me(_,m)),T.setAttribute("faceIndex",new Me(v,p)),t.push(T),s>Zi&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Lc(i,t,e){const n=new sn(i,t,e);return n.texture.mapping=Qr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Rr(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function X0(i,t,e){const n=new Float32Array(mi),s=new L(0,1,0);return new Ee({name:"SphericalGaussianBlur",defines:{n:mi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Cl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:On,depthTest:!1,depthWrite:!1})}function Dc(){return new Ee({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Cl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:On,depthTest:!1,depthWrite:!1})}function Ic(){return new Ee({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Cl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:On,depthTest:!1,depthWrite:!1})}function Cl(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function q0(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===pa||l===ma,h=l===es||l===ns;if(c||h){let u=t.get(a);const f=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return e===null&&(e=new Pc(i)),u=c?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{const d=a.image;return c&&d&&d.height>0||h&&d&&s(d)?(e===null&&(e=new Pc(i)),u=c?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function Y0(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&Ys("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function K0(i,t,e,n){const s={},r=new WeakMap;function o(u){const f=u.target;f.index!==null&&t.remove(f.index);for(const g in f.attributes)t.remove(f.attributes[g]);f.removeEventListener("dispose",o),delete s[f.id];const d=r.get(f);d&&(t.remove(d),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(u,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,e.memory.geometries++),f}function l(u){const f=u.attributes;for(const d in f)t.update(f[d],i.ARRAY_BUFFER)}function c(u){const f=[],d=u.index,g=u.attributes.position;let x=0;if(d!==null){const S=d.array;x=d.version;for(let _=0,v=S.length;_<v;_+=3){const T=S[_+0],A=S[_+1],C=S[_+2];f.push(T,A,A,C,C,T)}}else if(g!==void 0){const S=g.array;x=g.version;for(let _=0,v=S.length/3-1;_<v;_+=3){const T=_+0,A=_+1,C=_+2;f.push(T,A,A,C,C,T)}}else return;const m=new(zh(f)?Wh:Vh)(f,1);m.version=x;const p=r.get(u);p&&t.remove(p),r.set(u,m)}function h(u){const f=r.get(u);if(f){const d=u.index;d!==null&&f.version<d.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function $0(i,t,e){let n;function s(f){n=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function l(f,d){i.drawElements(n,d,r,f*o),e.update(d,n,1)}function c(f,d,g){g!==0&&(i.drawElementsInstanced(n,d,r,f*o,g),e.update(d,n,g))}function h(f,d,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,f,0,g);let m=0;for(let p=0;p<g;p++)m+=d[p];e.update(m,n,1)}function u(f,d,g,x){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<f.length;p++)c(f[p]/o,d[p],x[p]);else{m.multiDrawElementsInstancedWEBGL(n,d,0,r,f,0,x,0,g);let p=0;for(let S=0;S<g;S++)p+=d[S]*x[S];e.update(p,n,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function J0(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Z0(i,t,e){const n=new WeakMap,s=new se;function r(o,a,l){const c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let f=n.get(a);if(f===void 0||f.count!==u){let y=function(){P.dispose(),n.delete(a),a.removeEventListener("dispose",y)};var d=y;f!==void 0&&f.texture.dispose();const g=a.morphAttributes.position!==void 0,x=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],S=a.morphAttributes.normal||[],_=a.morphAttributes.color||[];let v=0;g===!0&&(v=1),x===!0&&(v=2),m===!0&&(v=3);let T=a.attributes.position.count*v,A=1;T>t.maxTextureSize&&(A=Math.ceil(T/t.maxTextureSize),T=t.maxTextureSize);const C=new Float32Array(T*A*4*u),P=new Bh(C,T,A,u);P.type=Mn,P.needsUpdate=!0;const E=v*4;for(let D=0;D<u;D++){const I=p[D],O=S[D],B=_[D],H=T*A*4*D;for(let X=0;X<I.count;X++){const tt=X*E;g===!0&&(s.fromBufferAttribute(I,X),C[H+tt+0]=s.x,C[H+tt+1]=s.y,C[H+tt+2]=s.z,C[H+tt+3]=0),x===!0&&(s.fromBufferAttribute(O,X),C[H+tt+4]=s.x,C[H+tt+5]=s.y,C[H+tt+6]=s.z,C[H+tt+7]=0),m===!0&&(s.fromBufferAttribute(B,X),C[H+tt+8]=s.x,C[H+tt+9]=s.y,C[H+tt+10]=s.z,C[H+tt+11]=B.itemSize===4?s.w:1)}}f={count:u,texture:P,size:new rt(T,A)},n.set(a,f),a.addEventListener("dispose",y)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const x=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(i,"morphTargetBaseInfluence",x),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function j0(i,t,e,n){let s=new WeakMap;function r(l){const c=n.render.frame,h=l.geometry,u=t.get(l,h);if(s.get(u)!==c&&(t.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return u}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}const au=new Re,Uc=new $h(1,1),lu=new Bh,cu=new Bf,hu=new Yh,Nc=[],Fc=[],Oc=new Float32Array(16),zc=new Float32Array(9),Bc=new Float32Array(4);function vs(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=Nc[s];if(r===void 0&&(r=new Float32Array(s),Nc[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function be(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function we(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function so(i,t){let e=Fc[t];e===void 0&&(e=new Int32Array(t),Fc[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Q0(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function tg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(be(e,t))return;i.uniform2fv(this.addr,t),we(e,t)}}function eg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(be(e,t))return;i.uniform3fv(this.addr,t),we(e,t)}}function ng(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(be(e,t))return;i.uniform4fv(this.addr,t),we(e,t)}}function ig(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(be(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),we(e,t)}else{if(be(e,n))return;Bc.set(n),i.uniformMatrix2fv(this.addr,!1,Bc),we(e,n)}}function sg(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(be(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),we(e,t)}else{if(be(e,n))return;zc.set(n),i.uniformMatrix3fv(this.addr,!1,zc),we(e,n)}}function rg(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(be(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),we(e,t)}else{if(be(e,n))return;Oc.set(n),i.uniformMatrix4fv(this.addr,!1,Oc),we(e,n)}}function og(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function ag(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(be(e,t))return;i.uniform2iv(this.addr,t),we(e,t)}}function lg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(be(e,t))return;i.uniform3iv(this.addr,t),we(e,t)}}function cg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(be(e,t))return;i.uniform4iv(this.addr,t),we(e,t)}}function hg(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function ug(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(be(e,t))return;i.uniform2uiv(this.addr,t),we(e,t)}}function fg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(be(e,t))return;i.uniform3uiv(this.addr,t),we(e,t)}}function dg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(be(e,t))return;i.uniform4uiv(this.addr,t),we(e,t)}}function pg(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Uc.compareFunction=Oh,r=Uc):r=au,e.setTexture2D(t||r,s)}function mg(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||cu,s)}function gg(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||hu,s)}function vg(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||lu,s)}function xg(i){switch(i){case 5126:return Q0;case 35664:return tg;case 35665:return eg;case 35666:return ng;case 35674:return ig;case 35675:return sg;case 35676:return rg;case 5124:case 35670:return og;case 35667:case 35671:return ag;case 35668:case 35672:return lg;case 35669:case 35673:return cg;case 5125:return hg;case 36294:return ug;case 36295:return fg;case 36296:return dg;case 35678:case 36198:case 36298:case 36306:case 35682:return pg;case 35679:case 36299:case 36307:return mg;case 35680:case 36300:case 36308:case 36293:return gg;case 36289:case 36303:case 36311:case 36292:return vg}}function _g(i,t){i.uniform1fv(this.addr,t)}function Mg(i,t){const e=vs(t,this.size,2);i.uniform2fv(this.addr,e)}function Sg(i,t){const e=vs(t,this.size,3);i.uniform3fv(this.addr,e)}function yg(i,t){const e=vs(t,this.size,4);i.uniform4fv(this.addr,e)}function Eg(i,t){const e=vs(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function bg(i,t){const e=vs(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function wg(i,t){const e=vs(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Tg(i,t){i.uniform1iv(this.addr,t)}function Ag(i,t){i.uniform2iv(this.addr,t)}function Rg(i,t){i.uniform3iv(this.addr,t)}function Cg(i,t){i.uniform4iv(this.addr,t)}function Pg(i,t){i.uniform1uiv(this.addr,t)}function Lg(i,t){i.uniform2uiv(this.addr,t)}function Dg(i,t){i.uniform3uiv(this.addr,t)}function Ig(i,t){i.uniform4uiv(this.addr,t)}function Ug(i,t,e){const n=this.cache,s=t.length,r=so(e,s);be(n,r)||(i.uniform1iv(this.addr,r),we(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||au,r[o])}function Ng(i,t,e){const n=this.cache,s=t.length,r=so(e,s);be(n,r)||(i.uniform1iv(this.addr,r),we(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||cu,r[o])}function Fg(i,t,e){const n=this.cache,s=t.length,r=so(e,s);be(n,r)||(i.uniform1iv(this.addr,r),we(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||hu,r[o])}function Og(i,t,e){const n=this.cache,s=t.length,r=so(e,s);be(n,r)||(i.uniform1iv(this.addr,r),we(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||lu,r[o])}function zg(i){switch(i){case 5126:return _g;case 35664:return Mg;case 35665:return Sg;case 35666:return yg;case 35674:return Eg;case 35675:return bg;case 35676:return wg;case 5124:case 35670:return Tg;case 35667:case 35671:return Ag;case 35668:case 35672:return Rg;case 35669:case 35673:return Cg;case 5125:return Pg;case 36294:return Lg;case 36295:return Dg;case 36296:return Ig;case 35678:case 36198:case 36298:case 36306:case 35682:return Ug;case 35679:case 36299:case 36307:return Ng;case 35680:case 36300:case 36308:case 36293:return Fg;case 36289:case 36303:case 36311:case 36292:return Og}}class Bg{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=xg(e.type)}}class kg{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=zg(e.type)}}class Hg{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],n)}}}const Zo=/(\w+)(\])?(\[|\.)?/g;function kc(i,t){i.seq.push(t),i.map[t.id]=t}function Gg(i,t,e){const n=i.name,s=n.length;for(Zo.lastIndex=0;;){const r=Zo.exec(n),o=Zo.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){kc(e,c===void 0?new Bg(a,i,t):new kg(a,i,t));break}else{let u=e.map[a];u===void 0&&(u=new Hg(a),kc(e,u)),e=u}}}class kr{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);Gg(r,o,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&n.push(o)}return n}}function Hc(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const Vg=37297;let Wg=0;function Xg(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}const Gc=new Zt;function qg(i){ne._getMatrix(Gc,ne.workingColorSpace,i);const t=`mat3( ${Gc.elements.map(e=>e.toFixed(4))} )`;switch(ne.getTransfer(i)){case Wr:return[t,"LinearTransferOETF"];case oe:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Vc(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+Xg(i.getShaderSource(t),a)}else return r}function Yg(i,t){const e=qg(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Kg(i,t){let e;switch(t){case yh:e="Linear";break;case Eh:e="Reinhard";break;case bh:e="Cineon";break;case sl:e="ACESFilmic";break;case Th:e="AgX";break;case Ah:e="Neutral";break;case wh:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Cr=new L;function $g(){ne.getLuminanceCoefficients(Cr);const i=Cr.x.toFixed(4),t=Cr.y.toFixed(4),e=Cr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Jg(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Rs).join(`
`)}function Zg(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function jg(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function Rs(i){return i!==""}function Wc(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Xc(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Qg=/^[ \t]*#include +<([\w\d./]+)>/gm;function $a(i){return i.replace(Qg,ev)}const tv=new Map;function ev(i,t){let e=jt[t];if(e===void 0){const n=tv.get(t);if(n!==void 0)e=jt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return $a(e)}const nv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function qc(i){return i.replace(nv,iv)}function iv(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Yc(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function sv(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Mh?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Ou?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===In&&(t="SHADOWMAP_TYPE_VSM"),t}function rv(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case es:case ns:t="ENVMAP_TYPE_CUBE";break;case Qr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function ov(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case ns:t="ENVMAP_MODE_REFRACTION";break}return t}function av(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Sh:t="ENVMAP_BLENDING_MULTIPLY";break;case nf:t="ENVMAP_BLENDING_MIX";break;case sf:t="ENVMAP_BLENDING_ADD";break}return t}function lv(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function cv(i,t,e,n){const s=i.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=sv(e),c=rv(e),h=ov(e),u=av(e),f=lv(e),d=Jg(e),g=Zg(r),x=s.createProgram();let m,p,S=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Rs).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Rs).join(`
`),p.length>0&&(p+=`
`)):(m=[Yc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Rs).join(`
`),p=[Yc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ei?"#define TONE_MAPPING":"",e.toneMapping!==ei?jt.tonemapping_pars_fragment:"",e.toneMapping!==ei?Kg("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",jt.colorspace_pars_fragment,Yg("linearToOutputTexel",e.outputColorSpace),$g(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Rs).join(`
`)),o=$a(o),o=Wc(o,e),o=Xc(o,e),a=$a(a),a=Wc(a,e),a=Xc(a,e),o=qc(o),a=qc(a),e.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===Kl?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Kl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const _=S+m+o,v=S+p+a,T=Hc(s,s.VERTEX_SHADER,_),A=Hc(s,s.FRAGMENT_SHADER,v);s.attachShader(x,T),s.attachShader(x,A),e.index0AttributeName!==void 0?s.bindAttribLocation(x,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function C(D){if(i.debug.checkShaderErrors){const I=s.getProgramInfoLog(x)||"",O=s.getShaderInfoLog(T)||"",B=s.getShaderInfoLog(A)||"",H=I.trim(),X=O.trim(),tt=B.trim();let q=!0,ct=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(q=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,T,A);else{const st=Vc(s,T,"vertex"),xt=Vc(s,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+H+`
`+st+`
`+xt)}else H!==""?console.warn("THREE.WebGLProgram: Program Info Log:",H):(X===""||tt==="")&&(ct=!1);ct&&(D.diagnostics={runnable:q,programLog:H,vertexShader:{log:X,prefix:m},fragmentShader:{log:tt,prefix:p}})}s.deleteShader(T),s.deleteShader(A),P=new kr(s,x),E=jg(s,x)}let P;this.getUniforms=function(){return P===void 0&&C(this),P};let E;this.getAttributes=function(){return E===void 0&&C(this),E};let y=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=s.getProgramParameter(x,Vg)),y},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Wg++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=T,this.fragmentShader=A,this}let hv=0;class uv{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new fv(t),e.set(t,n)),n}}class fv{constructor(t){this.id=hv++,this.code=t,this.usedTimes=0}}function dv(i,t,e,n,s,r,o){const a=new Hh,l=new uv,c=new Set,h=[],u=s.logarithmicDepthBuffer,f=s.vertexTextures;let d=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(E){return c.add(E),E===0?"uv":`uv${E}`}function m(E,y,D,I,O){const B=I.fog,H=O.geometry,X=E.isMeshStandardMaterial?I.environment:null,tt=(E.isMeshStandardMaterial?e:t).get(E.envMap||X),q=tt&&tt.mapping===Qr?tt.image.height:null,ct=g[E.type];E.precision!==null&&(d=s.getMaxPrecision(E.precision),d!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",d,"instead."));const st=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,xt=st!==void 0?st.length:0;let At=0;H.morphAttributes.position!==void 0&&(At=1),H.morphAttributes.normal!==void 0&&(At=2),H.morphAttributes.color!==void 0&&(At=3);let qt,$t,Ot,et;if(ct){const re=xn[ct];qt=re.vertexShader,$t=re.fragmentShader}else qt=E.vertexShader,$t=E.fragmentShader,l.update(E),Ot=l.getVertexShaderID(E),et=l.getFragmentShaderID(E);const it=i.getRenderTarget(),wt=i.state.buffers.depth.getReversed(),Pt=O.isInstancedMesh===!0,mt=O.isBatchedMesh===!0,Wt=!!E.map,lt=!!E.matcap,R=!!tt,k=!!E.aoMap,W=!!E.lightMap,G=!!E.bumpMap,K=!!E.normalMap,Q=!!E.displacementMap,V=!!E.emissiveMap,nt=!!E.metalnessMap,St=!!E.roughnessMap,yt=E.anisotropy>0,w=E.clearcoat>0,M=E.dispersion>0,N=E.iridescence>0,Y=E.sheen>0,at=E.transmission>0,Z=yt&&!!E.anisotropyMap,Lt=w&&!!E.clearcoatMap,gt=w&&!!E.clearcoatNormalMap,It=w&&!!E.clearcoatRoughnessMap,Ut=N&&!!E.iridescenceMap,ht=N&&!!E.iridescenceThicknessMap,Tt=Y&&!!E.sheenColorMap,Gt=Y&&!!E.sheenRoughnessMap,Ft=!!E.specularMap,Et=!!E.specularColorMap,Jt=!!E.specularIntensityMap,U=at&&!!E.transmissionMap,pt=at&&!!E.thicknessMap,_t=!!E.gradientMap,Ct=!!E.alphaMap,ut=E.alphaTest>0,ot=!!E.alphaHash,Nt=!!E.extensions;let Kt=ei;E.toneMapped&&(it===null||it.isXRRenderTarget===!0)&&(Kt=i.toneMapping);const he={shaderID:ct,shaderType:E.type,shaderName:E.name,vertexShader:qt,fragmentShader:$t,defines:E.defines,customVertexShaderID:Ot,customFragmentShaderID:et,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:d,batching:mt,batchingColor:mt&&O._colorsTexture!==null,instancing:Pt,instancingColor:Pt&&O.instanceColor!==null,instancingMorph:Pt&&O.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:it===null?i.outputColorSpace:it.isXRRenderTarget===!0?it.texture.colorSpace:ss,alphaToCoverage:!!E.alphaToCoverage,map:Wt,matcap:lt,envMap:R,envMapMode:R&&tt.mapping,envMapCubeUVHeight:q,aoMap:k,lightMap:W,bumpMap:G,normalMap:K,displacementMap:f&&Q,emissiveMap:V,normalMapObjectSpace:K&&E.normalMapType===lf,normalMapTangentSpace:K&&E.normalMapType===Fh,metalnessMap:nt,roughnessMap:St,anisotropy:yt,anisotropyMap:Z,clearcoat:w,clearcoatMap:Lt,clearcoatNormalMap:gt,clearcoatRoughnessMap:It,dispersion:M,iridescence:N,iridescenceMap:Ut,iridescenceThicknessMap:ht,sheen:Y,sheenColorMap:Tt,sheenRoughnessMap:Gt,specularMap:Ft,specularColorMap:Et,specularIntensityMap:Jt,transmission:at,transmissionMap:U,thicknessMap:pt,gradientMap:_t,opaque:E.transparent===!1&&E.blending===Mi&&E.alphaToCoverage===!1,alphaMap:Ct,alphaTest:ut,alphaHash:ot,combine:E.combine,mapUv:Wt&&x(E.map.channel),aoMapUv:k&&x(E.aoMap.channel),lightMapUv:W&&x(E.lightMap.channel),bumpMapUv:G&&x(E.bumpMap.channel),normalMapUv:K&&x(E.normalMap.channel),displacementMapUv:Q&&x(E.displacementMap.channel),emissiveMapUv:V&&x(E.emissiveMap.channel),metalnessMapUv:nt&&x(E.metalnessMap.channel),roughnessMapUv:St&&x(E.roughnessMap.channel),anisotropyMapUv:Z&&x(E.anisotropyMap.channel),clearcoatMapUv:Lt&&x(E.clearcoatMap.channel),clearcoatNormalMapUv:gt&&x(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:It&&x(E.clearcoatRoughnessMap.channel),iridescenceMapUv:Ut&&x(E.iridescenceMap.channel),iridescenceThicknessMapUv:ht&&x(E.iridescenceThicknessMap.channel),sheenColorMapUv:Tt&&x(E.sheenColorMap.channel),sheenRoughnessMapUv:Gt&&x(E.sheenRoughnessMap.channel),specularMapUv:Ft&&x(E.specularMap.channel),specularColorMapUv:Et&&x(E.specularColorMap.channel),specularIntensityMapUv:Jt&&x(E.specularIntensityMap.channel),transmissionMapUv:U&&x(E.transmissionMap.channel),thicknessMapUv:pt&&x(E.thicknessMap.channel),alphaMapUv:Ct&&x(E.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&(K||yt),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!H.attributes.uv&&(Wt||Ct),fog:!!B,useFog:E.fog===!0,fogExp2:!!B&&B.isFogExp2,flatShading:E.flatShading===!0&&E.wireframe===!1,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:wt,skinning:O.isSkinnedMesh===!0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:xt,morphTextureStride:At,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:E.dithering,shadowMapEnabled:i.shadowMap.enabled&&D.length>0,shadowMapType:i.shadowMap.type,toneMapping:Kt,decodeVideoTexture:Wt&&E.map.isVideoTexture===!0&&ne.getTransfer(E.map.colorSpace)===oe,decodeVideoTextureEmissive:V&&E.emissiveMap.isVideoTexture===!0&&ne.getTransfer(E.emissiveMap.colorSpace)===oe,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===We,flipSided:E.side===ze,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:Nt&&E.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Nt&&E.extensions.multiDraw===!0||mt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return he.vertexUv1s=c.has(1),he.vertexUv2s=c.has(2),he.vertexUv3s=c.has(3),c.clear(),he}function p(E){const y=[];if(E.shaderID?y.push(E.shaderID):(y.push(E.customVertexShaderID),y.push(E.customFragmentShaderID)),E.defines!==void 0)for(const D in E.defines)y.push(D),y.push(E.defines[D]);return E.isRawShaderMaterial===!1&&(S(y,E),_(y,E),y.push(i.outputColorSpace)),y.push(E.customProgramCacheKey),y.join()}function S(E,y){E.push(y.precision),E.push(y.outputColorSpace),E.push(y.envMapMode),E.push(y.envMapCubeUVHeight),E.push(y.mapUv),E.push(y.alphaMapUv),E.push(y.lightMapUv),E.push(y.aoMapUv),E.push(y.bumpMapUv),E.push(y.normalMapUv),E.push(y.displacementMapUv),E.push(y.emissiveMapUv),E.push(y.metalnessMapUv),E.push(y.roughnessMapUv),E.push(y.anisotropyMapUv),E.push(y.clearcoatMapUv),E.push(y.clearcoatNormalMapUv),E.push(y.clearcoatRoughnessMapUv),E.push(y.iridescenceMapUv),E.push(y.iridescenceThicknessMapUv),E.push(y.sheenColorMapUv),E.push(y.sheenRoughnessMapUv),E.push(y.specularMapUv),E.push(y.specularColorMapUv),E.push(y.specularIntensityMapUv),E.push(y.transmissionMapUv),E.push(y.thicknessMapUv),E.push(y.combine),E.push(y.fogExp2),E.push(y.sizeAttenuation),E.push(y.morphTargetsCount),E.push(y.morphAttributeCount),E.push(y.numDirLights),E.push(y.numPointLights),E.push(y.numSpotLights),E.push(y.numSpotLightMaps),E.push(y.numHemiLights),E.push(y.numRectAreaLights),E.push(y.numDirLightShadows),E.push(y.numPointLightShadows),E.push(y.numSpotLightShadows),E.push(y.numSpotLightShadowsWithMaps),E.push(y.numLightProbes),E.push(y.shadowMapType),E.push(y.toneMapping),E.push(y.numClippingPlanes),E.push(y.numClipIntersection),E.push(y.depthPacking)}function _(E,y){a.disableAll(),y.supportsVertexTextures&&a.enable(0),y.instancing&&a.enable(1),y.instancingColor&&a.enable(2),y.instancingMorph&&a.enable(3),y.matcap&&a.enable(4),y.envMap&&a.enable(5),y.normalMapObjectSpace&&a.enable(6),y.normalMapTangentSpace&&a.enable(7),y.clearcoat&&a.enable(8),y.iridescence&&a.enable(9),y.alphaTest&&a.enable(10),y.vertexColors&&a.enable(11),y.vertexAlphas&&a.enable(12),y.vertexUv1s&&a.enable(13),y.vertexUv2s&&a.enable(14),y.vertexUv3s&&a.enable(15),y.vertexTangents&&a.enable(16),y.anisotropy&&a.enable(17),y.alphaHash&&a.enable(18),y.batching&&a.enable(19),y.dispersion&&a.enable(20),y.batchingColor&&a.enable(21),y.gradientMap&&a.enable(22),E.push(a.mask),a.disableAll(),y.fog&&a.enable(0),y.useFog&&a.enable(1),y.flatShading&&a.enable(2),y.logarithmicDepthBuffer&&a.enable(3),y.reversedDepthBuffer&&a.enable(4),y.skinning&&a.enable(5),y.morphTargets&&a.enable(6),y.morphNormals&&a.enable(7),y.morphColors&&a.enable(8),y.premultipliedAlpha&&a.enable(9),y.shadowMapEnabled&&a.enable(10),y.doubleSided&&a.enable(11),y.flipSided&&a.enable(12),y.useDepthPacking&&a.enable(13),y.dithering&&a.enable(14),y.transmission&&a.enable(15),y.sheen&&a.enable(16),y.opaque&&a.enable(17),y.pointsUvs&&a.enable(18),y.decodeVideoTexture&&a.enable(19),y.decodeVideoTextureEmissive&&a.enable(20),y.alphaToCoverage&&a.enable(21),E.push(a.mask)}function v(E){const y=g[E.type];let D;if(y){const I=xn[y];D=wi.clone(I.uniforms)}else D=E.uniforms;return D}function T(E,y){let D;for(let I=0,O=h.length;I<O;I++){const B=h[I];if(B.cacheKey===y){D=B,++D.usedTimes;break}}return D===void 0&&(D=new cv(i,y,E,r),h.push(D)),D}function A(E){if(--E.usedTimes===0){const y=h.indexOf(E);h[y]=h[h.length-1],h.pop(),E.destroy()}}function C(E){l.remove(E)}function P(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:v,acquireProgram:T,releaseProgram:A,releaseShaderCache:C,programs:h,dispose:P}}function pv(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function mv(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Kc(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function $c(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(u,f,d,g,x,m){let p=i[t];return p===void 0?(p={id:u.id,object:u,geometry:f,material:d,groupOrder:g,renderOrder:u.renderOrder,z:x,group:m},i[t]=p):(p.id=u.id,p.object=u,p.geometry=f,p.material=d,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=x,p.group=m),t++,p}function a(u,f,d,g,x,m){const p=o(u,f,d,g,x,m);d.transmission>0?n.push(p):d.transparent===!0?s.push(p):e.push(p)}function l(u,f,d,g,x,m){const p=o(u,f,d,g,x,m);d.transmission>0?n.unshift(p):d.transparent===!0?s.unshift(p):e.unshift(p)}function c(u,f){e.length>1&&e.sort(u||mv),n.length>1&&n.sort(f||Kc),s.length>1&&s.sort(f||Kc)}function h(){for(let u=t,f=i.length;u<f;u++){const d=i[u];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function gv(){let i=new WeakMap;function t(n,s){const r=i.get(n);let o;return r===void 0?(o=new $c,i.set(n,[o])):s>=r.length?(o=new $c,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function vv(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new L,color:new kt};break;case"SpotLight":e={position:new L,direction:new L,color:new kt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new L,color:new kt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new L,skyColor:new kt,groundColor:new kt};break;case"RectAreaLight":e={color:new kt,position:new L,halfWidth:new L,halfHeight:new L};break}return i[t.id]=e,e}}}function xv(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new rt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new rt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new rt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let _v=0;function Mv(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Sv(i){const t=new vv,e=xv(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new L);const s=new L,r=new te,o=new te;function a(c){let h=0,u=0,f=0;for(let E=0;E<9;E++)n.probe[E].set(0,0,0);let d=0,g=0,x=0,m=0,p=0,S=0,_=0,v=0,T=0,A=0,C=0;c.sort(Mv);for(let E=0,y=c.length;E<y;E++){const D=c[E],I=D.color,O=D.intensity,B=D.distance,H=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)h+=I.r*O,u+=I.g*O,f+=I.b*O;else if(D.isLightProbe){for(let X=0;X<9;X++)n.probe[X].addScaledVector(D.sh.coefficients[X],O);C++}else if(D.isDirectionalLight){const X=t.get(D);if(X.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const tt=D.shadow,q=e.get(D);q.shadowIntensity=tt.intensity,q.shadowBias=tt.bias,q.shadowNormalBias=tt.normalBias,q.shadowRadius=tt.radius,q.shadowMapSize=tt.mapSize,n.directionalShadow[d]=q,n.directionalShadowMap[d]=H,n.directionalShadowMatrix[d]=D.shadow.matrix,S++}n.directional[d]=X,d++}else if(D.isSpotLight){const X=t.get(D);X.position.setFromMatrixPosition(D.matrixWorld),X.color.copy(I).multiplyScalar(O),X.distance=B,X.coneCos=Math.cos(D.angle),X.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),X.decay=D.decay,n.spot[x]=X;const tt=D.shadow;if(D.map&&(n.spotLightMap[T]=D.map,T++,tt.updateMatrices(D),D.castShadow&&A++),n.spotLightMatrix[x]=tt.matrix,D.castShadow){const q=e.get(D);q.shadowIntensity=tt.intensity,q.shadowBias=tt.bias,q.shadowNormalBias=tt.normalBias,q.shadowRadius=tt.radius,q.shadowMapSize=tt.mapSize,n.spotShadow[x]=q,n.spotShadowMap[x]=H,v++}x++}else if(D.isRectAreaLight){const X=t.get(D);X.color.copy(I).multiplyScalar(O),X.halfWidth.set(D.width*.5,0,0),X.halfHeight.set(0,D.height*.5,0),n.rectArea[m]=X,m++}else if(D.isPointLight){const X=t.get(D);if(X.color.copy(D.color).multiplyScalar(D.intensity),X.distance=D.distance,X.decay=D.decay,D.castShadow){const tt=D.shadow,q=e.get(D);q.shadowIntensity=tt.intensity,q.shadowBias=tt.bias,q.shadowNormalBias=tt.normalBias,q.shadowRadius=tt.radius,q.shadowMapSize=tt.mapSize,q.shadowCameraNear=tt.camera.near,q.shadowCameraFar=tt.camera.far,n.pointShadow[g]=q,n.pointShadowMap[g]=H,n.pointShadowMatrix[g]=D.shadow.matrix,_++}n.point[g]=X,g++}else if(D.isHemisphereLight){const X=t.get(D);X.skyColor.copy(D.color).multiplyScalar(O),X.groundColor.copy(D.groundColor).multiplyScalar(O),n.hemi[p]=X,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Mt.LTC_FLOAT_1,n.rectAreaLTC2=Mt.LTC_FLOAT_2):(n.rectAreaLTC1=Mt.LTC_HALF_1,n.rectAreaLTC2=Mt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;const P=n.hash;(P.directionalLength!==d||P.pointLength!==g||P.spotLength!==x||P.rectAreaLength!==m||P.hemiLength!==p||P.numDirectionalShadows!==S||P.numPointShadows!==_||P.numSpotShadows!==v||P.numSpotMaps!==T||P.numLightProbes!==C)&&(n.directional.length=d,n.spot.length=x,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.pointShadow.length=_,n.pointShadowMap.length=_,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=S,n.pointShadowMatrix.length=_,n.spotLightMatrix.length=v+T-A,n.spotLightMap.length=T,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=C,P.directionalLength=d,P.pointLength=g,P.spotLength=x,P.rectAreaLength=m,P.hemiLength=p,P.numDirectionalShadows=S,P.numPointShadows=_,P.numSpotShadows=v,P.numSpotMaps=T,P.numLightProbes=C,n.version=_v++)}function l(c,h){let u=0,f=0,d=0,g=0,x=0;const m=h.matrixWorldInverse;for(let p=0,S=c.length;p<S;p++){const _=c[p];if(_.isDirectionalLight){const v=n.directional[u];v.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),u++}else if(_.isSpotLight){const v=n.spot[d];v.position.setFromMatrixPosition(_.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),d++}else if(_.isRectAreaLight){const v=n.rectArea[g];v.position.setFromMatrixPosition(_.matrixWorld),v.position.applyMatrix4(m),o.identity(),r.copy(_.matrixWorld),r.premultiply(m),o.extractRotation(r),v.halfWidth.set(_.width*.5,0,0),v.halfHeight.set(0,_.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),g++}else if(_.isPointLight){const v=n.point[f];v.position.setFromMatrixPosition(_.matrixWorld),v.position.applyMatrix4(m),f++}else if(_.isHemisphereLight){const v=n.hemi[x];v.direction.setFromMatrixPosition(_.matrixWorld),v.direction.transformDirection(m),x++}}}return{setup:a,setupView:l,state:n}}function Jc(i){const t=new Sv(i),e=[],n=[];function s(h){c.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function l(h){t.setupView(e,h)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function yv(i){let t=new WeakMap;function e(s,r=0){const o=t.get(s);let a;return o===void 0?(a=new Jc(i),t.set(s,[a])):r>=o.length?(a=new Jc(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}const Ev=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,bv=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function wv(i,t,e){let n=new vl;const s=new rt,r=new rt,o=new se,a=new Gd({depthPacking:af}),l=new Vd,c={},h=e.maxTextureSize,u={[Gn]:ze,[ze]:Gn,[We]:We},f=new Ee({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new rt},radius:{value:4}},vertexShader:Ev,fragmentShader:bv}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const g=new ue;g.setAttribute("position",new Me(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new ve(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Mh;let p=this.type;this.render=function(A,C,P){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;const E=i.getRenderTarget(),y=i.getActiveCubeFace(),D=i.getActiveMipmapLevel(),I=i.state;I.setBlending(On),I.buffers.depth.getReversed()===!0?I.buffers.color.setClear(0,0,0,0):I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);const O=p!==In&&this.type===In,B=p===In&&this.type!==In;for(let H=0,X=A.length;H<X;H++){const tt=A[H],q=tt.shadow;if(q===void 0){console.warn("THREE.WebGLShadowMap:",tt,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;s.copy(q.mapSize);const ct=q.getFrameExtents();if(s.multiply(ct),r.copy(q.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/ct.x),s.x=r.x*ct.x,q.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/ct.y),s.y=r.y*ct.y,q.mapSize.y=r.y)),q.map===null||O===!0||B===!0){const xt=this.type!==In?{minFilter:Je,magFilter:Je}:{};q.map!==null&&q.map.dispose(),q.map=new sn(s.x,s.y,xt),q.map.texture.name=tt.name+".shadowMap",q.camera.updateProjectionMatrix()}i.setRenderTarget(q.map),i.clear();const st=q.getViewportCount();for(let xt=0;xt<st;xt++){const At=q.getViewport(xt);o.set(r.x*At.x,r.y*At.y,r.x*At.z,r.y*At.w),I.viewport(o),q.updateMatrices(tt,xt),n=q.getFrustum(),v(C,P,q.camera,tt,this.type)}q.isPointLightShadow!==!0&&this.type===In&&S(q,P),q.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(E,y,D)};function S(A,C){const P=t.update(x);f.defines.VSM_SAMPLES!==A.blurSamples&&(f.defines.VSM_SAMPLES=A.blurSamples,d.defines.VSM_SAMPLES=A.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new sn(s.x,s.y)),f.uniforms.shadow_pass.value=A.map.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,i.setRenderTarget(A.mapPass),i.clear(),i.renderBufferDirect(C,null,P,f,x,null),d.uniforms.shadow_pass.value=A.mapPass.texture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,i.setRenderTarget(A.map),i.clear(),i.renderBufferDirect(C,null,P,d,x,null)}function _(A,C,P,E){let y=null;const D=P.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(D!==void 0)y=D;else if(y=P.isPointLight===!0?l:a,i.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){const I=y.uuid,O=C.uuid;let B=c[I];B===void 0&&(B={},c[I]=B);let H=B[O];H===void 0&&(H=y.clone(),B[O]=H,C.addEventListener("dispose",T)),y=H}if(y.visible=C.visible,y.wireframe=C.wireframe,E===In?y.side=C.shadowSide!==null?C.shadowSide:C.side:y.side=C.shadowSide!==null?C.shadowSide:u[C.side],y.alphaMap=C.alphaMap,y.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,y.map=C.map,y.clipShadows=C.clipShadows,y.clippingPlanes=C.clippingPlanes,y.clipIntersection=C.clipIntersection,y.displacementMap=C.displacementMap,y.displacementScale=C.displacementScale,y.displacementBias=C.displacementBias,y.wireframeLinewidth=C.wireframeLinewidth,y.linewidth=C.linewidth,P.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const I=i.properties.get(y);I.light=P}return y}function v(A,C,P,E,y){if(A.visible===!1)return;if(A.layers.test(C.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&y===In)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,A.matrixWorld);const O=t.update(A),B=A.material;if(Array.isArray(B)){const H=O.groups;for(let X=0,tt=H.length;X<tt;X++){const q=H[X],ct=B[q.materialIndex];if(ct&&ct.visible){const st=_(A,ct,E,y);A.onBeforeShadow(i,A,C,P,O,st,q),i.renderBufferDirect(P,null,O,st,A,q),A.onAfterShadow(i,A,C,P,O,st,q)}}}else if(B.visible){const H=_(A,B,E,y);A.onBeforeShadow(i,A,C,P,O,H,null),i.renderBufferDirect(P,null,O,H,A,null),A.onAfterShadow(i,A,C,P,O,H,null)}}const I=A.children;for(let O=0,B=I.length;O<B;O++)v(I[O],C,P,E,y)}function T(A){A.target.removeEventListener("dispose",T);for(const P in c){const E=c[P],y=A.target.uuid;y in E&&(E[y].dispose(),delete E[y])}}}const Tv={[aa]:la,[ca]:fa,[ha]:da,[ts]:ua,[la]:aa,[fa]:ca,[da]:ha,[ua]:ts};function Av(i,t){function e(){let U=!1;const pt=new se;let _t=null;const Ct=new se(0,0,0,0);return{setMask:function(ut){_t!==ut&&!U&&(i.colorMask(ut,ut,ut,ut),_t=ut)},setLocked:function(ut){U=ut},setClear:function(ut,ot,Nt,Kt,he){he===!0&&(ut*=Kt,ot*=Kt,Nt*=Kt),pt.set(ut,ot,Nt,Kt),Ct.equals(pt)===!1&&(i.clearColor(ut,ot,Nt,Kt),Ct.copy(pt))},reset:function(){U=!1,_t=null,Ct.set(-1,0,0,0)}}}function n(){let U=!1,pt=!1,_t=null,Ct=null,ut=null;return{setReversed:function(ot){if(pt!==ot){const Nt=t.get("EXT_clip_control");ot?Nt.clipControlEXT(Nt.LOWER_LEFT_EXT,Nt.ZERO_TO_ONE_EXT):Nt.clipControlEXT(Nt.LOWER_LEFT_EXT,Nt.NEGATIVE_ONE_TO_ONE_EXT),pt=ot;const Kt=ut;ut=null,this.setClear(Kt)}},getReversed:function(){return pt},setTest:function(ot){ot?it(i.DEPTH_TEST):wt(i.DEPTH_TEST)},setMask:function(ot){_t!==ot&&!U&&(i.depthMask(ot),_t=ot)},setFunc:function(ot){if(pt&&(ot=Tv[ot]),Ct!==ot){switch(ot){case aa:i.depthFunc(i.NEVER);break;case la:i.depthFunc(i.ALWAYS);break;case ca:i.depthFunc(i.LESS);break;case ts:i.depthFunc(i.LEQUAL);break;case ha:i.depthFunc(i.EQUAL);break;case ua:i.depthFunc(i.GEQUAL);break;case fa:i.depthFunc(i.GREATER);break;case da:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Ct=ot}},setLocked:function(ot){U=ot},setClear:function(ot){ut!==ot&&(pt&&(ot=1-ot),i.clearDepth(ot),ut=ot)},reset:function(){U=!1,_t=null,Ct=null,ut=null,pt=!1}}}function s(){let U=!1,pt=null,_t=null,Ct=null,ut=null,ot=null,Nt=null,Kt=null,he=null;return{setTest:function(re){U||(re?it(i.STENCIL_TEST):wt(i.STENCIL_TEST))},setMask:function(re){pt!==re&&!U&&(i.stencilMask(re),pt=re)},setFunc:function(re,Tn,vn){(_t!==re||Ct!==Tn||ut!==vn)&&(i.stencilFunc(re,Tn,vn),_t=re,Ct=Tn,ut=vn)},setOp:function(re,Tn,vn){(ot!==re||Nt!==Tn||Kt!==vn)&&(i.stencilOp(re,Tn,vn),ot=re,Nt=Tn,Kt=vn)},setLocked:function(re){U=re},setClear:function(re){he!==re&&(i.clearStencil(re),he=re)},reset:function(){U=!1,pt=null,_t=null,Ct=null,ut=null,ot=null,Nt=null,Kt=null,he=null}}}const r=new e,o=new n,a=new s,l=new WeakMap,c=new WeakMap;let h={},u={},f=new WeakMap,d=[],g=null,x=!1,m=null,p=null,S=null,_=null,v=null,T=null,A=null,C=new kt(0,0,0),P=0,E=!1,y=null,D=null,I=null,O=null,B=null;const H=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,tt=0;const q=i.getParameter(i.VERSION);q.indexOf("WebGL")!==-1?(tt=parseFloat(/^WebGL (\d)/.exec(q)[1]),X=tt>=1):q.indexOf("OpenGL ES")!==-1&&(tt=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),X=tt>=2);let ct=null,st={};const xt=i.getParameter(i.SCISSOR_BOX),At=i.getParameter(i.VIEWPORT),qt=new se().fromArray(xt),$t=new se().fromArray(At);function Ot(U,pt,_t,Ct){const ut=new Uint8Array(4),ot=i.createTexture();i.bindTexture(U,ot),i.texParameteri(U,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(U,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Nt=0;Nt<_t;Nt++)U===i.TEXTURE_3D||U===i.TEXTURE_2D_ARRAY?i.texImage3D(pt,0,i.RGBA,1,1,Ct,0,i.RGBA,i.UNSIGNED_BYTE,ut):i.texImage2D(pt+Nt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ut);return ot}const et={};et[i.TEXTURE_2D]=Ot(i.TEXTURE_2D,i.TEXTURE_2D,1),et[i.TEXTURE_CUBE_MAP]=Ot(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),et[i.TEXTURE_2D_ARRAY]=Ot(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),et[i.TEXTURE_3D]=Ot(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),it(i.DEPTH_TEST),o.setFunc(ts),G(!1),K(Vl),it(i.CULL_FACE),k(On);function it(U){h[U]!==!0&&(i.enable(U),h[U]=!0)}function wt(U){h[U]!==!1&&(i.disable(U),h[U]=!1)}function Pt(U,pt){return u[U]!==pt?(i.bindFramebuffer(U,pt),u[U]=pt,U===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=pt),U===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=pt),!0):!1}function mt(U,pt){let _t=d,Ct=!1;if(U){_t=f.get(pt),_t===void 0&&(_t=[],f.set(pt,_t));const ut=U.textures;if(_t.length!==ut.length||_t[0]!==i.COLOR_ATTACHMENT0){for(let ot=0,Nt=ut.length;ot<Nt;ot++)_t[ot]=i.COLOR_ATTACHMENT0+ot;_t.length=ut.length,Ct=!0}}else _t[0]!==i.BACK&&(_t[0]=i.BACK,Ct=!0);Ct&&i.drawBuffers(_t)}function Wt(U){return g!==U?(i.useProgram(U),g=U,!0):!1}const lt={[pi]:i.FUNC_ADD,[Bu]:i.FUNC_SUBTRACT,[ku]:i.FUNC_REVERSE_SUBTRACT};lt[Hu]=i.MIN,lt[Gu]=i.MAX;const R={[Vu]:i.ZERO,[Wu]:i.ONE,[Xu]:i.SRC_COLOR,[ra]:i.SRC_ALPHA,[Zu]:i.SRC_ALPHA_SATURATE,[$u]:i.DST_COLOR,[Yu]:i.DST_ALPHA,[qu]:i.ONE_MINUS_SRC_COLOR,[oa]:i.ONE_MINUS_SRC_ALPHA,[Ju]:i.ONE_MINUS_DST_COLOR,[Ku]:i.ONE_MINUS_DST_ALPHA,[ju]:i.CONSTANT_COLOR,[Qu]:i.ONE_MINUS_CONSTANT_COLOR,[tf]:i.CONSTANT_ALPHA,[ef]:i.ONE_MINUS_CONSTANT_ALPHA};function k(U,pt,_t,Ct,ut,ot,Nt,Kt,he,re){if(U===On){x===!0&&(wt(i.BLEND),x=!1);return}if(x===!1&&(it(i.BLEND),x=!0),U!==zu){if(U!==m||re!==E){if((p!==pi||v!==pi)&&(i.blendEquation(i.FUNC_ADD),p=pi,v=pi),re)switch(U){case Mi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Hs:i.blendFunc(i.ONE,i.ONE);break;case Wl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Xl:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case Mi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Hs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Wl:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Xl:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}S=null,_=null,T=null,A=null,C.set(0,0,0),P=0,m=U,E=re}return}ut=ut||pt,ot=ot||_t,Nt=Nt||Ct,(pt!==p||ut!==v)&&(i.blendEquationSeparate(lt[pt],lt[ut]),p=pt,v=ut),(_t!==S||Ct!==_||ot!==T||Nt!==A)&&(i.blendFuncSeparate(R[_t],R[Ct],R[ot],R[Nt]),S=_t,_=Ct,T=ot,A=Nt),(Kt.equals(C)===!1||he!==P)&&(i.blendColor(Kt.r,Kt.g,Kt.b,he),C.copy(Kt),P=he),m=U,E=!1}function W(U,pt){U.side===We?wt(i.CULL_FACE):it(i.CULL_FACE);let _t=U.side===ze;pt&&(_t=!_t),G(_t),U.blending===Mi&&U.transparent===!1?k(On):k(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),o.setFunc(U.depthFunc),o.setTest(U.depthTest),o.setMask(U.depthWrite),r.setMask(U.colorWrite);const Ct=U.stencilWrite;a.setTest(Ct),Ct&&(a.setMask(U.stencilWriteMask),a.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),a.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),V(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?it(i.SAMPLE_ALPHA_TO_COVERAGE):wt(i.SAMPLE_ALPHA_TO_COVERAGE)}function G(U){y!==U&&(U?i.frontFace(i.CW):i.frontFace(i.CCW),y=U)}function K(U){U!==Nu?(it(i.CULL_FACE),U!==D&&(U===Vl?i.cullFace(i.BACK):U===Fu?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):wt(i.CULL_FACE),D=U}function Q(U){U!==I&&(X&&i.lineWidth(U),I=U)}function V(U,pt,_t){U?(it(i.POLYGON_OFFSET_FILL),(O!==pt||B!==_t)&&(i.polygonOffset(pt,_t),O=pt,B=_t)):wt(i.POLYGON_OFFSET_FILL)}function nt(U){U?it(i.SCISSOR_TEST):wt(i.SCISSOR_TEST)}function St(U){U===void 0&&(U=i.TEXTURE0+H-1),ct!==U&&(i.activeTexture(U),ct=U)}function yt(U,pt,_t){_t===void 0&&(ct===null?_t=i.TEXTURE0+H-1:_t=ct);let Ct=st[_t];Ct===void 0&&(Ct={type:void 0,texture:void 0},st[_t]=Ct),(Ct.type!==U||Ct.texture!==pt)&&(ct!==_t&&(i.activeTexture(_t),ct=_t),i.bindTexture(U,pt||et[U]),Ct.type=U,Ct.texture=pt)}function w(){const U=st[ct];U!==void 0&&U.type!==void 0&&(i.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function M(){try{i.compressedTexImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function N(){try{i.compressedTexImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Y(){try{i.texSubImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function at(){try{i.texSubImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Z(){try{i.compressedTexSubImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Lt(){try{i.compressedTexSubImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function gt(){try{i.texStorage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function It(){try{i.texStorage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ut(){try{i.texImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ht(){try{i.texImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Tt(U){qt.equals(U)===!1&&(i.scissor(U.x,U.y,U.z,U.w),qt.copy(U))}function Gt(U){$t.equals(U)===!1&&(i.viewport(U.x,U.y,U.z,U.w),$t.copy(U))}function Ft(U,pt){let _t=c.get(pt);_t===void 0&&(_t=new WeakMap,c.set(pt,_t));let Ct=_t.get(U);Ct===void 0&&(Ct=i.getUniformBlockIndex(pt,U.name),_t.set(U,Ct))}function Et(U,pt){const Ct=c.get(pt).get(U);l.get(pt)!==Ct&&(i.uniformBlockBinding(pt,Ct,U.__bindingPointIndex),l.set(pt,Ct))}function Jt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},ct=null,st={},u={},f=new WeakMap,d=[],g=null,x=!1,m=null,p=null,S=null,_=null,v=null,T=null,A=null,C=new kt(0,0,0),P=0,E=!1,y=null,D=null,I=null,O=null,B=null,qt.set(0,0,i.canvas.width,i.canvas.height),$t.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:it,disable:wt,bindFramebuffer:Pt,drawBuffers:mt,useProgram:Wt,setBlending:k,setMaterial:W,setFlipSided:G,setCullFace:K,setLineWidth:Q,setPolygonOffset:V,setScissorTest:nt,activeTexture:St,bindTexture:yt,unbindTexture:w,compressedTexImage2D:M,compressedTexImage3D:N,texImage2D:Ut,texImage3D:ht,updateUBOMapping:Ft,uniformBlockBinding:Et,texStorage2D:gt,texStorage3D:It,texSubImage2D:Y,texSubImage3D:at,compressedTexSubImage2D:Z,compressedTexSubImage3D:Lt,scissor:Tt,viewport:Gt,reset:Jt}}function Rv(i,t,e,n,s,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new rt,h=new WeakMap;let u;const f=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(w,M){return d?new OffscreenCanvas(w,M):qs("canvas")}function x(w,M,N){let Y=1;const at=yt(w);if((at.width>N||at.height>N)&&(Y=N/Math.max(at.width,at.height)),Y<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){const Z=Math.floor(Y*at.width),Lt=Math.floor(Y*at.height);u===void 0&&(u=g(Z,Lt));const gt=M?g(Z,Lt):u;return gt.width=Z,gt.height=Lt,gt.getContext("2d").drawImage(w,0,0,Z,Lt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+at.width+"x"+at.height+") to ("+Z+"x"+Lt+")."),gt}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+at.width+"x"+at.height+")."),w;return w}function m(w){return w.generateMipmaps}function p(w){i.generateMipmap(w)}function S(w){return w.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?i.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function _(w,M,N,Y,at=!1){if(w!==null){if(i[w]!==void 0)return i[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let Z=M;if(M===i.RED&&(N===i.FLOAT&&(Z=i.R32F),N===i.HALF_FLOAT&&(Z=i.R16F),N===i.UNSIGNED_BYTE&&(Z=i.R8)),M===i.RED_INTEGER&&(N===i.UNSIGNED_BYTE&&(Z=i.R8UI),N===i.UNSIGNED_SHORT&&(Z=i.R16UI),N===i.UNSIGNED_INT&&(Z=i.R32UI),N===i.BYTE&&(Z=i.R8I),N===i.SHORT&&(Z=i.R16I),N===i.INT&&(Z=i.R32I)),M===i.RG&&(N===i.FLOAT&&(Z=i.RG32F),N===i.HALF_FLOAT&&(Z=i.RG16F),N===i.UNSIGNED_BYTE&&(Z=i.RG8)),M===i.RG_INTEGER&&(N===i.UNSIGNED_BYTE&&(Z=i.RG8UI),N===i.UNSIGNED_SHORT&&(Z=i.RG16UI),N===i.UNSIGNED_INT&&(Z=i.RG32UI),N===i.BYTE&&(Z=i.RG8I),N===i.SHORT&&(Z=i.RG16I),N===i.INT&&(Z=i.RG32I)),M===i.RGB_INTEGER&&(N===i.UNSIGNED_BYTE&&(Z=i.RGB8UI),N===i.UNSIGNED_SHORT&&(Z=i.RGB16UI),N===i.UNSIGNED_INT&&(Z=i.RGB32UI),N===i.BYTE&&(Z=i.RGB8I),N===i.SHORT&&(Z=i.RGB16I),N===i.INT&&(Z=i.RGB32I)),M===i.RGBA_INTEGER&&(N===i.UNSIGNED_BYTE&&(Z=i.RGBA8UI),N===i.UNSIGNED_SHORT&&(Z=i.RGBA16UI),N===i.UNSIGNED_INT&&(Z=i.RGBA32UI),N===i.BYTE&&(Z=i.RGBA8I),N===i.SHORT&&(Z=i.RGBA16I),N===i.INT&&(Z=i.RGBA32I)),M===i.RGB&&(N===i.UNSIGNED_INT_5_9_9_9_REV&&(Z=i.RGB9_E5),N===i.UNSIGNED_INT_10F_11F_11F_REV&&(Z=i.R11F_G11F_B10F)),M===i.RGBA){const Lt=at?Wr:ne.getTransfer(Y);N===i.FLOAT&&(Z=i.RGBA32F),N===i.HALF_FLOAT&&(Z=i.RGBA16F),N===i.UNSIGNED_BYTE&&(Z=Lt===oe?i.SRGB8_ALPHA8:i.RGBA8),N===i.UNSIGNED_SHORT_4_4_4_4&&(Z=i.RGBA4),N===i.UNSIGNED_SHORT_5_5_5_1&&(Z=i.RGB5_A1)}return(Z===i.R16F||Z===i.R32F||Z===i.RG16F||Z===i.RG32F||Z===i.RGBA16F||Z===i.RGBA32F)&&t.get("EXT_color_buffer_float"),Z}function v(w,M){let N;return w?M===null||M===bi||M===Vs?N=i.DEPTH24_STENCIL8:M===Mn?N=i.DEPTH32F_STENCIL8:M===Gs&&(N=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===bi||M===Vs?N=i.DEPTH_COMPONENT24:M===Mn?N=i.DEPTH_COMPONENT32F:M===Gs&&(N=i.DEPTH_COMPONENT16),N}function T(w,M){return m(w)===!0||w.isFramebufferTexture&&w.minFilter!==Je&&w.minFilter!==en?Math.log2(Math.max(M.width,M.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?M.mipmaps.length:1}function A(w){const M=w.target;M.removeEventListener("dispose",A),P(M),M.isVideoTexture&&h.delete(M)}function C(w){const M=w.target;M.removeEventListener("dispose",C),y(M)}function P(w){const M=n.get(w);if(M.__webglInit===void 0)return;const N=w.source,Y=f.get(N);if(Y){const at=Y[M.__cacheKey];at.usedTimes--,at.usedTimes===0&&E(w),Object.keys(Y).length===0&&f.delete(N)}n.remove(w)}function E(w){const M=n.get(w);i.deleteTexture(M.__webglTexture);const N=w.source,Y=f.get(N);delete Y[M.__cacheKey],o.memory.textures--}function y(w){const M=n.get(w);if(w.depthTexture&&(w.depthTexture.dispose(),n.remove(w.depthTexture)),w.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(M.__webglFramebuffer[Y]))for(let at=0;at<M.__webglFramebuffer[Y].length;at++)i.deleteFramebuffer(M.__webglFramebuffer[Y][at]);else i.deleteFramebuffer(M.__webglFramebuffer[Y]);M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer[Y])}else{if(Array.isArray(M.__webglFramebuffer))for(let Y=0;Y<M.__webglFramebuffer.length;Y++)i.deleteFramebuffer(M.__webglFramebuffer[Y]);else i.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&i.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let Y=0;Y<M.__webglColorRenderbuffer.length;Y++)M.__webglColorRenderbuffer[Y]&&i.deleteRenderbuffer(M.__webglColorRenderbuffer[Y]);M.__webglDepthRenderbuffer&&i.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const N=w.textures;for(let Y=0,at=N.length;Y<at;Y++){const Z=n.get(N[Y]);Z.__webglTexture&&(i.deleteTexture(Z.__webglTexture),o.memory.textures--),n.remove(N[Y])}n.remove(w)}let D=0;function I(){D=0}function O(){const w=D;return w>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+s.maxTextures),D+=1,w}function B(w){const M=[];return M.push(w.wrapS),M.push(w.wrapT),M.push(w.wrapR||0),M.push(w.magFilter),M.push(w.minFilter),M.push(w.anisotropy),M.push(w.internalFormat),M.push(w.format),M.push(w.type),M.push(w.generateMipmaps),M.push(w.premultiplyAlpha),M.push(w.flipY),M.push(w.unpackAlignment),M.push(w.colorSpace),M.join()}function H(w,M){const N=n.get(w);if(w.isVideoTexture&&nt(w),w.isRenderTargetTexture===!1&&w.isExternalTexture!==!0&&w.version>0&&N.__version!==w.version){const Y=w.image;if(Y===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{et(N,w,M);return}}else w.isExternalTexture&&(N.__webglTexture=w.sourceTexture?w.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,N.__webglTexture,i.TEXTURE0+M)}function X(w,M){const N=n.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&N.__version!==w.version){et(N,w,M);return}e.bindTexture(i.TEXTURE_2D_ARRAY,N.__webglTexture,i.TEXTURE0+M)}function tt(w,M){const N=n.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&N.__version!==w.version){et(N,w,M);return}e.bindTexture(i.TEXTURE_3D,N.__webglTexture,i.TEXTURE0+M)}function q(w,M){const N=n.get(w);if(w.version>0&&N.__version!==w.version){it(N,w,M);return}e.bindTexture(i.TEXTURE_CUBE_MAP,N.__webglTexture,i.TEXTURE0+M)}const ct={[is]:i.REPEAT,[vi]:i.CLAMP_TO_EDGE,[ga]:i.MIRRORED_REPEAT},st={[Je]:i.NEAREST,[rf]:i.NEAREST_MIPMAP_NEAREST,[ir]:i.NEAREST_MIPMAP_LINEAR,[en]:i.LINEAR,[go]:i.LINEAR_MIPMAP_NEAREST,[Nn]:i.LINEAR_MIPMAP_LINEAR},xt={[cf]:i.NEVER,[mf]:i.ALWAYS,[hf]:i.LESS,[Oh]:i.LEQUAL,[uf]:i.EQUAL,[pf]:i.GEQUAL,[ff]:i.GREATER,[df]:i.NOTEQUAL};function At(w,M){if(M.type===Mn&&t.has("OES_texture_float_linear")===!1&&(M.magFilter===en||M.magFilter===go||M.magFilter===ir||M.magFilter===Nn||M.minFilter===en||M.minFilter===go||M.minFilter===ir||M.minFilter===Nn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(w,i.TEXTURE_WRAP_S,ct[M.wrapS]),i.texParameteri(w,i.TEXTURE_WRAP_T,ct[M.wrapT]),(w===i.TEXTURE_3D||w===i.TEXTURE_2D_ARRAY)&&i.texParameteri(w,i.TEXTURE_WRAP_R,ct[M.wrapR]),i.texParameteri(w,i.TEXTURE_MAG_FILTER,st[M.magFilter]),i.texParameteri(w,i.TEXTURE_MIN_FILTER,st[M.minFilter]),M.compareFunction&&(i.texParameteri(w,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(w,i.TEXTURE_COMPARE_FUNC,xt[M.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Je||M.minFilter!==ir&&M.minFilter!==Nn||M.type===Mn&&t.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||n.get(M).__currentAnisotropy){const N=t.get("EXT_texture_filter_anisotropic");i.texParameterf(w,N.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,s.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy}}}function qt(w,M){let N=!1;w.__webglInit===void 0&&(w.__webglInit=!0,M.addEventListener("dispose",A));const Y=M.source;let at=f.get(Y);at===void 0&&(at={},f.set(Y,at));const Z=B(M);if(Z!==w.__cacheKey){at[Z]===void 0&&(at[Z]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,N=!0),at[Z].usedTimes++;const Lt=at[w.__cacheKey];Lt!==void 0&&(at[w.__cacheKey].usedTimes--,Lt.usedTimes===0&&E(M)),w.__cacheKey=Z,w.__webglTexture=at[Z].texture}return N}function $t(w,M,N){return Math.floor(Math.floor(w/N)/M)}function Ot(w,M,N,Y){const Z=w.updateRanges;if(Z.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,M.width,M.height,N,Y,M.data);else{Z.sort((ht,Tt)=>ht.start-Tt.start);let Lt=0;for(let ht=1;ht<Z.length;ht++){const Tt=Z[Lt],Gt=Z[ht],Ft=Tt.start+Tt.count,Et=$t(Gt.start,M.width,4),Jt=$t(Tt.start,M.width,4);Gt.start<=Ft+1&&Et===Jt&&$t(Gt.start+Gt.count-1,M.width,4)===Et?Tt.count=Math.max(Tt.count,Gt.start+Gt.count-Tt.start):(++Lt,Z[Lt]=Gt)}Z.length=Lt+1;const gt=i.getParameter(i.UNPACK_ROW_LENGTH),It=i.getParameter(i.UNPACK_SKIP_PIXELS),Ut=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,M.width);for(let ht=0,Tt=Z.length;ht<Tt;ht++){const Gt=Z[ht],Ft=Math.floor(Gt.start/4),Et=Math.ceil(Gt.count/4),Jt=Ft%M.width,U=Math.floor(Ft/M.width),pt=Et,_t=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,Jt),i.pixelStorei(i.UNPACK_SKIP_ROWS,U),e.texSubImage2D(i.TEXTURE_2D,0,Jt,U,pt,_t,N,Y,M.data)}w.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,gt),i.pixelStorei(i.UNPACK_SKIP_PIXELS,It),i.pixelStorei(i.UNPACK_SKIP_ROWS,Ut)}}function et(w,M,N){let Y=i.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(Y=i.TEXTURE_2D_ARRAY),M.isData3DTexture&&(Y=i.TEXTURE_3D);const at=qt(w,M),Z=M.source;e.bindTexture(Y,w.__webglTexture,i.TEXTURE0+N);const Lt=n.get(Z);if(Z.version!==Lt.__version||at===!0){e.activeTexture(i.TEXTURE0+N);const gt=ne.getPrimaries(ne.workingColorSpace),It=M.colorSpace===ti?null:ne.getPrimaries(M.colorSpace),Ut=M.colorSpace===ti||gt===It?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ut);let ht=x(M.image,!1,s.maxTextureSize);ht=St(M,ht);const Tt=r.convert(M.format,M.colorSpace),Gt=r.convert(M.type);let Ft=_(M.internalFormat,Tt,Gt,M.colorSpace,M.isVideoTexture);At(Y,M);let Et;const Jt=M.mipmaps,U=M.isVideoTexture!==!0,pt=Lt.__version===void 0||at===!0,_t=Z.dataReady,Ct=T(M,ht);if(M.isDepthTexture)Ft=v(M.format===Xs,M.type),pt&&(U?e.texStorage2D(i.TEXTURE_2D,1,Ft,ht.width,ht.height):e.texImage2D(i.TEXTURE_2D,0,Ft,ht.width,ht.height,0,Tt,Gt,null));else if(M.isDataTexture)if(Jt.length>0){U&&pt&&e.texStorage2D(i.TEXTURE_2D,Ct,Ft,Jt[0].width,Jt[0].height);for(let ut=0,ot=Jt.length;ut<ot;ut++)Et=Jt[ut],U?_t&&e.texSubImage2D(i.TEXTURE_2D,ut,0,0,Et.width,Et.height,Tt,Gt,Et.data):e.texImage2D(i.TEXTURE_2D,ut,Ft,Et.width,Et.height,0,Tt,Gt,Et.data);M.generateMipmaps=!1}else U?(pt&&e.texStorage2D(i.TEXTURE_2D,Ct,Ft,ht.width,ht.height),_t&&Ot(M,ht,Tt,Gt)):e.texImage2D(i.TEXTURE_2D,0,Ft,ht.width,ht.height,0,Tt,Gt,ht.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){U&&pt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Ct,Ft,Jt[0].width,Jt[0].height,ht.depth);for(let ut=0,ot=Jt.length;ut<ot;ut++)if(Et=Jt[ut],M.format!==nn)if(Tt!==null)if(U){if(_t)if(M.layerUpdates.size>0){const Nt=Tc(Et.width,Et.height,M.format,M.type);for(const Kt of M.layerUpdates){const he=Et.data.subarray(Kt*Nt/Et.data.BYTES_PER_ELEMENT,(Kt+1)*Nt/Et.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ut,0,0,Kt,Et.width,Et.height,1,Tt,he)}M.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ut,0,0,0,Et.width,Et.height,ht.depth,Tt,Et.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ut,Ft,Et.width,Et.height,ht.depth,0,Et.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else U?_t&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,ut,0,0,0,Et.width,Et.height,ht.depth,Tt,Gt,Et.data):e.texImage3D(i.TEXTURE_2D_ARRAY,ut,Ft,Et.width,Et.height,ht.depth,0,Tt,Gt,Et.data)}else{U&&pt&&e.texStorage2D(i.TEXTURE_2D,Ct,Ft,Jt[0].width,Jt[0].height);for(let ut=0,ot=Jt.length;ut<ot;ut++)Et=Jt[ut],M.format!==nn?Tt!==null?U?_t&&e.compressedTexSubImage2D(i.TEXTURE_2D,ut,0,0,Et.width,Et.height,Tt,Et.data):e.compressedTexImage2D(i.TEXTURE_2D,ut,Ft,Et.width,Et.height,0,Et.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):U?_t&&e.texSubImage2D(i.TEXTURE_2D,ut,0,0,Et.width,Et.height,Tt,Gt,Et.data):e.texImage2D(i.TEXTURE_2D,ut,Ft,Et.width,Et.height,0,Tt,Gt,Et.data)}else if(M.isDataArrayTexture)if(U){if(pt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Ct,Ft,ht.width,ht.height,ht.depth),_t)if(M.layerUpdates.size>0){const ut=Tc(ht.width,ht.height,M.format,M.type);for(const ot of M.layerUpdates){const Nt=ht.data.subarray(ot*ut/ht.data.BYTES_PER_ELEMENT,(ot+1)*ut/ht.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ot,ht.width,ht.height,1,Tt,Gt,Nt)}M.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ht.width,ht.height,ht.depth,Tt,Gt,ht.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Ft,ht.width,ht.height,ht.depth,0,Tt,Gt,ht.data);else if(M.isData3DTexture)U?(pt&&e.texStorage3D(i.TEXTURE_3D,Ct,Ft,ht.width,ht.height,ht.depth),_t&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ht.width,ht.height,ht.depth,Tt,Gt,ht.data)):e.texImage3D(i.TEXTURE_3D,0,Ft,ht.width,ht.height,ht.depth,0,Tt,Gt,ht.data);else if(M.isFramebufferTexture){if(pt)if(U)e.texStorage2D(i.TEXTURE_2D,Ct,Ft,ht.width,ht.height);else{let ut=ht.width,ot=ht.height;for(let Nt=0;Nt<Ct;Nt++)e.texImage2D(i.TEXTURE_2D,Nt,Ft,ut,ot,0,Tt,Gt,null),ut>>=1,ot>>=1}}else if(Jt.length>0){if(U&&pt){const ut=yt(Jt[0]);e.texStorage2D(i.TEXTURE_2D,Ct,Ft,ut.width,ut.height)}for(let ut=0,ot=Jt.length;ut<ot;ut++)Et=Jt[ut],U?_t&&e.texSubImage2D(i.TEXTURE_2D,ut,0,0,Tt,Gt,Et):e.texImage2D(i.TEXTURE_2D,ut,Ft,Tt,Gt,Et);M.generateMipmaps=!1}else if(U){if(pt){const ut=yt(ht);e.texStorage2D(i.TEXTURE_2D,Ct,Ft,ut.width,ut.height)}_t&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Tt,Gt,ht)}else e.texImage2D(i.TEXTURE_2D,0,Ft,Tt,Gt,ht);m(M)&&p(Y),Lt.__version=Z.version,M.onUpdate&&M.onUpdate(M)}w.__version=M.version}function it(w,M,N){if(M.image.length!==6)return;const Y=qt(w,M),at=M.source;e.bindTexture(i.TEXTURE_CUBE_MAP,w.__webglTexture,i.TEXTURE0+N);const Z=n.get(at);if(at.version!==Z.__version||Y===!0){e.activeTexture(i.TEXTURE0+N);const Lt=ne.getPrimaries(ne.workingColorSpace),gt=M.colorSpace===ti?null:ne.getPrimaries(M.colorSpace),It=M.colorSpace===ti||Lt===gt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,It);const Ut=M.isCompressedTexture||M.image[0].isCompressedTexture,ht=M.image[0]&&M.image[0].isDataTexture,Tt=[];for(let ot=0;ot<6;ot++)!Ut&&!ht?Tt[ot]=x(M.image[ot],!0,s.maxCubemapSize):Tt[ot]=ht?M.image[ot].image:M.image[ot],Tt[ot]=St(M,Tt[ot]);const Gt=Tt[0],Ft=r.convert(M.format,M.colorSpace),Et=r.convert(M.type),Jt=_(M.internalFormat,Ft,Et,M.colorSpace),U=M.isVideoTexture!==!0,pt=Z.__version===void 0||Y===!0,_t=at.dataReady;let Ct=T(M,Gt);At(i.TEXTURE_CUBE_MAP,M);let ut;if(Ut){U&&pt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Ct,Jt,Gt.width,Gt.height);for(let ot=0;ot<6;ot++){ut=Tt[ot].mipmaps;for(let Nt=0;Nt<ut.length;Nt++){const Kt=ut[Nt];M.format!==nn?Ft!==null?U?_t&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,Nt,0,0,Kt.width,Kt.height,Ft,Kt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,Nt,Jt,Kt.width,Kt.height,0,Kt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):U?_t&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,Nt,0,0,Kt.width,Kt.height,Ft,Et,Kt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,Nt,Jt,Kt.width,Kt.height,0,Ft,Et,Kt.data)}}}else{if(ut=M.mipmaps,U&&pt){ut.length>0&&Ct++;const ot=yt(Tt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Ct,Jt,ot.width,ot.height)}for(let ot=0;ot<6;ot++)if(ht){U?_t&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0,0,0,Tt[ot].width,Tt[ot].height,Ft,Et,Tt[ot].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0,Jt,Tt[ot].width,Tt[ot].height,0,Ft,Et,Tt[ot].data);for(let Nt=0;Nt<ut.length;Nt++){const he=ut[Nt].image[ot].image;U?_t&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,Nt+1,0,0,he.width,he.height,Ft,Et,he.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,Nt+1,Jt,he.width,he.height,0,Ft,Et,he.data)}}else{U?_t&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0,0,0,Ft,Et,Tt[ot]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0,Jt,Ft,Et,Tt[ot]);for(let Nt=0;Nt<ut.length;Nt++){const Kt=ut[Nt];U?_t&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,Nt+1,0,0,Ft,Et,Kt.image[ot]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,Nt+1,Jt,Ft,Et,Kt.image[ot])}}}m(M)&&p(i.TEXTURE_CUBE_MAP),Z.__version=at.version,M.onUpdate&&M.onUpdate(M)}w.__version=M.version}function wt(w,M,N,Y,at,Z){const Lt=r.convert(N.format,N.colorSpace),gt=r.convert(N.type),It=_(N.internalFormat,Lt,gt,N.colorSpace),Ut=n.get(M),ht=n.get(N);if(ht.__renderTarget=M,!Ut.__hasExternalTextures){const Tt=Math.max(1,M.width>>Z),Gt=Math.max(1,M.height>>Z);at===i.TEXTURE_3D||at===i.TEXTURE_2D_ARRAY?e.texImage3D(at,Z,It,Tt,Gt,M.depth,0,Lt,gt,null):e.texImage2D(at,Z,It,Tt,Gt,0,Lt,gt,null)}e.bindFramebuffer(i.FRAMEBUFFER,w),V(M)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Y,at,ht.__webglTexture,0,Q(M)):(at===i.TEXTURE_2D||at>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&at<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Y,at,ht.__webglTexture,Z),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Pt(w,M,N){if(i.bindRenderbuffer(i.RENDERBUFFER,w),M.depthBuffer){const Y=M.depthTexture,at=Y&&Y.isDepthTexture?Y.type:null,Z=v(M.stencilBuffer,at),Lt=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,gt=Q(M);V(M)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,gt,Z,M.width,M.height):N?i.renderbufferStorageMultisample(i.RENDERBUFFER,gt,Z,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,Z,M.width,M.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Lt,i.RENDERBUFFER,w)}else{const Y=M.textures;for(let at=0;at<Y.length;at++){const Z=Y[at],Lt=r.convert(Z.format,Z.colorSpace),gt=r.convert(Z.type),It=_(Z.internalFormat,Lt,gt,Z.colorSpace),Ut=Q(M);N&&V(M)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ut,It,M.width,M.height):V(M)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ut,It,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,It,M.width,M.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function mt(w,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,w),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Y=n.get(M.depthTexture);Y.__renderTarget=M,(!Y.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),H(M.depthTexture,0);const at=Y.__webglTexture,Z=Q(M);if(M.depthTexture.format===Ws)V(M)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,at,0,Z):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,at,0);else if(M.depthTexture.format===Xs)V(M)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,at,0,Z):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,at,0);else throw new Error("Unknown depthTexture format")}function Wt(w){const M=n.get(w),N=w.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==w.depthTexture){const Y=w.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),Y){const at=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,Y.removeEventListener("dispose",at)};Y.addEventListener("dispose",at),M.__depthDisposeCallback=at}M.__boundDepthTexture=Y}if(w.depthTexture&&!M.__autoAllocateDepthBuffer){if(N)throw new Error("target.depthTexture not supported in Cube render targets");const Y=w.texture.mipmaps;Y&&Y.length>0?mt(M.__webglFramebuffer[0],w):mt(M.__webglFramebuffer,w)}else if(N){M.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(e.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer[Y]),M.__webglDepthbuffer[Y]===void 0)M.__webglDepthbuffer[Y]=i.createRenderbuffer(),Pt(M.__webglDepthbuffer[Y],w,!1);else{const at=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Z=M.__webglDepthbuffer[Y];i.bindRenderbuffer(i.RENDERBUFFER,Z),i.framebufferRenderbuffer(i.FRAMEBUFFER,at,i.RENDERBUFFER,Z)}}else{const Y=w.texture.mipmaps;if(Y&&Y.length>0?e.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=i.createRenderbuffer(),Pt(M.__webglDepthbuffer,w,!1);else{const at=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Z=M.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,Z),i.framebufferRenderbuffer(i.FRAMEBUFFER,at,i.RENDERBUFFER,Z)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function lt(w,M,N){const Y=n.get(w);M!==void 0&&wt(Y.__webglFramebuffer,w,w.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),N!==void 0&&Wt(w)}function R(w){const M=w.texture,N=n.get(w),Y=n.get(M);w.addEventListener("dispose",C);const at=w.textures,Z=w.isWebGLCubeRenderTarget===!0,Lt=at.length>1;if(Lt||(Y.__webglTexture===void 0&&(Y.__webglTexture=i.createTexture()),Y.__version=M.version,o.memory.textures++),Z){N.__webglFramebuffer=[];for(let gt=0;gt<6;gt++)if(M.mipmaps&&M.mipmaps.length>0){N.__webglFramebuffer[gt]=[];for(let It=0;It<M.mipmaps.length;It++)N.__webglFramebuffer[gt][It]=i.createFramebuffer()}else N.__webglFramebuffer[gt]=i.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){N.__webglFramebuffer=[];for(let gt=0;gt<M.mipmaps.length;gt++)N.__webglFramebuffer[gt]=i.createFramebuffer()}else N.__webglFramebuffer=i.createFramebuffer();if(Lt)for(let gt=0,It=at.length;gt<It;gt++){const Ut=n.get(at[gt]);Ut.__webglTexture===void 0&&(Ut.__webglTexture=i.createTexture(),o.memory.textures++)}if(w.samples>0&&V(w)===!1){N.__webglMultisampledFramebuffer=i.createFramebuffer(),N.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,N.__webglMultisampledFramebuffer);for(let gt=0;gt<at.length;gt++){const It=at[gt];N.__webglColorRenderbuffer[gt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,N.__webglColorRenderbuffer[gt]);const Ut=r.convert(It.format,It.colorSpace),ht=r.convert(It.type),Tt=_(It.internalFormat,Ut,ht,It.colorSpace,w.isXRRenderTarget===!0),Gt=Q(w);i.renderbufferStorageMultisample(i.RENDERBUFFER,Gt,Tt,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+gt,i.RENDERBUFFER,N.__webglColorRenderbuffer[gt])}i.bindRenderbuffer(i.RENDERBUFFER,null),w.depthBuffer&&(N.__webglDepthRenderbuffer=i.createRenderbuffer(),Pt(N.__webglDepthRenderbuffer,w,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Z){e.bindTexture(i.TEXTURE_CUBE_MAP,Y.__webglTexture),At(i.TEXTURE_CUBE_MAP,M);for(let gt=0;gt<6;gt++)if(M.mipmaps&&M.mipmaps.length>0)for(let It=0;It<M.mipmaps.length;It++)wt(N.__webglFramebuffer[gt][It],w,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,It);else wt(N.__webglFramebuffer[gt],w,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0);m(M)&&p(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Lt){for(let gt=0,It=at.length;gt<It;gt++){const Ut=at[gt],ht=n.get(Ut);let Tt=i.TEXTURE_2D;(w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(Tt=w.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(Tt,ht.__webglTexture),At(Tt,Ut),wt(N.__webglFramebuffer,w,Ut,i.COLOR_ATTACHMENT0+gt,Tt,0),m(Ut)&&p(Tt)}e.unbindTexture()}else{let gt=i.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(gt=w.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(gt,Y.__webglTexture),At(gt,M),M.mipmaps&&M.mipmaps.length>0)for(let It=0;It<M.mipmaps.length;It++)wt(N.__webglFramebuffer[It],w,M,i.COLOR_ATTACHMENT0,gt,It);else wt(N.__webglFramebuffer,w,M,i.COLOR_ATTACHMENT0,gt,0);m(M)&&p(gt),e.unbindTexture()}w.depthBuffer&&Wt(w)}function k(w){const M=w.textures;for(let N=0,Y=M.length;N<Y;N++){const at=M[N];if(m(at)){const Z=S(w),Lt=n.get(at).__webglTexture;e.bindTexture(Z,Lt),p(Z),e.unbindTexture()}}}const W=[],G=[];function K(w){if(w.samples>0){if(V(w)===!1){const M=w.textures,N=w.width,Y=w.height;let at=i.COLOR_BUFFER_BIT;const Z=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Lt=n.get(w),gt=M.length>1;if(gt)for(let Ut=0;Ut<M.length;Ut++)e.bindFramebuffer(i.FRAMEBUFFER,Lt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ut,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Lt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ut,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Lt.__webglMultisampledFramebuffer);const It=w.texture.mipmaps;It&&It.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Lt.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Lt.__webglFramebuffer);for(let Ut=0;Ut<M.length;Ut++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(at|=i.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(at|=i.STENCIL_BUFFER_BIT)),gt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Lt.__webglColorRenderbuffer[Ut]);const ht=n.get(M[Ut]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ht,0)}i.blitFramebuffer(0,0,N,Y,0,0,N,Y,at,i.NEAREST),l===!0&&(W.length=0,G.length=0,W.push(i.COLOR_ATTACHMENT0+Ut),w.depthBuffer&&w.resolveDepthBuffer===!1&&(W.push(Z),G.push(Z),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,G)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,W))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),gt)for(let Ut=0;Ut<M.length;Ut++){e.bindFramebuffer(i.FRAMEBUFFER,Lt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ut,i.RENDERBUFFER,Lt.__webglColorRenderbuffer[Ut]);const ht=n.get(M[Ut]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Lt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ut,i.TEXTURE_2D,ht,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Lt.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&l){const M=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[M])}}}function Q(w){return Math.min(s.maxSamples,w.samples)}function V(w){const M=n.get(w);return w.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function nt(w){const M=o.render.frame;h.get(w)!==M&&(h.set(w,M),w.update())}function St(w,M){const N=w.colorSpace,Y=w.format,at=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||N!==ss&&N!==ti&&(ne.getTransfer(N)===oe?(Y!==nn||at!==yn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",N)),M}function yt(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(c.width=w.naturalWidth||w.width,c.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(c.width=w.displayWidth,c.height=w.displayHeight):(c.width=w.width,c.height=w.height),c}this.allocateTextureUnit=O,this.resetTextureUnits=I,this.setTexture2D=H,this.setTexture2DArray=X,this.setTexture3D=tt,this.setTextureCube=q,this.rebindTextures=lt,this.setupRenderTarget=R,this.updateRenderTargetMipmap=k,this.updateMultisampleRenderTarget=K,this.setupDepthRenderbuffer=Wt,this.setupFrameBufferTexture=wt,this.useMultisampledRTT=V}function Cv(i,t){function e(n,s=ti){let r;const o=ne.getTransfer(s);if(n===yn)return i.UNSIGNED_BYTE;if(n===ol)return i.UNSIGNED_SHORT_4_4_4_4;if(n===al)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Lh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Dh)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Ch)return i.BYTE;if(n===Ph)return i.SHORT;if(n===Gs)return i.UNSIGNED_SHORT;if(n===rl)return i.INT;if(n===bi)return i.UNSIGNED_INT;if(n===Mn)return i.FLOAT;if(n===zn)return i.HALF_FLOAT;if(n===Ih)return i.ALPHA;if(n===Uh)return i.RGB;if(n===nn)return i.RGBA;if(n===Ws)return i.DEPTH_COMPONENT;if(n===Xs)return i.DEPTH_STENCIL;if(n===ll)return i.RED;if(n===cl)return i.RED_INTEGER;if(n===Nh)return i.RG;if(n===hl)return i.RG_INTEGER;if(n===ul)return i.RGBA_INTEGER;if(n===Fr||n===Or||n===zr||n===Br)if(o===oe)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Fr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Or)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===zr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Br)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Fr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Or)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===zr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Br)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===va||n===xa||n===_a||n===Ma)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===va)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===xa)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===_a)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ma)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Sa||n===ya||n===Ea)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Sa||n===ya)return o===oe?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Ea)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===ba||n===wa||n===Ta||n===Aa||n===Ra||n===Ca||n===Pa||n===La||n===Da||n===Ia||n===Ua||n===Na||n===Fa||n===Oa)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===ba)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===wa)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ta)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Aa)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ra)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ca)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Pa)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===La)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Da)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ia)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ua)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Na)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Fa)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Oa)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===za||n===Ba||n===ka)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===za)return o===oe?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ba)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ka)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Ha||n===Ga||n===Va||n===Wa)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Ha)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Ga)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Va)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Wa)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Vs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}const Pv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Lv=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Dv{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const n=new Jh(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Ee({vertexShader:Pv,fragmentShader:Lv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new ve(new ln(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Iv extends ds{constructor(t,e){super();const n=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,f=null,d=null,g=null;const x=typeof XRWebGLBinding<"u",m=new Dv,p={},S=e.getContextAttributes();let _=null,v=null;const T=[],A=[],C=new rt;let P=null;const E=new Fe;E.viewport=new se;const y=new Fe;y.viewport=new se;const D=[E,y],I=new Qd;let O=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(et){let it=T[et];return it===void 0&&(it=new zo,T[et]=it),it.getTargetRaySpace()},this.getControllerGrip=function(et){let it=T[et];return it===void 0&&(it=new zo,T[et]=it),it.getGripSpace()},this.getHand=function(et){let it=T[et];return it===void 0&&(it=new zo,T[et]=it),it.getHandSpace()};function H(et){const it=A.indexOf(et.inputSource);if(it===-1)return;const wt=T[it];wt!==void 0&&(wt.update(et.inputSource,et.frame,c||o),wt.dispatchEvent({type:et.type,data:et.inputSource}))}function X(){s.removeEventListener("select",H),s.removeEventListener("selectstart",H),s.removeEventListener("selectend",H),s.removeEventListener("squeeze",H),s.removeEventListener("squeezestart",H),s.removeEventListener("squeezeend",H),s.removeEventListener("end",X),s.removeEventListener("inputsourceschange",tt);for(let et=0;et<T.length;et++){const it=A[et];it!==null&&(A[et]=null,T[et].disconnect(it))}O=null,B=null,m.reset();for(const et in p)delete p[et];t.setRenderTarget(_),d=null,f=null,u=null,s=null,v=null,Ot.stop(),n.isPresenting=!1,t.setPixelRatio(P),t.setSize(C.width,C.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(et){r=et,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(et){a=et,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(et){c=et},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u===null&&x&&(u=new XRWebGLBinding(s,e)),u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(et){if(s=et,s!==null){if(_=t.getRenderTarget(),s.addEventListener("select",H),s.addEventListener("selectstart",H),s.addEventListener("selectend",H),s.addEventListener("squeeze",H),s.addEventListener("squeezestart",H),s.addEventListener("squeezeend",H),s.addEventListener("end",X),s.addEventListener("inputsourceschange",tt),S.xrCompatible!==!0&&await e.makeXRCompatible(),P=t.getPixelRatio(),t.getSize(C),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let wt=null,Pt=null,mt=null;S.depth&&(mt=S.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,wt=S.stencil?Xs:Ws,Pt=S.stencil?Vs:bi);const Wt={colorFormat:e.RGBA8,depthFormat:mt,scaleFactor:r};u=this.getBinding(),f=u.createProjectionLayer(Wt),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),v=new sn(f.textureWidth,f.textureHeight,{format:nn,type:yn,depthTexture:new $h(f.textureWidth,f.textureHeight,Pt,void 0,void 0,void 0,void 0,void 0,void 0,wt),stencilBuffer:S.stencil,colorSpace:t.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const wt={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,e,wt),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),v=new sn(d.framebufferWidth,d.framebufferHeight,{format:nn,type:yn,colorSpace:t.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Ot.setContext(s),Ot.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function tt(et){for(let it=0;it<et.removed.length;it++){const wt=et.removed[it],Pt=A.indexOf(wt);Pt>=0&&(A[Pt]=null,T[Pt].disconnect(wt))}for(let it=0;it<et.added.length;it++){const wt=et.added[it];let Pt=A.indexOf(wt);if(Pt===-1){for(let Wt=0;Wt<T.length;Wt++)if(Wt>=A.length){A.push(wt),Pt=Wt;break}else if(A[Wt]===null){A[Wt]=wt,Pt=Wt;break}if(Pt===-1)break}const mt=T[Pt];mt&&mt.connect(wt)}}const q=new L,ct=new L;function st(et,it,wt){q.setFromMatrixPosition(it.matrixWorld),ct.setFromMatrixPosition(wt.matrixWorld);const Pt=q.distanceTo(ct),mt=it.projectionMatrix.elements,Wt=wt.projectionMatrix.elements,lt=mt[14]/(mt[10]-1),R=mt[14]/(mt[10]+1),k=(mt[9]+1)/mt[5],W=(mt[9]-1)/mt[5],G=(mt[8]-1)/mt[0],K=(Wt[8]+1)/Wt[0],Q=lt*G,V=lt*K,nt=Pt/(-G+K),St=nt*-G;if(it.matrixWorld.decompose(et.position,et.quaternion,et.scale),et.translateX(St),et.translateZ(nt),et.matrixWorld.compose(et.position,et.quaternion,et.scale),et.matrixWorldInverse.copy(et.matrixWorld).invert(),mt[10]===-1)et.projectionMatrix.copy(it.projectionMatrix),et.projectionMatrixInverse.copy(it.projectionMatrixInverse);else{const yt=lt+nt,w=R+nt,M=Q-St,N=V+(Pt-St),Y=k*R/w*yt,at=W*R/w*yt;et.projectionMatrix.makePerspective(M,N,Y,at,yt,w),et.projectionMatrixInverse.copy(et.projectionMatrix).invert()}}function xt(et,it){it===null?et.matrixWorld.copy(et.matrix):et.matrixWorld.multiplyMatrices(it.matrixWorld,et.matrix),et.matrixWorldInverse.copy(et.matrixWorld).invert()}this.updateCamera=function(et){if(s===null)return;let it=et.near,wt=et.far;m.texture!==null&&(m.depthNear>0&&(it=m.depthNear),m.depthFar>0&&(wt=m.depthFar)),I.near=y.near=E.near=it,I.far=y.far=E.far=wt,(O!==I.near||B!==I.far)&&(s.updateRenderState({depthNear:I.near,depthFar:I.far}),O=I.near,B=I.far),I.layers.mask=et.layers.mask|6,E.layers.mask=I.layers.mask&3,y.layers.mask=I.layers.mask&5;const Pt=et.parent,mt=I.cameras;xt(I,Pt);for(let Wt=0;Wt<mt.length;Wt++)xt(mt[Wt],Pt);mt.length===2?st(I,E,y):I.projectionMatrix.copy(E.projectionMatrix),At(et,I,Pt)};function At(et,it,wt){wt===null?et.matrix.copy(it.matrixWorld):(et.matrix.copy(wt.matrixWorld),et.matrix.invert(),et.matrix.multiply(it.matrixWorld)),et.matrix.decompose(et.position,et.quaternion,et.scale),et.updateMatrixWorld(!0),et.projectionMatrix.copy(it.projectionMatrix),et.projectionMatrixInverse.copy(it.projectionMatrixInverse),et.isPerspectiveCamera&&(et.fov=rs*2*Math.atan(1/et.projectionMatrix.elements[5]),et.zoom=1)}this.getCamera=function(){return I},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(et){l=et,f!==null&&(f.fixedFoveation=et),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=et)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(I)},this.getCameraTexture=function(et){return p[et]};let qt=null;function $t(et,it){if(h=it.getViewerPose(c||o),g=it,h!==null){const wt=h.views;d!==null&&(t.setRenderTargetFramebuffer(v,d.framebuffer),t.setRenderTarget(v));let Pt=!1;wt.length!==I.cameras.length&&(I.cameras.length=0,Pt=!0);for(let R=0;R<wt.length;R++){const k=wt[R];let W=null;if(d!==null)W=d.getViewport(k);else{const K=u.getViewSubImage(f,k);W=K.viewport,R===0&&(t.setRenderTargetTextures(v,K.colorTexture,K.depthStencilTexture),t.setRenderTarget(v))}let G=D[R];G===void 0&&(G=new Fe,G.layers.enable(R),G.viewport=new se,D[R]=G),G.matrix.fromArray(k.transform.matrix),G.matrix.decompose(G.position,G.quaternion,G.scale),G.projectionMatrix.fromArray(k.projectionMatrix),G.projectionMatrixInverse.copy(G.projectionMatrix).invert(),G.viewport.set(W.x,W.y,W.width,W.height),R===0&&(I.matrix.copy(G.matrix),I.matrix.decompose(I.position,I.quaternion,I.scale)),Pt===!0&&I.cameras.push(G)}const mt=s.enabledFeatures;if(mt&&mt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){u=n.getBinding();const R=u.getDepthInformation(wt[0]);R&&R.isValid&&R.texture&&m.init(R,s.renderState)}if(mt&&mt.includes("camera-access")&&x){t.state.unbindTexture(),u=n.getBinding();for(let R=0;R<wt.length;R++){const k=wt[R].camera;if(k){let W=p[k];W||(W=new Jh,p[k]=W);const G=u.getCameraImage(k);W.sourceTexture=G}}}}for(let wt=0;wt<T.length;wt++){const Pt=A[wt],mt=T[wt];Pt!==null&&mt!==void 0&&mt.update(Pt,it,c||o)}qt&&qt(et,it),it.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:it}),g=null}const Ot=new ou;Ot.setAnimationLoop($t),this.setAnimationLoop=function(et){qt=et},this.dispose=function(){}}}const ui=new an,Uv=new te;function Nv(i,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Xh(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,S,_,v){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),f(m,p),p.isMeshPhysicalMaterial&&d(m,p,v)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),x(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,S,_):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===ze&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===ze&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const S=t.get(p),_=S.envMap,v=S.envMapRotation;_&&(m.envMap.value=_,ui.copy(v),ui.x*=-1,ui.y*=-1,ui.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(ui.y*=-1,ui.z*=-1),m.envMapRotation.value.setFromMatrix4(Uv.makeRotationFromEuler(ui)),m.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,S,_){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*S,m.scale.value=_*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,S){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===ze&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=S.texture,m.transmissionSamplerSize.value.set(S.width,S.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function x(m,p){const S=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(S.matrixWorld),m.nearDistance.value=S.shadow.camera.near,m.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Fv(i,t,e,n){let s={},r={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(S,_){const v=_.program;n.uniformBlockBinding(S,v)}function c(S,_){let v=s[S.id];v===void 0&&(g(S),v=h(S),s[S.id]=v,S.addEventListener("dispose",m));const T=_.program;n.updateUBOMapping(S,T);const A=t.render.frame;r[S.id]!==A&&(f(S),r[S.id]=A)}function h(S){const _=u();S.__bindingPointIndex=_;const v=i.createBuffer(),T=S.__size,A=S.usage;return i.bindBuffer(i.UNIFORM_BUFFER,v),i.bufferData(i.UNIFORM_BUFFER,T,A),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,_,v),v}function u(){for(let S=0;S<a;S++)if(o.indexOf(S)===-1)return o.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(S){const _=s[S.id],v=S.uniforms,T=S.__cache;i.bindBuffer(i.UNIFORM_BUFFER,_);for(let A=0,C=v.length;A<C;A++){const P=Array.isArray(v[A])?v[A]:[v[A]];for(let E=0,y=P.length;E<y;E++){const D=P[E];if(d(D,A,E,T)===!0){const I=D.__offset,O=Array.isArray(D.value)?D.value:[D.value];let B=0;for(let H=0;H<O.length;H++){const X=O[H],tt=x(X);typeof X=="number"||typeof X=="boolean"?(D.__data[0]=X,i.bufferSubData(i.UNIFORM_BUFFER,I+B,D.__data)):X.isMatrix3?(D.__data[0]=X.elements[0],D.__data[1]=X.elements[1],D.__data[2]=X.elements[2],D.__data[3]=0,D.__data[4]=X.elements[3],D.__data[5]=X.elements[4],D.__data[6]=X.elements[5],D.__data[7]=0,D.__data[8]=X.elements[6],D.__data[9]=X.elements[7],D.__data[10]=X.elements[8],D.__data[11]=0):(X.toArray(D.__data,B),B+=tt.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,I,D.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(S,_,v,T){const A=S.value,C=_+"_"+v;if(T[C]===void 0)return typeof A=="number"||typeof A=="boolean"?T[C]=A:T[C]=A.clone(),!0;{const P=T[C];if(typeof A=="number"||typeof A=="boolean"){if(P!==A)return T[C]=A,!0}else if(P.equals(A)===!1)return P.copy(A),!0}return!1}function g(S){const _=S.uniforms;let v=0;const T=16;for(let C=0,P=_.length;C<P;C++){const E=Array.isArray(_[C])?_[C]:[_[C]];for(let y=0,D=E.length;y<D;y++){const I=E[y],O=Array.isArray(I.value)?I.value:[I.value];for(let B=0,H=O.length;B<H;B++){const X=O[B],tt=x(X),q=v%T,ct=q%tt.boundary,st=q+ct;v+=ct,st!==0&&T-st<tt.storage&&(v+=T-st),I.__data=new Float32Array(tt.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=v,v+=tt.storage}}}const A=v%T;return A>0&&(v+=T-A),S.__size=v,S.__cache={},this}function x(S){const _={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(_.boundary=4,_.storage=4):S.isVector2?(_.boundary=8,_.storage=8):S.isVector3||S.isColor?(_.boundary=16,_.storage=12):S.isVector4?(_.boundary=16,_.storage=16):S.isMatrix3?(_.boundary=48,_.storage=48):S.isMatrix4?(_.boundary=64,_.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),_}function m(S){const _=S.target;_.removeEventListener("dispose",m);const v=o.indexOf(_.__bindingPointIndex);o.splice(v,1),i.deleteBuffer(s[_.id]),delete s[_.id],delete r[_.id]}function p(){for(const S in s)i.deleteBuffer(s[S]);o=[],s={},r={}}return{bind:l,update:c,dispose:p}}class Ov{constructor(t={}){const{canvas:e=Df(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=o;const g=new Uint32Array(4),x=new Int32Array(4);let m=null,p=null;const S=[],_=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ei,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const v=this;let T=!1;this._outputColorSpace=ye;let A=0,C=0,P=null,E=-1,y=null;const D=new se,I=new se;let O=null;const B=new kt(0);let H=0,X=e.width,tt=e.height,q=1,ct=null,st=null;const xt=new se(0,0,X,tt),At=new se(0,0,X,tt);let qt=!1;const $t=new vl;let Ot=!1,et=!1;const it=new te,wt=new L,Pt=new se,mt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Wt=!1;function lt(){return P===null?q:1}let R=n;function k(b,F){return e.getContext(b,F)}try{const b={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${il}`),e.addEventListener("webglcontextlost",_t,!1),e.addEventListener("webglcontextrestored",Ct,!1),e.addEventListener("webglcontextcreationerror",ut,!1),R===null){const F="webgl2";if(R=k(F,b),R===null)throw k(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let W,G,K,Q,V,nt,St,yt,w,M,N,Y,at,Z,Lt,gt,It,Ut,ht,Tt,Gt,Ft,Et,Jt;function U(){W=new Y0(R),W.init(),Ft=new Cv(R,W),G=new k0(R,W,t,Ft),K=new Av(R,W),G.reversedDepthBuffer&&f&&K.buffers.depth.setReversed(!0),Q=new J0(R),V=new pv,nt=new Rv(R,W,K,V,G,Ft,Q),St=new G0(v),yt=new q0(v),w=new np(R),Et=new z0(R,w),M=new K0(R,w,Q,Et),N=new j0(R,M,w,Q),ht=new Z0(R,G,nt),gt=new H0(V),Y=new dv(v,St,yt,W,G,Et,gt),at=new Nv(v,V),Z=new gv,Lt=new yv(W),Ut=new O0(v,St,yt,K,N,d,l),It=new wv(v,N,G),Jt=new Fv(R,Q,G,K),Tt=new B0(R,W,Q),Gt=new $0(R,W,Q),Q.programs=Y.programs,v.capabilities=G,v.extensions=W,v.properties=V,v.renderLists=Z,v.shadowMap=It,v.state=K,v.info=Q}U();const pt=new Iv(v,R);this.xr=pt,this.getContext=function(){return R},this.getContextAttributes=function(){return R.getContextAttributes()},this.forceContextLoss=function(){const b=W.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=W.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(b){b!==void 0&&(q=b,this.setSize(X,tt,!1))},this.getSize=function(b){return b.set(X,tt)},this.setSize=function(b,F,$=!0){if(pt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}X=b,tt=F,e.width=Math.floor(b*q),e.height=Math.floor(F*q),$===!0&&(e.style.width=b+"px",e.style.height=F+"px"),this.setViewport(0,0,b,F)},this.getDrawingBufferSize=function(b){return b.set(X*q,tt*q).floor()},this.setDrawingBufferSize=function(b,F,$){X=b,tt=F,q=$,e.width=Math.floor(b*$),e.height=Math.floor(F*$),this.setViewport(0,0,b,F)},this.getCurrentViewport=function(b){return b.copy(D)},this.getViewport=function(b){return b.copy(xt)},this.setViewport=function(b,F,$,J){b.isVector4?xt.set(b.x,b.y,b.z,b.w):xt.set(b,F,$,J),K.viewport(D.copy(xt).multiplyScalar(q).round())},this.getScissor=function(b){return b.copy(At)},this.setScissor=function(b,F,$,J){b.isVector4?At.set(b.x,b.y,b.z,b.w):At.set(b,F,$,J),K.scissor(I.copy(At).multiplyScalar(q).round())},this.getScissorTest=function(){return qt},this.setScissorTest=function(b){K.setScissorTest(qt=b)},this.setOpaqueSort=function(b){ct=b},this.setTransparentSort=function(b){st=b},this.getClearColor=function(b){return b.copy(Ut.getClearColor())},this.setClearColor=function(){Ut.setClearColor(...arguments)},this.getClearAlpha=function(){return Ut.getClearAlpha()},this.setClearAlpha=function(){Ut.setClearAlpha(...arguments)},this.clear=function(b=!0,F=!0,$=!0){let J=0;if(b){let z=!1;if(P!==null){const ft=P.texture.format;z=ft===ul||ft===hl||ft===cl}if(z){const ft=P.texture.type,bt=ft===yn||ft===bi||ft===Gs||ft===Vs||ft===ol||ft===al,Dt=Ut.getClearColor(),Rt=Ut.getClearAlpha(),Ht=Dt.r,Vt=Dt.g,zt=Dt.b;bt?(g[0]=Ht,g[1]=Vt,g[2]=zt,g[3]=Rt,R.clearBufferuiv(R.COLOR,0,g)):(x[0]=Ht,x[1]=Vt,x[2]=zt,x[3]=Rt,R.clearBufferiv(R.COLOR,0,x))}else J|=R.COLOR_BUFFER_BIT}F&&(J|=R.DEPTH_BUFFER_BIT),$&&(J|=R.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),R.clear(J)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",_t,!1),e.removeEventListener("webglcontextrestored",Ct,!1),e.removeEventListener("webglcontextcreationerror",ut,!1),Ut.dispose(),Z.dispose(),Lt.dispose(),V.dispose(),St.dispose(),yt.dispose(),N.dispose(),Et.dispose(),Jt.dispose(),Y.dispose(),pt.dispose(),pt.removeEventListener("sessionstart",vn),pt.removeEventListener("sessionend",Ol),si.stop()};function _t(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function Ct(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;const b=Q.autoReset,F=It.enabled,$=It.autoUpdate,J=It.needsUpdate,z=It.type;U(),Q.autoReset=b,It.enabled=F,It.autoUpdate=$,It.needsUpdate=J,It.type=z}function ut(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function ot(b){const F=b.target;F.removeEventListener("dispose",ot),Nt(F)}function Nt(b){Kt(b),V.remove(b)}function Kt(b){const F=V.get(b).programs;F!==void 0&&(F.forEach(function($){Y.releaseProgram($)}),b.isShaderMaterial&&Y.releaseShaderCache(b))}this.renderBufferDirect=function(b,F,$,J,z,ft){F===null&&(F=mt);const bt=z.isMesh&&z.matrixWorld.determinant()<0,Dt=Cu(b,F,$,J,z);K.setMaterial(J,bt);let Rt=$.index,Ht=1;if(J.wireframe===!0){if(Rt=M.getWireframeAttribute($),Rt===void 0)return;Ht=2}const Vt=$.drawRange,zt=$.attributes.position;let ee=Vt.start*Ht,ae=(Vt.start+Vt.count)*Ht;ft!==null&&(ee=Math.max(ee,ft.start*Ht),ae=Math.min(ae,(ft.start+ft.count)*Ht)),Rt!==null?(ee=Math.max(ee,0),ae=Math.min(ae,Rt.count)):zt!=null&&(ee=Math.max(ee,0),ae=Math.min(ae,zt.count));const xe=ae-ee;if(xe<0||xe===1/0)return;Et.setup(z,J,Dt,$,Rt);let fe,le=Tt;if(Rt!==null&&(fe=w.get(Rt),le=Gt,le.setIndex(fe)),z.isMesh)J.wireframe===!0?(K.setLineWidth(J.wireframeLinewidth*lt()),le.setMode(R.LINES)):le.setMode(R.TRIANGLES);else if(z.isLine){let Bt=J.linewidth;Bt===void 0&&(Bt=1),K.setLineWidth(Bt*lt()),z.isLineSegments?le.setMode(R.LINES):z.isLineLoop?le.setMode(R.LINE_LOOP):le.setMode(R.LINE_STRIP)}else z.isPoints?le.setMode(R.POINTS):z.isSprite&&le.setMode(R.TRIANGLES);if(z.isBatchedMesh)if(z._multiDrawInstances!==null)Ys("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),le.renderMultiDrawInstances(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount,z._multiDrawInstances);else if(W.get("WEBGL_multi_draw"))le.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{const Bt=z._multiDrawStarts,pe=z._multiDrawCounts,ie=z._multiDrawCount,qe=Rt?w.get(Rt).bytesPerElement:1,Li=V.get(J).currentProgram.getUniforms();for(let Ye=0;Ye<ie;Ye++)Li.setValue(R,"_gl_DrawID",Ye),le.render(Bt[Ye]/qe,pe[Ye])}else if(z.isInstancedMesh)le.renderInstances(ee,xe,z.count);else if($.isInstancedBufferGeometry){const Bt=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,pe=Math.min($.instanceCount,Bt);le.renderInstances(ee,xe,pe)}else le.render(ee,xe)};function he(b,F,$){b.transparent===!0&&b.side===We&&b.forceSinglePass===!1?(b.side=ze,b.needsUpdate=!0,nr(b,F,$),b.side=Gn,b.needsUpdate=!0,nr(b,F,$),b.side=We):nr(b,F,$)}this.compile=function(b,F,$=null){$===null&&($=b),p=Lt.get($),p.init(F),_.push(p),$.traverseVisible(function(z){z.isLight&&z.layers.test(F.layers)&&(p.pushLight(z),z.castShadow&&p.pushShadow(z))}),b!==$&&b.traverseVisible(function(z){z.isLight&&z.layers.test(F.layers)&&(p.pushLight(z),z.castShadow&&p.pushShadow(z))}),p.setupLights();const J=new Set;return b.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;const ft=z.material;if(ft)if(Array.isArray(ft))for(let bt=0;bt<ft.length;bt++){const Dt=ft[bt];he(Dt,$,z),J.add(Dt)}else he(ft,$,z),J.add(ft)}),p=_.pop(),J},this.compileAsync=function(b,F,$=null){const J=this.compile(b,F,$);return new Promise(z=>{function ft(){if(J.forEach(function(bt){V.get(bt).currentProgram.isReady()&&J.delete(bt)}),J.size===0){z(b);return}setTimeout(ft,10)}W.get("KHR_parallel_shader_compile")!==null?ft():setTimeout(ft,10)})};let re=null;function Tn(b){re&&re(b)}function vn(){si.stop()}function Ol(){si.start()}const si=new ou;si.setAnimationLoop(Tn),typeof self<"u"&&si.setContext(self),this.setAnimationLoop=function(b){re=b,pt.setAnimationLoop(b),b===null?si.stop():si.start()},pt.addEventListener("sessionstart",vn),pt.addEventListener("sessionend",Ol),this.render=function(b,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),pt.enabled===!0&&pt.isPresenting===!0&&(pt.cameraAutoUpdate===!0&&pt.updateCamera(F),F=pt.getCamera()),b.isScene===!0&&b.onBeforeRender(v,b,F,P),p=Lt.get(b,_.length),p.init(F),_.push(p),it.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),$t.setFromProjectionMatrix(it,Sn,F.reversedDepth),et=this.localClippingEnabled,Ot=gt.init(this.clippingPlanes,et),m=Z.get(b,S.length),m.init(),S.push(m),pt.enabled===!0&&pt.isPresenting===!0){const ft=v.xr.getDepthSensingMesh();ft!==null&&po(ft,F,-1/0,v.sortObjects)}po(b,F,0,v.sortObjects),m.finish(),v.sortObjects===!0&&m.sort(ct,st),Wt=pt.enabled===!1||pt.isPresenting===!1||pt.hasDepthSensing()===!1,Wt&&Ut.addToRenderList(m,b),this.info.render.frame++,Ot===!0&&gt.beginShadows();const $=p.state.shadowsArray;It.render($,b,F),Ot===!0&&gt.endShadows(),this.info.autoReset===!0&&this.info.reset();const J=m.opaque,z=m.transmissive;if(p.setupLights(),F.isArrayCamera){const ft=F.cameras;if(z.length>0)for(let bt=0,Dt=ft.length;bt<Dt;bt++){const Rt=ft[bt];Bl(J,z,b,Rt)}Wt&&Ut.render(b);for(let bt=0,Dt=ft.length;bt<Dt;bt++){const Rt=ft[bt];zl(m,b,Rt,Rt.viewport)}}else z.length>0&&Bl(J,z,b,F),Wt&&Ut.render(b),zl(m,b,F);P!==null&&C===0&&(nt.updateMultisampleRenderTarget(P),nt.updateRenderTargetMipmap(P)),b.isScene===!0&&b.onAfterRender(v,b,F),Et.resetDefaultState(),E=-1,y=null,_.pop(),_.length>0?(p=_[_.length-1],Ot===!0&&gt.setGlobalState(v.clippingPlanes,p.state.camera)):p=null,S.pop(),S.length>0?m=S[S.length-1]:m=null};function po(b,F,$,J){if(b.visible===!1)return;if(b.layers.test(F.layers)){if(b.isGroup)$=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(F);else if(b.isLight)p.pushLight(b),b.castShadow&&p.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||$t.intersectsSprite(b)){J&&Pt.setFromMatrixPosition(b.matrixWorld).applyMatrix4(it);const bt=N.update(b),Dt=b.material;Dt.visible&&m.push(b,bt,Dt,$,Pt.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||$t.intersectsObject(b))){const bt=N.update(b),Dt=b.material;if(J&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Pt.copy(b.boundingSphere.center)):(bt.boundingSphere===null&&bt.computeBoundingSphere(),Pt.copy(bt.boundingSphere.center)),Pt.applyMatrix4(b.matrixWorld).applyMatrix4(it)),Array.isArray(Dt)){const Rt=bt.groups;for(let Ht=0,Vt=Rt.length;Ht<Vt;Ht++){const zt=Rt[Ht],ee=Dt[zt.materialIndex];ee&&ee.visible&&m.push(b,bt,ee,$,Pt.z,zt)}}else Dt.visible&&m.push(b,bt,Dt,$,Pt.z,null)}}const ft=b.children;for(let bt=0,Dt=ft.length;bt<Dt;bt++)po(ft[bt],F,$,J)}function zl(b,F,$,J){const z=b.opaque,ft=b.transmissive,bt=b.transparent;p.setupLightsView($),Ot===!0&&gt.setGlobalState(v.clippingPlanes,$),J&&K.viewport(D.copy(J)),z.length>0&&er(z,F,$),ft.length>0&&er(ft,F,$),bt.length>0&&er(bt,F,$),K.buffers.depth.setTest(!0),K.buffers.depth.setMask(!0),K.buffers.color.setMask(!0),K.setPolygonOffset(!1)}function Bl(b,F,$,J){if(($.isScene===!0?$.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[J.id]===void 0&&(p.state.transmissionRenderTarget[J.id]=new sn(1,1,{generateMipmaps:!0,type:W.has("EXT_color_buffer_half_float")||W.has("EXT_color_buffer_float")?zn:yn,minFilter:Nn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ne.workingColorSpace}));const ft=p.state.transmissionRenderTarget[J.id],bt=J.viewport||D;ft.setSize(bt.z*v.transmissionResolutionScale,bt.w*v.transmissionResolutionScale);const Dt=v.getRenderTarget(),Rt=v.getActiveCubeFace(),Ht=v.getActiveMipmapLevel();v.setRenderTarget(ft),v.getClearColor(B),H=v.getClearAlpha(),H<1&&v.setClearColor(16777215,.5),v.clear(),Wt&&Ut.render($);const Vt=v.toneMapping;v.toneMapping=ei;const zt=J.viewport;if(J.viewport!==void 0&&(J.viewport=void 0),p.setupLightsView(J),Ot===!0&&gt.setGlobalState(v.clippingPlanes,J),er(b,$,J),nt.updateMultisampleRenderTarget(ft),nt.updateRenderTargetMipmap(ft),W.has("WEBGL_multisampled_render_to_texture")===!1){let ee=!1;for(let ae=0,xe=F.length;ae<xe;ae++){const fe=F[ae],le=fe.object,Bt=fe.geometry,pe=fe.material,ie=fe.group;if(pe.side===We&&le.layers.test(J.layers)){const qe=pe.side;pe.side=ze,pe.needsUpdate=!0,kl(le,$,J,Bt,pe,ie),pe.side=qe,pe.needsUpdate=!0,ee=!0}}ee===!0&&(nt.updateMultisampleRenderTarget(ft),nt.updateRenderTargetMipmap(ft))}v.setRenderTarget(Dt,Rt,Ht),v.setClearColor(B,H),zt!==void 0&&(J.viewport=zt),v.toneMapping=Vt}function er(b,F,$){const J=F.isScene===!0?F.overrideMaterial:null;for(let z=0,ft=b.length;z<ft;z++){const bt=b[z],Dt=bt.object,Rt=bt.geometry,Ht=bt.group;let Vt=bt.material;Vt.allowOverride===!0&&J!==null&&(Vt=J),Dt.layers.test($.layers)&&kl(Dt,F,$,Rt,Vt,Ht)}}function kl(b,F,$,J,z,ft){b.onBeforeRender(v,F,$,J,z,ft),b.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),z.onBeforeRender(v,F,$,J,b,ft),z.transparent===!0&&z.side===We&&z.forceSinglePass===!1?(z.side=ze,z.needsUpdate=!0,v.renderBufferDirect($,F,J,z,b,ft),z.side=Gn,z.needsUpdate=!0,v.renderBufferDirect($,F,J,z,b,ft),z.side=We):v.renderBufferDirect($,F,J,z,b,ft),b.onAfterRender(v,F,$,J,z,ft)}function nr(b,F,$){F.isScene!==!0&&(F=mt);const J=V.get(b),z=p.state.lights,ft=p.state.shadowsArray,bt=z.state.version,Dt=Y.getParameters(b,z.state,ft,F,$),Rt=Y.getProgramCacheKey(Dt);let Ht=J.programs;J.environment=b.isMeshStandardMaterial?F.environment:null,J.fog=F.fog,J.envMap=(b.isMeshStandardMaterial?yt:St).get(b.envMap||J.environment),J.envMapRotation=J.environment!==null&&b.envMap===null?F.environmentRotation:b.envMapRotation,Ht===void 0&&(b.addEventListener("dispose",ot),Ht=new Map,J.programs=Ht);let Vt=Ht.get(Rt);if(Vt!==void 0){if(J.currentProgram===Vt&&J.lightsStateVersion===bt)return Gl(b,Dt),Vt}else Dt.uniforms=Y.getUniforms(b),b.onBeforeCompile(Dt,v),Vt=Y.acquireProgram(Dt,Rt),Ht.set(Rt,Vt),J.uniforms=Dt.uniforms;const zt=J.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(zt.clippingPlanes=gt.uniform),Gl(b,Dt),J.needsLights=Lu(b),J.lightsStateVersion=bt,J.needsLights&&(zt.ambientLightColor.value=z.state.ambient,zt.lightProbe.value=z.state.probe,zt.directionalLights.value=z.state.directional,zt.directionalLightShadows.value=z.state.directionalShadow,zt.spotLights.value=z.state.spot,zt.spotLightShadows.value=z.state.spotShadow,zt.rectAreaLights.value=z.state.rectArea,zt.ltc_1.value=z.state.rectAreaLTC1,zt.ltc_2.value=z.state.rectAreaLTC2,zt.pointLights.value=z.state.point,zt.pointLightShadows.value=z.state.pointShadow,zt.hemisphereLights.value=z.state.hemi,zt.directionalShadowMap.value=z.state.directionalShadowMap,zt.directionalShadowMatrix.value=z.state.directionalShadowMatrix,zt.spotShadowMap.value=z.state.spotShadowMap,zt.spotLightMatrix.value=z.state.spotLightMatrix,zt.spotLightMap.value=z.state.spotLightMap,zt.pointShadowMap.value=z.state.pointShadowMap,zt.pointShadowMatrix.value=z.state.pointShadowMatrix),J.currentProgram=Vt,J.uniformsList=null,Vt}function Hl(b){if(b.uniformsList===null){const F=b.currentProgram.getUniforms();b.uniformsList=kr.seqWithValue(F.seq,b.uniforms)}return b.uniformsList}function Gl(b,F){const $=V.get(b);$.outputColorSpace=F.outputColorSpace,$.batching=F.batching,$.batchingColor=F.batchingColor,$.instancing=F.instancing,$.instancingColor=F.instancingColor,$.instancingMorph=F.instancingMorph,$.skinning=F.skinning,$.morphTargets=F.morphTargets,$.morphNormals=F.morphNormals,$.morphColors=F.morphColors,$.morphTargetsCount=F.morphTargetsCount,$.numClippingPlanes=F.numClippingPlanes,$.numIntersection=F.numClipIntersection,$.vertexAlphas=F.vertexAlphas,$.vertexTangents=F.vertexTangents,$.toneMapping=F.toneMapping}function Cu(b,F,$,J,z){F.isScene!==!0&&(F=mt),nt.resetTextureUnits();const ft=F.fog,bt=J.isMeshStandardMaterial?F.environment:null,Dt=P===null?v.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:ss,Rt=(J.isMeshStandardMaterial?yt:St).get(J.envMap||bt),Ht=J.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,Vt=!!$.attributes.tangent&&(!!J.normalMap||J.anisotropy>0),zt=!!$.morphAttributes.position,ee=!!$.morphAttributes.normal,ae=!!$.morphAttributes.color;let xe=ei;J.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(xe=v.toneMapping);const fe=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,le=fe!==void 0?fe.length:0,Bt=V.get(J),pe=p.state.lights;if(Ot===!0&&(et===!0||b!==y)){const De=b===y&&J.id===E;gt.setState(J,b,De)}let ie=!1;J.version===Bt.__version?(Bt.needsLights&&Bt.lightsStateVersion!==pe.state.version||Bt.outputColorSpace!==Dt||z.isBatchedMesh&&Bt.batching===!1||!z.isBatchedMesh&&Bt.batching===!0||z.isBatchedMesh&&Bt.batchingColor===!0&&z.colorTexture===null||z.isBatchedMesh&&Bt.batchingColor===!1&&z.colorTexture!==null||z.isInstancedMesh&&Bt.instancing===!1||!z.isInstancedMesh&&Bt.instancing===!0||z.isSkinnedMesh&&Bt.skinning===!1||!z.isSkinnedMesh&&Bt.skinning===!0||z.isInstancedMesh&&Bt.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&Bt.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&Bt.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&Bt.instancingMorph===!1&&z.morphTexture!==null||Bt.envMap!==Rt||J.fog===!0&&Bt.fog!==ft||Bt.numClippingPlanes!==void 0&&(Bt.numClippingPlanes!==gt.numPlanes||Bt.numIntersection!==gt.numIntersection)||Bt.vertexAlphas!==Ht||Bt.vertexTangents!==Vt||Bt.morphTargets!==zt||Bt.morphNormals!==ee||Bt.morphColors!==ae||Bt.toneMapping!==xe||Bt.morphTargetsCount!==le)&&(ie=!0):(ie=!0,Bt.__version=J.version);let qe=Bt.currentProgram;ie===!0&&(qe=nr(J,F,z));let Li=!1,Ye=!1,_s=!1;const me=qe.getUniforms(),Ze=Bt.uniforms;if(K.useProgram(qe.program)&&(Li=!0,Ye=!0,_s=!0),J.id!==E&&(E=J.id,Ye=!0),Li||y!==b){K.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),me.setValue(R,"projectionMatrix",b.projectionMatrix),me.setValue(R,"viewMatrix",b.matrixWorldInverse);const Be=me.map.cameraPosition;Be!==void 0&&Be.setValue(R,wt.setFromMatrixPosition(b.matrixWorld)),G.logarithmicDepthBuffer&&me.setValue(R,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(J.isMeshPhongMaterial||J.isMeshToonMaterial||J.isMeshLambertMaterial||J.isMeshBasicMaterial||J.isMeshStandardMaterial||J.isShaderMaterial)&&me.setValue(R,"isOrthographic",b.isOrthographicCamera===!0),y!==b&&(y=b,Ye=!0,_s=!0)}if(z.isSkinnedMesh){me.setOptional(R,z,"bindMatrix"),me.setOptional(R,z,"bindMatrixInverse");const De=z.skeleton;De&&(De.boneTexture===null&&De.computeBoneTexture(),me.setValue(R,"boneTexture",De.boneTexture,nt))}z.isBatchedMesh&&(me.setOptional(R,z,"batchingTexture"),me.setValue(R,"batchingTexture",z._matricesTexture,nt),me.setOptional(R,z,"batchingIdTexture"),me.setValue(R,"batchingIdTexture",z._indirectTexture,nt),me.setOptional(R,z,"batchingColorTexture"),z._colorsTexture!==null&&me.setValue(R,"batchingColorTexture",z._colorsTexture,nt));const je=$.morphAttributes;if((je.position!==void 0||je.normal!==void 0||je.color!==void 0)&&ht.update(z,$,qe),(Ye||Bt.receiveShadow!==z.receiveShadow)&&(Bt.receiveShadow=z.receiveShadow,me.setValue(R,"receiveShadow",z.receiveShadow)),J.isMeshGouraudMaterial&&J.envMap!==null&&(Ze.envMap.value=Rt,Ze.flipEnvMap.value=Rt.isCubeTexture&&Rt.isRenderTargetTexture===!1?-1:1),J.isMeshStandardMaterial&&J.envMap===null&&F.environment!==null&&(Ze.envMapIntensity.value=F.environmentIntensity),Ye&&(me.setValue(R,"toneMappingExposure",v.toneMappingExposure),Bt.needsLights&&Pu(Ze,_s),ft&&J.fog===!0&&at.refreshFogUniforms(Ze,ft),at.refreshMaterialUniforms(Ze,J,q,tt,p.state.transmissionRenderTarget[b.id]),kr.upload(R,Hl(Bt),Ze,nt)),J.isShaderMaterial&&J.uniformsNeedUpdate===!0&&(kr.upload(R,Hl(Bt),Ze,nt),J.uniformsNeedUpdate=!1),J.isSpriteMaterial&&me.setValue(R,"center",z.center),me.setValue(R,"modelViewMatrix",z.modelViewMatrix),me.setValue(R,"normalMatrix",z.normalMatrix),me.setValue(R,"modelMatrix",z.matrixWorld),J.isShaderMaterial||J.isRawShaderMaterial){const De=J.uniformsGroups;for(let Be=0,mo=De.length;Be<mo;Be++){const ri=De[Be];Jt.update(ri,qe),Jt.bind(ri,qe)}}return qe}function Pu(b,F){b.ambientLightColor.needsUpdate=F,b.lightProbe.needsUpdate=F,b.directionalLights.needsUpdate=F,b.directionalLightShadows.needsUpdate=F,b.pointLights.needsUpdate=F,b.pointLightShadows.needsUpdate=F,b.spotLights.needsUpdate=F,b.spotLightShadows.needsUpdate=F,b.rectAreaLights.needsUpdate=F,b.hemisphereLights.needsUpdate=F}function Lu(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(b,F,$){const J=V.get(b);J.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,J.__autoAllocateDepthBuffer===!1&&(J.__useRenderToTexture=!1),V.get(b.texture).__webglTexture=F,V.get(b.depthTexture).__webglTexture=J.__autoAllocateDepthBuffer?void 0:$,J.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,F){const $=V.get(b);$.__webglFramebuffer=F,$.__useDefaultFramebuffer=F===void 0};const Du=R.createFramebuffer();this.setRenderTarget=function(b,F=0,$=0){P=b,A=F,C=$;let J=!0,z=null,ft=!1,bt=!1;if(b){const Rt=V.get(b);if(Rt.__useDefaultFramebuffer!==void 0)K.bindFramebuffer(R.FRAMEBUFFER,null),J=!1;else if(Rt.__webglFramebuffer===void 0)nt.setupRenderTarget(b);else if(Rt.__hasExternalTextures)nt.rebindTextures(b,V.get(b.texture).__webglTexture,V.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const zt=b.depthTexture;if(Rt.__boundDepthTexture!==zt){if(zt!==null&&V.has(zt)&&(b.width!==zt.image.width||b.height!==zt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");nt.setupDepthRenderbuffer(b)}}const Ht=b.texture;(Ht.isData3DTexture||Ht.isDataArrayTexture||Ht.isCompressedArrayTexture)&&(bt=!0);const Vt=V.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Vt[F])?z=Vt[F][$]:z=Vt[F],ft=!0):b.samples>0&&nt.useMultisampledRTT(b)===!1?z=V.get(b).__webglMultisampledFramebuffer:Array.isArray(Vt)?z=Vt[$]:z=Vt,D.copy(b.viewport),I.copy(b.scissor),O=b.scissorTest}else D.copy(xt).multiplyScalar(q).floor(),I.copy(At).multiplyScalar(q).floor(),O=qt;if($!==0&&(z=Du),K.bindFramebuffer(R.FRAMEBUFFER,z)&&J&&K.drawBuffers(b,z),K.viewport(D),K.scissor(I),K.setScissorTest(O),ft){const Rt=V.get(b.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_CUBE_MAP_POSITIVE_X+F,Rt.__webglTexture,$)}else if(bt){const Rt=F;for(let Ht=0;Ht<b.textures.length;Ht++){const Vt=V.get(b.textures[Ht]);R.framebufferTextureLayer(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0+Ht,Vt.__webglTexture,$,Rt)}}else if(b!==null&&$!==0){const Rt=V.get(b.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,Rt.__webglTexture,$)}E=-1},this.readRenderTargetPixels=function(b,F,$,J,z,ft,bt,Dt=0){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Rt=V.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&bt!==void 0&&(Rt=Rt[bt]),Rt){K.bindFramebuffer(R.FRAMEBUFFER,Rt);try{const Ht=b.textures[Dt],Vt=Ht.format,zt=Ht.type;if(!G.textureFormatReadable(Vt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!G.textureTypeReadable(zt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=b.width-J&&$>=0&&$<=b.height-z&&(b.textures.length>1&&R.readBuffer(R.COLOR_ATTACHMENT0+Dt),R.readPixels(F,$,J,z,Ft.convert(Vt),Ft.convert(zt),ft))}finally{const Ht=P!==null?V.get(P).__webglFramebuffer:null;K.bindFramebuffer(R.FRAMEBUFFER,Ht)}}},this.readRenderTargetPixelsAsync=async function(b,F,$,J,z,ft,bt,Dt=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Rt=V.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&bt!==void 0&&(Rt=Rt[bt]),Rt)if(F>=0&&F<=b.width-J&&$>=0&&$<=b.height-z){K.bindFramebuffer(R.FRAMEBUFFER,Rt);const Ht=b.textures[Dt],Vt=Ht.format,zt=Ht.type;if(!G.textureFormatReadable(Vt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!G.textureTypeReadable(zt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ee=R.createBuffer();R.bindBuffer(R.PIXEL_PACK_BUFFER,ee),R.bufferData(R.PIXEL_PACK_BUFFER,ft.byteLength,R.STREAM_READ),b.textures.length>1&&R.readBuffer(R.COLOR_ATTACHMENT0+Dt),R.readPixels(F,$,J,z,Ft.convert(Vt),Ft.convert(zt),0);const ae=P!==null?V.get(P).__webglFramebuffer:null;K.bindFramebuffer(R.FRAMEBUFFER,ae);const xe=R.fenceSync(R.SYNC_GPU_COMMANDS_COMPLETE,0);return R.flush(),await If(R,xe,4),R.bindBuffer(R.PIXEL_PACK_BUFFER,ee),R.getBufferSubData(R.PIXEL_PACK_BUFFER,0,ft),R.deleteBuffer(ee),R.deleteSync(xe),ft}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,F=null,$=0){const J=Math.pow(2,-$),z=Math.floor(b.image.width*J),ft=Math.floor(b.image.height*J),bt=F!==null?F.x:0,Dt=F!==null?F.y:0;nt.setTexture2D(b,0),R.copyTexSubImage2D(R.TEXTURE_2D,$,0,0,bt,Dt,z,ft),K.unbindTexture()};const Iu=R.createFramebuffer(),Uu=R.createFramebuffer();this.copyTextureToTexture=function(b,F,$=null,J=null,z=0,ft=null){ft===null&&(z!==0?(Ys("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ft=z,z=0):ft=0);let bt,Dt,Rt,Ht,Vt,zt,ee,ae,xe;const fe=b.isCompressedTexture?b.mipmaps[ft]:b.image;if($!==null)bt=$.max.x-$.min.x,Dt=$.max.y-$.min.y,Rt=$.isBox3?$.max.z-$.min.z:1,Ht=$.min.x,Vt=$.min.y,zt=$.isBox3?$.min.z:0;else{const je=Math.pow(2,-z);bt=Math.floor(fe.width*je),Dt=Math.floor(fe.height*je),b.isDataArrayTexture?Rt=fe.depth:b.isData3DTexture?Rt=Math.floor(fe.depth*je):Rt=1,Ht=0,Vt=0,zt=0}J!==null?(ee=J.x,ae=J.y,xe=J.z):(ee=0,ae=0,xe=0);const le=Ft.convert(F.format),Bt=Ft.convert(F.type);let pe;F.isData3DTexture?(nt.setTexture3D(F,0),pe=R.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(nt.setTexture2DArray(F,0),pe=R.TEXTURE_2D_ARRAY):(nt.setTexture2D(F,0),pe=R.TEXTURE_2D),R.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,F.flipY),R.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),R.pixelStorei(R.UNPACK_ALIGNMENT,F.unpackAlignment);const ie=R.getParameter(R.UNPACK_ROW_LENGTH),qe=R.getParameter(R.UNPACK_IMAGE_HEIGHT),Li=R.getParameter(R.UNPACK_SKIP_PIXELS),Ye=R.getParameter(R.UNPACK_SKIP_ROWS),_s=R.getParameter(R.UNPACK_SKIP_IMAGES);R.pixelStorei(R.UNPACK_ROW_LENGTH,fe.width),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,fe.height),R.pixelStorei(R.UNPACK_SKIP_PIXELS,Ht),R.pixelStorei(R.UNPACK_SKIP_ROWS,Vt),R.pixelStorei(R.UNPACK_SKIP_IMAGES,zt);const me=b.isDataArrayTexture||b.isData3DTexture,Ze=F.isDataArrayTexture||F.isData3DTexture;if(b.isDepthTexture){const je=V.get(b),De=V.get(F),Be=V.get(je.__renderTarget),mo=V.get(De.__renderTarget);K.bindFramebuffer(R.READ_FRAMEBUFFER,Be.__webglFramebuffer),K.bindFramebuffer(R.DRAW_FRAMEBUFFER,mo.__webglFramebuffer);for(let ri=0;ri<Rt;ri++)me&&(R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,V.get(b).__webglTexture,z,zt+ri),R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,V.get(F).__webglTexture,ft,xe+ri)),R.blitFramebuffer(Ht,Vt,bt,Dt,ee,ae,bt,Dt,R.DEPTH_BUFFER_BIT,R.NEAREST);K.bindFramebuffer(R.READ_FRAMEBUFFER,null),K.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else if(z!==0||b.isRenderTargetTexture||V.has(b)){const je=V.get(b),De=V.get(F);K.bindFramebuffer(R.READ_FRAMEBUFFER,Iu),K.bindFramebuffer(R.DRAW_FRAMEBUFFER,Uu);for(let Be=0;Be<Rt;Be++)me?R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,je.__webglTexture,z,zt+Be):R.framebufferTexture2D(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,je.__webglTexture,z),Ze?R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,De.__webglTexture,ft,xe+Be):R.framebufferTexture2D(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,De.__webglTexture,ft),z!==0?R.blitFramebuffer(Ht,Vt,bt,Dt,ee,ae,bt,Dt,R.COLOR_BUFFER_BIT,R.NEAREST):Ze?R.copyTexSubImage3D(pe,ft,ee,ae,xe+Be,Ht,Vt,bt,Dt):R.copyTexSubImage2D(pe,ft,ee,ae,Ht,Vt,bt,Dt);K.bindFramebuffer(R.READ_FRAMEBUFFER,null),K.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else Ze?b.isDataTexture||b.isData3DTexture?R.texSubImage3D(pe,ft,ee,ae,xe,bt,Dt,Rt,le,Bt,fe.data):F.isCompressedArrayTexture?R.compressedTexSubImage3D(pe,ft,ee,ae,xe,bt,Dt,Rt,le,fe.data):R.texSubImage3D(pe,ft,ee,ae,xe,bt,Dt,Rt,le,Bt,fe):b.isDataTexture?R.texSubImage2D(R.TEXTURE_2D,ft,ee,ae,bt,Dt,le,Bt,fe.data):b.isCompressedTexture?R.compressedTexSubImage2D(R.TEXTURE_2D,ft,ee,ae,fe.width,fe.height,le,fe.data):R.texSubImage2D(R.TEXTURE_2D,ft,ee,ae,bt,Dt,le,Bt,fe);R.pixelStorei(R.UNPACK_ROW_LENGTH,ie),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,qe),R.pixelStorei(R.UNPACK_SKIP_PIXELS,Li),R.pixelStorei(R.UNPACK_SKIP_ROWS,Ye),R.pixelStorei(R.UNPACK_SKIP_IMAGES,_s),ft===0&&F.generateMipmaps&&R.generateMipmap(pe),K.unbindTexture()},this.initRenderTarget=function(b){V.get(b).__webglFramebuffer===void 0&&nt.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?nt.setTextureCube(b,0):b.isData3DTexture?nt.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?nt.setTexture2DArray(b,0):nt.setTexture2D(b,0),K.unbindTexture()},this.resetState=function(){A=0,C=0,P=null,K.reset(),Et.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Sn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=ne._getDrawingBufferColorSpace(t),e.unpackColorSpace=ne._getUnpackColorSpace()}}const Hr={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class xs{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const zv=new Rl(-1,1,1,-1,0,1);class Bv extends ue{constructor(){super(),this.setAttribute("position",new Yt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Yt([0,2,0,0,2,0],2))}}const kv=new Bv;class Pl{constructor(t){this._mesh=new ve(kv,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,zv)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}class Hv extends xs{constructor(t,e="tDiffuse"){super(),this.textureID=e,this.uniforms=null,this.material=null,t instanceof Ee?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=wi.clone(t.uniforms),this.material=new Ee({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this._fsQuad=new Pl(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class Zc extends xs{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){const s=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}}class Gv extends xs{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}}class Vv{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){const n=t.getSize(new rt);this._width=n.width,this._height=n.height,e=new sn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:zn}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Hv(Hr),this.copyPass.material.blending=On,this.clock=new tp}swapBuffers(){const t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){const e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());const e=this.renderer.getRenderTarget();let n=!1;for(let s=0,r=this.passes.length;s<r;s++){const o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),o.needsSwap){if(n){const a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Zc!==void 0&&(o instanceof Zc?n=!0:o instanceof Gv&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){const e=this.renderer.getSize(new rt);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;const n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class Wv extends xs{constructor(t,e,n=null,s=null,r=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new kt}render(t,e,n){const s=t.autoClear;t.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),t.autoClear=s}}const Xv={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new kt(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class cs extends xs{constructor(t,e=1,n,s){super(),this.strength=e,this.radius=n,this.threshold=s,this.resolution=t!==void 0?new rt(t.x,t.y):new rt(256,256),this.clearColor=new kt(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new sn(r,o,{type:zn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){const u=new sn(r,o,{type:zn});u.texture.name="UnrealBloomPass.h"+h,u.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(u);const f=new sn(r,o,{type:zn});f.texture.name="UnrealBloomPass.v"+h,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),r=Math.round(r/2),o=Math.round(o/2)}const a=Xv;this.highPassUniforms=wi.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Ee({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];const l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new rt(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new L(1,1,1),new L(1,1,1),new L(1,1,1),new L(1,1,1),new L(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=wi.clone(Hr.uniforms),this.blendMaterial=new Ee({uniforms:this.copyUniforms,vertexShader:Hr.vertexShader,fragmentShader:Hr.fragmentShader,blending:Hs,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new kt,this._oldClearAlpha=1,this._basic=new _n,this._fsQuad=new Pl(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(t,e){let n=Math.round(t/2),s=Math.round(e/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new rt(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(t,e,n,s,r){t.getClearColor(this._oldClearColor),this._oldClearAlpha=t.getClearAlpha();const o=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,t.setRenderTarget(null),t.clear(),this._fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this._fsQuad.render(t);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=cs.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this._fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=cs.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this._fsQuad.render(t),a=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this._fsQuad.render(t),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(n),this._fsQuad.render(t)),t.setClearColor(this._oldClearColor,this._oldClearAlpha),t.autoClear=o}_getSeparableBlurMaterial(t){const e=[];for(let n=0;n<t;n++)e.push(.39894*Math.exp(-.5*n*n/(t*t))/t);return new Ee({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new rt(.5,.5)},direction:{value:new rt(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}_getCompositeMaterial(t){return new Ee({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}}cs.BlurDirectionX=new rt(1,0);cs.BlurDirectionY=new rt(0,1);const Pr={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#elif defined( CUSTOM_TONE_MAPPING )

				gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};class qv extends xs{constructor(){super(),this.uniforms=wi.clone(Pr.uniforms),this.material=new Hd({name:Pr.name,uniforms:this.uniforms,vertexShader:Pr.vertexShader,fragmentShader:Pr.fragmentShader}),this._fsQuad=new Pl(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},ne.getTransfer(this._outputColorSpace)===oe&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===yh?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Eh?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===bh?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===sl?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Th?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Ah?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===wh&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}const jc={lat:13.733,lon:100.502};function Yr(i,t){return{x:(i-jc.lon)*108140,z:(jc.lat-t)*111320}}function rn(i,t,e){return Math.max(t,Math.min(e,i))}const Lr=(i,t,e)=>i+(t-i)*e;function Kr(i,t){return Math.atan2(Math.sin(i-t),Math.cos(i-t))}class Qc{constructor(t){this.points=t.map(e=>({...Yr(e[0],e[1]),width:e[2]||310})),this.length=0,this.segments=this.points.slice(1).map((e,n)=>{const s=this.points[n],r=e.x-s.x,o=e.z-s.z,a=Math.hypot(r,o),l={a:s,b:e,dx:r,dz:o,len:a,start:this.length};return this.length+=a,l})}sample(t,e=0){const n=rn(t,0,this.length),s=this.segments.find(l=>l.start+l.len>=n)||this.segments.at(-1),r=rn((n-s.start)/s.len,0,1),o=-s.dz/s.len,a=s.dx/s.len;return{x:Lr(s.a.x,s.b.x,r)+o*e,z:Lr(s.a.z,s.b.z,r)+a*e,heading:Math.atan2(-s.dx,-s.dz),nx:o,nz:a,width:Lr(s.a.width,s.b.width,r),distance:n}}nearest(t,e){let n={distanceSquared:1/0};for(const s of this.segments){const r=rn(((t-s.a.x)*s.dx+(e-s.a.z)*s.dz)/(s.len*s.len),0,1),o=s.a.x+s.dx*r,a=s.a.z+s.dz*r,l=(t-o)**2+(e-a)**2;if(l<n.distanceSquared){const c=-s.dz/s.len,h=s.dx/s.len;n={x:o,z:a,nx:c,nz:h,offset:(t-o)*c+(e-a)*h,distance:s.start+r*s.len,width:Lr(s.a.width,s.b.width,r),heading:Math.atan2(-s.dx,-s.dz),distanceSquared:l}}}return n}constrain(t,e=4){const n=this.nearest(t.x,t.z),s=n.width/2-e,r=Math.abs(n.offset)-s;let o=0;if(r>0){const l=Math.sign(n.offset),c=n.nx*l,h=n.nz*l;t.x-=c*r,t.z-=h*r;const u=t.vx*c+t.vz*h;u>0&&(o=u,t.vx-=c*u*1.25,t.vz-=h*u*1.25)}const a=n.distance<1?this.sample(0):n.distance>this.length-1?this.sample(this.length):null;if(a){const l={x:-Math.sin(a.heading),z:-Math.cos(a.heading)},c=n.distance<1?-1:1,h=(t.x-a.x)*l.x+(t.z-a.z)*l.z;if(h*c>0){t.x-=l.x*h,t.z-=l.z*h;const u=(t.vx*l.x+t.vz*l.z)*c;u>0&&(t.vx-=l.x*c*u*1.1,t.vz-=l.z*c*u*1.1,o=Math.max(o,u))}}return o}}const Yv=[{id:"arun",name:"Wat Arun",thai:"วัดอรุณ",lon:100.49015,lat:13.74369,side:1},{id:"tien",name:"Tha Tien",thai:"ท่าเตียน",lon:100.4904,lat:13.746,side:-1},{id:"kalaya",name:"Wat Kalayanamit",thai:"วัดกัลยาณมิตร",lon:100.49378,lat:13.73985,side:1},{id:"flower",name:"Flower Market",thai:"ปากคลองตลาด",lon:100.49656,lat:13.74073,side:-1},{id:"memorial",name:"Memorial Bridge",thai:"สะพานพุทธ",lon:100.49912,lat:13.73911,side:-1},{id:"chinatown",name:"Ratchawong",thai:"ท่าราชวงศ์",lon:100.50377,lat:13.73806,side:-1},{id:"lhong",name:"Lhong 1919",thai:"ล้ง 1919",lon:100.50712,lat:13.73447,side:1},{id:"rivercity",name:"River City",thai:"ริเวอร์ ซิตี้",lon:100.51374,lat:13.73033,side:-1},{id:"icon",name:"ICONSIAM",thai:"ไอคอนสยาม",lon:100.51255,lat:13.72665,side:1},{id:"oriental",name:"Oriental Pier",thai:"ท่าโอเรียนเต็ล",lon:100.514,lat:13.72355,side:-1},{id:"river",name:"The River",thai:"เดอะ ริเวอร์",lon:100.51115,lat:13.72139,side:1},{id:"sathorn",name:"Sathorn Pier",thai:"ท่าสาทร",lon:100.5129,lat:13.71895,side:-1}];function Kv(i){return Yv.map((t,e)=>{const n=Yr(t.lon,t.lat),s=i.nearest(n.x,n.z),r=rn(s.distance,65,i.length-65),o=i.sample(r),a=t.side;return{...t,index:e,distance:r,x:o.x+o.nx*a*(o.width/2-26),z:o.z+o.nz*a*(o.width/2-26),bankX:o.x+o.nx*a*(o.width/2+2),bankZ:o.z+o.nz*a*(o.width/2+2),heading:o.heading,nx:o.nx*a,nz:o.nz*a}})}const Dn=Object.freeze({speed:28,boostSpeed:43,acceleration:10.8,boostAcceleration:19,brake:32,reverseSpeed:7,reverseAcceleration:9,steer:1.27,boostSteer:.6});class $v{constructor(t=0,e=0,n=0){this.reset(t,e,n)}reset(t,e,n){Object.assign(this,{x:t,z:e,heading:n,vx:0,vz:0,yaw:0,speed:0,slip:0,boosting:!1,drifting:!1,brakeHold:0})}update(t,e={}){const n=rn(e.steer||0,-1,1),s=e.gas?1:0,r=!!e.brake,o=-Math.sin(this.heading),a=-Math.cos(this.heading),l=Math.cos(this.heading),c=-Math.sin(this.heading);let h=this.vx*o+this.vz*a,u=this.vx*l+this.vz*c;if(this.boosting=!!e.boost&&s>0&&!r&&h>1,this.drifting=!!e.drift&&Math.abs(n)>.15&&Math.abs(h)>8&&!r,r)h>.35?(h=Math.max(0,h-Dn.brake*t),this.brakeHold=0):(this.brakeHold+=t,this.brakeHold>.1?h=Math.max(-Dn.reverseSpeed,h-Dn.reverseAcceleration*t):h=0),u*=Math.exp(-8*t);else if(this.brakeHold=0,s){const d=this.boosting?Dn.boostSpeed:Dn.speed;h=h>d?Math.max(d,h-7*t):Math.min(d,h+(this.boosting?Dn.boostAcceleration:Dn.acceleration)*t)}else h*=Math.exp(-.38*t);u*=Math.exp(-(this.drifting?.7:this.boosting?2.6:5.3)*t);const f=-n*Dn.steer*rn(Math.abs(h)/4,0,1)*(h<0?-1:1)*(this.boosting?Dn.boostSteer:1)*(this.drifting?1.48:1);this.yaw+=(f-this.yaw)*(1-Math.exp(-7*t)),this.vx=o*h+l*u,this.vz=a*h+c*u,this.heading+=this.yaw*t,this.x+=this.vx*t,this.z+=this.vz*t,this.speed=this.vx*-Math.sin(this.heading)+this.vz*-Math.cos(this.heading),this.slip=this.vx*Math.cos(this.heading)-this.vz*Math.sin(this.heading)}}function th(i){const t=Math.max(0,(i.length-i.width)/2),e=-Math.sin(i.heading),n=-Math.cos(i.heading);return[{x:i.x-e*t,z:i.z-n*t},{x:i.x+e*t,z:i.z+n*t}]}function eh(i,t,e){const n=e.x-t.x,s=e.z-t.z,r=rn(((i.x-t.x)*n+(i.z-t.z)*s)/(n*n+s*s||1),0,1);return{x:t.x+r*n,z:t.z+r*s}}function uu(i,t){const[e,n]=th(i),[s,r]=th(t);let o,a=1/0;const l=(S,_)=>S.x*_.z-S.z*_.x,c=(S,_)=>({x:S.x-_.x,z:S.z-_.z}),h=c(n,e),u=c(r,s),f=c(s,e),d=l(h,u);if(Math.abs(d)>1e-8){const S=l(f,u)/d,_=l(f,h)/d;S>=0&&S<=1&&_>=0&&_<=1&&(o=[{x:e.x+h.x*S,z:e.z+h.z*S},{x:e.x+h.x*S,z:e.z+h.z*S}],a=0)}for(const S of[e,n]){const _=eh(S,s,r),v=Math.hypot(S.x-_.x,S.z-_.z);v<a&&(a=v,o=[S,_])}for(const S of[s,r]){const _=eh(S,e,n),v=Math.hypot(S.x-_.x,S.z-_.z);v<a&&(a=v,o=[_,S])}const g=a-(i.width+t.width)/2;let x=o[0].x-o[1].x,m=o[0].z-o[1].z,p=Math.hypot(x,m);return p<.001&&(x=i.x-t.x,m=i.z-t.z,p=Math.hypot(x,m),p<.001&&(x=Math.cos(i.heading),m=-Math.sin(i.heading),p=1)),{gap:g,nx:x/p,nz:m/p}}function nh(i,t){const e=uu({...i,length:12,width:2.5},t);if(e.gap>=0)return 0;i.x+=e.nx*(-e.gap+.02),i.z+=e.nz*(-e.gap+.02);const n=(i.vx-t.vx)*e.nx+(i.vz-t.vz)*e.nz;if(n>=0)return 0;const s=t.mass/(t.mass+1.2),r=-n*(.65+.7*s);return i.vx+=r*e.nx,i.vz+=r*e.nz,t.slow=Math.max(t.slow||0,rn(-n/(t.mass+2),0,3)),-n*s}function Jv(i,t,e=0){const n=t.x-i.x,s=t.z-i.z;return Math.hypot(n,s)<.01?e:e+Kr(Math.atan2(n,-s)+i.heading,e)}class Zv{constructor(t,e=Math.random){this.piers=t,this.random=e,this.reset()}reset(t=!1){Object.assign(this,{phase:"seeking",free:t,remaining:180,earnings:0,deliveries:0,tips:0,combo:0,comboTime:0,fare:null,dockHold:0,lastDock:null,finished:!1,flash:null,cooldowns:new Map,clock:0})}update(t,e){if(this.finished)return null;if(this.clock+=t,this.free||(this.remaining=Math.max(0,this.remaining-t)),this.comboTime>0&&(this.comboTime-=t,this.comboTime<=0&&(this.combo=0)),!this.free&&this.remaining===0)return this.finished=!0,this.phase="ended",this.fare=null,{type:"ended"};if(this.fare&&(this.fare.time=Math.max(0,this.fare.time-t),this.fare.time===0))return this.fare=null,this.phase="seeking",this.dockHold=0,this.tips=0,this.combo=0,{type:"late"};const n=this.fare?.to||this.piers.find(r=>(this.cooldowns.get(r.id)||0)<=this.clock&&Math.hypot(r.x-e.x,r.z-e.z)<21),s=Math.hypot(e.vx,e.vz)<2.8;if(n&&Math.hypot(n.x-e.x,n.z-e.z)<21&&s){if(this.dockHold+=t,this.dockHold>.65){if(this.dockHold=0,this.fare){const c=this.fare.base+this.tips+Math.round(this.fare.time*1.9);return this.earnings+=c,this.deliveries++,this.remaining+=this.free?0:12,this.fare=null,this.phase="seeking",this.tips=0,this.combo=0,this.cooldowns.set(n.id,this.clock+7),this.lastDock=n,{type:"delivered",paid:c}}let r=this.piers.filter(c=>c.id!==n.id&&Math.abs(c.distance-n.distance)>260&&Math.abs(c.distance-n.distance)<2100);if(this.deliveries===0&&n.id==="arun"){const c=r.filter(h=>h.distance>n.distance&&h.distance-n.distance<1050);c.length&&(r=c)}const o=(r.length?r:this.piers.filter(c=>c.id!==n.id))[Math.floor(this.random()*(r.length||this.piers.length-1))];if(!o)return null;const a=Math.max(Math.abs(o.distance-n.distance),Math.hypot(o.x-n.x,o.z-n.z)),l=26+a/21;return this.fare={from:n,to:o,base:Math.round(95+a*.1),time:l,total:l},this.phase="carrying",this.tips=0,{type:"pickup",to:o}}}else this.dockHold=0;return null}stunt(t){if(this.finished||!this.fare)return 0;this.combo=Math.min(this.combo+1,8),this.comboTime=5;const e=(t==="slide"?12:20)*this.combo;return this.tips+=e,e}crash(){this.combo=0,this.comboTime=0,this.fare&&(this.tips=Math.max(0,this.tips-25))}}const Ja="bangkok-longtail:scores:v1";function Za(i){return Array.isArray(i)?i.filter(t=>t&&Number.isFinite(t.score)&&t.score>0&&t.score<1e7&&Number.isInteger(t.deliveries)&&t.deliveries>=0&&typeof t.date=="string").sort((t,e)=>e.score-t.score).slice(0,5):[]}function jv(i,t,e,n=!1){let s=[];try{s=Za(JSON.parse(i.getItem(Ja)||"[]"))}catch{}if(n||t<=0)return s;const r=Za([...s,{score:t,deliveries:e,date:new Date().toISOString()}]);try{i.setItem(Ja,JSON.stringify(r))}catch{}return r}class Qv extends ve{constructor(t,e={}){super(t),this.isWater=!0;const n=this,s=e.textureWidth!==void 0?e.textureWidth:512,r=e.textureHeight!==void 0?e.textureHeight:512,o=e.clipBias!==void 0?e.clipBias:0,a=e.alpha!==void 0?e.alpha:1,l=e.time!==void 0?e.time:0,c=e.waterNormals!==void 0?e.waterNormals:null,h=e.sunDirection!==void 0?e.sunDirection:new L(.70707,.70707,0),u=new kt(e.sunColor!==void 0?e.sunColor:16777215),f=new kt(e.waterColor!==void 0?e.waterColor:8355711),d=e.eye!==void 0?e.eye:new L(0,0,0),g=e.distortionScale!==void 0?e.distortionScale:20,x=e.side!==void 0?e.side:Gn,m=e.fog!==void 0?e.fog:!1,p=new Qn,S=new L,_=new L,v=new L,T=new te,A=new L(0,0,-1),C=new se,P=new L,E=new L,y=new se,D=new te,I=new Fe,O=new sn(s,r),B={name:"MirrorShader",uniforms:wi.merge([Mt.fog,Mt.lights,{normalSampler:{value:null},mirrorSampler:{value:null},alpha:{value:1},time:{value:0},size:{value:1},distortionScale:{value:20},textureMatrix:{value:new te},sunColor:{value:new kt(8355711)},sunDirection:{value:new L(.70707,.70707,0)},eye:{value:new L},waterColor:{value:new kt(5592405)}}]),vertexShader:`
				uniform mat4 textureMatrix;
				uniform float time;

				varying vec4 mirrorCoord;
				varying vec4 worldPosition;

				#include <common>
				#include <fog_pars_vertex>
				#include <shadowmap_pars_vertex>
				#include <logdepthbuf_pars_vertex>

				void main() {
					mirrorCoord = modelMatrix * vec4( position, 1.0 );
					worldPosition = mirrorCoord.xyzw;
					mirrorCoord = textureMatrix * mirrorCoord;
					vec4 mvPosition =  modelViewMatrix * vec4( position, 1.0 );
					gl_Position = projectionMatrix * mvPosition;

				#include <beginnormal_vertex>
				#include <defaultnormal_vertex>
				#include <logdepthbuf_vertex>
				#include <fog_vertex>
				#include <shadowmap_vertex>
			}`,fragmentShader:`
				uniform sampler2D mirrorSampler;
				uniform float alpha;
				uniform float time;
				uniform float size;
				uniform float distortionScale;
				uniform sampler2D normalSampler;
				uniform vec3 sunColor;
				uniform vec3 sunDirection;
				uniform vec3 eye;
				uniform vec3 waterColor;

				varying vec4 mirrorCoord;
				varying vec4 worldPosition;

				vec4 getNoise( vec2 uv ) {
					vec2 uv0 = ( uv / 103.0 ) + vec2(time / 17.0, time / 29.0);
					vec2 uv1 = uv / 107.0-vec2( time / -19.0, time / 31.0 );
					vec2 uv2 = uv / vec2( 8907.0, 9803.0 ) + vec2( time / 101.0, time / 97.0 );
					vec2 uv3 = uv / vec2( 1091.0, 1027.0 ) - vec2( time / 109.0, time / -113.0 );
					vec4 noise = texture2D( normalSampler, uv0 ) +
						texture2D( normalSampler, uv1 ) +
						texture2D( normalSampler, uv2 ) +
						texture2D( normalSampler, uv3 );
					return noise * 0.5 - 1.0;
				}

				void sunLight( const vec3 surfaceNormal, const vec3 eyeDirection, float shiny, float spec, float diffuse, inout vec3 diffuseColor, inout vec3 specularColor ) {
					vec3 reflection = normalize( reflect( -sunDirection, surfaceNormal ) );
					float direction = max( 0.0, dot( eyeDirection, reflection ) );
					specularColor += pow( direction, shiny ) * sunColor * spec;
					diffuseColor += max( dot( sunDirection, surfaceNormal ), 0.0 ) * sunColor * diffuse;
				}

				#include <common>
				#include <packing>
				#include <bsdfs>
				#include <fog_pars_fragment>
				#include <logdepthbuf_pars_fragment>
				#include <lights_pars_begin>
				#include <shadowmap_pars_fragment>
				#include <shadowmask_pars_fragment>

				void main() {

					#include <logdepthbuf_fragment>
					vec4 noise = getNoise( worldPosition.xz * size );
					vec3 surfaceNormal = normalize( noise.xzy * vec3( 1.5, 1.0, 1.5 ) );

					vec3 diffuseLight = vec3(0.0);
					vec3 specularLight = vec3(0.0);

					vec3 worldToEye = eye-worldPosition.xyz;
					vec3 eyeDirection = normalize( worldToEye );
					sunLight( surfaceNormal, eyeDirection, 100.0, 2.0, 0.5, diffuseLight, specularLight );

					float distance = length(worldToEye);

					vec2 distortion = surfaceNormal.xz * ( 0.001 + 1.0 / distance ) * distortionScale;
					vec3 reflectionSample = vec3( texture2D( mirrorSampler, mirrorCoord.xy / mirrorCoord.w + distortion ) );

					float theta = max( dot( eyeDirection, surfaceNormal ), 0.0 );
					float rf0 = 0.3;
					float reflectance = rf0 + ( 1.0 - rf0 ) * pow( ( 1.0 - theta ), 5.0 );
					vec3 scatter = max( 0.0, dot( surfaceNormal, eyeDirection ) ) * waterColor;
					vec3 albedo = mix( ( sunColor * diffuseLight * 0.3 + scatter ) * getShadowMask(), ( vec3( 0.1 ) + reflectionSample * 0.9 + reflectionSample * specularLight ), reflectance);
					vec3 outgoingLight = albedo;
					gl_FragColor = vec4( outgoingLight, alpha );

					#include <tonemapping_fragment>
					#include <colorspace_fragment>
					#include <fog_fragment>	
				}`},H=new Ee({name:B.name,uniforms:wi.clone(B.uniforms),vertexShader:B.vertexShader,fragmentShader:B.fragmentShader,lights:!0,side:x,fog:m});H.uniforms.mirrorSampler.value=O.texture,H.uniforms.textureMatrix.value=D,H.uniforms.alpha.value=a,H.uniforms.time.value=l,H.uniforms.normalSampler.value=c,H.uniforms.sunColor.value=u,H.uniforms.waterColor.value=f,H.uniforms.sunDirection.value=h,H.uniforms.distortionScale.value=g,H.uniforms.eye.value=d,n.material=H,n.onBeforeRender=function(X,tt,q){if(_.setFromMatrixPosition(n.matrixWorld),v.setFromMatrixPosition(q.matrixWorld),T.extractRotation(n.matrixWorld),S.set(0,0,1),S.applyMatrix4(T),P.subVectors(_,v),P.dot(S)>0)return;P.reflect(S).negate(),P.add(_),T.extractRotation(q.matrixWorld),A.set(0,0,-1),A.applyMatrix4(T),A.add(v),E.subVectors(_,A),E.reflect(S).negate(),E.add(_),I.position.copy(P),I.up.set(0,1,0),I.up.applyMatrix4(T),I.up.reflect(S),I.lookAt(E),I.far=q.far,I.updateMatrixWorld(),I.projectionMatrix.copy(q.projectionMatrix),D.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),D.multiply(I.projectionMatrix),D.multiply(I.matrixWorldInverse),p.setFromNormalAndCoplanarPoint(S,_),p.applyMatrix4(I.matrixWorldInverse),C.set(p.normal.x,p.normal.y,p.normal.z,p.constant);const ct=I.projectionMatrix;y.x=(Math.sign(C.x)+ct.elements[8])/ct.elements[0],y.y=(Math.sign(C.y)+ct.elements[9])/ct.elements[5],y.z=-1,y.w=(1+ct.elements[10])/ct.elements[14],C.multiplyScalar(2/C.dot(y)),ct.elements[2]=C.x,ct.elements[6]=C.y,ct.elements[10]=C.z+1-o,ct.elements[14]=C.w,d.setFromMatrixPosition(q.matrixWorld);const st=X.getRenderTarget(),xt=X.xr.enabled,At=X.shadowMap.autoUpdate;n.visible=!1,X.xr.enabled=!1,X.shadowMap.autoUpdate=!1,X.setRenderTarget(O),X.state.buffers.depth.setMask(!0),X.autoClear===!1&&X.clear(),X.render(tt,I),n.visible=!0,X.xr.enabled=xt,X.shadowMap.autoUpdate=At,X.setRenderTarget(st);const qt=q.viewport;qt!==void 0&&X.state.viewport(qt)}}}function tx(i){const t=new Ee({side:ze,depthWrite:!1,depthTest:!1,uniforms:{time:{value:0}},vertexShader:`varying vec3 direction;
      void main(){direction=position;vec4 p=projectionMatrix*mat4(mat3(viewMatrix))*vec4(position,1.);gl_Position=p.xyww;}`,fragmentShader:`varying vec3 direction;uniform float time;
      float hash(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}
      float noise(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);
        return mix(mix(hash(i),hash(i+vec2(1,0)),f.x),mix(hash(i+vec2(0,1)),hash(i+vec2(1,1)),f.x),f.y);}
      float fbm(vec2 p){float n=0.,a=.53;for(int i=0;i<5;i++){n+=noise(p)*a;p=mat2(1.6,1.2,-1.2,1.6)*p+17.7;a*=.5;}return n;}
      void main(){
        vec3 d=normalize(direction);float h=max(d.y,0.);
        vec3 moonDir=normalize(vec3(-.43,.54,-.72));float moonDot=max(0.,dot(d,moonDir));
        float horizon=exp(-h*8.);
        vec3 color=mix(vec3(.003,.006,.012),vec3(.021,.018,.019),horizon);
        color+=vec3(.012,.006,.002)*pow(horizon,3.);
        vec2 p=d.xz/(max(.10,d.y)+.20)*1.5+vec2(time*.0018,0.);
        float cloud=fbm(p+fbm(p*.57)*1.7);
        float veil=smoothstep(.40,.75,cloud)*smoothstep(-.04,.18,d.y);
        vec3 cloudColor=mix(vec3(.012,.016,.024),vec3(.029,.024,.023),horizon);
        cloudColor+=vec3(.013,.018,.027)*pow(moonDot,24.);
        color=mix(color,cloudColor,veil*.76);
        float halo=pow(moonDot,180.);float disk=smoothstep(.99988,.99996,moonDot);
        color+=(vec3(.055,.068,.09)*halo+vec3(.74,.80,.91)*disk)*(1.-veil*.82);
        gl_FragColor=vec4(color,1.);
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
      }`}),e=new ve(new Xe(100,48,24),t);return e.name="infinite-night-sky",e.renderOrder=-1e3,e.frustumCulled=!1,i.add(e),{sky:e,update(n){t.uniforms.time.value=n}}}function ex(){const t=new Uint8Array(262144);for(let n=0;n<256;n++)for(let s=0;s<256;s++){const r=s/256*Math.PI*2,o=n/256*Math.PI*2;let a=0,l=0;for(let u=1;u<=10;u++){const f=u%3+1,d=u*7%11-5,g=r*f+o*d+u*1.91;a+=Math.cos(g)*f/(u+3),l+=Math.cos(g)*d/(u+3)}const c=new L(-a*.22,-l*.22,1).normalize(),h=(n*256+s)*4;t[h]=(c.x*.5+.5)*255,t[h+1]=(c.y*.5+.5)*255,t[h+2]=(c.z*.5+.5)*255,t[h+3]=255}const e=new gl(t,256,256);return e.wrapS=e.wrapT=is,e.generateMipmaps=!0,e.minFilter=Nn,e.magFilter=en,e.anisotropy=4,e.needsUpdate=!0,e}function nx(i,t){const e=t?10:18,n=new ln(2,2,t?80:144,t?80:144),s=n.attributes.position,r=l=>Math.sign(l)*(Math.abs(l)<=.85?Math.abs(l)*320:272+Math.pow((Math.abs(l)-.85)/.15,3)*8728);for(let l=0;l<s.count;l++)s.setXY(l,r(s.getX(l)),r(s.getY(l)));n.computeBoundingSphere();const o=new Qv(n,{textureWidth:t?512:1024,textureHeight:t?512:1024,waterNormals:ex(),sunDirection:new L(-.43,.54,-.72).normalize(),sunColor:7505046,waterColor:135183,distortionScale:1.8,fog:!0,clipBias:.002});o.rotation.x=-Math.PI/2,o.position.y=.04,o.name="chao-phraya-water";const a=o.material;return a.vertexShader=a.vertexShader.replace("uniform float time;","uniform float time;uniform vec3 eye;").replace("worldPosition = mirrorCoord.xyzw;",`float distanceToBoat=length(mirrorCoord.xz-eye.xz);
      float swell=(sin(mirrorCoord.x*.47+mirrorCoord.z*.28+time*1.1)*.095+sin(mirrorCoord.z*.73-mirrorCoord.x*.22-time*1.42)*.038)*exp(-distanceToBoat*.004);
      mirrorCoord.y+=swell;worldPosition=mirrorCoord;`).replace("modelViewMatrix * vec4( position, 1.0 )","viewMatrix * worldPosition"),a.uniforms.riverLamps={value:Array.from({length:e},()=>new se)},a.uniforms.riverColors={value:Array.from({length:e},()=>new kt(0))},a.fragmentShader=a.fragmentShader.replace("uniform sampler2D mirrorSampler;",`uniform sampler2D mirrorSampler;uniform vec4 riverLamps[${e}];uniform vec3 riverColors[${e}];`).replace(/vec4 getNoise\( vec2 uv \) \{[\s\S]*?return noise \* 0\.5 - 1\.0;\s*\}/,`vec4 getNoise(vec2 uv){
      vec4 a=texture2D(normalSampler,uv/17.+vec2(time*.017,time*.008));
      vec4 b=texture2D(normalSampler,uv.yx/9.7+vec2(-time*.013,time*.010));
      vec4 c=texture2D(normalSampler,uv/3.1+vec2(time*.007,-time*.019));
      vec4 n=(a*.52+b*.32+c*.16)*2.-1.;
      n.xy+=vec2(cos(uv.x*.56+uv.y*.31+time*1.45),sin(uv.y*.8-uv.x*.24-time*1.7))*.07;
      return n;
    }`).replace("noise.xzy * vec3( 1.5, 1.0, 1.5 )","noise.xzy * vec3( .58, 1.0, .58 )").replace("100.0, 2.0, 0.5","160.0, 0.35, 0.08").replace("float rf0 = 0.3;","float rf0 = 0.025;").replace("vec3( 0.1 ) + reflectionSample * 0.9 + reflectionSample * specularLight","reflectionSample * 0.82 + specularLight * .12").replace("vec3 outgoingLight = albedo;",`vec3 outgoingLight=albedo;
      for(int i=0;i<${e};i++){
        vec3 delta=riverLamps[i].xyz-worldPosition.xyz;float range=length(delta);
        vec3 halfVector=normalize(delta/max(range,.1)+eyeDirection);
        float glitter=pow(max(dot(surfaceNormal,halfVector),0.),110.);
        float attenuation=riverLamps[i].w/(1.+range*range*.012);
        outgoingLight+=riverColors[i]*glitter*attenuation*.20;
      }
      float chop=pow(max(0.,noise.x*.5+noise.y*.5-.22),3.);
      outgoingLight+=vec3(.012,.021,.022)*chop;`),i.add(o),{water:o,update(l,c,h){a.uniforms.time.value=l,o.position.x=c.position.x,o.position.z=c.position.z;const u=h.map(f=>({s:f,d:(f.x-c.position.x)**2+(f.z-c.position.z)**2})).sort((f,d)=>f.d-d.d).slice(0,e);for(let f=0;f<e;f++){const d=u[f]?.s;a.uniforms.riverLamps.value[f].set(d?.x||0,d?.y||0,d?.z||0,d?.power||0),a.uniforms.riverColors.value[f].set(d?.color||0)}}}}function ro(i,t=!1){const e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,l=new ue;let c=0;for(let h=0;h<i.length;++h){const u=i[h];let f=0;if(e!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const d in u.attributes){if(!n.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;r[d]===void 0&&(r[d]=[]),r[d].push(u.attributes[d]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const d in u.morphAttributes){if(!s.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[d]===void 0&&(o[d]=[]),o[d].push(u.morphAttributes[d])}if(t){let d;if(e)d=u.index.count;else if(u.attributes.position!==void 0)d=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,d,h),c+=d}}if(e){let h=0;const u=[];for(let f=0;f<i.length;++f){const d=i[f].index;for(let g=0;g<d.count;++g)u.push(d.getX(g)+h);h+=i[f].attributes.position.count}l.setIndex(u)}for(const h in r){const u=ih(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(const h in o){const u=o[h][0].length;if(u===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let f=0;f<u;++f){const d=[];for(let x=0;x<o[h].length;++x)d.push(o[h][x][f]);const g=ih(d);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(g)}}return l}function ih(i){let t,e,n,s=-1,r=0;for(let c=0;c<i.length;++c){const h=i[c];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}const o=new t(r),a=new Me(o,e,n);let l=0;for(let c=0;c<i.length;++c){const h=i[c];if(h.isInterleavedBufferAttribute){const u=l/e;for(let f=0,d=h.count;f<d;f++)for(let g=0;g<e;g++){const x=h.getComponent(f,g);a.setComponent(f+u,g,x)}}else o.set(h.array,l);l+=h.count*e}return s!==void 0&&(a.gpuType=s),a}const ix=new bn(1,1,1),jo=new Xe(1,8,6),ke=(i,t=0,e=0)=>new ni({color:i,emissive:t,emissiveIntensity:e,roughness:.82}),sh=[16758632,16764815,15248999,9096909];function sx(i){return()=>(i=Math.imul(i,1664525)+1013904223>>>0,i/4294967296)}class rx{constructor(){this.parts=new Map,this.matrix=new te,this.q=new gn,this.v=new L,this.s=new L}add(t,e,n,s,r,o=1,a=1,l=1,c=0){this.q.setFromAxisAngle(new L(0,1,0),c),this.matrix.compose(this.v.set(n,s,r),this.q,this.s.set(o,a,l));let h=t.clone().applyMatrix4(this.matrix);if(h.index){const u=h;h=u.toNonIndexed(),u.dispose()}this.parts.has(e)||this.parts.set(e,[]),this.parts.get(e).push(h)}box(t,e,n,s,r,o,a,l=0){this.add(ix,t,e,n,s,r,o,a,l)}line(t,e,n,s=.05){const r=new L(...e),o=new L(...n),a=o.clone().sub(r),l=new En(s,s,a.length(),5);l.applyQuaternion(new gn().setFromUnitVectors(new L(0,1,0),a.normalize()));const c=r.add(o).multiplyScalar(.5);this.add(l,t,c.x,c.y,c.z),l.dispose()}finish(t){for(const[e,n]of this.parts){const s=ro(n);n.forEach(o=>o.dispose());const r=new ve(s,e);t.add(r)}this.parts.clear()}}function ox(i,t){const e=document.createElement("canvas");e.width=512,e.height=128;const n=e.getContext("2d");n.fillStyle="#090e13",n.fillRect(0,0,512,128),n.strokeStyle=["#dea353","#6ecfc1","#dd7160"][t%3],n.lineWidth=3,n.strokeRect(8,8,496,112),n.font="600 54px Arial",n.textAlign="center",n.textBaseline="middle",n.shadowColor=n.strokeStyle,n.shadowBlur=8,n.fillStyle=n.strokeStyle,n.fillText(i,256,66,466);const s=new as(e);return s.colorSpace=ye,new ve(new ln(9,2.25),new ni({map:s,emissiveMap:s,emissive:16777215,emissiveIntensity:2.1,roughness:.85}))}function ax(i,t,e,n){const s=sx(73027),r=new pn;r.name="riverside-evening-life",i.add(r);const o=new rx,a=ke(5849136),l=ke(2042410);ke(4803655);const c=[ke(7877674),ke(4543816),ke(10191966)],h=ke(6965041),u=ke(1518368),f=ke(1120025),d=[],g=sh.map(I=>ke(12821890,I,3.5)),x=g[0],m=[];for(let I=50;I<t.length-60;I+=82)for(const O of[-1,1]){const B=t.sample(I),H=O*(B.width/2+7),X=t.sample(I,H),tt=Math.atan2(-B.nx*O,-B.nz*O),q={x:Math.cos(tt),z:-Math.sin(tt)},ct={x:B.nx*O,z:B.nz*O},st=(Ot,et,it)=>[X.x+q.x*Ot+ct.x*it,et,X.z+q.z*Ot+ct.z*it],xt=e.some(Ot=>Ot.side===O&&Math.abs(I-Ot.distance)<Ot.reserveLength+8),At=Math.floor(I/82),qt=!xt&&At%4!==0,$t=g[At%g.length];if(qt){m.push({distance:I,side:O});const Ot=st(0,3.25,4);o.box(a,...Ot,23,.35,10,tt);for(const mt of[-10,-5,0,5,10])o.box(a,...st(mt,1,0),.4,4,.4),o.box(l,...st(mt,4.1,-1.1),.12,1.9,.12);o.box(l,...st(0,5,-1.1),23,.1,.1,tt);for(const mt of[-8,-4,0,4,8])o.add(new Ai(.42,.12,6,10),f,...st(mt,1.1,-1.7),1,1,1,tt);o.box(c[At%3],...st(0,7.2,6),22,.18,7.5,tt);for(const mt of[-10,10])o.box(l,...st(mt,5.2,2.5),.15,4,.15);for(let mt=-8;mt<=8;mt+=4){o.add(new En(1.05,1.05,.12,10),a,...st(mt,4.12,2.2)),o.box(l,...st(mt,3.67,2.2),.12,.9,.12),o.add(jo,x,...st(mt,4.35,2.2),.1,.16,.1);for(const Wt of[-1,1])o.box(a,...st(mt+Wt*1.3,3.75,2.2),.55,.12,.6,tt),o.box(a,...st(mt+Wt*1.45,4.07,2.2),.12,.65,.6,tt)}const et=ox(["ริมน้ำ","SEAFOOD","ก๋วยเตี๋ยว","RIVER BAR","อาหารไทย","ท่าเรือ"][At%6],At);et.position.set(...st(0,7.1,2.15)),et.rotation.y=tt,r.add(et);const it=st(-11,7.4,.6),wt=st(11,7.4,.6);for(let mt=0;mt<12;mt++){const Wt=mt/11,lt=(mt+1)/11,R=[it[0]+(wt[0]-it[0])*Wt,7.4-Math.sin(Wt*Math.PI)*.75,it[2]+(wt[2]-it[2])*Wt],k=[it[0]+(wt[0]-it[0])*lt,7.4-Math.sin(lt*Math.PI)*.75,it[2]+(wt[2]-it[2])*lt];mt<11&&o.line(l,R,k,.023),o.add(jo,$t,R[0],R[1]-.14,R[2],.11,.16,.11)}const Pt=st(0,6,1);d.push({x:Pt[0],y:Pt[1],z:Pt[2],color:sh[At%4],power:35})}else{const Ot=st(0,6.1,0);o.box(l,...Ot,.14,6.3,.14),o.box($t,...st(0,9.3,0),.65,.2,.65);const et=st(0,9.15,0);d.push({x:et[0],y:et[1],z:et[2],color:16762251,power:29})}if(!xt){for(const Ot of[-14,14])o.add(new En(.7,.5,1.05,8),h,...st(Ot,3.6,4)),o.add(jo,u,...st(Ot,5.15,4),1.25,1.4,1.05);if(At%3===0)for(let Ot=0;Ot<3;Ot++)o.box(a,...st(16+Ot*.9,3.6+Ot*.2,5),.85,.8,.85,tt)}}o.finish(r);const p=n?64:132,S=[],_=[],v=ke(11437929),T=ke(11184288),A=ke(1647654),C=ke(1119248),P=(I,O,B)=>{const H=new Us(I,O,p);H.instanceMatrix.setUsage(fl),H.frustumCulled=!1,i.add(H),_.push({mesh:H,kind:B})};P(new Ns(.22,.49,3,7),T,"body"),P(new Xe(.17,8,7),v,"head"),P(new Xe(.174,8,6),C,"hair");for(const I of[-1,1])P(new Ns(.075,.58,2,5),A,I<0?"left-leg":"right-leg"),P(new Ns(.062,.46,2,5),T,I<0?"left-arm":"right-arm");const E=[15122576,7510681,12678752,12631210,5461872,11048053];for(let I=0;I<p;I++){const O=m[I%m.length];S.push({distance:O.distance+(s()-.5)*19,side:O.side,phase:s()*6.283,walk:I%3===0,height:.9+s()*.16});for(const B of _)(B.kind==="body"||B.kind.includes("arm"))&&B.mesh.setColorAt(I,new kt(E[I%E.length]))}const y=new de,D=I=>{for(let O=0;O<S.length;O++){const B=S[O],H=B.walk?Math.sin(I*.055+B.phase)*8:0,X=t.sample(B.distance+H,B.side*(t.sample(B.distance).width/2+(B.walk?7:10))),tt=B.height,q=B.walk?X.heading+(Math.cos(I*.055+B.phase)>0?0:Math.PI):Math.atan2(-X.nx*B.side,-X.nz*B.side),ct=B.walk?Math.sin(I*3+B.phase)*.35:0;for(const st of _){let xt=0,At=0,qt=0;if(st.kind==="body"&&(At=1.19),st.kind==="head"&&(At=1.76),st.kind==="hair"&&(At=1.82),st.kind.includes("leg")){const $t=st.kind.startsWith("left")?-1:1;xt=$t*.13,At=.46,qt=$t*ct}if(st.kind.includes("arm")){const $t=st.kind.startsWith("left")?-1:1;xt=$t*.31,At=1.14,qt=-$t*ct*.65}y.position.set(X.x+Math.cos(q)*xt,3.48+At*tt,X.z-Math.sin(q)*xt),y.rotation.set(qt,q,0),y.scale.set(tt,tt,st.kind==="hair"?tt*.9:tt),y.updateMatrix(),st.mesh.setMatrixAt(O,y.matrix)}}for(const O of _)O.mesh.instanceMatrix.needsUpdate=!0};return D(0),{lights:d,update(I){D(I)}}}function lx(i,t,e,n){const s=e.find(_=>_.kind==="icon-siam"),r=35,o=n?32:64,a=r*o,l=new Float32Array(a*3),c=new Float32Array(a*3),h=new Float32Array(a),u=new ue;u.setAttribute("position",new Me(l,3)),u.setAttribute("color",new Me(c,3)),u.setAttribute("alpha",new Me(h,1));const f=new Ee({transparent:!0,depthWrite:!1,blending:Hs,vertexShader:"attribute vec3 color;attribute float alpha;varying vec3 tint;varying float fade;void main(){tint=color;fade=alpha;vec4 p=modelViewMatrix*vec4(position,1.);gl_PointSize=clamp(180./max(1.,-p.z),1.,7.);gl_Position=projectionMatrix*p;}",fragmentShader:`varying vec3 tint;varying float fade;void main(){float r=length(gl_PointCoord-.5)*2.;if(r>1.)discard;gl_FragColor=vec4(tint,fade*(1.-r*r));
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
  }`}),d=new Kh(u,f);d.frustumCulled=!1,i.add(d);const g=new Us(new En(.055,.13,1,6),new _n({color:8108753,transparent:!0,opacity:.25,depthWrite:!1,blending:Hs}),r);g.instanceMatrix.setUsage(fl),g.frustumCulled=!1,i.add(g);const x=new de,m=[],p=Array.from({length:r},(_,v)=>{const T=s.distance+(v-(r-1)/2)*3.8,A=t.sample(T),C=t.sample(T,s.side*(A.width/2+9));return{x:C.x,z:C.z,nx:C.nx,nz:C.nz}});for(let _=0;_<5;_++){const v=p[_*7];m.push({x:v.x,y:5,z:v.z,color:7718367,power:16})}const S=new kt;return{lights:m,update(_){for(let v=0;v<r;v++){const T=p[v],A=.5+.5*Math.sin(_*.67+v*.28),C=3.5+A*7.5;x.position.set(T.x,3.25+C/2,T.z),x.scale.set(1,C,1),x.updateMatrix(),g.setMatrixAt(v,x.matrix),S.setHSL(.53+.055*Math.sin(_*.055+v*.032),.38,.59);for(let P=0;P<o;P++){const E=v*o+P,y=(P/o+_*.28)%1,D=4*C*y*(1-y),I=(.08+y*.25)*Math.sin(E*17.21+_*1.7);l[E*3]=T.x+Math.cos(v)*I+T.nx*Math.sin(v*.7)*y*1.8,l[E*3+1]=3.25+D,l[E*3+2]=T.z+Math.sin(v)*I+T.nz*Math.sin(v*.7)*y*1.8,c[E*3]=S.r*1.8,c[E*3+1]=S.g*1.8,c[E*3+2]=S.b*1.8,h[E]=.45*(1-y*.4)}}g.instanceMatrix.needsUpdate=!0;for(const v of Object.values(u.attributes))v.needsUpdate=!0}}}const kn=new Map,Qo=new Map,rh=new L,oh=new an,ah=new gn,lh=new L(1,1,1),ch=new te,ce=(i,t,e={})=>(kn.has(i)||kn.set(i,new ni({color:t,roughness:.78,...e})),kn.get(i)),j={stone:ce("stone","#d8cbb2"),porcelain:ce("porcelain","#ece1c8"),plaster:ce("plaster","#ddd2bd"),white:ce("white","#e0ddcc"),concrete:ce("concrete","#b7b8b4"),oldStone:ce("oldStone","#a18b72"),gold:ce("gold","#dcb358",{metalness:.48,roughness:.32,emissive:"#8f571b",emissiveIntensity:.2}),warm:ce("warm","#fff0c4",{emissive:"#ffd48a",emissiveIntensity:1.8,roughness:.4}),softLight:ce("softLight","#dfc28c",{emissive:"#ffc677",emissiveIntensity:.8}),tile:ce("tile","#973c27"),tileGreen:ce("tileGreen","#296657"),red:ce("red","#7f2920"),teal:ce("teal","#347b72"),dark:ce("dark","#171e24"),bronze:ce("bronze","#625448",{metalness:.55,roughness:.35}),roof:ce("roof","#473f37"),redBrick:ce("redBrick","#a77963"),glass:ce("glass","#33464c",{roughness:.27,metalness:.4}),window:ce("window","#ad9c72",{emissive:"#ddac59",emissiveIntensity:.55}),stained:ce("stained","#ccb076",{emissive:"#d18b47",emissiveIntensity:.8})};function ja(i){const t=Math.sin(i*127.1+311.7)*43758.5453;return t-Math.floor(t)}function Ll(i,t,e){if(typeof document>"u")return null;const n=document.createElement("canvas");n.width=i,n.height=t,e(n.getContext("2d"),i,t);const s=new as(n);return s.colorSpace=ye,s.anisotropy=4,s}function ii(i,t=24,e=60,n=!1){if(kn.has(i))return kn.get(i);const s=Ll(768,1536,(o,a,l)=>{o.fillStyle=n?"#202421":"#15232a",o.fillRect(0,0,a,l);const c=a/t,h=l/e;for(let u=0;u<e;u++)for(let f=0;f<t;f++){const d=ja(u*91+f*53+i.length*37);o.fillStyle=d>.7?["#c29b60","#aa8b54","#c6b588","#736044"][Math.floor(ja(u*13+f)*4)]:d>.38?"#1b262c":"#0d151c",o.fillRect(f*c+2,u*h+2,c-4,h-4),d>.77&&(o.fillStyle="#414238",o.fillRect(f*c+c*.6,u*h+2,c*.23,h-4)),o.fillStyle="#283236",o.fillRect(f*c,u*h,1.3,h)}});return ce(i,"#aab6b6",{map:s,emissiveMap:s,emissive:"#eee6ca",emissiveIntensity:.65,metalness:.3,roughness:.42})}function cx(i,t="#fff1c0",e="#29261e"){const n=`sign:${i}:${t}`;if(kn.has(n))return kn.get(n);const s=Ll(1024,160,(r,o,a)=>{r.fillStyle=e,r.fillRect(0,0,o,a),r.fillStyle=t,r.textAlign="center",r.textBaseline="middle",r.font="500 100px Georgia, serif",r.fillText(i,o/2,a/2+3,o-65)});return ce(n,"#ffffff",{map:s,emissiveMap:s,emissive:t,emissiveIntensity:.85,roughness:.55})}class hx{constructor(t){this.kind=t,this.parts=new Map}add(t,e,n=0,s=0,r=0,o=[0,0,0],a=[1,1,1]){if(rh.set(n,s,r),oh.set(...o),ah.setFromEuler(oh),lh.set(...a),ch.compose(rh,ah,lh),t.applyMatrix4(ch),t.index){const l=t;t=l.toNonIndexed(),l.dispose()}t.deleteAttribute("tangent"),this.parts.has(e)||this.parts.set(e,[]),this.parts.get(e).push(t)}box(t,e,n,s,r,o,a=j.stone,l=[0,0,0]){this.add(new bn(t,e,n),a,s,r,o,l)}cylinder(t,e,n,s,r,o,a=j.stone,l=16,c=[1,1,1]){this.add(new En(t,e,n,l),a,s,r,o,[0,0,0],c)}sphere(t,e,n,s,r=j.gold,o=[1,1,1]){this.add(new Xe(t,16,10),r,e,n,s,[0,0,0],o)}line(t,e,n=.12,s=j.gold,r=6){const o=new L(...e).sub(new L(...t)),a=new En(n,n,o.length(),r);a.applyQuaternion(new gn().setFromUnitVectors(new L(0,1,0),o.normalize())),this.add(a,s,(t[0]+e[0])/2,(t[1]+e[1])/2,(t[2]+e[2])/2)}sign(t,e,n,s,r,o,a,l){this.add(new ln(e,n),cx(t,a,l),s,r,o)}finish(){const t=new pn;t.name=`landmark:${this.kind}`;for(const[e,n]of this.parts){const s=ro(n,!1);for(const o of n)o.dispose();s.computeBoundingSphere();const r=new ve(s,e);r.castShadow=!0,r.receiveShadow=!0,t.add(r)}return t.userData.landmark=this.kind,t}}function fu(i,t,e,n,s,r,o,a=1,l=0){for(let c=0;c<o;c++){const h=(c+1)*s/o;i.box(n,h,r/o+.03,t,l+h/2,e+a*(r/2-(c+.5)*r/o),j.stone)}}function zs(i,t,e,n,s,r,o,a=j.tile){const l=Math.atan2(o,s/2),c=Math.hypot(s/2,o);for(const h of[-1,1]){i.box(c+.25,.45,r,t+h*s/4,e+o/2,n,a,[0,0,-h*l]);for(const u of[-1,1])i.line([t,e+o+.2,n+u*r/2],[t+h*s/2,e+.1,n+u*r/2],.16,j.gold);i.line([t+h*s/2,e,n-r/2],[t+h*s/2,e,n+r/2],.12,j.gold)}i.line([t,e+o+.25,n-r/2],[t,e+o+.25,n+r/2],.2,j.gold);for(const h of[-1,1]){const u=new gs;u.moveTo(-s/2+.7,0),u.lineTo(s/2-.7,0),u.lineTo(0,o-.4),u.closePath(),i.add(new tr(u),j.red,t,e,n+h*(r/2-.15),[0,h===-1?Math.PI:0,0]),i.line([t,e+o,n+h*r/2],[t,e+o+2.3,n+h*(r/2+.55)],.18,j.gold),i.line([t,e+o+2.3,n+h*(r/2+.55)],[t,e+o+3,n+h*(r/2+1.6)],.09,j.gold),i.sphere(.65,t,e+o*.49,n+h*(r/2+.12),j.gold,[1,1,.15])}}function hs(i,t,e,n=21,s=38,r=1,o=j.tile){const a=n*r,l=s*r,c=8*r;i.box(a+4,1.1,l+4,t,.55,e,j.oldStone),i.box(a,c,l,t,c/2+1,e,j.plaster);for(const h of[-1,1])for(let u=-l/2+4;u<l/2;u+=5*r)i.box(.4,4.6*r,1.9*r,t+h*(a/2+.08),c/2+1.3,e+u,j.gold),i.box(.45,3.9*r,1.25*r,t+h*(a/2+.1),c/2+1.3,e+u,j.dark);for(const h of[-1,1])for(let u=-l/2+1;u<=l/2;u+=5*r)i.cylinder(.26*r,.4*r,c+.2,t+h*(a/2+1.25),c/2+1,e+u,j.porcelain,8),i.box(1,.4,1,t+h*(a/2+1.25),c+1,e+u,j.gold);i.box(a*.22,c*.72,.25,t,1+c*.36,e+l/2+.15,j.gold),i.box(a*.17,c*.63,.28,t,1+c*.315,e+l/2+.2,j.dark),zs(i,t,c+1,e,a+5*r,l+6*r,6.5*r,o),zs(i,t,c+4*r,e,a+.6*r,l-2*r,6.4*r,o),zs(i,t,c+7*r,e,a-4*r,l-10*r,5.6*r,o);for(const h of[-1,1])i.box(.18,.22,l+4,t+h*(a/2+1.5),1.2,e,j.warm)}function ux(){if(kn.has("arun-porcelain"))return kn.get("arun-porcelain");const i=Ll(512,512,(t,e,n)=>{t.fillStyle="#cebb94",t.fillRect(0,0,e,n);for(let s=0;s<12;s++)for(let r=0;r<12;r++){const o=(r+.5+s%2*.25)*e/12,a=(s+.5)*n/12,l=ja(s*41+r*7);t.fillStyle=l<.3?"#75847a":l<.65?"#997763":"#e4cf9b";for(let c=0;c<6;c++){const h=c*Math.PI/3;t.beginPath(),t.ellipse(o+Math.sin(h)*6,a+Math.cos(h)*6,2.7,4.5,-h,0,Math.PI*2),t.fill()}t.fillStyle="#dfd0ad",t.beginPath(),t.arc(o,a,3,0,Math.PI*2),t.fill(),t.fillStyle="#a9926d",t.fillRect(o-16,a+17,25,1.5)}});return i&&(i.wrapS=i.wrapT=is,i.repeat.set(2,3)),ce("arun-porcelain","#f4d9ad",{map:i,bumpMap:i,bumpScale:.15,roughness:.86,emissive:"#bb791f",emissiveIntensity:.22})}function fx(i,t,e,n,s,r,o){const a=new gs,l=[[1,.52],[.76,.52],[.76,.76],[.52,.76],[.52,1]];let c=!0;for(let u=0;u<4;u++)for(const[f,d]of l){const g=u*Math.PI/2,x=(f*Math.cos(g)-d*Math.sin(g))*r,m=(f*Math.sin(g)+d*Math.cos(g))*r;c?(a.moveTo(x,m),c=!1):a.lineTo(x,m)}a.closePath();const h=new eo(a,{depth:s,bevelEnabled:!1,steps:1});h.rotateX(-Math.PI/2),i.add(h,o,t,n,e)}function hh(i,t,e,n=76,s=15){const r=n/76,o=s/15.2,a=ux(),l=ce("arun-trim","#d8b47d",{roughness:.8,emissive:"#b57b27",emissiveIntensity:.19}),c=ce("arun-recess","#7d765b",{roughness:.9,emissive:"#76531f",emissiveIntensity:.12}),h=ce("arun-jade","#577768",{roughness:.78,emissive:"#806b25",emissiveIntensity:.14}),u=ce("arun-rose","#946e58",{roughness:.78,emissive:"#a16a23",emissiveIntensity:.14}),f=(_,v,T,A)=>fx(i,t,e,_*r,v*r,T*o,A);f(0,1.3,17.8,l),f(1.3,.55,18.1,a);for(const[_,v,T]of[[1.85,5.5,16.5],[8.2,6,13.6],[15,6.7,11.3],[22.6,6.4,9.4]]){f(_,v,T,a),f(_+.15,.42,T+.3,c),f(_+.65,.26,T+.44,l),f(_+v-.9,.3,T+.34,c),f(_+v-.55,.55,T+.78,a),f(_+v,.45,T+1,l);for(let C=_+1.35;C<_+v-1;C+=1.15)f(C,.17,T+.1,l);const A=n>40?6:3;for(let C=0;C<4;C++)for(let P=0;P<A;P++){const E=C*Math.PI/2,y=((P+.5)/A-.5)*T*1.02*o,D=t+Math.sin(E)*(T*o+.17*r)+Math.cos(E)*y,I=e+Math.cos(E)*(T*o+.17*r)-Math.sin(E)*y,O=(_+v*.52)*r;i.add(new Ji(.6*r),P%2?a:h,D,O,I,[0,E,0],[1,1.6,.48]),i.add(new Xe(.27*r,6,4),l,D,O+.9*r,I,[0,0,0],[1,1.12,1]);for(const B of[-1,1])i.line([D+Math.cos(E)*B*.35*r,O+.15*r,I-Math.sin(E)*B*.35*r],[D+Math.cos(E)*B*.6*r,O+1.15*r,I-Math.sin(E)*B*.6*r],.12*r,a,5)}}for(const _ of[-1,1]){fu(i,t,e+_*15.2*o,3.8*o,21.7*r,15*o,26,_);for(let v=0;v<26;v++){const T=(v+1)*21.7*r/26,A=t+_*(22.7-(v+.5)*15/26)*o;i.box(15*o/26+.02,T,3.8*o,A,T/2,e,j.stone)}for(const v of[-1,1])i.line([t+v*2.25*o,.9*r,e+_*22.7*o],[t+v*2.25*o,22.7*r,e+_*7.7*o],.29*r,l,6),i.line([t+_*22.7*o,.9*r,e+v*2.25*o],[t+_*7.7*o,22.7*r,e+v*2.25*o],.29*r,l,6)}f(29.45,5.8,8.55,a);for(let _=0;_<4;_++){const v=_*Math.PI/2,T=t+Math.sin(v)*8.65*o,A=e+Math.cos(v)*8.65*o;i.add(new tr(du(3.8*o,5.6*r,!0),8),c,T,28.6*r,A,[0,v,0]);for(const C of[-1,1])i.cylinder(.35*o,.45*o,6.1*r,T+Math.cos(v)*C*2.25*o,31.65*r,A-Math.sin(v)*C*2.25*o,l,8);i.box(5.5*o,.75*r,1.8*o,T,35.2*r,A,a,[0,v,0]),i.cylinder(.5*o,2.65*o,3.4*r,T,37.25*r,A,a,8),i.cylinder(0,.64*o,2*r,T,39.95*r,A,l,8),i.add(new Ji(.85*r),l,T,30.2*r,A,[0,v,0],[1.1,1.45,.8])}const d=[[33,7.5],[35,8.25],[38,8.8],[41,8.8],[44,8.4],[47,7.75],[50,6.9],[53,6],[56,5.05],[59,4.12],[62,3.18],[65,2.3],[68,1.48],[70,.88],[71.2,.53]],x=new El(d.map(([_,v])=>new rt(v*o,_*r))).getPoints(54),m=new no(x,32),p=m.attributes.position;for(let _=0;_<p.count;_++){const v=p.getX(_),T=p.getZ(_),A=Math.atan2(v,T),C=1+.035*Math.cos(A*8)-.018*Math.cos(A*16);p.setXYZ(_,v*C,p.getY(_),T*C)}m.computeVertexNormals(),i.add(m,a,t,0,e);const S=_=>{for(let v=1;v<d.length;v++)if(_<=d[v][0]){const[T,A]=d[v-1],[C,P]=d[v];return(A+(P-A)*(_-T)/(C-T))*o}return .53*o};for(let _=34;_<70.8;_+=1.05){const v=S(_),T=.16*o+v*.025;i.cylinder(v+T,v+T*.6,.23*r,t,_*r,e,l,16),i.cylinder(v+.035*o,v+.035*o,.19*r,t,(_-.25)*r,e,_%3<1?h:c,16);for(let A=0;A<8;A++){const C=A*Math.PI/4+Math.PI/8,P=v+T*.6;i.add(new Ji(.52*r),a,t+Math.sin(C)*P,(_+.52)*r,e+Math.cos(C)*P,[0,C,0],[.58,1.25,.65]),_<64&&i.add(new Ji(.19*r),A%2?h:u,t+Math.sin(C)*(P+.15*r),(_+.25)*r,e+Math.cos(C)*(P+.15*r),[0,C,Math.PI/4],[1,1,.5])}}i.cylinder(.075*r,.2*r,5.9*r,t,73.05*r,e,j.gold,8);for(let _=0;_<7;_++)i.cylinder((.76-_*.092)*o,(.76-_*.092)*o,.14*r,t,(71.25+_*.53)*r,e,j.gold,12);for(const _ of[-1,1])i.line([t,75.1*r,e],[t+_*.36*o,75.8*r,e],.075*r,j.gold,5)}function $r(i,t,e,n,s,r=j.gold){i.box(s*2.2,1.4,s*2.2,t,.7,e,j.stone);for(let o=0;o<4;o++)i.cylinder(s*(1-o*.12),s*(1.07-o*.12),1.15,t,1.4+o*1.1,e,r,16);i.sphere(s*.69,t,n*.3,e,r,[1,1.5,1]),i.cylinder(s*.13,s*.51,n*.3,t,n*.57,e,r,16);for(let o=0;o<9;o++){const a=s*(.32-o*.027);i.cylinder(a,a+.12,n*.018,t,n*(.63+o*.026),e,r,16)}i.cylinder(0,s*.13,n*.19,t,n*.905,e,r,12)}function Dl(i,t,e,n=0){for(const s of[-1,1])i.box(.65,1.8,e,s*t/2,.9,n,j.plaster),i.box(t,1.8,.65,0,.9,n+s*e/2,j.plaster);for(let s=-t/2;s<=t/2;s+=6)i.box(.85,2.25,.85,s,1.12,n+e/2,j.plaster),i.cylinder(0,.62,.8,s,2.65,n+e/2,j.gold,4)}function dx(i){i.box(100,.6,87,0,.3,-7,j.oldStone),hh(i,0,1,76,15.2);for(const t of[-22,22])for(const e of[-20,22])hh(i,t,e,27,6.4);hs(i,-37,-18,15,33,.75,j.tileGreen),hs(i,37,-18,15,33,.75,j.tile),Dl(i,101,88,-7)}function px(i){i.box(145,.5,108,0,.25,-7,j.oldStone),hs(i,-18,5,24,48,1.05),hs(i,43,-14,19,36,.9,j.tileGreen);for(const[t,e,n]of[[-58,-28,j.tileGreen],[-41,-28,j.gold],[-58,-46,j.teal],[-41,-46,j.tile]])$r(i,t,e,42,7.8,n);for(let t=-61;t<63;t+=13)$r(i,t,38,13,2.6,t%2?j.tileGreen:j.gold);for(const t of[-1,1]){const e=-7+t*47;i.box(130,4.5,5,0,2.5,e,j.plaster);for(const n of[-1,1])i.box(132,.38,Math.hypot(3.5,2),0,5.5,e+n*1.75,j.tileGreen,[n*Math.atan2(2,3.5),0,0]);i.line([-66,6.55,e],[66,6.55,e],.15,j.gold)}Dl(i,146,110,-7)}function Qa(i,t,e,n,s,r,o,a,l=!1){const c=ii(a,Math.max(12,Math.floor(n/2)),o);i.box(n,r,s,t,r/2,e,c);for(const h of[-1,1])for(const u of[-1,1])i.box(1.1,r+1,1.1,t+h*n/2,(r+1)/2,e+u*s/2,j.white);for(let h=0;h<=o;h++){const u=Math.max(.2,h*r/o);i.box(n+1.5,.32,s+1.5,t,u,e,j.concrete)}i.box(n+2,1.8,s+2,t,r+.5,e,j.white),l&&(i.box(n*.73,9,s*.72,t,r+5.5,e,j.dark),i.box(n*.75,.55,s*.74,t,r+10,e,j.softLight))}function uh(i,t,e,n,s,r,o,a){const l=ii(a,44,o);i.cylinder(1,1,r,t,r/2,e,l,8,[n/2,1,s/2]);for(let c=0;c<=o;c++)i.cylinder(1.015,1.015,.4,t,Math.max(.2,c*r/o),e,j.concrete,8,[n/2,1,s/2]);for(let c=0;c<8;c++){const h=c*Math.PI/4;i.box(.85,r,.85,t+Math.sin(h)*n/2,r/2,e+Math.cos(h)*s/2,j.white)}i.cylinder(.82,1,6,t,r+3,e,j.dark,8,[n/2,1,s/2]),i.cylinder(.825,.825,.55,t,r+6,e,j.softLight,8,[n/2,1,s/2])}function mx(i){uh(i,-61,-60,42,38,282,78,"icon-tower-a"),uh(i,43,-71,35,34,224,62,"icon-tower-b"),i.box(226,3,86,0,1.5,-3,j.stone);const t=ii("icon-mall-glass",42,2,!0);for(let e=0;e<4;e++){const n=218-e*12,s=78-e*10,r=4+e*7;i.box(n,7,s,0,r+3.5,-e*4,t),i.box(n+4,.85,s+3,0,r+7.1,-e*4,j.white),i.box(n+4,.16,.18,0,r+6.55,-e*4+s/2+1.55,j.softLight)}for(let e=-104;e<=104;e+=5){const n=24+7*Math.sin((e+110)*.035);i.box(1.15,n,1.1,e,4+n/2,38.2,j.gold,[0,e%10?.35:-.35,0])}for(const e of[-68,0,68])i.cylinder(12,18,11,e,31,-5,j.glass,4,[1.5,1,1]),i.cylinder(12.4,12.4,.6,e,36.5,-5,j.gold,4,[1.5,1,1]);i.box(70,6.5,1,0,31.5,39.4,j.dark),i.sign("ICONSIAM",64,6,0,31.5,40,"#fff0c2","#28231b");for(let e=-106;e<112;e+=8)i.cylinder(.24,.35,5,e,2.5,47,j.bronze,8),i.sphere(.48,e,5.2,47,j.warm);fu(i,0,47,200,3,9,8,1)}function fh(i,t,e,n,s,r,o,a,l=0){const c=ii(a,56,o);i.cylinder(1,1,r,t,r/2,e,c,28,[n/2,1,s/2]);for(let h=0;h<=o;h++){const u=Math.max(.23,h*r/o),f=Math.sin(h/o*Math.PI)*1.3;i.cylinder(1,1,.45,t+Math.sin(h/o*Math.PI)*l,u,e,j.white,28,[n/2+1.2+f,1,s/2+1])}for(const h of[-1,1])i.box(1.35,r+2,1.8,t+h*n*.43,(r+2)/2,e+s*.22,j.white);i.cylinder(.85,1,7,t,r+3.5,e,j.white,28,[n/2,1,s/2]),i.cylinder(.855,.855,.4,t,r+7.1,e,j.softLight,28,[n/2,1,s/2])}function gx(i){i.box(138,7,69,0,3.5,0,j.plaster),i.box(136,5,66,0,9.5,0,ii("river-podium",36,2,!0)),i.box(139,.8,70,0,12.4,0,j.white),fh(i,-34,-10,43,32,221,71,"river-tower-south",1.2),fh(i,37,-15,39,29,152,47,"river-tower-north",.7),i.box(29,3.5,.4,0,7.8,34.7,j.dark),i.sign("THE RIVER",27,3,0,7.8,35,"#e6dbc5","#28251f");for(let t=-63;t<=63;t+=9)i.box(.6,5,.6,t,3,35.2,j.gold),i.box(5.7,.15,.3,t,6,35.3,j.softLight)}function vx(i){Qa(i,0,-7,74,49,171,48,"state-main"),Qa(i,0,-9,61,43,198,56,"state-upper"),i.box(53,19,39,0,207,-9,ii("state-crown",20,5,!0));for(const t of[199,207,216])i.box(59,1.5,43,0,t,-9,j.white);for(let t=-24;t<=24;t+=8)i.cylinder(1.1,1.1,15,t,222.5,9,j.plaster,12),i.box(2.5,1,2.5,t,230,9,j.white);i.box(58,1.4,41,0,231,-8,j.white),i.cylinder(11,11,5,3,233.5,-5,j.plaster,32),i.add(new Xe(11.8,32,16,0,Math.PI*2,0,Math.PI/2),j.gold,3,236,-5,[0,0,0],[1,.78,1]),i.cylinder(.35,.8,3.4,3,246,-5,j.gold,8);for(let t=0;t<12;t++){const e=t*Math.PI/6;i.box(.5,4,.6,3+Math.sin(e)*10.9,233.8,-5+Math.cos(e)*10.9,j.gold)}i.box(74,1,51,0,172,-7,j.softLight),i.sign("LEBUA",18,3.6,-17,223,13,"#efd3a3","#302a25")}function du(i,t,e=!1){const n=new gs,s=i/2;return n.moveTo(-s,0),n.lineTo(s,0),n.lineTo(s,t-s),e?(n.quadraticCurveTo(s*.7,t-s*.25,0,t),n.quadraticCurveTo(-s*.7,t-s*.25,-s,t-s)):n.absarc(0,t-s,s,0,Math.PI,!1),n.lineTo(-s,0),n.closePath(),n}function Si(i,t,e,n,s,r,o,a=!1){i.add(new tr(du(t,e,a),10),o,n,s,r)}function pu(i,t,e,n,s=1){i.box(.23*s,2.2*s,.25*s,t,e,n,j.gold),i.box(1.25*s,.23*s,.25*s,t,e+.4*s,n,j.gold)}function xx(i){i.box(34,.65,55,0,.32,-5,j.stone),i.box(20,11,38,0,5.85,-7,j.redBrick),i.box(28,8,14,0,4.3,-9,j.redBrick),zs(i,0,11.1,-8,22,39,4,j.roof),i.box(24,15,4,0,7.8,14,j.plaster);for(const t of[-1,1])i.box(1.1,16,1.3,t*10,8,16.3,j.white);Si(i,5.5,8.5,0,.6,16.2,j.dark),Si(i,3,5.8,-7,5,16.25,j.stained),Si(i,3,5.8,7,5,16.25,j.stained),i.cylinder(6.6,7.4,7,0,18.5,8,j.plaster,16);for(let t=0;t<10;t++){const e=t*Math.PI/5;i.cylinder(.28,.38,6.7,Math.sin(e)*6.9,18.5,8+Math.cos(e)*6.9,j.white,8)}i.add(new Xe(7.3,24,14,0,Math.PI*2,0,Math.PI/2),j.redBrick,0,22,8,[0,0,0],[1,1.15,1]),i.cylinder(1.7,1.7,3,0,31.1,8,j.plaster,12),i.sphere(1.8,0,33,8,j.redBrick,[1,.6,1]),pu(i,0,35.1,8,.9);for(const t of[1,11.5,15.2])i.box(25,.65,4.8,0,t,14,j.white);i.sign("SANTA CRUZ",13,1.4,0,12.7,16.45,"#efd5a1","#b7a896")}function _x(i){i.box(28,.8,48,0,.4,-7,j.stone),i.box(19,14,37,0,7.4,-7,j.plaster),zs(i,0,14.5,-7,22,40,8,j.roof),i.box(8,27,7,0,13.5,14,j.plaster);for(const t of[-1,1]){i.box(.85,28,1.1,t*4,14,17.9,j.white),i.box(1.7,16,2.5,t*9.7,8,11,j.white),i.cylinder(0,1.2,5,t*9.7,18.5,11,j.roof,4);for(let e=-23;e<10;e+=7)i.box(1.2,13,1.7,t*9.8,6.5,e,j.white)}Si(i,4.2,7.8,0,.8,17.65,j.dark,!0),Si(i,3.1,5.8,0,18.5,17.65,j.stained,!0);for(const t of[-1,1])Si(i,3.1,7,t*6.5,5.6,11.65,j.stained,!0);i.add(new Ai(1.9,.22,8,24),j.gold,0,13.5,17.7),i.add(new xl(1.65,24),j.stained,0,13.5,17.72);for(let t=0;t<8;t++){const e=t*Math.PI/4;i.line([0,13.5,17.75],[Math.sin(e)*1.6,13.5+Math.cos(e)*1.6,17.75],.06,j.white)}i.box(8.6,.85,7.6,0,27,14,j.white),i.cylinder(0,4.9,15,0,35,14,j.roof,4),pu(i,0,43.5,14,.8);for(const t of[-4,4])for(const e of[10.5,17.5])i.cylinder(0,.55,3.4,t,29,e,j.roof,4)}function Mx(i){i.box(112,19,42,0,9.5,0,ii("river-city",28,4,!0));for(let t=0;t<=4;t++)i.box(115,1,45,0,t*4.6+.6,0,j.white);for(let t=-52;t<56;t+=8)i.box(1.1,20.5,1.8,t,10.25,22,j.plaster);i.box(48,6.5,2,0,18.7,23,j.plaster),i.sign("RIVER CITY BANGKOK",45,3.9,0,18.8,24.1,"#d9bd89","#44403a"),i.box(118,1.1,13,0,5,29,j.white);for(let t=-53;t<=53;t+=13)i.cylinder(.5,.65,4.8,t,2.4,33,j.plaster,10);for(let t=-48;t<55;t+=16)i.box(11,.2,.2,t,4.7,35.6,j.softLight)}function Sx(i){const t=ii("oriental-hotel",30,15,!0);i.box(98,56,31,-14,28,-21,t);for(let e=0;e<=16;e++)i.box(100,.62,33,-14,Math.max(.32,e*3.5),-21,j.plaster);for(let e=-59;e<40;e+=9)i.box(1.1,57,33,e,28.5,-21,j.plaster);Qa(i,49,-9,24,50,42,12,"oriental-wing"),i.box(65,9.8,24,-14,4.9,15,j.white),i.box(69,1.1,27,-14,10.2,15,j.white);for(const e of[1.1,5.8])for(let n=-41;n<16;n+=6)Si(i,4.2,3.7,n,e,27.08,j.window),i.cylinder(.22,.22,4,n-2.6,e+1.8,27.4,j.white,8);i.box(65,.4,1,-14,5.6,27.5,j.white),i.sign("MANDARIN ORIENTAL",40,2.4,-14,11.6,27.2,"#f0dab0","#514f40");for(let e=-39;e<20;e+=10)i.cylinder(0,3.4,1.5,e,3.2,34,j.plaster,12),i.cylinder(.13,.13,2.7,e,1.35,34,j.bronze,6),i.sphere(.25,e,2.5,34,j.warm)}function yx(i){i.box(94,.65,88,0,.32,-4,j.oldStone),hs(i,-6,-7,30,40,1.3),hs(i,35,-19,14,25,.68,j.tileGreen),$r(i,-36,18,25,5,j.porcelain),$r(i,30,24,18,4,j.gold),Dl(i,95,89,-4)}const dh={"wat-arun":dx,"wat-pho":px,"icon-siam":mx,"the-river":gx,"state-tower":vx,"santa-cruz":xx,"holy-rosary":_x,"river-city":Mx,"mandarin-oriental":Sx,"wat-kalayanamit":yx};function Ex(i){if(!dh[i])throw new Error(`Unknown river landmark: ${i}`);if(!Qo.has(i)){const t=new hx(i);dh[i](t),Qo.set(i,t.finish())}return Qo.get(i).clone(!0)}const bx=i=>()=>(i=Math.imul(i,1664525)+1013904223>>>0,i/4294967296),Ne=bx(81623),He=(i,t=0,e=0)=>new ni({color:i,emissive:t,emissiveIntensity:e,roughness:.72});class Dr{constructor(){this.parts=new Map,this.transform=new de}add(t,e,n,s,r,o=1,a=1,l=1,c=0){const h=this.transform;h.position.set(n,s,r),h.rotation.set(0,c,0),h.scale.set(o,a,l),h.updateMatrix();const u=t.clone().applyMatrix4(h.matrix);this.parts.has(e)||this.parts.set(e,[]),this.parts.get(e).push(u)}box(t,e,n,s,r,o,a,l=0){this.add(Gr,t,e,n,s,r,o,a,l)}finish(t){for(const[e,n]of this.parts){const s=ro(n);if(n.forEach(r=>r.dispose()),s){const r=new ve(s,e);t.add(r)}}this.parts.clear()}}const Gr=new bn(1,1,1);function Ir(i,t=20,e=4,n="#13283c",s="#ffde9b"){const r=document.createElement("canvas");r.width=1024,r.height=256;const o=r.getContext("2d");o.fillStyle=n,o.fillRect(0,0,1024,256),o.fillStyle=s,o.font="bold 110px Arial",o.textAlign="center",o.textBaseline="middle",o.fillText(i,512,128,970);const a=new as(r);return a.colorSpace=ye,new ve(new ln(t,e),new _n({map:a,side:We,toneMapped:!1}))}function ta(i,t=12){const e=document.createElement("canvas"),n=document.createElement("canvas");e.width=n.width=384,e.height=n.height=768;const s=e.getContext("2d"),r=n.getContext("2d");s.fillStyle=["#32353a","#3b3832","#333c3e","#2a3138","#52463a"][i%5],s.fillRect(0,0,384,768),r.fillStyle="#000",r.fillRect(0,0,384,768);const o=t,a=i%2?8:6,l=384/a,c=768/o;for(let f=0;f<o;f++)for(let d=0;d<a;d++){const g=d*l+6,x=f*c+5,m=Ne()>.64,p=l-12,S=c*.68;if(s.fillStyle="#0b151b",s.fillRect(g,x,p,S),m){const _=["#d7a764","#e1be89","#a2b7b4","#d6cbaf"][Math.floor(Ne()*4)];r.fillStyle=_,r.globalAlpha=.25+Ne()*.65,r.fillRect(g,x,p,S),r.globalAlpha=1,r.fillStyle="#050708",r.fillRect(g+p*(.25+Ne()*.4),x,p*.17,S),r.fillRect(g,x+S*.82,p,S*.18),Ne()>.55&&(r.fillStyle="#17150e",r.fillRect(g+4,x+S*.55,p*.35,S*.35))}s.fillStyle="#52524e",s.fillRect(g-1,x+S,p+3,2),r.fillStyle="#000",r.fillRect(g+p*.5,x,2,S),s.fillStyle="#202927",s.fillRect(d*l,f*c,384,2)}const h=new as(e),u=new as(n);return h.colorSpace=u.colorSpace=ye,h.anisotropy=u.anisotropy=4,new ni({map:h,emissiveMap:u,emissive:16774108,emissiveIntensity:1.9,roughness:.64,color:8885917})}const wx=[["wat-arun","Wat Arun",100.488905,13.7436982,1],["wat-pho","Wat Pho",100.4916918,13.7465039,-1],["wat-kalayanamit","Wat Kalayanamit",100.4912748,13.740062,1],["santa-cruz","Santa Cruz",100.4937728,13.7389447,1],["holy-rosary","Holy Rosary",100.5134793,13.7312611,-1],["river-city","River City",100.5132623,13.7303492,-1],["icon-siam","ICONSIAM",100.5103251,13.7268256,1],["mandarin-oriental","Mandarin Oriental",100.5143499,13.7239264,-1],["the-river","The River",100.5105286,13.7213726,1],["state-tower","State Tower",100.516897,13.7215374,-1]];function Tx(i,t,e,n){const s=He(13875339,16757582,.3),r=He(5330264),o=He(2306619),a=new _n({color:new kt(16763779).multiplyScalar(2.5)}),l=new _n({color:new kt(6604478).multiplyScalar(1.6)}),c=new pn;i.add(c);const h=[];for(let lt=0;lt<t.length;lt+=20)h.push(t.sample(lt));h.push(t.sample(t.length));const u=lt=>h.map(R=>new rt(R.x+R.nx*lt*R.width/2,-(R.z+R.nz*lt*R.width/2))),f=u(1),d=u(-1),g=[...f,...d.reverse()];for(const lt of[f,d]){const R=lt===f?0:lt.length-1,k=lt===f?lt.length-1:0,W=t.sample(0),G=t.sample(t.length);lt[R].x+=Math.sin(W.heading)*1600,lt[R].y-=Math.cos(W.heading)*1600,lt[k].x-=Math.sin(G.heading)*1600,lt[k].y+=Math.cos(G.heading)*1600}const x=new gs([new rt(-5500,-5500),new rt(5500,-5500),new rt(5500,5500),new rt(-5500,5500)]);x.holes.push(new qa(g));const m=new eo(x,{depth:4,bevelEnabled:!1,steps:1});m.rotateX(-Math.PI/2);const p=new ve(m,He(2436654));p.position.y=-1,i.add(p);const S=nx(i,n),_=S.water,v=[];for(const[lt,R,k,W,G]of wx){const K=Yr(k,W),Q=t.nearest(K.x,K.z),V=Ex(lt),nt=new Vn().setFromObject(V);let St=Math.max(Q.offset*G,Q.width/2+nt.max.z+12),yt=t.sample(Q.distance,G*St);V.rotation.y=Math.atan2(-Q.nx*G,-Q.nz*G);for(let M=0;M<12;M++){V.position.set(yt.x,3,yt.z),V.updateMatrixWorld();let N=!1;for(const Y of[nt.min.x,nt.max.x])for(const at of[nt.min.z,nt.max.z]){const Z=V.localToWorld(new L(Y,0,at)),Lt=t.nearest(Z.x,Z.z);Math.abs(Lt.offset)<Lt.width/2+4&&(N=!0)}if(!N)break;St+=15,yt=t.sample(Q.distance,G*St)}if(c.add(V),lt==="wat-arun"||lt==="wat-kalayanamit"){const M=new Jd(16767392,lt==="wat-arun"?5500:3500,210,.78,.75,2);M.position.set(yt.x-Q.nx*G*75,7,yt.z-Q.nz*G*75),M.target.position.set(yt.x,28,yt.z),i.add(M,M.target)}const w=new Vn().setFromObject(V);v.push({kind:lt,name:R,x:yt.x,z:yt.z,distance:Q.distance,bounds:w,side:G,reserveLength:(nt.max.x-nt.min.x)/2+22,inland:St-nt.min.z+20})}const T=Array.from({length:5},(lt,R)=>[ta(R,4),ta(R,10),ta(R,22)]),A=new Yd().load("/longtail/textures/riverside-shophouses.png");A.colorSpace=ye,A.anisotropy=4;const C=new ni({map:A,color:10922146,emissiveMap:A,emissive:16767392,emissiveIntensity:.035,roughness:.95}),P=new Dr,E=He(2634297),y=He(8078389),D=He(2309936),I=He(4470060);for(let lt=20;lt<t.length;lt+=35){for(const R of[-1,1]){const k=t.sample(lt);for(let W=0;W<3;W++){const G=18+Ne()*24,K=20+Ne()*23,Q=R*(k.width/2+K/2+12+W*110),V=t.sample(lt+(Ne()-.5)*14,Q);let nt=11+Ne()*25;W>0&&(nt+=Ne()*45),lt>t.length*.62&&Ne()>.72&&(nt+=Ne()*90);const St=lt<t.length*.48;if(St&&(nt=6+Ne()*13+W*4),W===0&&St&&(nt=9+Ne()*4),v.some(w=>w.side===R&&Math.abs(lt-w.distance)<w.reserveLength&&Math.abs(Q)<w.inland)||v.some(w=>V.x>w.bounds.min.x-25&&V.x<w.bounds.max.x+25&&V.z>w.bounds.min.z-25&&V.z<w.bounds.max.z+25))continue;const yt=W===0&&nt<22&&Math.floor(lt/35)%5!==0?C:T[Math.floor(Ne()*5)][nt<22?0:nt<65?1:2];if(P.box(yt,V.x,3+nt/2,V.z,G,nt,K,V.heading),P.box(E,V.x,nt+3.5,V.z,G+1,1,K+1,V.heading),W>0&&(P.box(E,V.x,nt+5.5,V.z,G*.3,4,K*.4,V.heading),nt>65&&P.box(a,V.x,nt+8,V.z,.35,.45,.35)),W===0){const w=t.sample(lt,R*(k.width/2+K+17));for(let M=0;M<2;M++)P.box(r,w.x+M*3,7+M*3,w.z,1.5,1.1,.8,V.heading)}if(W===0){const w=t.sample(lt,R*(k.width/2+5));P.box(y,w.x,6.7,w.z,G,.3,4,V.heading),Math.floor(lt)%3===0&&P.box(a,w.x,6.9,w.z,G*.3,.08,.24,V.heading)}}}for(const R of[-1,1]){const k=t.sample(lt,R*(t.sample(lt).width/2+4));if(P.box(r,k.x,1.5,k.z,2,3.5,36,k.heading),Math.floor(lt/35)%2===0&&(P.box(o,k.x,6,k.z,.35,7,.35),P.box(a,k.x,9.7,k.z,1.9,.35,1.9)),Math.floor(lt/35)%3===0){P.box(I,k.x+k.nx*R*8,7,k.z+k.nz*R*8,.8,9,.8);const W={x:k.x+k.nx*R*8,z:k.z+k.nz*R*8};for(let G=0;G<5;G++)P.add(new Xe(1,7,5),D,W.x+Math.sin(G*1.25)*2.3,11.5,W.z+Math.cos(G*1.25)*2.3,4.1,1.8,2.2,G*1.25)}}}P.finish(c);const O=[],B=[];function H(lt,R,k,W){const G=Yr(R,lt),K=t.nearest(G.x,G.z),Q=new pn;Q.position.set(K.x,0,K.z),Q.rotation.y=Math.atan2(-K.nz,K.nx),i.add(Q);const V=new Dr,nt=K.width+200,St=W==="steel"?16:19,yt=He(W==="steel"?4749666:6582139),w=W==="steel"?a:l;V.box(yt,0,St,0,nt,2.5,W==="steel"?17:29);for(const N of[-9,9])if(V.box(w,0,St+1.4,N,nt,.22,.22),W==="steel"){V.box(yt,0,St+13,N,nt,1.1,1.1);for(let Y=-nt/2;Y<nt/2;Y+=30){V.box(yt,Y,St+7,N,.7,12,.7);const at=new bn(1,1,1),Z=new de;Z.position.set(Y+15,St+7,N),Z.rotation.z=Math.atan2(30,12),Z.scale.set(.65,Math.hypot(30,12),.65),Z.updateMatrix(),V.parts.set(yt,[...V.parts.get(yt)||[],at.applyMatrix4(Z.matrix)])}}for(const N of[-K.width*.27,K.width*.27]){V.box(yt,N,St/2,0,8,St,13);const Y=new L(N,0,0).applyMatrix4(Q.matrixWorld);Q.updateMatrixWorld(),Q.localToWorld(Y.set(N,0,0)),O.push({x:Y.x,z:Y.z,width:9,length:16,heading:Q.rotation.y,mass:1e4,vx:0,vz:0})}W==="concrete"&&(V.box(yt,0,St+4,0,nt,2,6),V.box(a,0,St+5.1,0,nt,.1,5.4)),V.finish(Q);const M=Ir(k,54,4.8);M.position.set(0,St+3.8,W==="steel"?9:15),Q.add(M),B.push({group:Q,span:nt,height:St})}H(13.7393,100.4976,"MEMORIAL BRIDGE","steel"),H(13.73898,100.49851,"CHAO PHRAYA SKY PARK","concrete"),H(13.7193,100.5121,"TAKSIN BRIDGE","concrete");const X=new pn;i.add(X);const tt=He(3160130),q=new _n({color:new kt(16769717).multiplyScalar(2.2)}),ct=new _n({color:new kt(16721682).multiplyScalar(1.9)}),st=B.length*10,xt=[new Us(Gr,tt,st),new Us(Gr,q,st*2),new Us(Gr,ct,st*2)];xt.forEach(lt=>{lt.instanceMatrix.setUsage(fl),lt.frustumCulled=!1,X.add(lt)});const At=new de;function qt(lt){for(let R=0;R<st;R++){const{group:k,span:W,height:G}=B[Math.floor(R/10)],K=R%2?1:-1,Q=((R%10*53+lt*(7+R%4)*K)%(W+60)+W+60)%(W+60)-(W+60)/2,V=K*5,nt=(St,yt,w,M,N,Y,at,Z)=>{At.position.set(w,M,N),At.rotation.set(0,0,0),At.scale.set(Y,at,Z),At.updateMatrix(),At.matrix.premultiply(k.matrixWorld),St.setMatrixAt(yt,At.matrix)};k.updateMatrixWorld(),nt(xt[0],R,Q,G+2.3,V,4,1.25,1.65);for(let St=0;St<2;St++)nt(xt[1],R*2+St,Q+K*2.04,G+2.25,V+(St-.5)*1.2,.07,.22,.28),nt(xt[2],R*2+St,Q-K*2.04,G+2.25,V+(St-.5)*1.2,.07,.2,.3)}xt.forEach(R=>R.instanceMatrix.needsUpdate=!0)}const $t=new Dr,Ot=He(11939368,16733997,.35);for(const lt of[2,t.length-2]){const R=t.sample(lt);for(let W=-R.width*.43;W<=R.width*.43;W+=R.width/7){const G=t.sample(lt,W);$t.add(new Xe(1.05,8,6),Ot,G.x,.55,G.z,1,.9,1),$t.box(a,G.x,1.7,G.z,.25,.6,.25)}const k=Ir("RIVER LIMIT · TURN BACK",27,3,"#18313b","#ffd290");k.position.set(R.x,6,R.z),k.rotation.y=R.heading,i.add(k)}$t.finish(i);const et=[];for(const lt of e){const R=new pn;R.position.set(lt.x,0,lt.z);const k=new Dr,W=Math.atan2(lt.nx,lt.nz);R.rotation.y=W,k.box(r,0,1.2,0,17,1.3,9),k.box(s,0,1.8,15,4,.5,31),k.box(o,0,5.9,0,18,.35,9.6);for(const yt of[-7.3,7.3])for(const w of[-3.7,3.7])k.box(s,yt,3.8,w,.32,4.5,.32),k.box(o,yt,-.2,w,.65,3,.65);k.box(a,0,5.7,-4.8,17,.2,.22);const G=He(11896937),K=He([9158593,14200424,10838093][lt.index%3]),Q=He(2635332);for(let yt=0;yt<3;yt++){const w=(yt-1)*2.8,M=-.7+yt%2*1.4;k.box(K,w,3.1,M,.57,.85,.34),k.add(new Xe(.22,7,6),G,w,3.73,M,1,1.18,.96);for(const N of[-1,1])k.box(Q,w+N*.15,2.35,M,.19,.75,.22),k.box(K,w+N*.38,3.05,M,.15,.65,.19)}k.finish(R);const V=Ir(lt.name.toUpperCase(),15,2);V.position.set(0,5,-4.9),V.rotation.y=Math.PI,R.add(V),R.position.x+=lt.nx*15,R.position.z+=lt.nz*15,i.add(R),O.push({x:R.position.x,z:R.position.z,width:9,length:17,heading:W-Math.PI/2,mass:1e4,vx:0,vz:0});const nt=new ve(new bl(17.5,18.3,64),new _n({color:16760166,transparent:!0,opacity:.8,side:We,depthWrite:!1,toneMapped:!1}));nt.rotation.x=-Math.PI/2,nt.position.set(lt.x,.18,lt.z),i.add(nt);const St=Ir("PICK UP",13,2.8,"#163237","#ffd995");St.position.set(lt.x,9,lt.z),i.add(St),et.push({pier:lt,ring:nt,beacon:St})}const it=tx(i),wt=it.sky,Pt=ax(i,t,v,n),mt=lx(i,t,v,n),Wt=Array.from({length:n?3:5},()=>{const lt=new ru(16761212,0,46,2);return i.add(lt),lt});return{water:_,landmarks:v,pierVisuals:et,bridgeColliders:O,sky:wt,update(lt,R,k,W=[]){it.update(lt),qt(lt),Pt.update(lt),mt.update(lt);const G=[...Pt.lights,...mt.lights,...W];S.update(lt,R,G);const K=G.map(Q=>({s:Q,d:(Q.x-R.position.x)**2+(Q.z-R.position.z)**2})).sort((Q,V)=>Q.d-V.d);for(let Q=0;Q<Wt.length;Q++){const V=K[Q]?.s,nt=Wt[Q];nt.intensity=V?Math.min(100,V.power*(V.boat?.48:1.9)):0,V&&(nt.position.set(V.x,V.y,V.z),nt.color.set(V.color),nt.distance=V.distance||46)}for(const Q of et){const V=k.fare?k.fare.to.id===Q.pier.id:!k.finished&&(k.cooldowns.get(Q.pier.id)||0)<=k.clock;Q.ring.visible=Q.beacon.visible=V,V&&(Q.ring.material.color.set(k.fare?9040591:16760166),Q.ring.material.opacity=.55+Math.sin(lt*3)*.15,Q.beacon.quaternion.copy(R.quaternion),Q.beacon.visible=R.position.distanceTo(Q.beacon.position)<550,Q.beacon.position.y=9+Math.sin(lt*2)*.6)}}}}const mu=Object.freeze({longtail:Object.freeze({length:12.4,width:2.35,mass:1,maxSpeed:25}),cruise:Object.freeze({length:55,width:13,mass:24,maxSpeed:5.1}),ferry:Object.freeze({length:30,width:5.5,mass:5.5,maxSpeed:12}),electric:Object.freeze({length:24,width:7,mass:7,maxSpeed:9}),fishing:Object.freeze({length:6.5,width:1.55,mass:.45,maxSpeed:3.8})}),ea={wood:10183998,woodLight:12096096,darkWood:4205343,white:14408141,paintWhite:14146002,red:10301993,teal:1207401,orange:13460520,gold:12489810,navy:1453113,steel:10596532,rubber:1316630,warm:16768401,cyan:7858149},Qi=new Map,na=new Map,us=(i,t,e=0)=>{const n=Math.sin(i*127.1+t*311.7+e*74.7)*43758.5453;return n-Math.floor(n)};function oo(i,t,e=256,n=!0){if(na.has(i))return na.get(i);const s=new Uint8Array(e*e*4);for(let o=0;o<e;o++)for(let a=0;a<e;a++){const l=t(a,o,e),c=(o*e+a)*4;s[c]=l[0],s[c+1]=l[1],s[c+2]=l[2],s[c+3]=255}const r=new gl(s,e,e,nn);return r.wrapS=r.wrapT=is,n&&(r.colorSpace=ye),r.generateMipmaps=!0,r.minFilter=Nn,r.magFilter=en,r.anisotropy=4,r.needsUpdate=!0,na.set(i,r),r}function Ax(){return oo("wood",(i,t)=>{const e=Math.floor(t/32),n=t%32,s=Math.sin(t*.73+Math.sin(i*.022)*3.4)*12+Math.sin(t*2.2+i*.009)*5,r=Math.sin(Math.hypot((i-94)*.13,(t-113)*1.4))*9*Math.max(0,1-Math.abs(t-113)/18),o=173+s+r+us(i,t)*15+us(e,0)*26-(n<1?66:n>29?17:0);return[o,o*.88,o*.69]})}function ia(i){return oo(i,(t,e)=>{const n=us(t,e),s=us(Math.floor(t/8),Math.floor(e/8)),r=i==="cloth"?(t%3===0?-18:0)+(e%3===0?-12:0):0,o=i==="metal"?164+n*60:216+n*19+s*9+r;return[o,o,o]},128,i!=="metal")}function Rx(){return oo("wood-bump",(i,t)=>{const e=t%32<2?44:144+Math.sin(t*.73+Math.sin(i*.022)*3.4)*20+us(i,t)*23;return[e,e,e]},256,!1)}function Cx(i="warm"){return oo(`saloon-${i}`,(t,e,n)=>{const s=t/n,r=e/n;let a=.34+Math.exp(-((s-.34)**2*11+(r-.82)**2*18))*.56;r>.87&&(a*=.48),r<.23&&(a*=.29),(s<.11||s>.91)&&(a*=.65+.11*Math.sin(s*230));const l=[[.23,.49,.083],[.7,.43,.07]];for(const[h,u,f]of l){const d=((s-h)/f)**2+((r-u)/(f*1.06))**2<1,g=r<u-f*.5&&r>.15&&Math.abs(s-h)<f*(1.2+(u-r)*2);(d||g)&&(a*=.27)}return r>.27&&r<.29&&s>.34&&s<.82&&(a=.8),Math.abs(s-.575)<.012&&r>.17&&r<.275&&(a=.17),a+=Math.exp(-((s-.83)**2*1400))*.1,(i==="cool"?[149,197,206]:i==="dim"?[230,174,105]:[255,209,141]).map(h=>h*Math.min(1,a+us(t,e)*.025))})}function gu(i){if(Qi.has(i))return Qi.get(i);let t={color:ea[i]??i,roughness:.72,metalness:.02};if(["wood","woodLight","darkWood"].includes(i)&&(t={...t,map:Ax(),bumpMap:Rx(),bumpScale:.018,roughness:.48,metalness:.035}),i==="paintWhite"&&(t={...t,map:ia("paint"),roughness:.43,metalness:.11}),i.startsWith?.("cloth")&&(t={color:ea[i.slice(5).toLowerCase()]??ea.teal,map:ia("cloth"),roughness:.94,metalness:0}),i==="steel"&&(t={...t,roughnessMap:ia("metal"),metalness:.82,roughness:.38}),i==="gold"&&(t={...t,metalness:.63,roughness:.39}),i==="glass"&&(t={color:1323068,metalness:.61,roughness:.16,emissive:1454394,emissiveIntensity:.13}),["window","windowDim","windowCool"].includes(i)){const n=Cx(i==="windowDim"?"dim":i==="windowCool"?"cool":"warm");t={color:14205859,map:n,roughness:.22,metalness:.16,emissiveMap:n,emissive:16771518,emissiveIntensity:i==="windowDim"?.55:1.2}}i==="warm"&&(t={color:16772556,emissive:16764809,emissiveIntensity:3.4,roughness:.24}),i==="cyan"&&(t={color:12904425,emissive:7980767,emissiveIntensity:1.45,roughness:.28}),i==="navRed"&&(t={color:16735561,emissive:16716806,emissiveIntensity:3.1}),i==="navGreen"&&(t={color:6349459,emissive:321609,emissiveIntensity:3.1});const e=new ni({...t,side:We});return Qi.set(i,e),e}class Ri{constructor(){this.batches=new Map,this.frame=new te}add(t,e,n=[0,0,0],s=[0,0,0],r=[1,1,1]){t.clearGroups();const o=new te().compose(new L(...n),new gn().setFromEuler(new an(...s)),new L(...r));t.applyMatrix4(new te().multiplyMatrices(this.frame,o));const a=typeof e=="string"||typeof e=="number"?gu(e):e;this.batches.has(a)||this.batches.set(a,[]),this.batches.get(a).push(t.index?t.toNonIndexed():t),t.index&&t.dispose()}box(t,e,n,s=[0,0,0]){this.add(new bn(...t),n,e,s)}ball(t,e,n,s=[1,1,1],r=8){this.add(new Xe(t,r,6),n,e,[0,0,0],s)}cylinder(t,e,n,s,r=n,o=7){const a=new L(...t),l=new L(...e),c=l.clone().sub(a),h=a.add(l).multiplyScalar(.5),u=new En(r,n,c.length(),o);u.applyQuaternion(new gn().setFromUnitVectors(new L(0,1,0),c.normalize())),this.add(u,s,h.toArray())}curve(t,e,n,s=30,r=5){this.add(new wl(new yl(t.map(o=>new L(...o))),s,e,r,!1),n)}inFrame(t,e,n){const s=this.frame,r=new te().makeRotationY(e);r.setPosition(...t),this.frame=new te().multiplyMatrices(s,r),n(),this.frame=s}finish(t){const e=new pn;e.name=t;for(const[n,s]of this.batches){const r=ro(s,!1);for(const a of s)a.dispose();r.computeBoundingSphere();const o=new ve(r,n);o.castShadow=!0,o.receiveShadow=!0,e.add(o)}return e}}function Wn(i,t,e){const n=[],s=[],r=[];for(let a=0;a<=i;a++)for(let l=0;l<=t;l++)if(n.push(...e(a/i,l/t)),s.push(a/i*4,l/t),a<i&&l<t){const c=a*(t+1)+l;r.push(c,c+1,c+t+2,c,c+t+2,c+t+1)}const o=new ue;return o.setAttribute("position",new Yt(n,3)),o.setAttribute("uv",new Yt(s,2)),o.setIndex(r),o.computeVertexNormals(),o}const Il=(i,t,e)=>i+(t-i)*e;function vu(i,t){for(let e=1;e<t.length;e++)if(i<=t[e][0]){const n=t[e-1],s=t[e],r=Math.max(0,Math.min(1,(i-n[0])/(s[0]-n[0])));return Il(n[1],s[1],r*r*(3-2*r))}return t.at(-1)[1]}function xu(i,{length:t,width:e,rim:n=.78,draft:s=.38,fishing:r=!1,color:o="wood"}){const a=f=>e*.5*vu(f,[[0,.018],[.12,.54],[.3,.88],[.53,1],[.78,.86],[1,r?.07:.49]]),l=f=>n+Math.pow(Math.max(0,1-f*4.2),2)*(r?.33:.83)+Math.pow(Math.max(0,(f-.82)/.18),2)*.1,c=f=>-s+Math.pow(Math.abs(f-.5)*2,4)*.33;i.add(Wn(40,12,(f,d)=>[a(f)*(d*2-1),Il(c(f),l(f),Math.pow(Math.abs(d*2-1),2.8)),(f-.5)*t]),o);const h=[[-a(1),l(1),t*.5],[a(1),l(1),t*.5],[a(1)*.5,-.05,t*.5],[-a(1)*.5,-.05,t*.5]];i.add(Xn(h),o);const u=r?.09:.2;i.add(Wn(20,1,(f,d)=>{const g=.12+f*.84;return[a(g)*.82*(d*2-1),u+.1*Math.pow(Math.abs(f-.5)*2,4),(g-.5)*t]}),"woodLight");for(let f=-t*.36;f<t*.46;f+=r?.42:.5){const d=f/t+.5;i.box([a(d)*1.63,.025,.025],[0,u+.035,f],"darkWood")}for(const f of[-1,1]){const d=Array.from({length:34},(g,x)=>{const m=x/33;return[f*a(m),l(m),(m-.5)*t]});i.curve(d,r?.045:.075,r?"darkWood":"red",40),r||(i.curve(d.map(([g,x,m])=>[g,x-.14,m]),.048,"gold",40),i.curve(d.map(([g,x,m])=>[g*.97,x-.24,m]),.055,"teal",40),i.curve(d.map(([g,x,m])=>[g*.86,x-.4,m]),.022,"darkWood",40));for(let g=0;g<14;g++){const x=.15+g/14*.78;i.curve([[f*a(x)*.55,.1,(x-.5)*t],[f*a(x)*.9,l(x)*.52,(x-.5)*t],[f*a(x)*.98,l(x)-.015,(x-.5)*t]],.025,"darkWood",5,4)}}return{beam:a,rail:l}}function Xn(i,t=[1,1]){const e=new ue;return e.setAttribute("position",new Yt(i.flat(),3)),e.setAttribute("uv",new Yt([0,0,t[0],0,t[0],t[1],0,t[1]],2)),e.setIndex([0,1,2,0,2,3]),e.computeVertexNormals(),e}function Ul(i,t,e,n,s=.28,r=1){i.add(new Ai(s,s*.32,6,12),"rubber",[t,e,n],[0,Math.PI/2,0]),i.curve([[t-r*.06,e+s*1.7,n],[t+r*.06,e+s*.6,n],[t,e-s*.3,n]],.012,"woodLight",7,4)}function Zs(i,t,e,n,s=1,r=.29){i.add(new Ai(r,.065,6,14),"orange",[t,e,n],[0,Math.PI/2,0]);for(let o=0;o<4;o++){const a=Math.PI/4+o*Math.PI/2;i.add(new Ai(r,.069,5,3,.25),"white",[t,e,n],[0,Math.PI/2,a])}i.curve([[t-s*.02,e+.42,n-.21],[t+s*.04,e-.37,n-.31],[t+s*.04,e-.43,n+.28],[t-s*.02,e+.4,n+.21]],.012,"woodLight",13,4)}function ao(i,t,e,n,s=1){i.box([.3*s,.07*s,.19*s],[t,e,n],"steel"),i.cylinder([t,e,n],[t,e+.13*s,n],.045*s,"steel"),i.cylinder([t-.22*s,e+.16*s,n],[t+.22*s,e+.16*s,n],.045*s,"steel")}function Jr(i,t,e,n,s=.3){for(let r=0;r<4;r++){const o=s-r*s*.17;i.curve(Array.from({length:19},(a,l)=>{const c=l/18*Math.PI*2;return[t+Math.cos(c)*o,e+r*.008,n+Math.sin(c)*o*.72]}),.018,"woodLight",19,4)}}function js(i,t,e,n,s){i.box([.12,.18,.18],[t,e-.02,n],"steel"),i.ball(.068,[t+s*.055,e,n-.035],s<0?"navRed":"navGreen",[.7,1,.85]),i.box([.15,.045,.22],[t,e+.09,n],"rubber")}function lo(i,t,e,n,s=1){i.cylinder([t,e,n],[t,e+1.3*s,n],.017*s,"steel");const r=[[0,1/6,"red"],[1/6,2/6,"white"],[2/6,4/6,"navy"],[4/6,5/6,"white"],[5/6,1,"red"]];for(const[o,a,l]of r)i.add(Wn(8,1,(c,h)=>[t+c*.68*s,e+(1.25-.45*(o+h*(a-o)))*s,n+Math.sin(c*8)*.08*s]),l)}function mn(i,t,e,n,{seated:s=!1,heading:r=0,shirt:o="teal",skin:a=11960921,hat:l=!1,scale:c=1,lifeVest:h=!1}={}){i.inFrame([t,e,n],r,()=>{const u=i.frame;i.frame=u.clone().scale(new L(c,c,c));const f=s?.47:.86,d=f+.48,g=d+.23;if(i.add(new no([new rt(.155,0),new rt(.16,.1),new rt(.185,.28),new rt(.222,.37),new rt(.162,.43)],10),o,[0,f,0],[0,0,0],[1,1,.67]),h){for(const x of[-1,1])i.box([.14,.35,.065],[x*.095,f+.26,-.14],"orange",[0,0,x*.035]);i.box([.34,.025,.07],[0,f+.16,-.176],"rubber")}i.ball(.18,[0,f,0],"navy",[1,.63,.76]),i.cylinder([0,d-.02,0],[0,d+.08,0],.065,a),i.ball(.12,[0,g,-.015],a,[.82,1.15,.87]),i.ball(.112,[0,g+.059,.013],"rubber",[.94,.71,.97]),i.ball(.023,[0,g-.005,-.117],a,[.8,.9,1]);for(const x of[-1,1])i.ball(.021,[x*.098,g-.002,-.006],a,[.53,1.2,.65],6),i.ball(.01,[x*.037,g+.017,-.111],"rubber",[1,.65,.45],6);for(const x of[-1,1]){const m=[x*.105,f-.02,0],p=s?[x*.16,.43,-.36]:[x*.1,.43,x*.018],S=s?[x*.16,.09,-.37]:[x*.13,.09,-.035];i.cylinder(m,p,.075,"navy",.087),i.ball(.071,p,"navy"),i.cylinder(p,S,.052,"navy",.066),i.box([.135,.08,.24],[S[0],.055,S[2]-.035],"rubber");const _=[x*.22,d-.075,0],v=s?[x*.25,f+.2,-.16]:[x*.25,f+.21,.03],T=s?[x*.16,f+.03,-.36]:[x*.26,f-.05,-.035];i.cylinder(_,v,.068,o,.087),i.cylinder(v,T,.044,a,.054),i.ball(.058,T,a,[.75,1,.7])}l&&(i.add(new to(.24,.13,14),"woodLight",[0,g+.16,-.012]),i.cylinder([0,g+.105,-.012],[0,g+.123,-.012],.26,"woodLight",.26,16),i.cylinder([-.1,g+.1,0],[-.06,g-.08,-.05],.008,"darkWood",.008,4)),i.frame=u})}function _u(i,{length:t,width:e,y:n,z:s=0,color:r="teal",posts:o=3,stripe:a="gold"}){i.add(Wn(24,16,(l,c)=>[(c-.5)*e,n+.24*(1-Math.pow(c*2-1,2))-Math.sin(l*Math.PI*(o-1))**2*.035+Math.sin(l*Math.PI*24)*.006,s+(l-.5)*t]),`cloth${r[0].toUpperCase()}${r.slice(1)}`);for(const l of[-1,1])i.add(Wn(24,1,(c,h)=>[l*e/2,n-h*(.13+.025*Math.sin(c*Math.PI*20)),s+(c-.5)*t]),`cloth${r[0].toUpperCase()}${r.slice(1)}`),i.box([.035,.029,t],[l*e/2,n-.022,s],a),i.cylinder([l*e/2,n,s-t/2],[l*e/2,n,s+t/2],.028,"steel");for(let l=0;l<o;l++){const c=s-t*.46+l/Math.max(1,o-1)*t*.92;for(const h of[-1,1])i.cylinder([h*(e/2-.045),.6,c],[h*(e/2-.045),n,c],.028,"steel");i.curve([[-e/2,n-.008,c],[-e*.25,n+.17,c],[0,n+.23,c],[e*.25,n+.17,c],[e/2,n-.008,c]],.025,"steel",12)}i.add(Xn([[-.075,n+.246,s-t/2],[.075,n+.246,s-t/2],[.075,n+.246,s+t/2],[-.075,n+.246,s+t/2]]),a)}function Qs(i,t,e,n,s,r="red"){i.box([s,.12,.42],[t,e,n],"woodLight"),i.box([s-.045,.055,.38],[t,e+.078,n],r),i.box([s,.33,.075],[t,e+.26,n+.19],r);for(const o of[-1,1])i.box([.055,.39,.055],[t+o*s*.38,e-.2,n],"steel")}function Px(i=!0){const t=new Ri;t.box([.64,.49,.88],[0,.12,0],"rubber"),t.box([.7,.12,.68],[0,.4,-.035],"steel");for(let r=0;r<4;r++)t.cylinder([.3,.12,-.29+r*.18],[.45,.24,-.29+r*.18],.056,"steel",.056,7),t.box([.43,.042,.1],[0,.485,-.29+r*.18],"rubber");t.cylinder([-.16,.26,-.47],[-.16,.36,-.68],.09,"steel",.09,7),t.cylinder([-.16,.36,-.68],[-.16,.75,-.68],.06,"steel",.06,7),t.cylinder([0,.15,.35],[0,.15,.58],.27,"rubber",.27,10),t.cylinder([0,.15,.57],[0,.15,.6],.13,"steel",.13,10),t.cylinder([-.35,.32,.04],[-.82,.34,-.8],.027,"steel"),t.cylinder([-.82,.34,-.8],[-.84,.35,-1.03],.045,"rubber"),t.cylinder([0,.04,.55],[0,-1.13,3.52],.047,"steel",.036,7),t.cylinder([0,-.01,.51],[0,-.4,1.51],.081,"rubber",.055,7),t.box([.55,.28,.38],[.58,-.19,-.12],"red"),t.cylinder([.58,-.06,-.12],[.58,.025,-.12],.055,"rubber"),t.box([.63,.56,.1],[0,.13,-.5],"rubber");for(let r=0;r<11;r++)t.box([.48,.013,.12],[0,-.1+r*.045,-.535],"steel");for(let r=0;r<5;r++)t.cylinder([.3,.26,-.28+r*.13],[.37,.48,-.28+r*.13],.014,"gold",.014,5),t.ball(.026,[.31,.45,-.28+r*.13],"steel",[1,.7,1],6);t.curve([[.49,.12,-.22],[.62,.14,.1],[.51,.42,.38],[.29,.46,.28]],.049,"steel",12,6),t.curve([[-.31,.34,-.32],[-.5,.4,-.06],[-.47,-.07,.37],[-.14,-.19,.43]],.029,"rubber",12,5),t.curve([[.62,-.05,-.1],[.71,.29,-.19],[.34,.43,-.26],[.15,.39,.02]],.016,"rubber",14,4);for(const r of[-.21,.21])t.cylinder([r,.15,.62],[r,.15,.645],.15,"steel",.15,12),t.cylinder([r,.15,.648],[r,.15,.66],.11,"rubber",.11,10),t.cylinder([r,.15,.666],[r,.15,.67],.035,"gold",.035,7);t.curve([[-.21,.285,.66],[.21,.285,.66],[.34,.15,.66],[.21,.015,.66],[-.21,.015,.66],[-.34,.15,.66],[-.21,.285,.66]],.016,"rubber",26,4);for(const r of[-1,1])t.cylinder([r*.4,-.17,-.36],[r*.4,-.17,.4],.035,"steel"),t.cylinder([r*.4,-.17,.02],[0,-.47,.02],.038,"steel");const e=t.finish("exposed long-tail engine"),n=new Ri;n.cylinder([0,0,-.045],[0,0,.045],.085,"gold",.075,9);for(let r=0;r<3;r++){const o=r*Math.PI*2/3;n.box([.13,.37,.043],[Math.sin(o)*.16,Math.cos(o)*.16,0],"gold",[0,.25,-o+.19])}const s=n.finish("propeller");return s.position.set(0,-1.13,3.52),s.rotation.x=.375,e.add(s),e.userData.propeller=s,i||e.scale.setScalar(.55),e}function Lx(i){const t=new Ri;xu(t,{length:12.4,width:2.35}),t.add(Xn([[-.54,.83,-4.45],[.54,.83,-4.45],[.07,1.47,-6.15],[-.07,1.47,-6.15]]),"woodLight"),t.curve([[0,.68,-5.35],[0,1,-6.01],[0,1.67,-6.33],[0,1.79,-6.26]],.105,"wood",15,6);for(let s=0;s<5;s++)t.box([.26,.065,.15],[0,1.25+s*.075,-6.17-s*.02],s%2?"gold":"red",[-.26,0,0]);for(let s=0;s<3;s++){const r=(s-1)*.09,o=1.54,a=-6.22;t.add(Xn([[r-.055,o,a],[r+.055,o,a],[r+.09,o-.66+s*.1,a+.22],[r-.025,o-.68+s*.1,a+.18]]),["red","gold","teal"][s])}for(let s=0;s<=12;s++){const r=Math.PI*s/12;t.ball(.046,[.18*Math.cos(r),1.2-.32*Math.sin(r),-6.06],s%3===0?"warm":"gold",[1,1,1],6)}_u(t,{length:6.2,width:2.17,y:2.02,z:.15,color:i%3===1?"red":"teal",posts:4});for(let s=0;s<5;s++)Qs(t,0,.52,-2.28+s*1.06,1.79);t.cylinder([-.83,1.99,-2.74],[.83,1.99,-2.74],.024,"warm"),t.cylinder([-.83,1.99,2.91],[.83,1.99,2.91],.024,"warm"),mn(t,-.43,.21,-1.18,{seated:!0,shirt:"white"}),mn(t,.42,.21,-.13,{seated:!0,shirt:"red",skin:14199428}),mn(t,-.43,.21,1.99,{seated:!0,shirt:"orange"}),t.box([1.27,.14,.63],[0,.73,4.2],"woodLight"),mn(t,-.16,.4,4.21,{seated:!0,shirt:"navy",hat:!0,lifeVest:!0}),t.box([.48,.36,.56],[.59,.37,3.81],"navy"),t.cylinder([-.47,.41,4.88],[0,1,5.24],.06,"steel"),t.cylinder([.47,.41,4.88],[0,1,5.24],.06,"steel");for(const s of[-1,1]){Ul(t,s*1.04,.55,2.89,.21,s),js(t,s*1.08,2.06,-2.66,s),ao(t,s*.79,.89,3.31,.75),Zs(t,s*1.06,1.3,2.65,s,.22),t.add(new ln(3.8,.24),co("เรือหางยาว  BANGKOK"),[s*1.137,.59,-.35],[0,s*Math.PI/2,0]),t.cylinder([s*1.025,1.87,-2.9],[s*1.025,1.87,3.16],.035,"clothWhite");for(let r=-2.5;r<2.9;r+=1.2)t.curve([[s*.96,1.89,r-.045],[s*.96,1.63,r],[s*.96,1.89,r+.045]],.014,"rubber",8,4)}Jr(t,.03,.87,-4.62,.23),lo(t,.61,.9,4.04,.67),t.box([.3,.15,.14],[-.83,1.56,3.34],"rubber"),t.box([.24,.1,.008],[-.83,1.57,3.418],"cyan");for(const s of[-2.74,2.91])t.box([1.8,.07,.11],[0,2.045,s],"paintWhite");const e=t.finish("Thai wooden long-tail"),n=Px();return n.position.set(0,1,5.22),e.add(n),e.userData.motor=n,e.userData.propeller=n.userData.propeller,e.userData.passengerSeats=[[-.43,.73,-2.28],[.43,.73,-2.28],[-.43,.73,-.16],[.43,.73,.9]],e}function Nl(i,{length:t,width:e,height:n=1.5,draft:s=1.1,color:r="paintWhite",x:o=0,stern:a=.82}){const l=c=>e*.5*vu(c,[[0,.025],[.065,.39],[.18,.87],[.3,1],[.78,1],[1,a]]);i.add(Wn(32,12,(c,h)=>[o+l(c)*(h*2-1),-s+(n+s)*Math.pow(Math.abs(h*2-1),3),(c-.5)*t]),r),i.add(Wn(32,1,(c,h)=>[o+l(c)*(h*2-1),n,(c-.5)*t]),"woodLight"),i.add(Xn([[o-l(1),n,t/2],[o+l(1),n,t/2],[o+l(1)*.75,-s*.45,t/2],[o-l(1)*.75,-s*.45,t/2]]),r);for(const c of[-1,1]){const h=Array.from({length:28},(u,f)=>{const d=f/27;return[o+l(d)*c,n-.27,(d-.5)*t]});i.curve(h,.065,"gold",36),i.curve(h.map(([u,f,d])=>[u*.999,f-.38,d]),.08,"navy",36)}return l}function Bs(i,t,e,n,s,{material:r="steel",height:o=.94,step:a=1.6,lights:l=!1}={}){i.cylinder([t,e+o,n],[t,e+o,s],.035,r),i.cylinder([t,e+o*.49,n],[t,e+o*.49,s],.021,r);for(let c=n;c<=s+.01;c+=a)i.cylinder([t,e,c],[t,e+o,c],.027,r),l&&i.ball(.054,[t,e+o+.028,c],"warm",[1,1,1],6)}function Dx(i,t,e,n){i.cylinder([t,e,n],[t,e+.71,n],.055,"steel"),i.cylinder([t,e+.71,n],[t,e+.765,n],.55,"white",.55,10),i.cylinder([t,e+.768,n],[t,e+.9,n],.048,"gold"),i.ball(.043,[t,e+.92,n],"warm",[.72,1.2,.72],6);for(const s of[-1,1])i.cylinder([t+s*.3,e+.768,n],[t+s*.3,e+.785,n],.13,"white",.13,10),i.cylinder([t+s*.23,e+.77,n+.2],[t+s*.23,e+.87,n+.2],.009,"steel",.009,5),i.ball(.043,[t+s*.23,e+.9,n+.2],"glass",[.8,1.17,.8],6);for(const s of[-1,1]){i.box([.44,.08,.44],[t+s*.81,e+.43,n],"red"),i.box([.1,.45,.44],[t+s*1.01,e+.69,n],"white");for(const r of[-.15,.15])i.cylinder([t+s*.83,e,n+r],[t+s*.83,e+.42,n+r],.025,"steel")}}function co(i){const t=`sign:${i}`;if(Qi.has(t))return Qi.get(t);if(typeof document>"u")return gu("warm");const e=document.createElement("canvas");e.width=1024,e.height=128;const n=e.getContext("2d");n.fillStyle="#133c43",n.fillRect(0,0,e.width,e.height),n.strokeStyle="#d6b25c",n.lineWidth=5,n.strokeRect(8,8,e.width-16,e.height-16),n.fillStyle="#ffe2a0",n.font="bold 64px Arial, sans-serif",n.textAlign="center",n.textBaseline="middle",n.fillText(i,512,67,980);const s=new as(e);s.colorSpace=ye;const r=new ni({map:s,emissiveMap:s,emissive:16777215,emissiveIntensity:.6,roughness:.65,side:We});return Qi.set(t,r),r}function Ix(i){const t=new Ri;Nl(t,{length:55,width:13,height:1.45,draft:1.6});for(const[e,n,s,r]of[[1.48,11.65,44,1],[4.08,11.55,43,1.4],[6.54,10.25,39.5,1.8]]){t.box([n,.22,s],[0,e,r],"paintWhite"),t.box([n-.23,.05,s-.24],[0,e+.145,r],"woodLight");for(const o of[-1,1])t.box([.07,.075,s-.3],[o*(n/2+.013),e+.09,r],"warm")}for(const e of[1.7,4.3]){for(const n of[-1,1]){const s=n*5.29;t.box([.13,.34,40.7],[s,e+.19,1.3],"paintWhite"),t.box([.13,.22,40.7],[s,e+2.03,1.3],"paintWhite");for(let r=-18.2;r<=20;r+=2.6)t.box([.09,1.6,2.34],[s,e+1.11,r],(Math.round((r+18.2)/2.6)+(e>3?1:0))%4===0?"windowDim":"window"),t.box([.15,1.98,.095],[s,e+1.07,r+1.23],"paintWhite"),t.box([.13,.24,2.35],[s+n*.02,e+1.79,r],"glass"),t.box([.15,1.61,.045],[s+n*.035,e+1.08,r],"gold");Bs(t,n*5.7,e-.06,-19.7,21.2,{lights:e>3,step:1.5})}t.box([10.5,1.95,.16],[0,e+1.08,21.85],"paintWhite");for(let n=-3.24;n<=3.24;n+=2.16)t.box([1.94,1.28,.17],[n,e+1.13,21.95],"window");t.add(Xn([[-5.21,e+.42,-19.52],[5.21,e+.42,-19.52],[4.92,e+1.85,-18.94],[-4.92,e+1.85,-18.94]]),"glass");for(const n of[-3.35,0,3.35])t.cylinder([n,e+.43,-19.54],[n*.95,e+1.89,-18.96],.053,"paintWhite")}for(const e of[-1,1]){Bs(t,e*4.98,6.69,-17.5,21.3,{material:"gold",step:1.4,lights:!0}),Bs(t,e*5.45,1.64,-22.2,-19.9,{lights:!0,step:.8});const n=co(i%2?"CHAO PHRAYA NIGHT":"RIVER PEARL");t.add(new ln(13.6,1.12),n,[e*5.81,3.78,1.3],[0,e*Math.PI/2,0])}t.box([3.35,.045,8.5],[0,6.715,-.8],"teal");for(const e of[-3.2,3.2])for(let n=-13;n<=16;n+=4.8)Dx(t,e,6.72,n);for(let e=0;e<10;e++){const n=e%2?2.35:-2.35,s=-12+Math.floor(e/2)*5.4;mn(t,n,6.73,s,{seated:!0,heading:n<0?-Math.PI/2:Math.PI/2,shirt:e%3===0?"red":"white",skin:e%2?14199428:11960921})}for(let e=0;e<4;e++)mn(t,-.75+e%2*1.5,6.75,-1.7+Math.floor(e/2)*2.1,{shirt:e%2?"red":"white",heading:e*1.4});for(const e of[-4.25,4.25])for(const n of[-16.1,20.3])t.cylinder([e,6.7,n],[e,9.27,n],.055,"steel");for(const e of[-4.25,4.25]){t.curve([[e,9.2,-16.1],[e,8.63,-4],[e,8.63,8],[e,9.2,20.3]],.013,"rubber",24,4);for(let n=0;n<25;n++){const s=n/24,r=Il(-16.1,20.3,s),o=9.2-Math.sin(s*Math.PI)*.59;t.ball(.067,[e,o-.075,r],"warm",[1,1.18,1],6)}}t.box([5.1,1.82,3.25],[0,7.64,-16.45],"paintWhite"),t.add(Xn([[-2.5,7.2,-18.12],[2.5,7.2,-18.12],[2.35,8.45,-17.76],[-2.35,8.45,-17.76]]),"glass"),t.box([5.4,.18,3.6],[0,8.65,-16.45],"paintWhite"),t.add(Wn(12,18,(e,n)=>[(n-.5)*8.9,9.04+.47*(1-(n*2-1)**2),13.65+e*6.1]),"clothWhite");for(const e of[13.65,16.7,19.75])t.curve([[-4.45,9.04,e],[0,9.51,e],[4.45,9.04,e]],.037,"steel",16,5);for(const e of[-4.24,4.24])t.cylinder([e,6.75,13.78],[e,9.1,13.78],.058,"paintWhite");t.cylinder([0,8.73,-15.9],[0,10.2,-15.9],.057,"steel"),t.box([1.76,.14,.32],[0,9.61,-15.9],"paintWhite"),t.ball(.09,[0,10.24,-15.9],"warm"),js(t,-5.28,6.25,-16.8,-1),js(t,5.28,6.25,-16.8,1);for(const e of[-1,1])for(let n=-15;n<=20;n+=7)t.cylinder([e*6.09,.66,n],[e*6.09,1.35,n],.19,"rubber",.19,8);for(const e of[-1,1]){for(const n of[-23,22.3])ao(t,e*3.7,1.66,n,1.7);Zs(t,e*5.71,2.61,17.6,e,.39),Zs(t,e*4.99,7.61,19.8,e,.39),t.cylinder([e*4.96,7.64,-11.5],[e*4.96,8.17,-11.5],.052,"paintWhite"),t.ball(.12,[e*4.96,8.19,-11.5],"warm",[.68,.68,1],8);for(let n=0;n<10;n++)t.box([1.17,.075,.3],[e*4.75,1.83+n*.248,19.1+n*.26],"paintWhite");t.cylinder([e*4.15,2.66,19.06],[e*4.15,5.01,21.42],.032,"steel"),t.cylinder([e*5.36,2.66,19.06],[e*5.36,5.01,21.42],.032,"steel")}Jr(t,-2.3,1.49,-23,.65),Jr(t,2.6,1.49,23.4,.63),t.box([2.6,.71,.82],[0,7.09,18],"darkWood"),t.box([2.68,.045,.88],[0,7.475,18],"steel");for(const e of[-1.72,1.72]){t.box([.51,1.26,.54],[e,7.36,18.54],"rubber");for(const n of[7.04,7.57])t.cylinder([e,n,18.25],[e,n,18.22],.18,"navy",.18,10)}mn(t,0,6.72,18.65,{shirt:"white",heading:Math.PI});for(const e of[-.84,.84])t.box([.42,.012,.32],[e,7.51,17.98],"cyan");return lo(t,0,7.7,21.55,1.7),t.ball(.1,[0,8.19,21.6],"warm"),t.finish("illuminated dinner cruise")}function Ux(i,t,e,n,s="orange"){i.cylinder([t,e,n],[t,e+2.2,n],.029,"steel"),i.add(Wn(7,2,(r,o)=>[t+r*1.18,e+2.05-o*.56,n+Math.sin(r*7)*.1]),s)}function Nx(i){const t=new Ri;Nl(t,{length:30,width:5.5,height:.97,draft:.7,stern:.8});for(const e of[-1,1])t.box([.13,.33,23.2],[e*2.61,1.15,.7],"orange");_u(t,{length:22.5,width:5.11,y:3.4,z:.7,color:"white",posts:7,stripe:"orange"});for(const e of[-1,1])t.box([.055,.42,20],[e*2.46,2.95,.8],"glass"),Bs(t,e*2.58,1.25,-10.1,11.4,{height:.68,step:1.6}),t.add(new ln(8.1,.64),co("CHAO PHRAYA EXPRESS"),[e*2.625,1.58,.6],[0,e*Math.PI/2,0]),t.box([.045,.04,19.5],[e*2.35,3.38,.8],"warm");for(let e=0;e<10;e++){const n=-8.9+e*1.96;Qs(t,-1.41,1.36,n,1.76,"orange"),Qs(t,1.41,1.36,n,1.76,"orange"),e%2===0&&mn(t,e%4===0?-1.35:1.35,1.06,n,{seated:!0,shirt:e%3?"teal":"white"})}t.box([3.5,1.53,2.67],[0,1.94,-10.49],"white"),t.add(Xn([[-1.67,1.7,-11.9],[1.67,1.7,-11.9],[1.49,2.77,-11.57],[-1.49,2.77,-11.57]]),"glass"),t.box([3.85,.13,2.98],[0,2.84,-10.49],"orange");for(const e of[-.55,.55])t.cylinder([e,1.75,-11.91],[e,2.76,-11.57],.028,"white");Ux(t,0,1.26,-13.61,i%3===1?"gold":"orange");for(const e of[-1,1]){t.box([.8,.48,1.12],[e*1.02,.71,14.47],"rubber"),t.box([.16,.9,.2],[e*1.02,.13,14.65],"steel");for(let n=-8;n<12;n+=4)Ul(t,e*2.77,.76,n,.29,e);js(t,e*2.28,3.32,-9.1,e)}t.box([2.05,.1,1.9],[0,1.07,12.35],"woodLight"),mn(t,1.71,1.05,12.1,{shirt:"navy",lifeVest:!0});for(const e of[-1,1]){Zs(t,e*2.61,2.41,8.82,e,.32);for(let n=-7.5;n<=8;n+=3.7)t.box([.43,.21,.48],[e*1.96,3.13,n],"orange"),t.box([.45,.035,.5],[e*1.96,3.2,n],"rubber"),t.box([.51,.03,.52],[e*1.96,2.995,n],"steel");ao(t,e*1.96,1.13,-12.58,1.1),t.box([.6,.32,.39],[e*2,1.33,10.5],"rubber")}for(let e=-6;e<=6;e+=6)t.box([2.45,.075,.16],[0,3.42,e],"paintWhite"),t.box([2.25,.028,.115],[0,3.37,e],"warm");return lo(t,.92,1.62,12.66,1.1),Jr(t,-.49,1.11,-13,.37),t.ball(.08,[0,3.52,11.21],"warm"),t.finish("orange flag express ferry")}function Fx(){const i=new Ri;for(const t of[-1,1])Nl(i,{length:24,width:2.1,height:1.03,draft:.63,x:t*2.36,color:"paintWhite",stern:.44});i.box([6.8,.28,20.4],[0,1.18,0],"white"),i.box([6.36,.065,18.9],[0,1.36,0],"woodLight"),i.box([5.83,.38,17.4],[0,1.56,0],"navy"),i.box([6.39,.22,18.82],[0,3.69,0],"white"),i.box([6.04,.07,18.02],[0,3.85,0],"teal");for(const t of[-1,1]){for(let e=-7.18;e<=7.2;e+=2.05)i.box([.11,1.63,1.92],[t*2.89,2.6,e],"windowCool");for(let e=-8.2;e<=8.2;e+=2.05)i.box([.13,1.92,.092],[t*2.94,2.64,e],"white");i.box([.13,.045,18.49],[t*3.19,3.64,0],"cyan"),i.add(new ln(6.65,.58),co("RIVER ELECTRIC"),[t*3.03,1.79,0],[0,t*Math.PI/2,0]),Bs(i,t*3.27,1.38,-9.52,9.52,{height:.62,step:1.4}),js(i,t*3.04,3.6,-7.2,t);for(const e of[-7,-.8,6.4])i.cylinder([t*3.44,.55,e],[t*3.44,1.2,e],.145,"rubber")}for(const t of[-1,1]){const e=t*9;i.add(Xn([[-2.87,1.8,e+t*.28],[2.87,1.8,e+t*.28],[2.76,3.58,e-t*.22],[-2.76,3.58,e-t*.22]]),"glass");for(const n of[-.92,.92])i.cylinder([n,1.8,e+t*.28],[n,3.58,e-t*.22],.048,"white");i.box([3.55,.16,1.8],[0,1.19,t*10.2],"teal"),i.box([2.1,.12,.11],[0,1.77,t*9.29],"cyan")}for(let t=-7.7;t<=7.7;t+=2.52)for(const e of[-1.58,1.58]){i.box([2.73,.035,2.29],[e,3.907,t],"glass");for(let n=-1.21;n<1.3;n+=.48)i.box([.018,.012,2.25],[e+n,3.934,t],"steel");i.box([2.74,.012,.02],[e,3.934,t],"steel")}for(let t=-6.4;t<=6.4;t+=1.81)Qs(i,-1.58,1.72,t,1.58,"teal"),Qs(i,1.58,1.72,t,1.58,"teal");for(const t of[-1,1]){Zs(i,t*3.28,2.02,7.72,t,.31),ao(i,t*2.62,1.55,9.38,1.1),i.box([.45,.82,.51],[t*1.93,4.3,6.7],"paintWhite");for(let e=0;e<5;e++)i.box([.455,.033,.53],[t*1.93,4.06+e*.095,6.7],"navy")}return lo(i,.4,1.75,10.63,.85),i.cylinder([0,3.96,-5.5],[0,5.1,-5.5],.036,"steel"),i.ball(.085,[0,5.15,-5.5],"warm"),mn(i,-.81,1.4,-7.62,{seated:!0,shirt:"white"}),i.finish("electric river catamaran")}function Ox(i){const t=new Ri;xu(t,{length:6.5,width:1.55,rim:.4,draft:.27,fishing:!0,color:i%2?"darkWood":"wood"});for(const e of[-1.86,.3,2.08])t.box([1.07,.09,.32],[0,.36,e],"woodLight");mn(t,-.01,-.025,.32,{seated:!0,shirt:"teal",hat:!0,heading:-.29}),t.cylinder([.12,.7,-.02],[1.29,1.85,-2.29],.019,"darkWood",.009,6),t.curve([[1.29,1.85,-2.29],[1.68,1.78,-2.77],[1.91,1.39,-3.11]],.008,"darkWood",12,4),t.cylinder([1.91,1.39,-3.11],[1.95,-.025,-3.2],.0025,"white",.0025,3),t.cylinder([-.34,.12,-1.37],[-.34,.44,-1.37],.19,"teal",.23,9),t.cylinder([-.34,.444,-1.37],[-.34,.45,-1.37],.204,"navy",.204,9),t.box([.45,.33,.59],[.26,.28,1.41],"white"),t.box([.47,.065,.61],[.26,.48,1.41],"teal");for(let e=0;e<6;e++){const n=.29-e*.035,s=Array.from({length:18},(r,o)=>{const a=o/17*Math.PI*2;return[Math.cos(a)*n,.17+e*.023,-2.09+Math.sin(a)*n]});t.curve(s,.023,"woodLight",19,4)}t.cylinder([-.61,.53,-1.81],[-.64,.53,1.83],.033,"woodLight"),t.box([.22,.046,.74],[-.64,.53,1.89],"woodLight"),t.box([.39,.33,.4],[0,.5,2.43],"rubber"),t.cylinder([0,.33,2.58],[0,-.13,3.2],.032,"steel"),t.ball(.074,[0,.95,2.55],"warm",[1,1.5,1]),t.cylinder([0,.6,2.55],[0,.85,2.55],.018,"steel"),t.cylinder([0,.83,2.55],[0,.87,2.55],.12,"rubber",.12,10),t.add(new to(.13,.07,10),"steel",[0,1.1,2.55]);for(const e of[-1,1])t.cylinder([e*.1,.85,2.55],[e*.1,1.09,2.55],.007,"steel",.007,4);Ul(t,-.7,.2,.34,.18,-1),t.box([.27,.31,.23],[-.39,.36,1.42],"red"),t.box([.12,.065,.09],[-.39,.555,1.42],"rubber");for(let e=0;e<8;e++){const n=-2.54+e*.1;t.curve([[-.2,.2,n],[.09,.45,n+.1],[.37,.17,n]],.006,"white",6,3),t.curve([[-.23+e*.085,.19,-2.6],[-.18+e*.085,.43,-2.2],[-.2+e*.085,.18,-1.7]],.006,"white",6,3)}return t.finish("single-person wooden fishing boat")}const ph={longtail:Lx,cruise:Ix,ferry:Nx,electric:Fx,fishing:Ox};function Mu(i="longtail",t=0){const e=Object.hasOwn(ph,i)?i:"longtail",n=ph[e](t);n.userData.kind=e,n.userData.spec=mu[e];const s={longtail:[{position:[0,1.84,.15],color:16761729,intensity:19,distance:7.5}],cruise:[{position:[0,8.7,-.5],color:16762765,intensity:95,distance:31},{position:[0,8.6,15.8],color:16759685,intensity:65,distance:18}],ferry:[{position:[0,3.2,0],color:16766368,intensity:42,distance:16}],electric:[{position:[0,3.45,0],color:12774645,intensity:37,distance:13}],fishing:[{position:[0,.94,2.55],color:16760697,intensity:5,distance:4.5}]};return n.userData.lightSources=s[e],n}class zx{constructor({pause:t,horn:e,recover:n}){this.keys=new Set,this.touch={steer:0,gas:!1,brake:!1,boost:!1,drift:!1},this.enabled=!1,this.previousPad={},window.addEventListener("keydown",s=>{["INPUT","SELECT","BUTTON"].includes(s.target.tagName)&&s.code==="Space"||(["ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Space"].includes(s.code)&&s.preventDefault(),this.keys.add(s.code),s.repeat||(s.code==="Escape"&&t(),s.code==="KeyH"&&this.enabled&&e(),s.code==="KeyR"&&this.enabled&&n()))}),window.addEventListener("keyup",s=>this.keys.delete(s.code)),window.addEventListener("blur",()=>{this.clear(),t(!0)}),document.addEventListener("visibilitychange",()=>{document.hidden&&(this.clear(),t(!0))}),this.pause=t,this.horn=e,this.recover=n}clear(){this.keys.clear(),this.touch={steer:0,gas:!1,brake:!1,boost:!1,drift:!1},document.querySelectorAll(".pressed").forEach(t=>t.classList.remove("pressed")),document.querySelector("#steer-pad")?.style.setProperty("--thumb","0px")}bind(){for(const r of document.querySelectorAll("[data-control]")){const o=r.dataset.control;r.addEventListener("pointerdown",l=>{l.preventDefault(),r.setPointerCapture(l.pointerId),this.touch[o]=!0,r.classList.add("pressed")});const a=()=>{this.touch[o]=!1,r.classList.remove("pressed")};r.addEventListener("pointerup",a),r.addEventListener("pointercancel",a),r.addEventListener("lostpointercapture",a)}const t=document.querySelector("#steer-pad");let e=null;const n=r=>{const o=t.getBoundingClientRect();this.touch.steer=Math.max(-1,Math.min(1,(r.clientX-o.left-o.width/2)/(o.width*.36))),t.style.setProperty("--thumb",`${this.touch.steer*30}px`)};t.addEventListener("pointerdown",r=>{e=r.pointerId,t.setPointerCapture(e),n(r)}),t.addEventListener("pointermove",r=>{e===r.pointerId&&n(r)});const s=()=>{e=null,this.touch.steer=0,t.style.setProperty("--thumb","0px")};t.addEventListener("pointerup",s),t.addEventListener("pointercancel",s),t.addEventListener("lostpointercapture",s)}read(){const t=this.keys,e=this.touch,n=navigator.getGamepads?.()?.find(c=>c?.connected);let s=(t.has("KeyD")||t.has("ArrowRight")?1:0)-(t.has("KeyA")||t.has("ArrowLeft")?1:0);e.steer&&(s=e.steer);let r=t.has("KeyW")||t.has("ArrowUp")||e.gas||e.boost||e.drift,o=t.has("KeyS")||t.has("ArrowDown")||e.brake,a=t.has("ShiftLeft")||t.has("ShiftRight")||e.boost,l=t.has("Space")||e.drift;if(n){Math.abs(n.axes[0])>.12&&(s=n.axes[0]),r=r||n.buttons[7]?.value>.1,o=o||n.buttons[6]?.value>.1,a=a||n.buttons[0]?.pressed,l=l||n.buttons[1]?.pressed;for(const[c,h]of[[9,this.pause],[3,this.horn],[2,this.recover]])n.buttons[c]?.pressed&&!this.previousPad[c]&&h();this.previousPad=Object.fromEntries(n.buttons.map((c,h)=>[h,c.pressed]))}return this.enabled?{steer:s,gas:r,brake:o,boost:a,drift:l}:{}}}class Bx{constructor(t,e){this.count=e?650:1400,this.index=0,this.life=new Float32Array(this.count),this.velocity=new Float32Array(this.count*3),this.positions=new Float32Array(this.count*3),this.sizes=new Float32Array(this.count),this.alphas=new Float32Array(this.count),this.baseSize=new Float32Array(this.count);const n=new ue;n.setAttribute("position",new Me(this.positions,3)),n.setAttribute("size",new Me(this.sizes,1)),n.setAttribute("alpha",new Me(this.alphas,1)),this.geometry=n;const s=new Ee({transparent:!0,depthWrite:!1,blending:Mi,uniforms:{color:{value:new kt("#9db9b7")}},vertexShader:"attribute float size;attribute float alpha;varying float a;void main(){a=alpha;vec4 p=modelViewMatrix*vec4(position,1.);gl_PointSize=clamp(size*420./max(1.,-p.z),1.,24.);gl_Position=projectionMatrix*p;}",fragmentShader:"uniform vec3 color;varying float a;void main(){float d=length(gl_PointCoord-.5)*2.;if(d>1.)discard;float foam=(1.-smoothstep(.15,1.,d));gl_FragColor=vec4(color,a*foam);}",toneMapped:!1});this.mesh=new Kh(n,s),this.mesh.frustumCulled=!1,t.add(this.mesh)}emit(t,e,n,s,r=1){const o=this.index++%this.count,a=o*3,l=Math.random()>.5?1:-1,c=Math.cos(n),h=-Math.sin(n);this.positions[a]=t+c*l*(1+Math.random()),this.positions[a+1]=.18+Math.random()*.25,this.positions[a+2]=e+h*l*(1+Math.random()),this.velocity[a]=c*l*(1.5+Math.random()*2)+Math.sin(n)*s*.05,this.velocity[a+1]=Math.random()*(s>25?2:.3),this.velocity[a+2]=h*l*(1.5+Math.random()*2)+Math.cos(n)*s*.05,this.life[o]=1.8+Math.random(),this.baseSize[o]=r*.58}update(t){for(let e=0;e<this.count;e++){if(this.life[e]<=0){this.alphas[e]=0;continue}this.life[e]-=t;const n=e*3;this.positions[n]+=this.velocity[n]*t,this.positions[n+2]+=this.velocity[n+2]*t,this.positions[n+1]=Math.max(.14,this.positions[n+1]+this.velocity[n+1]*t),this.velocity[n+1]-=t*3,this.sizes[e]=this.baseSize[e]*(3.3-this.life[e])*.8,this.alphas[e]=Math.min(.18,this.life[e]*.1)}for(const e of Object.values(this.geometry.attributes))e.needsUpdate=!0}clear(){this.life.fill(0),this.alphas.fill(0)}}class kx{constructor(t,e=48){this.trails=new Map,this.max=e*40*18,this.positions=new Float32Array(this.max*3),this.uv=new Float32Array(this.max*2),this.alpha=new Float32Array(this.max);const n=this.geometry=new ue;n.setAttribute("position",new Me(this.positions,3)),n.setAttribute("uv",new Me(this.uv,2)),n.setAttribute("aFade",new Me(this.alpha,1)),n.setDrawRange(0,0);const s=this.material=new Ee({transparent:!0,depthWrite:!1,side:We,uniforms:{time:{value:0}},vertexShader:"attribute float aFade;varying float fade;varying vec2 vUv;varying vec2 riverPoint;void main(){fade=aFade;vUv=uv;riverPoint=position.xz;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:`varying float fade;varying vec2 vUv;varying vec2 riverPoint;uniform float time;
 float hash(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}
 float noise(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);return mix(mix(hash(i),hash(i+vec2(1,0)),f.x),mix(hash(i+vec2(0,1)),hash(i+vec2(1,1)),f.x),f.y);}
 void main(){float edge=pow(sin(vUv.x*3.14159),.75);vec2 p=riverPoint*2.4+vec2(time*.12,-time*.08);float n=noise(p)*.65+noise(p*3.1)*.35;
 float foam=smoothstep(.24,.70,n)*(.6+.4*noise(p*.4));gl_FragColor=vec4(vec3(.33,.41,.40),foam*edge*fade);
 #include <tonemapping_fragment>
 #include <colorspace_fragment>
 }`});this.mesh=new ve(n,s),this.mesh.frustumCulled=!1,t.add(this.mesh),this.clock=0}clear(){this.trails.clear(),this.geometry.setDrawRange(0,0)}update(t,e){this.material.uniforms.time.value+=t,this.clock+=t;const n=this.clock>.07;n&&(this.clock=0);let s=0;const r=(o,a,l,c,h)=>{if(s>=this.max)return;const u=s*3;this.positions[u]=o,this.positions[u+1]=.15+Math.sin(o*.47+a*.28+this.material.uniforms.time.value*1.1)*.095+Math.sin(a*.73-o*.22-this.material.uniforms.time.value*1.42)*.038,this.positions[u+2]=a,this.uv[s*2]=l,this.uv[s*2+1]=c,this.alpha[s]=h,s++};for(const o of this.trails.values()){for(const a of o)a.age+=t;for(;o.length&&o.at(-1).age>2.4;)o.pop()}for(const o of e){let a=this.trails.get(o);a||(a=[],this.trails.set(o,a));const l=Math.hypot(o.vx,o.vz);n&&l>2&&(a.unshift({x:o.x+Math.sin(o.heading)*(o.length||12)*.45,z:o.z+Math.cos(o.heading)*(o.length||12)*.45,heading:o.heading,age:0,width:o.width||2.35,speed:l}),a.length>39&&a.pop());for(let c=1;c<a.length;c++){const h=a[c-1],u=a[c];for(const f of[-1,0,1]){const d=p=>{const S=p.width*.35+p.age*(1.8+p.speed*.035),_=.35+p.age*(.8+p.width*.12),v=Math.cos(p.heading)*(f||1),T=-Math.sin(p.heading)*(f||1);if(f===0){const A=p.width*.18+p.age*.38;return[{x:p.x-v*A,z:p.z-T*A},{x:p.x+v*A,z:p.z+T*A}]}return[{x:p.x+v*S,z:p.z+T*S},{x:p.x+v*(S+_),z:p.z+T*(S+_)}]},g=d(h),x=d(u),m=p=>Math.max(0,1-p.age/2.4)*Math.min(1,p.age*12)*(f===0?.6:.74);for(const[p,S,_,v]of[[g[0],0,c-1,m(h)],[g[1],1,c-1,m(h)],[x[0],0,c,m(u)],[g[1],1,c-1,m(h)],[x[1],1,c,m(u)],[x[0],0,c,m(u)]])r(p.x,p.z,S,_*.07,v)}}}this.geometry.setDrawRange(0,s);for(const o of Object.values(this.geometry.attributes))o.needsUpdate=!0}}class Hx{constructor(){this.generation=0,this.muted=!1,this.musicEnabled=!0,this.active=!1,this.music=new Audio("/longtail/audio/exit-the-premises.mp3"),this.music.loop=!0,this.music.preload="none",this.music.volume=.32,this.lastHorn=-10}async start(){this.active=!0;const t=++this.generation;try{if(!this.ctx){const e=window.AudioContext||window.webkitAudioContext;this.ctx=new e;const n=this.ctx;this.master=n.createGain(),this.master.gain.value=.5,this.master.connect(n.destination),this.engine=n.createGain(),this.engine.gain.value=0;const s=n.createBiquadFilter();s.type="lowpass",s.frequency.value=1e3,this.engine.connect(s).connect(this.master),this.oscs=[1,2,3].map((h,u)=>{const f=n.createOscillator(),d=n.createGain();return f.type=u===0?"sawtooth":"triangle",f.frequency.value=32*h,d.gain.value=[.12,.045,.025][u],f.connect(d).connect(this.engine),f.start(),f});const r=n.createBuffer(1,n.sampleRate*2,n.sampleRate),o=r.getChannelData(0);let a=0;for(let h=0;h<o.length;h++)a=(a+Math.random()*.12-.06)*.97,o[h]=a;this.noiseBuffer=r;const l=n.createBufferSource();l.buffer=r,l.loop=!0,this.waterGain=n.createGain(),this.waterGain.gain.value=0;const c=n.createBiquadFilter();c.type="highpass",c.frequency.value=280,l.connect(c).connect(this.waterGain).connect(this.master),l.start()}await this.ctx.resume(),t===this.generation&&this.active&&this.sync()}catch{this.active=!1}}sync(){this.master&&this.master.gain.setTargetAtTime(this.muted||!this.active?0:.5,this.ctx.currentTime,.06),this.active&&!this.muted&&this.musicEnabled?this.music.play().catch(()=>{}):this.music.pause()}pause(){this.generation++,this.active=!1,this.sync()}mute(){return this.muted=!this.muted,this.sync(),this.muted}musicToggle(){return this.musicEnabled=!this.musicEnabled,this.sync(),this.musicEnabled}update(t,e){if(!this.ctx||!this.active)return;const n=this.ctx.currentTime,s=32+Math.abs(t)*2.6+(e?16:0);this.oscs.forEach((r,o)=>r.frequency.setTargetAtTime(s*(o+1),n,.09)),this.engine.gain.setTargetAtTime(.3+Math.min(Math.abs(t)/45,1)*.65,n,.08),this.waterGain.gain.setTargetAtTime(.2+Math.abs(t)*.035,n,.1)}tone(t,e=.15,n=.14,s="sine",r=0,o=t){if(!this.ctx||this.muted||!this.active)return;const a=this.ctx,l=a.currentTime+r,c=a.createOscillator(),h=a.createGain();c.type=s,c.frequency.setValueAtTime(t,l),c.frequency.exponentialRampToValueAtTime(Math.max(20,o),l+e),h.gain.setValueAtTime(0,l),h.gain.linearRampToValueAtTime(n,l+.014),h.gain.exponentialRampToValueAtTime(1e-4,l+e),c.connect(h).connect(this.master),c.start(l),c.stop(l+e+.04),c.onended=()=>{c.disconnect(),h.disconnect()}}horn(){!this.ctx||this.ctx.currentTime-this.lastHorn<.28||(this.lastHorn=this.ctx.currentTime,this.tone(285,.27,.2,"sawtooth",0,255),this.tone(355,.34,.11,"triangle",.035,330),this.tone(390,.17,.08,"triangle",.22,310))}event(t){if(t==="pickup")this.tone(660,.12,.15),this.tone(880,.22,.15,"sine",.12);else if(t==="delivered")[523,659,784,1046].forEach((e,n)=>this.tone(e,.3,.16,"triangle",n*.09));else if(t==="near"||t==="slide")this.tone(900,.14,.08,"triangle",0,1300);else if(t==="crash"){if(!this.ctx||!this.active||this.muted)return;const e=this.ctx.createBufferSource(),n=this.ctx.createGain();e.buffer=this.noiseBuffer,n.gain.value=1.5,n.gain.exponentialRampToValueAtTime(.001,this.ctx.currentTime+.35),e.connect(n).connect(this.master),e.start(),e.stop(this.ctx.currentTime+.4),e.onended=()=>{e.disconnect(),n.disconnect()},this.tone(75,.22,.15,"triangle",0,35)}else this.tone(240,.35,.12,"triangle",0,140)}}const dt=i=>document.querySelector(i),Cs=matchMedia("(pointer:coarse)").matches||innerWidth<700,Gx='<svg viewBox="0 0 40 40" fill="none" aria-hidden="true"><path d="M4 23h32l-7 9H13L4 23Z" stroke="currentColor" stroke-width="1.7"/><path d="m12 20 4-10h14l5 10M20 10v12M6 37q5-4 10 0t10 0t10 0" stroke="currentColor" stroke-width="1.7"/></svg>',mh='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><path d="m10 5-5 4H2v6h3l5 4V5ZM14 8q5 4 0 8M17 4q9 8 0 16"/></svg>',Vx='<svg viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M8 5v14M16 5v14"/></svg>',gh=`<div class="brand">${Gx}<div>BANGKOK<strong>LONGTAIL</strong></div></div>`,vh="<span><b>W A S D</b> Pilot</span><span><b>SHIFT</b> Boost</span><span><b>SPACE</b> Slide</span><span><b>H</b> Horn</span><span><b>R</b> Recover</span>";dt("#app").innerHTML=`
<canvas id="scene" aria-label="Bangkok long-tail boat game"></canvas><div id="vignette"></div><div id="boost-lines"></div><div id="flash"></div>
<section id="menu" class="screen"><header>${gh}</header><button class="round sound-menu sound-btn" aria-label="Mute sound">${mh}</button><div class="menu-body"><div class="menu-content"><div class="eyebrow">THE CHAO PHRAYA IS YOURS TONIGHT</div><h1>LONGTAIL<br><em>AFTER DARK.</em></h1><p class="lede">Golden temples. Big boats. Bad decisions.<br>Make a living. Make some waves.</p><div class="mode-tabs" role="group" aria-label="Game mode"><button id="mode-shift" class="active" aria-pressed="true">NIGHT SHIFT · 3 MIN</button><button id="mode-free" aria-pressed="false">FREE CRUISE</button></div><button id="start" class="primary" disabled>PREPARING THE RIVER <span>↗</span></button><div id="loading-note" role="status">Lighting up Bangkok…</div><div class="record-preview"><div><div class="micro">YOUR BEST NIGHT</div><div class="value" id="menu-best">฿ 0</div></div><div class="divider"></div><p id="menu-record-note">Pick up passengers. Dodge cruises.<br>Beat your best.</p></div></div></div><div class="location-card"><div class="micro">THAILAND · 20:47</div><div class="place">Wat Arun → Taksin Bridge</div><div class="coords">13°44′N &nbsp; 100°29′E</div></div><footer class="menu-foot"><div class="keys">${vh}</div><a class="credits" href="./credits.html" target="_blank" rel="noopener">River, music & credits ↗</a></footer></section>
<div id="hud" hidden><div class="hud-brand">${gh}</div><div class="timer"><div class="micro">NIGHT SHIFT</div><div class="timer-value">03:00</div></div><div class="hud-controls"><button class="round sound-btn" aria-label="Mute sound">${mh}</button><button id="horn" class="round" aria-label="Sound boat horn">♩</button><button id="recover" class="round" aria-label="Recover boat">↻</button><button id="pause" class="round" aria-label="Pause game">${Vx}</button></div><div class="fare-panel"><div class="eyebrow" id="fare-label">FIND YOUR NEXT FARE</div><h2 id="fare-title">Choose any pier</h2><p id="fare-hint">Stop in a golden ring to pick up passengers.</p><div class="fare-row"><span id="fare-detail">Yellow dots on your map</span><strong id="fare-time"></strong></div><div class="fare-progress" hidden><i></i></div></div><div class="score-panel"><div class="micro">TONIGHT’S TAKINGS</div><div class="total" id="earnings">฿ 0</div><div class="fares" id="deliveries">0 FARES</div><div class="best">BEST <b id="hud-best">฿ 0</b></div></div><div id="navigation" hidden><svg viewBox="0 0 48 64" aria-label="Direction to destination"><path d="M24 2 46 30H32v31H16V30H2Z"/></svg><div id="nav-distance"></div></div><div id="stunt" hidden><strong></strong><small></small></div><div id="dock-status" hidden><span>HOLD STEADY</span><progress value="0" max=".65"></progress></div><div id="minimap-shell"><canvas id="minimap" width="352" height="348" aria-label="River map with passenger piers"></canvas><div id="map-caption"><span>● PASSENGERS</span><b>N ↑</b></div></div><div id="speed"><strong>0</strong><span class="unit">KM/H</span><div class="gear">LONGTAIL EXPRESS</div></div><div id="toast" role="status"></div><div id="hud-keys" class="keys">${vh}</div><div class="osm"><a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener">© OpenStreetMap contributors</a> · <a href="./credits.html" target="_blank" rel="noopener">Credits</a></div><div class="touch"><div class="touch-controls"><div id="steer-pad" aria-label="Slide left or right to steer"><span>◁</span><i></i><span>▷</span></div><div class="touch-actions"><button data-control="drift">SLIDE</button><button data-control="boost">BOOST</button><button data-control="brake">BRAKE / R</button><button class="gas" data-control="gas">THROTTLE</button></div></div></div></div>
<div id="countdown" class="countdown" hidden></div>
<section id="pause-screen" class="screen modal" hidden><div class="dialog"><div class="eyebrow">TAKE A BREATHER</div><h2>River can wait.</h2><div class="setting-row"><span>Night drive soundtrack</span><button id="music-toggle" class="toggle" aria-pressed="true">ON</button></div><p class="modal-keys">W / ↑ accelerate · S / ↓ brake, then reverse<br>A D / ← → steer · Shift boost · Space slide<br>H horn · R recover · Esc pause<br>Gamepad: RT / LT · left stick · A boost · B slide</p><button id="resume" class="primary">BACK TO THE RIVER <span>↗</span></button><button id="quit" class="secondary">End this shift</button><a class="credits" href="./credits.html" target="_blank" rel="noopener">Music & data credits ↗</a></div></section>
<section id="results" class="screen modal" hidden><div class="dialog"><div class="eyebrow" id="result-label">THE SUN CAN WAIT</div><h2 id="result-title">What a night.</h2><div class="result-total" id="result-score">฿ 0</div><div class="result-meta"><div><span class="micro">FARES DELIVERED</span><strong id="result-fares">0</strong></div><div><span class="micro">PERSONAL BEST</span><strong id="result-best">฿ 0</strong></div></div><div class="micro">YOUR BEST NIGHTS</div><ol id="record-list"></ol><button id="again" class="primary">ONE MORE NIGHT <span>↗</span></button><button id="back-menu" class="secondary">Back to the riverfront</button></div></section>`;let Zr;try{Zr=localStorage}catch{Zr={getItem:()=>null,setItem:()=>{}}}let yi=[];try{yi=Za(JSON.parse(Zr.getItem(Ja)||"[]"))}catch{}const fs=()=>yi[0]?.score||0,Hn=i=>`฿ ${Math.round(i).toLocaleString()}`,xh=i=>`${Math.floor(i/60).toString().padStart(2,"0")}:${Math.floor(i%60).toString().padStart(2,"0")}`;function Fl(){dt("#menu-best").textContent=Hn(fs()),dt("#hud-best").textContent=Hn(fs()),dt("#menu-record-note").textContent=yi.length?`${yi[0].deliveries} fares on your best night. Can you beat it?`:"Pick up passengers. Dodge cruises. Beat your best."}Fl();let _e="menu",dn=!1,ho=!1,Xt,vt,Ae,Un,ks,Ei=[],Ge,jn,tn,Ve,gi,Ci,uo,$i=0,Le=0,Ps=0,jr=0,Vr=0,sa=0,Ls=0,Su=0,yu=0,Ur=0,tl=!1,di=0,xi={x:0,z:0,heading:0};const el=new L,nl=new L,Oe=new Hx,on=new zx({pause:i=>fo(i),horn:()=>Oe.horn(),recover:()=>wu()});on.bind();function _i(i,t=4){dt("#toast").textContent=i,Su=Le+t,dt("#toast").style.opacity="1"}function Nr(i,t){dt("#stunt strong").textContent=i,dt("#stunt small").textContent=t,dt("#stunt").hidden=!1,yu=Le+1.4}function Eu(i){dn=i,dt("#mode-free").classList.toggle("active",dn),dt("#mode-shift").classList.toggle("active",!dn),dt("#mode-free").setAttribute("aria-pressed",String(dn)),dt("#mode-shift").setAttribute("aria-pressed",String(!dn))}dt("#mode-free").onclick=()=>Eu(!0);dt("#mode-shift").onclick=()=>Eu(!1);for(const i of document.querySelectorAll(".sound-btn"))i.onclick=()=>{const t=Oe.mute();document.querySelectorAll(".sound-btn").forEach(e=>{e.setAttribute("aria-label",t?"Unmute sound":"Mute sound"),e.style.opacity=t?".45":"1"})};dt("#music-toggle").onclick=()=>{const i=Oe.musicToggle();dt("#music-toggle").textContent=i?"ON":"OFF",dt("#music-toggle").setAttribute("aria-pressed",String(i))};dt("#pause").onclick=()=>fo();dt("#resume").onclick=()=>fo();dt("#recover").onclick=()=>wu();dt("#horn").onclick=()=>Oe.horn();dt("#quit").onclick=()=>Tu(!1);dt("#again").onclick=()=>bu();dt("#back-menu").onclick=()=>Wx();dt("#start").onclick=()=>bu();function bu(){if(!ho)return;tl=!1,Xt.reset(dn);const i=Un[dn?8:0];vt.reset(i.x,i.z,i.heading),xi={x:vt.x,z:vt.z,heading:vt.heading},di=vt.heading,nl.set(vt.x+Math.sin(vt.heading)*23,12,vt.z+Math.cos(vt.heading)*23),el.set(vt.x-Math.sin(vt.heading)*30,3,vt.z-Math.cos(vt.heading)*30),Ci.clear(),uo.clear(),_e="countdown",$i=2.5,on.clear(),on.enabled=!1,Vr=0,Ps=0,Ls=0;for(const t of["#menu","#results","#pause-screen"])dt(t).hidden=!0;dt("#hud").hidden=!1,dt("#countdown").hidden=!1,dt("#stunt").hidden=!0,dt("#navigation").hidden=!0,dt("#toast").style.opacity="0",Oe.start(),Au()}function Wx(){_e="menu",on.enabled=!1,on.clear(),Oe.pause(),dt("#menu").hidden=!1;for(const i of["#hud","#results","#pause-screen","#countdown"])dt(i).hidden=!0;Fl()}function fo(i=!1){ho&&(_e==="playing"||_e==="countdown"?(_h=_e,_e="paused",on.enabled=!1,on.clear(),Oe.pause(),dt("#pause-screen").hidden=!1):_e==="paused"&&!i&&(_e=_h,on.enabled=_e==="playing",dt("#pause-screen").hidden=!0,Oe.start(),jr=performance.now()))}let _h="playing";function wu(){if(_e!=="playing")return;const i=Ae.nearest(vt.x,vt.z),t=Ae.sample(rn(i.distance,40,Ae.length-40));let e=vt.heading;const n=i.heading;Math.abs(Kr(e,n))<Math.PI/2?e=n:e=n+Math.PI,vt.reset(t.x,t.z,e),xi={x:vt.x,z:vt.z,heading:vt.heading},Xt.crash(),Xt.remaining=Math.max(0,Xt.remaining-3),_i("Back in the channel · −3 seconds"),Ci.clear(),uo.clear()}function Tu(i=!0){if(tl)return;tl=!0,_e="results",on.enabled=!1,on.clear(),Oe.event("delivered"),Oe.pause(),Xt.finished=!0,Xt.fare=null;const t=fs();i&&!Xt.free&&(yi=jv(Zr,Xt.earnings,Xt.deliveries)),Fl(),dt("#result-label").textContent=Xt.free?"FREE CRUISE · UNRANKED":i?Xt.earnings>t?"A NEW PERSONAL BEST":"THE SUN CAN WAIT":"SHIFT ENDED · UNRANKED",dt("#result-title").textContent=Xt.earnings>t&&i&&!Xt.free?"River royalty.":"What a night.",dt("#result-score").textContent=Hn(Xt.earnings),dt("#result-fares").textContent=String(Xt.deliveries),dt("#result-best").textContent=Hn(fs());const e=dt("#record-list");e.replaceChildren();for(const[n,s]of yi.entries()){const r=document.createElement("li"),o=document.createElement("b");r.textContent=`${n+1}. ${s.deliveries} fares`,o.textContent=Hn(s.score),r.append(o),e.append(r)}if(!yi.length){const n=document.createElement("li");n.textContent="Finish a night shift to set your first score.",e.append(n)}dt("#results").hidden=!1,dt("#pause-screen").hidden=!0,dt("#countdown").hidden=!0,dt("#navigation").hidden=!0}function Au(){if(!Xt)return;dt(".timer-value").textContent=Xt.free?"∞":xh(Xt.remaining),dt(".timer .micro").textContent=Xt.free?"FREE CRUISE":"NIGHT SHIFT",dt(".timer").classList.toggle("low",!Xt.free&&Xt.remaining<25),dt("#earnings").textContent=Hn(Xt.earnings),dt("#deliveries").textContent=`${Xt.deliveries} FARE${Xt.deliveries===1?"":"S"}`,dt("#hud-best").textContent=Hn(Xt.free?fs():Math.max(fs(),Xt.earnings));const i=Xt.fare;if(dt("#navigation").hidden=!i,dt(".fare-progress").hidden=!i,dt("#map-caption span").textContent=i?"● DROP OFF":"● PASSENGERS",i){const t=Math.hypot(i.to.x-vt.x,i.to.z-vt.z);dt("#fare-label").textContent="DROP OFF",dt("#fare-title").textContent=i.to.name,dt("#fare-hint").textContent=t<60?"Easy does it. Stop in the green ring.":i.to.thai,dt("#fare-detail").textContent=`${Math.round(t)} m · ${Hn(i.base+Xt.tips)}`,dt("#fare-time").textContent=xh(i.time),dt(".fare-progress i").style.width=`${i.time/i.total*100}%`,Vr=Jv(vt,i.to,Vr),dt("#navigation svg").style.transform=`rotate(${Vr}rad)`,dt("#nav-distance").textContent=`${Math.round(t)} m`}else dt("#fare-label").textContent="FIND YOUR NEXT FARE",dt("#fare-title").textContent="Choose any pier",dt("#fare-hint").textContent="Stop in a golden ring to pick up passengers.",dt("#fare-detail").textContent="Yellow dots on your map",dt("#fare-time").textContent="";dt("#speed strong").textContent=String(Math.round(Math.hypot(vt.vx,vt.vz)*3.6)),dt("#speed").classList.toggle("boost",vt.boosting),dt("#speed .gear").textContent=vt.boosting?"FULL SEND":vt.drifting?"STERN SLIDE":vt.speed<-.3?"REVERSE":"LONGTAIL EXPRESS",document.body.classList.toggle("is-boosting",vt.boosting&&_e==="playing"),dt("#dock-status").hidden=Xt.dockHold===0,dt("#dock-status progress").value=Xt.dockHold,dt("#dock-status span").textContent=Xt.fare?"PASSENGERS DISEMBARKING":"PASSENGERS BOARDING",Xx()}function Xx(){const i=dt("#minimap"),t=i.getContext("2d"),e=i.width,n=i.height,s=Ae.points,r=Math.min(...s.map(x=>x.x))-200,o=Math.max(...s.map(x=>x.x))+200,a=Math.min(...s.map(x=>x.z))-100,l=Math.max(...s.map(x=>x.z))+100,c=Math.min((e-38)/(o-r),(n-22)/(l-a)),h=(o+r)/2,u=(l+a)/2,f=x=>[e/2+(x.x-h)*c,n/2+(x.z-u)*c];t.clearRect(0,0,e,n),t.strokeStyle="#355a68",t.lineCap="round",t.lineJoin="round",t.lineWidth=13,t.beginPath(),s.forEach((x,m)=>{const[p,S]=f(x);m?t.lineTo(p,S):t.moveTo(p,S)}),t.stroke(),t.strokeStyle="#102f3e",t.lineWidth=8,t.stroke();for(const x of Un){if(Xt.fare&&Xt.fare.to.id!==x.id||!Xt.fare&&(Xt.cooldowns.get(x.id)||0)>Xt.clock)continue;const[m,p]=f(x);t.fillStyle=Xt.fare?"#9df3cf":"#ffd18b",t.beginPath(),t.arc(m,p,Xt.fare?5:3,0,Math.PI*2),t.fill()}const[d,g]=f(vt);t.save(),t.translate(d,g),t.rotate(-vt.heading),t.fillStyle="#fff6dc",t.beginPath(),t.moveTo(0,-7),t.lineTo(5,6),t.lineTo(0,3),t.lineTo(-5,6),t.closePath(),t.fill(),t.restore()}function qx(){const i=["cruise","ferry","longtail","electric","fishing","ferry","fishing","cruise"],t=Cs?26:42;for(let e=0;e<t;e++){const n=i[e%i.length],s=mu[n],r=Mu(n,e),o=e%2?1:-1,a=60+e/t*(Ae.length-120),l=(o===1?-1:1)*(n==="fishing"?65:27+e%3*14);tn.add(r),Ei.push({kind:n,mesh:r,...s,distance:a,direction:o,lane:l,speed:s.maxSpeed*(.8+e%4*.12),slow:0,nearCooldown:0,wakeClock:0,x:0,z:0,heading:0,vx:0,vz:0})}}function Yx(i){for(const t of Ei){t.slow=Math.max(0,t.slow-i*.6);let e=t.speed/(1+t.slow);for(const o of Ei){if(o===t||o.direction!==t.direction||Math.abs(o.lane-t.lane)>(o.width+t.width)/2+4)continue;const a=(o.distance-t.distance)*t.direction-(o.length+t.length)/2;a>0&&a<60&&(e=Math.min(e,Math.max(0,(o.actualSpeed??o.speed)+(a-12)*.28)))}t.actualSpeed=e,t.distance+=e*i*t.direction,t.distance>Ae.length+650&&(t.distance=-650),t.distance<-650&&(t.distance=Ae.length+650);const n=Ae.sample(t.distance),s=Ae.sample(t.distance,rn(t.lane,-n.width*.33,n.width*.33)),r=t.distance<0?t.distance:t.distance>Ae.length?t.distance-Ae.length:0;s.x-=Math.sin(s.heading)*r,s.z-=Math.cos(s.heading)*r,t.x=s.x,t.z=s.z,t.heading=s.heading+(t.direction===1?0:Math.PI),t.vx=-Math.sin(t.heading)*e,t.vz=-Math.cos(t.heading)*e,t.nearCooldown=Math.max(0,t.nearCooldown-i),t.mesh.position.set(t.x,Math.sin(Le*1.4+t.distance)*.08,t.z),t.mesh.rotation.set(Math.sin(Le+t.distance)*.004,t.heading,Math.sin(Le*.7+t.distance)*.007),t.wakeClock+=i,t.wakeClock>.32&&Math.hypot(t.x-vt.x,t.z-vt.z)<550&&(t.wakeClock=0,Ci.emit(t.x+Math.sin(t.heading)*t.length/2,t.z+Math.cos(t.heading)*t.length/2,t.heading,t.speed,t.width*.12))}}function Kx(i,t){xi={x:vt.x,z:vt.z,heading:vt.heading},vt.update(i,t);let e=Ae.constrain(vt,6);for(const s of Ei){if(Math.hypot(s.x-vt.x,s.z-vt.z)>s.length+18)continue;const r=nh(vt,s);if(e=Math.max(e,r),r>0)s.nearCooldown=3;else if(Math.abs(vt.speed)>12&&s.nearCooldown===0){const o=uu({...vt,length:12,width:2.5},s);if(o.gap>1.3&&o.gap<6){const a=Xt.stunt("near");s.nearCooldown=8,a&&(Oe.event("near"),Nr("CLOSE CALL",`+฿ ${a} TIP · ${Xt.combo}× COMBO`))}}}for(const s of ks.bridgeColliders)Math.hypot(s.x-vt.x,s.z-vt.z)<28&&(e=Math.max(e,nh(vt,s)));if(Ur=Math.max(0,Ur-i),e>4&&Ur===0){Xt.crash(),Oe.event("crash"),dt("#flash").style.opacity=String(Math.min(.23,e*.012)),setTimeout(()=>dt("#flash").style.opacity="0",110),Ur=1;const s=Ae.nearest(vt.x,vt.z).distance;_i(s<2||s>Ae.length-2?"End of this reach. Turn back along the river.":e>15?"Big boat. Bigger right of way.":"Watch the paintwork!",3)}if(vt.drifting&&Math.abs(vt.slip)>2){if(Ls+=i,Ls>.85){Ls=0;const s=Xt.stunt("slide");s&&(Nr("RIVER SLIDE",`+฿ ${s} TIP · ${Xt.combo}× COMBO`),Oe.event("slide"))}}else Ls=0;const n=Xt.update(i,vt);n&&(Oe.event(n.type),n.type==="pickup"&&(_i(`Next stop: ${n.to.name}. Let’s make waves!`,5),Nr("ALL ABOARD",n.to.name.toUpperCase())),n.type==="delivered"&&(Nr("NICE LANDING",`${Hn(n.paid)} BANKED · +12 SECONDS`),_i("Fare delivered. Choose any yellow pier for your next passengers.",6)),n.type==="late"&&_i("Missed the boat! Find your next passengers.",5),n.type==="ended"&&Tu()),Math.abs(vt.speed)>2&&(Ci.emit(vt.x+Math.sin(vt.heading)*6,vt.z+Math.cos(vt.heading)*6,vt.heading,Math.abs(vt.speed),vt.boosting?1:.4),vt.drifting&&Ci.emit(vt.x,vt.z,vt.heading,Math.abs(vt.speed),.8))}function Ru(i){requestAnimationFrame(Ru);const t=Math.min((i-jr)/1e3||0,.05);if(jr=i,!ho)return;const e=on.read();if(_e==="paused"||_e==="results"){gi.render();return}if(Le+=t,_e==="countdown"&&($i-=t,dt("#countdown").textContent=$i>1.5?"3":$i>.7?"2":$i>.1?"1":"GO!",$i<=0&&(_e="playing",on.enabled=!0,dt("#countdown").hidden=!0,_i("Stop at any golden pier. Shift for boost. Space to swing the stern.",6))),Yx(t),_e==="playing"){Ps+=t;let r=0;for(;Ps>=1/60&&r++<4;)Kx(1/60,e),Ps-=1/60;Oe.update(vt.speed,vt.boosting)}const n=_e==="playing"?rn(Ps/(1/60),0,1):1;if(_e!=="menu"){const r=vo.lerp(xi.x,vt.x,n),o=vo.lerp(xi.z,vt.z,n),a=xi.heading+Kr(vt.heading,xi.heading)*n;Ge.position.set(r,.1+Math.sin(Le*2.7)*.085+Math.sin(Le*4.3)*.035,o),Ge.rotation.set((vt.boosting?.065:Math.abs(vt.speed)*7e-4)+Math.sin(Le*2)*.008,a,rn(vt.yaw*vt.speed*.003,-.12,.12)),di+=Kr(a,di)*(1-Math.exp(-4.5*t));const l=vt.boosting?24:19,c=new L(r+Math.sin(di)*l,7.8+(vt.boosting?1.2:0),o+Math.cos(di)*l);nl.lerp(c,1-Math.exp(-8*t));const h=new L(r-Math.sin(di)*26,3,o-Math.cos(di)*26);el.lerp(h,1-Math.exp(-9*t)),Ve.position.copy(nl),Ve.lookAt(el),Ve.fov=vo.lerp(Ve.fov,vt.boosting?69:62,1-Math.exp(-3*t)),Ve.updateProjectionMatrix()}else{const r=ks.landmarks[dn?6:0],o=Ae.sample(Un[dn?8:0].distance-(dn?330:140),-34),a=r.x-o.x,l=r.z-o.z,c=Math.hypot(a,l),h=-l/c,u=a/c;Ve.position.set(o.x+Math.sin(Le*.06)*8,11.5,o.z+Math.cos(Le*.06)*6),Ve.lookAt(r.x-h*60,dn?70:24,r.z-u*60),Ge.position.set(o.x+a/c*25-h*7,.1+Math.sin(Le*2)*.07,o.z+l/c*25-u*7),Ge.rotation.set(.008,Math.atan2(-a,-l),Math.sin(Le)*.009)}Ge.userData.propeller&&(Ge.userData.propeller.rotation.z+=t*(20+Math.abs(vt.speed)*6)),Ge.userData.motor&&(Ge.userData.motor.rotation.y=-(e.steer||0)*.18),Ci.update(t),uo.update(t,_e==="menu"?Ei.filter(r=>Math.hypot(r.x-Ge.position.x,r.z-Ge.position.z)<450):[vt,...Ei.filter(r=>Math.hypot(r.x-vt.x,r.z-vt.z)<450)]);const s=[];for(const r of[Ge,...Ei.filter(o=>Math.hypot(o.x-Ve.position.x,o.z-Ve.position.z)<350).map(o=>o.mesh)]){r.updateMatrixWorld();for(const o of r.userData.lightSources||[]){const a=o.position.slice();r.userData.kind==="longtail"&&(a[1]=1.4);const l=r.localToWorld(new L(...a));s.push({x:l.x,y:l.y,z:l.z,color:o.color,power:o.intensity||18,boat:!0,distance:o.distance})}}if(ks.update(Le,Ve,Xt,s),_e==="menu")for(const r of ks.pierVisuals)r.ring.visible=!1,r.beacon.visible=!1;dt("#stunt").hidden=Le>yu,dt("#toast").style.opacity=Le>Su?"0":"1",sa+=t,sa>.09&&(sa=0,_e!=="menu"&&Au()),gi.render()}async function $x(){try{await document.fonts.ready;const i=await fetch("/longtail/data/river-course.json");if(!i.ok)throw new Error("Could not load the river map");const e=(await i.json()).points,s=new yl(e.map(u=>new L((u[0]-100.502)*108140,0,(13.733-u[1])*111320))).getSpacedPoints(320),r=new Qc(e),o=s.map(u=>[u.x/108140+100.502,13.733-u.z/111320,r.nearest(u.x,u.z).width]);Ae=new Qc(o),Un=Kv(Ae),Xt=new Zv(Un),vt=new $v(Un[0].x,Un[0].z,Un[0].heading),tn=new id,tn.background=new kt(461842),tn.fog=new ml(1119260,56e-5),Ve=new Fe(62,innerWidth/innerHeight,.3,8e3),jn=new Ov({canvas:dt("#scene"),antialias:!0,powerPreference:"high-performance"}),jn.setPixelRatio(Math.min(devicePixelRatio,Cs?1.35:1.65)),jn.setSize(innerWidth,innerHeight),jn.toneMapping=sl,jn.toneMappingExposure=.84,jn.outputColorSpace=ye,tn.add(new Kd(9547209,2168591,.2));const a=new wc(10271970,.27);a.position.set(-300,600,-400),tn.add(a);const l=new wc(16766108,.085);l.position.set(500,220,150),tn.add(l),ks=Tx(tn,Ae,Un,Cs),Ge=Mu("longtail",0),tn.add(Ge);const c=new ru(16763281,3.5,7,2);c.position.set(0,1.65,4.5),Ge.add(c),Ci=new Bx(tn,Cs),uo=new kx(tn,Cs?30:46),qx(),gi=new Vv(jn),gi.addPass(new Wv(tn,Ve)),gi.addPass(new cs(new rt(innerWidth,innerHeight),.32,.36,1.1)),gi.addPass(new qv);const h=()=>{Ve.aspect=innerWidth/innerHeight,Ve.updateProjectionMatrix(),jn.setSize(innerWidth,innerHeight),gi.setSize(innerWidth,innerHeight)};window.addEventListener("resize",h),dt("#scene").addEventListener("webglcontextlost",u=>{u.preventDefault(),fo(!0),_i("Graphics paused. Reload the page to restore the river.",100)}),ho=!0,dt("#start").disabled=!1,dt("#start").innerHTML="MAKE WAVES <span>↗</span>",dt("#loading-note").textContent="",jr=performance.now(),requestAnimationFrame(Ru)}catch(i){console.error(i),dt("#loading-note").textContent=`Unable to launch: ${i.message}. Try a browser with WebGL enabled.`,dt("#start").textContent="RELOAD THE RIVER",dt("#start").disabled=!1,dt("#start").onclick=()=>location.reload()}}$x();
