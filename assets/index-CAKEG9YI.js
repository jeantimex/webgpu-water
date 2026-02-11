(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const S of document.querySelectorAll('link[rel="modulepreload"]'))x(S);new MutationObserver(S=>{for(const U of S)if(U.type==="childList")for(const E of U.addedNodes)E.tagName==="LINK"&&E.rel==="modulepreload"&&x(E)}).observe(document,{childList:!0,subtree:!0});function v(S){const U={};return S.integrity&&(U.integrity=S.integrity),S.referrerPolicy&&(U.referrerPolicy=S.referrerPolicy),S.crossOrigin==="use-credentials"?U.credentials="include":S.crossOrigin==="anonymous"?U.credentials="omit":U.credentials="same-origin",U}function x(S){if(S.ep)return;S.ep=!0;const U=v(S);fetch(S.href,U)}})();function me(f,i){return class extends f{constructor(...v){super(...v),i(this)}}}const we=me(Array,f=>f.fill(0));let X=1e-6;function ve(f){function i(g=0,w=0){const m=new f(2);return g!==void 0&&(m[0]=g,w!==void 0&&(m[1]=w)),m}const v=i;function x(g,w,m){const t=m??new f(2);return t[0]=g,t[1]=w,t}function S(g,w){const m=w??new f(2);return m[0]=Math.ceil(g[0]),m[1]=Math.ceil(g[1]),m}function U(g,w){const m=w??new f(2);return m[0]=Math.floor(g[0]),m[1]=Math.floor(g[1]),m}function E(g,w){const m=w??new f(2);return m[0]=Math.round(g[0]),m[1]=Math.round(g[1]),m}function I(g,w=0,m=1,t){const l=t??new f(2);return l[0]=Math.min(m,Math.max(w,g[0])),l[1]=Math.min(m,Math.max(w,g[1])),l}function L(g,w,m){const t=m??new f(2);return t[0]=g[0]+w[0],t[1]=g[1]+w[1],t}function q(g,w,m,t){const l=t??new f(2);return l[0]=g[0]+w[0]*m,l[1]=g[1]+w[1]*m,l}function G(g,w){const m=g[0],t=g[1],l=w[0],r=w[1],o=Math.sqrt(m*m+t*t),n=Math.sqrt(l*l+r*r),c=o*n,p=c&&pt(g,w)/c;return Math.acos(p)}function F(g,w,m){const t=m??new f(2);return t[0]=g[0]-w[0],t[1]=g[1]-w[1],t}const j=F;function K(g,w){return Math.abs(g[0]-w[0])<X&&Math.abs(g[1]-w[1])<X}function tt(g,w){return g[0]===w[0]&&g[1]===w[1]}function Q(g,w,m,t){const l=t??new f(2);return l[0]=g[0]+m*(w[0]-g[0]),l[1]=g[1]+m*(w[1]-g[1]),l}function lt(g,w,m,t){const l=t??new f(2);return l[0]=g[0]+m[0]*(w[0]-g[0]),l[1]=g[1]+m[1]*(w[1]-g[1]),l}function V(g,w,m){const t=m??new f(2);return t[0]=Math.max(g[0],w[0]),t[1]=Math.max(g[1],w[1]),t}function O(g,w,m){const t=m??new f(2);return t[0]=Math.min(g[0],w[0]),t[1]=Math.min(g[1],w[1]),t}function Y(g,w,m){const t=m??new f(2);return t[0]=g[0]*w,t[1]=g[1]*w,t}const st=Y;function ht(g,w,m){const t=m??new f(2);return t[0]=g[0]/w,t[1]=g[1]/w,t}function ot(g,w){const m=w??new f(2);return m[0]=1/g[0],m[1]=1/g[1],m}const St=ot;function dt(g,w,m){const t=m??new f(3),l=g[0]*w[1]-g[1]*w[0];return t[0]=0,t[1]=0,t[2]=l,t}function pt(g,w){return g[0]*w[0]+g[1]*w[1]}function at(g){const w=g[0],m=g[1];return Math.sqrt(w*w+m*m)}const _t=at;function gt(g){const w=g[0],m=g[1];return w*w+m*m}const Lt=gt;function mt(g,w){const m=g[0]-w[0],t=g[1]-w[1];return Math.sqrt(m*m+t*t)}const Z=mt;function k(g,w){const m=g[0]-w[0],t=g[1]-w[1];return m*m+t*t}const C=k;function wt(g,w){const m=w??new f(2),t=g[0],l=g[1],r=Math.sqrt(t*t+l*l);return r>1e-5?(m[0]=t/r,m[1]=l/r):(m[0]=0,m[1]=0),m}function et(g,w){const m=w??new f(2);return m[0]=-g[0],m[1]=-g[1],m}function H(g,w){const m=w??new f(2);return m[0]=g[0],m[1]=g[1],m}const vt=H;function xt(g,w,m){const t=m??new f(2);return t[0]=g[0]*w[0],t[1]=g[1]*w[1],t}const Ut=xt;function ut(g,w,m){const t=m??new f(2);return t[0]=g[0]/w[0],t[1]=g[1]/w[1],t}const Bt=ut;function J(g=1,w){const m=w??new f(2),t=Math.random()*2*Math.PI;return m[0]=Math.cos(t)*g,m[1]=Math.sin(t)*g,m}function b(g){const w=g??new f(2);return w[0]=0,w[1]=0,w}function P(g,w,m){const t=m??new f(2),l=g[0],r=g[1];return t[0]=l*w[0]+r*w[4]+w[12],t[1]=l*w[1]+r*w[5]+w[13],t}function d(g,w,m){const t=m??new f(2),l=g[0],r=g[1];return t[0]=w[0]*l+w[4]*r+w[8],t[1]=w[1]*l+w[5]*r+w[9],t}function e(g,w,m,t){const l=t??new f(2),r=g[0]-w[0],o=g[1]-w[1],n=Math.sin(m),c=Math.cos(m);return l[0]=r*c-o*n+w[0],l[1]=r*n+o*c+w[1],l}function a(g,w,m){const t=m??new f(2);return wt(g,t),Y(t,w,t)}function s(g,w,m){const t=m??new f(2);return at(g)>w?a(g,w,t):H(g,t)}function u(g,w,m){const t=m??new f(2);return Q(g,w,.5,t)}return{create:i,fromValues:v,set:x,ceil:S,floor:U,round:E,clamp:I,add:L,addScaled:q,angle:G,subtract:F,sub:j,equalsApproximately:K,equals:tt,lerp:Q,lerpV:lt,max:V,min:O,mulScalar:Y,scale:st,divScalar:ht,inverse:ot,invert:St,cross:dt,dot:pt,length:at,len:_t,lengthSq:gt,lenSq:Lt,distance:mt,dist:Z,distanceSq:k,distSq:C,normalize:wt,negate:et,copy:H,clone:vt,multiply:xt,mul:Ut,divide:ut,div:Bt,random:J,zero:b,transformMat4:P,transformMat3:d,rotate:e,setLength:a,truncate:s,midpoint:u}}const ae=new Map;function ge(f){let i=ae.get(f);return i||(i=ve(f),ae.set(f,i)),i}function xe(f){function i(n,c,p){const h=new f(3);return n!==void 0&&(h[0]=n,c!==void 0&&(h[1]=c,p!==void 0&&(h[2]=p))),h}const v=i;function x(n,c,p,h){const y=h??new f(3);return y[0]=n,y[1]=c,y[2]=p,y}function S(n,c){const p=c??new f(3);return p[0]=Math.ceil(n[0]),p[1]=Math.ceil(n[1]),p[2]=Math.ceil(n[2]),p}function U(n,c){const p=c??new f(3);return p[0]=Math.floor(n[0]),p[1]=Math.floor(n[1]),p[2]=Math.floor(n[2]),p}function E(n,c){const p=c??new f(3);return p[0]=Math.round(n[0]),p[1]=Math.round(n[1]),p[2]=Math.round(n[2]),p}function I(n,c=0,p=1,h){const y=h??new f(3);return y[0]=Math.min(p,Math.max(c,n[0])),y[1]=Math.min(p,Math.max(c,n[1])),y[2]=Math.min(p,Math.max(c,n[2])),y}function L(n,c,p){const h=p??new f(3);return h[0]=n[0]+c[0],h[1]=n[1]+c[1],h[2]=n[2]+c[2],h}function q(n,c,p,h){const y=h??new f(3);return y[0]=n[0]+c[0]*p,y[1]=n[1]+c[1]*p,y[2]=n[2]+c[2]*p,y}function G(n,c){const p=n[0],h=n[1],y=n[2],_=c[0],A=c[1],z=c[2],M=Math.sqrt(p*p+h*h+y*y),D=Math.sqrt(_*_+A*A+z*z),R=M*D,$=R&&pt(n,c)/R;return Math.acos($)}function F(n,c,p){const h=p??new f(3);return h[0]=n[0]-c[0],h[1]=n[1]-c[1],h[2]=n[2]-c[2],h}const j=F;function K(n,c){return Math.abs(n[0]-c[0])<X&&Math.abs(n[1]-c[1])<X&&Math.abs(n[2]-c[2])<X}function tt(n,c){return n[0]===c[0]&&n[1]===c[1]&&n[2]===c[2]}function Q(n,c,p,h){const y=h??new f(3);return y[0]=n[0]+p*(c[0]-n[0]),y[1]=n[1]+p*(c[1]-n[1]),y[2]=n[2]+p*(c[2]-n[2]),y}function lt(n,c,p,h){const y=h??new f(3);return y[0]=n[0]+p[0]*(c[0]-n[0]),y[1]=n[1]+p[1]*(c[1]-n[1]),y[2]=n[2]+p[2]*(c[2]-n[2]),y}function V(n,c,p){const h=p??new f(3);return h[0]=Math.max(n[0],c[0]),h[1]=Math.max(n[1],c[1]),h[2]=Math.max(n[2],c[2]),h}function O(n,c,p){const h=p??new f(3);return h[0]=Math.min(n[0],c[0]),h[1]=Math.min(n[1],c[1]),h[2]=Math.min(n[2],c[2]),h}function Y(n,c,p){const h=p??new f(3);return h[0]=n[0]*c,h[1]=n[1]*c,h[2]=n[2]*c,h}const st=Y;function ht(n,c,p){const h=p??new f(3);return h[0]=n[0]/c,h[1]=n[1]/c,h[2]=n[2]/c,h}function ot(n,c){const p=c??new f(3);return p[0]=1/n[0],p[1]=1/n[1],p[2]=1/n[2],p}const St=ot;function dt(n,c,p){const h=p??new f(3),y=n[2]*c[0]-n[0]*c[2],_=n[0]*c[1]-n[1]*c[0];return h[0]=n[1]*c[2]-n[2]*c[1],h[1]=y,h[2]=_,h}function pt(n,c){return n[0]*c[0]+n[1]*c[1]+n[2]*c[2]}function at(n){const c=n[0],p=n[1],h=n[2];return Math.sqrt(c*c+p*p+h*h)}const _t=at;function gt(n){const c=n[0],p=n[1],h=n[2];return c*c+p*p+h*h}const Lt=gt;function mt(n,c){const p=n[0]-c[0],h=n[1]-c[1],y=n[2]-c[2];return Math.sqrt(p*p+h*h+y*y)}const Z=mt;function k(n,c){const p=n[0]-c[0],h=n[1]-c[1],y=n[2]-c[2];return p*p+h*h+y*y}const C=k;function wt(n,c){const p=c??new f(3),h=n[0],y=n[1],_=n[2],A=Math.sqrt(h*h+y*y+_*_);return A>1e-5?(p[0]=h/A,p[1]=y/A,p[2]=_/A):(p[0]=0,p[1]=0,p[2]=0),p}function et(n,c){const p=c??new f(3);return p[0]=-n[0],p[1]=-n[1],p[2]=-n[2],p}function H(n,c){const p=c??new f(3);return p[0]=n[0],p[1]=n[1],p[2]=n[2],p}const vt=H;function xt(n,c,p){const h=p??new f(3);return h[0]=n[0]*c[0],h[1]=n[1]*c[1],h[2]=n[2]*c[2],h}const Ut=xt;function ut(n,c,p){const h=p??new f(3);return h[0]=n[0]/c[0],h[1]=n[1]/c[1],h[2]=n[2]/c[2],h}const Bt=ut;function J(n=1,c){const p=c??new f(3),h=Math.random()*2*Math.PI,y=Math.random()*2-1,_=Math.sqrt(1-y*y)*n;return p[0]=Math.cos(h)*_,p[1]=Math.sin(h)*_,p[2]=y*n,p}function b(n){const c=n??new f(3);return c[0]=0,c[1]=0,c[2]=0,c}function P(n,c,p){const h=p??new f(3),y=n[0],_=n[1],A=n[2],z=c[3]*y+c[7]*_+c[11]*A+c[15]||1;return h[0]=(c[0]*y+c[4]*_+c[8]*A+c[12])/z,h[1]=(c[1]*y+c[5]*_+c[9]*A+c[13])/z,h[2]=(c[2]*y+c[6]*_+c[10]*A+c[14])/z,h}function d(n,c,p){const h=p??new f(3),y=n[0],_=n[1],A=n[2];return h[0]=y*c[0]+_*c[4]+A*c[8],h[1]=y*c[1]+_*c[5]+A*c[9],h[2]=y*c[2]+_*c[6]+A*c[10],h}function e(n,c,p){const h=p??new f(3),y=n[0],_=n[1],A=n[2];return h[0]=y*c[0]+_*c[4]+A*c[8],h[1]=y*c[1]+_*c[5]+A*c[9],h[2]=y*c[2]+_*c[6]+A*c[10],h}function a(n,c,p){const h=p??new f(3),y=c[0],_=c[1],A=c[2],z=c[3]*2,M=n[0],D=n[1],R=n[2],$=_*R-A*D,T=A*M-y*R,B=y*D-_*M;return h[0]=M+$*z+(_*B-A*T)*2,h[1]=D+T*z+(A*$-y*B)*2,h[2]=R+B*z+(y*T-_*$)*2,h}function s(n,c){const p=c??new f(3);return p[0]=n[12],p[1]=n[13],p[2]=n[14],p}function u(n,c,p){const h=p??new f(3),y=c*4;return h[0]=n[y+0],h[1]=n[y+1],h[2]=n[y+2],h}function g(n,c){const p=c??new f(3),h=n[0],y=n[1],_=n[2],A=n[4],z=n[5],M=n[6],D=n[8],R=n[9],$=n[10];return p[0]=Math.sqrt(h*h+y*y+_*_),p[1]=Math.sqrt(A*A+z*z+M*M),p[2]=Math.sqrt(D*D+R*R+$*$),p}function w(n,c,p,h){const y=h??new f(3),_=[],A=[];return _[0]=n[0]-c[0],_[1]=n[1]-c[1],_[2]=n[2]-c[2],A[0]=_[0],A[1]=_[1]*Math.cos(p)-_[2]*Math.sin(p),A[2]=_[1]*Math.sin(p)+_[2]*Math.cos(p),y[0]=A[0]+c[0],y[1]=A[1]+c[1],y[2]=A[2]+c[2],y}function m(n,c,p,h){const y=h??new f(3),_=[],A=[];return _[0]=n[0]-c[0],_[1]=n[1]-c[1],_[2]=n[2]-c[2],A[0]=_[2]*Math.sin(p)+_[0]*Math.cos(p),A[1]=_[1],A[2]=_[2]*Math.cos(p)-_[0]*Math.sin(p),y[0]=A[0]+c[0],y[1]=A[1]+c[1],y[2]=A[2]+c[2],y}function t(n,c,p,h){const y=h??new f(3),_=[],A=[];return _[0]=n[0]-c[0],_[1]=n[1]-c[1],_[2]=n[2]-c[2],A[0]=_[0]*Math.cos(p)-_[1]*Math.sin(p),A[1]=_[0]*Math.sin(p)+_[1]*Math.cos(p),A[2]=_[2],y[0]=A[0]+c[0],y[1]=A[1]+c[1],y[2]=A[2]+c[2],y}function l(n,c,p){const h=p??new f(3);return wt(n,h),Y(h,c,h)}function r(n,c,p){const h=p??new f(3);return at(n)>c?l(n,c,h):H(n,h)}function o(n,c,p){const h=p??new f(3);return Q(n,c,.5,h)}return{create:i,fromValues:v,set:x,ceil:S,floor:U,round:E,clamp:I,add:L,addScaled:q,angle:G,subtract:F,sub:j,equalsApproximately:K,equals:tt,lerp:Q,lerpV:lt,max:V,min:O,mulScalar:Y,scale:st,divScalar:ht,inverse:ot,invert:St,cross:dt,dot:pt,length:at,len:_t,lengthSq:gt,lenSq:Lt,distance:mt,dist:Z,distanceSq:k,distSq:C,normalize:wt,negate:et,copy:H,clone:vt,multiply:xt,mul:Ut,divide:ut,div:Bt,random:J,zero:b,transformMat4:P,transformMat4Upper3x3:d,transformMat3:e,transformQuat:a,getTranslation:s,getAxis:u,getScaling:g,rotateX:w,rotateY:m,rotateZ:t,setLength:l,truncate:r,midpoint:o}}const ce=new Map;function Kt(f){let i=ce.get(f);return i||(i=xe(f),ce.set(f,i)),i}function ye(f){const i=ge(f),v=Kt(f);function x(e,a,s,u,g,w,m,t,l){const r=new f(12);return r[3]=0,r[7]=0,r[11]=0,e!==void 0&&(r[0]=e,a!==void 0&&(r[1]=a,s!==void 0&&(r[2]=s,u!==void 0&&(r[4]=u,g!==void 0&&(r[5]=g,w!==void 0&&(r[6]=w,m!==void 0&&(r[8]=m,t!==void 0&&(r[9]=t,l!==void 0&&(r[10]=l))))))))),r}function S(e,a,s,u,g,w,m,t,l,r){const o=r??new f(12);return o[0]=e,o[1]=a,o[2]=s,o[3]=0,o[4]=u,o[5]=g,o[6]=w,o[7]=0,o[8]=m,o[9]=t,o[10]=l,o[11]=0,o}function U(e,a){const s=a??new f(12);return s[0]=e[0],s[1]=e[1],s[2]=e[2],s[3]=0,s[4]=e[4],s[5]=e[5],s[6]=e[6],s[7]=0,s[8]=e[8],s[9]=e[9],s[10]=e[10],s[11]=0,s}function E(e,a){const s=a??new f(12),u=e[0],g=e[1],w=e[2],m=e[3],t=u+u,l=g+g,r=w+w,o=u*t,n=g*t,c=g*l,p=w*t,h=w*l,y=w*r,_=m*t,A=m*l,z=m*r;return s[0]=1-c-y,s[1]=n+z,s[2]=p-A,s[3]=0,s[4]=n-z,s[5]=1-o-y,s[6]=h+_,s[7]=0,s[8]=p+A,s[9]=h-_,s[10]=1-o-c,s[11]=0,s}function I(e,a){const s=a??new f(12);return s[0]=-e[0],s[1]=-e[1],s[2]=-e[2],s[4]=-e[4],s[5]=-e[5],s[6]=-e[6],s[8]=-e[8],s[9]=-e[9],s[10]=-e[10],s}function L(e,a,s){const u=s??new f(12);return u[0]=e[0]*a,u[1]=e[1]*a,u[2]=e[2]*a,u[4]=e[4]*a,u[5]=e[5]*a,u[6]=e[6]*a,u[8]=e[8]*a,u[9]=e[9]*a,u[10]=e[10]*a,u}const q=L;function G(e,a,s){const u=s??new f(12);return u[0]=e[0]+a[0],u[1]=e[1]+a[1],u[2]=e[2]+a[2],u[4]=e[4]+a[4],u[5]=e[5]+a[5],u[6]=e[6]+a[6],u[8]=e[8]+a[8],u[9]=e[9]+a[9],u[10]=e[10]+a[10],u}function F(e,a){const s=a??new f(12);return s[0]=e[0],s[1]=e[1],s[2]=e[2],s[4]=e[4],s[5]=e[5],s[6]=e[6],s[8]=e[8],s[9]=e[9],s[10]=e[10],s}const j=F;function K(e,a){return Math.abs(e[0]-a[0])<X&&Math.abs(e[1]-a[1])<X&&Math.abs(e[2]-a[2])<X&&Math.abs(e[4]-a[4])<X&&Math.abs(e[5]-a[5])<X&&Math.abs(e[6]-a[6])<X&&Math.abs(e[8]-a[8])<X&&Math.abs(e[9]-a[9])<X&&Math.abs(e[10]-a[10])<X}function tt(e,a){return e[0]===a[0]&&e[1]===a[1]&&e[2]===a[2]&&e[4]===a[4]&&e[5]===a[5]&&e[6]===a[6]&&e[8]===a[8]&&e[9]===a[9]&&e[10]===a[10]}function Q(e){const a=e??new f(12);return a[0]=1,a[1]=0,a[2]=0,a[4]=0,a[5]=1,a[6]=0,a[8]=0,a[9]=0,a[10]=1,a}function lt(e,a){const s=a??new f(12);if(s===e){let c;return c=e[1],e[1]=e[4],e[4]=c,c=e[2],e[2]=e[8],e[8]=c,c=e[6],e[6]=e[9],e[9]=c,s}const u=e[0],g=e[1],w=e[2],m=e[4],t=e[5],l=e[6],r=e[8],o=e[9],n=e[10];return s[0]=u,s[1]=m,s[2]=r,s[4]=g,s[5]=t,s[6]=o,s[8]=w,s[9]=l,s[10]=n,s}function V(e,a){const s=a??new f(12),u=e[0],g=e[1],w=e[2],m=e[4],t=e[5],l=e[6],r=e[8],o=e[9],n=e[10],c=n*t-l*o,p=-n*m+l*r,h=o*m-t*r,y=1/(u*c+g*p+w*h);return s[0]=c*y,s[1]=(-n*g+w*o)*y,s[2]=(l*g-w*t)*y,s[4]=p*y,s[5]=(n*u-w*r)*y,s[6]=(-l*u+w*m)*y,s[8]=h*y,s[9]=(-o*u+g*r)*y,s[10]=(t*u-g*m)*y,s}function O(e){const a=e[0],s=e[1],u=e[2],g=e[4],w=e[5],m=e[6],t=e[8],l=e[9],r=e[10];return a*(w*r-l*m)-g*(s*r-l*u)+t*(s*m-w*u)}const Y=V;function st(e,a,s){const u=s??new f(12),g=e[0],w=e[1],m=e[2],t=e[4],l=e[5],r=e[6],o=e[8],n=e[9],c=e[10],p=a[0],h=a[1],y=a[2],_=a[4],A=a[5],z=a[6],M=a[8],D=a[9],R=a[10];return u[0]=g*p+t*h+o*y,u[1]=w*p+l*h+n*y,u[2]=m*p+r*h+c*y,u[4]=g*_+t*A+o*z,u[5]=w*_+l*A+n*z,u[6]=m*_+r*A+c*z,u[8]=g*M+t*D+o*R,u[9]=w*M+l*D+n*R,u[10]=m*M+r*D+c*R,u}const ht=st;function ot(e,a,s){const u=s??Q();return e!==u&&(u[0]=e[0],u[1]=e[1],u[2]=e[2],u[4]=e[4],u[5]=e[5],u[6]=e[6]),u[8]=a[0],u[9]=a[1],u[10]=1,u}function St(e,a){const s=a??i.create();return s[0]=e[8],s[1]=e[9],s}function dt(e,a,s){const u=s??i.create(),g=a*4;return u[0]=e[g+0],u[1]=e[g+1],u}function pt(e,a,s,u){const g=u===e?e:F(e,u),w=s*4;return g[w+0]=a[0],g[w+1]=a[1],g}function at(e,a){const s=a??i.create(),u=e[0],g=e[1],w=e[4],m=e[5];return s[0]=Math.sqrt(u*u+g*g),s[1]=Math.sqrt(w*w+m*m),s}function _t(e,a){const s=a??v.create(),u=e[0],g=e[1],w=e[2],m=e[4],t=e[5],l=e[6],r=e[8],o=e[9],n=e[10];return s[0]=Math.sqrt(u*u+g*g+w*w),s[1]=Math.sqrt(m*m+t*t+l*l),s[2]=Math.sqrt(r*r+o*o+n*n),s}function gt(e,a){const s=a??new f(12);return s[0]=1,s[1]=0,s[2]=0,s[4]=0,s[5]=1,s[6]=0,s[8]=e[0],s[9]=e[1],s[10]=1,s}function Lt(e,a,s){const u=s??new f(12),g=a[0],w=a[1],m=e[0],t=e[1],l=e[2],r=e[4],o=e[5],n=e[6],c=e[8],p=e[9],h=e[10];return e!==u&&(u[0]=m,u[1]=t,u[2]=l,u[4]=r,u[5]=o,u[6]=n),u[8]=m*g+r*w+c,u[9]=t*g+o*w+p,u[10]=l*g+n*w+h,u}function mt(e,a){const s=a??new f(12),u=Math.cos(e),g=Math.sin(e);return s[0]=u,s[1]=g,s[2]=0,s[4]=-g,s[5]=u,s[6]=0,s[8]=0,s[9]=0,s[10]=1,s}function Z(e,a,s){const u=s??new f(12),g=e[0],w=e[1],m=e[2],t=e[4],l=e[5],r=e[6],o=Math.cos(a),n=Math.sin(a);return u[0]=o*g+n*t,u[1]=o*w+n*l,u[2]=o*m+n*r,u[4]=o*t-n*g,u[5]=o*l-n*w,u[6]=o*r-n*m,e!==u&&(u[8]=e[8],u[9]=e[9],u[10]=e[10]),u}function k(e,a){const s=a??new f(12),u=Math.cos(e),g=Math.sin(e);return s[0]=1,s[1]=0,s[2]=0,s[4]=0,s[5]=u,s[6]=g,s[8]=0,s[9]=-g,s[10]=u,s}function C(e,a,s){const u=s??new f(12),g=e[4],w=e[5],m=e[6],t=e[8],l=e[9],r=e[10],o=Math.cos(a),n=Math.sin(a);return u[4]=o*g+n*t,u[5]=o*w+n*l,u[6]=o*m+n*r,u[8]=o*t-n*g,u[9]=o*l-n*w,u[10]=o*r-n*m,e!==u&&(u[0]=e[0],u[1]=e[1],u[2]=e[2]),u}function wt(e,a){const s=a??new f(12),u=Math.cos(e),g=Math.sin(e);return s[0]=u,s[1]=0,s[2]=-g,s[4]=0,s[5]=1,s[6]=0,s[8]=g,s[9]=0,s[10]=u,s}function et(e,a,s){const u=s??new f(12),g=e[0],w=e[1],m=e[2],t=e[8],l=e[9],r=e[10],o=Math.cos(a),n=Math.sin(a);return u[0]=o*g-n*t,u[1]=o*w-n*l,u[2]=o*m-n*r,u[8]=o*t+n*g,u[9]=o*l+n*w,u[10]=o*r+n*m,e!==u&&(u[4]=e[4],u[5]=e[5],u[6]=e[6]),u}const H=mt,vt=Z;function xt(e,a){const s=a??new f(12);return s[0]=e[0],s[1]=0,s[2]=0,s[4]=0,s[5]=e[1],s[6]=0,s[8]=0,s[9]=0,s[10]=1,s}function Ut(e,a,s){const u=s??new f(12),g=a[0],w=a[1];return u[0]=g*e[0],u[1]=g*e[1],u[2]=g*e[2],u[4]=w*e[4],u[5]=w*e[5],u[6]=w*e[6],e!==u&&(u[8]=e[8],u[9]=e[9],u[10]=e[10]),u}function ut(e,a){const s=a??new f(12);return s[0]=e[0],s[1]=0,s[2]=0,s[4]=0,s[5]=e[1],s[6]=0,s[8]=0,s[9]=0,s[10]=e[2],s}function Bt(e,a,s){const u=s??new f(12),g=a[0],w=a[1],m=a[2];return u[0]=g*e[0],u[1]=g*e[1],u[2]=g*e[2],u[4]=w*e[4],u[5]=w*e[5],u[6]=w*e[6],u[8]=m*e[8],u[9]=m*e[9],u[10]=m*e[10],u}function J(e,a){const s=a??new f(12);return s[0]=e,s[1]=0,s[2]=0,s[4]=0,s[5]=e,s[6]=0,s[8]=0,s[9]=0,s[10]=1,s}function b(e,a,s){const u=s??new f(12);return u[0]=a*e[0],u[1]=a*e[1],u[2]=a*e[2],u[4]=a*e[4],u[5]=a*e[5],u[6]=a*e[6],e!==u&&(u[8]=e[8],u[9]=e[9],u[10]=e[10]),u}function P(e,a){const s=a??new f(12);return s[0]=e,s[1]=0,s[2]=0,s[4]=0,s[5]=e,s[6]=0,s[8]=0,s[9]=0,s[10]=e,s}function d(e,a,s){const u=s??new f(12);return u[0]=a*e[0],u[1]=a*e[1],u[2]=a*e[2],u[4]=a*e[4],u[5]=a*e[5],u[6]=a*e[6],u[8]=a*e[8],u[9]=a*e[9],u[10]=a*e[10],u}return{add:G,clone:j,copy:F,create:x,determinant:O,equals:tt,equalsApproximately:K,fromMat4:U,fromQuat:E,get3DScaling:_t,getAxis:dt,getScaling:at,getTranslation:St,identity:Q,inverse:V,invert:Y,mul:ht,mulScalar:q,multiply:st,multiplyScalar:L,negate:I,rotate:Z,rotateX:C,rotateY:et,rotateZ:vt,rotation:mt,rotationX:k,rotationY:wt,rotationZ:H,scale:Ut,scale3D:Bt,scaling:xt,scaling3D:ut,set:S,setAxis:pt,setTranslation:ot,translate:Lt,translation:gt,transpose:lt,uniformScale:b,uniformScale3D:d,uniformScaling:J,uniformScaling3D:P}}const le=new Map;function be(f){let i=le.get(f);return i||(i=ye(f),le.set(f,i)),i}function Me(f){const i=Kt(f);function v(t,l,r,o,n,c,p,h,y,_,A,z,M,D,R,$){const T=new f(16);return t!==void 0&&(T[0]=t,l!==void 0&&(T[1]=l,r!==void 0&&(T[2]=r,o!==void 0&&(T[3]=o,n!==void 0&&(T[4]=n,c!==void 0&&(T[5]=c,p!==void 0&&(T[6]=p,h!==void 0&&(T[7]=h,y!==void 0&&(T[8]=y,_!==void 0&&(T[9]=_,A!==void 0&&(T[10]=A,z!==void 0&&(T[11]=z,M!==void 0&&(T[12]=M,D!==void 0&&(T[13]=D,R!==void 0&&(T[14]=R,$!==void 0&&(T[15]=$)))))))))))))))),T}function x(t,l,r,o,n,c,p,h,y,_,A,z,M,D,R,$,T){const B=T??new f(16);return B[0]=t,B[1]=l,B[2]=r,B[3]=o,B[4]=n,B[5]=c,B[6]=p,B[7]=h,B[8]=y,B[9]=_,B[10]=A,B[11]=z,B[12]=M,B[13]=D,B[14]=R,B[15]=$,B}function S(t,l){const r=l??new f(16);return r[0]=t[0],r[1]=t[1],r[2]=t[2],r[3]=0,r[4]=t[4],r[5]=t[5],r[6]=t[6],r[7]=0,r[8]=t[8],r[9]=t[9],r[10]=t[10],r[11]=0,r[12]=0,r[13]=0,r[14]=0,r[15]=1,r}function U(t,l){const r=l??new f(16),o=t[0],n=t[1],c=t[2],p=t[3],h=o+o,y=n+n,_=c+c,A=o*h,z=n*h,M=n*y,D=c*h,R=c*y,$=c*_,T=p*h,B=p*y,W=p*_;return r[0]=1-M-$,r[1]=z+W,r[2]=D-B,r[3]=0,r[4]=z-W,r[5]=1-A-$,r[6]=R+T,r[7]=0,r[8]=D+B,r[9]=R-T,r[10]=1-A-M,r[11]=0,r[12]=0,r[13]=0,r[14]=0,r[15]=1,r}function E(t,l){const r=l??new f(16);return r[0]=-t[0],r[1]=-t[1],r[2]=-t[2],r[3]=-t[3],r[4]=-t[4],r[5]=-t[5],r[6]=-t[6],r[7]=-t[7],r[8]=-t[8],r[9]=-t[9],r[10]=-t[10],r[11]=-t[11],r[12]=-t[12],r[13]=-t[13],r[14]=-t[14],r[15]=-t[15],r}function I(t,l,r){const o=r??new f(16);return o[0]=t[0]+l[0],o[1]=t[1]+l[1],o[2]=t[2]+l[2],o[3]=t[3]+l[3],o[4]=t[4]+l[4],o[5]=t[5]+l[5],o[6]=t[6]+l[6],o[7]=t[7]+l[7],o[8]=t[8]+l[8],o[9]=t[9]+l[9],o[10]=t[10]+l[10],o[11]=t[11]+l[11],o[12]=t[12]+l[12],o[13]=t[13]+l[13],o[14]=t[14]+l[14],o[15]=t[15]+l[15],o}function L(t,l,r){const o=r??new f(16);return o[0]=t[0]*l,o[1]=t[1]*l,o[2]=t[2]*l,o[3]=t[3]*l,o[4]=t[4]*l,o[5]=t[5]*l,o[6]=t[6]*l,o[7]=t[7]*l,o[8]=t[8]*l,o[9]=t[9]*l,o[10]=t[10]*l,o[11]=t[11]*l,o[12]=t[12]*l,o[13]=t[13]*l,o[14]=t[14]*l,o[15]=t[15]*l,o}const q=L;function G(t,l){const r=l??new f(16);return r[0]=t[0],r[1]=t[1],r[2]=t[2],r[3]=t[3],r[4]=t[4],r[5]=t[5],r[6]=t[6],r[7]=t[7],r[8]=t[8],r[9]=t[9],r[10]=t[10],r[11]=t[11],r[12]=t[12],r[13]=t[13],r[14]=t[14],r[15]=t[15],r}const F=G;function j(t,l){return Math.abs(t[0]-l[0])<X&&Math.abs(t[1]-l[1])<X&&Math.abs(t[2]-l[2])<X&&Math.abs(t[3]-l[3])<X&&Math.abs(t[4]-l[4])<X&&Math.abs(t[5]-l[5])<X&&Math.abs(t[6]-l[6])<X&&Math.abs(t[7]-l[7])<X&&Math.abs(t[8]-l[8])<X&&Math.abs(t[9]-l[9])<X&&Math.abs(t[10]-l[10])<X&&Math.abs(t[11]-l[11])<X&&Math.abs(t[12]-l[12])<X&&Math.abs(t[13]-l[13])<X&&Math.abs(t[14]-l[14])<X&&Math.abs(t[15]-l[15])<X}function K(t,l){return t[0]===l[0]&&t[1]===l[1]&&t[2]===l[2]&&t[3]===l[3]&&t[4]===l[4]&&t[5]===l[5]&&t[6]===l[6]&&t[7]===l[7]&&t[8]===l[8]&&t[9]===l[9]&&t[10]===l[10]&&t[11]===l[11]&&t[12]===l[12]&&t[13]===l[13]&&t[14]===l[14]&&t[15]===l[15]}function tt(t){const l=t??new f(16);return l[0]=1,l[1]=0,l[2]=0,l[3]=0,l[4]=0,l[5]=1,l[6]=0,l[7]=0,l[8]=0,l[9]=0,l[10]=1,l[11]=0,l[12]=0,l[13]=0,l[14]=0,l[15]=1,l}function Q(t,l){const r=l??new f(16);if(r===t){let N;return N=t[1],t[1]=t[4],t[4]=N,N=t[2],t[2]=t[8],t[8]=N,N=t[3],t[3]=t[12],t[12]=N,N=t[6],t[6]=t[9],t[9]=N,N=t[7],t[7]=t[13],t[13]=N,N=t[11],t[11]=t[14],t[14]=N,r}const o=t[0],n=t[1],c=t[2],p=t[3],h=t[4],y=t[5],_=t[6],A=t[7],z=t[8],M=t[9],D=t[10],R=t[11],$=t[12],T=t[13],B=t[14],W=t[15];return r[0]=o,r[1]=h,r[2]=z,r[3]=$,r[4]=n,r[5]=y,r[6]=M,r[7]=T,r[8]=c,r[9]=_,r[10]=D,r[11]=B,r[12]=p,r[13]=A,r[14]=R,r[15]=W,r}function lt(t,l){const r=l??new f(16),o=t[0],n=t[1],c=t[2],p=t[3],h=t[4],y=t[5],_=t[6],A=t[7],z=t[8],M=t[9],D=t[10],R=t[11],$=t[12],T=t[13],B=t[14],W=t[15],N=D*W,rt=B*R,nt=_*W,ct=B*A,ft=_*R,yt=D*A,bt=c*W,Mt=B*p,Dt=c*R,At=D*p,Et=c*A,Rt=_*p,zt=z*T,Tt=$*M,It=h*T,$t=$*y,Ot=h*M,kt=z*y,qt=o*T,Nt=$*n,jt=o*M,Ht=z*n,Wt=o*y,Xt=h*n,ie=N*y+ct*M+ft*T-(rt*y+nt*M+yt*T),re=rt*n+bt*M+At*T-(N*n+Mt*M+Dt*T),se=nt*n+Mt*y+Et*T-(ct*n+bt*y+Rt*T),oe=yt*n+Dt*y+Rt*M-(ft*n+At*y+Et*M),Pt=1/(o*ie+h*re+z*se+$*oe);return r[0]=Pt*ie,r[1]=Pt*re,r[2]=Pt*se,r[3]=Pt*oe,r[4]=Pt*(rt*h+nt*z+yt*$-(N*h+ct*z+ft*$)),r[5]=Pt*(N*o+Mt*z+Dt*$-(rt*o+bt*z+At*$)),r[6]=Pt*(ct*o+bt*h+Rt*$-(nt*o+Mt*h+Et*$)),r[7]=Pt*(ft*o+At*h+Et*z-(yt*o+Dt*h+Rt*z)),r[8]=Pt*(zt*A+$t*R+Ot*W-(Tt*A+It*R+kt*W)),r[9]=Pt*(Tt*p+qt*R+Ht*W-(zt*p+Nt*R+jt*W)),r[10]=Pt*(It*p+Nt*A+Wt*W-($t*p+qt*A+Xt*W)),r[11]=Pt*(kt*p+jt*A+Xt*R-(Ot*p+Ht*A+Wt*R)),r[12]=Pt*(It*D+kt*B+Tt*_-(Ot*B+zt*_+$t*D)),r[13]=Pt*(jt*B+zt*c+Nt*D-(qt*D+Ht*B+Tt*c)),r[14]=Pt*(qt*_+Xt*B+$t*c-(Wt*B+It*c+Nt*_)),r[15]=Pt*(Wt*D+Ot*c+Ht*_-(jt*_+Xt*D+kt*c)),r}function V(t){const l=t[0],r=t[1],o=t[2],n=t[3],c=t[4],p=t[5],h=t[6],y=t[7],_=t[8],A=t[9],z=t[10],M=t[11],D=t[12],R=t[13],$=t[14],T=t[15],B=z*T,W=$*M,N=h*T,rt=$*y,nt=h*M,ct=z*y,ft=o*T,yt=$*n,bt=o*M,Mt=z*n,Dt=o*y,At=h*n,Et=B*p+rt*A+nt*R-(W*p+N*A+ct*R),Rt=W*r+ft*A+Mt*R-(B*r+yt*A+bt*R),zt=N*r+yt*p+Dt*R-(rt*r+ft*p+At*R),Tt=ct*r+bt*p+At*A-(nt*r+Mt*p+Dt*A);return l*Et+c*Rt+_*zt+D*Tt}const O=lt;function Y(t,l,r){const o=r??new f(16),n=t[0],c=t[1],p=t[2],h=t[3],y=t[4],_=t[5],A=t[6],z=t[7],M=t[8],D=t[9],R=t[10],$=t[11],T=t[12],B=t[13],W=t[14],N=t[15],rt=l[0],nt=l[1],ct=l[2],ft=l[3],yt=l[4],bt=l[5],Mt=l[6],Dt=l[7],At=l[8],Et=l[9],Rt=l[10],zt=l[11],Tt=l[12],It=l[13],$t=l[14],Ot=l[15];return o[0]=n*rt+y*nt+M*ct+T*ft,o[1]=c*rt+_*nt+D*ct+B*ft,o[2]=p*rt+A*nt+R*ct+W*ft,o[3]=h*rt+z*nt+$*ct+N*ft,o[4]=n*yt+y*bt+M*Mt+T*Dt,o[5]=c*yt+_*bt+D*Mt+B*Dt,o[6]=p*yt+A*bt+R*Mt+W*Dt,o[7]=h*yt+z*bt+$*Mt+N*Dt,o[8]=n*At+y*Et+M*Rt+T*zt,o[9]=c*At+_*Et+D*Rt+B*zt,o[10]=p*At+A*Et+R*Rt+W*zt,o[11]=h*At+z*Et+$*Rt+N*zt,o[12]=n*Tt+y*It+M*$t+T*Ot,o[13]=c*Tt+_*It+D*$t+B*Ot,o[14]=p*Tt+A*It+R*$t+W*Ot,o[15]=h*Tt+z*It+$*$t+N*Ot,o}const st=Y;function ht(t,l,r){const o=r??tt();return t!==o&&(o[0]=t[0],o[1]=t[1],o[2]=t[2],o[3]=t[3],o[4]=t[4],o[5]=t[5],o[6]=t[6],o[7]=t[7],o[8]=t[8],o[9]=t[9],o[10]=t[10],o[11]=t[11]),o[12]=l[0],o[13]=l[1],o[14]=l[2],o[15]=1,o}function ot(t,l){const r=l??i.create();return r[0]=t[12],r[1]=t[13],r[2]=t[14],r}function St(t,l,r){const o=r??i.create(),n=l*4;return o[0]=t[n+0],o[1]=t[n+1],o[2]=t[n+2],o}function dt(t,l,r,o){const n=o===t?o:G(t,o),c=r*4;return n[c+0]=l[0],n[c+1]=l[1],n[c+2]=l[2],n}function pt(t,l){const r=l??i.create(),o=t[0],n=t[1],c=t[2],p=t[4],h=t[5],y=t[6],_=t[8],A=t[9],z=t[10];return r[0]=Math.sqrt(o*o+n*n+c*c),r[1]=Math.sqrt(p*p+h*h+y*y),r[2]=Math.sqrt(_*_+A*A+z*z),r}function at(t,l,r,o,n){const c=n??new f(16),p=Math.tan(Math.PI*.5-.5*t);if(c[0]=p/l,c[1]=0,c[2]=0,c[3]=0,c[4]=0,c[5]=p,c[6]=0,c[7]=0,c[8]=0,c[9]=0,c[11]=-1,c[12]=0,c[13]=0,c[15]=0,Number.isFinite(o)){const h=1/(r-o);c[10]=o*h,c[14]=o*r*h}else c[10]=-1,c[14]=-r;return c}function _t(t,l,r,o=1/0,n){const c=n??new f(16),p=1/Math.tan(t*.5);if(c[0]=p/l,c[1]=0,c[2]=0,c[3]=0,c[4]=0,c[5]=p,c[6]=0,c[7]=0,c[8]=0,c[9]=0,c[11]=-1,c[12]=0,c[13]=0,c[15]=0,o===1/0)c[10]=0,c[14]=r;else{const h=1/(o-r);c[10]=r*h,c[14]=o*r*h}return c}function gt(t,l,r,o,n,c,p){const h=p??new f(16);return h[0]=2/(l-t),h[1]=0,h[2]=0,h[3]=0,h[4]=0,h[5]=2/(o-r),h[6]=0,h[7]=0,h[8]=0,h[9]=0,h[10]=1/(n-c),h[11]=0,h[12]=(l+t)/(t-l),h[13]=(o+r)/(r-o),h[14]=n/(n-c),h[15]=1,h}function Lt(t,l,r,o,n,c,p){const h=p??new f(16),y=l-t,_=o-r,A=n-c;return h[0]=2*n/y,h[1]=0,h[2]=0,h[3]=0,h[4]=0,h[5]=2*n/_,h[6]=0,h[7]=0,h[8]=(t+l)/y,h[9]=(o+r)/_,h[10]=c/A,h[11]=-1,h[12]=0,h[13]=0,h[14]=n*c/A,h[15]=0,h}function mt(t,l,r,o,n,c=1/0,p){const h=p??new f(16),y=l-t,_=o-r;if(h[0]=2*n/y,h[1]=0,h[2]=0,h[3]=0,h[4]=0,h[5]=2*n/_,h[6]=0,h[7]=0,h[8]=(t+l)/y,h[9]=(o+r)/_,h[11]=-1,h[12]=0,h[13]=0,h[15]=0,c===1/0)h[10]=0,h[14]=n;else{const A=1/(c-n);h[10]=n*A,h[14]=c*n*A}return h}const Z=i.create(),k=i.create(),C=i.create();function wt(t,l,r,o){const n=o??new f(16);return i.normalize(i.subtract(l,t,C),C),i.normalize(i.cross(r,C,Z),Z),i.normalize(i.cross(C,Z,k),k),n[0]=Z[0],n[1]=Z[1],n[2]=Z[2],n[3]=0,n[4]=k[0],n[5]=k[1],n[6]=k[2],n[7]=0,n[8]=C[0],n[9]=C[1],n[10]=C[2],n[11]=0,n[12]=t[0],n[13]=t[1],n[14]=t[2],n[15]=1,n}function et(t,l,r,o){const n=o??new f(16);return i.normalize(i.subtract(t,l,C),C),i.normalize(i.cross(r,C,Z),Z),i.normalize(i.cross(C,Z,k),k),n[0]=Z[0],n[1]=Z[1],n[2]=Z[2],n[3]=0,n[4]=k[0],n[5]=k[1],n[6]=k[2],n[7]=0,n[8]=C[0],n[9]=C[1],n[10]=C[2],n[11]=0,n[12]=t[0],n[13]=t[1],n[14]=t[2],n[15]=1,n}function H(t,l,r,o){const n=o??new f(16);return i.normalize(i.subtract(t,l,C),C),i.normalize(i.cross(r,C,Z),Z),i.normalize(i.cross(C,Z,k),k),n[0]=Z[0],n[1]=k[0],n[2]=C[0],n[3]=0,n[4]=Z[1],n[5]=k[1],n[6]=C[1],n[7]=0,n[8]=Z[2],n[9]=k[2],n[10]=C[2],n[11]=0,n[12]=-(Z[0]*t[0]+Z[1]*t[1]+Z[2]*t[2]),n[13]=-(k[0]*t[0]+k[1]*t[1]+k[2]*t[2]),n[14]=-(C[0]*t[0]+C[1]*t[1]+C[2]*t[2]),n[15]=1,n}function vt(t,l){const r=l??new f(16);return r[0]=1,r[1]=0,r[2]=0,r[3]=0,r[4]=0,r[5]=1,r[6]=0,r[7]=0,r[8]=0,r[9]=0,r[10]=1,r[11]=0,r[12]=t[0],r[13]=t[1],r[14]=t[2],r[15]=1,r}function xt(t,l,r){const o=r??new f(16),n=l[0],c=l[1],p=l[2],h=t[0],y=t[1],_=t[2],A=t[3],z=t[4],M=t[5],D=t[6],R=t[7],$=t[8],T=t[9],B=t[10],W=t[11],N=t[12],rt=t[13],nt=t[14],ct=t[15];return t!==o&&(o[0]=h,o[1]=y,o[2]=_,o[3]=A,o[4]=z,o[5]=M,o[6]=D,o[7]=R,o[8]=$,o[9]=T,o[10]=B,o[11]=W),o[12]=h*n+z*c+$*p+N,o[13]=y*n+M*c+T*p+rt,o[14]=_*n+D*c+B*p+nt,o[15]=A*n+R*c+W*p+ct,o}function Ut(t,l){const r=l??new f(16),o=Math.cos(t),n=Math.sin(t);return r[0]=1,r[1]=0,r[2]=0,r[3]=0,r[4]=0,r[5]=o,r[6]=n,r[7]=0,r[8]=0,r[9]=-n,r[10]=o,r[11]=0,r[12]=0,r[13]=0,r[14]=0,r[15]=1,r}function ut(t,l,r){const o=r??new f(16),n=t[4],c=t[5],p=t[6],h=t[7],y=t[8],_=t[9],A=t[10],z=t[11],M=Math.cos(l),D=Math.sin(l);return o[4]=M*n+D*y,o[5]=M*c+D*_,o[6]=M*p+D*A,o[7]=M*h+D*z,o[8]=M*y-D*n,o[9]=M*_-D*c,o[10]=M*A-D*p,o[11]=M*z-D*h,t!==o&&(o[0]=t[0],o[1]=t[1],o[2]=t[2],o[3]=t[3],o[12]=t[12],o[13]=t[13],o[14]=t[14],o[15]=t[15]),o}function Bt(t,l){const r=l??new f(16),o=Math.cos(t),n=Math.sin(t);return r[0]=o,r[1]=0,r[2]=-n,r[3]=0,r[4]=0,r[5]=1,r[6]=0,r[7]=0,r[8]=n,r[9]=0,r[10]=o,r[11]=0,r[12]=0,r[13]=0,r[14]=0,r[15]=1,r}function J(t,l,r){const o=r??new f(16),n=t[0],c=t[1],p=t[2],h=t[3],y=t[8],_=t[9],A=t[10],z=t[11],M=Math.cos(l),D=Math.sin(l);return o[0]=M*n-D*y,o[1]=M*c-D*_,o[2]=M*p-D*A,o[3]=M*h-D*z,o[8]=M*y+D*n,o[9]=M*_+D*c,o[10]=M*A+D*p,o[11]=M*z+D*h,t!==o&&(o[4]=t[4],o[5]=t[5],o[6]=t[6],o[7]=t[7],o[12]=t[12],o[13]=t[13],o[14]=t[14],o[15]=t[15]),o}function b(t,l){const r=l??new f(16),o=Math.cos(t),n=Math.sin(t);return r[0]=o,r[1]=n,r[2]=0,r[3]=0,r[4]=-n,r[5]=o,r[6]=0,r[7]=0,r[8]=0,r[9]=0,r[10]=1,r[11]=0,r[12]=0,r[13]=0,r[14]=0,r[15]=1,r}function P(t,l,r){const o=r??new f(16),n=t[0],c=t[1],p=t[2],h=t[3],y=t[4],_=t[5],A=t[6],z=t[7],M=Math.cos(l),D=Math.sin(l);return o[0]=M*n+D*y,o[1]=M*c+D*_,o[2]=M*p+D*A,o[3]=M*h+D*z,o[4]=M*y-D*n,o[5]=M*_-D*c,o[6]=M*A-D*p,o[7]=M*z-D*h,t!==o&&(o[8]=t[8],o[9]=t[9],o[10]=t[10],o[11]=t[11],o[12]=t[12],o[13]=t[13],o[14]=t[14],o[15]=t[15]),o}function d(t,l,r){const o=r??new f(16);let n=t[0],c=t[1],p=t[2];const h=Math.sqrt(n*n+c*c+p*p);n/=h,c/=h,p/=h;const y=n*n,_=c*c,A=p*p,z=Math.cos(l),M=Math.sin(l),D=1-z;return o[0]=y+(1-y)*z,o[1]=n*c*D+p*M,o[2]=n*p*D-c*M,o[3]=0,o[4]=n*c*D-p*M,o[5]=_+(1-_)*z,o[6]=c*p*D+n*M,o[7]=0,o[8]=n*p*D+c*M,o[9]=c*p*D-n*M,o[10]=A+(1-A)*z,o[11]=0,o[12]=0,o[13]=0,o[14]=0,o[15]=1,o}const e=d;function a(t,l,r,o){const n=o??new f(16);let c=l[0],p=l[1],h=l[2];const y=Math.sqrt(c*c+p*p+h*h);c/=y,p/=y,h/=y;const _=c*c,A=p*p,z=h*h,M=Math.cos(r),D=Math.sin(r),R=1-M,$=_+(1-_)*M,T=c*p*R+h*D,B=c*h*R-p*D,W=c*p*R-h*D,N=A+(1-A)*M,rt=p*h*R+c*D,nt=c*h*R+p*D,ct=p*h*R-c*D,ft=z+(1-z)*M,yt=t[0],bt=t[1],Mt=t[2],Dt=t[3],At=t[4],Et=t[5],Rt=t[6],zt=t[7],Tt=t[8],It=t[9],$t=t[10],Ot=t[11];return n[0]=$*yt+T*At+B*Tt,n[1]=$*bt+T*Et+B*It,n[2]=$*Mt+T*Rt+B*$t,n[3]=$*Dt+T*zt+B*Ot,n[4]=W*yt+N*At+rt*Tt,n[5]=W*bt+N*Et+rt*It,n[6]=W*Mt+N*Rt+rt*$t,n[7]=W*Dt+N*zt+rt*Ot,n[8]=nt*yt+ct*At+ft*Tt,n[9]=nt*bt+ct*Et+ft*It,n[10]=nt*Mt+ct*Rt+ft*$t,n[11]=nt*Dt+ct*zt+ft*Ot,t!==n&&(n[12]=t[12],n[13]=t[13],n[14]=t[14],n[15]=t[15]),n}const s=a;function u(t,l){const r=l??new f(16);return r[0]=t[0],r[1]=0,r[2]=0,r[3]=0,r[4]=0,r[5]=t[1],r[6]=0,r[7]=0,r[8]=0,r[9]=0,r[10]=t[2],r[11]=0,r[12]=0,r[13]=0,r[14]=0,r[15]=1,r}function g(t,l,r){const o=r??new f(16),n=l[0],c=l[1],p=l[2];return o[0]=n*t[0],o[1]=n*t[1],o[2]=n*t[2],o[3]=n*t[3],o[4]=c*t[4],o[5]=c*t[5],o[6]=c*t[6],o[7]=c*t[7],o[8]=p*t[8],o[9]=p*t[9],o[10]=p*t[10],o[11]=p*t[11],t!==o&&(o[12]=t[12],o[13]=t[13],o[14]=t[14],o[15]=t[15]),o}function w(t,l){const r=l??new f(16);return r[0]=t,r[1]=0,r[2]=0,r[3]=0,r[4]=0,r[5]=t,r[6]=0,r[7]=0,r[8]=0,r[9]=0,r[10]=t,r[11]=0,r[12]=0,r[13]=0,r[14]=0,r[15]=1,r}function m(t,l,r){const o=r??new f(16);return o[0]=l*t[0],o[1]=l*t[1],o[2]=l*t[2],o[3]=l*t[3],o[4]=l*t[4],o[5]=l*t[5],o[6]=l*t[6],o[7]=l*t[7],o[8]=l*t[8],o[9]=l*t[9],o[10]=l*t[10],o[11]=l*t[11],t!==o&&(o[12]=t[12],o[13]=t[13],o[14]=t[14],o[15]=t[15]),o}return{add:I,aim:wt,axisRotate:a,axisRotation:d,cameraAim:et,clone:F,copy:G,create:v,determinant:V,equals:K,equalsApproximately:j,fromMat3:S,fromQuat:U,frustum:Lt,frustumReverseZ:mt,getAxis:St,getScaling:pt,getTranslation:ot,identity:tt,inverse:lt,invert:O,lookAt:H,mul:st,mulScalar:q,multiply:Y,multiplyScalar:L,negate:E,ortho:gt,perspective:at,perspectiveReverseZ:_t,rotate:s,rotateX:ut,rotateY:J,rotateZ:P,rotation:e,rotationX:Ut,rotationY:Bt,rotationZ:b,scale:g,scaling:u,set:x,setAxis:dt,setTranslation:ht,translate:xt,translation:vt,transpose:Q,uniformScale:m,uniformScaling:w}}const ue=new Map;function Se(f){let i=ue.get(f);return i||(i=Me(f),ue.set(f,i)),i}function _e(f){const i=Kt(f);function v(b,P,d,e){const a=new f(4);return b!==void 0&&(a[0]=b,P!==void 0&&(a[1]=P,d!==void 0&&(a[2]=d,e!==void 0&&(a[3]=e)))),a}const x=v;function S(b,P,d,e,a){const s=a??new f(4);return s[0]=b,s[1]=P,s[2]=d,s[3]=e,s}function U(b,P,d){const e=d??new f(4),a=P*.5,s=Math.sin(a);return e[0]=s*b[0],e[1]=s*b[1],e[2]=s*b[2],e[3]=Math.cos(a),e}function E(b,P){const d=P??i.create(3),e=Math.acos(b[3])*2,a=Math.sin(e*.5);return a>X?(d[0]=b[0]/a,d[1]=b[1]/a,d[2]=b[2]/a):(d[0]=1,d[1]=0,d[2]=0),{angle:e,axis:d}}function I(b,P){const d=at(b,P);return Math.acos(2*d*d-1)}function L(b,P,d){const e=d??new f(4),a=b[0],s=b[1],u=b[2],g=b[3],w=P[0],m=P[1],t=P[2],l=P[3];return e[0]=a*l+g*w+s*t-u*m,e[1]=s*l+g*m+u*w-a*t,e[2]=u*l+g*t+a*m-s*w,e[3]=g*l-a*w-s*m-u*t,e}const q=L;function G(b,P,d){const e=d??new f(4),a=P*.5,s=b[0],u=b[1],g=b[2],w=b[3],m=Math.sin(a),t=Math.cos(a);return e[0]=s*t+w*m,e[1]=u*t+g*m,e[2]=g*t-u*m,e[3]=w*t-s*m,e}function F(b,P,d){const e=d??new f(4),a=P*.5,s=b[0],u=b[1],g=b[2],w=b[3],m=Math.sin(a),t=Math.cos(a);return e[0]=s*t-g*m,e[1]=u*t+w*m,e[2]=g*t+s*m,e[3]=w*t-u*m,e}function j(b,P,d){const e=d??new f(4),a=P*.5,s=b[0],u=b[1],g=b[2],w=b[3],m=Math.sin(a),t=Math.cos(a);return e[0]=s*t+u*m,e[1]=u*t-s*m,e[2]=g*t+w*m,e[3]=w*t-g*m,e}function K(b,P,d,e){const a=e??new f(4),s=b[0],u=b[1],g=b[2],w=b[3];let m=P[0],t=P[1],l=P[2],r=P[3],o=s*m+u*t+g*l+w*r;o<0&&(o=-o,m=-m,t=-t,l=-l,r=-r);let n,c;if(1-o>X){const p=Math.acos(o),h=Math.sin(p);n=Math.sin((1-d)*p)/h,c=Math.sin(d*p)/h}else n=1-d,c=d;return a[0]=n*s+c*m,a[1]=n*u+c*t,a[2]=n*g+c*l,a[3]=n*w+c*r,a}function tt(b,P){const d=P??new f(4),e=b[0],a=b[1],s=b[2],u=b[3],g=e*e+a*a+s*s+u*u,w=g?1/g:0;return d[0]=-e*w,d[1]=-a*w,d[2]=-s*w,d[3]=u*w,d}function Q(b,P){const d=P??new f(4);return d[0]=-b[0],d[1]=-b[1],d[2]=-b[2],d[3]=b[3],d}function lt(b,P){const d=P??new f(4),e=b[0]+b[5]+b[10];if(e>0){const a=Math.sqrt(e+1);d[3]=.5*a;const s=.5/a;d[0]=(b[6]-b[9])*s,d[1]=(b[8]-b[2])*s,d[2]=(b[1]-b[4])*s}else{let a=0;b[5]>b[0]&&(a=1),b[10]>b[a*4+a]&&(a=2);const s=(a+1)%3,u=(a+2)%3,g=Math.sqrt(b[a*4+a]-b[s*4+s]-b[u*4+u]+1);d[a]=.5*g;const w=.5/g;d[3]=(b[s*4+u]-b[u*4+s])*w,d[s]=(b[s*4+a]+b[a*4+s])*w,d[u]=(b[u*4+a]+b[a*4+u])*w}return d}function V(b,P,d,e,a){const s=a??new f(4),u=b*.5,g=P*.5,w=d*.5,m=Math.sin(u),t=Math.cos(u),l=Math.sin(g),r=Math.cos(g),o=Math.sin(w),n=Math.cos(w);switch(e){case"xyz":s[0]=m*r*n+t*l*o,s[1]=t*l*n-m*r*o,s[2]=t*r*o+m*l*n,s[3]=t*r*n-m*l*o;break;case"xzy":s[0]=m*r*n-t*l*o,s[1]=t*l*n-m*r*o,s[2]=t*r*o+m*l*n,s[3]=t*r*n+m*l*o;break;case"yxz":s[0]=m*r*n+t*l*o,s[1]=t*l*n-m*r*o,s[2]=t*r*o-m*l*n,s[3]=t*r*n+m*l*o;break;case"yzx":s[0]=m*r*n+t*l*o,s[1]=t*l*n+m*r*o,s[2]=t*r*o-m*l*n,s[3]=t*r*n-m*l*o;break;case"zxy":s[0]=m*r*n-t*l*o,s[1]=t*l*n+m*r*o,s[2]=t*r*o+m*l*n,s[3]=t*r*n-m*l*o;break;case"zyx":s[0]=m*r*n-t*l*o,s[1]=t*l*n+m*r*o,s[2]=t*r*o-m*l*n,s[3]=t*r*n+m*l*o;break;default:throw new Error(`Unknown rotation order: ${e}`)}return s}function O(b,P){const d=P??new f(4);return d[0]=b[0],d[1]=b[1],d[2]=b[2],d[3]=b[3],d}const Y=O;function st(b,P,d){const e=d??new f(4);return e[0]=b[0]+P[0],e[1]=b[1]+P[1],e[2]=b[2]+P[2],e[3]=b[3]+P[3],e}function ht(b,P,d){const e=d??new f(4);return e[0]=b[0]-P[0],e[1]=b[1]-P[1],e[2]=b[2]-P[2],e[3]=b[3]-P[3],e}const ot=ht;function St(b,P,d){const e=d??new f(4);return e[0]=b[0]*P,e[1]=b[1]*P,e[2]=b[2]*P,e[3]=b[3]*P,e}const dt=St;function pt(b,P,d){const e=d??new f(4);return e[0]=b[0]/P,e[1]=b[1]/P,e[2]=b[2]/P,e[3]=b[3]/P,e}function at(b,P){return b[0]*P[0]+b[1]*P[1]+b[2]*P[2]+b[3]*P[3]}function _t(b,P,d,e){const a=e??new f(4);return a[0]=b[0]+d*(P[0]-b[0]),a[1]=b[1]+d*(P[1]-b[1]),a[2]=b[2]+d*(P[2]-b[2]),a[3]=b[3]+d*(P[3]-b[3]),a}function gt(b){const P=b[0],d=b[1],e=b[2],a=b[3];return Math.sqrt(P*P+d*d+e*e+a*a)}const Lt=gt;function mt(b){const P=b[0],d=b[1],e=b[2],a=b[3];return P*P+d*d+e*e+a*a}const Z=mt;function k(b,P){const d=P??new f(4),e=b[0],a=b[1],s=b[2],u=b[3],g=Math.sqrt(e*e+a*a+s*s+u*u);return g>1e-5?(d[0]=e/g,d[1]=a/g,d[2]=s/g,d[3]=u/g):(d[0]=0,d[1]=0,d[2]=0,d[3]=1),d}function C(b,P){return Math.abs(b[0]-P[0])<X&&Math.abs(b[1]-P[1])<X&&Math.abs(b[2]-P[2])<X&&Math.abs(b[3]-P[3])<X}function wt(b,P){return b[0]===P[0]&&b[1]===P[1]&&b[2]===P[2]&&b[3]===P[3]}function et(b){const P=b??new f(4);return P[0]=0,P[1]=0,P[2]=0,P[3]=1,P}const H=i.create(),vt=i.create(),xt=i.create();function Ut(b,P,d){const e=d??new f(4),a=i.dot(b,P);return a<-.999999?(i.cross(vt,b,H),i.len(H)<1e-6&&i.cross(xt,b,H),i.normalize(H,H),U(H,Math.PI,e),e):a>.999999?(e[0]=0,e[1]=0,e[2]=0,e[3]=1,e):(i.cross(b,P,H),e[0]=H[0],e[1]=H[1],e[2]=H[2],e[3]=1+a,k(e,e))}const ut=new f(4),Bt=new f(4);function J(b,P,d,e,a,s){const u=s??new f(4);return K(b,e,a,ut),K(P,d,a,Bt),K(ut,Bt,2*a*(1-a),u),u}return{create:v,fromValues:x,set:S,fromAxisAngle:U,toAxisAngle:E,angle:I,multiply:L,mul:q,rotateX:G,rotateY:F,rotateZ:j,slerp:K,inverse:tt,conjugate:Q,fromMat:lt,fromEuler:V,copy:O,clone:Y,add:st,subtract:ht,sub:ot,mulScalar:St,scale:dt,divScalar:pt,dot:at,lerp:_t,length:gt,len:Lt,lengthSq:mt,lenSq:Z,normalize:k,equalsApproximately:C,equals:wt,identity:et,rotationTo:Ut,sqlerp:J}}const fe=new Map;function De(f){let i=fe.get(f);return i||(i=_e(f),fe.set(f,i)),i}function Ae(f){function i(d,e,a,s){const u=new f(4);return d!==void 0&&(u[0]=d,e!==void 0&&(u[1]=e,a!==void 0&&(u[2]=a,s!==void 0&&(u[3]=s)))),u}const v=i;function x(d,e,a,s,u){const g=u??new f(4);return g[0]=d,g[1]=e,g[2]=a,g[3]=s,g}function S(d,e){const a=e??new f(4);return a[0]=Math.ceil(d[0]),a[1]=Math.ceil(d[1]),a[2]=Math.ceil(d[2]),a[3]=Math.ceil(d[3]),a}function U(d,e){const a=e??new f(4);return a[0]=Math.floor(d[0]),a[1]=Math.floor(d[1]),a[2]=Math.floor(d[2]),a[3]=Math.floor(d[3]),a}function E(d,e){const a=e??new f(4);return a[0]=Math.round(d[0]),a[1]=Math.round(d[1]),a[2]=Math.round(d[2]),a[3]=Math.round(d[3]),a}function I(d,e=0,a=1,s){const u=s??new f(4);return u[0]=Math.min(a,Math.max(e,d[0])),u[1]=Math.min(a,Math.max(e,d[1])),u[2]=Math.min(a,Math.max(e,d[2])),u[3]=Math.min(a,Math.max(e,d[3])),u}function L(d,e,a){const s=a??new f(4);return s[0]=d[0]+e[0],s[1]=d[1]+e[1],s[2]=d[2]+e[2],s[3]=d[3]+e[3],s}function q(d,e,a,s){const u=s??new f(4);return u[0]=d[0]+e[0]*a,u[1]=d[1]+e[1]*a,u[2]=d[2]+e[2]*a,u[3]=d[3]+e[3]*a,u}function G(d,e,a){const s=a??new f(4);return s[0]=d[0]-e[0],s[1]=d[1]-e[1],s[2]=d[2]-e[2],s[3]=d[3]-e[3],s}const F=G;function j(d,e){return Math.abs(d[0]-e[0])<X&&Math.abs(d[1]-e[1])<X&&Math.abs(d[2]-e[2])<X&&Math.abs(d[3]-e[3])<X}function K(d,e){return d[0]===e[0]&&d[1]===e[1]&&d[2]===e[2]&&d[3]===e[3]}function tt(d,e,a,s){const u=s??new f(4);return u[0]=d[0]+a*(e[0]-d[0]),u[1]=d[1]+a*(e[1]-d[1]),u[2]=d[2]+a*(e[2]-d[2]),u[3]=d[3]+a*(e[3]-d[3]),u}function Q(d,e,a,s){const u=s??new f(4);return u[0]=d[0]+a[0]*(e[0]-d[0]),u[1]=d[1]+a[1]*(e[1]-d[1]),u[2]=d[2]+a[2]*(e[2]-d[2]),u[3]=d[3]+a[3]*(e[3]-d[3]),u}function lt(d,e,a){const s=a??new f(4);return s[0]=Math.max(d[0],e[0]),s[1]=Math.max(d[1],e[1]),s[2]=Math.max(d[2],e[2]),s[3]=Math.max(d[3],e[3]),s}function V(d,e,a){const s=a??new f(4);return s[0]=Math.min(d[0],e[0]),s[1]=Math.min(d[1],e[1]),s[2]=Math.min(d[2],e[2]),s[3]=Math.min(d[3],e[3]),s}function O(d,e,a){const s=a??new f(4);return s[0]=d[0]*e,s[1]=d[1]*e,s[2]=d[2]*e,s[3]=d[3]*e,s}const Y=O;function st(d,e,a){const s=a??new f(4);return s[0]=d[0]/e,s[1]=d[1]/e,s[2]=d[2]/e,s[3]=d[3]/e,s}function ht(d,e){const a=e??new f(4);return a[0]=1/d[0],a[1]=1/d[1],a[2]=1/d[2],a[3]=1/d[3],a}const ot=ht;function St(d,e){return d[0]*e[0]+d[1]*e[1]+d[2]*e[2]+d[3]*e[3]}function dt(d){const e=d[0],a=d[1],s=d[2],u=d[3];return Math.sqrt(e*e+a*a+s*s+u*u)}const pt=dt;function at(d){const e=d[0],a=d[1],s=d[2],u=d[3];return e*e+a*a+s*s+u*u}const _t=at;function gt(d,e){const a=d[0]-e[0],s=d[1]-e[1],u=d[2]-e[2],g=d[3]-e[3];return Math.sqrt(a*a+s*s+u*u+g*g)}const Lt=gt;function mt(d,e){const a=d[0]-e[0],s=d[1]-e[1],u=d[2]-e[2],g=d[3]-e[3];return a*a+s*s+u*u+g*g}const Z=mt;function k(d,e){const a=e??new f(4),s=d[0],u=d[1],g=d[2],w=d[3],m=Math.sqrt(s*s+u*u+g*g+w*w);return m>1e-5?(a[0]=s/m,a[1]=u/m,a[2]=g/m,a[3]=w/m):(a[0]=0,a[1]=0,a[2]=0,a[3]=0),a}function C(d,e){const a=e??new f(4);return a[0]=-d[0],a[1]=-d[1],a[2]=-d[2],a[3]=-d[3],a}function wt(d,e){const a=e??new f(4);return a[0]=d[0],a[1]=d[1],a[2]=d[2],a[3]=d[3],a}const et=wt;function H(d,e,a){const s=a??new f(4);return s[0]=d[0]*e[0],s[1]=d[1]*e[1],s[2]=d[2]*e[2],s[3]=d[3]*e[3],s}const vt=H;function xt(d,e,a){const s=a??new f(4);return s[0]=d[0]/e[0],s[1]=d[1]/e[1],s[2]=d[2]/e[2],s[3]=d[3]/e[3],s}const Ut=xt;function ut(d){const e=d??new f(4);return e[0]=0,e[1]=0,e[2]=0,e[3]=0,e}function Bt(d,e,a){const s=a??new f(4),u=d[0],g=d[1],w=d[2],m=d[3];return s[0]=e[0]*u+e[4]*g+e[8]*w+e[12]*m,s[1]=e[1]*u+e[5]*g+e[9]*w+e[13]*m,s[2]=e[2]*u+e[6]*g+e[10]*w+e[14]*m,s[3]=e[3]*u+e[7]*g+e[11]*w+e[15]*m,s}function J(d,e,a){const s=a??new f(4);return k(d,s),O(s,e,s)}function b(d,e,a){const s=a??new f(4);return dt(d)>e?J(d,e,s):wt(d,s)}function P(d,e,a){const s=a??new f(4);return tt(d,e,.5,s)}return{create:i,fromValues:v,set:x,ceil:S,floor:U,round:E,clamp:I,add:L,addScaled:q,subtract:G,sub:F,equalsApproximately:j,equals:K,lerp:tt,lerpV:Q,max:lt,min:V,mulScalar:O,scale:Y,divScalar:st,inverse:ht,invert:ot,dot:St,length:dt,len:pt,lengthSq:at,lenSq:_t,distance:gt,dist:Lt,distanceSq:mt,distSq:Z,normalize:k,negate:C,copy:wt,clone:et,multiply:H,mul:vt,divide:xt,div:Ut,zero:ut,transformMat4:Bt,setLength:J,truncate:b,midpoint:P}}const he=new Map;function Pe(f){let i=he.get(f);return i||(i=Ae(f),he.set(f,i)),i}function ee(f,i,v,x,S,U){return{mat3:be(f),mat4:Se(i),quat:De(v),vec2:ge(x),vec3:Kt(S),vec4:Pe(U)}}const{mat4:Vt,vec3:Jt}=ee(Float32Array,Float32Array,Float32Array,Float32Array,Float32Array,Float32Array);ee(Float64Array,Float64Array,Float64Array,Float64Array,Float64Array,Float64Array);ee(we,Array,Array,Array,Array,Array);class Ct{constructor(i,v,x,S,U="div"){this.parent=i,this.object=v,this.property=x,this._disabled=!1,this._hidden=!1,this.initialValue=this.getValue(),this.domElement=document.createElement(U),this.domElement.classList.add("lil-controller"),this.domElement.classList.add(S),this.$name=document.createElement("div"),this.$name.classList.add("lil-name"),Ct.nextNameID=Ct.nextNameID||0,this.$name.id=`lil-gui-name-${++Ct.nextNameID}`,this.$widget=document.createElement("div"),this.$widget.classList.add("lil-widget"),this.$disable=this.$widget,this.domElement.appendChild(this.$name),this.domElement.appendChild(this.$widget),this.domElement.addEventListener("keydown",E=>E.stopPropagation()),this.domElement.addEventListener("keyup",E=>E.stopPropagation()),this.parent.children.push(this),this.parent.controllers.push(this),this.parent.$children.appendChild(this.domElement),this._listenCallback=this._listenCallback.bind(this),this.name(x)}name(i){return this._name=i,this.$name.textContent=i,this}onChange(i){return this._onChange=i,this}_callOnChange(){this.parent._callOnChange(this),this._onChange!==void 0&&this._onChange.call(this,this.getValue()),this._changed=!0}onFinishChange(i){return this._onFinishChange=i,this}_callOnFinishChange(){this._changed&&(this.parent._callOnFinishChange(this),this._onFinishChange!==void 0&&this._onFinishChange.call(this,this.getValue())),this._changed=!1}reset(){return this.setValue(this.initialValue),this._callOnFinishChange(),this}enable(i=!0){return this.disable(!i)}disable(i=!0){return i===this._disabled?this:(this._disabled=i,this.domElement.classList.toggle("lil-disabled",i),this.$disable.toggleAttribute("disabled",i),this)}show(i=!0){return this._hidden=!i,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}options(i){const v=this.parent.add(this.object,this.property,i);return v.name(this._name),this.destroy(),v}min(i){return this}max(i){return this}step(i){return this}decimals(i){return this}listen(i=!0){return this._listening=i,this._listenCallbackID!==void 0&&(cancelAnimationFrame(this._listenCallbackID),this._listenCallbackID=void 0),this._listening&&this._listenCallback(),this}_listenCallback(){this._listenCallbackID=requestAnimationFrame(this._listenCallback);const i=this.save();i!==this._listenPrevValue&&this.updateDisplay(),this._listenPrevValue=i}getValue(){return this.object[this.property]}setValue(i){return this.getValue()!==i&&(this.object[this.property]=i,this._callOnChange(),this.updateDisplay()),this}updateDisplay(){return this}load(i){return this.setValue(i),this._callOnFinishChange(),this}save(){return this.getValue()}destroy(){this.listen(!1),this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.controllers.splice(this.parent.controllers.indexOf(this),1),this.parent.$children.removeChild(this.domElement)}}class Ue extends Ct{constructor(i,v,x){super(i,v,x,"lil-boolean","label"),this.$input=document.createElement("input"),this.$input.setAttribute("type","checkbox"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$input.addEventListener("change",()=>{this.setValue(this.$input.checked),this._callOnFinishChange()}),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.checked=this.getValue(),this}}function te(f){let i,v;return(i=f.match(/(#|0x)?([a-f0-9]{6})/i))?v=i[2]:(i=f.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/))?v=parseInt(i[1]).toString(16).padStart(2,0)+parseInt(i[2]).toString(16).padStart(2,0)+parseInt(i[3]).toString(16).padStart(2,0):(i=f.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i))&&(v=i[1]+i[1]+i[2]+i[2]+i[3]+i[3]),v?"#"+v:!1}const Ee={isPrimitive:!0,match:f=>typeof f=="string",fromHexString:te,toHexString:te},Gt={isPrimitive:!0,match:f=>typeof f=="number",fromHexString:f=>parseInt(f.substring(1),16),toHexString:f=>"#"+f.toString(16).padStart(6,0)},Re={isPrimitive:!1,match:f=>Array.isArray(f)||ArrayBuffer.isView(f),fromHexString(f,i,v=1){const x=Gt.fromHexString(f);i[0]=(x>>16&255)/255*v,i[1]=(x>>8&255)/255*v,i[2]=(x&255)/255*v},toHexString([f,i,v],x=1){x=255/x;const S=f*x<<16^i*x<<8^v*x<<0;return Gt.toHexString(S)}},ze={isPrimitive:!1,match:f=>Object(f)===f,fromHexString(f,i,v=1){const x=Gt.fromHexString(f);i.r=(x>>16&255)/255*v,i.g=(x>>8&255)/255*v,i.b=(x&255)/255*v},toHexString({r:f,g:i,b:v},x=1){x=255/x;const S=f*x<<16^i*x<<8^v*x<<0;return Gt.toHexString(S)}},Te=[Ee,Gt,Re,ze];function Le(f){return Te.find(i=>i.match(f))}class Be extends Ct{constructor(i,v,x,S){super(i,v,x,"lil-color"),this.$input=document.createElement("input"),this.$input.setAttribute("type","color"),this.$input.setAttribute("tabindex",-1),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$text=document.createElement("input"),this.$text.setAttribute("type","text"),this.$text.setAttribute("spellcheck","false"),this.$text.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("lil-display"),this.$display.appendChild(this.$input),this.$widget.appendChild(this.$display),this.$widget.appendChild(this.$text),this._format=Le(this.initialValue),this._rgbScale=S,this._initialValueHexString=this.save(),this._textFocused=!1,this.$input.addEventListener("input",()=>{this._setValueFromHexString(this.$input.value)}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$text.addEventListener("input",()=>{const U=te(this.$text.value);U&&this._setValueFromHexString(U)}),this.$text.addEventListener("focus",()=>{this._textFocused=!0,this.$text.select()}),this.$text.addEventListener("blur",()=>{this._textFocused=!1,this.updateDisplay(),this._callOnFinishChange()}),this.$disable=this.$text,this.updateDisplay()}reset(){return this._setValueFromHexString(this._initialValueHexString),this}_setValueFromHexString(i){if(this._format.isPrimitive){const v=this._format.fromHexString(i);this.setValue(v)}else this._format.fromHexString(i,this.getValue(),this._rgbScale),this._callOnChange(),this.updateDisplay()}save(){return this._format.toHexString(this.getValue(),this._rgbScale)}load(i){return this._setValueFromHexString(i),this._callOnFinishChange(),this}updateDisplay(){return this.$input.value=this._format.toHexString(this.getValue(),this._rgbScale),this._textFocused||(this.$text.value=this.$input.value.substring(1)),this.$display.style.backgroundColor=this.$input.value,this}}class Qt extends Ct{constructor(i,v,x){super(i,v,x,"lil-function"),this.$button=document.createElement("button"),this.$button.appendChild(this.$name),this.$widget.appendChild(this.$button),this.$button.addEventListener("click",S=>{S.preventDefault(),this.getValue().call(this.object),this._callOnChange()}),this.$button.addEventListener("touchstart",()=>{},{passive:!0}),this.$disable=this.$button}}class Ie extends Ct{constructor(i,v,x,S,U,E){super(i,v,x,"lil-number"),this._initInput(),this.min(S),this.max(U);const I=E!==void 0;this.step(I?E:this._getImplicitStep(),I),this.updateDisplay()}decimals(i){return this._decimals=i,this.updateDisplay(),this}min(i){return this._min=i,this._onUpdateMinMax(),this}max(i){return this._max=i,this._onUpdateMinMax(),this}step(i,v=!0){return this._step=i,this._stepExplicit=v,this}updateDisplay(){const i=this.getValue();if(this._hasSlider){let v=(i-this._min)/(this._max-this._min);v=Math.max(0,Math.min(v,1)),this.$fill.style.width=v*100+"%"}return this._inputFocused||(this.$input.value=this._decimals===void 0?i:i.toFixed(this._decimals)),this}_initInput(){this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("aria-labelledby",this.$name.id),window.matchMedia("(pointer: coarse)").matches&&(this.$input.setAttribute("type","number"),this.$input.setAttribute("step","any")),this.$widget.appendChild(this.$input),this.$disable=this.$input;const v=()=>{let O=parseFloat(this.$input.value);isNaN(O)||(this._stepExplicit&&(O=this._snap(O)),this.setValue(this._clamp(O)))},x=O=>{const Y=parseFloat(this.$input.value);isNaN(Y)||(this._snapClampSetValue(Y+O),this.$input.value=this.getValue())},S=O=>{O.key==="Enter"&&this.$input.blur(),O.code==="ArrowUp"&&(O.preventDefault(),x(this._step*this._arrowKeyMultiplier(O))),O.code==="ArrowDown"&&(O.preventDefault(),x(this._step*this._arrowKeyMultiplier(O)*-1))},U=O=>{this._inputFocused&&(O.preventDefault(),x(this._step*this._normalizeMouseWheel(O)))};let E=!1,I,L,q,G,F;const j=5,K=O=>{I=O.clientX,L=q=O.clientY,E=!0,G=this.getValue(),F=0,window.addEventListener("mousemove",tt),window.addEventListener("mouseup",Q)},tt=O=>{if(E){const Y=O.clientX-I,st=O.clientY-L;Math.abs(st)>j?(O.preventDefault(),this.$input.blur(),E=!1,this._setDraggingStyle(!0,"vertical")):Math.abs(Y)>j&&Q()}if(!E){const Y=O.clientY-q;F-=Y*this._step*this._arrowKeyMultiplier(O),G+F>this._max?F=this._max-G:G+F<this._min&&(F=this._min-G),this._snapClampSetValue(G+F)}q=O.clientY},Q=()=>{this._setDraggingStyle(!1,"vertical"),this._callOnFinishChange(),window.removeEventListener("mousemove",tt),window.removeEventListener("mouseup",Q)},lt=()=>{this._inputFocused=!0},V=()=>{this._inputFocused=!1,this.updateDisplay(),this._callOnFinishChange()};this.$input.addEventListener("input",v),this.$input.addEventListener("keydown",S),this.$input.addEventListener("wheel",U,{passive:!1}),this.$input.addEventListener("mousedown",K),this.$input.addEventListener("focus",lt),this.$input.addEventListener("blur",V)}_initSlider(){this._hasSlider=!0,this.$slider=document.createElement("div"),this.$slider.classList.add("lil-slider"),this.$fill=document.createElement("div"),this.$fill.classList.add("lil-fill"),this.$slider.appendChild(this.$fill),this.$widget.insertBefore(this.$slider,this.$input),this.domElement.classList.add("lil-has-slider");const i=(V,O,Y,st,ht)=>(V-O)/(Y-O)*(ht-st)+st,v=V=>{const O=this.$slider.getBoundingClientRect();let Y=i(V,O.left,O.right,this._min,this._max);this._snapClampSetValue(Y)},x=V=>{this._setDraggingStyle(!0),v(V.clientX),window.addEventListener("mousemove",S),window.addEventListener("mouseup",U)},S=V=>{v(V.clientX)},U=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("mousemove",S),window.removeEventListener("mouseup",U)};let E=!1,I,L;const q=V=>{V.preventDefault(),this._setDraggingStyle(!0),v(V.touches[0].clientX),E=!1},G=V=>{V.touches.length>1||(this._hasScrollBar?(I=V.touches[0].clientX,L=V.touches[0].clientY,E=!0):q(V),window.addEventListener("touchmove",F,{passive:!1}),window.addEventListener("touchend",j))},F=V=>{if(E){const O=V.touches[0].clientX-I,Y=V.touches[0].clientY-L;Math.abs(O)>Math.abs(Y)?q(V):(window.removeEventListener("touchmove",F),window.removeEventListener("touchend",j))}else V.preventDefault(),v(V.touches[0].clientX)},j=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("touchmove",F),window.removeEventListener("touchend",j)},K=this._callOnFinishChange.bind(this),tt=400;let Q;const lt=V=>{if(Math.abs(V.deltaX)<Math.abs(V.deltaY)&&this._hasScrollBar)return;V.preventDefault();const Y=this._normalizeMouseWheel(V)*this._step;this._snapClampSetValue(this.getValue()+Y),this.$input.value=this.getValue(),clearTimeout(Q),Q=setTimeout(K,tt)};this.$slider.addEventListener("mousedown",x),this.$slider.addEventListener("touchstart",G,{passive:!1}),this.$slider.addEventListener("wheel",lt,{passive:!1})}_setDraggingStyle(i,v="horizontal"){this.$slider&&this.$slider.classList.toggle("lil-active",i),document.body.classList.toggle("lil-dragging",i),document.body.classList.toggle(`lil-${v}`,i)}_getImplicitStep(){return this._hasMin&&this._hasMax?(this._max-this._min)/1e3:.1}_onUpdateMinMax(){!this._hasSlider&&this._hasMin&&this._hasMax&&(this._stepExplicit||this.step(this._getImplicitStep(),!1),this._initSlider(),this.updateDisplay())}_normalizeMouseWheel(i){let{deltaX:v,deltaY:x}=i;return Math.floor(i.deltaY)!==i.deltaY&&i.wheelDelta&&(v=0,x=-i.wheelDelta/120,x*=this._stepExplicit?1:10),v+-x}_arrowKeyMultiplier(i){let v=this._stepExplicit?1:10;return i.shiftKey?v*=10:i.altKey&&(v/=10),v}_snap(i){let v=0;return this._hasMin?v=this._min:this._hasMax&&(v=this._max),i-=v,i=Math.round(i/this._step)*this._step,i+=v,i=parseFloat(i.toPrecision(15)),i}_clamp(i){return i<this._min&&(i=this._min),i>this._max&&(i=this._max),i}_snapClampSetValue(i){this.setValue(this._clamp(this._snap(i)))}get _hasScrollBar(){const i=this.parent.root.$children;return i.scrollHeight>i.clientHeight}get _hasMin(){return this._min!==void 0}get _hasMax(){return this._max!==void 0}}class $e extends Ct{constructor(i,v,x,S){super(i,v,x,"lil-option"),this.$select=document.createElement("select"),this.$select.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("lil-display"),this.$select.addEventListener("change",()=>{this.setValue(this._values[this.$select.selectedIndex]),this._callOnFinishChange()}),this.$select.addEventListener("focus",()=>{this.$display.classList.add("lil-focus")}),this.$select.addEventListener("blur",()=>{this.$display.classList.remove("lil-focus")}),this.$widget.appendChild(this.$select),this.$widget.appendChild(this.$display),this.$disable=this.$select,this.options(S)}options(i){return this._values=Array.isArray(i)?i:Object.values(i),this._names=Array.isArray(i)?i:Object.keys(i),this.$select.replaceChildren(),this._names.forEach(v=>{const x=document.createElement("option");x.textContent=v,this.$select.appendChild(x)}),this.updateDisplay(),this}updateDisplay(){const i=this.getValue(),v=this._values.indexOf(i);return this.$select.selectedIndex=v,this.$display.textContent=v===-1?i:this._names[v],this}}class Oe extends Ct{constructor(i,v,x){super(i,v,x,"lil-string"),this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("spellcheck","false"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$input.addEventListener("input",()=>{this.setValue(this.$input.value)}),this.$input.addEventListener("keydown",S=>{S.code==="Enter"&&this.$input.blur()}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$widget.appendChild(this.$input),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.value=this.getValue(),this}}var Fe=`.lil-gui {
  font-family: var(--font-family);
  font-size: var(--font-size);
  line-height: 1;
  font-weight: normal;
  font-style: normal;
  text-align: left;
  color: var(--text-color);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  --background-color: #1f1f1f;
  --text-color: #ebebeb;
  --title-background-color: #111111;
  --title-text-color: #ebebeb;
  --widget-color: #424242;
  --hover-color: #4f4f4f;
  --focus-color: #595959;
  --number-color: #2cc9ff;
  --string-color: #a2db3c;
  --font-size: 11px;
  --input-font-size: 11px;
  --font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif;
  --font-family-mono: Menlo, Monaco, Consolas, "Droid Sans Mono", monospace;
  --padding: 4px;
  --spacing: 4px;
  --widget-height: 20px;
  --title-height: calc(var(--widget-height) + var(--spacing) * 1.25);
  --name-width: 45%;
  --slider-knob-width: 2px;
  --slider-input-width: 27%;
  --color-input-width: 27%;
  --slider-input-min-width: 45px;
  --color-input-min-width: 45px;
  --folder-indent: 7px;
  --widget-padding: 0 0 0 3px;
  --widget-border-radius: 2px;
  --checkbox-size: calc(0.75 * var(--widget-height));
  --scrollbar-width: 5px;
}
.lil-gui, .lil-gui * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.lil-gui.lil-root {
  width: var(--width, 245px);
  display: flex;
  flex-direction: column;
  background: var(--background-color);
}
.lil-gui.lil-root > .lil-title {
  background: var(--title-background-color);
  color: var(--title-text-color);
}
.lil-gui.lil-root > .lil-children {
  overflow-x: hidden;
  overflow-y: auto;
}
.lil-gui.lil-root > .lil-children::-webkit-scrollbar {
  width: var(--scrollbar-width);
  height: var(--scrollbar-width);
  background: var(--background-color);
}
.lil-gui.lil-root > .lil-children::-webkit-scrollbar-thumb {
  border-radius: var(--scrollbar-width);
  background: var(--focus-color);
}
@media (pointer: coarse) {
  .lil-gui.lil-allow-touch-styles, .lil-gui.lil-allow-touch-styles .lil-gui {
    --widget-height: 28px;
    --padding: 6px;
    --spacing: 6px;
    --font-size: 13px;
    --input-font-size: 16px;
    --folder-indent: 10px;
    --scrollbar-width: 7px;
    --slider-input-min-width: 50px;
    --color-input-min-width: 65px;
  }
}
.lil-gui.lil-force-touch-styles, .lil-gui.lil-force-touch-styles .lil-gui {
  --widget-height: 28px;
  --padding: 6px;
  --spacing: 6px;
  --font-size: 13px;
  --input-font-size: 16px;
  --folder-indent: 10px;
  --scrollbar-width: 7px;
  --slider-input-min-width: 50px;
  --color-input-min-width: 65px;
}
.lil-gui.lil-auto-place, .lil-gui.autoPlace {
  max-height: 100%;
  position: fixed;
  top: 0;
  right: 15px;
  z-index: 1001;
}

.lil-controller {
  display: flex;
  align-items: center;
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
}
.lil-controller.lil-disabled {
  opacity: 0.5;
}
.lil-controller.lil-disabled, .lil-controller.lil-disabled * {
  pointer-events: none !important;
}
.lil-controller > .lil-name {
  min-width: var(--name-width);
  flex-shrink: 0;
  white-space: pre;
  padding-right: var(--spacing);
  line-height: var(--widget-height);
}
.lil-controller .lil-widget {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  min-height: var(--widget-height);
}
.lil-controller.lil-string input {
  color: var(--string-color);
}
.lil-controller.lil-boolean {
  cursor: pointer;
}
.lil-controller.lil-color .lil-display {
  width: 100%;
  height: var(--widget-height);
  border-radius: var(--widget-border-radius);
  position: relative;
}
@media (hover: hover) {
  .lil-controller.lil-color .lil-display:hover:before {
    content: " ";
    display: block;
    position: absolute;
    border-radius: var(--widget-border-radius);
    border: 1px solid #fff9;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
}
.lil-controller.lil-color input[type=color] {
  opacity: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
}
.lil-controller.lil-color input[type=text] {
  margin-left: var(--spacing);
  font-family: var(--font-family-mono);
  min-width: var(--color-input-min-width);
  width: var(--color-input-width);
  flex-shrink: 0;
}
.lil-controller.lil-option select {
  opacity: 0;
  position: absolute;
  width: 100%;
  max-width: 100%;
}
.lil-controller.lil-option .lil-display {
  position: relative;
  pointer-events: none;
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  line-height: var(--widget-height);
  max-width: 100%;
  overflow: hidden;
  word-break: break-all;
  padding-left: 0.55em;
  padding-right: 1.75em;
  background: var(--widget-color);
}
@media (hover: hover) {
  .lil-controller.lil-option .lil-display.lil-focus {
    background: var(--focus-color);
  }
}
.lil-controller.lil-option .lil-display.lil-active {
  background: var(--focus-color);
}
.lil-controller.lil-option .lil-display:after {
  font-family: "lil-gui";
  content: "↕";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  padding-right: 0.375em;
}
.lil-controller.lil-option .lil-widget,
.lil-controller.lil-option select {
  cursor: pointer;
}
@media (hover: hover) {
  .lil-controller.lil-option .lil-widget:hover .lil-display {
    background: var(--hover-color);
  }
}
.lil-controller.lil-number input {
  color: var(--number-color);
}
.lil-controller.lil-number.lil-has-slider input {
  margin-left: var(--spacing);
  width: var(--slider-input-width);
  min-width: var(--slider-input-min-width);
  flex-shrink: 0;
}
.lil-controller.lil-number .lil-slider {
  width: 100%;
  height: var(--widget-height);
  background: var(--widget-color);
  border-radius: var(--widget-border-radius);
  padding-right: var(--slider-knob-width);
  overflow: hidden;
  cursor: ew-resize;
  touch-action: pan-y;
}
@media (hover: hover) {
  .lil-controller.lil-number .lil-slider:hover {
    background: var(--hover-color);
  }
}
.lil-controller.lil-number .lil-slider.lil-active {
  background: var(--focus-color);
}
.lil-controller.lil-number .lil-slider.lil-active .lil-fill {
  opacity: 0.95;
}
.lil-controller.lil-number .lil-fill {
  height: 100%;
  border-right: var(--slider-knob-width) solid var(--number-color);
  box-sizing: content-box;
}

.lil-dragging .lil-gui {
  --hover-color: var(--widget-color);
}
.lil-dragging * {
  cursor: ew-resize !important;
}
.lil-dragging.lil-vertical * {
  cursor: ns-resize !important;
}

.lil-gui .lil-title {
  height: var(--title-height);
  font-weight: 600;
  padding: 0 var(--padding);
  width: 100%;
  text-align: left;
  background: none;
  text-decoration-skip: objects;
}
.lil-gui .lil-title:before {
  font-family: "lil-gui";
  content: "▾";
  padding-right: 2px;
  display: inline-block;
}
.lil-gui .lil-title:active {
  background: var(--title-background-color);
  opacity: 0.75;
}
@media (hover: hover) {
  body:not(.lil-dragging) .lil-gui .lil-title:hover {
    background: var(--title-background-color);
    opacity: 0.85;
  }
  .lil-gui .lil-title:focus {
    text-decoration: underline var(--focus-color);
  }
}
.lil-gui.lil-root > .lil-title:focus {
  text-decoration: none !important;
}
.lil-gui.lil-closed > .lil-title:before {
  content: "▸";
}
.lil-gui.lil-closed > .lil-children {
  transform: translateY(-7px);
  opacity: 0;
}
.lil-gui.lil-closed:not(.lil-transition) > .lil-children {
  display: none;
}
.lil-gui.lil-transition > .lil-children {
  transition-duration: 300ms;
  transition-property: height, opacity, transform;
  transition-timing-function: cubic-bezier(0.2, 0.6, 0.35, 1);
  overflow: hidden;
  pointer-events: none;
}
.lil-gui .lil-children:empty:before {
  content: "Empty";
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
  display: block;
  height: var(--widget-height);
  font-style: italic;
  line-height: var(--widget-height);
  opacity: 0.5;
}
.lil-gui.lil-root > .lil-children > .lil-gui > .lil-title {
  border: 0 solid var(--widget-color);
  border-width: 1px 0;
  transition: border-color 300ms;
}
.lil-gui.lil-root > .lil-children > .lil-gui.lil-closed > .lil-title {
  border-bottom-color: transparent;
}
.lil-gui + .lil-controller {
  border-top: 1px solid var(--widget-color);
  margin-top: 0;
  padding-top: var(--spacing);
}
.lil-gui .lil-gui .lil-gui > .lil-title {
  border: none;
}
.lil-gui .lil-gui .lil-gui > .lil-children {
  border: none;
  margin-left: var(--folder-indent);
  border-left: 2px solid var(--widget-color);
}
.lil-gui .lil-gui .lil-controller {
  border: none;
}

.lil-gui label, .lil-gui input, .lil-gui button {
  -webkit-tap-highlight-color: transparent;
}
.lil-gui input {
  border: 0;
  outline: none;
  font-family: var(--font-family);
  font-size: var(--input-font-size);
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  background: var(--widget-color);
  color: var(--text-color);
  width: 100%;
}
@media (hover: hover) {
  .lil-gui input:hover {
    background: var(--hover-color);
  }
  .lil-gui input:active {
    background: var(--focus-color);
  }
}
.lil-gui input:disabled {
  opacity: 1;
}
.lil-gui input[type=text],
.lil-gui input[type=number] {
  padding: var(--widget-padding);
  -moz-appearance: textfield;
}
.lil-gui input[type=text]:focus,
.lil-gui input[type=number]:focus {
  background: var(--focus-color);
}
.lil-gui input[type=checkbox] {
  appearance: none;
  width: var(--checkbox-size);
  height: var(--checkbox-size);
  border-radius: var(--widget-border-radius);
  text-align: center;
  cursor: pointer;
}
.lil-gui input[type=checkbox]:checked:before {
  font-family: "lil-gui";
  content: "✓";
  font-size: var(--checkbox-size);
  line-height: var(--checkbox-size);
}
@media (hover: hover) {
  .lil-gui input[type=checkbox]:focus {
    box-shadow: inset 0 0 0 1px var(--focus-color);
  }
}
.lil-gui button {
  outline: none;
  cursor: pointer;
  font-family: var(--font-family);
  font-size: var(--font-size);
  color: var(--text-color);
  width: 100%;
  border: none;
}
.lil-gui .lil-controller button {
  height: var(--widget-height);
  text-transform: none;
  background: var(--widget-color);
  border-radius: var(--widget-border-radius);
}
@media (hover: hover) {
  .lil-gui .lil-controller button:hover {
    background: var(--hover-color);
  }
  .lil-gui .lil-controller button:focus {
    box-shadow: inset 0 0 0 1px var(--focus-color);
  }
}
.lil-gui .lil-controller button:active {
  background: var(--focus-color);
}

@font-face {
  font-family: "lil-gui";
  src: url("data:application/font-woff2;charset=utf-8;base64,d09GMgABAAAAAALkAAsAAAAABtQAAAKVAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHFQGYACDMgqBBIEbATYCJAMUCwwABCAFhAoHgQQbHAbIDiUFEYVARAAAYQTVWNmz9MxhEgodq49wYRUFKE8GWNiUBxI2LBRaVnc51U83Gmhs0Q7JXWMiz5eteLwrKwuxHO8VFxUX9UpZBs6pa5ABRwHA+t3UxUnH20EvVknRerzQgX6xC/GH6ZUvTcAjAv122dF28OTqCXrPuyaDER30YBA1xnkVutDDo4oCi71Ca7rrV9xS8dZHbPHefsuwIyCpmT7j+MnjAH5X3984UZoFFuJ0yiZ4XEJFxjagEBeqs+e1iyK8Xf/nOuwF+vVK0ur765+vf7txotUi0m3N0m/84RGSrBCNrh8Ee5GjODjF4gnWP+dJrH/Lk9k4oT6d+gr6g/wssA2j64JJGP6cmx554vUZnpZfn6ZfX2bMwPPrlANsB86/DiHjhl0OP+c87+gaJo/gY084s3HoYL/ZkWHTRfBXvvoHnnkHvngKun4KBE/ede7tvq3/vQOxDXB1/fdNz6XbPdcr0Vhpojj9dG+owuSKFsslCi1tgEjirjXdwMiov2EioadxmqTHUCIwo8NgQaeIasAi0fTYSPTbSmwbMOFduyh9wvBrESGY0MtgRjtgQR8Q1bRPohn2UoCRZf9wyYANMXFeJTysqAe0I4mrherOekFdKMrYvJjLvOIUM9SuwYB5DVZUwwVjJJOaUnZCmcEkIZZrKqNvRGRMvmFZsmhP4VMKCSXBhSqUBxgMS7h0cZvEd71AWkEhGWaeMFcNnpqyJkyXgYL7PQ1MoSq0wDAkRtJIijkZSmqYTiSImfLiSWXIZwhRh3Rug2X0kk1Dgj+Iu43u5p98ghopcpSo0Uyc8SnjlYX59WUeaMoDqmVD2TOWD9a4pCRAzf2ECgwGcrHjPOWY9bNxq/OL3I/QjwEAAAA=") format("woff2");
}`;function Ve(f){const i=document.createElement("style");i.innerHTML=f;const v=document.querySelector("head link[rel=stylesheet], head style");v?document.head.insertBefore(i,v):document.head.appendChild(i)}let de=!1;class ne{constructor({parent:i,autoPlace:v=i===void 0,container:x,width:S,title:U="Controls",closeFolders:E=!1,injectStyles:I=!0,touchStyles:L=!0}={}){if(this.parent=i,this.root=i?i.root:this,this.children=[],this.controllers=[],this.folders=[],this._closed=!1,this._hidden=!1,this.domElement=document.createElement("div"),this.domElement.classList.add("lil-gui"),this.$title=document.createElement("button"),this.$title.classList.add("lil-title"),this.$title.setAttribute("aria-expanded",!0),this.$title.addEventListener("click",()=>this.openAnimated(this._closed)),this.$title.addEventListener("touchstart",()=>{},{passive:!0}),this.$children=document.createElement("div"),this.$children.classList.add("lil-children"),this.domElement.appendChild(this.$title),this.domElement.appendChild(this.$children),this.title(U),this.parent){this.parent.children.push(this),this.parent.folders.push(this),this.parent.$children.appendChild(this.domElement);return}this.domElement.classList.add("lil-root"),L&&this.domElement.classList.add("lil-allow-touch-styles"),!de&&I&&(Ve(Fe),de=!0),x?x.appendChild(this.domElement):v&&(this.domElement.classList.add("lil-auto-place","autoPlace"),document.body.appendChild(this.domElement)),S&&this.domElement.style.setProperty("--width",S+"px"),this._closeFolders=E}add(i,v,x,S,U){if(Object(x)===x)return new $e(this,i,v,x);const E=i[v];switch(typeof E){case"number":return new Ie(this,i,v,x,S,U);case"boolean":return new Ue(this,i,v);case"string":return new Oe(this,i,v);case"function":return new Qt(this,i,v)}console.error(`gui.add failed
	property:`,v,`
	object:`,i,`
	value:`,E)}addColor(i,v,x=1){return new Be(this,i,v,x)}addFolder(i){const v=new ne({parent:this,title:i});return this.root._closeFolders&&v.close(),v}load(i,v=!0){return i.controllers&&this.controllers.forEach(x=>{x instanceof Qt||x._name in i.controllers&&x.load(i.controllers[x._name])}),v&&i.folders&&this.folders.forEach(x=>{x._title in i.folders&&x.load(i.folders[x._title])}),this}save(i=!0){const v={controllers:{},folders:{}};return this.controllers.forEach(x=>{if(!(x instanceof Qt)){if(x._name in v.controllers)throw new Error(`Cannot save GUI with duplicate property "${x._name}"`);v.controllers[x._name]=x.save()}}),i&&this.folders.forEach(x=>{if(x._title in v.folders)throw new Error(`Cannot save GUI with duplicate folder "${x._title}"`);v.folders[x._title]=x.save()}),v}open(i=!0){return this._setClosed(!i),this.$title.setAttribute("aria-expanded",!this._closed),this.domElement.classList.toggle("lil-closed",this._closed),this}close(){return this.open(!1)}_setClosed(i){this._closed!==i&&(this._closed=i,this._callOnOpenClose(this))}show(i=!0){return this._hidden=!i,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}openAnimated(i=!0){return this._setClosed(!i),this.$title.setAttribute("aria-expanded",!this._closed),requestAnimationFrame(()=>{const v=this.$children.clientHeight;this.$children.style.height=v+"px",this.domElement.classList.add("lil-transition");const x=U=>{U.target===this.$children&&(this.$children.style.height="",this.domElement.classList.remove("lil-transition"),this.$children.removeEventListener("transitionend",x))};this.$children.addEventListener("transitionend",x);const S=i?this.$children.scrollHeight:0;this.domElement.classList.toggle("lil-closed",!i),requestAnimationFrame(()=>{this.$children.style.height=S+"px"})}),this}title(i){return this._title=i,this.$title.textContent=i,this}reset(i=!0){return(i?this.controllersRecursive():this.controllers).forEach(x=>x.reset()),this}onChange(i){return this._onChange=i,this}_callOnChange(i){this.parent&&this.parent._callOnChange(i),this._onChange!==void 0&&this._onChange.call(this,{object:i.object,property:i.property,value:i.getValue(),controller:i})}onFinishChange(i){return this._onFinishChange=i,this}_callOnFinishChange(i){this.parent&&this.parent._callOnFinishChange(i),this._onFinishChange!==void 0&&this._onFinishChange.call(this,{object:i.object,property:i.property,value:i.getValue(),controller:i})}onOpenClose(i){return this._onOpenClose=i,this}_callOnOpenClose(i){this.parent&&this.parent._callOnOpenClose(i),this._onOpenClose!==void 0&&this._onOpenClose.call(this,i)}destroy(){this.parent&&(this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.folders.splice(this.parent.folders.indexOf(this),1)),this.domElement.parentElement&&this.domElement.parentElement.removeChild(this.domElement),Array.from(this.children).forEach(i=>i.destroy())}controllersRecursive(){let i=Array.from(this.controllers);return this.folders.forEach(v=>{i=i.concat(v.controllersRecursive())}),i}foldersRecursive(){let i=Array.from(this.folders);return this.folders.forEach(v=>{i=i.concat(v.foldersRecursive())}),i}}var Ce=`struct CommonUniforms {
  viewProjectionMatrix : mat4x4f,
  eyePosition : vec3f,
}

struct LightUniforms {
   direction : vec3f,
}

struct SphereUniforms {
  center : vec3f,
  radius : f32,
}

struct ShadowUniforms {
    rim : f32,      
    sphere : f32,   
    ao : f32,       
}

struct WaterUniforms {
    density : f32,
}

struct Uniforms {
  modelViewProjectionMatrix : mat4x4f,
  eyePosition : vec3f,
}
fn intersectCube(origin: vec3f, ray: vec3f, cubeMin: vec3f, cubeMax: vec3f) -> vec2f {
  let tMin = (cubeMin - origin) / ray;
  let tMax = (cubeMax - origin) / ray;
  let t1 = min(tMin, tMax);
  let t2 = max(tMin, tMax);
  let tNear = max(max(t1.x, t1.y), t1.z);
  let tFar = min(min(t2.x, t2.y), t2.z);
  return vec2f(tNear, tFar);
}

@binding(0) @group(0) var<uniform> uniforms : Uniforms;
@binding(1) @group(0) var tileSampler : sampler;
@binding(2) @group(0) var tileTexture : texture_2d<f32>;
@binding(3) @group(0) var<uniform> light : LightUniforms;
@binding(4) @group(0) var<uniform> sphere : SphereUniforms;
@binding(5) @group(0) var waterSampler : sampler;
@binding(6) @group(0) var waterTexture : texture_2d<f32>;
@binding(7) @group(0) var causticTexture : texture_2d<f32>;
@binding(8) @group(0) var<uniform> shadows : ShadowUniforms;

struct VertexOutput {
  @builtin(position) position : vec4f,
  @location(0) localPos : vec3f,
}

@vertex
fn vs_main(@location(0) position : vec3f) -> VertexOutput {
  var output : VertexOutput;

  
  
  var transformedPos = position;
  transformedPos.y = ((1.0 - position.y) * (7.0 / 12.0) - 1.0);

  output.position = uniforms.modelViewProjectionMatrix * vec4f(transformedPos, 1.0);
  output.localPos = transformedPos;
  return output;
}`,Ge=`struct CommonUniforms {
  viewProjectionMatrix : mat4x4f,
  eyePosition : vec3f,
}

struct LightUniforms {
   direction : vec3f,
}

struct SphereUniforms {
  center : vec3f,
  radius : f32,
}

struct ShadowUniforms {
    rim : f32,      
    sphere : f32,   
    ao : f32,       
}

struct WaterUniforms {
    density : f32,
}

struct Uniforms {
  modelViewProjectionMatrix : mat4x4f,
  eyePosition : vec3f,
}
fn intersectCube(origin: vec3f, ray: vec3f, cubeMin: vec3f, cubeMax: vec3f) -> vec2f {
  let tMin = (cubeMin - origin) / ray;
  let tMax = (cubeMax - origin) / ray;
  let t1 = min(tMin, tMax);
  let t2 = max(tMin, tMax);
  let tNear = max(max(t1.x, t1.y), t1.z);
  let tFar = min(min(t2.x, t2.y), t2.z);
  return vec2f(tNear, tFar);
}

@binding(0) @group(0) var<uniform> uniforms : Uniforms;
@binding(1) @group(0) var tileSampler : sampler;
@binding(2) @group(0) var tileTexture : texture_2d<f32>;
@binding(3) @group(0) var<uniform> light : LightUniforms;
@binding(4) @group(0) var<uniform> sphere : SphereUniforms;
@binding(5) @group(0) var waterSampler : sampler;
@binding(6) @group(0) var waterTexture : texture_2d<f32>;
@binding(7) @group(0) var causticTexture : texture_2d<f32>;
@binding(8) @group(0) var<uniform> shadows : ShadowUniforms;

@fragment
fn fs_main(@location(0) localPos : vec3f) -> @location(0) vec4f {
  var wallColor : vec3f;
  let point = localPos;

  
  
  if (abs(point.x) > 0.999) {
    
    wallColor = textureSampleLevel(tileTexture, tileSampler, point.yz * 0.5 + vec2f(1.0, 0.5), 0.0).rgb;
  } else if (abs(point.z) > 0.999) {
    
    wallColor = textureSampleLevel(tileTexture, tileSampler, point.yx * 0.5 + vec2f(1.0, 0.5), 0.0).rgb;
  } else {
    
    wallColor = textureSampleLevel(tileTexture, tileSampler, point.xz * 0.5 + 0.5, 0.0).rgb;
  }

  
  let IOR_AIR = 1.0;
  let IOR_WATER = 1.333;
  let poolHeight = 1.0;

  
  var normal = vec3f(0.0, 1.0, 0.0);
  if (abs(point.x) > 0.999) { normal = vec3f(-point.x, 0.0, 0.0); }
  else if (abs(point.z) > 0.999) { normal = vec3f(0.0, 0.0, -point.z); }

    
    var scale = 0.5;
    scale /= length(point);
    scale *= mix(1.0, 1.0 - 0.9 / pow(length(point - sphere.center) / sphere.radius, 4.0), shadows.sphere);

    

  
  let refractedLight = -refract(-light.direction, vec3f(0.0, 1.0, 0.0), IOR_AIR / IOR_WATER);

  
  let diffuse = max(0.0, dot(refractedLight, normal));

  
  let waterInfo = textureSampleLevel(waterTexture, waterSampler, point.xz * 0.5 + 0.5, 0.0);

  if (point.y < waterInfo.r) {
     
     
     let causticUV = 0.75 * (point.xz - point.y * refractedLight.xz / refractedLight.y) * 0.5 + 0.5;
     let caustic = textureSampleLevel(causticTexture, tileSampler, causticUV, 0.0);

     var intensity = caustic.r;       
     var sphereShadow = caustic.g;    

     
     if (shadows.rim < 0.5 && intensity < 0.001) {
         intensity = 0.2;
         sphereShadow = 1.0;
     }

     scale += diffuse * intensity * 2.0 * sphereShadow;
  } else {
     
     let t = intersectCube(point, refractedLight, vec3f(-1.0, -poolHeight, -1.0), vec3f(1.0, 2.0, 1.0));
     let shadowFactor = 1.0 / (1.0 + exp(-200.0 / (1.0 + 10.0 * (t.y - t.x)) * (point.y + refractedLight.y * t.y - 2.0 / 12.0)));
     scale += diffuse * mix(1.0, shadowFactor, shadows.rim) * 0.5;
  }

  var finalColor = wallColor * scale;

  
  if (point.y < waterInfo.r) {
     let underwaterColor = vec3f(0.4, 0.9, 1.0);
     finalColor *= underwaterColor * 1.2;
  }

  return vec4f(finalColor, 1.0);
}`;class ke{device;format;uniformBuffer;tileTexture;tileSampler;lightUniformBuffer;sphereUniformBuffer;shadowUniformBuffer;positionBuffer;indexBuffer;vertexCount;pipeline;constructor(i,v,x,S,U,E,I,L){this.device=i,this.format=v,this.uniformBuffer=x,this.tileTexture=S,this.tileSampler=U,this.lightUniformBuffer=E,this.sphereUniformBuffer=I,this.shadowUniformBuffer=L,this.createGeometry(),this.createPipeline()}createGeometry(){function i(E){return[(E&1)*2-1,(E&2)-1,(E&4)/2-1]}const v=[[0,4,2,6,-1,0,0],[1,3,5,7,1,0,0],[2,6,3,7,0,1,0],[0,2,1,3,0,0,-1],[4,5,6,7,0,0,1]],x=[],S=[];let U=0;for(const E of v){const I=U;for(let L=0;L<4;L++){const q=E[L],G=i(q);x.push(...G),U++}S.push(I+0,I+1,I+2),S.push(I+2,I+1,I+3)}this.vertexCount=S.length,this.positionBuffer=this.device.createBuffer({label:"Pool Vertex Buffer",size:x.length*4,usage:GPUBufferUsage.VERTEX,mappedAtCreation:!0}),new Float32Array(this.positionBuffer.getMappedRange()).set(x),this.positionBuffer.unmap(),this.indexBuffer=this.device.createBuffer({label:"Pool Index Buffer",size:S.length*4,usage:GPUBufferUsage.INDEX,mappedAtCreation:!0}),new Uint32Array(this.indexBuffer.getMappedRange()).set(S),this.indexBuffer.unmap()}createPipeline(){const i=this.device.createShaderModule({label:"Pool Vertex Shader",code:Ce}),v=this.device.createShaderModule({label:"Pool Fragment Shader",code:Ge});this.pipeline=this.device.createRenderPipeline({label:"Pool Pipeline",layout:"auto",vertex:{module:i,entryPoint:"vs_main",buffers:[{arrayStride:12,attributes:[{shaderLocation:0,offset:0,format:"float32x3"}]}]},fragment:{module:v,entryPoint:"fs_main",targets:[{format:this.format}]},primitive:{topology:"triangle-list",cullMode:"back"},depthStencil:{depthWriteEnabled:!0,depthCompare:"less",format:"depth24plus"}})}render(i,v,x,S){const U=this.device.createBindGroup({layout:this.pipeline.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:this.uniformBuffer}},{binding:1,resource:this.tileSampler},{binding:2,resource:this.tileTexture.createView()},{binding:3,resource:{buffer:this.lightUniformBuffer}},{binding:4,resource:{buffer:this.sphereUniformBuffer}},{binding:5,resource:x},{binding:6,resource:v.createView()},{binding:7,resource:S.createView()},{binding:8,resource:{buffer:this.shadowUniformBuffer}}]});i.setPipeline(this.pipeline),i.setBindGroup(0,U),i.setVertexBuffer(0,this.positionBuffer),i.setIndexBuffer(this.indexBuffer,"uint32"),i.drawIndexed(this.vertexCount)}}var qe=`struct CommonUniforms {
  viewProjectionMatrix : mat4x4f,
  eyePosition : vec3f,
}

struct LightUniforms {
   direction : vec3f,
}

struct SphereUniforms {
  center : vec3f,
  radius : f32,
}

struct ShadowUniforms {
    rim : f32,      
    sphere : f32,   
    ao : f32,       
}

struct WaterUniforms {
    density : f32,
}

struct Uniforms {
  modelViewProjectionMatrix : mat4x4f,
  eyePosition : vec3f,
}

@binding(0) @group(0) var<uniform> commonUniforms : CommonUniforms;
@binding(1) @group(0) var<uniform> sphereUniforms : SphereUniforms;
@binding(2) @group(0) var<uniform> light : LightUniforms;
@binding(3) @group(0) var waterSampler : sampler;
@binding(4) @group(0) var waterTexture : texture_2d<f32>;
@binding(5) @group(0) var causticTexture : texture_2d<f32>;

struct VertexOutput {
  @builtin(position) position : vec4f,
  @location(0) localPos : vec3f,  
  @location(1) worldPos : vec3f,  
}

@vertex
fn vs_main(@location(0) position : vec3f) -> VertexOutput {
  var output : VertexOutput;

  
  let worldPos = sphereUniforms.center + position * sphereUniforms.radius;
  output.position = commonUniforms.viewProjectionMatrix * vec4f(worldPos, 1.0);
  output.localPos = position;
  output.worldPos = worldPos;
  return output;
}`,Ne=`struct CommonUniforms {
  viewProjectionMatrix : mat4x4f,
  eyePosition : vec3f,
}

struct LightUniforms {
   direction : vec3f,
}

struct SphereUniforms {
  center : vec3f,
  radius : f32,
}

struct ShadowUniforms {
    rim : f32,      
    sphere : f32,   
    ao : f32,       
}

struct WaterUniforms {
    density : f32,
}

struct Uniforms {
  modelViewProjectionMatrix : mat4x4f,
  eyePosition : vec3f,
}

@binding(0) @group(0) var<uniform> commonUniforms : CommonUniforms;
@binding(1) @group(0) var<uniform> sphereUniforms : SphereUniforms;
@binding(2) @group(0) var<uniform> light : LightUniforms;
@binding(3) @group(0) var waterSampler : sampler;
@binding(4) @group(0) var waterTexture : texture_2d<f32>;
@binding(5) @group(0) var causticTexture : texture_2d<f32>;

@fragment
fn fs_main(@location(0) localPos : vec3f, @location(1) worldPos : vec3f) -> @location(0) vec4f {
  
  let IOR_AIR = 1.0;
  let IOR_WATER = 1.333;

  
  var color = vec3f(0.5);

  let sphereRadius = sphereUniforms.radius;
  let point = worldPos;

  
  
  let dist_x = (1.0 + sphereRadius - abs(point.x)) / sphereRadius;
  let dist_z = (1.0 + sphereRadius - abs(point.z)) / sphereRadius;
  let dist_y = (point.y + 1.0 + sphereRadius) / sphereRadius;

  
  color *= 1.0 - 0.9 / pow(max(0.1, dist_x), 3.0);
  color *= 1.0 - 0.9 / pow(max(0.1, dist_z), 3.0);
  color *= 1.0 - 0.9 / pow(max(0.1, dist_y), 3.0);

  
  let refractedLight = refract(-light.direction, vec3f(0.0, 1.0, 0.0), IOR_AIR / IOR_WATER);
  let sphereNormal = normalize(localPos);

  
  var diffuse = max(0.0, dot(-refractedLight, sphereNormal)) * 0.5;

  
  let waterInfo = textureSampleLevel(waterTexture, waterSampler, point.xz * 0.5 + 0.5, 0.0);

  
  if (point.y < waterInfo.r) {
     
     let causticUV = 0.75 * (point.xz - point.y * refractedLight.xz / refractedLight.y) * 0.5 + 0.5;
     let caustic = textureSampleLevel(causticTexture, waterSampler, causticUV, 0.0);
     diffuse *= caustic.r * 4.0; 
  }

  color += diffuse;

  
  if (point.y < waterInfo.r) {
     let underwaterColor = vec3f(0.4, 0.9, 1.0);
     color *= underwaterColor * 1.2;
  }

  return vec4f(color, 1.0);
}`;class je{device;format;commonUniformBuffer;sphereUniformBuffer;lightUniformBuffer;positionBuffer;indexBuffer;vertexCount;pipeline;constructor(i,v,x,S,U){this.device=i,this.format=v,this.commonUniformBuffer=x,this.sphereUniformBuffer=U,this.lightUniformBuffer=S,this.createGeometry(),this.createPipeline()}update(i,v){const x=new Float32Array([...i,v]);this.device.queue.writeBuffer(this.sphereUniformBuffer,0,x)}createGeometry(){class v{unique;map;constructor(){this.unique=[],this.map=new Map}add(q){const G=q.join(",");return this.map.has(G)||(this.map.set(G,this.unique.length),this.unique.push(q)),this.map.get(G)}}function x(L){return[(L&1)*2-1,(L&2)-1,(L&4)/2-1]}function S(L){return L+(L-L*L)/2}const U=new v,E=[];for(let L=0;L<8;L++){const q=x(L),G=q[0]*q[1]*q[2]>0,F=[];for(let j=0;j<=10;j++)for(let K=0;j+K<=10;K++){const tt=j/10,Q=K/10,lt=(10-j-K)/10,V=[S(tt),S(Q),S(lt)],O=Math.sqrt(V[0]*V[0]+V[1]*V[1]+V[2]*V[2]),Y=[V[0]/O*q[0],V[1]/O*q[1],V[2]/O*q[2]];F.push(U.add(Y))}for(let j=0;j<=10;j++)if(j>0)for(let K=0;j+K<=10;K++){const tt=(j-1)*11+(j-1-(j-1)*(j-1))/2+K,Q=j*11+(j-j*j)/2+K;G?E.push(F[tt],F[Q],F[tt+1]):E.push(F[tt],F[tt+1],F[Q]),j+K<10&&(G?E.push(F[Q],F[Q+1],F[tt+1]):E.push(F[Q],F[tt+1],F[Q+1]))}}this.vertexCount=E.length;const I=[];for(const L of U.unique)I.push(...L);this.positionBuffer=this.device.createBuffer({label:"Sphere Vertex Buffer",size:I.length*4,usage:GPUBufferUsage.VERTEX,mappedAtCreation:!0}),new Float32Array(this.positionBuffer.getMappedRange()).set(I),this.positionBuffer.unmap(),this.indexBuffer=this.device.createBuffer({label:"Sphere Index Buffer",size:E.length*4,usage:GPUBufferUsage.INDEX,mappedAtCreation:!0}),new Uint32Array(this.indexBuffer.getMappedRange()).set(E),this.indexBuffer.unmap()}createPipeline(){const i=this.device.createShaderModule({label:"Sphere Vertex Shader",code:qe}),v=this.device.createShaderModule({label:"Sphere Fragment Shader",code:Ne});this.pipeline=this.device.createRenderPipeline({label:"Sphere Pipeline",layout:"auto",vertex:{module:i,entryPoint:"vs_main",buffers:[{arrayStride:12,attributes:[{shaderLocation:0,offset:0,format:"float32x3"}]}]},fragment:{module:v,entryPoint:"fs_main",targets:[{format:this.format}]},primitive:{topology:"triangle-list",cullMode:"back"},depthStencil:{depthWriteEnabled:!0,depthCompare:"less",format:"depth24plus"}})}render(i,v,x,S){const U=this.device.createBindGroup({layout:this.pipeline.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:this.commonUniformBuffer}},{binding:1,resource:{buffer:this.sphereUniformBuffer}},{binding:2,resource:{buffer:this.lightUniformBuffer}},{binding:3,resource:x},{binding:4,resource:v.createView()},{binding:5,resource:S.createView()}]});i.setPipeline(this.pipeline),i.setBindGroup(0,U),i.setVertexBuffer(0,this.positionBuffer),i.setIndexBuffer(this.indexBuffer,"uint32"),i.drawIndexed(this.vertexCount)}}const Yt=`struct VertexOutput {
  @builtin(position) position : vec4f,
  @location(0) uv : vec2f,
}

@vertex
fn vs_main(@builtin(vertex_index) vertexIndex : u32) -> VertexOutput {
  var pos = array<vec2f, 6>(
    vec2f(-1.0, -1.0), vec2f(1.0, -1.0), vec2f(-1.0, 1.0),
    vec2f(-1.0, 1.0), vec2f(1.0, -1.0), vec2f(1.0, 1.0)
  );
  var output : VertexOutput;
  output.position = vec4f(pos[vertexIndex], 0.0, 1.0);
  output.uv = vec2f((pos[vertexIndex].x + 1.0) * 0.5, (1.0 - pos[vertexIndex].y) * 0.5);
  return output;
}
`,He=`@group(0) @binding(0) var waterTexture : texture_2d<f32>;
@group(0) @binding(1) var waterSampler : sampler;

struct DropUniforms {
  center : vec2f,    // Drop position in [-1, 1] range
  radius : f32,      // Drop radius
  strength : f32,    // Drop intensity (positive or negative)
}
@group(0) @binding(2) var<uniform> u : DropUniforms;

@fragment
fn fs_main(@location(0) uv : vec2f) -> @location(0) vec4f {
  var info = textureSample(waterTexture, waterSampler, uv);

  // Calculate distance from drop center with cosine falloff
  let drop = max(0.0, 1.0 - length(u.center * 0.5 + 0.5 - uv) / u.radius);
  let dropVal = 0.5 - cos(drop * 3.14159265) * 0.5;

  // Add drop height to water surface
  info.r += dropVal * u.strength;

  return info;
}
`,We=`@group(0) @binding(0) var waterTexture : texture_2d<f32>;
@group(0) @binding(1) var waterSampler : sampler;

struct UpdateUniforms {
  delta : vec2f,  // Texel size (1/width, 1/height)
}
@group(0) @binding(2) var<uniform> u : UpdateUniforms;

@fragment
fn fs_main(@location(0) uv : vec2f) -> @location(0) vec4f {
  var info = textureSample(waterTexture, waterSampler, uv);

  // Sample neighboring heights
  let dx = vec2f(u.delta.x, 0.0);
  let dy = vec2f(0.0, u.delta.y);

  let average = (
    textureSample(waterTexture, waterSampler, uv - dx).r +
    textureSample(waterTexture, waterSampler, uv - dy).r +
    textureSample(waterTexture, waterSampler, uv + dx).r +
    textureSample(waterTexture, waterSampler, uv + dy).r
  ) * 0.25;

  // Update velocity based on difference from average
  info.g += (average - info.r) * 2.0;
  // Apply damping to prevent perpetual waves
  info.g *= 0.995;
  // Update height based on velocity
  info.r += info.g;

  return info;
}
`,Xe=`@group(0) @binding(0) var waterTexture : texture_2d<f32>;
@group(0) @binding(1) var waterSampler : sampler;

struct NormalUniforms {
  delta : vec2f,  // Texel size (1/width, 1/height)
}
@group(0) @binding(2) var<uniform> u : NormalUniforms;

@fragment
fn fs_main(@location(0) uv : vec2f) -> @location(0) vec4f {
  var info = textureSample(waterTexture, waterSampler, uv);

  // Sample neighboring heights to compute gradient
  let val_dx = textureSample(waterTexture, waterSampler, vec2f(uv.x + u.delta.x, uv.y)).r;
  let val_dy = textureSample(waterTexture, waterSampler, vec2f(uv.x, uv.y + u.delta.y)).r;

  // Create tangent vectors from height differences
  let dx = vec3f(u.delta.x, val_dx - info.r, 0.0);
  let dy = vec3f(0.0, val_dy - info.r, u.delta.y);

  // Normal is cross product of tangent vectors
  let normal = normalize(cross(dy, dx));
  info.b = normal.x;  // Store X component
  info.a = normal.z;  // Store Z component

  return info;
}
`,Ye=`@group(0) @binding(0) var waterTexture : texture_2d<f32>;
@group(0) @binding(1) var waterSampler : sampler;

struct SphereUniforms {
  oldCenter : vec3f,  // Previous sphere position
  radius : f32,       // Sphere radius
  newCenter : vec3f,  // Current sphere position
  padding : f32,      // Alignment padding
}
@group(0) @binding(2) var<uniform> u : SphereUniforms;

// Calculates the volume of sphere intersecting the water at a UV position
fn volumeInSphere(center : vec3f, uv : vec2f, radius : f32) -> f32 {
  let p = vec3f(uv.x * 2.0 - 1.0, 0.0, uv.y * 2.0 - 1.0);
  let dist = length(p - center);
  let t = dist / radius;

  // Gaussian-like falloff for smooth interaction
  let dy = exp(-pow(t * 1.5, 6.0));
  let ymin = min(0.0, center.y - dy);
  let ymax = min(max(0.0, center.y + dy), ymin + 2.0 * dy);
  return (ymax - ymin) * 0.1;
}

@fragment
fn fs_main(@location(0) uv : vec2f) -> @location(0) vec4f {
  var info = textureSample(waterTexture, waterSampler, uv);

  // Water rises where sphere was, falls where sphere is now
  info.r += volumeInSphere(u.oldCenter, uv, u.radius);
  info.r -= volumeInSphere(u.newCenter, uv, u.radius);

  return info;
}
`;var pe=`struct CommonUniforms {
  viewProjectionMatrix : mat4x4f,
  eyePosition : vec3f,
}

struct LightUniforms {
   direction : vec3f,
}

struct SphereUniforms {
  center : vec3f,
  radius : f32,
}

struct ShadowUniforms {
    rim : f32,      
    sphere : f32,   
    ao : f32,       
}

struct WaterUniforms {
    density : f32,
}

struct Uniforms {
  modelViewProjectionMatrix : mat4x4f,
  eyePosition : vec3f,
}
fn intersectCube(origin: vec3f, ray: vec3f, cubeMin: vec3f, cubeMax: vec3f) -> vec2f {
  let tMin = (cubeMin - origin) / ray;
  let tMax = (cubeMax - origin) / ray;
  let t1 = min(tMin, tMax);
  let t2 = max(tMin, tMax);
  let tNear = max(max(t1.x, t1.y), t1.z);
  let tFar = min(min(t2.x, t2.y), t2.z);
  return vec2f(tNear, tFar);
}

@binding(0) @group(0) var<uniform> commonUniforms : CommonUniforms;
@binding(1) @group(0) var<uniform> light : LightUniforms;
@binding(2) @group(0) var<uniform> sphere : SphereUniforms;
@binding(10) @group(0) var<uniform> shadows : ShadowUniforms;

@binding(3) @group(0) var tileSampler : sampler;
@binding(4) @group(0) var tileTexture : texture_2d<f32>;
@binding(5) @group(0) var waterSampler : sampler;
@binding(6) @group(0) var waterTexture : texture_2d<f32>;
@binding(7) @group(0) var skySampler : sampler;
@binding(8) @group(0) var skyTexture : texture_cube<f32>;
@binding(9) @group(0) var causticTexture : texture_2d<f32>;

struct VertexOutput {
  @builtin(position) position : vec4f,
  @location(0) worldPos : vec3f,
}

@vertex
fn vs_main(@location(0) position : vec3f) -> VertexOutput {
  var output : VertexOutput;

  
  let uv = position.xy * 0.5 + 0.5;
  let info = textureSampleLevel(waterTexture, waterSampler, uv, 0.0);

  
  var pos = position.xzy;
  pos.y = info.r;

  output.worldPos = pos;
  output.position = commonUniforms.viewProjectionMatrix * vec4f(pos, 1.0);

  return output;
}`,Ze=`struct CommonUniforms {
  viewProjectionMatrix : mat4x4f,
  eyePosition : vec3f,
}

struct LightUniforms {
   direction : vec3f,
}

struct SphereUniforms {
  center : vec3f,
  radius : f32,
}

struct ShadowUniforms {
    rim : f32,      
    sphere : f32,   
    ao : f32,       
}

struct WaterUniforms {
    density : f32,
}

struct Uniforms {
  modelViewProjectionMatrix : mat4x4f,
  eyePosition : vec3f,
}
fn intersectCube(origin: vec3f, ray: vec3f, cubeMin: vec3f, cubeMax: vec3f) -> vec2f {
  let tMin = (cubeMin - origin) / ray;
  let tMax = (cubeMax - origin) / ray;
  let t1 = min(tMin, tMax);
  let t2 = max(tMin, tMax);
  let tNear = max(max(t1.x, t1.y), t1.z);
  let tFar = min(min(t2.x, t2.y), t2.z);
  return vec2f(tNear, tFar);
}

@binding(0) @group(0) var<uniform> commonUniforms : CommonUniforms;
@binding(1) @group(0) var<uniform> light : LightUniforms;
@binding(2) @group(0) var<uniform> sphere : SphereUniforms;
@binding(10) @group(0) var<uniform> shadows : ShadowUniforms;
@binding(3) @group(0) var tileSampler : sampler;
@binding(4) @group(0) var tileTexture : texture_2d<f32>;
@binding(5) @group(0) var waterSampler : sampler;
@binding(6) @group(0) var waterTexture : texture_2d<f32>;
@binding(7) @group(0) var skySampler : sampler;
@binding(8) @group(0) var skyTexture : texture_cube<f32>;
@binding(9) @group(0) var causticTexture : texture_2d<f32>;
@binding(11) @group(0) var<uniform> waterUniforms : WaterUniforms;

const IOR_AIR : f32 = 1.0;
const IOR_WATER : f32 = 1.333;
const ABOVEwaterColor : vec3f = vec3f(0.25, 1.0, 1.25);
const UNDERwaterColor : vec3f = vec3f(0.4, 0.9, 1.0);

fn intersectSphere(origin: vec3f, ray: vec3f, sphereCenter: vec3f, sphereRadius: f32) -> f32 {
    let toSphere = origin - sphereCenter;
    let a = dot(ray, ray);
    let b = 2.0 * dot(toSphere, ray);
    let c = dot(toSphere, toSphere) - sphereRadius * sphereRadius;
    let discriminant = b*b - 4.0*a*c;
    if (discriminant > 0.0) {
      let t = (-b - sqrt(discriminant)) / (2.0 * a);
      if (t > 0.0) { return t; }
    }
    return 1.0e6; 
}

fn getSphereColor(point: vec3f, IOR_AIR: f32, IOR_WATER: f32) -> vec3f {
    var color = vec3f(0.5);
    let sphereRadius = sphere.radius;

    
    color *= 1.0 - 0.9 / pow((1.0 + sphereRadius - abs(point.x)) / sphereRadius, 3.0);
    color *= 1.0 - 0.9 / pow((1.0 + sphereRadius - abs(point.z)) / sphereRadius, 3.0);
    color *= 1.0 - 0.9 / pow((point.y + 1.0 + sphereRadius) / sphereRadius, 3.0);

    
    let sphereNormal = (point - sphere.center) / sphereRadius;
    let refractedLight = refract(-light.direction, vec3f(0.0, 1.0, 0.0), IOR_AIR / IOR_WATER);
    var diffuse = max(0.0, dot(-refractedLight, sphereNormal)) * 0.5;

    let info = textureSampleLevel(waterTexture, waterSampler, point.xz * 0.5 + 0.5, 0.0);
    if (point.y < info.r) {
        let causticUV = 0.75 * (point.xz - point.y * refractedLight.xz / refractedLight.y) * 0.5 + 0.5;
        let caustic = textureSampleLevel(causticTexture, waterSampler, causticUV, 0.0);
        diffuse *= caustic.r * 4.0;
    }
    color += diffuse;
    return color;
}

fn getWallColor(point: vec3f, IOR_AIR: f32, IOR_WATER: f32, poolHeight: f32) -> vec3f {
    var wallColor : vec3f;
    var normal = vec3f(0.0, 1.0, 0.0);

    
    if (abs(point.x) > 0.999) {
        wallColor = textureSampleLevel(tileTexture, tileSampler, point.yz * 0.5 + vec2f(1.0, 0.5), 0.0).rgb;
        normal = vec3f(-point.x, 0.0, 0.0);
    } else if (abs(point.z) > 0.999) {
        wallColor = textureSampleLevel(tileTexture, tileSampler, point.yx * 0.5 + vec2f(1.0, 0.5), 0.0).rgb;
        normal = vec3f(0.0, 0.0, -point.z);
    } else {
        wallColor = textureSampleLevel(tileTexture, tileSampler, point.xz * 0.5 + 0.5, 0.0).rgb;
    }

    
    var scale = 0.5;
    scale /= length(point);
    scale *= mix(1.0, 1.0 - 0.9 / pow(length(point - sphere.center) / sphere.radius, 4.0), shadows.sphere);

    
    let refractedLight = -refract(-light.direction, vec3f(0.0, 1.0, 0.0), IOR_AIR / IOR_WATER);
    var diffuse = max(0.0, dot(refractedLight, normal));

    let info = textureSampleLevel(waterTexture, waterSampler, point.xz * 0.5 + 0.5, 0.0);
    if (point.y < info.r) {
        let causticUV = 0.75 * (point.xz - point.y * refractedLight.xz / refractedLight.y) * 0.5 + 0.5;
        let caustic = textureSampleLevel(causticTexture, waterSampler, causticUV, 0.0);
        scale += diffuse * caustic.r * 2.0 * caustic.g;
    } else {
        let t = intersectCube(point, refractedLight, vec3f(-1.0, -poolHeight, -1.0), vec3f(1.0, 2.0, 1.0));
        diffuse *= 1.0 / (1.0 + exp(-200.0 / (1.0 + 10.0 * (t.y - t.x)) * (point.y + refractedLight.y * t.y - 2.0 / 12.0)));
        scale += diffuse * 0.5;
    }

    return wallColor * scale;
}

fn getSurfaceRayColor(origin: vec3f, ray: vec3f, waterColor: vec3f) -> vec3f {
    var color : vec3f;
    let poolHeight = 1.0;

    
    var q = 1.0e6;
    if (shadows.sphere > 0.5) {
        q = intersectSphere(origin, ray, sphere.center, sphere.radius);
    }

    if (q < 1.0e6) {
        color = getSphereColor(origin + ray * q, IOR_AIR, IOR_WATER);
    } else if (ray.y < 0.0) {
        
        let t = intersectCube(origin, ray, vec3f(-1.0, -poolHeight, -1.0), vec3f(1.0, 2.0, 1.0));
        color = getWallColor(origin + ray * t.y, IOR_AIR, IOR_WATER, poolHeight);
    } else {
        
        let t = intersectCube(origin, ray, vec3f(-1.0, -poolHeight, -1.0), vec3f(1.0, 2.0, 1.0));
        let hit = origin + ray * t.y;
        if (hit.y < 2.0 / 12.0) {
            color = getWallColor(hit, IOR_AIR, IOR_WATER, poolHeight);
        } else {
            
            color = textureSampleLevel(skyTexture, skySampler, ray, 0.0).rgb;
            
            let sunDir = normalize(light.direction);
            let spec = pow(max(0.0, dot(sunDir, ray)), 5000.0);
            color += vec3f(spec) * vec3f(10.0, 8.0, 6.0);
        }
    }

    
    if (ray.y < 0.0) {
        color *= waterColor;
    }
    return color;
}

@fragment
fn fs_main(@location(0) worldPos : vec3f) -> @location(0) vec4f {
    
    var uv = worldPos.xz * 0.5 + 0.5;
    var info = textureSampleLevel(waterTexture, waterSampler, uv, 0.0);

    
    for (var i = 0; i < 5; i++) {
        uv += info.ba * 0.005;
        info = textureSampleLevel(waterTexture, waterSampler, uv, 0.0);
    }

    
    let ba = vec2f(info.b, info.a);
    var normal = vec3f(info.b, sqrt(max(0.0, 1.0 - dot(ba, ba))), info.a);

    
    let incomingRay = normalize(worldPos - commonUniforms.eyePosition);

    
    let reflectedRay = reflect(incomingRay, normal);
    let refractedRay = refract(incomingRay, normal, IOR_AIR / IOR_WATER);
    let fresnel = mix(0.25, 1.0, pow(1.0 - dot(normal, -incomingRay), 3.0));

    let reflectedColor = getSurfaceRayColor(worldPos, reflectedRay, ABOVEwaterColor);
    let refractedColor = getSurfaceRayColor(worldPos, refractedRay, ABOVEwaterColor);

    let finalColor = mix(refractedColor, reflectedColor, fresnel);

    return vec4f(finalColor, 1.0);
}`,Ke=`struct CommonUniforms {
  viewProjectionMatrix : mat4x4f,
  eyePosition : vec3f,
}

struct LightUniforms {
   direction : vec3f,
}

struct SphereUniforms {
  center : vec3f,
  radius : f32,
}

struct ShadowUniforms {
    rim : f32,      
    sphere : f32,   
    ao : f32,       
}

struct WaterUniforms {
    density : f32,
}

struct Uniforms {
  modelViewProjectionMatrix : mat4x4f,
  eyePosition : vec3f,
}
fn intersectCube(origin: vec3f, ray: vec3f, cubeMin: vec3f, cubeMax: vec3f) -> vec2f {
  let tMin = (cubeMin - origin) / ray;
  let tMax = (cubeMax - origin) / ray;
  let t1 = min(tMin, tMax);
  let t2 = max(tMin, tMax);
  let tNear = max(max(t1.x, t1.y), t1.z);
  let tFar = min(min(t2.x, t2.y), t2.z);
  return vec2f(tNear, tFar);
}

@binding(0) @group(0) var<uniform> commonUniforms : CommonUniforms;
@binding(1) @group(0) var<uniform> light : LightUniforms;
@binding(2) @group(0) var<uniform> sphere : SphereUniforms;
@binding(10) @group(0) var<uniform> shadows : ShadowUniforms;
@binding(3) @group(0) var tileSampler : sampler;
@binding(4) @group(0) var tileTexture : texture_2d<f32>;
@binding(5) @group(0) var waterSampler : sampler;
@binding(6) @group(0) var waterTexture : texture_2d<f32>;
@binding(7) @group(0) var skySampler : sampler;
@binding(8) @group(0) var skyTexture : texture_cube<f32>;
@binding(9) @group(0) var causticTexture : texture_2d<f32>;
@binding(11) @group(0) var<uniform> waterUniforms : WaterUniforms;

const IOR_AIR : f32 = 1.0;
const IOR_WATER : f32 = 1.333;
const ABOVEwaterColor : vec3f = vec3f(0.25, 1.0, 1.25);
const UNDERwaterColor : vec3f = vec3f(0.4, 0.9, 1.0);

fn intersectSphere(origin: vec3f, ray: vec3f, sphereCenter: vec3f, sphereRadius: f32) -> f32 {
    let toSphere = origin - sphereCenter;
    let a = dot(ray, ray);
    let b = 2.0 * dot(toSphere, ray);
    let c = dot(toSphere, toSphere) - sphereRadius * sphereRadius;
    let discriminant = b*b - 4.0*a*c;
    if (discriminant > 0.0) {
      let t = (-b - sqrt(discriminant)) / (2.0 * a);
      if (t > 0.0) { return t; }
    }
    return 1.0e6; 
}

fn getSphereColor(point: vec3f, IOR_AIR: f32, IOR_WATER: f32) -> vec3f {
    var color = vec3f(0.5);
    let sphereRadius = sphere.radius;

    
    color *= 1.0 - 0.9 / pow((1.0 + sphereRadius - abs(point.x)) / sphereRadius, 3.0);
    color *= 1.0 - 0.9 / pow((1.0 + sphereRadius - abs(point.z)) / sphereRadius, 3.0);
    color *= 1.0 - 0.9 / pow((point.y + 1.0 + sphereRadius) / sphereRadius, 3.0);

    
    let sphereNormal = (point - sphere.center) / sphereRadius;
    let refractedLight = refract(-light.direction, vec3f(0.0, 1.0, 0.0), IOR_AIR / IOR_WATER);
    var diffuse = max(0.0, dot(-refractedLight, sphereNormal)) * 0.5;

    let info = textureSampleLevel(waterTexture, waterSampler, point.xz * 0.5 + 0.5, 0.0);
    if (point.y < info.r) {
        let causticUV = 0.75 * (point.xz - point.y * refractedLight.xz / refractedLight.y) * 0.5 + 0.5;
        let caustic = textureSampleLevel(causticTexture, waterSampler, causticUV, 0.0);
        diffuse *= caustic.r * 4.0;
    }
    color += diffuse;
    return color;
}

fn getWallColor(point: vec3f, IOR_AIR: f32, IOR_WATER: f32, poolHeight: f32) -> vec3f {
    var wallColor : vec3f;
    var normal = vec3f(0.0, 1.0, 0.0);

    
    if (abs(point.x) > 0.999) {
        wallColor = textureSampleLevel(tileTexture, tileSampler, point.yz * 0.5 + vec2f(1.0, 0.5), 0.0).rgb;
        normal = vec3f(-point.x, 0.0, 0.0);
    } else if (abs(point.z) > 0.999) {
        wallColor = textureSampleLevel(tileTexture, tileSampler, point.yx * 0.5 + vec2f(1.0, 0.5), 0.0).rgb;
        normal = vec3f(0.0, 0.0, -point.z);
    } else {
        wallColor = textureSampleLevel(tileTexture, tileSampler, point.xz * 0.5 + 0.5, 0.0).rgb;
    }

    
    var scale = 0.5;
    scale /= length(point);
    scale *= mix(1.0, 1.0 - 0.9 / pow(length(point - sphere.center) / sphere.radius, 4.0), shadows.sphere);

    
    let refractedLight = -refract(-light.direction, vec3f(0.0, 1.0, 0.0), IOR_AIR / IOR_WATER);
    var diffuse = max(0.0, dot(refractedLight, normal));

    let info = textureSampleLevel(waterTexture, waterSampler, point.xz * 0.5 + 0.5, 0.0);
    if (point.y < info.r) {
        let causticUV = 0.75 * (point.xz - point.y * refractedLight.xz / refractedLight.y) * 0.5 + 0.5;
        let caustic = textureSampleLevel(causticTexture, waterSampler, causticUV, 0.0);
        scale += diffuse * caustic.r * 2.0 * caustic.g;
    } else {
        let t = intersectCube(point, refractedLight, vec3f(-1.0, -poolHeight, -1.0), vec3f(1.0, 2.0, 1.0));
        diffuse *= 1.0 / (1.0 + exp(-200.0 / (1.0 + 10.0 * (t.y - t.x)) * (point.y + refractedLight.y * t.y - 2.0 / 12.0)));
        scale += diffuse * 0.5;
    }

    return wallColor * scale;
}

fn getSurfaceRayColor(origin: vec3f, ray: vec3f, waterColor: vec3f) -> vec3f {
    var color : vec3f;
    let poolHeight = 1.0;

    
    var q = 1.0e6;
    if (shadows.sphere > 0.5) {
        q = intersectSphere(origin, ray, sphere.center, sphere.radius);
    }

    if (q < 1.0e6) {
        color = getSphereColor(origin + ray * q, IOR_AIR, IOR_WATER);
    } else if (ray.y < 0.0) {
        
        let t = intersectCube(origin, ray, vec3f(-1.0, -poolHeight, -1.0), vec3f(1.0, 2.0, 1.0));
        color = getWallColor(origin + ray * t.y, IOR_AIR, IOR_WATER, poolHeight);
    } else {
        
        let t = intersectCube(origin, ray, vec3f(-1.0, -poolHeight, -1.0), vec3f(1.0, 2.0, 1.0));
        let hit = origin + ray * t.y;
        if (hit.y < 2.0 / 12.0) {
            color = getWallColor(hit, IOR_AIR, IOR_WATER, poolHeight);
        } else {
            
            color = textureSampleLevel(skyTexture, skySampler, ray, 0.0).rgb;
            
            let sunDir = normalize(light.direction);
            let spec = pow(max(0.0, dot(sunDir, ray)), 5000.0);
            color += vec3f(spec) * vec3f(10.0, 8.0, 6.0);
        }
    }

    
    if (ray.y < 0.0) {
        color *= waterColor;
    }
    return color;
}

@fragment
fn fs_main(@location(0) worldPos : vec3f) -> @location(0) vec4f {
    
    var uv = worldPos.xz * 0.5 + 0.5;
    var info = textureSampleLevel(waterTexture, waterSampler, uv, 0.0);

    
    for (var i = 0; i < 5; i++) {
        uv += info.ba * 0.005;
        info = textureSampleLevel(waterTexture, waterSampler, uv, 0.0);
    }

    
    let ba = vec2f(info.b, info.a);
    var normal = vec3f(info.b, sqrt(max(0.0, 1.0 - dot(ba, ba))), info.a);

    
    let incomingRay = normalize(worldPos - commonUniforms.eyePosition);

    
    normal = -normal; 
    let reflectedRay = reflect(incomingRay, normal);
    let refractedRay = refract(incomingRay, normal, IOR_WATER / IOR_AIR);
    let fresnel = mix(0.5, 1.0, pow(1.0 - dot(normal, -incomingRay), 3.0));

    let reflectedColor = getSurfaceRayColor(worldPos, reflectedRay, UNDERwaterColor);
    let refractedColor = getSurfaceRayColor(worldPos, refractedRay, vec3f(1.0)) * vec3f(0.8, 1.0, 1.1);

    let finalColor = mix(reflectedColor, refractedColor, (1.0 - fresnel) * length(refractedRay));

    return vec4f(finalColor, 1.0);
}`,Qe=`struct CommonUniforms {
  viewProjectionMatrix : mat4x4f,
  eyePosition : vec3f,
}

struct LightUniforms {
   direction : vec3f,
}

struct SphereUniforms {
  center : vec3f,
  radius : f32,
}

struct ShadowUniforms {
    rim : f32,      
    sphere : f32,   
    ao : f32,       
}

struct WaterUniforms {
    density : f32,
}

struct Uniforms {
  modelViewProjectionMatrix : mat4x4f,
  eyePosition : vec3f,
}
fn intersectCube(origin: vec3f, ray: vec3f, cubeMin: vec3f, cubeMax: vec3f) -> vec2f {
  let tMin = (cubeMin - origin) / ray;
  let tMax = (cubeMax - origin) / ray;
  let t1 = min(tMin, tMax);
  let t2 = max(tMin, tMax);
  let tNear = max(max(t1.x, t1.y), t1.z);
  let tFar = min(min(t2.x, t2.y), t2.z);
  return vec2f(tNear, tFar);
}

@binding(0) @group(0) var<uniform> light : LightUniforms;
@binding(1) @group(0) var<uniform> sphere : SphereUniforms;
@binding(4) @group(0) var<uniform> shadows : ShadowUniforms;

@binding(2) @group(0) var waterSampler : sampler;
@binding(3) @group(0) var waterTexture : texture_2d<f32>;

struct VertexOutput {
  @builtin(position) position : vec4f,
  @location(0) oldPos : vec3f,  
  @location(1) newPos : vec3f,  
  @location(2) ray : vec3f,     
}

fn project(origin: vec3f, ray: vec3f, refractedLight: vec3f) -> vec3f {
    let poolHeight = 1.0;
    var point = origin;

    
    let tcube = intersectCube(origin, ray, vec3f(-1.0, -poolHeight, -1.0), vec3f(1.0, 2.0, 1.0));
    point += ray * tcube.y;

    
    let tplane = (-point.y - 1.0) / refractedLight.y;
    return point + refractedLight * tplane;
}

@vertex
fn vs_main(@location(0) position : vec3f) -> VertexOutput {
  var output : VertexOutput;
  let uv = position.xy * 0.5 + 0.5;

  
  let info = textureSampleLevel(waterTexture, waterSampler, uv, 0.0);

  
  let ba = info.ba * 0.5;
  let normal = vec3f(ba.x, sqrt(max(0.0, 1.0 - dot(ba, ba))), ba.y);

  
  let IOR_AIR = 1.0;
  let IOR_WATER = 1.333;
  let lightDir = normalize(light.direction);

  
  let refractedLight = refract(-lightDir, vec3f(0.0, 1.0, 0.0), IOR_AIR / IOR_WATER);
  
  let ray = refract(-lightDir, normal, IOR_AIR / IOR_WATER);

  
  let pos = vec3f(position.x, 0.0, position.y);

  
  output.oldPos = project(pos, refractedLight, refractedLight);
  output.newPos = project(pos + vec3f(0.0, info.r, 0.0), ray, refractedLight);
  output.ray = ray;

  
  let projectedPos = 0.75 * (output.newPos.xz - output.newPos.y * refractedLight.xz / refractedLight.y);
  output.position = vec4f(projectedPos.x, -projectedPos.y, 0.0, 1.0);

  return output;
}`,Je=`struct CommonUniforms {
  viewProjectionMatrix : mat4x4f,
  eyePosition : vec3f,
}

struct LightUniforms {
   direction : vec3f,
}

struct SphereUniforms {
  center : vec3f,
  radius : f32,
}

struct ShadowUniforms {
    rim : f32,      
    sphere : f32,   
    ao : f32,       
}

struct WaterUniforms {
    density : f32,
}

struct Uniforms {
  modelViewProjectionMatrix : mat4x4f,
  eyePosition : vec3f,
}
fn intersectCube(origin: vec3f, ray: vec3f, cubeMin: vec3f, cubeMax: vec3f) -> vec2f {
  let tMin = (cubeMin - origin) / ray;
  let tMax = (cubeMax - origin) / ray;
  let t1 = min(tMin, tMax);
  let t2 = max(tMin, tMax);
  let tNear = max(max(t1.x, t1.y), t1.z);
  let tFar = min(min(t2.x, t2.y), t2.z);
  return vec2f(tNear, tFar);
}

@binding(0) @group(0) var<uniform> light : LightUniforms;
@binding(1) @group(0) var<uniform> sphere : SphereUniforms;
@binding(4) @group(0) var<uniform> shadows : ShadowUniforms;
@binding(2) @group(0) var waterSampler : sampler;
@binding(3) @group(0) var waterTexture : texture_2d<f32>;

@fragment
fn fs_main(@location(0) oldPos : vec3f, @location(1) newPos : vec3f, @location(2) ray : vec3f) -> @location(0) vec4f {
    
    
    let oldArea = length(dpdx(oldPos)) * length(dpdy(oldPos));
    let newArea = length(dpdx(newPos)) * length(dpdy(newPos));

    var intensity = oldArea / newArea * 0.2;

    
    let IOR_AIR = 1.0;
    let IOR_WATER = 1.333;
    let lightDir = normalize(light.direction);
    let refractedLight = refract(-lightDir, vec3f(0.0, 1.0, 0.0), IOR_AIR / IOR_WATER);

    
    let dir = (sphere.center - newPos) / sphere.radius;
    let area = cross(dir, refractedLight);
    var shadow = dot(area, area);
    let dist = dot(dir, -refractedLight);

    shadow = 1.0 + (shadow - 1.0) / (0.05 + dist * 0.025);
    shadow = clamp(1.0 / (1.0 + exp(-shadow)), 0.0, 1.0);
    shadow = mix(1.0, shadow, clamp(dist * 2.0, 0.0, 1.0));
    shadow = mix(1.0, shadow, shadows.sphere);

    
    let poolHeight = 1.0;
    let t = intersectCube(newPos, -refractedLight, vec3f(-1.0, -poolHeight, -1.0), vec3f(1.0, 2.0, 1.0));
    let rimShadow = 1.0 / (1.0 + exp(-200.0 / (1.0 + 10.0 * (t.y - t.x)) * (newPos.y - refractedLight.y * t.y - 2.0 / 12.0)));
    intensity *= mix(1.0, rimShadow, shadows.rim);

    
    return vec4f(intensity, shadow, 0.0, 1.0);
}`;class tn{device;width;height;commonUniformBuffer;lightUniformBuffer;sphereUniformBuffer;shadowUniformBuffer;waterUniformBuffer;tileTexture;tileSampler;skyTexture;skySampler;textureA;textureB;causticsTexture;sampler;dropPipeline;updatePipeline;normalPipeline;spherePipeline;positionBuffer;indexBuffer;vertexCount;surfaceBindGroupLayout;surfacePipelineAbove;surfacePipelineUnder;causticsPipeline;constructor(i,v,x,S,U,E,I,L,q,G,F){this.device=i,this.width=v,this.height=x,this.commonUniformBuffer=S,this.lightUniformBuffer=U,this.sphereUniformBuffer=E,this.shadowUniformBuffer=I,this.tileTexture=L,this.tileSampler=q,this.skyTexture=G,this.skySampler=F,this.waterUniformBuffer=this.device.createBuffer({size:16,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),this.textureA=this.createTexture(),this.textureB=this.createTexture(),this.causticsTexture=this.device.createTexture({size:[1024,1024],format:"rgba8unorm",usage:GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.RENDER_ATTACHMENT}),this.sampler=i.createSampler({magFilter:"linear",minFilter:"linear",addressModeU:"clamp-to-edge",addressModeV:"clamp-to-edge"}),this.createPipelines(),this.createSurfaceMesh(),this.createSurfacePipeline(),this.createCausticsPipeline()}createTexture(){const i=this.device.features.has("float32-filterable")?"rgba32float":"rgba16float";return this.device.createTexture({size:[this.width,this.height],format:i,usage:GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.RENDER_ATTACHMENT})}createPipelines(){const i=this.device.features.has("float32-filterable")?"rgba32float":"rgba16float";this.dropPipeline=this.createPipeline("Drop",Yt,He,32,i),this.updatePipeline=this.createPipeline("Update",Yt,We,16,i),this.normalPipeline=this.createPipeline("Normal",Yt,Xe,16,i),this.spherePipeline=this.createPipeline("Sphere",Yt,Ye,32,i)}createPipeline(i,v,x,S,U){const E=this.device.createShaderModule({label:i+" Module",code:v+x});return{pipeline:this.device.createRenderPipeline({label:i+" Pipeline",layout:"auto",vertex:{module:E,entryPoint:"vs_main"},fragment:{module:E,entryPoint:"fs_main",targets:[{format:U}]},primitive:{topology:"triangle-list"}}),uniformSize:S,uniformBuffer:this.device.createBuffer({size:S,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST})}}runPipeline(i,v){this.device.queue.writeBuffer(i.uniformBuffer,0,v);const x=this.device.createBindGroup({layout:i.pipeline.getBindGroupLayout(0),entries:[{binding:0,resource:this.textureA.createView()},{binding:1,resource:this.sampler},{binding:2,resource:{buffer:i.uniformBuffer}}]}),S=this.device.createCommandEncoder(),U=S.beginRenderPass({colorAttachments:[{view:this.textureB.createView(),loadOp:"clear",storeOp:"store",clearValue:{r:0,g:0,b:0,a:0}}]});U.setPipeline(i.pipeline),U.setBindGroup(0,x),U.draw(6),U.end(),this.device.queue.submit([S.finish()]);const E=this.textureA;this.textureA=this.textureB,this.textureB=E}addDrop(i,v,x,S){const U=new Float32Array(4);U[0]=i,U[1]=v,U[2]=x,U[3]=S,this.runPipeline(this.dropPipeline,U)}stepSimulation(){const i=new Float32Array(2);i[0]=1/this.width,i[1]=1/this.height,this.runPipeline(this.updatePipeline,i)}updateNormals(){const i=new Float32Array(2);i[0]=1/this.width,i[1]=1/this.height,this.runPipeline(this.normalPipeline,i)}moveSphere(i,v,x){const S=new Float32Array(8);S[0]=i[0],S[1]=i[1],S[2]=i[2],S[3]=x,S[4]=v[0],S[5]=v[1],S[6]=v[2],S[7]=0,this.runPipeline(this.spherePipeline,S)}createSurfaceMesh(){const v=[],x=[];for(let S=0;S<=200;S++){const U=S/200;for(let E=0;E<=200;E++){const I=E/200;v.push(2*I-1,2*U-1,0)}}for(let S=0;S<200;S++)for(let U=0;U<200;U++){const E=U+S*201;x.push(E,E+1,E+200+1),x.push(E+200+1,E+1,E+200+2)}this.vertexCount=x.length,this.positionBuffer=this.device.createBuffer({label:"Water Surface Vertices",size:v.length*4,usage:GPUBufferUsage.VERTEX,mappedAtCreation:!0}),new Float32Array(this.positionBuffer.getMappedRange()).set(v),this.positionBuffer.unmap(),this.indexBuffer=this.device.createBuffer({label:"Water Surface Indices",size:x.length*4,usage:GPUBufferUsage.INDEX,mappedAtCreation:!0}),new Uint32Array(this.indexBuffer.getMappedRange()).set(x),this.indexBuffer.unmap()}createSurfacePipeline(){const i=(U,E)=>this.device.createShaderModule({label:`${U} Vertex Shader`,code:E}),v=(U,E)=>this.device.createShaderModule({label:`${U} Fragment Shader`,code:E});this.surfaceBindGroupLayout=this.device.createBindGroupLayout({label:"Water Surface BindGroupLayout",entries:[{binding:0,visibility:GPUShaderStage.VERTEX|GPUShaderStage.FRAGMENT,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.FRAGMENT,buffer:{type:"uniform"}},{binding:2,visibility:GPUShaderStage.FRAGMENT,buffer:{type:"uniform"}},{binding:3,visibility:GPUShaderStage.FRAGMENT,sampler:{}},{binding:4,visibility:GPUShaderStage.FRAGMENT,texture:{}},{binding:5,visibility:GPUShaderStage.VERTEX|GPUShaderStage.FRAGMENT,sampler:{}},{binding:6,visibility:GPUShaderStage.VERTEX|GPUShaderStage.FRAGMENT,texture:{}},{binding:7,visibility:GPUShaderStage.FRAGMENT,sampler:{}},{binding:8,visibility:GPUShaderStage.FRAGMENT,texture:{viewDimension:"cube"}},{binding:9,visibility:GPUShaderStage.FRAGMENT,texture:{}},{binding:10,visibility:GPUShaderStage.FRAGMENT,buffer:{type:"uniform"}},{binding:11,visibility:GPUShaderStage.FRAGMENT,buffer:{type:"uniform"}}]});const x=this.device.createPipelineLayout({label:"Water Surface PipelineLayout",bindGroupLayouts:[this.surfaceBindGroupLayout]}),S=(U,E,I,L)=>{const q=i(U,E),G=v(U,I);return this.device.createRenderPipeline({label:U,layout:x,vertex:{module:q,entryPoint:"vs_main",buffers:[{arrayStride:12,attributes:[{shaderLocation:0,offset:0,format:"float32x3"}]}]},fragment:{module:G,entryPoint:"fs_main",targets:[{format:navigator.gpu.getPreferredCanvasFormat()}]},primitive:{topology:"triangle-list",cullMode:L},depthStencil:{depthWriteEnabled:!0,depthCompare:"less",format:"depth24plus"}})};this.surfacePipelineAbove=S("Water Surface Above Pipeline",pe,Ze,"front"),this.surfacePipelineUnder=S("Water Surface Under Pipeline",pe,Ke,"back")}renderSurface(i){const v=this.device.createBindGroup({layout:this.surfaceBindGroupLayout,entries:[{binding:0,resource:{buffer:this.commonUniformBuffer}},{binding:1,resource:{buffer:this.lightUniformBuffer}},{binding:2,resource:{buffer:this.sphereUniformBuffer}},{binding:3,resource:this.tileSampler},{binding:4,resource:this.tileTexture.createView()},{binding:5,resource:this.sampler},{binding:6,resource:this.textureA.createView()},{binding:7,resource:this.skySampler},{binding:8,resource:this.skyTexture.createView({dimension:"cube"})},{binding:9,resource:this.causticsTexture.createView()},{binding:10,resource:{buffer:this.shadowUniformBuffer}},{binding:11,resource:{buffer:this.waterUniformBuffer}}]});i.setPipeline(this.surfacePipelineAbove),i.setBindGroup(0,v),i.setVertexBuffer(0,this.positionBuffer),i.setIndexBuffer(this.indexBuffer,"uint32"),i.drawIndexed(this.vertexCount),i.setPipeline(this.surfacePipelineUnder),i.setBindGroup(0,v),i.drawIndexed(this.vertexCount)}createCausticsPipeline(){const i=this.device.createShaderModule({label:"Caustics Vertex Shader",code:Qe}),v=this.device.createShaderModule({label:"Caustics Fragment Shader",code:Je});this.causticsPipeline=this.device.createRenderPipeline({label:"Caustics Pipeline",layout:"auto",vertex:{module:i,entryPoint:"vs_main",buffers:[{arrayStride:12,attributes:[{shaderLocation:0,offset:0,format:"float32x3"}]}]},fragment:{module:v,entryPoint:"fs_main",targets:[{format:"rgba8unorm",blend:{color:{operation:"add",srcFactor:"one",dstFactor:"one"},alpha:{operation:"add",srcFactor:"one",dstFactor:"one"}}}]},primitive:{topology:"triangle-list"}})}updateCaustics(){const i=this.device.createBindGroup({layout:this.causticsPipeline.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:this.lightUniformBuffer}},{binding:1,resource:{buffer:this.sphereUniformBuffer}},{binding:2,resource:this.sampler},{binding:3,resource:this.textureA.createView()},{binding:4,resource:{buffer:this.shadowUniformBuffer}}]}),v=this.device.createCommandEncoder(),x=v.beginRenderPass({colorAttachments:[{view:this.causticsTexture.createView(),loadOp:"clear",storeOp:"store",clearValue:{r:0,g:0,b:0,a:0}}]});x.setPipeline(this.causticsPipeline),x.setBindGroup(0,i),x.setVertexBuffer(0,this.positionBuffer),x.setIndexBuffer(this.indexBuffer,"uint32"),x.drawIndexed(this.vertexCount),x.end(),this.device.queue.submit([v.finish()])}updateDensity(i){this.device.queue.writeBuffer(this.waterUniformBuffer,0,new Float32Array([i]))}}class it{x;y;z;constructor(i=0,v=0,x=0){this.x=i,this.y=v,this.z=x}negative(){return new it(-this.x,-this.y,-this.z)}add(i){return i instanceof it?new it(this.x+i.x,this.y+i.y,this.z+i.z):new it(this.x+i,this.y+i,this.z+i)}subtract(i){return i instanceof it?new it(this.x-i.x,this.y-i.y,this.z-i.z):new it(this.x-i,this.y-i,this.z-i)}multiply(i){return i instanceof it?new it(this.x*i.x,this.y*i.y,this.z*i.z):new it(this.x*i,this.y*i,this.z*i)}divide(i){return i instanceof it?new it(this.x/i.x,this.y/i.y,this.z/i.z):new it(this.x/i,this.y/i,this.z/i)}dot(i){return this.x*i.x+this.y*i.y+this.z*i.z}length(){return Math.sqrt(this.dot(this))}unit(){return this.divide(this.length())}toArray(){return[this.x,this.y,this.z]}clone(){return new it(this.x,this.y,this.z)}static fromAngles(i,v){return new it(Math.cos(v)*Math.cos(i),Math.sin(v),Math.cos(v)*Math.sin(i))}static lerp(i,v,x){return i.add(v.subtract(i).multiply(x))}}class en{t;hit;normal;constructor(i,v,x){this.t=i,this.hit=v,this.normal=x}}class Zt{eye;viewport;invViewProj;ray00;ray10;ray01;ray11;constructor(i,v,x){this.viewport=x;const S=Vt.invert(i),U=Jt.transformMat4([0,0,0],S);this.eye=new it(U[0],U[1],U[2]),this.invViewProj=Vt.invert(Vt.multiply(v,i));const[E,I,L,q]=x,G=E+L,F=I+q;this.ray00=this.unProject(E,I,1).subtract(this.eye),this.ray10=this.unProject(G,I,1).subtract(this.eye),this.ray01=this.unProject(E,F,1).subtract(this.eye),this.ray11=this.unProject(G,F,1).subtract(this.eye)}unProject(i,v,x){const[S,U,E,I]=this.viewport,L=(i-S)/E*2-1,q=(1-(v-U)/I)*2-1,G=Jt.transformMat4([L,q,x],this.invViewProj);return new it(G[0],G[1],G[2])}getRayForPixel(i,v){const[x,S,U,E]=this.viewport,I=(i-x)/U,L=(v-S)/E,q=it.lerp(this.ray00,this.ray10,I),G=it.lerp(this.ray01,this.ray11,I);return it.lerp(q,G,L).unit()}static hitTestSphere(i,v,x,S){const U=i.subtract(x),E=v.dot(v),I=2*v.dot(U),L=U.dot(U)-S*S,q=I*I-4*E*L;if(q>0){const G=(-I-Math.sqrt(q))/(2*E),F=i.add(v.multiply(G)),j=F.subtract(x).divide(S);return new en(G,F,j)}return null}}class nn{device;constructor(i){this.device=i}async load(i){const v=["xpos","xneg","ypos","yneg","zpos","zneg"],x=await Promise.all(v.map(I=>fetch(i[I]).then(L=>L.blob()).then(L=>createImageBitmap(L)))),{width:S,height:U}=x[0],E=this.device.createTexture({size:[S,U,6],format:"rgba8unorm",usage:GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_DST|GPUTextureUsage.RENDER_ATTACHMENT});return x.forEach((I,L)=>{this.device.queue.copyExternalImageToTexture({source:I,flipY:!0},{texture:E,origin:[0,0,L]},{width:S,height:U})}),E}}var Ft=(f=>(f[f.None=-1]="None",f[f.AddDrops=0]="AddDrops",f[f.OrbitCamera=1]="OrbitCamera",f[f.MoveSphere=2]="MoveSphere",f))(Ft||{});async function rn(){const f=navigator.gpu;if(!f){document.getElementById("loading").textContent="WebGPU not supported.";return}const i=await f.requestAdapter();if(!i){document.getElementById("loading").textContent="No WebGPU adapter found.";return}const v=[];i.features.has("float32-filterable")&&v.push("float32-filterable");const x=await i.requestDevice({requiredFeatures:v}),S=document.querySelector("canvas"),U=S.getContext("webgpu"),E=navigator.gpu.getPreferredCanvasFormat();U.configure({device:x,format:E,alphaMode:"premultiplied"});const I=document.getElementById("help"),L=window.devicePixelRatio||1;let q=performance.now();async function G(M){const R=await(await fetch(M)).blob(),$=await createImageBitmap(R),T=x.createTexture({label:M,size:[$.width,$.height],format:"rgba8unorm",usage:GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_DST|GPUTextureUsage.RENDER_ATTACHMENT});return x.queue.copyExternalImageToTexture({source:$,flipY:!0},{texture:T},{width:$.width,height:$.height}),T}const F="/webgpu-water/",j=await G(`${F}tiles.jpg`),K=x.createSampler({magFilter:"linear",minFilter:"linear",addressModeU:"repeat",addressModeV:"repeat"}),Q=await new nn(x).load({xpos:`${F}xpos.jpg`,xneg:`${F}xneg.jpg`,ypos:`${F}ypos.jpg`,yneg:`${F}yneg.jpg`,zpos:`${F}zpos.jpg`,zneg:`${F}zneg.jpg`}),lt=x.createSampler({magFilter:"linear",minFilter:"linear"});let V=-25,O=-200.5,Y=4,st=V,ht=O,ot=Y;function St(){const M=S.width/S.height,D=Vt.perspective(Math.PI/4,M,.01,100),R=Vt.identity();return Vt.translate(R,[0,0,-Y],R),Vt.rotateX(R,-V*Math.PI/180,R),Vt.rotateY(R,-O*Math.PI/180,R),Vt.translate(R,[0,.5,0],R),{projectionMatrix:D,viewMatrix:R}}const dt=x.createBuffer({size:80,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),pt=x.createBuffer({size:16,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),at=x.createBuffer({size:16,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),_t=x.createBuffer({size:16,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST});let gt=new it(2,2,-1).unit();function Lt(){x.queue.writeBuffer(pt,0,new Float32Array([...gt.toArray(),0]))}Lt(),x.queue.writeBuffer(_t,0,new Float32Array([1,1,1,0]));const mt=new ke(x,E,dt,j,K,pt,at,_t),Z=new je(x,E,dt,pt,at),k=new tn(x,256,256,dt,pt,at,_t,j,K,Q,lt);let C=new it(-.4,-.75,.2),wt=C.clone();const et=.25;let H=new it,vt=!1,xt=!1;const Ut=new ne({title:"Settings"});Ut.close();const ut=Ut.addFolder("Object"),Bt=Ut.addFolder("Scene"),J={gravity:vt,followCamera:!1,object:"Sphere",useDensity:!1,density:.9};ut.add(J,"object",["Sphere","None"]).name("Object").onChange(M=>{const D=M==="Sphere";x.queue.writeBuffer(_t,0,new Float32Array([1,D?1:0,1,0])),document.activeElement?.blur()});const b=ut.add(J,"gravity").name("Toggle Gravity").onChange(M=>{vt=M,document.activeElement?.blur()});ut.add(J,"useDensity").name("Enable Density").onChange(()=>{d(),document.activeElement?.blur()});const P=ut.add(J,"density",.2,2,.1).name("Density").onChange(()=>{document.activeElement?.blur()});function d(){P.show(J.useDensity)}d(),Bt.add(J,"followCamera").name("Light From Camera").onChange(()=>{document.activeElement?.blur()}),Z.update(C.toArray(),et);for(let M=0;M<20;M++)k.addDrop(Math.random()*2-1,Math.random()*2-1,.03,M&1?.01:-.01);const e={};window.addEventListener("keydown",M=>{const D=M.key.toUpperCase();e[D]=!0,D==="G"?(vt=!vt,J.gravity=vt,b.updateDisplay()):D===" "&&(xt=!xt)}),window.addEventListener("keyup",M=>{e[M.key.toUpperCase()]=!1});let a=Ft.None,s=0,u=0,g,w;const m=new Map;let t=0;function l(){return[0,0,S.width,S.height]}function r(M,D,R){if(s=M,u=D,R===2){a=Ft.OrbitCamera;return}const{projectionMatrix:$,viewMatrix:T}=St(),B=new Zt(T,$,l()),W=B.getRayForPixel(M*L,D*L),N=J.object==="Sphere"?Zt.hitTestSphere(B.eye,W,C,et):null;if(N){a=Ft.MoveSphere,g=N.hit,w=B.getRayForPixel(S.width/2,S.height/2).negative();return}const rt=-B.eye.y/W.y,nt=B.eye.add(W.multiply(rt));Math.abs(nt.x)<1&&Math.abs(nt.z)<1?(a=Ft.AddDrops,k.addDrop(nt.x,nt.z,.03,.01)):a=Ft.OrbitCamera}function o(M,D){if(a===Ft.OrbitCamera)ht-=M-s,st-=D-u,st=Math.max(-89.999,Math.min(89.999,st));else if(a===Ft.MoveSphere){const{projectionMatrix:R,viewMatrix:$}=St(),T=new Zt($,R,l()),B=T.getRayForPixel(M*L,D*L),W=-w.dot(T.eye.subtract(g))/w.dot(B),N=T.eye.add(B.multiply(W));C=C.add(N.subtract(g)),C.x=Math.max(et-1,Math.min(1-et,C.x)),C.y=Math.max(et-1,Math.min(10,C.y)),C.z=Math.max(et-1,Math.min(1-et,C.z)),Z.update(C.toArray(),et),g=N}else if(a===Ft.AddDrops){const{projectionMatrix:R,viewMatrix:$}=St(),T=new Zt($,R,l()),B=T.getRayForPixel(M*L,D*L),W=-T.eye.y/B.y,N=T.eye.add(B.multiply(W));Math.abs(N.x)<1&&Math.abs(N.z)<1&&k.addDrop(N.x,N.z,.03,.01)}s=M,u=D}function n(){a=Ft.None}function c(){const M=Array.from(m.values());if(M.length<2)return 0;const D=M[0].x-M[1].x,R=M[0].y-M[1].y;return Math.sqrt(D*D+R*R)}S.addEventListener("pointerdown",M=>{if(M.button!==1){if(M.preventDefault(),S.setPointerCapture(M.pointerId),m.set(M.pointerId,{x:M.offsetX,y:M.offsetY}),m.size===2){a=Ft.None,t=c();return}m.size===1&&r(M.offsetX,M.offsetY,M.button)}}),S.addEventListener("contextmenu",M=>M.preventDefault()),S.addEventListener("pointermove",M=>{if(m.has(M.pointerId)&&m.set(M.pointerId,{x:M.offsetX,y:M.offsetY}),m.size===2){const D=c();if(t>0){const R=t-D;ot+=R*.01,ot=Math.max(1.5,Math.min(10,ot))}t=D;return}a!==Ft.None&&m.size===1&&o(M.offsetX,M.offsetY)}),S.addEventListener("pointerup",M=>{S.releasePointerCapture(M.pointerId),m.delete(M.pointerId),m.size<2&&(t=0),m.size===0&&n()}),S.addEventListener("pointercancel",M=>{S.releasePointerCapture(M.pointerId),m.delete(M.pointerId),m.size<2&&(t=0),m.size===0&&n()}),S.addEventListener("wheel",M=>{M.preventDefault(),ot+=M.deltaY*.005,ot=Math.max(1.5,Math.min(10,ot))},{passive:!1});let p;function h(){const D=window.matchMedia("(max-width: 600px)").matches?window.innerWidth:window.innerWidth-I.clientWidth-20,R=window.innerHeight;S.width=Math.floor(D*L),S.height=Math.floor(R*L),S.style.width=`${D}px`,S.style.height=`${R}px`,p&&p.destroy(),p=x.createTexture({size:[S.width,S.height],format:"depth24plus",usage:GPUTextureUsage.RENDER_ATTACHMENT}),A()}window.addEventListener("resize",h);const y=document.getElementById("help-toggle");y.addEventListener("click",()=>{I.classList.toggle("collapsed"),y.textContent=I.classList.contains("collapsed")?"menu":"chevron_right",h()}),window.addEventListener("pointerdown",M=>{if(window.matchMedia("(max-width: 600px)").matches&&!I.classList.contains("collapsed")){const R=M.target;!I.contains(R)&&!y.contains(R)&&(I.classList.add("collapsed"),y.textContent="menu",h())}}),document.getElementById("loading").style.display="none",document.body.classList.remove("loading"),h();function _(){const{projectionMatrix:M,viewMatrix:D}=St(),R=Vt.multiply(M,D),$=Vt.invert(D),T=Jt.transformMat4([0,0,0],$),B=new Float32Array(20);B.set(R,0),B.set(T,16),x.queue.writeBuffer(dt,0,B)}function A(){const M=performance.now();let D=(M-q)/1e3;if(q=M,D>1&&(D=1),V+=(st-V)*.15,O+=(ht-O)*.15,Y+=(ot-Y)*.15,(e.L||J.followCamera)&&(gt=it.fromAngles((90-O)*Math.PI/180,-V*Math.PI/180),Lt()),!xt){if(a===Ft.MoveSphere)H=new it;else if(vt){const T=Math.max(0,Math.min(1,(et-C.y)/(2*et))),B=J.useDensity?1/J.density:1.1,W=-15;H.y+=(W-B*W*T)*D,H.length()>0&&(H=H.subtract(H.unit().multiply(T*D*H.dot(H)*2)));const N=.1,rt=1-T;H=H.multiply(1-N*D*rt);const nt=J.useDensity?J.density:1,ct=Math.abs(C.y),ft=Math.max(0,1-ct/et),yt=.5,bt=.5*nt,Mt=1-ft*(yt+bt)*D;H=H.multiply(Math.max(0,Mt)),C=C.add(H.multiply(D)),C.y<et-1&&(C.y=et-1,H.y=Math.abs(H.y)*.7),Z.update(C.toArray(),et)}J.object==="Sphere"&&k.moveSphere(wt.toArray(),C.toArray(),et),wt=C.clone(),k.stepSimulation(),k.stepSimulation(),k.updateNormals(),k.updateCaustics()}k.updateDensity(J.useDensity?J.density:0),_();const R=x.createCommandEncoder(),$=R.beginRenderPass({colorAttachments:[{view:U.getCurrentTexture().createView(),clearValue:{r:0,g:0,b:0,a:1},loadOp:"clear",storeOp:"store"}],depthStencilAttachment:{view:p.createView(),depthClearValue:1,depthLoadOp:"clear",depthStoreOp:"store"}});mt.render($,k.textureA,k.sampler,k.causticsTexture),J.object==="Sphere"&&Z.render($,k.textureA,k.sampler,k.causticsTexture),k.renderSurface($),$.end(),x.queue.submit([R.finish()])}function z(){requestAnimationFrame(z),A()}requestAnimationFrame(z)}rn();
