(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const M of document.querySelectorAll('link[rel="modulepreload"]'))x(M);new MutationObserver(M=>{for(const P of M)if(P.type==="childList")for(const U of P.addedNodes)U.tagName==="LINK"&&U.rel==="modulepreload"&&x(U)}).observe(document,{childList:!0,subtree:!0});function v(M){const P={};return M.integrity&&(P.integrity=M.integrity),M.referrerPolicy&&(P.referrerPolicy=M.referrerPolicy),M.crossOrigin==="use-credentials"?P.credentials="include":M.crossOrigin==="anonymous"?P.credentials="omit":P.credentials="same-origin",P}function x(M){if(M.ep)return;M.ep=!0;const P=v(M);fetch(M.href,P)}})();function me(f,i){return class extends f{constructor(...v){super(...v),i(this)}}}const we=me(Array,f=>f.fill(0));let W=1e-6;function ve(f){function i(g=0,m=0){const w=new f(2);return g!==void 0&&(w[0]=g,m!==void 0&&(w[1]=m)),w}const v=i;function x(g,m,w){const t=w??new f(2);return t[0]=g,t[1]=m,t}function M(g,m){const w=m??new f(2);return w[0]=Math.ceil(g[0]),w[1]=Math.ceil(g[1]),w}function P(g,m){const w=m??new f(2);return w[0]=Math.floor(g[0]),w[1]=Math.floor(g[1]),w}function U(g,m){const w=m??new f(2);return w[0]=Math.round(g[0]),w[1]=Math.round(g[1]),w}function $(g,m=0,w=1,t){const l=t??new f(2);return l[0]=Math.min(w,Math.max(m,g[0])),l[1]=Math.min(w,Math.max(m,g[1])),l}function I(g,m,w){const t=w??new f(2);return t[0]=g[0]+m[0],t[1]=g[1]+m[1],t}function N(g,m,w,t){const l=t??new f(2);return l[0]=g[0]+m[0]*w,l[1]=g[1]+m[1]*w,l}function G(g,m){const w=g[0],t=g[1],l=m[0],r=m[1],o=Math.sqrt(w*w+t*t),n=Math.sqrt(l*l+r*r),a=o*n,p=a&&mt(g,m)/a;return Math.acos(p)}function F(g,m,w){const t=w??new f(2);return t[0]=g[0]-m[0],t[1]=g[1]-m[1],t}const j=F;function Q(g,m){return Math.abs(g[0]-m[0])<W&&Math.abs(g[1]-m[1])<W}function nt(g,m){return g[0]===m[0]&&g[1]===m[1]}function J(g,m,w,t){const l=t??new f(2);return l[0]=g[0]+w*(m[0]-g[0]),l[1]=g[1]+w*(m[1]-g[1]),l}function ft(g,m,w,t){const l=t??new f(2);return l[0]=g[0]+w[0]*(m[0]-g[0]),l[1]=g[1]+w[1]*(m[1]-g[1]),l}function V(g,m,w){const t=w??new f(2);return t[0]=Math.max(g[0],m[0]),t[1]=Math.max(g[1],m[1]),t}function O(g,m,w){const t=w??new f(2);return t[0]=Math.min(g[0],m[0]),t[1]=Math.min(g[1],m[1]),t}function X(g,m,w){const t=w??new f(2);return t[0]=g[0]*m,t[1]=g[1]*m,t}const at=X;function pt(g,m,w){const t=w??new f(2);return t[0]=g[0]/m,t[1]=g[1]/m,t}function ct(g,m){const w=m??new f(2);return w[0]=1/g[0],w[1]=1/g[1],w}const Mt=ct;function gt(g,m,w){const t=w??new f(3),l=g[0]*m[1]-g[1]*m[0];return t[0]=0,t[1]=0,t[2]=l,t}function mt(g,m){return g[0]*m[0]+g[1]*m[1]}function lt(g){const m=g[0],w=g[1];return Math.sqrt(m*m+w*w)}const Dt=lt;function St(g){const m=g[0],w=g[1];return m*m+w*w}const Lt=St;function ht(g,m){const w=g[0]-m[0],t=g[1]-m[1];return Math.sqrt(w*w+t*t)}const K=ht;function Y(g,m){const w=g[0]-m[0],t=g[1]-m[1];return w*w+t*t}const C=Y;function Z(g,m){const w=m??new f(2),t=g[0],l=g[1],r=Math.sqrt(t*t+l*l);return r>1e-5?(w[0]=t/r,w[1]=l/r):(w[0]=0,w[1]=0),w}function It(g,m){const w=m??new f(2);return w[0]=-g[0],w[1]=-g[1],w}function H(g,m){const w=m??new f(2);return w[0]=g[0],w[1]=g[1],w}const it=H;function ut(g,m,w){const t=w??new f(2);return t[0]=g[0]*m[0],t[1]=g[1]*m[1],t}const Ut=ut;function dt(g,m,w){const t=w??new f(2);return t[0]=g[0]/m[0],t[1]=g[1]/m[1],t}const At=dt;function _t(g=1,m){const w=m??new f(2),t=Math.random()*2*Math.PI;return w[0]=Math.cos(t)*g,w[1]=Math.sin(t)*g,w}function b(g){const m=g??new f(2);return m[0]=0,m[1]=0,m}function S(g,m,w){const t=w??new f(2),l=g[0],r=g[1];return t[0]=l*m[0]+r*m[4]+m[12],t[1]=l*m[1]+r*m[5]+m[13],t}function d(g,m,w){const t=w??new f(2),l=g[0],r=g[1];return t[0]=m[0]*l+m[4]*r+m[8],t[1]=m[1]*l+m[5]*r+m[9],t}function e(g,m,w,t){const l=t??new f(2),r=g[0]-m[0],o=g[1]-m[1],n=Math.sin(w),a=Math.cos(w);return l[0]=r*a-o*n+m[0],l[1]=r*n+o*a+m[1],l}function c(g,m,w){const t=w??new f(2);return Z(g,t),X(t,m,t)}function s(g,m,w){const t=w??new f(2);return lt(g)>m?c(g,m,t):H(g,t)}function u(g,m,w){const t=w??new f(2);return J(g,m,.5,t)}return{create:i,fromValues:v,set:x,ceil:M,floor:P,round:U,clamp:$,add:I,addScaled:N,angle:G,subtract:F,sub:j,equalsApproximately:Q,equals:nt,lerp:J,lerpV:ft,max:V,min:O,mulScalar:X,scale:at,divScalar:pt,inverse:ct,invert:Mt,cross:gt,dot:mt,length:lt,len:Dt,lengthSq:St,lenSq:Lt,distance:ht,dist:K,distanceSq:Y,distSq:C,normalize:Z,negate:It,copy:H,clone:it,multiply:ut,mul:Ut,divide:dt,div:At,random:_t,zero:b,transformMat4:S,transformMat3:d,rotate:e,setLength:c,truncate:s,midpoint:u}}const ae=new Map;function ge(f){let i=ae.get(f);return i||(i=ve(f),ae.set(f,i)),i}function xe(f){function i(n,a,p){const h=new f(3);return n!==void 0&&(h[0]=n,a!==void 0&&(h[1]=a,p!==void 0&&(h[2]=p))),h}const v=i;function x(n,a,p,h){const y=h??new f(3);return y[0]=n,y[1]=a,y[2]=p,y}function M(n,a){const p=a??new f(3);return p[0]=Math.ceil(n[0]),p[1]=Math.ceil(n[1]),p[2]=Math.ceil(n[2]),p}function P(n,a){const p=a??new f(3);return p[0]=Math.floor(n[0]),p[1]=Math.floor(n[1]),p[2]=Math.floor(n[2]),p}function U(n,a){const p=a??new f(3);return p[0]=Math.round(n[0]),p[1]=Math.round(n[1]),p[2]=Math.round(n[2]),p}function $(n,a=0,p=1,h){const y=h??new f(3);return y[0]=Math.min(p,Math.max(a,n[0])),y[1]=Math.min(p,Math.max(a,n[1])),y[2]=Math.min(p,Math.max(a,n[2])),y}function I(n,a,p){const h=p??new f(3);return h[0]=n[0]+a[0],h[1]=n[1]+a[1],h[2]=n[2]+a[2],h}function N(n,a,p,h){const y=h??new f(3);return y[0]=n[0]+a[0]*p,y[1]=n[1]+a[1]*p,y[2]=n[2]+a[2]*p,y}function G(n,a){const p=n[0],h=n[1],y=n[2],_=a[0],A=a[1],L=a[2],R=Math.sqrt(p*p+h*h+y*y),z=Math.sqrt(_*_+A*A+L*L),D=R*z,T=D&&mt(n,a)/D;return Math.acos(T)}function F(n,a,p){const h=p??new f(3);return h[0]=n[0]-a[0],h[1]=n[1]-a[1],h[2]=n[2]-a[2],h}const j=F;function Q(n,a){return Math.abs(n[0]-a[0])<W&&Math.abs(n[1]-a[1])<W&&Math.abs(n[2]-a[2])<W}function nt(n,a){return n[0]===a[0]&&n[1]===a[1]&&n[2]===a[2]}function J(n,a,p,h){const y=h??new f(3);return y[0]=n[0]+p*(a[0]-n[0]),y[1]=n[1]+p*(a[1]-n[1]),y[2]=n[2]+p*(a[2]-n[2]),y}function ft(n,a,p,h){const y=h??new f(3);return y[0]=n[0]+p[0]*(a[0]-n[0]),y[1]=n[1]+p[1]*(a[1]-n[1]),y[2]=n[2]+p[2]*(a[2]-n[2]),y}function V(n,a,p){const h=p??new f(3);return h[0]=Math.max(n[0],a[0]),h[1]=Math.max(n[1],a[1]),h[2]=Math.max(n[2],a[2]),h}function O(n,a,p){const h=p??new f(3);return h[0]=Math.min(n[0],a[0]),h[1]=Math.min(n[1],a[1]),h[2]=Math.min(n[2],a[2]),h}function X(n,a,p){const h=p??new f(3);return h[0]=n[0]*a,h[1]=n[1]*a,h[2]=n[2]*a,h}const at=X;function pt(n,a,p){const h=p??new f(3);return h[0]=n[0]/a,h[1]=n[1]/a,h[2]=n[2]/a,h}function ct(n,a){const p=a??new f(3);return p[0]=1/n[0],p[1]=1/n[1],p[2]=1/n[2],p}const Mt=ct;function gt(n,a,p){const h=p??new f(3),y=n[2]*a[0]-n[0]*a[2],_=n[0]*a[1]-n[1]*a[0];return h[0]=n[1]*a[2]-n[2]*a[1],h[1]=y,h[2]=_,h}function mt(n,a){return n[0]*a[0]+n[1]*a[1]+n[2]*a[2]}function lt(n){const a=n[0],p=n[1],h=n[2];return Math.sqrt(a*a+p*p+h*h)}const Dt=lt;function St(n){const a=n[0],p=n[1],h=n[2];return a*a+p*p+h*h}const Lt=St;function ht(n,a){const p=n[0]-a[0],h=n[1]-a[1],y=n[2]-a[2];return Math.sqrt(p*p+h*h+y*y)}const K=ht;function Y(n,a){const p=n[0]-a[0],h=n[1]-a[1],y=n[2]-a[2];return p*p+h*h+y*y}const C=Y;function Z(n,a){const p=a??new f(3),h=n[0],y=n[1],_=n[2],A=Math.sqrt(h*h+y*y+_*_);return A>1e-5?(p[0]=h/A,p[1]=y/A,p[2]=_/A):(p[0]=0,p[1]=0,p[2]=0),p}function It(n,a){const p=a??new f(3);return p[0]=-n[0],p[1]=-n[1],p[2]=-n[2],p}function H(n,a){const p=a??new f(3);return p[0]=n[0],p[1]=n[1],p[2]=n[2],p}const it=H;function ut(n,a,p){const h=p??new f(3);return h[0]=n[0]*a[0],h[1]=n[1]*a[1],h[2]=n[2]*a[2],h}const Ut=ut;function dt(n,a,p){const h=p??new f(3);return h[0]=n[0]/a[0],h[1]=n[1]/a[1],h[2]=n[2]/a[2],h}const At=dt;function _t(n=1,a){const p=a??new f(3),h=Math.random()*2*Math.PI,y=Math.random()*2-1,_=Math.sqrt(1-y*y)*n;return p[0]=Math.cos(h)*_,p[1]=Math.sin(h)*_,p[2]=y*n,p}function b(n){const a=n??new f(3);return a[0]=0,a[1]=0,a[2]=0,a}function S(n,a,p){const h=p??new f(3),y=n[0],_=n[1],A=n[2],L=a[3]*y+a[7]*_+a[11]*A+a[15]||1;return h[0]=(a[0]*y+a[4]*_+a[8]*A+a[12])/L,h[1]=(a[1]*y+a[5]*_+a[9]*A+a[13])/L,h[2]=(a[2]*y+a[6]*_+a[10]*A+a[14])/L,h}function d(n,a,p){const h=p??new f(3),y=n[0],_=n[1],A=n[2];return h[0]=y*a[0]+_*a[4]+A*a[8],h[1]=y*a[1]+_*a[5]+A*a[9],h[2]=y*a[2]+_*a[6]+A*a[10],h}function e(n,a,p){const h=p??new f(3),y=n[0],_=n[1],A=n[2];return h[0]=y*a[0]+_*a[4]+A*a[8],h[1]=y*a[1]+_*a[5]+A*a[9],h[2]=y*a[2]+_*a[6]+A*a[10],h}function c(n,a,p){const h=p??new f(3),y=a[0],_=a[1],A=a[2],L=a[3]*2,R=n[0],z=n[1],D=n[2],T=_*D-A*z,E=A*R-y*D,B=y*z-_*R;return h[0]=R+T*L+(_*B-A*E)*2,h[1]=z+E*L+(A*T-y*B)*2,h[2]=D+B*L+(y*E-_*T)*2,h}function s(n,a){const p=a??new f(3);return p[0]=n[12],p[1]=n[13],p[2]=n[14],p}function u(n,a,p){const h=p??new f(3),y=a*4;return h[0]=n[y+0],h[1]=n[y+1],h[2]=n[y+2],h}function g(n,a){const p=a??new f(3),h=n[0],y=n[1],_=n[2],A=n[4],L=n[5],R=n[6],z=n[8],D=n[9],T=n[10];return p[0]=Math.sqrt(h*h+y*y+_*_),p[1]=Math.sqrt(A*A+L*L+R*R),p[2]=Math.sqrt(z*z+D*D+T*T),p}function m(n,a,p,h){const y=h??new f(3),_=[],A=[];return _[0]=n[0]-a[0],_[1]=n[1]-a[1],_[2]=n[2]-a[2],A[0]=_[0],A[1]=_[1]*Math.cos(p)-_[2]*Math.sin(p),A[2]=_[1]*Math.sin(p)+_[2]*Math.cos(p),y[0]=A[0]+a[0],y[1]=A[1]+a[1],y[2]=A[2]+a[2],y}function w(n,a,p,h){const y=h??new f(3),_=[],A=[];return _[0]=n[0]-a[0],_[1]=n[1]-a[1],_[2]=n[2]-a[2],A[0]=_[2]*Math.sin(p)+_[0]*Math.cos(p),A[1]=_[1],A[2]=_[2]*Math.cos(p)-_[0]*Math.sin(p),y[0]=A[0]+a[0],y[1]=A[1]+a[1],y[2]=A[2]+a[2],y}function t(n,a,p,h){const y=h??new f(3),_=[],A=[];return _[0]=n[0]-a[0],_[1]=n[1]-a[1],_[2]=n[2]-a[2],A[0]=_[0]*Math.cos(p)-_[1]*Math.sin(p),A[1]=_[0]*Math.sin(p)+_[1]*Math.cos(p),A[2]=_[2],y[0]=A[0]+a[0],y[1]=A[1]+a[1],y[2]=A[2]+a[2],y}function l(n,a,p){const h=p??new f(3);return Z(n,h),X(h,a,h)}function r(n,a,p){const h=p??new f(3);return lt(n)>a?l(n,a,h):H(n,h)}function o(n,a,p){const h=p??new f(3);return J(n,a,.5,h)}return{create:i,fromValues:v,set:x,ceil:M,floor:P,round:U,clamp:$,add:I,addScaled:N,angle:G,subtract:F,sub:j,equalsApproximately:Q,equals:nt,lerp:J,lerpV:ft,max:V,min:O,mulScalar:X,scale:at,divScalar:pt,inverse:ct,invert:Mt,cross:gt,dot:mt,length:lt,len:Dt,lengthSq:St,lenSq:Lt,distance:ht,dist:K,distanceSq:Y,distSq:C,normalize:Z,negate:It,copy:H,clone:it,multiply:ut,mul:Ut,divide:dt,div:At,random:_t,zero:b,transformMat4:S,transformMat4Upper3x3:d,transformMat3:e,transformQuat:c,getTranslation:s,getAxis:u,getScaling:g,rotateX:m,rotateY:w,rotateZ:t,setLength:l,truncate:r,midpoint:o}}const ce=new Map;function Kt(f){let i=ce.get(f);return i||(i=xe(f),ce.set(f,i)),i}function ye(f){const i=ge(f),v=Kt(f);function x(e,c,s,u,g,m,w,t,l){const r=new f(12);return r[3]=0,r[7]=0,r[11]=0,e!==void 0&&(r[0]=e,c!==void 0&&(r[1]=c,s!==void 0&&(r[2]=s,u!==void 0&&(r[4]=u,g!==void 0&&(r[5]=g,m!==void 0&&(r[6]=m,w!==void 0&&(r[8]=w,t!==void 0&&(r[9]=t,l!==void 0&&(r[10]=l))))))))),r}function M(e,c,s,u,g,m,w,t,l,r){const o=r??new f(12);return o[0]=e,o[1]=c,o[2]=s,o[3]=0,o[4]=u,o[5]=g,o[6]=m,o[7]=0,o[8]=w,o[9]=t,o[10]=l,o[11]=0,o}function P(e,c){const s=c??new f(12);return s[0]=e[0],s[1]=e[1],s[2]=e[2],s[3]=0,s[4]=e[4],s[5]=e[5],s[6]=e[6],s[7]=0,s[8]=e[8],s[9]=e[9],s[10]=e[10],s[11]=0,s}function U(e,c){const s=c??new f(12),u=e[0],g=e[1],m=e[2],w=e[3],t=u+u,l=g+g,r=m+m,o=u*t,n=g*t,a=g*l,p=m*t,h=m*l,y=m*r,_=w*t,A=w*l,L=w*r;return s[0]=1-a-y,s[1]=n+L,s[2]=p-A,s[3]=0,s[4]=n-L,s[5]=1-o-y,s[6]=h+_,s[7]=0,s[8]=p+A,s[9]=h-_,s[10]=1-o-a,s[11]=0,s}function $(e,c){const s=c??new f(12);return s[0]=-e[0],s[1]=-e[1],s[2]=-e[2],s[4]=-e[4],s[5]=-e[5],s[6]=-e[6],s[8]=-e[8],s[9]=-e[9],s[10]=-e[10],s}function I(e,c,s){const u=s??new f(12);return u[0]=e[0]*c,u[1]=e[1]*c,u[2]=e[2]*c,u[4]=e[4]*c,u[5]=e[5]*c,u[6]=e[6]*c,u[8]=e[8]*c,u[9]=e[9]*c,u[10]=e[10]*c,u}const N=I;function G(e,c,s){const u=s??new f(12);return u[0]=e[0]+c[0],u[1]=e[1]+c[1],u[2]=e[2]+c[2],u[4]=e[4]+c[4],u[5]=e[5]+c[5],u[6]=e[6]+c[6],u[8]=e[8]+c[8],u[9]=e[9]+c[9],u[10]=e[10]+c[10],u}function F(e,c){const s=c??new f(12);return s[0]=e[0],s[1]=e[1],s[2]=e[2],s[4]=e[4],s[5]=e[5],s[6]=e[6],s[8]=e[8],s[9]=e[9],s[10]=e[10],s}const j=F;function Q(e,c){return Math.abs(e[0]-c[0])<W&&Math.abs(e[1]-c[1])<W&&Math.abs(e[2]-c[2])<W&&Math.abs(e[4]-c[4])<W&&Math.abs(e[5]-c[5])<W&&Math.abs(e[6]-c[6])<W&&Math.abs(e[8]-c[8])<W&&Math.abs(e[9]-c[9])<W&&Math.abs(e[10]-c[10])<W}function nt(e,c){return e[0]===c[0]&&e[1]===c[1]&&e[2]===c[2]&&e[4]===c[4]&&e[5]===c[5]&&e[6]===c[6]&&e[8]===c[8]&&e[9]===c[9]&&e[10]===c[10]}function J(e){const c=e??new f(12);return c[0]=1,c[1]=0,c[2]=0,c[4]=0,c[5]=1,c[6]=0,c[8]=0,c[9]=0,c[10]=1,c}function ft(e,c){const s=c??new f(12);if(s===e){let a;return a=e[1],e[1]=e[4],e[4]=a,a=e[2],e[2]=e[8],e[8]=a,a=e[6],e[6]=e[9],e[9]=a,s}const u=e[0],g=e[1],m=e[2],w=e[4],t=e[5],l=e[6],r=e[8],o=e[9],n=e[10];return s[0]=u,s[1]=w,s[2]=r,s[4]=g,s[5]=t,s[6]=o,s[8]=m,s[9]=l,s[10]=n,s}function V(e,c){const s=c??new f(12),u=e[0],g=e[1],m=e[2],w=e[4],t=e[5],l=e[6],r=e[8],o=e[9],n=e[10],a=n*t-l*o,p=-n*w+l*r,h=o*w-t*r,y=1/(u*a+g*p+m*h);return s[0]=a*y,s[1]=(-n*g+m*o)*y,s[2]=(l*g-m*t)*y,s[4]=p*y,s[5]=(n*u-m*r)*y,s[6]=(-l*u+m*w)*y,s[8]=h*y,s[9]=(-o*u+g*r)*y,s[10]=(t*u-g*w)*y,s}function O(e){const c=e[0],s=e[1],u=e[2],g=e[4],m=e[5],w=e[6],t=e[8],l=e[9],r=e[10];return c*(m*r-l*w)-g*(s*r-l*u)+t*(s*w-m*u)}const X=V;function at(e,c,s){const u=s??new f(12),g=e[0],m=e[1],w=e[2],t=e[4],l=e[5],r=e[6],o=e[8],n=e[9],a=e[10],p=c[0],h=c[1],y=c[2],_=c[4],A=c[5],L=c[6],R=c[8],z=c[9],D=c[10];return u[0]=g*p+t*h+o*y,u[1]=m*p+l*h+n*y,u[2]=w*p+r*h+a*y,u[4]=g*_+t*A+o*L,u[5]=m*_+l*A+n*L,u[6]=w*_+r*A+a*L,u[8]=g*R+t*z+o*D,u[9]=m*R+l*z+n*D,u[10]=w*R+r*z+a*D,u}const pt=at;function ct(e,c,s){const u=s??J();return e!==u&&(u[0]=e[0],u[1]=e[1],u[2]=e[2],u[4]=e[4],u[5]=e[5],u[6]=e[6]),u[8]=c[0],u[9]=c[1],u[10]=1,u}function Mt(e,c){const s=c??i.create();return s[0]=e[8],s[1]=e[9],s}function gt(e,c,s){const u=s??i.create(),g=c*4;return u[0]=e[g+0],u[1]=e[g+1],u}function mt(e,c,s,u){const g=u===e?e:F(e,u),m=s*4;return g[m+0]=c[0],g[m+1]=c[1],g}function lt(e,c){const s=c??i.create(),u=e[0],g=e[1],m=e[4],w=e[5];return s[0]=Math.sqrt(u*u+g*g),s[1]=Math.sqrt(m*m+w*w),s}function Dt(e,c){const s=c??v.create(),u=e[0],g=e[1],m=e[2],w=e[4],t=e[5],l=e[6],r=e[8],o=e[9],n=e[10];return s[0]=Math.sqrt(u*u+g*g+m*m),s[1]=Math.sqrt(w*w+t*t+l*l),s[2]=Math.sqrt(r*r+o*o+n*n),s}function St(e,c){const s=c??new f(12);return s[0]=1,s[1]=0,s[2]=0,s[4]=0,s[5]=1,s[6]=0,s[8]=e[0],s[9]=e[1],s[10]=1,s}function Lt(e,c,s){const u=s??new f(12),g=c[0],m=c[1],w=e[0],t=e[1],l=e[2],r=e[4],o=e[5],n=e[6],a=e[8],p=e[9],h=e[10];return e!==u&&(u[0]=w,u[1]=t,u[2]=l,u[4]=r,u[5]=o,u[6]=n),u[8]=w*g+r*m+a,u[9]=t*g+o*m+p,u[10]=l*g+n*m+h,u}function ht(e,c){const s=c??new f(12),u=Math.cos(e),g=Math.sin(e);return s[0]=u,s[1]=g,s[2]=0,s[4]=-g,s[5]=u,s[6]=0,s[8]=0,s[9]=0,s[10]=1,s}function K(e,c,s){const u=s??new f(12),g=e[0],m=e[1],w=e[2],t=e[4],l=e[5],r=e[6],o=Math.cos(c),n=Math.sin(c);return u[0]=o*g+n*t,u[1]=o*m+n*l,u[2]=o*w+n*r,u[4]=o*t-n*g,u[5]=o*l-n*m,u[6]=o*r-n*w,e!==u&&(u[8]=e[8],u[9]=e[9],u[10]=e[10]),u}function Y(e,c){const s=c??new f(12),u=Math.cos(e),g=Math.sin(e);return s[0]=1,s[1]=0,s[2]=0,s[4]=0,s[5]=u,s[6]=g,s[8]=0,s[9]=-g,s[10]=u,s}function C(e,c,s){const u=s??new f(12),g=e[4],m=e[5],w=e[6],t=e[8],l=e[9],r=e[10],o=Math.cos(c),n=Math.sin(c);return u[4]=o*g+n*t,u[5]=o*m+n*l,u[6]=o*w+n*r,u[8]=o*t-n*g,u[9]=o*l-n*m,u[10]=o*r-n*w,e!==u&&(u[0]=e[0],u[1]=e[1],u[2]=e[2]),u}function Z(e,c){const s=c??new f(12),u=Math.cos(e),g=Math.sin(e);return s[0]=u,s[1]=0,s[2]=-g,s[4]=0,s[5]=1,s[6]=0,s[8]=g,s[9]=0,s[10]=u,s}function It(e,c,s){const u=s??new f(12),g=e[0],m=e[1],w=e[2],t=e[8],l=e[9],r=e[10],o=Math.cos(c),n=Math.sin(c);return u[0]=o*g-n*t,u[1]=o*m-n*l,u[2]=o*w-n*r,u[8]=o*t+n*g,u[9]=o*l+n*m,u[10]=o*r+n*w,e!==u&&(u[4]=e[4],u[5]=e[5],u[6]=e[6]),u}const H=ht,it=K;function ut(e,c){const s=c??new f(12);return s[0]=e[0],s[1]=0,s[2]=0,s[4]=0,s[5]=e[1],s[6]=0,s[8]=0,s[9]=0,s[10]=1,s}function Ut(e,c,s){const u=s??new f(12),g=c[0],m=c[1];return u[0]=g*e[0],u[1]=g*e[1],u[2]=g*e[2],u[4]=m*e[4],u[5]=m*e[5],u[6]=m*e[6],e!==u&&(u[8]=e[8],u[9]=e[9],u[10]=e[10]),u}function dt(e,c){const s=c??new f(12);return s[0]=e[0],s[1]=0,s[2]=0,s[4]=0,s[5]=e[1],s[6]=0,s[8]=0,s[9]=0,s[10]=e[2],s}function At(e,c,s){const u=s??new f(12),g=c[0],m=c[1],w=c[2];return u[0]=g*e[0],u[1]=g*e[1],u[2]=g*e[2],u[4]=m*e[4],u[5]=m*e[5],u[6]=m*e[6],u[8]=w*e[8],u[9]=w*e[9],u[10]=w*e[10],u}function _t(e,c){const s=c??new f(12);return s[0]=e,s[1]=0,s[2]=0,s[4]=0,s[5]=e,s[6]=0,s[8]=0,s[9]=0,s[10]=1,s}function b(e,c,s){const u=s??new f(12);return u[0]=c*e[0],u[1]=c*e[1],u[2]=c*e[2],u[4]=c*e[4],u[5]=c*e[5],u[6]=c*e[6],e!==u&&(u[8]=e[8],u[9]=e[9],u[10]=e[10]),u}function S(e,c){const s=c??new f(12);return s[0]=e,s[1]=0,s[2]=0,s[4]=0,s[5]=e,s[6]=0,s[8]=0,s[9]=0,s[10]=e,s}function d(e,c,s){const u=s??new f(12);return u[0]=c*e[0],u[1]=c*e[1],u[2]=c*e[2],u[4]=c*e[4],u[5]=c*e[5],u[6]=c*e[6],u[8]=c*e[8],u[9]=c*e[9],u[10]=c*e[10],u}return{add:G,clone:j,copy:F,create:x,determinant:O,equals:nt,equalsApproximately:Q,fromMat4:P,fromQuat:U,get3DScaling:Dt,getAxis:gt,getScaling:lt,getTranslation:Mt,identity:J,inverse:V,invert:X,mul:pt,mulScalar:N,multiply:at,multiplyScalar:I,negate:$,rotate:K,rotateX:C,rotateY:It,rotateZ:it,rotation:ht,rotationX:Y,rotationY:Z,rotationZ:H,scale:Ut,scale3D:At,scaling:ut,scaling3D:dt,set:M,setAxis:mt,setTranslation:ct,translate:Lt,translation:St,transpose:ft,uniformScale:b,uniformScale3D:d,uniformScaling:_t,uniformScaling3D:S}}const le=new Map;function be(f){let i=le.get(f);return i||(i=ye(f),le.set(f,i)),i}function Me(f){const i=Kt(f);function v(t,l,r,o,n,a,p,h,y,_,A,L,R,z,D,T){const E=new f(16);return t!==void 0&&(E[0]=t,l!==void 0&&(E[1]=l,r!==void 0&&(E[2]=r,o!==void 0&&(E[3]=o,n!==void 0&&(E[4]=n,a!==void 0&&(E[5]=a,p!==void 0&&(E[6]=p,h!==void 0&&(E[7]=h,y!==void 0&&(E[8]=y,_!==void 0&&(E[9]=_,A!==void 0&&(E[10]=A,L!==void 0&&(E[11]=L,R!==void 0&&(E[12]=R,z!==void 0&&(E[13]=z,D!==void 0&&(E[14]=D,T!==void 0&&(E[15]=T)))))))))))))))),E}function x(t,l,r,o,n,a,p,h,y,_,A,L,R,z,D,T,E){const B=E??new f(16);return B[0]=t,B[1]=l,B[2]=r,B[3]=o,B[4]=n,B[5]=a,B[6]=p,B[7]=h,B[8]=y,B[9]=_,B[10]=A,B[11]=L,B[12]=R,B[13]=z,B[14]=D,B[15]=T,B}function M(t,l){const r=l??new f(16);return r[0]=t[0],r[1]=t[1],r[2]=t[2],r[3]=0,r[4]=t[4],r[5]=t[5],r[6]=t[6],r[7]=0,r[8]=t[8],r[9]=t[9],r[10]=t[10],r[11]=0,r[12]=0,r[13]=0,r[14]=0,r[15]=1,r}function P(t,l){const r=l??new f(16),o=t[0],n=t[1],a=t[2],p=t[3],h=o+o,y=n+n,_=a+a,A=o*h,L=n*h,R=n*y,z=a*h,D=a*y,T=a*_,E=p*h,B=p*y,q=p*_;return r[0]=1-R-T,r[1]=L+q,r[2]=z-B,r[3]=0,r[4]=L-q,r[5]=1-A-T,r[6]=D+E,r[7]=0,r[8]=z+B,r[9]=D-E,r[10]=1-A-R,r[11]=0,r[12]=0,r[13]=0,r[14]=0,r[15]=1,r}function U(t,l){const r=l??new f(16);return r[0]=-t[0],r[1]=-t[1],r[2]=-t[2],r[3]=-t[3],r[4]=-t[4],r[5]=-t[5],r[6]=-t[6],r[7]=-t[7],r[8]=-t[8],r[9]=-t[9],r[10]=-t[10],r[11]=-t[11],r[12]=-t[12],r[13]=-t[13],r[14]=-t[14],r[15]=-t[15],r}function $(t,l,r){const o=r??new f(16);return o[0]=t[0]+l[0],o[1]=t[1]+l[1],o[2]=t[2]+l[2],o[3]=t[3]+l[3],o[4]=t[4]+l[4],o[5]=t[5]+l[5],o[6]=t[6]+l[6],o[7]=t[7]+l[7],o[8]=t[8]+l[8],o[9]=t[9]+l[9],o[10]=t[10]+l[10],o[11]=t[11]+l[11],o[12]=t[12]+l[12],o[13]=t[13]+l[13],o[14]=t[14]+l[14],o[15]=t[15]+l[15],o}function I(t,l,r){const o=r??new f(16);return o[0]=t[0]*l,o[1]=t[1]*l,o[2]=t[2]*l,o[3]=t[3]*l,o[4]=t[4]*l,o[5]=t[5]*l,o[6]=t[6]*l,o[7]=t[7]*l,o[8]=t[8]*l,o[9]=t[9]*l,o[10]=t[10]*l,o[11]=t[11]*l,o[12]=t[12]*l,o[13]=t[13]*l,o[14]=t[14]*l,o[15]=t[15]*l,o}const N=I;function G(t,l){const r=l??new f(16);return r[0]=t[0],r[1]=t[1],r[2]=t[2],r[3]=t[3],r[4]=t[4],r[5]=t[5],r[6]=t[6],r[7]=t[7],r[8]=t[8],r[9]=t[9],r[10]=t[10],r[11]=t[11],r[12]=t[12],r[13]=t[13],r[14]=t[14],r[15]=t[15],r}const F=G;function j(t,l){return Math.abs(t[0]-l[0])<W&&Math.abs(t[1]-l[1])<W&&Math.abs(t[2]-l[2])<W&&Math.abs(t[3]-l[3])<W&&Math.abs(t[4]-l[4])<W&&Math.abs(t[5]-l[5])<W&&Math.abs(t[6]-l[6])<W&&Math.abs(t[7]-l[7])<W&&Math.abs(t[8]-l[8])<W&&Math.abs(t[9]-l[9])<W&&Math.abs(t[10]-l[10])<W&&Math.abs(t[11]-l[11])<W&&Math.abs(t[12]-l[12])<W&&Math.abs(t[13]-l[13])<W&&Math.abs(t[14]-l[14])<W&&Math.abs(t[15]-l[15])<W}function Q(t,l){return t[0]===l[0]&&t[1]===l[1]&&t[2]===l[2]&&t[3]===l[3]&&t[4]===l[4]&&t[5]===l[5]&&t[6]===l[6]&&t[7]===l[7]&&t[8]===l[8]&&t[9]===l[9]&&t[10]===l[10]&&t[11]===l[11]&&t[12]===l[12]&&t[13]===l[13]&&t[14]===l[14]&&t[15]===l[15]}function nt(t){const l=t??new f(16);return l[0]=1,l[1]=0,l[2]=0,l[3]=0,l[4]=0,l[5]=1,l[6]=0,l[7]=0,l[8]=0,l[9]=0,l[10]=1,l[11]=0,l[12]=0,l[13]=0,l[14]=0,l[15]=1,l}function J(t,l){const r=l??new f(16);if(r===t){let k;return k=t[1],t[1]=t[4],t[4]=k,k=t[2],t[2]=t[8],t[8]=k,k=t[3],t[3]=t[12],t[12]=k,k=t[6],t[6]=t[9],t[9]=k,k=t[7],t[7]=t[13],t[13]=k,k=t[11],t[11]=t[14],t[14]=k,r}const o=t[0],n=t[1],a=t[2],p=t[3],h=t[4],y=t[5],_=t[6],A=t[7],L=t[8],R=t[9],z=t[10],D=t[11],T=t[12],E=t[13],B=t[14],q=t[15];return r[0]=o,r[1]=h,r[2]=L,r[3]=T,r[4]=n,r[5]=y,r[6]=R,r[7]=E,r[8]=a,r[9]=_,r[10]=z,r[11]=B,r[12]=p,r[13]=A,r[14]=D,r[15]=q,r}function ft(t,l){const r=l??new f(16),o=t[0],n=t[1],a=t[2],p=t[3],h=t[4],y=t[5],_=t[6],A=t[7],L=t[8],R=t[9],z=t[10],D=t[11],T=t[12],E=t[13],B=t[14],q=t[15],k=z*q,et=B*D,tt=_*q,ot=B*A,st=_*D,wt=z*A,vt=a*q,xt=B*p,yt=a*D,bt=z*p,Et=a*A,Rt=_*p,zt=L*E,Tt=T*R,Bt=h*E,$t=T*y,Ot=h*R,kt=L*y,qt=o*E,Nt=T*n,jt=o*R,Ht=L*n,Wt=o*y,Xt=h*n,ie=k*y+ot*R+st*E-(et*y+tt*R+wt*E),re=et*n+vt*R+bt*E-(k*n+xt*R+yt*E),se=tt*n+xt*y+Et*E-(ot*n+vt*y+Rt*E),oe=wt*n+yt*y+Rt*R-(st*n+bt*y+Et*R),Pt=1/(o*ie+h*re+L*se+T*oe);return r[0]=Pt*ie,r[1]=Pt*re,r[2]=Pt*se,r[3]=Pt*oe,r[4]=Pt*(et*h+tt*L+wt*T-(k*h+ot*L+st*T)),r[5]=Pt*(k*o+xt*L+yt*T-(et*o+vt*L+bt*T)),r[6]=Pt*(ot*o+vt*h+Rt*T-(tt*o+xt*h+Et*T)),r[7]=Pt*(st*o+bt*h+Et*L-(wt*o+yt*h+Rt*L)),r[8]=Pt*(zt*A+$t*D+Ot*q-(Tt*A+Bt*D+kt*q)),r[9]=Pt*(Tt*p+qt*D+Ht*q-(zt*p+Nt*D+jt*q)),r[10]=Pt*(Bt*p+Nt*A+Wt*q-($t*p+qt*A+Xt*q)),r[11]=Pt*(kt*p+jt*A+Xt*D-(Ot*p+Ht*A+Wt*D)),r[12]=Pt*(Bt*z+kt*B+Tt*_-(Ot*B+zt*_+$t*z)),r[13]=Pt*(jt*B+zt*a+Nt*z-(qt*z+Ht*B+Tt*a)),r[14]=Pt*(qt*_+Xt*B+$t*a-(Wt*B+Bt*a+Nt*_)),r[15]=Pt*(Wt*z+Ot*a+Ht*_-(jt*_+Xt*z+kt*a)),r}function V(t){const l=t[0],r=t[1],o=t[2],n=t[3],a=t[4],p=t[5],h=t[6],y=t[7],_=t[8],A=t[9],L=t[10],R=t[11],z=t[12],D=t[13],T=t[14],E=t[15],B=L*E,q=T*R,k=h*E,et=T*y,tt=h*R,ot=L*y,st=o*E,wt=T*n,vt=o*R,xt=L*n,yt=o*y,bt=h*n,Et=B*p+et*A+tt*D-(q*p+k*A+ot*D),Rt=q*r+st*A+xt*D-(B*r+wt*A+vt*D),zt=k*r+wt*p+yt*D-(et*r+st*p+bt*D),Tt=ot*r+vt*p+bt*A-(tt*r+xt*p+yt*A);return l*Et+a*Rt+_*zt+z*Tt}const O=ft;function X(t,l,r){const o=r??new f(16),n=t[0],a=t[1],p=t[2],h=t[3],y=t[4],_=t[5],A=t[6],L=t[7],R=t[8],z=t[9],D=t[10],T=t[11],E=t[12],B=t[13],q=t[14],k=t[15],et=l[0],tt=l[1],ot=l[2],st=l[3],wt=l[4],vt=l[5],xt=l[6],yt=l[7],bt=l[8],Et=l[9],Rt=l[10],zt=l[11],Tt=l[12],Bt=l[13],$t=l[14],Ot=l[15];return o[0]=n*et+y*tt+R*ot+E*st,o[1]=a*et+_*tt+z*ot+B*st,o[2]=p*et+A*tt+D*ot+q*st,o[3]=h*et+L*tt+T*ot+k*st,o[4]=n*wt+y*vt+R*xt+E*yt,o[5]=a*wt+_*vt+z*xt+B*yt,o[6]=p*wt+A*vt+D*xt+q*yt,o[7]=h*wt+L*vt+T*xt+k*yt,o[8]=n*bt+y*Et+R*Rt+E*zt,o[9]=a*bt+_*Et+z*Rt+B*zt,o[10]=p*bt+A*Et+D*Rt+q*zt,o[11]=h*bt+L*Et+T*Rt+k*zt,o[12]=n*Tt+y*Bt+R*$t+E*Ot,o[13]=a*Tt+_*Bt+z*$t+B*Ot,o[14]=p*Tt+A*Bt+D*$t+q*Ot,o[15]=h*Tt+L*Bt+T*$t+k*Ot,o}const at=X;function pt(t,l,r){const o=r??nt();return t!==o&&(o[0]=t[0],o[1]=t[1],o[2]=t[2],o[3]=t[3],o[4]=t[4],o[5]=t[5],o[6]=t[6],o[7]=t[7],o[8]=t[8],o[9]=t[9],o[10]=t[10],o[11]=t[11]),o[12]=l[0],o[13]=l[1],o[14]=l[2],o[15]=1,o}function ct(t,l){const r=l??i.create();return r[0]=t[12],r[1]=t[13],r[2]=t[14],r}function Mt(t,l,r){const o=r??i.create(),n=l*4;return o[0]=t[n+0],o[1]=t[n+1],o[2]=t[n+2],o}function gt(t,l,r,o){const n=o===t?o:G(t,o),a=r*4;return n[a+0]=l[0],n[a+1]=l[1],n[a+2]=l[2],n}function mt(t,l){const r=l??i.create(),o=t[0],n=t[1],a=t[2],p=t[4],h=t[5],y=t[6],_=t[8],A=t[9],L=t[10];return r[0]=Math.sqrt(o*o+n*n+a*a),r[1]=Math.sqrt(p*p+h*h+y*y),r[2]=Math.sqrt(_*_+A*A+L*L),r}function lt(t,l,r,o,n){const a=n??new f(16),p=Math.tan(Math.PI*.5-.5*t);if(a[0]=p/l,a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=p,a[6]=0,a[7]=0,a[8]=0,a[9]=0,a[11]=-1,a[12]=0,a[13]=0,a[15]=0,Number.isFinite(o)){const h=1/(r-o);a[10]=o*h,a[14]=o*r*h}else a[10]=-1,a[14]=-r;return a}function Dt(t,l,r,o=1/0,n){const a=n??new f(16),p=1/Math.tan(t*.5);if(a[0]=p/l,a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=p,a[6]=0,a[7]=0,a[8]=0,a[9]=0,a[11]=-1,a[12]=0,a[13]=0,a[15]=0,o===1/0)a[10]=0,a[14]=r;else{const h=1/(o-r);a[10]=r*h,a[14]=o*r*h}return a}function St(t,l,r,o,n,a,p){const h=p??new f(16);return h[0]=2/(l-t),h[1]=0,h[2]=0,h[3]=0,h[4]=0,h[5]=2/(o-r),h[6]=0,h[7]=0,h[8]=0,h[9]=0,h[10]=1/(n-a),h[11]=0,h[12]=(l+t)/(t-l),h[13]=(o+r)/(r-o),h[14]=n/(n-a),h[15]=1,h}function Lt(t,l,r,o,n,a,p){const h=p??new f(16),y=l-t,_=o-r,A=n-a;return h[0]=2*n/y,h[1]=0,h[2]=0,h[3]=0,h[4]=0,h[5]=2*n/_,h[6]=0,h[7]=0,h[8]=(t+l)/y,h[9]=(o+r)/_,h[10]=a/A,h[11]=-1,h[12]=0,h[13]=0,h[14]=n*a/A,h[15]=0,h}function ht(t,l,r,o,n,a=1/0,p){const h=p??new f(16),y=l-t,_=o-r;if(h[0]=2*n/y,h[1]=0,h[2]=0,h[3]=0,h[4]=0,h[5]=2*n/_,h[6]=0,h[7]=0,h[8]=(t+l)/y,h[9]=(o+r)/_,h[11]=-1,h[12]=0,h[13]=0,h[15]=0,a===1/0)h[10]=0,h[14]=n;else{const A=1/(a-n);h[10]=n*A,h[14]=a*n*A}return h}const K=i.create(),Y=i.create(),C=i.create();function Z(t,l,r,o){const n=o??new f(16);return i.normalize(i.subtract(l,t,C),C),i.normalize(i.cross(r,C,K),K),i.normalize(i.cross(C,K,Y),Y),n[0]=K[0],n[1]=K[1],n[2]=K[2],n[3]=0,n[4]=Y[0],n[5]=Y[1],n[6]=Y[2],n[7]=0,n[8]=C[0],n[9]=C[1],n[10]=C[2],n[11]=0,n[12]=t[0],n[13]=t[1],n[14]=t[2],n[15]=1,n}function It(t,l,r,o){const n=o??new f(16);return i.normalize(i.subtract(t,l,C),C),i.normalize(i.cross(r,C,K),K),i.normalize(i.cross(C,K,Y),Y),n[0]=K[0],n[1]=K[1],n[2]=K[2],n[3]=0,n[4]=Y[0],n[5]=Y[1],n[6]=Y[2],n[7]=0,n[8]=C[0],n[9]=C[1],n[10]=C[2],n[11]=0,n[12]=t[0],n[13]=t[1],n[14]=t[2],n[15]=1,n}function H(t,l,r,o){const n=o??new f(16);return i.normalize(i.subtract(t,l,C),C),i.normalize(i.cross(r,C,K),K),i.normalize(i.cross(C,K,Y),Y),n[0]=K[0],n[1]=Y[0],n[2]=C[0],n[3]=0,n[4]=K[1],n[5]=Y[1],n[6]=C[1],n[7]=0,n[8]=K[2],n[9]=Y[2],n[10]=C[2],n[11]=0,n[12]=-(K[0]*t[0]+K[1]*t[1]+K[2]*t[2]),n[13]=-(Y[0]*t[0]+Y[1]*t[1]+Y[2]*t[2]),n[14]=-(C[0]*t[0]+C[1]*t[1]+C[2]*t[2]),n[15]=1,n}function it(t,l){const r=l??new f(16);return r[0]=1,r[1]=0,r[2]=0,r[3]=0,r[4]=0,r[5]=1,r[6]=0,r[7]=0,r[8]=0,r[9]=0,r[10]=1,r[11]=0,r[12]=t[0],r[13]=t[1],r[14]=t[2],r[15]=1,r}function ut(t,l,r){const o=r??new f(16),n=l[0],a=l[1],p=l[2],h=t[0],y=t[1],_=t[2],A=t[3],L=t[4],R=t[5],z=t[6],D=t[7],T=t[8],E=t[9],B=t[10],q=t[11],k=t[12],et=t[13],tt=t[14],ot=t[15];return t!==o&&(o[0]=h,o[1]=y,o[2]=_,o[3]=A,o[4]=L,o[5]=R,o[6]=z,o[7]=D,o[8]=T,o[9]=E,o[10]=B,o[11]=q),o[12]=h*n+L*a+T*p+k,o[13]=y*n+R*a+E*p+et,o[14]=_*n+z*a+B*p+tt,o[15]=A*n+D*a+q*p+ot,o}function Ut(t,l){const r=l??new f(16),o=Math.cos(t),n=Math.sin(t);return r[0]=1,r[1]=0,r[2]=0,r[3]=0,r[4]=0,r[5]=o,r[6]=n,r[7]=0,r[8]=0,r[9]=-n,r[10]=o,r[11]=0,r[12]=0,r[13]=0,r[14]=0,r[15]=1,r}function dt(t,l,r){const o=r??new f(16),n=t[4],a=t[5],p=t[6],h=t[7],y=t[8],_=t[9],A=t[10],L=t[11],R=Math.cos(l),z=Math.sin(l);return o[4]=R*n+z*y,o[5]=R*a+z*_,o[6]=R*p+z*A,o[7]=R*h+z*L,o[8]=R*y-z*n,o[9]=R*_-z*a,o[10]=R*A-z*p,o[11]=R*L-z*h,t!==o&&(o[0]=t[0],o[1]=t[1],o[2]=t[2],o[3]=t[3],o[12]=t[12],o[13]=t[13],o[14]=t[14],o[15]=t[15]),o}function At(t,l){const r=l??new f(16),o=Math.cos(t),n=Math.sin(t);return r[0]=o,r[1]=0,r[2]=-n,r[3]=0,r[4]=0,r[5]=1,r[6]=0,r[7]=0,r[8]=n,r[9]=0,r[10]=o,r[11]=0,r[12]=0,r[13]=0,r[14]=0,r[15]=1,r}function _t(t,l,r){const o=r??new f(16),n=t[0],a=t[1],p=t[2],h=t[3],y=t[8],_=t[9],A=t[10],L=t[11],R=Math.cos(l),z=Math.sin(l);return o[0]=R*n-z*y,o[1]=R*a-z*_,o[2]=R*p-z*A,o[3]=R*h-z*L,o[8]=R*y+z*n,o[9]=R*_+z*a,o[10]=R*A+z*p,o[11]=R*L+z*h,t!==o&&(o[4]=t[4],o[5]=t[5],o[6]=t[6],o[7]=t[7],o[12]=t[12],o[13]=t[13],o[14]=t[14],o[15]=t[15]),o}function b(t,l){const r=l??new f(16),o=Math.cos(t),n=Math.sin(t);return r[0]=o,r[1]=n,r[2]=0,r[3]=0,r[4]=-n,r[5]=o,r[6]=0,r[7]=0,r[8]=0,r[9]=0,r[10]=1,r[11]=0,r[12]=0,r[13]=0,r[14]=0,r[15]=1,r}function S(t,l,r){const o=r??new f(16),n=t[0],a=t[1],p=t[2],h=t[3],y=t[4],_=t[5],A=t[6],L=t[7],R=Math.cos(l),z=Math.sin(l);return o[0]=R*n+z*y,o[1]=R*a+z*_,o[2]=R*p+z*A,o[3]=R*h+z*L,o[4]=R*y-z*n,o[5]=R*_-z*a,o[6]=R*A-z*p,o[7]=R*L-z*h,t!==o&&(o[8]=t[8],o[9]=t[9],o[10]=t[10],o[11]=t[11],o[12]=t[12],o[13]=t[13],o[14]=t[14],o[15]=t[15]),o}function d(t,l,r){const o=r??new f(16);let n=t[0],a=t[1],p=t[2];const h=Math.sqrt(n*n+a*a+p*p);n/=h,a/=h,p/=h;const y=n*n,_=a*a,A=p*p,L=Math.cos(l),R=Math.sin(l),z=1-L;return o[0]=y+(1-y)*L,o[1]=n*a*z+p*R,o[2]=n*p*z-a*R,o[3]=0,o[4]=n*a*z-p*R,o[5]=_+(1-_)*L,o[6]=a*p*z+n*R,o[7]=0,o[8]=n*p*z+a*R,o[9]=a*p*z-n*R,o[10]=A+(1-A)*L,o[11]=0,o[12]=0,o[13]=0,o[14]=0,o[15]=1,o}const e=d;function c(t,l,r,o){const n=o??new f(16);let a=l[0],p=l[1],h=l[2];const y=Math.sqrt(a*a+p*p+h*h);a/=y,p/=y,h/=y;const _=a*a,A=p*p,L=h*h,R=Math.cos(r),z=Math.sin(r),D=1-R,T=_+(1-_)*R,E=a*p*D+h*z,B=a*h*D-p*z,q=a*p*D-h*z,k=A+(1-A)*R,et=p*h*D+a*z,tt=a*h*D+p*z,ot=p*h*D-a*z,st=L+(1-L)*R,wt=t[0],vt=t[1],xt=t[2],yt=t[3],bt=t[4],Et=t[5],Rt=t[6],zt=t[7],Tt=t[8],Bt=t[9],$t=t[10],Ot=t[11];return n[0]=T*wt+E*bt+B*Tt,n[1]=T*vt+E*Et+B*Bt,n[2]=T*xt+E*Rt+B*$t,n[3]=T*yt+E*zt+B*Ot,n[4]=q*wt+k*bt+et*Tt,n[5]=q*vt+k*Et+et*Bt,n[6]=q*xt+k*Rt+et*$t,n[7]=q*yt+k*zt+et*Ot,n[8]=tt*wt+ot*bt+st*Tt,n[9]=tt*vt+ot*Et+st*Bt,n[10]=tt*xt+ot*Rt+st*$t,n[11]=tt*yt+ot*zt+st*Ot,t!==n&&(n[12]=t[12],n[13]=t[13],n[14]=t[14],n[15]=t[15]),n}const s=c;function u(t,l){const r=l??new f(16);return r[0]=t[0],r[1]=0,r[2]=0,r[3]=0,r[4]=0,r[5]=t[1],r[6]=0,r[7]=0,r[8]=0,r[9]=0,r[10]=t[2],r[11]=0,r[12]=0,r[13]=0,r[14]=0,r[15]=1,r}function g(t,l,r){const o=r??new f(16),n=l[0],a=l[1],p=l[2];return o[0]=n*t[0],o[1]=n*t[1],o[2]=n*t[2],o[3]=n*t[3],o[4]=a*t[4],o[5]=a*t[5],o[6]=a*t[6],o[7]=a*t[7],o[8]=p*t[8],o[9]=p*t[9],o[10]=p*t[10],o[11]=p*t[11],t!==o&&(o[12]=t[12],o[13]=t[13],o[14]=t[14],o[15]=t[15]),o}function m(t,l){const r=l??new f(16);return r[0]=t,r[1]=0,r[2]=0,r[3]=0,r[4]=0,r[5]=t,r[6]=0,r[7]=0,r[8]=0,r[9]=0,r[10]=t,r[11]=0,r[12]=0,r[13]=0,r[14]=0,r[15]=1,r}function w(t,l,r){const o=r??new f(16);return o[0]=l*t[0],o[1]=l*t[1],o[2]=l*t[2],o[3]=l*t[3],o[4]=l*t[4],o[5]=l*t[5],o[6]=l*t[6],o[7]=l*t[7],o[8]=l*t[8],o[9]=l*t[9],o[10]=l*t[10],o[11]=l*t[11],t!==o&&(o[12]=t[12],o[13]=t[13],o[14]=t[14],o[15]=t[15]),o}return{add:$,aim:Z,axisRotate:c,axisRotation:d,cameraAim:It,clone:F,copy:G,create:v,determinant:V,equals:Q,equalsApproximately:j,fromMat3:M,fromQuat:P,frustum:Lt,frustumReverseZ:ht,getAxis:Mt,getScaling:mt,getTranslation:ct,identity:nt,inverse:ft,invert:O,lookAt:H,mul:at,mulScalar:N,multiply:X,multiplyScalar:I,negate:U,ortho:St,perspective:lt,perspectiveReverseZ:Dt,rotate:s,rotateX:dt,rotateY:_t,rotateZ:S,rotation:e,rotationX:Ut,rotationY:At,rotationZ:b,scale:g,scaling:u,set:x,setAxis:gt,setTranslation:pt,translate:ut,translation:it,transpose:J,uniformScale:w,uniformScaling:m}}const ue=new Map;function Se(f){let i=ue.get(f);return i||(i=Me(f),ue.set(f,i)),i}function _e(f){const i=Kt(f);function v(b,S,d,e){const c=new f(4);return b!==void 0&&(c[0]=b,S!==void 0&&(c[1]=S,d!==void 0&&(c[2]=d,e!==void 0&&(c[3]=e)))),c}const x=v;function M(b,S,d,e,c){const s=c??new f(4);return s[0]=b,s[1]=S,s[2]=d,s[3]=e,s}function P(b,S,d){const e=d??new f(4),c=S*.5,s=Math.sin(c);return e[0]=s*b[0],e[1]=s*b[1],e[2]=s*b[2],e[3]=Math.cos(c),e}function U(b,S){const d=S??i.create(3),e=Math.acos(b[3])*2,c=Math.sin(e*.5);return c>W?(d[0]=b[0]/c,d[1]=b[1]/c,d[2]=b[2]/c):(d[0]=1,d[1]=0,d[2]=0),{angle:e,axis:d}}function $(b,S){const d=lt(b,S);return Math.acos(2*d*d-1)}function I(b,S,d){const e=d??new f(4),c=b[0],s=b[1],u=b[2],g=b[3],m=S[0],w=S[1],t=S[2],l=S[3];return e[0]=c*l+g*m+s*t-u*w,e[1]=s*l+g*w+u*m-c*t,e[2]=u*l+g*t+c*w-s*m,e[3]=g*l-c*m-s*w-u*t,e}const N=I;function G(b,S,d){const e=d??new f(4),c=S*.5,s=b[0],u=b[1],g=b[2],m=b[3],w=Math.sin(c),t=Math.cos(c);return e[0]=s*t+m*w,e[1]=u*t+g*w,e[2]=g*t-u*w,e[3]=m*t-s*w,e}function F(b,S,d){const e=d??new f(4),c=S*.5,s=b[0],u=b[1],g=b[2],m=b[3],w=Math.sin(c),t=Math.cos(c);return e[0]=s*t-g*w,e[1]=u*t+m*w,e[2]=g*t+s*w,e[3]=m*t-u*w,e}function j(b,S,d){const e=d??new f(4),c=S*.5,s=b[0],u=b[1],g=b[2],m=b[3],w=Math.sin(c),t=Math.cos(c);return e[0]=s*t+u*w,e[1]=u*t-s*w,e[2]=g*t+m*w,e[3]=m*t-g*w,e}function Q(b,S,d,e){const c=e??new f(4),s=b[0],u=b[1],g=b[2],m=b[3];let w=S[0],t=S[1],l=S[2],r=S[3],o=s*w+u*t+g*l+m*r;o<0&&(o=-o,w=-w,t=-t,l=-l,r=-r);let n,a;if(1-o>W){const p=Math.acos(o),h=Math.sin(p);n=Math.sin((1-d)*p)/h,a=Math.sin(d*p)/h}else n=1-d,a=d;return c[0]=n*s+a*w,c[1]=n*u+a*t,c[2]=n*g+a*l,c[3]=n*m+a*r,c}function nt(b,S){const d=S??new f(4),e=b[0],c=b[1],s=b[2],u=b[3],g=e*e+c*c+s*s+u*u,m=g?1/g:0;return d[0]=-e*m,d[1]=-c*m,d[2]=-s*m,d[3]=u*m,d}function J(b,S){const d=S??new f(4);return d[0]=-b[0],d[1]=-b[1],d[2]=-b[2],d[3]=b[3],d}function ft(b,S){const d=S??new f(4),e=b[0]+b[5]+b[10];if(e>0){const c=Math.sqrt(e+1);d[3]=.5*c;const s=.5/c;d[0]=(b[6]-b[9])*s,d[1]=(b[8]-b[2])*s,d[2]=(b[1]-b[4])*s}else{let c=0;b[5]>b[0]&&(c=1),b[10]>b[c*4+c]&&(c=2);const s=(c+1)%3,u=(c+2)%3,g=Math.sqrt(b[c*4+c]-b[s*4+s]-b[u*4+u]+1);d[c]=.5*g;const m=.5/g;d[3]=(b[s*4+u]-b[u*4+s])*m,d[s]=(b[s*4+c]+b[c*4+s])*m,d[u]=(b[u*4+c]+b[c*4+u])*m}return d}function V(b,S,d,e,c){const s=c??new f(4),u=b*.5,g=S*.5,m=d*.5,w=Math.sin(u),t=Math.cos(u),l=Math.sin(g),r=Math.cos(g),o=Math.sin(m),n=Math.cos(m);switch(e){case"xyz":s[0]=w*r*n+t*l*o,s[1]=t*l*n-w*r*o,s[2]=t*r*o+w*l*n,s[3]=t*r*n-w*l*o;break;case"xzy":s[0]=w*r*n-t*l*o,s[1]=t*l*n-w*r*o,s[2]=t*r*o+w*l*n,s[3]=t*r*n+w*l*o;break;case"yxz":s[0]=w*r*n+t*l*o,s[1]=t*l*n-w*r*o,s[2]=t*r*o-w*l*n,s[3]=t*r*n+w*l*o;break;case"yzx":s[0]=w*r*n+t*l*o,s[1]=t*l*n+w*r*o,s[2]=t*r*o-w*l*n,s[3]=t*r*n-w*l*o;break;case"zxy":s[0]=w*r*n-t*l*o,s[1]=t*l*n+w*r*o,s[2]=t*r*o+w*l*n,s[3]=t*r*n-w*l*o;break;case"zyx":s[0]=w*r*n-t*l*o,s[1]=t*l*n+w*r*o,s[2]=t*r*o-w*l*n,s[3]=t*r*n+w*l*o;break;default:throw new Error(`Unknown rotation order: ${e}`)}return s}function O(b,S){const d=S??new f(4);return d[0]=b[0],d[1]=b[1],d[2]=b[2],d[3]=b[3],d}const X=O;function at(b,S,d){const e=d??new f(4);return e[0]=b[0]+S[0],e[1]=b[1]+S[1],e[2]=b[2]+S[2],e[3]=b[3]+S[3],e}function pt(b,S,d){const e=d??new f(4);return e[0]=b[0]-S[0],e[1]=b[1]-S[1],e[2]=b[2]-S[2],e[3]=b[3]-S[3],e}const ct=pt;function Mt(b,S,d){const e=d??new f(4);return e[0]=b[0]*S,e[1]=b[1]*S,e[2]=b[2]*S,e[3]=b[3]*S,e}const gt=Mt;function mt(b,S,d){const e=d??new f(4);return e[0]=b[0]/S,e[1]=b[1]/S,e[2]=b[2]/S,e[3]=b[3]/S,e}function lt(b,S){return b[0]*S[0]+b[1]*S[1]+b[2]*S[2]+b[3]*S[3]}function Dt(b,S,d,e){const c=e??new f(4);return c[0]=b[0]+d*(S[0]-b[0]),c[1]=b[1]+d*(S[1]-b[1]),c[2]=b[2]+d*(S[2]-b[2]),c[3]=b[3]+d*(S[3]-b[3]),c}function St(b){const S=b[0],d=b[1],e=b[2],c=b[3];return Math.sqrt(S*S+d*d+e*e+c*c)}const Lt=St;function ht(b){const S=b[0],d=b[1],e=b[2],c=b[3];return S*S+d*d+e*e+c*c}const K=ht;function Y(b,S){const d=S??new f(4),e=b[0],c=b[1],s=b[2],u=b[3],g=Math.sqrt(e*e+c*c+s*s+u*u);return g>1e-5?(d[0]=e/g,d[1]=c/g,d[2]=s/g,d[3]=u/g):(d[0]=0,d[1]=0,d[2]=0,d[3]=1),d}function C(b,S){return Math.abs(b[0]-S[0])<W&&Math.abs(b[1]-S[1])<W&&Math.abs(b[2]-S[2])<W&&Math.abs(b[3]-S[3])<W}function Z(b,S){return b[0]===S[0]&&b[1]===S[1]&&b[2]===S[2]&&b[3]===S[3]}function It(b){const S=b??new f(4);return S[0]=0,S[1]=0,S[2]=0,S[3]=1,S}const H=i.create(),it=i.create(),ut=i.create();function Ut(b,S,d){const e=d??new f(4),c=i.dot(b,S);return c<-.999999?(i.cross(it,b,H),i.len(H)<1e-6&&i.cross(ut,b,H),i.normalize(H,H),P(H,Math.PI,e),e):c>.999999?(e[0]=0,e[1]=0,e[2]=0,e[3]=1,e):(i.cross(b,S,H),e[0]=H[0],e[1]=H[1],e[2]=H[2],e[3]=1+c,Y(e,e))}const dt=new f(4),At=new f(4);function _t(b,S,d,e,c,s){const u=s??new f(4);return Q(b,e,c,dt),Q(S,d,c,At),Q(dt,At,2*c*(1-c),u),u}return{create:v,fromValues:x,set:M,fromAxisAngle:P,toAxisAngle:U,angle:$,multiply:I,mul:N,rotateX:G,rotateY:F,rotateZ:j,slerp:Q,inverse:nt,conjugate:J,fromMat:ft,fromEuler:V,copy:O,clone:X,add:at,subtract:pt,sub:ct,mulScalar:Mt,scale:gt,divScalar:mt,dot:lt,lerp:Dt,length:St,len:Lt,lengthSq:ht,lenSq:K,normalize:Y,equalsApproximately:C,equals:Z,identity:It,rotationTo:Ut,sqlerp:_t}}const fe=new Map;function De(f){let i=fe.get(f);return i||(i=_e(f),fe.set(f,i)),i}function Ae(f){function i(d,e,c,s){const u=new f(4);return d!==void 0&&(u[0]=d,e!==void 0&&(u[1]=e,c!==void 0&&(u[2]=c,s!==void 0&&(u[3]=s)))),u}const v=i;function x(d,e,c,s,u){const g=u??new f(4);return g[0]=d,g[1]=e,g[2]=c,g[3]=s,g}function M(d,e){const c=e??new f(4);return c[0]=Math.ceil(d[0]),c[1]=Math.ceil(d[1]),c[2]=Math.ceil(d[2]),c[3]=Math.ceil(d[3]),c}function P(d,e){const c=e??new f(4);return c[0]=Math.floor(d[0]),c[1]=Math.floor(d[1]),c[2]=Math.floor(d[2]),c[3]=Math.floor(d[3]),c}function U(d,e){const c=e??new f(4);return c[0]=Math.round(d[0]),c[1]=Math.round(d[1]),c[2]=Math.round(d[2]),c[3]=Math.round(d[3]),c}function $(d,e=0,c=1,s){const u=s??new f(4);return u[0]=Math.min(c,Math.max(e,d[0])),u[1]=Math.min(c,Math.max(e,d[1])),u[2]=Math.min(c,Math.max(e,d[2])),u[3]=Math.min(c,Math.max(e,d[3])),u}function I(d,e,c){const s=c??new f(4);return s[0]=d[0]+e[0],s[1]=d[1]+e[1],s[2]=d[2]+e[2],s[3]=d[3]+e[3],s}function N(d,e,c,s){const u=s??new f(4);return u[0]=d[0]+e[0]*c,u[1]=d[1]+e[1]*c,u[2]=d[2]+e[2]*c,u[3]=d[3]+e[3]*c,u}function G(d,e,c){const s=c??new f(4);return s[0]=d[0]-e[0],s[1]=d[1]-e[1],s[2]=d[2]-e[2],s[3]=d[3]-e[3],s}const F=G;function j(d,e){return Math.abs(d[0]-e[0])<W&&Math.abs(d[1]-e[1])<W&&Math.abs(d[2]-e[2])<W&&Math.abs(d[3]-e[3])<W}function Q(d,e){return d[0]===e[0]&&d[1]===e[1]&&d[2]===e[2]&&d[3]===e[3]}function nt(d,e,c,s){const u=s??new f(4);return u[0]=d[0]+c*(e[0]-d[0]),u[1]=d[1]+c*(e[1]-d[1]),u[2]=d[2]+c*(e[2]-d[2]),u[3]=d[3]+c*(e[3]-d[3]),u}function J(d,e,c,s){const u=s??new f(4);return u[0]=d[0]+c[0]*(e[0]-d[0]),u[1]=d[1]+c[1]*(e[1]-d[1]),u[2]=d[2]+c[2]*(e[2]-d[2]),u[3]=d[3]+c[3]*(e[3]-d[3]),u}function ft(d,e,c){const s=c??new f(4);return s[0]=Math.max(d[0],e[0]),s[1]=Math.max(d[1],e[1]),s[2]=Math.max(d[2],e[2]),s[3]=Math.max(d[3],e[3]),s}function V(d,e,c){const s=c??new f(4);return s[0]=Math.min(d[0],e[0]),s[1]=Math.min(d[1],e[1]),s[2]=Math.min(d[2],e[2]),s[3]=Math.min(d[3],e[3]),s}function O(d,e,c){const s=c??new f(4);return s[0]=d[0]*e,s[1]=d[1]*e,s[2]=d[2]*e,s[3]=d[3]*e,s}const X=O;function at(d,e,c){const s=c??new f(4);return s[0]=d[0]/e,s[1]=d[1]/e,s[2]=d[2]/e,s[3]=d[3]/e,s}function pt(d,e){const c=e??new f(4);return c[0]=1/d[0],c[1]=1/d[1],c[2]=1/d[2],c[3]=1/d[3],c}const ct=pt;function Mt(d,e){return d[0]*e[0]+d[1]*e[1]+d[2]*e[2]+d[3]*e[3]}function gt(d){const e=d[0],c=d[1],s=d[2],u=d[3];return Math.sqrt(e*e+c*c+s*s+u*u)}const mt=gt;function lt(d){const e=d[0],c=d[1],s=d[2],u=d[3];return e*e+c*c+s*s+u*u}const Dt=lt;function St(d,e){const c=d[0]-e[0],s=d[1]-e[1],u=d[2]-e[2],g=d[3]-e[3];return Math.sqrt(c*c+s*s+u*u+g*g)}const Lt=St;function ht(d,e){const c=d[0]-e[0],s=d[1]-e[1],u=d[2]-e[2],g=d[3]-e[3];return c*c+s*s+u*u+g*g}const K=ht;function Y(d,e){const c=e??new f(4),s=d[0],u=d[1],g=d[2],m=d[3],w=Math.sqrt(s*s+u*u+g*g+m*m);return w>1e-5?(c[0]=s/w,c[1]=u/w,c[2]=g/w,c[3]=m/w):(c[0]=0,c[1]=0,c[2]=0,c[3]=0),c}function C(d,e){const c=e??new f(4);return c[0]=-d[0],c[1]=-d[1],c[2]=-d[2],c[3]=-d[3],c}function Z(d,e){const c=e??new f(4);return c[0]=d[0],c[1]=d[1],c[2]=d[2],c[3]=d[3],c}const It=Z;function H(d,e,c){const s=c??new f(4);return s[0]=d[0]*e[0],s[1]=d[1]*e[1],s[2]=d[2]*e[2],s[3]=d[3]*e[3],s}const it=H;function ut(d,e,c){const s=c??new f(4);return s[0]=d[0]/e[0],s[1]=d[1]/e[1],s[2]=d[2]/e[2],s[3]=d[3]/e[3],s}const Ut=ut;function dt(d){const e=d??new f(4);return e[0]=0,e[1]=0,e[2]=0,e[3]=0,e}function At(d,e,c){const s=c??new f(4),u=d[0],g=d[1],m=d[2],w=d[3];return s[0]=e[0]*u+e[4]*g+e[8]*m+e[12]*w,s[1]=e[1]*u+e[5]*g+e[9]*m+e[13]*w,s[2]=e[2]*u+e[6]*g+e[10]*m+e[14]*w,s[3]=e[3]*u+e[7]*g+e[11]*m+e[15]*w,s}function _t(d,e,c){const s=c??new f(4);return Y(d,s),O(s,e,s)}function b(d,e,c){const s=c??new f(4);return gt(d)>e?_t(d,e,s):Z(d,s)}function S(d,e,c){const s=c??new f(4);return nt(d,e,.5,s)}return{create:i,fromValues:v,set:x,ceil:M,floor:P,round:U,clamp:$,add:I,addScaled:N,subtract:G,sub:F,equalsApproximately:j,equals:Q,lerp:nt,lerpV:J,max:ft,min:V,mulScalar:O,scale:X,divScalar:at,inverse:pt,invert:ct,dot:Mt,length:gt,len:mt,lengthSq:lt,lenSq:Dt,distance:St,dist:Lt,distanceSq:ht,distSq:K,normalize:Y,negate:C,copy:Z,clone:It,multiply:H,mul:it,divide:ut,div:Ut,zero:dt,transformMat4:At,setLength:_t,truncate:b,midpoint:S}}const he=new Map;function Pe(f){let i=he.get(f);return i||(i=Ae(f),he.set(f,i)),i}function ee(f,i,v,x,M,P){return{mat3:be(f),mat4:Se(i),quat:De(v),vec2:ge(x),vec3:Kt(M),vec4:Pe(P)}}const{mat4:Vt,vec3:Jt}=ee(Float32Array,Float32Array,Float32Array,Float32Array,Float32Array,Float32Array);ee(Float64Array,Float64Array,Float64Array,Float64Array,Float64Array,Float64Array);ee(we,Array,Array,Array,Array,Array);class Ct{constructor(i,v,x,M,P="div"){this.parent=i,this.object=v,this.property=x,this._disabled=!1,this._hidden=!1,this.initialValue=this.getValue(),this.domElement=document.createElement(P),this.domElement.classList.add("lil-controller"),this.domElement.classList.add(M),this.$name=document.createElement("div"),this.$name.classList.add("lil-name"),Ct.nextNameID=Ct.nextNameID||0,this.$name.id=`lil-gui-name-${++Ct.nextNameID}`,this.$widget=document.createElement("div"),this.$widget.classList.add("lil-widget"),this.$disable=this.$widget,this.domElement.appendChild(this.$name),this.domElement.appendChild(this.$widget),this.domElement.addEventListener("keydown",U=>U.stopPropagation()),this.domElement.addEventListener("keyup",U=>U.stopPropagation()),this.parent.children.push(this),this.parent.controllers.push(this),this.parent.$children.appendChild(this.domElement),this._listenCallback=this._listenCallback.bind(this),this.name(x)}name(i){return this._name=i,this.$name.textContent=i,this}onChange(i){return this._onChange=i,this}_callOnChange(){this.parent._callOnChange(this),this._onChange!==void 0&&this._onChange.call(this,this.getValue()),this._changed=!0}onFinishChange(i){return this._onFinishChange=i,this}_callOnFinishChange(){this._changed&&(this.parent._callOnFinishChange(this),this._onFinishChange!==void 0&&this._onFinishChange.call(this,this.getValue())),this._changed=!1}reset(){return this.setValue(this.initialValue),this._callOnFinishChange(),this}enable(i=!0){return this.disable(!i)}disable(i=!0){return i===this._disabled?this:(this._disabled=i,this.domElement.classList.toggle("lil-disabled",i),this.$disable.toggleAttribute("disabled",i),this)}show(i=!0){return this._hidden=!i,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}options(i){const v=this.parent.add(this.object,this.property,i);return v.name(this._name),this.destroy(),v}min(i){return this}max(i){return this}step(i){return this}decimals(i){return this}listen(i=!0){return this._listening=i,this._listenCallbackID!==void 0&&(cancelAnimationFrame(this._listenCallbackID),this._listenCallbackID=void 0),this._listening&&this._listenCallback(),this}_listenCallback(){this._listenCallbackID=requestAnimationFrame(this._listenCallback);const i=this.save();i!==this._listenPrevValue&&this.updateDisplay(),this._listenPrevValue=i}getValue(){return this.object[this.property]}setValue(i){return this.getValue()!==i&&(this.object[this.property]=i,this._callOnChange(),this.updateDisplay()),this}updateDisplay(){return this}load(i){return this.setValue(i),this._callOnFinishChange(),this}save(){return this.getValue()}destroy(){this.listen(!1),this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.controllers.splice(this.parent.controllers.indexOf(this),1),this.parent.$children.removeChild(this.domElement)}}class Ue extends Ct{constructor(i,v,x){super(i,v,x,"lil-boolean","label"),this.$input=document.createElement("input"),this.$input.setAttribute("type","checkbox"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$input.addEventListener("change",()=>{this.setValue(this.$input.checked),this._callOnFinishChange()}),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.checked=this.getValue(),this}}function te(f){let i,v;return(i=f.match(/(#|0x)?([a-f0-9]{6})/i))?v=i[2]:(i=f.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/))?v=parseInt(i[1]).toString(16).padStart(2,0)+parseInt(i[2]).toString(16).padStart(2,0)+parseInt(i[3]).toString(16).padStart(2,0):(i=f.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i))&&(v=i[1]+i[1]+i[2]+i[2]+i[3]+i[3]),v?"#"+v:!1}const Ee={isPrimitive:!0,match:f=>typeof f=="string",fromHexString:te,toHexString:te},Gt={isPrimitive:!0,match:f=>typeof f=="number",fromHexString:f=>parseInt(f.substring(1),16),toHexString:f=>"#"+f.toString(16).padStart(6,0)},Re={isPrimitive:!1,match:f=>Array.isArray(f)||ArrayBuffer.isView(f),fromHexString(f,i,v=1){const x=Gt.fromHexString(f);i[0]=(x>>16&255)/255*v,i[1]=(x>>8&255)/255*v,i[2]=(x&255)/255*v},toHexString([f,i,v],x=1){x=255/x;const M=f*x<<16^i*x<<8^v*x<<0;return Gt.toHexString(M)}},ze={isPrimitive:!1,match:f=>Object(f)===f,fromHexString(f,i,v=1){const x=Gt.fromHexString(f);i.r=(x>>16&255)/255*v,i.g=(x>>8&255)/255*v,i.b=(x&255)/255*v},toHexString({r:f,g:i,b:v},x=1){x=255/x;const M=f*x<<16^i*x<<8^v*x<<0;return Gt.toHexString(M)}},Te=[Ee,Gt,Re,ze];function Le(f){return Te.find(i=>i.match(f))}class Ie extends Ct{constructor(i,v,x,M){super(i,v,x,"lil-color"),this.$input=document.createElement("input"),this.$input.setAttribute("type","color"),this.$input.setAttribute("tabindex",-1),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$text=document.createElement("input"),this.$text.setAttribute("type","text"),this.$text.setAttribute("spellcheck","false"),this.$text.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("lil-display"),this.$display.appendChild(this.$input),this.$widget.appendChild(this.$display),this.$widget.appendChild(this.$text),this._format=Le(this.initialValue),this._rgbScale=M,this._initialValueHexString=this.save(),this._textFocused=!1,this.$input.addEventListener("input",()=>{this._setValueFromHexString(this.$input.value)}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$text.addEventListener("input",()=>{const P=te(this.$text.value);P&&this._setValueFromHexString(P)}),this.$text.addEventListener("focus",()=>{this._textFocused=!0,this.$text.select()}),this.$text.addEventListener("blur",()=>{this._textFocused=!1,this.updateDisplay(),this._callOnFinishChange()}),this.$disable=this.$text,this.updateDisplay()}reset(){return this._setValueFromHexString(this._initialValueHexString),this}_setValueFromHexString(i){if(this._format.isPrimitive){const v=this._format.fromHexString(i);this.setValue(v)}else this._format.fromHexString(i,this.getValue(),this._rgbScale),this._callOnChange(),this.updateDisplay()}save(){return this._format.toHexString(this.getValue(),this._rgbScale)}load(i){return this._setValueFromHexString(i),this._callOnFinishChange(),this}updateDisplay(){return this.$input.value=this._format.toHexString(this.getValue(),this._rgbScale),this._textFocused||(this.$text.value=this.$input.value.substring(1)),this.$display.style.backgroundColor=this.$input.value,this}}class Qt extends Ct{constructor(i,v,x){super(i,v,x,"lil-function"),this.$button=document.createElement("button"),this.$button.appendChild(this.$name),this.$widget.appendChild(this.$button),this.$button.addEventListener("click",M=>{M.preventDefault(),this.getValue().call(this.object),this._callOnChange()}),this.$button.addEventListener("touchstart",()=>{},{passive:!0}),this.$disable=this.$button}}class Be extends Ct{constructor(i,v,x,M,P,U){super(i,v,x,"lil-number"),this._initInput(),this.min(M),this.max(P);const $=U!==void 0;this.step($?U:this._getImplicitStep(),$),this.updateDisplay()}decimals(i){return this._decimals=i,this.updateDisplay(),this}min(i){return this._min=i,this._onUpdateMinMax(),this}max(i){return this._max=i,this._onUpdateMinMax(),this}step(i,v=!0){return this._step=i,this._stepExplicit=v,this}updateDisplay(){const i=this.getValue();if(this._hasSlider){let v=(i-this._min)/(this._max-this._min);v=Math.max(0,Math.min(v,1)),this.$fill.style.width=v*100+"%"}return this._inputFocused||(this.$input.value=this._decimals===void 0?i:i.toFixed(this._decimals)),this}_initInput(){this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("aria-labelledby",this.$name.id),window.matchMedia("(pointer: coarse)").matches&&(this.$input.setAttribute("type","number"),this.$input.setAttribute("step","any")),this.$widget.appendChild(this.$input),this.$disable=this.$input;const v=()=>{let O=parseFloat(this.$input.value);isNaN(O)||(this._stepExplicit&&(O=this._snap(O)),this.setValue(this._clamp(O)))},x=O=>{const X=parseFloat(this.$input.value);isNaN(X)||(this._snapClampSetValue(X+O),this.$input.value=this.getValue())},M=O=>{O.key==="Enter"&&this.$input.blur(),O.code==="ArrowUp"&&(O.preventDefault(),x(this._step*this._arrowKeyMultiplier(O))),O.code==="ArrowDown"&&(O.preventDefault(),x(this._step*this._arrowKeyMultiplier(O)*-1))},P=O=>{this._inputFocused&&(O.preventDefault(),x(this._step*this._normalizeMouseWheel(O)))};let U=!1,$,I,N,G,F;const j=5,Q=O=>{$=O.clientX,I=N=O.clientY,U=!0,G=this.getValue(),F=0,window.addEventListener("mousemove",nt),window.addEventListener("mouseup",J)},nt=O=>{if(U){const X=O.clientX-$,at=O.clientY-I;Math.abs(at)>j?(O.preventDefault(),this.$input.blur(),U=!1,this._setDraggingStyle(!0,"vertical")):Math.abs(X)>j&&J()}if(!U){const X=O.clientY-N;F-=X*this._step*this._arrowKeyMultiplier(O),G+F>this._max?F=this._max-G:G+F<this._min&&(F=this._min-G),this._snapClampSetValue(G+F)}N=O.clientY},J=()=>{this._setDraggingStyle(!1,"vertical"),this._callOnFinishChange(),window.removeEventListener("mousemove",nt),window.removeEventListener("mouseup",J)},ft=()=>{this._inputFocused=!0},V=()=>{this._inputFocused=!1,this.updateDisplay(),this._callOnFinishChange()};this.$input.addEventListener("input",v),this.$input.addEventListener("keydown",M),this.$input.addEventListener("wheel",P,{passive:!1}),this.$input.addEventListener("mousedown",Q),this.$input.addEventListener("focus",ft),this.$input.addEventListener("blur",V)}_initSlider(){this._hasSlider=!0,this.$slider=document.createElement("div"),this.$slider.classList.add("lil-slider"),this.$fill=document.createElement("div"),this.$fill.classList.add("lil-fill"),this.$slider.appendChild(this.$fill),this.$widget.insertBefore(this.$slider,this.$input),this.domElement.classList.add("lil-has-slider");const i=(V,O,X,at,pt)=>(V-O)/(X-O)*(pt-at)+at,v=V=>{const O=this.$slider.getBoundingClientRect();let X=i(V,O.left,O.right,this._min,this._max);this._snapClampSetValue(X)},x=V=>{this._setDraggingStyle(!0),v(V.clientX),window.addEventListener("mousemove",M),window.addEventListener("mouseup",P)},M=V=>{v(V.clientX)},P=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("mousemove",M),window.removeEventListener("mouseup",P)};let U=!1,$,I;const N=V=>{V.preventDefault(),this._setDraggingStyle(!0),v(V.touches[0].clientX),U=!1},G=V=>{V.touches.length>1||(this._hasScrollBar?($=V.touches[0].clientX,I=V.touches[0].clientY,U=!0):N(V),window.addEventListener("touchmove",F,{passive:!1}),window.addEventListener("touchend",j))},F=V=>{if(U){const O=V.touches[0].clientX-$,X=V.touches[0].clientY-I;Math.abs(O)>Math.abs(X)?N(V):(window.removeEventListener("touchmove",F),window.removeEventListener("touchend",j))}else V.preventDefault(),v(V.touches[0].clientX)},j=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("touchmove",F),window.removeEventListener("touchend",j)},Q=this._callOnFinishChange.bind(this),nt=400;let J;const ft=V=>{if(Math.abs(V.deltaX)<Math.abs(V.deltaY)&&this._hasScrollBar)return;V.preventDefault();const X=this._normalizeMouseWheel(V)*this._step;this._snapClampSetValue(this.getValue()+X),this.$input.value=this.getValue(),clearTimeout(J),J=setTimeout(Q,nt)};this.$slider.addEventListener("mousedown",x),this.$slider.addEventListener("touchstart",G,{passive:!1}),this.$slider.addEventListener("wheel",ft,{passive:!1})}_setDraggingStyle(i,v="horizontal"){this.$slider&&this.$slider.classList.toggle("lil-active",i),document.body.classList.toggle("lil-dragging",i),document.body.classList.toggle(`lil-${v}`,i)}_getImplicitStep(){return this._hasMin&&this._hasMax?(this._max-this._min)/1e3:.1}_onUpdateMinMax(){!this._hasSlider&&this._hasMin&&this._hasMax&&(this._stepExplicit||this.step(this._getImplicitStep(),!1),this._initSlider(),this.updateDisplay())}_normalizeMouseWheel(i){let{deltaX:v,deltaY:x}=i;return Math.floor(i.deltaY)!==i.deltaY&&i.wheelDelta&&(v=0,x=-i.wheelDelta/120,x*=this._stepExplicit?1:10),v+-x}_arrowKeyMultiplier(i){let v=this._stepExplicit?1:10;return i.shiftKey?v*=10:i.altKey&&(v/=10),v}_snap(i){let v=0;return this._hasMin?v=this._min:this._hasMax&&(v=this._max),i-=v,i=Math.round(i/this._step)*this._step,i+=v,i=parseFloat(i.toPrecision(15)),i}_clamp(i){return i<this._min&&(i=this._min),i>this._max&&(i=this._max),i}_snapClampSetValue(i){this.setValue(this._clamp(this._snap(i)))}get _hasScrollBar(){const i=this.parent.root.$children;return i.scrollHeight>i.clientHeight}get _hasMin(){return this._min!==void 0}get _hasMax(){return this._max!==void 0}}class $e extends Ct{constructor(i,v,x,M){super(i,v,x,"lil-option"),this.$select=document.createElement("select"),this.$select.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("lil-display"),this.$select.addEventListener("change",()=>{this.setValue(this._values[this.$select.selectedIndex]),this._callOnFinishChange()}),this.$select.addEventListener("focus",()=>{this.$display.classList.add("lil-focus")}),this.$select.addEventListener("blur",()=>{this.$display.classList.remove("lil-focus")}),this.$widget.appendChild(this.$select),this.$widget.appendChild(this.$display),this.$disable=this.$select,this.options(M)}options(i){return this._values=Array.isArray(i)?i:Object.values(i),this._names=Array.isArray(i)?i:Object.keys(i),this.$select.replaceChildren(),this._names.forEach(v=>{const x=document.createElement("option");x.textContent=v,this.$select.appendChild(x)}),this.updateDisplay(),this}updateDisplay(){const i=this.getValue(),v=this._values.indexOf(i);return this.$select.selectedIndex=v,this.$display.textContent=v===-1?i:this._names[v],this}}class Oe extends Ct{constructor(i,v,x){super(i,v,x,"lil-string"),this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("spellcheck","false"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$input.addEventListener("input",()=>{this.setValue(this.$input.value)}),this.$input.addEventListener("keydown",M=>{M.code==="Enter"&&this.$input.blur()}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$widget.appendChild(this.$input),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.value=this.getValue(),this}}var Fe=`.lil-gui {
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
}`;function Ve(f){const i=document.createElement("style");i.innerHTML=f;const v=document.querySelector("head link[rel=stylesheet], head style");v?document.head.insertBefore(i,v):document.head.appendChild(i)}let de=!1;class ne{constructor({parent:i,autoPlace:v=i===void 0,container:x,width:M,title:P="Controls",closeFolders:U=!1,injectStyles:$=!0,touchStyles:I=!0}={}){if(this.parent=i,this.root=i?i.root:this,this.children=[],this.controllers=[],this.folders=[],this._closed=!1,this._hidden=!1,this.domElement=document.createElement("div"),this.domElement.classList.add("lil-gui"),this.$title=document.createElement("button"),this.$title.classList.add("lil-title"),this.$title.setAttribute("aria-expanded",!0),this.$title.addEventListener("click",()=>this.openAnimated(this._closed)),this.$title.addEventListener("touchstart",()=>{},{passive:!0}),this.$children=document.createElement("div"),this.$children.classList.add("lil-children"),this.domElement.appendChild(this.$title),this.domElement.appendChild(this.$children),this.title(P),this.parent){this.parent.children.push(this),this.parent.folders.push(this),this.parent.$children.appendChild(this.domElement);return}this.domElement.classList.add("lil-root"),I&&this.domElement.classList.add("lil-allow-touch-styles"),!de&&$&&(Ve(Fe),de=!0),x?x.appendChild(this.domElement):v&&(this.domElement.classList.add("lil-auto-place","autoPlace"),document.body.appendChild(this.domElement)),M&&this.domElement.style.setProperty("--width",M+"px"),this._closeFolders=U}add(i,v,x,M,P){if(Object(x)===x)return new $e(this,i,v,x);const U=i[v];switch(typeof U){case"number":return new Be(this,i,v,x,M,P);case"boolean":return new Ue(this,i,v);case"string":return new Oe(this,i,v);case"function":return new Qt(this,i,v)}console.error(`gui.add failed
	property:`,v,`
	object:`,i,`
	value:`,U)}addColor(i,v,x=1){return new Ie(this,i,v,x)}addFolder(i){const v=new ne({parent:this,title:i});return this.root._closeFolders&&v.close(),v}load(i,v=!0){return i.controllers&&this.controllers.forEach(x=>{x instanceof Qt||x._name in i.controllers&&x.load(i.controllers[x._name])}),v&&i.folders&&this.folders.forEach(x=>{x._title in i.folders&&x.load(i.folders[x._title])}),this}save(i=!0){const v={controllers:{},folders:{}};return this.controllers.forEach(x=>{if(!(x instanceof Qt)){if(x._name in v.controllers)throw new Error(`Cannot save GUI with duplicate property "${x._name}"`);v.controllers[x._name]=x.save()}}),i&&this.folders.forEach(x=>{if(x._title in v.folders)throw new Error(`Cannot save GUI with duplicate folder "${x._title}"`);v.folders[x._title]=x.save()}),v}open(i=!0){return this._setClosed(!i),this.$title.setAttribute("aria-expanded",!this._closed),this.domElement.classList.toggle("lil-closed",this._closed),this}close(){return this.open(!1)}_setClosed(i){this._closed!==i&&(this._closed=i,this._callOnOpenClose(this))}show(i=!0){return this._hidden=!i,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}openAnimated(i=!0){return this._setClosed(!i),this.$title.setAttribute("aria-expanded",!this._closed),requestAnimationFrame(()=>{const v=this.$children.clientHeight;this.$children.style.height=v+"px",this.domElement.classList.add("lil-transition");const x=P=>{P.target===this.$children&&(this.$children.style.height="",this.domElement.classList.remove("lil-transition"),this.$children.removeEventListener("transitionend",x))};this.$children.addEventListener("transitionend",x);const M=i?this.$children.scrollHeight:0;this.domElement.classList.toggle("lil-closed",!i),requestAnimationFrame(()=>{this.$children.style.height=M+"px"})}),this}title(i){return this._title=i,this.$title.textContent=i,this}reset(i=!0){return(i?this.controllersRecursive():this.controllers).forEach(x=>x.reset()),this}onChange(i){return this._onChange=i,this}_callOnChange(i){this.parent&&this.parent._callOnChange(i),this._onChange!==void 0&&this._onChange.call(this,{object:i.object,property:i.property,value:i.getValue(),controller:i})}onFinishChange(i){return this._onFinishChange=i,this}_callOnFinishChange(i){this.parent&&this.parent._callOnFinishChange(i),this._onFinishChange!==void 0&&this._onFinishChange.call(this,{object:i.object,property:i.property,value:i.getValue(),controller:i})}onOpenClose(i){return this._onOpenClose=i,this}_callOnOpenClose(i){this.parent&&this.parent._callOnOpenClose(i),this._onOpenClose!==void 0&&this._onOpenClose.call(this,i)}destroy(){this.parent&&(this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.folders.splice(this.parent.folders.indexOf(this),1)),this.domElement.parentElement&&this.domElement.parentElement.removeChild(this.domElement),Array.from(this.children).forEach(i=>i.destroy())}controllersRecursive(){let i=Array.from(this.controllers);return this.folders.forEach(v=>{i=i.concat(v.controllersRecursive())}),i}foldersRecursive(){let i=Array.from(this.folders);return this.folders.forEach(v=>{i=i.concat(v.foldersRecursive())}),i}}var Ce=`struct CommonUniforms {
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
    causticIntensity : f32,
    ior : f32,
    fresnelMin : f32,
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
    causticIntensity : f32,
    ior : f32,
    fresnelMin : f32,
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
}`;class ke{device;format;uniformBuffer;tileTexture;tileSampler;lightUniformBuffer;sphereUniformBuffer;shadowUniformBuffer;positionBuffer;indexBuffer;vertexCount;pipeline;constructor(i,v,x,M,P,U,$,I){this.device=i,this.format=v,this.uniformBuffer=x,this.tileTexture=M,this.tileSampler=P,this.lightUniformBuffer=U,this.sphereUniformBuffer=$,this.shadowUniformBuffer=I,this.createGeometry(),this.createPipeline()}createGeometry(){function i(U){return[(U&1)*2-1,(U&2)-1,(U&4)/2-1]}const v=[[0,4,2,6,-1,0,0],[1,3,5,7,1,0,0],[2,6,3,7,0,1,0],[0,2,1,3,0,0,-1],[4,5,6,7,0,0,1]],x=[],M=[];let P=0;for(const U of v){const $=P;for(let I=0;I<4;I++){const N=U[I],G=i(N);x.push(...G),P++}M.push($+0,$+1,$+2),M.push($+2,$+1,$+3)}this.vertexCount=M.length,this.positionBuffer=this.device.createBuffer({label:"Pool Vertex Buffer",size:x.length*4,usage:GPUBufferUsage.VERTEX,mappedAtCreation:!0}),new Float32Array(this.positionBuffer.getMappedRange()).set(x),this.positionBuffer.unmap(),this.indexBuffer=this.device.createBuffer({label:"Pool Index Buffer",size:M.length*4,usage:GPUBufferUsage.INDEX,mappedAtCreation:!0}),new Uint32Array(this.indexBuffer.getMappedRange()).set(M),this.indexBuffer.unmap()}createPipeline(){const i=this.device.createShaderModule({label:"Pool Vertex Shader",code:Ce}),v=this.device.createShaderModule({label:"Pool Fragment Shader",code:Ge});this.pipeline=this.device.createRenderPipeline({label:"Pool Pipeline",layout:"auto",vertex:{module:i,entryPoint:"vs_main",buffers:[{arrayStride:12,attributes:[{shaderLocation:0,offset:0,format:"float32x3"}]}]},fragment:{module:v,entryPoint:"fs_main",targets:[{format:this.format}]},primitive:{topology:"triangle-list",cullMode:"back"},depthStencil:{depthWriteEnabled:!0,depthCompare:"less",format:"depth24plus"}})}render(i,v,x,M){const P=this.device.createBindGroup({layout:this.pipeline.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:this.uniformBuffer}},{binding:1,resource:this.tileSampler},{binding:2,resource:this.tileTexture.createView()},{binding:3,resource:{buffer:this.lightUniformBuffer}},{binding:4,resource:{buffer:this.sphereUniformBuffer}},{binding:5,resource:x},{binding:6,resource:v.createView()},{binding:7,resource:M.createView()},{binding:8,resource:{buffer:this.shadowUniformBuffer}}]});i.setPipeline(this.pipeline),i.setBindGroup(0,P),i.setVertexBuffer(0,this.positionBuffer),i.setIndexBuffer(this.indexBuffer,"uint32"),i.drawIndexed(this.vertexCount)}}var qe=`struct CommonUniforms {
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
    causticIntensity : f32,
    ior : f32,
    fresnelMin : f32,
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
    causticIntensity : f32,
    ior : f32,
    fresnelMin : f32,
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
}`;class je{device;format;commonUniformBuffer;sphereUniformBuffer;lightUniformBuffer;positionBuffer;indexBuffer;vertexCount;pipeline;constructor(i,v,x,M,P){this.device=i,this.format=v,this.commonUniformBuffer=x,this.sphereUniformBuffer=P,this.lightUniformBuffer=M,this.createGeometry(),this.createPipeline()}update(i,v){const x=new Float32Array([...i,v]);this.device.queue.writeBuffer(this.sphereUniformBuffer,0,x)}createGeometry(){class v{unique;map;constructor(){this.unique=[],this.map=new Map}add(N){const G=N.join(",");return this.map.has(G)||(this.map.set(G,this.unique.length),this.unique.push(N)),this.map.get(G)}}function x(I){return[(I&1)*2-1,(I&2)-1,(I&4)/2-1]}function M(I){return I+(I-I*I)/2}const P=new v,U=[];for(let I=0;I<8;I++){const N=x(I),G=N[0]*N[1]*N[2]>0,F=[];for(let j=0;j<=10;j++)for(let Q=0;j+Q<=10;Q++){const nt=j/10,J=Q/10,ft=(10-j-Q)/10,V=[M(nt),M(J),M(ft)],O=Math.sqrt(V[0]*V[0]+V[1]*V[1]+V[2]*V[2]),X=[V[0]/O*N[0],V[1]/O*N[1],V[2]/O*N[2]];F.push(P.add(X))}for(let j=0;j<=10;j++)if(j>0)for(let Q=0;j+Q<=10;Q++){const nt=(j-1)*11+(j-1-(j-1)*(j-1))/2+Q,J=j*11+(j-j*j)/2+Q;G?U.push(F[nt],F[J],F[nt+1]):U.push(F[nt],F[nt+1],F[J]),j+Q<10&&(G?U.push(F[J],F[J+1],F[nt+1]):U.push(F[J],F[nt+1],F[J+1]))}}this.vertexCount=U.length;const $=[];for(const I of P.unique)$.push(...I);this.positionBuffer=this.device.createBuffer({label:"Sphere Vertex Buffer",size:$.length*4,usage:GPUBufferUsage.VERTEX,mappedAtCreation:!0}),new Float32Array(this.positionBuffer.getMappedRange()).set($),this.positionBuffer.unmap(),this.indexBuffer=this.device.createBuffer({label:"Sphere Index Buffer",size:U.length*4,usage:GPUBufferUsage.INDEX,mappedAtCreation:!0}),new Uint32Array(this.indexBuffer.getMappedRange()).set(U),this.indexBuffer.unmap()}createPipeline(){const i=this.device.createShaderModule({label:"Sphere Vertex Shader",code:qe}),v=this.device.createShaderModule({label:"Sphere Fragment Shader",code:Ne});this.pipeline=this.device.createRenderPipeline({label:"Sphere Pipeline",layout:"auto",vertex:{module:i,entryPoint:"vs_main",buffers:[{arrayStride:12,attributes:[{shaderLocation:0,offset:0,format:"float32x3"}]}]},fragment:{module:v,entryPoint:"fs_main",targets:[{format:this.format}]},primitive:{topology:"triangle-list",cullMode:"back"},depthStencil:{depthWriteEnabled:!0,depthCompare:"less",format:"depth24plus"}})}render(i,v,x,M){const P=this.device.createBindGroup({layout:this.pipeline.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:this.commonUniformBuffer}},{binding:1,resource:{buffer:this.sphereUniformBuffer}},{binding:2,resource:{buffer:this.lightUniformBuffer}},{binding:3,resource:x},{binding:4,resource:v.createView()},{binding:5,resource:M.createView()}]});i.setPipeline(this.pipeline),i.setBindGroup(0,P),i.setVertexBuffer(0,this.positionBuffer),i.setIndexBuffer(this.indexBuffer,"uint32"),i.drawIndexed(this.vertexCount)}}const Yt=`struct VertexOutput {
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
    causticIntensity : f32,
    ior : f32,
    fresnelMin : f32,
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
    causticIntensity : f32,
    ior : f32,
    fresnelMin : f32,
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
    let IOR_WATER = waterUniforms.ior;

    
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
    let refractedRay = refract(incomingRay, normal, IOR_AIR / waterUniforms.ior);
    let fresnel = mix(waterUniforms.fresnelMin, 1.0, pow(1.0 - dot(normal, -incomingRay), 3.0));

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
    causticIntensity : f32,
    ior : f32,
    fresnelMin : f32,
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
    let IOR_WATER = waterUniforms.ior;

    
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
    let refractedRay = refract(incomingRay, normal, waterUniforms.ior / IOR_AIR);
    let fresnel = mix(waterUniforms.fresnelMin, 1.0, pow(1.0 - dot(normal, -incomingRay), 3.0));

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
    causticIntensity : f32,
    ior : f32,
    fresnelMin : f32,
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
    causticIntensity : f32,
    ior : f32,
    fresnelMin : f32,
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
@binding(5) @group(0) var<uniform> water : WaterUniforms;
@binding(2) @group(0) var waterSampler : sampler;
@binding(3) @group(0) var waterTexture : texture_2d<f32>;

@fragment
fn fs_main(@location(0) oldPos : vec3f, @location(1) newPos : vec3f, @location(2) ray : vec3f) -> @location(0) vec4f {
    
    
    let oldArea = length(dpdx(oldPos)) * length(dpdy(oldPos));
    let newArea = length(dpdx(newPos)) * length(dpdy(newPos));

    var intensity = oldArea / newArea * water.causticIntensity;

    
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
}`;class tn{device;width;height;commonUniformBuffer;lightUniformBuffer;sphereUniformBuffer;shadowUniformBuffer;waterUniformBuffer;tileTexture;tileSampler;skyTexture;skySampler;textureA;textureB;causticsTexture;sampler;dropPipeline;updatePipeline;normalPipeline;spherePipeline;positionBuffer;indexBuffer;vertexCount;surfaceBindGroupLayout;surfacePipelineAbove;surfacePipelineUnder;causticsPipeline;constructor(i,v,x,M,P,U,$,I,N,G,F,j){this.device=i,this.width=v,this.height=x,this.commonUniformBuffer=M,this.lightUniformBuffer=P,this.sphereUniformBuffer=U,this.shadowUniformBuffer=$,this.waterUniformBuffer=I,this.tileTexture=N,this.tileSampler=G,this.skyTexture=F,this.skySampler=j,this.textureA=this.createTexture(),this.textureB=this.createTexture(),this.causticsTexture=this.device.createTexture({size:[1024,1024],format:"rgba8unorm",usage:GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.RENDER_ATTACHMENT}),this.sampler=i.createSampler({magFilter:"linear",minFilter:"linear",addressModeU:"clamp-to-edge",addressModeV:"clamp-to-edge"}),this.createPipelines(),this.createSurfaceMesh(),this.createSurfacePipeline(),this.createCausticsPipeline()}createTexture(){const i=this.device.features.has("float32-filterable")?"rgba32float":"rgba16float";return this.device.createTexture({size:[this.width,this.height],format:i,usage:GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.RENDER_ATTACHMENT})}createPipelines(){const i=this.device.features.has("float32-filterable")?"rgba32float":"rgba16float";this.dropPipeline=this.createPipeline("Drop",Yt,He,32,i),this.updatePipeline=this.createPipeline("Update",Yt,We,16,i),this.normalPipeline=this.createPipeline("Normal",Yt,Xe,16,i),this.spherePipeline=this.createPipeline("Sphere",Yt,Ye,32,i)}createPipeline(i,v,x,M,P){const U=this.device.createShaderModule({label:i+" Module",code:v+x});return{pipeline:this.device.createRenderPipeline({label:i+" Pipeline",layout:"auto",vertex:{module:U,entryPoint:"vs_main"},fragment:{module:U,entryPoint:"fs_main",targets:[{format:P}]},primitive:{topology:"triangle-list"}}),uniformSize:M,uniformBuffer:this.device.createBuffer({size:M,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST})}}runPipeline(i,v){this.device.queue.writeBuffer(i.uniformBuffer,0,v);const x=this.device.createBindGroup({layout:i.pipeline.getBindGroupLayout(0),entries:[{binding:0,resource:this.textureA.createView()},{binding:1,resource:this.sampler},{binding:2,resource:{buffer:i.uniformBuffer}}]}),M=this.device.createCommandEncoder(),P=M.beginRenderPass({colorAttachments:[{view:this.textureB.createView(),loadOp:"clear",storeOp:"store",clearValue:{r:0,g:0,b:0,a:0}}]});P.setPipeline(i.pipeline),P.setBindGroup(0,x),P.draw(6),P.end(),this.device.queue.submit([M.finish()]);const U=this.textureA;this.textureA=this.textureB,this.textureB=U}addDrop(i,v,x,M){const P=new Float32Array(4);P[0]=i,P[1]=v,P[2]=x,P[3]=M,this.runPipeline(this.dropPipeline,P)}stepSimulation(){const i=new Float32Array(2);i[0]=1/this.width,i[1]=1/this.height,this.runPipeline(this.updatePipeline,i)}updateNormals(){const i=new Float32Array(2);i[0]=1/this.width,i[1]=1/this.height,this.runPipeline(this.normalPipeline,i)}moveSphere(i,v,x){const M=new Float32Array(8);M[0]=i[0],M[1]=i[1],M[2]=i[2],M[3]=x,M[4]=v[0],M[5]=v[1],M[6]=v[2],M[7]=0,this.runPipeline(this.spherePipeline,M)}createSurfaceMesh(){const v=[],x=[];for(let M=0;M<=200;M++){const P=M/200;for(let U=0;U<=200;U++){const $=U/200;v.push(2*$-1,2*P-1,0)}}for(let M=0;M<200;M++)for(let P=0;P<200;P++){const U=P+M*201;x.push(U,U+1,U+200+1),x.push(U+200+1,U+1,U+200+2)}this.vertexCount=x.length,this.positionBuffer=this.device.createBuffer({label:"Water Surface Vertices",size:v.length*4,usage:GPUBufferUsage.VERTEX,mappedAtCreation:!0}),new Float32Array(this.positionBuffer.getMappedRange()).set(v),this.positionBuffer.unmap(),this.indexBuffer=this.device.createBuffer({label:"Water Surface Indices",size:x.length*4,usage:GPUBufferUsage.INDEX,mappedAtCreation:!0}),new Uint32Array(this.indexBuffer.getMappedRange()).set(x),this.indexBuffer.unmap()}createSurfacePipeline(){const i=(P,U)=>this.device.createShaderModule({label:`${P} Vertex Shader`,code:U}),v=(P,U)=>this.device.createShaderModule({label:`${P} Fragment Shader`,code:U});this.surfaceBindGroupLayout=this.device.createBindGroupLayout({label:"Water Surface BindGroupLayout",entries:[{binding:0,visibility:GPUShaderStage.VERTEX|GPUShaderStage.FRAGMENT,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.FRAGMENT,buffer:{type:"uniform"}},{binding:2,visibility:GPUShaderStage.FRAGMENT,buffer:{type:"uniform"}},{binding:3,visibility:GPUShaderStage.FRAGMENT,sampler:{}},{binding:4,visibility:GPUShaderStage.FRAGMENT,texture:{}},{binding:5,visibility:GPUShaderStage.VERTEX|GPUShaderStage.FRAGMENT,sampler:{}},{binding:6,visibility:GPUShaderStage.VERTEX|GPUShaderStage.FRAGMENT,texture:{}},{binding:7,visibility:GPUShaderStage.FRAGMENT,sampler:{}},{binding:8,visibility:GPUShaderStage.FRAGMENT,texture:{viewDimension:"cube"}},{binding:9,visibility:GPUShaderStage.FRAGMENT,texture:{}},{binding:10,visibility:GPUShaderStage.FRAGMENT,buffer:{type:"uniform"}},{binding:11,visibility:GPUShaderStage.FRAGMENT,buffer:{type:"uniform"}}]});const x=this.device.createPipelineLayout({label:"Water Surface PipelineLayout",bindGroupLayouts:[this.surfaceBindGroupLayout]}),M=(P,U,$,I)=>{const N=i(P,U),G=v(P,$);return this.device.createRenderPipeline({label:P,layout:x,vertex:{module:N,entryPoint:"vs_main",buffers:[{arrayStride:12,attributes:[{shaderLocation:0,offset:0,format:"float32x3"}]}]},fragment:{module:G,entryPoint:"fs_main",targets:[{format:navigator.gpu.getPreferredCanvasFormat()}]},primitive:{topology:"triangle-list",cullMode:I},depthStencil:{depthWriteEnabled:!0,depthCompare:"less",format:"depth24plus"}})};this.surfacePipelineAbove=M("Water Surface Above Pipeline",pe,Ze,"front"),this.surfacePipelineUnder=M("Water Surface Under Pipeline",pe,Ke,"back")}renderSurface(i){const v=this.device.createBindGroup({layout:this.surfaceBindGroupLayout,entries:[{binding:0,resource:{buffer:this.commonUniformBuffer}},{binding:1,resource:{buffer:this.lightUniformBuffer}},{binding:2,resource:{buffer:this.sphereUniformBuffer}},{binding:3,resource:this.tileSampler},{binding:4,resource:this.tileTexture.createView()},{binding:5,resource:this.sampler},{binding:6,resource:this.textureA.createView()},{binding:7,resource:this.skySampler},{binding:8,resource:this.skyTexture.createView({dimension:"cube"})},{binding:9,resource:this.causticsTexture.createView()},{binding:10,resource:{buffer:this.shadowUniformBuffer}},{binding:11,resource:{buffer:this.waterUniformBuffer}}]});i.setPipeline(this.surfacePipelineAbove),i.setBindGroup(0,v),i.setVertexBuffer(0,this.positionBuffer),i.setIndexBuffer(this.indexBuffer,"uint32"),i.drawIndexed(this.vertexCount),i.setPipeline(this.surfacePipelineUnder),i.setBindGroup(0,v),i.drawIndexed(this.vertexCount)}createCausticsPipeline(){const i=this.device.createShaderModule({label:"Caustics Vertex Shader",code:Qe}),v=this.device.createShaderModule({label:"Caustics Fragment Shader",code:Je});this.causticsPipeline=this.device.createRenderPipeline({label:"Caustics Pipeline",layout:"auto",vertex:{module:i,entryPoint:"vs_main",buffers:[{arrayStride:12,attributes:[{shaderLocation:0,offset:0,format:"float32x3"}]}]},fragment:{module:v,entryPoint:"fs_main",targets:[{format:"rgba8unorm",blend:{color:{operation:"add",srcFactor:"one",dstFactor:"one"},alpha:{operation:"add",srcFactor:"one",dstFactor:"one"}}}]},primitive:{topology:"triangle-list"}})}updateCaustics(){const i=this.device.createBindGroup({layout:this.causticsPipeline.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:this.lightUniformBuffer}},{binding:1,resource:{buffer:this.sphereUniformBuffer}},{binding:2,resource:this.sampler},{binding:3,resource:this.textureA.createView()},{binding:4,resource:{buffer:this.shadowUniformBuffer}},{binding:5,resource:{buffer:this.waterUniformBuffer}}]}),v=this.device.createCommandEncoder(),x=v.beginRenderPass({colorAttachments:[{view:this.causticsTexture.createView(),loadOp:"clear",storeOp:"store",clearValue:{r:0,g:0,b:0,a:0}}]});x.setPipeline(this.causticsPipeline),x.setBindGroup(0,i),x.setVertexBuffer(0,this.positionBuffer),x.setIndexBuffer(this.indexBuffer,"uint32"),x.drawIndexed(this.vertexCount),x.end(),this.device.queue.submit([v.finish()])}updateWaterParameters(i,v,x,M){this.device.queue.writeBuffer(this.waterUniformBuffer,0,new Float32Array([i,v,x,M]))}}class rt{x;y;z;constructor(i=0,v=0,x=0){this.x=i,this.y=v,this.z=x}negative(){return new rt(-this.x,-this.y,-this.z)}add(i){return i instanceof rt?new rt(this.x+i.x,this.y+i.y,this.z+i.z):new rt(this.x+i,this.y+i,this.z+i)}subtract(i){return i instanceof rt?new rt(this.x-i.x,this.y-i.y,this.z-i.z):new rt(this.x-i,this.y-i,this.z-i)}multiply(i){return i instanceof rt?new rt(this.x*i.x,this.y*i.y,this.z*i.z):new rt(this.x*i,this.y*i,this.z*i)}divide(i){return i instanceof rt?new rt(this.x/i.x,this.y/i.y,this.z/i.z):new rt(this.x/i,this.y/i,this.z/i)}dot(i){return this.x*i.x+this.y*i.y+this.z*i.z}length(){return Math.sqrt(this.dot(this))}unit(){return this.divide(this.length())}toArray(){return[this.x,this.y,this.z]}clone(){return new rt(this.x,this.y,this.z)}static fromAngles(i,v){return new rt(Math.cos(v)*Math.cos(i),Math.sin(v),Math.cos(v)*Math.sin(i))}static lerp(i,v,x){return i.add(v.subtract(i).multiply(x))}}class en{t;hit;normal;constructor(i,v,x){this.t=i,this.hit=v,this.normal=x}}class Zt{eye;viewport;invViewProj;ray00;ray10;ray01;ray11;constructor(i,v,x){this.viewport=x;const M=Vt.invert(i),P=Jt.transformMat4([0,0,0],M);this.eye=new rt(P[0],P[1],P[2]),this.invViewProj=Vt.invert(Vt.multiply(v,i));const[U,$,I,N]=x,G=U+I,F=$+N;this.ray00=this.unProject(U,$,1).subtract(this.eye),this.ray10=this.unProject(G,$,1).subtract(this.eye),this.ray01=this.unProject(U,F,1).subtract(this.eye),this.ray11=this.unProject(G,F,1).subtract(this.eye)}unProject(i,v,x){const[M,P,U,$]=this.viewport,I=(i-M)/U*2-1,N=(1-(v-P)/$)*2-1,G=Jt.transformMat4([I,N,x],this.invViewProj);return new rt(G[0],G[1],G[2])}getRayForPixel(i,v){const[x,M,P,U]=this.viewport,$=(i-x)/P,I=(v-M)/U,N=rt.lerp(this.ray00,this.ray10,$),G=rt.lerp(this.ray01,this.ray11,$);return rt.lerp(N,G,I).unit()}static hitTestSphere(i,v,x,M){const P=i.subtract(x),U=v.dot(v),$=2*v.dot(P),I=P.dot(P)-M*M,N=$*$-4*U*I;if(N>0){const G=(-$-Math.sqrt(N))/(2*U),F=i.add(v.multiply(G)),j=F.subtract(x).divide(M);return new en(G,F,j)}return null}}class nn{device;constructor(i){this.device=i}async load(i){const v=["xpos","xneg","ypos","yneg","zpos","zneg"],x=await Promise.all(v.map($=>fetch(i[$]).then(I=>I.blob()).then(I=>createImageBitmap(I)))),{width:M,height:P}=x[0],U=this.device.createTexture({size:[M,P,6],format:"rgba8unorm",usage:GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_DST|GPUTextureUsage.RENDER_ATTACHMENT});return x.forEach(($,I)=>{this.device.queue.copyExternalImageToTexture({source:$,flipY:!0},{texture:U,origin:[0,0,I]},{width:M,height:P})}),U}}var Ft=(f=>(f[f.None=-1]="None",f[f.AddDrops=0]="AddDrops",f[f.OrbitCamera=1]="OrbitCamera",f[f.MoveSphere=2]="MoveSphere",f))(Ft||{});async function rn(){const f=navigator.gpu;if(!f){document.getElementById("loading").textContent="WebGPU not supported.";return}const i=await f.requestAdapter();if(!i){document.getElementById("loading").textContent="No WebGPU adapter found.";return}const v=[];i.features.has("float32-filterable")&&v.push("float32-filterable");const x=await i.requestDevice({requiredFeatures:v}),M=document.querySelector("canvas"),P=M.getContext("webgpu"),U=navigator.gpu.getPreferredCanvasFormat();P.configure({device:x,format:U,alphaMode:"premultiplied"});const $=document.getElementById("help"),I=window.devicePixelRatio||1;let N=performance.now();async function G(D){const E=await(await fetch(D)).blob(),B=await createImageBitmap(E),q=x.createTexture({label:D,size:[B.width,B.height],format:"rgba8unorm",usage:GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_DST|GPUTextureUsage.RENDER_ATTACHMENT});return x.queue.copyExternalImageToTexture({source:B,flipY:!0},{texture:q},{width:B.width,height:B.height}),q}const F="/webgpu-water/",j=await G(`${F}tiles.jpg`),Q=x.createSampler({magFilter:"linear",minFilter:"linear",addressModeU:"repeat",addressModeV:"repeat"}),J=await new nn(x).load({xpos:`${F}xpos.jpg`,xneg:`${F}xneg.jpg`,ypos:`${F}ypos.jpg`,yneg:`${F}yneg.jpg`,zpos:`${F}zpos.jpg`,zneg:`${F}zneg.jpg`}),ft=x.createSampler({magFilter:"linear",minFilter:"linear"});let V=-25,O=-200.5,X=4,at=V,pt=O,ct=X;function Mt(){const D=M.width/M.height,T=Vt.perspective(Math.PI/4,D,.01,100),E=Vt.identity();return Vt.translate(E,[0,0,-X],E),Vt.rotateX(E,-V*Math.PI/180,E),Vt.rotateY(E,-O*Math.PI/180,E),Vt.translate(E,[0,.5,0],E),{projectionMatrix:T,viewMatrix:E}}const gt=x.createBuffer({size:80,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),mt=x.createBuffer({size:16,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),lt=x.createBuffer({size:16,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),Dt=x.createBuffer({size:16,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),St=x.createBuffer({size:16,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST});let Lt=new rt(2,2,-1).unit();function ht(){x.queue.writeBuffer(mt,0,new Float32Array([...Lt.toArray(),0]))}ht(),x.queue.writeBuffer(Dt,0,new Float32Array([1,1,1,0]));const K=new ke(x,U,gt,j,Q,mt,lt,Dt),Y=new je(x,U,gt,mt,lt),C=new tn(x,256,256,gt,mt,lt,Dt,St,j,Q,J,ft);let Z=new rt(-.4,-.75,.2),It=Z.clone();const H=.25;let it=new rt,ut=!1,Ut=!1;const dt=new ne({title:"Settings"});dt.close();const At=dt.addFolder("Water"),_t=dt.addFolder("Object"),b=dt.addFolder("Scene"),S={gravity:ut,followCamera:!1,object:"Sphere",useDensity:!1,density:.9,causticsIntensity:.2,ior:1.333,fresnelMin:.25};_t.add(S,"object",["Sphere","None"]).name("Object").onChange(D=>{const T=D==="Sphere";x.queue.writeBuffer(Dt,0,new Float32Array([1,T?1:0,1,0])),document.activeElement?.blur()});const d=_t.add(S,"gravity").name("Toggle Gravity").onChange(D=>{ut=D,document.activeElement?.blur()});_t.add(S,"useDensity").name("Enable Density").onChange(()=>{c(),document.activeElement?.blur()});const e=_t.add(S,"density",.2,2,.1).name("Density").onChange(()=>{document.activeElement?.blur()});function c(){e.show(S.useDensity)}c(),b.add(S,"followCamera").name("Light From Camera").onChange(()=>{document.activeElement?.blur()}),At.add(S,"causticsIntensity",0,1,.01).name("Caustics").onChange(()=>{document.activeElement?.blur()}),At.add(S,"ior",1,1.5,.001).name("Refraction").onChange(()=>{document.activeElement?.blur()}),At.add(S,"fresnelMin",0,1,.01).name("Reflection").onChange(()=>{document.activeElement?.blur()}),Y.update(Z.toArray(),H);for(let D=0;D<20;D++)C.addDrop(Math.random()*2-1,Math.random()*2-1,.03,D&1?.01:-.01);const s={};window.addEventListener("keydown",D=>{const T=D.key.toUpperCase();s[T]=!0,T==="G"?(ut=!ut,S.gravity=ut,d.updateDisplay()):T===" "&&(Ut=!Ut)}),window.addEventListener("keyup",D=>{s[D.key.toUpperCase()]=!1});let u=Ft.None,g=0,m=0,w,t;const l=new Map;let r=0;function o(){return[0,0,M.width,M.height]}function n(D,T,E){if(g=D,m=T,E===2){u=Ft.OrbitCamera;return}const{projectionMatrix:B,viewMatrix:q}=Mt(),k=new Zt(q,B,o()),et=k.getRayForPixel(D*I,T*I),tt=S.object==="Sphere"?Zt.hitTestSphere(k.eye,et,Z,H):null;if(tt){u=Ft.MoveSphere,w=tt.hit,t=k.getRayForPixel(M.width/2,M.height/2).negative();return}const ot=-k.eye.y/et.y,st=k.eye.add(et.multiply(ot));Math.abs(st.x)<1&&Math.abs(st.z)<1?(u=Ft.AddDrops,C.addDrop(st.x,st.z,.03,.01)):u=Ft.OrbitCamera}function a(D,T){if(u===Ft.OrbitCamera)pt-=D-g,at-=T-m,at=Math.max(-89.999,Math.min(89.999,at));else if(u===Ft.MoveSphere){const{projectionMatrix:E,viewMatrix:B}=Mt(),q=new Zt(B,E,o()),k=q.getRayForPixel(D*I,T*I),et=-t.dot(q.eye.subtract(w))/t.dot(k),tt=q.eye.add(k.multiply(et));Z=Z.add(tt.subtract(w)),Z.x=Math.max(H-1,Math.min(1-H,Z.x)),Z.y=Math.max(H-1,Math.min(10,Z.y)),Z.z=Math.max(H-1,Math.min(1-H,Z.z)),Y.update(Z.toArray(),H),w=tt}else if(u===Ft.AddDrops){const{projectionMatrix:E,viewMatrix:B}=Mt(),q=new Zt(B,E,o()),k=q.getRayForPixel(D*I,T*I),et=-q.eye.y/k.y,tt=q.eye.add(k.multiply(et));Math.abs(tt.x)<1&&Math.abs(tt.z)<1&&C.addDrop(tt.x,tt.z,.03,.01)}g=D,m=T}function p(){u=Ft.None}function h(){const D=Array.from(l.values());if(D.length<2)return 0;const T=D[0].x-D[1].x,E=D[0].y-D[1].y;return Math.sqrt(T*T+E*E)}M.addEventListener("pointerdown",D=>{if(D.button!==1){if(D.preventDefault(),M.setPointerCapture(D.pointerId),l.set(D.pointerId,{x:D.offsetX,y:D.offsetY}),l.size===2){u=Ft.None,r=h();return}l.size===1&&n(D.offsetX,D.offsetY,D.button)}}),M.addEventListener("contextmenu",D=>D.preventDefault()),M.addEventListener("pointermove",D=>{if(l.has(D.pointerId)&&l.set(D.pointerId,{x:D.offsetX,y:D.offsetY}),l.size===2){const T=h();if(r>0){const E=r-T;ct+=E*.01,ct=Math.max(1.5,Math.min(10,ct))}r=T;return}u!==Ft.None&&l.size===1&&a(D.offsetX,D.offsetY)}),M.addEventListener("pointerup",D=>{M.releasePointerCapture(D.pointerId),l.delete(D.pointerId),l.size<2&&(r=0),l.size===0&&p()}),M.addEventListener("pointercancel",D=>{M.releasePointerCapture(D.pointerId),l.delete(D.pointerId),l.size<2&&(r=0),l.size===0&&p()}),M.addEventListener("wheel",D=>{D.preventDefault(),ct+=D.deltaY*.005,ct=Math.max(1.5,Math.min(10,ct))},{passive:!1});let y;function _(){const T=window.matchMedia("(max-width: 600px)").matches?window.innerWidth:window.innerWidth-$.clientWidth-20,E=window.innerHeight;M.width=Math.floor(T*I),M.height=Math.floor(E*I),M.style.width=`${T}px`,M.style.height=`${E}px`,y&&y.destroy(),y=x.createTexture({size:[M.width,M.height],format:"depth24plus",usage:GPUTextureUsage.RENDER_ATTACHMENT}),R()}window.addEventListener("resize",_);const A=document.getElementById("help-toggle");A.addEventListener("click",()=>{$.classList.toggle("collapsed"),A.textContent=$.classList.contains("collapsed")?"menu":"chevron_right",_()}),window.addEventListener("pointerdown",D=>{if(window.matchMedia("(max-width: 600px)").matches&&!$.classList.contains("collapsed")){const E=D.target;!$.contains(E)&&!A.contains(E)&&($.classList.add("collapsed"),A.textContent="menu",_())}}),document.getElementById("loading").style.display="none",document.body.classList.remove("loading"),_();function L(){const{projectionMatrix:D,viewMatrix:T}=Mt(),E=Vt.multiply(D,T),B=Vt.invert(T),q=Jt.transformMat4([0,0,0],B),k=new Float32Array(20);k.set(E,0),k.set(q,16),x.queue.writeBuffer(gt,0,k)}function R(){const D=performance.now();let T=(D-N)/1e3;if(N=D,T>1&&(T=1),V+=(at-V)*.15,O+=(pt-O)*.15,X+=(ct-X)*.15,(s.L||S.followCamera)&&(Lt=rt.fromAngles((90-O)*Math.PI/180,-V*Math.PI/180),ht()),C.updateWaterParameters(S.useDensity?S.density:0,S.causticsIntensity,S.ior,S.fresnelMin),!Ut){if(u===Ft.MoveSphere)it=new rt;else if(ut){const q=Math.max(0,Math.min(1,(H-Z.y)/(2*H))),k=S.useDensity?1/S.density:1.1,et=-15;it.y+=(et-k*et*q)*T,it.length()>0&&(it=it.subtract(it.unit().multiply(q*T*it.dot(it)*2)));const tt=.1,ot=1-q;it=it.multiply(1-tt*T*ot);const st=S.useDensity?S.density:1,wt=Math.abs(Z.y),vt=Math.max(0,1-wt/H),xt=.5,yt=.5*st,bt=1-vt*(xt+yt)*T;it=it.multiply(Math.max(0,bt)),Z=Z.add(it.multiply(T)),Z.y<H-1&&(Z.y=H-1,it.y=Math.abs(it.y)*.7),Y.update(Z.toArray(),H)}S.object==="Sphere"&&C.moveSphere(It.toArray(),Z.toArray(),H),It=Z.clone(),C.stepSimulation(),C.stepSimulation(),C.updateNormals(),C.updateCaustics()}L();const E=x.createCommandEncoder(),B=E.beginRenderPass({colorAttachments:[{view:P.getCurrentTexture().createView(),clearValue:{r:0,g:0,b:0,a:1},loadOp:"clear",storeOp:"store"}],depthStencilAttachment:{view:y.createView(),depthClearValue:1,depthLoadOp:"clear",depthStoreOp:"store"}});K.render(B,C.textureA,C.sampler,C.causticsTexture),S.object==="Sphere"&&Y.render(B,C.textureA,C.sampler,C.causticsTexture),C.renderSurface(B),B.end(),x.queue.submit([E.finish()])}function z(){requestAnimationFrame(z),R()}requestAnimationFrame(z)}rn();
