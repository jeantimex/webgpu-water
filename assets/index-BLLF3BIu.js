(function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const M of document.querySelectorAll('link[rel="modulepreload"]'))D(M);new MutationObserver(M=>{for(const A of M)if(A.type==="childList")for(const T of A.addedNodes)T.tagName==="LINK"&&T.rel==="modulepreload"&&D(T)}).observe(document,{childList:!0,subtree:!0});function z(M){const A={};return M.integrity&&(A.integrity=M.integrity),M.referrerPolicy&&(A.referrerPolicy=M.referrerPolicy),M.crossOrigin==="use-credentials"?A.credentials="include":M.crossOrigin==="anonymous"?A.credentials="omit":A.credentials="same-origin",A}function D(M){if(M.ep)return;M.ep=!0;const A=z(M);fetch(M.href,A)}})();function ae(w,l){return class extends w{constructor(...z){super(...z),l(this)}}}const ue=ae(Array,w=>w.fill(0));let W=1e-6;function fe(w){function l(p=0,g=0){const x=new w(2);return p!==void 0&&(x[0]=p,g!==void 0&&(x[1]=g)),x}const z=l;function D(p,g,x){const t=x??new w(2);return t[0]=p,t[1]=g,t}function M(p,g){const x=g??new w(2);return x[0]=Math.ceil(p[0]),x[1]=Math.ceil(p[1]),x}function A(p,g){const x=g??new w(2);return x[0]=Math.floor(p[0]),x[1]=Math.floor(p[1]),x}function T(p,g){const x=g??new w(2);return x[0]=Math.round(p[0]),x[1]=Math.round(p[1]),x}function O(p,g=0,x=1,t){const c=t??new w(2);return c[0]=Math.min(x,Math.max(g,p[0])),c[1]=Math.min(x,Math.max(g,p[1])),c}function B(p,g,x){const t=x??new w(2);return t[0]=p[0]+g[0],t[1]=p[1]+g[1],t}function _(p,g,x,t){const c=t??new w(2);return c[0]=p[0]+g[0]*x,c[1]=p[1]+g[1]*x,c}function H(p,g){const x=p[0],t=p[1],c=g[0],r=g[1],s=Math.sqrt(x*x+t*t),n=Math.sqrt(c*c+r*r),i=s*n,h=i&&ht(p,g)/i;return Math.acos(h)}function N(p,g,x){const t=x??new w(2);return t[0]=p[0]-g[0],t[1]=p[1]-g[1],t}const F=N;function k(p,g){return Math.abs(p[0]-g[0])<W&&Math.abs(p[1]-g[1])<W}function C(p,g){return p[0]===g[0]&&p[1]===g[1]}function J(p,g,x,t){const c=t??new w(2);return c[0]=p[0]+x*(g[0]-p[0]),c[1]=p[1]+x*(g[1]-p[1]),c}function rt(p,g,x,t){const c=t??new w(2);return c[0]=p[0]+x[0]*(g[0]-p[0]),c[1]=p[1]+x[1]*(g[1]-p[1]),c}function Q(p,g,x){const t=x??new w(2);return t[0]=Math.max(p[0],g[0]),t[1]=Math.max(p[1],g[1]),t}function et(p,g,x){const t=x??new w(2);return t[0]=Math.min(p[0],g[0]),t[1]=Math.min(p[1],g[1]),t}function st(p,g,x){const t=x??new w(2);return t[0]=p[0]*g,t[1]=p[1]*g,t}const lt=st;function xt(p,g,x){const t=x??new w(2);return t[0]=p[0]/g,t[1]=p[1]/g,t}function ft(p,g){const x=g??new w(2);return x[0]=1/p[0],x[1]=1/p[1],x}const At=ft;function dt(p,g,x){const t=x??new w(3),c=p[0]*g[1]-p[1]*g[0];return t[0]=0,t[1]=0,t[2]=c,t}function ht(p,g){return p[0]*g[0]+p[1]*g[1]}function it(p){const g=p[0],x=p[1];return Math.sqrt(g*g+x*x)}const Ot=it;function ot(p){const g=p[0],x=p[1];return g*g+x*x}const tt=ot;function j(p,g){const x=p[0]-g[0],t=p[1]-g[1];return Math.sqrt(x*x+t*t)}const X=j;function E(p,g){const x=p[0]-g[0],t=p[1]-g[1];return x*x+t*t}const q=E;function pt(p,g){const x=g??new w(2),t=p[0],c=p[1],r=Math.sqrt(t*t+c*c);return r>1e-5?(x[0]=t/r,x[1]=c/r):(x[0]=0,x[1]=0),x}function Ut(p,g){const x=g??new w(2);return x[0]=-p[0],x[1]=-p[1],x}function K(p,g){const x=g??new w(2);return x[0]=p[0],x[1]=p[1],x}const Rt=K;function nt(p,g,x){const t=x??new w(2);return t[0]=p[0]*g[0],t[1]=p[1]*g[1],t}const Lt=nt;function wt(p,g,x){const t=x??new w(2);return t[0]=p[0]/g[0],t[1]=p[1]/g[1],t}const yt=wt;function mt(p=1,g){const x=g??new w(2),t=Math.random()*2*Math.PI;return x[0]=Math.cos(t)*p,x[1]=Math.sin(t)*p,x}function m(p){const g=p??new w(2);return g[0]=0,g[1]=0,g}function P(p,g,x){const t=x??new w(2),c=p[0],r=p[1];return t[0]=c*g[0]+r*g[4]+g[12],t[1]=c*g[1]+r*g[5]+g[13],t}function d(p,g,x){const t=x??new w(2),c=p[0],r=p[1];return t[0]=g[0]*c+g[4]*r+g[8],t[1]=g[1]*c+g[5]*r+g[9],t}function e(p,g,x,t){const c=t??new w(2),r=p[0]-g[0],s=p[1]-g[1],n=Math.sin(x),i=Math.cos(x);return c[0]=r*i-s*n+g[0],c[1]=r*n+s*i+g[1],c}function a(p,g,x){const t=x??new w(2);return pt(p,t),st(t,g,t)}function o(p,g,x){const t=x??new w(2);return it(p)>g?a(p,g,t):K(p,t)}function u(p,g,x){const t=x??new w(2);return J(p,g,.5,t)}return{create:l,fromValues:z,set:D,ceil:M,floor:A,round:T,clamp:O,add:B,addScaled:_,angle:H,subtract:N,sub:F,equalsApproximately:k,equals:C,lerp:J,lerpV:rt,max:Q,min:et,mulScalar:st,scale:lt,divScalar:xt,inverse:ft,invert:At,cross:dt,dot:ht,length:it,len:Ot,lengthSq:ot,lenSq:tt,distance:j,dist:X,distanceSq:E,distSq:q,normalize:pt,negate:Ut,copy:K,clone:Rt,multiply:nt,mul:Lt,divide:wt,div:yt,random:mt,zero:m,transformMat4:P,transformMat3:d,rotate:e,setLength:a,truncate:o,midpoint:u}}const ee=new Map;function ce(w){let l=ee.get(w);return l||(l=fe(w),ee.set(w,l)),l}function le(w){function l(n,i,h){const f=new w(3);return n!==void 0&&(f[0]=n,i!==void 0&&(f[1]=i,h!==void 0&&(f[2]=h))),f}const z=l;function D(n,i,h,f){const y=f??new w(3);return y[0]=n,y[1]=i,y[2]=h,y}function M(n,i){const h=i??new w(3);return h[0]=Math.ceil(n[0]),h[1]=Math.ceil(n[1]),h[2]=Math.ceil(n[2]),h}function A(n,i){const h=i??new w(3);return h[0]=Math.floor(n[0]),h[1]=Math.floor(n[1]),h[2]=Math.floor(n[2]),h}function T(n,i){const h=i??new w(3);return h[0]=Math.round(n[0]),h[1]=Math.round(n[1]),h[2]=Math.round(n[2]),h}function O(n,i=0,h=1,f){const y=f??new w(3);return y[0]=Math.min(h,Math.max(i,n[0])),y[1]=Math.min(h,Math.max(i,n[1])),y[2]=Math.min(h,Math.max(i,n[2])),y}function B(n,i,h){const f=h??new w(3);return f[0]=n[0]+i[0],f[1]=n[1]+i[1],f[2]=n[2]+i[2],f}function _(n,i,h,f){const y=f??new w(3);return y[0]=n[0]+i[0]*h,y[1]=n[1]+i[1]*h,y[2]=n[2]+i[2]*h,y}function H(n,i){const h=n[0],f=n[1],y=n[2],v=i[0],S=i[1],b=i[2],U=Math.sqrt(h*h+f*f+y*y),R=Math.sqrt(v*v+S*S+b*b),I=U*R,V=I&&ht(n,i)/I;return Math.acos(V)}function N(n,i,h){const f=h??new w(3);return f[0]=n[0]-i[0],f[1]=n[1]-i[1],f[2]=n[2]-i[2],f}const F=N;function k(n,i){return Math.abs(n[0]-i[0])<W&&Math.abs(n[1]-i[1])<W&&Math.abs(n[2]-i[2])<W}function C(n,i){return n[0]===i[0]&&n[1]===i[1]&&n[2]===i[2]}function J(n,i,h,f){const y=f??new w(3);return y[0]=n[0]+h*(i[0]-n[0]),y[1]=n[1]+h*(i[1]-n[1]),y[2]=n[2]+h*(i[2]-n[2]),y}function rt(n,i,h,f){const y=f??new w(3);return y[0]=n[0]+h[0]*(i[0]-n[0]),y[1]=n[1]+h[1]*(i[1]-n[1]),y[2]=n[2]+h[2]*(i[2]-n[2]),y}function Q(n,i,h){const f=h??new w(3);return f[0]=Math.max(n[0],i[0]),f[1]=Math.max(n[1],i[1]),f[2]=Math.max(n[2],i[2]),f}function et(n,i,h){const f=h??new w(3);return f[0]=Math.min(n[0],i[0]),f[1]=Math.min(n[1],i[1]),f[2]=Math.min(n[2],i[2]),f}function st(n,i,h){const f=h??new w(3);return f[0]=n[0]*i,f[1]=n[1]*i,f[2]=n[2]*i,f}const lt=st;function xt(n,i,h){const f=h??new w(3);return f[0]=n[0]/i,f[1]=n[1]/i,f[2]=n[2]/i,f}function ft(n,i){const h=i??new w(3);return h[0]=1/n[0],h[1]=1/n[1],h[2]=1/n[2],h}const At=ft;function dt(n,i,h){const f=h??new w(3),y=n[2]*i[0]-n[0]*i[2],v=n[0]*i[1]-n[1]*i[0];return f[0]=n[1]*i[2]-n[2]*i[1],f[1]=y,f[2]=v,f}function ht(n,i){return n[0]*i[0]+n[1]*i[1]+n[2]*i[2]}function it(n){const i=n[0],h=n[1],f=n[2];return Math.sqrt(i*i+h*h+f*f)}const Ot=it;function ot(n){const i=n[0],h=n[1],f=n[2];return i*i+h*h+f*f}const tt=ot;function j(n,i){const h=n[0]-i[0],f=n[1]-i[1],y=n[2]-i[2];return Math.sqrt(h*h+f*f+y*y)}const X=j;function E(n,i){const h=n[0]-i[0],f=n[1]-i[1],y=n[2]-i[2];return h*h+f*f+y*y}const q=E;function pt(n,i){const h=i??new w(3),f=n[0],y=n[1],v=n[2],S=Math.sqrt(f*f+y*y+v*v);return S>1e-5?(h[0]=f/S,h[1]=y/S,h[2]=v/S):(h[0]=0,h[1]=0,h[2]=0),h}function Ut(n,i){const h=i??new w(3);return h[0]=-n[0],h[1]=-n[1],h[2]=-n[2],h}function K(n,i){const h=i??new w(3);return h[0]=n[0],h[1]=n[1],h[2]=n[2],h}const Rt=K;function nt(n,i,h){const f=h??new w(3);return f[0]=n[0]*i[0],f[1]=n[1]*i[1],f[2]=n[2]*i[2],f}const Lt=nt;function wt(n,i,h){const f=h??new w(3);return f[0]=n[0]/i[0],f[1]=n[1]/i[1],f[2]=n[2]/i[2],f}const yt=wt;function mt(n=1,i){const h=i??new w(3),f=Math.random()*2*Math.PI,y=Math.random()*2-1,v=Math.sqrt(1-y*y)*n;return h[0]=Math.cos(f)*v,h[1]=Math.sin(f)*v,h[2]=y*n,h}function m(n){const i=n??new w(3);return i[0]=0,i[1]=0,i[2]=0,i}function P(n,i,h){const f=h??new w(3),y=n[0],v=n[1],S=n[2],b=i[3]*y+i[7]*v+i[11]*S+i[15]||1;return f[0]=(i[0]*y+i[4]*v+i[8]*S+i[12])/b,f[1]=(i[1]*y+i[5]*v+i[9]*S+i[13])/b,f[2]=(i[2]*y+i[6]*v+i[10]*S+i[14])/b,f}function d(n,i,h){const f=h??new w(3),y=n[0],v=n[1],S=n[2];return f[0]=y*i[0]+v*i[4]+S*i[8],f[1]=y*i[1]+v*i[5]+S*i[9],f[2]=y*i[2]+v*i[6]+S*i[10],f}function e(n,i,h){const f=h??new w(3),y=n[0],v=n[1],S=n[2];return f[0]=y*i[0]+v*i[4]+S*i[8],f[1]=y*i[1]+v*i[5]+S*i[9],f[2]=y*i[2]+v*i[6]+S*i[10],f}function a(n,i,h){const f=h??new w(3),y=i[0],v=i[1],S=i[2],b=i[3]*2,U=n[0],R=n[1],I=n[2],V=v*I-S*R,L=S*U-y*I,G=y*R-v*U;return f[0]=U+V*b+(v*G-S*L)*2,f[1]=R+L*b+(S*V-y*G)*2,f[2]=I+G*b+(y*L-v*V)*2,f}function o(n,i){const h=i??new w(3);return h[0]=n[12],h[1]=n[13],h[2]=n[14],h}function u(n,i,h){const f=h??new w(3),y=i*4;return f[0]=n[y+0],f[1]=n[y+1],f[2]=n[y+2],f}function p(n,i){const h=i??new w(3),f=n[0],y=n[1],v=n[2],S=n[4],b=n[5],U=n[6],R=n[8],I=n[9],V=n[10];return h[0]=Math.sqrt(f*f+y*y+v*v),h[1]=Math.sqrt(S*S+b*b+U*U),h[2]=Math.sqrt(R*R+I*I+V*V),h}function g(n,i,h,f){const y=f??new w(3),v=[],S=[];return v[0]=n[0]-i[0],v[1]=n[1]-i[1],v[2]=n[2]-i[2],S[0]=v[0],S[1]=v[1]*Math.cos(h)-v[2]*Math.sin(h),S[2]=v[1]*Math.sin(h)+v[2]*Math.cos(h),y[0]=S[0]+i[0],y[1]=S[1]+i[1],y[2]=S[2]+i[2],y}function x(n,i,h,f){const y=f??new w(3),v=[],S=[];return v[0]=n[0]-i[0],v[1]=n[1]-i[1],v[2]=n[2]-i[2],S[0]=v[2]*Math.sin(h)+v[0]*Math.cos(h),S[1]=v[1],S[2]=v[2]*Math.cos(h)-v[0]*Math.sin(h),y[0]=S[0]+i[0],y[1]=S[1]+i[1],y[2]=S[2]+i[2],y}function t(n,i,h,f){const y=f??new w(3),v=[],S=[];return v[0]=n[0]-i[0],v[1]=n[1]-i[1],v[2]=n[2]-i[2],S[0]=v[0]*Math.cos(h)-v[1]*Math.sin(h),S[1]=v[0]*Math.sin(h)+v[1]*Math.cos(h),S[2]=v[2],y[0]=S[0]+i[0],y[1]=S[1]+i[1],y[2]=S[2]+i[2],y}function c(n,i,h){const f=h??new w(3);return pt(n,f),st(f,i,f)}function r(n,i,h){const f=h??new w(3);return it(n)>i?c(n,i,f):K(n,f)}function s(n,i,h){const f=h??new w(3);return J(n,i,.5,f)}return{create:l,fromValues:z,set:D,ceil:M,floor:A,round:T,clamp:O,add:B,addScaled:_,angle:H,subtract:N,sub:F,equalsApproximately:k,equals:C,lerp:J,lerpV:rt,max:Q,min:et,mulScalar:st,scale:lt,divScalar:xt,inverse:ft,invert:At,cross:dt,dot:ht,length:it,len:Ot,lengthSq:ot,lenSq:tt,distance:j,dist:X,distanceSq:E,distSq:q,normalize:pt,negate:Ut,copy:K,clone:Rt,multiply:nt,mul:Lt,divide:wt,div:yt,random:mt,zero:m,transformMat4:P,transformMat4Upper3x3:d,transformMat3:e,transformQuat:a,getTranslation:o,getAxis:u,getScaling:p,rotateX:g,rotateY:x,rotateZ:t,setLength:c,truncate:r,midpoint:s}}const ne=new Map;function $t(w){let l=ne.get(w);return l||(l=le(w),ne.set(w,l)),l}function de(w){const l=ce(w),z=$t(w);function D(e,a,o,u,p,g,x,t,c){const r=new w(12);return r[3]=0,r[7]=0,r[11]=0,e!==void 0&&(r[0]=e,a!==void 0&&(r[1]=a,o!==void 0&&(r[2]=o,u!==void 0&&(r[4]=u,p!==void 0&&(r[5]=p,g!==void 0&&(r[6]=g,x!==void 0&&(r[8]=x,t!==void 0&&(r[9]=t,c!==void 0&&(r[10]=c))))))))),r}function M(e,a,o,u,p,g,x,t,c,r){const s=r??new w(12);return s[0]=e,s[1]=a,s[2]=o,s[3]=0,s[4]=u,s[5]=p,s[6]=g,s[7]=0,s[8]=x,s[9]=t,s[10]=c,s[11]=0,s}function A(e,a){const o=a??new w(12);return o[0]=e[0],o[1]=e[1],o[2]=e[2],o[3]=0,o[4]=e[4],o[5]=e[5],o[6]=e[6],o[7]=0,o[8]=e[8],o[9]=e[9],o[10]=e[10],o[11]=0,o}function T(e,a){const o=a??new w(12),u=e[0],p=e[1],g=e[2],x=e[3],t=u+u,c=p+p,r=g+g,s=u*t,n=p*t,i=p*c,h=g*t,f=g*c,y=g*r,v=x*t,S=x*c,b=x*r;return o[0]=1-i-y,o[1]=n+b,o[2]=h-S,o[3]=0,o[4]=n-b,o[5]=1-s-y,o[6]=f+v,o[7]=0,o[8]=h+S,o[9]=f-v,o[10]=1-s-i,o[11]=0,o}function O(e,a){const o=a??new w(12);return o[0]=-e[0],o[1]=-e[1],o[2]=-e[2],o[4]=-e[4],o[5]=-e[5],o[6]=-e[6],o[8]=-e[8],o[9]=-e[9],o[10]=-e[10],o}function B(e,a,o){const u=o??new w(12);return u[0]=e[0]*a,u[1]=e[1]*a,u[2]=e[2]*a,u[4]=e[4]*a,u[5]=e[5]*a,u[6]=e[6]*a,u[8]=e[8]*a,u[9]=e[9]*a,u[10]=e[10]*a,u}const _=B;function H(e,a,o){const u=o??new w(12);return u[0]=e[0]+a[0],u[1]=e[1]+a[1],u[2]=e[2]+a[2],u[4]=e[4]+a[4],u[5]=e[5]+a[5],u[6]=e[6]+a[6],u[8]=e[8]+a[8],u[9]=e[9]+a[9],u[10]=e[10]+a[10],u}function N(e,a){const o=a??new w(12);return o[0]=e[0],o[1]=e[1],o[2]=e[2],o[4]=e[4],o[5]=e[5],o[6]=e[6],o[8]=e[8],o[9]=e[9],o[10]=e[10],o}const F=N;function k(e,a){return Math.abs(e[0]-a[0])<W&&Math.abs(e[1]-a[1])<W&&Math.abs(e[2]-a[2])<W&&Math.abs(e[4]-a[4])<W&&Math.abs(e[5]-a[5])<W&&Math.abs(e[6]-a[6])<W&&Math.abs(e[8]-a[8])<W&&Math.abs(e[9]-a[9])<W&&Math.abs(e[10]-a[10])<W}function C(e,a){return e[0]===a[0]&&e[1]===a[1]&&e[2]===a[2]&&e[4]===a[4]&&e[5]===a[5]&&e[6]===a[6]&&e[8]===a[8]&&e[9]===a[9]&&e[10]===a[10]}function J(e){const a=e??new w(12);return a[0]=1,a[1]=0,a[2]=0,a[4]=0,a[5]=1,a[6]=0,a[8]=0,a[9]=0,a[10]=1,a}function rt(e,a){const o=a??new w(12);if(o===e){let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,o}const u=e[0],p=e[1],g=e[2],x=e[4],t=e[5],c=e[6],r=e[8],s=e[9],n=e[10];return o[0]=u,o[1]=x,o[2]=r,o[4]=p,o[5]=t,o[6]=s,o[8]=g,o[9]=c,o[10]=n,o}function Q(e,a){const o=a??new w(12),u=e[0],p=e[1],g=e[2],x=e[4],t=e[5],c=e[6],r=e[8],s=e[9],n=e[10],i=n*t-c*s,h=-n*x+c*r,f=s*x-t*r,y=1/(u*i+p*h+g*f);return o[0]=i*y,o[1]=(-n*p+g*s)*y,o[2]=(c*p-g*t)*y,o[4]=h*y,o[5]=(n*u-g*r)*y,o[6]=(-c*u+g*x)*y,o[8]=f*y,o[9]=(-s*u+p*r)*y,o[10]=(t*u-p*x)*y,o}function et(e){const a=e[0],o=e[1],u=e[2],p=e[4],g=e[5],x=e[6],t=e[8],c=e[9],r=e[10];return a*(g*r-c*x)-p*(o*r-c*u)+t*(o*x-g*u)}const st=Q;function lt(e,a,o){const u=o??new w(12),p=e[0],g=e[1],x=e[2],t=e[4],c=e[5],r=e[6],s=e[8],n=e[9],i=e[10],h=a[0],f=a[1],y=a[2],v=a[4],S=a[5],b=a[6],U=a[8],R=a[9],I=a[10];return u[0]=p*h+t*f+s*y,u[1]=g*h+c*f+n*y,u[2]=x*h+r*f+i*y,u[4]=p*v+t*S+s*b,u[5]=g*v+c*S+n*b,u[6]=x*v+r*S+i*b,u[8]=p*U+t*R+s*I,u[9]=g*U+c*R+n*I,u[10]=x*U+r*R+i*I,u}const xt=lt;function ft(e,a,o){const u=o??J();return e!==u&&(u[0]=e[0],u[1]=e[1],u[2]=e[2],u[4]=e[4],u[5]=e[5],u[6]=e[6]),u[8]=a[0],u[9]=a[1],u[10]=1,u}function At(e,a){const o=a??l.create();return o[0]=e[8],o[1]=e[9],o}function dt(e,a,o){const u=o??l.create(),p=a*4;return u[0]=e[p+0],u[1]=e[p+1],u}function ht(e,a,o,u){const p=u===e?e:N(e,u),g=o*4;return p[g+0]=a[0],p[g+1]=a[1],p}function it(e,a){const o=a??l.create(),u=e[0],p=e[1],g=e[4],x=e[5];return o[0]=Math.sqrt(u*u+p*p),o[1]=Math.sqrt(g*g+x*x),o}function Ot(e,a){const o=a??z.create(),u=e[0],p=e[1],g=e[2],x=e[4],t=e[5],c=e[6],r=e[8],s=e[9],n=e[10];return o[0]=Math.sqrt(u*u+p*p+g*g),o[1]=Math.sqrt(x*x+t*t+c*c),o[2]=Math.sqrt(r*r+s*s+n*n),o}function ot(e,a){const o=a??new w(12);return o[0]=1,o[1]=0,o[2]=0,o[4]=0,o[5]=1,o[6]=0,o[8]=e[0],o[9]=e[1],o[10]=1,o}function tt(e,a,o){const u=o??new w(12),p=a[0],g=a[1],x=e[0],t=e[1],c=e[2],r=e[4],s=e[5],n=e[6],i=e[8],h=e[9],f=e[10];return e!==u&&(u[0]=x,u[1]=t,u[2]=c,u[4]=r,u[5]=s,u[6]=n),u[8]=x*p+r*g+i,u[9]=t*p+s*g+h,u[10]=c*p+n*g+f,u}function j(e,a){const o=a??new w(12),u=Math.cos(e),p=Math.sin(e);return o[0]=u,o[1]=p,o[2]=0,o[4]=-p,o[5]=u,o[6]=0,o[8]=0,o[9]=0,o[10]=1,o}function X(e,a,o){const u=o??new w(12),p=e[0],g=e[1],x=e[2],t=e[4],c=e[5],r=e[6],s=Math.cos(a),n=Math.sin(a);return u[0]=s*p+n*t,u[1]=s*g+n*c,u[2]=s*x+n*r,u[4]=s*t-n*p,u[5]=s*c-n*g,u[6]=s*r-n*x,e!==u&&(u[8]=e[8],u[9]=e[9],u[10]=e[10]),u}function E(e,a){const o=a??new w(12),u=Math.cos(e),p=Math.sin(e);return o[0]=1,o[1]=0,o[2]=0,o[4]=0,o[5]=u,o[6]=p,o[8]=0,o[9]=-p,o[10]=u,o}function q(e,a,o){const u=o??new w(12),p=e[4],g=e[5],x=e[6],t=e[8],c=e[9],r=e[10],s=Math.cos(a),n=Math.sin(a);return u[4]=s*p+n*t,u[5]=s*g+n*c,u[6]=s*x+n*r,u[8]=s*t-n*p,u[9]=s*c-n*g,u[10]=s*r-n*x,e!==u&&(u[0]=e[0],u[1]=e[1],u[2]=e[2]),u}function pt(e,a){const o=a??new w(12),u=Math.cos(e),p=Math.sin(e);return o[0]=u,o[1]=0,o[2]=-p,o[4]=0,o[5]=1,o[6]=0,o[8]=p,o[9]=0,o[10]=u,o}function Ut(e,a,o){const u=o??new w(12),p=e[0],g=e[1],x=e[2],t=e[8],c=e[9],r=e[10],s=Math.cos(a),n=Math.sin(a);return u[0]=s*p-n*t,u[1]=s*g-n*c,u[2]=s*x-n*r,u[8]=s*t+n*p,u[9]=s*c+n*g,u[10]=s*r+n*x,e!==u&&(u[4]=e[4],u[5]=e[5],u[6]=e[6]),u}const K=j,Rt=X;function nt(e,a){const o=a??new w(12);return o[0]=e[0],o[1]=0,o[2]=0,o[4]=0,o[5]=e[1],o[6]=0,o[8]=0,o[9]=0,o[10]=1,o}function Lt(e,a,o){const u=o??new w(12),p=a[0],g=a[1];return u[0]=p*e[0],u[1]=p*e[1],u[2]=p*e[2],u[4]=g*e[4],u[5]=g*e[5],u[6]=g*e[6],e!==u&&(u[8]=e[8],u[9]=e[9],u[10]=e[10]),u}function wt(e,a){const o=a??new w(12);return o[0]=e[0],o[1]=0,o[2]=0,o[4]=0,o[5]=e[1],o[6]=0,o[8]=0,o[9]=0,o[10]=e[2],o}function yt(e,a,o){const u=o??new w(12),p=a[0],g=a[1],x=a[2];return u[0]=p*e[0],u[1]=p*e[1],u[2]=p*e[2],u[4]=g*e[4],u[5]=g*e[5],u[6]=g*e[6],u[8]=x*e[8],u[9]=x*e[9],u[10]=x*e[10],u}function mt(e,a){const o=a??new w(12);return o[0]=e,o[1]=0,o[2]=0,o[4]=0,o[5]=e,o[6]=0,o[8]=0,o[9]=0,o[10]=1,o}function m(e,a,o){const u=o??new w(12);return u[0]=a*e[0],u[1]=a*e[1],u[2]=a*e[2],u[4]=a*e[4],u[5]=a*e[5],u[6]=a*e[6],e!==u&&(u[8]=e[8],u[9]=e[9],u[10]=e[10]),u}function P(e,a){const o=a??new w(12);return o[0]=e,o[1]=0,o[2]=0,o[4]=0,o[5]=e,o[6]=0,o[8]=0,o[9]=0,o[10]=e,o}function d(e,a,o){const u=o??new w(12);return u[0]=a*e[0],u[1]=a*e[1],u[2]=a*e[2],u[4]=a*e[4],u[5]=a*e[5],u[6]=a*e[6],u[8]=a*e[8],u[9]=a*e[9],u[10]=a*e[10],u}return{add:H,clone:F,copy:N,create:D,determinant:et,equals:C,equalsApproximately:k,fromMat4:A,fromQuat:T,get3DScaling:Ot,getAxis:dt,getScaling:it,getTranslation:At,identity:J,inverse:Q,invert:st,mul:xt,mulScalar:_,multiply:lt,multiplyScalar:B,negate:O,rotate:X,rotateX:q,rotateY:Ut,rotateZ:Rt,rotation:j,rotationX:E,rotationY:pt,rotationZ:K,scale:Lt,scale3D:yt,scaling:nt,scaling3D:wt,set:M,setAxis:ht,setTranslation:ft,translate:tt,translation:ot,transpose:rt,uniformScale:m,uniformScale3D:d,uniformScaling:mt,uniformScaling3D:P}}const re=new Map;function he(w){let l=re.get(w);return l||(l=de(w),re.set(w,l)),l}function pe(w){const l=$t(w);function z(t,c,r,s,n,i,h,f,y,v,S,b,U,R,I,V){const L=new w(16);return t!==void 0&&(L[0]=t,c!==void 0&&(L[1]=c,r!==void 0&&(L[2]=r,s!==void 0&&(L[3]=s,n!==void 0&&(L[4]=n,i!==void 0&&(L[5]=i,h!==void 0&&(L[6]=h,f!==void 0&&(L[7]=f,y!==void 0&&(L[8]=y,v!==void 0&&(L[9]=v,S!==void 0&&(L[10]=S,b!==void 0&&(L[11]=b,U!==void 0&&(L[12]=U,R!==void 0&&(L[13]=R,I!==void 0&&(L[14]=I,V!==void 0&&(L[15]=V)))))))))))))))),L}function D(t,c,r,s,n,i,h,f,y,v,S,b,U,R,I,V,L){const G=L??new w(16);return G[0]=t,G[1]=c,G[2]=r,G[3]=s,G[4]=n,G[5]=i,G[6]=h,G[7]=f,G[8]=y,G[9]=v,G[10]=S,G[11]=b,G[12]=U,G[13]=R,G[14]=I,G[15]=V,G}function M(t,c){const r=c??new w(16);return r[0]=t[0],r[1]=t[1],r[2]=t[2],r[3]=0,r[4]=t[4],r[5]=t[5],r[6]=t[6],r[7]=0,r[8]=t[8],r[9]=t[9],r[10]=t[10],r[11]=0,r[12]=0,r[13]=0,r[14]=0,r[15]=1,r}function A(t,c){const r=c??new w(16),s=t[0],n=t[1],i=t[2],h=t[3],f=s+s,y=n+n,v=i+i,S=s*f,b=n*f,U=n*y,R=i*f,I=i*y,V=i*v,L=h*f,G=h*y,Z=h*v;return r[0]=1-U-V,r[1]=b+Z,r[2]=R-G,r[3]=0,r[4]=b-Z,r[5]=1-S-V,r[6]=I+L,r[7]=0,r[8]=R+G,r[9]=I-L,r[10]=1-S-U,r[11]=0,r[12]=0,r[13]=0,r[14]=0,r[15]=1,r}function T(t,c){const r=c??new w(16);return r[0]=-t[0],r[1]=-t[1],r[2]=-t[2],r[3]=-t[3],r[4]=-t[4],r[5]=-t[5],r[6]=-t[6],r[7]=-t[7],r[8]=-t[8],r[9]=-t[9],r[10]=-t[10],r[11]=-t[11],r[12]=-t[12],r[13]=-t[13],r[14]=-t[14],r[15]=-t[15],r}function O(t,c,r){const s=r??new w(16);return s[0]=t[0]+c[0],s[1]=t[1]+c[1],s[2]=t[2]+c[2],s[3]=t[3]+c[3],s[4]=t[4]+c[4],s[5]=t[5]+c[5],s[6]=t[6]+c[6],s[7]=t[7]+c[7],s[8]=t[8]+c[8],s[9]=t[9]+c[9],s[10]=t[10]+c[10],s[11]=t[11]+c[11],s[12]=t[12]+c[12],s[13]=t[13]+c[13],s[14]=t[14]+c[14],s[15]=t[15]+c[15],s}function B(t,c,r){const s=r??new w(16);return s[0]=t[0]*c,s[1]=t[1]*c,s[2]=t[2]*c,s[3]=t[3]*c,s[4]=t[4]*c,s[5]=t[5]*c,s[6]=t[6]*c,s[7]=t[7]*c,s[8]=t[8]*c,s[9]=t[9]*c,s[10]=t[10]*c,s[11]=t[11]*c,s[12]=t[12]*c,s[13]=t[13]*c,s[14]=t[14]*c,s[15]=t[15]*c,s}const _=B;function H(t,c){const r=c??new w(16);return r[0]=t[0],r[1]=t[1],r[2]=t[2],r[3]=t[3],r[4]=t[4],r[5]=t[5],r[6]=t[6],r[7]=t[7],r[8]=t[8],r[9]=t[9],r[10]=t[10],r[11]=t[11],r[12]=t[12],r[13]=t[13],r[14]=t[14],r[15]=t[15],r}const N=H;function F(t,c){return Math.abs(t[0]-c[0])<W&&Math.abs(t[1]-c[1])<W&&Math.abs(t[2]-c[2])<W&&Math.abs(t[3]-c[3])<W&&Math.abs(t[4]-c[4])<W&&Math.abs(t[5]-c[5])<W&&Math.abs(t[6]-c[6])<W&&Math.abs(t[7]-c[7])<W&&Math.abs(t[8]-c[8])<W&&Math.abs(t[9]-c[9])<W&&Math.abs(t[10]-c[10])<W&&Math.abs(t[11]-c[11])<W&&Math.abs(t[12]-c[12])<W&&Math.abs(t[13]-c[13])<W&&Math.abs(t[14]-c[14])<W&&Math.abs(t[15]-c[15])<W}function k(t,c){return t[0]===c[0]&&t[1]===c[1]&&t[2]===c[2]&&t[3]===c[3]&&t[4]===c[4]&&t[5]===c[5]&&t[6]===c[6]&&t[7]===c[7]&&t[8]===c[8]&&t[9]===c[9]&&t[10]===c[10]&&t[11]===c[11]&&t[12]===c[12]&&t[13]===c[13]&&t[14]===c[14]&&t[15]===c[15]}function C(t){const c=t??new w(16);return c[0]=1,c[1]=0,c[2]=0,c[3]=0,c[4]=0,c[5]=1,c[6]=0,c[7]=0,c[8]=0,c[9]=0,c[10]=1,c[11]=0,c[12]=0,c[13]=0,c[14]=0,c[15]=1,c}function J(t,c){const r=c??new w(16);if(r===t){let $;return $=t[1],t[1]=t[4],t[4]=$,$=t[2],t[2]=t[8],t[8]=$,$=t[3],t[3]=t[12],t[12]=$,$=t[6],t[6]=t[9],t[9]=$,$=t[7],t[7]=t[13],t[13]=$,$=t[11],t[11]=t[14],t[14]=$,r}const s=t[0],n=t[1],i=t[2],h=t[3],f=t[4],y=t[5],v=t[6],S=t[7],b=t[8],U=t[9],R=t[10],I=t[11],V=t[12],L=t[13],G=t[14],Z=t[15];return r[0]=s,r[1]=f,r[2]=b,r[3]=V,r[4]=n,r[5]=y,r[6]=U,r[7]=L,r[8]=i,r[9]=v,r[10]=R,r[11]=G,r[12]=h,r[13]=S,r[14]=I,r[15]=Z,r}function rt(t,c){const r=c??new w(16),s=t[0],n=t[1],i=t[2],h=t[3],f=t[4],y=t[5],v=t[6],S=t[7],b=t[8],U=t[9],R=t[10],I=t[11],V=t[12],L=t[13],G=t[14],Z=t[15],$=R*Z,ct=G*I,at=v*Z,ut=G*S,gt=v*I,vt=R*S,Mt=i*Z,St=G*h,Dt=i*I,Pt=R*h,Tt=i*S,bt=v*h,Bt=b*L,It=V*U,Gt=f*L,_t=V*y,Et=f*U,Vt=b*y,Ft=s*L,Nt=V*n,Wt=s*U,jt=b*n,Ht=s*y,Xt=f*n,Kt=$*y+ut*U+gt*L-(ct*y+at*U+vt*L),Jt=ct*n+Mt*U+Pt*L-($*n+St*U+Dt*L),Ct=at*n+St*y+Tt*L-(ut*n+Mt*y+bt*L),te=vt*n+Dt*y+bt*U-(gt*n+Pt*y+Tt*U),zt=1/(s*Kt+f*Jt+b*Ct+V*te);return r[0]=zt*Kt,r[1]=zt*Jt,r[2]=zt*Ct,r[3]=zt*te,r[4]=zt*(ct*f+at*b+vt*V-($*f+ut*b+gt*V)),r[5]=zt*($*s+St*b+Dt*V-(ct*s+Mt*b+Pt*V)),r[6]=zt*(ut*s+Mt*f+bt*V-(at*s+St*f+Tt*V)),r[7]=zt*(gt*s+Pt*f+Tt*b-(vt*s+Dt*f+bt*b)),r[8]=zt*(Bt*S+_t*I+Et*Z-(It*S+Gt*I+Vt*Z)),r[9]=zt*(It*h+Ft*I+jt*Z-(Bt*h+Nt*I+Wt*Z)),r[10]=zt*(Gt*h+Nt*S+Ht*Z-(_t*h+Ft*S+Xt*Z)),r[11]=zt*(Vt*h+Wt*S+Xt*I-(Et*h+jt*S+Ht*I)),r[12]=zt*(Gt*R+Vt*G+It*v-(Et*G+Bt*v+_t*R)),r[13]=zt*(Wt*G+Bt*i+Nt*R-(Ft*R+jt*G+It*i)),r[14]=zt*(Ft*v+Xt*G+_t*i-(Ht*G+Gt*i+Nt*v)),r[15]=zt*(Ht*R+Et*i+jt*v-(Wt*v+Xt*R+Vt*i)),r}function Q(t){const c=t[0],r=t[1],s=t[2],n=t[3],i=t[4],h=t[5],f=t[6],y=t[7],v=t[8],S=t[9],b=t[10],U=t[11],R=t[12],I=t[13],V=t[14],L=t[15],G=b*L,Z=V*U,$=f*L,ct=V*y,at=f*U,ut=b*y,gt=s*L,vt=V*n,Mt=s*U,St=b*n,Dt=s*y,Pt=f*n,Tt=G*h+ct*S+at*I-(Z*h+$*S+ut*I),bt=Z*r+gt*S+St*I-(G*r+vt*S+Mt*I),Bt=$*r+vt*h+Dt*I-(ct*r+gt*h+Pt*I),It=ut*r+Mt*h+Pt*S-(at*r+St*h+Dt*S);return c*Tt+i*bt+v*Bt+R*It}const et=rt;function st(t,c,r){const s=r??new w(16),n=t[0],i=t[1],h=t[2],f=t[3],y=t[4],v=t[5],S=t[6],b=t[7],U=t[8],R=t[9],I=t[10],V=t[11],L=t[12],G=t[13],Z=t[14],$=t[15],ct=c[0],at=c[1],ut=c[2],gt=c[3],vt=c[4],Mt=c[5],St=c[6],Dt=c[7],Pt=c[8],Tt=c[9],bt=c[10],Bt=c[11],It=c[12],Gt=c[13],_t=c[14],Et=c[15];return s[0]=n*ct+y*at+U*ut+L*gt,s[1]=i*ct+v*at+R*ut+G*gt,s[2]=h*ct+S*at+I*ut+Z*gt,s[3]=f*ct+b*at+V*ut+$*gt,s[4]=n*vt+y*Mt+U*St+L*Dt,s[5]=i*vt+v*Mt+R*St+G*Dt,s[6]=h*vt+S*Mt+I*St+Z*Dt,s[7]=f*vt+b*Mt+V*St+$*Dt,s[8]=n*Pt+y*Tt+U*bt+L*Bt,s[9]=i*Pt+v*Tt+R*bt+G*Bt,s[10]=h*Pt+S*Tt+I*bt+Z*Bt,s[11]=f*Pt+b*Tt+V*bt+$*Bt,s[12]=n*It+y*Gt+U*_t+L*Et,s[13]=i*It+v*Gt+R*_t+G*Et,s[14]=h*It+S*Gt+I*_t+Z*Et,s[15]=f*It+b*Gt+V*_t+$*Et,s}const lt=st;function xt(t,c,r){const s=r??C();return t!==s&&(s[0]=t[0],s[1]=t[1],s[2]=t[2],s[3]=t[3],s[4]=t[4],s[5]=t[5],s[6]=t[6],s[7]=t[7],s[8]=t[8],s[9]=t[9],s[10]=t[10],s[11]=t[11]),s[12]=c[0],s[13]=c[1],s[14]=c[2],s[15]=1,s}function ft(t,c){const r=c??l.create();return r[0]=t[12],r[1]=t[13],r[2]=t[14],r}function At(t,c,r){const s=r??l.create(),n=c*4;return s[0]=t[n+0],s[1]=t[n+1],s[2]=t[n+2],s}function dt(t,c,r,s){const n=s===t?s:H(t,s),i=r*4;return n[i+0]=c[0],n[i+1]=c[1],n[i+2]=c[2],n}function ht(t,c){const r=c??l.create(),s=t[0],n=t[1],i=t[2],h=t[4],f=t[5],y=t[6],v=t[8],S=t[9],b=t[10];return r[0]=Math.sqrt(s*s+n*n+i*i),r[1]=Math.sqrt(h*h+f*f+y*y),r[2]=Math.sqrt(v*v+S*S+b*b),r}function it(t,c,r,s,n){const i=n??new w(16),h=Math.tan(Math.PI*.5-.5*t);if(i[0]=h/c,i[1]=0,i[2]=0,i[3]=0,i[4]=0,i[5]=h,i[6]=0,i[7]=0,i[8]=0,i[9]=0,i[11]=-1,i[12]=0,i[13]=0,i[15]=0,Number.isFinite(s)){const f=1/(r-s);i[10]=s*f,i[14]=s*r*f}else i[10]=-1,i[14]=-r;return i}function Ot(t,c,r,s=1/0,n){const i=n??new w(16),h=1/Math.tan(t*.5);if(i[0]=h/c,i[1]=0,i[2]=0,i[3]=0,i[4]=0,i[5]=h,i[6]=0,i[7]=0,i[8]=0,i[9]=0,i[11]=-1,i[12]=0,i[13]=0,i[15]=0,s===1/0)i[10]=0,i[14]=r;else{const f=1/(s-r);i[10]=r*f,i[14]=s*r*f}return i}function ot(t,c,r,s,n,i,h){const f=h??new w(16);return f[0]=2/(c-t),f[1]=0,f[2]=0,f[3]=0,f[4]=0,f[5]=2/(s-r),f[6]=0,f[7]=0,f[8]=0,f[9]=0,f[10]=1/(n-i),f[11]=0,f[12]=(c+t)/(t-c),f[13]=(s+r)/(r-s),f[14]=n/(n-i),f[15]=1,f}function tt(t,c,r,s,n,i,h){const f=h??new w(16),y=c-t,v=s-r,S=n-i;return f[0]=2*n/y,f[1]=0,f[2]=0,f[3]=0,f[4]=0,f[5]=2*n/v,f[6]=0,f[7]=0,f[8]=(t+c)/y,f[9]=(s+r)/v,f[10]=i/S,f[11]=-1,f[12]=0,f[13]=0,f[14]=n*i/S,f[15]=0,f}function j(t,c,r,s,n,i=1/0,h){const f=h??new w(16),y=c-t,v=s-r;if(f[0]=2*n/y,f[1]=0,f[2]=0,f[3]=0,f[4]=0,f[5]=2*n/v,f[6]=0,f[7]=0,f[8]=(t+c)/y,f[9]=(s+r)/v,f[11]=-1,f[12]=0,f[13]=0,f[15]=0,i===1/0)f[10]=0,f[14]=n;else{const S=1/(i-n);f[10]=n*S,f[14]=i*n*S}return f}const X=l.create(),E=l.create(),q=l.create();function pt(t,c,r,s){const n=s??new w(16);return l.normalize(l.subtract(c,t,q),q),l.normalize(l.cross(r,q,X),X),l.normalize(l.cross(q,X,E),E),n[0]=X[0],n[1]=X[1],n[2]=X[2],n[3]=0,n[4]=E[0],n[5]=E[1],n[6]=E[2],n[7]=0,n[8]=q[0],n[9]=q[1],n[10]=q[2],n[11]=0,n[12]=t[0],n[13]=t[1],n[14]=t[2],n[15]=1,n}function Ut(t,c,r,s){const n=s??new w(16);return l.normalize(l.subtract(t,c,q),q),l.normalize(l.cross(r,q,X),X),l.normalize(l.cross(q,X,E),E),n[0]=X[0],n[1]=X[1],n[2]=X[2],n[3]=0,n[4]=E[0],n[5]=E[1],n[6]=E[2],n[7]=0,n[8]=q[0],n[9]=q[1],n[10]=q[2],n[11]=0,n[12]=t[0],n[13]=t[1],n[14]=t[2],n[15]=1,n}function K(t,c,r,s){const n=s??new w(16);return l.normalize(l.subtract(t,c,q),q),l.normalize(l.cross(r,q,X),X),l.normalize(l.cross(q,X,E),E),n[0]=X[0],n[1]=E[0],n[2]=q[0],n[3]=0,n[4]=X[1],n[5]=E[1],n[6]=q[1],n[7]=0,n[8]=X[2],n[9]=E[2],n[10]=q[2],n[11]=0,n[12]=-(X[0]*t[0]+X[1]*t[1]+X[2]*t[2]),n[13]=-(E[0]*t[0]+E[1]*t[1]+E[2]*t[2]),n[14]=-(q[0]*t[0]+q[1]*t[1]+q[2]*t[2]),n[15]=1,n}function Rt(t,c){const r=c??new w(16);return r[0]=1,r[1]=0,r[2]=0,r[3]=0,r[4]=0,r[5]=1,r[6]=0,r[7]=0,r[8]=0,r[9]=0,r[10]=1,r[11]=0,r[12]=t[0],r[13]=t[1],r[14]=t[2],r[15]=1,r}function nt(t,c,r){const s=r??new w(16),n=c[0],i=c[1],h=c[2],f=t[0],y=t[1],v=t[2],S=t[3],b=t[4],U=t[5],R=t[6],I=t[7],V=t[8],L=t[9],G=t[10],Z=t[11],$=t[12],ct=t[13],at=t[14],ut=t[15];return t!==s&&(s[0]=f,s[1]=y,s[2]=v,s[3]=S,s[4]=b,s[5]=U,s[6]=R,s[7]=I,s[8]=V,s[9]=L,s[10]=G,s[11]=Z),s[12]=f*n+b*i+V*h+$,s[13]=y*n+U*i+L*h+ct,s[14]=v*n+R*i+G*h+at,s[15]=S*n+I*i+Z*h+ut,s}function Lt(t,c){const r=c??new w(16),s=Math.cos(t),n=Math.sin(t);return r[0]=1,r[1]=0,r[2]=0,r[3]=0,r[4]=0,r[5]=s,r[6]=n,r[7]=0,r[8]=0,r[9]=-n,r[10]=s,r[11]=0,r[12]=0,r[13]=0,r[14]=0,r[15]=1,r}function wt(t,c,r){const s=r??new w(16),n=t[4],i=t[5],h=t[6],f=t[7],y=t[8],v=t[9],S=t[10],b=t[11],U=Math.cos(c),R=Math.sin(c);return s[4]=U*n+R*y,s[5]=U*i+R*v,s[6]=U*h+R*S,s[7]=U*f+R*b,s[8]=U*y-R*n,s[9]=U*v-R*i,s[10]=U*S-R*h,s[11]=U*b-R*f,t!==s&&(s[0]=t[0],s[1]=t[1],s[2]=t[2],s[3]=t[3],s[12]=t[12],s[13]=t[13],s[14]=t[14],s[15]=t[15]),s}function yt(t,c){const r=c??new w(16),s=Math.cos(t),n=Math.sin(t);return r[0]=s,r[1]=0,r[2]=-n,r[3]=0,r[4]=0,r[5]=1,r[6]=0,r[7]=0,r[8]=n,r[9]=0,r[10]=s,r[11]=0,r[12]=0,r[13]=0,r[14]=0,r[15]=1,r}function mt(t,c,r){const s=r??new w(16),n=t[0],i=t[1],h=t[2],f=t[3],y=t[8],v=t[9],S=t[10],b=t[11],U=Math.cos(c),R=Math.sin(c);return s[0]=U*n-R*y,s[1]=U*i-R*v,s[2]=U*h-R*S,s[3]=U*f-R*b,s[8]=U*y+R*n,s[9]=U*v+R*i,s[10]=U*S+R*h,s[11]=U*b+R*f,t!==s&&(s[4]=t[4],s[5]=t[5],s[6]=t[6],s[7]=t[7],s[12]=t[12],s[13]=t[13],s[14]=t[14],s[15]=t[15]),s}function m(t,c){const r=c??new w(16),s=Math.cos(t),n=Math.sin(t);return r[0]=s,r[1]=n,r[2]=0,r[3]=0,r[4]=-n,r[5]=s,r[6]=0,r[7]=0,r[8]=0,r[9]=0,r[10]=1,r[11]=0,r[12]=0,r[13]=0,r[14]=0,r[15]=1,r}function P(t,c,r){const s=r??new w(16),n=t[0],i=t[1],h=t[2],f=t[3],y=t[4],v=t[5],S=t[6],b=t[7],U=Math.cos(c),R=Math.sin(c);return s[0]=U*n+R*y,s[1]=U*i+R*v,s[2]=U*h+R*S,s[3]=U*f+R*b,s[4]=U*y-R*n,s[5]=U*v-R*i,s[6]=U*S-R*h,s[7]=U*b-R*f,t!==s&&(s[8]=t[8],s[9]=t[9],s[10]=t[10],s[11]=t[11],s[12]=t[12],s[13]=t[13],s[14]=t[14],s[15]=t[15]),s}function d(t,c,r){const s=r??new w(16);let n=t[0],i=t[1],h=t[2];const f=Math.sqrt(n*n+i*i+h*h);n/=f,i/=f,h/=f;const y=n*n,v=i*i,S=h*h,b=Math.cos(c),U=Math.sin(c),R=1-b;return s[0]=y+(1-y)*b,s[1]=n*i*R+h*U,s[2]=n*h*R-i*U,s[3]=0,s[4]=n*i*R-h*U,s[5]=v+(1-v)*b,s[6]=i*h*R+n*U,s[7]=0,s[8]=n*h*R+i*U,s[9]=i*h*R-n*U,s[10]=S+(1-S)*b,s[11]=0,s[12]=0,s[13]=0,s[14]=0,s[15]=1,s}const e=d;function a(t,c,r,s){const n=s??new w(16);let i=c[0],h=c[1],f=c[2];const y=Math.sqrt(i*i+h*h+f*f);i/=y,h/=y,f/=y;const v=i*i,S=h*h,b=f*f,U=Math.cos(r),R=Math.sin(r),I=1-U,V=v+(1-v)*U,L=i*h*I+f*R,G=i*f*I-h*R,Z=i*h*I-f*R,$=S+(1-S)*U,ct=h*f*I+i*R,at=i*f*I+h*R,ut=h*f*I-i*R,gt=b+(1-b)*U,vt=t[0],Mt=t[1],St=t[2],Dt=t[3],Pt=t[4],Tt=t[5],bt=t[6],Bt=t[7],It=t[8],Gt=t[9],_t=t[10],Et=t[11];return n[0]=V*vt+L*Pt+G*It,n[1]=V*Mt+L*Tt+G*Gt,n[2]=V*St+L*bt+G*_t,n[3]=V*Dt+L*Bt+G*Et,n[4]=Z*vt+$*Pt+ct*It,n[5]=Z*Mt+$*Tt+ct*Gt,n[6]=Z*St+$*bt+ct*_t,n[7]=Z*Dt+$*Bt+ct*Et,n[8]=at*vt+ut*Pt+gt*It,n[9]=at*Mt+ut*Tt+gt*Gt,n[10]=at*St+ut*bt+gt*_t,n[11]=at*Dt+ut*Bt+gt*Et,t!==n&&(n[12]=t[12],n[13]=t[13],n[14]=t[14],n[15]=t[15]),n}const o=a;function u(t,c){const r=c??new w(16);return r[0]=t[0],r[1]=0,r[2]=0,r[3]=0,r[4]=0,r[5]=t[1],r[6]=0,r[7]=0,r[8]=0,r[9]=0,r[10]=t[2],r[11]=0,r[12]=0,r[13]=0,r[14]=0,r[15]=1,r}function p(t,c,r){const s=r??new w(16),n=c[0],i=c[1],h=c[2];return s[0]=n*t[0],s[1]=n*t[1],s[2]=n*t[2],s[3]=n*t[3],s[4]=i*t[4],s[5]=i*t[5],s[6]=i*t[6],s[7]=i*t[7],s[8]=h*t[8],s[9]=h*t[9],s[10]=h*t[10],s[11]=h*t[11],t!==s&&(s[12]=t[12],s[13]=t[13],s[14]=t[14],s[15]=t[15]),s}function g(t,c){const r=c??new w(16);return r[0]=t,r[1]=0,r[2]=0,r[3]=0,r[4]=0,r[5]=t,r[6]=0,r[7]=0,r[8]=0,r[9]=0,r[10]=t,r[11]=0,r[12]=0,r[13]=0,r[14]=0,r[15]=1,r}function x(t,c,r){const s=r??new w(16);return s[0]=c*t[0],s[1]=c*t[1],s[2]=c*t[2],s[3]=c*t[3],s[4]=c*t[4],s[5]=c*t[5],s[6]=c*t[6],s[7]=c*t[7],s[8]=c*t[8],s[9]=c*t[9],s[10]=c*t[10],s[11]=c*t[11],t!==s&&(s[12]=t[12],s[13]=t[13],s[14]=t[14],s[15]=t[15]),s}return{add:O,aim:pt,axisRotate:a,axisRotation:d,cameraAim:Ut,clone:N,copy:H,create:z,determinant:Q,equals:k,equalsApproximately:F,fromMat3:M,fromQuat:A,frustum:tt,frustumReverseZ:j,getAxis:At,getScaling:ht,getTranslation:ft,identity:C,inverse:rt,invert:et,lookAt:K,mul:lt,mulScalar:_,multiply:st,multiplyScalar:B,negate:T,ortho:ot,perspective:it,perspectiveReverseZ:Ot,rotate:o,rotateX:wt,rotateY:mt,rotateZ:P,rotation:e,rotationX:Lt,rotationY:yt,rotationZ:m,scale:p,scaling:u,set:D,setAxis:dt,setTranslation:xt,translate:nt,translation:Rt,transpose:J,uniformScale:x,uniformScaling:g}}const se=new Map;function we(w){let l=se.get(w);return l||(l=pe(w),se.set(w,l)),l}function ge(w){const l=$t(w);function z(m,P,d,e){const a=new w(4);return m!==void 0&&(a[0]=m,P!==void 0&&(a[1]=P,d!==void 0&&(a[2]=d,e!==void 0&&(a[3]=e)))),a}const D=z;function M(m,P,d,e,a){const o=a??new w(4);return o[0]=m,o[1]=P,o[2]=d,o[3]=e,o}function A(m,P,d){const e=d??new w(4),a=P*.5,o=Math.sin(a);return e[0]=o*m[0],e[1]=o*m[1],e[2]=o*m[2],e[3]=Math.cos(a),e}function T(m,P){const d=P??l.create(3),e=Math.acos(m[3])*2,a=Math.sin(e*.5);return a>W?(d[0]=m[0]/a,d[1]=m[1]/a,d[2]=m[2]/a):(d[0]=1,d[1]=0,d[2]=0),{angle:e,axis:d}}function O(m,P){const d=it(m,P);return Math.acos(2*d*d-1)}function B(m,P,d){const e=d??new w(4),a=m[0],o=m[1],u=m[2],p=m[3],g=P[0],x=P[1],t=P[2],c=P[3];return e[0]=a*c+p*g+o*t-u*x,e[1]=o*c+p*x+u*g-a*t,e[2]=u*c+p*t+a*x-o*g,e[3]=p*c-a*g-o*x-u*t,e}const _=B;function H(m,P,d){const e=d??new w(4),a=P*.5,o=m[0],u=m[1],p=m[2],g=m[3],x=Math.sin(a),t=Math.cos(a);return e[0]=o*t+g*x,e[1]=u*t+p*x,e[2]=p*t-u*x,e[3]=g*t-o*x,e}function N(m,P,d){const e=d??new w(4),a=P*.5,o=m[0],u=m[1],p=m[2],g=m[3],x=Math.sin(a),t=Math.cos(a);return e[0]=o*t-p*x,e[1]=u*t+g*x,e[2]=p*t+o*x,e[3]=g*t-u*x,e}function F(m,P,d){const e=d??new w(4),a=P*.5,o=m[0],u=m[1],p=m[2],g=m[3],x=Math.sin(a),t=Math.cos(a);return e[0]=o*t+u*x,e[1]=u*t-o*x,e[2]=p*t+g*x,e[3]=g*t-p*x,e}function k(m,P,d,e){const a=e??new w(4),o=m[0],u=m[1],p=m[2],g=m[3];let x=P[0],t=P[1],c=P[2],r=P[3],s=o*x+u*t+p*c+g*r;s<0&&(s=-s,x=-x,t=-t,c=-c,r=-r);let n,i;if(1-s>W){const h=Math.acos(s),f=Math.sin(h);n=Math.sin((1-d)*h)/f,i=Math.sin(d*h)/f}else n=1-d,i=d;return a[0]=n*o+i*x,a[1]=n*u+i*t,a[2]=n*p+i*c,a[3]=n*g+i*r,a}function C(m,P){const d=P??new w(4),e=m[0],a=m[1],o=m[2],u=m[3],p=e*e+a*a+o*o+u*u,g=p?1/p:0;return d[0]=-e*g,d[1]=-a*g,d[2]=-o*g,d[3]=u*g,d}function J(m,P){const d=P??new w(4);return d[0]=-m[0],d[1]=-m[1],d[2]=-m[2],d[3]=m[3],d}function rt(m,P){const d=P??new w(4),e=m[0]+m[5]+m[10];if(e>0){const a=Math.sqrt(e+1);d[3]=.5*a;const o=.5/a;d[0]=(m[6]-m[9])*o,d[1]=(m[8]-m[2])*o,d[2]=(m[1]-m[4])*o}else{let a=0;m[5]>m[0]&&(a=1),m[10]>m[a*4+a]&&(a=2);const o=(a+1)%3,u=(a+2)%3,p=Math.sqrt(m[a*4+a]-m[o*4+o]-m[u*4+u]+1);d[a]=.5*p;const g=.5/p;d[3]=(m[o*4+u]-m[u*4+o])*g,d[o]=(m[o*4+a]+m[a*4+o])*g,d[u]=(m[u*4+a]+m[a*4+u])*g}return d}function Q(m,P,d,e,a){const o=a??new w(4),u=m*.5,p=P*.5,g=d*.5,x=Math.sin(u),t=Math.cos(u),c=Math.sin(p),r=Math.cos(p),s=Math.sin(g),n=Math.cos(g);switch(e){case"xyz":o[0]=x*r*n+t*c*s,o[1]=t*c*n-x*r*s,o[2]=t*r*s+x*c*n,o[3]=t*r*n-x*c*s;break;case"xzy":o[0]=x*r*n-t*c*s,o[1]=t*c*n-x*r*s,o[2]=t*r*s+x*c*n,o[3]=t*r*n+x*c*s;break;case"yxz":o[0]=x*r*n+t*c*s,o[1]=t*c*n-x*r*s,o[2]=t*r*s-x*c*n,o[3]=t*r*n+x*c*s;break;case"yzx":o[0]=x*r*n+t*c*s,o[1]=t*c*n+x*r*s,o[2]=t*r*s-x*c*n,o[3]=t*r*n-x*c*s;break;case"zxy":o[0]=x*r*n-t*c*s,o[1]=t*c*n+x*r*s,o[2]=t*r*s+x*c*n,o[3]=t*r*n-x*c*s;break;case"zyx":o[0]=x*r*n-t*c*s,o[1]=t*c*n+x*r*s,o[2]=t*r*s-x*c*n,o[3]=t*r*n+x*c*s;break;default:throw new Error(`Unknown rotation order: ${e}`)}return o}function et(m,P){const d=P??new w(4);return d[0]=m[0],d[1]=m[1],d[2]=m[2],d[3]=m[3],d}const st=et;function lt(m,P,d){const e=d??new w(4);return e[0]=m[0]+P[0],e[1]=m[1]+P[1],e[2]=m[2]+P[2],e[3]=m[3]+P[3],e}function xt(m,P,d){const e=d??new w(4);return e[0]=m[0]-P[0],e[1]=m[1]-P[1],e[2]=m[2]-P[2],e[3]=m[3]-P[3],e}const ft=xt;function At(m,P,d){const e=d??new w(4);return e[0]=m[0]*P,e[1]=m[1]*P,e[2]=m[2]*P,e[3]=m[3]*P,e}const dt=At;function ht(m,P,d){const e=d??new w(4);return e[0]=m[0]/P,e[1]=m[1]/P,e[2]=m[2]/P,e[3]=m[3]/P,e}function it(m,P){return m[0]*P[0]+m[1]*P[1]+m[2]*P[2]+m[3]*P[3]}function Ot(m,P,d,e){const a=e??new w(4);return a[0]=m[0]+d*(P[0]-m[0]),a[1]=m[1]+d*(P[1]-m[1]),a[2]=m[2]+d*(P[2]-m[2]),a[3]=m[3]+d*(P[3]-m[3]),a}function ot(m){const P=m[0],d=m[1],e=m[2],a=m[3];return Math.sqrt(P*P+d*d+e*e+a*a)}const tt=ot;function j(m){const P=m[0],d=m[1],e=m[2],a=m[3];return P*P+d*d+e*e+a*a}const X=j;function E(m,P){const d=P??new w(4),e=m[0],a=m[1],o=m[2],u=m[3],p=Math.sqrt(e*e+a*a+o*o+u*u);return p>1e-5?(d[0]=e/p,d[1]=a/p,d[2]=o/p,d[3]=u/p):(d[0]=0,d[1]=0,d[2]=0,d[3]=1),d}function q(m,P){return Math.abs(m[0]-P[0])<W&&Math.abs(m[1]-P[1])<W&&Math.abs(m[2]-P[2])<W&&Math.abs(m[3]-P[3])<W}function pt(m,P){return m[0]===P[0]&&m[1]===P[1]&&m[2]===P[2]&&m[3]===P[3]}function Ut(m){const P=m??new w(4);return P[0]=0,P[1]=0,P[2]=0,P[3]=1,P}const K=l.create(),Rt=l.create(),nt=l.create();function Lt(m,P,d){const e=d??new w(4),a=l.dot(m,P);return a<-.999999?(l.cross(Rt,m,K),l.len(K)<1e-6&&l.cross(nt,m,K),l.normalize(K,K),A(K,Math.PI,e),e):a>.999999?(e[0]=0,e[1]=0,e[2]=0,e[3]=1,e):(l.cross(m,P,K),e[0]=K[0],e[1]=K[1],e[2]=K[2],e[3]=1+a,E(e,e))}const wt=new w(4),yt=new w(4);function mt(m,P,d,e,a,o){const u=o??new w(4);return k(m,e,a,wt),k(P,d,a,yt),k(wt,yt,2*a*(1-a),u),u}return{create:z,fromValues:D,set:M,fromAxisAngle:A,toAxisAngle:T,angle:O,multiply:B,mul:_,rotateX:H,rotateY:N,rotateZ:F,slerp:k,inverse:C,conjugate:J,fromMat:rt,fromEuler:Q,copy:et,clone:st,add:lt,subtract:xt,sub:ft,mulScalar:At,scale:dt,divScalar:ht,dot:it,lerp:Ot,length:ot,len:tt,lengthSq:j,lenSq:X,normalize:E,equalsApproximately:q,equals:pt,identity:Ut,rotationTo:Lt,sqlerp:mt}}const oe=new Map;function xe(w){let l=oe.get(w);return l||(l=ge(w),oe.set(w,l)),l}function ye(w){function l(d,e,a,o){const u=new w(4);return d!==void 0&&(u[0]=d,e!==void 0&&(u[1]=e,a!==void 0&&(u[2]=a,o!==void 0&&(u[3]=o)))),u}const z=l;function D(d,e,a,o,u){const p=u??new w(4);return p[0]=d,p[1]=e,p[2]=a,p[3]=o,p}function M(d,e){const a=e??new w(4);return a[0]=Math.ceil(d[0]),a[1]=Math.ceil(d[1]),a[2]=Math.ceil(d[2]),a[3]=Math.ceil(d[3]),a}function A(d,e){const a=e??new w(4);return a[0]=Math.floor(d[0]),a[1]=Math.floor(d[1]),a[2]=Math.floor(d[2]),a[3]=Math.floor(d[3]),a}function T(d,e){const a=e??new w(4);return a[0]=Math.round(d[0]),a[1]=Math.round(d[1]),a[2]=Math.round(d[2]),a[3]=Math.round(d[3]),a}function O(d,e=0,a=1,o){const u=o??new w(4);return u[0]=Math.min(a,Math.max(e,d[0])),u[1]=Math.min(a,Math.max(e,d[1])),u[2]=Math.min(a,Math.max(e,d[2])),u[3]=Math.min(a,Math.max(e,d[3])),u}function B(d,e,a){const o=a??new w(4);return o[0]=d[0]+e[0],o[1]=d[1]+e[1],o[2]=d[2]+e[2],o[3]=d[3]+e[3],o}function _(d,e,a,o){const u=o??new w(4);return u[0]=d[0]+e[0]*a,u[1]=d[1]+e[1]*a,u[2]=d[2]+e[2]*a,u[3]=d[3]+e[3]*a,u}function H(d,e,a){const o=a??new w(4);return o[0]=d[0]-e[0],o[1]=d[1]-e[1],o[2]=d[2]-e[2],o[3]=d[3]-e[3],o}const N=H;function F(d,e){return Math.abs(d[0]-e[0])<W&&Math.abs(d[1]-e[1])<W&&Math.abs(d[2]-e[2])<W&&Math.abs(d[3]-e[3])<W}function k(d,e){return d[0]===e[0]&&d[1]===e[1]&&d[2]===e[2]&&d[3]===e[3]}function C(d,e,a,o){const u=o??new w(4);return u[0]=d[0]+a*(e[0]-d[0]),u[1]=d[1]+a*(e[1]-d[1]),u[2]=d[2]+a*(e[2]-d[2]),u[3]=d[3]+a*(e[3]-d[3]),u}function J(d,e,a,o){const u=o??new w(4);return u[0]=d[0]+a[0]*(e[0]-d[0]),u[1]=d[1]+a[1]*(e[1]-d[1]),u[2]=d[2]+a[2]*(e[2]-d[2]),u[3]=d[3]+a[3]*(e[3]-d[3]),u}function rt(d,e,a){const o=a??new w(4);return o[0]=Math.max(d[0],e[0]),o[1]=Math.max(d[1],e[1]),o[2]=Math.max(d[2],e[2]),o[3]=Math.max(d[3],e[3]),o}function Q(d,e,a){const o=a??new w(4);return o[0]=Math.min(d[0],e[0]),o[1]=Math.min(d[1],e[1]),o[2]=Math.min(d[2],e[2]),o[3]=Math.min(d[3],e[3]),o}function et(d,e,a){const o=a??new w(4);return o[0]=d[0]*e,o[1]=d[1]*e,o[2]=d[2]*e,o[3]=d[3]*e,o}const st=et;function lt(d,e,a){const o=a??new w(4);return o[0]=d[0]/e,o[1]=d[1]/e,o[2]=d[2]/e,o[3]=d[3]/e,o}function xt(d,e){const a=e??new w(4);return a[0]=1/d[0],a[1]=1/d[1],a[2]=1/d[2],a[3]=1/d[3],a}const ft=xt;function At(d,e){return d[0]*e[0]+d[1]*e[1]+d[2]*e[2]+d[3]*e[3]}function dt(d){const e=d[0],a=d[1],o=d[2],u=d[3];return Math.sqrt(e*e+a*a+o*o+u*u)}const ht=dt;function it(d){const e=d[0],a=d[1],o=d[2],u=d[3];return e*e+a*a+o*o+u*u}const Ot=it;function ot(d,e){const a=d[0]-e[0],o=d[1]-e[1],u=d[2]-e[2],p=d[3]-e[3];return Math.sqrt(a*a+o*o+u*u+p*p)}const tt=ot;function j(d,e){const a=d[0]-e[0],o=d[1]-e[1],u=d[2]-e[2],p=d[3]-e[3];return a*a+o*o+u*u+p*p}const X=j;function E(d,e){const a=e??new w(4),o=d[0],u=d[1],p=d[2],g=d[3],x=Math.sqrt(o*o+u*u+p*p+g*g);return x>1e-5?(a[0]=o/x,a[1]=u/x,a[2]=p/x,a[3]=g/x):(a[0]=0,a[1]=0,a[2]=0,a[3]=0),a}function q(d,e){const a=e??new w(4);return a[0]=-d[0],a[1]=-d[1],a[2]=-d[2],a[3]=-d[3],a}function pt(d,e){const a=e??new w(4);return a[0]=d[0],a[1]=d[1],a[2]=d[2],a[3]=d[3],a}const Ut=pt;function K(d,e,a){const o=a??new w(4);return o[0]=d[0]*e[0],o[1]=d[1]*e[1],o[2]=d[2]*e[2],o[3]=d[3]*e[3],o}const Rt=K;function nt(d,e,a){const o=a??new w(4);return o[0]=d[0]/e[0],o[1]=d[1]/e[1],o[2]=d[2]/e[2],o[3]=d[3]/e[3],o}const Lt=nt;function wt(d){const e=d??new w(4);return e[0]=0,e[1]=0,e[2]=0,e[3]=0,e}function yt(d,e,a){const o=a??new w(4),u=d[0],p=d[1],g=d[2],x=d[3];return o[0]=e[0]*u+e[4]*p+e[8]*g+e[12]*x,o[1]=e[1]*u+e[5]*p+e[9]*g+e[13]*x,o[2]=e[2]*u+e[6]*p+e[10]*g+e[14]*x,o[3]=e[3]*u+e[7]*p+e[11]*g+e[15]*x,o}function mt(d,e,a){const o=a??new w(4);return E(d,o),et(o,e,o)}function m(d,e,a){const o=a??new w(4);return dt(d)>e?mt(d,e,o):pt(d,o)}function P(d,e,a){const o=a??new w(4);return C(d,e,.5,o)}return{create:l,fromValues:z,set:D,ceil:M,floor:A,round:T,clamp:O,add:B,addScaled:_,subtract:H,sub:N,equalsApproximately:F,equals:k,lerp:C,lerpV:J,max:rt,min:Q,mulScalar:et,scale:st,divScalar:lt,inverse:xt,invert:ft,dot:At,length:dt,len:ht,lengthSq:it,lenSq:Ot,distance:ot,dist:tt,distanceSq:j,distSq:X,normalize:E,negate:q,copy:pt,clone:Ut,multiply:K,mul:Rt,divide:nt,div:Lt,zero:wt,transformMat4:yt,setLength:mt,truncate:m,midpoint:P}}const ie=new Map;function me(w){let l=ie.get(w);return l||(l=ye(w),ie.set(w,l)),l}function Qt(w,l,z,D,M,A){return{mat3:he(w),mat4:we(l),quat:xe(z),vec2:ce(D),vec3:$t(M),vec4:me(A)}}const{mat4:qt,vec3:Zt}=Qt(Float32Array,Float32Array,Float32Array,Float32Array,Float32Array,Float32Array);Qt(Float64Array,Float64Array,Float64Array,Float64Array,Float64Array,Float64Array);Qt(ue,Array,Array,Array,Array,Array);class ve{constructor(l,z,D,M,A,T,O,B){this.device=l,this.format=z,this.uniformBuffer=D,this.tileTexture=M,this.tileSampler=A,this.lightUniformBuffer=T,this.sphereUniformBuffer=O,this.shadowUniformBuffer=B,this.createGeometry(),this.createPipeline()}createGeometry(){function l(T){return[(T&1)*2-1,(T&2)-1,(T&4)/2-1]}const z=[[0,4,2,6,-1,0,0],[1,3,5,7,1,0,0],[2,6,3,7,0,1,0],[0,2,1,3,0,0,-1],[4,5,6,7,0,0,1]],D=[],M=[];let A=0;for(const T of z){const O=A;for(let B=0;B<4;B++){const _=T[B],H=l(_);D.push(...H),A++}M.push(O+0,O+1,O+2),M.push(O+2,O+1,O+3)}this.vertexCount=M.length,this.positionBuffer=this.device.createBuffer({label:"Pool Vertex Buffer",size:D.length*4,usage:GPUBufferUsage.VERTEX,mappedAtCreation:!0}),new Float32Array(this.positionBuffer.getMappedRange()).set(D),this.positionBuffer.unmap(),this.indexBuffer=this.device.createBuffer({label:"Pool Index Buffer",size:M.length*4,usage:GPUBufferUsage.INDEX,mappedAtCreation:!0}),new Uint32Array(this.indexBuffer.getMappedRange()).set(M),this.indexBuffer.unmap()}createPipeline(){const l=this.device.createShaderModule({label:"Pool Shader",code:`
        struct Uniforms {
          modelViewProjectionMatrix : mat4x4f,
          eyePosition : vec3f,
        }
        @binding(0) @group(0) var<uniform> uniforms : Uniforms;
        @binding(1) @group(0) var tileSampler : sampler;
        @binding(2) @group(0) var tileTexture : texture_2d<f32>;
        
        struct LightUniforms {
           direction : vec3f,
        }
        @binding(3) @group(0) var<uniform> light : LightUniforms;

        struct SphereUniforms {
          center : vec3f,
          radius : f32,
        }
        @binding(4) @group(0) var<uniform> sphere : SphereUniforms;
        
        struct ShadowUniforms {
            rim : f32,
            sphere : f32,
            ao : f32,
        }
        @binding(8) @group(0) var<uniform> shadows : ShadowUniforms;
        
        @binding(5) @group(0) var waterSampler : sampler;
        @binding(6) @group(0) var waterTexture : texture_2d<f32>;
        @binding(7) @group(0) var causticTexture : texture_2d<f32>;

        struct VertexOutput {
          @builtin(position) position : vec4f,
          @location(0) localPos : vec3f,
        }
        
        // Helper functions
        fn intersectCube(origin: vec3f, ray: vec3f, cubeMin: vec3f, cubeMax: vec3f) -> vec2f {
          let tMin = (cubeMin - origin) / ray;
          let tMax = (cubeMax - origin) / ray;
          let t1 = min(tMin, tMax);
          let t2 = max(tMin, tMax);
          let tNear = max(max(t1.x, t1.y), t1.z);
          let tFar = min(min(t2.x, t2.y), t2.z);
          return vec2f(tNear, tFar);
        }

        @vertex
        fn vs_main(@location(0) position : vec3f) -> VertexOutput {
          var output : VertexOutput;
          
          var transformedPos = position;
          transformedPos.y = ((1.0 - position.y) * (7.0 / 12.0) - 1.0);

          output.position = uniforms.modelViewProjectionMatrix * vec4f(transformedPos, 1.0);
          output.localPos = transformedPos;
          return output;
        }

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
          
          // Pool ambient occlusion
          let poolAO = 1.0 / length(point);
          scale *= mix(1.0, poolAO, shadows.ao);
          
          // Sphere ambient occlusion (Replaces analytic shadow, keeps sphere uniform used)
          let dist = length(point - sphere.center) / sphere.radius;
          let sphereAO = 1.0 - 0.9 / pow(max(0.0, dist), 4.0);
          scale *= mix(1.0, sphereAO, shadows.sphere);

          let refractedLight = -refract(-light.direction, vec3f(0.0, 1.0, 0.0), IOR_AIR / IOR_WATER);
          
          let diffuse = max(0.0, dot(refractedLight, normal));
          
          let waterInfo = textureSampleLevel(waterTexture, waterSampler, point.xz * 0.5 + 0.5, 0.0);
          
          if (point.y < waterInfo.r) {
             // Underwater: Use caustics
             let causticUV = 0.75 * (point.xz - point.y * refractedLight.xz / refractedLight.y) * 0.5 + 0.5;
             let caustic = textureSampleLevel(causticTexture, tileSampler, causticUV, 0.0); 
             
             var intensity = caustic.r;
             var sphereShadow = caustic.g;

             // Heuristic: If Rim Shadow is OFF, fill the black void (outside mesh) with ambient light
             if (shadows.rim < 0.5 && intensity < 0.001) {
                 intensity = 0.2;
                 sphereShadow = 1.0;
             }
             
             scale += diffuse * intensity * 2.0 * sphereShadow;
          } else {
             // Above water: Rim shadow
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
        }
      `});this.pipeline=this.device.createRenderPipeline({label:"Pool Pipeline",layout:"auto",vertex:{module:l,entryPoint:"vs_main",buffers:[{arrayStride:12,attributes:[{shaderLocation:0,offset:0,format:"float32x3"}]}]},fragment:{module:l,entryPoint:"fs_main",targets:[{format:this.format}]},primitive:{topology:"triangle-list",cullMode:"back"},depthStencil:{depthWriteEnabled:!0,depthCompare:"less",format:"depth24plus"}})}render(l,z,D,M){const A=this.device.createBindGroup({layout:this.pipeline.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:this.uniformBuffer}},{binding:1,resource:this.tileSampler},{binding:2,resource:this.tileTexture.createView()},{binding:3,resource:{buffer:this.lightUniformBuffer}},{binding:4,resource:{buffer:this.sphereUniformBuffer}},{binding:5,resource:D},{binding:6,resource:z.createView()},{binding:7,resource:M.createView()},{binding:8,resource:{buffer:this.shadowUniformBuffer}}]});l.setPipeline(this.pipeline),l.setBindGroup(0,A),l.setVertexBuffer(0,this.positionBuffer),l.setIndexBuffer(this.indexBuffer,"uint32"),l.drawIndexed(this.vertexCount)}}class Me{constructor(l,z,D,M,A){this.device=l,this.format=z,this.commonUniformBuffer=D,this.sphereUniformBuffer=A,this.lightUniformBuffer=M,this.center=[0,0,0],this.radius=1,this.createGeometry(),this.createPipeline()}update(l,z){this.center=l,this.radius=z;const D=new Float32Array(4);D.set(this.center,0),D[3]=this.radius,this.device.queue.writeBuffer(this.sphereUniformBuffer,0,D)}createGeometry(){class z{constructor(){this.unique=[],this.map=new Map}add(_){const H=_.join(",");return this.map.has(H)||(this.map.set(H,this.unique.length),this.unique.push(_)),this.map.get(H)}}function D(B){return[(B&1)*2-1,(B&2)-1,(B&4)/2-1]}function M(B){return B+(B-B*B)/2}const A=new z,T=[];for(let B=0;B<8;B++){const _=D(B),H=_[0]*_[1]*_[2]>0,N=[];for(let F=0;F<=10;F++)for(let k=0;F+k<=10;k++){const C=F/10,J=k/10,rt=(10-F-k)/10,Q=[M(C),M(J),M(rt)],et=Math.sqrt(Q[0]*Q[0]+Q[1]*Q[1]+Q[2]*Q[2]),st=[Q[0]/et*_[0],Q[1]/et*_[1],Q[2]/et*_[2]];N.push(A.add(st))}for(let F=0;F<=10;F++)if(F>0)for(let k=0;F+k<=10;k++){const C=(F-1)*11+(F-1-(F-1)*(F-1))/2+k,J=F*11+(F-F*F)/2+k;H?T.push(N[C],N[J],N[C+1]):T.push(N[C],N[C+1],N[J]),F+k<10&&(H?T.push(N[J],N[J+1],N[C+1]):T.push(N[J],N[C+1],N[J+1]))}}this.vertexCount=T.length;const O=[];for(const B of A.unique)O.push(...B);this.positionBuffer=this.device.createBuffer({label:"Sphere Vertex Buffer",size:O.length*4,usage:GPUBufferUsage.VERTEX,mappedAtCreation:!0}),new Float32Array(this.positionBuffer.getMappedRange()).set(O),this.positionBuffer.unmap(),this.indexBuffer=this.device.createBuffer({label:"Sphere Index Buffer",size:T.length*4,usage:GPUBufferUsage.INDEX,mappedAtCreation:!0}),new Uint32Array(this.indexBuffer.getMappedRange()).set(T),this.indexBuffer.unmap()}createPipeline(){const l=this.device.createShaderModule({label:"Sphere Shader",code:`
        struct CommonUniforms {
          viewProjectionMatrix : mat4x4f,
        }
        @binding(0) @group(0) var<uniform> commonUniforms : CommonUniforms;

        struct SphereUniforms {
          center : vec3f,
          radius : f32,
        }
        @binding(1) @group(0) var<uniform> sphereUniforms : SphereUniforms;
        
        struct LightUniforms {
           direction : vec3f,
        }
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
        }

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
          
          // Underwater tint
          if (point.y < waterInfo.r) {
             let underwaterColor = vec3f(0.4, 0.9, 1.0);
             color *= underwaterColor * 1.2;
          }
          
          return vec4f(color, 1.0); 
        }
      `});this.pipeline=this.device.createRenderPipeline({label:"Sphere Pipeline",layout:"auto",vertex:{module:l,entryPoint:"vs_main",buffers:[{arrayStride:12,attributes:[{shaderLocation:0,offset:0,format:"float32x3"}]}]},fragment:{module:l,entryPoint:"fs_main",targets:[{format:this.format}]},primitive:{topology:"triangle-list",cullMode:"back"},depthStencil:{depthWriteEnabled:!0,depthCompare:"less",format:"depth24plus"}})}render(l,z,D,M){const A=this.device.createBindGroup({layout:this.pipeline.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:this.commonUniformBuffer}},{binding:1,resource:{buffer:this.sphereUniformBuffer}},{binding:2,resource:{buffer:this.lightUniformBuffer}},{binding:3,resource:D},{binding:4,resource:z.createView()},{binding:5,resource:M.createView()}]});l.setPipeline(this.pipeline),l.setBindGroup(0,A),l.setVertexBuffer(0,this.positionBuffer),l.setIndexBuffer(this.indexBuffer,"uint32"),l.drawIndexed(this.vertexCount)}}class Se{constructor(l,z,D,M,A,T,O,B,_,H,N){this.device=l,this.width=z,this.height=D,this.commonUniformBuffer=M,this.lightUniformBuffer=A,this.sphereUniformBuffer=T,this.shadowUniformBuffer=O,this.tileTexture=B,this.tileSampler=_,this.skyTexture=H,this.skySampler=N,this.textureA=this.createTexture(),this.textureB=this.createTexture(),this.causticsTexture=this.device.createTexture({size:[1024,1024],format:"rgba8unorm",usage:GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.RENDER_ATTACHMENT}),this.sampler=l.createSampler({magFilter:"linear",minFilter:"linear",addressModeU:"clamp-to-edge",addressModeV:"clamp-to-edge"}),this.createPipelines(),this.createSurfaceMesh(),this.createSurfacePipeline(),this.createCausticsPipeline()}createTexture(){const l=this.device.features.has("float32-filterable")?"rgba32float":"rgba16float";return this.device.createTexture({size:[this.width,this.height],format:l,usage:GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.RENDER_ATTACHMENT})}createPipelines(){const l=this.device.features.has("float32-filterable")?"rgba32float":"rgba16float",z=`
      struct VertexOutput {
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
    `;this.dropPipeline=this.createPipeline("Drop",z,`
      @group(0) @binding(0) var waterTexture : texture_2d<f32>;
      @group(0) @binding(1) var waterSampler : sampler;
      
      struct DropUniforms {
        center : vec2f,
        radius : f32,
        strength : f32,
      }
      @group(0) @binding(2) var<uniform> u : DropUniforms;

      @fragment
      fn fs_main(@location(0) uv : vec2f) -> @location(0) vec4f {
        var info = textureSample(waterTexture, waterSampler, uv);
        
        let drop = max(0.0, 1.0 - length(u.center * 0.5 + 0.5 - uv) / u.radius);
        let dropVal = 0.5 - cos(drop * 3.14159265) * 0.5;
        
        info.r += dropVal * u.strength;
        
        return info;
      }
    `,32,l),this.updatePipeline=this.createPipeline("Update",z,`
      @group(0) @binding(0) var waterTexture : texture_2d<f32>;
      @group(0) @binding(1) var waterSampler : sampler;
      
      struct UpdateUniforms {
        delta : vec2f, 
      }
      @group(0) @binding(2) var<uniform> u : UpdateUniforms;

      @fragment
      fn fs_main(@location(0) uv : vec2f) -> @location(0) vec4f {
        var info = textureSample(waterTexture, waterSampler, uv);
        
        let dx = vec2f(u.delta.x, 0.0);
        let dy = vec2f(0.0, u.delta.y);
        
        let average = (
          textureSample(waterTexture, waterSampler, uv - dx).r +
          textureSample(waterTexture, waterSampler, uv - dy).r +
          textureSample(waterTexture, waterSampler, uv + dx).r +
          textureSample(waterTexture, waterSampler, uv + dy).r
        ) * 0.25;
        
        info.g += (average - info.r) * 2.0;
        info.g *= 0.995;
        info.r += info.g;
        
        return info;
      }
    `,16,l),this.normalPipeline=this.createPipeline("Normal",z,`
      @group(0) @binding(0) var waterTexture : texture_2d<f32>;
      @group(0) @binding(1) var waterSampler : sampler;
      
      struct NormalUniforms {
        delta : vec2f,
      }
      @group(0) @binding(2) var<uniform> u : NormalUniforms;

      @fragment
      fn fs_main(@location(0) uv : vec2f) -> @location(0) vec4f {
        var info = textureSample(waterTexture, waterSampler, uv);
        
        let val_dx = textureSample(waterTexture, waterSampler, vec2f(uv.x + u.delta.x, uv.y)).r;
        let val_dy = textureSample(waterTexture, waterSampler, vec2f(uv.x, uv.y + u.delta.y)).r;
        
        let dx = vec3f(u.delta.x, val_dx - info.r, 0.0);
        let dy = vec3f(0.0, val_dy - info.r, u.delta.y);
        
        let normal = normalize(cross(dy, dx));
        info.b = normal.x;
        info.a = normal.z;
        
        return info;
      }
    `,16,l),this.spherePipeline=this.createPipeline("Sphere",z,`
      @group(0) @binding(0) var waterTexture : texture_2d<f32>;
      @group(0) @binding(1) var waterSampler : sampler;
      
      struct SphereUniforms {
        oldCenter : vec3f,
        radius : f32, 
        newCenter : vec3f,
        padding : f32,
      }
      @group(0) @binding(2) var<uniform> u : SphereUniforms;

      fn volumeInSphere(center : vec3f, uv : vec2f, radius : f32) -> f32 {
        let p = vec3f(uv.x * 2.0 - 1.0, 0.0, uv.y * 2.0 - 1.0);
        let dist = length(p - center);
        let t = dist / radius;
        
        let dy = exp(-pow(t * 1.5, 6.0));
        let ymin = min(0.0, center.y - dy);
        let ymax = min(max(0.0, center.y + dy), ymin + 2.0 * dy);
        return (ymax - ymin) * 0.1;
      }

      @fragment
      fn fs_main(@location(0) uv : vec2f) -> @location(0) vec4f {
        var info = textureSample(waterTexture, waterSampler, uv);
        
        info.r += volumeInSphere(u.oldCenter, uv, u.radius);
        info.r -= volumeInSphere(u.newCenter, uv, u.radius);
        
        return info;
      }
    `,32,l)}createPipeline(l,z,D,M,A){const T=this.device.createShaderModule({label:l+" Module",code:z+D});return{pipeline:this.device.createRenderPipeline({label:l+" Pipeline",layout:"auto",vertex:{module:T,entryPoint:"vs_main"},fragment:{module:T,entryPoint:"fs_main",targets:[{format:A}]},primitive:{topology:"triangle-list"}}),uniformSize:M,uniformBuffer:this.device.createBuffer({size:M,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST})}}runPipeline(l,z){this.device.queue.writeBuffer(l.uniformBuffer,0,z);const D=this.device.createBindGroup({layout:l.pipeline.getBindGroupLayout(0),entries:[{binding:0,resource:this.textureA.createView()},{binding:1,resource:this.sampler},{binding:2,resource:{buffer:l.uniformBuffer}}]}),M=this.device.createCommandEncoder(),A=M.beginRenderPass({colorAttachments:[{view:this.textureB.createView(),loadOp:"clear",storeOp:"store",clearValue:{r:0,g:0,b:0,a:0}}]});A.setPipeline(l.pipeline),A.setBindGroup(0,D),A.draw(6),A.end(),this.device.queue.submit([M.finish()]);const T=this.textureA;this.textureA=this.textureB,this.textureB=T}addDrop(l,z,D,M){const A=new Float32Array(4);A[0]=l,A[1]=z,A[2]=D,A[3]=M,this.runPipeline(this.dropPipeline,A)}stepSimulation(){const l=new Float32Array(2);l[0]=1/this.width,l[1]=1/this.height,this.runPipeline(this.updatePipeline,l)}updateNormals(){const l=new Float32Array(2);l[0]=1/this.width,l[1]=1/this.height,this.runPipeline(this.normalPipeline,l)}moveSphere(l,z,D){const M=new Float32Array(8);M[0]=l[0],M[1]=l[1],M[2]=l[2],M[3]=D,M[4]=z[0],M[5]=z[1],M[6]=z[2],M[7]=0,this.runPipeline(this.spherePipeline,M)}createSurfaceMesh(){const z=[],D=[];for(let M=0;M<=200;M++){const A=M/200;for(let T=0;T<=200;T++){const O=T/200;z.push(2*O-1,2*A-1,0)}}for(let M=0;M<200;M++)for(let A=0;A<200;A++){const T=A+M*201;D.push(T,T+1,T+200+1),D.push(T+200+1,T+1,T+200+2)}this.vertexCount=D.length,this.positionBuffer=this.device.createBuffer({label:"Water Surface Vertices",size:z.length*4,usage:GPUBufferUsage.VERTEX,mappedAtCreation:!0}),new Float32Array(this.positionBuffer.getMappedRange()).set(z),this.positionBuffer.unmap(),this.indexBuffer=this.device.createBuffer({label:"Water Surface Indices",size:D.length*4,usage:GPUBufferUsage.INDEX,mappedAtCreation:!0}),new Uint32Array(this.indexBuffer.getMappedRange()).set(D),this.indexBuffer.unmap()}createSurfacePipeline(){const l=M=>`
        struct CommonUniforms {
          viewProjectionMatrix : mat4x4f,
          eyePosition : vec3f,
        }
        @binding(0) @group(0) var<uniform> commonUniforms : CommonUniforms;

        struct LightUniforms {
           direction : vec3f,
        }
        @binding(1) @group(0) var<uniform> light : LightUniforms;

        struct SphereUniforms {
          center : vec3f,
          radius : f32,
        }
        @binding(2) @group(0) var<uniform> sphere : SphereUniforms;

        @binding(3) @group(0) var tileSampler : sampler;
        @binding(4) @group(0) var tileTexture : texture_2d<f32>;
        @binding(5) @group(0) var waterSampler : sampler;
        @binding(6) @group(0) var waterTexture : texture_2d<f32>;
        
        // Skybox
        @binding(7) @group(0) var skySampler : sampler;
        @binding(8) @group(0) var skyTexture : texture_cube<f32>;
        @binding(9) @group(0) var causticTexture : texture_2d<f32>;

        const IOR_AIR : f32 = 1.0;
        const IOR_WATER : f32 = 1.333;
        const ABOVewaterColor : vec3f = vec3f(0.25, 1.0, 1.25);
        const UNDERwaterColor : vec3f = vec3f(0.4, 0.9, 1.0);

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
            scale *= 1.0 - 0.9 / pow(length(point - sphere.center) / sphere.radius, 4.0);

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
            
            let q = intersectSphere(origin, ray, sphere.center, sphere.radius);
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
            
            ${M?`
            normal = -normal;
            let reflectedRay = reflect(incomingRay, normal);
            let refractedRay = refract(incomingRay, normal, IOR_WATER / IOR_AIR);
            let fresnel = mix(0.5, 1.0, pow(1.0 - dot(normal, -incomingRay), 3.0));
            
            let reflectedColor = getSurfaceRayColor(worldPos, reflectedRay, UNDERwaterColor);
            let refractedColor = getSurfaceRayColor(worldPos, refractedRay, vec3f(1.0)) * vec3f(0.8, 1.0, 1.1);
            
            let finalColor = mix(reflectedColor, refractedColor, (1.0 - fresnel) * length(refractedRay));
            `:`
            let reflectedRay = reflect(incomingRay, normal);
            let refractedRay = refract(incomingRay, normal, IOR_AIR / IOR_WATER);
            let fresnel = mix(0.25, 1.0, pow(1.0 - dot(normal, -incomingRay), 3.0));
            
            let reflectedColor = getSurfaceRayColor(worldPos, reflectedRay, ABOVewaterColor);
            let refractedColor = getSurfaceRayColor(worldPos, refractedRay, ABOVewaterColor);
            
            let finalColor = mix(refractedColor, reflectedColor, fresnel);
            `}
            
            return vec4f(finalColor, 1.0);
        }
        `;this.surfaceBindGroupLayout=this.device.createBindGroupLayout({label:"Water Surface BindGroupLayout",entries:[{binding:0,visibility:GPUShaderStage.VERTEX|GPUShaderStage.FRAGMENT,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.FRAGMENT,buffer:{type:"uniform"}},{binding:2,visibility:GPUShaderStage.FRAGMENT,buffer:{type:"uniform"}},{binding:3,visibility:GPUShaderStage.FRAGMENT,sampler:{}},{binding:4,visibility:GPUShaderStage.FRAGMENT,texture:{}},{binding:5,visibility:GPUShaderStage.VERTEX|GPUShaderStage.FRAGMENT,sampler:{}},{binding:6,visibility:GPUShaderStage.VERTEX|GPUShaderStage.FRAGMENT,texture:{}},{binding:7,visibility:GPUShaderStage.FRAGMENT,sampler:{}},{binding:8,visibility:GPUShaderStage.FRAGMENT,texture:{viewDimension:"cube"}},{binding:9,visibility:GPUShaderStage.FRAGMENT,texture:{}}]});const z=this.device.createPipelineLayout({label:"Water Surface PipelineLayout",bindGroupLayouts:[this.surfaceBindGroupLayout]}),D=(M,A,T)=>{const O=this.device.createShaderModule({label:`${M} Shader`,code:l(A)});return this.device.createRenderPipeline({label:M,layout:z,vertex:{module:O,entryPoint:"vs_main",buffers:[{arrayStride:12,attributes:[{shaderLocation:0,offset:0,format:"float32x3"}]}]},fragment:{module:O,entryPoint:"fs_main",targets:[{format:navigator.gpu.getPreferredCanvasFormat()}]},primitive:{topology:"triangle-list",cullMode:T},depthStencil:{depthWriteEnabled:!0,depthCompare:"less",format:"depth24plus"}})};this.surfacePipelineAbove=D("Water Surface Above Pipeline",!1,"front"),this.surfacePipelineUnder=D("Water Surface Under Pipeline",!0,"back"),this.surfaceBindGroup=this.device.createBindGroup({layout:this.surfaceBindGroupLayout,entries:[{binding:0,resource:{buffer:this.commonUniformBuffer}},{binding:1,resource:{buffer:this.lightUniformBuffer}},{binding:2,resource:{buffer:this.sphereUniformBuffer}},{binding:3,resource:this.tileSampler},{binding:4,resource:this.tileTexture.createView()},{binding:5,resource:this.sampler},{binding:6,resource:this.textureA.createView()},{binding:7,resource:this.skySampler},{binding:8,resource:this.skyTexture.createView({dimension:"cube"})},{binding:9,resource:this.causticsTexture.createView()}]})}renderSurface(l){const z=this.device.createBindGroup({layout:this.surfaceBindGroupLayout,entries:[{binding:0,resource:{buffer:this.commonUniformBuffer}},{binding:1,resource:{buffer:this.lightUniformBuffer}},{binding:2,resource:{buffer:this.sphereUniformBuffer}},{binding:3,resource:this.tileSampler},{binding:4,resource:this.tileTexture.createView()},{binding:5,resource:this.sampler},{binding:6,resource:this.textureA.createView()},{binding:7,resource:this.skySampler},{binding:8,resource:this.skyTexture.createView({dimension:"cube"})},{binding:9,resource:this.causticsTexture.createView()}]});l.setPipeline(this.surfacePipelineAbove),l.setBindGroup(0,z),l.setVertexBuffer(0,this.positionBuffer),l.setIndexBuffer(this.indexBuffer,"uint32"),l.drawIndexed(this.vertexCount),l.setPipeline(this.surfacePipelineUnder),l.setBindGroup(0,z),l.drawIndexed(this.vertexCount)}createCausticsPipeline(){const l=this.device.createShaderModule({label:"Caustics Shader",code:`
        struct LightUniforms {
           direction : vec3f,
        }
        @binding(0) @group(0) var<uniform> light : LightUniforms;

        struct SphereUniforms {
          center : vec3f,
          radius : f32,
        }
        @binding(1) @group(0) var<uniform> sphere : SphereUniforms;

        struct ShadowUniforms {
            rim : f32,
            sphere : f32,
            ao : f32,
        }
        @binding(4) @group(0) var<uniform> shadows : ShadowUniforms;

        @binding(2) @group(0) var waterSampler : sampler;
        @binding(3) @group(0) var waterTexture : texture_2d<f32>;

        struct VertexOutput {
          @builtin(position) position : vec4f,
          @location(0) oldPos : vec3f,
          @location(1) newPos : vec3f,
          @location(2) ray : vec3f,
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
          
          // Note: WebGL demo uses -light for refraction?
          // "refract(-light, vec3(0.0, 1.0, 0.0), ...)"
          // My lightDir is direction.
          let refractedLight = refract(-lightDir, vec3f(0.0, 1.0, 0.0), IOR_AIR / IOR_WATER);
          let ray = refract(-lightDir, normal, IOR_AIR / IOR_WATER);
          
          let origin = vec3f(position.x, 0.0, position.y); // Plane on XZ in WebGL? Or XY swizzled?
          // In CreateSurfaceMesh, I pushed x, y (2s-1, 2t-1). Z=0.
          // VS Main logic: pos = position.xzy.
          // Caustics shader uses gl_Vertex.xzy.
          let pos = vec3f(position.x, 0.0, position.y); // Swizzle for calculation
          
          output.oldPos = project(pos, refractedLight, refractedLight);
          output.newPos = project(pos + vec3f(0.0, info.r, 0.0), ray, refractedLight);
          output.ray = ray;
          
          // Map to texture space
          // Adjusted to account for wall height (y) to align with pool.js sampling logic
          // Original: "gl_Position = vec4(0.75 * (newPos.xz + refractedLight.xz / refractedLight.y), 0.0, 1.0);"
          // This matches the original only at y = -1.0 (floor).
          let projectedPos = 0.75 * (output.newPos.xz - output.newPos.y * refractedLight.xz / refractedLight.y);
          // Flip Y because WebGPU UV origin is Top-Left (V increases down), but Clip Space Y increases Up.
          output.position = vec4f(projectedPos.x, -projectedPos.y, 0.0, 1.0);
          
          return output;
        }

        @fragment
        fn fs_main(@location(0) oldPos : vec3f, @location(1) newPos : vec3f, @location(2) ray : vec3f) -> @location(0) vec4f {
            // Intensity = oldArea / newArea
            // Use dpdx, dpdy
            let oldArea = length(dpdx(oldPos)) * length(dpdy(oldPos));
            let newArea = length(dpdx(newPos)) * length(dpdy(newPos));
            
            var intensity = oldArea / newArea * 0.2;
            
            // Sphere Shadow Logic (Green channel)
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
            shadow = mix(1.0, shadow, shadows.sphere); // Apply Toggle
            
            // Rim shadow
            let poolHeight = 1.0;
            let t = intersectCube(newPos, -refractedLight, vec3f(-1.0, -poolHeight, -1.0), vec3f(1.0, 2.0, 1.0));
            let rimShadow = 1.0 / (1.0 + exp(-200.0 / (1.0 + 10.0 * (t.y - t.x)) * (newPos.y - refractedLight.y * t.y - 2.0 / 12.0)));
            intensity *= mix(1.0, rimShadow, shadows.rim); // Apply Toggle
            
            return vec4f(intensity, shadow, 0.0, 1.0);
        }
        `});this.causticsPipeline=this.device.createRenderPipeline({label:"Caustics Pipeline",layout:"auto",vertex:{module:l,entryPoint:"vs_main",buffers:[{arrayStride:12,attributes:[{shaderLocation:0,offset:0,format:"float32x3"}]}]},fragment:{module:l,entryPoint:"fs_main",targets:[{format:"rgba8unorm",blend:{color:{operation:"add",srcFactor:"one",dstFactor:"one"},alpha:{operation:"add",srcFactor:"one",dstFactor:"one"}}}]},primitive:{topology:"triangle-list"}})}updateCaustics(){const l=this.device.createBindGroup({layout:this.causticsPipeline.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:this.lightUniformBuffer}},{binding:1,resource:{buffer:this.sphereUniformBuffer}},{binding:2,resource:this.sampler},{binding:3,resource:this.textureA.createView()},{binding:4,resource:{buffer:this.shadowUniformBuffer}}]}),z=this.device.createCommandEncoder(),D=z.beginRenderPass({colorAttachments:[{view:this.causticsTexture.createView(),loadOp:"clear",storeOp:"store",clearValue:{r:0,g:0,b:0,a:0}}]});D.setPipeline(this.causticsPipeline),D.setBindGroup(0,l),D.setVertexBuffer(0,this.positionBuffer),D.setIndexBuffer(this.indexBuffer,"uint32"),D.drawIndexed(this.vertexCount),D.end(),this.device.queue.submit([z.finish()])}}class Y{constructor(l,z,D){this.x=l||0,this.y=z||0,this.z=D||0}negative(){return new Y(-this.x,-this.y,-this.z)}add(l){return l instanceof Y?new Y(this.x+l.x,this.y+l.y,this.z+l.z):new Y(this.x+l,this.y+l,this.z+l)}subtract(l){return l instanceof Y?new Y(this.x-l.x,this.y-l.y,this.z-l.z):new Y(this.x-l,this.y-l,this.z-l)}multiply(l){return l instanceof Y?new Y(this.x*l.x,this.y*l.y,this.z*l.z):new Y(this.x*l,this.y*l,this.z*l)}divide(l){return l instanceof Y?new Y(this.x/l.x,this.y/l.y,this.z/l.z):new Y(this.x/l,this.y/l,this.z/l)}equals(l){return this.x==l.x&&this.y==l.y&&this.z==l.z}dot(l){return this.x*l.x+this.y*l.y+this.z*l.z}cross(l){return new Y(this.y*l.z-this.z*l.y,this.z*l.x-this.x*l.z,this.x*l.y-this.y*l.x)}length(){return Math.sqrt(this.dot(this))}unit(){return this.divide(this.length())}min(){return Math.min(Math.min(this.x,this.y),this.z)}max(){return Math.max(Math.max(this.x,this.y),this.z)}toAngles(){return{theta:Math.atan2(this.z,this.x),phi:Math.asin(this.y/this.length())}}angleTo(l){return Math.acos(this.dot(l)/(this.length()*l.length()))}toArray(l){return[this.x,this.y,this.z].slice(0,l||3)}clone(){return new Y(this.x,this.y,this.z)}init(l,z,D){return this.x=l,this.y=z,this.z=D,this}static fromArray(l){return new Y(l[0],l[1],l[2])}static lerp(l,z,D){return l.add(z.subtract(l).multiply(D))}static min(l,z){return new Y(Math.min(l.x,z.x),Math.min(l.y,z.y),Math.min(l.z,z.z))}static max(l,z){return new Y(Math.max(l.x,z.x),Math.max(l.y,z.y),Math.max(l.z,z.z))}static fromAngles(l,z){return new Y(Math.cos(z)*Math.cos(l),Math.sin(z),Math.cos(z)*Math.sin(l))}}class kt{constructor(l,z,D){this.t=arguments.length?l:Number.MAX_VALUE,this.hit=z,this.normal=D}mergeWith(l){l.t>0&&l.t<this.t&&(this.t=l.t,this.hit=l.hit,this.normal=l.normal)}}class Yt{constructor(l,z,D){this.viewport=D;const M=qt.invert(l),A=Zt.transformMat4([0,0,0],M);this.eye=new Y(A[0],A[1],A[2]),this.invViewProj=qt.invert(qt.multiply(z,l));const T=D[0],O=T+D[2],B=D[1],_=B+D[3];this.ray00=this.unProject(T,B,1).subtract(this.eye),this.ray10=this.unProject(O,B,1).subtract(this.eye),this.ray01=this.unProject(T,_,1).subtract(this.eye),this.ray11=this.unProject(O,_,1).subtract(this.eye)}unProject(l,z,D){const M=this.viewport,A=(l-M[0])/M[2]*2-1,T=(1-(z-M[1])/M[3])*2-1,B=[A,T,D],_=Zt.transformMat4(B,this.invViewProj);return new Y(_[0],_[1],_[2])}getRayForPixel(l,z){const D=(l-this.viewport[0])/this.viewport[2],M=(z-this.viewport[1])/this.viewport[3],A=Y.lerp(this.ray00,this.ray10,D),T=Y.lerp(this.ray01,this.ray11,D);return Y.lerp(A,T,M).unit()}static hitTestBox(l,z,D,M){var A=D.subtract(l).divide(z),T=M.subtract(l).divide(z),O=Y.min(A,T),B=Y.max(A,T),_=O.max(),H=B.min();if(_>0&&_<H){var N=1e-6,F=l.add(z.multiply(_));return D=D.add(N),M=M.subtract(N),new kt(_,F,new Y((F.x>M.x)-(F.x<D.x),(F.y>M.y)-(F.y<D.y),(F.z>M.z)-(F.z<D.z)))}return null}static hitTestSphere(l,z,D,M){var A=l.subtract(D),T=z.dot(z),O=2*z.dot(A),B=A.dot(A)-M*M,_=O*O-4*T*B;if(_>0){var H=(-O-Math.sqrt(_))/(2*T),N=l.add(z.multiply(H));return new kt(H,N,N.subtract(D).divide(M))}return null}static hitTestTriangle(l,z,D,M,A){var T=M.subtract(D),O=A.subtract(D),B=T.cross(O).unit(),_=B.dot(D.subtract(l))/B.dot(z);if(_>0){var H=l.add(z.multiply(_)),N=H.subtract(D),F=O.dot(O),k=O.dot(T),C=O.dot(N),J=T.dot(T),rt=T.dot(N),Q=F*J-k*k,et=(J*C-k*rt)/Q,st=(F*rt-k*C)/Q;if(et>=0&&st>=0&&et+st<=1)return new kt(_,H,B)}return null}}class De{constructor(l){this.device=l,this.texture=null}async load(l){const z=["xpos","xneg","ypos","yneg","zpos","zneg"],D=await Promise.all(z.map(T=>fetch(l[T]).then(O=>O.blob()).then(O=>createImageBitmap(O)))),M=D[0].width,A=D[0].height;this.texture=this.device.createTexture({size:[M,A,6],format:"rgba8unorm",usage:GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_DST|GPUTextureUsage.RENDER_ATTACHMENT,viewFormats:["rgba8unorm"]});for(let T=0;T<6;T++)this.device.queue.copyExternalImageToTexture({source:D[T],flipY:!0},{texture:this.texture,origin:[0,0,T]},{width:M,height:A});return this.texture}}async function Pe(){const w=navigator.gpu;if(!w){document.getElementById("loading").innerHTML="WebGPU not supported.";return}const l=await w.requestAdapter();if(!l){document.getElementById("loading").innerHTML="No WebGPU adapter found.";return}const z=[];l.features.has("float32-filterable")&&z.push("float32-filterable");const D=await l.requestDevice({requiredFeatures:z}),M=document.querySelector("canvas"),A=M.getContext("webgpu"),T=navigator.gpu.getPreferredCanvasFormat();A.configure({device:D,format:T,alphaMode:"premultiplied"});const O=document.getElementById("help"),B=window.devicePixelRatio||1;let _=performance.now();async function H(c){const s=await(await fetch(c)).blob(),n=await createImageBitmap(s),i=D.createTexture({label:c,size:[n.width,n.height],format:"rgba8unorm",usage:GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_DST|GPUTextureUsage.RENDER_ATTACHMENT});return D.queue.copyExternalImageToTexture({source:n,flipY:!0},{texture:i},{width:n.width,height:n.height}),i}const N=await H("/tiles.jpg"),F=D.createSampler({magFilter:"linear",minFilter:"linear",addressModeU:"repeat",addressModeV:"repeat"}),C=await new De(D).load({xpos:"/xpos.jpg",xneg:"/xneg.jpg",ypos:"/ypos.jpg",yneg:"/yneg.jpg",zpos:"/zpos.jpg",zneg:"/zneg.jpg"}),J=D.createSampler({magFilter:"linear",minFilter:"linear"});let rt=-25,Q=-200.5;function et(){const c=M.width/M.height,r=qt.perspective(45*Math.PI/180,c,.01,100),s=qt.identity();return qt.translate(s,[0,0,-4],s),qt.rotateX(s,-rt*Math.PI/180,s),qt.rotateY(s,-Q*Math.PI/180,s),qt.translate(s,[0,.5,0],s),{projectionMatrix:r,viewMatrix:s}}const lt=D.createBuffer({size:80,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST});let xt=new Y(2,2,-1).unit();const ft=D.createBuffer({size:16,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST});function At(){D.queue.writeBuffer(ft,0,new Float32Array([...xt.toArray(),0]))}At();const dt=D.createBuffer({size:16,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),ht=D.createBuffer({size:16,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),it=new Float32Array([1,1,1,0]);D.queue.writeBuffer(ht,0,it);const Ot=new ve(D,T,lt,N,F,ft,dt,ht),ot=new Me(D,T,lt,ft,dt),tt=new Se(D,256,256,lt,ft,dt,ht,N,F,C,J);let j=new Y(-.4,-.75,.2),X=j.clone(),E=.25,q=new Y(0,0,0),pt=new Y(0,-4,0),Ut=!1,K=!1;ot.update(j.toArray(),E);for(let c=0;c<20;c++)tt.addDrop(Math.random()*2-1,Math.random()*2-1,.03,c&1?.01:-.01);const Rt={};window.addEventListener("keydown",c=>{const r=c.key.toUpperCase();Rt[r]=!0,r==="G"?Ut=!Ut:r===" "&&(K=!K)}),window.addEventListener("keyup",c=>{Rt[c.key.toUpperCase()]=!1});let nt=-1;const Lt=0,wt=1,yt=2;let mt,m,P,d;function e(c,r){mt=c,m=r;const{projectionMatrix:s,viewMatrix:n}=et(),i=[0,0,M.width,M.height],h=new Yt(n,s,i),f=h.getRayForPixel(c*B,r*B),y=Yt.hitTestSphere(h.eye,f,j,E);if(y){nt=yt,P=y.hit,d=h.getRayForPixel(M.width/2,M.height/2).negative();return}const v=-h.eye.y/f.y,S=h.eye.add(f.multiply(v));Math.abs(S.x)<1&&Math.abs(S.z)<1?(nt=Lt,tt.addDrop(S.x,S.z,.03,.01)):nt=wt}function a(c,r){if(nt===wt)Q-=c-mt,rt-=r-m,rt=Math.max(-89.999,Math.min(89.999,rt));else if(nt===yt){const{projectionMatrix:s,viewMatrix:n}=et(),i=[0,0,M.width,M.height],h=new Yt(n,s,i),f=h.getRayForPixel(c*B,r*B),y=-d.dot(h.eye.subtract(P))/d.dot(f),v=h.eye.add(f.multiply(y));j=j.add(v.subtract(P)),j.x=Math.max(E-1,Math.min(1-E,j.x)),j.y=Math.max(E-1,Math.min(10,j.y)),j.z=Math.max(E-1,Math.min(1-E,j.z)),ot.update(j.toArray(),E),P=v}else if(nt===Lt){const{projectionMatrix:s,viewMatrix:n}=et(),i=[0,0,M.width,M.height],h=new Yt(n,s,i),f=h.getRayForPixel(c*B,r*B),y=-h.eye.y/f.y,v=h.eye.add(f.multiply(y));Math.abs(v.x)<1&&Math.abs(v.z)<1&&tt.addDrop(v.x,v.z,.03,.01)}mt=c,m=r}function o(){nt=-1}M.addEventListener("mousedown",c=>{c.preventDefault(),e(c.offsetX,c.offsetY)}),window.addEventListener("mousemove",c=>{if(nt!==-1){const r=M.getBoundingClientRect(),s=c.clientX-r.left,n=c.clientY-r.top;a(s,n)}}),window.addEventListener("mouseup",()=>{o()});let u;function p(){const c=window.innerWidth-O.clientWidth-20,r=window.innerHeight;M.width=Math.floor(c*B),M.height=Math.floor(r*B),M.style.width=c+"px",M.style.height=r+"px",u&&u.destroy(),u=D.createTexture({size:[M.width,M.height],format:"depth24plus",usage:GPUTextureUsage.RENDER_ATTACHMENT}),x()}window.addEventListener("resize",p),document.getElementById("loading").innerHTML="",p();function g(){const{projectionMatrix:c,viewMatrix:r}=et(),s=qt.multiply(c,r),n=qt.invert(r),i=Zt.transformMat4([0,0,0],n),h=new Float32Array(20);h.set(s,0),h.set(i,16),D.queue.writeBuffer(lt,0,h)}function x(){const c=performance.now();let r=(c-_)/1e3;if(_=c,r>1&&(r=1),Rt.L&&(xt=Y.fromAngles((90-Q)*Math.PI/180,-rt*Math.PI/180),At()),!K){if(nt===yt)q=new Y(0,0,0);else if(Ut){let i=Math.max(0,Math.min(1,(E-j.y)/(2*E)));q=q.add(pt.multiply(r-1.1*r*i)),q=q.subtract(q.unit().multiply(i*r*q.dot(q))),j=j.add(q.multiply(r)),j.y<E-1&&(j.y=E-1,q.y=Math.abs(q.y)*.7),ot.update(j.toArray(),E)}tt.moveSphere(X.toArray(),j.toArray(),E),X=j.clone(),tt.stepSimulation(),tt.stepSimulation(),tt.updateNormals(),tt.updateCaustics()}g();const s=D.createCommandEncoder(),n=s.beginRenderPass({colorAttachments:[{view:A.getCurrentTexture().createView(),clearValue:{r:0,g:0,b:0,a:1},loadOp:"clear",storeOp:"store"}],depthStencilAttachment:{view:u.createView(),depthClearValue:1,depthLoadOp:"clear",depthStoreOp:"store"}});Ot.render(n,tt.textureA,tt.sampler,tt.causticsTexture),ot.render(n,tt.textureA,tt.sampler,tt.causticsTexture),tt.renderSurface(n),n.end(),D.queue.submit([s.finish()])}function t(){requestAnimationFrame(t),x()}requestAnimationFrame(t)}Pe();
