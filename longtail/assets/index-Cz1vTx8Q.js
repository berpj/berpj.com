(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Kl="180",Qd=0,Fc=1,$d=2,wu=1,ef=2,Hn=3,Kn=0,kt=1,Bt=2,Xn=0,Di=1,ms=2,Oc=3,zc=4,tf=5,Ai=100,nf=101,sf=102,rf=103,of=104,af=200,lf=201,cf=202,hf=203,Wa=204,Xa=205,uf=206,df=207,ff=208,pf=209,mf=210,gf=211,xf=212,vf=213,_f=214,qa=0,Ya=1,ja=2,gs=3,Ka=4,Za=5,Ja=6,Qa=7,Eu=0,Mf=1,yf=2,ui=0,Tu=1,Au=2,Cu=3,Zl=4,Ru=5,Pu=6,Lu=7,Du=300,xs=301,vs=302,$a=303,el=304,Co=306,fi=1e3,Ri=1001,tl=1002,Gt=1003,Sf=1004,pr=1005,rn=1006,Xo=1007,yn=1008,Pn=1009,Iu=1010,Uu=1011,Qs=1012,Jl=1013,Ui=1014,An=1015,bn=1016,Ql=1017,$l=1018,$s=1020,Nu=35902,Fu=35899,Ou=1021,zu=1022,on=1023,er=1026,tr=1027,ec=1028,tc=1029,Bu=1030,nc=1031,ic=1033,to=33776,no=33777,io=33778,so=33779,nl=35840,il=35841,sl=35842,rl=35843,ol=36196,al=37492,ll=37496,cl=37808,hl=37809,ul=37810,dl=37811,fl=37812,pl=37813,ml=37814,gl=37815,xl=37816,vl=37817,_l=37818,Ml=37819,yl=37820,Sl=37821,bl=36492,wl=36494,El=36495,Tl=36283,Al=36284,Cl=36285,Rl=36286,bf=3200,wf=3201,Hu=0,Ef=1,li="",gt="srgb",_s="srgb-linear",po="linear",lt="srgb",Wi=7680,Bc=519,Tf=512,Af=513,Cf=514,ku=515,Rf=516,Pf=517,Lf=518,Df=519,Hc=35044,As=35048,kc="300 es",Cn=2e3,mo=2001;class Cs{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const s=n[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const Pt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Gc=1234567;const Vs=Math.PI/180,Ms=180/Math.PI;function zi(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Pt[i&255]+Pt[i>>8&255]+Pt[i>>16&255]+Pt[i>>24&255]+"-"+Pt[e&255]+Pt[e>>8&255]+"-"+Pt[e>>16&15|64]+Pt[e>>24&255]+"-"+Pt[t&63|128]+Pt[t>>8&255]+"-"+Pt[t>>16&255]+Pt[t>>24&255]+Pt[n&255]+Pt[n>>8&255]+Pt[n>>16&255]+Pt[n>>24&255]).toLowerCase()}function Qe(i,e,t){return Math.max(e,Math.min(t,i))}function sc(i,e){return(i%e+e)%e}function If(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function Uf(i,e,t){return i!==e?(t-i)/(e-i):0}function Ws(i,e,t){return(1-t)*i+t*e}function Nf(i,e,t,n){return Ws(i,e,1-Math.exp(-t*n))}function Ff(i,e=1){return e-Math.abs(sc(i,e*2)-e)}function Of(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function zf(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Bf(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Hf(i,e){return i+Math.random()*(e-i)}function kf(i){return i*(.5-Math.random())}function Gf(i){i!==void 0&&(Gc=i);let e=Gc+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Vf(i){return i*Vs}function Wf(i){return i*Ms}function Xf(i){return(i&i-1)===0&&i!==0}function qf(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Yf(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function jf(i,e,t,n,s){const r=Math.cos,o=Math.sin,a=r(t/2),c=o(t/2),l=r((e+n)/2),h=o((e+n)/2),u=r((e-n)/2),d=o((e-n)/2),f=r((n-e)/2),m=o((n-e)/2);switch(s){case"XYX":i.set(a*h,c*u,c*d,a*l);break;case"YZY":i.set(c*d,a*h,c*u,a*l);break;case"ZXZ":i.set(c*u,c*d,a*h,a*l);break;case"XZX":i.set(a*h,c*m,c*f,a*l);break;case"YXY":i.set(c*f,a*h,c*m,a*l);break;case"ZYZ":i.set(c*m,c*f,a*h,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function as(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Ut(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const us={DEG2RAD:Vs,RAD2DEG:Ms,generateUUID:zi,clamp:Qe,euclideanModulo:sc,mapLinear:If,inverseLerp:Uf,lerp:Ws,damp:Nf,pingpong:Ff,smoothstep:Of,smootherstep:zf,randInt:Bf,randFloat:Hf,randFloatSpread:kf,seededRandom:Gf,degToRad:Vf,radToDeg:Wf,isPowerOfTwo:Xf,ceilPowerOfTwo:qf,floorPowerOfTwo:Yf,setQuaternionFromProperEuler:jf,normalize:Ut,denormalize:as};class se{constructor(e=0,t=0){se.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Qe(this.x,e.x,t.x),this.y=Qe(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Qe(this.x,e,t),this.y=Qe(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Qe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Qe(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Vt{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let c=n[s+0],l=n[s+1],h=n[s+2],u=n[s+3];const d=r[o+0],f=r[o+1],m=r[o+2],v=r[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u;return}if(a===1){e[t+0]=d,e[t+1]=f,e[t+2]=m,e[t+3]=v;return}if(u!==v||c!==d||l!==f||h!==m){let g=1-a;const p=c*d+l*f+h*m+u*v,M=p>=0?1:-1,_=1-p*p;if(_>Number.EPSILON){const w=Math.sqrt(_),A=Math.atan2(w,p*M);g=Math.sin(g*A)/w,a=Math.sin(a*A)/w}const x=a*M;if(c=c*g+d*x,l=l*g+f*x,h=h*g+m*x,u=u*g+v*x,g===1-a){const w=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=w,l*=w,h*=w,u*=w}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,s,r,o){const a=n[s],c=n[s+1],l=n[s+2],h=n[s+3],u=r[o],d=r[o+1],f=r[o+2],m=r[o+3];return e[t]=a*m+h*u+c*f-l*d,e[t+1]=c*m+h*d+l*u-a*f,e[t+2]=l*m+h*f+a*d-c*u,e[t+3]=h*m-a*u-c*d-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(s/2),u=a(r/2),d=c(n/2),f=c(s/2),m=c(r/2);switch(o){case"XYZ":this._x=d*h*u+l*f*m,this._y=l*f*u-d*h*m,this._z=l*h*m+d*f*u,this._w=l*h*u-d*f*m;break;case"YXZ":this._x=d*h*u+l*f*m,this._y=l*f*u-d*h*m,this._z=l*h*m-d*f*u,this._w=l*h*u+d*f*m;break;case"ZXY":this._x=d*h*u-l*f*m,this._y=l*f*u+d*h*m,this._z=l*h*m+d*f*u,this._w=l*h*u-d*f*m;break;case"ZYX":this._x=d*h*u-l*f*m,this._y=l*f*u+d*h*m,this._z=l*h*m-d*f*u,this._w=l*h*u+d*f*m;break;case"YZX":this._x=d*h*u+l*f*m,this._y=l*f*u+d*h*m,this._z=l*h*m-d*f*u,this._w=l*h*u-d*f*m;break;case"XZY":this._x=d*h*u-l*f*m,this._y=l*f*u-d*h*m,this._z=l*h*m+d*f*u,this._w=l*h*u+d*f*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],c=t[9],l=t[2],h=t[6],u=t[10],d=n+a+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-c)*f,this._y=(r-l)*f,this._z=(o-s)*f}else if(n>a&&n>u){const f=2*Math.sqrt(1+n-a-u);this._w=(h-c)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+l)/f}else if(a>u){const f=2*Math.sqrt(1+a-n-u);this._w=(r-l)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(c+h)/f}else{const f=2*Math.sqrt(1+u-n-a);this._w=(o-s)/f,this._x=(r+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Qe(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+o*a+s*l-r*c,this._y=s*h+o*c+r*a-n*l,this._z=r*h+o*l+n*c-s*a,this._w=o*h-n*a-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,s=this._y,r=this._z,o=this._w;let a=o*e._w+n*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;const c=1-a*a;if(c<=Number.EPSILON){const f=1-t;return this._w=f*o+t*this._w,this._x=f*n+t*this._x,this._y=f*s+t*this._y,this._z=f*r+t*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,a),u=Math.sin((1-t)*h)/l,d=Math.sin(t*h)/l;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class R{constructor(e=0,t=0,n=0){R.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Vc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Vc.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*s-a*n),h=2*(a*t-r*s),u=2*(r*n-o*t);return this.x=t+c*l+o*u-a*h,this.y=n+c*h+a*l-r*u,this.z=s+c*u+r*h-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Qe(this.x,e.x,t.x),this.y=Qe(this.y,e.y,t.y),this.z=Qe(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Qe(this.x,e,t),this.y=Qe(this.y,e,t),this.z=Qe(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Qe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,c=t.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return qo.copy(this).projectOnVector(e),this.sub(qo)}reflect(e){return this.sub(qo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Qe(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const qo=new R,Vc=new Vt;class Ke{constructor(e,t,n,s,r,o,a,c,l){Ke.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,c,l)}set(e,t,n,s,r,o,a,c,l){const h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],u=n[7],d=n[2],f=n[5],m=n[8],v=s[0],g=s[3],p=s[6],M=s[1],_=s[4],x=s[7],w=s[2],A=s[5],C=s[8];return r[0]=o*v+a*M+c*w,r[3]=o*g+a*_+c*A,r[6]=o*p+a*x+c*C,r[1]=l*v+h*M+u*w,r[4]=l*g+h*_+u*A,r[7]=l*p+h*x+u*C,r[2]=d*v+f*M+m*w,r[5]=d*g+f*_+m*A,r[8]=d*p+f*x+m*C,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8];return t*o*h-t*a*l-n*r*h+n*a*c+s*r*l-s*o*c}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=h*o-a*l,d=a*c-h*r,f=l*r-o*c,m=t*u+n*d+s*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/m;return e[0]=u*v,e[1]=(s*l-h*n)*v,e[2]=(a*n-s*o)*v,e[3]=d*v,e[4]=(h*t-s*c)*v,e[5]=(s*r-a*t)*v,e[6]=f*v,e[7]=(n*c-l*t)*v,e[8]=(o*t-n*r)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+e,-s*l,s*c,-s*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Yo.makeScale(e,t)),this}rotate(e){return this.premultiply(Yo.makeRotation(-e)),this}translate(e,t){return this.premultiply(Yo.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Yo=new Ke;function Gu(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function nr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Kf(){const i=nr("canvas");return i.style.display="block",i}const Wc={};function ir(i){i in Wc||(Wc[i]=!0,console.warn(i))}function Zf(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}const Xc=new Ke().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),qc=new Ke().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Jf(){const i={enabled:!0,workingColorSpace:_s,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===lt&&(s.r=qn(s.r),s.g=qn(s.g),s.b=qn(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===lt&&(s.r=ds(s.r),s.g=ds(s.g),s.b=ds(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===li?po:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return ir("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return ir("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[_s]:{primaries:e,whitePoint:n,transfer:po,toXYZ:Xc,fromXYZ:qc,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:gt},outputColorSpaceConfig:{drawingBufferColorSpace:gt}},[gt]:{primaries:e,whitePoint:n,transfer:lt,toXYZ:Xc,fromXYZ:qc,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:gt}}}),i}const nt=Jf();function qn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ds(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Xi;class Qf{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Xi===void 0&&(Xi=nr("canvas")),Xi.width=e.width,Xi.height=e.height;const s=Xi.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=Xi}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=nr("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=qn(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(qn(t[n]/255)*255):t[n]=qn(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let $f=0;class rc{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:$f++}),this.uuid=zi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(jo(s[o].image)):r.push(jo(s[o]))}else r=jo(s);n.url=r}return t||(e.images[this.uuid]=n),n}}function jo(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Qf.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let ep=0;const Ko=new R;class Et extends Cs{constructor(e=Et.DEFAULT_IMAGE,t=Et.DEFAULT_MAPPING,n=Ri,s=Ri,r=rn,o=yn,a=on,c=Pn,l=Et.DEFAULT_ANISOTROPY,h=li){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ep++}),this.uuid=zi(),this.name="",this.source=new rc(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new se(0,0),this.repeat=new se(1,1),this.center=new se(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ke,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Ko).x}get height(){return this.source.getSize(Ko).y}get depth(){return this.source.getSize(Ko).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Du)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case fi:e.x=e.x-Math.floor(e.x);break;case Ri:e.x=e.x<0?0:1;break;case tl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case fi:e.y=e.y-Math.floor(e.y);break;case Ri:e.y=e.y<0?0:1;break;case tl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Et.DEFAULT_IMAGE=null;Et.DEFAULT_MAPPING=Du;Et.DEFAULT_ANISOTROPY=1;class rt{constructor(e=0,t=0,n=0,s=1){rt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r;const c=e.elements,l=c[0],h=c[4],u=c[8],d=c[1],f=c[5],m=c[9],v=c[2],g=c[6],p=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-v)<.01&&Math.abs(m-g)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+v)<.1&&Math.abs(m+g)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const _=(l+1)/2,x=(f+1)/2,w=(p+1)/2,A=(h+d)/4,C=(u+v)/4,P=(m+g)/4;return _>x&&_>w?_<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(_),s=A/n,r=C/n):x>w?x<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(x),n=A/s,r=P/s):w<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(w),n=C/r,s=P/r),this.set(n,s,r,t),this}let M=Math.sqrt((g-m)*(g-m)+(u-v)*(u-v)+(d-h)*(d-h));return Math.abs(M)<.001&&(M=1),this.x=(g-m)/M,this.y=(u-v)/M,this.z=(d-h)/M,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Qe(this.x,e.x,t.x),this.y=Qe(this.y,e.y,t.y),this.z=Qe(this.z,e.z,t.z),this.w=Qe(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Qe(this.x,e,t),this.y=Qe(this.y,e,t),this.z=Qe(this.z,e,t),this.w=Qe(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Qe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class tp extends Cs{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:rn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new rt(0,0,e,t),this.scissorTest=!1,this.viewport=new rt(0,0,e,t);const s={width:e,height:t,depth:n.depth},r=new Et(s);this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:rn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new rc(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Kt extends tp{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Vu extends Et{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Gt,this.minFilter=Gt,this.wrapR=Ri,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class np extends Et{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Gt,this.minFilter=Gt,this.wrapR=Ri,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Zn{constructor(e=new R(1/0,1/0,1/0),t=new R(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(mn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(mn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=mn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,mn):mn.fromBufferAttribute(r,o),mn.applyMatrix4(e.matrixWorld),this.expandByPoint(mn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),mr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),mr.copy(n.boundingBox)),mr.applyMatrix4(e.matrixWorld),this.union(mr)}const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,mn),mn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ds),gr.subVectors(this.max,Ds),qi.subVectors(e.a,Ds),Yi.subVectors(e.b,Ds),ji.subVectors(e.c,Ds),ei.subVectors(Yi,qi),ti.subVectors(ji,Yi),xi.subVectors(qi,ji);let t=[0,-ei.z,ei.y,0,-ti.z,ti.y,0,-xi.z,xi.y,ei.z,0,-ei.x,ti.z,0,-ti.x,xi.z,0,-xi.x,-ei.y,ei.x,0,-ti.y,ti.x,0,-xi.y,xi.x,0];return!Zo(t,qi,Yi,ji,gr)||(t=[1,0,0,0,1,0,0,0,1],!Zo(t,qi,Yi,ji,gr))?!1:(xr.crossVectors(ei,ti),t=[xr.x,xr.y,xr.z],Zo(t,qi,Yi,ji,gr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,mn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(mn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Nn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Nn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Nn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Nn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Nn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Nn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Nn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Nn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Nn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Nn=[new R,new R,new R,new R,new R,new R,new R,new R],mn=new R,mr=new Zn,qi=new R,Yi=new R,ji=new R,ei=new R,ti=new R,xi=new R,Ds=new R,gr=new R,xr=new R,vi=new R;function Zo(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){vi.fromArray(i,r);const a=s.x*Math.abs(vi.x)+s.y*Math.abs(vi.y)+s.z*Math.abs(vi.z),c=e.dot(vi),l=t.dot(vi),h=n.dot(vi);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}const ip=new Zn,Is=new R,Jo=new R;class Bi{constructor(e=new R,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):ip.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Is.subVectors(e,this.center);const t=Is.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Is,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Jo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Is.copy(e.center).add(Jo)),this.expandByPoint(Is.copy(e.center).sub(Jo))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Fn=new R,Qo=new R,vr=new R,ni=new R,$o=new R,_r=new R,ea=new R;class oc{constructor(e=new R,t=new R(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Fn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Fn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Fn.copy(this.origin).addScaledVector(this.direction,t),Fn.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Qo.copy(e).add(t).multiplyScalar(.5),vr.copy(t).sub(e).normalize(),ni.copy(this.origin).sub(Qo);const r=e.distanceTo(t)*.5,o=-this.direction.dot(vr),a=ni.dot(this.direction),c=-ni.dot(vr),l=ni.lengthSq(),h=Math.abs(1-o*o);let u,d,f,m;if(h>0)if(u=o*c-a,d=o*a-c,m=r*h,u>=0)if(d>=-m)if(d<=m){const v=1/h;u*=v,d*=v,f=u*(u+o*d+2*a)+d*(o*u+d+2*c)+l}else d=r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;else d=-r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;else d<=-m?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l):d<=m?(u=0,d=Math.min(Math.max(-r,-c),r),f=d*(d+2*c)+l):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Qo).addScaledVector(vr,d),f}intersectSphere(e,t){Fn.subVectors(e.center,this.origin);const n=Fn.dot(this.direction),s=Fn.dot(Fn)-n*n,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,c;const l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(n=(e.min.x-d.x)*l,s=(e.max.x-d.x)*l):(n=(e.max.x-d.x)*l,s=(e.min.x-d.x)*l),h>=0?(r=(e.min.y-d.y)*h,o=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,o=(e.min.y-d.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(e.min.z-d.z)*u,c=(e.max.z-d.z)*u):(a=(e.max.z-d.z)*u,c=(e.min.z-d.z)*u),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Fn)!==null}intersectTriangle(e,t,n,s,r){$o.subVectors(t,e),_r.subVectors(n,e),ea.crossVectors($o,_r);let o=this.direction.dot(ea),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ni.subVectors(this.origin,e);const c=a*this.direction.dot(_r.crossVectors(ni,_r));if(c<0)return null;const l=a*this.direction.dot($o.cross(ni));if(l<0||c+l>o)return null;const h=-a*ni.dot(ea);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ze{constructor(e,t,n,s,r,o,a,c,l,h,u,d,f,m,v,g){Ze.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,c,l,h,u,d,f,m,v,g)}set(e,t,n,s,r,o,a,c,l,h,u,d,f,m,v,g){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=m,p[11]=v,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ze().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,s=1/Ki.setFromMatrixColumn(e,0).length(),r=1/Ki.setFromMatrixColumn(e,1).length(),o=1/Ki.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){const d=o*h,f=o*u,m=a*h,v=a*u;t[0]=c*h,t[4]=-c*u,t[8]=l,t[1]=f+m*l,t[5]=d-v*l,t[9]=-a*c,t[2]=v-d*l,t[6]=m+f*l,t[10]=o*c}else if(e.order==="YXZ"){const d=c*h,f=c*u,m=l*h,v=l*u;t[0]=d+v*a,t[4]=m*a-f,t[8]=o*l,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=f*a-m,t[6]=v+d*a,t[10]=o*c}else if(e.order==="ZXY"){const d=c*h,f=c*u,m=l*h,v=l*u;t[0]=d-v*a,t[4]=-o*u,t[8]=m+f*a,t[1]=f+m*a,t[5]=o*h,t[9]=v-d*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){const d=o*h,f=o*u,m=a*h,v=a*u;t[0]=c*h,t[4]=m*l-f,t[8]=d*l+v,t[1]=c*u,t[5]=v*l+d,t[9]=f*l-m,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){const d=o*c,f=o*l,m=a*c,v=a*l;t[0]=c*h,t[4]=v-d*u,t[8]=m*u+f,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-l*h,t[6]=f*u+m,t[10]=d-v*u}else if(e.order==="XZY"){const d=o*c,f=o*l,m=a*c,v=a*l;t[0]=c*h,t[4]=-u,t[8]=l*h,t[1]=d*u+v,t[5]=o*h,t[9]=f*u-m,t[2]=m*u-f,t[6]=a*h,t[10]=v*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(sp,e,rp)}lookAt(e,t,n){const s=this.elements;return nn.subVectors(e,t),nn.lengthSq()===0&&(nn.z=1),nn.normalize(),ii.crossVectors(n,nn),ii.lengthSq()===0&&(Math.abs(n.z)===1?nn.x+=1e-4:nn.z+=1e-4,nn.normalize(),ii.crossVectors(n,nn)),ii.normalize(),Mr.crossVectors(nn,ii),s[0]=ii.x,s[4]=Mr.x,s[8]=nn.x,s[1]=ii.y,s[5]=Mr.y,s[9]=nn.y,s[2]=ii.z,s[6]=Mr.z,s[10]=nn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],u=n[5],d=n[9],f=n[13],m=n[2],v=n[6],g=n[10],p=n[14],M=n[3],_=n[7],x=n[11],w=n[15],A=s[0],C=s[4],P=s[8],b=s[12],S=s[1],L=s[5],U=s[9],N=s[13],X=s[2],z=s[6],q=s[10],ee=s[14],W=s[3],le=s[7],xe=s[11],ae=s[15];return r[0]=o*A+a*S+c*X+l*W,r[4]=o*C+a*L+c*z+l*le,r[8]=o*P+a*U+c*q+l*xe,r[12]=o*b+a*N+c*ee+l*ae,r[1]=h*A+u*S+d*X+f*W,r[5]=h*C+u*L+d*z+f*le,r[9]=h*P+u*U+d*q+f*xe,r[13]=h*b+u*N+d*ee+f*ae,r[2]=m*A+v*S+g*X+p*W,r[6]=m*C+v*L+g*z+p*le,r[10]=m*P+v*U+g*q+p*xe,r[14]=m*b+v*N+g*ee+p*ae,r[3]=M*A+_*S+x*X+w*W,r[7]=M*C+_*L+x*z+w*le,r[11]=M*P+_*U+x*q+w*xe,r[15]=M*b+_*N+x*ee+w*ae,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],c=e[9],l=e[13],h=e[2],u=e[6],d=e[10],f=e[14],m=e[3],v=e[7],g=e[11],p=e[15];return m*(+r*c*u-s*l*u-r*a*d+n*l*d+s*a*f-n*c*f)+v*(+t*c*f-t*l*d+r*o*d-s*o*f+s*l*h-r*c*h)+g*(+t*l*u-t*a*f-r*o*u+n*o*f+r*a*h-n*l*h)+p*(-s*a*h-t*c*u+t*a*d+s*o*u-n*o*d+n*c*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=e[9],d=e[10],f=e[11],m=e[12],v=e[13],g=e[14],p=e[15],M=u*g*l-v*d*l+v*c*f-a*g*f-u*c*p+a*d*p,_=m*d*l-h*g*l-m*c*f+o*g*f+h*c*p-o*d*p,x=h*v*l-m*u*l+m*a*f-o*v*f-h*a*p+o*u*p,w=m*u*c-h*v*c-m*a*d+o*v*d+h*a*g-o*u*g,A=t*M+n*_+s*x+r*w;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/A;return e[0]=M*C,e[1]=(v*d*r-u*g*r-v*s*f+n*g*f+u*s*p-n*d*p)*C,e[2]=(a*g*r-v*c*r+v*s*l-n*g*l-a*s*p+n*c*p)*C,e[3]=(u*c*r-a*d*r-u*s*l+n*d*l+a*s*f-n*c*f)*C,e[4]=_*C,e[5]=(h*g*r-m*d*r+m*s*f-t*g*f-h*s*p+t*d*p)*C,e[6]=(m*c*r-o*g*r-m*s*l+t*g*l+o*s*p-t*c*p)*C,e[7]=(o*d*r-h*c*r+h*s*l-t*d*l-o*s*f+t*c*f)*C,e[8]=x*C,e[9]=(m*u*r-h*v*r-m*n*f+t*v*f+h*n*p-t*u*p)*C,e[10]=(o*v*r-m*a*r+m*n*l-t*v*l-o*n*p+t*a*p)*C,e[11]=(h*a*r-o*u*r-h*n*l+t*u*l+o*n*f-t*a*f)*C,e[12]=w*C,e[13]=(h*v*s-m*u*s+m*n*d-t*v*d-h*n*g+t*u*g)*C,e[14]=(m*a*s-o*v*s-m*n*c+t*v*c+o*n*g-t*a*g)*C,e[15]=(o*u*s-h*a*s+h*n*c-t*u*c-o*n*d+t*a*d)*C,this}scale(e){const t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,c=e.z,l=r*o,h=r*a;return this.set(l*o+n,l*a-s*c,l*c+s*a,0,l*a+s*c,h*a+n,h*c-s*o,0,l*c-s*a,h*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,r=t._x,o=t._y,a=t._z,c=t._w,l=r+r,h=o+o,u=a+a,d=r*l,f=r*h,m=r*u,v=o*h,g=o*u,p=a*u,M=c*l,_=c*h,x=c*u,w=n.x,A=n.y,C=n.z;return s[0]=(1-(v+p))*w,s[1]=(f+x)*w,s[2]=(m-_)*w,s[3]=0,s[4]=(f-x)*A,s[5]=(1-(d+p))*A,s[6]=(g+M)*A,s[7]=0,s[8]=(m+_)*C,s[9]=(g-M)*C,s[10]=(1-(d+v))*C,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;let r=Ki.set(s[0],s[1],s[2]).length();const o=Ki.set(s[4],s[5],s[6]).length(),a=Ki.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],gn.copy(this);const l=1/r,h=1/o,u=1/a;return gn.elements[0]*=l,gn.elements[1]*=l,gn.elements[2]*=l,gn.elements[4]*=h,gn.elements[5]*=h,gn.elements[6]*=h,gn.elements[8]*=u,gn.elements[9]*=u,gn.elements[10]*=u,t.setFromRotationMatrix(gn),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,s,r,o,a=Cn,c=!1){const l=this.elements,h=2*r/(t-e),u=2*r/(n-s),d=(t+e)/(t-e),f=(n+s)/(n-s);let m,v;if(c)m=r/(o-r),v=o*r/(o-r);else if(a===Cn)m=-(o+r)/(o-r),v=-2*o*r/(o-r);else if(a===mo)m=-o/(o-r),v=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=Cn,c=!1){const l=this.elements,h=2/(t-e),u=2/(n-s),d=-(t+e)/(t-e),f=-(n+s)/(n-s);let m,v;if(c)m=1/(o-r),v=o/(o-r);else if(a===Cn)m=-2/(o-r),v=-(o+r)/(o-r);else if(a===mo)m=-1/(o-r),v=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=0,l[12]=d,l[1]=0,l[5]=u,l[9]=0,l[13]=f,l[2]=0,l[6]=0,l[10]=m,l[14]=v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Ki=new R,gn=new Ze,sp=new R(0,0,0),rp=new R(1,1,1),ii=new R,Mr=new R,nn=new R,Yc=new Ze,jc=new Vt;class $t{constructor(e=0,t=0,n=0,s=$t.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(Qe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Qe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Qe(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Qe(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Qe(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Qe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Yc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Yc,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return jc.setFromEuler(this),this.setFromQuaternion(jc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}$t.DEFAULT_ORDER="XYZ";class Wu{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let op=0;const Kc=new R,Zi=new Vt,On=new Ze,yr=new R,Us=new R,ap=new R,lp=new Vt,Zc=new R(1,0,0),Jc=new R(0,1,0),Qc=new R(0,0,1),$c={type:"added"},cp={type:"removed"},Ji={type:"childadded",child:null},ta={type:"childremoved",child:null};class ft extends Cs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:op++}),this.uuid=zi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ft.DEFAULT_UP.clone();const e=new R,t=new $t,n=new Vt,s=new R(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ze},normalMatrix:{value:new Ke}}),this.matrix=new Ze,this.matrixWorld=new Ze,this.matrixAutoUpdate=ft.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ft.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Wu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Zi.setFromAxisAngle(e,t),this.quaternion.multiply(Zi),this}rotateOnWorldAxis(e,t){return Zi.setFromAxisAngle(e,t),this.quaternion.premultiply(Zi),this}rotateX(e){return this.rotateOnAxis(Zc,e)}rotateY(e){return this.rotateOnAxis(Jc,e)}rotateZ(e){return this.rotateOnAxis(Qc,e)}translateOnAxis(e,t){return Kc.copy(e).applyQuaternion(this.quaternion),this.position.add(Kc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Zc,e)}translateY(e){return this.translateOnAxis(Jc,e)}translateZ(e){return this.translateOnAxis(Qc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(On.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?yr.copy(e):yr.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Us.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?On.lookAt(Us,yr,this.up):On.lookAt(yr,Us,this.up),this.quaternion.setFromRotationMatrix(On),s&&(On.extractRotation(s.matrixWorld),Zi.setFromRotationMatrix(On),this.quaternion.premultiply(Zi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent($c),Ji.child=e,this.dispatchEvent(Ji),Ji.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(cp),ta.child=e,this.dispatchEvent(ta),ta.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),On.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),On.multiply(e.parent.matrixWorld)),e.applyMatrix4(On),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent($c),Ji.child=e,this.dispatchEvent(Ji),Ji.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Us,e,ap),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Us,lp,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const u=c[l];r(e.shapes,u)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(e.materials,this.material[c]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];s.animations.push(r(e.animations,c))}}if(t){const a=o(e.geometries),c=o(e.materials),l=o(e.textures),h=o(e.images),u=o(e.shapes),d=o(e.skeletons),f=o(e.animations),m=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),m.length>0&&(n.nodes=m)}return n.object=s,n;function o(a){const c=[];for(const l in a){const h=a[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}ft.DEFAULT_UP=new R(0,1,0);ft.DEFAULT_MATRIX_AUTO_UPDATE=!0;ft.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const xn=new R,zn=new R,na=new R,Bn=new R,Qi=new R,$i=new R,eh=new R,ia=new R,sa=new R,ra=new R,oa=new rt,aa=new rt,la=new rt;class _n{constructor(e=new R,t=new R,n=new R){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),xn.subVectors(e,t),s.cross(xn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){xn.subVectors(s,t),zn.subVectors(n,t),na.subVectors(e,t);const o=xn.dot(xn),a=xn.dot(zn),c=xn.dot(na),l=zn.dot(zn),h=zn.dot(na),u=o*l-a*a;if(u===0)return r.set(0,0,0),null;const d=1/u,f=(l*c-a*h)*d,m=(o*h-a*c)*d;return r.set(1-f-m,m,f)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Bn)===null?!1:Bn.x>=0&&Bn.y>=0&&Bn.x+Bn.y<=1}static getInterpolation(e,t,n,s,r,o,a,c){return this.getBarycoord(e,t,n,s,Bn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Bn.x),c.addScaledVector(o,Bn.y),c.addScaledVector(a,Bn.z),c)}static getInterpolatedAttribute(e,t,n,s,r,o){return oa.setScalar(0),aa.setScalar(0),la.setScalar(0),oa.fromBufferAttribute(e,t),aa.fromBufferAttribute(e,n),la.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(oa,r.x),o.addScaledVector(aa,r.y),o.addScaledVector(la,r.z),o}static isFrontFacing(e,t,n,s){return xn.subVectors(n,t),zn.subVectors(e,t),xn.cross(zn).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return xn.subVectors(this.c,this.b),zn.subVectors(this.a,this.b),xn.cross(zn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return _n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return _n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return _n.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return _n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return _n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,r=this.c;let o,a;Qi.subVectors(s,n),$i.subVectors(r,n),ia.subVectors(e,n);const c=Qi.dot(ia),l=$i.dot(ia);if(c<=0&&l<=0)return t.copy(n);sa.subVectors(e,s);const h=Qi.dot(sa),u=$i.dot(sa);if(h>=0&&u<=h)return t.copy(s);const d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return o=c/(c-h),t.copy(n).addScaledVector(Qi,o);ra.subVectors(e,r);const f=Qi.dot(ra),m=$i.dot(ra);if(m>=0&&f<=m)return t.copy(r);const v=f*l-c*m;if(v<=0&&l>=0&&m<=0)return a=l/(l-m),t.copy(n).addScaledVector($i,a);const g=h*m-f*u;if(g<=0&&u-h>=0&&f-m>=0)return eh.subVectors(r,s),a=(u-h)/(u-h+(f-m)),t.copy(s).addScaledVector(eh,a);const p=1/(g+v+d);return o=v*p,a=d*p,t.copy(n).addScaledVector(Qi,o).addScaledVector($i,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Xu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},si={h:0,s:0,l:0},Sr={h:0,s:0,l:0};function ca(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Fe{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=gt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,nt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=nt.workingColorSpace){return this.r=e,this.g=t,this.b=n,nt.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=nt.workingColorSpace){if(e=sc(e,1),t=Qe(t,0,1),n=Qe(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=ca(o,r,e+1/3),this.g=ca(o,r,e),this.b=ca(o,r,e-1/3)}return nt.colorSpaceToWorking(this,s),this}setStyle(e,t=gt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=gt){const n=Xu[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=qn(e.r),this.g=qn(e.g),this.b=qn(e.b),this}copyLinearToSRGB(e){return this.r=ds(e.r),this.g=ds(e.g),this.b=ds(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=gt){return nt.workingToColorSpace(Lt.copy(this),e),Math.round(Qe(Lt.r*255,0,255))*65536+Math.round(Qe(Lt.g*255,0,255))*256+Math.round(Qe(Lt.b*255,0,255))}getHexString(e=gt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=nt.workingColorSpace){nt.workingToColorSpace(Lt.copy(this),t);const n=Lt.r,s=Lt.g,r=Lt.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let c,l;const h=(a+o)/2;if(a===o)c=0,l=0;else{const u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case n:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-n)/u+2;break;case r:c=(n-s)/u+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=nt.workingColorSpace){return nt.workingToColorSpace(Lt.copy(this),t),e.r=Lt.r,e.g=Lt.g,e.b=Lt.b,e}getStyle(e=gt){nt.workingToColorSpace(Lt.copy(this),e);const t=Lt.r,n=Lt.g,s=Lt.b;return e!==gt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(si),this.setHSL(si.h+e,si.s+t,si.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(si),e.getHSL(Sr);const n=Ws(si.h,Sr.h,t),s=Ws(si.s,Sr.s,t),r=Ws(si.l,Sr.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Lt=new Fe;Fe.NAMES=Xu;let hp=0;class Hi extends Cs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:hp++}),this.uuid=zi(),this.name="",this.type="Material",this.blending=Di,this.side=Kn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Wa,this.blendDst=Xa,this.blendEquation=Ai,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Fe(0,0,0),this.blendAlpha=0,this.depthFunc=gs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Bc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Wi,this.stencilZFail=Wi,this.stencilZPass=Wi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Di&&(n.blending=this.blending),this.side!==Kn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Wa&&(n.blendSrc=this.blendSrc),this.blendDst!==Xa&&(n.blendDst=this.blendDst),this.blendEquation!==Ai&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==gs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Bc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Wi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Wi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Wi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(t){const r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class dn extends Hi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Fe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $t,this.combine=Eu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const bt=new R,br=new se;let up=0;class vt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:up++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Hc,this.updateRanges=[],this.gpuType=An,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)br.fromBufferAttribute(this,t),br.applyMatrix3(e),this.setXY(t,br.x,br.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)bt.fromBufferAttribute(this,t),bt.applyMatrix3(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)bt.fromBufferAttribute(this,t),bt.applyMatrix4(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)bt.fromBufferAttribute(this,t),bt.applyNormalMatrix(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)bt.fromBufferAttribute(this,t),bt.transformDirection(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=as(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Ut(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=as(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ut(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=as(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ut(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=as(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ut(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=as(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ut(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Ut(t,this.array),n=Ut(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=Ut(t,this.array),n=Ut(n,this.array),s=Ut(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=Ut(t,this.array),n=Ut(n,this.array),s=Ut(s,this.array),r=Ut(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Hc&&(e.usage=this.usage),e}}class qu extends vt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Yu extends vt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Be extends vt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let dp=0;const hn=new Ze,ha=new ft,es=new R,sn=new Zn,Ns=new Zn,Ct=new R;class it extends Cs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:dp++}),this.uuid=zi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Gu(e)?Yu:qu)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Ke().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return hn.makeRotationFromQuaternion(e),this.applyMatrix4(hn),this}rotateX(e){return hn.makeRotationX(e),this.applyMatrix4(hn),this}rotateY(e){return hn.makeRotationY(e),this.applyMatrix4(hn),this}rotateZ(e){return hn.makeRotationZ(e),this.applyMatrix4(hn),this}translate(e,t,n){return hn.makeTranslation(e,t,n),this.applyMatrix4(hn),this}scale(e,t,n){return hn.makeScale(e,t,n),this.applyMatrix4(hn),this}lookAt(e){return ha.lookAt(e),ha.updateMatrix(),this.applyMatrix4(ha.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(es).negate(),this.translate(es.x,es.y,es.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let s=0,r=e.length;s<r;s++){const o=e[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Be(n,3))}else{const n=Math.min(e.length,t.count);for(let s=0;s<n;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Zn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new R(-1/0,-1/0,-1/0),new R(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const r=t[n];sn.setFromBufferAttribute(r),this.morphTargetsRelative?(Ct.addVectors(this.boundingBox.min,sn.min),this.boundingBox.expandByPoint(Ct),Ct.addVectors(this.boundingBox.max,sn.max),this.boundingBox.expandByPoint(Ct)):(this.boundingBox.expandByPoint(sn.min),this.boundingBox.expandByPoint(sn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Bi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new R,1/0);return}if(e){const n=this.boundingSphere.center;if(sn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];Ns.setFromBufferAttribute(a),this.morphTargetsRelative?(Ct.addVectors(sn.min,Ns.min),sn.expandByPoint(Ct),Ct.addVectors(sn.max,Ns.max),sn.expandByPoint(Ct)):(sn.expandByPoint(Ns.min),sn.expandByPoint(Ns.max))}sn.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)Ct.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Ct));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)Ct.fromBufferAttribute(a,l),c&&(es.fromBufferAttribute(e,l),Ct.add(es)),s=Math.max(s,n.distanceToSquared(Ct))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new vt(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let P=0;P<n.count;P++)a[P]=new R,c[P]=new R;const l=new R,h=new R,u=new R,d=new se,f=new se,m=new se,v=new R,g=new R;function p(P,b,S){l.fromBufferAttribute(n,P),h.fromBufferAttribute(n,b),u.fromBufferAttribute(n,S),d.fromBufferAttribute(r,P),f.fromBufferAttribute(r,b),m.fromBufferAttribute(r,S),h.sub(l),u.sub(l),f.sub(d),m.sub(d);const L=1/(f.x*m.y-m.x*f.y);isFinite(L)&&(v.copy(h).multiplyScalar(m.y).addScaledVector(u,-f.y).multiplyScalar(L),g.copy(u).multiplyScalar(f.x).addScaledVector(h,-m.x).multiplyScalar(L),a[P].add(v),a[b].add(v),a[S].add(v),c[P].add(g),c[b].add(g),c[S].add(g))}let M=this.groups;M.length===0&&(M=[{start:0,count:e.count}]);for(let P=0,b=M.length;P<b;++P){const S=M[P],L=S.start,U=S.count;for(let N=L,X=L+U;N<X;N+=3)p(e.getX(N+0),e.getX(N+1),e.getX(N+2))}const _=new R,x=new R,w=new R,A=new R;function C(P){w.fromBufferAttribute(s,P),A.copy(w);const b=a[P];_.copy(b),_.sub(w.multiplyScalar(w.dot(b))).normalize(),x.crossVectors(A,b);const L=x.dot(c[P])<0?-1:1;o.setXYZW(P,_.x,_.y,_.z,L)}for(let P=0,b=M.length;P<b;++P){const S=M[P],L=S.start,U=S.count;for(let N=L,X=L+U;N<X;N+=3)C(e.getX(N+0)),C(e.getX(N+1)),C(e.getX(N+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new vt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const s=new R,r=new R,o=new R,a=new R,c=new R,l=new R,h=new R,u=new R;if(e)for(let d=0,f=e.count;d<f;d+=3){const m=e.getX(d+0),v=e.getX(d+1),g=e.getX(d+2);s.fromBufferAttribute(t,m),r.fromBufferAttribute(t,v),o.fromBufferAttribute(t,g),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,m),c.fromBufferAttribute(n,v),l.fromBufferAttribute(n,g),a.add(h),c.add(h),l.add(h),n.setXYZ(m,a.x,a.y,a.z),n.setXYZ(v,c.x,c.y,c.z),n.setXYZ(g,l.x,l.y,l.z)}else for(let d=0,f=t.count;d<f;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Ct.fromBufferAttribute(e,t),Ct.normalize(),e.setXYZ(t,Ct.x,Ct.y,Ct.z)}toNonIndexed(){function e(a,c){const l=a.array,h=a.itemSize,u=a.normalized,d=new l.constructor(c.length*h);let f=0,m=0;for(let v=0,g=c.length;v<g;v++){a.isInterleavedBufferAttribute?f=c[v]*a.data.stride+a.offset:f=c[v]*h;for(let p=0;p<h;p++)d[m++]=l[f++]}return new vt(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new it,n=this.index.array,s=this.attributes;for(const a in s){const c=s[a],l=e(c,n);t.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const c=[],l=r[a];for(let h=0,u=l.length;h<u;h++){const d=l[h],f=e(d,n);c.push(f)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){const f=l[u];h.push(f.toJSON(e.data))}h.length>0&&(s[c]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const s=e.attributes;for(const l in s){const h=s[l];this.setAttribute(l,h.clone(t))}const r=e.morphAttributes;for(const l in r){const h=[],u=r[l];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let l=0,h=o.length;l<h;l++){const u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const th=new Ze,_i=new oc,wr=new Bi,nh=new R,Er=new R,Tr=new R,Ar=new R,ua=new R,Cr=new R,ih=new R,Rr=new R;class at extends ft{constructor(e=new it,t=new dn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){Cr.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const h=a[c],u=r[c];h!==0&&(ua.fromBufferAttribute(u,e),o?Cr.addScaledVector(ua,h):Cr.addScaledVector(ua.sub(t),h))}t.add(Cr)}return t}raycast(e,t){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),wr.copy(n.boundingSphere),wr.applyMatrix4(r),_i.copy(e.ray).recast(e.near),!(wr.containsPoint(_i.origin)===!1&&(_i.intersectSphere(wr,nh)===null||_i.origin.distanceToSquared(nh)>(e.far-e.near)**2))&&(th.copy(r).invert(),_i.copy(e.ray).applyMatrix4(th),!(n.boundingBox!==null&&_i.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,_i)))}_computeIntersections(e,t,n){let s;const r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,v=d.length;m<v;m++){const g=d[m],p=o[g.materialIndex],M=Math.max(g.start,f.start),_=Math.min(a.count,Math.min(g.start+g.count,f.start+f.count));for(let x=M,w=_;x<w;x+=3){const A=a.getX(x),C=a.getX(x+1),P=a.getX(x+2);s=Pr(this,p,e,n,l,h,u,A,C,P),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{const m=Math.max(0,f.start),v=Math.min(a.count,f.start+f.count);for(let g=m,p=v;g<p;g+=3){const M=a.getX(g),_=a.getX(g+1),x=a.getX(g+2);s=Pr(this,o,e,n,l,h,u,M,_,x),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let m=0,v=d.length;m<v;m++){const g=d[m],p=o[g.materialIndex],M=Math.max(g.start,f.start),_=Math.min(c.count,Math.min(g.start+g.count,f.start+f.count));for(let x=M,w=_;x<w;x+=3){const A=x,C=x+1,P=x+2;s=Pr(this,p,e,n,l,h,u,A,C,P),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{const m=Math.max(0,f.start),v=Math.min(c.count,f.start+f.count);for(let g=m,p=v;g<p;g+=3){const M=g,_=g+1,x=g+2;s=Pr(this,o,e,n,l,h,u,M,_,x),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}}}function fp(i,e,t,n,s,r,o,a){let c;if(e.side===kt?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,e.side===Kn,a),c===null)return null;Rr.copy(a),Rr.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(Rr);return l<t.near||l>t.far?null:{distance:l,point:Rr.clone(),object:i}}function Pr(i,e,t,n,s,r,o,a,c,l){i.getVertexPosition(a,Er),i.getVertexPosition(c,Tr),i.getVertexPosition(l,Ar);const h=fp(i,e,t,n,Er,Tr,Ar,ih);if(h){const u=new R;_n.getBarycoord(ih,Er,Tr,Ar,u),s&&(h.uv=_n.getInterpolatedAttribute(s,a,c,l,u,new se)),r&&(h.uv1=_n.getInterpolatedAttribute(r,a,c,l,u,new se)),o&&(h.normal=_n.getInterpolatedAttribute(o,a,c,l,u,new R),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a,b:c,c:l,normal:new R,materialIndex:0};_n.getNormal(Er,Tr,Ar,d.normal),h.face=d,h.barycoord=u}return h}class an extends it{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const c=[],l=[],h=[],u=[];let d=0,f=0;m("z","y","x",-1,-1,n,t,e,o,r,0),m("z","y","x",1,-1,n,t,-e,o,r,1),m("x","z","y",1,1,e,n,t,s,o,2),m("x","z","y",1,-1,e,n,-t,s,o,3),m("x","y","z",1,-1,e,t,n,s,r,4),m("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new Be(l,3)),this.setAttribute("normal",new Be(h,3)),this.setAttribute("uv",new Be(u,2));function m(v,g,p,M,_,x,w,A,C,P,b){const S=x/C,L=w/P,U=x/2,N=w/2,X=A/2,z=C+1,q=P+1;let ee=0,W=0;const le=new R;for(let xe=0;xe<q;xe++){const ae=xe*L-N;for(let Ne=0;Ne<z;Ne++){const ze=Ne*S-U;le[v]=ze*M,le[g]=ae*_,le[p]=X,l.push(le.x,le.y,le.z),le[v]=0,le[g]=0,le[p]=A>0?1:-1,h.push(le.x,le.y,le.z),u.push(Ne/C),u.push(1-xe/P),ee+=1}}for(let xe=0;xe<P;xe++)for(let ae=0;ae<C;ae++){const Ne=d+ae+z*xe,ze=d+ae+z*(xe+1),$e=d+(ae+1)+z*(xe+1),qe=d+(ae+1)+z*xe;c.push(Ne,ze,qe),c.push(ze,$e,qe),W+=6}a.addGroup(f,W,b),f+=W,d+=ee}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new an(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ys(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function Nt(i){const e={};for(let t=0;t<i.length;t++){const n=ys(i[t]);for(const s in n)e[s]=n[s]}return e}function pp(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function ju(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:nt.workingColorSpace}const Rn={clone:ys,merge:Nt};var mp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,gp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class xt extends Hi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=mp,this.fragmentShader=gp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ys(e.uniforms),this.uniformsGroups=pp(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Ku extends ft{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ze,this.projectionMatrix=new Ze,this.projectionMatrixInverse=new Ze,this.coordinateSystem=Cn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ri=new R,sh=new se,rh=new se;class zt extends Ku{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ms*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Vs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ms*2*Math.atan(Math.tan(Vs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){ri.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ri.x,ri.y).multiplyScalar(-e/ri.z),ri.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ri.x,ri.y).multiplyScalar(-e/ri.z)}getViewSize(e,t){return this.getViewBounds(e,sh,rh),t.subVectors(rh,sh)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Vs*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,t-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ts=-90,ns=1;class xp extends ft{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new zt(ts,ns,e,t);s.layers=this.layers,this.add(s);const r=new zt(ts,ns,e,t);r.layers=this.layers,this.add(r);const o=new zt(ts,ns,e,t);o.layers=this.layers,this.add(o);const a=new zt(ts,ns,e,t);a.layers=this.layers,this.add(a);const c=new zt(ts,ns,e,t);c.layers=this.layers,this.add(c);const l=new zt(ts,ns,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,c]=t;for(const l of t)this.remove(l);if(e===Cn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===mo)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,c,l,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,o),e.setRenderTarget(n,2,s),e.render(t,a),e.setRenderTarget(n,3,s),e.render(t,c),e.setRenderTarget(n,4,s),e.render(t,l),n.texture.generateMipmaps=v,e.setRenderTarget(n,5,s),e.render(t,h),e.setRenderTarget(u,d,f),e.xr.enabled=m,n.texture.needsPMREMUpdate=!0}}class Zu extends Et{constructor(e=[],t=xs,n,s,r,o,a,c,l,h){super(e,t,n,s,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class vp extends Kt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Zu(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new an(5,5,5),r=new xt({name:"CubemapFromEquirect",uniforms:ys(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:kt,blending:Xn});r.uniforms.tEquirect.value=t;const o=new at(s,r),a=t.minFilter;return t.minFilter===yn&&(t.minFilter=rn),new xp(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}}class Ht extends ft{constructor(){super(),this.isGroup=!0,this.type="Group"}}const _p={type:"move"};class da{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ht,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ht,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new R,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new R),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ht,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new R,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new R),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(const v of e.hand.values()){const g=t.getJointPose(v,n),p=this._getHandJoint(l,v);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}const h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,m=.005;l.inputState.pinching&&d>f+m?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=f-m&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(_p)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Ht;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class ac{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Fe(e),this.density=t}clone(){return new ac(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Mp extends ft{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new $t,this.environmentIntensity=1,this.environmentRotation=new $t,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Lr=new R,oh=new R;class yp extends ft{constructor(){super(),this.isLOD=!0,this._currentLevel=0,this.type="LOD",Object.defineProperties(this,{levels:{enumerable:!0,value:[]}}),this.autoUpdate=!0}copy(e){super.copy(e,!1);const t=e.levels;for(let n=0,s=t.length;n<s;n++){const r=t[n];this.addLevel(r.object.clone(),r.distance,r.hysteresis)}return this.autoUpdate=e.autoUpdate,this}addLevel(e,t=0,n=0){t=Math.abs(t);const s=this.levels;let r;for(r=0;r<s.length&&!(t<s[r].distance);r++);return s.splice(r,0,{distance:t,hysteresis:n,object:e}),this.add(e),this}removeLevel(e){const t=this.levels;for(let n=0;n<t.length;n++)if(t[n].distance===e){const s=t.splice(n,1);return this.remove(s[0].object),!0}return!1}getCurrentLevel(){return this._currentLevel}getObjectForDistance(e){const t=this.levels;if(t.length>0){let n,s;for(n=1,s=t.length;n<s;n++){let r=t[n].distance;if(t[n].object.visible&&(r-=r*t[n].hysteresis),e<r)break}return t[n-1].object}return null}raycast(e,t){if(this.levels.length>0){Lr.setFromMatrixPosition(this.matrixWorld);const s=e.ray.origin.distanceTo(Lr);this.getObjectForDistance(s).raycast(e,t)}}update(e){const t=this.levels;if(t.length>1){Lr.setFromMatrixPosition(e.matrixWorld),oh.setFromMatrixPosition(this.matrixWorld);const n=Lr.distanceTo(oh)/e.zoom;t[0].object.visible=!0;let s,r;for(s=1,r=t.length;s<r;s++){let o=t[s].distance;if(t[s].object.visible&&(o-=o*t[s].hysteresis),n>=o)t[s-1].object.visible=!1,t[s].object.visible=!0;else break}for(this._currentLevel=s-1;s<r;s++)t[s].object.visible=!1}}toJSON(e){const t=super.toJSON(e);this.autoUpdate===!1&&(t.object.autoUpdate=!1),t.object.levels=[];const n=this.levels;for(let s=0,r=n.length;s<r;s++){const o=n[s];t.object.levels.push({object:o.object.uuid,distance:o.distance,hysteresis:o.hysteresis})}return t}}class Ro extends Et{constructor(e=null,t=1,n=1,s,r,o,a,c,l=Gt,h=Gt,u,d){super(null,o,a,c,l,h,s,r,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Pl extends vt{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const is=new Ze,ah=new Ze,Dr=[],lh=new Zn,Sp=new Ze,Fs=new at,Os=new Bi;class Xs extends at{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Pl(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Sp)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Zn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,is),lh.copy(e.boundingBox).applyMatrix4(is),this.boundingBox.union(lh)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Bi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,is),Os.copy(e.boundingSphere).applyMatrix4(is),this.boundingSphere.union(Os)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(e,t){const n=this.matrixWorld,s=this.count;if(Fs.geometry=this.geometry,Fs.material=this.material,Fs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Os.copy(this.boundingSphere),Os.applyMatrix4(n),e.ray.intersectsSphere(Os)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,is),ah.multiplyMatrices(n,is),Fs.matrixWorld=ah,Fs.raycast(e,Dr);for(let o=0,a=Dr.length;o<a;o++){const c=Dr[o];c.instanceId=r,c.object=this,t.push(c)}Dr.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Pl(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Ro(new Float32Array(s*this.count),s,this.count,ec,An));const r=this.morphTexture.source.data.data;let o=0;for(let l=0;l<n.length;l++)o+=n[l];const a=this.geometry.morphTargetsRelative?1:1-o,c=s*e;r[c]=a,r.set(n,c+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const fa=new R,bp=new R,wp=new Ke;class ai{constructor(e=new R(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=fa.subVectors(n,t).cross(bp.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(fa),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||wp.getNormalMatrix(e),s=this.coplanarPoint(fa).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Mi=new Bi,Ep=new se(.5,.5),Ir=new R;class lc{constructor(e=new ai,t=new ai,n=new ai,s=new ai,r=new ai,o=new ai){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Cn,n=!1){const s=this.planes,r=e.elements,o=r[0],a=r[1],c=r[2],l=r[3],h=r[4],u=r[5],d=r[6],f=r[7],m=r[8],v=r[9],g=r[10],p=r[11],M=r[12],_=r[13],x=r[14],w=r[15];if(s[0].setComponents(l-o,f-h,p-m,w-M).normalize(),s[1].setComponents(l+o,f+h,p+m,w+M).normalize(),s[2].setComponents(l+a,f+u,p+v,w+_).normalize(),s[3].setComponents(l-a,f-u,p-v,w-_).normalize(),n)s[4].setComponents(c,d,g,x).normalize(),s[5].setComponents(l-c,f-d,p-g,w-x).normalize();else if(s[4].setComponents(l-c,f-d,p-g,w-x).normalize(),t===Cn)s[5].setComponents(l+c,f+d,p+g,w+x).normalize();else if(t===mo)s[5].setComponents(c,d,g,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Mi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Mi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Mi)}intersectsSprite(e){Mi.center.set(0,0,0);const t=Ep.distanceTo(e.center);return Mi.radius=.7071067811865476+t,Mi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Mi)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(Ir.x=s.normal.x>0?e.max.x:e.min.x,Ir.y=s.normal.y>0?e.max.y:e.min.y,Ir.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Ir)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Ju extends Hi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Fe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const go=new R,xo=new R,ch=new Ze,zs=new oc,Ur=new Bi,pa=new R,hh=new R;class Tp extends ft{constructor(e=new it,t=new Ju){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)go.fromBufferAttribute(t,s-1),xo.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=go.distanceTo(xo);e.setAttribute("lineDistance",new Be(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ur.copy(n.boundingSphere),Ur.applyMatrix4(s),Ur.radius+=r,e.ray.intersectsSphere(Ur)===!1)return;ch.copy(s).invert(),zs.copy(e.ray).applyMatrix4(ch);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){const f=Math.max(0,o.start),m=Math.min(h.count,o.start+o.count);for(let v=f,g=m-1;v<g;v+=l){const p=h.getX(v),M=h.getX(v+1),_=Nr(this,e,zs,c,p,M,v);_&&t.push(_)}if(this.isLineLoop){const v=h.getX(m-1),g=h.getX(f),p=Nr(this,e,zs,c,v,g,m-1);p&&t.push(p)}}else{const f=Math.max(0,o.start),m=Math.min(d.count,o.start+o.count);for(let v=f,g=m-1;v<g;v+=l){const p=Nr(this,e,zs,c,v,v+1,v);p&&t.push(p)}if(this.isLineLoop){const v=Nr(this,e,zs,c,m-1,f,m-1);v&&t.push(v)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Nr(i,e,t,n,s,r,o){const a=i.geometry.attributes.position;if(go.fromBufferAttribute(a,s),xo.fromBufferAttribute(a,r),t.distanceSqToSegment(go,xo,pa,hh)>n)return;pa.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(pa);if(!(l<e.near||l>e.far))return{distance:l,point:hh.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}const uh=new R,dh=new R;class Ap extends Tp{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)uh.fromBufferAttribute(t,s),dh.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+uh.distanceTo(dh);e.setAttribute("lineDistance",new Be(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Cp extends Hi{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Fe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const fh=new Ze,Ll=new oc,Fr=new Bi,Or=new R;class Qu extends ft{constructor(e=new it,t=new Cp){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Fr.copy(n.boundingSphere),Fr.applyMatrix4(s),Fr.radius+=r,e.ray.intersectsSphere(Fr)===!1)return;fh.copy(s).invert(),Ll.copy(e.ray).applyMatrix4(fh);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,u=n.attributes.position;if(l!==null){const d=Math.max(0,o.start),f=Math.min(l.count,o.start+o.count);for(let m=d,v=f;m<v;m++){const g=l.getX(m);Or.fromBufferAttribute(u,g),ph(Or,g,c,s,e,t,this)}}else{const d=Math.max(0,o.start),f=Math.min(u.count,o.start+o.count);for(let m=d,v=f;m<v;m++)Or.fromBufferAttribute(u,m),ph(Or,m,c,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function ph(i,e,t,n,s,r,o){const a=Ll.distanceSqToPoint(i);if(a<t){const c=new R;Ll.closestPointToPoint(i,c),c.applyMatrix4(n);const l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class Ln extends Et{constructor(e,t,n,s,r,o,a,c,l){super(e,t,n,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class $u extends Et{constructor(e,t,n=Ui,s,r,o,a=Gt,c=Gt,l,h=er,u=1){if(h!==er&&h!==tr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:t,depth:u};super(d,s,r,o,a,c,h,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new rc(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class ed extends Et{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class qs extends it{constructor(e=1,t=1,n=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:n,radialSegments:s,heightSegments:r},t=Math.max(0,t),n=Math.max(1,Math.floor(n)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));const o=[],a=[],c=[],l=[],h=t/2,u=Math.PI/2*e,d=t,f=2*u+d,m=n*2+r,v=s+1,g=new R,p=new R;for(let M=0;M<=m;M++){let _=0,x=0,w=0,A=0;if(M<=n){const b=M/n,S=b*Math.PI/2;x=-h-e*Math.cos(S),w=e*Math.sin(S),A=-e*Math.cos(S),_=b*u}else if(M<=n+r){const b=(M-n)/r;x=-h+b*t,w=e,A=0,_=u+b*d}else{const b=(M-n-r)/n,S=b*Math.PI/2;x=h+e*Math.sin(S),w=e*Math.cos(S),A=e*Math.sin(S),_=u+d+b*u}const C=Math.max(0,Math.min(1,_/f));let P=0;M===0?P=.5/s:M===m&&(P=-.5/s);for(let b=0;b<=s;b++){const S=b/s,L=S*Math.PI*2,U=Math.sin(L),N=Math.cos(L);p.x=-w*N,p.y=x,p.z=w*U,a.push(p.x,p.y,p.z),g.set(-w*N,A,w*U),g.normalize(),c.push(g.x,g.y,g.z),l.push(S+P,C)}if(M>0){const b=(M-1)*v;for(let S=0;S<s;S++){const L=b+S,U=b+S+1,N=M*v+S,X=M*v+S+1;o.push(L,U,N),o.push(U,X,N)}}}this.setIndex(o),this.setAttribute("position",new Be(a,3)),this.setAttribute("normal",new Be(c,3)),this.setAttribute("uv",new Be(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new qs(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}}class cc extends it{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);const r=[],o=[],a=[],c=[],l=new R,h=new se;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let u=0,d=3;u<=t;u++,d+=3){const f=n+u/t*s;l.x=e*Math.cos(f),l.y=e*Math.sin(f),o.push(l.x,l.y,l.z),a.push(0,0,1),h.x=(o[d]/e+1)/2,h.y=(o[d+1]/e+1)/2,c.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new Be(o,3)),this.setAttribute("normal",new Be(a,3)),this.setAttribute("uv",new Be(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new cc(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class pn extends it{constructor(e=1,t=1,n=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};const l=this;s=Math.floor(s),r=Math.floor(r);const h=[],u=[],d=[],f=[];let m=0;const v=[],g=n/2;let p=0;M(),o===!1&&(e>0&&_(!0),t>0&&_(!1)),this.setIndex(h),this.setAttribute("position",new Be(u,3)),this.setAttribute("normal",new Be(d,3)),this.setAttribute("uv",new Be(f,2));function M(){const x=new R,w=new R;let A=0;const C=(t-e)/n;for(let P=0;P<=r;P++){const b=[],S=P/r,L=S*(t-e)+e;for(let U=0;U<=s;U++){const N=U/s,X=N*c+a,z=Math.sin(X),q=Math.cos(X);w.x=L*z,w.y=-S*n+g,w.z=L*q,u.push(w.x,w.y,w.z),x.set(z,C,q).normalize(),d.push(x.x,x.y,x.z),f.push(N,1-S),b.push(m++)}v.push(b)}for(let P=0;P<s;P++)for(let b=0;b<r;b++){const S=v[b][P],L=v[b+1][P],U=v[b+1][P+1],N=v[b][P+1];(e>0||b!==0)&&(h.push(S,L,N),A+=3),(t>0||b!==r-1)&&(h.push(L,U,N),A+=3)}l.addGroup(p,A,0),p+=A}function _(x){const w=m,A=new se,C=new R;let P=0;const b=x===!0?e:t,S=x===!0?1:-1;for(let U=1;U<=s;U++)u.push(0,g*S,0),d.push(0,S,0),f.push(.5,.5),m++;const L=m;for(let U=0;U<=s;U++){const X=U/s*c+a,z=Math.cos(X),q=Math.sin(X);C.x=b*q,C.y=g*S,C.z=b*z,u.push(C.x,C.y,C.z),d.push(0,S,0),A.x=z*.5+.5,A.y=q*.5*S+.5,f.push(A.x,A.y),m++}for(let U=0;U<s;U++){const N=w+U,X=L+U;x===!0?h.push(X,X+1,N):h.push(X+1,X,N),P+=3}l.addGroup(p,P,x===!0?1:2),p+=P}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new pn(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Po extends pn{constructor(e=1,t=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new Po(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class hc extends it{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};const r=[],o=[];a(s),l(n),h(),this.setAttribute("position",new Be(r,3)),this.setAttribute("normal",new Be(r.slice(),3)),this.setAttribute("uv",new Be(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(M){const _=new R,x=new R,w=new R;for(let A=0;A<t.length;A+=3)f(t[A+0],_),f(t[A+1],x),f(t[A+2],w),c(_,x,w,M)}function c(M,_,x,w){const A=w+1,C=[];for(let P=0;P<=A;P++){C[P]=[];const b=M.clone().lerp(x,P/A),S=_.clone().lerp(x,P/A),L=A-P;for(let U=0;U<=L;U++)U===0&&P===A?C[P][U]=b:C[P][U]=b.clone().lerp(S,U/L)}for(let P=0;P<A;P++)for(let b=0;b<2*(A-P)-1;b++){const S=Math.floor(b/2);b%2===0?(d(C[P][S+1]),d(C[P+1][S]),d(C[P][S])):(d(C[P][S+1]),d(C[P+1][S+1]),d(C[P+1][S]))}}function l(M){const _=new R;for(let x=0;x<r.length;x+=3)_.x=r[x+0],_.y=r[x+1],_.z=r[x+2],_.normalize().multiplyScalar(M),r[x+0]=_.x,r[x+1]=_.y,r[x+2]=_.z}function h(){const M=new R;for(let _=0;_<r.length;_+=3){M.x=r[_+0],M.y=r[_+1],M.z=r[_+2];const x=g(M)/2/Math.PI+.5,w=p(M)/Math.PI+.5;o.push(x,1-w)}m(),u()}function u(){for(let M=0;M<o.length;M+=6){const _=o[M+0],x=o[M+2],w=o[M+4],A=Math.max(_,x,w),C=Math.min(_,x,w);A>.9&&C<.1&&(_<.2&&(o[M+0]+=1),x<.2&&(o[M+2]+=1),w<.2&&(o[M+4]+=1))}}function d(M){r.push(M.x,M.y,M.z)}function f(M,_){const x=M*3;_.x=e[x+0],_.y=e[x+1],_.z=e[x+2]}function m(){const M=new R,_=new R,x=new R,w=new R,A=new se,C=new se,P=new se;for(let b=0,S=0;b<r.length;b+=9,S+=6){M.set(r[b+0],r[b+1],r[b+2]),_.set(r[b+3],r[b+4],r[b+5]),x.set(r[b+6],r[b+7],r[b+8]),A.set(o[S+0],o[S+1]),C.set(o[S+2],o[S+3]),P.set(o[S+4],o[S+5]),w.copy(M).add(_).add(x).divideScalar(3);const L=g(w);v(A,S+0,M,L),v(C,S+2,_,L),v(P,S+4,x,L)}}function v(M,_,x,w){w<0&&M.x===1&&(o[_]=M.x-1),x.x===0&&x.z===0&&(o[_]=w/2/Math.PI+.5)}function g(M){return Math.atan2(M.z,-M.x)}function p(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new hc(e.vertices,e.indices,e.radius,e.details)}}class In{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const n=this.getLengths();let s=0;const r=n.length;let o;t?o=t:o=e*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=n[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===o)return s/(r-1);const h=n[s],d=n[s+1]-h,f=(o-h)/d;return(s+f)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),c=t||(o.isVector2?new se:new R);return c.copy(a).sub(o).normalize(),c}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){const n=new R,s=[],r=[],o=[],a=new R,c=new Ze;for(let f=0;f<=e;f++){const m=f/e;s[f]=this.getTangentAt(m,new R)}r[0]=new R,o[0]=new R;let l=Number.MAX_VALUE;const h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),d<=l&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();const m=Math.acos(Qe(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(c.makeRotationAxis(a,m))}o[f].crossVectors(s[f],r[f])}if(t===!0){let f=Math.acos(Qe(r[0].dot(r[e]),-1,1));f/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(f=-f);for(let m=1;m<=e;m++)r[m].applyMatrix4(c.makeRotationAxis(s[m],f*m)),o[m].crossVectors(s[m],r[m])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class uc extends In{constructor(e=0,t=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(e,t=new se){const n=t,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+e*r;let c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=c-this.aX,f=l-this.aY;c=d*h-f*u+this.aX,l=d*u+f*h+this.aY}return n.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class Rp extends uc{constructor(e,t,n,s,r,o){super(e,t,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function dc(){let i=0,e=0,t=0,n=0;function s(r,o,a,c){i=r,e=a,t=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,h,u){let d=(o-r)/l-(a-r)/(l+h)+(a-o)/h,f=(a-o)/h-(c-o)/(h+u)+(c-a)/u;d*=h,f*=h,s(o,a,d,f)},calc:function(r){const o=r*r,a=o*r;return i+e*r+t*o+n*a}}}const zr=new R,ma=new dc,ga=new dc,xa=new dc;class fc extends In{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new R){const n=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e;let a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,h;this.closed||a>0?l=s[(a-1)%r]:(zr.subVectors(s[0],s[1]).add(s[0]),l=zr);const u=s[a%r],d=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(zr.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=zr),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let m=Math.pow(l.distanceToSquared(u),f),v=Math.pow(u.distanceToSquared(d),f),g=Math.pow(d.distanceToSquared(h),f);v<1e-4&&(v=1),m<1e-4&&(m=v),g<1e-4&&(g=v),ma.initNonuniformCatmullRom(l.x,u.x,d.x,h.x,m,v,g),ga.initNonuniformCatmullRom(l.y,u.y,d.y,h.y,m,v,g),xa.initNonuniformCatmullRom(l.z,u.z,d.z,h.z,m,v,g)}else this.curveType==="catmullrom"&&(ma.initCatmullRom(l.x,u.x,d.x,h.x,this.tension),ga.initCatmullRom(l.y,u.y,d.y,h.y,this.tension),xa.initCatmullRom(l.z,u.z,d.z,h.z,this.tension));return n.set(ma.calc(c),ga.calc(c),xa.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(new R().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function mh(i,e,t,n,s){const r=(n-e)*.5,o=(s-t)*.5,a=i*i,c=i*a;return(2*t-2*n+r+o)*c+(-3*t+3*n-2*r-o)*a+r*i+t}function Pp(i,e){const t=1-i;return t*t*e}function Lp(i,e){return 2*(1-i)*i*e}function Dp(i,e){return i*i*e}function Ys(i,e,t,n){return Pp(i,e)+Lp(i,t)+Dp(i,n)}function Ip(i,e){const t=1-i;return t*t*t*e}function Up(i,e){const t=1-i;return 3*t*t*i*e}function Np(i,e){return 3*(1-i)*i*i*e}function Fp(i,e){return i*i*i*e}function js(i,e,t,n,s){return Ip(i,e)+Up(i,t)+Np(i,n)+Fp(i,s)}class td extends In{constructor(e=new se,t=new se,n=new se,s=new se){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new se){const n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(js(e,s.x,r.x,o.x,a.x),js(e,s.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Op extends In{constructor(e=new R,t=new R,n=new R,s=new R){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new R){const n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(js(e,s.x,r.x,o.x,a.x),js(e,s.y,r.y,o.y,a.y),js(e,s.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class nd extends In{constructor(e=new se,t=new se){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new se){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new se){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class zp extends In{constructor(e=new R,t=new R){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new R){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new R){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class id extends In{constructor(e=new se,t=new se,n=new se){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new se){const n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(Ys(e,s.x,r.x,o.x),Ys(e,s.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class sd extends In{constructor(e=new R,t=new R,n=new R){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new R){const n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(Ys(e,s.x,r.x,o.x),Ys(e,s.y,r.y,o.y),Ys(e,s.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class pc extends In{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new se){const n=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],l=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return n.set(mh(a,c.x,l.x,h.x,u.x),mh(a,c.y,l.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(new se().fromArray(s))}return this}}var vo=Object.freeze({__proto__:null,ArcCurve:Rp,CatmullRomCurve3:fc,CubicBezierCurve:td,CubicBezierCurve3:Op,EllipseCurve:uc,LineCurve:nd,LineCurve3:zp,QuadraticBezierCurve:id,QuadraticBezierCurve3:sd,SplineCurve:pc});class Bp extends In{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new vo[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const o=s[r]-n,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,t)}r++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,c=o.getPoints(a);for(let l=0;l<c.length;l++){const h=c[l];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const s=e.curves[t];this.curves.push(new vo[s.type]().fromJSON(s))}return this}}class Dl extends Bp{constructor(e){super(),this.type="Path",this.currentPoint=new se,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new nd(this.currentPoint.clone(),new se(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){const r=new id(this.currentPoint.clone(),new se(e,t),new se(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,o){const a=new td(this.currentPoint.clone(),new se(e,t),new se(n,s),new se(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new pc(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,o){const a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+a,t+c,n,s,r,o),this}absarc(e,t,n,s,r,o){return this.absellipse(e,t,n,n,s,r,o),this}ellipse(e,t,n,s,r,o,a,c){const l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+l,t+h,n,s,r,o,a,c),this}absellipse(e,t,n,s,r,o,a,c){const l=new uc(e,t,n,s,r,o,a,c);if(this.curves.length>0){const u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);const h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class $n extends Dl{constructor(e){super(e),this.uuid=zi(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const s=e.holes[t];this.holes.push(new Dl().fromJSON(s))}return this}}function Hp(i,e,t=2){const n=e&&e.length,s=n?e[0]*t:i.length;let r=rd(i,0,s,t,!0);const o=[];if(!r||r.next===r.prev)return o;let a,c,l;if(n&&(r=Xp(i,e,r,t)),i.length>80*t){a=1/0,c=1/0;let h=-1/0,u=-1/0;for(let d=t;d<s;d+=t){const f=i[d],m=i[d+1];f<a&&(a=f),m<c&&(c=m),f>h&&(h=f),m>u&&(u=m)}l=Math.max(h-a,u-c),l=l!==0?32767/l:0}return sr(r,o,t,a,c,l,0),o}function rd(i,e,t,n,s){let r;if(s===nm(i,e,t,n)>0)for(let o=e;o<t;o+=n)r=gh(o/n|0,i[o],i[o+1],r);else for(let o=t-n;o>=e;o-=n)r=gh(o/n|0,i[o],i[o+1],r);return r&&Ss(r,r.next)&&(or(r),r=r.next),r}function Ni(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(Ss(t,t.next)||yt(t.prev,t,t.next)===0)){if(or(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function sr(i,e,t,n,s,r,o){if(!i)return;!o&&r&&Zp(i,n,s,r);let a=i;for(;i.prev!==i.next;){const c=i.prev,l=i.next;if(r?Gp(i,n,s,r):kp(i)){e.push(c.i,i.i,l.i),or(i),i=l.next,a=l.next;continue}if(i=l,i===a){o?o===1?(i=Vp(Ni(i),e),sr(i,e,t,n,s,r,2)):o===2&&Wp(i,e,t,n,s,r):sr(Ni(i),e,t,n,s,r,1);break}}}function kp(i){const e=i.prev,t=i,n=i.next;if(yt(e,t,n)>=0)return!1;const s=e.x,r=t.x,o=n.x,a=e.y,c=t.y,l=n.y,h=Math.min(s,r,o),u=Math.min(a,c,l),d=Math.max(s,r,o),f=Math.max(a,c,l);let m=n.next;for(;m!==e;){if(m.x>=h&&m.x<=d&&m.y>=u&&m.y<=f&&Hs(s,a,r,c,o,l,m.x,m.y)&&yt(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function Gp(i,e,t,n){const s=i.prev,r=i,o=i.next;if(yt(s,r,o)>=0)return!1;const a=s.x,c=r.x,l=o.x,h=s.y,u=r.y,d=o.y,f=Math.min(a,c,l),m=Math.min(h,u,d),v=Math.max(a,c,l),g=Math.max(h,u,d),p=Il(f,m,e,t,n),M=Il(v,g,e,t,n);let _=i.prevZ,x=i.nextZ;for(;_&&_.z>=p&&x&&x.z<=M;){if(_.x>=f&&_.x<=v&&_.y>=m&&_.y<=g&&_!==s&&_!==o&&Hs(a,h,c,u,l,d,_.x,_.y)&&yt(_.prev,_,_.next)>=0||(_=_.prevZ,x.x>=f&&x.x<=v&&x.y>=m&&x.y<=g&&x!==s&&x!==o&&Hs(a,h,c,u,l,d,x.x,x.y)&&yt(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;_&&_.z>=p;){if(_.x>=f&&_.x<=v&&_.y>=m&&_.y<=g&&_!==s&&_!==o&&Hs(a,h,c,u,l,d,_.x,_.y)&&yt(_.prev,_,_.next)>=0)return!1;_=_.prevZ}for(;x&&x.z<=M;){if(x.x>=f&&x.x<=v&&x.y>=m&&x.y<=g&&x!==s&&x!==o&&Hs(a,h,c,u,l,d,x.x,x.y)&&yt(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function Vp(i,e){let t=i;do{const n=t.prev,s=t.next.next;!Ss(n,s)&&ad(n,t,t.next,s)&&rr(n,s)&&rr(s,n)&&(e.push(n.i,t.i,s.i),or(t),or(t.next),t=i=s),t=t.next}while(t!==i);return Ni(t)}function Wp(i,e,t,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&$p(o,a)){let c=ld(o,a);o=Ni(o,o.next),c=Ni(c,c.next),sr(o,e,t,n,s,r,0),sr(c,e,t,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function Xp(i,e,t,n){const s=[];for(let r=0,o=e.length;r<o;r++){const a=e[r]*n,c=r<o-1?e[r+1]*n:i.length,l=rd(i,a,c,n,!1);l===l.next&&(l.steiner=!0),s.push(Qp(l))}s.sort(qp);for(let r=0;r<s.length;r++)t=Yp(s[r],t);return t}function qp(i,e){let t=i.x-e.x;if(t===0&&(t=i.y-e.y,t===0)){const n=(i.next.y-i.y)/(i.next.x-i.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=n-s}return t}function Yp(i,e){const t=jp(i,e);if(!t)return e;const n=ld(t,i);return Ni(n,n.next),Ni(t,t.next)}function jp(i,e){let t=e;const n=i.x,s=i.y;let r=-1/0,o;if(Ss(i,t))return t;do{if(Ss(i,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){const u=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(u<=n&&u>r&&(r=u,o=t.x<t.next.x?t:t.next,u===n))return o}t=t.next}while(t!==e);if(!o)return null;const a=o,c=o.x,l=o.y;let h=1/0;t=o;do{if(n>=t.x&&t.x>=c&&n!==t.x&&od(s<l?n:r,s,c,l,s<l?r:n,s,t.x,t.y)){const u=Math.abs(s-t.y)/(n-t.x);rr(t,i)&&(u<h||u===h&&(t.x>o.x||t.x===o.x&&Kp(o,t)))&&(o=t,h=u)}t=t.next}while(t!==a);return o}function Kp(i,e){return yt(i.prev,i,e.prev)<0&&yt(e.next,i,i.next)<0}function Zp(i,e,t,n){let s=i;do s.z===0&&(s.z=Il(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Jp(s)}function Jp(i){let e,t=1;do{let n=i,s;i=null;let r=null;for(e=0;n;){e++;let o=n,a=0;for(let l=0;l<t&&(a++,o=o.nextZ,!!o);l++);let c=t;for(;a>0||c>0&&o;)a!==0&&(c===0||!o||n.z<=o.z)?(s=n,n=n.nextZ,a--):(s=o,o=o.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=o}r.nextZ=null,t*=2}while(e>1);return i}function Il(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function Qp(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function od(i,e,t,n,s,r,o,a){return(s-o)*(e-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(n-a)}function Hs(i,e,t,n,s,r,o,a){return!(i===o&&e===a)&&od(i,e,t,n,s,r,o,a)}function $p(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!em(i,e)&&(rr(i,e)&&rr(e,i)&&tm(i,e)&&(yt(i.prev,i,e.prev)||yt(i,e.prev,e))||Ss(i,e)&&yt(i.prev,i,i.next)>0&&yt(e.prev,e,e.next)>0)}function yt(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function Ss(i,e){return i.x===e.x&&i.y===e.y}function ad(i,e,t,n){const s=Hr(yt(i,e,t)),r=Hr(yt(i,e,n)),o=Hr(yt(t,n,i)),a=Hr(yt(t,n,e));return!!(s!==r&&o!==a||s===0&&Br(i,t,e)||r===0&&Br(i,n,e)||o===0&&Br(t,i,n)||a===0&&Br(t,e,n))}function Br(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function Hr(i){return i>0?1:i<0?-1:0}function em(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&ad(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function rr(i,e){return yt(i.prev,i,i.next)<0?yt(i,e,i.next)>=0&&yt(i,i.prev,e)>=0:yt(i,e,i.prev)<0||yt(i,i.next,e)<0}function tm(i,e){let t=i,n=!1;const s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function ld(i,e){const t=Ul(i.i,i.x,i.y),n=Ul(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function gh(i,e,t,n){const s=Ul(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function or(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Ul(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function nm(i,e,t,n){let s=0;for(let r=e,o=t-n;r<t;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}class im{static triangulate(e,t,n=2){return Hp(e,t,n)}}class Vn{static area(e){const t=e.length;let n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return Vn.area(e)<0}static triangulateShape(e,t){const n=[],s=[],r=[];xh(e),vh(n,e);let o=e.length;t.forEach(xh);for(let c=0;c<t.length;c++)s.push(o),o+=t[c].length,vh(n,t[c]);const a=im.triangulate(n,s);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}}function xh(i){const e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function vh(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}class ur extends it{constructor(e=new $n([new se(.5,.5),new se(-.5,.5),new se(-.5,-.5),new se(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,s=[],r=[];for(let a=0,c=e.length;a<c;a++){const l=e[a];o(l)}this.setAttribute("position",new Be(s,3)),this.setAttribute("uv",new Be(r,2)),this.computeVertexNormals();function o(a){const c=[],l=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1;let d=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,m=t.bevelSize!==void 0?t.bevelSize:f-.1,v=t.bevelOffset!==void 0?t.bevelOffset:0,g=t.bevelSegments!==void 0?t.bevelSegments:3;const p=t.extrudePath,M=t.UVGenerator!==void 0?t.UVGenerator:sm;let _,x=!1,w,A,C,P;p&&(_=p.getSpacedPoints(h),x=!0,d=!1,w=p.computeFrenetFrames(h,!1),A=new R,C=new R,P=new R),d||(g=0,f=0,m=0,v=0);const b=a.extractPoints(l);let S=b.shape;const L=b.holes;if(!Vn.isClockWise(S)){S=S.reverse();for(let O=0,H=L.length;O<H;O++){const V=L[O];Vn.isClockWise(V)&&(L[O]=V.reverse())}}function N(O){const V=10000000000000001e-36;let G=O[0];for(let ne=1;ne<=O.length;ne++){const ie=ne%O.length,J=O[ie],ce=J.x-G.x,ue=J.y-G.y,E=ce*ce+ue*ue,y=Math.max(Math.abs(J.x),Math.abs(J.y),Math.abs(G.x),Math.abs(G.y)),I=V*y*y;if(E<=I){O.splice(ie,1),ne--;continue}G=J}}N(S),L.forEach(N);const X=L.length,z=S;for(let O=0;O<X;O++){const H=L[O];S=S.concat(H)}function q(O,H,V){return H||console.error("THREE.ExtrudeGeometry: vec does not exist"),O.clone().addScaledVector(H,V)}const ee=S.length;function W(O,H,V){let G,ne,ie;const J=O.x-H.x,ce=O.y-H.y,ue=V.x-O.x,E=V.y-O.y,y=J*J+ce*ce,I=J*E-ce*ue;if(Math.abs(I)>Number.EPSILON){const Y=Math.sqrt(y),te=Math.sqrt(ue*ue+E*E),j=H.x-ce/Y,Ae=H.y+J/Y,pe=V.x-E/te,Ee=V.y+ue/te,Re=((pe-j)*E-(Ee-Ae)*ue)/(J*E-ce*ue);G=j+J*Re-O.x,ne=Ae+ce*Re-O.y;const de=G*G+ne*ne;if(de<=2)return new se(G,ne);ie=Math.sqrt(de/2)}else{let Y=!1;J>Number.EPSILON?ue>Number.EPSILON&&(Y=!0):J<-Number.EPSILON?ue<-Number.EPSILON&&(Y=!0):Math.sign(ce)===Math.sign(E)&&(Y=!0),Y?(G=-ce,ne=J,ie=Math.sqrt(y)):(G=J,ne=ce,ie=Math.sqrt(y/2))}return new se(G/ie,ne/ie)}const le=[];for(let O=0,H=z.length,V=H-1,G=O+1;O<H;O++,V++,G++)V===H&&(V=0),G===H&&(G=0),le[O]=W(z[O],z[V],z[G]);const xe=[];let ae,Ne=le.concat();for(let O=0,H=X;O<H;O++){const V=L[O];ae=[];for(let G=0,ne=V.length,ie=ne-1,J=G+1;G<ne;G++,ie++,J++)ie===ne&&(ie=0),J===ne&&(J=0),ae[G]=W(V[G],V[ie],V[J]);xe.push(ae),Ne=Ne.concat(ae)}let ze;if(g===0)ze=Vn.triangulateShape(z,L);else{const O=[],H=[];for(let V=0;V<g;V++){const G=V/g,ne=f*Math.cos(G*Math.PI/2),ie=m*Math.sin(G*Math.PI/2)+v;for(let J=0,ce=z.length;J<ce;J++){const ue=q(z[J],le[J],ie);Le(ue.x,ue.y,-ne),G===0&&O.push(ue)}for(let J=0,ce=X;J<ce;J++){const ue=L[J];ae=xe[J];const E=[];for(let y=0,I=ue.length;y<I;y++){const Y=q(ue[y],ae[y],ie);Le(Y.x,Y.y,-ne),G===0&&E.push(Y)}G===0&&H.push(E)}}ze=Vn.triangulateShape(O,H)}const $e=ze.length,qe=m+v;for(let O=0;O<ee;O++){const H=d?q(S[O],Ne[O],qe):S[O];x?(C.copy(w.normals[0]).multiplyScalar(H.x),A.copy(w.binormals[0]).multiplyScalar(H.y),P.copy(_[0]).add(C).add(A),Le(P.x,P.y,P.z)):Le(H.x,H.y,0)}for(let O=1;O<=h;O++)for(let H=0;H<ee;H++){const V=d?q(S[H],Ne[H],qe):S[H];x?(C.copy(w.normals[O]).multiplyScalar(V.x),A.copy(w.binormals[O]).multiplyScalar(V.y),P.copy(_[O]).add(C).add(A),Le(P.x,P.y,P.z)):Le(V.x,V.y,u/h*O)}for(let O=g-1;O>=0;O--){const H=O/g,V=f*Math.cos(H*Math.PI/2),G=m*Math.sin(H*Math.PI/2)+v;for(let ne=0,ie=z.length;ne<ie;ne++){const J=q(z[ne],le[ne],G);Le(J.x,J.y,u+V)}for(let ne=0,ie=L.length;ne<ie;ne++){const J=L[ne];ae=xe[ne];for(let ce=0,ue=J.length;ce<ue;ce++){const E=q(J[ce],ae[ce],G);x?Le(E.x,E.y+_[h-1].y,_[h-1].x+V):Le(E.x,E.y,u+V)}}}Q(),re();function Q(){const O=s.length/3;if(d){let H=0,V=ee*H;for(let G=0;G<$e;G++){const ne=ze[G];Te(ne[2]+V,ne[1]+V,ne[0]+V)}H=h+g*2,V=ee*H;for(let G=0;G<$e;G++){const ne=ze[G];Te(ne[0]+V,ne[1]+V,ne[2]+V)}}else{for(let H=0;H<$e;H++){const V=ze[H];Te(V[2],V[1],V[0])}for(let H=0;H<$e;H++){const V=ze[H];Te(V[0]+ee*h,V[1]+ee*h,V[2]+ee*h)}}n.addGroup(O,s.length/3-O,0)}function re(){const O=s.length/3;let H=0;_e(z,H),H+=z.length;for(let V=0,G=L.length;V<G;V++){const ne=L[V];_e(ne,H),H+=ne.length}n.addGroup(O,s.length/3-O,1)}function _e(O,H){let V=O.length;for(;--V>=0;){const G=V;let ne=V-1;ne<0&&(ne=O.length-1);for(let ie=0,J=h+g*2;ie<J;ie++){const ce=ee*ie,ue=ee*(ie+1),E=H+G+ce,y=H+ne+ce,I=H+ne+ue,Y=H+G+ue;Ie(E,y,I,Y)}}}function Le(O,H,V){c.push(O),c.push(H),c.push(V)}function Te(O,H,V){tt(O),tt(H),tt(V);const G=s.length/3,ne=M.generateTopUV(n,s,G-3,G-2,G-1);D(ne[0]),D(ne[1]),D(ne[2])}function Ie(O,H,V,G){tt(O),tt(H),tt(G),tt(H),tt(V),tt(G);const ne=s.length/3,ie=M.generateSideWallUV(n,s,ne-6,ne-3,ne-2,ne-1);D(ie[0]),D(ie[1]),D(ie[3]),D(ie[1]),D(ie[2]),D(ie[3])}function tt(O){s.push(c[O*3+0]),s.push(c[O*3+1]),s.push(c[O*3+2])}function D(O){r.push(O.x),r.push(O.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return rm(t,n,e)}static fromJSON(e,t){const n=[];for(let r=0,o=e.shapes.length;r<o;r++){const a=t[e.shapes[r]];n.push(a)}const s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new vo[s.type]().fromJSON(s)),new ur(n,e.options)}}const sm={generateTopUV:function(i,e,t,n,s){const r=e[t*3],o=e[t*3+1],a=e[n*3],c=e[n*3+1],l=e[s*3],h=e[s*3+1];return[new se(r,o),new se(a,c),new se(l,h)]},generateSideWallUV:function(i,e,t,n,s,r){const o=e[t*3],a=e[t*3+1],c=e[t*3+2],l=e[n*3],h=e[n*3+1],u=e[n*3+2],d=e[s*3],f=e[s*3+1],m=e[s*3+2],v=e[r*3],g=e[r*3+1],p=e[r*3+2];return Math.abs(a-h)<Math.abs(o-l)?[new se(o,1-c),new se(l,1-u),new se(d,1-m),new se(v,1-p)]:[new se(a,1-c),new se(h,1-u),new se(f,1-m),new se(g,1-p)]}};function rm(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){const r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class Lo extends it{constructor(e=[new se(0,-.5),new se(.5,0),new se(0,.5)],t=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:s},t=Math.floor(t),s=Qe(s,0,Math.PI*2);const r=[],o=[],a=[],c=[],l=[],h=1/t,u=new R,d=new se,f=new R,m=new R,v=new R;let g=0,p=0;for(let M=0;M<=e.length-1;M++)switch(M){case 0:g=e[M+1].x-e[M].x,p=e[M+1].y-e[M].y,f.x=p*1,f.y=-g,f.z=p*0,v.copy(f),f.normalize(),c.push(f.x,f.y,f.z);break;case e.length-1:c.push(v.x,v.y,v.z);break;default:g=e[M+1].x-e[M].x,p=e[M+1].y-e[M].y,f.x=p*1,f.y=-g,f.z=p*0,m.copy(f),f.x+=v.x,f.y+=v.y,f.z+=v.z,f.normalize(),c.push(f.x,f.y,f.z),v.copy(m)}for(let M=0;M<=t;M++){const _=n+M*h*s,x=Math.sin(_),w=Math.cos(_);for(let A=0;A<=e.length-1;A++){u.x=e[A].x*x,u.y=e[A].y,u.z=e[A].x*w,o.push(u.x,u.y,u.z),d.x=M/t,d.y=A/(e.length-1),a.push(d.x,d.y);const C=c[3*A+0]*x,P=c[3*A+1],b=c[3*A+0]*w;l.push(C,P,b)}}for(let M=0;M<t;M++)for(let _=0;_<e.length-1;_++){const x=_+M*e.length,w=x,A=x+e.length,C=x+e.length+1,P=x+1;r.push(w,A,P),r.push(C,P,A)}this.setIndex(r),this.setAttribute("position",new Be(o,3)),this.setAttribute("uv",new Be(a,2)),this.setAttribute("normal",new Be(l,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Lo(e.points,e.segments,e.phiStart,e.phiLength)}}class Pi extends hc{constructor(e=1,t=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Pi(e.radius,e.detail)}}class Wt extends it{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const r=e/2,o=t/2,a=Math.floor(n),c=Math.floor(s),l=a+1,h=c+1,u=e/a,d=t/c,f=[],m=[],v=[],g=[];for(let p=0;p<h;p++){const M=p*d-o;for(let _=0;_<l;_++){const x=_*u-r;m.push(x,-M,0),v.push(0,0,1),g.push(_/a),g.push(1-p/c)}}for(let p=0;p<c;p++)for(let M=0;M<a;M++){const _=M+l*p,x=M+l*(p+1),w=M+1+l*(p+1),A=M+1+l*p;f.push(_,x,A),f.push(x,w,A)}this.setIndex(f),this.setAttribute("position",new Be(m,3)),this.setAttribute("normal",new Be(v,3)),this.setAttribute("uv",new Be(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Wt(e.width,e.height,e.widthSegments,e.heightSegments)}}class mc extends it{constructor(e=.5,t=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);const a=[],c=[],l=[],h=[];let u=e;const d=(t-e)/s,f=new R,m=new se;for(let v=0;v<=s;v++){for(let g=0;g<=n;g++){const p=r+g/n*o;f.x=u*Math.cos(p),f.y=u*Math.sin(p),c.push(f.x,f.y,f.z),l.push(0,0,1),m.x=(f.x/t+1)/2,m.y=(f.y/t+1)/2,h.push(m.x,m.y)}u+=d}for(let v=0;v<s;v++){const g=v*(n+1);for(let p=0;p<n;p++){const M=p+g,_=M,x=M+n+1,w=M+n+2,A=M+1;a.push(_,x,A),a.push(x,w,A)}}this.setIndex(a),this.setAttribute("position",new Be(c,3)),this.setAttribute("normal",new Be(l,3)),this.setAttribute("uv",new Be(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new mc(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class pi extends it{constructor(e=new $n([new se(0,.5),new se(-.5,-.5),new se(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const n=[],s=[],r=[],o=[];let a=0,c=0;if(Array.isArray(e)===!1)l(e);else for(let h=0;h<e.length;h++)l(e[h]),this.addGroup(a,c,h),a+=c,c=0;this.setIndex(n),this.setAttribute("position",new Be(s,3)),this.setAttribute("normal",new Be(r,3)),this.setAttribute("uv",new Be(o,2));function l(h){const u=s.length/3,d=h.extractPoints(t);let f=d.shape;const m=d.holes;Vn.isClockWise(f)===!1&&(f=f.reverse());for(let g=0,p=m.length;g<p;g++){const M=m[g];Vn.isClockWise(M)===!0&&(m[g]=M.reverse())}const v=Vn.triangulateShape(f,m);for(let g=0,p=m.length;g<p;g++){const M=m[g];f=f.concat(M)}for(let g=0,p=f.length;g<p;g++){const M=f[g];s.push(M.x,M.y,0),r.push(0,0,1),o.push(M.x,M.y)}for(let g=0,p=v.length;g<p;g++){const M=v[g],_=M[0]+u,x=M[1]+u,w=M[2]+u;n.push(_,x,w),c+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes;return om(t,e)}static fromJSON(e,t){const n=[];for(let s=0,r=e.shapes.length;s<r;s++){const o=t[e.shapes[s]];n.push(o)}return new pi(n,e.curveSegments)}}function om(i,e){if(e.shapes=[],Array.isArray(i))for(let t=0,n=i.length;t<n;t++){const s=i[t];e.shapes.push(s.uuid)}else e.shapes.push(i.uuid);return e}class Zt extends it{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const c=Math.min(o+a,Math.PI);let l=0;const h=[],u=new R,d=new R,f=[],m=[],v=[],g=[];for(let p=0;p<=n;p++){const M=[],_=p/n;let x=0;p===0&&o===0?x=.5/t:p===n&&c===Math.PI&&(x=-.5/t);for(let w=0;w<=t;w++){const A=w/t;u.x=-e*Math.cos(s+A*r)*Math.sin(o+_*a),u.y=e*Math.cos(o+_*a),u.z=e*Math.sin(s+A*r)*Math.sin(o+_*a),m.push(u.x,u.y,u.z),d.copy(u).normalize(),v.push(d.x,d.y,d.z),g.push(A+x,1-_),M.push(l++)}h.push(M)}for(let p=0;p<n;p++)for(let M=0;M<t;M++){const _=h[p][M+1],x=h[p][M],w=h[p+1][M],A=h[p+1][M+1];(p!==0||o>0)&&f.push(_,x,A),(p!==n-1||c<Math.PI)&&f.push(x,w,A)}this.setIndex(f),this.setAttribute("position",new Be(m,3)),this.setAttribute("normal",new Be(v,3)),this.setAttribute("uv",new Be(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Zt(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Dn extends it{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);const o=[],a=[],c=[],l=[],h=new R,u=new R,d=new R;for(let f=0;f<=n;f++)for(let m=0;m<=s;m++){const v=m/s*r,g=f/n*Math.PI*2;u.x=(e+t*Math.cos(g))*Math.cos(v),u.y=(e+t*Math.cos(g))*Math.sin(v),u.z=t*Math.sin(g),a.push(u.x,u.y,u.z),h.x=e*Math.cos(v),h.y=e*Math.sin(v),d.subVectors(u,h).normalize(),c.push(d.x,d.y,d.z),l.push(m/s),l.push(f/n)}for(let f=1;f<=n;f++)for(let m=1;m<=s;m++){const v=(s+1)*f+m-1,g=(s+1)*(f-1)+m-1,p=(s+1)*(f-1)+m,M=(s+1)*f+m;o.push(v,g,M),o.push(g,p,M)}this.setIndex(o),this.setAttribute("position",new Be(a,3)),this.setAttribute("normal",new Be(c,3)),this.setAttribute("uv",new Be(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Dn(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class gc extends it{constructor(e=new sd(new R(-1,-1,0),new R(-1,1,0),new R(1,1,0)),t=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:s,closed:r};const o=e.computeFrenetFrames(t,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new R,c=new R,l=new se;let h=new R;const u=[],d=[],f=[],m=[];v(),this.setIndex(m),this.setAttribute("position",new Be(u,3)),this.setAttribute("normal",new Be(d,3)),this.setAttribute("uv",new Be(f,2));function v(){for(let _=0;_<t;_++)g(_);g(r===!1?t:0),M(),p()}function g(_){h=e.getPointAt(_/t,h);const x=o.normals[_],w=o.binormals[_];for(let A=0;A<=s;A++){const C=A/s*Math.PI*2,P=Math.sin(C),b=-Math.cos(C);c.x=b*x.x+P*w.x,c.y=b*x.y+P*w.y,c.z=b*x.z+P*w.z,c.normalize(),d.push(c.x,c.y,c.z),a.x=h.x+n*c.x,a.y=h.y+n*c.y,a.z=h.z+n*c.z,u.push(a.x,a.y,a.z)}}function p(){for(let _=1;_<=t;_++)for(let x=1;x<=s;x++){const w=(s+1)*(_-1)+(x-1),A=(s+1)*_+(x-1),C=(s+1)*_+x,P=(s+1)*(_-1)+x;m.push(w,A,P),m.push(A,C,P)}}function M(){for(let _=0;_<=t;_++)for(let x=0;x<=s;x++)l.x=_/t,l.y=x/s,f.push(l.x,l.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new gc(new vo[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class am extends xt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class wt extends Hi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Fe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Fe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Hu,this.normalScale=new se(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $t,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class lm extends Hi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=bf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class cm extends Hi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const va={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class hm{constructor(e,t,n){const s=this;let r=!1,o=0,a=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.abortController=new AbortController,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){const u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=l.length;u<d;u+=2){const f=l[u],m=l[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return m}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}}const um=new hm;class xc{constructor(e){this.manager=e!==void 0?e:um,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}xc.DEFAULT_MATERIAL_NAME="__DEFAULT";const ss=new WeakMap;class dm extends xc{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=va.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0);else{let u=ss.get(o);u===void 0&&(u=[],ss.set(o,u)),u.push({onLoad:t,onError:s})}return o}const a=nr("img");function c(){h(),t&&t(this);const u=ss.get(this)||[];for(let d=0;d<u.length;d++){const f=u[d];f.onLoad&&f.onLoad(this)}ss.delete(this),r.manager.itemEnd(e)}function l(u){h(),s&&s(u),va.remove(`image:${e}`);const d=ss.get(this)||[];for(let f=0;f<d.length;f++){const m=d[f];m.onError&&m.onError(u)}ss.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),va.add(`image:${e}`,a),r.manager.itemStart(e),a.src=e,a}}class fm extends xc{constructor(e){super(e)}load(e,t,n,s){const r=new Et,o=new dm(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}}class Do extends ft{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Fe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class pm extends Do{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ft.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Fe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const _a=new Ze,_h=new R,Mh=new R;class vc{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new se(512,512),this.mapType=Pn,this.map=null,this.mapPass=null,this.matrix=new Ze,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new lc,this._frameExtents=new se(1,1),this._viewportCount=1,this._viewports=[new rt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;_h.setFromMatrixPosition(e.matrixWorld),t.position.copy(_h),Mh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Mh),t.updateMatrixWorld(),_a.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(_a,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(_a)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class mm extends vc{constructor(){super(new zt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,n=Ms*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class gm extends Do{constructor(e,t,n=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(ft.DEFAULT_UP),this.updateMatrix(),this.target=new ft,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new mm}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const yh=new Ze,Bs=new R,Ma=new R;class xm extends vc{constructor(){super(new zt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new se(4,2),this._viewportCount=6,this._viewports=[new rt(2,1,1,1),new rt(0,1,1,1),new rt(3,1,1,1),new rt(1,1,1,1),new rt(3,0,1,1),new rt(1,0,1,1)],this._cubeDirections=[new R(1,0,0),new R(-1,0,0),new R(0,0,1),new R(0,0,-1),new R(0,1,0),new R(0,-1,0)],this._cubeUps=[new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,0,1),new R(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,s=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Bs.setFromMatrixPosition(e.matrixWorld),n.position.copy(Bs),Ma.copy(n.position),Ma.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Ma),n.updateMatrixWorld(),s.makeTranslation(-Bs.x,-Bs.y,-Bs.z),yh.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(yh,n.coordinateSystem,n.reversedDepth)}}class cd extends Do{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new xm}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class _c extends Ku{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-e,o=n+e,a=s+t,c=s-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class vm extends vc{constructor(){super(new _c(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Sh extends Do{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ft.DEFAULT_UP),this.updateMatrix(),this.target=new ft,this.shadow=new vm}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class _m extends it{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}class Mm extends zt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class ym{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function bh(i,e,t,n){const s=Sm(n);switch(t){case Ou:return i*e;case ec:return i*e/s.components*s.byteLength;case tc:return i*e/s.components*s.byteLength;case Bu:return i*e*2/s.components*s.byteLength;case nc:return i*e*2/s.components*s.byteLength;case zu:return i*e*3/s.components*s.byteLength;case on:return i*e*4/s.components*s.byteLength;case ic:return i*e*4/s.components*s.byteLength;case to:case no:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case io:case so:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case il:case rl:return Math.max(i,16)*Math.max(e,8)/4;case nl:case sl:return Math.max(i,8)*Math.max(e,8)/2;case ol:case al:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case ll:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case cl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case hl:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case ul:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case dl:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case fl:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case pl:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case ml:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case gl:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case xl:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case vl:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case _l:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Ml:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case yl:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Sl:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case bl:case wl:case El:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Tl:case Al:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Cl:case Rl:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Sm(i){switch(i){case Pn:case Iu:return{byteLength:1,components:1};case Qs:case Uu:case bn:return{byteLength:2,components:1};case Ql:case $l:return{byteLength:2,components:4};case Ui:case Jl:case An:return{byteLength:4,components:1};case Nu:case Fu:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Kl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Kl);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function hd(){let i=null,e=!1,t=null,n=null;function s(r,o){t(r,o),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function bm(i){const e=new WeakMap;function t(a,c){const l=a.array,h=a.usage,u=l.byteLength,d=i.createBuffer();i.bindBuffer(c,d),i.bufferData(c,l,h),a.onUploadCallback();let f;if(l instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)f=i.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=i.SHORT;else if(l instanceof Uint32Array)f=i.UNSIGNED_INT;else if(l instanceof Int32Array)f=i.INT;else if(l instanceof Int8Array)f=i.BYTE;else if(l instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,c,l){const h=c.array,u=c.updateRanges;if(i.bindBuffer(l,a),u.length===0)i.bufferSubData(l,0,h);else{u.sort((f,m)=>f.start-m.start);let d=0;for(let f=1;f<u.length;f++){const m=u[d],v=u[f];v.start<=m.start+m.count+1?m.count=Math.max(m.count,v.start+v.count-m.start):(++d,u[d]=v)}u.length=d+1;for(let f=0,m=u.length;f<m;f++){const v=u[f];i.bufferSubData(l,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=e.get(a);c&&(i.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}var wm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Em=`#ifdef USE_ALPHAHASH
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
#endif`,Tm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Am=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Cm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Rm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Pm=`#ifdef USE_AOMAP
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
#endif`,Lm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Dm=`#ifdef USE_BATCHING
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
#endif`,Im=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Um=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Nm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Fm=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Om=`#ifdef USE_IRIDESCENCE
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
#endif`,zm=`#ifdef USE_BUMPMAP
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
#endif`,Bm=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Hm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,km=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Gm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Vm=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Wm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Xm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,qm=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Ym=`#define PI 3.141592653589793
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
} // validated`,jm=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Km=`vec3 transformedNormal = objectNormal;
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
#endif`,Zm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Jm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Qm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,$m=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,e0="gl_FragColor = linearToOutputTexel( gl_FragColor );",t0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,n0=`#ifdef USE_ENVMAP
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
#endif`,i0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,s0=`#ifdef USE_ENVMAP
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
#endif`,r0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,o0=`#ifdef USE_ENVMAP
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
#endif`,a0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,l0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,c0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,h0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,u0=`#ifdef USE_GRADIENTMAP
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
}`,d0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,f0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,p0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,m0=`uniform bool receiveShadow;
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
#endif`,g0=`#ifdef USE_ENVMAP
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
#endif`,x0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,v0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,_0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,M0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,y0=`PhysicalMaterial material;
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
#endif`,S0=`struct PhysicalMaterial {
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
}`,b0=`
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
#endif`,w0=`#if defined( RE_IndirectDiffuse )
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
#endif`,E0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,T0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,A0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,C0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,R0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,P0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,L0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,D0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,I0=`#if defined( USE_POINTS_UV )
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
#endif`,U0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,N0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,F0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,O0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,z0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,B0=`#ifdef USE_MORPHTARGETS
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
#endif`,H0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,k0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,G0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,V0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,W0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,X0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,q0=`#ifdef USE_NORMALMAP
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
#endif`,Y0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,j0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,K0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Z0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,J0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Q0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,$0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,eg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,tg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ng=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ig=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,sg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,rg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,og=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ag=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,lg=`float getShadowMask() {
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
}`,cg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,hg=`#ifdef USE_SKINNING
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
#endif`,ug=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,dg=`#ifdef USE_SKINNING
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
#endif`,fg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,pg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,mg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,gg=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,xg=`#ifdef USE_TRANSMISSION
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
#endif`,vg=`#ifdef USE_TRANSMISSION
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
#endif`,_g=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Mg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,yg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Sg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const bg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,wg=`uniform sampler2D t2D;
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
}`,Eg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Tg=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Ag=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Cg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Rg=`#include <common>
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
}`,Pg=`#if DEPTH_PACKING == 3200
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
}`,Lg=`#define DISTANCE
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
}`,Dg=`#define DISTANCE
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
}`,Ig=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ug=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ng=`uniform float scale;
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
}`,Fg=`uniform vec3 diffuse;
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
}`,Og=`#include <common>
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
}`,zg=`uniform vec3 diffuse;
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
}`,Bg=`#define LAMBERT
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
}`,Hg=`#define LAMBERT
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
}`,kg=`#define MATCAP
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
}`,Gg=`#define MATCAP
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
}`,Vg=`#define NORMAL
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
}`,Wg=`#define NORMAL
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
}`,Xg=`#define PHONG
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
}`,qg=`#define PHONG
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
}`,Yg=`#define STANDARD
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
}`,jg=`#define STANDARD
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
}`,Kg=`#define TOON
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
}`,Zg=`#define TOON
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
}`,Jg=`uniform float size;
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
}`,Qg=`uniform vec3 diffuse;
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
}`,$g=`#include <common>
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
}`,e1=`uniform vec3 color;
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
}`,t1=`uniform float rotation;
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
}`,n1=`uniform vec3 diffuse;
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
}`,Je={alphahash_fragment:wm,alphahash_pars_fragment:Em,alphamap_fragment:Tm,alphamap_pars_fragment:Am,alphatest_fragment:Cm,alphatest_pars_fragment:Rm,aomap_fragment:Pm,aomap_pars_fragment:Lm,batching_pars_vertex:Dm,batching_vertex:Im,begin_vertex:Um,beginnormal_vertex:Nm,bsdfs:Fm,iridescence_fragment:Om,bumpmap_pars_fragment:zm,clipping_planes_fragment:Bm,clipping_planes_pars_fragment:Hm,clipping_planes_pars_vertex:km,clipping_planes_vertex:Gm,color_fragment:Vm,color_pars_fragment:Wm,color_pars_vertex:Xm,color_vertex:qm,common:Ym,cube_uv_reflection_fragment:jm,defaultnormal_vertex:Km,displacementmap_pars_vertex:Zm,displacementmap_vertex:Jm,emissivemap_fragment:Qm,emissivemap_pars_fragment:$m,colorspace_fragment:e0,colorspace_pars_fragment:t0,envmap_fragment:n0,envmap_common_pars_fragment:i0,envmap_pars_fragment:s0,envmap_pars_vertex:r0,envmap_physical_pars_fragment:g0,envmap_vertex:o0,fog_vertex:a0,fog_pars_vertex:l0,fog_fragment:c0,fog_pars_fragment:h0,gradientmap_pars_fragment:u0,lightmap_pars_fragment:d0,lights_lambert_fragment:f0,lights_lambert_pars_fragment:p0,lights_pars_begin:m0,lights_toon_fragment:x0,lights_toon_pars_fragment:v0,lights_phong_fragment:_0,lights_phong_pars_fragment:M0,lights_physical_fragment:y0,lights_physical_pars_fragment:S0,lights_fragment_begin:b0,lights_fragment_maps:w0,lights_fragment_end:E0,logdepthbuf_fragment:T0,logdepthbuf_pars_fragment:A0,logdepthbuf_pars_vertex:C0,logdepthbuf_vertex:R0,map_fragment:P0,map_pars_fragment:L0,map_particle_fragment:D0,map_particle_pars_fragment:I0,metalnessmap_fragment:U0,metalnessmap_pars_fragment:N0,morphinstance_vertex:F0,morphcolor_vertex:O0,morphnormal_vertex:z0,morphtarget_pars_vertex:B0,morphtarget_vertex:H0,normal_fragment_begin:k0,normal_fragment_maps:G0,normal_pars_fragment:V0,normal_pars_vertex:W0,normal_vertex:X0,normalmap_pars_fragment:q0,clearcoat_normal_fragment_begin:Y0,clearcoat_normal_fragment_maps:j0,clearcoat_pars_fragment:K0,iridescence_pars_fragment:Z0,opaque_fragment:J0,packing:Q0,premultiplied_alpha_fragment:$0,project_vertex:eg,dithering_fragment:tg,dithering_pars_fragment:ng,roughnessmap_fragment:ig,roughnessmap_pars_fragment:sg,shadowmap_pars_fragment:rg,shadowmap_pars_vertex:og,shadowmap_vertex:ag,shadowmask_pars_fragment:lg,skinbase_vertex:cg,skinning_pars_vertex:hg,skinning_vertex:ug,skinnormal_vertex:dg,specularmap_fragment:fg,specularmap_pars_fragment:pg,tonemapping_fragment:mg,tonemapping_pars_fragment:gg,transmission_fragment:xg,transmission_pars_fragment:vg,uv_pars_fragment:_g,uv_pars_vertex:Mg,uv_vertex:yg,worldpos_vertex:Sg,background_vert:bg,background_frag:wg,backgroundCube_vert:Eg,backgroundCube_frag:Tg,cube_vert:Ag,cube_frag:Cg,depth_vert:Rg,depth_frag:Pg,distanceRGBA_vert:Lg,distanceRGBA_frag:Dg,equirect_vert:Ig,equirect_frag:Ug,linedashed_vert:Ng,linedashed_frag:Fg,meshbasic_vert:Og,meshbasic_frag:zg,meshlambert_vert:Bg,meshlambert_frag:Hg,meshmatcap_vert:kg,meshmatcap_frag:Gg,meshnormal_vert:Vg,meshnormal_frag:Wg,meshphong_vert:Xg,meshphong_frag:qg,meshphysical_vert:Yg,meshphysical_frag:jg,meshtoon_vert:Kg,meshtoon_frag:Zg,points_vert:Jg,points_frag:Qg,shadow_vert:$g,shadow_frag:e1,sprite_vert:t1,sprite_frag:n1},ye={common:{diffuse:{value:new Fe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ke},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ke}},envmap:{envMap:{value:null},envMapRotation:{value:new Ke},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ke}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ke}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ke},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ke},normalScale:{value:new se(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ke},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ke}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ke}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ke}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Fe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Fe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0},uvTransform:{value:new Ke}},sprite:{diffuse:{value:new Fe(16777215)},opacity:{value:1},center:{value:new se(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ke},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0}}},En={basic:{uniforms:Nt([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.fog]),vertexShader:Je.meshbasic_vert,fragmentShader:Je.meshbasic_frag},lambert:{uniforms:Nt([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new Fe(0)}}]),vertexShader:Je.meshlambert_vert,fragmentShader:Je.meshlambert_frag},phong:{uniforms:Nt([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new Fe(0)},specular:{value:new Fe(1118481)},shininess:{value:30}}]),vertexShader:Je.meshphong_vert,fragmentShader:Je.meshphong_frag},standard:{uniforms:Nt([ye.common,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.roughnessmap,ye.metalnessmap,ye.fog,ye.lights,{emissive:{value:new Fe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Je.meshphysical_vert,fragmentShader:Je.meshphysical_frag},toon:{uniforms:Nt([ye.common,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.gradientmap,ye.fog,ye.lights,{emissive:{value:new Fe(0)}}]),vertexShader:Je.meshtoon_vert,fragmentShader:Je.meshtoon_frag},matcap:{uniforms:Nt([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,{matcap:{value:null}}]),vertexShader:Je.meshmatcap_vert,fragmentShader:Je.meshmatcap_frag},points:{uniforms:Nt([ye.points,ye.fog]),vertexShader:Je.points_vert,fragmentShader:Je.points_frag},dashed:{uniforms:Nt([ye.common,ye.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Je.linedashed_vert,fragmentShader:Je.linedashed_frag},depth:{uniforms:Nt([ye.common,ye.displacementmap]),vertexShader:Je.depth_vert,fragmentShader:Je.depth_frag},normal:{uniforms:Nt([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,{opacity:{value:1}}]),vertexShader:Je.meshnormal_vert,fragmentShader:Je.meshnormal_frag},sprite:{uniforms:Nt([ye.sprite,ye.fog]),vertexShader:Je.sprite_vert,fragmentShader:Je.sprite_frag},background:{uniforms:{uvTransform:{value:new Ke},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Je.background_vert,fragmentShader:Je.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ke}},vertexShader:Je.backgroundCube_vert,fragmentShader:Je.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Je.cube_vert,fragmentShader:Je.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Je.equirect_vert,fragmentShader:Je.equirect_frag},distanceRGBA:{uniforms:Nt([ye.common,ye.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Je.distanceRGBA_vert,fragmentShader:Je.distanceRGBA_frag},shadow:{uniforms:Nt([ye.lights,ye.fog,{color:{value:new Fe(0)},opacity:{value:1}}]),vertexShader:Je.shadow_vert,fragmentShader:Je.shadow_frag}};En.physical={uniforms:Nt([En.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ke},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ke},clearcoatNormalScale:{value:new se(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ke},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ke},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ke},sheen:{value:0},sheenColor:{value:new Fe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ke},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ke},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ke},transmissionSamplerSize:{value:new se},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ke},attenuationDistance:{value:0},attenuationColor:{value:new Fe(0)},specularColor:{value:new Fe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ke},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ke},anisotropyVector:{value:new se},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ke}}]),vertexShader:Je.meshphysical_vert,fragmentShader:Je.meshphysical_frag};const kr={r:0,b:0,g:0},yi=new $t,i1=new Ze;function s1(i,e,t,n,s,r,o){const a=new Fe(0);let c=r===!0?0:1,l,h,u=null,d=0,f=null;function m(_){let x=_.isScene===!0?_.background:null;return x&&x.isTexture&&(x=(_.backgroundBlurriness>0?t:e).get(x)),x}function v(_){let x=!1;const w=m(_);w===null?p(a,c):w&&w.isColor&&(p(w,1),x=!0);const A=i.xr.getEnvironmentBlendMode();A==="additive"?n.buffers.color.setClear(0,0,0,1,o):A==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function g(_,x){const w=m(x);w&&(w.isCubeTexture||w.mapping===Co)?(h===void 0&&(h=new at(new an(1,1,1),new xt({name:"BackgroundCubeMaterial",uniforms:ys(En.backgroundCube.uniforms),vertexShader:En.backgroundCube.vertexShader,fragmentShader:En.backgroundCube.fragmentShader,side:kt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(A,C,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),yi.copy(x.backgroundRotation),yi.x*=-1,yi.y*=-1,yi.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(yi.y*=-1,yi.z*=-1),h.material.uniforms.envMap.value=w,h.material.uniforms.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(i1.makeRotationFromEuler(yi)),h.material.toneMapped=nt.getTransfer(w.colorSpace)!==lt,(u!==w||d!==w.version||f!==i.toneMapping)&&(h.material.needsUpdate=!0,u=w,d=w.version,f=i.toneMapping),h.layers.enableAll(),_.unshift(h,h.geometry,h.material,0,0,null)):w&&w.isTexture&&(l===void 0&&(l=new at(new Wt(2,2),new xt({name:"BackgroundMaterial",uniforms:ys(En.background.uniforms),vertexShader:En.background.vertexShader,fragmentShader:En.background.fragmentShader,side:Kn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=w,l.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,l.material.toneMapped=nt.getTransfer(w.colorSpace)!==lt,w.matrixAutoUpdate===!0&&w.updateMatrix(),l.material.uniforms.uvTransform.value.copy(w.matrix),(u!==w||d!==w.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,u=w,d=w.version,f=i.toneMapping),l.layers.enableAll(),_.unshift(l,l.geometry,l.material,0,0,null))}function p(_,x){_.getRGB(kr,ju(i)),n.buffers.color.setClear(kr.r,kr.g,kr.b,x,o)}function M(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(_,x=1){a.set(_),c=x,p(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(_){c=_,p(a,c)},render:v,addToRenderList:g,dispose:M}}function r1(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null);let r=s,o=!1;function a(S,L,U,N,X){let z=!1;const q=u(N,U,L);r!==q&&(r=q,l(r.object)),z=f(S,N,U,X),z&&m(S,N,U,X),X!==null&&e.update(X,i.ELEMENT_ARRAY_BUFFER),(z||o)&&(o=!1,x(S,L,U,N),X!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(X).buffer))}function c(){return i.createVertexArray()}function l(S){return i.bindVertexArray(S)}function h(S){return i.deleteVertexArray(S)}function u(S,L,U){const N=U.wireframe===!0;let X=n[S.id];X===void 0&&(X={},n[S.id]=X);let z=X[L.id];z===void 0&&(z={},X[L.id]=z);let q=z[N];return q===void 0&&(q=d(c()),z[N]=q),q}function d(S){const L=[],U=[],N=[];for(let X=0;X<t;X++)L[X]=0,U[X]=0,N[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:U,attributeDivisors:N,object:S,attributes:{},index:null}}function f(S,L,U,N){const X=r.attributes,z=L.attributes;let q=0;const ee=U.getAttributes();for(const W in ee)if(ee[W].location>=0){const xe=X[W];let ae=z[W];if(ae===void 0&&(W==="instanceMatrix"&&S.instanceMatrix&&(ae=S.instanceMatrix),W==="instanceColor"&&S.instanceColor&&(ae=S.instanceColor)),xe===void 0||xe.attribute!==ae||ae&&xe.data!==ae.data)return!0;q++}return r.attributesNum!==q||r.index!==N}function m(S,L,U,N){const X={},z=L.attributes;let q=0;const ee=U.getAttributes();for(const W in ee)if(ee[W].location>=0){let xe=z[W];xe===void 0&&(W==="instanceMatrix"&&S.instanceMatrix&&(xe=S.instanceMatrix),W==="instanceColor"&&S.instanceColor&&(xe=S.instanceColor));const ae={};ae.attribute=xe,xe&&xe.data&&(ae.data=xe.data),X[W]=ae,q++}r.attributes=X,r.attributesNum=q,r.index=N}function v(){const S=r.newAttributes;for(let L=0,U=S.length;L<U;L++)S[L]=0}function g(S){p(S,0)}function p(S,L){const U=r.newAttributes,N=r.enabledAttributes,X=r.attributeDivisors;U[S]=1,N[S]===0&&(i.enableVertexAttribArray(S),N[S]=1),X[S]!==L&&(i.vertexAttribDivisor(S,L),X[S]=L)}function M(){const S=r.newAttributes,L=r.enabledAttributes;for(let U=0,N=L.length;U<N;U++)L[U]!==S[U]&&(i.disableVertexAttribArray(U),L[U]=0)}function _(S,L,U,N,X,z,q){q===!0?i.vertexAttribIPointer(S,L,U,X,z):i.vertexAttribPointer(S,L,U,N,X,z)}function x(S,L,U,N){v();const X=N.attributes,z=U.getAttributes(),q=L.defaultAttributeValues;for(const ee in z){const W=z[ee];if(W.location>=0){let le=X[ee];if(le===void 0&&(ee==="instanceMatrix"&&S.instanceMatrix&&(le=S.instanceMatrix),ee==="instanceColor"&&S.instanceColor&&(le=S.instanceColor)),le!==void 0){const xe=le.normalized,ae=le.itemSize,Ne=e.get(le);if(Ne===void 0)continue;const ze=Ne.buffer,$e=Ne.type,qe=Ne.bytesPerElement,Q=$e===i.INT||$e===i.UNSIGNED_INT||le.gpuType===Jl;if(le.isInterleavedBufferAttribute){const re=le.data,_e=re.stride,Le=le.offset;if(re.isInstancedInterleavedBuffer){for(let Te=0;Te<W.locationSize;Te++)p(W.location+Te,re.meshPerAttribute);S.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let Te=0;Te<W.locationSize;Te++)g(W.location+Te);i.bindBuffer(i.ARRAY_BUFFER,ze);for(let Te=0;Te<W.locationSize;Te++)_(W.location+Te,ae/W.locationSize,$e,xe,_e*qe,(Le+ae/W.locationSize*Te)*qe,Q)}else{if(le.isInstancedBufferAttribute){for(let re=0;re<W.locationSize;re++)p(W.location+re,le.meshPerAttribute);S.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let re=0;re<W.locationSize;re++)g(W.location+re);i.bindBuffer(i.ARRAY_BUFFER,ze);for(let re=0;re<W.locationSize;re++)_(W.location+re,ae/W.locationSize,$e,xe,ae*qe,ae/W.locationSize*re*qe,Q)}}else if(q!==void 0){const xe=q[ee];if(xe!==void 0)switch(xe.length){case 2:i.vertexAttrib2fv(W.location,xe);break;case 3:i.vertexAttrib3fv(W.location,xe);break;case 4:i.vertexAttrib4fv(W.location,xe);break;default:i.vertexAttrib1fv(W.location,xe)}}}}M()}function w(){P();for(const S in n){const L=n[S];for(const U in L){const N=L[U];for(const X in N)h(N[X].object),delete N[X];delete L[U]}delete n[S]}}function A(S){if(n[S.id]===void 0)return;const L=n[S.id];for(const U in L){const N=L[U];for(const X in N)h(N[X].object),delete N[X];delete L[U]}delete n[S.id]}function C(S){for(const L in n){const U=n[L];if(U[S.id]===void 0)continue;const N=U[S.id];for(const X in N)h(N[X].object),delete N[X];delete U[S.id]}}function P(){b(),o=!0,r!==s&&(r=s,l(r.object))}function b(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:P,resetDefaultState:b,dispose:w,releaseStatesOfGeometry:A,releaseStatesOfProgram:C,initAttributes:v,enableAttribute:g,disableUnusedAttributes:M}}function o1(i,e,t){let n;function s(l){n=l}function r(l,h){i.drawArrays(n,l,h),t.update(h,n,1)}function o(l,h,u){u!==0&&(i.drawArraysInstanced(n,l,h,u),t.update(h,n,u))}function a(l,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,u);let f=0;for(let m=0;m<u;m++)f+=h[m];t.update(f,n,1)}function c(l,h,u,d){if(u===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let m=0;m<l.length;m++)o(l[m],h[m],d[m]);else{f.multiDrawArraysInstancedWEBGL(n,l,0,h,0,d,0,u);let m=0;for(let v=0;v<u;v++)m+=h[v]*d[v];t.update(m,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function a1(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(C){return!(C!==on&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(C){const P=C===bn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==Pn&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==An&&!P)}function c(C){if(C==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const u=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),M=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),_=i.getParameter(i.MAX_VARYING_VECTORS),x=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),w=m>0,A=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:m,maxTextureSize:v,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:M,maxVaryings:_,maxFragmentUniforms:x,vertexTextures:w,maxSamples:A}}function l1(i){const e=this;let t=null,n=0,s=!1,r=!1;const o=new ai,a=new Ke,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||n!==0||s;return s=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,f){const m=u.clippingPlanes,v=u.clipIntersection,g=u.clipShadows,p=i.get(u);if(!s||m===null||m.length===0||r&&!g)r?h(null):l();else{const M=r?0:n,_=M*4;let x=p.clippingState||null;c.value=x,x=h(m,d,_,f);for(let w=0;w!==_;++w)x[w]=t[w];p.clippingState=x,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=M}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,f,m){const v=u!==null?u.length:0;let g=null;if(v!==0){if(g=c.value,m!==!0||g===null){const p=f+v*4,M=d.matrixWorldInverse;a.getNormalMatrix(M),(g===null||g.length<p)&&(g=new Float32Array(p));for(let _=0,x=f;_!==v;++_,x+=4)o.copy(u[_]).applyMatrix4(M,a),o.normal.toArray(g,x),g[x+3]=o.constant}c.value=g,c.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,g}}function c1(i){let e=new WeakMap;function t(o,a){return a===$a?o.mapping=xs:a===el&&(o.mapping=vs),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===$a||a===el)if(e.has(o)){const c=e.get(o).texture;return t(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new vp(c.height);return l.fromEquirectangularTexture(i,o),e.set(o,l),o.addEventListener("dispose",s),t(l.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}const hs=4,wh=[.125,.215,.35,.446,.526,.582],Ci=20,ya=new _c,Eh=new Fe;let Sa=null,ba=0,wa=0,Ea=!1;const bi=(1+Math.sqrt(5))/2,rs=1/bi,Th=[new R(-bi,rs,0),new R(bi,rs,0),new R(-rs,0,bi),new R(rs,0,bi),new R(0,bi,-rs),new R(0,bi,rs),new R(-1,1,-1),new R(1,1,-1),new R(-1,1,1),new R(1,1,1)],h1=new R;class Ah{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100,r={}){const{size:o=256,position:a=h1}=r;Sa=this._renderer.getRenderTarget(),ba=this._renderer.getActiveCubeFace(),wa=this._renderer.getActiveMipmapLevel(),Ea=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,s,c,a),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ph(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Rh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Sa,ba,wa),this._renderer.xr.enabled=Ea,e.scissorTest=!1,Gr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===xs||e.mapping===vs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Sa=this._renderer.getRenderTarget(),ba=this._renderer.getActiveCubeFace(),wa=this._renderer.getActiveMipmapLevel(),Ea=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:rn,minFilter:rn,generateMipmaps:!1,type:bn,format:on,colorSpace:_s,depthBuffer:!1},s=Ch(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ch(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=u1(r)),this._blurMaterial=d1(r,e,t)}return s}_compileMaterial(e){const t=new at(this._lodPlanes[0],e);this._renderer.compile(t,ya)}_sceneToCubeUV(e,t,n,s,r){const c=new zt(90,1,t,n),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(Eh),u.toneMapping=ui,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(s),u.clearDepth(),u.setRenderTarget(null));const v=new dn({name:"PMREM.Background",side:kt,depthWrite:!1,depthTest:!1}),g=new at(new an,v);let p=!1;const M=e.background;M?M.isColor&&(v.color.copy(M),e.background=null,p=!0):(v.color.copy(Eh),p=!0);for(let _=0;_<6;_++){const x=_%3;x===0?(c.up.set(0,l[_],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+h[_],r.y,r.z)):x===1?(c.up.set(0,0,l[_]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+h[_],r.z)):(c.up.set(0,l[_],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+h[_]));const w=this._cubeSize;Gr(s,x*w,_>2?w:0,w,w),u.setRenderTarget(s),p&&u.render(g,c),u.render(e,c)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=f,u.autoClear=d,e.background=M}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===xs||e.mapping===vs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ph()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Rh());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new at(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const c=this._cubeSize;Gr(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,ya)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Th[(s-r-1)%Th.length];this._blur(e,r-1,r,o,a)}t.autoClear=n}_blur(e,t,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,s,"latitudinal",r),this._halfBlur(o,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new at(this._lodPlanes[s],l),d=l.uniforms,f=this._sizeLods[n]-1,m=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Ci-1),v=r/m,g=isFinite(r)?1+Math.floor(h*v):Ci;g>Ci&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Ci}`);const p=[];let M=0;for(let C=0;C<Ci;++C){const P=C/v,b=Math.exp(-P*P/2);p.push(b),C===0?M+=b:C<g&&(M+=2*b)}for(let C=0;C<p.length;C++)p[C]=p[C]/M;d.envMap.value=e.texture,d.samples.value=g,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:_}=this;d.dTheta.value=m,d.mipInt.value=_-n;const x=this._sizeLods[s],w=3*x*(s>_-hs?s-_+hs:0),A=4*(this._cubeSize-x);Gr(t,w,A,3*x,2*x),c.setRenderTarget(t),c.render(u,ya)}}function u1(i){const e=[],t=[],n=[];let s=i;const r=i-hs+1+wh.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);t.push(a);let c=1/a;o>i-hs?c=wh[o-i+hs-1]:o===0&&(c=0),n.push(c);const l=1/(a-2),h=-l,u=1+l,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,m=6,v=3,g=2,p=1,M=new Float32Array(v*m*f),_=new Float32Array(g*m*f),x=new Float32Array(p*m*f);for(let A=0;A<f;A++){const C=A%3*2/3-1,P=A>2?0:-1,b=[C,P,0,C+2/3,P,0,C+2/3,P+1,0,C,P,0,C+2/3,P+1,0,C,P+1,0];M.set(b,v*m*A),_.set(d,g*m*A);const S=[A,A,A,A,A,A];x.set(S,p*m*A)}const w=new it;w.setAttribute("position",new vt(M,v)),w.setAttribute("uv",new vt(_,g)),w.setAttribute("faceIndex",new vt(x,p)),e.push(w),s>hs&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Ch(i,e,t){const n=new Kt(i,e,t);return n.texture.mapping=Co,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Gr(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function d1(i,e,t){const n=new Float32Array(Ci),s=new R(0,1,0);return new xt({name:"SphericalGaussianBlur",defines:{n:Ci,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Mc(),fragmentShader:`

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
		`,blending:Xn,depthTest:!1,depthWrite:!1})}function Rh(){return new xt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Mc(),fragmentShader:`

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
		`,blending:Xn,depthTest:!1,depthWrite:!1})}function Ph(){return new xt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Mc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Xn,depthTest:!1,depthWrite:!1})}function Mc(){return`

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
	`}function f1(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===$a||c===el,h=c===xs||c===vs;if(l||h){let u=e.get(a);const d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return t===null&&(t=new Ah(i)),u=l?t.fromEquirectangular(a,u):t.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),u.texture;if(u!==void 0)return u.texture;{const f=a.image;return l&&f&&f.height>0||h&&f&&s(f)?(t===null&&(t=new Ah(i)),u=l?t.fromEquirectangular(a):t.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let c=0;const l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function r(a){const c=a.target;c.removeEventListener("dispose",r);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function p1(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const s=t(n);return s===null&&ir("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function m1(i,e,t,n){const s={},r=new WeakMap;function o(u){const d=u.target;d.index!==null&&e.remove(d.index);for(const m in d.attributes)e.remove(d.attributes[m]);d.removeEventListener("dispose",o),delete s[d.id];const f=r.get(d);f&&(e.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(u,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,t.memory.geometries++),d}function c(u){const d=u.attributes;for(const f in d)e.update(d[f],i.ARRAY_BUFFER)}function l(u){const d=[],f=u.index,m=u.attributes.position;let v=0;if(f!==null){const M=f.array;v=f.version;for(let _=0,x=M.length;_<x;_+=3){const w=M[_+0],A=M[_+1],C=M[_+2];d.push(w,A,A,C,C,w)}}else if(m!==void 0){const M=m.array;v=m.version;for(let _=0,x=M.length/3-1;_<x;_+=3){const w=_+0,A=_+1,C=_+2;d.push(w,A,A,C,C,w)}}else return;const g=new(Gu(d)?Yu:qu)(d,1);g.version=v;const p=r.get(u);p&&e.remove(p),r.set(u,g)}function h(u){const d=r.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&l(u)}else l(u);return r.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function g1(i,e,t){let n;function s(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function c(d,f){i.drawElements(n,f,r,d*o),t.update(f,n,1)}function l(d,f,m){m!==0&&(i.drawElementsInstanced(n,f,r,d*o,m),t.update(f,n,m))}function h(d,f,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,m);let g=0;for(let p=0;p<m;p++)g+=f[p];t.update(g,n,1)}function u(d,f,m,v){if(m===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let p=0;p<d.length;p++)l(d[p]/o,f[p],v[p]);else{g.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,v,0,m);let p=0;for(let M=0;M<m;M++)p+=f[M]*v[M];t.update(p,n,1)}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function x1(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function v1(i,e,t){const n=new WeakMap,s=new rt;function r(o,a,c){const l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(a);if(d===void 0||d.count!==u){let S=function(){P.dispose(),n.delete(a),a.removeEventListener("dispose",S)};var f=S;d!==void 0&&d.texture.dispose();const m=a.morphAttributes.position!==void 0,v=a.morphAttributes.normal!==void 0,g=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],M=a.morphAttributes.normal||[],_=a.morphAttributes.color||[];let x=0;m===!0&&(x=1),v===!0&&(x=2),g===!0&&(x=3);let w=a.attributes.position.count*x,A=1;w>e.maxTextureSize&&(A=Math.ceil(w/e.maxTextureSize),w=e.maxTextureSize);const C=new Float32Array(w*A*4*u),P=new Vu(C,w,A,u);P.type=An,P.needsUpdate=!0;const b=x*4;for(let L=0;L<u;L++){const U=p[L],N=M[L],X=_[L],z=w*A*4*L;for(let q=0;q<U.count;q++){const ee=q*b;m===!0&&(s.fromBufferAttribute(U,q),C[z+ee+0]=s.x,C[z+ee+1]=s.y,C[z+ee+2]=s.z,C[z+ee+3]=0),v===!0&&(s.fromBufferAttribute(N,q),C[z+ee+4]=s.x,C[z+ee+5]=s.y,C[z+ee+6]=s.z,C[z+ee+7]=0),g===!0&&(s.fromBufferAttribute(X,q),C[z+ee+8]=s.x,C[z+ee+9]=s.y,C[z+ee+10]=s.z,C[z+ee+11]=X.itemSize===4?s.w:1)}}d={count:u,texture:P,size:new se(w,A)},n.set(a,d),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let m=0;for(let g=0;g<l.length;g++)m+=l[g];const v=a.morphTargetsRelative?1:1-m;c.getUniforms().setValue(i,"morphTargetBaseInfluence",v),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function _1(i,e,t,n){let s=new WeakMap;function r(c){const l=n.render.frame,h=c.geometry,u=e.get(c,h);if(s.get(u)!==l&&(e.update(u),s.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){const d=c.skeleton;s.get(d)!==l&&(d.update(),s.set(d,l))}return u}function o(){s=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:o}}const ud=new Et,Lh=new $u(1,1),dd=new Vu,fd=new np,pd=new Zu,Dh=[],Ih=[],Uh=new Float32Array(16),Nh=new Float32Array(9),Fh=new Float32Array(4);function Rs(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let r=Dh[s];if(r===void 0&&(r=new Float32Array(s),Dh[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function Tt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function At(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Io(i,e){let t=Ih[e];t===void 0&&(t=new Int32Array(e),Ih[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function M1(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function y1(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Tt(t,e))return;i.uniform2fv(this.addr,e),At(t,e)}}function S1(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Tt(t,e))return;i.uniform3fv(this.addr,e),At(t,e)}}function b1(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Tt(t,e))return;i.uniform4fv(this.addr,e),At(t,e)}}function w1(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Tt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),At(t,e)}else{if(Tt(t,n))return;Fh.set(n),i.uniformMatrix2fv(this.addr,!1,Fh),At(t,n)}}function E1(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Tt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),At(t,e)}else{if(Tt(t,n))return;Nh.set(n),i.uniformMatrix3fv(this.addr,!1,Nh),At(t,n)}}function T1(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Tt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),At(t,e)}else{if(Tt(t,n))return;Uh.set(n),i.uniformMatrix4fv(this.addr,!1,Uh),At(t,n)}}function A1(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function C1(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Tt(t,e))return;i.uniform2iv(this.addr,e),At(t,e)}}function R1(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Tt(t,e))return;i.uniform3iv(this.addr,e),At(t,e)}}function P1(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Tt(t,e))return;i.uniform4iv(this.addr,e),At(t,e)}}function L1(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function D1(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Tt(t,e))return;i.uniform2uiv(this.addr,e),At(t,e)}}function I1(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Tt(t,e))return;i.uniform3uiv(this.addr,e),At(t,e)}}function U1(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Tt(t,e))return;i.uniform4uiv(this.addr,e),At(t,e)}}function N1(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Lh.compareFunction=ku,r=Lh):r=ud,t.setTexture2D(e||r,s)}function F1(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||fd,s)}function O1(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||pd,s)}function z1(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||dd,s)}function B1(i){switch(i){case 5126:return M1;case 35664:return y1;case 35665:return S1;case 35666:return b1;case 35674:return w1;case 35675:return E1;case 35676:return T1;case 5124:case 35670:return A1;case 35667:case 35671:return C1;case 35668:case 35672:return R1;case 35669:case 35673:return P1;case 5125:return L1;case 36294:return D1;case 36295:return I1;case 36296:return U1;case 35678:case 36198:case 36298:case 36306:case 35682:return N1;case 35679:case 36299:case 36307:return F1;case 35680:case 36300:case 36308:case 36293:return O1;case 36289:case 36303:case 36311:case 36292:return z1}}function H1(i,e){i.uniform1fv(this.addr,e)}function k1(i,e){const t=Rs(e,this.size,2);i.uniform2fv(this.addr,t)}function G1(i,e){const t=Rs(e,this.size,3);i.uniform3fv(this.addr,t)}function V1(i,e){const t=Rs(e,this.size,4);i.uniform4fv(this.addr,t)}function W1(i,e){const t=Rs(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function X1(i,e){const t=Rs(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function q1(i,e){const t=Rs(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Y1(i,e){i.uniform1iv(this.addr,e)}function j1(i,e){i.uniform2iv(this.addr,e)}function K1(i,e){i.uniform3iv(this.addr,e)}function Z1(i,e){i.uniform4iv(this.addr,e)}function J1(i,e){i.uniform1uiv(this.addr,e)}function Q1(i,e){i.uniform2uiv(this.addr,e)}function $1(i,e){i.uniform3uiv(this.addr,e)}function ex(i,e){i.uniform4uiv(this.addr,e)}function tx(i,e,t){const n=this.cache,s=e.length,r=Io(t,s);Tt(n,r)||(i.uniform1iv(this.addr,r),At(n,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||ud,r[o])}function nx(i,e,t){const n=this.cache,s=e.length,r=Io(t,s);Tt(n,r)||(i.uniform1iv(this.addr,r),At(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||fd,r[o])}function ix(i,e,t){const n=this.cache,s=e.length,r=Io(t,s);Tt(n,r)||(i.uniform1iv(this.addr,r),At(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||pd,r[o])}function sx(i,e,t){const n=this.cache,s=e.length,r=Io(t,s);Tt(n,r)||(i.uniform1iv(this.addr,r),At(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||dd,r[o])}function rx(i){switch(i){case 5126:return H1;case 35664:return k1;case 35665:return G1;case 35666:return V1;case 35674:return W1;case 35675:return X1;case 35676:return q1;case 5124:case 35670:return Y1;case 35667:case 35671:return j1;case 35668:case 35672:return K1;case 35669:case 35673:return Z1;case 5125:return J1;case 36294:return Q1;case 36295:return $1;case 36296:return ex;case 35678:case 36198:case 36298:case 36306:case 35682:return tx;case 35679:case 36299:case 36307:return nx;case 35680:case 36300:case 36308:case 36293:return ix;case 36289:case 36303:case 36311:case 36292:return sx}}class ox{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=B1(t.type)}}class ax{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=rx(t.type)}}class lx{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,t[a.id],n)}}}const Ta=/(\w+)(\])?(\[|\.)?/g;function Oh(i,e){i.seq.push(e),i.map[e.id]=e}function cx(i,e,t){const n=i.name,s=n.length;for(Ta.lastIndex=0;;){const r=Ta.exec(n),o=Ta.lastIndex;let a=r[1];const c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){Oh(t,l===void 0?new ox(a,i,e):new ax(a,i,e));break}else{let u=t.map[a];u===void 0&&(u=new lx(a),Oh(t,u)),t=u}}}class ro{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);cx(r,o,this)}}setValue(e,t,n,s){const r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){const a=t[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in t&&n.push(o)}return n}}function zh(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const hx=37297;let ux=0;function dx(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}const Bh=new Ke;function fx(i){nt._getMatrix(Bh,nt.workingColorSpace,i);const e=`mat3( ${Bh.elements.map(t=>t.toFixed(4))} )`;switch(nt.getTransfer(i)){case po:return[e,"LinearTransferOETF"];case lt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Hh(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+dx(i.getShaderSource(e),a)}else return r}function px(i,e){const t=fx(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function mx(i,e){let t;switch(e){case Tu:t="Linear";break;case Au:t="Reinhard";break;case Cu:t="Cineon";break;case Zl:t="ACESFilmic";break;case Pu:t="AgX";break;case Lu:t="Neutral";break;case Ru:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Vr=new R;function gx(){nt.getLuminanceCoefficients(Vr);const i=Vr.x.toFixed(4),e=Vr.y.toFixed(4),t=Vr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function xx(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ks).join(`
`)}function vx(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function _x(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(e,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function ks(i){return i!==""}function kh(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Gh(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Mx=/^[ \t]*#include +<([\w\d./]+)>/gm;function Nl(i){return i.replace(Mx,Sx)}const yx=new Map;function Sx(i,e){let t=Je[e];if(t===void 0){const n=yx.get(e);if(n!==void 0)t=Je[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Nl(t)}const bx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Vh(i){return i.replace(bx,wx)}function wx(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Wh(i){let e=`precision ${i.precision} float;
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
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Ex(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===wu?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===ef?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Hn&&(e="SHADOWMAP_TYPE_VSM"),e}function Tx(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case xs:case vs:e="ENVMAP_TYPE_CUBE";break;case Co:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Ax(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case vs:e="ENVMAP_MODE_REFRACTION";break}return e}function Cx(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Eu:e="ENVMAP_BLENDING_MULTIPLY";break;case Mf:e="ENVMAP_BLENDING_MIX";break;case yf:e="ENVMAP_BLENDING_ADD";break}return e}function Rx(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function Px(i,e,t,n){const s=i.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const c=Ex(t),l=Tx(t),h=Ax(t),u=Cx(t),d=Rx(t),f=xx(t),m=vx(r),v=s.createProgram();let g,p,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(ks).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(ks).join(`
`),p.length>0&&(p+=`
`)):(g=[Wh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ks).join(`
`),p=[Wh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ui?"#define TONE_MAPPING":"",t.toneMapping!==ui?Je.tonemapping_pars_fragment:"",t.toneMapping!==ui?mx("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Je.colorspace_pars_fragment,px("linearToOutputTexel",t.outputColorSpace),gx(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ks).join(`
`)),o=Nl(o),o=kh(o,t),o=Gh(o,t),a=Nl(a),a=kh(a,t),a=Gh(a,t),o=Vh(o),a=Vh(a),t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",t.glslVersion===kc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===kc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const _=M+g+o,x=M+p+a,w=zh(s,s.VERTEX_SHADER,_),A=zh(s,s.FRAGMENT_SHADER,x);s.attachShader(v,w),s.attachShader(v,A),t.index0AttributeName!==void 0?s.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function C(L){if(i.debug.checkShaderErrors){const U=s.getProgramInfoLog(v)||"",N=s.getShaderInfoLog(w)||"",X=s.getShaderInfoLog(A)||"",z=U.trim(),q=N.trim(),ee=X.trim();let W=!0,le=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(W=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,v,w,A);else{const xe=Hh(s,w,"vertex"),ae=Hh(s,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+z+`
`+xe+`
`+ae)}else z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",z):(q===""||ee==="")&&(le=!1);le&&(L.diagnostics={runnable:W,programLog:z,vertexShader:{log:q,prefix:g},fragmentShader:{log:ee,prefix:p}})}s.deleteShader(w),s.deleteShader(A),P=new ro(s,v),b=_x(s,v)}let P;this.getUniforms=function(){return P===void 0&&C(this),P};let b;this.getAttributes=function(){return b===void 0&&C(this),b};let S=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=s.getProgramParameter(v,hx)),S},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=ux++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=w,this.fragmentShader=A,this}let Lx=0;class Dx{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Ix(e),t.set(e,n)),n}}class Ix{constructor(e){this.id=Lx++,this.code=e,this.usedTimes=0}}function Ux(i,e,t,n,s,r,o){const a=new Wu,c=new Dx,l=new Set,h=[],u=s.logarithmicDepthBuffer,d=s.vertexTextures;let f=s.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(b){return l.add(b),b===0?"uv":`uv${b}`}function g(b,S,L,U,N){const X=U.fog,z=N.geometry,q=b.isMeshStandardMaterial?U.environment:null,ee=(b.isMeshStandardMaterial?t:e).get(b.envMap||q),W=ee&&ee.mapping===Co?ee.image.height:null,le=m[b.type];b.precision!==null&&(f=s.getMaxPrecision(b.precision),f!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",f,"instead."));const xe=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,ae=xe!==void 0?xe.length:0;let Ne=0;z.morphAttributes.position!==void 0&&(Ne=1),z.morphAttributes.normal!==void 0&&(Ne=2),z.morphAttributes.color!==void 0&&(Ne=3);let ze,$e,qe,Q;if(le){const ot=En[le];ze=ot.vertexShader,$e=ot.fragmentShader}else ze=b.vertexShader,$e=b.fragmentShader,c.update(b),qe=c.getVertexShaderID(b),Q=c.getFragmentShaderID(b);const re=i.getRenderTarget(),_e=i.state.buffers.depth.getReversed(),Le=N.isInstancedMesh===!0,Te=N.isBatchedMesh===!0,Ie=!!b.map,tt=!!b.matcap,D=!!ee,O=!!b.aoMap,H=!!b.lightMap,V=!!b.bumpMap,G=!!b.normalMap,ne=!!b.displacementMap,ie=!!b.emissiveMap,J=!!b.metalnessMap,ce=!!b.roughnessMap,ue=b.anisotropy>0,E=b.clearcoat>0,y=b.dispersion>0,I=b.iridescence>0,Y=b.sheen>0,te=b.transmission>0,j=ue&&!!b.anisotropyMap,Ae=E&&!!b.clearcoatMap,pe=E&&!!b.clearcoatNormalMap,Ee=E&&!!b.clearcoatRoughnessMap,Re=I&&!!b.iridescenceMap,de=I&&!!b.iridescenceThicknessMap,we=Y&&!!b.sheenColorMap,Ve=Y&&!!b.sheenRoughnessMap,Oe=!!b.specularMap,Se=!!b.specularColorMap,je=!!b.specularIntensityMap,F=te&&!!b.transmissionMap,ge=te&&!!b.thicknessMap,Me=!!b.gradientMap,Pe=!!b.alphaMap,fe=b.alphaTest>0,oe=!!b.alphaHash,Ue=!!b.extensions;let Ye=ui;b.toneMapped&&(re===null||re.isXRRenderTarget===!0)&&(Ye=i.toneMapping);const pt={shaderID:le,shaderType:b.type,shaderName:b.name,vertexShader:ze,fragmentShader:$e,defines:b.defines,customVertexShaderID:qe,customFragmentShaderID:Q,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:f,batching:Te,batchingColor:Te&&N._colorsTexture!==null,instancing:Le,instancingColor:Le&&N.instanceColor!==null,instancingMorph:Le&&N.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:re===null?i.outputColorSpace:re.isXRRenderTarget===!0?re.texture.colorSpace:_s,alphaToCoverage:!!b.alphaToCoverage,map:Ie,matcap:tt,envMap:D,envMapMode:D&&ee.mapping,envMapCubeUVHeight:W,aoMap:O,lightMap:H,bumpMap:V,normalMap:G,displacementMap:d&&ne,emissiveMap:ie,normalMapObjectSpace:G&&b.normalMapType===Ef,normalMapTangentSpace:G&&b.normalMapType===Hu,metalnessMap:J,roughnessMap:ce,anisotropy:ue,anisotropyMap:j,clearcoat:E,clearcoatMap:Ae,clearcoatNormalMap:pe,clearcoatRoughnessMap:Ee,dispersion:y,iridescence:I,iridescenceMap:Re,iridescenceThicknessMap:de,sheen:Y,sheenColorMap:we,sheenRoughnessMap:Ve,specularMap:Oe,specularColorMap:Se,specularIntensityMap:je,transmission:te,transmissionMap:F,thicknessMap:ge,gradientMap:Me,opaque:b.transparent===!1&&b.blending===Di&&b.alphaToCoverage===!1,alphaMap:Pe,alphaTest:fe,alphaHash:oe,combine:b.combine,mapUv:Ie&&v(b.map.channel),aoMapUv:O&&v(b.aoMap.channel),lightMapUv:H&&v(b.lightMap.channel),bumpMapUv:V&&v(b.bumpMap.channel),normalMapUv:G&&v(b.normalMap.channel),displacementMapUv:ne&&v(b.displacementMap.channel),emissiveMapUv:ie&&v(b.emissiveMap.channel),metalnessMapUv:J&&v(b.metalnessMap.channel),roughnessMapUv:ce&&v(b.roughnessMap.channel),anisotropyMapUv:j&&v(b.anisotropyMap.channel),clearcoatMapUv:Ae&&v(b.clearcoatMap.channel),clearcoatNormalMapUv:pe&&v(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ee&&v(b.clearcoatRoughnessMap.channel),iridescenceMapUv:Re&&v(b.iridescenceMap.channel),iridescenceThicknessMapUv:de&&v(b.iridescenceThicknessMap.channel),sheenColorMapUv:we&&v(b.sheenColorMap.channel),sheenRoughnessMapUv:Ve&&v(b.sheenRoughnessMap.channel),specularMapUv:Oe&&v(b.specularMap.channel),specularColorMapUv:Se&&v(b.specularColorMap.channel),specularIntensityMapUv:je&&v(b.specularIntensityMap.channel),transmissionMapUv:F&&v(b.transmissionMap.channel),thicknessMapUv:ge&&v(b.thicknessMap.channel),alphaMapUv:Pe&&v(b.alphaMap.channel),vertexTangents:!!z.attributes.tangent&&(G||ue),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!z.attributes.uv&&(Ie||Pe),fog:!!X,useFog:b.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:b.flatShading===!0&&b.wireframe===!1,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:_e,skinning:N.isSkinnedMesh===!0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:ae,morphTextureStride:Ne,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:b.dithering,shadowMapEnabled:i.shadowMap.enabled&&L.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ye,decodeVideoTexture:Ie&&b.map.isVideoTexture===!0&&nt.getTransfer(b.map.colorSpace)===lt,decodeVideoTextureEmissive:ie&&b.emissiveMap.isVideoTexture===!0&&nt.getTransfer(b.emissiveMap.colorSpace)===lt,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Bt,flipSided:b.side===kt,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:Ue&&b.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ue&&b.extensions.multiDraw===!0||Te)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return pt.vertexUv1s=l.has(1),pt.vertexUv2s=l.has(2),pt.vertexUv3s=l.has(3),l.clear(),pt}function p(b){const S=[];if(b.shaderID?S.push(b.shaderID):(S.push(b.customVertexShaderID),S.push(b.customFragmentShaderID)),b.defines!==void 0)for(const L in b.defines)S.push(L),S.push(b.defines[L]);return b.isRawShaderMaterial===!1&&(M(S,b),_(S,b),S.push(i.outputColorSpace)),S.push(b.customProgramCacheKey),S.join()}function M(b,S){b.push(S.precision),b.push(S.outputColorSpace),b.push(S.envMapMode),b.push(S.envMapCubeUVHeight),b.push(S.mapUv),b.push(S.alphaMapUv),b.push(S.lightMapUv),b.push(S.aoMapUv),b.push(S.bumpMapUv),b.push(S.normalMapUv),b.push(S.displacementMapUv),b.push(S.emissiveMapUv),b.push(S.metalnessMapUv),b.push(S.roughnessMapUv),b.push(S.anisotropyMapUv),b.push(S.clearcoatMapUv),b.push(S.clearcoatNormalMapUv),b.push(S.clearcoatRoughnessMapUv),b.push(S.iridescenceMapUv),b.push(S.iridescenceThicknessMapUv),b.push(S.sheenColorMapUv),b.push(S.sheenRoughnessMapUv),b.push(S.specularMapUv),b.push(S.specularColorMapUv),b.push(S.specularIntensityMapUv),b.push(S.transmissionMapUv),b.push(S.thicknessMapUv),b.push(S.combine),b.push(S.fogExp2),b.push(S.sizeAttenuation),b.push(S.morphTargetsCount),b.push(S.morphAttributeCount),b.push(S.numDirLights),b.push(S.numPointLights),b.push(S.numSpotLights),b.push(S.numSpotLightMaps),b.push(S.numHemiLights),b.push(S.numRectAreaLights),b.push(S.numDirLightShadows),b.push(S.numPointLightShadows),b.push(S.numSpotLightShadows),b.push(S.numSpotLightShadowsWithMaps),b.push(S.numLightProbes),b.push(S.shadowMapType),b.push(S.toneMapping),b.push(S.numClippingPlanes),b.push(S.numClipIntersection),b.push(S.depthPacking)}function _(b,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),S.batchingColor&&a.enable(21),S.gradientMap&&a.enable(22),b.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reversedDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),b.push(a.mask)}function x(b){const S=m[b.type];let L;if(S){const U=En[S];L=Rn.clone(U.uniforms)}else L=b.uniforms;return L}function w(b,S){let L;for(let U=0,N=h.length;U<N;U++){const X=h[U];if(X.cacheKey===S){L=X,++L.usedTimes;break}}return L===void 0&&(L=new Px(i,S,b,r),h.push(L)),L}function A(b){if(--b.usedTimes===0){const S=h.indexOf(b);h[S]=h[h.length-1],h.pop(),b.destroy()}}function C(b){c.remove(b)}function P(){c.dispose()}return{getParameters:g,getProgramCacheKey:p,getUniforms:x,acquireProgram:w,releaseProgram:A,releaseShaderCache:C,programs:h,dispose:P}}function Nx(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,c){i.get(o)[a]=c}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function Fx(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Xh(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function qh(){const i=[];let e=0;const t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(u,d,f,m,v,g){let p=i[e];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:m,renderOrder:u.renderOrder,z:v,group:g},i[e]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=m,p.renderOrder=u.renderOrder,p.z=v,p.group=g),e++,p}function a(u,d,f,m,v,g){const p=o(u,d,f,m,v,g);f.transmission>0?n.push(p):f.transparent===!0?s.push(p):t.push(p)}function c(u,d,f,m,v,g){const p=o(u,d,f,m,v,g);f.transmission>0?n.unshift(p):f.transparent===!0?s.unshift(p):t.unshift(p)}function l(u,d){t.length>1&&t.sort(u||Fx),n.length>1&&n.sort(d||Xh),s.length>1&&s.sort(d||Xh)}function h(){for(let u=e,d=i.length;u<d;u++){const f=i[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:a,unshift:c,finish:h,sort:l}}function Ox(){let i=new WeakMap;function e(n,s){const r=i.get(n);let o;return r===void 0?(o=new qh,i.set(n,[o])):s>=r.length?(o=new qh,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function zx(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new R,color:new Fe};break;case"SpotLight":t={position:new R,direction:new R,color:new Fe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new R,color:new Fe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new R,skyColor:new Fe,groundColor:new Fe};break;case"RectAreaLight":t={color:new Fe,position:new R,halfWidth:new R,halfHeight:new R};break}return i[e.id]=t,t}}}function Bx(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new se};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new se};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new se,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let Hx=0;function kx(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Gx(i){const e=new zx,t=Bx(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new R);const s=new R,r=new Ze,o=new Ze;function a(l){let h=0,u=0,d=0;for(let b=0;b<9;b++)n.probe[b].set(0,0,0);let f=0,m=0,v=0,g=0,p=0,M=0,_=0,x=0,w=0,A=0,C=0;l.sort(kx);for(let b=0,S=l.length;b<S;b++){const L=l[b],U=L.color,N=L.intensity,X=L.distance,z=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)h+=U.r*N,u+=U.g*N,d+=U.b*N;else if(L.isLightProbe){for(let q=0;q<9;q++)n.probe[q].addScaledVector(L.sh.coefficients[q],N);C++}else if(L.isDirectionalLight){const q=e.get(L);if(q.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const ee=L.shadow,W=t.get(L);W.shadowIntensity=ee.intensity,W.shadowBias=ee.bias,W.shadowNormalBias=ee.normalBias,W.shadowRadius=ee.radius,W.shadowMapSize=ee.mapSize,n.directionalShadow[f]=W,n.directionalShadowMap[f]=z,n.directionalShadowMatrix[f]=L.shadow.matrix,M++}n.directional[f]=q,f++}else if(L.isSpotLight){const q=e.get(L);q.position.setFromMatrixPosition(L.matrixWorld),q.color.copy(U).multiplyScalar(N),q.distance=X,q.coneCos=Math.cos(L.angle),q.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),q.decay=L.decay,n.spot[v]=q;const ee=L.shadow;if(L.map&&(n.spotLightMap[w]=L.map,w++,ee.updateMatrices(L),L.castShadow&&A++),n.spotLightMatrix[v]=ee.matrix,L.castShadow){const W=t.get(L);W.shadowIntensity=ee.intensity,W.shadowBias=ee.bias,W.shadowNormalBias=ee.normalBias,W.shadowRadius=ee.radius,W.shadowMapSize=ee.mapSize,n.spotShadow[v]=W,n.spotShadowMap[v]=z,x++}v++}else if(L.isRectAreaLight){const q=e.get(L);q.color.copy(U).multiplyScalar(N),q.halfWidth.set(L.width*.5,0,0),q.halfHeight.set(0,L.height*.5,0),n.rectArea[g]=q,g++}else if(L.isPointLight){const q=e.get(L);if(q.color.copy(L.color).multiplyScalar(L.intensity),q.distance=L.distance,q.decay=L.decay,L.castShadow){const ee=L.shadow,W=t.get(L);W.shadowIntensity=ee.intensity,W.shadowBias=ee.bias,W.shadowNormalBias=ee.normalBias,W.shadowRadius=ee.radius,W.shadowMapSize=ee.mapSize,W.shadowCameraNear=ee.camera.near,W.shadowCameraFar=ee.camera.far,n.pointShadow[m]=W,n.pointShadowMap[m]=z,n.pointShadowMatrix[m]=L.shadow.matrix,_++}n.point[m]=q,m++}else if(L.isHemisphereLight){const q=e.get(L);q.skyColor.copy(L.color).multiplyScalar(N),q.groundColor.copy(L.groundColor).multiplyScalar(N),n.hemi[p]=q,p++}}g>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ye.LTC_FLOAT_1,n.rectAreaLTC2=ye.LTC_FLOAT_2):(n.rectAreaLTC1=ye.LTC_HALF_1,n.rectAreaLTC2=ye.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;const P=n.hash;(P.directionalLength!==f||P.pointLength!==m||P.spotLength!==v||P.rectAreaLength!==g||P.hemiLength!==p||P.numDirectionalShadows!==M||P.numPointShadows!==_||P.numSpotShadows!==x||P.numSpotMaps!==w||P.numLightProbes!==C)&&(n.directional.length=f,n.spot.length=v,n.rectArea.length=g,n.point.length=m,n.hemi.length=p,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.pointShadow.length=_,n.pointShadowMap.length=_,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=M,n.pointShadowMatrix.length=_,n.spotLightMatrix.length=x+w-A,n.spotLightMap.length=w,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=C,P.directionalLength=f,P.pointLength=m,P.spotLength=v,P.rectAreaLength=g,P.hemiLength=p,P.numDirectionalShadows=M,P.numPointShadows=_,P.numSpotShadows=x,P.numSpotMaps=w,P.numLightProbes=C,n.version=Hx++)}function c(l,h){let u=0,d=0,f=0,m=0,v=0;const g=h.matrixWorldInverse;for(let p=0,M=l.length;p<M;p++){const _=l[p];if(_.isDirectionalLight){const x=n.directional[u];x.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(g),u++}else if(_.isSpotLight){const x=n.spot[f];x.position.setFromMatrixPosition(_.matrixWorld),x.position.applyMatrix4(g),x.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(g),f++}else if(_.isRectAreaLight){const x=n.rectArea[m];x.position.setFromMatrixPosition(_.matrixWorld),x.position.applyMatrix4(g),o.identity(),r.copy(_.matrixWorld),r.premultiply(g),o.extractRotation(r),x.halfWidth.set(_.width*.5,0,0),x.halfHeight.set(0,_.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),m++}else if(_.isPointLight){const x=n.point[d];x.position.setFromMatrixPosition(_.matrixWorld),x.position.applyMatrix4(g),d++}else if(_.isHemisphereLight){const x=n.hemi[v];x.direction.setFromMatrixPosition(_.matrixWorld),x.direction.transformDirection(g),v++}}}return{setup:a,setupView:c,state:n}}function Yh(i){const e=new Gx(i),t=[],n=[];function s(h){l.camera=h,t.length=0,n.length=0}function r(h){t.push(h)}function o(h){n.push(h)}function a(){e.setup(t)}function c(h){e.setupView(t,h)}const l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function Vx(i){let e=new WeakMap;function t(s,r=0){const o=e.get(s);let a;return o===void 0?(a=new Yh(i),e.set(s,[a])):r>=o.length?(a=new Yh(i),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}const Wx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Xx=`uniform sampler2D shadow_pass;
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
}`;function qx(i,e,t){let n=new lc;const s=new se,r=new se,o=new rt,a=new lm({depthPacking:wf}),c=new cm,l={},h=t.maxTextureSize,u={[Kn]:kt,[kt]:Kn,[Bt]:Bt},d=new xt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new se},radius:{value:4}},vertexShader:Wx,fragmentShader:Xx}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const m=new it;m.setAttribute("position",new vt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new at(m,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=wu;let p=this.type;this.render=function(A,C,P){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||A.length===0)return;const b=i.getRenderTarget(),S=i.getActiveCubeFace(),L=i.getActiveMipmapLevel(),U=i.state;U.setBlending(Xn),U.buffers.depth.getReversed()===!0?U.buffers.color.setClear(0,0,0,0):U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);const N=p!==Hn&&this.type===Hn,X=p===Hn&&this.type!==Hn;for(let z=0,q=A.length;z<q;z++){const ee=A[z],W=ee.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",ee,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;s.copy(W.mapSize);const le=W.getFrameExtents();if(s.multiply(le),r.copy(W.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/le.x),s.x=r.x*le.x,W.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/le.y),s.y=r.y*le.y,W.mapSize.y=r.y)),W.map===null||N===!0||X===!0){const ae=this.type!==Hn?{minFilter:Gt,magFilter:Gt}:{};W.map!==null&&W.map.dispose(),W.map=new Kt(s.x,s.y,ae),W.map.texture.name=ee.name+".shadowMap",W.camera.updateProjectionMatrix()}i.setRenderTarget(W.map),i.clear();const xe=W.getViewportCount();for(let ae=0;ae<xe;ae++){const Ne=W.getViewport(ae);o.set(r.x*Ne.x,r.y*Ne.y,r.x*Ne.z,r.y*Ne.w),U.viewport(o),W.updateMatrices(ee,ae),n=W.getFrustum(),x(C,P,W.camera,ee,this.type)}W.isPointLightShadow!==!0&&this.type===Hn&&M(W,P),W.needsUpdate=!1}p=this.type,g.needsUpdate=!1,i.setRenderTarget(b,S,L)};function M(A,C){const P=e.update(v);d.defines.VSM_SAMPLES!==A.blurSamples&&(d.defines.VSM_SAMPLES=A.blurSamples,f.defines.VSM_SAMPLES=A.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Kt(s.x,s.y)),d.uniforms.shadow_pass.value=A.map.texture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,i.setRenderTarget(A.mapPass),i.clear(),i.renderBufferDirect(C,null,P,d,v,null),f.uniforms.shadow_pass.value=A.mapPass.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,i.setRenderTarget(A.map),i.clear(),i.renderBufferDirect(C,null,P,f,v,null)}function _(A,C,P,b){let S=null;const L=P.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(L!==void 0)S=L;else if(S=P.isPointLight===!0?c:a,i.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){const U=S.uuid,N=C.uuid;let X=l[U];X===void 0&&(X={},l[U]=X);let z=X[N];z===void 0&&(z=S.clone(),X[N]=z,C.addEventListener("dispose",w)),S=z}if(S.visible=C.visible,S.wireframe=C.wireframe,b===Hn?S.side=C.shadowSide!==null?C.shadowSide:C.side:S.side=C.shadowSide!==null?C.shadowSide:u[C.side],S.alphaMap=C.alphaMap,S.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,S.map=C.map,S.clipShadows=C.clipShadows,S.clippingPlanes=C.clippingPlanes,S.clipIntersection=C.clipIntersection,S.displacementMap=C.displacementMap,S.displacementScale=C.displacementScale,S.displacementBias=C.displacementBias,S.wireframeLinewidth=C.wireframeLinewidth,S.linewidth=C.linewidth,P.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const U=i.properties.get(S);U.light=P}return S}function x(A,C,P,b,S){if(A.visible===!1)return;if(A.layers.test(C.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&S===Hn)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,A.matrixWorld);const N=e.update(A),X=A.material;if(Array.isArray(X)){const z=N.groups;for(let q=0,ee=z.length;q<ee;q++){const W=z[q],le=X[W.materialIndex];if(le&&le.visible){const xe=_(A,le,b,S);A.onBeforeShadow(i,A,C,P,N,xe,W),i.renderBufferDirect(P,null,N,xe,A,W),A.onAfterShadow(i,A,C,P,N,xe,W)}}}else if(X.visible){const z=_(A,X,b,S);A.onBeforeShadow(i,A,C,P,N,z,null),i.renderBufferDirect(P,null,N,z,A,null),A.onAfterShadow(i,A,C,P,N,z,null)}}const U=A.children;for(let N=0,X=U.length;N<X;N++)x(U[N],C,P,b,S)}function w(A){A.target.removeEventListener("dispose",w);for(const P in l){const b=l[P],S=A.target.uuid;S in b&&(b[S].dispose(),delete b[S])}}}const Yx={[qa]:Ya,[ja]:Ja,[Ka]:Qa,[gs]:Za,[Ya]:qa,[Ja]:ja,[Qa]:Ka,[Za]:gs};function jx(i,e){function t(){let F=!1;const ge=new rt;let Me=null;const Pe=new rt(0,0,0,0);return{setMask:function(fe){Me!==fe&&!F&&(i.colorMask(fe,fe,fe,fe),Me=fe)},setLocked:function(fe){F=fe},setClear:function(fe,oe,Ue,Ye,pt){pt===!0&&(fe*=Ye,oe*=Ye,Ue*=Ye),ge.set(fe,oe,Ue,Ye),Pe.equals(ge)===!1&&(i.clearColor(fe,oe,Ue,Ye),Pe.copy(ge))},reset:function(){F=!1,Me=null,Pe.set(-1,0,0,0)}}}function n(){let F=!1,ge=!1,Me=null,Pe=null,fe=null;return{setReversed:function(oe){if(ge!==oe){const Ue=e.get("EXT_clip_control");oe?Ue.clipControlEXT(Ue.LOWER_LEFT_EXT,Ue.ZERO_TO_ONE_EXT):Ue.clipControlEXT(Ue.LOWER_LEFT_EXT,Ue.NEGATIVE_ONE_TO_ONE_EXT),ge=oe;const Ye=fe;fe=null,this.setClear(Ye)}},getReversed:function(){return ge},setTest:function(oe){oe?re(i.DEPTH_TEST):_e(i.DEPTH_TEST)},setMask:function(oe){Me!==oe&&!F&&(i.depthMask(oe),Me=oe)},setFunc:function(oe){if(ge&&(oe=Yx[oe]),Pe!==oe){switch(oe){case qa:i.depthFunc(i.NEVER);break;case Ya:i.depthFunc(i.ALWAYS);break;case ja:i.depthFunc(i.LESS);break;case gs:i.depthFunc(i.LEQUAL);break;case Ka:i.depthFunc(i.EQUAL);break;case Za:i.depthFunc(i.GEQUAL);break;case Ja:i.depthFunc(i.GREATER);break;case Qa:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Pe=oe}},setLocked:function(oe){F=oe},setClear:function(oe){fe!==oe&&(ge&&(oe=1-oe),i.clearDepth(oe),fe=oe)},reset:function(){F=!1,Me=null,Pe=null,fe=null,ge=!1}}}function s(){let F=!1,ge=null,Me=null,Pe=null,fe=null,oe=null,Ue=null,Ye=null,pt=null;return{setTest:function(ot){F||(ot?re(i.STENCIL_TEST):_e(i.STENCIL_TEST))},setMask:function(ot){ge!==ot&&!F&&(i.stencilMask(ot),ge=ot)},setFunc:function(ot,Un,wn){(Me!==ot||Pe!==Un||fe!==wn)&&(i.stencilFunc(ot,Un,wn),Me=ot,Pe=Un,fe=wn)},setOp:function(ot,Un,wn){(oe!==ot||Ue!==Un||Ye!==wn)&&(i.stencilOp(ot,Un,wn),oe=ot,Ue=Un,Ye=wn)},setLocked:function(ot){F=ot},setClear:function(ot){pt!==ot&&(i.clearStencil(ot),pt=ot)},reset:function(){F=!1,ge=null,Me=null,Pe=null,fe=null,oe=null,Ue=null,Ye=null,pt=null}}}const r=new t,o=new n,a=new s,c=new WeakMap,l=new WeakMap;let h={},u={},d=new WeakMap,f=[],m=null,v=!1,g=null,p=null,M=null,_=null,x=null,w=null,A=null,C=new Fe(0,0,0),P=0,b=!1,S=null,L=null,U=null,N=null,X=null;const z=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let q=!1,ee=0;const W=i.getParameter(i.VERSION);W.indexOf("WebGL")!==-1?(ee=parseFloat(/^WebGL (\d)/.exec(W)[1]),q=ee>=1):W.indexOf("OpenGL ES")!==-1&&(ee=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),q=ee>=2);let le=null,xe={};const ae=i.getParameter(i.SCISSOR_BOX),Ne=i.getParameter(i.VIEWPORT),ze=new rt().fromArray(ae),$e=new rt().fromArray(Ne);function qe(F,ge,Me,Pe){const fe=new Uint8Array(4),oe=i.createTexture();i.bindTexture(F,oe),i.texParameteri(F,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(F,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ue=0;Ue<Me;Ue++)F===i.TEXTURE_3D||F===i.TEXTURE_2D_ARRAY?i.texImage3D(ge,0,i.RGBA,1,1,Pe,0,i.RGBA,i.UNSIGNED_BYTE,fe):i.texImage2D(ge+Ue,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,fe);return oe}const Q={};Q[i.TEXTURE_2D]=qe(i.TEXTURE_2D,i.TEXTURE_2D,1),Q[i.TEXTURE_CUBE_MAP]=qe(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Q[i.TEXTURE_2D_ARRAY]=qe(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Q[i.TEXTURE_3D]=qe(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),re(i.DEPTH_TEST),o.setFunc(gs),V(!1),G(Fc),re(i.CULL_FACE),O(Xn);function re(F){h[F]!==!0&&(i.enable(F),h[F]=!0)}function _e(F){h[F]!==!1&&(i.disable(F),h[F]=!1)}function Le(F,ge){return u[F]!==ge?(i.bindFramebuffer(F,ge),u[F]=ge,F===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=ge),F===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=ge),!0):!1}function Te(F,ge){let Me=f,Pe=!1;if(F){Me=d.get(ge),Me===void 0&&(Me=[],d.set(ge,Me));const fe=F.textures;if(Me.length!==fe.length||Me[0]!==i.COLOR_ATTACHMENT0){for(let oe=0,Ue=fe.length;oe<Ue;oe++)Me[oe]=i.COLOR_ATTACHMENT0+oe;Me.length=fe.length,Pe=!0}}else Me[0]!==i.BACK&&(Me[0]=i.BACK,Pe=!0);Pe&&i.drawBuffers(Me)}function Ie(F){return m!==F?(i.useProgram(F),m=F,!0):!1}const tt={[Ai]:i.FUNC_ADD,[nf]:i.FUNC_SUBTRACT,[sf]:i.FUNC_REVERSE_SUBTRACT};tt[rf]=i.MIN,tt[of]=i.MAX;const D={[af]:i.ZERO,[lf]:i.ONE,[cf]:i.SRC_COLOR,[Wa]:i.SRC_ALPHA,[mf]:i.SRC_ALPHA_SATURATE,[ff]:i.DST_COLOR,[uf]:i.DST_ALPHA,[hf]:i.ONE_MINUS_SRC_COLOR,[Xa]:i.ONE_MINUS_SRC_ALPHA,[pf]:i.ONE_MINUS_DST_COLOR,[df]:i.ONE_MINUS_DST_ALPHA,[gf]:i.CONSTANT_COLOR,[xf]:i.ONE_MINUS_CONSTANT_COLOR,[vf]:i.CONSTANT_ALPHA,[_f]:i.ONE_MINUS_CONSTANT_ALPHA};function O(F,ge,Me,Pe,fe,oe,Ue,Ye,pt,ot){if(F===Xn){v===!0&&(_e(i.BLEND),v=!1);return}if(v===!1&&(re(i.BLEND),v=!0),F!==tf){if(F!==g||ot!==b){if((p!==Ai||x!==Ai)&&(i.blendEquation(i.FUNC_ADD),p=Ai,x=Ai),ot)switch(F){case Di:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ms:i.blendFunc(i.ONE,i.ONE);break;case Oc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case zc:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case Di:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ms:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Oc:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case zc:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}M=null,_=null,w=null,A=null,C.set(0,0,0),P=0,g=F,b=ot}return}fe=fe||ge,oe=oe||Me,Ue=Ue||Pe,(ge!==p||fe!==x)&&(i.blendEquationSeparate(tt[ge],tt[fe]),p=ge,x=fe),(Me!==M||Pe!==_||oe!==w||Ue!==A)&&(i.blendFuncSeparate(D[Me],D[Pe],D[oe],D[Ue]),M=Me,_=Pe,w=oe,A=Ue),(Ye.equals(C)===!1||pt!==P)&&(i.blendColor(Ye.r,Ye.g,Ye.b,pt),C.copy(Ye),P=pt),g=F,b=!1}function H(F,ge){F.side===Bt?_e(i.CULL_FACE):re(i.CULL_FACE);let Me=F.side===kt;ge&&(Me=!Me),V(Me),F.blending===Di&&F.transparent===!1?O(Xn):O(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),o.setFunc(F.depthFunc),o.setTest(F.depthTest),o.setMask(F.depthWrite),r.setMask(F.colorWrite);const Pe=F.stencilWrite;a.setTest(Pe),Pe&&(a.setMask(F.stencilWriteMask),a.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),a.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),ie(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?re(i.SAMPLE_ALPHA_TO_COVERAGE):_e(i.SAMPLE_ALPHA_TO_COVERAGE)}function V(F){S!==F&&(F?i.frontFace(i.CW):i.frontFace(i.CCW),S=F)}function G(F){F!==Qd?(re(i.CULL_FACE),F!==L&&(F===Fc?i.cullFace(i.BACK):F===$d?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):_e(i.CULL_FACE),L=F}function ne(F){F!==U&&(q&&i.lineWidth(F),U=F)}function ie(F,ge,Me){F?(re(i.POLYGON_OFFSET_FILL),(N!==ge||X!==Me)&&(i.polygonOffset(ge,Me),N=ge,X=Me)):_e(i.POLYGON_OFFSET_FILL)}function J(F){F?re(i.SCISSOR_TEST):_e(i.SCISSOR_TEST)}function ce(F){F===void 0&&(F=i.TEXTURE0+z-1),le!==F&&(i.activeTexture(F),le=F)}function ue(F,ge,Me){Me===void 0&&(le===null?Me=i.TEXTURE0+z-1:Me=le);let Pe=xe[Me];Pe===void 0&&(Pe={type:void 0,texture:void 0},xe[Me]=Pe),(Pe.type!==F||Pe.texture!==ge)&&(le!==Me&&(i.activeTexture(Me),le=Me),i.bindTexture(F,ge||Q[F]),Pe.type=F,Pe.texture=ge)}function E(){const F=xe[le];F!==void 0&&F.type!==void 0&&(i.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function y(){try{i.compressedTexImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function I(){try{i.compressedTexImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Y(){try{i.texSubImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function te(){try{i.texSubImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function j(){try{i.compressedTexSubImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Ae(){try{i.compressedTexSubImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function pe(){try{i.texStorage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Ee(){try{i.texStorage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Re(){try{i.texImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function de(){try{i.texImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function we(F){ze.equals(F)===!1&&(i.scissor(F.x,F.y,F.z,F.w),ze.copy(F))}function Ve(F){$e.equals(F)===!1&&(i.viewport(F.x,F.y,F.z,F.w),$e.copy(F))}function Oe(F,ge){let Me=l.get(ge);Me===void 0&&(Me=new WeakMap,l.set(ge,Me));let Pe=Me.get(F);Pe===void 0&&(Pe=i.getUniformBlockIndex(ge,F.name),Me.set(F,Pe))}function Se(F,ge){const Pe=l.get(ge).get(F);c.get(ge)!==Pe&&(i.uniformBlockBinding(ge,Pe,F.__bindingPointIndex),c.set(ge,Pe))}function je(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},le=null,xe={},u={},d=new WeakMap,f=[],m=null,v=!1,g=null,p=null,M=null,_=null,x=null,w=null,A=null,C=new Fe(0,0,0),P=0,b=!1,S=null,L=null,U=null,N=null,X=null,ze.set(0,0,i.canvas.width,i.canvas.height),$e.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:re,disable:_e,bindFramebuffer:Le,drawBuffers:Te,useProgram:Ie,setBlending:O,setMaterial:H,setFlipSided:V,setCullFace:G,setLineWidth:ne,setPolygonOffset:ie,setScissorTest:J,activeTexture:ce,bindTexture:ue,unbindTexture:E,compressedTexImage2D:y,compressedTexImage3D:I,texImage2D:Re,texImage3D:de,updateUBOMapping:Oe,uniformBlockBinding:Se,texStorage2D:pe,texStorage3D:Ee,texSubImage2D:Y,texSubImage3D:te,compressedTexSubImage2D:j,compressedTexSubImage3D:Ae,scissor:we,viewport:Ve,reset:je}}function Kx(i,e,t,n,s,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new se,h=new WeakMap;let u;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(E,y){return f?new OffscreenCanvas(E,y):nr("canvas")}function v(E,y,I){let Y=1;const te=ue(E);if((te.width>I||te.height>I)&&(Y=I/Math.max(te.width,te.height)),Y<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){const j=Math.floor(Y*te.width),Ae=Math.floor(Y*te.height);u===void 0&&(u=m(j,Ae));const pe=y?m(j,Ae):u;return pe.width=j,pe.height=Ae,pe.getContext("2d").drawImage(E,0,0,j,Ae),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+te.width+"x"+te.height+") to ("+j+"x"+Ae+")."),pe}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+te.width+"x"+te.height+")."),E;return E}function g(E){return E.generateMipmaps}function p(E){i.generateMipmap(E)}function M(E){return E.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:E.isWebGL3DRenderTarget?i.TEXTURE_3D:E.isWebGLArrayRenderTarget||E.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function _(E,y,I,Y,te=!1){if(E!==null){if(i[E]!==void 0)return i[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let j=y;if(y===i.RED&&(I===i.FLOAT&&(j=i.R32F),I===i.HALF_FLOAT&&(j=i.R16F),I===i.UNSIGNED_BYTE&&(j=i.R8)),y===i.RED_INTEGER&&(I===i.UNSIGNED_BYTE&&(j=i.R8UI),I===i.UNSIGNED_SHORT&&(j=i.R16UI),I===i.UNSIGNED_INT&&(j=i.R32UI),I===i.BYTE&&(j=i.R8I),I===i.SHORT&&(j=i.R16I),I===i.INT&&(j=i.R32I)),y===i.RG&&(I===i.FLOAT&&(j=i.RG32F),I===i.HALF_FLOAT&&(j=i.RG16F),I===i.UNSIGNED_BYTE&&(j=i.RG8)),y===i.RG_INTEGER&&(I===i.UNSIGNED_BYTE&&(j=i.RG8UI),I===i.UNSIGNED_SHORT&&(j=i.RG16UI),I===i.UNSIGNED_INT&&(j=i.RG32UI),I===i.BYTE&&(j=i.RG8I),I===i.SHORT&&(j=i.RG16I),I===i.INT&&(j=i.RG32I)),y===i.RGB_INTEGER&&(I===i.UNSIGNED_BYTE&&(j=i.RGB8UI),I===i.UNSIGNED_SHORT&&(j=i.RGB16UI),I===i.UNSIGNED_INT&&(j=i.RGB32UI),I===i.BYTE&&(j=i.RGB8I),I===i.SHORT&&(j=i.RGB16I),I===i.INT&&(j=i.RGB32I)),y===i.RGBA_INTEGER&&(I===i.UNSIGNED_BYTE&&(j=i.RGBA8UI),I===i.UNSIGNED_SHORT&&(j=i.RGBA16UI),I===i.UNSIGNED_INT&&(j=i.RGBA32UI),I===i.BYTE&&(j=i.RGBA8I),I===i.SHORT&&(j=i.RGBA16I),I===i.INT&&(j=i.RGBA32I)),y===i.RGB&&(I===i.UNSIGNED_INT_5_9_9_9_REV&&(j=i.RGB9_E5),I===i.UNSIGNED_INT_10F_11F_11F_REV&&(j=i.R11F_G11F_B10F)),y===i.RGBA){const Ae=te?po:nt.getTransfer(Y);I===i.FLOAT&&(j=i.RGBA32F),I===i.HALF_FLOAT&&(j=i.RGBA16F),I===i.UNSIGNED_BYTE&&(j=Ae===lt?i.SRGB8_ALPHA8:i.RGBA8),I===i.UNSIGNED_SHORT_4_4_4_4&&(j=i.RGBA4),I===i.UNSIGNED_SHORT_5_5_5_1&&(j=i.RGB5_A1)}return(j===i.R16F||j===i.R32F||j===i.RG16F||j===i.RG32F||j===i.RGBA16F||j===i.RGBA32F)&&e.get("EXT_color_buffer_float"),j}function x(E,y){let I;return E?y===null||y===Ui||y===$s?I=i.DEPTH24_STENCIL8:y===An?I=i.DEPTH32F_STENCIL8:y===Qs&&(I=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===Ui||y===$s?I=i.DEPTH_COMPONENT24:y===An?I=i.DEPTH_COMPONENT32F:y===Qs&&(I=i.DEPTH_COMPONENT16),I}function w(E,y){return g(E)===!0||E.isFramebufferTexture&&E.minFilter!==Gt&&E.minFilter!==rn?Math.log2(Math.max(y.width,y.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?y.mipmaps.length:1}function A(E){const y=E.target;y.removeEventListener("dispose",A),P(y),y.isVideoTexture&&h.delete(y)}function C(E){const y=E.target;y.removeEventListener("dispose",C),S(y)}function P(E){const y=n.get(E);if(y.__webglInit===void 0)return;const I=E.source,Y=d.get(I);if(Y){const te=Y[y.__cacheKey];te.usedTimes--,te.usedTimes===0&&b(E),Object.keys(Y).length===0&&d.delete(I)}n.remove(E)}function b(E){const y=n.get(E);i.deleteTexture(y.__webglTexture);const I=E.source,Y=d.get(I);delete Y[y.__cacheKey],o.memory.textures--}function S(E){const y=n.get(E);if(E.depthTexture&&(E.depthTexture.dispose(),n.remove(E.depthTexture)),E.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(y.__webglFramebuffer[Y]))for(let te=0;te<y.__webglFramebuffer[Y].length;te++)i.deleteFramebuffer(y.__webglFramebuffer[Y][te]);else i.deleteFramebuffer(y.__webglFramebuffer[Y]);y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer[Y])}else{if(Array.isArray(y.__webglFramebuffer))for(let Y=0;Y<y.__webglFramebuffer.length;Y++)i.deleteFramebuffer(y.__webglFramebuffer[Y]);else i.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&i.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let Y=0;Y<y.__webglColorRenderbuffer.length;Y++)y.__webglColorRenderbuffer[Y]&&i.deleteRenderbuffer(y.__webglColorRenderbuffer[Y]);y.__webglDepthRenderbuffer&&i.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const I=E.textures;for(let Y=0,te=I.length;Y<te;Y++){const j=n.get(I[Y]);j.__webglTexture&&(i.deleteTexture(j.__webglTexture),o.memory.textures--),n.remove(I[Y])}n.remove(E)}let L=0;function U(){L=0}function N(){const E=L;return E>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+s.maxTextures),L+=1,E}function X(E){const y=[];return y.push(E.wrapS),y.push(E.wrapT),y.push(E.wrapR||0),y.push(E.magFilter),y.push(E.minFilter),y.push(E.anisotropy),y.push(E.internalFormat),y.push(E.format),y.push(E.type),y.push(E.generateMipmaps),y.push(E.premultiplyAlpha),y.push(E.flipY),y.push(E.unpackAlignment),y.push(E.colorSpace),y.join()}function z(E,y){const I=n.get(E);if(E.isVideoTexture&&J(E),E.isRenderTargetTexture===!1&&E.isExternalTexture!==!0&&E.version>0&&I.__version!==E.version){const Y=E.image;if(Y===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Q(I,E,y);return}}else E.isExternalTexture&&(I.__webglTexture=E.sourceTexture?E.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,I.__webglTexture,i.TEXTURE0+y)}function q(E,y){const I=n.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&I.__version!==E.version){Q(I,E,y);return}t.bindTexture(i.TEXTURE_2D_ARRAY,I.__webglTexture,i.TEXTURE0+y)}function ee(E,y){const I=n.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&I.__version!==E.version){Q(I,E,y);return}t.bindTexture(i.TEXTURE_3D,I.__webglTexture,i.TEXTURE0+y)}function W(E,y){const I=n.get(E);if(E.version>0&&I.__version!==E.version){re(I,E,y);return}t.bindTexture(i.TEXTURE_CUBE_MAP,I.__webglTexture,i.TEXTURE0+y)}const le={[fi]:i.REPEAT,[Ri]:i.CLAMP_TO_EDGE,[tl]:i.MIRRORED_REPEAT},xe={[Gt]:i.NEAREST,[Sf]:i.NEAREST_MIPMAP_NEAREST,[pr]:i.NEAREST_MIPMAP_LINEAR,[rn]:i.LINEAR,[Xo]:i.LINEAR_MIPMAP_NEAREST,[yn]:i.LINEAR_MIPMAP_LINEAR},ae={[Tf]:i.NEVER,[Df]:i.ALWAYS,[Af]:i.LESS,[ku]:i.LEQUAL,[Cf]:i.EQUAL,[Lf]:i.GEQUAL,[Rf]:i.GREATER,[Pf]:i.NOTEQUAL};function Ne(E,y){if(y.type===An&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===rn||y.magFilter===Xo||y.magFilter===pr||y.magFilter===yn||y.minFilter===rn||y.minFilter===Xo||y.minFilter===pr||y.minFilter===yn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(E,i.TEXTURE_WRAP_S,le[y.wrapS]),i.texParameteri(E,i.TEXTURE_WRAP_T,le[y.wrapT]),(E===i.TEXTURE_3D||E===i.TEXTURE_2D_ARRAY)&&i.texParameteri(E,i.TEXTURE_WRAP_R,le[y.wrapR]),i.texParameteri(E,i.TEXTURE_MAG_FILTER,xe[y.magFilter]),i.texParameteri(E,i.TEXTURE_MIN_FILTER,xe[y.minFilter]),y.compareFunction&&(i.texParameteri(E,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(E,i.TEXTURE_COMPARE_FUNC,ae[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===Gt||y.minFilter!==pr&&y.minFilter!==yn||y.type===An&&e.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||n.get(y).__currentAnisotropy){const I=e.get("EXT_texture_filter_anisotropic");i.texParameterf(E,I.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,s.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy}}}function ze(E,y){let I=!1;E.__webglInit===void 0&&(E.__webglInit=!0,y.addEventListener("dispose",A));const Y=y.source;let te=d.get(Y);te===void 0&&(te={},d.set(Y,te));const j=X(y);if(j!==E.__cacheKey){te[j]===void 0&&(te[j]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,I=!0),te[j].usedTimes++;const Ae=te[E.__cacheKey];Ae!==void 0&&(te[E.__cacheKey].usedTimes--,Ae.usedTimes===0&&b(y)),E.__cacheKey=j,E.__webglTexture=te[j].texture}return I}function $e(E,y,I){return Math.floor(Math.floor(E/I)/y)}function qe(E,y,I,Y){const j=E.updateRanges;if(j.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,y.width,y.height,I,Y,y.data);else{j.sort((de,we)=>de.start-we.start);let Ae=0;for(let de=1;de<j.length;de++){const we=j[Ae],Ve=j[de],Oe=we.start+we.count,Se=$e(Ve.start,y.width,4),je=$e(we.start,y.width,4);Ve.start<=Oe+1&&Se===je&&$e(Ve.start+Ve.count-1,y.width,4)===Se?we.count=Math.max(we.count,Ve.start+Ve.count-we.start):(++Ae,j[Ae]=Ve)}j.length=Ae+1;const pe=i.getParameter(i.UNPACK_ROW_LENGTH),Ee=i.getParameter(i.UNPACK_SKIP_PIXELS),Re=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,y.width);for(let de=0,we=j.length;de<we;de++){const Ve=j[de],Oe=Math.floor(Ve.start/4),Se=Math.ceil(Ve.count/4),je=Oe%y.width,F=Math.floor(Oe/y.width),ge=Se,Me=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,je),i.pixelStorei(i.UNPACK_SKIP_ROWS,F),t.texSubImage2D(i.TEXTURE_2D,0,je,F,ge,Me,I,Y,y.data)}E.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,pe),i.pixelStorei(i.UNPACK_SKIP_PIXELS,Ee),i.pixelStorei(i.UNPACK_SKIP_ROWS,Re)}}function Q(E,y,I){let Y=i.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(Y=i.TEXTURE_2D_ARRAY),y.isData3DTexture&&(Y=i.TEXTURE_3D);const te=ze(E,y),j=y.source;t.bindTexture(Y,E.__webglTexture,i.TEXTURE0+I);const Ae=n.get(j);if(j.version!==Ae.__version||te===!0){t.activeTexture(i.TEXTURE0+I);const pe=nt.getPrimaries(nt.workingColorSpace),Ee=y.colorSpace===li?null:nt.getPrimaries(y.colorSpace),Re=y.colorSpace===li||pe===Ee?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Re);let de=v(y.image,!1,s.maxTextureSize);de=ce(y,de);const we=r.convert(y.format,y.colorSpace),Ve=r.convert(y.type);let Oe=_(y.internalFormat,we,Ve,y.colorSpace,y.isVideoTexture);Ne(Y,y);let Se;const je=y.mipmaps,F=y.isVideoTexture!==!0,ge=Ae.__version===void 0||te===!0,Me=j.dataReady,Pe=w(y,de);if(y.isDepthTexture)Oe=x(y.format===tr,y.type),ge&&(F?t.texStorage2D(i.TEXTURE_2D,1,Oe,de.width,de.height):t.texImage2D(i.TEXTURE_2D,0,Oe,de.width,de.height,0,we,Ve,null));else if(y.isDataTexture)if(je.length>0){F&&ge&&t.texStorage2D(i.TEXTURE_2D,Pe,Oe,je[0].width,je[0].height);for(let fe=0,oe=je.length;fe<oe;fe++)Se=je[fe],F?Me&&t.texSubImage2D(i.TEXTURE_2D,fe,0,0,Se.width,Se.height,we,Ve,Se.data):t.texImage2D(i.TEXTURE_2D,fe,Oe,Se.width,Se.height,0,we,Ve,Se.data);y.generateMipmaps=!1}else F?(ge&&t.texStorage2D(i.TEXTURE_2D,Pe,Oe,de.width,de.height),Me&&qe(y,de,we,Ve)):t.texImage2D(i.TEXTURE_2D,0,Oe,de.width,de.height,0,we,Ve,de.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){F&&ge&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Pe,Oe,je[0].width,je[0].height,de.depth);for(let fe=0,oe=je.length;fe<oe;fe++)if(Se=je[fe],y.format!==on)if(we!==null)if(F){if(Me)if(y.layerUpdates.size>0){const Ue=bh(Se.width,Se.height,y.format,y.type);for(const Ye of y.layerUpdates){const pt=Se.data.subarray(Ye*Ue/Se.data.BYTES_PER_ELEMENT,(Ye+1)*Ue/Se.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,fe,0,0,Ye,Se.width,Se.height,1,we,pt)}y.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,fe,0,0,0,Se.width,Se.height,de.depth,we,Se.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,fe,Oe,Se.width,Se.height,de.depth,0,Se.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else F?Me&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,fe,0,0,0,Se.width,Se.height,de.depth,we,Ve,Se.data):t.texImage3D(i.TEXTURE_2D_ARRAY,fe,Oe,Se.width,Se.height,de.depth,0,we,Ve,Se.data)}else{F&&ge&&t.texStorage2D(i.TEXTURE_2D,Pe,Oe,je[0].width,je[0].height);for(let fe=0,oe=je.length;fe<oe;fe++)Se=je[fe],y.format!==on?we!==null?F?Me&&t.compressedTexSubImage2D(i.TEXTURE_2D,fe,0,0,Se.width,Se.height,we,Se.data):t.compressedTexImage2D(i.TEXTURE_2D,fe,Oe,Se.width,Se.height,0,Se.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):F?Me&&t.texSubImage2D(i.TEXTURE_2D,fe,0,0,Se.width,Se.height,we,Ve,Se.data):t.texImage2D(i.TEXTURE_2D,fe,Oe,Se.width,Se.height,0,we,Ve,Se.data)}else if(y.isDataArrayTexture)if(F){if(ge&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Pe,Oe,de.width,de.height,de.depth),Me)if(y.layerUpdates.size>0){const fe=bh(de.width,de.height,y.format,y.type);for(const oe of y.layerUpdates){const Ue=de.data.subarray(oe*fe/de.data.BYTES_PER_ELEMENT,(oe+1)*fe/de.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,oe,de.width,de.height,1,we,Ve,Ue)}y.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,de.width,de.height,de.depth,we,Ve,de.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Oe,de.width,de.height,de.depth,0,we,Ve,de.data);else if(y.isData3DTexture)F?(ge&&t.texStorage3D(i.TEXTURE_3D,Pe,Oe,de.width,de.height,de.depth),Me&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,de.width,de.height,de.depth,we,Ve,de.data)):t.texImage3D(i.TEXTURE_3D,0,Oe,de.width,de.height,de.depth,0,we,Ve,de.data);else if(y.isFramebufferTexture){if(ge)if(F)t.texStorage2D(i.TEXTURE_2D,Pe,Oe,de.width,de.height);else{let fe=de.width,oe=de.height;for(let Ue=0;Ue<Pe;Ue++)t.texImage2D(i.TEXTURE_2D,Ue,Oe,fe,oe,0,we,Ve,null),fe>>=1,oe>>=1}}else if(je.length>0){if(F&&ge){const fe=ue(je[0]);t.texStorage2D(i.TEXTURE_2D,Pe,Oe,fe.width,fe.height)}for(let fe=0,oe=je.length;fe<oe;fe++)Se=je[fe],F?Me&&t.texSubImage2D(i.TEXTURE_2D,fe,0,0,we,Ve,Se):t.texImage2D(i.TEXTURE_2D,fe,Oe,we,Ve,Se);y.generateMipmaps=!1}else if(F){if(ge){const fe=ue(de);t.texStorage2D(i.TEXTURE_2D,Pe,Oe,fe.width,fe.height)}Me&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,we,Ve,de)}else t.texImage2D(i.TEXTURE_2D,0,Oe,we,Ve,de);g(y)&&p(Y),Ae.__version=j.version,y.onUpdate&&y.onUpdate(y)}E.__version=y.version}function re(E,y,I){if(y.image.length!==6)return;const Y=ze(E,y),te=y.source;t.bindTexture(i.TEXTURE_CUBE_MAP,E.__webglTexture,i.TEXTURE0+I);const j=n.get(te);if(te.version!==j.__version||Y===!0){t.activeTexture(i.TEXTURE0+I);const Ae=nt.getPrimaries(nt.workingColorSpace),pe=y.colorSpace===li?null:nt.getPrimaries(y.colorSpace),Ee=y.colorSpace===li||Ae===pe?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ee);const Re=y.isCompressedTexture||y.image[0].isCompressedTexture,de=y.image[0]&&y.image[0].isDataTexture,we=[];for(let oe=0;oe<6;oe++)!Re&&!de?we[oe]=v(y.image[oe],!0,s.maxCubemapSize):we[oe]=de?y.image[oe].image:y.image[oe],we[oe]=ce(y,we[oe]);const Ve=we[0],Oe=r.convert(y.format,y.colorSpace),Se=r.convert(y.type),je=_(y.internalFormat,Oe,Se,y.colorSpace),F=y.isVideoTexture!==!0,ge=j.__version===void 0||Y===!0,Me=te.dataReady;let Pe=w(y,Ve);Ne(i.TEXTURE_CUBE_MAP,y);let fe;if(Re){F&&ge&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Pe,je,Ve.width,Ve.height);for(let oe=0;oe<6;oe++){fe=we[oe].mipmaps;for(let Ue=0;Ue<fe.length;Ue++){const Ye=fe[Ue];y.format!==on?Oe!==null?F?Me&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Ue,0,0,Ye.width,Ye.height,Oe,Ye.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Ue,je,Ye.width,Ye.height,0,Ye.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):F?Me&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Ue,0,0,Ye.width,Ye.height,Oe,Se,Ye.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Ue,je,Ye.width,Ye.height,0,Oe,Se,Ye.data)}}}else{if(fe=y.mipmaps,F&&ge){fe.length>0&&Pe++;const oe=ue(we[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Pe,je,oe.width,oe.height)}for(let oe=0;oe<6;oe++)if(de){F?Me&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,0,0,we[oe].width,we[oe].height,Oe,Se,we[oe].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,je,we[oe].width,we[oe].height,0,Oe,Se,we[oe].data);for(let Ue=0;Ue<fe.length;Ue++){const pt=fe[Ue].image[oe].image;F?Me&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Ue+1,0,0,pt.width,pt.height,Oe,Se,pt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Ue+1,je,pt.width,pt.height,0,Oe,Se,pt.data)}}else{F?Me&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,0,0,Oe,Se,we[oe]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,je,Oe,Se,we[oe]);for(let Ue=0;Ue<fe.length;Ue++){const Ye=fe[Ue];F?Me&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Ue+1,0,0,Oe,Se,Ye.image[oe]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Ue+1,je,Oe,Se,Ye.image[oe])}}}g(y)&&p(i.TEXTURE_CUBE_MAP),j.__version=te.version,y.onUpdate&&y.onUpdate(y)}E.__version=y.version}function _e(E,y,I,Y,te,j){const Ae=r.convert(I.format,I.colorSpace),pe=r.convert(I.type),Ee=_(I.internalFormat,Ae,pe,I.colorSpace),Re=n.get(y),de=n.get(I);if(de.__renderTarget=y,!Re.__hasExternalTextures){const we=Math.max(1,y.width>>j),Ve=Math.max(1,y.height>>j);te===i.TEXTURE_3D||te===i.TEXTURE_2D_ARRAY?t.texImage3D(te,j,Ee,we,Ve,y.depth,0,Ae,pe,null):t.texImage2D(te,j,Ee,we,Ve,0,Ae,pe,null)}t.bindFramebuffer(i.FRAMEBUFFER,E),ie(y)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Y,te,de.__webglTexture,0,ne(y)):(te===i.TEXTURE_2D||te>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&te<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Y,te,de.__webglTexture,j),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Le(E,y,I){if(i.bindRenderbuffer(i.RENDERBUFFER,E),y.depthBuffer){const Y=y.depthTexture,te=Y&&Y.isDepthTexture?Y.type:null,j=x(y.stencilBuffer,te),Ae=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,pe=ne(y);ie(y)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,pe,j,y.width,y.height):I?i.renderbufferStorageMultisample(i.RENDERBUFFER,pe,j,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,j,y.width,y.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Ae,i.RENDERBUFFER,E)}else{const Y=y.textures;for(let te=0;te<Y.length;te++){const j=Y[te],Ae=r.convert(j.format,j.colorSpace),pe=r.convert(j.type),Ee=_(j.internalFormat,Ae,pe,j.colorSpace),Re=ne(y);I&&ie(y)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Re,Ee,y.width,y.height):ie(y)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Re,Ee,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,Ee,y.width,y.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Te(E,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,E),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Y=n.get(y.depthTexture);Y.__renderTarget=y,(!Y.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),z(y.depthTexture,0);const te=Y.__webglTexture,j=ne(y);if(y.depthTexture.format===er)ie(y)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,te,0,j):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,te,0);else if(y.depthTexture.format===tr)ie(y)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,te,0,j):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,te,0);else throw new Error("Unknown depthTexture format")}function Ie(E){const y=n.get(E),I=E.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==E.depthTexture){const Y=E.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),Y){const te=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,Y.removeEventListener("dispose",te)};Y.addEventListener("dispose",te),y.__depthDisposeCallback=te}y.__boundDepthTexture=Y}if(E.depthTexture&&!y.__autoAllocateDepthBuffer){if(I)throw new Error("target.depthTexture not supported in Cube render targets");const Y=E.texture.mipmaps;Y&&Y.length>0?Te(y.__webglFramebuffer[0],E):Te(y.__webglFramebuffer,E)}else if(I){y.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(t.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer[Y]),y.__webglDepthbuffer[Y]===void 0)y.__webglDepthbuffer[Y]=i.createRenderbuffer(),Le(y.__webglDepthbuffer[Y],E,!1);else{const te=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,j=y.__webglDepthbuffer[Y];i.bindRenderbuffer(i.RENDERBUFFER,j),i.framebufferRenderbuffer(i.FRAMEBUFFER,te,i.RENDERBUFFER,j)}}else{const Y=E.texture.mipmaps;if(Y&&Y.length>0?t.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=i.createRenderbuffer(),Le(y.__webglDepthbuffer,E,!1);else{const te=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,j=y.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,j),i.framebufferRenderbuffer(i.FRAMEBUFFER,te,i.RENDERBUFFER,j)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function tt(E,y,I){const Y=n.get(E);y!==void 0&&_e(Y.__webglFramebuffer,E,E.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),I!==void 0&&Ie(E)}function D(E){const y=E.texture,I=n.get(E),Y=n.get(y);E.addEventListener("dispose",C);const te=E.textures,j=E.isWebGLCubeRenderTarget===!0,Ae=te.length>1;if(Ae||(Y.__webglTexture===void 0&&(Y.__webglTexture=i.createTexture()),Y.__version=y.version,o.memory.textures++),j){I.__webglFramebuffer=[];for(let pe=0;pe<6;pe++)if(y.mipmaps&&y.mipmaps.length>0){I.__webglFramebuffer[pe]=[];for(let Ee=0;Ee<y.mipmaps.length;Ee++)I.__webglFramebuffer[pe][Ee]=i.createFramebuffer()}else I.__webglFramebuffer[pe]=i.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){I.__webglFramebuffer=[];for(let pe=0;pe<y.mipmaps.length;pe++)I.__webglFramebuffer[pe]=i.createFramebuffer()}else I.__webglFramebuffer=i.createFramebuffer();if(Ae)for(let pe=0,Ee=te.length;pe<Ee;pe++){const Re=n.get(te[pe]);Re.__webglTexture===void 0&&(Re.__webglTexture=i.createTexture(),o.memory.textures++)}if(E.samples>0&&ie(E)===!1){I.__webglMultisampledFramebuffer=i.createFramebuffer(),I.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,I.__webglMultisampledFramebuffer);for(let pe=0;pe<te.length;pe++){const Ee=te[pe];I.__webglColorRenderbuffer[pe]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,I.__webglColorRenderbuffer[pe]);const Re=r.convert(Ee.format,Ee.colorSpace),de=r.convert(Ee.type),we=_(Ee.internalFormat,Re,de,Ee.colorSpace,E.isXRRenderTarget===!0),Ve=ne(E);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ve,we,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+pe,i.RENDERBUFFER,I.__webglColorRenderbuffer[pe])}i.bindRenderbuffer(i.RENDERBUFFER,null),E.depthBuffer&&(I.__webglDepthRenderbuffer=i.createRenderbuffer(),Le(I.__webglDepthRenderbuffer,E,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(j){t.bindTexture(i.TEXTURE_CUBE_MAP,Y.__webglTexture),Ne(i.TEXTURE_CUBE_MAP,y);for(let pe=0;pe<6;pe++)if(y.mipmaps&&y.mipmaps.length>0)for(let Ee=0;Ee<y.mipmaps.length;Ee++)_e(I.__webglFramebuffer[pe][Ee],E,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ee);else _e(I.__webglFramebuffer[pe],E,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0);g(y)&&p(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ae){for(let pe=0,Ee=te.length;pe<Ee;pe++){const Re=te[pe],de=n.get(Re);let we=i.TEXTURE_2D;(E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(we=E.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(we,de.__webglTexture),Ne(we,Re),_e(I.__webglFramebuffer,E,Re,i.COLOR_ATTACHMENT0+pe,we,0),g(Re)&&p(we)}t.unbindTexture()}else{let pe=i.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(pe=E.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(pe,Y.__webglTexture),Ne(pe,y),y.mipmaps&&y.mipmaps.length>0)for(let Ee=0;Ee<y.mipmaps.length;Ee++)_e(I.__webglFramebuffer[Ee],E,y,i.COLOR_ATTACHMENT0,pe,Ee);else _e(I.__webglFramebuffer,E,y,i.COLOR_ATTACHMENT0,pe,0);g(y)&&p(pe),t.unbindTexture()}E.depthBuffer&&Ie(E)}function O(E){const y=E.textures;for(let I=0,Y=y.length;I<Y;I++){const te=y[I];if(g(te)){const j=M(E),Ae=n.get(te).__webglTexture;t.bindTexture(j,Ae),p(j),t.unbindTexture()}}}const H=[],V=[];function G(E){if(E.samples>0){if(ie(E)===!1){const y=E.textures,I=E.width,Y=E.height;let te=i.COLOR_BUFFER_BIT;const j=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ae=n.get(E),pe=y.length>1;if(pe)for(let Re=0;Re<y.length;Re++)t.bindFramebuffer(i.FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Re,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Ae.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Re,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Ae.__webglMultisampledFramebuffer);const Ee=E.texture.mipmaps;Ee&&Ee.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ae.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ae.__webglFramebuffer);for(let Re=0;Re<y.length;Re++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(te|=i.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(te|=i.STENCIL_BUFFER_BIT)),pe){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ae.__webglColorRenderbuffer[Re]);const de=n.get(y[Re]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,de,0)}i.blitFramebuffer(0,0,I,Y,0,0,I,Y,te,i.NEAREST),c===!0&&(H.length=0,V.length=0,H.push(i.COLOR_ATTACHMENT0+Re),E.depthBuffer&&E.resolveDepthBuffer===!1&&(H.push(j),V.push(j),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,V)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,H))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),pe)for(let Re=0;Re<y.length;Re++){t.bindFramebuffer(i.FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Re,i.RENDERBUFFER,Ae.__webglColorRenderbuffer[Re]);const de=n.get(y[Re]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Ae.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Re,i.TEXTURE_2D,de,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ae.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.resolveDepthBuffer===!1&&c){const y=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[y])}}}function ne(E){return Math.min(s.maxSamples,E.samples)}function ie(E){const y=n.get(E);return E.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function J(E){const y=o.render.frame;h.get(E)!==y&&(h.set(E,y),E.update())}function ce(E,y){const I=E.colorSpace,Y=E.format,te=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||I!==_s&&I!==li&&(nt.getTransfer(I)===lt?(Y!==on||te!==Pn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",I)),y}function ue(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(l.width=E.naturalWidth||E.width,l.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(l.width=E.displayWidth,l.height=E.displayHeight):(l.width=E.width,l.height=E.height),l}this.allocateTextureUnit=N,this.resetTextureUnits=U,this.setTexture2D=z,this.setTexture2DArray=q,this.setTexture3D=ee,this.setTextureCube=W,this.rebindTextures=tt,this.setupRenderTarget=D,this.updateRenderTargetMipmap=O,this.updateMultisampleRenderTarget=G,this.setupDepthRenderbuffer=Ie,this.setupFrameBufferTexture=_e,this.useMultisampledRTT=ie}function Zx(i,e){function t(n,s=li){let r;const o=nt.getTransfer(s);if(n===Pn)return i.UNSIGNED_BYTE;if(n===Ql)return i.UNSIGNED_SHORT_4_4_4_4;if(n===$l)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Nu)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Fu)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Iu)return i.BYTE;if(n===Uu)return i.SHORT;if(n===Qs)return i.UNSIGNED_SHORT;if(n===Jl)return i.INT;if(n===Ui)return i.UNSIGNED_INT;if(n===An)return i.FLOAT;if(n===bn)return i.HALF_FLOAT;if(n===Ou)return i.ALPHA;if(n===zu)return i.RGB;if(n===on)return i.RGBA;if(n===er)return i.DEPTH_COMPONENT;if(n===tr)return i.DEPTH_STENCIL;if(n===ec)return i.RED;if(n===tc)return i.RED_INTEGER;if(n===Bu)return i.RG;if(n===nc)return i.RG_INTEGER;if(n===ic)return i.RGBA_INTEGER;if(n===to||n===no||n===io||n===so)if(o===lt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===to)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===no)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===io)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===so)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===to)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===no)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===io)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===so)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===nl||n===il||n===sl||n===rl)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===nl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===il)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===sl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===rl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ol||n===al||n===ll)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===ol||n===al)return o===lt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===ll)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===cl||n===hl||n===ul||n===dl||n===fl||n===pl||n===ml||n===gl||n===xl||n===vl||n===_l||n===Ml||n===yl||n===Sl)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===cl)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===hl)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ul)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===dl)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===fl)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===pl)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ml)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===gl)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===xl)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===vl)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===_l)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ml)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===yl)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Sl)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===bl||n===wl||n===El)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===bl)return o===lt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===wl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===El)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Tl||n===Al||n===Cl||n===Rl)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Tl)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Al)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Cl)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Rl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===$s?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const Jx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Qx=`
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

}`;class $x{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new ed(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new xt({vertexShader:Jx,fragmentShader:Qx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new at(new Wt(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class ev extends Cs{constructor(e,t){super();const n=this;let s=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,u=null,d=null,f=null,m=null;const v=typeof XRWebGLBinding<"u",g=new $x,p={},M=t.getContextAttributes();let _=null,x=null;const w=[],A=[],C=new se;let P=null;const b=new zt;b.viewport=new rt;const S=new zt;S.viewport=new rt;const L=[b,S],U=new Mm;let N=null,X=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let re=w[Q];return re===void 0&&(re=new da,w[Q]=re),re.getTargetRaySpace()},this.getControllerGrip=function(Q){let re=w[Q];return re===void 0&&(re=new da,w[Q]=re),re.getGripSpace()},this.getHand=function(Q){let re=w[Q];return re===void 0&&(re=new da,w[Q]=re),re.getHandSpace()};function z(Q){const re=A.indexOf(Q.inputSource);if(re===-1)return;const _e=w[re];_e!==void 0&&(_e.update(Q.inputSource,Q.frame,l||o),_e.dispatchEvent({type:Q.type,data:Q.inputSource}))}function q(){s.removeEventListener("select",z),s.removeEventListener("selectstart",z),s.removeEventListener("selectend",z),s.removeEventListener("squeeze",z),s.removeEventListener("squeezestart",z),s.removeEventListener("squeezeend",z),s.removeEventListener("end",q),s.removeEventListener("inputsourceschange",ee);for(let Q=0;Q<w.length;Q++){const re=A[Q];re!==null&&(A[Q]=null,w[Q].disconnect(re))}N=null,X=null,g.reset();for(const Q in p)delete p[Q];e.setRenderTarget(_),f=null,d=null,u=null,s=null,x=null,qe.stop(),n.isPresenting=!1,e.setPixelRatio(P),e.setSize(C.width,C.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){r=Q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){a=Q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(Q){l=Q},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u===null&&v&&(u=new XRWebGLBinding(s,t)),u},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(Q){if(s=Q,s!==null){if(_=e.getRenderTarget(),s.addEventListener("select",z),s.addEventListener("selectstart",z),s.addEventListener("selectend",z),s.addEventListener("squeeze",z),s.addEventListener("squeezestart",z),s.addEventListener("squeezeend",z),s.addEventListener("end",q),s.addEventListener("inputsourceschange",ee),M.xrCompatible!==!0&&await t.makeXRCompatible(),P=e.getPixelRatio(),e.getSize(C),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let _e=null,Le=null,Te=null;M.depth&&(Te=M.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,_e=M.stencil?tr:er,Le=M.stencil?$s:Ui);const Ie={colorFormat:t.RGBA8,depthFormat:Te,scaleFactor:r};u=this.getBinding(),d=u.createProjectionLayer(Ie),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),x=new Kt(d.textureWidth,d.textureHeight,{format:on,type:Pn,depthTexture:new $u(d.textureWidth,d.textureHeight,Le,void 0,void 0,void 0,void 0,void 0,void 0,_e),stencilBuffer:M.stencil,colorSpace:e.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const _e={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,_e),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),x=new Kt(f.framebufferWidth,f.framebufferHeight,{format:on,type:Pn,colorSpace:e.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),qe.setContext(s),qe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function ee(Q){for(let re=0;re<Q.removed.length;re++){const _e=Q.removed[re],Le=A.indexOf(_e);Le>=0&&(A[Le]=null,w[Le].disconnect(_e))}for(let re=0;re<Q.added.length;re++){const _e=Q.added[re];let Le=A.indexOf(_e);if(Le===-1){for(let Ie=0;Ie<w.length;Ie++)if(Ie>=A.length){A.push(_e),Le=Ie;break}else if(A[Ie]===null){A[Ie]=_e,Le=Ie;break}if(Le===-1)break}const Te=w[Le];Te&&Te.connect(_e)}}const W=new R,le=new R;function xe(Q,re,_e){W.setFromMatrixPosition(re.matrixWorld),le.setFromMatrixPosition(_e.matrixWorld);const Le=W.distanceTo(le),Te=re.projectionMatrix.elements,Ie=_e.projectionMatrix.elements,tt=Te[14]/(Te[10]-1),D=Te[14]/(Te[10]+1),O=(Te[9]+1)/Te[5],H=(Te[9]-1)/Te[5],V=(Te[8]-1)/Te[0],G=(Ie[8]+1)/Ie[0],ne=tt*V,ie=tt*G,J=Le/(-V+G),ce=J*-V;if(re.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(ce),Q.translateZ(J),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert(),Te[10]===-1)Q.projectionMatrix.copy(re.projectionMatrix),Q.projectionMatrixInverse.copy(re.projectionMatrixInverse);else{const ue=tt+J,E=D+J,y=ne-ce,I=ie+(Le-ce),Y=O*D/E*ue,te=H*D/E*ue;Q.projectionMatrix.makePerspective(y,I,Y,te,ue,E),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}}function ae(Q,re){re===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(re.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(s===null)return;let re=Q.near,_e=Q.far;g.texture!==null&&(g.depthNear>0&&(re=g.depthNear),g.depthFar>0&&(_e=g.depthFar)),U.near=S.near=b.near=re,U.far=S.far=b.far=_e,(N!==U.near||X!==U.far)&&(s.updateRenderState({depthNear:U.near,depthFar:U.far}),N=U.near,X=U.far),U.layers.mask=Q.layers.mask|6,b.layers.mask=U.layers.mask&3,S.layers.mask=U.layers.mask&5;const Le=Q.parent,Te=U.cameras;ae(U,Le);for(let Ie=0;Ie<Te.length;Ie++)ae(Te[Ie],Le);Te.length===2?xe(U,b,S):U.projectionMatrix.copy(b.projectionMatrix),Ne(Q,U,Le)};function Ne(Q,re,_e){_e===null?Q.matrix.copy(re.matrixWorld):(Q.matrix.copy(_e.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(re.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(re.projectionMatrix),Q.projectionMatrixInverse.copy(re.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=Ms*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return U},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(Q){c=Q,d!==null&&(d.fixedFoveation=Q),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Q)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(U)},this.getCameraTexture=function(Q){return p[Q]};let ze=null;function $e(Q,re){if(h=re.getViewerPose(l||o),m=re,h!==null){const _e=h.views;f!==null&&(e.setRenderTargetFramebuffer(x,f.framebuffer),e.setRenderTarget(x));let Le=!1;_e.length!==U.cameras.length&&(U.cameras.length=0,Le=!0);for(let D=0;D<_e.length;D++){const O=_e[D];let H=null;if(f!==null)H=f.getViewport(O);else{const G=u.getViewSubImage(d,O);H=G.viewport,D===0&&(e.setRenderTargetTextures(x,G.colorTexture,G.depthStencilTexture),e.setRenderTarget(x))}let V=L[D];V===void 0&&(V=new zt,V.layers.enable(D),V.viewport=new rt,L[D]=V),V.matrix.fromArray(O.transform.matrix),V.matrix.decompose(V.position,V.quaternion,V.scale),V.projectionMatrix.fromArray(O.projectionMatrix),V.projectionMatrixInverse.copy(V.projectionMatrix).invert(),V.viewport.set(H.x,H.y,H.width,H.height),D===0&&(U.matrix.copy(V.matrix),U.matrix.decompose(U.position,U.quaternion,U.scale)),Le===!0&&U.cameras.push(V)}const Te=s.enabledFeatures;if(Te&&Te.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&v){u=n.getBinding();const D=u.getDepthInformation(_e[0]);D&&D.isValid&&D.texture&&g.init(D,s.renderState)}if(Te&&Te.includes("camera-access")&&v){e.state.unbindTexture(),u=n.getBinding();for(let D=0;D<_e.length;D++){const O=_e[D].camera;if(O){let H=p[O];H||(H=new ed,p[O]=H);const V=u.getCameraImage(O);H.sourceTexture=V}}}}for(let _e=0;_e<w.length;_e++){const Le=A[_e],Te=w[_e];Le!==null&&Te!==void 0&&Te.update(Le,re,l||o)}ze&&ze(Q,re),re.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:re}),m=null}const qe=new hd;qe.setAnimationLoop($e),this.setAnimationLoop=function(Q){ze=Q},this.dispose=function(){}}}const Si=new $t,tv=new Ze;function nv(i,e){function t(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function n(g,p){p.color.getRGB(g.fogColor.value,ju(i)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function s(g,p,M,_,x){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(g,p):p.isMeshToonMaterial?(r(g,p),u(g,p)):p.isMeshPhongMaterial?(r(g,p),h(g,p)):p.isMeshStandardMaterial?(r(g,p),d(g,p),p.isMeshPhysicalMaterial&&f(g,p,x)):p.isMeshMatcapMaterial?(r(g,p),m(g,p)):p.isMeshDepthMaterial?r(g,p):p.isMeshDistanceMaterial?(r(g,p),v(g,p)):p.isMeshNormalMaterial?r(g,p):p.isLineBasicMaterial?(o(g,p),p.isLineDashedMaterial&&a(g,p)):p.isPointsMaterial?c(g,p,M,_):p.isSpriteMaterial?l(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,t(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===kt&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,t(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===kt&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,t(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,t(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);const M=e.get(p),_=M.envMap,x=M.envMapRotation;_&&(g.envMap.value=_,Si.copy(x),Si.x*=-1,Si.y*=-1,Si.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(Si.y*=-1,Si.z*=-1),g.envMapRotation.value.setFromMatrix4(tv.makeRotationFromEuler(Si)),g.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,g.aoMapTransform))}function o(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform))}function a(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function c(g,p,M,_){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*M,g.scale.value=_*.5,p.map&&(g.map.value=p.map,t(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function l(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function h(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function u(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function d(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function f(g,p,M){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===kt&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=M.texture,g.transmissionSamplerSize.value.set(M.width,M.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function v(g,p){const M=e.get(p).light;g.referencePosition.value.setFromMatrixPosition(M.matrixWorld),g.nearDistance.value=M.shadow.camera.near,g.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function iv(i,e,t,n){let s={},r={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(M,_){const x=_.program;n.uniformBlockBinding(M,x)}function l(M,_){let x=s[M.id];x===void 0&&(m(M),x=h(M),s[M.id]=x,M.addEventListener("dispose",g));const w=_.program;n.updateUBOMapping(M,w);const A=e.render.frame;r[M.id]!==A&&(d(M),r[M.id]=A)}function h(M){const _=u();M.__bindingPointIndex=_;const x=i.createBuffer(),w=M.__size,A=M.usage;return i.bindBuffer(i.UNIFORM_BUFFER,x),i.bufferData(i.UNIFORM_BUFFER,w,A),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,_,x),x}function u(){for(let M=0;M<a;M++)if(o.indexOf(M)===-1)return o.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(M){const _=s[M.id],x=M.uniforms,w=M.__cache;i.bindBuffer(i.UNIFORM_BUFFER,_);for(let A=0,C=x.length;A<C;A++){const P=Array.isArray(x[A])?x[A]:[x[A]];for(let b=0,S=P.length;b<S;b++){const L=P[b];if(f(L,A,b,w)===!0){const U=L.__offset,N=Array.isArray(L.value)?L.value:[L.value];let X=0;for(let z=0;z<N.length;z++){const q=N[z],ee=v(q);typeof q=="number"||typeof q=="boolean"?(L.__data[0]=q,i.bufferSubData(i.UNIFORM_BUFFER,U+X,L.__data)):q.isMatrix3?(L.__data[0]=q.elements[0],L.__data[1]=q.elements[1],L.__data[2]=q.elements[2],L.__data[3]=0,L.__data[4]=q.elements[3],L.__data[5]=q.elements[4],L.__data[6]=q.elements[5],L.__data[7]=0,L.__data[8]=q.elements[6],L.__data[9]=q.elements[7],L.__data[10]=q.elements[8],L.__data[11]=0):(q.toArray(L.__data,X),X+=ee.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,U,L.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(M,_,x,w){const A=M.value,C=_+"_"+x;if(w[C]===void 0)return typeof A=="number"||typeof A=="boolean"?w[C]=A:w[C]=A.clone(),!0;{const P=w[C];if(typeof A=="number"||typeof A=="boolean"){if(P!==A)return w[C]=A,!0}else if(P.equals(A)===!1)return P.copy(A),!0}return!1}function m(M){const _=M.uniforms;let x=0;const w=16;for(let C=0,P=_.length;C<P;C++){const b=Array.isArray(_[C])?_[C]:[_[C]];for(let S=0,L=b.length;S<L;S++){const U=b[S],N=Array.isArray(U.value)?U.value:[U.value];for(let X=0,z=N.length;X<z;X++){const q=N[X],ee=v(q),W=x%w,le=W%ee.boundary,xe=W+le;x+=le,xe!==0&&w-xe<ee.storage&&(x+=w-xe),U.__data=new Float32Array(ee.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=x,x+=ee.storage}}}const A=x%w;return A>0&&(x+=w-A),M.__size=x,M.__cache={},this}function v(M){const _={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(_.boundary=4,_.storage=4):M.isVector2?(_.boundary=8,_.storage=8):M.isVector3||M.isColor?(_.boundary=16,_.storage=12):M.isVector4?(_.boundary=16,_.storage=16):M.isMatrix3?(_.boundary=48,_.storage=48):M.isMatrix4?(_.boundary=64,_.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),_}function g(M){const _=M.target;_.removeEventListener("dispose",g);const x=o.indexOf(_.__bindingPointIndex);o.splice(x,1),i.deleteBuffer(s[_.id]),delete s[_.id],delete r[_.id]}function p(){for(const M in s)i.deleteBuffer(s[M]);o=[],s={},r={}}return{bind:c,update:l,dispose:p}}class sv{constructor(e={}){const{canvas:t=Kf(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;const m=new Uint32Array(4),v=new Int32Array(4);let g=null,p=null;const M=[],_=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ui,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const x=this;let w=!1;this._outputColorSpace=gt;let A=0,C=0,P=null,b=-1,S=null;const L=new rt,U=new rt;let N=null;const X=new Fe(0);let z=0,q=t.width,ee=t.height,W=1,le=null,xe=null;const ae=new rt(0,0,q,ee),Ne=new rt(0,0,q,ee);let ze=!1;const $e=new lc;let qe=!1,Q=!1;const re=new Ze,_e=new R,Le=new rt,Te={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ie=!1;function tt(){return P===null?W:1}let D=n;function O(T,B){return t.getContext(T,B)}try{const T={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Kl}`),t.addEventListener("webglcontextlost",Me,!1),t.addEventListener("webglcontextrestored",Pe,!1),t.addEventListener("webglcontextcreationerror",fe,!1),D===null){const B="webgl2";if(D=O(B,T),D===null)throw O(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let H,V,G,ne,ie,J,ce,ue,E,y,I,Y,te,j,Ae,pe,Ee,Re,de,we,Ve,Oe,Se,je;function F(){H=new p1(D),H.init(),Oe=new Zx(D,H),V=new a1(D,H,e,Oe),G=new jx(D,H),V.reversedDepthBuffer&&d&&G.buffers.depth.setReversed(!0),ne=new x1(D),ie=new Nx,J=new Kx(D,H,G,ie,V,Oe,ne),ce=new c1(x),ue=new f1(x),E=new bm(D),Se=new r1(D,E),y=new m1(D,E,ne,Se),I=new _1(D,y,E,ne),de=new v1(D,V,J),pe=new l1(ie),Y=new Ux(x,ce,ue,H,V,Se,pe),te=new nv(x,ie),j=new Ox,Ae=new Vx(H),Re=new s1(x,ce,ue,G,I,f,c),Ee=new qx(x,I,V),je=new iv(D,ne,V,G),we=new o1(D,H,ne),Ve=new g1(D,H,ne),ne.programs=Y.programs,x.capabilities=V,x.extensions=H,x.properties=ie,x.renderLists=j,x.shadowMap=Ee,x.state=G,x.info=ne}F();const ge=new ev(x,D);this.xr=ge,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const T=H.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=H.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(T){T!==void 0&&(W=T,this.setSize(q,ee,!1))},this.getSize=function(T){return T.set(q,ee)},this.setSize=function(T,B,K=!0){if(ge.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}q=T,ee=B,t.width=Math.floor(T*W),t.height=Math.floor(B*W),K===!0&&(t.style.width=T+"px",t.style.height=B+"px"),this.setViewport(0,0,T,B)},this.getDrawingBufferSize=function(T){return T.set(q*W,ee*W).floor()},this.setDrawingBufferSize=function(T,B,K){q=T,ee=B,W=K,t.width=Math.floor(T*K),t.height=Math.floor(B*K),this.setViewport(0,0,T,B)},this.getCurrentViewport=function(T){return T.copy(L)},this.getViewport=function(T){return T.copy(ae)},this.setViewport=function(T,B,K,Z){T.isVector4?ae.set(T.x,T.y,T.z,T.w):ae.set(T,B,K,Z),G.viewport(L.copy(ae).multiplyScalar(W).round())},this.getScissor=function(T){return T.copy(Ne)},this.setScissor=function(T,B,K,Z){T.isVector4?Ne.set(T.x,T.y,T.z,T.w):Ne.set(T,B,K,Z),G.scissor(U.copy(Ne).multiplyScalar(W).round())},this.getScissorTest=function(){return ze},this.setScissorTest=function(T){G.setScissorTest(ze=T)},this.setOpaqueSort=function(T){le=T},this.setTransparentSort=function(T){xe=T},this.getClearColor=function(T){return T.copy(Re.getClearColor())},this.setClearColor=function(){Re.setClearColor(...arguments)},this.getClearAlpha=function(){return Re.getClearAlpha()},this.setClearAlpha=function(){Re.setClearAlpha(...arguments)},this.clear=function(T=!0,B=!0,K=!0){let Z=0;if(T){let k=!1;if(P!==null){const me=P.texture.format;k=me===ic||me===nc||me===tc}if(k){const me=P.texture.type,be=me===Pn||me===Ui||me===Qs||me===$s||me===Ql||me===$l,De=Re.getClearColor(),Ce=Re.getClearAlpha(),Ge=De.r,Xe=De.g,He=De.b;be?(m[0]=Ge,m[1]=Xe,m[2]=He,m[3]=Ce,D.clearBufferuiv(D.COLOR,0,m)):(v[0]=Ge,v[1]=Xe,v[2]=He,v[3]=Ce,D.clearBufferiv(D.COLOR,0,v))}else Z|=D.COLOR_BUFFER_BIT}B&&(Z|=D.DEPTH_BUFFER_BIT),K&&(Z|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(Z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Me,!1),t.removeEventListener("webglcontextrestored",Pe,!1),t.removeEventListener("webglcontextcreationerror",fe,!1),Re.dispose(),j.dispose(),Ae.dispose(),ie.dispose(),ce.dispose(),ue.dispose(),I.dispose(),Se.dispose(),je.dispose(),Y.dispose(),ge.dispose(),ge.removeEventListener("sessionstart",wn),ge.removeEventListener("sessionend",Pc),mi.stop()};function Me(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),w=!0}function Pe(){console.log("THREE.WebGLRenderer: Context Restored."),w=!1;const T=ne.autoReset,B=Ee.enabled,K=Ee.autoUpdate,Z=Ee.needsUpdate,k=Ee.type;F(),ne.autoReset=T,Ee.enabled=B,Ee.autoUpdate=K,Ee.needsUpdate=Z,Ee.type=k}function fe(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function oe(T){const B=T.target;B.removeEventListener("dispose",oe),Ue(B)}function Ue(T){Ye(T),ie.remove(T)}function Ye(T){const B=ie.get(T).programs;B!==void 0&&(B.forEach(function(K){Y.releaseProgram(K)}),T.isShaderMaterial&&Y.releaseShaderCache(T))}this.renderBufferDirect=function(T,B,K,Z,k,me){B===null&&(B=Te);const be=k.isMesh&&k.matrixWorld.determinant()<0,De=qd(T,B,K,Z,k);G.setMaterial(Z,be);let Ce=K.index,Ge=1;if(Z.wireframe===!0){if(Ce=y.getWireframeAttribute(K),Ce===void 0)return;Ge=2}const Xe=K.drawRange,He=K.attributes.position;let et=Xe.start*Ge,ct=(Xe.start+Xe.count)*Ge;me!==null&&(et=Math.max(et,me.start*Ge),ct=Math.min(ct,(me.start+me.count)*Ge)),Ce!==null?(et=Math.max(et,0),ct=Math.min(ct,Ce.count)):He!=null&&(et=Math.max(et,0),ct=Math.min(ct,He.count));const St=ct-et;if(St<0||St===1/0)return;Se.setup(k,Z,De,K,Ce);let mt,ht=we;if(Ce!==null&&(mt=E.get(Ce),ht=Ve,ht.setIndex(mt)),k.isMesh)Z.wireframe===!0?(G.setLineWidth(Z.wireframeLinewidth*tt()),ht.setMode(D.LINES)):ht.setMode(D.TRIANGLES);else if(k.isLine){let ke=Z.linewidth;ke===void 0&&(ke=1),G.setLineWidth(ke*tt()),k.isLineSegments?ht.setMode(D.LINES):k.isLineLoop?ht.setMode(D.LINE_LOOP):ht.setMode(D.LINE_STRIP)}else k.isPoints?ht.setMode(D.POINTS):k.isSprite&&ht.setMode(D.TRIANGLES);if(k.isBatchedMesh)if(k._multiDrawInstances!==null)ir("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ht.renderMultiDrawInstances(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount,k._multiDrawInstances);else if(H.get("WEBGL_multi_draw"))ht.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else{const ke=k._multiDrawStarts,_t=k._multiDrawCounts,st=k._multiDrawCount,en=Ce?E.get(Ce).bytesPerElement:1,Vi=ie.get(Z).currentProgram.getUniforms();for(let tn=0;tn<st;tn++)Vi.setValue(D,"_gl_DrawID",tn),ht.render(ke[tn]/en,_t[tn])}else if(k.isInstancedMesh)ht.renderInstances(et,St,k.count);else if(K.isInstancedBufferGeometry){const ke=K._maxInstanceCount!==void 0?K._maxInstanceCount:1/0,_t=Math.min(K.instanceCount,ke);ht.renderInstances(et,St,_t)}else ht.render(et,St)};function pt(T,B,K){T.transparent===!0&&T.side===Bt&&T.forceSinglePass===!1?(T.side=kt,T.needsUpdate=!0,fr(T,B,K),T.side=Kn,T.needsUpdate=!0,fr(T,B,K),T.side=Bt):fr(T,B,K)}this.compile=function(T,B,K=null){K===null&&(K=T),p=Ae.get(K),p.init(B),_.push(p),K.traverseVisible(function(k){k.isLight&&k.layers.test(B.layers)&&(p.pushLight(k),k.castShadow&&p.pushShadow(k))}),T!==K&&T.traverseVisible(function(k){k.isLight&&k.layers.test(B.layers)&&(p.pushLight(k),k.castShadow&&p.pushShadow(k))}),p.setupLights();const Z=new Set;return T.traverse(function(k){if(!(k.isMesh||k.isPoints||k.isLine||k.isSprite))return;const me=k.material;if(me)if(Array.isArray(me))for(let be=0;be<me.length;be++){const De=me[be];pt(De,K,k),Z.add(De)}else pt(me,K,k),Z.add(me)}),p=_.pop(),Z},this.compileAsync=function(T,B,K=null){const Z=this.compile(T,B,K);return new Promise(k=>{function me(){if(Z.forEach(function(be){ie.get(be).currentProgram.isReady()&&Z.delete(be)}),Z.size===0){k(T);return}setTimeout(me,10)}H.get("KHR_parallel_shader_compile")!==null?me():setTimeout(me,10)})};let ot=null;function Un(T){ot&&ot(T)}function wn(){mi.stop()}function Pc(){mi.start()}const mi=new hd;mi.setAnimationLoop(Un),typeof self<"u"&&mi.setContext(self),this.setAnimationLoop=function(T){ot=T,ge.setAnimationLoop(T),T===null?mi.stop():mi.start()},ge.addEventListener("sessionstart",wn),ge.addEventListener("sessionend",Pc),this.render=function(T,B){if(B!==void 0&&B.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),ge.enabled===!0&&ge.isPresenting===!0&&(ge.cameraAutoUpdate===!0&&ge.updateCamera(B),B=ge.getCamera()),T.isScene===!0&&T.onBeforeRender(x,T,B,P),p=Ae.get(T,_.length),p.init(B),_.push(p),re.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),$e.setFromProjectionMatrix(re,Cn,B.reversedDepth),Q=this.localClippingEnabled,qe=pe.init(this.clippingPlanes,Q),g=j.get(T,M.length),g.init(),M.push(g),ge.enabled===!0&&ge.isPresenting===!0){const me=x.xr.getDepthSensingMesh();me!==null&&Vo(me,B,-1/0,x.sortObjects)}Vo(T,B,0,x.sortObjects),g.finish(),x.sortObjects===!0&&g.sort(le,xe),Ie=ge.enabled===!1||ge.isPresenting===!1||ge.hasDepthSensing()===!1,Ie&&Re.addToRenderList(g,T),this.info.render.frame++,qe===!0&&pe.beginShadows();const K=p.state.shadowsArray;Ee.render(K,T,B),qe===!0&&pe.endShadows(),this.info.autoReset===!0&&this.info.reset();const Z=g.opaque,k=g.transmissive;if(p.setupLights(),B.isArrayCamera){const me=B.cameras;if(k.length>0)for(let be=0,De=me.length;be<De;be++){const Ce=me[be];Dc(Z,k,T,Ce)}Ie&&Re.render(T);for(let be=0,De=me.length;be<De;be++){const Ce=me[be];Lc(g,T,Ce,Ce.viewport)}}else k.length>0&&Dc(Z,k,T,B),Ie&&Re.render(T),Lc(g,T,B);P!==null&&C===0&&(J.updateMultisampleRenderTarget(P),J.updateRenderTargetMipmap(P)),T.isScene===!0&&T.onAfterRender(x,T,B),Se.resetDefaultState(),b=-1,S=null,_.pop(),_.length>0?(p=_[_.length-1],qe===!0&&pe.setGlobalState(x.clippingPlanes,p.state.camera)):p=null,M.pop(),M.length>0?g=M[M.length-1]:g=null};function Vo(T,B,K,Z){if(T.visible===!1)return;if(T.layers.test(B.layers)){if(T.isGroup)K=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(B);else if(T.isLight)p.pushLight(T),T.castShadow&&p.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||$e.intersectsSprite(T)){Z&&Le.setFromMatrixPosition(T.matrixWorld).applyMatrix4(re);const be=I.update(T),De=T.material;De.visible&&g.push(T,be,De,K,Le.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||$e.intersectsObject(T))){const be=I.update(T),De=T.material;if(Z&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Le.copy(T.boundingSphere.center)):(be.boundingSphere===null&&be.computeBoundingSphere(),Le.copy(be.boundingSphere.center)),Le.applyMatrix4(T.matrixWorld).applyMatrix4(re)),Array.isArray(De)){const Ce=be.groups;for(let Ge=0,Xe=Ce.length;Ge<Xe;Ge++){const He=Ce[Ge],et=De[He.materialIndex];et&&et.visible&&g.push(T,be,et,K,Le.z,He)}}else De.visible&&g.push(T,be,De,K,Le.z,null)}}const me=T.children;for(let be=0,De=me.length;be<De;be++)Vo(me[be],B,K,Z)}function Lc(T,B,K,Z){const k=T.opaque,me=T.transmissive,be=T.transparent;p.setupLightsView(K),qe===!0&&pe.setGlobalState(x.clippingPlanes,K),Z&&G.viewport(L.copy(Z)),k.length>0&&dr(k,B,K),me.length>0&&dr(me,B,K),be.length>0&&dr(be,B,K),G.buffers.depth.setTest(!0),G.buffers.depth.setMask(!0),G.buffers.color.setMask(!0),G.setPolygonOffset(!1)}function Dc(T,B,K,Z){if((K.isScene===!0?K.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[Z.id]===void 0&&(p.state.transmissionRenderTarget[Z.id]=new Kt(1,1,{generateMipmaps:!0,type:H.has("EXT_color_buffer_half_float")||H.has("EXT_color_buffer_float")?bn:Pn,minFilter:yn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:nt.workingColorSpace}));const me=p.state.transmissionRenderTarget[Z.id],be=Z.viewport||L;me.setSize(be.z*x.transmissionResolutionScale,be.w*x.transmissionResolutionScale);const De=x.getRenderTarget(),Ce=x.getActiveCubeFace(),Ge=x.getActiveMipmapLevel();x.setRenderTarget(me),x.getClearColor(X),z=x.getClearAlpha(),z<1&&x.setClearColor(16777215,.5),x.clear(),Ie&&Re.render(K);const Xe=x.toneMapping;x.toneMapping=ui;const He=Z.viewport;if(Z.viewport!==void 0&&(Z.viewport=void 0),p.setupLightsView(Z),qe===!0&&pe.setGlobalState(x.clippingPlanes,Z),dr(T,K,Z),J.updateMultisampleRenderTarget(me),J.updateRenderTargetMipmap(me),H.has("WEBGL_multisampled_render_to_texture")===!1){let et=!1;for(let ct=0,St=B.length;ct<St;ct++){const mt=B[ct],ht=mt.object,ke=mt.geometry,_t=mt.material,st=mt.group;if(_t.side===Bt&&ht.layers.test(Z.layers)){const en=_t.side;_t.side=kt,_t.needsUpdate=!0,Ic(ht,K,Z,ke,_t,st),_t.side=en,_t.needsUpdate=!0,et=!0}}et===!0&&(J.updateMultisampleRenderTarget(me),J.updateRenderTargetMipmap(me))}x.setRenderTarget(De,Ce,Ge),x.setClearColor(X,z),He!==void 0&&(Z.viewport=He),x.toneMapping=Xe}function dr(T,B,K){const Z=B.isScene===!0?B.overrideMaterial:null;for(let k=0,me=T.length;k<me;k++){const be=T[k],De=be.object,Ce=be.geometry,Ge=be.group;let Xe=be.material;Xe.allowOverride===!0&&Z!==null&&(Xe=Z),De.layers.test(K.layers)&&Ic(De,B,K,Ce,Xe,Ge)}}function Ic(T,B,K,Z,k,me){T.onBeforeRender(x,B,K,Z,k,me),T.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),k.onBeforeRender(x,B,K,Z,T,me),k.transparent===!0&&k.side===Bt&&k.forceSinglePass===!1?(k.side=kt,k.needsUpdate=!0,x.renderBufferDirect(K,B,Z,k,T,me),k.side=Kn,k.needsUpdate=!0,x.renderBufferDirect(K,B,Z,k,T,me),k.side=Bt):x.renderBufferDirect(K,B,Z,k,T,me),T.onAfterRender(x,B,K,Z,k,me)}function fr(T,B,K){B.isScene!==!0&&(B=Te);const Z=ie.get(T),k=p.state.lights,me=p.state.shadowsArray,be=k.state.version,De=Y.getParameters(T,k.state,me,B,K),Ce=Y.getProgramCacheKey(De);let Ge=Z.programs;Z.environment=T.isMeshStandardMaterial?B.environment:null,Z.fog=B.fog,Z.envMap=(T.isMeshStandardMaterial?ue:ce).get(T.envMap||Z.environment),Z.envMapRotation=Z.environment!==null&&T.envMap===null?B.environmentRotation:T.envMapRotation,Ge===void 0&&(T.addEventListener("dispose",oe),Ge=new Map,Z.programs=Ge);let Xe=Ge.get(Ce);if(Xe!==void 0){if(Z.currentProgram===Xe&&Z.lightsStateVersion===be)return Nc(T,De),Xe}else De.uniforms=Y.getUniforms(T),T.onBeforeCompile(De,x),Xe=Y.acquireProgram(De,Ce),Ge.set(Ce,Xe),Z.uniforms=De.uniforms;const He=Z.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(He.clippingPlanes=pe.uniform),Nc(T,De),Z.needsLights=jd(T),Z.lightsStateVersion=be,Z.needsLights&&(He.ambientLightColor.value=k.state.ambient,He.lightProbe.value=k.state.probe,He.directionalLights.value=k.state.directional,He.directionalLightShadows.value=k.state.directionalShadow,He.spotLights.value=k.state.spot,He.spotLightShadows.value=k.state.spotShadow,He.rectAreaLights.value=k.state.rectArea,He.ltc_1.value=k.state.rectAreaLTC1,He.ltc_2.value=k.state.rectAreaLTC2,He.pointLights.value=k.state.point,He.pointLightShadows.value=k.state.pointShadow,He.hemisphereLights.value=k.state.hemi,He.directionalShadowMap.value=k.state.directionalShadowMap,He.directionalShadowMatrix.value=k.state.directionalShadowMatrix,He.spotShadowMap.value=k.state.spotShadowMap,He.spotLightMatrix.value=k.state.spotLightMatrix,He.spotLightMap.value=k.state.spotLightMap,He.pointShadowMap.value=k.state.pointShadowMap,He.pointShadowMatrix.value=k.state.pointShadowMatrix),Z.currentProgram=Xe,Z.uniformsList=null,Xe}function Uc(T){if(T.uniformsList===null){const B=T.currentProgram.getUniforms();T.uniformsList=ro.seqWithValue(B.seq,T.uniforms)}return T.uniformsList}function Nc(T,B){const K=ie.get(T);K.outputColorSpace=B.outputColorSpace,K.batching=B.batching,K.batchingColor=B.batchingColor,K.instancing=B.instancing,K.instancingColor=B.instancingColor,K.instancingMorph=B.instancingMorph,K.skinning=B.skinning,K.morphTargets=B.morphTargets,K.morphNormals=B.morphNormals,K.morphColors=B.morphColors,K.morphTargetsCount=B.morphTargetsCount,K.numClippingPlanes=B.numClippingPlanes,K.numIntersection=B.numClipIntersection,K.vertexAlphas=B.vertexAlphas,K.vertexTangents=B.vertexTangents,K.toneMapping=B.toneMapping}function qd(T,B,K,Z,k){B.isScene!==!0&&(B=Te),J.resetTextureUnits();const me=B.fog,be=Z.isMeshStandardMaterial?B.environment:null,De=P===null?x.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:_s,Ce=(Z.isMeshStandardMaterial?ue:ce).get(Z.envMap||be),Ge=Z.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,Xe=!!K.attributes.tangent&&(!!Z.normalMap||Z.anisotropy>0),He=!!K.morphAttributes.position,et=!!K.morphAttributes.normal,ct=!!K.morphAttributes.color;let St=ui;Z.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(St=x.toneMapping);const mt=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,ht=mt!==void 0?mt.length:0,ke=ie.get(Z),_t=p.state.lights;if(qe===!0&&(Q===!0||T!==S)){const It=T===S&&Z.id===b;pe.setState(Z,T,It)}let st=!1;Z.version===ke.__version?(ke.needsLights&&ke.lightsStateVersion!==_t.state.version||ke.outputColorSpace!==De||k.isBatchedMesh&&ke.batching===!1||!k.isBatchedMesh&&ke.batching===!0||k.isBatchedMesh&&ke.batchingColor===!0&&k.colorTexture===null||k.isBatchedMesh&&ke.batchingColor===!1&&k.colorTexture!==null||k.isInstancedMesh&&ke.instancing===!1||!k.isInstancedMesh&&ke.instancing===!0||k.isSkinnedMesh&&ke.skinning===!1||!k.isSkinnedMesh&&ke.skinning===!0||k.isInstancedMesh&&ke.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&ke.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&ke.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&ke.instancingMorph===!1&&k.morphTexture!==null||ke.envMap!==Ce||Z.fog===!0&&ke.fog!==me||ke.numClippingPlanes!==void 0&&(ke.numClippingPlanes!==pe.numPlanes||ke.numIntersection!==pe.numIntersection)||ke.vertexAlphas!==Ge||ke.vertexTangents!==Xe||ke.morphTargets!==He||ke.morphNormals!==et||ke.morphColors!==ct||ke.toneMapping!==St||ke.morphTargetsCount!==ht)&&(st=!0):(st=!0,ke.__version=Z.version);let en=ke.currentProgram;st===!0&&(en=fr(Z,B,k));let Vi=!1,tn=!1,Ls=!1;const Mt=en.getUniforms(),ln=ke.uniforms;if(G.useProgram(en.program)&&(Vi=!0,tn=!0,Ls=!0),Z.id!==b&&(b=Z.id,tn=!0),Vi||S!==T){G.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),Mt.setValue(D,"projectionMatrix",T.projectionMatrix),Mt.setValue(D,"viewMatrix",T.matrixWorldInverse);const Xt=Mt.map.cameraPosition;Xt!==void 0&&Xt.setValue(D,_e.setFromMatrixPosition(T.matrixWorld)),V.logarithmicDepthBuffer&&Mt.setValue(D,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(Z.isMeshPhongMaterial||Z.isMeshToonMaterial||Z.isMeshLambertMaterial||Z.isMeshBasicMaterial||Z.isMeshStandardMaterial||Z.isShaderMaterial)&&Mt.setValue(D,"isOrthographic",T.isOrthographicCamera===!0),S!==T&&(S=T,tn=!0,Ls=!0)}if(k.isSkinnedMesh){Mt.setOptional(D,k,"bindMatrix"),Mt.setOptional(D,k,"bindMatrixInverse");const It=k.skeleton;It&&(It.boneTexture===null&&It.computeBoneTexture(),Mt.setValue(D,"boneTexture",It.boneTexture,J))}k.isBatchedMesh&&(Mt.setOptional(D,k,"batchingTexture"),Mt.setValue(D,"batchingTexture",k._matricesTexture,J),Mt.setOptional(D,k,"batchingIdTexture"),Mt.setValue(D,"batchingIdTexture",k._indirectTexture,J),Mt.setOptional(D,k,"batchingColorTexture"),k._colorsTexture!==null&&Mt.setValue(D,"batchingColorTexture",k._colorsTexture,J));const cn=K.morphAttributes;if((cn.position!==void 0||cn.normal!==void 0||cn.color!==void 0)&&de.update(k,K,en),(tn||ke.receiveShadow!==k.receiveShadow)&&(ke.receiveShadow=k.receiveShadow,Mt.setValue(D,"receiveShadow",k.receiveShadow)),Z.isMeshGouraudMaterial&&Z.envMap!==null&&(ln.envMap.value=Ce,ln.flipEnvMap.value=Ce.isCubeTexture&&Ce.isRenderTargetTexture===!1?-1:1),Z.isMeshStandardMaterial&&Z.envMap===null&&B.environment!==null&&(ln.envMapIntensity.value=B.environmentIntensity),tn&&(Mt.setValue(D,"toneMappingExposure",x.toneMappingExposure),ke.needsLights&&Yd(ln,Ls),me&&Z.fog===!0&&te.refreshFogUniforms(ln,me),te.refreshMaterialUniforms(ln,Z,W,ee,p.state.transmissionRenderTarget[T.id]),ro.upload(D,Uc(ke),ln,J)),Z.isShaderMaterial&&Z.uniformsNeedUpdate===!0&&(ro.upload(D,Uc(ke),ln,J),Z.uniformsNeedUpdate=!1),Z.isSpriteMaterial&&Mt.setValue(D,"center",k.center),Mt.setValue(D,"modelViewMatrix",k.modelViewMatrix),Mt.setValue(D,"normalMatrix",k.normalMatrix),Mt.setValue(D,"modelMatrix",k.matrixWorld),Z.isShaderMaterial||Z.isRawShaderMaterial){const It=Z.uniformsGroups;for(let Xt=0,Wo=It.length;Xt<Wo;Xt++){const gi=It[Xt];je.update(gi,en),je.bind(gi,en)}}return en}function Yd(T,B){T.ambientLightColor.needsUpdate=B,T.lightProbe.needsUpdate=B,T.directionalLights.needsUpdate=B,T.directionalLightShadows.needsUpdate=B,T.pointLights.needsUpdate=B,T.pointLightShadows.needsUpdate=B,T.spotLights.needsUpdate=B,T.spotLightShadows.needsUpdate=B,T.rectAreaLights.needsUpdate=B,T.hemisphereLights.needsUpdate=B}function jd(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(T,B,K){const Z=ie.get(T);Z.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,Z.__autoAllocateDepthBuffer===!1&&(Z.__useRenderToTexture=!1),ie.get(T.texture).__webglTexture=B,ie.get(T.depthTexture).__webglTexture=Z.__autoAllocateDepthBuffer?void 0:K,Z.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,B){const K=ie.get(T);K.__webglFramebuffer=B,K.__useDefaultFramebuffer=B===void 0};const Kd=D.createFramebuffer();this.setRenderTarget=function(T,B=0,K=0){P=T,A=B,C=K;let Z=!0,k=null,me=!1,be=!1;if(T){const Ce=ie.get(T);if(Ce.__useDefaultFramebuffer!==void 0)G.bindFramebuffer(D.FRAMEBUFFER,null),Z=!1;else if(Ce.__webglFramebuffer===void 0)J.setupRenderTarget(T);else if(Ce.__hasExternalTextures)J.rebindTextures(T,ie.get(T.texture).__webglTexture,ie.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const He=T.depthTexture;if(Ce.__boundDepthTexture!==He){if(He!==null&&ie.has(He)&&(T.width!==He.image.width||T.height!==He.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");J.setupDepthRenderbuffer(T)}}const Ge=T.texture;(Ge.isData3DTexture||Ge.isDataArrayTexture||Ge.isCompressedArrayTexture)&&(be=!0);const Xe=ie.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Xe[B])?k=Xe[B][K]:k=Xe[B],me=!0):T.samples>0&&J.useMultisampledRTT(T)===!1?k=ie.get(T).__webglMultisampledFramebuffer:Array.isArray(Xe)?k=Xe[K]:k=Xe,L.copy(T.viewport),U.copy(T.scissor),N=T.scissorTest}else L.copy(ae).multiplyScalar(W).floor(),U.copy(Ne).multiplyScalar(W).floor(),N=ze;if(K!==0&&(k=Kd),G.bindFramebuffer(D.FRAMEBUFFER,k)&&Z&&G.drawBuffers(T,k),G.viewport(L),G.scissor(U),G.setScissorTest(N),me){const Ce=ie.get(T.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+B,Ce.__webglTexture,K)}else if(be){const Ce=B;for(let Ge=0;Ge<T.textures.length;Ge++){const Xe=ie.get(T.textures[Ge]);D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0+Ge,Xe.__webglTexture,K,Ce)}}else if(T!==null&&K!==0){const Ce=ie.get(T.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Ce.__webglTexture,K)}b=-1},this.readRenderTargetPixels=function(T,B,K,Z,k,me,be,De=0){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ce=ie.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&be!==void 0&&(Ce=Ce[be]),Ce){G.bindFramebuffer(D.FRAMEBUFFER,Ce);try{const Ge=T.textures[De],Xe=Ge.format,He=Ge.type;if(!V.textureFormatReadable(Xe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!V.textureTypeReadable(He)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=T.width-Z&&K>=0&&K<=T.height-k&&(T.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+De),D.readPixels(B,K,Z,k,Oe.convert(Xe),Oe.convert(He),me))}finally{const Ge=P!==null?ie.get(P).__webglFramebuffer:null;G.bindFramebuffer(D.FRAMEBUFFER,Ge)}}},this.readRenderTargetPixelsAsync=async function(T,B,K,Z,k,me,be,De=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ce=ie.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&be!==void 0&&(Ce=Ce[be]),Ce)if(B>=0&&B<=T.width-Z&&K>=0&&K<=T.height-k){G.bindFramebuffer(D.FRAMEBUFFER,Ce);const Ge=T.textures[De],Xe=Ge.format,He=Ge.type;if(!V.textureFormatReadable(Xe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!V.textureTypeReadable(He))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const et=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,et),D.bufferData(D.PIXEL_PACK_BUFFER,me.byteLength,D.STREAM_READ),T.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+De),D.readPixels(B,K,Z,k,Oe.convert(Xe),Oe.convert(He),0);const ct=P!==null?ie.get(P).__webglFramebuffer:null;G.bindFramebuffer(D.FRAMEBUFFER,ct);const St=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await Zf(D,St,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,et),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,me),D.deleteBuffer(et),D.deleteSync(St),me}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,B=null,K=0){const Z=Math.pow(2,-K),k=Math.floor(T.image.width*Z),me=Math.floor(T.image.height*Z),be=B!==null?B.x:0,De=B!==null?B.y:0;J.setTexture2D(T,0),D.copyTexSubImage2D(D.TEXTURE_2D,K,0,0,be,De,k,me),G.unbindTexture()};const Zd=D.createFramebuffer(),Jd=D.createFramebuffer();this.copyTextureToTexture=function(T,B,K=null,Z=null,k=0,me=null){me===null&&(k!==0?(ir("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),me=k,k=0):me=0);let be,De,Ce,Ge,Xe,He,et,ct,St;const mt=T.isCompressedTexture?T.mipmaps[me]:T.image;if(K!==null)be=K.max.x-K.min.x,De=K.max.y-K.min.y,Ce=K.isBox3?K.max.z-K.min.z:1,Ge=K.min.x,Xe=K.min.y,He=K.isBox3?K.min.z:0;else{const cn=Math.pow(2,-k);be=Math.floor(mt.width*cn),De=Math.floor(mt.height*cn),T.isDataArrayTexture?Ce=mt.depth:T.isData3DTexture?Ce=Math.floor(mt.depth*cn):Ce=1,Ge=0,Xe=0,He=0}Z!==null?(et=Z.x,ct=Z.y,St=Z.z):(et=0,ct=0,St=0);const ht=Oe.convert(B.format),ke=Oe.convert(B.type);let _t;B.isData3DTexture?(J.setTexture3D(B,0),_t=D.TEXTURE_3D):B.isDataArrayTexture||B.isCompressedArrayTexture?(J.setTexture2DArray(B,0),_t=D.TEXTURE_2D_ARRAY):(J.setTexture2D(B,0),_t=D.TEXTURE_2D),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,B.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,B.unpackAlignment);const st=D.getParameter(D.UNPACK_ROW_LENGTH),en=D.getParameter(D.UNPACK_IMAGE_HEIGHT),Vi=D.getParameter(D.UNPACK_SKIP_PIXELS),tn=D.getParameter(D.UNPACK_SKIP_ROWS),Ls=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,mt.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,mt.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Ge),D.pixelStorei(D.UNPACK_SKIP_ROWS,Xe),D.pixelStorei(D.UNPACK_SKIP_IMAGES,He);const Mt=T.isDataArrayTexture||T.isData3DTexture,ln=B.isDataArrayTexture||B.isData3DTexture;if(T.isDepthTexture){const cn=ie.get(T),It=ie.get(B),Xt=ie.get(cn.__renderTarget),Wo=ie.get(It.__renderTarget);G.bindFramebuffer(D.READ_FRAMEBUFFER,Xt.__webglFramebuffer),G.bindFramebuffer(D.DRAW_FRAMEBUFFER,Wo.__webglFramebuffer);for(let gi=0;gi<Ce;gi++)Mt&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,ie.get(T).__webglTexture,k,He+gi),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,ie.get(B).__webglTexture,me,St+gi)),D.blitFramebuffer(Ge,Xe,be,De,et,ct,be,De,D.DEPTH_BUFFER_BIT,D.NEAREST);G.bindFramebuffer(D.READ_FRAMEBUFFER,null),G.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(k!==0||T.isRenderTargetTexture||ie.has(T)){const cn=ie.get(T),It=ie.get(B);G.bindFramebuffer(D.READ_FRAMEBUFFER,Zd),G.bindFramebuffer(D.DRAW_FRAMEBUFFER,Jd);for(let Xt=0;Xt<Ce;Xt++)Mt?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,cn.__webglTexture,k,He+Xt):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,cn.__webglTexture,k),ln?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,It.__webglTexture,me,St+Xt):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,It.__webglTexture,me),k!==0?D.blitFramebuffer(Ge,Xe,be,De,et,ct,be,De,D.COLOR_BUFFER_BIT,D.NEAREST):ln?D.copyTexSubImage3D(_t,me,et,ct,St+Xt,Ge,Xe,be,De):D.copyTexSubImage2D(_t,me,et,ct,Ge,Xe,be,De);G.bindFramebuffer(D.READ_FRAMEBUFFER,null),G.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else ln?T.isDataTexture||T.isData3DTexture?D.texSubImage3D(_t,me,et,ct,St,be,De,Ce,ht,ke,mt.data):B.isCompressedArrayTexture?D.compressedTexSubImage3D(_t,me,et,ct,St,be,De,Ce,ht,mt.data):D.texSubImage3D(_t,me,et,ct,St,be,De,Ce,ht,ke,mt):T.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,me,et,ct,be,De,ht,ke,mt.data):T.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,me,et,ct,mt.width,mt.height,ht,mt.data):D.texSubImage2D(D.TEXTURE_2D,me,et,ct,be,De,ht,ke,mt);D.pixelStorei(D.UNPACK_ROW_LENGTH,st),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,en),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Vi),D.pixelStorei(D.UNPACK_SKIP_ROWS,tn),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Ls),me===0&&B.generateMipmaps&&D.generateMipmap(_t),G.unbindTexture()},this.initRenderTarget=function(T){ie.get(T).__webglFramebuffer===void 0&&J.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?J.setTextureCube(T,0):T.isData3DTexture?J.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?J.setTexture2DArray(T,0):J.setTexture2D(T,0),G.unbindTexture()},this.resetState=function(){A=0,C=0,P=null,G.reset(),Se.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Cn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=nt._getDrawingBufferColorSpace(e),t.unpackColorSpace=nt._getUnpackColorSpace()}}class ki{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const rv=new _c(-1,1,1,-1,0,1);class ov extends it{constructor(){super(),this.setAttribute("position",new Be([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Be([0,2,0,0,2,0],2))}}const av=new ov;class Uo{constructor(e){this._mesh=new at(av,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,rv)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class lv extends ki{constructor(e,t,n=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Fe}render(e,t,n){const s=e.autoClear;e.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=s}}const oo={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class md extends ki{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof xt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Rn.clone(e.uniforms),this.material=new xt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new Uo(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class jh extends ki{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){const s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}}class cv extends ki{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class hv{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const n=e.getSize(new se);this._width=n.width,this._height=n.height,t=new Kt(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:bn}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new md(oo),this.copyPass.material.blending=Xn,this.clock=new ym}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let n=!1;for(let s=0,r=this.passes.length;s<r;s++){const o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),o.needsSwap){if(n){const a=this.renderer.getContext(),c=this.renderer.state.buffers.stencil;c.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),c.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}jh!==void 0&&(o instanceof jh?n=!0:o instanceof cv&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new se);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}const uv={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Fe(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class bs extends ki{constructor(e,t=1,n,s){super(),this.strength=t,this.radius=n,this.threshold=s,this.resolution=e!==void 0?new se(e.x,e.y):new se(256,256),this.clearColor=new Fe(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new Kt(r,o,{type:bn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){const u=new Kt(r,o,{type:bn});u.texture.name="UnrealBloomPass.h"+h,u.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(u);const d=new Kt(r,o,{type:bn});d.texture.name="UnrealBloomPass.v"+h,d.texture.generateMipmaps=!1,this.renderTargetsVertical.push(d),r=Math.round(r/2),o=Math.round(o/2)}const a=uv;this.highPassUniforms=Rn.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new xt({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];const c=[3,5,7,9,11];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(c[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new se(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;const l=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=l,this.bloomTintColors=[new R(1,1,1),new R(1,1,1),new R(1,1,1),new R(1,1,1),new R(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=Rn.clone(oo.uniforms),this.blendMaterial=new xt({uniforms:this.copyUniforms,vertexShader:oo.vertexShader,fragmentShader:oo.fragmentShader,blending:ms,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new Fe,this._oldClearAlpha=1,this._basic=new dn,this._fsQuad=new Uo(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new se(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(e,t,n,s,r){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();const o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let a=this.renderTargetBright;for(let c=0;c<this.nMips;c++)this._fsQuad.material=this.separableBlurMaterials[c],this.separableBlurMaterials[c].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[c].uniforms.direction.value=bs.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[c]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[c].uniforms.colorTexture.value=this.renderTargetsHorizontal[c].texture,this.separableBlurMaterials[c].uniforms.direction.value=bs.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[c]),e.clear(),this._fsQuad.render(e),a=this.renderTargetsVertical[c];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(n),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=o}_getSeparableBlurMaterial(e){const t=[];for(let n=0;n<e;n++)t.push(.39894*Math.exp(-.5*n*n/(e*e))/e);return new xt({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new se(.5,.5)},direction:{value:new se(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
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
				}`})}_getCompositeMaterial(e){return new xt({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}}bs.BlurDirectionX=new se(1,0);bs.BlurDirectionY=new se(0,1);const dv={name:"FXAAShader",uniforms:{tDiffuse:{value:null},resolution:{value:new se(1/1024,1/512)}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec2 resolution;
		varying vec2 vUv;

		#define EDGE_STEP_COUNT 6
		#define EDGE_GUESS 8.0
		#define EDGE_STEPS 1.0, 1.5, 2.0, 2.0, 2.0, 4.0
		const float edgeSteps[EDGE_STEP_COUNT] = float[EDGE_STEP_COUNT]( EDGE_STEPS );

		float _ContrastThreshold = 0.0312;
		float _RelativeThreshold = 0.063;
		float _SubpixelBlending = 1.0;

		vec4 Sample( sampler2D  tex2D, vec2 uv ) {

			return texture( tex2D, uv );

		}

		float SampleLuminance( sampler2D tex2D, vec2 uv ) {

			return dot( Sample( tex2D, uv ).rgb, vec3( 0.3, 0.59, 0.11 ) );

		}

		float SampleLuminance( sampler2D tex2D, vec2 texSize, vec2 uv, float uOffset, float vOffset ) {

			uv += texSize * vec2(uOffset, vOffset);
			return SampleLuminance(tex2D, uv);

		}

		struct LuminanceData {

			float m, n, e, s, w;
			float ne, nw, se, sw;
			float highest, lowest, contrast;

		};

		LuminanceData SampleLuminanceNeighborhood( sampler2D tex2D, vec2 texSize, vec2 uv ) {

			LuminanceData l;
			l.m = SampleLuminance( tex2D, uv );
			l.n = SampleLuminance( tex2D, texSize, uv,  0.0,  1.0 );
			l.e = SampleLuminance( tex2D, texSize, uv,  1.0,  0.0 );
			l.s = SampleLuminance( tex2D, texSize, uv,  0.0, -1.0 );
			l.w = SampleLuminance( tex2D, texSize, uv, -1.0,  0.0 );

			l.ne = SampleLuminance( tex2D, texSize, uv,  1.0,  1.0 );
			l.nw = SampleLuminance( tex2D, texSize, uv, -1.0,  1.0 );
			l.se = SampleLuminance( tex2D, texSize, uv,  1.0, -1.0 );
			l.sw = SampleLuminance( tex2D, texSize, uv, -1.0, -1.0 );

			l.highest = max( max( max( max( l.n, l.e ), l.s ), l.w ), l.m );
			l.lowest = min( min( min( min( l.n, l.e ), l.s ), l.w ), l.m );
			l.contrast = l.highest - l.lowest;
			return l;

		}

		bool ShouldSkipPixel( LuminanceData l ) {

			float threshold = max( _ContrastThreshold, _RelativeThreshold * l.highest );
			return l.contrast < threshold;

		}

		float DeterminePixelBlendFactor( LuminanceData l ) {

			float f = 2.0 * ( l.n + l.e + l.s + l.w );
			f += l.ne + l.nw + l.se + l.sw;
			f *= 1.0 / 12.0;
			f = abs( f - l.m );
			f = clamp( f / l.contrast, 0.0, 1.0 );

			float blendFactor = smoothstep( 0.0, 1.0, f );
			return blendFactor * blendFactor * _SubpixelBlending;

		}

		struct EdgeData {

			bool isHorizontal;
			float pixelStep;
			float oppositeLuminance, gradient;

		};

		EdgeData DetermineEdge( vec2 texSize, LuminanceData l ) {

			EdgeData e;
			float horizontal =
				abs( l.n + l.s - 2.0 * l.m ) * 2.0 +
				abs( l.ne + l.se - 2.0 * l.e ) +
				abs( l.nw + l.sw - 2.0 * l.w );
			float vertical =
				abs( l.e + l.w - 2.0 * l.m ) * 2.0 +
				abs( l.ne + l.nw - 2.0 * l.n ) +
				abs( l.se + l.sw - 2.0 * l.s );
			e.isHorizontal = horizontal >= vertical;

			float pLuminance = e.isHorizontal ? l.n : l.e;
			float nLuminance = e.isHorizontal ? l.s : l.w;
			float pGradient = abs( pLuminance - l.m );
			float nGradient = abs( nLuminance - l.m );

			e.pixelStep = e.isHorizontal ? texSize.y : texSize.x;

			if (pGradient < nGradient) {

				e.pixelStep = -e.pixelStep;
				e.oppositeLuminance = nLuminance;
				e.gradient = nGradient;

			} else {

				e.oppositeLuminance = pLuminance;
				e.gradient = pGradient;

			}

			return e;

		}

		float DetermineEdgeBlendFactor( sampler2D  tex2D, vec2 texSize, LuminanceData l, EdgeData e, vec2 uv ) {

			vec2 uvEdge = uv;
			vec2 edgeStep;
			if (e.isHorizontal) {

				uvEdge.y += e.pixelStep * 0.5;
				edgeStep = vec2( texSize.x, 0.0 );

			} else {

				uvEdge.x += e.pixelStep * 0.5;
				edgeStep = vec2( 0.0, texSize.y );

			}

			float edgeLuminance = ( l.m + e.oppositeLuminance ) * 0.5;
			float gradientThreshold = e.gradient * 0.25;

			vec2 puv = uvEdge + edgeStep * edgeSteps[0];
			float pLuminanceDelta = SampleLuminance( tex2D, puv ) - edgeLuminance;
			bool pAtEnd = abs( pLuminanceDelta ) >= gradientThreshold;

			for ( int i = 1; i < EDGE_STEP_COUNT && !pAtEnd; i++ ) {

				puv += edgeStep * edgeSteps[i];
				pLuminanceDelta = SampleLuminance( tex2D, puv ) - edgeLuminance;
				pAtEnd = abs( pLuminanceDelta ) >= gradientThreshold;

			}

			if ( !pAtEnd ) {

				puv += edgeStep * EDGE_GUESS;

			}

			vec2 nuv = uvEdge - edgeStep * edgeSteps[0];
			float nLuminanceDelta = SampleLuminance( tex2D, nuv ) - edgeLuminance;
			bool nAtEnd = abs( nLuminanceDelta ) >= gradientThreshold;

			for ( int i = 1; i < EDGE_STEP_COUNT && !nAtEnd; i++ ) {

				nuv -= edgeStep * edgeSteps[i];
				nLuminanceDelta = SampleLuminance( tex2D, nuv ) - edgeLuminance;
				nAtEnd = abs( nLuminanceDelta ) >= gradientThreshold;

			}

			if ( !nAtEnd ) {

				nuv -= edgeStep * EDGE_GUESS;

			}

			float pDistance, nDistance;
			if ( e.isHorizontal ) {

				pDistance = puv.x - uv.x;
				nDistance = uv.x - nuv.x;

			} else {

				pDistance = puv.y - uv.y;
				nDistance = uv.y - nuv.y;

			}

			float shortestDistance;
			bool deltaSign;
			if ( pDistance <= nDistance ) {

				shortestDistance = pDistance;
				deltaSign = pLuminanceDelta >= 0.0;

			} else {

				shortestDistance = nDistance;
				deltaSign = nLuminanceDelta >= 0.0;

			}

			if ( deltaSign == ( l.m - edgeLuminance >= 0.0 ) ) {

				return 0.0;

			}

			return 0.5 - shortestDistance / ( pDistance + nDistance );

		}

		vec4 ApplyFXAA( sampler2D  tex2D, vec2 texSize, vec2 uv ) {

			LuminanceData luminance = SampleLuminanceNeighborhood( tex2D, texSize, uv );
			if ( ShouldSkipPixel( luminance ) ) {

				return Sample( tex2D, uv );

			}

			float pixelBlend = DeterminePixelBlendFactor( luminance );
			EdgeData edge = DetermineEdge( texSize, luminance );
			float edgeBlend = DetermineEdgeBlendFactor( tex2D, texSize, luminance, edge, uv );
			float finalBlend = max( pixelBlend, edgeBlend );

			if (edge.isHorizontal) {

				uv.y += edge.pixelStep * finalBlend;

			} else {

				uv.x += edge.pixelStep * finalBlend;

			}

			return Sample( tex2D, uv );

		}

		void main() {

			gl_FragColor = ApplyFXAA( tDiffuse, resolution.xy, vUv );

		}`};class fv extends md{constructor(){super(dv)}setSize(e,t){this.material.uniforms.resolution.value.set(1/e,1/t)}}function pv(){const i=new fv;return i.material.fragmentShader=i.material.fragmentShader.replace("float _SubpixelBlending = 1.0;","float _SubpixelBlending = 0.35;"),i}function mv(i){const e=new hv(i),t=i.getContext(),n=t.getInternalformatParameter(t.RENDERBUFFER,t.RGBA16F,t.SAMPLES)||[],s=2,r=Math.max(0,...Array.from(n).filter(o=>o<=s));return e.renderTarget1.samples=e.renderTarget2.samples=r,e}function gv(i,e){const t=new bs(new se(i,e),.32,.36,1.1),n=t.materialHighPassFilter;return n.fragmentShader=`
    float finiteBloomChannel(float value){
      return value>=0.0 ? min(value,64.0) : 0.0;
    }
    ${n.fragmentShader}`.replace("vec4 texel = texture2D( tDiffuse, vUv );",`vec4 texel = texture2D( tDiffuse, vUv );
       texel=vec4(finiteBloomChannel(texel.r),finiteBloomChannel(texel.g),finiteBloomChannel(texel.b),1.0);`),t}const Wr={defines:{SMAA_THRESHOLD:"0.1"},uniforms:{tDiffuse:{value:null},resolution:{value:new se(1/1024,1/512)}},vertexShader:`

		uniform vec2 resolution;

		varying vec2 vUv;
		varying vec4 vOffset[ 3 ];

		void SMAAEdgeDetectionVS( vec2 texcoord ) {
			vOffset[ 0 ] = texcoord.xyxy + resolution.xyxy * vec4( -1.0, 0.0, 0.0,  1.0 ); // WebGL port note: Changed sign in W component
			vOffset[ 1 ] = texcoord.xyxy + resolution.xyxy * vec4(  1.0, 0.0, 0.0, -1.0 ); // WebGL port note: Changed sign in W component
			vOffset[ 2 ] = texcoord.xyxy + resolution.xyxy * vec4( -2.0, 0.0, 0.0,  2.0 ); // WebGL port note: Changed sign in W component
		}

		void main() {

			vUv = uv;

			SMAAEdgeDetectionVS( vUv );

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;

		varying vec2 vUv;
		varying vec4 vOffset[ 3 ];

		vec4 SMAAColorEdgeDetectionPS( vec2 texcoord, vec4 offset[3], sampler2D colorTex ) {
			vec2 threshold = vec2( SMAA_THRESHOLD, SMAA_THRESHOLD );

			// Calculate color deltas:
			vec4 delta;
			vec3 C = texture2D( colorTex, texcoord ).rgb;

			vec3 Cleft = texture2D( colorTex, offset[0].xy ).rgb;
			vec3 t = abs( C - Cleft );
			delta.x = max( max( t.r, t.g ), t.b );

			vec3 Ctop = texture2D( colorTex, offset[0].zw ).rgb;
			t = abs( C - Ctop );
			delta.y = max( max( t.r, t.g ), t.b );

			// We do the usual threshold:
			vec2 edges = step( threshold, delta.xy );

			// Then discard if there is no edge:
			if ( dot( edges, vec2( 1.0, 1.0 ) ) == 0.0 )
				discard;

			// Calculate right and bottom deltas:
			vec3 Cright = texture2D( colorTex, offset[1].xy ).rgb;
			t = abs( C - Cright );
			delta.z = max( max( t.r, t.g ), t.b );

			vec3 Cbottom  = texture2D( colorTex, offset[1].zw ).rgb;
			t = abs( C - Cbottom );
			delta.w = max( max( t.r, t.g ), t.b );

			// Calculate the maximum delta in the direct neighborhood:
			float maxDelta = max( max( max( delta.x, delta.y ), delta.z ), delta.w );

			// Calculate left-left and top-top deltas:
			vec3 Cleftleft  = texture2D( colorTex, offset[2].xy ).rgb;
			t = abs( C - Cleftleft );
			delta.z = max( max( t.r, t.g ), t.b );

			vec3 Ctoptop = texture2D( colorTex, offset[2].zw ).rgb;
			t = abs( C - Ctoptop );
			delta.w = max( max( t.r, t.g ), t.b );

			// Calculate the final maximum delta:
			maxDelta = max( max( maxDelta, delta.z ), delta.w );

			// Local contrast adaptation in action:
			edges.xy *= step( 0.5 * maxDelta, delta.xy );

			return vec4( edges, 0.0, 0.0 );
		}

		void main() {

			gl_FragColor = SMAAColorEdgeDetectionPS( vUv, vOffset, tDiffuse );

		}`},Xr={defines:{SMAA_MAX_SEARCH_STEPS:"8",SMAA_AREATEX_MAX_DISTANCE:"16",SMAA_AREATEX_PIXEL_SIZE:"( 1.0 / vec2( 160.0, 560.0 ) )",SMAA_AREATEX_SUBTEX_SIZE:"( 1.0 / 7.0 )"},uniforms:{tDiffuse:{value:null},tArea:{value:null},tSearch:{value:null},resolution:{value:new se(1/1024,1/512)}},vertexShader:`

		uniform vec2 resolution;

		varying vec2 vUv;
		varying vec4 vOffset[ 3 ];
		varying vec2 vPixcoord;

		void SMAABlendingWeightCalculationVS( vec2 texcoord ) {
			vPixcoord = texcoord / resolution;

			// We will use these offsets for the searches later on (see @PSEUDO_GATHER4):
			vOffset[ 0 ] = texcoord.xyxy + resolution.xyxy * vec4( -0.25, 0.125, 1.25, 0.125 ); // WebGL port note: Changed sign in Y and W components
			vOffset[ 1 ] = texcoord.xyxy + resolution.xyxy * vec4( -0.125, 0.25, -0.125, -1.25 ); // WebGL port note: Changed sign in Y and W components

			// And these for the searches, they indicate the ends of the loops:
			vOffset[ 2 ] = vec4( vOffset[ 0 ].xz, vOffset[ 1 ].yw ) + vec4( -2.0, 2.0, -2.0, 2.0 ) * resolution.xxyy * float( SMAA_MAX_SEARCH_STEPS );

		}

		void main() {

			vUv = uv;

			SMAABlendingWeightCalculationVS( vUv );

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		#define SMAASampleLevelZeroOffset( tex, coord, offset ) texture2D( tex, coord + float( offset ) * resolution, 0.0 )

		uniform sampler2D tDiffuse;
		uniform sampler2D tArea;
		uniform sampler2D tSearch;
		uniform vec2 resolution;

		varying vec2 vUv;
		varying vec4 vOffset[3];
		varying vec2 vPixcoord;

		#if __VERSION__ == 100
		vec2 round( vec2 x ) {
			return sign( x ) * floor( abs( x ) + 0.5 );
		}
		#endif

		float SMAASearchLength( sampler2D searchTex, vec2 e, float bias, float scale ) {
			// Not required if searchTex accesses are set to point:
			// float2 SEARCH_TEX_PIXEL_SIZE = 1.0 / float2(66.0, 33.0);
			// e = float2(bias, 0.0) + 0.5 * SEARCH_TEX_PIXEL_SIZE +
			//     e * float2(scale, 1.0) * float2(64.0, 32.0) * SEARCH_TEX_PIXEL_SIZE;
			e.r = bias + e.r * scale;
			return 255.0 * texture2D( searchTex, e, 0.0 ).r;
		}

		float SMAASearchXLeft( sampler2D edgesTex, sampler2D searchTex, vec2 texcoord, float end ) {
			/**
				* @PSEUDO_GATHER4
				* This texcoord has been offset by (-0.25, -0.125) in the vertex shader to
				* sample between edge, thus fetching four edges in a row.
				* Sampling with different offsets in each direction allows to disambiguate
				* which edges are active from the four fetched ones.
				*/
			vec2 e = vec2( 0.0, 1.0 );

			for ( int i = 0; i < SMAA_MAX_SEARCH_STEPS; i ++ ) { // WebGL port note: Changed while to for
				e = texture2D( edgesTex, texcoord, 0.0 ).rg;
				texcoord -= vec2( 2.0, 0.0 ) * resolution;
				if ( ! ( texcoord.x > end && e.g > 0.8281 && e.r == 0.0 ) ) break;
			}

			// We correct the previous (-0.25, -0.125) offset we applied:
			texcoord.x += 0.25 * resolution.x;

			// The searches are bias by 1, so adjust the coords accordingly:
			texcoord.x += resolution.x;

			// Disambiguate the length added by the last step:
			texcoord.x += 2.0 * resolution.x; // Undo last step
			texcoord.x -= resolution.x * SMAASearchLength(searchTex, e, 0.0, 0.5);

			return texcoord.x;
		}

		float SMAASearchXRight( sampler2D edgesTex, sampler2D searchTex, vec2 texcoord, float end ) {
			vec2 e = vec2( 0.0, 1.0 );

			for ( int i = 0; i < SMAA_MAX_SEARCH_STEPS; i ++ ) { // WebGL port note: Changed while to for
				e = texture2D( edgesTex, texcoord, 0.0 ).rg;
				texcoord += vec2( 2.0, 0.0 ) * resolution;
				if ( ! ( texcoord.x < end && e.g > 0.8281 && e.r == 0.0 ) ) break;
			}

			texcoord.x -= 0.25 * resolution.x;
			texcoord.x -= resolution.x;
			texcoord.x -= 2.0 * resolution.x;
			texcoord.x += resolution.x * SMAASearchLength( searchTex, e, 0.5, 0.5 );

			return texcoord.x;
		}

		float SMAASearchYUp( sampler2D edgesTex, sampler2D searchTex, vec2 texcoord, float end ) {
			vec2 e = vec2( 1.0, 0.0 );

			for ( int i = 0; i < SMAA_MAX_SEARCH_STEPS; i ++ ) { // WebGL port note: Changed while to for
				e = texture2D( edgesTex, texcoord, 0.0 ).rg;
				texcoord += vec2( 0.0, 2.0 ) * resolution; // WebGL port note: Changed sign
				if ( ! ( texcoord.y > end && e.r > 0.8281 && e.g == 0.0 ) ) break;
			}

			texcoord.y -= 0.25 * resolution.y; // WebGL port note: Changed sign
			texcoord.y -= resolution.y; // WebGL port note: Changed sign
			texcoord.y -= 2.0 * resolution.y; // WebGL port note: Changed sign
			texcoord.y += resolution.y * SMAASearchLength( searchTex, e.gr, 0.0, 0.5 ); // WebGL port note: Changed sign

			return texcoord.y;
		}

		float SMAASearchYDown( sampler2D edgesTex, sampler2D searchTex, vec2 texcoord, float end ) {
			vec2 e = vec2( 1.0, 0.0 );

			for ( int i = 0; i < SMAA_MAX_SEARCH_STEPS; i ++ ) { // WebGL port note: Changed while to for
				e = texture2D( edgesTex, texcoord, 0.0 ).rg;
				texcoord -= vec2( 0.0, 2.0 ) * resolution; // WebGL port note: Changed sign
				if ( ! ( texcoord.y < end && e.r > 0.8281 && e.g == 0.0 ) ) break;
			}

			texcoord.y += 0.25 * resolution.y; // WebGL port note: Changed sign
			texcoord.y += resolution.y; // WebGL port note: Changed sign
			texcoord.y += 2.0 * resolution.y; // WebGL port note: Changed sign
			texcoord.y -= resolution.y * SMAASearchLength( searchTex, e.gr, 0.5, 0.5 ); // WebGL port note: Changed sign

			return texcoord.y;
		}

		vec2 SMAAArea( sampler2D areaTex, vec2 dist, float e1, float e2, float offset ) {
			// Rounding prevents precision errors of bilinear filtering:
			vec2 texcoord = float( SMAA_AREATEX_MAX_DISTANCE ) * round( 4.0 * vec2( e1, e2 ) ) + dist;

			// We do a scale and bias for mapping to texel space:
			texcoord = SMAA_AREATEX_PIXEL_SIZE * texcoord + ( 0.5 * SMAA_AREATEX_PIXEL_SIZE );

			// Move to proper place, according to the subpixel offset:
			texcoord.y += SMAA_AREATEX_SUBTEX_SIZE * offset;

			return texture2D( areaTex, texcoord, 0.0 ).rg;
		}

		vec4 SMAABlendingWeightCalculationPS( vec2 texcoord, vec2 pixcoord, vec4 offset[ 3 ], sampler2D edgesTex, sampler2D areaTex, sampler2D searchTex, ivec4 subsampleIndices ) {
			vec4 weights = vec4( 0.0, 0.0, 0.0, 0.0 );

			vec2 e = texture2D( edgesTex, texcoord ).rg;

			if ( e.g > 0.0 ) { // Edge at north
				vec2 d;

				// Find the distance to the left:
				vec2 coords;
				coords.x = SMAASearchXLeft( edgesTex, searchTex, offset[ 0 ].xy, offset[ 2 ].x );
				coords.y = offset[ 1 ].y; // offset[1].y = texcoord.y - 0.25 * resolution.y (@CROSSING_OFFSET)
				d.x = coords.x;

				// Now fetch the left crossing edges, two at a time using bilinear
				// filtering. Sampling at -0.25 (see @CROSSING_OFFSET) enables to
				// discern what value each edge has:
				float e1 = texture2D( edgesTex, coords, 0.0 ).r;

				// Find the distance to the right:
				coords.x = SMAASearchXRight( edgesTex, searchTex, offset[ 0 ].zw, offset[ 2 ].y );
				d.y = coords.x;

				// We want the distances to be in pixel units (doing this here allow to
				// better interleave arithmetic and memory accesses):
				d = d / resolution.x - pixcoord.x;

				// SMAAArea below needs a sqrt, as the areas texture is compressed
				// quadratically:
				vec2 sqrt_d = sqrt( abs( d ) );

				// Fetch the right crossing edges:
				coords.y -= 1.0 * resolution.y; // WebGL port note: Added
				float e2 = SMAASampleLevelZeroOffset( edgesTex, coords, ivec2( 1, 0 ) ).r;

				// Ok, we know how this pattern looks like, now it is time for getting
				// the actual area:
				weights.rg = SMAAArea( areaTex, sqrt_d, e1, e2, float( subsampleIndices.y ) );
			}

			if ( e.r > 0.0 ) { // Edge at west
				vec2 d;

				// Find the distance to the top:
				vec2 coords;

				coords.y = SMAASearchYUp( edgesTex, searchTex, offset[ 1 ].xy, offset[ 2 ].z );
				coords.x = offset[ 0 ].x; // offset[1].x = texcoord.x - 0.25 * resolution.x;
				d.x = coords.y;

				// Fetch the top crossing edges:
				float e1 = texture2D( edgesTex, coords, 0.0 ).g;

				// Find the distance to the bottom:
				coords.y = SMAASearchYDown( edgesTex, searchTex, offset[ 1 ].zw, offset[ 2 ].w );
				d.y = coords.y;

				// We want the distances to be in pixel units:
				d = d / resolution.y - pixcoord.y;

				// SMAAArea below needs a sqrt, as the areas texture is compressed
				// quadratically:
				vec2 sqrt_d = sqrt( abs( d ) );

				// Fetch the bottom crossing edges:
				coords.y -= 1.0 * resolution.y; // WebGL port note: Added
				float e2 = SMAASampleLevelZeroOffset( edgesTex, coords, ivec2( 0, 1 ) ).g;

				// Get the area for this direction:
				weights.ba = SMAAArea( areaTex, sqrt_d, e1, e2, float( subsampleIndices.x ) );
			}

			return weights;
		}

		void main() {

			gl_FragColor = SMAABlendingWeightCalculationPS( vUv, vPixcoord, vOffset, tDiffuse, tArea, tSearch, ivec4( 0.0 ) );

		}`},Aa={uniforms:{tDiffuse:{value:null},tColor:{value:null},resolution:{value:new se(1/1024,1/512)}},vertexShader:`

		uniform vec2 resolution;

		varying vec2 vUv;
		varying vec4 vOffset[ 2 ];

		void SMAANeighborhoodBlendingVS( vec2 texcoord ) {
			vOffset[ 0 ] = texcoord.xyxy + resolution.xyxy * vec4( -1.0, 0.0, 0.0, 1.0 ); // WebGL port note: Changed sign in W component
			vOffset[ 1 ] = texcoord.xyxy + resolution.xyxy * vec4( 1.0, 0.0, 0.0, -1.0 ); // WebGL port note: Changed sign in W component
		}

		void main() {

			vUv = uv;

			SMAANeighborhoodBlendingVS( vUv );

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform sampler2D tColor;
		uniform vec2 resolution;

		varying vec2 vUv;
		varying vec4 vOffset[ 2 ];

		vec4 SMAANeighborhoodBlendingPS( vec2 texcoord, vec4 offset[ 2 ], sampler2D colorTex, sampler2D blendTex ) {
			// Fetch the blending weights for current pixel:
			vec4 a;
			a.xz = texture2D( blendTex, texcoord ).xz;
			a.y = texture2D( blendTex, offset[ 1 ].zw ).g;
			a.w = texture2D( blendTex, offset[ 1 ].xy ).a;

			// Is there any blending weight with a value greater than 0.0?
			if ( dot(a, vec4( 1.0, 1.0, 1.0, 1.0 )) < 1e-5 ) {
				return texture2D( colorTex, texcoord, 0.0 );
			} else {
				// Up to 4 lines can be crossing a pixel (one through each edge). We
				// favor blending by choosing the line with the maximum weight for each
				// direction:
				vec2 offset;
				offset.x = a.a > a.b ? a.a : -a.b; // left vs. right
				offset.y = a.g > a.r ? -a.g : a.r; // top vs. bottom // WebGL port note: Changed signs

				// Then we go in the direction that has the maximum weight:
				if ( abs( offset.x ) > abs( offset.y )) { // horizontal vs. vertical
					offset.y = 0.0;
				} else {
					offset.x = 0.0;
				}

				// Fetch the opposite color and lerp by hand:
				vec4 C = texture2D( colorTex, texcoord, 0.0 );
				texcoord += sign( offset ) * resolution;
				vec4 Cop = texture2D( colorTex, texcoord, 0.0 );
				float s = abs( offset.x ) > abs( offset.y ) ? abs( offset.x ) : abs( offset.y );

				// WebGL port note: Added gamma correction
				C.xyz = pow(C.xyz, vec3(2.2));
				Cop.xyz = pow(Cop.xyz, vec3(2.2));
				vec4 mixed = mix(C, Cop, s);
				mixed.xyz = pow(mixed.xyz, vec3(1.0 / 2.2));

				return mixed;
			}
		}

		void main() {

			gl_FragColor = SMAANeighborhoodBlendingPS( vUv, vOffset, tColor, tDiffuse );

		}`};class xv extends ki{constructor(){super(),this._edgesRT=new Kt(1,1,{depthBuffer:!1,type:bn}),this._edgesRT.texture.name="SMAAPass.edges",this._weightsRT=new Kt(1,1,{depthBuffer:!1,type:bn}),this._weightsRT.texture.name="SMAAPass.weights";const e=this,t=new Image;t.src=this._getAreaTexture(),t.onload=function(){e._areaTexture.needsUpdate=!0},this._areaTexture=new Et,this._areaTexture.name="SMAAPass.area",this._areaTexture.image=t,this._areaTexture.minFilter=rn,this._areaTexture.generateMipmaps=!1,this._areaTexture.flipY=!1;const n=new Image;n.src=this._getSearchTexture(),n.onload=function(){e._searchTexture.needsUpdate=!0},this._searchTexture=new Et,this._searchTexture.name="SMAAPass.search",this._searchTexture.image=n,this._searchTexture.magFilter=Gt,this._searchTexture.minFilter=Gt,this._searchTexture.generateMipmaps=!1,this._searchTexture.flipY=!1,this._uniformsEdges=Rn.clone(Wr.uniforms),this._materialEdges=new xt({defines:Object.assign({},Wr.defines),uniforms:this._uniformsEdges,vertexShader:Wr.vertexShader,fragmentShader:Wr.fragmentShader}),this._uniformsWeights=Rn.clone(Xr.uniforms),this._uniformsWeights.tDiffuse.value=this._edgesRT.texture,this._uniformsWeights.tArea.value=this._areaTexture,this._uniformsWeights.tSearch.value=this._searchTexture,this._materialWeights=new xt({defines:Object.assign({},Xr.defines),uniforms:this._uniformsWeights,vertexShader:Xr.vertexShader,fragmentShader:Xr.fragmentShader}),this._uniformsBlend=Rn.clone(Aa.uniforms),this._uniformsBlend.tDiffuse.value=this._weightsRT.texture,this._materialBlend=new xt({uniforms:this._uniformsBlend,vertexShader:Aa.vertexShader,fragmentShader:Aa.fragmentShader}),this._fsQuad=new Uo(null)}render(e,t,n){this._uniformsEdges.tDiffuse.value=n.texture,this._fsQuad.material=this._materialEdges,e.setRenderTarget(this._edgesRT),this.clear&&e.clear(),this._fsQuad.render(e),this._fsQuad.material=this._materialWeights,e.setRenderTarget(this._weightsRT),this.clear&&e.clear(),this._fsQuad.render(e),this._uniformsBlend.tColor.value=n.texture,this._fsQuad.material=this._materialBlend,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(),this._fsQuad.render(e))}setSize(e,t){this._edgesRT.setSize(e,t),this._weightsRT.setSize(e,t),this._materialEdges.uniforms.resolution.value.set(1/e,1/t),this._materialWeights.uniforms.resolution.value.set(1/e,1/t),this._materialBlend.uniforms.resolution.value.set(1/e,1/t)}dispose(){this._edgesRT.dispose(),this._weightsRT.dispose(),this._areaTexture.dispose(),this._searchTexture.dispose(),this._materialEdges.dispose(),this._materialWeights.dispose(),this._materialBlend.dispose(),this._fsQuad.dispose()}_getAreaTexture(){return"data:image/png;base64,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"}_getSearchTexture(){return"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEIAAAAhCAAAAABIXyLAAAAAOElEQVRIx2NgGAWjYBSMglEwEICREYRgFBZBqDCSLA2MGPUIVQETE9iNUAqLR5gIeoQKRgwXjwAAGn4AtaFeYLEAAAAASUVORK5CYII="}}const qr={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};class vv extends ki{constructor(){super(),this.uniforms=Rn.clone(qr.uniforms),this.material=new am({name:qr.name,uniforms:this.uniforms,vertexShader:qr.vertexShader,fragmentShader:qr.fragmentShader}),this._fsQuad=new Uo(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},nt.getTransfer(this._outputColorSpace)===lt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Tu?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Au?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Cu?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Zl?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Pu?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Lu?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===Ru&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}const Kh={lat:13.733,lon:100.502};function _o(i,e){return{x:(i-Kh.lon)*108140,z:(Kh.lat-e)*111320}}function Jt(i,e,t){return Math.max(e,Math.min(t,i))}const Yr=(i,e,t)=>i+(e-i)*t;function Mo(i,e){return Math.atan2(Math.sin(i-e),Math.cos(i-e))}class Zh{constructor(e){this.points=e.map(t=>({..._o(t[0],t[1]),width:t[2]||310})),this.length=0,this.segments=this.points.slice(1).map((t,n)=>{const s=this.points[n],r=t.x-s.x,o=t.z-s.z,a=Math.hypot(r,o),c={a:s,b:t,dx:r,dz:o,len:a,start:this.length};return this.length+=a,c})}sample(e,t=0){const n=Jt(e,0,this.length);let s=0,r=this.segments.length-1;for(;s<r;){const h=s+r>>1,u=this.segments[h];u.start+u.len<n?s=h+1:r=h}const o=this.segments[s],a=Jt((n-o.start)/o.len,0,1),c=-o.dz/o.len,l=o.dx/o.len;return{x:Yr(o.a.x,o.b.x,a)+c*t,z:Yr(o.a.z,o.b.z,a)+l*t,heading:Math.atan2(-o.dx,-o.dz),nx:c,nz:l,width:Yr(o.a.width,o.b.width,a),distance:n}}nearest(e,t){let n={distanceSquared:1/0};for(const s of this.segments){const r=Jt(((e-s.a.x)*s.dx+(t-s.a.z)*s.dz)/(s.len*s.len),0,1),o=s.a.x+s.dx*r,a=s.a.z+s.dz*r,c=(e-o)**2+(t-a)**2;if(c<n.distanceSquared){const l=-s.dz/s.len,h=s.dx/s.len;n={x:o,z:a,nx:l,nz:h,offset:(e-o)*l+(t-a)*h,distance:s.start+r*s.len,width:Yr(s.a.width,s.b.width,r),heading:Math.atan2(-s.dx,-s.dz),distanceSquared:c}}}return n}constrain(e,t=4){const n=this.nearest(e.x,e.z),s=n.width/2-t,r=Math.abs(n.offset)-s;let o=0;if(r>0){const c=Math.sign(n.offset),l=n.nx*c,h=n.nz*c;e.x-=l*r,e.z-=h*r;const u=e.vx*l+e.vz*h;u>0&&(o=u,e.vx-=l*u*1.25,e.vz-=h*u*1.25)}const a=n.distance<1?this.sample(0):n.distance>this.length-1?this.sample(this.length):null;if(a){const c={x:-Math.sin(a.heading),z:-Math.cos(a.heading)},l=n.distance<1?-1:1,h=(e.x-a.x)*c.x+(e.z-a.z)*c.z;if(h*l>0){e.x-=c.x*h,e.z-=c.z*h;const u=(e.vx*c.x+e.vz*c.z)*l;u>0&&(e.vx-=c.x*l*u*1.1,e.vz-=c.z*l*u*1.1,o=Math.max(o,u))}}return o}}const _v=[{id:"arun",name:"Wat Arun",thai:"วัดอรุณ",lon:100.49015,lat:13.74369,side:1},{id:"tien",name:"Tha Tien",thai:"ท่าเตียน",lon:100.4904,lat:13.746,side:-1},{id:"kalaya",name:"Wat Kalayanamit",thai:"วัดกัลยาณมิตร",lon:100.49378,lat:13.73985,side:1},{id:"flower",name:"Flower Market",thai:"ปากคลองตลาด",lon:100.49656,lat:13.74073,side:-1},{id:"memorial",name:"Memorial Bridge",thai:"สะพานพุทธ",lon:100.49912,lat:13.73911,side:-1},{id:"chinatown",name:"Ratchawong",thai:"ท่าราชวงศ์",lon:100.50377,lat:13.73806,side:-1},{id:"lhong",name:"Lhong 1919",thai:"ล้ง 1919",lon:100.50712,lat:13.73447,side:1},{id:"rivercity",name:"River City",thai:"ริเวอร์ ซิตี้",lon:100.51374,lat:13.73033,side:-1},{id:"icon",name:"ICONSIAM",thai:"ไอคอนสยาม",lon:100.51255,lat:13.72665,side:1},{id:"oriental",name:"Oriental Pier",thai:"ท่าโอเรียนเต็ล",lon:100.514,lat:13.72355,side:-1},{id:"river",name:"The River",thai:"เดอะ ริเวอร์",lon:100.51115,lat:13.72139,side:1},{id:"sathorn",name:"Sathorn Pier",thai:"ท่าสาทร",lon:100.5129,lat:13.71895,side:-1}];function Mv(i){return _v.map((e,t)=>{const n=_o(e.lon,e.lat),s=i.nearest(n.x,n.z),r=Jt(s.distance,65,i.length-65),o=i.sample(r),a=e.side;return{...e,index:t,distance:r,x:o.x+o.nx*a*(o.width/2-26),z:o.z+o.nz*a*(o.width/2-26),bankX:o.x+o.nx*a*(o.width/2+2),bankZ:o.z+o.nz*a*(o.width/2+2),heading:o.heading,nx:o.nx*a,nz:o.nz*a}})}function yv(i){return{x:i.x+i.nx*15,z:i.z+i.nz*15,width:9,length:17,heading:Math.atan2(i.nx,i.nz)-Math.PI/2,mass:1e4,vx:0,vz:0}}const vn=Object.freeze({speed:34,boostSpeed:53,acceleration:13.8,boostAcceleration:24,brake:41,reverseSpeed:7,reverseAcceleration:9,steer:1.05,boostSteer:.254,fatalImpact:14});class Sv{constructor(e=0,t=0,n=0){this.reset(e,t,n)}reset(e,t,n){Object.assign(this,{x:e,z:t,heading:n,vx:0,vz:0,yaw:0,speed:0,slip:0,boosting:!1,drifting:!1,brakeHold:0})}launch(e,t){const n=e.sample(t.distance);this.reset(n.x,n.z,n.heading)}update(e,t={}){const n=Jt(t.steer||0,-1,1),s=t.gas?1:0,r=!!t.brake,o=-Math.sin(this.heading),a=-Math.cos(this.heading),c=Math.cos(this.heading),l=-Math.sin(this.heading);let h=this.vx*o+this.vz*a,u=this.vx*c+this.vz*l;if(this.boosting=!!t.boost&&s>0&&!r&&h>1,this.drifting=!this.boosting&&!!t.drift&&Math.abs(n)>.15&&Math.abs(h)>8&&!r,r)h>.35?(h=Math.max(0,h-vn.brake*e),this.brakeHold=0):(this.brakeHold+=e,this.brakeHold>.1?h=Math.max(-vn.reverseSpeed,h-vn.reverseAcceleration*e):h=0),u*=Math.exp(-8*e);else if(this.brakeHold=0,s){const f=this.boosting?vn.boostSpeed:vn.speed;h=h>f?Math.max(f,h-7*e):Math.min(f,h+(this.boosting?vn.boostAcceleration:vn.acceleration)*e)}else h*=Math.exp(-.38*e);u*=Math.exp(-(this.drifting?.7:this.boosting?2.6:5.3)*e);const d=-n*(this.boosting?vn.boostSteer:vn.steer)*Jt(Math.abs(h)/4,0,1)*(h<0?-1:1)*(this.drifting?1.48:1);this.yaw+=(d-this.yaw)*(1-Math.exp(-(this.boosting?12:7)*e)),this.vx=o*h+c*u,this.vz=a*h+l*u,this.heading+=this.yaw*e,this.x+=this.vx*e,this.z+=this.vz*e,this.speed=this.vx*-Math.sin(this.heading)+this.vz*-Math.cos(this.heading),this.slip=this.vx*Math.cos(this.heading)-this.vz*Math.sin(this.heading)}}function Jh(i){const e=Math.max(0,(i.length-i.width)/2),t=-Math.sin(i.heading),n=-Math.cos(i.heading);return[{x:i.x-t*e,z:i.z-n*e},{x:i.x+t*e,z:i.z+n*e}]}function Qh(i,e,t){const n=t.x-e.x,s=t.z-e.z,r=Jt(((i.x-e.x)*n+(i.z-e.z)*s)/(n*n+s*s||1),0,1);return{x:e.x+r*n,z:e.z+r*s}}function No(i,e){const[t,n]=Jh(i),[s,r]=Jh(e);let o,a=1/0;const c=(M,_)=>M.x*_.z-M.z*_.x,l=(M,_)=>({x:M.x-_.x,z:M.z-_.z}),h=l(n,t),u=l(r,s),d=l(s,t),f=c(h,u);if(Math.abs(f)>1e-8){const M=c(d,u)/f,_=c(d,h)/f;M>=0&&M<=1&&_>=0&&_<=1&&(o=[{x:t.x+h.x*M,z:t.z+h.z*M},{x:t.x+h.x*M,z:t.z+h.z*M}],a=0)}for(const M of[t,n]){const _=Qh(M,s,r),x=Math.hypot(M.x-_.x,M.z-_.z);x<a&&(a=x,o=[M,_])}for(const M of[s,r]){const _=Qh(M,t,n),x=Math.hypot(M.x-_.x,M.z-_.z);x<a&&(a=x,o=[_,M])}const m=a-(i.width+e.width)/2;let v=o[0].x-o[1].x,g=o[0].z-o[1].z,p=Math.hypot(v,g);return p<.001&&(v=i.x-e.x,g=i.z-e.z,p=Math.hypot(v,g),p<.001&&(v=Math.cos(i.heading),g=-Math.sin(i.heading),p=1)),{gap:m,nx:v/p,nz:g/p}}function gd(i,e,t=No({...i,length:12,width:2.5},e)){if(t.gap>=0)return 0;i.x+=t.nx*(-t.gap+.02),i.z+=t.nz*(-t.gap+.02);const n=(i.vx-e.vx)*t.nx+(i.vz-e.vz)*t.nz;if(n>=0)return 0;const s=e.mass/(e.mass+1.2),r=-n*(.65+.7*s);return i.vx+=r*t.nx,i.vz+=r*t.nz,i.speed=-i.vx*Math.sin(i.heading)-i.vz*Math.cos(i.heading),i.slip=i.vx*Math.cos(i.heading)-i.vz*Math.sin(i.heading),e.slow=Math.max(e.slow||0,Jt(-n/(e.mass+2),0,3)),-n*s}function bv(i,e,t=0){const n=e.x-i.x,s=e.z-i.z;return Math.hypot(n,s)<.01?t:t+Mo(Math.atan2(n,-s)+i.heading,t)}class wv{constructor(e,t=Math.random){this.piers=e,this.random=t,this.reset()}reset(e=!1){Object.assign(this,{phase:"seeking",free:e,remaining:180,earnings:0,deliveries:0,tips:0,combo:0,comboTime:0,fare:null,dockHold:0,lastDock:null,finished:!1,flash:null,cooldowns:new Map,clock:0})}update(e,t){if(this.finished)return null;if(this.clock+=e,this.free||(this.remaining=Math.max(0,this.remaining-e)),this.comboTime>0&&(this.comboTime-=e,this.comboTime<=0&&(this.combo=0)),!this.free&&this.remaining===0)return this.finished=!0,this.phase="ended",this.fare=null,{type:"ended"};if(this.fare&&(this.fare.time=Math.max(0,this.fare.time-e),this.fare.time===0))return this.fare=null,this.phase="seeking",this.dockHold=0,this.tips=0,this.combo=0,{type:"late"};const n=this.fare?.to||this.piers.find(r=>(this.cooldowns.get(r.id)||0)<=this.clock&&Math.hypot(r.x-t.x,r.z-t.z)<21),s=Math.hypot(t.vx,t.vz)<2.8;if(n&&Math.hypot(n.x-t.x,n.z-t.z)<21&&s){if(this.dockHold+=e,this.dockHold>.65){if(this.dockHold=0,this.fare){const l=this.fare.base+this.tips+Math.round(this.fare.time*1.9);return this.earnings+=l,this.deliveries++,this.remaining+=this.free?0:12,this.fare=null,this.phase="seeking",this.tips=0,this.combo=0,this.cooldowns.set(n.id,this.clock+7),this.lastDock=n,{type:"delivered",paid:l}}let r=this.piers.filter(l=>l.id!==n.id&&Math.abs(l.distance-n.distance)>260&&Math.abs(l.distance-n.distance)<2100);if(this.deliveries===0&&n.id==="arun"){const l=r.filter(h=>h.distance>n.distance&&h.distance-n.distance<1050);l.length&&(r=l)}const o=(r.length?r:this.piers.filter(l=>l.id!==n.id))[Math.floor(this.random()*(r.length||this.piers.length-1))];if(!o)return null;const a=Math.max(Math.abs(o.distance-n.distance),Math.hypot(o.x-n.x,o.z-n.z)),c=26+a/21;return this.fare={from:n,to:o,base:Math.round(95+a*.1),time:c,total:c},this.phase="carrying",this.tips=0,{type:"pickup",to:o}}}else this.dockHold=0;return null}stunt(e){if(this.finished||!this.fare)return 0;this.combo=Math.min(this.combo+1,8),this.comboTime=5;const t=(e==="slide"?12:20)*this.combo;return this.tips+=t,t}hitBoat(e,t){if(this.finished)return null;const n=No({...e,length:12,width:2.5},t);if(n.gap>=0)return null;const s=gd(e,t,n);return s<vn.fatalImpact?{type:"bumped",severity:s}:(this.finished=!0,this.phase="crashed",this.fare=null,this.dockHold=0,this.tips=0,this.combo=0,this.comboTime=0,{type:"crashed",severity:s})}crash(){this.combo=0,this.comboTime=0,this.fare&&(this.tips=Math.max(0,this.tips-25))}}const Fl="bangkok-longtail:scores:v1";function Ol(i){return Array.isArray(i)?i.filter(e=>e&&Number.isFinite(e.score)&&e.score>0&&e.score<1e7&&Number.isInteger(e.deliveries)&&e.deliveries>=0&&typeof e.date=="string").sort((e,t)=>t.score-e.score).slice(0,5):[]}function Ev(i,e,t,n=!1){let s=[];try{s=Ol(JSON.parse(i.getItem(Fl)||"[]"))}catch{}if(n||e<=0)return s;const r=Ol([...s,{score:e,deliveries:t,date:new Date().toISOString()}]);try{i.setItem(Fl,JSON.stringify(r))}catch{}return r}const Ca=Object.freeze({memorial:{thai:"สะพานพระพุทธยอดฟ้า",english:"MEMORIAL BRIDGE"},pokklao:{thai:"สะพานพระปกเกล้า",english:"PHRA POK KLAO BRIDGE"},taksin:{thai:"สะพานสมเด็จพระเจ้าตากสินมหาราช",english:"KING TAKSIN BRIDGE"},skypark:{thai:"สวนลอยฟ้าเจ้าพระยา",english:"CHAO PHRAYA SKY PARK"}});function Ra(i,e,t=30,n=3.4,{pier:s=!1}={}){const r=document.createElement("canvas");r.width=1536,r.height=Math.round(1536*n/t);const o=r.getContext("2d"),a=r.width,c=r.height;o.fillStyle=s?"#174f58":"#193d59",o.fillRect(0,0,a,c),o.strokeStyle="#e6e0c9",o.lineWidth=2,o.strokeRect(9,9,a-18,c-18),o.fillStyle="#f2eddb",o.textAlign="center",o.textBaseline="middle";let l=c*.46;for(o.font=`600 ${l}px "Noto Sans Thai",sans-serif`;o.measureText(i).width>a-80&&l>c*.24;)l-=1,o.font=`600 ${l}px "Noto Sans Thai",sans-serif`;o.fillText(i,a/2,c*.39),o.font=`500 ${c*.2}px Barlow,Arial,sans-serif`,o.fillStyle="#c5cfd0",o.fillText(e,a/2,c*.79,a-80);const h=new Ln(r);h.colorSpace=gt,h.anisotropy=8;const u=new Ht;u.name=`sign:${i}`;const d=new at(new an(t+.24,n+.2,.2),new wt({color:5464680,roughness:.7}));u.add(d);const f=new at(new Wt(t,n),new wt({map:h,emissiveMap:h,emissive:14542829,emissiveIntensity:.55,roughness:.78}));return f.position.z=.115,u.add(f),u}class Tv extends at{constructor(e,t={}){super(e),this.isWater=!0;const n=this,s=t.textureWidth!==void 0?t.textureWidth:512,r=t.textureHeight!==void 0?t.textureHeight:512,o=t.clipBias!==void 0?t.clipBias:0,a=t.alpha!==void 0?t.alpha:1,c=t.time!==void 0?t.time:0,l=t.waterNormals!==void 0?t.waterNormals:null,h=t.sunDirection!==void 0?t.sunDirection:new R(.70707,.70707,0),u=new Fe(t.sunColor!==void 0?t.sunColor:16777215),d=new Fe(t.waterColor!==void 0?t.waterColor:8355711),f=t.eye!==void 0?t.eye:new R(0,0,0),m=t.distortionScale!==void 0?t.distortionScale:20,v=t.side!==void 0?t.side:Kn,g=t.fog!==void 0?t.fog:!1,p=new ai,M=new R,_=new R,x=new R,w=new Ze,A=new R(0,0,-1),C=new rt,P=new R,b=new R,S=new rt,L=new Ze,U=new zt,N=new Kt(s,r),X={name:"MirrorShader",uniforms:Rn.merge([ye.fog,ye.lights,{normalSampler:{value:null},mirrorSampler:{value:null},alpha:{value:1},time:{value:0},size:{value:1},distortionScale:{value:20},textureMatrix:{value:new Ze},sunColor:{value:new Fe(8355711)},sunDirection:{value:new R(.70707,.70707,0)},eye:{value:new R},waterColor:{value:new Fe(5592405)}}]),vertexShader:`
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
				}`},z=new xt({name:X.name,uniforms:Rn.clone(X.uniforms),vertexShader:X.vertexShader,fragmentShader:X.fragmentShader,lights:!0,side:v,fog:g});z.uniforms.mirrorSampler.value=N.texture,z.uniforms.textureMatrix.value=L,z.uniforms.alpha.value=a,z.uniforms.time.value=c,z.uniforms.normalSampler.value=l,z.uniforms.sunColor.value=u,z.uniforms.waterColor.value=d,z.uniforms.sunDirection.value=h,z.uniforms.distortionScale.value=m,z.uniforms.eye.value=f,n.material=z,n.onBeforeRender=function(q,ee,W){if(_.setFromMatrixPosition(n.matrixWorld),x.setFromMatrixPosition(W.matrixWorld),w.extractRotation(n.matrixWorld),M.set(0,0,1),M.applyMatrix4(w),P.subVectors(_,x),P.dot(M)>0)return;P.reflect(M).negate(),P.add(_),w.extractRotation(W.matrixWorld),A.set(0,0,-1),A.applyMatrix4(w),A.add(x),b.subVectors(_,A),b.reflect(M).negate(),b.add(_),U.position.copy(P),U.up.set(0,1,0),U.up.applyMatrix4(w),U.up.reflect(M),U.lookAt(b),U.far=W.far,U.updateMatrixWorld(),U.projectionMatrix.copy(W.projectionMatrix),L.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),L.multiply(U.projectionMatrix),L.multiply(U.matrixWorldInverse),p.setFromNormalAndCoplanarPoint(M,_),p.applyMatrix4(U.matrixWorldInverse),C.set(p.normal.x,p.normal.y,p.normal.z,p.constant);const le=U.projectionMatrix;S.x=(Math.sign(C.x)+le.elements[8])/le.elements[0],S.y=(Math.sign(C.y)+le.elements[9])/le.elements[5],S.z=-1,S.w=(1+le.elements[10])/le.elements[14],C.multiplyScalar(2/C.dot(S)),le.elements[2]=C.x,le.elements[6]=C.y,le.elements[10]=C.z+1-o,le.elements[14]=C.w,f.setFromMatrixPosition(W.matrixWorld);const xe=q.getRenderTarget(),ae=q.xr.enabled,Ne=q.shadowMap.autoUpdate;n.visible=!1,q.xr.enabled=!1,q.shadowMap.autoUpdate=!1,q.setRenderTarget(N),q.state.buffers.depth.setMask(!0),q.autoClear===!1&&q.clear(),q.render(ee,U),n.visible=!0,q.xr.enabled=ae,q.shadowMap.autoUpdate=Ne,q.setRenderTarget(xe);const ze=W.viewport;ze!==void 0&&q.state.viewport(ze)}}}const yc=new R(.3,.26,.918).normalize();function Av(i){const e=new xt({side:kt,depthWrite:!1,depthTest:!1,uniforms:{time:{value:0},moonDirection:{value:yc.clone()}},vertexShader:`varying vec3 direction;
      void main(){direction=position;vec4 p=projectionMatrix*mat4(mat3(viewMatrix))*vec4(position,1.);gl_Position=p.xyww;}`,fragmentShader:`varying vec3 direction;uniform float time;uniform vec3 moonDirection;
      float hash(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}
      float noise(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);
        return mix(mix(hash(i),hash(i+vec2(1,0)),f.x),mix(hash(i+vec2(0,1)),hash(i+vec2(1,1)),f.x),f.y);}
      float fbm(vec2 p){float n=0.,a=.53;for(int i=0;i<4;i++){n+=noise(p)*a;p=mat2(1.6,1.2,-1.2,1.6)*p+17.7;a*=.5;}return n;}
      void main(){
        vec3 d=normalize(direction);float h=max(d.y,0.);
        float moonDot=max(0.,dot(d,moonDirection));
        float horizon=exp(-h*8.);
        vec3 color=mix(vec3(.012,.022,.039),vec3(.048,.042,.046),horizon);
        color+=vec3(.012,.006,.002)*pow(horizon,3.);
        vec2 p=d.xz/(max(.10,d.y)+.20)*1.5+vec2(time*.0018,0.);
        float cloud=fbm(p+fbm(p*.57)*1.7);
        float veil=smoothstep(.40,.75,cloud)*smoothstep(-.04,.18,d.y);
        vec3 cloudColor=mix(vec3(.028,.038,.052),vec3(.055,.048,.045),horizon);
        cloudColor+=vec3(.013,.018,.027)*pow(moonDot,24.);
        color=mix(color,cloudColor,veil*.76);
        float halo=pow(moonDot,180.);
        color+=vec3(.045,.057,.078)*halo*(1.-veil*.68);
        vec3 moonRight=normalize(cross(vec3(0.,1.,0.),moonDirection));
        vec3 moonUp=cross(moonDirection,moonRight);
        vec2 lunarUV=vec2(dot(d,moonRight),dot(d,moonUp))/.022;
        float radial=length(lunarUV),edge=max(fwidth(radial),.002);
        if(moonDot>.998&&radial<1.+edge){
          // Broad lunar maria and fine craters, shaded softly toward the limb.
          float maria=smoothstep(.28,.72,fbm(lunarUV*3.8+vec2(12.3,5.7)));
          float craters=fbm(lunarUV*19.+vec2(31.7,8.2));
          float limb=sqrt(max(0.,1.-dot(lunarUV,lunarUV)));
          vec3 moonColor=vec3(1.18,1.13,1.02)*(.52+.31*maria+.13*craters)*(.73+.27*limb);
          float disk=1.-smoothstep(1.-edge,1.+edge,radial);
          color=mix(color,moonColor,disk*(1.-veil*.58));
        }
        gl_FragColor=vec4(color,1.);
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
      }`}),t=new at(new Zt(100,48,24),e);return t.name="infinite-night-sky",t.renderOrder=-1e3,t.frustumCulled=!1,i.add(t),{sky:t,update(n){e.uniforms.time.value=n}}}function Cv(){const e=new Uint8Array(262144);for(let n=0;n<256;n++)for(let s=0;s<256;s++){const r=s/256*Math.PI*2,o=n/256*Math.PI*2;let a=0,c=0;for(let u=1;u<=10;u++){const d=u%3+1,f=u*7%11-5,m=r*d+o*f+u*1.91;a+=Math.cos(m)*d/(u+3),c+=Math.cos(m)*f/(u+3)}const l=new R(-a*.22,-c*.22,1).normalize(),h=(n*256+s)*4;e[h]=(l.x*.5+.5)*255,e[h+1]=(l.y*.5+.5)*255,e[h+2]=(l.z*.5+.5)*255,e[h+3]=255}const t=new Ro(e,256,256);return t.wrapS=t.wrapT=fi,t.generateMipmaps=!0,t.minFilter=yn,t.magFilter=rn,t.anisotropy=4,t.needsUpdate=!0,t}function Rv(i,e){const t=e?6:12,n=new Wt(2,2,e?64:112,e?64:112),s=n.attributes.position,r=l=>Math.sign(l)*(Math.abs(l)<=.85?Math.abs(l)*320:272+Math.pow((Math.abs(l)-.85)/.15,3)*8728);for(let l=0;l<s.count;l++)s.setXY(l,r(s.getX(l)),r(s.getY(l)));n.computeBoundingSphere();const o=new Tv(n,{textureWidth:e?256:512,textureHeight:e?256:512,waterNormals:Cv(),sunDirection:yc.clone(),sunColor:8887216,waterColor:1059112,distortionScale:1.8,fog:!0,clipBias:.002});o.rotation.x=-Math.PI/2,o.position.y=.04,o.name="chao-phraya-water";const a=o.material,c=a.uniforms.mirrorSampler.value;return c.generateMipmaps=!0,c.minFilter=yn,a.vertexShader=a.vertexShader.replace("uniform float time;","uniform float time;uniform vec3 eye;").replace("worldPosition = mirrorCoord.xyzw;",`float distanceToBoat=length(mirrorCoord.xz-eye.xz);
      float swell=(sin(mirrorCoord.x*.47+mirrorCoord.z*.28+time*1.1)*.095+sin(mirrorCoord.z*.73-mirrorCoord.x*.22-time*1.42)*.038)*exp(-distanceToBoat*.004);
      mirrorCoord.y+=swell;worldPosition=mirrorCoord;`).replace("modelViewMatrix * vec4( position, 1.0 )","viewMatrix * worldPosition"),a.uniforms.riverLamps={value:Array.from({length:t},()=>new rt)},a.uniforms.riverColors={value:Array.from({length:t},()=>new Fe(0))},a.fragmentShader=a.fragmentShader.replace("uniform sampler2D mirrorSampler;",`uniform sampler2D mirrorSampler;uniform vec4 riverLamps[${t}];uniform vec3 riverColors[${t}];`).replace(/vec4 getNoise\( vec2 uv \) \{[\s\S]*?return noise \* 0\.5 - 1\.0;\s*\}/,`vec4 getNoise(vec2 uv){
      vec4 a=texture2D(normalSampler,uv/17.+vec2(time*.017,time*.008));
      vec4 b=texture2D(normalSampler,uv.yx/9.7+vec2(-time*.013,time*.010));
      vec4 c=texture2D(normalSampler,uv/3.1+vec2(time*.007,-time*.019));
      vec4 n=(a*.52+b*.32+c*.16)*2.-1.;
      n.xy+=vec2(cos(uv.x*.56+uv.y*.31+time*1.45),sin(uv.y*.8-uv.x*.24-time*1.7))*.07;
      return n;
    }`).replace("noise.xzy * vec3( 1.5, 1.0, 1.5 )","noise.xzy * vec3( .58, 1.0, .58 )").replace("100.0, 2.0, 0.5","160.0, 0.35, 0.08").replace("float rf0 = 0.3;","float rf0 = 0.025;").replace("max( dot( eyeDirection, surfaceNormal ), 0.0 )","clamp( dot( eyeDirection, surfaceNormal ), 0.0, 1.0 )").replace("vec3( 0.1 ) + reflectionSample * 0.9 + reflectionSample * specularLight","reflectionSample * 0.82 + specularLight * .12").replace("vec3 outgoingLight = albedo;",`vec3 outgoingLight=albedo;
      for(int i=0;i<${t};i++){
        vec3 delta=riverLamps[i].xyz-worldPosition.xyz;float range=length(delta);
        vec3 halfVector=normalize(delta/max(range,.1)+eyeDirection);
        float glitter=pow(max(dot(surfaceNormal,halfVector),0.),110.);
        float attenuation=riverLamps[i].w/(1.+range*range*.012);
        outgoingLight+=riverColors[i]*glitter*attenuation*.20;
      }
      float chop=pow(max(0.,noise.x*.5+noise.y*.5-.22),3.);
      outgoingLight+=vec3(.012,.021,.022)*chop;`),i.add(o),{water:o,update(l,h,u){a.uniforms.time.value=l,o.position.x=h.position.x,o.position.z=h.position.z;const d=u.map(f=>({s:f,d:(f.x-h.position.x)**2+(f.z-h.position.z)**2})).sort((f,m)=>f.d-m.d).slice(0,t);for(let f=0;f<t;f++){const m=d[f]?.s;a.uniforms.riverLamps.value[f].set(m?.x||0,m?.y||0,m?.z||0,m?.power||0),a.uniforms.riverColors.value[f].set(m?.color||0)}}}}function xd(i,e,t,n=new Ze){let s;if(t.isMeshBasicMaterial&&!t.map&&Math.max(t.color.r,t.color.g,t.color.b)>1.05)s=t.color.clone();else if(t.emissiveIntensity>=2.5&&!t.emissiveMap)s=t.emissive.clone().multiplyScalar(t.emissiveIntensity);else return;e.computeBoundingBox();const r=e.boundingBox,o=r.getCenter(new R),a=r.getSize(new R),c=new R().setFromMatrixScale(n),l=a.clone().multiply(c).toArray(),h=[0,1,2].sort((g,p)=>l[p]-l[g]),u=h[0],d=l[u]>1&&l[u]>l[h[1]]*4,f=d?Math.max(l[h[1]],l[h[2]]):l[u];if(f>2.5||f<=0)return;const m=o.clone(),v=o.clone();return d&&(m.setComponent(u,r.min.getComponent(u)),v.setComponent(u,r.max.getComponent(u))),i.push({a:m.applyMatrix4(n).toArray(),b:v.applyMatrix4(n).toArray(),width:f,color:s.toArray()}),!0}function Pv(i,e){const t=new R().setFromMatrixScale(e).x;return i.map(n=>({...n,a:new R(...n.a).applyMatrix4(e).toArray(),b:new R(...n.b).applyMatrix4(e).toArray(),width:n.width*t}))}function Lv(i,e,t){const n=t==="steel",s=[],r=(c,l,h,u)=>s.push({a:[-i/2,c,l],b:[i/2,c,l],width:h,color:u}),o=new Fe(16763779).multiplyScalar(2.5).toArray(),a=n?o:new Fe(6604478).multiplyScalar(1.6).toArray();for(const c of[-1,1])r(e+.55,c*(n?9:14.75),.22,a),n||r(e+4.75,c*3.25,.2,o);return s}function Dv(i){const e=[],t=new Fe(16764040).multiplyScalar(3.2).toArray(),n=(o,a=t,c=.2)=>e.push({a:o,b:[...o],width:c,color:a}),s=(o,a,c=.1,l=t)=>e.push({a:o,b:a,width:c,color:l}),r=(o,a,c,l)=>{n([-o,a,c],new Fe(16723993).multiplyScalar(3).toArray()),n([o,a,c],new Fe(2485367).multiplyScalar(3).toArray()),n(l)};if(i==="cruise"){for(const[o,a,c,l]of[[1.57,11.68,43.7,1],[4.17,11.58,42.7,1.4],[6.63,10.28,39.2,1.8]])for(const h of[-1,1])s([h*a/2,o,l-c/2],[h*a/2,o,l+c/2],.075);for(const o of[-4.25,4.25])for(let a=0;a<25;a++){const c=a/24;n([o,9.125-Math.sin(c*Math.PI)*.59,-16.1+c*36.4],t,.134)}r(5.28,6.25,-16.8,[0,8.19,21.6]),n([0,10.24,-15.9])}else if(i==="electric"){const o=new Fe(7980767).multiplyScalar(2).toArray();for(const a of[-1,1])s([a*3.18,3.65,-9.25],[a*3.18,3.65,9.25],.09,o);r(3.04,3.6,-7.2,[0,3.8,9])}else if(i==="ferry"){for(const o of[-1,1])s([o*2.36,3.24,-9.3],[o*2.36,3.24,10.7],.08);r(2.28,3.32,-9.1,[0,3.52,12.6])}else if(i==="longtail"){for(const o of[-2.74,2.91])s([-.83,1.99,o],[.83,1.99,o],.048);r(1.08,2.06,-2.66,[0,2.26,4.7])}else if(i==="tug"){r(1.68,4.23,-3.49,[0,1.71,7.42]);for(const o of[5.67,6.65])n([0,o,-2.18]);n([0,2.79,.26])}else i==="barge"?r(5.75,1.42,-20.9,[-4.66,3.14,21.7]):n([0,.95,2.55],t,.148);return e}class vd{constructor(e,t,{dynamic:n=!1,replacePhysical:s=!n}={}){this.fixtures=t,this.dynamic=n;const r=this.geometry=new _m;r.setAttribute("position",new Be([0,-1,0,1,-1,0,0,1,0,1,1,0],3)),r.setIndex([0,1,2,2,1,3]),r.instanceCount=t.length;for(const[a,c]of[["lightStart",3],["lightEnd",3],["lightColor",3],["lightWidth",1]]){const l=new Pl(new Float32Array(t.length*c),c);n&&a!=="lightColor"&&l.setUsage(As),r.setAttribute(a,l)}t.forEach((a,c)=>r.attributes.lightColor.setXYZ(c,...a.color)),this.material=new xt({transparent:!0,depthWrite:!1,depthTest:!0,blending:ms,uniforms:{viewport:{value:new se(1,1)},nearPlane:{value:.3},fogDensity:{value:e.fog?.density||0},replacePhysical:{value:s?1:0}},vertexShader:`attribute vec3 lightStart;attribute vec3 lightEnd;attribute vec3 lightColor;attribute float lightWidth;
        uniform vec2 viewport;uniform float nearPlane;uniform float replacePhysical;
        varying vec2 screenStart;varying vec2 screenEnd;varying vec3 tint;
        varying float radius;varying float nativePixels;varying float depth;
        void main(){
          vec4 a=modelViewMatrix*vec4(lightStart,1.);vec4 b=modelViewMatrix*vec4(lightEnd,1.);
          float nearZ=-nearPlane*1.01;
          if(a.z>nearZ&&b.z>nearZ){gl_Position=vec4(2.,2.,2.,1.);return;}
          if(a.z>nearZ)a=mix(a,b,(nearZ-a.z)/(b.z-a.z));
          if(b.z>nearZ)b=mix(b,a,(nearZ-b.z)/(a.z-b.z));
          depth=max(nearPlane,-(a.z+b.z)*.5);
          nativePixels=lightWidth*.5*projectionMatrix[1][1]*viewport.y*.5/depth;
          radius=max(1.15,mix(min(nativePixels,4.),nativePixels,replacePhysical));tint=lightColor;
          vec4 ca=projectionMatrix*a,cb=projectionMatrix*b;
          screenStart=(ca.xy/ca.w*.5+.5)*viewport;
          screenEnd=(cb.xy/cb.w*.5+.5)*viewport;
          vec2 delta=screenEnd-screenStart;
          vec2 tangent=length(delta)>.0001?normalize(delta):vec2(1.,0.);
          vec2 normal=vec2(-tangent.y,tangent.x);
          vec2 offset=(tangent*(position.x*2.-1.)+normal*position.y)*(radius+1.);
          vec4 clip=mix(ca,cb,position.x);
          clip.xy+=offset*2./viewport*clip.w;
          // The antialiased quad extends past both endpoints. Extrapolate its
          // depth over that extension too: compressing the original endpoint
          // depths into a wider quad cuts angled strips into their own deck.
          float along=position.x+dot(offset,delta)/max(dot(delta,delta),1.);
          a.z=min(-nearPlane*.5,a.z+lightWidth*.55+.025);
          b.z=min(-nearPlane*.5,b.z+lightWidth*.55+.025);
          vec4 surfaceA=projectionMatrix*a,surfaceB=projectionMatrix*b;
          clip.z=mix(surfaceA.z/surfaceA.w,surfaceB.z/surfaceB.w,along)*clip.w;
          gl_Position=clip;
        }`,fragmentShader:`uniform float fogDensity;uniform float replacePhysical;varying vec2 screenStart;varying vec2 screenEnd;varying vec3 tint;
        varying float radius;varying float nativePixels;varying float depth;
        void main(){
          vec2 delta=screenEnd-screenStart;
          float t=clamp(dot(gl_FragCoord.xy-screenStart,delta)/max(dot(delta,delta),.0001),0.,1.);
          float distanceToLight=length(gl_FragCoord.xy-mix(screenStart,screenEnd,t));
          float coverage=1.-smoothstep(radius-.8,radius+.8,distanceToLight);
          // Let the physical fixture take over continuously when it is resolved.
          float distant=mix(1.-smoothstep(.8,3.,nativePixels),1.,replacePhysical);
          float haze=exp(-fogDensity*fogDensity*depth*depth);
          gl_FragColor=vec4(tint,coverage*distant*haze*.72);
          #include <tonemapping_fragment>
          #include <colorspace_fragment>
        }`}),this.mesh=new at(r,this.material),this.mesh.name=n?"fleet-visible-lights":"riverbank-visible-lights",this.mesh.frustumCulled=!1;const o=new rt;this.mesh.onBeforeRender=(a,c,l)=>{a.getCurrentViewport(o),this.material.uniforms.viewport.value.set(o.z,o.w),this.material.uniforms.nearPlane.value=l.near,this.material.uniformsNeedUpdate=!0},this.pointA=new R,this.pointB=new R,this.scale=new R,this.update(),e.add(this.mesh)}update(){let e=null,t=1;for(const[n,s]of this.fixtures.entries())this.pointA.fromArray(s.a),this.pointB.fromArray(s.b),s.parent?(s.parent!==e&&(s.parent.updateWorldMatrix(!0,!1),t=this.scale.setFromMatrixScale(s.parent.matrixWorld).x,e=s.parent),this.pointA.applyMatrix4(s.parent.matrixWorld),this.pointB.applyMatrix4(s.parent.matrixWorld)):(t=1,e=null),this.geometry.attributes.lightStart.setXYZ(n,this.pointA.x,this.pointA.y,this.pointA.z),this.geometry.attributes.lightEnd.setXYZ(n,this.pointB.x,this.pointB.y,this.pointB.z),this.geometry.attributes.lightWidth.setX(n,s.width*t);for(const n of["lightStart","lightEnd","lightWidth"])this.geometry.attributes[n].needsUpdate=!0}}function Ps(i,e=!1){const t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,c=new it;let l=0;for(let h=0;h<i.length;++h){const u=i[h];let d=0;if(t!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const f in u.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(u.attributes[f]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const f in u.morphAttributes){if(!s.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[f]===void 0&&(o[f]=[]),o[f].push(u.morphAttributes[f])}if(e){let f;if(t)f=u.index.count;else if(u.attributes.position!==void 0)f=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,f,h),l+=f}}if(t){let h=0;const u=[];for(let d=0;d<i.length;++d){const f=i[d].index;for(let m=0;m<f.count;++m)u.push(f.getX(m)+h);h+=i[d].attributes.position.count}c.setIndex(u)}for(const h in r){const u=$h(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;c.setAttribute(h,u)}for(const h in o){const u=o[h][0].length;if(u===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[h]=[];for(let d=0;d<u;++d){const f=[];for(let v=0;v<o[h].length;++v)f.push(o[h][v][d]);const m=$h(f);if(!m)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;c.morphAttributes[h].push(m)}}return c}function $h(i){let e,t,n,s=-1,r=0;for(let l=0;l<i.length;++l){const h=i[l];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*t}const o=new e(r),a=new vt(o,t,n);let c=0;for(let l=0;l<i.length;++l){const h=i[l];if(h.isInterleavedBufferAttribute){const u=c/t;for(let d=0,f=h.count;d<f;d++)for(let m=0;m<t;m++){const v=h.getComponent(d,m);a.setComponent(d+u,m,v)}}else o.set(h.array,c);c+=h.count*t}return s!==void 0&&(a.gpuType=s),a}const Iv=new an(1,1,1),Pa=new Zt(1,8,6),qt=(i,e=0,t=0)=>new wt({color:i,emissive:e,emissiveIntensity:t,roughness:.82}),eu=[16758632,16764815,15248999,9096909];function Uv(i){return()=>(i=Math.imul(i,1664525)+1013904223>>>0,i/4294967296)}class Nv{constructor(){this.fixtures=[],this.parts=new Map,this.matrix=new Ze,this.q=new Vt,this.v=new R,this.s=new R}add(e,t,n,s,r,o=1,a=1,c=1,l=0){if(this.q.setFromAxisAngle(new R(0,1,0),l),this.matrix.compose(this.v.set(n,s,r),this.q,this.s.set(o,a,c)),xd(this.fixtures,e,t,this.matrix))return;let h=e.clone().applyMatrix4(this.matrix);if(h.index){const u=h;h=u.toNonIndexed(),u.dispose()}this.parts.has(t)||this.parts.set(t,[]),this.parts.get(t).push(h)}box(e,t,n,s,r,o,a,c=0){this.add(Iv,e,t,n,s,r,o,a,c)}line(e,t,n,s=.05){const r=new R(...t),o=new R(...n),a=o.clone().sub(r),c=new pn(s,s,a.length(),5);c.applyQuaternion(new Vt().setFromUnitVectors(new R(0,1,0),a.normalize()));const l=r.add(o).multiplyScalar(.5);this.add(c,e,l.x,l.y,l.z),c.dispose()}finish(e){for(const[t,n]of this.parts){const s=Ps(n);n.forEach(o=>o.dispose());const r=new at(s,t);e.add(r)}this.parts.clear()}}const La=new Map,tu=new Wt(9,2.25);function Fv(i,e){const t=`${i}:${e%3}`;if(La.has(t))return new at(tu,La.get(t));const n=document.createElement("canvas");n.width=512,n.height=128;const s=n.getContext("2d");s.fillStyle="#090e13",s.fillRect(0,0,512,128),s.strokeStyle=["#dea353","#6ecfc1","#dd7160"][e%3],s.lineWidth=3,s.strokeRect(8,8,496,112),s.font='600 54px "Noto Sans Thai",Arial',s.textAlign="center",s.textBaseline="middle",s.shadowColor=s.strokeStyle,s.shadowBlur=8,s.fillStyle=s.strokeStyle,s.fillText(i,256,66,466);const r=new Ln(n);r.colorSpace=gt;const o=new wt({map:r,emissiveMap:r,emissive:16777215,emissiveIntensity:2.1,roughness:.85});return La.set(t,o),new at(tu,o)}function Ov(i,e,t,n){const s=Uv(73027),r=new Ht;r.name="riverside-evening-life",i.add(r);const o=new Nv,a=qt(5849136),c=qt(2042410);qt(4803655);const l=[qt(7877674),qt(4543816),qt(10191966)],h=qt(6965041),u=qt(1518368),d=qt(1120025),f=[],m=eu.map(N=>qt(12821890,N,3.5)),v=m[0],g=[];for(let N=50;N<e.length-60;N+=82)for(const X of[-1,1]){const z=e.sample(N),q=X*(z.width/2+7),ee=e.sample(N,q),W=Math.atan2(-z.nx*X,-z.nz*X),le={x:Math.cos(W),z:-Math.sin(W)},xe={x:z.nx*X,z:z.nz*X},ae=(Q,re,_e)=>[ee.x+le.x*Q+xe.x*_e,re,ee.z+le.z*Q+xe.z*_e],Ne=t.some(Q=>Q.side===X&&Math.abs(N-Q.distance)<Q.reserveLength+8),ze=Math.floor(N/82),$e=!Ne&&ze%4!==0,qe=m[ze%m.length];if($e){g.push({distance:N,side:X});const Q=ae(0,3.25,4);o.box(a,...Q,23,.35,10,W);for(const Ie of[-10,-5,0,5,10])o.box(a,...ae(Ie,1,0),.4,4,.4),o.box(c,...ae(Ie,4.1,-1.1),.12,1.9,.12);o.box(c,...ae(0,5,-1.1),23,.1,.1,W);for(const Ie of[-8,-4,0,4,8])o.add(new Dn(.42,.12,6,10),d,...ae(Ie,1.1,-1.7),1,1,1,W);o.box(l[ze%3],...ae(0,7.2,6),22,.18,7.5,W);for(const Ie of[-10,10])o.box(c,...ae(Ie,5.2,2.5),.15,4,.15);for(let Ie=-8;Ie<=8;Ie+=4){o.add(new pn(1.05,1.05,.12,10),a,...ae(Ie,4.12,2.2)),o.box(c,...ae(Ie,3.67,2.2),.12,.9,.12),o.add(Pa,v,...ae(Ie,4.35,2.2),.1,.16,.1);for(const tt of[-1,1])o.box(a,...ae(Ie+tt*1.3,3.75,2.2),.55,.12,.6,W),o.box(a,...ae(Ie+tt*1.45,4.07,2.2),.12,.65,.6,W)}const re=Fv(["ริมน้ำ","SEAFOOD","ก๋วยเตี๋ยว","RIVER BAR","อาหารไทย","ท่าเรือ"][ze%6],ze);o.add(re.geometry,re.material,...ae(0,7.1,2.15),1,1,1,W);const _e=ae(-11,7.4,.6),Le=ae(11,7.4,.6);for(let Ie=0;Ie<12;Ie++){const tt=Ie/11,D=(Ie+1)/11,O=[_e[0]+(Le[0]-_e[0])*tt,7.4-Math.sin(tt*Math.PI)*.75,_e[2]+(Le[2]-_e[2])*tt],H=[_e[0]+(Le[0]-_e[0])*D,7.4-Math.sin(D*Math.PI)*.75,_e[2]+(Le[2]-_e[2])*D];Ie<11&&o.line(c,O,H,.023),o.add(Pa,qe,O[0],O[1]-.14,O[2],.11,.16,.11)}const Te=ae(0,6,1);f.push({x:Te[0],y:Te[1],z:Te[2],color:eu[ze%4],power:35})}else{const Q=ae(0,6.1,0);o.box(c,...Q,.14,6.3,.14),o.box(qe,...ae(0,9.3,0),.65,.2,.65);const re=ae(0,9.15,0);f.push({x:re[0],y:re[1],z:re[2],color:16762251,power:29})}if(!Ne){for(const Q of[-14,14])o.add(new pn(.7,.5,1.05,8),h,...ae(Q,3.6,4)),o.add(Pa,u,...ae(Q,5.15,4),1.25,1.4,1.05);if(ze%3===0)for(let Q=0;Q<3;Q++)o.box(a,...ae(16+Q*.9,3.6+Q*.2,5),.85,.8,.85,W)}}o.finish(r),r.traverse(N=>{N.updateMatrix(),N.matrixAutoUpdate=!1});const p=n?64:132,M=[],_=[],x=qt(11437929),w=qt(11184288),A=qt(1647654),C=qt(1119248),P=(N,X,z)=>{const q=new Xs(N,X,p);q.instanceMatrix.setUsage(As),q.frustumCulled=!1,q.layers.set(1),i.add(q),_.push({mesh:q,kind:z})};P(new qs(.22,.49,3,7),w,"body"),P(new Zt(.17,8,7),x,"head"),P(new Zt(.174,8,6),C,"hair");for(const N of[-1,1])P(new qs(.075,.58,2,5),A,N<0?"left-leg":"right-leg"),P(new qs(.062,.46,2,5),w,N<0?"left-arm":"right-arm");const b=[15122576,7510681,12678752,12631210,5461872,11048053];for(let N=0;N<p;N++){const X=g[N%g.length];M.push({distance:X.distance+(s()-.5)*19,side:X.side,phase:s()*6.283,walk:N%3===0,height:.9+s()*.16});for(const z of _)(z.kind==="body"||z.kind.includes("arm"))&&z.mesh.setColorAt(N,new Fe(b[N%b.length]))}const S=new ft,L=N=>{for(let X=0;X<M.length;X++){const z=M[X],q=z.walk?Math.sin(N*.055+z.phase)*8:0,ee=e.sample(z.distance+q,z.side*(e.sample(z.distance).width/2+(z.walk?7:10))),W=z.height,le=z.walk?ee.heading+(Math.cos(N*.055+z.phase)>0?0:Math.PI):Math.atan2(-ee.nx*z.side,-ee.nz*z.side),xe=z.walk?Math.sin(N*3+z.phase)*.35:0;for(const ae of _){let Ne=0,ze=0,$e=0;if(ae.kind==="body"&&(ze=1.19),ae.kind==="head"&&(ze=1.76),ae.kind==="hair"&&(ze=1.82),ae.kind.includes("leg")){const qe=ae.kind.startsWith("left")?-1:1;Ne=qe*.13,ze=.46,$e=qe*xe}if(ae.kind.includes("arm")){const qe=ae.kind.startsWith("left")?-1:1;Ne=qe*.31,ze=1.14,$e=-qe*xe*.65}S.position.set(ee.x+Math.cos(le)*Ne,3.48+ze*W,ee.z-Math.sin(le)*Ne),S.rotation.set($e,le,0),S.scale.set(W,W,ae.kind==="hair"?W*.9:W),S.updateMatrix(),ae.mesh.setMatrixAt(X,S.matrix)}}for(const X of _)X.mesh.instanceMatrix.needsUpdate=!0};L(0);let U=-1;return{lights:f,fixtures:o.fixtures,update(N){N-U<1/24||(U=N,L(N))}}}function zv(i,e,t,n){const s=t.find(x=>x.kind==="icon-siam"),r=35,o=n?32:64,a=r*o,c=new Float32Array(a*3),l=new Float32Array(a*3),h=new Float32Array(a),u=new it;u.setAttribute("position",new vt(c,3)),u.setAttribute("color",new vt(l,3)),u.setAttribute("alpha",new vt(h,1));const d=new xt({transparent:!0,depthWrite:!1,blending:ms,vertexShader:"attribute vec3 color;attribute float alpha;varying vec3 tint;varying float fade;void main(){tint=color;fade=alpha;vec4 p=modelViewMatrix*vec4(position,1.);gl_PointSize=clamp(180./max(1.,-p.z),1.,7.);gl_Position=projectionMatrix*p;}",fragmentShader:`varying vec3 tint;varying float fade;void main(){float r=length(gl_PointCoord-.5)*2.;if(r>1.)discard;gl_FragColor=vec4(tint,fade*(1.-r*r));
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
  }`}),f=new Qu(u,d);f.frustumCulled=!1,f.layers.set(1),i.add(f);const m=new Xs(new pn(.055,.13,1,6),new dn({color:8108753,transparent:!0,opacity:.25,depthWrite:!1,blending:ms}),r);m.instanceMatrix.setUsage(As),m.frustumCulled=!1,i.add(m);const v=new ft,g=[],p=Array.from({length:r},(x,w)=>{const A=s.distance+(w-(r-1)/2)*3.8,C=e.sample(A),P=e.sample(A,s.side*(C.width/2+9));return{x:P.x,z:P.z,nx:P.nx,nz:P.nz}});for(let x=0;x<5;x++){const w=p[x*7];g.push({x:w.x,y:5,z:w.z,color:7718367,power:16})}const M=new Fe;let _=-1;return{lights:g,update(x,w){const A=(w.position.x-s.x)**2+(w.position.z-s.z)**2<121e4;if(f.visible=m.visible=A,!(!A||x-_<1/30)){_=x;for(let C=0;C<r;C++){const P=p[C],b=.5+.5*Math.sin(x*.67+C*.28),S=3.5+b*7.5;v.position.set(P.x,3.25+S/2,P.z),v.scale.set(1,S,1),v.updateMatrix(),m.setMatrixAt(C,v.matrix),M.setHSL(.53+.055*Math.sin(x*.055+C*.032),.38,.59);for(let L=0;L<o;L++){const U=C*o+L,N=(L/o+x*.28)%1,X=4*S*N*(1-N),z=(.08+N*.25)*Math.sin(U*17.21+x*1.7);c[U*3]=P.x+Math.cos(C)*z+P.nx*Math.sin(C*.7)*N*1.8,c[U*3+1]=3.25+X,c[U*3+2]=P.z+Math.sin(C)*z+P.nz*Math.sin(C*.7)*N*1.8,l[U*3]=M.r*1.8,l[U*3+1]=M.g*1.8,l[U*3+2]=M.b*1.8,h[U]=.45*(1-N*.4)}}m.instanceMatrix.needsUpdate=!0;for(const C of Object.values(u.attributes))C.needsUpdate=!0}}}}const Bv=JSON.parse('[{"id":"millennium-hilton","osmId":342556929,"name":"Millennium Hilton","thai":"มิลเลนเนียม ฮิลตัน","side":1,"center":[100.5109597,13.7286941],"height":121,"floors":32,"style":"hilton","footprint":[[-39.741,-1.614],[-36.054,-2.917],[3.417,-9.874],[9.938,-11.032],[15.313,-14.449],[20.893,-16.587],[24.418,-17.01],[29.349,-17.399],[33.761,-17.266],[39.914,-14.049],[43.213,-9.841],[44.564,-5.154],[44.489,-0.623],[43.234,3.306],[39.817,7.481],[34.464,10.241],[27.24,11.677],[21.109,11.544],[17.389,10.642],[13.344,10.019],[-32.009,17.255],[-36.205,17.399],[-39.547,15.707],[-42.348,13.28],[-44.564,8.638],[-43.721,3.328],[-39.741,-1.614]],"geometry":[[100.5105922,13.7287086],[100.5106263,13.7287203],[100.5109913,13.7287828],[100.5110516,13.7287932],[100.5111013,13.7288239],[100.5111529,13.7288431],[100.5111855,13.7288469],[100.5112311,13.7288504],[100.5112719,13.7288492],[100.5113288,13.7288203],[100.5113593,13.7287825],[100.5113718,13.7287404],[100.5113711,13.7286997],[100.5113595,13.7286644],[100.5113279,13.7286269],[100.5112784,13.7286021],[100.5112116,13.7285892],[100.5111549,13.7285904],[100.5111205,13.7285985],[100.5110831,13.7286041],[100.5106637,13.7285391],[100.5106249,13.7285378],[100.510594,13.728553],[100.5105681,13.7285748],[100.5105476,13.7286165],[100.5105554,13.7286642],[100.5105922,13.7287086]],"tags":{"addr:city":"แขวงบางรัก","addr:housenumber":"123","addr:postcode":"10600","addr:street":"ถนนเจริญนคร","brand":"Millennium","brand:wikidata":"Q6858774","building":"yes","building:levels":"32","building:part":"yes","contact:facebook":"https://www.facebook.com/Hiltonbangkok","contact:instagram":"https://www.instagram.com/millenniumhiltonbangkok","contact:twitter":"https://twitter.com/hiltonbangkok","contact:youtube":"https://www.youtube.com/channel/UCGbgK6kYjOVNUhKsxfQ7MXg","email":"bkkhi.informations@hilton.com","internet_access":"wlan","internet_access:fee":"no","layer":"1","name":"Millennium Hilton Bangkok","official_name":"Millennium Hotels & Resorts","operator":"Hilton","payment:american_express":"yes","payment:cash":"yes","payment:credit_cards":"yes","payment:debit_cards":"yes","payment:diners_club":"yes","payment:eurocard":"yes","payment:jcb":"yes","payment:mastercard":"yes","payment:unionpay":"yes","payment:visa":"yes","phone":"+66 2 442 2000","rooms":"533","smoking":"yes","stars":"5","tourism":"hotel","website":"https://www.hilton.com/en/hotels/bkkhitw-millennium-hilton-bangkok/?SEO_id=OTHR-APAC-TW-BKKHITW","wheelchair":"yes","wikidata":"Q47518776","wikimedia_commons":"Category:Millennium Hilton Bangkok"},"source":"https://www.openstreetmap.org/way/342556929","reference":"https://www.hilton.com/en/hotels/bkkhitw-millennium-hilton-bangkok/","heightSource":"Approximate authored height from storey count and exterior reference","floorSource":"OSM tag"},{"id":"royal-orchid","osmId":1537453215,"name":"Royal Orchid Sheraton","thai":"รอยัล ออคิด เชอราตัน","side":-1,"center":[100.51354620000001,13.72915385],"height":94,"floors":28,"style":"sheraton","footprint":[[-29.933,48.508],[-10.371,44.678],[-5.656,57.603],[44.11,43.487],[38.271,16.882],[20.72,4.893],[18.546,-5.015],[17.594,-10.414],[29.738,-29.539],[25.11,-57.603],[13.842,-55.421],[-0.173,-52.838],[-30.409,-21.769],[-44.11,-18.73],[-29.933,48.508]],"geometry":[[100.5132694,13.7287181],[100.5134503,13.7287525],[100.5134939,13.7286364],[100.5139541,13.7287632],[100.5139001,13.7290022],[100.5137378,13.7291099],[100.5137177,13.7291989],[100.5137089,13.7292474],[100.5138212,13.7294192],[100.5137784,13.7296713],[100.5136742,13.7296517],[100.5135446,13.7296285],[100.513265,13.7293494],[100.5131383,13.7293221],[100.5132694,13.7287181]],"tags":{"addr:district":"บางรัก","addr:housenumber":"2","addr:postcode":"10500","addr:province":"กรุงเทพมหานคร","addr:street":"ซอยเจริญกรุง 30","addr:subdistrict":"บางรัก","brand":"Sheraton","brand:wikidata":"Q634831","building":"yes","email":"royalorchid@sheraton.com","fax":"+66 2 236 8320","internet_access":"yes","internet_access:fee":"customers","name":"รอยัลออคิด เชอราตัน","name:en":"Royal Orchid Sheraton","name:th":"รอยัลออคิด เชอราตัน","phone":"+66 2 266 0123","tourism":"hotel","website":"https://www.marriott.com/hotels/travel/bkksi-royal-orchid-sheraton-hotel-and-towers/"},"source":"https://www.openstreetmap.org/way/1537453215","reference":"https://www.marriott.com/en-us/hotels/bkksi-royal-orchid-sheraton-riverside-hotel-bangkok/overview/","heightSource":"Approximate authored height from storey count and exterior reference","floorSource":"Approximate facade count"},{"id":"peninsula","osmId":134464576,"name":"The Peninsula","thai":"เดอะ เพนนินซูลา","side":1,"center":[100.51105455000001,13.723108700000001],"height":151,"floors":37,"style":"peninsula","footprint":[[-11.198,-10.42],[-11.879,1.859],[-5.283,8.238],[-6.991,10.019],[-6.991,15.841],[-10.127,15.028],[-15.491,19.336],[-15.372,23.066],[-9.662,29.7],[10.83,30.168],[10.722,20.85],[5.358,21.195],[9.316,17.477],[11.998,17.589],[14.442,14.216],[14.215,11.421],[10.019,7.102],[15.372,2.683],[15.491,-8.037],[11.652,-13.737],[15.145,-16.999],[15.026,-21.774],[4.655,-30.168],[1.519,-30.045],[-6.407,-23.177],[-6.288,-19.448],[-4.19,-16.887],[-11.198,-10.42]],"geometry":[[100.510951,13.7232023],[100.5109447,13.723092],[100.5110057,13.7230347],[100.5109899,13.7230187],[100.5109899,13.7229664],[100.5109609,13.7229737],[100.5109113,13.722935],[100.5109124,13.7229015],[100.5109652,13.7228419],[100.5111547,13.7228377],[100.5111537,13.7229214],[100.5111041,13.7229183],[100.5111407,13.7229517],[100.5111655,13.7229507],[100.5111881,13.722981],[100.511186,13.7230061],[100.5111472,13.7230449],[100.5111967,13.7230846],[100.5111978,13.7231809],[100.5111623,13.7232321],[100.5111946,13.7232614],[100.5111935,13.7233043],[100.5110976,13.7233797],[100.5110686,13.7233786],[100.5109953,13.7233169],[100.5109964,13.7232834],[100.5110158,13.7232604],[100.510951,13.7232023]],"tags":{"building":"yes","building:levels":"40"},"source":"https://www.openstreetmap.org/way/134464576","reference":"https://www.peninsula.com/en/bangkok/5-star-luxury-hotel-riverside","heightSource":"Approximate authored height from storey count and exterior reference","floorSource":"Operator reference"},{"id":"shangri-la","osmId":1340837007,"name":"Shangri-La Bangkok","thai":"แชงกรี-ลา กรุงเทพฯ","side":-1,"center":[100.5140167,13.72150005],"height":86,"floors":25,"style":"shangri","footprint":[[-23.434,-35.016],[-27.24,-33.691],[-31.642,-29.951],[-34.302,-26.444],[-35.935,-23.06],[-37.233,-16.915],[-24.007,-7.731],[-15.929,0.106],[-6.002,12.229],[-0.735,21.902],[2.693,35.016],[16.189,31.32],[20.017,21.535],[27.673,12.93],[37.233,9.635],[37.233,-5.149],[31.599,-4.937],[19.271,-7.598],[11.831,-10.035],[1.514,-14.611],[-12.62,-25.242],[-18.47,-30.129],[-23.434,-35.016]],"geometry":[[100.5138,13.7218146],[100.5137648,13.7218027],[100.5137241,13.7217691],[100.5136995,13.7217376],[100.5136844,13.7217072],[100.5136724,13.721652],[100.5137947,13.7215695],[100.5138694,13.7214991],[100.5139612,13.7213902],[100.5140099,13.7213033],[100.5140416,13.7211855],[100.5141664,13.7212187],[100.5142018,13.7213066],[100.5142726,13.7213839],[100.514361,13.7214135],[100.514361,13.7215463],[100.5143089,13.7215444],[100.5141949,13.7215683],[100.5141261,13.7215902],[100.5140307,13.7216313],[100.5139,13.7217268],[100.5138459,13.7217707],[100.5138,13.7218146]],"tags":{"addr:district":"บางรัก","addr:postcode":"10500","addr:province":"กรุงเทพมหานคร","addr:subdistrict":"บางรัก","building":"hotel","building:levels":"24"},"source":"https://www.openstreetmap.org/way/1340837007","reference":"https://www.shangri-la.com/en/bangkok/shangrila/rooms-suites/rooms/shangri-la-wing/about-the-shangri-la-wing/","heightSource":"Approximate authored height from storey count and exterior reference","floorSource":"Operator reference"},{"id":"magnolias","osmId":680736465,"name":"Magnolias Waterfront","thai":"แมกโนเลียส์ วอเตอร์ฟร้อนท์","side":1,"center":[100.51049555,13.7275269],"height":317.95,"floors":70,"style":"magnolias","footprint":[[-31.896,-33.34],[-5.748,-38.639],[-0.287,-25.637],[1.454,-23.277],[7.51,-18.657],[25.959,-5.299],[27.484,-3.585],[28.619,-1.636],[31.896,15.941],[11.176,38.172],[-4.937,38.483],[-14.247,38.639],[-16.767,37.481],[-18.595,35.455],[-31.896,-33.34]],"geometry":[[100.5102006,13.7278264],[100.5104424,13.727874],[100.5104929,13.7277572],[100.510509,13.727736],[100.510565,13.7276945],[100.5107356,13.7275745],[100.5107497,13.7275591],[100.5107602,13.7275416],[100.5107905,13.7273837],[100.5105989,13.727184],[100.5104499,13.7271812],[100.5103638,13.7271798],[100.5103405,13.7271902],[100.5103236,13.7272084],[100.5102006,13.7278264]],"tags":{"building":"apartments","building:levels":"70","check_date":"2021-04-22","height":"317.95","name":"Magnolias Waterfront Residences","name:en":"Magnolias Waterfront Residences","name:th":"แมกโนเลียส์ วอเตอร์ฟร้อนท์ เรสซิเดนเซส","tourism":"apartment","wikipedia":"en:Iconsiam"},"source":"https://www.openstreetmap.org/way/680736465","reference":"https://www.iconsiam.com/","heightSource":"OSM height tag","floorSource":"OSM tag"},{"id":"oriental-residences","osmId":680739268,"name":"The Residences at Mandarin Oriental","thai":"เดอะ เรสซิเดนเซส แอท แมนดาริน โอเรียนเต็ล","side":1,"center":[100.51091095000001,13.727850799999999],"height":272.2,"floors":52,"style":"residences","footprint":[[32.296,-27.997],[33.118,-26.249],[29.939,-8.75],[-0.589,26.906],[-2.839,28.787],[-6.148,28.476],[-28.9,6.401],[-30.76,3.963],[-33.118,-5.933],[-12.333,-17.7],[-6.429,-23.366],[30.144,-28.787],[32.296,-27.997]],"geometry":[[100.5112096,13.7281023],[100.5112172,13.7280866],[100.5111878,13.7279294],[100.5109055,13.7276091],[100.5108847,13.7275922],[100.5108541,13.727595],[100.5106437,13.7277933],[100.5106265,13.7278152],[100.5106047,13.7279041],[100.5107969,13.7280098],[100.5108515,13.7280607],[100.5111897,13.7281094],[100.5112096,13.7281023]],"tags":{"building":"apartments","building:levels":"52","height":"272.2","name":"The Residences at Mandarin Oriental","name:en":"The Residences at Mandarin Oriental","name:th":"เดอะ เรสซิเดนเซส แอท แมนดาริน โอเรียนเต็ล"},"source":"https://www.openstreetmap.org/way/680739268","reference":"https://www.mandarinoriental.com/en/residences/at-mandarin-oriental/bangkok","heightSource":"OSM height tag","floorSource":"OSM tag"}]'),Hv={buildings:Bv},_d=Hv.buildings,ao=new Map(_d.map(i=>[i.id,i])),Da=new Map,jr=i=>{const e=Math.sin(i*127.1+311.7)*43758.5453;return e-Math.floor(e)};function kv(i){if(Da.has(i.id))return Da.get(i.id);const e={hilton:["#c3c7bf","#48616c"],sheraton:["#d0b293","#43515a"],peninsula:["#c5b7a0","#344a58"],shangri:["#baa68e","#344c59"],magnolias:["#a0b3ba","#344c60"],residences:["#bbb7a7","#344952"]},[t,n]=e[i.style];let s=null,r=null;if(typeof document<"u"){const a=document.createElement("canvas"),c=document.createElement("canvas");a.width=c.width=512,a.height=c.height=2048;const l=a.getContext("2d"),h=c.getContext("2d"),u=16,d=i.floors,f=512/u,m=2048/d;l.fillStyle=t,l.fillRect(0,0,512,2048),h.fillStyle="#000",h.fillRect(0,0,512,2048);for(let v=0;v<d;v++)for(let g=0;g<u;g++){const p=v*83+g*29+i.osmId%157,M=jr(p),_=g*f+3,x=v*m+m*.1,w=f-6,A=m*.7;l.fillStyle=n,l.fillRect(_,x,w,A),l.fillStyle="#25343c",l.fillRect(_+2,x+2,w-4,A-4),M>.38&&(h.fillStyle=["#f2d2a2","#c6ad8f","#8dabb8","#d39a62"][Math.floor(jr(p+17)*4)],h.globalAlpha=.35+jr(p+91)*.5,h.fillRect(_+2,x+2,w-4,A-4),h.globalAlpha=1,h.fillStyle="#1b1610",h.fillRect(_+w*(.35+jr(p+2)*.2),x+2,2,A-4),h.fillRect(_,x+A*.78,w,A*.22),M>.82&&(h.fillStyle="#38342b",h.fillRect(_+2,x+2,w*.35,A-4))),l.fillStyle=t,l.fillRect(_+w*.49,x,1,A),l.fillStyle="#707778",l.fillRect(g*f,v*m+m*.86,f,Math.max(1,m*.035)),l.fillStyle="#334148",l.fillRect(_,x+A+2,w,m*.12)}s=new Ln(a),r=new Ln(c);for(const v of[s,r])v.colorSpace=gt,v.wrapS=fi,v.anisotropy=4}const o=new wt({color:12896717,map:s,emissiveMap:r,emissive:16772557,emissiveIntensity:1.05,roughness:.54,metalness:.14});return Da.set(i.id,o),o}function Gv(i,e,t){let n=e.footprint.slice(0,-1).map(x=>[...x]);n.reduce((x,w,A)=>{const C=n[(A+1)%n.length];return x+w[0]*C[1]-C[0]*w[1]},0)>0&&n.reverse();const r=e.height-7,o=4.5,a=kv(e),c=r/e.floors,l=Math.min(...n.map(x=>x[0])),h=Math.max(...n.map(x=>x[0])),u=Math.min(...n.map(x=>x[1])),d=Math.max(...n.map(x=>x[1])),f=new $n(n.map(([x,w])=>new se(x,-w))),m=new pi(f);m.rotateX(-Math.PI/2),i.add(m,t.concrete,0,o+r,0);const v=new ur(f,{depth:o,bevelEnabled:!1});v.rotateX(-Math.PI/2),i.add(v,t.oldStone);const g=[];for(let x=0;x<n.length;x++){const w=n[x],A=n[(x+1)%n.length],C=A[0]-w[0],P=A[1]-w[1],b=Math.hypot(C,P);if(b<.1)continue;const S=(w[0]+A[0])/2,L=(w[1]+A[1])/2,U=Math.atan2(-P,C),N=Math.sin(U),X=Math.cos(U),z=new Wt(b,r),q=z.attributes.uv;for(let ee=0;ee<q.count;ee++)q.setX(ee,q.getX(ee)*b/(16*3.25)+x%4/4);i.add(z,a,S,o+r/2,L,[0,U,0]);for(let ee=0;ee<=e.floors;ee++)i.box(b+.18,.34,e.style==="peninsula"?1.05:.65,S+N*.15,o+ee*c,L+X*.15,t.concrete,[0,U,0]);if(b>8){const ee=Math.round(b/(e.style==="hilton"?7:11));for(let W=0;W<=ee;W++){const le=W/ee;i.box(.38,r+.5,.38,w[0]+C*le+N*.2,o+r/2,w[1]+P*le+X*.2,t.plaster)}}N*e.side>.45&&b>12&&g.push({x:S,zz:L,angle:U,nx:N,nz:X,length:b})}const p=(l+h)/2,M=(u+d)/2;if(e.style==="hilton")i.cylinder(14.5,16,4.5,p,o+r+2.25,M,t.glass,40,[1.1,1,.85]),i.cylinder(16.7,16.7,.7,p,o+r+4.85,M,t.white,40,[1.1,1,.85]),i.cylinder(16.2,16.2,.3,p,o+r+.2,M,t.softLight,40,[1.1,1,.85]);else if(e.style==="peninsula")i.box((h-l)*.55,4,(d-u)*.6,p,o+r+2,M,t.plaster),i.cylinder(12,12,.65,p,o+r+4.6,M,t.concrete,32);else if(e.style==="magnolias"||e.style==="residences"){const x=e.style==="magnolias"?12:10;i.cylinder(x*.75,x,6,p,o+r+3,M,t.glass,8,[1.3,1,.8]),i.cylinder(x*.78,x*.78,.7,p,o+r+6.3,M,t.softLight,8,[1.3,1,.8])}else i.box((h-l)*.55,4,(d-u)*.45,p,o+r+2,M,t.roof),i.box((h-l)*.55+1,.5,(d-u)*.45+1,p,o+r+4.1,M,t.plaster);g.sort((x,w)=>w.length-x.length);const _=g[0];if(_){const x={hilton:"Hilton",sheraton:"ROYAL ORCHID SHERATON",peninsula:"THE PENINSULA",shangri:"Shangri-La",magnolias:"MAGNOLIAS",residences:"MANDARIN ORIENTAL"},w=Math.min(_.length*.8,e.style==="sheraton"?29:23),A=e.style==="hilton"?3.7:2.3;i.add(new Wt(w,A),Vv(x[e.style]),_.x+_.nx*.8,o+r-3,_.zz+_.nz*.8,[0,_.angle,0]),i.box(Math.min(_.length,28),.7,4,_.x-_.nx*1.3,5.8,_.zz-_.nz*1.3,t.plaster,[0,_.angle,0])}i.kind=e.id}const Ia=new Map;function Vv(i){if(Ia.has(i))return Ia.get(i);let e=null;if(typeof document<"u"){const n=document.createElement("canvas");n.width=1024,n.height=160;const s=n.getContext("2d");s.fillStyle="#161c21",s.fillRect(0,0,1024,160),s.fillStyle="#eee0bb",s.font="500 92px Georgia,serif",s.textAlign="center",s.textBaseline="middle",s.fillText(i,512,80,940),e=new Ln(n),e.colorSpace=gt,e.anisotropy=4}const t=new wt({map:e,emissiveMap:e,color:16777215,emissive:16770479,emissiveIntensity:.9,roughness:.65});return Ia.set(i,t),t}const Yn=new Map,Ua=new Map,nu=new R,iu=new $t,su=new Vt,ru=new R(1,1,1),ou=new Ze,ut=(i,e,t={})=>(Yn.has(i)||Yn.set(i,new wt({color:e,roughness:.78,...t})),Yn.get(i)),$={stone:ut("stone","#d8cbb2"),porcelain:ut("porcelain","#ece1c8"),plaster:ut("plaster","#ddd2bd"),white:ut("white","#e0ddcc"),concrete:ut("concrete","#b7b8b4"),oldStone:ut("oldStone","#a18b72"),gold:ut("gold","#dcb358",{metalness:.48,roughness:.32,emissive:"#8f571b",emissiveIntensity:.2}),warm:ut("warm","#fff0c4",{emissive:"#ffd48a",emissiveIntensity:1.8,roughness:.4}),softLight:ut("softLight","#dfc28c",{emissive:"#ffc677",emissiveIntensity:.8}),tile:ut("tile","#973c27"),tileGreen:ut("tileGreen","#296657"),red:ut("red","#7f2920"),teal:ut("teal","#347b72"),dark:ut("dark","#171e24"),bronze:ut("bronze","#625448",{metalness:.55,roughness:.35}),roof:ut("roof","#473f37"),redBrick:ut("redBrick","#a77963"),glass:ut("glass","#33464c",{roughness:.27,metalness:.4}),window:ut("window","#ad9c72",{emissive:"#ddac59",emissiveIntensity:.55}),stained:ut("stained","#ccb076",{emissive:"#d18b47",emissiveIntensity:.8})};function zl(i){const e=Math.sin(i*127.1+311.7)*43758.5453;return e-Math.floor(e)}function Sc(i,e,t){if(typeof document>"u")return null;const n=document.createElement("canvas");n.width=i,n.height=e,t(n.getContext("2d"),i,e);const s=new Ln(n);return s.colorSpace=gt,s.anisotropy=4,s}function Gi(i,e=24,t=60,n=!1){if(Yn.has(i))return Yn.get(i);const s=Sc(768,1536,(o,a,c)=>{o.fillStyle=n?"#202421":"#15232a",o.fillRect(0,0,a,c);const l=a/e,h=c/t;for(let u=0;u<t;u++)for(let d=0;d<e;d++){const f=zl(u*91+d*53+i.length*37);o.fillStyle=f>.7?["#c29b60","#aa8b54","#c6b588","#736044"][Math.floor(zl(u*13+d)*4)]:f>.38?"#1b262c":"#0d151c",o.fillRect(d*l+2,u*h+2,l-4,h-4),f>.77&&(o.fillStyle="#414238",o.fillRect(d*l+l*.6,u*h+2,l*.23,h-4)),o.fillStyle="#283236",o.fillRect(d*l,u*h,1.3,h)}});return ut(i,"#aab6b6",{map:s,emissiveMap:s,emissive:"#eee6ca",emissiveIntensity:.65,metalness:.3,roughness:.42})}function Wv(i,e="#fff1c0",t="#29261e"){const n=`sign:${i}:${e}`;if(Yn.has(n))return Yn.get(n);const s=Sc(1024,160,(r,o,a)=>{r.fillStyle=t,r.fillRect(0,0,o,a),r.fillStyle=e,r.textAlign="center",r.textBaseline="middle",r.font="500 100px Georgia, serif",r.fillText(i,o/2,a/2+3,o-65)});return ut(n,"#ffffff",{map:s,emissiveMap:s,emissive:e,emissiveIntensity:.85,roughness:.55})}class Xv{constructor(e){this.kind=e,this.parts=new Map}add(e,t,n=0,s=0,r=0,o=[0,0,0],a=[1,1,1]){if(nu.set(n,s,r),iu.set(...o),su.setFromEuler(iu),ru.set(...a),ou.compose(nu,su,ru),e.applyMatrix4(ou),e.index){const c=e;e=c.toNonIndexed(),c.dispose()}e.deleteAttribute("tangent"),this.parts.has(t)||this.parts.set(t,[]),this.parts.get(t).push(e)}box(e,t,n,s,r,o,a=$.stone,c=[0,0,0]){this.add(new an(e,t,n),a,s,r,o,c)}cylinder(e,t,n,s,r,o,a=$.stone,c=16,l=[1,1,1]){this.add(new pn(e,t,n,c),a,s,r,o,[0,0,0],l)}sphere(e,t,n,s,r=$.gold,o=[1,1,1]){this.add(new Zt(e,16,10),r,t,n,s,[0,0,0],o)}line(e,t,n=.12,s=$.gold,r=6){const o=new R(...t).sub(new R(...e)),a=new pn(n,n,o.length(),r);a.applyQuaternion(new Vt().setFromUnitVectors(new R(0,1,0),o.normalize())),this.add(a,s,(e[0]+t[0])/2,(e[1]+t[1])/2,(e[2]+t[2])/2)}sign(e,t,n,s,r,o,a,c){this.add(new Wt(t,n),Wv(e,a,c),s,r,o)}finish(){const e=new Ht;e.name=`landmark:${this.kind}`;for(const[t,n]of this.parts){const s=Ps(n,!1);for(const o of n)o.dispose();s.computeBoundingSphere();const r=new at(s,t);r.castShadow=!0,r.receiveShadow=!0,e.add(r)}return e.userData.landmark=this.kind,e}}function Md(i,e,t,n,s,r,o,a=1,c=0){for(let l=0;l<o;l++){const h=(l+1)*s/o;i.box(n,h,r/o+.03,e,c+h/2,t+a*(r/2-(l+.5)*r/o),$.stone)}}function Ks(i,e,t,n,s,r,o,a=$.tile){const c=Math.atan2(o,s/2),l=Math.hypot(s/2,o);for(const h of[-1,1]){i.box(l+.25,.45,r,e+h*s/4,t+o/2,n,a,[0,0,-h*c]);for(const u of[-1,1])i.line([e,t+o+.2,n+u*r/2],[e+h*s/2,t+.1,n+u*r/2],.16,$.gold);i.line([e+h*s/2,t,n-r/2],[e+h*s/2,t,n+r/2],.12,$.gold)}i.line([e,t+o+.25,n-r/2],[e,t+o+.25,n+r/2],.2,$.gold);for(const h of[-1,1]){const u=new $n;u.moveTo(-s/2+.7,0),u.lineTo(s/2-.7,0),u.lineTo(0,o-.4),u.closePath(),i.add(new pi(u),$.red,e,t,n+h*(r/2-.15),[0,h===-1?Math.PI:0,0]),i.line([e,t+o,n+h*r/2],[e,t+o+2.3,n+h*(r/2+.55)],.18,$.gold),i.line([e,t+o+2.3,n+h*(r/2+.55)],[e,t+o+3,n+h*(r/2+1.6)],.09,$.gold),i.sphere(.65,e,t+o*.49,n+h*(r/2+.12),$.gold,[1,1,.15])}}function ws(i,e,t,n=21,s=38,r=1,o=$.tile){const a=n*r,c=s*r,l=8*r;i.box(a+4,1.1,c+4,e,.55,t,$.oldStone),i.box(a,l,c,e,l/2+1,t,$.plaster);for(const h of[-1,1])for(let u=-c/2+4;u<c/2;u+=5*r)i.box(.4,4.6*r,1.9*r,e+h*(a/2+.08),l/2+1.3,t+u,$.gold),i.box(.45,3.9*r,1.25*r,e+h*(a/2+.1),l/2+1.3,t+u,$.dark);for(const h of[-1,1])for(let u=-c/2+1;u<=c/2;u+=5*r)i.cylinder(.26*r,.4*r,l+.2,e+h*(a/2+1.25),l/2+1,t+u,$.porcelain,8),i.box(1,.4,1,e+h*(a/2+1.25),l+1,t+u,$.gold);i.box(a*.22,l*.72,.25,e,1+l*.36,t+c/2+.15,$.gold),i.box(a*.17,l*.63,.28,e,1+l*.315,t+c/2+.2,$.dark),Ks(i,e,l+1,t,a+5*r,c+6*r,6.5*r,o),Ks(i,e,l+4*r,t,a+.6*r,c-2*r,6.4*r,o),Ks(i,e,l+7*r,t,a-4*r,c-10*r,5.6*r,o);for(const h of[-1,1])i.box(.18,.22,c+4,e+h*(a/2+1.5),1.2,t,$.warm)}function qv(){if(Yn.has("arun-porcelain"))return Yn.get("arun-porcelain");const i=Sc(512,512,(e,t,n)=>{e.fillStyle="#cebb94",e.fillRect(0,0,t,n);for(let s=0;s<12;s++)for(let r=0;r<12;r++){const o=(r+.5+s%2*.25)*t/12,a=(s+.5)*n/12,c=zl(s*41+r*7);e.fillStyle=c<.3?"#75847a":c<.65?"#997763":"#e4cf9b";for(let l=0;l<6;l++){const h=l*Math.PI/3;e.beginPath(),e.ellipse(o+Math.sin(h)*6,a+Math.cos(h)*6,2.7,4.5,-h,0,Math.PI*2),e.fill()}e.fillStyle="#dfd0ad",e.beginPath(),e.arc(o,a,3,0,Math.PI*2),e.fill(),e.fillStyle="#a9926d",e.fillRect(o-16,a+17,25,1.5)}});return i&&(i.wrapS=i.wrapT=fi,i.repeat.set(2,3)),ut("arun-porcelain","#f4d9ad",{map:i,bumpMap:i,bumpScale:.15,roughness:.86,emissive:"#bb791f",emissiveIntensity:.22})}function Yv(i,e,t,n,s,r,o){const a=new $n,c=[[1,.52],[.76,.52],[.76,.76],[.52,.76],[.52,1]];let l=!0;for(let u=0;u<4;u++)for(const[d,f]of c){const m=u*Math.PI/2,v=(d*Math.cos(m)-f*Math.sin(m))*r,g=(d*Math.sin(m)+f*Math.cos(m))*r;l?(a.moveTo(v,g),l=!1):a.lineTo(v,g)}a.closePath();const h=new ur(a,{depth:s,bevelEnabled:!1,steps:1});h.rotateX(-Math.PI/2),i.add(h,o,e,n,t)}function au(i,e,t,n=76,s=15){const r=n/76,o=s/15.2,a=qv(),c=ut("arun-trim","#d8b47d",{roughness:.8,emissive:"#b57b27",emissiveIntensity:.19}),l=ut("arun-recess","#7d765b",{roughness:.9,emissive:"#76531f",emissiveIntensity:.12}),h=ut("arun-jade","#577768",{roughness:.78,emissive:"#806b25",emissiveIntensity:.14}),u=ut("arun-rose","#946e58",{roughness:.78,emissive:"#a16a23",emissiveIntensity:.14}),d=(_,x,w,A)=>Yv(i,e,t,_*r,x*r,w*o,A);d(0,1.3,17.8,c),d(1.3,.55,18.1,a);for(const[_,x,w]of[[1.85,5.5,16.5],[8.2,6,13.6],[15,6.7,11.3],[22.6,6.4,9.4]]){d(_,x,w,a),d(_+.15,.42,w+.3,l),d(_+.65,.26,w+.44,c),d(_+x-.9,.3,w+.34,l),d(_+x-.55,.55,w+.78,a),d(_+x,.45,w+1,c);for(let C=_+1.35;C<_+x-1;C+=1.15)d(C,.17,w+.1,c);const A=n>40?6:3;for(let C=0;C<4;C++)for(let P=0;P<A;P++){const b=C*Math.PI/2,S=((P+.5)/A-.5)*w*1.02*o,L=e+Math.sin(b)*(w*o+.17*r)+Math.cos(b)*S,U=t+Math.cos(b)*(w*o+.17*r)-Math.sin(b)*S,N=(_+x*.52)*r;i.add(new Pi(.6*r),P%2?a:h,L,N,U,[0,b,0],[1,1.6,.48]),i.add(new Zt(.27*r,6,4),c,L,N+.9*r,U,[0,0,0],[1,1.12,1]);for(const X of[-1,1])i.line([L+Math.cos(b)*X*.35*r,N+.15*r,U-Math.sin(b)*X*.35*r],[L+Math.cos(b)*X*.6*r,N+1.15*r,U-Math.sin(b)*X*.6*r],.12*r,a,5)}}for(const _ of[-1,1]){Md(i,e,t+_*15.2*o,3.8*o,21.7*r,15*o,26,_);for(let x=0;x<26;x++){const w=(x+1)*21.7*r/26,A=e+_*(22.7-(x+.5)*15/26)*o;i.box(15*o/26+.02,w,3.8*o,A,w/2,t,$.stone)}for(const x of[-1,1])i.line([e+x*2.25*o,.9*r,t+_*22.7*o],[e+x*2.25*o,22.7*r,t+_*7.7*o],.29*r,c,6),i.line([e+_*22.7*o,.9*r,t+x*2.25*o],[e+_*7.7*o,22.7*r,t+x*2.25*o],.29*r,c,6)}d(29.45,5.8,8.55,a);for(let _=0;_<4;_++){const x=_*Math.PI/2,w=e+Math.sin(x)*8.65*o,A=t+Math.cos(x)*8.65*o;i.add(new pi(yd(3.8*o,5.6*r,!0),8),l,w,28.6*r,A,[0,x,0]);for(const C of[-1,1])i.cylinder(.35*o,.45*o,6.1*r,w+Math.cos(x)*C*2.25*o,31.65*r,A-Math.sin(x)*C*2.25*o,c,8);i.box(5.5*o,.75*r,1.8*o,w,35.2*r,A,a,[0,x,0]),i.cylinder(.5*o,2.65*o,3.4*r,w,37.25*r,A,a,8),i.cylinder(0,.64*o,2*r,w,39.95*r,A,c,8),i.add(new Pi(.85*r),c,w,30.2*r,A,[0,x,0],[1.1,1.45,.8])}const f=[[33,7.5],[35,8.25],[38,8.8],[41,8.8],[44,8.4],[47,7.75],[50,6.9],[53,6],[56,5.05],[59,4.12],[62,3.18],[65,2.3],[68,1.48],[70,.88],[71.2,.53]],v=new pc(f.map(([_,x])=>new se(x*o,_*r))).getPoints(54),g=new Lo(v,32),p=g.attributes.position;for(let _=0;_<p.count;_++){const x=p.getX(_),w=p.getZ(_),A=Math.atan2(x,w),C=1+.035*Math.cos(A*8)-.018*Math.cos(A*16);p.setXYZ(_,x*C,p.getY(_),w*C)}g.computeVertexNormals(),i.add(g,a,e,0,t);const M=_=>{for(let x=1;x<f.length;x++)if(_<=f[x][0]){const[w,A]=f[x-1],[C,P]=f[x];return(A+(P-A)*(_-w)/(C-w))*o}return .53*o};for(let _=34;_<70.8;_+=1.05){const x=M(_),w=.16*o+x*.025;i.cylinder(x+w,x+w*.6,.23*r,e,_*r,t,c,16),i.cylinder(x+.035*o,x+.035*o,.19*r,e,(_-.25)*r,t,_%3<1?h:l,16);for(let A=0;A<8;A++){const C=A*Math.PI/4+Math.PI/8,P=x+w*.6;i.add(new Pi(.52*r),a,e+Math.sin(C)*P,(_+.52)*r,t+Math.cos(C)*P,[0,C,0],[.58,1.25,.65]),_<64&&i.add(new Pi(.19*r),A%2?h:u,e+Math.sin(C)*(P+.15*r),(_+.25)*r,t+Math.cos(C)*(P+.15*r),[0,C,Math.PI/4],[1,1,.5])}}i.cylinder(.075*r,.2*r,5.9*r,e,73.05*r,t,$.gold,8);for(let _=0;_<7;_++)i.cylinder((.76-_*.092)*o,(.76-_*.092)*o,.14*r,e,(71.25+_*.53)*r,t,$.gold,12);for(const _ of[-1,1])i.line([e,75.1*r,t],[e+_*.36*o,75.8*r,t],.075*r,$.gold,5)}function yo(i,e,t,n,s,r=$.gold){i.box(s*2.2,1.4,s*2.2,e,.7,t,$.stone);for(let o=0;o<4;o++)i.cylinder(s*(1-o*.12),s*(1.07-o*.12),1.15,e,1.4+o*1.1,t,r,16);i.sphere(s*.69,e,n*.3,t,r,[1,1.5,1]),i.cylinder(s*.13,s*.51,n*.3,e,n*.57,t,r,16);for(let o=0;o<9;o++){const a=s*(.32-o*.027);i.cylinder(a,a+.12,n*.018,e,n*(.63+o*.026),t,r,16)}i.cylinder(0,s*.13,n*.19,e,n*.905,t,r,12)}function bc(i,e,t,n=0){for(const s of[-1,1])i.box(.65,1.8,t,s*e/2,.9,n,$.plaster),i.box(e,1.8,.65,0,.9,n+s*t/2,$.plaster);for(let s=-e/2;s<=e/2;s+=6)i.box(.85,2.25,.85,s,1.12,n+t/2,$.plaster),i.cylinder(0,.62,.8,s,2.65,n+t/2,$.gold,4)}function jv(i){i.box(100,.6,87,0,.3,-7,$.oldStone),au(i,0,1,76,15.2);for(const e of[-22,22])for(const t of[-20,22])au(i,e,t,27,6.4);ws(i,-37,-18,15,33,.75,$.tileGreen),ws(i,37,-18,15,33,.75,$.tile),bc(i,101,88,-7)}function Kv(i){i.box(145,.5,108,0,.25,-7,$.oldStone),ws(i,-18,5,24,48,1.05),ws(i,43,-14,19,36,.9,$.tileGreen);for(const[e,t,n]of[[-58,-28,$.tileGreen],[-41,-28,$.gold],[-58,-46,$.teal],[-41,-46,$.tile]])yo(i,e,t,42,7.8,n);for(let e=-61;e<63;e+=13)yo(i,e,38,13,2.6,e%2?$.tileGreen:$.gold);for(const e of[-1,1]){const t=-7+e*47;i.box(130,4.5,5,0,2.5,t,$.plaster);for(const n of[-1,1])i.box(132,.38,Math.hypot(3.5,2),0,5.5,t+n*1.75,$.tileGreen,[n*Math.atan2(2,3.5),0,0]);i.line([-66,6.55,t],[66,6.55,t],.15,$.gold)}bc(i,146,110,-7)}function Bl(i,e,t,n,s,r,o,a,c=!1){const l=Gi(a,Math.max(12,Math.floor(n/2)),o);i.box(n,r,s,e,r/2,t,l);for(const h of[-1,1])for(const u of[-1,1])i.box(1.1,r+1,1.1,e+h*n/2,(r+1)/2,t+u*s/2,$.white);for(let h=0;h<=o;h++){const u=Math.max(.2,h*r/o);i.box(n+1.5,.32,s+1.5,e,u,t,$.concrete)}i.box(n+2,1.8,s+2,e,r+.5,t,$.white),c&&(i.box(n*.73,9,s*.72,e,r+5.5,t,$.dark),i.box(n*.75,.55,s*.74,e,r+10,t,$.softLight))}function Zv(i){i.box(226,3,86,0,1.5,-3,$.stone);const e=Gi("icon-mall-glass",42,2,!0);for(let t=0;t<4;t++){const n=218-t*12,s=78-t*10,r=4+t*7;i.box(n,7,s,0,r+3.5,-t*4,e),i.box(n+4,.85,s+3,0,r+7.1,-t*4,$.white),i.box(n+4,.16,.18,0,r+6.55,-t*4+s/2+1.55,$.softLight)}for(let t=-104;t<=104;t+=5){const n=24+7*Math.sin((t+110)*.035);i.box(1.15,n,1.1,t,4+n/2,38.2,$.gold,[0,t%10?.35:-.35,0])}for(const t of[-68,0,68])i.cylinder(12,18,11,t,31,-5,$.glass,4,[1.5,1,1]),i.cylinder(12.4,12.4,.6,t,36.5,-5,$.gold,4,[1.5,1,1]);i.box(70,6.5,1,0,31.5,39.4,$.dark),i.sign("ICONSIAM",64,6,0,31.5,40,"#fff0c2","#28231b");for(let t=-106;t<112;t+=8)i.cylinder(.24,.35,5,t,2.5,47,$.bronze,8),i.sphere(.48,t,5.2,47,$.warm);Md(i,0,47,200,3,9,8,1)}function lu(i,e,t,n,s,r,o,a,c=0){const l=Gi(a,56,o);i.cylinder(1,1,r,e,r/2,t,l,28,[n/2,1,s/2]);for(let h=0;h<=o;h++){const u=Math.max(.23,h*r/o),d=Math.sin(h/o*Math.PI)*1.3;i.cylinder(1,1,.45,e+Math.sin(h/o*Math.PI)*c,u,t,$.white,28,[n/2+1.2+d,1,s/2+1])}for(const h of[-1,1])i.box(1.35,r+2,1.8,e+h*n*.43,(r+2)/2,t+s*.22,$.white);i.cylinder(.85,1,7,e,r+3.5,t,$.white,28,[n/2,1,s/2]),i.cylinder(.855,.855,.4,e,r+7.1,t,$.softLight,28,[n/2,1,s/2])}function Jv(i){i.box(138,7,69,0,3.5,0,$.plaster),i.box(136,5,66,0,9.5,0,Gi("river-podium",36,2,!0)),i.box(139,.8,70,0,12.4,0,$.white),lu(i,-34,-10,43,32,221,71,"river-tower-south",1.2),lu(i,37,-15,39,29,152,47,"river-tower-north",.7),i.box(29,3.5,.4,0,7.8,34.7,$.dark),i.sign("THE RIVER",27,3,0,7.8,35,"#e6dbc5","#28251f");for(let e=-63;e<=63;e+=9)i.box(.6,5,.6,e,3,35.2,$.gold),i.box(5.7,.15,.3,e,6,35.3,$.softLight)}function Qv(i){Bl(i,0,-7,74,49,171,48,"state-main"),Bl(i,0,-9,61,43,198,56,"state-upper"),i.box(53,19,39,0,207,-9,Gi("state-crown",20,5,!0));for(const e of[199,207,216])i.box(59,1.5,43,0,e,-9,$.white);for(let e=-24;e<=24;e+=8)i.cylinder(1.1,1.1,15,e,222.5,9,$.plaster,12),i.box(2.5,1,2.5,e,230,9,$.white);i.box(58,1.4,41,0,231,-8,$.white),i.cylinder(11,11,5,3,233.5,-5,$.plaster,32),i.add(new Zt(11.8,32,16,0,Math.PI*2,0,Math.PI/2),$.gold,3,236,-5,[0,0,0],[1,.78,1]),i.cylinder(.35,.8,3.4,3,246,-5,$.gold,8);for(let e=0;e<12;e++){const t=e*Math.PI/6;i.box(.5,4,.6,3+Math.sin(t)*10.9,233.8,-5+Math.cos(t)*10.9,$.gold)}i.box(74,1,51,0,172,-7,$.softLight),i.sign("LEBUA",18,3.6,-17,223,13,"#efd3a3","#302a25")}function yd(i,e,t=!1){const n=new $n,s=i/2;return n.moveTo(-s,0),n.lineTo(s,0),n.lineTo(s,e-s),t?(n.quadraticCurveTo(s*.7,e-s*.25,0,e),n.quadraticCurveTo(-s*.7,e-s*.25,-s,e-s)):n.absarc(0,e-s,s,0,Math.PI,!1),n.lineTo(-s,0),n.closePath(),n}function Ii(i,e,t,n,s,r,o,a=!1){i.add(new pi(yd(e,t,a),10),o,n,s,r)}function Sd(i,e,t,n,s=1){i.box(.23*s,2.2*s,.25*s,e,t,n,$.gold),i.box(1.25*s,.23*s,.25*s,e,t+.4*s,n,$.gold)}function $v(i){i.box(34,.65,55,0,.32,-5,$.stone),i.box(20,11,38,0,5.85,-7,$.redBrick),i.box(28,8,14,0,4.3,-9,$.redBrick),Ks(i,0,11.1,-8,22,39,4,$.roof),i.box(24,15,4,0,7.8,14,$.plaster);for(const e of[-1,1])i.box(1.1,16,1.3,e*10,8,16.3,$.white);Ii(i,5.5,8.5,0,.6,16.2,$.dark),Ii(i,3,5.8,-7,5,16.25,$.stained),Ii(i,3,5.8,7,5,16.25,$.stained),i.cylinder(6.6,7.4,7,0,18.5,8,$.plaster,16);for(let e=0;e<10;e++){const t=e*Math.PI/5;i.cylinder(.28,.38,6.7,Math.sin(t)*6.9,18.5,8+Math.cos(t)*6.9,$.white,8)}i.add(new Zt(7.3,24,14,0,Math.PI*2,0,Math.PI/2),$.redBrick,0,22,8,[0,0,0],[1,1.15,1]),i.cylinder(1.7,1.7,3,0,31.1,8,$.plaster,12),i.sphere(1.8,0,33,8,$.redBrick,[1,.6,1]),Sd(i,0,35.1,8,.9);for(const e of[1,11.5,15.2])i.box(25,.65,4.8,0,e,14,$.white);i.sign("SANTA CRUZ",13,1.4,0,12.7,16.45,"#efd5a1","#b7a896")}function e2(i){i.box(28,.8,48,0,.4,-7,$.stone),i.box(19,14,37,0,7.4,-7,$.plaster),Ks(i,0,14.5,-7,22,40,8,$.roof),i.box(8,27,7,0,13.5,14,$.plaster);for(const e of[-1,1]){i.box(.85,28,1.1,e*4,14,17.9,$.white),i.box(1.7,16,2.5,e*9.7,8,11,$.white),i.cylinder(0,1.2,5,e*9.7,18.5,11,$.roof,4);for(let t=-23;t<10;t+=7)i.box(1.2,13,1.7,e*9.8,6.5,t,$.white)}Ii(i,4.2,7.8,0,.8,17.65,$.dark,!0),Ii(i,3.1,5.8,0,18.5,17.65,$.stained,!0);for(const e of[-1,1])Ii(i,3.1,7,e*6.5,5.6,11.65,$.stained,!0);i.add(new Dn(1.9,.22,8,24),$.gold,0,13.5,17.7),i.add(new cc(1.65,24),$.stained,0,13.5,17.72);for(let e=0;e<8;e++){const t=e*Math.PI/4;i.line([0,13.5,17.75],[Math.sin(t)*1.6,13.5+Math.cos(t)*1.6,17.75],.06,$.white)}i.box(8.6,.85,7.6,0,27,14,$.white),i.cylinder(0,4.9,15,0,35,14,$.roof,4),Sd(i,0,43.5,14,.8);for(const e of[-4,4])for(const t of[10.5,17.5])i.cylinder(0,.55,3.4,e,29,t,$.roof,4)}function t2(i){i.box(112,19,42,0,9.5,0,Gi("river-city",28,4,!0));for(let e=0;e<=4;e++)i.box(115,1,45,0,e*4.6+.6,0,$.white);for(let e=-52;e<56;e+=8)i.box(1.1,20.5,1.8,e,10.25,22,$.plaster);i.box(48,6.5,2,0,18.7,23,$.plaster),i.sign("RIVER CITY BANGKOK",45,3.9,0,18.8,24.1,"#d9bd89","#44403a"),i.box(118,1.1,13,0,5,29,$.white);for(let e=-53;e<=53;e+=13)i.cylinder(.5,.65,4.8,e,2.4,33,$.plaster,10);for(let e=-48;e<55;e+=16)i.box(11,.2,.2,e,4.7,35.6,$.softLight)}function n2(i){const e=Gi("oriental-hotel",30,15,!0);i.box(98,56,31,-14,28,-21,e);for(let t=0;t<=16;t++)i.box(100,.62,33,-14,Math.max(.32,t*3.5),-21,$.plaster);for(let t=-59;t<40;t+=9)i.box(1.1,57,33,t,28.5,-21,$.plaster);Bl(i,49,-9,24,50,42,12,"oriental-wing"),i.box(65,9.8,24,-14,4.9,15,$.white),i.box(69,1.1,27,-14,10.2,15,$.white);for(const t of[1.1,5.8])for(let n=-41;n<16;n+=6)Ii(i,4.2,3.7,n,t,27.08,$.window),i.cylinder(.22,.22,4,n-2.6,t+1.8,27.4,$.white,8);i.box(65,.4,1,-14,5.6,27.5,$.white),i.sign("MANDARIN ORIENTAL",40,2.4,-14,11.6,27.2,"#f0dab0","#514f40");for(let t=-39;t<20;t+=10)i.cylinder(0,3.4,1.5,t,3.2,34,$.plaster,12),i.cylinder(.13,.13,2.7,t,1.35,34,$.bronze,6),i.sphere(.25,t,2.5,34,$.warm)}function i2(i){i.box(94,.65,88,0,.32,-4,$.oldStone),ws(i,-6,-7,30,40,1.3),ws(i,35,-19,14,25,.68,$.tileGreen),yo(i,-36,18,25,5,$.porcelain),yo(i,30,24,18,4,$.gold),bc(i,95,89,-4)}const cu={"wat-arun":jv,"wat-pho":Kv,"icon-siam":Zv,"the-river":Jv,"state-tower":Qv,"santa-cruz":$v,"holy-rosary":e2,"river-city":t2,"mandarin-oriental":n2,"wat-kalayanamit":i2};function s2(i){if(!cu[i]&&!ao.has(i))throw new Error(`Unknown river landmark: ${i}`);if(!Ua.has(i)){const e=new Xv(i);ao.has(i)?Gv(e,ao.get(i),$):cu[i](e),Ua.set(i,e.finish())}return Ua.get(i).clone(!0)}const r2=i=>()=>(i=Math.imul(i,1664525)+1013904223>>>0,i/4294967296),Ft=r2(81623),Yt=(i,e=0,t=0)=>new wt({color:i,emissive:e,emissiveIntensity:t,roughness:.72});class Kr{constructor(e){this.parts=new Map,this.transform=new ft,this.lightTarget=e,this.lightFixtures=[]}add(e,t,n,s,r,o=1,a=1,c=1,l=0){const h=this.transform;if(h.position.set(n,s,r),h.rotation.set(0,l,0),h.scale.set(o,a,c),h.updateMatrix(),this.lightTarget&&xd(this.lightFixtures,e,t,h.matrix))return;const u=e.clone().applyMatrix4(h.matrix);this.parts.has(t)||this.parts.set(t,[]),this.parts.get(t).push(u)}box(e,t,n,s,r,o,a,c=0){this.add(lo,e,t,n,s,r,o,a,c)}finish(e){for(const[t,n]of this.parts){const s=Ps(n);if(n.forEach(r=>r.dispose()),s){const r=new at(s,t);e.add(r)}}this.parts.clear(),this.lightTarget&&(e.updateWorldMatrix(!0,!1),this.lightTarget.push(...Pv(this.lightFixtures,e.matrixWorld)),this.lightFixtures=[])}}const lo=new an(1,1,1);function hu(i,e=20,t=4,n="#13283c",s="#ffde9b"){const r=document.createElement("canvas");r.width=1024,r.height=256;const o=r.getContext("2d");o.fillStyle=n,o.fillRect(0,0,1024,256),o.fillStyle=s,o.font="bold 110px Arial",o.textAlign="center",o.textBaseline="middle",o.fillText(i,512,128,970);const a=new Ln(r);return a.colorSpace=gt,new at(new Wt(e,t),new dn({map:a,side:Bt,toneMapped:!1}))}function Na(i,e=12){const t=document.createElement("canvas"),n=document.createElement("canvas");t.width=n.width=384,t.height=n.height=768;const s=t.getContext("2d"),r=n.getContext("2d");s.fillStyle=["#32353a","#3b3832","#333c3e","#2a3138","#52463a"][i%5],s.fillRect(0,0,384,768),r.fillStyle="#000",r.fillRect(0,0,384,768);const o=e,a=i%2?8:6,c=384/a,l=768/o;for(let d=0;d<o;d++)for(let f=0;f<a;f++){const m=f*c+6,v=d*l+5,g=Ft()>.64,p=c-12,M=l*.68;if(s.fillStyle="#0b151b",s.fillRect(m,v,p,M),g){const _=["#d7a764","#e1be89","#a2b7b4","#d6cbaf"][Math.floor(Ft()*4)];r.fillStyle=_,r.globalAlpha=.25+Ft()*.65,r.fillRect(m,v,p,M),r.globalAlpha=1,r.fillStyle="#050708",r.fillRect(m+p*(.25+Ft()*.4),v,p*.17,M),r.fillRect(m,v+M*.82,p,M*.18),Ft()>.55&&(r.fillStyle="#17150e",r.fillRect(m+4,v+M*.55,p*.35,M*.35))}s.fillStyle="#52524e",s.fillRect(m-1,v+M,p+3,2),r.fillStyle="#000",r.fillRect(m+p*.5,v,2,M),s.fillStyle="#202927",s.fillRect(f*c,d*l,384,2)}const h=new Ln(t),u=new Ln(n);return h.colorSpace=u.colorSpace=gt,h.anisotropy=u.anisotropy=4,new wt({map:h,emissiveMap:u,emissive:16774108,emissiveIntensity:1.9,roughness:.64,color:8885917})}const o2=[["wat-arun","Wat Arun",100.488905,13.7436982,1],["wat-pho","Wat Pho",100.4916918,13.7465039,-1],["wat-kalayanamit","Wat Kalayanamit",100.4912748,13.740062,1],["santa-cruz","Santa Cruz",100.4937728,13.7389447,1],["holy-rosary","Holy Rosary",100.5134793,13.7312611,-1],["river-city","River City",100.5132623,13.7303492,-1],["icon-siam","ICONSIAM",100.5103251,13.7268256,1],["mandarin-oriental","Mandarin Oriental",100.5143499,13.7239264,-1],["the-river","The River",100.5105286,13.7213726,1],["state-tower","State Tower",100.516897,13.7215374,-1],..._d.map(i=>[i.id,i.name,...i.center,i.side])];function a2(i,e,t,n){const s=[],r=Yt(13875339,16757582,.3),o=Yt(5330264),a=Yt(2306619),c=new dn({color:new Fe(16763779).multiplyScalar(2.5)}),l=new Ht;i.add(l);const h=[];for(let O=0;O<e.length;O+=20)h.push(e.sample(O));h.push(e.sample(e.length));const u=O=>h.map(H=>new se(H.x+H.nx*O*H.width/2,-(H.z+H.nz*O*H.width/2))),d=u(1),f=u(-1),m=[...d,...f.reverse()];for(const O of[d,f]){const H=O===d?0:O.length-1,V=O===d?O.length-1:0,G=e.sample(0),ne=e.sample(e.length);O[H].x+=Math.sin(G.heading)*1600,O[H].y-=Math.cos(G.heading)*1600,O[V].x-=Math.sin(ne.heading)*1600,O[V].y+=Math.cos(ne.heading)*1600}const v=new $n([new se(-5500,-5500),new se(5500,-5500),new se(5500,5500),new se(-5500,5500)]);v.holes.push(new Dl(m));const g=new ur(v,{depth:4,bevelEnabled:!1,steps:1});g.rotateX(-Math.PI/2);const p=new at(g,Yt(2436654));p.position.y=-1,i.add(p);const M=Rv(i,n),_=M.water,x=[];for(const[O,H,V,G,ne]of o2){const ie=_o(V,G),J=e.nearest(ie.x,ie.z),ce=ao.has(O),ue=s2(O),E=new Zn().setFromObject(ue);let y=ce?J.offset*ne:Math.max(J.offset*ne,J.width/2+E.max.z+12),I=e.sample(J.distance,ne*y);ue.rotation.y=ce?0:Math.atan2(-J.nx*ne,-J.nz*ne);for(let te=0;te<12;te++){ue.position.set(I.x,3,I.z),ue.updateMatrixWorld();let j=!1;for(const Ae of[E.min.x,E.max.x])for(const pe of[E.min.z,E.max.z]){const Ee=ue.localToWorld(new R(Ae,0,pe)),Re=e.nearest(Ee.x,Ee.z);Math.abs(Re.offset)<Re.width/2+4&&(j=!0)}if(!j)break;y+=15,I=e.sample(J.distance,ne*y)}if(l.add(ue),O==="wat-arun"||O==="wat-kalayanamit"){const te=new gm(16767392,O==="wat-arun"?5500:3500,210,.78,.75,2);te.position.set(I.x-J.nx*ne*75,7,I.z-J.nz*ne*75),te.target.position.set(I.x,28,I.z),i.add(te,te.target)}const Y=new Zn().setFromObject(ue);x.push({kind:O,name:H,x:I.x,z:I.z,distance:J.distance,bounds:Y,side:ne,reserveLength:ce?Math.hypot(E.max.x-E.min.x,E.max.z-E.min.z)/2+40:(E.max.x-E.min.x)/2+22,inland:ce?y+Math.hypot(E.max.x-E.min.x,E.max.z-E.min.z)/2+70:y-E.min.z+20})}const w=Array.from({length:5},(O,H)=>[Na(H,4),Na(H,10),Na(H,22)]),A=new fm().load("/longtail/textures/riverside-shophouses.png");A.colorSpace=gt,A.anisotropy=4;const C=new wt({map:A,color:10922146,emissiveMap:A,emissive:16767392,emissiveIntensity:.035,roughness:.95}),P=new Kr(s),b=Yt(2634297),S=Yt(8078389),L=Yt(2309936),U=Yt(4470060);for(let O=20;O<e.length;O+=35){for(const H of[-1,1]){const V=e.sample(O);for(let G=0;G<3;G++){const ne=18+Ft()*24,ie=20+Ft()*23,J=H*(V.width/2+ie/2+12+G*110),ce=e.sample(O+(Ft()-.5)*14,J);let ue=11+Ft()*25;G>0&&(ue+=Ft()*45),O>e.length*.62&&Ft()>.72&&(ue+=Ft()*90);const E=O<e.length*.48;if(E&&(ue=6+Ft()*13+G*4),G===0&&E&&(ue=9+Ft()*4),!E&&G===0&&(ue=Math.min(ue,24)),!E&&G>0&&x.some(I=>I.side===H&&Math.abs(O-I.distance)<I.reserveLength+65)&&(ue=Math.min(ue,58)),x.some(I=>I.side===H&&Math.abs(O-I.distance)<I.reserveLength&&Math.abs(J)<I.inland)||x.some(I=>ce.x>I.bounds.min.x-25&&ce.x<I.bounds.max.x+25&&ce.z>I.bounds.min.z-25&&ce.z<I.bounds.max.z+25))continue;const y=G===0&&ue<22&&Math.floor(O/35)%5!==0?C:w[Math.floor(Ft()*5)][ue<22?0:ue<65?1:2];if(P.box(y,ce.x,3+ue/2,ce.z,ne,ue,ie,ce.heading),P.box(b,ce.x,ue+3.5,ce.z,ne+1,1,ie+1,ce.heading),G>0&&(P.box(b,ce.x,ue+5.5,ce.z,ne*.3,4,ie*.4,ce.heading),ue>65&&P.box(c,ce.x,ue+8,ce.z,.35,.45,.35)),G===0){const I=e.sample(O,H*(V.width/2+ie+17));for(let Y=0;Y<2;Y++)P.box(o,I.x+Y*3,7+Y*3,I.z,1.5,1.1,.8,ce.heading)}if(G===0){const I=e.sample(O,H*(V.width/2+5));P.box(S,I.x,6.7,I.z,ne,.3,4,ce.heading),Math.floor(O)%3===0&&P.box(c,I.x,6.9,I.z,ne*.3,.08,.24,ce.heading)}}}for(const H of[-1,1]){const V=e.sample(O,H*(e.sample(O).width/2+4));if(P.box(o,V.x,1.5,V.z,2,3.5,36,V.heading),Math.floor(O/35)%2===0&&(P.box(a,V.x,6,V.z,.35,7,.35),P.box(c,V.x,9.7,V.z,1.9,.35,1.9)),Math.floor(O/35)%3===0){P.box(U,V.x+V.nx*H*8,7,V.z+V.nz*H*8,.8,9,.8);const G={x:V.x+V.nx*H*8,z:V.z+V.nz*H*8};for(let ne=0;ne<5;ne++)P.add(new Zt(1,7,5),L,G.x+Math.sin(ne*1.25)*2.3,11.5,G.z+Math.cos(ne*1.25)*2.3,4.1,1.8,2.2,ne*1.25)}}}P.finish(l),l.traverse(O=>{O.updateMatrix(),O.matrixAutoUpdate=!1});const N=[],X=[];function z(O,H,V,G){const ne=_o(H,O),ie=e.nearest(ne.x,ne.z),J=new Ht;J.position.set(ie.x,0,ie.z),J.rotation.y=Math.atan2(-ie.nz,ie.nx),i.add(J);const ce=new Kr(s),ue=ie.width+200,E=G==="steel"?16:19,y=Yt(G==="steel"?4749666:6582139);ce.lightFixtures.push(...Lv(ue,E,G)),ce.box(y,0,E,0,ue,2.5,G==="steel"?17:29);for(const te of[-1,1]){const j=te*(G==="steel"?9:14.75);if(G==="steel"){ce.box(y,0,E+13,j,ue,1.1,1.1);for(let Ae=-ue/2;Ae<ue/2;Ae+=30){ce.box(y,Ae,E+7,j,.7,12,.7);const pe=new an(1,1,1),Ee=new ft;Ee.position.set(Ae+15,E+7,j),Ee.rotation.z=Math.atan2(30,12),Ee.scale.set(.65,Math.hypot(30,12),.65),Ee.updateMatrix(),ce.parts.set(y,[...ce.parts.get(y)||[],pe.applyMatrix4(Ee.matrix)])}}}for(const te of[-ie.width*.27,ie.width*.27]){ce.box(y,te,E/2,0,8,E,13);const j=new R(te,0,0).applyMatrix4(J.matrixWorld);J.updateMatrixWorld(),J.localToWorld(j.set(te,0,0)),N.push({x:j.x,z:j.z,width:9,length:16,heading:J.rotation.y,mass:1e4,vx:0,vz:0})}G==="concrete"&&ce.box(y,0,E+4,0,ue,2,6),ce.finish(J);const I=Ca[V],Y=V==="taksin"?38:29;for(const te of[-1,1]){const j=Ra(I.thai,I.english,Y,3.4);j.position.set(0,E+3.2,te*(G==="steel"?9.8:15.6)),j.rotation.y=te<0?Math.PI:0,J.add(j)}if(V==="pokklao"){const te=Ra(Ca.skypark.thai,Ca.skypark.english,18,2.2);te.position.set(0,E+5.4,3.2),J.add(te)}X.push({group:J,span:ue,height:E})}z(13.7393,100.4976,"memorial","steel"),z(13.73898,100.49851,"pokklao","concrete"),z(13.7193,100.5121,"taksin","concrete");const q=new Ht;i.add(q);const ee=Yt(3160130),W=new dn({color:new Fe(16769717).multiplyScalar(2.2)}),le=new dn({color:new Fe(16721682).multiplyScalar(1.9)}),xe=X.length*10,ae=[new Xs(lo,ee,xe),new Xs(lo,W,xe*2),new Xs(lo,le,xe*2)];ae.forEach(O=>{O.instanceMatrix.setUsage(As),O.frustumCulled=!1,q.add(O)});const Ne=new ft;let ze=-1;function $e(O){if(!(O-ze<1/30)){ze=O;for(let H=0;H<xe;H++){const{group:V,span:G,height:ne}=X[Math.floor(H/10)],ie=H%2?1:-1,J=((H%10*53+O*(7+H%4)*ie)%(G+60)+G+60)%(G+60)-(G+60)/2,ce=ie*5,ue=(E,y,I,Y,te,j,Ae,pe)=>{Ne.position.set(I,Y,te),Ne.rotation.set(0,0,0),Ne.scale.set(j,Ae,pe),Ne.updateMatrix(),Ne.matrix.premultiply(V.matrixWorld),E.setMatrixAt(y,Ne.matrix)};V.updateMatrixWorld(),ue(ae[0],H,J,ne+2.3,ce,4,1.25,1.65);for(let E=0;E<2;E++)ue(ae[1],H*2+E,J+ie*2.04,ne+2.25,ce+(E-.5)*1.2,.07,.22,.28),ue(ae[2],H*2+E,J-ie*2.04,ne+2.25,ce+(E-.5)*1.2,.07,.2,.3)}ae.forEach(H=>H.instanceMatrix.needsUpdate=!0)}}const qe=new Kr(s),Q=Yt(11939368,16733997,.35);for(const O of[2,e.length-2]){const H=e.sample(O);for(let G=-H.width*.43;G<=H.width*.43;G+=H.width/7){const ne=e.sample(O,G);qe.add(new Zt(1.05,8,6),Q,ne.x,.55,ne.z,1,.9,1),qe.box(c,ne.x,1.7,ne.z,.25,.6,.25)}const V=hu("RIVER LIMIT · TURN BACK",27,3,"#18313b","#ffd290");V.position.set(H.x,6,H.z),V.rotation.y=H.heading,i.add(V)}qe.finish(i);const re=[];for(const O of t){const H=yv(O),V=new Ht;V.position.set(H.x,0,H.z);const G=new Kr(s),ne=H.heading+Math.PI/2;V.rotation.y=ne,G.box(o,0,1.2,0,17,1.3,9),G.box(r,0,1.8,15,4,.5,31),G.box(a,0,5.9,0,18,.35,9.6);for(const I of[-7.3,7.3])for(const Y of[-3.7,3.7])G.box(r,I,3.8,Y,.32,4.5,.32),G.box(a,I,-.2,Y,.65,3,.65);G.box(c,0,5.7,-4.8,17,.2,.22);const ie=Yt(11896937),J=Yt([9158593,14200424,10838093][O.index%3]),ce=Yt(2635332);for(let I=0;I<3;I++){const Y=(I-1)*2.8,te=-.7+I%2*1.4;G.box(J,Y,3.1,te,.57,.85,.34),G.add(new Zt(.22,7,6),ie,Y,3.73,te,1,1.18,.96);for(const j of[-1,1])G.box(ce,Y+j*.15,2.35,te,.19,.75,.22),G.box(J,Y+j*.38,3.05,te,.15,.65,.19)}G.finish(V);const ue=Ra(O.thai,O.name.toUpperCase()+(O.name.toLowerCase().includes("pier")?"":" PIER"),13,2,{pier:!0});ue.position.set(0,5,-4.9),ue.rotation.y=Math.PI,V.add(ue),i.add(V),N.push(H);const E=new at(new mc(17.5,18.3,64),new dn({color:16760166,transparent:!0,opacity:.8,side:Bt,depthWrite:!1,toneMapped:!1}));E.rotation.x=-Math.PI/2,E.position.set(O.x,.18,O.z),i.add(E);const y=hu("PICK UP",13,2.8,"#163237","#ffd995");y.position.set(O.x,9,O.z),i.add(y),re.push({pier:O,ring:E,beacon:y})}const _e=Av(i),Le=_e.sky,Te=Ov(i,e,x,n),Ie=zv(i,e,x,n);s.push(...Te.fixtures);const tt=new vd(i,s),D=Array.from({length:n?2:3},()=>{const O=new cd(16761212,0,46,2);return i.add(O),O});return{water:_,landmarks:x,pierVisuals:re,bridgeColliders:N,sky:Le,visibleLights:tt,update(O,H,V,G=[]){_e.update(O),$e(O),Te.update(O),Ie.update(O,H);const ne=[...Te.lights,...Ie.lights,...G];M.update(O,H,ne);const ie=ne.map(J=>({s:J,d:(J.x-H.position.x)**2+(J.z-H.position.z)**2})).sort((J,ce)=>J.d-ce.d);for(let J=0;J<D.length;J++){const ce=ie[J]?.s,ue=D[J];ue.intensity=ce?Math.min(100,ce.power*(ce.boat?.48:1.9)):0,ce&&(ue.position.set(ce.x,ce.y,ce.z),ue.color.set(ce.color),ue.distance=ce.distance||46)}for(const J of re){const ce=V.fare?V.fare.to.id===J.pier.id:!V.finished&&(V.cooldowns.get(J.pier.id)||0)<=V.clock;J.ring.visible=J.beacon.visible=ce,ce&&(J.ring.material.color.set(V.fare?9040591:16760166),J.ring.material.opacity=.55+Math.sin(O*3)*.15,J.beacon.quaternion.copy(H.quaternion),J.beacon.visible=H.position.distanceTo(J.beacon.position)<550,J.beacon.position.y=9+Math.sin(O*2)*.6)}}}}const So=Object.freeze({longtail:Object.freeze({length:12.4,width:2.35,mass:1,maxSpeed:25}),cruise:Object.freeze({length:55,width:13,mass:24,maxSpeed:5.1}),ferry:Object.freeze({length:30,width:5.5,mass:5.5,maxSpeed:12}),electric:Object.freeze({length:24,width:7,mass:7,maxSpeed:9}),fishing:Object.freeze({length:6.5,width:1.55,mass:.45,maxSpeed:3.8})}),Fa={wood:10183998,woodLight:12096096,darkWood:4205343,white:14408141,paintWhite:14146002,red:10301993,teal:1207401,orange:13460520,gold:12489810,navy:1453113,steel:10596532,rubber:1316630,warm:16768401,cyan:7858149},fs=new Map,Oa=new Map,Es=(i,e,t=0)=>{const n=Math.sin(i*127.1+e*311.7+t*74.7)*43758.5453;return n-Math.floor(n)};function Fo(i,e,t=256,n=!0){if(Oa.has(i))return Oa.get(i);const s=new Uint8Array(t*t*4);for(let o=0;o<t;o++)for(let a=0;a<t;a++){const c=e(a,o,t),l=(o*t+a)*4;s[l]=c[0],s[l+1]=c[1],s[l+2]=c[2],s[l+3]=255}const r=new Ro(s,t,t,on);return r.wrapS=r.wrapT=fi,n&&(r.colorSpace=gt),r.generateMipmaps=!0,r.minFilter=yn,r.magFilter=rn,r.anisotropy=4,r.needsUpdate=!0,Oa.set(i,r),r}function l2(){return Fo("wood",(i,e)=>{const t=Math.floor(e/32),n=e%32,s=Math.sin(e*.73+Math.sin(i*.022)*3.4)*12+Math.sin(e*2.2+i*.009)*5,r=Math.sin(Math.hypot((i-94)*.13,(e-113)*1.4))*9*Math.max(0,1-Math.abs(e-113)/18),o=173+s+r+Es(i,e)*15+Es(t,0)*26-(n<1?66:n>29?17:0);return[o,o*.88,o*.69]})}function za(i){return Fo(i,(e,t)=>{const n=Es(e,t),s=Es(Math.floor(e/8),Math.floor(t/8)),r=i==="cloth"?(e%3===0?-18:0)+(t%3===0?-12:0):0,o=i==="metal"?164+n*60:216+n*19+s*9+r;return[o,o,o]},128,i!=="metal")}function c2(){return Fo("wood-bump",(i,e)=>{const t=e%32<2?44:144+Math.sin(e*.73+Math.sin(i*.022)*3.4)*20+Es(i,e)*23;return[t,t,t]},256,!1)}function h2(i="warm"){return Fo(`saloon-${i}`,(e,t,n)=>{const s=e/n,r=t/n;let a=.34+Math.exp(-((s-.34)**2*11+(r-.82)**2*18))*.56;r>.87&&(a*=.48),r<.23&&(a*=.29),(s<.11||s>.91)&&(a*=.65+.11*Math.sin(s*230));const c=[[.23,.49,.083],[.7,.43,.07]];for(const[h,u,d]of c){const f=((s-h)/d)**2+((r-u)/(d*1.06))**2<1,m=r<u-d*.5&&r>.15&&Math.abs(s-h)<d*(1.2+(u-r)*2);(f||m)&&(a*=.27)}return r>.27&&r<.29&&s>.34&&s<.82&&(a=.8),Math.abs(s-.575)<.012&&r>.17&&r<.275&&(a=.17),a+=Math.exp(-((s-.83)**2*1400))*.1,(i==="cool"?[149,197,206]:i==="dim"?[230,174,105]:[255,209,141]).map(h=>h*Math.min(1,a+Es(e,t)*.025))})}function bd(i){if(fs.has(i))return fs.get(i);let e={color:Fa[i]??i,roughness:.72,metalness:.02};if(["wood","woodLight","darkWood"].includes(i)&&(e={...e,map:l2(),bumpMap:c2(),bumpScale:.018,roughness:.48,metalness:.035}),i==="paintWhite"&&(e={...e,map:za("paint"),roughness:.43,metalness:.11}),i.startsWith?.("cloth")&&(e={color:Fa[i.slice(5).toLowerCase()]??Fa.teal,map:za("cloth"),roughness:.94,metalness:0}),i==="steel"&&(e={...e,roughnessMap:za("metal"),metalness:.82,roughness:.38}),i==="gold"&&(e={...e,metalness:.63,roughness:.39}),i==="glass"&&(e={color:1323068,metalness:.61,roughness:.16,emissive:1454394,emissiveIntensity:.13}),["window","windowDim","windowCool"].includes(i)){const n=h2(i==="windowDim"?"dim":i==="windowCool"?"cool":"warm");e={color:14205859,map:n,roughness:.22,metalness:.16,emissiveMap:n,emissive:16771518,emissiveIntensity:i==="windowDim"?.55:1.2}}i==="warm"&&(e={color:16772556,emissive:16764809,emissiveIntensity:3.4,roughness:.24}),i==="cyan"&&(e={color:12904425,emissive:7980767,emissiveIntensity:1.45,roughness:.28}),i==="navRed"&&(e={color:16735561,emissive:16716806,emissiveIntensity:3.1}),i==="navGreen"&&(e={color:6349459,emissive:321609,emissiveIntensity:3.1});const t=new wt({...e,side:Bt});return fs.set(i,t),t}class Fi{constructor(){this.batches=new Map,this.frame=new Ze}add(e,t,n=[0,0,0],s=[0,0,0],r=[1,1,1]){e.clearGroups();const o=new Ze().compose(new R(...n),new Vt().setFromEuler(new $t(...s)),new R(...r));e.applyMatrix4(new Ze().multiplyMatrices(this.frame,o));const a=typeof t=="string"||typeof t=="number"?bd(t):t;this.batches.has(a)||this.batches.set(a,[]),this.batches.get(a).push(e.index?e.toNonIndexed():e),e.index&&e.dispose()}box(e,t,n,s=[0,0,0]){this.add(new an(...e),n,t,s)}ball(e,t,n,s=[1,1,1],r=8){this.add(new Zt(e,r,6),n,t,[0,0,0],s)}cylinder(e,t,n,s,r=n,o=7){const a=new R(...e),c=new R(...t),l=c.clone().sub(a),h=a.add(c).multiplyScalar(.5),u=new pn(r,n,l.length(),o);u.applyQuaternion(new Vt().setFromUnitVectors(new R(0,1,0),l.normalize())),this.add(u,s,h.toArray())}curve(e,t,n,s=30,r=5){this.add(new gc(new fc(e.map(o=>new R(...o))),s,t,r,!1),n)}inFrame(e,t,n){const s=this.frame,r=new Ze().makeRotationY(t);r.setPosition(...e),this.frame=new Ze().multiplyMatrices(s,r),n(),this.frame=s}finish(e){const t=new Ht;t.name=e;for(const[n,s]of this.batches){const r=Ps(s,!1);for(const a of s)a.dispose();r.computeBoundingSphere();const o=new at(r,n);o.castShadow=!0,o.receiveShadow=!0,t.add(o)}return t}}function Jn(i,e,t){const n=[],s=[],r=[];for(let a=0;a<=i;a++)for(let c=0;c<=e;c++)if(n.push(...t(a/i,c/e)),s.push(a/i*4,c/e),a<i&&c<e){const l=a*(e+1)+c;r.push(l,l+1,l+e+2,l,l+e+2,l+e+1)}const o=new it;return o.setAttribute("position",new Be(n,3)),o.setAttribute("uv",new Be(s,2)),o.setIndex(r),o.computeVertexNormals(),o}const wc=(i,e,t)=>i+(e-i)*t;function wd(i,e){for(let t=1;t<e.length;t++)if(i<=e[t][0]){const n=e[t-1],s=e[t],r=Math.max(0,Math.min(1,(i-n[0])/(s[0]-n[0])));return wc(n[1],s[1],r*r*(3-2*r))}return e.at(-1)[1]}function Ed(i,{length:e,width:t,rim:n=.78,draft:s=.38,fishing:r=!1,color:o="wood"}){const a=d=>t*.5*wd(d,[[0,.018],[.12,.54],[.3,.88],[.53,1],[.78,.86],[1,r?.07:.49]]),c=d=>n+Math.pow(Math.max(0,1-d*4.2),2)*(r?.33:.83)+Math.pow(Math.max(0,(d-.82)/.18),2)*.1,l=d=>-s+Math.pow(Math.abs(d-.5)*2,4)*.33;i.add(Jn(40,12,(d,f)=>[a(d)*(f*2-1),wc(l(d),c(d),Math.pow(Math.abs(f*2-1),2.8)),(d-.5)*e]),o);const h=[[-a(1),c(1),e*.5],[a(1),c(1),e*.5],[a(1)*.5,-.05,e*.5],[-a(1)*.5,-.05,e*.5]];i.add(Qn(h),o);const u=r?.09:.2;i.add(Jn(20,1,(d,f)=>{const m=.12+d*.84;return[a(m)*.82*(f*2-1),u+.1*Math.pow(Math.abs(d-.5)*2,4),(m-.5)*e]}),"woodLight");for(let d=-e*.36;d<e*.46;d+=r?.42:.5){const f=d/e+.5;i.box([a(f)*1.63,.025,.025],[0,u+.035,d],"darkWood")}for(const d of[-1,1]){const f=Array.from({length:34},(m,v)=>{const g=v/33;return[d*a(g),c(g),(g-.5)*e]});i.curve(f,r?.045:.075,r?"darkWood":"red",40),r||(i.curve(f.map(([m,v,g])=>[m,v-.14,g]),.048,"gold",40),i.curve(f.map(([m,v,g])=>[m*.97,v-.24,g]),.055,"teal",40),i.curve(f.map(([m,v,g])=>[m*.86,v-.4,g]),.022,"darkWood",40));for(let m=0;m<14;m++){const v=.15+m/14*.78;i.curve([[d*a(v)*.55,.1,(v-.5)*e],[d*a(v)*.9,c(v)*.52,(v-.5)*e],[d*a(v)*.98,c(v)-.015,(v-.5)*e]],.025,"darkWood",5,4)}}return{beam:a,rail:c}}function Qn(i,e=[1,1]){const t=new it;return t.setAttribute("position",new Be(i.flat(),3)),t.setAttribute("uv",new Be([0,0,e[0],0,e[0],e[1],0,e[1]],2)),t.setIndex([0,1,2,0,2,3]),t.computeVertexNormals(),t}function Ec(i,e,t,n,s=.28,r=1){i.add(new Dn(s,s*.32,6,12),"rubber",[e,t,n],[0,Math.PI/2,0]),i.curve([[e-r*.06,t+s*1.7,n],[e+r*.06,t+s*.6,n],[e,t-s*.3,n]],.012,"woodLight",7,4)}function ar(i,e,t,n,s=1,r=.29){i.add(new Dn(r,.065,6,14),"orange",[e,t,n],[0,Math.PI/2,0]);for(let o=0;o<4;o++){const a=Math.PI/4+o*Math.PI/2;i.add(new Dn(r,.069,5,3,.25),"white",[e,t,n],[0,Math.PI/2,a])}i.curve([[e-s*.02,t+.42,n-.21],[e+s*.04,t-.37,n-.31],[e+s*.04,t-.43,n+.28],[e-s*.02,t+.4,n+.21]],.012,"woodLight",13,4)}function Oo(i,e,t,n,s=1){i.box([.3*s,.07*s,.19*s],[e,t,n],"steel"),i.cylinder([e,t,n],[e,t+.13*s,n],.045*s,"steel"),i.cylinder([e-.22*s,t+.16*s,n],[e+.22*s,t+.16*s,n],.045*s,"steel")}function bo(i,e,t,n,s=.3){for(let r=0;r<4;r++){const o=s-r*s*.17;i.curve(Array.from({length:19},(a,c)=>{const l=c/18*Math.PI*2;return[e+Math.cos(l)*o,t+r*.008,n+Math.sin(l)*o*.72]}),.018,"woodLight",19,4)}}function lr(i,e,t,n,s){i.box([.12,.18,.18],[e,t-.02,n],"steel"),i.ball(.068,[e+s*.055,t,n-.035],s<0?"navRed":"navGreen",[.7,1,.85]),i.box([.15,.045,.22],[e,t+.09,n],"rubber")}function zo(i,e,t,n,s=1){i.cylinder([e,t,n],[e,t+1.3*s,n],.017*s,"steel");const r=[[0,1/6,"red"],[1/6,2/6,"white"],[2/6,4/6,"navy"],[4/6,5/6,"white"],[5/6,1,"red"]];for(const[o,a,c]of r)i.add(Jn(8,1,(l,h)=>[e+l*.68*s,t+(1.25-.45*(o+h*(a-o)))*s,n+Math.sin(l*8)*.08*s]),c)}function Sn(i,e,t,n,{seated:s=!1,heading:r=0,shirt:o="teal",skin:a=11960921,hat:c=!1,scale:l=1,lifeVest:h=!1}={}){i.inFrame([e,t,n],r,()=>{const u=i.frame;i.frame=u.clone().scale(new R(l,l,l));const d=s?.47:.86,f=d+.48,m=f+.23;if(i.add(new Lo([new se(.155,0),new se(.16,.1),new se(.185,.28),new se(.222,.37),new se(.162,.43)],10),o,[0,d,0],[0,0,0],[1,1,.67]),h){for(const v of[-1,1])i.box([.14,.35,.065],[v*.095,d+.26,-.14],"orange",[0,0,v*.035]);i.box([.34,.025,.07],[0,d+.16,-.176],"rubber")}i.ball(.18,[0,d,0],"navy",[1,.63,.76]),i.cylinder([0,f-.02,0],[0,f+.08,0],.065,a),i.ball(.12,[0,m,-.015],a,[.82,1.15,.87]),i.ball(.112,[0,m+.059,.013],"rubber",[.94,.71,.97]),i.ball(.023,[0,m-.005,-.117],a,[.8,.9,1]);for(const v of[-1,1])i.ball(.021,[v*.098,m-.002,-.006],a,[.53,1.2,.65],6),i.ball(.01,[v*.037,m+.017,-.111],"rubber",[1,.65,.45],6);for(const v of[-1,1]){const g=[v*.105,d-.02,0],p=s?[v*.16,.43,-.36]:[v*.1,.43,v*.018],M=s?[v*.16,.09,-.37]:[v*.13,.09,-.035];i.cylinder(g,p,.075,"navy",.087),i.ball(.071,p,"navy"),i.cylinder(p,M,.052,"navy",.066),i.box([.135,.08,.24],[M[0],.055,M[2]-.035],"rubber");const _=[v*.22,f-.075,0],x=s?[v*.25,d+.2,-.16]:[v*.25,d+.21,.03],w=s?[v*.16,d+.03,-.36]:[v*.26,d-.05,-.035];i.cylinder(_,x,.068,o,.087),i.cylinder(x,w,.044,a,.054),i.ball(.058,w,a,[.75,1,.7])}c&&(i.add(new Po(.24,.13,14),"woodLight",[0,m+.16,-.012]),i.cylinder([0,m+.105,-.012],[0,m+.123,-.012],.26,"woodLight",.26,16),i.cylinder([-.1,m+.1,0],[-.06,m-.08,-.05],.008,"darkWood",.008,4)),i.frame=u})}function Td(i,{length:e,width:t,y:n,z:s=0,color:r="teal",posts:o=3,stripe:a="gold"}){i.add(Jn(24,16,(c,l)=>[(l-.5)*t,n+.24*(1-Math.pow(l*2-1,2))-Math.sin(c*Math.PI*(o-1))**2*.035+Math.sin(c*Math.PI*24)*.006,s+(c-.5)*e]),`cloth${r[0].toUpperCase()}${r.slice(1)}`);for(const c of[-1,1])i.add(Jn(24,1,(l,h)=>[c*t/2,n-h*(.13+.025*Math.sin(l*Math.PI*20)),s+(l-.5)*e]),`cloth${r[0].toUpperCase()}${r.slice(1)}`),i.box([.035,.029,e],[c*t/2,n-.022,s],a),i.cylinder([c*t/2,n,s-e/2],[c*t/2,n,s+e/2],.028,"steel");for(let c=0;c<o;c++){const l=s-e*.46+c/Math.max(1,o-1)*e*.92;for(const h of[-1,1])i.cylinder([h*(t/2-.045),.6,l],[h*(t/2-.045),n,l],.028,"steel");i.curve([[-t/2,n-.008,l],[-t*.25,n+.17,l],[0,n+.23,l],[t*.25,n+.17,l],[t/2,n-.008,l]],.025,"steel",12)}i.add(Qn([[-.075,n+.246,s-e/2],[.075,n+.246,s-e/2],[.075,n+.246,s+e/2],[-.075,n+.246,s+e/2]]),a)}function cr(i,e,t,n,s,r="red"){i.box([s,.12,.42],[e,t,n],"woodLight"),i.box([s-.045,.055,.38],[e,t+.078,n],r),i.box([s,.33,.075],[e,t+.26,n+.19],r);for(const o of[-1,1])i.box([.055,.39,.055],[e+o*s*.38,t-.2,n],"steel")}function u2(i=!0){const e=new Fi;e.box([.64,.49,.88],[0,.12,0],"rubber"),e.box([.7,.12,.68],[0,.4,-.035],"steel");for(let r=0;r<4;r++)e.cylinder([.3,.12,-.29+r*.18],[.45,.24,-.29+r*.18],.056,"steel",.056,7),e.box([.43,.042,.1],[0,.485,-.29+r*.18],"rubber");e.cylinder([-.16,.26,-.47],[-.16,.36,-.68],.09,"steel",.09,7),e.cylinder([-.16,.36,-.68],[-.16,.75,-.68],.06,"steel",.06,7),e.cylinder([0,.15,.35],[0,.15,.58],.27,"rubber",.27,10),e.cylinder([0,.15,.57],[0,.15,.6],.13,"steel",.13,10),e.cylinder([-.35,.32,.04],[-.82,.34,-.8],.027,"steel"),e.cylinder([-.82,.34,-.8],[-.84,.35,-1.03],.045,"rubber"),e.cylinder([0,.04,.55],[0,-1.13,3.52],.047,"steel",.036,7),e.cylinder([0,-.01,.51],[0,-.4,1.51],.081,"rubber",.055,7),e.box([.55,.28,.38],[.58,-.19,-.12],"red"),e.cylinder([.58,-.06,-.12],[.58,.025,-.12],.055,"rubber"),e.box([.63,.56,.1],[0,.13,-.5],"rubber");for(let r=0;r<11;r++)e.box([.48,.013,.12],[0,-.1+r*.045,-.535],"steel");for(let r=0;r<5;r++)e.cylinder([.3,.26,-.28+r*.13],[.37,.48,-.28+r*.13],.014,"gold",.014,5),e.ball(.026,[.31,.45,-.28+r*.13],"steel",[1,.7,1],6);e.curve([[.49,.12,-.22],[.62,.14,.1],[.51,.42,.38],[.29,.46,.28]],.049,"steel",12,6),e.curve([[-.31,.34,-.32],[-.5,.4,-.06],[-.47,-.07,.37],[-.14,-.19,.43]],.029,"rubber",12,5),e.curve([[.62,-.05,-.1],[.71,.29,-.19],[.34,.43,-.26],[.15,.39,.02]],.016,"rubber",14,4);for(const r of[-.21,.21])e.cylinder([r,.15,.62],[r,.15,.645],.15,"steel",.15,12),e.cylinder([r,.15,.648],[r,.15,.66],.11,"rubber",.11,10),e.cylinder([r,.15,.666],[r,.15,.67],.035,"gold",.035,7);e.curve([[-.21,.285,.66],[.21,.285,.66],[.34,.15,.66],[.21,.015,.66],[-.21,.015,.66],[-.34,.15,.66],[-.21,.285,.66]],.016,"rubber",26,4);for(const r of[-1,1])e.cylinder([r*.4,-.17,-.36],[r*.4,-.17,.4],.035,"steel"),e.cylinder([r*.4,-.17,.02],[0,-.47,.02],.038,"steel");const t=e.finish("exposed long-tail engine"),n=new Fi;n.cylinder([0,0,-.045],[0,0,.045],.085,"gold",.075,9);for(let r=0;r<3;r++){const o=r*Math.PI*2/3;n.box([.13,.37,.043],[Math.sin(o)*.16,Math.cos(o)*.16,0],"gold",[0,.25,-o+.19])}const s=n.finish("propeller");return s.position.set(0,-1.13,3.52),s.rotation.x=.375,t.add(s),t.userData.propeller=s,i||t.scale.setScalar(.55),t}function d2(i){const e=new Fi;Ed(e,{length:12.4,width:2.35}),e.add(Qn([[-.54,.83,-4.45],[.54,.83,-4.45],[.07,1.47,-6.15],[-.07,1.47,-6.15]]),"woodLight"),e.curve([[0,.68,-5.35],[0,1,-6.01],[0,1.67,-6.33],[0,1.79,-6.26]],.105,"wood",15,6);for(let s=0;s<5;s++)e.box([.26,.065,.15],[0,1.25+s*.075,-6.17-s*.02],s%2?"gold":"red",[-.26,0,0]);for(let s=0;s<3;s++){const r=(s-1)*.09,o=1.54,a=-6.22;e.add(Qn([[r-.055,o,a],[r+.055,o,a],[r+.09,o-.66+s*.1,a+.22],[r-.025,o-.68+s*.1,a+.18]]),["red","gold","teal"][s])}for(let s=0;s<=12;s++){const r=Math.PI*s/12;e.ball(.046,[.18*Math.cos(r),1.2-.32*Math.sin(r),-6.06],s%3===0?"warm":"gold",[1,1,1],6)}Td(e,{length:6.2,width:2.17,y:2.02,z:.15,color:i%3===1?"red":"teal",posts:4});for(let s=0;s<5;s++)cr(e,0,.52,-2.28+s*1.06,1.79);e.cylinder([-.83,1.99,-2.74],[.83,1.99,-2.74],.024,"warm"),e.cylinder([-.83,1.99,2.91],[.83,1.99,2.91],.024,"warm"),Sn(e,-.43,.21,-1.18,{seated:!0,shirt:"white"}),Sn(e,.42,.21,-.13,{seated:!0,shirt:"red",skin:14199428}),Sn(e,-.43,.21,1.99,{seated:!0,shirt:"orange"}),e.box([1.27,.14,.63],[0,.73,4.2],"woodLight"),Sn(e,-.16,.4,4.21,{seated:!0,shirt:"navy",hat:!0,lifeVest:!0}),e.box([.48,.36,.56],[.59,.37,3.81],"navy"),e.cylinder([-.47,.41,4.88],[0,1,5.24],.06,"steel"),e.cylinder([.47,.41,4.88],[0,1,5.24],.06,"steel");for(const s of[-1,1]){Ec(e,s*1.04,.55,2.89,.21,s),lr(e,s*1.08,2.06,-2.66,s),Oo(e,s*.79,.89,3.31,.75),ar(e,s*1.06,1.3,2.65,s,.22),e.add(new Wt(3.8,.24),Bo("เรือหางยาว  BANGKOK"),[s*1.137,.59,-.35],[0,s*Math.PI/2,0]),e.cylinder([s*1.025,1.87,-2.9],[s*1.025,1.87,3.16],.035,"clothWhite");for(let r=-2.5;r<2.9;r+=1.2)e.curve([[s*.96,1.89,r-.045],[s*.96,1.63,r],[s*.96,1.89,r+.045]],.014,"rubber",8,4)}bo(e,.03,.87,-4.62,.23),zo(e,.61,.9,4.04,.67),e.box([.3,.15,.14],[-.83,1.56,3.34],"rubber"),e.box([.24,.1,.008],[-.83,1.57,3.418],"cyan");for(const s of[-2.74,2.91])e.box([1.8,.07,.11],[0,2.045,s],"paintWhite");const t=e.finish("Thai wooden long-tail"),n=u2();return n.position.set(0,1,5.22),t.add(n),t.userData.motor=n,t.userData.propeller=n.userData.propeller,t.userData.passengerSeats=[[-.43,.73,-2.28],[.43,.73,-2.28],[-.43,.73,-.16],[.43,.73,.9]],t}function Tc(i,{length:e,width:t,height:n=1.5,draft:s=1.1,color:r="paintWhite",x:o=0,stern:a=.82}){const c=l=>t*.5*wd(l,[[0,.025],[.065,.39],[.18,.87],[.3,1],[.78,1],[1,a]]);i.add(Jn(32,12,(l,h)=>[o+c(l)*(h*2-1),-s+(n+s)*Math.pow(Math.abs(h*2-1),3),(l-.5)*e]),r),i.add(Jn(32,1,(l,h)=>[o+c(l)*(h*2-1),n,(l-.5)*e]),"woodLight"),i.add(Qn([[o-c(1),n,e/2],[o+c(1),n,e/2],[o+c(1)*.75,-s*.45,e/2],[o-c(1)*.75,-s*.45,e/2]]),r);for(const l of[-1,1]){const h=Array.from({length:28},(u,d)=>{const f=d/27;return[o+c(f)*l,n-.27,(f-.5)*e]});i.curve(h,.065,"gold",36),i.curve(h.map(([u,d,f])=>[u*.999,d-.38,f]),.08,"navy",36)}return c}function Zs(i,e,t,n,s,{material:r="steel",height:o=.94,step:a=1.6,lights:c=!1}={}){i.cylinder([e,t+o,n],[e,t+o,s],.035,r),i.cylinder([e,t+o*.49,n],[e,t+o*.49,s],.021,r);for(let l=n;l<=s+.01;l+=a)i.cylinder([e,t,l],[e,t+o,l],.027,r),c&&i.ball(.054,[e,t+o+.028,l],"warm",[1,1,1],6)}function f2(i,e,t,n){i.cylinder([e,t,n],[e,t+.71,n],.055,"steel"),i.cylinder([e,t+.71,n],[e,t+.765,n],.55,"white",.55,10),i.cylinder([e,t+.768,n],[e,t+.9,n],.048,"gold"),i.ball(.043,[e,t+.92,n],"warm",[.72,1.2,.72],6);for(const s of[-1,1])i.cylinder([e+s*.3,t+.768,n],[e+s*.3,t+.785,n],.13,"white",.13,10),i.cylinder([e+s*.23,t+.77,n+.2],[e+s*.23,t+.87,n+.2],.009,"steel",.009,5),i.ball(.043,[e+s*.23,t+.9,n+.2],"glass",[.8,1.17,.8],6);for(const s of[-1,1]){i.box([.44,.08,.44],[e+s*.81,t+.43,n],"red"),i.box([.1,.45,.44],[e+s*1.01,t+.69,n],"white");for(const r of[-.15,.15])i.cylinder([e+s*.83,t,n+r],[e+s*.83,t+.42,n+r],.025,"steel")}}function Bo(i){const e=`sign:${i}`;if(fs.has(e))return fs.get(e);if(typeof document>"u")return bd("warm");const t=document.createElement("canvas");t.width=1024,t.height=128;const n=t.getContext("2d");n.fillStyle="#133c43",n.fillRect(0,0,t.width,t.height),n.strokeStyle="#d6b25c",n.lineWidth=5,n.strokeRect(8,8,t.width-16,t.height-16),n.fillStyle="#ffe2a0",n.font="bold 64px Arial, sans-serif",n.textAlign="center",n.textBaseline="middle",n.fillText(i,512,67,980);const s=new Ln(t);s.colorSpace=gt;const r=new wt({map:s,emissiveMap:s,emissive:16777215,emissiveIntensity:.6,roughness:.65,side:Bt});return fs.set(e,r),r}function p2(i){const e=new Fi;Tc(e,{length:55,width:13,height:1.45,draft:1.6});for(const[t,n,s,r]of[[1.48,11.65,44,1],[4.08,11.55,43,1.4],[6.54,10.25,39.5,1.8]]){e.box([n,.22,s],[0,t,r],"paintWhite"),e.box([n-.23,.05,s-.24],[0,t+.145,r],"woodLight");for(const o of[-1,1])e.box([.07,.075,s-.3],[o*(n/2+.013),t+.09,r],"warm")}for(const t of[1.7,4.3]){for(const n of[-1,1]){const s=n*5.29;e.box([.13,.34,40.7],[s,t+.19,1.3],"paintWhite"),e.box([.13,.22,40.7],[s,t+2.03,1.3],"paintWhite");for(let r=-18.2;r<=20;r+=2.6)e.box([.09,1.6,2.34],[s,t+1.11,r],(Math.round((r+18.2)/2.6)+(t>3?1:0))%4===0?"windowDim":"window"),e.box([.15,1.98,.095],[s,t+1.07,r+1.23],"paintWhite"),e.box([.13,.24,2.35],[s+n*.02,t+1.79,r],"glass"),e.box([.15,1.61,.045],[s+n*.035,t+1.08,r],"gold");Zs(e,n*5.7,t-.06,-19.7,21.2,{lights:t>3,step:1.5})}e.box([10.5,1.95,.16],[0,t+1.08,21.85],"paintWhite");for(let n=-3.24;n<=3.24;n+=2.16)e.box([1.94,1.28,.17],[n,t+1.13,21.95],"window");e.add(Qn([[-5.21,t+.42,-19.52],[5.21,t+.42,-19.52],[4.92,t+1.85,-18.94],[-4.92,t+1.85,-18.94]]),"glass");for(const n of[-3.35,0,3.35])e.cylinder([n,t+.43,-19.54],[n*.95,t+1.89,-18.96],.053,"paintWhite")}for(const t of[-1,1]){Zs(e,t*4.98,6.69,-17.5,21.3,{material:"gold",step:1.4,lights:!0}),Zs(e,t*5.45,1.64,-22.2,-19.9,{lights:!0,step:.8});const n=Bo(i%2?"CHAO PHRAYA NIGHT":"RIVER PEARL");e.add(new Wt(13.6,1.12),n,[t*5.81,3.78,1.3],[0,t*Math.PI/2,0])}e.box([3.35,.045,8.5],[0,6.715,-.8],"teal");for(const t of[-3.2,3.2])for(let n=-13;n<=16;n+=4.8)f2(e,t,6.72,n);for(let t=0;t<10;t++){const n=t%2?2.35:-2.35,s=-12+Math.floor(t/2)*5.4;Sn(e,n,6.73,s,{seated:!0,heading:n<0?-Math.PI/2:Math.PI/2,shirt:t%3===0?"red":"white",skin:t%2?14199428:11960921})}for(let t=0;t<4;t++)Sn(e,-.75+t%2*1.5,6.75,-1.7+Math.floor(t/2)*2.1,{shirt:t%2?"red":"white",heading:t*1.4});for(const t of[-4.25,4.25])for(const n of[-16.1,20.3])e.cylinder([t,6.7,n],[t,9.27,n],.055,"steel");for(const t of[-4.25,4.25]){e.curve([[t,9.2,-16.1],[t,8.63,-4],[t,8.63,8],[t,9.2,20.3]],.013,"rubber",24,4);for(let n=0;n<25;n++){const s=n/24,r=wc(-16.1,20.3,s),o=9.2-Math.sin(s*Math.PI)*.59;e.ball(.067,[t,o-.075,r],"warm",[1,1.18,1],6)}}e.box([5.1,1.82,3.25],[0,7.64,-16.45],"paintWhite"),e.add(Qn([[-2.5,7.2,-18.12],[2.5,7.2,-18.12],[2.35,8.45,-17.76],[-2.35,8.45,-17.76]]),"glass"),e.box([5.4,.18,3.6],[0,8.65,-16.45],"paintWhite"),e.add(Jn(12,18,(t,n)=>[(n-.5)*8.9,9.04+.47*(1-(n*2-1)**2),13.65+t*6.1]),"clothWhite");for(const t of[13.65,16.7,19.75])e.curve([[-4.45,9.04,t],[0,9.51,t],[4.45,9.04,t]],.037,"steel",16,5);for(const t of[-4.24,4.24])e.cylinder([t,6.75,13.78],[t,9.1,13.78],.058,"paintWhite");e.cylinder([0,8.73,-15.9],[0,10.2,-15.9],.057,"steel"),e.box([1.76,.14,.32],[0,9.61,-15.9],"paintWhite"),e.ball(.09,[0,10.24,-15.9],"warm"),lr(e,-5.28,6.25,-16.8,-1),lr(e,5.28,6.25,-16.8,1);for(const t of[-1,1])for(let n=-15;n<=20;n+=7)e.cylinder([t*6.09,.66,n],[t*6.09,1.35,n],.19,"rubber",.19,8);for(const t of[-1,1]){for(const n of[-23,22.3])Oo(e,t*3.7,1.66,n,1.7);ar(e,t*5.71,2.61,17.6,t,.39),ar(e,t*4.99,7.61,19.8,t,.39),e.cylinder([t*4.96,7.64,-11.5],[t*4.96,8.17,-11.5],.052,"paintWhite"),e.ball(.12,[t*4.96,8.19,-11.5],"warm",[.68,.68,1],8);for(let n=0;n<10;n++)e.box([1.17,.075,.3],[t*4.75,1.83+n*.248,19.1+n*.26],"paintWhite");e.cylinder([t*4.15,2.66,19.06],[t*4.15,5.01,21.42],.032,"steel"),e.cylinder([t*5.36,2.66,19.06],[t*5.36,5.01,21.42],.032,"steel")}bo(e,-2.3,1.49,-23,.65),bo(e,2.6,1.49,23.4,.63),e.box([2.6,.71,.82],[0,7.09,18],"darkWood"),e.box([2.68,.045,.88],[0,7.475,18],"steel");for(const t of[-1.72,1.72]){e.box([.51,1.26,.54],[t,7.36,18.54],"rubber");for(const n of[7.04,7.57])e.cylinder([t,n,18.25],[t,n,18.22],.18,"navy",.18,10)}Sn(e,0,6.72,18.65,{shirt:"white",heading:Math.PI});for(const t of[-.84,.84])e.box([.42,.012,.32],[t,7.51,17.98],"cyan");return zo(e,0,7.7,21.55,1.7),e.ball(.1,[0,8.19,21.6],"warm"),e.finish("illuminated dinner cruise")}function m2(i,e,t,n,s="orange"){i.cylinder([e,t,n],[e,t+2.2,n],.029,"steel"),i.add(Jn(7,2,(r,o)=>[e+r*1.18,t+2.05-o*.56,n+Math.sin(r*7)*.1]),s)}function g2(i){const e=new Fi;Tc(e,{length:30,width:5.5,height:.97,draft:.7,stern:.8});for(const t of[-1,1])e.box([.13,.33,23.2],[t*2.61,1.15,.7],"orange");Td(e,{length:22.5,width:5.11,y:3.4,z:.7,color:"white",posts:7,stripe:"orange"});for(const t of[-1,1])e.box([.055,.42,20],[t*2.46,2.95,.8],"glass"),Zs(e,t*2.58,1.25,-10.1,11.4,{height:.68,step:1.6}),e.add(new Wt(8.1,.64),Bo("CHAO PHRAYA EXPRESS"),[t*2.625,1.58,.6],[0,t*Math.PI/2,0]),e.box([.045,.04,19.5],[t*2.35,3.38,.8],"warm");for(let t=0;t<10;t++){const n=-8.9+t*1.96;cr(e,-1.41,1.36,n,1.76,"orange"),cr(e,1.41,1.36,n,1.76,"orange"),t%2===0&&Sn(e,t%4===0?-1.35:1.35,1.06,n,{seated:!0,shirt:t%3?"teal":"white"})}e.box([3.5,1.53,2.67],[0,1.94,-10.49],"white"),e.add(Qn([[-1.67,1.7,-11.9],[1.67,1.7,-11.9],[1.49,2.77,-11.57],[-1.49,2.77,-11.57]]),"glass"),e.box([3.85,.13,2.98],[0,2.84,-10.49],"orange");for(const t of[-.55,.55])e.cylinder([t,1.75,-11.91],[t,2.76,-11.57],.028,"white");m2(e,0,1.26,-13.61,i%3===1?"gold":"orange");for(const t of[-1,1]){e.box([.8,.48,1.12],[t*1.02,.71,14.47],"rubber"),e.box([.16,.9,.2],[t*1.02,.13,14.65],"steel");for(let n=-8;n<12;n+=4)Ec(e,t*2.77,.76,n,.29,t);lr(e,t*2.28,3.32,-9.1,t)}e.box([2.05,.1,1.9],[0,1.07,12.35],"woodLight"),Sn(e,1.71,1.05,12.1,{shirt:"navy",lifeVest:!0});for(const t of[-1,1]){ar(e,t*2.61,2.41,8.82,t,.32);for(let n=-7.5;n<=8;n+=3.7)e.box([.43,.21,.48],[t*1.96,3.13,n],"orange"),e.box([.45,.035,.5],[t*1.96,3.2,n],"rubber"),e.box([.51,.03,.52],[t*1.96,2.995,n],"steel");Oo(e,t*1.96,1.13,-12.58,1.1),e.box([.6,.32,.39],[t*2,1.33,10.5],"rubber")}for(let t=-6;t<=6;t+=6)e.box([2.45,.075,.16],[0,3.42,t],"paintWhite"),e.box([2.25,.028,.115],[0,3.37,t],"warm");return zo(e,.92,1.62,12.66,1.1),bo(e,-.49,1.11,-13,.37),e.ball(.08,[0,3.52,11.21],"warm"),e.finish("orange flag express ferry")}function x2(){const i=new Fi;for(const e of[-1,1])Tc(i,{length:24,width:2.1,height:1.03,draft:.63,x:e*2.36,color:"paintWhite",stern:.44});i.box([6.8,.28,20.4],[0,1.18,0],"white"),i.box([6.36,.065,18.9],[0,1.36,0],"woodLight"),i.box([5.83,.38,17.4],[0,1.56,0],"navy"),i.box([6.39,.22,18.82],[0,3.69,0],"white"),i.box([6.04,.07,18.02],[0,3.85,0],"teal");for(const e of[-1,1]){for(let t=-7.18;t<=7.2;t+=2.05)i.box([.11,1.63,1.92],[e*2.89,2.6,t],"windowCool");for(let t=-8.2;t<=8.2;t+=2.05)i.box([.13,1.92,.092],[e*2.94,2.64,t],"white");i.box([.13,.045,18.49],[e*3.19,3.64,0],"cyan"),i.add(new Wt(6.65,.58),Bo("RIVER ELECTRIC"),[e*3.03,1.79,0],[0,e*Math.PI/2,0]),Zs(i,e*3.27,1.38,-9.52,9.52,{height:.62,step:1.4}),lr(i,e*3.04,3.6,-7.2,e);for(const t of[-7,-.8,6.4])i.cylinder([e*3.44,.55,t],[e*3.44,1.2,t],.145,"rubber")}for(const e of[-1,1]){const t=e*9;i.add(Qn([[-2.87,1.8,t+e*.28],[2.87,1.8,t+e*.28],[2.76,3.58,t-e*.22],[-2.76,3.58,t-e*.22]]),"glass");for(const n of[-.92,.92])i.cylinder([n,1.8,t+e*.28],[n,3.58,t-e*.22],.048,"white");i.box([3.55,.16,1.8],[0,1.19,e*10.2],"teal"),i.box([2.1,.12,.11],[0,1.77,e*9.29],"cyan")}for(let e=-7.7;e<=7.7;e+=2.52)for(const t of[-1.58,1.58]){i.box([2.73,.035,2.29],[t,3.907,e],"glass");for(let n=-1.21;n<1.3;n+=.48)i.box([.018,.012,2.25],[t+n,3.934,e],"steel");i.box([2.74,.012,.02],[t,3.934,e],"steel")}for(let e=-6.4;e<=6.4;e+=1.81)cr(i,-1.58,1.72,e,1.58,"teal"),cr(i,1.58,1.72,e,1.58,"teal");for(const e of[-1,1]){ar(i,e*3.28,2.02,7.72,e,.31),Oo(i,e*2.62,1.55,9.38,1.1),i.box([.45,.82,.51],[e*1.93,4.3,6.7],"paintWhite");for(let t=0;t<5;t++)i.box([.455,.033,.53],[e*1.93,4.06+t*.095,6.7],"navy")}return zo(i,.4,1.75,10.63,.85),i.cylinder([0,3.96,-5.5],[0,5.1,-5.5],.036,"steel"),i.ball(.085,[0,5.15,-5.5],"warm"),Sn(i,-.81,1.4,-7.62,{seated:!0,shirt:"white"}),i.finish("electric river catamaran")}function v2(i){const e=new Fi;Ed(e,{length:6.5,width:1.55,rim:.4,draft:.27,fishing:!0,color:i%2?"darkWood":"wood"});for(const t of[-1.86,.3,2.08])e.box([1.07,.09,.32],[0,.36,t],"woodLight");Sn(e,-.01,-.025,.32,{seated:!0,shirt:"teal",hat:!0,heading:-.29}),e.cylinder([.12,.7,-.02],[1.29,1.85,-2.29],.019,"darkWood",.009,6),e.curve([[1.29,1.85,-2.29],[1.68,1.78,-2.77],[1.91,1.39,-3.11]],.008,"darkWood",12,4),e.cylinder([1.91,1.39,-3.11],[1.95,-.025,-3.2],.0025,"white",.0025,3),e.cylinder([-.34,.12,-1.37],[-.34,.44,-1.37],.19,"teal",.23,9),e.cylinder([-.34,.444,-1.37],[-.34,.45,-1.37],.204,"navy",.204,9),e.box([.45,.33,.59],[.26,.28,1.41],"white"),e.box([.47,.065,.61],[.26,.48,1.41],"teal");for(let t=0;t<6;t++){const n=.29-t*.035,s=Array.from({length:18},(r,o)=>{const a=o/17*Math.PI*2;return[Math.cos(a)*n,.17+t*.023,-2.09+Math.sin(a)*n]});e.curve(s,.023,"woodLight",19,4)}e.cylinder([-.61,.53,-1.81],[-.64,.53,1.83],.033,"woodLight"),e.box([.22,.046,.74],[-.64,.53,1.89],"woodLight"),e.box([.39,.33,.4],[0,.5,2.43],"rubber"),e.cylinder([0,.33,2.58],[0,-.13,3.2],.032,"steel"),e.ball(.074,[0,.95,2.55],"warm",[1,1.5,1]),e.cylinder([0,.6,2.55],[0,.85,2.55],.018,"steel"),e.cylinder([0,.83,2.55],[0,.87,2.55],.12,"rubber",.12,10),e.add(new Po(.13,.07,10),"steel",[0,1.1,2.55]);for(const t of[-1,1])e.cylinder([t*.1,.85,2.55],[t*.1,1.09,2.55],.007,"steel",.007,4);Ec(e,-.7,.2,.34,.18,-1),e.box([.27,.31,.23],[-.39,.36,1.42],"red"),e.box([.12,.065,.09],[-.39,.555,1.42],"rubber");for(let t=0;t<8;t++){const n=-2.54+t*.1;e.curve([[-.2,.2,n],[.09,.45,n+.1],[.37,.17,n]],.006,"white",6,3),e.curve([[-.23+t*.085,.19,-2.6],[-.18+t*.085,.43,-2.2],[-.2+t*.085,.18,-1.7]],.006,"white",6,3)}return e.finish("single-person wooden fishing boat")}const uu={longtail:d2,cruise:p2,ferry:g2,electric:x2,fishing:v2};function Ad(i="longtail",e=0){const t=Object.hasOwn(uu,i)?i:"longtail",n=uu[t](e);n.userData.kind=t,n.userData.spec=So[t];const s={longtail:[{position:[0,1.84,.15],color:16761729,intensity:19,distance:7.5}],cruise:[{position:[0,8.7,-.5],color:16762765,intensity:95,distance:31},{position:[0,8.6,15.8],color:16759685,intensity:65,distance:18}],ferry:[{position:[0,3.2,0],color:16766368,intensity:42,distance:16}],electric:[{position:[0,3.45,0],color:12774645,intensity:37,distance:13}],fishing:[{position:[0,.94,2.55],color:16760697,intensity:5,distance:4.5}]};return n.userData.lightSources=s[t],n}const Cd=Object.freeze({tug:Object.freeze({length:16,width:5.4,mass:8,maxSpeed:3.2}),barge:Object.freeze({length:48,width:12.5,mass:65,maxSpeed:3.2})}),Ba=new Map,Zr=new Fe,wo=(i,e)=>{const t=Math.sin(i*127.1+e*311.7)*43758.5453123;return t-Math.floor(t)};function Rd(i){const t=new Uint8Array(65536);for(let s=0;s<128;s++)for(let r=0;r<128;r++){const o=(s*128+r)*4,a=i==="canvas"?(r%3===0?12:0)+(s%3===0?9:0):0,c=wo(Math.floor(r/9),Math.floor(s/6))*18,l=i==="steel"?Math.sin(r*.65)*11*(s/128):0,h=213+wo(r,s)*26-a-c-l;t[o]=t[o+1]=t[o+2]=h,t[o+3]=255}const n=new Ro(t,128,128,on);return n.colorSpace=gt,n.wrapS=n.wrapT=fi,n.generateMipmaps=!0,n.minFilter=yn,n.anisotropy=2,n.needsUpdate=!0,n}const du=Rd("steel"),_2=Rd("canvas"),M2={metal:new wt({vertexColors:!0,map:du,roughness:.78,metalness:.2}),canvas:new wt({vertexColors:!0,map:_2,roughness:.96,metalness:0,side:Bt}),paint:new wt({vertexColors:!0,map:du,roughness:.56,metalness:.1}),rubber:new wt({vertexColors:!0,roughness:.95,metalness:0}),glass:new wt({vertexColors:!0,roughness:.23,metalness:.35,emissive:3691609,emissiveIntensity:.16}),lamp:new dn({vertexColors:!0,toneMapped:!1})};class Pd{constructor(){this.batches=new Map}add(e,t,n,s=[0,0,0],r=[0,0,0]){e.clearGroups(),e.applyMatrix4(new Ze().compose(new R(...s),new Vt().setFromEuler(new $t(...r)),new R(1,1,1)));const o=e.index?e.toNonIndexed():e;e!==o&&e.dispose(),Zr.set(n);const a=new Float32Array(o.attributes.position.count*3);for(let c=0;c<a.length;c+=3)a[c]=Zr.r,a[c+1]=Zr.g,a[c+2]=Zr.b;o.setAttribute("color",new vt(a,3)),this.batches.has(t)||this.batches.set(t,[]),this.batches.get(t).push(o)}box(e,t,n,s,r=[0,0,0]){this.add(new an(...e),n,s,t,r)}rod(e,t,n,s,r,o=5){const a=new R(...e),c=new R(...t),l=c.clone().sub(a),h=new pn(n,n,l.length(),o);h.applyQuaternion(new Vt().setFromUnitVectors(new R(0,1,0),l.normalize())),this.add(h,s,r,a.add(c).multiplyScalar(.5).toArray())}path(e,t,n,s,r=4){for(let o=1;o<e.length;o++)this.rod(e[o-1],e[o],t,n,s,r)}finish(e){const t=new Ht;t.name=e;for(const[n,s]of this.batches){const r=Ps(s,!1);s.forEach(a=>a.dispose()),r.computeBoundingBox(),r.computeBoundingSphere();const o=new at(r,M2[n]);o.name=`${e}-${n}`,o.receiveShadow=!0,t.add(o)}return t}}function y2(i,e,t){const n=[],s=[],r=[];for(let a=0;a<=i;a++)for(let c=0;c<=e;c++)if(n.push(...t(a/i,c/e)),s.push(c/e*2,a/i*7),a<i&&c<e){const l=a*(e+1)+c;r.push(l,l+e+1,l+1,l+1,l+e+1,l+e+2)}const o=new it;return o.setAttribute("position",new Be(n,3)),o.setAttribute("uv",new Be(s,2)),o.setIndex(r),o.computeVertexNormals(),o}function S2(i){const e=new it;return e.setAttribute("position",new Be(i.flat(),3)),e.setAttribute("uv",new Be([0,0,1,0,1,1,0,1],2)),e.setIndex([0,1,2,0,2,3]),e.computeVertexNormals(),e}function Ld(i,e,t,n,s){const r=new $n;e.forEach(([a,c],l)=>l?r.lineTo(a,-c):r.moveTo(a,-c)),r.closePath();const o=new pi(r);o.rotateX(-Math.PI/2),i.add(o,"metal",s,[0,t,0]);for(let a=0;a<e.length;a++){const[c,l]=e[a],[h,u]=e[(a+1)%e.length];i.add(S2([[c,t,l],[h,t,u],[h*.94,-n,u*.97],[c*.94,-n,l*.97]]),"metal",s)}}function Js(i,e,t,n,s,r=Math.PI/2){i.add(new Dn(s,s*.3,5,10),"rubber",1579801,[e,t,n],[0,r,0]),i.rod([e,t+s*1.5,n],[e,t+s*.3,n],.033,"metal",7233604,4)}function Hl(i,e,t,n,s=1){i.box([.72*s,.09*s,.47*s],[e,t,n],"metal",3357497);for(const r of[-1,1])i.rod([e+r*.2*s,t,n],[e+r*.2*s,t+.43*s,n],.13*s,"metal",5858141,7),i.box([.28*s,.065*s,.32*s],[e+r*.2*s,t+.44*s,n],"metal",7042928)}function Dd(i,e,t,n,s=.5){for(let r=s;r>s*.35;r-=s*.19){const o=Array.from({length:13},(a,c)=>[e+Math.cos(c/12*Math.PI*2)*r,t,n+Math.sin(c/12*Math.PI*2)*r*.75]);i.path(o,.042,"metal",11182469,4)}}function ci(i,e,t,n=.11){i.box([n*1.6,n*2,n],e,"lamp",t)}function b2(i){const e=new Pd,t=i%3,n=[3552817,4733489,2701107],s=[8357756,6450260,7830648];Ld(e,[[-4.8,-24],[4.8,-24],[6.25,-21.4],[6.25,21.4],[4.8,24],[-4.8,24],[-6.25,21.4],[-6.25,-21.4]],1.12,1.15,n[t]);for(const c of[-1,1]){e.box([.19,.16,42.9],[c*6.12,1.24,0],"metal",8417364),e.box([.17,.14,42.3],[c*6.28,.3,0],"rubber",1778464),e.box([.11,.1,41.4],[c*5.66,1.45,-.25],"metal",7038805);for(let l=-19;l<21;l+=3.3)e.box([.035,.82,.13],[c*6.257,.61,l],"metal",7558979),e.box([.042,.32+wo(l,i)*.3,.16+wo(i,l)*.22],[c*6.276,.8,l+.28],"metal",6705470)}const o=(c,l)=>1.39+Math.sin(c*Math.PI)*1.53-Math.sin(l*Math.PI*14)**2*.065;e.add(y2(42,14,(c,l)=>[(l-.5)*10.78,o(l,c),-20.4+c*38.4]),"canvas",s[t]);for(const c of[-20.4,18]){const l=[[-5.39,1.28,c],[5.39,1.28,c]];for(let h=14;h>=0;h--)l.push([(h/14-.5)*10.78,o(h/14,c<0?0:1),c]);for(let h=1;h<l.length-1;h++){const u=new it,d=c<0?[l[0],l[h],l[h+1]]:[l[0],l[h+1],l[h]];u.setAttribute("position",new Be(d.flat(),3)),u.setAttribute("uv",new Be([0,0,1,1,0,1],2)),u.computeVertexNormals(),e.add(u,"canvas",s[t])}}for(let c=0;c<=14;c++){const l=-20.4+c/14*38.4;e.path(Array.from({length:13},(h,u)=>[(u/12-.5)*10.88,1.43+Math.sin(u/12*Math.PI)*1.53,l]),.039,"metal",5593929);for(const h of[-1,1])e.rod([h*5.43,1.42,l],[h*5.74,1.18,l+.13],.024,"metal",9406832,4)}for(const[c,l,h]of[[-2.6,-11.1,-.36],[2.6,7.8,.36]])e.box([1.14,.016,1.38],[c,2.54,l],"canvas",t===1?9607051:6056795,[0,0,h]);for(const c of[-1,1])for(const l of[-20.9,-17.7,-9,9,17.7,20.9])Js(e,c*6.22,.67,l,.46);for(const c of[-23.85,23.85])for(const l of[-3.8,3.8])Js(e,l,.62,c,.48,0);for(const c of[-22.5,22.5]){for(const l of[-1,1])Hl(e,l*3.85,1.14,c,1.3);e.box([1.2,.36,.36],[0,1.3,c<0?-23.5:23.5],"metal",6381137),e.box([.74,.15,.42],[0,1.49,c<0?-23.5:23.5],"rubber",1712155)}Dd(e,2.5,1.18,-22.2,.69),e.box([2.35,1.19,2.15],[-2.7,1.76,20.7],"paint",10922397),e.box([2.6,.13,2.45],[-2.7,2.43,20.7],"paint",t===1?6450260:7043700),e.box([1.55,.38,.035],[-2.7,1.98,19.615],"glass",3296077),e.box([.035,.42,.65],[-1.515,1.99,20.61],"glass",2637116),e.box([.46,.84,.035],[-2.7,1.65,21.785],"paint",6187361),e.rod([-4.66,1.15,21.7],[-4.66,3.11,21.7],.045,"metal",9214350),ci(e,[-4.66,3.14,21.7],16767392,.1),ci(e,[-5.75,1.42,-20.9],16725025,.075),ci(e,[5.75,1.42,-20.9],4251009,.075);const a=e.finish(`covered cargo barge ${t+1}`);return a.userData.lightSources=[{position:[-4.66,3.14,21.7],color:16765850,intensity:8,distance:5}],a}function w2(i){const e=new Pd,t=i%3,n=[3307125,2582156,4222560][t],s=[12411950,11093808,10251318][t],r=[[0,-8],[1.9,-7.7],[2.55,-6],[2.7,-3.5],[2.7,5.6],[2,7.6],[0,8],[-2,7.6],[-2.7,5.6],[-2.7,-3.5],[-2.55,-6],[-1.9,-7.7]];Ld(e,r,1.01,.98,2634544);const o=r.map(([u,d])=>[u*.94,d*.96]),a=new $n;o.forEach(([u,d],f)=>f?a.lineTo(u,-d):a.moveTo(u,-d)),a.closePath();const c=new pi(a);c.rotateX(-Math.PI/2),e.add(c,"paint",n,[0,1.04,0]),e.path([...r,r[0]].map(([u,d])=>[u,.87,d]),.17,"rubber",1516319,6);for(const u of[-1,1]){for(const d of[-5.7,-4.5,-3.1,-1.7,-.3,1.1,2.5,3.9,5.3])Js(e,u*2.73,.57,d,.4);Js(e,u*1.45,.5,-7.82,.46,0),Js(e,u*1.3,.51,7.89,.46,0)}e.box([3.36,1.73,4.37],[0,1.91,-2.02],"paint",13947836),e.box([3.54,.2,4.66],[0,2.85,-2.02],"paint",n),e.box([3.1,1.38,3.55],[0,3.63,-2],"paint",14802892),e.box([3.6,.2,4.03],[0,4.43,-2],"paint",s),e.box([3.7,.07,4.14],[0,4.54,-2],"paint",s);for(const u of[-.99,0,.99])e.box([.82,.73,.045],[u,3.78,-3.8],"glass",2375237);for(const u of[-1,1]){for(const m of[-2.96,-1.94,-.92])e.box([.045,.73,.84],[u*1.575,3.78,m],"glass",3429979);e.box([.045,.89,.77],[u*1.703,1.98,-2.2],"paint",8558215),e.box([.05,.34,.51],[u*1.731,2.16,-2.2],"glass",2505792);for(const m of[-3.39,-.93])e.box([.045,.45,.73],[u*1.705,2.04,m],"glass",3296333);const d=[u*2.08,1.11,.92],f=[u*2.08,2.88,-1.3];for(const m of[-.28,.28])e.rod([d[0]+m,d[1],d[2]],[f[0]+m,f[1],f[2]],.04,"metal",10136482);for(let m=0;m<=7;m++)e.box([.59,.055,.2],[d[0],d[1]+m/7*1.77,d[2]-m/7*2.22],"metal",10200474);e.rod([u*2.3,1.17,-6.32],[u*2.3,1.93,-6.32],.036,"paint",13290421),e.rod([u*2.4,1.17,-4.75],[u*2.4,1.93,-4.75],.036,"paint",13290421),e.rod([u*2.3,1.93,-6.32],[u*2.4,1.93,-4.75],.038,"paint",13290421),ci(e,[u*1.68,4.23,-3.49],u<0?16726060:3532426,.11),e.box([.2,.085,.26],[u*1.68,4.39,-3.49],"paint",s)}e.box([1.22,.69,.045],[0,3.74,-.203],"glass",3952455),e.rod([0,4.6,-2.18],[0,6.61,-2.18],.055,"paint",14145724,6),e.rod([-.61,5.59,-2.18],[.61,5.59,-2.18],.042,"paint",14145724),e.box([1.38,.13,.26],[0,5.03,-2.29],"paint",14277057),ci(e,[0,6.65,-2.18],16769454,.105),ci(e,[0,5.67,-2.18],16769454,.095),ci(e,[0,2.79,.26],16763267,.1),e.rod([.79,2.8,-.52],[.79,4.02,-.52],.17,"metal",3160885,7),e.box([.52,.07,.46],[.79,4.1,-.52],"metal",3291698),e.rod([-.8,4.54,-.38],[-.8,5.78,-.38],.019,"metal",13094073,5);const l=[[0,.1,10758948],[.1,.1,14736331],[.2,.2,3426403],[.4,.1,14736331],[.5,.1,10758948]];for(const[u,d,f]of l)e.box([.87,d,.015],[-.365,5.66-u-d*.5,-.36],"paint",f,[0,-.25,0]);e.box([2.3,.34,1.35],[0,1.23,3.14],"paint",n),e.rod([-.84,1.75,3.14],[.84,1.75,3.14],.45,"metal",6186837,10);for(const u of[-.89,.89])e.rod([u,1.32,3.14],[u,2.04,3.14],.14,"metal",7569523,7);for(let u=-.6;u<=.6;u+=.14)e.add(new Dn(.45,.039,4,12),"metal",11379328,[u,1.75,3.14],[0,Math.PI/2,0]);for(const u of[-1,1])e.rod([u*1.43,1.1,4.9],[u*1.43,2.23,4.9],.1,"metal",10922912);e.rod([-1.43,2.23,4.9],[1.43,2.23,4.9],.13,"metal",11579552),e.rod([0,1.73,3.6],[0,1.52,7.71],.068,"metal",11181690,6),e.box([1,.35,.36],[0,1.35,7.61],"metal",6779491);for(const u of[-1,1])Hl(e,u*1.5,1.1,6.05),Hl(e,u*1.21,1.1,-6.58,.8);Dd(e,1.67,1.11,2.1,.44),e.add(new Dn(.34,.095,5,12),"paint",13464632,[-1.74,2.13,-.15],[0,Math.PI/2,0]),ci(e,[0,1.71,7.42],16768952,.09);const h=e.finish(`Chao Phraya working tug ${t+1}`);return h.userData.lightSources=[{position:[0,2.69,.61],color:16763535,intensity:15,distance:7}],h}function E2(i="barge",e=0){const t=i==="tug"?"tug":"barge",n=(Math.trunc(e)%3+3)%3,s=`${t}:${n}`;Ba.has(s)||Ba.set(s,t==="tug"?w2(n):b2(n));const r=Ba.get(s).clone(!0);return r.userData.kind=t,r.userData.spec=Cd[t],r.userData.towPoints=t==="tug"?{bow:[0,1.3,-7.8],stern:[0,1.52,7.8]}:{bow:[0,1.49,-23.5],stern:[0,1.49,23.5]},r}const T2=1.14,Jr=1.18,fu=Object.freeze({desktop:96,mobile:64}),pu=["cruise","ferry","longtail","electric","fishing","ferry","longtail","fishing"],Qr=900;function A2(i,e=16,t=48){if(i!==3&&i!==4)throw new RangeError("A convoy needs three or four barges");return Array.from({length:i},(n,s)=>e/2+28+t/2+s*(t+12))}function Id(i,e,t,n=1,s=12){const r=l=>{const h=i.sample(l),u=i.sample(l,Jt(t,-h.width*.34,h.width*.34)),d=l<0?l:l>i.length?l-i.length:0;return u.x-=Math.sin(u.heading)*d,u.z-=Math.cos(u.heading)*d,u},o=r(e),a=r(e-s*.35),c=r(e+s*.35);return{x:o.x,z:o.z,heading:Math.atan2(a.x-c.x,a.z-c.z)+(n===1?0:Math.PI)}}function C2(i,e,t=!1){const n=[],s=[],r=t?fu.mobile:fu.desktop,o=(a,c,l,h,u,d)=>({kind:a,variation:c,...e[a],scale:Jr,length:e[a].length*Jr,width:e[a].width*Jr,distance:l,direction:h,lane:u,speed:d,actualSpeed:d,slow:0,nearCooldown:0,wakeClock:0,x:0,z:0,heading:0,vx:0,vz:0});for(let a=0;a<r;a++){const c=pu[a%pu.length],l=a%2?1:-1,h=(l===1?-1:1)*(c==="fishing"?74:28+Math.floor(a/2)%3*20);n.push(o(c,a,45+a/r*(i.length-90),l,h,e[c].maxSpeed*(.8+a%4*.12)*T2))}for(let a=0;a<(t?2:3);a++){const c=a%2?4:3,l=a%2?-1:1,h=o("tug",a,1040+a*(i.length-1400)/((t?2:3)-1),l,-l*13.5,e.tug.maxSpeed*(.88+a*.03)),u={tug:h,barges:[],offsets:A2(c,h.length,e.barge.length*Jr)};h.convoy=u;for(let d=0;d<c;d++){const f=o("barge",a*4+d,h.distance-l*u.offsets[d],l,h.lane,h.speed);f.convoy=u,f.towed=!0,u.barges.push(f)}s.push(u),n.push(h,...u.barges)}for(const a of n)Object.assign(a,Id(i,a.distance,a.lane,a.direction,a.length));return{traffic:n,convoys:s}}function R2(i,e,t){const{traffic:n,convoys:s}=i;for(const r of n){if(r.slow=Math.max(0,r.slow-t*.6),r.nearCooldown=Math.max(0,r.nearCooldown-t),r.towed)continue;let o=r.speed/(1+r.slow);r.convoy&&(o/=1+Math.max(...r.convoy.barges.map(a=>a.slow))*.15);for(const a of n){if(a===r||r.convoy&&a.convoy===r.convoy||a.direction!==r.direction||Math.abs(a.lane-r.lane)>(a.width+r.width)/2+4)continue;const c=(a.distance-r.distance)*r.direction;if(c<=0)continue;const l=c-(a.length+r.length)/2;l<65&&(o=Math.min(o,Math.max(0,(a.actualSpeed??a.speed)+(l-14)*.32)))}r.nextSpeed=o}for(const r of n)r.towed||(r.actualSpeed=r.nextSpeed,r.distance+=r.actualSpeed*t*r.direction,r.distance>e.length+Qr&&(r.distance=-Qr),r.distance<-Qr&&(r.distance=e.length+Qr));for(const r of s)r.barges.forEach((o,a)=>{o.distance=r.tug.distance-r.tug.direction*r.offsets[a],o.actualSpeed=r.tug.actualSpeed});for(const r of n)Object.assign(r,Id(e,r.distance,r.lane,r.direction,r.length)),r.vx=-Math.sin(r.heading)*r.actualSpeed,r.vz=-Math.cos(r.heading)*r.actualSpeed}const Ha=new Map,ka={longtail:3,cruise:2,ferry:3,electric:1,fishing:2},P2={body:new wt({vertexColors:!0,roughness:.75}),dark:new wt({vertexColors:!0,roughness:.55,metalness:.1}),window:new dn({vertexColors:!0}),lamp:new dn({vertexColors:!0})},wi=14276555,Ga=10183998,Eo=1517612,$r=13460520;function mu(i){const e=new Map,t=r=>{const o=r.isMesh?new at(r.geometry,r.material):new Ht;e.set(r,o),o.name=r.name,o.position.copy(r.position),o.quaternion.copy(r.quaternion),o.scale.copy(r.scale),o.visible=r.visible,o.layers.mask=r.layers.mask,o.renderOrder=r.renderOrder,o.castShadow=r.castShadow,o.receiveShadow=r.receiveShadow,o.frustumCulled=r.frustumCulled;for(const a of r.children)o.add(t(a));return o.updateMatrix(),o.matrixAutoUpdate=!1,o},n=t(i),s=r=>r?.isObject3D?e.get(r):Array.isArray(r)?r.map(s):r&&typeof r=="object"?Object.fromEntries(Object.entries(r).map(([o,a])=>[o,s(a)])):r;for(const[r,o]of e)o.userData=s(r.userData);return n.userData.motor&&(n.userData.motor.matrixAutoUpdate=!0),n.userData.propeller&&(n.userData.propeller.matrixAutoUpdate=!0),n}class L2{constructor(){this.parts=new Map}add(e,t,n,s=[0,0,0],r=[0,0,0]){const o=new Ze().compose(new R(...s),new Vt().setFromEuler(new $t(...r)),new R(1,1,1));e.applyMatrix4(o);const a=e.index?e.toNonIndexed():e;a!==e&&e.dispose();const c=new Fe(n).multiplyScalar(t==="lamp"?1.6:1),l=new Float32Array(a.attributes.position.count*3);for(let h=0;h<l.length;h+=3)l[h]=c.r,l[h+1]=c.g,l[h+2]=c.b;a.setAttribute("color",new vt(l,3)),a.deleteAttribute("uv"),a.attributes.normal||a.computeVertexNormals(),this.parts.has(t)||this.parts.set(t,[]),this.parts.get(t).push(a)}box(e,t,n=wi,s="body",r){this.add(new an(...e),s,n,t,r)}beam(e,t,n,s=Eo,r="dark"){const o=new R(...e),a=new R(...t),c=a.clone().sub(o),l=new pn(n,n,c.length(),4);l.applyQuaternion(new Vt().setFromUnitVectors(new R(0,1,0),c.normalize())),this.add(l,r,s,o.add(a).multiplyScalar(.5).toArray())}hull(e,t,n,s,r,o=0,a=!1){const c=[[0,.035],[.1,.58],[.25,.94],[.47,1],[.73,.97],[.9,.83],[1,.52]],l=[],h=[];for(const[f,m]of c){const v=m*t/2,g=n+(f<.1?.22:0),p=(f-.5)*e;l.push(-v+o,g,p,-v*.68+o,-s,p,v*.68+o,-s,p,v+o,g,p)}for(let f=0;f<c.length-1;f++)for(let m=0;m<(a?3:4);m++){const v=f*4+m,g=f*4+(m+1)%4,p=(f+1)*4+m,M=(f+1)*4+(m+1)%4;h.push(v,g,p,g,M,p)}h.push(0,2,1,0,3,2);const u=(c.length-1)*4;h.push(u,u+1,u+2,u,u+2,u+3);const d=new it;if(d.setAttribute("position",new Be(l,3)),d.setIndex(h),this.add(d,"body",r),a){this.box([t*.69,.1,e*.74],[o,.05,e*.03],5059875);for(const f of[-1,1])this.beam([o+f*t*.42,n,-e*.34],[o+f*t*.43,n,e*.4],.065,r,"body")}}nav(e,t,n,s){this.box([.16,.19,.22],[-e,t,n],16726310,"lamp"),this.box([.16,.19,.22],[e,t,n],3530119,"lamp"),this.box([.17,.21,.17],[0,t+.2,s],16768922,"lamp")}person(e,t,n,s=2586231){this.box([.38,.57,.3],[e,t+.71,n],s),this.box([.35,.18,.58],[e,t+.4,n-.1],Eo,"dark"),this.add(new Pi(.18),"body",12094311,[e,t+1.1,n])}finish(e){const t=new Ht;t.name=e;for(const[n,s]of this.parts){const r=Ps(s,!1);for(const a of s)a.dispose();r.computeBoundingSphere();const o=new at(r,P2[n]);o.name=`${e}-${n}`,t.add(o)}return t}}function D2(i,e){const t=new L2;if(i==="cruise"){t.hull(55,13,1.45,1.6,wi);for(const[n,s,r,o]of[[1.48,11.65,44,1],[4.08,11.55,43,1.4],[6.54,10.25,39.5,1.8]])t.box([s,.24,r],[0,n,o]);for(const n of[2.8,5.4]){t.box([10.5,2,39.8],[0,n,1.3],Eo,"dark");for(const s of[-1,1])for(let r=0;r<15;r++)t.box([.07,1.4,2.28],[s*5.29,n,-17.1+r*2.62],r%4?9134900:5127725,"window");t.box([8.9,1.25,.06],[0,n,21.24],9134900,"window")}for(const n of[-1,1]){for(const s of[1.68,4.3,6.8])t.box([.09,.1,40],[n*(s>6?4.95:5.76),s,1.5],16763521,"lamp");t.beam([n*4.2,6.7,-15.5],[n*4.2,9,-15.5],.045,wi,"body"),t.beam([n*4.2,9,-15.5],[n*4.2,8.8,19.5],.025,14659186,"lamp")}t.box([5.1,1.9,3.25],[0,7.6,-16.45]),t.box([4.5,.98,.06],[0,7.8,-18.11],2110524,"dark"),t.box([5.4,.18,3.6],[0,8.65,-16.45]),t.box([8.8,.18,6],[0,9.12,16.7]),t.beam([0,8.7,-15.9],[0,10.25,-15.9],.06,wi,"body"),t.nav(5.3,6.25,-16.8,22)}else if(i==="ferry"){t.hull(30,5.5,.97,.7,wi);for(const n of[-1,1]){t.box([.15,.38,23.2],[n*2.6,1.18,.7],$r),t.box([.1,.23,22.5],[n*2.53,3.37,.7],$r),t.box([.05,.08,20],[n*2.36,3.24,.7],10978124,"window");for(let s=-9.8;s<12;s+=4.2)t.box([.09,2.15,.09],[n*2.44,2.2,s])}t.box([5.11,.19,22.5],[0,3.45,.7]),t.box([3.5,1.55,2.67],[0,1.94,-10.49]),t.box([3.1,.99,.06],[0,2.08,-11.85],2373692,"dark"),t.box([3.85,.14,3],[0,2.84,-10.49],$r);for(const n of[-5,1,7])t.person(n%2?-.8:.8,1.04,n);t.beam([0,1.3,-13.5],[0,4.1,-13.5],.035,Eo),t.box([.04,.6,1.3],[0,3.7,-12.9],e%3===1?13872453:$r),t.nav(2.28,3.32,-9.1,12.6)}else if(i==="electric"){for(const n of[-1,1])t.hull(24,2.1,1.03,.63,wi,n*2.36);t.box([6.8,.3,20.4],[0,1.18,0]),t.box([5.8,1.8,17.8],[0,2.58,0],2176312,"dark"),t.box([6.39,.24,18.82],[0,3.69,0]),t.box([5.8,.05,17.6],[0,3.84,0],1584185,"dark");for(const n of[-1,1]){for(let s=-7;s<=7;s+=2)t.box([.06,1.48,1.72],[n*2.93,2.55,s],6523790,"window");t.box([.12,.09,18.5],[n*3.18,3.65,0],7980767,"lamp")}t.nav(3.04,3.6,-7.2,9)}else if(i==="longtail"){t.hull(12.4,2.35,.78,.38,Ga,0,!0),t.box([2.17,.18,6.2],[0,2.08,.15],e%3===1?10301993:1207401);for(const n of[-1,1])for(const s of[-2.6,2.9])t.box([.055,1.4,.055],[n*1.02,1.42,s],11187118);for(const n of[-1.2,1.9])t.person(-.35,.2,n,11844012);t.person(-.16,.4,4.21,2509135),t.box([.74,.57,.9],[0,1.21,5.4],1845544,"dark"),t.beam([0,1.07,5.4],[0,-.15,8.9],.045,8754582),t.beam([0,.75,-5.5],[0,1.78,-6.22],.085,Ga,"body"),t.box([.25,.48,.16],[0,1.36,-6.13],13069865),t.nav(1.08,2.06,-2.66,4.7)}else{t.hull(6.5,1.55,.4,.27,e%2?5255713:Ga,0,!0);for(const n of[-1.86,.3,2.08])t.box([1.07,.08,.3],[0,.36,n],12096096);t.person(0,-.02,.32),t.box([.48,.38,.55],[.2,.27,1.45],wi),t.beam([.12,.7,-.02],[1.4,1.82,-2.5],.023,5520421),t.box([.12,.18,.12],[0,.96,2.55],16762240,"lamp")}return t.finish(`${i}-distant`)}function kl(i,e,t=i?.userData?.mobile??!1){if(!i?.isLOD||i.levels.length!==2||typeof i.userData.setDetail!="function")return;const s=e<(t?160:220)*(i.userData.detail==="near"?1.06:.94);i.levels[0].object.visible=s,i.levels[1].object.visible=!s,i.userData.detail=s?"near":"far"}function I2(i,e=0,t=!1){const n=Object.hasOwn(So,i)?i:"longtail",s=(Math.trunc(e)%ka[n]+ka[n])%ka[n],r=`${n}:${s}`;Ha.has(r)||Ha.set(r,{near:Ad(n,s),far:D2(n,s)});const o=Ha.get(r),a=mu(o.near),c=mu(o.far),l=new yp;return l.name=`${n}-traffic`,l.autoUpdate=!1,l.addLevel(a,0),l.addLevel(c,t?160:220),l.userData={...a.userData,kind:n,spec:So[n],mobile:t,detail:"near"},l.userData.setDetail=h=>kl(l,h),kl(l,0),l}function U2(i,e){const n=[];for(const l of e){let h=l.tug;for(const u of l.barges)n.push([h,u]),h=u}const s=new Float32Array(n.length*10*2*3),r=new it;r.setAttribute("position",new vt(s,3).setUsage(As));const o=new Ap(r,new Ju({color:8945510}));o.name="articulated-convoy-towlines",o.frustumCulled=!1,i.add(o);const a=new R,c=new R;return{update(){let l=0;for(const[h,u]of n){h.mesh.updateMatrixWorld(),u.mesh.updateMatrixWorld(),h.mesh.localToWorld(a.fromArray(h.mesh.userData.towPoints.stern)),u.mesh.localToWorld(c.fromArray(u.mesh.userData.towPoints.bow));for(let d=0;d<10;d++)for(const f of[d/10,(d+1)/10])s[l++]=us.lerp(a.x,c.x,f),s[l++]=Math.max(.35,us.lerp(a.y,c.y,f)-Math.sin(f*Math.PI)*.65),s[l++]=us.lerp(a.z,c.z,f)}r.attributes.position.needsUpdate=!0}}}function N2(i,e){const t=e.filter(s=>s.mesh.isLOD).map(s=>({near:s.mesh.levels[0].object,far:s.mesh.levels[1].object,nearVisible:!1,farVisible:!1})),n=i.onBeforeRender;i.onBeforeRender=function(...s){for(const r of t)r.nearVisible=r.near.visible,r.farVisible=r.far.visible,r.near.visible=!1,r.far.visible=!0;try{return n.apply(this,s)}finally{for(const r of t)r.near.visible=r.nearVisible,r.far.visible=r.farVisible}}}class F2{constructor({pause:e,horn:t,recover:n}){this.keys=new Set,this.touch={steer:0,gas:!1,brake:!1,boost:!1,drift:!1},this.enabled=!1,this.previousPad={},window.addEventListener("keydown",s=>{["INPUT","SELECT","BUTTON"].includes(s.target.tagName)&&s.code==="Space"||(["ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Space"].includes(s.code)&&s.preventDefault(),this.keys.add(s.code),s.repeat||(s.code==="Escape"&&e(),s.code==="KeyH"&&this.enabled&&t(),s.code==="KeyR"&&this.enabled&&n()))}),window.addEventListener("keyup",s=>this.keys.delete(s.code)),window.addEventListener("blur",()=>{this.clear(),e(!0)}),document.addEventListener("visibilitychange",()=>{document.hidden&&(this.clear(),e(!0))}),this.pause=e,this.horn=t,this.recover=n}clear(){this.keys.clear(),this.touch={steer:0,gas:!1,brake:!1,boost:!1,drift:!1},document.querySelectorAll(".pressed").forEach(e=>e.classList.remove("pressed")),document.querySelector("#steer-pad")?.style.setProperty("--thumb","0px")}bind(){for(const r of document.querySelectorAll("[data-control]")){const o=r.dataset.control;r.addEventListener("pointerdown",c=>{c.preventDefault(),r.setPointerCapture(c.pointerId),this.touch[o]=!0,r.classList.add("pressed")});const a=()=>{this.touch[o]=!1,r.classList.remove("pressed")};r.addEventListener("pointerup",a),r.addEventListener("pointercancel",a),r.addEventListener("lostpointercapture",a)}const e=document.querySelector("#steer-pad");let t=null;const n=r=>{const o=e.getBoundingClientRect();this.touch.steer=Math.max(-1,Math.min(1,(r.clientX-o.left-o.width/2)/(o.width*.36))),e.style.setProperty("--thumb",`${this.touch.steer*30}px`)};e.addEventListener("pointerdown",r=>{t=r.pointerId,e.setPointerCapture(t),n(r)}),e.addEventListener("pointermove",r=>{t===r.pointerId&&n(r)});const s=()=>{t=null,this.touch.steer=0,e.style.setProperty("--thumb","0px")};e.addEventListener("pointerup",s),e.addEventListener("pointercancel",s),e.addEventListener("lostpointercapture",s)}read(){const e=this.keys,t=this.touch,n=navigator.getGamepads?.()?.find(l=>l?.connected);let s=(e.has("KeyD")||e.has("ArrowRight")?1:0)-(e.has("KeyA")||e.has("ArrowLeft")?1:0);t.steer&&(s=t.steer);let r=e.has("KeyW")||e.has("ArrowUp")||t.gas||t.boost||t.drift,o=e.has("KeyS")||e.has("ArrowDown")||t.brake,a=e.has("ShiftLeft")||e.has("ShiftRight")||t.boost,c=e.has("Space")||t.drift;if(n){Math.abs(n.axes[0])>.12&&(s=n.axes[0]),r=r||n.buttons[7]?.value>.1,o=o||n.buttons[6]?.value>.1,a=a||n.buttons[0]?.pressed,c=c||n.buttons[1]?.pressed;for(const[l,h]of[[9,this.pause],[3,this.horn],[2,this.recover]])n.buttons[l]?.pressed&&!this.previousPad[l]&&h();this.previousPad=Object.fromEntries(n.buttons.map((l,h)=>[h,l.pressed]))}return this.enabled?{steer:s,gas:r,brake:o,boost:a,drift:c}:{}}}class O2{constructor(e,t){this.count=t?650:1400,this.index=0,this.life=new Float32Array(this.count),this.velocity=new Float32Array(this.count*3),this.positions=new Float32Array(this.count*3),this.sizes=new Float32Array(this.count),this.alphas=new Float32Array(this.count),this.baseSize=new Float32Array(this.count);const n=new it;n.setAttribute("position",new vt(this.positions,3)),n.setAttribute("size",new vt(this.sizes,1)),n.setAttribute("alpha",new vt(this.alphas,1)),this.geometry=n;const s=new xt({transparent:!0,depthWrite:!1,blending:Di,uniforms:{color:{value:new Fe("#9db9b7")}},vertexShader:"attribute float size;attribute float alpha;varying float a;void main(){a=alpha;vec4 p=modelViewMatrix*vec4(position,1.);gl_PointSize=clamp(size*420./max(1.,-p.z),1.,24.);gl_Position=projectionMatrix*p;}",fragmentShader:"uniform vec3 color;varying float a;void main(){float d=length(gl_PointCoord-.5)*2.;if(d>1.)discard;float foam=(1.-smoothstep(.15,1.,d));gl_FragColor=vec4(color,a*foam);}",toneMapped:!1});this.mesh=new Qu(n,s),this.mesh.frustumCulled=!1,this.mesh.layers.set(1),e.add(this.mesh)}emit(e,t,n,s,r=1){const o=this.index++%this.count,a=o*3,c=Math.random()>.5?1:-1,l=Math.cos(n),h=-Math.sin(n);this.positions[a]=e+l*c*(1+Math.random()),this.positions[a+1]=.18+Math.random()*.25,this.positions[a+2]=t+h*c*(1+Math.random()),this.velocity[a]=l*c*(1.5+Math.random()*2)+Math.sin(n)*s*.05,this.velocity[a+1]=Math.random()*(s>25?2:.3),this.velocity[a+2]=h*c*(1.5+Math.random()*2)+Math.cos(n)*s*.05,this.life[o]=1.8+Math.random(),this.baseSize[o]=r*.58}update(e){for(let t=0;t<this.count;t++){if(this.life[t]<=0){this.alphas[t]=0;continue}this.life[t]-=e;const n=t*3;this.positions[n]+=this.velocity[n]*e,this.positions[n+2]+=this.velocity[n+2]*e,this.positions[n+1]=Math.max(.14,this.positions[n+1]+this.velocity[n+1]*e),this.velocity[n+1]-=e*3,this.sizes[t]=this.baseSize[t]*(3.3-this.life[t])*.8,this.alphas[t]=Math.min(.18,this.life[t]*.1)}for(const t of Object.values(this.geometry.attributes))t.needsUpdate=!0}clear(){this.life.fill(0),this.alphas.fill(0)}}class z2{constructor(e,t=48){this.trails=new Map,this.max=t*40*18,this.positions=new Float32Array(this.max*3),this.uv=new Float32Array(this.max*2),this.alpha=new Float32Array(this.max);const n=this.geometry=new it;n.setAttribute("position",new vt(this.positions,3)),n.setAttribute("uv",new vt(this.uv,2)),n.setAttribute("aFade",new vt(this.alpha,1)),n.setDrawRange(0,0);const s=this.material=new xt({transparent:!0,depthWrite:!1,side:Bt,uniforms:{time:{value:0}},vertexShader:"attribute float aFade;varying float fade;varying vec2 vUv;varying vec2 riverPoint;void main(){fade=aFade;vUv=uv;riverPoint=position.xz;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:`varying float fade;varying vec2 vUv;varying vec2 riverPoint;uniform float time;
 float hash(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}
 float noise(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);return mix(mix(hash(i),hash(i+vec2(1,0)),f.x),mix(hash(i+vec2(0,1)),hash(i+vec2(1,1)),f.x),f.y);}
 // Interpolated UVs and GPU sine approximations can stray just outside [0,1].
 // A negative fractional-power base creates NaNs that bloom spreads over the view.
 void main(){float edge=pow(max(0.,sin(clamp(vUv.x,0.,1.)*3.14159)),.75);vec2 p=riverPoint*2.4+vec2(time*.12,-time*.08);float n=noise(p)*.65+noise(p*3.1)*.35;
 float foam=smoothstep(.24,.70,n)*(.6+.4*noise(p*.4));gl_FragColor=vec4(vec3(.33,.41,.40),foam*edge*fade);
 #include <tonemapping_fragment>
 #include <colorspace_fragment>
 }`});this.mesh=new at(n,s),this.mesh.frustumCulled=!1,this.mesh.layers.set(1),e.add(this.mesh),this.clock=0,this.geometryAge=0;for(const r of Object.values(n.attributes))r.setUsage(As)}clear(){this.trails.clear(),this.geometry.setDrawRange(0,0)}update(e,t){if(this.material.uniforms.time.value+=e,this.geometryAge+=e,this.geometryAge<1/30)return;e=this.geometryAge,this.geometryAge=0,this.clock+=e;const n=this.clock>.07;n&&(this.clock=0);let s=0;const r=(o,a,c,l,h)=>{if(s>=this.max)return;const u=s*3;this.positions[u]=o,this.positions[u+1]=.15+Math.sin(o*.47+a*.28+this.material.uniforms.time.value*1.1)*.095+Math.sin(a*.73-o*.22-this.material.uniforms.time.value*1.42)*.038,this.positions[u+2]=a,this.uv[s*2]=c,this.uv[s*2+1]=l,this.alpha[s]=h,s++};for(const o of this.trails.values()){for(const a of o)a.age+=e;for(;o.length&&o.at(-1).age>2.4;)o.pop()}for(const o of t){let a=this.trails.get(o);a||(a=[],this.trails.set(o,a));const c=Math.hypot(o.vx,o.vz);n&&c>2&&(a.unshift({x:o.x+Math.sin(o.heading)*(o.length||12)*.45,z:o.z+Math.cos(o.heading)*(o.length||12)*.45,heading:o.heading,age:0,width:o.width||2.35,speed:c}),a.length>39&&a.pop());for(let l=1;l<a.length;l++){const h=a[l-1],u=a[l];for(const d of[-1,0,1]){const f=p=>{const M=p.width*.35+p.age*(1.8+p.speed*.035),_=.35+p.age*(.8+p.width*.12),x=Math.cos(p.heading)*(d||1),w=-Math.sin(p.heading)*(d||1);if(d===0){const A=p.width*.18+p.age*.38;return[{x:p.x-x*A,z:p.z-w*A},{x:p.x+x*A,z:p.z+w*A}]}return[{x:p.x+x*M,z:p.z+w*M},{x:p.x+x*(M+_),z:p.z+w*(M+_)}]},m=f(h),v=f(u),g=p=>Math.max(0,1-p.age/2.4)*Math.min(1,p.age*12)*(d===0?.6:.74);for(const[p,M,_,x]of[[m[0],0,l-1,g(h)],[m[1],1,l-1,g(h)],[v[0],0,l,g(u)],[m[1],1,l-1,g(h)],[v[1],1,l,g(u)],[v[0],0,l,g(u)]])r(p.x,p.z,M,_*.07,x)}}}this.geometry.setDrawRange(0,s);for(const o of Object.values(this.geometry.attributes))o.clearUpdateRanges(),o.addUpdateRange(0,s*o.itemSize),o.needsUpdate=!0}}function Ud(i,e,t=0){const n=i.createGain(),s=i.createStereoPanner();s.pan.value=Math.max(-1,Math.min(1,t)),n.connect(s).connect(e);const r=[],o=[n,s];let a;const c=new Promise(d=>{a=d});let l=0,h=!1;function u(){h||(h=!0,o.forEach(d=>d.disconnect()),a())}return{output:n,nodes:o,sources:r,done:c,add(d){r.push(d),l++,d.onended=()=>{d.disconnect(),--l===0&&u()}},stop(){for(const d of r)try{d.stop()}catch{}u()}}}function gu(i,e,t,n,s=.025){const r=i.createGain();return r.gain.setValueAtTime(0,e),r.gain.linearRampToValueAtTime(n,e+s),r.gain.setTargetAtTime(1e-4,e+s,(t-s)/5),r.gain.setValueAtTime(0,e+t),r}function xu(i,e,t,{pan:n=0,distance:s=40}={}){const r={cruise:138,tug:122,barge:122,ferry:224,electric:256,longtail:328,fishing:380},o=r[t]||r.ferry,a=Ud(i,e,n),c=i.currentTime;a.output.gain.value=Math.max(1.9,2.05/(1+Math.max(0,s-35)/900));const l=i.createBiquadFilter();l.type="lowpass",l.frequency.value=2900,l.Q.value=.5,l.connect(a.output),a.nodes.push(l);for(const[h,u]of[[0,.19],[.29,.49]])for(const[d,f,m]of[[1,.28,"sawtooth"],[1.255,.24,"sawtooth"],[2,.2,"triangle"],[3,.12,"sine"]]){const v=i.createOscillator(),g=i.createGain(),p=c+h;g.gain.setValueAtTime(0,p),g.gain.linearRampToValueAtTime(f,p+.018),g.gain.linearRampToValueAtTime(f*.92,p+u*.8),g.gain.exponentialRampToValueAtTime(1e-4,p+u),v.type=m,v.frequency.setValueAtTime(o*d*.985,c+h),v.frequency.exponentialRampToValueAtTime(o*d,c+h+.035),v.connect(g).connect(l),a.nodes.push(g),a.add(v),v.start(c+h),v.stop(c+h+u+.02)}return a}function B2(i){const e=i.createBuffer(1,Math.ceil(i.sampleRate*1.3),i.sampleRate),t=e.getChannelData(0);for(let n=0;n<t.length;n++)t[n]=Math.random()*2-1;return e}function H2(i,e,t,{fatal:n=!0}={}){const s=Ud(i,e),r=i.currentTime;s.output.gain.value=n?.9:.55;for(const[c,l,h,u,d]of[[0,.2,1050,.55,"bandpass"],[.025,.48,200,.8,"lowpass"],[.07,1.05,1600,.35,"lowpass"]]){const f=i.createBufferSource(),m=i.createBiquadFilter(),v=gu(i,r+c,l,u,.007);f.buffer=t,m.type=d,m.frequency.setValueAtTime(h,r+c),m.frequency.exponentialRampToValueAtTime(Math.max(80,h*.23),r+c+l),m.Q.value=.7,f.connect(m).connect(v).connect(s.output),s.nodes.push(m,v),s.add(f),f.start(r+c),f.stop(r+c+l+.02)}const o=i.createOscillator(),a=gu(i,r,.55,.55,.008);return o.type="sine",o.frequency.setValueAtTime(112,r),o.frequency.exponentialRampToValueAtTime(34,r+.5),o.connect(a).connect(s.output),s.nodes.push(a),s.add(o),o.start(r),o.stop(r+.58),s}class k2{constructor(){this.effects=new Set,this.warningEffects=new Set,this.generation=0,this.muted=!1,this.musicEnabled=!0,this.active=!1,this.music=new Audio("/longtail/audio/exit-the-premises.mp3"),this.music.loop=!0,this.music.preload="none",this.music.volume=.32,this.lastHorn=-10}async start(){this.stopEffects(),this.active=!0;const e=++this.generation;try{if(!this.ctx){const t=window.AudioContext||window.webkitAudioContext;this.ctx=new t;const n=this.ctx;this.master=n.createGain(),this.master.gain.value=.5,this.master.connect(n.destination),this.ambience=n.createGain(),this.ambience.connect(this.master),this.musicSource=n.createMediaElementSource(this.music),this.musicGain=n.createGain(),this.musicGain.gain.value=.64,this.music.volume=1,this.musicSource.connect(this.musicGain).connect(this.ambience),this.engine=n.createGain(),this.engine.gain.value=0;const s=n.createBiquadFilter();s.type="lowpass",s.frequency.value=1e3,this.engine.connect(s).connect(this.ambience),this.oscs=[1,2,3].map((h,u)=>{const d=n.createOscillator(),f=n.createGain();return d.type=u===0?"sawtooth":"triangle",d.frequency.value=32*h,f.gain.value=[.12,.045,.025][u],d.connect(f).connect(this.engine),d.start(),d});const r=n.createBuffer(1,n.sampleRate*2,n.sampleRate),o=r.getChannelData(0);let a=0;for(let h=0;h<o.length;h++)a=(a+Math.random()*.12-.06)*.97,o[h]=a;this.noiseBuffer=r,this.impactBuffer=B2(n);const c=n.createBufferSource();c.buffer=r,c.loop=!0,this.waterGain=n.createGain(),this.waterGain.gain.value=0;const l=n.createBiquadFilter();l.type="highpass",l.frequency.value=280,c.connect(l).connect(this.waterGain).connect(this.ambience),c.start()}await this.ctx.resume(),e===this.generation&&this.active&&this.sync()}catch{this.active=!1}}sync(){this.master&&(this.master.gain.cancelScheduledValues(this.ctx.currentTime),this.master.gain.setTargetAtTime(this.muted||!this.active?0:.5,this.ctx.currentTime,.06)),this.active&&!this.muted&&this.musicEnabled?this.music.play().catch(()=>{}):this.music.pause()}pause(e=0){if(this.playerHornEffect?.stop(),this.stopEffects(e>0?this.warningEffects:this.effects),this.generation++,this.active=!1,this.music.pause(),this.ctx){const t=this.ctx.currentTime;this.engine.gain.setTargetAtTime(0,t,.02),this.waterGain.gain.setTargetAtTime(0,t,.02),this.master.gain.cancelScheduledValues(t),this.master.gain.setTargetAtTime(0,t+e,.04)}}stopEffects(e=this.effects){for(const t of e)t.stop();e.clear()}track(e,t=!1){this.effects.add(e),t&&this.warningEffects.add(e),e.done.then(()=>{this.effects.delete(e),this.warningEffects.delete(e)})}warningHorn(e,t){!this.ctx||!this.active||this.muted||(this.stopEffects(this.warningEffects),this.track(xu(this.ctx,this.master,e,t),!0))}impact(e=!0,t=1){if(!this.ctx||!this.active||this.muted)return;const n=H2(this.ctx,this.master,this.impactBuffer,{fatal:e});n.output.gain.value*=Math.min(1,Math.max(.1,t)),this.track(n)}mute(){return this.muted=!this.muted,this.sync(),this.muted}musicToggle(){return this.musicEnabled=!this.musicEnabled,this.sync(),this.musicEnabled}update(e,t){if(!this.ctx||!this.active)return;const n=this.ctx.currentTime,s=32+Math.abs(e)*2.6+(t?16:0);this.oscs.forEach((r,o)=>r.frequency.setTargetAtTime(s*(o+1),n,.09)),this.engine.gain.setTargetAtTime(.16+Math.min(Math.abs(e)/45,1)*.27,n,.08),this.waterGain.gain.setTargetAtTime(.06+Math.min(Math.abs(e),53)*.009,n,.1)}tone(e,t=.15,n=.14,s="sine",r=0,o=e){if(!this.ctx||this.muted||!this.active)return;const a=this.ctx,c=a.currentTime+r,l=a.createOscillator(),h=a.createGain();l.type=s,l.frequency.setValueAtTime(e,c),l.frequency.exponentialRampToValueAtTime(Math.max(20,o),c+t),h.gain.setValueAtTime(0,c),h.gain.linearRampToValueAtTime(n,c+.014),h.gain.exponentialRampToValueAtTime(1e-4,c+t),l.connect(h).connect(this.master),l.start(c),l.stop(c+t+.04),l.onended=()=>{l.disconnect(),h.disconnect()}}horn(){if(!this.ctx||!this.active||this.muted||this.ctx.currentTime-this.lastHorn<.28)return;this.lastHorn=this.ctx.currentTime,this.playerHornEffect?.stop();const e=xu(this.ctx,this.master,"longtail",{distance:0});return e.output.gain.value*=.75,this.playerHornEffect=e,this.track(e),e}event(e){e==="pickup"?(this.tone(660,.12,.15),this.tone(880,.22,.15,"sine",.12)):e==="delivered"?[523,659,784,1046].forEach((t,n)=>this.tone(t,.3,.16,"triangle",n*.09)):e==="near"||e==="slide"?this.tone(900,.14,.08,"triangle",0,1300):e==="crash"?this.impact():this.tone(240,.35,.12,"triangle",0,140)}}function G2(i,e,t=3.8){const n=Math.hypot(i.vx,i.vz);if(n<3)return null;const s={...i,length:12,width:2.5},r=e.x-s.x,o=e.z-s.z,a=e.vx-s.vx,c=e.vz-s.vz,l=Math.hypot(a,c),h=Math.hypot(r,o);if(l<1||r*a+o*c>=-h)return null;const u=Math.min(1.4,Math.max(.65,n*.025));if(h>l*t+(s.length+e.length)/2+u)return null;const d=p=>No(s,{...e,x:e.x+a*p,z:e.z+c*p}).gap;if(d(0)<=0)return null;let f=0,m=t;for(let p=0;p<18;p++){const M=f+(m-f)/3,_=m-(m-f)/3;d(M)<d(_)?m=_:f=M}let v=(f+m)/2;d(t)<d(v)&&(v=t);const g=d(v);if(g>u)return null;f=0,m=v;for(let p=0;p<14;p++){const M=(f+m)/2;d(M)>u?f=M:m=M}return{time:m,clearance:g,distance:h}}function V2(i,e){const t=G2(i,e);if(!t)return null;const n=-Math.sin(e.heading),s=-Math.cos(e.heading),r=i.x-e.x,o=i.z-e.z,a=r*n+o*s,c=r*s-o*n;if(a<-e.length*.25&&Math.abs(c)<-a*.65&&t.time>.85)return null;const h=Math.max(0,(e.length-e.width)/2),u=Math.max(-h,Math.min(h,a)),d=e.x+n*u-i.x,f=e.z+s*u-i.z,m=(-Math.sin(i.heading)*d-Math.cos(i.heading)*f)/Math.max(1,Math.hypot(d,f));return m<.87&&t.time>.85?null:{...t,aim:m,emergency:t.time<.85}}class W2{constructor(){this.reset()}reset(){this.clock=0,this.scan=0,this.nextHorn=0,this.cooldowns=new Map,this.primary=null,this.pending=null,this.pendingSince=0}update(e,t,n,s=t.heading){if(this.clock+=e,this.scan-=e,this.scan>0)return null;this.scan=.08;const r=new Map;for(const d of n){const f=d.convoy?.tug||d,m=V2(t,d);m&&(!r.has(f)||m.time<r.get(f).time)&&r.set(f,{...m,source:f})}let o=[...r.values()].sort((d,f)=>d.time-f.time)[0];const a=r.get(this.primary);if(a&&o?.source!==a.source&&!(o.time<1.2&&o.time+.6<a.time)&&(o=a),this.primary=o?.source||null,this.pending!==this.primary&&(this.pending=this.primary,this.pendingSince=this.clock),!o||this.clock<this.nextHorn||!o.emergency&&this.clock-this.pendingSince<.14||this.clock-(this.cooldowns.get(o.source)??-1/0)<(o.time<1.5?1.8:3.2))return null;const l=o.source.x-t.x,h=o.source.z-t.z,u=Math.hypot(l,h);return this.cooldowns.set(o.source,this.clock),this.nextHorn=this.clock+1.15,{...o,distance:u,pan:Math.max(-.85,Math.min(.85,(l*Math.cos(s)-h*Math.sin(s))/Math.max(u,1)))}}}const X2=850,Nd={cruise:"dinner cruise",ferry:"express ferry",electric:"electric ferry",longtail:"long-tail boat",fishing:"fishing boat",tug:"tugboat",barge:"cargo barge"};class q2{constructor(e){this.root=e,this.timer=null,this.overlay=document.createElement("div"),this.overlay.className="damage-overlay",this.overlay.hidden=!0,this.overlay.setAttribute("aria-hidden","true"),this.caption=document.createElement("div"),this.caption.className="crash-caption",this.caption.hidden=!0,this.caption.setAttribute("role","alert");const t=document.createElement("strong");t.textContent="CRASHED",this.detail=document.createElement("span"),this.caption.append(t,this.detail),e.append(this.overlay,this.caption)}reset(){clearTimeout(this.timer),this.timer=null,this.overlay.hidden=!0,this.caption.hidden=!0,this.root.classList.remove("crashed")}impact({fatal:e=!1,kind:t,intensity:n=1,onComplete:s}={}){this.reset(),this.overlay.hidden=!1,this.overlay.style.setProperty("--impact-opacity",String(Math.min(1,Math.max(.1,n)))),this.overlay.className=`damage-overlay ${e?"fatal":"minor"}`,this.overlay.getAnimations().forEach(r=>{r.cancel(),r.play()}),e?(this.root.classList.add("crashed"),this.detail.textContent=`Collision: ${Nd[t]||"boat"}`,this.caption.hidden=!1,this.timer=setTimeout(()=>{this.caption.hidden=!0,this.timer=null,s?.()},X2)):this.timer=setTimeout(()=>{this.overlay.hidden=!0,this.timer=null},900)}}function Y2(i){return null}class j2{constructor(e=1,t=!1){this.maximum=Math.min(e,t?1.75:1.5),this.minimum=Math.min(this.maximum,t?1.25:1),this.ratio=this.maximum,this.warmup=4,this.elapsed=0,this.frames=0,this.fastTime=0}update(e){if(!Number.isFinite(e)||e<=0||e>.12)return this.elapsed=0,this.frames=0,null;if(this.warmup>0)return this.warmup-=e,null;if(this.elapsed+=e,this.frames++,this.elapsed<3)return null;const t=this.frames/this.elapsed,n=this.ratio;return t<50?(this.ratio=Jt(this.ratio-.15,this.minimum,this.maximum),this.fastTime=0):t>58?(this.fastTime+=this.elapsed,this.fastTime>15&&(this.ratio=Math.min(this.maximum,this.ratio+.05),this.fastTime=0)):this.fastTime=0,this.elapsed=0,this.frames=0,Math.abs(this.ratio-n)>.001?this.ratio:null}}function K2(i,e,{ratio:t=null,size:n=null,smaa:s,fxaa:r,frameMeter:o,frameDt:a=0}={}){t!==null&&(i.setPixelRatio(t),e.setPixelRatio(t),s&&(t<=1.1?(s.enabled=!1,r.enabled=!0):t>=1.25&&(s.enabled=!0,r.enabled=!1))),n&&(i.setSize(n.width,n.height),e.setSize(n.width,n.height)),o?.begin(),e.render(),o?.end(a)}const he=i=>document.querySelector(i),Tn=matchMedia("(pointer:coarse)").matches||innerWidth<700,Z2='<svg viewBox="0 0 40 40" fill="none" aria-hidden="true"><path d="M4 23h32l-7 9H13L4 23Z" stroke="currentColor" stroke-width="1.7"/><path d="m12 20 4-10h14l5 10M20 10v12M6 37q5-4 10 0t10 0t10 0" stroke="currentColor" stroke-width="1.7"/></svg>',vu='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><path d="m10 5-5 4H2v6h3l5 4V5ZM14 8q5 4 0 8M17 4q9 8 0 16"/></svg>',J2='<svg viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M8 5v14M16 5v14"/></svg>',_u=`<div class="brand">${Z2}<div>BANGKOK<strong>LONGTAIL</strong></div></div>`,Mu="<span><b>W A S D</b> Pilot</span><span><b>SHIFT</b> Boost</span><span><b>SPACE</b> Slide</span><span><b>H</b> Horn</span><span><b>R</b> Recover</span>";he("#app").innerHTML=`
<canvas id="scene" aria-label="Bangkok long-tail boat game"></canvas><div id="vignette"></div>
<section id="menu" class="screen">
 <header>${_u}</header>
 <button class="round sound-menu sound-btn" aria-label="Mute sound">${vu}</button>
 <div class="menu-body"><div class="menu-content">
  <h1>LONGTAIL<br><em>AFTER DARK</em></h1>
  <p class="lede">Pick up passengers. Hard crashes end your run.</p>
  <div class="mode-tabs" role="group" aria-label="Game mode"><button id="mode-shift" class="active" aria-pressed="true">NIGHT SHIFT · 3 MIN</button><button id="mode-free" aria-pressed="false">FREE CRUISE</button></div>
  <button id="start" class="primary" disabled>PLAY</button>
  <div id="loading-note" role="status">Loading game…</div>
  <div class="record-preview"><div><div class="micro">BEST SCORE</div><div class="value" id="menu-best">฿ 0</div></div><p id="menu-record-note" hidden></p></div>
 </div></div>
 <footer class="menu-foot"><div class="keys">${Mu}</div><a class="credits" href="./credits.html" target="_blank" rel="noopener">Credits</a></footer>
</section>
<div id="hud" hidden><div class="hud-brand">${_u}</div><div class="timer"><div class="micro">NIGHT SHIFT</div><div class="timer-value">03:00</div></div><div class="hud-controls"><button class="round sound-btn" aria-label="Mute sound">${vu}</button><button id="horn" class="round" aria-label="Sound boat horn">♩</button><button id="recover" class="round" aria-label="Recover boat">↻</button><button id="pause" class="round" aria-label="Pause game">${J2}</button></div><div class="fare-panel"><div class="eyebrow" id="fare-label">FIND YOUR NEXT FARE</div><h2 id="fare-title">Choose any pier</h2><p id="fare-hint">Stop in a golden ring to pick up passengers.</p><div class="fare-row"><span id="fare-detail">Yellow dots on your map</span><strong id="fare-time"></strong></div><div class="fare-progress" hidden><i></i></div></div><div class="score-panel"><div class="micro">TONIGHT’S TAKINGS</div><div class="total" id="earnings">฿ 0</div><div class="fares" id="deliveries">0 FARES</div><div class="best">BEST <b id="hud-best">฿ 0</b></div></div><div id="navigation" hidden><svg viewBox="0 0 48 64" aria-label="Direction to destination"><path d="M24 2 46 30H32v31H16V30H2Z"/></svg><div id="nav-distance"></div></div><div id="stunt" hidden><strong></strong><small></small></div><div id="dock-status" hidden><span>HOLD STEADY</span><progress value="0" max=".65"></progress></div><div id="minimap-shell"><canvas id="minimap" width="352" height="348" aria-label="River map with passenger piers"></canvas><div id="map-caption"><span>● PASSENGERS</span><b>N ↑</b></div></div><div id="speed"><strong>0</strong><span class="unit">KM/H</span><div class="gear">LONGTAIL EXPRESS</div></div><div id="toast" role="status"></div><div id="hud-keys" class="keys">${Mu}</div><div class="osm"><a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener">© OpenStreetMap contributors</a> · <a href="./credits.html" target="_blank" rel="noopener">Credits</a></div><div class="touch"><div class="touch-controls"><div id="steer-pad" aria-label="Slide left or right to steer"><span>◁</span><i></i><span>▷</span></div><div class="touch-actions"><button data-control="drift">SLIDE</button><button data-control="boost">BOOST</button><button data-control="brake">BRAKE / R</button><button class="gas" data-control="gas">THROTTLE</button></div></div></div></div>
<div id="countdown" class="countdown" hidden></div>
<section id="pause-screen" class="screen modal" hidden><div class="dialog"><div class="eyebrow">TAKE A BREATHER</div><h2>River can wait.</h2><div class="setting-row"><span>Night drive soundtrack</span><button id="music-toggle" class="toggle" aria-pressed="true">ON</button></div><p class="modal-keys">W / ↑ accelerate · S / ↓ brake, then reverse<br>A D / ← → steer · Shift boost · Space slide<br>H horn · R recover · Esc pause<br>Gamepad: RT / LT · left stick · A boost · B slide</p><button id="resume" class="primary">BACK TO THE RIVER <span>↗</span></button><button id="quit" class="secondary">End this shift</button><a class="credits" href="./credits.html" target="_blank" rel="noopener">Music & data credits ↗</a></div></section>
<section id="results" class="screen modal" hidden><div class="dialog"><div class="eyebrow" id="result-label">SHIFT COMPLETE</div><h2 id="result-title">Shift complete.</h2><p id="result-reason" hidden></p><div class="result-total" id="result-score">฿ 0</div><div class="result-meta"><div><span class="micro">FARES DELIVERED</span><strong id="result-fares">0</strong></div><div><span class="micro">PERSONAL BEST</span><strong id="result-best">฿ 0</strong></div></div><div class="micro">YOUR BEST NIGHTS</div><ol id="record-list"></ol><button id="again" class="primary">PLAY AGAIN <span>↗</span></button><button id="back-menu" class="secondary">Back to the riverfront</button></div></section>`;let To;try{To=localStorage}catch{To={getItem:()=>null,setItem:()=>{}}}let Wn=[];try{Wn=Ol(JSON.parse(To.getItem(Fl)||"[]"))}catch{}const Ts=()=>Wn[0]?.score||0,jn=i=>`฿ ${Math.round(i).toLocaleString()}`,yu=i=>`${Math.floor(i/60).toString().padStart(2,"0")}:${Math.floor(i%60).toString().padStart(2,"0")}`;function Ac(){he("#menu-best").textContent=jn(Ts()),he("#hud-best").textContent=jn(Ts());const i=he("#menu-record-note");i.hidden=!Wn.length,i.textContent=Wn.length?`${Wn[0].deliveries} fare${Wn[0].deliveries===1?"":"s"}`:""}Ac();let Gl=null,Fd,co,Od,zd,Vl,Wl,ho,uo=!1;const os=new R;let dt="menu",Mn=!1,Ho=!1,We,ve,Qt,Gn,ps,di=[],un,kn,jt,Ot,Ei,Oi,ko,ls=0,Dt=0,cs=0,Ao=0,fo=0,Va=0,Gs=0,Bd=0,Hd=0,Ti=0,Xl=!1,oi=0,Li={x:0,z:0,heading:0};const ql=new R,Yl=new R,Rt=new k2,Cc=new W2,hr=new q2(he("#app")),fn=new F2({pause:i=>Go(i),horn:()=>Rt.horn(),recover:()=>Vd()});fn.bind();function hi(i,e=4){he("#toast").textContent=i,Bd=Dt+e,he("#toast").style.opacity="1"}function eo(i,e){he("#stunt strong").textContent=i,he("#stunt small").textContent=e,he("#stunt").hidden=!1,Hd=Dt+1.4}function kd(i){Mn=i,he("#mode-free").classList.toggle("active",Mn),he("#mode-shift").classList.toggle("active",!Mn),he("#mode-free").setAttribute("aria-pressed",String(Mn)),he("#mode-shift").setAttribute("aria-pressed",String(!Mn))}he("#mode-free").onclick=()=>kd(!0);he("#mode-shift").onclick=()=>kd(!1);for(const i of document.querySelectorAll(".sound-btn"))i.onclick=()=>{const e=Rt.mute();document.querySelectorAll(".sound-btn").forEach(t=>{t.setAttribute("aria-label",e?"Unmute sound":"Mute sound"),t.style.opacity=e?".45":"1"})};he("#music-toggle").onclick=()=>{const i=Rt.musicToggle();he("#music-toggle").textContent=i?"ON":"OFF",he("#music-toggle").setAttribute("aria-pressed",String(i))};he("#pause").onclick=()=>Go();he("#resume").onclick=()=>Go();he("#recover").onclick=()=>Vd();he("#horn").onclick=()=>Rt.horn();he("#quit").onclick=()=>jl("quit");he("#again").onclick=()=>Gd();he("#back-menu").onclick=()=>Q2();he("#start").onclick=()=>Gd();function Gd(){if(!Ho)return;hr.reset(),Cc.reset(),Ti=0,Xl=!1,We.reset(Mn);const i=Gn[Mn?8:0];ve.launch(Qt,i),Li={x:ve.x,z:ve.z,heading:ve.heading},oi=ve.heading,Yl.set(ve.x+Math.sin(ve.heading)*23,12,ve.z+Math.cos(ve.heading)*23),ql.set(ve.x-Math.sin(ve.heading)*30,3,ve.z-Math.cos(ve.heading)*30),Oi.clear(),ko.clear(),dt="countdown",ls=2.5,fn.clear(),fn.enabled=!1,fo=0,cs=0,Gs=0;for(const e of["#menu","#results","#pause-screen"])he(e).hidden=!0;he("#hud").hidden=!1,he("#countdown").hidden=!1,he("#stunt").hidden=!0,he("#navigation").hidden=!0,he("#toast").style.opacity="0",Rt.start(),Rc()}function Q2(){hr.reset(),Cc.reset(),dt="menu",fn.enabled=!1,fn.clear(),Rt.pause(),he("#menu").hidden=!1;for(const i of["#hud","#results","#pause-screen","#countdown"])he(i).hidden=!0;Ac()}function Go(i=!1){Ho&&(dt==="playing"||dt==="countdown"?(Su=dt,dt="paused",fn.enabled=!1,fn.clear(),Rt.pause(),he("#pause-screen").hidden=!1):dt==="paused"&&!i&&(dt=Su,fn.enabled=dt==="playing",he("#pause-screen").hidden=!0,Rt.start(),Ao=performance.now()))}let Su="playing";function Vd(){if(dt!=="playing")return;const i=Qt.nearest(ve.x,ve.z),e=Qt.sample(Jt(i.distance,40,Qt.length-40));let t=ve.heading;const n=i.heading;Math.abs(Mo(t,n))<Math.PI/2?t=n:t=n+Math.PI,ve.reset(e.x,e.z,t),Li={x:ve.x,z:ve.z,heading:ve.heading},We.crash(),We.remaining=Math.max(0,We.remaining-3),hi("Back in the channel · −3 seconds"),Oi.clear(),ko.clear()}function jl(i="timeout",e){if(Xl)return;Xl=!0;const t=i==="collision",n=!We.free&&i!=="quit",s=Ts();dt=t?"crashed":"results",fn.enabled=!1,fn.clear(),Rt.event(t?"crash":"delivered"),Rt.pause(t?1.2:0),t&&hr.impact({fatal:!0,kind:e,onComplete:()=>{dt="results",he("#results").hidden=!1}}),We.finished=!0,We.fare=null,We.dockHold=0,n&&(Wn=Ev(To,We.earnings,We.deliveries)),Ac(),he("#result-label").textContent=t?"BOAT COLLISION":We.free?"FREE CRUISE · UNRANKED":n?We.earnings>s?"A NEW PERSONAL BEST":"SHIFT COMPLETE":"SHIFT ENDED · UNRANKED",he("#result-title").textContent=t?"You crashed.":n&&We.earnings>s?"New best score.":"Shift complete.",he("#result-reason").hidden=!t,he("#result-reason").textContent=t?`Collision: ${Nd[e]||"boat"}. Run over.`:"",he("#result-score").textContent=jn(We.earnings),he("#result-fares").textContent=String(We.deliveries),he("#result-best").textContent=jn(Ts());const r=he("#record-list");r.replaceChildren();for(const[o,a]of Wn.entries()){const c=document.createElement("li"),l=document.createElement("b");c.textContent=`${o+1}. ${a.deliveries} fares`,l.textContent=jn(a.score),c.append(l),r.append(c)}if(!Wn.length){const o=document.createElement("li");o.textContent="Complete a fare in Night Shift to set a score.",r.append(o)}he("#results").hidden=t,he("#pause-screen").hidden=!0,he("#countdown").hidden=!0,he("#navigation").hidden=!0,he("#dock-status").hidden=!0,he("#stunt").hidden=!0,he("#toast").style.opacity="0",Rc()}function Rc(){if(!We)return;he(".timer-value").textContent=We.free?"∞":yu(We.remaining),he(".timer .micro").textContent=We.free?"FREE CRUISE":"NIGHT SHIFT",he(".timer").classList.toggle("low",!We.free&&We.remaining<25),he("#earnings").textContent=jn(We.earnings),he("#deliveries").textContent=`${We.deliveries} FARE${We.deliveries===1?"":"S"}`,he("#hud-best").textContent=jn(We.free?Ts():Math.max(Ts(),We.earnings));const i=We.fare;if(he("#navigation").hidden=!i,he(".fare-progress").hidden=!i,he("#map-caption span").textContent=i?"● DROP OFF":"● PASSENGERS",i){const e=Math.hypot(i.to.x-ve.x,i.to.z-ve.z);he("#fare-label").textContent="DROP OFF",he("#fare-title").textContent=i.to.name,he("#fare-hint").textContent=e<60?"Easy does it. Stop in the green ring.":i.to.thai,he("#fare-detail").textContent=`${Math.round(e)} m · ${jn(i.base+We.tips)}`,he("#fare-time").textContent=yu(i.time),he(".fare-progress i").style.width=`${i.time/i.total*100}%`,fo=bv(ve,i.to,fo),he("#navigation svg").style.transform=`rotate(${fo}rad)`,he("#nav-distance").textContent=`${Math.round(e)} m`}else he("#fare-label").textContent="FIND YOUR NEXT FARE",he("#fare-title").textContent="Choose any pier",he("#fare-hint").textContent="Stop in a golden ring to pick up passengers.",he("#fare-detail").textContent="Yellow dots on your map",he("#fare-time").textContent="";he("#speed strong").textContent=String(Math.round(Math.hypot(ve.vx,ve.vz)*3.6)),he("#speed").classList.toggle("boost",ve.boosting),he("#speed .gear").textContent=ve.boosting?"FULL SEND":ve.drifting?"STERN SLIDE":ve.speed<-.3?"REVERSE":"LONGTAIL EXPRESS",he("#dock-status").hidden=We.dockHold===0,he("#dock-status progress").value=We.dockHold,he("#dock-status span").textContent=We.fare?"PASSENGERS DISEMBARKING":"PASSENGERS BOARDING",$2()}function $2(){const i=he("#minimap"),e=i.getContext("2d"),t=i.width,n=i.height,s=Qt.points,r=Math.min(...s.map(v=>v.x))-200,o=Math.max(...s.map(v=>v.x))+200,a=Math.min(...s.map(v=>v.z))-100,c=Math.max(...s.map(v=>v.z))+100,l=Math.min((t-38)/(o-r),(n-22)/(c-a)),h=(o+r)/2,u=(c+a)/2,d=v=>[t/2+(v.x-h)*l,n/2+(v.z-u)*l];e.clearRect(0,0,t,n),e.strokeStyle="#355a68",e.lineCap="round",e.lineJoin="round",e.lineWidth=13,e.beginPath(),s.forEach((v,g)=>{const[p,M]=d(v);g?e.lineTo(p,M):e.moveTo(p,M)}),e.stroke(),e.strokeStyle="#102f3e",e.lineWidth=8,e.stroke();for(const v of Gn){if(We.fare&&We.fare.to.id!==v.id||!We.fare&&(We.cooldowns.get(v.id)||0)>We.clock)continue;const[g,p]=d(v);e.fillStyle=We.fare?"#9df3cf":"#ffd18b",e.beginPath(),e.arc(g,p,We.fare?5:3,0,Math.PI*2),e.fill()}const[f,m]=d(ve);e.save(),e.translate(f,m),e.rotate(-ve.heading),e.fillStyle="#fff6dc",e.beginPath(),e.moveTo(0,-7),e.lineTo(5,6),e.lineTo(0,3),e.lineTo(-5,6),e.closePath(),e.fill(),e.restore()}function e_(){co=C2(Qt,{...So,...Cd},Tn),di=co.traffic;for(const i of di)i.mesh=i.convoy?E2(i.kind,i.variation):I2(i.kind,i.variation,Tn),i.mesh.scale.setScalar(i.scale),jt.add(i.mesh);zd=U2(jt,co.convoys),Wd(0),Od=new vd(jt,di.flatMap(i=>Dv(i.kind).map(e=>({...e,parent:i.mesh}))),{dynamic:!0})}function Wd(i){R2(co,Qt,i);for(const e of di){const t=e.towed?.0015:.006,n=e.towed?.025:.08;e.mesh.position.set(e.x,Math.sin(Dt*1.4+e.distance)*n,e.z),e.mesh.rotation.set(Math.sin(Dt+e.distance)*t*.6,e.heading,Math.sin(Dt*.7+e.distance)*t),e.wakeClock+=i,!e.towed&&e.wakeClock>.32&&(e.x-ve.x)**2+(e.z-ve.z)**2<450**2&&(e.wakeClock=0,Oi.emit(e.x+Math.sin(e.heading)*e.length/2,e.z+Math.cos(e.heading)*e.length/2,e.heading,e.actualSpeed,e.width*.12))}zd.update()}function t_(i,e){if(We.finished)return;Ti=Math.max(0,Ti-i),Li={x:ve.x,z:ve.z,heading:ve.heading},ve.update(i,e);let t=Qt.constrain(ve,6);for(const s of di){if(Math.hypot(s.x-ve.x,s.z-ve.z)>s.length+18)continue;const r=We.hitBoat(ve,s);if(r){if(r.type==="crashed"){jl("collision",s.kind);return}if(r.severity>.6&&Ti===0){const o=Jt(.2+r.severity/vn.fatalImpact,.25,.85);Rt.impact(!1,o),hr.impact({intensity:o}),hi("Just a bump. Keep going.",1.6),Ti=.75}continue}if(Math.abs(ve.speed)>12&&s.nearCooldown===0){const o=No({...ve,length:12,width:2.5},s);if(o.gap>1.3&&o.gap<6){const a=We.stunt("near");s.nearCooldown=8,a&&(Rt.event("near"),eo("CLOSE CALL",`+฿ ${a} TIP · ${We.combo}× COMBO`))}}}for(const s of ps.bridgeColliders)Math.hypot(s.x-ve.x,s.z-ve.z)<28&&(t=Math.max(t,gd(ve,s)));if(t>4&&Ti===0){We.crash(),Rt.impact(!1),hr.impact(),Ti=1;const s=Qt.nearest(ve.x,ve.z).distance;hi(s<2||s>Qt.length-2?"End of this reach. Turn back along the river.":t>15?"Big boat. Bigger right of way.":"Watch the paintwork!",3)}if(ve.drifting&&Math.abs(ve.slip)>2){if(Gs+=i,Gs>.85){Gs=0;const s=We.stunt("slide");s&&(eo("RIVER SLIDE",`+฿ ${s} TIP · ${We.combo}× COMBO`),Rt.event("slide"))}}else Gs=0;const n=We.update(i,ve);n&&(Rt.event(n.type),n.type==="pickup"&&(hi(`Next stop: ${n.to.name}. Let’s make waves!`,5),eo("ALL ABOARD",n.to.name.toUpperCase())),n.type==="delivered"&&(eo("NICE LANDING",`${jn(n.paid)} BANKED · +12 SECONDS`),hi("Fare delivered. Choose any yellow pier for your next passengers.",6)),n.type==="late"&&hi("Missed the boat! Find your next passengers.",5),n.type==="ended"&&jl()),Math.abs(ve.speed)>2&&(Oi.emit(ve.x+Math.sin(ve.heading)*6,ve.z+Math.cos(ve.heading)*6,ve.heading,Math.abs(ve.speed),ve.boosting?1:.4),ve.drifting&&Oi.emit(ve.x,ve.z,ve.heading,Math.abs(ve.speed),.8))}function bu(i=0,e=null){K2(kn,Ei,{ratio:e,size:Gl,smaa:Wl,fxaa:ho,frameMeter:Fd,frameDt:i}),Gl=null}function Xd(i){requestAnimationFrame(Xd);const e=(i-Ao)/1e3,t=Math.min(e||0,.05);if(Ao=i,!Ho)return;const n=fn.read();if(dt==="paused"||dt==="results"||dt==="crashed"){uo||(bu(),uo=!0);return}if(uo=!1,Dt+=t,dt==="countdown"&&(ls-=t,he("#countdown").textContent=ls>1.5?"3":ls>.7?"2":ls>.1?"1":"GO!",ls<=0&&(dt="playing",fn.enabled=!0,he("#countdown").hidden=!0,hi("Stop at any golden pier. Shift for boost. Space to swing the stern.",6))),Wd(t),dt==="playing"){cs+=t;let l=0;for(;dt==="playing"&&cs>=1/60&&l++<4;)t_(1/60,n),cs-=1/60;if(dt==="playing"){Rt.update(ve.speed,ve.boosting);const h=Cc.update(t,ve,di,oi);h&&Rt.warningHorn(h.source.kind,h)}else cs=0}const s=dt==="playing"?Jt(cs/(1/60),0,1):1;if(dt!=="menu"){const l=us.lerp(Li.x,ve.x,s),h=us.lerp(Li.z,ve.z,s),u=Li.heading+Mo(ve.heading,Li.heading)*s;un.position.set(l,.1+Math.sin(Dt*2.7)*.085+Math.sin(Dt*4.3)*.035,h),un.rotation.set((ve.boosting?.065:Math.abs(ve.speed)*7e-4)+Math.sin(Dt*2)*.008,u,Jt(ve.yaw*ve.speed*.003,-.12,.12)),oi+=Mo(u,oi)*(1-Math.exp(-4.5*t));const d=ve.boosting?24:19,f=new R(l+Math.sin(oi)*d,7.8+(ve.boosting?1.2:0),h+Math.cos(oi)*d);Yl.lerp(f,1-Math.exp(-8*t));const m=new R(l-Math.sin(oi)*26,3,h-Math.cos(oi)*26);ql.lerp(m,1-Math.exp(-9*t)),Ot.position.copy(Yl),Ot.lookAt(ql),Ot.fov=us.lerp(Ot.fov,ve.boosting?69:62,1-Math.exp(-3*t)),Ot.updateProjectionMatrix()}else{const l=ps.landmarks.find(g=>g.kind===(Mn?"icon-siam":"wat-arun")),h=Qt.sample(Gn[Mn?8:0].distance-(Mn?330:140),-34),u=l.x-h.x,d=l.z-h.z,f=Math.hypot(u,d),m=-d/f,v=u/f;Ot.position.set(h.x+Math.sin(Dt*.06)*8,11.5,h.z+Math.cos(Dt*.06)*6),Ot.lookAt(l.x-m*60,Mn?70:24,l.z-v*60),un.position.set(h.x+u/f*25-m*7,.1+Math.sin(Dt*2)*.07,h.z+d/f*25-v*7),un.rotation.set(.008,Math.atan2(-u,-d),Math.sin(Dt)*.009)}un.userData.propeller&&(un.userData.propeller.rotation.z+=t*(20+Math.abs(ve.speed)*6)),un.userData.motor&&(un.userData.motor.rotation.y=-(n.steer||0)*.18),Oi.update(t);const r=[],o=[];function a(l){l.updateMatrixWorld();for(const h of l.userData.lightSources||[])os.fromArray(h.position),l.userData.kind==="longtail"&&(os.y=1.4),l.localToWorld(os),o.push({x:os.x,y:os.y,z:os.z,color:h.color,power:h.intensity||18,boat:!0,distance:h.distance})}a(un);for(const l of di){const h=Math.hypot(l.x-Ot.position.x,l.z-Ot.position.z);kl(l.mesh,h,Tn),h<350&&a(l.mesh),h<420&&!l.towed&&r.push({actor:l,distance:h})}r.sort((l,h)=>l.distance-h.distance);const c=r.slice(0,Tn?10:16).map(l=>l.actor);if(dt!=="menu"&&c.unshift(ve),Od.update(),ko.update(t,c),ps.update(Dt,Ot,We,o),dt==="menu")for(const l of ps.pierVisuals)l.ring.visible=!1,l.beacon.visible=!1;he("#stunt").hidden=dt!=="playing"||Dt>Hd,he("#toast").style.opacity=dt!=="playing"||Dt>Bd?"0":"1",Va+=t,Va>.09&&(Va=0,dt!=="menu"&&Rc()),bu(e,Vl.update(e))}async function n_(){try{await document.fonts.load('600 32px "Noto Sans Thai"'),await document.fonts.ready;const i=await fetch("/longtail/data/river-course.json");if(!i.ok)throw new Error("Could not load the river map");const t=(await i.json()).points,s=new fc(t.map(u=>new R((u[0]-100.502)*108140,0,(13.733-u[1])*111320))).getSpacedPoints(320),r=new Zh(t),o=s.map(u=>[u.x/108140+100.502,13.733-u.z/111320,r.nearest(u.x,u.z).width]);Qt=new Zh(o),Gn=Mv(Qt),We=new wv(Gn),ve=new Sv(Gn[0].x,Gn[0].z,Gn[0].heading),jt=new Mp,jt.background=new Fe(659483),jt.fog=new ac(1646635,56e-5),Ot=new zt(62,innerWidth/innerHeight,.3,8e3),Ot.layers.enable(1),kn=new sv({canvas:he("#scene"),antialias:!1,powerPreference:"high-performance"}),Vl=new j2(devicePixelRatio,Tn),kn.setPixelRatio(Vl.ratio),kn.setSize(innerWidth,innerHeight),kn.toneMapping=Zl,kn.toneMappingExposure=1.15,kn.outputColorSpace=gt,jt.add(new pm(10796246,4865586,.82));const a=new Sh(10271970,.62);a.position.copy(yc).multiplyScalar(1e3),jt.add(a);const c=new Sh(16766108,.18);c.position.set(500,220,150),jt.add(c),ps=a2(jt,Qt,Gn,Tn),un=Ad("longtail",0),jt.add(un);const l=new cd(16763281,3.5,7,2);l.position.set(0,1.65,4.5),un.add(l),Oi=new O2(jt,Tn),ko=new z2(jt,Tn?30:46),e_(),N2(ps.water,di),Ei=mv(kn),Ei.addPass(new lv(jt,Ot)),Ei.addPass(gv(innerWidth,innerHeight)),Tn||(Wl=new xv,Ei.addPass(Wl)),Ei.addPass(new vv),ho=pv(),ho.enabled=Tn,Ei.addPass(ho);const h=()=>{uo=!1,Ot.aspect=innerWidth/innerHeight,Ot.updateProjectionMatrix(),Gl={width:innerWidth,height:innerHeight}};window.addEventListener("resize",h),he("#scene").addEventListener("webglcontextlost",u=>{u.preventDefault(),Go(!0),hi("Graphics paused. Reload the page to restore the river.",100)}),Fd=Y2(kn),Ho=!0,he("#start").disabled=!1,he("#start").textContent="PLAY",he("#loading-note").textContent="",Ao=performance.now(),requestAnimationFrame(Xd)}catch(i){console.error(i),he("#loading-note").textContent=`Unable to launch: ${i.message}. Try a browser with WebGL enabled.`,he("#start").textContent="RETRY",he("#start").disabled=!1,he("#start").onclick=()=>location.reload()}}n_();
