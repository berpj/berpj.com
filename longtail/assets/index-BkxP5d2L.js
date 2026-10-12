(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const vc="180",Td=0,nh=1,Ad=2,ju=1,Cd=2,qn=3,ni=0,Xt=1,Ot=2,Jn=0,Hi=1,Wi=2,ih=3,sh=4,Rd=5,Ni=100,Pd=101,Ld=102,Dd=103,Id=104,Ud=200,Nd=201,Fd=202,Od=203,fl=204,dl=205,zd=206,Bd=207,kd=208,Hd=209,Gd=210,Vd=211,Wd=212,Xd=213,qd=214,pl=0,ml=1,gl=2,Es=3,xl=4,vl=5,_l=6,Ml=7,Ku=0,Yd=1,jd=2,vi=0,Zu=1,Ju=2,Qu=3,_c=4,$u=5,ef=6,tf=7,nf=300,Ts=301,As=302,yl=303,Sl=304,Xo=306,ii=1e3,Oi=1001,bl=1002,qt=1003,Kd=1004,Rr=1005,ln=1006,ua=1007,En=1008,Fn=1009,sf=1010,rf=1011,cr=1012,Mc=1013,Xi=1014,Dn=1015,Tn=1016,yc=1017,Sc=1018,hr=1020,of=35902,af=35899,lf=1021,cf=1022,cn=1023,ur=1026,fr=1027,bc=1028,wc=1029,hf=1030,Ec=1031,Tc=1033,xo=33776,vo=33777,_o=33778,Mo=33779,wl=35840,El=35841,Tl=35842,Al=35843,Cl=36196,Rl=37492,Pl=37496,Ll=37808,Dl=37809,Il=37810,Ul=37811,Nl=37812,Fl=37813,Ol=37814,zl=37815,Bl=37816,kl=37817,Hl=37818,Gl=37819,Vl=37820,Wl=37821,Xl=36492,ql=36494,Yl=36495,jl=36283,Kl=36284,Zl=36285,Jl=36286,Zd=3200,Jd=3201,uf=0,Qd=1,mi="",xt="srgb",Cs="srgb-linear",Co="linear",ht="srgb",es=7680,rh=519,$d=512,ep=513,tp=514,ff=515,np=516,ip=517,sp=518,rp=519,oh=35044,ji=35048,ah="300 es",In=2e3,Ro=2001;class Os{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const s=n[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const Nt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let lh=1234567;const tr=Math.PI/180,Rs=180/Math.PI;function Ki(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Nt[i&255]+Nt[i>>8&255]+Nt[i>>16&255]+Nt[i>>24&255]+"-"+Nt[e&255]+Nt[e>>8&255]+"-"+Nt[e>>16&15|64]+Nt[e>>24&255]+"-"+Nt[t&63|128]+Nt[t>>8&255]+"-"+Nt[t>>16&255]+Nt[t>>24&255]+Nt[n&255]+Nt[n>>8&255]+Nt[n>>16&255]+Nt[n>>24&255]).toLowerCase()}function et(i,e,t){return Math.max(e,Math.min(t,i))}function Ac(i,e){return(i%e+e)%e}function op(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function ap(i,e,t){return i!==e?(t-i)/(e-i):0}function nr(i,e,t){return(1-t)*i+t*e}function lp(i,e,t,n){return nr(i,e,1-Math.exp(-t*n))}function cp(i,e=1){return e-Math.abs(Ac(i,e*2)-e)}function hp(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function up(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function fp(i,e){return i+Math.floor(Math.random()*(e-i+1))}function dp(i,e){return i+Math.random()*(e-i)}function pp(i){return i*(.5-Math.random())}function mp(i){i!==void 0&&(lh=i);let e=lh+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function gp(i){return i*tr}function xp(i){return i*Rs}function vp(i){return(i&i-1)===0&&i!==0}function _p(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Mp(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function yp(i,e,t,n,s){const r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+n)/2),h=o((e+n)/2),u=r((e-n)/2),f=o((e-n)/2),d=r((n-e)/2),m=o((n-e)/2);switch(s){case"XYX":i.set(a*h,l*u,l*f,a*c);break;case"YZY":i.set(l*f,a*h,l*u,a*c);break;case"ZXZ":i.set(l*u,l*f,a*h,a*c);break;case"XZX":i.set(a*h,l*m,l*d,a*c);break;case"YXY":i.set(l*d,a*h,l*m,a*c);break;case"ZYZ":i.set(l*m,l*d,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function xs(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Gt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const An={DEG2RAD:tr,RAD2DEG:Rs,generateUUID:Ki,clamp:et,euclideanModulo:Ac,mapLinear:op,inverseLerp:ap,lerp:nr,damp:lp,pingpong:cp,smoothstep:hp,smootherstep:up,randInt:fp,randFloat:dp,randFloatSpread:pp,seededRandom:mp,degToRad:gp,radToDeg:xp,isPowerOfTwo:vp,ceilPowerOfTwo:_p,floorPowerOfTwo:Mp,setQuaternionFromProperEuler:yp,normalize:Gt,denormalize:xs};class ${constructor(e=0,t=0){$.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=et(this.x,e.x,t.x),this.y=et(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=et(this.x,e,t),this.y=et(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(et(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(et(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Bt{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3];const f=r[o+0],d=r[o+1],m=r[o+2],x=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(a===1){e[t+0]=f,e[t+1]=d,e[t+2]=m,e[t+3]=x;return}if(u!==x||l!==f||c!==d||h!==m){let g=1-a;const p=l*f+c*d+h*m+u*x,M=p>=0?1:-1,_=1-p*p;if(_>Number.EPSILON){const E=Math.sqrt(_),T=Math.atan2(E,p*M);g=Math.sin(g*T)/E,a=Math.sin(a*T)/E}const v=a*M;if(l=l*g+f*v,c=c*g+d*v,h=h*g+m*v,u=u*g+x*v,g===1-a){const E=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=E,c*=E,h*=E,u*=E}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,s,r,o){const a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[o],f=r[o+1],d=r[o+2],m=r[o+3];return e[t]=a*m+h*u+l*d-c*f,e[t+1]=l*m+h*f+c*u-a*d,e[t+2]=c*m+h*d+a*f-l*u,e[t+3]=h*m-a*u-l*f-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),u=a(r/2),f=l(n/2),d=l(s/2),m=l(r/2);switch(o){case"XYZ":this._x=f*h*u+c*d*m,this._y=c*d*u-f*h*m,this._z=c*h*m+f*d*u,this._w=c*h*u-f*d*m;break;case"YXZ":this._x=f*h*u+c*d*m,this._y=c*d*u-f*h*m,this._z=c*h*m-f*d*u,this._w=c*h*u+f*d*m;break;case"ZXY":this._x=f*h*u-c*d*m,this._y=c*d*u+f*h*m,this._z=c*h*m+f*d*u,this._w=c*h*u-f*d*m;break;case"ZYX":this._x=f*h*u-c*d*m,this._y=c*d*u+f*h*m,this._z=c*h*m-f*d*u,this._w=c*h*u+f*d*m;break;case"YZX":this._x=f*h*u+c*d*m,this._y=c*d*u+f*h*m,this._z=c*h*m-f*d*u,this._w=c*h*u-f*d*m;break;case"XZY":this._x=f*h*u-c*d*m,this._y=c*d*u-f*h*m,this._z=c*h*m+f*d*u,this._w=c*h*u+f*d*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],u=t[10],f=n+a+u;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-l)*d,this._y=(r-c)*d,this._z=(o-s)*d}else if(n>a&&n>u){const d=2*Math.sqrt(1+n-a-u);this._w=(h-l)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+c)/d}else if(a>u){const d=2*Math.sqrt(1+a-n-u);this._w=(r-c)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(l+h)/d}else{const d=2*Math.sqrt(1+u-n-a);this._w=(o-s)/d,this._x=(r+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(et(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-s*a,this._w=o*h-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,s=this._y,r=this._z,o=this._w;let a=o*e._w+n*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const d=1-t;return this._w=d*o+t*this._w,this._x=d*n+t*this._x,this._y=d*s+t*this._y,this._z=d*r+t*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-t)*h)/c,f=Math.sin(t*h)/c;return this._w=o*u+this._w*f,this._x=n*u+this._x*f,this._y=s*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class P{constructor(e=0,t=0,n=0){P.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ch.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ch.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*n),h=2*(a*t-r*s),u=2*(r*n-o*t);return this.x=t+l*c+o*u-a*h,this.y=n+l*h+a*c-r*u,this.z=s+l*u+r*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=et(this.x,e.x,t.x),this.y=et(this.y,e.y,t.y),this.z=et(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=et(this.x,e,t),this.y=et(this.y,e,t),this.z=et(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(et(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return fa.copy(this).projectOnVector(e),this.sub(fa)}reflect(e){return this.sub(fa.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(et(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const fa=new P,ch=new Bt;class Ke{constructor(e,t,n,s,r,o,a,l,c){Ke.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c)}set(e,t,n,s,r,o,a,l,c){const h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],f=n[2],d=n[5],m=n[8],x=s[0],g=s[3],p=s[6],M=s[1],_=s[4],v=s[7],E=s[2],T=s[5],w=s[8];return r[0]=o*x+a*M+l*E,r[3]=o*g+a*_+l*T,r[6]=o*p+a*v+l*w,r[1]=c*x+h*M+u*E,r[4]=c*g+h*_+u*T,r[7]=c*p+h*v+u*w,r[2]=f*x+d*M+m*E,r[5]=f*g+d*_+m*T,r[8]=f*p+d*v+m*w,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-n*r*h+n*a*l+s*r*c-s*o*l}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=h*o-a*c,f=a*l-h*r,d=c*r-o*l,m=t*u+n*f+s*d;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/m;return e[0]=u*x,e[1]=(s*c-h*n)*x,e[2]=(a*n-s*o)*x,e[3]=f*x,e[4]=(h*t-s*l)*x,e[5]=(s*r-a*t)*x,e[6]=d*x,e[7]=(n*l-c*t)*x,e[8]=(o*t-n*r)*x,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(da.makeScale(e,t)),this}rotate(e){return this.premultiply(da.makeRotation(-e)),this}translate(e,t){return this.premultiply(da.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const da=new Ke;function df(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function dr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Sp(){const i=dr("canvas");return i.style.display="block",i}const hh={};function pr(i){i in hh||(hh[i]=!0,console.warn(i))}function bp(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}const uh=new Ke().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),fh=new Ke().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function wp(){const i={enabled:!0,workingColorSpace:Cs,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===ht&&(s.r=Qn(s.r),s.g=Qn(s.g),s.b=Qn(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ht&&(s.r=bs(s.r),s.g=bs(s.g),s.b=bs(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===mi?Co:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return pr("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return pr("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Cs]:{primaries:e,whitePoint:n,transfer:Co,toXYZ:uh,fromXYZ:fh,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:xt},outputColorSpaceConfig:{drawingBufferColorSpace:xt}},[xt]:{primaries:e,whitePoint:n,transfer:ht,toXYZ:uh,fromXYZ:fh,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:xt}}}),i}const st=wp();function Qn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function bs(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let ts;class Ep{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{ts===void 0&&(ts=dr("canvas")),ts.width=e.width,ts.height=e.height;const s=ts.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=ts}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=dr("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Qn(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Qn(t[n]/255)*255):t[n]=Qn(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Tp=0;class Cc{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Tp++}),this.uuid=Ki(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(pa(s[o].image)):r.push(pa(s[o]))}else r=pa(s);n.url=r}return t||(e.images[this.uuid]=n),n}}function pa(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Ep.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Ap=0;const ma=new P;class Ct extends Os{constructor(e=Ct.DEFAULT_IMAGE,t=Ct.DEFAULT_MAPPING,n=Oi,s=Oi,r=ln,o=En,a=cn,l=Fn,c=Ct.DEFAULT_ANISOTROPY,h=mi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ap++}),this.uuid=Ki(),this.name="",this.source=new Cc(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new $(0,0),this.repeat=new $(1,1),this.center=new $(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ke,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(ma).x}get height(){return this.source.getSize(ma).y}get depth(){return this.source.getSize(ma).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==nf)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ii:e.x=e.x-Math.floor(e.x);break;case Oi:e.x=e.x<0?0:1;break;case bl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ii:e.y=e.y-Math.floor(e.y);break;case Oi:e.y=e.y<0?0:1;break;case bl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Ct.DEFAULT_IMAGE=null;Ct.DEFAULT_MAPPING=nf;Ct.DEFAULT_ANISOTROPY=1;class rt{constructor(e=0,t=0,n=0,s=1){rt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r;const l=e.elements,c=l[0],h=l[4],u=l[8],f=l[1],d=l[5],m=l[9],x=l[2],g=l[6],p=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-x)<.01&&Math.abs(m-g)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+x)<.1&&Math.abs(m+g)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const _=(c+1)/2,v=(d+1)/2,E=(p+1)/2,T=(h+f)/4,w=(u+x)/4,R=(m+g)/4;return _>v&&_>E?_<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(_),s=T/n,r=w/n):v>E?v<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),n=T/s,r=R/s):E<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(E),n=w/r,s=R/r),this.set(n,s,r,t),this}let M=Math.sqrt((g-m)*(g-m)+(u-x)*(u-x)+(f-h)*(f-h));return Math.abs(M)<.001&&(M=1),this.x=(g-m)/M,this.y=(u-x)/M,this.z=(f-h)/M,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=et(this.x,e.x,t.x),this.y=et(this.y,e.y,t.y),this.z=et(this.z,e.z,t.z),this.w=et(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=et(this.x,e,t),this.y=et(this.y,e,t),this.z=et(this.z,e,t),this.w=et(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(et(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Cp extends Os{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ln,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new rt(0,0,e,t),this.scissorTest=!1,this.viewport=new rt(0,0,e,t);const s={width:e,height:t,depth:n.depth},r=new Ct(s);this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:ln,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new Cc(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class $t extends Cp{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class pf extends Ct{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=qt,this.minFilter=qt,this.wrapR=Oi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Rp extends Ct{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=qt,this.minFilter=qt,this.wrapR=Oi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class si{constructor(e=new P(1/0,1/0,1/0),t=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Mn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Mn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Mn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Mn):Mn.fromBufferAttribute(r,o),Mn.applyMatrix4(e.matrixWorld),this.expandByPoint(Mn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Pr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Pr.copy(n.boundingBox)),Pr.applyMatrix4(e.matrixWorld),this.union(Pr)}const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Mn),Mn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Gs),Lr.subVectors(this.max,Gs),ns.subVectors(e.a,Gs),is.subVectors(e.b,Gs),ss.subVectors(e.c,Gs),ai.subVectors(is,ns),li.subVectors(ss,is),wi.subVectors(ns,ss);let t=[0,-ai.z,ai.y,0,-li.z,li.y,0,-wi.z,wi.y,ai.z,0,-ai.x,li.z,0,-li.x,wi.z,0,-wi.x,-ai.y,ai.x,0,-li.y,li.x,0,-wi.y,wi.x,0];return!ga(t,ns,is,ss,Lr)||(t=[1,0,0,0,1,0,0,0,1],!ga(t,ns,is,ss,Lr))?!1:(Dr.crossVectors(ai,li),t=[Dr.x,Dr.y,Dr.z],ga(t,ns,is,ss,Lr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Mn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Mn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Hn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Hn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Hn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Hn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Hn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Hn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Hn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Hn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Hn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Hn=[new P,new P,new P,new P,new P,new P,new P,new P],Mn=new P,Pr=new si,ns=new P,is=new P,ss=new P,ai=new P,li=new P,wi=new P,Gs=new P,Lr=new P,Dr=new P,Ei=new P;function ga(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Ei.fromArray(i,r);const a=s.x*Math.abs(Ei.x)+s.y*Math.abs(Ei.y)+s.z*Math.abs(Ei.z),l=e.dot(Ei),c=t.dot(Ei),h=n.dot(Ei);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const Pp=new si,Vs=new P,xa=new P;class Zi{constructor(e=new P,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Pp.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Vs.subVectors(e,this.center);const t=Vs.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Vs,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(xa.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Vs.copy(e.center).add(xa)),this.expandByPoint(Vs.copy(e.center).sub(xa))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Gn=new P,va=new P,Ir=new P,ci=new P,_a=new P,Ur=new P,Ma=new P;class Rc{constructor(e=new P,t=new P(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Gn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Gn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Gn.copy(this.origin).addScaledVector(this.direction,t),Gn.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){va.copy(e).add(t).multiplyScalar(.5),Ir.copy(t).sub(e).normalize(),ci.copy(this.origin).sub(va);const r=e.distanceTo(t)*.5,o=-this.direction.dot(Ir),a=ci.dot(this.direction),l=-ci.dot(Ir),c=ci.lengthSq(),h=Math.abs(1-o*o);let u,f,d,m;if(h>0)if(u=o*l-a,f=o*a-l,m=r*h,u>=0)if(f>=-m)if(f<=m){const x=1/h;u*=x,f*=x,d=u*(u+o*f+2*a)+f*(o*u+f+2*l)+c}else f=r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;else f=-r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;else f<=-m?(u=Math.max(0,-(-o*r+a)),f=u>0?-r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c):f<=m?(u=0,f=Math.min(Math.max(-r,-l),r),d=f*(f+2*l)+c):(u=Math.max(0,-(o*r+a)),f=u>0?r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c);else f=o>0?-r:r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(va).addScaledVector(Ir,f),d}intersectSphere(e,t){Gn.subVectors(e.center,this.origin);const n=Gn.dot(this.direction),s=Gn.dot(Gn)-n*n,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,s=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,s=(e.min.x-f.x)*c),h>=0?(r=(e.min.y-f.y)*h,o=(e.max.y-f.y)*h):(r=(e.max.y-f.y)*h,o=(e.min.y-f.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(e.min.z-f.z)*u,l=(e.max.z-f.z)*u):(a=(e.max.z-f.z)*u,l=(e.min.z-f.z)*u),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Gn)!==null}intersectTriangle(e,t,n,s,r){_a.subVectors(t,e),Ur.subVectors(n,e),Ma.crossVectors(_a,Ur);let o=this.direction.dot(Ma),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ci.subVectors(this.origin,e);const l=a*this.direction.dot(Ur.crossVectors(ci,Ur));if(l<0)return null;const c=a*this.direction.dot(_a.cross(ci));if(c<0||l+c>o)return null;const h=-a*ci.dot(Ma);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ze{constructor(e,t,n,s,r,o,a,l,c,h,u,f,d,m,x,g){Ze.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c,h,u,f,d,m,x,g)}set(e,t,n,s,r,o,a,l,c,h,u,f,d,m,x,g){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=f,p[3]=d,p[7]=m,p[11]=x,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ze().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,s=1/rs.setFromMatrixColumn(e,0).length(),r=1/rs.setFromMatrixColumn(e,1).length(),o=1/rs.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){const f=o*h,d=o*u,m=a*h,x=a*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=d+m*c,t[5]=f-x*c,t[9]=-a*l,t[2]=x-f*c,t[6]=m+d*c,t[10]=o*l}else if(e.order==="YXZ"){const f=l*h,d=l*u,m=c*h,x=c*u;t[0]=f+x*a,t[4]=m*a-d,t[8]=o*c,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=d*a-m,t[6]=x+f*a,t[10]=o*l}else if(e.order==="ZXY"){const f=l*h,d=l*u,m=c*h,x=c*u;t[0]=f-x*a,t[4]=-o*u,t[8]=m+d*a,t[1]=d+m*a,t[5]=o*h,t[9]=x-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const f=o*h,d=o*u,m=a*h,x=a*u;t[0]=l*h,t[4]=m*c-d,t[8]=f*c+x,t[1]=l*u,t[5]=x*c+f,t[9]=d*c-m,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const f=o*l,d=o*c,m=a*l,x=a*c;t[0]=l*h,t[4]=x-f*u,t[8]=m*u+d,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=d*u+m,t[10]=f-x*u}else if(e.order==="XZY"){const f=o*l,d=o*c,m=a*l,x=a*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=f*u+x,t[5]=o*h,t[9]=d*u-m,t[2]=m*u-d,t[6]=a*h,t[10]=x*u+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Lp,e,Dp)}lookAt(e,t,n){const s=this.elements;return on.subVectors(e,t),on.lengthSq()===0&&(on.z=1),on.normalize(),hi.crossVectors(n,on),hi.lengthSq()===0&&(Math.abs(n.z)===1?on.x+=1e-4:on.z+=1e-4,on.normalize(),hi.crossVectors(n,on)),hi.normalize(),Nr.crossVectors(on,hi),s[0]=hi.x,s[4]=Nr.x,s[8]=on.x,s[1]=hi.y,s[5]=Nr.y,s[9]=on.y,s[2]=hi.z,s[6]=Nr.z,s[10]=on.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],f=n[9],d=n[13],m=n[2],x=n[6],g=n[10],p=n[14],M=n[3],_=n[7],v=n[11],E=n[15],T=s[0],w=s[4],R=s[8],S=s[12],b=s[1],L=s[5],D=s[9],N=s[13],B=s[2],O=s[6],V=s[10],Z=s[14],W=s[3],re=s[7],fe=s[11],ne=s[15];return r[0]=o*T+a*b+l*B+c*W,r[4]=o*w+a*L+l*O+c*re,r[8]=o*R+a*D+l*V+c*fe,r[12]=o*S+a*N+l*Z+c*ne,r[1]=h*T+u*b+f*B+d*W,r[5]=h*w+u*L+f*O+d*re,r[9]=h*R+u*D+f*V+d*fe,r[13]=h*S+u*N+f*Z+d*ne,r[2]=m*T+x*b+g*B+p*W,r[6]=m*w+x*L+g*O+p*re,r[10]=m*R+x*D+g*V+p*fe,r[14]=m*S+x*N+g*Z+p*ne,r[3]=M*T+_*b+v*B+E*W,r[7]=M*w+_*L+v*O+E*re,r[11]=M*R+_*D+v*V+E*fe,r[15]=M*S+_*N+v*Z+E*ne,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],u=e[6],f=e[10],d=e[14],m=e[3],x=e[7],g=e[11],p=e[15];return m*(+r*l*u-s*c*u-r*a*f+n*c*f+s*a*d-n*l*d)+x*(+t*l*d-t*c*f+r*o*f-s*o*d+s*c*h-r*l*h)+g*(+t*c*u-t*a*d-r*o*u+n*o*d+r*a*h-n*c*h)+p*(-s*a*h-t*l*u+t*a*f+s*o*u-n*o*f+n*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=e[9],f=e[10],d=e[11],m=e[12],x=e[13],g=e[14],p=e[15],M=u*g*c-x*f*c+x*l*d-a*g*d-u*l*p+a*f*p,_=m*f*c-h*g*c-m*l*d+o*g*d+h*l*p-o*f*p,v=h*x*c-m*u*c+m*a*d-o*x*d-h*a*p+o*u*p,E=m*u*l-h*x*l-m*a*f+o*x*f+h*a*g-o*u*g,T=t*M+n*_+s*v+r*E;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/T;return e[0]=M*w,e[1]=(x*f*r-u*g*r-x*s*d+n*g*d+u*s*p-n*f*p)*w,e[2]=(a*g*r-x*l*r+x*s*c-n*g*c-a*s*p+n*l*p)*w,e[3]=(u*l*r-a*f*r-u*s*c+n*f*c+a*s*d-n*l*d)*w,e[4]=_*w,e[5]=(h*g*r-m*f*r+m*s*d-t*g*d-h*s*p+t*f*p)*w,e[6]=(m*l*r-o*g*r-m*s*c+t*g*c+o*s*p-t*l*p)*w,e[7]=(o*f*r-h*l*r+h*s*c-t*f*c-o*s*d+t*l*d)*w,e[8]=v*w,e[9]=(m*u*r-h*x*r-m*n*d+t*x*d+h*n*p-t*u*p)*w,e[10]=(o*x*r-m*a*r+m*n*c-t*x*c-o*n*p+t*a*p)*w,e[11]=(h*a*r-o*u*r-h*n*c+t*u*c+o*n*d-t*a*d)*w,e[12]=E*w,e[13]=(h*x*s-m*u*s+m*n*f-t*x*f-h*n*g+t*u*g)*w,e[14]=(m*a*s-o*x*s-m*n*l+t*x*l+o*n*g-t*a*g)*w,e[15]=(o*u*s-h*a*s+h*n*l-t*u*l-o*n*f+t*a*f)*w,this}scale(e){const t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,h=o+o,u=a+a,f=r*c,d=r*h,m=r*u,x=o*h,g=o*u,p=a*u,M=l*c,_=l*h,v=l*u,E=n.x,T=n.y,w=n.z;return s[0]=(1-(x+p))*E,s[1]=(d+v)*E,s[2]=(m-_)*E,s[3]=0,s[4]=(d-v)*T,s[5]=(1-(f+p))*T,s[6]=(g+M)*T,s[7]=0,s[8]=(m+_)*w,s[9]=(g-M)*w,s[10]=(1-(f+x))*w,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;let r=rs.set(s[0],s[1],s[2]).length();const o=rs.set(s[4],s[5],s[6]).length(),a=rs.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],yn.copy(this);const c=1/r,h=1/o,u=1/a;return yn.elements[0]*=c,yn.elements[1]*=c,yn.elements[2]*=c,yn.elements[4]*=h,yn.elements[5]*=h,yn.elements[6]*=h,yn.elements[8]*=u,yn.elements[9]*=u,yn.elements[10]*=u,t.setFromRotationMatrix(yn),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,s,r,o,a=In,l=!1){const c=this.elements,h=2*r/(t-e),u=2*r/(n-s),f=(t+e)/(t-e),d=(n+s)/(n-s);let m,x;if(l)m=r/(o-r),x=o*r/(o-r);else if(a===In)m=-(o+r)/(o-r),x=-2*o*r/(o-r);else if(a===Ro)m=-o/(o-r),x=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=u,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=In,l=!1){const c=this.elements,h=2/(t-e),u=2/(n-s),f=-(t+e)/(t-e),d=-(n+s)/(n-s);let m,x;if(l)m=1/(o-r),x=o/(o-r);else if(a===In)m=-2/(o-r),x=-(o+r)/(o-r);else if(a===Ro)m=-1/(o-r),x=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=u,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=m,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const rs=new P,yn=new Ze,Lp=new P(0,0,0),Dp=new P(1,1,1),hi=new P,Nr=new P,on=new P,dh=new Ze,ph=new Bt;class tn{constructor(e=0,t=0,n=0,s=tn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],u=s[2],f=s[6],d=s[10];switch(t){case"XYZ":this._y=Math.asin(et(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-et(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(et(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-et(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(et(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-et(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return dh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(dh,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ph.setFromEuler(this),this.setFromQuaternion(ph,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}tn.DEFAULT_ORDER="XYZ";class mf{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Ip=0;const mh=new P,os=new Bt,Vn=new Ze,Fr=new P,Ws=new P,Up=new P,Np=new Bt,gh=new P(1,0,0),xh=new P(0,1,0),vh=new P(0,0,1),_h={type:"added"},Fp={type:"removed"},as={type:"childadded",child:null},ya={type:"childremoved",child:null};class mt extends Os{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ip++}),this.uuid=Ki(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=mt.DEFAULT_UP.clone();const e=new P,t=new tn,n=new Bt,s=new P(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ze},normalMatrix:{value:new Ke}}),this.matrix=new Ze,this.matrixWorld=new Ze,this.matrixAutoUpdate=mt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=mt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new mf,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return os.setFromAxisAngle(e,t),this.quaternion.multiply(os),this}rotateOnWorldAxis(e,t){return os.setFromAxisAngle(e,t),this.quaternion.premultiply(os),this}rotateX(e){return this.rotateOnAxis(gh,e)}rotateY(e){return this.rotateOnAxis(xh,e)}rotateZ(e){return this.rotateOnAxis(vh,e)}translateOnAxis(e,t){return mh.copy(e).applyQuaternion(this.quaternion),this.position.add(mh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(gh,e)}translateY(e){return this.translateOnAxis(xh,e)}translateZ(e){return this.translateOnAxis(vh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Vn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Fr.copy(e):Fr.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Ws.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Vn.lookAt(Ws,Fr,this.up):Vn.lookAt(Fr,Ws,this.up),this.quaternion.setFromRotationMatrix(Vn),s&&(Vn.extractRotation(s.matrixWorld),os.setFromRotationMatrix(Vn),this.quaternion.premultiply(os.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(_h),as.child=e,this.dispatchEvent(as),as.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Fp),ya.child=e,this.dispatchEvent(ya),ya.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Vn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Vn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Vn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(_h),as.child=e,this.dispatchEvent(as),as.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ws,e,Up),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ws,Np,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),u=o(e.shapes),f=o(e.skeletons),d=o(e.animations),m=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),m.length>0&&(n.nodes=m)}return n.object=s,n;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}mt.DEFAULT_UP=new P(0,1,0);mt.DEFAULT_MATRIX_AUTO_UPDATE=!0;mt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Sn=new P,Wn=new P,Sa=new P,Xn=new P,ls=new P,cs=new P,Mh=new P,ba=new P,wa=new P,Ea=new P,Ta=new rt,Aa=new rt,Ca=new rt;class wn{constructor(e=new P,t=new P,n=new P){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Sn.subVectors(e,t),s.cross(Sn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Sn.subVectors(s,t),Wn.subVectors(n,t),Sa.subVectors(e,t);const o=Sn.dot(Sn),a=Sn.dot(Wn),l=Sn.dot(Sa),c=Wn.dot(Wn),h=Wn.dot(Sa),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;const f=1/u,d=(c*l-a*h)*f,m=(o*h-a*l)*f;return r.set(1-d-m,m,d)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Xn)===null?!1:Xn.x>=0&&Xn.y>=0&&Xn.x+Xn.y<=1}static getInterpolation(e,t,n,s,r,o,a,l){return this.getBarycoord(e,t,n,s,Xn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Xn.x),l.addScaledVector(o,Xn.y),l.addScaledVector(a,Xn.z),l)}static getInterpolatedAttribute(e,t,n,s,r,o){return Ta.setScalar(0),Aa.setScalar(0),Ca.setScalar(0),Ta.fromBufferAttribute(e,t),Aa.fromBufferAttribute(e,n),Ca.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(Ta,r.x),o.addScaledVector(Aa,r.y),o.addScaledVector(Ca,r.z),o}static isFrontFacing(e,t,n,s){return Sn.subVectors(n,t),Wn.subVectors(e,t),Sn.cross(Wn).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Sn.subVectors(this.c,this.b),Wn.subVectors(this.a,this.b),Sn.cross(Wn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return wn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return wn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return wn.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return wn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return wn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,r=this.c;let o,a;ls.subVectors(s,n),cs.subVectors(r,n),ba.subVectors(e,n);const l=ls.dot(ba),c=cs.dot(ba);if(l<=0&&c<=0)return t.copy(n);wa.subVectors(e,s);const h=ls.dot(wa),u=cs.dot(wa);if(h>=0&&u<=h)return t.copy(s);const f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(n).addScaledVector(ls,o);Ea.subVectors(e,r);const d=ls.dot(Ea),m=cs.dot(Ea);if(m>=0&&d<=m)return t.copy(r);const x=d*c-l*m;if(x<=0&&c>=0&&m<=0)return a=c/(c-m),t.copy(n).addScaledVector(cs,a);const g=h*m-d*u;if(g<=0&&u-h>=0&&d-m>=0)return Mh.subVectors(r,s),a=(u-h)/(u-h+(d-m)),t.copy(s).addScaledVector(Mh,a);const p=1/(g+x+f);return o=x*p,a=f*p,t.copy(n).addScaledVector(ls,o).addScaledVector(cs,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const gf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ui={h:0,s:0,l:0},Or={h:0,s:0,l:0};function Ra(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Oe{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=xt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,st.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=st.workingColorSpace){return this.r=e,this.g=t,this.b=n,st.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=st.workingColorSpace){if(e=Ac(e,1),t=et(t,0,1),n=et(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=Ra(o,r,e+1/3),this.g=Ra(o,r,e),this.b=Ra(o,r,e-1/3)}return st.colorSpaceToWorking(this,s),this}setStyle(e,t=xt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=xt){const n=gf[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Qn(e.r),this.g=Qn(e.g),this.b=Qn(e.b),this}copyLinearToSRGB(e){return this.r=bs(e.r),this.g=bs(e.g),this.b=bs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=xt){return st.workingToColorSpace(Ft.copy(this),e),Math.round(et(Ft.r*255,0,255))*65536+Math.round(et(Ft.g*255,0,255))*256+Math.round(et(Ft.b*255,0,255))}getHexString(e=xt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=st.workingColorSpace){st.workingToColorSpace(Ft.copy(this),t);const n=Ft.r,s=Ft.g,r=Ft.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=st.workingColorSpace){return st.workingToColorSpace(Ft.copy(this),t),e.r=Ft.r,e.g=Ft.g,e.b=Ft.b,e}getStyle(e=xt){st.workingToColorSpace(Ft.copy(this),e);const t=Ft.r,n=Ft.g,s=Ft.b;return e!==xt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(ui),this.setHSL(ui.h+e,ui.s+t,ui.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ui),e.getHSL(Or);const n=nr(ui.h,Or.h,t),s=nr(ui.s,Or.s,t),r=nr(ui.l,Or.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ft=new Oe;Oe.NAMES=gf;let Op=0;class Ji extends Os{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Op++}),this.uuid=Ki(),this.name="",this.type="Material",this.blending=Hi,this.side=ni,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=fl,this.blendDst=dl,this.blendEquation=Ni,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Oe(0,0,0),this.blendAlpha=0,this.depthFunc=Es,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=rh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=es,this.stencilZFail=es,this.stencilZPass=es,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Hi&&(n.blending=this.blending),this.side!==ni&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==fl&&(n.blendSrc=this.blendSrc),this.blendDst!==dl&&(n.blendDst=this.blendDst),this.blendEquation!==Ni&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Es&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==rh&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==es&&(n.stencilFail=this.stencilFail),this.stencilZFail!==es&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==es&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(t){const r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class gn extends Ji{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Oe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new tn,this.combine=Ku,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Et=new P,zr=new $;let zp=0;class _t{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:zp++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=oh,this.updateRanges=[],this.gpuType=Dn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)zr.fromBufferAttribute(this,t),zr.applyMatrix3(e),this.setXY(t,zr.x,zr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Et.fromBufferAttribute(this,t),Et.applyMatrix3(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Et.fromBufferAttribute(this,t),Et.applyMatrix4(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Et.fromBufferAttribute(this,t),Et.applyNormalMatrix(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Et.fromBufferAttribute(this,t),Et.transformDirection(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=xs(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Gt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=xs(t,this.array)),t}setX(e,t){return this.normalized&&(t=Gt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=xs(t,this.array)),t}setY(e,t){return this.normalized&&(t=Gt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=xs(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Gt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=xs(t,this.array)),t}setW(e,t){return this.normalized&&(t=Gt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Gt(t,this.array),n=Gt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=Gt(t,this.array),n=Gt(n,this.array),s=Gt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=Gt(t,this.array),n=Gt(n,this.array),s=Gt(s,this.array),r=Gt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==oh&&(e.usage=this.usage),e}}class xf extends _t{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class vf extends _t{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class ke extends _t{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Bp=0;const pn=new Ze,Pa=new mt,hs=new P,an=new si,Xs=new si,Dt=new P;class it extends Os{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Bp++}),this.uuid=Ki(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(df(e)?vf:xf)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Ke().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return pn.makeRotationFromQuaternion(e),this.applyMatrix4(pn),this}rotateX(e){return pn.makeRotationX(e),this.applyMatrix4(pn),this}rotateY(e){return pn.makeRotationY(e),this.applyMatrix4(pn),this}rotateZ(e){return pn.makeRotationZ(e),this.applyMatrix4(pn),this}translate(e,t,n){return pn.makeTranslation(e,t,n),this.applyMatrix4(pn),this}scale(e,t,n){return pn.makeScale(e,t,n),this.applyMatrix4(pn),this}lookAt(e){return Pa.lookAt(e),Pa.updateMatrix(),this.applyMatrix4(Pa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(hs).negate(),this.translate(hs.x,hs.y,hs.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let s=0,r=e.length;s<r;s++){const o=e[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ke(n,3))}else{const n=Math.min(e.length,t.count);for(let s=0;s<n;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new si);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const r=t[n];an.setFromBufferAttribute(r),this.morphTargetsRelative?(Dt.addVectors(this.boundingBox.min,an.min),this.boundingBox.expandByPoint(Dt),Dt.addVectors(this.boundingBox.max,an.max),this.boundingBox.expandByPoint(Dt)):(this.boundingBox.expandByPoint(an.min),this.boundingBox.expandByPoint(an.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Zi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(e){const n=this.boundingSphere.center;if(an.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];Xs.setFromBufferAttribute(a),this.morphTargetsRelative?(Dt.addVectors(an.min,Xs.min),an.expandByPoint(Dt),Dt.addVectors(an.max,Xs.max),an.expandByPoint(Dt)):(an.expandByPoint(Xs.min),an.expandByPoint(Xs.max))}an.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)Dt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Dt));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Dt.fromBufferAttribute(a,c),l&&(hs.fromBufferAttribute(e,c),Dt.add(hs)),s=Math.max(s,n.distanceToSquared(Dt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new _t(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let R=0;R<n.count;R++)a[R]=new P,l[R]=new P;const c=new P,h=new P,u=new P,f=new $,d=new $,m=new $,x=new P,g=new P;function p(R,S,b){c.fromBufferAttribute(n,R),h.fromBufferAttribute(n,S),u.fromBufferAttribute(n,b),f.fromBufferAttribute(r,R),d.fromBufferAttribute(r,S),m.fromBufferAttribute(r,b),h.sub(c),u.sub(c),d.sub(f),m.sub(f);const L=1/(d.x*m.y-m.x*d.y);isFinite(L)&&(x.copy(h).multiplyScalar(m.y).addScaledVector(u,-d.y).multiplyScalar(L),g.copy(u).multiplyScalar(d.x).addScaledVector(h,-m.x).multiplyScalar(L),a[R].add(x),a[S].add(x),a[b].add(x),l[R].add(g),l[S].add(g),l[b].add(g))}let M=this.groups;M.length===0&&(M=[{start:0,count:e.count}]);for(let R=0,S=M.length;R<S;++R){const b=M[R],L=b.start,D=b.count;for(let N=L,B=L+D;N<B;N+=3)p(e.getX(N+0),e.getX(N+1),e.getX(N+2))}const _=new P,v=new P,E=new P,T=new P;function w(R){E.fromBufferAttribute(s,R),T.copy(E);const S=a[R];_.copy(S),_.sub(E.multiplyScalar(E.dot(S))).normalize(),v.crossVectors(T,S);const L=v.dot(l[R])<0?-1:1;o.setXYZW(R,_.x,_.y,_.z,L)}for(let R=0,S=M.length;R<S;++R){const b=M[R],L=b.start,D=b.count;for(let N=L,B=L+D;N<B;N+=3)w(e.getX(N+0)),w(e.getX(N+1)),w(e.getX(N+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new _t(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);const s=new P,r=new P,o=new P,a=new P,l=new P,c=new P,h=new P,u=new P;if(e)for(let f=0,d=e.count;f<d;f+=3){const m=e.getX(f+0),x=e.getX(f+1),g=e.getX(f+2);s.fromBufferAttribute(t,m),r.fromBufferAttribute(t,x),o.fromBufferAttribute(t,g),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,m),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,g),a.add(h),l.add(h),c.add(h),n.setXYZ(m,a.x,a.y,a.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let f=0,d=t.count;f<d;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Dt.fromBufferAttribute(e,t),Dt.normalize(),e.setXYZ(t,Dt.x,Dt.y,Dt.z)}toNonIndexed(){function e(a,l){const c=a.array,h=a.itemSize,u=a.normalized,f=new c.constructor(l.length*h);let d=0,m=0;for(let x=0,g=l.length;x<g;x++){a.isInterleavedBufferAttribute?d=l[x]*a.data.stride+a.offset:d=l[x]*h;for(let p=0;p<h;p++)f[m++]=c[d++]}return new _t(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new it,n=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=e(l,n);t.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){const f=c[h],d=e(f,n);l.push(d)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){const d=c[u];h.push(d.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const s=e.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(t))}const r=e.morphAttributes;for(const c in r){const h=[],u=r[c];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,h=o.length;c<h;c++){const u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const yh=new Ze,Ti=new Rc,Br=new Zi,Sh=new P,kr=new P,Hr=new P,Gr=new P,La=new P,Vr=new P,bh=new P,Wr=new P;class lt extends mt{constructor(e=new it,t=new gn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){Vr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=a[l],u=r[l];h!==0&&(La.fromBufferAttribute(u,e),o?Vr.addScaledVector(La,h):Vr.addScaledVector(La.sub(t),h))}t.add(Vr)}return t}raycast(e,t){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Br.copy(n.boundingSphere),Br.applyMatrix4(r),Ti.copy(e.ray).recast(e.near),!(Br.containsPoint(Ti.origin)===!1&&(Ti.intersectSphere(Br,Sh)===null||Ti.origin.distanceToSquared(Sh)>(e.far-e.near)**2))&&(yh.copy(r).invert(),Ti.copy(e.ray).applyMatrix4(yh),!(n.boundingBox!==null&&Ti.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Ti)))}_computeIntersections(e,t,n){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,x=f.length;m<x;m++){const g=f[m],p=o[g.materialIndex],M=Math.max(g.start,d.start),_=Math.min(a.count,Math.min(g.start+g.count,d.start+d.count));for(let v=M,E=_;v<E;v+=3){const T=a.getX(v),w=a.getX(v+1),R=a.getX(v+2);s=Xr(this,p,e,n,c,h,u,T,w,R),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{const m=Math.max(0,d.start),x=Math.min(a.count,d.start+d.count);for(let g=m,p=x;g<p;g+=3){const M=a.getX(g),_=a.getX(g+1),v=a.getX(g+2);s=Xr(this,o,e,n,c,h,u,M,_,v),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let m=0,x=f.length;m<x;m++){const g=f[m],p=o[g.materialIndex],M=Math.max(g.start,d.start),_=Math.min(l.count,Math.min(g.start+g.count,d.start+d.count));for(let v=M,E=_;v<E;v+=3){const T=v,w=v+1,R=v+2;s=Xr(this,p,e,n,c,h,u,T,w,R),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{const m=Math.max(0,d.start),x=Math.min(l.count,d.start+d.count);for(let g=m,p=x;g<p;g+=3){const M=g,_=g+1,v=g+2;s=Xr(this,o,e,n,c,h,u,M,_,v),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}}}function kp(i,e,t,n,s,r,o,a){let l;if(e.side===Xt?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,e.side===ni,a),l===null)return null;Wr.copy(a),Wr.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(Wr);return c<t.near||c>t.far?null:{distance:c,point:Wr.clone(),object:i}}function Xr(i,e,t,n,s,r,o,a,l,c){i.getVertexPosition(a,kr),i.getVertexPosition(l,Hr),i.getVertexPosition(c,Gr);const h=kp(i,e,t,n,kr,Hr,Gr,bh);if(h){const u=new P;wn.getBarycoord(bh,kr,Hr,Gr,u),s&&(h.uv=wn.getInterpolatedAttribute(s,a,l,c,u,new $)),r&&(h.uv1=wn.getInterpolatedAttribute(r,a,l,c,u,new $)),o&&(h.normal=wn.getInterpolatedAttribute(o,a,l,c,u,new P),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new P,materialIndex:0};wn.getNormal(kr,Hr,Gr,f.normal),h.face=f,h.barycoord=u}return h}class un extends it{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],h=[],u=[];let f=0,d=0;m("z","y","x",-1,-1,n,t,e,o,r,0),m("z","y","x",1,-1,n,t,-e,o,r,1),m("x","z","y",1,1,e,n,t,s,o,2),m("x","z","y",1,-1,e,n,-t,s,o,3),m("x","y","z",1,-1,e,t,n,s,r,4),m("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new ke(c,3)),this.setAttribute("normal",new ke(h,3)),this.setAttribute("uv",new ke(u,2));function m(x,g,p,M,_,v,E,T,w,R,S){const b=v/w,L=E/R,D=v/2,N=E/2,B=T/2,O=w+1,V=R+1;let Z=0,W=0;const re=new P;for(let fe=0;fe<V;fe++){const ne=fe*L-N;for(let ze=0;ze<O;ze++){const He=ze*b-D;re[x]=He*M,re[g]=ne*_,re[p]=B,c.push(re.x,re.y,re.z),re[x]=0,re[g]=0,re[p]=T>0?1:-1,h.push(re.x,re.y,re.z),u.push(ze/w),u.push(1-fe/R),Z+=1}}for(let fe=0;fe<R;fe++)for(let ne=0;ne<w;ne++){const ze=f+ne+O*fe,He=f+ne+O*(fe+1),Je=f+(ne+1)+O*(fe+1),qe=f+(ne+1)+O*fe;l.push(ze,He,qe),l.push(He,Je,qe),W+=6}a.addGroup(d,W,S),d+=W,f+=Z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new un(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ps(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function Vt(i){const e={};for(let t=0;t<i.length;t++){const n=Ps(i[t]);for(const s in n)e[s]=n[s]}return e}function Hp(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function _f(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:st.workingColorSpace}const Un={clone:Ps,merge:Vt};var Gp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Vp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class vt extends Ji{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Gp,this.fragmentShader=Vp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ps(e.uniforms),this.uniformsGroups=Hp(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Mf extends mt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ze,this.projectionMatrix=new Ze,this.projectionMatrixInverse=new Ze,this.coordinateSystem=In,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const fi=new P,wh=new $,Eh=new $;class Wt extends Mf{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Rs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(tr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Rs*2*Math.atan(Math.tan(tr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){fi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(fi.x,fi.y).multiplyScalar(-e/fi.z),fi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(fi.x,fi.y).multiplyScalar(-e/fi.z)}getViewSize(e,t){return this.getViewBounds(e,wh,Eh),t.subVectors(Eh,wh)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(tr*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const us=-90,fs=1;class Wp extends mt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Wt(us,fs,e,t);s.layers=this.layers,this.add(s);const r=new Wt(us,fs,e,t);r.layers=this.layers,this.add(r);const o=new Wt(us,fs,e,t);o.layers=this.layers,this.add(o);const a=new Wt(us,fs,e,t);a.layers=this.layers,this.add(a);const l=new Wt(us,fs,e,t);l.layers=this.layers,this.add(l);const c=new Wt(us,fs,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,l]=t;for(const c of t)this.remove(c);if(e===In)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Ro)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,h]=this.children,u=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;const x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,o),e.setRenderTarget(n,2,s),e.render(t,a),e.setRenderTarget(n,3,s),e.render(t,l),e.setRenderTarget(n,4,s),e.render(t,c),n.texture.generateMipmaps=x,e.setRenderTarget(n,5,s),e.render(t,h),e.setRenderTarget(u,f,d),e.xr.enabled=m,n.texture.needsPMREMUpdate=!0}}class yf extends Ct{constructor(e=[],t=Ts,n,s,r,o,a,l,c,h){super(e,t,n,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Xp extends $t{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new yf(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new un(5,5,5),r=new vt({name:"CubemapFromEquirect",uniforms:Ps(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Xt,blending:Jn});r.uniforms.tEquirect.value=t;const o=new lt(s,r),a=t.minFilter;return t.minFilter===En&&(t.minFilter=ln),new Wp(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}}class Qt extends mt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const qp={type:"move"};class Da{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Qt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Qt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Qt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const x of e.hand.values()){const g=t.getJointPose(x,n),p=this._getHandJoint(c,x);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,m=.005;c.inputState.pinching&&f>d+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=d-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(qp)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Qt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class Pc{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Oe(e),this.density=t}clone(){return new Pc(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Yp extends mt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new tn,this.environmentIntensity=1,this.environmentRotation=new tn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const qr=new P,Th=new P;class jp extends mt{constructor(){super(),this.isLOD=!0,this._currentLevel=0,this.type="LOD",Object.defineProperties(this,{levels:{enumerable:!0,value:[]}}),this.autoUpdate=!0}copy(e){super.copy(e,!1);const t=e.levels;for(let n=0,s=t.length;n<s;n++){const r=t[n];this.addLevel(r.object.clone(),r.distance,r.hysteresis)}return this.autoUpdate=e.autoUpdate,this}addLevel(e,t=0,n=0){t=Math.abs(t);const s=this.levels;let r;for(r=0;r<s.length&&!(t<s[r].distance);r++);return s.splice(r,0,{distance:t,hysteresis:n,object:e}),this.add(e),this}removeLevel(e){const t=this.levels;for(let n=0;n<t.length;n++)if(t[n].distance===e){const s=t.splice(n,1);return this.remove(s[0].object),!0}return!1}getCurrentLevel(){return this._currentLevel}getObjectForDistance(e){const t=this.levels;if(t.length>0){let n,s;for(n=1,s=t.length;n<s;n++){let r=t[n].distance;if(t[n].object.visible&&(r-=r*t[n].hysteresis),e<r)break}return t[n-1].object}return null}raycast(e,t){if(this.levels.length>0){qr.setFromMatrixPosition(this.matrixWorld);const s=e.ray.origin.distanceTo(qr);this.getObjectForDistance(s).raycast(e,t)}}update(e){const t=this.levels;if(t.length>1){qr.setFromMatrixPosition(e.matrixWorld),Th.setFromMatrixPosition(this.matrixWorld);const n=qr.distanceTo(Th)/e.zoom;t[0].object.visible=!0;let s,r;for(s=1,r=t.length;s<r;s++){let o=t[s].distance;if(t[s].object.visible&&(o-=o*t[s].hysteresis),n>=o)t[s-1].object.visible=!1,t[s].object.visible=!0;else break}for(this._currentLevel=s-1;s<r;s++)t[s].object.visible=!1}}toJSON(e){const t=super.toJSON(e);this.autoUpdate===!1&&(t.object.autoUpdate=!1),t.object.levels=[];const n=this.levels;for(let s=0,r=n.length;s<r;s++){const o=n[s];t.object.levels.push({object:o.object.uuid,distance:o.distance,hysteresis:o.hysteresis})}return t}}class qo extends Ct{constructor(e=null,t=1,n=1,s,r,o,a,l,c=qt,h=qt,u,f){super(null,o,a,l,c,h,s,r,u,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ql extends _t{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const ds=new Ze,Ah=new Ze,Yr=[],Ch=new si,Kp=new Ze,qs=new lt,Ys=new Zi;class ir extends lt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Ql(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Kp)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new si),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ds),Ch.copy(e.boundingBox).applyMatrix4(ds),this.boundingBox.union(Ch)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Zi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ds),Ys.copy(e.boundingSphere).applyMatrix4(ds),this.boundingSphere.union(Ys)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(e,t){const n=this.matrixWorld,s=this.count;if(qs.geometry=this.geometry,qs.material=this.material,qs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ys.copy(this.boundingSphere),Ys.applyMatrix4(n),e.ray.intersectsSphere(Ys)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,ds),Ah.multiplyMatrices(n,ds),qs.matrixWorld=Ah,qs.raycast(e,Yr);for(let o=0,a=Yr.length;o<a;o++){const l=Yr[o];l.instanceId=r,l.object=this,t.push(l)}Yr.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Ql(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new qo(new Float32Array(s*this.count),s,this.count,bc,Dn));const r=this.morphTexture.source.data.data;let o=0;for(let c=0;c<n.length;c++)o+=n[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=s*e;r[l]=a,r.set(n,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Ia=new P,Zp=new P,Jp=new Ke;class pi{constructor(e=new P(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=Ia.subVectors(n,t).cross(Zp.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Ia),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Jp.getNormalMatrix(e),s=this.coplanarPoint(Ia).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ai=new Zi,Qp=new $(.5,.5),jr=new P;class Lc{constructor(e=new pi,t=new pi,n=new pi,s=new pi,r=new pi,o=new pi){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=In,n=!1){const s=this.planes,r=e.elements,o=r[0],a=r[1],l=r[2],c=r[3],h=r[4],u=r[5],f=r[6],d=r[7],m=r[8],x=r[9],g=r[10],p=r[11],M=r[12],_=r[13],v=r[14],E=r[15];if(s[0].setComponents(c-o,d-h,p-m,E-M).normalize(),s[1].setComponents(c+o,d+h,p+m,E+M).normalize(),s[2].setComponents(c+a,d+u,p+x,E+_).normalize(),s[3].setComponents(c-a,d-u,p-x,E-_).normalize(),n)s[4].setComponents(l,f,g,v).normalize(),s[5].setComponents(c-l,d-f,p-g,E-v).normalize();else if(s[4].setComponents(c-l,d-f,p-g,E-v).normalize(),t===In)s[5].setComponents(c+l,d+f,p+g,E+v).normalize();else if(t===Ro)s[5].setComponents(l,f,g,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ai.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ai.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ai)}intersectsSprite(e){Ai.center.set(0,0,0);const t=Qp.distanceTo(e.center);return Ai.radius=.7071067811865476+t,Ai.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ai)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(jr.x=s.normal.x>0?e.max.x:e.min.x,jr.y=s.normal.y>0?e.max.y:e.min.y,jr.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(jr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Sf extends Ji{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Oe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Po=new P,Lo=new P,Rh=new Ze,js=new Rc,Kr=new Zi,Ua=new P,Ph=new P;class $p extends mt{constructor(e=new it,t=new Sf){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)Po.fromBufferAttribute(t,s-1),Lo.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=Po.distanceTo(Lo);e.setAttribute("lineDistance",new ke(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Kr.copy(n.boundingSphere),Kr.applyMatrix4(s),Kr.radius+=r,e.ray.intersectsSphere(Kr)===!1)return;Rh.copy(s).invert(),js.copy(e.ray).applyMatrix4(Rh);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,f=n.attributes.position;if(h!==null){const d=Math.max(0,o.start),m=Math.min(h.count,o.start+o.count);for(let x=d,g=m-1;x<g;x+=c){const p=h.getX(x),M=h.getX(x+1),_=Zr(this,e,js,l,p,M,x);_&&t.push(_)}if(this.isLineLoop){const x=h.getX(m-1),g=h.getX(d),p=Zr(this,e,js,l,x,g,m-1);p&&t.push(p)}}else{const d=Math.max(0,o.start),m=Math.min(f.count,o.start+o.count);for(let x=d,g=m-1;x<g;x+=c){const p=Zr(this,e,js,l,x,x+1,x);p&&t.push(p)}if(this.isLineLoop){const x=Zr(this,e,js,l,m-1,d,m-1);x&&t.push(x)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Zr(i,e,t,n,s,r,o){const a=i.geometry.attributes.position;if(Po.fromBufferAttribute(a,s),Lo.fromBufferAttribute(a,r),t.distanceSqToSegment(Po,Lo,Ua,Ph)>n)return;Ua.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(Ua);if(!(c<e.near||c>e.far))return{distance:c,point:Ph.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}const Lh=new P,Dh=new P;class em extends $p{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)Lh.fromBufferAttribute(t,s),Dh.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Lh.distanceTo(Dh);e.setAttribute("lineDistance",new ke(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class tm extends Ji{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Oe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Ih=new Ze,$l=new Rc,Jr=new Zi,Qr=new P;class Dc extends mt{constructor(e=new it,t=new tm){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Jr.copy(n.boundingSphere),Jr.applyMatrix4(s),Jr.radius+=r,e.ray.intersectsSphere(Jr)===!1)return;Ih.copy(s).invert(),$l.copy(e.ray).applyMatrix4(Ih);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,u=n.attributes.position;if(c!==null){const f=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let m=f,x=d;m<x;m++){const g=c.getX(m);Qr.fromBufferAttribute(u,g),Uh(Qr,g,l,s,e,t,this)}}else{const f=Math.max(0,o.start),d=Math.min(u.count,o.start+o.count);for(let m=f,x=d;m<x;m++)Qr.fromBufferAttribute(u,m),Uh(Qr,m,l,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Uh(i,e,t,n,s,r,o){const a=$l.distanceSqToPoint(i);if(a<t){const l=new P;$l.closestPointToPoint(i,l),l.applyMatrix4(n);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class On extends Ct{constructor(e,t,n,s,r,o,a,l,c){super(e,t,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class bf extends Ct{constructor(e,t,n=Xi,s,r,o,a=qt,l=qt,c,h=ur,u=1){if(h!==ur&&h!==fr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:e,height:t,depth:u};super(f,s,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Cc(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class wf extends Ct{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class sr extends it{constructor(e=1,t=1,n=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:n,radialSegments:s,heightSegments:r},t=Math.max(0,t),n=Math.max(1,Math.floor(n)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));const o=[],a=[],l=[],c=[],h=t/2,u=Math.PI/2*e,f=t,d=2*u+f,m=n*2+r,x=s+1,g=new P,p=new P;for(let M=0;M<=m;M++){let _=0,v=0,E=0,T=0;if(M<=n){const S=M/n,b=S*Math.PI/2;v=-h-e*Math.cos(b),E=e*Math.sin(b),T=-e*Math.cos(b),_=S*u}else if(M<=n+r){const S=(M-n)/r;v=-h+S*t,E=e,T=0,_=u+S*f}else{const S=(M-n-r)/n,b=S*Math.PI/2;v=h+e*Math.sin(b),E=e*Math.cos(b),T=e*Math.sin(b),_=u+f+S*u}const w=Math.max(0,Math.min(1,_/d));let R=0;M===0?R=.5/s:M===m&&(R=-.5/s);for(let S=0;S<=s;S++){const b=S/s,L=b*Math.PI*2,D=Math.sin(L),N=Math.cos(L);p.x=-E*N,p.y=v,p.z=E*D,a.push(p.x,p.y,p.z),g.set(-E*N,T,E*D),g.normalize(),l.push(g.x,g.y,g.z),c.push(b+R,w)}if(M>0){const S=(M-1)*x;for(let b=0;b<s;b++){const L=S+b,D=S+b+1,N=M*x+b,B=M*x+b+1;o.push(L,D,N),o.push(D,B,N)}}}this.setIndex(o),this.setAttribute("position",new ke(a,3)),this.setAttribute("normal",new ke(l,3)),this.setAttribute("uv",new ke(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new sr(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}}class Ic extends it{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);const r=[],o=[],a=[],l=[],c=new P,h=new $;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,f=3;u<=t;u++,f+=3){const d=n+u/t*s;c.x=e*Math.cos(d),c.y=e*Math.sin(d),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[f]/e+1)/2,h.y=(o[f+1]/e+1)/2,l.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new ke(o,3)),this.setAttribute("normal",new ke(a,3)),this.setAttribute("uv",new ke(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ic(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class vn extends it{constructor(e=1,t=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const h=[],u=[],f=[],d=[];let m=0;const x=[],g=n/2;let p=0;M(),o===!1&&(e>0&&_(!0),t>0&&_(!1)),this.setIndex(h),this.setAttribute("position",new ke(u,3)),this.setAttribute("normal",new ke(f,3)),this.setAttribute("uv",new ke(d,2));function M(){const v=new P,E=new P;let T=0;const w=(t-e)/n;for(let R=0;R<=r;R++){const S=[],b=R/r,L=b*(t-e)+e;for(let D=0;D<=s;D++){const N=D/s,B=N*l+a,O=Math.sin(B),V=Math.cos(B);E.x=L*O,E.y=-b*n+g,E.z=L*V,u.push(E.x,E.y,E.z),v.set(O,w,V).normalize(),f.push(v.x,v.y,v.z),d.push(N,1-b),S.push(m++)}x.push(S)}for(let R=0;R<s;R++)for(let S=0;S<r;S++){const b=x[S][R],L=x[S+1][R],D=x[S+1][R+1],N=x[S][R+1];(e>0||S!==0)&&(h.push(b,L,N),T+=3),(t>0||S!==r-1)&&(h.push(L,D,N),T+=3)}c.addGroup(p,T,0),p+=T}function _(v){const E=m,T=new $,w=new P;let R=0;const S=v===!0?e:t,b=v===!0?1:-1;for(let D=1;D<=s;D++)u.push(0,g*b,0),f.push(0,b,0),d.push(.5,.5),m++;const L=m;for(let D=0;D<=s;D++){const B=D/s*l+a,O=Math.cos(B),V=Math.sin(B);w.x=S*V,w.y=g*b,w.z=S*O,u.push(w.x,w.y,w.z),f.push(0,b,0),T.x=O*.5+.5,T.y=V*.5*b+.5,d.push(T.x,T.y),m++}for(let D=0;D<s;D++){const N=E+D,B=L+D;v===!0?h.push(B,B+1,N):h.push(B+1,B,N),R+=3}c.addGroup(p,R,v===!0?1:2),p+=R}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new vn(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Yo extends vn{constructor(e=1,t=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new Yo(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Uc extends it{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};const r=[],o=[];a(s),c(n),h(),this.setAttribute("position",new ke(r,3)),this.setAttribute("normal",new ke(r.slice(),3)),this.setAttribute("uv",new ke(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(M){const _=new P,v=new P,E=new P;for(let T=0;T<t.length;T+=3)d(t[T+0],_),d(t[T+1],v),d(t[T+2],E),l(_,v,E,M)}function l(M,_,v,E){const T=E+1,w=[];for(let R=0;R<=T;R++){w[R]=[];const S=M.clone().lerp(v,R/T),b=_.clone().lerp(v,R/T),L=T-R;for(let D=0;D<=L;D++)D===0&&R===T?w[R][D]=S:w[R][D]=S.clone().lerp(b,D/L)}for(let R=0;R<T;R++)for(let S=0;S<2*(T-R)-1;S++){const b=Math.floor(S/2);S%2===0?(f(w[R][b+1]),f(w[R+1][b]),f(w[R][b])):(f(w[R][b+1]),f(w[R+1][b+1]),f(w[R+1][b]))}}function c(M){const _=new P;for(let v=0;v<r.length;v+=3)_.x=r[v+0],_.y=r[v+1],_.z=r[v+2],_.normalize().multiplyScalar(M),r[v+0]=_.x,r[v+1]=_.y,r[v+2]=_.z}function h(){const M=new P;for(let _=0;_<r.length;_+=3){M.x=r[_+0],M.y=r[_+1],M.z=r[_+2];const v=g(M)/2/Math.PI+.5,E=p(M)/Math.PI+.5;o.push(v,1-E)}m(),u()}function u(){for(let M=0;M<o.length;M+=6){const _=o[M+0],v=o[M+2],E=o[M+4],T=Math.max(_,v,E),w=Math.min(_,v,E);T>.9&&w<.1&&(_<.2&&(o[M+0]+=1),v<.2&&(o[M+2]+=1),E<.2&&(o[M+4]+=1))}}function f(M){r.push(M.x,M.y,M.z)}function d(M,_){const v=M*3;_.x=e[v+0],_.y=e[v+1],_.z=e[v+2]}function m(){const M=new P,_=new P,v=new P,E=new P,T=new $,w=new $,R=new $;for(let S=0,b=0;S<r.length;S+=9,b+=6){M.set(r[S+0],r[S+1],r[S+2]),_.set(r[S+3],r[S+4],r[S+5]),v.set(r[S+6],r[S+7],r[S+8]),T.set(o[b+0],o[b+1]),w.set(o[b+2],o[b+3]),R.set(o[b+4],o[b+5]),E.copy(M).add(_).add(v).divideScalar(3);const L=g(E);x(T,b+0,M,L),x(w,b+2,_,L),x(R,b+4,v,L)}}function x(M,_,v,E){E<0&&M.x===1&&(o[_]=M.x-1),v.x===0&&v.z===0&&(o[_]=E/2/Math.PI+.5)}function g(M){return Math.atan2(M.z,-M.x)}function p(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Uc(e.vertices,e.indices,e.radius,e.details)}}class Bn{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const n=this.getLengths();let s=0;const r=n.length;let o;t?o=t:o=e*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);const h=n[s],f=n[s+1]-h,d=(o-h)/f;return(s+d)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),l=t||(o.isVector2?new $:new P);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){const n=new P,s=[],r=[],o=[],a=new P,l=new Ze;for(let d=0;d<=e;d++){const m=d/e;s[d]=this.getTangentAt(m,new P)}r[0]=new P,o[0]=new P;let c=Number.MAX_VALUE;const h=Math.abs(s[0].x),u=Math.abs(s[0].y),f=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),f<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let d=1;d<=e;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(s[d-1],s[d]),a.length()>Number.EPSILON){a.normalize();const m=Math.acos(et(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(a,m))}o[d].crossVectors(s[d],r[d])}if(t===!0){let d=Math.acos(et(r[0].dot(r[e]),-1,1));d/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(d=-d);for(let m=1;m<=e;m++)r[m].applyMatrix4(l.makeRotationAxis(s[m],d*m)),o[m].crossVectors(s[m],r[m])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Nc extends Bn{constructor(e=0,t=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new $){const n=t,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+e*r;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=l-this.aX,d=c-this.aY;l=f*h-d*u+this.aX,c=f*u+d*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class nm extends Nc{constructor(e,t,n,s,r,o){super(e,t,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Fc(){let i=0,e=0,t=0,n=0;function s(r,o,a,l){i=r,e=a,t=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,u){let f=(o-r)/c-(a-r)/(c+h)+(a-o)/h,d=(a-o)/h-(l-o)/(h+u)+(l-a)/u;f*=h,d*=h,s(o,a,f,d)},calc:function(r){const o=r*r,a=o*r;return i+e*r+t*o+n*a}}}const $r=new P,Na=new Fc,Fa=new Fc,Oa=new Fc;class br extends Bn{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new P){const n=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:($r.subVectors(s[0],s[1]).add(s[0]),c=$r);const u=s[a%r],f=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:($r.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=$r),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let m=Math.pow(c.distanceToSquared(u),d),x=Math.pow(u.distanceToSquared(f),d),g=Math.pow(f.distanceToSquared(h),d);x<1e-4&&(x=1),m<1e-4&&(m=x),g<1e-4&&(g=x),Na.initNonuniformCatmullRom(c.x,u.x,f.x,h.x,m,x,g),Fa.initNonuniformCatmullRom(c.y,u.y,f.y,h.y,m,x,g),Oa.initNonuniformCatmullRom(c.z,u.z,f.z,h.z,m,x,g)}else this.curveType==="catmullrom"&&(Na.initCatmullRom(c.x,u.x,f.x,h.x,this.tension),Fa.initCatmullRom(c.y,u.y,f.y,h.y,this.tension),Oa.initCatmullRom(c.z,u.z,f.z,h.z,this.tension));return n.set(Na.calc(l),Fa.calc(l),Oa.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(new P().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Nh(i,e,t,n,s){const r=(n-e)*.5,o=(s-t)*.5,a=i*i,l=i*a;return(2*t-2*n+r+o)*l+(-3*t+3*n-2*r-o)*a+r*i+t}function im(i,e){const t=1-i;return t*t*e}function sm(i,e){return 2*(1-i)*i*e}function rm(i,e){return i*i*e}function rr(i,e,t,n){return im(i,e)+sm(i,t)+rm(i,n)}function om(i,e){const t=1-i;return t*t*t*e}function am(i,e){const t=1-i;return 3*t*t*i*e}function lm(i,e){return 3*(1-i)*i*i*e}function cm(i,e){return i*i*i*e}function or(i,e,t,n,s){return om(i,e)+am(i,t)+lm(i,n)+cm(i,s)}class Ef extends Bn{constructor(e=new $,t=new $,n=new $,s=new $){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new $){const n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(or(e,s.x,r.x,o.x,a.x),or(e,s.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class hm extends Bn{constructor(e=new P,t=new P,n=new P,s=new P){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new P){const n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(or(e,s.x,r.x,o.x,a.x),or(e,s.y,r.y,o.y,a.y),or(e,s.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Tf extends Bn{constructor(e=new $,t=new $){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new $){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new $){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Af extends Bn{constructor(e=new P,t=new P){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new P){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new P){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Cf extends Bn{constructor(e=new $,t=new $,n=new $){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new $){const n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(rr(e,s.x,r.x,o.x),rr(e,s.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Rf extends Bn{constructor(e=new P,t=new P,n=new P){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new P){const n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(rr(e,s.x,r.x,o.x),rr(e,s.y,r.y,o.y),rr(e,s.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Oc extends Bn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new $){const n=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return n.set(Nh(a,l.x,c.x,h.x,u.x),Nh(a,l.y,c.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(new $().fromArray(s))}return this}}var Do=Object.freeze({__proto__:null,ArcCurve:nm,CatmullRomCurve3:br,CubicBezierCurve:Ef,CubicBezierCurve3:hm,EllipseCurve:Nc,LineCurve:Tf,LineCurve3:Af,QuadraticBezierCurve:Cf,QuadraticBezierCurve3:Rf,SplineCurve:Oc});class Pf extends Bn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Do[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const o=s[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}r++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){const h=l[c];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const s=e.curves[t];this.curves.push(new Do[s.type]().fromJSON(s))}return this}}class ec extends Pf{constructor(e){super(),this.type="Path",this.currentPoint=new $,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new Tf(this.currentPoint.clone(),new $(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){const r=new Cf(this.currentPoint.clone(),new $(e,t),new $(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,o){const a=new Ef(this.currentPoint.clone(),new $(e,t),new $(n,s),new $(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new Oc(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,n,s,r,o),this}absarc(e,t,n,s,r,o){return this.absellipse(e,t,n,n,s,r,o),this}ellipse(e,t,n,s,r,o,a,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,n,s,r,o,a,l),this}absellipse(e,t,n,s,r,o,a,l){const c=new Nc(e,t,n,s,r,o,a,l);if(this.curves.length>0){const u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class nn extends ec{constructor(e){super(e),this.uuid=Ki(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const s=e.holes[t];this.holes.push(new ec().fromJSON(s))}return this}}function um(i,e,t=2){const n=e&&e.length,s=n?e[0]*t:i.length;let r=Lf(i,0,s,t,!0);const o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(n&&(r=gm(i,e,r,t)),i.length>80*t){a=1/0,l=1/0;let h=-1/0,u=-1/0;for(let f=t;f<s;f+=t){const d=i[f],m=i[f+1];d<a&&(a=d),m<l&&(l=m),d>h&&(h=d),m>u&&(u=m)}c=Math.max(h-a,u-l),c=c!==0?32767/c:0}return mr(r,o,t,a,l,c,0),o}function Lf(i,e,t,n,s){let r;if(s===Am(i,e,t,n)>0)for(let o=e;o<t;o+=n)r=Fh(o/n|0,i[o],i[o+1],r);else for(let o=t-n;o>=e;o-=n)r=Fh(o/n|0,i[o],i[o+1],r);return r&&Ls(r,r.next)&&(xr(r),r=r.next),r}function qi(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(Ls(t,t.next)||St(t.prev,t,t.next)===0)){if(xr(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function mr(i,e,t,n,s,r,o){if(!i)return;!o&&r&&ym(i,n,s,r);let a=i;for(;i.prev!==i.next;){const l=i.prev,c=i.next;if(r?dm(i,n,s,r):fm(i)){e.push(l.i,i.i,c.i),xr(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=pm(qi(i),e),mr(i,e,t,n,s,r,2)):o===2&&mm(i,e,t,n,s,r):mr(qi(i),e,t,n,s,r,1);break}}}function fm(i){const e=i.prev,t=i,n=i.next;if(St(e,t,n)>=0)return!1;const s=e.x,r=t.x,o=n.x,a=e.y,l=t.y,c=n.y,h=Math.min(s,r,o),u=Math.min(a,l,c),f=Math.max(s,r,o),d=Math.max(a,l,c);let m=n.next;for(;m!==e;){if(m.x>=h&&m.x<=f&&m.y>=u&&m.y<=d&&Js(s,a,r,l,o,c,m.x,m.y)&&St(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function dm(i,e,t,n){const s=i.prev,r=i,o=i.next;if(St(s,r,o)>=0)return!1;const a=s.x,l=r.x,c=o.x,h=s.y,u=r.y,f=o.y,d=Math.min(a,l,c),m=Math.min(h,u,f),x=Math.max(a,l,c),g=Math.max(h,u,f),p=tc(d,m,e,t,n),M=tc(x,g,e,t,n);let _=i.prevZ,v=i.nextZ;for(;_&&_.z>=p&&v&&v.z<=M;){if(_.x>=d&&_.x<=x&&_.y>=m&&_.y<=g&&_!==s&&_!==o&&Js(a,h,l,u,c,f,_.x,_.y)&&St(_.prev,_,_.next)>=0||(_=_.prevZ,v.x>=d&&v.x<=x&&v.y>=m&&v.y<=g&&v!==s&&v!==o&&Js(a,h,l,u,c,f,v.x,v.y)&&St(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;_&&_.z>=p;){if(_.x>=d&&_.x<=x&&_.y>=m&&_.y<=g&&_!==s&&_!==o&&Js(a,h,l,u,c,f,_.x,_.y)&&St(_.prev,_,_.next)>=0)return!1;_=_.prevZ}for(;v&&v.z<=M;){if(v.x>=d&&v.x<=x&&v.y>=m&&v.y<=g&&v!==s&&v!==o&&Js(a,h,l,u,c,f,v.x,v.y)&&St(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function pm(i,e){let t=i;do{const n=t.prev,s=t.next.next;!Ls(n,s)&&If(n,t,t.next,s)&&gr(n,s)&&gr(s,n)&&(e.push(n.i,t.i,s.i),xr(t),xr(t.next),t=i=s),t=t.next}while(t!==i);return qi(t)}function mm(i,e,t,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&wm(o,a)){let l=Uf(o,a);o=qi(o,o.next),l=qi(l,l.next),mr(o,e,t,n,s,r,0),mr(l,e,t,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function gm(i,e,t,n){const s=[];for(let r=0,o=e.length;r<o;r++){const a=e[r]*n,l=r<o-1?e[r+1]*n:i.length,c=Lf(i,a,l,n,!1);c===c.next&&(c.steiner=!0),s.push(bm(c))}s.sort(xm);for(let r=0;r<s.length;r++)t=vm(s[r],t);return t}function xm(i,e){let t=i.x-e.x;if(t===0&&(t=i.y-e.y,t===0)){const n=(i.next.y-i.y)/(i.next.x-i.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=n-s}return t}function vm(i,e){const t=_m(i,e);if(!t)return e;const n=Uf(t,i);return qi(n,n.next),qi(t,t.next)}function _m(i,e){let t=e;const n=i.x,s=i.y;let r=-1/0,o;if(Ls(i,t))return t;do{if(Ls(i,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){const u=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(u<=n&&u>r&&(r=u,o=t.x<t.next.x?t:t.next,u===n))return o}t=t.next}while(t!==e);if(!o)return null;const a=o,l=o.x,c=o.y;let h=1/0;t=o;do{if(n>=t.x&&t.x>=l&&n!==t.x&&Df(s<c?n:r,s,l,c,s<c?r:n,s,t.x,t.y)){const u=Math.abs(s-t.y)/(n-t.x);gr(t,i)&&(u<h||u===h&&(t.x>o.x||t.x===o.x&&Mm(o,t)))&&(o=t,h=u)}t=t.next}while(t!==a);return o}function Mm(i,e){return St(i.prev,i,e.prev)<0&&St(e.next,i,i.next)<0}function ym(i,e,t,n){let s=i;do s.z===0&&(s.z=tc(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Sm(s)}function Sm(i){let e,t=1;do{let n=i,s;i=null;let r=null;for(e=0;n;){e++;let o=n,a=0;for(let c=0;c<t&&(a++,o=o.nextZ,!!o);c++);let l=t;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||n.z<=o.z)?(s=n,n=n.nextZ,a--):(s=o,o=o.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=o}r.nextZ=null,t*=2}while(e>1);return i}function tc(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function bm(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function Df(i,e,t,n,s,r,o,a){return(s-o)*(e-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(n-a)}function Js(i,e,t,n,s,r,o,a){return!(i===o&&e===a)&&Df(i,e,t,n,s,r,o,a)}function wm(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!Em(i,e)&&(gr(i,e)&&gr(e,i)&&Tm(i,e)&&(St(i.prev,i,e.prev)||St(i,e.prev,e))||Ls(i,e)&&St(i.prev,i,i.next)>0&&St(e.prev,e,e.next)>0)}function St(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function Ls(i,e){return i.x===e.x&&i.y===e.y}function If(i,e,t,n){const s=to(St(i,e,t)),r=to(St(i,e,n)),o=to(St(t,n,i)),a=to(St(t,n,e));return!!(s!==r&&o!==a||s===0&&eo(i,t,e)||r===0&&eo(i,n,e)||o===0&&eo(t,i,n)||a===0&&eo(t,e,n))}function eo(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function to(i){return i>0?1:i<0?-1:0}function Em(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&If(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function gr(i,e){return St(i.prev,i,i.next)<0?St(i,e,i.next)>=0&&St(i,i.prev,e)>=0:St(i,e,i.prev)<0||St(i,i.next,e)<0}function Tm(i,e){let t=i,n=!1;const s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function Uf(i,e){const t=nc(i.i,i.x,i.y),n=nc(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function Fh(i,e,t,n){const s=nc(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function xr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function nc(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Am(i,e,t,n){let s=0;for(let r=e,o=t-n;r<t;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}class Cm{static triangulate(e,t,n=2){return um(e,t,n)}}class Kn{static area(e){const t=e.length;let n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return Kn.area(e)<0}static triangulateShape(e,t){const n=[],s=[],r=[];Oh(e),zh(n,e);let o=e.length;t.forEach(Oh);for(let l=0;l<t.length;l++)s.push(o),o+=t[l].length,zh(n,t[l]);const a=Cm.triangulate(n,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}}function Oh(i){const e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function zh(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}class Nn extends it{constructor(e=new nn([new $(.5,.5),new $(-.5,.5),new $(-.5,-.5),new $(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,s=[],r=[];for(let a=0,l=e.length;a<l;a++){const c=e[a];o(c)}this.setAttribute("position",new ke(s,3)),this.setAttribute("uv",new ke(r,2)),this.computeVertexNormals();function o(a){const l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1;let f=t.bevelEnabled!==void 0?t.bevelEnabled:!0,d=t.bevelThickness!==void 0?t.bevelThickness:.2,m=t.bevelSize!==void 0?t.bevelSize:d-.1,x=t.bevelOffset!==void 0?t.bevelOffset:0,g=t.bevelSegments!==void 0?t.bevelSegments:3;const p=t.extrudePath,M=t.UVGenerator!==void 0?t.UVGenerator:Rm;let _,v=!1,E,T,w,R;p&&(_=p.getSpacedPoints(h),v=!0,f=!1,E=p.computeFrenetFrames(h,!1),T=new P,w=new P,R=new P),f||(g=0,d=0,m=0,x=0);const S=a.extractPoints(c);let b=S.shape;const L=S.holes;if(!Kn.isClockWise(b)){b=b.reverse();for(let oe=0,ie=L.length;oe<ie;oe++){const ee=L[oe];Kn.isClockWise(ee)&&(L[oe]=ee.reverse())}}function N(oe){const ee=10000000000000001e-36;let te=oe[0];for(let Me=1;Me<=oe.length;Me++){const pe=Me%oe.length,ye=oe[pe],J=ye.x-te.x,Q=ye.y-te.y,A=J*J+Q*Q,y=Math.max(Math.abs(ye.x),Math.abs(ye.y),Math.abs(te.x),Math.abs(te.y)),U=ee*y*y;if(A<=U){oe.splice(pe,1),Me--;continue}te=ye}}N(b),L.forEach(N);const B=L.length,O=b;for(let oe=0;oe<B;oe++){const ie=L[oe];b=b.concat(ie)}function V(oe,ie,ee){return ie||console.error("THREE.ExtrudeGeometry: vec does not exist"),oe.clone().addScaledVector(ie,ee)}const Z=b.length;function W(oe,ie,ee){let te,Me,pe;const ye=oe.x-ie.x,J=oe.y-ie.y,Q=ee.x-oe.x,A=ee.y-oe.y,y=ye*ye+J*J,U=ye*A-J*Q;if(Math.abs(U)>Number.EPSILON){const X=Math.sqrt(y),q=Math.sqrt(Q*Q+A*A),z=ie.x-J/X,de=ie.y+ye/X,ce=ee.x-A/q,ue=ee.y+Q/q,_e=((ce-z)*A-(ue-de)*Q)/(ye*A-J*Q);te=z+ye*_e-oe.x,Me=de+J*_e-oe.y;const ae=te*te+Me*Me;if(ae<=2)return new $(te,Me);pe=Math.sqrt(ae/2)}else{let X=!1;ye>Number.EPSILON?Q>Number.EPSILON&&(X=!0):ye<-Number.EPSILON?Q<-Number.EPSILON&&(X=!0):Math.sign(J)===Math.sign(A)&&(X=!0),X?(te=-J,Me=ye,pe=Math.sqrt(y)):(te=ye,Me=J,pe=Math.sqrt(y/2))}return new $(te/pe,Me/pe)}const re=[];for(let oe=0,ie=O.length,ee=ie-1,te=oe+1;oe<ie;oe++,ee++,te++)ee===ie&&(ee=0),te===ie&&(te=0),re[oe]=W(O[oe],O[ee],O[te]);const fe=[];let ne,ze=re.concat();for(let oe=0,ie=B;oe<ie;oe++){const ee=L[oe];ne=[];for(let te=0,Me=ee.length,pe=Me-1,ye=te+1;te<Me;te++,pe++,ye++)pe===Me&&(pe=0),ye===Me&&(ye=0),ne[te]=W(ee[te],ee[pe],ee[ye]);fe.push(ne),ze=ze.concat(ne)}let He;if(g===0)He=Kn.triangulateShape(O,L);else{const oe=[],ie=[];for(let ee=0;ee<g;ee++){const te=ee/g,Me=d*Math.cos(te*Math.PI/2),pe=m*Math.sin(te*Math.PI/2)+x;for(let ye=0,J=O.length;ye<J;ye++){const Q=V(O[ye],re[ye],pe);Ie(Q.x,Q.y,-Me),te===0&&oe.push(Q)}for(let ye=0,J=B;ye<J;ye++){const Q=L[ye];ne=fe[ye];const A=[];for(let y=0,U=Q.length;y<U;y++){const X=V(Q[y],ne[y],pe);Ie(X.x,X.y,-Me),te===0&&A.push(X)}te===0&&ie.push(A)}}He=Kn.triangulateShape(oe,ie)}const Je=He.length,qe=m+x;for(let oe=0;oe<Z;oe++){const ie=f?V(b[oe],ze[oe],qe):b[oe];v?(w.copy(E.normals[0]).multiplyScalar(ie.x),T.copy(E.binormals[0]).multiplyScalar(ie.y),R.copy(_[0]).add(w).add(T),Ie(R.x,R.y,R.z)):Ie(ie.x,ie.y,0)}for(let oe=1;oe<=h;oe++)for(let ie=0;ie<Z;ie++){const ee=f?V(b[ie],ze[ie],qe):b[ie];v?(w.copy(E.normals[oe]).multiplyScalar(ee.x),T.copy(E.binormals[oe]).multiplyScalar(ee.y),R.copy(_[oe]).add(w).add(T),Ie(R.x,R.y,R.z)):Ie(ee.x,ee.y,u/h*oe)}for(let oe=g-1;oe>=0;oe--){const ie=oe/g,ee=d*Math.cos(ie*Math.PI/2),te=m*Math.sin(ie*Math.PI/2)+x;for(let Me=0,pe=O.length;Me<pe;Me++){const ye=V(O[Me],re[Me],te);Ie(ye.x,ye.y,u+ee)}for(let Me=0,pe=L.length;Me<pe;Me++){const ye=L[Me];ne=fe[Me];for(let J=0,Q=ye.length;J<Q;J++){const A=V(ye[J],ne[J],te);v?Ie(A.x,A.y+_[h-1].y,_[h-1].x+ee):Ie(A.x,A.y,u+ee)}}}j(),se();function j(){const oe=s.length/3;if(f){let ie=0,ee=Z*ie;for(let te=0;te<Je;te++){const Me=He[te];Le(Me[2]+ee,Me[1]+ee,Me[0]+ee)}ie=h+g*2,ee=Z*ie;for(let te=0;te<Je;te++){const Me=He[te];Le(Me[0]+ee,Me[1]+ee,Me[2]+ee)}}else{for(let ie=0;ie<Je;ie++){const ee=He[ie];Le(ee[2],ee[1],ee[0])}for(let ie=0;ie<Je;ie++){const ee=He[ie];Le(ee[0]+Z*h,ee[1]+Z*h,ee[2]+Z*h)}}n.addGroup(oe,s.length/3-oe,0)}function se(){const oe=s.length/3;let ie=0;we(O,ie),ie+=O.length;for(let ee=0,te=L.length;ee<te;ee++){const Me=L[ee];we(Me,ie),ie+=Me.length}n.addGroup(oe,s.length/3-oe,1)}function we(oe,ie){let ee=oe.length;for(;--ee>=0;){const te=ee;let Me=ee-1;Me<0&&(Me=oe.length-1);for(let pe=0,ye=h+g*2;pe<ye;pe++){const J=Z*pe,Q=Z*(pe+1),A=ie+te+J,y=ie+Me+J,U=ie+Me+Q,X=ie+te+Q;Ne(A,y,U,X)}}}function Ie(oe,ie,ee){l.push(oe),l.push(ie),l.push(ee)}function Le(oe,ie,ee){tt(oe),tt(ie),tt(ee);const te=s.length/3,Me=M.generateTopUV(n,s,te-3,te-2,te-1);I(Me[0]),I(Me[1]),I(Me[2])}function Ne(oe,ie,ee,te){tt(oe),tt(ie),tt(te),tt(ie),tt(ee),tt(te);const Me=s.length/3,pe=M.generateSideWallUV(n,s,Me-6,Me-3,Me-2,Me-1);I(pe[0]),I(pe[1]),I(pe[3]),I(pe[1]),I(pe[2]),I(pe[3])}function tt(oe){s.push(l[oe*3+0]),s.push(l[oe*3+1]),s.push(l[oe*3+2])}function I(oe){r.push(oe.x),r.push(oe.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return Pm(t,n,e)}static fromJSON(e,t){const n=[];for(let r=0,o=e.shapes.length;r<o;r++){const a=t[e.shapes[r]];n.push(a)}const s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new Do[s.type]().fromJSON(s)),new Nn(n,e.options)}}const Rm={generateTopUV:function(i,e,t,n,s){const r=e[t*3],o=e[t*3+1],a=e[n*3],l=e[n*3+1],c=e[s*3],h=e[s*3+1];return[new $(r,o),new $(a,l),new $(c,h)]},generateSideWallUV:function(i,e,t,n,s,r){const o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[n*3],h=e[n*3+1],u=e[n*3+2],f=e[s*3],d=e[s*3+1],m=e[s*3+2],x=e[r*3],g=e[r*3+1],p=e[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new $(o,1-l),new $(c,1-u),new $(f,1-m),new $(x,1-p)]:[new $(a,1-l),new $(h,1-u),new $(d,1-m),new $(g,1-p)]}};function Pm(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){const r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class jo extends it{constructor(e=[new $(0,-.5),new $(.5,0),new $(0,.5)],t=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:s},t=Math.floor(t),s=et(s,0,Math.PI*2);const r=[],o=[],a=[],l=[],c=[],h=1/t,u=new P,f=new $,d=new P,m=new P,x=new P;let g=0,p=0;for(let M=0;M<=e.length-1;M++)switch(M){case 0:g=e[M+1].x-e[M].x,p=e[M+1].y-e[M].y,d.x=p*1,d.y=-g,d.z=p*0,x.copy(d),d.normalize(),l.push(d.x,d.y,d.z);break;case e.length-1:l.push(x.x,x.y,x.z);break;default:g=e[M+1].x-e[M].x,p=e[M+1].y-e[M].y,d.x=p*1,d.y=-g,d.z=p*0,m.copy(d),d.x+=x.x,d.y+=x.y,d.z+=x.z,d.normalize(),l.push(d.x,d.y,d.z),x.copy(m)}for(let M=0;M<=t;M++){const _=n+M*h*s,v=Math.sin(_),E=Math.cos(_);for(let T=0;T<=e.length-1;T++){u.x=e[T].x*v,u.y=e[T].y,u.z=e[T].x*E,o.push(u.x,u.y,u.z),f.x=M/t,f.y=T/(e.length-1),a.push(f.x,f.y);const w=l[3*T+0]*v,R=l[3*T+1],S=l[3*T+0]*E;c.push(w,R,S)}}for(let M=0;M<t;M++)for(let _=0;_<e.length-1;_++){const v=_+M*e.length,E=v,T=v+e.length,w=v+e.length+1,R=v+1;r.push(E,T,R),r.push(w,R,T)}this.setIndex(r),this.setAttribute("position",new ke(o,3)),this.setAttribute("uv",new ke(a,2)),this.setAttribute("normal",new ke(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new jo(e.points,e.segments,e.phiStart,e.phiLength)}}class zi extends Uc{constructor(e=1,t=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new zi(e.radius,e.detail)}}class Rt extends it{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,u=e/a,f=t/l,d=[],m=[],x=[],g=[];for(let p=0;p<h;p++){const M=p*f-o;for(let _=0;_<c;_++){const v=_*u-r;m.push(v,-M,0),x.push(0,0,1),g.push(_/a),g.push(1-p/l)}}for(let p=0;p<l;p++)for(let M=0;M<a;M++){const _=M+c*p,v=M+c*(p+1),E=M+1+c*(p+1),T=M+1+c*p;d.push(_,v,T),d.push(v,E,T)}this.setIndex(d),this.setAttribute("position",new ke(m,3)),this.setAttribute("normal",new ke(x,3)),this.setAttribute("uv",new ke(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Rt(e.width,e.height,e.widthSegments,e.heightSegments)}}class Ko extends it{constructor(e=.5,t=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);const a=[],l=[],c=[],h=[];let u=e;const f=(t-e)/s,d=new P,m=new $;for(let x=0;x<=s;x++){for(let g=0;g<=n;g++){const p=r+g/n*o;d.x=u*Math.cos(p),d.y=u*Math.sin(p),l.push(d.x,d.y,d.z),c.push(0,0,1),m.x=(d.x/t+1)/2,m.y=(d.y/t+1)/2,h.push(m.x,m.y)}u+=f}for(let x=0;x<s;x++){const g=x*(n+1);for(let p=0;p<n;p++){const M=p+g,_=M,v=M+n+1,E=M+n+2,T=M+1;a.push(_,v,T),a.push(v,E,T)}}this.setIndex(a),this.setAttribute("position",new ke(l,3)),this.setAttribute("normal",new ke(c,3)),this.setAttribute("uv",new ke(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ko(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class oi extends it{constructor(e=new nn([new $(0,.5),new $(-.5,-.5),new $(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const n=[],s=[],r=[],o=[];let a=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let h=0;h<e.length;h++)c(e[h]),this.addGroup(a,l,h),a+=l,l=0;this.setIndex(n),this.setAttribute("position",new ke(s,3)),this.setAttribute("normal",new ke(r,3)),this.setAttribute("uv",new ke(o,2));function c(h){const u=s.length/3,f=h.extractPoints(t);let d=f.shape;const m=f.holes;Kn.isClockWise(d)===!1&&(d=d.reverse());for(let g=0,p=m.length;g<p;g++){const M=m[g];Kn.isClockWise(M)===!0&&(m[g]=M.reverse())}const x=Kn.triangulateShape(d,m);for(let g=0,p=m.length;g<p;g++){const M=m[g];d=d.concat(M)}for(let g=0,p=d.length;g<p;g++){const M=d[g];s.push(M.x,M.y,0),r.push(0,0,1),o.push(M.x,M.y)}for(let g=0,p=x.length;g<p;g++){const M=x[g],_=M[0]+u,v=M[1]+u,E=M[2]+u;n.push(_,v,E),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes;return Lm(t,e)}static fromJSON(e,t){const n=[];for(let s=0,r=e.shapes.length;s<r;s++){const o=t[e.shapes[s]];n.push(o)}return new oi(n,e.curveSegments)}}function Lm(i,e){if(e.shapes=[],Array.isArray(i))for(let t=0,n=i.length;t<n;t++){const s=i[t];e.shapes.push(s.uuid)}else e.shapes.push(i.uuid);return e}class en extends it{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const h=[],u=new P,f=new P,d=[],m=[],x=[],g=[];for(let p=0;p<=n;p++){const M=[],_=p/n;let v=0;p===0&&o===0?v=.5/t:p===n&&l===Math.PI&&(v=-.5/t);for(let E=0;E<=t;E++){const T=E/t;u.x=-e*Math.cos(s+T*r)*Math.sin(o+_*a),u.y=e*Math.cos(o+_*a),u.z=e*Math.sin(s+T*r)*Math.sin(o+_*a),m.push(u.x,u.y,u.z),f.copy(u).normalize(),x.push(f.x,f.y,f.z),g.push(T+v,1-_),M.push(c++)}h.push(M)}for(let p=0;p<n;p++)for(let M=0;M<t;M++){const _=h[p][M+1],v=h[p][M],E=h[p+1][M],T=h[p+1][M+1];(p!==0||o>0)&&d.push(_,v,T),(p!==n-1||l<Math.PI)&&d.push(v,E,T)}this.setIndex(d),this.setAttribute("position",new ke(m,3)),this.setAttribute("normal",new ke(x,3)),this.setAttribute("uv",new ke(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new en(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class _n extends it{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);const o=[],a=[],l=[],c=[],h=new P,u=new P,f=new P;for(let d=0;d<=n;d++)for(let m=0;m<=s;m++){const x=m/s*r,g=d/n*Math.PI*2;u.x=(e+t*Math.cos(g))*Math.cos(x),u.y=(e+t*Math.cos(g))*Math.sin(x),u.z=t*Math.sin(g),a.push(u.x,u.y,u.z),h.x=e*Math.cos(x),h.y=e*Math.sin(x),f.subVectors(u,h).normalize(),l.push(f.x,f.y,f.z),c.push(m/s),c.push(d/n)}for(let d=1;d<=n;d++)for(let m=1;m<=s;m++){const x=(s+1)*d+m-1,g=(s+1)*(d-1)+m-1,p=(s+1)*(d-1)+m,M=(s+1)*d+m;o.push(x,g,M),o.push(g,p,M)}this.setIndex(o),this.setAttribute("position",new ke(a,3)),this.setAttribute("normal",new ke(l,3)),this.setAttribute("uv",new ke(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new _n(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class Zo extends it{constructor(e=new Rf(new P(-1,-1,0),new P(-1,1,0),new P(1,1,0)),t=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:s,closed:r};const o=e.computeFrenetFrames(t,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new P,l=new P,c=new $;let h=new P;const u=[],f=[],d=[],m=[];x(),this.setIndex(m),this.setAttribute("position",new ke(u,3)),this.setAttribute("normal",new ke(f,3)),this.setAttribute("uv",new ke(d,2));function x(){for(let _=0;_<t;_++)g(_);g(r===!1?t:0),M(),p()}function g(_){h=e.getPointAt(_/t,h);const v=o.normals[_],E=o.binormals[_];for(let T=0;T<=s;T++){const w=T/s*Math.PI*2,R=Math.sin(w),S=-Math.cos(w);l.x=S*v.x+R*E.x,l.y=S*v.y+R*E.y,l.z=S*v.z+R*E.z,l.normalize(),f.push(l.x,l.y,l.z),a.x=h.x+n*l.x,a.y=h.y+n*l.y,a.z=h.z+n*l.z,u.push(a.x,a.y,a.z)}}function p(){for(let _=1;_<=t;_++)for(let v=1;v<=s;v++){const E=(s+1)*(_-1)+(v-1),T=(s+1)*_+(v-1),w=(s+1)*_+v,R=(s+1)*(_-1)+v;m.push(E,T,R),m.push(T,w,R)}}function M(){for(let _=0;_<=t;_++)for(let v=0;v<=s;v++)c.x=_/t,c.y=v/s,d.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new Zo(new Do[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class Dm extends vt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class wt extends Ji{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Oe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Oe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=uf,this.normalScale=new $(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new tn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Im extends Ji{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Zd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Um extends Ji{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const za={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class Nm{constructor(e,t,n){const s=this;let r=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.abortController=new AbortController,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){const u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=c.length;u<f;u+=2){const d=c[u],m=c[u+1];if(d.global&&(d.lastIndex=0),d.test(h))return m}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}}const Fm=new Nm;class zc{constructor(e){this.manager=e!==void 0?e:Fm,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}zc.DEFAULT_MATERIAL_NAME="__DEFAULT";const ps=new WeakMap;class Om extends zc{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=za.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0);else{let u=ps.get(o);u===void 0&&(u=[],ps.set(o,u)),u.push({onLoad:t,onError:s})}return o}const a=dr("img");function l(){h(),t&&t(this);const u=ps.get(this)||[];for(let f=0;f<u.length;f++){const d=u[f];d.onLoad&&d.onLoad(this)}ps.delete(this),r.manager.itemEnd(e)}function c(u){h(),s&&s(u),za.remove(`image:${e}`);const f=ps.get(this)||[];for(let d=0;d<f.length;d++){const m=f[d];m.onError&&m.onError(u)}ps.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),za.add(`image:${e}`,a),r.manager.itemStart(e),a.src=e,a}}class zm extends zc{constructor(e){super(e)}load(e,t,n,s){const r=new Ct,o=new Om(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}}class Jo extends mt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Oe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class Bm extends Jo{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(mt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Oe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Ba=new Ze,Bh=new P,kh=new P;class Bc{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new $(512,512),this.mapType=Fn,this.map=null,this.mapPass=null,this.matrix=new Ze,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Lc,this._frameExtents=new $(1,1),this._viewportCount=1,this._viewports=[new rt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Bh.setFromMatrixPosition(e.matrixWorld),t.position.copy(Bh),kh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(kh),t.updateMatrixWorld(),Ba.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ba,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ba)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class km extends Bc{constructor(){super(new Wt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,n=Rs*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class Hm extends Jo{constructor(e,t,n=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(mt.DEFAULT_UP),this.updateMatrix(),this.target=new mt,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new km}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Hh=new Ze,Ks=new P,ka=new P;class Gm extends Bc{constructor(){super(new Wt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new $(4,2),this._viewportCount=6,this._viewports=[new rt(2,1,1,1),new rt(0,1,1,1),new rt(3,1,1,1),new rt(1,1,1,1),new rt(3,0,1,1),new rt(1,0,1,1)],this._cubeDirections=[new P(1,0,0),new P(-1,0,0),new P(0,0,1),new P(0,0,-1),new P(0,1,0),new P(0,-1,0)],this._cubeUps=[new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,0,1),new P(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,s=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Ks.setFromMatrixPosition(e.matrixWorld),n.position.copy(Ks),ka.copy(n.position),ka.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(ka),n.updateMatrixWorld(),s.makeTranslation(-Ks.x,-Ks.y,-Ks.z),Hh.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Hh,n.coordinateSystem,n.reversedDepth)}}class Nf extends Jo{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Gm}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class kc extends Mf{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-e,o=n+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Vm extends Bc{constructor(){super(new kc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Ff extends Jo{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(mt.DEFAULT_UP),this.updateMatrix(),this.target=new mt,this.shadow=new Vm}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Wm extends it{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}class Xm extends Wt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class qm{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Gh(i,e,t,n){const s=Ym(n);switch(t){case lf:return i*e;case bc:return i*e/s.components*s.byteLength;case wc:return i*e/s.components*s.byteLength;case hf:return i*e*2/s.components*s.byteLength;case Ec:return i*e*2/s.components*s.byteLength;case cf:return i*e*3/s.components*s.byteLength;case cn:return i*e*4/s.components*s.byteLength;case Tc:return i*e*4/s.components*s.byteLength;case xo:case vo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case _o:case Mo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case El:case Al:return Math.max(i,16)*Math.max(e,8)/4;case wl:case Tl:return Math.max(i,8)*Math.max(e,8)/2;case Cl:case Rl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Pl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ll:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Dl:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Il:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Ul:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Nl:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Fl:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Ol:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case zl:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Bl:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case kl:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Hl:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Gl:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Vl:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Wl:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Xl:case ql:case Yl:return Math.ceil(i/4)*Math.ceil(e/4)*16;case jl:case Kl:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Zl:case Jl:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Ym(i){switch(i){case Fn:case sf:return{byteLength:1,components:1};case cr:case rf:case Tn:return{byteLength:2,components:1};case yc:case Sc:return{byteLength:2,components:4};case Xi:case Mc:case Dn:return{byteLength:4,components:1};case of:case af:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:vc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=vc);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Of(){let i=null,e=!1,t=null,n=null;function s(r,o){t(r,o),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function jm(i){const e=new WeakMap;function t(a,l){const c=a.array,h=a.usage,u=c.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,c,h),a.onUploadCallback();let d;if(c instanceof Float32Array)d=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=i.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=i.SHORT;else if(c instanceof Uint32Array)d=i.UNSIGNED_INT;else if(c instanceof Int32Array)d=i.INT;else if(c instanceof Int8Array)d=i.BYTE;else if(c instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){const h=l.array,u=l.updateRanges;if(i.bindBuffer(c,a),u.length===0)i.bufferSubData(c,0,h);else{u.sort((d,m)=>d.start-m.start);let f=0;for(let d=1;d<u.length;d++){const m=u[f],x=u[d];x.start<=m.start+m.count+1?m.count=Math.max(m.count,x.start+x.count-m.start):(++f,u[f]=x)}u.length=f+1;for(let d=0,m=u.length;d<m;d++){const x=u[d];i.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(i.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var Km=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Zm=`#ifdef USE_ALPHAHASH
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
#endif`,Jm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Qm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,$m=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,e0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,t0=`#ifdef USE_AOMAP
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
#endif`,n0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,i0=`#ifdef USE_BATCHING
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
#endif`,s0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,r0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,o0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,a0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,l0=`#ifdef USE_IRIDESCENCE
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
#endif`,c0=`#ifdef USE_BUMPMAP
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
#endif`,h0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,u0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,f0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,d0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,p0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,m0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,g0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,x0=`#if defined( USE_COLOR_ALPHA )
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
#endif`,v0=`#define PI 3.141592653589793
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
} // validated`,_0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,M0=`vec3 transformedNormal = objectNormal;
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
#endif`,y0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,S0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,b0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,w0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,E0="gl_FragColor = linearToOutputTexel( gl_FragColor );",T0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,A0=`#ifdef USE_ENVMAP
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
#endif`,C0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,R0=`#ifdef USE_ENVMAP
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
#endif`,P0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,L0=`#ifdef USE_ENVMAP
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
#endif`,D0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,I0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,U0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,N0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,F0=`#ifdef USE_GRADIENTMAP
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
}`,O0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,z0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,B0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,k0=`uniform bool receiveShadow;
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
#endif`,H0=`#ifdef USE_ENVMAP
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
#endif`,G0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,V0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,W0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,X0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,q0=`PhysicalMaterial material;
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
#endif`,Y0=`struct PhysicalMaterial {
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
}`,j0=`
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
#endif`,K0=`#if defined( RE_IndirectDiffuse )
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
#endif`,Z0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,J0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Q0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,$0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,eg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,tg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ng=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ig=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,sg=`#if defined( USE_POINTS_UV )
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
#endif`,rg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,og=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ag=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,lg=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,cg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,hg=`#ifdef USE_MORPHTARGETS
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
#endif`,ug=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,fg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,dg=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,pg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,mg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,gg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,xg=`#ifdef USE_NORMALMAP
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
#endif`,vg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,_g=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Mg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,yg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Sg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,bg=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,wg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Eg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Tg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Ag=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Cg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Rg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Pg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Lg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Dg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Ig=`float getShadowMask() {
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
}`,Ug=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ng=`#ifdef USE_SKINNING
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
#endif`,Fg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Og=`#ifdef USE_SKINNING
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
#endif`,zg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Bg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,kg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Hg=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Gg=`#ifdef USE_TRANSMISSION
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
#endif`,Vg=`#ifdef USE_TRANSMISSION
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
#endif`,Wg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Xg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,qg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Yg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const jg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Kg=`uniform sampler2D t2D;
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
}`,Zg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Jg=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Qg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$g=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,e1=`#include <common>
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
}`,t1=`#if DEPTH_PACKING == 3200
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
}`,n1=`#define DISTANCE
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
}`,i1=`#define DISTANCE
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
}`,s1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,r1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,o1=`uniform float scale;
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
}`,a1=`uniform vec3 diffuse;
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
}`,l1=`#include <common>
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
}`,c1=`uniform vec3 diffuse;
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
}`,h1=`#define LAMBERT
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
}`,u1=`#define LAMBERT
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
}`,f1=`#define MATCAP
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
}`,d1=`#define MATCAP
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
}`,p1=`#define NORMAL
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
}`,m1=`#define NORMAL
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
}`,g1=`#define PHONG
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
}`,x1=`#define PHONG
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
}`,v1=`#define STANDARD
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
}`,_1=`#define STANDARD
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
}`,M1=`#define TOON
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
}`,y1=`#define TOON
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
}`,S1=`uniform float size;
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
}`,b1=`uniform vec3 diffuse;
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
}`,w1=`#include <common>
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
}`,E1=`uniform vec3 color;
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
}`,T1=`uniform float rotation;
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
}`,A1=`uniform vec3 diffuse;
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
}`,Qe={alphahash_fragment:Km,alphahash_pars_fragment:Zm,alphamap_fragment:Jm,alphamap_pars_fragment:Qm,alphatest_fragment:$m,alphatest_pars_fragment:e0,aomap_fragment:t0,aomap_pars_fragment:n0,batching_pars_vertex:i0,batching_vertex:s0,begin_vertex:r0,beginnormal_vertex:o0,bsdfs:a0,iridescence_fragment:l0,bumpmap_pars_fragment:c0,clipping_planes_fragment:h0,clipping_planes_pars_fragment:u0,clipping_planes_pars_vertex:f0,clipping_planes_vertex:d0,color_fragment:p0,color_pars_fragment:m0,color_pars_vertex:g0,color_vertex:x0,common:v0,cube_uv_reflection_fragment:_0,defaultnormal_vertex:M0,displacementmap_pars_vertex:y0,displacementmap_vertex:S0,emissivemap_fragment:b0,emissivemap_pars_fragment:w0,colorspace_fragment:E0,colorspace_pars_fragment:T0,envmap_fragment:A0,envmap_common_pars_fragment:C0,envmap_pars_fragment:R0,envmap_pars_vertex:P0,envmap_physical_pars_fragment:H0,envmap_vertex:L0,fog_vertex:D0,fog_pars_vertex:I0,fog_fragment:U0,fog_pars_fragment:N0,gradientmap_pars_fragment:F0,lightmap_pars_fragment:O0,lights_lambert_fragment:z0,lights_lambert_pars_fragment:B0,lights_pars_begin:k0,lights_toon_fragment:G0,lights_toon_pars_fragment:V0,lights_phong_fragment:W0,lights_phong_pars_fragment:X0,lights_physical_fragment:q0,lights_physical_pars_fragment:Y0,lights_fragment_begin:j0,lights_fragment_maps:K0,lights_fragment_end:Z0,logdepthbuf_fragment:J0,logdepthbuf_pars_fragment:Q0,logdepthbuf_pars_vertex:$0,logdepthbuf_vertex:eg,map_fragment:tg,map_pars_fragment:ng,map_particle_fragment:ig,map_particle_pars_fragment:sg,metalnessmap_fragment:rg,metalnessmap_pars_fragment:og,morphinstance_vertex:ag,morphcolor_vertex:lg,morphnormal_vertex:cg,morphtarget_pars_vertex:hg,morphtarget_vertex:ug,normal_fragment_begin:fg,normal_fragment_maps:dg,normal_pars_fragment:pg,normal_pars_vertex:mg,normal_vertex:gg,normalmap_pars_fragment:xg,clearcoat_normal_fragment_begin:vg,clearcoat_normal_fragment_maps:_g,clearcoat_pars_fragment:Mg,iridescence_pars_fragment:yg,opaque_fragment:Sg,packing:bg,premultiplied_alpha_fragment:wg,project_vertex:Eg,dithering_fragment:Tg,dithering_pars_fragment:Ag,roughnessmap_fragment:Cg,roughnessmap_pars_fragment:Rg,shadowmap_pars_fragment:Pg,shadowmap_pars_vertex:Lg,shadowmap_vertex:Dg,shadowmask_pars_fragment:Ig,skinbase_vertex:Ug,skinning_pars_vertex:Ng,skinning_vertex:Fg,skinnormal_vertex:Og,specularmap_fragment:zg,specularmap_pars_fragment:Bg,tonemapping_fragment:kg,tonemapping_pars_fragment:Hg,transmission_fragment:Gg,transmission_pars_fragment:Vg,uv_pars_fragment:Wg,uv_pars_vertex:Xg,uv_vertex:qg,worldpos_vertex:Yg,background_vert:jg,background_frag:Kg,backgroundCube_vert:Zg,backgroundCube_frag:Jg,cube_vert:Qg,cube_frag:$g,depth_vert:e1,depth_frag:t1,distanceRGBA_vert:n1,distanceRGBA_frag:i1,equirect_vert:s1,equirect_frag:r1,linedashed_vert:o1,linedashed_frag:a1,meshbasic_vert:l1,meshbasic_frag:c1,meshlambert_vert:h1,meshlambert_frag:u1,meshmatcap_vert:f1,meshmatcap_frag:d1,meshnormal_vert:p1,meshnormal_frag:m1,meshphong_vert:g1,meshphong_frag:x1,meshphysical_vert:v1,meshphysical_frag:_1,meshtoon_vert:M1,meshtoon_frag:y1,points_vert:S1,points_frag:b1,shadow_vert:w1,shadow_frag:E1,sprite_vert:T1,sprite_frag:A1},Ee={common:{diffuse:{value:new Oe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ke},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ke}},envmap:{envMap:{value:null},envMapRotation:{value:new Ke},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ke}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ke}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ke},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ke},normalScale:{value:new $(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ke},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ke}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ke}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ke}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Oe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Oe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0},uvTransform:{value:new Ke}},sprite:{diffuse:{value:new Oe(16777215)},opacity:{value:1},center:{value:new $(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ke},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0}}},Pn={basic:{uniforms:Vt([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.fog]),vertexShader:Qe.meshbasic_vert,fragmentShader:Qe.meshbasic_frag},lambert:{uniforms:Vt([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,Ee.lights,{emissive:{value:new Oe(0)}}]),vertexShader:Qe.meshlambert_vert,fragmentShader:Qe.meshlambert_frag},phong:{uniforms:Vt([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,Ee.lights,{emissive:{value:new Oe(0)},specular:{value:new Oe(1118481)},shininess:{value:30}}]),vertexShader:Qe.meshphong_vert,fragmentShader:Qe.meshphong_frag},standard:{uniforms:Vt([Ee.common,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.roughnessmap,Ee.metalnessmap,Ee.fog,Ee.lights,{emissive:{value:new Oe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Qe.meshphysical_vert,fragmentShader:Qe.meshphysical_frag},toon:{uniforms:Vt([Ee.common,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.gradientmap,Ee.fog,Ee.lights,{emissive:{value:new Oe(0)}}]),vertexShader:Qe.meshtoon_vert,fragmentShader:Qe.meshtoon_frag},matcap:{uniforms:Vt([Ee.common,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,{matcap:{value:null}}]),vertexShader:Qe.meshmatcap_vert,fragmentShader:Qe.meshmatcap_frag},points:{uniforms:Vt([Ee.points,Ee.fog]),vertexShader:Qe.points_vert,fragmentShader:Qe.points_frag},dashed:{uniforms:Vt([Ee.common,Ee.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Qe.linedashed_vert,fragmentShader:Qe.linedashed_frag},depth:{uniforms:Vt([Ee.common,Ee.displacementmap]),vertexShader:Qe.depth_vert,fragmentShader:Qe.depth_frag},normal:{uniforms:Vt([Ee.common,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,{opacity:{value:1}}]),vertexShader:Qe.meshnormal_vert,fragmentShader:Qe.meshnormal_frag},sprite:{uniforms:Vt([Ee.sprite,Ee.fog]),vertexShader:Qe.sprite_vert,fragmentShader:Qe.sprite_frag},background:{uniforms:{uvTransform:{value:new Ke},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Qe.background_vert,fragmentShader:Qe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ke}},vertexShader:Qe.backgroundCube_vert,fragmentShader:Qe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Qe.cube_vert,fragmentShader:Qe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Qe.equirect_vert,fragmentShader:Qe.equirect_frag},distanceRGBA:{uniforms:Vt([Ee.common,Ee.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Qe.distanceRGBA_vert,fragmentShader:Qe.distanceRGBA_frag},shadow:{uniforms:Vt([Ee.lights,Ee.fog,{color:{value:new Oe(0)},opacity:{value:1}}]),vertexShader:Qe.shadow_vert,fragmentShader:Qe.shadow_frag}};Pn.physical={uniforms:Vt([Pn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ke},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ke},clearcoatNormalScale:{value:new $(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ke},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ke},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ke},sheen:{value:0},sheenColor:{value:new Oe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ke},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ke},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ke},transmissionSamplerSize:{value:new $},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ke},attenuationDistance:{value:0},attenuationColor:{value:new Oe(0)},specularColor:{value:new Oe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ke},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ke},anisotropyVector:{value:new $},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ke}}]),vertexShader:Qe.meshphysical_vert,fragmentShader:Qe.meshphysical_frag};const no={r:0,b:0,g:0},Ci=new tn,C1=new Ze;function R1(i,e,t,n,s,r,o){const a=new Oe(0);let l=r===!0?0:1,c,h,u=null,f=0,d=null;function m(_){let v=_.isScene===!0?_.background:null;return v&&v.isTexture&&(v=(_.backgroundBlurriness>0?t:e).get(v)),v}function x(_){let v=!1;const E=m(_);E===null?p(a,l):E&&E.isColor&&(p(E,1),v=!0);const T=i.xr.getEnvironmentBlendMode();T==="additive"?n.buffers.color.setClear(0,0,0,1,o):T==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||v)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function g(_,v){const E=m(v);E&&(E.isCubeTexture||E.mapping===Xo)?(h===void 0&&(h=new lt(new un(1,1,1),new vt({name:"BackgroundCubeMaterial",uniforms:Ps(Pn.backgroundCube.uniforms),vertexShader:Pn.backgroundCube.vertexShader,fragmentShader:Pn.backgroundCube.fragmentShader,side:Xt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(T,w,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Ci.copy(v.backgroundRotation),Ci.x*=-1,Ci.y*=-1,Ci.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(Ci.y*=-1,Ci.z*=-1),h.material.uniforms.envMap.value=E,h.material.uniforms.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(C1.makeRotationFromEuler(Ci)),h.material.toneMapped=st.getTransfer(E.colorSpace)!==ht,(u!==E||f!==E.version||d!==i.toneMapping)&&(h.material.needsUpdate=!0,u=E,f=E.version,d=i.toneMapping),h.layers.enableAll(),_.unshift(h,h.geometry,h.material,0,0,null)):E&&E.isTexture&&(c===void 0&&(c=new lt(new Rt(2,2),new vt({name:"BackgroundMaterial",uniforms:Ps(Pn.background.uniforms),vertexShader:Pn.background.vertexShader,fragmentShader:Pn.background.fragmentShader,side:ni,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=E,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=st.getTransfer(E.colorSpace)!==ht,E.matrixAutoUpdate===!0&&E.updateMatrix(),c.material.uniforms.uvTransform.value.copy(E.matrix),(u!==E||f!==E.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,u=E,f=E.version,d=i.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null))}function p(_,v){_.getRGB(no,_f(i)),n.buffers.color.setClear(no.r,no.g,no.b,v,o)}function M(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(_,v=1){a.set(_),l=v,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(_){l=_,p(a,l)},render:x,addToRenderList:g,dispose:M}}function P1(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null);let r=s,o=!1;function a(b,L,D,N,B){let O=!1;const V=u(N,D,L);r!==V&&(r=V,c(r.object)),O=d(b,N,D,B),O&&m(b,N,D,B),B!==null&&e.update(B,i.ELEMENT_ARRAY_BUFFER),(O||o)&&(o=!1,v(b,L,D,N),B!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(B).buffer))}function l(){return i.createVertexArray()}function c(b){return i.bindVertexArray(b)}function h(b){return i.deleteVertexArray(b)}function u(b,L,D){const N=D.wireframe===!0;let B=n[b.id];B===void 0&&(B={},n[b.id]=B);let O=B[L.id];O===void 0&&(O={},B[L.id]=O);let V=O[N];return V===void 0&&(V=f(l()),O[N]=V),V}function f(b){const L=[],D=[],N=[];for(let B=0;B<t;B++)L[B]=0,D[B]=0,N[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:D,attributeDivisors:N,object:b,attributes:{},index:null}}function d(b,L,D,N){const B=r.attributes,O=L.attributes;let V=0;const Z=D.getAttributes();for(const W in Z)if(Z[W].location>=0){const fe=B[W];let ne=O[W];if(ne===void 0&&(W==="instanceMatrix"&&b.instanceMatrix&&(ne=b.instanceMatrix),W==="instanceColor"&&b.instanceColor&&(ne=b.instanceColor)),fe===void 0||fe.attribute!==ne||ne&&fe.data!==ne.data)return!0;V++}return r.attributesNum!==V||r.index!==N}function m(b,L,D,N){const B={},O=L.attributes;let V=0;const Z=D.getAttributes();for(const W in Z)if(Z[W].location>=0){let fe=O[W];fe===void 0&&(W==="instanceMatrix"&&b.instanceMatrix&&(fe=b.instanceMatrix),W==="instanceColor"&&b.instanceColor&&(fe=b.instanceColor));const ne={};ne.attribute=fe,fe&&fe.data&&(ne.data=fe.data),B[W]=ne,V++}r.attributes=B,r.attributesNum=V,r.index=N}function x(){const b=r.newAttributes;for(let L=0,D=b.length;L<D;L++)b[L]=0}function g(b){p(b,0)}function p(b,L){const D=r.newAttributes,N=r.enabledAttributes,B=r.attributeDivisors;D[b]=1,N[b]===0&&(i.enableVertexAttribArray(b),N[b]=1),B[b]!==L&&(i.vertexAttribDivisor(b,L),B[b]=L)}function M(){const b=r.newAttributes,L=r.enabledAttributes;for(let D=0,N=L.length;D<N;D++)L[D]!==b[D]&&(i.disableVertexAttribArray(D),L[D]=0)}function _(b,L,D,N,B,O,V){V===!0?i.vertexAttribIPointer(b,L,D,B,O):i.vertexAttribPointer(b,L,D,N,B,O)}function v(b,L,D,N){x();const B=N.attributes,O=D.getAttributes(),V=L.defaultAttributeValues;for(const Z in O){const W=O[Z];if(W.location>=0){let re=B[Z];if(re===void 0&&(Z==="instanceMatrix"&&b.instanceMatrix&&(re=b.instanceMatrix),Z==="instanceColor"&&b.instanceColor&&(re=b.instanceColor)),re!==void 0){const fe=re.normalized,ne=re.itemSize,ze=e.get(re);if(ze===void 0)continue;const He=ze.buffer,Je=ze.type,qe=ze.bytesPerElement,j=Je===i.INT||Je===i.UNSIGNED_INT||re.gpuType===Mc;if(re.isInterleavedBufferAttribute){const se=re.data,we=se.stride,Ie=re.offset;if(se.isInstancedInterleavedBuffer){for(let Le=0;Le<W.locationSize;Le++)p(W.location+Le,se.meshPerAttribute);b.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let Le=0;Le<W.locationSize;Le++)g(W.location+Le);i.bindBuffer(i.ARRAY_BUFFER,He);for(let Le=0;Le<W.locationSize;Le++)_(W.location+Le,ne/W.locationSize,Je,fe,we*qe,(Ie+ne/W.locationSize*Le)*qe,j)}else{if(re.isInstancedBufferAttribute){for(let se=0;se<W.locationSize;se++)p(W.location+se,re.meshPerAttribute);b.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let se=0;se<W.locationSize;se++)g(W.location+se);i.bindBuffer(i.ARRAY_BUFFER,He);for(let se=0;se<W.locationSize;se++)_(W.location+se,ne/W.locationSize,Je,fe,ne*qe,ne/W.locationSize*se*qe,j)}}else if(V!==void 0){const fe=V[Z];if(fe!==void 0)switch(fe.length){case 2:i.vertexAttrib2fv(W.location,fe);break;case 3:i.vertexAttrib3fv(W.location,fe);break;case 4:i.vertexAttrib4fv(W.location,fe);break;default:i.vertexAttrib1fv(W.location,fe)}}}}M()}function E(){R();for(const b in n){const L=n[b];for(const D in L){const N=L[D];for(const B in N)h(N[B].object),delete N[B];delete L[D]}delete n[b]}}function T(b){if(n[b.id]===void 0)return;const L=n[b.id];for(const D in L){const N=L[D];for(const B in N)h(N[B].object),delete N[B];delete L[D]}delete n[b.id]}function w(b){for(const L in n){const D=n[L];if(D[b.id]===void 0)continue;const N=D[b.id];for(const B in N)h(N[B].object),delete N[B];delete D[b.id]}}function R(){S(),o=!0,r!==s&&(r=s,c(r.object))}function S(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:R,resetDefaultState:S,dispose:E,releaseStatesOfGeometry:T,releaseStatesOfProgram:w,initAttributes:x,enableAttribute:g,disableUnusedAttributes:M}}function L1(i,e,t){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),t.update(h,n,1)}function o(c,h,u){u!==0&&(i.drawArraysInstanced(n,c,h,u),t.update(h,n,u))}function a(c,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let d=0;for(let m=0;m<u;m++)d+=h[m];t.update(d,n,1)}function l(c,h,u,f){if(u===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let m=0;m<c.length;m++)o(c[m],h[m],f[m]);else{d.multiDrawArraysInstancedWEBGL(n,c,0,h,0,f,0,u);let m=0;for(let x=0;x<u;x++)m+=h[x]*f[x];t.update(m,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function D1(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const w=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(w){return!(w!==cn&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(w){const R=w===Tn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(w!==Fn&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==Dn&&!R)}function l(w){if(w==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=t.logarithmicDepthBuffer===!0,f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),M=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),_=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),E=m>0,T=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:f,maxTextures:d,maxVertexTextures:m,maxTextureSize:x,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:M,maxVaryings:_,maxFragmentUniforms:v,vertexTextures:E,maxSamples:T}}function I1(i){const e=this;let t=null,n=0,s=!1,r=!1;const o=new pi,a=new Ke,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){const d=u.length!==0||f||n!==0||s;return s=f,n=u.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){t=h(u,f,0)},this.setState=function(u,f,d){const m=u.clippingPlanes,x=u.clipIntersection,g=u.clipShadows,p=i.get(u);if(!s||m===null||m.length===0||r&&!g)r?h(null):c();else{const M=r?0:n,_=M*4;let v=p.clippingState||null;l.value=v,v=h(m,f,_,d);for(let E=0;E!==_;++E)v[E]=t[E];p.clippingState=v,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,f,d,m){const x=u!==null?u.length:0;let g=null;if(x!==0){if(g=l.value,m!==!0||g===null){const p=d+x*4,M=f.matrixWorldInverse;a.getNormalMatrix(M),(g===null||g.length<p)&&(g=new Float32Array(p));for(let _=0,v=d;_!==x;++_,v+=4)o.copy(u[_]).applyMatrix4(M,a),o.normal.toArray(g,v),g[v+3]=o.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,g}}function U1(i){let e=new WeakMap;function t(o,a){return a===yl?o.mapping=Ts:a===Sl&&(o.mapping=As),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===yl||a===Sl)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Xp(l.height);return c.fromEquirectangularTexture(i,o),e.set(o,c),o.addEventListener("dispose",s),t(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}const ys=4,Vh=[.125,.215,.35,.446,.526,.582],Fi=20,Ha=new kc,Wh=new Oe;let Ga=null,Va=0,Wa=0,Xa=!1;const Pi=(1+Math.sqrt(5))/2,ms=1/Pi,Xh=[new P(-Pi,ms,0),new P(Pi,ms,0),new P(-ms,0,Pi),new P(ms,0,Pi),new P(0,Pi,-ms),new P(0,Pi,ms),new P(-1,1,-1),new P(1,1,-1),new P(-1,1,1),new P(1,1,1)],N1=new P;class qh{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100,r={}){const{size:o=256,position:a=N1}=r;Ga=this._renderer.getRenderTarget(),Va=this._renderer.getActiveCubeFace(),Wa=this._renderer.getActiveMipmapLevel(),Xa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,s,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Kh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=jh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ga,Va,Wa),this._renderer.xr.enabled=Xa,e.scissorTest=!1,io(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ts||e.mapping===As?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ga=this._renderer.getRenderTarget(),Va=this._renderer.getActiveCubeFace(),Wa=this._renderer.getActiveMipmapLevel(),Xa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:ln,minFilter:ln,generateMipmaps:!1,type:Tn,format:cn,colorSpace:Cs,depthBuffer:!1},s=Yh(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Yh(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=F1(r)),this._blurMaterial=O1(r,e,t)}return s}_compileMaterial(e){const t=new lt(this._lodPlanes[0],e);this._renderer.compile(t,Ha)}_sceneToCubeUV(e,t,n,s,r){const l=new Wt(90,1,t,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,d=u.toneMapping;u.getClearColor(Wh),u.toneMapping=vi,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(s),u.clearDepth(),u.setRenderTarget(null));const x=new gn({name:"PMREM.Background",side:Xt,depthWrite:!1,depthTest:!1}),g=new lt(new un,x);let p=!1;const M=e.background;M?M.isColor&&(x.color.copy(M),e.background=null,p=!0):(x.color.copy(Wh),p=!0);for(let _=0;_<6;_++){const v=_%3;v===0?(l.up.set(0,c[_],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[_],r.y,r.z)):v===1?(l.up.set(0,0,c[_]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[_],r.z)):(l.up.set(0,c[_],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[_]));const E=this._cubeSize;io(s,v*E,_>2?E:0,E,E),u.setRenderTarget(s),p&&u.render(g,l),u.render(e,l)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=d,u.autoClear=f,e.background=M}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===Ts||e.mapping===As;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Kh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=jh());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new lt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;io(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,Ha)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Xh[(s-r-1)%Xh.length];this._blur(e,r-1,r,o,a)}t.autoClear=n}_blur(e,t,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,s,"latitudinal",r),this._halfBlur(o,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new lt(this._lodPlanes[s],c),f=c.uniforms,d=this._sizeLods[n]-1,m=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*Fi-1),x=r/m,g=isFinite(r)?1+Math.floor(h*x):Fi;g>Fi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Fi}`);const p=[];let M=0;for(let w=0;w<Fi;++w){const R=w/x,S=Math.exp(-R*R/2);p.push(S),w===0?M+=S:w<g&&(M+=2*S)}for(let w=0;w<p.length;w++)p[w]=p[w]/M;f.envMap.value=e.texture,f.samples.value=g,f.weights.value=p,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:_}=this;f.dTheta.value=m,f.mipInt.value=_-n;const v=this._sizeLods[s],E=3*v*(s>_-ys?s-_+ys:0),T=4*(this._cubeSize-v);io(t,E,T,3*v,2*v),l.setRenderTarget(t),l.render(u,Ha)}}function F1(i){const e=[],t=[],n=[];let s=i;const r=i-ys+1+Vh.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);t.push(a);let l=1/a;o>i-ys?l=Vh[o-i+ys-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),h=-c,u=1+c,f=[h,h,u,h,u,u,h,h,u,u,h,u],d=6,m=6,x=3,g=2,p=1,M=new Float32Array(x*m*d),_=new Float32Array(g*m*d),v=new Float32Array(p*m*d);for(let T=0;T<d;T++){const w=T%3*2/3-1,R=T>2?0:-1,S=[w,R,0,w+2/3,R,0,w+2/3,R+1,0,w,R,0,w+2/3,R+1,0,w,R+1,0];M.set(S,x*m*T),_.set(f,g*m*T);const b=[T,T,T,T,T,T];v.set(b,p*m*T)}const E=new it;E.setAttribute("position",new _t(M,x)),E.setAttribute("uv",new _t(_,g)),E.setAttribute("faceIndex",new _t(v,p)),e.push(E),s>ys&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Yh(i,e,t){const n=new $t(i,e,t);return n.texture.mapping=Xo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function io(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function O1(i,e,t){const n=new Float32Array(Fi),s=new P(0,1,0);return new vt({name:"SphericalGaussianBlur",defines:{n:Fi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Hc(),fragmentShader:`

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
		`,blending:Jn,depthTest:!1,depthWrite:!1})}function jh(){return new vt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Hc(),fragmentShader:`

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
		`,blending:Jn,depthTest:!1,depthWrite:!1})}function Kh(){return new vt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Hc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Jn,depthTest:!1,depthWrite:!1})}function Hc(){return`

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
	`}function z1(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===yl||l===Sl,h=l===Ts||l===As;if(c||h){let u=e.get(a);const f=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return t===null&&(t=new qh(i)),u=c?t.fromEquirectangular(a,u):t.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),u.texture;if(u!==void 0)return u.texture;{const d=a.image;return c&&d&&d.height>0||h&&d&&s(d)?(t===null&&(t=new qh(i)),u=c?t.fromEquirectangular(a):t.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function B1(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const s=t(n);return s===null&&pr("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function k1(i,e,t,n){const s={},r=new WeakMap;function o(u){const f=u.target;f.index!==null&&e.remove(f.index);for(const m in f.attributes)e.remove(f.attributes[m]);f.removeEventListener("dispose",o),delete s[f.id];const d=r.get(f);d&&(e.remove(d),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(u,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,t.memory.geometries++),f}function l(u){const f=u.attributes;for(const d in f)e.update(f[d],i.ARRAY_BUFFER)}function c(u){const f=[],d=u.index,m=u.attributes.position;let x=0;if(d!==null){const M=d.array;x=d.version;for(let _=0,v=M.length;_<v;_+=3){const E=M[_+0],T=M[_+1],w=M[_+2];f.push(E,T,T,w,w,E)}}else if(m!==void 0){const M=m.array;x=m.version;for(let _=0,v=M.length/3-1;_<v;_+=3){const E=_+0,T=_+1,w=_+2;f.push(E,T,T,w,w,E)}}else return;const g=new(df(f)?vf:xf)(f,1);g.version=x;const p=r.get(u);p&&e.remove(p),r.set(u,g)}function h(u){const f=r.get(u);if(f){const d=u.index;d!==null&&f.version<d.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function H1(i,e,t){let n;function s(f){n=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function l(f,d){i.drawElements(n,d,r,f*o),t.update(d,n,1)}function c(f,d,m){m!==0&&(i.drawElementsInstanced(n,d,r,f*o,m),t.update(d,n,m))}function h(f,d,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,f,0,m);let g=0;for(let p=0;p<m;p++)g+=d[p];t.update(g,n,1)}function u(f,d,m,x){if(m===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let p=0;p<f.length;p++)c(f[p]/o,d[p],x[p]);else{g.multiDrawElementsInstancedWEBGL(n,d,0,r,f,0,x,0,m);let p=0;for(let M=0;M<m;M++)p+=d[M]*x[M];t.update(p,n,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function G1(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function V1(i,e,t){const n=new WeakMap,s=new rt;function r(o,a,l){const c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let f=n.get(a);if(f===void 0||f.count!==u){let b=function(){R.dispose(),n.delete(a),a.removeEventListener("dispose",b)};var d=b;f!==void 0&&f.texture.dispose();const m=a.morphAttributes.position!==void 0,x=a.morphAttributes.normal!==void 0,g=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],M=a.morphAttributes.normal||[],_=a.morphAttributes.color||[];let v=0;m===!0&&(v=1),x===!0&&(v=2),g===!0&&(v=3);let E=a.attributes.position.count*v,T=1;E>e.maxTextureSize&&(T=Math.ceil(E/e.maxTextureSize),E=e.maxTextureSize);const w=new Float32Array(E*T*4*u),R=new pf(w,E,T,u);R.type=Dn,R.needsUpdate=!0;const S=v*4;for(let L=0;L<u;L++){const D=p[L],N=M[L],B=_[L],O=E*T*4*L;for(let V=0;V<D.count;V++){const Z=V*S;m===!0&&(s.fromBufferAttribute(D,V),w[O+Z+0]=s.x,w[O+Z+1]=s.y,w[O+Z+2]=s.z,w[O+Z+3]=0),x===!0&&(s.fromBufferAttribute(N,V),w[O+Z+4]=s.x,w[O+Z+5]=s.y,w[O+Z+6]=s.z,w[O+Z+7]=0),g===!0&&(s.fromBufferAttribute(B,V),w[O+Z+8]=s.x,w[O+Z+9]=s.y,w[O+Z+10]=s.z,w[O+Z+11]=B.itemSize===4?s.w:1)}}f={count:u,texture:R,size:new $(E,T)},n.set(a,f),a.addEventListener("dispose",b)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let m=0;for(let g=0;g<c.length;g++)m+=c[g];const x=a.morphTargetsRelative?1:1-m;l.getUniforms().setValue(i,"morphTargetBaseInfluence",x),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function W1(i,e,t,n){let s=new WeakMap;function r(l){const c=n.render.frame,h=l.geometry,u=e.get(l,h);if(s.get(u)!==c&&(e.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return u}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}const zf=new Ct,Zh=new bf(1,1),Bf=new pf,kf=new Rp,Hf=new yf,Jh=[],Qh=[],$h=new Float32Array(16),eu=new Float32Array(9),tu=new Float32Array(4);function zs(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let r=Jh[s];if(r===void 0&&(r=new Float32Array(s),Jh[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function Pt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Lt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Qo(i,e){let t=Qh[e];t===void 0&&(t=new Int32Array(e),Qh[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function X1(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function q1(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Pt(t,e))return;i.uniform2fv(this.addr,e),Lt(t,e)}}function Y1(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Pt(t,e))return;i.uniform3fv(this.addr,e),Lt(t,e)}}function j1(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Pt(t,e))return;i.uniform4fv(this.addr,e),Lt(t,e)}}function K1(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Pt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Lt(t,e)}else{if(Pt(t,n))return;tu.set(n),i.uniformMatrix2fv(this.addr,!1,tu),Lt(t,n)}}function Z1(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Pt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Lt(t,e)}else{if(Pt(t,n))return;eu.set(n),i.uniformMatrix3fv(this.addr,!1,eu),Lt(t,n)}}function J1(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Pt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Lt(t,e)}else{if(Pt(t,n))return;$h.set(n),i.uniformMatrix4fv(this.addr,!1,$h),Lt(t,n)}}function Q1(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function $1(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Pt(t,e))return;i.uniform2iv(this.addr,e),Lt(t,e)}}function ex(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Pt(t,e))return;i.uniform3iv(this.addr,e),Lt(t,e)}}function tx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Pt(t,e))return;i.uniform4iv(this.addr,e),Lt(t,e)}}function nx(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function ix(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Pt(t,e))return;i.uniform2uiv(this.addr,e),Lt(t,e)}}function sx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Pt(t,e))return;i.uniform3uiv(this.addr,e),Lt(t,e)}}function rx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Pt(t,e))return;i.uniform4uiv(this.addr,e),Lt(t,e)}}function ox(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Zh.compareFunction=ff,r=Zh):r=zf,t.setTexture2D(e||r,s)}function ax(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||kf,s)}function lx(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Hf,s)}function cx(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Bf,s)}function hx(i){switch(i){case 5126:return X1;case 35664:return q1;case 35665:return Y1;case 35666:return j1;case 35674:return K1;case 35675:return Z1;case 35676:return J1;case 5124:case 35670:return Q1;case 35667:case 35671:return $1;case 35668:case 35672:return ex;case 35669:case 35673:return tx;case 5125:return nx;case 36294:return ix;case 36295:return sx;case 36296:return rx;case 35678:case 36198:case 36298:case 36306:case 35682:return ox;case 35679:case 36299:case 36307:return ax;case 35680:case 36300:case 36308:case 36293:return lx;case 36289:case 36303:case 36311:case 36292:return cx}}function ux(i,e){i.uniform1fv(this.addr,e)}function fx(i,e){const t=zs(e,this.size,2);i.uniform2fv(this.addr,t)}function dx(i,e){const t=zs(e,this.size,3);i.uniform3fv(this.addr,t)}function px(i,e){const t=zs(e,this.size,4);i.uniform4fv(this.addr,t)}function mx(i,e){const t=zs(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function gx(i,e){const t=zs(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function xx(i,e){const t=zs(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function vx(i,e){i.uniform1iv(this.addr,e)}function _x(i,e){i.uniform2iv(this.addr,e)}function Mx(i,e){i.uniform3iv(this.addr,e)}function yx(i,e){i.uniform4iv(this.addr,e)}function Sx(i,e){i.uniform1uiv(this.addr,e)}function bx(i,e){i.uniform2uiv(this.addr,e)}function wx(i,e){i.uniform3uiv(this.addr,e)}function Ex(i,e){i.uniform4uiv(this.addr,e)}function Tx(i,e,t){const n=this.cache,s=e.length,r=Qo(t,s);Pt(n,r)||(i.uniform1iv(this.addr,r),Lt(n,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||zf,r[o])}function Ax(i,e,t){const n=this.cache,s=e.length,r=Qo(t,s);Pt(n,r)||(i.uniform1iv(this.addr,r),Lt(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||kf,r[o])}function Cx(i,e,t){const n=this.cache,s=e.length,r=Qo(t,s);Pt(n,r)||(i.uniform1iv(this.addr,r),Lt(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||Hf,r[o])}function Rx(i,e,t){const n=this.cache,s=e.length,r=Qo(t,s);Pt(n,r)||(i.uniform1iv(this.addr,r),Lt(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||Bf,r[o])}function Px(i){switch(i){case 5126:return ux;case 35664:return fx;case 35665:return dx;case 35666:return px;case 35674:return mx;case 35675:return gx;case 35676:return xx;case 5124:case 35670:return vx;case 35667:case 35671:return _x;case 35668:case 35672:return Mx;case 35669:case 35673:return yx;case 5125:return Sx;case 36294:return bx;case 36295:return wx;case 36296:return Ex;case 35678:case 36198:case 36298:case 36306:case 35682:return Tx;case 35679:case 36299:case 36307:return Ax;case 35680:case 36300:case 36308:case 36293:return Cx;case 36289:case 36303:case 36311:case 36292:return Rx}}class Lx{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=hx(t.type)}}class Dx{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Px(t.type)}}class Ix{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,t[a.id],n)}}}const qa=/(\w+)(\])?(\[|\.)?/g;function nu(i,e){i.seq.push(e),i.map[e.id]=e}function Ux(i,e,t){const n=i.name,s=n.length;for(qa.lastIndex=0;;){const r=qa.exec(n),o=qa.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){nu(t,c===void 0?new Lx(a,i,e):new Dx(a,i,e));break}else{let u=t.map[a];u===void 0&&(u=new Ix(a),nu(t,u)),t=u}}}class yo{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);Ux(r,o,this)}}setValue(e,t,n,s){const r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){const a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in t&&n.push(o)}return n}}function iu(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const Nx=37297;let Fx=0;function Ox(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}const su=new Ke;function zx(i){st._getMatrix(su,st.workingColorSpace,i);const e=`mat3( ${su.elements.map(t=>t.toFixed(4))} )`;switch(st.getTransfer(i)){case Co:return[e,"LinearTransferOETF"];case ht:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function ru(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+Ox(i.getShaderSource(e),a)}else return r}function Bx(i,e){const t=zx(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function kx(i,e){let t;switch(e){case Zu:t="Linear";break;case Ju:t="Reinhard";break;case Qu:t="Cineon";break;case _c:t="ACESFilmic";break;case ef:t="AgX";break;case tf:t="Neutral";break;case $u:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const so=new P;function Hx(){st.getLuminanceCoefficients(so);const i=so.x.toFixed(4),e=so.y.toFixed(4),t=so.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Gx(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Qs).join(`
`)}function Vx(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Wx(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(e,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function Qs(i){return i!==""}function ou(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function au(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Xx=/^[ \t]*#include +<([\w\d./]+)>/gm;function ic(i){return i.replace(Xx,Yx)}const qx=new Map;function Yx(i,e){let t=Qe[e];if(t===void 0){const n=qx.get(e);if(n!==void 0)t=Qe[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return ic(t)}const jx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function lu(i){return i.replace(jx,Kx)}function Kx(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function cu(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}function Zx(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===ju?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Cd?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===qn&&(e="SHADOWMAP_TYPE_VSM"),e}function Jx(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Ts:case As:e="ENVMAP_TYPE_CUBE";break;case Xo:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Qx(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case As:e="ENVMAP_MODE_REFRACTION";break}return e}function $x(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Ku:e="ENVMAP_BLENDING_MULTIPLY";break;case Yd:e="ENVMAP_BLENDING_MIX";break;case jd:e="ENVMAP_BLENDING_ADD";break}return e}function ev(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function tv(i,e,t,n){const s=i.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=Zx(t),c=Jx(t),h=Qx(t),u=$x(t),f=ev(t),d=Gx(t),m=Vx(r),x=s.createProgram();let g,p,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(Qs).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(Qs).join(`
`),p.length>0&&(p+=`
`)):(g=[cu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Qs).join(`
`),p=[cu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==vi?"#define TONE_MAPPING":"",t.toneMapping!==vi?Qe.tonemapping_pars_fragment:"",t.toneMapping!==vi?kx("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Qe.colorspace_pars_fragment,Bx("linearToOutputTexel",t.outputColorSpace),Hx(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Qs).join(`
`)),o=ic(o),o=ou(o,t),o=au(o,t),a=ic(a),a=ou(a,t),a=au(a,t),o=lu(o),a=lu(a),t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,g=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",t.glslVersion===ah?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ah?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const _=M+g+o,v=M+p+a,E=iu(s,s.VERTEX_SHADER,_),T=iu(s,s.FRAGMENT_SHADER,v);s.attachShader(x,E),s.attachShader(x,T),t.index0AttributeName!==void 0?s.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function w(L){if(i.debug.checkShaderErrors){const D=s.getProgramInfoLog(x)||"",N=s.getShaderInfoLog(E)||"",B=s.getShaderInfoLog(T)||"",O=D.trim(),V=N.trim(),Z=B.trim();let W=!0,re=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(W=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,E,T);else{const fe=ru(s,E,"vertex"),ne=ru(s,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+O+`
`+fe+`
`+ne)}else O!==""?console.warn("THREE.WebGLProgram: Program Info Log:",O):(V===""||Z==="")&&(re=!1);re&&(L.diagnostics={runnable:W,programLog:O,vertexShader:{log:V,prefix:g},fragmentShader:{log:Z,prefix:p}})}s.deleteShader(E),s.deleteShader(T),R=new yo(s,x),S=Wx(s,x)}let R;this.getUniforms=function(){return R===void 0&&w(this),R};let S;this.getAttributes=function(){return S===void 0&&w(this),S};let b=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=s.getProgramParameter(x,Nx)),b},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Fx++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=E,this.fragmentShader=T,this}let nv=0;class iv{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new sv(e),t.set(e,n)),n}}class sv{constructor(e){this.id=nv++,this.code=e,this.usedTimes=0}}function rv(i,e,t,n,s,r,o){const a=new mf,l=new iv,c=new Set,h=[],u=s.logarithmicDepthBuffer,f=s.vertexTextures;let d=s.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(S){return c.add(S),S===0?"uv":`uv${S}`}function g(S,b,L,D,N){const B=D.fog,O=N.geometry,V=S.isMeshStandardMaterial?D.environment:null,Z=(S.isMeshStandardMaterial?t:e).get(S.envMap||V),W=Z&&Z.mapping===Xo?Z.image.height:null,re=m[S.type];S.precision!==null&&(d=s.getMaxPrecision(S.precision),d!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",d,"instead."));const fe=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,ne=fe!==void 0?fe.length:0;let ze=0;O.morphAttributes.position!==void 0&&(ze=1),O.morphAttributes.normal!==void 0&&(ze=2),O.morphAttributes.color!==void 0&&(ze=3);let He,Je,qe,j;if(re){const at=Pn[re];He=at.vertexShader,Je=at.fragmentShader}else He=S.vertexShader,Je=S.fragmentShader,l.update(S),qe=l.getVertexShaderID(S),j=l.getFragmentShaderID(S);const se=i.getRenderTarget(),we=i.state.buffers.depth.getReversed(),Ie=N.isInstancedMesh===!0,Le=N.isBatchedMesh===!0,Ne=!!S.map,tt=!!S.matcap,I=!!Z,oe=!!S.aoMap,ie=!!S.lightMap,ee=!!S.bumpMap,te=!!S.normalMap,Me=!!S.displacementMap,pe=!!S.emissiveMap,ye=!!S.metalnessMap,J=!!S.roughnessMap,Q=S.anisotropy>0,A=S.clearcoat>0,y=S.dispersion>0,U=S.iridescence>0,X=S.sheen>0,q=S.transmission>0,z=Q&&!!S.anisotropyMap,de=A&&!!S.clearcoatMap,ce=A&&!!S.clearcoatNormalMap,ue=A&&!!S.clearcoatRoughnessMap,_e=U&&!!S.iridescenceMap,ae=U&&!!S.iridescenceThicknessMap,he=X&&!!S.sheenColorMap,Re=X&&!!S.sheenRoughnessMap,Ae=!!S.specularMap,Se=!!S.specularColorMap,We=!!S.specularIntensityMap,F=q&&!!S.transmissionMap,me=q&&!!S.thicknessMap,be=!!S.gradientMap,Ue=!!S.alphaMap,ge=S.alphaTest>0,le=!!S.alphaHash,Be=!!S.extensions;let je=vi;S.toneMapped&&(se===null||se.isXRRenderTarget===!0)&&(je=i.toneMapping);const pt={shaderID:re,shaderType:S.type,shaderName:S.name,vertexShader:He,fragmentShader:Je,defines:S.defines,customVertexShaderID:qe,customFragmentShaderID:j,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:d,batching:Le,batchingColor:Le&&N._colorsTexture!==null,instancing:Ie,instancingColor:Ie&&N.instanceColor!==null,instancingMorph:Ie&&N.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:se===null?i.outputColorSpace:se.isXRRenderTarget===!0?se.texture.colorSpace:Cs,alphaToCoverage:!!S.alphaToCoverage,map:Ne,matcap:tt,envMap:I,envMapMode:I&&Z.mapping,envMapCubeUVHeight:W,aoMap:oe,lightMap:ie,bumpMap:ee,normalMap:te,displacementMap:f&&Me,emissiveMap:pe,normalMapObjectSpace:te&&S.normalMapType===Qd,normalMapTangentSpace:te&&S.normalMapType===uf,metalnessMap:ye,roughnessMap:J,anisotropy:Q,anisotropyMap:z,clearcoat:A,clearcoatMap:de,clearcoatNormalMap:ce,clearcoatRoughnessMap:ue,dispersion:y,iridescence:U,iridescenceMap:_e,iridescenceThicknessMap:ae,sheen:X,sheenColorMap:he,sheenRoughnessMap:Re,specularMap:Ae,specularColorMap:Se,specularIntensityMap:We,transmission:q,transmissionMap:F,thicknessMap:me,gradientMap:be,opaque:S.transparent===!1&&S.blending===Hi&&S.alphaToCoverage===!1,alphaMap:Ue,alphaTest:ge,alphaHash:le,combine:S.combine,mapUv:Ne&&x(S.map.channel),aoMapUv:oe&&x(S.aoMap.channel),lightMapUv:ie&&x(S.lightMap.channel),bumpMapUv:ee&&x(S.bumpMap.channel),normalMapUv:te&&x(S.normalMap.channel),displacementMapUv:Me&&x(S.displacementMap.channel),emissiveMapUv:pe&&x(S.emissiveMap.channel),metalnessMapUv:ye&&x(S.metalnessMap.channel),roughnessMapUv:J&&x(S.roughnessMap.channel),anisotropyMapUv:z&&x(S.anisotropyMap.channel),clearcoatMapUv:de&&x(S.clearcoatMap.channel),clearcoatNormalMapUv:ce&&x(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ue&&x(S.clearcoatRoughnessMap.channel),iridescenceMapUv:_e&&x(S.iridescenceMap.channel),iridescenceThicknessMapUv:ae&&x(S.iridescenceThicknessMap.channel),sheenColorMapUv:he&&x(S.sheenColorMap.channel),sheenRoughnessMapUv:Re&&x(S.sheenRoughnessMap.channel),specularMapUv:Ae&&x(S.specularMap.channel),specularColorMapUv:Se&&x(S.specularColorMap.channel),specularIntensityMapUv:We&&x(S.specularIntensityMap.channel),transmissionMapUv:F&&x(S.transmissionMap.channel),thicknessMapUv:me&&x(S.thicknessMap.channel),alphaMapUv:Ue&&x(S.alphaMap.channel),vertexTangents:!!O.attributes.tangent&&(te||Q),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!O.attributes.uv&&(Ne||Ue),fog:!!B,useFog:S.fog===!0,fogExp2:!!B&&B.isFogExp2,flatShading:S.flatShading===!0&&S.wireframe===!1,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:we,skinning:N.isSkinnedMesh===!0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:ne,morphTextureStride:ze,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:i.shadowMap.enabled&&L.length>0,shadowMapType:i.shadowMap.type,toneMapping:je,decodeVideoTexture:Ne&&S.map.isVideoTexture===!0&&st.getTransfer(S.map.colorSpace)===ht,decodeVideoTextureEmissive:pe&&S.emissiveMap.isVideoTexture===!0&&st.getTransfer(S.emissiveMap.colorSpace)===ht,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Ot,flipSided:S.side===Xt,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Be&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Be&&S.extensions.multiDraw===!0||Le)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return pt.vertexUv1s=c.has(1),pt.vertexUv2s=c.has(2),pt.vertexUv3s=c.has(3),c.clear(),pt}function p(S){const b=[];if(S.shaderID?b.push(S.shaderID):(b.push(S.customVertexShaderID),b.push(S.customFragmentShaderID)),S.defines!==void 0)for(const L in S.defines)b.push(L),b.push(S.defines[L]);return S.isRawShaderMaterial===!1&&(M(b,S),_(b,S),b.push(i.outputColorSpace)),b.push(S.customProgramCacheKey),b.join()}function M(S,b){S.push(b.precision),S.push(b.outputColorSpace),S.push(b.envMapMode),S.push(b.envMapCubeUVHeight),S.push(b.mapUv),S.push(b.alphaMapUv),S.push(b.lightMapUv),S.push(b.aoMapUv),S.push(b.bumpMapUv),S.push(b.normalMapUv),S.push(b.displacementMapUv),S.push(b.emissiveMapUv),S.push(b.metalnessMapUv),S.push(b.roughnessMapUv),S.push(b.anisotropyMapUv),S.push(b.clearcoatMapUv),S.push(b.clearcoatNormalMapUv),S.push(b.clearcoatRoughnessMapUv),S.push(b.iridescenceMapUv),S.push(b.iridescenceThicknessMapUv),S.push(b.sheenColorMapUv),S.push(b.sheenRoughnessMapUv),S.push(b.specularMapUv),S.push(b.specularColorMapUv),S.push(b.specularIntensityMapUv),S.push(b.transmissionMapUv),S.push(b.thicknessMapUv),S.push(b.combine),S.push(b.fogExp2),S.push(b.sizeAttenuation),S.push(b.morphTargetsCount),S.push(b.morphAttributeCount),S.push(b.numDirLights),S.push(b.numPointLights),S.push(b.numSpotLights),S.push(b.numSpotLightMaps),S.push(b.numHemiLights),S.push(b.numRectAreaLights),S.push(b.numDirLightShadows),S.push(b.numPointLightShadows),S.push(b.numSpotLightShadows),S.push(b.numSpotLightShadowsWithMaps),S.push(b.numLightProbes),S.push(b.shadowMapType),S.push(b.toneMapping),S.push(b.numClippingPlanes),S.push(b.numClipIntersection),S.push(b.depthPacking)}function _(S,b){a.disableAll(),b.supportsVertexTextures&&a.enable(0),b.instancing&&a.enable(1),b.instancingColor&&a.enable(2),b.instancingMorph&&a.enable(3),b.matcap&&a.enable(4),b.envMap&&a.enable(5),b.normalMapObjectSpace&&a.enable(6),b.normalMapTangentSpace&&a.enable(7),b.clearcoat&&a.enable(8),b.iridescence&&a.enable(9),b.alphaTest&&a.enable(10),b.vertexColors&&a.enable(11),b.vertexAlphas&&a.enable(12),b.vertexUv1s&&a.enable(13),b.vertexUv2s&&a.enable(14),b.vertexUv3s&&a.enable(15),b.vertexTangents&&a.enable(16),b.anisotropy&&a.enable(17),b.alphaHash&&a.enable(18),b.batching&&a.enable(19),b.dispersion&&a.enable(20),b.batchingColor&&a.enable(21),b.gradientMap&&a.enable(22),S.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.reversedDepthBuffer&&a.enable(4),b.skinning&&a.enable(5),b.morphTargets&&a.enable(6),b.morphNormals&&a.enable(7),b.morphColors&&a.enable(8),b.premultipliedAlpha&&a.enable(9),b.shadowMapEnabled&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),b.decodeVideoTextureEmissive&&a.enable(20),b.alphaToCoverage&&a.enable(21),S.push(a.mask)}function v(S){const b=m[S.type];let L;if(b){const D=Pn[b];L=Un.clone(D.uniforms)}else L=S.uniforms;return L}function E(S,b){let L;for(let D=0,N=h.length;D<N;D++){const B=h[D];if(B.cacheKey===b){L=B,++L.usedTimes;break}}return L===void 0&&(L=new tv(i,b,S,r),h.push(L)),L}function T(S){if(--S.usedTimes===0){const b=h.indexOf(S);h[b]=h[h.length-1],h.pop(),S.destroy()}}function w(S){l.remove(S)}function R(){l.dispose()}return{getParameters:g,getProgramCacheKey:p,getUniforms:v,acquireProgram:E,releaseProgram:T,releaseShaderCache:w,programs:h,dispose:R}}function ov(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function av(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function hu(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function uu(){const i=[];let e=0;const t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(u,f,d,m,x,g){let p=i[e];return p===void 0?(p={id:u.id,object:u,geometry:f,material:d,groupOrder:m,renderOrder:u.renderOrder,z:x,group:g},i[e]=p):(p.id=u.id,p.object=u,p.geometry=f,p.material=d,p.groupOrder=m,p.renderOrder=u.renderOrder,p.z=x,p.group=g),e++,p}function a(u,f,d,m,x,g){const p=o(u,f,d,m,x,g);d.transmission>0?n.push(p):d.transparent===!0?s.push(p):t.push(p)}function l(u,f,d,m,x,g){const p=o(u,f,d,m,x,g);d.transmission>0?n.unshift(p):d.transparent===!0?s.unshift(p):t.unshift(p)}function c(u,f){t.length>1&&t.sort(u||av),n.length>1&&n.sort(f||hu),s.length>1&&s.sort(f||hu)}function h(){for(let u=e,f=i.length;u<f;u++){const d=i[u];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function lv(){let i=new WeakMap;function e(n,s){const r=i.get(n);let o;return r===void 0?(o=new uu,i.set(n,[o])):s>=r.length?(o=new uu,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function cv(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new P,color:new Oe};break;case"SpotLight":t={position:new P,direction:new P,color:new Oe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new P,color:new Oe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new P,skyColor:new Oe,groundColor:new Oe};break;case"RectAreaLight":t={color:new Oe,position:new P,halfWidth:new P,halfHeight:new P};break}return i[e.id]=t,t}}}function hv(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let uv=0;function fv(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function dv(i){const e=new cv,t=hv(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new P);const s=new P,r=new Ze,o=new Ze;function a(c){let h=0,u=0,f=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let d=0,m=0,x=0,g=0,p=0,M=0,_=0,v=0,E=0,T=0,w=0;c.sort(fv);for(let S=0,b=c.length;S<b;S++){const L=c[S],D=L.color,N=L.intensity,B=L.distance,O=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)h+=D.r*N,u+=D.g*N,f+=D.b*N;else if(L.isLightProbe){for(let V=0;V<9;V++)n.probe[V].addScaledVector(L.sh.coefficients[V],N);w++}else if(L.isDirectionalLight){const V=e.get(L);if(V.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const Z=L.shadow,W=t.get(L);W.shadowIntensity=Z.intensity,W.shadowBias=Z.bias,W.shadowNormalBias=Z.normalBias,W.shadowRadius=Z.radius,W.shadowMapSize=Z.mapSize,n.directionalShadow[d]=W,n.directionalShadowMap[d]=O,n.directionalShadowMatrix[d]=L.shadow.matrix,M++}n.directional[d]=V,d++}else if(L.isSpotLight){const V=e.get(L);V.position.setFromMatrixPosition(L.matrixWorld),V.color.copy(D).multiplyScalar(N),V.distance=B,V.coneCos=Math.cos(L.angle),V.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),V.decay=L.decay,n.spot[x]=V;const Z=L.shadow;if(L.map&&(n.spotLightMap[E]=L.map,E++,Z.updateMatrices(L),L.castShadow&&T++),n.spotLightMatrix[x]=Z.matrix,L.castShadow){const W=t.get(L);W.shadowIntensity=Z.intensity,W.shadowBias=Z.bias,W.shadowNormalBias=Z.normalBias,W.shadowRadius=Z.radius,W.shadowMapSize=Z.mapSize,n.spotShadow[x]=W,n.spotShadowMap[x]=O,v++}x++}else if(L.isRectAreaLight){const V=e.get(L);V.color.copy(D).multiplyScalar(N),V.halfWidth.set(L.width*.5,0,0),V.halfHeight.set(0,L.height*.5,0),n.rectArea[g]=V,g++}else if(L.isPointLight){const V=e.get(L);if(V.color.copy(L.color).multiplyScalar(L.intensity),V.distance=L.distance,V.decay=L.decay,L.castShadow){const Z=L.shadow,W=t.get(L);W.shadowIntensity=Z.intensity,W.shadowBias=Z.bias,W.shadowNormalBias=Z.normalBias,W.shadowRadius=Z.radius,W.shadowMapSize=Z.mapSize,W.shadowCameraNear=Z.camera.near,W.shadowCameraFar=Z.camera.far,n.pointShadow[m]=W,n.pointShadowMap[m]=O,n.pointShadowMatrix[m]=L.shadow.matrix,_++}n.point[m]=V,m++}else if(L.isHemisphereLight){const V=e.get(L);V.skyColor.copy(L.color).multiplyScalar(N),V.groundColor.copy(L.groundColor).multiplyScalar(N),n.hemi[p]=V,p++}}g>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ee.LTC_FLOAT_1,n.rectAreaLTC2=Ee.LTC_FLOAT_2):(n.rectAreaLTC1=Ee.LTC_HALF_1,n.rectAreaLTC2=Ee.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;const R=n.hash;(R.directionalLength!==d||R.pointLength!==m||R.spotLength!==x||R.rectAreaLength!==g||R.hemiLength!==p||R.numDirectionalShadows!==M||R.numPointShadows!==_||R.numSpotShadows!==v||R.numSpotMaps!==E||R.numLightProbes!==w)&&(n.directional.length=d,n.spot.length=x,n.rectArea.length=g,n.point.length=m,n.hemi.length=p,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.pointShadow.length=_,n.pointShadowMap.length=_,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=M,n.pointShadowMatrix.length=_,n.spotLightMatrix.length=v+E-T,n.spotLightMap.length=E,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=w,R.directionalLength=d,R.pointLength=m,R.spotLength=x,R.rectAreaLength=g,R.hemiLength=p,R.numDirectionalShadows=M,R.numPointShadows=_,R.numSpotShadows=v,R.numSpotMaps=E,R.numLightProbes=w,n.version=uv++)}function l(c,h){let u=0,f=0,d=0,m=0,x=0;const g=h.matrixWorldInverse;for(let p=0,M=c.length;p<M;p++){const _=c[p];if(_.isDirectionalLight){const v=n.directional[u];v.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(g),u++}else if(_.isSpotLight){const v=n.spot[d];v.position.setFromMatrixPosition(_.matrixWorld),v.position.applyMatrix4(g),v.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(g),d++}else if(_.isRectAreaLight){const v=n.rectArea[m];v.position.setFromMatrixPosition(_.matrixWorld),v.position.applyMatrix4(g),o.identity(),r.copy(_.matrixWorld),r.premultiply(g),o.extractRotation(r),v.halfWidth.set(_.width*.5,0,0),v.halfHeight.set(0,_.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),m++}else if(_.isPointLight){const v=n.point[f];v.position.setFromMatrixPosition(_.matrixWorld),v.position.applyMatrix4(g),f++}else if(_.isHemisphereLight){const v=n.hemi[x];v.direction.setFromMatrixPosition(_.matrixWorld),v.direction.transformDirection(g),x++}}}return{setup:a,setupView:l,state:n}}function fu(i){const e=new dv(i),t=[],n=[];function s(h){c.camera=h,t.length=0,n.length=0}function r(h){t.push(h)}function o(h){n.push(h)}function a(){e.setup(t)}function l(h){e.setupView(t,h)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function pv(i){let e=new WeakMap;function t(s,r=0){const o=e.get(s);let a;return o===void 0?(a=new fu(i),e.set(s,[a])):r>=o.length?(a=new fu(i),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}const mv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,gv=`uniform sampler2D shadow_pass;
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
}`;function xv(i,e,t){let n=new Lc;const s=new $,r=new $,o=new rt,a=new Im({depthPacking:Jd}),l=new Um,c={},h=t.maxTextureSize,u={[ni]:Xt,[Xt]:ni,[Ot]:Ot},f=new vt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new $},radius:{value:4}},vertexShader:mv,fragmentShader:gv}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const m=new it;m.setAttribute("position",new _t(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new lt(m,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ju;let p=this.type;this.render=function(T,w,R){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||T.length===0)return;const S=i.getRenderTarget(),b=i.getActiveCubeFace(),L=i.getActiveMipmapLevel(),D=i.state;D.setBlending(Jn),D.buffers.depth.getReversed()===!0?D.buffers.color.setClear(0,0,0,0):D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);const N=p!==qn&&this.type===qn,B=p===qn&&this.type!==qn;for(let O=0,V=T.length;O<V;O++){const Z=T[O],W=Z.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;s.copy(W.mapSize);const re=W.getFrameExtents();if(s.multiply(re),r.copy(W.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/re.x),s.x=r.x*re.x,W.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/re.y),s.y=r.y*re.y,W.mapSize.y=r.y)),W.map===null||N===!0||B===!0){const ne=this.type!==qn?{minFilter:qt,magFilter:qt}:{};W.map!==null&&W.map.dispose(),W.map=new $t(s.x,s.y,ne),W.map.texture.name=Z.name+".shadowMap",W.camera.updateProjectionMatrix()}i.setRenderTarget(W.map),i.clear();const fe=W.getViewportCount();for(let ne=0;ne<fe;ne++){const ze=W.getViewport(ne);o.set(r.x*ze.x,r.y*ze.y,r.x*ze.z,r.y*ze.w),D.viewport(o),W.updateMatrices(Z,ne),n=W.getFrustum(),v(w,R,W.camera,Z,this.type)}W.isPointLightShadow!==!0&&this.type===qn&&M(W,R),W.needsUpdate=!1}p=this.type,g.needsUpdate=!1,i.setRenderTarget(S,b,L)};function M(T,w){const R=e.update(x);f.defines.VSM_SAMPLES!==T.blurSamples&&(f.defines.VSM_SAMPLES=T.blurSamples,d.defines.VSM_SAMPLES=T.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new $t(s.x,s.y)),f.uniforms.shadow_pass.value=T.map.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(w,null,R,f,x,null),d.uniforms.shadow_pass.value=T.mapPass.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(w,null,R,d,x,null)}function _(T,w,R,S){let b=null;const L=R.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(L!==void 0)b=L;else if(b=R.isPointLight===!0?l:a,i.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0||w.alphaToCoverage===!0){const D=b.uuid,N=w.uuid;let B=c[D];B===void 0&&(B={},c[D]=B);let O=B[N];O===void 0&&(O=b.clone(),B[N]=O,w.addEventListener("dispose",E)),b=O}if(b.visible=w.visible,b.wireframe=w.wireframe,S===qn?b.side=w.shadowSide!==null?w.shadowSide:w.side:b.side=w.shadowSide!==null?w.shadowSide:u[w.side],b.alphaMap=w.alphaMap,b.alphaTest=w.alphaToCoverage===!0?.5:w.alphaTest,b.map=w.map,b.clipShadows=w.clipShadows,b.clippingPlanes=w.clippingPlanes,b.clipIntersection=w.clipIntersection,b.displacementMap=w.displacementMap,b.displacementScale=w.displacementScale,b.displacementBias=w.displacementBias,b.wireframeLinewidth=w.wireframeLinewidth,b.linewidth=w.linewidth,R.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const D=i.properties.get(b);D.light=R}return b}function v(T,w,R,S,b){if(T.visible===!1)return;if(T.layers.test(w.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&b===qn)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,T.matrixWorld);const N=e.update(T),B=T.material;if(Array.isArray(B)){const O=N.groups;for(let V=0,Z=O.length;V<Z;V++){const W=O[V],re=B[W.materialIndex];if(re&&re.visible){const fe=_(T,re,S,b);T.onBeforeShadow(i,T,w,R,N,fe,W),i.renderBufferDirect(R,null,N,fe,T,W),T.onAfterShadow(i,T,w,R,N,fe,W)}}}else if(B.visible){const O=_(T,B,S,b);T.onBeforeShadow(i,T,w,R,N,O,null),i.renderBufferDirect(R,null,N,O,T,null),T.onAfterShadow(i,T,w,R,N,O,null)}}const D=T.children;for(let N=0,B=D.length;N<B;N++)v(D[N],w,R,S,b)}function E(T){T.target.removeEventListener("dispose",E);for(const R in c){const S=c[R],b=T.target.uuid;b in S&&(S[b].dispose(),delete S[b])}}}const vv={[pl]:ml,[gl]:_l,[xl]:Ml,[Es]:vl,[ml]:pl,[_l]:gl,[Ml]:xl,[vl]:Es};function _v(i,e){function t(){let F=!1;const me=new rt;let be=null;const Ue=new rt(0,0,0,0);return{setMask:function(ge){be!==ge&&!F&&(i.colorMask(ge,ge,ge,ge),be=ge)},setLocked:function(ge){F=ge},setClear:function(ge,le,Be,je,pt){pt===!0&&(ge*=je,le*=je,Be*=je),me.set(ge,le,Be,je),Ue.equals(me)===!1&&(i.clearColor(ge,le,Be,je),Ue.copy(me))},reset:function(){F=!1,be=null,Ue.set(-1,0,0,0)}}}function n(){let F=!1,me=!1,be=null,Ue=null,ge=null;return{setReversed:function(le){if(me!==le){const Be=e.get("EXT_clip_control");le?Be.clipControlEXT(Be.LOWER_LEFT_EXT,Be.ZERO_TO_ONE_EXT):Be.clipControlEXT(Be.LOWER_LEFT_EXT,Be.NEGATIVE_ONE_TO_ONE_EXT),me=le;const je=ge;ge=null,this.setClear(je)}},getReversed:function(){return me},setTest:function(le){le?se(i.DEPTH_TEST):we(i.DEPTH_TEST)},setMask:function(le){be!==le&&!F&&(i.depthMask(le),be=le)},setFunc:function(le){if(me&&(le=vv[le]),Ue!==le){switch(le){case pl:i.depthFunc(i.NEVER);break;case ml:i.depthFunc(i.ALWAYS);break;case gl:i.depthFunc(i.LESS);break;case Es:i.depthFunc(i.LEQUAL);break;case xl:i.depthFunc(i.EQUAL);break;case vl:i.depthFunc(i.GEQUAL);break;case _l:i.depthFunc(i.GREATER);break;case Ml:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Ue=le}},setLocked:function(le){F=le},setClear:function(le){ge!==le&&(me&&(le=1-le),i.clearDepth(le),ge=le)},reset:function(){F=!1,be=null,Ue=null,ge=null,me=!1}}}function s(){let F=!1,me=null,be=null,Ue=null,ge=null,le=null,Be=null,je=null,pt=null;return{setTest:function(at){F||(at?se(i.STENCIL_TEST):we(i.STENCIL_TEST))},setMask:function(at){me!==at&&!F&&(i.stencilMask(at),me=at)},setFunc:function(at,kn,Cn){(be!==at||Ue!==kn||ge!==Cn)&&(i.stencilFunc(at,kn,Cn),be=at,Ue=kn,ge=Cn)},setOp:function(at,kn,Cn){(le!==at||Be!==kn||je!==Cn)&&(i.stencilOp(at,kn,Cn),le=at,Be=kn,je=Cn)},setLocked:function(at){F=at},setClear:function(at){pt!==at&&(i.clearStencil(at),pt=at)},reset:function(){F=!1,me=null,be=null,Ue=null,ge=null,le=null,Be=null,je=null,pt=null}}}const r=new t,o=new n,a=new s,l=new WeakMap,c=new WeakMap;let h={},u={},f=new WeakMap,d=[],m=null,x=!1,g=null,p=null,M=null,_=null,v=null,E=null,T=null,w=new Oe(0,0,0),R=0,S=!1,b=null,L=null,D=null,N=null,B=null;const O=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let V=!1,Z=0;const W=i.getParameter(i.VERSION);W.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(W)[1]),V=Z>=1):W.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),V=Z>=2);let re=null,fe={};const ne=i.getParameter(i.SCISSOR_BOX),ze=i.getParameter(i.VIEWPORT),He=new rt().fromArray(ne),Je=new rt().fromArray(ze);function qe(F,me,be,Ue){const ge=new Uint8Array(4),le=i.createTexture();i.bindTexture(F,le),i.texParameteri(F,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(F,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Be=0;Be<be;Be++)F===i.TEXTURE_3D||F===i.TEXTURE_2D_ARRAY?i.texImage3D(me,0,i.RGBA,1,1,Ue,0,i.RGBA,i.UNSIGNED_BYTE,ge):i.texImage2D(me+Be,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ge);return le}const j={};j[i.TEXTURE_2D]=qe(i.TEXTURE_2D,i.TEXTURE_2D,1),j[i.TEXTURE_CUBE_MAP]=qe(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),j[i.TEXTURE_2D_ARRAY]=qe(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),j[i.TEXTURE_3D]=qe(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),se(i.DEPTH_TEST),o.setFunc(Es),ee(!1),te(nh),se(i.CULL_FACE),oe(Jn);function se(F){h[F]!==!0&&(i.enable(F),h[F]=!0)}function we(F){h[F]!==!1&&(i.disable(F),h[F]=!1)}function Ie(F,me){return u[F]!==me?(i.bindFramebuffer(F,me),u[F]=me,F===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=me),F===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=me),!0):!1}function Le(F,me){let be=d,Ue=!1;if(F){be=f.get(me),be===void 0&&(be=[],f.set(me,be));const ge=F.textures;if(be.length!==ge.length||be[0]!==i.COLOR_ATTACHMENT0){for(let le=0,Be=ge.length;le<Be;le++)be[le]=i.COLOR_ATTACHMENT0+le;be.length=ge.length,Ue=!0}}else be[0]!==i.BACK&&(be[0]=i.BACK,Ue=!0);Ue&&i.drawBuffers(be)}function Ne(F){return m!==F?(i.useProgram(F),m=F,!0):!1}const tt={[Ni]:i.FUNC_ADD,[Pd]:i.FUNC_SUBTRACT,[Ld]:i.FUNC_REVERSE_SUBTRACT};tt[Dd]=i.MIN,tt[Id]=i.MAX;const I={[Ud]:i.ZERO,[Nd]:i.ONE,[Fd]:i.SRC_COLOR,[fl]:i.SRC_ALPHA,[Gd]:i.SRC_ALPHA_SATURATE,[kd]:i.DST_COLOR,[zd]:i.DST_ALPHA,[Od]:i.ONE_MINUS_SRC_COLOR,[dl]:i.ONE_MINUS_SRC_ALPHA,[Hd]:i.ONE_MINUS_DST_COLOR,[Bd]:i.ONE_MINUS_DST_ALPHA,[Vd]:i.CONSTANT_COLOR,[Wd]:i.ONE_MINUS_CONSTANT_COLOR,[Xd]:i.CONSTANT_ALPHA,[qd]:i.ONE_MINUS_CONSTANT_ALPHA};function oe(F,me,be,Ue,ge,le,Be,je,pt,at){if(F===Jn){x===!0&&(we(i.BLEND),x=!1);return}if(x===!1&&(se(i.BLEND),x=!0),F!==Rd){if(F!==g||at!==S){if((p!==Ni||v!==Ni)&&(i.blendEquation(i.FUNC_ADD),p=Ni,v=Ni),at)switch(F){case Hi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Wi:i.blendFunc(i.ONE,i.ONE);break;case ih:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case sh:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case Hi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Wi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case ih:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case sh:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}M=null,_=null,E=null,T=null,w.set(0,0,0),R=0,g=F,S=at}return}ge=ge||me,le=le||be,Be=Be||Ue,(me!==p||ge!==v)&&(i.blendEquationSeparate(tt[me],tt[ge]),p=me,v=ge),(be!==M||Ue!==_||le!==E||Be!==T)&&(i.blendFuncSeparate(I[be],I[Ue],I[le],I[Be]),M=be,_=Ue,E=le,T=Be),(je.equals(w)===!1||pt!==R)&&(i.blendColor(je.r,je.g,je.b,pt),w.copy(je),R=pt),g=F,S=!1}function ie(F,me){F.side===Ot?we(i.CULL_FACE):se(i.CULL_FACE);let be=F.side===Xt;me&&(be=!be),ee(be),F.blending===Hi&&F.transparent===!1?oe(Jn):oe(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),o.setFunc(F.depthFunc),o.setTest(F.depthTest),o.setMask(F.depthWrite),r.setMask(F.colorWrite);const Ue=F.stencilWrite;a.setTest(Ue),Ue&&(a.setMask(F.stencilWriteMask),a.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),a.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),pe(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?se(i.SAMPLE_ALPHA_TO_COVERAGE):we(i.SAMPLE_ALPHA_TO_COVERAGE)}function ee(F){b!==F&&(F?i.frontFace(i.CW):i.frontFace(i.CCW),b=F)}function te(F){F!==Td?(se(i.CULL_FACE),F!==L&&(F===nh?i.cullFace(i.BACK):F===Ad?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):we(i.CULL_FACE),L=F}function Me(F){F!==D&&(V&&i.lineWidth(F),D=F)}function pe(F,me,be){F?(se(i.POLYGON_OFFSET_FILL),(N!==me||B!==be)&&(i.polygonOffset(me,be),N=me,B=be)):we(i.POLYGON_OFFSET_FILL)}function ye(F){F?se(i.SCISSOR_TEST):we(i.SCISSOR_TEST)}function J(F){F===void 0&&(F=i.TEXTURE0+O-1),re!==F&&(i.activeTexture(F),re=F)}function Q(F,me,be){be===void 0&&(re===null?be=i.TEXTURE0+O-1:be=re);let Ue=fe[be];Ue===void 0&&(Ue={type:void 0,texture:void 0},fe[be]=Ue),(Ue.type!==F||Ue.texture!==me)&&(re!==be&&(i.activeTexture(be),re=be),i.bindTexture(F,me||j[F]),Ue.type=F,Ue.texture=me)}function A(){const F=fe[re];F!==void 0&&F.type!==void 0&&(i.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function y(){try{i.compressedTexImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function U(){try{i.compressedTexImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function X(){try{i.texSubImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function q(){try{i.texSubImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function z(){try{i.compressedTexSubImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function de(){try{i.compressedTexSubImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ce(){try{i.texStorage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ue(){try{i.texStorage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function _e(){try{i.texImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ae(){try{i.texImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function he(F){He.equals(F)===!1&&(i.scissor(F.x,F.y,F.z,F.w),He.copy(F))}function Re(F){Je.equals(F)===!1&&(i.viewport(F.x,F.y,F.z,F.w),Je.copy(F))}function Ae(F,me){let be=c.get(me);be===void 0&&(be=new WeakMap,c.set(me,be));let Ue=be.get(F);Ue===void 0&&(Ue=i.getUniformBlockIndex(me,F.name),be.set(F,Ue))}function Se(F,me){const Ue=c.get(me).get(F);l.get(me)!==Ue&&(i.uniformBlockBinding(me,Ue,F.__bindingPointIndex),l.set(me,Ue))}function We(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},re=null,fe={},u={},f=new WeakMap,d=[],m=null,x=!1,g=null,p=null,M=null,_=null,v=null,E=null,T=null,w=new Oe(0,0,0),R=0,S=!1,b=null,L=null,D=null,N=null,B=null,He.set(0,0,i.canvas.width,i.canvas.height),Je.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:se,disable:we,bindFramebuffer:Ie,drawBuffers:Le,useProgram:Ne,setBlending:oe,setMaterial:ie,setFlipSided:ee,setCullFace:te,setLineWidth:Me,setPolygonOffset:pe,setScissorTest:ye,activeTexture:J,bindTexture:Q,unbindTexture:A,compressedTexImage2D:y,compressedTexImage3D:U,texImage2D:_e,texImage3D:ae,updateUBOMapping:Ae,uniformBlockBinding:Se,texStorage2D:ce,texStorage3D:ue,texSubImage2D:X,texSubImage3D:q,compressedTexSubImage2D:z,compressedTexSubImage3D:de,scissor:he,viewport:Re,reset:We}}function Mv(i,e,t,n,s,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new $,h=new WeakMap;let u;const f=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(A,y){return d?new OffscreenCanvas(A,y):dr("canvas")}function x(A,y,U){let X=1;const q=Q(A);if((q.width>U||q.height>U)&&(X=U/Math.max(q.width,q.height)),X<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const z=Math.floor(X*q.width),de=Math.floor(X*q.height);u===void 0&&(u=m(z,de));const ce=y?m(z,de):u;return ce.width=z,ce.height=de,ce.getContext("2d").drawImage(A,0,0,z,de),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+q.width+"x"+q.height+") to ("+z+"x"+de+")."),ce}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+q.width+"x"+q.height+")."),A;return A}function g(A){return A.generateMipmaps}function p(A){i.generateMipmap(A)}function M(A){return A.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?i.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function _(A,y,U,X,q=!1){if(A!==null){if(i[A]!==void 0)return i[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let z=y;if(y===i.RED&&(U===i.FLOAT&&(z=i.R32F),U===i.HALF_FLOAT&&(z=i.R16F),U===i.UNSIGNED_BYTE&&(z=i.R8)),y===i.RED_INTEGER&&(U===i.UNSIGNED_BYTE&&(z=i.R8UI),U===i.UNSIGNED_SHORT&&(z=i.R16UI),U===i.UNSIGNED_INT&&(z=i.R32UI),U===i.BYTE&&(z=i.R8I),U===i.SHORT&&(z=i.R16I),U===i.INT&&(z=i.R32I)),y===i.RG&&(U===i.FLOAT&&(z=i.RG32F),U===i.HALF_FLOAT&&(z=i.RG16F),U===i.UNSIGNED_BYTE&&(z=i.RG8)),y===i.RG_INTEGER&&(U===i.UNSIGNED_BYTE&&(z=i.RG8UI),U===i.UNSIGNED_SHORT&&(z=i.RG16UI),U===i.UNSIGNED_INT&&(z=i.RG32UI),U===i.BYTE&&(z=i.RG8I),U===i.SHORT&&(z=i.RG16I),U===i.INT&&(z=i.RG32I)),y===i.RGB_INTEGER&&(U===i.UNSIGNED_BYTE&&(z=i.RGB8UI),U===i.UNSIGNED_SHORT&&(z=i.RGB16UI),U===i.UNSIGNED_INT&&(z=i.RGB32UI),U===i.BYTE&&(z=i.RGB8I),U===i.SHORT&&(z=i.RGB16I),U===i.INT&&(z=i.RGB32I)),y===i.RGBA_INTEGER&&(U===i.UNSIGNED_BYTE&&(z=i.RGBA8UI),U===i.UNSIGNED_SHORT&&(z=i.RGBA16UI),U===i.UNSIGNED_INT&&(z=i.RGBA32UI),U===i.BYTE&&(z=i.RGBA8I),U===i.SHORT&&(z=i.RGBA16I),U===i.INT&&(z=i.RGBA32I)),y===i.RGB&&(U===i.UNSIGNED_INT_5_9_9_9_REV&&(z=i.RGB9_E5),U===i.UNSIGNED_INT_10F_11F_11F_REV&&(z=i.R11F_G11F_B10F)),y===i.RGBA){const de=q?Co:st.getTransfer(X);U===i.FLOAT&&(z=i.RGBA32F),U===i.HALF_FLOAT&&(z=i.RGBA16F),U===i.UNSIGNED_BYTE&&(z=de===ht?i.SRGB8_ALPHA8:i.RGBA8),U===i.UNSIGNED_SHORT_4_4_4_4&&(z=i.RGBA4),U===i.UNSIGNED_SHORT_5_5_5_1&&(z=i.RGB5_A1)}return(z===i.R16F||z===i.R32F||z===i.RG16F||z===i.RG32F||z===i.RGBA16F||z===i.RGBA32F)&&e.get("EXT_color_buffer_float"),z}function v(A,y){let U;return A?y===null||y===Xi||y===hr?U=i.DEPTH24_STENCIL8:y===Dn?U=i.DEPTH32F_STENCIL8:y===cr&&(U=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===Xi||y===hr?U=i.DEPTH_COMPONENT24:y===Dn?U=i.DEPTH_COMPONENT32F:y===cr&&(U=i.DEPTH_COMPONENT16),U}function E(A,y){return g(A)===!0||A.isFramebufferTexture&&A.minFilter!==qt&&A.minFilter!==ln?Math.log2(Math.max(y.width,y.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?y.mipmaps.length:1}function T(A){const y=A.target;y.removeEventListener("dispose",T),R(y),y.isVideoTexture&&h.delete(y)}function w(A){const y=A.target;y.removeEventListener("dispose",w),b(y)}function R(A){const y=n.get(A);if(y.__webglInit===void 0)return;const U=A.source,X=f.get(U);if(X){const q=X[y.__cacheKey];q.usedTimes--,q.usedTimes===0&&S(A),Object.keys(X).length===0&&f.delete(U)}n.remove(A)}function S(A){const y=n.get(A);i.deleteTexture(y.__webglTexture);const U=A.source,X=f.get(U);delete X[y.__cacheKey],o.memory.textures--}function b(A){const y=n.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),n.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let X=0;X<6;X++){if(Array.isArray(y.__webglFramebuffer[X]))for(let q=0;q<y.__webglFramebuffer[X].length;q++)i.deleteFramebuffer(y.__webglFramebuffer[X][q]);else i.deleteFramebuffer(y.__webglFramebuffer[X]);y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer[X])}else{if(Array.isArray(y.__webglFramebuffer))for(let X=0;X<y.__webglFramebuffer.length;X++)i.deleteFramebuffer(y.__webglFramebuffer[X]);else i.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&i.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let X=0;X<y.__webglColorRenderbuffer.length;X++)y.__webglColorRenderbuffer[X]&&i.deleteRenderbuffer(y.__webglColorRenderbuffer[X]);y.__webglDepthRenderbuffer&&i.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const U=A.textures;for(let X=0,q=U.length;X<q;X++){const z=n.get(U[X]);z.__webglTexture&&(i.deleteTexture(z.__webglTexture),o.memory.textures--),n.remove(U[X])}n.remove(A)}let L=0;function D(){L=0}function N(){const A=L;return A>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+s.maxTextures),L+=1,A}function B(A){const y=[];return y.push(A.wrapS),y.push(A.wrapT),y.push(A.wrapR||0),y.push(A.magFilter),y.push(A.minFilter),y.push(A.anisotropy),y.push(A.internalFormat),y.push(A.format),y.push(A.type),y.push(A.generateMipmaps),y.push(A.premultiplyAlpha),y.push(A.flipY),y.push(A.unpackAlignment),y.push(A.colorSpace),y.join()}function O(A,y){const U=n.get(A);if(A.isVideoTexture&&ye(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&U.__version!==A.version){const X=A.image;if(X===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(X.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{j(U,A,y);return}}else A.isExternalTexture&&(U.__webglTexture=A.sourceTexture?A.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,U.__webglTexture,i.TEXTURE0+y)}function V(A,y){const U=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&U.__version!==A.version){j(U,A,y);return}t.bindTexture(i.TEXTURE_2D_ARRAY,U.__webglTexture,i.TEXTURE0+y)}function Z(A,y){const U=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&U.__version!==A.version){j(U,A,y);return}t.bindTexture(i.TEXTURE_3D,U.__webglTexture,i.TEXTURE0+y)}function W(A,y){const U=n.get(A);if(A.version>0&&U.__version!==A.version){se(U,A,y);return}t.bindTexture(i.TEXTURE_CUBE_MAP,U.__webglTexture,i.TEXTURE0+y)}const re={[ii]:i.REPEAT,[Oi]:i.CLAMP_TO_EDGE,[bl]:i.MIRRORED_REPEAT},fe={[qt]:i.NEAREST,[Kd]:i.NEAREST_MIPMAP_NEAREST,[Rr]:i.NEAREST_MIPMAP_LINEAR,[ln]:i.LINEAR,[ua]:i.LINEAR_MIPMAP_NEAREST,[En]:i.LINEAR_MIPMAP_LINEAR},ne={[$d]:i.NEVER,[rp]:i.ALWAYS,[ep]:i.LESS,[ff]:i.LEQUAL,[tp]:i.EQUAL,[sp]:i.GEQUAL,[np]:i.GREATER,[ip]:i.NOTEQUAL};function ze(A,y){if(y.type===Dn&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===ln||y.magFilter===ua||y.magFilter===Rr||y.magFilter===En||y.minFilter===ln||y.minFilter===ua||y.minFilter===Rr||y.minFilter===En)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(A,i.TEXTURE_WRAP_S,re[y.wrapS]),i.texParameteri(A,i.TEXTURE_WRAP_T,re[y.wrapT]),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,re[y.wrapR]),i.texParameteri(A,i.TEXTURE_MAG_FILTER,fe[y.magFilter]),i.texParameteri(A,i.TEXTURE_MIN_FILTER,fe[y.minFilter]),y.compareFunction&&(i.texParameteri(A,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(A,i.TEXTURE_COMPARE_FUNC,ne[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===qt||y.minFilter!==Rr&&y.minFilter!==En||y.type===Dn&&e.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||n.get(y).__currentAnisotropy){const U=e.get("EXT_texture_filter_anisotropic");i.texParameterf(A,U.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,s.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy}}}function He(A,y){let U=!1;A.__webglInit===void 0&&(A.__webglInit=!0,y.addEventListener("dispose",T));const X=y.source;let q=f.get(X);q===void 0&&(q={},f.set(X,q));const z=B(y);if(z!==A.__cacheKey){q[z]===void 0&&(q[z]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,U=!0),q[z].usedTimes++;const de=q[A.__cacheKey];de!==void 0&&(q[A.__cacheKey].usedTimes--,de.usedTimes===0&&S(y)),A.__cacheKey=z,A.__webglTexture=q[z].texture}return U}function Je(A,y,U){return Math.floor(Math.floor(A/U)/y)}function qe(A,y,U,X){const z=A.updateRanges;if(z.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,y.width,y.height,U,X,y.data);else{z.sort((ae,he)=>ae.start-he.start);let de=0;for(let ae=1;ae<z.length;ae++){const he=z[de],Re=z[ae],Ae=he.start+he.count,Se=Je(Re.start,y.width,4),We=Je(he.start,y.width,4);Re.start<=Ae+1&&Se===We&&Je(Re.start+Re.count-1,y.width,4)===Se?he.count=Math.max(he.count,Re.start+Re.count-he.start):(++de,z[de]=Re)}z.length=de+1;const ce=i.getParameter(i.UNPACK_ROW_LENGTH),ue=i.getParameter(i.UNPACK_SKIP_PIXELS),_e=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,y.width);for(let ae=0,he=z.length;ae<he;ae++){const Re=z[ae],Ae=Math.floor(Re.start/4),Se=Math.ceil(Re.count/4),We=Ae%y.width,F=Math.floor(Ae/y.width),me=Se,be=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,We),i.pixelStorei(i.UNPACK_SKIP_ROWS,F),t.texSubImage2D(i.TEXTURE_2D,0,We,F,me,be,U,X,y.data)}A.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,ce),i.pixelStorei(i.UNPACK_SKIP_PIXELS,ue),i.pixelStorei(i.UNPACK_SKIP_ROWS,_e)}}function j(A,y,U){let X=i.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(X=i.TEXTURE_2D_ARRAY),y.isData3DTexture&&(X=i.TEXTURE_3D);const q=He(A,y),z=y.source;t.bindTexture(X,A.__webglTexture,i.TEXTURE0+U);const de=n.get(z);if(z.version!==de.__version||q===!0){t.activeTexture(i.TEXTURE0+U);const ce=st.getPrimaries(st.workingColorSpace),ue=y.colorSpace===mi?null:st.getPrimaries(y.colorSpace),_e=y.colorSpace===mi||ce===ue?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,_e);let ae=x(y.image,!1,s.maxTextureSize);ae=J(y,ae);const he=r.convert(y.format,y.colorSpace),Re=r.convert(y.type);let Ae=_(y.internalFormat,he,Re,y.colorSpace,y.isVideoTexture);ze(X,y);let Se;const We=y.mipmaps,F=y.isVideoTexture!==!0,me=de.__version===void 0||q===!0,be=z.dataReady,Ue=E(y,ae);if(y.isDepthTexture)Ae=v(y.format===fr,y.type),me&&(F?t.texStorage2D(i.TEXTURE_2D,1,Ae,ae.width,ae.height):t.texImage2D(i.TEXTURE_2D,0,Ae,ae.width,ae.height,0,he,Re,null));else if(y.isDataTexture)if(We.length>0){F&&me&&t.texStorage2D(i.TEXTURE_2D,Ue,Ae,We[0].width,We[0].height);for(let ge=0,le=We.length;ge<le;ge++)Se=We[ge],F?be&&t.texSubImage2D(i.TEXTURE_2D,ge,0,0,Se.width,Se.height,he,Re,Se.data):t.texImage2D(i.TEXTURE_2D,ge,Ae,Se.width,Se.height,0,he,Re,Se.data);y.generateMipmaps=!1}else F?(me&&t.texStorage2D(i.TEXTURE_2D,Ue,Ae,ae.width,ae.height),be&&qe(y,ae,he,Re)):t.texImage2D(i.TEXTURE_2D,0,Ae,ae.width,ae.height,0,he,Re,ae.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){F&&me&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ue,Ae,We[0].width,We[0].height,ae.depth);for(let ge=0,le=We.length;ge<le;ge++)if(Se=We[ge],y.format!==cn)if(he!==null)if(F){if(be)if(y.layerUpdates.size>0){const Be=Gh(Se.width,Se.height,y.format,y.type);for(const je of y.layerUpdates){const pt=Se.data.subarray(je*Be/Se.data.BYTES_PER_ELEMENT,(je+1)*Be/Se.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ge,0,0,je,Se.width,Se.height,1,he,pt)}y.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ge,0,0,0,Se.width,Se.height,ae.depth,he,Se.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ge,Ae,Se.width,Se.height,ae.depth,0,Se.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else F?be&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,ge,0,0,0,Se.width,Se.height,ae.depth,he,Re,Se.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ge,Ae,Se.width,Se.height,ae.depth,0,he,Re,Se.data)}else{F&&me&&t.texStorage2D(i.TEXTURE_2D,Ue,Ae,We[0].width,We[0].height);for(let ge=0,le=We.length;ge<le;ge++)Se=We[ge],y.format!==cn?he!==null?F?be&&t.compressedTexSubImage2D(i.TEXTURE_2D,ge,0,0,Se.width,Se.height,he,Se.data):t.compressedTexImage2D(i.TEXTURE_2D,ge,Ae,Se.width,Se.height,0,Se.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):F?be&&t.texSubImage2D(i.TEXTURE_2D,ge,0,0,Se.width,Se.height,he,Re,Se.data):t.texImage2D(i.TEXTURE_2D,ge,Ae,Se.width,Se.height,0,he,Re,Se.data)}else if(y.isDataArrayTexture)if(F){if(me&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ue,Ae,ae.width,ae.height,ae.depth),be)if(y.layerUpdates.size>0){const ge=Gh(ae.width,ae.height,y.format,y.type);for(const le of y.layerUpdates){const Be=ae.data.subarray(le*ge/ae.data.BYTES_PER_ELEMENT,(le+1)*ge/ae.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,le,ae.width,ae.height,1,he,Re,Be)}y.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ae.width,ae.height,ae.depth,he,Re,ae.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Ae,ae.width,ae.height,ae.depth,0,he,Re,ae.data);else if(y.isData3DTexture)F?(me&&t.texStorage3D(i.TEXTURE_3D,Ue,Ae,ae.width,ae.height,ae.depth),be&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ae.width,ae.height,ae.depth,he,Re,ae.data)):t.texImage3D(i.TEXTURE_3D,0,Ae,ae.width,ae.height,ae.depth,0,he,Re,ae.data);else if(y.isFramebufferTexture){if(me)if(F)t.texStorage2D(i.TEXTURE_2D,Ue,Ae,ae.width,ae.height);else{let ge=ae.width,le=ae.height;for(let Be=0;Be<Ue;Be++)t.texImage2D(i.TEXTURE_2D,Be,Ae,ge,le,0,he,Re,null),ge>>=1,le>>=1}}else if(We.length>0){if(F&&me){const ge=Q(We[0]);t.texStorage2D(i.TEXTURE_2D,Ue,Ae,ge.width,ge.height)}for(let ge=0,le=We.length;ge<le;ge++)Se=We[ge],F?be&&t.texSubImage2D(i.TEXTURE_2D,ge,0,0,he,Re,Se):t.texImage2D(i.TEXTURE_2D,ge,Ae,he,Re,Se);y.generateMipmaps=!1}else if(F){if(me){const ge=Q(ae);t.texStorage2D(i.TEXTURE_2D,Ue,Ae,ge.width,ge.height)}be&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,he,Re,ae)}else t.texImage2D(i.TEXTURE_2D,0,Ae,he,Re,ae);g(y)&&p(X),de.__version=z.version,y.onUpdate&&y.onUpdate(y)}A.__version=y.version}function se(A,y,U){if(y.image.length!==6)return;const X=He(A,y),q=y.source;t.bindTexture(i.TEXTURE_CUBE_MAP,A.__webglTexture,i.TEXTURE0+U);const z=n.get(q);if(q.version!==z.__version||X===!0){t.activeTexture(i.TEXTURE0+U);const de=st.getPrimaries(st.workingColorSpace),ce=y.colorSpace===mi?null:st.getPrimaries(y.colorSpace),ue=y.colorSpace===mi||de===ce?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ue);const _e=y.isCompressedTexture||y.image[0].isCompressedTexture,ae=y.image[0]&&y.image[0].isDataTexture,he=[];for(let le=0;le<6;le++)!_e&&!ae?he[le]=x(y.image[le],!0,s.maxCubemapSize):he[le]=ae?y.image[le].image:y.image[le],he[le]=J(y,he[le]);const Re=he[0],Ae=r.convert(y.format,y.colorSpace),Se=r.convert(y.type),We=_(y.internalFormat,Ae,Se,y.colorSpace),F=y.isVideoTexture!==!0,me=z.__version===void 0||X===!0,be=q.dataReady;let Ue=E(y,Re);ze(i.TEXTURE_CUBE_MAP,y);let ge;if(_e){F&&me&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Ue,We,Re.width,Re.height);for(let le=0;le<6;le++){ge=he[le].mipmaps;for(let Be=0;Be<ge.length;Be++){const je=ge[Be];y.format!==cn?Ae!==null?F?be&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,Be,0,0,je.width,je.height,Ae,je.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,Be,We,je.width,je.height,0,je.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):F?be&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,Be,0,0,je.width,je.height,Ae,Se,je.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,Be,We,je.width,je.height,0,Ae,Se,je.data)}}}else{if(ge=y.mipmaps,F&&me){ge.length>0&&Ue++;const le=Q(he[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Ue,We,le.width,le.height)}for(let le=0;le<6;le++)if(ae){F?be&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,0,0,he[le].width,he[le].height,Ae,Se,he[le].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,We,he[le].width,he[le].height,0,Ae,Se,he[le].data);for(let Be=0;Be<ge.length;Be++){const pt=ge[Be].image[le].image;F?be&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,Be+1,0,0,pt.width,pt.height,Ae,Se,pt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,Be+1,We,pt.width,pt.height,0,Ae,Se,pt.data)}}else{F?be&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,0,0,Ae,Se,he[le]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,We,Ae,Se,he[le]);for(let Be=0;Be<ge.length;Be++){const je=ge[Be];F?be&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,Be+1,0,0,Ae,Se,je.image[le]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,Be+1,We,Ae,Se,je.image[le])}}}g(y)&&p(i.TEXTURE_CUBE_MAP),z.__version=q.version,y.onUpdate&&y.onUpdate(y)}A.__version=y.version}function we(A,y,U,X,q,z){const de=r.convert(U.format,U.colorSpace),ce=r.convert(U.type),ue=_(U.internalFormat,de,ce,U.colorSpace),_e=n.get(y),ae=n.get(U);if(ae.__renderTarget=y,!_e.__hasExternalTextures){const he=Math.max(1,y.width>>z),Re=Math.max(1,y.height>>z);q===i.TEXTURE_3D||q===i.TEXTURE_2D_ARRAY?t.texImage3D(q,z,ue,he,Re,y.depth,0,de,ce,null):t.texImage2D(q,z,ue,he,Re,0,de,ce,null)}t.bindFramebuffer(i.FRAMEBUFFER,A),pe(y)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,X,q,ae.__webglTexture,0,Me(y)):(q===i.TEXTURE_2D||q>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&q<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,X,q,ae.__webglTexture,z),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ie(A,y,U){if(i.bindRenderbuffer(i.RENDERBUFFER,A),y.depthBuffer){const X=y.depthTexture,q=X&&X.isDepthTexture?X.type:null,z=v(y.stencilBuffer,q),de=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ce=Me(y);pe(y)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ce,z,y.width,y.height):U?i.renderbufferStorageMultisample(i.RENDERBUFFER,ce,z,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,z,y.width,y.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,de,i.RENDERBUFFER,A)}else{const X=y.textures;for(let q=0;q<X.length;q++){const z=X[q],de=r.convert(z.format,z.colorSpace),ce=r.convert(z.type),ue=_(z.internalFormat,de,ce,z.colorSpace),_e=Me(y);U&&pe(y)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,_e,ue,y.width,y.height):pe(y)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,_e,ue,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,ue,y.width,y.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Le(A,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,A),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const X=n.get(y.depthTexture);X.__renderTarget=y,(!X.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),O(y.depthTexture,0);const q=X.__webglTexture,z=Me(y);if(y.depthTexture.format===ur)pe(y)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,q,0,z):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,q,0);else if(y.depthTexture.format===fr)pe(y)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,q,0,z):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,q,0);else throw new Error("Unknown depthTexture format")}function Ne(A){const y=n.get(A),U=A.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==A.depthTexture){const X=A.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),X){const q=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,X.removeEventListener("dispose",q)};X.addEventListener("dispose",q),y.__depthDisposeCallback=q}y.__boundDepthTexture=X}if(A.depthTexture&&!y.__autoAllocateDepthBuffer){if(U)throw new Error("target.depthTexture not supported in Cube render targets");const X=A.texture.mipmaps;X&&X.length>0?Le(y.__webglFramebuffer[0],A):Le(y.__webglFramebuffer,A)}else if(U){y.__webglDepthbuffer=[];for(let X=0;X<6;X++)if(t.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer[X]),y.__webglDepthbuffer[X]===void 0)y.__webglDepthbuffer[X]=i.createRenderbuffer(),Ie(y.__webglDepthbuffer[X],A,!1);else{const q=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,z=y.__webglDepthbuffer[X];i.bindRenderbuffer(i.RENDERBUFFER,z),i.framebufferRenderbuffer(i.FRAMEBUFFER,q,i.RENDERBUFFER,z)}}else{const X=A.texture.mipmaps;if(X&&X.length>0?t.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=i.createRenderbuffer(),Ie(y.__webglDepthbuffer,A,!1);else{const q=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,z=y.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,z),i.framebufferRenderbuffer(i.FRAMEBUFFER,q,i.RENDERBUFFER,z)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function tt(A,y,U){const X=n.get(A);y!==void 0&&we(X.__webglFramebuffer,A,A.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),U!==void 0&&Ne(A)}function I(A){const y=A.texture,U=n.get(A),X=n.get(y);A.addEventListener("dispose",w);const q=A.textures,z=A.isWebGLCubeRenderTarget===!0,de=q.length>1;if(de||(X.__webglTexture===void 0&&(X.__webglTexture=i.createTexture()),X.__version=y.version,o.memory.textures++),z){U.__webglFramebuffer=[];for(let ce=0;ce<6;ce++)if(y.mipmaps&&y.mipmaps.length>0){U.__webglFramebuffer[ce]=[];for(let ue=0;ue<y.mipmaps.length;ue++)U.__webglFramebuffer[ce][ue]=i.createFramebuffer()}else U.__webglFramebuffer[ce]=i.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){U.__webglFramebuffer=[];for(let ce=0;ce<y.mipmaps.length;ce++)U.__webglFramebuffer[ce]=i.createFramebuffer()}else U.__webglFramebuffer=i.createFramebuffer();if(de)for(let ce=0,ue=q.length;ce<ue;ce++){const _e=n.get(q[ce]);_e.__webglTexture===void 0&&(_e.__webglTexture=i.createTexture(),o.memory.textures++)}if(A.samples>0&&pe(A)===!1){U.__webglMultisampledFramebuffer=i.createFramebuffer(),U.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,U.__webglMultisampledFramebuffer);for(let ce=0;ce<q.length;ce++){const ue=q[ce];U.__webglColorRenderbuffer[ce]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,U.__webglColorRenderbuffer[ce]);const _e=r.convert(ue.format,ue.colorSpace),ae=r.convert(ue.type),he=_(ue.internalFormat,_e,ae,ue.colorSpace,A.isXRRenderTarget===!0),Re=Me(A);i.renderbufferStorageMultisample(i.RENDERBUFFER,Re,he,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ce,i.RENDERBUFFER,U.__webglColorRenderbuffer[ce])}i.bindRenderbuffer(i.RENDERBUFFER,null),A.depthBuffer&&(U.__webglDepthRenderbuffer=i.createRenderbuffer(),Ie(U.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(z){t.bindTexture(i.TEXTURE_CUBE_MAP,X.__webglTexture),ze(i.TEXTURE_CUBE_MAP,y);for(let ce=0;ce<6;ce++)if(y.mipmaps&&y.mipmaps.length>0)for(let ue=0;ue<y.mipmaps.length;ue++)we(U.__webglFramebuffer[ce][ue],A,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,ue);else we(U.__webglFramebuffer[ce],A,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0);g(y)&&p(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(de){for(let ce=0,ue=q.length;ce<ue;ce++){const _e=q[ce],ae=n.get(_e);let he=i.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(he=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(he,ae.__webglTexture),ze(he,_e),we(U.__webglFramebuffer,A,_e,i.COLOR_ATTACHMENT0+ce,he,0),g(_e)&&p(he)}t.unbindTexture()}else{let ce=i.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(ce=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ce,X.__webglTexture),ze(ce,y),y.mipmaps&&y.mipmaps.length>0)for(let ue=0;ue<y.mipmaps.length;ue++)we(U.__webglFramebuffer[ue],A,y,i.COLOR_ATTACHMENT0,ce,ue);else we(U.__webglFramebuffer,A,y,i.COLOR_ATTACHMENT0,ce,0);g(y)&&p(ce),t.unbindTexture()}A.depthBuffer&&Ne(A)}function oe(A){const y=A.textures;for(let U=0,X=y.length;U<X;U++){const q=y[U];if(g(q)){const z=M(A),de=n.get(q).__webglTexture;t.bindTexture(z,de),p(z),t.unbindTexture()}}}const ie=[],ee=[];function te(A){if(A.samples>0){if(pe(A)===!1){const y=A.textures,U=A.width,X=A.height;let q=i.COLOR_BUFFER_BIT;const z=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,de=n.get(A),ce=y.length>1;if(ce)for(let _e=0;_e<y.length;_e++)t.bindFramebuffer(i.FRAMEBUFFER,de.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+_e,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,de.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+_e,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,de.__webglMultisampledFramebuffer);const ue=A.texture.mipmaps;ue&&ue.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,de.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,de.__webglFramebuffer);for(let _e=0;_e<y.length;_e++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(q|=i.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(q|=i.STENCIL_BUFFER_BIT)),ce){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,de.__webglColorRenderbuffer[_e]);const ae=n.get(y[_e]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ae,0)}i.blitFramebuffer(0,0,U,X,0,0,U,X,q,i.NEAREST),l===!0&&(ie.length=0,ee.length=0,ie.push(i.COLOR_ATTACHMENT0+_e),A.depthBuffer&&A.resolveDepthBuffer===!1&&(ie.push(z),ee.push(z),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,ee)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ie))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ce)for(let _e=0;_e<y.length;_e++){t.bindFramebuffer(i.FRAMEBUFFER,de.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+_e,i.RENDERBUFFER,de.__webglColorRenderbuffer[_e]);const ae=n.get(y[_e]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,de.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+_e,i.TEXTURE_2D,ae,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,de.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&l){const y=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[y])}}}function Me(A){return Math.min(s.maxSamples,A.samples)}function pe(A){const y=n.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function ye(A){const y=o.render.frame;h.get(A)!==y&&(h.set(A,y),A.update())}function J(A,y){const U=A.colorSpace,X=A.format,q=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||U!==Cs&&U!==mi&&(st.getTransfer(U)===ht?(X!==cn||q!==Fn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",U)),y}function Q(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=N,this.resetTextureUnits=D,this.setTexture2D=O,this.setTexture2DArray=V,this.setTexture3D=Z,this.setTextureCube=W,this.rebindTextures=tt,this.setupRenderTarget=I,this.updateRenderTargetMipmap=oe,this.updateMultisampleRenderTarget=te,this.setupDepthRenderbuffer=Ne,this.setupFrameBufferTexture=we,this.useMultisampledRTT=pe}function yv(i,e){function t(n,s=mi){let r;const o=st.getTransfer(s);if(n===Fn)return i.UNSIGNED_BYTE;if(n===yc)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Sc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===of)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===af)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===sf)return i.BYTE;if(n===rf)return i.SHORT;if(n===cr)return i.UNSIGNED_SHORT;if(n===Mc)return i.INT;if(n===Xi)return i.UNSIGNED_INT;if(n===Dn)return i.FLOAT;if(n===Tn)return i.HALF_FLOAT;if(n===lf)return i.ALPHA;if(n===cf)return i.RGB;if(n===cn)return i.RGBA;if(n===ur)return i.DEPTH_COMPONENT;if(n===fr)return i.DEPTH_STENCIL;if(n===bc)return i.RED;if(n===wc)return i.RED_INTEGER;if(n===hf)return i.RG;if(n===Ec)return i.RG_INTEGER;if(n===Tc)return i.RGBA_INTEGER;if(n===xo||n===vo||n===_o||n===Mo)if(o===ht)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===xo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===vo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===_o)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Mo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===xo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===vo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===_o)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Mo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===wl||n===El||n===Tl||n===Al)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===wl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===El)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Tl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Al)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Cl||n===Rl||n===Pl)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Cl||n===Rl)return o===ht?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Pl)return o===ht?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Ll||n===Dl||n===Il||n===Ul||n===Nl||n===Fl||n===Ol||n===zl||n===Bl||n===kl||n===Hl||n===Gl||n===Vl||n===Wl)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Ll)return o===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Dl)return o===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Il)return o===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ul)return o===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Nl)return o===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Fl)return o===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ol)return o===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===zl)return o===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Bl)return o===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===kl)return o===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Hl)return o===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Gl)return o===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Vl)return o===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Wl)return o===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Xl||n===ql||n===Yl)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Xl)return o===ht?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ql)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Yl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===jl||n===Kl||n===Zl||n===Jl)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===jl)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Kl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Zl)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Jl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===hr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const Sv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,bv=`
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

}`;class wv{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new wf(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new vt({vertexShader:Sv,fragmentShader:bv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new lt(new Rt(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Ev extends Os{constructor(e,t){super();const n=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,f=null,d=null,m=null;const x=typeof XRWebGLBinding<"u",g=new wv,p={},M=t.getContextAttributes();let _=null,v=null;const E=[],T=[],w=new $;let R=null;const S=new Wt;S.viewport=new rt;const b=new Wt;b.viewport=new rt;const L=[S,b],D=new Xm;let N=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let se=E[j];return se===void 0&&(se=new Da,E[j]=se),se.getTargetRaySpace()},this.getControllerGrip=function(j){let se=E[j];return se===void 0&&(se=new Da,E[j]=se),se.getGripSpace()},this.getHand=function(j){let se=E[j];return se===void 0&&(se=new Da,E[j]=se),se.getHandSpace()};function O(j){const se=T.indexOf(j.inputSource);if(se===-1)return;const we=E[se];we!==void 0&&(we.update(j.inputSource,j.frame,c||o),we.dispatchEvent({type:j.type,data:j.inputSource}))}function V(){s.removeEventListener("select",O),s.removeEventListener("selectstart",O),s.removeEventListener("selectend",O),s.removeEventListener("squeeze",O),s.removeEventListener("squeezestart",O),s.removeEventListener("squeezeend",O),s.removeEventListener("end",V),s.removeEventListener("inputsourceschange",Z);for(let j=0;j<E.length;j++){const se=T[j];se!==null&&(T[j]=null,E[j].disconnect(se))}N=null,B=null,g.reset();for(const j in p)delete p[j];e.setRenderTarget(_),d=null,f=null,u=null,s=null,v=null,qe.stop(),n.isPresenting=!1,e.setPixelRatio(R),e.setSize(w.width,w.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){r=j,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){a=j,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(j){c=j},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u===null&&x&&(u=new XRWebGLBinding(s,t)),u},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(j){if(s=j,s!==null){if(_=e.getRenderTarget(),s.addEventListener("select",O),s.addEventListener("selectstart",O),s.addEventListener("selectend",O),s.addEventListener("squeeze",O),s.addEventListener("squeezestart",O),s.addEventListener("squeezeend",O),s.addEventListener("end",V),s.addEventListener("inputsourceschange",Z),M.xrCompatible!==!0&&await t.makeXRCompatible(),R=e.getPixelRatio(),e.getSize(w),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let we=null,Ie=null,Le=null;M.depth&&(Le=M.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,we=M.stencil?fr:ur,Ie=M.stencil?hr:Xi);const Ne={colorFormat:t.RGBA8,depthFormat:Le,scaleFactor:r};u=this.getBinding(),f=u.createProjectionLayer(Ne),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),v=new $t(f.textureWidth,f.textureHeight,{format:cn,type:Fn,depthTexture:new bf(f.textureWidth,f.textureHeight,Ie,void 0,void 0,void 0,void 0,void 0,void 0,we),stencilBuffer:M.stencil,colorSpace:e.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const we={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,t,we),s.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),v=new $t(d.framebufferWidth,d.framebufferHeight,{format:cn,type:Fn,colorSpace:e.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),qe.setContext(s),qe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function Z(j){for(let se=0;se<j.removed.length;se++){const we=j.removed[se],Ie=T.indexOf(we);Ie>=0&&(T[Ie]=null,E[Ie].disconnect(we))}for(let se=0;se<j.added.length;se++){const we=j.added[se];let Ie=T.indexOf(we);if(Ie===-1){for(let Ne=0;Ne<E.length;Ne++)if(Ne>=T.length){T.push(we),Ie=Ne;break}else if(T[Ne]===null){T[Ne]=we,Ie=Ne;break}if(Ie===-1)break}const Le=E[Ie];Le&&Le.connect(we)}}const W=new P,re=new P;function fe(j,se,we){W.setFromMatrixPosition(se.matrixWorld),re.setFromMatrixPosition(we.matrixWorld);const Ie=W.distanceTo(re),Le=se.projectionMatrix.elements,Ne=we.projectionMatrix.elements,tt=Le[14]/(Le[10]-1),I=Le[14]/(Le[10]+1),oe=(Le[9]+1)/Le[5],ie=(Le[9]-1)/Le[5],ee=(Le[8]-1)/Le[0],te=(Ne[8]+1)/Ne[0],Me=tt*ee,pe=tt*te,ye=Ie/(-ee+te),J=ye*-ee;if(se.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(J),j.translateZ(ye),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),Le[10]===-1)j.projectionMatrix.copy(se.projectionMatrix),j.projectionMatrixInverse.copy(se.projectionMatrixInverse);else{const Q=tt+ye,A=I+ye,y=Me-J,U=pe+(Ie-J),X=oe*I/A*Q,q=ie*I/A*Q;j.projectionMatrix.makePerspective(y,U,X,q,Q,A),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function ne(j,se){se===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(se.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(s===null)return;let se=j.near,we=j.far;g.texture!==null&&(g.depthNear>0&&(se=g.depthNear),g.depthFar>0&&(we=g.depthFar)),D.near=b.near=S.near=se,D.far=b.far=S.far=we,(N!==D.near||B!==D.far)&&(s.updateRenderState({depthNear:D.near,depthFar:D.far}),N=D.near,B=D.far),D.layers.mask=j.layers.mask|6,S.layers.mask=D.layers.mask&3,b.layers.mask=D.layers.mask&5;const Ie=j.parent,Le=D.cameras;ne(D,Ie);for(let Ne=0;Ne<Le.length;Ne++)ne(Le[Ne],Ie);Le.length===2?fe(D,S,b):D.projectionMatrix.copy(S.projectionMatrix),ze(j,D,Ie)};function ze(j,se,we){we===null?j.matrix.copy(se.matrixWorld):(j.matrix.copy(we.matrixWorld),j.matrix.invert(),j.matrix.multiply(se.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(se.projectionMatrix),j.projectionMatrixInverse.copy(se.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=Rs*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return D},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(j){l=j,f!==null&&(f.fixedFoveation=j),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=j)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(D)},this.getCameraTexture=function(j){return p[j]};let He=null;function Je(j,se){if(h=se.getViewerPose(c||o),m=se,h!==null){const we=h.views;d!==null&&(e.setRenderTargetFramebuffer(v,d.framebuffer),e.setRenderTarget(v));let Ie=!1;we.length!==D.cameras.length&&(D.cameras.length=0,Ie=!0);for(let I=0;I<we.length;I++){const oe=we[I];let ie=null;if(d!==null)ie=d.getViewport(oe);else{const te=u.getViewSubImage(f,oe);ie=te.viewport,I===0&&(e.setRenderTargetTextures(v,te.colorTexture,te.depthStencilTexture),e.setRenderTarget(v))}let ee=L[I];ee===void 0&&(ee=new Wt,ee.layers.enable(I),ee.viewport=new rt,L[I]=ee),ee.matrix.fromArray(oe.transform.matrix),ee.matrix.decompose(ee.position,ee.quaternion,ee.scale),ee.projectionMatrix.fromArray(oe.projectionMatrix),ee.projectionMatrixInverse.copy(ee.projectionMatrix).invert(),ee.viewport.set(ie.x,ie.y,ie.width,ie.height),I===0&&(D.matrix.copy(ee.matrix),D.matrix.decompose(D.position,D.quaternion,D.scale)),Ie===!0&&D.cameras.push(ee)}const Le=s.enabledFeatures;if(Le&&Le.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){u=n.getBinding();const I=u.getDepthInformation(we[0]);I&&I.isValid&&I.texture&&g.init(I,s.renderState)}if(Le&&Le.includes("camera-access")&&x){e.state.unbindTexture(),u=n.getBinding();for(let I=0;I<we.length;I++){const oe=we[I].camera;if(oe){let ie=p[oe];ie||(ie=new wf,p[oe]=ie);const ee=u.getCameraImage(oe);ie.sourceTexture=ee}}}}for(let we=0;we<E.length;we++){const Ie=T[we],Le=E[we];Ie!==null&&Le!==void 0&&Le.update(Ie,se,c||o)}He&&He(j,se),se.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:se}),m=null}const qe=new Of;qe.setAnimationLoop(Je),this.setAnimationLoop=function(j){He=j},this.dispose=function(){}}}const Ri=new tn,Tv=new Ze;function Av(i,e){function t(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function n(g,p){p.color.getRGB(g.fogColor.value,_f(i)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function s(g,p,M,_,v){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(g,p):p.isMeshToonMaterial?(r(g,p),u(g,p)):p.isMeshPhongMaterial?(r(g,p),h(g,p)):p.isMeshStandardMaterial?(r(g,p),f(g,p),p.isMeshPhysicalMaterial&&d(g,p,v)):p.isMeshMatcapMaterial?(r(g,p),m(g,p)):p.isMeshDepthMaterial?r(g,p):p.isMeshDistanceMaterial?(r(g,p),x(g,p)):p.isMeshNormalMaterial?r(g,p):p.isLineBasicMaterial?(o(g,p),p.isLineDashedMaterial&&a(g,p)):p.isPointsMaterial?l(g,p,M,_):p.isSpriteMaterial?c(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,t(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===Xt&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,t(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===Xt&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,t(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,t(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);const M=e.get(p),_=M.envMap,v=M.envMapRotation;_&&(g.envMap.value=_,Ri.copy(v),Ri.x*=-1,Ri.y*=-1,Ri.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(Ri.y*=-1,Ri.z*=-1),g.envMapRotation.value.setFromMatrix4(Tv.makeRotationFromEuler(Ri)),g.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,g.aoMapTransform))}function o(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform))}function a(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function l(g,p,M,_){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*M,g.scale.value=_*.5,p.map&&(g.map.value=p.map,t(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function c(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function h(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function u(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function f(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function d(g,p,M){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Xt&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=M.texture,g.transmissionSamplerSize.value.set(M.width,M.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function x(g,p){const M=e.get(p).light;g.referencePosition.value.setFromMatrixPosition(M.matrixWorld),g.nearDistance.value=M.shadow.camera.near,g.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Cv(i,e,t,n){let s={},r={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,_){const v=_.program;n.uniformBlockBinding(M,v)}function c(M,_){let v=s[M.id];v===void 0&&(m(M),v=h(M),s[M.id]=v,M.addEventListener("dispose",g));const E=_.program;n.updateUBOMapping(M,E);const T=e.render.frame;r[M.id]!==T&&(f(M),r[M.id]=T)}function h(M){const _=u();M.__bindingPointIndex=_;const v=i.createBuffer(),E=M.__size,T=M.usage;return i.bindBuffer(i.UNIFORM_BUFFER,v),i.bufferData(i.UNIFORM_BUFFER,E,T),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,_,v),v}function u(){for(let M=0;M<a;M++)if(o.indexOf(M)===-1)return o.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(M){const _=s[M.id],v=M.uniforms,E=M.__cache;i.bindBuffer(i.UNIFORM_BUFFER,_);for(let T=0,w=v.length;T<w;T++){const R=Array.isArray(v[T])?v[T]:[v[T]];for(let S=0,b=R.length;S<b;S++){const L=R[S];if(d(L,T,S,E)===!0){const D=L.__offset,N=Array.isArray(L.value)?L.value:[L.value];let B=0;for(let O=0;O<N.length;O++){const V=N[O],Z=x(V);typeof V=="number"||typeof V=="boolean"?(L.__data[0]=V,i.bufferSubData(i.UNIFORM_BUFFER,D+B,L.__data)):V.isMatrix3?(L.__data[0]=V.elements[0],L.__data[1]=V.elements[1],L.__data[2]=V.elements[2],L.__data[3]=0,L.__data[4]=V.elements[3],L.__data[5]=V.elements[4],L.__data[6]=V.elements[5],L.__data[7]=0,L.__data[8]=V.elements[6],L.__data[9]=V.elements[7],L.__data[10]=V.elements[8],L.__data[11]=0):(V.toArray(L.__data,B),B+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,D,L.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(M,_,v,E){const T=M.value,w=_+"_"+v;if(E[w]===void 0)return typeof T=="number"||typeof T=="boolean"?E[w]=T:E[w]=T.clone(),!0;{const R=E[w];if(typeof T=="number"||typeof T=="boolean"){if(R!==T)return E[w]=T,!0}else if(R.equals(T)===!1)return R.copy(T),!0}return!1}function m(M){const _=M.uniforms;let v=0;const E=16;for(let w=0,R=_.length;w<R;w++){const S=Array.isArray(_[w])?_[w]:[_[w]];for(let b=0,L=S.length;b<L;b++){const D=S[b],N=Array.isArray(D.value)?D.value:[D.value];for(let B=0,O=N.length;B<O;B++){const V=N[B],Z=x(V),W=v%E,re=W%Z.boundary,fe=W+re;v+=re,fe!==0&&E-fe<Z.storage&&(v+=E-fe),D.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),D.__offset=v,v+=Z.storage}}}const T=v%E;return T>0&&(v+=E-T),M.__size=v,M.__cache={},this}function x(M){const _={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(_.boundary=4,_.storage=4):M.isVector2?(_.boundary=8,_.storage=8):M.isVector3||M.isColor?(_.boundary=16,_.storage=12):M.isVector4?(_.boundary=16,_.storage=16):M.isMatrix3?(_.boundary=48,_.storage=48):M.isMatrix4?(_.boundary=64,_.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),_}function g(M){const _=M.target;_.removeEventListener("dispose",g);const v=o.indexOf(_.__bindingPointIndex);o.splice(v,1),i.deleteBuffer(s[_.id]),delete s[_.id],delete r[_.id]}function p(){for(const M in s)i.deleteBuffer(s[M]);o=[],s={},r={}}return{bind:l,update:c,dispose:p}}class Rv{constructor(e={}){const{canvas:t=Sp(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=o;const m=new Uint32Array(4),x=new Int32Array(4);let g=null,p=null;const M=[],_=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=vi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const v=this;let E=!1;this._outputColorSpace=xt;let T=0,w=0,R=null,S=-1,b=null;const L=new rt,D=new rt;let N=null;const B=new Oe(0);let O=0,V=t.width,Z=t.height,W=1,re=null,fe=null;const ne=new rt(0,0,V,Z),ze=new rt(0,0,V,Z);let He=!1;const Je=new Lc;let qe=!1,j=!1;const se=new Ze,we=new P,Ie=new rt,Le={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ne=!1;function tt(){return R===null?W:1}let I=n;function oe(C,k){return t.getContext(C,k)}try{const C={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${vc}`),t.addEventListener("webglcontextlost",be,!1),t.addEventListener("webglcontextrestored",Ue,!1),t.addEventListener("webglcontextcreationerror",ge,!1),I===null){const k="webgl2";if(I=oe(k,C),I===null)throw oe(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let ie,ee,te,Me,pe,ye,J,Q,A,y,U,X,q,z,de,ce,ue,_e,ae,he,Re,Ae,Se,We;function F(){ie=new B1(I),ie.init(),Ae=new yv(I,ie),ee=new D1(I,ie,e,Ae),te=new _v(I,ie),ee.reversedDepthBuffer&&f&&te.buffers.depth.setReversed(!0),Me=new G1(I),pe=new ov,ye=new Mv(I,ie,te,pe,ee,Ae,Me),J=new U1(v),Q=new z1(v),A=new jm(I),Se=new P1(I,A),y=new k1(I,A,Me,Se),U=new W1(I,y,A,Me),ae=new V1(I,ee,ye),ce=new I1(pe),X=new rv(v,J,Q,ie,ee,Se,ce),q=new Av(v,pe),z=new lv,de=new pv(ie),_e=new R1(v,J,Q,te,U,d,l),ue=new xv(v,U,ee),We=new Cv(I,Me,ee,te),he=new L1(I,ie,Me),Re=new H1(I,ie,Me),Me.programs=X.programs,v.capabilities=ee,v.extensions=ie,v.properties=pe,v.renderLists=z,v.shadowMap=ue,v.state=te,v.info=Me}F();const me=new Ev(v,I);this.xr=me,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const C=ie.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=ie.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(C){C!==void 0&&(W=C,this.setSize(V,Z,!1))},this.getSize=function(C){return C.set(V,Z)},this.setSize=function(C,k,Y=!0){if(me.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}V=C,Z=k,t.width=Math.floor(C*W),t.height=Math.floor(k*W),Y===!0&&(t.style.width=C+"px",t.style.height=k+"px"),this.setViewport(0,0,C,k)},this.getDrawingBufferSize=function(C){return C.set(V*W,Z*W).floor()},this.setDrawingBufferSize=function(C,k,Y){V=C,Z=k,W=Y,t.width=Math.floor(C*Y),t.height=Math.floor(k*Y),this.setViewport(0,0,C,k)},this.getCurrentViewport=function(C){return C.copy(L)},this.getViewport=function(C){return C.copy(ne)},this.setViewport=function(C,k,Y,K){C.isVector4?ne.set(C.x,C.y,C.z,C.w):ne.set(C,k,Y,K),te.viewport(L.copy(ne).multiplyScalar(W).round())},this.getScissor=function(C){return C.copy(ze)},this.setScissor=function(C,k,Y,K){C.isVector4?ze.set(C.x,C.y,C.z,C.w):ze.set(C,k,Y,K),te.scissor(D.copy(ze).multiplyScalar(W).round())},this.getScissorTest=function(){return He},this.setScissorTest=function(C){te.setScissorTest(He=C)},this.setOpaqueSort=function(C){re=C},this.setTransparentSort=function(C){fe=C},this.getClearColor=function(C){return C.copy(_e.getClearColor())},this.setClearColor=function(){_e.setClearColor(...arguments)},this.getClearAlpha=function(){return _e.getClearAlpha()},this.setClearAlpha=function(){_e.setClearAlpha(...arguments)},this.clear=function(C=!0,k=!0,Y=!0){let K=0;if(C){let G=!1;if(R!==null){const xe=R.texture.format;G=xe===Tc||xe===Ec||xe===wc}if(G){const xe=R.texture.type,Ce=xe===Fn||xe===Xi||xe===cr||xe===hr||xe===yc||xe===Sc,Fe=_e.getClearColor(),De=_e.getClearAlpha(),Xe=Fe.r,Ye=Fe.g,Ge=Fe.b;Ce?(m[0]=Xe,m[1]=Ye,m[2]=Ge,m[3]=De,I.clearBufferuiv(I.COLOR,0,m)):(x[0]=Xe,x[1]=Ye,x[2]=Ge,x[3]=De,I.clearBufferiv(I.COLOR,0,x))}else K|=I.COLOR_BUFFER_BIT}k&&(K|=I.DEPTH_BUFFER_BIT),Y&&(K|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(K)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",be,!1),t.removeEventListener("webglcontextrestored",Ue,!1),t.removeEventListener("webglcontextcreationerror",ge,!1),_e.dispose(),z.dispose(),de.dispose(),pe.dispose(),J.dispose(),Q.dispose(),U.dispose(),Se.dispose(),We.dispose(),X.dispose(),me.dispose(),me.removeEventListener("sessionstart",Cn),me.removeEventListener("sessionend",Zc),Si.stop()};function be(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function Ue(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;const C=Me.autoReset,k=ue.enabled,Y=ue.autoUpdate,K=ue.needsUpdate,G=ue.type;F(),Me.autoReset=C,ue.enabled=k,ue.autoUpdate=Y,ue.needsUpdate=K,ue.type=G}function ge(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function le(C){const k=C.target;k.removeEventListener("dispose",le),Be(k)}function Be(C){je(C),pe.remove(C)}function je(C){const k=pe.get(C).programs;k!==void 0&&(k.forEach(function(Y){X.releaseProgram(Y)}),C.isShaderMaterial&&X.releaseShaderCache(C))}this.renderBufferDirect=function(C,k,Y,K,G,xe){k===null&&(k=Le);const Ce=G.isMesh&&G.matrixWorld.determinant()<0,Fe=Md(C,k,Y,K,G);te.setMaterial(K,Ce);let De=Y.index,Xe=1;if(K.wireframe===!0){if(De=y.getWireframeAttribute(Y),De===void 0)return;Xe=2}const Ye=Y.drawRange,Ge=Y.attributes.position;let nt=Ye.start*Xe,ut=(Ye.start+Ye.count)*Xe;xe!==null&&(nt=Math.max(nt,xe.start*Xe),ut=Math.min(ut,(xe.start+xe.count)*Xe)),De!==null?(nt=Math.max(nt,0),ut=Math.min(ut,De.count)):Ge!=null&&(nt=Math.max(nt,0),ut=Math.min(ut,Ge.count));const bt=ut-nt;if(bt<0||bt===1/0)return;Se.setup(G,K,Fe,Y,De);let gt,dt=he;if(De!==null&&(gt=A.get(De),dt=Re,dt.setIndex(gt)),G.isMesh)K.wireframe===!0?(te.setLineWidth(K.wireframeLinewidth*tt()),dt.setMode(I.LINES)):dt.setMode(I.TRIANGLES);else if(G.isLine){let Ve=K.linewidth;Ve===void 0&&(Ve=1),te.setLineWidth(Ve*tt()),G.isLineSegments?dt.setMode(I.LINES):G.isLineLoop?dt.setMode(I.LINE_LOOP):dt.setMode(I.LINE_STRIP)}else G.isPoints?dt.setMode(I.POINTS):G.isSprite&&dt.setMode(I.TRIANGLES);if(G.isBatchedMesh)if(G._multiDrawInstances!==null)pr("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),dt.renderMultiDrawInstances(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount,G._multiDrawInstances);else if(ie.get("WEBGL_multi_draw"))dt.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{const Ve=G._multiDrawStarts,Mt=G._multiDrawCounts,ot=G._multiDrawCount,sn=De?A.get(De).bytesPerElement:1,$i=pe.get(K).currentProgram.getUniforms();for(let rn=0;rn<ot;rn++)$i.setValue(I,"_gl_DrawID",rn),dt.render(Ve[rn]/sn,Mt[rn])}else if(G.isInstancedMesh)dt.renderInstances(nt,bt,G.count);else if(Y.isInstancedBufferGeometry){const Ve=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,Mt=Math.min(Y.instanceCount,Ve);dt.renderInstances(nt,bt,Mt)}else dt.render(nt,bt)};function pt(C,k,Y){C.transparent===!0&&C.side===Ot&&C.forceSinglePass===!1?(C.side=Xt,C.needsUpdate=!0,Cr(C,k,Y),C.side=ni,C.needsUpdate=!0,Cr(C,k,Y),C.side=Ot):Cr(C,k,Y)}this.compile=function(C,k,Y=null){Y===null&&(Y=C),p=de.get(Y),p.init(k),_.push(p),Y.traverseVisible(function(G){G.isLight&&G.layers.test(k.layers)&&(p.pushLight(G),G.castShadow&&p.pushShadow(G))}),C!==Y&&C.traverseVisible(function(G){G.isLight&&G.layers.test(k.layers)&&(p.pushLight(G),G.castShadow&&p.pushShadow(G))}),p.setupLights();const K=new Set;return C.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;const xe=G.material;if(xe)if(Array.isArray(xe))for(let Ce=0;Ce<xe.length;Ce++){const Fe=xe[Ce];pt(Fe,Y,G),K.add(Fe)}else pt(xe,Y,G),K.add(xe)}),p=_.pop(),K},this.compileAsync=function(C,k,Y=null){const K=this.compile(C,k,Y);return new Promise(G=>{function xe(){if(K.forEach(function(Ce){pe.get(Ce).currentProgram.isReady()&&K.delete(Ce)}),K.size===0){G(C);return}setTimeout(xe,10)}ie.get("KHR_parallel_shader_compile")!==null?xe():setTimeout(xe,10)})};let at=null;function kn(C){at&&at(C)}function Cn(){Si.stop()}function Zc(){Si.start()}const Si=new Of;Si.setAnimationLoop(kn),typeof self<"u"&&Si.setContext(self),this.setAnimationLoop=function(C){at=C,me.setAnimationLoop(C),C===null?Si.stop():Si.start()},me.addEventListener("sessionstart",Cn),me.addEventListener("sessionend",Zc),this.render=function(C,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),me.enabled===!0&&me.isPresenting===!0&&(me.cameraAutoUpdate===!0&&me.updateCamera(k),k=me.getCamera()),C.isScene===!0&&C.onBeforeRender(v,C,k,R),p=de.get(C,_.length),p.init(k),_.push(p),se.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),Je.setFromProjectionMatrix(se,In,k.reversedDepth),j=this.localClippingEnabled,qe=ce.init(this.clippingPlanes,j),g=z.get(C,M.length),g.init(),M.push(g),me.enabled===!0&&me.isPresenting===!0){const xe=v.xr.getDepthSensingMesh();xe!==null&&ca(xe,k,-1/0,v.sortObjects)}ca(C,k,0,v.sortObjects),g.finish(),v.sortObjects===!0&&g.sort(re,fe),Ne=me.enabled===!1||me.isPresenting===!1||me.hasDepthSensing()===!1,Ne&&_e.addToRenderList(g,C),this.info.render.frame++,qe===!0&&ce.beginShadows();const Y=p.state.shadowsArray;ue.render(Y,C,k),qe===!0&&ce.endShadows(),this.info.autoReset===!0&&this.info.reset();const K=g.opaque,G=g.transmissive;if(p.setupLights(),k.isArrayCamera){const xe=k.cameras;if(G.length>0)for(let Ce=0,Fe=xe.length;Ce<Fe;Ce++){const De=xe[Ce];Qc(K,G,C,De)}Ne&&_e.render(C);for(let Ce=0,Fe=xe.length;Ce<Fe;Ce++){const De=xe[Ce];Jc(g,C,De,De.viewport)}}else G.length>0&&Qc(K,G,C,k),Ne&&_e.render(C),Jc(g,C,k);R!==null&&w===0&&(ye.updateMultisampleRenderTarget(R),ye.updateRenderTargetMipmap(R)),C.isScene===!0&&C.onAfterRender(v,C,k),Se.resetDefaultState(),S=-1,b=null,_.pop(),_.length>0?(p=_[_.length-1],qe===!0&&ce.setGlobalState(v.clippingPlanes,p.state.camera)):p=null,M.pop(),M.length>0?g=M[M.length-1]:g=null};function ca(C,k,Y,K){if(C.visible===!1)return;if(C.layers.test(k.layers)){if(C.isGroup)Y=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(k);else if(C.isLight)p.pushLight(C),C.castShadow&&p.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||Je.intersectsSprite(C)){K&&Ie.setFromMatrixPosition(C.matrixWorld).applyMatrix4(se);const Ce=U.update(C),Fe=C.material;Fe.visible&&g.push(C,Ce,Fe,Y,Ie.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||Je.intersectsObject(C))){const Ce=U.update(C),Fe=C.material;if(K&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),Ie.copy(C.boundingSphere.center)):(Ce.boundingSphere===null&&Ce.computeBoundingSphere(),Ie.copy(Ce.boundingSphere.center)),Ie.applyMatrix4(C.matrixWorld).applyMatrix4(se)),Array.isArray(Fe)){const De=Ce.groups;for(let Xe=0,Ye=De.length;Xe<Ye;Xe++){const Ge=De[Xe],nt=Fe[Ge.materialIndex];nt&&nt.visible&&g.push(C,Ce,nt,Y,Ie.z,Ge)}}else Fe.visible&&g.push(C,Ce,Fe,Y,Ie.z,null)}}const xe=C.children;for(let Ce=0,Fe=xe.length;Ce<Fe;Ce++)ca(xe[Ce],k,Y,K)}function Jc(C,k,Y,K){const G=C.opaque,xe=C.transmissive,Ce=C.transparent;p.setupLightsView(Y),qe===!0&&ce.setGlobalState(v.clippingPlanes,Y),K&&te.viewport(L.copy(K)),G.length>0&&Ar(G,k,Y),xe.length>0&&Ar(xe,k,Y),Ce.length>0&&Ar(Ce,k,Y),te.buffers.depth.setTest(!0),te.buffers.depth.setMask(!0),te.buffers.color.setMask(!0),te.setPolygonOffset(!1)}function Qc(C,k,Y,K){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[K.id]===void 0&&(p.state.transmissionRenderTarget[K.id]=new $t(1,1,{generateMipmaps:!0,type:ie.has("EXT_color_buffer_half_float")||ie.has("EXT_color_buffer_float")?Tn:Fn,minFilter:En,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:st.workingColorSpace}));const xe=p.state.transmissionRenderTarget[K.id],Ce=K.viewport||L;xe.setSize(Ce.z*v.transmissionResolutionScale,Ce.w*v.transmissionResolutionScale);const Fe=v.getRenderTarget(),De=v.getActiveCubeFace(),Xe=v.getActiveMipmapLevel();v.setRenderTarget(xe),v.getClearColor(B),O=v.getClearAlpha(),O<1&&v.setClearColor(16777215,.5),v.clear(),Ne&&_e.render(Y);const Ye=v.toneMapping;v.toneMapping=vi;const Ge=K.viewport;if(K.viewport!==void 0&&(K.viewport=void 0),p.setupLightsView(K),qe===!0&&ce.setGlobalState(v.clippingPlanes,K),Ar(C,Y,K),ye.updateMultisampleRenderTarget(xe),ye.updateRenderTargetMipmap(xe),ie.has("WEBGL_multisampled_render_to_texture")===!1){let nt=!1;for(let ut=0,bt=k.length;ut<bt;ut++){const gt=k[ut],dt=gt.object,Ve=gt.geometry,Mt=gt.material,ot=gt.group;if(Mt.side===Ot&&dt.layers.test(K.layers)){const sn=Mt.side;Mt.side=Xt,Mt.needsUpdate=!0,$c(dt,Y,K,Ve,Mt,ot),Mt.side=sn,Mt.needsUpdate=!0,nt=!0}}nt===!0&&(ye.updateMultisampleRenderTarget(xe),ye.updateRenderTargetMipmap(xe))}v.setRenderTarget(Fe,De,Xe),v.setClearColor(B,O),Ge!==void 0&&(K.viewport=Ge),v.toneMapping=Ye}function Ar(C,k,Y){const K=k.isScene===!0?k.overrideMaterial:null;for(let G=0,xe=C.length;G<xe;G++){const Ce=C[G],Fe=Ce.object,De=Ce.geometry,Xe=Ce.group;let Ye=Ce.material;Ye.allowOverride===!0&&K!==null&&(Ye=K),Fe.layers.test(Y.layers)&&$c(Fe,k,Y,De,Ye,Xe)}}function $c(C,k,Y,K,G,xe){C.onBeforeRender(v,k,Y,K,G,xe),C.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),G.onBeforeRender(v,k,Y,K,C,xe),G.transparent===!0&&G.side===Ot&&G.forceSinglePass===!1?(G.side=Xt,G.needsUpdate=!0,v.renderBufferDirect(Y,k,K,G,C,xe),G.side=ni,G.needsUpdate=!0,v.renderBufferDirect(Y,k,K,G,C,xe),G.side=Ot):v.renderBufferDirect(Y,k,K,G,C,xe),C.onAfterRender(v,k,Y,K,G,xe)}function Cr(C,k,Y){k.isScene!==!0&&(k=Le);const K=pe.get(C),G=p.state.lights,xe=p.state.shadowsArray,Ce=G.state.version,Fe=X.getParameters(C,G.state,xe,k,Y),De=X.getProgramCacheKey(Fe);let Xe=K.programs;K.environment=C.isMeshStandardMaterial?k.environment:null,K.fog=k.fog,K.envMap=(C.isMeshStandardMaterial?Q:J).get(C.envMap||K.environment),K.envMapRotation=K.environment!==null&&C.envMap===null?k.environmentRotation:C.envMapRotation,Xe===void 0&&(C.addEventListener("dispose",le),Xe=new Map,K.programs=Xe);let Ye=Xe.get(De);if(Ye!==void 0){if(K.currentProgram===Ye&&K.lightsStateVersion===Ce)return th(C,Fe),Ye}else Fe.uniforms=X.getUniforms(C),C.onBeforeCompile(Fe,v),Ye=X.acquireProgram(Fe,De),Xe.set(De,Ye),K.uniforms=Fe.uniforms;const Ge=K.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Ge.clippingPlanes=ce.uniform),th(C,Fe),K.needsLights=Sd(C),K.lightsStateVersion=Ce,K.needsLights&&(Ge.ambientLightColor.value=G.state.ambient,Ge.lightProbe.value=G.state.probe,Ge.directionalLights.value=G.state.directional,Ge.directionalLightShadows.value=G.state.directionalShadow,Ge.spotLights.value=G.state.spot,Ge.spotLightShadows.value=G.state.spotShadow,Ge.rectAreaLights.value=G.state.rectArea,Ge.ltc_1.value=G.state.rectAreaLTC1,Ge.ltc_2.value=G.state.rectAreaLTC2,Ge.pointLights.value=G.state.point,Ge.pointLightShadows.value=G.state.pointShadow,Ge.hemisphereLights.value=G.state.hemi,Ge.directionalShadowMap.value=G.state.directionalShadowMap,Ge.directionalShadowMatrix.value=G.state.directionalShadowMatrix,Ge.spotShadowMap.value=G.state.spotShadowMap,Ge.spotLightMatrix.value=G.state.spotLightMatrix,Ge.spotLightMap.value=G.state.spotLightMap,Ge.pointShadowMap.value=G.state.pointShadowMap,Ge.pointShadowMatrix.value=G.state.pointShadowMatrix),K.currentProgram=Ye,K.uniformsList=null,Ye}function eh(C){if(C.uniformsList===null){const k=C.currentProgram.getUniforms();C.uniformsList=yo.seqWithValue(k.seq,C.uniforms)}return C.uniformsList}function th(C,k){const Y=pe.get(C);Y.outputColorSpace=k.outputColorSpace,Y.batching=k.batching,Y.batchingColor=k.batchingColor,Y.instancing=k.instancing,Y.instancingColor=k.instancingColor,Y.instancingMorph=k.instancingMorph,Y.skinning=k.skinning,Y.morphTargets=k.morphTargets,Y.morphNormals=k.morphNormals,Y.morphColors=k.morphColors,Y.morphTargetsCount=k.morphTargetsCount,Y.numClippingPlanes=k.numClippingPlanes,Y.numIntersection=k.numClipIntersection,Y.vertexAlphas=k.vertexAlphas,Y.vertexTangents=k.vertexTangents,Y.toneMapping=k.toneMapping}function Md(C,k,Y,K,G){k.isScene!==!0&&(k=Le),ye.resetTextureUnits();const xe=k.fog,Ce=K.isMeshStandardMaterial?k.environment:null,Fe=R===null?v.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:Cs,De=(K.isMeshStandardMaterial?Q:J).get(K.envMap||Ce),Xe=K.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,Ye=!!Y.attributes.tangent&&(!!K.normalMap||K.anisotropy>0),Ge=!!Y.morphAttributes.position,nt=!!Y.morphAttributes.normal,ut=!!Y.morphAttributes.color;let bt=vi;K.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(bt=v.toneMapping);const gt=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,dt=gt!==void 0?gt.length:0,Ve=pe.get(K),Mt=p.state.lights;if(qe===!0&&(j===!0||C!==b)){const kt=C===b&&K.id===S;ce.setState(K,C,kt)}let ot=!1;K.version===Ve.__version?(Ve.needsLights&&Ve.lightsStateVersion!==Mt.state.version||Ve.outputColorSpace!==Fe||G.isBatchedMesh&&Ve.batching===!1||!G.isBatchedMesh&&Ve.batching===!0||G.isBatchedMesh&&Ve.batchingColor===!0&&G.colorTexture===null||G.isBatchedMesh&&Ve.batchingColor===!1&&G.colorTexture!==null||G.isInstancedMesh&&Ve.instancing===!1||!G.isInstancedMesh&&Ve.instancing===!0||G.isSkinnedMesh&&Ve.skinning===!1||!G.isSkinnedMesh&&Ve.skinning===!0||G.isInstancedMesh&&Ve.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&Ve.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&Ve.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&Ve.instancingMorph===!1&&G.morphTexture!==null||Ve.envMap!==De||K.fog===!0&&Ve.fog!==xe||Ve.numClippingPlanes!==void 0&&(Ve.numClippingPlanes!==ce.numPlanes||Ve.numIntersection!==ce.numIntersection)||Ve.vertexAlphas!==Xe||Ve.vertexTangents!==Ye||Ve.morphTargets!==Ge||Ve.morphNormals!==nt||Ve.morphColors!==ut||Ve.toneMapping!==bt||Ve.morphTargetsCount!==dt)&&(ot=!0):(ot=!0,Ve.__version=K.version);let sn=Ve.currentProgram;ot===!0&&(sn=Cr(K,k,G));let $i=!1,rn=!1,Hs=!1;const yt=sn.getUniforms(),fn=Ve.uniforms;if(te.useProgram(sn.program)&&($i=!0,rn=!0,Hs=!0),K.id!==S&&(S=K.id,rn=!0),$i||b!==C){te.buffers.depth.getReversed()&&C.reversedDepth!==!0&&(C._reversedDepth=!0,C.updateProjectionMatrix()),yt.setValue(I,"projectionMatrix",C.projectionMatrix),yt.setValue(I,"viewMatrix",C.matrixWorldInverse);const jt=yt.map.cameraPosition;jt!==void 0&&jt.setValue(I,we.setFromMatrixPosition(C.matrixWorld)),ee.logarithmicDepthBuffer&&yt.setValue(I,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(K.isMeshPhongMaterial||K.isMeshToonMaterial||K.isMeshLambertMaterial||K.isMeshBasicMaterial||K.isMeshStandardMaterial||K.isShaderMaterial)&&yt.setValue(I,"isOrthographic",C.isOrthographicCamera===!0),b!==C&&(b=C,rn=!0,Hs=!0)}if(G.isSkinnedMesh){yt.setOptional(I,G,"bindMatrix"),yt.setOptional(I,G,"bindMatrixInverse");const kt=G.skeleton;kt&&(kt.boneTexture===null&&kt.computeBoneTexture(),yt.setValue(I,"boneTexture",kt.boneTexture,ye))}G.isBatchedMesh&&(yt.setOptional(I,G,"batchingTexture"),yt.setValue(I,"batchingTexture",G._matricesTexture,ye),yt.setOptional(I,G,"batchingIdTexture"),yt.setValue(I,"batchingIdTexture",G._indirectTexture,ye),yt.setOptional(I,G,"batchingColorTexture"),G._colorsTexture!==null&&yt.setValue(I,"batchingColorTexture",G._colorsTexture,ye));const dn=Y.morphAttributes;if((dn.position!==void 0||dn.normal!==void 0||dn.color!==void 0)&&ae.update(G,Y,sn),(rn||Ve.receiveShadow!==G.receiveShadow)&&(Ve.receiveShadow=G.receiveShadow,yt.setValue(I,"receiveShadow",G.receiveShadow)),K.isMeshGouraudMaterial&&K.envMap!==null&&(fn.envMap.value=De,fn.flipEnvMap.value=De.isCubeTexture&&De.isRenderTargetTexture===!1?-1:1),K.isMeshStandardMaterial&&K.envMap===null&&k.environment!==null&&(fn.envMapIntensity.value=k.environmentIntensity),rn&&(yt.setValue(I,"toneMappingExposure",v.toneMappingExposure),Ve.needsLights&&yd(fn,Hs),xe&&K.fog===!0&&q.refreshFogUniforms(fn,xe),q.refreshMaterialUniforms(fn,K,W,Z,p.state.transmissionRenderTarget[C.id]),yo.upload(I,eh(Ve),fn,ye)),K.isShaderMaterial&&K.uniformsNeedUpdate===!0&&(yo.upload(I,eh(Ve),fn,ye),K.uniformsNeedUpdate=!1),K.isSpriteMaterial&&yt.setValue(I,"center",G.center),yt.setValue(I,"modelViewMatrix",G.modelViewMatrix),yt.setValue(I,"normalMatrix",G.normalMatrix),yt.setValue(I,"modelMatrix",G.matrixWorld),K.isShaderMaterial||K.isRawShaderMaterial){const kt=K.uniformsGroups;for(let jt=0,ha=kt.length;jt<ha;jt++){const bi=kt[jt];We.update(bi,sn),We.bind(bi,sn)}}return sn}function yd(C,k){C.ambientLightColor.needsUpdate=k,C.lightProbe.needsUpdate=k,C.directionalLights.needsUpdate=k,C.directionalLightShadows.needsUpdate=k,C.pointLights.needsUpdate=k,C.pointLightShadows.needsUpdate=k,C.spotLights.needsUpdate=k,C.spotLightShadows.needsUpdate=k,C.rectAreaLights.needsUpdate=k,C.hemisphereLights.needsUpdate=k}function Sd(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(C,k,Y){const K=pe.get(C);K.__autoAllocateDepthBuffer=C.resolveDepthBuffer===!1,K.__autoAllocateDepthBuffer===!1&&(K.__useRenderToTexture=!1),pe.get(C.texture).__webglTexture=k,pe.get(C.depthTexture).__webglTexture=K.__autoAllocateDepthBuffer?void 0:Y,K.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(C,k){const Y=pe.get(C);Y.__webglFramebuffer=k,Y.__useDefaultFramebuffer=k===void 0};const bd=I.createFramebuffer();this.setRenderTarget=function(C,k=0,Y=0){R=C,T=k,w=Y;let K=!0,G=null,xe=!1,Ce=!1;if(C){const De=pe.get(C);if(De.__useDefaultFramebuffer!==void 0)te.bindFramebuffer(I.FRAMEBUFFER,null),K=!1;else if(De.__webglFramebuffer===void 0)ye.setupRenderTarget(C);else if(De.__hasExternalTextures)ye.rebindTextures(C,pe.get(C.texture).__webglTexture,pe.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const Ge=C.depthTexture;if(De.__boundDepthTexture!==Ge){if(Ge!==null&&pe.has(Ge)&&(C.width!==Ge.image.width||C.height!==Ge.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");ye.setupDepthRenderbuffer(C)}}const Xe=C.texture;(Xe.isData3DTexture||Xe.isDataArrayTexture||Xe.isCompressedArrayTexture)&&(Ce=!0);const Ye=pe.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(Ye[k])?G=Ye[k][Y]:G=Ye[k],xe=!0):C.samples>0&&ye.useMultisampledRTT(C)===!1?G=pe.get(C).__webglMultisampledFramebuffer:Array.isArray(Ye)?G=Ye[Y]:G=Ye,L.copy(C.viewport),D.copy(C.scissor),N=C.scissorTest}else L.copy(ne).multiplyScalar(W).floor(),D.copy(ze).multiplyScalar(W).floor(),N=He;if(Y!==0&&(G=bd),te.bindFramebuffer(I.FRAMEBUFFER,G)&&K&&te.drawBuffers(C,G),te.viewport(L),te.scissor(D),te.setScissorTest(N),xe){const De=pe.get(C.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+k,De.__webglTexture,Y)}else if(Ce){const De=k;for(let Xe=0;Xe<C.textures.length;Xe++){const Ye=pe.get(C.textures[Xe]);I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0+Xe,Ye.__webglTexture,Y,De)}}else if(C!==null&&Y!==0){const De=pe.get(C.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,De.__webglTexture,Y)}S=-1},this.readRenderTargetPixels=function(C,k,Y,K,G,xe,Ce,Fe=0){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let De=pe.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Ce!==void 0&&(De=De[Ce]),De){te.bindFramebuffer(I.FRAMEBUFFER,De);try{const Xe=C.textures[Fe],Ye=Xe.format,Ge=Xe.type;if(!ee.textureFormatReadable(Ye)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ee.textureTypeReadable(Ge)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=C.width-K&&Y>=0&&Y<=C.height-G&&(C.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+Fe),I.readPixels(k,Y,K,G,Ae.convert(Ye),Ae.convert(Ge),xe))}finally{const Xe=R!==null?pe.get(R).__webglFramebuffer:null;te.bindFramebuffer(I.FRAMEBUFFER,Xe)}}},this.readRenderTargetPixelsAsync=async function(C,k,Y,K,G,xe,Ce,Fe=0){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let De=pe.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Ce!==void 0&&(De=De[Ce]),De)if(k>=0&&k<=C.width-K&&Y>=0&&Y<=C.height-G){te.bindFramebuffer(I.FRAMEBUFFER,De);const Xe=C.textures[Fe],Ye=Xe.format,Ge=Xe.type;if(!ee.textureFormatReadable(Ye))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ee.textureTypeReadable(Ge))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const nt=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,nt),I.bufferData(I.PIXEL_PACK_BUFFER,xe.byteLength,I.STREAM_READ),C.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+Fe),I.readPixels(k,Y,K,G,Ae.convert(Ye),Ae.convert(Ge),0);const ut=R!==null?pe.get(R).__webglFramebuffer:null;te.bindFramebuffer(I.FRAMEBUFFER,ut);const bt=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await bp(I,bt,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,nt),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,xe),I.deleteBuffer(nt),I.deleteSync(bt),xe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(C,k=null,Y=0){const K=Math.pow(2,-Y),G=Math.floor(C.image.width*K),xe=Math.floor(C.image.height*K),Ce=k!==null?k.x:0,Fe=k!==null?k.y:0;ye.setTexture2D(C,0),I.copyTexSubImage2D(I.TEXTURE_2D,Y,0,0,Ce,Fe,G,xe),te.unbindTexture()};const wd=I.createFramebuffer(),Ed=I.createFramebuffer();this.copyTextureToTexture=function(C,k,Y=null,K=null,G=0,xe=null){xe===null&&(G!==0?(pr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),xe=G,G=0):xe=0);let Ce,Fe,De,Xe,Ye,Ge,nt,ut,bt;const gt=C.isCompressedTexture?C.mipmaps[xe]:C.image;if(Y!==null)Ce=Y.max.x-Y.min.x,Fe=Y.max.y-Y.min.y,De=Y.isBox3?Y.max.z-Y.min.z:1,Xe=Y.min.x,Ye=Y.min.y,Ge=Y.isBox3?Y.min.z:0;else{const dn=Math.pow(2,-G);Ce=Math.floor(gt.width*dn),Fe=Math.floor(gt.height*dn),C.isDataArrayTexture?De=gt.depth:C.isData3DTexture?De=Math.floor(gt.depth*dn):De=1,Xe=0,Ye=0,Ge=0}K!==null?(nt=K.x,ut=K.y,bt=K.z):(nt=0,ut=0,bt=0);const dt=Ae.convert(k.format),Ve=Ae.convert(k.type);let Mt;k.isData3DTexture?(ye.setTexture3D(k,0),Mt=I.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?(ye.setTexture2DArray(k,0),Mt=I.TEXTURE_2D_ARRAY):(ye.setTexture2D(k,0),Mt=I.TEXTURE_2D),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,k.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,k.unpackAlignment);const ot=I.getParameter(I.UNPACK_ROW_LENGTH),sn=I.getParameter(I.UNPACK_IMAGE_HEIGHT),$i=I.getParameter(I.UNPACK_SKIP_PIXELS),rn=I.getParameter(I.UNPACK_SKIP_ROWS),Hs=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,gt.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,gt.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Xe),I.pixelStorei(I.UNPACK_SKIP_ROWS,Ye),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Ge);const yt=C.isDataArrayTexture||C.isData3DTexture,fn=k.isDataArrayTexture||k.isData3DTexture;if(C.isDepthTexture){const dn=pe.get(C),kt=pe.get(k),jt=pe.get(dn.__renderTarget),ha=pe.get(kt.__renderTarget);te.bindFramebuffer(I.READ_FRAMEBUFFER,jt.__webglFramebuffer),te.bindFramebuffer(I.DRAW_FRAMEBUFFER,ha.__webglFramebuffer);for(let bi=0;bi<De;bi++)yt&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,pe.get(C).__webglTexture,G,Ge+bi),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,pe.get(k).__webglTexture,xe,bt+bi)),I.blitFramebuffer(Xe,Ye,Ce,Fe,nt,ut,Ce,Fe,I.DEPTH_BUFFER_BIT,I.NEAREST);te.bindFramebuffer(I.READ_FRAMEBUFFER,null),te.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(G!==0||C.isRenderTargetTexture||pe.has(C)){const dn=pe.get(C),kt=pe.get(k);te.bindFramebuffer(I.READ_FRAMEBUFFER,wd),te.bindFramebuffer(I.DRAW_FRAMEBUFFER,Ed);for(let jt=0;jt<De;jt++)yt?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,dn.__webglTexture,G,Ge+jt):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,dn.__webglTexture,G),fn?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,kt.__webglTexture,xe,bt+jt):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,kt.__webglTexture,xe),G!==0?I.blitFramebuffer(Xe,Ye,Ce,Fe,nt,ut,Ce,Fe,I.COLOR_BUFFER_BIT,I.NEAREST):fn?I.copyTexSubImage3D(Mt,xe,nt,ut,bt+jt,Xe,Ye,Ce,Fe):I.copyTexSubImage2D(Mt,xe,nt,ut,Xe,Ye,Ce,Fe);te.bindFramebuffer(I.READ_FRAMEBUFFER,null),te.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else fn?C.isDataTexture||C.isData3DTexture?I.texSubImage3D(Mt,xe,nt,ut,bt,Ce,Fe,De,dt,Ve,gt.data):k.isCompressedArrayTexture?I.compressedTexSubImage3D(Mt,xe,nt,ut,bt,Ce,Fe,De,dt,gt.data):I.texSubImage3D(Mt,xe,nt,ut,bt,Ce,Fe,De,dt,Ve,gt):C.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,xe,nt,ut,Ce,Fe,dt,Ve,gt.data):C.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,xe,nt,ut,gt.width,gt.height,dt,gt.data):I.texSubImage2D(I.TEXTURE_2D,xe,nt,ut,Ce,Fe,dt,Ve,gt);I.pixelStorei(I.UNPACK_ROW_LENGTH,ot),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,sn),I.pixelStorei(I.UNPACK_SKIP_PIXELS,$i),I.pixelStorei(I.UNPACK_SKIP_ROWS,rn),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Hs),xe===0&&k.generateMipmaps&&I.generateMipmap(Mt),te.unbindTexture()},this.initRenderTarget=function(C){pe.get(C).__webglFramebuffer===void 0&&ye.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?ye.setTextureCube(C,0):C.isData3DTexture?ye.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?ye.setTexture2DArray(C,0):ye.setTexture2D(C,0),te.unbindTexture()},this.resetState=function(){T=0,w=0,R=null,te.reset(),Se.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return In}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=st._getDrawingBufferColorSpace(e),t.unpackColorSpace=st._getUnpackColorSpace()}}class Qi{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const Pv=new kc(-1,1,1,-1,0,1);class Lv extends it{constructor(){super(),this.setAttribute("position",new ke([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new ke([0,2,0,0,2,0],2))}}const Dv=new Lv;class $o{constructor(e){this._mesh=new lt(Dv,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,Pv)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class Iv extends Qi{constructor(e,t,n=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Oe}render(e,t,n){const s=e.autoClear;e.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=s}}const So={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class Gf extends Qi{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof vt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Un.clone(e.uniforms),this.material=new vt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new $o(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class du extends Qi{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){const s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}}class Uv extends Qi{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class Nv{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const n=e.getSize(new $);this._width=n.width,this._height=n.height,t=new $t(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Tn}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Gf(So),this.copyPass.material.blending=Jn,this.clock=new qm}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let n=!1;for(let s=0,r=this.passes.length;s<r;s++){const o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),o.needsSwap){if(n){const a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}du!==void 0&&(o instanceof du?n=!0:o instanceof Uv&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new $);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}const Fv={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Oe(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class Ds extends Qi{constructor(e,t=1,n,s){super(),this.strength=t,this.radius=n,this.threshold=s,this.resolution=e!==void 0?new $(e.x,e.y):new $(256,256),this.clearColor=new Oe(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new $t(r,o,{type:Tn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){const u=new $t(r,o,{type:Tn});u.texture.name="UnrealBloomPass.h"+h,u.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(u);const f=new $t(r,o,{type:Tn});f.texture.name="UnrealBloomPass.v"+h,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),r=Math.round(r/2),o=Math.round(o/2)}const a=Fv;this.highPassUniforms=Un.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new vt({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];const l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new $(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new P(1,1,1),new P(1,1,1),new P(1,1,1),new P(1,1,1),new P(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=Un.clone(So.uniforms),this.blendMaterial=new vt({uniforms:this.copyUniforms,vertexShader:So.vertexShader,fragmentShader:So.fragmentShader,blending:Wi,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new Oe,this._oldClearAlpha=1,this._basic=new gn,this._fsQuad=new $o(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new $(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(e,t,n,s,r){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();const o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=Ds.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=Ds.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this._fsQuad.render(e),a=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(n),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=o}_getSeparableBlurMaterial(e){const t=[];for(let n=0;n<e;n++)t.push(.39894*Math.exp(-.5*n*n/(e*e))/e);return new vt({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new $(.5,.5)},direction:{value:new $(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
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
				}`})}_getCompositeMaterial(e){return new vt({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}}Ds.BlurDirectionX=new $(1,0);Ds.BlurDirectionY=new $(0,1);const Ov={name:"FXAAShader",uniforms:{tDiffuse:{value:null},resolution:{value:new $(1/1024,1/512)}},vertexShader:`

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

		}`};class zv extends Gf{constructor(){super(Ov)}setSize(e,t){this.material.uniforms.resolution.value.set(1/e,1/t)}}function Bv(){const i=new zv;return i.material.fragmentShader=i.material.fragmentShader.replace("float _SubpixelBlending = 1.0;","float _SubpixelBlending = 0.35;"),i}function kv(i){const e=new Nv(i),t=i.getContext(),n=t.getInternalformatParameter(t.RENDERBUFFER,t.RGBA16F,t.SAMPLES)||[],s=2,r=Math.max(0,...Array.from(n).filter(o=>o<=s));return e.renderTarget1.samples=e.renderTarget2.samples=r,e}function Hv(i,e){const t=new Ds(new $(i,e),.32,.36,1.1),n=t.materialHighPassFilter;return n.fragmentShader=`
    float finiteBloomChannel(float value){
      return value>=0.0 ? min(value,64.0) : 0.0;
    }
    ${n.fragmentShader}`.replace("vec4 texel = texture2D( tDiffuse, vUv );",`vec4 texel = texture2D( tDiffuse, vUv );
       texel=vec4(finiteBloomChannel(texel.r),finiteBloomChannel(texel.g),finiteBloomChannel(texel.b),1.0);`),t}const ro={defines:{SMAA_THRESHOLD:"0.1"},uniforms:{tDiffuse:{value:null},resolution:{value:new $(1/1024,1/512)}},vertexShader:`

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

		}`},oo={defines:{SMAA_MAX_SEARCH_STEPS:"8",SMAA_AREATEX_MAX_DISTANCE:"16",SMAA_AREATEX_PIXEL_SIZE:"( 1.0 / vec2( 160.0, 560.0 ) )",SMAA_AREATEX_SUBTEX_SIZE:"( 1.0 / 7.0 )"},uniforms:{tDiffuse:{value:null},tArea:{value:null},tSearch:{value:null},resolution:{value:new $(1/1024,1/512)}},vertexShader:`

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

		}`},Ya={uniforms:{tDiffuse:{value:null},tColor:{value:null},resolution:{value:new $(1/1024,1/512)}},vertexShader:`

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

		}`};class Gv extends Qi{constructor(){super(),this._edgesRT=new $t(1,1,{depthBuffer:!1,type:Tn}),this._edgesRT.texture.name="SMAAPass.edges",this._weightsRT=new $t(1,1,{depthBuffer:!1,type:Tn}),this._weightsRT.texture.name="SMAAPass.weights";const e=this,t=new Image;t.src=this._getAreaTexture(),t.onload=function(){e._areaTexture.needsUpdate=!0},this._areaTexture=new Ct,this._areaTexture.name="SMAAPass.area",this._areaTexture.image=t,this._areaTexture.minFilter=ln,this._areaTexture.generateMipmaps=!1,this._areaTexture.flipY=!1;const n=new Image;n.src=this._getSearchTexture(),n.onload=function(){e._searchTexture.needsUpdate=!0},this._searchTexture=new Ct,this._searchTexture.name="SMAAPass.search",this._searchTexture.image=n,this._searchTexture.magFilter=qt,this._searchTexture.minFilter=qt,this._searchTexture.generateMipmaps=!1,this._searchTexture.flipY=!1,this._uniformsEdges=Un.clone(ro.uniforms),this._materialEdges=new vt({defines:Object.assign({},ro.defines),uniforms:this._uniformsEdges,vertexShader:ro.vertexShader,fragmentShader:ro.fragmentShader}),this._uniformsWeights=Un.clone(oo.uniforms),this._uniformsWeights.tDiffuse.value=this._edgesRT.texture,this._uniformsWeights.tArea.value=this._areaTexture,this._uniformsWeights.tSearch.value=this._searchTexture,this._materialWeights=new vt({defines:Object.assign({},oo.defines),uniforms:this._uniformsWeights,vertexShader:oo.vertexShader,fragmentShader:oo.fragmentShader}),this._uniformsBlend=Un.clone(Ya.uniforms),this._uniformsBlend.tDiffuse.value=this._weightsRT.texture,this._materialBlend=new vt({uniforms:this._uniformsBlend,vertexShader:Ya.vertexShader,fragmentShader:Ya.fragmentShader}),this._fsQuad=new $o(null)}render(e,t,n){this._uniformsEdges.tDiffuse.value=n.texture,this._fsQuad.material=this._materialEdges,e.setRenderTarget(this._edgesRT),this.clear&&e.clear(),this._fsQuad.render(e),this._fsQuad.material=this._materialWeights,e.setRenderTarget(this._weightsRT),this.clear&&e.clear(),this._fsQuad.render(e),this._uniformsBlend.tColor.value=n.texture,this._fsQuad.material=this._materialBlend,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(),this._fsQuad.render(e))}setSize(e,t){this._edgesRT.setSize(e,t),this._weightsRT.setSize(e,t),this._materialEdges.uniforms.resolution.value.set(1/e,1/t),this._materialWeights.uniforms.resolution.value.set(1/e,1/t),this._materialBlend.uniforms.resolution.value.set(1/e,1/t)}dispose(){this._edgesRT.dispose(),this._weightsRT.dispose(),this._areaTexture.dispose(),this._searchTexture.dispose(),this._materialEdges.dispose(),this._materialWeights.dispose(),this._materialBlend.dispose(),this._fsQuad.dispose()}_getAreaTexture(){return"data:image/png;base64,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"}_getSearchTexture(){return"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEIAAAAhCAAAAABIXyLAAAAAOElEQVRIx2NgGAWjYBSMglEwEICREYRgFBZBqDCSLA2MGPUIVQETE9iNUAqLR5gIeoQKRgwXjwAAGn4AtaFeYLEAAAAASUVORK5CYII="}}const ao={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};class Vv extends Qi{constructor(){super(),this.uniforms=Un.clone(ao.uniforms),this.material=new Dm({name:ao.name,uniforms:this.uniforms,vertexShader:ao.vertexShader,fragmentShader:ao.fragmentShader}),this._fsQuad=new $o(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},st.getTransfer(this._outputColorSpace)===ht&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Zu?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Ju?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Qu?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===_c?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===ef?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===tf?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===$u&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}const pu={lat:13.733,lon:100.502};function Io(i,e){return{x:(i-pu.lon)*108140,z:(pu.lat-e)*111320}}function Ut(i,e,t){return Math.max(e,Math.min(t,i))}const lo=(i,e,t)=>i+(e-i)*t;function vr(i,e){return Math.atan2(Math.sin(i-e),Math.cos(i-e))}class mu{constructor(e){this.points=e.map(t=>({...Io(t[0],t[1]),width:t[2]||310})),this.length=0,this.segments=this.points.slice(1).map((t,n)=>{const s=this.points[n],r=t.x-s.x,o=t.z-s.z,a=Math.hypot(r,o),l={a:s,b:t,dx:r,dz:o,len:a,start:this.length};return this.length+=a,l})}sample(e,t=0){const n=Ut(e,0,this.length);let s=0,r=this.segments.length-1;for(;s<r;){const h=s+r>>1,u=this.segments[h];u.start+u.len<n?s=h+1:r=h}const o=this.segments[s],a=Ut((n-o.start)/o.len,0,1),l=-o.dz/o.len,c=o.dx/o.len;return{x:lo(o.a.x,o.b.x,a)+l*t,z:lo(o.a.z,o.b.z,a)+c*t,heading:Math.atan2(-o.dx,-o.dz),nx:l,nz:c,width:lo(o.a.width,o.b.width,a),distance:n}}nearest(e,t){let n={distanceSquared:1/0};for(const s of this.segments){const r=Ut(((e-s.a.x)*s.dx+(t-s.a.z)*s.dz)/(s.len*s.len),0,1),o=s.a.x+s.dx*r,a=s.a.z+s.dz*r,l=(e-o)**2+(t-a)**2;if(l<n.distanceSquared){const c=-s.dz/s.len,h=s.dx/s.len;n={x:o,z:a,nx:c,nz:h,offset:(e-o)*c+(t-a)*h,distance:s.start+r*s.len,width:lo(s.a.width,s.b.width,r),heading:Math.atan2(-s.dx,-s.dz),distanceSquared:l}}}return n}constrain(e,t=4){const n=this.nearest(e.x,e.z),s=n.width/2-t,r=Math.abs(n.offset)-s;let o=0;if(r>0){const l=Math.sign(n.offset),c=n.nx*l,h=n.nz*l;e.x-=c*r,e.z-=h*r;const u=e.vx*c+e.vz*h;u>0&&(o=u,e.vx-=c*u*1.25,e.vz-=h*u*1.25)}const a=n.distance<1?this.sample(0):n.distance>this.length-1?this.sample(this.length):null;if(a){const l={x:-Math.sin(a.heading),z:-Math.cos(a.heading)},c=n.distance<1?-1:1,h=(e.x-a.x)*l.x+(e.z-a.z)*l.z;if(h*c>0){e.x-=l.x*h,e.z-=l.z*h;const u=(e.vx*l.x+e.vz*l.z)*c;u>0&&(e.vx-=l.x*c*u*1.1,e.vz-=l.z*c*u*1.1,o=Math.max(o,u))}}return o}}const Wv=[{id:"arun",name:"Wat Arun",thai:"วัดอรุณ",lon:100.49015,lat:13.74369,side:1},{id:"tien",name:"Tha Tien",thai:"ท่าเตียน",lon:100.4904,lat:13.746,side:-1},{id:"kalaya",name:"Wat Kalayanamit",thai:"วัดกัลยาณมิตร",lon:100.49378,lat:13.73985,side:1},{id:"flower",name:"Flower Market",thai:"ปากคลองตลาด",lon:100.49656,lat:13.74073,side:-1},{id:"memorial",name:"Memorial Bridge",thai:"สะพานพุทธ",lon:100.49912,lat:13.73911,side:-1},{id:"chinatown",name:"Ratchawong",thai:"ท่าราชวงศ์",lon:100.50377,lat:13.73806,side:-1},{id:"lhong",name:"Lhong 1919",thai:"ล้ง 1919",lon:100.50712,lat:13.73447,side:1},{id:"rivercity",name:"River City",thai:"ริเวอร์ ซิตี้",lon:100.51374,lat:13.73033,side:-1},{id:"icon",name:"ICONSIAM",thai:"ไอคอนสยาม",lon:100.51255,lat:13.72665,side:1},{id:"oriental",name:"Oriental Pier",thai:"ท่าโอเรียนเต็ล",lon:100.514,lat:13.72355,side:-1},{id:"river",name:"The River",thai:"เดอะ ริเวอร์",lon:100.51115,lat:13.72139,side:1},{id:"sathorn",name:"Sathorn Pier",thai:"ท่าสาทร",lon:100.5129,lat:13.71895,side:-1}];function Xv(i){return Wv.map((e,t)=>{const n=Io(e.lon,e.lat),s=i.nearest(n.x,n.z),r=Ut(s.distance,65,i.length-65),o=i.sample(r),a=e.side;return{...e,index:t,distance:r,x:o.x+o.nx*a*(o.width/2-26),z:o.z+o.nz*a*(o.width/2-26),bankX:o.x+o.nx*a*(o.width/2+2),bankZ:o.z+o.nz*a*(o.width/2+2),heading:o.heading,nx:o.nx*a,nz:o.nz*a}})}function qv(i){return{x:i.x+i.nx*15,z:i.z+i.nz*15,width:9,length:17,heading:Math.atan2(i.nx,i.nz)-Math.PI/2,mass:1e4,vx:0,vz:0}}const bn=Object.freeze({speed:34,boostSpeed:53,acceleration:13.8,boostAcceleration:24,brake:41,reverseSpeed:7,reverseAcceleration:9,steer:1.05,boostSteer:.254,fatalImpact:14});class Yv{constructor(e=0,t=0,n=0){this.reset(e,t,n)}reset(e,t,n){Object.assign(this,{x:e,z:t,heading:n,vx:0,vz:0,yaw:0,speed:0,slip:0,boosting:!1,brakeHold:0})}launch(e,t){const n=e.sample(t.distance);this.reset(n.x,n.z,n.heading)}update(e,t={}){const n=Ut(t.steer||0,-1,1),s=t.gas?1:0,r=!!t.brake,o=-Math.sin(this.heading),a=-Math.cos(this.heading),l=Math.cos(this.heading),c=-Math.sin(this.heading);let h=this.vx*o+this.vz*a,u=this.vx*l+this.vz*c;if(this.boosting=!!t.boost&&s>0&&!r&&h>1,r)h>.35?(h=Math.max(0,h-bn.brake*e),this.brakeHold=0):(this.brakeHold+=e,this.brakeHold>.1?h=Math.max(-bn.reverseSpeed,h-bn.reverseAcceleration*e):h=0),u*=Math.exp(-8*e);else if(this.brakeHold=0,s){const d=this.boosting?bn.boostSpeed:bn.speed;h=h>d?Math.max(d,h-7*e):Math.min(d,h+(this.boosting?bn.boostAcceleration:bn.acceleration)*e)}else h*=Math.exp(-.38*e);u*=Math.exp(-(this.boosting?2.6:5.3)*e);const f=-n*(this.boosting?bn.boostSteer:bn.steer)*Ut(Math.abs(h)/4,0,1)*(h<0?-1:1);this.yaw+=(f-this.yaw)*(1-Math.exp(-(this.boosting?12:7)*e)),this.vx=o*h+l*u,this.vz=a*h+c*u,this.heading+=this.yaw*e,this.x+=this.vx*e,this.z+=this.vz*e,this.speed=this.vx*-Math.sin(this.heading)+this.vz*-Math.cos(this.heading),this.slip=this.vx*Math.cos(this.heading)-this.vz*Math.sin(this.heading)}}function gu(i){const e=Math.max(0,(i.length-i.width)/2),t=-Math.sin(i.heading),n=-Math.cos(i.heading);return[{x:i.x-t*e,z:i.z-n*e},{x:i.x+t*e,z:i.z+n*e}]}function xu(i,e,t){const n=t.x-e.x,s=t.z-e.z,r=Ut(((i.x-e.x)*n+(i.z-e.z)*s)/(n*n+s*s||1),0,1);return{x:e.x+r*n,z:e.z+r*s}}function Is(i,e){const[t,n]=gu(i),[s,r]=gu(e);let o,a=1/0;const l=(M,_)=>M.x*_.z-M.z*_.x,c=(M,_)=>({x:M.x-_.x,z:M.z-_.z}),h=c(n,t),u=c(r,s),f=c(s,t),d=l(h,u);if(Math.abs(d)>1e-8){const M=l(f,u)/d,_=l(f,h)/d;M>=0&&M<=1&&_>=0&&_<=1&&(o=[{x:t.x+h.x*M,z:t.z+h.z*M},{x:t.x+h.x*M,z:t.z+h.z*M}],a=0)}for(const M of[t,n]){const _=xu(M,s,r),v=Math.hypot(M.x-_.x,M.z-_.z);v<a&&(a=v,o=[M,_])}for(const M of[s,r]){const _=xu(M,t,n),v=Math.hypot(M.x-_.x,M.z-_.z);v<a&&(a=v,o=[_,M])}const m=a-(i.width+e.width)/2;let x=o[0].x-o[1].x,g=o[0].z-o[1].z,p=Math.hypot(x,g);return p<.001&&(x=i.x-e.x,g=i.z-e.z,p=Math.hypot(x,g),p<.001&&(x=Math.cos(i.heading),g=-Math.sin(i.heading),p=1)),{gap:m,nx:x/p,nz:g/p}}function Vf(i,e,t=Is({...i,length:12,width:2.5},e)){if(t.gap>=0)return 0;i.x+=t.nx*(-t.gap+.02),i.z+=t.nz*(-t.gap+.02);const n=(i.vx-e.vx)*t.nx+(i.vz-e.vz)*t.nz;if(n>=0)return 0;const s=e.mass/(e.mass+1.2),r=-n*(.65+.7*s);return i.vx+=r*t.nx,i.vz+=r*t.nz,i.speed=-i.vx*Math.sin(i.heading)-i.vz*Math.cos(i.heading),i.slip=i.vx*Math.cos(i.heading)-i.vz*Math.sin(i.heading),e.slow=Math.max(e.slow||0,Ut(-n/(e.mass+2),0,3)),-n*s}function jv(i,e,t=0){const n=e.x-i.x,s=e.z-i.z;return Math.hypot(n,s)<.01?t:t+vr(Math.atan2(n,-s)+i.heading,t)}class Kv{constructor(e,t=Math.random){this.piers=e,this.random=t,this.reset()}reset(){Object.assign(this,{phase:"seeking",remaining:180,earnings:0,deliveries:0,tips:0,combo:0,comboTime:0,fare:null,dockHold:0,lastDock:null,finished:!1,flash:null,cooldowns:new Map,clock:0})}update(e,t){if(this.finished)return null;if(this.clock+=e,this.remaining=Math.max(0,this.remaining-e),this.comboTime>0&&(this.comboTime-=e,this.comboTime<=0&&(this.combo=0)),this.remaining===0)return this.finished=!0,this.phase="ended",this.fare=null,{type:"ended"};if(this.fare&&(this.fare.time=Math.max(0,this.fare.time-e),this.fare.time===0))return this.fare=null,this.phase="seeking",this.dockHold=0,this.tips=0,this.combo=0,{type:"late"};const n=this.fare?.to||this.piers.find(r=>(this.cooldowns.get(r.id)||0)<=this.clock&&Math.hypot(r.x-t.x,r.z-t.z)<21),s=Math.hypot(t.vx,t.vz)<2.8;if(n&&Math.hypot(n.x-t.x,n.z-t.z)<21&&s){if(this.dockHold+=e,this.dockHold>.65){if(this.dockHold=0,this.fare){const c=this.fare.base+this.tips+Math.round(this.fare.time*1.9);return this.earnings+=c,this.deliveries++,this.remaining+=12,this.fare=null,this.phase="seeking",this.tips=0,this.combo=0,this.cooldowns.set(n.id,this.clock+7),this.lastDock=n,{type:"delivered",paid:c}}let r=this.piers.filter(c=>c.id!==n.id&&Math.abs(c.distance-n.distance)>260&&Math.abs(c.distance-n.distance)<2100);if(this.deliveries===0&&n.id==="arun"){const c=r.filter(h=>h.distance>n.distance&&h.distance-n.distance<1050);c.length&&(r=c)}const o=(r.length?r:this.piers.filter(c=>c.id!==n.id))[Math.floor(this.random()*(r.length||this.piers.length-1))];if(!o)return null;const a=Math.max(Math.abs(o.distance-n.distance),Math.hypot(o.x-n.x,o.z-n.z)),l=26+a/21;return this.fare={from:n,to:o,base:Math.round(95+a*.1),time:l,total:l},this.phase="carrying",this.tips=0,{type:"pickup",to:o}}}else this.dockHold=0;return null}stunt(){if(this.finished||!this.fare)return 0;this.combo=Math.min(this.combo+1,8),this.comboTime=5;const e=20*this.combo;return this.tips+=e,e}hitBoat(e,t){if(this.finished)return null;const n=Is({...e,length:12,width:2.5},t);if(n.gap>=0)return null;const s=Vf(e,t,n);return s<bn.fatalImpact?{type:"bumped",severity:s}:(this.finished=!0,this.phase="crashed",this.fare=null,this.dockHold=0,this.tips=0,this.combo=0,this.comboTime=0,{type:"crashed",severity:s})}crash(){this.combo=0,this.comboTime=0,this.fare&&(this.tips=Math.max(0,this.tips-25))}}const sc="bangkok-longtail:scores:v1";function rc(i){return Array.isArray(i)?i.filter(e=>e&&Number.isFinite(e.score)&&e.score>0&&e.score<1e7&&Number.isInteger(e.deliveries)&&e.deliveries>=0&&typeof e.date=="string").sort((e,t)=>t.score-e.score).slice(0,5):[]}function Zv(i,e,t){let n=[];try{n=rc(JSON.parse(i.getItem(sc)||"[]"))}catch{}if(e<=0)return n;const s=rc([...n,{score:e,deliveries:t,date:new Date().toISOString()}]);try{i.setItem(sc,JSON.stringify(s))}catch{}return s}const ja=Object.freeze({memorial:{thai:"สะพานพระพุทธยอดฟ้า",english:"MEMORIAL BRIDGE"},pokklao:{thai:"สะพานพระปกเกล้า",english:"PHRA POK KLAO BRIDGE"},taksin:{thai:"สะพานสมเด็จพระเจ้าตากสินมหาราช",english:"KING TAKSIN BRIDGE"},skypark:{thai:"สวนลอยฟ้าเจ้าพระยา",english:"CHAO PHRAYA SKY PARK"}});function Ka(i,e,t=30,n=3.4,{pier:s=!1}={}){const r=document.createElement("canvas");r.width=1536,r.height=Math.round(1536*n/t);const o=r.getContext("2d"),a=r.width,l=r.height;o.fillStyle=s?"#174f58":"#193d59",o.fillRect(0,0,a,l),o.strokeStyle="#e6e0c9",o.lineWidth=2,o.strokeRect(9,9,a-18,l-18),o.fillStyle="#f2eddb",o.textAlign="center",o.textBaseline="middle";let c=l*.46;for(o.font=`600 ${c}px "Noto Sans Thai",sans-serif`;o.measureText(i).width>a-80&&c>l*.24;)c-=1,o.font=`600 ${c}px "Noto Sans Thai",sans-serif`;o.fillText(i,a/2,l*.39),o.font=`500 ${l*.2}px Barlow,Arial,sans-serif`,o.fillStyle="#c5cfd0",o.fillText(e,a/2,l*.79,a-80);const h=new On(r);h.colorSpace=xt,h.anisotropy=8;const u=new Qt;u.name=`sign:${i}`;const f=new lt(new un(t+.24,n+.2,.2),new wt({color:5464680,roughness:.7}));u.add(f);const d=new lt(new Rt(t,n),new wt({map:h,emissiveMap:h,emissive:14542829,emissiveIntensity:.55,roughness:.78}));return d.position.z=.115,u.add(d),u}class Jv extends lt{constructor(e,t={}){super(e),this.isWater=!0;const n=this,s=t.textureWidth!==void 0?t.textureWidth:512,r=t.textureHeight!==void 0?t.textureHeight:512,o=t.clipBias!==void 0?t.clipBias:0,a=t.alpha!==void 0?t.alpha:1,l=t.time!==void 0?t.time:0,c=t.waterNormals!==void 0?t.waterNormals:null,h=t.sunDirection!==void 0?t.sunDirection:new P(.70707,.70707,0),u=new Oe(t.sunColor!==void 0?t.sunColor:16777215),f=new Oe(t.waterColor!==void 0?t.waterColor:8355711),d=t.eye!==void 0?t.eye:new P(0,0,0),m=t.distortionScale!==void 0?t.distortionScale:20,x=t.side!==void 0?t.side:ni,g=t.fog!==void 0?t.fog:!1,p=new pi,M=new P,_=new P,v=new P,E=new Ze,T=new P(0,0,-1),w=new rt,R=new P,S=new P,b=new rt,L=new Ze,D=new Wt,N=new $t(s,r),B={name:"MirrorShader",uniforms:Un.merge([Ee.fog,Ee.lights,{normalSampler:{value:null},mirrorSampler:{value:null},alpha:{value:1},time:{value:0},size:{value:1},distortionScale:{value:20},textureMatrix:{value:new Ze},sunColor:{value:new Oe(8355711)},sunDirection:{value:new P(.70707,.70707,0)},eye:{value:new P},waterColor:{value:new Oe(5592405)}}]),vertexShader:`
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
				}`},O=new vt({name:B.name,uniforms:Un.clone(B.uniforms),vertexShader:B.vertexShader,fragmentShader:B.fragmentShader,lights:!0,side:x,fog:g});O.uniforms.mirrorSampler.value=N.texture,O.uniforms.textureMatrix.value=L,O.uniforms.alpha.value=a,O.uniforms.time.value=l,O.uniforms.normalSampler.value=c,O.uniforms.sunColor.value=u,O.uniforms.waterColor.value=f,O.uniforms.sunDirection.value=h,O.uniforms.distortionScale.value=m,O.uniforms.eye.value=d,n.material=O,n.onBeforeRender=function(V,Z,W){if(_.setFromMatrixPosition(n.matrixWorld),v.setFromMatrixPosition(W.matrixWorld),E.extractRotation(n.matrixWorld),M.set(0,0,1),M.applyMatrix4(E),R.subVectors(_,v),R.dot(M)>0)return;R.reflect(M).negate(),R.add(_),E.extractRotation(W.matrixWorld),T.set(0,0,-1),T.applyMatrix4(E),T.add(v),S.subVectors(_,T),S.reflect(M).negate(),S.add(_),D.position.copy(R),D.up.set(0,1,0),D.up.applyMatrix4(E),D.up.reflect(M),D.lookAt(S),D.far=W.far,D.updateMatrixWorld(),D.projectionMatrix.copy(W.projectionMatrix),L.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),L.multiply(D.projectionMatrix),L.multiply(D.matrixWorldInverse),p.setFromNormalAndCoplanarPoint(M,_),p.applyMatrix4(D.matrixWorldInverse),w.set(p.normal.x,p.normal.y,p.normal.z,p.constant);const re=D.projectionMatrix;b.x=(Math.sign(w.x)+re.elements[8])/re.elements[0],b.y=(Math.sign(w.y)+re.elements[9])/re.elements[5],b.z=-1,b.w=(1+re.elements[10])/re.elements[14],w.multiplyScalar(2/w.dot(b)),re.elements[2]=w.x,re.elements[6]=w.y,re.elements[10]=w.z+1-o,re.elements[14]=w.w,d.setFromMatrixPosition(W.matrixWorld);const fe=V.getRenderTarget(),ne=V.xr.enabled,ze=V.shadowMap.autoUpdate;n.visible=!1,V.xr.enabled=!1,V.shadowMap.autoUpdate=!1,V.setRenderTarget(N),V.state.buffers.depth.setMask(!0),V.autoClear===!1&&V.clear(),V.render(Z,D),n.visible=!0,V.xr.enabled=ne,V.shadowMap.autoUpdate=ze,V.setRenderTarget(fe);const He=W.viewport;He!==void 0&&V.state.viewport(He)}}}const oc=new P(.3,.26,.918).normalize();function Qv(i,e=new P){return i.updateMatrixWorld(),e.set(.4,.54,.5).unproject(i).sub(i.position).normalize()}function $v(i){const e=new vt({side:Xt,depthWrite:!1,depthTest:!1,uniforms:{time:{value:0},moonDirection:{value:oc.clone()}},vertexShader:`varying vec3 direction;
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
      }`}),t=new lt(new en(100,48,24),e);t.name="infinite-night-sky",t.renderOrder=-1e3,t.frustumCulled=!1,i.add(t);const n=e.uniforms.moonDirection.value,s=new Ff(10271970,.62);return s.name="moonlight",s.position.copy(n).multiplyScalar(1e3),i.add(s),{sky:t,direction:n,moonlight:s,setLaunchView(r){Qv(r,n),s.position.copy(n).multiplyScalar(1e3)},update(r){e.uniforms.time.value=r}}}function e2(){const e=new Uint8Array(262144);for(let n=0;n<256;n++)for(let s=0;s<256;s++){const r=s/256*Math.PI*2,o=n/256*Math.PI*2;let a=0,l=0;for(let u=1;u<=10;u++){const f=u%3+1,d=u*7%11-5,m=r*f+o*d+u*1.91;a+=Math.cos(m)*f/(u+3),l+=Math.cos(m)*d/(u+3)}const c=new P(-a*.22,-l*.22,1).normalize(),h=(n*256+s)*4;e[h]=(c.x*.5+.5)*255,e[h+1]=(c.y*.5+.5)*255,e[h+2]=(c.z*.5+.5)*255,e[h+3]=255}const t=new qo(e,256,256);return t.wrapS=t.wrapT=ii,t.generateMipmaps=!0,t.minFilter=En,t.magFilter=ln,t.anisotropy=4,t.needsUpdate=!0,t}function t2(i,e){const t=e?6:12,n=new Rt(2,2,e?64:112,e?64:112),s=n.attributes.position,r=c=>Math.sign(c)*(Math.abs(c)<=.85?Math.abs(c)*320:272+Math.pow((Math.abs(c)-.85)/.15,3)*8728);for(let c=0;c<s.count;c++)s.setXY(c,r(s.getX(c)),r(s.getY(c)));n.computeBoundingSphere();const o=new Jv(n,{textureWidth:e?256:512,textureHeight:e?256:512,waterNormals:e2(),sunDirection:oc.clone(),sunColor:8887216,waterColor:1059112,distortionScale:1.8,fog:!0,clipBias:.002});o.rotation.x=-Math.PI/2,o.position.y=.04,o.name="chao-phraya-water";const a=o.material,l=a.uniforms.mirrorSampler.value;return l.generateMipmaps=!0,l.minFilter=En,a.vertexShader=a.vertexShader.replace("uniform float time;","uniform float time;uniform vec3 eye;").replace("worldPosition = mirrorCoord.xyzw;",`float distanceToBoat=length(mirrorCoord.xz-eye.xz);
      float swell=(sin(mirrorCoord.x*.47+mirrorCoord.z*.28+time*1.1)*.095+sin(mirrorCoord.z*.73-mirrorCoord.x*.22-time*1.42)*.038)*exp(-distanceToBoat*.004);
      mirrorCoord.y+=swell;worldPosition=mirrorCoord;`).replace("modelViewMatrix * vec4( position, 1.0 )","viewMatrix * worldPosition"),a.uniforms.riverLamps={value:Array.from({length:t},()=>new rt)},a.uniforms.riverColors={value:Array.from({length:t},()=>new Oe(0))},a.fragmentShader=a.fragmentShader.replace("uniform sampler2D mirrorSampler;",`uniform sampler2D mirrorSampler;uniform vec4 riverLamps[${t}];uniform vec3 riverColors[${t}];`).replace(/vec4 getNoise\( vec2 uv \) \{[\s\S]*?return noise \* 0\.5 - 1\.0;\s*\}/,`vec4 getNoise(vec2 uv){
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
      outgoingLight+=vec3(.012,.021,.022)*chop;`),i.add(o),{water:o,update(c,h,u,f=oc){a.uniforms.time.value=c,a.uniforms.sunDirection.value.copy(f),o.position.x=h.position.x,o.position.z=h.position.z;const d=u.map(m=>({s:m,d:(m.x-h.position.x)**2+(m.z-h.position.z)**2})).sort((m,x)=>m.d-x.d).slice(0,t);for(let m=0;m<t;m++){const x=d[m]?.s;a.uniforms.riverLamps.value[m].set(x?.x||0,x?.y||0,x?.z||0,x?.power||0),a.uniforms.riverColors.value[m].set(x?.color||0)}}}}function Wf(i,e,t,n=new Ze){let s;if(t.isMeshBasicMaterial&&!t.map&&Math.max(t.color.r,t.color.g,t.color.b)>1.05)s=t.color.clone();else if(t.emissiveIntensity>=2.5&&!t.emissiveMap)s=t.emissive.clone().multiplyScalar(t.emissiveIntensity);else return;e.computeBoundingBox();const r=e.boundingBox,o=r.getCenter(new P),a=r.getSize(new P),l=new P().setFromMatrixScale(n),c=a.clone().multiply(l).toArray(),h=[0,1,2].sort((g,p)=>c[p]-c[g]),u=h[0],f=c[u]>1&&c[u]>c[h[1]]*4,d=f?Math.max(c[h[1]],c[h[2]]):c[u];if(d>2.5||d<=0)return;const m=o.clone(),x=o.clone();return f&&(m.setComponent(u,r.min.getComponent(u)),x.setComponent(u,r.max.getComponent(u))),i.push({a:m.applyMatrix4(n).toArray(),b:x.applyMatrix4(n).toArray(),width:d,color:s.toArray()}),!0}function ac(i,e){const t=new P().setFromMatrixScale(e).x;return i.map(n=>({...n,a:new P(...n.a).applyMatrix4(e).toArray(),b:new P(...n.b).applyMatrix4(e).toArray(),width:n.width*t}))}function n2(i){const e=[],t=new Oe(16764040).multiplyScalar(3.2).toArray(),n=(o,a=t,l=.2)=>e.push({a:o,b:[...o],width:l,color:a}),s=(o,a,l=.1,c=t)=>e.push({a:o,b:a,width:l,color:c}),r=(o,a,l,c)=>{n([-o,a,l],new Oe(16723993).multiplyScalar(3).toArray()),n([o,a,l],new Oe(2485367).multiplyScalar(3).toArray()),n(c)};if(i==="cruise"){for(const[o,a,l,c]of[[1.57,11.68,43.7,1],[4.17,11.58,42.7,1.4],[6.63,10.28,39.2,1.8]])for(const h of[-1,1])s([h*a/2,o,c-l/2],[h*a/2,o,c+l/2],.075);for(const o of[-4.25,4.25])for(let a=0;a<25;a++){const l=a/24;n([o,9.125-Math.sin(l*Math.PI)*.59,-16.1+l*36.4],t,.134)}r(5.28,6.25,-16.8,[0,8.19,21.6]),n([0,10.24,-15.9])}else if(i==="electric"){const o=new Oe(7980767).multiplyScalar(2).toArray();for(const a of[-1,1])s([a*3.18,3.65,-9.25],[a*3.18,3.65,9.25],.09,o);r(3.04,3.6,-7.2,[0,3.8,9])}else if(i==="ferry"){for(const o of[-1,1])s([o*2.36,3.24,-9.3],[o*2.36,3.24,10.7],.08);r(2.28,3.32,-9.1,[0,3.52,12.6])}else if(i==="longtail"){for(const o of[-2.74,2.91])s([-.83,1.99,o],[.83,1.99,o],.048);r(1.08,2.06,-2.66,[0,2.26,4.7])}else if(i==="patrol")r(1.4,2.75,-1.15,[0,3.7,1.96]);else if(i==="tug"){r(1.68,4.23,-3.49,[0,1.71,7.42]);for(const o of[5.67,6.65])n([0,o,-2.18]);n([0,2.79,.26])}else i==="barge"?r(5.75,1.42,-20.9,[-4.66,3.14,21.7]):n([0,.95,2.55],t,.148);return e}class lc{constructor(e,t,{dynamic:n=!1,replacePhysical:s=!n}={}){this.fixtures=t,this.dynamic=n;const r=this.geometry=new Wm;r.setAttribute("position",new ke([0,-1,0,1,-1,0,0,1,0,1,1,0],3)),r.setIndex([0,1,2,2,1,3]),r.instanceCount=t.length;for(const[a,l]of[["lightStart",3],["lightEnd",3],["lightColor",3],["lightWidth",1]]){const c=new Ql(new Float32Array(t.length*l),l);n&&c.setUsage(ji),r.setAttribute(a,c)}t.forEach((a,l)=>r.attributes.lightColor.setXYZ(l,...a.color)),this.material=new vt({transparent:!0,depthWrite:!1,depthTest:!0,blending:Wi,uniforms:{viewport:{value:new $(1,1)},nearPlane:{value:.3},fogDensity:{value:e.fog?.density||0},replacePhysical:{value:s?1:0}},vertexShader:`attribute vec3 lightStart;attribute vec3 lightEnd;attribute vec3 lightColor;attribute float lightWidth;
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
        }`}),this.mesh=new lt(r,this.material),this.mesh.name=n?"fleet-visible-lights":"riverbank-visible-lights",this.mesh.frustumCulled=!1;const o=new rt;this.mesh.onBeforeRender=(a,l,c)=>{a.getCurrentViewport(o),this.material.uniforms.viewport.value.set(o.z,o.w),this.material.uniforms.nearPlane.value=c.near,this.material.uniformsNeedUpdate=!0},this.pointA=new P,this.pointB=new P,this.scale=new P,this.update(),e.add(this.mesh)}update(){let e=null,t=1;for(const[n,s]of this.fixtures.entries()){const r=s.parent?.visible===!1?0:s.intensity?.()??1;this.geometry.attributes.lightColor.setXYZ(n,s.color[0]*r,s.color[1]*r,s.color[2]*r),this.pointA.fromArray(s.a),this.pointB.fromArray(s.b),s.parent?(s.parent!==e&&(s.parent.updateWorldMatrix(!0,!1),t=this.scale.setFromMatrixScale(s.parent.matrixWorld).x,e=s.parent),this.pointA.applyMatrix4(s.parent.matrixWorld),this.pointB.applyMatrix4(s.parent.matrixWorld)):(t=1,e=null),this.geometry.attributes.lightStart.setXYZ(n,this.pointA.x,this.pointA.y,this.pointA.z),this.geometry.attributes.lightEnd.setXYZ(n,this.pointB.x,this.pointB.y,this.pointB.z),this.geometry.attributes.lightWidth.setX(n,s.width*t)}for(const n of["lightStart","lightEnd","lightWidth","lightColor"])this.geometry.attributes[n].needsUpdate=!0}}function Bs(i,e=!1){const t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,l=new it;let c=0;for(let h=0;h<i.length;++h){const u=i[h];let f=0;if(t!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const d in u.attributes){if(!n.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;r[d]===void 0&&(r[d]=[]),r[d].push(u.attributes[d]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const d in u.morphAttributes){if(!s.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[d]===void 0&&(o[d]=[]),o[d].push(u.morphAttributes[d])}if(e){let d;if(t)d=u.index.count;else if(u.attributes.position!==void 0)d=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,d,h),c+=d}}if(t){let h=0;const u=[];for(let f=0;f<i.length;++f){const d=i[f].index;for(let m=0;m<d.count;++m)u.push(d.getX(m)+h);h+=i[f].attributes.position.count}l.setIndex(u)}for(const h in r){const u=vu(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(const h in o){const u=o[h][0].length;if(u===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let f=0;f<u;++f){const d=[];for(let x=0;x<o[h].length;++x)d.push(o[h][x][f]);const m=vu(d);if(!m)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(m)}}return l}function vu(i){let e,t,n,s=-1,r=0;for(let c=0;c<i.length;++c){const h=i[c];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*t}const o=new e(r),a=new _t(o,t,n);let l=0;for(let c=0;c<i.length;++c){const h=i[c];if(h.isInterleavedBufferAttribute){const u=l/t;for(let f=0,d=h.count;f<d;f++)for(let m=0;m<t;m++){const x=h.getComponent(f,m);a.setComponent(f+u,m,x)}}else o.set(h.array,l);l+=h.count*t}return s!==void 0&&(a.gpuType=s),a}const i2=new un(1,1,1),Za=new en(1,8,6),Kt=(i,e=0,t=0)=>new wt({color:i,emissive:e,emissiveIntensity:t,roughness:.82}),_u=[16758632,16764815,15248999,9096909];function s2(i){return()=>(i=Math.imul(i,1664525)+1013904223>>>0,i/4294967296)}class r2{constructor(){this.fixtures=[],this.parts=new Map,this.matrix=new Ze,this.q=new Bt,this.v=new P,this.s=new P}add(e,t,n,s,r,o=1,a=1,l=1,c=0){if(this.q.setFromAxisAngle(new P(0,1,0),c),this.matrix.compose(this.v.set(n,s,r),this.q,this.s.set(o,a,l)),Wf(this.fixtures,e,t,this.matrix))return;let h=e.clone().applyMatrix4(this.matrix);if(h.index){const u=h;h=u.toNonIndexed(),u.dispose()}this.parts.has(t)||this.parts.set(t,[]),this.parts.get(t).push(h)}box(e,t,n,s,r,o,a,l=0){this.add(i2,e,t,n,s,r,o,a,l)}line(e,t,n,s=.05){const r=new P(...t),o=new P(...n),a=o.clone().sub(r),l=new vn(s,s,a.length(),5);l.applyQuaternion(new Bt().setFromUnitVectors(new P(0,1,0),a.normalize()));const c=r.add(o).multiplyScalar(.5);this.add(l,e,c.x,c.y,c.z),l.dispose()}finish(e){for(const[t,n]of this.parts){const s=Bs(n);n.forEach(o=>o.dispose());const r=new lt(s,t);e.add(r)}this.parts.clear()}}const Ja=new Map,Mu=new Rt(9,2.25);function o2(i,e){const t=`${i}:${e%3}`;if(Ja.has(t))return new lt(Mu,Ja.get(t));const n=document.createElement("canvas");n.width=512,n.height=128;const s=n.getContext("2d");s.fillStyle="#090e13",s.fillRect(0,0,512,128),s.strokeStyle=["#dea353","#6ecfc1","#dd7160"][e%3],s.lineWidth=3,s.strokeRect(8,8,496,112),s.font='600 54px "Noto Sans Thai",Arial',s.textAlign="center",s.textBaseline="middle",s.shadowColor=s.strokeStyle,s.shadowBlur=8,s.fillStyle=s.strokeStyle,s.fillText(i,256,66,466);const r=new On(n);r.colorSpace=xt;const o=new wt({map:r,emissiveMap:r,emissive:16777215,emissiveIntensity:2.1,roughness:.85});return Ja.set(t,o),new lt(Mu,o)}function a2(i,e,t,n){const s=s2(73027),r=new Qt;r.name="riverside-evening-life",i.add(r);const o=new r2,a=Kt(5849136),l=Kt(2042410);Kt(4803655);const c=[Kt(7877674),Kt(4543816),Kt(10191966)],h=Kt(6965041),u=Kt(1518368),f=Kt(1120025),d=[],m=_u.map(N=>Kt(12821890,N,3.5)),x=m[0],g=[];for(let N=50;N<e.length-60;N+=82)for(const B of[-1,1]){const O=e.sample(N),V=B*(O.width/2+7),Z=e.sample(N,V),W=Math.atan2(-O.nx*B,-O.nz*B),re={x:Math.cos(W),z:-Math.sin(W)},fe={x:O.nx*B,z:O.nz*B},ne=(j,se,we)=>[Z.x+re.x*j+fe.x*we,se,Z.z+re.z*j+fe.z*we],ze=t.some(j=>j.side===B&&Math.abs(N-j.distance)<j.reserveLength+8),He=Math.floor(N/82),Je=!ze&&He%4!==0,qe=m[He%m.length];if(Je){g.push({distance:N,side:B});const j=ne(0,3.25,4);o.box(a,...j,23,.35,10,W);for(const Ne of[-10,-5,0,5,10])o.box(a,...ne(Ne,1,0),.4,4,.4),o.box(l,...ne(Ne,4.1,-1.1),.12,1.9,.12);o.box(l,...ne(0,5,-1.1),23,.1,.1,W);for(const Ne of[-8,-4,0,4,8])o.add(new _n(.42,.12,6,10),f,...ne(Ne,1.1,-1.7),1,1,1,W);o.box(c[He%3],...ne(0,7.2,6),22,.18,7.5,W);for(const Ne of[-10,10])o.box(l,...ne(Ne,5.2,2.5),.15,4,.15);for(let Ne=-8;Ne<=8;Ne+=4){o.add(new vn(1.05,1.05,.12,10),a,...ne(Ne,4.12,2.2)),o.box(l,...ne(Ne,3.67,2.2),.12,.9,.12),o.add(Za,x,...ne(Ne,4.35,2.2),.1,.16,.1);for(const tt of[-1,1])o.box(a,...ne(Ne+tt*1.3,3.75,2.2),.55,.12,.6,W),o.box(a,...ne(Ne+tt*1.45,4.07,2.2),.12,.65,.6,W)}const se=o2(["ริมน้ำ","SEAFOOD","ก๋วยเตี๋ยว","RIVER BAR","อาหารไทย","ท่าเรือ"][He%6],He);o.add(se.geometry,se.material,...ne(0,7.1,2.15),1,1,1,W);const we=ne(-11,7.4,.6),Ie=ne(11,7.4,.6);for(let Ne=0;Ne<12;Ne++){const tt=Ne/11,I=(Ne+1)/11,oe=[we[0]+(Ie[0]-we[0])*tt,7.4-Math.sin(tt*Math.PI)*.75,we[2]+(Ie[2]-we[2])*tt],ie=[we[0]+(Ie[0]-we[0])*I,7.4-Math.sin(I*Math.PI)*.75,we[2]+(Ie[2]-we[2])*I];Ne<11&&o.line(l,oe,ie,.023),o.add(Za,qe,oe[0],oe[1]-.14,oe[2],.11,.16,.11)}const Le=ne(0,6,1);d.push({x:Le[0],y:Le[1],z:Le[2],color:_u[He%4],power:35})}else{const j=ne(0,6.1,0);o.box(l,...j,.14,6.3,.14),o.box(qe,...ne(0,9.3,0),.65,.2,.65);const se=ne(0,9.15,0);d.push({x:se[0],y:se[1],z:se[2],color:16762251,power:29})}if(!ze){for(const j of[-14,14])o.add(new vn(.7,.5,1.05,8),h,...ne(j,3.6,4)),o.add(Za,u,...ne(j,5.15,4),1.25,1.4,1.05);if(He%3===0)for(let j=0;j<3;j++)o.box(a,...ne(16+j*.9,3.6+j*.2,5),.85,.8,.85,W)}}o.finish(r),r.traverse(N=>{N.updateMatrix(),N.matrixAutoUpdate=!1});const p=n?64:132,M=[],_=[],v=Kt(11437929),E=Kt(11184288),T=Kt(1647654),w=Kt(1119248),R=(N,B,O)=>{const V=new ir(N,B,p);V.instanceMatrix.setUsage(ji),V.frustumCulled=!1,V.layers.set(1),i.add(V),_.push({mesh:V,kind:O})};R(new sr(.22,.49,3,7),E,"body"),R(new en(.17,8,7),v,"head"),R(new en(.174,8,6),w,"hair");for(const N of[-1,1])R(new sr(.075,.58,2,5),T,N<0?"left-leg":"right-leg"),R(new sr(.062,.46,2,5),E,N<0?"left-arm":"right-arm");const S=[15122576,7510681,12678752,12631210,5461872,11048053];for(let N=0;N<p;N++){const B=g[N%g.length];M.push({distance:B.distance+(s()-.5)*19,side:B.side,phase:s()*6.283,walk:N%3===0,height:.9+s()*.16});for(const O of _)(O.kind==="body"||O.kind.includes("arm"))&&O.mesh.setColorAt(N,new Oe(S[N%S.length]))}const b=new mt,L=N=>{for(let B=0;B<M.length;B++){const O=M[B],V=O.walk?Math.sin(N*.055+O.phase)*8:0,Z=e.sample(O.distance+V,O.side*(e.sample(O.distance).width/2+(O.walk?7:10))),W=O.height,re=O.walk?Z.heading+(Math.cos(N*.055+O.phase)>0?0:Math.PI):Math.atan2(-Z.nx*O.side,-Z.nz*O.side),fe=O.walk?Math.sin(N*3+O.phase)*.35:0;for(const ne of _){let ze=0,He=0,Je=0;if(ne.kind==="body"&&(He=1.19),ne.kind==="head"&&(He=1.76),ne.kind==="hair"&&(He=1.82),ne.kind.includes("leg")){const qe=ne.kind.startsWith("left")?-1:1;ze=qe*.13,He=.46,Je=qe*fe}if(ne.kind.includes("arm")){const qe=ne.kind.startsWith("left")?-1:1;ze=qe*.31,He=1.14,Je=-qe*fe*.65}b.position.set(Z.x+Math.cos(re)*ze,3.48+He*W,Z.z-Math.sin(re)*ze),b.rotation.set(Je,re,0),b.scale.set(W,W,ne.kind==="hair"?W*.9:W),b.updateMatrix(),ne.mesh.setMatrixAt(B,b.matrix)}}for(const B of _)B.mesh.instanceMatrix.needsUpdate=!0};L(0);let D=-1;return{lights:d,fixtures:o.fixtures,update(N){N-D<1/24||(D=N,L(N))}}}function l2(i,e,t,n){const s=t.find(v=>v.kind==="icon-siam"),r=35,o=n?32:64,a=r*o,l=new Float32Array(a*3),c=new Float32Array(a*3),h=new Float32Array(a),u=new it;u.setAttribute("position",new _t(l,3)),u.setAttribute("color",new _t(c,3)),u.setAttribute("alpha",new _t(h,1));const f=new vt({transparent:!0,depthWrite:!1,blending:Wi,vertexShader:"attribute vec3 color;attribute float alpha;varying vec3 tint;varying float fade;void main(){tint=color;fade=alpha;vec4 p=modelViewMatrix*vec4(position,1.);gl_PointSize=clamp(180./max(1.,-p.z),1.,7.);gl_Position=projectionMatrix*p;}",fragmentShader:`varying vec3 tint;varying float fade;void main(){float r=length(gl_PointCoord-.5)*2.;if(r>1.)discard;gl_FragColor=vec4(tint,fade*(1.-r*r));
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
  }`}),d=new Dc(u,f);d.frustumCulled=!1,d.layers.set(1),i.add(d);const m=new ir(new vn(.055,.13,1,6),new gn({color:8108753,transparent:!0,opacity:.25,depthWrite:!1,blending:Wi}),r);m.instanceMatrix.setUsage(ji),m.frustumCulled=!1,i.add(m);const x=new mt,g=[],p=Array.from({length:r},(v,E)=>{const T=s.distance+(E-(r-1)/2)*3.8,w=e.sample(T),R=e.sample(T,s.side*(w.width/2+9));return{x:R.x,z:R.z,nx:R.nx,nz:R.nz}});for(let v=0;v<5;v++){const E=p[v*7];g.push({x:E.x,y:5,z:E.z,color:7718367,power:16})}const M=new Oe;let _=-1;return{lights:g,update(v,E){const T=(E.position.x-s.x)**2+(E.position.z-s.z)**2<121e4;if(d.visible=m.visible=T,!(!T||v-_<1/30)){_=v;for(let w=0;w<r;w++){const R=p[w],S=.5+.5*Math.sin(v*.67+w*.28),b=3.5+S*7.5;x.position.set(R.x,3.25+b/2,R.z),x.scale.set(1,b,1),x.updateMatrix(),m.setMatrixAt(w,x.matrix),M.setHSL(.53+.055*Math.sin(v*.055+w*.032),.38,.59);for(let L=0;L<o;L++){const D=w*o+L,N=(L/o+v*.28)%1,B=4*b*N*(1-N),O=(.08+N*.25)*Math.sin(D*17.21+v*1.7);l[D*3]=R.x+Math.cos(w)*O+R.nx*Math.sin(w*.7)*N*1.8,l[D*3+1]=3.25+B,l[D*3+2]=R.z+Math.sin(w)*O+R.nz*Math.sin(w*.7)*N*1.8,c[D*3]=M.r*1.8,c[D*3+1]=M.g*1.8,c[D*3+2]=M.b*1.8,h[D]=.45*(1-N*.4)}}m.instanceMatrix.needsUpdate=!0;for(const w of Object.values(u.attributes))w.needsUpdate=!0}}}}const Xf=11,qf=12,yu=Xf+qf,$s=16763496,Zs=16772553,Qa=16741021,$a=6741968;function At(i,e=$s,t=!1){const n=i.map(([r,o])=>new P(r,o,0)),s=t?new br(n,!1,"centripetal"):new Pf;if(!t)for(let r=1;r<n.length;r++)s.add(new Af(n[r-1],n[r]));return{curve:s,color:e,length:s.getLength()}}function Su(i,e,t,n,s){return At(Array.from({length:33},(r,o)=>[i+Math.cos(o/32*Math.PI*2)*t,e+Math.sin(o/32*Math.PI*2)*n]),s)}function co(i,e,t){const n=e.reduce((l,c)=>l+c.length,0),s=new Float32Array(t*3),r=new Float32Array(t*3);let o=0,a=t;return e.forEach((l,c)=>{const h=c===e.length-1?a:Math.min(a-(e.length-c-1)*3,Math.max(3,Math.round(t*l.length/n))),u=new Oe(l.color);for(let f=0;f<h;f++){const d=l.curve.getPointAt((f+.5)/h),m=o++;s.set([d.x*130,d.y*130,0],m*3),r.set(u.toArray(),m*3)}a-=h}),{name:i,positions:s,colors:r}}function c2(i=480){const e=i===300?25:30,t=Math.ceil(i/e),n=new Float32Array(i*3),s=new Float32Array(i*3);for(let f=0;f<i;f++){const d=f%e,m=Math.floor(f/e),x=(m+.5)/t;n.set([(d/(e-1)*2-1)*130,(.5-m/(t-1))*173,Math.sin(d*.28)*3],f*3);const g=x<1/6||x>5/6?16725582:x<2/6||x>4/6?16774375:4749311;s.set(new Oe(g).toArray(),f*3)}const r={name:"Thai flag",positions:n,colors:s},o=co("Lotus",[At([[0,-.43],[-.24,-.1],[-.24,.27],[0,.75],[.24,.27],[.24,-.1],[0,-.43]],Qa,!0),...[-1,1].flatMap(f=>[At([[0,-.43],[f*.48,-.19],[f*.61,.43],[f*.22,.22],[0,-.43]],16757967,!0),At([[0,-.43],[f*.64,-.3],[f*1,.2],[f*.57,.11],[f*.28,-.1]],Qa,!0),At([[0,-.48],[f*.5,-.58],[f*.95,-.43],[f*.47,-.43],[0,-.48]],$a,!0)])],i),a=co("Elephant",[At([[-.8,.1],[-.65,.4],[-.34,.51],[.05,.51],[.24,.46],[.41,.59],[.62,.52],[.73,.31],[.77,.08],[.77,-.2],[.88,-.28],[.97,-.2],[.96,-.08],[1.05,-.08],[1.06,-.27],[.92,-.4],[.7,-.35],[.64,-.18],[.6,.04],[.49,-.02],[.45,-.49],[.25,-.49],[.2,-.18],[-.1,-.21],[-.37,-.17],[-.41,-.49],[-.62,-.49],[-.69,-.18],[-.8,.1]],Zs,!0),Su(.37,.21,.16,.23,$s),Su(.59,.3,.026,.026,12052735),At([[.56,.02],[.78,-.06],[.63,-.09]],Zs,!0),At([[-.72,.24],[-.93,.07],[-1,-.13]],$s,!0),At([[-.32,.51],[-.32,.18],[-.13,.09],[.05,.18],[.05,.51]],$s)],i),l=[At([[-.39,-.45],[-.39,-.32],[-.3,-.32],[-.3,-.17],[-.23,-.17],[-.23,.02],[-.16,.19],[-.13,.44],[-.08,.57],[-.05,.68],[0,.88],[.05,.68],[.08,.57],[.13,.44],[.16,.19],[.23,.02],[.23,-.17],[.3,-.17],[.3,-.32],[.39,-.32],[.39,-.45],[-.39,-.45]])];for(const[f,d]of[[-.32,.3],[-.17,.23],[.02,.23],[.19,.16],[.44,.13],[.57,.08]])l.push(At([[-d,f],[d,f]],Zs));for(const f of[-1,1])l.push(At([[f*.48,-.45],[f*.48,-.23],[f*.55,-.23],[f*.57,-.04],[f*.65,.23],[f*.73,-.04],[f*.75,-.23],[f*.82,-.23],[f*.82,-.45],[f*.48,-.45]]));l.push(At(Array.from({length:41},(f,d)=>{const m=d/20-1;return[m,-.6+Math.sin(m*10)*.035]}),$a));const c=co("Wat Arun",l,i),h=co("Long-tail boat",[At([[-1,-.08],[-.79,-.37],[.53,-.37],[.86,-.14],[1,.25],[1.03,.54],[.94,.48],[.8,-.04],[-1,-.08]],$s),At([[-.67,.01],[-.62,.34],[-.48,.4],[.35,.4],[.44,.31],[.48,.02]],6937087),...[-.54,-.15,.32].map(f=>At([[f,.36],[f,-.05]],Zs)),At([[-.86,.02],[-.84,.17],[-.67,.15],[-.65,.02]],Qa),At([[-.87,.07],[-1.14,-.3],[-1.19,-.3]],Zs),...[-.51,-.65].map(f=>At(Array.from({length:31},(d,m)=>{const x=m/15-1;return[x,f+Math.sin(x*9)*.035]}),$a))],i),u=[r,o,a,c,h];for(let f=1;f<u.length;f++){const d=u[f-1].positions,m=u[f],x=new Uint8Array(i),g=new Float32Array(i*3),p=new Float32Array(i*3);for(let M=0;M<i;M++){let _=-1,v=1/0;for(let E=0;E<i;E++)if(!x[E]){const T=(d[M*3]-m.positions[E*3])**2+(d[M*3+1]-m.positions[E*3+1])**2;T<v&&(v=T,_=E)}x[_]=1,g.set(m.positions.subarray(_*3,_*3+3),M*3),p.set(m.colors.subarray(_*3,_*3+3),M*3)}m.positions=g,m.colors=p}return u}function h2(i,e=5){const t=Math.max(0,i),n=Math.floor(t/yu)%e,s=t%yu;return{cue:n,next:(n+1)%e,blend:Math.max(0,(s-Xf)/qf)}}function u2(i,e,t,n=!1){const s=t.find(m=>m.kind==="icon-siam"),r=e.sample(s.distance),o=e.sample(s.distance,s.side*(r.width/2+24)),a=c2(n?300:480),l=a[0].positions.length/3,c=new it;for(const[m,x]of[["position",a[0].positions],["destination",a[1].positions],["color",a[0].colors],["destinationColor",a[1].colors]])c.setAttribute(m,new _t(new Float32Array(x),3).setUsage(ji));c.setAttribute("droneId",new ke(Array.from({length:l},(m,x)=>x),1));const h=new vt({transparent:!0,depthWrite:!1,depthTest:!0,blending:Wi,uniforms:{time:{value:0},blend:{value:0},viewportHeight:{value:720},pixelRatio:{value:1},fogDensity:{value:i.fog?.density||0}},vertexShader:`attribute vec3 destination;attribute vec3 color;attribute vec3 destinationColor;attribute float droneId;
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
   }`}),u=new Dc(c,h);u.name="iconsiam-drone-show",u.frustumCulled=!1,u.position.set(o.x,205,o.z),u.rotation.y=Math.atan2(-r.nx*s.side,-r.nz*s.side),i.add(u);const f=new rt;u.onBeforeRender=m=>{m.getCurrentViewport(f),h.uniforms.viewportHeight.value=f.w,h.uniforms.pixelRatio.value=Math.min(2,m.getPixelRatio()),h.uniformsNeedUpdate=!0};let d=0;return{points:u,formations:a,get currentName(){return a[d].name},update(m){const{cue:x,next:g,blend:p}=h2(m,a.length);if(x!==d){for(const[M,_]of[["position",a[x].positions],["destination",a[g].positions],["color",a[x].colors],["destinationColor",a[g].colors]])c.attributes[M].array.set(_),c.attributes[M].needsUpdate=!0;d=x}h.uniforms.time.value=m,h.uniforms.blend.value=p}}}const wr=Object.freeze({condo:{occupied:.16,bayWidth:5.4,floorHeight:3.45,windowWidth:.88,windowHeight:.81,glow:.72},hotel:{occupied:.31,bayWidth:4.25,floorHeight:3.55,windowWidth:.82,windowHeight:.78,glow:.82},city:{occupied:.22,bayWidth:4.7,floorHeight:3.6,windowWidth:.82,windowHeight:.76,glow:.68},commercial:{occupied:.44,bayWidth:5.5,floorHeight:4,windowWidth:.9,windowHeight:.84,glow:.82}}),vs=i=>{const e=Math.sin(i*127.1+311.7)*43758.5453;return e-Math.floor(e)},f2=i=>[...i].reduce((e,t)=>e*31+t.charCodeAt(0)>>>0,17)%100003,el=new Map;function d2({columns:i=12,rows:e=24,style:t="condo",seed:n=1}={}){const s=wr[t],r=[];for(let o=0;o<e;o++)for(let a=0;a<i;a++){const l=n+o*137+a*61,h=!(t==="condo"&&vs(n+o*41+3001)<.12)&&vs(l)<s.occupied;r.push({row:o,col:a,lit:h,level:h?.35+vs(l+89)*.42:0,curtain:vs(l+37),tone:Math.floor(vs(l+73)*4),x:(a+(1-s.windowWidth)/2)/i,y:(o+.07)/e,w:s.windowWidth/i,h:s.windowHeight/e})}return r}function ea(i,{columns:e=12,rows:t=24,style:n="condo",stone:s="#7d898d",glass:r="#182b35",width:o=512,height:a=1024}={}){if(el.has(i))return el.get(i);const l=wr[n],c=d2({columns:e,rows:t,style:n,seed:f2(i)});let h=null,u=null;if(typeof document<"u"){const d=document.createElement("canvas"),m=document.createElement("canvas");d.width=m.width=o,d.height=m.height=a;const x=d.getContext("2d"),g=m.getContext("2d");x.fillStyle=s,x.fillRect(0,0,o,a),g.fillStyle="#000",g.fillRect(0,0,o,a);const p=o/e,M=a/t;for(const _ of c){const v=_.x*o,E=_.y*a,T=_.w*o,w=_.h*a;x.fillStyle="#0b141b",x.fillRect(v-1,E-1,T+2,w+2);const R=x.createLinearGradient(v,E,v+T*.7,E+w);R.addColorStop(0,r),R.addColorStop(.55,"#24363e"),R.addColorStop(1,"#101c25"),x.fillStyle=R,x.fillRect(v,E,T,w),x.fillStyle="rgba(7,14,20,.38)",x.fillRect(v,E,T,w*.11),x.fillRect(v,E,Math.max(1,T*.05),w);const S=T*(.09+_.curtain*.34),b=_.curtain>.5;if(x.fillStyle=_.curtain>.76?"#46504e":"#2d383b",x.fillRect(b?v:v+T-S,E+1,S,w-2),_.lit){const L=g.createLinearGradient(v,E,v,E+w);L.addColorStop(0,["#c2a47a","#d4b88c","#a9b7b3","#b99069"][_.tone]),L.addColorStop(1,"#574936"),g.globalAlpha=_.level,g.fillStyle=L,g.fillRect(v,E,T,w),g.globalAlpha=1,g.fillStyle="#191b18",g.fillRect(b?v:v+T-S,E,S,w),g.fillStyle="#090c0e",g.fillRect(v,E,T,w*.08),g.fillRect(v+T*.12,E+w*.78,T*.38,w*.22)}for(const L of[x,g])L.fillStyle=L===x?"#697577":"#000",L.fillRect(v+T*.5,E,Math.max(1,p*.022),w),L.fillRect(v,E+w*.98,T,Math.max(1,M*.025));x.fillStyle="rgba(215,217,201,.18)",x.fillRect(_.col*p,(_.row+.94)*M,p,Math.max(1,M*.035)),x.fillStyle="rgba(6,13,19,.32)",x.fillRect(_.col*p,(_.row+.98)*M,p,Math.max(1,M*.025)),n==="city"&&(x.fillStyle="rgba(9,17,19,.14)",x.fillRect(v+T*.83,E+w+2,T*.11,M*.11),_.curtain>.64&&(x.fillStyle="#667171",x.fillRect(v+T*.62,E+w*.87,T*.27,w*.18),x.fillStyle="#28363a",x.fillRect(v+T*.67,E+w*.9,T*.18,w*.09)))}h=new On(d),u=new On(m);for(const _ of[h,u])_.colorSpace=xt,_.wrapS=_.wrapT=ii,_.anisotropy=4}const f=new wt({color:13883865,map:h,emissiveMap:u,emissive:u?16774109:0,emissiveIntensity:l.glow,roughness:n==="city"?.77:.48,metalness:n==="city"?.08:.22});return f.name="facade:"+i,f.userData.facade={style:n,columns:e,rows:t,lit:c.filter(d=>d.lit).length,total:c.length,...l},el.set(i,f),f}function p2(i,{x:e,z:t,width:n,depth:s,height:r,heading:o,variant:a,material:l,wall:c,trim:h,roof:u,glass:f,detail:d=!0}){const m=wr[l.userData.facade.style],x=m.floorHeight,g=Math.cos(o),p=Math.sin(o),M=3,_=(R,S,b,L,D,N,B)=>i.box(R,e+S*g+L*p,M+b,t-S*p+L*g,D,N,B,o),v=new Rt(n,s).rotateX(Math.PI/2);i.add(v,c,e,M,t,1,1,1,o),v.dispose();const E=[[0,s/2,n,0],[0,-s/2,n,Math.PI],[n/2,0,s,Math.PI/2],[-n/2,0,s,-Math.PI/2]];for(const[R,S,b,L]of E){const D=new Rt(b,r),N=D.attributes.uv;for(let B=0;B<N.count;B++)N.setXY(B,N.getX(B)*b/(l.userData.facade.columns*m.bayWidth)+a%3/l.userData.facade.columns,N.getY(B)*r/(l.userData.facade.rows*x));i.add(D,l,e+R*g+S*p,M+r/2,t-R*p+S*g,1,1,1,o+L),D.dispose()}const T=l.userData.facade.style==="condo",w=Math.floor(r/x);if(d){for(let R=1;R<=w;R++){const S=R*x;if(T){if(_(h,0,S,0,n+1.25,.24,s+1.25),R<w)for(const[b,L,D,N]of[[0,s/2+.56,n+1.1,0],[0,-s/2-.56,n+1.1,Math.PI],[n/2+.56,0,s+1.1,Math.PI/2],[-n/2-.56,0,s+1.1,-Math.PI/2]]){const B=new Rt(D,.82);i.add(B,f,e+b*g+L*p,M+S+.62,t-b*p+L*g,1,1,1,o+N),B.dispose()}}else(R%2===0||r<26)&&_(h,0,S,0,n+.25,.2,s+.25)}for(const R of[-1,1]){for(const S of[-1,1])_(c,R*(n/2-.16),r/2,S*(s/2-.16),.64,r,.64);T&&_(c,R*n*.23,r/2,s/2+.45,.23,r,1.1)}_(f,0,1.9,s/2+.03,Math.min(n*.4,8),3.6,.13),_(h,0,3.9,s/2+.8,Math.min(n*.55,11),.3,2.1),_(c,n*.15,r+1.5,-s*.1,n*.31,3,s*.33)}_(u,0,r+.16,0,n+.45,.35,s+.45);for(const R of[-1,1])_(h,0,r+.6,R*s/2,n,.85,.28),_(h,R*n/2,r+.6,0,.28,.85,s)}const m2=JSON.parse('[{"id":"millennium-hilton","osmId":342556929,"name":"Millennium Hilton","thai":"มิลเลนเนียม ฮิลตัน","side":1,"center":[100.5109597,13.7286941],"height":121,"floors":32,"style":"hilton","footprint":[[-39.741,-1.614],[-36.054,-2.917],[3.417,-9.874],[9.938,-11.032],[15.313,-14.449],[20.893,-16.587],[24.418,-17.01],[29.349,-17.399],[33.761,-17.266],[39.914,-14.049],[43.213,-9.841],[44.564,-5.154],[44.489,-0.623],[43.234,3.306],[39.817,7.481],[34.464,10.241],[27.24,11.677],[21.109,11.544],[17.389,10.642],[13.344,10.019],[-32.009,17.255],[-36.205,17.399],[-39.547,15.707],[-42.348,13.28],[-44.564,8.638],[-43.721,3.328],[-39.741,-1.614]],"geometry":[[100.5105922,13.7287086],[100.5106263,13.7287203],[100.5109913,13.7287828],[100.5110516,13.7287932],[100.5111013,13.7288239],[100.5111529,13.7288431],[100.5111855,13.7288469],[100.5112311,13.7288504],[100.5112719,13.7288492],[100.5113288,13.7288203],[100.5113593,13.7287825],[100.5113718,13.7287404],[100.5113711,13.7286997],[100.5113595,13.7286644],[100.5113279,13.7286269],[100.5112784,13.7286021],[100.5112116,13.7285892],[100.5111549,13.7285904],[100.5111205,13.7285985],[100.5110831,13.7286041],[100.5106637,13.7285391],[100.5106249,13.7285378],[100.510594,13.728553],[100.5105681,13.7285748],[100.5105476,13.7286165],[100.5105554,13.7286642],[100.5105922,13.7287086]],"tags":{"addr:city":"แขวงบางรัก","addr:housenumber":"123","addr:postcode":"10600","addr:street":"ถนนเจริญนคร","brand":"Millennium","brand:wikidata":"Q6858774","building":"yes","building:levels":"32","building:part":"yes","contact:facebook":"https://www.facebook.com/Hiltonbangkok","contact:instagram":"https://www.instagram.com/millenniumhiltonbangkok","contact:twitter":"https://twitter.com/hiltonbangkok","contact:youtube":"https://www.youtube.com/channel/UCGbgK6kYjOVNUhKsxfQ7MXg","email":"bkkhi.informations@hilton.com","internet_access":"wlan","internet_access:fee":"no","layer":"1","name":"Millennium Hilton Bangkok","official_name":"Millennium Hotels & Resorts","operator":"Hilton","payment:american_express":"yes","payment:cash":"yes","payment:credit_cards":"yes","payment:debit_cards":"yes","payment:diners_club":"yes","payment:eurocard":"yes","payment:jcb":"yes","payment:mastercard":"yes","payment:unionpay":"yes","payment:visa":"yes","phone":"+66 2 442 2000","rooms":"533","smoking":"yes","stars":"5","tourism":"hotel","website":"https://www.hilton.com/en/hotels/bkkhitw-millennium-hilton-bangkok/?SEO_id=OTHR-APAC-TW-BKKHITW","wheelchair":"yes","wikidata":"Q47518776","wikimedia_commons":"Category:Millennium Hilton Bangkok"},"source":"https://www.openstreetmap.org/way/342556929","reference":"https://www.hilton.com/en/hotels/bkkhitw-millennium-hilton-bangkok/","heightSource":"Approximate authored height from storey count and exterior reference","floorSource":"OSM tag"},{"id":"royal-orchid","osmId":1537453215,"name":"Royal Orchid Sheraton","thai":"รอยัล ออคิด เชอราตัน","side":-1,"center":[100.51354620000001,13.72915385],"height":94,"floors":28,"style":"sheraton","footprint":[[-29.933,48.508],[-10.371,44.678],[-5.656,57.603],[44.11,43.487],[38.271,16.882],[20.72,4.893],[18.546,-5.015],[17.594,-10.414],[29.738,-29.539],[25.11,-57.603],[13.842,-55.421],[-0.173,-52.838],[-30.409,-21.769],[-44.11,-18.73],[-29.933,48.508]],"geometry":[[100.5132694,13.7287181],[100.5134503,13.7287525],[100.5134939,13.7286364],[100.5139541,13.7287632],[100.5139001,13.7290022],[100.5137378,13.7291099],[100.5137177,13.7291989],[100.5137089,13.7292474],[100.5138212,13.7294192],[100.5137784,13.7296713],[100.5136742,13.7296517],[100.5135446,13.7296285],[100.513265,13.7293494],[100.5131383,13.7293221],[100.5132694,13.7287181]],"tags":{"addr:district":"บางรัก","addr:housenumber":"2","addr:postcode":"10500","addr:province":"กรุงเทพมหานคร","addr:street":"ซอยเจริญกรุง 30","addr:subdistrict":"บางรัก","brand":"Sheraton","brand:wikidata":"Q634831","building":"yes","email":"royalorchid@sheraton.com","fax":"+66 2 236 8320","internet_access":"yes","internet_access:fee":"customers","name":"รอยัลออคิด เชอราตัน","name:en":"Royal Orchid Sheraton","name:th":"รอยัลออคิด เชอราตัน","phone":"+66 2 266 0123","tourism":"hotel","website":"https://www.marriott.com/hotels/travel/bkksi-royal-orchid-sheraton-hotel-and-towers/"},"source":"https://www.openstreetmap.org/way/1537453215","reference":"https://www.marriott.com/en-us/hotels/bkksi-royal-orchid-sheraton-riverside-hotel-bangkok/overview/","heightSource":"Approximate authored height from storey count and exterior reference","floorSource":"Approximate facade count"},{"id":"peninsula","osmId":134464576,"name":"The Peninsula","thai":"เดอะ เพนนินซูลา","side":1,"center":[100.51105455000001,13.723108700000001],"height":151,"floors":37,"style":"peninsula","footprint":[[-11.198,-10.42],[-11.879,1.859],[-5.283,8.238],[-6.991,10.019],[-6.991,15.841],[-10.127,15.028],[-15.491,19.336],[-15.372,23.066],[-9.662,29.7],[10.83,30.168],[10.722,20.85],[5.358,21.195],[9.316,17.477],[11.998,17.589],[14.442,14.216],[14.215,11.421],[10.019,7.102],[15.372,2.683],[15.491,-8.037],[11.652,-13.737],[15.145,-16.999],[15.026,-21.774],[4.655,-30.168],[1.519,-30.045],[-6.407,-23.177],[-6.288,-19.448],[-4.19,-16.887],[-11.198,-10.42]],"geometry":[[100.510951,13.7232023],[100.5109447,13.723092],[100.5110057,13.7230347],[100.5109899,13.7230187],[100.5109899,13.7229664],[100.5109609,13.7229737],[100.5109113,13.722935],[100.5109124,13.7229015],[100.5109652,13.7228419],[100.5111547,13.7228377],[100.5111537,13.7229214],[100.5111041,13.7229183],[100.5111407,13.7229517],[100.5111655,13.7229507],[100.5111881,13.722981],[100.511186,13.7230061],[100.5111472,13.7230449],[100.5111967,13.7230846],[100.5111978,13.7231809],[100.5111623,13.7232321],[100.5111946,13.7232614],[100.5111935,13.7233043],[100.5110976,13.7233797],[100.5110686,13.7233786],[100.5109953,13.7233169],[100.5109964,13.7232834],[100.5110158,13.7232604],[100.510951,13.7232023]],"tags":{"building":"yes","building:levels":"40"},"source":"https://www.openstreetmap.org/way/134464576","reference":"https://www.peninsula.com/en/bangkok/5-star-luxury-hotel-riverside","heightSource":"Approximate authored height from storey count and exterior reference","floorSource":"Operator reference"},{"id":"shangri-la","osmId":1340837007,"name":"Shangri-La Bangkok","thai":"แชงกรี-ลา กรุงเทพฯ","side":-1,"center":[100.5140167,13.72150005],"height":86,"floors":25,"style":"shangri","footprint":[[-23.434,-35.016],[-27.24,-33.691],[-31.642,-29.951],[-34.302,-26.444],[-35.935,-23.06],[-37.233,-16.915],[-24.007,-7.731],[-15.929,0.106],[-6.002,12.229],[-0.735,21.902],[2.693,35.016],[16.189,31.32],[20.017,21.535],[27.673,12.93],[37.233,9.635],[37.233,-5.149],[31.599,-4.937],[19.271,-7.598],[11.831,-10.035],[1.514,-14.611],[-12.62,-25.242],[-18.47,-30.129],[-23.434,-35.016]],"geometry":[[100.5138,13.7218146],[100.5137648,13.7218027],[100.5137241,13.7217691],[100.5136995,13.7217376],[100.5136844,13.7217072],[100.5136724,13.721652],[100.5137947,13.7215695],[100.5138694,13.7214991],[100.5139612,13.7213902],[100.5140099,13.7213033],[100.5140416,13.7211855],[100.5141664,13.7212187],[100.5142018,13.7213066],[100.5142726,13.7213839],[100.514361,13.7214135],[100.514361,13.7215463],[100.5143089,13.7215444],[100.5141949,13.7215683],[100.5141261,13.7215902],[100.5140307,13.7216313],[100.5139,13.7217268],[100.5138459,13.7217707],[100.5138,13.7218146]],"tags":{"addr:district":"บางรัก","addr:postcode":"10500","addr:province":"กรุงเทพมหานคร","addr:subdistrict":"บางรัก","building":"hotel","building:levels":"24"},"source":"https://www.openstreetmap.org/way/1340837007","reference":"https://www.shangri-la.com/en/bangkok/shangrila/rooms-suites/rooms/shangri-la-wing/about-the-shangri-la-wing/","heightSource":"Approximate authored height from storey count and exterior reference","floorSource":"Operator reference"},{"id":"magnolias","osmId":680736465,"name":"Magnolias Waterfront","thai":"แมกโนเลียส์ วอเตอร์ฟร้อนท์","side":1,"center":[100.51049555,13.7275269],"height":317.95,"floors":70,"style":"magnolias","footprint":[[-31.896,-33.34],[-5.748,-38.639],[-0.287,-25.637],[1.454,-23.277],[7.51,-18.657],[25.959,-5.299],[27.484,-3.585],[28.619,-1.636],[31.896,15.941],[11.176,38.172],[-4.937,38.483],[-14.247,38.639],[-16.767,37.481],[-18.595,35.455],[-31.896,-33.34]],"geometry":[[100.5102006,13.7278264],[100.5104424,13.727874],[100.5104929,13.7277572],[100.510509,13.727736],[100.510565,13.7276945],[100.5107356,13.7275745],[100.5107497,13.7275591],[100.5107602,13.7275416],[100.5107905,13.7273837],[100.5105989,13.727184],[100.5104499,13.7271812],[100.5103638,13.7271798],[100.5103405,13.7271902],[100.5103236,13.7272084],[100.5102006,13.7278264]],"tags":{"building":"apartments","building:levels":"70","check_date":"2021-04-22","height":"317.95","name":"Magnolias Waterfront Residences","name:en":"Magnolias Waterfront Residences","name:th":"แมกโนเลียส์ วอเตอร์ฟร้อนท์ เรสซิเดนเซส","tourism":"apartment","wikipedia":"en:Iconsiam"},"source":"https://www.openstreetmap.org/way/680736465","reference":"https://www.iconsiam.com/","heightSource":"OSM height tag","floorSource":"OSM tag"},{"id":"oriental-residences","osmId":680739268,"name":"The Residences at Mandarin Oriental","thai":"เดอะ เรสซิเดนเซส แอท แมนดาริน โอเรียนเต็ล","side":1,"center":[100.51091095000001,13.727850799999999],"height":272.2,"floors":52,"style":"residences","footprint":[[32.296,-27.997],[33.118,-26.249],[29.939,-8.75],[-0.589,26.906],[-2.839,28.787],[-6.148,28.476],[-28.9,6.401],[-30.76,3.963],[-33.118,-5.933],[-12.333,-17.7],[-6.429,-23.366],[30.144,-28.787],[32.296,-27.997]],"geometry":[[100.5112096,13.7281023],[100.5112172,13.7280866],[100.5111878,13.7279294],[100.5109055,13.7276091],[100.5108847,13.7275922],[100.5108541,13.727595],[100.5106437,13.7277933],[100.5106265,13.7278152],[100.5106047,13.7279041],[100.5107969,13.7280098],[100.5108515,13.7280607],[100.5111897,13.7281094],[100.5112096,13.7281023]],"tags":{"building":"apartments","building:levels":"52","height":"272.2","name":"The Residences at Mandarin Oriental","name:en":"The Residences at Mandarin Oriental","name:th":"เดอะ เรสซิเดนเซส แอท แมนดาริน โอเรียนเต็ล"},"source":"https://www.openstreetmap.org/way/680739268","reference":"https://www.mandarinoriental.com/en/residences/at-mandarin-oriental/bangkok","heightSource":"OSM height tag","floorSource":"OSM tag"}]'),g2={buildings:m2},Yf=g2.buildings,bo=new Map(Yf.map(i=>[i.id,i]));function x2(i){const e={hilton:["#c3c7bf","#48616c"],sheraton:["#d0b293","#43515a"],peninsula:["#c5b7a0","#344a58"],shangri:["#baa68e","#344c59"],magnolias:["#a0b3ba","#344c60"],residences:["#bbb7a7","#344952"]},[t,n]=e[i.style],s=["magnolias","residences"].includes(i.style)?"condo":"hotel";return ea(i.id,{columns:12,rows:i.floors,style:s,stone:t,glass:n,height:2048})}function v2(i,e,t){let n=e.footprint.slice(0,-1).map(w=>[...w]);n.reduce((w,R,S)=>{const b=n[(S+1)%n.length];return w+R[0]*b[1]-b[0]*R[1]},0)>0&&n.reverse();const r=e.height-7,o=4.5,a=x2(e),l=r/e.floors,c=["magnolias","residences"].includes(e.style),h=e.style==="sheraton"?t.stone:t.concrete,u=Math.min(...n.map(w=>w[0])),f=Math.max(...n.map(w=>w[0])),d=Math.min(...n.map(w=>w[1])),m=Math.max(...n.map(w=>w[1])),x=new nn(n.map(([w,R])=>new $(w,-R))),g=new oi(x);g.rotateX(-Math.PI/2),i.add(g,t.concrete,0,o+r,0);const p=new Nn(x,{depth:o,bevelEnabled:!1});p.rotateX(-Math.PI/2),i.add(p,t.oldStone);const M=[];for(let w=0;w<n.length;w++){const R=n[w],S=n[(w+1)%n.length],b=S[0]-R[0],L=S[1]-R[1],D=Math.hypot(b,L);if(D<.1)continue;const N=(R[0]+S[0])/2,B=(R[1]+S[1])/2,O=Math.atan2(-L,b),V=Math.sin(O),Z=Math.cos(O),W=new Rt(D,r),re=W.attributes.uv;for(let fe=0;fe<re.count;fe++)re.setX(fe,re.getX(fe)*D/(12*wr[a.userData.facade.style].bayWidth)+w%4/12);i.add(W,a,N,o+r/2,B,[0,O,0]);for(let fe=0;fe<=e.floors;fe++)i.box(D+.18,c?.22:.38,e.style==="peninsula"?1.05:.65,N+V*.15,o+fe*l,B+Z*.15,h,[0,O,0]);if(D>8){const fe=Math.round(D/(e.style==="hilton"?7:11));for(let ne=0;ne<=fe;ne++){const ze=ne/fe;i.box(.38,r+.5,.38,R[0]+b*ze+V*.2,o+r/2,R[1]+L*ze+Z*.2,t.plaster)}}if(V*e.side>.45&&D>12&&(M.push({x:N,zz:B,angle:O,nx:V,nz:Z,length:D}),!c)){const fe=Math.max(1,Math.round(D/(e.style==="peninsula"?5.6:7.4)));for(let ne=0;ne<=fe;ne++){const ze=(ne/fe-.5)*D;i.box(.27,r,1.15,N+Math.cos(O)*ze+V*.4,o+r/2,B-Math.sin(O)*ze+Z*.4,t.plaster,[0,O,0])}if(e.style!=="hilton")for(let ne=1;ne<e.floors;ne++)i.box(D,.2,1.15,N+V*.45,o+ne*l,B+Z*.45,h,[0,O,0]),i.box(D-.3,.68,.12,N+V*.94,o+ne*l+.49,B+Z*.94,t.glass,[0,O,0])}}const _=(u+f)/2,v=(d+m)/2,E=o+r;if(e.style==="hilton"){const w=f-16.9,R=-3;i.cylinder(12.9,13.8,3.8,w,E+1.9,R,t.glass,32),i.cylinder(15.3,14.5,1,w,E+4.25,R,t.white,32),i.cylinder(8.7,15.3,1,w,E+5.25,R,t.concrete,32);for(let S=0;S<24;S++){const b=S*Math.PI/12;i.box(.15,3.8,.15,w+Math.sin(b)*13.15,E+1.9,R+Math.cos(b)*13.15,t.bronze)}i.cylinder(13.9,13.9,.15,w,E+.15,R,t.softLight,32),i.box(30,1,15,-14,E+.5,1,t.dark,[0,.17,0]);for(let S=-25;S<0;S+=4)i.box(.18,2.4,13,S,E+1.7,1,t.plaster,[0,.17,0])}else if(e.style==="peninsula"){i.box(16,4,24,_,E+2,v-5,t.plaster),i.cylinder(10.4,10.4,.5,_,E+4.5,v-5,t.concrete,8),i.add(new Ko(7.8,8,32),t.white,_,E+4.77,v-5,[-Math.PI/2,0,0]);for(const w of[-2,2])i.box(.45,.025,5,_+w,E+4.79,v-5,t.white);i.box(4,.025,.45,_,E+4.79,v-5,t.white)}else if(c){const w=e.style==="magnolias"?.83:.76,R=new nn(n.map(([L,D])=>new $(_+(L-_)*w,-(v+(D-v)*w)))),S=new Nn(R,{depth:5.8,bevelEnabled:!1});S.rotateX(-Math.PI/2),i.add(S,t.glass,0,E,0);const b=new Nn(R,{depth:.42,bevelEnabled:!1});b.rotateX(-Math.PI/2),i.add(b,t.plaster,0,E+5.8,0);for(let L=0;L<n.length;L++){const D=n[L],N=n[(L+1)%n.length],B=Math.hypot(N[0]-D[0],N[1]-D[1]),O=Math.max(1,Math.ceil(B/5.5));for(let V=0;V<O;V++){const Z=V/O,W=_+(D[0]+(N[0]-D[0])*Z-_)*w,re=v+(D[1]+(N[1]-D[1])*Z-v)*w;i.box(.24,6,.24,W,E+3,re,e.style==="magnolias"?t.plaster:t.bronze)}}for(const L of M){const{x:D,zz:N,angle:B,nx:O,nz:V,length:Z}=L;if(!(Z<21))for(const W of[-1,1]){const re=W*(Z/2-.85);i.box(1,r+.7,1.5,D+Math.cos(B)*re+O*.4,o+r/2,N-Math.sin(B)*re+V*.4,t.plaster,[0,B,0])}}}else if(e.style==="sheraton")for(const w of[-12,16])i.box((f-u)*.45,3.9,9,_,E+1.95,v+w,t.stone),i.box((f-u)*.48,.55,10,_,E+4,v+w,t.plaster);else{i.box(30,3.2,18,_,E+1.6,v,t.plaster,[0,-.65,0]);for(const w of[-1,1])i.box(16,.65,20,_+w*6.5,E+4,v,t.roof,[0,-.65,-w*.18])}M.sort((w,R)=>R.length-w.length);const T=M[0];if(a.userData.facade.style==="condo")for(const w of M.slice(0,2)){const{x:R,zz:S,angle:b,nx:L,nz:D,length:N}=w;for(let O=1;O<e.floors;O++){const V=o+O*l;i.box(N,.22,1.18,R+L*.38,V,S+D*.38,t.concrete,[0,b,0]),i.box(N-.25,.85,.1,R+L*.92,V+.63,S+D*.92,t.glass,[0,b,0])}const B=Math.max(1,Math.round(N/10.8));for(let O=1;O<B;O++){const V=(O/B-.5)*N;i.box(.2,r,1.18,R+Math.cos(b)*V+L*.42,o+r/2,S-Math.sin(b)*V+D*.42,t.concrete,[0,b,0])}}if(T){const w={hilton:"Hilton",sheraton:"ROYAL ORCHID SHERATON",peninsula:"THE PENINSULA",shangri:"Shangri-La",magnolias:"MAGNOLIAS",residences:"MANDARIN ORIENTAL"},R=Math.min(T.length*.8,e.style==="sheraton"?29:23),S=e.style==="hilton"?3.7:2.3;i.add(new Rt(R,S),_2(w[e.style]),T.x+T.nx*.8,o+r-3,T.zz+T.nz*.8,[0,T.angle,0]),i.box(Math.min(T.length,28),.7,4,T.x-T.nx*1.3,5.8,T.zz-T.nz*1.3,t.plaster,[0,T.angle,0])}i.kind=e.id}const tl=new Map;function _2(i){if(tl.has(i))return tl.get(i);let e=null;if(typeof document<"u"){const n=document.createElement("canvas");n.width=1024,n.height=160;const s=n.getContext("2d");s.fillStyle="#161c21",s.fillRect(0,0,1024,160),s.fillStyle="#eee0bb",s.font="500 92px Georgia,serif",s.textAlign="center",s.textBaseline="middle",s.fillText(i,512,80,940),e=new On(n),e.colorSpace=xt,e.anisotropy=4}const t=new wt({map:e,emissiveMap:e,color:16777215,emissive:16770479,emissiveIntensity:.9,roughness:.65});return tl.set(i,t),t}const bu=new P,wu=new tn,Eu=new Bt,Tu=new P,Au=new Ze;let Gc=class{constructor(e){this.kind=e,this.parts=new Map}add(e,t,n=0,s=0,r=0,o=[0,0,0],a=[1,1,1]){if(bu.set(n,s,r),wu.set(...o),Eu.setFromEuler(wu),Tu.set(...a),Au.compose(bu,Eu,Tu),e.applyMatrix4(Au),e.index){const l=e;e=l.toNonIndexed(),l.dispose()}e.deleteAttribute("tangent"),this.parts.has(t)||this.parts.set(t,[]),this.parts.get(t).push(e)}box(e,t,n,s,r,o,a,l=[0,0,0]){this.add(new un(e,t,n),a,s,r,o,l)}cylinder(e,t,n,s,r,o,a,l=16,c=[1,1,1]){this.add(new vn(e,t,n,l),a,s,r,o,[0,0,0],c)}sphere(e,t,n,s,r,o=[1,1,1]){this.add(new en(e,16,10),r,t,n,s,[0,0,0],o)}line(e,t,n=.12,s,r=6){const o=new P(...t).sub(new P(...e)),a=new vn(n,n,o.length(),r);a.applyQuaternion(new Bt().setFromUnitVectors(new P(0,1,0),o.normalize())),this.add(a,s,(e[0]+t[0])/2,(e[1]+t[1])/2,(e[2]+t[2])/2)}finish(){const e=new Qt;e.name=`landmark:${this.kind}`;for(const[t,n]of this.parts){const s=Bs(n,!1);for(const o of n)o.dispose();s.computeBoundingSphere();const r=new lt(s,t);r.castShadow=!0,r.receiveShadow=!0,e.add(r)}return e.userData.landmark=this.kind,e}};const $n=new Map,nl=new Map,ct=(i,e,t={})=>($n.has(i)||$n.set(i,new wt({color:e,roughness:.78,...t})),$n.get(i)),H={stone:ct("stone","#d8cbb2"),porcelain:ct("porcelain","#ece1c8"),plaster:ct("plaster","#ddd2bd"),white:ct("white","#e0ddcc"),concrete:ct("concrete","#b7b8b4"),oldStone:ct("oldStone","#a18b72"),gold:ct("gold","#dcb358",{metalness:.48,roughness:.32,emissive:"#8f571b",emissiveIntensity:.2}),warm:ct("warm","#fff0c4",{emissive:"#ffd48a",emissiveIntensity:1.8,roughness:.4}),softLight:ct("softLight","#dfc28c",{emissive:"#ffc677",emissiveIntensity:.8}),tile:ct("tile","#973c27"),tileGreen:ct("tileGreen","#296657"),red:ct("red","#7f2920"),teal:ct("teal","#347b72"),dark:ct("dark","#171e24"),bronze:ct("bronze","#625448",{metalness:.55,roughness:.35}),leaf:ct("leaf","#284331",{side:Ot}),pool:ct("pool","#294b50",{metalness:.25,roughness:.22}),roof:ct("roof","#473f37"),redBrick:ct("redBrick","#a77963"),glass:ct("glass","#33464c",{roughness:.27,metalness:.4}),window:ct("window","#ad9c72",{emissive:"#ddac59",emissiveIntensity:.55}),stained:ct("stained","#ccb076",{emissive:"#d18b47",emissiveIntensity:.8})};function Uo(i,e,t){if(typeof document>"u")return null;const n=document.createElement("canvas");n.width=i,n.height=e,t(n.getContext("2d"),i,e);const s=new On(n);return s.colorSpace=xt,s.anisotropy=4,s}function Yi(i,e=24,t=60,n=!1){const s=i.startsWith("river-tower")?"condo":i.includes("hotel")||i.includes("wing")?"hotel":n?"commercial":"city";return ea(i,{columns:e,rows:t,style:s,stone:n?"#596364":"#64737b",glass:n?"#293334":"#203540",width:768,height:1536})}function M2(i,e="#fff1c0",t="#29261e"){const n=`sign:${i}:${e}`;if($n.has(n))return $n.get(n);const s=Uo(1024,160,(r,o,a)=>{r.fillStyle=t,r.fillRect(0,0,o,a),r.fillStyle=e,r.textAlign="center",r.textBaseline="middle",r.font="500 100px Georgia, serif",r.fillText(i,o/2,a/2+3,o-65)});return ct(n,"#ffffff",{map:s,emissiveMap:s,emissive:e,emissiveIntensity:.85,roughness:.55})}class y2 extends Gc{sign(e,t,n,s,r,o,a,l){this.add(new Rt(t,n),M2(e,a,l),s,r,o)}}function Vc(i,e,t,n,s,r,o,a=1,l=0){for(let c=0;c<o;c++){const h=(c+1)*s/o;i.box(n,h,r/o+.03,e,l+h/2,t+a*(r/2-(c+.5)*r/o),H.stone)}}function S2(i,e,t,n,s,r,o,a=H.tile){const l=Math.atan2(o,s/2),c=Math.hypot(s/2,o);for(const h of[-1,1]){i.box(c+.25,.45,r,e+h*s/4,t+o/2,n,a,[0,0,-h*l]);for(const u of[-1,1])i.line([e,t+o+.2,n+u*r/2],[e+h*s/2,t+.1,n+u*r/2],.16,H.gold);i.line([e+h*s/2,t,n-r/2],[e+h*s/2,t,n+r/2],.12,H.gold)}i.line([e,t+o+.25,n-r/2],[e,t+o+.25,n+r/2],.2,H.gold);for(const h of[-1,1]){const u=new nn;u.moveTo(-s/2+.7,0),u.lineTo(s/2-.7,0),u.lineTo(0,o-.4),u.closePath(),i.add(new oi(u),H.red,e,t,n+h*(r/2-.15),[0,h===-1?Math.PI:0,0]),i.line([e,t+o,n+h*r/2],[e,t+o+2.3,n+h*(r/2+.55)],.18,H.gold),i.line([e,t+o+2.3,n+h*(r/2+.55)],[e,t+o+3,n+h*(r/2+1.6)],.09,H.gold),i.sphere(.65,e,t+o*.49,n+h*(r/2+.12),H.gold,[1,1,.15])}}function ws(i,e,t,n,s,r,o,a=H.tile){if(a!==H.tile&&a!==H.tileGreen){S2(i,e,t,n,s,r,o,a);return}const l=10,c=h=>o*Math.pow(1-h,1.6)+.55*Math.pow(h,9);for(const h of[-1,1]){const u=new nn;u.moveTo(0,o);for(let f=1;f<=l;f++)u.lineTo(h*s/2*f/l,c(f/l));for(let f=l;f>=0;f--)u.lineTo(h*s/2*f/l,c(f/l)-.35);u.closePath(),i.add(new Nn(u,{depth:r,bevelEnabled:!1}),a,e,t,n-r/2);for(const f of[-1,1])for(let d=0;d<l;d++)i.line([e+h*s/2*d/l,t+c(d/l)+.06,n+f*r/2],[e+h*s/2*(d+1)/l,t+c((d+1)/l)+.06,n+f*r/2],.145,H.gold);i.line([e+h*s/2,t+.6,n-r/2],[e+h*s/2,t+.6,n+r/2],.15,H.gold);for(let f=2;f<l;f++)i.line([e+h*s/2*f/l,t+c(f/l)+.025,n-r/2],[e+h*s/2*f/l,t+c(f/l)+.025,n+r/2],.045,f%3===0?H.gold:a,4)}i.line([e,t+o+.13,n-r/2],[e,t+o+.13,n+r/2],.22,H.gold);for(const h of[-1,1]){const u=new nn;u.moveTo(-s/2,.2),u.lineTo(s/2,.2);for(let d=l;d>=0;d--)u.lineTo(s/2*d/l,c(d/l)-.35);for(let d=1;d<=l;d++)u.lineTo(-s/2*d/l,c(d/l)-.35);u.closePath(),i.add(new oi(u),H.red,e,t,n+h*(r/2-.12),[0,h<0?Math.PI:0,0]);const f=new br([new P(e,t+o,n+h*r/2),new P(e,t+o+1.4,n+h*(r/2+.3)),new P(e,t+o+2.9,n+h*(r/2+1.2)),new P(e,t+o+3.2,n+h*(r/2+1.85))]);i.add(new Zo(f,9,.13,5,!1),H.gold);for(const d of[-1,1])i.line([e+d*s/2,t+.55,n+h*r/2],[e+d*(s/2+.35),t+1.55,n+h*(r/2+.4)],.12,H.gold);i.sphere(.65,e,t+o*.42,n+h*(r/2+.08),H.gold,[1,1,.16]);for(let d=0;d<7;d++){const m=d*Math.PI/3.5;i.line([e,t+o*.42,n+h*(r/2+.1)],[e+Math.sin(m)*1.35,t+o*.42+Math.cos(m)*1.35,n+h*(r/2+.1)],.065,H.gold,4)}}}function Us(i,e,t,n=21,s=38,r=1,o=H.tile){const a=n*r,l=s*r,c=8*r;i.box(a+4,1.1,l+4,e,.55,t,H.oldStone),i.box(a,c,l,e,c/2+1,t,H.plaster);for(const h of[-1,1])for(let u=-l/2+4;u<l/2;u+=5*r)i.box(.4,4.6*r,1.9*r,e+h*(a/2+.08),c/2+1.3,t+u,H.gold),i.box(.45,3.9*r,1.25*r,e+h*(a/2+.1),c/2+1.3,t+u,H.dark);for(const h of[-1,1])for(let u=-l/2+1;u<=l/2;u+=5*r)i.cylinder(.26*r,.4*r,c+.2,e+h*(a/2+1.25),c/2+1,t+u,H.porcelain,8),i.box(1,.4,1,e+h*(a/2+1.25),c+1,t+u,H.gold);i.box(a*.22,c*.72,.25,e,1+c*.36,t+l/2+.15,H.gold),i.box(a*.17,c*.63,.28,e,1+c*.315,t+l/2+.2,H.dark),ws(i,e,c+1,t,a+5*r,l+6*r,6.5*r,o),ws(i,e,c+4*r,t,a+.6*r,l-2*r,6.4*r,o),ws(i,e,c+7*r,t,a-4*r,l-10*r,5.6*r,o),Vc(i,e,t+l/2+3.5,a*.4,1.2,3.2,6,1);for(const h of[-1,1])i.box(.18,.22,l+4,e+h*(a/2+1.5),1.2,t,H.warm)}function b2(){if($n.has("arun-porcelain"))return $n.get("arun-porcelain");const i=Uo(512,512,(e,t,n)=>{e.fillStyle="#cebb94",e.fillRect(0,0,t,n);for(let s=0;s<12;s++)for(let r=0;r<12;r++){const o=(r+.5+s%2*.25)*t/12,a=(s+.5)*n/12,l=vs(s*41+r*7);e.fillStyle=l<.3?"#75847a":l<.65?"#997763":"#e4cf9b";for(let c=0;c<6;c++){const h=c*Math.PI/3;e.beginPath(),e.ellipse(o+Math.sin(h)*6,a+Math.cos(h)*6,2.7,4.5,-h,0,Math.PI*2),e.fill()}e.fillStyle="#dfd0ad",e.beginPath(),e.arc(o,a,3,0,Math.PI*2),e.fill(),e.fillStyle="#a9926d",e.fillRect(o-16,a+17,25,1.5)}});return i&&(i.wrapS=i.wrapT=ii,i.repeat.set(2,3)),ct("arun-porcelain","#f4d9ad",{map:i,bumpMap:i,bumpScale:.15,roughness:.86,emissive:"#bb791f",emissiveIntensity:.22})}function w2(i,e,t,n,s,r,o){const a=new nn,l=[[1,.52],[.76,.52],[.76,.76],[.52,.76],[.52,1]];let c=!0;for(let u=0;u<4;u++)for(const[f,d]of l){const m=u*Math.PI/2,x=(f*Math.cos(m)-d*Math.sin(m))*r,g=(f*Math.sin(m)+d*Math.cos(m))*r;c?(a.moveTo(x,g),c=!1):a.lineTo(x,g)}a.closePath();const h=new Nn(a,{depth:s,bevelEnabled:!1,steps:1});h.rotateX(-Math.PI/2),i.add(h,o,e,n,t)}function Cu(i,e,t,n=76,s=15){const r=n/76,o=s/15.2,a=b2(),l=ct("arun-trim","#d8b47d",{roughness:.8,emissive:"#b57b27",emissiveIntensity:.19}),c=ct("arun-recess","#7d765b",{roughness:.9,emissive:"#76531f",emissiveIntensity:.12}),h=ct("arun-jade","#577768",{roughness:.78,emissive:"#806b25",emissiveIntensity:.14}),u=ct("arun-rose","#946e58",{roughness:.78,emissive:"#a16a23",emissiveIntensity:.14}),f=(_,v,E,T)=>w2(i,e,t,_*r,v*r,E*o,T);f(0,1.3,17.8,l),f(1.3,.55,18.1,a);for(const[_,v,E]of[[1.85,5.5,16.5],[8.2,6,13.6],[15,6.7,11.3],[22.6,6.4,9.4]]){f(_,v,E,a),f(_+.15,.42,E+.3,c),f(_+.65,.26,E+.44,l),f(_+v-.9,.3,E+.34,c),f(_+v-.55,.55,E+.78,a),f(_+v,.45,E+1,l);for(let w=_+1.35;w<_+v-1;w+=1.15)f(w,.17,E+.1,l);const T=n>40?6:3;for(let w=0;w<4;w++)for(let R=0;R<T;R++){const S=w*Math.PI/2,b=((R+.5)/T-.5)*E*1.02*o,L=e+Math.sin(S)*(E*o+.17*r)+Math.cos(S)*b,D=t+Math.cos(S)*(E*o+.17*r)-Math.sin(S)*b,N=(_+v*.52)*r;i.add(new zi(.6*r),R%2?a:h,L,N,D,[0,S,0],[1,1.6,.48]),i.add(new en(.27*r,6,4),l,L,N+.9*r,D,[0,0,0],[1,1.12,1]);for(const B of[-1,1])i.line([L+Math.cos(S)*B*.35*r,N+.15*r,D-Math.sin(S)*B*.35*r],[L+Math.cos(S)*B*.6*r,N+1.15*r,D-Math.sin(S)*B*.6*r],.12*r,a,5)}}for(const _ of[-1,1]){Vc(i,e,t+_*15.2*o,3.8*o,21.7*r,15*o,26,_);for(let v=0;v<26;v++){const E=(v+1)*21.7*r/26,T=e+_*(22.7-(v+.5)*15/26)*o;i.box(15*o/26+.02,E,3.8*o,T,E/2,t,H.stone)}for(const v of[-1,1])i.line([e+v*2.25*o,.9*r,t+_*22.7*o],[e+v*2.25*o,22.7*r,t+_*7.7*o],.29*r,l,6),i.line([e+_*22.7*o,.9*r,t+v*2.25*o],[e+_*7.7*o,22.7*r,t+v*2.25*o],.29*r,l,6)}f(29.45,5.8,8.55,a);for(let _=0;_<4;_++){const v=_*Math.PI/2,E=e+Math.sin(v)*8.65*o,T=t+Math.cos(v)*8.65*o;i.add(new oi(jf(3.8*o,5.6*r,!0),8),c,E,28.6*r,T,[0,v,0]);for(const w of[-1,1])i.cylinder(.35*o,.45*o,6.1*r,E+Math.cos(v)*w*2.25*o,31.65*r,T-Math.sin(v)*w*2.25*o,l,8);i.box(5.5*o,.75*r,1.8*o,E,35.2*r,T,a,[0,v,0]),i.cylinder(.5*o,2.65*o,3.4*r,E,37.25*r,T,a,8),i.cylinder(0,.64*o,2*r,E,39.95*r,T,l,8),i.add(new zi(.85*r),l,E,30.2*r,T,[0,v,0],[1.1,1.45,.8])}const d=[[33,7.5],[35,8.25],[38,8.8],[41,8.8],[44,8.4],[47,7.75],[50,6.9],[53,6],[56,5.05],[59,4.12],[62,3.18],[65,2.3],[68,1.48],[70,.88],[71.2,.53]],x=new Oc(d.map(([_,v])=>new $(v*o,_*r))).getPoints(54),g=new jo(x,32),p=g.attributes.position;for(let _=0;_<p.count;_++){const v=p.getX(_),E=p.getZ(_),T=Math.atan2(v,E),w=1+.035*Math.cos(T*8)-.018*Math.cos(T*16);p.setXYZ(_,v*w,p.getY(_),E*w)}g.computeVertexNormals(),i.add(g,a,e,0,t);const M=_=>{for(let v=1;v<d.length;v++)if(_<=d[v][0]){const[E,T]=d[v-1],[w,R]=d[v];return(T+(R-T)*(_-E)/(w-E))*o}return .53*o};for(let _=34;_<70.8;_+=1.05){const v=M(_),E=.16*o+v*.025;i.cylinder(v+E,v+E*.6,.23*r,e,_*r,t,l,16),i.cylinder(v+.035*o,v+.035*o,.19*r,e,(_-.25)*r,t,_%3<1?h:c,16);for(let T=0;T<8;T++){const w=T*Math.PI/4+Math.PI/8,R=v+E*.6;i.add(new zi(.52*r),a,e+Math.sin(w)*R,(_+.52)*r,t+Math.cos(w)*R,[0,w,0],[.58,1.25,.65]),_<64&&i.add(new zi(.19*r),T%2?h:u,e+Math.sin(w)*(R+.15*r),(_+.25)*r,t+Math.cos(w)*(R+.15*r),[0,w,Math.PI/4],[1,1,.5])}}i.cylinder(.075*r,.2*r,5.9*r,e,73.05*r,t,H.gold,8);for(let _=0;_<7;_++)i.cylinder((.76-_*.092)*o,(.76-_*.092)*o,.14*r,e,(71.25+_*.53)*r,t,H.gold,12);for(const _ of[-1,1])i.line([e,75.1*r,t],[e+_*.36*o,75.8*r,t],.075*r,H.gold,5)}function No(i,e,t,n,s,r=H.gold){i.box(s*2.2,1.4,s*2.2,e,.7,t,H.stone);for(let o=0;o<4;o++)i.cylinder(s*(1-o*.12),s*(1.07-o*.12),1.15,e,1.4+o*1.1,t,r,16);i.sphere(s*.69,e,n*.3,t,r,[1,1.5,1]),i.cylinder(s*.13,s*.51,n*.3,e,n*.57,t,r,16);for(let o=0;o<9;o++){const a=s*(.32-o*.027);i.cylinder(a,a+.12,n*.018,e,n*(.63+o*.026),t,r,16)}i.cylinder(0,s*.13,n*.19,e,n*.905,t,r,12)}function Wc(i,e,t,n=0){for(const s of[-4,4])i.box(1.3,5.4,1.6,s,2.7,n+t/2,H.porcelain),i.box(1.7,.5,2,s,5.3,n+t/2,H.gold);ws(i,0,5.5,n+t/2,11,4,3.2,H.tileGreen);for(const s of[-1,1])if(i.box(.65,1.8,t,s*e/2,.9,n,H.plaster),s<0)i.box(e,1.8,.65,0,.9,n-t/2,H.plaster);else for(const r of[-1,1])i.box((e-7)/2,1.8,.65,r*(e+7)/4,.9,n+t/2,H.plaster);for(let s=-e/2;s<=e/2;s+=6)Math.abs(s)<6||(i.box(.85,2.25,.85,s,1.12,n+t/2,H.plaster),i.cylinder(0,.62,.8,s,2.65,n+t/2,H.gold,4))}function E2(i){i.box(100,.6,87,0,.3,-7,H.oldStone),Cu(i,0,1,76,15.2);for(const e of[-22,22])for(const t of[-20,22])Cu(i,e,t,27,6.4);Us(i,-37,-18,15,33,.75,H.tileGreen),Us(i,37,-18,15,33,.75,H.tile),Wc(i,101,88,-7)}function T2(i){i.box(145,.5,108,0,.25,-7,H.oldStone),Us(i,-18,5,24,48,1.05),Us(i,43,-14,19,36,.9,H.tileGreen);for(const[e,t,n]of[[-58,-28,H.tileGreen],[-41,-28,H.gold],[-58,-46,H.teal],[-41,-46,H.tile]])No(i,e,t,42,7.8,n);for(let e=-61;e<63;e+=13)No(i,e,38,13,2.6,e%2?H.tileGreen:H.gold);for(const e of[-1,1]){const t=-7+e*47;i.box(130,4.5,5,0,2.5,t,H.plaster);for(const n of[-1,1])i.box(132,.38,Math.hypot(3.5,2),0,5.5,t+n*1.75,H.tileGreen,[n*Math.atan2(2,3.5),0,0]);i.line([-66,6.55,t],[66,6.55,t],.15,H.gold)}Wc(i,146,110,-7)}function cc(i,e,t,n,s,r,o,a,l=!1){const c=Yi(a,Math.max(5,Math.round(n/4.8)),o);i.box(n,r,s,e,r/2,t,c);for(const h of[-1,1])for(const u of[-1,1])i.box(1.1,r+1,1.1,e+h*n/2,(r+1)/2,t+u*s/2,H.white);for(let h=0;h<=o;h++){const u=Math.max(.2,h*r/o);i.box(n+1.5,.32,s+1.5,e,u,t,H.concrete)}i.box(n+2,1.8,s+2,e,r+.5,t,H.white),l&&(i.box(n*.73,9,s*.72,e,r+5.5,t,H.dark),i.box(n*.75,.55,s*.74,e,r+10,t,H.softLight))}function Ss(i,e,t,n){const s=new it;s.setAttribute("position",new ke(e.flat(),3)),s.setAttribute("uv",new ke(n||[0,0,1,0,1,1,0,1],2)),s.setIndex([0,1,2,0,2,3]),s.computeVertexNormals(),i.add(s,t)}function hc(i,e,t,n,s){const r=new nn(e.map(([a,l])=>new $(a,-l))),o=new Nn(r,{depth:n,bevelEnabled:!1,curveSegments:1});o.rotateX(-Math.PI/2),i.add(o,s,0,t,0)}function ta(i,e,t,n,s=7,r=2){i.box(s,.7,r,e,t+.35,n,H.oldStone),i.box(s-.3,.8,r-.2,e,t+1,n,H.leaf)}function Fo(i,e,t,n,s=6){i.cylinder(.14,.27,s,e,t+s/2,n,H.bronze,6);for(let r=0;r<7;r++){const o=r*Math.PI*2/7,a=[e+Math.sin(o)*2.5,t+s-.6,n+Math.cos(o)*2.5],l=[Math.cos(o)*.55,0,-Math.sin(o)*.55];Ss(i,[[e,t+s,n],[a[0]+l[0],a[1]+.25,a[2]+l[2]],[a[0],a[1]-.4,a[2]],[a[0]-l[0],a[1]+.25,a[2]-l[2]]],H.leaf)}}function A2(){if($n.has("icon-retail-glass"))return $n.get("icon-retail-glass");const i=(n,s,r,o)=>{n.fillStyle=o?"#050709":"#243940",n.fillRect(0,0,s,r);const a=s/18;for(let l=0;l<18;l++){const c=l*a+5,h=a-10,u=n.createLinearGradient(0,0,0,r);u.addColorStop(0,o?"#806a43":"#867a62"),u.addColorStop(.48,o?"#4c4433":"#4b5554"),u.addColorStop(1,o?"#262720":"#243338"),n.fillStyle=u,n.fillRect(c,23,h,r-41),n.fillStyle=o?"#171e1d":"#293338",n.fillRect(c+h*.1,r*.66,h*.26,r*.26),n.fillRect(c+h*.57,r*.54,h*.24,r*.35),n.fillStyle=o?"#aa8d60":"#c5b48e",n.fillRect(c+7,30,h-14,5),n.fillRect(c+h*.15,r*.7,h*.14,9),n.fillStyle=o?"#101515":"#8a8b7b",n.fillRect(c+h*.5,0,2,r),n.fillStyle=o?"#050709":"#323d40",n.fillRect(c,0,h,21),n.fillRect(c,r*.49,h,5)}},e=Uo(2048,512,(n,s,r)=>i(n,s,r,!1)),t=Uo(2048,512,(n,s,r)=>i(n,s,r,!0));return ct("icon-retail-glass","#e1e3d5",{map:e,emissiveMap:t,emissive:"#ffdeaa",emissiveIntensity:.72,metalness:.25,roughness:.29})}function C2(i){i.box(228,2.3,91,0,1.15,-1,H.stone);const e=A2();for(let t=0;t<4;t++){const n=222-t*11,s=39-t*8.4,r=-43,o=2.4+t*7.1,a=6.65;i.box(n,a,s-3.3-r,0,o+a/2,(s-3.3+r)/2,H.glass);const l=18,c=n/l,h=[];for(let f=0;f<=l;f++)h.push([-n/2+f*c,s+(f%2?-.5:1.9)]);for(let f=0;f<l;f++){const[d,m]=h[f],[x,g]=h[f+1],p=t===0?.1:1.8;Ss(i,[[d,o,m],[x,o,g],[x-p*Math.sign(x),o+a,g-1.35],[d-p*Math.sign(d),o+a,m-1.35]],e,[f/l,0,(f+1)/l,0,(f+1)/l,1,f/l,1]),i.line([d,o,m+.06],[d-p*Math.sign(d),o+a,m-1.29],.105,H.bronze)}const u=[[-n/2-1.2,r],[n/2+1.2,r],[n/2+1.2,s+3.4],[-n/2-1.2,s+3.4]];hc(i,u,o+a,.52,H.white);for(let f=-n/2+8;f<n/2-4;f+=18)ta(i,f,o+a+.52,s+1.4,11,1.8),t>0&&Math.round(f)%3===0&&Fo(i,f,o+a+1.2,s+.9,3);i.line([-n/2,o+a+1.6,s+3.05],[n/2,o+a+1.6,s+3.05],.06,H.bronze),i.box(n,.16,.13,0,o+a-.15,s+3.5,H.softLight)}for(const[t,n,s]of[[-55,98,9],[48,102,7.4]])for(let o=0;o<22;o++){const a=o/22,l=(o+1)/22,c=t+(a-.5)*n,h=t+(l-.5)*n,u=31.4+Math.sin(a*Math.PI)*s,f=31.4+Math.sin(l*Math.PI)*s;Ss(i,[[c,u,13],[h,f,13],[h,f+.7,-14],[c,u+.7,-14]],H.gold),Ss(i,[[c,u-.75,13],[h,f-.75,13],[h,f,13],[c,u,13]],H.gold),Ss(i,[[c,u-.7,-14],[h,f-.7,-14],[h,f-.75,13],[c,u-.75,13]],H.bronze),i.line([c,u,13.1],[h,f,13.1],.17,H.softLight)}i.sign("ICONSIAM",40,4.2,-54,32.8,17,"#efdfaa","#3b3930");for(const t of[-87,-61,-35,37,63,89])i.box(20,5.4,.32,t,5.25,41.1,H.dark),i.box(16,4.5,.15,t,5.05,41.32,Yi("icon-shopfront",4,1,!0)),i.box(20,.4,.5,t,8.1,41.2,H.bronze);for(const t of[-10,10])i.box(.4,12,1.6,t,8.5,41.7,H.bronze);i.box(24,.6,6,0,9.4,42,H.white),i.box(22,.6,7.4,0,2.1,44,H.oldStone);for(let t=-103;t<=105;t+=26)Fo(i,t,2.4,42.5,7.5),i.box(6.8,.45,2.7,t+8,2.7,43,H.white);Vc(i,0,47,211,2.3,6,7,1)}function Ru(i,e,t,n,s,r,o,a,l=1){const h=ea(a,{columns:12,rows:o,style:"condo",stone:"#5d7779",glass:"#26474c",width:1024,height:2048}),u=[],f=[],d=18;for(let g=0;g<=d;g++){const p=g/d*2-1;u.push([e+p*n/2,t+s*(.46-.4*p*p)])}for(let g=0;g<=8;g++){const p=1-g/8*2;f.push([e+p*n/2,t-s*.36+Math.abs(p)*s*.2])}const m=[...u,...f],x=g=>13.1+r+5+l*(g-e)/n*6;for(let g=0;g<m.length;g++){const p=m[g],M=m[(g+1)%m.length],_=Math.hypot(M[0]-p[0],M[1]-p[1]);if(_<.05)continue;const v=g<d,E=x(p[0]),T=x(M[0]);Ss(i,[[p[0],13.1,p[1]],[M[0],13.1,M[1]],[M[0],T,M[1]],[p[0],E,p[1]]],h,[g/d,0,(g+1)/d,0,(g+1)/d,1,g/d,1]);for(let w=1;w<o;w++){const R=13.1+w*r/o;if(v)w%3===0&&i.line([p[0],R,p[1]+.08],[M[0],R,M[1]+.08],.085,H.concrete,4);else{const S=Math.atan2(p[1]-M[1],M[0]-p[0]),b=Math.sin(S),L=Math.cos(S),D=(p[0]+M[0])/2,N=(p[1]+M[1])/2;i.box(_+.04,.24,1.5,D+b*.5,R,N+L*.5,H.white,[0,S,0]),i.box(_-.08,.92,.12,D+b*1.15,R+.65,N+L*1.15,H.glass,[0,S,0])}}i.line([p[0],13.1,p[1]],[p[0],E,p[1]],v?.085:.28,v?H.bronze:H.white,4),i.line([p[0],E,p[1]],[M[0],T,M[1]],.28,H.white,6)}hc(i,m,13.1,.35,H.concrete),hc(i,m,13.1+r,.35,H.concrete),i.box(n*.45,2.5,s*.42,e,13.1+r+1.25,t-2,H.dark);for(const g of[13.1+r*.34,13.1+r*.62])i.box(n*.7,1.2,3,e,g,t-s*.36-1,H.white),ta(i,e,g+.6,t-s*.36-1,n*.58,1.7)}function R2(i){i.box(138,7,69,0,3.5,0,H.plaster),i.box(136,5,66,0,9.5,0,Yi("river-podium",23,2,!0)),i.box(139,.8,70,0,12.4,0,H.white),Ru(i,-31,-8,60,33,228,71,"river-tower-south",1),Ru(i,34,-13,53,30,139,44,"river-tower-north",-1),i.box(52,.16,9,0,12.92,25,H.pool),i.box(53,.32,.45,0,13,29.6,H.white);for(const e of[-62,-45,-12,15,48,63])Fo(i,e,12.8,17,6),ta(i,e,12.8,21,9,2);for(let e=-63;e<=63;e+=9)i.box(.65,5,.65,e,3,35.1,H.plaster),i.box(5.7,.15,.3,e,6,35.3,H.softLight);for(let e=-59;e<64;e+=13)i.box(10.5,4.8,.15,e,3.5,34.58,Yi("river-lobby",3,1,!0)),i.box(10.7,.25,3.8,e,6.2,35,H.bronze);i.sign("THE RIVER",24,2.3,0,7.8,35,"#e6dbc5","#28251f")}function P2(i){cc(i,0,-7,74,49,171,48,"state-main"),cc(i,0,-9,61,43,198,56,"state-upper"),i.box(53,19,39,0,207,-9,Yi("state-crown",20,5,!0));for(const e of[199,207,216])i.box(59,1.5,43,0,e,-9,H.white);for(let e=-24;e<=24;e+=8)i.cylinder(1.1,1.1,15,e,222.5,9,H.plaster,12),i.box(2.5,1,2.5,e,230,9,H.white);i.box(58,1.4,41,0,231,-8,H.white),i.cylinder(11,11,5,3,233.5,-5,H.plaster,32),i.add(new en(11.8,32,16,0,Math.PI*2,0,Math.PI/2),H.gold,3,236,-5,[0,0,0],[1,.78,1]),i.cylinder(.35,.8,3.4,3,246,-5,H.gold,8);for(let e=0;e<12;e++){const t=e*Math.PI/6;i.box(.5,4,.6,3+Math.sin(t)*10.9,233.8,-5+Math.cos(t)*10.9,H.gold)}i.box(74,1,51,0,172,-7,H.softLight),i.sign("LEBUA",18,3.6,-17,223,13,"#efd3a3","#302a25")}function jf(i,e,t=!1){const n=new nn,s=i/2;return n.moveTo(-s,0),n.lineTo(s,0),n.lineTo(s,e-s),t?(n.quadraticCurveTo(s*.7,e-s*.25,0,e),n.quadraticCurveTo(-s*.7,e-s*.25,-s,e-s)):n.absarc(0,e-s,s,0,Math.PI,!1),n.lineTo(-s,0),n.closePath(),n}function Gi(i,e,t,n,s,r,o,a=!1){i.add(new oi(jf(e,t,a),10),o,n,s,r)}function Kf(i,e,t,n,s=1){i.box(.23*s,2.2*s,.25*s,e,t,n,H.gold),i.box(1.25*s,.23*s,.25*s,e,t+.4*s,n,H.gold)}function L2(i){i.box(34,.65,55,0,.32,-5,H.stone),i.box(20,11,38,0,5.85,-7,H.redBrick),i.box(28,8,14,0,4.3,-9,H.redBrick),ws(i,0,11.1,-8,22,39,4,H.roof),i.box(24,15,4,0,7.8,14,H.plaster);for(const e of[-1,1])i.box(1.1,16,1.3,e*10,8,16.3,H.white);Gi(i,5.5,8.5,0,.6,16.2,H.dark),Gi(i,3,5.8,-7,5,16.25,H.stained),Gi(i,3,5.8,7,5,16.25,H.stained),i.cylinder(6.6,7.4,7,0,18.5,8,H.plaster,16);for(let e=0;e<10;e++){const t=e*Math.PI/5;i.cylinder(.28,.38,6.7,Math.sin(t)*6.9,18.5,8+Math.cos(t)*6.9,H.white,8)}i.add(new en(7.3,24,14,0,Math.PI*2,0,Math.PI/2),H.redBrick,0,22,8,[0,0,0],[1,1.15,1]),i.cylinder(1.7,1.7,3,0,31.1,8,H.plaster,12),i.sphere(1.8,0,33,8,H.redBrick,[1,.6,1]),Kf(i,0,35.1,8,.9);for(const e of[1,11.5,15.2])i.box(25,.65,4.8,0,e,14,H.white);i.sign("SANTA CRUZ",13,1.4,0,12.7,16.45,"#efd5a1","#b7a896")}function D2(i){i.box(28,.8,48,0,.4,-7,H.stone),i.box(19,14,37,0,7.4,-7,H.plaster),ws(i,0,14.5,-7,22,40,8,H.roof),i.box(8,27,7,0,13.5,14,H.plaster);for(const e of[-1,1]){i.box(.85,28,1.1,e*4,14,17.9,H.white),i.box(1.7,16,2.5,e*9.7,8,11,H.white),i.cylinder(0,1.2,5,e*9.7,18.5,11,H.roof,4);for(let t=-23;t<10;t+=7)i.box(1.2,13,1.7,e*9.8,6.5,t,H.white)}Gi(i,4.2,7.8,0,.8,17.65,H.dark,!0),Gi(i,3.1,5.8,0,18.5,17.65,H.stained,!0);for(const e of[-1,1])Gi(i,3.1,7,e*6.5,5.6,11.65,H.stained,!0);i.add(new _n(1.9,.22,8,24),H.gold,0,13.5,17.7),i.add(new Ic(1.65,24),H.stained,0,13.5,17.72);for(let e=0;e<8;e++){const t=e*Math.PI/4;i.line([0,13.5,17.75],[Math.sin(t)*1.6,13.5+Math.cos(t)*1.6,17.75],.06,H.white)}i.box(8.6,.85,7.6,0,27,14,H.white),i.cylinder(0,4.9,15,0,35,14,H.roof,4),Kf(i,0,43.5,14,.8);for(const e of[-4,4])for(const t of[10.5,17.5])i.cylinder(0,.55,3.4,e,29,t,H.roof,4)}function I2(i){i.box(112,19,42,0,9.5,0,Yi("river-city",28,4,!0));for(let e=0;e<=4;e++)i.box(115,1,45,0,e*4.6+.6,0,H.white);for(let e=-52;e<56;e+=8)i.box(1.1,20.5,1.8,e,10.25,22,H.plaster);i.box(48,6.5,2,0,18.7,23,H.plaster),i.sign("RIVER CITY BANGKOK",45,3.9,0,18.8,24.1,"#d9bd89","#44403a"),i.box(118,1.1,13,0,5,29,H.white);for(let e=-53;e<=53;e+=13)i.cylinder(.5,.65,4.8,e,2.4,33,H.plaster,10);for(let e=-48;e<55;e+=16)i.box(11,.2,.2,e,4.7,35.6,H.softLight)}function U2(i){const e=Yi("oriental-hotel",30,15,!0);i.box(98,56,31,-14,28,-21,e);for(let t=0;t<=16;t++)i.box(100,.62,33,-14,Math.max(.32,t*3.5),-21,H.plaster);for(let t=-59;t<40;t+=9)i.box(1.1,57,33,t,28.5,-21,H.plaster);cc(i,49,-9,24,50,42,12,"oriental-wing"),i.box(65,9.8,24,-14,4.9,15,H.white),i.box(69,1.1,27,-14,10.2,15,H.white);for(const t of[1.1,5.8])for(let n=-41;n<16;n+=6)Gi(i,4.2,3.7,n,t,27.08,H.window),i.cylinder(.22,.22,4,n-2.6,t+1.8,27.4,H.white,8);for(const t of[1,5.7]){i.box(67,.4,4,-14,t,28.2,H.white);for(let n=-44;n<18;n+=3)i.box(.13,1,.13,n,t+.65,29.8,H.white),i.box(3,.12,.15,n+1.5,t+1.15,29.8,H.white);for(let n=-40;n<20;n+=12)i.box(7,.15,3,n,t+3.8,28.5,H.plaster),ta(i,n,t,29.1,2,1)}for(const t of[-1,1])i.box(35,.45,25,-14+t*15,11.8,15,H.roof,[0,0,-t*.09]);i.box(12,2,3,-14,11,27.8,H.white),i.cylinder(0,4.2,2.5,-14,13.05,26.8,H.white,4,[1.4,1,.4]);for(const t of[-47,-28,4,24])Fo(i,t,1,32.5,8);i.box(39,.18,4,-12,.6,36.2,H.pool),i.box(65,.4,1,-14,5.6,27.5,H.white),i.sign("MANDARIN ORIENTAL",40,2.4,-14,11.6,27.2,"#f0dab0","#514f40");for(let t=-39;t<20;t+=10)i.cylinder(0,3.4,1.5,t,3.2,34,H.plaster,12),i.cylinder(.13,.13,2.7,t,1.35,34,H.bronze,6),i.sphere(.25,t,2.5,34,H.warm)}function N2(i){i.box(94,.65,88,0,.32,-4,H.oldStone),Us(i,-6,-7,30,40,1.3),Us(i,35,-19,14,25,.68,H.tileGreen),No(i,-36,18,25,5,H.porcelain),No(i,30,24,18,4,H.gold),Wc(i,95,89,-4)}const Pu={"wat-arun":E2,"wat-pho":T2,"icon-siam":C2,"the-river":R2,"state-tower":P2,"santa-cruz":L2,"holy-rosary":D2,"river-city":I2,"mandarin-oriental":U2,"wat-kalayanamit":N2};function F2(i){if(!Pu[i]&&!bo.has(i))throw new Error(`Unknown river landmark: ${i}`);if(!nl.has(i)){const e=new y2(i);bo.has(i)?v2(e,bo.get(i),H):Pu[i](e),nl.set(i,e.finish())}return nl.get(i).clone(!0)}const Ht=(i,e={})=>new wt({color:i,roughness:.84,...e}),Pe={concrete:Ht("#92968e"),edge:Ht("#bac1b7"),steel:Ht("#507d61",{emissive:"#274836",emissiveIntensity:.25}),darkSteel:Ht("#25483f"),road:Ht("#242c31"),rail:Ht("#697b7a",{metalness:.5,roughness:.42}),rubber:Ht("#101819"),wood:Ht("#63503b"),roof:Ht("#477876"),tile:Ht("#813c30"),gold:Ht("#ab8244",{metalness:.45}),leaf:Ht("#234635"),soil:Ht("#363f30"),white:Ht("#ddd4b8"),red:Ht("#90433e")};if(typeof document<"u"){const i=document.createElement("canvas");i.width=i.height=256;const e=i.getContext("2d");e.fillStyle="#b5b5aa",e.fillRect(0,0,256,256);let t=429;const n=()=>(t=Math.imul(t,1664525)+1013904223>>>0,t/4294967296);for(let r=0;r<1900;r++){const o=Math.floor(117+n()*72);e.fillStyle=`rgba(${o},${o},${o-6},.13)`,e.fillRect(n()*256,n()*256,1+n()*4,1+n()*3)}for(let r=0;r<35;r++){const o=n()*50,a=e.createLinearGradient(0,o,0,230);a.addColorStop(0,"rgba(30,43,39,.15)"),a.addColorStop(1,"rgba(30,43,39,0)"),e.fillStyle=a,e.fillRect(n()*256,o,1+n()*6,220)}const s=new On(i);s.colorSpace=xt,s.wrapS=s.wrapT=ii,s.anisotropy=4,Pe.concrete.map=s,Pe.concrete.bumpMap=s,Pe.concrete.bumpScale=.035}const Zf=new Oe("#ffce8b").multiplyScalar(1.9).toArray(),O2=new Oe("#95b6bc").multiplyScalar(1.4).toArray();function er(i,e,t=e,n=.16,s=Zf){i.push({a:e,b:t,width:n,color:s})}function ar(i,e,t,n=1.2,s=3,r=Pe.rail){const o=Math.hypot(t[0]-e[0],t[2]-e[2]),a=Math.max(1,Math.ceil(o/s));for(const l of[.45,n])i.line([e[0],e[1]+l,e[2]],[t[0],t[1]+l,t[2]],.055,r);for(let l=0;l<=a;l++){const c=l/a,h=An.lerp(e[0],t[0],c),u=An.lerp(e[1],t[1],c),f=An.lerp(e[2],t[2],c);i.line([h,u,f],[h,u+n,f],.065,r)}}function Li(i,e,t,n,s,r){const o=new P(...t).sub(new P(...e)),a=new un(n,o.length(),s);a.applyQuaternion(new Bt().setFromUnitVectors(new P(0,1,0),o.normalize())),i.add(a,r,(e[0]+t[0])/2,(e[1]+t[1])/2,(e[2]+t[2])/2)}function Lu(i,e,t,n,s,r,o){const a=Math.ceil((t-e)/12),l=new nn;l.moveTo(e,r),l.lineTo(t,r);for(let h=a;h>=0;h--){const u=An.lerp(e,t,h/a),f=Math.min(...o.map(m=>Math.abs(u-m))),d=2.1+2.5*Math.exp(-f/23);l.lineTo(u,r-d)}l.closePath();const c=new Nn(l,{depth:s,bevelEnabled:!1});i.add(c,Pe.concrete,0,0,n-s/2)}function ho(i,e,t,n,s,r,o){i.cylinder(1,1,3.2,t,.2,n,Pe.darkSteel,8,[s*.62,1,r*.58]),i.box(s,o-2,r,t,(o-2)/2+1,n,Pe.concrete),i.box(s+1.6,1.2,r+1.3,t,o-1,n,Pe.edge);for(const a of[-1,1])i.box(s*.55,.45,1.4,t,o-.18,n+a*(r/2-.8),Pe.rubber);e.push({x:t,z:n,width:s*1.24,length:r*1.16,heading:0,mass:1e4,vx:0,vz:0})}function Du(i,e,t,n,s){i.box(e,1,n,0,s-.5,t,Pe.edge),i.box(e,.12,n-1.3,0,s+.07,t,Pe.road);for(const r of[-1,1])i.box(e,.75,.65,0,s+.38,t+r*(n/2-.3),Pe.concrete),ar(i,[-e/2,s+.75,t+r*(n/2-.3)],[e/2,s+.75,t+r*(n/2-.3)],.55,5);for(let r=-e/2+4;r<e/2-3;r+=14)i.box(6,.025,.16,r,s+.145,t,Pe.white)}function z2(i,{span:e,riverWidth:t}){const n=new Gc("bridge:"+i),s=[],r=[],o=[-t*.27,t*.27];let a,l,c,h;if(i==="memorial"){a=17.3,l=[-4.3,4.3],c=20,h=10.05,Du(n,e,0,19,a),n.box(e,1.5,16,0,a-1.6,0,Pe.darkSteel);for(const d of o){ho(n,r,d,0,9.5,16,a-2.3);for(const m of[-8.05,8.05])for(let x=0;x<2;x++)for(let g=0;g<4;g++)n.box(2.38,.65,.08,d-3.57+g*2.38,2+x*.65,m,(x+g)%2?Pe.red:Pe.white)}const f=[-e/2,...o,e/2];for(let d=0;d<3;d++){const m=f[d]+.3,x=f[d+1]-.3,g=Math.max(4,Math.round((x-m)/19)),p=_=>{const v=_/g;return[An.lerp(m,x,v),a+4+9*Math.min(1,v*4,(1-v)*4)]};for(let _=0;_<g;_++){const v=p(_),E=p(_+1);for(const T of[-1,1]){const w=T*8.1;Li(n,[v[0],v[1],w],[E[0],E[1],w],.68,.74,Pe.steel),Li(n,[v[0],a,w],[v[0],v[1],w],.58,.62,Pe.steel),Li(n,[v[0],_%2?a:v[1],w],[E[0],_%2?E[1]:a,w],.44,.5,Pe.steel),n.box(1.05,1.1,.14,v[0],v[1]-.15,w+T*.42,Pe.darkSteel)}_>0&&_<g-1&&(Li(n,[v[0],v[1],-8.1],[v[0],v[1],8.1],.46,.5,Pe.steel),Li(n,[v[0],v[1],-8.1],[E[0],E[1],8.1],.23,.24,Pe.darkSteel))}const M=p(g);for(const _ of[-1,1])Li(n,[M[0],a,_*8.1],[M[0],M[1],_*8.1],.58,.62,Pe.steel)}n.box(.32,.09,16,0,a+.16,0,Pe.rubber);for(const d of[-1,1])er(s,[-e/2,a-.65,d*9.6],[e/2,a-.65,d*9.6],.14,Zf)}else{const f=i==="pokklao";a=20.25,l=f?[-16.7,16.7]:[-10.1,10.1],c=19.2,h=f?25.1:17.7;const d=f?[-16.7,16.7]:[-10.1,10.1],m=f?15.5:13.8;for(const x of d){Lu(n,-e/2,e/2,x,m-1.1,a-1,o),Du(n,e,x,m,a);for(const p of o)ho(n,r,p,x,9,10.8,a-4.6);const g=x+Math.sign(x)*(m/2+.12);er(s,[-e/2,a-.35,g],[e/2,a-.35,g],.14,O2)}if(f){Lu(n,-e/2,e/2,0,7.5,a-1.15,o),n.box(e,.48,8.5,0,a-.85,0,Pe.edge),n.box(e,.09,3.8,0,a-.55,0,Pe.wood);for(const x of o)ho(n,r,x,0,8.5,7.5,a-4.7);for(const x of[-1,1]){ar(n,[-e/2,a-.6,x*4.05],[e/2,a-.6,x*4.05],1.25,3);for(let g=-e/2+8;g<e/2-6;g+=12)n.box(8.4,.9,1.35,g,a-.12,x*3,Pe.concrete),n.box(8,1,1.2,g,a+.62,x*3,Pe.leaf)}for(let x=-e/2+18;x<e/2-16;x+=26)n.cylinder(.13,.17,3.9,x,a+1.35,3.5,Pe.rail,6),er(s,[x,a+3.35,3.5],void 0,.3)}else{n.box(e,2.1,5.4,0,a-1.25,0,Pe.concrete);for(const x of o)n.box(12,1.6,32,x,a-3.8,0,Pe.concrete),ho(n,r,x,0,8,6,a-4.6);n.box(e,.35,5.6,0,a+.07,0,Pe.darkSteel);for(const x of[-1.05,1.05])n.box(e,.16,.14,0,a+.34,x,Pe.rail);for(const x of[-1,1])n.box(e,1.4,.45,0,a+.65,x*2.85,Pe.edge)}}for(const f of[-1,1].map(d=>d*(t/2+56)))n.box(5.5,a-2.2,i==="pokklao"?43:15,f,(a-2.2)/2,0,Pe.concrete),n.box(8,1.5,i==="pokklao"?48:18,f,a-1.65,0,Pe.edge);for(const f of[-1,1])for(let d=-e/2+12;d<e/2-10;d+=36){const m=f*(i==="memorial"?9.2:i==="pokklao"?24.1:16.6);n.cylinder(.1,.17,5.8,d,a+2.9,m,Pe.rail,6),n.line([d,a+5.7,m],[d,a+5.7,m-f*1.8],.09,Pe.rail),er(s,[d,a+5.65,m-f*1.9],void 0,.34)}const u=n.finish();return u.name="bridge:"+i,u.userData.structure={id:i,roadY:a,lanes:l,colliders:r,signY:c,signZ:h},{group:u,fixtures:s,colliders:r,roadY:a,lanes:l,signY:c,signZ:h}}function B2(i,{shoreDistance:e=13}={}){const t=new Gc("pier:"+i),n=[],s=["arun","kalaya","tien"].includes(i),r=["icon","river","rivercity"].includes(i),o=1.85,a=3.9,l=Math.max(8,e+1),c=3.15;t.box(17,1.3,9,0,1.2,0,Pe.darkSteel),t.box(16.9,.18,8.9,0,o-.09,0,Pe.concrete),t.box(16.9,.15,.28,0,o+.02,-4.4,Pe.white);for(const m of[-6.7,-3.3,3.3,6.7])t.add(new _n(.57,.18,6,12),Pe.rubber,m,.86,-4.61),t.cylinder(.16,.19,.5,m,o+.24,-3.95,Pe.rail,8),t.box(.66,.14,.24,m,o+.5,-3.95,Pe.rail);for(const m of[-7.45,7.45])for(const x of[-3.5,3.5])t.cylinder(.28,.35,6.4,m,1.2,x,Pe.darkSteel,8),t.cylinder(.45,.45,.65,m,o+.25,x,Pe.rubber,10),t.cylinder(.1,.15,3.65,m,o+1.825,x,Pe.rail,8);for(const m of[-8.15,8.15])ar(t,[m,o,-4],[m,o,4],1.12,2.7);for(const m of[-1,1])ar(t,[m*2,o,4],[m*8.15,o,4],1.12,3);const h=Math.atan2(c-o,l-a),u=Math.hypot(l-a,c-o);t.box(3.8,.24,u,0,(o+c)/2-.12,(a+l)/2,Pe.rail,[-h,0,0]);for(const m of[-1,1])ar(t,[m*1.8,o,a],[m*1.8,c,l],1.15,2.5),Li(t,[m*1.72,o-.35,a],[m*1.72,c-.35,l],.23,.23,Pe.darkSteel);t.box(7,.45,5,0,c-.225,l+2.3,Pe.concrete);for(let m=a+.3;m<l;m+=.85)t.box(3.4,.035,.11,0,o+(m-a)/(l-a)*(c-o)+.03,m,Pe.white,[-h,0,0]);const f=5.65;if(s){const x=Math.hypot(9.5,2.85);for(const g of[-1,1]){t.box(x,.28,10.2,g*4.75,f+1.42,0,Pe.tile,[0,0,-g*.3]),t.line([g*9.5,f,-5.1],[g*9.5,f,5.1],.1,Pe.gold);for(const p of[-5.1,5.1])t.line([0,f+2.85,p],[g*9.5,f,p],.14,Pe.gold)}for(const g of[-1,1])t.line([0,f+2.8,g*5],[0,f+4,g*5.5],.12,Pe.gold),t.line([0,f+4,g*5.5],[0,f+4.4,g*6],.06,Pe.gold)}else if(r)for(const m of[-1,1])t.box(9.8,.25,10.4,m*4.8,f+.7,0,Pe.edge,[0,0,m*.14]),t.line([m*9.7,f+1.4,-5.2],[m*9.7,f+1.4,5.2],.16,Pe.rail);else for(const m of[-1,1])t.box(9.5,.23,10,m*4.65,f+.55,0,Pe.roof,[0,0,-m*.12]);for(const m of[-3.5,3.5]){t.line([-7.45,f,m],[7.45,f,m],.1,Pe.rail);for(const x of[-1,1])t.line([x*7.45,4.3,m],[x*5.2,f,m],.075,Pe.rail)}for(const m of[-5,5])er(n,[m-1.4,5.4,0],[m+1.4,5.4,0],.1);for(const m of[-5.4,5.4]){t.box(3.5,.18,.8,m,o+.6,2.1,Pe.wood),t.box(3.5,.55,.12,m,o+1,2.52,Pe.wood);for(const x of[-1.3,1.3])t.box(.16,.58,.7,m+x,o+.29,2.1,Pe.rail)}t.add(new _n(.48,.11,6,16),Pe.red,7.1,3.2,-3.58),t.box(1.3,1.9,.18,-7,3.2,3.4,Pe.edge),t.box(.95,1.4,.04,-7,3.3,3.29,Pe.roof);const d=t.finish();return d.name="pier:"+i,d.userData.gangway={start:[0,o,a],end:[0,c,l],shoreDistance:e},{group:d,fixtures:n,signY:s?5.5:5.3,signZ:-5.26}}const k2=i=>()=>(i=Math.imul(i,1664525)+1013904223>>>0,i/4294967296),Rn=k2(81623),Zt=(i,e=0,t=0)=>new wt({color:i,emissive:e,emissiveIntensity:t,roughness:.72});class uo{constructor(e){this.parts=new Map,this.transform=new mt,this.lightTarget=e,this.lightFixtures=[]}add(e,t,n,s,r,o=1,a=1,l=1,c=0){const h=this.transform;if(h.position.set(n,s,r),h.rotation.set(0,c,0),h.scale.set(o,a,l),h.updateMatrix(),this.lightTarget&&Wf(this.lightFixtures,e,t,h.matrix))return;const u=e.clone().applyMatrix4(h.matrix);this.parts.has(t)||this.parts.set(t,[]),this.parts.get(t).push(u)}box(e,t,n,s,r,o,a,l=0){this.add(wo,e,t,n,s,r,o,a,l)}finish(e){for(const[t,n]of this.parts){const s=Bs(n);if(n.forEach(r=>r.dispose()),s){const r=new lt(s,t);e.add(r)}}this.parts.clear(),this.lightTarget&&(e.updateWorldMatrix(!0,!1),this.lightTarget.push(...ac(this.lightFixtures,e.matrixWorld)),this.lightFixtures=[])}}const wo=new un(1,1,1);function Iu(i,e=20,t=4,n="#13283c",s="#ffde9b"){const r=document.createElement("canvas");r.width=1024,r.height=256;const o=r.getContext("2d");o.fillStyle=n,o.fillRect(0,0,1024,256),o.fillStyle=s,o.font="bold 110px Arial",o.textAlign="center",o.textBaseline="middle",o.fillText(i,512,128,970);const a=new On(r);return a.colorSpace=xt,new lt(new Rt(e,t),new gn({map:a,side:Ot,toneMapped:!1}))}const H2=[["wat-arun","Wat Arun",100.488905,13.7436982,1],["wat-pho","Wat Pho",100.4916918,13.7465039,-1],["wat-kalayanamit","Wat Kalayanamit",100.4912748,13.740062,1],["santa-cruz","Santa Cruz",100.4937728,13.7389447,1],["holy-rosary","Holy Rosary",100.5134793,13.7312611,-1],["river-city","River City",100.5132623,13.7303492,-1],["icon-siam","ICONSIAM",100.5103251,13.7268256,1],["mandarin-oriental","Mandarin Oriental",100.5143499,13.7239264,-1],["the-river","The River",100.5105286,13.7213726,1],["state-tower","State Tower",100.516897,13.7215374,-1],...Yf.map(i=>[i.id,i.name,...i.center,i.side])];function G2(i,e,t,n){const s=[],r=Zt(5330264),o=Zt(2306619),a=new gn({color:new Oe(16763779).multiplyScalar(2.5)}),l=new Qt;i.add(l);const c=[];for(let J=0;J<e.length;J+=20)c.push(e.sample(J));c.push(e.sample(e.length));const h=J=>c.map(Q=>new $(Q.x+Q.nx*J*Q.width/2,-(Q.z+Q.nz*J*Q.width/2))),u=h(1),f=h(-1),d=[...u,...f.reverse()];for(const J of[u,f]){const Q=J===u?0:J.length-1,A=J===u?J.length-1:0,y=e.sample(0),U=e.sample(e.length);J[Q].x+=Math.sin(y.heading)*1600,J[Q].y-=Math.cos(y.heading)*1600,J[A].x-=Math.sin(U.heading)*1600,J[A].y+=Math.cos(U.heading)*1600}const m=new nn([new $(-5500,-5500),new $(5500,-5500),new $(5500,5500),new $(-5500,5500)]);m.holes.push(new ec(d));const x=new Nn(m,{depth:4,bevelEnabled:!1,steps:1});x.rotateX(-Math.PI/2);const g=Zt(1054489);g.roughness=1;const p=new lt(x,g);p.name="riverbank-ground",p.position.y=-1,i.add(p);const M=t2(i,n),_=M.water,v=[];for(const[J,Q,A,y,U]of H2){const X=Io(A,y),q=e.nearest(X.x,X.z),z=bo.has(J),de=["icon-siam","the-river","mandarin-oriental","river-city"].includes(J),ce=F2(J),ue=new si().setFromObject(ce);let _e=z?q.offset*U:Math.max(de?0:q.offset*U,q.width/2+ue.max.z+12),ae=e.sample(q.distance,U*_e);ce.rotation.y=z?0:Math.atan2(-q.nx*U,-q.nz*U);for(let Re=0;Re<12;Re++){ce.position.set(ae.x,3,ae.z),ce.updateMatrixWorld();let Ae=!1;for(const Se of[ue.min.x,ue.max.x])for(const We of[ue.min.z,ue.max.z]){const F=ce.localToWorld(new P(Se,0,We)),me=e.nearest(F.x,F.z);Math.abs(me.offset)<me.width/2+4&&(Ae=!0)}if(!Ae)break;_e+=15,ae=e.sample(q.distance,U*_e)}if(l.add(ce),J==="wat-arun"||J==="wat-kalayanamit"){const Re=new Hm(16767392,J==="wat-arun"?5500:3500,210,.78,.75,2);Re.position.set(ae.x-q.nx*U*75,7,ae.z-q.nz*U*75),Re.target.position.set(ae.x,28,ae.z),i.add(Re,Re.target)}const he=new si().setFromObject(ce);v.push({kind:J,name:Q,x:ae.x,z:ae.z,distance:q.distance,bounds:he,side:U,reserveLength:z?Math.hypot(ue.max.x-ue.min.x,ue.max.z-ue.min.z)/2+40:(ue.max.x-ue.min.x)/2+22,inland:z?_e+Math.hypot(ue.max.x-ue.min.x,ue.max.z-ue.min.z)/2+70:_e-ue.min.z+20})}const E=["#75817f","#8c8172","#717d81","#68757d","#8a8076"],T=Array.from({length:5},(J,Q)=>["city","condo"].map(A=>ea("city-"+Q+"-"+A,{columns:6,rows:8,style:A,stone:E[Q]}))),w=E.map(J=>Zt(J)),R=Zt(8491151),S=new wt({color:2571849,roughness:.32,metalness:.32}),b=new zm().load("/longtail/textures/riverside-shophouses.png");b.colorSpace=xt,b.anisotropy=4;const L=new wt({map:b,color:10922146,emissiveMap:b,emissive:16767392,emissiveIntensity:.035,roughness:.95}),D=new uo(s),N=Zt(2634297),B=Zt(8078389),O=Zt(2309936),V=Zt(4470060);for(let J=20;J<e.length;J+=35){for(const Q of[-1,1]){const A=e.sample(J);for(let y=0;y<3;y++){const U=18+Rn()*24,X=20+Rn()*23,q=Q*(A.width/2+X/2+12+y*110),z=e.sample(J+(Rn()-.5)*14,q);let de=11+Rn()*25;y>0&&(de+=Rn()*45),J>e.length*.62&&Rn()>.72&&(de+=Rn()*90);const ce=J<e.length*.48;if(ce&&(de=6+Rn()*13+y*4),y===0&&ce&&(de=9+Rn()*4),!ce&&y===0&&(de=Math.min(de,24)),!ce&&y>0&&v.some(he=>he.side===Q&&Math.abs(J-he.distance)<he.reserveLength+65)&&(de=Math.min(de,58)),v.some(he=>he.side===Q&&Math.abs(J-he.distance)<he.reserveLength&&Math.abs(q)<he.inland)||v.some(he=>z.x>he.bounds.min.x-25&&z.x<he.bounds.max.x+25&&z.z>he.bounds.min.z-25&&z.z<he.bounds.max.z+25))continue;const ue=y===0&&de<22&&Math.floor(J/35)%5!==0,_e=Math.floor(Rn()*5),ae=T[_e][de>42?1:0];if(ue)D.box(L,z.x,3+de/2,z.z,U,de,X,z.heading),D.box(N,z.x,de+3.5,z.z,U+1,1,X+1,z.heading);else{const he=wr[ae.userData.facade.style].floorHeight;de=Math.max(2,Math.round(de/he))*he,p2(D,{x:z.x,z:z.z,width:U,depth:X,height:de,heading:z.heading,variant:_e,material:ae,wall:w[_e],trim:R,roof:N,glass:S,detail:y<2})}if(y>0&&de>65&&D.box(a,z.x,de+8,z.z,.35,.45,.35),y===0){const he=e.sample(J,Q*(A.width/2+X+17));for(let Re=0;Re<2;Re++)D.box(r,he.x+Re*3,7+Re*3,he.z,1.5,1.1,.8,z.heading)}if(y===0){const he=e.sample(J,Q*(A.width/2+5));D.box(B,he.x,6.7,he.z,U,.3,4,z.heading),Math.floor(J)%3===0&&D.box(a,he.x,6.9,he.z,U*.3,.08,.24,z.heading)}}}for(const Q of[-1,1]){const A=e.sample(J,Q*(e.sample(J).width/2+4));if(D.box(r,A.x,1.5,A.z,2,3.5,36,A.heading),Math.floor(J/35)%2===0&&(D.box(o,A.x,6,A.z,.35,7,.35),D.box(a,A.x,9.7,A.z,1.9,.35,1.9)),Math.floor(J/35)%3===0){D.box(V,A.x+A.nx*Q*8,7,A.z+A.nz*Q*8,.8,9,.8);const y={x:A.x+A.nx*Q*8,z:A.z+A.nz*Q*8};for(let U=0;U<5;U++)D.add(new en(1,7,5),O,y.x+Math.sin(U*1.25)*2.3,11.5,y.z+Math.cos(U*1.25)*2.3,4.1,1.8,2.2,U*1.25)}}}D.finish(l),l.traverse(J=>{J.updateMatrix(),J.matrixAutoUpdate=!1});const Z=[],W=[];function re(J,Q,A){const y=Io(Q,J),U=e.nearest(y.x,y.z),X=U.width+200,q=z2(A,{span:X,riverWidth:U.width}),z=q.group;z.position.set(U.x,0,U.z),z.rotation.y=Math.atan2(-U.nz,U.nx),i.add(z),z.updateMatrixWorld(),s.push(...ac(q.fixtures,z.matrixWorld));for(const ue of q.colliders){const _e=z.localToWorld(new P(ue.x,0,ue.z));Z.push({...ue,x:_e.x,z:_e.z,heading:z.rotation.y})}const de=ja[A],ce=A==="taksin"?27:23;for(const ue of[-1,1]){const _e=Ka(de.thai,de.english,ce,2.4);_e.position.set(0,q.signY,ue*q.signZ),_e.rotation.y=ue<0?Math.PI:0,z.add(_e)}if(A==="pokklao"){const ue=Ka(ja.skypark.thai,ja.skypark.english,16,1.8);ue.position.set(0,q.roadY+1.2,4.3),z.add(ue)}W.push({group:z,span:X,height:q.roadY,lanes:q.lanes})}re(13.7393,100.4976,"memorial"),re(13.73898,100.49851,"pokklao"),re(13.7193,100.5121,"taksin");const fe=new Qt;i.add(fe);const ne=Zt(3160130),ze=new gn({color:new Oe(16769717).multiplyScalar(2.2)}),He=new gn({color:new Oe(16721682).multiplyScalar(1.9)}),Je=W.length*10,qe=[new ir(wo,ne,Je),new ir(wo,ze,Je*2),new ir(wo,He,Je*2)];qe.forEach(J=>{J.instanceMatrix.setUsage(ji),J.frustumCulled=!1,fe.add(J)});const j=new mt;let se=-1;function we(J){if(!(J-se<1/30)){se=J;for(let Q=0;Q<Je;Q++){const{group:A,span:y,height:U,lanes:X}=W[Math.floor(Q/10)],q=Q%2?1:-1,z=((Q%10*53+J*(7+Q%4)*q)%(y+60)+y+60)%(y+60)-(y+60)/2,de=X[Q%2],ce=(ue,_e,ae,he,Re,Ae,Se,We)=>{j.position.set(ae,he,Re),j.rotation.set(0,0,0),j.scale.set(Ae,Se,We),j.updateMatrix(),j.matrix.premultiply(A.matrixWorld),ue.setMatrixAt(_e,j.matrix)};A.updateMatrixWorld(),ce(qe[0],Q,z,U+.78,de,4,1.25,1.65);for(let ue=0;ue<2;ue++)ce(qe[1],Q*2+ue,z+q*2.04,U+.72,de+(ue-.5)*1.2,.07,.22,.28),ce(qe[2],Q*2+ue,z-q*2.04,U+.72,de+(ue-.5)*1.2,.07,.2,.3)}qe.forEach(Q=>Q.instanceMatrix.needsUpdate=!0)}}const Ie=new uo(s),Le=Zt(11939368,16733997,.35);for(const J of[2,e.length-2]){const Q=e.sample(J);for(let y=-Q.width*.43;y<=Q.width*.43;y+=Q.width/7){const U=e.sample(J,y);Ie.add(new en(1.05,8,6),Le,U.x,.55,U.z,1,.9,1),Ie.box(a,U.x,1.7,U.z,.25,.6,.25)}const A=Iu("RIVER LIMIT · TURN BACK",27,3,"#18313b","#ffd290");A.position.set(Q.x,6,Q.z),A.rotation.y=Q.heading,i.add(A)}Ie.finish(i);const Ne=[],tt=[],I=Array.from({length:Math.ceil(t.length/4)},()=>new uo);for(const J of t){const Q=qv(J),A=Math.hypot(J.bankX-Q.x,J.bankZ-Q.z),y=B2(J.id,{shoreDistance:A}),U=y.group,X=new uo(s);U.position.set(Q.x,0,Q.z),U.rotation.y=Q.heading+Math.PI/2,i.add(U),U.updateMatrixWorld();const q=I[Math.floor(J.index/4)];for(const Ae of[...U.children])q.add(Ae.geometry,Ae.material,Q.x,0,Q.z,1,1,1,U.rotation.y),U.remove(Ae),Ae.geometry.dispose();s.push(...ac(y.fixtures,U.matrixWorld));const z=Zt(11896937),de=Zt([9158593,14200424,10838093][J.index%3]),ce=Zt(2635332);for(let Ae=0;Ae<3;Ae++){const Se=(Ae-1)*2.8,We=-.7+Ae%2*1.4;X.box(de,Se,3.1,We,.57,.85,.34),X.add(new en(.22,7,6),z,Se,3.73,We,1,1.18,.96);for(const F of[-1,1])X.box(ce,Se+F*.15,2.35,We,.19,.75,.22),X.box(de,Se+F*.38,3.05,We,.15,.65,.19)}X.finish(U);const ue=Ka(J.thai,J.name.toUpperCase()+(J.name.toLowerCase().includes("pier")?"":" PIER"),13,2,{pier:!0});ue.position.set(0,y.signY,y.signZ),ue.rotation.y=Math.PI,U.add(ue),Z.push(Q),tt.push({x:Q.x,y:4.9,z:Q.z,color:16767398,power:45,distance:24});const _e=U.userData.gangway,ae=U.localToWorld(new P(0,0,(_e.start[2]+_e.end[2])/2));Z.push({x:ae.x,z:ae.z,width:3.8,length:_e.end[2]-_e.start[2],heading:U.rotation.y,mass:1e4,vx:0,vz:0});const he=new lt(new Ko(17.5,18.3,64),new gn({color:16760166,transparent:!0,opacity:.8,side:Ot,depthWrite:!1,toneMapped:!1}));he.rotation.x=-Math.PI/2,he.position.set(J.x,.18,J.z),i.add(he);const Re=Iu("PICK UP",13,2.8,"#163237","#ffd995");Re.position.set(J.x,9,J.z),i.add(Re),Ne.push({pier:J,ring:he,beacon:Re,group:U})}for(const J of I){const Q=new Qt;Q.name="batched-pier-structures",J.finish(Q),Q.traverse(A=>{A.updateMatrix(),A.matrixAutoUpdate=!1}),i.add(Q)}const oe=$v(i),ie=oe.sky,ee=a2(i,e,v,n),te=l2(i,e,v,n),Me=u2(i,e,v,n);s.push(...ee.fixtures);const pe=new lc(i,s),ye=Array.from({length:n?2:3},()=>{const J=new Nf(16761212,0,46,2);return i.add(J),J});return{water:_,landmarks:v,pierVisuals:Ne,bridgeColliders:Z,bridgeGroups:W,sky:ie,visibleLights:pe,droneShow:Me,setMoonLaunchView:J=>oe.setLaunchView(J),update(J,Q,A,y=[]){oe.update(J),Me.update(J),we(J),ee.update(J),te.update(J,Q);const U=[...ee.lights,...te.lights,...tt,...y];M.update(J,Q,U,oe.direction);const X=U.map(q=>({s:q,d:(q.x-Q.position.x)**2+(q.z-Q.position.z)**2})).sort((q,z)=>q.d-z.d);for(let q=0;q<ye.length;q++){const z=X[q]?.s,de=ye[q];de.intensity=z?Math.min(100,z.power*(z.boat?.48:1.9)):0,z&&(de.position.set(z.x,z.y,z.z),de.color.set(z.color),de.distance=z.distance||46)}for(const q of Ne){const z=A.fare?A.fare.to.id===q.pier.id:!A.finished&&(A.cooldowns.get(q.pier.id)||0)<=A.clock;q.ring.visible=q.beacon.visible=z,z&&(q.ring.material.color.set(A.fare?9040591:16760166),q.ring.material.opacity=.55+Math.sin(J*3)*.15,q.beacon.quaternion.copy(Q.quaternion),q.beacon.visible=Q.position.distanceTo(q.beacon.position)<550,q.beacon.position.y=9+Math.sin(J*2)*.6)}}}}const Oo=Object.freeze({longtail:Object.freeze({length:12.4,width:2.35,mass:1,maxSpeed:25}),cruise:Object.freeze({length:55,width:13,mass:24,maxSpeed:5.1}),ferry:Object.freeze({length:30,width:5.5,mass:5.5,maxSpeed:12}),electric:Object.freeze({length:24,width:7,mass:7,maxSpeed:9}),patrol:Object.freeze({length:13.8,width:3.8,mass:2.8,maxSpeed:61}),fishing:Object.freeze({length:6.5,width:1.55,mass:.45,maxSpeed:3.8})}),il={wood:10183998,woodLight:12096096,darkWood:4205343,white:14408141,paintWhite:14146002,red:10301993,teal:1207401,orange:13460520,gold:12489810,navy:1453113,steel:10596532,rubber:1316630,warm:16768401,cyan:7858149},ei=new Map,sl=new Map,Ns=(i,e,t=0)=>{const n=Math.sin(i*127.1+e*311.7+t*74.7)*43758.5453;return n-Math.floor(n)};function na(i,e,t=256,n=!0){if(sl.has(i))return sl.get(i);const s=new Uint8Array(t*t*4);for(let o=0;o<t;o++)for(let a=0;a<t;a++){const l=e(a,o,t),c=(o*t+a)*4;s[c]=l[0],s[c+1]=l[1],s[c+2]=l[2],s[c+3]=255}const r=new qo(s,t,t,cn);return r.wrapS=r.wrapT=ii,n&&(r.colorSpace=xt),r.generateMipmaps=!0,r.minFilter=En,r.magFilter=ln,r.anisotropy=4,r.needsUpdate=!0,sl.set(i,r),r}function V2(){return na("wood",(i,e)=>{const t=Math.floor(e/32),n=e%32,s=Math.sin(e*.73+Math.sin(i*.022)*3.4)*12+Math.sin(e*2.2+i*.009)*5,r=Math.sin(Math.hypot((i-94)*.13,(e-113)*1.4))*9*Math.max(0,1-Math.abs(e-113)/18),o=173+s+r+Ns(i,e)*15+Ns(t,0)*26-(n<1?66:n>29?17:0);return[o,o*.88,o*.69]})}function rl(i){return na(i,(e,t)=>{const n=Ns(e,t),s=Ns(Math.floor(e/8),Math.floor(t/8)),r=i==="cloth"?(e%3===0?-18:0)+(t%3===0?-12:0):0,o=i==="metal"?164+n*60:216+n*19+s*9+r;return[o,o,o]},128,i!=="metal")}function W2(){return na("wood-bump",(i,e)=>{const t=e%32<2?44:144+Math.sin(e*.73+Math.sin(i*.022)*3.4)*20+Ns(i,e)*23;return[t,t,t]},256,!1)}function X2(i="warm"){return na(`saloon-${i}`,(e,t,n)=>{const s=e/n,r=t/n;let a=.34+Math.exp(-((s-.34)**2*11+(r-.82)**2*18))*.56;r>.87&&(a*=.48),r<.23&&(a*=.29),(s<.11||s>.91)&&(a*=.65+.11*Math.sin(s*230));const l=[[.23,.49,.083],[.7,.43,.07]];for(const[h,u,f]of l){const d=((s-h)/f)**2+((r-u)/(f*1.06))**2<1,m=r<u-f*.5&&r>.15&&Math.abs(s-h)<f*(1.2+(u-r)*2);(d||m)&&(a*=.27)}return r>.27&&r<.29&&s>.34&&s<.82&&(a=.8),Math.abs(s-.575)<.012&&r>.17&&r<.275&&(a=.17),a+=Math.exp(-((s-.83)**2*1400))*.1,(i==="cool"?[149,197,206]:i==="dim"?[230,174,105]:[255,209,141]).map(h=>h*Math.min(1,a+Ns(e,t)*.025))})}function Xc(i){if(ei.has(i))return ei.get(i);let e={color:il[i]??i,roughness:.72,metalness:.02};if(["wood","woodLight","darkWood"].includes(i)&&(e={...e,map:V2(),bumpMap:W2(),bumpScale:.018,roughness:.48,metalness:.035}),i==="paintWhite"&&(e={...e,map:rl("paint"),roughness:.43,metalness:.11}),i.startsWith?.("cloth")&&(e={color:il[i.slice(5).toLowerCase()]??il.teal,map:rl("cloth"),roughness:.94,metalness:0}),i==="steel"&&(e={...e,roughnessMap:rl("metal"),metalness:.82,roughness:.38}),i==="gold"&&(e={...e,metalness:.63,roughness:.39}),i==="glass"&&(e={color:1323068,metalness:.61,roughness:.16,emissive:1454394,emissiveIntensity:.13}),["window","windowDim","windowCool"].includes(i)){const n=X2(i==="windowDim"?"dim":i==="windowCool"?"cool":"warm");e={color:14205859,map:n,roughness:.22,metalness:.16,emissiveMap:n,emissive:16771518,emissiveIntensity:i==="windowDim"?.55:1.2}}i==="warm"&&(e={color:16772556,emissive:16764809,emissiveIntensity:3.4,roughness:.24}),i==="cyan"&&(e={color:12904425,emissive:7980767,emissiveIntensity:1.45,roughness:.28}),i==="navRed"&&(e={color:16735561,emissive:16716806,emissiveIntensity:3.1}),i==="navGreen"&&(e={color:6349459,emissive:321609,emissiveIntensity:3.1});const t=new wt({...e,side:Ot});return ei.set(i,t),t}class yi{constructor(){this.batches=new Map,this.frame=new Ze}add(e,t,n=[0,0,0],s=[0,0,0],r=[1,1,1]){e.clearGroups();const o=new Ze().compose(new P(...n),new Bt().setFromEuler(new tn(...s)),new P(...r));e.applyMatrix4(new Ze().multiplyMatrices(this.frame,o));const a=typeof t=="string"||typeof t=="number"?Xc(t):t;this.batches.has(a)||this.batches.set(a,[]),this.batches.get(a).push(e.index?e.toNonIndexed():e),e.index&&e.dispose()}box(e,t,n,s=[0,0,0]){this.add(new un(...e),n,t,s)}ball(e,t,n,s=[1,1,1],r=8){this.add(new en(e,r,6),n,t,[0,0,0],s)}cylinder(e,t,n,s,r=n,o=7){const a=new P(...e),l=new P(...t),c=l.clone().sub(a),h=a.add(l).multiplyScalar(.5),u=new vn(r,n,c.length(),o);u.applyQuaternion(new Bt().setFromUnitVectors(new P(0,1,0),c.normalize())),this.add(u,s,h.toArray())}curve(e,t,n,s=30,r=5){this.add(new Zo(new br(e.map(o=>new P(...o))),s,t,r,!1),n)}inFrame(e,t,n){const s=this.frame,r=new Ze().makeRotationY(t);r.setPosition(...e),this.frame=new Ze().multiplyMatrices(s,r),n(),this.frame=s}finish(e){const t=new Qt;t.name=e;for(const[n,s]of this.batches){const r=Bs(s,!1);for(const a of s)a.dispose();r.computeBoundingSphere();const o=new lt(r,n);o.castShadow=!0,o.receiveShadow=!0,t.add(o)}return t}}function ri(i,e,t){const n=[],s=[],r=[];for(let a=0;a<=i;a++)for(let l=0;l<=e;l++)if(n.push(...t(a/i,l/e)),s.push(a/i*4,l/e),a<i&&l<e){const c=a*(e+1)+l;r.push(c,c+1,c+e+2,c,c+e+2,c+e+1)}const o=new it;return o.setAttribute("position",new ke(n,3)),o.setAttribute("uv",new ke(s,2)),o.setIndex(r),o.computeVertexNormals(),o}const qc=(i,e,t)=>i+(e-i)*t;function Jf(i,e){for(let t=1;t<e.length;t++)if(i<=e[t][0]){const n=e[t-1],s=e[t],r=Math.max(0,Math.min(1,(i-n[0])/(s[0]-n[0])));return qc(n[1],s[1],r*r*(3-2*r))}return e.at(-1)[1]}function Qf(i,{length:e,width:t,rim:n=.78,draft:s=.38,fishing:r=!1,color:o="wood"}){const a=f=>t*.5*Jf(f,[[0,.018],[.12,.54],[.3,.88],[.53,1],[.78,.86],[1,r?.07:.49]]),l=f=>n+Math.pow(Math.max(0,1-f*4.2),2)*(r?.33:.83)+Math.pow(Math.max(0,(f-.82)/.18),2)*.1,c=f=>-s+Math.pow(Math.abs(f-.5)*2,4)*.33;i.add(ri(40,12,(f,d)=>[a(f)*(d*2-1),qc(c(f),l(f),Math.pow(Math.abs(d*2-1),2.8)),(f-.5)*e]),o);const h=[[-a(1),l(1),e*.5],[a(1),l(1),e*.5],[a(1)*.5,-.05,e*.5],[-a(1)*.5,-.05,e*.5]];i.add(zn(h),o);const u=r?.09:.2;i.add(ri(20,1,(f,d)=>{const m=.12+f*.84;return[a(m)*.82*(d*2-1),u+.1*Math.pow(Math.abs(f-.5)*2,4),(m-.5)*e]}),"woodLight");for(let f=-e*.36;f<e*.46;f+=r?.42:.5){const d=f/e+.5;i.box([a(d)*1.63,.025,.025],[0,u+.035,f],"darkWood")}for(const f of[-1,1]){const d=Array.from({length:34},(m,x)=>{const g=x/33;return[f*a(g),l(g),(g-.5)*e]});i.curve(d,r?.045:.075,r?"darkWood":"red",40),r||(i.curve(d.map(([m,x,g])=>[m,x-.14,g]),.048,"gold",40),i.curve(d.map(([m,x,g])=>[m*.97,x-.24,g]),.055,"teal",40),i.curve(d.map(([m,x,g])=>[m*.86,x-.4,g]),.022,"darkWood",40));for(let m=0;m<14;m++){const x=.15+m/14*.78;i.curve([[f*a(x)*.55,.1,(x-.5)*e],[f*a(x)*.9,l(x)*.52,(x-.5)*e],[f*a(x)*.98,l(x)-.015,(x-.5)*e]],.025,"darkWood",5,4)}}return{beam:a,rail:l}}function zn(i,e=[1,1]){const t=new it;return t.setAttribute("position",new ke(i.flat(),3)),t.setAttribute("uv",new ke([0,0,e[0],0,e[0],e[1],0,e[1]],2)),t.setIndex([0,1,2,0,2,3]),t.computeVertexNormals(),t}function ia(i,e,t,n,s=.28,r=1){i.add(new _n(s,s*.32,6,12),"rubber",[e,t,n],[0,Math.PI/2,0]),i.curve([[e-r*.06,t+s*1.7,n],[e+r*.06,t+s*.6,n],[e,t-s*.3,n]],.012,"woodLight",7,4)}function _r(i,e,t,n,s=1,r=.29){i.add(new _n(r,.065,6,14),"orange",[e,t,n],[0,Math.PI/2,0]);for(let o=0;o<4;o++){const a=Math.PI/4+o*Math.PI/2;i.add(new _n(r,.069,5,3,.25),"white",[e,t,n],[0,Math.PI/2,a])}i.curve([[e-s*.02,t+.42,n-.21],[e+s*.04,t-.37,n-.31],[e+s*.04,t-.43,n+.28],[e-s*.02,t+.4,n+.21]],.012,"woodLight",13,4)}function Er(i,e,t,n,s=1){i.box([.3*s,.07*s,.19*s],[e,t,n],"steel"),i.cylinder([e,t,n],[e,t+.13*s,n],.045*s,"steel"),i.cylinder([e-.22*s,t+.16*s,n],[e+.22*s,t+.16*s,n],.045*s,"steel")}function zo(i,e,t,n,s=.3){for(let r=0;r<4;r++){const o=s-r*s*.17;i.curve(Array.from({length:19},(a,l)=>{const c=l/18*Math.PI*2;return[e+Math.cos(c)*o,t+r*.008,n+Math.sin(c)*o*.72]}),.018,"woodLight",19,4)}}function Fs(i,e,t,n,s){i.box([.12,.18,.18],[e,t-.02,n],"steel"),i.ball(.068,[e+s*.055,t,n-.035],s<0?"navRed":"navGreen",[.7,1,.85]),i.box([.15,.045,.22],[e,t+.09,n],"rubber")}function Tr(i,e,t,n,s=1){i.cylinder([e,t,n],[e,t+1.3*s,n],.017*s,"steel");const r=[[0,1/6,"red"],[1/6,2/6,"white"],[2/6,4/6,"navy"],[4/6,5/6,"white"],[5/6,1,"red"]];for(const[o,a,l]of r)i.add(ri(8,1,(c,h)=>[e+c*.68*s,t+(1.25-.45*(o+h*(a-o)))*s,n+Math.sin(c*8)*.08*s]),l)}function hn(i,e,t,n,{seated:s=!1,heading:r=0,shirt:o="teal",skin:a=11960921,hat:l=!1,scale:c=1,lifeVest:h=!1}={}){i.inFrame([e,t,n],r,()=>{const u=i.frame;i.frame=u.clone().scale(new P(c,c,c));const f=s?.47:.86,d=f+.48,m=d+.23;if(i.add(new jo([new $(.155,0),new $(.16,.1),new $(.185,.28),new $(.222,.37),new $(.162,.43)],10),o,[0,f,0],[0,0,0],[1,1,.67]),h){for(const x of[-1,1])i.box([.14,.35,.065],[x*.095,f+.26,-.14],"orange",[0,0,x*.035]);i.box([.34,.025,.07],[0,f+.16,-.176],"rubber")}i.ball(.18,[0,f,0],"navy",[1,.63,.76]),i.cylinder([0,d-.02,0],[0,d+.08,0],.065,a),i.ball(.12,[0,m,-.015],a,[.82,1.15,.87]),i.ball(.112,[0,m+.059,.013],"rubber",[.94,.71,.97]),i.ball(.023,[0,m-.005,-.117],a,[.8,.9,1]);for(const x of[-1,1])i.ball(.021,[x*.098,m-.002,-.006],a,[.53,1.2,.65],6),i.ball(.01,[x*.037,m+.017,-.111],"rubber",[1,.65,.45],6);for(const x of[-1,1]){const g=[x*.105,f-.02,0],p=s?[x*.16,.43,-.36]:[x*.1,.43,x*.018],M=s?[x*.16,.09,-.37]:[x*.13,.09,-.035];i.cylinder(g,p,.075,"navy",.087),i.ball(.071,p,"navy"),i.cylinder(p,M,.052,"navy",.066),i.box([.135,.08,.24],[M[0],.055,M[2]-.035],"rubber");const _=[x*.22,d-.075,0],v=s?[x*.25,f+.2,-.16]:[x*.25,f+.21,.03],E=s?[x*.16,f+.03,-.36]:[x*.26,f-.05,-.035];i.cylinder(_,v,.068,o,.087),i.cylinder(v,E,.044,a,.054),i.ball(.058,E,a,[.75,1,.7])}l&&(i.add(new Yo(.24,.13,14),"woodLight",[0,m+.16,-.012]),i.cylinder([0,m+.105,-.012],[0,m+.123,-.012],.26,"woodLight",.26,16),i.cylinder([-.1,m+.1,0],[-.06,m-.08,-.05],.008,"darkWood",.008,4)),i.frame=u})}function $f(i,{length:e,width:t,y:n,z:s=0,color:r="teal",posts:o=3,stripe:a="gold"}){i.add(ri(24,16,(l,c)=>[(c-.5)*t,n+.24*(1-Math.pow(c*2-1,2))-Math.sin(l*Math.PI*(o-1))**2*.035+Math.sin(l*Math.PI*24)*.006,s+(l-.5)*e]),`cloth${r[0].toUpperCase()}${r.slice(1)}`);for(const l of[-1,1])i.add(ri(24,1,(c,h)=>[l*t/2,n-h*(.13+.025*Math.sin(c*Math.PI*20)),s+(c-.5)*e]),`cloth${r[0].toUpperCase()}${r.slice(1)}`),i.box([.035,.029,e],[l*t/2,n-.022,s],a),i.cylinder([l*t/2,n,s-e/2],[l*t/2,n,s+e/2],.028,"steel");for(let l=0;l<o;l++){const c=s-e*.46+l/Math.max(1,o-1)*e*.92;for(const h of[-1,1])i.cylinder([h*(t/2-.045),.6,c],[h*(t/2-.045),n,c],.028,"steel");i.curve([[-t/2,n-.008,c],[-t*.25,n+.17,c],[0,n+.23,c],[t*.25,n+.17,c],[t/2,n-.008,c]],.025,"steel",12)}i.add(zn([[-.075,n+.246,s-e/2],[.075,n+.246,s-e/2],[.075,n+.246,s+e/2],[-.075,n+.246,s+e/2]]),a)}function Mr(i,e,t,n,s,r="red"){i.box([s,.12,.42],[e,t,n],"woodLight"),i.box([s-.045,.055,.38],[e,t+.078,n],r),i.box([s,.33,.075],[e,t+.26,n+.19],r);for(const o of[-1,1])i.box([.055,.39,.055],[e+o*s*.38,t-.2,n],"steel")}function q2(i=!0){const e=new yi;e.box([.64,.49,.88],[0,.12,0],"rubber"),e.box([.7,.12,.68],[0,.4,-.035],"steel");for(let r=0;r<4;r++)e.cylinder([.3,.12,-.29+r*.18],[.45,.24,-.29+r*.18],.056,"steel",.056,7),e.box([.43,.042,.1],[0,.485,-.29+r*.18],"rubber");e.cylinder([-.16,.26,-.47],[-.16,.36,-.68],.09,"steel",.09,7),e.cylinder([-.16,.36,-.68],[-.16,.75,-.68],.06,"steel",.06,7),e.cylinder([0,.15,.35],[0,.15,.58],.27,"rubber",.27,10),e.cylinder([0,.15,.57],[0,.15,.6],.13,"steel",.13,10),e.cylinder([-.35,.32,.04],[-.82,.34,-.8],.027,"steel"),e.cylinder([-.82,.34,-.8],[-.84,.35,-1.03],.045,"rubber"),e.cylinder([0,.04,.55],[0,-1.13,3.52],.047,"steel",.036,7),e.cylinder([0,-.01,.51],[0,-.4,1.51],.081,"rubber",.055,7),e.box([.55,.28,.38],[.58,-.19,-.12],"red"),e.cylinder([.58,-.06,-.12],[.58,.025,-.12],.055,"rubber"),e.box([.63,.56,.1],[0,.13,-.5],"rubber");for(let r=0;r<11;r++)e.box([.48,.013,.12],[0,-.1+r*.045,-.535],"steel");for(let r=0;r<5;r++)e.cylinder([.3,.26,-.28+r*.13],[.37,.48,-.28+r*.13],.014,"gold",.014,5),e.ball(.026,[.31,.45,-.28+r*.13],"steel",[1,.7,1],6);e.curve([[.49,.12,-.22],[.62,.14,.1],[.51,.42,.38],[.29,.46,.28]],.049,"steel",12,6),e.curve([[-.31,.34,-.32],[-.5,.4,-.06],[-.47,-.07,.37],[-.14,-.19,.43]],.029,"rubber",12,5),e.curve([[.62,-.05,-.1],[.71,.29,-.19],[.34,.43,-.26],[.15,.39,.02]],.016,"rubber",14,4);for(const r of[-.21,.21])e.cylinder([r,.15,.62],[r,.15,.645],.15,"steel",.15,12),e.cylinder([r,.15,.648],[r,.15,.66],.11,"rubber",.11,10),e.cylinder([r,.15,.666],[r,.15,.67],.035,"gold",.035,7);e.curve([[-.21,.285,.66],[.21,.285,.66],[.34,.15,.66],[.21,.015,.66],[-.21,.015,.66],[-.34,.15,.66],[-.21,.285,.66]],.016,"rubber",26,4);for(const r of[-1,1])e.cylinder([r*.4,-.17,-.36],[r*.4,-.17,.4],.035,"steel"),e.cylinder([r*.4,-.17,.02],[0,-.47,.02],.038,"steel");const t=e.finish("exposed long-tail engine"),n=new yi;n.cylinder([0,0,-.045],[0,0,.045],.085,"gold",.075,9);for(let r=0;r<3;r++){const o=r*Math.PI*2/3;n.box([.13,.37,.043],[Math.sin(o)*.16,Math.cos(o)*.16,0],"gold",[0,.25,-o+.19])}const s=n.finish("propeller");return s.position.set(0,-1.13,3.52),s.rotation.x=.375,t.add(s),t.userData.propeller=s,i||t.scale.setScalar(.55),t}function Y2(i){const e=new yi;Qf(e,{length:12.4,width:2.35}),e.add(zn([[-.54,.83,-4.45],[.54,.83,-4.45],[.07,1.47,-6.15],[-.07,1.47,-6.15]]),"woodLight"),e.curve([[0,.68,-5.35],[0,1,-6.01],[0,1.67,-6.33],[0,1.79,-6.26]],.105,"wood",15,6);for(let s=0;s<5;s++)e.box([.26,.065,.15],[0,1.25+s*.075,-6.17-s*.02],s%2?"gold":"red",[-.26,0,0]);for(let s=0;s<3;s++){const r=(s-1)*.09,o=1.54,a=-6.22;e.add(zn([[r-.055,o,a],[r+.055,o,a],[r+.09,o-.66+s*.1,a+.22],[r-.025,o-.68+s*.1,a+.18]]),["red","gold","teal"][s])}for(let s=0;s<=12;s++){const r=Math.PI*s/12;e.ball(.046,[.18*Math.cos(r),1.2-.32*Math.sin(r),-6.06],s%3===0?"warm":"gold",[1,1,1],6)}$f(e,{length:6.2,width:2.17,y:2.02,z:.15,color:i%3===1?"red":"teal",posts:4});for(let s=0;s<5;s++)Mr(e,0,.52,-2.28+s*1.06,1.79);e.cylinder([-.83,1.99,-2.74],[.83,1.99,-2.74],.024,"warm"),e.cylinder([-.83,1.99,2.91],[.83,1.99,2.91],.024,"warm"),hn(e,-.43,.21,-1.18,{seated:!0,shirt:"white"}),hn(e,.42,.21,-.13,{seated:!0,shirt:"red",skin:14199428}),hn(e,-.43,.21,1.99,{seated:!0,shirt:"orange"}),e.box([1.27,.14,.63],[0,.73,4.2],"woodLight"),hn(e,-.16,.4,4.21,{seated:!0,shirt:"navy",hat:!0,lifeVest:!0}),e.box([.48,.36,.56],[.59,.37,3.81],"navy"),e.cylinder([-.47,.41,4.88],[0,1,5.24],.06,"steel"),e.cylinder([.47,.41,4.88],[0,1,5.24],.06,"steel");for(const s of[-1,1]){ia(e,s*1.04,.55,2.89,.21,s),Fs(e,s*1.08,2.06,-2.66,s),Er(e,s*.79,.89,3.31,.75),_r(e,s*1.06,1.3,2.65,s,.22),e.add(new Rt(3.8,.24),ra("เรือหางยาว  BANGKOK"),[s*1.137,.59,-.35],[0,s*Math.PI/2,0]),e.cylinder([s*1.025,1.87,-2.9],[s*1.025,1.87,3.16],.035,"clothWhite");for(let r=-2.5;r<2.9;r+=1.2)e.curve([[s*.96,1.89,r-.045],[s*.96,1.63,r],[s*.96,1.89,r+.045]],.014,"rubber",8,4)}zo(e,.03,.87,-4.62,.23),Tr(e,.61,.9,4.04,.67),e.box([.3,.15,.14],[-.83,1.56,3.34],"rubber"),e.box([.24,.1,.008],[-.83,1.57,3.418],"cyan");for(const s of[-2.74,2.91])e.box([1.8,.07,.11],[0,2.045,s],"paintWhite");const t=e.finish("Thai wooden long-tail"),n=q2();return n.position.set(0,1,5.22),t.add(n),t.userData.motor=n,t.userData.propeller=n.userData.propeller,t.userData.passengerSeats=[[-.43,.73,-2.28],[.43,.73,-2.28],[-.43,.73,-.16],[.43,.73,.9]],t}function sa(i,{length:e,width:t,height:n=1.5,draft:s=1.1,color:r="paintWhite",x:o=0,stern:a=.82,deck:l="woodLight",trim:c="gold"}){const h=u=>t*.5*Jf(u,[[0,.025],[.065,.39],[.18,.87],[.3,1],[.78,1],[1,a]]);i.add(ri(32,12,(u,f)=>[o+h(u)*(f*2-1),-s+(n+s)*Math.pow(Math.abs(f*2-1),3),(u-.5)*e]),r),i.add(ri(32,1,(u,f)=>[o+h(u)*(f*2-1),n,(u-.5)*e]),l),i.add(zn([[o-h(1),n,e/2],[o+h(1),n,e/2],[o+h(1)*.75,-s*.45,e/2],[o-h(1)*.75,-s*.45,e/2]]),r);for(const u of[-1,1]){const f=Array.from({length:28},(d,m)=>{const x=m/27;return[o+h(x)*u,n-.27,(x-.5)*e]});i.curve(f,.065,c,36),i.curve(f.map(([d,m,x])=>[d*.999,m-.38,x]),.08,"navy",36)}return h}function Vi(i,e,t,n,s,{material:r="steel",height:o=.94,step:a=1.6,lights:l=!1}={}){i.cylinder([e,t+o,n],[e,t+o,s],.035,r),i.cylinder([e,t+o*.49,n],[e,t+o*.49,s],.021,r);for(let c=n;c<=s+.01;c+=a)i.cylinder([e,t,c],[e,t+o,c],.027,r),l&&i.ball(.054,[e,t+o+.028,c],"warm",[1,1,1],6)}function j2(i,e,t,n){i.cylinder([e,t,n],[e,t+.71,n],.055,"steel"),i.cylinder([e,t+.71,n],[e,t+.765,n],.55,"white",.55,10),i.cylinder([e,t+.768,n],[e,t+.9,n],.048,"gold"),i.ball(.043,[e,t+.92,n],"warm",[.72,1.2,.72],6);for(const s of[-1,1])i.cylinder([e+s*.3,t+.768,n],[e+s*.3,t+.785,n],.13,"white",.13,10),i.cylinder([e+s*.23,t+.77,n+.2],[e+s*.23,t+.87,n+.2],.009,"steel",.009,5),i.ball(.043,[e+s*.23,t+.9,n+.2],"glass",[.8,1.17,.8],6);for(const s of[-1,1]){i.box([.44,.08,.44],[e+s*.81,t+.43,n],"red"),i.box([.1,.45,.44],[e+s*1.01,t+.69,n],"white");for(const r of[-.15,.15])i.cylinder([e+s*.83,t,n+r],[e+s*.83,t+.42,n+r],.025,"steel")}}function ra(i){const e=`sign:${i}`;if(ei.has(e))return ei.get(e);if(typeof document>"u")return Xc("warm");const t=document.createElement("canvas");t.width=1024,t.height=128;const n=t.getContext("2d");n.fillStyle="#133c43",n.fillRect(0,0,t.width,t.height),n.strokeStyle="#d6b25c",n.lineWidth=5,n.strokeRect(8,8,t.width-16,t.height-16),n.fillStyle="#ffe2a0",n.font="bold 64px Arial, sans-serif",n.textAlign="center",n.textBaseline="middle",n.fillText(i,512,67,980);const s=new On(t);s.colorSpace=xt;const r=new wt({map:s,emissiveMap:s,emissive:16777215,emissiveIntensity:.6,roughness:.65,side:Ot});return ei.set(e,r),r}function K2(i){const e=new yi;sa(e,{length:55,width:13,height:1.45,draft:1.6});for(const[t,n,s,r]of[[1.48,11.65,44,1],[4.08,11.55,43,1.4],[6.54,10.25,39.5,1.8]]){e.box([n,.22,s],[0,t,r],"paintWhite"),e.box([n-.23,.05,s-.24],[0,t+.145,r],"woodLight");for(const o of[-1,1])e.box([.07,.075,s-.3],[o*(n/2+.013),t+.09,r],"warm")}for(const t of[1.7,4.3]){for(const n of[-1,1]){const s=n*5.29;e.box([.13,.34,40.7],[s,t+.19,1.3],"paintWhite"),e.box([.13,.22,40.7],[s,t+2.03,1.3],"paintWhite");for(let r=-18.2;r<=20;r+=2.6)e.box([.09,1.6,2.34],[s,t+1.11,r],(Math.round((r+18.2)/2.6)+(t>3?1:0))%4===0?"windowDim":"window"),e.box([.15,1.98,.095],[s,t+1.07,r+1.23],"paintWhite"),e.box([.13,.24,2.35],[s+n*.02,t+1.79,r],"glass"),e.box([.15,1.61,.045],[s+n*.035,t+1.08,r],"gold");Vi(e,n*5.7,t-.06,-19.7,21.2,{lights:t>3,step:1.5})}e.box([10.5,1.95,.16],[0,t+1.08,21.85],"paintWhite");for(let n=-3.24;n<=3.24;n+=2.16)e.box([1.94,1.28,.17],[n,t+1.13,21.95],"window");e.add(zn([[-5.21,t+.42,-19.52],[5.21,t+.42,-19.52],[4.92,t+1.85,-18.94],[-4.92,t+1.85,-18.94]]),"glass");for(const n of[-3.35,0,3.35])e.cylinder([n,t+.43,-19.54],[n*.95,t+1.89,-18.96],.053,"paintWhite")}for(const t of[-1,1]){Vi(e,t*4.98,6.69,-17.5,21.3,{material:"gold",step:1.4,lights:!0}),Vi(e,t*5.45,1.64,-22.2,-19.9,{lights:!0,step:.8});const n=ra(i%2?"CHAO PHRAYA NIGHT":"RIVER PEARL");e.add(new Rt(13.6,1.12),n,[t*5.81,3.78,1.3],[0,t*Math.PI/2,0])}e.box([3.35,.045,8.5],[0,6.715,-.8],"teal");for(const t of[-3.2,3.2])for(let n=-13;n<=16;n+=4.8)j2(e,t,6.72,n);for(let t=0;t<10;t++){const n=t%2?2.35:-2.35,s=-12+Math.floor(t/2)*5.4;hn(e,n,6.73,s,{seated:!0,heading:n<0?-Math.PI/2:Math.PI/2,shirt:t%3===0?"red":"white",skin:t%2?14199428:11960921})}for(let t=0;t<4;t++)hn(e,-.75+t%2*1.5,6.75,-1.7+Math.floor(t/2)*2.1,{shirt:t%2?"red":"white",heading:t*1.4});for(const t of[-4.25,4.25])for(const n of[-16.1,20.3])e.cylinder([t,6.7,n],[t,9.27,n],.055,"steel");for(const t of[-4.25,4.25]){e.curve([[t,9.2,-16.1],[t,8.63,-4],[t,8.63,8],[t,9.2,20.3]],.013,"rubber",24,4);for(let n=0;n<25;n++){const s=n/24,r=qc(-16.1,20.3,s),o=9.2-Math.sin(s*Math.PI)*.59;e.ball(.067,[t,o-.075,r],"warm",[1,1.18,1],6)}}e.box([5.1,1.82,3.25],[0,7.64,-16.45],"paintWhite"),e.add(zn([[-2.5,7.2,-18.12],[2.5,7.2,-18.12],[2.35,8.45,-17.76],[-2.35,8.45,-17.76]]),"glass"),e.box([5.4,.18,3.6],[0,8.65,-16.45],"paintWhite"),e.add(ri(12,18,(t,n)=>[(n-.5)*8.9,9.04+.47*(1-(n*2-1)**2),13.65+t*6.1]),"clothWhite");for(const t of[13.65,16.7,19.75])e.curve([[-4.45,9.04,t],[0,9.51,t],[4.45,9.04,t]],.037,"steel",16,5);for(const t of[-4.24,4.24])e.cylinder([t,6.75,13.78],[t,9.1,13.78],.058,"paintWhite");e.cylinder([0,8.73,-15.9],[0,10.2,-15.9],.057,"steel"),e.box([1.76,.14,.32],[0,9.61,-15.9],"paintWhite"),e.ball(.09,[0,10.24,-15.9],"warm"),Fs(e,-5.28,6.25,-16.8,-1),Fs(e,5.28,6.25,-16.8,1);for(const t of[-1,1])for(let n=-15;n<=20;n+=7)e.cylinder([t*6.09,.66,n],[t*6.09,1.35,n],.19,"rubber",.19,8);for(const t of[-1,1]){for(const n of[-23,22.3])Er(e,t*3.7,1.66,n,1.7);_r(e,t*5.71,2.61,17.6,t,.39),_r(e,t*4.99,7.61,19.8,t,.39),e.cylinder([t*4.96,7.64,-11.5],[t*4.96,8.17,-11.5],.052,"paintWhite"),e.ball(.12,[t*4.96,8.19,-11.5],"warm",[.68,.68,1],8);for(let n=0;n<10;n++)e.box([1.17,.075,.3],[t*4.75,1.83+n*.248,19.1+n*.26],"paintWhite");e.cylinder([t*4.15,2.66,19.06],[t*4.15,5.01,21.42],.032,"steel"),e.cylinder([t*5.36,2.66,19.06],[t*5.36,5.01,21.42],.032,"steel")}zo(e,-2.3,1.49,-23,.65),zo(e,2.6,1.49,23.4,.63),e.box([2.6,.71,.82],[0,7.09,18],"darkWood"),e.box([2.68,.045,.88],[0,7.475,18],"steel");for(const t of[-1.72,1.72]){e.box([.51,1.26,.54],[t,7.36,18.54],"rubber");for(const n of[7.04,7.57])e.cylinder([t,n,18.25],[t,n,18.22],.18,"navy",.18,10)}hn(e,0,6.72,18.65,{shirt:"white",heading:Math.PI});for(const t of[-.84,.84])e.box([.42,.012,.32],[t,7.51,17.98],"cyan");return Tr(e,0,7.7,21.55,1.7),e.ball(.1,[0,8.19,21.6],"warm"),e.finish("illuminated dinner cruise")}function Z2(i,e,t,n,s="orange"){i.cylinder([e,t,n],[e,t+2.2,n],.029,"steel"),i.add(ri(7,2,(r,o)=>[e+r*1.18,t+2.05-o*.56,n+Math.sin(r*7)*.1]),s)}function J2(i){const e=new yi;sa(e,{length:30,width:5.5,height:.97,draft:.7,stern:.8});for(const t of[-1,1])e.box([.13,.33,23.2],[t*2.61,1.15,.7],"orange");$f(e,{length:22.5,width:5.11,y:3.4,z:.7,color:"white",posts:7,stripe:"orange"});for(const t of[-1,1])e.box([.055,.42,20],[t*2.46,2.95,.8],"glass"),Vi(e,t*2.58,1.25,-10.1,11.4,{height:.68,step:1.6}),e.add(new Rt(8.1,.64),ra("CHAO PHRAYA EXPRESS"),[t*2.625,1.58,.6],[0,t*Math.PI/2,0]),e.box([.045,.04,19.5],[t*2.35,3.38,.8],"warm");for(let t=0;t<10;t++){const n=-8.9+t*1.96;Mr(e,-1.41,1.36,n,1.76,"orange"),Mr(e,1.41,1.36,n,1.76,"orange"),t%2===0&&hn(e,t%4===0?-1.35:1.35,1.06,n,{seated:!0,shirt:t%3?"teal":"white"})}e.box([3.5,1.53,2.67],[0,1.94,-10.49],"white"),e.add(zn([[-1.67,1.7,-11.9],[1.67,1.7,-11.9],[1.49,2.77,-11.57],[-1.49,2.77,-11.57]]),"glass"),e.box([3.85,.13,2.98],[0,2.84,-10.49],"orange");for(const t of[-.55,.55])e.cylinder([t,1.75,-11.91],[t,2.76,-11.57],.028,"white");Z2(e,0,1.26,-13.61,i%3===1?"gold":"orange");for(const t of[-1,1]){e.box([.8,.48,1.12],[t*1.02,.71,14.47],"rubber"),e.box([.16,.9,.2],[t*1.02,.13,14.65],"steel");for(let n=-8;n<12;n+=4)ia(e,t*2.77,.76,n,.29,t);Fs(e,t*2.28,3.32,-9.1,t)}e.box([2.05,.1,1.9],[0,1.07,12.35],"woodLight"),hn(e,1.71,1.05,12.1,{shirt:"navy",lifeVest:!0});for(const t of[-1,1]){_r(e,t*2.61,2.41,8.82,t,.32);for(let n=-7.5;n<=8;n+=3.7)e.box([.43,.21,.48],[t*1.96,3.13,n],"orange"),e.box([.45,.035,.5],[t*1.96,3.2,n],"rubber"),e.box([.51,.03,.52],[t*1.96,2.995,n],"steel");Er(e,t*1.96,1.13,-12.58,1.1),e.box([.6,.32,.39],[t*2,1.33,10.5],"rubber")}for(let t=-6;t<=6;t+=6)e.box([2.45,.075,.16],[0,3.42,t],"paintWhite"),e.box([2.25,.028,.115],[0,3.37,t],"warm");return Tr(e,.92,1.62,12.66,1.1),zo(e,-.49,1.11,-13,.37),e.ball(.08,[0,3.52,11.21],"warm"),e.finish("orange flag express ferry")}function Q2(){const i=new yi;for(const e of[-1,1])sa(i,{length:24,width:2.1,height:1.03,draft:.63,x:e*2.36,color:"paintWhite",stern:.44});i.box([6.8,.28,20.4],[0,1.18,0],"white"),i.box([6.36,.065,18.9],[0,1.36,0],"woodLight"),i.box([5.83,.38,17.4],[0,1.56,0],"navy"),i.box([6.39,.22,18.82],[0,3.69,0],"white"),i.box([6.04,.07,18.02],[0,3.85,0],"teal");for(const e of[-1,1]){for(let t=-7.18;t<=7.2;t+=2.05)i.box([.11,1.63,1.92],[e*2.89,2.6,t],"windowCool");for(let t=-8.2;t<=8.2;t+=2.05)i.box([.13,1.92,.092],[e*2.94,2.64,t],"white");i.box([.13,.045,18.49],[e*3.19,3.64,0],"cyan"),i.add(new Rt(6.65,.58),ra("RIVER ELECTRIC"),[e*3.03,1.79,0],[0,e*Math.PI/2,0]),Vi(i,e*3.27,1.38,-9.52,9.52,{height:.62,step:1.4}),Fs(i,e*3.04,3.6,-7.2,e);for(const t of[-7,-.8,6.4])i.cylinder([e*3.44,.55,t],[e*3.44,1.2,t],.145,"rubber")}for(const e of[-1,1]){const t=e*9;i.add(zn([[-2.87,1.8,t+e*.28],[2.87,1.8,t+e*.28],[2.76,3.58,t-e*.22],[-2.76,3.58,t-e*.22]]),"glass");for(const n of[-.92,.92])i.cylinder([n,1.8,t+e*.28],[n,3.58,t-e*.22],.048,"white");i.box([3.55,.16,1.8],[0,1.19,e*10.2],"teal"),i.box([2.1,.12,.11],[0,1.77,e*9.29],"cyan")}for(let e=-7.7;e<=7.7;e+=2.52)for(const t of[-1.58,1.58]){i.box([2.73,.035,2.29],[t,3.907,e],"glass");for(let n=-1.21;n<1.3;n+=.48)i.box([.018,.012,2.25],[t+n,3.934,e],"steel");i.box([2.74,.012,.02],[t,3.934,e],"steel")}for(let e=-6.4;e<=6.4;e+=1.81)Mr(i,-1.58,1.72,e,1.58,"teal"),Mr(i,1.58,1.72,e,1.58,"teal");for(const e of[-1,1]){_r(i,e*3.28,2.02,7.72,e,.31),Er(i,e*2.62,1.55,9.38,1.1),i.box([.45,.82,.51],[e*1.93,4.3,6.7],"paintWhite");for(let t=0;t<5;t++)i.box([.455,.033,.53],[e*1.93,4.06+t*.095,6.7],"navy")}return Tr(i,.4,1.75,10.63,.85),i.cylinder([0,3.96,-5.5],[0,5.1,-5.5],.036,"steel"),i.ball(.085,[0,5.15,-5.5],"warm"),hn(i,-.81,1.4,-7.62,{seated:!0,shirt:"white"}),i.finish("electric river catamaran")}function $2(i){const e=new yi;Qf(e,{length:6.5,width:1.55,rim:.4,draft:.27,fishing:!0,color:i%2?"darkWood":"wood"});for(const t of[-1.86,.3,2.08])e.box([1.07,.09,.32],[0,.36,t],"woodLight");hn(e,-.01,-.025,.32,{seated:!0,shirt:"teal",hat:!0,heading:-.29}),e.cylinder([.12,.7,-.02],[1.29,1.85,-2.29],.019,"darkWood",.009,6),e.curve([[1.29,1.85,-2.29],[1.68,1.78,-2.77],[1.91,1.39,-3.11]],.008,"darkWood",12,4),e.cylinder([1.91,1.39,-3.11],[1.95,-.025,-3.2],.0025,"white",.0025,3),e.cylinder([-.34,.12,-1.37],[-.34,.44,-1.37],.19,"teal",.23,9),e.cylinder([-.34,.444,-1.37],[-.34,.45,-1.37],.204,"navy",.204,9),e.box([.45,.33,.59],[.26,.28,1.41],"white"),e.box([.47,.065,.61],[.26,.48,1.41],"teal");for(let t=0;t<6;t++){const n=.29-t*.035,s=Array.from({length:18},(r,o)=>{const a=o/17*Math.PI*2;return[Math.cos(a)*n,.17+t*.023,-2.09+Math.sin(a)*n]});e.curve(s,.023,"woodLight",19,4)}e.cylinder([-.61,.53,-1.81],[-.64,.53,1.83],.033,"woodLight"),e.box([.22,.046,.74],[-.64,.53,1.89],"woodLight"),e.box([.39,.33,.4],[0,.5,2.43],"rubber"),e.cylinder([0,.33,2.58],[0,-.13,3.2],.032,"steel"),e.ball(.074,[0,.95,2.55],"warm",[1,1.5,1]),e.cylinder([0,.6,2.55],[0,.85,2.55],.018,"steel"),e.cylinder([0,.83,2.55],[0,.87,2.55],.12,"rubber",.12,10),e.add(new Yo(.13,.07,10),"steel",[0,1.1,2.55]);for(const t of[-1,1])e.cylinder([t*.1,.85,2.55],[t*.1,1.09,2.55],.007,"steel",.007,4);ia(e,-.7,.2,.34,.18,-1),e.box([.27,.31,.23],[-.39,.36,1.42],"red"),e.box([.12,.065,.09],[-.39,.555,1.42],"rubber");for(let t=0;t<8;t++){const n=-2.54+t*.1;e.curve([[-.2,.2,n],[.09,.45,n+.1],[.37,.17,n]],.006,"white",6,3),e.curve([[-.23+t*.085,.19,-2.6],[-.18+t*.085,.43,-2.2],[-.2+t*.085,.18,-1.7]],.006,"white",6,3)}return e.finish("single-person wooden fishing boat")}function e_(i){const e=new yi,t=i%2?2700591:2108472;sa(e,{length:13.8,width:3.8,height:.92,draft:.55,color:t,stern:.78,deck:t,trim:"rubber"}),e.box([2.9,.26,5.8],[0,1.09,.3],t),e.box([2.66,1.48,3.85],[0,1.88,.9],t),e.add(zn([[-1.31,1.42,-1.65],[1.31,1.42,-1.65],[1.16,2.63,-1.05],[-1.16,2.63,-1.05]]),"glass"),e.cylinder([0,1.42,-1.67],[0,2.64,-1.07],.04,t),e.box([3.04,.16,4.7],[0,2.72,.65],t);for(const n of[-1,1]){for(const s of[-.05,1.42])e.box([.035,.91,1.21],[n*1.345,2.08,s],"glass");e.box([.065,.09,1.25],[n*1.37,1.5,1.4],"steel"),e.box([.04,.09,4.6],[n*1.82,.87,.8],8951706),Vi(e,n*1.55,1.01,-4.1,-1.8,{height:.53,material:t,step:1.2}),Vi(e,n*1.65,.96,3.15,5.35,{height:.55,material:t,step:1.1});for(const s of[-1.9,2.8,4.3])ia(e,n*1.87,.48,s,.23,n);Er(e,n*1.3,1.02,-4.6,.75),e.box([.84,1,.78],[n*.91,.94,6.63],t),e.box([.72,.1,.72],[n*.91,1.49,6.61],"rubber"),e.box([.25,.86,.29],[n*.91,.08,6.86],"rubber"),Fs(e,n*1.4,2.75,-1.15,n),e.add(new Rt(2.1,.26),t_(i),[n*1.354,1.35,.7],[0,n*Math.PI/2,0])}return e.box([2.1,.13,.39],[0,2.87,.65],"rubber"),e.cylinder([.63,2.82,1.95],[.63,4.1,1.95],.022,"steel"),e.cylinder([-.63,2.82,1.75],[-.63,3.55,1.75],.018,"steel"),e.box([.7,.12,.19],[.63,3.65,1.95],t),e.box([.54,.18,.52],[0,1.04,-3.4],t),e.cylinder([0,1.2,-3.4],[0,1.24,-3.4],.18,"rubber",.18,10),e.ball(.085,[0,3.7,1.96],"warm"),Tr(e,-1.25,1.1,5.05,.72),hn(e,-.63,1.05,.18,{seated:!0,shirt:t}),hn(e,.6,.96,3.6,{shirt:t}),e.finish("river patrol launch")}function t_(i){const e=`patrol-marking:${i%2}`;if(ei.has(e))return ei.get(e);if(typeof document>"u")return Xc("white");const t=document.createElement("canvas");t.width=1024,t.height=128;const n=t.getContext("2d");n.fillStyle=i%2?"#29352f":"#202c38",n.fillRect(0,0,1024,128),n.fillStyle="#b3babc",n.font='600 77px "Noto Sans Thai",sans-serif',n.textAlign="center",n.textBaseline="middle",n.fillText("ตำรวจน้ำ  "+(i%2?"๒๗":"๑๙"),512,64,970);const s=new On(t);s.colorSpace=xt;const r=new wt({map:s,roughness:.72});return ei.set(e,r),r}const Uu={longtail:Y2,cruise:K2,ferry:J2,electric:Q2,fishing:$2,patrol:e_};function ed(i="longtail",e=0){const t=Object.hasOwn(Uu,i)?i:"longtail",n=Uu[t](e);n.userData.kind=t,n.userData.spec=Oo[t];const s={longtail:[{position:[0,1.84,.15],color:16761729,intensity:19,distance:7.5}],cruise:[{position:[0,8.7,-.5],color:16762765,intensity:95,distance:31},{position:[0,8.6,15.8],color:16759685,intensity:65,distance:18}],ferry:[{position:[0,3.2,0],color:16766368,intensity:42,distance:16}],electric:[{position:[0,3.45,0],color:12774645,intensity:37,distance:13}],patrol:[{position:[-.74,3.05,.65],color:16717880,intensity:0,distance:21},{position:[.74,3.05,.65],color:1601791,intensity:0,distance:21}],fishing:[{position:[0,.94,2.55],color:16760697,intensity:5,distance:4.5}]};return n.userData.lightSources=s[t],n}const td=Object.freeze({tug:Object.freeze({length:16,width:5.4,mass:8,maxSpeed:3.2}),barge:Object.freeze({length:48,width:12.5,mass:65,maxSpeed:3.2})}),ol=new Map,fo=new Oe,Bo=(i,e)=>{const t=Math.sin(i*127.1+e*311.7)*43758.5453123;return t-Math.floor(t)};function nd(i){const t=new Uint8Array(65536);for(let s=0;s<128;s++)for(let r=0;r<128;r++){const o=(s*128+r)*4,a=i==="canvas"?(r%3===0?12:0)+(s%3===0?9:0):0,l=Bo(Math.floor(r/9),Math.floor(s/6))*18,c=i==="steel"?Math.sin(r*.65)*11*(s/128):0,h=213+Bo(r,s)*26-a-l-c;t[o]=t[o+1]=t[o+2]=h,t[o+3]=255}const n=new qo(t,128,128,cn);return n.colorSpace=xt,n.wrapS=n.wrapT=ii,n.generateMipmaps=!0,n.minFilter=En,n.anisotropy=2,n.needsUpdate=!0,n}const Nu=nd("steel"),n_=nd("canvas"),i_={metal:new wt({vertexColors:!0,map:Nu,roughness:.78,metalness:.2}),canvas:new wt({vertexColors:!0,map:n_,roughness:.96,metalness:0,side:Ot}),paint:new wt({vertexColors:!0,map:Nu,roughness:.56,metalness:.1}),rubber:new wt({vertexColors:!0,roughness:.95,metalness:0}),glass:new wt({vertexColors:!0,roughness:.23,metalness:.35,emissive:3691609,emissiveIntensity:.16}),lamp:new gn({vertexColors:!0,toneMapped:!1})};class id{constructor(){this.batches=new Map}add(e,t,n,s=[0,0,0],r=[0,0,0]){e.clearGroups(),e.applyMatrix4(new Ze().compose(new P(...s),new Bt().setFromEuler(new tn(...r)),new P(1,1,1)));const o=e.index?e.toNonIndexed():e;e!==o&&e.dispose(),fo.set(n);const a=new Float32Array(o.attributes.position.count*3);for(let l=0;l<a.length;l+=3)a[l]=fo.r,a[l+1]=fo.g,a[l+2]=fo.b;o.setAttribute("color",new _t(a,3)),this.batches.has(t)||this.batches.set(t,[]),this.batches.get(t).push(o)}box(e,t,n,s,r=[0,0,0]){this.add(new un(...e),n,s,t,r)}rod(e,t,n,s,r,o=5){const a=new P(...e),l=new P(...t),c=l.clone().sub(a),h=new vn(n,n,c.length(),o);h.applyQuaternion(new Bt().setFromUnitVectors(new P(0,1,0),c.normalize())),this.add(h,s,r,a.add(l).multiplyScalar(.5).toArray())}path(e,t,n,s,r=4){for(let o=1;o<e.length;o++)this.rod(e[o-1],e[o],t,n,s,r)}finish(e){const t=new Qt;t.name=e;for(const[n,s]of this.batches){const r=Bs(s,!1);s.forEach(a=>a.dispose()),r.computeBoundingBox(),r.computeBoundingSphere();const o=new lt(r,i_[n]);o.name=`${e}-${n}`,o.receiveShadow=!0,t.add(o)}return t}}function s_(i,e,t){const n=[],s=[],r=[];for(let a=0;a<=i;a++)for(let l=0;l<=e;l++)if(n.push(...t(a/i,l/e)),s.push(l/e*2,a/i*7),a<i&&l<e){const c=a*(e+1)+l;r.push(c,c+e+1,c+1,c+1,c+e+1,c+e+2)}const o=new it;return o.setAttribute("position",new ke(n,3)),o.setAttribute("uv",new ke(s,2)),o.setIndex(r),o.computeVertexNormals(),o}function r_(i){const e=new it;return e.setAttribute("position",new ke(i.flat(),3)),e.setAttribute("uv",new ke([0,0,1,0,1,1,0,1],2)),e.setIndex([0,1,2,0,2,3]),e.computeVertexNormals(),e}function sd(i,e,t,n,s){const r=new nn;e.forEach(([a,l],c)=>c?r.lineTo(a,-l):r.moveTo(a,-l)),r.closePath();const o=new oi(r);o.rotateX(-Math.PI/2),i.add(o,"metal",s,[0,t,0]);for(let a=0;a<e.length;a++){const[l,c]=e[a],[h,u]=e[(a+1)%e.length];i.add(r_([[l,t,c],[h,t,u],[h*.94,-n,u*.97],[l*.94,-n,c*.97]]),"metal",s)}}function lr(i,e,t,n,s,r=Math.PI/2){i.add(new _n(s,s*.3,5,10),"rubber",1579801,[e,t,n],[0,r,0]),i.rod([e,t+s*1.5,n],[e,t+s*.3,n],.033,"metal",7233604,4)}function uc(i,e,t,n,s=1){i.box([.72*s,.09*s,.47*s],[e,t,n],"metal",3357497);for(const r of[-1,1])i.rod([e+r*.2*s,t,n],[e+r*.2*s,t+.43*s,n],.13*s,"metal",5858141,7),i.box([.28*s,.065*s,.32*s],[e+r*.2*s,t+.44*s,n],"metal",7042928)}function rd(i,e,t,n,s=.5){for(let r=s;r>s*.35;r-=s*.19){const o=Array.from({length:13},(a,l)=>[e+Math.cos(l/12*Math.PI*2)*r,t,n+Math.sin(l/12*Math.PI*2)*r*.75]);i.path(o,.042,"metal",11182469,4)}}function gi(i,e,t,n=.11){i.box([n*1.6,n*2,n],e,"lamp",t)}function o_(i){const e=new id,t=i%3,n=[3552817,4733489,2701107],s=[8357756,6450260,7830648];sd(e,[[-4.8,-24],[4.8,-24],[6.25,-21.4],[6.25,21.4],[4.8,24],[-4.8,24],[-6.25,21.4],[-6.25,-21.4]],1.12,1.15,n[t]);for(const l of[-1,1]){e.box([.19,.16,42.9],[l*6.12,1.24,0],"metal",8417364),e.box([.17,.14,42.3],[l*6.28,.3,0],"rubber",1778464),e.box([.11,.1,41.4],[l*5.66,1.45,-.25],"metal",7038805);for(let c=-19;c<21;c+=3.3)e.box([.035,.82,.13],[l*6.257,.61,c],"metal",7558979),e.box([.042,.32+Bo(c,i)*.3,.16+Bo(i,c)*.22],[l*6.276,.8,c+.28],"metal",6705470)}const o=(l,c)=>1.39+Math.sin(l*Math.PI)*1.53-Math.sin(c*Math.PI*14)**2*.065;e.add(s_(42,14,(l,c)=>[(c-.5)*10.78,o(c,l),-20.4+l*38.4]),"canvas",s[t]);for(const l of[-20.4,18]){const c=[[-5.39,1.28,l],[5.39,1.28,l]];for(let h=14;h>=0;h--)c.push([(h/14-.5)*10.78,o(h/14,l<0?0:1),l]);for(let h=1;h<c.length-1;h++){const u=new it,f=l<0?[c[0],c[h],c[h+1]]:[c[0],c[h+1],c[h]];u.setAttribute("position",new ke(f.flat(),3)),u.setAttribute("uv",new ke([0,0,1,1,0,1],2)),u.computeVertexNormals(),e.add(u,"canvas",s[t])}}for(let l=0;l<=14;l++){const c=-20.4+l/14*38.4;e.path(Array.from({length:13},(h,u)=>[(u/12-.5)*10.88,1.43+Math.sin(u/12*Math.PI)*1.53,c]),.039,"metal",5593929);for(const h of[-1,1])e.rod([h*5.43,1.42,c],[h*5.74,1.18,c+.13],.024,"metal",9406832,4)}for(const[l,c,h]of[[-2.6,-11.1,-.36],[2.6,7.8,.36]])e.box([1.14,.016,1.38],[l,2.54,c],"canvas",t===1?9607051:6056795,[0,0,h]);for(const l of[-1,1])for(const c of[-20.9,-17.7,-9,9,17.7,20.9])lr(e,l*6.22,.67,c,.46);for(const l of[-23.85,23.85])for(const c of[-3.8,3.8])lr(e,c,.62,l,.48,0);for(const l of[-22.5,22.5]){for(const c of[-1,1])uc(e,c*3.85,1.14,l,1.3);e.box([1.2,.36,.36],[0,1.3,l<0?-23.5:23.5],"metal",6381137),e.box([.74,.15,.42],[0,1.49,l<0?-23.5:23.5],"rubber",1712155)}rd(e,2.5,1.18,-22.2,.69),e.box([2.35,1.19,2.15],[-2.7,1.76,20.7],"paint",10922397),e.box([2.6,.13,2.45],[-2.7,2.43,20.7],"paint",t===1?6450260:7043700),e.box([1.55,.38,.035],[-2.7,1.98,19.615],"glass",3296077),e.box([.035,.42,.65],[-1.515,1.99,20.61],"glass",2637116),e.box([.46,.84,.035],[-2.7,1.65,21.785],"paint",6187361),e.rod([-4.66,1.15,21.7],[-4.66,3.11,21.7],.045,"metal",9214350),gi(e,[-4.66,3.14,21.7],16767392,.1),gi(e,[-5.75,1.42,-20.9],16725025,.075),gi(e,[5.75,1.42,-20.9],4251009,.075);const a=e.finish(`covered cargo barge ${t+1}`);return a.userData.lightSources=[{position:[-4.66,3.14,21.7],color:16765850,intensity:8,distance:5}],a}function a_(i){const e=new id,t=i%3,n=[3307125,2582156,4222560][t],s=[12411950,11093808,10251318][t],r=[[0,-8],[1.9,-7.7],[2.55,-6],[2.7,-3.5],[2.7,5.6],[2,7.6],[0,8],[-2,7.6],[-2.7,5.6],[-2.7,-3.5],[-2.55,-6],[-1.9,-7.7]];sd(e,r,1.01,.98,2634544);const o=r.map(([u,f])=>[u*.94,f*.96]),a=new nn;o.forEach(([u,f],d)=>d?a.lineTo(u,-f):a.moveTo(u,-f)),a.closePath();const l=new oi(a);l.rotateX(-Math.PI/2),e.add(l,"paint",n,[0,1.04,0]),e.path([...r,r[0]].map(([u,f])=>[u,.87,f]),.17,"rubber",1516319,6);for(const u of[-1,1]){for(const f of[-5.7,-4.5,-3.1,-1.7,-.3,1.1,2.5,3.9,5.3])lr(e,u*2.73,.57,f,.4);lr(e,u*1.45,.5,-7.82,.46,0),lr(e,u*1.3,.51,7.89,.46,0)}e.box([3.36,1.73,4.37],[0,1.91,-2.02],"paint",13947836),e.box([3.54,.2,4.66],[0,2.85,-2.02],"paint",n),e.box([3.1,1.38,3.55],[0,3.63,-2],"paint",14802892),e.box([3.6,.2,4.03],[0,4.43,-2],"paint",s),e.box([3.7,.07,4.14],[0,4.54,-2],"paint",s);for(const u of[-.99,0,.99])e.box([.82,.73,.045],[u,3.78,-3.8],"glass",2375237);for(const u of[-1,1]){for(const m of[-2.96,-1.94,-.92])e.box([.045,.73,.84],[u*1.575,3.78,m],"glass",3429979);e.box([.045,.89,.77],[u*1.703,1.98,-2.2],"paint",8558215),e.box([.05,.34,.51],[u*1.731,2.16,-2.2],"glass",2505792);for(const m of[-3.39,-.93])e.box([.045,.45,.73],[u*1.705,2.04,m],"glass",3296333);const f=[u*2.08,1.11,.92],d=[u*2.08,2.88,-1.3];for(const m of[-.28,.28])e.rod([f[0]+m,f[1],f[2]],[d[0]+m,d[1],d[2]],.04,"metal",10136482);for(let m=0;m<=7;m++)e.box([.59,.055,.2],[f[0],f[1]+m/7*1.77,f[2]-m/7*2.22],"metal",10200474);e.rod([u*2.3,1.17,-6.32],[u*2.3,1.93,-6.32],.036,"paint",13290421),e.rod([u*2.4,1.17,-4.75],[u*2.4,1.93,-4.75],.036,"paint",13290421),e.rod([u*2.3,1.93,-6.32],[u*2.4,1.93,-4.75],.038,"paint",13290421),gi(e,[u*1.68,4.23,-3.49],u<0?16726060:3532426,.11),e.box([.2,.085,.26],[u*1.68,4.39,-3.49],"paint",s)}e.box([1.22,.69,.045],[0,3.74,-.203],"glass",3952455),e.rod([0,4.6,-2.18],[0,6.61,-2.18],.055,"paint",14145724,6),e.rod([-.61,5.59,-2.18],[.61,5.59,-2.18],.042,"paint",14145724),e.box([1.38,.13,.26],[0,5.03,-2.29],"paint",14277057),gi(e,[0,6.65,-2.18],16769454,.105),gi(e,[0,5.67,-2.18],16769454,.095),gi(e,[0,2.79,.26],16763267,.1),e.rod([.79,2.8,-.52],[.79,4.02,-.52],.17,"metal",3160885,7),e.box([.52,.07,.46],[.79,4.1,-.52],"metal",3291698),e.rod([-.8,4.54,-.38],[-.8,5.78,-.38],.019,"metal",13094073,5);const c=[[0,.1,10758948],[.1,.1,14736331],[.2,.2,3426403],[.4,.1,14736331],[.5,.1,10758948]];for(const[u,f,d]of c)e.box([.87,f,.015],[-.365,5.66-u-f*.5,-.36],"paint",d,[0,-.25,0]);e.box([2.3,.34,1.35],[0,1.23,3.14],"paint",n),e.rod([-.84,1.75,3.14],[.84,1.75,3.14],.45,"metal",6186837,10);for(const u of[-.89,.89])e.rod([u,1.32,3.14],[u,2.04,3.14],.14,"metal",7569523,7);for(let u=-.6;u<=.6;u+=.14)e.add(new _n(.45,.039,4,12),"metal",11379328,[u,1.75,3.14],[0,Math.PI/2,0]);for(const u of[-1,1])e.rod([u*1.43,1.1,4.9],[u*1.43,2.23,4.9],.1,"metal",10922912);e.rod([-1.43,2.23,4.9],[1.43,2.23,4.9],.13,"metal",11579552),e.rod([0,1.73,3.6],[0,1.52,7.71],.068,"metal",11181690,6),e.box([1,.35,.36],[0,1.35,7.61],"metal",6779491);for(const u of[-1,1])uc(e,u*1.5,1.1,6.05),uc(e,u*1.21,1.1,-6.58,.8);rd(e,1.67,1.11,2.1,.44),e.add(new _n(.34,.095,5,12),"paint",13464632,[-1.74,2.13,-.15],[0,Math.PI/2,0]),gi(e,[0,1.71,7.42],16768952,.09);const h=e.finish(`Chao Phraya working tug ${t+1}`);return h.userData.lightSources=[{position:[0,2.69,.61],color:16763535,intensity:15,distance:7}],h}function l_(i="barge",e=0){const t=i==="tug"?"tug":"barge",n=(Math.trunc(e)%3+3)%3,s=`${t}:${n}`;ol.has(s)||ol.set(s,t==="tug"?a_(n):o_(n));const r=ol.get(s).clone(!0);return r.userData.kind=t,r.userData.spec=td[t],r.userData.towPoints=t==="tug"?{bow:[0,1.3,-7.8],stern:[0,1.52,7.8]}:{bow:[0,1.49,-23.5],stern:[0,1.49,23.5]},r}const Fu=Object.freeze({desktop:3,mobile:2}),c_=61;function od(i){i.patrolClock=4,i.patrolSerial=0;for(const e of i.patrols)e.active=!1,e.age=0,e.vx=0,e.vz=0,e.mesh&&(e.mesh.visible=!1)}function h_(i,e,t,n=0,s=[]){const r=i.nearest(e.x,e.z),o=Math.abs(vr(e.heading,r.heading))<Math.PI/2?1:-1,a=n%3===1,l=a?-o:o,c=a?43:c_,h=r.distance+(a?260:-160)*o,u=Math.min(r.width,i.sample(h).width)*.31,f=Math.abs(r.offset)>u-28?-Math.sign(r.offset):n%2?-1:1,d=3.8*1.18,m=13.8*1.18;for(const x of[f,-f])for(const g of[12,18,25]){const p=r.offset+x*g;if(Math.abs(p)>u||Math.abs(p-r.offset)<11)continue;let M=!0;for(let _=0;_<=8&&M;_+=.4){const v=h+l*c*_,E=i.sample(v,p),T={...E,heading:E.heading+(l<0?Math.PI:0),width:d,length:m};if(v<20||v>i.length-20){M=!1;break}for(const w of s)if(Math.hypot(E.x-w.x,E.z-w.z)<m+w.length&&Is(T,w).gap<4){M=!1;break}for(const w of t){if(w.active===!1)continue;const R=w.distance+w.direction*(w.actualSpeed??w.speed)*_;if(Math.abs(R-v)>(m+w.length)/2+12)continue;const S=i.sample(R,w.lane);if(Is(T,{...w,x:S.x,z:S.z,heading:S.heading+(w.direction<0?Math.PI:0)}).gap<5){M=!1;break}}}if(M)return{distance:h,direction:l,lane:p,speed:c,actualSpeed:c,active:!0,age:0,slow:0,nearCooldown:0,wakeClock:0,pass:a?"oncoming":"overtake"}}return null}function u_(i,e,t,n,s=[]){for(const a of i.patrols){if(!a.active)continue;a.age+=t;const l=Math.hypot(a.x-n.x,a.z-n.z);a.age>9&&l>600&&(a.active=!1,a.mesh&&(a.mesh.visible=!1))}if(i.patrolClock-=t,i.patrolClock>0)return;const r=i.patrols.find(a=>!a.active);if(!r){i.patrolClock=2;return}const o=h_(e,n,i.traffic,i.patrolSerial,s);if(!o){i.patrolSerial++,i.patrolClock=2;return}Object.assign(r,o),i.patrolSerial++,i.patrolClock=14}function f_(i,e,t=0){const n=((i+t)%1+1)%1;return .06+.94*Math.pow(Math.max(0,Math.sin((n+(e?.5:0))*Math.PI*2)),3)}function d_(i,e){for(const[t,n]of(i.mesh.userData.lightSources||[]).entries())n.intensity=i.active?46*f_(e,t,i.variation*.21):0}function p_(i){return[-.74,.74].map((e,t)=>({a:[e,3.05,.65],b:[e,3.05,.65],width:.55,color:t?[.08,.36,3.4]:[3.4,.055,.08],parent:i.mesh,intensity:()=>Ut((i.mesh.userData.lightSources[t].intensity||0)/46,0,1)}))}const m_=1.14,po=1.18,Ou=Object.freeze({desktop:96,mobile:64}),zu=["cruise","ferry","longtail","electric","fishing","ferry","longtail","fishing"],mo=900;function g_(i,e=16,t=48){if(i!==3&&i!==4)throw new RangeError("A convoy needs three or four barges");return Array.from({length:i},(n,s)=>e/2+28+t/2+s*(t+12))}function ad(i,e,t,n=1,s=12,r=!1){const o=h=>{const u=i.sample(h),f=i.sample(h,Ut(t,-u.width*.34,u.width*.34));if(r){const m=i.sample(h-8),x=i.sample(h+8),g=x.x-m.x,p=x.z-m.z,M=Math.hypot(g,p)||1,_=Ut(t,-u.width*.34,u.width*.34);f.x=u.x-p/M*_,f.z=u.z+g/M*_}const d=h<0?h:h>i.length?h-i.length:0;return f.x-=Math.sin(f.heading)*d,f.z-=Math.cos(f.heading)*d,f},a=o(e),l=o(e-s*.35),c=o(e+s*.35);return{x:a.x,z:a.z,heading:Math.atan2(l.x-c.x,l.z-c.z)+(n===1?0:Math.PI)}}function x_(i,e,t=!1){const n=[],s=[],r=t?Ou.mobile:Ou.desktop,o=(c,h,u,f,d,m)=>({kind:c,variation:h,...e[c],scale:po,length:e[c].length*po,width:e[c].width*po,distance:u,direction:f,lane:d,speed:m,actualSpeed:m,slow:0,nearCooldown:0,wakeClock:0,x:0,z:0,heading:0,vx:0,vz:0});for(let c=0;c<r;c++){const h=zu[c%zu.length],u=c%2?1:-1,f=(u===1?-1:1)*(h==="fishing"?74:28+Math.floor(c/2)%3*20);n.push(o(h,c,45+c/r*(i.length-90),u,f,e[h].maxSpeed*(.8+c%4*.12)*m_))}for(let c=0;c<(t?2:3);c++){const h=c%2?4:3,u=c%2?-1:1,f=o("tug",c,1040+c*(i.length-1400)/((t?2:3)-1),u,-u*13.5,e.tug.maxSpeed*(.88+c*.03)),d={tug:f,barges:[],offsets:g_(h,f.length,e.barge.length*po)};f.convoy=d;for(let m=0;m<h;m++){const x=o("barge",c*4+m,f.distance-u*d.offsets[m],u,f.lane,f.speed);x.convoy=d,x.towed=!0,d.barges.push(x)}s.push(d),n.push(f,...d.barges)}const a=Array.from({length:t?Fu.mobile:Fu.desktop},(c,h)=>({...o("patrol",h,-800-h*30,1,20,61),active:!1,age:0}));n.push(...a);for(const c of n)Object.assign(c,ad(i,c.distance,c.lane,c.direction,c.length,c.kind==="patrol"));const l={traffic:n,convoys:s,patrols:a};return od(l),l}function v_(i,e,t){const{traffic:n,convoys:s}=i;for(const r of n){if(r.slow=Math.max(0,r.slow-t*.6),r.nearCooldown=Math.max(0,r.nearCooldown-t),r.towed||r.active===!1)continue;let o=r.speed/(1+r.slow);r.convoy&&(o/=1+Math.max(...r.convoy.barges.map(a=>a.slow))*.15);for(const a of n){if(a.active===!1||a===r||r.convoy&&a.convoy===r.convoy||a.direction!==r.direction||Math.abs(a.lane-r.lane)>(a.width+r.width)/2+4)continue;const l=(a.distance-r.distance)*r.direction;if(l<=0)continue;const c=l-(a.length+r.length)/2;c<65&&(o=Math.min(o,Math.max(0,(a.actualSpeed??a.speed)+(c-14)*.32)))}r.nextSpeed=o}for(const r of n)r.towed||r.active===!1||(r.actualSpeed=r.kind==="patrol"?Math.max(r.actualSpeed-28*t,Math.min(r.actualSpeed+12*t,r.nextSpeed)):r.nextSpeed,r.distance+=r.actualSpeed*t*r.direction,r.distance>e.length+mo&&(r.distance=-mo),r.distance<-mo&&(r.distance=e.length+mo));for(const r of s)r.barges.forEach((o,a)=>{o.distance=r.tug.distance-r.tug.direction*r.offsets[a],o.actualSpeed=r.tug.actualSpeed});for(const r of n)r.active!==!1&&(Object.assign(r,ad(e,r.distance,r.lane,r.direction,r.length,r.kind==="patrol")),r.vx=-Math.sin(r.heading)*r.actualSpeed,r.vz=-Math.cos(r.heading)*r.actualSpeed)}const al=new Map,ll={longtail:3,cruise:2,ferry:3,electric:1,fishing:2,patrol:2},__={body:new wt({vertexColors:!0,roughness:.75}),dark:new wt({vertexColors:!0,roughness:.55,metalness:.1}),window:new gn({vertexColors:!0}),lamp:new gn({vertexColors:!0})},Di=14276555,cl=10183998,ko=1517612,go=13460520;function Bu(i){const e=new Map,t=r=>{const o=r.isMesh?new lt(r.geometry,r.material):new Qt;e.set(r,o),o.name=r.name,o.position.copy(r.position),o.quaternion.copy(r.quaternion),o.scale.copy(r.scale),o.visible=r.visible,o.layers.mask=r.layers.mask,o.renderOrder=r.renderOrder,o.castShadow=r.castShadow,o.receiveShadow=r.receiveShadow,o.frustumCulled=r.frustumCulled;for(const a of r.children)o.add(t(a));return o.updateMatrix(),o.matrixAutoUpdate=!1,o},n=t(i),s=r=>r?.isObject3D?e.get(r):Array.isArray(r)?r.map(s):r&&typeof r=="object"?Object.fromEntries(Object.entries(r).map(([o,a])=>[o,s(a)])):r;for(const[r,o]of e)o.userData=s(r.userData);return n.userData.motor&&(n.userData.motor.matrixAutoUpdate=!0),n.userData.propeller&&(n.userData.propeller.matrixAutoUpdate=!0),n}class M_{constructor(){this.parts=new Map}add(e,t,n,s=[0,0,0],r=[0,0,0]){const o=new Ze().compose(new P(...s),new Bt().setFromEuler(new tn(...r)),new P(1,1,1));e.applyMatrix4(o);const a=e.index?e.toNonIndexed():e;a!==e&&e.dispose();const l=new Oe(n).multiplyScalar(t==="lamp"?1.6:1),c=new Float32Array(a.attributes.position.count*3);for(let h=0;h<c.length;h+=3)c[h]=l.r,c[h+1]=l.g,c[h+2]=l.b;a.setAttribute("color",new _t(c,3)),a.deleteAttribute("uv"),a.attributes.normal||a.computeVertexNormals(),this.parts.has(t)||this.parts.set(t,[]),this.parts.get(t).push(a)}box(e,t,n=Di,s="body",r){this.add(new un(...e),s,n,t,r)}beam(e,t,n,s=ko,r="dark"){const o=new P(...e),a=new P(...t),l=a.clone().sub(o),c=new vn(n,n,l.length(),4);c.applyQuaternion(new Bt().setFromUnitVectors(new P(0,1,0),l.normalize())),this.add(c,r,s,o.add(a).multiplyScalar(.5).toArray())}hull(e,t,n,s,r,o=0,a=!1){const l=[[0,.035],[.1,.58],[.25,.94],[.47,1],[.73,.97],[.9,.83],[1,.52]],c=[],h=[];for(const[d,m]of l){const x=m*t/2,g=n+(d<.1?.22:0),p=(d-.5)*e;c.push(-x+o,g,p,-x*.68+o,-s,p,x*.68+o,-s,p,x+o,g,p)}for(let d=0;d<l.length-1;d++)for(let m=0;m<(a?3:4);m++){const x=d*4+m,g=d*4+(m+1)%4,p=(d+1)*4+m,M=(d+1)*4+(m+1)%4;h.push(x,g,p,g,M,p)}h.push(0,2,1,0,3,2);const u=(l.length-1)*4;h.push(u,u+1,u+2,u,u+2,u+3);const f=new it;if(f.setAttribute("position",new ke(c,3)),f.setIndex(h),this.add(f,"body",r),a){this.box([t*.69,.1,e*.74],[o,.05,e*.03],5059875);for(const d of[-1,1])this.beam([o+d*t*.42,n,-e*.34],[o+d*t*.43,n,e*.4],.065,r,"body")}}nav(e,t,n,s){this.box([.16,.19,.22],[-e,t,n],16726310,"lamp"),this.box([.16,.19,.22],[e,t,n],3530119,"lamp"),this.box([.17,.21,.17],[0,t+.2,s],16768922,"lamp")}person(e,t,n,s=2586231){this.box([.38,.57,.3],[e,t+.71,n],s),this.box([.35,.18,.58],[e,t+.4,n-.1],ko,"dark"),this.add(new zi(.18),"body",12094311,[e,t+1.1,n])}finish(e){const t=new Qt;t.name=e;for(const[n,s]of this.parts){const r=Bs(s,!1);for(const a of s)a.dispose();r.computeBoundingSphere();const o=new lt(r,__[n]);o.name=`${e}-${n}`,t.add(o)}return t}}function y_(i,e){const t=new M_;if(i==="cruise"){t.hull(55,13,1.45,1.6,Di);for(const[n,s,r,o]of[[1.48,11.65,44,1],[4.08,11.55,43,1.4],[6.54,10.25,39.5,1.8]])t.box([s,.24,r],[0,n,o]);for(const n of[2.8,5.4]){t.box([10.5,2,39.8],[0,n,1.3],ko,"dark");for(const s of[-1,1])for(let r=0;r<15;r++)t.box([.07,1.4,2.28],[s*5.29,n,-17.1+r*2.62],r%4?9134900:5127725,"window");t.box([8.9,1.25,.06],[0,n,21.24],9134900,"window")}for(const n of[-1,1]){for(const s of[1.68,4.3,6.8])t.box([.09,.1,40],[n*(s>6?4.95:5.76),s,1.5],16763521,"lamp");t.beam([n*4.2,6.7,-15.5],[n*4.2,9,-15.5],.045,Di,"body"),t.beam([n*4.2,9,-15.5],[n*4.2,8.8,19.5],.025,14659186,"lamp")}t.box([5.1,1.9,3.25],[0,7.6,-16.45]),t.box([4.5,.98,.06],[0,7.8,-18.11],2110524,"dark"),t.box([5.4,.18,3.6],[0,8.65,-16.45]),t.box([8.8,.18,6],[0,9.12,16.7]),t.beam([0,8.7,-15.9],[0,10.25,-15.9],.06,Di,"body"),t.nav(5.3,6.25,-16.8,22)}else if(i==="ferry"){t.hull(30,5.5,.97,.7,Di);for(const n of[-1,1]){t.box([.15,.38,23.2],[n*2.6,1.18,.7],go),t.box([.1,.23,22.5],[n*2.53,3.37,.7],go),t.box([.05,.08,20],[n*2.36,3.24,.7],10978124,"window");for(let s=-9.8;s<12;s+=4.2)t.box([.09,2.15,.09],[n*2.44,2.2,s])}t.box([5.11,.19,22.5],[0,3.45,.7]),t.box([3.5,1.55,2.67],[0,1.94,-10.49]),t.box([3.1,.99,.06],[0,2.08,-11.85],2373692,"dark"),t.box([3.85,.14,3],[0,2.84,-10.49],go);for(const n of[-5,1,7])t.person(n%2?-.8:.8,1.04,n);t.beam([0,1.3,-13.5],[0,4.1,-13.5],.035,ko),t.box([.04,.6,1.3],[0,3.7,-12.9],e%3===1?13872453:go),t.nav(2.28,3.32,-9.1,12.6)}else if(i==="electric"){for(const n of[-1,1])t.hull(24,2.1,1.03,.63,Di,n*2.36);t.box([6.8,.3,20.4],[0,1.18,0]),t.box([5.8,1.8,17.8],[0,2.58,0],2176312,"dark"),t.box([6.39,.24,18.82],[0,3.69,0]),t.box([5.8,.05,17.6],[0,3.84,0],1584185,"dark");for(const n of[-1,1]){for(let s=-7;s<=7;s+=2)t.box([.06,1.48,1.72],[n*2.93,2.55,s],6523790,"window");t.box([.12,.09,18.5],[n*3.18,3.65,0],7980767,"lamp")}t.nav(3.04,3.6,-7.2,9)}else if(i==="longtail"){t.hull(12.4,2.35,.78,.38,cl,0,!0),t.box([2.17,.18,6.2],[0,2.08,.15],e%3===1?10301993:1207401);for(const n of[-1,1])for(const s of[-2.6,2.9])t.box([.055,1.4,.055],[n*1.02,1.42,s],11187118);for(const n of[-1.2,1.9])t.person(-.35,.2,n,11844012);t.person(-.16,.4,4.21,2509135),t.box([.74,.57,.9],[0,1.21,5.4],1845544,"dark"),t.beam([0,1.07,5.4],[0,-.15,8.9],.045,8754582),t.beam([0,.75,-5.5],[0,1.78,-6.22],.085,cl,"body"),t.box([.25,.48,.16],[0,1.36,-6.13],13069865),t.nav(1.08,2.06,-2.66,4.7)}else if(i==="patrol"){const n=e%2?2700591:2108472;t.hull(13.8,3.8,.92,.55,n),t.box([2.9,.26,5.8],[0,1.09,.3],n),t.box([2.66,1.48,3.85],[0,1.88,.9],n),t.box([2.32,1.05,.08],[0,2,-1.12],1386035,"dark",[.4,0,0]);for(const s of[-1,1])t.box([.045,.91,2.8],[s*1.345,2.08,.65],1386035,"dark"),t.box([.84,1,.78],[s*.91,.94,6.63],n);t.box([3.04,.16,4.7],[0,2.72,.65],n),t.box([2.1,.13,.39],[0,2.87,.65],1120280,"dark"),t.beam([.63,2.8,1.95],[.63,4.1,1.95],.022,n),t.nav(1.4,2.75,-1.15,2.2)}else{t.hull(6.5,1.55,.4,.27,e%2?5255713:cl,0,!0);for(const n of[-1.86,.3,2.08])t.box([1.07,.08,.3],[0,.36,n],12096096);t.person(0,-.02,.32),t.box([.48,.38,.55],[.2,.27,1.45],Di),t.beam([.12,.7,-.02],[1.4,1.82,-2.5],.023,5520421),t.box([.12,.18,.12],[0,.96,2.55],16762240,"lamp")}return t.finish(`${i}-distant`)}function fc(i,e,t=i?.userData?.mobile??!1){if(!i?.isLOD||i.levels.length!==2||typeof i.userData.setDetail!="function")return;const s=e<(t?160:220)*(i.userData.detail==="near"?1.06:.94);i.levels[0].object.visible=s,i.levels[1].object.visible=!s,i.userData.detail=s?"near":"far"}function S_(i,e=0,t=!1){const n=Object.hasOwn(Oo,i)?i:"longtail",s=(Math.trunc(e)%ll[n]+ll[n])%ll[n],r=`${n}:${s}`;al.has(r)||al.set(r,{near:ed(n,s),far:y_(n,s)});const o=al.get(r),a=Bu(o.near),l=Bu(o.far),c=new jp;return c.name=`${n}-traffic`,c.autoUpdate=!1,c.addLevel(a,0),c.addLevel(l,t?160:220),c.userData={...a.userData,kind:n,spec:Oo[n],mobile:t,detail:"near"},c.userData.setDetail=h=>fc(c,h),fc(c,0),c}function b_(i,e){const n=[];for(const c of e){let h=c.tug;for(const u of c.barges)n.push([h,u]),h=u}const s=new Float32Array(n.length*10*2*3),r=new it;r.setAttribute("position",new _t(s,3).setUsage(ji));const o=new em(r,new Sf({color:8945510}));o.name="articulated-convoy-towlines",o.frustumCulled=!1,i.add(o);const a=new P,l=new P;return{update(){let c=0;for(const[h,u]of n){h.mesh.updateMatrixWorld(),u.mesh.updateMatrixWorld(),h.mesh.localToWorld(a.fromArray(h.mesh.userData.towPoints.stern)),u.mesh.localToWorld(l.fromArray(u.mesh.userData.towPoints.bow));for(let f=0;f<10;f++)for(const d of[f/10,(f+1)/10])s[c++]=An.lerp(a.x,l.x,d),s[c++]=Math.max(.35,An.lerp(a.y,l.y,d)-Math.sin(d*Math.PI)*.65),s[c++]=An.lerp(a.z,l.z,d)}r.attributes.position.needsUpdate=!0}}}function w_(i,e){const t=e.filter(s=>s.mesh.isLOD).map(s=>({near:s.mesh.levels[0].object,far:s.mesh.levels[1].object,nearVisible:!1,farVisible:!1})),n=i.onBeforeRender;i.onBeforeRender=function(...s){for(const r of t)r.nearVisible=r.near.visible,r.farVisible=r.far.visible,r.near.visible=!1,r.far.visible=!0;try{return n.apply(this,s)}finally{for(const r of t)r.near.visible=r.nearVisible,r.far.visible=r.farVisible}}}class E_{constructor({pause:e,horn:t,recover:n}){this.keys=new Set,this.touch={steer:0,gas:!1,brake:!1,boost:!1},this.enabled=!1,this.previousPad={},window.addEventListener("keydown",s=>{["INPUT","SELECT","BUTTON"].includes(s.target.tagName)&&s.code==="Space"||(["ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Space"].includes(s.code)&&s.preventDefault(),this.keys.add(s.code),s.repeat||(s.code==="Escape"&&e(),s.code==="KeyH"&&this.enabled&&t(),s.code==="KeyR"&&this.enabled&&n()))}),window.addEventListener("keyup",s=>this.keys.delete(s.code)),window.addEventListener("blur",()=>{this.clear(),e(!0)}),document.addEventListener("visibilitychange",()=>{document.hidden&&(this.clear(),e(!0))}),this.pause=e,this.horn=t,this.recover=n}clear(){this.keys.clear(),this.touch={steer:0,gas:!1,brake:!1,boost:!1},document.querySelectorAll(".pressed").forEach(e=>e.classList.remove("pressed")),document.querySelector("#steer-pad")?.style.setProperty("--thumb","0px")}bind(){for(const r of document.querySelectorAll("[data-control]")){const o=r.dataset.control;r.addEventListener("pointerdown",l=>{l.preventDefault(),r.setPointerCapture(l.pointerId),this.touch[o]=!0,r.classList.add("pressed")});const a=()=>{this.touch[o]=!1,r.classList.remove("pressed")};r.addEventListener("pointerup",a),r.addEventListener("pointercancel",a),r.addEventListener("lostpointercapture",a)}const e=document.querySelector("#steer-pad");let t=null;const n=r=>{const o=e.getBoundingClientRect();this.touch.steer=Math.max(-1,Math.min(1,(r.clientX-o.left-o.width/2)/(o.width*.36))),e.style.setProperty("--thumb",`${this.touch.steer*30}px`)};e.addEventListener("pointerdown",r=>{t=r.pointerId,e.setPointerCapture(t),n(r)}),e.addEventListener("pointermove",r=>{t===r.pointerId&&n(r)});const s=()=>{t=null,this.touch.steer=0,e.style.setProperty("--thumb","0px")};e.addEventListener("pointerup",s),e.addEventListener("pointercancel",s),e.addEventListener("lostpointercapture",s)}read(){const e=this.keys,t=this.touch,n=navigator.getGamepads?.()?.find(l=>l?.connected);let s=(e.has("KeyD")||e.has("ArrowRight")?1:0)-(e.has("KeyA")||e.has("ArrowLeft")?1:0);t.steer&&(s=t.steer);let r=e.has("KeyW")||e.has("ArrowUp")||t.gas||t.boost,o=e.has("KeyS")||e.has("ArrowDown")||t.brake,a=e.has("ShiftLeft")||e.has("ShiftRight")||t.boost;if(n){Math.abs(n.axes[0])>.12&&(s=n.axes[0]),r=r||n.buttons[7]?.value>.1,o=o||n.buttons[6]?.value>.1,a=a||n.buttons[0]?.pressed;for(const[l,c]of[[9,this.pause],[3,this.horn],[2,this.recover]])n.buttons[l]?.pressed&&!this.previousPad[l]&&c();this.previousPad=Object.fromEntries(n.buttons.map((l,c)=>[c,l.pressed]))}return this.enabled?{steer:s,gas:r,brake:o,boost:a}:{}}}class T_{constructor(e,t){this.count=t?650:1400,this.index=0,this.life=new Float32Array(this.count),this.velocity=new Float32Array(this.count*3),this.positions=new Float32Array(this.count*3),this.sizes=new Float32Array(this.count),this.alphas=new Float32Array(this.count),this.baseSize=new Float32Array(this.count);const n=new it;n.setAttribute("position",new _t(this.positions,3)),n.setAttribute("size",new _t(this.sizes,1)),n.setAttribute("alpha",new _t(this.alphas,1)),this.geometry=n;const s=new vt({transparent:!0,depthWrite:!1,blending:Hi,uniforms:{color:{value:new Oe("#9db9b7")}},vertexShader:"attribute float size;attribute float alpha;varying float a;void main(){a=alpha;vec4 p=modelViewMatrix*vec4(position,1.);gl_PointSize=clamp(size*420./max(1.,-p.z),1.,24.);gl_Position=projectionMatrix*p;}",fragmentShader:"uniform vec3 color;varying float a;void main(){float d=length(gl_PointCoord-.5)*2.;if(d>1.)discard;float foam=(1.-smoothstep(.15,1.,d));gl_FragColor=vec4(color,a*foam);}",toneMapped:!1});this.mesh=new Dc(n,s),this.mesh.frustumCulled=!1,this.mesh.layers.set(1),e.add(this.mesh)}emit(e,t,n,s,r=1){const o=this.index++%this.count,a=o*3,l=Math.random()>.5?1:-1,c=Math.cos(n),h=-Math.sin(n);this.positions[a]=e+c*l*(1+Math.random()),this.positions[a+1]=.18+Math.random()*.25,this.positions[a+2]=t+h*l*(1+Math.random()),this.velocity[a]=c*l*(1.5+Math.random()*2)+Math.sin(n)*s*.05,this.velocity[a+1]=Math.random()*(s>25?2:.3),this.velocity[a+2]=h*l*(1.5+Math.random()*2)+Math.cos(n)*s*.05,this.life[o]=1.8+Math.random(),this.baseSize[o]=r*.58}update(e){for(let t=0;t<this.count;t++){if(this.life[t]<=0){this.alphas[t]=0;continue}this.life[t]-=e;const n=t*3;this.positions[n]+=this.velocity[n]*e,this.positions[n+2]+=this.velocity[n+2]*e,this.positions[n+1]=Math.max(.14,this.positions[n+1]+this.velocity[n+1]*e),this.velocity[n+1]-=e*3,this.sizes[t]=this.baseSize[t]*(3.3-this.life[t])*.8,this.alphas[t]=Math.min(.18,this.life[t]*.1)}for(const t of Object.values(this.geometry.attributes))t.needsUpdate=!0}clear(){this.life.fill(0),this.alphas.fill(0)}}class A_{constructor(e,t=48){this.trails=new Map,this.max=t*40*18,this.positions=new Float32Array(this.max*3),this.uv=new Float32Array(this.max*2),this.alpha=new Float32Array(this.max);const n=this.geometry=new it;n.setAttribute("position",new _t(this.positions,3)),n.setAttribute("uv",new _t(this.uv,2)),n.setAttribute("aFade",new _t(this.alpha,1)),n.setDrawRange(0,0);const s=this.material=new vt({transparent:!0,depthWrite:!1,side:Ot,uniforms:{time:{value:0}},vertexShader:"attribute float aFade;varying float fade;varying vec2 vUv;varying vec2 riverPoint;void main(){fade=aFade;vUv=uv;riverPoint=position.xz;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:`varying float fade;varying vec2 vUv;varying vec2 riverPoint;uniform float time;
 float hash(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}
 float noise(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);return mix(mix(hash(i),hash(i+vec2(1,0)),f.x),mix(hash(i+vec2(0,1)),hash(i+vec2(1,1)),f.x),f.y);}
 // Interpolated UVs and GPU sine approximations can stray just outside [0,1].
 // A negative fractional-power base creates NaNs that bloom spreads over the view.
 void main(){float edge=pow(max(0.,sin(clamp(vUv.x,0.,1.)*3.14159)),.75);vec2 p=riverPoint*2.4+vec2(time*.12,-time*.08);float n=noise(p)*.65+noise(p*3.1)*.35;
 float foam=smoothstep(.24,.70,n)*(.6+.4*noise(p*.4));gl_FragColor=vec4(vec3(.33,.41,.40),foam*edge*fade);
 #include <tonemapping_fragment>
 #include <colorspace_fragment>
 }`});this.mesh=new lt(n,s),this.mesh.frustumCulled=!1,this.mesh.layers.set(1),e.add(this.mesh),this.clock=0,this.geometryAge=0;for(const r of Object.values(n.attributes))r.setUsage(ji)}clear(){this.trails.clear(),this.geometry.setDrawRange(0,0)}update(e,t){if(this.material.uniforms.time.value+=e,this.geometryAge+=e,this.geometryAge<1/30)return;e=this.geometryAge,this.geometryAge=0,this.clock+=e;const n=this.clock>.07;n&&(this.clock=0);let s=0;const r=(o,a,l,c,h)=>{if(s>=this.max)return;const u=s*3;this.positions[u]=o,this.positions[u+1]=.15+Math.sin(o*.47+a*.28+this.material.uniforms.time.value*1.1)*.095+Math.sin(a*.73-o*.22-this.material.uniforms.time.value*1.42)*.038,this.positions[u+2]=a,this.uv[s*2]=l,this.uv[s*2+1]=c,this.alpha[s]=h,s++};for(const o of this.trails.values()){for(const a of o)a.age+=e;for(;o.length&&o.at(-1).age>2.4;)o.pop()}for(const o of t){let a=this.trails.get(o);a||(a=[],this.trails.set(o,a));const l=Math.hypot(o.vx,o.vz);n&&l>2&&(a.unshift({x:o.x+Math.sin(o.heading)*(o.length||12)*.45,z:o.z+Math.cos(o.heading)*(o.length||12)*.45,heading:o.heading,age:0,width:o.width||2.35,speed:l}),a.length>39&&a.pop());for(let c=1;c<a.length;c++){const h=a[c-1],u=a[c];for(const f of[-1,0,1]){const d=p=>{const M=p.width*.35+p.age*(1.8+p.speed*.035),_=.35+p.age*(.8+p.width*.12),v=Math.cos(p.heading)*(f||1),E=-Math.sin(p.heading)*(f||1);if(f===0){const T=p.width*.18+p.age*.38;return[{x:p.x-v*T,z:p.z-E*T},{x:p.x+v*T,z:p.z+E*T}]}return[{x:p.x+v*M,z:p.z+E*M},{x:p.x+v*(M+_),z:p.z+E*(M+_)}]},m=d(h),x=d(u),g=p=>Math.max(0,1-p.age/2.4)*Math.min(1,p.age*12)*(f===0?.6:.74);for(const[p,M,_,v]of[[m[0],0,c-1,g(h)],[m[1],1,c-1,g(h)],[x[0],0,c,g(u)],[m[1],1,c-1,g(h)],[x[1],1,c,g(u)],[x[0],0,c,g(u)]])r(p.x,p.z,M,_*.07,v)}}}this.geometry.setDrawRange(0,s);for(const o of Object.values(this.geometry.attributes))o.clearUpdateRanges(),o.addUpdateRange(0,s*o.itemSize),o.needsUpdate=!0}}function ld(i,e,t=0){const n=i.createGain(),s=i.createStereoPanner();s.pan.value=Math.max(-1,Math.min(1,t)),n.connect(s).connect(e);const r=[],o=[n,s];let a;const l=new Promise(f=>{a=f});let c=0,h=!1;function u(){h||(h=!0,o.forEach(f=>f.disconnect()),a())}return{output:n,nodes:o,sources:r,done:l,add(f){r.push(f),c++,f.onended=()=>{f.disconnect(),--c===0&&u()}},stop(){for(const f of r)try{f.stop()}catch{}u()}}}function ku(i,e,t,n,s=.025){const r=i.createGain();return r.gain.setValueAtTime(0,e),r.gain.linearRampToValueAtTime(n,e+s),r.gain.setTargetAtTime(1e-4,e+s,(t-s)/5),r.gain.setValueAtTime(0,e+t),r}function Hu(i,e,t,{pan:n=0,distance:s=40}={}){const r={patrol:260,cruise:138,tug:122,barge:122,ferry:224,electric:256,longtail:328,fishing:380},o=r[t]||r.ferry,a=ld(i,e,n),l=i.currentTime;a.output.gain.value=Math.max(1.9,2.05/(1+Math.max(0,s-35)/900));const c=i.createBiquadFilter();c.type="lowpass",c.frequency.value=2900,c.Q.value=.5,c.connect(a.output),a.nodes.push(c);for(const[h,u]of[[0,.19],[.29,.49]])for(const[f,d,m]of[[1,.28,"sawtooth"],[1.255,.24,"sawtooth"],[2,.2,"triangle"],[3,.12,"sine"]]){const x=i.createOscillator(),g=i.createGain(),p=l+h;g.gain.setValueAtTime(0,p),g.gain.linearRampToValueAtTime(d,p+.018),g.gain.linearRampToValueAtTime(d*.92,p+u*.8),g.gain.exponentialRampToValueAtTime(1e-4,p+u),x.type=m,x.frequency.setValueAtTime(o*f*.985,l+h),x.frequency.exponentialRampToValueAtTime(o*f,l+h+.035),x.connect(g).connect(c),a.nodes.push(g),a.add(x),x.start(l+h),x.stop(l+h+u+.02)}return a}function C_(i){const e=i.createBuffer(1,Math.ceil(i.sampleRate*1.3),i.sampleRate),t=e.getChannelData(0);for(let n=0;n<t.length;n++)t[n]=Math.random()*2-1;return e}function R_(i,e,t,{fatal:n=!0}={}){const s=ld(i,e),r=i.currentTime;s.output.gain.value=n?.9:.55;for(const[l,c,h,u,f]of[[0,.2,1050,.55,"bandpass"],[.025,.48,200,.8,"lowpass"],[.07,1.05,1600,.35,"lowpass"]]){const d=i.createBufferSource(),m=i.createBiquadFilter(),x=ku(i,r+l,c,u,.007);d.buffer=t,m.type=f,m.frequency.setValueAtTime(h,r+l),m.frequency.exponentialRampToValueAtTime(Math.max(80,h*.23),r+l+c),m.Q.value=.7,d.connect(m).connect(x).connect(s.output),s.nodes.push(m,x),s.add(d),d.start(r+l),d.stop(r+l+c+.02)}const o=i.createOscillator(),a=ku(i,r,.55,.55,.008);return o.type="sine",o.frequency.setValueAtTime(112,r),o.frequency.exponentialRampToValueAtTime(34,r+.5),o.connect(a).connect(s.output),s.nodes.push(a),s.add(o),o.start(r),o.stop(r+.58),s}class P_{constructor(){this.effects=new Set,this.warningEffects=new Set,this.generation=0,this.muted=!1,this.musicEnabled=!0,this.active=!1,this.music=new Audio("/longtail/audio/exit-the-premises.mp3"),this.music.loop=!0,this.music.preload="none",this.music.volume=.32,this.lastHorn=-10}async start(){this.stopEffects(),this.active=!0;const e=++this.generation;try{if(!this.ctx){const t=window.AudioContext||window.webkitAudioContext;this.ctx=new t;const n=this.ctx;this.master=n.createGain(),this.master.gain.value=.5,this.master.connect(n.destination),this.ambience=n.createGain(),this.ambience.connect(this.master),this.musicSource=n.createMediaElementSource(this.music),this.musicGain=n.createGain(),this.musicGain.gain.value=.64,this.music.volume=1,this.musicSource.connect(this.musicGain).connect(this.ambience),this.engine=n.createGain(),this.engine.gain.value=0;const s=n.createBiquadFilter();s.type="lowpass",s.frequency.value=1e3,this.engine.connect(s).connect(this.ambience),this.oscs=[1,2,3].map((h,u)=>{const f=n.createOscillator(),d=n.createGain();return f.type=u===0?"sawtooth":"triangle",f.frequency.value=32*h,d.gain.value=[.12,.045,.025][u],f.connect(d).connect(this.engine),f.start(),f});const r=n.createBuffer(1,n.sampleRate*2,n.sampleRate),o=r.getChannelData(0);let a=0;for(let h=0;h<o.length;h++)a=(a+Math.random()*.12-.06)*.97,o[h]=a;this.noiseBuffer=r,this.impactBuffer=C_(n);const l=n.createBufferSource();l.buffer=r,l.loop=!0,this.waterGain=n.createGain(),this.waterGain.gain.value=0;const c=n.createBiquadFilter();c.type="highpass",c.frequency.value=280,l.connect(c).connect(this.waterGain).connect(this.ambience),l.start()}await this.ctx.resume(),e===this.generation&&this.active&&this.sync()}catch{this.active=!1}}sync(){this.master&&(this.master.gain.cancelScheduledValues(this.ctx.currentTime),this.master.gain.setTargetAtTime(this.muted||!this.active?0:.5,this.ctx.currentTime,.06)),this.active&&!this.muted&&this.musicEnabled?this.music.play().catch(()=>{}):this.music.pause()}pause(e=0){if(this.playerHornEffect?.stop(),this.stopEffects(e>0?this.warningEffects:this.effects),this.generation++,this.active=!1,this.music.pause(),this.ctx){const t=this.ctx.currentTime;this.engine.gain.setTargetAtTime(0,t,.02),this.waterGain.gain.setTargetAtTime(0,t,.02),this.master.gain.cancelScheduledValues(t),this.master.gain.setTargetAtTime(0,t+e,.04)}}stopEffects(e=this.effects){for(const t of e)t.stop();e.clear()}track(e,t=!1){this.effects.add(e),t&&this.warningEffects.add(e),e.done.then(()=>{this.effects.delete(e),this.warningEffects.delete(e)})}warningHorn(e,t){!this.ctx||!this.active||this.muted||(this.stopEffects(this.warningEffects),this.track(Hu(this.ctx,this.master,e,t),!0))}impact(e=!0,t=1){if(!this.ctx||!this.active||this.muted)return;const n=R_(this.ctx,this.master,this.impactBuffer,{fatal:e});n.output.gain.value*=Math.min(1,Math.max(.1,t)),this.track(n)}mute(){return this.muted=!this.muted,this.sync(),this.muted}musicToggle(){return this.musicEnabled=!this.musicEnabled,this.sync(),this.musicEnabled}update(e,t){if(!this.ctx||!this.active)return;const n=this.ctx.currentTime,s=32+Math.abs(e)*2.6+(t?16:0);this.oscs.forEach((r,o)=>r.frequency.setTargetAtTime(s*(o+1),n,.09)),this.engine.gain.setTargetAtTime(.16+Math.min(Math.abs(e)/45,1)*.27,n,.08),this.waterGain.gain.setTargetAtTime(.06+Math.min(Math.abs(e),53)*.009,n,.1)}tone(e,t=.15,n=.14,s="sine",r=0,o=e){if(!this.ctx||this.muted||!this.active)return;const a=this.ctx,l=a.currentTime+r,c=a.createOscillator(),h=a.createGain();c.type=s,c.frequency.setValueAtTime(e,l),c.frequency.exponentialRampToValueAtTime(Math.max(20,o),l+t),h.gain.setValueAtTime(0,l),h.gain.linearRampToValueAtTime(n,l+.014),h.gain.exponentialRampToValueAtTime(1e-4,l+t),c.connect(h).connect(this.master),c.start(l),c.stop(l+t+.04),c.onended=()=>{c.disconnect(),h.disconnect()}}horn(){if(!this.ctx||!this.active||this.muted||this.ctx.currentTime-this.lastHorn<.28)return;this.lastHorn=this.ctx.currentTime,this.playerHornEffect?.stop();const e=Hu(this.ctx,this.master,"longtail",{distance:0});return e.output.gain.value*=.75,this.playerHornEffect=e,this.track(e),e}event(e){e==="pickup"?(this.tone(660,.12,.15),this.tone(880,.22,.15,"sine",.12)):e==="delivered"?[523,659,784,1046].forEach((t,n)=>this.tone(t,.3,.16,"triangle",n*.09)):e==="near"?this.tone(900,.14,.08,"triangle",0,1300):e==="crash"?this.impact():this.tone(240,.35,.12,"triangle",0,140)}}function L_(i,e,t=2.5){const n=Math.hypot(i.vx,i.vz);if(n<3)return null;const s={...i,length:12,width:2.5},r=e.x-s.x,o=e.z-s.z,a=e.vx-s.vx,l=e.vz-s.vz,c=Math.hypot(a,l),h=Math.hypot(r,o);if(c<1||r*a+o*l>=-h)return null;const u=Math.min(1.4,Math.max(.65,n*.025));if(h>c*t+(s.length+e.length)/2+u)return null;const f=p=>Is(s,{...e,x:e.x+a*p,z:e.z+l*p}).gap;if(f(0)<=0)return null;let d=0,m=t;for(let p=0;p<18;p++){const M=d+(m-d)/3,_=m-(m-d)/3;f(M)<f(_)?m=_:d=M}let x=(d+m)/2;f(t)<f(x)&&(x=t);const g=f(x);if(g>u)return null;d=0,m=x;for(let p=0;p<14;p++){const M=(d+m)/2;f(M)>u?d=M:m=M}return{time:m,clearance:g,distance:h}}function D_(i,e){const t=L_(i,e);if(!t)return null;const n=-Math.sin(e.heading),s=-Math.cos(e.heading),r=i.x-e.x,o=i.z-e.z,a=r*n+o*s,l=r*s-o*n;if(a<-e.length*.25&&Math.abs(l)<-a*.65&&t.time>.85)return null;const h=Math.max(0,(e.length-e.width)/2),u=Math.max(-h,Math.min(h,a)),f=e.x+n*u-i.x,d=e.z+s*u-i.z,m=(-Math.sin(i.heading)*f-Math.cos(i.heading)*d)/Math.max(1,Math.hypot(f,d));return m<.87&&t.time>.85?null:{...t,aim:m,emergency:t.time<.85}}class I_{constructor(){this.reset()}reset(){this.clock=0,this.scan=0,this.nextHorn=0,this.cooldowns=new Map,this.primary=null,this.pending=null,this.pendingSince=0}update(e,t,n,s=t.heading){if(this.clock+=e,this.scan-=e,this.scan>0)return null;this.scan=.08;const r=new Map;for(const f of n){if(f.active===!1)continue;const d=f.convoy?.tug||f,m=D_(t,f);m&&(!r.has(d)||m.time<r.get(d).time)&&r.set(d,{...m,source:d})}let o=[...r.values()].sort((f,d)=>f.time-d.time)[0];const a=r.get(this.primary);if(a&&o?.source!==a.source&&!(o.time<1.2&&o.time+.6<a.time)&&(o=a),this.primary=o?.source||null,this.pending!==this.primary&&(this.pending=this.primary,this.pendingSince=this.clock),!o||this.clock<this.nextHorn||!o.emergency&&this.clock-this.pendingSince<.14||this.clock-(this.cooldowns.get(o.source)??-1/0)<(o.time<1.5?1.8:3.2))return null;const c=o.source.x-t.x,h=o.source.z-t.z,u=Math.hypot(c,h);return this.cooldowns.set(o.source,this.clock),this.nextHorn=this.clock+1.15,{...o,distance:u,pan:Math.max(-.85,Math.min(.85,(c*Math.cos(s)-h*Math.sin(s))/Math.max(u,1)))}}}const U_=850,cd={patrol:"river patrol",cruise:"dinner cruise",ferry:"express ferry",electric:"electric ferry",longtail:"long-tail boat",fishing:"fishing boat",tug:"tugboat",barge:"cargo barge"};class N_{constructor(e){this.root=e,this.timer=null,this.overlay=document.createElement("div"),this.overlay.className="damage-overlay",this.overlay.hidden=!0,this.overlay.setAttribute("aria-hidden","true"),this.caption=document.createElement("div"),this.caption.className="crash-caption",this.caption.hidden=!0,this.caption.setAttribute("role","alert");const t=document.createElement("strong");t.textContent="CRASHED",this.detail=document.createElement("span"),this.caption.append(t,this.detail),e.append(this.overlay,this.caption)}reset(){clearTimeout(this.timer),this.timer=null,this.overlay.hidden=!0,this.caption.hidden=!0,this.root.classList.remove("crashed")}impact({fatal:e=!1,kind:t,intensity:n=1,onComplete:s}={}){this.reset(),this.overlay.hidden=!1,this.overlay.style.setProperty("--impact-opacity",String(Math.min(1,Math.max(.1,n)))),this.overlay.className=`damage-overlay ${e?"fatal":"minor"}`,this.overlay.getAnimations().forEach(r=>{r.cancel(),r.play()}),e?(this.root.classList.add("crashed"),this.detail.textContent=`Collision: ${cd[t]||"boat"}`,this.caption.hidden=!1,this.timer=setTimeout(()=>{this.caption.hidden=!0,this.timer=null,s?.()},U_)):this.timer=setTimeout(()=>{this.overlay.hidden=!0,this.timer=null},900)}}function F_(i){return null}class O_{constructor(e=1,t=!1){this.maximum=Math.min(e,t?1.75:1.5),this.minimum=Math.min(this.maximum,t?1.25:1),this.ratio=this.maximum,this.warmup=4,this.elapsed=0,this.frames=0,this.fastTime=0}update(e){if(!Number.isFinite(e)||e<=0||e>.12)return this.elapsed=0,this.frames=0,null;if(this.warmup>0)return this.warmup-=e,null;if(this.elapsed+=e,this.frames++,this.elapsed<3)return null;const t=this.frames/this.elapsed,n=this.ratio;return t<50?(this.ratio=Ut(this.ratio-.15,this.minimum,this.maximum),this.fastTime=0):t>58?(this.fastTime+=this.elapsed,this.fastTime>15&&(this.ratio=Math.min(this.maximum,this.ratio+.05),this.fastTime=0)):this.fastTime=0,this.elapsed=0,this.frames=0,Math.abs(this.ratio-n)>.001?this.ratio:null}}function z_(i,e,{ratio:t=null,size:n=null,smaa:s,fxaa:r,frameMeter:o,frameDt:a=0}={}){t!==null&&(i.setPixelRatio(t),e.setPixelRatio(t),s&&(t<=1.1?(s.enabled=!1,r.enabled=!0):t>=1.25&&(s.enabled=!0,r.enabled=!1))),n&&(i.setSize(n.width,n.height),e.setSize(n.width,n.height)),o?.begin(),e.render(),o?.end(a)}const ve=i=>document.querySelector(i),Ln=matchMedia("(pointer:coarse)").matches||innerWidth<700,B_='<svg viewBox="0 0 40 40" fill="none" aria-hidden="true"><path d="M4 23h32l-7 9H13L4 23Z" stroke="currentColor" stroke-width="1.7"/><path d="m12 20 4-10h14l5 10M20 10v12M6 37q5-4 10 0t10 0t10 0" stroke="currentColor" stroke-width="1.7"/></svg>',Gu='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><path d="m10 5-5 4H2v6h3l5 4V5ZM14 8q5 4 0 8M17 4q9 8 0 16"/></svg>',k_='<svg viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M8 5v14M16 5v14"/></svg>',Vu=`<div class="brand">${B_}<div>BANGKOK<strong>LONGTAIL</strong></div></div>`,Wu="<span><b>W A S D</b> Pilot</span><span><b>SHIFT</b> Boost</span><span><b>H</b> Horn</span><span><b>R</b> Recover</span>";ve("#app").innerHTML=`
<canvas id="scene" aria-label="Bangkok long-tail boat game"></canvas><div id="vignette"></div>
<section id="menu" class="screen">
 <header>${Vu}</header>
 <button class="round sound-menu sound-btn" aria-label="Mute sound">${Gu}</button>
 <div class="menu-body"><div class="menu-content">
  <h1>LONGTAIL<br><em>AFTER DARK</em></h1>
  <p class="lede">3 minutes. Pick up passengers. Beat your best.</p>
  <button id="start" class="primary" disabled>PLAY</button>
  <div id="loading-note" role="status">Loading game…</div>
  <div class="record-preview"><div><div class="micro">BEST SCORE</div><div class="value" id="menu-best">฿ 0</div></div><p id="menu-record-note" hidden></p></div>
 </div></div>
 <footer class="menu-foot"><div class="keys">${Wu}</div></footer>
</section>
<div id="hud" hidden><div class="hud-brand">${Vu}</div><div class="timer"><div class="micro">NIGHT SHIFT</div><div class="timer-value">03:00</div></div><div class="hud-controls"><button class="round sound-btn" aria-label="Mute sound">${Gu}</button><button id="horn" class="round" aria-label="Sound boat horn">♩</button><button id="recover" class="round" aria-label="Recover boat">↻</button><button id="pause" class="round" aria-label="Pause game">${k_}</button></div><div class="fare-panel"><div class="eyebrow" id="fare-label">FIND YOUR NEXT FARE</div><h2 id="fare-title">Choose any pier</h2><p id="fare-hint">Stop in a golden ring to pick up passengers.</p><div class="fare-row"><span id="fare-detail">Yellow dots on your map</span><strong id="fare-time"></strong></div><div class="fare-progress" hidden><i></i></div></div><div class="score-panel"><div class="micro">TONIGHT’S TAKINGS</div><div class="total" id="earnings">฿ 0</div><div class="fares" id="deliveries">0 FARES</div><div class="best">BEST <b id="hud-best">฿ 0</b></div></div><div id="navigation" hidden><svg viewBox="0 0 48 64" aria-label="Direction to destination"><path d="M24 2 46 30H32v31H16V30H2Z"/></svg><div id="nav-distance"></div></div><div id="stunt" hidden><strong></strong><small></small></div><div id="dock-status" hidden><span>HOLD STEADY</span><progress value="0" max=".65"></progress></div><div id="minimap-shell"><canvas id="minimap" width="352" height="348" aria-label="River map with passenger piers"></canvas><div id="map-caption"><span>● PASSENGERS</span><b>N ↑</b></div></div><div id="speed"><strong>0</strong><span class="unit">KM/H</span><div class="gear">LONGTAIL EXPRESS</div></div><div id="toast" role="status"></div><div id="hud-keys" class="keys">${Wu}</div><div class="osm"><a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener">© OpenStreetMap contributors</a></div><div class="touch"><div class="touch-controls"><div id="steer-pad" aria-label="Slide left or right to steer"><span>◁</span><i></i><span>▷</span></div><div class="touch-actions"><button data-control="boost">BOOST</button><button data-control="brake">BRAKE / R</button><button class="gas" data-control="gas">THROTTLE</button></div></div></div></div>
<div id="countdown" class="countdown" hidden></div>
<section id="pause-screen" class="screen modal" hidden><div class="dialog"><h2>Paused</h2><div class="setting-row"><span>Music</span><button id="music-toggle" class="toggle" aria-pressed="true">ON</button></div><p class="modal-keys">W / ↑ accelerate · S / ↓ brake, then reverse<br>A D / ← → steer · Shift boost<br>H horn · R recover · Esc pause<br>Gamepad: RT / LT · left stick · A boost</p><button id="resume" class="primary">RESUME</button><button id="quit" class="secondary">End run</button></div></section>
<section id="results" class="screen modal" hidden><div class="dialog"><div class="eyebrow" id="result-label">SHIFT COMPLETE</div><h2 id="result-title">Shift complete.</h2><p id="result-reason" hidden></p><div class="result-total" id="result-score">฿ 0</div><div class="result-meta"><div><span class="micro">FARES DELIVERED</span><strong id="result-fares">0</strong></div><div><span class="micro">PERSONAL BEST</span><strong id="result-best">฿ 0</strong></div></div><div class="micro">YOUR BEST NIGHTS</div><ol id="record-list"></ol><button id="again" class="primary">PLAY AGAIN</button><button id="back-menu" class="secondary">Menu</button></div></section>`;let Ho;try{Ho=localStorage}catch{Ho={getItem:()=>null,setItem:()=>{}}}let Zn=[];try{Zn=rc(JSON.parse(Ho.getItem(sc)||"[]"))}catch{}const yr=()=>Zn[0]?.score||0,ti=i=>`฿ ${Math.round(i).toLocaleString()}`,Xu=i=>`${Math.floor(i/60).toString().padStart(2,"0")}:${Math.floor(i%60).toString().padStart(2,"0")}`;function Yc(){ve("#menu-best").textContent=ti(yr()),ve("#hud-best").textContent=ti(yr());const i=ve("#menu-record-note");i.hidden=!Zn.length,i.textContent=Zn.length?`${Zn[0].deliveries} fare${Zn[0].deliveries===1?"":"s"}`:""}Yc();let dc=null,hd,Bi,ud,fd,dd,pc,mc,Eo,To=!1;const gs=new P;let ft="menu",oa=!1,$e,Te,Yt,jn,_i,Mi=[],mn,Yn,Jt,Tt,Ii,ks,aa,_s=0,It=0,Ms=0,Go=0,Ao=0,hl=0,pd=0,md=0,Ui=0,gc=!1,di=0,ki={x:0,z:0,heading:0};const Vo=new P,Wo=new P,zt=new P_,jc=new I_,Sr=new N_(ve("#app")),xn=new E_({pause:i=>la(i),horn:()=>zt.horn(),recover:()=>xd()});xn.bind();function xi(i,e=4){ve("#toast").textContent=i,pd=It+e,ve("#toast").style.opacity="1"}function ul(i,e){ve("#stunt strong").textContent=i,ve("#stunt small").textContent=e,ve("#stunt").hidden=!1,md=It+1.4}for(const i of document.querySelectorAll(".sound-btn"))i.onclick=()=>{const e=zt.mute();document.querySelectorAll(".sound-btn").forEach(t=>{t.setAttribute("aria-label",e?"Unmute sound":"Mute sound"),t.style.opacity=e?".45":"1"})};ve("#music-toggle").onclick=()=>{const i=zt.musicToggle();ve("#music-toggle").textContent=i?"ON":"OFF",ve("#music-toggle").setAttribute("aria-pressed",String(i))};ve("#pause").onclick=()=>la();ve("#resume").onclick=()=>la();ve("#recover").onclick=()=>xd();ve("#horn").onclick=()=>zt.horn();ve("#quit").onclick=()=>xc("quit");ve("#again").onclick=()=>gd();ve("#back-menu").onclick=()=>H_();ve("#start").onclick=()=>gd();function gd(){if(!oa)return;Sr.reset(),jc.reset(),Ui=0,gc=!1,$e.reset(),od(Bi);const i=jn[0];Te.launch(Yt,i),ki={x:Te.x,z:Te.z,heading:Te.heading},di=Te.heading,Wo.set(Te.x+Math.sin(Te.heading)*23,12,Te.z+Math.cos(Te.heading)*23),Vo.set(Te.x-Math.sin(Te.heading)*30,3,Te.z-Math.cos(Te.heading)*30),Tt.position.copy(Wo),Tt.lookAt(Vo),Tt.fov=62,Tt.updateProjectionMatrix(),_i.setMoonLaunchView(Tt),ks.clear(),aa.clear(),ft="countdown",_s=2.5,xn.clear(),xn.enabled=!1,Ao=0,Ms=0;for(const e of["#menu","#results","#pause-screen"])ve(e).hidden=!0;ve("#hud").hidden=!1,ve("#countdown").hidden=!1,ve("#stunt").hidden=!0,ve("#navigation").hidden=!0,ve("#toast").style.opacity="0",zt.start(),Kc()}function H_(){Sr.reset(),jc.reset(),ft="menu",xn.enabled=!1,xn.clear(),zt.pause(),ve("#menu").hidden=!1;for(const i of["#hud","#results","#pause-screen","#countdown"])ve(i).hidden=!0;Yc()}function la(i=!1){oa&&(ft==="playing"||ft==="countdown"?(qu=ft,ft="paused",xn.enabled=!1,xn.clear(),zt.pause(),ve("#pause-screen").hidden=!1):ft==="paused"&&!i&&(ft=qu,xn.enabled=ft==="playing",ve("#pause-screen").hidden=!0,zt.start(),Go=performance.now()))}let qu="playing";function xd(){if(ft!=="playing")return;const i=Yt.nearest(Te.x,Te.z),e=Yt.sample(Ut(i.distance,40,Yt.length-40));let t=Te.heading;const n=i.heading;Math.abs(vr(t,n))<Math.PI/2?t=n:t=n+Math.PI,Te.reset(e.x,e.z,t),ki={x:Te.x,z:Te.z,heading:Te.heading},$e.crash(),$e.remaining=Math.max(0,$e.remaining-3),xi("Back in the channel · −3 seconds"),ks.clear(),aa.clear()}function xc(i="timeout",e){if(gc)return;gc=!0;const t=i==="collision",n=i!=="quit",s=yr();ft=t?"crashed":"results",xn.enabled=!1,xn.clear(),zt.event(t?"crash":"delivered"),zt.pause(t?1.2:0),t&&Sr.impact({fatal:!0,kind:e,onComplete:()=>{ft="results",ve("#results").hidden=!1}}),$e.finished=!0,$e.fare=null,$e.dockHold=0,n&&(Zn=Zv(Ho,$e.earnings,$e.deliveries)),Yc(),ve("#result-label").textContent=t?"BOAT COLLISION":n?$e.earnings>s?"A NEW PERSONAL BEST":"SHIFT COMPLETE":"SHIFT ENDED · UNRANKED",ve("#result-title").textContent=t?"You crashed.":n&&$e.earnings>s?"New best score.":"Shift complete.",ve("#result-reason").hidden=!t,ve("#result-reason").textContent=t?`Collision: ${cd[e]||"boat"}. Run over.`:"",ve("#result-score").textContent=ti($e.earnings),ve("#result-fares").textContent=String($e.deliveries),ve("#result-best").textContent=ti(yr());const r=ve("#record-list");r.replaceChildren();for(const[o,a]of Zn.entries()){const l=document.createElement("li"),c=document.createElement("b");l.textContent=`${o+1}. ${a.deliveries} fares`,c.textContent=ti(a.score),l.append(c),r.append(l)}if(!Zn.length){const o=document.createElement("li");o.textContent="Complete a fare in Night Shift to set a score.",r.append(o)}ve("#results").hidden=t,ve("#pause-screen").hidden=!0,ve("#countdown").hidden=!0,ve("#navigation").hidden=!0,ve("#dock-status").hidden=!0,ve("#stunt").hidden=!0,ve("#toast").style.opacity="0",Kc()}function Kc(){if(!$e)return;ve(".timer-value").textContent=Xu($e.remaining),ve(".timer .micro").textContent="NIGHT SHIFT",ve(".timer").classList.toggle("low",$e.remaining<25),ve("#earnings").textContent=ti($e.earnings),ve("#deliveries").textContent=`${$e.deliveries} FARE${$e.deliveries===1?"":"S"}`,ve("#hud-best").textContent=ti(Math.max(yr(),$e.earnings));const i=$e.fare;if(ve("#navigation").hidden=!i,ve(".fare-progress").hidden=!i,ve("#map-caption span").textContent=i?"● DROP OFF":"● PASSENGERS",i){const e=Math.hypot(i.to.x-Te.x,i.to.z-Te.z);ve("#fare-label").textContent="DROP OFF",ve("#fare-title").textContent=i.to.name,ve("#fare-hint").textContent=e<60?"Easy does it. Stop in the green ring.":i.to.thai,ve("#fare-detail").textContent=`${Math.round(e)} m · ${ti(i.base+$e.tips)}`,ve("#fare-time").textContent=Xu(i.time),ve(".fare-progress i").style.width=`${i.time/i.total*100}%`,Ao=jv(Te,i.to,Ao),ve("#navigation svg").style.transform=`rotate(${Ao}rad)`,ve("#nav-distance").textContent=`${Math.round(e)} m`}else ve("#fare-label").textContent="FIND YOUR NEXT FARE",ve("#fare-title").textContent="Choose any pier",ve("#fare-hint").textContent="Stop in a golden ring to pick up passengers.",ve("#fare-detail").textContent="Yellow dots on your map",ve("#fare-time").textContent="";ve("#speed strong").textContent=String(Math.round(Math.hypot(Te.vx,Te.vz)*3.6)),ve("#speed").classList.toggle("boost",Te.boosting),ve("#speed .gear").textContent=Te.boosting?"FULL SEND":Te.speed<-.3?"REVERSE":"LONGTAIL EXPRESS",ve("#dock-status").hidden=$e.dockHold===0,ve("#dock-status progress").value=$e.dockHold,ve("#dock-status span").textContent=$e.fare?"PASSENGERS DISEMBARKING":"PASSENGERS BOARDING",G_()}function G_(){const i=ve("#minimap"),e=i.getContext("2d"),t=i.width,n=i.height,s=Yt.points,r=Math.min(...s.map(x=>x.x))-200,o=Math.max(...s.map(x=>x.x))+200,a=Math.min(...s.map(x=>x.z))-100,l=Math.max(...s.map(x=>x.z))+100,c=Math.min((t-38)/(o-r),(n-22)/(l-a)),h=(o+r)/2,u=(l+a)/2,f=x=>[t/2+(x.x-h)*c,n/2+(x.z-u)*c];e.clearRect(0,0,t,n),e.strokeStyle="#355a68",e.lineCap="round",e.lineJoin="round",e.lineWidth=13,e.beginPath(),s.forEach((x,g)=>{const[p,M]=f(x);g?e.lineTo(p,M):e.moveTo(p,M)}),e.stroke(),e.strokeStyle="#102f3e",e.lineWidth=8,e.stroke();for(const x of jn){if($e.fare&&$e.fare.to.id!==x.id||!$e.fare&&($e.cooldowns.get(x.id)||0)>$e.clock)continue;const[g,p]=f(x);e.fillStyle=$e.fare?"#9df3cf":"#ffd18b",e.beginPath(),e.arc(g,p,$e.fare?5:3,0,Math.PI*2),e.fill()}const[d,m]=f(Te);e.save(),e.translate(d,m),e.rotate(-Te.heading),e.fillStyle="#fff6dc",e.beginPath(),e.moveTo(0,-7),e.lineTo(5,6),e.lineTo(0,3),e.lineTo(-5,6),e.closePath(),e.fill(),e.restore()}function V_(){Bi=x_(Yt,{...Oo,...td},Ln),Mi=Bi.traffic;for(const i of Mi)i.mesh=i.convoy?l_(i.kind,i.variation):S_(i.kind,i.variation,Ln),i.mesh.scale.setScalar(i.scale),Jt.add(i.mesh);dd=b_(Jt,Bi.convoys),vd(0),fd=new lc(Jt,Bi.patrols.flatMap(p_),{dynamic:!0,replacePhysical:!0}),ud=new lc(Jt,Mi.flatMap(i=>n2(i.kind).map(e=>({...e,parent:i.mesh}))),{dynamic:!0})}function vd(i){ft==="playing"&&u_(Bi,Yt,i,Te,_i.bridgeColliders),v_(Bi,Yt,i);for(const e of Mi){if(e.mesh.visible=e.active!==!1,!e.mesh.visible)continue;e.kind==="patrol"&&d_(e,It);const t=e.towed?.0015:.006,n=e.towed?.025:.08;e.mesh.position.set(e.x,Math.sin(It*1.4+e.distance)*n,e.z),e.mesh.rotation.set((e.kind==="patrol"?.035*Ut(e.actualSpeed/43,0,1):0)+Math.sin(It+e.distance)*t*.6,e.heading,Math.sin(It*.7+e.distance)*t),e.wakeClock+=i,!e.towed&&e.wakeClock>.32&&(e.x-Te.x)**2+(e.z-Te.z)**2<450**2&&(e.wakeClock=0,ks.emit(e.x+Math.sin(e.heading)*e.length/2,e.z+Math.cos(e.heading)*e.length/2,e.heading,e.actualSpeed,e.width*.12))}dd.update()}function W_(i,e){if($e.finished)return;Ui=Math.max(0,Ui-i),ki={x:Te.x,z:Te.z,heading:Te.heading},Te.update(i,e);let t=Yt.constrain(Te,6);for(const s of Mi){if(s.active===!1||Math.hypot(s.x-Te.x,s.z-Te.z)>s.length+18)continue;const r=$e.hitBoat(Te,s);if(r){if(r.type==="crashed"){xc("collision",s.kind);return}if(r.severity>.6&&Ui===0){const o=Ut(.2+r.severity/bn.fatalImpact,.25,.85);zt.impact(!1,o),Sr.impact({intensity:o}),xi("Just a bump. Keep going.",1.6),Ui=.75}continue}if(Math.abs(Te.speed)>12&&s.nearCooldown===0){const o=Is({...Te,length:12,width:2.5},s);if(o.gap>1.3&&o.gap<6){const a=$e.stunt("near");s.nearCooldown=8,a&&(zt.event("near"),ul("CLOSE CALL",`+฿ ${a} TIP · ${$e.combo}× COMBO`))}}}for(const s of _i.bridgeColliders)Math.hypot(s.x-Te.x,s.z-Te.z)<28&&(t=Math.max(t,Vf(Te,s)));if(t>4&&Ui===0){$e.crash(),zt.impact(!1),Sr.impact(),Ui=1;const s=Yt.nearest(Te.x,Te.z).distance;xi(s<2||s>Yt.length-2?"End of this reach. Turn back along the river.":t>15?"Big boat. Bigger right of way.":"Watch the paintwork!",3)}const n=$e.update(i,Te);n&&(zt.event(n.type),n.type==="pickup"&&(xi(`Next stop: ${n.to.name}. Let’s make waves!`,5),ul("ALL ABOARD",n.to.name.toUpperCase())),n.type==="delivered"&&(ul("NICE LANDING",`${ti(n.paid)} BANKED · +12 SECONDS`),xi("Fare delivered. Choose any yellow pier for your next passengers.",6)),n.type==="late"&&xi("Missed the boat! Find your next passengers.",5),n.type==="ended"&&xc()),Math.abs(Te.speed)>2&&ks.emit(Te.x+Math.sin(Te.heading)*6,Te.z+Math.cos(Te.heading)*6,Te.heading,Math.abs(Te.speed),Te.boosting?1:.4)}function Yu(i=0,e=null){z_(Yn,Ii,{ratio:e,size:dc,smaa:mc,fxaa:Eo,frameMeter:hd,frameDt:i}),dc=null}function _d(i){requestAnimationFrame(_d);const e=(i-Go)/1e3,t=Math.min(e||0,.05);if(Go=i,!oa)return;const n=xn.read();if(ft==="paused"||ft==="results"||ft==="crashed"){To||(Yu(),To=!0);return}if(To=!1,It+=t,ft==="countdown"&&(_s-=t,ve("#countdown").textContent=_s>1.5?"3":_s>.7?"2":_s>.1?"1":"GO!",_s<=0&&(ft="playing",xn.enabled=!0,ve("#countdown").hidden=!0,xi("Stop at a golden pier for passengers. Shift to boost.",6))),vd(t),ft==="playing"){Ms+=t;let c=0;for(;ft==="playing"&&Ms>=1/60&&c++<4;)W_(1/60,n),Ms-=1/60;if(ft==="playing"){zt.update(Te.speed,Te.boosting);const h=jc.update(t,Te,Mi,di);h&&zt.warningHorn(h.source.kind,h)}else Ms=0}const s=ft==="playing"?Ut(Ms/(1/60),0,1):1;if(ft!=="menu"){const c=An.lerp(ki.x,Te.x,s),h=An.lerp(ki.z,Te.z,s),u=ki.heading+vr(Te.heading,ki.heading)*s;mn.position.set(c,.1+Math.sin(It*2.7)*.085+Math.sin(It*4.3)*.035,h),mn.rotation.set((Te.boosting?.065:Math.abs(Te.speed)*7e-4)+Math.sin(It*2)*.008,u,Ut(Te.yaw*Te.speed*.003,-.12,.12)),di+=vr(u,di)*(1-Math.exp(-4.5*t));const f=Te.boosting?24:19,d=new P(c+Math.sin(di)*f,7.8+(Te.boosting?1.2:0),h+Math.cos(di)*f);Wo.lerp(d,1-Math.exp(-8*t));const m=new P(c-Math.sin(di)*26,3,h-Math.cos(di)*26);Vo.lerp(m,1-Math.exp(-9*t)),Tt.position.copy(Wo),Tt.lookAt(Vo),Tt.fov=An.lerp(Tt.fov,Te.boosting?69:62,1-Math.exp(-3*t)),Tt.updateProjectionMatrix()}else{const c=_i.landmarks.find(g=>g.kind==="wat-arun"),h=Yt.sample(jn[0].distance-140,-34),u=c.x-h.x,f=c.z-h.z,d=Math.hypot(u,f),m=-f/d,x=u/d;Tt.position.set(h.x+Math.sin(It*.06)*8,11.5,h.z+Math.cos(It*.06)*6),Tt.lookAt(c.x-m*60,24,c.z-x*60),mn.position.set(h.x+u/d*25-m*7,.1+Math.sin(It*2)*.07,h.z+f/d*25-x*7),mn.rotation.set(.008,Math.atan2(-u,-f),Math.sin(It)*.009)}mn.userData.propeller&&(mn.userData.propeller.rotation.z+=t*(20+Math.abs(Te.speed)*6)),mn.userData.motor&&(mn.userData.motor.rotation.y=-(n.steer||0)*.18),ks.update(t);const r=[],o=[];function a(c){c.updateMatrixWorld();for(const h of c.userData.lightSources||[])h.intensity!==0&&(gs.fromArray(h.position),c.userData.kind==="longtail"&&(gs.y=1.4),c.localToWorld(gs),o.push({x:gs.x,y:gs.y,z:gs.z,color:h.color,power:h.intensity??18,boat:!0,distance:h.distance}))}a(mn);for(const c of Mi){if(c.active===!1)continue;const h=Math.hypot(c.x-Tt.position.x,c.z-Tt.position.z);fc(c.mesh,h,Ln),h<350&&a(c.mesh),h<420&&!c.towed&&r.push({actor:c,distance:h})}r.sort((c,h)=>c.distance-h.distance);const l=r.slice(0,Ln?10:16).map(c=>c.actor);if(ft!=="menu"&&l.unshift(Te),ud.update(),fd.update(),aa.update(t,l),_i.update(It,Tt,$e,o),ft==="menu")for(const c of _i.pierVisuals)c.ring.visible=!1,c.beacon.visible=!1;ve("#stunt").hidden=ft!=="playing"||It>md,ve("#toast").style.opacity=ft!=="playing"||It>pd?"0":"1",hl+=t,hl>.09&&(hl=0,ft!=="menu"&&Kc()),Yu(e,pc.update(e))}async function X_(){try{await document.fonts.load('600 32px "Noto Sans Thai"'),await document.fonts.ready;const i=await fetch("/longtail/data/river-course.json");if(!i.ok)throw new Error("Could not load the river map");const t=(await i.json()).points,s=new br(t.map(h=>new P((h[0]-100.502)*108140,0,(13.733-h[1])*111320))).getSpacedPoints(320),r=new mu(t),o=s.map(h=>[h.x/108140+100.502,13.733-h.z/111320,r.nearest(h.x,h.z).width]);Yt=new mu(o),jn=Xv(Yt),$e=new Kv(jn),Te=new Yv(jn[0].x,jn[0].z,jn[0].heading),Jt=new Yp,Jt.background=new Oe(659483),Jt.fog=new Pc(1646635,56e-5),Tt=new Wt(62,innerWidth/innerHeight,.3,8e3),Tt.layers.enable(1),Yn=new Rv({canvas:ve("#scene"),antialias:!1,powerPreference:"high-performance"}),pc=new O_(devicePixelRatio,Ln),Yn.setPixelRatio(pc.ratio),Yn.setSize(innerWidth,innerHeight),Yn.toneMapping=_c,Yn.toneMappingExposure=1.15,Yn.outputColorSpace=xt,Jt.add(new Bm(10796246,4865586,.82));const a=new Ff(16766108,.18);a.position.set(500,220,150),Jt.add(a),_i=G2(Jt,Yt,jn,Ln),mn=ed("longtail",0),Jt.add(mn);const l=new Nf(16763281,3.5,7,2);l.position.set(0,1.65,4.5),mn.add(l),ks=new T_(Jt,Ln),aa=new A_(Jt,Ln?30:46),V_(),w_(_i.water,Mi),Ii=kv(Yn),Ii.addPass(new Iv(Jt,Tt)),Ii.addPass(Hv(innerWidth,innerHeight)),Ln||(mc=new Gv,Ii.addPass(mc)),Ii.addPass(new Vv),Eo=Bv(),Eo.enabled=Ln,Ii.addPass(Eo);const c=()=>{To=!1,Tt.aspect=innerWidth/innerHeight,Tt.updateProjectionMatrix(),dc={width:innerWidth,height:innerHeight}};window.addEventListener("resize",c),ve("#scene").addEventListener("webglcontextlost",h=>{h.preventDefault(),la(!0),xi("Graphics paused. Reload the page to restore the river.",100)}),hd=F_(Yn),oa=!0,ve("#start").disabled=!1,ve("#start").textContent="PLAY",ve("#loading-note").textContent="",Go=performance.now(),requestAnimationFrame(_d)}catch(i){console.error(i),ve("#loading-note").textContent=`Unable to launch: ${i.message}. Try a browser with WebGL enabled.`,ve("#start").textContent="RETRY",ve("#start").disabled=!1,ve("#start").onclick=()=>location.reload()}}X_();
