var ns={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},is={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},of=0,ch=1,af=2;var hh=1,lf=2,gi=3,Di=0,wn=1,vn=2,ci=0,Ms=1,Ue=2,uh=3,fh=4,cf=5,Qi=100,hf=101,uf=102,ff=103,df=104,pf=200,mf=201,gf=202,xf=203,_a=204,Ma=205,vf=206,yf=207,_f=208,Mf=209,bf=210,Sf=211,wf=212,Tf=213,Ef=214,qa=0,Ya=1,Za=2,bs=3,$a=4,ja=5,Ka=6,Ja=7,dh=0,Af=1,Cf=2,Ni=0,Qa=1,tl=2,el=3,_r=4,nl=5,il=6,sl=7;var ph=300,Ls=301,Ds=302,rl=303,ol=304,wo=306,ba=1e3,Ji=1001,Sa=1002,sn=1003,Rf=1004;var To=1005;var li=1006,al=1007;var ss=1008;var xi=1009,mh=1010,gh=1011,Mr=1012,ll=1013,rs=1014,Dn=1015,Kn=1016,cl=1017,hl=1018,br=1020,xh=35902,vh=35899,yh=1021,_h=1022,yn=1023,fr=1026,Sr=1027,Mh=1028,ul=1029,bh=1030,fl=1031;var dl=1033,Eo=33776,Ao=33777,Co=33778,Ro=33779,pl=35840,ml=35841,gl=35842,xl=35843,vl=36196,yl=37492,_l=37496,Ml=37808,bl=37809,Sl=37810,wl=37811,Tl=37812,El=37813,Al=37814,Cl=37815,Rl=37816,Pl=37817,Il=37818,Ll=37819,Dl=37820,Fl=37821,Nl=36492,Ul=36494,Ol=36495,Bl=36283,zl=36284,kl=36285,Vl=36286;var no=2300,wa=2301,ya=2302,ih=2400,sh=2401,rh=2402;var Pf=3200,If=3201;var Lf=0,Df=1,Ui="",ln="srgb",Ss="srgb-linear",io="linear",_e="srgb";var _s=7680;var oh=519,Ff=512,Nf=513,Uf=514,Sh=515,Of=516,Bf=517,zf=518,kf=519,Ta=35044,Po=35048;var wh="300 es",ai=2e3,so=2001;var fi=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){let i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){let i=this._listeners;if(i===void 0)return;let s=i[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let i=e[t.type];if(i!==void 0){t.target=this;let s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},pn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ou=1234567,to=Math.PI/180,dr=180/Math.PI;function Ii(){let n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(pn[n&255]+pn[n>>8&255]+pn[n>>16&255]+pn[n>>24&255]+"-"+pn[t&255]+pn[t>>8&255]+"-"+pn[t>>16&15|64]+pn[t>>24&255]+"-"+pn[e&63|128]+pn[e>>8&255]+"-"+pn[e>>16&255]+pn[e>>24&255]+pn[i&255]+pn[i>>8&255]+pn[i>>16&255]+pn[i>>24&255]).toLowerCase()}function ee(n,t,e){return Math.max(t,Math.min(e,n))}function Th(n,t){return(n%t+t)%t}function Um(n,t,e,i,s){return i+(n-t)*(s-i)/(e-t)}function Om(n,t,e){return n!==t?(e-n)/(t-n):0}function eo(n,t,e){return(1-e)*n+e*t}function Bm(n,t,e,i){return eo(n,t,1-Math.exp(-e*i))}function zm(n,t=1){return t-Math.abs(Th(n,t*2)-t)}function km(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*(3-2*n))}function Vm(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*n*(n*(n*6-15)+10))}function Hm(n,t){return n+Math.floor(Math.random()*(t-n+1))}function Gm(n,t){return n+Math.random()*(t-n)}function Wm(n){return n*(.5-Math.random())}function Xm(n){n!==void 0&&(Ou=n);let t=Ou+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function qm(n){return n*to}function Ym(n){return n*dr}function Zm(n){return(n&n-1)===0&&n!==0}function $m(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function jm(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Km(n,t,e,i,s){let r=Math.cos,o=Math.sin,a=r(e/2),c=o(e/2),l=r((t+i)/2),h=o((t+i)/2),f=r((t-i)/2),u=o((t-i)/2),d=r((i-t)/2),g=o((i-t)/2);switch(s){case"XYX":n.set(a*h,c*f,c*u,a*l);break;case"YZY":n.set(c*u,a*h,c*f,a*l);break;case"ZXZ":n.set(c*f,c*u,a*h,a*l);break;case"XZX":n.set(a*h,c*g,c*d,a*l);break;case"YXY":n.set(c*d,a*h,c*g,a*l);break;case"ZYZ":n.set(c*g,c*d,a*h,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function oi(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function be(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}var He={DEG2RAD:to,RAD2DEG:dr,generateUUID:Ii,clamp:ee,euclideanModulo:Th,mapLinear:Um,inverseLerp:Om,lerp:eo,damp:Bm,pingpong:zm,smoothstep:km,smootherstep:Vm,randInt:Hm,randFloat:Gm,randFloatSpread:Wm,seededRandom:Xm,degToRad:qm,radToDeg:Ym,isPowerOfTwo:Zm,ceilPowerOfTwo:$m,floorPowerOfTwo:jm,setQuaternionFromProperEuler:Km,normalize:be,denormalize:oi},At=class n{constructor(t=0,e=0){n.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=ee(this.x,t.x,e.x),this.y=ee(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=ee(this.x,t,e),this.y=ee(this.y,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(ee(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(ee(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*i-o*s+t.x,this.y=r*s+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},In=class{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,o,a){let c=i[s+0],l=i[s+1],h=i[s+2],f=i[s+3],u=r[o+0],d=r[o+1],g=r[o+2],x=r[o+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=f;return}if(a===1){t[e+0]=u,t[e+1]=d,t[e+2]=g,t[e+3]=x;return}if(f!==x||c!==u||l!==d||h!==g){let m=1-a,p=c*u+l*d+h*g+f*x,E=p>=0?1:-1,w=1-p*p;if(w>Number.EPSILON){let v=Math.sqrt(w),y=Math.atan2(v,p*E);m=Math.sin(m*y)/v,a=Math.sin(a*y)/v}let b=a*E;if(c=c*m+u*b,l=l*m+d*b,h=h*m+g*b,f=f*m+x*b,m===1-a){let v=1/Math.sqrt(c*c+l*l+h*h+f*f);c*=v,l*=v,h*=v,f*=v}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=f}static multiplyQuaternionsFlat(t,e,i,s,r,o){let a=i[s],c=i[s+1],l=i[s+2],h=i[s+3],f=r[o],u=r[o+1],d=r[o+2],g=r[o+3];return t[e]=a*g+h*f+c*d-l*u,t[e+1]=c*g+h*u+l*f-a*d,t[e+2]=l*g+h*d+a*u-c*f,t[e+3]=h*g-a*f-c*u-l*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let i=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(i/2),h=a(s/2),f=a(r/2),u=c(i/2),d=c(s/2),g=c(r/2);switch(o){case"XYZ":this._x=u*h*f+l*d*g,this._y=l*d*f-u*h*g,this._z=l*h*g+u*d*f,this._w=l*h*f-u*d*g;break;case"YXZ":this._x=u*h*f+l*d*g,this._y=l*d*f-u*h*g,this._z=l*h*g-u*d*f,this._w=l*h*f+u*d*g;break;case"ZXY":this._x=u*h*f-l*d*g,this._y=l*d*f+u*h*g,this._z=l*h*g+u*d*f,this._w=l*h*f-u*d*g;break;case"ZYX":this._x=u*h*f-l*d*g,this._y=l*d*f+u*h*g,this._z=l*h*g-u*d*f,this._w=l*h*f+u*d*g;break;case"YZX":this._x=u*h*f+l*d*g,this._y=l*d*f+u*h*g,this._z=l*h*g-u*d*f,this._w=l*h*f-u*d*g;break;case"XZY":this._x=u*h*f-l*d*g,this._y=l*d*f-u*h*g,this._z=l*h*g+u*d*f,this._w=l*h*f+u*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,i=e[0],s=e[4],r=e[8],o=e[1],a=e[5],c=e[9],l=e[2],h=e[6],f=e[10],u=i+a+f;if(u>0){let d=.5/Math.sqrt(u+1);this._w=.25/d,this._x=(h-c)*d,this._y=(r-l)*d,this._z=(o-s)*d}else if(i>a&&i>f){let d=2*Math.sqrt(1+i-a-f);this._w=(h-c)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+l)/d}else if(a>f){let d=2*Math.sqrt(1+a-i-f);this._w=(r-l)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(c+h)/d}else{let d=2*Math.sqrt(1+f-i-a);this._w=(o-s)/d,this._x=(r+l)/d,this._y=(c+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ee(this.dot(t),-1,1)))}rotateTowards(t,e){let i=this.angleTo(t);if(i===0)return this;let s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let i=t._x,s=t._y,r=t._z,o=t._w,a=e._x,c=e._y,l=e._z,h=e._w;return this._x=i*h+o*a+s*l-r*c,this._y=s*h+o*c+r*a-i*l,this._z=r*h+o*l+i*c-s*a,this._w=o*h-i*a-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let i=this._x,s=this._y,r=this._z,o=this._w,a=o*t._w+i*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;let c=1-a*a;if(c<=Number.EPSILON){let d=1-e;return this._w=d*o+e*this._w,this._x=d*i+e*this._x,this._y=d*s+e*this._y,this._z=d*r+e*this._z,this.normalize(),this}let l=Math.sqrt(c),h=Math.atan2(l,a),f=Math.sin((1-e)*h)/l,u=Math.sin(e*h)/l;return this._w=o*f+this._w*u,this._x=i*f+this._x*u,this._y=s*f+this._y*u,this._z=r*f+this._z*u,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},N=class n{constructor(t=0,e=0,i=0){n.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Bu.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Bu.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,i=this.y,s=this.z,r=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*s-a*i),h=2*(a*e-r*s),f=2*(r*i-o*e);return this.x=e+c*l+o*f-a*h,this.y=i+c*h+a*l-r*f,this.z=s+c*f+r*h-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=ee(this.x,t.x,e.x),this.y=ee(this.y,t.y,e.y),this.z=ee(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=ee(this.x,t,e),this.y=ee(this.y,t,e),this.z=ee(this.z,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(ee(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let i=t.x,s=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=s*c-r*a,this.y=r*o-i*c,this.z=i*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Lc.copy(this).projectOnVector(t),this.sub(Lc)}reflect(t){return this.sub(Lc.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(ee(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){let s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Lc=new N,Bu=new In,Jt=class n{constructor(t,e,i,s,r,o,a,c,l){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,c,l)}set(t,e,i,s,r,o,a,c,l){let h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=c,h[6]=i,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[3],c=i[6],l=i[1],h=i[4],f=i[7],u=i[2],d=i[5],g=i[8],x=s[0],m=s[3],p=s[6],E=s[1],w=s[4],b=s[7],v=s[2],y=s[5],T=s[8];return r[0]=o*x+a*E+c*v,r[3]=o*m+a*w+c*y,r[6]=o*p+a*b+c*T,r[1]=l*x+h*E+f*v,r[4]=l*m+h*w+f*y,r[7]=l*p+h*b+f*T,r[2]=u*x+d*E+g*v,r[5]=u*m+d*w+g*y,r[8]=u*p+d*b+g*T,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8];return e*o*h-e*a*l-i*r*h+i*a*c+s*r*l-s*o*c}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],f=h*o-a*l,u=a*c-h*r,d=l*r-o*c,g=e*f+i*u+s*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return t[0]=f*x,t[1]=(s*l-h*i)*x,t[2]=(a*i-s*o)*x,t[3]=u*x,t[4]=(h*e-s*c)*x,t[5]=(s*r-a*e)*x,t[6]=d*x,t[7]=(i*c-l*e)*x,t[8]=(o*e-i*r)*x,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,o,a){let c=Math.cos(r),l=Math.sin(r);return this.set(i*c,i*l,-i*(c*o+l*a)+o+t,-s*l,s*c,-s*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Dc.makeScale(t,e)),this}rotate(t){return this.premultiply(Dc.makeRotation(-t)),this}translate(t,e){return this.premultiply(Dc.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Dc=new Jt;function Eh(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function ro(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Vf(){let n=ro("canvas");return n.style.display="block",n}var zu={};function pr(n){n in zu||(zu[n]=!0,console.warn(n))}function Hf(n,t,e){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}var ku=new Jt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Vu=new Jt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Jm(){let n={enabled:!0,workingColorSpace:Ss,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===_e&&(s.r=Li(s.r),s.g=Li(s.g),s.b=Li(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===_e&&(s.r=ur(s.r),s.g=ur(s.g),s.b=ur(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Ui?io:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return pr("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return pr("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Ss]:{primaries:t,whitePoint:i,transfer:io,toXYZ:ku,fromXYZ:Vu,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:ln},outputColorSpaceConfig:{drawingBufferColorSpace:ln}},[ln]:{primaries:t,whitePoint:i,transfer:_e,toXYZ:ku,fromXYZ:Vu,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:ln}}}),n}var ue=Jm();function Li(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function ur(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var $s,Ea=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{$s===void 0&&($s=ro("canvas")),$s.width=t.width,$s.height=t.height;let s=$s.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),i=$s}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=ro("canvas");e.width=t.width,e.height=t.height;let i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Li(r[o]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Li(e[i]/255)*255):e[i]=Li(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Qm=0,mr=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Qm++}),this.uuid=Ii(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Fc(s[o].image)):r.push(Fc(s[o]))}else r=Fc(s);i.url=r}return e||(t.images[this.uuid]=i),i}};function Fc(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Ea.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var t0=0,Nc=new N,Sn=class n extends fi{constructor(t=n.DEFAULT_IMAGE,e=n.DEFAULT_MAPPING,i=Ji,s=Ji,r=li,o=ss,a=yn,c=xi,l=n.DEFAULT_ANISOTROPY,h=Ui){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:t0++}),this.uuid=Ii(),this.name="",this.source=new mr(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new At(0,0),this.repeat=new At(1,1),this.center=new At(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Jt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Nc).x}get height(){return this.source.getSize(Nc).y}get depth(){return this.source.getSize(Nc).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let i=t[e];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${e}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==ph)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ba:t.x=t.x-Math.floor(t.x);break;case Ji:t.x=t.x<0?0:1;break;case Sa:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ba:t.y=t.y-Math.floor(t.y);break;case Ji:t.y=t.y<0?0:1;break;case Sa:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Sn.DEFAULT_IMAGE=null;Sn.DEFAULT_MAPPING=ph;Sn.DEFAULT_ANISOTROPY=1;var Ne=class n{constructor(t=0,e=0,i=0,s=1){n.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*i+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r,c=t.elements,l=c[0],h=c[4],f=c[8],u=c[1],d=c[5],g=c[9],x=c[2],m=c[6],p=c[10];if(Math.abs(h-u)<.01&&Math.abs(f-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(f+x)<.1&&Math.abs(g+m)<.1&&Math.abs(l+d+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let w=(l+1)/2,b=(d+1)/2,v=(p+1)/2,y=(h+u)/4,T=(f+x)/4,S=(g+m)/4;return w>b&&w>v?w<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(w),s=y/i,r=T/i):b>v?b<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(b),i=y/s,r=S/s):v<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(v),i=T/r,s=S/r),this.set(i,s,r,e),this}let E=Math.sqrt((m-g)*(m-g)+(f-x)*(f-x)+(u-h)*(u-h));return Math.abs(E)<.001&&(E=1),this.x=(m-g)/E,this.y=(f-x)/E,this.z=(u-h)/E,this.w=Math.acos((l+d+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=ee(this.x,t.x,e.x),this.y=ee(this.y,t.y,e.y),this.z=ee(this.z,t.z,e.z),this.w=ee(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=ee(this.x,t,e),this.y=ee(this.y,t,e),this.z=ee(this.z,t,e),this.w=ee(this.w,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(ee(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Aa=class extends fi{constructor(t=1,e=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:li,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=i.depth,this.scissor=new Ne(0,0,t,e),this.scissorTest=!1,this.viewport=new Ne(0,0,t,e);let s={width:t,height:e,depth:i.depth},r=new Sn(s);this.textures=[];let o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(t={}){let e={minFilter:li,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new mr(s)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},xn=class extends Aa{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}},oo=class extends Sn{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=sn,this.minFilter=sn,this.wrapR=Ji,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Ca=class extends Sn{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=sn,this.minFilter=sn,this.wrapR=Ji,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var di=class{constructor(t=new N(1/0,1/0,1/0),e=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(ii.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(ii.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let i=ii.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,ii):ii.fromBufferAttribute(r,o),ii.applyMatrix4(t.matrixWorld),this.expandByPoint(ii);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),$o.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),$o.copy(i.boundingBox)),$o.applyMatrix4(t.matrixWorld),this.union($o)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,ii),ii.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Yr),jo.subVectors(this.max,Yr),js.subVectors(t.a,Yr),Ks.subVectors(t.b,Yr),Js.subVectors(t.c,Yr),qi.subVectors(Ks,js),Yi.subVectors(Js,Ks),gs.subVectors(js,Js);let e=[0,-qi.z,qi.y,0,-Yi.z,Yi.y,0,-gs.z,gs.y,qi.z,0,-qi.x,Yi.z,0,-Yi.x,gs.z,0,-gs.x,-qi.y,qi.x,0,-Yi.y,Yi.x,0,-gs.y,gs.x,0];return!Uc(e,js,Ks,Js,jo)||(e=[1,0,0,0,1,0,0,0,1],!Uc(e,js,Ks,Js,jo))?!1:(Ko.crossVectors(qi,Yi),e=[Ko.x,Ko.y,Ko.z],Uc(e,js,Ks,Js,jo))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,ii).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(ii).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ti[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ti[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ti[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ti[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ti[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ti[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ti[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ti[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ti),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Ti=[new N,new N,new N,new N,new N,new N,new N,new N],ii=new N,$o=new di,js=new N,Ks=new N,Js=new N,qi=new N,Yi=new N,gs=new N,Yr=new N,jo=new N,Ko=new N,xs=new N;function Uc(n,t,e,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){xs.fromArray(n,r);let a=s.x*Math.abs(xs.x)+s.y*Math.abs(xs.y)+s.z*Math.abs(xs.z),c=t.dot(xs),l=e.dot(xs),h=i.dot(xs);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}var e0=new di,Zr=new N,Oc=new N,ws=class{constructor(t=new N,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let i=this.center;e!==void 0?i.copy(e):e0.setFromPoints(t).getCenter(i);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Zr.subVectors(t,this.center);let e=Zr.lengthSq();if(e>this.radius*this.radius){let i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(Zr,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Oc.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Zr.copy(t.center).add(Oc)),this.expandByPoint(Zr.copy(t.center).sub(Oc))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},Ei=new N,Bc=new N,Jo=new N,Zi=new N,zc=new N,Qo=new N,kc=new N,Ts=class{constructor(t=new N,e=new N(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ei)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Ei.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Ei.copy(this.origin).addScaledVector(this.direction,e),Ei.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){Bc.copy(t).add(e).multiplyScalar(.5),Jo.copy(e).sub(t).normalize(),Zi.copy(this.origin).sub(Bc);let r=t.distanceTo(e)*.5,o=-this.direction.dot(Jo),a=Zi.dot(this.direction),c=-Zi.dot(Jo),l=Zi.lengthSq(),h=Math.abs(1-o*o),f,u,d,g;if(h>0)if(f=o*c-a,u=o*a-c,g=r*h,f>=0)if(u>=-g)if(u<=g){let x=1/h;f*=x,u*=x,d=f*(f+o*u+2*a)+u*(o*f+u+2*c)+l}else u=r,f=Math.max(0,-(o*u+a)),d=-f*f+u*(u+2*c)+l;else u=-r,f=Math.max(0,-(o*u+a)),d=-f*f+u*(u+2*c)+l;else u<=-g?(f=Math.max(0,-(-o*r+a)),u=f>0?-r:Math.min(Math.max(-r,-c),r),d=-f*f+u*(u+2*c)+l):u<=g?(f=0,u=Math.min(Math.max(-r,-c),r),d=u*(u+2*c)+l):(f=Math.max(0,-(o*r+a)),u=f>0?r:Math.min(Math.max(-r,-c),r),d=-f*f+u*(u+2*c)+l);else u=o>0?-r:r,f=Math.max(0,-(o*u+a)),d=-f*f+u*(u+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(Bc).addScaledVector(Jo,u),d}intersectSphere(t,e){Ei.subVectors(t.center,this.origin);let i=Ei.dot(this.direction),s=Ei.dot(Ei)-i*i,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=i-o,c=i+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){let i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,o,a,c,l=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,u=this.origin;return l>=0?(i=(t.min.x-u.x)*l,s=(t.max.x-u.x)*l):(i=(t.max.x-u.x)*l,s=(t.min.x-u.x)*l),h>=0?(r=(t.min.y-u.y)*h,o=(t.max.y-u.y)*h):(r=(t.max.y-u.y)*h,o=(t.min.y-u.y)*h),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),f>=0?(a=(t.min.z-u.z)*f,c=(t.max.z-u.z)*f):(a=(t.max.z-u.z)*f,c=(t.min.z-u.z)*f),i>c||a>s)||((a>i||i!==i)&&(i=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,Ei)!==null}intersectTriangle(t,e,i,s,r){zc.subVectors(e,t),Qo.subVectors(i,t),kc.crossVectors(zc,Qo);let o=this.direction.dot(kc),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Zi.subVectors(this.origin,t);let c=a*this.direction.dot(Qo.crossVectors(Zi,Qo));if(c<0)return null;let l=a*this.direction.dot(zc.cross(Zi));if(l<0||c+l>o)return null;let h=-a*Zi.dot(kc);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ve=class n{constructor(t,e,i,s,r,o,a,c,l,h,f,u,d,g,x,m){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,c,l,h,f,u,d,g,x,m)}set(t,e,i,s,r,o,a,c,l,h,f,u,d,g,x,m){let p=this.elements;return p[0]=t,p[4]=e,p[8]=i,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=h,p[10]=f,p[14]=u,p[3]=d,p[7]=g,p[11]=x,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){let e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,i=t.elements,s=1/Qs.setFromMatrixColumn(t,0).length(),r=1/Qs.setFromMatrixColumn(t,1).length(),o=1/Qs.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,i=t.x,s=t.y,r=t.z,o=Math.cos(i),a=Math.sin(i),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),f=Math.sin(r);if(t.order==="XYZ"){let u=o*h,d=o*f,g=a*h,x=a*f;e[0]=c*h,e[4]=-c*f,e[8]=l,e[1]=d+g*l,e[5]=u-x*l,e[9]=-a*c,e[2]=x-u*l,e[6]=g+d*l,e[10]=o*c}else if(t.order==="YXZ"){let u=c*h,d=c*f,g=l*h,x=l*f;e[0]=u+x*a,e[4]=g*a-d,e[8]=o*l,e[1]=o*f,e[5]=o*h,e[9]=-a,e[2]=d*a-g,e[6]=x+u*a,e[10]=o*c}else if(t.order==="ZXY"){let u=c*h,d=c*f,g=l*h,x=l*f;e[0]=u-x*a,e[4]=-o*f,e[8]=g+d*a,e[1]=d+g*a,e[5]=o*h,e[9]=x-u*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){let u=o*h,d=o*f,g=a*h,x=a*f;e[0]=c*h,e[4]=g*l-d,e[8]=u*l+x,e[1]=c*f,e[5]=x*l+u,e[9]=d*l-g,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){let u=o*c,d=o*l,g=a*c,x=a*l;e[0]=c*h,e[4]=x-u*f,e[8]=g*f+d,e[1]=f,e[5]=o*h,e[9]=-a*h,e[2]=-l*h,e[6]=d*f+g,e[10]=u-x*f}else if(t.order==="XZY"){let u=o*c,d=o*l,g=a*c,x=a*l;e[0]=c*h,e[4]=-f,e[8]=l*h,e[1]=u*f+x,e[5]=o*h,e[9]=d*f-g,e[2]=g*f-d,e[6]=a*h,e[10]=x*f+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(n0,t,i0)}lookAt(t,e,i){let s=this.elements;return kn.subVectors(t,e),kn.lengthSq()===0&&(kn.z=1),kn.normalize(),$i.crossVectors(i,kn),$i.lengthSq()===0&&(Math.abs(i.z)===1?kn.x+=1e-4:kn.z+=1e-4,kn.normalize(),$i.crossVectors(i,kn)),$i.normalize(),ta.crossVectors(kn,$i),s[0]=$i.x,s[4]=ta.x,s[8]=kn.x,s[1]=$i.y,s[5]=ta.y,s[9]=kn.y,s[2]=$i.z,s[6]=ta.z,s[10]=kn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[4],c=i[8],l=i[12],h=i[1],f=i[5],u=i[9],d=i[13],g=i[2],x=i[6],m=i[10],p=i[14],E=i[3],w=i[7],b=i[11],v=i[15],y=s[0],T=s[4],S=s[8],M=s[12],_=s[1],A=s[5],R=s[9],L=s[13],I=s[2],D=s[6],U=s[10],z=s[14],k=s[3],J=s[7],Y=s[11],at=s[15];return r[0]=o*y+a*_+c*I+l*k,r[4]=o*T+a*A+c*D+l*J,r[8]=o*S+a*R+c*U+l*Y,r[12]=o*M+a*L+c*z+l*at,r[1]=h*y+f*_+u*I+d*k,r[5]=h*T+f*A+u*D+d*J,r[9]=h*S+f*R+u*U+d*Y,r[13]=h*M+f*L+u*z+d*at,r[2]=g*y+x*_+m*I+p*k,r[6]=g*T+x*A+m*D+p*J,r[10]=g*S+x*R+m*U+p*Y,r[14]=g*M+x*L+m*z+p*at,r[3]=E*y+w*_+b*I+v*k,r[7]=E*T+w*A+b*D+v*J,r[11]=E*S+w*R+b*U+v*Y,r[15]=E*M+w*L+b*z+v*at,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],o=t[1],a=t[5],c=t[9],l=t[13],h=t[2],f=t[6],u=t[10],d=t[14],g=t[3],x=t[7],m=t[11],p=t[15];return g*(+r*c*f-s*l*f-r*a*u+i*l*u+s*a*d-i*c*d)+x*(+e*c*d-e*l*u+r*o*u-s*o*d+s*l*h-r*c*h)+m*(+e*l*f-e*a*d-r*o*f+i*o*d+r*a*h-i*l*h)+p*(-s*a*h-e*c*f+e*a*u+s*o*f-i*o*u+i*c*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],f=t[9],u=t[10],d=t[11],g=t[12],x=t[13],m=t[14],p=t[15],E=f*m*l-x*u*l+x*c*d-a*m*d-f*c*p+a*u*p,w=g*u*l-h*m*l-g*c*d+o*m*d+h*c*p-o*u*p,b=h*x*l-g*f*l+g*a*d-o*x*d-h*a*p+o*f*p,v=g*f*c-h*x*c-g*a*u+o*x*u+h*a*m-o*f*m,y=e*E+i*w+s*b+r*v;if(y===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let T=1/y;return t[0]=E*T,t[1]=(x*u*r-f*m*r-x*s*d+i*m*d+f*s*p-i*u*p)*T,t[2]=(a*m*r-x*c*r+x*s*l-i*m*l-a*s*p+i*c*p)*T,t[3]=(f*c*r-a*u*r-f*s*l+i*u*l+a*s*d-i*c*d)*T,t[4]=w*T,t[5]=(h*m*r-g*u*r+g*s*d-e*m*d-h*s*p+e*u*p)*T,t[6]=(g*c*r-o*m*r-g*s*l+e*m*l+o*s*p-e*c*p)*T,t[7]=(o*u*r-h*c*r+h*s*l-e*u*l-o*s*d+e*c*d)*T,t[8]=b*T,t[9]=(g*f*r-h*x*r-g*i*d+e*x*d+h*i*p-e*f*p)*T,t[10]=(o*x*r-g*a*r+g*i*l-e*x*l-o*i*p+e*a*p)*T,t[11]=(h*a*r-o*f*r-h*i*l+e*f*l+o*i*d-e*a*d)*T,t[12]=v*T,t[13]=(h*x*s-g*f*s+g*i*u-e*x*u-h*i*m+e*f*m)*T,t[14]=(g*a*s-o*x*s-g*i*c+e*x*c+o*i*m-e*a*m)*T,t[15]=(o*f*s-h*a*s+h*i*c-e*f*c-o*i*u+e*a*u)*T,this}scale(t){let e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let i=Math.cos(e),s=Math.sin(e),r=1-i,o=t.x,a=t.y,c=t.z,l=r*o,h=r*a;return this.set(l*o+i,l*a-s*c,l*c+s*a,0,l*a+s*c,h*a+i,h*c-s*o,0,l*c-s*a,h*c+s*o,r*c*c+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,o){return this.set(1,i,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){let s=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,l=r+r,h=o+o,f=a+a,u=r*l,d=r*h,g=r*f,x=o*h,m=o*f,p=a*f,E=c*l,w=c*h,b=c*f,v=i.x,y=i.y,T=i.z;return s[0]=(1-(x+p))*v,s[1]=(d+b)*v,s[2]=(g-w)*v,s[3]=0,s[4]=(d-b)*y,s[5]=(1-(u+p))*y,s[6]=(m+E)*y,s[7]=0,s[8]=(g+w)*T,s[9]=(m-E)*T,s[10]=(1-(u+x))*T,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){let s=this.elements,r=Qs.set(s[0],s[1],s[2]).length(),o=Qs.set(s[4],s[5],s[6]).length(),a=Qs.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],si.copy(this);let l=1/r,h=1/o,f=1/a;return si.elements[0]*=l,si.elements[1]*=l,si.elements[2]*=l,si.elements[4]*=h,si.elements[5]*=h,si.elements[6]*=h,si.elements[8]*=f,si.elements[9]*=f,si.elements[10]*=f,e.setFromRotationMatrix(si),i.x=r,i.y=o,i.z=a,this}makePerspective(t,e,i,s,r,o,a=ai,c=!1){let l=this.elements,h=2*r/(e-t),f=2*r/(i-s),u=(e+t)/(e-t),d=(i+s)/(i-s),g,x;if(c)g=r/(o-r),x=o*r/(o-r);else if(a===ai)g=-(o+r)/(o-r),x=-2*o*r/(o-r);else if(a===so)g=-o/(o-r),x=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=f,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,s,r,o,a=ai,c=!1){let l=this.elements,h=2/(e-t),f=2/(i-s),u=-(e+t)/(e-t),d=-(i+s)/(i-s),g,x;if(c)g=1/(o-r),x=o/(o-r);else if(a===ai)g=-2/(o-r),x=-(o+r)/(o-r);else if(a===so)g=-1/(o-r),x=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=0,l[12]=u,l[1]=0,l[5]=f,l[9]=0,l[13]=d,l[2]=0,l[6]=0,l[10]=g,l[14]=x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}},Qs=new N,si=new Ve,n0=new N(0,0,0),i0=new N(1,1,1),$i=new N,ta=new N,kn=new N,Hu=new Ve,Gu=new In,pi=class n{constructor(t=0,e=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],h=s[9],f=s[2],u=s[6],d=s[10];switch(e){case"XYZ":this._y=Math.asin(ee(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(u,l),this._z=0);break;case"YXZ":this._x=Math.asin(-ee(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(ee(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-ee(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(u,d),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(ee(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-ee(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Hu.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Hu,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Gu.setFromEuler(this),this.setFromQuaternion(Gu,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};pi.DEFAULT_ORDER="XYZ";var ao=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},s0=0,Wu=new N,tr=new In,Ai=new Ve,ea=new N,$r=new N,r0=new N,o0=new In,Xu=new N(1,0,0),qu=new N(0,1,0),Yu=new N(0,0,1),Zu={type:"added"},a0={type:"removed"},er={type:"childadded",child:null},Vc={type:"childremoved",child:null},Ln=class n extends fi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:s0++}),this.uuid=Ii(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let t=new N,e=new pi,i=new In,s=new N(1,1,1);function r(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ve},normalMatrix:{value:new Jt}}),this.matrix=new Ve,this.matrixWorld=new Ve,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ao,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return tr.setFromAxisAngle(t,e),this.quaternion.multiply(tr),this}rotateOnWorldAxis(t,e){return tr.setFromAxisAngle(t,e),this.quaternion.premultiply(tr),this}rotateX(t){return this.rotateOnAxis(Xu,t)}rotateY(t){return this.rotateOnAxis(qu,t)}rotateZ(t){return this.rotateOnAxis(Yu,t)}translateOnAxis(t,e){return Wu.copy(t).applyQuaternion(this.quaternion),this.position.add(Wu.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Xu,t)}translateY(t){return this.translateOnAxis(qu,t)}translateZ(t){return this.translateOnAxis(Yu,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ai.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?ea.copy(t):ea.set(t,e,i);let s=this.parent;this.updateWorldMatrix(!0,!1),$r.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ai.lookAt($r,ea,this.up):Ai.lookAt(ea,$r,this.up),this.quaternion.setFromRotationMatrix(Ai),s&&(Ai.extractRotation(s.matrixWorld),tr.setFromRotationMatrix(Ai),this.quaternion.premultiply(tr.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Zu),er.child=t,this.dispatchEvent(er),er.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(a0),Vc.child=t,this.dispatchEvent(Vc),Vc.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ai.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ai.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ai),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Zu),er.child=t,this.dispatchEvent(er),er.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){let o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($r,t,r0),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($r,o0,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){let i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let f=c[l];r(t.shapes,f)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(t.materials,this.material[c]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];s.animations.push(r(t.animations,c))}}if(e){let a=o(t.geometries),c=o(t.materials),l=o(t.textures),h=o(t.images),f=o(t.shapes),u=o(t.skeletons),d=o(t.animations),g=o(t.nodes);a.length>0&&(i.geometries=a),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),h.length>0&&(i.images=h),f.length>0&&(i.shapes=f),u.length>0&&(i.skeletons=u),d.length>0&&(i.animations=d),g.length>0&&(i.nodes=g)}return i.object=s,i;function o(a){let c=[];for(let l in a){let h=a[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){let s=t.children[i];this.add(s.clone())}return this}};Ln.DEFAULT_UP=new N(0,1,0);Ln.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ln.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var ri=new N,Ci=new N,Hc=new N,Ri=new N,nr=new N,ir=new N,$u=new N,Gc=new N,Wc=new N,Xc=new N,qc=new Ne,Yc=new Ne,Zc=new Ne,Pi=class n{constructor(t=new N,e=new N,i=new N){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),ri.subVectors(t,e),s.cross(ri);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){ri.subVectors(s,e),Ci.subVectors(i,e),Hc.subVectors(t,e);let o=ri.dot(ri),a=ri.dot(Ci),c=ri.dot(Hc),l=Ci.dot(Ci),h=Ci.dot(Hc),f=o*l-a*a;if(f===0)return r.set(0,0,0),null;let u=1/f,d=(l*c-a*h)*u,g=(o*h-a*c)*u;return r.set(1-d-g,g,d)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,Ri)===null?!1:Ri.x>=0&&Ri.y>=0&&Ri.x+Ri.y<=1}static getInterpolation(t,e,i,s,r,o,a,c){return this.getBarycoord(t,e,i,s,Ri)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Ri.x),c.addScaledVector(o,Ri.y),c.addScaledVector(a,Ri.z),c)}static getInterpolatedAttribute(t,e,i,s,r,o){return qc.setScalar(0),Yc.setScalar(0),Zc.setScalar(0),qc.fromBufferAttribute(t,e),Yc.fromBufferAttribute(t,i),Zc.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(qc,r.x),o.addScaledVector(Yc,r.y),o.addScaledVector(Zc,r.z),o}static isFrontFacing(t,e,i,s){return ri.subVectors(i,e),Ci.subVectors(t,e),ri.cross(Ci).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return ri.subVectors(this.c,this.b),Ci.subVectors(this.a,this.b),ri.cross(Ci).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return n.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return n.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,r){return n.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return n.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return n.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let i=this.a,s=this.b,r=this.c,o,a;nr.subVectors(s,i),ir.subVectors(r,i),Gc.subVectors(t,i);let c=nr.dot(Gc),l=ir.dot(Gc);if(c<=0&&l<=0)return e.copy(i);Wc.subVectors(t,s);let h=nr.dot(Wc),f=ir.dot(Wc);if(h>=0&&f<=h)return e.copy(s);let u=c*f-h*l;if(u<=0&&c>=0&&h<=0)return o=c/(c-h),e.copy(i).addScaledVector(nr,o);Xc.subVectors(t,r);let d=nr.dot(Xc),g=ir.dot(Xc);if(g>=0&&d<=g)return e.copy(r);let x=d*l-c*g;if(x<=0&&l>=0&&g<=0)return a=l/(l-g),e.copy(i).addScaledVector(ir,a);let m=h*g-d*f;if(m<=0&&f-h>=0&&d-g>=0)return $u.subVectors(r,s),a=(f-h)/(f-h+(d-g)),e.copy(s).addScaledVector($u,a);let p=1/(m+x+u);return o=x*p,a=u*p,e.copy(i).addScaledVector(nr,o).addScaledVector(ir,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Gf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ji={h:0,s:0,l:0},na={h:0,s:0,l:0};function $c(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}var Qt=class{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=ln){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ue.colorSpaceToWorking(this,e),this}setRGB(t,e,i,s=ue.workingColorSpace){return this.r=t,this.g=e,this.b=i,ue.colorSpaceToWorking(this,s),this}setHSL(t,e,i,s=ue.workingColorSpace){if(t=Th(t,1),e=ee(e,0,1),i=ee(i,0,1),e===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+e):i+e-i*e,o=2*i-r;this.r=$c(o,r,t+1/3),this.g=$c(o,r,t),this.b=$c(o,r,t-1/3)}return ue.colorSpaceToWorking(this,s),this}setStyle(t,e=ln){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=ln){let i=Gf[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Li(t.r),this.g=Li(t.g),this.b=Li(t.b),this}copyLinearToSRGB(t){return this.r=ur(t.r),this.g=ur(t.g),this.b=ur(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ln){return ue.workingToColorSpace(mn.copy(this),t),Math.round(ee(mn.r*255,0,255))*65536+Math.round(ee(mn.g*255,0,255))*256+Math.round(ee(mn.b*255,0,255))}getHexString(t=ln){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ue.workingColorSpace){ue.workingToColorSpace(mn.copy(this),e);let i=mn.r,s=mn.g,r=mn.b,o=Math.max(i,s,r),a=Math.min(i,s,r),c,l,h=(a+o)/2;if(a===o)c=0,l=0;else{let f=o-a;switch(l=h<=.5?f/(o+a):f/(2-o-a),o){case i:c=(s-r)/f+(s<r?6:0);break;case s:c=(r-i)/f+2;break;case r:c=(i-s)/f+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=ue.workingColorSpace){return ue.workingToColorSpace(mn.copy(this),e),t.r=mn.r,t.g=mn.g,t.b=mn.b,t}getStyle(t=ln){ue.workingToColorSpace(mn.copy(this),t);let e=mn.r,i=mn.g,s=mn.b;return t!==ln?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(ji),this.setHSL(ji.h+t,ji.s+e,ji.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(ji),t.getHSL(na);let i=eo(ji.h,na.h,e),s=eo(ji.s,na.s,e),r=eo(ji.l,na.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},mn=new Qt;Qt.NAMES=Gf;var l0=0,Fi=class extends fi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:l0++}),this.uuid=Ii(),this.name="",this.type="Material",this.blending=Ms,this.side=Di,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=_a,this.blendDst=Ma,this.blendEquation=Qi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Qt(0,0,0),this.blendAlpha=0,this.depthFunc=bs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=oh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=_s,this.stencilZFail=_s,this.stencilZPass=_s,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ms&&(i.blending=this.blending),this.side!==Di&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==_a&&(i.blendSrc=this.blendSrc),this.blendDst!==Ma&&(i.blendDst=this.blendDst),this.blendEquation!==Qi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==bs&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==oh&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==_s&&(i.stencilFail=this.stencilFail),this.stencilZFail!==_s&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==_s&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let o=[];for(let a in r){let c=r[a];delete c.metadata,o.push(c)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,i=null;if(e!==null){let s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},Es=class extends Fi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Qt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new pi,this.combine=dh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var Ye=new N,ia=new At,c0=0,se=class{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:c0++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Ta,this.updateRanges=[],this.gpuType=Dn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)ia.fromBufferAttribute(this,e),ia.applyMatrix3(t),this.setXY(e,ia.x,ia.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)Ye.fromBufferAttribute(this,e),Ye.applyMatrix3(t),this.setXYZ(e,Ye.x,Ye.y,Ye.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)Ye.fromBufferAttribute(this,e),Ye.applyMatrix4(t),this.setXYZ(e,Ye.x,Ye.y,Ye.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Ye.fromBufferAttribute(this,e),Ye.applyNormalMatrix(t),this.setXYZ(e,Ye.x,Ye.y,Ye.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Ye.fromBufferAttribute(this,e),Ye.transformDirection(t),this.setXYZ(e,Ye.x,Ye.y,Ye.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=oi(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=be(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=oi(e,this.array)),e}setX(t,e){return this.normalized&&(e=be(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=oi(e,this.array)),e}setY(t,e){return this.normalized&&(e=be(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=oi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=be(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=oi(e,this.array)),e}setW(t,e){return this.normalized&&(e=be(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=be(e,this.array),i=be(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=be(e,this.array),i=be(i,this.array),s=be(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=be(e,this.array),i=be(i,this.array),s=be(s,this.array),r=be(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Ta&&(t.usage=this.usage),t}};var lo=class extends se{constructor(t,e,i){super(new Uint16Array(t),e,i)}};var co=class extends se{constructor(t,e,i){super(new Uint32Array(t),e,i)}};var pe=class extends se{constructor(t,e,i){super(new Float32Array(t),e,i)}},h0=0,$n=new Ve,jc=new Ln,sr=new N,Vn=new di,jr=new di,en=new N,Se=class n extends fi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:h0++}),this.uuid=Ii(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Eh(t)?co:lo)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new Jt().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return $n.makeRotationFromQuaternion(t),this.applyMatrix4($n),this}rotateX(t){return $n.makeRotationX(t),this.applyMatrix4($n),this}rotateY(t){return $n.makeRotationY(t),this.applyMatrix4($n),this}rotateZ(t){return $n.makeRotationZ(t),this.applyMatrix4($n),this}translate(t,e,i){return $n.makeTranslation(t,e,i),this.applyMatrix4($n),this}scale(t,e,i){return $n.makeScale(t,e,i),this.applyMatrix4($n),this}lookAt(t){return jc.lookAt(t),jc.updateMatrix(),this.applyMatrix4(jc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(sr).negate(),this.translate(sr.x,sr.y,sr.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let i=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new pe(i,3))}else{let i=Math.min(t.length,e.count);for(let s=0;s<i;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new di);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){let r=e[i];Vn.setFromBufferAttribute(r),this.morphTargetsRelative?(en.addVectors(this.boundingBox.min,Vn.min),this.boundingBox.expandByPoint(en),en.addVectors(this.boundingBox.max,Vn.max),this.boundingBox.expandByPoint(en)):(this.boundingBox.expandByPoint(Vn.min),this.boundingBox.expandByPoint(Vn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ws);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new N,1/0);return}if(t){let i=this.boundingSphere.center;if(Vn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];jr.setFromBufferAttribute(a),this.morphTargetsRelative?(en.addVectors(Vn.min,jr.min),Vn.expandByPoint(en),en.addVectors(Vn.max,jr.max),Vn.expandByPoint(en)):(Vn.expandByPoint(jr.min),Vn.expandByPoint(jr.max))}Vn.getCenter(i);let s=0;for(let r=0,o=t.count;r<o;r++)en.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(en));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)en.fromBufferAttribute(a,l),c&&(sr.fromBufferAttribute(t,l),en.add(sr)),s=Math.max(s,i.distanceToSquared(en))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new se(new Float32Array(4*i.count),4));let o=this.getAttribute("tangent"),a=[],c=[];for(let S=0;S<i.count;S++)a[S]=new N,c[S]=new N;let l=new N,h=new N,f=new N,u=new At,d=new At,g=new At,x=new N,m=new N;function p(S,M,_){l.fromBufferAttribute(i,S),h.fromBufferAttribute(i,M),f.fromBufferAttribute(i,_),u.fromBufferAttribute(r,S),d.fromBufferAttribute(r,M),g.fromBufferAttribute(r,_),h.sub(l),f.sub(l),d.sub(u),g.sub(u);let A=1/(d.x*g.y-g.x*d.y);isFinite(A)&&(x.copy(h).multiplyScalar(g.y).addScaledVector(f,-d.y).multiplyScalar(A),m.copy(f).multiplyScalar(d.x).addScaledVector(h,-g.x).multiplyScalar(A),a[S].add(x),a[M].add(x),a[_].add(x),c[S].add(m),c[M].add(m),c[_].add(m))}let E=this.groups;E.length===0&&(E=[{start:0,count:t.count}]);for(let S=0,M=E.length;S<M;++S){let _=E[S],A=_.start,R=_.count;for(let L=A,I=A+R;L<I;L+=3)p(t.getX(L+0),t.getX(L+1),t.getX(L+2))}let w=new N,b=new N,v=new N,y=new N;function T(S){v.fromBufferAttribute(s,S),y.copy(v);let M=a[S];w.copy(M),w.sub(v.multiplyScalar(v.dot(M))).normalize(),b.crossVectors(y,M);let A=b.dot(c[S])<0?-1:1;o.setXYZW(S,w.x,w.y,w.z,A)}for(let S=0,M=E.length;S<M;++S){let _=E[S],A=_.start,R=_.count;for(let L=A,I=A+R;L<I;L+=3)T(t.getX(L+0)),T(t.getX(L+1)),T(t.getX(L+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new se(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let u=0,d=i.count;u<d;u++)i.setXYZ(u,0,0,0);let s=new N,r=new N,o=new N,a=new N,c=new N,l=new N,h=new N,f=new N;if(t)for(let u=0,d=t.count;u<d;u+=3){let g=t.getX(u+0),x=t.getX(u+1),m=t.getX(u+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,x),o.fromBufferAttribute(e,m),h.subVectors(o,r),f.subVectors(s,r),h.cross(f),a.fromBufferAttribute(i,g),c.fromBufferAttribute(i,x),l.fromBufferAttribute(i,m),a.add(h),c.add(h),l.add(h),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(x,c.x,c.y,c.z),i.setXYZ(m,l.x,l.y,l.z)}else for(let u=0,d=e.count;u<d;u+=3)s.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),o.fromBufferAttribute(e,u+2),h.subVectors(o,r),f.subVectors(s,r),h.cross(f),i.setXYZ(u+0,h.x,h.y,h.z),i.setXYZ(u+1,h.x,h.y,h.z),i.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)en.fromBufferAttribute(t,e),en.normalize(),t.setXYZ(e,en.x,en.y,en.z)}toNonIndexed(){function t(a,c){let l=a.array,h=a.itemSize,f=a.normalized,u=new l.constructor(c.length*h),d=0,g=0;for(let x=0,m=c.length;x<m;x++){a.isInterleavedBufferAttribute?d=c[x]*a.data.stride+a.offset:d=c[x]*h;for(let p=0;p<h;p++)u[g++]=l[d++]}return new se(u,h,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new n,i=this.index.array,s=this.attributes;for(let a in s){let c=s[a],l=t(c,i);e.setAttribute(a,l)}let r=this.morphAttributes;for(let a in r){let c=[],l=r[a];for(let h=0,f=l.length;h<f;h++){let u=l[h],d=t(u,i);c.push(d)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let i=this.attributes;for(let c in i){let l=i[c];t.data.attributes[c]=l.toJSON(t.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let f=0,u=l.length;f<u;f++){let d=l[f];h.push(d.toJSON(t.data))}h.length>0&&(s[c]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone());let s=t.attributes;for(let l in s){let h=s[l];this.setAttribute(l,h.clone(e))}let r=t.morphAttributes;for(let l in r){let h=[],f=r[l];for(let u=0,d=f.length;u<d;u++)h.push(f[u].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let l=0,h=o.length;l<h;l++){let f=o[l];this.addGroup(f.start,f.count,f.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},ju=new Ve,vs=new Ts,sa=new ws,Ku=new N,ra=new N,oa=new N,aa=new N,Kc=new N,la=new N,Ju=new N,ca=new N,Ze=class extends Ln{constructor(t=new Se,e=new Es){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){la.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=a[c],f=r[c];h!==0&&(Kc.fromBufferAttribute(f,t),o?la.addScaledVector(Kc,h):la.addScaledVector(Kc.sub(e),h))}e.add(la)}return e}raycast(t,e){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),sa.copy(i.boundingSphere),sa.applyMatrix4(r),vs.copy(t.ray).recast(t.near),!(sa.containsPoint(vs.origin)===!1&&(vs.intersectSphere(sa,Ku)===null||vs.origin.distanceToSquared(Ku)>(t.far-t.near)**2))&&(ju.copy(r).invert(),vs.copy(t.ray).applyMatrix4(ju),!(i.boundingBox!==null&&vs.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,vs)))}_computeIntersections(t,e,i){let s,r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,f=r.attributes.normal,u=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,x=u.length;g<x;g++){let m=u[g],p=o[m.materialIndex],E=Math.max(m.start,d.start),w=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let b=E,v=w;b<v;b+=3){let y=a.getX(b),T=a.getX(b+1),S=a.getX(b+2);s=ha(this,p,t,i,l,h,f,y,T,S),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,d.start),x=Math.min(a.count,d.start+d.count);for(let m=g,p=x;m<p;m+=3){let E=a.getX(m),w=a.getX(m+1),b=a.getX(m+2);s=ha(this,o,t,i,l,h,f,E,w,b),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,x=u.length;g<x;g++){let m=u[g],p=o[m.materialIndex],E=Math.max(m.start,d.start),w=Math.min(c.count,Math.min(m.start+m.count,d.start+d.count));for(let b=E,v=w;b<v;b+=3){let y=b,T=b+1,S=b+2;s=ha(this,p,t,i,l,h,f,y,T,S),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,d.start),x=Math.min(c.count,d.start+d.count);for(let m=g,p=x;m<p;m+=3){let E=m,w=m+1,b=m+2;s=ha(this,o,t,i,l,h,f,E,w,b),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}};function u0(n,t,e,i,s,r,o,a){let c;if(t.side===wn?c=i.intersectTriangle(o,r,s,!0,a):c=i.intersectTriangle(s,r,o,t.side===Di,a),c===null)return null;ca.copy(a),ca.applyMatrix4(n.matrixWorld);let l=e.ray.origin.distanceTo(ca);return l<e.near||l>e.far?null:{distance:l,point:ca.clone(),object:n}}function ha(n,t,e,i,s,r,o,a,c,l){n.getVertexPosition(a,ra),n.getVertexPosition(c,oa),n.getVertexPosition(l,aa);let h=u0(n,t,e,i,ra,oa,aa,Ju);if(h){let f=new N;Pi.getBarycoord(Ju,ra,oa,aa,f),s&&(h.uv=Pi.getInterpolatedAttribute(s,a,c,l,f,new At)),r&&(h.uv1=Pi.getInterpolatedAttribute(r,a,c,l,f,new At)),o&&(h.normal=Pi.getInterpolatedAttribute(o,a,c,l,f,new N),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let u={a,b:c,c:l,normal:new N,materialIndex:0};Pi.getNormal(ra,oa,aa,u.normal),h.face=u,h.barycoord=f}return h}var gr=class n extends Se{constructor(t=1,e=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let c=[],l=[],h=[],f=[],u=0,d=0;g("z","y","x",-1,-1,i,e,t,o,r,0),g("z","y","x",1,-1,i,e,-t,o,r,1),g("x","z","y",1,1,t,i,e,s,o,2),g("x","z","y",1,-1,t,i,-e,s,o,3),g("x","y","z",1,-1,t,e,i,s,r,4),g("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(c),this.setAttribute("position",new pe(l,3)),this.setAttribute("normal",new pe(h,3)),this.setAttribute("uv",new pe(f,2));function g(x,m,p,E,w,b,v,y,T,S,M){let _=b/T,A=v/S,R=b/2,L=v/2,I=y/2,D=T+1,U=S+1,z=0,k=0,J=new N;for(let Y=0;Y<U;Y++){let at=Y*A-L;for(let lt=0;lt<D;lt++){let bt=lt*_-R;J[x]=bt*E,J[m]=at*w,J[p]=I,l.push(J.x,J.y,J.z),J[x]=0,J[m]=0,J[p]=y>0?1:-1,h.push(J.x,J.y,J.z),f.push(lt/T),f.push(1-Y/S),z+=1}}for(let Y=0;Y<S;Y++)for(let at=0;at<T;at++){let lt=u+at+D*Y,bt=u+at+D*(Y+1),ft=u+(at+1)+D*(Y+1),_t=u+(at+1)+D*Y;c.push(lt,bt,_t),c.push(bt,ft,_t),k+=6}a.addGroup(d,k,M),d+=k,u+=z}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function Fs(n){let t={};for(let e in n){t[e]={};for(let i in n[e]){let s=n[e][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone():Array.isArray(s)?t[e][i]=s.slice():t[e][i]=s}}return t}function _n(n){let t={};for(let e=0;e<n.length;e++){let i=Fs(n[e]);for(let s in i)t[s]=i[s]}return t}function f0(n){let t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function Ah(n){let t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ue.workingColorSpace}var Oi={clone:Fs,merge:_n},d0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,p0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,he=class extends Fi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=d0,this.fragmentShader=p0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Fs(t.uniforms),this.uniformsGroups=f0(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}},ho=class extends Ln{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ve,this.projectionMatrix=new Ve,this.projectionMatrixInverse=new Ve,this.coordinateSystem=ai,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Ki=new N,Qu=new At,tf=new At,gn=class extends ho{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=dr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(to*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return dr*2*Math.atan(Math.tan(to*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){Ki.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Ki.x,Ki.y).multiplyScalar(-t/Ki.z),Ki.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ki.x,Ki.y).multiplyScalar(-t/Ki.z)}getViewSize(t,e){return this.getViewBounds(t,Qu,tf),e.subVectors(tf,Qu)}setViewOffset(t,e,i,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(to*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,e-=o.offsetY*i/l,s*=o.width/c,i*=o.height/l}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},rr=-90,or=1,Ra=class extends Ln{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new gn(rr,or,t,e);s.layers=this.layers,this.add(s);let r=new gn(rr,or,t,e);r.layers=this.layers,this.add(r);let o=new gn(rr,or,t,e);o.layers=this.layers,this.add(o);let a=new gn(rr,or,t,e);a.layers=this.layers,this.add(a);let c=new gn(rr,or,t,e);c.layers=this.layers,this.add(c);let l=new gn(rr,or,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[i,s,r,o,a,c]=e;for(let l of e)this.remove(l);if(t===ai)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===so)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,c,l,h]=this.children,f=t.getRenderTarget(),u=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,s),t.render(e,r),t.setRenderTarget(i,1,s),t.render(e,o),t.setRenderTarget(i,2,s),t.render(e,a),t.setRenderTarget(i,3,s),t.render(e,c),t.setRenderTarget(i,4,s),t.render(e,l),i.texture.generateMipmaps=x,t.setRenderTarget(i,5,s),t.render(e,h),t.setRenderTarget(f,u,d),t.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},uo=class extends Sn{constructor(t=[],e=Ls,i,s,r,o,a,c,l,h){super(t,e,i,s,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Pa=class extends xn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new uo(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new gr(5,5,5),r=new he({name:"CubemapFromEquirect",uniforms:Fs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:wn,blending:ci});r.uniforms.tEquirect.value=e;let o=new Ze(s,r),a=e.minFilter;return e.minFilter===ss&&(e.minFilter=li),new Ra(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,i=!0,s=!0){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,s);t.setRenderTarget(r)}},nn=class extends Ln{constructor(){super(),this.isGroup=!0,this.type="Group"}},m0={type:"move"},xr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new nn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new nn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new nn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(let x of t.hand.values()){let m=e.getJointPose(x,i),p=this._getHandJoint(l,x);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=l.joints["index-finger-tip"],f=l.joints["thumb-tip"],u=h.position.distanceTo(f.position),d=.02,g=.005;l.inputState.pinching&&u>d+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&u<=d-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(m0)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let i=new nn;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}};var fo=class extends Ln{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new pi,this.environmentIntensity=1,this.environmentRotation=new pi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}},Ia=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Ta,this.updateRanges=[],this.version=0,this.uuid=Ii()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[i+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ii()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(e,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ii()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},bn=new N,po=class n{constructor(t,e,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,i=this.data.count;e<i;e++)bn.fromBufferAttribute(this,e),bn.applyMatrix4(t),this.setXYZ(e,bn.x,bn.y,bn.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)bn.fromBufferAttribute(this,e),bn.applyNormalMatrix(t),this.setXYZ(e,bn.x,bn.y,bn.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)bn.fromBufferAttribute(this,e),bn.transformDirection(t),this.setXYZ(e,bn.x,bn.y,bn.z);return this}getComponent(t,e){let i=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(i=oi(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=be(i,this.array)),this.data.array[t*this.data.stride+this.offset+e]=i,this}setX(t,e){return this.normalized&&(e=be(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=be(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=be(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=be(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=oi(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=oi(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=oi(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=oi(e,this.array)),e}setXY(t,e,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=be(e,this.array),i=be(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this}setXYZ(t,e,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=be(e,this.array),i=be(i,this.array),s=be(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=be(e,this.array),i=be(i,this.array),s=be(s,this.array),r=be(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new se(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new n(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},As=class extends Fi{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Qt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},ar,Kr=new N,lr=new N,cr=new N,hr=new At,Jr=new At,Wf=new Ve,ua=new N,Qr=new N,fa=new N,ef=new At,Jc=new At,nf=new At,vr=class extends Ln{constructor(t=new As){if(super(),this.isSprite=!0,this.type="Sprite",ar===void 0){ar=new Se;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new Ia(e,5);ar.setIndex([0,1,2,0,2,3]),ar.setAttribute("position",new po(i,3,0,!1)),ar.setAttribute("uv",new po(i,2,3,!1))}this.geometry=ar,this.material=t,this.center=new At(.5,.5),this.count=1}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),lr.setFromMatrixScale(this.matrixWorld),Wf.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),cr.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&lr.multiplyScalar(-cr.z);let i=this.material.rotation,s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));let o=this.center;da(ua.set(-.5,-.5,0),cr,o,lr,s,r),da(Qr.set(.5,-.5,0),cr,o,lr,s,r),da(fa.set(.5,.5,0),cr,o,lr,s,r),ef.set(0,0),Jc.set(1,0),nf.set(1,1);let a=t.ray.intersectTriangle(ua,Qr,fa,!1,Kr);if(a===null&&(da(Qr.set(-.5,.5,0),cr,o,lr,s,r),Jc.set(0,1),a=t.ray.intersectTriangle(ua,fa,Qr,!1,Kr),a===null))return;let c=t.ray.origin.distanceTo(Kr);c<t.near||c>t.far||e.push({distance:c,point:Kr.clone(),uv:Pi.getInterpolation(Kr,ua,Qr,fa,ef,Jc,nf,new At),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function da(n,t,e,i,s,r){hr.subVectors(n,e).addScalar(.5).multiply(i),s!==void 0?(Jr.x=r*hr.x-s*hr.y,Jr.y=s*hr.x+r*hr.y):Jr.copy(hr),n.copy(t),n.x+=Jr.x,n.y+=Jr.y,n.applyMatrix4(Wf)}var Cs=class extends Sn{constructor(t=null,e=1,i=1,s,r,o,a,c,l=sn,h=sn,f,u){super(null,o,a,c,l,h,s,r,f,u),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Rs=class extends se{constructor(t,e,i,s=1){super(t,e,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}};var Qc=new N,g0=new N,x0=new Jt,jn=class{constructor(t=new N(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){let s=Qc.subVectors(i,e).cross(g0.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let i=t.delta(Qc),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(i,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let i=e||x0.getNormalMatrix(t),s=this.coplanarPoint(Qc).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},ys=new ws,v0=new At(.5,.5),pa=new N,mo=class{constructor(t=new jn,e=new jn,i=new jn,s=new jn,r=new jn,o=new jn){this.planes=[t,e,i,s,r,o]}set(t,e,i,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=ai,i=!1){let s=this.planes,r=t.elements,o=r[0],a=r[1],c=r[2],l=r[3],h=r[4],f=r[5],u=r[6],d=r[7],g=r[8],x=r[9],m=r[10],p=r[11],E=r[12],w=r[13],b=r[14],v=r[15];if(s[0].setComponents(l-o,d-h,p-g,v-E).normalize(),s[1].setComponents(l+o,d+h,p+g,v+E).normalize(),s[2].setComponents(l+a,d+f,p+x,v+w).normalize(),s[3].setComponents(l-a,d-f,p-x,v-w).normalize(),i)s[4].setComponents(c,u,m,b).normalize(),s[5].setComponents(l-c,d-u,p-m,v-b).normalize();else if(s[4].setComponents(l-c,d-u,p-m,v-b).normalize(),e===ai)s[5].setComponents(l+c,d+u,p+m,v+b).normalize();else if(e===so)s[5].setComponents(c,u,m,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ys.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ys.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ys)}intersectsSprite(t){ys.center.set(0,0,0);let e=v0.distanceTo(t.center);return ys.radius=.7071067811865476+e,ys.applyMatrix4(t.matrixWorld),this.intersectsSphere(ys)}intersectsSphere(t){let e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let i=0;i<6;i++){let s=e[i];if(pa.x=s.normal.x>0?t.max.x:t.min.x,pa.y=s.normal.y>0?t.max.y:t.min.y,pa.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(pa)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var La=class extends Fi{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Qt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},sf=new Ve,ah=new Ts,ma=new ws,ga=new N,rn=class extends Ln{constructor(t=new Se,e=new La){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let i=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ma.copy(i.boundingSphere),ma.applyMatrix4(s),ma.radius+=r,t.ray.intersectsSphere(ma)===!1)return;sf.copy(s).invert(),ah.copy(t.ray).applyMatrix4(sf);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=i.index,f=i.attributes.position;if(l!==null){let u=Math.max(0,o.start),d=Math.min(l.count,o.start+o.count);for(let g=u,x=d;g<x;g++){let m=l.getX(g);ga.fromBufferAttribute(f,m),rf(ga,m,c,s,t,e,this)}}else{let u=Math.max(0,o.start),d=Math.min(f.count,o.start+o.count);for(let g=u,x=d;g<x;g++)ga.fromBufferAttribute(f,g),rf(ga,g,c,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function rf(n,t,e,i,s,r,o){let a=ah.distanceSqToPoint(n);if(a<e){let c=new N;ah.closestPointToPoint(n,c),c.applyMatrix4(i);let l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var go=class extends Sn{constructor(t,e,i,s,r,o,a,c,l){super(t,e,i,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},xo=class extends Sn{constructor(t,e,i=rs,s,r,o,a=sn,c=sn,l,h=fr,f=1){if(h!==fr&&h!==Sr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:t,height:e,depth:f};super(u,s,r,o,a,c,h,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new mr(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},vo=class extends Sn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}};var Da=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(t,e){let i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],i,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)i=this.getPoint(o/t),r+=i.distanceTo(s),e.push(r),s=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let i=this.getLengths(),s=0,r=i.length,o;e?o=e:o=t*i[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=i[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,i[s]===o)return s/(r-1);let h=i[s],u=i[s+1]-h,d=(o-h)/u;return(s+d)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),c=e||(o.isVector2?new At:new N);return c.copy(a).sub(o).normalize(),c}getTangentAt(t,e){let i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e=!1){let i=new N,s=[],r=[],o=[],a=new N,c=new Ve;for(let d=0;d<=t;d++){let g=d/t;s[d]=this.getTangentAt(g,new N)}r[0]=new N,o[0]=new N;let l=Number.MAX_VALUE,h=Math.abs(s[0].x),f=Math.abs(s[0].y),u=Math.abs(s[0].z);h<=l&&(l=h,i.set(1,0,0)),f<=l&&(l=f,i.set(0,1,0)),u<=l&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let d=1;d<=t;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(s[d-1],s[d]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(ee(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(c.makeRotationAxis(a,g))}o[d].crossVectors(s[d],r[d])}if(e===!0){let d=Math.acos(ee(r[0].dot(r[t]),-1,1));d/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(d=-d);for(let g=1;g<=t;g++)r[g].applyMatrix4(c.makeRotationAxis(s[g],d*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}};function Ch(){let n=0,t=0,e=0,i=0;function s(r,o,a,c){n=r,t=a,e=-3*r+3*o-2*a-c,i=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,h,f){let u=(o-r)/l-(a-r)/(l+h)+(a-o)/h,d=(a-o)/h-(c-o)/(h+f)+(c-a)/f;u*=h,d*=h,s(o,a,u,d)},calc:function(r){let o=r*r,a=o*r;return n+t*r+e*o+i*a}}}var xa=new N,th=new Ch,eh=new Ch,nh=new Ch,$e=class extends Da{constructor(t=[],e=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=s}getPoint(t,e=new N){let i=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,h;this.closed||a>0?l=s[(a-1)%r]:(xa.subVectors(s[0],s[1]).add(s[0]),l=xa);let f=s[a%r],u=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(xa.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=xa),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,g=Math.pow(l.distanceToSquared(f),d),x=Math.pow(f.distanceToSquared(u),d),m=Math.pow(u.distanceToSquared(h),d);x<1e-4&&(x=1),g<1e-4&&(g=x),m<1e-4&&(m=x),th.initNonuniformCatmullRom(l.x,f.x,u.x,h.x,g,x,m),eh.initNonuniformCatmullRom(l.y,f.y,u.y,h.y,g,x,m),nh.initNonuniformCatmullRom(l.z,f.z,u.z,h.z,g,x,m)}else this.curveType==="catmullrom"&&(th.initCatmullRom(l.x,f.x,u.x,h.x,this.tension),eh.initCatmullRom(l.y,f.y,u.y,h.y,this.tension),nh.initCatmullRom(l.z,f.z,u.z,h.z,this.tension));return i.set(th.calc(c),eh.calc(c),nh.calc(c)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(new N().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};var yo=class n extends Se{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(i),c=Math.floor(s),l=a+1,h=c+1,f=t/a,u=e/c,d=[],g=[],x=[],m=[];for(let p=0;p<h;p++){let E=p*u-o;for(let w=0;w<l;w++){let b=w*f-r;g.push(b,-E,0),x.push(0,0,1),m.push(w/a),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let E=0;E<a;E++){let w=E+l*p,b=E+l*(p+1),v=E+1+l*(p+1),y=E+1+l*p;d.push(w,b,y),d.push(b,v,y)}this.setIndex(d),this.setAttribute("position",new pe(g,3)),this.setAttribute("normal",new pe(x,3)),this.setAttribute("uv",new pe(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.widthSegments,t.heightSegments)}};var _o=class extends he{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var Fa=class extends Fi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Pf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Na=class extends Fi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function va(n,t){return!n||n.constructor===t?n:typeof t.BYTES_PER_ELEMENT=="number"?new t(n):Array.prototype.slice.call(n)}function y0(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}var Ps=class{constructor(t,e,i,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(i),this.sampleValues=e,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,i=this._cachedIndex,s=e[i],r=e[i-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=i+2;;){if(s===void 0){if(t<r)break i;return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=e[++i],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(i=2,r=a);for(let c=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===c)break;if(s=r,r=e[--i-1],t>=r)break t}o=i,i=0;break e}break n}for(;i<o;){let a=i+o>>>1;t<e[a]?o=a:i=a+1}if(s=e[i],r=e[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=i[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Ua=class extends Ps{constructor(t,e,i,s){super(t,e,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ih,endingEnd:ih}}intervalChanged_(t,e,i){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],c=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case sh:r=t,a=2*e-i;break;case rh:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=i}if(c===void 0)switch(this.getSettings_().endingEnd){case sh:o=t,c=2*i-e;break;case rh:o=1,c=i+s[1]-s[0];break;default:o=t-1,c=e}let l=(i-e)*.5,h=this.valueSize;this._weightPrev=l/(e-a),this._weightNext=l/(c-i),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=this._offsetPrev,f=this._offsetNext,u=this._weightPrev,d=this._weightNext,g=(i-e)/(s-e),x=g*g,m=x*g,p=-u*m+2*u*x-u*g,E=(1+u)*m+(-1.5-2*u)*x+(-.5+u)*g+1,w=(-1-d)*m+(1.5+d)*x+.5*g,b=d*m-d*x;for(let v=0;v!==a;++v)r[v]=p*o[h+v]+E*o[l+v]+w*o[c+v]+b*o[f+v];return r}},Oa=class extends Ps{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=(i-e)/(s-e),f=1-h;for(let u=0;u!==a;++u)r[u]=o[l+u]*f+o[c+u]*h;return r}},Ba=class extends Ps{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Hn=class{constructor(t,e,i,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=va(e,this.TimeBufferType),this.values=va(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,i;if(e.toJSON!==this.toJSON)i=e.toJSON(t);else{i={name:t.name,times:va(t.times,Array),values:va(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(i.interpolation=s)}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new Ba(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Oa(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Ua(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case no:e=this.InterpolantFactoryMethodDiscrete;break;case wa:e=this.InterpolantFactoryMethodLinear;break;case ya:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return no;case this.InterpolantFactoryMethodLinear:return wa;case this.InterpolantFactoryMethodSmooth:return ya}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]*=t}return this}trim(t,e){let i=this.times,s=i.length,r=0,o=s-1;for(;r!==s&&i[r]<t;)++r;for(;o!==-1&&i[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,s=this.values,r=i.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let c=i[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),t=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),t=!1;break}o=c}if(s!==void 0&&y0(s))for(let a=0,c=s.length;a!==c;++a){let l=s[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===ya,r=t.length-1,o=1;for(let a=1;a<r;++a){let c=!1,l=t[a],h=t[a+1];if(l!==h&&(a!==1||l!==t[0]))if(s)c=!0;else{let f=a*i,u=f-i,d=f+i;for(let g=0;g!==i;++g){let x=e[f+g];if(x!==e[u+g]||x!==e[d+g]){c=!0;break}}}if(c){if(a!==o){t[o]=t[a];let f=a*i,u=o*i;for(let d=0;d!==i;++d)e[u+d]=e[f+d]}++o}}if(r>0){t[o]=t[r];for(let a=r*i,c=o*i,l=0;l!==i;++l)e[c+l]=e[a+l];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*i)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),i=this.constructor,s=new i(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};Hn.prototype.ValueTypeName="";Hn.prototype.TimeBufferType=Float32Array;Hn.prototype.ValueBufferType=Float32Array;Hn.prototype.DefaultInterpolation=wa;var ts=class extends Hn{constructor(t,e,i){super(t,e,i)}};ts.prototype.ValueTypeName="bool";ts.prototype.ValueBufferType=Array;ts.prototype.DefaultInterpolation=no;ts.prototype.InterpolantFactoryMethodLinear=void 0;ts.prototype.InterpolantFactoryMethodSmooth=void 0;var za=class extends Hn{constructor(t,e,i,s){super(t,e,i,s)}};za.prototype.ValueTypeName="color";var ka=class extends Hn{constructor(t,e,i,s){super(t,e,i,s)}};ka.prototype.ValueTypeName="number";var Va=class extends Ps{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(i-e)/(s-e),l=t*a;for(let h=l+a;l!==h;l+=4)In.slerpFlat(r,0,o,l-a,o,l,c);return r}},Mo=class extends Hn{constructor(t,e,i,s){super(t,e,i,s)}InterpolantFactoryMethodLinear(t){return new Va(this.times,this.values,this.getValueSize(),t)}};Mo.prototype.ValueTypeName="quaternion";Mo.prototype.InterpolantFactoryMethodSmooth=void 0;var es=class extends Hn{constructor(t,e,i){super(t,e,i)}};es.prototype.ValueTypeName="string";es.prototype.ValueBufferType=Array;es.prototype.DefaultInterpolation=no;es.prototype.InterpolantFactoryMethodLinear=void 0;es.prototype.InterpolantFactoryMethodSmooth=void 0;var Ha=class extends Hn{constructor(t,e,i,s){super(t,e,i,s)}};Ha.prototype.ValueTypeName="vector";var Ga=class{constructor(t,e,i){let s=this,r=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this.abortController=new AbortController,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,f){return l.push(h,f),this},this.removeHandler=function(h){let f=l.indexOf(h);return f!==-1&&l.splice(f,2),this},this.getHandler=function(h){for(let f=0,u=l.length;f<u;f+=2){let d=l[f],g=l[f+1];if(d.global&&(d.lastIndex=0),d.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}},Xf=new Ga,Wa=class{constructor(t){this.manager=t!==void 0?t:Xf,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let i=this;return new Promise(function(s,r){i.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};Wa.DEFAULT_MATERIAL_NAME="__DEFAULT";var yr=class extends ho{constructor(t=-1,e=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-t,o=i+t,a=s+e,c=s-e;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}};var Is=class extends Se{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(t){return super.copy(t),this.instanceCount=t.instanceCount,this}toJSON(){let t=super.toJSON();return t.instanceCount=this.instanceCount,t.isInstancedBufferGeometry=!0,t}};var Xa=class extends gn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}},bo=class{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let e=performance.now();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}};var Rh="\\[\\]\\.:\\/",_0=new RegExp("["+Rh+"]","g"),Ph="[^"+Rh+"]",M0="[^"+Rh.replace("\\.","")+"]",b0=/((?:WC+[\/:])*)/.source.replace("WC",Ph),S0=/(WCOD+)?/.source.replace("WCOD",M0),w0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Ph),T0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Ph),E0=new RegExp("^"+b0+S0+w0+T0+"$"),A0=["material","materials","bones","map"],lh=class{constructor(t,e,i){let s=i||De.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(t,e)}setValue(t,e){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].unbind()}},De=class n{constructor(t,e,i){this.path=e,this.parsedPath=i||n.parseTrackName(e),this.node=n.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,i){return t&&t.isAnimationObjectGroup?new n.Composite(t,e,i):new n(t,e,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(_0,"")}static parseTrackName(t){let e=E0.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);A0.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(e);if(i!==void 0)return i}if(t.children){let i=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let c=i(a.children);if(c)return c}return null},s=i(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)t[e++]=i[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,i=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=n.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let l=e.objectIndex;switch(i){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===l){l=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(l!==void 0){if(t[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}let o=t[s];if(o===void 0){let l=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};De.Composite=lh;De.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};De.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};De.prototype.GetterByBindingType=[De.prototype._getValue_direct,De.prototype._getValue_array,De.prototype._getValue_arrayElement,De.prototype._getValue_toArray];De.prototype.SetterByBindingTypeAndVersioning=[[De.prototype._setValue_direct,De.prototype._setValue_direct_setNeedsUpdate,De.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[De.prototype._setValue_array,De.prototype._setValue_array_setNeedsUpdate,De.prototype._setValue_array_setMatrixWorldNeedsUpdate],[De.prototype._setValue_arrayElement,De.prototype._setValue_arrayElement_setNeedsUpdate,De.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[De.prototype._setValue_fromArray,De.prototype._setValue_fromArray_setNeedsUpdate,De.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var G2=new Float32Array(1);var mi=class{constructor(t=1,e=0,i=0){this.radius=t,this.phi=e,this.theta=i}set(t,e,i){return this.radius=t,this.phi=e,this.theta=i,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=ee(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,i){return this.radius=Math.sqrt(t*t+e*e+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,i),this.phi=Math.acos(ee(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var So=class extends fi{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){if(t===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}};function Ih(n,t,e,i){let s=C0(i);switch(e){case yh:return n*t;case Mh:return n*t/s.components*s.byteLength;case ul:return n*t/s.components*s.byteLength;case bh:return n*t*2/s.components*s.byteLength;case fl:return n*t*2/s.components*s.byteLength;case _h:return n*t*3/s.components*s.byteLength;case yn:return n*t*4/s.components*s.byteLength;case dl:return n*t*4/s.components*s.byteLength;case Eo:case Ao:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Co:case Ro:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case ml:case xl:return Math.max(n,16)*Math.max(t,8)/4;case pl:case gl:return Math.max(n,8)*Math.max(t,8)/2;case vl:case yl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case _l:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Ml:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case bl:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case Sl:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case wl:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case Tl:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case El:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case Al:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case Cl:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case Rl:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case Pl:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case Il:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case Ll:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case Dl:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case Fl:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case Nl:case Ul:case Ol:return Math.ceil(n/4)*Math.ceil(t/4)*16;case Bl:case zl:return Math.ceil(n/4)*Math.ceil(t/4)*8;case kl:case Vl:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function C0(n){switch(n){case xi:case mh:return{byteLength:1,components:1};case Mr:case gh:case Kn:return{byteLength:2,components:1};case cl:case hl:return{byteLength:2,components:4};case rs:case ll:case Dn:return{byteLength:4,components:1};case xh:case vh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"180"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="180");function md(){let n=null,t=!1,e=null,i=null;function s(r,o){e(r,o),i=n.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function P0(n){let t=new WeakMap;function e(a,c){let l=a.array,h=a.usage,f=l.byteLength,u=n.createBuffer();n.bindBuffer(c,u),n.bufferData(c,l,h),a.onUploadCallback();let d;if(l instanceof Float32Array)d=n.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)d=n.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?d=n.HALF_FLOAT:d=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)d=n.SHORT;else if(l instanceof Uint32Array)d=n.UNSIGNED_INT;else if(l instanceof Int32Array)d=n.INT;else if(l instanceof Int8Array)d=n.BYTE;else if(l instanceof Uint8Array)d=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)d=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:u,type:d,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:f}}function i(a,c,l){let h=c.array,f=c.updateRanges;if(n.bindBuffer(l,a),f.length===0)n.bufferSubData(l,0,h);else{f.sort((d,g)=>d.start-g.start);let u=0;for(let d=1;d<f.length;d++){let g=f[u],x=f[d];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++u,f[u]=x)}f.length=u+1;for(let d=0,g=f.length;d<g;d++){let x=f[d];n.bufferSubData(l,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=t.get(a);c&&(n.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}var I0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,L0=`#ifdef USE_ALPHAHASH
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
#endif`,D0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,F0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,N0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,U0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,O0=`#ifdef USE_AOMAP
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
#endif`,B0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,z0=`#ifdef USE_BATCHING
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
#endif`,k0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,V0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,H0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,G0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,W0=`#ifdef USE_IRIDESCENCE
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
#endif`,X0=`#ifdef USE_BUMPMAP
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
#endif`,q0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Y0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Z0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,$0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,j0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,K0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,J0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Q0=`#if defined( USE_COLOR_ALPHA )
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
#endif`,tg=`#define PI 3.141592653589793
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
} // validated`,eg=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,ng=`vec3 transformedNormal = objectNormal;
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
#endif`,ig=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,sg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,rg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,og=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ag="gl_FragColor = linearToOutputTexel( gl_FragColor );",lg=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,cg=`#ifdef USE_ENVMAP
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
#endif`,hg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,ug=`#ifdef USE_ENVMAP
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
#endif`,fg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,dg=`#ifdef USE_ENVMAP
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
#endif`,pg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,mg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,gg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,xg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,vg=`#ifdef USE_GRADIENTMAP
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
}`,yg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,_g=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Mg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,bg=`uniform bool receiveShadow;
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
#endif`,Sg=`#ifdef USE_ENVMAP
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
#endif`,wg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Tg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Eg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ag=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Cg=`PhysicalMaterial material;
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
#endif`,Rg=`struct PhysicalMaterial {
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
}`,Pg=`
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
#endif`,Ig=`#if defined( RE_IndirectDiffuse )
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
#endif`,Lg=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Dg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Fg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ng=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ug=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Og=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Bg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,zg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,kg=`#if defined( USE_POINTS_UV )
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
#endif`,Vg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Hg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Gg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Wg=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Xg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,qg=`#ifdef USE_MORPHTARGETS
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
#endif`,Yg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Zg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,$g=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,jg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Kg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Jg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Qg=`#ifdef USE_NORMALMAP
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
#endif`,t1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,e1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,n1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,i1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,s1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,r1=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,o1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,a1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,l1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,c1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,h1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,u1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,f1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,d1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,p1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,m1=`float getShadowMask() {
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
}`,g1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,x1=`#ifdef USE_SKINNING
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
#endif`,v1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,y1=`#ifdef USE_SKINNING
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
#endif`,_1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,M1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,b1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,S1=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,w1=`#ifdef USE_TRANSMISSION
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
#endif`,T1=`#ifdef USE_TRANSMISSION
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
#endif`,E1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,A1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,C1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,R1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,P1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,I1=`uniform sampler2D t2D;
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
}`,L1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,D1=`#ifdef ENVMAP_TYPE_CUBE
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
}`,F1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,N1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,U1=`#include <common>
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
}`,O1=`#if DEPTH_PACKING == 3200
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
}`,B1=`#define DISTANCE
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
}`,z1=`#define DISTANCE
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
}`,k1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,V1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,H1=`uniform float scale;
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
}`,G1=`uniform vec3 diffuse;
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
}`,W1=`#include <common>
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
}`,X1=`uniform vec3 diffuse;
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
}`,q1=`#define LAMBERT
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
}`,Y1=`#define LAMBERT
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
}`,Z1=`#define MATCAP
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
}`,$1=`#define MATCAP
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
}`,j1=`#define NORMAL
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
}`,K1=`#define NORMAL
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
}`,J1=`#define PHONG
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
}`,Q1=`#define PHONG
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
}`,tx=`#define STANDARD
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
}`,ex=`#define STANDARD
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
}`,nx=`#define TOON
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
}`,ix=`#define TOON
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
}`,sx=`uniform float size;
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
}`,rx=`uniform vec3 diffuse;
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
}`,ox=`#include <common>
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
}`,ax=`uniform vec3 color;
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
}`,lx=`uniform float rotation;
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
}`,cx=`uniform vec3 diffuse;
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
}`,ne={alphahash_fragment:I0,alphahash_pars_fragment:L0,alphamap_fragment:D0,alphamap_pars_fragment:F0,alphatest_fragment:N0,alphatest_pars_fragment:U0,aomap_fragment:O0,aomap_pars_fragment:B0,batching_pars_vertex:z0,batching_vertex:k0,begin_vertex:V0,beginnormal_vertex:H0,bsdfs:G0,iridescence_fragment:W0,bumpmap_pars_fragment:X0,clipping_planes_fragment:q0,clipping_planes_pars_fragment:Y0,clipping_planes_pars_vertex:Z0,clipping_planes_vertex:$0,color_fragment:j0,color_pars_fragment:K0,color_pars_vertex:J0,color_vertex:Q0,common:tg,cube_uv_reflection_fragment:eg,defaultnormal_vertex:ng,displacementmap_pars_vertex:ig,displacementmap_vertex:sg,emissivemap_fragment:rg,emissivemap_pars_fragment:og,colorspace_fragment:ag,colorspace_pars_fragment:lg,envmap_fragment:cg,envmap_common_pars_fragment:hg,envmap_pars_fragment:ug,envmap_pars_vertex:fg,envmap_physical_pars_fragment:Sg,envmap_vertex:dg,fog_vertex:pg,fog_pars_vertex:mg,fog_fragment:gg,fog_pars_fragment:xg,gradientmap_pars_fragment:vg,lightmap_pars_fragment:yg,lights_lambert_fragment:_g,lights_lambert_pars_fragment:Mg,lights_pars_begin:bg,lights_toon_fragment:wg,lights_toon_pars_fragment:Tg,lights_phong_fragment:Eg,lights_phong_pars_fragment:Ag,lights_physical_fragment:Cg,lights_physical_pars_fragment:Rg,lights_fragment_begin:Pg,lights_fragment_maps:Ig,lights_fragment_end:Lg,logdepthbuf_fragment:Dg,logdepthbuf_pars_fragment:Fg,logdepthbuf_pars_vertex:Ng,logdepthbuf_vertex:Ug,map_fragment:Og,map_pars_fragment:Bg,map_particle_fragment:zg,map_particle_pars_fragment:kg,metalnessmap_fragment:Vg,metalnessmap_pars_fragment:Hg,morphinstance_vertex:Gg,morphcolor_vertex:Wg,morphnormal_vertex:Xg,morphtarget_pars_vertex:qg,morphtarget_vertex:Yg,normal_fragment_begin:Zg,normal_fragment_maps:$g,normal_pars_fragment:jg,normal_pars_vertex:Kg,normal_vertex:Jg,normalmap_pars_fragment:Qg,clearcoat_normal_fragment_begin:t1,clearcoat_normal_fragment_maps:e1,clearcoat_pars_fragment:n1,iridescence_pars_fragment:i1,opaque_fragment:s1,packing:r1,premultiplied_alpha_fragment:o1,project_vertex:a1,dithering_fragment:l1,dithering_pars_fragment:c1,roughnessmap_fragment:h1,roughnessmap_pars_fragment:u1,shadowmap_pars_fragment:f1,shadowmap_pars_vertex:d1,shadowmap_vertex:p1,shadowmask_pars_fragment:m1,skinbase_vertex:g1,skinning_pars_vertex:x1,skinning_vertex:v1,skinnormal_vertex:y1,specularmap_fragment:_1,specularmap_pars_fragment:M1,tonemapping_fragment:b1,tonemapping_pars_fragment:S1,transmission_fragment:w1,transmission_pars_fragment:T1,uv_pars_fragment:E1,uv_pars_vertex:A1,uv_vertex:C1,worldpos_vertex:R1,background_vert:P1,background_frag:I1,backgroundCube_vert:L1,backgroundCube_frag:D1,cube_vert:F1,cube_frag:N1,depth_vert:U1,depth_frag:O1,distanceRGBA_vert:B1,distanceRGBA_frag:z1,equirect_vert:k1,equirect_frag:V1,linedashed_vert:H1,linedashed_frag:G1,meshbasic_vert:W1,meshbasic_frag:X1,meshlambert_vert:q1,meshlambert_frag:Y1,meshmatcap_vert:Z1,meshmatcap_frag:$1,meshnormal_vert:j1,meshnormal_frag:K1,meshphong_vert:J1,meshphong_frag:Q1,meshphysical_vert:tx,meshphysical_frag:ex,meshtoon_vert:nx,meshtoon_frag:ix,points_vert:sx,points_frag:rx,shadow_vert:ox,shadow_frag:ax,sprite_vert:lx,sprite_frag:cx},wt={common:{diffuse:{value:new Qt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Jt},alphaMap:{value:null},alphaMapTransform:{value:new Jt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Jt}},envmap:{envMap:{value:null},envMapRotation:{value:new Jt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Jt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Jt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Jt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Jt},normalScale:{value:new At(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Jt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Jt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Jt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Jt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Qt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Qt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Jt},alphaTest:{value:0},uvTransform:{value:new Jt}},sprite:{diffuse:{value:new Qt(16777215)},opacity:{value:1},center:{value:new At(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Jt},alphaMap:{value:null},alphaMapTransform:{value:new Jt},alphaTest:{value:0}}},vi={basic:{uniforms:_n([wt.common,wt.specularmap,wt.envmap,wt.aomap,wt.lightmap,wt.fog]),vertexShader:ne.meshbasic_vert,fragmentShader:ne.meshbasic_frag},lambert:{uniforms:_n([wt.common,wt.specularmap,wt.envmap,wt.aomap,wt.lightmap,wt.emissivemap,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.fog,wt.lights,{emissive:{value:new Qt(0)}}]),vertexShader:ne.meshlambert_vert,fragmentShader:ne.meshlambert_frag},phong:{uniforms:_n([wt.common,wt.specularmap,wt.envmap,wt.aomap,wt.lightmap,wt.emissivemap,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.fog,wt.lights,{emissive:{value:new Qt(0)},specular:{value:new Qt(1118481)},shininess:{value:30}}]),vertexShader:ne.meshphong_vert,fragmentShader:ne.meshphong_frag},standard:{uniforms:_n([wt.common,wt.envmap,wt.aomap,wt.lightmap,wt.emissivemap,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.roughnessmap,wt.metalnessmap,wt.fog,wt.lights,{emissive:{value:new Qt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ne.meshphysical_vert,fragmentShader:ne.meshphysical_frag},toon:{uniforms:_n([wt.common,wt.aomap,wt.lightmap,wt.emissivemap,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.gradientmap,wt.fog,wt.lights,{emissive:{value:new Qt(0)}}]),vertexShader:ne.meshtoon_vert,fragmentShader:ne.meshtoon_frag},matcap:{uniforms:_n([wt.common,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.fog,{matcap:{value:null}}]),vertexShader:ne.meshmatcap_vert,fragmentShader:ne.meshmatcap_frag},points:{uniforms:_n([wt.points,wt.fog]),vertexShader:ne.points_vert,fragmentShader:ne.points_frag},dashed:{uniforms:_n([wt.common,wt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ne.linedashed_vert,fragmentShader:ne.linedashed_frag},depth:{uniforms:_n([wt.common,wt.displacementmap]),vertexShader:ne.depth_vert,fragmentShader:ne.depth_frag},normal:{uniforms:_n([wt.common,wt.bumpmap,wt.normalmap,wt.displacementmap,{opacity:{value:1}}]),vertexShader:ne.meshnormal_vert,fragmentShader:ne.meshnormal_frag},sprite:{uniforms:_n([wt.sprite,wt.fog]),vertexShader:ne.sprite_vert,fragmentShader:ne.sprite_frag},background:{uniforms:{uvTransform:{value:new Jt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ne.background_vert,fragmentShader:ne.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Jt}},vertexShader:ne.backgroundCube_vert,fragmentShader:ne.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ne.cube_vert,fragmentShader:ne.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ne.equirect_vert,fragmentShader:ne.equirect_frag},distanceRGBA:{uniforms:_n([wt.common,wt.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ne.distanceRGBA_vert,fragmentShader:ne.distanceRGBA_frag},shadow:{uniforms:_n([wt.lights,wt.fog,{color:{value:new Qt(0)},opacity:{value:1}}]),vertexShader:ne.shadow_vert,fragmentShader:ne.shadow_frag}};vi.physical={uniforms:_n([vi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Jt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Jt},clearcoatNormalScale:{value:new At(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Jt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Jt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Jt},sheen:{value:0},sheenColor:{value:new Qt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Jt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Jt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Jt},transmissionSamplerSize:{value:new At},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Jt},attenuationDistance:{value:0},attenuationColor:{value:new Qt(0)},specularColor:{value:new Qt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Jt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Jt},anisotropyVector:{value:new At},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Jt}}]),vertexShader:ne.meshphysical_vert,fragmentShader:ne.meshphysical_frag};var Hl={r:0,b:0,g:0},Ns=new pi,hx=new Ve;function ux(n,t,e,i,s,r,o){let a=new Qt(0),c=r===!0?0:1,l,h,f=null,u=0,d=null;function g(w){let b=w.isScene===!0?w.background:null;return b&&b.isTexture&&(b=(w.backgroundBlurriness>0?e:t).get(b)),b}function x(w){let b=!1,v=g(w);v===null?p(a,c):v&&v.isColor&&(p(v,1),b=!0);let y=n.xr.getEnvironmentBlendMode();y==="additive"?i.buffers.color.setClear(0,0,0,1,o):y==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||b)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(w,b){let v=g(b);v&&(v.isCubeTexture||v.mapping===wo)?(h===void 0&&(h=new Ze(new gr(1,1,1),new he({name:"BackgroundCubeMaterial",uniforms:Fs(vi.backgroundCube.uniforms),vertexShader:vi.backgroundCube.vertexShader,fragmentShader:vi.backgroundCube.fragmentShader,side:wn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(y,T,S){this.matrixWorld.copyPosition(S.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Ns.copy(b.backgroundRotation),Ns.x*=-1,Ns.y*=-1,Ns.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Ns.y*=-1,Ns.z*=-1),h.material.uniforms.envMap.value=v,h.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(hx.makeRotationFromEuler(Ns)),h.material.toneMapped=ue.getTransfer(v.colorSpace)!==_e,(f!==v||u!==v.version||d!==n.toneMapping)&&(h.material.needsUpdate=!0,f=v,u=v.version,d=n.toneMapping),h.layers.enableAll(),w.unshift(h,h.geometry,h.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new Ze(new yo(2,2),new he({name:"BackgroundMaterial",uniforms:Fs(vi.background.uniforms),vertexShader:vi.background.vertexShader,fragmentShader:vi.background.fragmentShader,side:Di,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,l.material.toneMapped=ue.getTransfer(v.colorSpace)!==_e,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(f!==v||u!==v.version||d!==n.toneMapping)&&(l.material.needsUpdate=!0,f=v,u=v.version,d=n.toneMapping),l.layers.enableAll(),w.unshift(l,l.geometry,l.material,0,0,null))}function p(w,b){w.getRGB(Hl,Ah(n)),i.buffers.color.setClear(Hl.r,Hl.g,Hl.b,b,o)}function E(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(w,b=1){a.set(w),c=b,p(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(w){c=w,p(a,c)},render:x,addToRenderList:m,dispose:E}}function fx(n,t){let e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=u(null),r=s,o=!1;function a(_,A,R,L,I){let D=!1,U=f(L,R,A);r!==U&&(r=U,l(r.object)),D=d(_,L,R,I),D&&g(_,L,R,I),I!==null&&t.update(I,n.ELEMENT_ARRAY_BUFFER),(D||o)&&(o=!1,b(_,A,R,L),I!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(I).buffer))}function c(){return n.createVertexArray()}function l(_){return n.bindVertexArray(_)}function h(_){return n.deleteVertexArray(_)}function f(_,A,R){let L=R.wireframe===!0,I=i[_.id];I===void 0&&(I={},i[_.id]=I);let D=I[A.id];D===void 0&&(D={},I[A.id]=D);let U=D[L];return U===void 0&&(U=u(c()),D[L]=U),U}function u(_){let A=[],R=[],L=[];for(let I=0;I<e;I++)A[I]=0,R[I]=0,L[I]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:A,enabledAttributes:R,attributeDivisors:L,object:_,attributes:{},index:null}}function d(_,A,R,L){let I=r.attributes,D=A.attributes,U=0,z=R.getAttributes();for(let k in z)if(z[k].location>=0){let Y=I[k],at=D[k];if(at===void 0&&(k==="instanceMatrix"&&_.instanceMatrix&&(at=_.instanceMatrix),k==="instanceColor"&&_.instanceColor&&(at=_.instanceColor)),Y===void 0||Y.attribute!==at||at&&Y.data!==at.data)return!0;U++}return r.attributesNum!==U||r.index!==L}function g(_,A,R,L){let I={},D=A.attributes,U=0,z=R.getAttributes();for(let k in z)if(z[k].location>=0){let Y=D[k];Y===void 0&&(k==="instanceMatrix"&&_.instanceMatrix&&(Y=_.instanceMatrix),k==="instanceColor"&&_.instanceColor&&(Y=_.instanceColor));let at={};at.attribute=Y,Y&&Y.data&&(at.data=Y.data),I[k]=at,U++}r.attributes=I,r.attributesNum=U,r.index=L}function x(){let _=r.newAttributes;for(let A=0,R=_.length;A<R;A++)_[A]=0}function m(_){p(_,0)}function p(_,A){let R=r.newAttributes,L=r.enabledAttributes,I=r.attributeDivisors;R[_]=1,L[_]===0&&(n.enableVertexAttribArray(_),L[_]=1),I[_]!==A&&(n.vertexAttribDivisor(_,A),I[_]=A)}function E(){let _=r.newAttributes,A=r.enabledAttributes;for(let R=0,L=A.length;R<L;R++)A[R]!==_[R]&&(n.disableVertexAttribArray(R),A[R]=0)}function w(_,A,R,L,I,D,U){U===!0?n.vertexAttribIPointer(_,A,R,I,D):n.vertexAttribPointer(_,A,R,L,I,D)}function b(_,A,R,L){x();let I=L.attributes,D=R.getAttributes(),U=A.defaultAttributeValues;for(let z in D){let k=D[z];if(k.location>=0){let J=I[z];if(J===void 0&&(z==="instanceMatrix"&&_.instanceMatrix&&(J=_.instanceMatrix),z==="instanceColor"&&_.instanceColor&&(J=_.instanceColor)),J!==void 0){let Y=J.normalized,at=J.itemSize,lt=t.get(J);if(lt===void 0)continue;let bt=lt.buffer,ft=lt.type,_t=lt.bytesPerElement,Z=ft===n.INT||ft===n.UNSIGNED_INT||J.gpuType===ll;if(J.isInterleavedBufferAttribute){let et=J.data,ct=et.stride,yt=J.offset;if(et.isInstancedInterleavedBuffer){for(let Tt=0;Tt<k.locationSize;Tt++)p(k.location+Tt,et.meshPerAttribute);_.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=et.meshPerAttribute*et.count)}else for(let Tt=0;Tt<k.locationSize;Tt++)m(k.location+Tt);n.bindBuffer(n.ARRAY_BUFFER,bt);for(let Tt=0;Tt<k.locationSize;Tt++)w(k.location+Tt,at/k.locationSize,ft,Y,ct*_t,(yt+at/k.locationSize*Tt)*_t,Z)}else{if(J.isInstancedBufferAttribute){for(let et=0;et<k.locationSize;et++)p(k.location+et,J.meshPerAttribute);_.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let et=0;et<k.locationSize;et++)m(k.location+et);n.bindBuffer(n.ARRAY_BUFFER,bt);for(let et=0;et<k.locationSize;et++)w(k.location+et,at/k.locationSize,ft,Y,at*_t,at/k.locationSize*et*_t,Z)}}else if(U!==void 0){let Y=U[z];if(Y!==void 0)switch(Y.length){case 2:n.vertexAttrib2fv(k.location,Y);break;case 3:n.vertexAttrib3fv(k.location,Y);break;case 4:n.vertexAttrib4fv(k.location,Y);break;default:n.vertexAttrib1fv(k.location,Y)}}}}E()}function v(){S();for(let _ in i){let A=i[_];for(let R in A){let L=A[R];for(let I in L)h(L[I].object),delete L[I];delete A[R]}delete i[_]}}function y(_){if(i[_.id]===void 0)return;let A=i[_.id];for(let R in A){let L=A[R];for(let I in L)h(L[I].object),delete L[I];delete A[R]}delete i[_.id]}function T(_){for(let A in i){let R=i[A];if(R[_.id]===void 0)continue;let L=R[_.id];for(let I in L)h(L[I].object),delete L[I];delete R[_.id]}}function S(){M(),o=!0,r!==s&&(r=s,l(r.object))}function M(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:S,resetDefaultState:M,dispose:v,releaseStatesOfGeometry:y,releaseStatesOfProgram:T,initAttributes:x,enableAttribute:m,disableUnusedAttributes:E}}function dx(n,t,e){let i;function s(l){i=l}function r(l,h){n.drawArrays(i,l,h),e.update(h,i,1)}function o(l,h,f){f!==0&&(n.drawArraysInstanced(i,l,h,f),e.update(h,i,f))}function a(l,h,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,h,0,f);let d=0;for(let g=0;g<f;g++)d+=h[g];e.update(d,i,1)}function c(l,h,f,u){if(f===0)return;let d=t.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<l.length;g++)o(l[g],h[g],u[g]);else{d.multiDrawArraysInstancedWEBGL(i,l,0,h,0,u,0,f);let g=0;for(let x=0;x<f;x++)g+=h[x]*u[x];e.update(g,i,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function px(n,t,e,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let T=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(T){return!(T!==yn&&i.convert(T)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(T){let S=T===Kn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(T!==xi&&i.convert(T)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==Dn&&!S)}function c(T){if(T==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp",h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let f=e.logarithmicDepthBuffer===!0,u=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),E=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),w=n.getParameter(n.MAX_VARYING_VECTORS),b=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),v=g>0,y=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:f,reversedDepthBuffer:u,maxTextures:d,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:E,maxVaryings:w,maxFragmentUniforms:b,vertexTextures:v,maxSamples:y}}function mx(n){let t=this,e=null,i=0,s=!1,r=!1,o=new jn,a=new Jt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,u){let d=f.length!==0||u||i!==0||s;return s=u,i=f.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,u){e=h(f,u,0)},this.setState=function(f,u,d){let g=f.clippingPlanes,x=f.clipIntersection,m=f.clipShadows,p=n.get(f);if(!s||g===null||g.length===0||r&&!m)r?h(null):l();else{let E=r?0:i,w=E*4,b=p.clippingState||null;c.value=b,b=h(g,u,w,d);for(let v=0;v!==w;++v)b[v]=e[v];p.clippingState=b,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=E}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(f,u,d,g){let x=f!==null?f.length:0,m=null;if(x!==0){if(m=c.value,g!==!0||m===null){let p=d+x*4,E=u.matrixWorldInverse;a.getNormalMatrix(E),(m===null||m.length<p)&&(m=new Float32Array(p));for(let w=0,b=d;w!==x;++w,b+=4)o.copy(f[w]).applyMatrix4(E,a),o.normal.toArray(m,b),m[b+3]=o.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,m}}function gx(n){let t=new WeakMap;function e(o,a){return a===rl?o.mapping=Ls:a===ol&&(o.mapping=Ds),o}function i(o){if(o&&o.isTexture){let a=o.mapping;if(a===rl||a===ol)if(t.has(o)){let c=t.get(o).texture;return e(c,o.mapping)}else{let c=o.image;if(c&&c.height>0){let l=new Pa(c.height);return l.fromEquirectangularTexture(n,o),t.set(o,l),o.addEventListener("dispose",s),e(l.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function r(){t=new WeakMap}return{get:i,dispose:r}}var Tr=4,qf=[.125,.215,.35,.446,.526,.582],Bs=20,Lh=new yr,Yf=new Qt,Dh=null,Fh=0,Nh=0,Uh=!1,Os=(1+Math.sqrt(5))/2,wr=1/Os,Zf=[new N(-Os,wr,0),new N(Os,wr,0),new N(-wr,0,Os),new N(wr,0,Os),new N(0,Os,-wr),new N(0,Os,wr),new N(-1,1,-1),new N(1,1,-1),new N(-1,1,1),new N(1,1,1)],xx=new N,Xl=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,s=100,r={}){let{size:o=256,position:a=xx}=r;Dh=this._renderer.getRenderTarget(),Fh=this._renderer.getActiveCubeFace(),Nh=this._renderer.getActiveMipmapLevel(),Uh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(t,i,s,c,a),e>0&&this._blur(c,0,0,e),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Kf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=jf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Dh,Fh,Nh),this._renderer.xr.enabled=Uh,t.scissorTest=!1,Gl(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ls||t.mapping===Ds?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Dh=this._renderer.getRenderTarget(),Fh=this._renderer.getActiveCubeFace(),Nh=this._renderer.getActiveMipmapLevel(),Uh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:li,minFilter:li,generateMipmaps:!1,type:Kn,format:yn,colorSpace:Ss,depthBuffer:!1},s=$f(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=$f(t,e,i);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=vx(r)),this._blurMaterial=yx(r,t,e)}return s}_compileMaterial(t){let e=new Ze(this._lodPlanes[0],t);this._renderer.compile(e,Lh)}_sceneToCubeUV(t,e,i,s,r){let c=new gn(90,1,e,i),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],f=this._renderer,u=f.autoClear,d=f.toneMapping;f.getClearColor(Yf),f.toneMapping=Ni,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(s),f.clearDepth(),f.setRenderTarget(null));let x=new Es({name:"PMREM.Background",side:wn,depthWrite:!1,depthTest:!1}),m=new Ze(new gr,x),p=!1,E=t.background;E?E.isColor&&(x.color.copy(E),t.background=null,p=!0):(x.color.copy(Yf),p=!0);for(let w=0;w<6;w++){let b=w%3;b===0?(c.up.set(0,l[w],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+h[w],r.y,r.z)):b===1?(c.up.set(0,0,l[w]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+h[w],r.z)):(c.up.set(0,l[w],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+h[w]));let v=this._cubeSize;Gl(s,b*v,w>2?v:0,v,v),f.setRenderTarget(s),p&&f.render(m,c),f.render(t,c)}m.geometry.dispose(),m.material.dispose(),f.toneMapping=d,f.autoClear=u,t.background=E}_textureToCubeUV(t,e){let i=this._renderer,s=t.mapping===Ls||t.mapping===Ds;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Kf()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=jf());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new Ze(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;let c=this._cubeSize;Gl(e,0,0,3*c,2*c),i.setRenderTarget(e),i.render(o,Lh)}_applyPMREM(t){let e=this._renderer,i=e.autoClear;e.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Zf[(s-r-1)%Zf.length];this._blur(t,r-1,r,o,a)}e.autoClear=i}_blur(t,e,i,s,r){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,i,s,"latitudinal",r),this._halfBlur(o,t,i,i,s,"longitudinal",r)}_halfBlur(t,e,i,s,r,o,a){let c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,f=new Ze(this._lodPlanes[s],l),u=l.uniforms,d=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*Bs-1),x=r/g,m=isFinite(r)?1+Math.floor(h*x):Bs;m>Bs&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Bs}`);let p=[],E=0;for(let T=0;T<Bs;++T){let S=T/x,M=Math.exp(-S*S/2);p.push(M),T===0?E+=M:T<m&&(E+=2*M)}for(let T=0;T<p.length;T++)p[T]=p[T]/E;u.envMap.value=t.texture,u.samples.value=m,u.weights.value=p,u.latitudinal.value=o==="latitudinal",a&&(u.poleAxis.value=a);let{_lodMax:w}=this;u.dTheta.value=g,u.mipInt.value=w-i;let b=this._sizeLods[s],v=3*b*(s>w-Tr?s-w+Tr:0),y=4*(this._cubeSize-b);Gl(e,v,y,3*b,2*b),c.setRenderTarget(e),c.render(f,Lh)}};function vx(n){let t=[],e=[],i=[],s=n,r=n-Tr+1+qf.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);e.push(a);let c=1/a;o>n-Tr?c=qf[o-n+Tr-1]:o===0&&(c=0),i.push(c);let l=1/(a-2),h=-l,f=1+l,u=[h,h,f,h,f,f,h,h,f,f,h,f],d=6,g=6,x=3,m=2,p=1,E=new Float32Array(x*g*d),w=new Float32Array(m*g*d),b=new Float32Array(p*g*d);for(let y=0;y<d;y++){let T=y%3*2/3-1,S=y>2?0:-1,M=[T,S,0,T+2/3,S,0,T+2/3,S+1,0,T,S,0,T+2/3,S+1,0,T,S+1,0];E.set(M,x*g*y),w.set(u,m*g*y);let _=[y,y,y,y,y,y];b.set(_,p*g*y)}let v=new Se;v.setAttribute("position",new se(E,x)),v.setAttribute("uv",new se(w,m)),v.setAttribute("faceIndex",new se(b,p)),t.push(v),s>Tr&&s--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function $f(n,t,e){let i=new xn(n,t,e);return i.texture.mapping=wo,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Gl(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function yx(n,t,e){let i=new Float32Array(Bs),s=new N(0,1,0);return new he({name:"SphericalGaussianBlur",defines:{n:Bs,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:qh(),fragmentShader:`

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
		`,blending:ci,depthTest:!1,depthWrite:!1})}function jf(){return new he({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:qh(),fragmentShader:`

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
		`,blending:ci,depthTest:!1,depthWrite:!1})}function Kf(){return new he({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:qh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ci,depthTest:!1,depthWrite:!1})}function qh(){return`

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
	`}function _x(n){let t=new WeakMap,e=null;function i(a){if(a&&a.isTexture){let c=a.mapping,l=c===rl||c===ol,h=c===Ls||c===Ds;if(l||h){let f=t.get(a),u=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==u)return e===null&&(e=new Xl(n)),f=l?e.fromEquirectangular(a,f):e.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,t.set(a,f),f.texture;if(f!==void 0)return f.texture;{let d=a.image;return l&&d&&d.height>0||h&&d&&s(d)?(e===null&&(e=new Xl(n)),f=l?e.fromEquirectangular(a):e.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,t.set(a,f),a.addEventListener("dispose",r),f.texture):null}}}return a}function s(a){let c=0,l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function r(a){let c=a.target;c.removeEventListener("dispose",r);let l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:o}}function Mx(n){let t={};function e(i){if(t[i]!==void 0)return t[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){let s=e(i);return s===null&&pr("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function bx(n,t,e,i){let s={},r=new WeakMap;function o(f){let u=f.target;u.index!==null&&t.remove(u.index);for(let g in u.attributes)t.remove(u.attributes[g]);u.removeEventListener("dispose",o),delete s[u.id];let d=r.get(u);d&&(t.remove(d),r.delete(u)),i.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function a(f,u){return s[u.id]===!0||(u.addEventListener("dispose",o),s[u.id]=!0,e.memory.geometries++),u}function c(f){let u=f.attributes;for(let d in u)t.update(u[d],n.ARRAY_BUFFER)}function l(f){let u=[],d=f.index,g=f.attributes.position,x=0;if(d!==null){let E=d.array;x=d.version;for(let w=0,b=E.length;w<b;w+=3){let v=E[w+0],y=E[w+1],T=E[w+2];u.push(v,y,y,T,T,v)}}else if(g!==void 0){let E=g.array;x=g.version;for(let w=0,b=E.length/3-1;w<b;w+=3){let v=w+0,y=w+1,T=w+2;u.push(v,y,y,T,T,v)}}else return;let m=new(Eh(u)?co:lo)(u,1);m.version=x;let p=r.get(f);p&&t.remove(p),r.set(f,m)}function h(f){let u=r.get(f);if(u){let d=f.index;d!==null&&u.version<d.version&&l(f)}else l(f);return r.get(f)}return{get:a,update:c,getWireframeAttribute:h}}function Sx(n,t,e){let i;function s(u){i=u}let r,o;function a(u){r=u.type,o=u.bytesPerElement}function c(u,d){n.drawElements(i,d,r,u*o),e.update(d,i,1)}function l(u,d,g){g!==0&&(n.drawElementsInstanced(i,d,r,u*o,g),e.update(d,i,g))}function h(u,d,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,r,u,0,g);let m=0;for(let p=0;p<g;p++)m+=d[p];e.update(m,i,1)}function f(u,d,g,x){if(g===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<u.length;p++)l(u[p]/o,d[p],x[p]);else{m.multiDrawElementsInstancedWEBGL(i,d,0,r,u,0,x,0,g);let p=0;for(let E=0;E<g;E++)p+=d[E]*x[E];e.update(p,i,1)}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=f}function wx(n){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(e.calls++,o){case n.TRIANGLES:e.triangles+=a*(r/3);break;case n.LINES:e.lines+=a*(r/2);break;case n.LINE_STRIP:e.lines+=a*(r-1);break;case n.LINE_LOOP:e.lines+=a*r;break;case n.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function Tx(n,t,e){let i=new WeakMap,s=new Ne;function r(o,a,c){let l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=h!==void 0?h.length:0,u=i.get(a);if(u===void 0||u.count!==f){let M=function(){T.dispose(),i.delete(a),a.removeEventListener("dispose",M)};u!==void 0&&u.texture.dispose();let d=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],E=a.morphAttributes.color||[],w=0;d===!0&&(w=1),g===!0&&(w=2),x===!0&&(w=3);let b=a.attributes.position.count*w,v=1;b>t.maxTextureSize&&(v=Math.ceil(b/t.maxTextureSize),b=t.maxTextureSize);let y=new Float32Array(b*v*4*f),T=new oo(y,b,v,f);T.type=Dn,T.needsUpdate=!0;let S=w*4;for(let _=0;_<f;_++){let A=m[_],R=p[_],L=E[_],I=b*v*4*_;for(let D=0;D<A.count;D++){let U=D*S;d===!0&&(s.fromBufferAttribute(A,D),y[I+U+0]=s.x,y[I+U+1]=s.y,y[I+U+2]=s.z,y[I+U+3]=0),g===!0&&(s.fromBufferAttribute(R,D),y[I+U+4]=s.x,y[I+U+5]=s.y,y[I+U+6]=s.z,y[I+U+7]=0),x===!0&&(s.fromBufferAttribute(L,D),y[I+U+8]=s.x,y[I+U+9]=s.y,y[I+U+10]=s.z,y[I+U+11]=L.itemSize===4?s.w:1)}}u={count:f,texture:T,size:new At(b,v)},i.set(a,u),a.addEventListener("dispose",M)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",o.morphTexture,e);else{let d=0;for(let x=0;x<l.length;x++)d+=l[x];let g=a.morphTargetsRelative?1:1-d;c.getUniforms().setValue(n,"morphTargetBaseInfluence",g),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",u.texture,e),c.getUniforms().setValue(n,"morphTargetsTextureSize",u.size)}return{update:r}}function Ex(n,t,e,i){let s=new WeakMap;function r(c){let l=i.render.frame,h=c.geometry,f=t.get(c,h);if(s.get(f)!==l&&(t.update(f),s.set(f,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(e.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,n.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){let u=c.skeleton;s.get(u)!==l&&(u.update(),s.set(u,l))}return f}function o(){s=new WeakMap}function a(c){let l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:o}}var gd=new Sn,Jf=new xo(1,1),xd=new oo,vd=new Ca,yd=new uo,Qf=[],td=[],ed=new Float32Array(16),nd=new Float32Array(9),id=new Float32Array(4);function Ar(n,t,e){let i=n[0];if(i<=0||i>0)return n;let s=t*e,r=Qf[s];if(r===void 0&&(r=new Float32Array(s),Qf[s]=r),t!==0){i.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,n[o].toArray(r,a)}return r}function Ke(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function Je(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function Yl(n,t){let e=td[t];e===void 0&&(e=new Int32Array(t),td[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function Ax(n,t){let e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function Cx(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ke(e,t))return;n.uniform2fv(this.addr,t),Je(e,t)}}function Rx(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ke(e,t))return;n.uniform3fv(this.addr,t),Je(e,t)}}function Px(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ke(e,t))return;n.uniform4fv(this.addr,t),Je(e,t)}}function Ix(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(Ke(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),Je(e,t)}else{if(Ke(e,i))return;id.set(i),n.uniformMatrix2fv(this.addr,!1,id),Je(e,i)}}function Lx(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(Ke(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),Je(e,t)}else{if(Ke(e,i))return;nd.set(i),n.uniformMatrix3fv(this.addr,!1,nd),Je(e,i)}}function Dx(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(Ke(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),Je(e,t)}else{if(Ke(e,i))return;ed.set(i),n.uniformMatrix4fv(this.addr,!1,ed),Je(e,i)}}function Fx(n,t){let e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function Nx(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ke(e,t))return;n.uniform2iv(this.addr,t),Je(e,t)}}function Ux(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ke(e,t))return;n.uniform3iv(this.addr,t),Je(e,t)}}function Ox(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ke(e,t))return;n.uniform4iv(this.addr,t),Je(e,t)}}function Bx(n,t){let e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function zx(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ke(e,t))return;n.uniform2uiv(this.addr,t),Je(e,t)}}function kx(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ke(e,t))return;n.uniform3uiv(this.addr,t),Je(e,t)}}function Vx(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ke(e,t))return;n.uniform4uiv(this.addr,t),Je(e,t)}}function Hx(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(Jf.compareFunction=Sh,r=Jf):r=gd,e.setTexture2D(t||r,s)}function Gx(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||vd,s)}function Wx(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||yd,s)}function Xx(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||xd,s)}function qx(n){switch(n){case 5126:return Ax;case 35664:return Cx;case 35665:return Rx;case 35666:return Px;case 35674:return Ix;case 35675:return Lx;case 35676:return Dx;case 5124:case 35670:return Fx;case 35667:case 35671:return Nx;case 35668:case 35672:return Ux;case 35669:case 35673:return Ox;case 5125:return Bx;case 36294:return zx;case 36295:return kx;case 36296:return Vx;case 35678:case 36198:case 36298:case 36306:case 35682:return Hx;case 35679:case 36299:case 36307:return Gx;case 35680:case 36300:case 36308:case 36293:return Wx;case 36289:case 36303:case 36311:case 36292:return Xx}}function Yx(n,t){n.uniform1fv(this.addr,t)}function Zx(n,t){let e=Ar(t,this.size,2);n.uniform2fv(this.addr,e)}function $x(n,t){let e=Ar(t,this.size,3);n.uniform3fv(this.addr,e)}function jx(n,t){let e=Ar(t,this.size,4);n.uniform4fv(this.addr,e)}function Kx(n,t){let e=Ar(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function Jx(n,t){let e=Ar(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function Qx(n,t){let e=Ar(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function tv(n,t){n.uniform1iv(this.addr,t)}function ev(n,t){n.uniform2iv(this.addr,t)}function nv(n,t){n.uniform3iv(this.addr,t)}function iv(n,t){n.uniform4iv(this.addr,t)}function sv(n,t){n.uniform1uiv(this.addr,t)}function rv(n,t){n.uniform2uiv(this.addr,t)}function ov(n,t){n.uniform3uiv(this.addr,t)}function av(n,t){n.uniform4uiv(this.addr,t)}function lv(n,t,e){let i=this.cache,s=t.length,r=Yl(e,s);Ke(i,r)||(n.uniform1iv(this.addr,r),Je(i,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||gd,r[o])}function cv(n,t,e){let i=this.cache,s=t.length,r=Yl(e,s);Ke(i,r)||(n.uniform1iv(this.addr,r),Je(i,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||vd,r[o])}function hv(n,t,e){let i=this.cache,s=t.length,r=Yl(e,s);Ke(i,r)||(n.uniform1iv(this.addr,r),Je(i,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||yd,r[o])}function uv(n,t,e){let i=this.cache,s=t.length,r=Yl(e,s);Ke(i,r)||(n.uniform1iv(this.addr,r),Je(i,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||xd,r[o])}function fv(n){switch(n){case 5126:return Yx;case 35664:return Zx;case 35665:return $x;case 35666:return jx;case 35674:return Kx;case 35675:return Jx;case 35676:return Qx;case 5124:case 35670:return tv;case 35667:case 35671:return ev;case 35668:case 35672:return nv;case 35669:case 35673:return iv;case 5125:return sv;case 36294:return rv;case 36295:return ov;case 36296:return av;case 35678:case 36198:case 36298:case 36306:case 35682:return lv;case 35679:case 36299:case 36307:return cv;case 35680:case 36300:case 36308:case 36293:return hv;case 36289:case 36303:case 36311:case 36292:return uv}}var Bh=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=qx(e.type)}},zh=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=fv(e.type)}},kh=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],i)}}},Oh=/(\w+)(\])?(\[|\.)?/g;function sd(n,t){n.seq.push(t),n.map[t.id]=t}function dv(n,t,e){let i=n.name,s=i.length;for(Oh.lastIndex=0;;){let r=Oh.exec(i),o=Oh.lastIndex,a=r[1],c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){sd(e,l===void 0?new Bh(a,n,t):new zh(a,n,t));break}else{let f=e.map[a];f===void 0&&(f=new kh(a),sd(e,f)),e=f}}}var Er=class{constructor(t,e){this.seq=[],this.map={};let i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){let r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);dv(r,o,this)}}setValue(t,e,i,s){let r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){let s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],c=i[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,s)}}static seqWithValue(t,e){let i=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&i.push(o)}return i}};function rd(n,t,e){let i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}var pv=37297,mv=0;function gv(n,t){let e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}var od=new Jt;function xv(n){ue._getMatrix(od,ue.workingColorSpace,n);let t=`mat3( ${od.elements.map(e=>e.toFixed(4))} )`;switch(ue.getTransfer(n)){case io:return[t,"LinearTransferOETF"];case _e:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function ad(n,t,e){let i=n.getShaderParameter(t,n.COMPILE_STATUS),r=(n.getShaderInfoLog(t)||"").trim();if(i&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+gv(n.getShaderSource(t),a)}else return r}function vv(n,t){let e=xv(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function yv(n,t){let e;switch(t){case Qa:e="Linear";break;case tl:e="Reinhard";break;case el:e="Cineon";break;case _r:e="ACESFilmic";break;case il:e="AgX";break;case sl:e="Neutral";break;case nl:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Wl=new N;function _v(){ue.getLuminanceCoefficients(Wl);let n=Wl.x.toFixed(4),t=Wl.y.toFixed(4),e=Wl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Mv(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Io).join(`
`)}function bv(n){let t=[];for(let e in n){let i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function Sv(n,t){let e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(t,s),o=r.name,a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:n.getAttribLocation(t,o),locationSize:a}}return e}function Io(n){return n!==""}function ld(n,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function cd(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var wv=/^[ \t]*#include +<([\w\d./]+)>/gm;function Vh(n){return n.replace(wv,Ev)}var Tv=new Map;function Ev(n,t){let e=ne[t];if(e===void 0){let i=Tv.get(t);if(i!==void 0)e=ne[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return Vh(e)}var Av=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function hd(n){return n.replace(Av,Cv)}function Cv(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function ud(n){let t=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?t+=`
#define HIGH_PRECISION`:n.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Rv(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===hh?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===lf?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===gi&&(t="SHADOWMAP_TYPE_VSM"),t}function Pv(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Ls:case Ds:t="ENVMAP_TYPE_CUBE";break;case wo:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Iv(n){let t="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Ds:t="ENVMAP_MODE_REFRACTION";break}return t}function Lv(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case dh:t="ENVMAP_BLENDING_MULTIPLY";break;case Af:t="ENVMAP_BLENDING_MIX";break;case Cf:t="ENVMAP_BLENDING_ADD";break}return t}function Dv(n){let t=n.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:i,maxMip:e}}function Fv(n,t,e,i){let s=n.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,c=Rv(e),l=Pv(e),h=Iv(e),f=Lv(e),u=Dv(e),d=Mv(e),g=bv(r),x=s.createProgram(),m,p,E=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Io).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Io).join(`
`),p.length>0&&(p+=`
`)):(m=[ud(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Io).join(`
`),p=[ud(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+f:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Ni?"#define TONE_MAPPING":"",e.toneMapping!==Ni?ne.tonemapping_pars_fragment:"",e.toneMapping!==Ni?yv("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ne.colorspace_pars_fragment,vv("linearToOutputTexel",e.outputColorSpace),_v(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Io).join(`
`)),o=Vh(o),o=ld(o,e),o=cd(o,e),a=Vh(a),a=ld(a,e),a=cd(a,e),o=hd(o),a=hd(a),e.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===wh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===wh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let w=E+m+o,b=E+p+a,v=rd(s,s.VERTEX_SHADER,w),y=rd(s,s.FRAGMENT_SHADER,b);s.attachShader(x,v),s.attachShader(x,y),e.index0AttributeName!==void 0?s.bindAttribLocation(x,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function T(A){if(n.debug.checkShaderErrors){let R=s.getProgramInfoLog(x)||"",L=s.getShaderInfoLog(v)||"",I=s.getShaderInfoLog(y)||"",D=R.trim(),U=L.trim(),z=I.trim(),k=!0,J=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(k=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,x,v,y);else{let Y=ad(s,v,"vertex"),at=ad(s,y,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+A.name+`
Material Type: `+A.type+`

Program Info Log: `+D+`
`+Y+`
`+at)}else D!==""?console.warn("THREE.WebGLProgram: Program Info Log:",D):(U===""||z==="")&&(J=!1);J&&(A.diagnostics={runnable:k,programLog:D,vertexShader:{log:U,prefix:m},fragmentShader:{log:z,prefix:p}})}s.deleteShader(v),s.deleteShader(y),S=new Er(s,x),M=Sv(s,x)}let S;this.getUniforms=function(){return S===void 0&&T(this),S};let M;this.getAttributes=function(){return M===void 0&&T(this),M};let _=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return _===!1&&(_=s.getProgramParameter(x,pv)),_},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=mv++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=v,this.fragmentShader=y,this}var Nv=0,Hh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,i=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){let e=this.shaderCache,i=e.get(t);return i===void 0&&(i=new Gh(t),e.set(t,i)),i}},Gh=class{constructor(t){this.id=Nv++,this.code=t,this.usedTimes=0}};function Uv(n,t,e,i,s,r,o){let a=new ao,c=new Hh,l=new Set,h=[],f=s.logarithmicDepthBuffer,u=s.vertexTextures,d=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(M){return l.add(M),M===0?"uv":`uv${M}`}function m(M,_,A,R,L){let I=R.fog,D=L.geometry,U=M.isMeshStandardMaterial?R.environment:null,z=(M.isMeshStandardMaterial?e:t).get(M.envMap||U),k=z&&z.mapping===wo?z.image.height:null,J=g[M.type];M.precision!==null&&(d=s.getMaxPrecision(M.precision),d!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",d,"instead."));let Y=D.morphAttributes.position||D.morphAttributes.normal||D.morphAttributes.color,at=Y!==void 0?Y.length:0,lt=0;D.morphAttributes.position!==void 0&&(lt=1),D.morphAttributes.normal!==void 0&&(lt=2),D.morphAttributes.color!==void 0&&(lt=3);let bt,ft,_t,Z;if(J){let vt=vi[J];bt=vt.vertexShader,ft=vt.fragmentShader}else bt=M.vertexShader,ft=M.fragmentShader,c.update(M),_t=c.getVertexShaderID(M),Z=c.getFragmentShaderID(M);let et=n.getRenderTarget(),ct=n.state.buffers.depth.getReversed(),yt=L.isInstancedMesh===!0,Tt=L.isBatchedMesh===!0,Ht=!!M.map,Me=!!M.matcap,B=!!z,Zt=!!M.aoMap,Dt=!!M.lightMap,Ft=!!M.bumpMap,Et=!!M.normalMap,ae=!!M.displacementMap,Rt=!!M.emissiveMap,qt=!!M.metalnessMap,Re=!!M.roughnessMap,ge=M.anisotropy>0,F=M.clearcoat>0,C=M.dispersion>0,K=M.iridescence>0,rt=M.sheen>0,ut=M.transmission>0,ot=ge&&!!M.anisotropyMap,Ut=F&&!!M.clearcoatMap,gt=F&&!!M.clearcoatNormalMap,Pt=F&&!!M.clearcoatRoughnessMap,Nt=K&&!!M.iridescenceMap,xt=K&&!!M.iridescenceThicknessMap,Mt=rt&&!!M.sheenColorMap,kt=rt&&!!M.sheenRoughnessMap,H=!!M.specularMap,$=!!M.specularColorMap,dt=!!M.specularIntensityMap,O=ut&&!!M.transmissionMap,it=ut&&!!M.thicknessMap,j=!!M.gradientMap,V=!!M.alphaMap,G=M.alphaTest>0,X=!!M.alphaHash,tt=!!M.extensions,st=Ni;M.toneMapped&&(et===null||et.isXRRenderTarget===!0)&&(st=n.toneMapping);let ht={shaderID:J,shaderType:M.type,shaderName:M.name,vertexShader:bt,fragmentShader:ft,defines:M.defines,customVertexShaderID:_t,customFragmentShaderID:Z,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:d,batching:Tt,batchingColor:Tt&&L._colorsTexture!==null,instancing:yt,instancingColor:yt&&L.instanceColor!==null,instancingMorph:yt&&L.morphTexture!==null,supportsVertexTextures:u,outputColorSpace:et===null?n.outputColorSpace:et.isXRRenderTarget===!0?et.texture.colorSpace:Ss,alphaToCoverage:!!M.alphaToCoverage,map:Ht,matcap:Me,envMap:B,envMapMode:B&&z.mapping,envMapCubeUVHeight:k,aoMap:Zt,lightMap:Dt,bumpMap:Ft,normalMap:Et,displacementMap:u&&ae,emissiveMap:Rt,normalMapObjectSpace:Et&&M.normalMapType===Df,normalMapTangentSpace:Et&&M.normalMapType===Lf,metalnessMap:qt,roughnessMap:Re,anisotropy:ge,anisotropyMap:ot,clearcoat:F,clearcoatMap:Ut,clearcoatNormalMap:gt,clearcoatRoughnessMap:Pt,dispersion:C,iridescence:K,iridescenceMap:Nt,iridescenceThicknessMap:xt,sheen:rt,sheenColorMap:Mt,sheenRoughnessMap:kt,specularMap:H,specularColorMap:$,specularIntensityMap:dt,transmission:ut,transmissionMap:O,thicknessMap:it,gradientMap:j,opaque:M.transparent===!1&&M.blending===Ms&&M.alphaToCoverage===!1,alphaMap:V,alphaTest:G,alphaHash:X,combine:M.combine,mapUv:Ht&&x(M.map.channel),aoMapUv:Zt&&x(M.aoMap.channel),lightMapUv:Dt&&x(M.lightMap.channel),bumpMapUv:Ft&&x(M.bumpMap.channel),normalMapUv:Et&&x(M.normalMap.channel),displacementMapUv:ae&&x(M.displacementMap.channel),emissiveMapUv:Rt&&x(M.emissiveMap.channel),metalnessMapUv:qt&&x(M.metalnessMap.channel),roughnessMapUv:Re&&x(M.roughnessMap.channel),anisotropyMapUv:ot&&x(M.anisotropyMap.channel),clearcoatMapUv:Ut&&x(M.clearcoatMap.channel),clearcoatNormalMapUv:gt&&x(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Pt&&x(M.clearcoatRoughnessMap.channel),iridescenceMapUv:Nt&&x(M.iridescenceMap.channel),iridescenceThicknessMapUv:xt&&x(M.iridescenceThicknessMap.channel),sheenColorMapUv:Mt&&x(M.sheenColorMap.channel),sheenRoughnessMapUv:kt&&x(M.sheenRoughnessMap.channel),specularMapUv:H&&x(M.specularMap.channel),specularColorMapUv:$&&x(M.specularColorMap.channel),specularIntensityMapUv:dt&&x(M.specularIntensityMap.channel),transmissionMapUv:O&&x(M.transmissionMap.channel),thicknessMapUv:it&&x(M.thicknessMap.channel),alphaMapUv:V&&x(M.alphaMap.channel),vertexTangents:!!D.attributes.tangent&&(Et||ge),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!D.attributes.color&&D.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!D.attributes.uv&&(Ht||V),fog:!!I,useFog:M.fog===!0,fogExp2:!!I&&I.isFogExp2,flatShading:M.flatShading===!0&&M.wireframe===!1,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:ct,skinning:L.isSkinnedMesh===!0,morphTargets:D.morphAttributes.position!==void 0,morphNormals:D.morphAttributes.normal!==void 0,morphColors:D.morphAttributes.color!==void 0,morphTargetsCount:at,morphTextureStride:lt,numDirLights:_.directional.length,numPointLights:_.point.length,numSpotLights:_.spot.length,numSpotLightMaps:_.spotLightMap.length,numRectAreaLights:_.rectArea.length,numHemiLights:_.hemi.length,numDirLightShadows:_.directionalShadowMap.length,numPointLightShadows:_.pointShadowMap.length,numSpotLightShadows:_.spotShadowMap.length,numSpotLightShadowsWithMaps:_.numSpotLightShadowsWithMaps,numLightProbes:_.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:n.shadowMap.enabled&&A.length>0,shadowMapType:n.shadowMap.type,toneMapping:st,decodeVideoTexture:Ht&&M.map.isVideoTexture===!0&&ue.getTransfer(M.map.colorSpace)===_e,decodeVideoTextureEmissive:Rt&&M.emissiveMap.isVideoTexture===!0&&ue.getTransfer(M.emissiveMap.colorSpace)===_e,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===vn,flipSided:M.side===wn,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:tt&&M.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(tt&&M.extensions.multiDraw===!0||Tt)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return ht.vertexUv1s=l.has(1),ht.vertexUv2s=l.has(2),ht.vertexUv3s=l.has(3),l.clear(),ht}function p(M){let _=[];if(M.shaderID?_.push(M.shaderID):(_.push(M.customVertexShaderID),_.push(M.customFragmentShaderID)),M.defines!==void 0)for(let A in M.defines)_.push(A),_.push(M.defines[A]);return M.isRawShaderMaterial===!1&&(E(_,M),w(_,M),_.push(n.outputColorSpace)),_.push(M.customProgramCacheKey),_.join()}function E(M,_){M.push(_.precision),M.push(_.outputColorSpace),M.push(_.envMapMode),M.push(_.envMapCubeUVHeight),M.push(_.mapUv),M.push(_.alphaMapUv),M.push(_.lightMapUv),M.push(_.aoMapUv),M.push(_.bumpMapUv),M.push(_.normalMapUv),M.push(_.displacementMapUv),M.push(_.emissiveMapUv),M.push(_.metalnessMapUv),M.push(_.roughnessMapUv),M.push(_.anisotropyMapUv),M.push(_.clearcoatMapUv),M.push(_.clearcoatNormalMapUv),M.push(_.clearcoatRoughnessMapUv),M.push(_.iridescenceMapUv),M.push(_.iridescenceThicknessMapUv),M.push(_.sheenColorMapUv),M.push(_.sheenRoughnessMapUv),M.push(_.specularMapUv),M.push(_.specularColorMapUv),M.push(_.specularIntensityMapUv),M.push(_.transmissionMapUv),M.push(_.thicknessMapUv),M.push(_.combine),M.push(_.fogExp2),M.push(_.sizeAttenuation),M.push(_.morphTargetsCount),M.push(_.morphAttributeCount),M.push(_.numDirLights),M.push(_.numPointLights),M.push(_.numSpotLights),M.push(_.numSpotLightMaps),M.push(_.numHemiLights),M.push(_.numRectAreaLights),M.push(_.numDirLightShadows),M.push(_.numPointLightShadows),M.push(_.numSpotLightShadows),M.push(_.numSpotLightShadowsWithMaps),M.push(_.numLightProbes),M.push(_.shadowMapType),M.push(_.toneMapping),M.push(_.numClippingPlanes),M.push(_.numClipIntersection),M.push(_.depthPacking)}function w(M,_){a.disableAll(),_.supportsVertexTextures&&a.enable(0),_.instancing&&a.enable(1),_.instancingColor&&a.enable(2),_.instancingMorph&&a.enable(3),_.matcap&&a.enable(4),_.envMap&&a.enable(5),_.normalMapObjectSpace&&a.enable(6),_.normalMapTangentSpace&&a.enable(7),_.clearcoat&&a.enable(8),_.iridescence&&a.enable(9),_.alphaTest&&a.enable(10),_.vertexColors&&a.enable(11),_.vertexAlphas&&a.enable(12),_.vertexUv1s&&a.enable(13),_.vertexUv2s&&a.enable(14),_.vertexUv3s&&a.enable(15),_.vertexTangents&&a.enable(16),_.anisotropy&&a.enable(17),_.alphaHash&&a.enable(18),_.batching&&a.enable(19),_.dispersion&&a.enable(20),_.batchingColor&&a.enable(21),_.gradientMap&&a.enable(22),M.push(a.mask),a.disableAll(),_.fog&&a.enable(0),_.useFog&&a.enable(1),_.flatShading&&a.enable(2),_.logarithmicDepthBuffer&&a.enable(3),_.reversedDepthBuffer&&a.enable(4),_.skinning&&a.enable(5),_.morphTargets&&a.enable(6),_.morphNormals&&a.enable(7),_.morphColors&&a.enable(8),_.premultipliedAlpha&&a.enable(9),_.shadowMapEnabled&&a.enable(10),_.doubleSided&&a.enable(11),_.flipSided&&a.enable(12),_.useDepthPacking&&a.enable(13),_.dithering&&a.enable(14),_.transmission&&a.enable(15),_.sheen&&a.enable(16),_.opaque&&a.enable(17),_.pointsUvs&&a.enable(18),_.decodeVideoTexture&&a.enable(19),_.decodeVideoTextureEmissive&&a.enable(20),_.alphaToCoverage&&a.enable(21),M.push(a.mask)}function b(M){let _=g[M.type],A;if(_){let R=vi[_];A=Oi.clone(R.uniforms)}else A=M.uniforms;return A}function v(M,_){let A;for(let R=0,L=h.length;R<L;R++){let I=h[R];if(I.cacheKey===_){A=I,++A.usedTimes;break}}return A===void 0&&(A=new Fv(n,_,M,r),h.push(A)),A}function y(M){if(--M.usedTimes===0){let _=h.indexOf(M);h[_]=h[h.length-1],h.pop(),M.destroy()}}function T(M){c.remove(M)}function S(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:b,acquireProgram:v,releaseProgram:y,releaseShaderCache:T,programs:h,dispose:S}}function Ov(){let n=new WeakMap;function t(o){return n.has(o)}function e(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,c){n.get(o)[a]=c}function r(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:r}}function Bv(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function fd(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function dd(){let n=[],t=0,e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function o(f,u,d,g,x,m){let p=n[t];return p===void 0?(p={id:f.id,object:f,geometry:u,material:d,groupOrder:g,renderOrder:f.renderOrder,z:x,group:m},n[t]=p):(p.id=f.id,p.object=f,p.geometry=u,p.material=d,p.groupOrder=g,p.renderOrder=f.renderOrder,p.z=x,p.group=m),t++,p}function a(f,u,d,g,x,m){let p=o(f,u,d,g,x,m);d.transmission>0?i.push(p):d.transparent===!0?s.push(p):e.push(p)}function c(f,u,d,g,x,m){let p=o(f,u,d,g,x,m);d.transmission>0?i.unshift(p):d.transparent===!0?s.unshift(p):e.unshift(p)}function l(f,u){e.length>1&&e.sort(f||Bv),i.length>1&&i.sort(u||fd),s.length>1&&s.sort(u||fd)}function h(){for(let f=t,u=n.length;f<u;f++){let d=n[f];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:a,unshift:c,finish:h,sort:l}}function zv(){let n=new WeakMap;function t(i,s){let r=n.get(i),o;return r===void 0?(o=new dd,n.set(i,[o])):s>=r.length?(o=new dd,r.push(o)):o=r[s],o}function e(){n=new WeakMap}return{get:t,dispose:e}}function kv(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new N,color:new Qt};break;case"SpotLight":e={position:new N,direction:new N,color:new Qt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new N,color:new Qt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new N,skyColor:new Qt,groundColor:new Qt};break;case"RectAreaLight":e={color:new Qt,position:new N,halfWidth:new N,halfHeight:new N};break}return n[t.id]=e,e}}}function Vv(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new At};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new At};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new At,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}var Hv=0;function Gv(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function Wv(n){let t=new kv,e=Vv(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new N);let s=new N,r=new Ve,o=new Ve;function a(l){let h=0,f=0,u=0;for(let M=0;M<9;M++)i.probe[M].set(0,0,0);let d=0,g=0,x=0,m=0,p=0,E=0,w=0,b=0,v=0,y=0,T=0;l.sort(Gv);for(let M=0,_=l.length;M<_;M++){let A=l[M],R=A.color,L=A.intensity,I=A.distance,D=A.shadow&&A.shadow.map?A.shadow.map.texture:null;if(A.isAmbientLight)h+=R.r*L,f+=R.g*L,u+=R.b*L;else if(A.isLightProbe){for(let U=0;U<9;U++)i.probe[U].addScaledVector(A.sh.coefficients[U],L);T++}else if(A.isDirectionalLight){let U=t.get(A);if(U.color.copy(A.color).multiplyScalar(A.intensity),A.castShadow){let z=A.shadow,k=e.get(A);k.shadowIntensity=z.intensity,k.shadowBias=z.bias,k.shadowNormalBias=z.normalBias,k.shadowRadius=z.radius,k.shadowMapSize=z.mapSize,i.directionalShadow[d]=k,i.directionalShadowMap[d]=D,i.directionalShadowMatrix[d]=A.shadow.matrix,E++}i.directional[d]=U,d++}else if(A.isSpotLight){let U=t.get(A);U.position.setFromMatrixPosition(A.matrixWorld),U.color.copy(R).multiplyScalar(L),U.distance=I,U.coneCos=Math.cos(A.angle),U.penumbraCos=Math.cos(A.angle*(1-A.penumbra)),U.decay=A.decay,i.spot[x]=U;let z=A.shadow;if(A.map&&(i.spotLightMap[v]=A.map,v++,z.updateMatrices(A),A.castShadow&&y++),i.spotLightMatrix[x]=z.matrix,A.castShadow){let k=e.get(A);k.shadowIntensity=z.intensity,k.shadowBias=z.bias,k.shadowNormalBias=z.normalBias,k.shadowRadius=z.radius,k.shadowMapSize=z.mapSize,i.spotShadow[x]=k,i.spotShadowMap[x]=D,b++}x++}else if(A.isRectAreaLight){let U=t.get(A);U.color.copy(R).multiplyScalar(L),U.halfWidth.set(A.width*.5,0,0),U.halfHeight.set(0,A.height*.5,0),i.rectArea[m]=U,m++}else if(A.isPointLight){let U=t.get(A);if(U.color.copy(A.color).multiplyScalar(A.intensity),U.distance=A.distance,U.decay=A.decay,A.castShadow){let z=A.shadow,k=e.get(A);k.shadowIntensity=z.intensity,k.shadowBias=z.bias,k.shadowNormalBias=z.normalBias,k.shadowRadius=z.radius,k.shadowMapSize=z.mapSize,k.shadowCameraNear=z.camera.near,k.shadowCameraFar=z.camera.far,i.pointShadow[g]=k,i.pointShadowMap[g]=D,i.pointShadowMatrix[g]=A.shadow.matrix,w++}i.point[g]=U,g++}else if(A.isHemisphereLight){let U=t.get(A);U.skyColor.copy(A.color).multiplyScalar(L),U.groundColor.copy(A.groundColor).multiplyScalar(L),i.hemi[p]=U,p++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=wt.LTC_FLOAT_1,i.rectAreaLTC2=wt.LTC_FLOAT_2):(i.rectAreaLTC1=wt.LTC_HALF_1,i.rectAreaLTC2=wt.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=f,i.ambient[2]=u;let S=i.hash;(S.directionalLength!==d||S.pointLength!==g||S.spotLength!==x||S.rectAreaLength!==m||S.hemiLength!==p||S.numDirectionalShadows!==E||S.numPointShadows!==w||S.numSpotShadows!==b||S.numSpotMaps!==v||S.numLightProbes!==T)&&(i.directional.length=d,i.spot.length=x,i.rectArea.length=m,i.point.length=g,i.hemi.length=p,i.directionalShadow.length=E,i.directionalShadowMap.length=E,i.pointShadow.length=w,i.pointShadowMap.length=w,i.spotShadow.length=b,i.spotShadowMap.length=b,i.directionalShadowMatrix.length=E,i.pointShadowMatrix.length=w,i.spotLightMatrix.length=b+v-y,i.spotLightMap.length=v,i.numSpotLightShadowsWithMaps=y,i.numLightProbes=T,S.directionalLength=d,S.pointLength=g,S.spotLength=x,S.rectAreaLength=m,S.hemiLength=p,S.numDirectionalShadows=E,S.numPointShadows=w,S.numSpotShadows=b,S.numSpotMaps=v,S.numLightProbes=T,i.version=Hv++)}function c(l,h){let f=0,u=0,d=0,g=0,x=0,m=h.matrixWorldInverse;for(let p=0,E=l.length;p<E;p++){let w=l[p];if(w.isDirectionalLight){let b=i.directional[f];b.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(m),f++}else if(w.isSpotLight){let b=i.spot[d];b.position.setFromMatrixPosition(w.matrixWorld),b.position.applyMatrix4(m),b.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(m),d++}else if(w.isRectAreaLight){let b=i.rectArea[g];b.position.setFromMatrixPosition(w.matrixWorld),b.position.applyMatrix4(m),o.identity(),r.copy(w.matrixWorld),r.premultiply(m),o.extractRotation(r),b.halfWidth.set(w.width*.5,0,0),b.halfHeight.set(0,w.height*.5,0),b.halfWidth.applyMatrix4(o),b.halfHeight.applyMatrix4(o),g++}else if(w.isPointLight){let b=i.point[u];b.position.setFromMatrixPosition(w.matrixWorld),b.position.applyMatrix4(m),u++}else if(w.isHemisphereLight){let b=i.hemi[x];b.direction.setFromMatrixPosition(w.matrixWorld),b.direction.transformDirection(m),x++}}}return{setup:a,setupView:c,state:i}}function pd(n){let t=new Wv(n),e=[],i=[];function s(h){l.camera=h,e.length=0,i.length=0}function r(h){e.push(h)}function o(h){i.push(h)}function a(){t.setup(e)}function c(h){t.setupView(e,h)}let l={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function Xv(n){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new pd(n),t.set(s,[a])):r>=o.length?(a=new pd(n),o.push(a)):a=o[r],a}function i(){t=new WeakMap}return{get:e,dispose:i}}var qv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Yv=`uniform sampler2D shadow_pass;
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
}`;function Zv(n,t,e){let i=new mo,s=new At,r=new At,o=new Ne,a=new Fa({depthPacking:If}),c=new Na,l={},h=e.maxTextureSize,f={[Di]:wn,[wn]:Di,[vn]:vn},u=new he({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new At},radius:{value:4}},vertexShader:qv,fragmentShader:Yv}),d=u.clone();d.defines.HORIZONTAL_PASS=1;let g=new Se;g.setAttribute("position",new se(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new Ze(g,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=hh;let p=this.type;this.render=function(y,T,S){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||y.length===0)return;let M=n.getRenderTarget(),_=n.getActiveCubeFace(),A=n.getActiveMipmapLevel(),R=n.state;R.setBlending(ci),R.buffers.depth.getReversed()===!0?R.buffers.color.setClear(0,0,0,0):R.buffers.color.setClear(1,1,1,1),R.buffers.depth.setTest(!0),R.setScissorTest(!1);let L=p!==gi&&this.type===gi,I=p===gi&&this.type!==gi;for(let D=0,U=y.length;D<U;D++){let z=y[D],k=z.shadow;if(k===void 0){console.warn("THREE.WebGLShadowMap:",z,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;s.copy(k.mapSize);let J=k.getFrameExtents();if(s.multiply(J),r.copy(k.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/J.x),s.x=r.x*J.x,k.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/J.y),s.y=r.y*J.y,k.mapSize.y=r.y)),k.map===null||L===!0||I===!0){let at=this.type!==gi?{minFilter:sn,magFilter:sn}:{};k.map!==null&&k.map.dispose(),k.map=new xn(s.x,s.y,at),k.map.texture.name=z.name+".shadowMap",k.camera.updateProjectionMatrix()}n.setRenderTarget(k.map),n.clear();let Y=k.getViewportCount();for(let at=0;at<Y;at++){let lt=k.getViewport(at);o.set(r.x*lt.x,r.y*lt.y,r.x*lt.z,r.y*lt.w),R.viewport(o),k.updateMatrices(z,at),i=k.getFrustum(),b(T,S,k.camera,z,this.type)}k.isPointLightShadow!==!0&&this.type===gi&&E(k,S),k.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(M,_,A)};function E(y,T){let S=t.update(x);u.defines.VSM_SAMPLES!==y.blurSamples&&(u.defines.VSM_SAMPLES=y.blurSamples,d.defines.VSM_SAMPLES=y.blurSamples,u.needsUpdate=!0,d.needsUpdate=!0),y.mapPass===null&&(y.mapPass=new xn(s.x,s.y)),u.uniforms.shadow_pass.value=y.map.texture,u.uniforms.resolution.value=y.mapSize,u.uniforms.radius.value=y.radius,n.setRenderTarget(y.mapPass),n.clear(),n.renderBufferDirect(T,null,S,u,x,null),d.uniforms.shadow_pass.value=y.mapPass.texture,d.uniforms.resolution.value=y.mapSize,d.uniforms.radius.value=y.radius,n.setRenderTarget(y.map),n.clear(),n.renderBufferDirect(T,null,S,d,x,null)}function w(y,T,S,M){let _=null,A=S.isPointLight===!0?y.customDistanceMaterial:y.customDepthMaterial;if(A!==void 0)_=A;else if(_=S.isPointLight===!0?c:a,n.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0||T.alphaToCoverage===!0){let R=_.uuid,L=T.uuid,I=l[R];I===void 0&&(I={},l[R]=I);let D=I[L];D===void 0&&(D=_.clone(),I[L]=D,T.addEventListener("dispose",v)),_=D}if(_.visible=T.visible,_.wireframe=T.wireframe,M===gi?_.side=T.shadowSide!==null?T.shadowSide:T.side:_.side=T.shadowSide!==null?T.shadowSide:f[T.side],_.alphaMap=T.alphaMap,_.alphaTest=T.alphaToCoverage===!0?.5:T.alphaTest,_.map=T.map,_.clipShadows=T.clipShadows,_.clippingPlanes=T.clippingPlanes,_.clipIntersection=T.clipIntersection,_.displacementMap=T.displacementMap,_.displacementScale=T.displacementScale,_.displacementBias=T.displacementBias,_.wireframeLinewidth=T.wireframeLinewidth,_.linewidth=T.linewidth,S.isPointLight===!0&&_.isMeshDistanceMaterial===!0){let R=n.properties.get(_);R.light=S}return _}function b(y,T,S,M,_){if(y.visible===!1)return;if(y.layers.test(T.layers)&&(y.isMesh||y.isLine||y.isPoints)&&(y.castShadow||y.receiveShadow&&_===gi)&&(!y.frustumCulled||i.intersectsObject(y))){y.modelViewMatrix.multiplyMatrices(S.matrixWorldInverse,y.matrixWorld);let L=t.update(y),I=y.material;if(Array.isArray(I)){let D=L.groups;for(let U=0,z=D.length;U<z;U++){let k=D[U],J=I[k.materialIndex];if(J&&J.visible){let Y=w(y,J,M,_);y.onBeforeShadow(n,y,T,S,L,Y,k),n.renderBufferDirect(S,null,L,Y,y,k),y.onAfterShadow(n,y,T,S,L,Y,k)}}}else if(I.visible){let D=w(y,I,M,_);y.onBeforeShadow(n,y,T,S,L,D,null),n.renderBufferDirect(S,null,L,D,y,null),y.onAfterShadow(n,y,T,S,L,D,null)}}let R=y.children;for(let L=0,I=R.length;L<I;L++)b(R[L],T,S,M,_)}function v(y){y.target.removeEventListener("dispose",v);for(let S in l){let M=l[S],_=y.target.uuid;_ in M&&(M[_].dispose(),delete M[_])}}}var $v={[qa]:Ya,[Za]:Ka,[$a]:Ja,[bs]:ja,[Ya]:qa,[Ka]:Za,[Ja]:$a,[ja]:bs};function jv(n,t){function e(){let O=!1,it=new Ne,j=null,V=new Ne(0,0,0,0);return{setMask:function(G){j!==G&&!O&&(n.colorMask(G,G,G,G),j=G)},setLocked:function(G){O=G},setClear:function(G,X,tt,st,ht){ht===!0&&(G*=st,X*=st,tt*=st),it.set(G,X,tt,st),V.equals(it)===!1&&(n.clearColor(G,X,tt,st),V.copy(it))},reset:function(){O=!1,j=null,V.set(-1,0,0,0)}}}function i(){let O=!1,it=!1,j=null,V=null,G=null;return{setReversed:function(X){if(it!==X){let tt=t.get("EXT_clip_control");X?tt.clipControlEXT(tt.LOWER_LEFT_EXT,tt.ZERO_TO_ONE_EXT):tt.clipControlEXT(tt.LOWER_LEFT_EXT,tt.NEGATIVE_ONE_TO_ONE_EXT),it=X;let st=G;G=null,this.setClear(st)}},getReversed:function(){return it},setTest:function(X){X?et(n.DEPTH_TEST):ct(n.DEPTH_TEST)},setMask:function(X){j!==X&&!O&&(n.depthMask(X),j=X)},setFunc:function(X){if(it&&(X=$v[X]),V!==X){switch(X){case qa:n.depthFunc(n.NEVER);break;case Ya:n.depthFunc(n.ALWAYS);break;case Za:n.depthFunc(n.LESS);break;case bs:n.depthFunc(n.LEQUAL);break;case $a:n.depthFunc(n.EQUAL);break;case ja:n.depthFunc(n.GEQUAL);break;case Ka:n.depthFunc(n.GREATER);break;case Ja:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}V=X}},setLocked:function(X){O=X},setClear:function(X){G!==X&&(it&&(X=1-X),n.clearDepth(X),G=X)},reset:function(){O=!1,j=null,V=null,G=null,it=!1}}}function s(){let O=!1,it=null,j=null,V=null,G=null,X=null,tt=null,st=null,ht=null;return{setTest:function(vt){O||(vt?et(n.STENCIL_TEST):ct(n.STENCIL_TEST))},setMask:function(vt){it!==vt&&!O&&(n.stencilMask(vt),it=vt)},setFunc:function(vt,Bt,Ct){(j!==vt||V!==Bt||G!==Ct)&&(n.stencilFunc(vt,Bt,Ct),j=vt,V=Bt,G=Ct)},setOp:function(vt,Bt,Ct){(X!==vt||tt!==Bt||st!==Ct)&&(n.stencilOp(vt,Bt,Ct),X=vt,tt=Bt,st=Ct)},setLocked:function(vt){O=vt},setClear:function(vt){ht!==vt&&(n.clearStencil(vt),ht=vt)},reset:function(){O=!1,it=null,j=null,V=null,G=null,X=null,tt=null,st=null,ht=null}}}let r=new e,o=new i,a=new s,c=new WeakMap,l=new WeakMap,h={},f={},u=new WeakMap,d=[],g=null,x=!1,m=null,p=null,E=null,w=null,b=null,v=null,y=null,T=new Qt(0,0,0),S=0,M=!1,_=null,A=null,R=null,L=null,I=null,D=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),U=!1,z=0,k=n.getParameter(n.VERSION);k.indexOf("WebGL")!==-1?(z=parseFloat(/^WebGL (\d)/.exec(k)[1]),U=z>=1):k.indexOf("OpenGL ES")!==-1&&(z=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),U=z>=2);let J=null,Y={},at=n.getParameter(n.SCISSOR_BOX),lt=n.getParameter(n.VIEWPORT),bt=new Ne().fromArray(at),ft=new Ne().fromArray(lt);function _t(O,it,j,V){let G=new Uint8Array(4),X=n.createTexture();n.bindTexture(O,X),n.texParameteri(O,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(O,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let tt=0;tt<j;tt++)O===n.TEXTURE_3D||O===n.TEXTURE_2D_ARRAY?n.texImage3D(it,0,n.RGBA,1,1,V,0,n.RGBA,n.UNSIGNED_BYTE,G):n.texImage2D(it+tt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,G);return X}let Z={};Z[n.TEXTURE_2D]=_t(n.TEXTURE_2D,n.TEXTURE_2D,1),Z[n.TEXTURE_CUBE_MAP]=_t(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Z[n.TEXTURE_2D_ARRAY]=_t(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Z[n.TEXTURE_3D]=_t(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),et(n.DEPTH_TEST),o.setFunc(bs),Ft(!1),Et(ch),et(n.CULL_FACE),Zt(ci);function et(O){h[O]!==!0&&(n.enable(O),h[O]=!0)}function ct(O){h[O]!==!1&&(n.disable(O),h[O]=!1)}function yt(O,it){return f[O]!==it?(n.bindFramebuffer(O,it),f[O]=it,O===n.DRAW_FRAMEBUFFER&&(f[n.FRAMEBUFFER]=it),O===n.FRAMEBUFFER&&(f[n.DRAW_FRAMEBUFFER]=it),!0):!1}function Tt(O,it){let j=d,V=!1;if(O){j=u.get(it),j===void 0&&(j=[],u.set(it,j));let G=O.textures;if(j.length!==G.length||j[0]!==n.COLOR_ATTACHMENT0){for(let X=0,tt=G.length;X<tt;X++)j[X]=n.COLOR_ATTACHMENT0+X;j.length=G.length,V=!0}}else j[0]!==n.BACK&&(j[0]=n.BACK,V=!0);V&&n.drawBuffers(j)}function Ht(O){return g!==O?(n.useProgram(O),g=O,!0):!1}let Me={[Qi]:n.FUNC_ADD,[hf]:n.FUNC_SUBTRACT,[uf]:n.FUNC_REVERSE_SUBTRACT};Me[ff]=n.MIN,Me[df]=n.MAX;let B={[pf]:n.ZERO,[mf]:n.ONE,[gf]:n.SRC_COLOR,[_a]:n.SRC_ALPHA,[bf]:n.SRC_ALPHA_SATURATE,[_f]:n.DST_COLOR,[vf]:n.DST_ALPHA,[xf]:n.ONE_MINUS_SRC_COLOR,[Ma]:n.ONE_MINUS_SRC_ALPHA,[Mf]:n.ONE_MINUS_DST_COLOR,[yf]:n.ONE_MINUS_DST_ALPHA,[Sf]:n.CONSTANT_COLOR,[wf]:n.ONE_MINUS_CONSTANT_COLOR,[Tf]:n.CONSTANT_ALPHA,[Ef]:n.ONE_MINUS_CONSTANT_ALPHA};function Zt(O,it,j,V,G,X,tt,st,ht,vt){if(O===ci){x===!0&&(ct(n.BLEND),x=!1);return}if(x===!1&&(et(n.BLEND),x=!0),O!==cf){if(O!==m||vt!==M){if((p!==Qi||b!==Qi)&&(n.blendEquation(n.FUNC_ADD),p=Qi,b=Qi),vt)switch(O){case Ms:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ue:n.blendFunc(n.ONE,n.ONE);break;case uh:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case fh:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}else switch(O){case Ms:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ue:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case uh:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case fh:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}E=null,w=null,v=null,y=null,T.set(0,0,0),S=0,m=O,M=vt}return}G=G||it,X=X||j,tt=tt||V,(it!==p||G!==b)&&(n.blendEquationSeparate(Me[it],Me[G]),p=it,b=G),(j!==E||V!==w||X!==v||tt!==y)&&(n.blendFuncSeparate(B[j],B[V],B[X],B[tt]),E=j,w=V,v=X,y=tt),(st.equals(T)===!1||ht!==S)&&(n.blendColor(st.r,st.g,st.b,ht),T.copy(st),S=ht),m=O,M=!1}function Dt(O,it){O.side===vn?ct(n.CULL_FACE):et(n.CULL_FACE);let j=O.side===wn;it&&(j=!j),Ft(j),O.blending===Ms&&O.transparent===!1?Zt(ci):Zt(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),o.setFunc(O.depthFunc),o.setTest(O.depthTest),o.setMask(O.depthWrite),r.setMask(O.colorWrite);let V=O.stencilWrite;a.setTest(V),V&&(a.setMask(O.stencilWriteMask),a.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),a.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),Rt(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?et(n.SAMPLE_ALPHA_TO_COVERAGE):ct(n.SAMPLE_ALPHA_TO_COVERAGE)}function Ft(O){_!==O&&(O?n.frontFace(n.CW):n.frontFace(n.CCW),_=O)}function Et(O){O!==of?(et(n.CULL_FACE),O!==A&&(O===ch?n.cullFace(n.BACK):O===af?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):ct(n.CULL_FACE),A=O}function ae(O){O!==R&&(U&&n.lineWidth(O),R=O)}function Rt(O,it,j){O?(et(n.POLYGON_OFFSET_FILL),(L!==it||I!==j)&&(n.polygonOffset(it,j),L=it,I=j)):ct(n.POLYGON_OFFSET_FILL)}function qt(O){O?et(n.SCISSOR_TEST):ct(n.SCISSOR_TEST)}function Re(O){O===void 0&&(O=n.TEXTURE0+D-1),J!==O&&(n.activeTexture(O),J=O)}function ge(O,it,j){j===void 0&&(J===null?j=n.TEXTURE0+D-1:j=J);let V=Y[j];V===void 0&&(V={type:void 0,texture:void 0},Y[j]=V),(V.type!==O||V.texture!==it)&&(J!==j&&(n.activeTexture(j),J=j),n.bindTexture(O,it||Z[O]),V.type=O,V.texture=it)}function F(){let O=Y[J];O!==void 0&&O.type!==void 0&&(n.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function C(){try{n.compressedTexImage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function K(){try{n.compressedTexImage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function rt(){try{n.texSubImage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ut(){try{n.texSubImage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ot(){try{n.compressedTexSubImage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Ut(){try{n.compressedTexSubImage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function gt(){try{n.texStorage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Pt(){try{n.texStorage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Nt(){try{n.texImage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function xt(){try{n.texImage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Mt(O){bt.equals(O)===!1&&(n.scissor(O.x,O.y,O.z,O.w),bt.copy(O))}function kt(O){ft.equals(O)===!1&&(n.viewport(O.x,O.y,O.z,O.w),ft.copy(O))}function H(O,it){let j=l.get(it);j===void 0&&(j=new WeakMap,l.set(it,j));let V=j.get(O);V===void 0&&(V=n.getUniformBlockIndex(it,O.name),j.set(O,V))}function $(O,it){let V=l.get(it).get(O);c.get(it)!==V&&(n.uniformBlockBinding(it,V,O.__bindingPointIndex),c.set(it,V))}function dt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},J=null,Y={},f={},u=new WeakMap,d=[],g=null,x=!1,m=null,p=null,E=null,w=null,b=null,v=null,y=null,T=new Qt(0,0,0),S=0,M=!1,_=null,A=null,R=null,L=null,I=null,bt.set(0,0,n.canvas.width,n.canvas.height),ft.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:et,disable:ct,bindFramebuffer:yt,drawBuffers:Tt,useProgram:Ht,setBlending:Zt,setMaterial:Dt,setFlipSided:Ft,setCullFace:Et,setLineWidth:ae,setPolygonOffset:Rt,setScissorTest:qt,activeTexture:Re,bindTexture:ge,unbindTexture:F,compressedTexImage2D:C,compressedTexImage3D:K,texImage2D:Nt,texImage3D:xt,updateUBOMapping:H,uniformBlockBinding:$,texStorage2D:gt,texStorage3D:Pt,texSubImage2D:rt,texSubImage3D:ut,compressedTexSubImage2D:ot,compressedTexSubImage3D:Ut,scissor:Mt,viewport:kt,reset:dt}}function Kv(n,t,e,i,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new At,h=new WeakMap,f,u=new WeakMap,d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(F,C){return d?new OffscreenCanvas(F,C):ro("canvas")}function x(F,C,K){let rt=1,ut=ge(F);if((ut.width>K||ut.height>K)&&(rt=K/Math.max(ut.width,ut.height)),rt<1)if(typeof HTMLImageElement<"u"&&F instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&F instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&F instanceof ImageBitmap||typeof VideoFrame<"u"&&F instanceof VideoFrame){let ot=Math.floor(rt*ut.width),Ut=Math.floor(rt*ut.height);f===void 0&&(f=g(ot,Ut));let gt=C?g(ot,Ut):f;return gt.width=ot,gt.height=Ut,gt.getContext("2d").drawImage(F,0,0,ot,Ut),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ut.width+"x"+ut.height+") to ("+ot+"x"+Ut+")."),gt}else return"data"in F&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ut.width+"x"+ut.height+")."),F;return F}function m(F){return F.generateMipmaps}function p(F){n.generateMipmap(F)}function E(F){return F.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:F.isWebGL3DRenderTarget?n.TEXTURE_3D:F.isWebGLArrayRenderTarget||F.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function w(F,C,K,rt,ut=!1){if(F!==null){if(n[F]!==void 0)return n[F];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+F+"'")}let ot=C;if(C===n.RED&&(K===n.FLOAT&&(ot=n.R32F),K===n.HALF_FLOAT&&(ot=n.R16F),K===n.UNSIGNED_BYTE&&(ot=n.R8)),C===n.RED_INTEGER&&(K===n.UNSIGNED_BYTE&&(ot=n.R8UI),K===n.UNSIGNED_SHORT&&(ot=n.R16UI),K===n.UNSIGNED_INT&&(ot=n.R32UI),K===n.BYTE&&(ot=n.R8I),K===n.SHORT&&(ot=n.R16I),K===n.INT&&(ot=n.R32I)),C===n.RG&&(K===n.FLOAT&&(ot=n.RG32F),K===n.HALF_FLOAT&&(ot=n.RG16F),K===n.UNSIGNED_BYTE&&(ot=n.RG8)),C===n.RG_INTEGER&&(K===n.UNSIGNED_BYTE&&(ot=n.RG8UI),K===n.UNSIGNED_SHORT&&(ot=n.RG16UI),K===n.UNSIGNED_INT&&(ot=n.RG32UI),K===n.BYTE&&(ot=n.RG8I),K===n.SHORT&&(ot=n.RG16I),K===n.INT&&(ot=n.RG32I)),C===n.RGB_INTEGER&&(K===n.UNSIGNED_BYTE&&(ot=n.RGB8UI),K===n.UNSIGNED_SHORT&&(ot=n.RGB16UI),K===n.UNSIGNED_INT&&(ot=n.RGB32UI),K===n.BYTE&&(ot=n.RGB8I),K===n.SHORT&&(ot=n.RGB16I),K===n.INT&&(ot=n.RGB32I)),C===n.RGBA_INTEGER&&(K===n.UNSIGNED_BYTE&&(ot=n.RGBA8UI),K===n.UNSIGNED_SHORT&&(ot=n.RGBA16UI),K===n.UNSIGNED_INT&&(ot=n.RGBA32UI),K===n.BYTE&&(ot=n.RGBA8I),K===n.SHORT&&(ot=n.RGBA16I),K===n.INT&&(ot=n.RGBA32I)),C===n.RGB&&(K===n.UNSIGNED_INT_5_9_9_9_REV&&(ot=n.RGB9_E5),K===n.UNSIGNED_INT_10F_11F_11F_REV&&(ot=n.R11F_G11F_B10F)),C===n.RGBA){let Ut=ut?io:ue.getTransfer(rt);K===n.FLOAT&&(ot=n.RGBA32F),K===n.HALF_FLOAT&&(ot=n.RGBA16F),K===n.UNSIGNED_BYTE&&(ot=Ut===_e?n.SRGB8_ALPHA8:n.RGBA8),K===n.UNSIGNED_SHORT_4_4_4_4&&(ot=n.RGBA4),K===n.UNSIGNED_SHORT_5_5_5_1&&(ot=n.RGB5_A1)}return(ot===n.R16F||ot===n.R32F||ot===n.RG16F||ot===n.RG32F||ot===n.RGBA16F||ot===n.RGBA32F)&&t.get("EXT_color_buffer_float"),ot}function b(F,C){let K;return F?C===null||C===rs||C===br?K=n.DEPTH24_STENCIL8:C===Dn?K=n.DEPTH32F_STENCIL8:C===Mr&&(K=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):C===null||C===rs||C===br?K=n.DEPTH_COMPONENT24:C===Dn?K=n.DEPTH_COMPONENT32F:C===Mr&&(K=n.DEPTH_COMPONENT16),K}function v(F,C){return m(F)===!0||F.isFramebufferTexture&&F.minFilter!==sn&&F.minFilter!==li?Math.log2(Math.max(C.width,C.height))+1:F.mipmaps!==void 0&&F.mipmaps.length>0?F.mipmaps.length:F.isCompressedTexture&&Array.isArray(F.image)?C.mipmaps.length:1}function y(F){let C=F.target;C.removeEventListener("dispose",y),S(C),C.isVideoTexture&&h.delete(C)}function T(F){let C=F.target;C.removeEventListener("dispose",T),_(C)}function S(F){let C=i.get(F);if(C.__webglInit===void 0)return;let K=F.source,rt=u.get(K);if(rt){let ut=rt[C.__cacheKey];ut.usedTimes--,ut.usedTimes===0&&M(F),Object.keys(rt).length===0&&u.delete(K)}i.remove(F)}function M(F){let C=i.get(F);n.deleteTexture(C.__webglTexture);let K=F.source,rt=u.get(K);delete rt[C.__cacheKey],o.memory.textures--}function _(F){let C=i.get(F);if(F.depthTexture&&(F.depthTexture.dispose(),i.remove(F.depthTexture)),F.isWebGLCubeRenderTarget)for(let rt=0;rt<6;rt++){if(Array.isArray(C.__webglFramebuffer[rt]))for(let ut=0;ut<C.__webglFramebuffer[rt].length;ut++)n.deleteFramebuffer(C.__webglFramebuffer[rt][ut]);else n.deleteFramebuffer(C.__webglFramebuffer[rt]);C.__webglDepthbuffer&&n.deleteRenderbuffer(C.__webglDepthbuffer[rt])}else{if(Array.isArray(C.__webglFramebuffer))for(let rt=0;rt<C.__webglFramebuffer.length;rt++)n.deleteFramebuffer(C.__webglFramebuffer[rt]);else n.deleteFramebuffer(C.__webglFramebuffer);if(C.__webglDepthbuffer&&n.deleteRenderbuffer(C.__webglDepthbuffer),C.__webglMultisampledFramebuffer&&n.deleteFramebuffer(C.__webglMultisampledFramebuffer),C.__webglColorRenderbuffer)for(let rt=0;rt<C.__webglColorRenderbuffer.length;rt++)C.__webglColorRenderbuffer[rt]&&n.deleteRenderbuffer(C.__webglColorRenderbuffer[rt]);C.__webglDepthRenderbuffer&&n.deleteRenderbuffer(C.__webglDepthRenderbuffer)}let K=F.textures;for(let rt=0,ut=K.length;rt<ut;rt++){let ot=i.get(K[rt]);ot.__webglTexture&&(n.deleteTexture(ot.__webglTexture),o.memory.textures--),i.remove(K[rt])}i.remove(F)}let A=0;function R(){A=0}function L(){let F=A;return F>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+F+" texture units while this GPU supports only "+s.maxTextures),A+=1,F}function I(F){let C=[];return C.push(F.wrapS),C.push(F.wrapT),C.push(F.wrapR||0),C.push(F.magFilter),C.push(F.minFilter),C.push(F.anisotropy),C.push(F.internalFormat),C.push(F.format),C.push(F.type),C.push(F.generateMipmaps),C.push(F.premultiplyAlpha),C.push(F.flipY),C.push(F.unpackAlignment),C.push(F.colorSpace),C.join()}function D(F,C){let K=i.get(F);if(F.isVideoTexture&&qt(F),F.isRenderTargetTexture===!1&&F.isExternalTexture!==!0&&F.version>0&&K.__version!==F.version){let rt=F.image;if(rt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(rt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Z(K,F,C);return}}else F.isExternalTexture&&(K.__webglTexture=F.sourceTexture?F.sourceTexture:null);e.bindTexture(n.TEXTURE_2D,K.__webglTexture,n.TEXTURE0+C)}function U(F,C){let K=i.get(F);if(F.isRenderTargetTexture===!1&&F.version>0&&K.__version!==F.version){Z(K,F,C);return}e.bindTexture(n.TEXTURE_2D_ARRAY,K.__webglTexture,n.TEXTURE0+C)}function z(F,C){let K=i.get(F);if(F.isRenderTargetTexture===!1&&F.version>0&&K.__version!==F.version){Z(K,F,C);return}e.bindTexture(n.TEXTURE_3D,K.__webglTexture,n.TEXTURE0+C)}function k(F,C){let K=i.get(F);if(F.version>0&&K.__version!==F.version){et(K,F,C);return}e.bindTexture(n.TEXTURE_CUBE_MAP,K.__webglTexture,n.TEXTURE0+C)}let J={[ba]:n.REPEAT,[Ji]:n.CLAMP_TO_EDGE,[Sa]:n.MIRRORED_REPEAT},Y={[sn]:n.NEAREST,[Rf]:n.NEAREST_MIPMAP_NEAREST,[To]:n.NEAREST_MIPMAP_LINEAR,[li]:n.LINEAR,[al]:n.LINEAR_MIPMAP_NEAREST,[ss]:n.LINEAR_MIPMAP_LINEAR},at={[Ff]:n.NEVER,[kf]:n.ALWAYS,[Nf]:n.LESS,[Sh]:n.LEQUAL,[Uf]:n.EQUAL,[zf]:n.GEQUAL,[Of]:n.GREATER,[Bf]:n.NOTEQUAL};function lt(F,C){if(C.type===Dn&&t.has("OES_texture_float_linear")===!1&&(C.magFilter===li||C.magFilter===al||C.magFilter===To||C.magFilter===ss||C.minFilter===li||C.minFilter===al||C.minFilter===To||C.minFilter===ss)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(F,n.TEXTURE_WRAP_S,J[C.wrapS]),n.texParameteri(F,n.TEXTURE_WRAP_T,J[C.wrapT]),(F===n.TEXTURE_3D||F===n.TEXTURE_2D_ARRAY)&&n.texParameteri(F,n.TEXTURE_WRAP_R,J[C.wrapR]),n.texParameteri(F,n.TEXTURE_MAG_FILTER,Y[C.magFilter]),n.texParameteri(F,n.TEXTURE_MIN_FILTER,Y[C.minFilter]),C.compareFunction&&(n.texParameteri(F,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(F,n.TEXTURE_COMPARE_FUNC,at[C.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(C.magFilter===sn||C.minFilter!==To&&C.minFilter!==ss||C.type===Dn&&t.has("OES_texture_float_linear")===!1)return;if(C.anisotropy>1||i.get(C).__currentAnisotropy){let K=t.get("EXT_texture_filter_anisotropic");n.texParameterf(F,K.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(C.anisotropy,s.getMaxAnisotropy())),i.get(C).__currentAnisotropy=C.anisotropy}}}function bt(F,C){let K=!1;F.__webglInit===void 0&&(F.__webglInit=!0,C.addEventListener("dispose",y));let rt=C.source,ut=u.get(rt);ut===void 0&&(ut={},u.set(rt,ut));let ot=I(C);if(ot!==F.__cacheKey){ut[ot]===void 0&&(ut[ot]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,K=!0),ut[ot].usedTimes++;let Ut=ut[F.__cacheKey];Ut!==void 0&&(ut[F.__cacheKey].usedTimes--,Ut.usedTimes===0&&M(C)),F.__cacheKey=ot,F.__webglTexture=ut[ot].texture}return K}function ft(F,C,K){return Math.floor(Math.floor(F/K)/C)}function _t(F,C,K,rt){let ot=F.updateRanges;if(ot.length===0)e.texSubImage2D(n.TEXTURE_2D,0,0,0,C.width,C.height,K,rt,C.data);else{ot.sort((xt,Mt)=>xt.start-Mt.start);let Ut=0;for(let xt=1;xt<ot.length;xt++){let Mt=ot[Ut],kt=ot[xt],H=Mt.start+Mt.count,$=ft(kt.start,C.width,4),dt=ft(Mt.start,C.width,4);kt.start<=H+1&&$===dt&&ft(kt.start+kt.count-1,C.width,4)===$?Mt.count=Math.max(Mt.count,kt.start+kt.count-Mt.start):(++Ut,ot[Ut]=kt)}ot.length=Ut+1;let gt=n.getParameter(n.UNPACK_ROW_LENGTH),Pt=n.getParameter(n.UNPACK_SKIP_PIXELS),Nt=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,C.width);for(let xt=0,Mt=ot.length;xt<Mt;xt++){let kt=ot[xt],H=Math.floor(kt.start/4),$=Math.ceil(kt.count/4),dt=H%C.width,O=Math.floor(H/C.width),it=$,j=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,dt),n.pixelStorei(n.UNPACK_SKIP_ROWS,O),e.texSubImage2D(n.TEXTURE_2D,0,dt,O,it,j,K,rt,C.data)}F.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,gt),n.pixelStorei(n.UNPACK_SKIP_PIXELS,Pt),n.pixelStorei(n.UNPACK_SKIP_ROWS,Nt)}}function Z(F,C,K){let rt=n.TEXTURE_2D;(C.isDataArrayTexture||C.isCompressedArrayTexture)&&(rt=n.TEXTURE_2D_ARRAY),C.isData3DTexture&&(rt=n.TEXTURE_3D);let ut=bt(F,C),ot=C.source;e.bindTexture(rt,F.__webglTexture,n.TEXTURE0+K);let Ut=i.get(ot);if(ot.version!==Ut.__version||ut===!0){e.activeTexture(n.TEXTURE0+K);let gt=ue.getPrimaries(ue.workingColorSpace),Pt=C.colorSpace===Ui?null:ue.getPrimaries(C.colorSpace),Nt=C.colorSpace===Ui||gt===Pt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,C.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,C.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Nt);let xt=x(C.image,!1,s.maxTextureSize);xt=Re(C,xt);let Mt=r.convert(C.format,C.colorSpace),kt=r.convert(C.type),H=w(C.internalFormat,Mt,kt,C.colorSpace,C.isVideoTexture);lt(rt,C);let $,dt=C.mipmaps,O=C.isVideoTexture!==!0,it=Ut.__version===void 0||ut===!0,j=ot.dataReady,V=v(C,xt);if(C.isDepthTexture)H=b(C.format===Sr,C.type),it&&(O?e.texStorage2D(n.TEXTURE_2D,1,H,xt.width,xt.height):e.texImage2D(n.TEXTURE_2D,0,H,xt.width,xt.height,0,Mt,kt,null));else if(C.isDataTexture)if(dt.length>0){O&&it&&e.texStorage2D(n.TEXTURE_2D,V,H,dt[0].width,dt[0].height);for(let G=0,X=dt.length;G<X;G++)$=dt[G],O?j&&e.texSubImage2D(n.TEXTURE_2D,G,0,0,$.width,$.height,Mt,kt,$.data):e.texImage2D(n.TEXTURE_2D,G,H,$.width,$.height,0,Mt,kt,$.data);C.generateMipmaps=!1}else O?(it&&e.texStorage2D(n.TEXTURE_2D,V,H,xt.width,xt.height),j&&_t(C,xt,Mt,kt)):e.texImage2D(n.TEXTURE_2D,0,H,xt.width,xt.height,0,Mt,kt,xt.data);else if(C.isCompressedTexture)if(C.isCompressedArrayTexture){O&&it&&e.texStorage3D(n.TEXTURE_2D_ARRAY,V,H,dt[0].width,dt[0].height,xt.depth);for(let G=0,X=dt.length;G<X;G++)if($=dt[G],C.format!==yn)if(Mt!==null)if(O){if(j)if(C.layerUpdates.size>0){let tt=Ih($.width,$.height,C.format,C.type);for(let st of C.layerUpdates){let ht=$.data.subarray(st*tt/$.data.BYTES_PER_ELEMENT,(st+1)*tt/$.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,G,0,0,st,$.width,$.height,1,Mt,ht)}C.clearLayerUpdates()}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,G,0,0,0,$.width,$.height,xt.depth,Mt,$.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,G,H,$.width,$.height,xt.depth,0,$.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else O?j&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,G,0,0,0,$.width,$.height,xt.depth,Mt,kt,$.data):e.texImage3D(n.TEXTURE_2D_ARRAY,G,H,$.width,$.height,xt.depth,0,Mt,kt,$.data)}else{O&&it&&e.texStorage2D(n.TEXTURE_2D,V,H,dt[0].width,dt[0].height);for(let G=0,X=dt.length;G<X;G++)$=dt[G],C.format!==yn?Mt!==null?O?j&&e.compressedTexSubImage2D(n.TEXTURE_2D,G,0,0,$.width,$.height,Mt,$.data):e.compressedTexImage2D(n.TEXTURE_2D,G,H,$.width,$.height,0,$.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):O?j&&e.texSubImage2D(n.TEXTURE_2D,G,0,0,$.width,$.height,Mt,kt,$.data):e.texImage2D(n.TEXTURE_2D,G,H,$.width,$.height,0,Mt,kt,$.data)}else if(C.isDataArrayTexture)if(O){if(it&&e.texStorage3D(n.TEXTURE_2D_ARRAY,V,H,xt.width,xt.height,xt.depth),j)if(C.layerUpdates.size>0){let G=Ih(xt.width,xt.height,C.format,C.type);for(let X of C.layerUpdates){let tt=xt.data.subarray(X*G/xt.data.BYTES_PER_ELEMENT,(X+1)*G/xt.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,X,xt.width,xt.height,1,Mt,kt,tt)}C.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,xt.width,xt.height,xt.depth,Mt,kt,xt.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,H,xt.width,xt.height,xt.depth,0,Mt,kt,xt.data);else if(C.isData3DTexture)O?(it&&e.texStorage3D(n.TEXTURE_3D,V,H,xt.width,xt.height,xt.depth),j&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,xt.width,xt.height,xt.depth,Mt,kt,xt.data)):e.texImage3D(n.TEXTURE_3D,0,H,xt.width,xt.height,xt.depth,0,Mt,kt,xt.data);else if(C.isFramebufferTexture){if(it)if(O)e.texStorage2D(n.TEXTURE_2D,V,H,xt.width,xt.height);else{let G=xt.width,X=xt.height;for(let tt=0;tt<V;tt++)e.texImage2D(n.TEXTURE_2D,tt,H,G,X,0,Mt,kt,null),G>>=1,X>>=1}}else if(dt.length>0){if(O&&it){let G=ge(dt[0]);e.texStorage2D(n.TEXTURE_2D,V,H,G.width,G.height)}for(let G=0,X=dt.length;G<X;G++)$=dt[G],O?j&&e.texSubImage2D(n.TEXTURE_2D,G,0,0,Mt,kt,$):e.texImage2D(n.TEXTURE_2D,G,H,Mt,kt,$);C.generateMipmaps=!1}else if(O){if(it){let G=ge(xt);e.texStorage2D(n.TEXTURE_2D,V,H,G.width,G.height)}j&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,Mt,kt,xt)}else e.texImage2D(n.TEXTURE_2D,0,H,Mt,kt,xt);m(C)&&p(rt),Ut.__version=ot.version,C.onUpdate&&C.onUpdate(C)}F.__version=C.version}function et(F,C,K){if(C.image.length!==6)return;let rt=bt(F,C),ut=C.source;e.bindTexture(n.TEXTURE_CUBE_MAP,F.__webglTexture,n.TEXTURE0+K);let ot=i.get(ut);if(ut.version!==ot.__version||rt===!0){e.activeTexture(n.TEXTURE0+K);let Ut=ue.getPrimaries(ue.workingColorSpace),gt=C.colorSpace===Ui?null:ue.getPrimaries(C.colorSpace),Pt=C.colorSpace===Ui||Ut===gt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,C.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,C.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Pt);let Nt=C.isCompressedTexture||C.image[0].isCompressedTexture,xt=C.image[0]&&C.image[0].isDataTexture,Mt=[];for(let X=0;X<6;X++)!Nt&&!xt?Mt[X]=x(C.image[X],!0,s.maxCubemapSize):Mt[X]=xt?C.image[X].image:C.image[X],Mt[X]=Re(C,Mt[X]);let kt=Mt[0],H=r.convert(C.format,C.colorSpace),$=r.convert(C.type),dt=w(C.internalFormat,H,$,C.colorSpace),O=C.isVideoTexture!==!0,it=ot.__version===void 0||rt===!0,j=ut.dataReady,V=v(C,kt);lt(n.TEXTURE_CUBE_MAP,C);let G;if(Nt){O&&it&&e.texStorage2D(n.TEXTURE_CUBE_MAP,V,dt,kt.width,kt.height);for(let X=0;X<6;X++){G=Mt[X].mipmaps;for(let tt=0;tt<G.length;tt++){let st=G[tt];C.format!==yn?H!==null?O?j&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,tt,0,0,st.width,st.height,H,st.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,tt,dt,st.width,st.height,0,st.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):O?j&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,tt,0,0,st.width,st.height,H,$,st.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,tt,dt,st.width,st.height,0,H,$,st.data)}}}else{if(G=C.mipmaps,O&&it){G.length>0&&V++;let X=ge(Mt[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,V,dt,X.width,X.height)}for(let X=0;X<6;X++)if(xt){O?j&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,0,0,Mt[X].width,Mt[X].height,H,$,Mt[X].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,dt,Mt[X].width,Mt[X].height,0,H,$,Mt[X].data);for(let tt=0;tt<G.length;tt++){let ht=G[tt].image[X].image;O?j&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,tt+1,0,0,ht.width,ht.height,H,$,ht.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,tt+1,dt,ht.width,ht.height,0,H,$,ht.data)}}else{O?j&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,0,0,H,$,Mt[X]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,dt,H,$,Mt[X]);for(let tt=0;tt<G.length;tt++){let st=G[tt];O?j&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,tt+1,0,0,H,$,st.image[X]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,tt+1,dt,H,$,st.image[X])}}}m(C)&&p(n.TEXTURE_CUBE_MAP),ot.__version=ut.version,C.onUpdate&&C.onUpdate(C)}F.__version=C.version}function ct(F,C,K,rt,ut,ot){let Ut=r.convert(K.format,K.colorSpace),gt=r.convert(K.type),Pt=w(K.internalFormat,Ut,gt,K.colorSpace),Nt=i.get(C),xt=i.get(K);if(xt.__renderTarget=C,!Nt.__hasExternalTextures){let Mt=Math.max(1,C.width>>ot),kt=Math.max(1,C.height>>ot);ut===n.TEXTURE_3D||ut===n.TEXTURE_2D_ARRAY?e.texImage3D(ut,ot,Pt,Mt,kt,C.depth,0,Ut,gt,null):e.texImage2D(ut,ot,Pt,Mt,kt,0,Ut,gt,null)}e.bindFramebuffer(n.FRAMEBUFFER,F),Rt(C)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,rt,ut,xt.__webglTexture,0,ae(C)):(ut===n.TEXTURE_2D||ut>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ut<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,rt,ut,xt.__webglTexture,ot),e.bindFramebuffer(n.FRAMEBUFFER,null)}function yt(F,C,K){if(n.bindRenderbuffer(n.RENDERBUFFER,F),C.depthBuffer){let rt=C.depthTexture,ut=rt&&rt.isDepthTexture?rt.type:null,ot=b(C.stencilBuffer,ut),Ut=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,gt=ae(C);Rt(C)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,gt,ot,C.width,C.height):K?n.renderbufferStorageMultisample(n.RENDERBUFFER,gt,ot,C.width,C.height):n.renderbufferStorage(n.RENDERBUFFER,ot,C.width,C.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Ut,n.RENDERBUFFER,F)}else{let rt=C.textures;for(let ut=0;ut<rt.length;ut++){let ot=rt[ut],Ut=r.convert(ot.format,ot.colorSpace),gt=r.convert(ot.type),Pt=w(ot.internalFormat,Ut,gt,ot.colorSpace),Nt=ae(C);K&&Rt(C)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Nt,Pt,C.width,C.height):Rt(C)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Nt,Pt,C.width,C.height):n.renderbufferStorage(n.RENDERBUFFER,Pt,C.width,C.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Tt(F,C){if(C&&C.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,F),!(C.depthTexture&&C.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let rt=i.get(C.depthTexture);rt.__renderTarget=C,(!rt.__webglTexture||C.depthTexture.image.width!==C.width||C.depthTexture.image.height!==C.height)&&(C.depthTexture.image.width=C.width,C.depthTexture.image.height=C.height,C.depthTexture.needsUpdate=!0),D(C.depthTexture,0);let ut=rt.__webglTexture,ot=ae(C);if(C.depthTexture.format===fr)Rt(C)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ut,0,ot):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ut,0);else if(C.depthTexture.format===Sr)Rt(C)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ut,0,ot):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ut,0);else throw new Error("Unknown depthTexture format")}function Ht(F){let C=i.get(F),K=F.isWebGLCubeRenderTarget===!0;if(C.__boundDepthTexture!==F.depthTexture){let rt=F.depthTexture;if(C.__depthDisposeCallback&&C.__depthDisposeCallback(),rt){let ut=()=>{delete C.__boundDepthTexture,delete C.__depthDisposeCallback,rt.removeEventListener("dispose",ut)};rt.addEventListener("dispose",ut),C.__depthDisposeCallback=ut}C.__boundDepthTexture=rt}if(F.depthTexture&&!C.__autoAllocateDepthBuffer){if(K)throw new Error("target.depthTexture not supported in Cube render targets");let rt=F.texture.mipmaps;rt&&rt.length>0?Tt(C.__webglFramebuffer[0],F):Tt(C.__webglFramebuffer,F)}else if(K){C.__webglDepthbuffer=[];for(let rt=0;rt<6;rt++)if(e.bindFramebuffer(n.FRAMEBUFFER,C.__webglFramebuffer[rt]),C.__webglDepthbuffer[rt]===void 0)C.__webglDepthbuffer[rt]=n.createRenderbuffer(),yt(C.__webglDepthbuffer[rt],F,!1);else{let ut=F.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ot=C.__webglDepthbuffer[rt];n.bindRenderbuffer(n.RENDERBUFFER,ot),n.framebufferRenderbuffer(n.FRAMEBUFFER,ut,n.RENDERBUFFER,ot)}}else{let rt=F.texture.mipmaps;if(rt&&rt.length>0?e.bindFramebuffer(n.FRAMEBUFFER,C.__webglFramebuffer[0]):e.bindFramebuffer(n.FRAMEBUFFER,C.__webglFramebuffer),C.__webglDepthbuffer===void 0)C.__webglDepthbuffer=n.createRenderbuffer(),yt(C.__webglDepthbuffer,F,!1);else{let ut=F.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ot=C.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,ot),n.framebufferRenderbuffer(n.FRAMEBUFFER,ut,n.RENDERBUFFER,ot)}}e.bindFramebuffer(n.FRAMEBUFFER,null)}function Me(F,C,K){let rt=i.get(F);C!==void 0&&ct(rt.__webglFramebuffer,F,F.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),K!==void 0&&Ht(F)}function B(F){let C=F.texture,K=i.get(F),rt=i.get(C);F.addEventListener("dispose",T);let ut=F.textures,ot=F.isWebGLCubeRenderTarget===!0,Ut=ut.length>1;if(Ut||(rt.__webglTexture===void 0&&(rt.__webglTexture=n.createTexture()),rt.__version=C.version,o.memory.textures++),ot){K.__webglFramebuffer=[];for(let gt=0;gt<6;gt++)if(C.mipmaps&&C.mipmaps.length>0){K.__webglFramebuffer[gt]=[];for(let Pt=0;Pt<C.mipmaps.length;Pt++)K.__webglFramebuffer[gt][Pt]=n.createFramebuffer()}else K.__webglFramebuffer[gt]=n.createFramebuffer()}else{if(C.mipmaps&&C.mipmaps.length>0){K.__webglFramebuffer=[];for(let gt=0;gt<C.mipmaps.length;gt++)K.__webglFramebuffer[gt]=n.createFramebuffer()}else K.__webglFramebuffer=n.createFramebuffer();if(Ut)for(let gt=0,Pt=ut.length;gt<Pt;gt++){let Nt=i.get(ut[gt]);Nt.__webglTexture===void 0&&(Nt.__webglTexture=n.createTexture(),o.memory.textures++)}if(F.samples>0&&Rt(F)===!1){K.__webglMultisampledFramebuffer=n.createFramebuffer(),K.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,K.__webglMultisampledFramebuffer);for(let gt=0;gt<ut.length;gt++){let Pt=ut[gt];K.__webglColorRenderbuffer[gt]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,K.__webglColorRenderbuffer[gt]);let Nt=r.convert(Pt.format,Pt.colorSpace),xt=r.convert(Pt.type),Mt=w(Pt.internalFormat,Nt,xt,Pt.colorSpace,F.isXRRenderTarget===!0),kt=ae(F);n.renderbufferStorageMultisample(n.RENDERBUFFER,kt,Mt,F.width,F.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+gt,n.RENDERBUFFER,K.__webglColorRenderbuffer[gt])}n.bindRenderbuffer(n.RENDERBUFFER,null),F.depthBuffer&&(K.__webglDepthRenderbuffer=n.createRenderbuffer(),yt(K.__webglDepthRenderbuffer,F,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(ot){e.bindTexture(n.TEXTURE_CUBE_MAP,rt.__webglTexture),lt(n.TEXTURE_CUBE_MAP,C);for(let gt=0;gt<6;gt++)if(C.mipmaps&&C.mipmaps.length>0)for(let Pt=0;Pt<C.mipmaps.length;Pt++)ct(K.__webglFramebuffer[gt][Pt],F,C,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Pt);else ct(K.__webglFramebuffer[gt],F,C,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0);m(C)&&p(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Ut){for(let gt=0,Pt=ut.length;gt<Pt;gt++){let Nt=ut[gt],xt=i.get(Nt),Mt=n.TEXTURE_2D;(F.isWebGL3DRenderTarget||F.isWebGLArrayRenderTarget)&&(Mt=F.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(Mt,xt.__webglTexture),lt(Mt,Nt),ct(K.__webglFramebuffer,F,Nt,n.COLOR_ATTACHMENT0+gt,Mt,0),m(Nt)&&p(Mt)}e.unbindTexture()}else{let gt=n.TEXTURE_2D;if((F.isWebGL3DRenderTarget||F.isWebGLArrayRenderTarget)&&(gt=F.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(gt,rt.__webglTexture),lt(gt,C),C.mipmaps&&C.mipmaps.length>0)for(let Pt=0;Pt<C.mipmaps.length;Pt++)ct(K.__webglFramebuffer[Pt],F,C,n.COLOR_ATTACHMENT0,gt,Pt);else ct(K.__webglFramebuffer,F,C,n.COLOR_ATTACHMENT0,gt,0);m(C)&&p(gt),e.unbindTexture()}F.depthBuffer&&Ht(F)}function Zt(F){let C=F.textures;for(let K=0,rt=C.length;K<rt;K++){let ut=C[K];if(m(ut)){let ot=E(F),Ut=i.get(ut).__webglTexture;e.bindTexture(ot,Ut),p(ot),e.unbindTexture()}}}let Dt=[],Ft=[];function Et(F){if(F.samples>0){if(Rt(F)===!1){let C=F.textures,K=F.width,rt=F.height,ut=n.COLOR_BUFFER_BIT,ot=F.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Ut=i.get(F),gt=C.length>1;if(gt)for(let Nt=0;Nt<C.length;Nt++)e.bindFramebuffer(n.FRAMEBUFFER,Ut.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Nt,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,Ut.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Nt,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,Ut.__webglMultisampledFramebuffer);let Pt=F.texture.mipmaps;Pt&&Pt.length>0?e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ut.__webglFramebuffer[0]):e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ut.__webglFramebuffer);for(let Nt=0;Nt<C.length;Nt++){if(F.resolveDepthBuffer&&(F.depthBuffer&&(ut|=n.DEPTH_BUFFER_BIT),F.stencilBuffer&&F.resolveStencilBuffer&&(ut|=n.STENCIL_BUFFER_BIT)),gt){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Ut.__webglColorRenderbuffer[Nt]);let xt=i.get(C[Nt]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,xt,0)}n.blitFramebuffer(0,0,K,rt,0,0,K,rt,ut,n.NEAREST),c===!0&&(Dt.length=0,Ft.length=0,Dt.push(n.COLOR_ATTACHMENT0+Nt),F.depthBuffer&&F.resolveDepthBuffer===!1&&(Dt.push(ot),Ft.push(ot),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,Ft)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Dt))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),gt)for(let Nt=0;Nt<C.length;Nt++){e.bindFramebuffer(n.FRAMEBUFFER,Ut.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Nt,n.RENDERBUFFER,Ut.__webglColorRenderbuffer[Nt]);let xt=i.get(C[Nt]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,Ut.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Nt,n.TEXTURE_2D,xt,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ut.__webglMultisampledFramebuffer)}else if(F.depthBuffer&&F.resolveDepthBuffer===!1&&c){let C=F.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[C])}}}function ae(F){return Math.min(s.maxSamples,F.samples)}function Rt(F){let C=i.get(F);return F.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&C.__useRenderToTexture!==!1}function qt(F){let C=o.render.frame;h.get(F)!==C&&(h.set(F,C),F.update())}function Re(F,C){let K=F.colorSpace,rt=F.format,ut=F.type;return F.isCompressedTexture===!0||F.isVideoTexture===!0||K!==Ss&&K!==Ui&&(ue.getTransfer(K)===_e?(rt!==yn||ut!==xi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",K)),C}function ge(F){return typeof HTMLImageElement<"u"&&F instanceof HTMLImageElement?(l.width=F.naturalWidth||F.width,l.height=F.naturalHeight||F.height):typeof VideoFrame<"u"&&F instanceof VideoFrame?(l.width=F.displayWidth,l.height=F.displayHeight):(l.width=F.width,l.height=F.height),l}this.allocateTextureUnit=L,this.resetTextureUnits=R,this.setTexture2D=D,this.setTexture2DArray=U,this.setTexture3D=z,this.setTextureCube=k,this.rebindTextures=Me,this.setupRenderTarget=B,this.updateRenderTargetMipmap=Zt,this.updateMultisampleRenderTarget=Et,this.setupDepthRenderbuffer=Ht,this.setupFrameBufferTexture=ct,this.useMultisampledRTT=Rt}function Jv(n,t){function e(i,s=Ui){let r,o=ue.getTransfer(s);if(i===xi)return n.UNSIGNED_BYTE;if(i===cl)return n.UNSIGNED_SHORT_4_4_4_4;if(i===hl)return n.UNSIGNED_SHORT_5_5_5_1;if(i===xh)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===vh)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===mh)return n.BYTE;if(i===gh)return n.SHORT;if(i===Mr)return n.UNSIGNED_SHORT;if(i===ll)return n.INT;if(i===rs)return n.UNSIGNED_INT;if(i===Dn)return n.FLOAT;if(i===Kn)return n.HALF_FLOAT;if(i===yh)return n.ALPHA;if(i===_h)return n.RGB;if(i===yn)return n.RGBA;if(i===fr)return n.DEPTH_COMPONENT;if(i===Sr)return n.DEPTH_STENCIL;if(i===Mh)return n.RED;if(i===ul)return n.RED_INTEGER;if(i===bh)return n.RG;if(i===fl)return n.RG_INTEGER;if(i===dl)return n.RGBA_INTEGER;if(i===Eo||i===Ao||i===Co||i===Ro)if(o===_e)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Eo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Ao)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Co)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Ro)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Eo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Ao)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Co)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Ro)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===pl||i===ml||i===gl||i===xl)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===pl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===ml)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===gl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===xl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===vl||i===yl||i===_l)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===vl||i===yl)return o===_e?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===_l)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Ml||i===bl||i===Sl||i===wl||i===Tl||i===El||i===Al||i===Cl||i===Rl||i===Pl||i===Il||i===Ll||i===Dl||i===Fl)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Ml)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===bl)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Sl)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===wl)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Tl)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===El)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Al)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Cl)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Rl)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Pl)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Il)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Ll)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Dl)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Fl)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Nl||i===Ul||i===Ol)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===Nl)return o===_e?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Ul)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Ol)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Bl||i===zl||i===kl||i===Vl)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===Bl)return r.COMPRESSED_RED_RGTC1_EXT;if(i===zl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===kl)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Vl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===br?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}var Qv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,ty=`
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

}`,Wh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let i=new vo(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,i=new he({vertexShader:Qv,fragmentShader:ty,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Ze(new yo(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Xh=class extends fi{constructor(t,e){super();let i=this,s=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,f=null,u=null,d=null,g=null,x=typeof XRWebGLBinding<"u",m=new Wh,p={},E=e.getContextAttributes(),w=null,b=null,v=[],y=[],T=new At,S=null,M=new gn;M.viewport=new Ne;let _=new gn;_.viewport=new Ne;let A=[M,_],R=new Xa,L=null,I=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let et=v[Z];return et===void 0&&(et=new xr,v[Z]=et),et.getTargetRaySpace()},this.getControllerGrip=function(Z){let et=v[Z];return et===void 0&&(et=new xr,v[Z]=et),et.getGripSpace()},this.getHand=function(Z){let et=v[Z];return et===void 0&&(et=new xr,v[Z]=et),et.getHandSpace()};function D(Z){let et=y.indexOf(Z.inputSource);if(et===-1)return;let ct=v[et];ct!==void 0&&(ct.update(Z.inputSource,Z.frame,l||o),ct.dispatchEvent({type:Z.type,data:Z.inputSource}))}function U(){s.removeEventListener("select",D),s.removeEventListener("selectstart",D),s.removeEventListener("selectend",D),s.removeEventListener("squeeze",D),s.removeEventListener("squeezestart",D),s.removeEventListener("squeezeend",D),s.removeEventListener("end",U),s.removeEventListener("inputsourceschange",z);for(let Z=0;Z<v.length;Z++){let et=y[Z];et!==null&&(y[Z]=null,v[Z].disconnect(et))}L=null,I=null,m.reset();for(let Z in p)delete p[Z];t.setRenderTarget(w),d=null,u=null,f=null,s=null,b=null,_t.stop(),i.isPresenting=!1,t.setPixelRatio(S),t.setSize(T.width,T.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){r=Z,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){a=Z,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(Z){l=Z},this.getBaseLayer=function(){return u!==null?u:d},this.getBinding=function(){return f===null&&x&&(f=new XRWebGLBinding(s,e)),f},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(Z){if(s=Z,s!==null){if(w=t.getRenderTarget(),s.addEventListener("select",D),s.addEventListener("selectstart",D),s.addEventListener("selectend",D),s.addEventListener("squeeze",D),s.addEventListener("squeezestart",D),s.addEventListener("squeezeend",D),s.addEventListener("end",U),s.addEventListener("inputsourceschange",z),E.xrCompatible!==!0&&await e.makeXRCompatible(),S=t.getPixelRatio(),t.getSize(T),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let ct=null,yt=null,Tt=null;E.depth&&(Tt=E.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,ct=E.stencil?Sr:fr,yt=E.stencil?br:rs);let Ht={colorFormat:e.RGBA8,depthFormat:Tt,scaleFactor:r};f=this.getBinding(),u=f.createProjectionLayer(Ht),s.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),b=new xn(u.textureWidth,u.textureHeight,{format:yn,type:xi,depthTexture:new xo(u.textureWidth,u.textureHeight,yt,void 0,void 0,void 0,void 0,void 0,void 0,ct),stencilBuffer:E.stencil,colorSpace:t.outputColorSpace,samples:E.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1})}else{let ct={antialias:E.antialias,alpha:!0,depth:E.depth,stencil:E.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,e,ct),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),b=new xn(d.framebufferWidth,d.framebufferHeight,{format:yn,type:xi,colorSpace:t.outputColorSpace,stencilBuffer:E.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),_t.setContext(s),_t.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function z(Z){for(let et=0;et<Z.removed.length;et++){let ct=Z.removed[et],yt=y.indexOf(ct);yt>=0&&(y[yt]=null,v[yt].disconnect(ct))}for(let et=0;et<Z.added.length;et++){let ct=Z.added[et],yt=y.indexOf(ct);if(yt===-1){for(let Ht=0;Ht<v.length;Ht++)if(Ht>=y.length){y.push(ct),yt=Ht;break}else if(y[Ht]===null){y[Ht]=ct,yt=Ht;break}if(yt===-1)break}let Tt=v[yt];Tt&&Tt.connect(ct)}}let k=new N,J=new N;function Y(Z,et,ct){k.setFromMatrixPosition(et.matrixWorld),J.setFromMatrixPosition(ct.matrixWorld);let yt=k.distanceTo(J),Tt=et.projectionMatrix.elements,Ht=ct.projectionMatrix.elements,Me=Tt[14]/(Tt[10]-1),B=Tt[14]/(Tt[10]+1),Zt=(Tt[9]+1)/Tt[5],Dt=(Tt[9]-1)/Tt[5],Ft=(Tt[8]-1)/Tt[0],Et=(Ht[8]+1)/Ht[0],ae=Me*Ft,Rt=Me*Et,qt=yt/(-Ft+Et),Re=qt*-Ft;if(et.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(Re),Z.translateZ(qt),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),Tt[10]===-1)Z.projectionMatrix.copy(et.projectionMatrix),Z.projectionMatrixInverse.copy(et.projectionMatrixInverse);else{let ge=Me+qt,F=B+qt,C=ae-Re,K=Rt+(yt-Re),rt=Zt*B/F*ge,ut=Dt*B/F*ge;Z.projectionMatrix.makePerspective(C,K,rt,ut,ge,F),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function at(Z,et){et===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(et.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(s===null)return;let et=Z.near,ct=Z.far;m.texture!==null&&(m.depthNear>0&&(et=m.depthNear),m.depthFar>0&&(ct=m.depthFar)),R.near=_.near=M.near=et,R.far=_.far=M.far=ct,(L!==R.near||I!==R.far)&&(s.updateRenderState({depthNear:R.near,depthFar:R.far}),L=R.near,I=R.far),R.layers.mask=Z.layers.mask|6,M.layers.mask=R.layers.mask&3,_.layers.mask=R.layers.mask&5;let yt=Z.parent,Tt=R.cameras;at(R,yt);for(let Ht=0;Ht<Tt.length;Ht++)at(Tt[Ht],yt);Tt.length===2?Y(R,M,_):R.projectionMatrix.copy(M.projectionMatrix),lt(Z,R,yt)};function lt(Z,et,ct){ct===null?Z.matrix.copy(et.matrixWorld):(Z.matrix.copy(ct.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(et.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(et.projectionMatrix),Z.projectionMatrixInverse.copy(et.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=dr*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return R},this.getFoveation=function(){if(!(u===null&&d===null))return c},this.setFoveation=function(Z){c=Z,u!==null&&(u.fixedFoveation=Z),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=Z)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(R)},this.getCameraTexture=function(Z){return p[Z]};let bt=null;function ft(Z,et){if(h=et.getViewerPose(l||o),g=et,h!==null){let ct=h.views;d!==null&&(t.setRenderTargetFramebuffer(b,d.framebuffer),t.setRenderTarget(b));let yt=!1;ct.length!==R.cameras.length&&(R.cameras.length=0,yt=!0);for(let B=0;B<ct.length;B++){let Zt=ct[B],Dt=null;if(d!==null)Dt=d.getViewport(Zt);else{let Et=f.getViewSubImage(u,Zt);Dt=Et.viewport,B===0&&(t.setRenderTargetTextures(b,Et.colorTexture,Et.depthStencilTexture),t.setRenderTarget(b))}let Ft=A[B];Ft===void 0&&(Ft=new gn,Ft.layers.enable(B),Ft.viewport=new Ne,A[B]=Ft),Ft.matrix.fromArray(Zt.transform.matrix),Ft.matrix.decompose(Ft.position,Ft.quaternion,Ft.scale),Ft.projectionMatrix.fromArray(Zt.projectionMatrix),Ft.projectionMatrixInverse.copy(Ft.projectionMatrix).invert(),Ft.viewport.set(Dt.x,Dt.y,Dt.width,Dt.height),B===0&&(R.matrix.copy(Ft.matrix),R.matrix.decompose(R.position,R.quaternion,R.scale)),yt===!0&&R.cameras.push(Ft)}let Tt=s.enabledFeatures;if(Tt&&Tt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){f=i.getBinding();let B=f.getDepthInformation(ct[0]);B&&B.isValid&&B.texture&&m.init(B,s.renderState)}if(Tt&&Tt.includes("camera-access")&&x){t.state.unbindTexture(),f=i.getBinding();for(let B=0;B<ct.length;B++){let Zt=ct[B].camera;if(Zt){let Dt=p[Zt];Dt||(Dt=new vo,p[Zt]=Dt);let Ft=f.getCameraImage(Zt);Dt.sourceTexture=Ft}}}}for(let ct=0;ct<v.length;ct++){let yt=y[ct],Tt=v[ct];yt!==null&&Tt!==void 0&&Tt.update(yt,et,l||o)}bt&&bt(Z,et),et.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:et}),g=null}let _t=new md;_t.setAnimationLoop(ft),this.setAnimationLoop=function(Z){bt=Z},this.dispose=function(){}}},Us=new pi,ey=new Ve;function ny(n,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,Ah(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,E,w,b){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),f(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),u(m,p),p.isMeshPhysicalMaterial&&d(m,p,b)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),x(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?c(m,p,E,w):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===wn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===wn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let E=t.get(p),w=E.envMap,b=E.envMapRotation;w&&(m.envMap.value=w,Us.copy(b),Us.x*=-1,Us.y*=-1,Us.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(Us.y*=-1,Us.z*=-1),m.envMapRotation.value.setFromMatrix4(ey.makeRotationFromEuler(Us)),m.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,E,w){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*E,m.scale.value=w*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function f(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function u(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,E){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===wn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=E.texture,m.transmissionSamplerSize.value.set(E.width,E.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function x(m,p){let E=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(E.matrixWorld),m.nearDistance.value=E.shadow.camera.near,m.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function iy(n,t,e,i){let s={},r={},o=[],a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(E,w){let b=w.program;i.uniformBlockBinding(E,b)}function l(E,w){let b=s[E.id];b===void 0&&(g(E),b=h(E),s[E.id]=b,E.addEventListener("dispose",m));let v=w.program;i.updateUBOMapping(E,v);let y=t.render.frame;r[E.id]!==y&&(u(E),r[E.id]=y)}function h(E){let w=f();E.__bindingPointIndex=w;let b=n.createBuffer(),v=E.__size,y=E.usage;return n.bindBuffer(n.UNIFORM_BUFFER,b),n.bufferData(n.UNIFORM_BUFFER,v,y),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,w,b),b}function f(){for(let E=0;E<a;E++)if(o.indexOf(E)===-1)return o.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(E){let w=s[E.id],b=E.uniforms,v=E.__cache;n.bindBuffer(n.UNIFORM_BUFFER,w);for(let y=0,T=b.length;y<T;y++){let S=Array.isArray(b[y])?b[y]:[b[y]];for(let M=0,_=S.length;M<_;M++){let A=S[M];if(d(A,y,M,v)===!0){let R=A.__offset,L=Array.isArray(A.value)?A.value:[A.value],I=0;for(let D=0;D<L.length;D++){let U=L[D],z=x(U);typeof U=="number"||typeof U=="boolean"?(A.__data[0]=U,n.bufferSubData(n.UNIFORM_BUFFER,R+I,A.__data)):U.isMatrix3?(A.__data[0]=U.elements[0],A.__data[1]=U.elements[1],A.__data[2]=U.elements[2],A.__data[3]=0,A.__data[4]=U.elements[3],A.__data[5]=U.elements[4],A.__data[6]=U.elements[5],A.__data[7]=0,A.__data[8]=U.elements[6],A.__data[9]=U.elements[7],A.__data[10]=U.elements[8],A.__data[11]=0):(U.toArray(A.__data,I),I+=z.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,R,A.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function d(E,w,b,v){let y=E.value,T=w+"_"+b;if(v[T]===void 0)return typeof y=="number"||typeof y=="boolean"?v[T]=y:v[T]=y.clone(),!0;{let S=v[T];if(typeof y=="number"||typeof y=="boolean"){if(S!==y)return v[T]=y,!0}else if(S.equals(y)===!1)return S.copy(y),!0}return!1}function g(E){let w=E.uniforms,b=0,v=16;for(let T=0,S=w.length;T<S;T++){let M=Array.isArray(w[T])?w[T]:[w[T]];for(let _=0,A=M.length;_<A;_++){let R=M[_],L=Array.isArray(R.value)?R.value:[R.value];for(let I=0,D=L.length;I<D;I++){let U=L[I],z=x(U),k=b%v,J=k%z.boundary,Y=k+J;b+=J,Y!==0&&v-Y<z.storage&&(b+=v-Y),R.__data=new Float32Array(z.storage/Float32Array.BYTES_PER_ELEMENT),R.__offset=b,b+=z.storage}}}let y=b%v;return y>0&&(b+=v-y),E.__size=b,E.__cache={},this}function x(E){let w={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(w.boundary=4,w.storage=4):E.isVector2?(w.boundary=8,w.storage=8):E.isVector3||E.isColor?(w.boundary=16,w.storage=12):E.isVector4?(w.boundary=16,w.storage=16):E.isMatrix3?(w.boundary=48,w.storage=48):E.isMatrix4?(w.boundary=64,w.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),w}function m(E){let w=E.target;w.removeEventListener("dispose",m);let b=o.indexOf(w.__bindingPointIndex);o.splice(b,1),n.deleteBuffer(s[w.id]),delete s[w.id],delete r[w.id]}function p(){for(let E in s)n.deleteBuffer(s[E]);o=[],s={},r={}}return{bind:c,update:l,dispose:p}}var ql=class{constructor(t={}){let{canvas:e=Vf(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:u=!1}=t;this.isWebGLRenderer=!0;let d;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=i.getContextAttributes().alpha}else d=o;let g=new Uint32Array(4),x=new Int32Array(4),m=null,p=null,E=[],w=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ni,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let b=this,v=!1;this._outputColorSpace=ln;let y=0,T=0,S=null,M=-1,_=null,A=new Ne,R=new Ne,L=null,I=new Qt(0),D=0,U=e.width,z=e.height,k=1,J=null,Y=null,at=new Ne(0,0,U,z),lt=new Ne(0,0,U,z),bt=!1,ft=new mo,_t=!1,Z=!1,et=new Ve,ct=new N,yt=new Ne,Tt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Ht=!1;function Me(){return S===null?k:1}let B=i;function Zt(P,W){return e.getContext(P,W)}try{let P={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"180"}`),e.addEventListener("webglcontextlost",j,!1),e.addEventListener("webglcontextrestored",V,!1),e.addEventListener("webglcontextcreationerror",G,!1),B===null){let W="webgl2";if(B=Zt(W,P),B===null)throw Zt(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(P){throw console.error("THREE.WebGLRenderer: "+P.message),P}let Dt,Ft,Et,ae,Rt,qt,Re,ge,F,C,K,rt,ut,ot,Ut,gt,Pt,Nt,xt,Mt,kt,H,$,dt;function O(){Dt=new Mx(B),Dt.init(),H=new Jv(B,Dt),Ft=new px(B,Dt,t,H),Et=new jv(B,Dt),Ft.reversedDepthBuffer&&u&&Et.buffers.depth.setReversed(!0),ae=new wx(B),Rt=new Ov,qt=new Kv(B,Dt,Et,Rt,Ft,H,ae),Re=new gx(b),ge=new _x(b),F=new P0(B),$=new fx(B,F),C=new bx(B,F,ae,$),K=new Ex(B,C,F,ae),xt=new Tx(B,Ft,qt),gt=new mx(Rt),rt=new Uv(b,Re,ge,Dt,Ft,$,gt),ut=new ny(b,Rt),ot=new zv,Ut=new Xv(Dt),Nt=new ux(b,Re,ge,Et,K,d,c),Pt=new Zv(b,K,Ft),dt=new iy(B,ae,Ft,Et),Mt=new dx(B,Dt,ae),kt=new Sx(B,Dt,ae),ae.programs=rt.programs,b.capabilities=Ft,b.extensions=Dt,b.properties=Rt,b.renderLists=ot,b.shadowMap=Pt,b.state=Et,b.info=ae}O();let it=new Xh(b,B);this.xr=it,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){let P=Dt.get("WEBGL_lose_context");P&&P.loseContext()},this.forceContextRestore=function(){let P=Dt.get("WEBGL_lose_context");P&&P.restoreContext()},this.getPixelRatio=function(){return k},this.setPixelRatio=function(P){P!==void 0&&(k=P,this.setSize(U,z,!1))},this.getSize=function(P){return P.set(U,z)},this.setSize=function(P,W,nt=!0){if(it.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}U=P,z=W,e.width=Math.floor(P*k),e.height=Math.floor(W*k),nt===!0&&(e.style.width=P+"px",e.style.height=W+"px"),this.setViewport(0,0,P,W)},this.getDrawingBufferSize=function(P){return P.set(U*k,z*k).floor()},this.setDrawingBufferSize=function(P,W,nt){U=P,z=W,k=nt,e.width=Math.floor(P*nt),e.height=Math.floor(W*nt),this.setViewport(0,0,P,W)},this.getCurrentViewport=function(P){return P.copy(A)},this.getViewport=function(P){return P.copy(at)},this.setViewport=function(P,W,nt,Q){P.isVector4?at.set(P.x,P.y,P.z,P.w):at.set(P,W,nt,Q),Et.viewport(A.copy(at).multiplyScalar(k).round())},this.getScissor=function(P){return P.copy(lt)},this.setScissor=function(P,W,nt,Q){P.isVector4?lt.set(P.x,P.y,P.z,P.w):lt.set(P,W,nt,Q),Et.scissor(R.copy(lt).multiplyScalar(k).round())},this.getScissorTest=function(){return bt},this.setScissorTest=function(P){Et.setScissorTest(bt=P)},this.setOpaqueSort=function(P){J=P},this.setTransparentSort=function(P){Y=P},this.getClearColor=function(P){return P.copy(Nt.getClearColor())},this.setClearColor=function(){Nt.setClearColor(...arguments)},this.getClearAlpha=function(){return Nt.getClearAlpha()},this.setClearAlpha=function(){Nt.setClearAlpha(...arguments)},this.clear=function(P=!0,W=!0,nt=!0){let Q=0;if(P){let q=!1;if(S!==null){let mt=S.texture.format;q=mt===dl||mt===fl||mt===ul}if(q){let mt=S.texture.type,St=mt===xi||mt===rs||mt===Mr||mt===br||mt===cl||mt===hl,It=Nt.getClearColor(),Lt=Nt.getClearAlpha(),Xt=It.r,Yt=It.g,Vt=It.b;St?(g[0]=Xt,g[1]=Yt,g[2]=Vt,g[3]=Lt,B.clearBufferuiv(B.COLOR,0,g)):(x[0]=Xt,x[1]=Yt,x[2]=Vt,x[3]=Lt,B.clearBufferiv(B.COLOR,0,x))}else Q|=B.COLOR_BUFFER_BIT}W&&(Q|=B.DEPTH_BUFFER_BIT),nt&&(Q|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B.clear(Q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",j,!1),e.removeEventListener("webglcontextrestored",V,!1),e.removeEventListener("webglcontextcreationerror",G,!1),Nt.dispose(),ot.dispose(),Ut.dispose(),Rt.dispose(),Re.dispose(),ge.dispose(),K.dispose(),$.dispose(),dt.dispose(),rt.dispose(),it.dispose(),it.removeEventListener("sessionstart",Ct),it.removeEventListener("sessionend",$t),Wt.stop()};function j(P){P.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),v=!0}function V(){console.log("THREE.WebGLRenderer: Context Restored."),v=!1;let P=ae.autoReset,W=Pt.enabled,nt=Pt.autoUpdate,Q=Pt.needsUpdate,q=Pt.type;O(),ae.autoReset=P,Pt.enabled=W,Pt.autoUpdate=nt,Pt.needsUpdate=Q,Pt.type=q}function G(P){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",P.statusMessage)}function X(P){let W=P.target;W.removeEventListener("dispose",X),tt(W)}function tt(P){st(P),Rt.remove(P)}function st(P){let W=Rt.get(P).programs;W!==void 0&&(W.forEach(function(nt){rt.releaseProgram(nt)}),P.isShaderMaterial&&rt.releaseShaderCache(P))}this.renderBufferDirect=function(P,W,nt,Q,q,mt){W===null&&(W=Tt);let St=q.isMesh&&q.matrixWorld.determinant()<0,It=an(P,W,nt,Q,q);Et.setMaterial(Q,St);let Lt=nt.index,Xt=1;if(Q.wireframe===!0){if(Lt=C.getWireframeAttribute(nt),Lt===void 0)return;Xt=2}let Yt=nt.drawRange,Vt=nt.attributes.position,ce=Yt.start*Xt,Ee=(Yt.start+Yt.count)*Xt;mt!==null&&(ce=Math.max(ce,mt.start*Xt),Ee=Math.min(Ee,(mt.start+mt.count)*Xt)),Lt!==null?(ce=Math.max(ce,0),Ee=Math.min(Ee,Lt.count)):Vt!=null&&(ce=Math.max(ce,0),Ee=Math.min(Ee,Vt.count));let ke=Ee-ce;if(ke<0||ke===1/0)return;$.setup(q,Q,It,nt,Lt);let Le,Ce=Mt;if(Lt!==null&&(Le=F.get(Lt),Ce=kt,Ce.setIndex(Le)),q.isMesh)Q.wireframe===!0?(Et.setLineWidth(Q.wireframeLinewidth*Me()),Ce.setMode(B.LINES)):Ce.setMode(B.TRIANGLES);else if(q.isLine){let Gt=Q.linewidth;Gt===void 0&&(Gt=1),Et.setLineWidth(Gt*Me()),q.isLineSegments?Ce.setMode(B.LINES):q.isLineLoop?Ce.setMode(B.LINE_LOOP):Ce.setMode(B.LINE_STRIP)}else q.isPoints?Ce.setMode(B.POINTS):q.isSprite&&Ce.setMode(B.TRIANGLES);if(q.isBatchedMesh)if(q._multiDrawInstances!==null)pr("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Ce.renderMultiDrawInstances(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount,q._multiDrawInstances);else if(Dt.get("WEBGL_multi_draw"))Ce.renderMultiDraw(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount);else{let Gt=q._multiDrawStarts,Oe=q._multiDrawCounts,ve=q._multiDrawCount,Bn=Lt?F.get(Lt).bytesPerElement:1,Zs=Rt.get(Q).currentProgram.getUniforms();for(let zn=0;zn<ve;zn++)Zs.setValue(B,"_gl_DrawID",zn),Ce.render(Gt[zn]/Bn,Oe[zn])}else if(q.isInstancedMesh)Ce.renderInstances(ce,ke,q.count);else if(nt.isInstancedBufferGeometry){let Gt=nt._maxInstanceCount!==void 0?nt._maxInstanceCount:1/0,Oe=Math.min(nt.instanceCount,Gt);Ce.renderInstances(ce,ke,Oe)}else Ce.render(ce,ke)};function ht(P,W,nt){P.transparent===!0&&P.side===vn&&P.forceSinglePass===!1?(P.side=wn,P.needsUpdate=!0,zt(P,W,nt),P.side=Di,P.needsUpdate=!0,zt(P,W,nt),P.side=vn):zt(P,W,nt)}this.compile=function(P,W,nt=null){nt===null&&(nt=P),p=Ut.get(nt),p.init(W),w.push(p),nt.traverseVisible(function(q){q.isLight&&q.layers.test(W.layers)&&(p.pushLight(q),q.castShadow&&p.pushShadow(q))}),P!==nt&&P.traverseVisible(function(q){q.isLight&&q.layers.test(W.layers)&&(p.pushLight(q),q.castShadow&&p.pushShadow(q))}),p.setupLights();let Q=new Set;return P.traverse(function(q){if(!(q.isMesh||q.isPoints||q.isLine||q.isSprite))return;let mt=q.material;if(mt)if(Array.isArray(mt))for(let St=0;St<mt.length;St++){let It=mt[St];ht(It,nt,q),Q.add(It)}else ht(mt,nt,q),Q.add(mt)}),p=w.pop(),Q},this.compileAsync=function(P,W,nt=null){let Q=this.compile(P,W,nt);return new Promise(q=>{function mt(){if(Q.forEach(function(St){Rt.get(St).currentProgram.isReady()&&Q.delete(St)}),Q.size===0){q(P);return}setTimeout(mt,10)}Dt.get("KHR_parallel_shader_compile")!==null?mt():setTimeout(mt,10)})};let vt=null;function Bt(P){vt&&vt(P)}function Ct(){Wt.stop()}function $t(){Wt.start()}let Wt=new md;Wt.setAnimationLoop(Bt),typeof self<"u"&&Wt.setContext(self),this.setAnimationLoop=function(P){vt=P,it.setAnimationLoop(P),P===null?Wt.stop():Wt.start()},it.addEventListener("sessionstart",Ct),it.addEventListener("sessionend",$t),this.render=function(P,W){if(W!==void 0&&W.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(v===!0)return;if(P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),it.enabled===!0&&it.isPresenting===!0&&(it.cameraAutoUpdate===!0&&it.updateCamera(W),W=it.getCamera()),P.isScene===!0&&P.onBeforeRender(b,P,W,S),p=Ut.get(P,w.length),p.init(W),w.push(p),et.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),ft.setFromProjectionMatrix(et,ai,W.reversedDepth),Z=this.localClippingEnabled,_t=gt.init(this.clippingPlanes,Z),m=ot.get(P,E.length),m.init(),E.push(m),it.enabled===!0&&it.isPresenting===!0){let mt=b.xr.getDepthSensingMesh();mt!==null&&Ot(mt,W,-1/0,b.sortObjects)}Ot(P,W,0,b.sortObjects),m.finish(),b.sortObjects===!0&&m.sort(J,Y),Ht=it.enabled===!1||it.isPresenting===!1||it.hasDepthSensing()===!1,Ht&&Nt.addToRenderList(m,P),this.info.render.frame++,_t===!0&&gt.beginShadows();let nt=p.state.shadowsArray;Pt.render(nt,P,W),_t===!0&&gt.endShadows(),this.info.autoReset===!0&&this.info.reset();let Q=m.opaque,q=m.transmissive;if(p.setupLights(),W.isArrayCamera){let mt=W.cameras;if(q.length>0)for(let St=0,It=mt.length;St<It;St++){let Lt=mt[St];xe(Q,q,P,Lt)}Ht&&Nt.render(P);for(let St=0,It=mt.length;St<It;St++){let Lt=mt[St];te(m,P,Lt,Lt.viewport)}}else q.length>0&&xe(Q,q,P,W),Ht&&Nt.render(P),te(m,P,W);S!==null&&T===0&&(qt.updateMultisampleRenderTarget(S),qt.updateRenderTargetMipmap(S)),P.isScene===!0&&P.onAfterRender(b,P,W),$.resetDefaultState(),M=-1,_=null,w.pop(),w.length>0?(p=w[w.length-1],_t===!0&&gt.setGlobalState(b.clippingPlanes,p.state.camera)):p=null,E.pop(),E.length>0?m=E[E.length-1]:m=null};function Ot(P,W,nt,Q){if(P.visible===!1)return;if(P.layers.test(W.layers)){if(P.isGroup)nt=P.renderOrder;else if(P.isLOD)P.autoUpdate===!0&&P.update(W);else if(P.isLight)p.pushLight(P),P.castShadow&&p.pushShadow(P);else if(P.isSprite){if(!P.frustumCulled||ft.intersectsSprite(P)){Q&&yt.setFromMatrixPosition(P.matrixWorld).applyMatrix4(et);let St=K.update(P),It=P.material;It.visible&&m.push(P,St,It,nt,yt.z,null)}}else if((P.isMesh||P.isLine||P.isPoints)&&(!P.frustumCulled||ft.intersectsObject(P))){let St=K.update(P),It=P.material;if(Q&&(P.boundingSphere!==void 0?(P.boundingSphere===null&&P.computeBoundingSphere(),yt.copy(P.boundingSphere.center)):(St.boundingSphere===null&&St.computeBoundingSphere(),yt.copy(St.boundingSphere.center)),yt.applyMatrix4(P.matrixWorld).applyMatrix4(et)),Array.isArray(It)){let Lt=St.groups;for(let Xt=0,Yt=Lt.length;Xt<Yt;Xt++){let Vt=Lt[Xt],ce=It[Vt.materialIndex];ce&&ce.visible&&m.push(P,St,ce,nt,yt.z,Vt)}}else It.visible&&m.push(P,St,It,nt,yt.z,null)}}let mt=P.children;for(let St=0,It=mt.length;St<It;St++)Ot(mt[St],W,nt,Q)}function te(P,W,nt,Q){let q=P.opaque,mt=P.transmissive,St=P.transparent;p.setupLightsView(nt),_t===!0&&gt.setGlobalState(b.clippingPlanes,nt),Q&&Et.viewport(A.copy(Q)),q.length>0&&Kt(q,W,nt),mt.length>0&&Kt(mt,W,nt),St.length>0&&Kt(St,W,nt),Et.buffers.depth.setTest(!0),Et.buffers.depth.setMask(!0),Et.buffers.color.setMask(!0),Et.setPolygonOffset(!1)}function xe(P,W,nt,Q){if((nt.isScene===!0?nt.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[Q.id]===void 0&&(p.state.transmissionRenderTarget[Q.id]=new xn(1,1,{generateMipmaps:!0,type:Dt.has("EXT_color_buffer_half_float")||Dt.has("EXT_color_buffer_float")?Kn:xi,minFilter:ss,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ue.workingColorSpace}));let mt=p.state.transmissionRenderTarget[Q.id],St=Q.viewport||A;mt.setSize(St.z*b.transmissionResolutionScale,St.w*b.transmissionResolutionScale);let It=b.getRenderTarget(),Lt=b.getActiveCubeFace(),Xt=b.getActiveMipmapLevel();b.setRenderTarget(mt),b.getClearColor(I),D=b.getClearAlpha(),D<1&&b.setClearColor(16777215,.5),b.clear(),Ht&&Nt.render(nt);let Yt=b.toneMapping;b.toneMapping=Ni;let Vt=Q.viewport;if(Q.viewport!==void 0&&(Q.viewport=void 0),p.setupLightsView(Q),_t===!0&&gt.setGlobalState(b.clippingPlanes,Q),Kt(P,nt,Q),qt.updateMultisampleRenderTarget(mt),qt.updateRenderTargetMipmap(mt),Dt.has("WEBGL_multisampled_render_to_texture")===!1){let ce=!1;for(let Ee=0,ke=W.length;Ee<ke;Ee++){let Le=W[Ee],Ce=Le.object,Gt=Le.geometry,Oe=Le.material,ve=Le.group;if(Oe.side===vn&&Ce.layers.test(Q.layers)){let Bn=Oe.side;Oe.side=wn,Oe.needsUpdate=!0,me(Ce,nt,Q,Gt,Oe,ve),Oe.side=Bn,Oe.needsUpdate=!0,ce=!0}}ce===!0&&(qt.updateMultisampleRenderTarget(mt),qt.updateRenderTargetMipmap(mt))}b.setRenderTarget(It,Lt,Xt),b.setClearColor(I,D),Vt!==void 0&&(Q.viewport=Vt),b.toneMapping=Yt}function Kt(P,W,nt){let Q=W.isScene===!0?W.overrideMaterial:null;for(let q=0,mt=P.length;q<mt;q++){let St=P[q],It=St.object,Lt=St.geometry,Xt=St.group,Yt=St.material;Yt.allowOverride===!0&&Q!==null&&(Yt=Q),It.layers.test(nt.layers)&&me(It,W,nt,Lt,Yt,Xt)}}function me(P,W,nt,Q,q,mt){P.onBeforeRender(b,W,nt,Q,q,mt),P.modelViewMatrix.multiplyMatrices(nt.matrixWorldInverse,P.matrixWorld),P.normalMatrix.getNormalMatrix(P.modelViewMatrix),q.onBeforeRender(b,W,nt,Q,P,mt),q.transparent===!0&&q.side===vn&&q.forceSinglePass===!1?(q.side=wn,q.needsUpdate=!0,b.renderBufferDirect(nt,W,Q,q,P,mt),q.side=Di,q.needsUpdate=!0,b.renderBufferDirect(nt,W,Q,q,P,mt),q.side=vn):b.renderBufferDirect(nt,W,Q,q,P,mt),P.onAfterRender(b,W,nt,Q,q,mt)}function zt(P,W,nt){W.isScene!==!0&&(W=Tt);let Q=Rt.get(P),q=p.state.lights,mt=p.state.shadowsArray,St=q.state.version,It=rt.getParameters(P,q.state,mt,W,nt),Lt=rt.getProgramCacheKey(It),Xt=Q.programs;Q.environment=P.isMeshStandardMaterial?W.environment:null,Q.fog=W.fog,Q.envMap=(P.isMeshStandardMaterial?ge:Re).get(P.envMap||Q.environment),Q.envMapRotation=Q.environment!==null&&P.envMap===null?W.environmentRotation:P.envMapRotation,Xt===void 0&&(P.addEventListener("dispose",X),Xt=new Map,Q.programs=Xt);let Yt=Xt.get(Lt);if(Yt!==void 0){if(Q.currentProgram===Yt&&Q.lightsStateVersion===St)return je(P,It),Yt}else It.uniforms=rt.getUniforms(P),P.onBeforeCompile(It,b),Yt=rt.acquireProgram(It,Lt),Xt.set(Lt,Yt),Q.uniforms=It.uniforms;let Vt=Q.uniforms;return(!P.isShaderMaterial&&!P.isRawShaderMaterial||P.clipping===!0)&&(Vt.clippingPlanes=gt.uniform),je(P,It),Q.needsLights=Cn(P),Q.lightsStateVersion=St,Q.needsLights&&(Vt.ambientLightColor.value=q.state.ambient,Vt.lightProbe.value=q.state.probe,Vt.directionalLights.value=q.state.directional,Vt.directionalLightShadows.value=q.state.directionalShadow,Vt.spotLights.value=q.state.spot,Vt.spotLightShadows.value=q.state.spotShadow,Vt.rectAreaLights.value=q.state.rectArea,Vt.ltc_1.value=q.state.rectAreaLTC1,Vt.ltc_2.value=q.state.rectAreaLTC2,Vt.pointLights.value=q.state.point,Vt.pointLightShadows.value=q.state.pointShadow,Vt.hemisphereLights.value=q.state.hemi,Vt.directionalShadowMap.value=q.state.directionalShadowMap,Vt.directionalShadowMatrix.value=q.state.directionalShadowMatrix,Vt.spotShadowMap.value=q.state.spotShadowMap,Vt.spotLightMatrix.value=q.state.spotLightMatrix,Vt.spotLightMap.value=q.state.spotLightMap,Vt.pointShadowMap.value=q.state.pointShadowMap,Vt.pointShadowMatrix.value=q.state.pointShadowMatrix),Q.currentProgram=Yt,Q.uniformsList=null,Yt}function jt(P){if(P.uniformsList===null){let W=P.currentProgram.getUniforms();P.uniformsList=Er.seqWithValue(W.seq,P.uniforms)}return P.uniformsList}function je(P,W){let nt=Rt.get(P);nt.outputColorSpace=W.outputColorSpace,nt.batching=W.batching,nt.batchingColor=W.batchingColor,nt.instancing=W.instancing,nt.instancingColor=W.instancingColor,nt.instancingMorph=W.instancingMorph,nt.skinning=W.skinning,nt.morphTargets=W.morphTargets,nt.morphNormals=W.morphNormals,nt.morphColors=W.morphColors,nt.morphTargetsCount=W.morphTargetsCount,nt.numClippingPlanes=W.numClippingPlanes,nt.numIntersection=W.numClipIntersection,nt.vertexAlphas=W.vertexAlphas,nt.vertexTangents=W.vertexTangents,nt.toneMapping=W.toneMapping}function an(P,W,nt,Q,q){W.isScene!==!0&&(W=Tt),qt.resetTextureUnits();let mt=W.fog,St=Q.isMeshStandardMaterial?W.environment:null,It=S===null?b.outputColorSpace:S.isXRRenderTarget===!0?S.texture.colorSpace:Ss,Lt=(Q.isMeshStandardMaterial?ge:Re).get(Q.envMap||St),Xt=Q.vertexColors===!0&&!!nt.attributes.color&&nt.attributes.color.itemSize===4,Yt=!!nt.attributes.tangent&&(!!Q.normalMap||Q.anisotropy>0),Vt=!!nt.morphAttributes.position,ce=!!nt.morphAttributes.normal,Ee=!!nt.morphAttributes.color,ke=Ni;Q.toneMapped&&(S===null||S.isXRRenderTarget===!0)&&(ke=b.toneMapping);let Le=nt.morphAttributes.position||nt.morphAttributes.normal||nt.morphAttributes.color,Ce=Le!==void 0?Le.length:0,Gt=Rt.get(Q),Oe=p.state.lights;if(_t===!0&&(Z===!0||P!==_)){let Mn=P===_&&Q.id===M;gt.setState(Q,P,Mn)}let ve=!1;Q.version===Gt.__version?(Gt.needsLights&&Gt.lightsStateVersion!==Oe.state.version||Gt.outputColorSpace!==It||q.isBatchedMesh&&Gt.batching===!1||!q.isBatchedMesh&&Gt.batching===!0||q.isBatchedMesh&&Gt.batchingColor===!0&&q.colorTexture===null||q.isBatchedMesh&&Gt.batchingColor===!1&&q.colorTexture!==null||q.isInstancedMesh&&Gt.instancing===!1||!q.isInstancedMesh&&Gt.instancing===!0||q.isSkinnedMesh&&Gt.skinning===!1||!q.isSkinnedMesh&&Gt.skinning===!0||q.isInstancedMesh&&Gt.instancingColor===!0&&q.instanceColor===null||q.isInstancedMesh&&Gt.instancingColor===!1&&q.instanceColor!==null||q.isInstancedMesh&&Gt.instancingMorph===!0&&q.morphTexture===null||q.isInstancedMesh&&Gt.instancingMorph===!1&&q.morphTexture!==null||Gt.envMap!==Lt||Q.fog===!0&&Gt.fog!==mt||Gt.numClippingPlanes!==void 0&&(Gt.numClippingPlanes!==gt.numPlanes||Gt.numIntersection!==gt.numIntersection)||Gt.vertexAlphas!==Xt||Gt.vertexTangents!==Yt||Gt.morphTargets!==Vt||Gt.morphNormals!==ce||Gt.morphColors!==Ee||Gt.toneMapping!==ke||Gt.morphTargetsCount!==Ce)&&(ve=!0):(ve=!0,Gt.__version=Q.version);let Bn=Gt.currentProgram;ve===!0&&(Bn=zt(Q,W,q));let Zs=!1,zn=!1,qr=!1,Be=Bn.getUniforms(),Yn=Gt.uniforms;if(Et.useProgram(Bn.program)&&(Zs=!0,zn=!0,qr=!0),Q.id!==M&&(M=Q.id,zn=!0),Zs||_!==P){Et.buffers.depth.getReversed()&&P.reversedDepth!==!0&&(P._reversedDepth=!0,P.updateProjectionMatrix()),Be.setValue(B,"projectionMatrix",P.projectionMatrix),Be.setValue(B,"viewMatrix",P.matrixWorldInverse);let Pn=Be.map.cameraPosition;Pn!==void 0&&Pn.setValue(B,ct.setFromMatrixPosition(P.matrixWorld)),Ft.logarithmicDepthBuffer&&Be.setValue(B,"logDepthBufFC",2/(Math.log(P.far+1)/Math.LN2)),(Q.isMeshPhongMaterial||Q.isMeshToonMaterial||Q.isMeshLambertMaterial||Q.isMeshBasicMaterial||Q.isMeshStandardMaterial||Q.isShaderMaterial)&&Be.setValue(B,"isOrthographic",P.isOrthographicCamera===!0),_!==P&&(_=P,zn=!0,qr=!0)}if(q.isSkinnedMesh){Be.setOptional(B,q,"bindMatrix"),Be.setOptional(B,q,"bindMatrixInverse");let Mn=q.skeleton;Mn&&(Mn.boneTexture===null&&Mn.computeBoneTexture(),Be.setValue(B,"boneTexture",Mn.boneTexture,qt))}q.isBatchedMesh&&(Be.setOptional(B,q,"batchingTexture"),Be.setValue(B,"batchingTexture",q._matricesTexture,qt),Be.setOptional(B,q,"batchingIdTexture"),Be.setValue(B,"batchingIdTexture",q._indirectTexture,qt),Be.setOptional(B,q,"batchingColorTexture"),q._colorsTexture!==null&&Be.setValue(B,"batchingColorTexture",q._colorsTexture,qt));let Zn=nt.morphAttributes;if((Zn.position!==void 0||Zn.normal!==void 0||Zn.color!==void 0)&&xt.update(q,nt,Bn),(zn||Gt.receiveShadow!==q.receiveShadow)&&(Gt.receiveShadow=q.receiveShadow,Be.setValue(B,"receiveShadow",q.receiveShadow)),Q.isMeshGouraudMaterial&&Q.envMap!==null&&(Yn.envMap.value=Lt,Yn.flipEnvMap.value=Lt.isCubeTexture&&Lt.isRenderTargetTexture===!1?-1:1),Q.isMeshStandardMaterial&&Q.envMap===null&&W.environment!==null&&(Yn.envMapIntensity.value=W.environmentIntensity),zn&&(Be.setValue(B,"toneMappingExposure",b.toneMappingExposure),Gt.needsLights&&qn(Yn,qr),mt&&Q.fog===!0&&ut.refreshFogUniforms(Yn,mt),ut.refreshMaterialUniforms(Yn,Q,k,z,p.state.transmissionRenderTarget[P.id]),Er.upload(B,jt(Gt),Yn,qt)),Q.isShaderMaterial&&Q.uniformsNeedUpdate===!0&&(Er.upload(B,jt(Gt),Yn,qt),Q.uniformsNeedUpdate=!1),Q.isSpriteMaterial&&Be.setValue(B,"center",q.center),Be.setValue(B,"modelViewMatrix",q.modelViewMatrix),Be.setValue(B,"normalMatrix",q.normalMatrix),Be.setValue(B,"modelMatrix",q.matrixWorld),Q.isShaderMaterial||Q.isRawShaderMaterial){let Mn=Q.uniformsGroups;for(let Pn=0,Ic=Mn.length;Pn<Ic;Pn++){let ms=Mn[Pn];dt.update(ms,Bn),dt.bind(ms,Bn)}}return Bn}function qn(P,W){P.ambientLightColor.needsUpdate=W,P.lightProbe.needsUpdate=W,P.directionalLights.needsUpdate=W,P.directionalLightShadows.needsUpdate=W,P.pointLights.needsUpdate=W,P.pointLightShadows.needsUpdate=W,P.spotLights.needsUpdate=W,P.spotLightShadows.needsUpdate=W,P.rectAreaLights.needsUpdate=W,P.hemisphereLights.needsUpdate=W}function Cn(P){return P.isMeshLambertMaterial||P.isMeshToonMaterial||P.isMeshPhongMaterial||P.isMeshStandardMaterial||P.isShadowMaterial||P.isShaderMaterial&&P.lights===!0}this.getActiveCubeFace=function(){return y},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return S},this.setRenderTargetTextures=function(P,W,nt){let Q=Rt.get(P);Q.__autoAllocateDepthBuffer=P.resolveDepthBuffer===!1,Q.__autoAllocateDepthBuffer===!1&&(Q.__useRenderToTexture=!1),Rt.get(P.texture).__webglTexture=W,Rt.get(P.depthTexture).__webglTexture=Q.__autoAllocateDepthBuffer?void 0:nt,Q.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(P,W){let nt=Rt.get(P);nt.__webglFramebuffer=W,nt.__useDefaultFramebuffer=W===void 0};let Rn=B.createFramebuffer();this.setRenderTarget=function(P,W=0,nt=0){S=P,y=W,T=nt;let Q=!0,q=null,mt=!1,St=!1;if(P){let Lt=Rt.get(P);if(Lt.__useDefaultFramebuffer!==void 0)Et.bindFramebuffer(B.FRAMEBUFFER,null),Q=!1;else if(Lt.__webglFramebuffer===void 0)qt.setupRenderTarget(P);else if(Lt.__hasExternalTextures)qt.rebindTextures(P,Rt.get(P.texture).__webglTexture,Rt.get(P.depthTexture).__webglTexture);else if(P.depthBuffer){let Vt=P.depthTexture;if(Lt.__boundDepthTexture!==Vt){if(Vt!==null&&Rt.has(Vt)&&(P.width!==Vt.image.width||P.height!==Vt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");qt.setupDepthRenderbuffer(P)}}let Xt=P.texture;(Xt.isData3DTexture||Xt.isDataArrayTexture||Xt.isCompressedArrayTexture)&&(St=!0);let Yt=Rt.get(P).__webglFramebuffer;P.isWebGLCubeRenderTarget?(Array.isArray(Yt[W])?q=Yt[W][nt]:q=Yt[W],mt=!0):P.samples>0&&qt.useMultisampledRTT(P)===!1?q=Rt.get(P).__webglMultisampledFramebuffer:Array.isArray(Yt)?q=Yt[nt]:q=Yt,A.copy(P.viewport),R.copy(P.scissor),L=P.scissorTest}else A.copy(at).multiplyScalar(k).floor(),R.copy(lt).multiplyScalar(k).floor(),L=bt;if(nt!==0&&(q=Rn),Et.bindFramebuffer(B.FRAMEBUFFER,q)&&Q&&Et.drawBuffers(P,q),Et.viewport(A),Et.scissor(R),Et.setScissorTest(L),mt){let Lt=Rt.get(P.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+W,Lt.__webglTexture,nt)}else if(St){let Lt=W;for(let Xt=0;Xt<P.textures.length;Xt++){let Yt=Rt.get(P.textures[Xt]);B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0+Xt,Yt.__webglTexture,nt,Lt)}}else if(P!==null&&nt!==0){let Lt=Rt.get(P.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Lt.__webglTexture,nt)}M=-1},this.readRenderTargetPixels=function(P,W,nt,Q,q,mt,St,It=0){if(!(P&&P.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Lt=Rt.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&St!==void 0&&(Lt=Lt[St]),Lt){Et.bindFramebuffer(B.FRAMEBUFFER,Lt);try{let Xt=P.textures[It],Yt=Xt.format,Vt=Xt.type;if(!Ft.textureFormatReadable(Yt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ft.textureTypeReadable(Vt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=P.width-Q&&nt>=0&&nt<=P.height-q&&(P.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+It),B.readPixels(W,nt,Q,q,H.convert(Yt),H.convert(Vt),mt))}finally{let Xt=S!==null?Rt.get(S).__webglFramebuffer:null;Et.bindFramebuffer(B.FRAMEBUFFER,Xt)}}},this.readRenderTargetPixelsAsync=async function(P,W,nt,Q,q,mt,St,It=0){if(!(P&&P.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Lt=Rt.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&St!==void 0&&(Lt=Lt[St]),Lt)if(W>=0&&W<=P.width-Q&&nt>=0&&nt<=P.height-q){Et.bindFramebuffer(B.FRAMEBUFFER,Lt);let Xt=P.textures[It],Yt=Xt.format,Vt=Xt.type;if(!Ft.textureFormatReadable(Yt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ft.textureTypeReadable(Vt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let ce=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,ce),B.bufferData(B.PIXEL_PACK_BUFFER,mt.byteLength,B.STREAM_READ),P.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+It),B.readPixels(W,nt,Q,q,H.convert(Yt),H.convert(Vt),0);let Ee=S!==null?Rt.get(S).__webglFramebuffer:null;Et.bindFramebuffer(B.FRAMEBUFFER,Ee);let ke=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await Hf(B,ke,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,ce),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,mt),B.deleteBuffer(ce),B.deleteSync(ke),mt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(P,W=null,nt=0){let Q=Math.pow(2,-nt),q=Math.floor(P.image.width*Q),mt=Math.floor(P.image.height*Q),St=W!==null?W.x:0,It=W!==null?W.y:0;qt.setTexture2D(P,0),B.copyTexSubImage2D(B.TEXTURE_2D,nt,0,0,St,It,q,mt),Et.unbindTexture()};let ni=B.createFramebuffer(),ie=B.createFramebuffer();this.copyTextureToTexture=function(P,W,nt=null,Q=null,q=0,mt=null){mt===null&&(q!==0?(pr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),mt=q,q=0):mt=0);let St,It,Lt,Xt,Yt,Vt,ce,Ee,ke,Le=P.isCompressedTexture?P.mipmaps[mt]:P.image;if(nt!==null)St=nt.max.x-nt.min.x,It=nt.max.y-nt.min.y,Lt=nt.isBox3?nt.max.z-nt.min.z:1,Xt=nt.min.x,Yt=nt.min.y,Vt=nt.isBox3?nt.min.z:0;else{let Zn=Math.pow(2,-q);St=Math.floor(Le.width*Zn),It=Math.floor(Le.height*Zn),P.isDataArrayTexture?Lt=Le.depth:P.isData3DTexture?Lt=Math.floor(Le.depth*Zn):Lt=1,Xt=0,Yt=0,Vt=0}Q!==null?(ce=Q.x,Ee=Q.y,ke=Q.z):(ce=0,Ee=0,ke=0);let Ce=H.convert(W.format),Gt=H.convert(W.type),Oe;W.isData3DTexture?(qt.setTexture3D(W,0),Oe=B.TEXTURE_3D):W.isDataArrayTexture||W.isCompressedArrayTexture?(qt.setTexture2DArray(W,0),Oe=B.TEXTURE_2D_ARRAY):(qt.setTexture2D(W,0),Oe=B.TEXTURE_2D),B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,W.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,W.unpackAlignment);let ve=B.getParameter(B.UNPACK_ROW_LENGTH),Bn=B.getParameter(B.UNPACK_IMAGE_HEIGHT),Zs=B.getParameter(B.UNPACK_SKIP_PIXELS),zn=B.getParameter(B.UNPACK_SKIP_ROWS),qr=B.getParameter(B.UNPACK_SKIP_IMAGES);B.pixelStorei(B.UNPACK_ROW_LENGTH,Le.width),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Le.height),B.pixelStorei(B.UNPACK_SKIP_PIXELS,Xt),B.pixelStorei(B.UNPACK_SKIP_ROWS,Yt),B.pixelStorei(B.UNPACK_SKIP_IMAGES,Vt);let Be=P.isDataArrayTexture||P.isData3DTexture,Yn=W.isDataArrayTexture||W.isData3DTexture;if(P.isDepthTexture){let Zn=Rt.get(P),Mn=Rt.get(W),Pn=Rt.get(Zn.__renderTarget),Ic=Rt.get(Mn.__renderTarget);Et.bindFramebuffer(B.READ_FRAMEBUFFER,Pn.__webglFramebuffer),Et.bindFramebuffer(B.DRAW_FRAMEBUFFER,Ic.__webglFramebuffer);for(let ms=0;ms<Lt;ms++)Be&&(B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Rt.get(P).__webglTexture,q,Vt+ms),B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Rt.get(W).__webglTexture,mt,ke+ms)),B.blitFramebuffer(Xt,Yt,St,It,ce,Ee,St,It,B.DEPTH_BUFFER_BIT,B.NEAREST);Et.bindFramebuffer(B.READ_FRAMEBUFFER,null),Et.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else if(q!==0||P.isRenderTargetTexture||Rt.has(P)){let Zn=Rt.get(P),Mn=Rt.get(W);Et.bindFramebuffer(B.READ_FRAMEBUFFER,ni),Et.bindFramebuffer(B.DRAW_FRAMEBUFFER,ie);for(let Pn=0;Pn<Lt;Pn++)Be?B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Zn.__webglTexture,q,Vt+Pn):B.framebufferTexture2D(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Zn.__webglTexture,q),Yn?B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Mn.__webglTexture,mt,ke+Pn):B.framebufferTexture2D(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Mn.__webglTexture,mt),q!==0?B.blitFramebuffer(Xt,Yt,St,It,ce,Ee,St,It,B.COLOR_BUFFER_BIT,B.NEAREST):Yn?B.copyTexSubImage3D(Oe,mt,ce,Ee,ke+Pn,Xt,Yt,St,It):B.copyTexSubImage2D(Oe,mt,ce,Ee,Xt,Yt,St,It);Et.bindFramebuffer(B.READ_FRAMEBUFFER,null),Et.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else Yn?P.isDataTexture||P.isData3DTexture?B.texSubImage3D(Oe,mt,ce,Ee,ke,St,It,Lt,Ce,Gt,Le.data):W.isCompressedArrayTexture?B.compressedTexSubImage3D(Oe,mt,ce,Ee,ke,St,It,Lt,Ce,Le.data):B.texSubImage3D(Oe,mt,ce,Ee,ke,St,It,Lt,Ce,Gt,Le):P.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,mt,ce,Ee,St,It,Ce,Gt,Le.data):P.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,mt,ce,Ee,Le.width,Le.height,Ce,Le.data):B.texSubImage2D(B.TEXTURE_2D,mt,ce,Ee,St,It,Ce,Gt,Le);B.pixelStorei(B.UNPACK_ROW_LENGTH,ve),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Bn),B.pixelStorei(B.UNPACK_SKIP_PIXELS,Zs),B.pixelStorei(B.UNPACK_SKIP_ROWS,zn),B.pixelStorei(B.UNPACK_SKIP_IMAGES,qr),mt===0&&W.generateMipmaps&&B.generateMipmap(Oe),Et.unbindTexture()},this.initRenderTarget=function(P){Rt.get(P).__webglFramebuffer===void 0&&qt.setupRenderTarget(P)},this.initTexture=function(P){P.isCubeTexture?qt.setTextureCube(P,0):P.isData3DTexture?qt.setTexture3D(P,0):P.isDataArrayTexture||P.isCompressedArrayTexture?qt.setTexture2DArray(P,0):qt.setTexture2D(P,0),Et.unbindTexture()},this.resetState=function(){y=0,T=0,S=null,Et.reset(),$.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ai}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=ue._getDrawingBufferColorSpace(t),e.unpackColorSpace=ue._getUnpackColorSpace()}};var _d={type:"change"},Zh={type:"start"},bd={type:"end"},Zl=new Ts,Md=new jn,sy=Math.cos(70*He.DEG2RAD),Qe=new N,Fn=2*Math.PI,Ae={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Yh=1e-6,$l=class extends So{constructor(t,e=null){super(t,e),this.state=Ae.NONE,this.target=new N,this.cursor=new N,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ns.ROTATE,MIDDLE:ns.DOLLY,RIGHT:ns.PAN},this.touches={ONE:is.ROTATE,TWO:is.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new N,this._lastQuaternion=new In,this._lastTargetPosition=new N,this._quat=new In().setFromUnitVectors(t.up,new N(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new mi,this._sphericalDelta=new mi,this._scale=1,this._panOffset=new N,this._rotateStart=new At,this._rotateEnd=new At,this._rotateDelta=new At,this._panStart=new At,this._panEnd=new At,this._panDelta=new At,this._dollyStart=new At,this._dollyEnd=new At,this._dollyDelta=new At,this._dollyDirection=new N,this._mouse=new At,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=oy.bind(this),this._onPointerDown=ry.bind(this),this._onPointerUp=ay.bind(this),this._onContextMenu=py.bind(this),this._onMouseWheel=hy.bind(this),this._onKeyDown=uy.bind(this),this._onTouchStart=fy.bind(this),this._onTouchMove=dy.bind(this),this._onMouseDown=ly.bind(this),this._onMouseMove=cy.bind(this),this._interceptControlDown=my.bind(this),this._interceptControlUp=gy.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(_d),this.update(),this.state=Ae.NONE}update(t=null){let e=this.object.position;Qe.copy(e).sub(this.target),Qe.applyQuaternion(this._quat),this._spherical.setFromVector3(Qe),this.autoRotate&&this.state===Ae.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(i)&&isFinite(s)&&(i<-Math.PI?i+=Fn:i>Math.PI&&(i-=Fn),s<-Math.PI?s+=Fn:s>Math.PI&&(s-=Fn),i<=s?this._spherical.theta=Math.max(i,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+s)/2?Math.max(i,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(Qe.setFromSpherical(this._spherical),Qe.applyQuaternion(this._quatInverse),e.copy(this.target).add(Qe),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){let a=Qe.length();o=this._clampDistance(a*this._scale);let c=a-o;this.object.position.addScaledVector(this._dollyDirection,c),this.object.updateMatrixWorld(),r=!!c}else if(this.object.isOrthographicCamera){let a=new N(this._mouse.x,this._mouse.y,0);a.unproject(this.object);let c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=c!==this.object.zoom;let l=new N(this._mouse.x,this._mouse.y,0);l.unproject(this.object),this.object.position.sub(l).add(a),this.object.updateMatrixWorld(),o=Qe.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(Zl.origin.copy(this.object.position),Zl.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Zl.direction))<sy?this.object.lookAt(this.target):(Md.setFromNormalAndCoplanarPoint(this.object.up,this.target),Zl.intersectPlane(Md,this.target))))}else if(this.object.isOrthographicCamera){let o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Yh||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Yh||this._lastTargetPosition.distanceToSquared(this.target)>Yh?(this.dispatchEvent(_d),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?Fn/60*this.autoRotateSpeed*t:Fn/60/60*this.autoRotateSpeed}_getZoomScale(t){let e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){Qe.setFromMatrixColumn(e,0),Qe.multiplyScalar(-t),this._panOffset.add(Qe)}_panUp(t,e){this.screenSpacePanning===!0?Qe.setFromMatrixColumn(e,1):(Qe.setFromMatrixColumn(e,0),Qe.crossVectors(this.object.up,Qe)),Qe.multiplyScalar(t),this._panOffset.add(Qe)}_pan(t,e){let i=this.domElement;if(this.object.isPerspectiveCamera){let s=this.object.position;Qe.copy(s).sub(this.target);let r=Qe.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/i.clientHeight,this.object.matrix),this._panUp(2*e*r/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let i=this.domElement.getBoundingClientRect(),s=t-i.left,r=e-i.top,o=i.width,a=i.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(Fn*this._rotateDelta.x/e.clientHeight),this._rotateUp(Fn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(Fn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-Fn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(Fn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-Fn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(i,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(i,s)}}_handleTouchStartDolly(t){let e=this._getSecondPointerPosition(t),i=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(i*i+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{let i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),r=.5*(t.pageY+i.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(Fn*this._rotateDelta.x/e.clientHeight),this._rotateUp(Fn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(i,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){let e=this._getSecondPointerPosition(t),i=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(i*i+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let o=(t.pageX+e.x)*.5,a=(t.pageY+e.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new At,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){let e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){let e=t.deltaMode,i={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}};function ry(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n)))}function oy(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function ay(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(bd),this.state=Ae.NONE;break;case 1:let t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function ly(n){let t;switch(n.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case ns.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=Ae.DOLLY;break;case ns.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=Ae.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=Ae.ROTATE}break;case ns.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=Ae.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=Ae.PAN}break;default:this.state=Ae.NONE}this.state!==Ae.NONE&&this.dispatchEvent(Zh)}function cy(n){switch(this.state){case Ae.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case Ae.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case Ae.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function hy(n){this.enabled===!1||this.enableZoom===!1||this.state!==Ae.NONE||(n.preventDefault(),this.dispatchEvent(Zh),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(bd))}function uy(n){this.enabled!==!1&&this._handleKeyDown(n)}function fy(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case is.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=Ae.TOUCH_ROTATE;break;case is.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=Ae.TOUCH_PAN;break;default:this.state=Ae.NONE}break;case 2:switch(this.touches.TWO){case is.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=Ae.TOUCH_DOLLY_PAN;break;case is.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=Ae.TOUCH_DOLLY_ROTATE;break;default:this.state=Ae.NONE}break;default:this.state=Ae.NONE}this.state!==Ae.NONE&&this.dispatchEvent(Zh)}function dy(n){switch(this._trackPointer(n),this.state){case Ae.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case Ae.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case Ae.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case Ae.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=Ae.NONE}}function py(n){this.enabled!==!1&&n.preventDefault()}function my(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function gy(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var Cr={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var Gn=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},xy=new yr(-1,1,1,-1,0,1),$h=class extends Se{constructor(){super(),this.setAttribute("position",new pe([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new pe([0,2,0,0,2,0],2))}},vy=new $h,os=class{constructor(t){this._mesh=new Ze(vy,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,xy)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}};var Rr=class extends Gn{constructor(t,e="tDiffuse"){super(),this.textureID=e,this.uniforms=null,this.material=null,t instanceof he?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=Oi.clone(t.uniforms),this.material=new he({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this._fsQuad=new os(this.material)}render(t,e,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this._fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var Lo=class extends Gn{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,i){let s=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),t.setRenderTarget(i),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},jl=class extends Gn{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}};var Kl=class{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){let i=t.getSize(new At);this._width=i.width,this._height=i.height,e=new xn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Kn}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Rr(Cr),this.copyPass.material.blending=ci,this.clock=new bo}swapBuffers(){let t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){let e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());let e=this.renderer.getRenderTarget(),i=!1;for(let s=0,r=this.passes.length;s<r;s++){let o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,t,i),o.needsSwap){if(i){let a=this.renderer.getContext(),c=this.renderer.state.buffers.stencil;c.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),c.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Lo!==void 0&&(o instanceof Lo?i=!0:o instanceof jl&&(i=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){let e=this.renderer.getSize(new At);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;let i=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(i,s),this.renderTarget2.setSize(i,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(i,s)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var Jl=class extends Gn{constructor(t,e,i=null,s=null,r=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=i,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Qt}render(t,e,i){let s=t.autoClear;t.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),t.autoClear=s}};var Sd={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Qt(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var Pr=class n extends Gn{constructor(t,e=1,i,s){super(),this.strength=e,this.radius=i,this.threshold=s,this.resolution=t!==void 0?new At(t.x,t.y):new At(256,256),this.clearColor=new Qt(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new xn(r,o,{type:Kn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){let f=new xn(r,o,{type:Kn});f.texture.name="UnrealBloomPass.h"+h,f.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(f);let u=new xn(r,o,{type:Kn});u.texture.name="UnrealBloomPass.v"+h,u.texture.generateMipmaps=!1,this.renderTargetsVertical.push(u),r=Math.round(r/2),o=Math.round(o/2)}let a=Sd;this.highPassUniforms=Oi.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new he({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];let c=[3,5,7,9,11];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(c[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new At(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;let l=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=l,this.bloomTintColors=[new N(1,1,1),new N(1,1,1),new N(1,1,1),new N(1,1,1),new N(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=Oi.clone(Cr.uniforms),this.blendMaterial=new he({uniforms:this.copyUniforms,vertexShader:Cr.vertexShader,fragmentShader:Cr.fragmentShader,blending:Ue,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new Qt,this._oldClearAlpha=1,this._basic=new Es,this._fsQuad=new os(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(t,e){let i=Math.round(t/2),s=Math.round(e/2);this.renderTargetBright.setSize(i,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(i,s),this.renderTargetsVertical[r].setSize(i,s),this.separableBlurMaterials[r].uniforms.invSize.value=new At(1/i,1/s),i=Math.round(i/2),s=Math.round(s/2)}render(t,e,i,s,r){t.getClearColor(this._oldClearColor),this._oldClearAlpha=t.getClearAlpha();let o=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=i.texture,t.setRenderTarget(null),t.clear(),this._fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this._fsQuad.render(t);let a=this.renderTargetBright;for(let c=0;c<this.nMips;c++)this._fsQuad.material=this.separableBlurMaterials[c],this.separableBlurMaterials[c].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[c].uniforms.direction.value=n.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[c]),t.clear(),this._fsQuad.render(t),this.separableBlurMaterials[c].uniforms.colorTexture.value=this.renderTargetsHorizontal[c].texture,this.separableBlurMaterials[c].uniforms.direction.value=n.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[c]),t.clear(),this._fsQuad.render(t),a=this.renderTargetsVertical[c];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this._fsQuad.render(t),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(i),this._fsQuad.render(t)),t.setClearColor(this._oldClearColor,this._oldClearAlpha),t.autoClear=o}_getSeparableBlurMaterial(t){let e=[];for(let i=0;i<t;i++)e.push(.39894*Math.exp(-.5*i*i/(t*t))/t);return new he({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new At(.5,.5)},direction:{value:new At(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
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
				}`})}_getCompositeMaterial(t){return new he({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}};Pr.BlurDirectionX=new At(1,0);Pr.BlurDirectionY=new At(0,1);var Do={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};var Ql=class extends Gn{constructor(){super(),this.uniforms=Oi.clone(Do.uniforms),this.material=new _o({name:Do.name,uniforms:this.uniforms,vertexShader:Do.vertexShader,fragmentShader:Do.fragmentShader}),this._fsQuad=new os(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,i){this.uniforms.tDiffuse.value=i.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},ue.getTransfer(this._outputColorSpace)===_e&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Qa?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===tl?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===el?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===_r?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===il?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===sl?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===nl&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var le=Object.freeze({duration:17,growStart:.45,growSpan:5.7,bloomStart:8.93,bloomSpan:.03,burstLength:2.8,budScale:.92}),wd=le.bloomStart+le.bloomSpan+.05+le.burstLength*1.22+.06;var Td="float bloomOpenProgress(float u){float rest=1.-clamp(u,0.,1.);float r2=rest*rest;float r4=r2*r2;return 1.-r4*r4*rest;}",Ir=n=>n.toFixed(4),Fo=`
const float GROW_START=${Ir(le.growStart)};
const float GROW_SPAN=${Ir(le.growSpan)};
const float BLOOM_START=${Ir(le.bloomStart)};
const float BLOOM_SPAN=${Ir(le.bloomSpan)};
const float BURST_LEN=${Ir(le.burstLength)};
const float BUD_SCALE=${Ir(le.budScale)};
`;var yy=(n,t=0,e=1)=>Math.max(t,Math.min(e,n)),pt=n=>{let t=Math.sin(n*12.9898+78.233)*43758.5453;return t-Math.floor(t)},Kh=(n,t)=>Array.isArray(n)||ArrayBuffer.isView(n)?n[t]:n[["x","y","z"][t]],_y=n=>le.bloomSpan*(.5+.5*Math.sin(Kh(n,1)*2.3+Kh(n,2)*.7)),My=n=>Math.floor(yy((Kh(n,0)+3.2)/6.4,0,.9999)*3),tc=n=>le.bloomStart+_y(n);var Ad=`
float ironWave(vec3 c){return floor(clamp((c.x+3.2)/6.4,0.,.9999)*3.);}
float ironBudDelay(vec3 c){return ${le.bloomSpan.toFixed(4)}*(.5+.5*sin(c.y*2.3+c.z*.7));}
float ironBurstTime(vec3 c){return ${le.bloomStart.toFixed(4)}+ironBudDelay(c);}
float silverBloomTime(vec3 c){return ironBurstTime(c);}
`,by=Object.freeze([{time:13.74,pick:"inner-left",count:3,scale:.52},{time:16.13,pick:"inner-right",count:3,scale:.52},{time:17.35,pick:"wings",count:4,scale:.44}]),Sy=Object.freeze([{from:11.2,to:13.6,rate:46},{from:13.6,to:16.2,rate:30},{from:16.2,to:18.55,rate:24}]),wy=Object.freeze([]),Ed=46;function Ty(n,t,e,i){let s=n.map((l,h)=>({id:h,x:l.center[0],y:l.center[1],z:l.center[2],w:l.weight})),r=s.filter(l=>!i.has(l.id)),o=r.length>=e.count?r:s,a=(l,h)=>l.slice(0,h).map(f=>f.id),c=[...s].sort((l,h)=>l.y-h.y)[Math.floor(s.length/2)]?.y??0;switch(e.pick){case"left":return a([...o].sort((l,h)=>l.x-.25*l.y-(h.x-.25*h.y)),e.count);case"right":return a([...o].sort((l,h)=>h.x+.25*h.y-(l.x+.25*l.y)),e.count);case"wings":{let l=o.filter(u=>u.y>=c-.2),h=[...l].sort((u,d)=>u.x-d.x),f=[...l].sort((u,d)=>d.x-u.x);return[...new Set([...a(h,Math.ceil(e.count/2)),...a(f,Math.floor(e.count/2))])]}case"inner-left":case"inner-right":{let l=s.map(d=>d.x).sort((d,g)=>d-g),h=s.map(d=>d.y).sort((d,g)=>d-g),f=e.pick==="inner-left"?l[Math.floor(l.length*.3)]:l[Math.floor(l.length*.7)],u=h[Math.floor(h.length*.6)];return a(o.filter(d=>d.y>=u).sort((d,g)=>Math.abs(d.x-f)-Math.abs(g.x-f)),e.count)}case"top":return a([...o].sort((l,h)=>h.y-l.y),e.count);case"prominent":return a([...o].sort((l,h)=>t.has(h.id)-t.has(l.id)||h.w-l.w),e.count);case"center":return a([...o].filter(l=>l.y>=c).sort((l,h)=>Math.abs(l.x-.33)-Math.abs(h.x-.33)),e.count);default:{let l=[...s].sort((f,u)=>f.x-u.x),h=l.length/e.count;return Array.from({length:e.count},(f,u)=>l[Math.min(l.length-1,Math.floor((u+.5)*h))].id)}}}function Ey(n,t=36){let e=new Map;for(let r=0;r<n.count;r+=3){let o=r*3,a=r*4;if(n.growth[o+1]>.5||n.growth[o+2]>=9||n.buds[a+3]<.72||n.energies[r]<.28)continue;let c=[0,1,2].map(f=>n.positions[o+f]+n.buds[a+f]);if(c[1]<-.45||!c.every(Number.isFinite))continue;let l=c.map(f=>Math.round(f/.075)).join(","),h=e.get(l);h||(h={center:c,index:r,weight:0},e.set(l,h)),h.weight++}let i=[...e.values()].filter(r=>r.weight>=18).sort((r,o)=>o.weight-r.weight);if(!i.length)return[];let s=[i.shift()];for(;s.length<t&&i.length;){let r=-1,o=-1;for(let a=0;a<i.length;a++){let c=i[a],l=Math.min(...s.map(f=>(c.center[0]-f.center[0])**2+(c.center[1]-f.center[1])**2+.72*(c.center[2]-f.center[2])**2));if(l<.29**2)continue;let h=l*(.65+.07*Math.log1p(c.weight));h>o&&(o=h,r=a)}if(r<0)break;s.push(i.splice(r,1)[0])}return s.sort((r,o)=>tc(r.center)-tc(o.center))}function Ay(n,t){let[e,i]=n.dynamics,s=(1-Math.exp(-e*t))/e,r=.5*t*t,o=.55*e,a=(1-Math.exp(-o*t))/o;return[n.center[0]+n.velocity[0]*s+n.drift[0]*r,n.center[1]+n.velocity[1]*a-i*(t-a)/o,n.center[2]+n.velocity[2]*s+n.drift[1]*r]}function Cy(n,t){let e=Math.max(0,t-n.birth),i=Math.exp(-n.dynamics[0]*e),s=.55*n.dynamics[0],r=Math.exp(-s*e);return[n.velocity[0]*i+n.drift[0]*e,n.velocity[1]*r-n.dynamics[1]*(1-r)/s,n.velocity[2]*i+n.drift[1]*e]}function Ry(n){let t=new Set;for(let e=0;e<3;e++){let i=n.map((r,o)=>({...r,id:o})).filter(r=>My(r.center)===e),s=[];for(let r=0;r<[1,2,1][e]&&i.length;r++){let o=c=>Math.log1p(c.weight)*Math.min(2,s.length?Math.min(...s.map(l=>Math.hypot(c.center[0]-l.center[0],c.center[1]-l.center[1],.7*(c.center[2]-l.center[2])))):1);i.sort((c,l)=>o(l)-o(c));let a=i.shift();s.push(a),t.add(a.id)}}return t}function Py(n){let t=Ey(n),e=Ry(t),i=[];if(!t.length)return{centers:t,prominent:e,records:i,tailIndices:[],explosionCount:0};let s=t.map((v,y)=>e.has(y)?9:.38+.32*pt(y+83)),r=s.reduce((v,y)=>v+y,0),o=[];s.reduce((v,y)=>(o.push(v+y),v+y),0);let a=v=>{let y=pt(v)*r;return Math.max(0,o.findIndex(T=>y<T))},c=[],l=[],h=(v,y)=>{let T=13007+y*23+v*137791,S=a(T+1),M=t[S].center,_=e.has(S),A=pt(T+2)*Math.PI*2,R=-.62+1.62*pt(T+3),L=Math.sqrt(1-R*R),I=Math.sign(M[0]-.3268)*(.18+.34*pt(S+907)),D=.78+.48*pt(S+211),U=[Math.cos(A)*L*D+I,R*(.85+.4*pt(S+331))+.45+.28*pt(S+417),Math.sin(A)*L*(.62+.25*pt(S+563))+(pt(S+619)-.5)*.48],z=Math.hypot(...U),k=(v===0?3.5+3.3*pt(T+6):v===1?4.3+3.8*pt(T+6):5.7+3.1*pt(T+6))*(_?1.1:.72+.18*pt(S+773)),J=v===0?1+.85*pt(T+8):v===1?.58+.56*pt(T+8):.38+.42*pt(T+8),Y=2.65+1.05*pt(T+9),at=tc(M)+(.022+.02*pt(S+5))*pt(T+10),lt=Math.min(13.8-at,3.05+.8*pt(T+11)),bt={center:M.slice(),velocity:U.map(_t=>_t/z*k),seed:[pt(T+13),pt(T+14),pt(T+15)],birth:at,life:lt,stage:1,character:[_?1:.48+.24*pt(T+16),v,v===0?.035+.045*pt(T+17):v===1?.12+.13*pt(T+17):.23+.14*pt(T+17)],dynamics:[J,Y,0],drift:[(pt(T+18)-.5)*.25,(pt(T+19)-.5)*.23,S],bud:S,kind:v,originalLife:lt},ft=i.push(bt)-1;v===1&&c.push(ft),v>0?l.push({index:ft,score:v===2?2+pt(T+20):pt(T+20)}):y<14400&&y%16===0&&l.push({index:ft,score:.6+.3*pt(T+20)})};for(let v=0;v<14592;v++)h(0,v);for(let v=0;v<4320;v++)h(1,v);for(let v=0;v<480;v++)h(2,v);let f=c.map(v=>({index:v,priority:pt(v+414)})).sort((v,y)=>v.priority-y.priority).slice(0,768);for(let{index:v}of f){let y=i[v],T=.3+.38*pt(v+505),S=y.birth+T,M=Ay(y,T),_=Cy(y,S);y.originalLife=y.life,y.life=T+.1,y.dynamics[2]=1;for(let A=0;A<6;A++){let R=v*31+A*137,L=pt(R+1)*Math.PI*2,I=.22+.42*pt(R+2);i.push({center:M.slice(),velocity:[_[0]+Math.cos(L)*I,_[1]+(pt(R+3)-.38)*.75,_[2]+Math.sin(L)*I],seed:[pt(R+4),pt(R+5),pt(R+6)],birth:S,life:Math.min(13.8-S,2.1+.7*pt(R+7)),stage:1,character:[y.character[0],0,.03+.045*pt(R+8)],dynamics:[.72+.57*pt(R+9),2.9+1.2*pt(R+10),0],drift:[(pt(R+11)-.5)*.28,(pt(R+12)-.5)*.25,y.bud],bud:y.bud,kind:0,parent:v,fractureAge:T})}}let u=i.length,d=l.sort((v,y)=>y.score-v.score).slice(0,2600).map(v=>v.index);for(let v=0;v<t.length;v++){let y=t[v].center,T=tc(y),S=e.has(v),M=S?1:.55;for(let _=0;_<36;_++){let A=v*7919+_*13,R=pt(v+_%5*17)*Math.PI*2,L=7.22+.16*pt(v+9);i.push({center:y.slice(),velocity:[Math.cos(R)*(.2+.17*pt(A)),.28+.34*pt(A+1),Math.sin(R)*(.18+.12*pt(A+2))],seed:[pt(A+3),pt(A+4),pt(A+5)],birth:L,life:T+.05-L,stage:0,character:[M,0,.06],dynamics:[1,1,0],drift:[0,0,v]})}for(let _=0;_<(S?36:8);_++){let A=v*59+_*11,R=.035+.11*Math.sqrt(pt(A+8)),L=pt(A+7)*Math.PI*2;i.push({center:y.slice(),velocity:[Math.cos(L)*R,(pt(A+1)-.25)*R,Math.sin(L)*R],seed:[pt(A+3),pt(A+4),pt(A+5)],birth:T,life:S?.34:.22,stage:2,character:[M,0,.05],dynamics:[1,1,0],drift:[0,0,v]})}}let g=[],x=[],m=new Set;by.forEach((v,y)=>{let T=Ty(t,e,v,m);m=new Set(T),T.forEach((S,M)=>{let _=t[S].center,A=e.has(S);g.push({center:_.slice(),birth:v.time,scale:v.scale});let R=[[0,Math.round(520*v.scale)],[1,Math.round(150*v.scale)],[2,Math.round(18*v.scale)]];for(let[L,I]of R)for(let D=0;D<I;D++){let U=900001+y*104729+M*7919+D*23+L*137,z=pt(U+2)*Math.PI*2,k=-.55+1.55*pt(U+3),J=Math.sqrt(1-k*k),Y=Math.sign(_[0]-.3268)*(.15+.3*pt(S+y*31+907)),at=[Math.cos(z)*J*(.8+.4*pt(U+4))+Y,k*.95+.52,Math.sin(z)*J*.7+(pt(U+5)-.5)*.4],lt=Math.hypot(...at),bt=(L===0?3.2+3*pt(U+6):L===1?4+3.4*pt(U+6):5.2+2.8*pt(U+6))*(.72+.3*v.scale)*(A?1.05:.9),ft=L===0?1+.85*pt(U+8):L===1?.58+.56*pt(U+8):.38+.42*pt(U+8),_t=v.time+.014*pt(U+10),Z=Math.min(Ed-_t,(2.35+.75*pt(U+11))*(.8+.25*v.scale)),et=i.push({center:_.slice(),velocity:at.map(ct=>ct/lt*bt),seed:[pt(U+13),pt(U+14),pt(U+15)],birth:_t,life:Z,stage:1,character:[A?1:.62,L,L===0?.035+.04*pt(U+17):L===1?.11+.12*pt(U+17):.2+.12*pt(U+17)],dynamics:[ft,2.65+1.05*pt(U+9),0],drift:[(pt(U+18)-.5)*.25,(pt(U+19)-.5)*.23,S],bud:S,kind:L,encore:y})-1;L>0&&x.push({index:et,score:L===2?2+pt(U+20):pt(U+20)})}for(let L=0;L<18;L++){let I=700001+y*3571+M*59+L*11,D=.035+.1*Math.sqrt(pt(I+8)),U=pt(I+7)*Math.PI*2;i.push({center:_.slice(),velocity:[Math.cos(U)*D,(pt(I+1)-.25)*D,Math.sin(U)*D],seed:[pt(I+3),pt(I+4),pt(I+5)],birth:v.time,life:.26,stage:2,character:[A?1:.6,0,.05],dynamics:[1,1,0],drift:[0,0,S]})}})});let p=x.sort((v,y)=>y.score-v.score).slice(0,900).map(v=>v.index),E=[];for(let v=0;v<n.count;v+=5){let y=v*3,T=v*4;n.growth[y+1]>.5||n.growth[y+2]>=9||n.buds[T+3]<.5||(n.florets?.[v*2]??.5)<.15||E.push(v)}let w=[];for(let v of Sy){let y=Math.round((v.to-v.from)*v.rate);for(let T=0;T<y;T++)w.push(v.from+(v.to-v.from)*(T+pt(T*7+3+v.from*100))/y)}for(let v of wy)for(let y=0;y<v.count;y++)w.push(v.time+.9*Math.pow(pt(y*13+v.time*10),1.8));let b=0;return E.length&&w.forEach((v,y)=>{let T=500009+y*31,S=E[Math.floor(pt(T)*E.length)],M=[n.positions[S*3],n.positions[S*3+1],n.positions[S*3+2]];i.push({center:M,velocity:[pt(T+1)*6.283,.05+.1*pt(T+2),.17+.16*pt(T+3)],seed:[pt(T+4),pt(T+5),pt(T+6)],birth:v,life:Math.min(Ed-v,2.6+1.6*pt(T+7)),stage:3,character:[.62+.38*pt(T+8),3,0],dynamics:[0,0,0],drift:[0,0,-1]}),b++}),{centers:t,prominent:e,records:i,tailIndices:d.concat(p),explosionCount:u,encoreBursts:g,petals:b}}var Cd=`
uniform float uIronTime;
uniform float uIronPixelRatio;
uniform float uIronWaterY;
uniform float uAlignmentDistance;
uniform vec2 uAlignmentOffset;
attribute vec3 aOrigin;
attribute vec3 aVelocity;
attribute vec3 aSeed;
attribute vec3 aClock;
attribute vec3 aCharacter; // strength, grain class, tail duration
attribute vec3 aDynamics; // horizontal drag, gravity, fracture parent
attribute vec3 aDrift; // horizontal acceleration x/z, physical bud id
varying vec3 vIronColor;
varying float vIronAlpha;
vec3 ironRegistered(vec3 p){
 p.xy=(p.xy+uAlignmentOffset)*(1.-p.z/uAlignmentDistance)-uAlignmentOffset;
 return p;
}
// cinematic-v2e glittering-willow tail: launch, apex and most of the fall
// keep their speed. Only the last third of a spark's life eases down to 45%
// speed, and only its last ~0.8 s strobes, faster as it dies.
bool ironFlying(){return aClock.z>.5&&aClock.z<1.5&&aDynamics.z<.5;}
float ironWarp(float a){
 if(!ironFlying())return a;
 float S=.66*aClock.y,R=.35,k=.45;
 if(a<S)return a;
 float x=a-S;
 if(x<R)return S+x-(1.-k)*x*x/(2.*R);
 return S+R-(1.-k)*R*.5+(x-R)*k;
}
float ironRealLife(){
 float L=aClock.y;
 if(!ironFlying())return L;
 float S=.66*L,R=.35,k=.45,W=S+R-(1.-k)*R*.5;
 if(L<=W){float c=(1.-k)/(2.*R),d=L-S;return S+(1.-sqrt(max(0.,1.-4.*c*d)))/(2.*c);}
 return S+R+(L-W)/k;
}
float ironGlitter(float realAge,out float strobe){
 float remain=ironRealLife()-realAge;
 float on=(1.-smoothstep(.55,.80,remain))*step(.30,aSeed.y)*step(.5,aClock.z)*step(aClock.z,1.5);
 float freq=mix(6.,22.,1.-clamp(remain/.8,0.,1.))+aSeed.z*5.;
 strobe=step(.45,fract(realAge*freq+aSeed.x*3.));
 return on;
}
vec3 ironPosition(float time){
 float age=max(0.,time-aClock.x);
 if(aClock.z>2.5){
  // cinematic-v2 silver petal: a slow flutter that settles into a fall.
  float sway=min(1.,age*1.6);
  return ironRegistered(aOrigin+vec3(
   sin(age*(1.15+aSeed.x*.9)+aVelocity.x)*aVelocity.y*sway,
   -(aVelocity.z*age+.075*age*age),
   cos(age*(.95+aSeed.y*.8)+aVelocity.x*1.7)*aVelocity.y*.75*sway));
 }
 if(aClock.z>1.5)return ironRegistered(aOrigin+aVelocity*(1.+.12*sin(age*3.6+aSeed.z*13.)));
 if(aClock.z<.5){
  // A fixed, compact constellation at each bud. Only its light changes:
  // the anticipation is a gold glint, without outward particle travel.
  vec3 p=aOrigin+vec3(aVelocity.x,aVelocity.y-.43,aVelocity.z)*(.16+.18*aSeed.x);
  return ironRegistered(p);
 }
 age=ironWarp(age);
 float travel=(1.-exp(-aDynamics.x*age))/aDynamics.x,t2=.5*age*age;
 float verticalDrag=.55*aDynamics.x,rise=(1.-exp(-verticalDrag*age))/verticalDrag;
 return ironRegistered(aOrigin+vec3(aVelocity.x*travel+aDrift.x*t2,
  aVelocity.y*rise-aDynamics.y*(age-rise)/verticalDrag,aVelocity.z*travel+aDrift.y*t2));
}
float ironAlpha(float time,vec3 p){
 float realAge=time-aClock.x;
 float age=realAge<0.?realAge:ironWarp(realAge);
 if(realAge<0.||age>=aClock.y)return 0.;
 float q=age/aClock.y;
 float flicker=.68+.32*pow(sin(age*(18.+aSeed.z*17.)+aSeed.x*31.),2.);
 float alpha;
 if(aClock.z>2.5){
  float fade=smoothstep(0.,.22,age)*(1.-smoothstep(aClock.y*.55,aClock.y,age));
  float twinkle=.45+.55*pow(.5+.5*sin(age*(4.2+aSeed.z*5.)+aSeed.x*23.),2.);
  alpha=fade*twinkle*(.58+.52*aSeed.y)*aCharacter.x;
  flicker=1.;
 }else if(aClock.z>1.5){
  float joining=smoothstep(0.,.045,age);
  alpha=smoothstep(0.,.012,age)*mix(1.30,.65,joining)*(1.-smoothstep(.08,aClock.y,age));
  alpha*=mix(.62,1.,aCharacter.x);
 }else if(aClock.z<.5){
  // First reveal a steady ember. Bring in the independent light pulses only
  // after it has emerged, so a randomly bright phase cannot flash into view.
  float appearDelay=.10*aSeed.x+.10*fract(aDrift.z*.381966);
  float reveal=smoothstep(0.,.70+.12*aSeed.z,age-appearDelay);
  float pulseStart=.65+.16*aSeed.x;
  float pulsing=smoothstep(pulseStart,pulseStart+.36,age);
  float glint=pow(.5+.5*sin(age*(6.6+2.*aSeed.z)+aSeed.x*6.2831853),3.);
  flicker=mix(.36,.24+1.50*glint,pulsing);
  // Carry the gold light into the shared impact; fade only after ignition.
  float burstAge=aClock.y-.05;
  float charge=smoothstep(burstAge-.32,burstAge,age);
  flicker=mix(flicker,1.55,charge);
  // cinematic-v2: in the held breath before the shared beat, more of the
  // gathered gold shows and every bud burns brighter.
  float gather=smoothstep(7.6,8.86,time);
  float sparse=smoothstep(mix(.62,.34,gather),mix(.78,.52,gather),aSeed.y);
  alpha=reveal*(1.-smoothstep(burstAge,aClock.y,age))*(.52+.32*aSeed.y)*sparse*mix(1.,1.45,gather);
 }else{
  float fade=1.-smoothstep(.82,1.,q);
  if(aDynamics.z>.5)fade=1.-smoothstep(aClock.y-.10,aClock.y,age);
  alpha=smoothstep(0.,.018,age)*fade*(.63+.30*aSeed.y)*mix(.66,1.,aCharacter.x);
  alpha*=1.+.18*step(1.5,aCharacter.y);
  // Strobe glitter only at the very end of the fall.
  float strobe;
  float glitter=ironGlitter(realAge,strobe);
  alpha*=mix(1.,strobe*2.0,glitter);
 }
 float worldY=(modelMatrix*vec4(p,1.)).y;
 return alpha*flicker*smoothstep(uIronWaterY+.007,uIronWaterY+.055,worldY);
}
vec3 ironColor(float time){
 float realAge=max(0.,time-aClock.x);
 float age=ironWarp(realAge),q=clamp(age/max(.001,aClock.y),0.,1.);
 if(aClock.z>2.5)return mix(vec3(2.0,2.12,2.45),vec3(2.7,1.75,.85),step(.86,aSeed.z))*(1.-.35*q);
 if(aClock.z>1.5)return mix(vec3(8.0,4.4,1.4),vec3(8.4,8.0,6.9),smoothstep(0.,.32,age));
 if(aClock.z<.5)return mix(vec3(4.0,1.45,.24),vec3(7.5,4.4,1.55),aSeed.y);
 float hotGrain=step(1.5,aCharacter.y),warmWhite=step(.88,aSeed.z);
 vec3 hot=mix(vec3(8.7,4.5,1.65),vec3(12.0,9.5,5.8),max(hotGrain,warmWhite*.65));
 hot*=1.+.80*hotGrain*(1.-smoothstep(.025,.16,age));
 vec3 cooled=mix(hot,vec3(3.7,.82,.09),smoothstep(.44,.98,q));
 // Each strobe flash burns warm white again.
 float strobe;
 float glitter=ironGlitter(realAge,strobe);
 return mix(cooled,vec3(9.,7.4,4.8),glitter*strobe*.75);
}
`,Iy=`
${Cd}
void main(){
 vec3 p=ironPosition(uIronTime);
 vec4 mv=modelViewMatrix*vec4(p,1.);
 gl_Position=projectionMatrix*mv;
 vIronAlpha=ironAlpha(uIronTime,p);vIronColor=ironColor(uIronTime)*1.15;
 float size=mix(1.12,1.62,aSeed.y);
 if(aCharacter.y>.5)size=mix(1.5,2.15,aSeed.y);
 if(aCharacter.y>1.5)size=mix(2.0,2.85,aSeed.y);
 if(aClock.z<.5)size=mix(1.25,1.90,aSeed.y)*(1.+.85*smoothstep(7.6,8.9,uIronTime));
 if(aClock.z>1.5)size=mix(1.05,1.70,aSeed.y);
 if(aClock.z>2.5)size=mix(1.35,2.2,aSeed.y);
 float minPerspective=aClock.z>.5&&aClock.z<1.5&&aCharacter.y<.5?.95:.86;
 gl_PointSize=min(3.0,size*clamp(1.55/max(.6,-mv.z),minPerspective,1.20))*uIronPixelRatio;
 // Silver petals are larger, softer grains so the slow rain reads on screen.
 if(aClock.z>2.5)gl_PointSize=mix(2.2,3.4,aSeed.y)*clamp(1.9/max(.6,-mv.z),.8,1.3)*uIronPixelRatio;
 if(vIronAlpha<.002){gl_Position=vec4(2.,2.,2.,1.);gl_PointSize=0.;}
}
`,Ly=`
varying vec3 vIronColor;
varying float vIronAlpha;
void main(){
 float r=length(gl_PointCoord-.5)*2.;
 if(r>=1.)discard;
 float core=exp(-3.35*r*r)*(1.-smoothstep(.68,1.,r));
 gl_FragColor=vec4(vIronColor,core*vIronAlpha);
}
`,Dy=`
${Cd}
uniform vec2 uIronResolution;
varying float vAcross;
void main(){
 // At impact the heads outrun very short tails, keeping silver buds visible.
 // Long arcs develop only after the grains have cleared their flower origin.
 float along=position.x,age=max(0.,uIronTime-aClock.x);
 float lag=min(aCharacter.z,age*.22)*along;
 float sampleTime=max(aClock.x,uIronTime-lag);
 vec3 p=ironPosition(sampleTime);
 vec4 clip=projectionMatrix*modelViewMatrix*vec4(p,1.);
 vec4 next=projectionMatrix*modelViewMatrix*vec4(ironPosition(sampleTime+.008),1.);
 vec4 previous=projectionMatrix*modelViewMatrix*vec4(ironPosition(max(aClock.x,sampleTime-.008)),1.);
 vec2 tangent=(next.xy/max(next.w,.001)-previous.xy/max(previous.w,.001))*uIronResolution;
 vec2 normal=normalize(vec2(-tangent.y,tangent.x)+vec2(.00001));
 float hotGrain=step(1.5,aCharacter.y);
 float width=(.22+.15*aSeed.y+.11*hotGrain)*(1.-.72*along);
 clip.xy+=normal*position.y*width*2./uIronResolution*clip.w;
 gl_Position=clip;
 float broken=.18+.82*smoothstep(.18,.60,sin(along*(19.+aSeed.z*16.)+aSeed.x*21.)*.5+.5);
 broken=mix(broken,.60+.40*broken,hotGrain);
 vIronAlpha=ironAlpha(uIronTime,p)*pow(1.-along,1.1)*.70*broken*smoothstep(.35,2.1,length(tangent));
 vIronColor=ironColor(uIronTime)*.80;
 vAcross=position.y;
 if(ironAlpha(uIronTime,ironPosition(uIronTime))<.002||uIronTime<aClock.x)gl_Position=vec4(2.,2.,2.,1.);
}
`,Fy=`
varying vec3 vIronColor;
varying float vIronAlpha;
varying float vAcross;
void main(){
 float core=exp(-vAcross*vAcross*3.3)*(1.-smoothstep(.65,1.,abs(vAcross)));
 gl_FragColor=vec4(vIronColor,vIronAlpha*core);
}
`,jh=n=>{if(n.stage!==1||n.dynamics[2]>.5)return n.life;let t=n.life,e=.66*t,i=.35,s=.45,r=e+i-(1-s)*i*.5;if(t<=r){let o=(1-s)/(2*i),a=t-e;return e+(1-Math.sqrt(Math.max(0,1-4*o*a)))/(2*o)}return e+i+(t-r)/s};function Rd({content:n,cloud:t,uniforms:e,waterLevel:i}){let{centers:s,prominent:r,records:o,tailIndices:a,explosionCount:c,encoreBursts:l=[],petals:h=0}=Py(t),f={uIronTime:{value:0},uIronPixelRatio:{value:1},uIronWaterY:{value:i},uIronResolution:{value:new At(1280,720)},uAlignmentDistance:e.uAlignmentDistance,uAlignmentOffset:e.uAlignmentOffset},u=(R,L,I)=>{let D={aOrigin:[],aVelocity:[],aSeed:[],aClock:[],aCharacter:[],aDynamics:[],aDrift:[]};for(let z of L){let k=o[z];D.aOrigin.push(...k.center),D.aVelocity.push(...k.velocity),D.aSeed.push(...k.seed),D.aClock.push(k.birth,k.life,k.stage),D.aCharacter.push(...k.character),D.aDynamics.push(...k.dynamics),D.aDrift.push(...k.drift)}let U=I?Rs:se;for(let[z,k]of Object.entries(D))R.setAttribute(z,new U(new Float32Array(k),3))},d=new Se;d.setAttribute("position",new se(new Float32Array(o.length*3),3)),u(d,o.map((R,L)=>L),!1);let g=(R,L)=>new he({uniforms:f,vertexShader:R,fragmentShader:L,transparent:!0,depthTest:!0,depthWrite:!1,blending:Ue,side:vn}),x=new rn(d,g(Iy,Ly));x.name="iron-flower-spark-grains";let m=new Is,p=[],E=[],w=8;for(let R=0;R<=w;R++)p.push(R/w,-1,0,R/w,1,0);for(let R=0;R<w;R++){let L=R*2;E.push(L,L+1,L+2,L+1,L+3,L+2)}m.setAttribute("position",new pe(p,3)),m.setIndex(E),u(m,a,!0),m.instanceCount=a.length;let b=new Ze(m,g(Dy,Fy));b.name="iron-flower-arc-trails";let v=new nn;v.name="iron-flower-curtain",v.visible=!1,v.add(b,x),v.traverse(R=>{R.userData.directOnly=!0,R.layers.set(0),R.frustumCulled=!1,R.renderOrder=6,R.material&&(R.onBeforeRender=L=>{L.getSize(f.uIronResolution.value),f.uIronPixelRatio.value=L.getPixelRatio(),R.material.uniformsNeedUpdate=!0})}),n.add(v);let y=!1,T=Math.max(0,...o.map(R=>R.birth+jh(R))),S=Math.max(0,...o.filter(R=>R.stage===1).map(R=>R.birth+jh(R))),_={phase:"inactive",activeSparks:0,activeSprouts:0,activeEmbers:0,centers:s.length,prominentFans:r.size};function A({time:R=0,motion:L=!0,pixelRatio:I=1}={}){let D=Number.isFinite(R)?R:0;f.uIronTime.value=D,f.uIronPixelRatio.value=Math.max(.1,I);let U=0,z=0,k=0,J=0;if(L&&!y&&D>=7.2&&D<T)for(let Y of o)D<Y.birth||D>=Y.birth+jh(Y)||(Y.stage===1?U++:Y.stage===2?k++:Y.stage===3?J++:z++);return v.visible=U+z+k+J>0,_={phase:U?"burst":z?"sprout":k?"ember":J?"petal":"inactive",activeSparks:U,activeSprouts:z,activeEmbers:k,activePetals:J,centers:s.length,prominentFans:r.size},v.userData.state=_,_}return Object.assign(v.userData,{version:"iron-flower-curtain-v1",centers:s.map(R=>R.center),prominentCenters:[...r].map(R=>s[R].center),particles:o.length,explosionParticles:c,fractureChildren:o.filter(R=>R.parent!==void 0).length,trails:a.length,finish:T,flyingFinish:S,encoreBursts:l.length,petals:h}),{group:v,update:A,encoreBursts:l,getState:()=>_,dispose(){if(!y){y=!0,v.visible=!1,n.remove(v);for(let R of[x,b])R.geometry.dispose(),R.material.dispose()}}}}var Pd=3800,Ny=46,Jn=n=>{let t=Math.sin(n*12.9898+78.233)*43758.5453;return t-Math.floor(t)},Uy=`
uniform float uLive;
uniform float uStory;
uniform float uMotion;
uniform float uPixelRatio;
uniform float uAlignmentDistance;
uniform vec2 uAlignmentOffset;
attribute vec3 aDir;
attribute vec4 aSeed;
attribute vec4 aInfo; // reveal (story s), period (s), kind (0 grain, 1 mote), along-root u
varying float vAlpha;
varying vec3 vColor;
varying float vSoft;
vec3 registered(vec3 p){
 p.xy=(p.xy+uAlignmentOffset)*(1.-p.z/uAlignmentDistance)-uAlignmentOffset;
 return p;
}
void main(){
 float mote=aInfo.z;
 float phase=uMotion>.5?fract(uLive/aInfo.y+aSeed.x):aSeed.x;
 // Along the root first, then lifted off by the wind toward screen right.
 vec3 drift=aDir*(.08+.16*aSeed.y)*phase;
 vec3 wind=vec3(.62,-.10,.18)*(.20+.45*aSeed.z)*pow(phase,1.45)*(1.+.8*mote);
 vec3 swirl=vec3(sin(phase*6.3+aSeed.w*21.),.5*cos(phase*5.1+aSeed.x*13.),sin(phase*4.4+aSeed.y*17.))*(.025+.03*mote)*phase;
 vec3 p=position+drift+wind+swirl;
 vec4 mv=modelViewMatrix*vec4(registered(p),1.);
 gl_Position=projectionMatrix*mv;
 float dist=max(.12,-mv.z);
 float base=mix(1.15+1.6*aSeed.w,9.+12.*aSeed.w,mote);
 gl_PointSize=clamp(base*1.25/dist,mix(1.,5.,mote),mix(5.,46.,mote))*uPixelRatio;
 // Appears once its root has grown; each grain fades in and out on its loop.
 float presence=smoothstep(aInfo.x+.4,aInfo.x+1.6,max(uStory,uLive));
 float life=pow(sin(3.14159265*phase),1.3);
 float twinkle=.65+.35*sin(uLive*(2.+3.*aSeed.y)+aSeed.z*40.);
 vAlpha=presence*life*mix((.38+.50*aSeed.y)*twinkle,.030+.035*aSeed.y,mote);
 float silver=step(.88,aSeed.z)*(1.-mote);
 vColor=mix(mix(vec3(1.25,.86,.64),vec3(1.05,.80,.66),mote),vec3(1.15,1.2,1.3),silver);
 vSoft=mote;
 if(vAlpha<.002){gl_Position=vec4(2.,2.,2.,1.);gl_PointSize=0.;}
}
`,Oy=`
varying float vAlpha;
varying vec3 vColor;
varying float vSoft;
void main(){
 float r=length(gl_PointCoord-.5)*2.;
 if(r>=1.)discard;
 float shape=mix(exp(-5.*r*r),(exp(-1.6*r*r)-.2)*(1.-smoothstep(.75,1.,r)),vSoft);
 gl_FragColor=vec4(vColor,max(0.,shape)*vAlpha);
}
`;function Id({content:n,strands:t,uniforms:e}){let i=(t||[]).filter(d=>d.points?.length>2),s=i.length?Pd+Ny:0,r=new Float32Array(s*3),o=new Float32Array(s*3),a=new Float32Array(s*4),c=new Float32Array(s*4);if(s){let d=i.map(x=>{let m=0;for(let p=1;p<x.points.length;p++)m+=Math.hypot(...[0,1,2].map(E=>x.points[p][E]-x.points[p-1][E]));return m*(x.terminal?1.7:.55)}),g=d.reduce((x,m)=>x+m,0);for(let x=0;x<s;x++){let m=x>=Pd,p=Jn(x*3+1)*g,E=0;for(;E<i.length-1&&p>d[E];)p-=d[E++];let w=i[E],b=w.points.length-1,v=m?.35+.65*Jn(x*3+2):Math.pow(Jn(x*3+2),.55),y=v*b,T=Math.min(b-1,Math.floor(y)),S=y-T,M=w.points[T],_=w.points[T+1],A=[0,1,2].map(z=>M[z]+(_[z]-M[z])*S),R=[0,1,2].map(z=>_[z]-M[z]),L=Math.hypot(...R)||1,I=(w.radius+(w.endRadius-w.radius)*v)*(1.2+(m?2.5:.6)*Jn(x*3+3))+(m?.18+.35*Jn(x*7+5):0),D=Jn(x*5+4)*Math.PI*2;r.set([A[0]+Math.cos(D)*I,A[1]+Math.sin(D)*I*.7,A[2]+Math.sin(D)*I],x*3),o.set(R.map(z=>z/L),x*3),a.set([Jn(x*11+1),Jn(x*11+2),Jn(x*11+3),Jn(x*11+4)],x*4);let U=le.growStart+(w.reveal+(w.span||0)*v)*le.growSpan;c.set([U,m?7+5*Jn(x*13+1):3.2+3.3*Jn(x*13+1),m?1:0,v],x*4)}}let l=new Se;l.setAttribute("position",new se(r,3)),l.setAttribute("aDir",new se(o,3)),l.setAttribute("aSeed",new se(a,4)),l.setAttribute("aInfo",new se(c,4));let h={uLive:{value:0},uStory:{value:0},uMotion:{value:1},uPixelRatio:{value:1},uAlignmentDistance:e.uAlignmentDistance,uAlignmentOffset:e.uAlignmentOffset},f=new he({uniforms:h,vertexShader:Uy,fragmentShader:Oy,transparent:!0,depthWrite:!1,depthTest:!0,blending:Ue}),u=new rn(l,f);return u.name="root-drift",u.frustumCulled=!1,u.renderOrder=6,u.visible=s>0,u.userData.directOnly=!0,n.add(u),{points:u,update({story:d=0,live:g=d,motion:x=!0,pixelRatio:m=1}={}){h.uStory.value=d,h.uLive.value=Math.max(d,g),h.uMotion.value=x?1:0,h.uPixelRatio.value=m},dispose(){n.remove(u),l.dispose(),f.dispose()}}}var Jh=3.7037037037037033,By=1/4294967296,Qh=n=>Math.min(1,Math.max(0,n)),No=n=>n*n*(3-2*n);function Dd(n,t,e){let i=Math.imul(n,374761393)^Math.imul(t,668265263)^Math.imul(e,1442695041);return i=Math.imul(i^i>>>13,1274126177),(i^i>>>16)>>>0}function Ld(n){return n=Math.imul(n^n>>>16,2246822519),n=Math.imul(n^n>>>13,3266489917),(n^n>>>16)>>>0}function zy(n,t,e){let i=Math.floor(n),s=Math.floor(t),r=Math.floor(e),o=No(n-i),a=No(t-s),c=No(e-r),l=0;for(let h=0;h<=1;h++)for(let f=0;f<=1;f++)for(let u=0;u<=1;u++)l+=Dd(i+u,s+f,r+h)*By*(u?o:1-o)*(f?a:1-a)*(h?c:1-c);return l}function Fd(n,t,e){if(!Number.isFinite(n)||!Number.isFinite(t)||!Number.isFinite(e))return[0,0];let i=.8*n+.6*e,s=-.36*n+.8*t+.48*e,r=-.48*n-.6*t+.64*e,o=(i+.075*Math.sin(s*2.3+r*1.7))*Jh,a=(s+.07*Math.sin(r*2.7-i*1.3))*Jh,c=(r+.065*Math.sin(i*2.1+s*1.9))*Jh,l=Math.floor(o),h=Math.floor(a),f=Math.floor(c),u=1/0,d=0,g=0,x=0,m=0;for(let M=-1;M<=1;M++)for(let _=-1;_<=1;_++)for(let A=-1;A<=1;A++){let R=l+A,L=h+_,I=f+M,D=Dd(R,L,I),U=Ld(D),z=Ld(U),k=o-R-(.14+.72*(D&1023)/1023),J=a-L-(.14+.72*(U&1023)/1023),Y=c-I-(.14+.72*(z&1023)/1023),at=.42+.24*(D>>>10&1023)/1023,lt=.79+.38*(U>>>10&1023)/1023,bt=.8+.36*(z>>>10&1023)/1023,ft=(k*k/(lt*lt)+J*J+Y*Y/(bt*bt))/(at*at);ft<u&&(u=ft,d=k/at,g=J/at,x=Y/at,m=D)}let p=1-No(Qh((u-.12)/1.13)),E=zy(i*1.35+17.2,s*1.35-8.6,r*1.35+4.1),w=Qh(p*(.4+.6*No(Qh((E-.15)/.65)))),b=(m>>>20)/4095*Math.PI*2,v=(d-.16*Math.sin(g*3.5+b))/.19,y=(x-.13*Math.cos(g*4.1+b))/.18,T=Math.max(0,1-v*v-y*y),S=w*T*T;return[w,S]}var Lr=.008379120879120879,Uo=(n,t,e)=>Math.min(e,Math.max(t,n)),ky=[[250,214,77,69,-.65,1.15],[333,247,109,85,-.45,1.35],[438,208,111,91,-1.15,1.6],[474,145,74,69,-1.45,1.35],[568,219,101,94,.85,1.6],[628,109,62,72,-.6,1.45],[674,190,105,85,.1,1.7],[749,222,96,96,-1,1.6],[815,174,76,74,-1.35,1.35],[849,263,106,75,-.25,1.6],[943,273,77,57,.75,1.25],[1009,347,104,72,-.95,1.5],[1112,375,117,81,.5,1.65],[1203,433,85,72,.85,1.35],[1280,463,52,55,.9,1],[426,290,111,91,.6,1.65],[516,334,92,97,1.2,1.7],[610,365,85,85,.7,1.4],[674,397,61,76,-.15,1.15],[308,392,96,42,1,1.05],[1109,466,100,53,-.75,1.1]],Nd=[[[767,711,0,22],[750,686,-.02,22],[738,653,-.04,20],[729,624,.02,21],[716,598,.08,21],[704,570,.03,17],[710,543,-.02,12],[701,520,-.1,8],[718,506,-.2,5],[749,505,-.28,.8]],[[721,606,.08,16],[688,610,.16,17],[653,595,.22,14],[618,578,.25,11],[585,569,.29,9],[585,536,.26,8],[578,510,.23,6],[552,478,.2,5],[531,450,.18,3.8],[515,420,.12,2.5],[491,387,.1,.4]],[[631,584,.24,8],[611,555,.1,6],[596,528,-.05,4.3],[568,498,-.12,2.6],[538,480,-.1,.45]],[[543,464,.2,4.7],[513,436,.2,4],[475,413,.22,3.3],[439,397,.2,2.8],[398,374,.3,2.2],[371,343,.45,1.5],[346,312,.45,.35]],[[584,546,.28,5.5],[552,527,.3,4.4],[526,523,.35,3.2],[503,502,.35,2.2],[483,478,.2,1.4],[450,465,.22,.3]],[[723,583,.08,12],[764,565,-.03,10],[804,548,-.15,7.8],[847,532,-.25,6.1],[880,511,-.3,4.8],[913,484,-.28,3.5],[948,479,-.12,2.6],[988,477,.1,2],[1024,469,.15,1.3],[1055,446,.25,.3]],[[738,574,.03,7],[754,545,-.15,5.8],[775,522,-.3,4.7],[814,503,-.4,3.6],[854,490,-.4,2.4],[881,465,-.3,1.5],[893,440,-.3,1]],[[898,496,-.28,3.3],[929,499,-.05,2.9],[970,509,.15,2.1],[1005,527,.2,1.2],[1020,544,.2,.4]],[[914,484,-.28,3.4],[900,460,-.25,2.9],[880,436,-.3,2.3],[847,409,-.4,1.6],[818,383,-.35,1],[805,351,-.2,.4]],[[995,476,.12,1.9],[1055,479,.2,1.6],[1120,474,.3,1.2],[1191,484,.2,.75],[1231,507,.1,.4]],[[716,551,-.04,5],[690,528,.12,3.8],[660,497,.25,2.7],[625,476,.35,1.5],[602,449,.45,.4]],[[530,447,.17,3.1],[548,422,.08,2.6],[576,403,-.1,1.9],[596,375,-.25,1.1],[609,341,-.35,.4]],[[492,423,.21,2.5],[468,393,.35,2],[456,358,.4,1.3],[427,335,.35,.7],[411,312,.3,.4]],[[438,398,.2,2.4],[400,399,.13,1.9],[362,406,.05,1.1],[323,408,-.1,.5],[288,420,-.15,.4]],[[513,420,.12,2.1],[510,384,.08,1.5],[483,355,-.12,1],[480,321,-.23,.6],[491,289,-.25,.4]],[[770,526,-.3,3],[755,493,-.42,2.2],[731,460,-.5,1.5],[725,424,-.6,.8],[708,401,-.65,.4]],[[805,551,-.15,4.7],[827,522,-.05,3.2],[843,501,.12,2],[839,477,.25,.9],[858,452,.35,.4]],[[948,479,-.12,2],[973,452,-.2,1.4],[995,431,-.3,.75],[1004,406,-.35,.4]],[[1055,479,.2,1.4],[1073,455,.25,.9],[1101,442,.35,.5],[1120,419,.4,.4]],[[766,709,0,10],[788,724,.12,8],[816,730,.16,4.5],[849,722,.1,2],[877,730,.02,.4]],[[767,711,0,12],[740,725,.18,9],[714,743,.25,5.5],[695,765,.18,2.5],[666,785,.08,.4]],[[767,704,-.02,8],[798,687,-.15,5.2],[832,685,-.28,2.8],[853,664,-.35,1.2],[876,654,-.4,.4]],[[747,691,-.02,6],[722,699,-.2,4.5],[699,718,-.35,2.8],[683,742,-.42,.9],[657,752,-.4,.4]]],Vy=[[0,-.08,-.12,.05,.3,.34,.08,-.26,-.5,-.72],[.22,.64,1,1.28,1.17,1.33,1.11,.58,.26,-.03,-.39],[1.18,1,.6,.2,-.2],[.43,-.21,-.92,-1.28,-1.53,-1.83,-2.35],[1.28,1.3,1.34,1.31,.99,.4],[.31,-.03,-.51,-.8,-.94,-.75,-.07,.47,1,1.5],[.18,-.2,-.5,-.85,-1.1,-1.25,-.75],[-.84,-1.1,-1.2,-1.2,-1.1],[-.73,-1.1,-1.42,-1.76,-1.76,-1.54],[.57,.9,1.2,1.3,1.2],[.14,.33,.65,.77,.99],[.23,.13,-.4,-.9,-1.3],[-.6,-.57,-.51,-.9,-1.35],[-1.28,-1.36,-1.42,-1.66,-1.78],[-.04,-.16,-.8,-1.4,-1.8],[-.6,-.95,-1.4,-1.8,-1.9],[-.51,-.2,.1,.4,.6],[-.07,-.11,-.17,-.18],[.9,1.05,1.15,1.1],[0,.2,.38,.3,.35],[0,.08,.16,.2,.2],[-.04,-.4,-.75,-1,-1.15],[-.08,-.3,-.5,-.65,-.7]],cn=[-1,0,1,1,1,0,5,5,5,5,0,1,3,3,1,6,5,5,9,0,0,0,0];function Hy(n,t,e){let i=1/0,s=n[0][2];for(let r=1;r<n.length;r++){let o=n[r-1],a=n[r],c=a[0]-o[0],l=a[1]-o[1],h=Uo(((t-o[0])*c+(e-o[1])*l)/(c*c+l*l),0,1),f=(t-o[0]-c*h)**2+(e-o[1]-l*h)**2;f<i&&(i=f,s=o[2]+(a[2]-o[2])*h)}return s}var as=[];for(let n=0;n<Nd.length;n++){let t=Nd[n].map((e,i)=>[e[0],e[1],Vy[n][i],e[3]]);if(cn[n]>=0){let e=Hy(as[cn[n]],t[0][0],t[0][1]),i=e-t[0][2];t[0][2]=e,t[1][2]+=i*.42}as.push(t)}function Gy(n,t,e,i){let s=1/0,r=n[0];for(let o=1;o<t.length;o++){let a=t[o-1],c=t[o],l=c[0]-a[0],h=c[1]-a[1],f=Uo(((e-a[0])*l+(i-a[1])*h)/(l*l+h*h),0,1),u=(e-a[0]-l*f)**2+(i-a[1]-h*f)**2;u<s&&(s=u,r=n[o-1]+(n[o]-n[o-1])*f)}return r}var nc=[];for(let n=0;n<as.length;n++){let t=as[n],e=cn[n]>=0?Gy(nc[cn[n]],as[cn[n]],t[0][0],t[0][1]):0,i=[e];for(let s=1;s<t.length;s++)e+=Math.hypot(t[s][0]-t[s-1][0],t[s][1]-t[s-1][1]),i.push(e);nc.push(i)}var Wy=Math.max(...nc.flat()),ze=nc.map(n=>n.map(t=>t/Wy)),Xy=as.flatMap((n,t)=>n.slice(1).map((e,i)=>{let s=n[i],r=e[0]-s[0],o=e[1]-s[1],a=r*r+o*o;return{a:s,b:e,dx:r,dy:o,length2:a,length:Math.sqrt(a),g0:ze[t][i],g1:ze[t][i+1],path:t,index:i}}));function eu(n,t,e){let i=Math.hypot(n,t,e);return i>1e-9&&Number.isFinite(i)?[n/i,t/i,e/i]:[0,0,1]}function tu(n,t){let e=null,i=1/0;for(let s of Xy){let r=Uo(((n-s.a[0])*s.dx+(t-s.a[1])*s.dy)/s.length2,0,1),o=n-s.a[0]-s.dx*r,a=t-s.a[1]-s.dy*r,c=o*o+a*a;c<i&&(i=c,e={distance:Math.sqrt(c),z:s.a[2]+(s.b[2]-s.a[2])*r,radius:s.a[3]+(s.b[3]-s.a[3])*r,growth:s.g0+(s.g1-s.g0)*r,path:s.path,index:s.index,t:r,across:(o*-s.dy+a*s.dx)/s.length,perpendicular:[-s.dy/s.length,-s.dx/s.length],tangent:eu(s.dx*Lr,-s.dy*Lr,s.b[2]-s.a[2])})}return e}function Ud(n,t){let e=Math.max(n.radius,Math.abs(n.across)*1.08+.55),i=n.across/e,s=Uo(e*Lr*2.45,.035,.58),r=Math.sqrt(Math.max(.015,1-i*i))*s,a=(t()<.5?-1:1)*r*(t()<.2?.76+t()*.24:t()*.8),c=i/Math.max(.008,e*Lr),l=n.perpendicular[0]*c,h=n.perpendicular[1]*c,f=a/(s*s),[u,d,g]=n.tangent,x=l*u+h*d+f*g;return l-=u*x,h-=d*x,f-=g*x,{z:n.z+a,normal:eu(l,h,f)}}function Od(n,t,e,i,s=!1){let r=(t-n[0])/n[2],o=(e-n[1])/n[3],a=r*r+o*o,c=s?1-1/(1+a*4):a,l=Math.sin(t*.11+Math.cos(e*.07))*Math.sin(e*.13+t*.025),h=Math.sqrt(Math.max(.003,1-c))*n[5]*(1+l*.045),u=(i()<.5?-1:1)*h*(i()<.12?.84+i()*.16:i()*.88);return{z:n[4]+u,normal:eu(r/(n[2]*Lr),-o/(n[3]*Lr),u/(n[5]*n[5]))}}function ec(n,t,e=-1,i=null){return{z:Uo(n.z,-3.05,3.05),material:t,normal:n.normal,growth:e,branch:i}}function Bd(n,t){let e=tu(n,t);return{growth:e.growth,distance:e.distance}}function zd(n,t,e,i,s,r=Math.random){if(![n,t,e,i,s].every(Number.isFinite))return{z:0,material:0,normal:[0,0,1]};let o=Math.max(e,i,s)>1?255:1;e/=o,i/=o,s/=o;let a=e-s,c=e-i,l=a>.055&&c>.018,h=null;(l||t>425)&&(h=tu(n,t));let f=h&&h.distance<Math.max(12,h.radius*1.45+5);if(h&&(l&&h.distance<h.radius+49||f&&t>430&&a>-.018))return ec(Ud(h,r),1,h.growth,h);let u=0,d=null,g=1/0,x=[];for(let p of ky){let E=((n-p[0])/p[2])**2+((t-p[1])/p[3])**2;E<g&&(g=E,d=p),E<=1.08&&(u+=.045+Math.max(0,1-E)**.8,x.push([p,u]))}if(x.length){let p=r()*u,E=x[x.length-1][0];for(let w of x)if(p<=w[1]){E=w[0];break}return ec(Od(E,n,t,r),0)}h??=tu(n,t);let m=Math.max(0,Math.sqrt(g)-1)*Math.min(d[2],d[3]);return h.distance-h.radius<m?ec(Ud(h,r),l?1:0,h.growth,h):ec(Od(d,n,t,r,!0),0)}var Dr=12.2/1456,Bi=n=>Math.max(0,Math.min(1,n)),_i=n=>n*n*(3-2*n),qy=[[619,76,31,27,-28,-.65,.95],[652,129,42,32,-39,-.72,1.12],[464,122,36,34,26,-1.4,1.04],[407,166,26,31,25,-1.08,.91],[477,190,49,43,-20,-1.2,1.18],[565,174,39,36,17,.8,1.16],[724,162,36,32,-24,-.9,1.03],[802,162,36,35,26,-1.35,1.02],[852,214,30,28,-37,-.42,.93],[222,199,35,28,-15,-.65,.88],[281,226,36,30,32,-.43,1],[349,208,40,33,-31,-.62,1.08],[312,286,33,29,-25,-.28,.91],[389,277,37,39,35,.36,1.05],[446,328,35,30,-18,.68,1.12],[492,275,41,34,-35,.52,1.22],[575,253,37,32,28,.92,1.23],[646,216,32,31,-19,.1,1.12],[711,249,43,38,35,-1,1.18],[792,262,31,35,-24,-.97,1.05],[861,284,39,32,22,-.17,1.13],[938,262,35,27,-16,.75,1.01],[977,303,24,21,37,.22,.83],[552,335,43,35,-18,1.17,1.2],[624,312,28,31,29,.5,1.08],[674,368,29,37,-20,-.13,1.02],[609,404,38,31,24,.76,1.16],[518,409,39,35,-32,1.18,1.22],[469,381,24,23,17,.91,.99],[399,370,27,25,-16,.62,.96],[318,392,37,22,8,1,1.02],[253,400,25,18,-20,.9,.86],[653,451,23,25,29,.05,.89],[571,463,27,20,-30,1.1,1.01],[722,312,24,23,28,-.92,.98],[819,330,26,20,-18,-.3,.95],[933,351,33,25,15,-.75,1.05],[1005,337,37,28,-22,-.92,1.17],[1080,343,31,24,29,.2,1.18],[1152,360,36,27,-15,.5,1.17],[1215,395,30,24,31,.85,1.06],[1007,400,35,26,25,-.7,1.12],[1077,414,33,30,-28,.48,1.22],[1154,426,33,28,16,.58,1.18],[1239,456,30,25,-21,.94,1.01],[1291,448,22,24,33,.9,.88],[1113,474,31,20,-13,-.7,1.02],[1190,485,30,19,22,.36,.99],[1257,517,22,21,-26,.65,.85],[541,119,20,22,-18,.32,.85],[686,94,17,19,22,-.68,.82],[762,211,19,22,-31,-1.2,.94],[366,337,20,18,22,.4,.92],[889,233,17,21,18,.23,.93],[1049,470,18,17,-21,-.7,.9]],Yy=new Set([1,4,5,7,10,13,15,18,20,23,26,27,30,37,39,42,44]),ls=qy.map((n,t)=>{let e=n[4]*Math.PI/180,i=Yy.has(t),s=i?1.43+.22*Math.sin(t*2.7):t>48?.78:1.02,r=i?1.32+.25*Math.cos(t*1.9):t>48?.82:1;return Object.freeze({x:n[0],y:n[1],rx:n[2]*s,ry:n[3]*r,cos:Math.cos(e),sin:Math.sin(e),z:n[5],rz:n[6],phase:t*2.399963229728653})}),Oo=ls.length,Bo=ls,kd=new Map([[1,2.4],[4,2.4],[5,1.4],[7,2.5],[10,1.15],[11,1.2],[15,.9],[16,.7],[17,1.15],[18,1.6],[20,1.2],[23,.65],[26,.75],[27,.65],[37,1.8],[38,1.3],[39,1.75],[42,1.35]]);function sc(n){let t=new Float32Array(n.count).fill(1),e=ls.map(r=>[(r.x-728)*Dr,(408-r.y)*Dr]),i=new Array(ls.length).fill(0),s=0;for(let r=0;r<n.count;r++){let o=r*3,a=r*4;if(n.growth[o+1]>.5||n.buds[a+3]<=0)continue;let c=n.positions[o]+n.buds[a],l=n.positions[o+1]+n.buds[a+1],h=-1;for(let f=0;f<e.length;f++)if((c-e[f][0])**2+(l-e[f][1])**2<1e-8){h=f;break}if(h<0){s++;continue}t[r]=kd.get(h)??1,i[h]++}return{values:t,unmatched:s,counts:i,gains:Object.fromEntries(kd)}}var Zy=(()=>{let n=ls.map((s,r)=>{let{growth:o,distance:a}=Bd(s.x,s.y),c=Math.sin(r*12.9898+4.1)*43758.5453%1;return o+Math.min(a,140)/1100+c*.07}),t=Math.min(...n),e=Math.max(...n),i=n.map((s,r)=>[s,r]).sort((s,r)=>s[0]-r[0]).reduce((s,[,r],o)=>(s[r]=o/(n.length-1),s),[]);return n.map((s,r)=>.45*(s-t)/(e-t)+.55*i[r])})(),Vd=Zy;function Hd(n,t,e=1.25){let i=n/Dr+728,s=408-t/Dr,r=i+15*Math.sin(s*.044+i*.021)+6*Math.sin(s*.113),o=s+13*Math.sin(i*.049-s*.027)+5*Math.cos(i*.102),a=ic(i/31+8.3,s/31-4.7),c=ic(i/11-13.2,s/11+2.8),l=.92*(a-.5)+.33*(c-.5),h=[],f=1/0,u=0;for(let d=0;d<ls.length;d++){let g=ls[d],x=r-g.x,m=o-g.y,p=(x*g.cos+m*g.sin)/g.rx,E=(-x*g.sin+m*g.cos)/g.ry,w=p*p+E*E+l;w<f&&(f=w,u=d),w<=e&&h.push([d,w])}return{covering:h,nearest:[u,f]}}function ic(n,t){let e=Math.floor(n),i=Math.floor(t),s=_i(n-e),r=_i(t-i),o=(f,u)=>{let d=Math.imul(f,374761393)^Math.imul(u,668265263);return d=Math.imul(d^d>>>13,1274126177),((d^d>>>16)>>>0)/4294967296},a=o(e,i),c=o(e+1,i),l=o(e,i+1),h=o(e+1,i+1);return(a+(c-a)*s)*(1-r)+(l+(h-l)*s)*r}function Gd(n,t,e){if(![n,t,e].every(Number.isFinite))return 0;let i=n/Dr+728,s=408-t/Dr,r=i+15*Math.sin(s*.044+i*.021)+6*Math.sin(s*.113),o=s+13*Math.sin(i*.049-s*.027)+5*Math.cos(i*.102),a=ic(i/31+8.3,s/31-4.7),c=ic(i/11-13.2,s/11+2.8),l=.92*(a-.5)+.33*(c-.5),h=1/0;for(let w of ls){let b=r-w.x,v=o-w.y;if(Math.abs(b)>w.rx+w.ry||Math.abs(v)>w.rx+w.ry)continue;let y=(b*w.cos+v*w.sin)/w.rx,T=(-b*w.sin+v*w.cos)/w.ry,S=y*y+T*T;if(S>2.1)continue;let M=(e-w.z)/w.rz,_=S+.68*M*M+l;_<h&&(h=_)}let f=1-_i(Bi((h-.1)/1.34)),u=(1-_i(Bi((h-.7)/1.28)))*.1*c,d=_i(Bi((s-205)/32))*_i(Bi((376-s)/39)),g=530+.66*(s-220)+12*Math.sin(s*.047),x=(1-_i(Bi((Math.abs(i-g)-7)/(11+8*a))))*d,m=_i(Bi((i-331)/37))*_i(Bi((518-i)/37)),p=281+.18*(i-400)+9*Math.sin(i*.048),E=(1-_i(Bi((Math.abs(s-p)-5)/(10+7*c))))*m;return Bi(Math.max(f,u)*(1-.965*Math.max(x,E)))}var zi=12.2/1456,zs=10.5,$y=-.42,oc=.06,Wd=-2.7,ks=(n,t,e)=>Math.min(e,Math.max(t,n)),rc=n=>(n=ks(n,0,1),n*n*(3-2*n)),iu=(n,t,e)=>{let i=Math.hypot(n,t,e);return i>1e-9?[n/i,t/i,e/i]:[0,0,1]},Xd=(n,t)=>[(n-728)*zi,(408-t)*zi],nu=(n,t,e)=>{let i=1-e/zs;return[(n+$y)*i,(t+oc)*i]};function qd(n,t){let e=Math.floor(n),i=Math.floor(t),s=n-e,r=t-i,o=s*s*(3-2*s),a=r*r*(3-2*r),c=(d,g)=>{let x=Math.imul(d,374761393)^Math.imul(g,668265263);return x=Math.imul(x^x>>>13,1274126177),((x^x>>>16)>>>0)/4294967296},l=c(e,i),h=c(e+1,i),f=c(e,i+1),u=c(e+1,i+1);return(l+(h-l)*o)*(1-a)+(f+(u-f)*o)*a}var jy=-.35,Ky=5.4,Jy=3.6,Qy=2.5,t_=.6,Pe=Bo.map((n,t)=>{let[e,i]=Xd(n.x,n.y);return{i:t,x:e,y:i,rxw:n.rx*zi,ryw:n.ry*zi,prior:n.z*Qy,z:0,rz:0}});(()=>{let n=Pe.length,t=Pe.reduce((o,a)=>o+a.y,0)/n,e=Pe.reduce((o,a)=>o+a.prior,0)/n,i=0,s=0;for(let o of Pe)i+=(o.y-t)*(o.prior-e),s+=(o.y-t)**2;let r=i/s;for(let o of Pe)o.prior-=(o.y-t)*r*.9+e*.8,o.z=o.prior})();(()=>{let n=e=>{let[i,s]=nu(e.x,e.y,e.z),r=Jy*(1-.42*rc((s-1.2)/2)),o=(i-jy)/Ky;return r*Math.sqrt(Math.max(.06,1-o*o))},t=Pe.map(e=>Pe.filter(i=>i!==e).map(i=>{let s=2.2*(e.rxw+e.ryw+i.rxw+i.ryw)*.5,r=(e.x-i.x)**2+(e.y-i.y)**2;return[i,Math.exp(-r/(2*s*s))*(i.rxw+i.ryw)]}).filter(([,i])=>i>.01));for(let e=0;e<600;e++){for(let i of Pe)i.z+=.025*(i.prior-i.z);Pe.forEach((i,s)=>{let r=0,o=0;for(let[l,h]of t[s])r+=h,o+=h*l.z;if(r<=0)return;let a=o/r-i.z,c=i.i>48?.5:1.3;Math.abs(a)>c&&(i.z+=(a-Math.sign(a)*c)*.06)});for(let i=0;i<Pe.length;i++){let s=Pe[i],r=1-s.z/zs,[o,a]=nu(s.x,s.y,s.z);for(let c=i+1;c<Pe.length;c++){let l=Pe[c],h=1-l.z/zs,[f,u]=nu(l.x,l.y,l.z),d=(.5*(s.rxw+s.ryw)*r+.5*(l.rxw+l.ryw)*h)*.98,g=Math.hypot(o-f,a-u);if(g>=d)continue;let x=Math.sqrt(d*d-g*g),m=s.z-l.z;if(Math.abs(m)>=x)continue;let p=m!==0?Math.sign(m):s.prior>=l.prior?1:-1,E=(x-Math.abs(m))*.25;s.z+=p*E,l.z-=p*E}}for(let i of Pe){let s=n(i);i.z=ks(i.z,-s,s)}}for(let e of Pe)e.rz=Math.max(e.rxw,e.ryw)*(1-e.z/zs)*1.08})();var oe=as.map((n,t)=>n.map(([e,i,s,r],o)=>{let a=ze[t][o],c=s*(1+.4*rc((a-.2)/.55)),l=0,h=0;for(let f of Pe){let u=Bo[f.i],d=42+.7*(u.rx+u.ry)*.5,g=(e-u.x)**2+(i-u.y)**2,x=Math.exp(-g/(2*d*d))*u.rx*u.ry/2e3;l+=x,h+=x*f.z}return l>0&&(c+=(h/l-c)*rc((a-.28)/.45)*l/(l+.35)*t_),[e,i,c,r]}));function e_(n,t,e){let i=1/0,s=n[0][2];for(let r=1;r<n.length;r++){let o=n[r-1],a=n[r],c=a[0]-o[0],l=a[1]-o[1],h=ks(((t-o[0])*c+(e-o[1])*l)/(c*c+l*l),0,1),f=(t-o[0]-c*h)**2+(e-o[1]-l*h)**2;f<i&&(i=f,s=o[2]+(a[2]-o[2])*h)}return s}for(let n=0;n<oe.length;n++){if(cn[n]<0)continue;let t=oe[n],e=e_(oe[cn[n]],t[0][0],t[0][1])-t[0][2];[1,.55,.25].forEach((i,s)=>{t[s]&&(t[s][2]+=e*i)})}function su(n,t=0){let e=n+oc;return zs*(1-(Wd+t)/e)}function ru(n,t){return(n+oc)*(1-t/zs)<Wd}var n_=new Map([[0,[0,0,0,0,0,22,27,28,26,14]]]);function i_(n,t,e,i){let s=oe[n.path][n.index],r=oe[n.path][n.index+1],o=s[2]+(r[2]-s[2])*n.t,a=Math.max(n.radius,Math.abs(n.across)*1.08+.55),c=n.across/a,l=ks(a*zi*1.1,.03,.34),h=Math.sqrt(Math.max(.015,1-c*c))*l,u=(i()<.5?-1:1)*h*(i()<.2?.76+i()*.24:i()*.8),d=1,g=n_.get(n.path);if(g){let A=Math.max(n.radius,g[n.index]+(g[n.index+1]-g[n.index])*n.t,Math.abs(n.across)*1.08+.55),R=n.across/A;d=Math.sqrt(Math.max(.015,1-R*R))*ks(A*zi*1.1,.03,.34)/h}let x=n.distance-(n.radius*1.15+2.5),m=x>0?(qd(t/36+3.1,e/36-7.7)*2-1)*x*zi*1.4:0,p=(r[0]-s[0])*zi,E=-(r[1]-s[1])*zi,w=r[2]-s[2],[b,v,y]=iu(p,E,w),T=n.perpendicular[0]*c,S=n.perpendicular[1]*c,M=u/Math.max(l,.03),_=T*b+S*v+M*y;return T-=b*_,S-=v*_,M-=y*_,{z:o+u*d+m,normal:iu(T,S,M+m*.6)}}var cs=(()=>{let r=new Float32Array(14720).fill(NaN);for(let o=0;o<80;o++)for(let a=0;a<184;a++){let c=-6.4+a*.07,l=-1.8+o*.07,h=0,f=0;for(let u of Pe){let d=(c-u.x)**2+(l-u.y)**2,g=.5+(u.rxw+u.ryw)*.5,x=Math.exp(-d/(2*g*g));h+=x,f+=x*u.z}h>1e-6&&(r[o*184+a]=f/h)}return{x0:-6.4,y0:-1.8,step:.07,nx:184,ny:80,z:r}})();function s_(n,t){let e=(n-cs.x0)/cs.step,i=(t-cs.y0)/cs.step,s=Math.floor(e),r=Math.floor(i);if(s<0||r<0||s>=cs.nx-1||r>=cs.ny-1)return null;let o=e-s,a=i-r,c=cs.z,l=cs.nx,h=(c[r*l+s]*(1-o)+c[r*l+s+1]*o)*(1-a)+(c[(r+1)*l+s]*(1-o)+c[(r+1)*l+s+1]*o)*a;return Number.isFinite(h)?h:null}function r_(n,t,e,i){let{covering:s,nearest:r}=Hd(n,t,1.25),o=r;if(s.length){let x=0,m=s.map(([,E])=>x+=.045+Math.max(0,1-Math.max(E,0))**.8),p=e()*x;o=s[m.findIndex(E=>p<=E)]??s[s.length-1]}let[a,c]=o,l=Pe[a],h=Math.max(c,0),f=e()<.5?-1:1,u;if(h<=1){let x=1+.22*(qd(n*2.6+a*7.1,t*2.6-a*3.3)-.5),m=Math.sqrt(1-h)*l.rz*x;u=f*m*(i?.72+.28*e():e()<.14?.84+.16*e():e()*.9)}else{let x=Math.min(1.6,Math.sqrt(h)-1);u=f*l.rz*(.45+.7*x)*Math.pow(e(),.7);let m=s_(n,t);m!==null&&(u+=(m-l.z)*rc((h-1.4)/2.2))}let d=1-l.z/zs,g=iu((n-l.x)/(l.rxw*l.rxw),(t-l.y)/(l.ryw*l.ryw),u/(l.rz*l.rz)*d);return{z:l.z+u,normal:g,spray:a,q:c}}function Yd(n,t,e,i,s,r,o,a,c,l=!0){let h=zd(n,t,e,i,s,r);return o_(h,n,t,e,i,s,o,a,c,l)}function o_(n,t,e,i,s,r,o,a,c,l=!0){let[h,f]=a===void 0?Xd(t,e):[a,c],u=(i-r)/Math.max(i,s,r,.001)>.3,d;n.growth>=0&&n.branch?d=i_(n.branch,t,e,o):d=r_(h,f,o,u);let g=ks(d.z,-4.4,3.3),x=d.normal,m=!1;if(ru(f,g)&&f+oc<-.5){let p=o()*o()*.05;l&&(g=ks(su(f,p),-4.4,3.4),x=[0,1,0],m=!0)}return{...n,frontZ:n.z,z:g,normal:x,spray:d.spray??-1,sprayQ:d.q??9,onWater:m}}var Zd=Vd;var a_=new URL("./public/fire-tree-mj-04.jpg",document.baseURI).href,ou=Object.freeze({positions:3,colors:3,seeds:3,energies:1,normals:3,florets:2,crownWeights:1,buds:4,growth:3});function $d(n){let t={};for(let[e,i]of Object.entries(ou))t[e]=new Float32Array(n*i);return t}function l_(n,t){let e=$d(t);for(let i of Object.keys(ou))e[i].set(n[i]);return e}function c_(n,t,e,{groundToWater:i=!0}={}){let s=20261023,r=()=>{s|=0,s=s+1831565813|0;let S=Math.imul(s^s>>>15,1|s);return S=S+Math.imul(S^S>>>7,61|S)^S,((S^S>>>14)>>>0)/4294967296},o=38172026,a=()=>{o=o+1831565813|0;let S=Math.imul(o^o>>>15,1|o);return S=S+Math.imul(S^S>>>7,61|S)^S,((S^S>>>14)>>>0)/4294967296},c=52701937,l=()=>{c=c+1831565813|0;let S=Math.imul(c^c>>>15,1|c);return S=S+Math.imul(S^S>>>7,61|S)^S,((S^S>>>14)>>>0)/4294967296},h=32e4,f=0,u=$d(h),d=new Int16Array(h).fill(-1),g=new Uint8Array(h),x=new Float64Array(Oo),m=new Float64Array(Oo),p=12.2,E=p*e/t;for(let S=2;S<e-2;S+=1.65)for(let M=2;M<t-2;M+=1.65){let _=Math.floor(M),A=Math.floor(S),R=(A*t+_)*4,L=n[R]/255,I=n[R+1]/255,D=n[R+2]/255,U=L*.2126+I*.7152+D*.0722,z=Math.max(0,Math.min(1,(L-D)*4.2)),k=.19-z*.035;if(U<k)continue;let J=Math.min(1,(U-k)/.105);if(r()>J*Math.min(1,.42+U*1.05+z*.22))continue;let Y=U>.58?3:U>.34||z>.2?2:1,at=Math.min(1,Math.pow(U,.65)+z*.1),lt=Math.pow(U,1.25)*1.35,bt=Math.max(L,I,D,.001);for(let ft=0;ft<Y;ft++){if(f===h){h=Math.ceil(h*1.4),u=l_(u,h);let B=new Int16Array(h).fill(-1);B.set(d),d=B;let Zt=new Uint8Array(h);Zt.set(g),g=Zt}let _t=((M+(r()-.5)*1.9)/t-.5)*p,Z=(.5-(S+(r()-.5)*1.9)/e)*E,et=Yd(_,A,L,I,D,a,l,_t,Z,i),ct=et.z;r();let yt=f*3,Tt=f*2,Ht=f*4;g[f]=et.onWater?1:0,u.positions[yt]=_t,u.positions[yt+1]=Z,u.positions[yt+2]=ct,u.normals[yt]=et.normal[0],u.normals[yt+1]=et.normal[1],u.normals[yt+2]=et.normal[2];let Me=Fd(_t,Z,ct);if(u.florets[Tt]=Me[0],u.florets[Tt+1]=Me[1],u.crownWeights[f]=et.material===0&&A<510?Gd(_t,Z,et.frontZ):1,et.growth>=0)u.growth[yt]=et.growth,u.growth[yt+1]=1,u.growth[yt+2]=1;else{let B=Pe[et.spray],Zt=Math.max(0,et.sprayQ),Dt=Math.min(1,Math.max(0,(Zt-1.15)/2.6)),Ft=1-Dt*Dt*(3-2*Dt),Et=B.x-_t,ae=B.y-Z;u.buds[Ht]=Et,u.buds[Ht+1]=ae,u.buds[Ht+2]=B.z-ct,u.buds[Ht+3]=Ft,u.growth[yt]=Zd[et.spray],u.growth[yt+1]=0,d[f]=et.spray,x[et.spray]+=Ft,m[et.spray]+=Ft*(Et*Et+ae*ae)}u.colors[yt]=Math.pow(L/bt,2.1)*lt*(1+z*.12),u.colors[yt+1]=Math.pow(I/bt,2.1)*lt*(1-z*.12),u.colors[yt+2]=Math.pow(D/bt,2.1)*lt*(1-z*.18),u.seeds[yt]=r(),u.seeds[yt+1]=r(),u.seeds[yt+2]=r(),u.energies[f]=at,f++}}let w=Array.from(x,(S,M)=>S>1?S*S/m[M]:0),b=w.filter(S=>S>0).sort((S,M)=>S-M),v=b[Math.floor(b.length/2)]||1,y=w.map(S=>S>0?Math.min(1.25,Math.max(.22,(v/S)**.85)):1);for(let S=0;S<f;S++)d[S]>=0&&(u.growth[S*3+2]=y[d[S]]);for(let S=0;S<f;S++)g[S]&&(u.growth[S*3+2]+=10);let T={count:f,sourceWidth:t,sourceHeight:e};for(let[S,M]of Object.entries(ou))T[S]=u[S].slice(0,f*M);return T}async function h_(n){let t=new Image;t.src=n,await t.decode();let e=document.createElement("canvas");e.width=t.naturalWidth,e.height=t.naturalHeight;let i=e.getContext("2d",{willReadFrequently:!0});return i.drawImage(t,0,0),{pixels:i.getImageData(0,0,e.width,e.height).data,w:e.width,h:e.height}}async function jd(n=a_,t={}){let{pixels:e,w:i,h:s}=await h_(n);return c_(e,i,s,t)}var Kw=Object.freeze({release:13.74,orbit:18.73,return:25.73,settle:34.8});function au(n){return n<8.93?"\u51DD\u679D":n<12.6?"\u91D1\u94F6\u540C\u7EFD":n<18.55?"\u4F59\u8F89\u5165\u679D":n<28.15?"\u70B8\u6811\u6210\u5B57":"\u706B\u6811\u94F6\u82B1"}var Kd=`
float choreoEase(float a,float b,float t){float x=clamp((t-a)/(b-a),0.,1.);return x*x*x*(x*(x*6.-15.)+10.);}
vec4 choreograph(vec3 home,vec3 seed,vec3 center,vec3 sourceCenter,float branch,float t){
 return vec4(home,0.);
}
`;var Vs=Object.freeze([8.93,11.33,13.74,16.13,18.55,19.75,21.85,23.05,24.53,25.73,28.13,30.57]),Jd=32.2;var hs=n=>n.toFixed(2),ac=`
float rhythmCueTime(float t){
 if(t<${hs(Vs[0])})return -100.;
${Vs.slice(1).map((n,t)=>` if(t<${hs(n)})return ${hs(Vs[t])};`).join(`
`)}
 return ${hs(Vs[Vs.length-1])};
}
float rhythmImpact(float time,float delay){
 float t=time-delay;
 float cue=rhythmCueTime(t), age=t-cue;
 return step(${hs(Vs[0])},t)*(1.-step(${hs(Jd)},time))*smoothstep(0.,.035,age)*exp(-max(0.,age)/.34);
}
float rhythmDetail(float time,vec3 p){
 float t=time-.06-.12*clamp((p.z+2.)/4.,0.,1.);
 float start=rhythmCueTime(t);
 float beat=floor(max(0.,t-start)/.6);
 float age=t-start-beat*.6;
 // The lighter beats alternate local groups; they do not raise the whole tree.
 float group=exp(-pow((p.x-sin((start+beat)*1.1)*3.8)*.58,2.));
 float accent=mix(.30,.65,mod(beat,2.));
 return step(${hs(Vs[0])},t)*(1.-step(${hs(Jd)},time))*smoothstep(0.,.045,age)*exp(-max(0.,age)/.22)*group*accent;
}
`;var e3=Object.freeze([39*12.2/1456,-303*12.2/1456,0]);var zo=`
${ac}
vec3 swayTree(vec3 p,float liveTime,float motion){
 return p;
}
`;var Qd="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAkYAAANhCAIAAACNYeMBAAAWfmNhQlgAABZ+anVtYgAAAB5qdW1kYzJwYQARABCAAACqADibcQNjMnBhAAAAFlhqdW1iAAAAR2p1bWRjMm1hABEAEIAAAKoAOJtxA3VybjpjMnBhOjQ1OWZiMDQyLTJhNmYtNDhlZC1iYjYyLWYyMjdhYzE2MmU3NwAAAAOTanVtYgAAAClqdW1kYzJhcwARABCAAACqADibcQNjMnBhLmFzc2VydGlvbnMAAAAAuGp1bWIAAABEanVtZGNib3IAEQAQgAAAqgA4m3ETYzJwYS5pbmdyZWRpZW50LnYzAAAAABhjMnNoPhJZzCQJoJ7AkLFwTFndUgAAAGxjYm9yo2lkYzpmb3JtYXRpaW1hZ2UvcG5namluc3RhbmNlSUR4LHhtcDppaWQ6ZWRjMDhhMTYtNjFjMy00ZGY5LWE0ZTgtNTNiZTY5NjFiMDE5bHJlbGF0aW9uc2hpcGhwYXJlbnRPZgAAAeJqdW1iAAAAQWp1bWRjYm9yABEAEIAAAKoAOJtxE2MycGEuYWN0aW9ucy52MgAAAAAYYzJzaHwKMtE5GRKCTFpzfwRueOUAAAGZY2JvcqJnYWN0aW9uc4KiZmFjdGlvbmtjMnBhLm9wZW5lZGpwYXJhbWV0ZXJzoWtpbmdyZWRpZW50c4GiY3VybHgtc2VsZiNqdW1iZj1jMnBhLmFzc2VydGlvbnMvYzJwYS5pbmdyZWRpZW50LnYzZGhhc2hYIL8XL/1RooUFv2R3Q9cxgiG47vIbg/Gg7+JSc83cJvnrpGZhY3Rpb254HWNvbS5hbnRocm9waWMuY2xhdWRlLnByb3ZpZGVkanBhcmFtZXRlcnOheB9jb20uYW50aHJvcGljLm9yaWdpbi1jb25maWRlbmNlZ3Vua25vd25rZGVzY3JpcHRpb254ZkNsYXVkZSBwcm92aWRlZCB0aGlzIGZpbGUgYXQgdGhlIHJlcXVlc3Qgb2YgYSB1c2VyIGFuZCBtYXkgaGF2ZSBjcmVhdGVkIG9yIG1vZGlmaWVkIHRoZSBmaWxlIGNvbnRlbnRzLm1zb2Z0d2FyZUFnZW50oWRuYW1lZkNsYXVkZXJhbGxBY3Rpb25zSW5jbHVkZWT1AAAAyGp1bWIAAABAanVtZGNib3IAEQAQgAAAqgA4m3ETYzJwYS5oYXNoLmRhdGEAAAAAGGMyc2hzi1TviP2nJq/IWvXfx5VpAAAAgGNib3KlY2FsZ2ZzaGEyNTZjcGFkTQAAAAAAAAAAAAAAAABkaGFzaFggpZvctbtjEn25qLZix33FR9pOJJNsw5UbjXbuwsKyVqlkbmFtZW5qdW1iZiBtYW5pZmVzdGpleGNsdXNpb25zgaJlc3RhcnQYIWZsZW5ndGgZFooAAAI+anVtYgAAACdqdW1kYzJjbAARABCAAACqADibcQNjMnBhLmNsYWltLnYyAAAAAg9jYm9ypWNhbGdmc2hhMjU2aXNpZ25hdHVyZXhNc2VsZiNqdW1iZj0vYzJwYS91cm46YzJwYTo0NTlmYjA0Mi0yYTZmLTQ4ZWQtYmI2Mi1mMjI3YWMxNjJlNzcvYzJwYS5zaWduYXR1cmVqaW5zdGFuY2VJRHgseG1wOmlpZDoyMWJmYTY5OC1kN2Q4LTQ2NGItYjlkMi05NDA5NDUxZGFjYmNyY3JlYXRlZF9hc3NlcnRpb25zg6JjdXJseC1zZWxmI2p1bWJmPWMycGEuYXNzZXJ0aW9ucy9jMnBhLmluZ3JlZGllbnQudjNkaGFzaFggvxcv/VGihQW/ZHdD1zGCIbju8huD8aDv4lJzzdwm+euiY3VybHgqc2VsZiNqdW1iZj1jMnBhLmFzc2VydGlvbnMvYzJwYS5hY3Rpb25zLnYyZGhhc2hYIAAizBXTpCqvBxZYN1N8hA174RCVUvl4qFOxhiMFxJ9SomN1cmx4KXNlbGYjanVtYmY9YzJwYS5hc3NlcnRpb25zL2MycGEuaGFzaC5kYXRhZGhhc2hYIIvKxcZyDl/crOfdPoG3N4Xc4BVHSv9ZS1axqzzmW7FUdGNsYWltX2dlbmVyYXRvcl9pbmZvo2RuYW1lb0FudGhyb3BpYyBGaWxlc2d2ZXJzaW9uZTEuMC4wa3NwZWNWZXJzaW9uZTIuNC4wAAAQOGp1bWIAAAAoanVtZGMyY3MAEQAQgAAAqgA4m3EDYzJwYS5zaWduYXR1cmUAAAAQCGNib3LShFkCEqIBJhghWQIKMIICBjCCAY2gAwIBAgIUQOWgCu7COdC+uIP6BkIFPWdVEwAwCgYIKoZIzj0EAwMwSTEXMBUGA1UEChMOQW50aHJvcGljLCBQQkMxLjAsBgNVBAMTJUFudGhyb3BpYyBDb250ZW50IENyZWRlbnRpYWxzIFJvb3QgQ0EwHhcNMjYwODA3MTg0MzU2WhcNMjgwODA2MTk0MzU2WjBEMRcwFQYDVQQKEw5BbnRocm9waWMsIFBCQzEpMCcGA1UEAxMgQW50aHJvcGljIENsYXVkZSBDb250ZW50IFNpZ25pbmcwWTATBgcqhkjOPQIBBggqhkjOPQMBBwNCAASYegpry1AYBRTVNL1CpTlbROnY3dey+UrsF9C3phYrATN3ZHf93Mo8RQN0KOUuOn19P4oWNFWe5n2/She9N7eTo1gwVjAOBgNVHQ8BAf8EBAMCB4AwFQYDVR0lBA4wDAYKKwYBBAGD6F4CATAMBgNVHRMBAf8EAjAAMB8GA1UdIwQYMBaAFM5R4gSBTmRbI/jjxM+aPpzB11zCMAoGCCqGSM49BAMDA2cAMGQCMDFzHRSeAXrSy1WOzkbhPZ6Km2wGTmZ/2gK18k8BQGXyqz88Rdrz6CTX9flAnYNVxgIwcF9c3fVhqmJKpi+UhasNUMko69cyX6STPfta3Q8EjyzDjzoyrol46FP6VFHhvUcJoWNwYWRZDZ4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA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";var lc=[[[-.5586,-.5535,-.5483,-.5431,-.5377,-.5321,-.5264,-.5204,-.5143,-.5079,-.5011,-.4938,-.4859,-.477,-.4671,-.4554,-.4419,-.4263,-.409,-.3916,-.3743,-.3574,-.3407,-.324,-.3072,-.2901,-.2729,-.2554,-.2379,-.2207,-.2038,-.1872,-.1709,-.1547,-.1385,-.1221,-.1054,-.0883,-.0709,-.0534,-.0361,-.0192,-.0028,.013,.0284,.0434,.0579,.0722,.0863,.1002,.1138,.1272,.1402,.1527,.1645,.1752,.1845,.1917,.1959,.1964,.1927,.1856,.1762,.1648,.1521,.138,.123,.1069,.0901,.0728,.0553,.0378,.0206,.0038,-.0126,-.0284,-.0437,-.0583,-.0723,-.0856,-.0985,-.1108,-.1227,-.1344,-.146,-.1589,-.1732,-.1876,-.2019,-.2163,-.2306,-.2373,-.2274,-.2177,-.2081,-.1988,-.1899,-.1815,-.1737,-.1666,-.1604,-.155,-.1503,-.1464,-.1432,-.1407,-.1388,-.1376,-.1369,-.1369,-.1374,-.1385,-.1399,-.1418,-.1441,-.1466,-.1495,-.1524,-.1556,-.1588,-.162,-.1652,-.1684,-.1714,-.1742,-.1768,-.1792,-.1815,-.1837,-.1858,-.1878,-.1899,-.192,-.1942,-.1965,-.199,-.2016,-.2045,-.2077,-.211,-.2146,-.2182,-.222,-.2257,-.2294,-.2331,-.2366,-.24,-.2433,-.2463,-.249,-.2514,-.253,-.2537,-.2527,-.2497,-.2441,-.2351,-.2238,-.2113,-.1984,-.1857,-.1741,-.1643,-.1575,-.1531,-.1513,-.1515,-.1537,-.1577,-.1635,-.1709,-.1796,-.1889,-.1986,-.2082,-.2174,-.2258,-.2331,-.2389,-.2433,-.2461,-.2471,-.2454,-.2407,-.2319,-.2194,-.2047,-.1888,-.1723,-.1554,-.1384,-.1213,-.1042,-.087,-.0699,-.0528,-.0359,-.0192,-.0028,.0127,.0261,.0335,.0312,.0234,.0131,.0015,-.011,-.0241,-.0377,-.0516,-.0659,-.0806,-.0956,-.1109,-.1266,-.1425,-.1587,-.1752,-.1919,-.2087,-.2256,-.2427,-.2598,-.277,-.2942,-.3114,-.3286,-.3459,-.3632,-.3805,-.3978,-.4152,-.4326,-.45,-.4674,-.4848,-.5023,-.5198,-.5373,-.5548,-.5723,-.5899,-.6074,-.6249,-.6424,-.66,-.6775,-.695,-.7125,-.7301,-.7476,-.7651,-.7826,-.8001,-.8176],[2.5341,2.5173,2.5006,2.4839,2.4672,2.4505,2.434,2.4175,2.4011,2.3847,2.3686,2.3526,2.337,2.3219,2.3074,2.2943,2.2832,2.2755,2.2725,2.2734,2.2766,2.2812,2.2864,2.2918,2.2968,2.3009,2.3039,2.3047,2.3035,2.3002,2.2955,2.2897,2.2833,2.2766,2.27,2.2638,2.2584,2.2544,2.2526,2.2531,2.2558,2.2606,2.2668,2.2743,2.2827,2.2918,2.3016,2.3117,2.3222,2.3329,2.3439,2.3552,2.367,2.3793,2.3923,2.4062,2.421,2.437,2.4539,2.4714,2.4885,2.5045,2.5193,2.5326,2.5446,2.5551,2.5641,2.5711,2.576,2.5787,2.5791,2.5776,2.5744,2.5695,2.5632,2.5557,2.5471,2.5374,2.5268,2.5154,2.5035,2.491,2.4782,2.4652,2.4519,2.5034,2.6194,2.7355,2.8515,2.9675,3.0835,3.1585,3.144,3.1294,3.1147,3.0999,3.0848,3.0694,3.0537,3.0376,3.0212,3.0046,2.9877,2.9706,2.9533,2.936,2.9186,2.9011,2.8835,2.866,2.8485,2.831,2.8135,2.7961,2.7787,2.7614,2.744,2.7268,2.7095,2.6923,2.675,2.6578,2.6406,2.6233,2.606,2.5886,2.5713,2.5539,2.5365,2.5191,2.5017,2.4843,2.4668,2.4494,2.4321,2.4147,2.3974,2.3801,2.3628,2.3456,2.3285,2.3113,2.2942,2.277,2.2599,2.2428,2.2256,2.2084,2.1912,2.1739,2.1566,2.1392,2.1217,2.1042,2.0867,2.0695,2.0529,2.0379,2.0245,2.0122,2.0004,1.9883,1.9751,1.9606,1.9445,1.9275,1.9101,1.8926,1.8752,1.8581,1.8416,1.8257,1.8105,1.7957,1.781,1.7664,1.7515,1.7361,1.7201,1.7036,1.6866,1.6693,1.6518,1.6344,1.6176,1.6025,1.5902,1.5807,1.5734,1.5675,1.5626,1.5584,1.5546,1.551,1.5473,1.5435,1.5394,1.5349,1.5296,1.5233,1.5152,1.5041,1.4885,1.4713,1.4557,1.4415,1.4284,1.4161,1.4044,1.3933,1.3827,1.3726,1.363,1.3539,1.3454,1.3375,1.3302,1.3236,1.3175,1.3121,1.3071,1.3027,1.2986,1.2948,1.2912,1.2878,1.2844,1.2812,1.2782,1.2752,1.2725,1.2698,1.2674,1.2651,1.2629,1.261,1.2592,1.2577,1.2563,1.2552,1.2543,1.2536,1.2532,1.253,1.253,1.2531,1.2535,1.254,1.2546,1.2554,1.2563,1.2572,1.2582,1.2593,1.2604,1.2615]],[[-.3366,-.3144,-.2921,-.2699,-.2476,-.2253,-.2029,-.1806,-.1581,-.1357,-.1132,-.0907,-.0681,-.0455,-.0229,-3e-4,.0223,.0449,.0065,-.0419,-.0903,-.12,-.1141,-.1082,-.1023,-.0966,-.0909,-.0854,-.0801,-.075,-.0701,-.0655,-.0611,-.0569,-.053,-.0493,-.0458,-.0424,-.0393,-.0363,-.0335,-.0309,-.0283,-.0259,-.0236,-.0214,-.0193,-.0173,-.0154,-.0135,-.0117,-.01,-.0083,-.0066,-.0049,-.0033,-.0016,0,.0017,.0034,.0051,.0069,.0087,.0105,.0124,.0142,.0161,.0181,.02,.022,.0239,.0259,.0279,.0299,.0319,.0265,.0038,-.0189,-.0416,-.06,-.0716,-.0831,-.0947,-.1062,-.1177,-.1291,-.1404,-.1516,-.1628,-.1738,-.1847,-.1955,-.2062,-.2168,-.2274,-.2378,-.2483,-.2587,-.269,-.2794,-.2398,-.1434,-.047,.0352,.0464,.0579,.0697,.0819,.0948,.1084,.1229,.138,.1536,.1696,.1858,.2064,.2342,.262,.2861,.2931,.3,.3066,.3129,.3187,.324,.3285,.3322,.3351,.3369,.3375,.3368,.3347,.3309,.3252,.318,.3097,.3005,.2911,.2816,.2725,.264,.2565,.25,.2448,.241,.239,.2389,.2409,.2452,.2521,.2619,.2749,.2909,.3097,.3303,.3522,.3746,.3972,.4198,.4421,.4372,.4165,.3951,.3735,.3518,.33,.3081,.2864,.265,.2443,.2249,.2078,.1935,.1819,.1727,.1664,.1638,.167,.1784,.1962,.217,.2391,.2617,.2845,.3074,.3303,.3533,.3762,.399,.4216,.4437,.4648,.4835,.4972,.5039,.5056,.5051,.5045,.505,.5084,.5168,.5308,.5486,.5688,.5905,.6131,.6361,.6586,.6799,.6995,.7172,.7327,.7461,.7573,.7663,.773,.7775,.7797,.7799,.7782,.7748,.7696,.7629,.7546,.7451,.7343,.7223,.7093,.6953,.6805,.6648,.6484,.6313,.6136,.5953,.5765,.5571,.5374,.5173,.4968,.476,.4549,.4335,.412,.3902,.3683,.3462,.324,.3018,.2794,.257,.2345,.212,.1894,.1669,.1443],[.6696,.6752,.6808,.6864,.6919,.6973,.7025,.7077,.7126,.7173,.7219,.7263,.7305,.7347,.7387,.7427,.7466,.7504,.8759,1.021,1.1662,1.2539,1.2317,1.2095,1.1873,1.1651,1.1429,1.1206,1.0983,1.0759,1.0535,1.031,1.0085,.9859,.9633,.9406,.9179,.8952,.8725,.8497,.8269,.8041,.7813,.7585,.7357,.7128,.69,.6671,.6442,.6213,.5985,.5756,.5527,.5298,.5069,.484,.4611,.4382,.4153,.3924,.3695,.3467,.3238,.3009,.278,.2551,.2323,.2094,.1865,.1637,.1408,.1179,.0951,.0722,.0493,.0786,.2299,.3812,.5325,.6175,.5977,.5779,.558,.5382,.5183,.4984,.4784,.4584,.4383,.4182,.398,.3778,.3574,.3371,.3167,.2963,.2758,.2554,.2349,.2144,.259,.3778,.4966,.599,.619,.6388,.6586,.678,.697,.7154,.7333,.7505,.7673,.7838,.8,.8662,1.0167,1.1672,1.2872,1.2654,1.2435,1.2215,1.1994,1.1772,1.1549,1.1324,1.1097,1.087,1.0641,1.0412,1.0182,.9954,.9727,.9505,.9287,.9073,.8863,.8653,.8444,.8234,.802,.7804,.7584,.736,.7134,.6905,.6676,.6447,.6222,.6003,.5796,.5607,.5444,.5312,.5213,.5143,.5093,.5052,.5015,.4961,.481,.4711,.4627,.455,.4476,.4405,.4334,.426,.4178,.4079,.3956,.3803,.3624,.3427,.3217,.2996,.2769,.2543,.2346,.2204,.2108,.2044,.2003,.1978,.1965,.1961,.1964,.1977,.2001,.2041,.2102,.2192,.2325,.2507,.2725,.2954,.3183,.3413,.3642,.3869,.4082,.4263,.4408,.4516,.4589,.4627,.4627,.4585,.4502,.4384,.4237,.4068,.3882,.3682,.3471,.3252,.3027,.2799,.2569,.234,.2114,.189,.1671,.1456,.1248,.1045,.085,.0661,.0478,.0303,.0136,-.0025,-.0178,-.0324,-.0462,-.0594,-.0718,-.0835,-.0945,-.1048,-.1145,-.1236,-.132,-.1399,-.1472,-.154,-.1603,-.1662,-.1717,-.1768,-.1817,-.1863,-.1908,-.1951,-.1993,-.2035]],[[-.4254,-.4053,-.3856,-.367,-.3504,-.3373,-.3291,-.3255,-.3254,-.328,-.3326,-.3388,-.3464,-.3553,-.3653,-.3762,-.388,-.4004,-.4132,-.4263,-.4396,-.4529,-.4663,-.4798,-.4933,-.4775,-.4533,-.4292,-.405,-.3809,-.3568,-.3327,-.3087,-.2848,-.261,-.2373,-.2136,-.2827,-.4215,-.5602,-.6989,-.728,-.7051,-.682,-.6587,-.6351,-.6113,-.5872,-.5631,-.5391,-.5154,-.4921,-.469,-.4462,-.4234,-.4005,-.3773,-.3539,-.3302,-.3063,-.2823,-.2583,-.2342,-.2101,-.205,-.3503,-.4957,-.641,-.6505,-.6266,-.6028,-.5789,-.5551,-.5312,-.5074,-.4835,-.4596,-.4358,-.4119,-.388,-.3641,-.3402,-.3567,-.3803,-.3955,-.3945,-.3935,-.3926,-.3917,-.3908,-.3901,-.3894,-.3888,-.3884,-.3881,-.388,-.3882,-.3889,-.39,-.3918,-.3942,-.3975,-.4017,-.4066,-.4121,-.4181,-.4245,-.4311,-.4377,-.4444,-.4509,-.4573,-.463,-.4675,-.4696,-.4676,-.4595,-.4441,-.4241,-.4017,-.378,-.3539,-.331,-.3107,-.2935,-.2789,-.2662,-.2546,-.2437,-.2331,-.2228,-.2127,-.2028,-.1931,-.1836,-.1741,-.1663,-.1585,-.1508,-.1405,-.1169,-.0934,-.07,-.0468,-.0237,-8e-4,.0219,.0443,.0667,.0891,.1119,.1353,.1594,.1815,.1945,.2002,.2016,.2002,.1966,.1907,.1831,.1742,.1648,.1559,.1486,.1445,.1453,.15,.1571,.1655,.1743,.1829,.1905,.1965,.2001,.201,.199,.1938,.1852,.1733,.1584,.1411,.1218,.1007,.0781,.0543,.0303,.0074,-.0139,-.0342,-.0702,-.0698,-.0693,-.0685,-.0674,-.066,-.0641,-.0617,-.0589,-.0556,-.0518,-.0473,-.0417,-.0347,-.0252,-.012,.0074,.0312,.0547,.077,.0985,.1197,.1406,.1616,.1829,.2045,.2268,.2502,.2737,.287,.2896,.2876,.2828,.2756,.2662,.2543,.2399,.2232,.2049,.1852,.1647,.1437,.1226,.1016,.0809,.0605,.0405,.0206,.001,-.0185,-.038,-.0573,-.0767,-.0961,-.1156,-.1353,-.155,-.1749,-.1949,-.215,-.2352,-.2554,-.2757,-.296,-.3163,-.3366],[-.0333,-.0466,-.0606,-.076,-.0935,-.1137,-.1363,-.1602,-.1843,-.2083,-.232,-.2553,-.2783,-.3007,-.3227,-.3442,-.3653,-.386,-.4065,-.4268,-.447,-.4671,-.4872,-.5073,-.5273,-.4997,-.5007,-.5015,-.5018,-.5017,-.5008,-.4991,-.4963,-.4928,-.4887,-.4841,-.4793,-.5239,-.6056,-.6874,-.7691,-.8005,-.808,-.815,-.8213,-.8266,-.8305,-.8327,-.8326,-.8301,-.8254,-.8192,-.8119,-.8041,-.7962,-.7885,-.7816,-.7758,-.7711,-.7675,-.7646,-.7625,-.7608,-.7594,-.7662,-.8355,-.9048,-.9741,-.9846,-.9808,-.9769,-.973,-.9692,-.9654,-.9617,-.958,-.9543,-.9507,-.9471,-.9436,-.94,-.9365,-.8004,-.6411,-.5447,-.5688,-.5929,-.6171,-.6412,-.6653,-.6895,-.7136,-.7378,-.7619,-.7861,-.8102,-.8344,-.8585,-.8826,-.9067,-.9307,-.9547,-.9785,-1.0021,-1.0256,-1.049,-1.0723,-1.0955,-1.1187,-1.142,-1.1652,-1.1885,-1.212,-1.2357,-1.2597,-1.2837,-1.3064,-1.3248,-1.3382,-1.347,-1.3514,-1.3505,-1.3434,-1.3304,-1.3135,-1.2942,-1.2737,-1.2525,-1.231,-1.2093,-1.1874,-1.1655,-1.1434,-1.1213,-1.0992,-1.077,-.9188,-.758,-.5972,-.4616,-.4562,-.4506,-.4446,-.4382,-.4311,-.4234,-.4151,-.4062,-.397,-.3881,-.3801,-.3742,-.3727,-.3814,-.4014,-.4248,-.4489,-.4729,-.4968,-.5202,-.5431,-.5656,-.5878,-.6103,-.6333,-.6571,-.6812,-.7048,-.7279,-.7506,-.773,-.7956,-.8185,-.8419,-.8658,-.8899,-.9139,-.9375,-.96,-.981,-1,-1.0169,-1.0313,-1.043,-1.0513,-1.0553,-1.0537,-1.0462,-1.0349,-1.0218,-.9477,-.9718,-.996,-1.0201,-1.0442,-1.0683,-1.0924,-1.1165,-1.1404,-1.1644,-1.1882,-1.2119,-1.2354,-1.2585,-1.2807,-1.3008,-1.3147,-1.3171,-1.3116,-1.3024,-1.2915,-1.2798,-1.2678,-1.2559,-1.2444,-1.2337,-1.2245,-1.2187,-1.222,-1.2414,-1.2654,-1.2894,-1.3131,-1.3361,-1.3583,-1.3793,-1.3987,-1.4162,-1.4318,-1.4458,-1.4586,-1.4705,-1.4822,-1.4942,-1.5067,-1.5196,-1.5331,-1.5468,-1.5608,-1.5751,-1.5894,-1.6039,-1.6183,-1.6327,-1.6469,-1.661,-1.6748,-1.6885,-1.7021,-1.7155,-1.7288,-1.742,-1.7551,-1.7682,-1.7812,-1.7942]],[[-.1739,-.1583,-.1426,-.1266,-.1102,-.0933,-.076,-.0583,-.0405,-.0228,-.0054,.0115,.0277,.0428,.0565,.0673,.074,.0759,.0739,.0695,.0636,.0567,.0494,.0418,.0343,.0272,.0204,.0142,.0083,.0028,-.0024,-.0072,-.0117,-.016,-.0201,-.0241,-.0843,-.1889,-.2935,-.2835,-.2664,-.2492,-.232,-.2147,-.1974,-.1801,-.1626,-.1451,-.1276,-.11,-.0923,-.0746,-.0568,-.0391,-.0213,-.0036,.0142,.0319,.0495,.0671,.0846,.102,.1192,.1364,.1534,.1704,.1873,.2041,.2209,.2377,.2146,.1835,.1524,.1313,.1138,.0964,.0791,.062,.0451,.0287,.0127,-.0028,-.0177,-.032,-.0458,-.0589,-.0715,-.0835,-.095,-.1059,-.1166,-.1269,-.1371,-.117,-.0227,.0716,.166,.2603,.286,.3038,.3216,.3394,.3571,.3745,.3913,.4075,.4229,.4376,.4515,.4645,.4763,.4863,.4927,.4905,.4777,.4614,.4441,.4265,.4087,.3909,.373,.3553,.3377,.3202,.3031,.2861,.2694,.2372,.1189,6e-4,-.0416,-.043,-.0444,-.046,-.0476,-.0492,-.0511,-.0531,-.0553,-.0577,-.0603,-.0631,-.0663,-.0698,-.0735,-.0776,-.0819,-.0865,-.0912,-.096,-.1009,-.1058,-.1107,-.1155,-.1203,-.1249,-.1293,-.1336,-.1375,-.141,-.144,-.1464,-.1482,-.1491,-.1491,-.148,-.1459,-.1425,-.1378,-.1321,-.1252,-.1173,-.1083,-.0983,-.0874,-.0755,-.0628,-.0492,-.0347,-.0195,-.0036,.0128,.0297,.0469,.0644,.082,.0998,.1177,.1355,.1532,.1707,.188,.2051,.2217,.238,.2538,.2691,.2838,.2979,.3112,.3239,.3357,.3467,.3569,.3661,.3745,.3819,.3883,.3935,.3978,.4008,.4027,.4032,.4024,.4004,.3972,.393,.3878,.3819,.3752,.3679,.36,.3516,.3429,.3337,.3243,.3148,.3052,.2956,.2861,.2769,.2681,.2597,.2518,.2446,.238,.232,.2266,.2216,.2173,.2133,.2099,.2069,.2043,.2022,.2004,.1989,.1978,.197,.1964,.196,.1958,.1957,.1958,.1959,.1961],[-1.5205,-1.5118,-1.5033,-1.4955,-1.4885,-1.4827,-1.4785,-1.4763,-1.4762,-1.4782,-1.482,-1.4878,-1.4951,-1.5046,-1.516,-1.5301,-1.5465,-1.5642,-1.5819,-1.5992,-1.616,-1.6324,-1.6487,-1.6648,-1.681,-1.6974,-1.7139,-1.7306,-1.7474,-1.7644,-1.7815,-1.7986,-1.8159,-1.8332,-1.8506,-1.8679,-1.9072,-1.9637,-2.0202,-2.019,-2.0141,-2.0093,-2.0046,-2.0001,-1.9958,-1.9917,-1.9879,-1.9844,-1.9813,-1.9785,-1.9762,-1.9741,-1.9723,-1.9706,-1.9689,-1.9672,-1.9653,-1.9631,-1.9606,-1.9576,-1.9541,-1.95,-1.9455,-1.9406,-1.9354,-1.9299,-1.9242,-1.9183,-1.9123,-1.9062,-2.0009,-2.1156,-2.2304,-2.2628,-2.2663,-2.2701,-2.2744,-2.2794,-2.2852,-2.292,-2.3,-2.3088,-2.3186,-2.3292,-2.3406,-2.3526,-2.3653,-2.3785,-2.3921,-2.4062,-2.4205,-2.435,-2.4497,-2.4391,-2.3667,-2.2943,-2.2219,-2.1495,-2.1405,-2.1393,-2.1388,-2.1396,-2.1418,-2.1458,-2.1516,-2.159,-2.168,-2.1781,-2.1892,-2.2014,-2.2148,-2.2295,-2.2461,-2.2634,-2.2756,-2.2827,-2.287,-2.2895,-2.2909,-2.2911,-2.2904,-2.2887,-2.286,-2.2822,-2.2775,-2.2719,-2.2658,-2.2622,-2.274,-2.2858,-2.3015,-2.3193,-2.3371,-2.3548,-2.3726,-2.3904,-2.4081,-2.4258,-2.4435,-2.4612,-2.4788,-2.4964,-2.514,-2.5315,-2.5489,-2.5663,-2.5836,-2.6008,-2.618,-2.6352,-2.6524,-2.6695,-2.6867,-2.7038,-2.721,-2.7382,-2.7555,-2.7728,-2.7903,-2.8077,-2.8253,-2.843,-2.8607,-2.8785,-2.8964,-2.9142,-2.9319,-2.9494,-2.9666,-2.9835,-2.9999,-3.0159,-3.0313,-3.0461,-3.0602,-3.0735,-3.086,-3.0974,-3.1079,-3.1171,-3.1253,-3.1322,-3.1381,-3.1427,-3.1462,-3.1486,-3.1498,-3.15,-3.149,-3.147,-3.1438,-3.1396,-3.1343,-3.128,-3.1207,-3.1124,-3.1032,-3.0931,-3.0822,-3.0704,-3.0578,-3.0445,-3.0304,-3.0158,-3.0005,-2.9848,-2.9686,-2.9519,-2.9349,-2.9176,-2.9,-2.8823,-2.8644,-2.8466,-2.8289,-2.8114,-2.794,-2.777,-2.7602,-2.7436,-2.7274,-2.7113,-2.6956,-2.6801,-2.6648,-2.6496,-2.6345,-2.6195,-2.6045,-2.5893,-2.5741,-2.5586,-2.5429,-2.5268,-2.5105,-2.494,-2.4772,-2.4602,-2.443,-2.4258,-2.4084,-2.3909,-2.3733,-2.3556,-2.3379,-2.3202,-2.3024,-2.2846,-2.2668,-2.249,-2.2311,-2.2133,-2.1955,-2.1776,-2.1598,-2.142]]];var Fe=Object.freeze({start:18.55,write:[19.75,21.85,23.05,24.53,25.73],height:6.4,lift:3.3,gold:64e3,silver:64e3,aura:[1e4,6e3,1e4,11e3],blossoms:12,sprouts:18}),Fr=lc[0][0].length;function ep(){let n=new Float32Array(Fr*4*4);lc.forEach(([e,i],s)=>e.forEach((r,o)=>{let a=(s*Fr+o)*4;n[a]=r,n[a+1]=i[o]}));let t=new Cs(n,Fr,4,yn,Dn);return t.minFilter=t.magFilter=sn,t.needsUpdate=!0,t}function f_(n,t,e){let[i,s]=lc[n],r=1/0,o=0;for(let a=0;a<Fr;a++){let c=(i[a]-t)**2+(s[a]-e)**2;c<r&&(r=c,o=a)}return o/(Fr-1)}function ko(n){let t=Math.sin(n*127.1+311.7)*43758.5453123;return t-Math.floor(t)}async function d_(){let n=new Image;n.src=Qd,await n.decode();let t=document.createElement("canvas");t.width=n.naturalWidth,t.height=n.naturalHeight;let e=t.getContext("2d",{willReadFrequently:!0});e.drawImage(n,0,0);let i=e.getImageData(0,0,t.width,t.height).data,s=t.width/2,r=t.height,o=new Uint8ClampedArray(s*r*4),a=new Uint8Array(s*r);for(let c=0;c<r;c++)for(let l=0;l<s;l++){let h=(c*t.width+l)*4,f=(c*t.width+l+s)*4,u=(c*s+l)*4;o[u]=i[h],o[u+1]=i[h+1],o[u+2]=i[h+2],o[u+3]=i[f],a[c*s+l]=i[f+1]}return{w:s,h:r,data:o,aura:a}}function tp({w:n,h:t,data:e,aura:i},s,r,o,a=!1){let c=[],l=[],h=0;for(let u=0;u<t;u++)for(let d=0;d<n;d++)for(let g of s){let x=e[(u*n+d)*4+g],m=i[u*n+d];m>200||(a&&(x=x>2?m:0),!(x<3)&&(h+=x,c.push(h),l.push(d,u,g)))}let f=new Float32Array(r*3);for(let u=0;u<r;u++){let d=ko(o+u*1.618)*h,g=0,x=c.length-1;for(;g<x;){let E=g+x>>1;c[E]<d?g=E+1:x=E}let m=l[g*3]+ko(o+u*2.71),p=l[g*3+1]+ko(o+u*3.14);f[u*3]=(m-n/2)/t*Fe.height,f[u*3+1]=(t/2-p)/t*Fe.height,f[u*3+2]=l[g*3+2]}return f}function p_(n,t,e=48){let i=n.length/2,s=(c,l)=>{let h=Array.from({length:l},(u,d)=>d).sort((u,d)=>c(d,1)-c(u,1)),f=[];for(let u=0;u<e;u++){let d=h.slice(Math.floor(u*l/e),Math.floor((u+1)*l/e));d.sort((g,x)=>c(g,0)-c(x,0)),f.push(...d)}return f},r=s((c,l)=>n[c*2+l],i),o=s((c,l)=>t[c*3+l],i),a=new Int32Array(i);for(let c=0;c<i;c++)a[r[c]]=o[c];return a}async function np(n,t,e){let i=await d_(),s=new Float32Array(n.count*4);for(let x=0;x<n.count;x++)s[x*4+3]=-1;let{growth:r,positions:o,energies:a}=n,c=new Uint8Array(n.count),l=(x,m,p)=>{let E=[];for(let b=0;b<t;b++)!c[b]&&x(b)&&a[b]>.12&&E.push(b);E.sort((b,v)=>ko(b*.37+p)-ko(v*.37+p));let w=E.slice(0,Math.min(m,E.length));return w.forEach(b=>c[b]=1),w},h=x=>r[x*3+1]>.5,f=x=>r[x*3+1]<=.5,u=()=>!0,d=[{chosen:l(h,Fe.gold,11),channels:[0,1],seed:101,kind:0},{chosen:l(f,Fe.silver,23),channels:[2,3],seed:202,kind:0}];Fe.aura.forEach((x,m)=>d.push({chosen:l(m<2?h:u,x,31+m),channels:[m],seed:303+m*101,kind:1+m,aura:!0}));let g=[0,0,0];for(let{chosen:x,channels:m,seed:p,kind:E,aura:w}of d){let b=x.length;if(!b)continue;let v=tp(i,m,b,p,w);if(E===2||E===4){let S=E===2?Fe.sprouts:Fe.blossoms,M=tp(i,m,S,p+7,!0);v=new Float32Array(b*3);for(let _=0;_<b;_++)v.set(M.subarray(_%S*3,_%S*3+3),_*3)}let y=new Float32Array(b*2);x.forEach((S,M)=>{e(o,S,g),y[M*2]=g[0],y[M*2+1]=g[1]});let T=p_(y,v);x.forEach((S,M)=>{let _=T[M],A=v[_*3+2],R=v[_*3],L=v[_*3+1],I=Math.min(.999,f_(A,R,L));s.set([R,L,100*E+10*A+9.99*I,1],S*4)})}return s}var ip=`
attribute vec4 aLetter;
uniform vec3 uLetterCenter;
uniform vec3 uBurstCenter;
uniform sampler2D uStrokes;
const float LETTER_START=${Fe.start.toFixed(3)};
const float WRITE_START=${Fe.write[0].toFixed(3)};
const float WRITE_END=${Fe.write[4].toFixed(3)};
float charStart(float c){return c<.5?${Fe.write[0].toFixed(3)}:c<1.5?${Fe.write[1].toFixed(3)}:c<2.5?${Fe.write[2].toFixed(3)}:${Fe.write[3].toFixed(3)};}
float charSlot(float c){return c<.5?${(Fe.write[1]-Fe.write[0]).toFixed(3)}:c<1.5?${(Fe.write[2]-Fe.write[1]).toFixed(3)}:c<2.5?${(Fe.write[3]-Fe.write[2]).toFixed(3)}:${(Fe.write[4]-Fe.write[3]).toFixed(3)};}
const float STROKE_N=${Fr}.;
vec2 strokeAt(float c,float s){
 float f=clamp(s,0.,1.)*(STROKE_N-1.),i=floor(f);
 vec2 a=texture2D(uStrokes,vec2((i+.5)/STROKE_N,(c+.5)/4.)).xy;
 vec2 b=texture2D(uStrokes,vec2((min(i+1.,STROKE_N-1.)+.5)/STROKE_N,(c+.5)/4.)).xy;
 return mix(a,b,f-i);
}
float letterEase(float x){x=clamp(x,0.,1.);return x*x*x*(x*(x*6.-15.)+10.);}
float letterHash(vec2 q){return fract(sin(dot(q,vec2(127.1,311.7)))*43758.5453);}
// Column axes in content space: the rows of the model-view rotation.
vec3 letterRight(){return normalize(vec3(modelViewMatrix[0][0],modelViewMatrix[1][0],modelViewMatrix[2][0]));}
vec3 letterUp(){return normalize(vec3(modelViewMatrix[0][1],modelViewMatrix[1][1],modelViewMatrix[2][1]));}
vec3 letterToward(){return normalize(vec3(modelViewMatrix[0][2],modelViewMatrix[1][2],modelViewMatrix[2][2]));}
`,sp=`
 float letterK=0.,letterGone=0.,letterBurst=0.,auraEnv=1.,auraPhase=0.,brushHead=0.,silk=0.,gatherFlight=0.,callLight=1.;
 float letterKind=floor(aLetter.z/100.),letterChar=floor(mod(aLetter.z,100.)/10.),letterPlace=mod(aLetter.z,10.)/9.99;
 // The brush reaches this grain's place on its character's path here:
 float letterArrive=charStart(letterChar)+charSlot(letterChar)*.95*letterPlace;
 if(uStoryTime>LETTER_START){
  float tb=uStoryTime-LETTER_START;
  letterBurst=exp(-tb/.2);
  vec3 dir=normalize(p-uBurstCenter+(aSeed-.5)*.7);
  float reach=(1.6+2.6*aSeed.x)*(.8+.4*aSeed.y);
  float drift=.18*tb;
  vec3 R=letterRight(),U=letterUp(),F=letterToward();
  if(aLetter.w>-.5){
   // Burst, then silk: the blast decays into the flow field.
   // v3e: no silk threads. The burst keeps opening slowly and the sparks
   // float in place (a little sway) until the brush tip calls them in.
   // Keep the writing pool near its source boughs during the hovering beat.
   // The unselected falling embers keep their paths.
   vec3 E=p+dir*(reach*.72*(1.-exp(-tb/.22))+.065*tb);
   E+=(R*sin(tb*.9+aSeed.z*20.)+U*cos(tb*.7+aSeed.x*17.))*.12*smoothstep(.3,1.5,tb);
   // Waiting sparks sink slowly, like the last stars of a firework.
   float sink=max(0.,tb-.8);
   E-=U*(.22+.12*aSeed.y)*sink*(1.-.04*sink);
   vec3 silkPos=E;
   silk=smoothstep(.3,1.2,tb);
   vec3 target=uLetterCenter+R*aLetter.x+U*aLetter.y+F*(aSeed.z-.5)*.22;
   // The brush tip: grains join it during the last moments before it passes
   // their place, so a bright head runs along the stroke with a tail of
   // settled grains behind it.
   float lead=1.05+.30*aSeed.y;
   // Allow a short anticipatory flight without starting the next character's
   // whole plume while the previous character is still being written.
   float gatherStart=max(charStart(letterChar)-.55,letterArrive-lead);
   float tipPlace=clamp((uStoryTime-charStart(letterChar))/(charSlot(letterChar)*.95),0.,1.);
   vec2 own=strokeAt(letterChar,letterPlace),tip=strokeAt(letterChar,min(tipPlace,letterPlace));
   float tipSpread=smoothstep(-.35,0.,uStoryTime-letterArrive);
   vec2 tipAt=tip+(aLetter.xy-own)*tipSpread;
   vec3 atTip=uLetterCenter+R*tipAt.x+U*tipAt.y+F*(aSeed.z-.5)*.22;
   float travel=clamp((uStoryTime-gatherStart)/max(.01,letterArrive-gatherStart),0.,1.);
   float a=travel*travel*(3.-2.*travel);
   callLight=smoothstep(charStart(letterChar)-.18,charStart(letterChar)+.08,uStoryTime);
   gatherFlight=smoothstep(.03,.35,a)*(1.-smoothstep(.82,1.,a))*callLight;
   // Swing in from the side the grain is streaming on, not straight across.
   vec3 swing=(R*(aSeed.x-.5)+U*(aSeed.y-.3))*.35*sin(3.1416*a);
   p=uStoryTime<letterArrive?mix(silkPos,atTip,a)+swing*(1.-a):target;
   letterK=1.;
   // v3h: ease the last tenth in over .25 s so each grain no longer steps
   // from its flying to its written brightness in a single frame.
   letterGone=uStoryTime<letterArrive?a*.9:.9+.1*smoothstep(0.,.25,uStoryTime-letterArrive);
   brushHead=smoothstep(letterArrive-.25,letterArrive,uStoryTime)*exp(-max(0.,uStoryTime-letterArrive)/.22);
   if(uStoryTime>=letterArrive){
    if(letterKind>.5){
     // Image loop, faded in after the character is written.
     // v3e: images start only once all four characters are written.
     float on=smoothstep(WRITE_END+.15,WRITE_END+1.5,uStoryTime);
     float c=letterKind-1.;
     vec2 cell=floor(aLetter.xy*2.5);
     float period=c>2.5?3.4+1.2*letterHash(aLetter.xy):2.2+1.6*aSeed.y;
     float seedPhase=c>2.5?letterHash(aLetter.xy+3.1):aSeed.x;
     float ph=fract((uStoryTime-letterArrive)/period+seedPhase);
     vec3 off=vec3(0.);
     if(c<.5){            // \u706B: flame tongues licking upward
      float tongue=letterHash(cell);
      float h=ph*(1.0+.8*letterHash(cell+.3));
      float sway=sin(ph*5.+tongue*30.-uStoryTime*3.1)*.16*ph;
      off=U*h+R*(sway+(aSeed.z-.5)*.30*(1.-ph)*ph);
      auraEnv=smoothstep(0.,.05,ph)*pow(1.-ph,1.2);
     }else if(c<1.5){     // \u6811: twigs sprouting from the strokes, forking once
      // One stem per sprout point, forking twice; grains stream out along it.
      float a0=(letterHash(aLetter.xy)-.5)*2.6;
      float L=.38+.32*letterHash(aLetter.xy+1.7);
      float s1=step(.5,aSeed.y)*2.-1.,s2=step(.5,fract(aSeed.y*7.))*2.-1.;
      float f1=.38+.1*letterHash(aLetter.xy+2.3),f2=.68;
      vec2 d0=vec2(sin(a0),cos(a0)),d1=vec2(sin(a0+s1*.62),cos(a0+s1*.62)),d2=vec2(sin(a0+s1*.62+s2*.55),cos(a0+s1*.62+s2*.55));
      vec2 q=d0*min(ph,f1)+d1*clamp(ph-f1,0.,f2-f1)+d2*max(ph-f2,0.);
      q*=L*1.5; q.y+=ph*ph*.12;
      off=R*q.x+U*q.y+R*(aSeed.z-.5)*.012;
      auraEnv=smoothstep(0.,.06,ph)*(1.-smoothstep(.8,1.,ph));
     }else if(c<2.5){     // \u94F6: silver rain falling from the strokes
      off=-U*ph*(1.3+1.1*aSeed.y)+R*(sin(uStoryTime*.9+aSeed.z*20.)*.04*ph-.12*ph);
      auraEnv=smoothstep(0.,.04,ph)*(1.-ph*ph);
     }else{               // \u82B1: five-petal blossoms opening and drifting away
      float spin=letterHash(aLetter.xy+5.)*6.283+ph*.8;
      float open=smoothstep(0.,.22,ph);
      float S=(.30+.16*letterHash(aLetter.xy+9.))*open;
      // Five petal outlines (ellipses around the heart) plus a few heart grains.
      float k=floor(aSeed.x*5.),psi=fract(aSeed.x*5.)*6.283;
      float al=spin+k*1.2566;
      vec2 pe=vec2(.52+.48*cos(psi),.30*sin(psi))*S;
      vec2 q=vec2(cos(al)*pe.x-sin(al)*pe.y,sin(al)*pe.x+cos(al)*pe.y);
      if(aSeed.y>.9)q=vec2(cos(aSeed.z*6.283),sin(aSeed.z*6.283))*S*.14*fract(aSeed.y*9.);
      vec2 away=vec2((aLetter.x>0.?1.:-1.)*(.5+.6*letterHash(aLetter.xy+2.)),.3+.5*letterHash(aLetter.xy+4.));
      off=R*(q.x+away.x*ph*.9)+U*(q.y+away.y*ph*.8);
      auraEnv=smoothstep(0.,.08,ph)*(1.-smoothstep(.72,1.,ph));
     }
     p+=off*on;auraEnv=mix(1.,auraEnv,on);auraPhase=ph*on;
    }
   }
  }else{
   // Not in the lettering: thrown out with the burst, then falling embers.
   vec3 E=p+dir*(reach*(1.-exp(-tb/.22))+drift);
   E-=U*.55*tb*tb;
   p=E;
   // The fallout now fades over ~3 s, so the burst rains down and out of the
   // frame (gravity carries it) instead of vanishing into black.
   letterGone=smoothstep(.6,3.2,tb);
   // Fallen grains stay retired; the closing image belongs to the lettering.
  }
 }
`,rp=`
 if(uStoryTime>LETTER_START){
  // v3h: the tree's burst stays below the 8.93 s bloom, the piece's main hit.
 float flash=1.+.35*letterBurst;
  if(aLetter.w>-.5){
   float landedL=smoothstep(.92,1.,letterGone);
   vec3 gold=vec3(1.30,.56,.17)*(.45+.65*aSeed.y);
   vec3 silver=vec3(.86,.93,1.12)*(.55+.75*aSeed.y);
   vec3 ink=aGrowth.y>.5?gold:silver;
   float c=letterKind-1.;
   if(letterKind>.5){
    if(c<.5)ink=mix(vec3(1.7,1.0,.35),vec3(1.4,.20,.04),smoothstep(0.,.7,auraPhase))*(.6+.5*aSeed.y);
    else if(c<1.5)ink=mix(vec3(1.3,.70,.22),vec3(1.05,.95,.45),auraPhase)*(.55+.5*aSeed.y);
    else if(c<2.5)ink=vec3(.95,1.05,1.40)*(.75+.7*aSeed.y)*(1.+2.2*step(.93,fract(aSeed.z*17.))*(.5+.5*sin(uLiveTime*7.+aSeed.x*50.)));
    else ink=mix(vec3(1.5,1.35,1.5),vec3(1.6,.95,1.2),smoothstep(0.,.5,auraPhase))*(.7+.5*aSeed.y);
   }
   float glint=step(.985,aSeed.x)*(.6+.4*sin(uLiveTime*3.+aSeed.z*40.));
   vec3 flying=ink*mix(1.5,mix(.7,1.2,clamp(letterGone/.9,0.,1.)),silk);
   vColor=mix(vColor*flash,mix(flying,ink*(1.+1.4*glint),landedL),smoothstep(0.,1.2,uStoryTime-LETTER_START));
   // v3h: the closing flash is back, on the written grains only (v3f had
   // none); uFlare peaks on the score's last hit and leaves an afterglow.
   // The flash is now the only closing mark (the ghost tree was removed), so
   // it lifts the written grains further (+20 % frame brightness was too shy).
   vColor*=mix(1.,1.4,landedL)*(1.+2.4*uFlare*landedL);
   vColor*=1.+2.4*brushHead;
   // On the 28.13 s hit a band of light runs down the written column (top to
   // bottom in about a second), so the held lettering answers the beat.
   float sweepFront=3.7-7.8*smoothstep(28.08,29.05,uStoryTime);
   float sweep=exp(-pow((aLetter.y-sweepFront)/.75,2.))*smoothstep(28.06,28.14,uStoryTime)*(1.-smoothstep(28.95,29.3,uStoryTime));
   vColor*=1.+2.2*sweep*landedL;
   // The current incoming grains lead the eye; this is zero after arrival.
   vColor*=1.+.65*gatherFlight;
   float auraOn=step(.5,letterKind)*step(.001,auraPhase);
   // Waiting sparks dim right down; they brighten again as the brush calls them.
   float called=clamp(letterGone/.9,0.,1.);
   // Sparse hovering sparks retain the source, without a bright cloud behind
   // the writing. The active plume returns to the original .62 on landing.
   float waitingAlpha=mix(.035,.12,step(.96,aSeed.x));
   float calledLight=smoothstep(.04,.65,called)*callLight;
   float airAlpha=mix(.70,mix(waitingAlpha,.62,calledLight)+.16*gatherFlight,silk);
   vAlpha=mix(vAlpha,mix(airAlpha,.62,landedL)*mix(1.,1.35,auraOn)*uDensityScale,letterK)*auraEnv;
   gl_PointSize=mix(gl_PointSize,(1.15+1.1*aSeed.y+1.4*glint)*mix(1.,1.3,auraOn)*uPixelRatio,letterK)*(1.+.22*letterBurst);
   float waitingSize=mix(.60,.86,step(.96,aSeed.x));
   gl_PointSize*=mix(1.,mix(waitingSize,1.,smoothstep(.03,.55,called)),silk);
  }else{
   vColor*=flash;
   vColor=mix(vColor,vColor*vec3(1.3,.75,.4),smoothstep(.3,1.2,uStoryTime-LETTER_START));
   vAlpha*=1.-letterGone;
   gl_PointSize*=1.+.22*letterBurst;
  }
 }
`;var op=`
uniform float uTime;
uniform float uLiveTime;
uniform float uStoryTime;
uniform float uFlare;
uniform float uMotion;
uniform vec3 uPointer;
uniform float uPointerPower;
uniform float uAlignmentDistance;
uniform vec2 uAlignmentOffset;
uniform float uSettled;
uniform float uWaterY;
uniform float uWorldScale;
uniform sampler2D uRootRoutes;
uniform vec2 uRootRouteSize;
const float PI=3.14159265359;
${Fo}
${Td}
${Kd}
${Ad}
${zo}
float hash(float x){return fract(sin(x)*43758.5453123);}
// Before the first strong low-frequency onset at 8.93 s, a slow light moves
// through the established branches. This is an authored visual breath, not a
// claim that individual soundtrack beats were detected in the quiet opening.
float openingCue(float time,float delay){
 float phase=time*.72-delay*8.;
 float rise=smoothstep(1.5,3.,time)*(1.-smoothstep(8.2,8.93,time));
 return pow(.5+.5*sin(phase),3.)*.5*rise;
}
float warmBranch(vec3 sourceColor){
 float peak=max(max(sourceColor.r,sourceColor.g),max(sourceColor.b,.001));
 return smoothstep(.05,.48,(sourceColor.r-sourceColor.b)/peak);
}
// Move each sampled pixel along its original front-view ray, not sideways.
// Its depth is real; the projected silhouette stays registered to the image.
vec3 registered(vec3 p){
 p.xy=(p.xy+uAlignmentOffset)*(1.-p.z/uAlignmentDistance)-uAlignmentOffset;
 return swayTree(p,uLiveTime,uMotion);
}
// Sparks differ: each has its own burst speed and how far it was drawn into
// the bud, so a shell opens in layers instead of as a scaled copy of its cell.
float burstLen(vec3 seed){return BURST_LEN*(.78+.44*hash(seed.y*57.3+seed.z*11.1));}
float budReach(vec3 seed){return BUD_SCALE*(.80+.20*hash(seed.z*31.7+seed.x*5.3));}
// x: flight start, y: arrival, z: burst start (<0 = none), w: fully settled.
// growth.x is the normalized growth distance (branches) or spray bloom order
// (crown); growth.y is 1 for branch particles. Per-particle jitter keeps the
// growth front soft: a travelling glow, never a hard-edged batch.
vec4 timing(vec3 seed,vec2 growth,float budWeight,vec4 route,vec3 center){
 if(growth.y>.5){
  // Short daughter supports may follow a late parent beyond the original
  // branch interval; the flower timing below retains its original range.
  float arrive=GROW_START+clamp(growth.x,0.,1.15)*GROW_SPAN+(seed.x-.5)*.44;
  // Emission is staggered as well as arrival: no shared instant of launch.
  float start=max(.015,min(arrive-.12,.04+seed.y*.65+growth.x*1.10));
  return vec4(start,arrive,-1.,arrive);
 }
 // The same physical bud schedules its iron blast and its later silver flower.
 float burst=silverBloomTime(center)+(seed.x-.5)*.10;
 return vec4(burst-.12,burst-.02,burst,burst+burstLen(seed));
}
vec3 routePoint(vec4 route,float progress){
 float index=clamp(progress,0.,1.)*(uRootRouteSize.x-1.);
 float cell=floor(index),y=(route.x+.5)/uRootRouteSize.y;
 vec3 a=texture2D(uRootRoutes,vec2((cell+.5)/uRootRouteSize.x,y)).xyz;
 vec3 b=texture2D(uRootRoutes,vec2((min(cell+1.,uRootRouteSize.x-1.)+.5)/uRootRouteSize.x,y)).xyz;
 return mix(a,b,index-cell);
}
// The particle-only scene has no hidden water plane or underwater clipping.
float aboveWater(vec3 p){
 return 1.;
}
// Shell expansion with drag: a fast pop that settles exactly on the target.
float burstOpen(float time,float burst,vec3 seed){
 if(burst<0.)return 1.;
 float u=clamp((time-burst)/burstLen(seed),0.,1.);
 return bloomOpenProgress(u);
}
// cinematic-v2d: the silver shell overshoots outward on the shared beat and
// settles back into its cloud, so it bursts like the iron flowers.
float burstPop(float time,float burst,vec3 seed){
 if(burst<0.)return 0.;
 float u=(time-burst)/burstLen(seed);
 return step(0.,u)*.34*exp(-pow((u-.10)/.075,2.))*(1.-step(1.,u));
}
vec3 flight(vec3 home,vec3 seed,vec4 bud,vec2 growth,vec4 route,vec4 tm,float time){
 if(time>=tm.w)return registered(home);
 float open=burstOpen(time,tm.z,seed);
 vec3 target=home+bud.xyz*(budReach(seed)*bud.w*(1.-open-burstPop(time,tm.z,seed)));
 // Silver grows at the lit branch tip, never launches again from the root.
 if(growth.y<.5)return registered(target);
 float phase=clamp((time-tm.x)/max(.001,tm.y-tm.x),0.,1.);
 if(phase>=1.)return registered(target);
 // Every route begins at the same water-root and includes its trunk/parent
 // boughs. No particle starts in an external sphere or vortex.
 float travel=phase*phase*(3.-2.*phase);
 vec3 endpoint=routePoint(route,route.y);
 vec3 p=routePoint(route,route.y*travel);
 // Only exceptionally distant old fringe grains postpone their terminal
 // drift; ordinary branch/flower routes keep their soft existing connection.
 float reachStart=mix(.57,.86,smoothstep(.45,1.2,route.w));
 float reach=smoothstep(reachStart,1.,phase);
 p+=(target-endpoint)*reach;
 // Microscopic, independent meanders reveal beads in a stem, not one wire.
 // The envelope vanishes at emission and landing; the destination stays exact.
 float envelope=sin(phase*PI);
 float spread=(.018+.032*seed.y)*envelope*envelope;
 p+=vec3(sin(phase*15.+seed.x*31.),cos(phase*11.+seed.y*23.)*.35,sin(phase*13.+seed.z*29.))*spread*uMotion;
 return registered(p);
}

`,lu=`
${op}
attribute vec3 color;
attribute vec3 aSeed;
attribute float aEnergy;
attribute vec3 aVolumeNormal;
attribute vec2 aFloret;
attribute float aCrownWeight;
attribute vec4 aParticleDetail;
#define aCrownTone aParticleDetail.x
#define aCrownOverlap aParticleDetail.y
#define aBranchDensity aParticleDetail.z
#define aTwigPresence aParticleDetail.w
attribute vec3 aBranchOutline;
attribute vec4 aBud;
attribute vec3 aGrowth;
attribute vec4 aRootRoute;
uniform float uSize;
uniform float uCrownGain;
uniform float uMist;
uniform float uMistFloor;
uniform float uDirectView;
uniform float uViewObliqueness;
uniform vec3 uCrownViewCenter;
uniform float uPixelRatio;
uniform float uDensityScale;
uniform float uCamMotion;
uniform vec4 uEncores[10];
uniform float uEncoreCount;
${ip}
varying vec3 vColor;
varying float vAlpha;
varying float vSharpness;
varying float vStar;
void main(){
 // The trunk is frozen at ignition while silver grains finish opening.
 // Keep its original timing record even when the crown becomes settled:
 // replacing that record would change branch light after it was frozen.
 float particleTime=aGrowth.y>.5?min(uTime,BLOOM_START):uTime;
 vec4 tm=uSettled>.5&&aGrowth.y<.5?vec4(-3.,-2.,-1.,-1.):timing(aSeed,aGrowth.xy,aBud.w,aRootRoute,position+aBud.xyz);
 vec3 p=flight(position,aSeed,aBud,aGrowth.xy,aRootRoute,tm,particleTime);
 // The point and its fine trace use one analytic, seekable trajectory.
 vec4 flow=choreograph(p,aSeed,registered(position+aBud.xyz),position+aBud.xyz,aGrowth.y,uLiveTime);
 float scatter=flow.w*uMotion;
 p=mix(p,flow.xyz,uMotion);
${sp}
 vec4 mv=modelViewMatrix*vec4(p,1.);
 gl_Position=projectionMatrix*mv;

 float phase=clamp((particleTime-tm.x)/max(.001,tm.y-tm.x),0.,1.);
 float arrived=smoothstep(.78,.995,phase);
 float hasBurst=step(0.,tm.z)*aBud.w;
 float open=burstOpen(particleTime,tm.z,aSeed);
 float sinceBurst=particleTime-tm.z;
 float budded=arrived*hasBurst*(1.-open);              // compact glowing bud
 float landed=arrived*mix(1.,smoothstep(.40,.97,open),hasBurst);
 // After the bloom, settled particles should read as a stable luminous
 // material. Preserve the opening accents, then ease into a calmer finish.
 float settledCalm=smoothstep(13.2,16.5,uLiveTime)*landed*uDirectView;
 float gathered=max(landed,arrived*hasBurst);          // bud or settled
 float onWater=step(9.,aGrowth.z);
 float budGain=aGrowth.z-10.*onWater;
 float flash=.55*hasBurst*step(0.,sinceBurst)*exp(-max(0.,sinceBurst)*5.5)*mix(1.,budGain,.7);
 float sinceArrive=particleTime-tm.y;
 float ignite=aGrowth.y*step(0.,sinceArrive)*exp(-max(0.,sinceArrive)*2.4);

 float silver=1.-warmBranch(color);
 float warm=1.-silver;
 // Strict material scope: gold branches and their old reveal/light response
 // remain untouched even where an original branch grain is almost white.
 float crownMaterial=(1.-step(.5,aGrowth.y))*silver*uDirectView;
 // Preserve the old occupancy treatment outside the direct silver crown.
 // Bud centres keep its spatial mask coherent within each spray.
 vec3 sprayCenter=position+aBud.xyz;
 float crownBand=smoothstep(-1.2,.55,sprayCenter.x)
   *(1.-smoothstep(1.65,2.45,sprayCenter.y))*smoothstep(-.8,-.15,sprayCenter.y);
 float localMistFloor=mix(uMistFloor,.22,uDirectView*crownBand);
 float legacyCw=mix(aCrownWeight,max(aCrownWeight,localMistFloor),uMist*silver*(1.-aGrowth.y));
 // Use the original occupancy field. A fog floor must never relight its gaps.
 float cw=mix(legacyCw,clamp(aCrownWeight,0.,1.),crownMaterial);
 float spray=landed*silver;
 // Spray membership (gaps, fringes) applies from the moment a point is gathered
 // into its bud, so gap particles never light up a compressed shell.
 float member=gathered*silver;
 float rnd=fract(aSeed.z*7.31+aSeed.y*3.17+aSeed.x*1.93);
 float grain=pow(smoothstep(.64,.98,aSeed.y),2.);
 float inSpray=smoothstep(.30,.75,cw)*silver*(1.-aGrowth.y);
 // Brightness hierarchy: fine dust, the spray body, crisp sparkles and a few
 // hundred diffraction glints, instead of one uniform grey grain. Sparkles
 // gather in the dense florets (~6%) and thin out at fringes (~1.5%).
 float sparkle=step(mix(.984,.938,smoothstep(.2,.8,aFloret.x)),aSeed.x)*inSpray;
 float star=step(.9962,aSeed.x)*step(.45,aSeed.y)*inSpray;
 float brightTraveler=step(.91,aSeed.z);
 float rareSpark=step(.985,aSeed.x)*smoothstep(.55,.95,aEnergy);
 // The bowl host scales the source tree down to world-space metres.
 // Keep grain widths in source scale instead of inflating point sprites.
 float localViewDistance=-mv.z/max(.0001,uWorldScale);
 float perspective=10.2/max(.5,localViewDistance);
 // Deeper points retain the reference's front-view grain size. At an angle
 // they return gradually to perspective size for near/far depth cues.
 float imageScale=mix(1.-position.z/uAlignmentDistance,1.,uViewObliqueness);
 float settledSize=(.94+aSeed.x*.62+rareSpark*.38+sparkle*.95+star*4.2)*perspective*imageScale;
 float flightSize=(.67+aSeed.x*.30+brightTraveler*.33)*sqrt(perspective);
 float size=mix(flightSize,settledSize,gathered)*mix(1.,.8,budded);
 // v2c: the closer framing would enlarge every grain; keep them fine.
 size*=mix(.72,1.,smoothstep(4.5,9.,localViewDistance));
 // The larger tree needs finer settled grains, not enlarged glowing discs.
 // Flight and mirror grains retain their existing scale.
 float detailSize=mix(1.,.90,uDirectView*gathered);
 detailSize*=1.-.03*crownMaterial*landed;
 gl_PointSize=clamp(uSize*uPixelRatio*size*detailSize,.7,mix(3.1,9.,star*landed)*uPixelRatio);
 // Sub-pixel point sprites can jump between raster samples on a slow orbit.
 // Give only those tiny settled grains a wider sampling footprint, with
 // area compensation below so they do not become larger/brighter glows.
 float requestedPointSize=gl_PointSize;
 float stableFootprint=mix(.7,max(1.75,1.15*uPixelRatio),settledCalm);
 gl_PointSize=max(gl_PointSize,stableFootprint);
 float pointCoverage=pow(requestedPointSize/gl_PointSize,2.);

 float twinkle=.5+.5*sin(uLiveTime*(.9+aSeed.y*2.1)+aSeed.z*41.);
 twinkle=mix(1.,.30+.95*twinkle*twinkle,uMotion);
 twinkle=mix(twinkle,.66+(twinkle-.66)*.22,settledCalm*uMotion);
 // A slow band of light passes over the finished crown, like a glint
 // travelling across silver foil. Only shading moves, never the points.
 float along=dot(position.xy,vec2(.86,.5))+position.z*.15;
 float sweepAt=mod(uLiveTime*.8+4.,14.)-6.;
 // cinematic-v2: the foil glint starts once the gold rain has cleared.
 float sweep=exp(-pow((along-sweepAt)*1.1,2.))*smoothstep(12.6,13.8,particleTime)*uMotion;

 vec3 tint=color/max(max(color.r,color.g),max(color.b,.01));
 // \u7EA2\u91D1: vermilion fine twigs, hotter gold where the source trunk is brightest.
 // cinematic-v2: the hot end stays gold instead of bleaching toward white.
 vec3 emberTone=mix(vec3(1.30,.74,.56),vec3(1.42,1.08,.78),smoothstep(.42,.92,aEnergy));
 // In the direct view keep the branch's warmer gold distinct from the silver.
 // The reflection is deliberately left on the original colour budget.
 emberTone=mix(emberTone,emberTone*vec3(1.02,1.03,.94),uDirectView);
 // Front sprays read brighter and whiter; deeper sprays cooler and dimmer.
 // Front/back tone is relative to the front camera, so it fades out when the
 // tree is seen from an angle (the volume shading below takes over there).
 float front=mix(smoothstep(-2.5,2.3,position.z),.6,uViewObliqueness);
 vec3 silverTone=mix(vec3(.88,.93,1.08),vec3(1.10,1.09,1.10),front);
 vec3 settledColor=color*mix(silverTone*1.06,emberTone,warm);
 vec3 flightColor=mix(vec3(1.06,.53,.25),vec3(1.20,.79,.48),smoothstep(.72,.98,aSeed.z))*(.76+aEnergy*.40);
 vColor=mix(flightColor,settledColor,gathered);
 // The lower-left source pad is already very bright. Lift the upper pads
 // selectively so the crown reads as layers, retaining all grain/gap masks.
 float upperPad=smoothstep(.5,1.8,(position+aBud.xyz).y);
 float crownGain=uCrownGain+uDirectView*mix(-.08,.18,upperPad);
 vColor*=1.+crownGain*landed*inSpray;
 // A few pads lead, others recede. Rebalance the already visible grains,
 // without lighting the dark channels or adding a translucent haze.
 vColor*=mix(1.,aCrownTone,landed*inSpray*uDirectView);
 vColor*=1.+spray*(grain*.75+aFloret.y*.75);
 vColor*=mix(1.,mix(.62,1.24,cw),spray);   // spray cores brighter than fringes
 vColor+=landed*sparkle*vec3(.95,1.,1.16)*(1.05+1.7*sweep)*twinkle;
 vColor*=1.+spray*sweep*.22;
 // The burst glitters: its sparkle subset flares, the body only warms up.
 vColor*=1.+flash*mix(.35,2.6,step(.86,aSeed.x))+ignite*1.0+budded*.12;
 vColor=mix(vColor,vec3(2.3,2.45,2.8)*(.55+.45*twinkle)*(1.+.8*sweep),star*landed);

 // Transient opening accents live on individual beads, never the whole cloud.
 float openingOnly=(1.-smoothstep(15.8,17.,particleTime))*uDirectView;
 float sapHead=exp(-pow((sinceArrive-.12)*3.0,2.))*aGrowth.y*step(0.,sinceArrive);
 vColor*=1.+openingOnly*sapHead*step(.86,aSeed.z)*.48;
 // A continuous opening breath travels through the already-revealed branches.
 // Only already revealed branch beads respond; no light appears ahead of the
 // growth front and the root/crown geometry remains unchanged.
 float sapBeat=openingCue(uLiveTime,clamp(aGrowth.x,0.,1.)*.20)*aGrowth.y*arrived*uMotion*uDirectView;
 vColor*=1.+sapBeat*step(.72,aSeed.z)*.85;
 float firstFlowers=(1.-smoothstep(.13,.32,aGrowth.x))*(1.-aGrowth.y);
 vColor*=1.+openingOnly*firstFlowers*flash*sparkle*.55;

 // The same physical bud keeps a short gold-white core as its silver grains
 // spread out. This tint ends locally before the accepted mature shading.
 float warmHandoff=(1.-aGrowth.y)*step(0.,sinceBurst)
   *(1.-smoothstep(.035,.22,sinceBurst))*(1.-uSettled)*uDirectView;
 vColor=mix(vColor,vColor*vec3(1.13,.83,.47),warmHandoff*.22);

 // Reduce the accumulated silver body light while keeping its fine glints.
 // Only opened, directly viewed crown grains change; the mirror keeps its tone.
 float crownDetail=max(sparkle,star);
 float silverBody=uDirectView*landed*silver*(1.-aGrowth.y);
 // Pull back the many ordinary grains slightly while retaining a few crisp
 // cool glints. This creates highlight hierarchy without filling the gaps
 // with a screen-wide haze; the original mirror is unaffected.
 vColor*=mix(1.,mix(.80,.98,crownDetail),silverBody);
 vColor*=mix(vec3(1.),vec3(.97,1.00,1.055),silverBody);
 // Strong measured low-frequency onsets briefly lift the crown; the weaker
 // 100 BPM subdivisions pick out alternating local florets in between.
 // Each response attacks quickly and decays, so dark gaps remain readable.
 vec3 rhythmPosition=position+aBud.xyz;
 float impact=rhythmImpact(uLiveTime,.025+.075*clamp((rhythmPosition.z+2.)/4.,0.,1.));
 float detail=rhythmDetail(uLiveTime,rhythmPosition);
 // cinematic-v2: the 2.4 s measured impacts lead; the faster subdivisions
 // only whisper, so the crown breathes instead of flickering.
 float noteLight=(impact*.62+detail*.28)*silverBody*uMotion;
 vColor*=1.+noteLight*mix(.70,1.8,max(sparkle,star));
 // Physical flower depth priorities release smoothly when leaving the front.
 float overlapView=1.-smoothstep(.40,.85,uViewObliqueness);

 // Let the original large limbs read through the surrounding loose grains.
 // Their inner volume gains a little light while the broad dusty edge
 // recedes. Grain size, alpha texture and every fine supporting twig stay
 // intact; this direct-view mask is zero for the accepted weak reflection.
 float mainLimb=uDirectView*landed*aBranchOutline.x;
 // The completed shaft supplies coherent cross-section normals. One fixed
 // light describes a continuous bright side and an opposite dark side;
 // joint density has already been normalised once on the CPU.
 float stemLight=smoothstep(-.12,.88,dot(normalize(aVolumeNormal),normalize(vec3(-.45,.75,.60))));
 // v2r: the shaded side of trunk and limbs no longer sinks below the twigs.
 float stemTone=mix(.74,2.35,stemLight)*mix(.85,1.,aBranchOutline.y);
 vec3 stemColor=mix(vColor,vec3(1.26,.62,.28)*(.42+.62*aEnergy),.32)*stemTone;
 float stemRidge=smoothstep(.28,.82,aBranchOutline.y)*smoothstep(.35,.88,stemLight);
 stemColor+=vec3(1.45,.88,.42)*stemRidge*1.15;
 vColor=mix(vColor,stemColor,mainLimb);
 // v2e bark: uneven light along the limbs \u2014 elongated patches and knots \u2014
 // so a clean trunk still reads as a material, not a lit tube.
 vec3 bp=position*vec3(2.3,6.5,2.3);
 float bark=.5+.5*sin(bp.y+sin(bp.x*1.7+bp.z*1.3)*2.1)*sin(bp.y*.37+bp.x*2.9+1.3);
 float knot=smoothstep(.55,.95,.5+.5*sin(position.y*3.1+position.x*4.7)*sin(position.z*3.7+position.y*1.9));
 vColor*=mix(1.,mix(.62,1.22,bark)*(1.+.25*knot),aGrowth.y*landed*uDirectView);
 // v2r view sheen: a broad molten-gold highlight (half vector of a fixed key
 // light and the eye) that slides over trunk and boughs as the viewpoint
 // changes. Faint at rest; it swells while the camera travels (uCamMotion,
 // eased on the CPU) and settles back when the camera stops. Thick limbs
 // carry it, fine twigs only a little.
 float sheenLen=length(aVolumeNormal);
 if(sheenLen>1e-4){
  vec3 sheenN=normalize(mat3(modelMatrix)*aVolumeNormal);
  vec3 sheenV=normalize(cameraPosition-(modelMatrix*vec4(p,1.)).xyz);
  vec3 sheenH=normalize(normalize(vec3(-.45,.75,.60))+sheenV);
  float sheen=pow(max(0.,dot(sheenN,sheenH)),2.2);
  float sheenAmount=(.18+.82*uCamMotion)*aGrowth.y*landed*uDirectView*smoothstep(5.,8.,uTime)
   *mix(.30,1.,clamp(aBranchOutline.x,0.,1.));
  // The bark is already near saturation, so the band is drawn as contrast:
  // the facing side lifts toward pale gold, the turned-away side dims a little.
  vColor=mix(vColor,vColor*(.60+2.9*sheen)+vec3(1.10,.72,.34)*sheen*sheen*1.6,sheenAmount);
 }
 // Added branch grains retain their small sprites. Uneven bead light makes
 // the particle bundle readable between flowers without a luminous tube.
 float originalTwig=uDirectView*landed*(1.-step(-.5,aTwigPresence));
 vColor=mix(vColor,max(vColor*1.30,vec3(.30,.18,.105)),originalTwig);
 float twigDetail=uDirectView*landed*max(0.,aTwigPresence);
 float twigBead=step(.85,aSeed.z);
 vColor*=1.+twigDetail*(.12+.32*twigBead);

 // Most grains carry low light in transit; a sparse bead subset makes the
 // upward flow readable without piling half a million points into a root flare.
 float travelingBead=step(.962,aSeed.z);
 float flyingAlpha=mix(.0018,.095*(.60+.40*twinkle),travelingBead)*(.46+aEnergy*.54);
 flyingAlpha*=mix(.48,1.,aGrowth.y);
 float finalAlpha=(.18+aEnergy*.38)*(.78+aEnergy*.36);
 float glint=sin(uLiveTime*(1.3+aSeed.y*1.7)+aSeed.x*31.);
 float breathing=1.+(pow(max(0.,glint),8.)*mix(.65,.12,settledCalm)-.025)*step(.94,aSeed.y)*uMotion*landed;
 breathing*=1.+noteLight*step(.64,aSeed.z)*.28;
 vAlpha=mix(flyingAlpha,finalAlpha,gathered)*uDensityScale*breathing;
 // Separate drifting light from the retained crown without turning the
 // moving layer into a solid veil.
 vAlpha*=mix(1.,mix(.20,.60,max(sparkle,star)),scatter);
 // Golden limbs keep their settled brightness throughout the mature view.
 vColor=mix(vColor,vColor*vec3(1.16,.88,.55),scatter*step(.965,aSeed.z));
 // Preserve every target while separating silver microclusters optically.
 float clustered=(.30+1.35*aFloret.x)*(.75+grain*.70)+aFloret.y*.22;
 vAlpha*=mix(1.,clustered,member);
 // Dithered spray membership: in the gaps points go dark one by one, so the
 // channels are true voids with a few stray grains, and spray edges break into
 // individual particles instead of fading through soft grey shadow.
 float keep=smoothstep(rnd-.10,rnd+.10,cw*1.55-.07);
 vAlpha*=mix(1.,keep*mix(.74,1.10,cw),member);
 vAlpha*=mix(1.,mix(.82,1.12,front),member);
 vAlpha*=1.+landed*(sparkle*.7+star*1.4);
 // While the shell is compressed its light is spread over fewer pixels: scale
 // alpha with the shell's current area so a bud is a spark and an opening shell
 // stays a shower of grains instead of a blown-out puff.
 float shell=1.-budReach(aSeed)*aBud.w*(1.-open);
 vAlpha*=mix(1.,min(1.,max(shell*1.15,.035*budGain)),hasBurst*arrived);
 vSharpness=max(spray,2.*mainLimb);
 vStar=star*landed*(1.-.82*mainLimb);
 // A translucent particle cloud still needs tonal separation between lobes.
 // In front view preserve source brightness; on orbit reveal spatial shading.
 vec3 volumeNormal=normalize(normalMatrix*aVolumeNormal);
 float facing=dot(volumeNormal,normalize(-mv.xyz));
 float light=dot(normalize(aVolumeNormal),normalize(vec3(-.45,.75,.60)));
 float depthTone=(.47+.42*smoothstep(-.55,.9,facing))*(.77+.25*smoothstep(-.6,1.,light));
 // Fine branches emit light on both sides: surface-style backface shading
 // was hiding their attachments on orbit. Keep the distant crown subdued,
 // but let nearby silver cores and the supporting twigs remain legible.
 float branchRelief=.62*aGrowth.y;
 float coreRelief=.30*inSpray*smoothstep(-.25,.75,facing);
 depthTone=mix(depthTone,1.,max(branchRelief,coreRelief)*uDirectView);
 float distanceFade=exp(-.10*max(0.,localViewDistance-uAlignmentDistance));
 // The tour exposes the crown's rear and upper layers. Keep those fine grains
 // readable without lifting the front highlights or the accepted water mirror.
 float angleTone=depthTone*distanceFade;
 angleTone=mix(angleTone,max(angleTone,.65),inSpray*uDirectView);
 vAlpha*=mix(1.,angleTone,landed*uViewObliqueness);

 // Silver finish: one light budget for a transparent body, structural cores,
 // short inner veins and a directionally selected open rim. Existing scalar
 // attributes supply the entire field: no resampling, extra vertices or shell.
 float finish=crownMaterial*landed;
 float occupancy=smoothstep(.20,.72,cw);
 float density=clamp(aFloret.x,0.,1.);
 float core=smoothstep(.42,.85,density)*smoothstep(.25,.80,aEnergy)*occupancy;
 float vein=smoothstep(.018,.24,aFloret.y)*occupancy;
 // Only the lit side gets a rim. Scattering moves positions without normals,
 // so this view-dependent term fades continuously out of the detached layer.
 float formed=1.-smoothstep(.08,.80,scatter);
 vec3 budNormal=normalize(-aBud.xyz*vec3(1.,1.1,.45)+vec3(.00001));
 vec3 contourNormal=normalize(mix(normalize(aVolumeNormal),budNormal,.65));
 float rimFacing=dot(normalize(normalMatrix*contourNormal),normalize(-mv.xyz));
 float rimLight=smoothstep(-.12,.65,dot(contourNormal,normalize(vec3(-.45,.75,.60))));
 float contourBand=smoothstep(.27,.39,cw)*(1.-smoothstep(.49,.66,cw));
 float rim=max(pow(1.-abs(rimFacing),5.)*.95,contourBand*.50)
   *rimLight*occupancy*formed;
 float pad=mix(.85,2.1,smoothstep(.65,2.5,aCrownTone));
 float accents=(impact*.65+detail*.18)*uMotion*mix(1.,.45,settledCalm);
 float structureLight=(core*2.6+vein*4.8+rim*11.)*pad
   *(1.+accents*.80+sweep*.35);
 float bodyLight=(.78+.18*density)*pad;
 vec3 bodyTone=mix(vec3(.79,.86,1.0),vec3(1.,1.015,1.04),front);
 vec3 silverColor=color*bodyTone*bodyLight
   +vec3(.97,1.015,1.11)*structureLight*(.40+.60*aEnergy);
 // Rare sparkles punctuate the structural light, rather than replacing it.
 silverColor+=vec3(.80,.88,1.05)*(sparkle*.22+star*.60)*twinkle;
 silverColor*=1.+flash*1.6;
 // cinematic-v2: flowers near a later local iron flower flare with it.
 float encoreFlash=0.;
 for(int k=0;k<10;k++){
  if(float(k)>=uEncoreCount)break;
  vec4 e=uEncores[k];
  vec3 d=(position+aBud.xyz)-e.xyz;
  float age=uLiveTime-e.w;
  encoreFlash+=exp(-dot(d,d)*5.2)*smoothstep(-.01,.05,age)*exp(-max(0.,age)/.6);
 }
 encoreFlash=min(encoreFlash,1.2)*uMotion;
 silverColor*=1.+1.5*encoreFlash;
 silverColor=mix(silverColor,silverColor*vec3(1.12,.92,.70),.30*encoreFlash);
 silverColor=mix(silverColor,silverColor*vec3(1.13,.83,.47),warmHandoff*.22);
 silverColor=mix(silverColor,silverColor*vec3(1.16,.88,.55),scatter*step(.965,aSeed.z));
 float silverKeep=smoothstep(rnd-.065,rnd+.065,cw*1.30-.11);
 float fringe=step(.992,aSeed.z)*smoothstep(.025,.15,cw)
   *(1.-smoothstep(.15,.42,cw))*.065;
 float occupancyAlpha=max(max(silverKeep*mix(.36,1.,cw),fringe),rim*.75);
 float silverAlpha=finalAlpha*uDensityScale*(.35+1.35*density+.18*vein)
   *occupancyAlpha*(1.+.50*core+.78*vein+2.2*rim);
 silverAlpha*=mix(.78,1.06,front);
 // The drawn strands retain their actual bright veins and cores. The old
 // broad-sheet fade protected only random sparkles and erased these ridges.
 float flowLight=max(max(sparkle,star),max(core,vein));
 silverAlpha*=mix(1.,mix(.30,.78,flowLight),scatter);
 // Rear layers may recede; their former uniform .65 floor filled the crown.
 float silverDepth=(.34+.66*smoothstep(-.5,.85,facing))*distanceFade;
 silverAlpha*=mix(1.,silverDepth,uViewObliqueness*formed);
 // Attenuate the complete flower, including its independently computed
 // bright cores and arcs. Rear highlights must not shine through at full
 // strength after only their base colour has been dimmed.
 float layerDepth=aCrownOverlap*overlapView*formed;
 silverColor*=1.-.46*layerDepth;
 silverAlpha*=1.-.14*layerDepth;
 // The mature tour reads whole flowers in the current camera's depth order.
 // Use registered bud centres, not individual grains or fixed screen regions:
 // one lobe stays coherent while its neighbours pass in front of or behind it.
 // The main bloom is unchanged; the treatment leaves with the disassembling
 // tree, before the brush writing and the held closing composition.
 float tourDepth=smoothstep(10.2,12.6,uStoryTime)
   *(1.-smoothstep(18.55,19.25,uStoryTime))*formed*uDirectView;
 vec3 budFromCenter=registered(sprayCenter)-uCrownViewCenter;
 float viewDepth=(modelViewMatrix*vec4(budFromCenter,0.)).z/max(.0001,uWorldScale);
 float nearFlower=smoothstep(-2.2,2.2,viewDepth);
 // Broad curved light on each existing flower, retaining its fine ridges.
 float lobeLight=smoothstep(-.45,.8,dot(contourNormal,normalize(vec3(-.45,.75,.60))));
 float flowerTone=mix(.72,1.10,nearFlower)*mix(.85,1.03,lobeLight);
 vec3 depthTint=mix(vec3(.94,.975,1.035),vec3(1.015,1.01,1.),nearFlower);
 silverColor*=mix(vec3(1.),depthTint*flowerTone,tourDepth);
 silverAlpha*=mix(1.,mix(.94,1.0,nearFlower),tourDepth);
 silverAlpha*=mix(1.,min(1.,max(shell*1.15,.035*budGain)),hasBurst*arrived);
 vColor=mix(vColor,silverColor,finish);
 // v3h: after the bloom settles, ~7 % of the crown grains keep a warm gold
 // glint so the held crown still reads as \u706B\u6811\u94F6\u82B1, not grey cloud.
 float emberHeart=uDirectView*landed*silver*(1.-aGrowth.y)*step(.93,fract(aSeed.z*31.7))
   *smoothstep(12.4,14.,uStoryTime);
 vColor=mix(vColor,vColor*vec3(1.85,1.05,.36),emberHeart);
 vAlpha=mix(vAlpha,silverAlpha,finish);
 // cinematic-v2 finale: the whole settled tree lifts on the last measured beat.
 vColor*=1.+uFlare*mix(.80,1.25,silver)*landed*uDirectView;
 // The held breath before the shared beat: the branches dim a little so the
 // gathering gold buds read brighter, then everything releases on the hit.
 float inhale=smoothstep(8.05,8.86,uStoryTime)*(1.-step(8.93,uStoryTime))*uMotion;
 vColor*=1.-.32*inhale*aGrowth.y;
 // v3h: a second, shorter held breath before the tree bursts into the
 // lettering on 18.55 s, so the second hit has a run-up like the first.
 float inhale2=smoothstep(17.85,18.48,uStoryTime)*(1.-step(18.55,uStoryTime))*uMotion;
 vColor*=1.-.22*inhale2;
 // The finished large limbs and silver both use the compact fine-grain edge.
 vSharpness=mix(vSharpness,2.,finish);
 // No water-specific suppression: the detached root and glow remain visible.
 vAlpha*=smoothstep(0.,.5,particleTime)*aboveWater(p);
 // Future batches stay at the root with zero alpha until actually released.
 vAlpha*=smoothstep(0.,.075,phase)*step(tm.x,particleTime);
 // Hidden silver waits until its own local iron burst is over.
 if(aGrowth.y<.5&&uSettled<.5)vAlpha*=smoothstep(tm.z,tm.z+.075,particleTime);
 // The same physical stem/collar density belongs to the direct and mirror
 // clouds. Gathering retains its response; the water's mirror gain is unchanged.
 vAlpha*=mix(1.,aBranchDensity,landed);
 // Retire the loose, low source-image ember fan around the root. The short
 // contact stem and main-trunk core are inside this mask's untouched centre;
 // the mirror keeps its accepted light budget and the root anchor never moves.
 float rootRadius=length((position.xz-vec2(.3267857143,0.))*vec2(1.,.9));
 // v2q: grains inside a root's own tube (outline z = 2) are not part of the fan.
 float rootKeep=step(1.5,aBranchOutline.z);
 float rootFringe=(1.-smoothstep(-2.25,-1.8,position.y))*smoothstep(.36,1.05,rootRadius)
   *(1.-clamp(aBranchOutline.x,0.,1.))*(1.-rootKeep)*warm;
 vAlpha*=1.-.9*rootFringe*landed*uDirectView;
 // cinematic-v2: nothing grows below the root junction any more (the wisps the
 // old water used to hide), and the loose outer dust of the large limbs steps
 // back so each limb reads as one luminous body instead of a fuzzy smear.
 // v2g: no flat cut at the root junction. Below it, grains dissolve over
 // ~0.5 units with an uneven, per-grain edge, as if sinking into dark mist.
 // v2k: the root base is now a shallow cone skirt (cinematic-finish), so
 // this is only a safety net far below it, not a visible cut.
 float belowRoot=1.-smoothstep(-4.70+.15*rnd,-4.40,position.y);
 // v2o: v1 roots \u2014 no below-root fade.
 float limbDust=clamp(aBranchOutline.x,0.,1.)*(1.-smoothstep(.04,.34,aBranchOutline.y));
 vAlpha*=1.-.62*limbDust*landed*uDirectView;
 // Keep the original mirror budget; only faint new twig grains enter it.
 vAlpha*=1.-.78*max(0.,aTwigPresence)*(1.-uDirectView)*landed;
 // v3h: the added upper twig grains cross into a closed loop in the bare
 // tree before the crown opens (seen ~5.5\u20139 s). Above ~45 % of the tree's
 // height they now arrive with the bloom, when the silver covers them.
 float twigHeight=p.y-(uLetterCenter.y-3.3);
 float upperTwig=step(.001,aTwigPresence)*smoothstep(2.4,3.0,twigHeight);
 vAlpha*=1.-upperTwig*(1.-smoothstep(8.93,9.6,uStoryTime));
#ifdef REFLECTION_PASS
 // Index subset (see particle-tree.js) drawn into the mirror target only.
 // Fewer points carry proportionally more light so mean reflected energy holds.
 vAlpha*=REFLECTION_ALPHA;
 gl_PointSize=max(.7,gl_PointSize*REFLECTION_SIZE);
#endif
 // Fully gated points are not rasterized at all.
 vAlpha*=pointCoverage;
${rp}
 if(vAlpha<.0015){gl_Position=vec4(2.,2.,2.,1.);gl_PointSize=0.;}
}
`,cu=`
varying vec3 vColor;
varying float vAlpha;
varying float vSharpness;
varying float vStar;
void main(){
 vec2 uv=gl_PointCoord-.5;
 float radius=length(uv)*2.;
 if(radius>=1.)discard;
 // A soft circular core and an edge that reaches zero: never square sprites.
 float compact=clamp(vSharpness-1.,0.,1.);
 float falloff=mix(mix(3.2,4.8,min(1.,vSharpness)),5.6,compact);
 float shape=exp(-falloff*radius*radius)*(1.-smoothstep(mix(.62,.48,compact),mix(1.,.90,compact),radius));
 if(vStar>.01){
  // Rare four-point glints: a pin-sharp core with two hairline rays.
  vec2 a=abs(uv)*2.;
  float rays=max(exp(-a.x*15.)*exp(-a.y*3.4),exp(-a.y*15.)*exp(-a.x*3.4))*(1.-radius);
  shape=mix(shape,exp(-24.*radius*radius)+rays*.8,vStar);
 }
 gl_FragColor=vec4(vColor,shape*vAlpha);
}
`,ap=`
${op}
attribute vec3 aHome;
attribute vec3 aSeed;
attribute vec3 aColor;
attribute float aEnergy;
attribute vec4 aBud;
attribute vec3 aGrowth;
attribute vec4 aRootRoute;
uniform vec2 uResolution;
uniform float uDensityScale;
varying vec3 vColor;
varying float vAlpha;
varying float vAcross;
void main(){
 float along=position.x;
 vec4 tm=timing(aSeed,aGrowth.xy,aBud.w,aRootRoute,aHome+aBud.xyz);
#ifdef BURST_ONLY
 float duration=.20+aSeed.z*.16;
#else
 float duration=.11+aSeed.z*.17;
#endif
#ifdef FLOW_ONLY
 duration=.38+aSeed.z*.52;
#endif
 float sampleTime=max(0.,uTime-along*duration);
 vec3 p=flight(aHome,aSeed,aBud,aGrowth.xy,aRootRoute,tm,sampleTime);
 vec3 next=flight(aHome,aSeed,aBud,aGrowth.xy,aRootRoute,tm,sampleTime+.012);
 vec3 previous=flight(aHome,aSeed,aBud,aGrowth.xy,aRootRoute,tm,max(0.,sampleTime-.012));
#ifdef FLOW_ONLY
 float ft=uLiveTime-along*duration;
 vec3 home=registered(aHome),center=registered(aHome+aBud.xyz);
 p=choreograph(home,aSeed,center,aHome+aBud.xyz,aGrowth.y,ft).xyz;
 next=choreograph(home,aSeed,center,aHome+aBud.xyz,aGrowth.y,ft+.015).xyz;
 previous=choreograph(home,aSeed,center,aHome+aBud.xyz,aGrowth.y,ft-.015).xyz;
#endif
 vec4 clip=projectionMatrix*modelViewMatrix*vec4(p,1.);
 vec4 nc=projectionMatrix*modelViewMatrix*vec4(next,1.);
 vec4 pc=projectionMatrix*modelViewMatrix*vec4(previous,1.);
 vec2 tangent=(nc.xy/max(nc.w,.001)-pc.xy/max(pc.w,.001))*uResolution;
 vec2 normal=normalize(vec2(-tangent.y,tangent.x)+vec2(.00001));
 // Half-width in CSS pixels; the bright core is narrower than the strip.
 float width=(.29+aSeed.y*.26)*(1.-along*.90);
 clip.xy+=normal*position.y*width*2./uResolution*clip.w;
 gl_Position=clip;
 float phase=clamp((uTime-tm.x)/max(.001,tm.y-tm.x),0.,1.);
 float inflight=smoothstep(.08,.20,phase)*(1.-smoothstep(.71,.97,phase))*step(tm.x,uTime);
 // Burst rays: the same trail samples the shell expansion out of the bud.
 float open=burstOpen(uTime,tm.z,aSeed);
 float bursting=step(0.,tm.z)*aBud.w*step(tm.z,uTime)*(1.-smoothstep(.30,.82,open));
#ifdef BURST_ONLY
 float moving=bursting;
#else
 float moving=max(inflight*.28,bursting);
#endif
 float speedFade=smoothstep(.06,1.2,length(tangent));
 float silver=1.-warmBranch(aColor);
 vec3 tint=aColor/max(max(aColor.r,aColor.g),max(aColor.b,.01));
 vColor=mix(tint*vec3(1.12,.86,.6),tint*vec3(.95,1.,1.1),silver)*(.87+aEnergy*.18)*(1.+bursting*.7);
 vAlpha=moving*speedFade*step(tm.x,sampleTime)*(.10+aEnergy*.22)*(1.+bursting*1.1)*pow(1.-along,1.65)*sqrt(uDensityScale)*aboveWater(p);
#ifdef FLOW_ONLY
 moving=choreograph(home,aSeed,center,aHome+aBud.xyz,aGrowth.y,uLiveTime).w*uMotion;
 vColor=mix(vec3(1.10,1.20,1.38),vec3(1.4,.86,.40),step(.86,aSeed.z));
 vAlpha=moving*speedFade*(.065+aEnergy*.13)*pow(1.-along,1.8)*sqrt(uDensityScale);
#endif
 vAcross=position.y;
 // Cull whole idle strips (per instance, so no vertex is pulled off alone).
 if(moving<.001)gl_Position=vec4(2.,2.,2.,1.);
}
`,lp=`
varying vec3 vColor;
varying float vAlpha;
varying float vAcross;
void main(){
 float edge=1.-smoothstep(.65,1.,abs(vAcross));
 gl_FragColor=vec4(vColor,vAlpha*exp(-vAcross*vAcross*4.5)*edge);
}
`;var m_=n=>Math.max(0,Math.min(1,n)),hu=(n,t=0)=>{if(!n.length)return null;let e=t%3;n.sort((s,r)=>s.p[e]-r.p[e]);let i=n.length>>1;return{node:n[i],axis:e,left:hu(n.slice(0,i),t+1),right:hu(n.slice(i+1),t+1)}};function g_(n,t,e=8){let i=[],s=r=>{if(!r)return;let o=r.node.p,a=(t[0]-o[0])**2+(t[1]-o[1])**2+(t[2]-o[2])**2;if(i.length<e||a<i.at(-1).distance){let l=i.findIndex(h=>a<h.distance);l<0&&(l=i.length),i.splice(l,0,{node:r.node,distance:a}),i.length>e&&i.pop()}let c=t[r.axis]-o[r.axis];s(c<0?r.left:r.right),(i.length<e||c*c<i.at(-1).distance)&&s(c<0?r.right:r.left)};return s(n),i}function cp(n){let t=[];for(let r=0;r<n.count;r++){let o=r*3;n.growth[o+1]<.5||n.branchDensity[r]<.18||n.energies[r]<.35||t.push({p:[n.positions[o],n.positions[o+1],n.positions[o+2]],time:le.growStart+Math.max(0,Math.min(1.15,n.growth[o]))*le.growSpan+(n.seeds[o]-.5)*.44})}let e=hu(t),i={samples:0,lateUnsupported:0,min:1/0,max:0};function s(r){let a=g_(e,r.toArray()).filter(l=>l.distance<.25*.25),c;if(a.length<3)c=10.8,i.lateUnsupported++;else{let l=a.map(h=>h.node.time).sort((h,f)=>h-f);c=l[Math.floor((l.length-1)*.75)]+.1}return i.samples++,i.min=Math.min(i.min,c),i.max=Math.max(i.max,c),c}return{at:s,stats:i}}function hp(n,t,e=.24){let i=[];for(let s=0;s<n.length;s++){let r=n[s],o=r.times.slice(),a=t[s],c=0,l=-1;if(a>=0){let h=i[a],f=r.points[0],u=1/0;for(let d=1;d<h.points.length;d++){let g=h.points[d-1],x=h.points[d],m=x.x-g.x,p=x.y-g.y,E=x.z-g.z,w=m_(((f.x-g.x)*m+(f.y-g.y)*p+(f.z-g.z)*E)/Math.max(1e-12,m*m+p*p+E*E)),b=(f.x-g.x-w*m)**2+(f.y-g.y-w*p)**2+(f.z-g.z-w*E)**2;b<u&&(u=b,l=(d-1+w)/(h.points.length-1),c=Math.max(h.times[d-1],h.times[d])+e)}}for(let h=0;h<o.length;h++)o[h]=Math.max(o[h],h?o[h-1]:c);i.push({...r,times:o,parent:a,gate:c,attachment:l})}return i}var Vo=Object.freeze({positions:3,colors:3,seeds:3,energies:1,normals:3,florets:2,crownWeights:1,buds:4,growth:3,branchOutline:3}),up="balanced-crown-volume-v2",cc=39*12.2/1456,uu=(n,t,e)=>Math.max(t,Math.min(e,n)),re=n=>{let t=uu(n,0,1);return t*t*(3-2*t)},dp=Object.freeze([{angle:1.18,depth:1.18,lift:.06,silver:75e3,branches:4200,light:.94},{angle:-1.05,depth:1.12,lift:-.02,silver:7e4,branches:3600,light:.88}]),x_=Object.freeze([{at:[-2,.18,-1.6],radius:[.82,.7,.95],shift:[-1.02,.19,.08],core:.45},{at:[-2.188,.433,-1.848],radius:[.24,.2,.23],shift:[-.28,.15,.02],core:.2},{at:[-1.15,.55,-.65],radius:[.65,.55,.6],shift:[-.78,.14,-.04],core:.4},{at:[.85,1.1,.45],radius:[.95,.45,.75],shift:[-.22,.43,.08],core:.38},{at:[.25,.45,-1.15],radius:[.9,.5,.7],shift:[1.03,.06,-.06],core:.42},{at:[-.67,.19,-1.95],radius:[.54,.4,.57],shift:[-.55,.11,.05],core:.35},{at:[.63,.588,-1.85],radius:[.56,.45,.52],shift:[.34,-.14,-.03]},{at:[-1.071,.108,-4.85],radius:[.58,.4,.58],shift:[-.42,-.1,.18]},{at:[.905,.005,-4.039],radius:[.6,.42,.6],shift:[-.48,-.07,.16]},{at:[2.352,.166,-2.292],radius:[.58,.43,.55],shift:[-.32,-.08,.1]}]),v_=Object.freeze([{at:[3.34,-.32,-3.1],radius:[.7,.55,.85],shift:[-.48,.09,.26],core:.45},{at:[.408,.398,-1.528],radius:[.55,.4,.5],shift:[-.08,.1,.05],core:.3},{at:[.543,.164,-1.969],radius:[.46,.32,.4],shift:[-.12,-.13,-.26],core:.3},{at:[.97,.448,-1.88],radius:[.4,.36,.44],shift:[.03,.02,-.15],core:.25}]);function fp(n){let t=[0,0,0];for(let e of v_){let i=n.reduce((r,o,a)=>r+((o-e.at[a])/e.radius[a])**2,0);if(i>=1)continue;let s=1-re((Math.sqrt(i)-e.core)/(1-e.core));for(let r=0;r<3;r++)t[r]+=e.shift[r]*s}return n.map((e,i)=>e+t[i])}function y_(n){let t=[0,0,0];for(let e of x_){let i=n.reduce((o,a,c)=>o+((a-e.at[c])/e.radius[c])**2,0);if(i>=1)continue;let s=e.core??0,r=1-re((Math.sqrt(i)-s)/(1-s));for(let o=0;o<3;o++)t[o]+=e.shift[o]*r*.72}return n.map((e,i)=>e+t[i])}var __=Object.freeze([{at:[-1.893,-.105,-1.603],factor:.8},{at:[-1.165,-.016,-.973],factor:.82},{at:[-.157,.365,-1.495],factor:.76},{at:[.63,.588,-1.85],factor:.82}]),M_=Object.freeze([{at:[-1.893,-.105,-1.603],core:[-.186,.172,-.081]},{at:[-2.182,.636,-.818],core:[.038,.022,.108]},{at:[-2.144,.271,-1.165],core:[.023,-.073,-.322]},{at:[-2.188,.433,-1.848],core:[.052,-.375,-.019]},{at:[-2.091,.187,-2.046],core:[-.069,-.037,.317]},{at:[-.671,1.665,.66],core:[.038,-.26,.034]},{at:[-1.331,.566,-.518],core:[-.004,.045,-.013]},{at:[-2.042,.743,-.593],core:[.104,.029,.058]},{at:[.676,1.872,1.739],core:[.107,.032,-.086]},{at:[-1.13,.955,-.016],core:[-.116,.077,.109]},{at:[-.157,1.322,.945],core:[-.12,.089,-.039]},{at:[-1.262,.494,-.766],core:[-.119,.023,.043]}]);function b_(n,t){let e=Mi(n,!1),i=1;for(let r of __){let o=Math.hypot(...e.map((a,c)=>a-r.at[c]));o<.22&&(i*=1-(1-r.factor)*(1-re(o/.22)))}let s=t;if(i!==1){let r=Math.SQRT1_2,o=(t[0]-t[2])*r*i,a=(t[0]+t[2])*r/i;s=[(o+a)*r,t[1],(a-o)*r]}for(let r of M_){let o=Math.hypot(...e.map((u,d)=>u-r.at[d]));if(o>=.1)continue;let a=s.map((u,d)=>u-r.core[d]),c=.6,l=Math.hypot(...a)/c;if(l>=1)break;let f=.65*(1-re(o/.1))*(1-l*l)**2;s=s.map((u,d)=>u+a[d]*f);break}return s}function S_([n,t,e]){let i=-e+.35*n,s=re((i-2.05)/.32)*(1-re((i-5.2)/.55))*re((t+.9)/.35)*(1-re((t-.8)/.45));if(s===0)return[n,t,e];let r=.08*Math.sin(t*3.5+n*1.1)+.035*Math.sin(t*8-n*1.6),o=i+r,a=2.38+(i-2.53)*.84,c=3.41+(i-3.34)*.78,l=4.25+(i-4.16)*.72,h=re((o-2.8)/.24),f=re((o-3.68)/.2),u=a+(c-a)*h,d=u+(l-u)*f,g=.1*(1-re((o-3.18)/.34)),x=re((t+.28-g)/.45),p=-(.76*(d-i)*x*s)/.65,E=.4*Math.max(0,p)*(1-re((i-3.15)/.35)),w=n+p,b=t+.53*p-E,v=e+p,y=re((i-3.75)/1.02)*s,T=-.1-.045*y;b=T+(b-T)*(1-.48*y);let S=.16*y*y;return w+=S*.24,v-=S,[w,b,v]}function Mi([n,t,e],i=!0){if(t<=-.35)return i?fp([n,t,e]):[n,t,e];let s=re((t+.35)/2.05),r=.3*Math.max(0,t-.9),o=.2*Math.max(0,-e-.4)*re((t-.25)/1.7),a=re((e-2.25)/.85)*re((-n-1.05)/.9)*re((t-.3)/.65),c=re((t+.15)/1.15),l=re((e-.15)/1.35),h=re((e-2.3)/.8),f=.88*l*(1-.82*h)*c,u=re((-e-.05)/1.9),d=.72*u*re((t+.15)/1.4),g=.38*re((-e-.4)/2.7)*re((t+.35)/1.5),x=.22*Math.exp(-(((e-.1)/1.2)**2))*s,m=.95*Math.exp(-(((e+.18)/.95)**2))*re((t-.7)/1.4)*(1-re((e-.3)/.7)),p=.22*u*re((t-.65)/1),E=[cc+(n-cc)*(1+.035*s)+.2*a,t-r-o-.04*a+f-d-.18*m-p,e*(1+.12*s)-.55*a-g+x+m];return i?fp(y_(E)):E}var w_=Object.freeze([{center:[-.35,.02,.9],size:.66,count:1600,donor:[-1.98,1.11]},{center:[.1,-.06,.45],size:.58,count:850,donor:[-1.98,1.11]},{center:[.9,.02,.45],size:.62,count:1250,donor:[-.14,1.33]},{center:[.3,-.1,.9],size:.48,count:650,donor:[-.14,1.33]},{center:[1.1,-.26,-.1],size:.46,count:900,donor:[1.11,1.04]}]);function T_(n){return n=Math.imul(n^n>>>16,2146121005),n=Math.imul(n^n>>>15,2221713035),(n^n>>>16)>>>0}var ki=(n,t,e)=>T_(n^Math.imul(t+1,2654435761)^Math.imul(e+1,2246822507))/4294967296;function fu(n,t,e,i){let s=re((t+2.18)/1.52),r=i.angle*s,o=Math.cos(r),a=Math.sin(r),c=n-cc,l=(c*a+e*o)*(1+(i.depth-1)*s),h=l>2.45?2.45+.9*Math.tanh((l-2.45)/.9):l<-3.55?-3.55-1.1*Math.tanh((-l-3.55)/1.1):l,f=re((t+.55)/1),u=.24*Math.max(0,t-.3),d=.16*Math.max(0,-h-.4)*f;return[cc+c*o-e*a,t+i.lift*s*(.6+.4*Math.sin(c*.7))-u-d,h]}function pp([n,t,e],i){let s=i===1?re((-e-3.12)/1.15)*re((t+.75)/.35)*(1-re((t-.5)/.45)):0,r=.3*s,o=Math.cos(r),a=Math.sin(r),c=n-1.5,l=e+3.1,h=.085*s*Math.exp(-(((n-.2)/.75)**2)-((e+3.88)/.5)**2);return{point:[1.5+c*o+l*a,t+h,-3.1-c*a+l*o],cos:o,sin:a}}function mp([n,t,e]){let i=re((e-2.35)/.65)*re((n-.65)/.55)*re((t-.45)/.9);return[n-.2*i,t-.38*i,e-.18*i]}function hn(n,t=0){let e=Mi(t?fu(...n,dp[t-1]):n);return mp(t===1?pp(e,t).point:e)}function gp(n){if(n?.crownVolumeVersion===up)return n;if(!Number.isSafeInteger(n?.count)||n.count<0)throw new TypeError("A sampled particle cloud with a valid count is required.");for(let[m,p]of Object.entries(Vo))if(!(n[m]instanceof Float32Array)||n[m].length!==n.count*p)throw new TypeError(`Invalid particle attribute: ${m}.`);let t=n.branchOutlineSourcePositions??n.positions,e=[],i=[];for(let m=0;m<n.count;m++){let p=m*3,E=m*4;n.growth[p+2]>=9||t[p+1]<-2.17||(n.growth[p+1]>.5?n.energies[m]>.24&&i.push(m):n.buds[E+3]>.65&&n.crownWeights[m]>.35&&t[p+1]>-.65&&n.energies[m]>.28&&n.colors[p+2]/Math.max(.001,n.colors[p])>.68&&e.push(m))}let s=dp.map((m,p)=>{let E=(w,b,v)=>{let y=T=>v===11?(.45+.55*n.crownWeights[T])*(.72+.28*n.florets[T*2]):1;return[...w].sort((T,S)=>ki(T,p,v)/y(T)-ki(S,p,v)/y(S)||T-S).slice(0,b)};return{fan:m,f:p,silver:E(e,m.silver,11),branches:E(i,m.branches,12)}}),r=w_.map((m,p)=>{let E=e.filter(v=>{let y=v*3,T=v*4;return Math.hypot(t[y]+n.buds[T]-m.donor[0],t[y+1]+n.buds[T+1]-m.donor[1])<.035}).sort((v,y)=>ki(v,p+10,11)-ki(y,p+10,11)),w=-1,b=1/0;for(let v of i){let y=v*3,T=m.center[0]-t[y],S=m.center[1]-t[y+1],M=m.center[2]-t[y+2],_=Math.hypot(T,S,M)+Math.max(0,-S)*4;_<b&&(b=_,w=v)}return{...m,id:p,indices:E.slice(0,m.count),parent:w,twigCount:E.length&&w>=0?160:0}}),o=s.reduce((m,p)=>m+p.silver.length,0)+r.reduce((m,p)=>m+p.indices.length,0),a=s.reduce((m,p)=>m+p.branches.length,0)+r.reduce((m,p)=>m+p.twigCount,0),c=o+a,l={...n,count:n.count+c};for(let[m,p]of Object.entries(Vo))l[m]=new Float32Array(l.count*p),l[m].set(n[m]);let h=new Uint32Array(l.count).fill(4294967295),f=new Uint8Array(l.count);for(let m=0;m<n.count;m++)h[m]=m;let u=n.count;for(let{fan:m,f:p,silver:E,branches:w}of s)for(let b of[...w,...E]){h[u]=b,f[u]=p+1;let v=b*3,y=b*4,T=n.growth[v+1]<.5;for(let[Z,et]of Object.entries(Vo))l[Z].set(n[Z].subarray(b*et,(b+1)*et),u*et);let S=u*3,M=u*4,_=n.positions[v],A=n.positions[v+1],R=n.positions[v+2],L=fu(_,A,R,m),I=[_+n.buds[y],A+n.buds[y+1],R+n.buds[y+2]],D=fu(...I,m),U=T?I[1]:A,z=re((U+2.18)/1.52),k=m.angle*z,J=Math.cos(k),Y=Math.sin(k);if(T){let Z=.86+.14*re((n.energies[b]-.72)/.25),et=_-I[0],ct=A-I[1],yt=R-I[2];L[0]=D[0]+(et*J-yt*Y)*Z,L[1]=D[1]+ct*Z,L[2]=D[2]+(et*Y+yt*J)*(1+(m.depth-1)*z)*Z}let at=n.normals[v],lt=n.normals[v+1],bt=n.normals[v+2],ft=[at*J-bt*Y,lt,(at*Y+bt*J)/m.depth],_t=Math.hypot(...ft)||1;for(let Z=0;Z<3;Z++)l.positions[S+Z]=L[Z],l.buds[M+Z]=D[Z]-L[Z],l.normals[S+Z]=ft[Z]/_t,l.seeds[S+Z]=ki(b,p,Z),l.colors[S+Z]*=T?m.light:.76;T&&(l.seeds[S]=n.seeds[v]*.986,l.seeds[S+1]=n.seeds[v+1]),l.growth[S]=uu(n.growth[v]+(ki(b,p,5)-.5)*.035,0,1),T&&(l.growth[S+2]*=.72),u++}for(let m of r){for(let v of m.indices){let y=v*3,T=v*4,S=u*3,M=u*4;for(let[z,k]of Object.entries(Vo))l[z].set(n[z].subarray(v*k,(v+1)*k),u*k);let _=.37*(m.id-2),A=Math.cos(_),R=Math.sin(_),L=[-n.buds[T],-n.buds[T+1],-n.buds[T+2]],I=[(L[0]*A-L[2]*R)*m.size,L[1]*m.size,(L[0]*R+L[2]*A)*m.size];for(let z=0;z<3;z++)l.positions[S+z]=m.center[z]+I[z],l.buds[M+z]=-I[z],l.colors[S+z]*=.9,l.seeds[S+z]=ki(v,m.id+10,z);let D=n.normals[y],U=n.normals[y+2];l.normals[S]=D*A-U*R,l.normals[S+2]=D*R+U*A,l.seeds[S]=n.seeds[y]*.986,l.seeds[S+1]=n.seeds[y+1],l.growth[S]=uu(.61+m.id*.046+(n.growth[y]-.5)*.08,0,1),l.growth[S+2]*=.72,u++}if(!m.twigCount)continue;let p=m.parent*3,E=Array.from(n.positions.subarray(p,p+3)),w=m.center,b=Math.hypot(...E.map((v,y)=>w[y]-v));for(let v=0;v<m.twigCount;v++,u++){let y=v/(m.twigCount-1),T=Math.sin(Math.PI*y),S=u*3,M=u*4;for(let[A,R]of Object.entries(Vo))l[A].set(n[A].subarray(m.parent*R,(m.parent+1)*R),u*R);let _=.009*T*(1-y*.7);for(let A=0;A<3;A++){let R=A===1?-.1*b*T:A===2?.07*b*T:.035*b*Math.sin(y*Math.PI*2);l.positions[S+A]=E[A]+(w[A]-E[A])*y+R+(ki(v,m.id+20,A)-.5)*_,l.buds[M+A]=0,l.colors[S+A]*=.76,l.seeds[S+A]=ki(v,m.id+20,A+3)}l.buds[M+3]=0,l.branchOutline[u*3]=0,l.branchOutline[u*3+1]=0,l.branchOutline[u*3+2]=0,l.growth[S]=n.growth[p]+(.58+m.id*.046-n.growth[p])*y,l.growth[S+1]=1,l.growth[S+2]=1}}let d=new Float32Array(l.count).fill(1),g=sc(n);d.set(g.values);for(let m=0;m<l.count;m++){let p=m*3,E=m*4;if(l.growth[p+2]>=9)continue;let w=Array.from(l.positions.subarray(p,p+3));if(l.growth[p+1]<.5&&l.buds[E+3]>.05){let v=w.map((S,M)=>S+l.buds[E+M]),y=Mi(v),T=b_(v,w.map((S,M)=>S-v[M]));for(let S=0;S<3;S++)l.positions[p+S]=y[S]+T[S],l.buds[E+S]=-T[S]}else l.positions.set(Mi(w),p)}for(let m=0;m<l.count;m++){let p=m*3,E=m*4;if(l.growth[p+1]>.5||l.growth[p+2]>=9||l.colors[p+2]/Math.max(.001,l.colors[p])<=.68)continue;let w=Array.from(l.positions.subarray(p,p+3)),b=S_(w);for(let v=0;v<3;v++)l.positions[p+v]=b[v],l.buds[E+v]+=w[v]-b[v]}let x=0;for(let m=0;m<l.count;m++){if(f[m]!==1)continue;let p=m*3,E=m*4,w=Array.from(l.positions.subarray(p,p+3)),b=l.growth[p+1]<.5&&l.buds[E+3]>.05,v=b?w.map((M,_)=>M+l.buds[E+_]):w,y=pp(v,1);if(y.sin===0&&y.cos===1&&y.point[1]===v[1])continue;if(b){let M=w.map((A,R)=>A-v[R]),_=[M[0]*y.cos+M[2]*y.sin,M[1],-M[0]*y.sin+M[2]*y.cos];for(let A=0;A<3;A++)l.positions[p+A]=y.point[A]+_[A],l.buds[E+A]=-_[A]}else l.positions.set(y.point,p);let T=l.normals[p],S=l.normals[p+2];l.normals[p]=T*y.cos+S*y.sin,l.normals[p+2]=-T*y.sin+S*y.cos,x++}for(let m=0;m<l.count;m++){let p=m*3,E=m*4;if(l.growth[p+2]>=9)continue;let w=Array.from(l.positions.subarray(p,p+3)),v=l.growth[p+1]<.5&&l.buds[E+3]>.05?w.map((T,S)=>T+l.buds[E+S]):w,y=mp(v);for(let T=0;T<3;T++)l.positions[p+T]+=y[T]-v[T]}return{...l,structureSource:n,structureSources:h,structureFans:f,crownTone:d,crownToneUnmatched:g.unmatched,bridgeClusters:r.filter(m=>m.indices.length).length,crownVolumeVersion:up,addedVolumeParticles:c,crownVolumeClusters:s.filter(m=>m.silver.length).length,addedVolumeSilver:o,addedVolumeBranches:a,tipAdjustedParticles:x}}var on=12.2/1456,Hi=n=>Math.max(0,Math.min(1,n)),ye=n=>{let t=Hi(n);return t*t*(3-2*t)},Ie=(n,t,e)=>n+(t-n)*e,Nr=new Set([0,1,5]),Vi=n=>new N((n[0]-728)*on,(408-n[1])*on,n[2]),us=oe.map(n=>new $e(n.map(Vi),!1,"centripetal")),xp=us.slice();for(let n of[1,5]){let t=us[n].points[0],e=oe[0],i=1/0,s=0;for(let f=1;f<e.length;f++){let u=Vi(e[f-1]),d=Vi(e[f]),g=d.clone().sub(u),x=g.x*g.x+g.y*g.y,m=Hi(((t.x-u.x)*g.x+(t.y-u.y)*g.y)/x),p=(t.x-u.x-g.x*m)**2+(t.y-u.y-g.y*m)**2;p<i&&(i=p,s=(f-1+m)/(e.length-1))}let r=us[0].getPoint(s),o=us[0].getTangent(s),a=us[n].points.map(f=>f.clone()),c=a[1].distanceTo(a[0]),l=a[2].clone().sub(r).normalize(),h=o.multiplyScalar(.34).addScaledVector(l,.66).normalize();if(a[0].copy(r),a[1].copy(r).addScaledVector(h,c),n===1)for(let f=0;f<a.length;f++)a[f].copy(xp[1].points[f]);else{let f=[.58,.7,.9],u=[.02,.035,.015];for(let d=1;d<=3;d++)a[d].z=Ie(r.z,a[d].z,f[d-1]),a[d].x+=u[d-1]}us[n]=new $e(a,!1,"centripetal")}var hc=oe.map(n=>{let t=0;return n.map((e,i)=>(i&&(t+=Math.hypot(e[0]-n[i-1][0],e[1]-n[i-1][1])*on),t))});function Ur(n,t){let e=Hi(t)*(hc[n].length-1),i=Math.min(hc[n].length-2,Math.floor(e));return Ie(hc[n][i],hc[n][i+1],e-i)}function Gs(n,t){return n===0?.158-.053*ye(t/1.3)-.055*ye((t-1.12)/.9):n===1?.075-.037*ye(t/.65):.1-.043*ye(t/1.2)}function Ho(n,t){return n===0?ye(t/.16)*(1-ye((t-1.62)/.48)):1-ye((t-.65)/.66)}function Or(n){if(!Nr.has(n))return null;let t=oe[n],e=Array.from({length:121},(i,s)=>{let r=s/120,o=r*(t.length-1),a=Math.min(t.length-2,Math.floor(o)),c=o-a,l=Ie(t[a][0],t[a+1][0],c),h=Ie(t[a][1],t[a+1][1],c),f=vp(l,h),u=Ie(t[a][3],t[a+1][3],c),d=ye(f.other/(u*.6+5)),g=Ho(n,Ur(n,r))*d;return xp[n].getPoint(r).lerp(us[n].getPoint(r),g)});return new $e(e,!1,"centripetal")}function uc(n,t,e){if(!Nr.has(n))return e;let i=Ur(n,t),s=Ho(n,i);return Ie(e,Gs(n,i),s)}var du=oe.flatMap((n,t)=>{let e=0;return n.slice(1).map((i,s)=>{let r=n[s],o=i[0]-r[0],a=i[1]-r[1],c=Math.hypot(o,a),l={a:r,b:i,dx:o,dy:a,length:c,along:e,id:t,index:s};return e+=c*on,l})});function vp(n,t){let e=1/0,i=1/0,s;for(let r of du){let o=Hi(((n-r.a[0])*r.dx+(t-r.a[1])*r.dy)/(r.length*r.length)),a=(n-r.a[0]-r.dx*o)**2+(t-r.a[1]-r.dy*o)**2;Nr.has(r.id)||(i=Math.min(i,a)),a<e&&(e=a,s={...r,t:o})}return{...s,distance:Math.sqrt(e),other:Math.sqrt(i)}}function hi(n,t,e){let i=us[n.id].getPoint(Hi(e)),s=new N(...hn(i.toArray()));if(!t)return s;let r=new N(...hn(i.toArray(),t)),o=Ur(n.id,e),a=n.id===0?ye((o-1.62)/.48):ye(o/1.12);return s.lerp(r,a)}function Ws(n,t,e){return hi({id:n},t,e)}function Hs(n,t,e){let i=1/0,s=.1,r=null,o=0;for(let a of t){if(e!==void 0&&a.id!==e)continue;let c=n.x-a.a.x,l=n.y-a.a.y,h=n.z-a.a.z,f=Hi((c*a.delta.x+l*a.delta.y+h*a.delta.z)/a.length2),u=(c-a.delta.x*f)**2+(l-a.delta.y*f)**2+(h-a.delta.z*f)**2;u<i&&(i=u,s=Ie(a.ra,a.rb,f),r=a,o=f)}return{distance:Math.sqrt(i),radius:s,segment:r,progress:o}}function yp(n){let{structureSource:t,structureSources:e,structureFans:i,branchOutlineSourcePositions:s,...r}=n;if(!t||!e)return n;let o=n.positions.slice(),a=n.normals.slice(),c=new Float32Array(n.count).fill(1),l=new Array(t.baseCount),h=0;for(let y=0;y<n.count;y++){let T=y*3,S=e[y];if(S>=t.baseCount||n.growth[T+1]<.5||n.growth[T+2]>=9)continue;let M=l[S],_=S*3;if(M||(l[S]=M=vp(t.positions[_]/on+728,408-t.positions[_+1]/on)),!Nr.has(M.id))continue;let A=M.along+M.length*on*M.t,R=Ie(M.a[3],M.b[3],M.t)*on,L=Ho(M.id,A),I=ye((M.other-M.distance)/(M.a[3]*.6+5)),D=L*I;if(D<1e-5)continue;let U=(M.a[0]+M.dx*M.t-728)*on,z=(408-M.a[1]-M.dy*M.t)*on,k=((t.positions[_]-U)*-M.dy-(t.positions[_+1]-z)*M.dx)/M.length,J=t.positions[_+2]-Ie(M.a[2],M.b[2],M.t),Y=k/Math.max(.015,R),at=J/Math.max(.03,Math.min(.34,R*1.1)),lt=(M.index+M.t)/(oe[M.id].length-1),bt=i[y],ft=hi(M,bt,lt),_t=hi(M,bt,lt+.001).sub(hi(M,bt,lt-.001)),Z=_t.clone().normalize(),et=new N(Z.y,-Z.x,0).normalize(),ct=et.clone().cross(Z).normalize(),yt=Gs(M.id,A),Tt=ft.addScaledVector(et,Y*yt).addScaledVector(ct,at*yt*.94);for(let Zt=0;Zt<3;Zt++)o[T+Zt]=Ie(n.positions[T+Zt],Tt.getComponent(Zt),D);let Ht=et.multiplyScalar(Y).addScaledVector(ct,at).normalize();new N().fromArray(a,T).lerp(Ht,D).normalize().toArray(a,T);let B=bt?M.id===0?.065:.065+.935*ye(A/1.12):M.id===0?.65:M.id===1?.42:.78;if(c[y]*=Ie(1,B,D),M.id===1){let Zt=Vi(M.a),Dt=Vi(M.b),Ft=Zt.distanceTo(Dt)*(oe[M.id].length-1),Et=Math.min(1,_t.length()/(.002*Math.max(.001,Ft)));c[y]*=Ie(1,Et,D)}h++}let f=Vi(oe[1][0]),u=(y,T)=>{let S=T.x/on+728,M=408-T.y/on,_=1/0,A;for(let R of du){if(R.id!==y)continue;let L=Hi(((S-R.a[0])*R.dx+(M-R.a[1])*R.dy)/(R.length*R.length)),I=(S-R.a[0]-R.dx*L)**2+(M-R.a[1]-R.dy*L)**2;I<_&&(_=I,A={...R,t:L})}return A},d=(y,T,S)=>{let M=y.along+y.length*on*y.t,_=Ie(y.a[3],y.b[3],y.t)*on,A=(y.a[0]+y.dx*y.t-728)*on,R=(408-y.a[1]-y.dy*y.t)*on,L=((T.x-A)*-y.dy-(T.y-R)*y.dx)/(y.length*Math.max(.015,_)),I=(T.z-Ie(y.a[2],y.b[2],y.t))/Math.max(.03,Math.min(.34,_*1.1)),D=(y.index+y.t)/(oe[y.id].length-1),U=hi(y,S,D),z=hi(y,S,D+.001).sub(hi(y,S,D-.001)).normalize(),k=new N(z.y,-z.x,0).normalize(),J=k.clone().cross(z).normalize(),Y=U.addScaledVector(k,L*Gs(y.id,M)).addScaledVector(J,I*Gs(y.id,M)*.94),at=k.multiplyScalar(L).addScaledVector(J,I).normalize(),lt=S?y.id===0?.065:.065+.935*ye(M/1.12):y.id===0?.65:.42;return{position:Y,normal:at,q:Math.hypot(L,I),density:lt}};for(let y=0;y<n.count;y++){let T=e[y],S=y*3;if(T>=t.baseCount||n.growth[S+1]<.5)continue;let M=l[T];if(!M||M.id!==0&&M.id!==1)continue;let _=new N().fromArray(t.positions,T*3),A=_.distanceTo(f);if(A>=.34)continue;let R=1-ye((A-.12)/.22),L=i[y],I=d(u(0,_),_,L),D=d(u(1,_),_,L),U=ye((I.q-D.q+.65)/1.3),z=I.position.lerp(D.position,U),k=I.normal.lerp(D.normal,U).normalize();new N().fromArray(o,S).lerp(z,R).toArray(o,S),new N().fromArray(a,S).lerp(k,R).normalize().toArray(a,S),c[y]=Ie(c[y],Ie(I.density,D.density,U),R)}let g=16.551724137931036,x=-.32678571428571423,m=1.6541384108566706,p=y=>new N((y.x+x)*(1-y.z/g)-x,(y.y+m)*(1-y.z/g)-m,y.z),E=y=>new N((y.x+x)/(1-y.z/g)-x,(y.y+m)/(1-y.z/g)-m,y.z),w=y=>p(hi({id:0},0,y)),b=Array.from({length:97},(y,T)=>{let S=.08+.33*T/96;return{u:S,p:w(S)}}),v=0;for(let y=0;y<n.count;y++){let T=e[y],S=y*3;if(T>=t.baseCount||i[y]!==0||n.growth[S+1]<.5||l[T]?.id!==0)continue;let M=p(new N().fromArray(o,S)),_=1/0,A=0;for(let _t=1;_t<b.length;_t++){let Z=b[_t-1],et=b[_t],ct=et.p.clone().sub(Z.p),yt=Hi(M.clone().sub(Z.p).dot(ct)/ct.lengthSq()),Tt=M.clone().sub(Z.p).addScaledVector(ct,-yt).lengthSq();Tt<_&&(_=Tt,A=Ie(Z.u,et.u,yt))}let R=ye((A-.1)/.045)*(1-ye((A-.335)/.055));if(!R)continue;let L=Gs(0,Ur(0,A)),I=1-ye((Math.sqrt(_)/L-1.15)/.55),D=R*I;if(D<1e-4)continue;let U=w(A),z=w(A+.001).sub(w(A-.001)).normalize(),k=Math.abs(z.y)<.92?new N(0,1,0):new N(1,0,0),J=z.clone().cross(k).normalize(),Y=z.clone().cross(J).normalize(),at=n.seeds[S]*Math.PI*2,lt=J.multiplyScalar(Math.cos(at)).addScaledVector(Y,Math.sin(at)),bt=L*Math.sqrt(n.seeds[S+1])*(.86+.14*n.seeds[S+2]),ft=U.addScaledVector(lt,bt);E(M.lerp(ft,D)).toArray(o,S),new N().fromArray(a,S).lerp(lt,D).normalize().toArray(a,S),c[y]=Ie(c[y],.56+.14*n.seeds[S+2],D),v++}return{...r,positions:o,normals:a,branchDensity:c,branchStructureVersion:"orthogonal-stem-collars-v10",branchRebuiltParticles:h,branchHazeParticles:0,branchJunctionParticles:0,roundStemParticles:v}}function _p(n){let t="final-stem-density-v1";if(n?.branchFinalizationVersion===t)return n;if(!Number.isSafeInteger(n?.count)||n.count<0)throw new TypeError("A complete particle cloud is required.");for(let[w,b]of Object.entries({positions:3,normals:3,colors:3,growth:3,buds:4,branchDensity:1,branchOutline:3}))if(!(n[w]instanceof Float32Array)||n[w].length!==n.count*b)throw new TypeError(`Invalid final branch attribute: ${w}.`);let e=n.branchDensity.slice(),i=n.normals.slice(),s=n.branchOutline.slice(),r=[],o=[],a=[],c=(w,b,v,y,T=0,S=1,M=64)=>{for(let _=0;_<M;_++){let A=Ie(T,S,_/M),R=Ie(T,S,(_+1)/M),L=b(A),I=b(R),D=I.clone().sub(L),U=Ur(v,A),z=Ur(v,R);w.push({a:L,delta:D,length2:Math.max(1e-12,D.lengthSq()),id:v,family:y,ra:Gs(v,U),rb:Gs(v,z),wa:Ho(v,U),wb:Ho(v,z)})}};for(let w=0;w<3;w++){for(let b of Nr)c(b?o:r,v=>hi({id:b},w,v),b,w);for(let b of du){if(Nr.has(b.id))continue;let v=new N(...hn(Vi(b.a).toArray(),w)),y=new N(...hn(Vi(b.b).toArray(),w)),T=y.clone().sub(v);a.push({a:v,delta:T,length2:Math.max(1e-12,T.lengthSq()),id:b.id,family:w,ra:b.a[3]*on,rb:b.b[3]*on})}}let l=a.filter(w=>w.id>=19&&w.family===0),h=[];for(let w of n.bundleCurves||[]){let b=new $e(oe[w.path].map(Vi),!1,"centripetal"),v=S=>new N(...hn(b.getPoint(S).toArray(),w.family)),y=[];c(y,v,w.path,w.family,w.uStart,w.uEnd,48),h.push({first:w.firstParticle,end:w.firstParticle+w.count,axes:y});let T=(n.bundleNecks||[]).find(S=>S.path===w.path&&S.family===w.family);if(T){let S=[];c(S,M=>Ws(w.path,w.family,M).lerp(v(M),ye((M-(w.uStart-.09))/.105)),w.path,w.family,T.uStart,T.uEnd,40),h.push({first:T.firstParticle,end:T.firstParticle+T.count,axes:S})}}let f=hi({id:1},0,0),u=hi({id:5},0,0),d=w=>1-ye((w.distance/Math.max(.045,w.radius)-.15)/1.2),g=new N,x=new N,m=new N,p=(w,b,v)=>Number.isInteger(b)&&w>=b&&w<b+v,E={profileParticles:0,perimeterParticles:0,controlledPerimeterParticles:0,coreParticles:0,coreDensityBefore:0,coreDensityAfter:0,hazeParticles:0,junctionParticles:0,appendedBundleParticles:0,appendedJunctionParticles:0,normalParticles:0};for(let w=0;w<n.count;w++){let b=w*3,v=w*4;if(n.growth[b+2]>=9||p(w,n.rootContactBaseCount,n.rootContactAddedParticles))continue;let y=n.growth[b+1]>.5,T=Math.max(n.colors[b],n.colors[b+1],n.colors[b+2],.001),S=(n.colors[b]-n.colors[b+2])/T;if(!y&&(n.buds[v+3]>.18||S<-.02))continue;let M=h.find(lt=>w>=lt.first&&w<lt.end);if(!M&&(p(w,n.twigBaseCount,n.twigAddedParticles)||n.twigPresence?.[w])||(g.fromArray(n.positions,b),g.y<-2.56||g.y>-.38))continue;let _=Hs(g,r),A=Hs(g,o),R=M?Hs(g,M.axes):_.distance<A.distance?_:A;if(!R.segment||R.distance>Math.max(.9,R.radius*2.5))continue;let L=R.distance/Math.max(.015,R.radius),I=R.segment,D=Ie(I.wa,I.wb,R.progress),U=M?null:Hs(g,a),z=U?(1-ye((U.distance/Math.max(.018,U.radius)-.8)/1.1))*(1-ye((s[b]-.35)/.35)):0,k=(I.id===0?1:.9)*D,J=Math.max(1-ye((L-1.6)/1.15),Hi(s[b]/(I.id===0?1:.9))),Y=D*(1-z)*J,at=e[w];if(y&&Y>1e-4){let lt=Ie(1,.025,ye((L-.8)/.95));e[w]*=Ie(1,lt,Y),s[b]=Ie(s[b],k,Y),s[b+1]=Ie(s[b+1],1-ye((L-.12)/1),Y),s[b+2]=0,x.copy(g).sub(I.a).addScaledVector(I.delta,-R.progress),x.addScaledVector(I.delta,-x.dot(I.delta)/I.length2),x.lengthSq()>1e-12&&(x.normalize(),m.fromArray(i,b).lerp(x,Y).normalize().toArray(i,b),E.normalParticles++),E.profileParticles++,M&&E.appendedBundleParticles++,L>=1.15&&(E.perimeterParticles++,e[w]<at*.75&&E.controlledPerimeterParticles++)}if(_.distance<.9&&!M){let lt=Hs(g,l),bt=Math.max(1-ye((lt.distance-lt.radius*1.1-.015)/.1),1-ye((A.distance-A.radius*1.1-.015)/.1)),ft=ye((g.y+2.55)/.18)*(1-ye((g.y+1.05)/.33))*(1-ye((_.distance-.6)/.3))*(1-bt),_t=ye((_.distance/Math.max(.11,_.radius)-.95)/2),Z=Ie(1,.045,ft*_t);e[w]*=Z,Z<.95&&E.hazeParticles++}if(y&&Y>1e-4){let lt=Math.min(g.distanceTo(f),g.distanceTo(u));if(lt<.46){let bt=1-ye((lt-.28)/.18),ft=d(Hs(g,o,1)),_t=d(Hs(g,o,5)),Z=d(_),et=bt*Math.max(Z*ft,Z*_t,ft*_t)*(1-z);et>1e-4&&(e[w]/=1+1.35*et,s[b+2]=et,E.junctionParticles++,M&&E.appendedJunctionParticles++)}L<=.8&&(E.coreParticles++,E.coreDensityBefore+=at,E.coreDensityAfter+=e[w])}}return E.controlledPerimeterRatio=E.perimeterParticles?E.controlledPerimeterParticles/E.perimeterParticles:0,E.coreDensityRatio=E.coreDensityBefore?E.coreDensityAfter/E.coreDensityBefore:1,{...n,normals:i,branchDensity:e,branchOutline:s,branchFinalizationVersion:t,branchFinalizationStats:E,branchHazeParticles:E.hazeParticles,branchJunctionParticles:E.junctionParticles}}var Mp=1456,E_=816,mu=12.2/Mp,fc=Math.PI*2,A_=`
uniform float uTime;
uniform float uLiveTime;
uniform float uMotion;
uniform float uAlignmentDistance;
uniform vec2 uAlignmentOffset;
uniform vec2 uResolution;
uniform float uDensityScale;
uniform float uGhost;
${Fo}
${zo}
float scoreRise(float t,float along){
 float rise=smoothstep(1.5,3.,t)*(1.-smoothstep(8.2,8.93,t));
 return pow(.5+.5*sin(t*.72-along*1.6),3.)*.5*rise;
}
attribute vec3 aTangent;
attribute float aSide;
attribute float aAlong;
attribute float aSeed;
attribute float aWidth;
attribute float aRank;
attribute float aGrowth;
attribute float aReveal;
varying float vAcross;
varying float vAlong;
varying float vSeed;
varying float vAlpha;
varying float vHead;
varying float vGrowing;
varying vec3 vColor;
vec3 registered(vec3 p){
 p.xy=(p.xy+uAlignmentOffset)*(1.-p.z/uAlignmentDistance)-uAlignmentOffset;
 return swayTree(p,uLiveTime,uMotion);
}
void main(){
 vec4 center=projectionMatrix*modelViewMatrix*vec4(registered(position),1.);
 vec4 next=projectionMatrix*modelViewMatrix*vec4(registered(position+aTangent),1.);
 vec2 direction=(next.xy/max(next.w,.001)-center.xy/max(center.w,.001))*uResolution;
 vec2 normal=normalize(vec2(-direction.y,direction.x)+vec2(.00001));
 float reveal=aReveal;
 float drawn=smoothstep(reveal,reveal+.24,uTime);
 // No symmetric pre-echo: the accent can only follow established particles.
 float head=drawn*exp(-pow((uTime-reveal-.16)*4.0,2.));
 // A subpixel luminous core remains fine even when the tree is zoomed in;
 // only the travelling head is a touch wider.
 center.xy+=normal*aSide*aWidth*(1.+head*1.6)*2./uResolution*center.w;
 gl_Position=center;
 float growing=1.-smoothstep(6.3,10.8,uTime);
 float join=smoothstep(0.,.07,aAlong);
 float taper=mix(join,.28+.72*join,growing)*(1.-smoothstep(.85,1.,aAlong));
 float settled=smoothstep(10.4,12.,uTime);
 float pulse=pow(max(0.,sin(uLiveTime*1.1-aGrowth*10.+aSeed*5.)),16.)*settled*uMotion;
 float shimmer=pow(max(0.,sin(uLiveTime*.75-aAlong*14.+aSeed*31.)),14.)*uMotion;
 // During the quiet opening, a slow glow follows already-drawn branch fibres.
 // After 8.93 seconds the low-frequency impacts and subtler subdivisions
 // energise those same fibres, with a short depth-dependent delay.
 float musical=scoreRise(uLiveTime,clamp(aGrowth,0.,1.))*(1.-settled)
  +(rhythmImpact(uLiveTime,.025+.075*clamp((position.z+2.)/4.,0.,1.))*.85
   +rhythmDetail(uLiveTime,position)*.6)*settled;
 musical*=uMotion*drawn;
 vAlpha=(drawn*(.66+shimmer*.30+pulse*.55+musical*.95)+head*1.15)*taper*sqrt(uDensityScale);
 // During growth the beads carry the silhouette; the internal fibers follow
 // quietly, then regain the accepted fine highlights as the flowers open.
 float growthAccent=mix(.28,.55,smoothstep(reveal+.25,reveal+1.0,uTime));
 growthAccent=mix(growthAccent,1.,smoothstep(6.3,10.8,uTime));
 vAlpha*=growthAccent;
 // v2r: thin boughs' fibres sit a step below the trunk's.
 vAlpha*=mix(.6,1.,aRank);
 // cinematic-v2 growth fuse: the travelling head is no longer held back by
 // the quiet growth accent, so a hot point visibly runs up every bough.
 float fuse=head*taper*(1.-smoothstep(7.,9.,uTime))*uMotion;
 vAlpha+=fuse*1.35*sqrt(uDensityScale);
 // Held breath before the shared beat.
 vAlpha*=1.-.40*smoothstep(8.05,8.86,uTime)*(1.-step(8.93,uTime))*uMotion;
 // cinematic-v2: once the flowers open, the fibres step back. The outer
 // spans inside the crown fade furthest so they no longer draw lines through
 // the silver; beat responses can still lift what remains.
 float afterBloom=smoothstep(9.,12.,uTime);
 float crownReach=smoothstep(.45,.85,aAlong);
 vAlpha*=mix(1.,mix(.14,.04,crownReach),afterBloom);
 // Root wisps below the junction are retired with their particles.
 // A small silver accent is confined to the tips, not all branch edges.
 float silver=smoothstep(.70,1.,aAlong)*step(.56,aSeed)*.72;
 vColor=mix(vec3(1.18,.74,.39),vec3(.88,.94,1.12),silver);
 vColor=mix(vColor,vec3(2.3,1.55,.80),min(1.,head*.95))*(1.+pulse*.5+musical*.32);
 // v3h closing ghost: behind the lettering the gold veins regrow from the
 // root to the tips as the trunk and limbs of the tree's ghost (the limb
 // grains themselves are in \u706B\u6811). Crown spans stay faint.
 if(uGhost>0.){
  float front=smoothstep(aGrowth-.10,aGrowth+.02,uGhost*1.12);
  float ghostVein=front*(1.-smoothstep(.85,1.,aAlong))*mix(1.,.30,crownReach)*mix(.55,1.,aRank);
  vAlpha=ghostVein*1.05*sqrt(uDensityScale);
  vColor=vec3(1.18,.74,.39)*(1.+.5*smoothstep(aGrowth-.03,aGrowth,uGhost*1.12)*(1.-smoothstep(aGrowth,aGrowth+.03,uGhost*1.12)));
 }
 vAcross=aSide;vAlong=aAlong;vSeed=aSeed;vHead=head;vGrowing=growing;
}
`,C_=`
varying float vAcross;
varying float vAlong;
varying float vSeed;
varying float vAlpha;
varying float vHead;
varying float vGrowing;
varying vec3 vColor;
void main(){
 float wave=sin(vAlong*(22.+vSeed*19.)+vSeed*53.)
   +.33*sin(vAlong*71.+vSeed*17.);
 // Slightly longer unbroken runs than before: fine threads, not scratches.
 float broken=mix(smoothstep(-.34,.42,wave),1.,vHead);
 // Keep a faint connected core while a bough grows. Its settled broken,
 // granular appearance is unchanged once the canopy has opened.
 broken=mix(broken,max(broken,.32),vGrowing);
 float fiber=exp(-4.8*vAcross*vAcross)*(1.-smoothstep(.68,1.,abs(vAcross)));
 float alpha=vAlpha*broken*fiber;
 if(alpha<.001)discard;
 // Lift only emitted light, preserving the existing narrow, interrupted
 // coverage. Tiny longitudinal peaks keep the brighter fibers granular.
 float bead=pow(max(0.,sin(vAlong*(145.+vSeed*80.)+vSeed*37.)),8.);
 gl_FragColor=vec4(vColor*(1.33+.15*bead),alpha);
}
`,R_=`
uniform float uTime;
uniform float uLiveTime;
uniform float uMotion;
uniform float uPixelRatio;
uniform float uDensityScale;
uniform float uAlignmentDistance;
uniform vec2 uAlignmentOffset;
${Fo}
${zo}
attribute float aSeed;
attribute float aGrowth;
attribute float aReveal;
varying float vAlpha;
varying vec3 vColor;
void main(){
 vec3 p=position;
 p.xy=(p.xy+uAlignmentOffset)*(1.-p.z/uAlignmentDistance)-uAlignmentOffset;
 // Glints are attached to the same branch as fibres and settled points.
 p=swayTree(p,uLiveTime,uMotion);
 vec4 mv=modelViewMatrix*vec4(p,1.);
 gl_Position=projectionMatrix*mv;
 // The tip glint pops when the growth front arrives, then rests faintly.
 float reveal=aReveal;
 float settled=smoothstep(reveal,reveal+.6,uTime);
 float pop=settled*exp(-pow((uTime-reveal-.15)*2.6,2.))*uMotion;
 float pulse=pow(max(0.,sin(uLiveTime*(.65+aSeed*.4)+aSeed*59.)),18.);
 gl_PointSize=(1.1+pulse*.75*uMotion+pop*5.)*uPixelRatio;
 vAlpha=(settled*(.105+pulse*.34*uMotion)+pop*.55)*sqrt(uDensityScale);
 float growthAccent=mix(.28,.55,smoothstep(reveal+.25,reveal+1.0,uTime));
 vAlpha*=mix(growthAccent,1.,smoothstep(6.3,10.8,uTime));
 vAlpha+=pop*.85*sqrt(uDensityScale);
 vColor=mix(vec3(1.,.65,.31),vec3(.76,.87,1.),step(.56,aSeed)*.82);
 vColor=mix(vColor,vec3(2.2,1.5,.72),min(1.,pop*1.4));
}
`,P_=`
varying float vAlpha;
varying vec3 vColor;
void main(){
 float r=length(gl_PointCoord-.5)*2.;
 if(r>=1.)discard;
 gl_FragColor=vec4(vColor,vAlpha*exp(-4.*r*r)*(1.-smoothstep(.65,1.,r)));
}
`,I_=`
uniform float uTime;
uniform float uMotion;
uniform float uPixelRatio;
uniform float uAlignmentDistance;
uniform vec2 uAlignmentOffset;
attribute float aReveal;
attribute float aWeight;
varying float vAlpha;
void main(){
 vec3 p=position;
 p.xy=(p.xy+uAlignmentOffset)*(1.-p.z/uAlignmentDistance)-uAlignmentOffset;
 gl_Position=projectionMatrix*modelViewMatrix*vec4(p,1.);
 float a=uTime-aReveal;
 float pop=smoothstep(-.03,.03,a)*exp(-max(0.,a)/.24)*uMotion*(1.-smoothstep(7.4,8.4,uTime));
 gl_PointSize=(5.+17.*aWeight)*pop*uPixelRatio;
 vAlpha=pop*(.55+.45*aWeight);
 if(vAlpha<.003){gl_Position=vec4(2.,2.,2.,1.);gl_PointSize=0.;}
}
`,L_=`
varying float vAlpha;
void main(){
 vec2 uv=gl_PointCoord-.5;
 float r=length(uv)*2.;
 if(r>=1.)discard;
 vec2 a=abs(uv)*2.;
 float rays=max(exp(-a.x*16.)*exp(-a.y*2.6),exp(-a.y*16.)*exp(-a.x*2.6))*(1.-r);
 float shape=exp(-18.*r*r)+rays*.9+exp(-4.*r*r)*.18;
 gl_FragColor=vec4(vec3(2.4,1.62,.78),shape*vAlpha);
}
`;function Br(n,t,e,i,s,r,o){let a=n.getPoint(e),c=()=>(r&&ru(a.y,a.z)&&(a.z=su(a.y,.01)),a.fromArray(Mi(a.toArray()))),l=n.getTangent(e),h=Math.min(t.length-2,Math.floor(e*(t.length-1))),f=e*(t.length-1)-h,u=uc(o,e,He.lerp(t[h][3],t[h+1][3],f)*mu),d=He.smoothstep(e,0,.1)*(1-He.smoothstep(e,.88,1)),g=e*fc*(.72+s*.38)+i*2.39996+s*5,x=Math.sin(g)*.48+Math.sin(e*fc*(2.3+s)+s*13)*.12,m=u*x*d,p=Math.hypot(l.x,l.y)||1,E=new N(-l.y/p,l.x/p,0),w=new N().crossVectors(l,E).normalize(),b=u*(Math.cos(g)*.64+Math.sin(e*fc*1.8+s*7)*.11)*d;return a.addScaledVector(E,m).addScaledVector(w,b),c()}function pu(n,t){let e=Math.min(n.length-2,Math.floor(t*(n.length-1))),i=t*(n.length-1)-e;return n[e]+(n[e+1]-n[e])*i}function bp(n,{groundToWater:t=!0,cloud:e}={}){let i=e?cp(e):null,s=oe.map((D,U)=>Or(U)||new $e(D.map(([z,k,J])=>new N((z-Mp*.5)*mu,(E_*.5-k)*mu,J)),!1,"centripetal")),r=hp(oe.map((D,U)=>{let z=s[U],k=Math.max(40,Math.ceil(z.getLength()*42)),J=Array.from({length:k+1},(at,lt)=>Br(z,D,lt/k,0,(U+1)*.61803398875%1,t,U)),Y=J.map((at,lt)=>i?i.at(at):le.growStart+pu(ze[U],lt/k)*le.growSpan+.35);return{points:J,times:Y}}),cn),o=[],a=[],c=[],l=[],h=[],f=[],u=[],d=[],g=[],x=[],m=[],p=[],E=[],w=[],b=[],v=[],y=[],T=0;oe.forEach((D,U)=>{let z=s[U],k=r[U],J=[0,1,5].includes(U)?3:D[0][3]>4?2:1,Y=[1,5].includes(U)?2:J===3?5:J===2?3:1,at=J/Math.max(Y,[1,5].includes(U)?5:1),lt=He.smoothstep(D[0][3],2,12),bt=Math.max(40,Math.ceil(z.getLength()*42));for(let ft=0;ft<Y;ft++){let _t=((U+1)*.61803398875+ft*.38196601125)%1,Z=o.length/3,et=0;for(let ct=0;ct<=bt;ct++){let yt=ct/bt,Tt=Br(z,D,yt,ft,_t,t,U),Ht=Br(z,D,Math.max(0,yt-.002),ft,_t,t,U),B=Br(z,D,Math.min(1,yt+.002),ft,_t,t,U).sub(Ht).normalize().multiplyScalar(.008),Zt=pu(ze[U],yt);et=Math.max(et,k.times[ct],i?i.at(Tt):le.growStart+Zt*le.growSpan+.35);for(let Dt of[-1,1]){o.push(Tt.x,Tt.y,Tt.z),a.push(B.x,B.y,B.z),c.push(Dt),l.push(yt),h.push(_t),u.push(Zt),x.push(et);let Ft=.42+.58*Math.pow(1-yt,.55),Et=.92+.08*Math.sin(yt*fc*3.2+_t*17);f.push((.4+_t*.14)*at*Ft*Et),g.push(lt)}if(ct<bt){let Dt=Z+ct*2;d.push(Dt,Dt+1,Dt+2,Dt+1,Dt+3,Dt+2)}}if(ft===0&&cn[U]>=0){let ct=Br(z,D,0,ft,_t,t,U);ct.y>-2.52&&(b.push(ct.x,ct.y,ct.z),v.push(k.times[0]),y.push(He.clamp((D[0][3]-1.5)/6,.25,1)))}if(ft===0){let ct=Br(z,D,.94,ft,_t,t,U);m.push(ct.x,ct.y,ct.z),p.push(_t),E.push(pu(ze[U],.94)),w.push(et+.08)}T++}});let S=new Se;S.setAttribute("position",new pe(o,3)),S.setAttribute("aTangent",new pe(a,3)),S.setAttribute("aSide",new pe(c,1)),S.setAttribute("aAlong",new pe(l,1)),S.setAttribute("aSeed",new pe(h,1)),S.setAttribute("aWidth",new pe(f,1)),S.setAttribute("aRank",new pe(g,1)),S.setAttribute("aGrowth",new pe(u,1)),S.setAttribute("aReveal",new pe(x,1)),S.setIndex(d);let M=new Ze(S,new he({uniforms:n,vertexShader:A_,fragmentShader:C_,transparent:!0,depthWrite:!1,depthTest:!1,side:vn,blending:Ue}));M.name="fine-branch-light-fibers",M.frustumCulled=!1;let _=new Se;_.setAttribute("position",new pe(m,3)),_.setAttribute("aSeed",new pe(p,1)),_.setAttribute("aGrowth",new pe(E,1)),_.setAttribute("aReveal",new pe(w,1));let A=new rn(_,new he({uniforms:n,vertexShader:R_,fragmentShader:P_,transparent:!0,depthWrite:!1,depthTest:!1,blending:Ue}));A.name="branch-fiber-tip-glints",A.frustumCulled=!1;let R=new Se;R.setAttribute("position",new pe(b,3)),R.setAttribute("aReveal",new pe(v,1)),R.setAttribute("aWeight",new pe(y,1));let L=new rn(R,new he({uniforms:n,vertexShader:I_,fragmentShader:L_,transparent:!0,depthWrite:!1,depthTest:!1,blending:Ue}));L.name="branch-fork-flashes",L.frustumCulled=!1;let I=new nn;return I.name="restrained-branch-light-threads",I.add(M,A,L),I.userData={count:T,tipGlints:p.length,forkFlashes:v.length,method:"parent-connected-root-growth-fibers",revealClock:i?.stats,branchRevealProfiles:r.map(({times:D,parent:U,gate:z,attachment:k})=>({times:D,parent:U,gate:z,attachment:k}))},I}var gu=Object.freeze({positions:3,colors:3,seeds:3,energies:1,normals:3,florets:2,crownWeights:1,buds:4,growth:3}),Sp="source-grain-depth-fill-v1",D_=18e3,zr=Object.freeze([[15,-.75,.65,900,.65],[16,-.1,.78,800,.63],[18,.55,.62,1100,.6],[23,-1.65,.68,1e3,.54],[24,.15,.78,550,.67],[26,-.45,.62,1100,.53],[27,-1.8,.65,800,.58],[34,.25,.85,500,.7],[5,.35,.65,750,.62],[7,.55,.65,1e3,.54],[37,.8,.6,800,.66],[42,-.75,.6,700,.56]].map(([n,t,e,i,s])=>Object.freeze({sourceSpray:n,targetZ:t,depthScale:e,maximum:i,coreQ:s})));function F_(n){return n=Math.imul(n^n>>>16,2146121005),n=Math.imul(n^n>>>15,2221713035),(n^n>>>16)>>>0}var xu=(n,t,e)=>F_(n^Math.imul(t+1,2654435761)^Math.imul(e+1,2246822507))/4294967296,N_=n=>Math.max(0,Math.min(1,n));function wp(n){if(n?.crownFillVersion===Sp)return n;if(!Number.isSafeInteger(n?.count)||n.count<0)throw new TypeError("A sampled particle cloud with a valid count is required.");for(let[a,c]of Object.entries(gu))if(!(n[a]instanceof Float32Array)||n[a].length!==n.count*c)throw new TypeError(`Invalid particle attribute: ${a}.`);let t=zr.map(()=>[]);for(let a=0;a<n.count;a++){let c=a*3,l=a*4;if(n.growth[c+1]>.1||n.growth[c+2]>=9||n.buds[l+3]<.8||n.crownWeights[a]<.55||n.colors[c+2]/Math.max(n.colors[c],.001)<.72)continue;let h=n.positions[c],f=n.positions[c+1],u=n.positions[c+2],d=h+n.buds[l],g=f+n.buds[l+1],x=u+n.buds[l+2];for(let m=0;m<zr.length;m++){let p=zr[m],E=Pe[p.sourceSpray];if((d-E.x)**2+(g-E.y)**2+(x-E.z)**2>1e-8)continue;let w=Bo[p.sourceSpray],b=h-E.x,v=f-E.y,y=(b*w.cos-v*w.sin)/E.rxw,T=(b*w.sin+v*w.cos)/E.ryw;if(y*y+T*T>p.coreQ)break;t[m].push({index:a,rank:xu(a,p.sourceSpray,7)});break}}let e=0,i=t.map((a,c)=>{a.sort((h,f)=>h.rank-f.rank||h.index-f.index);let l=a.slice(0,Math.min(zr[c].maximum,D_-e));return e+=l.length,l}),s={...n,count:n.count+e};for(let[a,c]of Object.entries(gu))s[a]=new Float32Array(s.count*c),s[a].set(n[a]);let r=n.count,o=[];for(let a=0;a<zr.length;a++){let c=zr[a],l=Pe[c.sourceSpray];for(let{index:h}of i[a]){for(let[p,E]of Object.entries(gu)){let w=n[p],b=s[p];for(let v=0;v<E;v++)b[r*E+v]=w[h*E+v]}let f=r*3,u=r*4;s.positions[f+2]=c.targetZ+(n.positions[h*3+2]-l.z)*c.depthScale,s.buds[u+2]=c.targetZ-s.positions[f+2];let d=s.normals[f],g=s.normals[f+1],x=s.normals[f+2]/c.depthScale,m=Math.hypot(d,g,x)||1;s.normals[f]=d/m,s.normals[f+1]=g/m,s.normals[f+2]=x/m;for(let p=0;p<3;p++)s.seeds[f+p]=xu(h,c.sourceSpray,p);s.growth[f]=N_(n.growth[h*3]+(xu(a,c.sourceSpray,4)-.5)*.07),s.growth[f+1]=0,r++}o.push({...c,sourceZ:l.z,candidateCount:t[a].length,addedParticles:i[a].length})}return{...s,crownFillVersion:Sp,baseCount:n.count,addedCrownClusters:o.filter(a=>a.addedParticles>0).length,addedParticles:e,crownFillConfigs:o}}var Tp="crown-support-graph-v2",Ep=12.2/1456,U_=18e3,Ap=Object.freeze({positions:3,colors:3,seeds:3,energies:1,normals:3,florets:2,crownWeights:1,buds:4,growth:3}),mc=(n,t,e)=>Math.min(e,Math.max(t,n)),O_=(n,t,e)=>n.map((i,s)=>i+(t[s]-i)*e),kr=(n,t)=>n.map((e,i)=>e-t[i]),dc=n=>Math.hypot(...n),Xs=n=>{let t=dc(n)||1;return n.map(e=>e/t)},Cp=(n,t)=>[n[1]*t[2]-n[2]*t[1],n[2]*t[0]-n[0]*t[2],n[0]*t[1]-n[1]*t[0]],Rp=n=>[(n[0]-728)*Ep,(408-n[1])*Ep,n[2]];function bi(n,t,e){let i=Math.imul(n+1471,2654435761)^Math.imul(t+41,2246822507)^Math.imul(e+3,3266489909);return i=Math.imul(i^i>>>16,2146121005),i=Math.imul(i^i>>>15,2221713035),((i^i>>>16)>>>0)/4294967296}function pc(n,t){let e=1-t,i=Math.sin(Math.PI*t)**2*(.71+.29*Math.sin(t*Math.PI*1.8+(n[5]?.[0]||0)));return[0,1,2].map(s=>e**3*n[0][s]+3*e*e*t*n[1][s]+3*e*t*t*n[2][s]+t**3*n[3][s]+(n[4]?.[s]||0)*i)}function B_(n){let t=Pe.map(s=>({id:`spray-${s.i}`,sourceSpray:s.i,center:[s.x,s.y,s.z],rx:s.rxw,ry:s.ryw,rz:s.rz,added:!1}));for(let[s,r]of(n.crownFillConfigs||[]).entries()){if(!r.addedParticles)continue;let o=Pe[r.sourceSpray];t.push({id:`fill-${s}`,sourceSpray:r.sourceSpray,center:[o.x,o.y,r.targetZ],rx:o.rxw*Math.sqrt(r.coreQ),ry:o.ryw*Math.sqrt(r.coreQ),rz:o.rz*r.depthScale,added:!0})}t.sort((s,r)=>s.center[1]-r.center[1]||s.center[0]-r.center[0]||s.center[2]-r.center[2]);let e=[];oe.slice(0,19).forEach((s,r)=>{for(let o=0;o<s.length-1;o++){let a=Rp(s[o]),c=Rp(s[o+1]);for(let l=0;l<=4;l++){let h=l/4;e.push({point:O_(a,c,h),tangent:Xs(kr(c,a)),growth:ze[r][o]+(ze[r][o+1]-ze[r][o])*h,parentKind:"original",parent:r,segment:o,t:h,order:0,used:0})}}});let i=[];for(let s of t){let r=[...s.center];r[1]-=s.ry*.23;let o=null,a=1/0;for(let _ of e){if(_.used>=2||_.order>=6)continue;let A=kr(r,_.point),R=dc(A),L=Math.max(0,-A[1]-.035),I=Math.max(0,Math.abs(A[0])-Math.max(.24,A[1]*1.25)),D=R+L*7+I*.42+Math.abs(A[2])*.1+_.used*.2+(_.parentKind==="original"?0:.045*_.order);D<a&&(o=_,a=D)}if(!o)continue;o.used++;let c=[...o.point],l=kr(r,c),h=dc(l),f=Xs(l),u=[...o.tangent];if(u.reduce((_,A,R)=>_+A*f[R],0)<.15)for(let _=0;_<3;_++)u[_]=f[_]*.72+(_===1?.28:0);let d=c.map((_,A)=>_+u[A]*h*.31),g=r.map((_,A)=>_-f[A]*h*.23),x=(s.sourceSpray+1)*2.3999+(s.added?1.7:0),m=Xs([-f[1],f[0],.38*Math.sin(x)]),p=Math.sin(x*1.37)>=0?1:-1,E=Math.min(.24,.035+h*.12)*p,w=m.map(_=>_*E),b=[c,d,g,r,w,[x]],v=Array.from({length:25},(_,A)=>pc(b,A/24)),y=v.slice(1).reduce((_,A,R)=>_+dc(kr(A,v[R])),0),T=i.length,S=mc(o.growth+y/11,o.growth,1),M={index:T,target:s.id,sourceSpray:s.sourceSpray,targetCenter:[...s.center],targetRadii:[s.rx,s.ry,s.rz],addedTarget:s.added,parentKind:o.parentKind,parent:o.parent,parentSegment:o.segment,parentT:o.t,order:o.order+1,start:c,end:r,control:b,points:v,length:y,growthStart:o.growth,growthEnd:S,radiusStart:mc(.013+y*.008,.015,.043),radiusEnd:.0045};i.push(M);for(let _ of[7,11,15,19]){let A=_/24;e.push({point:[...v[_]],tangent:Xs(kr(v[_+1],v[_-1])),growth:o.growth+(S-o.growth)*A,parentKind:"support",parent:T,segment:_,t:A,order:M.order,used:0})}}return i}function Pp(n){if(n?.supportVersion===Tp)return n;if(!Number.isSafeInteger(n?.count)||n.count<0)throw new TypeError("A valid sampled cloud is required.");for(let[l,h]of Object.entries(Ap))if(!(n[l]instanceof Float32Array)||n[l].length!==n.count*h)throw new TypeError(`Invalid particle attribute: ${l}.`);let t=B_(n),e=t.map(l=>Math.max(60,Math.ceil(l.length*150))),i=e.reduce((l,h)=>l+h,0),s=Math.min(1,U_/Math.max(1,i)),r=e.map(l=>Math.floor(l*s)),o=r.reduce((l,h)=>l+h,0),a={...n,count:n.count+o};for(let[l,h]of Object.entries(Ap))a[l]=new Float32Array(a.count*h),a[l].set(n[l]);let c=n.count;for(let[l,h]of t.entries()){let f=r[l];h.particles=f,h.firstParticle=c;for(let u=0;u<f;u++,c++){let d=u===0?0:u===f-1?1:(u+bi(l,u,0)*.86)/f,g=pc(h.control,d),x=Xs(kr(pc(h.control,Math.min(1,d+.003)),pc(h.control,Math.max(0,d-.003)))),m=Xs(Cp(x,Math.abs(x[1])<.94?[0,1,0]:[1,0,0])),p=Xs(Cp(x,m)),E=bi(l,u,1)*Math.PI*2,w=Math.pow(bi(l,u,2),.62),b=(h.radiusEnd+(h.radiusStart-h.radiusEnd)*(1-d)**1.45)*(.72+.28*Math.sin(d*17+l)**2)*w*(1.5+1.1*mc((d-.35)/.65,0,1)),v=u===0||u===f-1?0:b,y=m.map((D,U)=>D*Math.cos(E)+p[U]*Math.sin(E)),T=c*3,S=c*2,M=c*4;for(let D=0;D<3;D++)a.positions[T+D]=g[D]+y[D]*v,a.normals[T+D]=y[D],a.seeds[T+D]=bi(l,u,4+D);let _=bi(l,u,8)>.94,R=d>.14&&d<.88&&bi(l,u,13)<.42?.16:1,L=1-.62*mc((d-.4)/.6,0,1),I=(.26+bi(l,u,9)*.22)*(_?1.45:1)*R*L;a.colors[T]=I,a.colors[T+1]=I*(.34+bi(l,u,10)*.11),a.colors[T+2]=I*(.105+bi(l,u,11)*.055),a.energies[c]=.48+bi(l,u,12)*.27,a.florets[S]=.12,a.florets[S+1]=0,a.crownWeights[c]=1,a.buds[M+3]=0,a.growth[T]=h.growthStart+(h.growthEnd-h.growthStart)*d,a.growth[T+1]=1,a.growth[T+2]=1}}return{...a,supportVersion:Tp,supportParticles:o,supportBranches:t.length,supportPaths:t}}var Ip=n=>Math.max(0,Math.min(1,n)),vu=n=>{let t=Ip(n);return t*t*(3-2*t)},z_=new Map([[0,1],[1,.9],[5,.9],[2,.44],[3,.4],[6,.48],[10,.42]]),k_=oe.flatMap((n,t)=>{let e=0;return n.slice(1).map((i,s)=>{let r=n[s],o=i[0]-r[0],a=i[1]-r[1],c=o*o+a*a,l=Math.sqrt(c),h={a:r,b:i,branch:t,dx:o,dy:a,length2:c,length:l,along:e};return e+=l,h})});function Lp(n){if(n?.branchOutlineVersion==="branch-structure-tone-v1")return n;let t=new Float32Array(n.count*3),e=n.positions,i=12.2/n.sourceWidth,s=n.baseCount??n.count;for(let r=0;r<s;r++){let o=r*3;if(n.growth[o+1]<.5||n.growth[o+2]>=9)continue;let a=n.positions[o]/i+n.sourceWidth*.5,c=n.sourceHeight*.5-n.positions[o+1]/i,l=1/0,h=1/0,f,u=0;for(let y of k_){let T=Ip(((a-y.a[0])*y.dx+(c-y.a[1])*y.dy)/y.length2),S=(a-y.a[0]-y.dx*T)**2+(c-y.a[1]-y.dy*T)**2;y.branch!==0&&(h=Math.min(h,S)),S<l&&(l=S,f=y,u=T)}let d=z_.get(f.branch);if(!d)continue;let{a:g,b:x}=f,m=g[3]+(x[3]-g[3])*u,p=vu((m-1.8)/(f.branch===0?4.2:5.2));if(!p)continue;let E=g[2]+(x[2]-g[2])*u,w=Math.max(.03,Math.min(.34,m*i*1.1)),b=Math.hypot(Math.sqrt(l)/m,(n.positions[o+2]-E)/w),v=d*p*(1-vu((b-1.25)/1.5));t[r*3]=v,t[r*3+1]=1-vu((b-.24)/.9)}return{...n,positions:e,branchOutline:t,branchOutlineVersion:"branch-structure-tone-v1",branchOutlineSourcePositions:n.positions}}var Dp="connected-twig-grains-v6",yu=12.2/1456,V_=14e3,Fp=Object.freeze({positions:3,colors:3,seeds:3,energies:1,normals:3,florets:2,crownWeights:1,buds:4,growth:3,branchOutline:3,branchDensity:1,crownTone:1}),H_=[2,3,4,11,12,13,14],G_=[37,50,56,62,64],Mu=n=>Math.max(0,Math.min(1,n)),Vr=n=>{let t=Mu(n);return t*t*(3-2*t)},_u=(n,t,e)=>n+(t-n)*e,W_=n=>new N((n[0]-728)*yu,(408-n[1])*yu,n[2]);function Nn(n,t,e){let i=Math.imul(n+1973,2654435761)^Math.imul(t+71,2246822507)^Math.imul(e+13,3266489909);return i=Math.imul(i^i>>>16,2146121005),i=Math.imul(i^i>>>15,2221713035),((i^i>>>16)>>>0)/4294967296}function X_(n,t){let e=Mu(t)*(n.length-1),i=Math.min(n.length-2,Math.floor(e));return _u(n[i],n[i+1],e-i)}function q_(n,t){let e=1-t,i=Math.sin(Math.PI*t)**2*(.71+.29*Math.sin(t*Math.PI*1.8+(n[5]?.[0]||0)));return new N(...[0,1,2].map(s=>e**3*n[0][s]+3*e*e*t*n[1][s]+3*e*t*t*n[2][s]+t**3*n[3][s]+(n[4]?.[s]||0)*i))}function Y_(n){let e=[0],i=n(0),s=0;for(let r=1;r<=128;r++){let o=n(r/128);s+=o.distanceTo(i),e.push(s),i=o}return{length:s,parameter(r){let o=Mu(r)*s,a=0,c=128;for(;c-a>1;){let l=a+c>>1;e[l]<o?a=l:c=l}return(a+(o-e[a])/Math.max(1e-9,e[c]-e[a]))/128}}}function Np(n){if(n?.twigParticleVersion===Dp)return n;if(!Number.isSafeInteger(n?.count)||n.count<0)throw new TypeError("A valid refined tree cloud is required.");for(let[u,d]of Object.entries(Fp))if(!(n[u]instanceof Float32Array)||n[u].length!==n.count*d)throw new TypeError(`Invalid refined tree attribute: ${u}.`);let t=n.supportPaths||[],e=new Set,i=u=>{let d=t[u];!d||e.has(u)||(e.add(u),d.parentKind==="support"&&i(d.parent))};G_.forEach(i);let s=H_.map(u=>{let d=new $e(oe[u].map(W_),!1,"centripetal");return{kind:"source",id:u,point:g=>d.getPoint(g),growth:g=>X_(ze[u],g),radius:Math.max(.016,Math.min(.036,oe[u][0][3]*yu*.44))}});for(let u of[...e].sort((d,g)=>d-g)){let d=t[u];s.push({kind:"support",id:u,point:g=>q_(d.control,g),growth:g=>_u(d.growthStart,d.growthEnd,g),radius:Math.max(.014,Math.min(.034,d.radiusStart*1.12)),sourceParticles:d.particles})}let r=[];for(let u of s)for(let d=0;d<1;d++){let g=E=>new N(...hn(u.point(E).toArray(),d)),x=Y_(g),m=d?.85:1,p=Math.ceil((u.kind==="support"?u.sourceParticles*2.2:x.length*220)*m);p>0&&x.length>.02&&r.push({...u,family:d,point:g,arc:x,desired:p})}let o=r.reduce((u,d)=>u+d.desired,0),a=Math.min(1,V_/Math.max(1,o));for(let u of r)u.count=Math.floor(u.desired*a);let c=r.reduce((u,d)=>u+d.count,0),l={...n,count:n.count+c};for(let[u,d]of Object.entries(Fp))l[u]=new Float32Array(l.count*d),l[u].set(n[u]);let h=new Float32Array(l.count);n.twigPresence instanceof Float32Array&&h.set(n.twigPresence);for(let u of e){let d=t[u];h.fill(-1,d.firstParticle,d.firstParticle+d.particles)}let f=n.count;for(let[u,d]of r.entries())for(let g=0;g<d.count;g++,f++){let x=g===0?0:g===d.count-1?1:(g+Nn(u,g,0)*.88)/d.count,m=d.arc.parameter(x),p=d.point(m),E=d.point(Math.min(1,m+.002)).sub(d.point(Math.max(0,m-.002))).normalize(),w=Math.abs(E.y)<.92?new N(0,1,0):new N(1,0,0),b=E.clone().cross(w).normalize(),v=E.clone().cross(b).normalize(),y=Nn(u,g,1)*Math.PI*2,T=b.multiplyScalar(Math.cos(y)).addScaledVector(v,Math.sin(y)),S=_u(d.radius,.0038,Vr(x))*(.76+.24*Math.sin(x*21+u*1.7)**2)*Math.sqrt(Nn(u,g,2)),M=Nn(u,g,14)>.72,_=Vr(x/.06)*(1-Vr((x-.55)/.35));M&&(S=Math.min(.064,S*(1+2.1*_))),g&&g<d.count-1&&p.addScaledVector(T,S);let A=f*3,R=f*2;p.toArray(l.positions,A),T.toArray(l.normals,A),l.seeds[A]=Nn(u,g,3)*.982,l.seeds[A+1]=Nn(u,g,4),l.seeds[A+2]=Nn(u,g,5);let L=Nn(u,g,6)<.26?.3+.18*Nn(u,g,7):1,I=Nn(u,g,8)>.935?1.65:1,D=.65+.35*Math.sin(x*(31+u%9)+u*.9)**2,U=(.31+.2*Nn(u,g,9))*L*I*D*(M?1+1.2*_:.94)*(1-.4*Vr((x-.72)/.28))*(d.family?.86:1);l.colors[A]=U,l.colors[A+1]=U*(.57+.13*Nn(u,g,10)),l.colors[A+2]=U*(.28+.1*Nn(u,g,11)),l.energies[f]=.55+.24*Nn(u,g,12),l.florets[R]=.12,l.crownWeights[f]=1,l.crownTone[f]=1,l.growth[A]=d.growth(m),l.growth[A+1]=1,l.growth[A+2]=1,l.branchDensity[f]=d.family?.84:.94,h[f]=(.45+.55*Vr(x/.035))*(1-Vr((x-.9)/.1))}return{...l,twigPresence:h,twigBaseCount:n.count,twigAddedParticles:c,twigParticleVersion:Dp,twigCurveGroups:r.map(({kind:u,id:d,family:g,count:x})=>({kind:u,id:d,family:g,count:x}))}}var bu="limb-gap-fill-v1",Up=12.2/1456,Si=40,Z_=[{id:10,tube:.06},{id:15,tube:.05},{id:6,tube:.065}],$_=Object.freeze({positions:3,colors:3,seeds:3,energies:1,normals:3,florets:2,crownWeights:1,buds:4,growth:3,branchOutline:3,branchDensity:1,crownTone:1,twigPresence:1}),Op=n=>Math.max(0,Math.min(1,n)),j_=n=>new N((n[0]-728)*Up,(408-n[1])*Up,n[2]);function fs(n,t,e){let i=Math.imul(n+7919,2654435761)^Math.imul(t+131,2246822507)^Math.imul(e+17,3266489909);return i=Math.imul(i^i>>>16,2146121005),i=Math.imul(i^i>>>15,2221713035),((i^i>>>16)>>>0)/4294967296}function K_(n,t){let e=Op(t)*(n.length-1),i=Math.min(n.length-2,Math.floor(e));return n[i]+(n[i+1]-n[i])*(e-i)}function Bp(n){if(n?.limbGapVersion===bu)return n;let{positions:t,colors:e,growth:i}=n,s=[];for(let[c,{id:l,tube:h}]of Z_.entries()){let f=new $e(oe[l].map(j_),!1,"centripetal"),u=Array.from({length:Si+1},(v,y)=>new N(...hn(f.getPoint(y/Si).toArray(),0))),d=new Float32Array(Si),g=Array.from({length:Si},()=>[0,0,0]),x=new N(1/0,1/0,1/0),m=new N(-1/0,-1/0,-1/0);u.forEach(v=>{x.min(v),m.max(v)});let p=h*1.6,E=new N;for(let v=0;v<n.count;v++){if(i[v*3+1]<.5)continue;let y=t[v*3],T=t[v*3+1],S=t[v*3+2];if(y<x.x-p||y>m.x+p||T<x.y-p||T>m.y+p||S<x.z-p||S>m.z+p)continue;E.set(y,T,S);let M=1/0,_=0;for(let A=0;A<Si;A++){let R=u[A],L=u[A+1],I=L.clone().sub(R),D=Op(E.clone().sub(R).dot(I)/Math.max(1e-9,I.lengthSq())),U=R.clone().addScaledVector(I,D).distanceTo(E);U<M&&(M=U,_=A)}M>p||(d[_]++,g[_][0]+=e[v*3],g[_][1]+=e[v*3+1],g[_][2]+=e[v*3+2])}let w=[...d].sort((v,y)=>v-y),b=w[Math.floor(Si*.85)]*1.5;for(let v=0;v<Si;v++){let y=b*(1-.55*(v/Si)**2),T=Math.max(0,Math.round(y-d[v]));if(!T)continue;let S=v;for(let _=1;!d[S]&&_<Si;_++)S=d[v-_]?v-_:d[v+_]?v+_:S;let M=Math.max(1,d[S]);s.push({limb:c,id:l,b:v,need:T,tube:h,curve:f,samples:u,colour:g[S].map(_=>_/M)})}}let r=s.reduce((c,l)=>c+l.need,0);if(!r)return{...n,limbGapVersion:bu,limbGapParticles:0};let o={...n,count:n.count+r};for(let[c,l]of Object.entries($_))o[c]=new Float32Array(o.count*l),n[c]&&o[c].set(n[c]);let a=n.count;for(let c of s)for(let l=0;l<c.need;l++,a++){let h=(c.b+fs(c.id,c.b*997+l,0))/Si,f=new N(...hn(c.curve.getPoint(h).toArray(),0)),d=new N(...hn(c.curve.getPoint(Math.min(1,h+.01)).toArray(),0)).sub(f).normalize(),g=Math.abs(d.y)<.92?new N(0,1,0):new N(1,0,0),x=d.clone().cross(g).normalize(),m=d.clone().cross(x).normalize(),p=fs(c.id,c.b*997+l,1)*Math.PI*2,E=x.multiplyScalar(Math.cos(p)).addScaledVector(m,Math.sin(p)),w=c.tube*(1-.45*h)*Math.sqrt(fs(c.id,c.b*997+l,2));f.addScaledVector(E,w);let b=a*3,v=.75+.5*fs(c.id,c.b*997+l,3);f.toArray(o.positions,b),E.toArray(o.normals,b),o.colors[b]=c.colour[0]*v,o.colors[b+1]=c.colour[1]*v,o.colors[b+2]=c.colour[2]*v,o.seeds[b]=fs(c.id,l,4)*.982,o.seeds[b+1]=fs(c.id,l,5),o.seeds[b+2]=fs(c.id,l,6),o.energies[a]=.55+.25*fs(c.id,l,7),o.florets[a*2]=.12,o.crownWeights[a]=1,o.crownTone[a]=1,o.growth[b]=K_(ze[c.id],h),o.growth[b+1]=1,o.growth[b+2]=1,o.branchDensity[a]=.94,o.twigPresence[a]=.9}return{...o,limbGapVersion:bu,limbGapParticles:r}}var zp="three-side-particle-bundles-v4",kp=12.2/1456,J_=Object.freeze([{path:1,family:2,start:.26,end:.6,count:1400,seedOffset:0,radiusBase:.045,radiusRise:.017,sideCap:.078},{path:5,family:1,start:.3,end:.88,count:1800,seedOffset:5e3,radiusBase:.038,radiusRise:.017,sideCap:.07},{path:1,family:1,start:.24,end:.5,count:1e3,seedOffset:1e4,radiusBase:.038,radiusRise:.017,sideCap:.07}]),Vp=Object.freeze({positions:3,colors:3,seeds:3,energies:1,normals:3,florets:2,crownWeights:1,buds:4,growth:3,branchOutline:3,branchDensity:1,crownTone:1}),Su=n=>Math.max(0,Math.min(1,n)),wi=n=>{let t=Su(n);return t*t*(3-2*t)},ds=(n,t,e)=>n+(t-n)*e;function we(n,t){let e=Math.imul(n+193,2654435761)^Math.imul(t+287,2246822507);return e=Math.imul(e^e>>>16,2146121005),e=Math.imul(e^e>>>15,2221713035),((e^e>>>16)>>>0)/4294967296}function Hp(n){if(n?.bundleParticleVersion===zp)return n;if(!Number.isSafeInteger(n?.count)||n.count<0)throw new TypeError("A valid tree cloud is required.");for(let[f,u]of Object.entries(Vp))if(!(n[f]instanceof Float32Array)||n[f].length!==n.count*u)throw new TypeError(`Invalid particle attribute: ${f}.`);if(!(n.twigPresence instanceof Float32Array)||n.twigPresence.length!==n.count)throw new TypeError("The existing twigPresence mask is required.");let t=J_.map(f=>{let u=f.start,d=f.end,g=new $e(oe[f.path].map(v=>new N((v[0]-728)*kp,(408-v[1])*kp,v[2])),!1,"centripetal"),x=v=>new N(...hn(g.getPoint(v).toArray(),f.family)),m=256,p=[0],E=x(u),w=0;for(let v=1;v<=m;v++){let y=x(ds(u,d,v/m));w+=y.distanceTo(E),p.push(w),E=y}return{...f,point:x,length:w,parameter:v=>{let y=v*w,T=0,S=m;for(;S-T>1;){let M=T+S>>1;p[M]<y?T=M:S=M}return ds(u,d,(T+(y-p[T])/Math.max(1e-9,p[S]-p[T]))/m)}}}),e=t.reduce((f,u)=>f+u.count,0),i=400,s=t.length*i,r={...n,count:n.count+e+s};for(let[f,u]of Object.entries(Vp))r[f]=new Float32Array(r.count*u),r[f].set(n[f]);let o=new Float32Array(r.count);o.set(n.twigPresence);let a=n.count;for(let f of t){let u=f.count,d=f.point,g=f.parameter;for(let x=0;x<u;x++){let m=a+x,p=m*3,E=x+f.seedOffset,w=x===0?0:x===u-1?1:(x+we(E,0)*.9)/u,b=g(w),v=d(b),y=d(Math.min(1,b+.001)).sub(d(Math.max(0,b-.001))).normalize(),T=Math.abs(y.y)<.92?new N(0,1,0):new N(1,0,0),S=y.clone().cross(T).normalize(),M=y.clone().cross(S).normalize(),_=we(E,1)*Math.PI*2,A=S.multiplyScalar(Math.cos(_)).addScaledVector(M,Math.sin(_)),R=wi(w/.1)*(1-wi((w-.86)/.14)),L=f.radiusBase+f.radiusRise*Math.sin(w*Math.PI)**2,I=ds(.012,L,R)*Math.sqrt(we(E,2))*(.87+.13*Math.sin(w*29+.7)**2),D=we(E,13)>.82;D&&(I=Math.min(f.sideCap,I*(1+.4*R))),x&&x<u-1&&v.addScaledVector(A,I),v.toArray(r.positions,p),A.toArray(r.normals,p),r.seeds[p]=we(E,3)*.982,r.seeds[p+1]=we(E,4),r.seeds[p+2]=we(E,5);let U=we(E,6)<.28?.24+.2*we(E,7):1,z=we(E,8)>.94?1.6:1,k=.68+.32*Math.sin(w*49+1.3)**2,J=(.34+.24*we(E,9))*U*z*k*(D?1.12:1);r.colors[p]=J,r.colors[p+1]=J*(.57+.15*we(E,10)),r.colors[p+2]=J*(.29+.13*we(E,11)),r.energies[m]=.57+.24*we(E,12),r.florets[m*2]=.12,r.crownWeights[m]=1,r.crownTone[m]=1;let Y=ze[f.path],at=b*(Y.length-1),lt=Math.min(Y.length-2,Math.floor(at));r.growth[p]=Su(ds(Y[lt],Y[lt+1],at-lt)+(we(E,14)-.5)*.024),r.growth[p+1]=1,r.growth[p+2]=1,r.branchDensity[m]=.88*wi(w/.06)*(1-wi((w-.91)/.09)),o[m]=(.35+.65*wi(w/.05))*(1-wi((w-.93)/.07))}a+=u}let c=[];for(let[f,u]of t.entries()){let g=u.start+.03,x=a,m=v=>{let y=Ws(u.path,u.family,v),T=wi((v-(u.start-.09))/.105);return y.lerp(u.point(v),T)},p=128,E=[0],w=m(.03),b=0;for(let v=1;v<=p;v++){let y=m(ds(.03,g,v/p));b+=y.distanceTo(w),E.push(b),w=y}for(let v=0;v<i;v++,a++){let y=v+2e4+f*5e3,T=v===0?0:v===i-1?1:(v+we(y,0)*.9)/i,S=T*b,M=0,_=p;for(;_-M>1;){let ct=M+_>>1;E[ct]<S?M=ct:_=ct}let A=ds(.03,g,(M+(S-E[M])/Math.max(1e-9,E[_]-E[M]))/p),R=m(A),L=m(Math.min(g,A+.001)).sub(m(Math.max(.03,A-.001))).normalize(),I=Math.abs(L.y)<.92?new N(0,1,0):new N(1,0,0),D=L.clone().cross(I).normalize(),U=L.clone().cross(D).normalize(),z=we(y,1)*Math.PI*2,k=D.multiplyScalar(Math.cos(z)).addScaledVector(U,Math.sin(z)),J=ds(.012,.03,wi(T))*Math.sqrt(we(y,2))*(.85+.15*Math.sin(T*23+f)**2);v&&v<i-1&&R.addScaledVector(k,J);let Y=a*3;R.toArray(r.positions,Y),k.toArray(r.normals,Y),r.seeds[Y]=we(y,3)*.982,r.seeds[Y+1]=we(y,4),r.seeds[Y+2]=we(y,5);let at=we(y,6)<.28?.24+.2*we(y,7):1,lt=we(y,8)>.94?1.6:1,bt=.75*(.34+.24*we(y,9))*at*lt*(.68+.32*Math.sin(T*43+f)**2);r.colors[Y]=bt,r.colors[Y+1]=bt*(.57+.15*we(y,10)),r.colors[Y+2]=bt*(.29+.13*we(y,11)),r.energies[a]=.57+.24*we(y,12),r.florets[a*2]=.12,r.crownWeights[a]=1,r.crownTone[a]=1;let ft=ze[u.path],_t=A*(ft.length-1),Z=Math.min(ft.length-2,Math.floor(_t));r.growth[Y]=Su(ds(ft[Z],ft[Z+1],_t-Z)+(we(y,14)-.5)*.024),r.growth[Y+1]=1,r.growth[Y+2]=1;let et=wi(T/.08)*(1-wi((T-.88)/.12));r.branchDensity[a]=.76*et,o[a]=et}c.push({path:u.path,family:u.family,uStart:.03,uEnd:g,firstParticle:x,count:i,length:b})}let l=n.count,h=t.map(f=>{let u={path:f.path,family:f.family,uStart:f.start,uEnd:f.end,count:f.count,firstParticle:l,length:f.length,seedOffset:f.seedOffset};return l+=f.count,u});return{...r,twigPresence:o,bundleBaseCount:n.count,bundleAddedParticles:e+s,bundleBodyParticles:e,bundleNeckParticles:s,bundleParticleVersion:zp,bundleCurve:h[0],bundleCurves:h,bundleNecks:c}}var Gp=12.2/1456,Gi=192,Tu=n=>Math.max(0,Math.min(1,n)),Xp=n=>new N((n[0]-728)*Gp,(408-n[1])*Gp,n[2]),gc=Xp(oe[0][0]);gc.y-=.018;var Q_=(n,t)=>{let e=1-t,i=Math.sin(Math.PI*t)**2*(.71+.29*Math.sin(t*Math.PI*1.8+(n[5]?.[0]||0)));return new N(...[0,1,2].map(s=>e**3*n[0][s]+3*e*e*t*n[1][s]+3*e*t*t*n[2][s]+t**3*n[3][s]+(n[4]?.[s]||0)*i))};function t2(n,t){let e=1/0,i=0,s=0;for(let r=1;r<n.length;r++){let o=n[r-1],a=n[r],c=a.x-o.x,l=a.y-o.y,h=a.z-o.z,f=Tu(((t.x-o.x)*c+(t.y-o.y)*l+(t.z-o.z)*h)/Math.max(1e-12,c*c+l*l+h*h)),u=(t.x-o.x-c*f)**2+(t.y-o.y-l*f)**2+(t.z-o.z-h*f)**2;u<e&&(e=u,i=r-1,s=f)}return{index:i,t:s,point:n[i].clone().lerp(n[i+1],s)}}function Wp(n,t){if(!n)return t[0].copy(gc),t;let e=t2(n,t[0]),i=e.point.clone().sub(t[0]);for(let s=0;s<Math.min(8,t.length);s++){let r=s/7,o=1-r*r*(3-2*r);t[s].addScaledVector(i,o)}return[...n.slice(0,e.index+1),...t]}function wu(n){let t=[0];for(let r=1;r<n.length;r++)t.push(t[r-1]+n[r].distanceTo(n[r-1]));let e=t.at(-1),i=[],s=1;for(let r=0;r<Gi;r++){let o=e*r/(Gi-1);for(;s<n.length-1&&t[s]<o;)s++;i.push(n[s-1].clone().lerp(n[s],(o-t[s-1])/Math.max(1e-9,t[s]-t[s-1])))}return{points:i,length:e}}function Eu(n,t=0){if(!n.length)return null;let e=t%3;n.sort((s,r)=>s.p[e]-r.p[e]);let i=n.length>>1;return{node:n[i],axis:e,left:Eu(n.slice(0,i),t+1),right:Eu(n.slice(i+1),t+1)}}function e2(n,t){let e=null,i=1/0,s=r=>{if(!r)return;let o=r.node.p,a=(t[0]-o[0])**2+(t[1]-o[1])**2+(t[2]-o[2])**2;a<i&&(i=a,e=r.node);let c=t[r.axis]-o[r.axis];s(c<0?r.left:r.right),c*c<i&&s(c<0?r.right:r.left)};return s(n),e}function qp(n){let t=oe.map((u,d)=>Or(d)||new $e(u.map(Xp),!1,"centripetal")),e=[],i=[];for(let u=0;u<3;u++){let d=[],g=[];for(let x=0;x<t.length;x++){let m=Array.from({length:49},(E,w)=>[0,1,5].includes(x)?Ws(x,u,w/48):new N(...hn(t[x].getPoint(w/48).toArray(),u))),p=Wp(cn[x]<0?null:d[cn[x]],m);d.push(p),e.push(wu(p))}for(let x of n.supportPaths||[]){let m=Array.from({length:33},(w,b)=>new N(...hn(Q_(x.control,b/32).toArray(),u))),p=x.parentKind==="support"?g[x.parent]:d[x.parent],E=Wp(p||d[0],m);g.push(E),e.push(wu(E))}i.push({source:d,supports:g})}for(let u of n.rootStrandPaths||[])e.push(wu([gc.clone(),...u.map(d=>new N(...d))]));let s=e.length,r=new Float32Array(Gi*s*4),o=[];e.forEach((u,d)=>u.points.forEach((g,x)=>{let m=(d*Gi+x)*4;r[m]=g.x,r[m+1]=g.y,r[m+2]=g.z,r[m+3]=1,(x%3===0||x===Gi-1)&&o.push({p:g.toArray(),row:d,i:x})}));let a=Eu(o),c=new Float32Array(n.count*4),l=new N,h=0;for(let u=0;u<n.count;u++){let d=u*3,g=u*4,m=n.growth[d+1]>.5?0:Tu(n.buds[g+3]);l.set(n.positions[d]+n.buds[g]*m,n.positions[d+1]+n.buds[g+1]*m,n.positions[d+2]+n.buds[g+2]*m);let p=n.crownParentQueries?.get(u);p&&l.fromArray(p);let E=e2(a,l.toArray()),w=e[E.row],b=1/0,v=0;for(let y=Math.max(1,E.i-3);y<=Math.min(Gi-1,E.i+3);y++){let T=w.points[y-1],S=w.points[y],M=S.x-T.x,_=S.y-T.y,A=S.z-T.z,R=Tu(((l.x-T.x)*M+(l.y-T.y)*_+(l.z-T.z)*A)/Math.max(1e-12,M*M+_*_+A*A)),L=(l.x-T.x-M*R)**2+(l.y-T.y-_*R)**2+(l.z-T.z-A*R)**2;L<b&&(b=L,v=(y-1+R)/(Gi-1))}c[g]=E.row,c[g+1]=v,c[g+2]=w.length*v,c[g+3]=Math.sqrt(b),h=Math.max(h,c[g+3])}let f=new Cs(r,Gi,s,yn,Dn);return f.minFilter=f.magFilter=sn,f.needsUpdate=!0,{attributes:c,texture:f,width:Gi,height:s,paths:e,root:gc.clone(),maxConnector:h,version:"root-connected-growth-v1"}}var Yp="root-water-contact-grains-v1",Hr=800,vc=16.551724137931036,yc=-.32678571428571423,_c=1.6541384108566706,Au=.1,Zp=Object.freeze({positions:3,colors:3,seeds:3,energies:1,normals:3,florets:2,crownWeights:1,buds:4,growth:3,branchOutline:3,branchDensity:1,crownTone:1,twigPresence:1}),n2=n=>Math.max(0,Math.min(1,n)),xc=n=>{let t=n2(n);return t*t*(3-2*t)},$p=(n,t,e)=>n+(t-n)*e;function Wn(n,t){let e=Math.imul(n+7307,2654435761)^Math.imul(t+467,2246822507);return e=Math.imul(e^e>>>16,2146121005),e=Math.imul(e^e>>>15,2221713035),((e^e>>>16)>>>0)/4294967296}var i2=n=>new N((n.x+yc)*(1-n.z/vc)-yc,(n.y+_c)*(1-n.z/vc)-_c,n.z),s2=n=>new N((n.x+yc)/(1-n.z/vc)-yc,(n.y+_c)/(1-n.z/vc)-_c,n.z);function Go(n){let t=Ws(0,0,n*Au);return t.y-=.018*(1-xc(n/.25)),i2(t)}function jp(n){if(n?.rootContactVersion===Yp)return n;if(!Number.isSafeInteger(n?.count)||n.count<0)throw new TypeError("A valid tree cloud is required.");for(let[o,a]of Object.entries(Zp))if(!(n[o]instanceof Float32Array)||n[o].length!==n.count*a)throw new TypeError(`Invalid tree attribute: ${o}.`);let t={...n,count:n.count+Hr};for(let[o,a]of Object.entries(Zp))t[o]=new Float32Array(t.count*a),t[o].set(n[o]);let e=128,i=[0],s=Go(0),r=0;for(let o=1;o<=e;o++){let a=Go(o/e);r+=a.distanceTo(s),i.push(r),s=a}for(let o=0;o<Hr;o++){let a=n.count+o,c=a*3,l=o===0?0:o===Hr-1?1:(o+Wn(o,0)*.9)/Hr,h=l*r,f=0,u=e;for(;u-f>1;){let R=f+u>>1;i[R]<h?f=R:u=R}let d=(f+(h-i[f])/Math.max(1e-9,i[u]-i[f]))/e,g=Go(d),x=Go(Math.min(1,d+.002)).sub(Go(Math.max(0,d-.002))).normalize(),m=Math.abs(x.y)<.92?new N(0,1,0):new N(1,0,0),p=x.clone().cross(m).normalize(),E=x.clone().cross(p).normalize(),w=Wn(o,1)*Math.PI*2,b=p.multiplyScalar(Math.cos(w)).addScaledVector(E,Math.sin(w)),v=$p(.08,.11,xc(l))*Math.sqrt(Wn(o,2))*(.79+.21*Math.sin(l*19+.5)**2);o&&o<Hr-1&&g.addScaledVector(b,v),s2(g).toArray(t.positions,c),b.toArray(t.normals,c),t.seeds[c]=Wn(o,3)*.982,t.seeds[c+1]=Wn(o,4),t.seeds[c+2]=Wn(o,5);let y=Wn(o,6)<.29?.28+.18*Wn(o,7):1,T=Wn(o,8)>.95?1.38:1,S=(.27+.21*Wn(o,9))*y*T*(.7+.3*Math.sin(l*31+1.1)**2);t.colors[c]=S,t.colors[c+1]=S*(.55+.14*Wn(o,10)),t.colors[c+2]=S*(.25+.14*Wn(o,11)),t.energies[a]=.54+.2*Wn(o,12),t.florets[a*2]=.12,t.crownWeights[a]=1,t.crownTone[a]=1;let M=ze[0],_=d*Au*(M.length-1),A=Math.min(M.length-2,Math.floor(_));t.growth[c]=$p(M[A],M[A+1],_-A),t.growth[c+1]=1,t.growth[c+2]=1,t.branchDensity[a]=.68*xc(l/.1)*(1-xc((l-.72)/.28))}return{...t,rootContactBaseCount:n.count,rootContactAddedParticles:Hr,rootContactVersion:Yp,rootContactSourceU:[0,Au],rootContactLowerOffset:-.018}}var Kp={positions:3,colors:3,seeds:3,energies:1,normals:3,florets:2,crownWeights:1,buds:4,growth:3,branchOutline:3,crownTone:1,branchDensity:1,twigPresence:1},Jp=[{at:[-1.38,.9,1.64],donor:98362,scale:.58,count:920},{at:[-.62,.83,1.92],donor:86361,scale:.48,count:1050},{at:[.12,1.29,1.38],donor:55591,scale:.53,count:980},{at:[.12,.75,.72],donor:23752,scale:.52,count:880},{at:[-.45,1.25,-.57],donor:24132,scale:.64,count:790},{at:[-1.42,.78,-.83],donor:99203,scale:.55,count:860},{at:[-.28,1.06,2.68],donor:39790,scale:.47,count:1050},{at:[-.76,.64,3.11],donor:98362,scale:.6,count:950},{at:[.44,1.28,2.71],donor:55591,scale:.52,count:900},{at:[.54,.44,3.26],donor:86361,scale:.4,count:700},{at:[1.58,.6,.14],donor:99203,scale:.51,count:850},{at:[2.48,.67,-.46],donor:23752,scale:.42,count:620},{at:[.75,.21,-2.26],donor:24132,scale:.53,count:630}],Mc=n=>{let t=Math.sin(n*12.9898+78.233)*43758.5453;return t-Math.floor(t)},r2=(n,t)=>[0,1,2].map(e=>n.positions[t*3+e]+n.buds[t*4+e]);function Qp(n){if(n.balancedSpraysVersion)return n;let t=Jp.map(l=>({p:l,c:r2(n,l.donor),indices:[]})),e=[];for(let l=0;l<n.count;l++){let h=l*3,f=l*4;if(n.growth[h+1]>.5){n.growth[h+2]<9&&n.energies[l]>.25&&l%3===0&&e.push(l);continue}if(!(n.buds[f+3]<.65))for(let u of t)Math.abs(n.positions[h]+n.buds[f]-u.c[0])<.015&&Math.abs(n.positions[h+1]+n.buds[f+1]-u.c[1])<.015&&Math.abs(n.positions[h+2]+n.buds[f+2]-u.c[2])<.015&&u.indices.push(l)}let i=80,s=Jp.reduce((l,h)=>l+h.count+i,0),r={count:n.count+s};for(let[l,h]of Object.entries(Kp))n[l]&&(r[l]=new Float32Array(r.count*h),r[l].set(n[l]));let o=(l,h)=>{for(let[f,u]of Object.entries(Kp))r[f]&&r[f].set(n[f].subarray(l*u,(l+1)*u),h*u)},a=n.count,c=[];return t.forEach(({p:l,c:h,indices:f},u)=>{if(f.length<l.count)throw Error("Insufficient real spray grains for "+u);let d=f.map(M=>({i:M,r:Mc(M+u*8191)})).sort((M,_)=>M.r-_.r).slice(0,l.count),g=[0,0,0];for(let{i:M}of d)for(let _=0;_<3;_++)g[_]+=n.positions[M*3+_]/d.length;let x=(u%2?1:-1)*(.17+.13*Mc(u+8)),m=Math.cos(x),p=Math.sin(x),E=.137*(u+1);for(let{i:M}of d){let _=M*3,A=a*3,R=a*4;o(M,a);let L=(n.positions[_]-g[0])*l.scale,I=(n.positions[_+1]-g[1])*l.scale*(.91+.16*Mc(u+9)),D=(n.positions[_+2]-g[2])*l.scale,U=[L*m+D*p,I,-L*p+D*m];for(let J=0;J<3;J++)r.positions[A+J]=l.at[J]+U[J],r.buds[R+J]=-U[J],r.seeds[A+J]=(n.seeds[_+J]+E*(J+1))%1;let z=n.normals[_],k=n.normals[_+2];r.normals[A]=z*m+k*p,r.normals[A+2]=-z*p+k*m,r.twigPresence&&(r.twigPresence[a]=0),a++}let w=e[0],b=1/0;for(let M of e){let _=M*3,A=(n.positions[_]-l.at[0])**2+(n.positions[_+1]-l.at[1])**2+(n.positions[_+2]-l.at[2])**2;A<b&&(b=A,w=M)}let v=Array.from(n.positions.subarray(w*3,w*3+3)),y=le.growStart+n.growth[w*3]*le.growSpan+(n.seeds[w*3]-.5)*.44,T=y+.18,S=Math.max(.1,Math.sqrt(b)/1.7);for(let M=0;M<i;M++){o(w,a);let _=(M+.5)/i,A=a*3,R=a*4,L=.012*(1-.65*_),I=M*2.399963;r.positions[A]=v[0]+(l.at[0]-v[0])*_+Math.cos(I)*L,r.positions[A+1]=v[1]+(l.at[1]-v[1])*_-.045*Math.sin(Math.PI*_)+Math.sin(I)*L,r.positions[A+2]=v[2]+(l.at[2]-v[2])*_+Math.sin(I*.77)*L,r.buds.set([0,0,0,0],R);for(let z=0;z<3;z++)r.seeds[A+z]=Mc(M*7+z+u*717);let U=(T+S*_-le.growStart-(r.seeds[A]-.5)*.44)/le.growSpan;r.growth.set([U,1,0],A),r.energies[a]*=.74,r.branchDensity&&(r.branchDensity[a]=.58),r.twigPresence&&(r.twigPresence[a]=.35),a++}c.push({center:l.at,count:l.count,scale:l.scale,anchor:v,connection:Math.sqrt(b),parentArrival:y,branchStart:T,branchEnd:T+S})}),{...n,...r,balancedSpraysVersion:"parent-fed-crown-links-v2",balancedSprayParticles:s,balancedSprays:c}}var tm={positions:3,colors:3,seeds:3,energies:1,normals:3,florets:2,crownWeights:1,buds:4,growth:3,branchOutline:3,crownTone:1,branchDensity:1,twigPresence:1},em=[2.9930201434,1.153037373,1.3711931258],nm=[-.12,-.23,-.14],bc=120,im=n=>{let t=Math.sin(n*12.9898+78.233)*43758.5453;return t-Math.floor(t)};function sm(n){if(n.particleLayerVersion)return n;let t=em.map((a,c)=>a+nm[c]),e=[],i=1/0,s=-1;for(let a=0;a<n.count;a++){let c=a*3,l=a*4;if(n.growth[c+1]<.5)em.reduce((f,u,d)=>f+(n.positions[c+d]+n.buds[l+d]-u)**2,0)<.025**2&&n.buds[l+3]>.6&&e.push(a);else if(n.positions[c+1]>.15&&n.growth[c+2]<9&&n.energies[a]>.25&&n.branchDensity[a]>.35){let h=t.reduce((f,u,d)=>f+(n.positions[c+d]-u)**2,0);h<i&&(i=h,s=a)}}if(!e.length||s<0)throw Error("Expected detached spray and supporting bough.");let r={...n,count:n.count+bc};for(let[a,c]of Object.entries(tm))r[a]=new Float32Array(r.count*c),r[a].set(n[a]);for(let a of e)for(let c=0;c<3;c++)r.positions[a*3+c]+=nm[c];let o=Array.from(n.positions.subarray(s*3,s*3+3));for(let a=0;a<bc;a++){let c=n.count+a,l=c*3,h=c*4,f=(a+.5)/bc;for(let[g,x]of Object.entries(tm))r[g].set(n[g].subarray(s*x,(s+1)*x),c*x);let u=a*2.399963,d=.012*(1-.65*f)*Math.sqrt(im(a+991));r.positions[l]=o[0]+(t[0]-o[0])*f+Math.cos(u)*d,r.positions[l+1]=o[1]+(t[1]-o[1])*f-.045*Math.sin(Math.PI*f)+Math.sin(u)*d,r.positions[l+2]=o[2]+(t[2]-o[2])*f+Math.sin(u*.73)*d,r.buds.set([0,0,0,0],h),r.growth[l]=Math.min(.9,n.growth[s*3]+.045*f),r.growth[l+1]=1,r.growth[l+2]=0;for(let g=0;g<3;g++)r.seeds[l+g]=im(a*7+g+1193);r.energies[c]*=.8,r.branchDensity[c]=.64,r.twigPresence[c]=.45,r.branchOutline.set([0,0,0],l)}return{...r,particleLayerVersion:"local-spray-attachment-v1",reconnectedSprayParticles:e.length,sprayConnectorParticles:bc,sprayConnectorLength:Math.sqrt(i)}}var rm="whole-bud-crown-layers-v1",Cu=(n,t=0,e=1)=>Math.max(t,Math.min(e,n)),am=(n,t,e)=>{let i=Cu((e-n)/(t-n));return i*i*(3-2*i)},om=(n,t,e)=>`${n},${t},${e}`;function o2(n){let t=[],e=new Map,i=.025;for(let s=0;s<n.count;s++){let r=s*3,o=s*4;if(n.growth[r+1]>.5||n.growth[r+2]>=9||n.buds[o+3]<=.05)continue;let a=[0,1,2].map(f=>n.positions[r+f]+n.buds[o+f]),c=a.map(f=>Math.floor(f/i)),l,h=.012**2;for(let f=-1;f<=1;f++)for(let u=-1;u<=1;u++)for(let d=-1;d<=1;d++){let g=e.get(om(c[0]+f,c[1]+u,c[2]+d));for(let x of g||[]){let m=a.reduce((p,E,w)=>p+(E-x.center[w])**2,0);m<h&&(h=m,l=x)}}if(!l){l={center:a,first:s,indices:[],mean:[0,0,0],radius:[0,0,0]},t.push(l);let f=om(...c),u=e.get(f)||[];u.push(l),e.set(f,u)}l.indices.push(s);for(let f=0;f<3;f++)l.mean[f]+=n.positions[r+f]}for(let s of t){let r=s.indices.length;for(let o=0;o<3;o++)s.mean[o]/=r;for(let o of s.indices)for(let a=0;a<3;a++)s.radius[a]+=(n.positions[o*3+a]-s.mean[a])**2;for(let o=0;o<3;o++)s.radius[o]=Math.max(.065,Math.sqrt(s.radius[o]/r)*2.25)}return t}function a2(n){for(let t of n){let e=0,i=0,s=[0,0,0];t.direction=[1,0];for(let o of n){if(t===o||o.indices.length<80)continue;let a=o.mean[0]-t.mean[0],c=o.mean[1]-t.mean[1],l=t.radius[0]+o.radius[0],h=t.radius[1]+o.radius[1],f=(a/l)**2+(c/h)**2;if(f>2.6)continue;let u=o.mean[2]-t.mean[2],d=.1+.9*am(-.12,.72,u),g=Cu(.5+.24*Math.log(o.indices.length/t.indices.length),.16,.95),x=Math.min(1,Math.sqrt(o.indices.length/2200)),m=Math.exp(-2.05*f)*d*g*x;e+=m,m>s[0]?(s[2]=s[1],s[1]=s[0],s[0]=m):m>s[1]?(s[2]=s[1],s[1]=m):m>s[2]&&(s[2]=m);let p=Math.hypot(a,c);m>i&&p>.04&&(i=m,t.direction=[a/p,c/p])}let r=s[0]+.5*s[1]+.25*s[2]+.08*Math.max(0,e-s[0]-s[1]-s[2]);t.overlap=Math.min(.82,1-Math.exp(-1.3*r))}}function lm(n){if(n.crownLayerVersion===rm)return n;let t=o2(n);a2(t);let e=n.positions.slice(),i=n.normals.slice(),s=n.buds.slice(),r=new Float32Array(n.count),o=new Map,a=0,c=0,l=0,h=0,f=[];for(let u of t){let[d,g,x]=u.center,p=u.first>=(n.baseCount??1/0)&&u.indices.length<3e3&&Math.abs(d)<1.65&&g>-.25&&g<1.65&&Math.abs(x)<3.2?am(.18,.52,u.overlap):0,E=1-.16*p,w=1-.035*p,b=1-.055*p,[v,y]=u.direction;p>.001&&(c++,f.push({center:u.center.slice(),count:u.indices.length,alongScale:E,acrossScale:w,depthScale:b}));for(let T of u.indices){let S=T*3,M=T*4;if(r[T]=u.overlap,p<=.001)continue;let _=[0,1,2].map(ft=>n.positions[S+ft]+n.buds[M+ft]),A=-n.buds[M],R=-n.buds[M+1],L=-n.buds[M+2],I=(A*v+R*y)*E,D=(-A*y+R*v)*w;e[S]=_[0]+I*v-D*y,e[S+1]=_[1]+I*y+D*v,e[S+2]=_[2]+L*b;let U=0;for(let ft=0;ft<3;ft++)s[M+ft]=_[ft]-e[S+ft],U+=(e[S+ft]-n.positions[S+ft])**2,h=Math.max(h,Math.abs(e[S+ft]+s[M+ft]-_[ft]));let z=(i[S]*v+i[S+1]*y)/E,k=(-i[S]*y+i[S+1]*v)/w,J=z*v-k*y,Y=z*y+k*v,at=i[S+2]/b,lt=Math.hypot(J,Y,at);lt>1e-9&&(i[S]=J/lt,i[S+1]=Y/lt,i[S+2]=at/lt);let bt=Cu(n.buds[M+3]);o.set(T,[0,1,2].map(ft=>n.positions[S+ft]+n.buds[M+ft]*bt)),l=Math.max(l,Math.sqrt(U)),a++}}return{...n,positions:e,normals:i,buds:s,crownOverlap:r,crownParentQueries:o,crownLayerVersion:rm,crownLayerStats:{clusters:t.length,adjustedClusters:c,adjustedParticles:a,maxDisplacement:l,maxCenterError:h,adjusted:f}}}var Wo=new Map([[0,1.75],[1,1.5],[5,1.5],[2,1.25],[3,1.2],[6,1.25],[10,1.2]]),Tn=new Set([19,20,21,22]),l2=n=>n===0?1:Wo.has(n)?.86:Tn.has(n)?.55:.78,cm=(n,t)=>n===0?1:1+.22*Math.sin(t*37+n*2.3)*Math.sin(t*13+n*.7)+.1*Math.sin(t*109+n*5.1),dm=new Set,pm=1456,c2=816,Ru=12.2/pm;function h2(){let n=[];oe.forEach((e,i)=>{if(dm.has(i))return;let s=Or(i)||new $e(e.map(([o,a,c])=>new N((o-pm*.5)*Ru,(c2*.5-a)*Ru,c)),!1,"centripetal"),r=Math.max(60,Math.ceil(s.getLength()*70));for(let o=0;o<=r;o++){let a=o/r,c=Math.min(e.length-2,Math.floor(a*(e.length-1))),l=a*(e.length-1)-c,h=uc(i,a,He.lerp(e[c][3],e[c+1][3],l)*Ru),f=Mi(s.getPoint(Math.max(0,a-.002)).toArray()),u=Mi(s.getPoint(Math.min(1,a+.002)).toArray()),d=Mi(s.getPoint(a).toArray()),g=u[0]-f[0],x=u[1]-f[1],m=u[2]-f[2],p=Math.hypot(g,x,m)||1,E=ze[i],w=Math.min(E.length-2,Math.floor(a*(E.length-1))),b=E[w]+(E[w+1]-E[w])*(a*(E.length-1)-w);n.push({id:i,t:a,growth:b,q:d,tangent:[g/p,x/p,m/p],radius:Math.max(.018,h)*(Wo.get(i)??(Tn.has(i)?1.2:1.1))*(i===0?1+.32*(1-Xe(0,.14,a)):1),pull:l2(i)})}});let t=new Map;for(let e of n)(t.get(e.id)||t.set(e.id,[]).get(e.id)).push(e);for(let[e,i]of[...t].sort((s,r)=>s[0]-r[0])){if(Wo.has(e)){let h=i[Math.floor(i.length/2)].radius;for(let f of i)f.radius=Math.max(f.radius,.45*h)}if(e!==0&&!Tn.has(e))for(let h of i)h.radius*=Un(1,.36,Xe(.74,1,h.t));if(e===0){let h=i.reduce((f,u)=>Math.abs(u.t-.64)<Math.abs(f.t-.64)?u:f,i[0]).radius;for(let f of i)f.pull=Un(1,.62,Xe(.62,.9,f.t)),f.t>.64&&(f.radius=Math.min(f.radius,h*Un(1,.45,Xe(.64,1,f.t))))}let s=t.get(cn[e]);if(!s||Tn.has(e))continue;let r=i[0].q,o=s[0],a=1/0;for(let h of s){let f=(h.q[0]-r[0])**2+(h.q[1]-r[1])**2+(h.q[2]-r[2])**2;f<a&&(a=f,o=h)}let c=.92*o.radius,l=Math.min(1,c/i[0].radius);globalThis.location&&/debug/.test(globalThis.location.search)&&((globalThis.__joints||={})[e]={parent:cn[e],t:+o.t.toFixed(3)});for(let h of i){let f=Xe(0,.14,h.t);h.radius=Un(c,h.radius*l,f),h.pull=Un(o.pull,h.pull,Xe(0,.16,h.t))}}return n}var hm="cinematic-finish-v2",Pu=(n,t=0,e=1)=>Math.max(t,Math.min(e,n)),Xe=(n,t,e)=>{let i=Pu((e-n)/(t-n));return i*i*(3-2*i)},Un=(n,t,e)=>n+(t-n)*e;function fe(n,t=0){let e=Math.imul((n|0)+2654435761*(t+1),2246822507)^Math.imul(t+7919,3266489909);return e=Math.imul(e^e>>>16,2146121005),e=Math.imul(e^e>>>15,2221713035),((e^e>>>16)>>>0)/4294967296}var um=(n,t,e)=>`${n},${t},${e}`;function fm(n,t,e){let i=[],s=new Map,r=.025;for(let o=0;o<n.count;o++){let a=o*3,c=o*4;if(n.growth[a+1]>.5||n.growth[a+2]>=9||e[c+3]<=.05)continue;let l=[t[a]+e[c],t[a+1]+e[c+1],t[a+2]+e[c+2]],h=l.map(d=>Math.floor(d/r)),f,u=.012**2;for(let d=-1;d<=1;d++)for(let g=-1;g<=1;g++)for(let x=-1;x<=1;x++){let m=s.get(um(h[0]+d,h[1]+g,h[2]+x));for(let p of m||[]){let E=(l[0]-p.center[0])**2+(l[1]-p.center[1])**2+(l[2]-p.center[2])**2;E<u&&(u=E,f=p)}}if(!f){f={center:l,indices:[]},i.push(f);let d=um(...h),g=s.get(d)||[];g.push(f),s.set(d,g)}f.indices.push(o)}return i}function u2(n,t){let e=fe(t,11),i=fe(t,12),s=fe(t,13),r=Math.sqrt(1-e)*Math.sin(2*Math.PI*i),o=Math.sqrt(1-e)*Math.cos(2*Math.PI*i),a=Math.sqrt(e)*Math.sin(2*Math.PI*s),c=Math.sqrt(e)*Math.cos(2*Math.PI*s),l=([f,u,d])=>{let g=c*f+o*d-a*u,x=c*u+a*f-r*d,m=c*d+r*u-o*f,p=-r*f-o*u-a*d;return[g*c+p*-r+x*-a-m*-o,x*c+p*-o+m*-r-g*-a,m*c+p*-a+g*-o-x*-r]},h=[];for(let f=0;f<n;f++){let u=1-(2*f+1)/n,d=Math.sqrt(Math.max(0,1-u*u)),g=f*2.399963229728653+fe(t,20+f)*.35,x=l([Math.cos(g)*d,u,Math.sin(g)*d]);x[1]+=.18;let m=Math.hypot(...x);h.push({d:x.map(p=>p/m),reach:.8+.34*fe(t,60+f)})}return h}function mm(n,{radialFlowers:t=!0}={}){if(n.cinematicFinishVersion===hm)return n;let e=n.count,i=n.growth,s=n.energies,r=n.colors.slice(),o=n.branchOutline,a=0,c=0,l=0;for(let H=0;H<e;H++){let $=H*3,dt=r[$],O=r[$+1],it=r[$+2],j=.2126*dt+.7152*O+.0722*it,V=Math.max(dt,O,it,.001),G=Xe(.05,.48,(dt-it)/V);if(i[$+1]>.5){let X=o?o[$+1]:0,tt=Pu(.62*s[H]+.5*X-.22+(fe(H,3)-.5)*.16),st=[1,Un(.3,.64,tt),Un(.1,.3,tt)],ht=Math.min(1.25,j*1.38+.05);r[$]=st[0]*ht,r[$+1]=st[1]*ht,r[$+2]=st[2]*ht,a++}else if(i[$+2]<9&&G>.5)if(fe(H,5)<1.01){let X=Math.min(1.2,j*1.12+.04);r[$]=X*.97,r[$+1]=X,r[$+2]=X*1.04,c++}else{let X=Math.min(1.2,Math.max(j,.35)*1.15);r[$]=X,r[$+1]=X*.66,r[$+2]=X*.3,l++}}let h=n.positions,f=n.buds,u=n.florets,d=n.crownWeights,g=n.normals,x={flowers:0,reshaped:0,core:0,filament:0,halo:0};if(t){h=h.slice(),f=f.slice(),u=u.slice(),d=d.slice(),g=g.slice();let H=fm(n,n.positions,n.buds);x.flowers=H.length;for(let $=0;$<H.length;$++){let dt=H[$],O=dt.indices.length;if(O<60)continue;let it=Math.round(dt.center[0]*997+dt.center[1]*3571+dt.center[2]*7919),j=dt.indices.map(st=>Math.hypot(n.buds[st*4],n.buds[st*4+1],n.buds[st*4+2])).sort((st,ht)=>st-ht),V=Math.max(.05,j[Math.floor(j.length*.85)]),G=u2(Math.min(13,6+Math.floor(fe(it,1)*3)+(O>1500?2:0)+(O>4e3?2:0)),it),X=.3+.26*fe(it,2),tt=Un(.78,1,Xe(350,2600,O));for(let st of dt.indices){let ht=st*3,vt=st*4,Bt=st*2,Ct=n.positions[ht]+n.buds[vt],$t=n.positions[ht+1]+n.buds[vt+1],Wt=n.positions[ht+2]+n.buds[vt+2],Ot=-n.buds[vt],te=-n.buds[vt+1],xe=-n.buds[vt+2],Kt=Math.hypot(Ot,te,xe);if(Kt<1e-6)continue;Ot/=Kt,te/=Kt,xe/=Kt;let me=fe(st,7),zt=Ot,jt=te,je=xe,an=Kt,qn,Cn,Rn;if(me<.22)an=Kt*(.14+.26*fe(st,8)),qn=.68,Cn=0,Rn=.9,x.core++;else if(me<.8){let ie=G[0],P=-2;for(let q of G){let mt=Ot*q.d[0]+te*q.d[1]+xe*q.d[2];mt>P&&(P=mt,ie=q)}let W=.74;zt=Un(Ot,ie.d[0],W),jt=Un(te,ie.d[1],W),je=Un(xe,ie.d[2],W);let nt=Math.hypot(zt,jt,je);zt/=nt,jt/=nt,je/=nt,an=Math.min(Kt,V*1.25)*ie.reach;let Q=Xe(.62*V,1.02*V,an);qn=.18+.3*Q,Cn=fe(st,9)<.18?.1*Q:0,Rn=.7+.2*Q,x.filament++}else qn=.04,Cn=0,Rn=.22,x.halo++;let ni=me>=.22&&me<.8?X*V*(an/(V*1.25))**2:0;h[ht]=Ct+zt*an,h[ht+1]=$t+jt*an-ni,h[ht+2]=Wt+je*an,f[vt]=Ct-h[ht],f[vt+1]=$t-h[ht+1],f[vt+2]=Wt-h[ht+2],u[Bt]=qn,u[Bt+1]=Cn,d[st]=Rn*tt,g[ht]=zt,g[ht+1]=jt,g[ht+2]=je,x.reshaped++}}}let m=n.branchDensity.slice(),p=0,E=0,w=(n.baseCount??0)+1e4+(n.supportParticles||0);for(let H=0;H<e;H++)i[H*3+1]<=.5||(n.bundleBaseCount!==void 0&&H>=n.bundleBaseCount&&H<n.rootContactBaseCount?(m[H]=0,p++):n.twigBaseCount!==void 0&&H>=w&&H<n.twigBaseCount&&(m[H]*=.35,E++));h===n.positions&&(h=h.slice()),g===n.normals&&(g=g.slice());let b=new Int16Array(e).fill(-1),v=(H,$,dt,O)=>{let it=Math.hypot($,dt,O);it>1e-6&&(g[H]=$/it,g[H+1]=dt/it,g[H+2]=O/it)},y=n.branchOutline?n.branchOutline.slice():null,T=h2(),S=.12,M=new Map,_=T.find(H=>H.id===0&&H.t===0)?.q||[.33,-2.54,0],A=(H,$,dt)=>`${Math.floor(H/S)},${Math.floor($/S)},${Math.floor(dt/S)}`;T.forEach((H,$)=>{let dt=A(...H.q);(M.get(dt)||M.set(dt,[]).get(dt)).push($)});let R=(n.baseCount??0)+1e4,L=R+(n.supportParticles||0),I=0,D=0,U=0,z=0,k=0,J=24,Y=new Map,at=[],lt=n.growth.slice(),bt=.17,ft=new Map,_t=new Map,Z=0,et=0,ct=(H,$,dt,O)=>{if(!y||dt<0)return;let it=T[dt];if(!Tn.has(it.id)||Math.sqrt(O)>bt*(1-.5*Xe(.4,1,it.t))+1.5*it.radius)return;y[$+2]=2,Z++;let j=(h[$]-it.q[0])*it.tangent[0]+(h[$+1]-it.q[1])*it.tangent[1]+(h[$+2]-it.q[2])*it.tangent[2];m[H]*=(1-.6*Xe(.5,1,it.t))*(it.t>.98&&j>.04?.2:1);let V=`${it.id}:${Math.min(J-1,Math.floor(it.t*J))}`;ft.set(V,(ft.get(V)||0)+1),(_t.get(it.id)||_t.set(it.id,[]).get(it.id)).push(H)};for(let H=0;H<e;H++){if(i[H*3+1]<=.5||m[H]===0||H>=R&&H<L||n.twigBaseCount!==void 0&&H>=n.twigBaseCount&&H<n.rootContactBaseCount+800)continue;let $=H*3,dt=h[$],O=h[$+1],it=h[$+2],j=O<_[1]+.03,V=Math.floor(dt/S),G=Math.floor(O/S),X=Math.floor(it/S),tt=-1,st=1/0,ht=-1,vt=1/0;for(let ie=-2;ie<=2;ie++)for(let P=-2;P<=2;P++)for(let W=-2;W<=2;W++){let nt=M.get(`${V+ie},${G+P},${X+W}`);if(nt)for(let Q of nt){let q=T[Q].q,mt=(dt-q[0])**2+(O-q[1])**2+(it-q[2])**2;mt<st?(tt>=0&&T[tt].id!==T[Q].id&&(ht=tt,vt=st),st=mt,tt=Q):mt<vt&&T[Q].id!==T[tt].id&&(vt=mt,ht=Q)}}if(j){ct(H,$,tt,st);continue}if(tt<0){at.push(H);continue}let{q:Bt,tangent:Ct,radius:$t,id:Wt}=T[tt];if(Tn.has(Wt)){ct(H,$,tt,st);continue}let Ot=dt-Bt[0],te=O-Bt[1],xe=it-Bt[2],Kt=Ot*Ct[0]+te*Ct[1]+xe*Ct[2];Ot-=Kt*Ct[0],te-=Kt*Ct[1],xe-=Kt*Ct[2];let me=Math.hypot(Ot,te,xe);if(me>$t*2.6+.1){if(Wt!==0&&fe(H,36)<.14){m[H]*=.32,z++;continue}at.push(H);continue}let zt=$t*cm(Wt,T[tt].t),jt=zt*.92*Math.tanh(me/(zt*1.15));Wt!==0&&!Tn.has(Wt)&&fe(H,37)<.16&&(jt=zt*(1.02+.7*fe(H,38)),m[H]*=.5);let je=T[tt].pull,an=me>1e-6?1-je+je*jt/me:0,qn=`${Wt}:${Math.min(J-1,Math.floor(T[tt].t*J))}`;Y.set(qn,(Y.get(qn)||0)+1),Tn.has(Wt)&&(m[H]*=1-.9*Xe(.3,1,T[tt].t)),Wt===0?m[H]*=1-.88*Xe(.7,.95,T[tt].t):Tn.has(Wt)||(m[H]*=1-.5*Xe(.84,1,T[tt].t));let Cn=Bt[0]+Kt*Ct[0]+Ot*an,Rn=Bt[1]+Kt*Ct[1]+te*an,ni=Bt[2]+Kt*Ct[2]+xe*an;if(ht>=0&&Math.sqrt(vt)<Math.sqrt(st)*1.45&&!Tn.has(T[ht].id)){let ie=T[ht],P=dt-ie.q[0],W=O-ie.q[1],nt=it-ie.q[2],Q=P*ie.tangent[0]+W*ie.tangent[1]+nt*ie.tangent[2];P-=Q*ie.tangent[0],W-=Q*ie.tangent[1],nt-=Q*ie.tangent[2];let q=Math.hypot(P,W,nt),mt=ie.radius*.92*Math.tanh(q/(ie.radius*1.15)),St=q>1e-6?1-ie.pull+ie.pull*mt/q:0,It=.5*Xe(1.45,1,Math.sqrt(vt/Math.max(1e-9,st)));Cn=Un(Cn,ie.q[0]+Q*ie.tangent[0]+P*St,It),Rn=Un(Rn,ie.q[1]+Q*ie.tangent[1]+W*St,It),ni=Un(ni,ie.q[2]+Q*ie.tangent[2]+nt*St,It)}if(h[$]=Cn,h[$+1]=Rn,h[$+2]=ni,b[H]=Wt,v($,Ot,te,xe),/[?&]debug=axes\b/.test(globalThis.location?.search||"")){let ie=Wt*.618034%1,P=[Math.abs(ie*6-3)-1,2-Math.abs(ie*6-2),2-Math.abs(ie*6-4)].map(W=>Pu(W));r.set(P.map(W=>.15+.85*W),$),globalThis.__axisLegend||(globalThis.__axisLegend={}),globalThis.__axisLegend[Wt]=P.map(W=>+W.toFixed(2))}y&&y[$]>0&&(y[$+1]=1-Xe(.24,1.14,me*an/$t)),I++}let yt=at.filter(H=>fe(H,31)<=.92),Tt=at.filter(H=>fe(H,31)>.92),Ht=0,Me=new Map;for(let H of T)(Me.get(H.id)||Me.set(H.id,[]).get(H.id)).push(H);let B=(H,$,dt=1)=>{let O=H*3,{q:it,tangent:j,radius:V,growth:G,id:X}=$,tt=Math.abs(j[1])<.9?[0,1,0]:[1,0,0],st=j[1]*tt[2]-j[2]*tt[1],ht=j[2]*tt[0]-j[0]*tt[2],vt=j[0]*tt[1]-j[1]*tt[0],Bt=Math.hypot(st,ht,vt)||1;st/=Bt,ht/=Bt,vt/=Bt;let Ct=j[1]*vt-j[2]*ht,$t=j[2]*st-j[0]*vt,Wt=j[0]*ht-j[1]*st,Ot=V*cm(X,$.t)*dt,te=X!==0&&fe(H,37)<.16,xe=fe(H,33)*Math.PI*2,Kt=te?Ot*(1.02+.7*fe(H,38)):Ot*.9*Math.tanh(1.6*Math.sqrt(fe(H,34))),me=(fe(H,35)-.5)*.03,zt=Math.cos(xe)*Kt,jt=Math.sin(xe)*Kt;h[O]=it[0]+st*zt+Ct*jt+j[0]*me,h[O+1]=it[1]+ht*zt+$t*jt+j[1]*me,h[O+2]=it[2]+vt*zt+Wt*jt+j[2]*me,lt[O]=G,y&&(y[O]=X===0?1:.9,y[O+1]=1-Xe(.24,1.14,Kt/V)),m[H]=te?.45:.85,b[H]=X,v(O,st*zt+Ct*jt,ht*zt+$t*jt,vt*zt+Wt*jt),/[?&]debug=axes\b/.test(globalThis.location?.search||"")&&r.set([1,1,1],O)};for(let[H,$]of Me){if(H===0||Tn.has(H)||dm.has(H))continue;let dt=Array.from({length:J},(V,G)=>Y.get(`${H}:${G}`)||0),O=dt.filter(V=>V>0).sort((V,G)=>V-G);if(O.length<4)continue;let it=O[Math.floor(O.length*.6)],j=.55*it;for(let V=0;V<J;V++){if(dt[V]>=j)continue;let G=dt.slice(0,V).some(st=>st>=j),X=dt.slice(V+1).some(st=>st>=j);if(!G||!X)continue;let tt=$.filter(st=>st.t>=V/J&&st.t<(V+1)/J);for(let st=dt[V];st<j&&Ht<yt.length&&tt.length;st++){let ht=yt[Ht++];B(ht,tt[Math.floor(fe(ht,39)*tt.length)]),k++}}}at.length=0,at.push(...yt.slice(Ht),...Tt);let Zt={};for(let H of Tn){let $=Me.get(H),dt=_t.get(H)||[];if(!$||!dt.length||!y)continue;let O=Array.from({length:J},(V,G)=>ft.get(`${H}:${G}`)||0),it=O.slice(Math.floor(.15*J),Math.ceil(.55*J)).sort((V,G)=>V-G),j=it[Math.floor(it.length*.5)]||0;Zt[H]={typical:j,counts:O.join(",")};for(let V=0;V<J;V++){let G=V/J,X=Math.round(.8*j*(1-.45*Xe(.45,1,G))),tt=$.filter(st=>st.t>=G&&st.t<(V+1)/J);if(tt.length)for(let st=O[V];st<X&&at.length;st++){let ht=at.pop(),vt=ht*3,{q:Bt,tangent:Ct,growth:$t,t:Wt}=tt[Math.floor(fe(ht,81)*tt.length)],Ot=Math.abs(Ct[1])<.9?[0,1,0]:[1,0,0],te=Ct[1]*Ot[2]-Ct[2]*Ot[1],xe=Ct[2]*Ot[0]-Ct[0]*Ot[2],Kt=Ct[0]*Ot[1]-Ct[1]*Ot[0],me=Math.hypot(te,xe,Kt)||1;te/=me,xe/=me,Kt/=me;let zt=Ct[1]*Kt-Ct[2]*xe,jt=Ct[2]*te-Ct[0]*Kt,je=Ct[0]*xe-Ct[1]*te,an=fe(ht,82)*Math.PI*2,qn=(.03+.1*(1-.55*Wt))*Math.sqrt(fe(ht,83)),Cn=Math.cos(an)*qn,Rn=Math.sin(an)*qn,ni=(fe(ht,84)-.5)*.03;h[vt]=Bt[0]+te*Cn+zt*Rn+Ct[0]*ni,h[vt+1]=Bt[1]+xe*Cn+jt*Rn+Ct[1]*ni,h[vt+2]=Bt[2]+Kt*Cn+je*Rn+Ct[2]*ni,lt[vt]=$t,y[vt]=0,y[vt+1]=0,y[vt+2]=2,m[ht]=.9*(1-.6*Xe(.5,1,Wt));let ie=dt[Math.floor(fe(ht,85)*dt.length)]*3;r[vt]=r[ie],r[vt+1]=r[ie+1],r[vt+2]=r[ie+2],et++}}}let Dt=T.filter(H=>Wo.has(H.id)&&!(H.id===0&&(H.t>.66||H.t<.12))),Ft=Dt.map(H=>H.radius*H.radius),Et=Ft.reduce((H,$)=>H+$,0),ae=[];Ft.reduce((H,$)=>(ae.push(H+$),H+$),0);for(let H=0;H<at.length;H++){let $=at[H],dt=$*3;if(!Dt.length||fe($,31)>.92){m[$]*=.15,D++;continue}let O=fe($,32)*Et,it=0,j=ae.length-1;for(;it<j;){let je=it+j>>1;ae[je]<O?it=je+1:j=je}let{q:V,tangent:G,radius:X,growth:tt,id:st}=Dt[it],ht=Math.abs(G[1])<.9?[0,1,0]:[1,0,0],vt=G[1]*ht[2]-G[2]*ht[1],Bt=G[2]*ht[0]-G[0]*ht[2],Ct=G[0]*ht[1]-G[1]*ht[0],$t=Math.hypot(vt,Bt,Ct)||1;vt/=$t,Bt/=$t,Ct/=$t;let Wt=G[1]*Ct-G[2]*Bt,Ot=G[2]*vt-G[0]*Ct,te=G[0]*Bt-G[1]*vt,xe=fe($,33)*Math.PI*2,Kt=X*.9*Math.tanh(1.6*Math.sqrt(fe($,34))),me=(fe($,35)-.5)*.03,zt=Math.cos(xe)*Kt,jt=Math.sin(xe)*Kt;h[dt]=V[0]+vt*zt+Wt*jt+G[0]*me,h[dt+1]=V[1]+Bt*zt+Ot*jt+G[1]*me,h[dt+2]=V[2]+Ct*zt+te*jt+G[2]*me,lt[dt]=tt,y&&(y[dt]=st===0?1:.9,y[dt+1]=1-Xe(.24,1.14,Kt/X)),m[$]=Math.max(m[$],.85),b[$]=st,v(dt,vt*zt+Wt*jt,Bt*zt+Ot*jt,Ct*zt+te*jt),/[?&]debug=axes\b/.test(globalThis.location?.search||"")&&r.set([1,1,1],dt),U++}let Rt={};{for(let j=0;j<e;j++){if(b[j]>=0||i[j*3+1]<=.5||m[j]===0)continue;let V=j*3,G=h[V],X=h[V+1],tt=h[V+2];if(X<_[1]+.03)continue;let st=Math.floor(G/S),ht=Math.floor(X/S),vt=Math.floor(tt/S),Bt=-1,Ct=1/0;for(let $t=-1;$t<=1;$t++)for(let Wt=-1;Wt<=1;Wt++)for(let Ot=-1;Ot<=1;Ot++){let te=M.get(`${st+$t},${ht+Wt},${vt+Ot}`);if(te)for(let xe of te){let Kt=T[xe].q,me=(G-Kt[0])**2+(X-Kt[1])**2+(tt-Kt[2])**2;me<Ct&&(Ct=me,Bt=xe)}}Bt>=0&&!Tn.has(T[Bt].id)&&Math.sqrt(Ct)<T[Bt].radius*3+.12&&(b[j]=T[Bt].id)}let H=new Map;for(let j=0;j<e;j++){let V=b[j];if(V<0)continue;let G=j*3;H.set(V,(H.get(V)||0)+m[j]*(r[G]+r[G+1]+r[G+2])/3)}let $=new Map,dt=new Map;for(let[j,V]of Me){if(Tn.has(j)||!H.has(j))continue;let G=0,X=0;for(let st=1;st<V.length;st++)G+=Math.hypot(...[0,1,2].map(ht=>V[st].q[ht]-V[st-1].q[ht]));for(let st of V)X+=st.radius;let tt=X/V.length;dt.set(j,tt),$.set(j,H.get(j)/Math.max(1e-6,G*2*Math.max(.03,tt)))}let O=$.get(0)||1,it=new Map;for(let[j,V]of $){let G=j===0?1:j===1||j===5?.92:Wo.has(j)?.78:.5+.15*Xe(.012,.04,dt.get(j)),X=j===0||j===1||j===5?1.2:Math.max(.42,Math.min(1,Math.pow(G*O/V,.6)));it.set(j,X),Rt[j]={before:Math.round(V),factor:+X.toFixed(2)}}for(let j=0;j<e;j++){let V=it.get(b[j]);V!==void 0&&V!==1&&(m[j]=Math.min(1,m[j]*V))}}let qt=0,Re=n.crownTone?n.crownTone.slice():null,ge=n.crownOverlap?n.crownOverlap.slice():null,F=n.twigPresence?n.twigPresence.slice():null,C=n.energies.slice();f===n.buds&&(f=f.slice()),u===n.florets&&(u=u.slice()),d===n.crownWeights&&(d=d.slice()),g===n.normals&&(g=g.slice());let K=[];for(let H=0;H<e;H++){if(i[H*3+1]<=.5)continue;let $=n.bundleBaseCount!==void 0&&H>=n.bundleBaseCount&&H<n.rootContactBaseCount,dt=n.twigBaseCount!==void 0&&H>=w&&H<n.twigBaseCount;($||dt)&&K.push(H)}let rt=.2,ut=new Map;for(let H=0;H<e;H+=2){if(i[H*3+1]>.5||i[H*3+2]>=9)continue;let $=`${Math.floor(h[H*3]/rt)},${Math.floor(h[H*3+1]/rt)},${Math.floor(h[H*3+2]/rt)}`;ut.set($,(ut.get($)||0)+2)}let ot=H=>{let $=0,dt=Math.floor(H[0]/rt),O=Math.floor(H[1]/rt),it=Math.floor(H[2]/rt);for(let j=-1;j<=1;j++)for(let V=-1;V<=1;V++)for(let G=-1;G<=1;G++)$+=ut.get(`${dt+j},${O+V},${it+G}`)||0;return $},Ut=T.filter(H=>H.id!==0&&!Tn.has(H.id)&&H.t>.35&&ot(H.q)<60).sort((H,$)=>$.t-H.t),gt=[];for(let H of Ut)gt.every($=>Math.hypot($[0]-H.q[0],$[1]-H.q[1],$[2]-H.q[2])>.42)&&gt.push([H.q[0],H.q[1]+.08,H.q[2]]);let Pt=fm(n,n.positions,n.buds).filter(H=>H.indices.length>=300&&H.indices.length<=2400),Nt=0,xt=0,Mt=0,kt=gt.length?Math.max(220,Math.min(700,Math.floor(K.length/gt.length))):0;for(let H=0;H<gt.length&&Mt<K.length&&Pt.length;H++){let $=Pt[Math.floor(fe(H,41)*Pt.length)],dt=gt[H],O=$.indices.map(G=>Math.hypot(n.buds[G*4],n.buds[G*4+1],n.buds[G*4+2])).sort((G,X)=>G-X),it=Math.max(.05,O[Math.floor(O.length*.85)]),j=(.16+.1*fe(H,42))/it,V=Math.min(kt,$.indices.length,K.length-Mt);for(let G=0;G<V;G++){let X=K[Mt++],tt=$.indices[Math.floor(G*$.indices.length/V)],st=X*3,ht=X*4,vt=-n.buds[tt*4]*j,Bt=-n.buds[tt*4+1]*j,Ct=-n.buds[tt*4+2]*j;h[st]=dt[0]+vt,h[st+1]=dt[1]+Bt,h[st+2]=dt[2]+Ct,f[ht]=-vt,f[ht+1]=-Bt,f[ht+2]=-Ct,f[ht+3]=n.buds[tt*4+3];for(let $t=0;$t<3;$t++)r[st+$t]=r[tt*3+$t],g[st+$t]=n.normals[tt*3+$t];lt[st]=n.growth[tt*3],lt[st+1]=0,lt[st+2]=n.growth[tt*3+2],u[X*2]=n.florets[tt*2],u[X*2+1]=n.florets[tt*2+1],d[X]=n.crownWeights[tt],C[X]=n.energies[tt],Re&&(Re[X]=n.crownTone[tt]),ge&&(ge[X]=Math.min(.3,n.crownOverlap[tt])),F&&(F[X]=n.twigPresence[tt]),y&&(y[st]=0,y[st+1]=0,y[st+2]=0),m[X]=1,xt++}Nt++}return{...n,colors:r,positions:h,buds:f,florets:u,crownWeights:d,normals:g,branchDensity:m,growth:lt,energies:C,...Re?{crownTone:Re}:{},...ge?{crownOverlap:ge}:{},...F?{twigPresence:F}:{},blossomStats:{flowers:Nt,grains:xt,candidates:Ut.length,pool:K.length},...y?{branchOutline:y}:{},cinematicFinishVersion:hm,cinematicFinishStats:{branchRecolored:a,crownEmbersToSilver:c,crownEmbersKept:l,radialFlowers:t,bundleHidden:p,cloneDimmed:E,limbsTidied:I,limbFringeFaded:D,limbFilled:U,limbFringeKept:z,gapFilled:k,rootSkirt:qt,rootKept:Z,rootFilled:et,rootTipStats:Zt,ladder:Rt,...x}}}var Xo=3,gm=30.57;function f2(n){let t=Math.min(1,Math.max(0,(n-(gm-.06))/.1));if(t<=0)return 0;let e=Math.max(0,n-gm);return t*(.12+.88*Math.exp(-e/.55))}var xm=4,d2=4,p2=1;async function vm({scene:n,scale:t=.085,position:e=new N(-.75,.008,.38),pixelRatio:i=1,screenHeight:s=720,grainSize:r=1,waterLevel:o=e.y-.002}){let a=sm(Qp(jp(Hp(Bp(Np(yp(gp(Lp(Pp(wp(await jd(void 0,{groundToWater:!1})))))))))))),c=!/[?&]flowers=radial\b/.test(globalThis.location?.search||""),l=mm(_p(lm(a)),{radialFlowers:!c}),h=l.twigBaseCount??l.count,f=qp(l);if(/[?&]debug=1\b/.test(globalThis.location?.search||"")&&(globalThis.__fireTreeCloud=l),/[?&]debug=layers\b/.test(globalThis.location?.search||"")){let V=[[0,l.baseCount,[1,.55,.2]],[l.baseCount+1e4,l.baseCount+1e4+(l.supportParticles||0),[1,1,0]],[l.baseCount+1e4+(l.supportParticles||0),l.twigBaseCount,[1,0,0]],[l.twigBaseCount,l.bundleBaseCount,[0,1,0]],[l.bundleBaseCount,l.rootContactBaseCount,[0,.3,1]],[l.rootContactBaseCount,l.rootContactBaseCount+800,[1,0,1]],[l.rootContactBaseCount+800,l.count,[0,1,1]]];for(let[G,X,tt]of V)for(let st=G;st<X;st++)l.growth[st*3+1]>.5&&l.colors.set(tt,st*3)}let{count:u,positions:d,colors:g,seeds:x,energies:m,normals:p,florets:E,crownWeights:w,buds:b,growth:v}=l,y=l.crownTone?{values:l.crownTone,unmatched:l.crownToneUnmatched}:sc(l),T=l.crownOverlap,S=new Float32Array(u*4);for(let V=0;V<u;V++)S[V*4]=y.values[V],S[V*4+1]=T[V],S[V*4+2]=l.branchDensity[V],S[V*4+3]=l.twigPresence[V];let M=oe[0][0],_=12.2/l.sourceWidth,A=new N((M[0]-l.sourceWidth*.5)*_,(l.sourceHeight*.5-M[1])*_,M[2]),R=10.5,L=new At(-.42,.06),I=new di,D=new N;for(let V=0;V<h;V++){let G=V*3,X=d[G+2],tt=1-X/R;D.set((d[G]+L.x)*tt-L.x,(d[G+1]+L.y)*tt-L.y,X),I.expandByPoint(D)}let U=I.getCenter(new N),z=new nn;z.name="fire-tree-lake-root",z.position.copy(e),z.scale.setScalar(t);let k=new nn;k.name="fire-tree-source-registered",k.position.copy(A).negate(),z.add(k);let J=await np(l,h,(V,G,X)=>{let tt=V[G*3+2],st=1-tt/R;X[0]=(V[G*3]+L.x)*st-L.x,X[1]=(V[G*3+1]+L.y)*st-L.y,X[2]=tt}),Y={uLetterCenter:{value:new N(A.x,A.y+Fe.lift,0)},uStrokes:{value:ep()},uBurstCenter:{value:new N(A.x-.3,A.y+2.4,0)},uRootRoutes:{value:f.texture},uRootRouteSize:{value:new At(f.width,f.height)},uTime:{value:0},uLiveTime:{value:0},uMotion:{value:1},uStoryTime:{value:0},uFlare:{value:0},uGhost:{value:0},uEncores:{value:Array.from({length:10},()=>new Ne(0,-99,0,-99))},uEncoreCount:{value:0},uResolution:{value:new At(1280,s)},uDensityScale:{value:Math.min(1,(s/720)**2)},uPointer:{value:new N(100,100,0)},uPointerPower:{value:0},uSize:{value:r},uPixelRatio:{value:i},uWorldScale:{value:t},uCrownGain:{value:.42},uMist:{value:1},uMistFloor:{value:.5},uDirectView:{value:1},uCrownViewCenter:{value:U},uWaterY:{value:o},uAlignmentDistance:{value:R},uAlignmentOffset:{value:L},uViewObliqueness:{value:0},uSettled:{value:0},uCamMotion:{value:0}},at=new Se;for(let[V,G,X]of[["position",d,3],["color",g,3],["aSeed",x,3],["aEnergy",m,1],["aVolumeNormal",p,3],["aFloret",E,2],["aCrownWeight",w,1],["aBud",b,4],["aGrowth",v,3],["aParticleDetail",S,4],["aBranchOutline",l.branchOutline,3],["aRootRoute",f.attributes,4],["aLetter",J,4]])at.setAttribute(V,new se(G,X));let lt=new he({uniforms:Y,vertexShader:lu,fragmentShader:cu,transparent:!0,depthWrite:!1,depthTest:!0,blending:Ue}),bt=new rn(at,lt);bt.name="fire-tree-particles",bt.frustumCulled=!1,k.add(bt);let ft=Math.ceil(u/xm),_t=new Uint32Array(ft);for(let V=0;V<ft;V++)_t[V]=V*xm;let Z=new Se;for(let[V,G]of Object.entries(at.attributes))Z.setAttribute(V,G);Z.setIndex(new se(_t,1));let et=new he({uniforms:Y,vertexShader:lu,fragmentShader:cu,defines:{REFLECTION_PASS:"",REFLECTION_ALPHA:(d2*Math.min(1,328909/h)).toFixed(3),REFLECTION_SIZE:p2.toFixed(3)},transparent:!0,depthWrite:!1,depthTest:!0,blending:Ue}),ct=new rn(Z,et);ct.name="fire-tree-particles-reflection",ct.frustumCulled=!1,k.add(ct);function yt(V,G,X){let tt=V.length,st=new Float32Array(tt*3),ht=new Float32Array(tt*3),vt=new Float32Array(tt*3),Bt=new Float32Array(tt*4),Ct=new Float32Array(tt),$t=new Float32Array(tt*4),Wt=new Float32Array(tt*3);V.forEach((zt,jt)=>{Bt.set(f.attributes.subarray(zt*4,zt*4+4),jt*4),st.set(d.subarray(zt*3,zt*3+3),jt*3),ht.set(g.subarray(zt*3,zt*3+3),jt*3),vt.set(x.subarray(zt*3,zt*3+3),jt*3),$t.set(b.subarray(zt*4,zt*4+4),jt*4),Wt.set(v.subarray(zt*3,zt*3+3),jt*3),Ct[jt]=m[zt]});let Ot=new Is,te=[],xe=[],Kt=12;for(let zt=0;zt<=Kt;zt++)te.push(zt/Kt,-1,0,zt/Kt,1,0);for(let zt=0;zt<Kt;zt++){let jt=zt*2;xe.push(jt,jt+1,jt+2,jt+1,jt+3,jt+2)}Ot.setAttribute("position",new pe(te,3)),Ot.setIndex(xe);for(let[zt,jt,je]of[["aHome",st,3],["aColor",ht,3],["aSeed",vt,3],["aRootRoute",Bt,4],["aEnergy",Ct,1],["aBud",$t,4],["aGrowth",Wt,3]])Ot.setAttribute(zt,new Rs(jt,je));Ot.instanceCount=tt;let me=new Ze(Ot,new he({uniforms:Y,defines:G,vertexShader:ap,fragmentShader:lp,transparent:!0,depthWrite:!1,depthTest:!0,side:vn,blending:Ue}));return me.name=X,me.frustumCulled=!1,k.add(me),me}let Tt=[],Ht=[];for(let V=0;V<h;V+=136)m[V]>=.35&&v[V*3+1]>.5&&Tt.push(V);for(let V=17;V<h;V+=41)v[V*3+1]<.5&&b[V*4+3]>.6&&m[V]>=.3&&Ht.push(V);let Me=yt(Tt,{},"fire-tree-flight-trails"),B=yt(Ht,{BURST_ONLY:""},"fire-tree-bloom-rays"),Zt=yt(Ht,{FLOW_ONLY:""},"silver-flow-traces"),Dt={value:0},Ft=bp({...Y,uTime:Dt},{groundToWater:!1,cloud:l});k.add(Ft);let Et=null,ae=!1,Rt=!1,qt=new N,Re=new N,ge=i,F=s;function C(V,G,X,tt,st){let ht=Et&&X!==Et,vt=V.getRenderTarget(),Bt=ht?1:ge,Ct=vt?.width??V.domElement.width,$t=vt?.height??V.domElement.height;Y.uResolution.value.set(Ct/Bt,$t/Bt),Y.uPixelRatio.value=Bt,Y.uDensityScale.value=Math.min(1,((ht?$t:F)/720)**2),X.getWorldPosition(qt),k.worldToLocal(qt),qt.sub(U);let Wt=Math.max(0,qt.z/Math.max(1e-4,qt.length()));Y.uViewObliqueness.value=Math.sqrt(Math.max(0,1-Wt*Wt)),Y.uCrownGain.value=ht?.16:.42,Y.uDirectView.value=ht?0:1,k.getWorldScale(Re),Y.uWorldScale.value=Math.abs(Re.x),st.uniformsNeedUpdate=!0}z.traverse(V=>{V.layers.enable(Xo),V.material&&(V.material.depthTest=!0,V.renderOrder=5,V.onBeforeRender=C)}),bt.layers.disable(Xo),ct.layers.set(Xo),Object.assign(z.userData,{version:"fire-tree-volume-water-bowl",count:u,sourceWidth:l.sourceWidth,sourceHeight:l.sourceHeight,registeredMinY:I.min.y,registeredMaxY:I.max.y,registeredBounds:{min:I.min.toArray(),max:I.max.toArray()},trails:Tt.length,burstRays:Ht.length,lightThreads:Ft.userData.count,crownClusters:Oo+l.addedCrownClusters,addedCrownClusters:l.addedCrownClusters,addedParticles:l.addedParticles,supportBranches:l.supportBranches,supportParticles:l.supportParticles,addedVolumeParticles:l.addedVolumeParticles,crownVolumeClusters:l.crownVolumeClusters,crownRadianceUnmatched:y.unmatched,branchOutlineVersion:l.branchOutlineVersion,branchStructureVersion:l.branchStructureVersion,branchFinalizationVersion:l.branchFinalizationVersion,crownLayerVersion:l.crownLayerVersion,branchRebuiltParticles:l.branchRebuiltParticles,branchHazeParticles:l.branchHazeParticles,branchJunctionParticles:l.branchJunctionParticles,twigAddedParticles:l.twigAddedParticles,twigVersion:l.twigParticleVersion,bundleAddedParticles:l.bundleAddedParticles,bundleParticleVersion:l.bundleParticleVersion,particleLayerVersion:l.particleLayerVersion,reconnectedSprayParticles:l.reconnectedSprayParticles,sprayConnectorParticles:l.sprayConnectorParticles,baseCount:l.baseCount,duration:le.duration,rootGrowthVersion:f.version,growthRoutes:f.height,rootContactParticles:l.rootContactAddedParticles,rootContactVersion:l.rootContactVersion,cinematicFinish:l.cinematicFinishStats}),n.add(z),z.updateMatrixWorld(!0);let K=Rd({content:k,cloud:l,uniforms:Y,waterLevel:o}),rt=Id({content:k,strands:l.rootStrandInfo,uniforms:Y}),ut=Object.freeze({phase:"off",activeGrains:0,silverGrains:0,emberGrains:0});function ot(V){if(ae)return null;if(Rt)return z.userData.registration;V.updateMatrixWorld(!0),z.updateWorldMatrix(!0,!0);let G=V.getWorldPosition(new N);z.worldToLocal(G);let X=G.z-k.position.z;if(X<=I.max.z+.01)throw new Error("Register the particle tree from a front camera outside its depth bounds.");let tt=A.z/G.z;k.position.set(-A.x-G.x*tt,-A.y-G.y*tt,-A.z);let st=G.clone().sub(k.position);Y.uAlignmentDistance.value=X,L.set(-st.x,-st.y),I.makeEmpty();for(let $t=0;$t<h;$t++){let Wt=$t*3,Ot=d[Wt+2],te=1-Ot/X;D.set((d[Wt]+L.x)*te-L.x,(d[Wt+1]+L.y)*te-L.y,Ot),I.expandByPoint(D)}I.getCenter(U),z.updateMatrixWorld(!0);let ht=1-A.z/X,vt=new N((A.x+L.x)*ht-L.x,(A.y+L.y)*ht-L.y,A.z),Bt=k.localToWorld(vt.clone()),Ct=z.getWorldPosition(new N);return Rt=!0,Object.assign(z.userData,{registeredMinY:I.min.y,registeredMaxY:I.max.y,registeredBounds:{min:I.min.toArray(),max:I.max.toArray()},registration:{frozen:!0,distance:X,offset:L.toArray(),cameraLocal:st.toArray(),planeZ:0,sourceRoot:A.toArray(),rootWorld:Bt.toArray(),rootAnchorResidual:Bt.clone().sub(Ct).toArray(),lowestPointRelativeToRoot:I.min.y+k.position.y}}),z.userData.registration}let Ut=(()=>{let V=/[?&]sheen=([\d.]+)/.exec(globalThis.location?.search||"");return V?Number(V[1]):null})(),gt=new N,Pt=new N,Nt=new N,xt=new N,Mt=new N,kt=0,H=!1,$=0,dt=/[?&]debug=1\b/.test(globalThis.location?.search||"");function O(V,G){if(Ut!==null){Y.uCamMotion.value=Ut;return}let X=performance.now()/1e3,tt=Math.min(X-kt,.05);if(kt=X,!V||!G){$=0,Y.uCamMotion.value=0,H=!1;return}V.getWorldPosition(gt),V.getWorldDirection(Nt);let st=0;if(H&&tt>0&&tt<2){let vt=gt.distanceTo(Pt);if(vt<.5){k.getWorldPosition(Mt);let Bt=vt/tt/Math.max(.3,gt.distanceTo(Mt))+Nt.angleTo(xt)/tt;st=Math.min(1,Math.max(0,(Bt-.015)/.145)),st=st*st*(3-2*st)}}let ht=Math.max(tt,0);$+=(st-$)*(1-Math.exp(-ht/(st>$?.35:1.5))),Pt.copy(gt),xt.copy(Nt),H=!0,Y.uCamMotion.value=$,dt&&(globalThis.__camMotion=$)}let it=new Set;function j({time:V,storyTime:G=V,liveTime:X=V,motion:tt=!0,camera:st}){if(ae)return;O(st,tt);let ht=He.clamp(Number(V)||0,0,le.duration),vt=Math.max(0,Number(G)||0);Et=st||Et,Y.uTime.value=ht,Y.uLiveTime.value=Math.max(0,Number(X)||0),Y.uStoryTime.value=vt;let Bt=Math.max(vt,Y.uLiveTime.value);Y.uFlare.value=tt?f2(Bt):0;let Ct=0;if(tt)for(let Ot of K.encoreBursts){let te=Bt-Ot.birth;te<-.05||te>2.4||Ct>=10||Y.uEncores.value[Ct++].set(Ot.center[0],Ot.center[1],Ot.center[2],Ot.birth)}Y.uEncoreCount.value=Ct,Dt.value=ht,Y.uMotion.value=tt?1:0,Y.uSettled.value=ht>=wd?1:0,Me.visible=ht<7.2,B.visible=!1,Zt.visible=!1;let $t=vt>Fe.start+.35;Y.uGhost.value=0,Ft.visible=ht>=le.growStart&&!$t,Ft.children.forEach((Ot,te)=>{te>0&&(Ot.visible=!$t)}),z.userData.time=ht,z.userData.liveTime=Y.uLiveTime.value;let Wt=K.update({time:Bt,motion:tt,pixelRatio:ge});rt.update({story:vt,live:Bt,motion:tt,pixelRatio:ge});for(let Ot of k.children)Ot===bt||Ot===ct||Ot===Me||Ot===B||Ot===Zt||Ot===Ft||($t&&Ot.visible?(Ot.visible=!1,it.add(Ot)):!$t&&it.has(Ot)&&(Ot.visible=!0,it.delete(Ot)));return z.userData.iron=Wt,z.userData.falling=ut,{iron:Wt,falling:ut}}return j({time:0}),{group:z,count:u,update:j,registerToCamera:ot,resetLiving(){},setReflection(V){z.traverse(G=>{G===bt||G.userData.directOnly||(G===ct?G.visible=!!V:V?G.layers.enable(Xo):G.layers.disable(Xo))})},resize({pixelRatio:V=ge,screenHeight:G=F}){ge=Math.max(.1,V),F=Math.max(1,G)},dispose(){ae||(ae=!0,K.dispose(),rt.dispose(),n.remove(z),f.texture.dispose(),z.traverse(V=>{V.geometry?.dispose(),Array.isArray(V.material)?V.material.forEach(G=>G.dispose()):V.material?.dispose()}))}}}var Ge=32.2,Yo=Object.freeze([31,Ge]),Wi=Object.freeze({azimuth:0,radius:1.4,eye:.26,target:.64,fov:55,narrowRetreat:1.1,narrowFov:76,narrowTarget:.64}),Mm=Math.PI*2/3,Du=Object.freeze({azimuth:Mm,radius:.82,eye:.17,target:.045,fov:46,narrowRetreat:1.04,narrowFov:60,narrowTarget:.05}),m2=Object.freeze({...Wi,azimuth:.035,radius:1.12,eye:.18,target:.26,fov:50,narrowRetreat:1.07,narrowFov:66,narrowTarget:.26}),g2=Object.freeze({...Wi,azimuth:.055,radius:1.42,eye:.21,target:.53,fov:56,narrowRetreat:1.1,narrowFov:76,narrowTarget:.51});var Fu=0,ui=7.2,qs=Object.freeze([Object.freeze({id:"seed",label:"\u4E00\u7C9F\u751F\u5149",time:.6,start:0,end:1.2}),Object.freeze({id:"grow",label:"\u91D1\u8109\u4E0A\u751F",time:3.6,start:1.2,end:ui}),Object.freeze({id:"bloom",label:"\u91D1\u94F6\u540C\u7EFD",time:9.6,start:ui,end:13.74}),Object.freeze({id:"tour",label:"\u706B\u6811\u73AF\u6E38",time:16,start:13.74,end:18.55}),Object.freeze({id:"letter",label:"\u70B8\u6811\u6210\u5B57",time:18.4,start:18.55,end:28.15}),Object.freeze({id:"finale",label:"\u706B\u6811\u94F6\u82B1",time:28.6,start:28.15,end:Ge})]),qo=(n,t,e,i,s)=>Object.freeze({azimuth:n,radius:t,eye:e,target:i,fov:s,narrowRetreat:Wi.narrowRetreat,narrowFov:s+(Wi.narrowFov-Wi.fov),narrowTarget:i}),x2=[[ui,Wi],[8.93,Wi],[20.93,qo(-.46,1.42,.42,.66,54)],[28.13,qo(-.55,1.62,.95,.7,53)],[33.4,qo(-.38,1.44,.62,.66,53)],[37.8,qo(0,1.42,.3,.64,55)],[38.6,qo(.015,1.56,.32,.65,55)]],Iu=ui,ym=.075;function v2(n){let t=le.bloomStart;return n<=Iu?0:n<=t?ym*un(Te((n-Iu)/(t-Iu),0,1)):ym*Math.exp(-(n-t)/.48)}var ps=Object.freeze({start:17.35,hit:18.55,depth:.05});function y2(n){return n<=ps.start?0:n<=ps.hit?ps.depth*un(Te((n-ps.start)/(ps.hit-ps.start),0,1)):ps.depth*Math.exp(-(n-ps.hit)/.48)}function _2(n){let t=Sm(x2,Te(n,ui,38.6)),e=v2(n)+y2(n);return t.radius*=1-e,t.target+=.45*e,t.narrowTarget+=.45*e,t}var Te=(n,t,e)=>Math.min(e,Math.max(t,n)),ti=(n,t)=>Number.isFinite(Number(n))?Number(n):t,un=n=>n*n*n*(n*(n*6-15)+10),Qn=(n,t,e)=>n+(t-n)*e,Sc=[[0,0],[10,0],[13,.06],[18,.06],[21,.1],[23.5,.05],[26,.01],[30,.01],[33,.06],[36,.06],[38.6,.024]];function M2(n){let t=Te(n,0,Ge),e=0;for(;e<Sc.length-2&&t>Sc[e+1][0];)e++;let[i,s]=Sc[e],[r,o]=Sc[e+1];return 1+Qn(s,o,un(Te((t-i)/(r-i),0,1)))}var wc=[[0,0],[10,0],[15,.12],[21,.22],[26,.33],[30,.3],[34,.14],[37.5,0],[38.6,0]];function b2(n){let t=Te(n,0,Ge),e=0;for(;e<wc.length-2&&t>wc[e+1][0];)e++;let[i,s]=wc[e],[r,o]=wc[e+1];return Qn(s,o,un(Te((t-i)/(r-i),0,1)))}function bm(n,{motion:t=!0}={}){let e=n>=18.55?n-18.55:n-le.bloomStart;if(!t||!Number.isFinite(e)||e<=0||e>=.56)return{roll:0};let i=un(Te(e/.018,0,1)),s=1-un(Te((e-.38)/.18,0,1)),r=i*Math.exp(-e/.13)*s;return{roll:Math.PI/180*r*(.78*Math.sin(e*83)+.22*Math.sin(e*127))}}function S2(n){return 1-(1-Math.min(1,Math.max(0,(n-Fu)/(ui-Fu))))**3}function _m(n,t,e){let i=Math.abs(n-t);return Math.max(n,t)+(e>0&&i<e?(e-i)*(e-i)/(4*e):0)}var w2=[[0,Du],[1.2,Du],[3.5,m2],[6.4,g2],[10.8,Wi],[12.4,Wi]];function Sm(n,t){let e=n.findIndex((h,f)=>f<n.length-1&&t<=n[f+1][0]);e<0&&(e=n.length-2);let i=n[e],s=n[e+1],r=s[0]-i[0],o=Te((t-i[0])/r,0,1),a=o*o,c=a*o,l=(h,f)=>{if(h===0||h===n.length-1)return 0;let u=n[h-1],d=n[h],g=n[h+1],x=d[0]-u[0],m=g[0]-d[0],p=(d[1][f]-u[1][f])/x,E=(g[1][f]-d[1][f])/m;if(p*E<=0)return 0;let w=2*m+x,b=m+2*x;return(w+b)/(w/p+b/E)};return Object.fromEntries(Object.keys(Du).map(h=>[h,(2*c-3*a+1)*i[1][h]+(c-2*a+o)*r*l(e,h)+(-2*c+3*a)*s[1][h]+(c-a)*r*l(e+1,h)]))}function wm(n){return qs.find(t=>t.id===n)?.time??qs[0].time}function Tm(n,{waterLevel:t=.6197133937500414,aspect:e=16/9}={}){let i=Te(ti(n,0),0,Ge),s=ti(t,.6197133937500414),r=Math.max(.3,ti(e,16/9)),o=i+3.6*un(Te((i-2)/5.2,0,1)),a=i<ui?Sm(w2,o):_2(i);if(o>2&&o<10.8){let y=un(Te((o-2)/2.1,0,1))*(1-un(Te((o-8)/2.8,0,1)));a.radius+=.24*y,a.target+=.08*y,a.narrowTarget+=.08*y,a.fov+=4*y,a.narrowFov+=9*y,a.narrowRetreat+=.06*y}i<ui&&(a.azimuth=Mm*(1-S2(i)));let c=un(Te((1.25-r)/.65,0,1)),l=Qn(a.fov,a.narrowFov,c),h=Math.tan(l*Math.PI/360),f=Math.tan(a.fov*Math.PI/360),u=a.radius*Qn(1,a.narrowRetreat,c),d=un(Te((a.eye-a.target)/.7,0,1)),g=Qn(.84,.67,d),x=a.radius*f*(16/9)*g/(h*r)*M2(i),m=un(Te((o-2)/3.6,0,1)),p=Qn(u,_m(u,x,.08*c),m),E=p/a.radius,w=s+Qn(a.target,a.narrowTarget,c),b=s+a.eye+_m(0,a.eye-a.target,.05)*(E-1)+b2(i)*c,v=[...qs].reverse().find(y=>i>=y.start)??qs[0];return{position:[Math.sin(a.azimuth)*p,b,Math.cos(a.azimuth)*p],target:[0,w,0],fov:l,shot:v.id,label:v.label,phase:i<Fu?"root-opening":i>=ui?"hold":"travel"}}var Gr=1.8,T2=5.2,Lu=null;function E2(n){if(Lu?.aspect===n)return Lu.curves;let t=.001,i=[Gr-t,Gr,Gr+t,ui].map(r=>Tm(r,{aspect:n,waterLevel:0})),s=[r=>Math.log(Math.hypot(r.position[0],r.position[2])),r=>Math.log(Math.tan(r.fov*Math.PI/360)),r=>r.position[1],r=>r.target[1]].map(r=>{let o=i.map(r);return[o[1],o[3],(o[2]-o[0])/(2*t)]});return Lu={aspect:n,curves:s},s}function A2(n,t={}){let e=Te(ti(n,0),0,Ge),i=Tm(e,t);if(e<=Gr||e>=ui)return i;let s=Math.max(.3,ti(t.aspect,16/9)),r=ti(t.waterLevel,.6197133937500414),o=T2-Gr,a=Te((e-Gr)/o,0,1),c=a*a,l=c*a,[h,f,u,d]=E2(s).map(([p,E,w])=>(2*l-3*c+1)*p+(l-2*c+a)*o*w+(-2*l+3*c)*E),g=Math.exp(h),x=Math.exp(f),m=g/Math.hypot(i.position[0],i.position[2]);return i.position[0]*=m,i.position[2]*=m,i.position[1]=r+u,i.target[1]=r+d,i.fov=Math.atan(x)*360/Math.PI,i}var Tc=[[0,0],[3,0],[7.2,.02],[9,.03],[13,.035],[16.5,.052],[20,.05],[25,.05],[31,.064],[35,.06],[37,.04],[38.6,.035]];function C2(n){let t=Te(n,0,Ge),e=0;for(;e<Tc.length-2&&t>Tc[e+1][0];)e++;let[i,s]=Tc[e],[r,o]=Tc[e+1];return Qn(s,o,un(Te((t-i)/(r-i),0,1)))}var Ec=[[0,0],[1.2,0],[2.4,.085],[3.2,.097],[4.2,.065],[5.2,.025],[6.2,0],[8,.008],[10,.01],[13,.018],[18,.018],[21,.008],[24,.018],[35,.018],[37.5,.008],[38.6,.006]];function R2(n){let t=Te(n,0,Ge),e=0;for(;e<Ec.length-2&&t>Ec[e+1][0];)e++;let[i,s]=Ec[e],[r,o]=Ec[e+1];return Qn(s,o,un(Te((t-i)/(r-i),0,1)))}var En=Object.freeze({start:18.55,settle:20.9,centre:.7445,height:1.44,width:.52,fov:45,push:.03,fill:.58});function P2(n,t,e,i){let s=Te(ti(t,0),0,Ge);if(s<=En.start)return n;let r=un(Te((s-En.start)/(En.settle-En.start),0,1)),o=Math.tan(En.fov*Math.PI/360),c=Math.max(En.height/En.fill/(2*o),En.width/.8/(2*o*e))*(1-En.push*un(Te((s-En.settle)/9,0,1))),l=ti(i,.6197133937500414)+.002+En.centre,h={position:[0,l,c],target:[0,l,0]};n.position=n.position.map((u,d)=>Qn(u,h.position[d],r)),n.target=n.target.map((u,d)=>Qn(u,h.target[d],r)),n.fov=Qn(n.fov,En.fov,r);let f=Math.sin(Math.PI*Te((s-En.start)/(En.settle-En.start),0,1)**.6)**2;return n.position=n.position.map((u,d)=>n.target[d]+(u-n.target[d])*(1+.45*f)),n}function Ac(n,t={}){return P2(I2(n,t),n,Math.max(.3,ti(t.aspect,16/9)),t.waterLevel)}function I2(n,t={}){let e=A2(n,t),i=Math.max(.3,ti(t.aspect,16/9)),s=un(Te((1.25-i)/.65,0,1)),r=C2(Te(ti(n,0),0,Ge))+R2(ti(n,0))*s;if(!r)return e;let[o,a,c]=e.position,[l,h,f]=e.target,u=l-o,d=h-a,g=f-c,x=Math.hypot(u,d,g)||1,m=Math.hypot(u,g)||1,p=-g/m,E=u/m,w=r*2*x*Math.tan(e.fov*Math.PI/360)*i;return e.position=[o-p*w,a,c-E*w],e.target=[l-p*w,h,f-E*w],e}var L2=(n,t,e)=>Math.min(e,Math.max(t,n));function Nu(n){let t=L2(Number.isFinite(Number(n))?Number(n):0,0,17),[e,i]=t<1.5?["seed","\u6C34\u5FC3\u84C4\u5149"]:t<3.3?["rise","\u91D1\u8109\u4E0A\u751F"]:t<7.2?["branch","\u679D\u8109\u8212\u5C55"]:t<9?["iron","\u679D\u7AEF\u51DD\u91D1"]:t<10.2?["burst","\u94C1\u82B1\u94F6\u82B1\u540C\u7EFD"]:t<11.4?["curtain","\u6EE1\u5EAD\u91D1\u96E8"]:t<12.6?["bloom","\u94F6\u82B1\u7EFD\u653E"]:t<17?["settle","\u4F59\u8F89\u5165\u679D"]:["hold","\u706B\u6811\u94F6\u82B1"];return{particleTime:t,stage:e,label:i}}var Xi=240,Cc=7,Em=3.8,D2=n=>Math.max(0,Math.min(1,n)),Wr=n=>{let t=D2(n);return t*t*(3-2*t)};function fn(n,t){let e=Math.imul(n+1741,2654435761)^Math.imul(t+719,2246822507);return e=Math.imul(e^e>>>16,2146121005),e=Math.imul(e^e>>>15,2221713035),((e^e>>>16)>>>0)/4294967296}function Am({scene:n,waterLevel:t,pixelRatio:e=1}){if(!n?.add||!Number.isFinite(t))throw new TypeError("A scene and finite waterLevel are required.");let i=new Float32Array(Xi*3),s=new Float32Array(Xi*3),r=new Float32Array(Xi),o=new Float32Array(Xi),a=new Float32Array(Xi),c=new Float32Array(Xi);for(let p=0;p<Xi;p++)a[p]=-.12+fn(p,0)*2.65,c[p]=.55+fn(p,1)*.6,o[p]=.85+fn(p,2)*.6,p<Cc&&(a[p]=.012+p*.027,c[p]=2.45+fn(p,1)*.3,o[p]=1.85+fn(p,2)*.2);let l=new Se;l.setAttribute("position",new se(i,3).setUsage(Po)),l.setAttribute("color",new se(s,3).setUsage(Po)),l.setAttribute("aAlpha",new se(r,1).setUsage(Po)),l.setAttribute("aSize",new se(o,1));let h={value:Math.max(.1,Number(e)||1)},f=new he({uniforms:{uPixelRatio:h},transparent:!0,depthTest:!0,depthWrite:!1,blending:Ue,vertexShader:`
      attribute vec3 color;
      attribute float aAlpha;
      attribute float aSize;
      uniform float uPixelRatio;
      varying vec3 vColor;
      varying float vAlpha;
      void main(){
        vec4 mv=modelViewMatrix*vec4(position,1.);
        gl_Position=projectionMatrix*mv;
        float minimum=mix(.60,1.50,step(1.8,aSize));
        gl_PointSize=clamp(aSize*uPixelRatio*1.05/max(.75,-mv.z),minimum*uPixelRatio,2.20*uPixelRatio);
        vColor=color;vAlpha=aAlpha;
        if(aAlpha<.0015){gl_Position=vec4(2.,2.,2.,1.);gl_PointSize=0.;}
      }
    `,fragmentShader:`
      varying vec3 vColor;
      varying float vAlpha;
      void main(){
        float r=length(gl_PointCoord-.5)*2.;
        if(r>=1.)discard;
        float core=exp(-3.6*r*r)*(1.-smoothstep(.60,1.,r));
        gl_FragColor=vec4(vColor,vAlpha*core);
      }
    `}),u=new rn(l,f);u.name="root-opening-ignition",u.layers.set(0),u.frustumCulled=!1,u.renderOrder=6;let d=u.userData;Object.assign(d,{version:"root-ignition-v2",particleCount:Xi,hotSeedCount:Cc,directEnergyGain:2.1,layer:0,root:[0,t,0],clearAt:Em,time:0,aliveCount:0,aboveWaterCount:0,alphaSum:0,reduced:!0,disposed:!1}),n.add(u);let g=!1;function x({time:p=0,reduced:E=!1,pixelRatio:w}={}){if(g)return d;let b=Math.max(0,Number(p)||0);Number.isFinite(w)&&(h.value=Math.max(.1,w));let v=E||b>=Em,y=Wr(b/.18),T=1-Wr((b-2.75)/.95),S=.78+.32*Math.exp(-(((b-1.75)/.4)**2)),M=0,_=0,A=0,R=0;for(let L=0;L<Xi;L++){let I=L*3,D=(b-a[L])/c[L];if(i[I]=0,i[I+1]=t-.001,i[I+2]=0,s[I]=s[I+1]=s[I+2]=0,r[L]=0,v||D<=0||D>=1)continue;let U=Math.pow(D,.88),z=Math.sin(Math.PI*D),k=fn(L,3)*Math.PI*2,J=(.0025+.005*z)*Math.sqrt(fn(L,4));i[I]=-.028*U+Math.cos(k)*J+Math.sin(D*7+fn(L,5)*9)*.0012*z,i[I+1]=t-.001+.044*U,i[I+2]=-.014*U+Math.sin(k)*J+Math.cos(D*6+fn(L,6)*8)*.001*z;let Y=L<Cc;if(Y){let _t=Math.pow(D,.72),Z=L*2.3999632297,et=(.0035+.0025*z)*Math.sqrt((L+.5)/Cc);i[I]=-.009*_t+Math.cos(Z)*et,i[I+1]=t-.001+.019*_t,i[I+2]=-.0045*_t+Math.sin(Z)*et}let at=fn(L,7)>.9?1:0,lt=.5+.5*Math.sin(b*(5+fn(L,8)*5)+fn(L,9)*31),bt=Wr(D/.08)*(1-Wr((D-.55)/.45)),ft=2.1*(.18+.16*at+.09*fn(L,10))*bt*(.68+.32*lt*lt)*y*T*S;if(s[I]=.97+.65*at+.16*U,s[I+1]=.2+.38*at+.1*z,s[I+2]=.035+.085*at,Y){let _t=Wr(D/.06)*(1-Wr((D-.78)/.22));ft=(.62+.12*fn(L,10))*_t*(.88+.12*Math.sin(b*3.2+L*.8))*y*T*S,s[I]=1.85+.22*fn(L,11),s[I+1]=.7+.24*fn(L,12),s[I+2]=.1+.08*fn(L,13)}ft=Math.min(.86,ft),r[L]=ft,R+=ft,ft>=.0015&&(M++,Y&&A++,i[I+1]>=t&&_++)}return u.visible=M>0,l.getAttribute("position").needsUpdate=!0,l.getAttribute("color").needsUpdate=!0,l.getAttribute("aAlpha").needsUpdate=!0,Object.assign(d,{time:b,reduced:!!E,aliveCount:M,aboveWaterCount:_,activeHotSeedCount:A,alphaSum:R,visible:u.visible,pixelRatio:h.value}),d}function m(){g||(g=!0,u.visible=!1,n.remove(u),l.dispose(),f.dispose(),Object.assign(d,{disposed:!0,aliveCount:0,aboveWaterCount:0,activeHotSeedCount:0,alphaSum:0,visible:!1}))}return x({time:0,reduced:!0}),{update:x,dispose:m,userData:d}}var F2=n=>Math.max(0,Math.min(1,n)),Cm=(n,t,e)=>{let i=F2((e-n)/(t-n));return i*i*(3-2*i)};function Rm(n){let e=document.createElement("canvas");e.width=e.height=128;let i=e.getContext("2d"),s=i.createRadialGradient(128/2,128/2,0,128/2,128/2,128/2);for(let[o,a]of n)s.addColorStop(o,a);i.fillStyle=s,i.fillRect(0,0,128,128);let r=new go(e);return r.colorSpace=ln,r}function N2(n){let t=Math.max(0,Number(n)||0),e=Cm(0,.14,t),i=1-Cm(2.1,3.6,t),s=Math.exp(-(((t-.32)/.11)**2)),r=Math.exp(-(((t-1.78)/.13)**2)),o=.78+.22*Math.sin(t*5.6);return{level:e*i*(.62*o+1.15*s+.85*r),entry:s,heartbeat:r}}function Pm({scene:n,root:t}){let e=new vr(new As({map:Rm([[0,"rgba(255,250,236,1)"],[.22,"rgba(255,214,150,.9)"],[.55,"rgba(255,140,60,.22)"],[1,"rgba(255,90,20,0)"]]),blending:Ue,transparent:!0,depthWrite:!1,depthTest:!0})),i=new vr(new As({map:Rm(Array.from({length:11},(o,a)=>{let c=a/10,l=.52*Math.exp(-c*c*9),h=Math.round(186-70*c),f=Math.round(108-70*c);return[c,`rgba(255,${h},${f},${(a===10?0:l).toFixed(4)})`]})),blending:Ue,transparent:!0,depthWrite:!1,depthTest:!0})),s=new nn;s.name="opening-seed-light",s.position.copy(t).add(new N(0,.004,0)),s.add(i,e),s.traverse(o=>{o.renderOrder=7,o.frustumCulled=!1}),n.add(s);function r({time:o=0,reduced:a=!1}={}){let{level:c,entry:l,heartbeat:h}=N2(o),f=!a&&c>.002;if(s.visible=f,!f)return{level:0};let u=.013+.01*l+.006*h,d=.05*(1+.75*l+.45*h);return e.scale.setScalar(u),i.scale.setScalar(d),e.material.opacity=Math.min(1,c),i.material.opacity=Math.min(1,.75*c),{level:c}}return r({time:0,reduced:!0}),{group:s,update:r,dispose(){n.remove(s);for(let o of[e,i])o.material.map.dispose(),o.material.dispose()}}}var tn=n=>{let t=Math.sin(n*12.9898+78.233)*43758.5453;return t-Math.floor(t)},Rc=2800,Pc=1400,Im=Object.freeze([]),U2=`
uniform float uStory;
uniform float uLive;
uniform float uPixelRatio;
uniform float uMotion;
uniform vec3 uCrown;
${ac}
attribute vec4 aSeed;
attribute float aWarm;
varying float vAlpha;
varying vec3 vColor;
varying float vSoft;
void main(){
 float t=uLive;
 vec3 p=position;
 // Slow rise with a lateral breath; wraps inside a 2.2 m tall column.
 float rise=mod(p.y-uCrown.y+1.1+t*(.035+.05*aSeed.x)*uMotion,2.2)-1.1;
 p.y=uCrown.y+rise;
 p.x+=sin(t*(.21+.2*aSeed.y)+aSeed.z*6.28)*.07*uMotion;
 p.z+=cos(t*(.17+.2*aSeed.x)+aSeed.w*6.28)*.07*uMotion;
 // Released by the shared bloom: a short outward breath from the crown.
 float kick=step(8.93,uStory)*exp(-max(0.,uStory-8.93)/.9)*uMotion;
 p+=normalize(p-uCrown+vec3(.0001))*.22*kick;
 vec4 mv=modelViewMatrix*vec4(p,1.);
 gl_Position=projectionMatrix*mv;
 float dist=max(.15,-mv.z);
 float size=(1.1+2.4*aSeed.y)*1.35/dist;
 gl_PointSize=clamp(size*uPixelRatio*4.,1.2*uPixelRatio,16.*uPixelRatio);
 vSoft=smoothstep(4.,14.,gl_PointSize/uPixelRatio);
 float presence=mix(.22*aWarm,1.,smoothstep(8.9,9.7,uStory));
 float twinkle=.55+.45*sin(t*(1.3+aSeed.z*2.)+aSeed.x*40.);
 float beat=rhythmImpact(uStory,.05+.1*aSeed.w)*.8;
 // Near grains are soft and faint (out of focus); far ones small and crisp.
 vAlpha=presence*(.16+.22*aSeed.w)*twinkle*(1.+beat)*mix(1.,.35,vSoft)*smoothstep(.12,.45,dist);
 vColor=mix(vec3(.82,.88,1.05),vec3(1.25,.62,.26),aWarm);
 if(vAlpha<.003){gl_Position=vec4(2.,2.,2.,1.);gl_PointSize=0.;}
}
`,O2=`
varying float vAlpha;
varying vec3 vColor;
varying float vSoft;
void main(){
 float r=length(gl_PointCoord-.5)*2.;
 if(r>=1.)discard;
 float shape=mix(exp(-5.5*r*r),exp(-2.2*r*r)*(1.-r),vSoft);
 gl_FragColor=vec4(vColor,shape*vAlpha);
}
`,B2=`
uniform float uLive;
uniform float uPixelRatio;
uniform float uMotion;
uniform vec3 uCrown;
attribute float aU;
attribute vec4 aRibbon;   // start time, angle, turns(signed), radius
attribute vec4 aShape;    // height offset, rise, duration, scale
varying float vAlpha;
varying vec3 vColor;
void main(){
 float u=aU;
 float age=(uLive-aRibbon.x)/aShape.z;
 float head=1.-pow(1.-clamp(age,0.,1.2),2.);
 float tail=.32;
 float theta=aRibbon.y+u*aRibbon.z*6.2831853;
 float r=aRibbon.w*(.55+.62*u);
 vec3 p=uCrown+vec3(cos(theta)*r,aShape.x+(u-.5)*aShape.y+sin(u*9.+aRibbon.y)*.05,sin(theta)*r*.8);
 vec4 mv=modelViewMatrix*vec4(p,1.);
 gl_Position=projectionMatrix*mv;
 float lit=smoothstep(head-tail,head,u)*step(u,head);
 float fade=(1.-smoothstep(.75,1.15,age))*step(0.,age);
 float hot=exp(-pow((head-u)*22.,2.));
 vAlpha=(lit*lit*.55+hot*.9)*fade*aShape.w*uMotion;
 gl_PointSize=(1.6+2.6*hot)*uPixelRatio*clamp(1.7/max(.3,-mv.z),.6,1.6);
 vColor=mix(vec3(1.0,1.04,1.15),vec3(1.9,1.35,.7),hot);
 if(vAlpha<.003){gl_Position=vec4(2.,2.,2.,1.);gl_PointSize=0.;}
}
`,z2=`
varying float vAlpha;
varying vec3 vColor;
void main(){
 float r=length(gl_PointCoord-.5)*2.;
 if(r>=1.)discard;
 gl_FragColor=vec4(vColor,exp(-4.*r*r)*vAlpha);
}
`;function Lm({scene:n,root:t,pixelRatio:e=1}){let i=new N(t.x,t.y+.92,t.z),s={uStory:{value:0},uLive:{value:0},uPixelRatio:{value:e},uMotion:{value:1},uCrown:{value:i}},r=new Float32Array(Rc*3),o=new Float32Array(Rc*4),a=new Float32Array(Rc);for(let v=0;v<Rc;v++){let y=tn(v*7+1)<.18,T=(tn(v*7+2)-.5)*(y?2.4:4.6),S=y?.9+tn(v*7+3)*.9:(tn(v*7+3)-.5)*4.2;r.set([i.x+T,i.y+(tn(v*7+4)-.5)*2.2,i.z+S],v*3),o.set([tn(v*7+5),tn(v*7+6),tn(v*7+8),tn(v*7+9)],v*4),a[v]=tn(v*7+10)<.28?1:0}let c=new Se;c.setAttribute("position",new se(r,3)),c.setAttribute("aSeed",new se(o,4)),c.setAttribute("aWarm",new se(a,1));let l=(v,y)=>new he({uniforms:s,vertexShader:v,fragmentShader:y,transparent:!0,depthWrite:!1,depthTest:!0,blending:Ue}),h=new rn(c,l(U2,O2));h.name="atmosphere-dust";let f=[];Im.forEach((v,y)=>{for(let T=0;T<v.count;T++)f.push({event:v,e:y,k:T})});let u=f.length*Pc,d=new Float32Array(u),g=new Float32Array(u*4),x=new Float32Array(u*4);f.forEach(({event:v,e:y,k:T},S)=>{let M=y*101+T*13,_=v.time+T*.045+tn(M)*.05,A=tn(M+1)*6.283,R=(1.05+.55*tn(M+2))*(tn(M+3)<.5?-1:1),L=(.85+.45*tn(M+4))*(.85+.15*v.scale),I=(tn(M+5)-.45)*.55,D=(.6+.7*tn(M+6))*(tn(M+7)<.7?1:-1),U=1.5+.7*tn(M+8);for(let z=0;z<Pc;z++){let k=S*Pc+z;d[k]=z/(Pc-1),g.set([_,A,R,L],k*4),x.set([I,D,U,v.scale],k*4)}});let m=new Se;m.setAttribute("position",new se(new Float32Array(u*3),3)),m.setAttribute("aU",new se(d,1)),m.setAttribute("aRibbon",new se(g,4)),m.setAttribute("aShape",new se(x,4));let p=new rn(m,l(B2,z2));p.name="atmosphere-light-ribbons";let E=new nn;E.name="cinematic-atmosphere",E.add(h),u&&E.add(p),E.traverse(v=>{v.frustumCulled=!1,v.renderOrder=8}),n.add(E);let w=Im.map(v=>[v.time-.05,v.time+3]);function b({time:v=0,liveTime:y=v,motion:T=!0,pixelRatio:S}={}){s.uStory.value=v,s.uLive.value=Math.max(v,y),s.uMotion.value=T?1:0,Number.isFinite(S)&&(s.uPixelRatio.value=S);let M=s.uLive.value;return p.visible=u>0&&T&&w.some(([_,A])=>M>=_&&M<=A),h.visible=!0,{ribbons:p.visible}}return{group:E,update:b,dispose(){n.remove(E),c.dispose(),m.dispose(),h.material.dispose(),p.material.dispose()}}}var k2=new URL("cinematic-v2/audio/imperial-china-final-cut.wav?v=20261030-v3h21",document.baseURI),Uu=(n,t,e)=>Math.min(e,Math.max(t,n));function Dm({getTime:n,isPlaying:t,duration:e=32.2,fade:i=null,onState:s=()=>{}}){let r,o,a,c,l,h=0,f=0,u=!1,d=!1,g=0,x=0,m=_=>s({enabled:u,status:_}),p=document.getElementById("scene");function E(){if(!p)return;let _=!!c&&!!r&&r.state==="running",A=_?Math.min(e,f+r.currentTime-h):null,R=Number(n())||0;p.dataset.audioPlaying=String(_),p.dataset.audioContext=r?.state||"uninitialized",p.dataset.audioTime=A===null?"":A.toFixed(3),p.dataset.audioDrift=A===null?"":(A-R).toFixed(3),p.dataset.audioLoaded=String(!!o)}function w(){if(!c||!r)return;let _=c,A=l;c=l=null,E();try{A.gain.cancelScheduledValues(r.currentTime),A.gain.setValueAtTime(A.gain.value,r.currentTime),A.gain.linearRampToValueAtTime(0,r.currentTime+.025),_.stop(r.currentTime+.03)}catch{}}function b(){if(w(),!u||!o||!r||d||!t()||document.hidden||r.state!=="running")return;let _=Uu(Number(n())||0,0,Math.min(e,o.duration));if(_>=Math.min(e,o.duration)-.02)return;let A=r.createBufferSource(),R=r.createGain();A.buffer=o;let L=i?1-Uu((_-i[0])/(i[1]-i[0]),0,1):1;if(R.gain.setValueAtTime(1e-4,r.currentTime),R.gain.linearRampToValueAtTime(Math.max(1e-4,L),r.currentTime+.03),i){let I=r.currentTime+Math.max(.03,i[0]-_),D=r.currentTime+Math.max(.04,i[1]-_);R.gain.setValueAtTime(Math.max(1e-4,L),I),R.gain.linearRampToValueAtTime(1e-4,D)}A.connect(R),R.connect(r.destination),c=A,l=R,A.onended=()=>{c===A&&(c=l=null,E())},h=r.currentTime,f=_,x=r.currentTime,A.start(0,_),E()}function v(){return o?Promise.resolve(o):(a||(a=fetch(k2).then(_=>{if(!_.ok)throw new Error(`\u914D\u4E50\u52A0\u8F7D\u5931\u8D25\uFF08HTTP ${_.status}\uFF09`);return _.arrayBuffer()}).then(_=>r.decodeAudioData(_)).then(_=>{if(_.duration<e-.05)throw new Error("\u914D\u4E50\u65F6\u957F\u4E0D\u8DB3");return o=_,E(),_}).catch(_=>{throw a=null,_})),a)}async function y(){if(d)return;let _=++g;if(u){u=!1,w(),m("off");return}let A=window.AudioContext||window.webkitAudioContext;if(!A){m("unsupported");return}try{r||=new A,E();let R=r.resume();if(u=!0,m(o?"on":"loading"),await Promise.all([v(),R]),_!==g||!u||d)return;if(r.state!=="running")throw new Error("\u6D4F\u89C8\u5668\u5C1A\u672A\u5141\u8BB8\u64AD\u653E\u58F0\u97F3");b(),m("on")}catch(R){if(_!==g||d)return;u=!1,w(),m("error"),console.error("\u97F3\u9891\u521D\u59CB\u5316\u5931\u8D25",R)}}function T(){if(E(),!u||!c||!r||!t()||document.hidden)return;let _=f+r.currentTime-h;r.currentTime-x>.8&&Math.abs(_-n())>.28&&b()}function S(){return!u||!c||!r||r.state!=="running"||!t()||document.hidden?null:Uu(f+r.currentTime-h,0,e)}function M(){d=!0,u=!1,g++,w(),r&&r.close().catch(()=>{})}return E(),m("off"),{toggle:y,sync:b,tick:T,getPlaybackTime:S,dispose:M}}var We=n=>document.getElementById(n),dn=new URLSearchParams(location.search),Fm=matchMedia("(prefers-reduced-motion: reduce)"),An={get matches(){return dn.get("motion")==="reduce"||Fm.matches},addEventListener:(n,t)=>Fm.addEventListener(n,t)},Zo=17,Nm=.225,On=.6197133937500414,de=dn.has("t")?He.clamp(Number(dn.get("t"))||0,0,Ge):An.matches?Zo:0;An.matches&&(de=Zo);var Xn=dn.has("t")||An.matches,qe=!0,Ys=performance.now(),ei=null,Xr=dn.has("t")?Math.max(0,Number(dn.get("t"))||0):de;dn.has("clean")&&document.body.classList.add("clean");async function H2(){let n=We("scene"),t=new ql({canvas:n,antialias:!0,alpha:!1,premultipliedAlpha:!1,preserveDrawingBuffer:!0});t.outputColorSpace=ln,t.toneMapping=_r,t.toneMappingExposure=1;let e=new fo,i=new N(0,On+.002,0),s=new Qt(0);e.background=s.clone();let r=new gn(60,innerWidth/innerHeight,.005,80),o=new In,a=new $l(r,n);a.enableDamping=!0,a.dampingFactor=.07,a.enablePan=!1,a.minDistance=.65,a.maxDistance=5,a.minPolarAngle=.1,a.maxPolarAngle=Math.PI-.1;let c=()=>Math.min(devicePixelRatio||1,1.65,Math.sqrt(42e5/(innerWidth*innerHeight))),l=c();t.setPixelRatio(l),t.setSize(innerWidth,innerHeight,!1);let h=new Kl(t);h.addPass(new Jl(e,r)),h.addPass(new Pr(new At(innerWidth,innerHeight),.14,.12,.9)),h.addPass(new Ql);let f=new Rr({uniforms:{tDiffuse:{value:null},uFade:{value:1}},vertexShader:"varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:"uniform sampler2D tDiffuse;uniform float uFade;varying vec2 vUv;void main(){vec4 c=texture2D(tDiffuse,vUv);gl_FragColor=vec4(c.rgb*uFade,c.a);}"});h.addPass(f);let u=Am({scene:e,waterLevel:On,pixelRatio:l}),d=Pm({scene:e,root:i}),g=Lm({scene:e,root:i,pixelRatio:l}),x=await vm({scene:e,scale:Nm,grainSize:.82,position:i,waterLevel:On,pixelRatio:l,screenHeight:innerHeight});x.setReflection(!1);let m=r.clone(),p=Nm/.145;m.position.set(0,i.y+(.75-i.y)*p,2.4*p),m.updateMatrixWorld(!0),x.registerToCamera(m),Object.assign(n.dataset,{registration:JSON.stringify(x.group.userData.registration),particles:String(x.count),addedVolumeParticles:String(x.group.userData.addedVolumeParticles),waterLevel:String(On),treeRoot:JSON.stringify(i.toArray()),version:"cinematic-v2b-20261028",branchStructureVersion:String(x.group.userData.branchStructureVersion||""),growthMode:"root-fed",growthRoutes:String(x.group.userData.growthRoutes||0),rootContactParticles:String(x.group.userData.rootContactParticles||0),rootGrowthVersion:String(x.group.userData.rootGrowthVersion||""),bundleParticles:String(x.group.userData.bundleAddedParticles||0),bundleVersion:String(x.group.userData.bundleParticleVersion||"")});let E=Dm({getTime:()=>de,isPlaying:()=>!Xn,duration:Ge,fade:Yo,onState:({enabled:I,status:D})=>{let U=We("sound");U.textContent=D==="loading"?"\u914D\u4E50\u51C6\u5907\u4E2D":I?"\u914D\u4E50\u5F00":"\u914D\u4E50\u5173",U.setAttribute("aria-pressed",String(I)),U.title=D==="unsupported"?"\u5F53\u524D\u6D4F\u89C8\u5668\u4E0D\u652F\u6301\u914D\u4E50":D==="error"?"\u914D\u4E50\u672A\u80FD\u52A0\u8F7D\uFF0C\u8BF7\u91CD\u8BD5":"\u5F00\u542F\u6216\u5173\u95ED\u914D\u4E50",n.dataset.audioState=D}});We("sound").addEventListener("click",()=>E.toggle());let w=I=>I*I*I*(I*(I*6-15)+10);function b(I=0){let D=Ac(de,{waterLevel:On,aspect:r.aspect});if(!qe)return D;let U=new N(...D.position),z=new N(...D.target),k=D.fov;if(ei){Xn||(ei.elapsed+=I);let J=w(Math.min(1,ei.elapsed/1.2)),Y=new mi().setFromVector3(U.clone().sub(z)),at=ei.orbit,lt=He.euclideanModulo(Y.theta-at.theta+Math.PI,Math.PI*2)-Math.PI,bt=new mi(Math.max(a.minDistance,He.lerp(at.radius,Y.radius,J)),He.lerp(at.phi,Y.phi,J),at.theta+lt*J);z.lerpVectors(ei.target,z,J),U.copy(z).add(new N().setFromSpherical(bt)),k=He.lerp(ei.fov,k,J),J===1&&(ei=null)}return a.enableDamping=!1,a.target.copy(z),r.position.copy(U),r.fov=k,r.updateProjectionMatrix(),a.update(),a.enableDamping=!0,D}if(b(),["user-side","opposite-side"].includes(dn.get("view"))&&(qe=!1,a.enableDamping=!1,a.target.set(0,On+.58,0),r.position.set((dn.get("view")==="user-side"?-1:1)*.8800857997461463,On+.025,1.0141713411223252),r.fov=60,r.updateProjectionMatrix(),a.update(),a.enableDamping=!0),dn.get("view")==="twig-side"&&(qe=!1,a.enableDamping=!1,a.target.set(0,On+.58,0),r.position.set(1.181793467379653,On+.0963704599858998,.1480738134851335),r.fov=60,r.updateProjectionMatrix(),a.update(),a.enableDamping=!0),dn.get("view")==="sparse-side"&&(qe=!1,a.enableDamping=!1,a.target.set(0,On+.58,0),r.position.set(1.7187335090354203,1.1718640433970904,.4520276920379737),r.fov=60,r.updateProjectionMatrix(),a.update(),a.enableDamping=!0),dn.get("view")==="branch-side"&&(qe=!1,a.enableDamping=!1,a.target.set(0,On+.58,0),r.position.set(-1.0587697345993954,.8973533444423221,1.35363388189533),r.fov=60,r.updateProjectionMatrix(),a.update(),a.enableDamping=!0),dn.get("view")==="water-contact"&&(qe=!1,a.enableDamping=!1,a.target.set(0,On+.58,0),r.position.set(1.4014069317850162,1.3424959673511325,.7577028826837677),r.fov=78,r.updateProjectionMatrix(),a.update(),a.enableDamping=!0),dn.get("view")==="trunk-defect"&&(qe=!1,a.enableDamping=!1,a.target.set(0,1.1197133937500414,0),r.position.set(.7911530276987043,.6447133937500413,1.004752050595593),r.fov=55,r.updateProjectionMatrix(),a.update(),a.enableDamping=!0),dn.get("view")==="crown-tip"&&(qe=!1,a.enableDamping=!1,a.target.set(0,1.1997133937500415,0),r.position.set(-2.0774998841036445,1.2905880631393327,-.706660891470359),r.fov=60,r.updateProjectionMatrix(),a.update(),a.enableDamping=!0),dn.has("cam")){let I=dn.get("cam").split(",").map(Number);I.length>=6&&I.every(Number.isFinite)&&(qe=!1,a.enableDamping=!1,a.target.set(I[3],I[4],I[5]),r.position.set(I[0],I[1],I[2]),r.fov=I[6]||55,r.updateProjectionMatrix(),a.update(),a.enableDamping=!0)}/debug/.test(location.search)&&(globalThis.__fireTreeCamera=()=>[...r.position.toArray(),...a.target.toArray(),r.fov].map(I=>+I.toFixed(3)));function v(){let I=Ac(de,{waterLevel:On,aspect:r.aspect}),D=qs.findIndex(z=>z.id===I.shot);We("play").textContent=Xn?"\u64AD\u653E":"\u6682\u505C",We("play").setAttribute("aria-pressed",String(!Xn)),We("progress").value=String(de/Ge),We("time-label").textContent=`${de.toFixed(1).padStart(4,"0")} / ${Ge.toFixed(1)}${de>=Ge?" \xB7 \u7EED":""}`;let U=qs[Math.max(0,D)];We("chapter-index").textContent=`${String(Math.max(0,D)+1).padStart(2,"0")} \xB7 ${U.label}`,We("status").textContent=de<8.93?Nu(de).label.replace("\u6C34\u5FC3","\u5149\u70B9"):au(de),We("tour").textContent=qe?"\u81EA\u52A8\u8FD0\u955C":"\u81EA\u7531\u89C2\u5BDF",We("tour").setAttribute("aria-pressed",String(qe)),document.querySelectorAll("button[data-shot]").forEach(z=>z.setAttribute("aria-pressed",String(qe&&z.dataset.shot===I.shot)))}function y(){a.enableDamping=!1,a.update(),a.enableDamping=!0}function T(){x.resetLiving()}function S(I){de=He.clamp(I,An.matches?Zo:0,Ge),Xr=de,Xn=!0,qe=!0,ei=null,y(),T(),b(),E.sync(),v()}function M(){S(0),!An.matches&&(Xn=!1,Ys=performance.now(),E.sync(),v())}We("play").addEventListener("click",()=>{if(An.matches){Xn=!0,v();return}Xn=!Xn,Ys=performance.now(),E.sync(),v()}),We("replay").addEventListener("click",M),We("progress").addEventListener("input",I=>S(Number(I.target.value)*Ge)),document.querySelectorAll("button[data-shot]").forEach(I=>I.addEventListener("click",()=>S(wm(I.dataset.shot)))),We("tour").addEventListener("click",()=>{if(An.matches){qe=!0,Xn=!0,ei=null,b(),v();return}if(qe=!qe,qe){let I=r.position.clone(),D=a.target.clone();y(),r.position.copy(I),a.target.copy(D),a.enableDamping=!1,a.update(),a.enableDamping=!0,ei={elapsed:0,orbit:new mi().setFromVector3(r.position.clone().sub(a.target)),target:a.target.clone(),fov:r.fov},de>=Ge&&(de=Zo,Xr=de,x.resetLiving()),Xn=!1,Ys=performance.now()}else ei=null;E.sync(),v()}),We("clean").addEventListener("click",()=>document.body.classList.toggle("clean"));let _=null,A=()=>{qe=!1,ei=null,v()};n.addEventListener("pointerdown",I=>{I.button===0&&(_={x:I.clientX,y:I.clientY,id:I.pointerId,moved:!1})}),n.addEventListener("pointermove",I=>{_?.id===I.pointerId&&Math.hypot(I.clientX-_.x,I.clientY-_.y)>6&&(_.moved=!0,A())}),n.addEventListener("wheel",A,{passive:!0}),n.addEventListener("pointerup",()=>_=null),n.addEventListener("pointercancel",()=>_=null),addEventListener("keydown",I=>{I.defaultPrevented||I.repeat||I.ctrlKey||I.metaKey||I.altKey||I.target.closest('input, textarea, select, button, a, [contenteditable="true"], [role="button"]')||(I.code==="Space"&&(I.preventDefault(),We("play").click()),I.key.toLowerCase()==="h"&&We("clean").click(),I.key.toLowerCase()==="r"&&M())});function R(){l=c(),r.aspect=innerWidth/innerHeight,r.updateProjectionMatrix(),t.setPixelRatio(l),t.setSize(innerWidth,innerHeight,!1),h.setPixelRatio(l),h.setSize(innerWidth,innerHeight),x.resize({pixelRatio:l,screenHeight:innerHeight}),qe&&b()}addEventListener("resize",R),R(),An.addEventListener("change",()=>{An.matches&&S(Zo)}),document.addEventListener("visibilitychange",()=>{Ys=performance.now(),_=null,E.sync()}),We("load").hidden=!0,Ys=performance.now(),v();function L(I){requestAnimationFrame(L);let D=document.hidden?0:Math.max(0,Math.min((I-Ys)/1e3,.05));if(Ys=I,document.hidden)return;if(!Xn){let ft=E.getPlaybackTime(),_t=de;if(ft===null)de=Math.min(Ge,de+D);else{let Z=de+D,et=ft-Z;de=Math.abs(et)>.25?ft:Z+et*Math.min(1,D*3),de=Math.min(Ge,Math.max(_t,de))}Xr+=_t>=Ge?D:Math.max(0,de-_t)}E.tick(),qe?b(D):a.update();let U=Nu(de),z=He.smoothstep(de,.6,7.2);e.background.copy(s);let k=u.update({time:de,reduced:An.matches,pixelRatio:l}),J=d.update({time:de,reduced:An.matches});g.update({time:de,liveTime:Xr,motion:!An.matches,pixelRatio:l});let Y=x.update({time:U.particleTime,storyTime:de,liveTime:Xr,motion:!An.matches,camera:r}),at=bm(de,{motion:!An.matches}),lt=at.roll!==0;lt&&(o.copy(r.quaternion),r.rotateZ(at.roll),r.updateMatrixWorld(!0));{let ft=He.clamp((de-Yo[0])/(Yo[1]-Yo[0]),0,1);f.uniforms.uFade.value=1-ft*ft*(3-2*ft)}h.render(),lt&&(r.quaternion.copy(o),r.updateMatrixWorld(!0)),v(),n.dataset.cameraShake=JSON.stringify(at);let bt=Ac(de,{waterLevel:On,aspect:r.aspect});Object.assign(n.dataset,{ready:"true",background:"#000000",choreography:au(de),time:de.toFixed(3),liveTime:Xr.toFixed(3),ironPhase:Y.iron.phase,ironSparks:String(Y.iron.activeSparks),ironSprouts:String(Y.iron.activeSprouts),fallPhase:Y.falling.phase,fallGrains:String(Y.falling.activeGrains),silverGrains:String(Y.falling.silverGrains),emberGrains:String(Y.falling.emberGrains),particleTime:U.particleTime.toFixed(3),openingPhase:U.stage,ignitionAlive:String(k.aliveCount),seedLight:J.level.toFixed(3),ironPetals:String(Y.iron.activePetals||0),playing:String(!Xn),autoCamera:String(qe),cameraShot:bt.shot,cameraPosition:JSON.stringify(r.position.toArray()),cameraTarget:JSON.stringify(a.target.toArray()),cameraFov:String(r.fov),reducedMotion:String(An.matches)})}requestAnimationFrame(L)}H2().catch(n=>{console.error(n),We("load").hidden=!1,We("load").textContent="\u573A\u666F\u672A\u80FD\u8F7D\u5165\uFF0C\u8BF7\u5237\u65B0\u91CD\u8BD5\u3002",We("scene").dataset.error=String(n)});
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2025 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
