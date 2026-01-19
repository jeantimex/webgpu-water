(function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const M of document.querySelectorAll('link[rel="modulepreload"]'))D(M);new MutationObserver(M=>{for(const A of M)if(A.type==="childList")for(const b of A.addedNodes)b.tagName==="LINK"&&b.rel==="modulepreload"&&D(b)}).observe(document,{childList:!0,subtree:!0});function z(M){const A={};return M.integrity&&(A.integrity=M.integrity),M.referrerPolicy&&(A.referrerPolicy=M.referrerPolicy),M.crossOrigin==="use-credentials"?A.credentials="include":M.crossOrigin==="anonymous"?A.credentials="omit":A.credentials="same-origin",A}function D(M){if(M.ep)return;M.ep=!0;const A=z(M);fetch(M.href,A)}})();function ae(w,l){return class extends w{constructor(...z){super(...z),l(this)}}}const ue=ae(Array,w=>w.fill(0));let W=1e-6;function fe(w){function l(p=0,g=0){const x=new w(2);return p!==void 0&&(x[0]=p,g!==void 0&&(x[1]=g)),x}const z=l;function D(p,g,x){const t=x??new w(2);return t[0]=p,t[1]=g,t}function M(p,g){const x=g??new w(2);return x[0]=Math.ceil(p[0]),x[1]=Math.ceil(p[1]),x}function A(p,g){const x=g??new w(2);return x[0]=Math.floor(p[0]),x[1]=Math.floor(p[1]),x}function b(p,g){const x=g??new w(2);return x[0]=Math.round(p[0]),x[1]=Math.round(p[1]),x}function O(p,g=0,x=1,t){const a=t??new w(2);return a[0]=Math.min(x,Math.max(g,p[0])),a[1]=Math.min(x,Math.max(g,p[1])),a}function B(p,g,x){const t=x??new w(2);return t[0]=p[0]+g[0],t[1]=p[1]+g[1],t}function V(p,g,x,t){const a=t??new w(2);return a[0]=p[0]+g[0]*x,a[1]=p[1]+g[1]*x,a}function j(p,g){const x=p[0],t=p[1],a=g[0],r=g[1],s=Math.sqrt(x*x+t*t),n=Math.sqrt(a*a+r*r),i=s*n,h=i&&dt(p,g)/i;return Math.acos(h)}function q(p,g,x){const t=x??new w(2);return t[0]=p[0]-g[0],t[1]=p[1]-g[1],t}const N=q;function Y(p,g){return Math.abs(p[0]-g[0])<W&&Math.abs(p[1]-g[1])<W}function tt(p,g){return p[0]===g[0]&&p[1]===g[1]}function J(p,g,x,t){const a=t??new w(2);return a[0]=p[0]+x*(g[0]-p[0]),a[1]=p[1]+x*(g[1]-p[1]),a}function ot(p,g,x,t){const a=t??new w(2);return a[0]=p[0]+x[0]*(g[0]-p[0]),a[1]=p[1]+x[1]*(g[1]-p[1]),a}function Z(p,g,x){const t=x??new w(2);return t[0]=Math.max(p[0],g[0]),t[1]=Math.max(p[1],g[1]),t}function nt(p,g,x){const t=x??new w(2);return t[0]=Math.min(p[0],g[0]),t[1]=Math.min(p[1],g[1]),t}function et(p,g,x){const t=x??new w(2);return t[0]=p[0]*g,t[1]=p[1]*g,t}const It=et;function ut(p,g,x){const t=x??new w(2);return t[0]=p[0]/g,t[1]=p[1]/g,t}function gt(p,g){const x=g??new w(2);return x[0]=1/p[0],x[1]=1/p[1],x}const lt=gt;function xt(p,g,x){const t=x??new w(3),a=p[0]*g[1]-p[1]*g[0];return t[0]=0,t[1]=0,t[2]=a,t}function dt(p,g){return p[0]*g[0]+p[1]*g[1]}function rt(p){const g=p[0],x=p[1];return Math.sqrt(g*g+x*x)}const Lt=rt;function ht(p){const g=p[0],x=p[1];return g*g+x*x}const yt=ht;function $(p,g){const x=p[0]-g[0],t=p[1]-g[1];return Math.sqrt(x*x+t*t)}const G=$;function H(p,g){const x=p[0]-g[0],t=p[1]-g[1];return x*x+t*t}const E=H;function C(p,g){const x=g??new w(2),t=p[0],a=p[1],r=Math.sqrt(t*t+a*a);return r>1e-5?(x[0]=t/r,x[1]=a/r):(x[0]=0,x[1]=0),x}function Ot(p,g){const x=g??new w(2);return x[0]=-p[0],x[1]=-p[1],x}function K(p,g){const x=g??new w(2);return x[0]=p[0],x[1]=p[1],x}const At=K;function ft(p,g,x){const t=x??new w(2);return t[0]=p[0]*g[0],t[1]=p[1]*g[1],t}const st=ft;function pt(p,g,x){const t=x??new w(2);return t[0]=p[0]/g[0],t[1]=p[1]/g[1],t}const Ut=pt;function mt(p=1,g){const x=g??new w(2),t=Math.random()*2*Math.PI;return x[0]=Math.cos(t)*p,x[1]=Math.sin(t)*p,x}function m(p){const g=p??new w(2);return g[0]=0,g[1]=0,g}function P(p,g,x){const t=x??new w(2),a=p[0],r=p[1];return t[0]=a*g[0]+r*g[4]+g[12],t[1]=a*g[1]+r*g[5]+g[13],t}function d(p,g,x){const t=x??new w(2),a=p[0],r=p[1];return t[0]=g[0]*a+g[4]*r+g[8],t[1]=g[1]*a+g[5]*r+g[9],t}function e(p,g,x,t){const a=t??new w(2),r=p[0]-g[0],s=p[1]-g[1],n=Math.sin(x),i=Math.cos(x);return a[0]=r*i-s*n+g[0],a[1]=r*n+s*i+g[1],a}function c(p,g,x){const t=x??new w(2);return C(p,t),et(t,g,t)}function o(p,g,x){const t=x??new w(2);return rt(p)>g?c(p,g,t):K(p,t)}function f(p,g,x){const t=x??new w(2);return J(p,g,.5,t)}return{create:l,fromValues:z,set:D,ceil:M,floor:A,round:b,clamp:O,add:B,addScaled:V,angle:j,subtract:q,sub:N,equalsApproximately:Y,equals:tt,lerp:J,lerpV:ot,max:Z,min:nt,mulScalar:et,scale:It,divScalar:ut,inverse:gt,invert:lt,cross:xt,dot:dt,length:rt,len:Lt,lengthSq:ht,lenSq:yt,distance:$,dist:G,distanceSq:H,distSq:E,normalize:C,negate:Ot,copy:K,clone:At,multiply:ft,mul:st,divide:pt,div:Ut,random:mt,zero:m,transformMat4:P,transformMat3:d,rotate:e,setLength:c,truncate:o,midpoint:f}}const ee=new Map;function ce(w){let l=ee.get(w);return l||(l=fe(w),ee.set(w,l)),l}function le(w){function l(n,i,h){const u=new w(3);return n!==void 0&&(u[0]=n,i!==void 0&&(u[1]=i,h!==void 0&&(u[2]=h))),u}const z=l;function D(n,i,h,u){const y=u??new w(3);return y[0]=n,y[1]=i,y[2]=h,y}function M(n,i){const h=i??new w(3);return h[0]=Math.ceil(n[0]),h[1]=Math.ceil(n[1]),h[2]=Math.ceil(n[2]),h}function A(n,i){const h=i??new w(3);return h[0]=Math.floor(n[0]),h[1]=Math.floor(n[1]),h[2]=Math.floor(n[2]),h}function b(n,i){const h=i??new w(3);return h[0]=Math.round(n[0]),h[1]=Math.round(n[1]),h[2]=Math.round(n[2]),h}function O(n,i=0,h=1,u){const y=u??new w(3);return y[0]=Math.min(h,Math.max(i,n[0])),y[1]=Math.min(h,Math.max(i,n[1])),y[2]=Math.min(h,Math.max(i,n[2])),y}function B(n,i,h){const u=h??new w(3);return u[0]=n[0]+i[0],u[1]=n[1]+i[1],u[2]=n[2]+i[2],u}function V(n,i,h,u){const y=u??new w(3);return y[0]=n[0]+i[0]*h,y[1]=n[1]+i[1]*h,y[2]=n[2]+i[2]*h,y}function j(n,i){const h=n[0],u=n[1],y=n[2],v=i[0],S=i[1],T=i[2],U=Math.sqrt(h*h+u*u+y*y),R=Math.sqrt(v*v+S*S+T*T),I=U*R,F=I&&dt(n,i)/I;return Math.acos(F)}function q(n,i,h){const u=h??new w(3);return u[0]=n[0]-i[0],u[1]=n[1]-i[1],u[2]=n[2]-i[2],u}const N=q;function Y(n,i){return Math.abs(n[0]-i[0])<W&&Math.abs(n[1]-i[1])<W&&Math.abs(n[2]-i[2])<W}function tt(n,i){return n[0]===i[0]&&n[1]===i[1]&&n[2]===i[2]}function J(n,i,h,u){const y=u??new w(3);return y[0]=n[0]+h*(i[0]-n[0]),y[1]=n[1]+h*(i[1]-n[1]),y[2]=n[2]+h*(i[2]-n[2]),y}function ot(n,i,h,u){const y=u??new w(3);return y[0]=n[0]+h[0]*(i[0]-n[0]),y[1]=n[1]+h[1]*(i[1]-n[1]),y[2]=n[2]+h[2]*(i[2]-n[2]),y}function Z(n,i,h){const u=h??new w(3);return u[0]=Math.max(n[0],i[0]),u[1]=Math.max(n[1],i[1]),u[2]=Math.max(n[2],i[2]),u}function nt(n,i,h){const u=h??new w(3);return u[0]=Math.min(n[0],i[0]),u[1]=Math.min(n[1],i[1]),u[2]=Math.min(n[2],i[2]),u}function et(n,i,h){const u=h??new w(3);return u[0]=n[0]*i,u[1]=n[1]*i,u[2]=n[2]*i,u}const It=et;function ut(n,i,h){const u=h??new w(3);return u[0]=n[0]/i,u[1]=n[1]/i,u[2]=n[2]/i,u}function gt(n,i){const h=i??new w(3);return h[0]=1/n[0],h[1]=1/n[1],h[2]=1/n[2],h}const lt=gt;function xt(n,i,h){const u=h??new w(3),y=n[2]*i[0]-n[0]*i[2],v=n[0]*i[1]-n[1]*i[0];return u[0]=n[1]*i[2]-n[2]*i[1],u[1]=y,u[2]=v,u}function dt(n,i){return n[0]*i[0]+n[1]*i[1]+n[2]*i[2]}function rt(n){const i=n[0],h=n[1],u=n[2];return Math.sqrt(i*i+h*h+u*u)}const Lt=rt;function ht(n){const i=n[0],h=n[1],u=n[2];return i*i+h*h+u*u}const yt=ht;function $(n,i){const h=n[0]-i[0],u=n[1]-i[1],y=n[2]-i[2];return Math.sqrt(h*h+u*u+y*y)}const G=$;function H(n,i){const h=n[0]-i[0],u=n[1]-i[1],y=n[2]-i[2];return h*h+u*u+y*y}const E=H;function C(n,i){const h=i??new w(3),u=n[0],y=n[1],v=n[2],S=Math.sqrt(u*u+y*y+v*v);return S>1e-5?(h[0]=u/S,h[1]=y/S,h[2]=v/S):(h[0]=0,h[1]=0,h[2]=0),h}function Ot(n,i){const h=i??new w(3);return h[0]=-n[0],h[1]=-n[1],h[2]=-n[2],h}function K(n,i){const h=i??new w(3);return h[0]=n[0],h[1]=n[1],h[2]=n[2],h}const At=K;function ft(n,i,h){const u=h??new w(3);return u[0]=n[0]*i[0],u[1]=n[1]*i[1],u[2]=n[2]*i[2],u}const st=ft;function pt(n,i,h){const u=h??new w(3);return u[0]=n[0]/i[0],u[1]=n[1]/i[1],u[2]=n[2]/i[2],u}const Ut=pt;function mt(n=1,i){const h=i??new w(3),u=Math.random()*2*Math.PI,y=Math.random()*2-1,v=Math.sqrt(1-y*y)*n;return h[0]=Math.cos(u)*v,h[1]=Math.sin(u)*v,h[2]=y*n,h}function m(n){const i=n??new w(3);return i[0]=0,i[1]=0,i[2]=0,i}function P(n,i,h){const u=h??new w(3),y=n[0],v=n[1],S=n[2],T=i[3]*y+i[7]*v+i[11]*S+i[15]||1;return u[0]=(i[0]*y+i[4]*v+i[8]*S+i[12])/T,u[1]=(i[1]*y+i[5]*v+i[9]*S+i[13])/T,u[2]=(i[2]*y+i[6]*v+i[10]*S+i[14])/T,u}function d(n,i,h){const u=h??new w(3),y=n[0],v=n[1],S=n[2];return u[0]=y*i[0]+v*i[4]+S*i[8],u[1]=y*i[1]+v*i[5]+S*i[9],u[2]=y*i[2]+v*i[6]+S*i[10],u}function e(n,i,h){const u=h??new w(3),y=n[0],v=n[1],S=n[2];return u[0]=y*i[0]+v*i[4]+S*i[8],u[1]=y*i[1]+v*i[5]+S*i[9],u[2]=y*i[2]+v*i[6]+S*i[10],u}function c(n,i,h){const u=h??new w(3),y=i[0],v=i[1],S=i[2],T=i[3]*2,U=n[0],R=n[1],I=n[2],F=v*I-S*R,L=S*U-y*I,_=y*R-v*U;return u[0]=U+F*T+(v*_-S*L)*2,u[1]=R+L*T+(S*F-y*_)*2,u[2]=I+_*T+(y*L-v*F)*2,u}function o(n,i){const h=i??new w(3);return h[0]=n[12],h[1]=n[13],h[2]=n[14],h}function f(n,i,h){const u=h??new w(3),y=i*4;return u[0]=n[y+0],u[1]=n[y+1],u[2]=n[y+2],u}function p(n,i){const h=i??new w(3),u=n[0],y=n[1],v=n[2],S=n[4],T=n[5],U=n[6],R=n[8],I=n[9],F=n[10];return h[0]=Math.sqrt(u*u+y*y+v*v),h[1]=Math.sqrt(S*S+T*T+U*U),h[2]=Math.sqrt(R*R+I*I+F*F),h}function g(n,i,h,u){const y=u??new w(3),v=[],S=[];return v[0]=n[0]-i[0],v[1]=n[1]-i[1],v[2]=n[2]-i[2],S[0]=v[0],S[1]=v[1]*Math.cos(h)-v[2]*Math.sin(h),S[2]=v[1]*Math.sin(h)+v[2]*Math.cos(h),y[0]=S[0]+i[0],y[1]=S[1]+i[1],y[2]=S[2]+i[2],y}function x(n,i,h,u){const y=u??new w(3),v=[],S=[];return v[0]=n[0]-i[0],v[1]=n[1]-i[1],v[2]=n[2]-i[2],S[0]=v[2]*Math.sin(h)+v[0]*Math.cos(h),S[1]=v[1],S[2]=v[2]*Math.cos(h)-v[0]*Math.sin(h),y[0]=S[0]+i[0],y[1]=S[1]+i[1],y[2]=S[2]+i[2],y}function t(n,i,h,u){const y=u??new w(3),v=[],S=[];return v[0]=n[0]-i[0],v[1]=n[1]-i[1],v[2]=n[2]-i[2],S[0]=v[0]*Math.cos(h)-v[1]*Math.sin(h),S[1]=v[0]*Math.sin(h)+v[1]*Math.cos(h),S[2]=v[2],y[0]=S[0]+i[0],y[1]=S[1]+i[1],y[2]=S[2]+i[2],y}function a(n,i,h){const u=h??new w(3);return C(n,u),et(u,i,u)}function r(n,i,h){const u=h??new w(3);return rt(n)>i?a(n,i,u):K(n,u)}function s(n,i,h){const u=h??new w(3);return J(n,i,.5,u)}return{create:l,fromValues:z,set:D,ceil:M,floor:A,round:b,clamp:O,add:B,addScaled:V,angle:j,subtract:q,sub:N,equalsApproximately:Y,equals:tt,lerp:J,lerpV:ot,max:Z,min:nt,mulScalar:et,scale:It,divScalar:ut,inverse:gt,invert:lt,cross:xt,dot:dt,length:rt,len:Lt,lengthSq:ht,lenSq:yt,distance:$,dist:G,distanceSq:H,distSq:E,normalize:C,negate:Ot,copy:K,clone:At,multiply:ft,mul:st,divide:pt,div:Ut,random:mt,zero:m,transformMat4:P,transformMat4Upper3x3:d,transformMat3:e,transformQuat:c,getTranslation:o,getAxis:f,getScaling:p,rotateX:g,rotateY:x,rotateZ:t,setLength:a,truncate:r,midpoint:s}}const ne=new Map;function $t(w){let l=ne.get(w);return l||(l=le(w),ne.set(w,l)),l}function de(w){const l=ce(w),z=$t(w);function D(e,c,o,f,p,g,x,t,a){const r=new w(12);return r[3]=0,r[7]=0,r[11]=0,e!==void 0&&(r[0]=e,c!==void 0&&(r[1]=c,o!==void 0&&(r[2]=o,f!==void 0&&(r[4]=f,p!==void 0&&(r[5]=p,g!==void 0&&(r[6]=g,x!==void 0&&(r[8]=x,t!==void 0&&(r[9]=t,a!==void 0&&(r[10]=a))))))))),r}function M(e,c,o,f,p,g,x,t,a,r){const s=r??new w(12);return s[0]=e,s[1]=c,s[2]=o,s[3]=0,s[4]=f,s[5]=p,s[6]=g,s[7]=0,s[8]=x,s[9]=t,s[10]=a,s[11]=0,s}function A(e,c){const o=c??new w(12);return o[0]=e[0],o[1]=e[1],o[2]=e[2],o[3]=0,o[4]=e[4],o[5]=e[5],o[6]=e[6],o[7]=0,o[8]=e[8],o[9]=e[9],o[10]=e[10],o[11]=0,o}function b(e,c){const o=c??new w(12),f=e[0],p=e[1],g=e[2],x=e[3],t=f+f,a=p+p,r=g+g,s=f*t,n=p*t,i=p*a,h=g*t,u=g*a,y=g*r,v=x*t,S=x*a,T=x*r;return o[0]=1-i-y,o[1]=n+T,o[2]=h-S,o[3]=0,o[4]=n-T,o[5]=1-s-y,o[6]=u+v,o[7]=0,o[8]=h+S,o[9]=u-v,o[10]=1-s-i,o[11]=0,o}function O(e,c){const o=c??new w(12);return o[0]=-e[0],o[1]=-e[1],o[2]=-e[2],o[4]=-e[4],o[5]=-e[5],o[6]=-e[6],o[8]=-e[8],o[9]=-e[9],o[10]=-e[10],o}function B(e,c,o){const f=o??new w(12);return f[0]=e[0]*c,f[1]=e[1]*c,f[2]=e[2]*c,f[4]=e[4]*c,f[5]=e[5]*c,f[6]=e[6]*c,f[8]=e[8]*c,f[9]=e[9]*c,f[10]=e[10]*c,f}const V=B;function j(e,c,o){const f=o??new w(12);return f[0]=e[0]+c[0],f[1]=e[1]+c[1],f[2]=e[2]+c[2],f[4]=e[4]+c[4],f[5]=e[5]+c[5],f[6]=e[6]+c[6],f[8]=e[8]+c[8],f[9]=e[9]+c[9],f[10]=e[10]+c[10],f}function q(e,c){const o=c??new w(12);return o[0]=e[0],o[1]=e[1],o[2]=e[2],o[4]=e[4],o[5]=e[5],o[6]=e[6],o[8]=e[8],o[9]=e[9],o[10]=e[10],o}const N=q;function Y(e,c){return Math.abs(e[0]-c[0])<W&&Math.abs(e[1]-c[1])<W&&Math.abs(e[2]-c[2])<W&&Math.abs(e[4]-c[4])<W&&Math.abs(e[5]-c[5])<W&&Math.abs(e[6]-c[6])<W&&Math.abs(e[8]-c[8])<W&&Math.abs(e[9]-c[9])<W&&Math.abs(e[10]-c[10])<W}function tt(e,c){return e[0]===c[0]&&e[1]===c[1]&&e[2]===c[2]&&e[4]===c[4]&&e[5]===c[5]&&e[6]===c[6]&&e[8]===c[8]&&e[9]===c[9]&&e[10]===c[10]}function J(e){const c=e??new w(12);return c[0]=1,c[1]=0,c[2]=0,c[4]=0,c[5]=1,c[6]=0,c[8]=0,c[9]=0,c[10]=1,c}function ot(e,c){const o=c??new w(12);if(o===e){let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,o}const f=e[0],p=e[1],g=e[2],x=e[4],t=e[5],a=e[6],r=e[8],s=e[9],n=e[10];return o[0]=f,o[1]=x,o[2]=r,o[4]=p,o[5]=t,o[6]=s,o[8]=g,o[9]=a,o[10]=n,o}function Z(e,c){const o=c??new w(12),f=e[0],p=e[1],g=e[2],x=e[4],t=e[5],a=e[6],r=e[8],s=e[9],n=e[10],i=n*t-a*s,h=-n*x+a*r,u=s*x-t*r,y=1/(f*i+p*h+g*u);return o[0]=i*y,o[1]=(-n*p+g*s)*y,o[2]=(a*p-g*t)*y,o[4]=h*y,o[5]=(n*f-g*r)*y,o[6]=(-a*f+g*x)*y,o[8]=u*y,o[9]=(-s*f+p*r)*y,o[10]=(t*f-p*x)*y,o}function nt(e){const c=e[0],o=e[1],f=e[2],p=e[4],g=e[5],x=e[6],t=e[8],a=e[9],r=e[10];return c*(g*r-a*x)-p*(o*r-a*f)+t*(o*x-g*f)}const et=Z;function It(e,c,o){const f=o??new w(12),p=e[0],g=e[1],x=e[2],t=e[4],a=e[5],r=e[6],s=e[8],n=e[9],i=e[10],h=c[0],u=c[1],y=c[2],v=c[4],S=c[5],T=c[6],U=c[8],R=c[9],I=c[10];return f[0]=p*h+t*u+s*y,f[1]=g*h+a*u+n*y,f[2]=x*h+r*u+i*y,f[4]=p*v+t*S+s*T,f[5]=g*v+a*S+n*T,f[6]=x*v+r*S+i*T,f[8]=p*U+t*R+s*I,f[9]=g*U+a*R+n*I,f[10]=x*U+r*R+i*I,f}const ut=It;function gt(e,c,o){const f=o??J();return e!==f&&(f[0]=e[0],f[1]=e[1],f[2]=e[2],f[4]=e[4],f[5]=e[5],f[6]=e[6]),f[8]=c[0],f[9]=c[1],f[10]=1,f}function lt(e,c){const o=c??l.create();return o[0]=e[8],o[1]=e[9],o}function xt(e,c,o){const f=o??l.create(),p=c*4;return f[0]=e[p+0],f[1]=e[p+1],f}function dt(e,c,o,f){const p=f===e?e:q(e,f),g=o*4;return p[g+0]=c[0],p[g+1]=c[1],p}function rt(e,c){const o=c??l.create(),f=e[0],p=e[1],g=e[4],x=e[5];return o[0]=Math.sqrt(f*f+p*p),o[1]=Math.sqrt(g*g+x*x),o}function Lt(e,c){const o=c??z.create(),f=e[0],p=e[1],g=e[2],x=e[4],t=e[5],a=e[6],r=e[8],s=e[9],n=e[10];return o[0]=Math.sqrt(f*f+p*p+g*g),o[1]=Math.sqrt(x*x+t*t+a*a),o[2]=Math.sqrt(r*r+s*s+n*n),o}function ht(e,c){const o=c??new w(12);return o[0]=1,o[1]=0,o[2]=0,o[4]=0,o[5]=1,o[6]=0,o[8]=e[0],o[9]=e[1],o[10]=1,o}function yt(e,c,o){const f=o??new w(12),p=c[0],g=c[1],x=e[0],t=e[1],a=e[2],r=e[4],s=e[5],n=e[6],i=e[8],h=e[9],u=e[10];return e!==f&&(f[0]=x,f[1]=t,f[2]=a,f[4]=r,f[5]=s,f[6]=n),f[8]=x*p+r*g+i,f[9]=t*p+s*g+h,f[10]=a*p+n*g+u,f}function $(e,c){const o=c??new w(12),f=Math.cos(e),p=Math.sin(e);return o[0]=f,o[1]=p,o[2]=0,o[4]=-p,o[5]=f,o[6]=0,o[8]=0,o[9]=0,o[10]=1,o}function G(e,c,o){const f=o??new w(12),p=e[0],g=e[1],x=e[2],t=e[4],a=e[5],r=e[6],s=Math.cos(c),n=Math.sin(c);return f[0]=s*p+n*t,f[1]=s*g+n*a,f[2]=s*x+n*r,f[4]=s*t-n*p,f[5]=s*a-n*g,f[6]=s*r-n*x,e!==f&&(f[8]=e[8],f[9]=e[9],f[10]=e[10]),f}function H(e,c){const o=c??new w(12),f=Math.cos(e),p=Math.sin(e);return o[0]=1,o[1]=0,o[2]=0,o[4]=0,o[5]=f,o[6]=p,o[8]=0,o[9]=-p,o[10]=f,o}function E(e,c,o){const f=o??new w(12),p=e[4],g=e[5],x=e[6],t=e[8],a=e[9],r=e[10],s=Math.cos(c),n=Math.sin(c);return f[4]=s*p+n*t,f[5]=s*g+n*a,f[6]=s*x+n*r,f[8]=s*t-n*p,f[9]=s*a-n*g,f[10]=s*r-n*x,e!==f&&(f[0]=e[0],f[1]=e[1],f[2]=e[2]),f}function C(e,c){const o=c??new w(12),f=Math.cos(e),p=Math.sin(e);return o[0]=f,o[1]=0,o[2]=-p,o[4]=0,o[5]=1,o[6]=0,o[8]=p,o[9]=0,o[10]=f,o}function Ot(e,c,o){const f=o??new w(12),p=e[0],g=e[1],x=e[2],t=e[8],a=e[9],r=e[10],s=Math.cos(c),n=Math.sin(c);return f[0]=s*p-n*t,f[1]=s*g-n*a,f[2]=s*x-n*r,f[8]=s*t+n*p,f[9]=s*a+n*g,f[10]=s*r+n*x,e!==f&&(f[4]=e[4],f[5]=e[5],f[6]=e[6]),f}const K=$,At=G;function ft(e,c){const o=c??new w(12);return o[0]=e[0],o[1]=0,o[2]=0,o[4]=0,o[5]=e[1],o[6]=0,o[8]=0,o[9]=0,o[10]=1,o}function st(e,c,o){const f=o??new w(12),p=c[0],g=c[1];return f[0]=p*e[0],f[1]=p*e[1],f[2]=p*e[2],f[4]=g*e[4],f[5]=g*e[5],f[6]=g*e[6],e!==f&&(f[8]=e[8],f[9]=e[9],f[10]=e[10]),f}function pt(e,c){const o=c??new w(12);return o[0]=e[0],o[1]=0,o[2]=0,o[4]=0,o[5]=e[1],o[6]=0,o[8]=0,o[9]=0,o[10]=e[2],o}function Ut(e,c,o){const f=o??new w(12),p=c[0],g=c[1],x=c[2];return f[0]=p*e[0],f[1]=p*e[1],f[2]=p*e[2],f[4]=g*e[4],f[5]=g*e[5],f[6]=g*e[6],f[8]=x*e[8],f[9]=x*e[9],f[10]=x*e[10],f}function mt(e,c){const o=c??new w(12);return o[0]=e,o[1]=0,o[2]=0,o[4]=0,o[5]=e,o[6]=0,o[8]=0,o[9]=0,o[10]=1,o}function m(e,c,o){const f=o??new w(12);return f[0]=c*e[0],f[1]=c*e[1],f[2]=c*e[2],f[4]=c*e[4],f[5]=c*e[5],f[6]=c*e[6],e!==f&&(f[8]=e[8],f[9]=e[9],f[10]=e[10]),f}function P(e,c){const o=c??new w(12);return o[0]=e,o[1]=0,o[2]=0,o[4]=0,o[5]=e,o[6]=0,o[8]=0,o[9]=0,o[10]=e,o}function d(e,c,o){const f=o??new w(12);return f[0]=c*e[0],f[1]=c*e[1],f[2]=c*e[2],f[4]=c*e[4],f[5]=c*e[5],f[6]=c*e[6],f[8]=c*e[8],f[9]=c*e[9],f[10]=c*e[10],f}return{add:j,clone:N,copy:q,create:D,determinant:nt,equals:tt,equalsApproximately:Y,fromMat4:A,fromQuat:b,get3DScaling:Lt,getAxis:xt,getScaling:rt,getTranslation:lt,identity:J,inverse:Z,invert:et,mul:ut,mulScalar:V,multiply:It,multiplyScalar:B,negate:O,rotate:G,rotateX:E,rotateY:Ot,rotateZ:At,rotation:$,rotationX:H,rotationY:C,rotationZ:K,scale:st,scale3D:Ut,scaling:ft,scaling3D:pt,set:M,setAxis:dt,setTranslation:gt,translate:yt,translation:ht,transpose:ot,uniformScale:m,uniformScale3D:d,uniformScaling:mt,uniformScaling3D:P}}const re=new Map;function he(w){let l=re.get(w);return l||(l=de(w),re.set(w,l)),l}function pe(w){const l=$t(w);function z(t,a,r,s,n,i,h,u,y,v,S,T,U,R,I,F){const L=new w(16);return t!==void 0&&(L[0]=t,a!==void 0&&(L[1]=a,r!==void 0&&(L[2]=r,s!==void 0&&(L[3]=s,n!==void 0&&(L[4]=n,i!==void 0&&(L[5]=i,h!==void 0&&(L[6]=h,u!==void 0&&(L[7]=u,y!==void 0&&(L[8]=y,v!==void 0&&(L[9]=v,S!==void 0&&(L[10]=S,T!==void 0&&(L[11]=T,U!==void 0&&(L[12]=U,R!==void 0&&(L[13]=R,I!==void 0&&(L[14]=I,F!==void 0&&(L[15]=F)))))))))))))))),L}function D(t,a,r,s,n,i,h,u,y,v,S,T,U,R,I,F,L){const _=L??new w(16);return _[0]=t,_[1]=a,_[2]=r,_[3]=s,_[4]=n,_[5]=i,_[6]=h,_[7]=u,_[8]=y,_[9]=v,_[10]=S,_[11]=T,_[12]=U,_[13]=R,_[14]=I,_[15]=F,_}function M(t,a){const r=a??new w(16);return r[0]=t[0],r[1]=t[1],r[2]=t[2],r[3]=0,r[4]=t[4],r[5]=t[5],r[6]=t[6],r[7]=0,r[8]=t[8],r[9]=t[9],r[10]=t[10],r[11]=0,r[12]=0,r[13]=0,r[14]=0,r[15]=1,r}function A(t,a){const r=a??new w(16),s=t[0],n=t[1],i=t[2],h=t[3],u=s+s,y=n+n,v=i+i,S=s*u,T=n*u,U=n*y,R=i*u,I=i*y,F=i*v,L=h*u,_=h*y,Q=h*v;return r[0]=1-U-F,r[1]=T+Q,r[2]=R-_,r[3]=0,r[4]=T-Q,r[5]=1-S-F,r[6]=I+L,r[7]=0,r[8]=R+_,r[9]=I-L,r[10]=1-S-U,r[11]=0,r[12]=0,r[13]=0,r[14]=0,r[15]=1,r}function b(t,a){const r=a??new w(16);return r[0]=-t[0],r[1]=-t[1],r[2]=-t[2],r[3]=-t[3],r[4]=-t[4],r[5]=-t[5],r[6]=-t[6],r[7]=-t[7],r[8]=-t[8],r[9]=-t[9],r[10]=-t[10],r[11]=-t[11],r[12]=-t[12],r[13]=-t[13],r[14]=-t[14],r[15]=-t[15],r}function O(t,a,r){const s=r??new w(16);return s[0]=t[0]+a[0],s[1]=t[1]+a[1],s[2]=t[2]+a[2],s[3]=t[3]+a[3],s[4]=t[4]+a[4],s[5]=t[5]+a[5],s[6]=t[6]+a[6],s[7]=t[7]+a[7],s[8]=t[8]+a[8],s[9]=t[9]+a[9],s[10]=t[10]+a[10],s[11]=t[11]+a[11],s[12]=t[12]+a[12],s[13]=t[13]+a[13],s[14]=t[14]+a[14],s[15]=t[15]+a[15],s}function B(t,a,r){const s=r??new w(16);return s[0]=t[0]*a,s[1]=t[1]*a,s[2]=t[2]*a,s[3]=t[3]*a,s[4]=t[4]*a,s[5]=t[5]*a,s[6]=t[6]*a,s[7]=t[7]*a,s[8]=t[8]*a,s[9]=t[9]*a,s[10]=t[10]*a,s[11]=t[11]*a,s[12]=t[12]*a,s[13]=t[13]*a,s[14]=t[14]*a,s[15]=t[15]*a,s}const V=B;function j(t,a){const r=a??new w(16);return r[0]=t[0],r[1]=t[1],r[2]=t[2],r[3]=t[3],r[4]=t[4],r[5]=t[5],r[6]=t[6],r[7]=t[7],r[8]=t[8],r[9]=t[9],r[10]=t[10],r[11]=t[11],r[12]=t[12],r[13]=t[13],r[14]=t[14],r[15]=t[15],r}const q=j;function N(t,a){return Math.abs(t[0]-a[0])<W&&Math.abs(t[1]-a[1])<W&&Math.abs(t[2]-a[2])<W&&Math.abs(t[3]-a[3])<W&&Math.abs(t[4]-a[4])<W&&Math.abs(t[5]-a[5])<W&&Math.abs(t[6]-a[6])<W&&Math.abs(t[7]-a[7])<W&&Math.abs(t[8]-a[8])<W&&Math.abs(t[9]-a[9])<W&&Math.abs(t[10]-a[10])<W&&Math.abs(t[11]-a[11])<W&&Math.abs(t[12]-a[12])<W&&Math.abs(t[13]-a[13])<W&&Math.abs(t[14]-a[14])<W&&Math.abs(t[15]-a[15])<W}function Y(t,a){return t[0]===a[0]&&t[1]===a[1]&&t[2]===a[2]&&t[3]===a[3]&&t[4]===a[4]&&t[5]===a[5]&&t[6]===a[6]&&t[7]===a[7]&&t[8]===a[8]&&t[9]===a[9]&&t[10]===a[10]&&t[11]===a[11]&&t[12]===a[12]&&t[13]===a[13]&&t[14]===a[14]&&t[15]===a[15]}function tt(t){const a=t??new w(16);return a[0]=1,a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=1,a[6]=0,a[7]=0,a[8]=0,a[9]=0,a[10]=1,a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,a}function J(t,a){const r=a??new w(16);if(r===t){let k;return k=t[1],t[1]=t[4],t[4]=k,k=t[2],t[2]=t[8],t[8]=k,k=t[3],t[3]=t[12],t[12]=k,k=t[6],t[6]=t[9],t[9]=k,k=t[7],t[7]=t[13],t[13]=k,k=t[11],t[11]=t[14],t[14]=k,r}const s=t[0],n=t[1],i=t[2],h=t[3],u=t[4],y=t[5],v=t[6],S=t[7],T=t[8],U=t[9],R=t[10],I=t[11],F=t[12],L=t[13],_=t[14],Q=t[15];return r[0]=s,r[1]=u,r[2]=T,r[3]=F,r[4]=n,r[5]=y,r[6]=U,r[7]=L,r[8]=i,r[9]=v,r[10]=R,r[11]=_,r[12]=h,r[13]=S,r[14]=I,r[15]=Q,r}function ot(t,a){const r=a??new w(16),s=t[0],n=t[1],i=t[2],h=t[3],u=t[4],y=t[5],v=t[6],S=t[7],T=t[8],U=t[9],R=t[10],I=t[11],F=t[12],L=t[13],_=t[14],Q=t[15],k=R*Q,it=_*I,ct=v*Q,at=_*S,wt=v*I,vt=R*S,Mt=i*Q,St=_*h,Dt=i*I,Pt=R*h,Rt=i*S,bt=v*h,Tt=T*L,Bt=F*U,Gt=u*L,_t=F*y,Et=u*U,Vt=T*y,Ft=s*L,Nt=F*n,Wt=s*U,jt=T*n,Ht=s*y,Xt=u*n,Kt=k*y+at*U+wt*L-(it*y+ct*U+vt*L),Jt=it*n+Mt*U+Pt*L-(k*n+St*U+Dt*L),Ct=ct*n+St*y+Rt*L-(at*n+Mt*y+bt*L),te=vt*n+Dt*y+bt*U-(wt*n+Pt*y+Rt*U),zt=1/(s*Kt+u*Jt+T*Ct+F*te);return r[0]=zt*Kt,r[1]=zt*Jt,r[2]=zt*Ct,r[3]=zt*te,r[4]=zt*(it*u+ct*T+vt*F-(k*u+at*T+wt*F)),r[5]=zt*(k*s+St*T+Dt*F-(it*s+Mt*T+Pt*F)),r[6]=zt*(at*s+Mt*u+bt*F-(ct*s+St*u+Rt*F)),r[7]=zt*(wt*s+Pt*u+Rt*T-(vt*s+Dt*u+bt*T)),r[8]=zt*(Tt*S+_t*I+Et*Q-(Bt*S+Gt*I+Vt*Q)),r[9]=zt*(Bt*h+Ft*I+jt*Q-(Tt*h+Nt*I+Wt*Q)),r[10]=zt*(Gt*h+Nt*S+Ht*Q-(_t*h+Ft*S+Xt*Q)),r[11]=zt*(Vt*h+Wt*S+Xt*I-(Et*h+jt*S+Ht*I)),r[12]=zt*(Gt*R+Vt*_+Bt*v-(Et*_+Tt*v+_t*R)),r[13]=zt*(Wt*_+Tt*i+Nt*R-(Ft*R+jt*_+Bt*i)),r[14]=zt*(Ft*v+Xt*_+_t*i-(Ht*_+Gt*i+Nt*v)),r[15]=zt*(Ht*R+Et*i+jt*v-(Wt*v+Xt*R+Vt*i)),r}function Z(t){const a=t[0],r=t[1],s=t[2],n=t[3],i=t[4],h=t[5],u=t[6],y=t[7],v=t[8],S=t[9],T=t[10],U=t[11],R=t[12],I=t[13],F=t[14],L=t[15],_=T*L,Q=F*U,k=u*L,it=F*y,ct=u*U,at=T*y,wt=s*L,vt=F*n,Mt=s*U,St=T*n,Dt=s*y,Pt=u*n,Rt=_*h+it*S+ct*I-(Q*h+k*S+at*I),bt=Q*r+wt*S+St*I-(_*r+vt*S+Mt*I),Tt=k*r+vt*h+Dt*I-(it*r+wt*h+Pt*I),Bt=at*r+Mt*h+Pt*S-(ct*r+St*h+Dt*S);return a*Rt+i*bt+v*Tt+R*Bt}const nt=ot;function et(t,a,r){const s=r??new w(16),n=t[0],i=t[1],h=t[2],u=t[3],y=t[4],v=t[5],S=t[6],T=t[7],U=t[8],R=t[9],I=t[10],F=t[11],L=t[12],_=t[13],Q=t[14],k=t[15],it=a[0],ct=a[1],at=a[2],wt=a[3],vt=a[4],Mt=a[5],St=a[6],Dt=a[7],Pt=a[8],Rt=a[9],bt=a[10],Tt=a[11],Bt=a[12],Gt=a[13],_t=a[14],Et=a[15];return s[0]=n*it+y*ct+U*at+L*wt,s[1]=i*it+v*ct+R*at+_*wt,s[2]=h*it+S*ct+I*at+Q*wt,s[3]=u*it+T*ct+F*at+k*wt,s[4]=n*vt+y*Mt+U*St+L*Dt,s[5]=i*vt+v*Mt+R*St+_*Dt,s[6]=h*vt+S*Mt+I*St+Q*Dt,s[7]=u*vt+T*Mt+F*St+k*Dt,s[8]=n*Pt+y*Rt+U*bt+L*Tt,s[9]=i*Pt+v*Rt+R*bt+_*Tt,s[10]=h*Pt+S*Rt+I*bt+Q*Tt,s[11]=u*Pt+T*Rt+F*bt+k*Tt,s[12]=n*Bt+y*Gt+U*_t+L*Et,s[13]=i*Bt+v*Gt+R*_t+_*Et,s[14]=h*Bt+S*Gt+I*_t+Q*Et,s[15]=u*Bt+T*Gt+F*_t+k*Et,s}const It=et;function ut(t,a,r){const s=r??tt();return t!==s&&(s[0]=t[0],s[1]=t[1],s[2]=t[2],s[3]=t[3],s[4]=t[4],s[5]=t[5],s[6]=t[6],s[7]=t[7],s[8]=t[8],s[9]=t[9],s[10]=t[10],s[11]=t[11]),s[12]=a[0],s[13]=a[1],s[14]=a[2],s[15]=1,s}function gt(t,a){const r=a??l.create();return r[0]=t[12],r[1]=t[13],r[2]=t[14],r}function lt(t,a,r){const s=r??l.create(),n=a*4;return s[0]=t[n+0],s[1]=t[n+1],s[2]=t[n+2],s}function xt(t,a,r,s){const n=s===t?s:j(t,s),i=r*4;return n[i+0]=a[0],n[i+1]=a[1],n[i+2]=a[2],n}function dt(t,a){const r=a??l.create(),s=t[0],n=t[1],i=t[2],h=t[4],u=t[5],y=t[6],v=t[8],S=t[9],T=t[10];return r[0]=Math.sqrt(s*s+n*n+i*i),r[1]=Math.sqrt(h*h+u*u+y*y),r[2]=Math.sqrt(v*v+S*S+T*T),r}function rt(t,a,r,s,n){const i=n??new w(16),h=Math.tan(Math.PI*.5-.5*t);if(i[0]=h/a,i[1]=0,i[2]=0,i[3]=0,i[4]=0,i[5]=h,i[6]=0,i[7]=0,i[8]=0,i[9]=0,i[11]=-1,i[12]=0,i[13]=0,i[15]=0,Number.isFinite(s)){const u=1/(r-s);i[10]=s*u,i[14]=s*r*u}else i[10]=-1,i[14]=-r;return i}function Lt(t,a,r,s=1/0,n){const i=n??new w(16),h=1/Math.tan(t*.5);if(i[0]=h/a,i[1]=0,i[2]=0,i[3]=0,i[4]=0,i[5]=h,i[6]=0,i[7]=0,i[8]=0,i[9]=0,i[11]=-1,i[12]=0,i[13]=0,i[15]=0,s===1/0)i[10]=0,i[14]=r;else{const u=1/(s-r);i[10]=r*u,i[14]=s*r*u}return i}function ht(t,a,r,s,n,i,h){const u=h??new w(16);return u[0]=2/(a-t),u[1]=0,u[2]=0,u[3]=0,u[4]=0,u[5]=2/(s-r),u[6]=0,u[7]=0,u[8]=0,u[9]=0,u[10]=1/(n-i),u[11]=0,u[12]=(a+t)/(t-a),u[13]=(s+r)/(r-s),u[14]=n/(n-i),u[15]=1,u}function yt(t,a,r,s,n,i,h){const u=h??new w(16),y=a-t,v=s-r,S=n-i;return u[0]=2*n/y,u[1]=0,u[2]=0,u[3]=0,u[4]=0,u[5]=2*n/v,u[6]=0,u[7]=0,u[8]=(t+a)/y,u[9]=(s+r)/v,u[10]=i/S,u[11]=-1,u[12]=0,u[13]=0,u[14]=n*i/S,u[15]=0,u}function $(t,a,r,s,n,i=1/0,h){const u=h??new w(16),y=a-t,v=s-r;if(u[0]=2*n/y,u[1]=0,u[2]=0,u[3]=0,u[4]=0,u[5]=2*n/v,u[6]=0,u[7]=0,u[8]=(t+a)/y,u[9]=(s+r)/v,u[11]=-1,u[12]=0,u[13]=0,u[15]=0,i===1/0)u[10]=0,u[14]=n;else{const S=1/(i-n);u[10]=n*S,u[14]=i*n*S}return u}const G=l.create(),H=l.create(),E=l.create();function C(t,a,r,s){const n=s??new w(16);return l.normalize(l.subtract(a,t,E),E),l.normalize(l.cross(r,E,G),G),l.normalize(l.cross(E,G,H),H),n[0]=G[0],n[1]=G[1],n[2]=G[2],n[3]=0,n[4]=H[0],n[5]=H[1],n[6]=H[2],n[7]=0,n[8]=E[0],n[9]=E[1],n[10]=E[2],n[11]=0,n[12]=t[0],n[13]=t[1],n[14]=t[2],n[15]=1,n}function Ot(t,a,r,s){const n=s??new w(16);return l.normalize(l.subtract(t,a,E),E),l.normalize(l.cross(r,E,G),G),l.normalize(l.cross(E,G,H),H),n[0]=G[0],n[1]=G[1],n[2]=G[2],n[3]=0,n[4]=H[0],n[5]=H[1],n[6]=H[2],n[7]=0,n[8]=E[0],n[9]=E[1],n[10]=E[2],n[11]=0,n[12]=t[0],n[13]=t[1],n[14]=t[2],n[15]=1,n}function K(t,a,r,s){const n=s??new w(16);return l.normalize(l.subtract(t,a,E),E),l.normalize(l.cross(r,E,G),G),l.normalize(l.cross(E,G,H),H),n[0]=G[0],n[1]=H[0],n[2]=E[0],n[3]=0,n[4]=G[1],n[5]=H[1],n[6]=E[1],n[7]=0,n[8]=G[2],n[9]=H[2],n[10]=E[2],n[11]=0,n[12]=-(G[0]*t[0]+G[1]*t[1]+G[2]*t[2]),n[13]=-(H[0]*t[0]+H[1]*t[1]+H[2]*t[2]),n[14]=-(E[0]*t[0]+E[1]*t[1]+E[2]*t[2]),n[15]=1,n}function At(t,a){const r=a??new w(16);return r[0]=1,r[1]=0,r[2]=0,r[3]=0,r[4]=0,r[5]=1,r[6]=0,r[7]=0,r[8]=0,r[9]=0,r[10]=1,r[11]=0,r[12]=t[0],r[13]=t[1],r[14]=t[2],r[15]=1,r}function ft(t,a,r){const s=r??new w(16),n=a[0],i=a[1],h=a[2],u=t[0],y=t[1],v=t[2],S=t[3],T=t[4],U=t[5],R=t[6],I=t[7],F=t[8],L=t[9],_=t[10],Q=t[11],k=t[12],it=t[13],ct=t[14],at=t[15];return t!==s&&(s[0]=u,s[1]=y,s[2]=v,s[3]=S,s[4]=T,s[5]=U,s[6]=R,s[7]=I,s[8]=F,s[9]=L,s[10]=_,s[11]=Q),s[12]=u*n+T*i+F*h+k,s[13]=y*n+U*i+L*h+it,s[14]=v*n+R*i+_*h+ct,s[15]=S*n+I*i+Q*h+at,s}function st(t,a){const r=a??new w(16),s=Math.cos(t),n=Math.sin(t);return r[0]=1,r[1]=0,r[2]=0,r[3]=0,r[4]=0,r[5]=s,r[6]=n,r[7]=0,r[8]=0,r[9]=-n,r[10]=s,r[11]=0,r[12]=0,r[13]=0,r[14]=0,r[15]=1,r}function pt(t,a,r){const s=r??new w(16),n=t[4],i=t[5],h=t[6],u=t[7],y=t[8],v=t[9],S=t[10],T=t[11],U=Math.cos(a),R=Math.sin(a);return s[4]=U*n+R*y,s[5]=U*i+R*v,s[6]=U*h+R*S,s[7]=U*u+R*T,s[8]=U*y-R*n,s[9]=U*v-R*i,s[10]=U*S-R*h,s[11]=U*T-R*u,t!==s&&(s[0]=t[0],s[1]=t[1],s[2]=t[2],s[3]=t[3],s[12]=t[12],s[13]=t[13],s[14]=t[14],s[15]=t[15]),s}function Ut(t,a){const r=a??new w(16),s=Math.cos(t),n=Math.sin(t);return r[0]=s,r[1]=0,r[2]=-n,r[3]=0,r[4]=0,r[5]=1,r[6]=0,r[7]=0,r[8]=n,r[9]=0,r[10]=s,r[11]=0,r[12]=0,r[13]=0,r[14]=0,r[15]=1,r}function mt(t,a,r){const s=r??new w(16),n=t[0],i=t[1],h=t[2],u=t[3],y=t[8],v=t[9],S=t[10],T=t[11],U=Math.cos(a),R=Math.sin(a);return s[0]=U*n-R*y,s[1]=U*i-R*v,s[2]=U*h-R*S,s[3]=U*u-R*T,s[8]=U*y+R*n,s[9]=U*v+R*i,s[10]=U*S+R*h,s[11]=U*T+R*u,t!==s&&(s[4]=t[4],s[5]=t[5],s[6]=t[6],s[7]=t[7],s[12]=t[12],s[13]=t[13],s[14]=t[14],s[15]=t[15]),s}function m(t,a){const r=a??new w(16),s=Math.cos(t),n=Math.sin(t);return r[0]=s,r[1]=n,r[2]=0,r[3]=0,r[4]=-n,r[5]=s,r[6]=0,r[7]=0,r[8]=0,r[9]=0,r[10]=1,r[11]=0,r[12]=0,r[13]=0,r[14]=0,r[15]=1,r}function P(t,a,r){const s=r??new w(16),n=t[0],i=t[1],h=t[2],u=t[3],y=t[4],v=t[5],S=t[6],T=t[7],U=Math.cos(a),R=Math.sin(a);return s[0]=U*n+R*y,s[1]=U*i+R*v,s[2]=U*h+R*S,s[3]=U*u+R*T,s[4]=U*y-R*n,s[5]=U*v-R*i,s[6]=U*S-R*h,s[7]=U*T-R*u,t!==s&&(s[8]=t[8],s[9]=t[9],s[10]=t[10],s[11]=t[11],s[12]=t[12],s[13]=t[13],s[14]=t[14],s[15]=t[15]),s}function d(t,a,r){const s=r??new w(16);let n=t[0],i=t[1],h=t[2];const u=Math.sqrt(n*n+i*i+h*h);n/=u,i/=u,h/=u;const y=n*n,v=i*i,S=h*h,T=Math.cos(a),U=Math.sin(a),R=1-T;return s[0]=y+(1-y)*T,s[1]=n*i*R+h*U,s[2]=n*h*R-i*U,s[3]=0,s[4]=n*i*R-h*U,s[5]=v+(1-v)*T,s[6]=i*h*R+n*U,s[7]=0,s[8]=n*h*R+i*U,s[9]=i*h*R-n*U,s[10]=S+(1-S)*T,s[11]=0,s[12]=0,s[13]=0,s[14]=0,s[15]=1,s}const e=d;function c(t,a,r,s){const n=s??new w(16);let i=a[0],h=a[1],u=a[2];const y=Math.sqrt(i*i+h*h+u*u);i/=y,h/=y,u/=y;const v=i*i,S=h*h,T=u*u,U=Math.cos(r),R=Math.sin(r),I=1-U,F=v+(1-v)*U,L=i*h*I+u*R,_=i*u*I-h*R,Q=i*h*I-u*R,k=S+(1-S)*U,it=h*u*I+i*R,ct=i*u*I+h*R,at=h*u*I-i*R,wt=T+(1-T)*U,vt=t[0],Mt=t[1],St=t[2],Dt=t[3],Pt=t[4],Rt=t[5],bt=t[6],Tt=t[7],Bt=t[8],Gt=t[9],_t=t[10],Et=t[11];return n[0]=F*vt+L*Pt+_*Bt,n[1]=F*Mt+L*Rt+_*Gt,n[2]=F*St+L*bt+_*_t,n[3]=F*Dt+L*Tt+_*Et,n[4]=Q*vt+k*Pt+it*Bt,n[5]=Q*Mt+k*Rt+it*Gt,n[6]=Q*St+k*bt+it*_t,n[7]=Q*Dt+k*Tt+it*Et,n[8]=ct*vt+at*Pt+wt*Bt,n[9]=ct*Mt+at*Rt+wt*Gt,n[10]=ct*St+at*bt+wt*_t,n[11]=ct*Dt+at*Tt+wt*Et,t!==n&&(n[12]=t[12],n[13]=t[13],n[14]=t[14],n[15]=t[15]),n}const o=c;function f(t,a){const r=a??new w(16);return r[0]=t[0],r[1]=0,r[2]=0,r[3]=0,r[4]=0,r[5]=t[1],r[6]=0,r[7]=0,r[8]=0,r[9]=0,r[10]=t[2],r[11]=0,r[12]=0,r[13]=0,r[14]=0,r[15]=1,r}function p(t,a,r){const s=r??new w(16),n=a[0],i=a[1],h=a[2];return s[0]=n*t[0],s[1]=n*t[1],s[2]=n*t[2],s[3]=n*t[3],s[4]=i*t[4],s[5]=i*t[5],s[6]=i*t[6],s[7]=i*t[7],s[8]=h*t[8],s[9]=h*t[9],s[10]=h*t[10],s[11]=h*t[11],t!==s&&(s[12]=t[12],s[13]=t[13],s[14]=t[14],s[15]=t[15]),s}function g(t,a){const r=a??new w(16);return r[0]=t,r[1]=0,r[2]=0,r[3]=0,r[4]=0,r[5]=t,r[6]=0,r[7]=0,r[8]=0,r[9]=0,r[10]=t,r[11]=0,r[12]=0,r[13]=0,r[14]=0,r[15]=1,r}function x(t,a,r){const s=r??new w(16);return s[0]=a*t[0],s[1]=a*t[1],s[2]=a*t[2],s[3]=a*t[3],s[4]=a*t[4],s[5]=a*t[5],s[6]=a*t[6],s[7]=a*t[7],s[8]=a*t[8],s[9]=a*t[9],s[10]=a*t[10],s[11]=a*t[11],t!==s&&(s[12]=t[12],s[13]=t[13],s[14]=t[14],s[15]=t[15]),s}return{add:O,aim:C,axisRotate:c,axisRotation:d,cameraAim:Ot,clone:q,copy:j,create:z,determinant:Z,equals:Y,equalsApproximately:N,fromMat3:M,fromQuat:A,frustum:yt,frustumReverseZ:$,getAxis:lt,getScaling:dt,getTranslation:gt,identity:tt,inverse:ot,invert:nt,lookAt:K,mul:It,mulScalar:V,multiply:et,multiplyScalar:B,negate:b,ortho:ht,perspective:rt,perspectiveReverseZ:Lt,rotate:o,rotateX:pt,rotateY:mt,rotateZ:P,rotation:e,rotationX:st,rotationY:Ut,rotationZ:m,scale:p,scaling:f,set:D,setAxis:xt,setTranslation:ut,translate:ft,translation:At,transpose:J,uniformScale:x,uniformScaling:g}}const se=new Map;function we(w){let l=se.get(w);return l||(l=pe(w),se.set(w,l)),l}function ge(w){const l=$t(w);function z(m,P,d,e){const c=new w(4);return m!==void 0&&(c[0]=m,P!==void 0&&(c[1]=P,d!==void 0&&(c[2]=d,e!==void 0&&(c[3]=e)))),c}const D=z;function M(m,P,d,e,c){const o=c??new w(4);return o[0]=m,o[1]=P,o[2]=d,o[3]=e,o}function A(m,P,d){const e=d??new w(4),c=P*.5,o=Math.sin(c);return e[0]=o*m[0],e[1]=o*m[1],e[2]=o*m[2],e[3]=Math.cos(c),e}function b(m,P){const d=P??l.create(3),e=Math.acos(m[3])*2,c=Math.sin(e*.5);return c>W?(d[0]=m[0]/c,d[1]=m[1]/c,d[2]=m[2]/c):(d[0]=1,d[1]=0,d[2]=0),{angle:e,axis:d}}function O(m,P){const d=rt(m,P);return Math.acos(2*d*d-1)}function B(m,P,d){const e=d??new w(4),c=m[0],o=m[1],f=m[2],p=m[3],g=P[0],x=P[1],t=P[2],a=P[3];return e[0]=c*a+p*g+o*t-f*x,e[1]=o*a+p*x+f*g-c*t,e[2]=f*a+p*t+c*x-o*g,e[3]=p*a-c*g-o*x-f*t,e}const V=B;function j(m,P,d){const e=d??new w(4),c=P*.5,o=m[0],f=m[1],p=m[2],g=m[3],x=Math.sin(c),t=Math.cos(c);return e[0]=o*t+g*x,e[1]=f*t+p*x,e[2]=p*t-f*x,e[3]=g*t-o*x,e}function q(m,P,d){const e=d??new w(4),c=P*.5,o=m[0],f=m[1],p=m[2],g=m[3],x=Math.sin(c),t=Math.cos(c);return e[0]=o*t-p*x,e[1]=f*t+g*x,e[2]=p*t+o*x,e[3]=g*t-f*x,e}function N(m,P,d){const e=d??new w(4),c=P*.5,o=m[0],f=m[1],p=m[2],g=m[3],x=Math.sin(c),t=Math.cos(c);return e[0]=o*t+f*x,e[1]=f*t-o*x,e[2]=p*t+g*x,e[3]=g*t-p*x,e}function Y(m,P,d,e){const c=e??new w(4),o=m[0],f=m[1],p=m[2],g=m[3];let x=P[0],t=P[1],a=P[2],r=P[3],s=o*x+f*t+p*a+g*r;s<0&&(s=-s,x=-x,t=-t,a=-a,r=-r);let n,i;if(1-s>W){const h=Math.acos(s),u=Math.sin(h);n=Math.sin((1-d)*h)/u,i=Math.sin(d*h)/u}else n=1-d,i=d;return c[0]=n*o+i*x,c[1]=n*f+i*t,c[2]=n*p+i*a,c[3]=n*g+i*r,c}function tt(m,P){const d=P??new w(4),e=m[0],c=m[1],o=m[2],f=m[3],p=e*e+c*c+o*o+f*f,g=p?1/p:0;return d[0]=-e*g,d[1]=-c*g,d[2]=-o*g,d[3]=f*g,d}function J(m,P){const d=P??new w(4);return d[0]=-m[0],d[1]=-m[1],d[2]=-m[2],d[3]=m[3],d}function ot(m,P){const d=P??new w(4),e=m[0]+m[5]+m[10];if(e>0){const c=Math.sqrt(e+1);d[3]=.5*c;const o=.5/c;d[0]=(m[6]-m[9])*o,d[1]=(m[8]-m[2])*o,d[2]=(m[1]-m[4])*o}else{let c=0;m[5]>m[0]&&(c=1),m[10]>m[c*4+c]&&(c=2);const o=(c+1)%3,f=(c+2)%3,p=Math.sqrt(m[c*4+c]-m[o*4+o]-m[f*4+f]+1);d[c]=.5*p;const g=.5/p;d[3]=(m[o*4+f]-m[f*4+o])*g,d[o]=(m[o*4+c]+m[c*4+o])*g,d[f]=(m[f*4+c]+m[c*4+f])*g}return d}function Z(m,P,d,e,c){const o=c??new w(4),f=m*.5,p=P*.5,g=d*.5,x=Math.sin(f),t=Math.cos(f),a=Math.sin(p),r=Math.cos(p),s=Math.sin(g),n=Math.cos(g);switch(e){case"xyz":o[0]=x*r*n+t*a*s,o[1]=t*a*n-x*r*s,o[2]=t*r*s+x*a*n,o[3]=t*r*n-x*a*s;break;case"xzy":o[0]=x*r*n-t*a*s,o[1]=t*a*n-x*r*s,o[2]=t*r*s+x*a*n,o[3]=t*r*n+x*a*s;break;case"yxz":o[0]=x*r*n+t*a*s,o[1]=t*a*n-x*r*s,o[2]=t*r*s-x*a*n,o[3]=t*r*n+x*a*s;break;case"yzx":o[0]=x*r*n+t*a*s,o[1]=t*a*n+x*r*s,o[2]=t*r*s-x*a*n,o[3]=t*r*n-x*a*s;break;case"zxy":o[0]=x*r*n-t*a*s,o[1]=t*a*n+x*r*s,o[2]=t*r*s+x*a*n,o[3]=t*r*n-x*a*s;break;case"zyx":o[0]=x*r*n-t*a*s,o[1]=t*a*n+x*r*s,o[2]=t*r*s-x*a*n,o[3]=t*r*n+x*a*s;break;default:throw new Error(`Unknown rotation order: ${e}`)}return o}function nt(m,P){const d=P??new w(4);return d[0]=m[0],d[1]=m[1],d[2]=m[2],d[3]=m[3],d}const et=nt;function It(m,P,d){const e=d??new w(4);return e[0]=m[0]+P[0],e[1]=m[1]+P[1],e[2]=m[2]+P[2],e[3]=m[3]+P[3],e}function ut(m,P,d){const e=d??new w(4);return e[0]=m[0]-P[0],e[1]=m[1]-P[1],e[2]=m[2]-P[2],e[3]=m[3]-P[3],e}const gt=ut;function lt(m,P,d){const e=d??new w(4);return e[0]=m[0]*P,e[1]=m[1]*P,e[2]=m[2]*P,e[3]=m[3]*P,e}const xt=lt;function dt(m,P,d){const e=d??new w(4);return e[0]=m[0]/P,e[1]=m[1]/P,e[2]=m[2]/P,e[3]=m[3]/P,e}function rt(m,P){return m[0]*P[0]+m[1]*P[1]+m[2]*P[2]+m[3]*P[3]}function Lt(m,P,d,e){const c=e??new w(4);return c[0]=m[0]+d*(P[0]-m[0]),c[1]=m[1]+d*(P[1]-m[1]),c[2]=m[2]+d*(P[2]-m[2]),c[3]=m[3]+d*(P[3]-m[3]),c}function ht(m){const P=m[0],d=m[1],e=m[2],c=m[3];return Math.sqrt(P*P+d*d+e*e+c*c)}const yt=ht;function $(m){const P=m[0],d=m[1],e=m[2],c=m[3];return P*P+d*d+e*e+c*c}const G=$;function H(m,P){const d=P??new w(4),e=m[0],c=m[1],o=m[2],f=m[3],p=Math.sqrt(e*e+c*c+o*o+f*f);return p>1e-5?(d[0]=e/p,d[1]=c/p,d[2]=o/p,d[3]=f/p):(d[0]=0,d[1]=0,d[2]=0,d[3]=1),d}function E(m,P){return Math.abs(m[0]-P[0])<W&&Math.abs(m[1]-P[1])<W&&Math.abs(m[2]-P[2])<W&&Math.abs(m[3]-P[3])<W}function C(m,P){return m[0]===P[0]&&m[1]===P[1]&&m[2]===P[2]&&m[3]===P[3]}function Ot(m){const P=m??new w(4);return P[0]=0,P[1]=0,P[2]=0,P[3]=1,P}const K=l.create(),At=l.create(),ft=l.create();function st(m,P,d){const e=d??new w(4),c=l.dot(m,P);return c<-.999999?(l.cross(At,m,K),l.len(K)<1e-6&&l.cross(ft,m,K),l.normalize(K,K),A(K,Math.PI,e),e):c>.999999?(e[0]=0,e[1]=0,e[2]=0,e[3]=1,e):(l.cross(m,P,K),e[0]=K[0],e[1]=K[1],e[2]=K[2],e[3]=1+c,H(e,e))}const pt=new w(4),Ut=new w(4);function mt(m,P,d,e,c,o){const f=o??new w(4);return Y(m,e,c,pt),Y(P,d,c,Ut),Y(pt,Ut,2*c*(1-c),f),f}return{create:z,fromValues:D,set:M,fromAxisAngle:A,toAxisAngle:b,angle:O,multiply:B,mul:V,rotateX:j,rotateY:q,rotateZ:N,slerp:Y,inverse:tt,conjugate:J,fromMat:ot,fromEuler:Z,copy:nt,clone:et,add:It,subtract:ut,sub:gt,mulScalar:lt,scale:xt,divScalar:dt,dot:rt,lerp:Lt,length:ht,len:yt,lengthSq:$,lenSq:G,normalize:H,equalsApproximately:E,equals:C,identity:Ot,rotationTo:st,sqlerp:mt}}const oe=new Map;function xe(w){let l=oe.get(w);return l||(l=ge(w),oe.set(w,l)),l}function ye(w){function l(d,e,c,o){const f=new w(4);return d!==void 0&&(f[0]=d,e!==void 0&&(f[1]=e,c!==void 0&&(f[2]=c,o!==void 0&&(f[3]=o)))),f}const z=l;function D(d,e,c,o,f){const p=f??new w(4);return p[0]=d,p[1]=e,p[2]=c,p[3]=o,p}function M(d,e){const c=e??new w(4);return c[0]=Math.ceil(d[0]),c[1]=Math.ceil(d[1]),c[2]=Math.ceil(d[2]),c[3]=Math.ceil(d[3]),c}function A(d,e){const c=e??new w(4);return c[0]=Math.floor(d[0]),c[1]=Math.floor(d[1]),c[2]=Math.floor(d[2]),c[3]=Math.floor(d[3]),c}function b(d,e){const c=e??new w(4);return c[0]=Math.round(d[0]),c[1]=Math.round(d[1]),c[2]=Math.round(d[2]),c[3]=Math.round(d[3]),c}function O(d,e=0,c=1,o){const f=o??new w(4);return f[0]=Math.min(c,Math.max(e,d[0])),f[1]=Math.min(c,Math.max(e,d[1])),f[2]=Math.min(c,Math.max(e,d[2])),f[3]=Math.min(c,Math.max(e,d[3])),f}function B(d,e,c){const o=c??new w(4);return o[0]=d[0]+e[0],o[1]=d[1]+e[1],o[2]=d[2]+e[2],o[3]=d[3]+e[3],o}function V(d,e,c,o){const f=o??new w(4);return f[0]=d[0]+e[0]*c,f[1]=d[1]+e[1]*c,f[2]=d[2]+e[2]*c,f[3]=d[3]+e[3]*c,f}function j(d,e,c){const o=c??new w(4);return o[0]=d[0]-e[0],o[1]=d[1]-e[1],o[2]=d[2]-e[2],o[3]=d[3]-e[3],o}const q=j;function N(d,e){return Math.abs(d[0]-e[0])<W&&Math.abs(d[1]-e[1])<W&&Math.abs(d[2]-e[2])<W&&Math.abs(d[3]-e[3])<W}function Y(d,e){return d[0]===e[0]&&d[1]===e[1]&&d[2]===e[2]&&d[3]===e[3]}function tt(d,e,c,o){const f=o??new w(4);return f[0]=d[0]+c*(e[0]-d[0]),f[1]=d[1]+c*(e[1]-d[1]),f[2]=d[2]+c*(e[2]-d[2]),f[3]=d[3]+c*(e[3]-d[3]),f}function J(d,e,c,o){const f=o??new w(4);return f[0]=d[0]+c[0]*(e[0]-d[0]),f[1]=d[1]+c[1]*(e[1]-d[1]),f[2]=d[2]+c[2]*(e[2]-d[2]),f[3]=d[3]+c[3]*(e[3]-d[3]),f}function ot(d,e,c){const o=c??new w(4);return o[0]=Math.max(d[0],e[0]),o[1]=Math.max(d[1],e[1]),o[2]=Math.max(d[2],e[2]),o[3]=Math.max(d[3],e[3]),o}function Z(d,e,c){const o=c??new w(4);return o[0]=Math.min(d[0],e[0]),o[1]=Math.min(d[1],e[1]),o[2]=Math.min(d[2],e[2]),o[3]=Math.min(d[3],e[3]),o}function nt(d,e,c){const o=c??new w(4);return o[0]=d[0]*e,o[1]=d[1]*e,o[2]=d[2]*e,o[3]=d[3]*e,o}const et=nt;function It(d,e,c){const o=c??new w(4);return o[0]=d[0]/e,o[1]=d[1]/e,o[2]=d[2]/e,o[3]=d[3]/e,o}function ut(d,e){const c=e??new w(4);return c[0]=1/d[0],c[1]=1/d[1],c[2]=1/d[2],c[3]=1/d[3],c}const gt=ut;function lt(d,e){return d[0]*e[0]+d[1]*e[1]+d[2]*e[2]+d[3]*e[3]}function xt(d){const e=d[0],c=d[1],o=d[2],f=d[3];return Math.sqrt(e*e+c*c+o*o+f*f)}const dt=xt;function rt(d){const e=d[0],c=d[1],o=d[2],f=d[3];return e*e+c*c+o*o+f*f}const Lt=rt;function ht(d,e){const c=d[0]-e[0],o=d[1]-e[1],f=d[2]-e[2],p=d[3]-e[3];return Math.sqrt(c*c+o*o+f*f+p*p)}const yt=ht;function $(d,e){const c=d[0]-e[0],o=d[1]-e[1],f=d[2]-e[2],p=d[3]-e[3];return c*c+o*o+f*f+p*p}const G=$;function H(d,e){const c=e??new w(4),o=d[0],f=d[1],p=d[2],g=d[3],x=Math.sqrt(o*o+f*f+p*p+g*g);return x>1e-5?(c[0]=o/x,c[1]=f/x,c[2]=p/x,c[3]=g/x):(c[0]=0,c[1]=0,c[2]=0,c[3]=0),c}function E(d,e){const c=e??new w(4);return c[0]=-d[0],c[1]=-d[1],c[2]=-d[2],c[3]=-d[3],c}function C(d,e){const c=e??new w(4);return c[0]=d[0],c[1]=d[1],c[2]=d[2],c[3]=d[3],c}const Ot=C;function K(d,e,c){const o=c??new w(4);return o[0]=d[0]*e[0],o[1]=d[1]*e[1],o[2]=d[2]*e[2],o[3]=d[3]*e[3],o}const At=K;function ft(d,e,c){const o=c??new w(4);return o[0]=d[0]/e[0],o[1]=d[1]/e[1],o[2]=d[2]/e[2],o[3]=d[3]/e[3],o}const st=ft;function pt(d){const e=d??new w(4);return e[0]=0,e[1]=0,e[2]=0,e[3]=0,e}function Ut(d,e,c){const o=c??new w(4),f=d[0],p=d[1],g=d[2],x=d[3];return o[0]=e[0]*f+e[4]*p+e[8]*g+e[12]*x,o[1]=e[1]*f+e[5]*p+e[9]*g+e[13]*x,o[2]=e[2]*f+e[6]*p+e[10]*g+e[14]*x,o[3]=e[3]*f+e[7]*p+e[11]*g+e[15]*x,o}function mt(d,e,c){const o=c??new w(4);return H(d,o),nt(o,e,o)}function m(d,e,c){const o=c??new w(4);return xt(d)>e?mt(d,e,o):C(d,o)}function P(d,e,c){const o=c??new w(4);return tt(d,e,.5,o)}return{create:l,fromValues:z,set:D,ceil:M,floor:A,round:b,clamp:O,add:B,addScaled:V,subtract:j,sub:q,equalsApproximately:N,equals:Y,lerp:tt,lerpV:J,max:ot,min:Z,mulScalar:nt,scale:et,divScalar:It,inverse:ut,invert:gt,dot:lt,length:xt,len:dt,lengthSq:rt,lenSq:Lt,distance:ht,dist:yt,distanceSq:$,distSq:G,normalize:H,negate:E,copy:C,clone:Ot,multiply:K,mul:At,divide:ft,div:st,zero:pt,transformMat4:Ut,setLength:mt,truncate:m,midpoint:P}}const ie=new Map;function me(w){let l=ie.get(w);return l||(l=ye(w),ie.set(w,l)),l}function Qt(w,l,z,D,M,A){return{mat3:he(w),mat4:we(l),quat:xe(z),vec2:ce(D),vec3:$t(M),vec4:me(A)}}const{mat4:qt,vec3:Zt}=Qt(Float32Array,Float32Array,Float32Array,Float32Array,Float32Array,Float32Array);Qt(Float64Array,Float64Array,Float64Array,Float64Array,Float64Array,Float64Array);Qt(ue,Array,Array,Array,Array,Array);class ve{constructor(l,z,D,M,A,b,O,B){this.device=l,this.format=z,this.uniformBuffer=D,this.tileTexture=M,this.tileSampler=A,this.lightUniformBuffer=b,this.sphereUniformBuffer=O,this.shadowUniformBuffer=B,this.createGeometry(),this.createPipeline()}createGeometry(){function l(b){return[(b&1)*2-1,(b&2)-1,(b&4)/2-1]}const z=[[0,4,2,6,-1,0,0],[1,3,5,7,1,0,0],[2,6,3,7,0,1,0],[0,2,1,3,0,0,-1],[4,5,6,7,0,0,1]],D=[],M=[];let A=0;for(const b of z){const O=A;for(let B=0;B<4;B++){const V=b[B],j=l(V);D.push(...j),A++}M.push(O+0,O+1,O+2),M.push(O+2,O+1,O+3)}this.vertexCount=M.length,this.positionBuffer=this.device.createBuffer({label:"Pool Vertex Buffer",size:D.length*4,usage:GPUBufferUsage.VERTEX,mappedAtCreation:!0}),new Float32Array(this.positionBuffer.getMappedRange()).set(D),this.positionBuffer.unmap(),this.indexBuffer=this.device.createBuffer({label:"Pool Index Buffer",size:M.length*4,usage:GPUBufferUsage.INDEX,mappedAtCreation:!0}),new Uint32Array(this.indexBuffer.getMappedRange()).set(M),this.indexBuffer.unmap()}createPipeline(){const l=this.device.createShaderModule({label:"Pool Shader",code:`
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
      `});this.pipeline=this.device.createRenderPipeline({label:"Pool Pipeline",layout:"auto",vertex:{module:l,entryPoint:"vs_main",buffers:[{arrayStride:12,attributes:[{shaderLocation:0,offset:0,format:"float32x3"}]}]},fragment:{module:l,entryPoint:"fs_main",targets:[{format:this.format}]},primitive:{topology:"triangle-list",cullMode:"back"},depthStencil:{depthWriteEnabled:!0,depthCompare:"less",format:"depth24plus"}})}render(l,z,D,M){const A=this.device.createBindGroup({layout:this.pipeline.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:this.uniformBuffer}},{binding:1,resource:this.tileSampler},{binding:2,resource:this.tileTexture.createView()},{binding:3,resource:{buffer:this.lightUniformBuffer}},{binding:4,resource:{buffer:this.sphereUniformBuffer}},{binding:5,resource:D},{binding:6,resource:z.createView()},{binding:7,resource:M.createView()},{binding:8,resource:{buffer:this.shadowUniformBuffer}}]});l.setPipeline(this.pipeline),l.setBindGroup(0,A),l.setVertexBuffer(0,this.positionBuffer),l.setIndexBuffer(this.indexBuffer,"uint32"),l.drawIndexed(this.vertexCount)}}class Me{constructor(l,z,D,M,A){this.device=l,this.format=z,this.commonUniformBuffer=D,this.sphereUniformBuffer=A,this.lightUniformBuffer=M,this.center=[0,0,0],this.radius=1,this.createGeometry(),this.createPipeline()}update(l,z){this.center=l,this.radius=z;const D=new Float32Array(4);D.set(this.center,0),D[3]=this.radius,this.device.queue.writeBuffer(this.sphereUniformBuffer,0,D)}createGeometry(){class z{constructor(){this.unique=[],this.map=new Map}add(V){const j=V.join(",");return this.map.has(j)||(this.map.set(j,this.unique.length),this.unique.push(V)),this.map.get(j)}}function D(B){return[(B&1)*2-1,(B&2)-1,(B&4)/2-1]}function M(B){return B+(B-B*B)/2}const A=new z,b=[];for(let B=0;B<8;B++){const V=D(B),j=V[0]*V[1]*V[2]>0,q=[];for(let N=0;N<=10;N++)for(let Y=0;N+Y<=10;Y++){const tt=N/10,J=Y/10,ot=(10-N-Y)/10,Z=[M(tt),M(J),M(ot)],nt=Math.sqrt(Z[0]*Z[0]+Z[1]*Z[1]+Z[2]*Z[2]),et=[Z[0]/nt*V[0],Z[1]/nt*V[1],Z[2]/nt*V[2]];q.push(A.add(et))}for(let N=0;N<=10;N++)if(N>0)for(let Y=0;N+Y<=10;Y++){const tt=(N-1)*11+(N-1-(N-1)*(N-1))/2+Y,J=N*11+(N-N*N)/2+Y;j?b.push(q[tt],q[J],q[tt+1]):b.push(q[tt],q[tt+1],q[J]),N+Y<10&&(j?b.push(q[J],q[J+1],q[tt+1]):b.push(q[J],q[tt+1],q[J+1]))}}this.vertexCount=b.length;const O=[];for(const B of A.unique)O.push(...B);this.positionBuffer=this.device.createBuffer({label:"Sphere Vertex Buffer",size:O.length*4,usage:GPUBufferUsage.VERTEX,mappedAtCreation:!0}),new Float32Array(this.positionBuffer.getMappedRange()).set(O),this.positionBuffer.unmap(),this.indexBuffer=this.device.createBuffer({label:"Sphere Index Buffer",size:b.length*4,usage:GPUBufferUsage.INDEX,mappedAtCreation:!0}),new Uint32Array(this.indexBuffer.getMappedRange()).set(b),this.indexBuffer.unmap()}createPipeline(){const l=this.device.createShaderModule({label:"Sphere Shader",code:`
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
      `});this.pipeline=this.device.createRenderPipeline({label:"Sphere Pipeline",layout:"auto",vertex:{module:l,entryPoint:"vs_main",buffers:[{arrayStride:12,attributes:[{shaderLocation:0,offset:0,format:"float32x3"}]}]},fragment:{module:l,entryPoint:"fs_main",targets:[{format:this.format}]},primitive:{topology:"triangle-list",cullMode:"back"},depthStencil:{depthWriteEnabled:!0,depthCompare:"less",format:"depth24plus"}})}render(l,z,D,M){const A=this.device.createBindGroup({layout:this.pipeline.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:this.commonUniformBuffer}},{binding:1,resource:{buffer:this.sphereUniformBuffer}},{binding:2,resource:{buffer:this.lightUniformBuffer}},{binding:3,resource:D},{binding:4,resource:z.createView()},{binding:5,resource:M.createView()}]});l.setPipeline(this.pipeline),l.setBindGroup(0,A),l.setVertexBuffer(0,this.positionBuffer),l.setIndexBuffer(this.indexBuffer,"uint32"),l.drawIndexed(this.vertexCount)}}class Se{constructor(l,z,D,M,A,b,O,B,V,j,q){this.device=l,this.width=z,this.height=D,this.commonUniformBuffer=M,this.lightUniformBuffer=A,this.sphereUniformBuffer=b,this.shadowUniformBuffer=O,this.tileTexture=B,this.tileSampler=V,this.skyTexture=j,this.skySampler=q,this.textureA=this.createTexture(),this.textureB=this.createTexture(),this.causticsTexture=this.device.createTexture({size:[1024,1024],format:"rgba8unorm",usage:GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.RENDER_ATTACHMENT}),this.sampler=l.createSampler({magFilter:"linear",minFilter:"linear",addressModeU:"clamp-to-edge",addressModeV:"clamp-to-edge"}),this.createPipelines(),this.createSurfaceMesh(),this.createSurfacePipeline(),this.createCausticsPipeline()}createTexture(){const l=this.device.features.has("float32-filterable")?"rgba32float":"rgba16float";return this.device.createTexture({size:[this.width,this.height],format:l,usage:GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.RENDER_ATTACHMENT})}createPipelines(){const l=this.device.features.has("float32-filterable")?"rgba32float":"rgba16float",z=`
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
    `,32,l)}createPipeline(l,z,D,M,A){const b=this.device.createShaderModule({label:l+" Module",code:z+D});return{pipeline:this.device.createRenderPipeline({label:l+" Pipeline",layout:"auto",vertex:{module:b,entryPoint:"vs_main"},fragment:{module:b,entryPoint:"fs_main",targets:[{format:A}]},primitive:{topology:"triangle-list"}}),uniformSize:M,uniformBuffer:this.device.createBuffer({size:M,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST})}}runPipeline(l,z){this.device.queue.writeBuffer(l.uniformBuffer,0,z);const D=this.device.createBindGroup({layout:l.pipeline.getBindGroupLayout(0),entries:[{binding:0,resource:this.textureA.createView()},{binding:1,resource:this.sampler},{binding:2,resource:{buffer:l.uniformBuffer}}]}),M=this.device.createCommandEncoder(),A=M.beginRenderPass({colorAttachments:[{view:this.textureB.createView(),loadOp:"clear",storeOp:"store",clearValue:{r:0,g:0,b:0,a:0}}]});A.setPipeline(l.pipeline),A.setBindGroup(0,D),A.draw(6),A.end(),this.device.queue.submit([M.finish()]);const b=this.textureA;this.textureA=this.textureB,this.textureB=b}addDrop(l,z,D,M){const A=new Float32Array(4);A[0]=l,A[1]=z,A[2]=D,A[3]=M,this.runPipeline(this.dropPipeline,A)}stepSimulation(){const l=new Float32Array(2);l[0]=1/this.width,l[1]=1/this.height,this.runPipeline(this.updatePipeline,l)}updateNormals(){const l=new Float32Array(2);l[0]=1/this.width,l[1]=1/this.height,this.runPipeline(this.normalPipeline,l)}moveSphere(l,z,D){const M=new Float32Array(8);M[0]=l[0],M[1]=l[1],M[2]=l[2],M[3]=D,M[4]=z[0],M[5]=z[1],M[6]=z[2],M[7]=0,this.runPipeline(this.spherePipeline,M)}createSurfaceMesh(){const z=[],D=[];for(let M=0;M<=200;M++){const A=M/200;for(let b=0;b<=200;b++){const O=b/200;z.push(2*O-1,2*A-1,0)}}for(let M=0;M<200;M++)for(let A=0;A<200;A++){const b=A+M*201;D.push(b,b+1,b+200+1),D.push(b+200+1,b+1,b+200+2)}this.vertexCount=D.length,this.positionBuffer=this.device.createBuffer({label:"Water Surface Vertices",size:z.length*4,usage:GPUBufferUsage.VERTEX,mappedAtCreation:!0}),new Float32Array(this.positionBuffer.getMappedRange()).set(z),this.positionBuffer.unmap(),this.indexBuffer=this.device.createBuffer({label:"Water Surface Indices",size:D.length*4,usage:GPUBufferUsage.INDEX,mappedAtCreation:!0}),new Uint32Array(this.indexBuffer.getMappedRange()).set(D),this.indexBuffer.unmap()}createSurfacePipeline(){const l=M=>`
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
        `;this.surfaceBindGroupLayout=this.device.createBindGroupLayout({label:"Water Surface BindGroupLayout",entries:[{binding:0,visibility:GPUShaderStage.VERTEX|GPUShaderStage.FRAGMENT,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.FRAGMENT,buffer:{type:"uniform"}},{binding:2,visibility:GPUShaderStage.FRAGMENT,buffer:{type:"uniform"}},{binding:3,visibility:GPUShaderStage.FRAGMENT,sampler:{}},{binding:4,visibility:GPUShaderStage.FRAGMENT,texture:{}},{binding:5,visibility:GPUShaderStage.VERTEX|GPUShaderStage.FRAGMENT,sampler:{}},{binding:6,visibility:GPUShaderStage.VERTEX|GPUShaderStage.FRAGMENT,texture:{}},{binding:7,visibility:GPUShaderStage.FRAGMENT,sampler:{}},{binding:8,visibility:GPUShaderStage.FRAGMENT,texture:{viewDimension:"cube"}},{binding:9,visibility:GPUShaderStage.FRAGMENT,texture:{}}]});const z=this.device.createPipelineLayout({label:"Water Surface PipelineLayout",bindGroupLayouts:[this.surfaceBindGroupLayout]}),D=(M,A,b)=>{const O=this.device.createShaderModule({label:`${M} Shader`,code:l(A)});return this.device.createRenderPipeline({label:M,layout:z,vertex:{module:O,entryPoint:"vs_main",buffers:[{arrayStride:12,attributes:[{shaderLocation:0,offset:0,format:"float32x3"}]}]},fragment:{module:O,entryPoint:"fs_main",targets:[{format:navigator.gpu.getPreferredCanvasFormat()}]},primitive:{topology:"triangle-list",cullMode:b},depthStencil:{depthWriteEnabled:!0,depthCompare:"less",format:"depth24plus"}})};this.surfacePipelineAbove=D("Water Surface Above Pipeline",!1,"front"),this.surfacePipelineUnder=D("Water Surface Under Pipeline",!0,"back"),this.surfaceBindGroup=this.device.createBindGroup({layout:this.surfaceBindGroupLayout,entries:[{binding:0,resource:{buffer:this.commonUniformBuffer}},{binding:1,resource:{buffer:this.lightUniformBuffer}},{binding:2,resource:{buffer:this.sphereUniformBuffer}},{binding:3,resource:this.tileSampler},{binding:4,resource:this.tileTexture.createView()},{binding:5,resource:this.sampler},{binding:6,resource:this.textureA.createView()},{binding:7,resource:this.skySampler},{binding:8,resource:this.skyTexture.createView({dimension:"cube"})},{binding:9,resource:this.causticsTexture.createView()}]})}renderSurface(l){const z=this.device.createBindGroup({layout:this.surfaceBindGroupLayout,entries:[{binding:0,resource:{buffer:this.commonUniformBuffer}},{binding:1,resource:{buffer:this.lightUniformBuffer}},{binding:2,resource:{buffer:this.sphereUniformBuffer}},{binding:3,resource:this.tileSampler},{binding:4,resource:this.tileTexture.createView()},{binding:5,resource:this.sampler},{binding:6,resource:this.textureA.createView()},{binding:7,resource:this.skySampler},{binding:8,resource:this.skyTexture.createView({dimension:"cube"})},{binding:9,resource:this.causticsTexture.createView()}]});l.setPipeline(this.surfacePipelineAbove),l.setBindGroup(0,z),l.setVertexBuffer(0,this.positionBuffer),l.setIndexBuffer(this.indexBuffer,"uint32"),l.drawIndexed(this.vertexCount),l.setPipeline(this.surfacePipelineUnder),l.setBindGroup(0,z),l.drawIndexed(this.vertexCount)}createCausticsPipeline(){const l=this.device.createShaderModule({label:"Caustics Shader",code:`
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
        `});this.causticsPipeline=this.device.createRenderPipeline({label:"Caustics Pipeline",layout:"auto",vertex:{module:l,entryPoint:"vs_main",buffers:[{arrayStride:12,attributes:[{shaderLocation:0,offset:0,format:"float32x3"}]}]},fragment:{module:l,entryPoint:"fs_main",targets:[{format:"rgba8unorm",blend:{color:{operation:"add",srcFactor:"one",dstFactor:"one"},alpha:{operation:"add",srcFactor:"one",dstFactor:"one"}}}]},primitive:{topology:"triangle-list"}})}updateCaustics(){const l=this.device.createBindGroup({layout:this.causticsPipeline.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:this.lightUniformBuffer}},{binding:1,resource:{buffer:this.sphereUniformBuffer}},{binding:2,resource:this.sampler},{binding:3,resource:this.textureA.createView()},{binding:4,resource:{buffer:this.shadowUniformBuffer}}]}),z=this.device.createCommandEncoder(),D=z.beginRenderPass({colorAttachments:[{view:this.causticsTexture.createView(),loadOp:"clear",storeOp:"store",clearValue:{r:0,g:0,b:0,a:0}}]});D.setPipeline(this.causticsPipeline),D.setBindGroup(0,l),D.setVertexBuffer(0,this.positionBuffer),D.setIndexBuffer(this.indexBuffer,"uint32"),D.drawIndexed(this.vertexCount),D.end(),this.device.queue.submit([z.finish()])}}class X{constructor(l,z,D){this.x=l||0,this.y=z||0,this.z=D||0}negative(){return new X(-this.x,-this.y,-this.z)}add(l){return l instanceof X?new X(this.x+l.x,this.y+l.y,this.z+l.z):new X(this.x+l,this.y+l,this.z+l)}subtract(l){return l instanceof X?new X(this.x-l.x,this.y-l.y,this.z-l.z):new X(this.x-l,this.y-l,this.z-l)}multiply(l){return l instanceof X?new X(this.x*l.x,this.y*l.y,this.z*l.z):new X(this.x*l,this.y*l,this.z*l)}divide(l){return l instanceof X?new X(this.x/l.x,this.y/l.y,this.z/l.z):new X(this.x/l,this.y/l,this.z/l)}equals(l){return this.x==l.x&&this.y==l.y&&this.z==l.z}dot(l){return this.x*l.x+this.y*l.y+this.z*l.z}cross(l){return new X(this.y*l.z-this.z*l.y,this.z*l.x-this.x*l.z,this.x*l.y-this.y*l.x)}length(){return Math.sqrt(this.dot(this))}unit(){return this.divide(this.length())}min(){return Math.min(Math.min(this.x,this.y),this.z)}max(){return Math.max(Math.max(this.x,this.y),this.z)}toAngles(){return{theta:Math.atan2(this.z,this.x),phi:Math.asin(this.y/this.length())}}angleTo(l){return Math.acos(this.dot(l)/(this.length()*l.length()))}toArray(l){return[this.x,this.y,this.z].slice(0,l||3)}clone(){return new X(this.x,this.y,this.z)}init(l,z,D){return this.x=l,this.y=z,this.z=D,this}static fromArray(l){return new X(l[0],l[1],l[2])}static lerp(l,z,D){return l.add(z.subtract(l).multiply(D))}static min(l,z){return new X(Math.min(l.x,z.x),Math.min(l.y,z.y),Math.min(l.z,z.z))}static max(l,z){return new X(Math.max(l.x,z.x),Math.max(l.y,z.y),Math.max(l.z,z.z))}static fromAngles(l,z){return new X(Math.cos(z)*Math.cos(l),Math.sin(z),Math.cos(z)*Math.sin(l))}}class kt{constructor(l,z,D){this.t=arguments.length?l:Number.MAX_VALUE,this.hit=z,this.normal=D}mergeWith(l){l.t>0&&l.t<this.t&&(this.t=l.t,this.hit=l.hit,this.normal=l.normal)}}class Yt{constructor(l,z,D){this.viewport=D;const M=qt.invert(l),A=Zt.transformMat4([0,0,0],M);this.eye=new X(A[0],A[1],A[2]),this.invViewProj=qt.invert(qt.multiply(z,l));const b=D[0],O=b+D[2],B=D[1],V=B+D[3];this.ray00=this.unProject(b,B,1).subtract(this.eye),this.ray10=this.unProject(O,B,1).subtract(this.eye),this.ray01=this.unProject(b,V,1).subtract(this.eye),this.ray11=this.unProject(O,V,1).subtract(this.eye)}unProject(l,z,D){const M=this.viewport,A=(l-M[0])/M[2]*2-1,b=(1-(z-M[1])/M[3])*2-1,B=[A,b,D],V=Zt.transformMat4(B,this.invViewProj);return new X(V[0],V[1],V[2])}getRayForPixel(l,z){const D=(l-this.viewport[0])/this.viewport[2],M=(z-this.viewport[1])/this.viewport[3],A=X.lerp(this.ray00,this.ray10,D),b=X.lerp(this.ray01,this.ray11,D);return X.lerp(A,b,M).unit()}static hitTestBox(l,z,D,M){var A=D.subtract(l).divide(z),b=M.subtract(l).divide(z),O=X.min(A,b),B=X.max(A,b),V=O.max(),j=B.min();if(V>0&&V<j){var q=1e-6,N=l.add(z.multiply(V));return D=D.add(q),M=M.subtract(q),new kt(V,N,new X((N.x>M.x)-(N.x<D.x),(N.y>M.y)-(N.y<D.y),(N.z>M.z)-(N.z<D.z)))}return null}static hitTestSphere(l,z,D,M){var A=l.subtract(D),b=z.dot(z),O=2*z.dot(A),B=A.dot(A)-M*M,V=O*O-4*b*B;if(V>0){var j=(-O-Math.sqrt(V))/(2*b),q=l.add(z.multiply(j));return new kt(j,q,q.subtract(D).divide(M))}return null}static hitTestTriangle(l,z,D,M,A){var b=M.subtract(D),O=A.subtract(D),B=b.cross(O).unit(),V=B.dot(D.subtract(l))/B.dot(z);if(V>0){var j=l.add(z.multiply(V)),q=j.subtract(D),N=O.dot(O),Y=O.dot(b),tt=O.dot(q),J=b.dot(b),ot=b.dot(q),Z=N*J-Y*Y,nt=(J*tt-Y*ot)/Z,et=(N*ot-Y*tt)/Z;if(nt>=0&&et>=0&&nt+et<=1)return new kt(V,j,B)}return null}}class De{constructor(l){this.device=l,this.texture=null}async load(l){const z=["xpos","xneg","ypos","yneg","zpos","zneg"],D=await Promise.all(z.map(b=>fetch(l[b]).then(O=>O.blob()).then(O=>createImageBitmap(O)))),M=D[0].width,A=D[0].height;this.texture=this.device.createTexture({size:[M,A,6],format:"rgba8unorm",usage:GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_DST|GPUTextureUsage.RENDER_ATTACHMENT,viewFormats:["rgba8unorm"]});for(let b=0;b<6;b++)this.device.queue.copyExternalImageToTexture({source:D[b],flipY:!0},{texture:this.texture,origin:[0,0,b]},{width:M,height:A});return this.texture}}async function Pe(){const w=navigator.gpu;if(!w){document.getElementById("loading").innerHTML="WebGPU not supported.";return}const l=await w.requestAdapter();if(!l){document.getElementById("loading").innerHTML="No WebGPU adapter found.";return}const z=[];l.features.has("float32-filterable")&&z.push("float32-filterable");const D=await l.requestDevice({requiredFeatures:z}),M=document.querySelector("canvas"),A=M.getContext("webgpu"),b=navigator.gpu.getPreferredCanvasFormat();A.configure({device:D,format:b,alphaMode:"premultiplied"});const O=document.getElementById("help"),B=window.devicePixelRatio||1;let V=performance.now();async function j(r){const n=await(await fetch(r)).blob(),i=await createImageBitmap(n),h=D.createTexture({label:r,size:[i.width,i.height],format:"rgba8unorm",usage:GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_DST|GPUTextureUsage.RENDER_ATTACHMENT});return D.queue.copyExternalImageToTexture({source:i,flipY:!0},{texture:h},{width:i.width,height:i.height}),h}const q="/webgpu-water/",N=await j(`${q}tiles.jpg`),Y=D.createSampler({magFilter:"linear",minFilter:"linear",addressModeU:"repeat",addressModeV:"repeat"}),J=await new De(D).load({xpos:`${q}xpos.jpg`,xneg:`${q}xneg.jpg`,ypos:`${q}ypos.jpg`,yneg:`${q}yneg.jpg`,zpos:`${q}zpos.jpg`,zneg:`${q}zneg.jpg`}),ot=D.createSampler({magFilter:"linear",minFilter:"linear"});let Z=-25,nt=-200.5;function et(){const r=M.width/M.height,s=qt.perspective(45*Math.PI/180,r,.01,100),n=qt.identity();return qt.translate(n,[0,0,-4],n),qt.rotateX(n,-Z*Math.PI/180,n),qt.rotateY(n,-nt*Math.PI/180,n),qt.translate(n,[0,.5,0],n),{projectionMatrix:s,viewMatrix:n}}const ut=D.createBuffer({size:80,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST});let gt=new X(2,2,-1).unit();const lt=D.createBuffer({size:16,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST});function xt(){D.queue.writeBuffer(lt,0,new Float32Array([...gt.toArray(),0]))}xt();const dt=D.createBuffer({size:16,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),rt=D.createBuffer({size:16,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),Lt=new Float32Array([1,1,1,0]);D.queue.writeBuffer(rt,0,Lt);const ht=new ve(D,b,ut,N,Y,lt,dt,rt),yt=new Me(D,b,ut,lt,dt),$=new Se(D,256,256,ut,lt,dt,rt,N,Y,J,ot);let G=new X(-.4,-.75,.2),H=G.clone(),E=.25,C=new X(0,0,0),Ot=new X(0,-4,0),K=!1,At=!1;yt.update(G.toArray(),E);for(let r=0;r<20;r++)$.addDrop(Math.random()*2-1,Math.random()*2-1,.03,r&1?.01:-.01);const ft={};window.addEventListener("keydown",r=>{const s=r.key.toUpperCase();ft[s]=!0,s==="G"?K=!K:s===" "&&(At=!At)}),window.addEventListener("keyup",r=>{ft[r.key.toUpperCase()]=!1});let st=-1;const pt=0,Ut=1,mt=2;let m,P,d,e;function c(r,s){m=r,P=s;const{projectionMatrix:n,viewMatrix:i}=et(),h=[0,0,M.width,M.height],u=new Yt(i,n,h),y=u.getRayForPixel(r*B,s*B),v=Yt.hitTestSphere(u.eye,y,G,E);if(v){st=mt,d=v.hit,e=u.getRayForPixel(M.width/2,M.height/2).negative();return}const S=-u.eye.y/y.y,T=u.eye.add(y.multiply(S));Math.abs(T.x)<1&&Math.abs(T.z)<1?(st=pt,$.addDrop(T.x,T.z,.03,.01)):st=Ut}function o(r,s){if(st===Ut)nt-=r-m,Z-=s-P,Z=Math.max(-89.999,Math.min(89.999,Z));else if(st===mt){const{projectionMatrix:n,viewMatrix:i}=et(),h=[0,0,M.width,M.height],u=new Yt(i,n,h),y=u.getRayForPixel(r*B,s*B),v=-e.dot(u.eye.subtract(d))/e.dot(y),S=u.eye.add(y.multiply(v));G=G.add(S.subtract(d)),G.x=Math.max(E-1,Math.min(1-E,G.x)),G.y=Math.max(E-1,Math.min(10,G.y)),G.z=Math.max(E-1,Math.min(1-E,G.z)),yt.update(G.toArray(),E),d=S}else if(st===pt){const{projectionMatrix:n,viewMatrix:i}=et(),h=[0,0,M.width,M.height],u=new Yt(i,n,h),y=u.getRayForPixel(r*B,s*B),v=-u.eye.y/y.y,S=u.eye.add(y.multiply(v));Math.abs(S.x)<1&&Math.abs(S.z)<1&&$.addDrop(S.x,S.z,.03,.01)}m=r,P=s}function f(){st=-1}M.addEventListener("mousedown",r=>{r.preventDefault(),c(r.offsetX,r.offsetY)}),window.addEventListener("mousemove",r=>{if(st!==-1){const s=M.getBoundingClientRect(),n=r.clientX-s.left,i=r.clientY-s.top;o(n,i)}}),window.addEventListener("mouseup",()=>{f()});let p;function g(){const r=window.innerWidth-O.clientWidth-20,s=window.innerHeight;M.width=Math.floor(r*B),M.height=Math.floor(s*B),M.style.width=r+"px",M.style.height=s+"px",p&&p.destroy(),p=D.createTexture({size:[M.width,M.height],format:"depth24plus",usage:GPUTextureUsage.RENDER_ATTACHMENT}),t()}window.addEventListener("resize",g),document.getElementById("loading").innerHTML="",g();function x(){const{projectionMatrix:r,viewMatrix:s}=et(),n=qt.multiply(r,s),i=qt.invert(s),h=Zt.transformMat4([0,0,0],i),u=new Float32Array(20);u.set(n,0),u.set(h,16),D.queue.writeBuffer(ut,0,u)}function t(){const r=performance.now();let s=(r-V)/1e3;if(V=r,s>1&&(s=1),ft.L&&(gt=X.fromAngles((90-nt)*Math.PI/180,-Z*Math.PI/180),xt()),!At){if(st===mt)C=new X(0,0,0);else if(K){let h=Math.max(0,Math.min(1,(E-G.y)/(2*E)));C=C.add(Ot.multiply(s-1.1*s*h)),C=C.subtract(C.unit().multiply(h*s*C.dot(C))),G=G.add(C.multiply(s)),G.y<E-1&&(G.y=E-1,C.y=Math.abs(C.y)*.7),yt.update(G.toArray(),E)}$.moveSphere(H.toArray(),G.toArray(),E),H=G.clone(),$.stepSimulation(),$.stepSimulation(),$.updateNormals(),$.updateCaustics()}x();const n=D.createCommandEncoder(),i=n.beginRenderPass({colorAttachments:[{view:A.getCurrentTexture().createView(),clearValue:{r:0,g:0,b:0,a:1},loadOp:"clear",storeOp:"store"}],depthStencilAttachment:{view:p.createView(),depthClearValue:1,depthLoadOp:"clear",depthStoreOp:"store"}});ht.render(i,$.textureA,$.sampler,$.causticsTexture),yt.render(i,$.textureA,$.sampler,$.causticsTexture),$.renderSurface(i),i.end(),D.queue.submit([n.finish()])}function a(){requestAnimationFrame(a),t()}requestAnimationFrame(a)}Pe();
