(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ic="180",ud=0,Vc=1,fd=2,Du=1,dd=2,kn=3,Zn=0,Gt=1,Ht=2,qn=0,Ii=1,Ni=2,Wc=3,Xc=4,pd=5,Ci=100,md=101,gd=102,xd=103,vd=104,_d=200,Md=201,yd=202,Sd=203,Ja=204,Qa=205,bd=206,wd=207,Ed=208,Td=209,Ad=210,Cd=211,Rd=212,Pd=213,Ld=214,$a=0,el=1,tl=2,vs=3,nl=4,il=5,sl=6,rl=7,Iu=0,Dd=1,Id=2,fi=0,Uu=1,Nu=2,Fu=3,sc=4,Ou=5,zu=6,Bu=7,Hu=300,_s=301,Ms=302,ol=303,al=304,Do=306,pi=1e3,Pi=1001,ll=1002,Vt=1003,Ud=1004,xr=1005,on=1006,Zo=1007,Sn=1008,Ln=1009,ku=1010,Gu=1011,tr=1012,rc=1013,Fi=1014,Cn=1015,wn=1016,oc=1017,ac=1018,nr=1020,Vu=35902,Wu=35899,Xu=1021,qu=1022,an=1023,ir=1026,sr=1027,lc=1028,cc=1029,Yu=1030,hc=1031,uc=1033,ro=33776,oo=33777,ao=33778,lo=33779,cl=35840,hl=35841,ul=35842,fl=35843,dl=36196,pl=37492,ml=37496,gl=37808,xl=37809,vl=37810,_l=37811,Ml=37812,yl=37813,Sl=37814,bl=37815,wl=37816,El=37817,Tl=37818,Al=37819,Cl=37820,Rl=37821,Pl=36492,Ll=36494,Dl=36495,Il=36283,Ul=36284,Nl=36285,Fl=36286,Nd=3200,Fd=3201,ju=0,Od=1,ci="",vt="srgb",ys="srgb-linear",vo="linear",lt="srgb",Yi=7680,qc=519,zd=512,Bd=513,Hd=514,Ku=515,kd=516,Gd=517,Vd=518,Wd=519,Yc=35044,Hi=35048,jc="300 es",Rn=2e3,_o=2001;class Rs{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const s=n[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const Lt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Kc=1234567;const qs=Math.PI/180,Ss=180/Math.PI;function ki(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Lt[i&255]+Lt[i>>8&255]+Lt[i>>16&255]+Lt[i>>24&255]+"-"+Lt[e&255]+Lt[e>>8&255]+"-"+Lt[e>>16&15|64]+Lt[e>>24&255]+"-"+Lt[t&63|128]+Lt[t>>8&255]+"-"+Lt[t>>16&255]+Lt[t>>24&255]+Lt[n&255]+Lt[n>>8&255]+Lt[n>>16&255]+Lt[n>>24&255]).toLowerCase()}function Qe(i,e,t){return Math.max(e,Math.min(t,i))}function fc(i,e){return(i%e+e)%e}function Xd(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function qd(i,e,t){return i!==e?(t-i)/(e-i):0}function Ys(i,e,t){return(1-t)*i+t*e}function Yd(i,e,t,n){return Ys(i,e,1-Math.exp(-t*n))}function jd(i,e=1){return e-Math.abs(fc(i,e*2)-e)}function Kd(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Zd(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Jd(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Qd(i,e){return i+Math.random()*(e-i)}function $d(i){return i*(.5-Math.random())}function ep(i){i!==void 0&&(Kc=i);let e=Kc+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function tp(i){return i*qs}function np(i){return i*Ss}function ip(i){return(i&i-1)===0&&i!==0}function sp(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function rp(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function op(i,e,t,n,s){const r=Math.cos,o=Math.sin,a=r(t/2),c=o(t/2),l=r((e+n)/2),h=o((e+n)/2),u=r((e-n)/2),f=o((e-n)/2),d=r((n-e)/2),m=o((n-e)/2);switch(s){case"XYX":i.set(a*h,c*u,c*f,a*l);break;case"YZY":i.set(c*f,a*h,c*u,a*l);break;case"ZXZ":i.set(c*u,c*f,a*h,a*l);break;case"XZX":i.set(a*h,c*m,c*d,a*l);break;case"YXY":i.set(c*d,a*h,c*m,a*l);break;case"ZYZ":i.set(c*m,c*d,a*h,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function hs(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Nt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const ps={DEG2RAD:qs,RAD2DEG:Ss,generateUUID:ki,clamp:Qe,euclideanModulo:fc,mapLinear:Xd,inverseLerp:qd,lerp:Ys,damp:Yd,pingpong:jd,smoothstep:Kd,smootherstep:Zd,randInt:Jd,randFloat:Qd,randFloatSpread:$d,seededRandom:ep,degToRad:tp,radToDeg:np,isPowerOfTwo:ip,ceilPowerOfTwo:sp,floorPowerOfTwo:rp,setQuaternionFromProperEuler:op,normalize:Nt,denormalize:hs};class ne{constructor(e=0,t=0){ne.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Qe(this.x,e.x,t.x),this.y=Qe(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Qe(this.x,e,t),this.y=Qe(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Qe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Qe(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Wt{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let c=n[s+0],l=n[s+1],h=n[s+2],u=n[s+3];const f=r[o+0],d=r[o+1],m=r[o+2],x=r[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u;return}if(a===1){e[t+0]=f,e[t+1]=d,e[t+2]=m,e[t+3]=x;return}if(u!==x||c!==f||l!==d||h!==m){let g=1-a;const p=c*f+l*d+h*m+u*x,M=p>=0?1:-1,_=1-p*p;if(_>Number.EPSILON){const w=Math.sqrt(_),A=Math.atan2(w,p*M);g=Math.sin(g*A)/w,a=Math.sin(a*A)/w}const v=a*M;if(c=c*g+f*v,l=l*g+d*v,h=h*g+m*v,u=u*g+x*v,g===1-a){const w=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=w,l*=w,h*=w,u*=w}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,s,r,o){const a=n[s],c=n[s+1],l=n[s+2],h=n[s+3],u=r[o],f=r[o+1],d=r[o+2],m=r[o+3];return e[t]=a*m+h*u+c*d-l*f,e[t+1]=c*m+h*f+l*u-a*d,e[t+2]=l*m+h*d+a*f-c*u,e[t+3]=h*m-a*u-c*f-l*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(s/2),u=a(r/2),f=c(n/2),d=c(s/2),m=c(r/2);switch(o){case"XYZ":this._x=f*h*u+l*d*m,this._y=l*d*u-f*h*m,this._z=l*h*m+f*d*u,this._w=l*h*u-f*d*m;break;case"YXZ":this._x=f*h*u+l*d*m,this._y=l*d*u-f*h*m,this._z=l*h*m-f*d*u,this._w=l*h*u+f*d*m;break;case"ZXY":this._x=f*h*u-l*d*m,this._y=l*d*u+f*h*m,this._z=l*h*m+f*d*u,this._w=l*h*u-f*d*m;break;case"ZYX":this._x=f*h*u-l*d*m,this._y=l*d*u+f*h*m,this._z=l*h*m-f*d*u,this._w=l*h*u+f*d*m;break;case"YZX":this._x=f*h*u+l*d*m,this._y=l*d*u+f*h*m,this._z=l*h*m-f*d*u,this._w=l*h*u-f*d*m;break;case"XZY":this._x=f*h*u-l*d*m,this._y=l*d*u-f*h*m,this._z=l*h*m+f*d*u,this._w=l*h*u+f*d*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],c=t[9],l=t[2],h=t[6],u=t[10],f=n+a+u;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-c)*d,this._y=(r-l)*d,this._z=(o-s)*d}else if(n>a&&n>u){const d=2*Math.sqrt(1+n-a-u);this._w=(h-c)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+l)/d}else if(a>u){const d=2*Math.sqrt(1+a-n-u);this._w=(r-l)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(c+h)/d}else{const d=2*Math.sqrt(1+u-n-a);this._w=(o-s)/d,this._x=(r+l)/d,this._y=(c+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Qe(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+o*a+s*l-r*c,this._y=s*h+o*c+r*a-n*l,this._z=r*h+o*l+n*c-s*a,this._w=o*h-n*a-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,s=this._y,r=this._z,o=this._w;let a=o*e._w+n*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;const c=1-a*a;if(c<=Number.EPSILON){const d=1-t;return this._w=d*o+t*this._w,this._x=d*n+t*this._x,this._y=d*s+t*this._y,this._z=d*r+t*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,a),u=Math.sin((1-t)*h)/l,f=Math.sin(t*h)/l;return this._w=o*u+this._w*f,this._x=n*u+this._x*f,this._y=s*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class R{constructor(e=0,t=0,n=0){R.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Zc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Zc.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*s-a*n),h=2*(a*t-r*s),u=2*(r*n-o*t);return this.x=t+c*l+o*u-a*h,this.y=n+c*h+a*l-r*u,this.z=s+c*u+r*h-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Qe(this.x,e.x,t.x),this.y=Qe(this.y,e.y,t.y),this.z=Qe(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Qe(this.x,e,t),this.y=Qe(this.y,e,t),this.z=Qe(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Qe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,c=t.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Jo.copy(this).projectOnVector(e),this.sub(Jo)}reflect(e){return this.sub(Jo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Qe(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Jo=new R,Zc=new Wt;class Ke{constructor(e,t,n,s,r,o,a,c,l){Ke.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,c,l)}set(e,t,n,s,r,o,a,c,l){const h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],u=n[7],f=n[2],d=n[5],m=n[8],x=s[0],g=s[3],p=s[6],M=s[1],_=s[4],v=s[7],w=s[2],A=s[5],C=s[8];return r[0]=o*x+a*M+c*w,r[3]=o*g+a*_+c*A,r[6]=o*p+a*v+c*C,r[1]=l*x+h*M+u*w,r[4]=l*g+h*_+u*A,r[7]=l*p+h*v+u*C,r[2]=f*x+d*M+m*w,r[5]=f*g+d*_+m*A,r[8]=f*p+d*v+m*C,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8];return t*o*h-t*a*l-n*r*h+n*a*c+s*r*l-s*o*c}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=h*o-a*l,f=a*c-h*r,d=l*r-o*c,m=t*u+n*f+s*d;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/m;return e[0]=u*x,e[1]=(s*l-h*n)*x,e[2]=(a*n-s*o)*x,e[3]=f*x,e[4]=(h*t-s*c)*x,e[5]=(s*r-a*t)*x,e[6]=d*x,e[7]=(n*c-l*t)*x,e[8]=(o*t-n*r)*x,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+e,-s*l,s*c,-s*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Qo.makeScale(e,t)),this}rotate(e){return this.premultiply(Qo.makeRotation(-e)),this}translate(e,t){return this.premultiply(Qo.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Qo=new Ke;function Zu(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function rr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function ap(){const i=rr("canvas");return i.style.display="block",i}const Jc={};function or(i){i in Jc||(Jc[i]=!0,console.warn(i))}function lp(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}const Qc=new Ke().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),$c=new Ke().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function cp(){const i={enabled:!0,workingColorSpace:ys,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===lt&&(s.r=Yn(s.r),s.g=Yn(s.g),s.b=Yn(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===lt&&(s.r=ms(s.r),s.g=ms(s.g),s.b=ms(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===ci?vo:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return or("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return or("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[ys]:{primaries:e,whitePoint:n,transfer:vo,toXYZ:Qc,fromXYZ:$c,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:vt},outputColorSpaceConfig:{drawingBufferColorSpace:vt}},[vt]:{primaries:e,whitePoint:n,transfer:lt,toXYZ:Qc,fromXYZ:$c,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:vt}}}),i}const it=cp();function Yn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ms(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let ji;class hp{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{ji===void 0&&(ji=rr("canvas")),ji.width=e.width,ji.height=e.height;const s=ji.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=ji}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=rr("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Yn(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Yn(t[n]/255)*255):t[n]=Yn(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let up=0;class dc{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:up++}),this.uuid=ki(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push($o(s[o].image)):r.push($o(s[o]))}else r=$o(s);n.url=r}return t||(e.images[this.uuid]=n),n}}function $o(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?hp.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let fp=0;const ea=new R;class Tt extends Rs{constructor(e=Tt.DEFAULT_IMAGE,t=Tt.DEFAULT_MAPPING,n=Pi,s=Pi,r=on,o=Sn,a=an,c=Ln,l=Tt.DEFAULT_ANISOTROPY,h=ci){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:fp++}),this.uuid=ki(),this.name="",this.source=new dc(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new ne(0,0),this.repeat=new ne(1,1),this.center=new ne(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ke,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(ea).x}get height(){return this.source.getSize(ea).y}get depth(){return this.source.getSize(ea).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Hu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case pi:e.x=e.x-Math.floor(e.x);break;case Pi:e.x=e.x<0?0:1;break;case ll:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case pi:e.y=e.y-Math.floor(e.y);break;case Pi:e.y=e.y<0?0:1;break;case ll:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Tt.DEFAULT_IMAGE=null;Tt.DEFAULT_MAPPING=Hu;Tt.DEFAULT_ANISOTROPY=1;class st{constructor(e=0,t=0,n=0,s=1){st.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r;const c=e.elements,l=c[0],h=c[4],u=c[8],f=c[1],d=c[5],m=c[9],x=c[2],g=c[6],p=c[10];if(Math.abs(h-f)<.01&&Math.abs(u-x)<.01&&Math.abs(m-g)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+x)<.1&&Math.abs(m+g)<.1&&Math.abs(l+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const _=(l+1)/2,v=(d+1)/2,w=(p+1)/2,A=(h+f)/4,C=(u+x)/4,P=(m+g)/4;return _>v&&_>w?_<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(_),s=A/n,r=C/n):v>w?v<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),n=A/s,r=P/s):w<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(w),n=C/r,s=P/r),this.set(n,s,r,t),this}let M=Math.sqrt((g-m)*(g-m)+(u-x)*(u-x)+(f-h)*(f-h));return Math.abs(M)<.001&&(M=1),this.x=(g-m)/M,this.y=(u-x)/M,this.z=(f-h)/M,this.w=Math.acos((l+d+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Qe(this.x,e.x,t.x),this.y=Qe(this.y,e.y,t.y),this.z=Qe(this.z,e.z,t.z),this.w=Qe(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Qe(this.x,e,t),this.y=Qe(this.y,e,t),this.z=Qe(this.z,e,t),this.w=Qe(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Qe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class dp extends Rs{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:on,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new st(0,0,e,t),this.scissorTest=!1,this.viewport=new st(0,0,e,t);const s={width:e,height:t,depth:n.depth},r=new Tt(s);this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:on,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new dc(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Kt extends dp{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Ju extends Tt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Vt,this.minFilter=Vt,this.wrapR=Pi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class pp extends Tt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Vt,this.minFilter=Vt,this.wrapR=Pi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Jn{constructor(e=new R(1/0,1/0,1/0),t=new R(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(gn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(gn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=gn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,gn):gn.fromBufferAttribute(r,o),gn.applyMatrix4(e.matrixWorld),this.expandByPoint(gn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),vr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),vr.copy(n.boundingBox)),vr.applyMatrix4(e.matrixWorld),this.union(vr)}const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,gn),gn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Is),_r.subVectors(this.max,Is),Ki.subVectors(e.a,Is),Zi.subVectors(e.b,Is),Ji.subVectors(e.c,Is),ti.subVectors(Zi,Ki),ni.subVectors(Ji,Zi),vi.subVectors(Ki,Ji);let t=[0,-ti.z,ti.y,0,-ni.z,ni.y,0,-vi.z,vi.y,ti.z,0,-ti.x,ni.z,0,-ni.x,vi.z,0,-vi.x,-ti.y,ti.x,0,-ni.y,ni.x,0,-vi.y,vi.x,0];return!ta(t,Ki,Zi,Ji,_r)||(t=[1,0,0,0,1,0,0,0,1],!ta(t,Ki,Zi,Ji,_r))?!1:(Mr.crossVectors(ti,ni),t=[Mr.x,Mr.y,Mr.z],ta(t,Ki,Zi,Ji,_r))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,gn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(gn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Fn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Fn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Fn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Fn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Fn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Fn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Fn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Fn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Fn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Fn=[new R,new R,new R,new R,new R,new R,new R,new R],gn=new R,vr=new Jn,Ki=new R,Zi=new R,Ji=new R,ti=new R,ni=new R,vi=new R,Is=new R,_r=new R,Mr=new R,_i=new R;function ta(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){_i.fromArray(i,r);const a=s.x*Math.abs(_i.x)+s.y*Math.abs(_i.y)+s.z*Math.abs(_i.z),c=e.dot(_i),l=t.dot(_i),h=n.dot(_i);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}const mp=new Jn,Us=new R,na=new R;class Gi{constructor(e=new R,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):mp.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Us.subVectors(e,this.center);const t=Us.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Us,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(na.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Us.copy(e.center).add(na)),this.expandByPoint(Us.copy(e.center).sub(na))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const On=new R,ia=new R,yr=new R,ii=new R,sa=new R,Sr=new R,ra=new R;class pc{constructor(e=new R,t=new R(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,On)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=On.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(On.copy(this.origin).addScaledVector(this.direction,t),On.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){ia.copy(e).add(t).multiplyScalar(.5),yr.copy(t).sub(e).normalize(),ii.copy(this.origin).sub(ia);const r=e.distanceTo(t)*.5,o=-this.direction.dot(yr),a=ii.dot(this.direction),c=-ii.dot(yr),l=ii.lengthSq(),h=Math.abs(1-o*o);let u,f,d,m;if(h>0)if(u=o*c-a,f=o*a-c,m=r*h,u>=0)if(f>=-m)if(f<=m){const x=1/h;u*=x,f*=x,d=u*(u+o*f+2*a)+f*(o*u+f+2*c)+l}else f=r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*c)+l;else f=-r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*c)+l;else f<=-m?(u=Math.max(0,-(-o*r+a)),f=u>0?-r:Math.min(Math.max(-r,-c),r),d=-u*u+f*(f+2*c)+l):f<=m?(u=0,f=Math.min(Math.max(-r,-c),r),d=f*(f+2*c)+l):(u=Math.max(0,-(o*r+a)),f=u>0?r:Math.min(Math.max(-r,-c),r),d=-u*u+f*(f+2*c)+l);else f=o>0?-r:r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(ia).addScaledVector(yr,f),d}intersectSphere(e,t){On.subVectors(e.center,this.origin);const n=On.dot(this.direction),s=On.dot(On)-n*n,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,c;const l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return l>=0?(n=(e.min.x-f.x)*l,s=(e.max.x-f.x)*l):(n=(e.max.x-f.x)*l,s=(e.min.x-f.x)*l),h>=0?(r=(e.min.y-f.y)*h,o=(e.max.y-f.y)*h):(r=(e.max.y-f.y)*h,o=(e.min.y-f.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(e.min.z-f.z)*u,c=(e.max.z-f.z)*u):(a=(e.max.z-f.z)*u,c=(e.min.z-f.z)*u),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,On)!==null}intersectTriangle(e,t,n,s,r){sa.subVectors(t,e),Sr.subVectors(n,e),ra.crossVectors(sa,Sr);let o=this.direction.dot(ra),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ii.subVectors(this.origin,e);const c=a*this.direction.dot(Sr.crossVectors(ii,Sr));if(c<0)return null;const l=a*this.direction.dot(sa.cross(ii));if(l<0||c+l>o)return null;const h=-a*ii.dot(ra);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ze{constructor(e,t,n,s,r,o,a,c,l,h,u,f,d,m,x,g){Ze.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,c,l,h,u,f,d,m,x,g)}set(e,t,n,s,r,o,a,c,l,h,u,f,d,m,x,g){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=h,p[10]=u,p[14]=f,p[3]=d,p[7]=m,p[11]=x,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ze().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,s=1/Qi.setFromMatrixColumn(e,0).length(),r=1/Qi.setFromMatrixColumn(e,1).length(),o=1/Qi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){const f=o*h,d=o*u,m=a*h,x=a*u;t[0]=c*h,t[4]=-c*u,t[8]=l,t[1]=d+m*l,t[5]=f-x*l,t[9]=-a*c,t[2]=x-f*l,t[6]=m+d*l,t[10]=o*c}else if(e.order==="YXZ"){const f=c*h,d=c*u,m=l*h,x=l*u;t[0]=f+x*a,t[4]=m*a-d,t[8]=o*l,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=d*a-m,t[6]=x+f*a,t[10]=o*c}else if(e.order==="ZXY"){const f=c*h,d=c*u,m=l*h,x=l*u;t[0]=f-x*a,t[4]=-o*u,t[8]=m+d*a,t[1]=d+m*a,t[5]=o*h,t[9]=x-f*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){const f=o*h,d=o*u,m=a*h,x=a*u;t[0]=c*h,t[4]=m*l-d,t[8]=f*l+x,t[1]=c*u,t[5]=x*l+f,t[9]=d*l-m,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){const f=o*c,d=o*l,m=a*c,x=a*l;t[0]=c*h,t[4]=x-f*u,t[8]=m*u+d,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-l*h,t[6]=d*u+m,t[10]=f-x*u}else if(e.order==="XZY"){const f=o*c,d=o*l,m=a*c,x=a*l;t[0]=c*h,t[4]=-u,t[8]=l*h,t[1]=f*u+x,t[5]=o*h,t[9]=d*u-m,t[2]=m*u-d,t[6]=a*h,t[10]=x*u+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(gp,e,xp)}lookAt(e,t,n){const s=this.elements;return nn.subVectors(e,t),nn.lengthSq()===0&&(nn.z=1),nn.normalize(),si.crossVectors(n,nn),si.lengthSq()===0&&(Math.abs(n.z)===1?nn.x+=1e-4:nn.z+=1e-4,nn.normalize(),si.crossVectors(n,nn)),si.normalize(),br.crossVectors(nn,si),s[0]=si.x,s[4]=br.x,s[8]=nn.x,s[1]=si.y,s[5]=br.y,s[9]=nn.y,s[2]=si.z,s[6]=br.z,s[10]=nn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],u=n[5],f=n[9],d=n[13],m=n[2],x=n[6],g=n[10],p=n[14],M=n[3],_=n[7],v=n[11],w=n[15],A=s[0],C=s[4],P=s[8],S=s[12],b=s[1],L=s[5],U=s[9],N=s[13],V=s[2],z=s[6],W=s[10],$=s[14],G=s[3],ce=s[7],xe=s[11],le=s[15];return r[0]=o*A+a*b+c*V+l*G,r[4]=o*C+a*L+c*z+l*ce,r[8]=o*P+a*U+c*W+l*xe,r[12]=o*S+a*N+c*$+l*le,r[1]=h*A+u*b+f*V+d*G,r[5]=h*C+u*L+f*z+d*ce,r[9]=h*P+u*U+f*W+d*xe,r[13]=h*S+u*N+f*$+d*le,r[2]=m*A+x*b+g*V+p*G,r[6]=m*C+x*L+g*z+p*ce,r[10]=m*P+x*U+g*W+p*xe,r[14]=m*S+x*N+g*$+p*le,r[3]=M*A+_*b+v*V+w*G,r[7]=M*C+_*L+v*z+w*ce,r[11]=M*P+_*U+v*W+w*xe,r[15]=M*S+_*N+v*$+w*le,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],c=e[9],l=e[13],h=e[2],u=e[6],f=e[10],d=e[14],m=e[3],x=e[7],g=e[11],p=e[15];return m*(+r*c*u-s*l*u-r*a*f+n*l*f+s*a*d-n*c*d)+x*(+t*c*d-t*l*f+r*o*f-s*o*d+s*l*h-r*c*h)+g*(+t*l*u-t*a*d-r*o*u+n*o*d+r*a*h-n*l*h)+p*(-s*a*h-t*c*u+t*a*f+s*o*u-n*o*f+n*c*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=e[9],f=e[10],d=e[11],m=e[12],x=e[13],g=e[14],p=e[15],M=u*g*l-x*f*l+x*c*d-a*g*d-u*c*p+a*f*p,_=m*f*l-h*g*l-m*c*d+o*g*d+h*c*p-o*f*p,v=h*x*l-m*u*l+m*a*d-o*x*d-h*a*p+o*u*p,w=m*u*c-h*x*c-m*a*f+o*x*f+h*a*g-o*u*g,A=t*M+n*_+s*v+r*w;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/A;return e[0]=M*C,e[1]=(x*f*r-u*g*r-x*s*d+n*g*d+u*s*p-n*f*p)*C,e[2]=(a*g*r-x*c*r+x*s*l-n*g*l-a*s*p+n*c*p)*C,e[3]=(u*c*r-a*f*r-u*s*l+n*f*l+a*s*d-n*c*d)*C,e[4]=_*C,e[5]=(h*g*r-m*f*r+m*s*d-t*g*d-h*s*p+t*f*p)*C,e[6]=(m*c*r-o*g*r-m*s*l+t*g*l+o*s*p-t*c*p)*C,e[7]=(o*f*r-h*c*r+h*s*l-t*f*l-o*s*d+t*c*d)*C,e[8]=v*C,e[9]=(m*u*r-h*x*r-m*n*d+t*x*d+h*n*p-t*u*p)*C,e[10]=(o*x*r-m*a*r+m*n*l-t*x*l-o*n*p+t*a*p)*C,e[11]=(h*a*r-o*u*r-h*n*l+t*u*l+o*n*d-t*a*d)*C,e[12]=w*C,e[13]=(h*x*s-m*u*s+m*n*f-t*x*f-h*n*g+t*u*g)*C,e[14]=(m*a*s-o*x*s-m*n*c+t*x*c+o*n*g-t*a*g)*C,e[15]=(o*u*s-h*a*s+h*n*c-t*u*c-o*n*f+t*a*f)*C,this}scale(e){const t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,c=e.z,l=r*o,h=r*a;return this.set(l*o+n,l*a-s*c,l*c+s*a,0,l*a+s*c,h*a+n,h*c-s*o,0,l*c-s*a,h*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,r=t._x,o=t._y,a=t._z,c=t._w,l=r+r,h=o+o,u=a+a,f=r*l,d=r*h,m=r*u,x=o*h,g=o*u,p=a*u,M=c*l,_=c*h,v=c*u,w=n.x,A=n.y,C=n.z;return s[0]=(1-(x+p))*w,s[1]=(d+v)*w,s[2]=(m-_)*w,s[3]=0,s[4]=(d-v)*A,s[5]=(1-(f+p))*A,s[6]=(g+M)*A,s[7]=0,s[8]=(m+_)*C,s[9]=(g-M)*C,s[10]=(1-(f+x))*C,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;let r=Qi.set(s[0],s[1],s[2]).length();const o=Qi.set(s[4],s[5],s[6]).length(),a=Qi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],xn.copy(this);const l=1/r,h=1/o,u=1/a;return xn.elements[0]*=l,xn.elements[1]*=l,xn.elements[2]*=l,xn.elements[4]*=h,xn.elements[5]*=h,xn.elements[6]*=h,xn.elements[8]*=u,xn.elements[9]*=u,xn.elements[10]*=u,t.setFromRotationMatrix(xn),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,s,r,o,a=Rn,c=!1){const l=this.elements,h=2*r/(t-e),u=2*r/(n-s),f=(t+e)/(t-e),d=(n+s)/(n-s);let m,x;if(c)m=r/(o-r),x=o*r/(o-r);else if(a===Rn)m=-(o+r)/(o-r),x=-2*o*r/(o-r);else if(a===_o)m=-o/(o-r),x=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=Rn,c=!1){const l=this.elements,h=2/(t-e),u=2/(n-s),f=-(t+e)/(t-e),d=-(n+s)/(n-s);let m,x;if(c)m=1/(o-r),x=o/(o-r);else if(a===Rn)m=-2/(o-r),x=-(o+r)/(o-r);else if(a===_o)m=-1/(o-r),x=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=0,l[12]=f,l[1]=0,l[5]=u,l[9]=0,l[13]=d,l[2]=0,l[6]=0,l[10]=m,l[14]=x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Qi=new R,xn=new Ze,gp=new R(0,0,0),xp=new R(1,1,1),si=new R,br=new R,nn=new R,eh=new Ze,th=new Wt;class $t{constructor(e=0,t=0,n=0,s=$t.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],h=s[9],u=s[2],f=s[6],d=s[10];switch(t){case"XYZ":this._y=Math.asin(Qe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Qe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Qe(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Qe(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Qe(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-Qe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return eh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(eh,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return th.setFromEuler(this),this.setFromQuaternion(th,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}$t.DEFAULT_ORDER="XYZ";class Qu{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let vp=0;const nh=new R,$i=new Wt,zn=new Ze,wr=new R,Ns=new R,_p=new R,Mp=new Wt,ih=new R(1,0,0),sh=new R(0,1,0),rh=new R(0,0,1),oh={type:"added"},yp={type:"removed"},es={type:"childadded",child:null},oa={type:"childremoved",child:null};class dt extends Rs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:vp++}),this.uuid=ki(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=dt.DEFAULT_UP.clone();const e=new R,t=new $t,n=new Wt,s=new R(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ze},normalMatrix:{value:new Ke}}),this.matrix=new Ze,this.matrixWorld=new Ze,this.matrixAutoUpdate=dt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=dt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Qu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return $i.setFromAxisAngle(e,t),this.quaternion.multiply($i),this}rotateOnWorldAxis(e,t){return $i.setFromAxisAngle(e,t),this.quaternion.premultiply($i),this}rotateX(e){return this.rotateOnAxis(ih,e)}rotateY(e){return this.rotateOnAxis(sh,e)}rotateZ(e){return this.rotateOnAxis(rh,e)}translateOnAxis(e,t){return nh.copy(e).applyQuaternion(this.quaternion),this.position.add(nh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ih,e)}translateY(e){return this.translateOnAxis(sh,e)}translateZ(e){return this.translateOnAxis(rh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(zn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?wr.copy(e):wr.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Ns.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?zn.lookAt(Ns,wr,this.up):zn.lookAt(wr,Ns,this.up),this.quaternion.setFromRotationMatrix(zn),s&&(zn.extractRotation(s.matrixWorld),$i.setFromRotationMatrix(zn),this.quaternion.premultiply($i.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(oh),es.child=e,this.dispatchEvent(es),es.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(yp),oa.child=e,this.dispatchEvent(oa),oa.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),zn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),zn.multiply(e.parent.matrixWorld)),e.applyMatrix4(zn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(oh),es.child=e,this.dispatchEvent(es),es.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ns,e,_p),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ns,Mp,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const u=c[l];r(e.shapes,u)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(e.materials,this.material[c]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];s.animations.push(r(e.animations,c))}}if(t){const a=o(e.geometries),c=o(e.materials),l=o(e.textures),h=o(e.images),u=o(e.shapes),f=o(e.skeletons),d=o(e.animations),m=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),m.length>0&&(n.nodes=m)}return n.object=s,n;function o(a){const c=[];for(const l in a){const h=a[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}dt.DEFAULT_UP=new R(0,1,0);dt.DEFAULT_MATRIX_AUTO_UPDATE=!0;dt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const vn=new R,Bn=new R,aa=new R,Hn=new R,ts=new R,ns=new R,ah=new R,la=new R,ca=new R,ha=new R,ua=new st,fa=new st,da=new st;class Mn{constructor(e=new R,t=new R,n=new R){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),vn.subVectors(e,t),s.cross(vn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){vn.subVectors(s,t),Bn.subVectors(n,t),aa.subVectors(e,t);const o=vn.dot(vn),a=vn.dot(Bn),c=vn.dot(aa),l=Bn.dot(Bn),h=Bn.dot(aa),u=o*l-a*a;if(u===0)return r.set(0,0,0),null;const f=1/u,d=(l*c-a*h)*f,m=(o*h-a*c)*f;return r.set(1-d-m,m,d)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Hn)===null?!1:Hn.x>=0&&Hn.y>=0&&Hn.x+Hn.y<=1}static getInterpolation(e,t,n,s,r,o,a,c){return this.getBarycoord(e,t,n,s,Hn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Hn.x),c.addScaledVector(o,Hn.y),c.addScaledVector(a,Hn.z),c)}static getInterpolatedAttribute(e,t,n,s,r,o){return ua.setScalar(0),fa.setScalar(0),da.setScalar(0),ua.fromBufferAttribute(e,t),fa.fromBufferAttribute(e,n),da.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(ua,r.x),o.addScaledVector(fa,r.y),o.addScaledVector(da,r.z),o}static isFrontFacing(e,t,n,s){return vn.subVectors(n,t),Bn.subVectors(e,t),vn.cross(Bn).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return vn.subVectors(this.c,this.b),Bn.subVectors(this.a,this.b),vn.cross(Bn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Mn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Mn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return Mn.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return Mn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Mn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,r=this.c;let o,a;ts.subVectors(s,n),ns.subVectors(r,n),la.subVectors(e,n);const c=ts.dot(la),l=ns.dot(la);if(c<=0&&l<=0)return t.copy(n);ca.subVectors(e,s);const h=ts.dot(ca),u=ns.dot(ca);if(h>=0&&u<=h)return t.copy(s);const f=c*u-h*l;if(f<=0&&c>=0&&h<=0)return o=c/(c-h),t.copy(n).addScaledVector(ts,o);ha.subVectors(e,r);const d=ts.dot(ha),m=ns.dot(ha);if(m>=0&&d<=m)return t.copy(r);const x=d*l-c*m;if(x<=0&&l>=0&&m<=0)return a=l/(l-m),t.copy(n).addScaledVector(ns,a);const g=h*m-d*u;if(g<=0&&u-h>=0&&d-m>=0)return ah.subVectors(r,s),a=(u-h)/(u-h+(d-m)),t.copy(s).addScaledVector(ah,a);const p=1/(g+x+f);return o=x*p,a=f*p,t.copy(n).addScaledVector(ts,o).addScaledVector(ns,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const $u={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ri={h:0,s:0,l:0},Er={h:0,s:0,l:0};function pa(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Ue{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=vt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,it.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=it.workingColorSpace){return this.r=e,this.g=t,this.b=n,it.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=it.workingColorSpace){if(e=fc(e,1),t=Qe(t,0,1),n=Qe(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=pa(o,r,e+1/3),this.g=pa(o,r,e),this.b=pa(o,r,e-1/3)}return it.colorSpaceToWorking(this,s),this}setStyle(e,t=vt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=vt){const n=$u[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Yn(e.r),this.g=Yn(e.g),this.b=Yn(e.b),this}copyLinearToSRGB(e){return this.r=ms(e.r),this.g=ms(e.g),this.b=ms(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=vt){return it.workingToColorSpace(Dt.copy(this),e),Math.round(Qe(Dt.r*255,0,255))*65536+Math.round(Qe(Dt.g*255,0,255))*256+Math.round(Qe(Dt.b*255,0,255))}getHexString(e=vt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=it.workingColorSpace){it.workingToColorSpace(Dt.copy(this),t);const n=Dt.r,s=Dt.g,r=Dt.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let c,l;const h=(a+o)/2;if(a===o)c=0,l=0;else{const u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case n:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-n)/u+2;break;case r:c=(n-s)/u+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=it.workingColorSpace){return it.workingToColorSpace(Dt.copy(this),t),e.r=Dt.r,e.g=Dt.g,e.b=Dt.b,e}getStyle(e=vt){it.workingToColorSpace(Dt.copy(this),e);const t=Dt.r,n=Dt.g,s=Dt.b;return e!==vt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(ri),this.setHSL(ri.h+e,ri.s+t,ri.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ri),e.getHSL(Er);const n=Ys(ri.h,Er.h,t),s=Ys(ri.s,Er.s,t),r=Ys(ri.l,Er.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Dt=new Ue;Ue.NAMES=$u;let Sp=0;class Vi extends Rs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Sp++}),this.uuid=ki(),this.name="",this.type="Material",this.blending=Ii,this.side=Zn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ja,this.blendDst=Qa,this.blendEquation=Ci,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ue(0,0,0),this.blendAlpha=0,this.depthFunc=vs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=qc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Yi,this.stencilZFail=Yi,this.stencilZPass=Yi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ii&&(n.blending=this.blending),this.side!==Zn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ja&&(n.blendSrc=this.blendSrc),this.blendDst!==Qa&&(n.blendDst=this.blendDst),this.blendEquation!==Ci&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==vs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==qc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Yi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Yi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Yi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(t){const r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class dn extends Vi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ue(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $t,this.combine=Iu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const bt=new R,Tr=new ne;let bp=0;class xt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:bp++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Yc,this.updateRanges=[],this.gpuType=Cn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Tr.fromBufferAttribute(this,t),Tr.applyMatrix3(e),this.setXY(t,Tr.x,Tr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)bt.fromBufferAttribute(this,t),bt.applyMatrix3(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)bt.fromBufferAttribute(this,t),bt.applyMatrix4(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)bt.fromBufferAttribute(this,t),bt.applyNormalMatrix(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)bt.fromBufferAttribute(this,t),bt.transformDirection(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=hs(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Nt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=hs(t,this.array)),t}setX(e,t){return this.normalized&&(t=Nt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=hs(t,this.array)),t}setY(e,t){return this.normalized&&(t=Nt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=hs(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Nt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=hs(t,this.array)),t}setW(e,t){return this.normalized&&(t=Nt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Nt(t,this.array),n=Nt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=Nt(t,this.array),n=Nt(n,this.array),s=Nt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=Nt(t,this.array),n=Nt(n,this.array),s=Nt(s,this.array),r=Nt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Yc&&(e.usage=this.usage),e}}class ef extends xt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class tf extends xt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Be extends xt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let wp=0;const un=new Ze,ma=new dt,is=new R,sn=new Jn,Fs=new Jn,Rt=new R;class nt extends Rs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:wp++}),this.uuid=ki(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Zu(e)?tf:ef)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Ke().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return un.makeRotationFromQuaternion(e),this.applyMatrix4(un),this}rotateX(e){return un.makeRotationX(e),this.applyMatrix4(un),this}rotateY(e){return un.makeRotationY(e),this.applyMatrix4(un),this}rotateZ(e){return un.makeRotationZ(e),this.applyMatrix4(un),this}translate(e,t,n){return un.makeTranslation(e,t,n),this.applyMatrix4(un),this}scale(e,t,n){return un.makeScale(e,t,n),this.applyMatrix4(un),this}lookAt(e){return ma.lookAt(e),ma.updateMatrix(),this.applyMatrix4(ma.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(is).negate(),this.translate(is.x,is.y,is.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let s=0,r=e.length;s<r;s++){const o=e[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Be(n,3))}else{const n=Math.min(e.length,t.count);for(let s=0;s<n;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Jn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new R(-1/0,-1/0,-1/0),new R(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const r=t[n];sn.setFromBufferAttribute(r),this.morphTargetsRelative?(Rt.addVectors(this.boundingBox.min,sn.min),this.boundingBox.expandByPoint(Rt),Rt.addVectors(this.boundingBox.max,sn.max),this.boundingBox.expandByPoint(Rt)):(this.boundingBox.expandByPoint(sn.min),this.boundingBox.expandByPoint(sn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Gi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new R,1/0);return}if(e){const n=this.boundingSphere.center;if(sn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];Fs.setFromBufferAttribute(a),this.morphTargetsRelative?(Rt.addVectors(sn.min,Fs.min),sn.expandByPoint(Rt),Rt.addVectors(sn.max,Fs.max),sn.expandByPoint(Rt)):(sn.expandByPoint(Fs.min),sn.expandByPoint(Fs.max))}sn.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)Rt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Rt));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)Rt.fromBufferAttribute(a,l),c&&(is.fromBufferAttribute(e,l),Rt.add(is)),s=Math.max(s,n.distanceToSquared(Rt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new xt(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let P=0;P<n.count;P++)a[P]=new R,c[P]=new R;const l=new R,h=new R,u=new R,f=new ne,d=new ne,m=new ne,x=new R,g=new R;function p(P,S,b){l.fromBufferAttribute(n,P),h.fromBufferAttribute(n,S),u.fromBufferAttribute(n,b),f.fromBufferAttribute(r,P),d.fromBufferAttribute(r,S),m.fromBufferAttribute(r,b),h.sub(l),u.sub(l),d.sub(f),m.sub(f);const L=1/(d.x*m.y-m.x*d.y);isFinite(L)&&(x.copy(h).multiplyScalar(m.y).addScaledVector(u,-d.y).multiplyScalar(L),g.copy(u).multiplyScalar(d.x).addScaledVector(h,-m.x).multiplyScalar(L),a[P].add(x),a[S].add(x),a[b].add(x),c[P].add(g),c[S].add(g),c[b].add(g))}let M=this.groups;M.length===0&&(M=[{start:0,count:e.count}]);for(let P=0,S=M.length;P<S;++P){const b=M[P],L=b.start,U=b.count;for(let N=L,V=L+U;N<V;N+=3)p(e.getX(N+0),e.getX(N+1),e.getX(N+2))}const _=new R,v=new R,w=new R,A=new R;function C(P){w.fromBufferAttribute(s,P),A.copy(w);const S=a[P];_.copy(S),_.sub(w.multiplyScalar(w.dot(S))).normalize(),v.crossVectors(A,S);const L=v.dot(c[P])<0?-1:1;o.setXYZW(P,_.x,_.y,_.z,L)}for(let P=0,S=M.length;P<S;++P){const b=M[P],L=b.start,U=b.count;for(let N=L,V=L+U;N<V;N+=3)C(e.getX(N+0)),C(e.getX(N+1)),C(e.getX(N+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new xt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);const s=new R,r=new R,o=new R,a=new R,c=new R,l=new R,h=new R,u=new R;if(e)for(let f=0,d=e.count;f<d;f+=3){const m=e.getX(f+0),x=e.getX(f+1),g=e.getX(f+2);s.fromBufferAttribute(t,m),r.fromBufferAttribute(t,x),o.fromBufferAttribute(t,g),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,m),c.fromBufferAttribute(n,x),l.fromBufferAttribute(n,g),a.add(h),c.add(h),l.add(h),n.setXYZ(m,a.x,a.y,a.z),n.setXYZ(x,c.x,c.y,c.z),n.setXYZ(g,l.x,l.y,l.z)}else for(let f=0,d=t.count;f<d;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Rt.fromBufferAttribute(e,t),Rt.normalize(),e.setXYZ(t,Rt.x,Rt.y,Rt.z)}toNonIndexed(){function e(a,c){const l=a.array,h=a.itemSize,u=a.normalized,f=new l.constructor(c.length*h);let d=0,m=0;for(let x=0,g=c.length;x<g;x++){a.isInterleavedBufferAttribute?d=c[x]*a.data.stride+a.offset:d=c[x]*h;for(let p=0;p<h;p++)f[m++]=l[d++]}return new xt(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new nt,n=this.index.array,s=this.attributes;for(const a in s){const c=s[a],l=e(c,n);t.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const c=[],l=r[a];for(let h=0,u=l.length;h<u;h++){const f=l[h],d=e(f,n);c.push(d)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let u=0,f=l.length;u<f;u++){const d=l[u];h.push(d.toJSON(e.data))}h.length>0&&(s[c]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const s=e.attributes;for(const l in s){const h=s[l];this.setAttribute(l,h.clone(t))}const r=e.morphAttributes;for(const l in r){const h=[],u=r[l];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let l=0,h=o.length;l<h;l++){const u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const lh=new Ze,Mi=new pc,Ar=new Gi,ch=new R,Cr=new R,Rr=new R,Pr=new R,ga=new R,Lr=new R,hh=new R,Dr=new R;class at extends dt{constructor(e=new nt,t=new dn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){Lr.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const h=a[c],u=r[c];h!==0&&(ga.fromBufferAttribute(u,e),o?Lr.addScaledVector(ga,h):Lr.addScaledVector(ga.sub(t),h))}t.add(Lr)}return t}raycast(e,t){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ar.copy(n.boundingSphere),Ar.applyMatrix4(r),Mi.copy(e.ray).recast(e.near),!(Ar.containsPoint(Mi.origin)===!1&&(Mi.intersectSphere(Ar,ch)===null||Mi.origin.distanceToSquared(ch)>(e.far-e.near)**2))&&(lh.copy(r).invert(),Mi.copy(e.ray).applyMatrix4(lh),!(n.boundingBox!==null&&Mi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Mi)))}_computeIntersections(e,t,n){let s;const r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,x=f.length;m<x;m++){const g=f[m],p=o[g.materialIndex],M=Math.max(g.start,d.start),_=Math.min(a.count,Math.min(g.start+g.count,d.start+d.count));for(let v=M,w=_;v<w;v+=3){const A=a.getX(v),C=a.getX(v+1),P=a.getX(v+2);s=Ir(this,p,e,n,l,h,u,A,C,P),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{const m=Math.max(0,d.start),x=Math.min(a.count,d.start+d.count);for(let g=m,p=x;g<p;g+=3){const M=a.getX(g),_=a.getX(g+1),v=a.getX(g+2);s=Ir(this,o,e,n,l,h,u,M,_,v),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let m=0,x=f.length;m<x;m++){const g=f[m],p=o[g.materialIndex],M=Math.max(g.start,d.start),_=Math.min(c.count,Math.min(g.start+g.count,d.start+d.count));for(let v=M,w=_;v<w;v+=3){const A=v,C=v+1,P=v+2;s=Ir(this,p,e,n,l,h,u,A,C,P),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{const m=Math.max(0,d.start),x=Math.min(c.count,d.start+d.count);for(let g=m,p=x;g<p;g+=3){const M=g,_=g+1,v=g+2;s=Ir(this,o,e,n,l,h,u,M,_,v),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}}}function Ep(i,e,t,n,s,r,o,a){let c;if(e.side===Gt?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,e.side===Zn,a),c===null)return null;Dr.copy(a),Dr.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(Dr);return l<t.near||l>t.far?null:{distance:l,point:Dr.clone(),object:i}}function Ir(i,e,t,n,s,r,o,a,c,l){i.getVertexPosition(a,Cr),i.getVertexPosition(c,Rr),i.getVertexPosition(l,Pr);const h=Ep(i,e,t,n,Cr,Rr,Pr,hh);if(h){const u=new R;Mn.getBarycoord(hh,Cr,Rr,Pr,u),s&&(h.uv=Mn.getInterpolatedAttribute(s,a,c,l,u,new ne)),r&&(h.uv1=Mn.getInterpolatedAttribute(r,a,c,l,u,new ne)),o&&(h.normal=Mn.getInterpolatedAttribute(o,a,c,l,u,new R),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const f={a,b:c,c:l,normal:new R,materialIndex:0};Mn.getNormal(Cr,Rr,Pr,f.normal),h.face=f,h.barycoord=u}return h}class ln extends nt{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const c=[],l=[],h=[],u=[];let f=0,d=0;m("z","y","x",-1,-1,n,t,e,o,r,0),m("z","y","x",1,-1,n,t,-e,o,r,1),m("x","z","y",1,1,e,n,t,s,o,2),m("x","z","y",1,-1,e,n,-t,s,o,3),m("x","y","z",1,-1,e,t,n,s,r,4),m("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new Be(l,3)),this.setAttribute("normal",new Be(h,3)),this.setAttribute("uv",new Be(u,2));function m(x,g,p,M,_,v,w,A,C,P,S){const b=v/C,L=w/P,U=v/2,N=w/2,V=A/2,z=C+1,W=P+1;let $=0,G=0;const ce=new R;for(let xe=0;xe<W;xe++){const le=xe*L-N;for(let Oe=0;Oe<z;Oe++){const Fe=Oe*b-U;ce[x]=Fe*M,ce[g]=le*_,ce[p]=V,l.push(ce.x,ce.y,ce.z),ce[x]=0,ce[g]=0,ce[p]=A>0?1:-1,h.push(ce.x,ce.y,ce.z),u.push(Oe/C),u.push(1-xe/P),$+=1}}for(let xe=0;xe<P;xe++)for(let le=0;le<C;le++){const Oe=f+le+z*xe,Fe=f+le+z*(xe+1),$e=f+(le+1)+z*(xe+1),qe=f+(le+1)+z*xe;c.push(Oe,Fe,qe),c.push(Fe,$e,qe),G+=6}a.addGroup(d,G,S),d+=G,f+=$}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ln(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function bs(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function Ft(i){const e={};for(let t=0;t<i.length;t++){const n=bs(i[t]);for(const s in n)e[s]=n[s]}return e}function Tp(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function nf(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:it.workingColorSpace}const Pn={clone:bs,merge:Ft};var Ap=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Cp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class gt extends Vi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ap,this.fragmentShader=Cp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=bs(e.uniforms),this.uniformsGroups=Tp(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class sf extends dt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ze,this.projectionMatrix=new Ze,this.projectionMatrixInverse=new Ze,this.coordinateSystem=Rn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const oi=new R,uh=new ne,fh=new ne;class Bt extends sf{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ss*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(qs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ss*2*Math.atan(Math.tan(qs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){oi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(oi.x,oi.y).multiplyScalar(-e/oi.z),oi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(oi.x,oi.y).multiplyScalar(-e/oi.z)}getViewSize(e,t){return this.getViewBounds(e,uh,fh),t.subVectors(fh,uh)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(qs*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,t-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ss=-90,rs=1;class Rp extends dt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Bt(ss,rs,e,t);s.layers=this.layers,this.add(s);const r=new Bt(ss,rs,e,t);r.layers=this.layers,this.add(r);const o=new Bt(ss,rs,e,t);o.layers=this.layers,this.add(o);const a=new Bt(ss,rs,e,t);a.layers=this.layers,this.add(a);const c=new Bt(ss,rs,e,t);c.layers=this.layers,this.add(c);const l=new Bt(ss,rs,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,c]=t;for(const l of t)this.remove(l);if(e===Rn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===_o)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,c,l,h]=this.children,u=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;const x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,o),e.setRenderTarget(n,2,s),e.render(t,a),e.setRenderTarget(n,3,s),e.render(t,c),e.setRenderTarget(n,4,s),e.render(t,l),n.texture.generateMipmaps=x,e.setRenderTarget(n,5,s),e.render(t,h),e.setRenderTarget(u,f,d),e.xr.enabled=m,n.texture.needsPMREMUpdate=!0}}class rf extends Tt{constructor(e=[],t=_s,n,s,r,o,a,c,l,h){super(e,t,n,s,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Pp extends Kt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new rf(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new ln(5,5,5),r=new gt({name:"CubemapFromEquirect",uniforms:bs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Gt,blending:qn});r.uniforms.tEquirect.value=t;const o=new at(s,r),a=t.minFilter;return t.minFilter===Sn&&(t.minFilter=on),new Rp(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}}class kt extends dt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Lp={type:"move"};class xa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new kt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new kt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new R,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new R),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new kt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new R,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new R),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(const x of e.hand.values()){const g=t.getJointPose(x,n),p=this._getHandJoint(l,x);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}const h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,m=.005;l.inputState.pinching&&f>d+m?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&f<=d-m&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Lp)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new kt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class mc{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Ue(e),this.density=t}clone(){return new mc(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Dp extends dt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new $t,this.environmentIntensity=1,this.environmentRotation=new $t,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Ur=new R,dh=new R;class Ip extends dt{constructor(){super(),this.isLOD=!0,this._currentLevel=0,this.type="LOD",Object.defineProperties(this,{levels:{enumerable:!0,value:[]}}),this.autoUpdate=!0}copy(e){super.copy(e,!1);const t=e.levels;for(let n=0,s=t.length;n<s;n++){const r=t[n];this.addLevel(r.object.clone(),r.distance,r.hysteresis)}return this.autoUpdate=e.autoUpdate,this}addLevel(e,t=0,n=0){t=Math.abs(t);const s=this.levels;let r;for(r=0;r<s.length&&!(t<s[r].distance);r++);return s.splice(r,0,{distance:t,hysteresis:n,object:e}),this.add(e),this}removeLevel(e){const t=this.levels;for(let n=0;n<t.length;n++)if(t[n].distance===e){const s=t.splice(n,1);return this.remove(s[0].object),!0}return!1}getCurrentLevel(){return this._currentLevel}getObjectForDistance(e){const t=this.levels;if(t.length>0){let n,s;for(n=1,s=t.length;n<s;n++){let r=t[n].distance;if(t[n].object.visible&&(r-=r*t[n].hysteresis),e<r)break}return t[n-1].object}return null}raycast(e,t){if(this.levels.length>0){Ur.setFromMatrixPosition(this.matrixWorld);const s=e.ray.origin.distanceTo(Ur);this.getObjectForDistance(s).raycast(e,t)}}update(e){const t=this.levels;if(t.length>1){Ur.setFromMatrixPosition(e.matrixWorld),dh.setFromMatrixPosition(this.matrixWorld);const n=Ur.distanceTo(dh)/e.zoom;t[0].object.visible=!0;let s,r;for(s=1,r=t.length;s<r;s++){let o=t[s].distance;if(t[s].object.visible&&(o-=o*t[s].hysteresis),n>=o)t[s-1].object.visible=!1,t[s].object.visible=!0;else break}for(this._currentLevel=s-1;s<r;s++)t[s].object.visible=!1}}toJSON(e){const t=super.toJSON(e);this.autoUpdate===!1&&(t.object.autoUpdate=!1),t.object.levels=[];const n=this.levels;for(let s=0,r=n.length;s<r;s++){const o=n[s];t.object.levels.push({object:o.object.uuid,distance:o.distance,hysteresis:o.hysteresis})}return t}}class Io extends Tt{constructor(e=null,t=1,n=1,s,r,o,a,c,l=Vt,h=Vt,u,f){super(null,o,a,c,l,h,s,r,u,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ol extends xt{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const os=new Ze,ph=new Ze,Nr=[],mh=new Jn,Up=new Ze,Os=new at,zs=new Gi;class js extends at{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Ol(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Up)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Jn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,os),mh.copy(e.boundingBox).applyMatrix4(os),this.boundingBox.union(mh)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Gi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,os),zs.copy(e.boundingSphere).applyMatrix4(os),this.boundingSphere.union(zs)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(e,t){const n=this.matrixWorld,s=this.count;if(Os.geometry=this.geometry,Os.material=this.material,Os.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),zs.copy(this.boundingSphere),zs.applyMatrix4(n),e.ray.intersectsSphere(zs)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,os),ph.multiplyMatrices(n,os),Os.matrixWorld=ph,Os.raycast(e,Nr);for(let o=0,a=Nr.length;o<a;o++){const c=Nr[o];c.instanceId=r,c.object=this,t.push(c)}Nr.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Ol(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Io(new Float32Array(s*this.count),s,this.count,lc,Cn));const r=this.morphTexture.source.data.data;let o=0;for(let l=0;l<n.length;l++)o+=n[l];const a=this.geometry.morphTargetsRelative?1:1-o,c=s*e;r[c]=a,r.set(n,c+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const va=new R,Np=new R,Fp=new Ke;class li{constructor(e=new R(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=va.subVectors(n,t).cross(Np.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(va),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Fp.getNormalMatrix(e),s=this.coplanarPoint(va).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const yi=new Gi,Op=new ne(.5,.5),Fr=new R;class gc{constructor(e=new li,t=new li,n=new li,s=new li,r=new li,o=new li){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Rn,n=!1){const s=this.planes,r=e.elements,o=r[0],a=r[1],c=r[2],l=r[3],h=r[4],u=r[5],f=r[6],d=r[7],m=r[8],x=r[9],g=r[10],p=r[11],M=r[12],_=r[13],v=r[14],w=r[15];if(s[0].setComponents(l-o,d-h,p-m,w-M).normalize(),s[1].setComponents(l+o,d+h,p+m,w+M).normalize(),s[2].setComponents(l+a,d+u,p+x,w+_).normalize(),s[3].setComponents(l-a,d-u,p-x,w-_).normalize(),n)s[4].setComponents(c,f,g,v).normalize(),s[5].setComponents(l-c,d-f,p-g,w-v).normalize();else if(s[4].setComponents(l-c,d-f,p-g,w-v).normalize(),t===Rn)s[5].setComponents(l+c,d+f,p+g,w+v).normalize();else if(t===_o)s[5].setComponents(c,f,g,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),yi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),yi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(yi)}intersectsSprite(e){yi.center.set(0,0,0);const t=Op.distanceTo(e.center);return yi.radius=.7071067811865476+t,yi.applyMatrix4(e.matrixWorld),this.intersectsSphere(yi)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(Fr.x=s.normal.x>0?e.max.x:e.min.x,Fr.y=s.normal.y>0?e.max.y:e.min.y,Fr.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Fr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class of extends Vi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ue(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Mo=new R,yo=new R,gh=new Ze,Bs=new pc,Or=new Gi,_a=new R,xh=new R;class zp extends dt{constructor(e=new nt,t=new of){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)Mo.fromBufferAttribute(t,s-1),yo.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=Mo.distanceTo(yo);e.setAttribute("lineDistance",new Be(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Or.copy(n.boundingSphere),Or.applyMatrix4(s),Or.radius+=r,e.ray.intersectsSphere(Or)===!1)return;gh.copy(s).invert(),Bs.copy(e.ray).applyMatrix4(gh);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,h=n.index,f=n.attributes.position;if(h!==null){const d=Math.max(0,o.start),m=Math.min(h.count,o.start+o.count);for(let x=d,g=m-1;x<g;x+=l){const p=h.getX(x),M=h.getX(x+1),_=zr(this,e,Bs,c,p,M,x);_&&t.push(_)}if(this.isLineLoop){const x=h.getX(m-1),g=h.getX(d),p=zr(this,e,Bs,c,x,g,m-1);p&&t.push(p)}}else{const d=Math.max(0,o.start),m=Math.min(f.count,o.start+o.count);for(let x=d,g=m-1;x<g;x+=l){const p=zr(this,e,Bs,c,x,x+1,x);p&&t.push(p)}if(this.isLineLoop){const x=zr(this,e,Bs,c,m-1,d,m-1);x&&t.push(x)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function zr(i,e,t,n,s,r,o){const a=i.geometry.attributes.position;if(Mo.fromBufferAttribute(a,s),yo.fromBufferAttribute(a,r),t.distanceSqToSegment(Mo,yo,_a,xh)>n)return;_a.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(_a);if(!(l<e.near||l>e.far))return{distance:l,point:xh.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}const vh=new R,_h=new R;class Bp extends zp{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)vh.fromBufferAttribute(t,s),_h.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+vh.distanceTo(_h);e.setAttribute("lineDistance",new Be(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Hp extends Vi{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ue(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Mh=new Ze,zl=new pc,Br=new Gi,Hr=new R;class xc extends dt{constructor(e=new nt,t=new Hp){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Br.copy(n.boundingSphere),Br.applyMatrix4(s),Br.radius+=r,e.ray.intersectsSphere(Br)===!1)return;Mh.copy(s).invert(),zl.copy(e.ray).applyMatrix4(Mh);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,u=n.attributes.position;if(l!==null){const f=Math.max(0,o.start),d=Math.min(l.count,o.start+o.count);for(let m=f,x=d;m<x;m++){const g=l.getX(m);Hr.fromBufferAttribute(u,g),yh(Hr,g,c,s,e,t,this)}}else{const f=Math.max(0,o.start),d=Math.min(u.count,o.start+o.count);for(let m=f,x=d;m<x;m++)Hr.fromBufferAttribute(u,m),yh(Hr,m,c,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function yh(i,e,t,n,s,r,o){const a=zl.distanceSqToPoint(i);if(a<t){const c=new R;zl.closestPointToPoint(i,c),c.applyMatrix4(n);const l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class Dn extends Tt{constructor(e,t,n,s,r,o,a,c,l){super(e,t,n,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class af extends Tt{constructor(e,t,n=Fi,s,r,o,a=Vt,c=Vt,l,h=ir,u=1){if(h!==ir&&h!==sr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:e,height:t,depth:u};super(f,s,r,o,a,c,h,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new dc(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class lf extends Tt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Ks extends nt{constructor(e=1,t=1,n=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:n,radialSegments:s,heightSegments:r},t=Math.max(0,t),n=Math.max(1,Math.floor(n)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));const o=[],a=[],c=[],l=[],h=t/2,u=Math.PI/2*e,f=t,d=2*u+f,m=n*2+r,x=s+1,g=new R,p=new R;for(let M=0;M<=m;M++){let _=0,v=0,w=0,A=0;if(M<=n){const S=M/n,b=S*Math.PI/2;v=-h-e*Math.cos(b),w=e*Math.sin(b),A=-e*Math.cos(b),_=S*u}else if(M<=n+r){const S=(M-n)/r;v=-h+S*t,w=e,A=0,_=u+S*f}else{const S=(M-n-r)/n,b=S*Math.PI/2;v=h+e*Math.sin(b),w=e*Math.cos(b),A=e*Math.sin(b),_=u+f+S*u}const C=Math.max(0,Math.min(1,_/d));let P=0;M===0?P=.5/s:M===m&&(P=-.5/s);for(let S=0;S<=s;S++){const b=S/s,L=b*Math.PI*2,U=Math.sin(L),N=Math.cos(L);p.x=-w*N,p.y=v,p.z=w*U,a.push(p.x,p.y,p.z),g.set(-w*N,A,w*U),g.normalize(),c.push(g.x,g.y,g.z),l.push(b+P,C)}if(M>0){const S=(M-1)*x;for(let b=0;b<s;b++){const L=S+b,U=S+b+1,N=M*x+b,V=M*x+b+1;o.push(L,U,N),o.push(U,V,N)}}}this.setIndex(o),this.setAttribute("position",new Be(a,3)),this.setAttribute("normal",new Be(c,3)),this.setAttribute("uv",new Be(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ks(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}}class vc extends nt{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);const r=[],o=[],a=[],c=[],l=new R,h=new ne;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let u=0,f=3;u<=t;u++,f+=3){const d=n+u/t*s;l.x=e*Math.cos(d),l.y=e*Math.sin(d),o.push(l.x,l.y,l.z),a.push(0,0,1),h.x=(o[f]/e+1)/2,h.y=(o[f+1]/e+1)/2,c.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new Be(o,3)),this.setAttribute("normal",new Be(a,3)),this.setAttribute("uv",new Be(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new vc(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class mn extends nt{constructor(e=1,t=1,n=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};const l=this;s=Math.floor(s),r=Math.floor(r);const h=[],u=[],f=[],d=[];let m=0;const x=[],g=n/2;let p=0;M(),o===!1&&(e>0&&_(!0),t>0&&_(!1)),this.setIndex(h),this.setAttribute("position",new Be(u,3)),this.setAttribute("normal",new Be(f,3)),this.setAttribute("uv",new Be(d,2));function M(){const v=new R,w=new R;let A=0;const C=(t-e)/n;for(let P=0;P<=r;P++){const S=[],b=P/r,L=b*(t-e)+e;for(let U=0;U<=s;U++){const N=U/s,V=N*c+a,z=Math.sin(V),W=Math.cos(V);w.x=L*z,w.y=-b*n+g,w.z=L*W,u.push(w.x,w.y,w.z),v.set(z,C,W).normalize(),f.push(v.x,v.y,v.z),d.push(N,1-b),S.push(m++)}x.push(S)}for(let P=0;P<s;P++)for(let S=0;S<r;S++){const b=x[S][P],L=x[S+1][P],U=x[S+1][P+1],N=x[S][P+1];(e>0||S!==0)&&(h.push(b,L,N),A+=3),(t>0||S!==r-1)&&(h.push(L,U,N),A+=3)}l.addGroup(p,A,0),p+=A}function _(v){const w=m,A=new ne,C=new R;let P=0;const S=v===!0?e:t,b=v===!0?1:-1;for(let U=1;U<=s;U++)u.push(0,g*b,0),f.push(0,b,0),d.push(.5,.5),m++;const L=m;for(let U=0;U<=s;U++){const V=U/s*c+a,z=Math.cos(V),W=Math.sin(V);C.x=S*W,C.y=g*b,C.z=S*z,u.push(C.x,C.y,C.z),f.push(0,b,0),A.x=z*.5+.5,A.y=W*.5*b+.5,d.push(A.x,A.y),m++}for(let U=0;U<s;U++){const N=w+U,V=L+U;v===!0?h.push(V,V+1,N):h.push(V+1,V,N),P+=3}l.addGroup(p,P,v===!0?1:2),p+=P}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new mn(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Uo extends mn{constructor(e=1,t=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new Uo(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class _c extends nt{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};const r=[],o=[];a(s),l(n),h(),this.setAttribute("position",new Be(r,3)),this.setAttribute("normal",new Be(r.slice(),3)),this.setAttribute("uv",new Be(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(M){const _=new R,v=new R,w=new R;for(let A=0;A<t.length;A+=3)d(t[A+0],_),d(t[A+1],v),d(t[A+2],w),c(_,v,w,M)}function c(M,_,v,w){const A=w+1,C=[];for(let P=0;P<=A;P++){C[P]=[];const S=M.clone().lerp(v,P/A),b=_.clone().lerp(v,P/A),L=A-P;for(let U=0;U<=L;U++)U===0&&P===A?C[P][U]=S:C[P][U]=S.clone().lerp(b,U/L)}for(let P=0;P<A;P++)for(let S=0;S<2*(A-P)-1;S++){const b=Math.floor(S/2);S%2===0?(f(C[P][b+1]),f(C[P+1][b]),f(C[P][b])):(f(C[P][b+1]),f(C[P+1][b+1]),f(C[P+1][b]))}}function l(M){const _=new R;for(let v=0;v<r.length;v+=3)_.x=r[v+0],_.y=r[v+1],_.z=r[v+2],_.normalize().multiplyScalar(M),r[v+0]=_.x,r[v+1]=_.y,r[v+2]=_.z}function h(){const M=new R;for(let _=0;_<r.length;_+=3){M.x=r[_+0],M.y=r[_+1],M.z=r[_+2];const v=g(M)/2/Math.PI+.5,w=p(M)/Math.PI+.5;o.push(v,1-w)}m(),u()}function u(){for(let M=0;M<o.length;M+=6){const _=o[M+0],v=o[M+2],w=o[M+4],A=Math.max(_,v,w),C=Math.min(_,v,w);A>.9&&C<.1&&(_<.2&&(o[M+0]+=1),v<.2&&(o[M+2]+=1),w<.2&&(o[M+4]+=1))}}function f(M){r.push(M.x,M.y,M.z)}function d(M,_){const v=M*3;_.x=e[v+0],_.y=e[v+1],_.z=e[v+2]}function m(){const M=new R,_=new R,v=new R,w=new R,A=new ne,C=new ne,P=new ne;for(let S=0,b=0;S<r.length;S+=9,b+=6){M.set(r[S+0],r[S+1],r[S+2]),_.set(r[S+3],r[S+4],r[S+5]),v.set(r[S+6],r[S+7],r[S+8]),A.set(o[b+0],o[b+1]),C.set(o[b+2],o[b+3]),P.set(o[b+4],o[b+5]),w.copy(M).add(_).add(v).divideScalar(3);const L=g(w);x(A,b+0,M,L),x(C,b+2,_,L),x(P,b+4,v,L)}}function x(M,_,v,w){w<0&&M.x===1&&(o[_]=M.x-1),v.x===0&&v.z===0&&(o[_]=w/2/Math.PI+.5)}function g(M){return Math.atan2(M.z,-M.x)}function p(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new _c(e.vertices,e.indices,e.radius,e.details)}}class Un{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const n=this.getLengths();let s=0;const r=n.length;let o;t?o=t:o=e*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=n[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===o)return s/(r-1);const h=n[s],f=n[s+1]-h,d=(o-h)/f;return(s+d)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),c=t||(o.isVector2?new ne:new R);return c.copy(a).sub(o).normalize(),c}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){const n=new R,s=[],r=[],o=[],a=new R,c=new Ze;for(let d=0;d<=e;d++){const m=d/e;s[d]=this.getTangentAt(m,new R)}r[0]=new R,o[0]=new R;let l=Number.MAX_VALUE;const h=Math.abs(s[0].x),u=Math.abs(s[0].y),f=Math.abs(s[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),f<=l&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let d=1;d<=e;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(s[d-1],s[d]),a.length()>Number.EPSILON){a.normalize();const m=Math.acos(Qe(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(c.makeRotationAxis(a,m))}o[d].crossVectors(s[d],r[d])}if(t===!0){let d=Math.acos(Qe(r[0].dot(r[e]),-1,1));d/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(d=-d);for(let m=1;m<=e;m++)r[m].applyMatrix4(c.makeRotationAxis(s[m],d*m)),o[m].crossVectors(s[m],r[m])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Mc extends Un{constructor(e=0,t=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(e,t=new ne){const n=t,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+e*r;let c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=c-this.aX,d=l-this.aY;c=f*h-d*u+this.aX,l=f*u+d*h+this.aY}return n.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class kp extends Mc{constructor(e,t,n,s,r,o){super(e,t,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function yc(){let i=0,e=0,t=0,n=0;function s(r,o,a,c){i=r,e=a,t=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,h,u){let f=(o-r)/l-(a-r)/(l+h)+(a-o)/h,d=(a-o)/h-(c-o)/(h+u)+(c-a)/u;f*=h,d*=h,s(o,a,f,d)},calc:function(r){const o=r*r,a=o*r;return i+e*r+t*o+n*a}}}const kr=new R,Ma=new yc,ya=new yc,Sa=new yc;class No extends Un{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new R){const n=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e;let a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,h;this.closed||a>0?l=s[(a-1)%r]:(kr.subVectors(s[0],s[1]).add(s[0]),l=kr);const u=s[a%r],f=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(kr.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=kr),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let m=Math.pow(l.distanceToSquared(u),d),x=Math.pow(u.distanceToSquared(f),d),g=Math.pow(f.distanceToSquared(h),d);x<1e-4&&(x=1),m<1e-4&&(m=x),g<1e-4&&(g=x),Ma.initNonuniformCatmullRom(l.x,u.x,f.x,h.x,m,x,g),ya.initNonuniformCatmullRom(l.y,u.y,f.y,h.y,m,x,g),Sa.initNonuniformCatmullRom(l.z,u.z,f.z,h.z,m,x,g)}else this.curveType==="catmullrom"&&(Ma.initCatmullRom(l.x,u.x,f.x,h.x,this.tension),ya.initCatmullRom(l.y,u.y,f.y,h.y,this.tension),Sa.initCatmullRom(l.z,u.z,f.z,h.z,this.tension));return n.set(Ma.calc(c),ya.calc(c),Sa.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(new R().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Sh(i,e,t,n,s){const r=(n-e)*.5,o=(s-t)*.5,a=i*i,c=i*a;return(2*t-2*n+r+o)*c+(-3*t+3*n-2*r-o)*a+r*i+t}function Gp(i,e){const t=1-i;return t*t*e}function Vp(i,e){return 2*(1-i)*i*e}function Wp(i,e){return i*i*e}function Zs(i,e,t,n){return Gp(i,e)+Vp(i,t)+Wp(i,n)}function Xp(i,e){const t=1-i;return t*t*t*e}function qp(i,e){const t=1-i;return 3*t*t*i*e}function Yp(i,e){return 3*(1-i)*i*i*e}function jp(i,e){return i*i*i*e}function Js(i,e,t,n,s){return Xp(i,e)+qp(i,t)+Yp(i,n)+jp(i,s)}class cf extends Un{constructor(e=new ne,t=new ne,n=new ne,s=new ne){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new ne){const n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Js(e,s.x,r.x,o.x,a.x),Js(e,s.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Kp extends Un{constructor(e=new R,t=new R,n=new R,s=new R){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new R){const n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Js(e,s.x,r.x,o.x,a.x),Js(e,s.y,r.y,o.y,a.y),Js(e,s.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class hf extends Un{constructor(e=new ne,t=new ne){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ne){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ne){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class uf extends Un{constructor(e=new R,t=new R){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new R){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new R){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class ff extends Un{constructor(e=new ne,t=new ne,n=new ne){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new ne){const n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(Zs(e,s.x,r.x,o.x),Zs(e,s.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class df extends Un{constructor(e=new R,t=new R,n=new R){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new R){const n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(Zs(e,s.x,r.x,o.x),Zs(e,s.y,r.y,o.y),Zs(e,s.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Sc extends Un{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ne){const n=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],l=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return n.set(Sh(a,c.x,l.x,h.x,u.x),Sh(a,c.y,l.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(new ne().fromArray(s))}return this}}var So=Object.freeze({__proto__:null,ArcCurve:kp,CatmullRomCurve3:No,CubicBezierCurve:cf,CubicBezierCurve3:Kp,EllipseCurve:Mc,LineCurve:hf,LineCurve3:uf,QuadraticBezierCurve:ff,QuadraticBezierCurve3:df,SplineCurve:Sc});class pf extends Un{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new So[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const o=s[r]-n,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,t)}r++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,c=o.getPoints(a);for(let l=0;l<c.length;l++){const h=c[l];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const s=e.curves[t];this.curves.push(new So[s.type]().fromJSON(s))}return this}}class Bl extends pf{constructor(e){super(),this.type="Path",this.currentPoint=new ne,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new hf(this.currentPoint.clone(),new ne(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){const r=new ff(this.currentPoint.clone(),new ne(e,t),new ne(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,o){const a=new cf(this.currentPoint.clone(),new ne(e,t),new ne(n,s),new ne(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new Sc(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,o){const a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+a,t+c,n,s,r,o),this}absarc(e,t,n,s,r,o){return this.absellipse(e,t,n,n,s,r,o),this}ellipse(e,t,n,s,r,o,a,c){const l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+l,t+h,n,s,r,o,a,c),this}absellipse(e,t,n,s,r,o,a,c){const l=new Mc(e,t,n,s,r,o,a,c);if(this.curves.length>0){const u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);const h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class ei extends Bl{constructor(e){super(e),this.uuid=ki(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const s=e.holes[t];this.holes.push(new Bl().fromJSON(s))}return this}}function Zp(i,e,t=2){const n=e&&e.length,s=n?e[0]*t:i.length;let r=mf(i,0,s,t,!0);const o=[];if(!r||r.next===r.prev)return o;let a,c,l;if(n&&(r=tm(i,e,r,t)),i.length>80*t){a=1/0,c=1/0;let h=-1/0,u=-1/0;for(let f=t;f<s;f+=t){const d=i[f],m=i[f+1];d<a&&(a=d),m<c&&(c=m),d>h&&(h=d),m>u&&(u=m)}l=Math.max(h-a,u-c),l=l!==0?32767/l:0}return ar(r,o,t,a,c,l,0),o}function mf(i,e,t,n,s){let r;if(s===fm(i,e,t,n)>0)for(let o=e;o<t;o+=n)r=bh(o/n|0,i[o],i[o+1],r);else for(let o=t-n;o>=e;o-=n)r=bh(o/n|0,i[o],i[o+1],r);return r&&ws(r,r.next)&&(cr(r),r=r.next),r}function Oi(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(ws(t,t.next)||yt(t.prev,t,t.next)===0)){if(cr(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function ar(i,e,t,n,s,r,o){if(!i)return;!o&&r&&om(i,n,s,r);let a=i;for(;i.prev!==i.next;){const c=i.prev,l=i.next;if(r?Qp(i,n,s,r):Jp(i)){e.push(c.i,i.i,l.i),cr(i),i=l.next,a=l.next;continue}if(i=l,i===a){o?o===1?(i=$p(Oi(i),e),ar(i,e,t,n,s,r,2)):o===2&&em(i,e,t,n,s,r):ar(Oi(i),e,t,n,s,r,1);break}}}function Jp(i){const e=i.prev,t=i,n=i.next;if(yt(e,t,n)>=0)return!1;const s=e.x,r=t.x,o=n.x,a=e.y,c=t.y,l=n.y,h=Math.min(s,r,o),u=Math.min(a,c,l),f=Math.max(s,r,o),d=Math.max(a,c,l);let m=n.next;for(;m!==e;){if(m.x>=h&&m.x<=f&&m.y>=u&&m.y<=d&&Gs(s,a,r,c,o,l,m.x,m.y)&&yt(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function Qp(i,e,t,n){const s=i.prev,r=i,o=i.next;if(yt(s,r,o)>=0)return!1;const a=s.x,c=r.x,l=o.x,h=s.y,u=r.y,f=o.y,d=Math.min(a,c,l),m=Math.min(h,u,f),x=Math.max(a,c,l),g=Math.max(h,u,f),p=Hl(d,m,e,t,n),M=Hl(x,g,e,t,n);let _=i.prevZ,v=i.nextZ;for(;_&&_.z>=p&&v&&v.z<=M;){if(_.x>=d&&_.x<=x&&_.y>=m&&_.y<=g&&_!==s&&_!==o&&Gs(a,h,c,u,l,f,_.x,_.y)&&yt(_.prev,_,_.next)>=0||(_=_.prevZ,v.x>=d&&v.x<=x&&v.y>=m&&v.y<=g&&v!==s&&v!==o&&Gs(a,h,c,u,l,f,v.x,v.y)&&yt(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;_&&_.z>=p;){if(_.x>=d&&_.x<=x&&_.y>=m&&_.y<=g&&_!==s&&_!==o&&Gs(a,h,c,u,l,f,_.x,_.y)&&yt(_.prev,_,_.next)>=0)return!1;_=_.prevZ}for(;v&&v.z<=M;){if(v.x>=d&&v.x<=x&&v.y>=m&&v.y<=g&&v!==s&&v!==o&&Gs(a,h,c,u,l,f,v.x,v.y)&&yt(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function $p(i,e){let t=i;do{const n=t.prev,s=t.next.next;!ws(n,s)&&xf(n,t,t.next,s)&&lr(n,s)&&lr(s,n)&&(e.push(n.i,t.i,s.i),cr(t),cr(t.next),t=i=s),t=t.next}while(t!==i);return Oi(t)}function em(i,e,t,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&cm(o,a)){let c=vf(o,a);o=Oi(o,o.next),c=Oi(c,c.next),ar(o,e,t,n,s,r,0),ar(c,e,t,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function tm(i,e,t,n){const s=[];for(let r=0,o=e.length;r<o;r++){const a=e[r]*n,c=r<o-1?e[r+1]*n:i.length,l=mf(i,a,c,n,!1);l===l.next&&(l.steiner=!0),s.push(lm(l))}s.sort(nm);for(let r=0;r<s.length;r++)t=im(s[r],t);return t}function nm(i,e){let t=i.x-e.x;if(t===0&&(t=i.y-e.y,t===0)){const n=(i.next.y-i.y)/(i.next.x-i.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=n-s}return t}function im(i,e){const t=sm(i,e);if(!t)return e;const n=vf(t,i);return Oi(n,n.next),Oi(t,t.next)}function sm(i,e){let t=e;const n=i.x,s=i.y;let r=-1/0,o;if(ws(i,t))return t;do{if(ws(i,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){const u=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(u<=n&&u>r&&(r=u,o=t.x<t.next.x?t:t.next,u===n))return o}t=t.next}while(t!==e);if(!o)return null;const a=o,c=o.x,l=o.y;let h=1/0;t=o;do{if(n>=t.x&&t.x>=c&&n!==t.x&&gf(s<l?n:r,s,c,l,s<l?r:n,s,t.x,t.y)){const u=Math.abs(s-t.y)/(n-t.x);lr(t,i)&&(u<h||u===h&&(t.x>o.x||t.x===o.x&&rm(o,t)))&&(o=t,h=u)}t=t.next}while(t!==a);return o}function rm(i,e){return yt(i.prev,i,e.prev)<0&&yt(e.next,i,i.next)<0}function om(i,e,t,n){let s=i;do s.z===0&&(s.z=Hl(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,am(s)}function am(i){let e,t=1;do{let n=i,s;i=null;let r=null;for(e=0;n;){e++;let o=n,a=0;for(let l=0;l<t&&(a++,o=o.nextZ,!!o);l++);let c=t;for(;a>0||c>0&&o;)a!==0&&(c===0||!o||n.z<=o.z)?(s=n,n=n.nextZ,a--):(s=o,o=o.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=o}r.nextZ=null,t*=2}while(e>1);return i}function Hl(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function lm(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function gf(i,e,t,n,s,r,o,a){return(s-o)*(e-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(n-a)}function Gs(i,e,t,n,s,r,o,a){return!(i===o&&e===a)&&gf(i,e,t,n,s,r,o,a)}function cm(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!hm(i,e)&&(lr(i,e)&&lr(e,i)&&um(i,e)&&(yt(i.prev,i,e.prev)||yt(i,e.prev,e))||ws(i,e)&&yt(i.prev,i,i.next)>0&&yt(e.prev,e,e.next)>0)}function yt(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function ws(i,e){return i.x===e.x&&i.y===e.y}function xf(i,e,t,n){const s=Vr(yt(i,e,t)),r=Vr(yt(i,e,n)),o=Vr(yt(t,n,i)),a=Vr(yt(t,n,e));return!!(s!==r&&o!==a||s===0&&Gr(i,t,e)||r===0&&Gr(i,n,e)||o===0&&Gr(t,i,n)||a===0&&Gr(t,e,n))}function Gr(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function Vr(i){return i>0?1:i<0?-1:0}function hm(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&xf(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function lr(i,e){return yt(i.prev,i,i.next)<0?yt(i,e,i.next)>=0&&yt(i,i.prev,e)>=0:yt(i,e,i.prev)<0||yt(i,i.next,e)<0}function um(i,e){let t=i,n=!1;const s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function vf(i,e){const t=kl(i.i,i.x,i.y),n=kl(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function bh(i,e,t,n){const s=kl(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function cr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function kl(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function fm(i,e,t,n){let s=0;for(let r=e,o=t-n;r<t;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}class dm{static triangulate(e,t,n=2){return Zp(e,t,n)}}class Wn{static area(e){const t=e.length;let n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return Wn.area(e)<0}static triangulateShape(e,t){const n=[],s=[],r=[];wh(e),Eh(n,e);let o=e.length;t.forEach(wh);for(let c=0;c<t.length;c++)s.push(o),o+=t[c].length,Eh(n,t[c]);const a=dm.triangulate(n,s);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}}function wh(i){const e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function Eh(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}class pr extends nt{constructor(e=new ei([new ne(.5,.5),new ne(-.5,.5),new ne(-.5,-.5),new ne(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,s=[],r=[];for(let a=0,c=e.length;a<c;a++){const l=e[a];o(l)}this.setAttribute("position",new Be(s,3)),this.setAttribute("uv",new Be(r,2)),this.computeVertexNormals();function o(a){const c=[],l=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1;let f=t.bevelEnabled!==void 0?t.bevelEnabled:!0,d=t.bevelThickness!==void 0?t.bevelThickness:.2,m=t.bevelSize!==void 0?t.bevelSize:d-.1,x=t.bevelOffset!==void 0?t.bevelOffset:0,g=t.bevelSegments!==void 0?t.bevelSegments:3;const p=t.extrudePath,M=t.UVGenerator!==void 0?t.UVGenerator:pm;let _,v=!1,w,A,C,P;p&&(_=p.getSpacedPoints(h),v=!0,f=!1,w=p.computeFrenetFrames(h,!1),A=new R,C=new R,P=new R),f||(g=0,d=0,m=0,x=0);const S=a.extractPoints(l);let b=S.shape;const L=S.holes;if(!Wn.isClockWise(b)){b=b.reverse();for(let oe=0,ie=L.length;oe<ie;oe++){const F=L[oe];Wn.isClockWise(F)&&(L[oe]=F.reverse())}}function N(oe){const F=10000000000000001e-36;let B=oe[0];for(let ee=1;ee<=oe.length;ee++){const Y=ee%oe.length,te=oe[Y],Ee=te.x-B.x,he=te.y-B.y,E=Ee*Ee+he*he,y=Math.max(Math.abs(te.x),Math.abs(te.y),Math.abs(B.x),Math.abs(B.y)),I=F*y*y;if(E<=I){oe.splice(Y,1),ee--;continue}B=te}}N(b),L.forEach(N);const V=L.length,z=b;for(let oe=0;oe<V;oe++){const ie=L[oe];b=b.concat(ie)}function W(oe,ie,F){return ie||console.error("THREE.ExtrudeGeometry: vec does not exist"),oe.clone().addScaledVector(ie,F)}const $=b.length;function G(oe,ie,F){let B,ee,Y;const te=oe.x-ie.x,Ee=oe.y-ie.y,he=F.x-oe.x,E=F.y-oe.y,y=te*te+Ee*Ee,I=te*E-Ee*he;if(Math.abs(I)>Number.EPSILON){const X=Math.sqrt(y),q=Math.sqrt(he*he+E*E),j=ie.x-Ee/X,ge=ie.y+te/X,ae=F.x-E/q,Te=F.y+he/q,Ce=((ae-j)*E-(Te-ge)*he)/(te*E-Ee*he);B=j+te*Ce-oe.x,ee=ge+Ee*Ce-oe.y;const ue=B*B+ee*ee;if(ue<=2)return new ne(B,ee);Y=Math.sqrt(ue/2)}else{let X=!1;te>Number.EPSILON?he>Number.EPSILON&&(X=!0):te<-Number.EPSILON?he<-Number.EPSILON&&(X=!0):Math.sign(Ee)===Math.sign(E)&&(X=!0),X?(B=-Ee,ee=te,Y=Math.sqrt(y)):(B=te,ee=Ee,Y=Math.sqrt(y/2))}return new ne(B/Y,ee/Y)}const ce=[];for(let oe=0,ie=z.length,F=ie-1,B=oe+1;oe<ie;oe++,F++,B++)F===ie&&(F=0),B===ie&&(B=0),ce[oe]=G(z[oe],z[F],z[B]);const xe=[];let le,Oe=ce.concat();for(let oe=0,ie=V;oe<ie;oe++){const F=L[oe];le=[];for(let B=0,ee=F.length,Y=ee-1,te=B+1;B<ee;B++,Y++,te++)Y===ee&&(Y=0),te===ee&&(te=0),le[B]=G(F[B],F[Y],F[te]);xe.push(le),Oe=Oe.concat(le)}let Fe;if(g===0)Fe=Wn.triangulateShape(z,L);else{const oe=[],ie=[];for(let F=0;F<g;F++){const B=F/g,ee=d*Math.cos(B*Math.PI/2),Y=m*Math.sin(B*Math.PI/2)+x;for(let te=0,Ee=z.length;te<Ee;te++){const he=W(z[te],ce[te],Y);Pe(he.x,he.y,-ee),B===0&&oe.push(he)}for(let te=0,Ee=V;te<Ee;te++){const he=L[te];le=xe[te];const E=[];for(let y=0,I=he.length;y<I;y++){const X=W(he[y],le[y],Y);Pe(X.x,X.y,-ee),B===0&&E.push(X)}B===0&&ie.push(E)}}Fe=Wn.triangulateShape(oe,ie)}const $e=Fe.length,qe=m+x;for(let oe=0;oe<$;oe++){const ie=f?W(b[oe],Oe[oe],qe):b[oe];v?(C.copy(w.normals[0]).multiplyScalar(ie.x),A.copy(w.binormals[0]).multiplyScalar(ie.y),P.copy(_[0]).add(C).add(A),Pe(P.x,P.y,P.z)):Pe(ie.x,ie.y,0)}for(let oe=1;oe<=h;oe++)for(let ie=0;ie<$;ie++){const F=f?W(b[ie],Oe[ie],qe):b[ie];v?(C.copy(w.normals[oe]).multiplyScalar(F.x),A.copy(w.binormals[oe]).multiplyScalar(F.y),P.copy(_[oe]).add(C).add(A),Pe(P.x,P.y,P.z)):Pe(F.x,F.y,u/h*oe)}for(let oe=g-1;oe>=0;oe--){const ie=oe/g,F=d*Math.cos(ie*Math.PI/2),B=m*Math.sin(ie*Math.PI/2)+x;for(let ee=0,Y=z.length;ee<Y;ee++){const te=W(z[ee],ce[ee],B);Pe(te.x,te.y,u+F)}for(let ee=0,Y=L.length;ee<Y;ee++){const te=L[ee];le=xe[ee];for(let Ee=0,he=te.length;Ee<he;Ee++){const E=W(te[Ee],le[Ee],B);v?Pe(E.x,E.y+_[h-1].y,_[h-1].x+F):Pe(E.x,E.y,u+F)}}}J(),se();function J(){const oe=s.length/3;if(f){let ie=0,F=$*ie;for(let B=0;B<$e;B++){const ee=Fe[B];Ae(ee[2]+F,ee[1]+F,ee[0]+F)}ie=h+g*2,F=$*ie;for(let B=0;B<$e;B++){const ee=Fe[B];Ae(ee[0]+F,ee[1]+F,ee[2]+F)}}else{for(let ie=0;ie<$e;ie++){const F=Fe[ie];Ae(F[2],F[1],F[0])}for(let ie=0;ie<$e;ie++){const F=Fe[ie];Ae(F[0]+$*h,F[1]+$*h,F[2]+$*h)}}n.addGroup(oe,s.length/3-oe,0)}function se(){const oe=s.length/3;let ie=0;ve(z,ie),ie+=z.length;for(let F=0,B=L.length;F<B;F++){const ee=L[F];ve(ee,ie),ie+=ee.length}n.addGroup(oe,s.length/3-oe,1)}function ve(oe,ie){let F=oe.length;for(;--F>=0;){const B=F;let ee=F-1;ee<0&&(ee=oe.length-1);for(let Y=0,te=h+g*2;Y<te;Y++){const Ee=$*Y,he=$*(Y+1),E=ie+B+Ee,y=ie+ee+Ee,I=ie+ee+he,X=ie+B+he;De(E,y,I,X)}}}function Pe(oe,ie,F){c.push(oe),c.push(ie),c.push(F)}function Ae(oe,ie,F){et(oe),et(ie),et(F);const B=s.length/3,ee=M.generateTopUV(n,s,B-3,B-2,B-1);D(ee[0]),D(ee[1]),D(ee[2])}function De(oe,ie,F,B){et(oe),et(ie),et(B),et(ie),et(F),et(B);const ee=s.length/3,Y=M.generateSideWallUV(n,s,ee-6,ee-3,ee-2,ee-1);D(Y[0]),D(Y[1]),D(Y[3]),D(Y[1]),D(Y[2]),D(Y[3])}function et(oe){s.push(c[oe*3+0]),s.push(c[oe*3+1]),s.push(c[oe*3+2])}function D(oe){r.push(oe.x),r.push(oe.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return mm(t,n,e)}static fromJSON(e,t){const n=[];for(let r=0,o=e.shapes.length;r<o;r++){const a=t[e.shapes[r]];n.push(a)}const s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new So[s.type]().fromJSON(s)),new pr(n,e.options)}}const pm={generateTopUV:function(i,e,t,n,s){const r=e[t*3],o=e[t*3+1],a=e[n*3],c=e[n*3+1],l=e[s*3],h=e[s*3+1];return[new ne(r,o),new ne(a,c),new ne(l,h)]},generateSideWallUV:function(i,e,t,n,s,r){const o=e[t*3],a=e[t*3+1],c=e[t*3+2],l=e[n*3],h=e[n*3+1],u=e[n*3+2],f=e[s*3],d=e[s*3+1],m=e[s*3+2],x=e[r*3],g=e[r*3+1],p=e[r*3+2];return Math.abs(a-h)<Math.abs(o-l)?[new ne(o,1-c),new ne(l,1-u),new ne(f,1-m),new ne(x,1-p)]:[new ne(a,1-c),new ne(h,1-u),new ne(d,1-m),new ne(g,1-p)]}};function mm(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){const r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class Fo extends nt{constructor(e=[new ne(0,-.5),new ne(.5,0),new ne(0,.5)],t=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:s},t=Math.floor(t),s=Qe(s,0,Math.PI*2);const r=[],o=[],a=[],c=[],l=[],h=1/t,u=new R,f=new ne,d=new R,m=new R,x=new R;let g=0,p=0;for(let M=0;M<=e.length-1;M++)switch(M){case 0:g=e[M+1].x-e[M].x,p=e[M+1].y-e[M].y,d.x=p*1,d.y=-g,d.z=p*0,x.copy(d),d.normalize(),c.push(d.x,d.y,d.z);break;case e.length-1:c.push(x.x,x.y,x.z);break;default:g=e[M+1].x-e[M].x,p=e[M+1].y-e[M].y,d.x=p*1,d.y=-g,d.z=p*0,m.copy(d),d.x+=x.x,d.y+=x.y,d.z+=x.z,d.normalize(),c.push(d.x,d.y,d.z),x.copy(m)}for(let M=0;M<=t;M++){const _=n+M*h*s,v=Math.sin(_),w=Math.cos(_);for(let A=0;A<=e.length-1;A++){u.x=e[A].x*v,u.y=e[A].y,u.z=e[A].x*w,o.push(u.x,u.y,u.z),f.x=M/t,f.y=A/(e.length-1),a.push(f.x,f.y);const C=c[3*A+0]*v,P=c[3*A+1],S=c[3*A+0]*w;l.push(C,P,S)}}for(let M=0;M<t;M++)for(let _=0;_<e.length-1;_++){const v=_+M*e.length,w=v,A=v+e.length,C=v+e.length+1,P=v+1;r.push(w,A,P),r.push(C,P,A)}this.setIndex(r),this.setAttribute("position",new Be(o,3)),this.setAttribute("uv",new Be(a,2)),this.setAttribute("normal",new Be(l,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Fo(e.points,e.segments,e.phiStart,e.phiLength)}}class Li extends _c{constructor(e=1,t=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Li(e.radius,e.detail)}}class Xt extends nt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const r=e/2,o=t/2,a=Math.floor(n),c=Math.floor(s),l=a+1,h=c+1,u=e/a,f=t/c,d=[],m=[],x=[],g=[];for(let p=0;p<h;p++){const M=p*f-o;for(let _=0;_<l;_++){const v=_*u-r;m.push(v,-M,0),x.push(0,0,1),g.push(_/a),g.push(1-p/c)}}for(let p=0;p<c;p++)for(let M=0;M<a;M++){const _=M+l*p,v=M+l*(p+1),w=M+1+l*(p+1),A=M+1+l*p;d.push(_,v,A),d.push(v,w,A)}this.setIndex(d),this.setAttribute("position",new Be(m,3)),this.setAttribute("normal",new Be(x,3)),this.setAttribute("uv",new Be(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Xt(e.width,e.height,e.widthSegments,e.heightSegments)}}class bc extends nt{constructor(e=.5,t=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);const a=[],c=[],l=[],h=[];let u=e;const f=(t-e)/s,d=new R,m=new ne;for(let x=0;x<=s;x++){for(let g=0;g<=n;g++){const p=r+g/n*o;d.x=u*Math.cos(p),d.y=u*Math.sin(p),c.push(d.x,d.y,d.z),l.push(0,0,1),m.x=(d.x/t+1)/2,m.y=(d.y/t+1)/2,h.push(m.x,m.y)}u+=f}for(let x=0;x<s;x++){const g=x*(n+1);for(let p=0;p<n;p++){const M=p+g,_=M,v=M+n+1,w=M+n+2,A=M+1;a.push(_,v,A),a.push(v,w,A)}}this.setIndex(a),this.setAttribute("position",new Be(c,3)),this.setAttribute("normal",new Be(l,3)),this.setAttribute("uv",new Be(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new bc(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class mi extends nt{constructor(e=new ei([new ne(0,.5),new ne(-.5,-.5),new ne(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const n=[],s=[],r=[],o=[];let a=0,c=0;if(Array.isArray(e)===!1)l(e);else for(let h=0;h<e.length;h++)l(e[h]),this.addGroup(a,c,h),a+=c,c=0;this.setIndex(n),this.setAttribute("position",new Be(s,3)),this.setAttribute("normal",new Be(r,3)),this.setAttribute("uv",new Be(o,2));function l(h){const u=s.length/3,f=h.extractPoints(t);let d=f.shape;const m=f.holes;Wn.isClockWise(d)===!1&&(d=d.reverse());for(let g=0,p=m.length;g<p;g++){const M=m[g];Wn.isClockWise(M)===!0&&(m[g]=M.reverse())}const x=Wn.triangulateShape(d,m);for(let g=0,p=m.length;g<p;g++){const M=m[g];d=d.concat(M)}for(let g=0,p=d.length;g<p;g++){const M=d[g];s.push(M.x,M.y,0),r.push(0,0,1),o.push(M.x,M.y)}for(let g=0,p=x.length;g<p;g++){const M=x[g],_=M[0]+u,v=M[1]+u,w=M[2]+u;n.push(_,v,w),c+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes;return gm(t,e)}static fromJSON(e,t){const n=[];for(let s=0,r=e.shapes.length;s<r;s++){const o=t[e.shapes[s]];n.push(o)}return new mi(n,e.curveSegments)}}function gm(i,e){if(e.shapes=[],Array.isArray(i))for(let t=0,n=i.length;t<n;t++){const s=i[t];e.shapes.push(s.uuid)}else e.shapes.push(i.uuid);return e}class Zt extends nt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const c=Math.min(o+a,Math.PI);let l=0;const h=[],u=new R,f=new R,d=[],m=[],x=[],g=[];for(let p=0;p<=n;p++){const M=[],_=p/n;let v=0;p===0&&o===0?v=.5/t:p===n&&c===Math.PI&&(v=-.5/t);for(let w=0;w<=t;w++){const A=w/t;u.x=-e*Math.cos(s+A*r)*Math.sin(o+_*a),u.y=e*Math.cos(o+_*a),u.z=e*Math.sin(s+A*r)*Math.sin(o+_*a),m.push(u.x,u.y,u.z),f.copy(u).normalize(),x.push(f.x,f.y,f.z),g.push(A+v,1-_),M.push(l++)}h.push(M)}for(let p=0;p<n;p++)for(let M=0;M<t;M++){const _=h[p][M+1],v=h[p][M],w=h[p+1][M],A=h[p+1][M+1];(p!==0||o>0)&&d.push(_,v,A),(p!==n-1||c<Math.PI)&&d.push(v,w,A)}this.setIndex(d),this.setAttribute("position",new Be(m,3)),this.setAttribute("normal",new Be(x,3)),this.setAttribute("uv",new Be(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Zt(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class In extends nt{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);const o=[],a=[],c=[],l=[],h=new R,u=new R,f=new R;for(let d=0;d<=n;d++)for(let m=0;m<=s;m++){const x=m/s*r,g=d/n*Math.PI*2;u.x=(e+t*Math.cos(g))*Math.cos(x),u.y=(e+t*Math.cos(g))*Math.sin(x),u.z=t*Math.sin(g),a.push(u.x,u.y,u.z),h.x=e*Math.cos(x),h.y=e*Math.sin(x),f.subVectors(u,h).normalize(),c.push(f.x,f.y,f.z),l.push(m/s),l.push(d/n)}for(let d=1;d<=n;d++)for(let m=1;m<=s;m++){const x=(s+1)*d+m-1,g=(s+1)*(d-1)+m-1,p=(s+1)*(d-1)+m,M=(s+1)*d+m;o.push(x,g,M),o.push(g,p,M)}this.setIndex(o),this.setAttribute("position",new Be(a,3)),this.setAttribute("normal",new Be(c,3)),this.setAttribute("uv",new Be(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new In(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class wc extends nt{constructor(e=new df(new R(-1,-1,0),new R(-1,1,0),new R(1,1,0)),t=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:s,closed:r};const o=e.computeFrenetFrames(t,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new R,c=new R,l=new ne;let h=new R;const u=[],f=[],d=[],m=[];x(),this.setIndex(m),this.setAttribute("position",new Be(u,3)),this.setAttribute("normal",new Be(f,3)),this.setAttribute("uv",new Be(d,2));function x(){for(let _=0;_<t;_++)g(_);g(r===!1?t:0),M(),p()}function g(_){h=e.getPointAt(_/t,h);const v=o.normals[_],w=o.binormals[_];for(let A=0;A<=s;A++){const C=A/s*Math.PI*2,P=Math.sin(C),S=-Math.cos(C);c.x=S*v.x+P*w.x,c.y=S*v.y+P*w.y,c.z=S*v.z+P*w.z,c.normalize(),f.push(c.x,c.y,c.z),a.x=h.x+n*c.x,a.y=h.y+n*c.y,a.z=h.z+n*c.z,u.push(a.x,a.y,a.z)}}function p(){for(let _=1;_<=t;_++)for(let v=1;v<=s;v++){const w=(s+1)*(_-1)+(v-1),A=(s+1)*_+(v-1),C=(s+1)*_+v,P=(s+1)*(_-1)+v;m.push(w,A,P),m.push(A,C,P)}}function M(){for(let _=0;_<=t;_++)for(let v=0;v<=s;v++)l.x=_/t,l.y=v/s,d.push(l.x,l.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new wc(new So[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class xm extends gt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Et extends Vi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ue(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ue(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ju,this.normalScale=new ne(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $t,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class vm extends Vi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Nd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class _m extends Vi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const ba={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class Mm{constructor(e,t,n){const s=this;let r=!1,o=0,a=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.abortController=new AbortController,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){const u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=l.length;u<f;u+=2){const d=l[u],m=l[u+1];if(d.global&&(d.lastIndex=0),d.test(h))return m}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}}const ym=new Mm;class Ec{constructor(e){this.manager=e!==void 0?e:ym,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}Ec.DEFAULT_MATERIAL_NAME="__DEFAULT";const as=new WeakMap;class Sm extends Ec{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=ba.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0);else{let u=as.get(o);u===void 0&&(u=[],as.set(o,u)),u.push({onLoad:t,onError:s})}return o}const a=rr("img");function c(){h(),t&&t(this);const u=as.get(this)||[];for(let f=0;f<u.length;f++){const d=u[f];d.onLoad&&d.onLoad(this)}as.delete(this),r.manager.itemEnd(e)}function l(u){h(),s&&s(u),ba.remove(`image:${e}`);const f=as.get(this)||[];for(let d=0;d<f.length;d++){const m=f[d];m.onError&&m.onError(u)}as.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),ba.add(`image:${e}`,a),r.manager.itemStart(e),a.src=e,a}}class bm extends Ec{constructor(e){super(e)}load(e,t,n,s){const r=new Tt,o=new Sm(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}}class Oo extends dt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ue(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class wm extends Oo{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(dt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ue(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const wa=new Ze,Th=new R,Ah=new R;class Tc{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ne(512,512),this.mapType=Ln,this.map=null,this.mapPass=null,this.matrix=new Ze,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new gc,this._frameExtents=new ne(1,1),this._viewportCount=1,this._viewports=[new st(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Th.setFromMatrixPosition(e.matrixWorld),t.position.copy(Th),Ah.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Ah),t.updateMatrixWorld(),wa.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(wa,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(wa)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Em extends Tc{constructor(){super(new Bt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,n=Ss*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class Tm extends Oo{constructor(e,t,n=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(dt.DEFAULT_UP),this.updateMatrix(),this.target=new dt,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new Em}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Ch=new Ze,Hs=new R,Ea=new R;class Am extends Tc{constructor(){super(new Bt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ne(4,2),this._viewportCount=6,this._viewports=[new st(2,1,1,1),new st(0,1,1,1),new st(3,1,1,1),new st(1,1,1,1),new st(3,0,1,1),new st(1,0,1,1)],this._cubeDirections=[new R(1,0,0),new R(-1,0,0),new R(0,0,1),new R(0,0,-1),new R(0,1,0),new R(0,-1,0)],this._cubeUps=[new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,0,1),new R(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,s=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Hs.setFromMatrixPosition(e.matrixWorld),n.position.copy(Hs),Ea.copy(n.position),Ea.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Ea),n.updateMatrixWorld(),s.makeTranslation(-Hs.x,-Hs.y,-Hs.z),Ch.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ch,n.coordinateSystem,n.reversedDepth)}}class _f extends Oo{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Am}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Ac extends sf{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-e,o=n+e,a=s+t,c=s-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Cm extends Tc{constructor(){super(new Ac(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Mf extends Oo{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(dt.DEFAULT_UP),this.updateMatrix(),this.target=new dt,this.shadow=new Cm}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Rm extends nt{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}class Pm extends Bt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class Lm{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Rh(i,e,t,n){const s=Dm(n);switch(t){case Xu:return i*e;case lc:return i*e/s.components*s.byteLength;case cc:return i*e/s.components*s.byteLength;case Yu:return i*e*2/s.components*s.byteLength;case hc:return i*e*2/s.components*s.byteLength;case qu:return i*e*3/s.components*s.byteLength;case an:return i*e*4/s.components*s.byteLength;case uc:return i*e*4/s.components*s.byteLength;case ro:case oo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case ao:case lo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case hl:case fl:return Math.max(i,16)*Math.max(e,8)/4;case cl:case ul:return Math.max(i,8)*Math.max(e,8)/2;case dl:case pl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case ml:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case gl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case xl:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case vl:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case _l:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Ml:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case yl:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Sl:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case bl:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case wl:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case El:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Tl:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Al:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Cl:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Rl:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Pl:case Ll:case Dl:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Il:case Ul:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Nl:case Fl:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Dm(i){switch(i){case Ln:case ku:return{byteLength:1,components:1};case tr:case Gu:case wn:return{byteLength:2,components:1};case oc:case ac:return{byteLength:2,components:4};case Fi:case rc:case Cn:return{byteLength:4,components:1};case Vu:case Wu:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ic}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ic);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function yf(){let i=null,e=!1,t=null,n=null;function s(r,o){t(r,o),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Im(i){const e=new WeakMap;function t(a,c){const l=a.array,h=a.usage,u=l.byteLength,f=i.createBuffer();i.bindBuffer(c,f),i.bufferData(c,l,h),a.onUploadCallback();let d;if(l instanceof Float32Array)d=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)d=i.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)d=i.SHORT;else if(l instanceof Uint32Array)d=i.UNSIGNED_INT;else if(l instanceof Int32Array)d=i.INT;else if(l instanceof Int8Array)d=i.BYTE;else if(l instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:d,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,c,l){const h=c.array,u=c.updateRanges;if(i.bindBuffer(l,a),u.length===0)i.bufferSubData(l,0,h);else{u.sort((d,m)=>d.start-m.start);let f=0;for(let d=1;d<u.length;d++){const m=u[f],x=u[d];x.start<=m.start+m.count+1?m.count=Math.max(m.count,x.start+x.count-m.start):(++f,u[f]=x)}u.length=f+1;for(let d=0,m=u.length;d<m;d++){const x=u[d];i.bufferSubData(l,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=e.get(a);c&&(i.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}var Um=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Nm=`#ifdef USE_ALPHAHASH
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
#endif`,Fm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Om=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,zm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Bm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Hm=`#ifdef USE_AOMAP
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
#endif`,km=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Gm=`#ifdef USE_BATCHING
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
#endif`,Vm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Wm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Xm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,qm=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Ym=`#ifdef USE_IRIDESCENCE
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
#endif`,jm=`#ifdef USE_BUMPMAP
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
#endif`,Km=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Zm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Jm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Qm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,$m=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,e0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,t0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,n0=`#if defined( USE_COLOR_ALPHA )
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
#endif`,i0=`#define PI 3.141592653589793
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
} // validated`,s0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,r0=`vec3 transformedNormal = objectNormal;
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
#endif`,o0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,a0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,l0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,c0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,h0="gl_FragColor = linearToOutputTexel( gl_FragColor );",u0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,f0=`#ifdef USE_ENVMAP
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
#endif`,d0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,p0=`#ifdef USE_ENVMAP
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
#endif`,m0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,g0=`#ifdef USE_ENVMAP
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
#endif`,x0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,v0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,_0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,M0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,y0=`#ifdef USE_GRADIENTMAP
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
}`,S0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,b0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,w0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,E0=`uniform bool receiveShadow;
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
#endif`,T0=`#ifdef USE_ENVMAP
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
#endif`,A0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,C0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,R0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,P0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,L0=`PhysicalMaterial material;
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
#endif`,D0=`struct PhysicalMaterial {
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
}`,I0=`
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
#endif`,U0=`#if defined( RE_IndirectDiffuse )
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
#endif`,N0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,F0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,O0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,z0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,B0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,H0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,k0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,G0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,V0=`#if defined( USE_POINTS_UV )
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
#endif`,W0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,X0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,q0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Y0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,j0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,K0=`#ifdef USE_MORPHTARGETS
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
#endif`,Z0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,J0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Q0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,$0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,eg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,tg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,ng=`#ifdef USE_NORMALMAP
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
#endif`,ig=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,sg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,rg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,og=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ag=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,lg=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,cg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,hg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ug=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,fg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,dg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,pg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,mg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,gg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,xg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,vg=`float getShadowMask() {
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
}`,_g=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Mg=`#ifdef USE_SKINNING
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
#endif`,yg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Sg=`#ifdef USE_SKINNING
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
#endif`,bg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,wg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Eg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Tg=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Ag=`#ifdef USE_TRANSMISSION
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
#endif`,Cg=`#ifdef USE_TRANSMISSION
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
#endif`,Rg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Pg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Lg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Dg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Ig=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Ug=`uniform sampler2D t2D;
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
}`,Ng=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Fg=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Og=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,zg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Bg=`#include <common>
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
}`,Hg=`#if DEPTH_PACKING == 3200
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
}`,kg=`#define DISTANCE
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
}`,Gg=`#define DISTANCE
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
}`,Vg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Wg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Xg=`uniform float scale;
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
}`,qg=`uniform vec3 diffuse;
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
}`,Yg=`#include <common>
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
}`,jg=`uniform vec3 diffuse;
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
}`,Kg=`#define LAMBERT
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
}`,Zg=`#define LAMBERT
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
}`,Jg=`#define MATCAP
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
}`,Qg=`#define MATCAP
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
}`,$g=`#define NORMAL
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
}`,e1=`#define NORMAL
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
}`,t1=`#define PHONG
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
}`,n1=`#define PHONG
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
}`,i1=`#define STANDARD
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
}`,s1=`#define STANDARD
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
}`,r1=`#define TOON
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
}`,o1=`#define TOON
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
}`,a1=`uniform float size;
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
}`,l1=`uniform vec3 diffuse;
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
}`,c1=`#include <common>
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
}`,h1=`uniform vec3 color;
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
}`,u1=`uniform float rotation;
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
}`,f1=`uniform vec3 diffuse;
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
}`,Je={alphahash_fragment:Um,alphahash_pars_fragment:Nm,alphamap_fragment:Fm,alphamap_pars_fragment:Om,alphatest_fragment:zm,alphatest_pars_fragment:Bm,aomap_fragment:Hm,aomap_pars_fragment:km,batching_pars_vertex:Gm,batching_vertex:Vm,begin_vertex:Wm,beginnormal_vertex:Xm,bsdfs:qm,iridescence_fragment:Ym,bumpmap_pars_fragment:jm,clipping_planes_fragment:Km,clipping_planes_pars_fragment:Zm,clipping_planes_pars_vertex:Jm,clipping_planes_vertex:Qm,color_fragment:$m,color_pars_fragment:e0,color_pars_vertex:t0,color_vertex:n0,common:i0,cube_uv_reflection_fragment:s0,defaultnormal_vertex:r0,displacementmap_pars_vertex:o0,displacementmap_vertex:a0,emissivemap_fragment:l0,emissivemap_pars_fragment:c0,colorspace_fragment:h0,colorspace_pars_fragment:u0,envmap_fragment:f0,envmap_common_pars_fragment:d0,envmap_pars_fragment:p0,envmap_pars_vertex:m0,envmap_physical_pars_fragment:T0,envmap_vertex:g0,fog_vertex:x0,fog_pars_vertex:v0,fog_fragment:_0,fog_pars_fragment:M0,gradientmap_pars_fragment:y0,lightmap_pars_fragment:S0,lights_lambert_fragment:b0,lights_lambert_pars_fragment:w0,lights_pars_begin:E0,lights_toon_fragment:A0,lights_toon_pars_fragment:C0,lights_phong_fragment:R0,lights_phong_pars_fragment:P0,lights_physical_fragment:L0,lights_physical_pars_fragment:D0,lights_fragment_begin:I0,lights_fragment_maps:U0,lights_fragment_end:N0,logdepthbuf_fragment:F0,logdepthbuf_pars_fragment:O0,logdepthbuf_pars_vertex:z0,logdepthbuf_vertex:B0,map_fragment:H0,map_pars_fragment:k0,map_particle_fragment:G0,map_particle_pars_fragment:V0,metalnessmap_fragment:W0,metalnessmap_pars_fragment:X0,morphinstance_vertex:q0,morphcolor_vertex:Y0,morphnormal_vertex:j0,morphtarget_pars_vertex:K0,morphtarget_vertex:Z0,normal_fragment_begin:J0,normal_fragment_maps:Q0,normal_pars_fragment:$0,normal_pars_vertex:eg,normal_vertex:tg,normalmap_pars_fragment:ng,clearcoat_normal_fragment_begin:ig,clearcoat_normal_fragment_maps:sg,clearcoat_pars_fragment:rg,iridescence_pars_fragment:og,opaque_fragment:ag,packing:lg,premultiplied_alpha_fragment:cg,project_vertex:hg,dithering_fragment:ug,dithering_pars_fragment:fg,roughnessmap_fragment:dg,roughnessmap_pars_fragment:pg,shadowmap_pars_fragment:mg,shadowmap_pars_vertex:gg,shadowmap_vertex:xg,shadowmask_pars_fragment:vg,skinbase_vertex:_g,skinning_pars_vertex:Mg,skinning_vertex:yg,skinnormal_vertex:Sg,specularmap_fragment:bg,specularmap_pars_fragment:wg,tonemapping_fragment:Eg,tonemapping_pars_fragment:Tg,transmission_fragment:Ag,transmission_pars_fragment:Cg,uv_pars_fragment:Rg,uv_pars_vertex:Pg,uv_vertex:Lg,worldpos_vertex:Dg,background_vert:Ig,background_frag:Ug,backgroundCube_vert:Ng,backgroundCube_frag:Fg,cube_vert:Og,cube_frag:zg,depth_vert:Bg,depth_frag:Hg,distanceRGBA_vert:kg,distanceRGBA_frag:Gg,equirect_vert:Vg,equirect_frag:Wg,linedashed_vert:Xg,linedashed_frag:qg,meshbasic_vert:Yg,meshbasic_frag:jg,meshlambert_vert:Kg,meshlambert_frag:Zg,meshmatcap_vert:Jg,meshmatcap_frag:Qg,meshnormal_vert:$g,meshnormal_frag:e1,meshphong_vert:t1,meshphong_frag:n1,meshphysical_vert:i1,meshphysical_frag:s1,meshtoon_vert:r1,meshtoon_frag:o1,points_vert:a1,points_frag:l1,shadow_vert:c1,shadow_frag:h1,sprite_vert:u1,sprite_frag:f1},ye={common:{diffuse:{value:new Ue(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ke},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ke}},envmap:{envMap:{value:null},envMapRotation:{value:new Ke},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ke}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ke}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ke},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ke},normalScale:{value:new ne(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ke},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ke}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ke}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ke}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ue(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ue(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0},uvTransform:{value:new Ke}},sprite:{diffuse:{value:new Ue(16777215)},opacity:{value:1},center:{value:new ne(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ke},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0}}},Tn={basic:{uniforms:Ft([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.fog]),vertexShader:Je.meshbasic_vert,fragmentShader:Je.meshbasic_frag},lambert:{uniforms:Ft([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new Ue(0)}}]),vertexShader:Je.meshlambert_vert,fragmentShader:Je.meshlambert_frag},phong:{uniforms:Ft([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new Ue(0)},specular:{value:new Ue(1118481)},shininess:{value:30}}]),vertexShader:Je.meshphong_vert,fragmentShader:Je.meshphong_frag},standard:{uniforms:Ft([ye.common,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.roughnessmap,ye.metalnessmap,ye.fog,ye.lights,{emissive:{value:new Ue(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Je.meshphysical_vert,fragmentShader:Je.meshphysical_frag},toon:{uniforms:Ft([ye.common,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.gradientmap,ye.fog,ye.lights,{emissive:{value:new Ue(0)}}]),vertexShader:Je.meshtoon_vert,fragmentShader:Je.meshtoon_frag},matcap:{uniforms:Ft([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,{matcap:{value:null}}]),vertexShader:Je.meshmatcap_vert,fragmentShader:Je.meshmatcap_frag},points:{uniforms:Ft([ye.points,ye.fog]),vertexShader:Je.points_vert,fragmentShader:Je.points_frag},dashed:{uniforms:Ft([ye.common,ye.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Je.linedashed_vert,fragmentShader:Je.linedashed_frag},depth:{uniforms:Ft([ye.common,ye.displacementmap]),vertexShader:Je.depth_vert,fragmentShader:Je.depth_frag},normal:{uniforms:Ft([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,{opacity:{value:1}}]),vertexShader:Je.meshnormal_vert,fragmentShader:Je.meshnormal_frag},sprite:{uniforms:Ft([ye.sprite,ye.fog]),vertexShader:Je.sprite_vert,fragmentShader:Je.sprite_frag},background:{uniforms:{uvTransform:{value:new Ke},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Je.background_vert,fragmentShader:Je.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ke}},vertexShader:Je.backgroundCube_vert,fragmentShader:Je.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Je.cube_vert,fragmentShader:Je.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Je.equirect_vert,fragmentShader:Je.equirect_frag},distanceRGBA:{uniforms:Ft([ye.common,ye.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Je.distanceRGBA_vert,fragmentShader:Je.distanceRGBA_frag},shadow:{uniforms:Ft([ye.lights,ye.fog,{color:{value:new Ue(0)},opacity:{value:1}}]),vertexShader:Je.shadow_vert,fragmentShader:Je.shadow_frag}};Tn.physical={uniforms:Ft([Tn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ke},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ke},clearcoatNormalScale:{value:new ne(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ke},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ke},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ke},sheen:{value:0},sheenColor:{value:new Ue(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ke},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ke},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ke},transmissionSamplerSize:{value:new ne},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ke},attenuationDistance:{value:0},attenuationColor:{value:new Ue(0)},specularColor:{value:new Ue(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ke},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ke},anisotropyVector:{value:new ne},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ke}}]),vertexShader:Je.meshphysical_vert,fragmentShader:Je.meshphysical_frag};const Wr={r:0,b:0,g:0},Si=new $t,d1=new Ze;function p1(i,e,t,n,s,r,o){const a=new Ue(0);let c=r===!0?0:1,l,h,u=null,f=0,d=null;function m(_){let v=_.isScene===!0?_.background:null;return v&&v.isTexture&&(v=(_.backgroundBlurriness>0?t:e).get(v)),v}function x(_){let v=!1;const w=m(_);w===null?p(a,c):w&&w.isColor&&(p(w,1),v=!0);const A=i.xr.getEnvironmentBlendMode();A==="additive"?n.buffers.color.setClear(0,0,0,1,o):A==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||v)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function g(_,v){const w=m(v);w&&(w.isCubeTexture||w.mapping===Do)?(h===void 0&&(h=new at(new ln(1,1,1),new gt({name:"BackgroundCubeMaterial",uniforms:bs(Tn.backgroundCube.uniforms),vertexShader:Tn.backgroundCube.vertexShader,fragmentShader:Tn.backgroundCube.fragmentShader,side:Gt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(A,C,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Si.copy(v.backgroundRotation),Si.x*=-1,Si.y*=-1,Si.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(Si.y*=-1,Si.z*=-1),h.material.uniforms.envMap.value=w,h.material.uniforms.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(d1.makeRotationFromEuler(Si)),h.material.toneMapped=it.getTransfer(w.colorSpace)!==lt,(u!==w||f!==w.version||d!==i.toneMapping)&&(h.material.needsUpdate=!0,u=w,f=w.version,d=i.toneMapping),h.layers.enableAll(),_.unshift(h,h.geometry,h.material,0,0,null)):w&&w.isTexture&&(l===void 0&&(l=new at(new Xt(2,2),new gt({name:"BackgroundMaterial",uniforms:bs(Tn.background.uniforms),vertexShader:Tn.background.vertexShader,fragmentShader:Tn.background.fragmentShader,side:Zn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=w,l.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,l.material.toneMapped=it.getTransfer(w.colorSpace)!==lt,w.matrixAutoUpdate===!0&&w.updateMatrix(),l.material.uniforms.uvTransform.value.copy(w.matrix),(u!==w||f!==w.version||d!==i.toneMapping)&&(l.material.needsUpdate=!0,u=w,f=w.version,d=i.toneMapping),l.layers.enableAll(),_.unshift(l,l.geometry,l.material,0,0,null))}function p(_,v){_.getRGB(Wr,nf(i)),n.buffers.color.setClear(Wr.r,Wr.g,Wr.b,v,o)}function M(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(_,v=1){a.set(_),c=v,p(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(_){c=_,p(a,c)},render:x,addToRenderList:g,dispose:M}}function m1(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null);let r=s,o=!1;function a(b,L,U,N,V){let z=!1;const W=u(N,U,L);r!==W&&(r=W,l(r.object)),z=d(b,N,U,V),z&&m(b,N,U,V),V!==null&&e.update(V,i.ELEMENT_ARRAY_BUFFER),(z||o)&&(o=!1,v(b,L,U,N),V!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(V).buffer))}function c(){return i.createVertexArray()}function l(b){return i.bindVertexArray(b)}function h(b){return i.deleteVertexArray(b)}function u(b,L,U){const N=U.wireframe===!0;let V=n[b.id];V===void 0&&(V={},n[b.id]=V);let z=V[L.id];z===void 0&&(z={},V[L.id]=z);let W=z[N];return W===void 0&&(W=f(c()),z[N]=W),W}function f(b){const L=[],U=[],N=[];for(let V=0;V<t;V++)L[V]=0,U[V]=0,N[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:U,attributeDivisors:N,object:b,attributes:{},index:null}}function d(b,L,U,N){const V=r.attributes,z=L.attributes;let W=0;const $=U.getAttributes();for(const G in $)if($[G].location>=0){const xe=V[G];let le=z[G];if(le===void 0&&(G==="instanceMatrix"&&b.instanceMatrix&&(le=b.instanceMatrix),G==="instanceColor"&&b.instanceColor&&(le=b.instanceColor)),xe===void 0||xe.attribute!==le||le&&xe.data!==le.data)return!0;W++}return r.attributesNum!==W||r.index!==N}function m(b,L,U,N){const V={},z=L.attributes;let W=0;const $=U.getAttributes();for(const G in $)if($[G].location>=0){let xe=z[G];xe===void 0&&(G==="instanceMatrix"&&b.instanceMatrix&&(xe=b.instanceMatrix),G==="instanceColor"&&b.instanceColor&&(xe=b.instanceColor));const le={};le.attribute=xe,xe&&xe.data&&(le.data=xe.data),V[G]=le,W++}r.attributes=V,r.attributesNum=W,r.index=N}function x(){const b=r.newAttributes;for(let L=0,U=b.length;L<U;L++)b[L]=0}function g(b){p(b,0)}function p(b,L){const U=r.newAttributes,N=r.enabledAttributes,V=r.attributeDivisors;U[b]=1,N[b]===0&&(i.enableVertexAttribArray(b),N[b]=1),V[b]!==L&&(i.vertexAttribDivisor(b,L),V[b]=L)}function M(){const b=r.newAttributes,L=r.enabledAttributes;for(let U=0,N=L.length;U<N;U++)L[U]!==b[U]&&(i.disableVertexAttribArray(U),L[U]=0)}function _(b,L,U,N,V,z,W){W===!0?i.vertexAttribIPointer(b,L,U,V,z):i.vertexAttribPointer(b,L,U,N,V,z)}function v(b,L,U,N){x();const V=N.attributes,z=U.getAttributes(),W=L.defaultAttributeValues;for(const $ in z){const G=z[$];if(G.location>=0){let ce=V[$];if(ce===void 0&&($==="instanceMatrix"&&b.instanceMatrix&&(ce=b.instanceMatrix),$==="instanceColor"&&b.instanceColor&&(ce=b.instanceColor)),ce!==void 0){const xe=ce.normalized,le=ce.itemSize,Oe=e.get(ce);if(Oe===void 0)continue;const Fe=Oe.buffer,$e=Oe.type,qe=Oe.bytesPerElement,J=$e===i.INT||$e===i.UNSIGNED_INT||ce.gpuType===rc;if(ce.isInterleavedBufferAttribute){const se=ce.data,ve=se.stride,Pe=ce.offset;if(se.isInstancedInterleavedBuffer){for(let Ae=0;Ae<G.locationSize;Ae++)p(G.location+Ae,se.meshPerAttribute);b.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let Ae=0;Ae<G.locationSize;Ae++)g(G.location+Ae);i.bindBuffer(i.ARRAY_BUFFER,Fe);for(let Ae=0;Ae<G.locationSize;Ae++)_(G.location+Ae,le/G.locationSize,$e,xe,ve*qe,(Pe+le/G.locationSize*Ae)*qe,J)}else{if(ce.isInstancedBufferAttribute){for(let se=0;se<G.locationSize;se++)p(G.location+se,ce.meshPerAttribute);b.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let se=0;se<G.locationSize;se++)g(G.location+se);i.bindBuffer(i.ARRAY_BUFFER,Fe);for(let se=0;se<G.locationSize;se++)_(G.location+se,le/G.locationSize,$e,xe,le*qe,le/G.locationSize*se*qe,J)}}else if(W!==void 0){const xe=W[$];if(xe!==void 0)switch(xe.length){case 2:i.vertexAttrib2fv(G.location,xe);break;case 3:i.vertexAttrib3fv(G.location,xe);break;case 4:i.vertexAttrib4fv(G.location,xe);break;default:i.vertexAttrib1fv(G.location,xe)}}}}M()}function w(){P();for(const b in n){const L=n[b];for(const U in L){const N=L[U];for(const V in N)h(N[V].object),delete N[V];delete L[U]}delete n[b]}}function A(b){if(n[b.id]===void 0)return;const L=n[b.id];for(const U in L){const N=L[U];for(const V in N)h(N[V].object),delete N[V];delete L[U]}delete n[b.id]}function C(b){for(const L in n){const U=n[L];if(U[b.id]===void 0)continue;const N=U[b.id];for(const V in N)h(N[V].object),delete N[V];delete U[b.id]}}function P(){S(),o=!0,r!==s&&(r=s,l(r.object))}function S(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:P,resetDefaultState:S,dispose:w,releaseStatesOfGeometry:A,releaseStatesOfProgram:C,initAttributes:x,enableAttribute:g,disableUnusedAttributes:M}}function g1(i,e,t){let n;function s(l){n=l}function r(l,h){i.drawArrays(n,l,h),t.update(h,n,1)}function o(l,h,u){u!==0&&(i.drawArraysInstanced(n,l,h,u),t.update(h,n,u))}function a(l,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,u);let d=0;for(let m=0;m<u;m++)d+=h[m];t.update(d,n,1)}function c(l,h,u,f){if(u===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let m=0;m<l.length;m++)o(l[m],h[m],f[m]);else{d.multiDrawArraysInstancedWEBGL(n,l,0,h,0,f,0,u);let m=0;for(let x=0;x<u;x++)m+=h[x]*f[x];t.update(m,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function x1(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(C){return!(C!==an&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(C){const P=C===wn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==Ln&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==Cn&&!P)}function c(C){if(C==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const u=t.logarithmicDepthBuffer===!0,f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),M=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),_=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),w=m>0,A=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:u,reversedDepthBuffer:f,maxTextures:d,maxVertexTextures:m,maxTextureSize:x,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:M,maxVaryings:_,maxFragmentUniforms:v,vertexTextures:w,maxSamples:A}}function v1(i){const e=this;let t=null,n=0,s=!1,r=!1;const o=new li,a=new Ke,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){const d=u.length!==0||f||n!==0||s;return s=f,n=u.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){t=h(u,f,0)},this.setState=function(u,f,d){const m=u.clippingPlanes,x=u.clipIntersection,g=u.clipShadows,p=i.get(u);if(!s||m===null||m.length===0||r&&!g)r?h(null):l();else{const M=r?0:n,_=M*4;let v=p.clippingState||null;c.value=v,v=h(m,f,_,d);for(let w=0;w!==_;++w)v[w]=t[w];p.clippingState=v,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=M}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,f,d,m){const x=u!==null?u.length:0;let g=null;if(x!==0){if(g=c.value,m!==!0||g===null){const p=d+x*4,M=f.matrixWorldInverse;a.getNormalMatrix(M),(g===null||g.length<p)&&(g=new Float32Array(p));for(let _=0,v=d;_!==x;++_,v+=4)o.copy(u[_]).applyMatrix4(M,a),o.normal.toArray(g,v),g[v+3]=o.constant}c.value=g,c.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,g}}function _1(i){let e=new WeakMap;function t(o,a){return a===ol?o.mapping=_s:a===al&&(o.mapping=Ms),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===ol||a===al)if(e.has(o)){const c=e.get(o).texture;return t(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new Pp(c.height);return l.fromEquirectangularTexture(i,o),e.set(o,l),o.addEventListener("dispose",s),t(l.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}const ds=4,Ph=[.125,.215,.35,.446,.526,.582],Ri=20,Ta=new Ac,Lh=new Ue;let Aa=null,Ca=0,Ra=0,Pa=!1;const wi=(1+Math.sqrt(5))/2,ls=1/wi,Dh=[new R(-wi,ls,0),new R(wi,ls,0),new R(-ls,0,wi),new R(ls,0,wi),new R(0,wi,-ls),new R(0,wi,ls),new R(-1,1,-1),new R(1,1,-1),new R(-1,1,1),new R(1,1,1)],M1=new R;class Ih{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100,r={}){const{size:o=256,position:a=M1}=r;Aa=this._renderer.getRenderTarget(),Ca=this._renderer.getActiveCubeFace(),Ra=this._renderer.getActiveMipmapLevel(),Pa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,s,c,a),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Fh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Nh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Aa,Ca,Ra),this._renderer.xr.enabled=Pa,e.scissorTest=!1,Xr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===_s||e.mapping===Ms?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Aa=this._renderer.getRenderTarget(),Ca=this._renderer.getActiveCubeFace(),Ra=this._renderer.getActiveMipmapLevel(),Pa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:on,minFilter:on,generateMipmaps:!1,type:wn,format:an,colorSpace:ys,depthBuffer:!1},s=Uh(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Uh(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=y1(r)),this._blurMaterial=S1(r,e,t)}return s}_compileMaterial(e){const t=new at(this._lodPlanes[0],e);this._renderer.compile(t,Ta)}_sceneToCubeUV(e,t,n,s,r){const c=new Bt(90,1,t,n),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,d=u.toneMapping;u.getClearColor(Lh),u.toneMapping=fi,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(s),u.clearDepth(),u.setRenderTarget(null));const x=new dn({name:"PMREM.Background",side:Gt,depthWrite:!1,depthTest:!1}),g=new at(new ln,x);let p=!1;const M=e.background;M?M.isColor&&(x.color.copy(M),e.background=null,p=!0):(x.color.copy(Lh),p=!0);for(let _=0;_<6;_++){const v=_%3;v===0?(c.up.set(0,l[_],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+h[_],r.y,r.z)):v===1?(c.up.set(0,0,l[_]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+h[_],r.z)):(c.up.set(0,l[_],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+h[_]));const w=this._cubeSize;Xr(s,v*w,_>2?w:0,w,w),u.setRenderTarget(s),p&&u.render(g,c),u.render(e,c)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=d,u.autoClear=f,e.background=M}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===_s||e.mapping===Ms;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Fh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Nh());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new at(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const c=this._cubeSize;Xr(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,Ta)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Dh[(s-r-1)%Dh.length];this._blur(e,r-1,r,o,a)}t.autoClear=n}_blur(e,t,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,s,"latitudinal",r),this._halfBlur(o,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new at(this._lodPlanes[s],l),f=l.uniforms,d=this._sizeLods[n]-1,m=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*Ri-1),x=r/m,g=isFinite(r)?1+Math.floor(h*x):Ri;g>Ri&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Ri}`);const p=[];let M=0;for(let C=0;C<Ri;++C){const P=C/x,S=Math.exp(-P*P/2);p.push(S),C===0?M+=S:C<g&&(M+=2*S)}for(let C=0;C<p.length;C++)p[C]=p[C]/M;f.envMap.value=e.texture,f.samples.value=g,f.weights.value=p,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:_}=this;f.dTheta.value=m,f.mipInt.value=_-n;const v=this._sizeLods[s],w=3*v*(s>_-ds?s-_+ds:0),A=4*(this._cubeSize-v);Xr(t,w,A,3*v,2*v),c.setRenderTarget(t),c.render(u,Ta)}}function y1(i){const e=[],t=[],n=[];let s=i;const r=i-ds+1+Ph.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);t.push(a);let c=1/a;o>i-ds?c=Ph[o-i+ds-1]:o===0&&(c=0),n.push(c);const l=1/(a-2),h=-l,u=1+l,f=[h,h,u,h,u,u,h,h,u,u,h,u],d=6,m=6,x=3,g=2,p=1,M=new Float32Array(x*m*d),_=new Float32Array(g*m*d),v=new Float32Array(p*m*d);for(let A=0;A<d;A++){const C=A%3*2/3-1,P=A>2?0:-1,S=[C,P,0,C+2/3,P,0,C+2/3,P+1,0,C,P,0,C+2/3,P+1,0,C,P+1,0];M.set(S,x*m*A),_.set(f,g*m*A);const b=[A,A,A,A,A,A];v.set(b,p*m*A)}const w=new nt;w.setAttribute("position",new xt(M,x)),w.setAttribute("uv",new xt(_,g)),w.setAttribute("faceIndex",new xt(v,p)),e.push(w),s>ds&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Uh(i,e,t){const n=new Kt(i,e,t);return n.texture.mapping=Do,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Xr(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function S1(i,e,t){const n=new Float32Array(Ri),s=new R(0,1,0);return new gt({name:"SphericalGaussianBlur",defines:{n:Ri,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Cc(),fragmentShader:`

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
		`,blending:qn,depthTest:!1,depthWrite:!1})}function Nh(){return new gt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Cc(),fragmentShader:`

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
		`,blending:qn,depthTest:!1,depthWrite:!1})}function Fh(){return new gt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Cc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:qn,depthTest:!1,depthWrite:!1})}function Cc(){return`

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
	`}function b1(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===ol||c===al,h=c===_s||c===Ms;if(l||h){let u=e.get(a);const f=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return t===null&&(t=new Ih(i)),u=l?t.fromEquirectangular(a,u):t.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),u.texture;if(u!==void 0)return u.texture;{const d=a.image;return l&&d&&d.height>0||h&&d&&s(d)?(t===null&&(t=new Ih(i)),u=l?t.fromEquirectangular(a):t.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let c=0;const l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function r(a){const c=a.target;c.removeEventListener("dispose",r);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function w1(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const s=t(n);return s===null&&or("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function E1(i,e,t,n){const s={},r=new WeakMap;function o(u){const f=u.target;f.index!==null&&e.remove(f.index);for(const m in f.attributes)e.remove(f.attributes[m]);f.removeEventListener("dispose",o),delete s[f.id];const d=r.get(f);d&&(e.remove(d),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(u,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,t.memory.geometries++),f}function c(u){const f=u.attributes;for(const d in f)e.update(f[d],i.ARRAY_BUFFER)}function l(u){const f=[],d=u.index,m=u.attributes.position;let x=0;if(d!==null){const M=d.array;x=d.version;for(let _=0,v=M.length;_<v;_+=3){const w=M[_+0],A=M[_+1],C=M[_+2];f.push(w,A,A,C,C,w)}}else if(m!==void 0){const M=m.array;x=m.version;for(let _=0,v=M.length/3-1;_<v;_+=3){const w=_+0,A=_+1,C=_+2;f.push(w,A,A,C,C,w)}}else return;const g=new(Zu(f)?tf:ef)(f,1);g.version=x;const p=r.get(u);p&&e.remove(p),r.set(u,g)}function h(u){const f=r.get(u);if(f){const d=u.index;d!==null&&f.version<d.version&&l(u)}else l(u);return r.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function T1(i,e,t){let n;function s(f){n=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function c(f,d){i.drawElements(n,d,r,f*o),t.update(d,n,1)}function l(f,d,m){m!==0&&(i.drawElementsInstanced(n,d,r,f*o,m),t.update(d,n,m))}function h(f,d,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,f,0,m);let g=0;for(let p=0;p<m;p++)g+=d[p];t.update(g,n,1)}function u(f,d,m,x){if(m===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let p=0;p<f.length;p++)l(f[p]/o,d[p],x[p]);else{g.multiDrawElementsInstancedWEBGL(n,d,0,r,f,0,x,0,m);let p=0;for(let M=0;M<m;M++)p+=d[M]*x[M];t.update(p,n,1)}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function A1(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function C1(i,e,t){const n=new WeakMap,s=new st;function r(o,a,c){const l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let f=n.get(a);if(f===void 0||f.count!==u){let b=function(){P.dispose(),n.delete(a),a.removeEventListener("dispose",b)};var d=b;f!==void 0&&f.texture.dispose();const m=a.morphAttributes.position!==void 0,x=a.morphAttributes.normal!==void 0,g=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],M=a.morphAttributes.normal||[],_=a.morphAttributes.color||[];let v=0;m===!0&&(v=1),x===!0&&(v=2),g===!0&&(v=3);let w=a.attributes.position.count*v,A=1;w>e.maxTextureSize&&(A=Math.ceil(w/e.maxTextureSize),w=e.maxTextureSize);const C=new Float32Array(w*A*4*u),P=new Ju(C,w,A,u);P.type=Cn,P.needsUpdate=!0;const S=v*4;for(let L=0;L<u;L++){const U=p[L],N=M[L],V=_[L],z=w*A*4*L;for(let W=0;W<U.count;W++){const $=W*S;m===!0&&(s.fromBufferAttribute(U,W),C[z+$+0]=s.x,C[z+$+1]=s.y,C[z+$+2]=s.z,C[z+$+3]=0),x===!0&&(s.fromBufferAttribute(N,W),C[z+$+4]=s.x,C[z+$+5]=s.y,C[z+$+6]=s.z,C[z+$+7]=0),g===!0&&(s.fromBufferAttribute(V,W),C[z+$+8]=s.x,C[z+$+9]=s.y,C[z+$+10]=s.z,C[z+$+11]=V.itemSize===4?s.w:1)}}f={count:u,texture:P,size:new ne(w,A)},n.set(a,f),a.addEventListener("dispose",b)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let m=0;for(let g=0;g<l.length;g++)m+=l[g];const x=a.morphTargetsRelative?1:1-m;c.getUniforms().setValue(i,"morphTargetBaseInfluence",x),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",f.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function R1(i,e,t,n){let s=new WeakMap;function r(c){const l=n.render.frame,h=c.geometry,u=e.get(c,h);if(s.get(u)!==l&&(e.update(u),s.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){const f=c.skeleton;s.get(f)!==l&&(f.update(),s.set(f,l))}return u}function o(){s=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:o}}const Sf=new Tt,Oh=new af(1,1),bf=new Ju,wf=new pp,Ef=new rf,zh=[],Bh=[],Hh=new Float32Array(16),kh=new Float32Array(9),Gh=new Float32Array(4);function Ps(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let r=zh[s];if(r===void 0&&(r=new Float32Array(s),zh[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function At(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Ct(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function zo(i,e){let t=Bh[e];t===void 0&&(t=new Int32Array(e),Bh[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function P1(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function L1(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(At(t,e))return;i.uniform2fv(this.addr,e),Ct(t,e)}}function D1(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(At(t,e))return;i.uniform3fv(this.addr,e),Ct(t,e)}}function I1(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(At(t,e))return;i.uniform4fv(this.addr,e),Ct(t,e)}}function U1(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(At(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Ct(t,e)}else{if(At(t,n))return;Gh.set(n),i.uniformMatrix2fv(this.addr,!1,Gh),Ct(t,n)}}function N1(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(At(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Ct(t,e)}else{if(At(t,n))return;kh.set(n),i.uniformMatrix3fv(this.addr,!1,kh),Ct(t,n)}}function F1(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(At(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Ct(t,e)}else{if(At(t,n))return;Hh.set(n),i.uniformMatrix4fv(this.addr,!1,Hh),Ct(t,n)}}function O1(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function z1(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(At(t,e))return;i.uniform2iv(this.addr,e),Ct(t,e)}}function B1(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(At(t,e))return;i.uniform3iv(this.addr,e),Ct(t,e)}}function H1(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(At(t,e))return;i.uniform4iv(this.addr,e),Ct(t,e)}}function k1(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function G1(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(At(t,e))return;i.uniform2uiv(this.addr,e),Ct(t,e)}}function V1(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(At(t,e))return;i.uniform3uiv(this.addr,e),Ct(t,e)}}function W1(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(At(t,e))return;i.uniform4uiv(this.addr,e),Ct(t,e)}}function X1(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Oh.compareFunction=Ku,r=Oh):r=Sf,t.setTexture2D(e||r,s)}function q1(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||wf,s)}function Y1(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Ef,s)}function j1(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||bf,s)}function K1(i){switch(i){case 5126:return P1;case 35664:return L1;case 35665:return D1;case 35666:return I1;case 35674:return U1;case 35675:return N1;case 35676:return F1;case 5124:case 35670:return O1;case 35667:case 35671:return z1;case 35668:case 35672:return B1;case 35669:case 35673:return H1;case 5125:return k1;case 36294:return G1;case 36295:return V1;case 36296:return W1;case 35678:case 36198:case 36298:case 36306:case 35682:return X1;case 35679:case 36299:case 36307:return q1;case 35680:case 36300:case 36308:case 36293:return Y1;case 36289:case 36303:case 36311:case 36292:return j1}}function Z1(i,e){i.uniform1fv(this.addr,e)}function J1(i,e){const t=Ps(e,this.size,2);i.uniform2fv(this.addr,t)}function Q1(i,e){const t=Ps(e,this.size,3);i.uniform3fv(this.addr,t)}function $1(i,e){const t=Ps(e,this.size,4);i.uniform4fv(this.addr,t)}function ex(i,e){const t=Ps(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function tx(i,e){const t=Ps(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function nx(i,e){const t=Ps(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function ix(i,e){i.uniform1iv(this.addr,e)}function sx(i,e){i.uniform2iv(this.addr,e)}function rx(i,e){i.uniform3iv(this.addr,e)}function ox(i,e){i.uniform4iv(this.addr,e)}function ax(i,e){i.uniform1uiv(this.addr,e)}function lx(i,e){i.uniform2uiv(this.addr,e)}function cx(i,e){i.uniform3uiv(this.addr,e)}function hx(i,e){i.uniform4uiv(this.addr,e)}function ux(i,e,t){const n=this.cache,s=e.length,r=zo(t,s);At(n,r)||(i.uniform1iv(this.addr,r),Ct(n,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||Sf,r[o])}function fx(i,e,t){const n=this.cache,s=e.length,r=zo(t,s);At(n,r)||(i.uniform1iv(this.addr,r),Ct(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||wf,r[o])}function dx(i,e,t){const n=this.cache,s=e.length,r=zo(t,s);At(n,r)||(i.uniform1iv(this.addr,r),Ct(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||Ef,r[o])}function px(i,e,t){const n=this.cache,s=e.length,r=zo(t,s);At(n,r)||(i.uniform1iv(this.addr,r),Ct(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||bf,r[o])}function mx(i){switch(i){case 5126:return Z1;case 35664:return J1;case 35665:return Q1;case 35666:return $1;case 35674:return ex;case 35675:return tx;case 35676:return nx;case 5124:case 35670:return ix;case 35667:case 35671:return sx;case 35668:case 35672:return rx;case 35669:case 35673:return ox;case 5125:return ax;case 36294:return lx;case 36295:return cx;case 36296:return hx;case 35678:case 36198:case 36298:case 36306:case 35682:return ux;case 35679:case 36299:case 36307:return fx;case 35680:case 36300:case 36308:case 36293:return dx;case 36289:case 36303:case 36311:case 36292:return px}}class gx{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=K1(t.type)}}class xx{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=mx(t.type)}}class vx{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,t[a.id],n)}}}const La=/(\w+)(\])?(\[|\.)?/g;function Vh(i,e){i.seq.push(e),i.map[e.id]=e}function _x(i,e,t){const n=i.name,s=n.length;for(La.lastIndex=0;;){const r=La.exec(n),o=La.lastIndex;let a=r[1];const c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){Vh(t,l===void 0?new gx(a,i,e):new xx(a,i,e));break}else{let u=t.map[a];u===void 0&&(u=new vx(a),Vh(t,u)),t=u}}}class co{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);_x(r,o,this)}}setValue(e,t,n,s){const r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){const a=t[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in t&&n.push(o)}return n}}function Wh(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const Mx=37297;let yx=0;function Sx(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}const Xh=new Ke;function bx(i){it._getMatrix(Xh,it.workingColorSpace,i);const e=`mat3( ${Xh.elements.map(t=>t.toFixed(4))} )`;switch(it.getTransfer(i)){case vo:return[e,"LinearTransferOETF"];case lt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function qh(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+Sx(i.getShaderSource(e),a)}else return r}function wx(i,e){const t=bx(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Ex(i,e){let t;switch(e){case Uu:t="Linear";break;case Nu:t="Reinhard";break;case Fu:t="Cineon";break;case sc:t="ACESFilmic";break;case zu:t="AgX";break;case Bu:t="Neutral";break;case Ou:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const qr=new R;function Tx(){it.getLuminanceCoefficients(qr);const i=qr.x.toFixed(4),e=qr.y.toFixed(4),t=qr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Ax(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Vs).join(`
`)}function Cx(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Rx(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(e,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function Vs(i){return i!==""}function Yh(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function jh(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Px=/^[ \t]*#include +<([\w\d./]+)>/gm;function Gl(i){return i.replace(Px,Dx)}const Lx=new Map;function Dx(i,e){let t=Je[e];if(t===void 0){const n=Lx.get(e);if(n!==void 0)t=Je[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Gl(t)}const Ix=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Kh(i){return i.replace(Ix,Ux)}function Ux(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Zh(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}function Nx(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Du?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===dd?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===kn&&(e="SHADOWMAP_TYPE_VSM"),e}function Fx(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case _s:case Ms:e="ENVMAP_TYPE_CUBE";break;case Do:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Ox(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Ms:e="ENVMAP_MODE_REFRACTION";break}return e}function zx(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Iu:e="ENVMAP_BLENDING_MULTIPLY";break;case Dd:e="ENVMAP_BLENDING_MIX";break;case Id:e="ENVMAP_BLENDING_ADD";break}return e}function Bx(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function Hx(i,e,t,n){const s=i.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const c=Nx(t),l=Fx(t),h=Ox(t),u=zx(t),f=Bx(t),d=Ax(t),m=Cx(r),x=s.createProgram();let g,p,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(Vs).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(Vs).join(`
`),p.length>0&&(p+=`
`)):(g=[Zh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Vs).join(`
`),p=[Zh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==fi?"#define TONE_MAPPING":"",t.toneMapping!==fi?Je.tonemapping_pars_fragment:"",t.toneMapping!==fi?Ex("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Je.colorspace_pars_fragment,wx("linearToOutputTexel",t.outputColorSpace),Tx(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Vs).join(`
`)),o=Gl(o),o=Yh(o,t),o=jh(o,t),a=Gl(a),a=Yh(a,t),a=jh(a,t),o=Kh(o),a=Kh(a),t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,g=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",t.glslVersion===jc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===jc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const _=M+g+o,v=M+p+a,w=Wh(s,s.VERTEX_SHADER,_),A=Wh(s,s.FRAGMENT_SHADER,v);s.attachShader(x,w),s.attachShader(x,A),t.index0AttributeName!==void 0?s.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function C(L){if(i.debug.checkShaderErrors){const U=s.getProgramInfoLog(x)||"",N=s.getShaderInfoLog(w)||"",V=s.getShaderInfoLog(A)||"",z=U.trim(),W=N.trim(),$=V.trim();let G=!0,ce=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(G=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,w,A);else{const xe=qh(s,w,"vertex"),le=qh(s,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+z+`
`+xe+`
`+le)}else z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",z):(W===""||$==="")&&(ce=!1);ce&&(L.diagnostics={runnable:G,programLog:z,vertexShader:{log:W,prefix:g},fragmentShader:{log:$,prefix:p}})}s.deleteShader(w),s.deleteShader(A),P=new co(s,x),S=Rx(s,x)}let P;this.getUniforms=function(){return P===void 0&&C(this),P};let S;this.getAttributes=function(){return S===void 0&&C(this),S};let b=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=s.getProgramParameter(x,Mx)),b},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=yx++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=w,this.fragmentShader=A,this}let kx=0;class Gx{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Vx(e),t.set(e,n)),n}}class Vx{constructor(e){this.id=kx++,this.code=e,this.usedTimes=0}}function Wx(i,e,t,n,s,r,o){const a=new Qu,c=new Gx,l=new Set,h=[],u=s.logarithmicDepthBuffer,f=s.vertexTextures;let d=s.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(S){return l.add(S),S===0?"uv":`uv${S}`}function g(S,b,L,U,N){const V=U.fog,z=N.geometry,W=S.isMeshStandardMaterial?U.environment:null,$=(S.isMeshStandardMaterial?t:e).get(S.envMap||W),G=$&&$.mapping===Do?$.image.height:null,ce=m[S.type];S.precision!==null&&(d=s.getMaxPrecision(S.precision),d!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",d,"instead."));const xe=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,le=xe!==void 0?xe.length:0;let Oe=0;z.morphAttributes.position!==void 0&&(Oe=1),z.morphAttributes.normal!==void 0&&(Oe=2),z.morphAttributes.color!==void 0&&(Oe=3);let Fe,$e,qe,J;if(ce){const ot=Tn[ce];Fe=ot.vertexShader,$e=ot.fragmentShader}else Fe=S.vertexShader,$e=S.fragmentShader,c.update(S),qe=c.getVertexShaderID(S),J=c.getFragmentShaderID(S);const se=i.getRenderTarget(),ve=i.state.buffers.depth.getReversed(),Pe=N.isInstancedMesh===!0,Ae=N.isBatchedMesh===!0,De=!!S.map,et=!!S.matcap,D=!!$,oe=!!S.aoMap,ie=!!S.lightMap,F=!!S.bumpMap,B=!!S.normalMap,ee=!!S.displacementMap,Y=!!S.emissiveMap,te=!!S.metalnessMap,Ee=!!S.roughnessMap,he=S.anisotropy>0,E=S.clearcoat>0,y=S.dispersion>0,I=S.iridescence>0,X=S.sheen>0,q=S.transmission>0,j=he&&!!S.anisotropyMap,ge=E&&!!S.clearcoatMap,ae=E&&!!S.clearcoatNormalMap,Te=E&&!!S.clearcoatRoughnessMap,Ce=I&&!!S.iridescenceMap,ue=I&&!!S.iridescenceThicknessMap,Se=X&&!!S.sheenColorMap,Ve=X&&!!S.sheenRoughnessMap,ze=!!S.specularMap,be=!!S.specularColorMap,je=!!S.specularIntensityMap,O=q&&!!S.transmissionMap,me=q&&!!S.thicknessMap,Me=!!S.gradientMap,Le=!!S.alphaMap,de=S.alphaTest>0,re=!!S.alphaHash,Ne=!!S.extensions;let Ye=fi;S.toneMapped&&(se===null||se.isXRRenderTarget===!0)&&(Ye=i.toneMapping);const pt={shaderID:ce,shaderType:S.type,shaderName:S.name,vertexShader:Fe,fragmentShader:$e,defines:S.defines,customVertexShaderID:qe,customFragmentShaderID:J,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:d,batching:Ae,batchingColor:Ae&&N._colorsTexture!==null,instancing:Pe,instancingColor:Pe&&N.instanceColor!==null,instancingMorph:Pe&&N.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:se===null?i.outputColorSpace:se.isXRRenderTarget===!0?se.texture.colorSpace:ys,alphaToCoverage:!!S.alphaToCoverage,map:De,matcap:et,envMap:D,envMapMode:D&&$.mapping,envMapCubeUVHeight:G,aoMap:oe,lightMap:ie,bumpMap:F,normalMap:B,displacementMap:f&&ee,emissiveMap:Y,normalMapObjectSpace:B&&S.normalMapType===Od,normalMapTangentSpace:B&&S.normalMapType===ju,metalnessMap:te,roughnessMap:Ee,anisotropy:he,anisotropyMap:j,clearcoat:E,clearcoatMap:ge,clearcoatNormalMap:ae,clearcoatRoughnessMap:Te,dispersion:y,iridescence:I,iridescenceMap:Ce,iridescenceThicknessMap:ue,sheen:X,sheenColorMap:Se,sheenRoughnessMap:Ve,specularMap:ze,specularColorMap:be,specularIntensityMap:je,transmission:q,transmissionMap:O,thicknessMap:me,gradientMap:Me,opaque:S.transparent===!1&&S.blending===Ii&&S.alphaToCoverage===!1,alphaMap:Le,alphaTest:de,alphaHash:re,combine:S.combine,mapUv:De&&x(S.map.channel),aoMapUv:oe&&x(S.aoMap.channel),lightMapUv:ie&&x(S.lightMap.channel),bumpMapUv:F&&x(S.bumpMap.channel),normalMapUv:B&&x(S.normalMap.channel),displacementMapUv:ee&&x(S.displacementMap.channel),emissiveMapUv:Y&&x(S.emissiveMap.channel),metalnessMapUv:te&&x(S.metalnessMap.channel),roughnessMapUv:Ee&&x(S.roughnessMap.channel),anisotropyMapUv:j&&x(S.anisotropyMap.channel),clearcoatMapUv:ge&&x(S.clearcoatMap.channel),clearcoatNormalMapUv:ae&&x(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Te&&x(S.clearcoatRoughnessMap.channel),iridescenceMapUv:Ce&&x(S.iridescenceMap.channel),iridescenceThicknessMapUv:ue&&x(S.iridescenceThicknessMap.channel),sheenColorMapUv:Se&&x(S.sheenColorMap.channel),sheenRoughnessMapUv:Ve&&x(S.sheenRoughnessMap.channel),specularMapUv:ze&&x(S.specularMap.channel),specularColorMapUv:be&&x(S.specularColorMap.channel),specularIntensityMapUv:je&&x(S.specularIntensityMap.channel),transmissionMapUv:O&&x(S.transmissionMap.channel),thicknessMapUv:me&&x(S.thicknessMap.channel),alphaMapUv:Le&&x(S.alphaMap.channel),vertexTangents:!!z.attributes.tangent&&(B||he),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!z.attributes.uv&&(De||Le),fog:!!V,useFog:S.fog===!0,fogExp2:!!V&&V.isFogExp2,flatShading:S.flatShading===!0&&S.wireframe===!1,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:ve,skinning:N.isSkinnedMesh===!0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:le,morphTextureStride:Oe,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:i.shadowMap.enabled&&L.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ye,decodeVideoTexture:De&&S.map.isVideoTexture===!0&&it.getTransfer(S.map.colorSpace)===lt,decodeVideoTextureEmissive:Y&&S.emissiveMap.isVideoTexture===!0&&it.getTransfer(S.emissiveMap.colorSpace)===lt,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Ht,flipSided:S.side===Gt,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Ne&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ne&&S.extensions.multiDraw===!0||Ae)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return pt.vertexUv1s=l.has(1),pt.vertexUv2s=l.has(2),pt.vertexUv3s=l.has(3),l.clear(),pt}function p(S){const b=[];if(S.shaderID?b.push(S.shaderID):(b.push(S.customVertexShaderID),b.push(S.customFragmentShaderID)),S.defines!==void 0)for(const L in S.defines)b.push(L),b.push(S.defines[L]);return S.isRawShaderMaterial===!1&&(M(b,S),_(b,S),b.push(i.outputColorSpace)),b.push(S.customProgramCacheKey),b.join()}function M(S,b){S.push(b.precision),S.push(b.outputColorSpace),S.push(b.envMapMode),S.push(b.envMapCubeUVHeight),S.push(b.mapUv),S.push(b.alphaMapUv),S.push(b.lightMapUv),S.push(b.aoMapUv),S.push(b.bumpMapUv),S.push(b.normalMapUv),S.push(b.displacementMapUv),S.push(b.emissiveMapUv),S.push(b.metalnessMapUv),S.push(b.roughnessMapUv),S.push(b.anisotropyMapUv),S.push(b.clearcoatMapUv),S.push(b.clearcoatNormalMapUv),S.push(b.clearcoatRoughnessMapUv),S.push(b.iridescenceMapUv),S.push(b.iridescenceThicknessMapUv),S.push(b.sheenColorMapUv),S.push(b.sheenRoughnessMapUv),S.push(b.specularMapUv),S.push(b.specularColorMapUv),S.push(b.specularIntensityMapUv),S.push(b.transmissionMapUv),S.push(b.thicknessMapUv),S.push(b.combine),S.push(b.fogExp2),S.push(b.sizeAttenuation),S.push(b.morphTargetsCount),S.push(b.morphAttributeCount),S.push(b.numDirLights),S.push(b.numPointLights),S.push(b.numSpotLights),S.push(b.numSpotLightMaps),S.push(b.numHemiLights),S.push(b.numRectAreaLights),S.push(b.numDirLightShadows),S.push(b.numPointLightShadows),S.push(b.numSpotLightShadows),S.push(b.numSpotLightShadowsWithMaps),S.push(b.numLightProbes),S.push(b.shadowMapType),S.push(b.toneMapping),S.push(b.numClippingPlanes),S.push(b.numClipIntersection),S.push(b.depthPacking)}function _(S,b){a.disableAll(),b.supportsVertexTextures&&a.enable(0),b.instancing&&a.enable(1),b.instancingColor&&a.enable(2),b.instancingMorph&&a.enable(3),b.matcap&&a.enable(4),b.envMap&&a.enable(5),b.normalMapObjectSpace&&a.enable(6),b.normalMapTangentSpace&&a.enable(7),b.clearcoat&&a.enable(8),b.iridescence&&a.enable(9),b.alphaTest&&a.enable(10),b.vertexColors&&a.enable(11),b.vertexAlphas&&a.enable(12),b.vertexUv1s&&a.enable(13),b.vertexUv2s&&a.enable(14),b.vertexUv3s&&a.enable(15),b.vertexTangents&&a.enable(16),b.anisotropy&&a.enable(17),b.alphaHash&&a.enable(18),b.batching&&a.enable(19),b.dispersion&&a.enable(20),b.batchingColor&&a.enable(21),b.gradientMap&&a.enable(22),S.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.reversedDepthBuffer&&a.enable(4),b.skinning&&a.enable(5),b.morphTargets&&a.enable(6),b.morphNormals&&a.enable(7),b.morphColors&&a.enable(8),b.premultipliedAlpha&&a.enable(9),b.shadowMapEnabled&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),b.decodeVideoTextureEmissive&&a.enable(20),b.alphaToCoverage&&a.enable(21),S.push(a.mask)}function v(S){const b=m[S.type];let L;if(b){const U=Tn[b];L=Pn.clone(U.uniforms)}else L=S.uniforms;return L}function w(S,b){let L;for(let U=0,N=h.length;U<N;U++){const V=h[U];if(V.cacheKey===b){L=V,++L.usedTimes;break}}return L===void 0&&(L=new Hx(i,b,S,r),h.push(L)),L}function A(S){if(--S.usedTimes===0){const b=h.indexOf(S);h[b]=h[h.length-1],h.pop(),S.destroy()}}function C(S){c.remove(S)}function P(){c.dispose()}return{getParameters:g,getProgramCacheKey:p,getUniforms:v,acquireProgram:w,releaseProgram:A,releaseShaderCache:C,programs:h,dispose:P}}function Xx(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,c){i.get(o)[a]=c}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function qx(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Jh(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Qh(){const i=[];let e=0;const t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(u,f,d,m,x,g){let p=i[e];return p===void 0?(p={id:u.id,object:u,geometry:f,material:d,groupOrder:m,renderOrder:u.renderOrder,z:x,group:g},i[e]=p):(p.id=u.id,p.object=u,p.geometry=f,p.material=d,p.groupOrder=m,p.renderOrder=u.renderOrder,p.z=x,p.group=g),e++,p}function a(u,f,d,m,x,g){const p=o(u,f,d,m,x,g);d.transmission>0?n.push(p):d.transparent===!0?s.push(p):t.push(p)}function c(u,f,d,m,x,g){const p=o(u,f,d,m,x,g);d.transmission>0?n.unshift(p):d.transparent===!0?s.unshift(p):t.unshift(p)}function l(u,f){t.length>1&&t.sort(u||qx),n.length>1&&n.sort(f||Jh),s.length>1&&s.sort(f||Jh)}function h(){for(let u=e,f=i.length;u<f;u++){const d=i[u];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:a,unshift:c,finish:h,sort:l}}function Yx(){let i=new WeakMap;function e(n,s){const r=i.get(n);let o;return r===void 0?(o=new Qh,i.set(n,[o])):s>=r.length?(o=new Qh,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function jx(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new R,color:new Ue};break;case"SpotLight":t={position:new R,direction:new R,color:new Ue,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new R,color:new Ue,distance:0,decay:0};break;case"HemisphereLight":t={direction:new R,skyColor:new Ue,groundColor:new Ue};break;case"RectAreaLight":t={color:new Ue,position:new R,halfWidth:new R,halfHeight:new R};break}return i[e.id]=t,t}}}function Kx(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ne};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ne};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ne,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let Zx=0;function Jx(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Qx(i){const e=new jx,t=Kx(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new R);const s=new R,r=new Ze,o=new Ze;function a(l){let h=0,u=0,f=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let d=0,m=0,x=0,g=0,p=0,M=0,_=0,v=0,w=0,A=0,C=0;l.sort(Jx);for(let S=0,b=l.length;S<b;S++){const L=l[S],U=L.color,N=L.intensity,V=L.distance,z=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)h+=U.r*N,u+=U.g*N,f+=U.b*N;else if(L.isLightProbe){for(let W=0;W<9;W++)n.probe[W].addScaledVector(L.sh.coefficients[W],N);C++}else if(L.isDirectionalLight){const W=e.get(L);if(W.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const $=L.shadow,G=t.get(L);G.shadowIntensity=$.intensity,G.shadowBias=$.bias,G.shadowNormalBias=$.normalBias,G.shadowRadius=$.radius,G.shadowMapSize=$.mapSize,n.directionalShadow[d]=G,n.directionalShadowMap[d]=z,n.directionalShadowMatrix[d]=L.shadow.matrix,M++}n.directional[d]=W,d++}else if(L.isSpotLight){const W=e.get(L);W.position.setFromMatrixPosition(L.matrixWorld),W.color.copy(U).multiplyScalar(N),W.distance=V,W.coneCos=Math.cos(L.angle),W.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),W.decay=L.decay,n.spot[x]=W;const $=L.shadow;if(L.map&&(n.spotLightMap[w]=L.map,w++,$.updateMatrices(L),L.castShadow&&A++),n.spotLightMatrix[x]=$.matrix,L.castShadow){const G=t.get(L);G.shadowIntensity=$.intensity,G.shadowBias=$.bias,G.shadowNormalBias=$.normalBias,G.shadowRadius=$.radius,G.shadowMapSize=$.mapSize,n.spotShadow[x]=G,n.spotShadowMap[x]=z,v++}x++}else if(L.isRectAreaLight){const W=e.get(L);W.color.copy(U).multiplyScalar(N),W.halfWidth.set(L.width*.5,0,0),W.halfHeight.set(0,L.height*.5,0),n.rectArea[g]=W,g++}else if(L.isPointLight){const W=e.get(L);if(W.color.copy(L.color).multiplyScalar(L.intensity),W.distance=L.distance,W.decay=L.decay,L.castShadow){const $=L.shadow,G=t.get(L);G.shadowIntensity=$.intensity,G.shadowBias=$.bias,G.shadowNormalBias=$.normalBias,G.shadowRadius=$.radius,G.shadowMapSize=$.mapSize,G.shadowCameraNear=$.camera.near,G.shadowCameraFar=$.camera.far,n.pointShadow[m]=G,n.pointShadowMap[m]=z,n.pointShadowMatrix[m]=L.shadow.matrix,_++}n.point[m]=W,m++}else if(L.isHemisphereLight){const W=e.get(L);W.skyColor.copy(L.color).multiplyScalar(N),W.groundColor.copy(L.groundColor).multiplyScalar(N),n.hemi[p]=W,p++}}g>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ye.LTC_FLOAT_1,n.rectAreaLTC2=ye.LTC_FLOAT_2):(n.rectAreaLTC1=ye.LTC_HALF_1,n.rectAreaLTC2=ye.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;const P=n.hash;(P.directionalLength!==d||P.pointLength!==m||P.spotLength!==x||P.rectAreaLength!==g||P.hemiLength!==p||P.numDirectionalShadows!==M||P.numPointShadows!==_||P.numSpotShadows!==v||P.numSpotMaps!==w||P.numLightProbes!==C)&&(n.directional.length=d,n.spot.length=x,n.rectArea.length=g,n.point.length=m,n.hemi.length=p,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.pointShadow.length=_,n.pointShadowMap.length=_,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=M,n.pointShadowMatrix.length=_,n.spotLightMatrix.length=v+w-A,n.spotLightMap.length=w,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=C,P.directionalLength=d,P.pointLength=m,P.spotLength=x,P.rectAreaLength=g,P.hemiLength=p,P.numDirectionalShadows=M,P.numPointShadows=_,P.numSpotShadows=v,P.numSpotMaps=w,P.numLightProbes=C,n.version=Zx++)}function c(l,h){let u=0,f=0,d=0,m=0,x=0;const g=h.matrixWorldInverse;for(let p=0,M=l.length;p<M;p++){const _=l[p];if(_.isDirectionalLight){const v=n.directional[u];v.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(g),u++}else if(_.isSpotLight){const v=n.spot[d];v.position.setFromMatrixPosition(_.matrixWorld),v.position.applyMatrix4(g),v.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(g),d++}else if(_.isRectAreaLight){const v=n.rectArea[m];v.position.setFromMatrixPosition(_.matrixWorld),v.position.applyMatrix4(g),o.identity(),r.copy(_.matrixWorld),r.premultiply(g),o.extractRotation(r),v.halfWidth.set(_.width*.5,0,0),v.halfHeight.set(0,_.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),m++}else if(_.isPointLight){const v=n.point[f];v.position.setFromMatrixPosition(_.matrixWorld),v.position.applyMatrix4(g),f++}else if(_.isHemisphereLight){const v=n.hemi[x];v.direction.setFromMatrixPosition(_.matrixWorld),v.direction.transformDirection(g),x++}}}return{setup:a,setupView:c,state:n}}function $h(i){const e=new Qx(i),t=[],n=[];function s(h){l.camera=h,t.length=0,n.length=0}function r(h){t.push(h)}function o(h){n.push(h)}function a(){e.setup(t)}function c(h){e.setupView(t,h)}const l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function $x(i){let e=new WeakMap;function t(s,r=0){const o=e.get(s);let a;return o===void 0?(a=new $h(i),e.set(s,[a])):r>=o.length?(a=new $h(i),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}const ev=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,tv=`uniform sampler2D shadow_pass;
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
}`;function nv(i,e,t){let n=new gc;const s=new ne,r=new ne,o=new st,a=new vm({depthPacking:Fd}),c=new _m,l={},h=t.maxTextureSize,u={[Zn]:Gt,[Gt]:Zn,[Ht]:Ht},f=new gt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ne},radius:{value:4}},vertexShader:ev,fragmentShader:tv}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const m=new nt;m.setAttribute("position",new xt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new at(m,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Du;let p=this.type;this.render=function(A,C,P){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||A.length===0)return;const S=i.getRenderTarget(),b=i.getActiveCubeFace(),L=i.getActiveMipmapLevel(),U=i.state;U.setBlending(qn),U.buffers.depth.getReversed()===!0?U.buffers.color.setClear(0,0,0,0):U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);const N=p!==kn&&this.type===kn,V=p===kn&&this.type!==kn;for(let z=0,W=A.length;z<W;z++){const $=A[z],G=$.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",$,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;s.copy(G.mapSize);const ce=G.getFrameExtents();if(s.multiply(ce),r.copy(G.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/ce.x),s.x=r.x*ce.x,G.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/ce.y),s.y=r.y*ce.y,G.mapSize.y=r.y)),G.map===null||N===!0||V===!0){const le=this.type!==kn?{minFilter:Vt,magFilter:Vt}:{};G.map!==null&&G.map.dispose(),G.map=new Kt(s.x,s.y,le),G.map.texture.name=$.name+".shadowMap",G.camera.updateProjectionMatrix()}i.setRenderTarget(G.map),i.clear();const xe=G.getViewportCount();for(let le=0;le<xe;le++){const Oe=G.getViewport(le);o.set(r.x*Oe.x,r.y*Oe.y,r.x*Oe.z,r.y*Oe.w),U.viewport(o),G.updateMatrices($,le),n=G.getFrustum(),v(C,P,G.camera,$,this.type)}G.isPointLightShadow!==!0&&this.type===kn&&M(G,P),G.needsUpdate=!1}p=this.type,g.needsUpdate=!1,i.setRenderTarget(S,b,L)};function M(A,C){const P=e.update(x);f.defines.VSM_SAMPLES!==A.blurSamples&&(f.defines.VSM_SAMPLES=A.blurSamples,d.defines.VSM_SAMPLES=A.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Kt(s.x,s.y)),f.uniforms.shadow_pass.value=A.map.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,i.setRenderTarget(A.mapPass),i.clear(),i.renderBufferDirect(C,null,P,f,x,null),d.uniforms.shadow_pass.value=A.mapPass.texture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,i.setRenderTarget(A.map),i.clear(),i.renderBufferDirect(C,null,P,d,x,null)}function _(A,C,P,S){let b=null;const L=P.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(L!==void 0)b=L;else if(b=P.isPointLight===!0?c:a,i.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){const U=b.uuid,N=C.uuid;let V=l[U];V===void 0&&(V={},l[U]=V);let z=V[N];z===void 0&&(z=b.clone(),V[N]=z,C.addEventListener("dispose",w)),b=z}if(b.visible=C.visible,b.wireframe=C.wireframe,S===kn?b.side=C.shadowSide!==null?C.shadowSide:C.side:b.side=C.shadowSide!==null?C.shadowSide:u[C.side],b.alphaMap=C.alphaMap,b.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,b.map=C.map,b.clipShadows=C.clipShadows,b.clippingPlanes=C.clippingPlanes,b.clipIntersection=C.clipIntersection,b.displacementMap=C.displacementMap,b.displacementScale=C.displacementScale,b.displacementBias=C.displacementBias,b.wireframeLinewidth=C.wireframeLinewidth,b.linewidth=C.linewidth,P.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const U=i.properties.get(b);U.light=P}return b}function v(A,C,P,S,b){if(A.visible===!1)return;if(A.layers.test(C.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&b===kn)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,A.matrixWorld);const N=e.update(A),V=A.material;if(Array.isArray(V)){const z=N.groups;for(let W=0,$=z.length;W<$;W++){const G=z[W],ce=V[G.materialIndex];if(ce&&ce.visible){const xe=_(A,ce,S,b);A.onBeforeShadow(i,A,C,P,N,xe,G),i.renderBufferDirect(P,null,N,xe,A,G),A.onAfterShadow(i,A,C,P,N,xe,G)}}}else if(V.visible){const z=_(A,V,S,b);A.onBeforeShadow(i,A,C,P,N,z,null),i.renderBufferDirect(P,null,N,z,A,null),A.onAfterShadow(i,A,C,P,N,z,null)}}const U=A.children;for(let N=0,V=U.length;N<V;N++)v(U[N],C,P,S,b)}function w(A){A.target.removeEventListener("dispose",w);for(const P in l){const S=l[P],b=A.target.uuid;b in S&&(S[b].dispose(),delete S[b])}}}const iv={[$a]:el,[tl]:sl,[nl]:rl,[vs]:il,[el]:$a,[sl]:tl,[rl]:nl,[il]:vs};function sv(i,e){function t(){let O=!1;const me=new st;let Me=null;const Le=new st(0,0,0,0);return{setMask:function(de){Me!==de&&!O&&(i.colorMask(de,de,de,de),Me=de)},setLocked:function(de){O=de},setClear:function(de,re,Ne,Ye,pt){pt===!0&&(de*=Ye,re*=Ye,Ne*=Ye),me.set(de,re,Ne,Ye),Le.equals(me)===!1&&(i.clearColor(de,re,Ne,Ye),Le.copy(me))},reset:function(){O=!1,Me=null,Le.set(-1,0,0,0)}}}function n(){let O=!1,me=!1,Me=null,Le=null,de=null;return{setReversed:function(re){if(me!==re){const Ne=e.get("EXT_clip_control");re?Ne.clipControlEXT(Ne.LOWER_LEFT_EXT,Ne.ZERO_TO_ONE_EXT):Ne.clipControlEXT(Ne.LOWER_LEFT_EXT,Ne.NEGATIVE_ONE_TO_ONE_EXT),me=re;const Ye=de;de=null,this.setClear(Ye)}},getReversed:function(){return me},setTest:function(re){re?se(i.DEPTH_TEST):ve(i.DEPTH_TEST)},setMask:function(re){Me!==re&&!O&&(i.depthMask(re),Me=re)},setFunc:function(re){if(me&&(re=iv[re]),Le!==re){switch(re){case $a:i.depthFunc(i.NEVER);break;case el:i.depthFunc(i.ALWAYS);break;case tl:i.depthFunc(i.LESS);break;case vs:i.depthFunc(i.LEQUAL);break;case nl:i.depthFunc(i.EQUAL);break;case il:i.depthFunc(i.GEQUAL);break;case sl:i.depthFunc(i.GREATER);break;case rl:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Le=re}},setLocked:function(re){O=re},setClear:function(re){de!==re&&(me&&(re=1-re),i.clearDepth(re),de=re)},reset:function(){O=!1,Me=null,Le=null,de=null,me=!1}}}function s(){let O=!1,me=null,Me=null,Le=null,de=null,re=null,Ne=null,Ye=null,pt=null;return{setTest:function(ot){O||(ot?se(i.STENCIL_TEST):ve(i.STENCIL_TEST))},setMask:function(ot){me!==ot&&!O&&(i.stencilMask(ot),me=ot)},setFunc:function(ot,Nn,En){(Me!==ot||Le!==Nn||de!==En)&&(i.stencilFunc(ot,Nn,En),Me=ot,Le=Nn,de=En)},setOp:function(ot,Nn,En){(re!==ot||Ne!==Nn||Ye!==En)&&(i.stencilOp(ot,Nn,En),re=ot,Ne=Nn,Ye=En)},setLocked:function(ot){O=ot},setClear:function(ot){pt!==ot&&(i.clearStencil(ot),pt=ot)},reset:function(){O=!1,me=null,Me=null,Le=null,de=null,re=null,Ne=null,Ye=null,pt=null}}}const r=new t,o=new n,a=new s,c=new WeakMap,l=new WeakMap;let h={},u={},f=new WeakMap,d=[],m=null,x=!1,g=null,p=null,M=null,_=null,v=null,w=null,A=null,C=new Ue(0,0,0),P=0,S=!1,b=null,L=null,U=null,N=null,V=null;const z=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,$=0;const G=i.getParameter(i.VERSION);G.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(G)[1]),W=$>=1):G.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),W=$>=2);let ce=null,xe={};const le=i.getParameter(i.SCISSOR_BOX),Oe=i.getParameter(i.VIEWPORT),Fe=new st().fromArray(le),$e=new st().fromArray(Oe);function qe(O,me,Me,Le){const de=new Uint8Array(4),re=i.createTexture();i.bindTexture(O,re),i.texParameteri(O,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(O,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ne=0;Ne<Me;Ne++)O===i.TEXTURE_3D||O===i.TEXTURE_2D_ARRAY?i.texImage3D(me,0,i.RGBA,1,1,Le,0,i.RGBA,i.UNSIGNED_BYTE,de):i.texImage2D(me+Ne,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,de);return re}const J={};J[i.TEXTURE_2D]=qe(i.TEXTURE_2D,i.TEXTURE_2D,1),J[i.TEXTURE_CUBE_MAP]=qe(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),J[i.TEXTURE_2D_ARRAY]=qe(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),J[i.TEXTURE_3D]=qe(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),se(i.DEPTH_TEST),o.setFunc(vs),F(!1),B(Vc),se(i.CULL_FACE),oe(qn);function se(O){h[O]!==!0&&(i.enable(O),h[O]=!0)}function ve(O){h[O]!==!1&&(i.disable(O),h[O]=!1)}function Pe(O,me){return u[O]!==me?(i.bindFramebuffer(O,me),u[O]=me,O===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=me),O===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=me),!0):!1}function Ae(O,me){let Me=d,Le=!1;if(O){Me=f.get(me),Me===void 0&&(Me=[],f.set(me,Me));const de=O.textures;if(Me.length!==de.length||Me[0]!==i.COLOR_ATTACHMENT0){for(let re=0,Ne=de.length;re<Ne;re++)Me[re]=i.COLOR_ATTACHMENT0+re;Me.length=de.length,Le=!0}}else Me[0]!==i.BACK&&(Me[0]=i.BACK,Le=!0);Le&&i.drawBuffers(Me)}function De(O){return m!==O?(i.useProgram(O),m=O,!0):!1}const et={[Ci]:i.FUNC_ADD,[md]:i.FUNC_SUBTRACT,[gd]:i.FUNC_REVERSE_SUBTRACT};et[xd]=i.MIN,et[vd]=i.MAX;const D={[_d]:i.ZERO,[Md]:i.ONE,[yd]:i.SRC_COLOR,[Ja]:i.SRC_ALPHA,[Ad]:i.SRC_ALPHA_SATURATE,[Ed]:i.DST_COLOR,[bd]:i.DST_ALPHA,[Sd]:i.ONE_MINUS_SRC_COLOR,[Qa]:i.ONE_MINUS_SRC_ALPHA,[Td]:i.ONE_MINUS_DST_COLOR,[wd]:i.ONE_MINUS_DST_ALPHA,[Cd]:i.CONSTANT_COLOR,[Rd]:i.ONE_MINUS_CONSTANT_COLOR,[Pd]:i.CONSTANT_ALPHA,[Ld]:i.ONE_MINUS_CONSTANT_ALPHA};function oe(O,me,Me,Le,de,re,Ne,Ye,pt,ot){if(O===qn){x===!0&&(ve(i.BLEND),x=!1);return}if(x===!1&&(se(i.BLEND),x=!0),O!==pd){if(O!==g||ot!==S){if((p!==Ci||v!==Ci)&&(i.blendEquation(i.FUNC_ADD),p=Ci,v=Ci),ot)switch(O){case Ii:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ni:i.blendFunc(i.ONE,i.ONE);break;case Wc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Xc:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}else switch(O){case Ii:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ni:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Wc:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Xc:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}M=null,_=null,w=null,A=null,C.set(0,0,0),P=0,g=O,S=ot}return}de=de||me,re=re||Me,Ne=Ne||Le,(me!==p||de!==v)&&(i.blendEquationSeparate(et[me],et[de]),p=me,v=de),(Me!==M||Le!==_||re!==w||Ne!==A)&&(i.blendFuncSeparate(D[Me],D[Le],D[re],D[Ne]),M=Me,_=Le,w=re,A=Ne),(Ye.equals(C)===!1||pt!==P)&&(i.blendColor(Ye.r,Ye.g,Ye.b,pt),C.copy(Ye),P=pt),g=O,S=!1}function ie(O,me){O.side===Ht?ve(i.CULL_FACE):se(i.CULL_FACE);let Me=O.side===Gt;me&&(Me=!Me),F(Me),O.blending===Ii&&O.transparent===!1?oe(qn):oe(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),o.setFunc(O.depthFunc),o.setTest(O.depthTest),o.setMask(O.depthWrite),r.setMask(O.colorWrite);const Le=O.stencilWrite;a.setTest(Le),Le&&(a.setMask(O.stencilWriteMask),a.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),a.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),Y(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?se(i.SAMPLE_ALPHA_TO_COVERAGE):ve(i.SAMPLE_ALPHA_TO_COVERAGE)}function F(O){b!==O&&(O?i.frontFace(i.CW):i.frontFace(i.CCW),b=O)}function B(O){O!==ud?(se(i.CULL_FACE),O!==L&&(O===Vc?i.cullFace(i.BACK):O===fd?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ve(i.CULL_FACE),L=O}function ee(O){O!==U&&(W&&i.lineWidth(O),U=O)}function Y(O,me,Me){O?(se(i.POLYGON_OFFSET_FILL),(N!==me||V!==Me)&&(i.polygonOffset(me,Me),N=me,V=Me)):ve(i.POLYGON_OFFSET_FILL)}function te(O){O?se(i.SCISSOR_TEST):ve(i.SCISSOR_TEST)}function Ee(O){O===void 0&&(O=i.TEXTURE0+z-1),ce!==O&&(i.activeTexture(O),ce=O)}function he(O,me,Me){Me===void 0&&(ce===null?Me=i.TEXTURE0+z-1:Me=ce);let Le=xe[Me];Le===void 0&&(Le={type:void 0,texture:void 0},xe[Me]=Le),(Le.type!==O||Le.texture!==me)&&(ce!==Me&&(i.activeTexture(Me),ce=Me),i.bindTexture(O,me||J[O]),Le.type=O,Le.texture=me)}function E(){const O=xe[ce];O!==void 0&&O.type!==void 0&&(i.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function y(){try{i.compressedTexImage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function I(){try{i.compressedTexImage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function X(){try{i.texSubImage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function q(){try{i.texSubImage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function j(){try{i.compressedTexSubImage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ge(){try{i.compressedTexSubImage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ae(){try{i.texStorage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Te(){try{i.texStorage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Ce(){try{i.texImage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ue(){try{i.texImage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Se(O){Fe.equals(O)===!1&&(i.scissor(O.x,O.y,O.z,O.w),Fe.copy(O))}function Ve(O){$e.equals(O)===!1&&(i.viewport(O.x,O.y,O.z,O.w),$e.copy(O))}function ze(O,me){let Me=l.get(me);Me===void 0&&(Me=new WeakMap,l.set(me,Me));let Le=Me.get(O);Le===void 0&&(Le=i.getUniformBlockIndex(me,O.name),Me.set(O,Le))}function be(O,me){const Le=l.get(me).get(O);c.get(me)!==Le&&(i.uniformBlockBinding(me,Le,O.__bindingPointIndex),c.set(me,Le))}function je(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},ce=null,xe={},u={},f=new WeakMap,d=[],m=null,x=!1,g=null,p=null,M=null,_=null,v=null,w=null,A=null,C=new Ue(0,0,0),P=0,S=!1,b=null,L=null,U=null,N=null,V=null,Fe.set(0,0,i.canvas.width,i.canvas.height),$e.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:se,disable:ve,bindFramebuffer:Pe,drawBuffers:Ae,useProgram:De,setBlending:oe,setMaterial:ie,setFlipSided:F,setCullFace:B,setLineWidth:ee,setPolygonOffset:Y,setScissorTest:te,activeTexture:Ee,bindTexture:he,unbindTexture:E,compressedTexImage2D:y,compressedTexImage3D:I,texImage2D:Ce,texImage3D:ue,updateUBOMapping:ze,uniformBlockBinding:be,texStorage2D:ae,texStorage3D:Te,texSubImage2D:X,texSubImage3D:q,compressedTexSubImage2D:j,compressedTexSubImage3D:ge,scissor:Se,viewport:Ve,reset:je}}function rv(i,e,t,n,s,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new ne,h=new WeakMap;let u;const f=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(E,y){return d?new OffscreenCanvas(E,y):rr("canvas")}function x(E,y,I){let X=1;const q=he(E);if((q.width>I||q.height>I)&&(X=I/Math.max(q.width,q.height)),X<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){const j=Math.floor(X*q.width),ge=Math.floor(X*q.height);u===void 0&&(u=m(j,ge));const ae=y?m(j,ge):u;return ae.width=j,ae.height=ge,ae.getContext("2d").drawImage(E,0,0,j,ge),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+q.width+"x"+q.height+") to ("+j+"x"+ge+")."),ae}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+q.width+"x"+q.height+")."),E;return E}function g(E){return E.generateMipmaps}function p(E){i.generateMipmap(E)}function M(E){return E.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:E.isWebGL3DRenderTarget?i.TEXTURE_3D:E.isWebGLArrayRenderTarget||E.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function _(E,y,I,X,q=!1){if(E!==null){if(i[E]!==void 0)return i[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let j=y;if(y===i.RED&&(I===i.FLOAT&&(j=i.R32F),I===i.HALF_FLOAT&&(j=i.R16F),I===i.UNSIGNED_BYTE&&(j=i.R8)),y===i.RED_INTEGER&&(I===i.UNSIGNED_BYTE&&(j=i.R8UI),I===i.UNSIGNED_SHORT&&(j=i.R16UI),I===i.UNSIGNED_INT&&(j=i.R32UI),I===i.BYTE&&(j=i.R8I),I===i.SHORT&&(j=i.R16I),I===i.INT&&(j=i.R32I)),y===i.RG&&(I===i.FLOAT&&(j=i.RG32F),I===i.HALF_FLOAT&&(j=i.RG16F),I===i.UNSIGNED_BYTE&&(j=i.RG8)),y===i.RG_INTEGER&&(I===i.UNSIGNED_BYTE&&(j=i.RG8UI),I===i.UNSIGNED_SHORT&&(j=i.RG16UI),I===i.UNSIGNED_INT&&(j=i.RG32UI),I===i.BYTE&&(j=i.RG8I),I===i.SHORT&&(j=i.RG16I),I===i.INT&&(j=i.RG32I)),y===i.RGB_INTEGER&&(I===i.UNSIGNED_BYTE&&(j=i.RGB8UI),I===i.UNSIGNED_SHORT&&(j=i.RGB16UI),I===i.UNSIGNED_INT&&(j=i.RGB32UI),I===i.BYTE&&(j=i.RGB8I),I===i.SHORT&&(j=i.RGB16I),I===i.INT&&(j=i.RGB32I)),y===i.RGBA_INTEGER&&(I===i.UNSIGNED_BYTE&&(j=i.RGBA8UI),I===i.UNSIGNED_SHORT&&(j=i.RGBA16UI),I===i.UNSIGNED_INT&&(j=i.RGBA32UI),I===i.BYTE&&(j=i.RGBA8I),I===i.SHORT&&(j=i.RGBA16I),I===i.INT&&(j=i.RGBA32I)),y===i.RGB&&(I===i.UNSIGNED_INT_5_9_9_9_REV&&(j=i.RGB9_E5),I===i.UNSIGNED_INT_10F_11F_11F_REV&&(j=i.R11F_G11F_B10F)),y===i.RGBA){const ge=q?vo:it.getTransfer(X);I===i.FLOAT&&(j=i.RGBA32F),I===i.HALF_FLOAT&&(j=i.RGBA16F),I===i.UNSIGNED_BYTE&&(j=ge===lt?i.SRGB8_ALPHA8:i.RGBA8),I===i.UNSIGNED_SHORT_4_4_4_4&&(j=i.RGBA4),I===i.UNSIGNED_SHORT_5_5_5_1&&(j=i.RGB5_A1)}return(j===i.R16F||j===i.R32F||j===i.RG16F||j===i.RG32F||j===i.RGBA16F||j===i.RGBA32F)&&e.get("EXT_color_buffer_float"),j}function v(E,y){let I;return E?y===null||y===Fi||y===nr?I=i.DEPTH24_STENCIL8:y===Cn?I=i.DEPTH32F_STENCIL8:y===tr&&(I=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===Fi||y===nr?I=i.DEPTH_COMPONENT24:y===Cn?I=i.DEPTH_COMPONENT32F:y===tr&&(I=i.DEPTH_COMPONENT16),I}function w(E,y){return g(E)===!0||E.isFramebufferTexture&&E.minFilter!==Vt&&E.minFilter!==on?Math.log2(Math.max(y.width,y.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?y.mipmaps.length:1}function A(E){const y=E.target;y.removeEventListener("dispose",A),P(y),y.isVideoTexture&&h.delete(y)}function C(E){const y=E.target;y.removeEventListener("dispose",C),b(y)}function P(E){const y=n.get(E);if(y.__webglInit===void 0)return;const I=E.source,X=f.get(I);if(X){const q=X[y.__cacheKey];q.usedTimes--,q.usedTimes===0&&S(E),Object.keys(X).length===0&&f.delete(I)}n.remove(E)}function S(E){const y=n.get(E);i.deleteTexture(y.__webglTexture);const I=E.source,X=f.get(I);delete X[y.__cacheKey],o.memory.textures--}function b(E){const y=n.get(E);if(E.depthTexture&&(E.depthTexture.dispose(),n.remove(E.depthTexture)),E.isWebGLCubeRenderTarget)for(let X=0;X<6;X++){if(Array.isArray(y.__webglFramebuffer[X]))for(let q=0;q<y.__webglFramebuffer[X].length;q++)i.deleteFramebuffer(y.__webglFramebuffer[X][q]);else i.deleteFramebuffer(y.__webglFramebuffer[X]);y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer[X])}else{if(Array.isArray(y.__webglFramebuffer))for(let X=0;X<y.__webglFramebuffer.length;X++)i.deleteFramebuffer(y.__webglFramebuffer[X]);else i.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&i.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let X=0;X<y.__webglColorRenderbuffer.length;X++)y.__webglColorRenderbuffer[X]&&i.deleteRenderbuffer(y.__webglColorRenderbuffer[X]);y.__webglDepthRenderbuffer&&i.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const I=E.textures;for(let X=0,q=I.length;X<q;X++){const j=n.get(I[X]);j.__webglTexture&&(i.deleteTexture(j.__webglTexture),o.memory.textures--),n.remove(I[X])}n.remove(E)}let L=0;function U(){L=0}function N(){const E=L;return E>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+s.maxTextures),L+=1,E}function V(E){const y=[];return y.push(E.wrapS),y.push(E.wrapT),y.push(E.wrapR||0),y.push(E.magFilter),y.push(E.minFilter),y.push(E.anisotropy),y.push(E.internalFormat),y.push(E.format),y.push(E.type),y.push(E.generateMipmaps),y.push(E.premultiplyAlpha),y.push(E.flipY),y.push(E.unpackAlignment),y.push(E.colorSpace),y.join()}function z(E,y){const I=n.get(E);if(E.isVideoTexture&&te(E),E.isRenderTargetTexture===!1&&E.isExternalTexture!==!0&&E.version>0&&I.__version!==E.version){const X=E.image;if(X===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(X.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{J(I,E,y);return}}else E.isExternalTexture&&(I.__webglTexture=E.sourceTexture?E.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,I.__webglTexture,i.TEXTURE0+y)}function W(E,y){const I=n.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&I.__version!==E.version){J(I,E,y);return}t.bindTexture(i.TEXTURE_2D_ARRAY,I.__webglTexture,i.TEXTURE0+y)}function $(E,y){const I=n.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&I.__version!==E.version){J(I,E,y);return}t.bindTexture(i.TEXTURE_3D,I.__webglTexture,i.TEXTURE0+y)}function G(E,y){const I=n.get(E);if(E.version>0&&I.__version!==E.version){se(I,E,y);return}t.bindTexture(i.TEXTURE_CUBE_MAP,I.__webglTexture,i.TEXTURE0+y)}const ce={[pi]:i.REPEAT,[Pi]:i.CLAMP_TO_EDGE,[ll]:i.MIRRORED_REPEAT},xe={[Vt]:i.NEAREST,[Ud]:i.NEAREST_MIPMAP_NEAREST,[xr]:i.NEAREST_MIPMAP_LINEAR,[on]:i.LINEAR,[Zo]:i.LINEAR_MIPMAP_NEAREST,[Sn]:i.LINEAR_MIPMAP_LINEAR},le={[zd]:i.NEVER,[Wd]:i.ALWAYS,[Bd]:i.LESS,[Ku]:i.LEQUAL,[Hd]:i.EQUAL,[Vd]:i.GEQUAL,[kd]:i.GREATER,[Gd]:i.NOTEQUAL};function Oe(E,y){if(y.type===Cn&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===on||y.magFilter===Zo||y.magFilter===xr||y.magFilter===Sn||y.minFilter===on||y.minFilter===Zo||y.minFilter===xr||y.minFilter===Sn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(E,i.TEXTURE_WRAP_S,ce[y.wrapS]),i.texParameteri(E,i.TEXTURE_WRAP_T,ce[y.wrapT]),(E===i.TEXTURE_3D||E===i.TEXTURE_2D_ARRAY)&&i.texParameteri(E,i.TEXTURE_WRAP_R,ce[y.wrapR]),i.texParameteri(E,i.TEXTURE_MAG_FILTER,xe[y.magFilter]),i.texParameteri(E,i.TEXTURE_MIN_FILTER,xe[y.minFilter]),y.compareFunction&&(i.texParameteri(E,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(E,i.TEXTURE_COMPARE_FUNC,le[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===Vt||y.minFilter!==xr&&y.minFilter!==Sn||y.type===Cn&&e.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||n.get(y).__currentAnisotropy){const I=e.get("EXT_texture_filter_anisotropic");i.texParameterf(E,I.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,s.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy}}}function Fe(E,y){let I=!1;E.__webglInit===void 0&&(E.__webglInit=!0,y.addEventListener("dispose",A));const X=y.source;let q=f.get(X);q===void 0&&(q={},f.set(X,q));const j=V(y);if(j!==E.__cacheKey){q[j]===void 0&&(q[j]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,I=!0),q[j].usedTimes++;const ge=q[E.__cacheKey];ge!==void 0&&(q[E.__cacheKey].usedTimes--,ge.usedTimes===0&&S(y)),E.__cacheKey=j,E.__webglTexture=q[j].texture}return I}function $e(E,y,I){return Math.floor(Math.floor(E/I)/y)}function qe(E,y,I,X){const j=E.updateRanges;if(j.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,y.width,y.height,I,X,y.data);else{j.sort((ue,Se)=>ue.start-Se.start);let ge=0;for(let ue=1;ue<j.length;ue++){const Se=j[ge],Ve=j[ue],ze=Se.start+Se.count,be=$e(Ve.start,y.width,4),je=$e(Se.start,y.width,4);Ve.start<=ze+1&&be===je&&$e(Ve.start+Ve.count-1,y.width,4)===be?Se.count=Math.max(Se.count,Ve.start+Ve.count-Se.start):(++ge,j[ge]=Ve)}j.length=ge+1;const ae=i.getParameter(i.UNPACK_ROW_LENGTH),Te=i.getParameter(i.UNPACK_SKIP_PIXELS),Ce=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,y.width);for(let ue=0,Se=j.length;ue<Se;ue++){const Ve=j[ue],ze=Math.floor(Ve.start/4),be=Math.ceil(Ve.count/4),je=ze%y.width,O=Math.floor(ze/y.width),me=be,Me=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,je),i.pixelStorei(i.UNPACK_SKIP_ROWS,O),t.texSubImage2D(i.TEXTURE_2D,0,je,O,me,Me,I,X,y.data)}E.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,ae),i.pixelStorei(i.UNPACK_SKIP_PIXELS,Te),i.pixelStorei(i.UNPACK_SKIP_ROWS,Ce)}}function J(E,y,I){let X=i.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(X=i.TEXTURE_2D_ARRAY),y.isData3DTexture&&(X=i.TEXTURE_3D);const q=Fe(E,y),j=y.source;t.bindTexture(X,E.__webglTexture,i.TEXTURE0+I);const ge=n.get(j);if(j.version!==ge.__version||q===!0){t.activeTexture(i.TEXTURE0+I);const ae=it.getPrimaries(it.workingColorSpace),Te=y.colorSpace===ci?null:it.getPrimaries(y.colorSpace),Ce=y.colorSpace===ci||ae===Te?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ce);let ue=x(y.image,!1,s.maxTextureSize);ue=Ee(y,ue);const Se=r.convert(y.format,y.colorSpace),Ve=r.convert(y.type);let ze=_(y.internalFormat,Se,Ve,y.colorSpace,y.isVideoTexture);Oe(X,y);let be;const je=y.mipmaps,O=y.isVideoTexture!==!0,me=ge.__version===void 0||q===!0,Me=j.dataReady,Le=w(y,ue);if(y.isDepthTexture)ze=v(y.format===sr,y.type),me&&(O?t.texStorage2D(i.TEXTURE_2D,1,ze,ue.width,ue.height):t.texImage2D(i.TEXTURE_2D,0,ze,ue.width,ue.height,0,Se,Ve,null));else if(y.isDataTexture)if(je.length>0){O&&me&&t.texStorage2D(i.TEXTURE_2D,Le,ze,je[0].width,je[0].height);for(let de=0,re=je.length;de<re;de++)be=je[de],O?Me&&t.texSubImage2D(i.TEXTURE_2D,de,0,0,be.width,be.height,Se,Ve,be.data):t.texImage2D(i.TEXTURE_2D,de,ze,be.width,be.height,0,Se,Ve,be.data);y.generateMipmaps=!1}else O?(me&&t.texStorage2D(i.TEXTURE_2D,Le,ze,ue.width,ue.height),Me&&qe(y,ue,Se,Ve)):t.texImage2D(i.TEXTURE_2D,0,ze,ue.width,ue.height,0,Se,Ve,ue.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){O&&me&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Le,ze,je[0].width,je[0].height,ue.depth);for(let de=0,re=je.length;de<re;de++)if(be=je[de],y.format!==an)if(Se!==null)if(O){if(Me)if(y.layerUpdates.size>0){const Ne=Rh(be.width,be.height,y.format,y.type);for(const Ye of y.layerUpdates){const pt=be.data.subarray(Ye*Ne/be.data.BYTES_PER_ELEMENT,(Ye+1)*Ne/be.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,de,0,0,Ye,be.width,be.height,1,Se,pt)}y.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,de,0,0,0,be.width,be.height,ue.depth,Se,be.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,de,ze,be.width,be.height,ue.depth,0,be.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else O?Me&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,de,0,0,0,be.width,be.height,ue.depth,Se,Ve,be.data):t.texImage3D(i.TEXTURE_2D_ARRAY,de,ze,be.width,be.height,ue.depth,0,Se,Ve,be.data)}else{O&&me&&t.texStorage2D(i.TEXTURE_2D,Le,ze,je[0].width,je[0].height);for(let de=0,re=je.length;de<re;de++)be=je[de],y.format!==an?Se!==null?O?Me&&t.compressedTexSubImage2D(i.TEXTURE_2D,de,0,0,be.width,be.height,Se,be.data):t.compressedTexImage2D(i.TEXTURE_2D,de,ze,be.width,be.height,0,be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):O?Me&&t.texSubImage2D(i.TEXTURE_2D,de,0,0,be.width,be.height,Se,Ve,be.data):t.texImage2D(i.TEXTURE_2D,de,ze,be.width,be.height,0,Se,Ve,be.data)}else if(y.isDataArrayTexture)if(O){if(me&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Le,ze,ue.width,ue.height,ue.depth),Me)if(y.layerUpdates.size>0){const de=Rh(ue.width,ue.height,y.format,y.type);for(const re of y.layerUpdates){const Ne=ue.data.subarray(re*de/ue.data.BYTES_PER_ELEMENT,(re+1)*de/ue.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,re,ue.width,ue.height,1,Se,Ve,Ne)}y.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ue.width,ue.height,ue.depth,Se,Ve,ue.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,ze,ue.width,ue.height,ue.depth,0,Se,Ve,ue.data);else if(y.isData3DTexture)O?(me&&t.texStorage3D(i.TEXTURE_3D,Le,ze,ue.width,ue.height,ue.depth),Me&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ue.width,ue.height,ue.depth,Se,Ve,ue.data)):t.texImage3D(i.TEXTURE_3D,0,ze,ue.width,ue.height,ue.depth,0,Se,Ve,ue.data);else if(y.isFramebufferTexture){if(me)if(O)t.texStorage2D(i.TEXTURE_2D,Le,ze,ue.width,ue.height);else{let de=ue.width,re=ue.height;for(let Ne=0;Ne<Le;Ne++)t.texImage2D(i.TEXTURE_2D,Ne,ze,de,re,0,Se,Ve,null),de>>=1,re>>=1}}else if(je.length>0){if(O&&me){const de=he(je[0]);t.texStorage2D(i.TEXTURE_2D,Le,ze,de.width,de.height)}for(let de=0,re=je.length;de<re;de++)be=je[de],O?Me&&t.texSubImage2D(i.TEXTURE_2D,de,0,0,Se,Ve,be):t.texImage2D(i.TEXTURE_2D,de,ze,Se,Ve,be);y.generateMipmaps=!1}else if(O){if(me){const de=he(ue);t.texStorage2D(i.TEXTURE_2D,Le,ze,de.width,de.height)}Me&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Se,Ve,ue)}else t.texImage2D(i.TEXTURE_2D,0,ze,Se,Ve,ue);g(y)&&p(X),ge.__version=j.version,y.onUpdate&&y.onUpdate(y)}E.__version=y.version}function se(E,y,I){if(y.image.length!==6)return;const X=Fe(E,y),q=y.source;t.bindTexture(i.TEXTURE_CUBE_MAP,E.__webglTexture,i.TEXTURE0+I);const j=n.get(q);if(q.version!==j.__version||X===!0){t.activeTexture(i.TEXTURE0+I);const ge=it.getPrimaries(it.workingColorSpace),ae=y.colorSpace===ci?null:it.getPrimaries(y.colorSpace),Te=y.colorSpace===ci||ge===ae?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Te);const Ce=y.isCompressedTexture||y.image[0].isCompressedTexture,ue=y.image[0]&&y.image[0].isDataTexture,Se=[];for(let re=0;re<6;re++)!Ce&&!ue?Se[re]=x(y.image[re],!0,s.maxCubemapSize):Se[re]=ue?y.image[re].image:y.image[re],Se[re]=Ee(y,Se[re]);const Ve=Se[0],ze=r.convert(y.format,y.colorSpace),be=r.convert(y.type),je=_(y.internalFormat,ze,be,y.colorSpace),O=y.isVideoTexture!==!0,me=j.__version===void 0||X===!0,Me=q.dataReady;let Le=w(y,Ve);Oe(i.TEXTURE_CUBE_MAP,y);let de;if(Ce){O&&me&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Le,je,Ve.width,Ve.height);for(let re=0;re<6;re++){de=Se[re].mipmaps;for(let Ne=0;Ne<de.length;Ne++){const Ye=de[Ne];y.format!==an?ze!==null?O?Me&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,Ne,0,0,Ye.width,Ye.height,ze,Ye.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,Ne,je,Ye.width,Ye.height,0,Ye.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):O?Me&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,Ne,0,0,Ye.width,Ye.height,ze,be,Ye.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,Ne,je,Ye.width,Ye.height,0,ze,be,Ye.data)}}}else{if(de=y.mipmaps,O&&me){de.length>0&&Le++;const re=he(Se[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Le,je,re.width,re.height)}for(let re=0;re<6;re++)if(ue){O?Me&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,Se[re].width,Se[re].height,ze,be,Se[re].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,je,Se[re].width,Se[re].height,0,ze,be,Se[re].data);for(let Ne=0;Ne<de.length;Ne++){const pt=de[Ne].image[re].image;O?Me&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,Ne+1,0,0,pt.width,pt.height,ze,be,pt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,Ne+1,je,pt.width,pt.height,0,ze,be,pt.data)}}else{O?Me&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,ze,be,Se[re]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,je,ze,be,Se[re]);for(let Ne=0;Ne<de.length;Ne++){const Ye=de[Ne];O?Me&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,Ne+1,0,0,ze,be,Ye.image[re]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,Ne+1,je,ze,be,Ye.image[re])}}}g(y)&&p(i.TEXTURE_CUBE_MAP),j.__version=q.version,y.onUpdate&&y.onUpdate(y)}E.__version=y.version}function ve(E,y,I,X,q,j){const ge=r.convert(I.format,I.colorSpace),ae=r.convert(I.type),Te=_(I.internalFormat,ge,ae,I.colorSpace),Ce=n.get(y),ue=n.get(I);if(ue.__renderTarget=y,!Ce.__hasExternalTextures){const Se=Math.max(1,y.width>>j),Ve=Math.max(1,y.height>>j);q===i.TEXTURE_3D||q===i.TEXTURE_2D_ARRAY?t.texImage3D(q,j,Te,Se,Ve,y.depth,0,ge,ae,null):t.texImage2D(q,j,Te,Se,Ve,0,ge,ae,null)}t.bindFramebuffer(i.FRAMEBUFFER,E),Y(y)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,X,q,ue.__webglTexture,0,ee(y)):(q===i.TEXTURE_2D||q>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&q<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,X,q,ue.__webglTexture,j),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Pe(E,y,I){if(i.bindRenderbuffer(i.RENDERBUFFER,E),y.depthBuffer){const X=y.depthTexture,q=X&&X.isDepthTexture?X.type:null,j=v(y.stencilBuffer,q),ge=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ae=ee(y);Y(y)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ae,j,y.width,y.height):I?i.renderbufferStorageMultisample(i.RENDERBUFFER,ae,j,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,j,y.width,y.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ge,i.RENDERBUFFER,E)}else{const X=y.textures;for(let q=0;q<X.length;q++){const j=X[q],ge=r.convert(j.format,j.colorSpace),ae=r.convert(j.type),Te=_(j.internalFormat,ge,ae,j.colorSpace),Ce=ee(y);I&&Y(y)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ce,Te,y.width,y.height):Y(y)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ce,Te,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,Te,y.width,y.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ae(E,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,E),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const X=n.get(y.depthTexture);X.__renderTarget=y,(!X.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),z(y.depthTexture,0);const q=X.__webglTexture,j=ee(y);if(y.depthTexture.format===ir)Y(y)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,q,0,j):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,q,0);else if(y.depthTexture.format===sr)Y(y)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,q,0,j):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,q,0);else throw new Error("Unknown depthTexture format")}function De(E){const y=n.get(E),I=E.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==E.depthTexture){const X=E.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),X){const q=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,X.removeEventListener("dispose",q)};X.addEventListener("dispose",q),y.__depthDisposeCallback=q}y.__boundDepthTexture=X}if(E.depthTexture&&!y.__autoAllocateDepthBuffer){if(I)throw new Error("target.depthTexture not supported in Cube render targets");const X=E.texture.mipmaps;X&&X.length>0?Ae(y.__webglFramebuffer[0],E):Ae(y.__webglFramebuffer,E)}else if(I){y.__webglDepthbuffer=[];for(let X=0;X<6;X++)if(t.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer[X]),y.__webglDepthbuffer[X]===void 0)y.__webglDepthbuffer[X]=i.createRenderbuffer(),Pe(y.__webglDepthbuffer[X],E,!1);else{const q=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,j=y.__webglDepthbuffer[X];i.bindRenderbuffer(i.RENDERBUFFER,j),i.framebufferRenderbuffer(i.FRAMEBUFFER,q,i.RENDERBUFFER,j)}}else{const X=E.texture.mipmaps;if(X&&X.length>0?t.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=i.createRenderbuffer(),Pe(y.__webglDepthbuffer,E,!1);else{const q=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,j=y.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,j),i.framebufferRenderbuffer(i.FRAMEBUFFER,q,i.RENDERBUFFER,j)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function et(E,y,I){const X=n.get(E);y!==void 0&&ve(X.__webglFramebuffer,E,E.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),I!==void 0&&De(E)}function D(E){const y=E.texture,I=n.get(E),X=n.get(y);E.addEventListener("dispose",C);const q=E.textures,j=E.isWebGLCubeRenderTarget===!0,ge=q.length>1;if(ge||(X.__webglTexture===void 0&&(X.__webglTexture=i.createTexture()),X.__version=y.version,o.memory.textures++),j){I.__webglFramebuffer=[];for(let ae=0;ae<6;ae++)if(y.mipmaps&&y.mipmaps.length>0){I.__webglFramebuffer[ae]=[];for(let Te=0;Te<y.mipmaps.length;Te++)I.__webglFramebuffer[ae][Te]=i.createFramebuffer()}else I.__webglFramebuffer[ae]=i.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){I.__webglFramebuffer=[];for(let ae=0;ae<y.mipmaps.length;ae++)I.__webglFramebuffer[ae]=i.createFramebuffer()}else I.__webglFramebuffer=i.createFramebuffer();if(ge)for(let ae=0,Te=q.length;ae<Te;ae++){const Ce=n.get(q[ae]);Ce.__webglTexture===void 0&&(Ce.__webglTexture=i.createTexture(),o.memory.textures++)}if(E.samples>0&&Y(E)===!1){I.__webglMultisampledFramebuffer=i.createFramebuffer(),I.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,I.__webglMultisampledFramebuffer);for(let ae=0;ae<q.length;ae++){const Te=q[ae];I.__webglColorRenderbuffer[ae]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,I.__webglColorRenderbuffer[ae]);const Ce=r.convert(Te.format,Te.colorSpace),ue=r.convert(Te.type),Se=_(Te.internalFormat,Ce,ue,Te.colorSpace,E.isXRRenderTarget===!0),Ve=ee(E);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ve,Se,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ae,i.RENDERBUFFER,I.__webglColorRenderbuffer[ae])}i.bindRenderbuffer(i.RENDERBUFFER,null),E.depthBuffer&&(I.__webglDepthRenderbuffer=i.createRenderbuffer(),Pe(I.__webglDepthRenderbuffer,E,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(j){t.bindTexture(i.TEXTURE_CUBE_MAP,X.__webglTexture),Oe(i.TEXTURE_CUBE_MAP,y);for(let ae=0;ae<6;ae++)if(y.mipmaps&&y.mipmaps.length>0)for(let Te=0;Te<y.mipmaps.length;Te++)ve(I.__webglFramebuffer[ae][Te],E,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Te);else ve(I.__webglFramebuffer[ae],E,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0);g(y)&&p(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ge){for(let ae=0,Te=q.length;ae<Te;ae++){const Ce=q[ae],ue=n.get(Ce);let Se=i.TEXTURE_2D;(E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(Se=E.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Se,ue.__webglTexture),Oe(Se,Ce),ve(I.__webglFramebuffer,E,Ce,i.COLOR_ATTACHMENT0+ae,Se,0),g(Ce)&&p(Se)}t.unbindTexture()}else{let ae=i.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(ae=E.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ae,X.__webglTexture),Oe(ae,y),y.mipmaps&&y.mipmaps.length>0)for(let Te=0;Te<y.mipmaps.length;Te++)ve(I.__webglFramebuffer[Te],E,y,i.COLOR_ATTACHMENT0,ae,Te);else ve(I.__webglFramebuffer,E,y,i.COLOR_ATTACHMENT0,ae,0);g(y)&&p(ae),t.unbindTexture()}E.depthBuffer&&De(E)}function oe(E){const y=E.textures;for(let I=0,X=y.length;I<X;I++){const q=y[I];if(g(q)){const j=M(E),ge=n.get(q).__webglTexture;t.bindTexture(j,ge),p(j),t.unbindTexture()}}}const ie=[],F=[];function B(E){if(E.samples>0){if(Y(E)===!1){const y=E.textures,I=E.width,X=E.height;let q=i.COLOR_BUFFER_BIT;const j=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ge=n.get(E),ae=y.length>1;if(ae)for(let Ce=0;Ce<y.length;Ce++)t.bindFramebuffer(i.FRAMEBUFFER,ge.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ce,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,ge.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ce,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,ge.__webglMultisampledFramebuffer);const Te=E.texture.mipmaps;Te&&Te.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ge.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ge.__webglFramebuffer);for(let Ce=0;Ce<y.length;Ce++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(q|=i.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(q|=i.STENCIL_BUFFER_BIT)),ae){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ge.__webglColorRenderbuffer[Ce]);const ue=n.get(y[Ce]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ue,0)}i.blitFramebuffer(0,0,I,X,0,0,I,X,q,i.NEAREST),c===!0&&(ie.length=0,F.length=0,ie.push(i.COLOR_ATTACHMENT0+Ce),E.depthBuffer&&E.resolveDepthBuffer===!1&&(ie.push(j),F.push(j),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,F)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ie))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ae)for(let Ce=0;Ce<y.length;Ce++){t.bindFramebuffer(i.FRAMEBUFFER,ge.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ce,i.RENDERBUFFER,ge.__webglColorRenderbuffer[Ce]);const ue=n.get(y[Ce]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,ge.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ce,i.TEXTURE_2D,ue,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ge.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.resolveDepthBuffer===!1&&c){const y=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[y])}}}function ee(E){return Math.min(s.maxSamples,E.samples)}function Y(E){const y=n.get(E);return E.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function te(E){const y=o.render.frame;h.get(E)!==y&&(h.set(E,y),E.update())}function Ee(E,y){const I=E.colorSpace,X=E.format,q=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||I!==ys&&I!==ci&&(it.getTransfer(I)===lt?(X!==an||q!==Ln)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",I)),y}function he(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(l.width=E.naturalWidth||E.width,l.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(l.width=E.displayWidth,l.height=E.displayHeight):(l.width=E.width,l.height=E.height),l}this.allocateTextureUnit=N,this.resetTextureUnits=U,this.setTexture2D=z,this.setTexture2DArray=W,this.setTexture3D=$,this.setTextureCube=G,this.rebindTextures=et,this.setupRenderTarget=D,this.updateRenderTargetMipmap=oe,this.updateMultisampleRenderTarget=B,this.setupDepthRenderbuffer=De,this.setupFrameBufferTexture=ve,this.useMultisampledRTT=Y}function ov(i,e){function t(n,s=ci){let r;const o=it.getTransfer(s);if(n===Ln)return i.UNSIGNED_BYTE;if(n===oc)return i.UNSIGNED_SHORT_4_4_4_4;if(n===ac)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Vu)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Wu)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===ku)return i.BYTE;if(n===Gu)return i.SHORT;if(n===tr)return i.UNSIGNED_SHORT;if(n===rc)return i.INT;if(n===Fi)return i.UNSIGNED_INT;if(n===Cn)return i.FLOAT;if(n===wn)return i.HALF_FLOAT;if(n===Xu)return i.ALPHA;if(n===qu)return i.RGB;if(n===an)return i.RGBA;if(n===ir)return i.DEPTH_COMPONENT;if(n===sr)return i.DEPTH_STENCIL;if(n===lc)return i.RED;if(n===cc)return i.RED_INTEGER;if(n===Yu)return i.RG;if(n===hc)return i.RG_INTEGER;if(n===uc)return i.RGBA_INTEGER;if(n===ro||n===oo||n===ao||n===lo)if(o===lt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===ro)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===oo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ao)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===lo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===ro)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===oo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ao)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===lo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===cl||n===hl||n===ul||n===fl)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===cl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===hl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ul)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===fl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===dl||n===pl||n===ml)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===dl||n===pl)return o===lt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===ml)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===gl||n===xl||n===vl||n===_l||n===Ml||n===yl||n===Sl||n===bl||n===wl||n===El||n===Tl||n===Al||n===Cl||n===Rl)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===gl)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===xl)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===vl)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===_l)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ml)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===yl)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Sl)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===bl)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===wl)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===El)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Tl)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Al)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Cl)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Rl)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Pl||n===Ll||n===Dl)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Pl)return o===lt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ll)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Dl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Il||n===Ul||n===Nl||n===Fl)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Il)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Ul)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Nl)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Fl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===nr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const av=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,lv=`
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

}`;class cv{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new lf(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new gt({vertexShader:av,fragmentShader:lv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new at(new Xt(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class hv extends Rs{constructor(e,t){super();const n=this;let s=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,u=null,f=null,d=null,m=null;const x=typeof XRWebGLBinding<"u",g=new cv,p={},M=t.getContextAttributes();let _=null,v=null;const w=[],A=[],C=new ne;let P=null;const S=new Bt;S.viewport=new st;const b=new Bt;b.viewport=new st;const L=[S,b],U=new Pm;let N=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let se=w[J];return se===void 0&&(se=new xa,w[J]=se),se.getTargetRaySpace()},this.getControllerGrip=function(J){let se=w[J];return se===void 0&&(se=new xa,w[J]=se),se.getGripSpace()},this.getHand=function(J){let se=w[J];return se===void 0&&(se=new xa,w[J]=se),se.getHandSpace()};function z(J){const se=A.indexOf(J.inputSource);if(se===-1)return;const ve=w[se];ve!==void 0&&(ve.update(J.inputSource,J.frame,l||o),ve.dispatchEvent({type:J.type,data:J.inputSource}))}function W(){s.removeEventListener("select",z),s.removeEventListener("selectstart",z),s.removeEventListener("selectend",z),s.removeEventListener("squeeze",z),s.removeEventListener("squeezestart",z),s.removeEventListener("squeezeend",z),s.removeEventListener("end",W),s.removeEventListener("inputsourceschange",$);for(let J=0;J<w.length;J++){const se=A[J];se!==null&&(A[J]=null,w[J].disconnect(se))}N=null,V=null,g.reset();for(const J in p)delete p[J];e.setRenderTarget(_),d=null,f=null,u=null,s=null,v=null,qe.stop(),n.isPresenting=!1,e.setPixelRatio(P),e.setSize(C.width,C.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){r=J,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){a=J,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(J){l=J},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u===null&&x&&(u=new XRWebGLBinding(s,t)),u},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(J){if(s=J,s!==null){if(_=e.getRenderTarget(),s.addEventListener("select",z),s.addEventListener("selectstart",z),s.addEventListener("selectend",z),s.addEventListener("squeeze",z),s.addEventListener("squeezestart",z),s.addEventListener("squeezeend",z),s.addEventListener("end",W),s.addEventListener("inputsourceschange",$),M.xrCompatible!==!0&&await t.makeXRCompatible(),P=e.getPixelRatio(),e.getSize(C),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let ve=null,Pe=null,Ae=null;M.depth&&(Ae=M.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ve=M.stencil?sr:ir,Pe=M.stencil?nr:Fi);const De={colorFormat:t.RGBA8,depthFormat:Ae,scaleFactor:r};u=this.getBinding(),f=u.createProjectionLayer(De),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),v=new Kt(f.textureWidth,f.textureHeight,{format:an,type:Ln,depthTexture:new af(f.textureWidth,f.textureHeight,Pe,void 0,void 0,void 0,void 0,void 0,void 0,ve),stencilBuffer:M.stencil,colorSpace:e.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const ve={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,t,ve),s.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),v=new Kt(d.framebufferWidth,d.framebufferHeight,{format:an,type:Ln,colorSpace:e.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),qe.setContext(s),qe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function $(J){for(let se=0;se<J.removed.length;se++){const ve=J.removed[se],Pe=A.indexOf(ve);Pe>=0&&(A[Pe]=null,w[Pe].disconnect(ve))}for(let se=0;se<J.added.length;se++){const ve=J.added[se];let Pe=A.indexOf(ve);if(Pe===-1){for(let De=0;De<w.length;De++)if(De>=A.length){A.push(ve),Pe=De;break}else if(A[De]===null){A[De]=ve,Pe=De;break}if(Pe===-1)break}const Ae=w[Pe];Ae&&Ae.connect(ve)}}const G=new R,ce=new R;function xe(J,se,ve){G.setFromMatrixPosition(se.matrixWorld),ce.setFromMatrixPosition(ve.matrixWorld);const Pe=G.distanceTo(ce),Ae=se.projectionMatrix.elements,De=ve.projectionMatrix.elements,et=Ae[14]/(Ae[10]-1),D=Ae[14]/(Ae[10]+1),oe=(Ae[9]+1)/Ae[5],ie=(Ae[9]-1)/Ae[5],F=(Ae[8]-1)/Ae[0],B=(De[8]+1)/De[0],ee=et*F,Y=et*B,te=Pe/(-F+B),Ee=te*-F;if(se.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(Ee),J.translateZ(te),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),Ae[10]===-1)J.projectionMatrix.copy(se.projectionMatrix),J.projectionMatrixInverse.copy(se.projectionMatrixInverse);else{const he=et+te,E=D+te,y=ee-Ee,I=Y+(Pe-Ee),X=oe*D/E*he,q=ie*D/E*he;J.projectionMatrix.makePerspective(y,I,X,q,he,E),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function le(J,se){se===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(se.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(s===null)return;let se=J.near,ve=J.far;g.texture!==null&&(g.depthNear>0&&(se=g.depthNear),g.depthFar>0&&(ve=g.depthFar)),U.near=b.near=S.near=se,U.far=b.far=S.far=ve,(N!==U.near||V!==U.far)&&(s.updateRenderState({depthNear:U.near,depthFar:U.far}),N=U.near,V=U.far),U.layers.mask=J.layers.mask|6,S.layers.mask=U.layers.mask&3,b.layers.mask=U.layers.mask&5;const Pe=J.parent,Ae=U.cameras;le(U,Pe);for(let De=0;De<Ae.length;De++)le(Ae[De],Pe);Ae.length===2?xe(U,S,b):U.projectionMatrix.copy(S.projectionMatrix),Oe(J,U,Pe)};function Oe(J,se,ve){ve===null?J.matrix.copy(se.matrixWorld):(J.matrix.copy(ve.matrixWorld),J.matrix.invert(),J.matrix.multiply(se.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(se.projectionMatrix),J.projectionMatrixInverse.copy(se.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=Ss*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return U},this.getFoveation=function(){if(!(f===null&&d===null))return c},this.setFoveation=function(J){c=J,f!==null&&(f.fixedFoveation=J),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=J)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(U)},this.getCameraTexture=function(J){return p[J]};let Fe=null;function $e(J,se){if(h=se.getViewerPose(l||o),m=se,h!==null){const ve=h.views;d!==null&&(e.setRenderTargetFramebuffer(v,d.framebuffer),e.setRenderTarget(v));let Pe=!1;ve.length!==U.cameras.length&&(U.cameras.length=0,Pe=!0);for(let D=0;D<ve.length;D++){const oe=ve[D];let ie=null;if(d!==null)ie=d.getViewport(oe);else{const B=u.getViewSubImage(f,oe);ie=B.viewport,D===0&&(e.setRenderTargetTextures(v,B.colorTexture,B.depthStencilTexture),e.setRenderTarget(v))}let F=L[D];F===void 0&&(F=new Bt,F.layers.enable(D),F.viewport=new st,L[D]=F),F.matrix.fromArray(oe.transform.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale),F.projectionMatrix.fromArray(oe.projectionMatrix),F.projectionMatrixInverse.copy(F.projectionMatrix).invert(),F.viewport.set(ie.x,ie.y,ie.width,ie.height),D===0&&(U.matrix.copy(F.matrix),U.matrix.decompose(U.position,U.quaternion,U.scale)),Pe===!0&&U.cameras.push(F)}const Ae=s.enabledFeatures;if(Ae&&Ae.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){u=n.getBinding();const D=u.getDepthInformation(ve[0]);D&&D.isValid&&D.texture&&g.init(D,s.renderState)}if(Ae&&Ae.includes("camera-access")&&x){e.state.unbindTexture(),u=n.getBinding();for(let D=0;D<ve.length;D++){const oe=ve[D].camera;if(oe){let ie=p[oe];ie||(ie=new lf,p[oe]=ie);const F=u.getCameraImage(oe);ie.sourceTexture=F}}}}for(let ve=0;ve<w.length;ve++){const Pe=A[ve],Ae=w[ve];Pe!==null&&Ae!==void 0&&Ae.update(Pe,se,l||o)}Fe&&Fe(J,se),se.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:se}),m=null}const qe=new yf;qe.setAnimationLoop($e),this.setAnimationLoop=function(J){Fe=J},this.dispose=function(){}}}const bi=new $t,uv=new Ze;function fv(i,e){function t(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function n(g,p){p.color.getRGB(g.fogColor.value,nf(i)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function s(g,p,M,_,v){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(g,p):p.isMeshToonMaterial?(r(g,p),u(g,p)):p.isMeshPhongMaterial?(r(g,p),h(g,p)):p.isMeshStandardMaterial?(r(g,p),f(g,p),p.isMeshPhysicalMaterial&&d(g,p,v)):p.isMeshMatcapMaterial?(r(g,p),m(g,p)):p.isMeshDepthMaterial?r(g,p):p.isMeshDistanceMaterial?(r(g,p),x(g,p)):p.isMeshNormalMaterial?r(g,p):p.isLineBasicMaterial?(o(g,p),p.isLineDashedMaterial&&a(g,p)):p.isPointsMaterial?c(g,p,M,_):p.isSpriteMaterial?l(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,t(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===Gt&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,t(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===Gt&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,t(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,t(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);const M=e.get(p),_=M.envMap,v=M.envMapRotation;_&&(g.envMap.value=_,bi.copy(v),bi.x*=-1,bi.y*=-1,bi.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(bi.y*=-1,bi.z*=-1),g.envMapRotation.value.setFromMatrix4(uv.makeRotationFromEuler(bi)),g.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,g.aoMapTransform))}function o(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform))}function a(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function c(g,p,M,_){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*M,g.scale.value=_*.5,p.map&&(g.map.value=p.map,t(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function l(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function h(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function u(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function f(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function d(g,p,M){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Gt&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=M.texture,g.transmissionSamplerSize.value.set(M.width,M.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function x(g,p){const M=e.get(p).light;g.referencePosition.value.setFromMatrixPosition(M.matrixWorld),g.nearDistance.value=M.shadow.camera.near,g.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function dv(i,e,t,n){let s={},r={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(M,_){const v=_.program;n.uniformBlockBinding(M,v)}function l(M,_){let v=s[M.id];v===void 0&&(m(M),v=h(M),s[M.id]=v,M.addEventListener("dispose",g));const w=_.program;n.updateUBOMapping(M,w);const A=e.render.frame;r[M.id]!==A&&(f(M),r[M.id]=A)}function h(M){const _=u();M.__bindingPointIndex=_;const v=i.createBuffer(),w=M.__size,A=M.usage;return i.bindBuffer(i.UNIFORM_BUFFER,v),i.bufferData(i.UNIFORM_BUFFER,w,A),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,_,v),v}function u(){for(let M=0;M<a;M++)if(o.indexOf(M)===-1)return o.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(M){const _=s[M.id],v=M.uniforms,w=M.__cache;i.bindBuffer(i.UNIFORM_BUFFER,_);for(let A=0,C=v.length;A<C;A++){const P=Array.isArray(v[A])?v[A]:[v[A]];for(let S=0,b=P.length;S<b;S++){const L=P[S];if(d(L,A,S,w)===!0){const U=L.__offset,N=Array.isArray(L.value)?L.value:[L.value];let V=0;for(let z=0;z<N.length;z++){const W=N[z],$=x(W);typeof W=="number"||typeof W=="boolean"?(L.__data[0]=W,i.bufferSubData(i.UNIFORM_BUFFER,U+V,L.__data)):W.isMatrix3?(L.__data[0]=W.elements[0],L.__data[1]=W.elements[1],L.__data[2]=W.elements[2],L.__data[3]=0,L.__data[4]=W.elements[3],L.__data[5]=W.elements[4],L.__data[6]=W.elements[5],L.__data[7]=0,L.__data[8]=W.elements[6],L.__data[9]=W.elements[7],L.__data[10]=W.elements[8],L.__data[11]=0):(W.toArray(L.__data,V),V+=$.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,U,L.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(M,_,v,w){const A=M.value,C=_+"_"+v;if(w[C]===void 0)return typeof A=="number"||typeof A=="boolean"?w[C]=A:w[C]=A.clone(),!0;{const P=w[C];if(typeof A=="number"||typeof A=="boolean"){if(P!==A)return w[C]=A,!0}else if(P.equals(A)===!1)return P.copy(A),!0}return!1}function m(M){const _=M.uniforms;let v=0;const w=16;for(let C=0,P=_.length;C<P;C++){const S=Array.isArray(_[C])?_[C]:[_[C]];for(let b=0,L=S.length;b<L;b++){const U=S[b],N=Array.isArray(U.value)?U.value:[U.value];for(let V=0,z=N.length;V<z;V++){const W=N[V],$=x(W),G=v%w,ce=G%$.boundary,xe=G+ce;v+=ce,xe!==0&&w-xe<$.storage&&(v+=w-xe),U.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=v,v+=$.storage}}}const A=v%w;return A>0&&(v+=w-A),M.__size=v,M.__cache={},this}function x(M){const _={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(_.boundary=4,_.storage=4):M.isVector2?(_.boundary=8,_.storage=8):M.isVector3||M.isColor?(_.boundary=16,_.storage=12):M.isVector4?(_.boundary=16,_.storage=16):M.isMatrix3?(_.boundary=48,_.storage=48):M.isMatrix4?(_.boundary=64,_.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),_}function g(M){const _=M.target;_.removeEventListener("dispose",g);const v=o.indexOf(_.__bindingPointIndex);o.splice(v,1),i.deleteBuffer(s[_.id]),delete s[_.id],delete r[_.id]}function p(){for(const M in s)i.deleteBuffer(s[M]);o=[],s={},r={}}return{bind:c,update:l,dispose:p}}class pv{constructor(e={}){const{canvas:t=ap(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=o;const m=new Uint32Array(4),x=new Int32Array(4);let g=null,p=null;const M=[],_=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=fi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const v=this;let w=!1;this._outputColorSpace=vt;let A=0,C=0,P=null,S=-1,b=null;const L=new st,U=new st;let N=null;const V=new Ue(0);let z=0,W=t.width,$=t.height,G=1,ce=null,xe=null;const le=new st(0,0,W,$),Oe=new st(0,0,W,$);let Fe=!1;const $e=new gc;let qe=!1,J=!1;const se=new Ze,ve=new R,Pe=new st,Ae={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let De=!1;function et(){return P===null?G:1}let D=n;function oe(T,H){return t.getContext(T,H)}try{const T={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${ic}`),t.addEventListener("webglcontextlost",Me,!1),t.addEventListener("webglcontextrestored",Le,!1),t.addEventListener("webglcontextcreationerror",de,!1),D===null){const H="webgl2";if(D=oe(H,T),D===null)throw oe(H)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let ie,F,B,ee,Y,te,Ee,he,E,y,I,X,q,j,ge,ae,Te,Ce,ue,Se,Ve,ze,be,je;function O(){ie=new w1(D),ie.init(),ze=new ov(D,ie),F=new x1(D,ie,e,ze),B=new sv(D,ie),F.reversedDepthBuffer&&f&&B.buffers.depth.setReversed(!0),ee=new A1(D),Y=new Xx,te=new rv(D,ie,B,Y,F,ze,ee),Ee=new _1(v),he=new b1(v),E=new Im(D),be=new m1(D,E),y=new E1(D,E,ee,be),I=new R1(D,y,E,ee),ue=new C1(D,F,te),ae=new v1(Y),X=new Wx(v,Ee,he,ie,F,be,ae),q=new fv(v,Y),j=new Yx,ge=new $x(ie),Ce=new p1(v,Ee,he,B,I,d,c),Te=new nv(v,I,F),je=new dv(D,ee,F,B),Se=new g1(D,ie,ee),Ve=new T1(D,ie,ee),ee.programs=X.programs,v.capabilities=F,v.extensions=ie,v.properties=Y,v.renderLists=j,v.shadowMap=Te,v.state=B,v.info=ee}O();const me=new hv(v,D);this.xr=me,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const T=ie.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=ie.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(T){T!==void 0&&(G=T,this.setSize(W,$,!1))},this.getSize=function(T){return T.set(W,$)},this.setSize=function(T,H,K=!0){if(me.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}W=T,$=H,t.width=Math.floor(T*G),t.height=Math.floor(H*G),K===!0&&(t.style.width=T+"px",t.style.height=H+"px"),this.setViewport(0,0,T,H)},this.getDrawingBufferSize=function(T){return T.set(W*G,$*G).floor()},this.setDrawingBufferSize=function(T,H,K){W=T,$=H,G=K,t.width=Math.floor(T*K),t.height=Math.floor(H*K),this.setViewport(0,0,T,H)},this.getCurrentViewport=function(T){return T.copy(L)},this.getViewport=function(T){return T.copy(le)},this.setViewport=function(T,H,K,Z){T.isVector4?le.set(T.x,T.y,T.z,T.w):le.set(T,H,K,Z),B.viewport(L.copy(le).multiplyScalar(G).round())},this.getScissor=function(T){return T.copy(Oe)},this.setScissor=function(T,H,K,Z){T.isVector4?Oe.set(T.x,T.y,T.z,T.w):Oe.set(T,H,K,Z),B.scissor(U.copy(Oe).multiplyScalar(G).round())},this.getScissorTest=function(){return Fe},this.setScissorTest=function(T){B.setScissorTest(Fe=T)},this.setOpaqueSort=function(T){ce=T},this.setTransparentSort=function(T){xe=T},this.getClearColor=function(T){return T.copy(Ce.getClearColor())},this.setClearColor=function(){Ce.setClearColor(...arguments)},this.getClearAlpha=function(){return Ce.getClearAlpha()},this.setClearAlpha=function(){Ce.setClearAlpha(...arguments)},this.clear=function(T=!0,H=!0,K=!0){let Z=0;if(T){let k=!1;if(P!==null){const pe=P.texture.format;k=pe===uc||pe===hc||pe===cc}if(k){const pe=P.texture.type,we=pe===Ln||pe===Fi||pe===tr||pe===nr||pe===oc||pe===ac,Ie=Ce.getClearColor(),Re=Ce.getClearAlpha(),Ge=Ie.r,Xe=Ie.g,He=Ie.b;we?(m[0]=Ge,m[1]=Xe,m[2]=He,m[3]=Re,D.clearBufferuiv(D.COLOR,0,m)):(x[0]=Ge,x[1]=Xe,x[2]=He,x[3]=Re,D.clearBufferiv(D.COLOR,0,x))}else Z|=D.COLOR_BUFFER_BIT}H&&(Z|=D.DEPTH_BUFFER_BIT),K&&(Z|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(Z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Me,!1),t.removeEventListener("webglcontextrestored",Le,!1),t.removeEventListener("webglcontextcreationerror",de,!1),Ce.dispose(),j.dispose(),ge.dispose(),Y.dispose(),Ee.dispose(),he.dispose(),I.dispose(),be.dispose(),je.dispose(),X.dispose(),me.dispose(),me.removeEventListener("sessionstart",En),me.removeEventListener("sessionend",Oc),gi.stop()};function Me(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),w=!0}function Le(){console.log("THREE.WebGLRenderer: Context Restored."),w=!1;const T=ee.autoReset,H=Te.enabled,K=Te.autoUpdate,Z=Te.needsUpdate,k=Te.type;O(),ee.autoReset=T,Te.enabled=H,Te.autoUpdate=K,Te.needsUpdate=Z,Te.type=k}function de(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function re(T){const H=T.target;H.removeEventListener("dispose",re),Ne(H)}function Ne(T){Ye(T),Y.remove(T)}function Ye(T){const H=Y.get(T).programs;H!==void 0&&(H.forEach(function(K){X.releaseProgram(K)}),T.isShaderMaterial&&X.releaseShaderCache(T))}this.renderBufferDirect=function(T,H,K,Z,k,pe){H===null&&(H=Ae);const we=k.isMesh&&k.matrixWorld.determinant()<0,Ie=rd(T,H,K,Z,k);B.setMaterial(Z,we);let Re=K.index,Ge=1;if(Z.wireframe===!0){if(Re=y.getWireframeAttribute(K),Re===void 0)return;Ge=2}const Xe=K.drawRange,He=K.attributes.position;let tt=Xe.start*Ge,ct=(Xe.start+Xe.count)*Ge;pe!==null&&(tt=Math.max(tt,pe.start*Ge),ct=Math.min(ct,(pe.start+pe.count)*Ge)),Re!==null?(tt=Math.max(tt,0),ct=Math.min(ct,Re.count)):He!=null&&(tt=Math.max(tt,0),ct=Math.min(ct,He.count));const St=ct-tt;if(St<0||St===1/0)return;be.setup(k,Z,Ie,K,Re);let mt,ht=Se;if(Re!==null&&(mt=E.get(Re),ht=Ve,ht.setIndex(mt)),k.isMesh)Z.wireframe===!0?(B.setLineWidth(Z.wireframeLinewidth*et()),ht.setMode(D.LINES)):ht.setMode(D.TRIANGLES);else if(k.isLine){let ke=Z.linewidth;ke===void 0&&(ke=1),B.setLineWidth(ke*et()),k.isLineSegments?ht.setMode(D.LINES):k.isLineLoop?ht.setMode(D.LINE_LOOP):ht.setMode(D.LINE_STRIP)}else k.isPoints?ht.setMode(D.POINTS):k.isSprite&&ht.setMode(D.TRIANGLES);if(k.isBatchedMesh)if(k._multiDrawInstances!==null)or("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ht.renderMultiDrawInstances(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount,k._multiDrawInstances);else if(ie.get("WEBGL_multi_draw"))ht.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else{const ke=k._multiDrawStarts,_t=k._multiDrawCounts,rt=k._multiDrawCount,en=Re?E.get(Re).bytesPerElement:1,qi=Y.get(Z).currentProgram.getUniforms();for(let tn=0;tn<rt;tn++)qi.setValue(D,"_gl_DrawID",tn),ht.render(ke[tn]/en,_t[tn])}else if(k.isInstancedMesh)ht.renderInstances(tt,St,k.count);else if(K.isInstancedBufferGeometry){const ke=K._maxInstanceCount!==void 0?K._maxInstanceCount:1/0,_t=Math.min(K.instanceCount,ke);ht.renderInstances(tt,St,_t)}else ht.render(tt,St)};function pt(T,H,K){T.transparent===!0&&T.side===Ht&&T.forceSinglePass===!1?(T.side=Gt,T.needsUpdate=!0,gr(T,H,K),T.side=Zn,T.needsUpdate=!0,gr(T,H,K),T.side=Ht):gr(T,H,K)}this.compile=function(T,H,K=null){K===null&&(K=T),p=ge.get(K),p.init(H),_.push(p),K.traverseVisible(function(k){k.isLight&&k.layers.test(H.layers)&&(p.pushLight(k),k.castShadow&&p.pushShadow(k))}),T!==K&&T.traverseVisible(function(k){k.isLight&&k.layers.test(H.layers)&&(p.pushLight(k),k.castShadow&&p.pushShadow(k))}),p.setupLights();const Z=new Set;return T.traverse(function(k){if(!(k.isMesh||k.isPoints||k.isLine||k.isSprite))return;const pe=k.material;if(pe)if(Array.isArray(pe))for(let we=0;we<pe.length;we++){const Ie=pe[we];pt(Ie,K,k),Z.add(Ie)}else pt(pe,K,k),Z.add(pe)}),p=_.pop(),Z},this.compileAsync=function(T,H,K=null){const Z=this.compile(T,H,K);return new Promise(k=>{function pe(){if(Z.forEach(function(we){Y.get(we).currentProgram.isReady()&&Z.delete(we)}),Z.size===0){k(T);return}setTimeout(pe,10)}ie.get("KHR_parallel_shader_compile")!==null?pe():setTimeout(pe,10)})};let ot=null;function Nn(T){ot&&ot(T)}function En(){gi.stop()}function Oc(){gi.start()}const gi=new yf;gi.setAnimationLoop(Nn),typeof self<"u"&&gi.setContext(self),this.setAnimationLoop=function(T){ot=T,me.setAnimationLoop(T),T===null?gi.stop():gi.start()},me.addEventListener("sessionstart",En),me.addEventListener("sessionend",Oc),this.render=function(T,H){if(H!==void 0&&H.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),me.enabled===!0&&me.isPresenting===!0&&(me.cameraAutoUpdate===!0&&me.updateCamera(H),H=me.getCamera()),T.isScene===!0&&T.onBeforeRender(v,T,H,P),p=ge.get(T,_.length),p.init(H),_.push(p),se.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),$e.setFromProjectionMatrix(se,Rn,H.reversedDepth),J=this.localClippingEnabled,qe=ae.init(this.clippingPlanes,J),g=j.get(T,M.length),g.init(),M.push(g),me.enabled===!0&&me.isPresenting===!0){const pe=v.xr.getDepthSensingMesh();pe!==null&&jo(pe,H,-1/0,v.sortObjects)}jo(T,H,0,v.sortObjects),g.finish(),v.sortObjects===!0&&g.sort(ce,xe),De=me.enabled===!1||me.isPresenting===!1||me.hasDepthSensing()===!1,De&&Ce.addToRenderList(g,T),this.info.render.frame++,qe===!0&&ae.beginShadows();const K=p.state.shadowsArray;Te.render(K,T,H),qe===!0&&ae.endShadows(),this.info.autoReset===!0&&this.info.reset();const Z=g.opaque,k=g.transmissive;if(p.setupLights(),H.isArrayCamera){const pe=H.cameras;if(k.length>0)for(let we=0,Ie=pe.length;we<Ie;we++){const Re=pe[we];Bc(Z,k,T,Re)}De&&Ce.render(T);for(let we=0,Ie=pe.length;we<Ie;we++){const Re=pe[we];zc(g,T,Re,Re.viewport)}}else k.length>0&&Bc(Z,k,T,H),De&&Ce.render(T),zc(g,T,H);P!==null&&C===0&&(te.updateMultisampleRenderTarget(P),te.updateRenderTargetMipmap(P)),T.isScene===!0&&T.onAfterRender(v,T,H),be.resetDefaultState(),S=-1,b=null,_.pop(),_.length>0?(p=_[_.length-1],qe===!0&&ae.setGlobalState(v.clippingPlanes,p.state.camera)):p=null,M.pop(),M.length>0?g=M[M.length-1]:g=null};function jo(T,H,K,Z){if(T.visible===!1)return;if(T.layers.test(H.layers)){if(T.isGroup)K=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(H);else if(T.isLight)p.pushLight(T),T.castShadow&&p.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||$e.intersectsSprite(T)){Z&&Pe.setFromMatrixPosition(T.matrixWorld).applyMatrix4(se);const we=I.update(T),Ie=T.material;Ie.visible&&g.push(T,we,Ie,K,Pe.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||$e.intersectsObject(T))){const we=I.update(T),Ie=T.material;if(Z&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Pe.copy(T.boundingSphere.center)):(we.boundingSphere===null&&we.computeBoundingSphere(),Pe.copy(we.boundingSphere.center)),Pe.applyMatrix4(T.matrixWorld).applyMatrix4(se)),Array.isArray(Ie)){const Re=we.groups;for(let Ge=0,Xe=Re.length;Ge<Xe;Ge++){const He=Re[Ge],tt=Ie[He.materialIndex];tt&&tt.visible&&g.push(T,we,tt,K,Pe.z,He)}}else Ie.visible&&g.push(T,we,Ie,K,Pe.z,null)}}const pe=T.children;for(let we=0,Ie=pe.length;we<Ie;we++)jo(pe[we],H,K,Z)}function zc(T,H,K,Z){const k=T.opaque,pe=T.transmissive,we=T.transparent;p.setupLightsView(K),qe===!0&&ae.setGlobalState(v.clippingPlanes,K),Z&&B.viewport(L.copy(Z)),k.length>0&&mr(k,H,K),pe.length>0&&mr(pe,H,K),we.length>0&&mr(we,H,K),B.buffers.depth.setTest(!0),B.buffers.depth.setMask(!0),B.buffers.color.setMask(!0),B.setPolygonOffset(!1)}function Bc(T,H,K,Z){if((K.isScene===!0?K.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[Z.id]===void 0&&(p.state.transmissionRenderTarget[Z.id]=new Kt(1,1,{generateMipmaps:!0,type:ie.has("EXT_color_buffer_half_float")||ie.has("EXT_color_buffer_float")?wn:Ln,minFilter:Sn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:it.workingColorSpace}));const pe=p.state.transmissionRenderTarget[Z.id],we=Z.viewport||L;pe.setSize(we.z*v.transmissionResolutionScale,we.w*v.transmissionResolutionScale);const Ie=v.getRenderTarget(),Re=v.getActiveCubeFace(),Ge=v.getActiveMipmapLevel();v.setRenderTarget(pe),v.getClearColor(V),z=v.getClearAlpha(),z<1&&v.setClearColor(16777215,.5),v.clear(),De&&Ce.render(K);const Xe=v.toneMapping;v.toneMapping=fi;const He=Z.viewport;if(Z.viewport!==void 0&&(Z.viewport=void 0),p.setupLightsView(Z),qe===!0&&ae.setGlobalState(v.clippingPlanes,Z),mr(T,K,Z),te.updateMultisampleRenderTarget(pe),te.updateRenderTargetMipmap(pe),ie.has("WEBGL_multisampled_render_to_texture")===!1){let tt=!1;for(let ct=0,St=H.length;ct<St;ct++){const mt=H[ct],ht=mt.object,ke=mt.geometry,_t=mt.material,rt=mt.group;if(_t.side===Ht&&ht.layers.test(Z.layers)){const en=_t.side;_t.side=Gt,_t.needsUpdate=!0,Hc(ht,K,Z,ke,_t,rt),_t.side=en,_t.needsUpdate=!0,tt=!0}}tt===!0&&(te.updateMultisampleRenderTarget(pe),te.updateRenderTargetMipmap(pe))}v.setRenderTarget(Ie,Re,Ge),v.setClearColor(V,z),He!==void 0&&(Z.viewport=He),v.toneMapping=Xe}function mr(T,H,K){const Z=H.isScene===!0?H.overrideMaterial:null;for(let k=0,pe=T.length;k<pe;k++){const we=T[k],Ie=we.object,Re=we.geometry,Ge=we.group;let Xe=we.material;Xe.allowOverride===!0&&Z!==null&&(Xe=Z),Ie.layers.test(K.layers)&&Hc(Ie,H,K,Re,Xe,Ge)}}function Hc(T,H,K,Z,k,pe){T.onBeforeRender(v,H,K,Z,k,pe),T.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),k.onBeforeRender(v,H,K,Z,T,pe),k.transparent===!0&&k.side===Ht&&k.forceSinglePass===!1?(k.side=Gt,k.needsUpdate=!0,v.renderBufferDirect(K,H,Z,k,T,pe),k.side=Zn,k.needsUpdate=!0,v.renderBufferDirect(K,H,Z,k,T,pe),k.side=Ht):v.renderBufferDirect(K,H,Z,k,T,pe),T.onAfterRender(v,H,K,Z,k,pe)}function gr(T,H,K){H.isScene!==!0&&(H=Ae);const Z=Y.get(T),k=p.state.lights,pe=p.state.shadowsArray,we=k.state.version,Ie=X.getParameters(T,k.state,pe,H,K),Re=X.getProgramCacheKey(Ie);let Ge=Z.programs;Z.environment=T.isMeshStandardMaterial?H.environment:null,Z.fog=H.fog,Z.envMap=(T.isMeshStandardMaterial?he:Ee).get(T.envMap||Z.environment),Z.envMapRotation=Z.environment!==null&&T.envMap===null?H.environmentRotation:T.envMapRotation,Ge===void 0&&(T.addEventListener("dispose",re),Ge=new Map,Z.programs=Ge);let Xe=Ge.get(Re);if(Xe!==void 0){if(Z.currentProgram===Xe&&Z.lightsStateVersion===we)return Gc(T,Ie),Xe}else Ie.uniforms=X.getUniforms(T),T.onBeforeCompile(Ie,v),Xe=X.acquireProgram(Ie,Re),Ge.set(Re,Xe),Z.uniforms=Ie.uniforms;const He=Z.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(He.clippingPlanes=ae.uniform),Gc(T,Ie),Z.needsLights=ad(T),Z.lightsStateVersion=we,Z.needsLights&&(He.ambientLightColor.value=k.state.ambient,He.lightProbe.value=k.state.probe,He.directionalLights.value=k.state.directional,He.directionalLightShadows.value=k.state.directionalShadow,He.spotLights.value=k.state.spot,He.spotLightShadows.value=k.state.spotShadow,He.rectAreaLights.value=k.state.rectArea,He.ltc_1.value=k.state.rectAreaLTC1,He.ltc_2.value=k.state.rectAreaLTC2,He.pointLights.value=k.state.point,He.pointLightShadows.value=k.state.pointShadow,He.hemisphereLights.value=k.state.hemi,He.directionalShadowMap.value=k.state.directionalShadowMap,He.directionalShadowMatrix.value=k.state.directionalShadowMatrix,He.spotShadowMap.value=k.state.spotShadowMap,He.spotLightMatrix.value=k.state.spotLightMatrix,He.spotLightMap.value=k.state.spotLightMap,He.pointShadowMap.value=k.state.pointShadowMap,He.pointShadowMatrix.value=k.state.pointShadowMatrix),Z.currentProgram=Xe,Z.uniformsList=null,Xe}function kc(T){if(T.uniformsList===null){const H=T.currentProgram.getUniforms();T.uniformsList=co.seqWithValue(H.seq,T.uniforms)}return T.uniformsList}function Gc(T,H){const K=Y.get(T);K.outputColorSpace=H.outputColorSpace,K.batching=H.batching,K.batchingColor=H.batchingColor,K.instancing=H.instancing,K.instancingColor=H.instancingColor,K.instancingMorph=H.instancingMorph,K.skinning=H.skinning,K.morphTargets=H.morphTargets,K.morphNormals=H.morphNormals,K.morphColors=H.morphColors,K.morphTargetsCount=H.morphTargetsCount,K.numClippingPlanes=H.numClippingPlanes,K.numIntersection=H.numClipIntersection,K.vertexAlphas=H.vertexAlphas,K.vertexTangents=H.vertexTangents,K.toneMapping=H.toneMapping}function rd(T,H,K,Z,k){H.isScene!==!0&&(H=Ae),te.resetTextureUnits();const pe=H.fog,we=Z.isMeshStandardMaterial?H.environment:null,Ie=P===null?v.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:ys,Re=(Z.isMeshStandardMaterial?he:Ee).get(Z.envMap||we),Ge=Z.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,Xe=!!K.attributes.tangent&&(!!Z.normalMap||Z.anisotropy>0),He=!!K.morphAttributes.position,tt=!!K.morphAttributes.normal,ct=!!K.morphAttributes.color;let St=fi;Z.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(St=v.toneMapping);const mt=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,ht=mt!==void 0?mt.length:0,ke=Y.get(Z),_t=p.state.lights;if(qe===!0&&(J===!0||T!==b)){const Ut=T===b&&Z.id===S;ae.setState(Z,T,Ut)}let rt=!1;Z.version===ke.__version?(ke.needsLights&&ke.lightsStateVersion!==_t.state.version||ke.outputColorSpace!==Ie||k.isBatchedMesh&&ke.batching===!1||!k.isBatchedMesh&&ke.batching===!0||k.isBatchedMesh&&ke.batchingColor===!0&&k.colorTexture===null||k.isBatchedMesh&&ke.batchingColor===!1&&k.colorTexture!==null||k.isInstancedMesh&&ke.instancing===!1||!k.isInstancedMesh&&ke.instancing===!0||k.isSkinnedMesh&&ke.skinning===!1||!k.isSkinnedMesh&&ke.skinning===!0||k.isInstancedMesh&&ke.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&ke.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&ke.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&ke.instancingMorph===!1&&k.morphTexture!==null||ke.envMap!==Re||Z.fog===!0&&ke.fog!==pe||ke.numClippingPlanes!==void 0&&(ke.numClippingPlanes!==ae.numPlanes||ke.numIntersection!==ae.numIntersection)||ke.vertexAlphas!==Ge||ke.vertexTangents!==Xe||ke.morphTargets!==He||ke.morphNormals!==tt||ke.morphColors!==ct||ke.toneMapping!==St||ke.morphTargetsCount!==ht)&&(rt=!0):(rt=!0,ke.__version=Z.version);let en=ke.currentProgram;rt===!0&&(en=gr(Z,H,k));let qi=!1,tn=!1,Ds=!1;const Mt=en.getUniforms(),cn=ke.uniforms;if(B.useProgram(en.program)&&(qi=!0,tn=!0,Ds=!0),Z.id!==S&&(S=Z.id,tn=!0),qi||b!==T){B.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),Mt.setValue(D,"projectionMatrix",T.projectionMatrix),Mt.setValue(D,"viewMatrix",T.matrixWorldInverse);const qt=Mt.map.cameraPosition;qt!==void 0&&qt.setValue(D,ve.setFromMatrixPosition(T.matrixWorld)),F.logarithmicDepthBuffer&&Mt.setValue(D,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(Z.isMeshPhongMaterial||Z.isMeshToonMaterial||Z.isMeshLambertMaterial||Z.isMeshBasicMaterial||Z.isMeshStandardMaterial||Z.isShaderMaterial)&&Mt.setValue(D,"isOrthographic",T.isOrthographicCamera===!0),b!==T&&(b=T,tn=!0,Ds=!0)}if(k.isSkinnedMesh){Mt.setOptional(D,k,"bindMatrix"),Mt.setOptional(D,k,"bindMatrixInverse");const Ut=k.skeleton;Ut&&(Ut.boneTexture===null&&Ut.computeBoneTexture(),Mt.setValue(D,"boneTexture",Ut.boneTexture,te))}k.isBatchedMesh&&(Mt.setOptional(D,k,"batchingTexture"),Mt.setValue(D,"batchingTexture",k._matricesTexture,te),Mt.setOptional(D,k,"batchingIdTexture"),Mt.setValue(D,"batchingIdTexture",k._indirectTexture,te),Mt.setOptional(D,k,"batchingColorTexture"),k._colorsTexture!==null&&Mt.setValue(D,"batchingColorTexture",k._colorsTexture,te));const hn=K.morphAttributes;if((hn.position!==void 0||hn.normal!==void 0||hn.color!==void 0)&&ue.update(k,K,en),(tn||ke.receiveShadow!==k.receiveShadow)&&(ke.receiveShadow=k.receiveShadow,Mt.setValue(D,"receiveShadow",k.receiveShadow)),Z.isMeshGouraudMaterial&&Z.envMap!==null&&(cn.envMap.value=Re,cn.flipEnvMap.value=Re.isCubeTexture&&Re.isRenderTargetTexture===!1?-1:1),Z.isMeshStandardMaterial&&Z.envMap===null&&H.environment!==null&&(cn.envMapIntensity.value=H.environmentIntensity),tn&&(Mt.setValue(D,"toneMappingExposure",v.toneMappingExposure),ke.needsLights&&od(cn,Ds),pe&&Z.fog===!0&&q.refreshFogUniforms(cn,pe),q.refreshMaterialUniforms(cn,Z,G,$,p.state.transmissionRenderTarget[T.id]),co.upload(D,kc(ke),cn,te)),Z.isShaderMaterial&&Z.uniformsNeedUpdate===!0&&(co.upload(D,kc(ke),cn,te),Z.uniformsNeedUpdate=!1),Z.isSpriteMaterial&&Mt.setValue(D,"center",k.center),Mt.setValue(D,"modelViewMatrix",k.modelViewMatrix),Mt.setValue(D,"normalMatrix",k.normalMatrix),Mt.setValue(D,"modelMatrix",k.matrixWorld),Z.isShaderMaterial||Z.isRawShaderMaterial){const Ut=Z.uniformsGroups;for(let qt=0,Ko=Ut.length;qt<Ko;qt++){const xi=Ut[qt];je.update(xi,en),je.bind(xi,en)}}return en}function od(T,H){T.ambientLightColor.needsUpdate=H,T.lightProbe.needsUpdate=H,T.directionalLights.needsUpdate=H,T.directionalLightShadows.needsUpdate=H,T.pointLights.needsUpdate=H,T.pointLightShadows.needsUpdate=H,T.spotLights.needsUpdate=H,T.spotLightShadows.needsUpdate=H,T.rectAreaLights.needsUpdate=H,T.hemisphereLights.needsUpdate=H}function ad(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(T,H,K){const Z=Y.get(T);Z.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,Z.__autoAllocateDepthBuffer===!1&&(Z.__useRenderToTexture=!1),Y.get(T.texture).__webglTexture=H,Y.get(T.depthTexture).__webglTexture=Z.__autoAllocateDepthBuffer?void 0:K,Z.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,H){const K=Y.get(T);K.__webglFramebuffer=H,K.__useDefaultFramebuffer=H===void 0};const ld=D.createFramebuffer();this.setRenderTarget=function(T,H=0,K=0){P=T,A=H,C=K;let Z=!0,k=null,pe=!1,we=!1;if(T){const Re=Y.get(T);if(Re.__useDefaultFramebuffer!==void 0)B.bindFramebuffer(D.FRAMEBUFFER,null),Z=!1;else if(Re.__webglFramebuffer===void 0)te.setupRenderTarget(T);else if(Re.__hasExternalTextures)te.rebindTextures(T,Y.get(T.texture).__webglTexture,Y.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const He=T.depthTexture;if(Re.__boundDepthTexture!==He){if(He!==null&&Y.has(He)&&(T.width!==He.image.width||T.height!==He.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");te.setupDepthRenderbuffer(T)}}const Ge=T.texture;(Ge.isData3DTexture||Ge.isDataArrayTexture||Ge.isCompressedArrayTexture)&&(we=!0);const Xe=Y.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Xe[H])?k=Xe[H][K]:k=Xe[H],pe=!0):T.samples>0&&te.useMultisampledRTT(T)===!1?k=Y.get(T).__webglMultisampledFramebuffer:Array.isArray(Xe)?k=Xe[K]:k=Xe,L.copy(T.viewport),U.copy(T.scissor),N=T.scissorTest}else L.copy(le).multiplyScalar(G).floor(),U.copy(Oe).multiplyScalar(G).floor(),N=Fe;if(K!==0&&(k=ld),B.bindFramebuffer(D.FRAMEBUFFER,k)&&Z&&B.drawBuffers(T,k),B.viewport(L),B.scissor(U),B.setScissorTest(N),pe){const Re=Y.get(T.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+H,Re.__webglTexture,K)}else if(we){const Re=H;for(let Ge=0;Ge<T.textures.length;Ge++){const Xe=Y.get(T.textures[Ge]);D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0+Ge,Xe.__webglTexture,K,Re)}}else if(T!==null&&K!==0){const Re=Y.get(T.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Re.__webglTexture,K)}S=-1},this.readRenderTargetPixels=function(T,H,K,Z,k,pe,we,Ie=0){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Re=Y.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&we!==void 0&&(Re=Re[we]),Re){B.bindFramebuffer(D.FRAMEBUFFER,Re);try{const Ge=T.textures[Ie],Xe=Ge.format,He=Ge.type;if(!F.textureFormatReadable(Xe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!F.textureTypeReadable(He)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=T.width-Z&&K>=0&&K<=T.height-k&&(T.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+Ie),D.readPixels(H,K,Z,k,ze.convert(Xe),ze.convert(He),pe))}finally{const Ge=P!==null?Y.get(P).__webglFramebuffer:null;B.bindFramebuffer(D.FRAMEBUFFER,Ge)}}},this.readRenderTargetPixelsAsync=async function(T,H,K,Z,k,pe,we,Ie=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Re=Y.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&we!==void 0&&(Re=Re[we]),Re)if(H>=0&&H<=T.width-Z&&K>=0&&K<=T.height-k){B.bindFramebuffer(D.FRAMEBUFFER,Re);const Ge=T.textures[Ie],Xe=Ge.format,He=Ge.type;if(!F.textureFormatReadable(Xe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!F.textureTypeReadable(He))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const tt=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,tt),D.bufferData(D.PIXEL_PACK_BUFFER,pe.byteLength,D.STREAM_READ),T.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+Ie),D.readPixels(H,K,Z,k,ze.convert(Xe),ze.convert(He),0);const ct=P!==null?Y.get(P).__webglFramebuffer:null;B.bindFramebuffer(D.FRAMEBUFFER,ct);const St=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await lp(D,St,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,tt),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,pe),D.deleteBuffer(tt),D.deleteSync(St),pe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,H=null,K=0){const Z=Math.pow(2,-K),k=Math.floor(T.image.width*Z),pe=Math.floor(T.image.height*Z),we=H!==null?H.x:0,Ie=H!==null?H.y:0;te.setTexture2D(T,0),D.copyTexSubImage2D(D.TEXTURE_2D,K,0,0,we,Ie,k,pe),B.unbindTexture()};const cd=D.createFramebuffer(),hd=D.createFramebuffer();this.copyTextureToTexture=function(T,H,K=null,Z=null,k=0,pe=null){pe===null&&(k!==0?(or("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),pe=k,k=0):pe=0);let we,Ie,Re,Ge,Xe,He,tt,ct,St;const mt=T.isCompressedTexture?T.mipmaps[pe]:T.image;if(K!==null)we=K.max.x-K.min.x,Ie=K.max.y-K.min.y,Re=K.isBox3?K.max.z-K.min.z:1,Ge=K.min.x,Xe=K.min.y,He=K.isBox3?K.min.z:0;else{const hn=Math.pow(2,-k);we=Math.floor(mt.width*hn),Ie=Math.floor(mt.height*hn),T.isDataArrayTexture?Re=mt.depth:T.isData3DTexture?Re=Math.floor(mt.depth*hn):Re=1,Ge=0,Xe=0,He=0}Z!==null?(tt=Z.x,ct=Z.y,St=Z.z):(tt=0,ct=0,St=0);const ht=ze.convert(H.format),ke=ze.convert(H.type);let _t;H.isData3DTexture?(te.setTexture3D(H,0),_t=D.TEXTURE_3D):H.isDataArrayTexture||H.isCompressedArrayTexture?(te.setTexture2DArray(H,0),_t=D.TEXTURE_2D_ARRAY):(te.setTexture2D(H,0),_t=D.TEXTURE_2D),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,H.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,H.unpackAlignment);const rt=D.getParameter(D.UNPACK_ROW_LENGTH),en=D.getParameter(D.UNPACK_IMAGE_HEIGHT),qi=D.getParameter(D.UNPACK_SKIP_PIXELS),tn=D.getParameter(D.UNPACK_SKIP_ROWS),Ds=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,mt.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,mt.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Ge),D.pixelStorei(D.UNPACK_SKIP_ROWS,Xe),D.pixelStorei(D.UNPACK_SKIP_IMAGES,He);const Mt=T.isDataArrayTexture||T.isData3DTexture,cn=H.isDataArrayTexture||H.isData3DTexture;if(T.isDepthTexture){const hn=Y.get(T),Ut=Y.get(H),qt=Y.get(hn.__renderTarget),Ko=Y.get(Ut.__renderTarget);B.bindFramebuffer(D.READ_FRAMEBUFFER,qt.__webglFramebuffer),B.bindFramebuffer(D.DRAW_FRAMEBUFFER,Ko.__webglFramebuffer);for(let xi=0;xi<Re;xi++)Mt&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Y.get(T).__webglTexture,k,He+xi),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Y.get(H).__webglTexture,pe,St+xi)),D.blitFramebuffer(Ge,Xe,we,Ie,tt,ct,we,Ie,D.DEPTH_BUFFER_BIT,D.NEAREST);B.bindFramebuffer(D.READ_FRAMEBUFFER,null),B.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(k!==0||T.isRenderTargetTexture||Y.has(T)){const hn=Y.get(T),Ut=Y.get(H);B.bindFramebuffer(D.READ_FRAMEBUFFER,cd),B.bindFramebuffer(D.DRAW_FRAMEBUFFER,hd);for(let qt=0;qt<Re;qt++)Mt?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,hn.__webglTexture,k,He+qt):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,hn.__webglTexture,k),cn?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Ut.__webglTexture,pe,St+qt):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Ut.__webglTexture,pe),k!==0?D.blitFramebuffer(Ge,Xe,we,Ie,tt,ct,we,Ie,D.COLOR_BUFFER_BIT,D.NEAREST):cn?D.copyTexSubImage3D(_t,pe,tt,ct,St+qt,Ge,Xe,we,Ie):D.copyTexSubImage2D(_t,pe,tt,ct,Ge,Xe,we,Ie);B.bindFramebuffer(D.READ_FRAMEBUFFER,null),B.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else cn?T.isDataTexture||T.isData3DTexture?D.texSubImage3D(_t,pe,tt,ct,St,we,Ie,Re,ht,ke,mt.data):H.isCompressedArrayTexture?D.compressedTexSubImage3D(_t,pe,tt,ct,St,we,Ie,Re,ht,mt.data):D.texSubImage3D(_t,pe,tt,ct,St,we,Ie,Re,ht,ke,mt):T.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,pe,tt,ct,we,Ie,ht,ke,mt.data):T.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,pe,tt,ct,mt.width,mt.height,ht,mt.data):D.texSubImage2D(D.TEXTURE_2D,pe,tt,ct,we,Ie,ht,ke,mt);D.pixelStorei(D.UNPACK_ROW_LENGTH,rt),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,en),D.pixelStorei(D.UNPACK_SKIP_PIXELS,qi),D.pixelStorei(D.UNPACK_SKIP_ROWS,tn),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Ds),pe===0&&H.generateMipmaps&&D.generateMipmap(_t),B.unbindTexture()},this.initRenderTarget=function(T){Y.get(T).__webglFramebuffer===void 0&&te.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?te.setTextureCube(T,0):T.isData3DTexture?te.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?te.setTexture2DArray(T,0):te.setTexture2D(T,0),B.unbindTexture()},this.resetState=function(){A=0,C=0,P=null,B.reset(),be.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Rn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=it._getDrawingBufferColorSpace(e),t.unpackColorSpace=it._getUnpackColorSpace()}}class Wi{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const mv=new Ac(-1,1,1,-1,0,1);class gv extends nt{constructor(){super(),this.setAttribute("position",new Be([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Be([0,2,0,0,2,0],2))}}const xv=new gv;class Bo{constructor(e){this._mesh=new at(xv,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,mv)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class vv extends Wi{constructor(e,t,n=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Ue}render(e,t,n){const s=e.autoClear;e.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=s}}const ho={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class Tf extends Wi{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof gt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Pn.clone(e.uniforms),this.material=new gt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new Bo(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class eu extends Wi{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){const s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}}class _v extends Wi{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class Mv{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const n=e.getSize(new ne);this._width=n.width,this._height=n.height,t=new Kt(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:wn}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Tf(ho),this.copyPass.material.blending=qn,this.clock=new Lm}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let n=!1;for(let s=0,r=this.passes.length;s<r;s++){const o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),o.needsSwap){if(n){const a=this.renderer.getContext(),c=this.renderer.state.buffers.stencil;c.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),c.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}eu!==void 0&&(o instanceof eu?n=!0:o instanceof _v&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new ne);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}const yv={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Ue(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class Es extends Wi{constructor(e,t=1,n,s){super(),this.strength=t,this.radius=n,this.threshold=s,this.resolution=e!==void 0?new ne(e.x,e.y):new ne(256,256),this.clearColor=new Ue(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new Kt(r,o,{type:wn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){const u=new Kt(r,o,{type:wn});u.texture.name="UnrealBloomPass.h"+h,u.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(u);const f=new Kt(r,o,{type:wn});f.texture.name="UnrealBloomPass.v"+h,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),r=Math.round(r/2),o=Math.round(o/2)}const a=yv;this.highPassUniforms=Pn.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new gt({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];const c=[3,5,7,9,11];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(c[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new ne(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;const l=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=l,this.bloomTintColors=[new R(1,1,1),new R(1,1,1),new R(1,1,1),new R(1,1,1),new R(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=Pn.clone(ho.uniforms),this.blendMaterial=new gt({uniforms:this.copyUniforms,vertexShader:ho.vertexShader,fragmentShader:ho.fragmentShader,blending:Ni,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new Ue,this._oldClearAlpha=1,this._basic=new dn,this._fsQuad=new Bo(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new ne(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(e,t,n,s,r){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();const o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let a=this.renderTargetBright;for(let c=0;c<this.nMips;c++)this._fsQuad.material=this.separableBlurMaterials[c],this.separableBlurMaterials[c].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[c].uniforms.direction.value=Es.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[c]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[c].uniforms.colorTexture.value=this.renderTargetsHorizontal[c].texture,this.separableBlurMaterials[c].uniforms.direction.value=Es.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[c]),e.clear(),this._fsQuad.render(e),a=this.renderTargetsVertical[c];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(n),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=o}_getSeparableBlurMaterial(e){const t=[];for(let n=0;n<e;n++)t.push(.39894*Math.exp(-.5*n*n/(e*e))/e);return new gt({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new ne(.5,.5)},direction:{value:new ne(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
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
				}`})}_getCompositeMaterial(e){return new gt({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}}Es.BlurDirectionX=new ne(1,0);Es.BlurDirectionY=new ne(0,1);const Sv={name:"FXAAShader",uniforms:{tDiffuse:{value:null},resolution:{value:new ne(1/1024,1/512)}},vertexShader:`

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

		}`};class bv extends Tf{constructor(){super(Sv)}setSize(e,t){this.material.uniforms.resolution.value.set(1/e,1/t)}}function wv(){const i=new bv;return i.material.fragmentShader=i.material.fragmentShader.replace("float _SubpixelBlending = 1.0;","float _SubpixelBlending = 0.35;"),i}function Ev(i){const e=new Mv(i),t=i.getContext(),n=t.getInternalformatParameter(t.RENDERBUFFER,t.RGBA16F,t.SAMPLES)||[],s=2,r=Math.max(0,...Array.from(n).filter(o=>o<=s));return e.renderTarget1.samples=e.renderTarget2.samples=r,e}function Tv(i,e){const t=new Es(new ne(i,e),.32,.36,1.1),n=t.materialHighPassFilter;return n.fragmentShader=`
    float finiteBloomChannel(float value){
      return value>=0.0 ? min(value,64.0) : 0.0;
    }
    ${n.fragmentShader}`.replace("vec4 texel = texture2D( tDiffuse, vUv );",`vec4 texel = texture2D( tDiffuse, vUv );
       texel=vec4(finiteBloomChannel(texel.r),finiteBloomChannel(texel.g),finiteBloomChannel(texel.b),1.0);`),t}const Yr={defines:{SMAA_THRESHOLD:"0.1"},uniforms:{tDiffuse:{value:null},resolution:{value:new ne(1/1024,1/512)}},vertexShader:`

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

		}`},jr={defines:{SMAA_MAX_SEARCH_STEPS:"8",SMAA_AREATEX_MAX_DISTANCE:"16",SMAA_AREATEX_PIXEL_SIZE:"( 1.0 / vec2( 160.0, 560.0 ) )",SMAA_AREATEX_SUBTEX_SIZE:"( 1.0 / 7.0 )"},uniforms:{tDiffuse:{value:null},tArea:{value:null},tSearch:{value:null},resolution:{value:new ne(1/1024,1/512)}},vertexShader:`

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

		}`},Da={uniforms:{tDiffuse:{value:null},tColor:{value:null},resolution:{value:new ne(1/1024,1/512)}},vertexShader:`

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

		}`};class Av extends Wi{constructor(){super(),this._edgesRT=new Kt(1,1,{depthBuffer:!1,type:wn}),this._edgesRT.texture.name="SMAAPass.edges",this._weightsRT=new Kt(1,1,{depthBuffer:!1,type:wn}),this._weightsRT.texture.name="SMAAPass.weights";const e=this,t=new Image;t.src=this._getAreaTexture(),t.onload=function(){e._areaTexture.needsUpdate=!0},this._areaTexture=new Tt,this._areaTexture.name="SMAAPass.area",this._areaTexture.image=t,this._areaTexture.minFilter=on,this._areaTexture.generateMipmaps=!1,this._areaTexture.flipY=!1;const n=new Image;n.src=this._getSearchTexture(),n.onload=function(){e._searchTexture.needsUpdate=!0},this._searchTexture=new Tt,this._searchTexture.name="SMAAPass.search",this._searchTexture.image=n,this._searchTexture.magFilter=Vt,this._searchTexture.minFilter=Vt,this._searchTexture.generateMipmaps=!1,this._searchTexture.flipY=!1,this._uniformsEdges=Pn.clone(Yr.uniforms),this._materialEdges=new gt({defines:Object.assign({},Yr.defines),uniforms:this._uniformsEdges,vertexShader:Yr.vertexShader,fragmentShader:Yr.fragmentShader}),this._uniformsWeights=Pn.clone(jr.uniforms),this._uniformsWeights.tDiffuse.value=this._edgesRT.texture,this._uniformsWeights.tArea.value=this._areaTexture,this._uniformsWeights.tSearch.value=this._searchTexture,this._materialWeights=new gt({defines:Object.assign({},jr.defines),uniforms:this._uniformsWeights,vertexShader:jr.vertexShader,fragmentShader:jr.fragmentShader}),this._uniformsBlend=Pn.clone(Da.uniforms),this._uniformsBlend.tDiffuse.value=this._weightsRT.texture,this._materialBlend=new gt({uniforms:this._uniformsBlend,vertexShader:Da.vertexShader,fragmentShader:Da.fragmentShader}),this._fsQuad=new Bo(null)}render(e,t,n){this._uniformsEdges.tDiffuse.value=n.texture,this._fsQuad.material=this._materialEdges,e.setRenderTarget(this._edgesRT),this.clear&&e.clear(),this._fsQuad.render(e),this._fsQuad.material=this._materialWeights,e.setRenderTarget(this._weightsRT),this.clear&&e.clear(),this._fsQuad.render(e),this._uniformsBlend.tColor.value=n.texture,this._fsQuad.material=this._materialBlend,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(),this._fsQuad.render(e))}setSize(e,t){this._edgesRT.setSize(e,t),this._weightsRT.setSize(e,t),this._materialEdges.uniforms.resolution.value.set(1/e,1/t),this._materialWeights.uniforms.resolution.value.set(1/e,1/t),this._materialBlend.uniforms.resolution.value.set(1/e,1/t)}dispose(){this._edgesRT.dispose(),this._weightsRT.dispose(),this._areaTexture.dispose(),this._searchTexture.dispose(),this._materialEdges.dispose(),this._materialWeights.dispose(),this._materialBlend.dispose(),this._fsQuad.dispose()}_getAreaTexture(){return"data:image/png;base64,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"}_getSearchTexture(){return"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEIAAAAhCAAAAABIXyLAAAAAOElEQVRIx2NgGAWjYBSMglEwEICREYRgFBZBqDCSLA2MGPUIVQETE9iNUAqLR5gIeoQKRgwXjwAAGn4AtaFeYLEAAAAASUVORK5CYII="}}const Kr={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};class Cv extends Wi{constructor(){super(),this.uniforms=Pn.clone(Kr.uniforms),this.material=new xm({name:Kr.name,uniforms:this.uniforms,vertexShader:Kr.vertexShader,fragmentShader:Kr.fragmentShader}),this._fsQuad=new Bo(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},it.getTransfer(this._outputColorSpace)===lt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Uu?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Nu?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Fu?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===sc?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===zu?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Bu?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===Ou&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}const tu={lat:13.733,lon:100.502};function bo(i,e){return{x:(i-tu.lon)*108140,z:(tu.lat-e)*111320}}function Jt(i,e,t){return Math.max(e,Math.min(t,i))}const Zr=(i,e,t)=>i+(e-i)*t;function wo(i,e){return Math.atan2(Math.sin(i-e),Math.cos(i-e))}class nu{constructor(e){this.points=e.map(t=>({...bo(t[0],t[1]),width:t[2]||310})),this.length=0,this.segments=this.points.slice(1).map((t,n)=>{const s=this.points[n],r=t.x-s.x,o=t.z-s.z,a=Math.hypot(r,o),c={a:s,b:t,dx:r,dz:o,len:a,start:this.length};return this.length+=a,c})}sample(e,t=0){const n=Jt(e,0,this.length);let s=0,r=this.segments.length-1;for(;s<r;){const h=s+r>>1,u=this.segments[h];u.start+u.len<n?s=h+1:r=h}const o=this.segments[s],a=Jt((n-o.start)/o.len,0,1),c=-o.dz/o.len,l=o.dx/o.len;return{x:Zr(o.a.x,o.b.x,a)+c*t,z:Zr(o.a.z,o.b.z,a)+l*t,heading:Math.atan2(-o.dx,-o.dz),nx:c,nz:l,width:Zr(o.a.width,o.b.width,a),distance:n}}nearest(e,t){let n={distanceSquared:1/0};for(const s of this.segments){const r=Jt(((e-s.a.x)*s.dx+(t-s.a.z)*s.dz)/(s.len*s.len),0,1),o=s.a.x+s.dx*r,a=s.a.z+s.dz*r,c=(e-o)**2+(t-a)**2;if(c<n.distanceSquared){const l=-s.dz/s.len,h=s.dx/s.len;n={x:o,z:a,nx:l,nz:h,offset:(e-o)*l+(t-a)*h,distance:s.start+r*s.len,width:Zr(s.a.width,s.b.width,r),heading:Math.atan2(-s.dx,-s.dz),distanceSquared:c}}}return n}constrain(e,t=4){const n=this.nearest(e.x,e.z),s=n.width/2-t,r=Math.abs(n.offset)-s;let o=0;if(r>0){const c=Math.sign(n.offset),l=n.nx*c,h=n.nz*c;e.x-=l*r,e.z-=h*r;const u=e.vx*l+e.vz*h;u>0&&(o=u,e.vx-=l*u*1.25,e.vz-=h*u*1.25)}const a=n.distance<1?this.sample(0):n.distance>this.length-1?this.sample(this.length):null;if(a){const c={x:-Math.sin(a.heading),z:-Math.cos(a.heading)},l=n.distance<1?-1:1,h=(e.x-a.x)*c.x+(e.z-a.z)*c.z;if(h*l>0){e.x-=c.x*h,e.z-=c.z*h;const u=(e.vx*c.x+e.vz*c.z)*l;u>0&&(e.vx-=c.x*l*u*1.1,e.vz-=c.z*l*u*1.1,o=Math.max(o,u))}}return o}}const Rv=[{id:"arun",name:"Wat Arun",thai:"วัดอรุณ",lon:100.49015,lat:13.74369,side:1},{id:"tien",name:"Tha Tien",thai:"ท่าเตียน",lon:100.4904,lat:13.746,side:-1},{id:"kalaya",name:"Wat Kalayanamit",thai:"วัดกัลยาณมิตร",lon:100.49378,lat:13.73985,side:1},{id:"flower",name:"Flower Market",thai:"ปากคลองตลาด",lon:100.49656,lat:13.74073,side:-1},{id:"memorial",name:"Memorial Bridge",thai:"สะพานพุทธ",lon:100.49912,lat:13.73911,side:-1},{id:"chinatown",name:"Ratchawong",thai:"ท่าราชวงศ์",lon:100.50377,lat:13.73806,side:-1},{id:"lhong",name:"Lhong 1919",thai:"ล้ง 1919",lon:100.50712,lat:13.73447,side:1},{id:"rivercity",name:"River City",thai:"ริเวอร์ ซิตี้",lon:100.51374,lat:13.73033,side:-1},{id:"icon",name:"ICONSIAM",thai:"ไอคอนสยาม",lon:100.51255,lat:13.72665,side:1},{id:"oriental",name:"Oriental Pier",thai:"ท่าโอเรียนเต็ล",lon:100.514,lat:13.72355,side:-1},{id:"river",name:"The River",thai:"เดอะ ริเวอร์",lon:100.51115,lat:13.72139,side:1},{id:"sathorn",name:"Sathorn Pier",thai:"ท่าสาทร",lon:100.5129,lat:13.71895,side:-1}];function Pv(i){return Rv.map((e,t)=>{const n=bo(e.lon,e.lat),s=i.nearest(n.x,n.z),r=Jt(s.distance,65,i.length-65),o=i.sample(r),a=e.side;return{...e,index:t,distance:r,x:o.x+o.nx*a*(o.width/2-26),z:o.z+o.nz*a*(o.width/2-26),bankX:o.x+o.nx*a*(o.width/2+2),bankZ:o.z+o.nz*a*(o.width/2+2),heading:o.heading,nx:o.nx*a,nz:o.nz*a}})}function Lv(i){return{x:i.x+i.nx*15,z:i.z+i.nz*15,width:9,length:17,heading:Math.atan2(i.nx,i.nz)-Math.PI/2,mass:1e4,vx:0,vz:0}}const _n=Object.freeze({speed:34,boostSpeed:53,acceleration:13.8,boostAcceleration:24,brake:41,reverseSpeed:7,reverseAcceleration:9,steer:1.05,boostSteer:.254,fatalImpact:14});class Dv{constructor(e=0,t=0,n=0){this.reset(e,t,n)}reset(e,t,n){Object.assign(this,{x:e,z:t,heading:n,vx:0,vz:0,yaw:0,speed:0,slip:0,boosting:!1,drifting:!1,brakeHold:0})}launch(e,t){const n=e.sample(t.distance);this.reset(n.x,n.z,n.heading)}update(e,t={}){const n=Jt(t.steer||0,-1,1),s=t.gas?1:0,r=!!t.brake,o=-Math.sin(this.heading),a=-Math.cos(this.heading),c=Math.cos(this.heading),l=-Math.sin(this.heading);let h=this.vx*o+this.vz*a,u=this.vx*c+this.vz*l;if(this.boosting=!!t.boost&&s>0&&!r&&h>1,this.drifting=!this.boosting&&!!t.drift&&Math.abs(n)>.15&&Math.abs(h)>8&&!r,r)h>.35?(h=Math.max(0,h-_n.brake*e),this.brakeHold=0):(this.brakeHold+=e,this.brakeHold>.1?h=Math.max(-_n.reverseSpeed,h-_n.reverseAcceleration*e):h=0),u*=Math.exp(-8*e);else if(this.brakeHold=0,s){const d=this.boosting?_n.boostSpeed:_n.speed;h=h>d?Math.max(d,h-7*e):Math.min(d,h+(this.boosting?_n.boostAcceleration:_n.acceleration)*e)}else h*=Math.exp(-.38*e);u*=Math.exp(-(this.drifting?.7:this.boosting?2.6:5.3)*e);const f=-n*(this.boosting?_n.boostSteer:_n.steer)*Jt(Math.abs(h)/4,0,1)*(h<0?-1:1)*(this.drifting?1.48:1);this.yaw+=(f-this.yaw)*(1-Math.exp(-(this.boosting?12:7)*e)),this.vx=o*h+c*u,this.vz=a*h+l*u,this.heading+=this.yaw*e,this.x+=this.vx*e,this.z+=this.vz*e,this.speed=this.vx*-Math.sin(this.heading)+this.vz*-Math.cos(this.heading),this.slip=this.vx*Math.cos(this.heading)-this.vz*Math.sin(this.heading)}}function iu(i){const e=Math.max(0,(i.length-i.width)/2),t=-Math.sin(i.heading),n=-Math.cos(i.heading);return[{x:i.x-t*e,z:i.z-n*e},{x:i.x+t*e,z:i.z+n*e}]}function su(i,e,t){const n=t.x-e.x,s=t.z-e.z,r=Jt(((i.x-e.x)*n+(i.z-e.z)*s)/(n*n+s*s||1),0,1);return{x:e.x+r*n,z:e.z+r*s}}function Ho(i,e){const[t,n]=iu(i),[s,r]=iu(e);let o,a=1/0;const c=(M,_)=>M.x*_.z-M.z*_.x,l=(M,_)=>({x:M.x-_.x,z:M.z-_.z}),h=l(n,t),u=l(r,s),f=l(s,t),d=c(h,u);if(Math.abs(d)>1e-8){const M=c(f,u)/d,_=c(f,h)/d;M>=0&&M<=1&&_>=0&&_<=1&&(o=[{x:t.x+h.x*M,z:t.z+h.z*M},{x:t.x+h.x*M,z:t.z+h.z*M}],a=0)}for(const M of[t,n]){const _=su(M,s,r),v=Math.hypot(M.x-_.x,M.z-_.z);v<a&&(a=v,o=[M,_])}for(const M of[s,r]){const _=su(M,t,n),v=Math.hypot(M.x-_.x,M.z-_.z);v<a&&(a=v,o=[_,M])}const m=a-(i.width+e.width)/2;let x=o[0].x-o[1].x,g=o[0].z-o[1].z,p=Math.hypot(x,g);return p<.001&&(x=i.x-e.x,g=i.z-e.z,p=Math.hypot(x,g),p<.001&&(x=Math.cos(i.heading),g=-Math.sin(i.heading),p=1)),{gap:m,nx:x/p,nz:g/p}}function Af(i,e,t=Ho({...i,length:12,width:2.5},e)){if(t.gap>=0)return 0;i.x+=t.nx*(-t.gap+.02),i.z+=t.nz*(-t.gap+.02);const n=(i.vx-e.vx)*t.nx+(i.vz-e.vz)*t.nz;if(n>=0)return 0;const s=e.mass/(e.mass+1.2),r=-n*(.65+.7*s);return i.vx+=r*t.nx,i.vz+=r*t.nz,i.speed=-i.vx*Math.sin(i.heading)-i.vz*Math.cos(i.heading),i.slip=i.vx*Math.cos(i.heading)-i.vz*Math.sin(i.heading),e.slow=Math.max(e.slow||0,Jt(-n/(e.mass+2),0,3)),-n*s}function Iv(i,e,t=0){const n=e.x-i.x,s=e.z-i.z;return Math.hypot(n,s)<.01?t:t+wo(Math.atan2(n,-s)+i.heading,t)}class Uv{constructor(e,t=Math.random){this.piers=e,this.random=t,this.reset()}reset(e=!1){Object.assign(this,{phase:"seeking",free:e,remaining:180,earnings:0,deliveries:0,tips:0,combo:0,comboTime:0,fare:null,dockHold:0,lastDock:null,finished:!1,flash:null,cooldowns:new Map,clock:0})}update(e,t){if(this.finished)return null;if(this.clock+=e,this.free||(this.remaining=Math.max(0,this.remaining-e)),this.comboTime>0&&(this.comboTime-=e,this.comboTime<=0&&(this.combo=0)),!this.free&&this.remaining===0)return this.finished=!0,this.phase="ended",this.fare=null,{type:"ended"};if(this.fare&&(this.fare.time=Math.max(0,this.fare.time-e),this.fare.time===0))return this.fare=null,this.phase="seeking",this.dockHold=0,this.tips=0,this.combo=0,{type:"late"};const n=this.fare?.to||this.piers.find(r=>(this.cooldowns.get(r.id)||0)<=this.clock&&Math.hypot(r.x-t.x,r.z-t.z)<21),s=Math.hypot(t.vx,t.vz)<2.8;if(n&&Math.hypot(n.x-t.x,n.z-t.z)<21&&s){if(this.dockHold+=e,this.dockHold>.65){if(this.dockHold=0,this.fare){const l=this.fare.base+this.tips+Math.round(this.fare.time*1.9);return this.earnings+=l,this.deliveries++,this.remaining+=this.free?0:12,this.fare=null,this.phase="seeking",this.tips=0,this.combo=0,this.cooldowns.set(n.id,this.clock+7),this.lastDock=n,{type:"delivered",paid:l}}let r=this.piers.filter(l=>l.id!==n.id&&Math.abs(l.distance-n.distance)>260&&Math.abs(l.distance-n.distance)<2100);if(this.deliveries===0&&n.id==="arun"){const l=r.filter(h=>h.distance>n.distance&&h.distance-n.distance<1050);l.length&&(r=l)}const o=(r.length?r:this.piers.filter(l=>l.id!==n.id))[Math.floor(this.random()*(r.length||this.piers.length-1))];if(!o)return null;const a=Math.max(Math.abs(o.distance-n.distance),Math.hypot(o.x-n.x,o.z-n.z)),c=26+a/21;return this.fare={from:n,to:o,base:Math.round(95+a*.1),time:c,total:c},this.phase="carrying",this.tips=0,{type:"pickup",to:o}}}else this.dockHold=0;return null}stunt(e){if(this.finished||!this.fare)return 0;this.combo=Math.min(this.combo+1,8),this.comboTime=5;const t=(e==="slide"?12:20)*this.combo;return this.tips+=t,t}hitBoat(e,t){if(this.finished)return null;const n=Ho({...e,length:12,width:2.5},t);if(n.gap>=0)return null;const s=Af(e,t,n);return s<_n.fatalImpact?{type:"bumped",severity:s}:(this.finished=!0,this.phase="crashed",this.fare=null,this.dockHold=0,this.tips=0,this.combo=0,this.comboTime=0,{type:"crashed",severity:s})}crash(){this.combo=0,this.comboTime=0,this.fare&&(this.tips=Math.max(0,this.tips-25))}}const Vl="bangkok-longtail:scores:v1";function Wl(i){return Array.isArray(i)?i.filter(e=>e&&Number.isFinite(e.score)&&e.score>0&&e.score<1e7&&Number.isInteger(e.deliveries)&&e.deliveries>=0&&typeof e.date=="string").sort((e,t)=>t.score-e.score).slice(0,5):[]}function Nv(i,e,t,n=!1){let s=[];try{s=Wl(JSON.parse(i.getItem(Vl)||"[]"))}catch{}if(n||e<=0)return s;const r=Wl([...s,{score:e,deliveries:t,date:new Date().toISOString()}]);try{i.setItem(Vl,JSON.stringify(r))}catch{}return r}const Ia=Object.freeze({memorial:{thai:"สะพานพระพุทธยอดฟ้า",english:"MEMORIAL BRIDGE"},pokklao:{thai:"สะพานพระปกเกล้า",english:"PHRA POK KLAO BRIDGE"},taksin:{thai:"สะพานสมเด็จพระเจ้าตากสินมหาราช",english:"KING TAKSIN BRIDGE"},skypark:{thai:"สวนลอยฟ้าเจ้าพระยา",english:"CHAO PHRAYA SKY PARK"}});function Ua(i,e,t=30,n=3.4,{pier:s=!1}={}){const r=document.createElement("canvas");r.width=1536,r.height=Math.round(1536*n/t);const o=r.getContext("2d"),a=r.width,c=r.height;o.fillStyle=s?"#174f58":"#193d59",o.fillRect(0,0,a,c),o.strokeStyle="#e6e0c9",o.lineWidth=2,o.strokeRect(9,9,a-18,c-18),o.fillStyle="#f2eddb",o.textAlign="center",o.textBaseline="middle";let l=c*.46;for(o.font=`600 ${l}px "Noto Sans Thai",sans-serif`;o.measureText(i).width>a-80&&l>c*.24;)l-=1,o.font=`600 ${l}px "Noto Sans Thai",sans-serif`;o.fillText(i,a/2,c*.39),o.font=`500 ${c*.2}px Barlow,Arial,sans-serif`,o.fillStyle="#c5cfd0",o.fillText(e,a/2,c*.79,a-80);const h=new Dn(r);h.colorSpace=vt,h.anisotropy=8;const u=new kt;u.name=`sign:${i}`;const f=new at(new ln(t+.24,n+.2,.2),new Et({color:5464680,roughness:.7}));u.add(f);const d=new at(new Xt(t,n),new Et({map:h,emissiveMap:h,emissive:14542829,emissiveIntensity:.55,roughness:.78}));return d.position.z=.115,u.add(d),u}class Fv extends at{constructor(e,t={}){super(e),this.isWater=!0;const n=this,s=t.textureWidth!==void 0?t.textureWidth:512,r=t.textureHeight!==void 0?t.textureHeight:512,o=t.clipBias!==void 0?t.clipBias:0,a=t.alpha!==void 0?t.alpha:1,c=t.time!==void 0?t.time:0,l=t.waterNormals!==void 0?t.waterNormals:null,h=t.sunDirection!==void 0?t.sunDirection:new R(.70707,.70707,0),u=new Ue(t.sunColor!==void 0?t.sunColor:16777215),f=new Ue(t.waterColor!==void 0?t.waterColor:8355711),d=t.eye!==void 0?t.eye:new R(0,0,0),m=t.distortionScale!==void 0?t.distortionScale:20,x=t.side!==void 0?t.side:Zn,g=t.fog!==void 0?t.fog:!1,p=new li,M=new R,_=new R,v=new R,w=new Ze,A=new R(0,0,-1),C=new st,P=new R,S=new R,b=new st,L=new Ze,U=new Bt,N=new Kt(s,r),V={name:"MirrorShader",uniforms:Pn.merge([ye.fog,ye.lights,{normalSampler:{value:null},mirrorSampler:{value:null},alpha:{value:1},time:{value:0},size:{value:1},distortionScale:{value:20},textureMatrix:{value:new Ze},sunColor:{value:new Ue(8355711)},sunDirection:{value:new R(.70707,.70707,0)},eye:{value:new R},waterColor:{value:new Ue(5592405)}}]),vertexShader:`
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
				}`},z=new gt({name:V.name,uniforms:Pn.clone(V.uniforms),vertexShader:V.vertexShader,fragmentShader:V.fragmentShader,lights:!0,side:x,fog:g});z.uniforms.mirrorSampler.value=N.texture,z.uniforms.textureMatrix.value=L,z.uniforms.alpha.value=a,z.uniforms.time.value=c,z.uniforms.normalSampler.value=l,z.uniforms.sunColor.value=u,z.uniforms.waterColor.value=f,z.uniforms.sunDirection.value=h,z.uniforms.distortionScale.value=m,z.uniforms.eye.value=d,n.material=z,n.onBeforeRender=function(W,$,G){if(_.setFromMatrixPosition(n.matrixWorld),v.setFromMatrixPosition(G.matrixWorld),w.extractRotation(n.matrixWorld),M.set(0,0,1),M.applyMatrix4(w),P.subVectors(_,v),P.dot(M)>0)return;P.reflect(M).negate(),P.add(_),w.extractRotation(G.matrixWorld),A.set(0,0,-1),A.applyMatrix4(w),A.add(v),S.subVectors(_,A),S.reflect(M).negate(),S.add(_),U.position.copy(P),U.up.set(0,1,0),U.up.applyMatrix4(w),U.up.reflect(M),U.lookAt(S),U.far=G.far,U.updateMatrixWorld(),U.projectionMatrix.copy(G.projectionMatrix),L.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),L.multiply(U.projectionMatrix),L.multiply(U.matrixWorldInverse),p.setFromNormalAndCoplanarPoint(M,_),p.applyMatrix4(U.matrixWorldInverse),C.set(p.normal.x,p.normal.y,p.normal.z,p.constant);const ce=U.projectionMatrix;b.x=(Math.sign(C.x)+ce.elements[8])/ce.elements[0],b.y=(Math.sign(C.y)+ce.elements[9])/ce.elements[5],b.z=-1,b.w=(1+ce.elements[10])/ce.elements[14],C.multiplyScalar(2/C.dot(b)),ce.elements[2]=C.x,ce.elements[6]=C.y,ce.elements[10]=C.z+1-o,ce.elements[14]=C.w,d.setFromMatrixPosition(G.matrixWorld);const xe=W.getRenderTarget(),le=W.xr.enabled,Oe=W.shadowMap.autoUpdate;n.visible=!1,W.xr.enabled=!1,W.shadowMap.autoUpdate=!1,W.setRenderTarget(N),W.state.buffers.depth.setMask(!0),W.autoClear===!1&&W.clear(),W.render($,U),n.visible=!0,W.xr.enabled=le,W.shadowMap.autoUpdate=Oe,W.setRenderTarget(xe);const Fe=G.viewport;Fe!==void 0&&W.state.viewport(Fe)}}}const Xl=new R(.3,.26,.918).normalize();function Ov(i,e=new R){return i.updateMatrixWorld(),e.set(.4,.54,.5).unproject(i).sub(i.position).normalize()}function zv(i){const e=new gt({side:Gt,depthWrite:!1,depthTest:!1,uniforms:{time:{value:0},moonDirection:{value:Xl.clone()}},vertexShader:`varying vec3 direction;
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
      }`}),t=new at(new Zt(100,48,24),e);t.name="infinite-night-sky",t.renderOrder=-1e3,t.frustumCulled=!1,i.add(t);const n=e.uniforms.moonDirection.value,s=new Mf(10271970,.62);return s.name="moonlight",s.position.copy(n).multiplyScalar(1e3),i.add(s),{sky:t,direction:n,moonlight:s,update(r,o){e.uniforms.time.value=r,o&&Ov(o,n),s.position.copy(n).multiplyScalar(1e3)}}}function Bv(){const e=new Uint8Array(262144);for(let n=0;n<256;n++)for(let s=0;s<256;s++){const r=s/256*Math.PI*2,o=n/256*Math.PI*2;let a=0,c=0;for(let u=1;u<=10;u++){const f=u%3+1,d=u*7%11-5,m=r*f+o*d+u*1.91;a+=Math.cos(m)*f/(u+3),c+=Math.cos(m)*d/(u+3)}const l=new R(-a*.22,-c*.22,1).normalize(),h=(n*256+s)*4;e[h]=(l.x*.5+.5)*255,e[h+1]=(l.y*.5+.5)*255,e[h+2]=(l.z*.5+.5)*255,e[h+3]=255}const t=new Io(e,256,256);return t.wrapS=t.wrapT=pi,t.generateMipmaps=!0,t.minFilter=Sn,t.magFilter=on,t.anisotropy=4,t.needsUpdate=!0,t}function Hv(i,e){const t=e?6:12,n=new Xt(2,2,e?64:112,e?64:112),s=n.attributes.position,r=l=>Math.sign(l)*(Math.abs(l)<=.85?Math.abs(l)*320:272+Math.pow((Math.abs(l)-.85)/.15,3)*8728);for(let l=0;l<s.count;l++)s.setXY(l,r(s.getX(l)),r(s.getY(l)));n.computeBoundingSphere();const o=new Fv(n,{textureWidth:e?256:512,textureHeight:e?256:512,waterNormals:Bv(),sunDirection:Xl.clone(),sunColor:8887216,waterColor:1059112,distortionScale:1.8,fog:!0,clipBias:.002});o.rotation.x=-Math.PI/2,o.position.y=.04,o.name="chao-phraya-water";const a=o.material,c=a.uniforms.mirrorSampler.value;return c.generateMipmaps=!0,c.minFilter=Sn,a.vertexShader=a.vertexShader.replace("uniform float time;","uniform float time;uniform vec3 eye;").replace("worldPosition = mirrorCoord.xyzw;",`float distanceToBoat=length(mirrorCoord.xz-eye.xz);
      float swell=(sin(mirrorCoord.x*.47+mirrorCoord.z*.28+time*1.1)*.095+sin(mirrorCoord.z*.73-mirrorCoord.x*.22-time*1.42)*.038)*exp(-distanceToBoat*.004);
      mirrorCoord.y+=swell;worldPosition=mirrorCoord;`).replace("modelViewMatrix * vec4( position, 1.0 )","viewMatrix * worldPosition"),a.uniforms.riverLamps={value:Array.from({length:t},()=>new st)},a.uniforms.riverColors={value:Array.from({length:t},()=>new Ue(0))},a.fragmentShader=a.fragmentShader.replace("uniform sampler2D mirrorSampler;",`uniform sampler2D mirrorSampler;uniform vec4 riverLamps[${t}];uniform vec3 riverColors[${t}];`).replace(/vec4 getNoise\( vec2 uv \) \{[\s\S]*?return noise \* 0\.5 - 1\.0;\s*\}/,`vec4 getNoise(vec2 uv){
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
      outgoingLight+=vec3(.012,.021,.022)*chop;`),i.add(o),{water:o,update(l,h,u,f=Xl){a.uniforms.time.value=l,a.uniforms.sunDirection.value.copy(f),o.position.x=h.position.x,o.position.z=h.position.z;const d=u.map(m=>({s:m,d:(m.x-h.position.x)**2+(m.z-h.position.z)**2})).sort((m,x)=>m.d-x.d).slice(0,t);for(let m=0;m<t;m++){const x=d[m]?.s;a.uniforms.riverLamps.value[m].set(x?.x||0,x?.y||0,x?.z||0,x?.power||0),a.uniforms.riverColors.value[m].set(x?.color||0)}}}}function Cf(i,e,t,n=new Ze){let s;if(t.isMeshBasicMaterial&&!t.map&&Math.max(t.color.r,t.color.g,t.color.b)>1.05)s=t.color.clone();else if(t.emissiveIntensity>=2.5&&!t.emissiveMap)s=t.emissive.clone().multiplyScalar(t.emissiveIntensity);else return;e.computeBoundingBox();const r=e.boundingBox,o=r.getCenter(new R),a=r.getSize(new R),c=new R().setFromMatrixScale(n),l=a.clone().multiply(c).toArray(),h=[0,1,2].sort((g,p)=>l[p]-l[g]),u=h[0],f=l[u]>1&&l[u]>l[h[1]]*4,d=f?Math.max(l[h[1]],l[h[2]]):l[u];if(d>2.5||d<=0)return;const m=o.clone(),x=o.clone();return f&&(m.setComponent(u,r.min.getComponent(u)),x.setComponent(u,r.max.getComponent(u))),i.push({a:m.applyMatrix4(n).toArray(),b:x.applyMatrix4(n).toArray(),width:d,color:s.toArray()}),!0}function kv(i,e){const t=new R().setFromMatrixScale(e).x;return i.map(n=>({...n,a:new R(...n.a).applyMatrix4(e).toArray(),b:new R(...n.b).applyMatrix4(e).toArray(),width:n.width*t}))}function Gv(i,e,t){const n=t==="steel",s=[],r=(c,l,h,u)=>s.push({a:[-i/2,c,l],b:[i/2,c,l],width:h,color:u}),o=new Ue(16763779).multiplyScalar(2.5).toArray(),a=n?o:new Ue(6604478).multiplyScalar(1.6).toArray();for(const c of[-1,1])r(e+.55,c*(n?9:14.75),.22,a),n||r(e+4.75,c*3.25,.2,o);return s}function Vv(i){const e=[],t=new Ue(16764040).multiplyScalar(3.2).toArray(),n=(o,a=t,c=.2)=>e.push({a:o,b:[...o],width:c,color:a}),s=(o,a,c=.1,l=t)=>e.push({a:o,b:a,width:c,color:l}),r=(o,a,c,l)=>{n([-o,a,c],new Ue(16723993).multiplyScalar(3).toArray()),n([o,a,c],new Ue(2485367).multiplyScalar(3).toArray()),n(l)};if(i==="cruise"){for(const[o,a,c,l]of[[1.57,11.68,43.7,1],[4.17,11.58,42.7,1.4],[6.63,10.28,39.2,1.8]])for(const h of[-1,1])s([h*a/2,o,l-c/2],[h*a/2,o,l+c/2],.075);for(const o of[-4.25,4.25])for(let a=0;a<25;a++){const c=a/24;n([o,9.125-Math.sin(c*Math.PI)*.59,-16.1+c*36.4],t,.134)}r(5.28,6.25,-16.8,[0,8.19,21.6]),n([0,10.24,-15.9])}else if(i==="electric"){const o=new Ue(7980767).multiplyScalar(2).toArray();for(const a of[-1,1])s([a*3.18,3.65,-9.25],[a*3.18,3.65,9.25],.09,o);r(3.04,3.6,-7.2,[0,3.8,9])}else if(i==="ferry"){for(const o of[-1,1])s([o*2.36,3.24,-9.3],[o*2.36,3.24,10.7],.08);r(2.28,3.32,-9.1,[0,3.52,12.6])}else if(i==="longtail"){for(const o of[-2.74,2.91])s([-.83,1.99,o],[.83,1.99,o],.048);r(1.08,2.06,-2.66,[0,2.26,4.7])}else if(i==="tug"){r(1.68,4.23,-3.49,[0,1.71,7.42]);for(const o of[5.67,6.65])n([0,o,-2.18]);n([0,2.79,.26])}else i==="barge"?r(5.75,1.42,-20.9,[-4.66,3.14,21.7]):n([0,.95,2.55],t,.148);return e}class Rf{constructor(e,t,{dynamic:n=!1,replacePhysical:s=!n}={}){this.fixtures=t,this.dynamic=n;const r=this.geometry=new Rm;r.setAttribute("position",new Be([0,-1,0,1,-1,0,0,1,0,1,1,0],3)),r.setIndex([0,1,2,2,1,3]),r.instanceCount=t.length;for(const[a,c]of[["lightStart",3],["lightEnd",3],["lightColor",3],["lightWidth",1]]){const l=new Ol(new Float32Array(t.length*c),c);n&&a!=="lightColor"&&l.setUsage(Hi),r.setAttribute(a,l)}t.forEach((a,c)=>r.attributes.lightColor.setXYZ(c,...a.color)),this.material=new gt({transparent:!0,depthWrite:!1,depthTest:!0,blending:Ni,uniforms:{viewport:{value:new ne(1,1)},nearPlane:{value:.3},fogDensity:{value:e.fog?.density||0},replacePhysical:{value:s?1:0}},vertexShader:`attribute vec3 lightStart;attribute vec3 lightEnd;attribute vec3 lightColor;attribute float lightWidth;
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
        }`}),this.mesh=new at(r,this.material),this.mesh.name=n?"fleet-visible-lights":"riverbank-visible-lights",this.mesh.frustumCulled=!1;const o=new st;this.mesh.onBeforeRender=(a,c,l)=>{a.getCurrentViewport(o),this.material.uniforms.viewport.value.set(o.z,o.w),this.material.uniforms.nearPlane.value=l.near,this.material.uniformsNeedUpdate=!0},this.pointA=new R,this.pointB=new R,this.scale=new R,this.update(),e.add(this.mesh)}update(){let e=null,t=1;for(const[n,s]of this.fixtures.entries())this.pointA.fromArray(s.a),this.pointB.fromArray(s.b),s.parent?(s.parent!==e&&(s.parent.updateWorldMatrix(!0,!1),t=this.scale.setFromMatrixScale(s.parent.matrixWorld).x,e=s.parent),this.pointA.applyMatrix4(s.parent.matrixWorld),this.pointB.applyMatrix4(s.parent.matrixWorld)):(t=1,e=null),this.geometry.attributes.lightStart.setXYZ(n,this.pointA.x,this.pointA.y,this.pointA.z),this.geometry.attributes.lightEnd.setXYZ(n,this.pointB.x,this.pointB.y,this.pointB.z),this.geometry.attributes.lightWidth.setX(n,s.width*t);for(const n of["lightStart","lightEnd","lightWidth"])this.geometry.attributes[n].needsUpdate=!0}}function Ls(i,e=!1){const t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,c=new nt;let l=0;for(let h=0;h<i.length;++h){const u=i[h];let f=0;if(t!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const d in u.attributes){if(!n.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;r[d]===void 0&&(r[d]=[]),r[d].push(u.attributes[d]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const d in u.morphAttributes){if(!s.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[d]===void 0&&(o[d]=[]),o[d].push(u.morphAttributes[d])}if(e){let d;if(t)d=u.index.count;else if(u.attributes.position!==void 0)d=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,d,h),l+=d}}if(t){let h=0;const u=[];for(let f=0;f<i.length;++f){const d=i[f].index;for(let m=0;m<d.count;++m)u.push(d.getX(m)+h);h+=i[f].attributes.position.count}c.setIndex(u)}for(const h in r){const u=ru(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;c.setAttribute(h,u)}for(const h in o){const u=o[h][0].length;if(u===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[h]=[];for(let f=0;f<u;++f){const d=[];for(let x=0;x<o[h].length;++x)d.push(o[h][x][f]);const m=ru(d);if(!m)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;c.morphAttributes[h].push(m)}}return c}function ru(i){let e,t,n,s=-1,r=0;for(let l=0;l<i.length;++l){const h=i[l];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*t}const o=new e(r),a=new xt(o,t,n);let c=0;for(let l=0;l<i.length;++l){const h=i[l];if(h.isInterleavedBufferAttribute){const u=c/t;for(let f=0,d=h.count;f<d;f++)for(let m=0;m<t;m++){const x=h.getComponent(f,m);a.setComponent(f+u,m,x)}}else o.set(h.array,c);c+=h.count*t}return s!==void 0&&(a.gpuType=s),a}const Wv=new ln(1,1,1),Na=new Zt(1,8,6),Yt=(i,e=0,t=0)=>new Et({color:i,emissive:e,emissiveIntensity:t,roughness:.82}),ou=[16758632,16764815,15248999,9096909];function Xv(i){return()=>(i=Math.imul(i,1664525)+1013904223>>>0,i/4294967296)}class qv{constructor(){this.fixtures=[],this.parts=new Map,this.matrix=new Ze,this.q=new Wt,this.v=new R,this.s=new R}add(e,t,n,s,r,o=1,a=1,c=1,l=0){if(this.q.setFromAxisAngle(new R(0,1,0),l),this.matrix.compose(this.v.set(n,s,r),this.q,this.s.set(o,a,c)),Cf(this.fixtures,e,t,this.matrix))return;let h=e.clone().applyMatrix4(this.matrix);if(h.index){const u=h;h=u.toNonIndexed(),u.dispose()}this.parts.has(t)||this.parts.set(t,[]),this.parts.get(t).push(h)}box(e,t,n,s,r,o,a,c=0){this.add(Wv,e,t,n,s,r,o,a,c)}line(e,t,n,s=.05){const r=new R(...t),o=new R(...n),a=o.clone().sub(r),c=new mn(s,s,a.length(),5);c.applyQuaternion(new Wt().setFromUnitVectors(new R(0,1,0),a.normalize()));const l=r.add(o).multiplyScalar(.5);this.add(c,e,l.x,l.y,l.z),c.dispose()}finish(e){for(const[t,n]of this.parts){const s=Ls(n);n.forEach(o=>o.dispose());const r=new at(s,t);e.add(r)}this.parts.clear()}}const Fa=new Map,au=new Xt(9,2.25);function Yv(i,e){const t=`${i}:${e%3}`;if(Fa.has(t))return new at(au,Fa.get(t));const n=document.createElement("canvas");n.width=512,n.height=128;const s=n.getContext("2d");s.fillStyle="#090e13",s.fillRect(0,0,512,128),s.strokeStyle=["#dea353","#6ecfc1","#dd7160"][e%3],s.lineWidth=3,s.strokeRect(8,8,496,112),s.font='600 54px "Noto Sans Thai",Arial',s.textAlign="center",s.textBaseline="middle",s.shadowColor=s.strokeStyle,s.shadowBlur=8,s.fillStyle=s.strokeStyle,s.fillText(i,256,66,466);const r=new Dn(n);r.colorSpace=vt;const o=new Et({map:r,emissiveMap:r,emissive:16777215,emissiveIntensity:2.1,roughness:.85});return Fa.set(t,o),new at(au,o)}function jv(i,e,t,n){const s=Xv(73027),r=new kt;r.name="riverside-evening-life",i.add(r);const o=new qv,a=Yt(5849136),c=Yt(2042410);Yt(4803655);const l=[Yt(7877674),Yt(4543816),Yt(10191966)],h=Yt(6965041),u=Yt(1518368),f=Yt(1120025),d=[],m=ou.map(N=>Yt(12821890,N,3.5)),x=m[0],g=[];for(let N=50;N<e.length-60;N+=82)for(const V of[-1,1]){const z=e.sample(N),W=V*(z.width/2+7),$=e.sample(N,W),G=Math.atan2(-z.nx*V,-z.nz*V),ce={x:Math.cos(G),z:-Math.sin(G)},xe={x:z.nx*V,z:z.nz*V},le=(J,se,ve)=>[$.x+ce.x*J+xe.x*ve,se,$.z+ce.z*J+xe.z*ve],Oe=t.some(J=>J.side===V&&Math.abs(N-J.distance)<J.reserveLength+8),Fe=Math.floor(N/82),$e=!Oe&&Fe%4!==0,qe=m[Fe%m.length];if($e){g.push({distance:N,side:V});const J=le(0,3.25,4);o.box(a,...J,23,.35,10,G);for(const De of[-10,-5,0,5,10])o.box(a,...le(De,1,0),.4,4,.4),o.box(c,...le(De,4.1,-1.1),.12,1.9,.12);o.box(c,...le(0,5,-1.1),23,.1,.1,G);for(const De of[-8,-4,0,4,8])o.add(new In(.42,.12,6,10),f,...le(De,1.1,-1.7),1,1,1,G);o.box(l[Fe%3],...le(0,7.2,6),22,.18,7.5,G);for(const De of[-10,10])o.box(c,...le(De,5.2,2.5),.15,4,.15);for(let De=-8;De<=8;De+=4){o.add(new mn(1.05,1.05,.12,10),a,...le(De,4.12,2.2)),o.box(c,...le(De,3.67,2.2),.12,.9,.12),o.add(Na,x,...le(De,4.35,2.2),.1,.16,.1);for(const et of[-1,1])o.box(a,...le(De+et*1.3,3.75,2.2),.55,.12,.6,G),o.box(a,...le(De+et*1.45,4.07,2.2),.12,.65,.6,G)}const se=Yv(["ริมน้ำ","SEAFOOD","ก๋วยเตี๋ยว","RIVER BAR","อาหารไทย","ท่าเรือ"][Fe%6],Fe);o.add(se.geometry,se.material,...le(0,7.1,2.15),1,1,1,G);const ve=le(-11,7.4,.6),Pe=le(11,7.4,.6);for(let De=0;De<12;De++){const et=De/11,D=(De+1)/11,oe=[ve[0]+(Pe[0]-ve[0])*et,7.4-Math.sin(et*Math.PI)*.75,ve[2]+(Pe[2]-ve[2])*et],ie=[ve[0]+(Pe[0]-ve[0])*D,7.4-Math.sin(D*Math.PI)*.75,ve[2]+(Pe[2]-ve[2])*D];De<11&&o.line(c,oe,ie,.023),o.add(Na,qe,oe[0],oe[1]-.14,oe[2],.11,.16,.11)}const Ae=le(0,6,1);d.push({x:Ae[0],y:Ae[1],z:Ae[2],color:ou[Fe%4],power:35})}else{const J=le(0,6.1,0);o.box(c,...J,.14,6.3,.14),o.box(qe,...le(0,9.3,0),.65,.2,.65);const se=le(0,9.15,0);d.push({x:se[0],y:se[1],z:se[2],color:16762251,power:29})}if(!Oe){for(const J of[-14,14])o.add(new mn(.7,.5,1.05,8),h,...le(J,3.6,4)),o.add(Na,u,...le(J,5.15,4),1.25,1.4,1.05);if(Fe%3===0)for(let J=0;J<3;J++)o.box(a,...le(16+J*.9,3.6+J*.2,5),.85,.8,.85,G)}}o.finish(r),r.traverse(N=>{N.updateMatrix(),N.matrixAutoUpdate=!1});const p=n?64:132,M=[],_=[],v=Yt(11437929),w=Yt(11184288),A=Yt(1647654),C=Yt(1119248),P=(N,V,z)=>{const W=new js(N,V,p);W.instanceMatrix.setUsage(Hi),W.frustumCulled=!1,W.layers.set(1),i.add(W),_.push({mesh:W,kind:z})};P(new Ks(.22,.49,3,7),w,"body"),P(new Zt(.17,8,7),v,"head"),P(new Zt(.174,8,6),C,"hair");for(const N of[-1,1])P(new Ks(.075,.58,2,5),A,N<0?"left-leg":"right-leg"),P(new Ks(.062,.46,2,5),w,N<0?"left-arm":"right-arm");const S=[15122576,7510681,12678752,12631210,5461872,11048053];for(let N=0;N<p;N++){const V=g[N%g.length];M.push({distance:V.distance+(s()-.5)*19,side:V.side,phase:s()*6.283,walk:N%3===0,height:.9+s()*.16});for(const z of _)(z.kind==="body"||z.kind.includes("arm"))&&z.mesh.setColorAt(N,new Ue(S[N%S.length]))}const b=new dt,L=N=>{for(let V=0;V<M.length;V++){const z=M[V],W=z.walk?Math.sin(N*.055+z.phase)*8:0,$=e.sample(z.distance+W,z.side*(e.sample(z.distance).width/2+(z.walk?7:10))),G=z.height,ce=z.walk?$.heading+(Math.cos(N*.055+z.phase)>0?0:Math.PI):Math.atan2(-$.nx*z.side,-$.nz*z.side),xe=z.walk?Math.sin(N*3+z.phase)*.35:0;for(const le of _){let Oe=0,Fe=0,$e=0;if(le.kind==="body"&&(Fe=1.19),le.kind==="head"&&(Fe=1.76),le.kind==="hair"&&(Fe=1.82),le.kind.includes("leg")){const qe=le.kind.startsWith("left")?-1:1;Oe=qe*.13,Fe=.46,$e=qe*xe}if(le.kind.includes("arm")){const qe=le.kind.startsWith("left")?-1:1;Oe=qe*.31,Fe=1.14,$e=-qe*xe*.65}b.position.set($.x+Math.cos(ce)*Oe,3.48+Fe*G,$.z-Math.sin(ce)*Oe),b.rotation.set($e,ce,0),b.scale.set(G,G,le.kind==="hair"?G*.9:G),b.updateMatrix(),le.mesh.setMatrixAt(V,b.matrix)}}for(const V of _)V.mesh.instanceMatrix.needsUpdate=!0};L(0);let U=-1;return{lights:d,fixtures:o.fixtures,update(N){N-U<1/24||(U=N,L(N))}}}function Kv(i,e,t,n){const s=t.find(v=>v.kind==="icon-siam"),r=35,o=n?32:64,a=r*o,c=new Float32Array(a*3),l=new Float32Array(a*3),h=new Float32Array(a),u=new nt;u.setAttribute("position",new xt(c,3)),u.setAttribute("color",new xt(l,3)),u.setAttribute("alpha",new xt(h,1));const f=new gt({transparent:!0,depthWrite:!1,blending:Ni,vertexShader:"attribute vec3 color;attribute float alpha;varying vec3 tint;varying float fade;void main(){tint=color;fade=alpha;vec4 p=modelViewMatrix*vec4(position,1.);gl_PointSize=clamp(180./max(1.,-p.z),1.,7.);gl_Position=projectionMatrix*p;}",fragmentShader:`varying vec3 tint;varying float fade;void main(){float r=length(gl_PointCoord-.5)*2.;if(r>1.)discard;gl_FragColor=vec4(tint,fade*(1.-r*r));
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
  }`}),d=new xc(u,f);d.frustumCulled=!1,d.layers.set(1),i.add(d);const m=new js(new mn(.055,.13,1,6),new dn({color:8108753,transparent:!0,opacity:.25,depthWrite:!1,blending:Ni}),r);m.instanceMatrix.setUsage(Hi),m.frustumCulled=!1,i.add(m);const x=new dt,g=[],p=Array.from({length:r},(v,w)=>{const A=s.distance+(w-(r-1)/2)*3.8,C=e.sample(A),P=e.sample(A,s.side*(C.width/2+9));return{x:P.x,z:P.z,nx:P.nx,nz:P.nz}});for(let v=0;v<5;v++){const w=p[v*7];g.push({x:w.x,y:5,z:w.z,color:7718367,power:16})}const M=new Ue;let _=-1;return{lights:g,update(v,w){const A=(w.position.x-s.x)**2+(w.position.z-s.z)**2<121e4;if(d.visible=m.visible=A,!(!A||v-_<1/30)){_=v;for(let C=0;C<r;C++){const P=p[C],S=.5+.5*Math.sin(v*.67+C*.28),b=3.5+S*7.5;x.position.set(P.x,3.25+b/2,P.z),x.scale.set(1,b,1),x.updateMatrix(),m.setMatrixAt(C,x.matrix),M.setHSL(.53+.055*Math.sin(v*.055+C*.032),.38,.59);for(let L=0;L<o;L++){const U=C*o+L,N=(L/o+v*.28)%1,V=4*b*N*(1-N),z=(.08+N*.25)*Math.sin(U*17.21+v*1.7);c[U*3]=P.x+Math.cos(C)*z+P.nx*Math.sin(C*.7)*N*1.8,c[U*3+1]=3.25+V,c[U*3+2]=P.z+Math.sin(C)*z+P.nz*Math.sin(C*.7)*N*1.8,l[U*3]=M.r*1.8,l[U*3+1]=M.g*1.8,l[U*3+2]=M.b*1.8,h[U]=.45*(1-N*.4)}}m.instanceMatrix.needsUpdate=!0;for(const C of Object.values(u.attributes))C.needsUpdate=!0}}}}const Pf=11,Lf=12,lu=Pf+Lf,Ws=16763496,ks=16772553,Oa=16741021,za=6741968;function wt(i,e=Ws,t=!1){const n=i.map(([r,o])=>new R(r,o,0)),s=t?new No(n,!1,"centripetal"):new pf;if(!t)for(let r=1;r<n.length;r++)s.add(new uf(n[r-1],n[r]));return{curve:s,color:e,length:s.getLength()}}function cu(i,e,t,n,s){return wt(Array.from({length:33},(r,o)=>[i+Math.cos(o/32*Math.PI*2)*t,e+Math.sin(o/32*Math.PI*2)*n]),s)}function Jr(i,e,t){const n=e.reduce((c,l)=>c+l.length,0),s=new Float32Array(t*3),r=new Float32Array(t*3);let o=0,a=t;return e.forEach((c,l)=>{const h=l===e.length-1?a:Math.min(a-(e.length-l-1)*3,Math.max(3,Math.round(t*c.length/n))),u=new Ue(c.color);for(let f=0;f<h;f++){const d=c.curve.getPointAt((f+.5)/h),m=o++;s.set([d.x*130,d.y*130,0],m*3),r.set(u.toArray(),m*3)}a-=h}),{name:i,positions:s,colors:r}}function Zv(i=480){const e=i===300?25:30,t=Math.ceil(i/e),n=new Float32Array(i*3),s=new Float32Array(i*3);for(let f=0;f<i;f++){const d=f%e,m=Math.floor(f/e),x=(m+.5)/t;n.set([(d/(e-1)*2-1)*130,(.5-m/(t-1))*173,Math.sin(d*.28)*3],f*3);const g=x<1/6||x>5/6?16725582:x<2/6||x>4/6?16774375:4749311;s.set(new Ue(g).toArray(),f*3)}const r={name:"Thai flag",positions:n,colors:s},o=Jr("Lotus",[wt([[0,-.43],[-.24,-.1],[-.24,.27],[0,.75],[.24,.27],[.24,-.1],[0,-.43]],Oa,!0),...[-1,1].flatMap(f=>[wt([[0,-.43],[f*.48,-.19],[f*.61,.43],[f*.22,.22],[0,-.43]],16757967,!0),wt([[0,-.43],[f*.64,-.3],[f*1,.2],[f*.57,.11],[f*.28,-.1]],Oa,!0),wt([[0,-.48],[f*.5,-.58],[f*.95,-.43],[f*.47,-.43],[0,-.48]],za,!0)])],i),a=Jr("Elephant",[wt([[-.8,.1],[-.65,.4],[-.34,.51],[.05,.51],[.24,.46],[.41,.59],[.62,.52],[.73,.31],[.77,.08],[.77,-.2],[.88,-.28],[.97,-.2],[.96,-.08],[1.05,-.08],[1.06,-.27],[.92,-.4],[.7,-.35],[.64,-.18],[.6,.04],[.49,-.02],[.45,-.49],[.25,-.49],[.2,-.18],[-.1,-.21],[-.37,-.17],[-.41,-.49],[-.62,-.49],[-.69,-.18],[-.8,.1]],ks,!0),cu(.37,.21,.16,.23,Ws),cu(.59,.3,.026,.026,12052735),wt([[.56,.02],[.78,-.06],[.63,-.09]],ks,!0),wt([[-.72,.24],[-.93,.07],[-1,-.13]],Ws,!0),wt([[-.32,.51],[-.32,.18],[-.13,.09],[.05,.18],[.05,.51]],Ws)],i),c=[wt([[-.39,-.45],[-.39,-.32],[-.3,-.32],[-.3,-.17],[-.23,-.17],[-.23,.02],[-.16,.19],[-.13,.44],[-.08,.57],[-.05,.68],[0,.88],[.05,.68],[.08,.57],[.13,.44],[.16,.19],[.23,.02],[.23,-.17],[.3,-.17],[.3,-.32],[.39,-.32],[.39,-.45],[-.39,-.45]])];for(const[f,d]of[[-.32,.3],[-.17,.23],[.02,.23],[.19,.16],[.44,.13],[.57,.08]])c.push(wt([[-d,f],[d,f]],ks));for(const f of[-1,1])c.push(wt([[f*.48,-.45],[f*.48,-.23],[f*.55,-.23],[f*.57,-.04],[f*.65,.23],[f*.73,-.04],[f*.75,-.23],[f*.82,-.23],[f*.82,-.45],[f*.48,-.45]]));c.push(wt(Array.from({length:41},(f,d)=>{const m=d/20-1;return[m,-.6+Math.sin(m*10)*.035]}),za));const l=Jr("Wat Arun",c,i),h=Jr("Long-tail boat",[wt([[-1,-.08],[-.79,-.37],[.53,-.37],[.86,-.14],[1,.25],[1.03,.54],[.94,.48],[.8,-.04],[-1,-.08]],Ws),wt([[-.67,.01],[-.62,.34],[-.48,.4],[.35,.4],[.44,.31],[.48,.02]],6937087),...[-.54,-.15,.32].map(f=>wt([[f,.36],[f,-.05]],ks)),wt([[-.86,.02],[-.84,.17],[-.67,.15],[-.65,.02]],Oa),wt([[-.87,.07],[-1.14,-.3],[-1.19,-.3]],ks),...[-.51,-.65].map(f=>wt(Array.from({length:31},(d,m)=>{const x=m/15-1;return[x,f+Math.sin(x*9)*.035]}),za))],i),u=[r,o,a,l,h];for(let f=1;f<u.length;f++){const d=u[f-1].positions,m=u[f],x=new Uint8Array(i),g=new Float32Array(i*3),p=new Float32Array(i*3);for(let M=0;M<i;M++){let _=-1,v=1/0;for(let w=0;w<i;w++)if(!x[w]){const A=(d[M*3]-m.positions[w*3])**2+(d[M*3+1]-m.positions[w*3+1])**2;A<v&&(v=A,_=w)}x[_]=1,g.set(m.positions.subarray(_*3,_*3+3),M*3),p.set(m.colors.subarray(_*3,_*3+3),M*3)}m.positions=g,m.colors=p}return u}function Jv(i,e=5){const t=Math.max(0,i),n=Math.floor(t/lu)%e,s=t%lu;return{cue:n,next:(n+1)%e,blend:Math.max(0,(s-Pf)/Lf)}}function Qv(i,e,t,n=!1){const s=t.find(m=>m.kind==="icon-siam"),r=e.sample(s.distance),o=e.sample(s.distance,s.side*(r.width/2+24)),a=Zv(n?300:480),c=a[0].positions.length/3,l=new nt;for(const[m,x]of[["position",a[0].positions],["destination",a[1].positions],["color",a[0].colors],["destinationColor",a[1].colors]])l.setAttribute(m,new xt(new Float32Array(x),3).setUsage(Hi));l.setAttribute("droneId",new Be(Array.from({length:c},(m,x)=>x),1));const h=new gt({transparent:!0,depthWrite:!1,depthTest:!0,blending:Ni,uniforms:{time:{value:0},blend:{value:0},viewportHeight:{value:720},pixelRatio:{value:1},fogDensity:{value:i.fog?.density||0}},vertexShader:`attribute vec3 destination;attribute vec3 color;attribute vec3 destinationColor;attribute float droneId;
   uniform float time;uniform float blend;uniform float viewportHeight;uniform float pixelRatio;
   varying vec3 tint;varying float distanceToEye;
   void main(){
    float t=blend*blend*(3.-2.*blend),arc=sin(t*3.14159265);
    vec3 p=mix(position,destination,t);
    p.z+=arc*(mod(droneId,9.)-4.)*2.;p.y+=arc*(8.+mod(droneId,11.));
    p+=vec3(sin(time*.75+droneId),cos(time*.63+droneId*.73),sin(time*.51+droneId*.41))*.18;
    tint=mix(color,destinationColor,t)*(1.85-.35*arc);
    vec4 view=modelViewMatrix*vec4(p,1.);distanceToEye=length(view.xyz);
    gl_PointSize=clamp(viewportHeight*projectionMatrix[1][1]*1.3/max(1.,-view.z),2.6*pixelRatio,7.*pixelRatio);
    gl_Position=projectionMatrix*view;
   }`,fragmentShader:`uniform float fogDensity;varying vec3 tint;varying float distanceToEye;
   void main(){
    float r=length(gl_PointCoord-.5)*2.,aa=max(fwidth(r),.05);
    float core=1.-smoothstep(.30-aa,.62+aa,r),halo=pow(max(0.,1.-r),2.)*.20;
    float haze=exp(-fogDensity*fogDensity*distanceToEye*distanceToEye);
    gl_FragColor=vec4(tint,(core+halo)*haze);
    #include <tonemapping_fragment>
    #include <colorspace_fragment>
   }`}),u=new xc(l,h);u.name="iconsiam-drone-show",u.frustumCulled=!1,u.position.set(o.x,205,o.z),u.rotation.y=Math.atan2(-r.nx*s.side,-r.nz*s.side),i.add(u);const f=new st;u.onBeforeRender=m=>{m.getCurrentViewport(f),h.uniforms.viewportHeight.value=f.w,h.uniforms.pixelRatio.value=Math.min(2,m.getPixelRatio()),h.uniformsNeedUpdate=!0};let d=0;return{points:u,formations:a,get currentName(){return a[d].name},update(m){const{cue:x,next:g,blend:p}=Jv(m,a.length);if(x!==d){for(const[M,_]of[["position",a[x].positions],["destination",a[g].positions],["color",a[x].colors],["destinationColor",a[g].colors]])l.attributes[M].array.set(_),l.attributes[M].needsUpdate=!0;d=x}h.uniforms.time.value=m,h.uniforms.blend.value=p}}}const $v=JSON.parse('[{"id":"millennium-hilton","osmId":342556929,"name":"Millennium Hilton","thai":"มิลเลนเนียม ฮิลตัน","side":1,"center":[100.5109597,13.7286941],"height":121,"floors":32,"style":"hilton","footprint":[[-39.741,-1.614],[-36.054,-2.917],[3.417,-9.874],[9.938,-11.032],[15.313,-14.449],[20.893,-16.587],[24.418,-17.01],[29.349,-17.399],[33.761,-17.266],[39.914,-14.049],[43.213,-9.841],[44.564,-5.154],[44.489,-0.623],[43.234,3.306],[39.817,7.481],[34.464,10.241],[27.24,11.677],[21.109,11.544],[17.389,10.642],[13.344,10.019],[-32.009,17.255],[-36.205,17.399],[-39.547,15.707],[-42.348,13.28],[-44.564,8.638],[-43.721,3.328],[-39.741,-1.614]],"geometry":[[100.5105922,13.7287086],[100.5106263,13.7287203],[100.5109913,13.7287828],[100.5110516,13.7287932],[100.5111013,13.7288239],[100.5111529,13.7288431],[100.5111855,13.7288469],[100.5112311,13.7288504],[100.5112719,13.7288492],[100.5113288,13.7288203],[100.5113593,13.7287825],[100.5113718,13.7287404],[100.5113711,13.7286997],[100.5113595,13.7286644],[100.5113279,13.7286269],[100.5112784,13.7286021],[100.5112116,13.7285892],[100.5111549,13.7285904],[100.5111205,13.7285985],[100.5110831,13.7286041],[100.5106637,13.7285391],[100.5106249,13.7285378],[100.510594,13.728553],[100.5105681,13.7285748],[100.5105476,13.7286165],[100.5105554,13.7286642],[100.5105922,13.7287086]],"tags":{"addr:city":"แขวงบางรัก","addr:housenumber":"123","addr:postcode":"10600","addr:street":"ถนนเจริญนคร","brand":"Millennium","brand:wikidata":"Q6858774","building":"yes","building:levels":"32","building:part":"yes","contact:facebook":"https://www.facebook.com/Hiltonbangkok","contact:instagram":"https://www.instagram.com/millenniumhiltonbangkok","contact:twitter":"https://twitter.com/hiltonbangkok","contact:youtube":"https://www.youtube.com/channel/UCGbgK6kYjOVNUhKsxfQ7MXg","email":"bkkhi.informations@hilton.com","internet_access":"wlan","internet_access:fee":"no","layer":"1","name":"Millennium Hilton Bangkok","official_name":"Millennium Hotels & Resorts","operator":"Hilton","payment:american_express":"yes","payment:cash":"yes","payment:credit_cards":"yes","payment:debit_cards":"yes","payment:diners_club":"yes","payment:eurocard":"yes","payment:jcb":"yes","payment:mastercard":"yes","payment:unionpay":"yes","payment:visa":"yes","phone":"+66 2 442 2000","rooms":"533","smoking":"yes","stars":"5","tourism":"hotel","website":"https://www.hilton.com/en/hotels/bkkhitw-millennium-hilton-bangkok/?SEO_id=OTHR-APAC-TW-BKKHITW","wheelchair":"yes","wikidata":"Q47518776","wikimedia_commons":"Category:Millennium Hilton Bangkok"},"source":"https://www.openstreetmap.org/way/342556929","reference":"https://www.hilton.com/en/hotels/bkkhitw-millennium-hilton-bangkok/","heightSource":"Approximate authored height from storey count and exterior reference","floorSource":"OSM tag"},{"id":"royal-orchid","osmId":1537453215,"name":"Royal Orchid Sheraton","thai":"รอยัล ออคิด เชอราตัน","side":-1,"center":[100.51354620000001,13.72915385],"height":94,"floors":28,"style":"sheraton","footprint":[[-29.933,48.508],[-10.371,44.678],[-5.656,57.603],[44.11,43.487],[38.271,16.882],[20.72,4.893],[18.546,-5.015],[17.594,-10.414],[29.738,-29.539],[25.11,-57.603],[13.842,-55.421],[-0.173,-52.838],[-30.409,-21.769],[-44.11,-18.73],[-29.933,48.508]],"geometry":[[100.5132694,13.7287181],[100.5134503,13.7287525],[100.5134939,13.7286364],[100.5139541,13.7287632],[100.5139001,13.7290022],[100.5137378,13.7291099],[100.5137177,13.7291989],[100.5137089,13.7292474],[100.5138212,13.7294192],[100.5137784,13.7296713],[100.5136742,13.7296517],[100.5135446,13.7296285],[100.513265,13.7293494],[100.5131383,13.7293221],[100.5132694,13.7287181]],"tags":{"addr:district":"บางรัก","addr:housenumber":"2","addr:postcode":"10500","addr:province":"กรุงเทพมหานคร","addr:street":"ซอยเจริญกรุง 30","addr:subdistrict":"บางรัก","brand":"Sheraton","brand:wikidata":"Q634831","building":"yes","email":"royalorchid@sheraton.com","fax":"+66 2 236 8320","internet_access":"yes","internet_access:fee":"customers","name":"รอยัลออคิด เชอราตัน","name:en":"Royal Orchid Sheraton","name:th":"รอยัลออคิด เชอราตัน","phone":"+66 2 266 0123","tourism":"hotel","website":"https://www.marriott.com/hotels/travel/bkksi-royal-orchid-sheraton-hotel-and-towers/"},"source":"https://www.openstreetmap.org/way/1537453215","reference":"https://www.marriott.com/en-us/hotels/bkksi-royal-orchid-sheraton-riverside-hotel-bangkok/overview/","heightSource":"Approximate authored height from storey count and exterior reference","floorSource":"Approximate facade count"},{"id":"peninsula","osmId":134464576,"name":"The Peninsula","thai":"เดอะ เพนนินซูลา","side":1,"center":[100.51105455000001,13.723108700000001],"height":151,"floors":37,"style":"peninsula","footprint":[[-11.198,-10.42],[-11.879,1.859],[-5.283,8.238],[-6.991,10.019],[-6.991,15.841],[-10.127,15.028],[-15.491,19.336],[-15.372,23.066],[-9.662,29.7],[10.83,30.168],[10.722,20.85],[5.358,21.195],[9.316,17.477],[11.998,17.589],[14.442,14.216],[14.215,11.421],[10.019,7.102],[15.372,2.683],[15.491,-8.037],[11.652,-13.737],[15.145,-16.999],[15.026,-21.774],[4.655,-30.168],[1.519,-30.045],[-6.407,-23.177],[-6.288,-19.448],[-4.19,-16.887],[-11.198,-10.42]],"geometry":[[100.510951,13.7232023],[100.5109447,13.723092],[100.5110057,13.7230347],[100.5109899,13.7230187],[100.5109899,13.7229664],[100.5109609,13.7229737],[100.5109113,13.722935],[100.5109124,13.7229015],[100.5109652,13.7228419],[100.5111547,13.7228377],[100.5111537,13.7229214],[100.5111041,13.7229183],[100.5111407,13.7229517],[100.5111655,13.7229507],[100.5111881,13.722981],[100.511186,13.7230061],[100.5111472,13.7230449],[100.5111967,13.7230846],[100.5111978,13.7231809],[100.5111623,13.7232321],[100.5111946,13.7232614],[100.5111935,13.7233043],[100.5110976,13.7233797],[100.5110686,13.7233786],[100.5109953,13.7233169],[100.5109964,13.7232834],[100.5110158,13.7232604],[100.510951,13.7232023]],"tags":{"building":"yes","building:levels":"40"},"source":"https://www.openstreetmap.org/way/134464576","reference":"https://www.peninsula.com/en/bangkok/5-star-luxury-hotel-riverside","heightSource":"Approximate authored height from storey count and exterior reference","floorSource":"Operator reference"},{"id":"shangri-la","osmId":1340837007,"name":"Shangri-La Bangkok","thai":"แชงกรี-ลา กรุงเทพฯ","side":-1,"center":[100.5140167,13.72150005],"height":86,"floors":25,"style":"shangri","footprint":[[-23.434,-35.016],[-27.24,-33.691],[-31.642,-29.951],[-34.302,-26.444],[-35.935,-23.06],[-37.233,-16.915],[-24.007,-7.731],[-15.929,0.106],[-6.002,12.229],[-0.735,21.902],[2.693,35.016],[16.189,31.32],[20.017,21.535],[27.673,12.93],[37.233,9.635],[37.233,-5.149],[31.599,-4.937],[19.271,-7.598],[11.831,-10.035],[1.514,-14.611],[-12.62,-25.242],[-18.47,-30.129],[-23.434,-35.016]],"geometry":[[100.5138,13.7218146],[100.5137648,13.7218027],[100.5137241,13.7217691],[100.5136995,13.7217376],[100.5136844,13.7217072],[100.5136724,13.721652],[100.5137947,13.7215695],[100.5138694,13.7214991],[100.5139612,13.7213902],[100.5140099,13.7213033],[100.5140416,13.7211855],[100.5141664,13.7212187],[100.5142018,13.7213066],[100.5142726,13.7213839],[100.514361,13.7214135],[100.514361,13.7215463],[100.5143089,13.7215444],[100.5141949,13.7215683],[100.5141261,13.7215902],[100.5140307,13.7216313],[100.5139,13.7217268],[100.5138459,13.7217707],[100.5138,13.7218146]],"tags":{"addr:district":"บางรัก","addr:postcode":"10500","addr:province":"กรุงเทพมหานคร","addr:subdistrict":"บางรัก","building":"hotel","building:levels":"24"},"source":"https://www.openstreetmap.org/way/1340837007","reference":"https://www.shangri-la.com/en/bangkok/shangrila/rooms-suites/rooms/shangri-la-wing/about-the-shangri-la-wing/","heightSource":"Approximate authored height from storey count and exterior reference","floorSource":"Operator reference"},{"id":"magnolias","osmId":680736465,"name":"Magnolias Waterfront","thai":"แมกโนเลียส์ วอเตอร์ฟร้อนท์","side":1,"center":[100.51049555,13.7275269],"height":317.95,"floors":70,"style":"magnolias","footprint":[[-31.896,-33.34],[-5.748,-38.639],[-0.287,-25.637],[1.454,-23.277],[7.51,-18.657],[25.959,-5.299],[27.484,-3.585],[28.619,-1.636],[31.896,15.941],[11.176,38.172],[-4.937,38.483],[-14.247,38.639],[-16.767,37.481],[-18.595,35.455],[-31.896,-33.34]],"geometry":[[100.5102006,13.7278264],[100.5104424,13.727874],[100.5104929,13.7277572],[100.510509,13.727736],[100.510565,13.7276945],[100.5107356,13.7275745],[100.5107497,13.7275591],[100.5107602,13.7275416],[100.5107905,13.7273837],[100.5105989,13.727184],[100.5104499,13.7271812],[100.5103638,13.7271798],[100.5103405,13.7271902],[100.5103236,13.7272084],[100.5102006,13.7278264]],"tags":{"building":"apartments","building:levels":"70","check_date":"2021-04-22","height":"317.95","name":"Magnolias Waterfront Residences","name:en":"Magnolias Waterfront Residences","name:th":"แมกโนเลียส์ วอเตอร์ฟร้อนท์ เรสซิเดนเซส","tourism":"apartment","wikipedia":"en:Iconsiam"},"source":"https://www.openstreetmap.org/way/680736465","reference":"https://www.iconsiam.com/","heightSource":"OSM height tag","floorSource":"OSM tag"},{"id":"oriental-residences","osmId":680739268,"name":"The Residences at Mandarin Oriental","thai":"เดอะ เรสซิเดนเซส แอท แมนดาริน โอเรียนเต็ล","side":1,"center":[100.51091095000001,13.727850799999999],"height":272.2,"floors":52,"style":"residences","footprint":[[32.296,-27.997],[33.118,-26.249],[29.939,-8.75],[-0.589,26.906],[-2.839,28.787],[-6.148,28.476],[-28.9,6.401],[-30.76,3.963],[-33.118,-5.933],[-12.333,-17.7],[-6.429,-23.366],[30.144,-28.787],[32.296,-27.997]],"geometry":[[100.5112096,13.7281023],[100.5112172,13.7280866],[100.5111878,13.7279294],[100.5109055,13.7276091],[100.5108847,13.7275922],[100.5108541,13.727595],[100.5106437,13.7277933],[100.5106265,13.7278152],[100.5106047,13.7279041],[100.5107969,13.7280098],[100.5108515,13.7280607],[100.5111897,13.7281094],[100.5112096,13.7281023]],"tags":{"building":"apartments","building:levels":"52","height":"272.2","name":"The Residences at Mandarin Oriental","name:en":"The Residences at Mandarin Oriental","name:th":"เดอะ เรสซิเดนเซส แอท แมนดาริน โอเรียนเต็ล"},"source":"https://www.openstreetmap.org/way/680739268","reference":"https://www.mandarinoriental.com/en/residences/at-mandarin-oriental/bangkok","heightSource":"OSM height tag","floorSource":"OSM tag"}]'),e2={buildings:$v},Df=e2.buildings,uo=new Map(Df.map(i=>[i.id,i])),Ba=new Map,Qr=i=>{const e=Math.sin(i*127.1+311.7)*43758.5453;return e-Math.floor(e)};function t2(i){if(Ba.has(i.id))return Ba.get(i.id);const e={hilton:["#c3c7bf","#48616c"],sheraton:["#d0b293","#43515a"],peninsula:["#c5b7a0","#344a58"],shangri:["#baa68e","#344c59"],magnolias:["#a0b3ba","#344c60"],residences:["#bbb7a7","#344952"]},[t,n]=e[i.style];let s=null,r=null;if(typeof document<"u"){const a=document.createElement("canvas"),c=document.createElement("canvas");a.width=c.width=512,a.height=c.height=2048;const l=a.getContext("2d"),h=c.getContext("2d"),u=16,f=i.floors,d=512/u,m=2048/f;l.fillStyle=t,l.fillRect(0,0,512,2048),h.fillStyle="#000",h.fillRect(0,0,512,2048);for(let x=0;x<f;x++)for(let g=0;g<u;g++){const p=x*83+g*29+i.osmId%157,M=Qr(p),_=g*d+3,v=x*m+m*.1,w=d-6,A=m*.7;l.fillStyle=n,l.fillRect(_,v,w,A),l.fillStyle="#25343c",l.fillRect(_+2,v+2,w-4,A-4),M>.38&&(h.fillStyle=["#f2d2a2","#c6ad8f","#8dabb8","#d39a62"][Math.floor(Qr(p+17)*4)],h.globalAlpha=.35+Qr(p+91)*.5,h.fillRect(_+2,v+2,w-4,A-4),h.globalAlpha=1,h.fillStyle="#1b1610",h.fillRect(_+w*(.35+Qr(p+2)*.2),v+2,2,A-4),h.fillRect(_,v+A*.78,w,A*.22),M>.82&&(h.fillStyle="#38342b",h.fillRect(_+2,v+2,w*.35,A-4))),l.fillStyle=t,l.fillRect(_+w*.49,v,1,A),l.fillStyle="#707778",l.fillRect(g*d,x*m+m*.86,d,Math.max(1,m*.035)),l.fillStyle="#334148",l.fillRect(_,v+A+2,w,m*.12)}s=new Dn(a),r=new Dn(c);for(const x of[s,r])x.colorSpace=vt,x.wrapS=pi,x.anisotropy=4}const o=new Et({color:12896717,map:s,emissiveMap:r,emissive:16772557,emissiveIntensity:1.05,roughness:.54,metalness:.14});return Ba.set(i.id,o),o}function n2(i,e,t){let n=e.footprint.slice(0,-1).map(v=>[...v]);n.reduce((v,w,A)=>{const C=n[(A+1)%n.length];return v+w[0]*C[1]-C[0]*w[1]},0)>0&&n.reverse();const r=e.height-7,o=4.5,a=t2(e),c=r/e.floors,l=Math.min(...n.map(v=>v[0])),h=Math.max(...n.map(v=>v[0])),u=Math.min(...n.map(v=>v[1])),f=Math.max(...n.map(v=>v[1])),d=new ei(n.map(([v,w])=>new ne(v,-w))),m=new mi(d);m.rotateX(-Math.PI/2),i.add(m,t.concrete,0,o+r,0);const x=new pr(d,{depth:o,bevelEnabled:!1});x.rotateX(-Math.PI/2),i.add(x,t.oldStone);const g=[];for(let v=0;v<n.length;v++){const w=n[v],A=n[(v+1)%n.length],C=A[0]-w[0],P=A[1]-w[1],S=Math.hypot(C,P);if(S<.1)continue;const b=(w[0]+A[0])/2,L=(w[1]+A[1])/2,U=Math.atan2(-P,C),N=Math.sin(U),V=Math.cos(U),z=new Xt(S,r),W=z.attributes.uv;for(let $=0;$<W.count;$++)W.setX($,W.getX($)*S/(16*3.25)+v%4/4);i.add(z,a,b,o+r/2,L,[0,U,0]);for(let $=0;$<=e.floors;$++)i.box(S+.18,.34,e.style==="peninsula"?1.05:.65,b+N*.15,o+$*c,L+V*.15,t.concrete,[0,U,0]);if(S>8){const $=Math.round(S/(e.style==="hilton"?7:11));for(let G=0;G<=$;G++){const ce=G/$;i.box(.38,r+.5,.38,w[0]+C*ce+N*.2,o+r/2,w[1]+P*ce+V*.2,t.plaster)}}N*e.side>.45&&S>12&&g.push({x:b,zz:L,angle:U,nx:N,nz:V,length:S})}const p=(l+h)/2,M=(u+f)/2;if(e.style==="hilton")i.cylinder(14.5,16,4.5,p,o+r+2.25,M,t.glass,40,[1.1,1,.85]),i.cylinder(16.7,16.7,.7,p,o+r+4.85,M,t.white,40,[1.1,1,.85]),i.cylinder(16.2,16.2,.3,p,o+r+.2,M,t.softLight,40,[1.1,1,.85]);else if(e.style==="peninsula")i.box((h-l)*.55,4,(f-u)*.6,p,o+r+2,M,t.plaster),i.cylinder(12,12,.65,p,o+r+4.6,M,t.concrete,32);else if(e.style==="magnolias"||e.style==="residences"){const v=e.style==="magnolias"?12:10;i.cylinder(v*.75,v,6,p,o+r+3,M,t.glass,8,[1.3,1,.8]),i.cylinder(v*.78,v*.78,.7,p,o+r+6.3,M,t.softLight,8,[1.3,1,.8])}else i.box((h-l)*.55,4,(f-u)*.45,p,o+r+2,M,t.roof),i.box((h-l)*.55+1,.5,(f-u)*.45+1,p,o+r+4.1,M,t.plaster);g.sort((v,w)=>w.length-v.length);const _=g[0];if(_){const v={hilton:"Hilton",sheraton:"ROYAL ORCHID SHERATON",peninsula:"THE PENINSULA",shangri:"Shangri-La",magnolias:"MAGNOLIAS",residences:"MANDARIN ORIENTAL"},w=Math.min(_.length*.8,e.style==="sheraton"?29:23),A=e.style==="hilton"?3.7:2.3;i.add(new Xt(w,A),i2(v[e.style]),_.x+_.nx*.8,o+r-3,_.zz+_.nz*.8,[0,_.angle,0]),i.box(Math.min(_.length,28),.7,4,_.x-_.nx*1.3,5.8,_.zz-_.nz*1.3,t.plaster,[0,_.angle,0])}i.kind=e.id}const Ha=new Map;function i2(i){if(Ha.has(i))return Ha.get(i);let e=null;if(typeof document<"u"){const n=document.createElement("canvas");n.width=1024,n.height=160;const s=n.getContext("2d");s.fillStyle="#161c21",s.fillRect(0,0,1024,160),s.fillStyle="#eee0bb",s.font="500 92px Georgia,serif",s.textAlign="center",s.textBaseline="middle",s.fillText(i,512,80,940),e=new Dn(n),e.colorSpace=vt,e.anisotropy=4}const t=new Et({map:e,emissiveMap:e,color:16777215,emissive:16770479,emissiveIntensity:.9,roughness:.65});return Ha.set(i,t),t}const jn=new Map,ka=new Map,hu=new R,uu=new $t,fu=new Wt,du=new R(1,1,1),pu=new Ze,ut=(i,e,t={})=>(jn.has(i)||jn.set(i,new Et({color:e,roughness:.78,...t})),jn.get(i)),Q={stone:ut("stone","#d8cbb2"),porcelain:ut("porcelain","#ece1c8"),plaster:ut("plaster","#ddd2bd"),white:ut("white","#e0ddcc"),concrete:ut("concrete","#b7b8b4"),oldStone:ut("oldStone","#a18b72"),gold:ut("gold","#dcb358",{metalness:.48,roughness:.32,emissive:"#8f571b",emissiveIntensity:.2}),warm:ut("warm","#fff0c4",{emissive:"#ffd48a",emissiveIntensity:1.8,roughness:.4}),softLight:ut("softLight","#dfc28c",{emissive:"#ffc677",emissiveIntensity:.8}),tile:ut("tile","#973c27"),tileGreen:ut("tileGreen","#296657"),red:ut("red","#7f2920"),teal:ut("teal","#347b72"),dark:ut("dark","#171e24"),bronze:ut("bronze","#625448",{metalness:.55,roughness:.35}),roof:ut("roof","#473f37"),redBrick:ut("redBrick","#a77963"),glass:ut("glass","#33464c",{roughness:.27,metalness:.4}),window:ut("window","#ad9c72",{emissive:"#ddac59",emissiveIntensity:.55}),stained:ut("stained","#ccb076",{emissive:"#d18b47",emissiveIntensity:.8})};function ql(i){const e=Math.sin(i*127.1+311.7)*43758.5453;return e-Math.floor(e)}function Rc(i,e,t){if(typeof document>"u")return null;const n=document.createElement("canvas");n.width=i,n.height=e,t(n.getContext("2d"),i,e);const s=new Dn(n);return s.colorSpace=vt,s.anisotropy=4,s}function Xi(i,e=24,t=60,n=!1){if(jn.has(i))return jn.get(i);const s=Rc(768,1536,(o,a,c)=>{o.fillStyle=n?"#202421":"#15232a",o.fillRect(0,0,a,c);const l=a/e,h=c/t;for(let u=0;u<t;u++)for(let f=0;f<e;f++){const d=ql(u*91+f*53+i.length*37);o.fillStyle=d>.7?["#c29b60","#aa8b54","#c6b588","#736044"][Math.floor(ql(u*13+f)*4)]:d>.38?"#1b262c":"#0d151c",o.fillRect(f*l+2,u*h+2,l-4,h-4),d>.77&&(o.fillStyle="#414238",o.fillRect(f*l+l*.6,u*h+2,l*.23,h-4)),o.fillStyle="#283236",o.fillRect(f*l,u*h,1.3,h)}});return ut(i,"#aab6b6",{map:s,emissiveMap:s,emissive:"#eee6ca",emissiveIntensity:.65,metalness:.3,roughness:.42})}function s2(i,e="#fff1c0",t="#29261e"){const n=`sign:${i}:${e}`;if(jn.has(n))return jn.get(n);const s=Rc(1024,160,(r,o,a)=>{r.fillStyle=t,r.fillRect(0,0,o,a),r.fillStyle=e,r.textAlign="center",r.textBaseline="middle",r.font="500 100px Georgia, serif",r.fillText(i,o/2,a/2+3,o-65)});return ut(n,"#ffffff",{map:s,emissiveMap:s,emissive:e,emissiveIntensity:.85,roughness:.55})}class r2{constructor(e){this.kind=e,this.parts=new Map}add(e,t,n=0,s=0,r=0,o=[0,0,0],a=[1,1,1]){if(hu.set(n,s,r),uu.set(...o),fu.setFromEuler(uu),du.set(...a),pu.compose(hu,fu,du),e.applyMatrix4(pu),e.index){const c=e;e=c.toNonIndexed(),c.dispose()}e.deleteAttribute("tangent"),this.parts.has(t)||this.parts.set(t,[]),this.parts.get(t).push(e)}box(e,t,n,s,r,o,a=Q.stone,c=[0,0,0]){this.add(new ln(e,t,n),a,s,r,o,c)}cylinder(e,t,n,s,r,o,a=Q.stone,c=16,l=[1,1,1]){this.add(new mn(e,t,n,c),a,s,r,o,[0,0,0],l)}sphere(e,t,n,s,r=Q.gold,o=[1,1,1]){this.add(new Zt(e,16,10),r,t,n,s,[0,0,0],o)}line(e,t,n=.12,s=Q.gold,r=6){const o=new R(...t).sub(new R(...e)),a=new mn(n,n,o.length(),r);a.applyQuaternion(new Wt().setFromUnitVectors(new R(0,1,0),o.normalize())),this.add(a,s,(e[0]+t[0])/2,(e[1]+t[1])/2,(e[2]+t[2])/2)}sign(e,t,n,s,r,o,a,c){this.add(new Xt(t,n),s2(e,a,c),s,r,o)}finish(){const e=new kt;e.name=`landmark:${this.kind}`;for(const[t,n]of this.parts){const s=Ls(n,!1);for(const o of n)o.dispose();s.computeBoundingSphere();const r=new at(s,t);r.castShadow=!0,r.receiveShadow=!0,e.add(r)}return e.userData.landmark=this.kind,e}}function If(i,e,t,n,s,r,o,a=1,c=0){for(let l=0;l<o;l++){const h=(l+1)*s/o;i.box(n,h,r/o+.03,e,c+h/2,t+a*(r/2-(l+.5)*r/o),Q.stone)}}function Qs(i,e,t,n,s,r,o,a=Q.tile){const c=Math.atan2(o,s/2),l=Math.hypot(s/2,o);for(const h of[-1,1]){i.box(l+.25,.45,r,e+h*s/4,t+o/2,n,a,[0,0,-h*c]);for(const u of[-1,1])i.line([e,t+o+.2,n+u*r/2],[e+h*s/2,t+.1,n+u*r/2],.16,Q.gold);i.line([e+h*s/2,t,n-r/2],[e+h*s/2,t,n+r/2],.12,Q.gold)}i.line([e,t+o+.25,n-r/2],[e,t+o+.25,n+r/2],.2,Q.gold);for(const h of[-1,1]){const u=new ei;u.moveTo(-s/2+.7,0),u.lineTo(s/2-.7,0),u.lineTo(0,o-.4),u.closePath(),i.add(new mi(u),Q.red,e,t,n+h*(r/2-.15),[0,h===-1?Math.PI:0,0]),i.line([e,t+o,n+h*r/2],[e,t+o+2.3,n+h*(r/2+.55)],.18,Q.gold),i.line([e,t+o+2.3,n+h*(r/2+.55)],[e,t+o+3,n+h*(r/2+1.6)],.09,Q.gold),i.sphere(.65,e,t+o*.49,n+h*(r/2+.12),Q.gold,[1,1,.15])}}function Ts(i,e,t,n=21,s=38,r=1,o=Q.tile){const a=n*r,c=s*r,l=8*r;i.box(a+4,1.1,c+4,e,.55,t,Q.oldStone),i.box(a,l,c,e,l/2+1,t,Q.plaster);for(const h of[-1,1])for(let u=-c/2+4;u<c/2;u+=5*r)i.box(.4,4.6*r,1.9*r,e+h*(a/2+.08),l/2+1.3,t+u,Q.gold),i.box(.45,3.9*r,1.25*r,e+h*(a/2+.1),l/2+1.3,t+u,Q.dark);for(const h of[-1,1])for(let u=-c/2+1;u<=c/2;u+=5*r)i.cylinder(.26*r,.4*r,l+.2,e+h*(a/2+1.25),l/2+1,t+u,Q.porcelain,8),i.box(1,.4,1,e+h*(a/2+1.25),l+1,t+u,Q.gold);i.box(a*.22,l*.72,.25,e,1+l*.36,t+c/2+.15,Q.gold),i.box(a*.17,l*.63,.28,e,1+l*.315,t+c/2+.2,Q.dark),Qs(i,e,l+1,t,a+5*r,c+6*r,6.5*r,o),Qs(i,e,l+4*r,t,a+.6*r,c-2*r,6.4*r,o),Qs(i,e,l+7*r,t,a-4*r,c-10*r,5.6*r,o);for(const h of[-1,1])i.box(.18,.22,c+4,e+h*(a/2+1.5),1.2,t,Q.warm)}function o2(){if(jn.has("arun-porcelain"))return jn.get("arun-porcelain");const i=Rc(512,512,(e,t,n)=>{e.fillStyle="#cebb94",e.fillRect(0,0,t,n);for(let s=0;s<12;s++)for(let r=0;r<12;r++){const o=(r+.5+s%2*.25)*t/12,a=(s+.5)*n/12,c=ql(s*41+r*7);e.fillStyle=c<.3?"#75847a":c<.65?"#997763":"#e4cf9b";for(let l=0;l<6;l++){const h=l*Math.PI/3;e.beginPath(),e.ellipse(o+Math.sin(h)*6,a+Math.cos(h)*6,2.7,4.5,-h,0,Math.PI*2),e.fill()}e.fillStyle="#dfd0ad",e.beginPath(),e.arc(o,a,3,0,Math.PI*2),e.fill(),e.fillStyle="#a9926d",e.fillRect(o-16,a+17,25,1.5)}});return i&&(i.wrapS=i.wrapT=pi,i.repeat.set(2,3)),ut("arun-porcelain","#f4d9ad",{map:i,bumpMap:i,bumpScale:.15,roughness:.86,emissive:"#bb791f",emissiveIntensity:.22})}function a2(i,e,t,n,s,r,o){const a=new ei,c=[[1,.52],[.76,.52],[.76,.76],[.52,.76],[.52,1]];let l=!0;for(let u=0;u<4;u++)for(const[f,d]of c){const m=u*Math.PI/2,x=(f*Math.cos(m)-d*Math.sin(m))*r,g=(f*Math.sin(m)+d*Math.cos(m))*r;l?(a.moveTo(x,g),l=!1):a.lineTo(x,g)}a.closePath();const h=new pr(a,{depth:s,bevelEnabled:!1,steps:1});h.rotateX(-Math.PI/2),i.add(h,o,e,n,t)}function mu(i,e,t,n=76,s=15){const r=n/76,o=s/15.2,a=o2(),c=ut("arun-trim","#d8b47d",{roughness:.8,emissive:"#b57b27",emissiveIntensity:.19}),l=ut("arun-recess","#7d765b",{roughness:.9,emissive:"#76531f",emissiveIntensity:.12}),h=ut("arun-jade","#577768",{roughness:.78,emissive:"#806b25",emissiveIntensity:.14}),u=ut("arun-rose","#946e58",{roughness:.78,emissive:"#a16a23",emissiveIntensity:.14}),f=(_,v,w,A)=>a2(i,e,t,_*r,v*r,w*o,A);f(0,1.3,17.8,c),f(1.3,.55,18.1,a);for(const[_,v,w]of[[1.85,5.5,16.5],[8.2,6,13.6],[15,6.7,11.3],[22.6,6.4,9.4]]){f(_,v,w,a),f(_+.15,.42,w+.3,l),f(_+.65,.26,w+.44,c),f(_+v-.9,.3,w+.34,l),f(_+v-.55,.55,w+.78,a),f(_+v,.45,w+1,c);for(let C=_+1.35;C<_+v-1;C+=1.15)f(C,.17,w+.1,c);const A=n>40?6:3;for(let C=0;C<4;C++)for(let P=0;P<A;P++){const S=C*Math.PI/2,b=((P+.5)/A-.5)*w*1.02*o,L=e+Math.sin(S)*(w*o+.17*r)+Math.cos(S)*b,U=t+Math.cos(S)*(w*o+.17*r)-Math.sin(S)*b,N=(_+v*.52)*r;i.add(new Li(.6*r),P%2?a:h,L,N,U,[0,S,0],[1,1.6,.48]),i.add(new Zt(.27*r,6,4),c,L,N+.9*r,U,[0,0,0],[1,1.12,1]);for(const V of[-1,1])i.line([L+Math.cos(S)*V*.35*r,N+.15*r,U-Math.sin(S)*V*.35*r],[L+Math.cos(S)*V*.6*r,N+1.15*r,U-Math.sin(S)*V*.6*r],.12*r,a,5)}}for(const _ of[-1,1]){If(i,e,t+_*15.2*o,3.8*o,21.7*r,15*o,26,_);for(let v=0;v<26;v++){const w=(v+1)*21.7*r/26,A=e+_*(22.7-(v+.5)*15/26)*o;i.box(15*o/26+.02,w,3.8*o,A,w/2,t,Q.stone)}for(const v of[-1,1])i.line([e+v*2.25*o,.9*r,t+_*22.7*o],[e+v*2.25*o,22.7*r,t+_*7.7*o],.29*r,c,6),i.line([e+_*22.7*o,.9*r,t+v*2.25*o],[e+_*7.7*o,22.7*r,t+v*2.25*o],.29*r,c,6)}f(29.45,5.8,8.55,a);for(let _=0;_<4;_++){const v=_*Math.PI/2,w=e+Math.sin(v)*8.65*o,A=t+Math.cos(v)*8.65*o;i.add(new mi(Uf(3.8*o,5.6*r,!0),8),l,w,28.6*r,A,[0,v,0]);for(const C of[-1,1])i.cylinder(.35*o,.45*o,6.1*r,w+Math.cos(v)*C*2.25*o,31.65*r,A-Math.sin(v)*C*2.25*o,c,8);i.box(5.5*o,.75*r,1.8*o,w,35.2*r,A,a,[0,v,0]),i.cylinder(.5*o,2.65*o,3.4*r,w,37.25*r,A,a,8),i.cylinder(0,.64*o,2*r,w,39.95*r,A,c,8),i.add(new Li(.85*r),c,w,30.2*r,A,[0,v,0],[1.1,1.45,.8])}const d=[[33,7.5],[35,8.25],[38,8.8],[41,8.8],[44,8.4],[47,7.75],[50,6.9],[53,6],[56,5.05],[59,4.12],[62,3.18],[65,2.3],[68,1.48],[70,.88],[71.2,.53]],x=new Sc(d.map(([_,v])=>new ne(v*o,_*r))).getPoints(54),g=new Fo(x,32),p=g.attributes.position;for(let _=0;_<p.count;_++){const v=p.getX(_),w=p.getZ(_),A=Math.atan2(v,w),C=1+.035*Math.cos(A*8)-.018*Math.cos(A*16);p.setXYZ(_,v*C,p.getY(_),w*C)}g.computeVertexNormals(),i.add(g,a,e,0,t);const M=_=>{for(let v=1;v<d.length;v++)if(_<=d[v][0]){const[w,A]=d[v-1],[C,P]=d[v];return(A+(P-A)*(_-w)/(C-w))*o}return .53*o};for(let _=34;_<70.8;_+=1.05){const v=M(_),w=.16*o+v*.025;i.cylinder(v+w,v+w*.6,.23*r,e,_*r,t,c,16),i.cylinder(v+.035*o,v+.035*o,.19*r,e,(_-.25)*r,t,_%3<1?h:l,16);for(let A=0;A<8;A++){const C=A*Math.PI/4+Math.PI/8,P=v+w*.6;i.add(new Li(.52*r),a,e+Math.sin(C)*P,(_+.52)*r,t+Math.cos(C)*P,[0,C,0],[.58,1.25,.65]),_<64&&i.add(new Li(.19*r),A%2?h:u,e+Math.sin(C)*(P+.15*r),(_+.25)*r,t+Math.cos(C)*(P+.15*r),[0,C,Math.PI/4],[1,1,.5])}}i.cylinder(.075*r,.2*r,5.9*r,e,73.05*r,t,Q.gold,8);for(let _=0;_<7;_++)i.cylinder((.76-_*.092)*o,(.76-_*.092)*o,.14*r,e,(71.25+_*.53)*r,t,Q.gold,12);for(const _ of[-1,1])i.line([e,75.1*r,t],[e+_*.36*o,75.8*r,t],.075*r,Q.gold,5)}function Eo(i,e,t,n,s,r=Q.gold){i.box(s*2.2,1.4,s*2.2,e,.7,t,Q.stone);for(let o=0;o<4;o++)i.cylinder(s*(1-o*.12),s*(1.07-o*.12),1.15,e,1.4+o*1.1,t,r,16);i.sphere(s*.69,e,n*.3,t,r,[1,1.5,1]),i.cylinder(s*.13,s*.51,n*.3,e,n*.57,t,r,16);for(let o=0;o<9;o++){const a=s*(.32-o*.027);i.cylinder(a,a+.12,n*.018,e,n*(.63+o*.026),t,r,16)}i.cylinder(0,s*.13,n*.19,e,n*.905,t,r,12)}function Pc(i,e,t,n=0){for(const s of[-1,1])i.box(.65,1.8,t,s*e/2,.9,n,Q.plaster),i.box(e,1.8,.65,0,.9,n+s*t/2,Q.plaster);for(let s=-e/2;s<=e/2;s+=6)i.box(.85,2.25,.85,s,1.12,n+t/2,Q.plaster),i.cylinder(0,.62,.8,s,2.65,n+t/2,Q.gold,4)}function l2(i){i.box(100,.6,87,0,.3,-7,Q.oldStone),mu(i,0,1,76,15.2);for(const e of[-22,22])for(const t of[-20,22])mu(i,e,t,27,6.4);Ts(i,-37,-18,15,33,.75,Q.tileGreen),Ts(i,37,-18,15,33,.75,Q.tile),Pc(i,101,88,-7)}function c2(i){i.box(145,.5,108,0,.25,-7,Q.oldStone),Ts(i,-18,5,24,48,1.05),Ts(i,43,-14,19,36,.9,Q.tileGreen);for(const[e,t,n]of[[-58,-28,Q.tileGreen],[-41,-28,Q.gold],[-58,-46,Q.teal],[-41,-46,Q.tile]])Eo(i,e,t,42,7.8,n);for(let e=-61;e<63;e+=13)Eo(i,e,38,13,2.6,e%2?Q.tileGreen:Q.gold);for(const e of[-1,1]){const t=-7+e*47;i.box(130,4.5,5,0,2.5,t,Q.plaster);for(const n of[-1,1])i.box(132,.38,Math.hypot(3.5,2),0,5.5,t+n*1.75,Q.tileGreen,[n*Math.atan2(2,3.5),0,0]);i.line([-66,6.55,t],[66,6.55,t],.15,Q.gold)}Pc(i,146,110,-7)}function Yl(i,e,t,n,s,r,o,a,c=!1){const l=Xi(a,Math.max(12,Math.floor(n/2)),o);i.box(n,r,s,e,r/2,t,l);for(const h of[-1,1])for(const u of[-1,1])i.box(1.1,r+1,1.1,e+h*n/2,(r+1)/2,t+u*s/2,Q.white);for(let h=0;h<=o;h++){const u=Math.max(.2,h*r/o);i.box(n+1.5,.32,s+1.5,e,u,t,Q.concrete)}i.box(n+2,1.8,s+2,e,r+.5,t,Q.white),c&&(i.box(n*.73,9,s*.72,e,r+5.5,t,Q.dark),i.box(n*.75,.55,s*.74,e,r+10,t,Q.softLight))}function h2(i){i.box(226,3,86,0,1.5,-3,Q.stone);const e=Xi("icon-mall-glass",42,2,!0);for(let t=0;t<4;t++){const n=218-t*12,s=78-t*10,r=4+t*7;i.box(n,7,s,0,r+3.5,-t*4,e),i.box(n+4,.85,s+3,0,r+7.1,-t*4,Q.white),i.box(n+4,.16,.18,0,r+6.55,-t*4+s/2+1.55,Q.softLight)}for(let t=-104;t<=104;t+=5){const n=24+7*Math.sin((t+110)*.035);i.box(1.15,n,1.1,t,4+n/2,38.2,Q.gold,[0,t%10?.35:-.35,0])}for(const t of[-68,0,68])i.cylinder(12,18,11,t,31,-5,Q.glass,4,[1.5,1,1]),i.cylinder(12.4,12.4,.6,t,36.5,-5,Q.gold,4,[1.5,1,1]);i.box(70,6.5,1,0,31.5,39.4,Q.dark),i.sign("ICONSIAM",64,6,0,31.5,40,"#fff0c2","#28231b");for(let t=-106;t<112;t+=8)i.cylinder(.24,.35,5,t,2.5,47,Q.bronze,8),i.sphere(.48,t,5.2,47,Q.warm);If(i,0,47,200,3,9,8,1)}function gu(i,e,t,n,s,r,o,a,c=0){const l=Xi(a,56,o);i.cylinder(1,1,r,e,r/2,t,l,28,[n/2,1,s/2]);for(let h=0;h<=o;h++){const u=Math.max(.23,h*r/o),f=Math.sin(h/o*Math.PI)*1.3;i.cylinder(1,1,.45,e+Math.sin(h/o*Math.PI)*c,u,t,Q.white,28,[n/2+1.2+f,1,s/2+1])}for(const h of[-1,1])i.box(1.35,r+2,1.8,e+h*n*.43,(r+2)/2,t+s*.22,Q.white);i.cylinder(.85,1,7,e,r+3.5,t,Q.white,28,[n/2,1,s/2]),i.cylinder(.855,.855,.4,e,r+7.1,t,Q.softLight,28,[n/2,1,s/2])}function u2(i){i.box(138,7,69,0,3.5,0,Q.plaster),i.box(136,5,66,0,9.5,0,Xi("river-podium",36,2,!0)),i.box(139,.8,70,0,12.4,0,Q.white),gu(i,-34,-10,43,32,221,71,"river-tower-south",1.2),gu(i,37,-15,39,29,152,47,"river-tower-north",.7),i.box(29,3.5,.4,0,7.8,34.7,Q.dark),i.sign("THE RIVER",27,3,0,7.8,35,"#e6dbc5","#28251f");for(let e=-63;e<=63;e+=9)i.box(.6,5,.6,e,3,35.2,Q.gold),i.box(5.7,.15,.3,e,6,35.3,Q.softLight)}function f2(i){Yl(i,0,-7,74,49,171,48,"state-main"),Yl(i,0,-9,61,43,198,56,"state-upper"),i.box(53,19,39,0,207,-9,Xi("state-crown",20,5,!0));for(const e of[199,207,216])i.box(59,1.5,43,0,e,-9,Q.white);for(let e=-24;e<=24;e+=8)i.cylinder(1.1,1.1,15,e,222.5,9,Q.plaster,12),i.box(2.5,1,2.5,e,230,9,Q.white);i.box(58,1.4,41,0,231,-8,Q.white),i.cylinder(11,11,5,3,233.5,-5,Q.plaster,32),i.add(new Zt(11.8,32,16,0,Math.PI*2,0,Math.PI/2),Q.gold,3,236,-5,[0,0,0],[1,.78,1]),i.cylinder(.35,.8,3.4,3,246,-5,Q.gold,8);for(let e=0;e<12;e++){const t=e*Math.PI/6;i.box(.5,4,.6,3+Math.sin(t)*10.9,233.8,-5+Math.cos(t)*10.9,Q.gold)}i.box(74,1,51,0,172,-7,Q.softLight),i.sign("LEBUA",18,3.6,-17,223,13,"#efd3a3","#302a25")}function Uf(i,e,t=!1){const n=new ei,s=i/2;return n.moveTo(-s,0),n.lineTo(s,0),n.lineTo(s,e-s),t?(n.quadraticCurveTo(s*.7,e-s*.25,0,e),n.quadraticCurveTo(-s*.7,e-s*.25,-s,e-s)):n.absarc(0,e-s,s,0,Math.PI,!1),n.lineTo(-s,0),n.closePath(),n}function Ui(i,e,t,n,s,r,o,a=!1){i.add(new mi(Uf(e,t,a),10),o,n,s,r)}function Nf(i,e,t,n,s=1){i.box(.23*s,2.2*s,.25*s,e,t,n,Q.gold),i.box(1.25*s,.23*s,.25*s,e,t+.4*s,n,Q.gold)}function d2(i){i.box(34,.65,55,0,.32,-5,Q.stone),i.box(20,11,38,0,5.85,-7,Q.redBrick),i.box(28,8,14,0,4.3,-9,Q.redBrick),Qs(i,0,11.1,-8,22,39,4,Q.roof),i.box(24,15,4,0,7.8,14,Q.plaster);for(const e of[-1,1])i.box(1.1,16,1.3,e*10,8,16.3,Q.white);Ui(i,5.5,8.5,0,.6,16.2,Q.dark),Ui(i,3,5.8,-7,5,16.25,Q.stained),Ui(i,3,5.8,7,5,16.25,Q.stained),i.cylinder(6.6,7.4,7,0,18.5,8,Q.plaster,16);for(let e=0;e<10;e++){const t=e*Math.PI/5;i.cylinder(.28,.38,6.7,Math.sin(t)*6.9,18.5,8+Math.cos(t)*6.9,Q.white,8)}i.add(new Zt(7.3,24,14,0,Math.PI*2,0,Math.PI/2),Q.redBrick,0,22,8,[0,0,0],[1,1.15,1]),i.cylinder(1.7,1.7,3,0,31.1,8,Q.plaster,12),i.sphere(1.8,0,33,8,Q.redBrick,[1,.6,1]),Nf(i,0,35.1,8,.9);for(const e of[1,11.5,15.2])i.box(25,.65,4.8,0,e,14,Q.white);i.sign("SANTA CRUZ",13,1.4,0,12.7,16.45,"#efd5a1","#b7a896")}function p2(i){i.box(28,.8,48,0,.4,-7,Q.stone),i.box(19,14,37,0,7.4,-7,Q.plaster),Qs(i,0,14.5,-7,22,40,8,Q.roof),i.box(8,27,7,0,13.5,14,Q.plaster);for(const e of[-1,1]){i.box(.85,28,1.1,e*4,14,17.9,Q.white),i.box(1.7,16,2.5,e*9.7,8,11,Q.white),i.cylinder(0,1.2,5,e*9.7,18.5,11,Q.roof,4);for(let t=-23;t<10;t+=7)i.box(1.2,13,1.7,e*9.8,6.5,t,Q.white)}Ui(i,4.2,7.8,0,.8,17.65,Q.dark,!0),Ui(i,3.1,5.8,0,18.5,17.65,Q.stained,!0);for(const e of[-1,1])Ui(i,3.1,7,e*6.5,5.6,11.65,Q.stained,!0);i.add(new In(1.9,.22,8,24),Q.gold,0,13.5,17.7),i.add(new vc(1.65,24),Q.stained,0,13.5,17.72);for(let e=0;e<8;e++){const t=e*Math.PI/4;i.line([0,13.5,17.75],[Math.sin(t)*1.6,13.5+Math.cos(t)*1.6,17.75],.06,Q.white)}i.box(8.6,.85,7.6,0,27,14,Q.white),i.cylinder(0,4.9,15,0,35,14,Q.roof,4),Nf(i,0,43.5,14,.8);for(const e of[-4,4])for(const t of[10.5,17.5])i.cylinder(0,.55,3.4,e,29,t,Q.roof,4)}function m2(i){i.box(112,19,42,0,9.5,0,Xi("river-city",28,4,!0));for(let e=0;e<=4;e++)i.box(115,1,45,0,e*4.6+.6,0,Q.white);for(let e=-52;e<56;e+=8)i.box(1.1,20.5,1.8,e,10.25,22,Q.plaster);i.box(48,6.5,2,0,18.7,23,Q.plaster),i.sign("RIVER CITY BANGKOK",45,3.9,0,18.8,24.1,"#d9bd89","#44403a"),i.box(118,1.1,13,0,5,29,Q.white);for(let e=-53;e<=53;e+=13)i.cylinder(.5,.65,4.8,e,2.4,33,Q.plaster,10);for(let e=-48;e<55;e+=16)i.box(11,.2,.2,e,4.7,35.6,Q.softLight)}function g2(i){const e=Xi("oriental-hotel",30,15,!0);i.box(98,56,31,-14,28,-21,e);for(let t=0;t<=16;t++)i.box(100,.62,33,-14,Math.max(.32,t*3.5),-21,Q.plaster);for(let t=-59;t<40;t+=9)i.box(1.1,57,33,t,28.5,-21,Q.plaster);Yl(i,49,-9,24,50,42,12,"oriental-wing"),i.box(65,9.8,24,-14,4.9,15,Q.white),i.box(69,1.1,27,-14,10.2,15,Q.white);for(const t of[1.1,5.8])for(let n=-41;n<16;n+=6)Ui(i,4.2,3.7,n,t,27.08,Q.window),i.cylinder(.22,.22,4,n-2.6,t+1.8,27.4,Q.white,8);i.box(65,.4,1,-14,5.6,27.5,Q.white),i.sign("MANDARIN ORIENTAL",40,2.4,-14,11.6,27.2,"#f0dab0","#514f40");for(let t=-39;t<20;t+=10)i.cylinder(0,3.4,1.5,t,3.2,34,Q.plaster,12),i.cylinder(.13,.13,2.7,t,1.35,34,Q.bronze,6),i.sphere(.25,t,2.5,34,Q.warm)}function x2(i){i.box(94,.65,88,0,.32,-4,Q.oldStone),Ts(i,-6,-7,30,40,1.3),Ts(i,35,-19,14,25,.68,Q.tileGreen),Eo(i,-36,18,25,5,Q.porcelain),Eo(i,30,24,18,4,Q.gold),Pc(i,95,89,-4)}const xu={"wat-arun":l2,"wat-pho":c2,"icon-siam":h2,"the-river":u2,"state-tower":f2,"santa-cruz":d2,"holy-rosary":p2,"river-city":m2,"mandarin-oriental":g2,"wat-kalayanamit":x2};function v2(i){if(!xu[i]&&!uo.has(i))throw new Error(`Unknown river landmark: ${i}`);if(!ka.has(i)){const e=new r2(i);uo.has(i)?n2(e,uo.get(i),Q):xu[i](e),ka.set(i,e.finish())}return ka.get(i).clone(!0)}const _2=i=>()=>(i=Math.imul(i,1664525)+1013904223>>>0,i/4294967296),Ot=_2(81623),jt=(i,e=0,t=0)=>new Et({color:i,emissive:e,emissiveIntensity:t,roughness:.72});class $r{constructor(e){this.parts=new Map,this.transform=new dt,this.lightTarget=e,this.lightFixtures=[]}add(e,t,n,s,r,o=1,a=1,c=1,l=0){const h=this.transform;if(h.position.set(n,s,r),h.rotation.set(0,l,0),h.scale.set(o,a,c),h.updateMatrix(),this.lightTarget&&Cf(this.lightFixtures,e,t,h.matrix))return;const u=e.clone().applyMatrix4(h.matrix);this.parts.has(t)||this.parts.set(t,[]),this.parts.get(t).push(u)}box(e,t,n,s,r,o,a,c=0){this.add(fo,e,t,n,s,r,o,a,c)}finish(e){for(const[t,n]of this.parts){const s=Ls(n);if(n.forEach(r=>r.dispose()),s){const r=new at(s,t);e.add(r)}}this.parts.clear(),this.lightTarget&&(e.updateWorldMatrix(!0,!1),this.lightTarget.push(...kv(this.lightFixtures,e.matrixWorld)),this.lightFixtures=[])}}const fo=new ln(1,1,1);function vu(i,e=20,t=4,n="#13283c",s="#ffde9b"){const r=document.createElement("canvas");r.width=1024,r.height=256;const o=r.getContext("2d");o.fillStyle=n,o.fillRect(0,0,1024,256),o.fillStyle=s,o.font="bold 110px Arial",o.textAlign="center",o.textBaseline="middle",o.fillText(i,512,128,970);const a=new Dn(r);return a.colorSpace=vt,new at(new Xt(e,t),new dn({map:a,side:Ht,toneMapped:!1}))}function Ga(i,e=12){const t=document.createElement("canvas"),n=document.createElement("canvas");t.width=n.width=384,t.height=n.height=768;const s=t.getContext("2d"),r=n.getContext("2d");s.fillStyle=["#32353a","#3b3832","#333c3e","#2a3138","#52463a"][i%5],s.fillRect(0,0,384,768),r.fillStyle="#000",r.fillRect(0,0,384,768);const o=e,a=i%2?8:6,c=384/a,l=768/o;for(let f=0;f<o;f++)for(let d=0;d<a;d++){const m=d*c+6,x=f*l+5,g=Ot()>.64,p=c-12,M=l*.68;if(s.fillStyle="#0b151b",s.fillRect(m,x,p,M),g){const _=["#d7a764","#e1be89","#a2b7b4","#d6cbaf"][Math.floor(Ot()*4)];r.fillStyle=_,r.globalAlpha=.25+Ot()*.65,r.fillRect(m,x,p,M),r.globalAlpha=1,r.fillStyle="#050708",r.fillRect(m+p*(.25+Ot()*.4),x,p*.17,M),r.fillRect(m,x+M*.82,p,M*.18),Ot()>.55&&(r.fillStyle="#17150e",r.fillRect(m+4,x+M*.55,p*.35,M*.35))}s.fillStyle="#52524e",s.fillRect(m-1,x+M,p+3,2),r.fillStyle="#000",r.fillRect(m+p*.5,x,2,M),s.fillStyle="#202927",s.fillRect(d*c,f*l,384,2)}const h=new Dn(t),u=new Dn(n);return h.colorSpace=u.colorSpace=vt,h.anisotropy=u.anisotropy=4,new Et({map:h,emissiveMap:u,emissive:16774108,emissiveIntensity:1.9,roughness:.64,color:8885917})}const M2=[["wat-arun","Wat Arun",100.488905,13.7436982,1],["wat-pho","Wat Pho",100.4916918,13.7465039,-1],["wat-kalayanamit","Wat Kalayanamit",100.4912748,13.740062,1],["santa-cruz","Santa Cruz",100.4937728,13.7389447,1],["holy-rosary","Holy Rosary",100.5134793,13.7312611,-1],["river-city","River City",100.5132623,13.7303492,-1],["icon-siam","ICONSIAM",100.5103251,13.7268256,1],["mandarin-oriental","Mandarin Oriental",100.5143499,13.7239264,-1],["the-river","The River",100.5105286,13.7213726,1],["state-tower","State Tower",100.516897,13.7215374,-1],...Df.map(i=>[i.id,i.name,...i.center,i.side])];function y2(i,e,t,n){const s=[],r=jt(13875339,16757582,.3),o=jt(5330264),a=jt(2306619),c=new dn({color:new Ue(16763779).multiplyScalar(2.5)}),l=new kt;i.add(l);const h=[];for(let F=0;F<e.length;F+=20)h.push(e.sample(F));h.push(e.sample(e.length));const u=F=>h.map(B=>new ne(B.x+B.nx*F*B.width/2,-(B.z+B.nz*F*B.width/2))),f=u(1),d=u(-1),m=[...f,...d.reverse()];for(const F of[f,d]){const B=F===f?0:F.length-1,ee=F===f?F.length-1:0,Y=e.sample(0),te=e.sample(e.length);F[B].x+=Math.sin(Y.heading)*1600,F[B].y-=Math.cos(Y.heading)*1600,F[ee].x-=Math.sin(te.heading)*1600,F[ee].y+=Math.cos(te.heading)*1600}const x=new ei([new ne(-5500,-5500),new ne(5500,-5500),new ne(5500,5500),new ne(-5500,5500)]);x.holes.push(new Bl(m));const g=new pr(x,{depth:4,bevelEnabled:!1,steps:1});g.rotateX(-Math.PI/2);const p=jt(1054489);p.roughness=1;const M=new at(g,p);M.name="riverbank-ground",M.position.y=-1,i.add(M);const _=Hv(i,n),v=_.water,w=[];for(const[F,B,ee,Y,te]of M2){const Ee=bo(ee,Y),he=e.nearest(Ee.x,Ee.z),E=uo.has(F),y=v2(F),I=new Jn().setFromObject(y);let X=E?he.offset*te:Math.max(he.offset*te,he.width/2+I.max.z+12),q=e.sample(he.distance,te*X);y.rotation.y=E?0:Math.atan2(-he.nx*te,-he.nz*te);for(let ge=0;ge<12;ge++){y.position.set(q.x,3,q.z),y.updateMatrixWorld();let ae=!1;for(const Te of[I.min.x,I.max.x])for(const Ce of[I.min.z,I.max.z]){const ue=y.localToWorld(new R(Te,0,Ce)),Se=e.nearest(ue.x,ue.z);Math.abs(Se.offset)<Se.width/2+4&&(ae=!0)}if(!ae)break;X+=15,q=e.sample(he.distance,te*X)}if(l.add(y),F==="wat-arun"||F==="wat-kalayanamit"){const ge=new Tm(16767392,F==="wat-arun"?5500:3500,210,.78,.75,2);ge.position.set(q.x-he.nx*te*75,7,q.z-he.nz*te*75),ge.target.position.set(q.x,28,q.z),i.add(ge,ge.target)}const j=new Jn().setFromObject(y);w.push({kind:F,name:B,x:q.x,z:q.z,distance:he.distance,bounds:j,side:te,reserveLength:E?Math.hypot(I.max.x-I.min.x,I.max.z-I.min.z)/2+40:(I.max.x-I.min.x)/2+22,inland:E?X+Math.hypot(I.max.x-I.min.x,I.max.z-I.min.z)/2+70:X-I.min.z+20})}const A=Array.from({length:5},(F,B)=>[Ga(B,4),Ga(B,10),Ga(B,22)]),C=new bm().load("/longtail/textures/riverside-shophouses.png");C.colorSpace=vt,C.anisotropy=4;const P=new Et({map:C,color:10922146,emissiveMap:C,emissive:16767392,emissiveIntensity:.035,roughness:.95}),S=new $r(s),b=jt(2634297),L=jt(8078389),U=jt(2309936),N=jt(4470060);for(let F=20;F<e.length;F+=35){for(const B of[-1,1]){const ee=e.sample(F);for(let Y=0;Y<3;Y++){const te=18+Ot()*24,Ee=20+Ot()*23,he=B*(ee.width/2+Ee/2+12+Y*110),E=e.sample(F+(Ot()-.5)*14,he);let y=11+Ot()*25;Y>0&&(y+=Ot()*45),F>e.length*.62&&Ot()>.72&&(y+=Ot()*90);const I=F<e.length*.48;if(I&&(y=6+Ot()*13+Y*4),Y===0&&I&&(y=9+Ot()*4),!I&&Y===0&&(y=Math.min(y,24)),!I&&Y>0&&w.some(q=>q.side===B&&Math.abs(F-q.distance)<q.reserveLength+65)&&(y=Math.min(y,58)),w.some(q=>q.side===B&&Math.abs(F-q.distance)<q.reserveLength&&Math.abs(he)<q.inland)||w.some(q=>E.x>q.bounds.min.x-25&&E.x<q.bounds.max.x+25&&E.z>q.bounds.min.z-25&&E.z<q.bounds.max.z+25))continue;const X=Y===0&&y<22&&Math.floor(F/35)%5!==0?P:A[Math.floor(Ot()*5)][y<22?0:y<65?1:2];if(S.box(X,E.x,3+y/2,E.z,te,y,Ee,E.heading),S.box(b,E.x,y+3.5,E.z,te+1,1,Ee+1,E.heading),Y>0&&(S.box(b,E.x,y+5.5,E.z,te*.3,4,Ee*.4,E.heading),y>65&&S.box(c,E.x,y+8,E.z,.35,.45,.35)),Y===0){const q=e.sample(F,B*(ee.width/2+Ee+17));for(let j=0;j<2;j++)S.box(o,q.x+j*3,7+j*3,q.z,1.5,1.1,.8,E.heading)}if(Y===0){const q=e.sample(F,B*(ee.width/2+5));S.box(L,q.x,6.7,q.z,te,.3,4,E.heading),Math.floor(F)%3===0&&S.box(c,q.x,6.9,q.z,te*.3,.08,.24,E.heading)}}}for(const B of[-1,1]){const ee=e.sample(F,B*(e.sample(F).width/2+4));if(S.box(o,ee.x,1.5,ee.z,2,3.5,36,ee.heading),Math.floor(F/35)%2===0&&(S.box(a,ee.x,6,ee.z,.35,7,.35),S.box(c,ee.x,9.7,ee.z,1.9,.35,1.9)),Math.floor(F/35)%3===0){S.box(N,ee.x+ee.nx*B*8,7,ee.z+ee.nz*B*8,.8,9,.8);const Y={x:ee.x+ee.nx*B*8,z:ee.z+ee.nz*B*8};for(let te=0;te<5;te++)S.add(new Zt(1,7,5),U,Y.x+Math.sin(te*1.25)*2.3,11.5,Y.z+Math.cos(te*1.25)*2.3,4.1,1.8,2.2,te*1.25)}}}S.finish(l),l.traverse(F=>{F.updateMatrix(),F.matrixAutoUpdate=!1});const V=[],z=[];function W(F,B,ee,Y){const te=bo(B,F),Ee=e.nearest(te.x,te.z),he=new kt;he.position.set(Ee.x,0,Ee.z),he.rotation.y=Math.atan2(-Ee.nz,Ee.nx),i.add(he);const E=new $r(s),y=Ee.width+200,I=Y==="steel"?16:19,X=jt(Y==="steel"?4749666:6582139);E.lightFixtures.push(...Gv(y,I,Y)),E.box(X,0,I,0,y,2.5,Y==="steel"?17:29);for(const ge of[-1,1]){const ae=ge*(Y==="steel"?9:14.75);if(Y==="steel"){E.box(X,0,I+13,ae,y,1.1,1.1);for(let Te=-y/2;Te<y/2;Te+=30){E.box(X,Te,I+7,ae,.7,12,.7);const Ce=new ln(1,1,1),ue=new dt;ue.position.set(Te+15,I+7,ae),ue.rotation.z=Math.atan2(30,12),ue.scale.set(.65,Math.hypot(30,12),.65),ue.updateMatrix(),E.parts.set(X,[...E.parts.get(X)||[],Ce.applyMatrix4(ue.matrix)])}}}for(const ge of[-Ee.width*.27,Ee.width*.27]){E.box(X,ge,I/2,0,8,I,13);const ae=new R(ge,0,0).applyMatrix4(he.matrixWorld);he.updateMatrixWorld(),he.localToWorld(ae.set(ge,0,0)),V.push({x:ae.x,z:ae.z,width:9,length:16,heading:he.rotation.y,mass:1e4,vx:0,vz:0})}Y==="concrete"&&E.box(X,0,I+4,0,y,2,6),E.finish(he);const q=Ia[ee],j=ee==="taksin"?38:29;for(const ge of[-1,1]){const ae=Ua(q.thai,q.english,j,3.4);ae.position.set(0,I+3.2,ge*(Y==="steel"?9.8:15.6)),ae.rotation.y=ge<0?Math.PI:0,he.add(ae)}if(ee==="pokklao"){const ge=Ua(Ia.skypark.thai,Ia.skypark.english,18,2.2);ge.position.set(0,I+5.4,3.2),he.add(ge)}z.push({group:he,span:y,height:I})}W(13.7393,100.4976,"memorial","steel"),W(13.73898,100.49851,"pokklao","concrete"),W(13.7193,100.5121,"taksin","concrete");const $=new kt;i.add($);const G=jt(3160130),ce=new dn({color:new Ue(16769717).multiplyScalar(2.2)}),xe=new dn({color:new Ue(16721682).multiplyScalar(1.9)}),le=z.length*10,Oe=[new js(fo,G,le),new js(fo,ce,le*2),new js(fo,xe,le*2)];Oe.forEach(F=>{F.instanceMatrix.setUsage(Hi),F.frustumCulled=!1,$.add(F)});const Fe=new dt;let $e=-1;function qe(F){if(!(F-$e<1/30)){$e=F;for(let B=0;B<le;B++){const{group:ee,span:Y,height:te}=z[Math.floor(B/10)],Ee=B%2?1:-1,he=((B%10*53+F*(7+B%4)*Ee)%(Y+60)+Y+60)%(Y+60)-(Y+60)/2,E=Ee*5,y=(I,X,q,j,ge,ae,Te,Ce)=>{Fe.position.set(q,j,ge),Fe.rotation.set(0,0,0),Fe.scale.set(ae,Te,Ce),Fe.updateMatrix(),Fe.matrix.premultiply(ee.matrixWorld),I.setMatrixAt(X,Fe.matrix)};ee.updateMatrixWorld(),y(Oe[0],B,he,te+2.3,E,4,1.25,1.65);for(let I=0;I<2;I++)y(Oe[1],B*2+I,he+Ee*2.04,te+2.25,E+(I-.5)*1.2,.07,.22,.28),y(Oe[2],B*2+I,he-Ee*2.04,te+2.25,E+(I-.5)*1.2,.07,.2,.3)}Oe.forEach(B=>B.instanceMatrix.needsUpdate=!0)}}const J=new $r(s),se=jt(11939368,16733997,.35);for(const F of[2,e.length-2]){const B=e.sample(F);for(let Y=-B.width*.43;Y<=B.width*.43;Y+=B.width/7){const te=e.sample(F,Y);J.add(new Zt(1.05,8,6),se,te.x,.55,te.z,1,.9,1),J.box(c,te.x,1.7,te.z,.25,.6,.25)}const ee=vu("RIVER LIMIT · TURN BACK",27,3,"#18313b","#ffd290");ee.position.set(B.x,6,B.z),ee.rotation.y=B.heading,i.add(ee)}J.finish(i);const ve=[];for(const F of t){const B=Lv(F),ee=new kt;ee.position.set(B.x,0,B.z);const Y=new $r(s),te=B.heading+Math.PI/2;ee.rotation.y=te,Y.box(o,0,1.2,0,17,1.3,9),Y.box(r,0,1.8,15,4,.5,31),Y.box(a,0,5.9,0,18,.35,9.6);for(const q of[-7.3,7.3])for(const j of[-3.7,3.7])Y.box(r,q,3.8,j,.32,4.5,.32),Y.box(a,q,-.2,j,.65,3,.65);Y.box(c,0,5.7,-4.8,17,.2,.22);const Ee=jt(11896937),he=jt([9158593,14200424,10838093][F.index%3]),E=jt(2635332);for(let q=0;q<3;q++){const j=(q-1)*2.8,ge=-.7+q%2*1.4;Y.box(he,j,3.1,ge,.57,.85,.34),Y.add(new Zt(.22,7,6),Ee,j,3.73,ge,1,1.18,.96);for(const ae of[-1,1])Y.box(E,j+ae*.15,2.35,ge,.19,.75,.22),Y.box(he,j+ae*.38,3.05,ge,.15,.65,.19)}Y.finish(ee);const y=Ua(F.thai,F.name.toUpperCase()+(F.name.toLowerCase().includes("pier")?"":" PIER"),13,2,{pier:!0});y.position.set(0,5,-4.9),y.rotation.y=Math.PI,ee.add(y),i.add(ee),V.push(B);const I=new at(new bc(17.5,18.3,64),new dn({color:16760166,transparent:!0,opacity:.8,side:Ht,depthWrite:!1,toneMapped:!1}));I.rotation.x=-Math.PI/2,I.position.set(F.x,.18,F.z),i.add(I);const X=vu("PICK UP",13,2.8,"#163237","#ffd995");X.position.set(F.x,9,F.z),i.add(X),ve.push({pier:F,ring:I,beacon:X})}const Pe=zv(i),Ae=Pe.sky,De=jv(i,e,w,n),et=Kv(i,e,w,n),D=Qv(i,e,w,n);s.push(...De.fixtures);const oe=new Rf(i,s),ie=Array.from({length:n?2:3},()=>{const F=new _f(16761212,0,46,2);return i.add(F),F});return{water:v,landmarks:w,pierVisuals:ve,bridgeColliders:V,sky:Ae,visibleLights:oe,droneShow:D,update(F,B,ee,Y=[]){Pe.update(F,B),D.update(F),qe(F),De.update(F),et.update(F,B);const te=[...De.lights,...et.lights,...Y];_.update(F,B,te,Pe.direction);const Ee=te.map(he=>({s:he,d:(he.x-B.position.x)**2+(he.z-B.position.z)**2})).sort((he,E)=>he.d-E.d);for(let he=0;he<ie.length;he++){const E=Ee[he]?.s,y=ie[he];y.intensity=E?Math.min(100,E.power*(E.boat?.48:1.9)):0,E&&(y.position.set(E.x,E.y,E.z),y.color.set(E.color),y.distance=E.distance||46)}for(const he of ve){const E=ee.fare?ee.fare.to.id===he.pier.id:!ee.finished&&(ee.cooldowns.get(he.pier.id)||0)<=ee.clock;he.ring.visible=he.beacon.visible=E,E&&(he.ring.material.color.set(ee.fare?9040591:16760166),he.ring.material.opacity=.55+Math.sin(F*3)*.15,he.beacon.quaternion.copy(B.quaternion),he.beacon.visible=B.position.distanceTo(he.beacon.position)<550,he.beacon.position.y=9+Math.sin(F*2)*.6)}}}}const To=Object.freeze({longtail:Object.freeze({length:12.4,width:2.35,mass:1,maxSpeed:25}),cruise:Object.freeze({length:55,width:13,mass:24,maxSpeed:5.1}),ferry:Object.freeze({length:30,width:5.5,mass:5.5,maxSpeed:12}),electric:Object.freeze({length:24,width:7,mass:7,maxSpeed:9}),fishing:Object.freeze({length:6.5,width:1.55,mass:.45,maxSpeed:3.8})}),Va={wood:10183998,woodLight:12096096,darkWood:4205343,white:14408141,paintWhite:14146002,red:10301993,teal:1207401,orange:13460520,gold:12489810,navy:1453113,steel:10596532,rubber:1316630,warm:16768401,cyan:7858149},gs=new Map,Wa=new Map,As=(i,e,t=0)=>{const n=Math.sin(i*127.1+e*311.7+t*74.7)*43758.5453;return n-Math.floor(n)};function ko(i,e,t=256,n=!0){if(Wa.has(i))return Wa.get(i);const s=new Uint8Array(t*t*4);for(let o=0;o<t;o++)for(let a=0;a<t;a++){const c=e(a,o,t),l=(o*t+a)*4;s[l]=c[0],s[l+1]=c[1],s[l+2]=c[2],s[l+3]=255}const r=new Io(s,t,t,an);return r.wrapS=r.wrapT=pi,n&&(r.colorSpace=vt),r.generateMipmaps=!0,r.minFilter=Sn,r.magFilter=on,r.anisotropy=4,r.needsUpdate=!0,Wa.set(i,r),r}function S2(){return ko("wood",(i,e)=>{const t=Math.floor(e/32),n=e%32,s=Math.sin(e*.73+Math.sin(i*.022)*3.4)*12+Math.sin(e*2.2+i*.009)*5,r=Math.sin(Math.hypot((i-94)*.13,(e-113)*1.4))*9*Math.max(0,1-Math.abs(e-113)/18),o=173+s+r+As(i,e)*15+As(t,0)*26-(n<1?66:n>29?17:0);return[o,o*.88,o*.69]})}function Xa(i){return ko(i,(e,t)=>{const n=As(e,t),s=As(Math.floor(e/8),Math.floor(t/8)),r=i==="cloth"?(e%3===0?-18:0)+(t%3===0?-12:0):0,o=i==="metal"?164+n*60:216+n*19+s*9+r;return[o,o,o]},128,i!=="metal")}function b2(){return ko("wood-bump",(i,e)=>{const t=e%32<2?44:144+Math.sin(e*.73+Math.sin(i*.022)*3.4)*20+As(i,e)*23;return[t,t,t]},256,!1)}function w2(i="warm"){return ko(`saloon-${i}`,(e,t,n)=>{const s=e/n,r=t/n;let a=.34+Math.exp(-((s-.34)**2*11+(r-.82)**2*18))*.56;r>.87&&(a*=.48),r<.23&&(a*=.29),(s<.11||s>.91)&&(a*=.65+.11*Math.sin(s*230));const c=[[.23,.49,.083],[.7,.43,.07]];for(const[h,u,f]of c){const d=((s-h)/f)**2+((r-u)/(f*1.06))**2<1,m=r<u-f*.5&&r>.15&&Math.abs(s-h)<f*(1.2+(u-r)*2);(d||m)&&(a*=.27)}return r>.27&&r<.29&&s>.34&&s<.82&&(a=.8),Math.abs(s-.575)<.012&&r>.17&&r<.275&&(a=.17),a+=Math.exp(-((s-.83)**2*1400))*.1,(i==="cool"?[149,197,206]:i==="dim"?[230,174,105]:[255,209,141]).map(h=>h*Math.min(1,a+As(e,t)*.025))})}function Ff(i){if(gs.has(i))return gs.get(i);let e={color:Va[i]??i,roughness:.72,metalness:.02};if(["wood","woodLight","darkWood"].includes(i)&&(e={...e,map:S2(),bumpMap:b2(),bumpScale:.018,roughness:.48,metalness:.035}),i==="paintWhite"&&(e={...e,map:Xa("paint"),roughness:.43,metalness:.11}),i.startsWith?.("cloth")&&(e={color:Va[i.slice(5).toLowerCase()]??Va.teal,map:Xa("cloth"),roughness:.94,metalness:0}),i==="steel"&&(e={...e,roughnessMap:Xa("metal"),metalness:.82,roughness:.38}),i==="gold"&&(e={...e,metalness:.63,roughness:.39}),i==="glass"&&(e={color:1323068,metalness:.61,roughness:.16,emissive:1454394,emissiveIntensity:.13}),["window","windowDim","windowCool"].includes(i)){const n=w2(i==="windowDim"?"dim":i==="windowCool"?"cool":"warm");e={color:14205859,map:n,roughness:.22,metalness:.16,emissiveMap:n,emissive:16771518,emissiveIntensity:i==="windowDim"?.55:1.2}}i==="warm"&&(e={color:16772556,emissive:16764809,emissiveIntensity:3.4,roughness:.24}),i==="cyan"&&(e={color:12904425,emissive:7980767,emissiveIntensity:1.45,roughness:.28}),i==="navRed"&&(e={color:16735561,emissive:16716806,emissiveIntensity:3.1}),i==="navGreen"&&(e={color:6349459,emissive:321609,emissiveIntensity:3.1});const t=new Et({...e,side:Ht});return gs.set(i,t),t}class zi{constructor(){this.batches=new Map,this.frame=new Ze}add(e,t,n=[0,0,0],s=[0,0,0],r=[1,1,1]){e.clearGroups();const o=new Ze().compose(new R(...n),new Wt().setFromEuler(new $t(...s)),new R(...r));e.applyMatrix4(new Ze().multiplyMatrices(this.frame,o));const a=typeof t=="string"||typeof t=="number"?Ff(t):t;this.batches.has(a)||this.batches.set(a,[]),this.batches.get(a).push(e.index?e.toNonIndexed():e),e.index&&e.dispose()}box(e,t,n,s=[0,0,0]){this.add(new ln(...e),n,t,s)}ball(e,t,n,s=[1,1,1],r=8){this.add(new Zt(e,r,6),n,t,[0,0,0],s)}cylinder(e,t,n,s,r=n,o=7){const a=new R(...e),c=new R(...t),l=c.clone().sub(a),h=a.add(c).multiplyScalar(.5),u=new mn(r,n,l.length(),o);u.applyQuaternion(new Wt().setFromUnitVectors(new R(0,1,0),l.normalize())),this.add(u,s,h.toArray())}curve(e,t,n,s=30,r=5){this.add(new wc(new No(e.map(o=>new R(...o))),s,t,r,!1),n)}inFrame(e,t,n){const s=this.frame,r=new Ze().makeRotationY(t);r.setPosition(...e),this.frame=new Ze().multiplyMatrices(s,r),n(),this.frame=s}finish(e){const t=new kt;t.name=e;for(const[n,s]of this.batches){const r=Ls(s,!1);for(const a of s)a.dispose();r.computeBoundingSphere();const o=new at(r,n);o.castShadow=!0,o.receiveShadow=!0,t.add(o)}return t}}function Qn(i,e,t){const n=[],s=[],r=[];for(let a=0;a<=i;a++)for(let c=0;c<=e;c++)if(n.push(...t(a/i,c/e)),s.push(a/i*4,c/e),a<i&&c<e){const l=a*(e+1)+c;r.push(l,l+1,l+e+2,l,l+e+2,l+e+1)}const o=new nt;return o.setAttribute("position",new Be(n,3)),o.setAttribute("uv",new Be(s,2)),o.setIndex(r),o.computeVertexNormals(),o}const Lc=(i,e,t)=>i+(e-i)*t;function Of(i,e){for(let t=1;t<e.length;t++)if(i<=e[t][0]){const n=e[t-1],s=e[t],r=Math.max(0,Math.min(1,(i-n[0])/(s[0]-n[0])));return Lc(n[1],s[1],r*r*(3-2*r))}return e.at(-1)[1]}function zf(i,{length:e,width:t,rim:n=.78,draft:s=.38,fishing:r=!1,color:o="wood"}){const a=f=>t*.5*Of(f,[[0,.018],[.12,.54],[.3,.88],[.53,1],[.78,.86],[1,r?.07:.49]]),c=f=>n+Math.pow(Math.max(0,1-f*4.2),2)*(r?.33:.83)+Math.pow(Math.max(0,(f-.82)/.18),2)*.1,l=f=>-s+Math.pow(Math.abs(f-.5)*2,4)*.33;i.add(Qn(40,12,(f,d)=>[a(f)*(d*2-1),Lc(l(f),c(f),Math.pow(Math.abs(d*2-1),2.8)),(f-.5)*e]),o);const h=[[-a(1),c(1),e*.5],[a(1),c(1),e*.5],[a(1)*.5,-.05,e*.5],[-a(1)*.5,-.05,e*.5]];i.add($n(h),o);const u=r?.09:.2;i.add(Qn(20,1,(f,d)=>{const m=.12+f*.84;return[a(m)*.82*(d*2-1),u+.1*Math.pow(Math.abs(f-.5)*2,4),(m-.5)*e]}),"woodLight");for(let f=-e*.36;f<e*.46;f+=r?.42:.5){const d=f/e+.5;i.box([a(d)*1.63,.025,.025],[0,u+.035,f],"darkWood")}for(const f of[-1,1]){const d=Array.from({length:34},(m,x)=>{const g=x/33;return[f*a(g),c(g),(g-.5)*e]});i.curve(d,r?.045:.075,r?"darkWood":"red",40),r||(i.curve(d.map(([m,x,g])=>[m,x-.14,g]),.048,"gold",40),i.curve(d.map(([m,x,g])=>[m*.97,x-.24,g]),.055,"teal",40),i.curve(d.map(([m,x,g])=>[m*.86,x-.4,g]),.022,"darkWood",40));for(let m=0;m<14;m++){const x=.15+m/14*.78;i.curve([[f*a(x)*.55,.1,(x-.5)*e],[f*a(x)*.9,c(x)*.52,(x-.5)*e],[f*a(x)*.98,c(x)-.015,(x-.5)*e]],.025,"darkWood",5,4)}}return{beam:a,rail:c}}function $n(i,e=[1,1]){const t=new nt;return t.setAttribute("position",new Be(i.flat(),3)),t.setAttribute("uv",new Be([0,0,e[0],0,e[0],e[1],0,e[1]],2)),t.setIndex([0,1,2,0,2,3]),t.computeVertexNormals(),t}function Dc(i,e,t,n,s=.28,r=1){i.add(new In(s,s*.32,6,12),"rubber",[e,t,n],[0,Math.PI/2,0]),i.curve([[e-r*.06,t+s*1.7,n],[e+r*.06,t+s*.6,n],[e,t-s*.3,n]],.012,"woodLight",7,4)}function hr(i,e,t,n,s=1,r=.29){i.add(new In(r,.065,6,14),"orange",[e,t,n],[0,Math.PI/2,0]);for(let o=0;o<4;o++){const a=Math.PI/4+o*Math.PI/2;i.add(new In(r,.069,5,3,.25),"white",[e,t,n],[0,Math.PI/2,a])}i.curve([[e-s*.02,t+.42,n-.21],[e+s*.04,t-.37,n-.31],[e+s*.04,t-.43,n+.28],[e-s*.02,t+.4,n+.21]],.012,"woodLight",13,4)}function Go(i,e,t,n,s=1){i.box([.3*s,.07*s,.19*s],[e,t,n],"steel"),i.cylinder([e,t,n],[e,t+.13*s,n],.045*s,"steel"),i.cylinder([e-.22*s,t+.16*s,n],[e+.22*s,t+.16*s,n],.045*s,"steel")}function Ao(i,e,t,n,s=.3){for(let r=0;r<4;r++){const o=s-r*s*.17;i.curve(Array.from({length:19},(a,c)=>{const l=c/18*Math.PI*2;return[e+Math.cos(l)*o,t+r*.008,n+Math.sin(l)*o*.72]}),.018,"woodLight",19,4)}}function ur(i,e,t,n,s){i.box([.12,.18,.18],[e,t-.02,n],"steel"),i.ball(.068,[e+s*.055,t,n-.035],s<0?"navRed":"navGreen",[.7,1,.85]),i.box([.15,.045,.22],[e,t+.09,n],"rubber")}function Vo(i,e,t,n,s=1){i.cylinder([e,t,n],[e,t+1.3*s,n],.017*s,"steel");const r=[[0,1/6,"red"],[1/6,2/6,"white"],[2/6,4/6,"navy"],[4/6,5/6,"white"],[5/6,1,"red"]];for(const[o,a,c]of r)i.add(Qn(8,1,(l,h)=>[e+l*.68*s,t+(1.25-.45*(o+h*(a-o)))*s,n+Math.sin(l*8)*.08*s]),c)}function bn(i,e,t,n,{seated:s=!1,heading:r=0,shirt:o="teal",skin:a=11960921,hat:c=!1,scale:l=1,lifeVest:h=!1}={}){i.inFrame([e,t,n],r,()=>{const u=i.frame;i.frame=u.clone().scale(new R(l,l,l));const f=s?.47:.86,d=f+.48,m=d+.23;if(i.add(new Fo([new ne(.155,0),new ne(.16,.1),new ne(.185,.28),new ne(.222,.37),new ne(.162,.43)],10),o,[0,f,0],[0,0,0],[1,1,.67]),h){for(const x of[-1,1])i.box([.14,.35,.065],[x*.095,f+.26,-.14],"orange",[0,0,x*.035]);i.box([.34,.025,.07],[0,f+.16,-.176],"rubber")}i.ball(.18,[0,f,0],"navy",[1,.63,.76]),i.cylinder([0,d-.02,0],[0,d+.08,0],.065,a),i.ball(.12,[0,m,-.015],a,[.82,1.15,.87]),i.ball(.112,[0,m+.059,.013],"rubber",[.94,.71,.97]),i.ball(.023,[0,m-.005,-.117],a,[.8,.9,1]);for(const x of[-1,1])i.ball(.021,[x*.098,m-.002,-.006],a,[.53,1.2,.65],6),i.ball(.01,[x*.037,m+.017,-.111],"rubber",[1,.65,.45],6);for(const x of[-1,1]){const g=[x*.105,f-.02,0],p=s?[x*.16,.43,-.36]:[x*.1,.43,x*.018],M=s?[x*.16,.09,-.37]:[x*.13,.09,-.035];i.cylinder(g,p,.075,"navy",.087),i.ball(.071,p,"navy"),i.cylinder(p,M,.052,"navy",.066),i.box([.135,.08,.24],[M[0],.055,M[2]-.035],"rubber");const _=[x*.22,d-.075,0],v=s?[x*.25,f+.2,-.16]:[x*.25,f+.21,.03],w=s?[x*.16,f+.03,-.36]:[x*.26,f-.05,-.035];i.cylinder(_,v,.068,o,.087),i.cylinder(v,w,.044,a,.054),i.ball(.058,w,a,[.75,1,.7])}c&&(i.add(new Uo(.24,.13,14),"woodLight",[0,m+.16,-.012]),i.cylinder([0,m+.105,-.012],[0,m+.123,-.012],.26,"woodLight",.26,16),i.cylinder([-.1,m+.1,0],[-.06,m-.08,-.05],.008,"darkWood",.008,4)),i.frame=u})}function Bf(i,{length:e,width:t,y:n,z:s=0,color:r="teal",posts:o=3,stripe:a="gold"}){i.add(Qn(24,16,(c,l)=>[(l-.5)*t,n+.24*(1-Math.pow(l*2-1,2))-Math.sin(c*Math.PI*(o-1))**2*.035+Math.sin(c*Math.PI*24)*.006,s+(c-.5)*e]),`cloth${r[0].toUpperCase()}${r.slice(1)}`);for(const c of[-1,1])i.add(Qn(24,1,(l,h)=>[c*t/2,n-h*(.13+.025*Math.sin(l*Math.PI*20)),s+(l-.5)*e]),`cloth${r[0].toUpperCase()}${r.slice(1)}`),i.box([.035,.029,e],[c*t/2,n-.022,s],a),i.cylinder([c*t/2,n,s-e/2],[c*t/2,n,s+e/2],.028,"steel");for(let c=0;c<o;c++){const l=s-e*.46+c/Math.max(1,o-1)*e*.92;for(const h of[-1,1])i.cylinder([h*(t/2-.045),.6,l],[h*(t/2-.045),n,l],.028,"steel");i.curve([[-t/2,n-.008,l],[-t*.25,n+.17,l],[0,n+.23,l],[t*.25,n+.17,l],[t/2,n-.008,l]],.025,"steel",12)}i.add($n([[-.075,n+.246,s-e/2],[.075,n+.246,s-e/2],[.075,n+.246,s+e/2],[-.075,n+.246,s+e/2]]),a)}function fr(i,e,t,n,s,r="red"){i.box([s,.12,.42],[e,t,n],"woodLight"),i.box([s-.045,.055,.38],[e,t+.078,n],r),i.box([s,.33,.075],[e,t+.26,n+.19],r);for(const o of[-1,1])i.box([.055,.39,.055],[e+o*s*.38,t-.2,n],"steel")}function E2(i=!0){const e=new zi;e.box([.64,.49,.88],[0,.12,0],"rubber"),e.box([.7,.12,.68],[0,.4,-.035],"steel");for(let r=0;r<4;r++)e.cylinder([.3,.12,-.29+r*.18],[.45,.24,-.29+r*.18],.056,"steel",.056,7),e.box([.43,.042,.1],[0,.485,-.29+r*.18],"rubber");e.cylinder([-.16,.26,-.47],[-.16,.36,-.68],.09,"steel",.09,7),e.cylinder([-.16,.36,-.68],[-.16,.75,-.68],.06,"steel",.06,7),e.cylinder([0,.15,.35],[0,.15,.58],.27,"rubber",.27,10),e.cylinder([0,.15,.57],[0,.15,.6],.13,"steel",.13,10),e.cylinder([-.35,.32,.04],[-.82,.34,-.8],.027,"steel"),e.cylinder([-.82,.34,-.8],[-.84,.35,-1.03],.045,"rubber"),e.cylinder([0,.04,.55],[0,-1.13,3.52],.047,"steel",.036,7),e.cylinder([0,-.01,.51],[0,-.4,1.51],.081,"rubber",.055,7),e.box([.55,.28,.38],[.58,-.19,-.12],"red"),e.cylinder([.58,-.06,-.12],[.58,.025,-.12],.055,"rubber"),e.box([.63,.56,.1],[0,.13,-.5],"rubber");for(let r=0;r<11;r++)e.box([.48,.013,.12],[0,-.1+r*.045,-.535],"steel");for(let r=0;r<5;r++)e.cylinder([.3,.26,-.28+r*.13],[.37,.48,-.28+r*.13],.014,"gold",.014,5),e.ball(.026,[.31,.45,-.28+r*.13],"steel",[1,.7,1],6);e.curve([[.49,.12,-.22],[.62,.14,.1],[.51,.42,.38],[.29,.46,.28]],.049,"steel",12,6),e.curve([[-.31,.34,-.32],[-.5,.4,-.06],[-.47,-.07,.37],[-.14,-.19,.43]],.029,"rubber",12,5),e.curve([[.62,-.05,-.1],[.71,.29,-.19],[.34,.43,-.26],[.15,.39,.02]],.016,"rubber",14,4);for(const r of[-.21,.21])e.cylinder([r,.15,.62],[r,.15,.645],.15,"steel",.15,12),e.cylinder([r,.15,.648],[r,.15,.66],.11,"rubber",.11,10),e.cylinder([r,.15,.666],[r,.15,.67],.035,"gold",.035,7);e.curve([[-.21,.285,.66],[.21,.285,.66],[.34,.15,.66],[.21,.015,.66],[-.21,.015,.66],[-.34,.15,.66],[-.21,.285,.66]],.016,"rubber",26,4);for(const r of[-1,1])e.cylinder([r*.4,-.17,-.36],[r*.4,-.17,.4],.035,"steel"),e.cylinder([r*.4,-.17,.02],[0,-.47,.02],.038,"steel");const t=e.finish("exposed long-tail engine"),n=new zi;n.cylinder([0,0,-.045],[0,0,.045],.085,"gold",.075,9);for(let r=0;r<3;r++){const o=r*Math.PI*2/3;n.box([.13,.37,.043],[Math.sin(o)*.16,Math.cos(o)*.16,0],"gold",[0,.25,-o+.19])}const s=n.finish("propeller");return s.position.set(0,-1.13,3.52),s.rotation.x=.375,t.add(s),t.userData.propeller=s,i||t.scale.setScalar(.55),t}function T2(i){const e=new zi;zf(e,{length:12.4,width:2.35}),e.add($n([[-.54,.83,-4.45],[.54,.83,-4.45],[.07,1.47,-6.15],[-.07,1.47,-6.15]]),"woodLight"),e.curve([[0,.68,-5.35],[0,1,-6.01],[0,1.67,-6.33],[0,1.79,-6.26]],.105,"wood",15,6);for(let s=0;s<5;s++)e.box([.26,.065,.15],[0,1.25+s*.075,-6.17-s*.02],s%2?"gold":"red",[-.26,0,0]);for(let s=0;s<3;s++){const r=(s-1)*.09,o=1.54,a=-6.22;e.add($n([[r-.055,o,a],[r+.055,o,a],[r+.09,o-.66+s*.1,a+.22],[r-.025,o-.68+s*.1,a+.18]]),["red","gold","teal"][s])}for(let s=0;s<=12;s++){const r=Math.PI*s/12;e.ball(.046,[.18*Math.cos(r),1.2-.32*Math.sin(r),-6.06],s%3===0?"warm":"gold",[1,1,1],6)}Bf(e,{length:6.2,width:2.17,y:2.02,z:.15,color:i%3===1?"red":"teal",posts:4});for(let s=0;s<5;s++)fr(e,0,.52,-2.28+s*1.06,1.79);e.cylinder([-.83,1.99,-2.74],[.83,1.99,-2.74],.024,"warm"),e.cylinder([-.83,1.99,2.91],[.83,1.99,2.91],.024,"warm"),bn(e,-.43,.21,-1.18,{seated:!0,shirt:"white"}),bn(e,.42,.21,-.13,{seated:!0,shirt:"red",skin:14199428}),bn(e,-.43,.21,1.99,{seated:!0,shirt:"orange"}),e.box([1.27,.14,.63],[0,.73,4.2],"woodLight"),bn(e,-.16,.4,4.21,{seated:!0,shirt:"navy",hat:!0,lifeVest:!0}),e.box([.48,.36,.56],[.59,.37,3.81],"navy"),e.cylinder([-.47,.41,4.88],[0,1,5.24],.06,"steel"),e.cylinder([.47,.41,4.88],[0,1,5.24],.06,"steel");for(const s of[-1,1]){Dc(e,s*1.04,.55,2.89,.21,s),ur(e,s*1.08,2.06,-2.66,s),Go(e,s*.79,.89,3.31,.75),hr(e,s*1.06,1.3,2.65,s,.22),e.add(new Xt(3.8,.24),Wo("เรือหางยาว  BANGKOK"),[s*1.137,.59,-.35],[0,s*Math.PI/2,0]),e.cylinder([s*1.025,1.87,-2.9],[s*1.025,1.87,3.16],.035,"clothWhite");for(let r=-2.5;r<2.9;r+=1.2)e.curve([[s*.96,1.89,r-.045],[s*.96,1.63,r],[s*.96,1.89,r+.045]],.014,"rubber",8,4)}Ao(e,.03,.87,-4.62,.23),Vo(e,.61,.9,4.04,.67),e.box([.3,.15,.14],[-.83,1.56,3.34],"rubber"),e.box([.24,.1,.008],[-.83,1.57,3.418],"cyan");for(const s of[-2.74,2.91])e.box([1.8,.07,.11],[0,2.045,s],"paintWhite");const t=e.finish("Thai wooden long-tail"),n=E2();return n.position.set(0,1,5.22),t.add(n),t.userData.motor=n,t.userData.propeller=n.userData.propeller,t.userData.passengerSeats=[[-.43,.73,-2.28],[.43,.73,-2.28],[-.43,.73,-.16],[.43,.73,.9]],t}function Ic(i,{length:e,width:t,height:n=1.5,draft:s=1.1,color:r="paintWhite",x:o=0,stern:a=.82}){const c=l=>t*.5*Of(l,[[0,.025],[.065,.39],[.18,.87],[.3,1],[.78,1],[1,a]]);i.add(Qn(32,12,(l,h)=>[o+c(l)*(h*2-1),-s+(n+s)*Math.pow(Math.abs(h*2-1),3),(l-.5)*e]),r),i.add(Qn(32,1,(l,h)=>[o+c(l)*(h*2-1),n,(l-.5)*e]),"woodLight"),i.add($n([[o-c(1),n,e/2],[o+c(1),n,e/2],[o+c(1)*.75,-s*.45,e/2],[o-c(1)*.75,-s*.45,e/2]]),r);for(const l of[-1,1]){const h=Array.from({length:28},(u,f)=>{const d=f/27;return[o+c(d)*l,n-.27,(d-.5)*e]});i.curve(h,.065,"gold",36),i.curve(h.map(([u,f,d])=>[u*.999,f-.38,d]),.08,"navy",36)}return c}function $s(i,e,t,n,s,{material:r="steel",height:o=.94,step:a=1.6,lights:c=!1}={}){i.cylinder([e,t+o,n],[e,t+o,s],.035,r),i.cylinder([e,t+o*.49,n],[e,t+o*.49,s],.021,r);for(let l=n;l<=s+.01;l+=a)i.cylinder([e,t,l],[e,t+o,l],.027,r),c&&i.ball(.054,[e,t+o+.028,l],"warm",[1,1,1],6)}function A2(i,e,t,n){i.cylinder([e,t,n],[e,t+.71,n],.055,"steel"),i.cylinder([e,t+.71,n],[e,t+.765,n],.55,"white",.55,10),i.cylinder([e,t+.768,n],[e,t+.9,n],.048,"gold"),i.ball(.043,[e,t+.92,n],"warm",[.72,1.2,.72],6);for(const s of[-1,1])i.cylinder([e+s*.3,t+.768,n],[e+s*.3,t+.785,n],.13,"white",.13,10),i.cylinder([e+s*.23,t+.77,n+.2],[e+s*.23,t+.87,n+.2],.009,"steel",.009,5),i.ball(.043,[e+s*.23,t+.9,n+.2],"glass",[.8,1.17,.8],6);for(const s of[-1,1]){i.box([.44,.08,.44],[e+s*.81,t+.43,n],"red"),i.box([.1,.45,.44],[e+s*1.01,t+.69,n],"white");for(const r of[-.15,.15])i.cylinder([e+s*.83,t,n+r],[e+s*.83,t+.42,n+r],.025,"steel")}}function Wo(i){const e=`sign:${i}`;if(gs.has(e))return gs.get(e);if(typeof document>"u")return Ff("warm");const t=document.createElement("canvas");t.width=1024,t.height=128;const n=t.getContext("2d");n.fillStyle="#133c43",n.fillRect(0,0,t.width,t.height),n.strokeStyle="#d6b25c",n.lineWidth=5,n.strokeRect(8,8,t.width-16,t.height-16),n.fillStyle="#ffe2a0",n.font="bold 64px Arial, sans-serif",n.textAlign="center",n.textBaseline="middle",n.fillText(i,512,67,980);const s=new Dn(t);s.colorSpace=vt;const r=new Et({map:s,emissiveMap:s,emissive:16777215,emissiveIntensity:.6,roughness:.65,side:Ht});return gs.set(e,r),r}function C2(i){const e=new zi;Ic(e,{length:55,width:13,height:1.45,draft:1.6});for(const[t,n,s,r]of[[1.48,11.65,44,1],[4.08,11.55,43,1.4],[6.54,10.25,39.5,1.8]]){e.box([n,.22,s],[0,t,r],"paintWhite"),e.box([n-.23,.05,s-.24],[0,t+.145,r],"woodLight");for(const o of[-1,1])e.box([.07,.075,s-.3],[o*(n/2+.013),t+.09,r],"warm")}for(const t of[1.7,4.3]){for(const n of[-1,1]){const s=n*5.29;e.box([.13,.34,40.7],[s,t+.19,1.3],"paintWhite"),e.box([.13,.22,40.7],[s,t+2.03,1.3],"paintWhite");for(let r=-18.2;r<=20;r+=2.6)e.box([.09,1.6,2.34],[s,t+1.11,r],(Math.round((r+18.2)/2.6)+(t>3?1:0))%4===0?"windowDim":"window"),e.box([.15,1.98,.095],[s,t+1.07,r+1.23],"paintWhite"),e.box([.13,.24,2.35],[s+n*.02,t+1.79,r],"glass"),e.box([.15,1.61,.045],[s+n*.035,t+1.08,r],"gold");$s(e,n*5.7,t-.06,-19.7,21.2,{lights:t>3,step:1.5})}e.box([10.5,1.95,.16],[0,t+1.08,21.85],"paintWhite");for(let n=-3.24;n<=3.24;n+=2.16)e.box([1.94,1.28,.17],[n,t+1.13,21.95],"window");e.add($n([[-5.21,t+.42,-19.52],[5.21,t+.42,-19.52],[4.92,t+1.85,-18.94],[-4.92,t+1.85,-18.94]]),"glass");for(const n of[-3.35,0,3.35])e.cylinder([n,t+.43,-19.54],[n*.95,t+1.89,-18.96],.053,"paintWhite")}for(const t of[-1,1]){$s(e,t*4.98,6.69,-17.5,21.3,{material:"gold",step:1.4,lights:!0}),$s(e,t*5.45,1.64,-22.2,-19.9,{lights:!0,step:.8});const n=Wo(i%2?"CHAO PHRAYA NIGHT":"RIVER PEARL");e.add(new Xt(13.6,1.12),n,[t*5.81,3.78,1.3],[0,t*Math.PI/2,0])}e.box([3.35,.045,8.5],[0,6.715,-.8],"teal");for(const t of[-3.2,3.2])for(let n=-13;n<=16;n+=4.8)A2(e,t,6.72,n);for(let t=0;t<10;t++){const n=t%2?2.35:-2.35,s=-12+Math.floor(t/2)*5.4;bn(e,n,6.73,s,{seated:!0,heading:n<0?-Math.PI/2:Math.PI/2,shirt:t%3===0?"red":"white",skin:t%2?14199428:11960921})}for(let t=0;t<4;t++)bn(e,-.75+t%2*1.5,6.75,-1.7+Math.floor(t/2)*2.1,{shirt:t%2?"red":"white",heading:t*1.4});for(const t of[-4.25,4.25])for(const n of[-16.1,20.3])e.cylinder([t,6.7,n],[t,9.27,n],.055,"steel");for(const t of[-4.25,4.25]){e.curve([[t,9.2,-16.1],[t,8.63,-4],[t,8.63,8],[t,9.2,20.3]],.013,"rubber",24,4);for(let n=0;n<25;n++){const s=n/24,r=Lc(-16.1,20.3,s),o=9.2-Math.sin(s*Math.PI)*.59;e.ball(.067,[t,o-.075,r],"warm",[1,1.18,1],6)}}e.box([5.1,1.82,3.25],[0,7.64,-16.45],"paintWhite"),e.add($n([[-2.5,7.2,-18.12],[2.5,7.2,-18.12],[2.35,8.45,-17.76],[-2.35,8.45,-17.76]]),"glass"),e.box([5.4,.18,3.6],[0,8.65,-16.45],"paintWhite"),e.add(Qn(12,18,(t,n)=>[(n-.5)*8.9,9.04+.47*(1-(n*2-1)**2),13.65+t*6.1]),"clothWhite");for(const t of[13.65,16.7,19.75])e.curve([[-4.45,9.04,t],[0,9.51,t],[4.45,9.04,t]],.037,"steel",16,5);for(const t of[-4.24,4.24])e.cylinder([t,6.75,13.78],[t,9.1,13.78],.058,"paintWhite");e.cylinder([0,8.73,-15.9],[0,10.2,-15.9],.057,"steel"),e.box([1.76,.14,.32],[0,9.61,-15.9],"paintWhite"),e.ball(.09,[0,10.24,-15.9],"warm"),ur(e,-5.28,6.25,-16.8,-1),ur(e,5.28,6.25,-16.8,1);for(const t of[-1,1])for(let n=-15;n<=20;n+=7)e.cylinder([t*6.09,.66,n],[t*6.09,1.35,n],.19,"rubber",.19,8);for(const t of[-1,1]){for(const n of[-23,22.3])Go(e,t*3.7,1.66,n,1.7);hr(e,t*5.71,2.61,17.6,t,.39),hr(e,t*4.99,7.61,19.8,t,.39),e.cylinder([t*4.96,7.64,-11.5],[t*4.96,8.17,-11.5],.052,"paintWhite"),e.ball(.12,[t*4.96,8.19,-11.5],"warm",[.68,.68,1],8);for(let n=0;n<10;n++)e.box([1.17,.075,.3],[t*4.75,1.83+n*.248,19.1+n*.26],"paintWhite");e.cylinder([t*4.15,2.66,19.06],[t*4.15,5.01,21.42],.032,"steel"),e.cylinder([t*5.36,2.66,19.06],[t*5.36,5.01,21.42],.032,"steel")}Ao(e,-2.3,1.49,-23,.65),Ao(e,2.6,1.49,23.4,.63),e.box([2.6,.71,.82],[0,7.09,18],"darkWood"),e.box([2.68,.045,.88],[0,7.475,18],"steel");for(const t of[-1.72,1.72]){e.box([.51,1.26,.54],[t,7.36,18.54],"rubber");for(const n of[7.04,7.57])e.cylinder([t,n,18.25],[t,n,18.22],.18,"navy",.18,10)}bn(e,0,6.72,18.65,{shirt:"white",heading:Math.PI});for(const t of[-.84,.84])e.box([.42,.012,.32],[t,7.51,17.98],"cyan");return Vo(e,0,7.7,21.55,1.7),e.ball(.1,[0,8.19,21.6],"warm"),e.finish("illuminated dinner cruise")}function R2(i,e,t,n,s="orange"){i.cylinder([e,t,n],[e,t+2.2,n],.029,"steel"),i.add(Qn(7,2,(r,o)=>[e+r*1.18,t+2.05-o*.56,n+Math.sin(r*7)*.1]),s)}function P2(i){const e=new zi;Ic(e,{length:30,width:5.5,height:.97,draft:.7,stern:.8});for(const t of[-1,1])e.box([.13,.33,23.2],[t*2.61,1.15,.7],"orange");Bf(e,{length:22.5,width:5.11,y:3.4,z:.7,color:"white",posts:7,stripe:"orange"});for(const t of[-1,1])e.box([.055,.42,20],[t*2.46,2.95,.8],"glass"),$s(e,t*2.58,1.25,-10.1,11.4,{height:.68,step:1.6}),e.add(new Xt(8.1,.64),Wo("CHAO PHRAYA EXPRESS"),[t*2.625,1.58,.6],[0,t*Math.PI/2,0]),e.box([.045,.04,19.5],[t*2.35,3.38,.8],"warm");for(let t=0;t<10;t++){const n=-8.9+t*1.96;fr(e,-1.41,1.36,n,1.76,"orange"),fr(e,1.41,1.36,n,1.76,"orange"),t%2===0&&bn(e,t%4===0?-1.35:1.35,1.06,n,{seated:!0,shirt:t%3?"teal":"white"})}e.box([3.5,1.53,2.67],[0,1.94,-10.49],"white"),e.add($n([[-1.67,1.7,-11.9],[1.67,1.7,-11.9],[1.49,2.77,-11.57],[-1.49,2.77,-11.57]]),"glass"),e.box([3.85,.13,2.98],[0,2.84,-10.49],"orange");for(const t of[-.55,.55])e.cylinder([t,1.75,-11.91],[t,2.76,-11.57],.028,"white");R2(e,0,1.26,-13.61,i%3===1?"gold":"orange");for(const t of[-1,1]){e.box([.8,.48,1.12],[t*1.02,.71,14.47],"rubber"),e.box([.16,.9,.2],[t*1.02,.13,14.65],"steel");for(let n=-8;n<12;n+=4)Dc(e,t*2.77,.76,n,.29,t);ur(e,t*2.28,3.32,-9.1,t)}e.box([2.05,.1,1.9],[0,1.07,12.35],"woodLight"),bn(e,1.71,1.05,12.1,{shirt:"navy",lifeVest:!0});for(const t of[-1,1]){hr(e,t*2.61,2.41,8.82,t,.32);for(let n=-7.5;n<=8;n+=3.7)e.box([.43,.21,.48],[t*1.96,3.13,n],"orange"),e.box([.45,.035,.5],[t*1.96,3.2,n],"rubber"),e.box([.51,.03,.52],[t*1.96,2.995,n],"steel");Go(e,t*1.96,1.13,-12.58,1.1),e.box([.6,.32,.39],[t*2,1.33,10.5],"rubber")}for(let t=-6;t<=6;t+=6)e.box([2.45,.075,.16],[0,3.42,t],"paintWhite"),e.box([2.25,.028,.115],[0,3.37,t],"warm");return Vo(e,.92,1.62,12.66,1.1),Ao(e,-.49,1.11,-13,.37),e.ball(.08,[0,3.52,11.21],"warm"),e.finish("orange flag express ferry")}function L2(){const i=new zi;for(const e of[-1,1])Ic(i,{length:24,width:2.1,height:1.03,draft:.63,x:e*2.36,color:"paintWhite",stern:.44});i.box([6.8,.28,20.4],[0,1.18,0],"white"),i.box([6.36,.065,18.9],[0,1.36,0],"woodLight"),i.box([5.83,.38,17.4],[0,1.56,0],"navy"),i.box([6.39,.22,18.82],[0,3.69,0],"white"),i.box([6.04,.07,18.02],[0,3.85,0],"teal");for(const e of[-1,1]){for(let t=-7.18;t<=7.2;t+=2.05)i.box([.11,1.63,1.92],[e*2.89,2.6,t],"windowCool");for(let t=-8.2;t<=8.2;t+=2.05)i.box([.13,1.92,.092],[e*2.94,2.64,t],"white");i.box([.13,.045,18.49],[e*3.19,3.64,0],"cyan"),i.add(new Xt(6.65,.58),Wo("RIVER ELECTRIC"),[e*3.03,1.79,0],[0,e*Math.PI/2,0]),$s(i,e*3.27,1.38,-9.52,9.52,{height:.62,step:1.4}),ur(i,e*3.04,3.6,-7.2,e);for(const t of[-7,-.8,6.4])i.cylinder([e*3.44,.55,t],[e*3.44,1.2,t],.145,"rubber")}for(const e of[-1,1]){const t=e*9;i.add($n([[-2.87,1.8,t+e*.28],[2.87,1.8,t+e*.28],[2.76,3.58,t-e*.22],[-2.76,3.58,t-e*.22]]),"glass");for(const n of[-.92,.92])i.cylinder([n,1.8,t+e*.28],[n,3.58,t-e*.22],.048,"white");i.box([3.55,.16,1.8],[0,1.19,e*10.2],"teal"),i.box([2.1,.12,.11],[0,1.77,e*9.29],"cyan")}for(let e=-7.7;e<=7.7;e+=2.52)for(const t of[-1.58,1.58]){i.box([2.73,.035,2.29],[t,3.907,e],"glass");for(let n=-1.21;n<1.3;n+=.48)i.box([.018,.012,2.25],[t+n,3.934,e],"steel");i.box([2.74,.012,.02],[t,3.934,e],"steel")}for(let e=-6.4;e<=6.4;e+=1.81)fr(i,-1.58,1.72,e,1.58,"teal"),fr(i,1.58,1.72,e,1.58,"teal");for(const e of[-1,1]){hr(i,e*3.28,2.02,7.72,e,.31),Go(i,e*2.62,1.55,9.38,1.1),i.box([.45,.82,.51],[e*1.93,4.3,6.7],"paintWhite");for(let t=0;t<5;t++)i.box([.455,.033,.53],[e*1.93,4.06+t*.095,6.7],"navy")}return Vo(i,.4,1.75,10.63,.85),i.cylinder([0,3.96,-5.5],[0,5.1,-5.5],.036,"steel"),i.ball(.085,[0,5.15,-5.5],"warm"),bn(i,-.81,1.4,-7.62,{seated:!0,shirt:"white"}),i.finish("electric river catamaran")}function D2(i){const e=new zi;zf(e,{length:6.5,width:1.55,rim:.4,draft:.27,fishing:!0,color:i%2?"darkWood":"wood"});for(const t of[-1.86,.3,2.08])e.box([1.07,.09,.32],[0,.36,t],"woodLight");bn(e,-.01,-.025,.32,{seated:!0,shirt:"teal",hat:!0,heading:-.29}),e.cylinder([.12,.7,-.02],[1.29,1.85,-2.29],.019,"darkWood",.009,6),e.curve([[1.29,1.85,-2.29],[1.68,1.78,-2.77],[1.91,1.39,-3.11]],.008,"darkWood",12,4),e.cylinder([1.91,1.39,-3.11],[1.95,-.025,-3.2],.0025,"white",.0025,3),e.cylinder([-.34,.12,-1.37],[-.34,.44,-1.37],.19,"teal",.23,9),e.cylinder([-.34,.444,-1.37],[-.34,.45,-1.37],.204,"navy",.204,9),e.box([.45,.33,.59],[.26,.28,1.41],"white"),e.box([.47,.065,.61],[.26,.48,1.41],"teal");for(let t=0;t<6;t++){const n=.29-t*.035,s=Array.from({length:18},(r,o)=>{const a=o/17*Math.PI*2;return[Math.cos(a)*n,.17+t*.023,-2.09+Math.sin(a)*n]});e.curve(s,.023,"woodLight",19,4)}e.cylinder([-.61,.53,-1.81],[-.64,.53,1.83],.033,"woodLight"),e.box([.22,.046,.74],[-.64,.53,1.89],"woodLight"),e.box([.39,.33,.4],[0,.5,2.43],"rubber"),e.cylinder([0,.33,2.58],[0,-.13,3.2],.032,"steel"),e.ball(.074,[0,.95,2.55],"warm",[1,1.5,1]),e.cylinder([0,.6,2.55],[0,.85,2.55],.018,"steel"),e.cylinder([0,.83,2.55],[0,.87,2.55],.12,"rubber",.12,10),e.add(new Uo(.13,.07,10),"steel",[0,1.1,2.55]);for(const t of[-1,1])e.cylinder([t*.1,.85,2.55],[t*.1,1.09,2.55],.007,"steel",.007,4);Dc(e,-.7,.2,.34,.18,-1),e.box([.27,.31,.23],[-.39,.36,1.42],"red"),e.box([.12,.065,.09],[-.39,.555,1.42],"rubber");for(let t=0;t<8;t++){const n=-2.54+t*.1;e.curve([[-.2,.2,n],[.09,.45,n+.1],[.37,.17,n]],.006,"white",6,3),e.curve([[-.23+t*.085,.19,-2.6],[-.18+t*.085,.43,-2.2],[-.2+t*.085,.18,-1.7]],.006,"white",6,3)}return e.finish("single-person wooden fishing boat")}const _u={longtail:T2,cruise:C2,ferry:P2,electric:L2,fishing:D2};function Hf(i="longtail",e=0){const t=Object.hasOwn(_u,i)?i:"longtail",n=_u[t](e);n.userData.kind=t,n.userData.spec=To[t];const s={longtail:[{position:[0,1.84,.15],color:16761729,intensity:19,distance:7.5}],cruise:[{position:[0,8.7,-.5],color:16762765,intensity:95,distance:31},{position:[0,8.6,15.8],color:16759685,intensity:65,distance:18}],ferry:[{position:[0,3.2,0],color:16766368,intensity:42,distance:16}],electric:[{position:[0,3.45,0],color:12774645,intensity:37,distance:13}],fishing:[{position:[0,.94,2.55],color:16760697,intensity:5,distance:4.5}]};return n.userData.lightSources=s[t],n}const kf=Object.freeze({tug:Object.freeze({length:16,width:5.4,mass:8,maxSpeed:3.2}),barge:Object.freeze({length:48,width:12.5,mass:65,maxSpeed:3.2})}),qa=new Map,eo=new Ue,Co=(i,e)=>{const t=Math.sin(i*127.1+e*311.7)*43758.5453123;return t-Math.floor(t)};function Gf(i){const t=new Uint8Array(65536);for(let s=0;s<128;s++)for(let r=0;r<128;r++){const o=(s*128+r)*4,a=i==="canvas"?(r%3===0?12:0)+(s%3===0?9:0):0,c=Co(Math.floor(r/9),Math.floor(s/6))*18,l=i==="steel"?Math.sin(r*.65)*11*(s/128):0,h=213+Co(r,s)*26-a-c-l;t[o]=t[o+1]=t[o+2]=h,t[o+3]=255}const n=new Io(t,128,128,an);return n.colorSpace=vt,n.wrapS=n.wrapT=pi,n.generateMipmaps=!0,n.minFilter=Sn,n.anisotropy=2,n.needsUpdate=!0,n}const Mu=Gf("steel"),I2=Gf("canvas"),U2={metal:new Et({vertexColors:!0,map:Mu,roughness:.78,metalness:.2}),canvas:new Et({vertexColors:!0,map:I2,roughness:.96,metalness:0,side:Ht}),paint:new Et({vertexColors:!0,map:Mu,roughness:.56,metalness:.1}),rubber:new Et({vertexColors:!0,roughness:.95,metalness:0}),glass:new Et({vertexColors:!0,roughness:.23,metalness:.35,emissive:3691609,emissiveIntensity:.16}),lamp:new dn({vertexColors:!0,toneMapped:!1})};class Vf{constructor(){this.batches=new Map}add(e,t,n,s=[0,0,0],r=[0,0,0]){e.clearGroups(),e.applyMatrix4(new Ze().compose(new R(...s),new Wt().setFromEuler(new $t(...r)),new R(1,1,1)));const o=e.index?e.toNonIndexed():e;e!==o&&e.dispose(),eo.set(n);const a=new Float32Array(o.attributes.position.count*3);for(let c=0;c<a.length;c+=3)a[c]=eo.r,a[c+1]=eo.g,a[c+2]=eo.b;o.setAttribute("color",new xt(a,3)),this.batches.has(t)||this.batches.set(t,[]),this.batches.get(t).push(o)}box(e,t,n,s,r=[0,0,0]){this.add(new ln(...e),n,s,t,r)}rod(e,t,n,s,r,o=5){const a=new R(...e),c=new R(...t),l=c.clone().sub(a),h=new mn(n,n,l.length(),o);h.applyQuaternion(new Wt().setFromUnitVectors(new R(0,1,0),l.normalize())),this.add(h,s,r,a.add(c).multiplyScalar(.5).toArray())}path(e,t,n,s,r=4){for(let o=1;o<e.length;o++)this.rod(e[o-1],e[o],t,n,s,r)}finish(e){const t=new kt;t.name=e;for(const[n,s]of this.batches){const r=Ls(s,!1);s.forEach(a=>a.dispose()),r.computeBoundingBox(),r.computeBoundingSphere();const o=new at(r,U2[n]);o.name=`${e}-${n}`,o.receiveShadow=!0,t.add(o)}return t}}function N2(i,e,t){const n=[],s=[],r=[];for(let a=0;a<=i;a++)for(let c=0;c<=e;c++)if(n.push(...t(a/i,c/e)),s.push(c/e*2,a/i*7),a<i&&c<e){const l=a*(e+1)+c;r.push(l,l+e+1,l+1,l+1,l+e+1,l+e+2)}const o=new nt;return o.setAttribute("position",new Be(n,3)),o.setAttribute("uv",new Be(s,2)),o.setIndex(r),o.computeVertexNormals(),o}function F2(i){const e=new nt;return e.setAttribute("position",new Be(i.flat(),3)),e.setAttribute("uv",new Be([0,0,1,0,1,1,0,1],2)),e.setIndex([0,1,2,0,2,3]),e.computeVertexNormals(),e}function Wf(i,e,t,n,s){const r=new ei;e.forEach(([a,c],l)=>l?r.lineTo(a,-c):r.moveTo(a,-c)),r.closePath();const o=new mi(r);o.rotateX(-Math.PI/2),i.add(o,"metal",s,[0,t,0]);for(let a=0;a<e.length;a++){const[c,l]=e[a],[h,u]=e[(a+1)%e.length];i.add(F2([[c,t,l],[h,t,u],[h*.94,-n,u*.97],[c*.94,-n,l*.97]]),"metal",s)}}function er(i,e,t,n,s,r=Math.PI/2){i.add(new In(s,s*.3,5,10),"rubber",1579801,[e,t,n],[0,r,0]),i.rod([e,t+s*1.5,n],[e,t+s*.3,n],.033,"metal",7233604,4)}function jl(i,e,t,n,s=1){i.box([.72*s,.09*s,.47*s],[e,t,n],"metal",3357497);for(const r of[-1,1])i.rod([e+r*.2*s,t,n],[e+r*.2*s,t+.43*s,n],.13*s,"metal",5858141,7),i.box([.28*s,.065*s,.32*s],[e+r*.2*s,t+.44*s,n],"metal",7042928)}function Xf(i,e,t,n,s=.5){for(let r=s;r>s*.35;r-=s*.19){const o=Array.from({length:13},(a,c)=>[e+Math.cos(c/12*Math.PI*2)*r,t,n+Math.sin(c/12*Math.PI*2)*r*.75]);i.path(o,.042,"metal",11182469,4)}}function hi(i,e,t,n=.11){i.box([n*1.6,n*2,n],e,"lamp",t)}function O2(i){const e=new Vf,t=i%3,n=[3552817,4733489,2701107],s=[8357756,6450260,7830648];Wf(e,[[-4.8,-24],[4.8,-24],[6.25,-21.4],[6.25,21.4],[4.8,24],[-4.8,24],[-6.25,21.4],[-6.25,-21.4]],1.12,1.15,n[t]);for(const c of[-1,1]){e.box([.19,.16,42.9],[c*6.12,1.24,0],"metal",8417364),e.box([.17,.14,42.3],[c*6.28,.3,0],"rubber",1778464),e.box([.11,.1,41.4],[c*5.66,1.45,-.25],"metal",7038805);for(let l=-19;l<21;l+=3.3)e.box([.035,.82,.13],[c*6.257,.61,l],"metal",7558979),e.box([.042,.32+Co(l,i)*.3,.16+Co(i,l)*.22],[c*6.276,.8,l+.28],"metal",6705470)}const o=(c,l)=>1.39+Math.sin(c*Math.PI)*1.53-Math.sin(l*Math.PI*14)**2*.065;e.add(N2(42,14,(c,l)=>[(l-.5)*10.78,o(l,c),-20.4+c*38.4]),"canvas",s[t]);for(const c of[-20.4,18]){const l=[[-5.39,1.28,c],[5.39,1.28,c]];for(let h=14;h>=0;h--)l.push([(h/14-.5)*10.78,o(h/14,c<0?0:1),c]);for(let h=1;h<l.length-1;h++){const u=new nt,f=c<0?[l[0],l[h],l[h+1]]:[l[0],l[h+1],l[h]];u.setAttribute("position",new Be(f.flat(),3)),u.setAttribute("uv",new Be([0,0,1,1,0,1],2)),u.computeVertexNormals(),e.add(u,"canvas",s[t])}}for(let c=0;c<=14;c++){const l=-20.4+c/14*38.4;e.path(Array.from({length:13},(h,u)=>[(u/12-.5)*10.88,1.43+Math.sin(u/12*Math.PI)*1.53,l]),.039,"metal",5593929);for(const h of[-1,1])e.rod([h*5.43,1.42,l],[h*5.74,1.18,l+.13],.024,"metal",9406832,4)}for(const[c,l,h]of[[-2.6,-11.1,-.36],[2.6,7.8,.36]])e.box([1.14,.016,1.38],[c,2.54,l],"canvas",t===1?9607051:6056795,[0,0,h]);for(const c of[-1,1])for(const l of[-20.9,-17.7,-9,9,17.7,20.9])er(e,c*6.22,.67,l,.46);for(const c of[-23.85,23.85])for(const l of[-3.8,3.8])er(e,l,.62,c,.48,0);for(const c of[-22.5,22.5]){for(const l of[-1,1])jl(e,l*3.85,1.14,c,1.3);e.box([1.2,.36,.36],[0,1.3,c<0?-23.5:23.5],"metal",6381137),e.box([.74,.15,.42],[0,1.49,c<0?-23.5:23.5],"rubber",1712155)}Xf(e,2.5,1.18,-22.2,.69),e.box([2.35,1.19,2.15],[-2.7,1.76,20.7],"paint",10922397),e.box([2.6,.13,2.45],[-2.7,2.43,20.7],"paint",t===1?6450260:7043700),e.box([1.55,.38,.035],[-2.7,1.98,19.615],"glass",3296077),e.box([.035,.42,.65],[-1.515,1.99,20.61],"glass",2637116),e.box([.46,.84,.035],[-2.7,1.65,21.785],"paint",6187361),e.rod([-4.66,1.15,21.7],[-4.66,3.11,21.7],.045,"metal",9214350),hi(e,[-4.66,3.14,21.7],16767392,.1),hi(e,[-5.75,1.42,-20.9],16725025,.075),hi(e,[5.75,1.42,-20.9],4251009,.075);const a=e.finish(`covered cargo barge ${t+1}`);return a.userData.lightSources=[{position:[-4.66,3.14,21.7],color:16765850,intensity:8,distance:5}],a}function z2(i){const e=new Vf,t=i%3,n=[3307125,2582156,4222560][t],s=[12411950,11093808,10251318][t],r=[[0,-8],[1.9,-7.7],[2.55,-6],[2.7,-3.5],[2.7,5.6],[2,7.6],[0,8],[-2,7.6],[-2.7,5.6],[-2.7,-3.5],[-2.55,-6],[-1.9,-7.7]];Wf(e,r,1.01,.98,2634544);const o=r.map(([u,f])=>[u*.94,f*.96]),a=new ei;o.forEach(([u,f],d)=>d?a.lineTo(u,-f):a.moveTo(u,-f)),a.closePath();const c=new mi(a);c.rotateX(-Math.PI/2),e.add(c,"paint",n,[0,1.04,0]),e.path([...r,r[0]].map(([u,f])=>[u,.87,f]),.17,"rubber",1516319,6);for(const u of[-1,1]){for(const f of[-5.7,-4.5,-3.1,-1.7,-.3,1.1,2.5,3.9,5.3])er(e,u*2.73,.57,f,.4);er(e,u*1.45,.5,-7.82,.46,0),er(e,u*1.3,.51,7.89,.46,0)}e.box([3.36,1.73,4.37],[0,1.91,-2.02],"paint",13947836),e.box([3.54,.2,4.66],[0,2.85,-2.02],"paint",n),e.box([3.1,1.38,3.55],[0,3.63,-2],"paint",14802892),e.box([3.6,.2,4.03],[0,4.43,-2],"paint",s),e.box([3.7,.07,4.14],[0,4.54,-2],"paint",s);for(const u of[-.99,0,.99])e.box([.82,.73,.045],[u,3.78,-3.8],"glass",2375237);for(const u of[-1,1]){for(const m of[-2.96,-1.94,-.92])e.box([.045,.73,.84],[u*1.575,3.78,m],"glass",3429979);e.box([.045,.89,.77],[u*1.703,1.98,-2.2],"paint",8558215),e.box([.05,.34,.51],[u*1.731,2.16,-2.2],"glass",2505792);for(const m of[-3.39,-.93])e.box([.045,.45,.73],[u*1.705,2.04,m],"glass",3296333);const f=[u*2.08,1.11,.92],d=[u*2.08,2.88,-1.3];for(const m of[-.28,.28])e.rod([f[0]+m,f[1],f[2]],[d[0]+m,d[1],d[2]],.04,"metal",10136482);for(let m=0;m<=7;m++)e.box([.59,.055,.2],[f[0],f[1]+m/7*1.77,f[2]-m/7*2.22],"metal",10200474);e.rod([u*2.3,1.17,-6.32],[u*2.3,1.93,-6.32],.036,"paint",13290421),e.rod([u*2.4,1.17,-4.75],[u*2.4,1.93,-4.75],.036,"paint",13290421),e.rod([u*2.3,1.93,-6.32],[u*2.4,1.93,-4.75],.038,"paint",13290421),hi(e,[u*1.68,4.23,-3.49],u<0?16726060:3532426,.11),e.box([.2,.085,.26],[u*1.68,4.39,-3.49],"paint",s)}e.box([1.22,.69,.045],[0,3.74,-.203],"glass",3952455),e.rod([0,4.6,-2.18],[0,6.61,-2.18],.055,"paint",14145724,6),e.rod([-.61,5.59,-2.18],[.61,5.59,-2.18],.042,"paint",14145724),e.box([1.38,.13,.26],[0,5.03,-2.29],"paint",14277057),hi(e,[0,6.65,-2.18],16769454,.105),hi(e,[0,5.67,-2.18],16769454,.095),hi(e,[0,2.79,.26],16763267,.1),e.rod([.79,2.8,-.52],[.79,4.02,-.52],.17,"metal",3160885,7),e.box([.52,.07,.46],[.79,4.1,-.52],"metal",3291698),e.rod([-.8,4.54,-.38],[-.8,5.78,-.38],.019,"metal",13094073,5);const l=[[0,.1,10758948],[.1,.1,14736331],[.2,.2,3426403],[.4,.1,14736331],[.5,.1,10758948]];for(const[u,f,d]of l)e.box([.87,f,.015],[-.365,5.66-u-f*.5,-.36],"paint",d,[0,-.25,0]);e.box([2.3,.34,1.35],[0,1.23,3.14],"paint",n),e.rod([-.84,1.75,3.14],[.84,1.75,3.14],.45,"metal",6186837,10);for(const u of[-.89,.89])e.rod([u,1.32,3.14],[u,2.04,3.14],.14,"metal",7569523,7);for(let u=-.6;u<=.6;u+=.14)e.add(new In(.45,.039,4,12),"metal",11379328,[u,1.75,3.14],[0,Math.PI/2,0]);for(const u of[-1,1])e.rod([u*1.43,1.1,4.9],[u*1.43,2.23,4.9],.1,"metal",10922912);e.rod([-1.43,2.23,4.9],[1.43,2.23,4.9],.13,"metal",11579552),e.rod([0,1.73,3.6],[0,1.52,7.71],.068,"metal",11181690,6),e.box([1,.35,.36],[0,1.35,7.61],"metal",6779491);for(const u of[-1,1])jl(e,u*1.5,1.1,6.05),jl(e,u*1.21,1.1,-6.58,.8);Xf(e,1.67,1.11,2.1,.44),e.add(new In(.34,.095,5,12),"paint",13464632,[-1.74,2.13,-.15],[0,Math.PI/2,0]),hi(e,[0,1.71,7.42],16768952,.09);const h=e.finish(`Chao Phraya working tug ${t+1}`);return h.userData.lightSources=[{position:[0,2.69,.61],color:16763535,intensity:15,distance:7}],h}function B2(i="barge",e=0){const t=i==="tug"?"tug":"barge",n=(Math.trunc(e)%3+3)%3,s=`${t}:${n}`;qa.has(s)||qa.set(s,t==="tug"?z2(n):O2(n));const r=qa.get(s).clone(!0);return r.userData.kind=t,r.userData.spec=kf[t],r.userData.towPoints=t==="tug"?{bow:[0,1.3,-7.8],stern:[0,1.52,7.8]}:{bow:[0,1.49,-23.5],stern:[0,1.49,23.5]},r}const H2=1.14,to=1.18,yu=Object.freeze({desktop:96,mobile:64}),Su=["cruise","ferry","longtail","electric","fishing","ferry","longtail","fishing"],no=900;function k2(i,e=16,t=48){if(i!==3&&i!==4)throw new RangeError("A convoy needs three or four barges");return Array.from({length:i},(n,s)=>e/2+28+t/2+s*(t+12))}function qf(i,e,t,n=1,s=12){const r=l=>{const h=i.sample(l),u=i.sample(l,Jt(t,-h.width*.34,h.width*.34)),f=l<0?l:l>i.length?l-i.length:0;return u.x-=Math.sin(u.heading)*f,u.z-=Math.cos(u.heading)*f,u},o=r(e),a=r(e-s*.35),c=r(e+s*.35);return{x:o.x,z:o.z,heading:Math.atan2(a.x-c.x,a.z-c.z)+(n===1?0:Math.PI)}}function G2(i,e,t=!1){const n=[],s=[],r=t?yu.mobile:yu.desktop,o=(a,c,l,h,u,f)=>({kind:a,variation:c,...e[a],scale:to,length:e[a].length*to,width:e[a].width*to,distance:l,direction:h,lane:u,speed:f,actualSpeed:f,slow:0,nearCooldown:0,wakeClock:0,x:0,z:0,heading:0,vx:0,vz:0});for(let a=0;a<r;a++){const c=Su[a%Su.length],l=a%2?1:-1,h=(l===1?-1:1)*(c==="fishing"?74:28+Math.floor(a/2)%3*20);n.push(o(c,a,45+a/r*(i.length-90),l,h,e[c].maxSpeed*(.8+a%4*.12)*H2))}for(let a=0;a<(t?2:3);a++){const c=a%2?4:3,l=a%2?-1:1,h=o("tug",a,1040+a*(i.length-1400)/((t?2:3)-1),l,-l*13.5,e.tug.maxSpeed*(.88+a*.03)),u={tug:h,barges:[],offsets:k2(c,h.length,e.barge.length*to)};h.convoy=u;for(let f=0;f<c;f++){const d=o("barge",a*4+f,h.distance-l*u.offsets[f],l,h.lane,h.speed);d.convoy=u,d.towed=!0,u.barges.push(d)}s.push(u),n.push(h,...u.barges)}for(const a of n)Object.assign(a,qf(i,a.distance,a.lane,a.direction,a.length));return{traffic:n,convoys:s}}function V2(i,e,t){const{traffic:n,convoys:s}=i;for(const r of n){if(r.slow=Math.max(0,r.slow-t*.6),r.nearCooldown=Math.max(0,r.nearCooldown-t),r.towed)continue;let o=r.speed/(1+r.slow);r.convoy&&(o/=1+Math.max(...r.convoy.barges.map(a=>a.slow))*.15);for(const a of n){if(a===r||r.convoy&&a.convoy===r.convoy||a.direction!==r.direction||Math.abs(a.lane-r.lane)>(a.width+r.width)/2+4)continue;const c=(a.distance-r.distance)*r.direction;if(c<=0)continue;const l=c-(a.length+r.length)/2;l<65&&(o=Math.min(o,Math.max(0,(a.actualSpeed??a.speed)+(l-14)*.32)))}r.nextSpeed=o}for(const r of n)r.towed||(r.actualSpeed=r.nextSpeed,r.distance+=r.actualSpeed*t*r.direction,r.distance>e.length+no&&(r.distance=-no),r.distance<-no&&(r.distance=e.length+no));for(const r of s)r.barges.forEach((o,a)=>{o.distance=r.tug.distance-r.tug.direction*r.offsets[a],o.actualSpeed=r.tug.actualSpeed});for(const r of n)Object.assign(r,qf(e,r.distance,r.lane,r.direction,r.length)),r.vx=-Math.sin(r.heading)*r.actualSpeed,r.vz=-Math.cos(r.heading)*r.actualSpeed}const Ya=new Map,ja={longtail:3,cruise:2,ferry:3,electric:1,fishing:2},W2={body:new Et({vertexColors:!0,roughness:.75}),dark:new Et({vertexColors:!0,roughness:.55,metalness:.1}),window:new dn({vertexColors:!0}),lamp:new dn({vertexColors:!0})},Ei=14276555,Ka=10183998,Ro=1517612,io=13460520;function bu(i){const e=new Map,t=r=>{const o=r.isMesh?new at(r.geometry,r.material):new kt;e.set(r,o),o.name=r.name,o.position.copy(r.position),o.quaternion.copy(r.quaternion),o.scale.copy(r.scale),o.visible=r.visible,o.layers.mask=r.layers.mask,o.renderOrder=r.renderOrder,o.castShadow=r.castShadow,o.receiveShadow=r.receiveShadow,o.frustumCulled=r.frustumCulled;for(const a of r.children)o.add(t(a));return o.updateMatrix(),o.matrixAutoUpdate=!1,o},n=t(i),s=r=>r?.isObject3D?e.get(r):Array.isArray(r)?r.map(s):r&&typeof r=="object"?Object.fromEntries(Object.entries(r).map(([o,a])=>[o,s(a)])):r;for(const[r,o]of e)o.userData=s(r.userData);return n.userData.motor&&(n.userData.motor.matrixAutoUpdate=!0),n.userData.propeller&&(n.userData.propeller.matrixAutoUpdate=!0),n}class X2{constructor(){this.parts=new Map}add(e,t,n,s=[0,0,0],r=[0,0,0]){const o=new Ze().compose(new R(...s),new Wt().setFromEuler(new $t(...r)),new R(1,1,1));e.applyMatrix4(o);const a=e.index?e.toNonIndexed():e;a!==e&&e.dispose();const c=new Ue(n).multiplyScalar(t==="lamp"?1.6:1),l=new Float32Array(a.attributes.position.count*3);for(let h=0;h<l.length;h+=3)l[h]=c.r,l[h+1]=c.g,l[h+2]=c.b;a.setAttribute("color",new xt(l,3)),a.deleteAttribute("uv"),a.attributes.normal||a.computeVertexNormals(),this.parts.has(t)||this.parts.set(t,[]),this.parts.get(t).push(a)}box(e,t,n=Ei,s="body",r){this.add(new ln(...e),s,n,t,r)}beam(e,t,n,s=Ro,r="dark"){const o=new R(...e),a=new R(...t),c=a.clone().sub(o),l=new mn(n,n,c.length(),4);l.applyQuaternion(new Wt().setFromUnitVectors(new R(0,1,0),c.normalize())),this.add(l,r,s,o.add(a).multiplyScalar(.5).toArray())}hull(e,t,n,s,r,o=0,a=!1){const c=[[0,.035],[.1,.58],[.25,.94],[.47,1],[.73,.97],[.9,.83],[1,.52]],l=[],h=[];for(const[d,m]of c){const x=m*t/2,g=n+(d<.1?.22:0),p=(d-.5)*e;l.push(-x+o,g,p,-x*.68+o,-s,p,x*.68+o,-s,p,x+o,g,p)}for(let d=0;d<c.length-1;d++)for(let m=0;m<(a?3:4);m++){const x=d*4+m,g=d*4+(m+1)%4,p=(d+1)*4+m,M=(d+1)*4+(m+1)%4;h.push(x,g,p,g,M,p)}h.push(0,2,1,0,3,2);const u=(c.length-1)*4;h.push(u,u+1,u+2,u,u+2,u+3);const f=new nt;if(f.setAttribute("position",new Be(l,3)),f.setIndex(h),this.add(f,"body",r),a){this.box([t*.69,.1,e*.74],[o,.05,e*.03],5059875);for(const d of[-1,1])this.beam([o+d*t*.42,n,-e*.34],[o+d*t*.43,n,e*.4],.065,r,"body")}}nav(e,t,n,s){this.box([.16,.19,.22],[-e,t,n],16726310,"lamp"),this.box([.16,.19,.22],[e,t,n],3530119,"lamp"),this.box([.17,.21,.17],[0,t+.2,s],16768922,"lamp")}person(e,t,n,s=2586231){this.box([.38,.57,.3],[e,t+.71,n],s),this.box([.35,.18,.58],[e,t+.4,n-.1],Ro,"dark"),this.add(new Li(.18),"body",12094311,[e,t+1.1,n])}finish(e){const t=new kt;t.name=e;for(const[n,s]of this.parts){const r=Ls(s,!1);for(const a of s)a.dispose();r.computeBoundingSphere();const o=new at(r,W2[n]);o.name=`${e}-${n}`,t.add(o)}return t}}function q2(i,e){const t=new X2;if(i==="cruise"){t.hull(55,13,1.45,1.6,Ei);for(const[n,s,r,o]of[[1.48,11.65,44,1],[4.08,11.55,43,1.4],[6.54,10.25,39.5,1.8]])t.box([s,.24,r],[0,n,o]);for(const n of[2.8,5.4]){t.box([10.5,2,39.8],[0,n,1.3],Ro,"dark");for(const s of[-1,1])for(let r=0;r<15;r++)t.box([.07,1.4,2.28],[s*5.29,n,-17.1+r*2.62],r%4?9134900:5127725,"window");t.box([8.9,1.25,.06],[0,n,21.24],9134900,"window")}for(const n of[-1,1]){for(const s of[1.68,4.3,6.8])t.box([.09,.1,40],[n*(s>6?4.95:5.76),s,1.5],16763521,"lamp");t.beam([n*4.2,6.7,-15.5],[n*4.2,9,-15.5],.045,Ei,"body"),t.beam([n*4.2,9,-15.5],[n*4.2,8.8,19.5],.025,14659186,"lamp")}t.box([5.1,1.9,3.25],[0,7.6,-16.45]),t.box([4.5,.98,.06],[0,7.8,-18.11],2110524,"dark"),t.box([5.4,.18,3.6],[0,8.65,-16.45]),t.box([8.8,.18,6],[0,9.12,16.7]),t.beam([0,8.7,-15.9],[0,10.25,-15.9],.06,Ei,"body"),t.nav(5.3,6.25,-16.8,22)}else if(i==="ferry"){t.hull(30,5.5,.97,.7,Ei);for(const n of[-1,1]){t.box([.15,.38,23.2],[n*2.6,1.18,.7],io),t.box([.1,.23,22.5],[n*2.53,3.37,.7],io),t.box([.05,.08,20],[n*2.36,3.24,.7],10978124,"window");for(let s=-9.8;s<12;s+=4.2)t.box([.09,2.15,.09],[n*2.44,2.2,s])}t.box([5.11,.19,22.5],[0,3.45,.7]),t.box([3.5,1.55,2.67],[0,1.94,-10.49]),t.box([3.1,.99,.06],[0,2.08,-11.85],2373692,"dark"),t.box([3.85,.14,3],[0,2.84,-10.49],io);for(const n of[-5,1,7])t.person(n%2?-.8:.8,1.04,n);t.beam([0,1.3,-13.5],[0,4.1,-13.5],.035,Ro),t.box([.04,.6,1.3],[0,3.7,-12.9],e%3===1?13872453:io),t.nav(2.28,3.32,-9.1,12.6)}else if(i==="electric"){for(const n of[-1,1])t.hull(24,2.1,1.03,.63,Ei,n*2.36);t.box([6.8,.3,20.4],[0,1.18,0]),t.box([5.8,1.8,17.8],[0,2.58,0],2176312,"dark"),t.box([6.39,.24,18.82],[0,3.69,0]),t.box([5.8,.05,17.6],[0,3.84,0],1584185,"dark");for(const n of[-1,1]){for(let s=-7;s<=7;s+=2)t.box([.06,1.48,1.72],[n*2.93,2.55,s],6523790,"window");t.box([.12,.09,18.5],[n*3.18,3.65,0],7980767,"lamp")}t.nav(3.04,3.6,-7.2,9)}else if(i==="longtail"){t.hull(12.4,2.35,.78,.38,Ka,0,!0),t.box([2.17,.18,6.2],[0,2.08,.15],e%3===1?10301993:1207401);for(const n of[-1,1])for(const s of[-2.6,2.9])t.box([.055,1.4,.055],[n*1.02,1.42,s],11187118);for(const n of[-1.2,1.9])t.person(-.35,.2,n,11844012);t.person(-.16,.4,4.21,2509135),t.box([.74,.57,.9],[0,1.21,5.4],1845544,"dark"),t.beam([0,1.07,5.4],[0,-.15,8.9],.045,8754582),t.beam([0,.75,-5.5],[0,1.78,-6.22],.085,Ka,"body"),t.box([.25,.48,.16],[0,1.36,-6.13],13069865),t.nav(1.08,2.06,-2.66,4.7)}else{t.hull(6.5,1.55,.4,.27,e%2?5255713:Ka,0,!0);for(const n of[-1.86,.3,2.08])t.box([1.07,.08,.3],[0,.36,n],12096096);t.person(0,-.02,.32),t.box([.48,.38,.55],[.2,.27,1.45],Ei),t.beam([.12,.7,-.02],[1.4,1.82,-2.5],.023,5520421),t.box([.12,.18,.12],[0,.96,2.55],16762240,"lamp")}return t.finish(`${i}-distant`)}function Kl(i,e,t=i?.userData?.mobile??!1){if(!i?.isLOD||i.levels.length!==2||typeof i.userData.setDetail!="function")return;const s=e<(t?160:220)*(i.userData.detail==="near"?1.06:.94);i.levels[0].object.visible=s,i.levels[1].object.visible=!s,i.userData.detail=s?"near":"far"}function Y2(i,e=0,t=!1){const n=Object.hasOwn(To,i)?i:"longtail",s=(Math.trunc(e)%ja[n]+ja[n])%ja[n],r=`${n}:${s}`;Ya.has(r)||Ya.set(r,{near:Hf(n,s),far:q2(n,s)});const o=Ya.get(r),a=bu(o.near),c=bu(o.far),l=new Ip;return l.name=`${n}-traffic`,l.autoUpdate=!1,l.addLevel(a,0),l.addLevel(c,t?160:220),l.userData={...a.userData,kind:n,spec:To[n],mobile:t,detail:"near"},l.userData.setDetail=h=>Kl(l,h),Kl(l,0),l}function j2(i,e){const n=[];for(const l of e){let h=l.tug;for(const u of l.barges)n.push([h,u]),h=u}const s=new Float32Array(n.length*10*2*3),r=new nt;r.setAttribute("position",new xt(s,3).setUsage(Hi));const o=new Bp(r,new of({color:8945510}));o.name="articulated-convoy-towlines",o.frustumCulled=!1,i.add(o);const a=new R,c=new R;return{update(){let l=0;for(const[h,u]of n){h.mesh.updateMatrixWorld(),u.mesh.updateMatrixWorld(),h.mesh.localToWorld(a.fromArray(h.mesh.userData.towPoints.stern)),u.mesh.localToWorld(c.fromArray(u.mesh.userData.towPoints.bow));for(let f=0;f<10;f++)for(const d of[f/10,(f+1)/10])s[l++]=ps.lerp(a.x,c.x,d),s[l++]=Math.max(.35,ps.lerp(a.y,c.y,d)-Math.sin(d*Math.PI)*.65),s[l++]=ps.lerp(a.z,c.z,d)}r.attributes.position.needsUpdate=!0}}}function K2(i,e){const t=e.filter(s=>s.mesh.isLOD).map(s=>({near:s.mesh.levels[0].object,far:s.mesh.levels[1].object,nearVisible:!1,farVisible:!1})),n=i.onBeforeRender;i.onBeforeRender=function(...s){for(const r of t)r.nearVisible=r.near.visible,r.farVisible=r.far.visible,r.near.visible=!1,r.far.visible=!0;try{return n.apply(this,s)}finally{for(const r of t)r.near.visible=r.nearVisible,r.far.visible=r.farVisible}}}class Z2{constructor({pause:e,horn:t,recover:n}){this.keys=new Set,this.touch={steer:0,gas:!1,brake:!1,boost:!1,drift:!1},this.enabled=!1,this.previousPad={},window.addEventListener("keydown",s=>{["INPUT","SELECT","BUTTON"].includes(s.target.tagName)&&s.code==="Space"||(["ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Space"].includes(s.code)&&s.preventDefault(),this.keys.add(s.code),s.repeat||(s.code==="Escape"&&e(),s.code==="KeyH"&&this.enabled&&t(),s.code==="KeyR"&&this.enabled&&n()))}),window.addEventListener("keyup",s=>this.keys.delete(s.code)),window.addEventListener("blur",()=>{this.clear(),e(!0)}),document.addEventListener("visibilitychange",()=>{document.hidden&&(this.clear(),e(!0))}),this.pause=e,this.horn=t,this.recover=n}clear(){this.keys.clear(),this.touch={steer:0,gas:!1,brake:!1,boost:!1,drift:!1},document.querySelectorAll(".pressed").forEach(e=>e.classList.remove("pressed")),document.querySelector("#steer-pad")?.style.setProperty("--thumb","0px")}bind(){for(const r of document.querySelectorAll("[data-control]")){const o=r.dataset.control;r.addEventListener("pointerdown",c=>{c.preventDefault(),r.setPointerCapture(c.pointerId),this.touch[o]=!0,r.classList.add("pressed")});const a=()=>{this.touch[o]=!1,r.classList.remove("pressed")};r.addEventListener("pointerup",a),r.addEventListener("pointercancel",a),r.addEventListener("lostpointercapture",a)}const e=document.querySelector("#steer-pad");let t=null;const n=r=>{const o=e.getBoundingClientRect();this.touch.steer=Math.max(-1,Math.min(1,(r.clientX-o.left-o.width/2)/(o.width*.36))),e.style.setProperty("--thumb",`${this.touch.steer*30}px`)};e.addEventListener("pointerdown",r=>{t=r.pointerId,e.setPointerCapture(t),n(r)}),e.addEventListener("pointermove",r=>{t===r.pointerId&&n(r)});const s=()=>{t=null,this.touch.steer=0,e.style.setProperty("--thumb","0px")};e.addEventListener("pointerup",s),e.addEventListener("pointercancel",s),e.addEventListener("lostpointercapture",s)}read(){const e=this.keys,t=this.touch,n=navigator.getGamepads?.()?.find(l=>l?.connected);let s=(e.has("KeyD")||e.has("ArrowRight")?1:0)-(e.has("KeyA")||e.has("ArrowLeft")?1:0);t.steer&&(s=t.steer);let r=e.has("KeyW")||e.has("ArrowUp")||t.gas||t.boost||t.drift,o=e.has("KeyS")||e.has("ArrowDown")||t.brake,a=e.has("ShiftLeft")||e.has("ShiftRight")||t.boost,c=e.has("Space")||t.drift;if(n){Math.abs(n.axes[0])>.12&&(s=n.axes[0]),r=r||n.buttons[7]?.value>.1,o=o||n.buttons[6]?.value>.1,a=a||n.buttons[0]?.pressed,c=c||n.buttons[1]?.pressed;for(const[l,h]of[[9,this.pause],[3,this.horn],[2,this.recover]])n.buttons[l]?.pressed&&!this.previousPad[l]&&h();this.previousPad=Object.fromEntries(n.buttons.map((l,h)=>[h,l.pressed]))}return this.enabled?{steer:s,gas:r,brake:o,boost:a,drift:c}:{}}}class J2{constructor(e,t){this.count=t?650:1400,this.index=0,this.life=new Float32Array(this.count),this.velocity=new Float32Array(this.count*3),this.positions=new Float32Array(this.count*3),this.sizes=new Float32Array(this.count),this.alphas=new Float32Array(this.count),this.baseSize=new Float32Array(this.count);const n=new nt;n.setAttribute("position",new xt(this.positions,3)),n.setAttribute("size",new xt(this.sizes,1)),n.setAttribute("alpha",new xt(this.alphas,1)),this.geometry=n;const s=new gt({transparent:!0,depthWrite:!1,blending:Ii,uniforms:{color:{value:new Ue("#9db9b7")}},vertexShader:"attribute float size;attribute float alpha;varying float a;void main(){a=alpha;vec4 p=modelViewMatrix*vec4(position,1.);gl_PointSize=clamp(size*420./max(1.,-p.z),1.,24.);gl_Position=projectionMatrix*p;}",fragmentShader:"uniform vec3 color;varying float a;void main(){float d=length(gl_PointCoord-.5)*2.;if(d>1.)discard;float foam=(1.-smoothstep(.15,1.,d));gl_FragColor=vec4(color,a*foam);}",toneMapped:!1});this.mesh=new xc(n,s),this.mesh.frustumCulled=!1,this.mesh.layers.set(1),e.add(this.mesh)}emit(e,t,n,s,r=1){const o=this.index++%this.count,a=o*3,c=Math.random()>.5?1:-1,l=Math.cos(n),h=-Math.sin(n);this.positions[a]=e+l*c*(1+Math.random()),this.positions[a+1]=.18+Math.random()*.25,this.positions[a+2]=t+h*c*(1+Math.random()),this.velocity[a]=l*c*(1.5+Math.random()*2)+Math.sin(n)*s*.05,this.velocity[a+1]=Math.random()*(s>25?2:.3),this.velocity[a+2]=h*c*(1.5+Math.random()*2)+Math.cos(n)*s*.05,this.life[o]=1.8+Math.random(),this.baseSize[o]=r*.58}update(e){for(let t=0;t<this.count;t++){if(this.life[t]<=0){this.alphas[t]=0;continue}this.life[t]-=e;const n=t*3;this.positions[n]+=this.velocity[n]*e,this.positions[n+2]+=this.velocity[n+2]*e,this.positions[n+1]=Math.max(.14,this.positions[n+1]+this.velocity[n+1]*e),this.velocity[n+1]-=e*3,this.sizes[t]=this.baseSize[t]*(3.3-this.life[t])*.8,this.alphas[t]=Math.min(.18,this.life[t]*.1)}for(const t of Object.values(this.geometry.attributes))t.needsUpdate=!0}clear(){this.life.fill(0),this.alphas.fill(0)}}class Q2{constructor(e,t=48){this.trails=new Map,this.max=t*40*18,this.positions=new Float32Array(this.max*3),this.uv=new Float32Array(this.max*2),this.alpha=new Float32Array(this.max);const n=this.geometry=new nt;n.setAttribute("position",new xt(this.positions,3)),n.setAttribute("uv",new xt(this.uv,2)),n.setAttribute("aFade",new xt(this.alpha,1)),n.setDrawRange(0,0);const s=this.material=new gt({transparent:!0,depthWrite:!1,side:Ht,uniforms:{time:{value:0}},vertexShader:"attribute float aFade;varying float fade;varying vec2 vUv;varying vec2 riverPoint;void main(){fade=aFade;vUv=uv;riverPoint=position.xz;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:`varying float fade;varying vec2 vUv;varying vec2 riverPoint;uniform float time;
 float hash(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}
 float noise(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);return mix(mix(hash(i),hash(i+vec2(1,0)),f.x),mix(hash(i+vec2(0,1)),hash(i+vec2(1,1)),f.x),f.y);}
 // Interpolated UVs and GPU sine approximations can stray just outside [0,1].
 // A negative fractional-power base creates NaNs that bloom spreads over the view.
 void main(){float edge=pow(max(0.,sin(clamp(vUv.x,0.,1.)*3.14159)),.75);vec2 p=riverPoint*2.4+vec2(time*.12,-time*.08);float n=noise(p)*.65+noise(p*3.1)*.35;
 float foam=smoothstep(.24,.70,n)*(.6+.4*noise(p*.4));gl_FragColor=vec4(vec3(.33,.41,.40),foam*edge*fade);
 #include <tonemapping_fragment>
 #include <colorspace_fragment>
 }`});this.mesh=new at(n,s),this.mesh.frustumCulled=!1,this.mesh.layers.set(1),e.add(this.mesh),this.clock=0,this.geometryAge=0;for(const r of Object.values(n.attributes))r.setUsage(Hi)}clear(){this.trails.clear(),this.geometry.setDrawRange(0,0)}update(e,t){if(this.material.uniforms.time.value+=e,this.geometryAge+=e,this.geometryAge<1/30)return;e=this.geometryAge,this.geometryAge=0,this.clock+=e;const n=this.clock>.07;n&&(this.clock=0);let s=0;const r=(o,a,c,l,h)=>{if(s>=this.max)return;const u=s*3;this.positions[u]=o,this.positions[u+1]=.15+Math.sin(o*.47+a*.28+this.material.uniforms.time.value*1.1)*.095+Math.sin(a*.73-o*.22-this.material.uniforms.time.value*1.42)*.038,this.positions[u+2]=a,this.uv[s*2]=c,this.uv[s*2+1]=l,this.alpha[s]=h,s++};for(const o of this.trails.values()){for(const a of o)a.age+=e;for(;o.length&&o.at(-1).age>2.4;)o.pop()}for(const o of t){let a=this.trails.get(o);a||(a=[],this.trails.set(o,a));const c=Math.hypot(o.vx,o.vz);n&&c>2&&(a.unshift({x:o.x+Math.sin(o.heading)*(o.length||12)*.45,z:o.z+Math.cos(o.heading)*(o.length||12)*.45,heading:o.heading,age:0,width:o.width||2.35,speed:c}),a.length>39&&a.pop());for(let l=1;l<a.length;l++){const h=a[l-1],u=a[l];for(const f of[-1,0,1]){const d=p=>{const M=p.width*.35+p.age*(1.8+p.speed*.035),_=.35+p.age*(.8+p.width*.12),v=Math.cos(p.heading)*(f||1),w=-Math.sin(p.heading)*(f||1);if(f===0){const A=p.width*.18+p.age*.38;return[{x:p.x-v*A,z:p.z-w*A},{x:p.x+v*A,z:p.z+w*A}]}return[{x:p.x+v*M,z:p.z+w*M},{x:p.x+v*(M+_),z:p.z+w*(M+_)}]},m=d(h),x=d(u),g=p=>Math.max(0,1-p.age/2.4)*Math.min(1,p.age*12)*(f===0?.6:.74);for(const[p,M,_,v]of[[m[0],0,l-1,g(h)],[m[1],1,l-1,g(h)],[x[0],0,l,g(u)],[m[1],1,l-1,g(h)],[x[1],1,l,g(u)],[x[0],0,l,g(u)]])r(p.x,p.z,M,_*.07,v)}}}this.geometry.setDrawRange(0,s);for(const o of Object.values(this.geometry.attributes))o.clearUpdateRanges(),o.addUpdateRange(0,s*o.itemSize),o.needsUpdate=!0}}function Yf(i,e,t=0){const n=i.createGain(),s=i.createStereoPanner();s.pan.value=Math.max(-1,Math.min(1,t)),n.connect(s).connect(e);const r=[],o=[n,s];let a;const c=new Promise(f=>{a=f});let l=0,h=!1;function u(){h||(h=!0,o.forEach(f=>f.disconnect()),a())}return{output:n,nodes:o,sources:r,done:c,add(f){r.push(f),l++,f.onended=()=>{f.disconnect(),--l===0&&u()}},stop(){for(const f of r)try{f.stop()}catch{}u()}}}function wu(i,e,t,n,s=.025){const r=i.createGain();return r.gain.setValueAtTime(0,e),r.gain.linearRampToValueAtTime(n,e+s),r.gain.setTargetAtTime(1e-4,e+s,(t-s)/5),r.gain.setValueAtTime(0,e+t),r}function Eu(i,e,t,{pan:n=0,distance:s=40}={}){const r={cruise:138,tug:122,barge:122,ferry:224,electric:256,longtail:328,fishing:380},o=r[t]||r.ferry,a=Yf(i,e,n),c=i.currentTime;a.output.gain.value=Math.max(1.9,2.05/(1+Math.max(0,s-35)/900));const l=i.createBiquadFilter();l.type="lowpass",l.frequency.value=2900,l.Q.value=.5,l.connect(a.output),a.nodes.push(l);for(const[h,u]of[[0,.19],[.29,.49]])for(const[f,d,m]of[[1,.28,"sawtooth"],[1.255,.24,"sawtooth"],[2,.2,"triangle"],[3,.12,"sine"]]){const x=i.createOscillator(),g=i.createGain(),p=c+h;g.gain.setValueAtTime(0,p),g.gain.linearRampToValueAtTime(d,p+.018),g.gain.linearRampToValueAtTime(d*.92,p+u*.8),g.gain.exponentialRampToValueAtTime(1e-4,p+u),x.type=m,x.frequency.setValueAtTime(o*f*.985,c+h),x.frequency.exponentialRampToValueAtTime(o*f,c+h+.035),x.connect(g).connect(l),a.nodes.push(g),a.add(x),x.start(c+h),x.stop(c+h+u+.02)}return a}function $2(i){const e=i.createBuffer(1,Math.ceil(i.sampleRate*1.3),i.sampleRate),t=e.getChannelData(0);for(let n=0;n<t.length;n++)t[n]=Math.random()*2-1;return e}function e_(i,e,t,{fatal:n=!0}={}){const s=Yf(i,e),r=i.currentTime;s.output.gain.value=n?.9:.55;for(const[c,l,h,u,f]of[[0,.2,1050,.55,"bandpass"],[.025,.48,200,.8,"lowpass"],[.07,1.05,1600,.35,"lowpass"]]){const d=i.createBufferSource(),m=i.createBiquadFilter(),x=wu(i,r+c,l,u,.007);d.buffer=t,m.type=f,m.frequency.setValueAtTime(h,r+c),m.frequency.exponentialRampToValueAtTime(Math.max(80,h*.23),r+c+l),m.Q.value=.7,d.connect(m).connect(x).connect(s.output),s.nodes.push(m,x),s.add(d),d.start(r+c),d.stop(r+c+l+.02)}const o=i.createOscillator(),a=wu(i,r,.55,.55,.008);return o.type="sine",o.frequency.setValueAtTime(112,r),o.frequency.exponentialRampToValueAtTime(34,r+.5),o.connect(a).connect(s.output),s.nodes.push(a),s.add(o),o.start(r),o.stop(r+.58),s}class t_{constructor(){this.effects=new Set,this.warningEffects=new Set,this.generation=0,this.muted=!1,this.musicEnabled=!0,this.active=!1,this.music=new Audio("/longtail/audio/exit-the-premises.mp3"),this.music.loop=!0,this.music.preload="none",this.music.volume=.32,this.lastHorn=-10}async start(){this.stopEffects(),this.active=!0;const e=++this.generation;try{if(!this.ctx){const t=window.AudioContext||window.webkitAudioContext;this.ctx=new t;const n=this.ctx;this.master=n.createGain(),this.master.gain.value=.5,this.master.connect(n.destination),this.ambience=n.createGain(),this.ambience.connect(this.master),this.musicSource=n.createMediaElementSource(this.music),this.musicGain=n.createGain(),this.musicGain.gain.value=.64,this.music.volume=1,this.musicSource.connect(this.musicGain).connect(this.ambience),this.engine=n.createGain(),this.engine.gain.value=0;const s=n.createBiquadFilter();s.type="lowpass",s.frequency.value=1e3,this.engine.connect(s).connect(this.ambience),this.oscs=[1,2,3].map((h,u)=>{const f=n.createOscillator(),d=n.createGain();return f.type=u===0?"sawtooth":"triangle",f.frequency.value=32*h,d.gain.value=[.12,.045,.025][u],f.connect(d).connect(this.engine),f.start(),f});const r=n.createBuffer(1,n.sampleRate*2,n.sampleRate),o=r.getChannelData(0);let a=0;for(let h=0;h<o.length;h++)a=(a+Math.random()*.12-.06)*.97,o[h]=a;this.noiseBuffer=r,this.impactBuffer=$2(n);const c=n.createBufferSource();c.buffer=r,c.loop=!0,this.waterGain=n.createGain(),this.waterGain.gain.value=0;const l=n.createBiquadFilter();l.type="highpass",l.frequency.value=280,c.connect(l).connect(this.waterGain).connect(this.ambience),c.start()}await this.ctx.resume(),e===this.generation&&this.active&&this.sync()}catch{this.active=!1}}sync(){this.master&&(this.master.gain.cancelScheduledValues(this.ctx.currentTime),this.master.gain.setTargetAtTime(this.muted||!this.active?0:.5,this.ctx.currentTime,.06)),this.active&&!this.muted&&this.musicEnabled?this.music.play().catch(()=>{}):this.music.pause()}pause(e=0){if(this.playerHornEffect?.stop(),this.stopEffects(e>0?this.warningEffects:this.effects),this.generation++,this.active=!1,this.music.pause(),this.ctx){const t=this.ctx.currentTime;this.engine.gain.setTargetAtTime(0,t,.02),this.waterGain.gain.setTargetAtTime(0,t,.02),this.master.gain.cancelScheduledValues(t),this.master.gain.setTargetAtTime(0,t+e,.04)}}stopEffects(e=this.effects){for(const t of e)t.stop();e.clear()}track(e,t=!1){this.effects.add(e),t&&this.warningEffects.add(e),e.done.then(()=>{this.effects.delete(e),this.warningEffects.delete(e)})}warningHorn(e,t){!this.ctx||!this.active||this.muted||(this.stopEffects(this.warningEffects),this.track(Eu(this.ctx,this.master,e,t),!0))}impact(e=!0,t=1){if(!this.ctx||!this.active||this.muted)return;const n=e_(this.ctx,this.master,this.impactBuffer,{fatal:e});n.output.gain.value*=Math.min(1,Math.max(.1,t)),this.track(n)}mute(){return this.muted=!this.muted,this.sync(),this.muted}musicToggle(){return this.musicEnabled=!this.musicEnabled,this.sync(),this.musicEnabled}update(e,t){if(!this.ctx||!this.active)return;const n=this.ctx.currentTime,s=32+Math.abs(e)*2.6+(t?16:0);this.oscs.forEach((r,o)=>r.frequency.setTargetAtTime(s*(o+1),n,.09)),this.engine.gain.setTargetAtTime(.16+Math.min(Math.abs(e)/45,1)*.27,n,.08),this.waterGain.gain.setTargetAtTime(.06+Math.min(Math.abs(e),53)*.009,n,.1)}tone(e,t=.15,n=.14,s="sine",r=0,o=e){if(!this.ctx||this.muted||!this.active)return;const a=this.ctx,c=a.currentTime+r,l=a.createOscillator(),h=a.createGain();l.type=s,l.frequency.setValueAtTime(e,c),l.frequency.exponentialRampToValueAtTime(Math.max(20,o),c+t),h.gain.setValueAtTime(0,c),h.gain.linearRampToValueAtTime(n,c+.014),h.gain.exponentialRampToValueAtTime(1e-4,c+t),l.connect(h).connect(this.master),l.start(c),l.stop(c+t+.04),l.onended=()=>{l.disconnect(),h.disconnect()}}horn(){if(!this.ctx||!this.active||this.muted||this.ctx.currentTime-this.lastHorn<.28)return;this.lastHorn=this.ctx.currentTime,this.playerHornEffect?.stop();const e=Eu(this.ctx,this.master,"longtail",{distance:0});return e.output.gain.value*=.75,this.playerHornEffect=e,this.track(e),e}event(e){e==="pickup"?(this.tone(660,.12,.15),this.tone(880,.22,.15,"sine",.12)):e==="delivered"?[523,659,784,1046].forEach((t,n)=>this.tone(t,.3,.16,"triangle",n*.09)):e==="near"||e==="slide"?this.tone(900,.14,.08,"triangle",0,1300):e==="crash"?this.impact():this.tone(240,.35,.12,"triangle",0,140)}}function n_(i,e,t=2.5){const n=Math.hypot(i.vx,i.vz);if(n<3)return null;const s={...i,length:12,width:2.5},r=e.x-s.x,o=e.z-s.z,a=e.vx-s.vx,c=e.vz-s.vz,l=Math.hypot(a,c),h=Math.hypot(r,o);if(l<1||r*a+o*c>=-h)return null;const u=Math.min(1.4,Math.max(.65,n*.025));if(h>l*t+(s.length+e.length)/2+u)return null;const f=p=>Ho(s,{...e,x:e.x+a*p,z:e.z+c*p}).gap;if(f(0)<=0)return null;let d=0,m=t;for(let p=0;p<18;p++){const M=d+(m-d)/3,_=m-(m-d)/3;f(M)<f(_)?m=_:d=M}let x=(d+m)/2;f(t)<f(x)&&(x=t);const g=f(x);if(g>u)return null;d=0,m=x;for(let p=0;p<14;p++){const M=(d+m)/2;f(M)>u?d=M:m=M}return{time:m,clearance:g,distance:h}}function i_(i,e){const t=n_(i,e);if(!t)return null;const n=-Math.sin(e.heading),s=-Math.cos(e.heading),r=i.x-e.x,o=i.z-e.z,a=r*n+o*s,c=r*s-o*n;if(a<-e.length*.25&&Math.abs(c)<-a*.65&&t.time>.85)return null;const h=Math.max(0,(e.length-e.width)/2),u=Math.max(-h,Math.min(h,a)),f=e.x+n*u-i.x,d=e.z+s*u-i.z,m=(-Math.sin(i.heading)*f-Math.cos(i.heading)*d)/Math.max(1,Math.hypot(f,d));return m<.87&&t.time>.85?null:{...t,aim:m,emergency:t.time<.85}}class s_{constructor(){this.reset()}reset(){this.clock=0,this.scan=0,this.nextHorn=0,this.cooldowns=new Map,this.primary=null,this.pending=null,this.pendingSince=0}update(e,t,n,s=t.heading){if(this.clock+=e,this.scan-=e,this.scan>0)return null;this.scan=.08;const r=new Map;for(const f of n){const d=f.convoy?.tug||f,m=i_(t,f);m&&(!r.has(d)||m.time<r.get(d).time)&&r.set(d,{...m,source:d})}let o=[...r.values()].sort((f,d)=>f.time-d.time)[0];const a=r.get(this.primary);if(a&&o?.source!==a.source&&!(o.time<1.2&&o.time+.6<a.time)&&(o=a),this.primary=o?.source||null,this.pending!==this.primary&&(this.pending=this.primary,this.pendingSince=this.clock),!o||this.clock<this.nextHorn||!o.emergency&&this.clock-this.pendingSince<.14||this.clock-(this.cooldowns.get(o.source)??-1/0)<(o.time<1.5?1.8:3.2))return null;const l=o.source.x-t.x,h=o.source.z-t.z,u=Math.hypot(l,h);return this.cooldowns.set(o.source,this.clock),this.nextHorn=this.clock+1.15,{...o,distance:u,pan:Math.max(-.85,Math.min(.85,(l*Math.cos(s)-h*Math.sin(s))/Math.max(u,1)))}}}const r_=850,jf={cruise:"dinner cruise",ferry:"express ferry",electric:"electric ferry",longtail:"long-tail boat",fishing:"fishing boat",tug:"tugboat",barge:"cargo barge"};class o_{constructor(e){this.root=e,this.timer=null,this.overlay=document.createElement("div"),this.overlay.className="damage-overlay",this.overlay.hidden=!0,this.overlay.setAttribute("aria-hidden","true"),this.caption=document.createElement("div"),this.caption.className="crash-caption",this.caption.hidden=!0,this.caption.setAttribute("role","alert");const t=document.createElement("strong");t.textContent="CRASHED",this.detail=document.createElement("span"),this.caption.append(t,this.detail),e.append(this.overlay,this.caption)}reset(){clearTimeout(this.timer),this.timer=null,this.overlay.hidden=!0,this.caption.hidden=!0,this.root.classList.remove("crashed")}impact({fatal:e=!1,kind:t,intensity:n=1,onComplete:s}={}){this.reset(),this.overlay.hidden=!1,this.overlay.style.setProperty("--impact-opacity",String(Math.min(1,Math.max(.1,n)))),this.overlay.className=`damage-overlay ${e?"fatal":"minor"}`,this.overlay.getAnimations().forEach(r=>{r.cancel(),r.play()}),e?(this.root.classList.add("crashed"),this.detail.textContent=`Collision: ${jf[t]||"boat"}`,this.caption.hidden=!1,this.timer=setTimeout(()=>{this.caption.hidden=!0,this.timer=null,s?.()},r_)):this.timer=setTimeout(()=>{this.overlay.hidden=!0,this.timer=null},900)}}function a_(i){return null}class l_{constructor(e=1,t=!1){this.maximum=Math.min(e,t?1.75:1.5),this.minimum=Math.min(this.maximum,t?1.25:1),this.ratio=this.maximum,this.warmup=4,this.elapsed=0,this.frames=0,this.fastTime=0}update(e){if(!Number.isFinite(e)||e<=0||e>.12)return this.elapsed=0,this.frames=0,null;if(this.warmup>0)return this.warmup-=e,null;if(this.elapsed+=e,this.frames++,this.elapsed<3)return null;const t=this.frames/this.elapsed,n=this.ratio;return t<50?(this.ratio=Jt(this.ratio-.15,this.minimum,this.maximum),this.fastTime=0):t>58?(this.fastTime+=this.elapsed,this.fastTime>15&&(this.ratio=Math.min(this.maximum,this.ratio+.05),this.fastTime=0)):this.fastTime=0,this.elapsed=0,this.frames=0,Math.abs(this.ratio-n)>.001?this.ratio:null}}function c_(i,e,{ratio:t=null,size:n=null,smaa:s,fxaa:r,frameMeter:o,frameDt:a=0}={}){t!==null&&(i.setPixelRatio(t),e.setPixelRatio(t),s&&(t<=1.1?(s.enabled=!1,r.enabled=!0):t>=1.25&&(s.enabled=!0,r.enabled=!1))),n&&(i.setSize(n.width,n.height),e.setSize(n.width,n.height)),o?.begin(),e.render(),o?.end(a)}const fe=i=>document.querySelector(i),An=matchMedia("(pointer:coarse)").matches||innerWidth<700,h_='<svg viewBox="0 0 40 40" fill="none" aria-hidden="true"><path d="M4 23h32l-7 9H13L4 23Z" stroke="currentColor" stroke-width="1.7"/><path d="m12 20 4-10h14l5 10M20 10v12M6 37q5-4 10 0t10 0t10 0" stroke="currentColor" stroke-width="1.7"/></svg>',Tu='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><path d="m10 5-5 4H2v6h3l5 4V5ZM14 8q5 4 0 8M17 4q9 8 0 16"/></svg>',u_='<svg viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M8 5v14M16 5v14"/></svg>',Au=`<div class="brand">${h_}<div>BANGKOK<strong>LONGTAIL</strong></div></div>`,Cu="<span><b>W A S D</b> Pilot</span><span><b>SHIFT</b> Boost</span><span><b>SPACE</b> Slide</span><span><b>H</b> Horn</span><span><b>R</b> Recover</span>";fe("#app").innerHTML=`
<canvas id="scene" aria-label="Bangkok long-tail boat game"></canvas><div id="vignette"></div>
<section id="menu" class="screen">
 <header>${Au}</header>
 <button class="round sound-menu sound-btn" aria-label="Mute sound">${Tu}</button>
 <div class="menu-body"><div class="menu-content">
  <h1>LONGTAIL<br><em>AFTER DARK</em></h1>
  <p class="lede">Pick up passengers. Hard crashes end your run.</p>
  <div class="mode-tabs" role="group" aria-label="Game mode"><button id="mode-shift" class="active" aria-pressed="true">NIGHT SHIFT · 3 MIN</button><button id="mode-free" aria-pressed="false">FREE CRUISE</button></div>
  <button id="start" class="primary" disabled>PLAY</button>
  <div id="loading-note" role="status">Loading game…</div>
  <div class="record-preview"><div><div class="micro">BEST SCORE</div><div class="value" id="menu-best">฿ 0</div></div><p id="menu-record-note" hidden></p></div>
 </div></div>
 <footer class="menu-foot"><div class="keys">${Cu}</div><a class="credits" href="./credits.html" target="_blank" rel="noopener">Credits</a></footer>
</section>
<div id="hud" hidden><div class="hud-brand">${Au}</div><div class="timer"><div class="micro">NIGHT SHIFT</div><div class="timer-value">03:00</div></div><div class="hud-controls"><button class="round sound-btn" aria-label="Mute sound">${Tu}</button><button id="horn" class="round" aria-label="Sound boat horn">♩</button><button id="recover" class="round" aria-label="Recover boat">↻</button><button id="pause" class="round" aria-label="Pause game">${u_}</button></div><div class="fare-panel"><div class="eyebrow" id="fare-label">FIND YOUR NEXT FARE</div><h2 id="fare-title">Choose any pier</h2><p id="fare-hint">Stop in a golden ring to pick up passengers.</p><div class="fare-row"><span id="fare-detail">Yellow dots on your map</span><strong id="fare-time"></strong></div><div class="fare-progress" hidden><i></i></div></div><div class="score-panel"><div class="micro">TONIGHT’S TAKINGS</div><div class="total" id="earnings">฿ 0</div><div class="fares" id="deliveries">0 FARES</div><div class="best">BEST <b id="hud-best">฿ 0</b></div></div><div id="navigation" hidden><svg viewBox="0 0 48 64" aria-label="Direction to destination"><path d="M24 2 46 30H32v31H16V30H2Z"/></svg><div id="nav-distance"></div></div><div id="stunt" hidden><strong></strong><small></small></div><div id="dock-status" hidden><span>HOLD STEADY</span><progress value="0" max=".65"></progress></div><div id="minimap-shell"><canvas id="minimap" width="352" height="348" aria-label="River map with passenger piers"></canvas><div id="map-caption"><span>● PASSENGERS</span><b>N ↑</b></div></div><div id="speed"><strong>0</strong><span class="unit">KM/H</span><div class="gear">LONGTAIL EXPRESS</div></div><div id="toast" role="status"></div><div id="hud-keys" class="keys">${Cu}</div><div class="osm"><a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener">© OpenStreetMap contributors</a> · <a href="./credits.html" target="_blank" rel="noopener">Credits</a></div><div class="touch"><div class="touch-controls"><div id="steer-pad" aria-label="Slide left or right to steer"><span>◁</span><i></i><span>▷</span></div><div class="touch-actions"><button data-control="drift">SLIDE</button><button data-control="boost">BOOST</button><button data-control="brake">BRAKE / R</button><button class="gas" data-control="gas">THROTTLE</button></div></div></div></div>
<div id="countdown" class="countdown" hidden></div>
<section id="pause-screen" class="screen modal" hidden><div class="dialog"><div class="eyebrow">TAKE A BREATHER</div><h2>River can wait.</h2><div class="setting-row"><span>Night drive soundtrack</span><button id="music-toggle" class="toggle" aria-pressed="true">ON</button></div><p class="modal-keys">W / ↑ accelerate · S / ↓ brake, then reverse<br>A D / ← → steer · Shift boost · Space slide<br>H horn · R recover · Esc pause<br>Gamepad: RT / LT · left stick · A boost · B slide</p><button id="resume" class="primary">BACK TO THE RIVER <span>↗</span></button><button id="quit" class="secondary">End this shift</button><a class="credits" href="./credits.html" target="_blank" rel="noopener">Music & data credits ↗</a></div></section>
<section id="results" class="screen modal" hidden><div class="dialog"><div class="eyebrow" id="result-label">SHIFT COMPLETE</div><h2 id="result-title">Shift complete.</h2><p id="result-reason" hidden></p><div class="result-total" id="result-score">฿ 0</div><div class="result-meta"><div><span class="micro">FARES DELIVERED</span><strong id="result-fares">0</strong></div><div><span class="micro">PERSONAL BEST</span><strong id="result-best">฿ 0</strong></div></div><div class="micro">YOUR BEST NIGHTS</div><ol id="record-list"></ol><button id="again" class="primary">PLAY AGAIN <span>↗</span></button><button id="back-menu" class="secondary">Back to the riverfront</button></div></section>`;let Po;try{Po=localStorage}catch{Po={getItem:()=>null,setItem:()=>{}}}let Xn=[];try{Xn=Wl(JSON.parse(Po.getItem(Vl)||"[]"))}catch{}const Cs=()=>Xn[0]?.score||0,Kn=i=>`฿ ${Math.round(i).toLocaleString()}`,Ru=i=>`${Math.floor(i/60).toString().padStart(2,"0")}:${Math.floor(i%60).toString().padStart(2,"0")}`;function Uc(){fe("#menu-best").textContent=Kn(Cs()),fe("#hud-best").textContent=Kn(Cs());const i=fe("#menu-record-note");i.hidden=!Xn.length,i.textContent=Xn.length?`${Xn[0].deliveries} fare${Xn[0].deliveries===1?"":"s"}`:""}Uc();let Zl=null,Kf,po,Zf,Jf,Jl,Ql,mo,go=!1;const cs=new R;let ft="menu",yn=!1,Xo=!1,We,_e,Qt,Vn,xs,di=[],fn,Gn,rn,zt,Ti,Bi,qo,us=0,It=0,fs=0,Lo=0,xo=0,Za=0,Xs=0,Qf=0,$f=0,Ai=0,$l=!1,ai=0,Di={x:0,z:0,heading:0};const ec=new R,tc=new R,Pt=new t_,Nc=new s_,dr=new o_(fe("#app")),pn=new Z2({pause:i=>Yo(i),horn:()=>Pt.horn(),recover:()=>nd()});pn.bind();function ui(i,e=4){fe("#toast").textContent=i,Qf=It+e,fe("#toast").style.opacity="1"}function so(i,e){fe("#stunt strong").textContent=i,fe("#stunt small").textContent=e,fe("#stunt").hidden=!1,$f=It+1.4}function ed(i){yn=i,fe("#mode-free").classList.toggle("active",yn),fe("#mode-shift").classList.toggle("active",!yn),fe("#mode-free").setAttribute("aria-pressed",String(yn)),fe("#mode-shift").setAttribute("aria-pressed",String(!yn))}fe("#mode-free").onclick=()=>ed(!0);fe("#mode-shift").onclick=()=>ed(!1);for(const i of document.querySelectorAll(".sound-btn"))i.onclick=()=>{const e=Pt.mute();document.querySelectorAll(".sound-btn").forEach(t=>{t.setAttribute("aria-label",e?"Unmute sound":"Mute sound"),t.style.opacity=e?".45":"1"})};fe("#music-toggle").onclick=()=>{const i=Pt.musicToggle();fe("#music-toggle").textContent=i?"ON":"OFF",fe("#music-toggle").setAttribute("aria-pressed",String(i))};fe("#pause").onclick=()=>Yo();fe("#resume").onclick=()=>Yo();fe("#recover").onclick=()=>nd();fe("#horn").onclick=()=>Pt.horn();fe("#quit").onclick=()=>nc("quit");fe("#again").onclick=()=>td();fe("#back-menu").onclick=()=>f_();fe("#start").onclick=()=>td();function td(){if(!Xo)return;dr.reset(),Nc.reset(),Ai=0,$l=!1,We.reset(yn);const i=Vn[yn?8:0];_e.launch(Qt,i),Di={x:_e.x,z:_e.z,heading:_e.heading},ai=_e.heading,tc.set(_e.x+Math.sin(_e.heading)*23,12,_e.z+Math.cos(_e.heading)*23),ec.set(_e.x-Math.sin(_e.heading)*30,3,_e.z-Math.cos(_e.heading)*30),Bi.clear(),qo.clear(),ft="countdown",us=2.5,pn.clear(),pn.enabled=!1,xo=0,fs=0,Xs=0;for(const e of["#menu","#results","#pause-screen"])fe(e).hidden=!0;fe("#hud").hidden=!1,fe("#countdown").hidden=!1,fe("#stunt").hidden=!0,fe("#navigation").hidden=!0,fe("#toast").style.opacity="0",Pt.start(),Fc()}function f_(){dr.reset(),Nc.reset(),ft="menu",pn.enabled=!1,pn.clear(),Pt.pause(),fe("#menu").hidden=!1;for(const i of["#hud","#results","#pause-screen","#countdown"])fe(i).hidden=!0;Uc()}function Yo(i=!1){Xo&&(ft==="playing"||ft==="countdown"?(Pu=ft,ft="paused",pn.enabled=!1,pn.clear(),Pt.pause(),fe("#pause-screen").hidden=!1):ft==="paused"&&!i&&(ft=Pu,pn.enabled=ft==="playing",fe("#pause-screen").hidden=!0,Pt.start(),Lo=performance.now()))}let Pu="playing";function nd(){if(ft!=="playing")return;const i=Qt.nearest(_e.x,_e.z),e=Qt.sample(Jt(i.distance,40,Qt.length-40));let t=_e.heading;const n=i.heading;Math.abs(wo(t,n))<Math.PI/2?t=n:t=n+Math.PI,_e.reset(e.x,e.z,t),Di={x:_e.x,z:_e.z,heading:_e.heading},We.crash(),We.remaining=Math.max(0,We.remaining-3),ui("Back in the channel · −3 seconds"),Bi.clear(),qo.clear()}function nc(i="timeout",e){if($l)return;$l=!0;const t=i==="collision",n=!We.free&&i!=="quit",s=Cs();ft=t?"crashed":"results",pn.enabled=!1,pn.clear(),Pt.event(t?"crash":"delivered"),Pt.pause(t?1.2:0),t&&dr.impact({fatal:!0,kind:e,onComplete:()=>{ft="results",fe("#results").hidden=!1}}),We.finished=!0,We.fare=null,We.dockHold=0,n&&(Xn=Nv(Po,We.earnings,We.deliveries)),Uc(),fe("#result-label").textContent=t?"BOAT COLLISION":We.free?"FREE CRUISE · UNRANKED":n?We.earnings>s?"A NEW PERSONAL BEST":"SHIFT COMPLETE":"SHIFT ENDED · UNRANKED",fe("#result-title").textContent=t?"You crashed.":n&&We.earnings>s?"New best score.":"Shift complete.",fe("#result-reason").hidden=!t,fe("#result-reason").textContent=t?`Collision: ${jf[e]||"boat"}. Run over.`:"",fe("#result-score").textContent=Kn(We.earnings),fe("#result-fares").textContent=String(We.deliveries),fe("#result-best").textContent=Kn(Cs());const r=fe("#record-list");r.replaceChildren();for(const[o,a]of Xn.entries()){const c=document.createElement("li"),l=document.createElement("b");c.textContent=`${o+1}. ${a.deliveries} fares`,l.textContent=Kn(a.score),c.append(l),r.append(c)}if(!Xn.length){const o=document.createElement("li");o.textContent="Complete a fare in Night Shift to set a score.",r.append(o)}fe("#results").hidden=t,fe("#pause-screen").hidden=!0,fe("#countdown").hidden=!0,fe("#navigation").hidden=!0,fe("#dock-status").hidden=!0,fe("#stunt").hidden=!0,fe("#toast").style.opacity="0",Fc()}function Fc(){if(!We)return;fe(".timer-value").textContent=We.free?"∞":Ru(We.remaining),fe(".timer .micro").textContent=We.free?"FREE CRUISE":"NIGHT SHIFT",fe(".timer").classList.toggle("low",!We.free&&We.remaining<25),fe("#earnings").textContent=Kn(We.earnings),fe("#deliveries").textContent=`${We.deliveries} FARE${We.deliveries===1?"":"S"}`,fe("#hud-best").textContent=Kn(We.free?Cs():Math.max(Cs(),We.earnings));const i=We.fare;if(fe("#navigation").hidden=!i,fe(".fare-progress").hidden=!i,fe("#map-caption span").textContent=i?"● DROP OFF":"● PASSENGERS",i){const e=Math.hypot(i.to.x-_e.x,i.to.z-_e.z);fe("#fare-label").textContent="DROP OFF",fe("#fare-title").textContent=i.to.name,fe("#fare-hint").textContent=e<60?"Easy does it. Stop in the green ring.":i.to.thai,fe("#fare-detail").textContent=`${Math.round(e)} m · ${Kn(i.base+We.tips)}`,fe("#fare-time").textContent=Ru(i.time),fe(".fare-progress i").style.width=`${i.time/i.total*100}%`,xo=Iv(_e,i.to,xo),fe("#navigation svg").style.transform=`rotate(${xo}rad)`,fe("#nav-distance").textContent=`${Math.round(e)} m`}else fe("#fare-label").textContent="FIND YOUR NEXT FARE",fe("#fare-title").textContent="Choose any pier",fe("#fare-hint").textContent="Stop in a golden ring to pick up passengers.",fe("#fare-detail").textContent="Yellow dots on your map",fe("#fare-time").textContent="";fe("#speed strong").textContent=String(Math.round(Math.hypot(_e.vx,_e.vz)*3.6)),fe("#speed").classList.toggle("boost",_e.boosting),fe("#speed .gear").textContent=_e.boosting?"FULL SEND":_e.drifting?"STERN SLIDE":_e.speed<-.3?"REVERSE":"LONGTAIL EXPRESS",fe("#dock-status").hidden=We.dockHold===0,fe("#dock-status progress").value=We.dockHold,fe("#dock-status span").textContent=We.fare?"PASSENGERS DISEMBARKING":"PASSENGERS BOARDING",d_()}function d_(){const i=fe("#minimap"),e=i.getContext("2d"),t=i.width,n=i.height,s=Qt.points,r=Math.min(...s.map(x=>x.x))-200,o=Math.max(...s.map(x=>x.x))+200,a=Math.min(...s.map(x=>x.z))-100,c=Math.max(...s.map(x=>x.z))+100,l=Math.min((t-38)/(o-r),(n-22)/(c-a)),h=(o+r)/2,u=(c+a)/2,f=x=>[t/2+(x.x-h)*l,n/2+(x.z-u)*l];e.clearRect(0,0,t,n),e.strokeStyle="#355a68",e.lineCap="round",e.lineJoin="round",e.lineWidth=13,e.beginPath(),s.forEach((x,g)=>{const[p,M]=f(x);g?e.lineTo(p,M):e.moveTo(p,M)}),e.stroke(),e.strokeStyle="#102f3e",e.lineWidth=8,e.stroke();for(const x of Vn){if(We.fare&&We.fare.to.id!==x.id||!We.fare&&(We.cooldowns.get(x.id)||0)>We.clock)continue;const[g,p]=f(x);e.fillStyle=We.fare?"#9df3cf":"#ffd18b",e.beginPath(),e.arc(g,p,We.fare?5:3,0,Math.PI*2),e.fill()}const[d,m]=f(_e);e.save(),e.translate(d,m),e.rotate(-_e.heading),e.fillStyle="#fff6dc",e.beginPath(),e.moveTo(0,-7),e.lineTo(5,6),e.lineTo(0,3),e.lineTo(-5,6),e.closePath(),e.fill(),e.restore()}function p_(){po=G2(Qt,{...To,...kf},An),di=po.traffic;for(const i of di)i.mesh=i.convoy?B2(i.kind,i.variation):Y2(i.kind,i.variation,An),i.mesh.scale.setScalar(i.scale),rn.add(i.mesh);Jf=j2(rn,po.convoys),id(0),Zf=new Rf(rn,di.flatMap(i=>Vv(i.kind).map(e=>({...e,parent:i.mesh}))),{dynamic:!0})}function id(i){V2(po,Qt,i);for(const e of di){const t=e.towed?.0015:.006,n=e.towed?.025:.08;e.mesh.position.set(e.x,Math.sin(It*1.4+e.distance)*n,e.z),e.mesh.rotation.set(Math.sin(It+e.distance)*t*.6,e.heading,Math.sin(It*.7+e.distance)*t),e.wakeClock+=i,!e.towed&&e.wakeClock>.32&&(e.x-_e.x)**2+(e.z-_e.z)**2<450**2&&(e.wakeClock=0,Bi.emit(e.x+Math.sin(e.heading)*e.length/2,e.z+Math.cos(e.heading)*e.length/2,e.heading,e.actualSpeed,e.width*.12))}Jf.update()}function m_(i,e){if(We.finished)return;Ai=Math.max(0,Ai-i),Di={x:_e.x,z:_e.z,heading:_e.heading},_e.update(i,e);let t=Qt.constrain(_e,6);for(const s of di){if(Math.hypot(s.x-_e.x,s.z-_e.z)>s.length+18)continue;const r=We.hitBoat(_e,s);if(r){if(r.type==="crashed"){nc("collision",s.kind);return}if(r.severity>.6&&Ai===0){const o=Jt(.2+r.severity/_n.fatalImpact,.25,.85);Pt.impact(!1,o),dr.impact({intensity:o}),ui("Just a bump. Keep going.",1.6),Ai=.75}continue}if(Math.abs(_e.speed)>12&&s.nearCooldown===0){const o=Ho({..._e,length:12,width:2.5},s);if(o.gap>1.3&&o.gap<6){const a=We.stunt("near");s.nearCooldown=8,a&&(Pt.event("near"),so("CLOSE CALL",`+฿ ${a} TIP · ${We.combo}× COMBO`))}}}for(const s of xs.bridgeColliders)Math.hypot(s.x-_e.x,s.z-_e.z)<28&&(t=Math.max(t,Af(_e,s)));if(t>4&&Ai===0){We.crash(),Pt.impact(!1),dr.impact(),Ai=1;const s=Qt.nearest(_e.x,_e.z).distance;ui(s<2||s>Qt.length-2?"End of this reach. Turn back along the river.":t>15?"Big boat. Bigger right of way.":"Watch the paintwork!",3)}if(_e.drifting&&Math.abs(_e.slip)>2){if(Xs+=i,Xs>.85){Xs=0;const s=We.stunt("slide");s&&(so("RIVER SLIDE",`+฿ ${s} TIP · ${We.combo}× COMBO`),Pt.event("slide"))}}else Xs=0;const n=We.update(i,_e);n&&(Pt.event(n.type),n.type==="pickup"&&(ui(`Next stop: ${n.to.name}. Let’s make waves!`,5),so("ALL ABOARD",n.to.name.toUpperCase())),n.type==="delivered"&&(so("NICE LANDING",`${Kn(n.paid)} BANKED · +12 SECONDS`),ui("Fare delivered. Choose any yellow pier for your next passengers.",6)),n.type==="late"&&ui("Missed the boat! Find your next passengers.",5),n.type==="ended"&&nc()),Math.abs(_e.speed)>2&&(Bi.emit(_e.x+Math.sin(_e.heading)*6,_e.z+Math.cos(_e.heading)*6,_e.heading,Math.abs(_e.speed),_e.boosting?1:.4),_e.drifting&&Bi.emit(_e.x,_e.z,_e.heading,Math.abs(_e.speed),.8))}function Lu(i=0,e=null){c_(Gn,Ti,{ratio:e,size:Zl,smaa:Ql,fxaa:mo,frameMeter:Kf,frameDt:i}),Zl=null}function sd(i){requestAnimationFrame(sd);const e=(i-Lo)/1e3,t=Math.min(e||0,.05);if(Lo=i,!Xo)return;const n=pn.read();if(ft==="paused"||ft==="results"||ft==="crashed"){go||(Lu(),go=!0);return}if(go=!1,It+=t,ft==="countdown"&&(us-=t,fe("#countdown").textContent=us>1.5?"3":us>.7?"2":us>.1?"1":"GO!",us<=0&&(ft="playing",pn.enabled=!0,fe("#countdown").hidden=!0,ui("Stop at any golden pier. Shift for boost. Space to swing the stern.",6))),id(t),ft==="playing"){fs+=t;let l=0;for(;ft==="playing"&&fs>=1/60&&l++<4;)m_(1/60,n),fs-=1/60;if(ft==="playing"){Pt.update(_e.speed,_e.boosting);const h=Nc.update(t,_e,di,ai);h&&Pt.warningHorn(h.source.kind,h)}else fs=0}const s=ft==="playing"?Jt(fs/(1/60),0,1):1;if(ft!=="menu"){const l=ps.lerp(Di.x,_e.x,s),h=ps.lerp(Di.z,_e.z,s),u=Di.heading+wo(_e.heading,Di.heading)*s;fn.position.set(l,.1+Math.sin(It*2.7)*.085+Math.sin(It*4.3)*.035,h),fn.rotation.set((_e.boosting?.065:Math.abs(_e.speed)*7e-4)+Math.sin(It*2)*.008,u,Jt(_e.yaw*_e.speed*.003,-.12,.12)),ai+=wo(u,ai)*(1-Math.exp(-4.5*t));const f=_e.boosting?24:19,d=new R(l+Math.sin(ai)*f,7.8+(_e.boosting?1.2:0),h+Math.cos(ai)*f);tc.lerp(d,1-Math.exp(-8*t));const m=new R(l-Math.sin(ai)*26,3,h-Math.cos(ai)*26);ec.lerp(m,1-Math.exp(-9*t)),zt.position.copy(tc),zt.lookAt(ec),zt.fov=ps.lerp(zt.fov,_e.boosting?69:62,1-Math.exp(-3*t)),zt.updateProjectionMatrix()}else{const l=xs.landmarks.find(g=>g.kind===(yn?"icon-siam":"wat-arun")),h=Qt.sample(Vn[yn?8:0].distance-(yn?330:140),-34),u=l.x-h.x,f=l.z-h.z,d=Math.hypot(u,f),m=-f/d,x=u/d;zt.position.set(h.x+Math.sin(It*.06)*8,11.5,h.z+Math.cos(It*.06)*6),zt.lookAt(l.x-m*60,yn?70:24,l.z-x*60),fn.position.set(h.x+u/d*25-m*7,.1+Math.sin(It*2)*.07,h.z+f/d*25-x*7),fn.rotation.set(.008,Math.atan2(-u,-f),Math.sin(It)*.009)}fn.userData.propeller&&(fn.userData.propeller.rotation.z+=t*(20+Math.abs(_e.speed)*6)),fn.userData.motor&&(fn.userData.motor.rotation.y=-(n.steer||0)*.18),Bi.update(t);const r=[],o=[];function a(l){l.updateMatrixWorld();for(const h of l.userData.lightSources||[])cs.fromArray(h.position),l.userData.kind==="longtail"&&(cs.y=1.4),l.localToWorld(cs),o.push({x:cs.x,y:cs.y,z:cs.z,color:h.color,power:h.intensity||18,boat:!0,distance:h.distance})}a(fn);for(const l of di){const h=Math.hypot(l.x-zt.position.x,l.z-zt.position.z);Kl(l.mesh,h,An),h<350&&a(l.mesh),h<420&&!l.towed&&r.push({actor:l,distance:h})}r.sort((l,h)=>l.distance-h.distance);const c=r.slice(0,An?10:16).map(l=>l.actor);if(ft!=="menu"&&c.unshift(_e),Zf.update(),qo.update(t,c),xs.update(It,zt,We,o),ft==="menu")for(const l of xs.pierVisuals)l.ring.visible=!1,l.beacon.visible=!1;fe("#stunt").hidden=ft!=="playing"||It>$f,fe("#toast").style.opacity=ft!=="playing"||It>Qf?"0":"1",Za+=t,Za>.09&&(Za=0,ft!=="menu"&&Fc()),Lu(e,Jl.update(e))}async function g_(){try{await document.fonts.load('600 32px "Noto Sans Thai"'),await document.fonts.ready;const i=await fetch("/longtail/data/river-course.json");if(!i.ok)throw new Error("Could not load the river map");const t=(await i.json()).points,s=new No(t.map(h=>new R((h[0]-100.502)*108140,0,(13.733-h[1])*111320))).getSpacedPoints(320),r=new nu(t),o=s.map(h=>[h.x/108140+100.502,13.733-h.z/111320,r.nearest(h.x,h.z).width]);Qt=new nu(o),Vn=Pv(Qt),We=new Uv(Vn),_e=new Dv(Vn[0].x,Vn[0].z,Vn[0].heading),rn=new Dp,rn.background=new Ue(659483),rn.fog=new mc(1646635,56e-5),zt=new Bt(62,innerWidth/innerHeight,.3,8e3),zt.layers.enable(1),Gn=new pv({canvas:fe("#scene"),antialias:!1,powerPreference:"high-performance"}),Jl=new l_(devicePixelRatio,An),Gn.setPixelRatio(Jl.ratio),Gn.setSize(innerWidth,innerHeight),Gn.toneMapping=sc,Gn.toneMappingExposure=1.15,Gn.outputColorSpace=vt,rn.add(new wm(10796246,4865586,.82));const a=new Mf(16766108,.18);a.position.set(500,220,150),rn.add(a),xs=y2(rn,Qt,Vn,An),fn=Hf("longtail",0),rn.add(fn);const c=new _f(16763281,3.5,7,2);c.position.set(0,1.65,4.5),fn.add(c),Bi=new J2(rn,An),qo=new Q2(rn,An?30:46),p_(),K2(xs.water,di),Ti=Ev(Gn),Ti.addPass(new vv(rn,zt)),Ti.addPass(Tv(innerWidth,innerHeight)),An||(Ql=new Av,Ti.addPass(Ql)),Ti.addPass(new Cv),mo=wv(),mo.enabled=An,Ti.addPass(mo);const l=()=>{go=!1,zt.aspect=innerWidth/innerHeight,zt.updateProjectionMatrix(),Zl={width:innerWidth,height:innerHeight}};window.addEventListener("resize",l),fe("#scene").addEventListener("webglcontextlost",h=>{h.preventDefault(),Yo(!0),ui("Graphics paused. Reload the page to restore the river.",100)}),Kf=a_(Gn),Xo=!0,fe("#start").disabled=!1,fe("#start").textContent="PLAY",fe("#loading-note").textContent="",Lo=performance.now(),requestAnimationFrame(sd)}catch(i){console.error(i),fe("#loading-note").textContent=`Unable to launch: ${i.message}. Try a browser with WebGL enabled.`,fe("#start").textContent="RETRY",fe("#start").disabled=!1,fe("#start").onclick=()=>location.reload()}}g_();
