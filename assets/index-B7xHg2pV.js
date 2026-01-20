(function(){const w=document.createElement("link").relList;if(w&&w.supports&&w.supports("modulepreload"))return;for(const S of document.querySelectorAll('link[rel="modulepreload"]'))P(S);new MutationObserver(S=>{for(const z of S)if(z.type==="childList")for(const b of z.addedNodes)b.tagName==="LINK"&&b.rel==="modulepreload"&&P(b)}).observe(document,{childList:!0,subtree:!0});function A(S){const z={};return S.integrity&&(z.integrity=S.integrity),S.referrerPolicy&&(z.referrerPolicy=S.referrerPolicy),S.crossOrigin==="use-credentials"?z.credentials="include":S.crossOrigin==="anonymous"?z.credentials="omit":z.credentials="same-origin",z}function P(S){if(S.ep)return;S.ep=!0;const z=A(S);fetch(S.href,z)}})();function ae(g,w){return class extends g{constructor(...A){super(...A),w(this)}}}const ue=ae(Array,g=>g.fill(0));let F=1e-6;function fe(g){function w(p=0,x=0){const h=new g(2);return p!==void 0&&(h[0]=p,x!==void 0&&(h[1]=x)),h}const A=w;function P(p,x,h){const t=h??new g(2);return t[0]=p,t[1]=x,t}function S(p,x){const h=x??new g(2);return h[0]=Math.ceil(p[0]),h[1]=Math.ceil(p[1]),h}function z(p,x){const h=x??new g(2);return h[0]=Math.floor(p[0]),h[1]=Math.floor(p[1]),h}function b(p,x){const h=x??new g(2);return h[0]=Math.round(p[0]),h[1]=Math.round(p[1]),h}function O(p,x=0,h=1,t){const a=t??new g(2);return a[0]=Math.min(h,Math.max(x,p[0])),a[1]=Math.min(h,Math.max(x,p[1])),a}function B(p,x,h){const t=h??new g(2);return t[0]=p[0]+x[0],t[1]=p[1]+x[1],t}function W(p,x,h,t){const a=t??new g(2);return a[0]=p[0]+x[0]*h,a[1]=p[1]+x[1]*h,a}function N(p,x){const h=p[0],t=p[1],a=x[0],r=x[1],o=Math.sqrt(h*h+t*t),n=Math.sqrt(a*a+r*r),i=o*n,d=i&&mt(p,x)/i;return Math.acos(d)}function q(p,x,h){const t=h??new g(2);return t[0]=p[0]-x[0],t[1]=p[1]-x[1],t}const j=q;function K(p,x){return Math.abs(p[0]-x[0])<F&&Math.abs(p[1]-x[1])<F}function tt(p,x){return p[0]===x[0]&&p[1]===x[1]}function C(p,x,h,t){const a=t??new g(2);return a[0]=p[0]+h*(x[0]-p[0]),a[1]=p[1]+h*(x[1]-p[1]),a}function gt(p,x,h,t){const a=t??new g(2);return a[0]=p[0]+h[0]*(x[0]-p[0]),a[1]=p[1]+h[1]*(x[1]-p[1]),a}function J(p,x,h){const t=h??new g(2);return t[0]=Math.max(p[0],x[0]),t[1]=Math.max(p[1],x[1]),t}function nt(p,x,h){const t=h??new g(2);return t[0]=Math.min(p[0],x[0]),t[1]=Math.min(p[1],x[1]),t}function et(p,x,h){const t=h??new g(2);return t[0]=p[0]*x,t[1]=p[1]*x,t}const ht=et;function lt(p,x,h){const t=h??new g(2);return t[0]=p[0]/x,t[1]=p[1]/x,t}function pt(p,x){const h=x??new g(2);return h[0]=1/p[0],h[1]=1/p[1],h}const xt=pt;function yt(p,x,h){const t=h??new g(3),a=p[0]*x[1]-p[1]*x[0];return t[0]=0,t[1]=0,t[2]=a,t}function mt(p,x){return p[0]*x[0]+p[1]*x[1]}function ot(p){const x=p[0],h=p[1];return Math.sqrt(x*x+h*h)}const vt=ot;function $(p){const x=p[0],h=p[1];return x*x+h*h}const H=$;function st(p,x){const h=p[0]-x[0],t=p[1]-x[1];return Math.sqrt(h*h+t*t)}const G=st;function V(p,x){const h=p[0]-x[0],t=p[1]-x[1];return h*h+t*t}const X=V;function it(p,x){const h=x??new g(2),t=p[0],a=p[1],r=Math.sqrt(t*t+a*a);return r>1e-5?(h[0]=t/r,h[1]=a/r):(h[0]=0,h[1]=0),h}function Tt(p,x){const h=x??new g(2);return h[0]=-p[0],h[1]=-p[1],h}function Q(p,x){const h=x??new g(2);return h[0]=p[0],h[1]=p[1],h}const rt=Q;function dt(p,x,h){const t=h??new g(2);return t[0]=p[0]*x[0],t[1]=p[1]*x[1],t}const bt=dt;function ct(p,x,h){const t=h??new g(2);return t[0]=p[0]/x[0],t[1]=p[1]/x[1],t}const Mt=ct;function St(p=1,x){const h=x??new g(2),t=Math.random()*2*Math.PI;return h[0]=Math.cos(t)*p,h[1]=Math.sin(t)*p,h}function y(p){const x=p??new g(2);return x[0]=0,x[1]=0,x}function D(p,x,h){const t=h??new g(2),a=p[0],r=p[1];return t[0]=a*x[0]+r*x[4]+x[12],t[1]=a*x[1]+r*x[5]+x[13],t}function l(p,x,h){const t=h??new g(2),a=p[0],r=p[1];return t[0]=x[0]*a+x[4]*r+x[8],t[1]=x[1]*a+x[5]*r+x[9],t}function e(p,x,h,t){const a=t??new g(2),r=p[0]-x[0],o=p[1]-x[1],n=Math.sin(h),i=Math.cos(h);return a[0]=r*i-o*n+x[0],a[1]=r*n+o*i+x[1],a}function c(p,x,h){const t=h??new g(2);return it(p,t),et(t,x,t)}function s(p,x,h){const t=h??new g(2);return ot(p)>x?c(p,x,t):Q(p,t)}function u(p,x,h){const t=h??new g(2);return C(p,x,.5,t)}return{create:w,fromValues:A,set:P,ceil:S,floor:z,round:b,clamp:O,add:B,addScaled:W,angle:N,subtract:q,sub:j,equalsApproximately:K,equals:tt,lerp:C,lerpV:gt,max:J,min:nt,mulScalar:et,scale:ht,divScalar:lt,inverse:pt,invert:xt,cross:yt,dot:mt,length:ot,len:vt,lengthSq:$,lenSq:H,distance:st,dist:G,distanceSq:V,distSq:X,normalize:it,negate:Tt,copy:Q,clone:rt,multiply:dt,mul:bt,divide:ct,div:Mt,random:St,zero:y,transformMat4:D,transformMat3:l,rotate:e,setLength:c,truncate:s,midpoint:u}}const ee=new Map;function ce(g){let w=ee.get(g);return w||(w=fe(g),ee.set(g,w)),w}function le(g){function w(n,i,d){const f=new g(3);return n!==void 0&&(f[0]=n,i!==void 0&&(f[1]=i,d!==void 0&&(f[2]=d))),f}const A=w;function P(n,i,d,f){const m=f??new g(3);return m[0]=n,m[1]=i,m[2]=d,m}function S(n,i){const d=i??new g(3);return d[0]=Math.ceil(n[0]),d[1]=Math.ceil(n[1]),d[2]=Math.ceil(n[2]),d}function z(n,i){const d=i??new g(3);return d[0]=Math.floor(n[0]),d[1]=Math.floor(n[1]),d[2]=Math.floor(n[2]),d}function b(n,i){const d=i??new g(3);return d[0]=Math.round(n[0]),d[1]=Math.round(n[1]),d[2]=Math.round(n[2]),d}function O(n,i=0,d=1,f){const m=f??new g(3);return m[0]=Math.min(d,Math.max(i,n[0])),m[1]=Math.min(d,Math.max(i,n[1])),m[2]=Math.min(d,Math.max(i,n[2])),m}function B(n,i,d){const f=d??new g(3);return f[0]=n[0]+i[0],f[1]=n[1]+i[1],f[2]=n[2]+i[2],f}function W(n,i,d,f){const m=f??new g(3);return m[0]=n[0]+i[0]*d,m[1]=n[1]+i[1]*d,m[2]=n[2]+i[2]*d,m}function N(n,i){const d=n[0],f=n[1],m=n[2],v=i[0],M=i[1],T=i[2],U=Math.sqrt(d*d+f*f+m*m),R=Math.sqrt(v*v+M*M+T*T),I=U*R,_=I&&mt(n,i)/I;return Math.acos(_)}function q(n,i,d){const f=d??new g(3);return f[0]=n[0]-i[0],f[1]=n[1]-i[1],f[2]=n[2]-i[2],f}const j=q;function K(n,i){return Math.abs(n[0]-i[0])<F&&Math.abs(n[1]-i[1])<F&&Math.abs(n[2]-i[2])<F}function tt(n,i){return n[0]===i[0]&&n[1]===i[1]&&n[2]===i[2]}function C(n,i,d,f){const m=f??new g(3);return m[0]=n[0]+d*(i[0]-n[0]),m[1]=n[1]+d*(i[1]-n[1]),m[2]=n[2]+d*(i[2]-n[2]),m}function gt(n,i,d,f){const m=f??new g(3);return m[0]=n[0]+d[0]*(i[0]-n[0]),m[1]=n[1]+d[1]*(i[1]-n[1]),m[2]=n[2]+d[2]*(i[2]-n[2]),m}function J(n,i,d){const f=d??new g(3);return f[0]=Math.max(n[0],i[0]),f[1]=Math.max(n[1],i[1]),f[2]=Math.max(n[2],i[2]),f}function nt(n,i,d){const f=d??new g(3);return f[0]=Math.min(n[0],i[0]),f[1]=Math.min(n[1],i[1]),f[2]=Math.min(n[2],i[2]),f}function et(n,i,d){const f=d??new g(3);return f[0]=n[0]*i,f[1]=n[1]*i,f[2]=n[2]*i,f}const ht=et;function lt(n,i,d){const f=d??new g(3);return f[0]=n[0]/i,f[1]=n[1]/i,f[2]=n[2]/i,f}function pt(n,i){const d=i??new g(3);return d[0]=1/n[0],d[1]=1/n[1],d[2]=1/n[2],d}const xt=pt;function yt(n,i,d){const f=d??new g(3),m=n[2]*i[0]-n[0]*i[2],v=n[0]*i[1]-n[1]*i[0];return f[0]=n[1]*i[2]-n[2]*i[1],f[1]=m,f[2]=v,f}function mt(n,i){return n[0]*i[0]+n[1]*i[1]+n[2]*i[2]}function ot(n){const i=n[0],d=n[1],f=n[2];return Math.sqrt(i*i+d*d+f*f)}const vt=ot;function $(n){const i=n[0],d=n[1],f=n[2];return i*i+d*d+f*f}const H=$;function st(n,i){const d=n[0]-i[0],f=n[1]-i[1],m=n[2]-i[2];return Math.sqrt(d*d+f*f+m*m)}const G=st;function V(n,i){const d=n[0]-i[0],f=n[1]-i[1],m=n[2]-i[2];return d*d+f*f+m*m}const X=V;function it(n,i){const d=i??new g(3),f=n[0],m=n[1],v=n[2],M=Math.sqrt(f*f+m*m+v*v);return M>1e-5?(d[0]=f/M,d[1]=m/M,d[2]=v/M):(d[0]=0,d[1]=0,d[2]=0),d}function Tt(n,i){const d=i??new g(3);return d[0]=-n[0],d[1]=-n[1],d[2]=-n[2],d}function Q(n,i){const d=i??new g(3);return d[0]=n[0],d[1]=n[1],d[2]=n[2],d}const rt=Q;function dt(n,i,d){const f=d??new g(3);return f[0]=n[0]*i[0],f[1]=n[1]*i[1],f[2]=n[2]*i[2],f}const bt=dt;function ct(n,i,d){const f=d??new g(3);return f[0]=n[0]/i[0],f[1]=n[1]/i[1],f[2]=n[2]/i[2],f}const Mt=ct;function St(n=1,i){const d=i??new g(3),f=Math.random()*2*Math.PI,m=Math.random()*2-1,v=Math.sqrt(1-m*m)*n;return d[0]=Math.cos(f)*v,d[1]=Math.sin(f)*v,d[2]=m*n,d}function y(n){const i=n??new g(3);return i[0]=0,i[1]=0,i[2]=0,i}function D(n,i,d){const f=d??new g(3),m=n[0],v=n[1],M=n[2],T=i[3]*m+i[7]*v+i[11]*M+i[15]||1;return f[0]=(i[0]*m+i[4]*v+i[8]*M+i[12])/T,f[1]=(i[1]*m+i[5]*v+i[9]*M+i[13])/T,f[2]=(i[2]*m+i[6]*v+i[10]*M+i[14])/T,f}function l(n,i,d){const f=d??new g(3),m=n[0],v=n[1],M=n[2];return f[0]=m*i[0]+v*i[4]+M*i[8],f[1]=m*i[1]+v*i[5]+M*i[9],f[2]=m*i[2]+v*i[6]+M*i[10],f}function e(n,i,d){const f=d??new g(3),m=n[0],v=n[1],M=n[2];return f[0]=m*i[0]+v*i[4]+M*i[8],f[1]=m*i[1]+v*i[5]+M*i[9],f[2]=m*i[2]+v*i[6]+M*i[10],f}function c(n,i,d){const f=d??new g(3),m=i[0],v=i[1],M=i[2],T=i[3]*2,U=n[0],R=n[1],I=n[2],_=v*I-M*R,L=M*U-m*I,E=m*R-v*U;return f[0]=U+_*T+(v*E-M*L)*2,f[1]=R+L*T+(M*_-m*E)*2,f[2]=I+E*T+(m*L-v*_)*2,f}function s(n,i){const d=i??new g(3);return d[0]=n[12],d[1]=n[13],d[2]=n[14],d}function u(n,i,d){const f=d??new g(3),m=i*4;return f[0]=n[m+0],f[1]=n[m+1],f[2]=n[m+2],f}function p(n,i){const d=i??new g(3),f=n[0],m=n[1],v=n[2],M=n[4],T=n[5],U=n[6],R=n[8],I=n[9],_=n[10];return d[0]=Math.sqrt(f*f+m*m+v*v),d[1]=Math.sqrt(M*M+T*T+U*U),d[2]=Math.sqrt(R*R+I*I+_*_),d}function x(n,i,d,f){const m=f??new g(3),v=[],M=[];return v[0]=n[0]-i[0],v[1]=n[1]-i[1],v[2]=n[2]-i[2],M[0]=v[0],M[1]=v[1]*Math.cos(d)-v[2]*Math.sin(d),M[2]=v[1]*Math.sin(d)+v[2]*Math.cos(d),m[0]=M[0]+i[0],m[1]=M[1]+i[1],m[2]=M[2]+i[2],m}function h(n,i,d,f){const m=f??new g(3),v=[],M=[];return v[0]=n[0]-i[0],v[1]=n[1]-i[1],v[2]=n[2]-i[2],M[0]=v[2]*Math.sin(d)+v[0]*Math.cos(d),M[1]=v[1],M[2]=v[2]*Math.cos(d)-v[0]*Math.sin(d),m[0]=M[0]+i[0],m[1]=M[1]+i[1],m[2]=M[2]+i[2],m}function t(n,i,d,f){const m=f??new g(3),v=[],M=[];return v[0]=n[0]-i[0],v[1]=n[1]-i[1],v[2]=n[2]-i[2],M[0]=v[0]*Math.cos(d)-v[1]*Math.sin(d),M[1]=v[0]*Math.sin(d)+v[1]*Math.cos(d),M[2]=v[2],m[0]=M[0]+i[0],m[1]=M[1]+i[1],m[2]=M[2]+i[2],m}function a(n,i,d){const f=d??new g(3);return it(n,f),et(f,i,f)}function r(n,i,d){const f=d??new g(3);return ot(n)>i?a(n,i,f):Q(n,f)}function o(n,i,d){const f=d??new g(3);return C(n,i,.5,f)}return{create:w,fromValues:A,set:P,ceil:S,floor:z,round:b,clamp:O,add:B,addScaled:W,angle:N,subtract:q,sub:j,equalsApproximately:K,equals:tt,lerp:C,lerpV:gt,max:J,min:nt,mulScalar:et,scale:ht,divScalar:lt,inverse:pt,invert:xt,cross:yt,dot:mt,length:ot,len:vt,lengthSq:$,lenSq:H,distance:st,dist:G,distanceSq:V,distSq:X,normalize:it,negate:Tt,copy:Q,clone:rt,multiply:dt,mul:bt,divide:ct,div:Mt,random:St,zero:y,transformMat4:D,transformMat4Upper3x3:l,transformMat3:e,transformQuat:c,getTranslation:s,getAxis:u,getScaling:p,rotateX:x,rotateY:h,rotateZ:t,setLength:a,truncate:r,midpoint:o}}const ne=new Map;function kt(g){let w=ne.get(g);return w||(w=le(g),ne.set(g,w)),w}function de(g){const w=ce(g),A=kt(g);function P(e,c,s,u,p,x,h,t,a){const r=new g(12);return r[3]=0,r[7]=0,r[11]=0,e!==void 0&&(r[0]=e,c!==void 0&&(r[1]=c,s!==void 0&&(r[2]=s,u!==void 0&&(r[4]=u,p!==void 0&&(r[5]=p,x!==void 0&&(r[6]=x,h!==void 0&&(r[8]=h,t!==void 0&&(r[9]=t,a!==void 0&&(r[10]=a))))))))),r}function S(e,c,s,u,p,x,h,t,a,r){const o=r??new g(12);return o[0]=e,o[1]=c,o[2]=s,o[3]=0,o[4]=u,o[5]=p,o[6]=x,o[7]=0,o[8]=h,o[9]=t,o[10]=a,o[11]=0,o}function z(e,c){const s=c??new g(12);return s[0]=e[0],s[1]=e[1],s[2]=e[2],s[3]=0,s[4]=e[4],s[5]=e[5],s[6]=e[6],s[7]=0,s[8]=e[8],s[9]=e[9],s[10]=e[10],s[11]=0,s}function b(e,c){const s=c??new g(12),u=e[0],p=e[1],x=e[2],h=e[3],t=u+u,a=p+p,r=x+x,o=u*t,n=p*t,i=p*a,d=x*t,f=x*a,m=x*r,v=h*t,M=h*a,T=h*r;return s[0]=1-i-m,s[1]=n+T,s[2]=d-M,s[3]=0,s[4]=n-T,s[5]=1-o-m,s[6]=f+v,s[7]=0,s[8]=d+M,s[9]=f-v,s[10]=1-o-i,s[11]=0,s}function O(e,c){const s=c??new g(12);return s[0]=-e[0],s[1]=-e[1],s[2]=-e[2],s[4]=-e[4],s[5]=-e[5],s[6]=-e[6],s[8]=-e[8],s[9]=-e[9],s[10]=-e[10],s}function B(e,c,s){const u=s??new g(12);return u[0]=e[0]*c,u[1]=e[1]*c,u[2]=e[2]*c,u[4]=e[4]*c,u[5]=e[5]*c,u[6]=e[6]*c,u[8]=e[8]*c,u[9]=e[9]*c,u[10]=e[10]*c,u}const W=B;function N(e,c,s){const u=s??new g(12);return u[0]=e[0]+c[0],u[1]=e[1]+c[1],u[2]=e[2]+c[2],u[4]=e[4]+c[4],u[5]=e[5]+c[5],u[6]=e[6]+c[6],u[8]=e[8]+c[8],u[9]=e[9]+c[9],u[10]=e[10]+c[10],u}function q(e,c){const s=c??new g(12);return s[0]=e[0],s[1]=e[1],s[2]=e[2],s[4]=e[4],s[5]=e[5],s[6]=e[6],s[8]=e[8],s[9]=e[9],s[10]=e[10],s}const j=q;function K(e,c){return Math.abs(e[0]-c[0])<F&&Math.abs(e[1]-c[1])<F&&Math.abs(e[2]-c[2])<F&&Math.abs(e[4]-c[4])<F&&Math.abs(e[5]-c[5])<F&&Math.abs(e[6]-c[6])<F&&Math.abs(e[8]-c[8])<F&&Math.abs(e[9]-c[9])<F&&Math.abs(e[10]-c[10])<F}function tt(e,c){return e[0]===c[0]&&e[1]===c[1]&&e[2]===c[2]&&e[4]===c[4]&&e[5]===c[5]&&e[6]===c[6]&&e[8]===c[8]&&e[9]===c[9]&&e[10]===c[10]}function C(e){const c=e??new g(12);return c[0]=1,c[1]=0,c[2]=0,c[4]=0,c[5]=1,c[6]=0,c[8]=0,c[9]=0,c[10]=1,c}function gt(e,c){const s=c??new g(12);if(s===e){let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,s}const u=e[0],p=e[1],x=e[2],h=e[4],t=e[5],a=e[6],r=e[8],o=e[9],n=e[10];return s[0]=u,s[1]=h,s[2]=r,s[4]=p,s[5]=t,s[6]=o,s[8]=x,s[9]=a,s[10]=n,s}function J(e,c){const s=c??new g(12),u=e[0],p=e[1],x=e[2],h=e[4],t=e[5],a=e[6],r=e[8],o=e[9],n=e[10],i=n*t-a*o,d=-n*h+a*r,f=o*h-t*r,m=1/(u*i+p*d+x*f);return s[0]=i*m,s[1]=(-n*p+x*o)*m,s[2]=(a*p-x*t)*m,s[4]=d*m,s[5]=(n*u-x*r)*m,s[6]=(-a*u+x*h)*m,s[8]=f*m,s[9]=(-o*u+p*r)*m,s[10]=(t*u-p*h)*m,s}function nt(e){const c=e[0],s=e[1],u=e[2],p=e[4],x=e[5],h=e[6],t=e[8],a=e[9],r=e[10];return c*(x*r-a*h)-p*(s*r-a*u)+t*(s*h-x*u)}const et=J;function ht(e,c,s){const u=s??new g(12),p=e[0],x=e[1],h=e[2],t=e[4],a=e[5],r=e[6],o=e[8],n=e[9],i=e[10],d=c[0],f=c[1],m=c[2],v=c[4],M=c[5],T=c[6],U=c[8],R=c[9],I=c[10];return u[0]=p*d+t*f+o*m,u[1]=x*d+a*f+n*m,u[2]=h*d+r*f+i*m,u[4]=p*v+t*M+o*T,u[5]=x*v+a*M+n*T,u[6]=h*v+r*M+i*T,u[8]=p*U+t*R+o*I,u[9]=x*U+a*R+n*I,u[10]=h*U+r*R+i*I,u}const lt=ht;function pt(e,c,s){const u=s??C();return e!==u&&(u[0]=e[0],u[1]=e[1],u[2]=e[2],u[4]=e[4],u[5]=e[5],u[6]=e[6]),u[8]=c[0],u[9]=c[1],u[10]=1,u}function xt(e,c){const s=c??w.create();return s[0]=e[8],s[1]=e[9],s}function yt(e,c,s){const u=s??w.create(),p=c*4;return u[0]=e[p+0],u[1]=e[p+1],u}function mt(e,c,s,u){const p=u===e?e:q(e,u),x=s*4;return p[x+0]=c[0],p[x+1]=c[1],p}function ot(e,c){const s=c??w.create(),u=e[0],p=e[1],x=e[4],h=e[5];return s[0]=Math.sqrt(u*u+p*p),s[1]=Math.sqrt(x*x+h*h),s}function vt(e,c){const s=c??A.create(),u=e[0],p=e[1],x=e[2],h=e[4],t=e[5],a=e[6],r=e[8],o=e[9],n=e[10];return s[0]=Math.sqrt(u*u+p*p+x*x),s[1]=Math.sqrt(h*h+t*t+a*a),s[2]=Math.sqrt(r*r+o*o+n*n),s}function $(e,c){const s=c??new g(12);return s[0]=1,s[1]=0,s[2]=0,s[4]=0,s[5]=1,s[6]=0,s[8]=e[0],s[9]=e[1],s[10]=1,s}function H(e,c,s){const u=s??new g(12),p=c[0],x=c[1],h=e[0],t=e[1],a=e[2],r=e[4],o=e[5],n=e[6],i=e[8],d=e[9],f=e[10];return e!==u&&(u[0]=h,u[1]=t,u[2]=a,u[4]=r,u[5]=o,u[6]=n),u[8]=h*p+r*x+i,u[9]=t*p+o*x+d,u[10]=a*p+n*x+f,u}function st(e,c){const s=c??new g(12),u=Math.cos(e),p=Math.sin(e);return s[0]=u,s[1]=p,s[2]=0,s[4]=-p,s[5]=u,s[6]=0,s[8]=0,s[9]=0,s[10]=1,s}function G(e,c,s){const u=s??new g(12),p=e[0],x=e[1],h=e[2],t=e[4],a=e[5],r=e[6],o=Math.cos(c),n=Math.sin(c);return u[0]=o*p+n*t,u[1]=o*x+n*a,u[2]=o*h+n*r,u[4]=o*t-n*p,u[5]=o*a-n*x,u[6]=o*r-n*h,e!==u&&(u[8]=e[8],u[9]=e[9],u[10]=e[10]),u}function V(e,c){const s=c??new g(12),u=Math.cos(e),p=Math.sin(e);return s[0]=1,s[1]=0,s[2]=0,s[4]=0,s[5]=u,s[6]=p,s[8]=0,s[9]=-p,s[10]=u,s}function X(e,c,s){const u=s??new g(12),p=e[4],x=e[5],h=e[6],t=e[8],a=e[9],r=e[10],o=Math.cos(c),n=Math.sin(c);return u[4]=o*p+n*t,u[5]=o*x+n*a,u[6]=o*h+n*r,u[8]=o*t-n*p,u[9]=o*a-n*x,u[10]=o*r-n*h,e!==u&&(u[0]=e[0],u[1]=e[1],u[2]=e[2]),u}function it(e,c){const s=c??new g(12),u=Math.cos(e),p=Math.sin(e);return s[0]=u,s[1]=0,s[2]=-p,s[4]=0,s[5]=1,s[6]=0,s[8]=p,s[9]=0,s[10]=u,s}function Tt(e,c,s){const u=s??new g(12),p=e[0],x=e[1],h=e[2],t=e[8],a=e[9],r=e[10],o=Math.cos(c),n=Math.sin(c);return u[0]=o*p-n*t,u[1]=o*x-n*a,u[2]=o*h-n*r,u[8]=o*t+n*p,u[9]=o*a+n*x,u[10]=o*r+n*h,e!==u&&(u[4]=e[4],u[5]=e[5],u[6]=e[6]),u}const Q=st,rt=G;function dt(e,c){const s=c??new g(12);return s[0]=e[0],s[1]=0,s[2]=0,s[4]=0,s[5]=e[1],s[6]=0,s[8]=0,s[9]=0,s[10]=1,s}function bt(e,c,s){const u=s??new g(12),p=c[0],x=c[1];return u[0]=p*e[0],u[1]=p*e[1],u[2]=p*e[2],u[4]=x*e[4],u[5]=x*e[5],u[6]=x*e[6],e!==u&&(u[8]=e[8],u[9]=e[9],u[10]=e[10]),u}function ct(e,c){const s=c??new g(12);return s[0]=e[0],s[1]=0,s[2]=0,s[4]=0,s[5]=e[1],s[6]=0,s[8]=0,s[9]=0,s[10]=e[2],s}function Mt(e,c,s){const u=s??new g(12),p=c[0],x=c[1],h=c[2];return u[0]=p*e[0],u[1]=p*e[1],u[2]=p*e[2],u[4]=x*e[4],u[5]=x*e[5],u[6]=x*e[6],u[8]=h*e[8],u[9]=h*e[9],u[10]=h*e[10],u}function St(e,c){const s=c??new g(12);return s[0]=e,s[1]=0,s[2]=0,s[4]=0,s[5]=e,s[6]=0,s[8]=0,s[9]=0,s[10]=1,s}function y(e,c,s){const u=s??new g(12);return u[0]=c*e[0],u[1]=c*e[1],u[2]=c*e[2],u[4]=c*e[4],u[5]=c*e[5],u[6]=c*e[6],e!==u&&(u[8]=e[8],u[9]=e[9],u[10]=e[10]),u}function D(e,c){const s=c??new g(12);return s[0]=e,s[1]=0,s[2]=0,s[4]=0,s[5]=e,s[6]=0,s[8]=0,s[9]=0,s[10]=e,s}function l(e,c,s){const u=s??new g(12);return u[0]=c*e[0],u[1]=c*e[1],u[2]=c*e[2],u[4]=c*e[4],u[5]=c*e[5],u[6]=c*e[6],u[8]=c*e[8],u[9]=c*e[9],u[10]=c*e[10],u}return{add:N,clone:j,copy:q,create:P,determinant:nt,equals:tt,equalsApproximately:K,fromMat4:z,fromQuat:b,get3DScaling:vt,getAxis:yt,getScaling:ot,getTranslation:xt,identity:C,inverse:J,invert:et,mul:lt,mulScalar:W,multiply:ht,multiplyScalar:B,negate:O,rotate:G,rotateX:X,rotateY:Tt,rotateZ:rt,rotation:st,rotationX:V,rotationY:it,rotationZ:Q,scale:bt,scale3D:Mt,scaling:dt,scaling3D:ct,set:S,setAxis:mt,setTranslation:pt,translate:H,translation:$,transpose:gt,uniformScale:y,uniformScale3D:l,uniformScaling:St,uniformScaling3D:D}}const re=new Map;function he(g){let w=re.get(g);return w||(w=de(g),re.set(g,w)),w}function pe(g){const w=kt(g);function A(t,a,r,o,n,i,d,f,m,v,M,T,U,R,I,_){const L=new g(16);return t!==void 0&&(L[0]=t,a!==void 0&&(L[1]=a,r!==void 0&&(L[2]=r,o!==void 0&&(L[3]=o,n!==void 0&&(L[4]=n,i!==void 0&&(L[5]=i,d!==void 0&&(L[6]=d,f!==void 0&&(L[7]=f,m!==void 0&&(L[8]=m,v!==void 0&&(L[9]=v,M!==void 0&&(L[10]=M,T!==void 0&&(L[11]=T,U!==void 0&&(L[12]=U,R!==void 0&&(L[13]=R,I!==void 0&&(L[14]=I,_!==void 0&&(L[15]=_)))))))))))))))),L}function P(t,a,r,o,n,i,d,f,m,v,M,T,U,R,I,_,L){const E=L??new g(16);return E[0]=t,E[1]=a,E[2]=r,E[3]=o,E[4]=n,E[5]=i,E[6]=d,E[7]=f,E[8]=m,E[9]=v,E[10]=M,E[11]=T,E[12]=U,E[13]=R,E[14]=I,E[15]=_,E}function S(t,a){const r=a??new g(16);return r[0]=t[0],r[1]=t[1],r[2]=t[2],r[3]=0,r[4]=t[4],r[5]=t[5],r[6]=t[6],r[7]=0,r[8]=t[8],r[9]=t[9],r[10]=t[10],r[11]=0,r[12]=0,r[13]=0,r[14]=0,r[15]=1,r}function z(t,a){const r=a??new g(16),o=t[0],n=t[1],i=t[2],d=t[3],f=o+o,m=n+n,v=i+i,M=o*f,T=n*f,U=n*m,R=i*f,I=i*m,_=i*v,L=d*f,E=d*m,k=d*v;return r[0]=1-U-_,r[1]=T+k,r[2]=R-E,r[3]=0,r[4]=T-k,r[5]=1-M-_,r[6]=I+L,r[7]=0,r[8]=R+E,r[9]=I-L,r[10]=1-M-U,r[11]=0,r[12]=0,r[13]=0,r[14]=0,r[15]=1,r}function b(t,a){const r=a??new g(16);return r[0]=-t[0],r[1]=-t[1],r[2]=-t[2],r[3]=-t[3],r[4]=-t[4],r[5]=-t[5],r[6]=-t[6],r[7]=-t[7],r[8]=-t[8],r[9]=-t[9],r[10]=-t[10],r[11]=-t[11],r[12]=-t[12],r[13]=-t[13],r[14]=-t[14],r[15]=-t[15],r}function O(t,a,r){const o=r??new g(16);return o[0]=t[0]+a[0],o[1]=t[1]+a[1],o[2]=t[2]+a[2],o[3]=t[3]+a[3],o[4]=t[4]+a[4],o[5]=t[5]+a[5],o[6]=t[6]+a[6],o[7]=t[7]+a[7],o[8]=t[8]+a[8],o[9]=t[9]+a[9],o[10]=t[10]+a[10],o[11]=t[11]+a[11],o[12]=t[12]+a[12],o[13]=t[13]+a[13],o[14]=t[14]+a[14],o[15]=t[15]+a[15],o}function B(t,a,r){const o=r??new g(16);return o[0]=t[0]*a,o[1]=t[1]*a,o[2]=t[2]*a,o[3]=t[3]*a,o[4]=t[4]*a,o[5]=t[5]*a,o[6]=t[6]*a,o[7]=t[7]*a,o[8]=t[8]*a,o[9]=t[9]*a,o[10]=t[10]*a,o[11]=t[11]*a,o[12]=t[12]*a,o[13]=t[13]*a,o[14]=t[14]*a,o[15]=t[15]*a,o}const W=B;function N(t,a){const r=a??new g(16);return r[0]=t[0],r[1]=t[1],r[2]=t[2],r[3]=t[3],r[4]=t[4],r[5]=t[5],r[6]=t[6],r[7]=t[7],r[8]=t[8],r[9]=t[9],r[10]=t[10],r[11]=t[11],r[12]=t[12],r[13]=t[13],r[14]=t[14],r[15]=t[15],r}const q=N;function j(t,a){return Math.abs(t[0]-a[0])<F&&Math.abs(t[1]-a[1])<F&&Math.abs(t[2]-a[2])<F&&Math.abs(t[3]-a[3])<F&&Math.abs(t[4]-a[4])<F&&Math.abs(t[5]-a[5])<F&&Math.abs(t[6]-a[6])<F&&Math.abs(t[7]-a[7])<F&&Math.abs(t[8]-a[8])<F&&Math.abs(t[9]-a[9])<F&&Math.abs(t[10]-a[10])<F&&Math.abs(t[11]-a[11])<F&&Math.abs(t[12]-a[12])<F&&Math.abs(t[13]-a[13])<F&&Math.abs(t[14]-a[14])<F&&Math.abs(t[15]-a[15])<F}function K(t,a){return t[0]===a[0]&&t[1]===a[1]&&t[2]===a[2]&&t[3]===a[3]&&t[4]===a[4]&&t[5]===a[5]&&t[6]===a[6]&&t[7]===a[7]&&t[8]===a[8]&&t[9]===a[9]&&t[10]===a[10]&&t[11]===a[11]&&t[12]===a[12]&&t[13]===a[13]&&t[14]===a[14]&&t[15]===a[15]}function tt(t){const a=t??new g(16);return a[0]=1,a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=1,a[6]=0,a[7]=0,a[8]=0,a[9]=0,a[10]=1,a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,a}function C(t,a){const r=a??new g(16);if(r===t){let Y;return Y=t[1],t[1]=t[4],t[4]=Y,Y=t[2],t[2]=t[8],t[8]=Y,Y=t[3],t[3]=t[12],t[12]=Y,Y=t[6],t[6]=t[9],t[9]=Y,Y=t[7],t[7]=t[13],t[13]=Y,Y=t[11],t[11]=t[14],t[14]=Y,r}const o=t[0],n=t[1],i=t[2],d=t[3],f=t[4],m=t[5],v=t[6],M=t[7],T=t[8],U=t[9],R=t[10],I=t[11],_=t[12],L=t[13],E=t[14],k=t[15];return r[0]=o,r[1]=f,r[2]=T,r[3]=_,r[4]=n,r[5]=m,r[6]=U,r[7]=L,r[8]=i,r[9]=v,r[10]=R,r[11]=E,r[12]=d,r[13]=M,r[14]=I,r[15]=k,r}function gt(t,a){const r=a??new g(16),o=t[0],n=t[1],i=t[2],d=t[3],f=t[4],m=t[5],v=t[6],M=t[7],T=t[8],U=t[9],R=t[10],I=t[11],_=t[12],L=t[13],E=t[14],k=t[15],Y=R*k,at=E*I,ut=v*k,ft=E*M,wt=v*I,Dt=R*M,Pt=i*k,At=E*d,Ut=i*I,Rt=R*d,Bt=i*M,It=v*d,Lt=T*L,Ot=_*U,Et=f*L,Gt=_*m,_t=f*U,Ft=T*m,Nt=o*L,Wt=_*n,jt=o*U,Xt=T*n,Ht=o*m,Yt=f*n,Kt=Y*m+ft*U+wt*L-(at*m+ut*U+Dt*L),Jt=at*n+Pt*U+Rt*L-(Y*n+At*U+Ut*L),Ct=ut*n+At*m+Bt*L-(ft*n+Pt*m+It*L),te=Dt*n+Ut*m+It*U-(wt*n+Rt*m+Bt*U),zt=1/(o*Kt+f*Jt+T*Ct+_*te);return r[0]=zt*Kt,r[1]=zt*Jt,r[2]=zt*Ct,r[3]=zt*te,r[4]=zt*(at*f+ut*T+Dt*_-(Y*f+ft*T+wt*_)),r[5]=zt*(Y*o+At*T+Ut*_-(at*o+Pt*T+Rt*_)),r[6]=zt*(ft*o+Pt*f+It*_-(ut*o+At*f+Bt*_)),r[7]=zt*(wt*o+Rt*f+Bt*T-(Dt*o+Ut*f+It*T)),r[8]=zt*(Lt*M+Gt*I+_t*k-(Ot*M+Et*I+Ft*k)),r[9]=zt*(Ot*d+Nt*I+Xt*k-(Lt*d+Wt*I+jt*k)),r[10]=zt*(Et*d+Wt*M+Ht*k-(Gt*d+Nt*M+Yt*k)),r[11]=zt*(Ft*d+jt*M+Yt*I-(_t*d+Xt*M+Ht*I)),r[12]=zt*(Et*R+Ft*E+Ot*v-(_t*E+Lt*v+Gt*R)),r[13]=zt*(jt*E+Lt*i+Wt*R-(Nt*R+Xt*E+Ot*i)),r[14]=zt*(Nt*v+Yt*E+Gt*i-(Ht*E+Et*i+Wt*v)),r[15]=zt*(Ht*R+_t*i+Xt*v-(jt*v+Yt*R+Ft*i)),r}function J(t){const a=t[0],r=t[1],o=t[2],n=t[3],i=t[4],d=t[5],f=t[6],m=t[7],v=t[8],M=t[9],T=t[10],U=t[11],R=t[12],I=t[13],_=t[14],L=t[15],E=T*L,k=_*U,Y=f*L,at=_*m,ut=f*U,ft=T*m,wt=o*L,Dt=_*n,Pt=o*U,At=T*n,Ut=o*m,Rt=f*n,Bt=E*d+at*M+ut*I-(k*d+Y*M+ft*I),It=k*r+wt*M+At*I-(E*r+Dt*M+Pt*I),Lt=Y*r+Dt*d+Ut*I-(at*r+wt*d+Rt*I),Ot=ft*r+Pt*d+Rt*M-(ut*r+At*d+Ut*M);return a*Bt+i*It+v*Lt+R*Ot}const nt=gt;function et(t,a,r){const o=r??new g(16),n=t[0],i=t[1],d=t[2],f=t[3],m=t[4],v=t[5],M=t[6],T=t[7],U=t[8],R=t[9],I=t[10],_=t[11],L=t[12],E=t[13],k=t[14],Y=t[15],at=a[0],ut=a[1],ft=a[2],wt=a[3],Dt=a[4],Pt=a[5],At=a[6],Ut=a[7],Rt=a[8],Bt=a[9],It=a[10],Lt=a[11],Ot=a[12],Et=a[13],Gt=a[14],_t=a[15];return o[0]=n*at+m*ut+U*ft+L*wt,o[1]=i*at+v*ut+R*ft+E*wt,o[2]=d*at+M*ut+I*ft+k*wt,o[3]=f*at+T*ut+_*ft+Y*wt,o[4]=n*Dt+m*Pt+U*At+L*Ut,o[5]=i*Dt+v*Pt+R*At+E*Ut,o[6]=d*Dt+M*Pt+I*At+k*Ut,o[7]=f*Dt+T*Pt+_*At+Y*Ut,o[8]=n*Rt+m*Bt+U*It+L*Lt,o[9]=i*Rt+v*Bt+R*It+E*Lt,o[10]=d*Rt+M*Bt+I*It+k*Lt,o[11]=f*Rt+T*Bt+_*It+Y*Lt,o[12]=n*Ot+m*Et+U*Gt+L*_t,o[13]=i*Ot+v*Et+R*Gt+E*_t,o[14]=d*Ot+M*Et+I*Gt+k*_t,o[15]=f*Ot+T*Et+_*Gt+Y*_t,o}const ht=et;function lt(t,a,r){const o=r??tt();return t!==o&&(o[0]=t[0],o[1]=t[1],o[2]=t[2],o[3]=t[3],o[4]=t[4],o[5]=t[5],o[6]=t[6],o[7]=t[7],o[8]=t[8],o[9]=t[9],o[10]=t[10],o[11]=t[11]),o[12]=a[0],o[13]=a[1],o[14]=a[2],o[15]=1,o}function pt(t,a){const r=a??w.create();return r[0]=t[12],r[1]=t[13],r[2]=t[14],r}function xt(t,a,r){const o=r??w.create(),n=a*4;return o[0]=t[n+0],o[1]=t[n+1],o[2]=t[n+2],o}function yt(t,a,r,o){const n=o===t?o:N(t,o),i=r*4;return n[i+0]=a[0],n[i+1]=a[1],n[i+2]=a[2],n}function mt(t,a){const r=a??w.create(),o=t[0],n=t[1],i=t[2],d=t[4],f=t[5],m=t[6],v=t[8],M=t[9],T=t[10];return r[0]=Math.sqrt(o*o+n*n+i*i),r[1]=Math.sqrt(d*d+f*f+m*m),r[2]=Math.sqrt(v*v+M*M+T*T),r}function ot(t,a,r,o,n){const i=n??new g(16),d=Math.tan(Math.PI*.5-.5*t);if(i[0]=d/a,i[1]=0,i[2]=0,i[3]=0,i[4]=0,i[5]=d,i[6]=0,i[7]=0,i[8]=0,i[9]=0,i[11]=-1,i[12]=0,i[13]=0,i[15]=0,Number.isFinite(o)){const f=1/(r-o);i[10]=o*f,i[14]=o*r*f}else i[10]=-1,i[14]=-r;return i}function vt(t,a,r,o=1/0,n){const i=n??new g(16),d=1/Math.tan(t*.5);if(i[0]=d/a,i[1]=0,i[2]=0,i[3]=0,i[4]=0,i[5]=d,i[6]=0,i[7]=0,i[8]=0,i[9]=0,i[11]=-1,i[12]=0,i[13]=0,i[15]=0,o===1/0)i[10]=0,i[14]=r;else{const f=1/(o-r);i[10]=r*f,i[14]=o*r*f}return i}function $(t,a,r,o,n,i,d){const f=d??new g(16);return f[0]=2/(a-t),f[1]=0,f[2]=0,f[3]=0,f[4]=0,f[5]=2/(o-r),f[6]=0,f[7]=0,f[8]=0,f[9]=0,f[10]=1/(n-i),f[11]=0,f[12]=(a+t)/(t-a),f[13]=(o+r)/(r-o),f[14]=n/(n-i),f[15]=1,f}function H(t,a,r,o,n,i,d){const f=d??new g(16),m=a-t,v=o-r,M=n-i;return f[0]=2*n/m,f[1]=0,f[2]=0,f[3]=0,f[4]=0,f[5]=2*n/v,f[6]=0,f[7]=0,f[8]=(t+a)/m,f[9]=(o+r)/v,f[10]=i/M,f[11]=-1,f[12]=0,f[13]=0,f[14]=n*i/M,f[15]=0,f}function st(t,a,r,o,n,i=1/0,d){const f=d??new g(16),m=a-t,v=o-r;if(f[0]=2*n/m,f[1]=0,f[2]=0,f[3]=0,f[4]=0,f[5]=2*n/v,f[6]=0,f[7]=0,f[8]=(t+a)/m,f[9]=(o+r)/v,f[11]=-1,f[12]=0,f[13]=0,f[15]=0,i===1/0)f[10]=0,f[14]=n;else{const M=1/(i-n);f[10]=n*M,f[14]=i*n*M}return f}const G=w.create(),V=w.create(),X=w.create();function it(t,a,r,o){const n=o??new g(16);return w.normalize(w.subtract(a,t,X),X),w.normalize(w.cross(r,X,G),G),w.normalize(w.cross(X,G,V),V),n[0]=G[0],n[1]=G[1],n[2]=G[2],n[3]=0,n[4]=V[0],n[5]=V[1],n[6]=V[2],n[7]=0,n[8]=X[0],n[9]=X[1],n[10]=X[2],n[11]=0,n[12]=t[0],n[13]=t[1],n[14]=t[2],n[15]=1,n}function Tt(t,a,r,o){const n=o??new g(16);return w.normalize(w.subtract(t,a,X),X),w.normalize(w.cross(r,X,G),G),w.normalize(w.cross(X,G,V),V),n[0]=G[0],n[1]=G[1],n[2]=G[2],n[3]=0,n[4]=V[0],n[5]=V[1],n[6]=V[2],n[7]=0,n[8]=X[0],n[9]=X[1],n[10]=X[2],n[11]=0,n[12]=t[0],n[13]=t[1],n[14]=t[2],n[15]=1,n}function Q(t,a,r,o){const n=o??new g(16);return w.normalize(w.subtract(t,a,X),X),w.normalize(w.cross(r,X,G),G),w.normalize(w.cross(X,G,V),V),n[0]=G[0],n[1]=V[0],n[2]=X[0],n[3]=0,n[4]=G[1],n[5]=V[1],n[6]=X[1],n[7]=0,n[8]=G[2],n[9]=V[2],n[10]=X[2],n[11]=0,n[12]=-(G[0]*t[0]+G[1]*t[1]+G[2]*t[2]),n[13]=-(V[0]*t[0]+V[1]*t[1]+V[2]*t[2]),n[14]=-(X[0]*t[0]+X[1]*t[1]+X[2]*t[2]),n[15]=1,n}function rt(t,a){const r=a??new g(16);return r[0]=1,r[1]=0,r[2]=0,r[3]=0,r[4]=0,r[5]=1,r[6]=0,r[7]=0,r[8]=0,r[9]=0,r[10]=1,r[11]=0,r[12]=t[0],r[13]=t[1],r[14]=t[2],r[15]=1,r}function dt(t,a,r){const o=r??new g(16),n=a[0],i=a[1],d=a[2],f=t[0],m=t[1],v=t[2],M=t[3],T=t[4],U=t[5],R=t[6],I=t[7],_=t[8],L=t[9],E=t[10],k=t[11],Y=t[12],at=t[13],ut=t[14],ft=t[15];return t!==o&&(o[0]=f,o[1]=m,o[2]=v,o[3]=M,o[4]=T,o[5]=U,o[6]=R,o[7]=I,o[8]=_,o[9]=L,o[10]=E,o[11]=k),o[12]=f*n+T*i+_*d+Y,o[13]=m*n+U*i+L*d+at,o[14]=v*n+R*i+E*d+ut,o[15]=M*n+I*i+k*d+ft,o}function bt(t,a){const r=a??new g(16),o=Math.cos(t),n=Math.sin(t);return r[0]=1,r[1]=0,r[2]=0,r[3]=0,r[4]=0,r[5]=o,r[6]=n,r[7]=0,r[8]=0,r[9]=-n,r[10]=o,r[11]=0,r[12]=0,r[13]=0,r[14]=0,r[15]=1,r}function ct(t,a,r){const o=r??new g(16),n=t[4],i=t[5],d=t[6],f=t[7],m=t[8],v=t[9],M=t[10],T=t[11],U=Math.cos(a),R=Math.sin(a);return o[4]=U*n+R*m,o[5]=U*i+R*v,o[6]=U*d+R*M,o[7]=U*f+R*T,o[8]=U*m-R*n,o[9]=U*v-R*i,o[10]=U*M-R*d,o[11]=U*T-R*f,t!==o&&(o[0]=t[0],o[1]=t[1],o[2]=t[2],o[3]=t[3],o[12]=t[12],o[13]=t[13],o[14]=t[14],o[15]=t[15]),o}function Mt(t,a){const r=a??new g(16),o=Math.cos(t),n=Math.sin(t);return r[0]=o,r[1]=0,r[2]=-n,r[3]=0,r[4]=0,r[5]=1,r[6]=0,r[7]=0,r[8]=n,r[9]=0,r[10]=o,r[11]=0,r[12]=0,r[13]=0,r[14]=0,r[15]=1,r}function St(t,a,r){const o=r??new g(16),n=t[0],i=t[1],d=t[2],f=t[3],m=t[8],v=t[9],M=t[10],T=t[11],U=Math.cos(a),R=Math.sin(a);return o[0]=U*n-R*m,o[1]=U*i-R*v,o[2]=U*d-R*M,o[3]=U*f-R*T,o[8]=U*m+R*n,o[9]=U*v+R*i,o[10]=U*M+R*d,o[11]=U*T+R*f,t!==o&&(o[4]=t[4],o[5]=t[5],o[6]=t[6],o[7]=t[7],o[12]=t[12],o[13]=t[13],o[14]=t[14],o[15]=t[15]),o}function y(t,a){const r=a??new g(16),o=Math.cos(t),n=Math.sin(t);return r[0]=o,r[1]=n,r[2]=0,r[3]=0,r[4]=-n,r[5]=o,r[6]=0,r[7]=0,r[8]=0,r[9]=0,r[10]=1,r[11]=0,r[12]=0,r[13]=0,r[14]=0,r[15]=1,r}function D(t,a,r){const o=r??new g(16),n=t[0],i=t[1],d=t[2],f=t[3],m=t[4],v=t[5],M=t[6],T=t[7],U=Math.cos(a),R=Math.sin(a);return o[0]=U*n+R*m,o[1]=U*i+R*v,o[2]=U*d+R*M,o[3]=U*f+R*T,o[4]=U*m-R*n,o[5]=U*v-R*i,o[6]=U*M-R*d,o[7]=U*T-R*f,t!==o&&(o[8]=t[8],o[9]=t[9],o[10]=t[10],o[11]=t[11],o[12]=t[12],o[13]=t[13],o[14]=t[14],o[15]=t[15]),o}function l(t,a,r){const o=r??new g(16);let n=t[0],i=t[1],d=t[2];const f=Math.sqrt(n*n+i*i+d*d);n/=f,i/=f,d/=f;const m=n*n,v=i*i,M=d*d,T=Math.cos(a),U=Math.sin(a),R=1-T;return o[0]=m+(1-m)*T,o[1]=n*i*R+d*U,o[2]=n*d*R-i*U,o[3]=0,o[4]=n*i*R-d*U,o[5]=v+(1-v)*T,o[6]=i*d*R+n*U,o[7]=0,o[8]=n*d*R+i*U,o[9]=i*d*R-n*U,o[10]=M+(1-M)*T,o[11]=0,o[12]=0,o[13]=0,o[14]=0,o[15]=1,o}const e=l;function c(t,a,r,o){const n=o??new g(16);let i=a[0],d=a[1],f=a[2];const m=Math.sqrt(i*i+d*d+f*f);i/=m,d/=m,f/=m;const v=i*i,M=d*d,T=f*f,U=Math.cos(r),R=Math.sin(r),I=1-U,_=v+(1-v)*U,L=i*d*I+f*R,E=i*f*I-d*R,k=i*d*I-f*R,Y=M+(1-M)*U,at=d*f*I+i*R,ut=i*f*I+d*R,ft=d*f*I-i*R,wt=T+(1-T)*U,Dt=t[0],Pt=t[1],At=t[2],Ut=t[3],Rt=t[4],Bt=t[5],It=t[6],Lt=t[7],Ot=t[8],Et=t[9],Gt=t[10],_t=t[11];return n[0]=_*Dt+L*Rt+E*Ot,n[1]=_*Pt+L*Bt+E*Et,n[2]=_*At+L*It+E*Gt,n[3]=_*Ut+L*Lt+E*_t,n[4]=k*Dt+Y*Rt+at*Ot,n[5]=k*Pt+Y*Bt+at*Et,n[6]=k*At+Y*It+at*Gt,n[7]=k*Ut+Y*Lt+at*_t,n[8]=ut*Dt+ft*Rt+wt*Ot,n[9]=ut*Pt+ft*Bt+wt*Et,n[10]=ut*At+ft*It+wt*Gt,n[11]=ut*Ut+ft*Lt+wt*_t,t!==n&&(n[12]=t[12],n[13]=t[13],n[14]=t[14],n[15]=t[15]),n}const s=c;function u(t,a){const r=a??new g(16);return r[0]=t[0],r[1]=0,r[2]=0,r[3]=0,r[4]=0,r[5]=t[1],r[6]=0,r[7]=0,r[8]=0,r[9]=0,r[10]=t[2],r[11]=0,r[12]=0,r[13]=0,r[14]=0,r[15]=1,r}function p(t,a,r){const o=r??new g(16),n=a[0],i=a[1],d=a[2];return o[0]=n*t[0],o[1]=n*t[1],o[2]=n*t[2],o[3]=n*t[3],o[4]=i*t[4],o[5]=i*t[5],o[6]=i*t[6],o[7]=i*t[7],o[8]=d*t[8],o[9]=d*t[9],o[10]=d*t[10],o[11]=d*t[11],t!==o&&(o[12]=t[12],o[13]=t[13],o[14]=t[14],o[15]=t[15]),o}function x(t,a){const r=a??new g(16);return r[0]=t,r[1]=0,r[2]=0,r[3]=0,r[4]=0,r[5]=t,r[6]=0,r[7]=0,r[8]=0,r[9]=0,r[10]=t,r[11]=0,r[12]=0,r[13]=0,r[14]=0,r[15]=1,r}function h(t,a,r){const o=r??new g(16);return o[0]=a*t[0],o[1]=a*t[1],o[2]=a*t[2],o[3]=a*t[3],o[4]=a*t[4],o[5]=a*t[5],o[6]=a*t[6],o[7]=a*t[7],o[8]=a*t[8],o[9]=a*t[9],o[10]=a*t[10],o[11]=a*t[11],t!==o&&(o[12]=t[12],o[13]=t[13],o[14]=t[14],o[15]=t[15]),o}return{add:O,aim:it,axisRotate:c,axisRotation:l,cameraAim:Tt,clone:q,copy:N,create:A,determinant:J,equals:K,equalsApproximately:j,fromMat3:S,fromQuat:z,frustum:H,frustumReverseZ:st,getAxis:xt,getScaling:mt,getTranslation:pt,identity:tt,inverse:gt,invert:nt,lookAt:Q,mul:ht,mulScalar:W,multiply:et,multiplyScalar:B,negate:b,ortho:$,perspective:ot,perspectiveReverseZ:vt,rotate:s,rotateX:ct,rotateY:St,rotateZ:D,rotation:e,rotationX:bt,rotationY:Mt,rotationZ:y,scale:p,scaling:u,set:P,setAxis:yt,setTranslation:lt,translate:dt,translation:rt,transpose:C,uniformScale:h,uniformScaling:x}}const oe=new Map;function we(g){let w=oe.get(g);return w||(w=pe(g),oe.set(g,w)),w}function ge(g){const w=kt(g);function A(y,D,l,e){const c=new g(4);return y!==void 0&&(c[0]=y,D!==void 0&&(c[1]=D,l!==void 0&&(c[2]=l,e!==void 0&&(c[3]=e)))),c}const P=A;function S(y,D,l,e,c){const s=c??new g(4);return s[0]=y,s[1]=D,s[2]=l,s[3]=e,s}function z(y,D,l){const e=l??new g(4),c=D*.5,s=Math.sin(c);return e[0]=s*y[0],e[1]=s*y[1],e[2]=s*y[2],e[3]=Math.cos(c),e}function b(y,D){const l=D??w.create(3),e=Math.acos(y[3])*2,c=Math.sin(e*.5);return c>F?(l[0]=y[0]/c,l[1]=y[1]/c,l[2]=y[2]/c):(l[0]=1,l[1]=0,l[2]=0),{angle:e,axis:l}}function O(y,D){const l=ot(y,D);return Math.acos(2*l*l-1)}function B(y,D,l){const e=l??new g(4),c=y[0],s=y[1],u=y[2],p=y[3],x=D[0],h=D[1],t=D[2],a=D[3];return e[0]=c*a+p*x+s*t-u*h,e[1]=s*a+p*h+u*x-c*t,e[2]=u*a+p*t+c*h-s*x,e[3]=p*a-c*x-s*h-u*t,e}const W=B;function N(y,D,l){const e=l??new g(4),c=D*.5,s=y[0],u=y[1],p=y[2],x=y[3],h=Math.sin(c),t=Math.cos(c);return e[0]=s*t+x*h,e[1]=u*t+p*h,e[2]=p*t-u*h,e[3]=x*t-s*h,e}function q(y,D,l){const e=l??new g(4),c=D*.5,s=y[0],u=y[1],p=y[2],x=y[3],h=Math.sin(c),t=Math.cos(c);return e[0]=s*t-p*h,e[1]=u*t+x*h,e[2]=p*t+s*h,e[3]=x*t-u*h,e}function j(y,D,l){const e=l??new g(4),c=D*.5,s=y[0],u=y[1],p=y[2],x=y[3],h=Math.sin(c),t=Math.cos(c);return e[0]=s*t+u*h,e[1]=u*t-s*h,e[2]=p*t+x*h,e[3]=x*t-p*h,e}function K(y,D,l,e){const c=e??new g(4),s=y[0],u=y[1],p=y[2],x=y[3];let h=D[0],t=D[1],a=D[2],r=D[3],o=s*h+u*t+p*a+x*r;o<0&&(o=-o,h=-h,t=-t,a=-a,r=-r);let n,i;if(1-o>F){const d=Math.acos(o),f=Math.sin(d);n=Math.sin((1-l)*d)/f,i=Math.sin(l*d)/f}else n=1-l,i=l;return c[0]=n*s+i*h,c[1]=n*u+i*t,c[2]=n*p+i*a,c[3]=n*x+i*r,c}function tt(y,D){const l=D??new g(4),e=y[0],c=y[1],s=y[2],u=y[3],p=e*e+c*c+s*s+u*u,x=p?1/p:0;return l[0]=-e*x,l[1]=-c*x,l[2]=-s*x,l[3]=u*x,l}function C(y,D){const l=D??new g(4);return l[0]=-y[0],l[1]=-y[1],l[2]=-y[2],l[3]=y[3],l}function gt(y,D){const l=D??new g(4),e=y[0]+y[5]+y[10];if(e>0){const c=Math.sqrt(e+1);l[3]=.5*c;const s=.5/c;l[0]=(y[6]-y[9])*s,l[1]=(y[8]-y[2])*s,l[2]=(y[1]-y[4])*s}else{let c=0;y[5]>y[0]&&(c=1),y[10]>y[c*4+c]&&(c=2);const s=(c+1)%3,u=(c+2)%3,p=Math.sqrt(y[c*4+c]-y[s*4+s]-y[u*4+u]+1);l[c]=.5*p;const x=.5/p;l[3]=(y[s*4+u]-y[u*4+s])*x,l[s]=(y[s*4+c]+y[c*4+s])*x,l[u]=(y[u*4+c]+y[c*4+u])*x}return l}function J(y,D,l,e,c){const s=c??new g(4),u=y*.5,p=D*.5,x=l*.5,h=Math.sin(u),t=Math.cos(u),a=Math.sin(p),r=Math.cos(p),o=Math.sin(x),n=Math.cos(x);switch(e){case"xyz":s[0]=h*r*n+t*a*o,s[1]=t*a*n-h*r*o,s[2]=t*r*o+h*a*n,s[3]=t*r*n-h*a*o;break;case"xzy":s[0]=h*r*n-t*a*o,s[1]=t*a*n-h*r*o,s[2]=t*r*o+h*a*n,s[3]=t*r*n+h*a*o;break;case"yxz":s[0]=h*r*n+t*a*o,s[1]=t*a*n-h*r*o,s[2]=t*r*o-h*a*n,s[3]=t*r*n+h*a*o;break;case"yzx":s[0]=h*r*n+t*a*o,s[1]=t*a*n+h*r*o,s[2]=t*r*o-h*a*n,s[3]=t*r*n-h*a*o;break;case"zxy":s[0]=h*r*n-t*a*o,s[1]=t*a*n+h*r*o,s[2]=t*r*o+h*a*n,s[3]=t*r*n-h*a*o;break;case"zyx":s[0]=h*r*n-t*a*o,s[1]=t*a*n+h*r*o,s[2]=t*r*o-h*a*n,s[3]=t*r*n+h*a*o;break;default:throw new Error(`Unknown rotation order: ${e}`)}return s}function nt(y,D){const l=D??new g(4);return l[0]=y[0],l[1]=y[1],l[2]=y[2],l[3]=y[3],l}const et=nt;function ht(y,D,l){const e=l??new g(4);return e[0]=y[0]+D[0],e[1]=y[1]+D[1],e[2]=y[2]+D[2],e[3]=y[3]+D[3],e}function lt(y,D,l){const e=l??new g(4);return e[0]=y[0]-D[0],e[1]=y[1]-D[1],e[2]=y[2]-D[2],e[3]=y[3]-D[3],e}const pt=lt;function xt(y,D,l){const e=l??new g(4);return e[0]=y[0]*D,e[1]=y[1]*D,e[2]=y[2]*D,e[3]=y[3]*D,e}const yt=xt;function mt(y,D,l){const e=l??new g(4);return e[0]=y[0]/D,e[1]=y[1]/D,e[2]=y[2]/D,e[3]=y[3]/D,e}function ot(y,D){return y[0]*D[0]+y[1]*D[1]+y[2]*D[2]+y[3]*D[3]}function vt(y,D,l,e){const c=e??new g(4);return c[0]=y[0]+l*(D[0]-y[0]),c[1]=y[1]+l*(D[1]-y[1]),c[2]=y[2]+l*(D[2]-y[2]),c[3]=y[3]+l*(D[3]-y[3]),c}function $(y){const D=y[0],l=y[1],e=y[2],c=y[3];return Math.sqrt(D*D+l*l+e*e+c*c)}const H=$;function st(y){const D=y[0],l=y[1],e=y[2],c=y[3];return D*D+l*l+e*e+c*c}const G=st;function V(y,D){const l=D??new g(4),e=y[0],c=y[1],s=y[2],u=y[3],p=Math.sqrt(e*e+c*c+s*s+u*u);return p>1e-5?(l[0]=e/p,l[1]=c/p,l[2]=s/p,l[3]=u/p):(l[0]=0,l[1]=0,l[2]=0,l[3]=1),l}function X(y,D){return Math.abs(y[0]-D[0])<F&&Math.abs(y[1]-D[1])<F&&Math.abs(y[2]-D[2])<F&&Math.abs(y[3]-D[3])<F}function it(y,D){return y[0]===D[0]&&y[1]===D[1]&&y[2]===D[2]&&y[3]===D[3]}function Tt(y){const D=y??new g(4);return D[0]=0,D[1]=0,D[2]=0,D[3]=1,D}const Q=w.create(),rt=w.create(),dt=w.create();function bt(y,D,l){const e=l??new g(4),c=w.dot(y,D);return c<-.999999?(w.cross(rt,y,Q),w.len(Q)<1e-6&&w.cross(dt,y,Q),w.normalize(Q,Q),z(Q,Math.PI,e),e):c>.999999?(e[0]=0,e[1]=0,e[2]=0,e[3]=1,e):(w.cross(y,D,Q),e[0]=Q[0],e[1]=Q[1],e[2]=Q[2],e[3]=1+c,V(e,e))}const ct=new g(4),Mt=new g(4);function St(y,D,l,e,c,s){const u=s??new g(4);return K(y,e,c,ct),K(D,l,c,Mt),K(ct,Mt,2*c*(1-c),u),u}return{create:A,fromValues:P,set:S,fromAxisAngle:z,toAxisAngle:b,angle:O,multiply:B,mul:W,rotateX:N,rotateY:q,rotateZ:j,slerp:K,inverse:tt,conjugate:C,fromMat:gt,fromEuler:J,copy:nt,clone:et,add:ht,subtract:lt,sub:pt,mulScalar:xt,scale:yt,divScalar:mt,dot:ot,lerp:vt,length:$,len:H,lengthSq:st,lenSq:G,normalize:V,equalsApproximately:X,equals:it,identity:Tt,rotationTo:bt,sqlerp:St}}const se=new Map;function xe(g){let w=se.get(g);return w||(w=ge(g),se.set(g,w)),w}function ye(g){function w(l,e,c,s){const u=new g(4);return l!==void 0&&(u[0]=l,e!==void 0&&(u[1]=e,c!==void 0&&(u[2]=c,s!==void 0&&(u[3]=s)))),u}const A=w;function P(l,e,c,s,u){const p=u??new g(4);return p[0]=l,p[1]=e,p[2]=c,p[3]=s,p}function S(l,e){const c=e??new g(4);return c[0]=Math.ceil(l[0]),c[1]=Math.ceil(l[1]),c[2]=Math.ceil(l[2]),c[3]=Math.ceil(l[3]),c}function z(l,e){const c=e??new g(4);return c[0]=Math.floor(l[0]),c[1]=Math.floor(l[1]),c[2]=Math.floor(l[2]),c[3]=Math.floor(l[3]),c}function b(l,e){const c=e??new g(4);return c[0]=Math.round(l[0]),c[1]=Math.round(l[1]),c[2]=Math.round(l[2]),c[3]=Math.round(l[3]),c}function O(l,e=0,c=1,s){const u=s??new g(4);return u[0]=Math.min(c,Math.max(e,l[0])),u[1]=Math.min(c,Math.max(e,l[1])),u[2]=Math.min(c,Math.max(e,l[2])),u[3]=Math.min(c,Math.max(e,l[3])),u}function B(l,e,c){const s=c??new g(4);return s[0]=l[0]+e[0],s[1]=l[1]+e[1],s[2]=l[2]+e[2],s[3]=l[3]+e[3],s}function W(l,e,c,s){const u=s??new g(4);return u[0]=l[0]+e[0]*c,u[1]=l[1]+e[1]*c,u[2]=l[2]+e[2]*c,u[3]=l[3]+e[3]*c,u}function N(l,e,c){const s=c??new g(4);return s[0]=l[0]-e[0],s[1]=l[1]-e[1],s[2]=l[2]-e[2],s[3]=l[3]-e[3],s}const q=N;function j(l,e){return Math.abs(l[0]-e[0])<F&&Math.abs(l[1]-e[1])<F&&Math.abs(l[2]-e[2])<F&&Math.abs(l[3]-e[3])<F}function K(l,e){return l[0]===e[0]&&l[1]===e[1]&&l[2]===e[2]&&l[3]===e[3]}function tt(l,e,c,s){const u=s??new g(4);return u[0]=l[0]+c*(e[0]-l[0]),u[1]=l[1]+c*(e[1]-l[1]),u[2]=l[2]+c*(e[2]-l[2]),u[3]=l[3]+c*(e[3]-l[3]),u}function C(l,e,c,s){const u=s??new g(4);return u[0]=l[0]+c[0]*(e[0]-l[0]),u[1]=l[1]+c[1]*(e[1]-l[1]),u[2]=l[2]+c[2]*(e[2]-l[2]),u[3]=l[3]+c[3]*(e[3]-l[3]),u}function gt(l,e,c){const s=c??new g(4);return s[0]=Math.max(l[0],e[0]),s[1]=Math.max(l[1],e[1]),s[2]=Math.max(l[2],e[2]),s[3]=Math.max(l[3],e[3]),s}function J(l,e,c){const s=c??new g(4);return s[0]=Math.min(l[0],e[0]),s[1]=Math.min(l[1],e[1]),s[2]=Math.min(l[2],e[2]),s[3]=Math.min(l[3],e[3]),s}function nt(l,e,c){const s=c??new g(4);return s[0]=l[0]*e,s[1]=l[1]*e,s[2]=l[2]*e,s[3]=l[3]*e,s}const et=nt;function ht(l,e,c){const s=c??new g(4);return s[0]=l[0]/e,s[1]=l[1]/e,s[2]=l[2]/e,s[3]=l[3]/e,s}function lt(l,e){const c=e??new g(4);return c[0]=1/l[0],c[1]=1/l[1],c[2]=1/l[2],c[3]=1/l[3],c}const pt=lt;function xt(l,e){return l[0]*e[0]+l[1]*e[1]+l[2]*e[2]+l[3]*e[3]}function yt(l){const e=l[0],c=l[1],s=l[2],u=l[3];return Math.sqrt(e*e+c*c+s*s+u*u)}const mt=yt;function ot(l){const e=l[0],c=l[1],s=l[2],u=l[3];return e*e+c*c+s*s+u*u}const vt=ot;function $(l,e){const c=l[0]-e[0],s=l[1]-e[1],u=l[2]-e[2],p=l[3]-e[3];return Math.sqrt(c*c+s*s+u*u+p*p)}const H=$;function st(l,e){const c=l[0]-e[0],s=l[1]-e[1],u=l[2]-e[2],p=l[3]-e[3];return c*c+s*s+u*u+p*p}const G=st;function V(l,e){const c=e??new g(4),s=l[0],u=l[1],p=l[2],x=l[3],h=Math.sqrt(s*s+u*u+p*p+x*x);return h>1e-5?(c[0]=s/h,c[1]=u/h,c[2]=p/h,c[3]=x/h):(c[0]=0,c[1]=0,c[2]=0,c[3]=0),c}function X(l,e){const c=e??new g(4);return c[0]=-l[0],c[1]=-l[1],c[2]=-l[2],c[3]=-l[3],c}function it(l,e){const c=e??new g(4);return c[0]=l[0],c[1]=l[1],c[2]=l[2],c[3]=l[3],c}const Tt=it;function Q(l,e,c){const s=c??new g(4);return s[0]=l[0]*e[0],s[1]=l[1]*e[1],s[2]=l[2]*e[2],s[3]=l[3]*e[3],s}const rt=Q;function dt(l,e,c){const s=c??new g(4);return s[0]=l[0]/e[0],s[1]=l[1]/e[1],s[2]=l[2]/e[2],s[3]=l[3]/e[3],s}const bt=dt;function ct(l){const e=l??new g(4);return e[0]=0,e[1]=0,e[2]=0,e[3]=0,e}function Mt(l,e,c){const s=c??new g(4),u=l[0],p=l[1],x=l[2],h=l[3];return s[0]=e[0]*u+e[4]*p+e[8]*x+e[12]*h,s[1]=e[1]*u+e[5]*p+e[9]*x+e[13]*h,s[2]=e[2]*u+e[6]*p+e[10]*x+e[14]*h,s[3]=e[3]*u+e[7]*p+e[11]*x+e[15]*h,s}function St(l,e,c){const s=c??new g(4);return V(l,s),nt(s,e,s)}function y(l,e,c){const s=c??new g(4);return yt(l)>e?St(l,e,s):it(l,s)}function D(l,e,c){const s=c??new g(4);return tt(l,e,.5,s)}return{create:w,fromValues:A,set:P,ceil:S,floor:z,round:b,clamp:O,add:B,addScaled:W,subtract:N,sub:q,equalsApproximately:j,equals:K,lerp:tt,lerpV:C,max:gt,min:J,mulScalar:nt,scale:et,divScalar:ht,inverse:lt,invert:pt,dot:xt,length:yt,len:mt,lengthSq:ot,lenSq:vt,distance:$,dist:H,distanceSq:st,distSq:G,normalize:V,negate:X,copy:it,clone:Tt,multiply:Q,mul:rt,divide:dt,div:bt,zero:ct,transformMat4:Mt,setLength:St,truncate:y,midpoint:D}}const ie=new Map;function me(g){let w=ie.get(g);return w||(w=ye(g),ie.set(g,w)),w}function Qt(g,w,A,P,S,z){return{mat3:he(g),mat4:we(w),quat:xe(A),vec2:ce(P),vec3:kt(S),vec4:me(z)}}const{mat4:Vt,vec3:Zt}=Qt(Float32Array,Float32Array,Float32Array,Float32Array,Float32Array,Float32Array);Qt(Float64Array,Float64Array,Float64Array,Float64Array,Float64Array,Float64Array);Qt(ue,Array,Array,Array,Array,Array);class ve{device;format;uniformBuffer;tileTexture;tileSampler;lightUniformBuffer;sphereUniformBuffer;shadowUniformBuffer;positionBuffer;indexBuffer;vertexCount;pipeline;constructor(w,A,P,S,z,b,O,B){this.device=w,this.format=A,this.uniformBuffer=P,this.tileTexture=S,this.tileSampler=z,this.lightUniformBuffer=b,this.sphereUniformBuffer=O,this.shadowUniformBuffer=B,this.createGeometry(),this.createPipeline()}createGeometry(){function w(b){return[(b&1)*2-1,(b&2)-1,(b&4)/2-1]}const A=[[0,4,2,6,-1,0,0],[1,3,5,7,1,0,0],[2,6,3,7,0,1,0],[0,2,1,3,0,0,-1],[4,5,6,7,0,0,1]],P=[],S=[];let z=0;for(const b of A){const O=z;for(let B=0;B<4;B++){const W=b[B],N=w(W);P.push(...N),z++}S.push(O+0,O+1,O+2),S.push(O+2,O+1,O+3)}this.vertexCount=S.length,this.positionBuffer=this.device.createBuffer({label:"Pool Vertex Buffer",size:P.length*4,usage:GPUBufferUsage.VERTEX,mappedAtCreation:!0}),new Float32Array(this.positionBuffer.getMappedRange()).set(P),this.positionBuffer.unmap(),this.indexBuffer=this.device.createBuffer({label:"Pool Index Buffer",size:S.length*4,usage:GPUBufferUsage.INDEX,mappedAtCreation:!0}),new Uint32Array(this.indexBuffer.getMappedRange()).set(S),this.indexBuffer.unmap()}createPipeline(){const w=this.device.createShaderModule({label:"Pool Shader",code:`
        // Common uniforms: camera matrices and eye position
        struct Uniforms {
          modelViewProjectionMatrix : mat4x4f,
          eyePosition : vec3f,
        }
        @binding(0) @group(0) var<uniform> uniforms : Uniforms;
        @binding(1) @group(0) var tileSampler : sampler;
        @binding(2) @group(0) var tileTexture : texture_2d<f32>;

        // Light direction for caustic calculations
        struct LightUniforms {
           direction : vec3f,
        }
        @binding(3) @group(0) var<uniform> light : LightUniforms;

        // Sphere position for shadow/AO calculations
        struct SphereUniforms {
          center : vec3f,
          radius : f32,
        }
        @binding(4) @group(0) var<uniform> sphere : SphereUniforms;

        // Shadow toggle flags for different shadow types
        struct ShadowUniforms {
            rim : f32,      // Rim shadow at water edge
            sphere : f32,   // Sphere ambient occlusion
            ao : f32,       // Pool corner ambient occlusion
        }
        @binding(8) @group(0) var<uniform> shadows : ShadowUniforms;

        // Water simulation textures
        @binding(5) @group(0) var waterSampler : sampler;
        @binding(6) @group(0) var waterTexture : texture_2d<f32>;   // Water height/normals
        @binding(7) @group(0) var causticTexture : texture_2d<f32>; // Pre-computed caustics

        struct VertexOutput {
          @builtin(position) position : vec4f,
          @location(0) localPos : vec3f,
        }

        /**
         * Ray-box intersection test for rim shadow calculation.
         * Returns (tNear, tFar) - entry and exit distances along ray.
         */
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

          // Transform Y coordinate to create pool depth
          // Maps Y from [-1, 1] to pool depth range
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

          // Sample tile texture based on which face we're rendering
          // Use different coordinate pairs for different wall orientations
          if (abs(point.x) > 0.999) {
            // X-facing walls: use YZ coordinates
            wallColor = textureSampleLevel(tileTexture, tileSampler, point.yz * 0.5 + vec2f(1.0, 0.5), 0.0).rgb;
          } else if (abs(point.z) > 0.999) {
            // Z-facing walls: use YX coordinates
            wallColor = textureSampleLevel(tileTexture, tileSampler, point.yx * 0.5 + vec2f(1.0, 0.5), 0.0).rgb;
          } else {
            // Floor: use XZ coordinates
            wallColor = textureSampleLevel(tileTexture, tileSampler, point.xz * 0.5 + 0.5, 0.0).rgb;
          }

          // Physical constants for light refraction
          let IOR_AIR = 1.0;
          let IOR_WATER = 1.333;
          let poolHeight = 1.0;

          // Determine surface normal based on face
          var normal = vec3f(0.0, 1.0, 0.0);
          if (abs(point.x) > 0.999) { normal = vec3f(-point.x, 0.0, 0.0); }
          else if (abs(point.z) > 0.999) { normal = vec3f(0.0, 0.0, -point.z); }

          var scale = 0.5; // Base ambient light level

          // Pool ambient occlusion - darker in corners
          let poolAO = 1.0 / length(point);
          scale *= mix(1.0, poolAO, shadows.ao);

          // Sphere ambient occlusion - darker near sphere
          let dist = length(point - sphere.center) / sphere.radius;
          let sphereAO = 1.0 - 0.9 / pow(max(0.0, dist), 4.0);
          scale *= mix(1.0, sphereAO, shadows.sphere);

          // Calculate refracted light direction (Snell's law)
          let refractedLight = -refract(-light.direction, vec3f(0.0, 1.0, 0.0), IOR_AIR / IOR_WATER);

          // Basic diffuse lighting
          let diffuse = max(0.0, dot(refractedLight, normal));

          // Sample water height at this XZ position
          let waterInfo = textureSampleLevel(waterTexture, waterSampler, point.xz * 0.5 + 0.5, 0.0);

          if (point.y < waterInfo.r) {
             // UNDERWATER: Apply caustic lighting
             // Project caustic UV based on refracted light direction
             let causticUV = 0.75 * (point.xz - point.y * refractedLight.xz / refractedLight.y) * 0.5 + 0.5;
             let caustic = textureSampleLevel(causticTexture, tileSampler, causticUV, 0.0);

             var intensity = caustic.r;       // Caustic brightness
             var sphereShadow = caustic.g;    // Sphere shadow in caustics

             // Fill black void outside caustic mesh with ambient light when rim shadow is off
             if (shadows.rim < 0.5 && intensity < 0.001) {
                 intensity = 0.2;
                 sphereShadow = 1.0;
             }

             scale += diffuse * intensity * 2.0 * sphereShadow;
          } else {
             // ABOVE WATER: Apply rim shadow at water edge
             let t = intersectCube(point, refractedLight, vec3f(-1.0, -poolHeight, -1.0), vec3f(1.0, 2.0, 1.0));
             let shadowFactor = 1.0 / (1.0 + exp(-200.0 / (1.0 + 10.0 * (t.y - t.x)) * (point.y + refractedLight.y * t.y - 2.0 / 12.0)));
             scale += diffuse * mix(1.0, shadowFactor, shadows.rim) * 0.5;
          }

          var finalColor = wallColor * scale;

          // Apply underwater color tint
          if (point.y < waterInfo.r) {
             let underwaterColor = vec3f(0.4, 0.9, 1.0);
             finalColor *= underwaterColor * 1.2;
          }

          return vec4f(finalColor, 1.0);
        }
      `});this.pipeline=this.device.createRenderPipeline({label:"Pool Pipeline",layout:"auto",vertex:{module:w,entryPoint:"vs_main",buffers:[{arrayStride:12,attributes:[{shaderLocation:0,offset:0,format:"float32x3"}]}]},fragment:{module:w,entryPoint:"fs_main",targets:[{format:this.format}]},primitive:{topology:"triangle-list",cullMode:"back"},depthStencil:{depthWriteEnabled:!0,depthCompare:"less",format:"depth24plus"}})}render(w,A,P,S){const z=this.device.createBindGroup({layout:this.pipeline.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:this.uniformBuffer}},{binding:1,resource:this.tileSampler},{binding:2,resource:this.tileTexture.createView()},{binding:3,resource:{buffer:this.lightUniformBuffer}},{binding:4,resource:{buffer:this.sphereUniformBuffer}},{binding:5,resource:P},{binding:6,resource:A.createView()},{binding:7,resource:S.createView()},{binding:8,resource:{buffer:this.shadowUniformBuffer}}]});w.setPipeline(this.pipeline),w.setBindGroup(0,z),w.setVertexBuffer(0,this.positionBuffer),w.setIndexBuffer(this.indexBuffer,"uint32"),w.drawIndexed(this.vertexCount)}}class Me{device;format;commonUniformBuffer;sphereUniformBuffer;lightUniformBuffer;positionBuffer;indexBuffer;vertexCount;pipeline;constructor(w,A,P,S,z){this.device=w,this.format=A,this.commonUniformBuffer=P,this.sphereUniformBuffer=z,this.lightUniformBuffer=S,this.createGeometry(),this.createPipeline()}update(w,A){const P=new Float32Array([...w,A]);this.device.queue.writeBuffer(this.sphereUniformBuffer,0,P)}createGeometry(){class A{unique;map;constructor(){this.unique=[],this.map=new Map}add(W){const N=W.join(",");return this.map.has(N)||(this.map.set(N,this.unique.length),this.unique.push(W)),this.map.get(N)}}function P(B){return[(B&1)*2-1,(B&2)-1,(B&4)/2-1]}function S(B){return B+(B-B*B)/2}const z=new A,b=[];for(let B=0;B<8;B++){const W=P(B),N=W[0]*W[1]*W[2]>0,q=[];for(let j=0;j<=10;j++)for(let K=0;j+K<=10;K++){const tt=j/10,C=K/10,gt=(10-j-K)/10,J=[S(tt),S(C),S(gt)],nt=Math.sqrt(J[0]*J[0]+J[1]*J[1]+J[2]*J[2]),et=[J[0]/nt*W[0],J[1]/nt*W[1],J[2]/nt*W[2]];q.push(z.add(et))}for(let j=0;j<=10;j++)if(j>0)for(let K=0;j+K<=10;K++){const tt=(j-1)*11+(j-1-(j-1)*(j-1))/2+K,C=j*11+(j-j*j)/2+K;N?b.push(q[tt],q[C],q[tt+1]):b.push(q[tt],q[tt+1],q[C]),j+K<10&&(N?b.push(q[C],q[C+1],q[tt+1]):b.push(q[C],q[tt+1],q[C+1]))}}this.vertexCount=b.length;const O=[];for(const B of z.unique)O.push(...B);this.positionBuffer=this.device.createBuffer({label:"Sphere Vertex Buffer",size:O.length*4,usage:GPUBufferUsage.VERTEX,mappedAtCreation:!0}),new Float32Array(this.positionBuffer.getMappedRange()).set(O),this.positionBuffer.unmap(),this.indexBuffer=this.device.createBuffer({label:"Sphere Index Buffer",size:b.length*4,usage:GPUBufferUsage.INDEX,mappedAtCreation:!0}),new Uint32Array(this.indexBuffer.getMappedRange()).set(b),this.indexBuffer.unmap()}createPipeline(){const w=this.device.createShaderModule({label:"Sphere Shader",code:`
        // Camera uniforms: view-projection matrix
        struct CommonUniforms {
          viewProjectionMatrix : mat4x4f,
        }
        @binding(0) @group(0) var<uniform> commonUniforms : CommonUniforms;

        // Sphere transform: center position and radius
        struct SphereUniforms {
          center : vec3f,
          radius : f32,
        }
        @binding(1) @group(0) var<uniform> sphereUniforms : SphereUniforms;

        // Light direction for shading calculations
        struct LightUniforms {
           direction : vec3f,
        }
        @binding(2) @group(0) var<uniform> light : LightUniforms;

        // Textures for water state and caustics
        @binding(3) @group(0) var waterSampler : sampler;
        @binding(4) @group(0) var waterTexture : texture_2d<f32>;
        @binding(5) @group(0) var causticTexture : texture_2d<f32>;

        struct VertexOutput {
          @builtin(position) position : vec4f,
          @location(0) localPos : vec3f,  // Position on unit sphere
          @location(1) worldPos : vec3f,  // Position in world space
        }

        @vertex
        fn vs_main(@location(0) position : vec3f) -> VertexOutput {
          var output : VertexOutput;

          // Transform unit sphere vertex to world space
          let worldPos = sphereUniforms.center + position * sphereUniforms.radius;
          output.position = commonUniforms.viewProjectionMatrix * vec4f(worldPos, 1.0);
          output.localPos = position;
          output.worldPos = worldPos;
          return output;
        }

        @fragment
        fn fs_main(@location(0) localPos : vec3f, @location(1) worldPos : vec3f) -> @location(0) vec4f {
          // Physical constants for light refraction
          let IOR_AIR = 1.0;
          let IOR_WATER = 1.333;

          // Base sphere color (gray)
          var color = vec3f(0.5);

          let sphereRadius = sphereUniforms.radius;
          let point = worldPos;

          // Distance-based darkening near pool boundaries
          // Creates ambient occlusion effect near walls and floor
          let dist_x = (1.0 + sphereRadius - abs(point.x)) / sphereRadius;
          let dist_z = (1.0 + sphereRadius - abs(point.z)) / sphereRadius;
          let dist_y = (point.y + 1.0 + sphereRadius) / sphereRadius;

          // Apply inverse-cube falloff for soft shadows
          color *= 1.0 - 0.9 / pow(max(0.1, dist_x), 3.0);
          color *= 1.0 - 0.9 / pow(max(0.1, dist_z), 3.0);
          color *= 1.0 - 0.9 / pow(max(0.1, dist_y), 3.0);

          // Calculate refracted light direction (Snell's law)
          let refractedLight = refract(-light.direction, vec3f(0.0, 1.0, 0.0), IOR_AIR / IOR_WATER);
          let sphereNormal = normalize(localPos);

          // Basic diffuse lighting
          var diffuse = max(0.0, dot(-refractedLight, sphereNormal)) * 0.5;

          // Sample water height at sphere's XZ position
          let waterInfo = textureSampleLevel(waterTexture, waterSampler, point.xz * 0.5 + 0.5, 0.0);

          // Apply caustics when underwater
          if (point.y < waterInfo.r) {
             // Project caustic UV based on refracted light direction
             let causticUV = 0.75 * (point.xz - point.y * refractedLight.xz / refractedLight.y) * 0.5 + 0.5;
             let caustic = textureSampleLevel(causticTexture, waterSampler, causticUV, 0.0);
             diffuse *= caustic.r * 4.0; // Amplify caustic brightness
          }

          color += diffuse;

          // Apply underwater color tint
          if (point.y < waterInfo.r) {
             let underwaterColor = vec3f(0.4, 0.9, 1.0);
             color *= underwaterColor * 1.2;
          }

          return vec4f(color, 1.0);
        }
      `});this.pipeline=this.device.createRenderPipeline({label:"Sphere Pipeline",layout:"auto",vertex:{module:w,entryPoint:"vs_main",buffers:[{arrayStride:12,attributes:[{shaderLocation:0,offset:0,format:"float32x3"}]}]},fragment:{module:w,entryPoint:"fs_main",targets:[{format:this.format}]},primitive:{topology:"triangle-list",cullMode:"back"},depthStencil:{depthWriteEnabled:!0,depthCompare:"less",format:"depth24plus"}})}render(w,A,P,S){const z=this.device.createBindGroup({layout:this.pipeline.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:this.commonUniformBuffer}},{binding:1,resource:{buffer:this.sphereUniformBuffer}},{binding:2,resource:{buffer:this.lightUniformBuffer}},{binding:3,resource:P},{binding:4,resource:A.createView()},{binding:5,resource:S.createView()}]});w.setPipeline(this.pipeline),w.setBindGroup(0,z),w.setVertexBuffer(0,this.positionBuffer),w.setIndexBuffer(this.indexBuffer,"uint32"),w.drawIndexed(this.vertexCount)}}class Se{device;width;height;commonUniformBuffer;lightUniformBuffer;sphereUniformBuffer;shadowUniformBuffer;tileTexture;tileSampler;skyTexture;skySampler;textureA;textureB;causticsTexture;sampler;dropPipeline;updatePipeline;normalPipeline;spherePipeline;positionBuffer;indexBuffer;vertexCount;surfaceBindGroupLayout;surfacePipelineAbove;surfacePipelineUnder;causticsPipeline;constructor(w,A,P,S,z,b,O,B,W,N,q){this.device=w,this.width=A,this.height=P,this.commonUniformBuffer=S,this.lightUniformBuffer=z,this.sphereUniformBuffer=b,this.shadowUniformBuffer=O,this.tileTexture=B,this.tileSampler=W,this.skyTexture=N,this.skySampler=q,this.textureA=this.createTexture(),this.textureB=this.createTexture(),this.causticsTexture=this.device.createTexture({size:[1024,1024],format:"rgba8unorm",usage:GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.RENDER_ATTACHMENT}),this.sampler=w.createSampler({magFilter:"linear",minFilter:"linear",addressModeU:"clamp-to-edge",addressModeV:"clamp-to-edge"}),this.createPipelines(),this.createSurfaceMesh(),this.createSurfacePipeline(),this.createCausticsPipeline()}createTexture(){const w=this.device.features.has("float32-filterable")?"rgba32float":"rgba16float";return this.device.createTexture({size:[this.width,this.height],format:w,usage:GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.RENDER_ATTACHMENT})}createPipelines(){const w=this.device.features.has("float32-filterable")?"rgba32float":"rgba16float",A=`
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
    `;this.dropPipeline=this.createPipeline("Drop",A,`
      @group(0) @binding(0) var waterTexture : texture_2d<f32>;
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
    `,32,w),this.updatePipeline=this.createPipeline("Update",A,`
      @group(0) @binding(0) var waterTexture : texture_2d<f32>;
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
    `,16,w),this.normalPipeline=this.createPipeline("Normal",A,`
      @group(0) @binding(0) var waterTexture : texture_2d<f32>;
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
    `,16,w),this.spherePipeline=this.createPipeline("Sphere",A,`
      @group(0) @binding(0) var waterTexture : texture_2d<f32>;
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
    `,32,w)}createPipeline(w,A,P,S,z){const b=this.device.createShaderModule({label:w+" Module",code:A+P});return{pipeline:this.device.createRenderPipeline({label:w+" Pipeline",layout:"auto",vertex:{module:b,entryPoint:"vs_main"},fragment:{module:b,entryPoint:"fs_main",targets:[{format:z}]},primitive:{topology:"triangle-list"}}),uniformSize:S,uniformBuffer:this.device.createBuffer({size:S,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST})}}runPipeline(w,A){this.device.queue.writeBuffer(w.uniformBuffer,0,A);const P=this.device.createBindGroup({layout:w.pipeline.getBindGroupLayout(0),entries:[{binding:0,resource:this.textureA.createView()},{binding:1,resource:this.sampler},{binding:2,resource:{buffer:w.uniformBuffer}}]}),S=this.device.createCommandEncoder(),z=S.beginRenderPass({colorAttachments:[{view:this.textureB.createView(),loadOp:"clear",storeOp:"store",clearValue:{r:0,g:0,b:0,a:0}}]});z.setPipeline(w.pipeline),z.setBindGroup(0,P),z.draw(6),z.end(),this.device.queue.submit([S.finish()]);const b=this.textureA;this.textureA=this.textureB,this.textureB=b}addDrop(w,A,P,S){const z=new Float32Array(4);z[0]=w,z[1]=A,z[2]=P,z[3]=S,this.runPipeline(this.dropPipeline,z)}stepSimulation(){const w=new Float32Array(2);w[0]=1/this.width,w[1]=1/this.height,this.runPipeline(this.updatePipeline,w)}updateNormals(){const w=new Float32Array(2);w[0]=1/this.width,w[1]=1/this.height,this.runPipeline(this.normalPipeline,w)}moveSphere(w,A,P){const S=new Float32Array(8);S[0]=w[0],S[1]=w[1],S[2]=w[2],S[3]=P,S[4]=A[0],S[5]=A[1],S[6]=A[2],S[7]=0,this.runPipeline(this.spherePipeline,S)}createSurfaceMesh(){const A=[],P=[];for(let S=0;S<=200;S++){const z=S/200;for(let b=0;b<=200;b++){const O=b/200;A.push(2*O-1,2*z-1,0)}}for(let S=0;S<200;S++)for(let z=0;z<200;z++){const b=z+S*201;P.push(b,b+1,b+200+1),P.push(b+200+1,b+1,b+200+2)}this.vertexCount=P.length,this.positionBuffer=this.device.createBuffer({label:"Water Surface Vertices",size:A.length*4,usage:GPUBufferUsage.VERTEX,mappedAtCreation:!0}),new Float32Array(this.positionBuffer.getMappedRange()).set(A),this.positionBuffer.unmap(),this.indexBuffer=this.device.createBuffer({label:"Water Surface Indices",size:P.length*4,usage:GPUBufferUsage.INDEX,mappedAtCreation:!0}),new Uint32Array(this.indexBuffer.getMappedRange()).set(P),this.indexBuffer.unmap()}createSurfacePipeline(){const w=S=>`
        // Common camera uniforms
        struct CommonUniforms {
          viewProjectionMatrix : mat4x4f,
          eyePosition : vec3f,
        }
        @binding(0) @group(0) var<uniform> commonUniforms : CommonUniforms;

        // Light direction
        struct LightUniforms {
           direction : vec3f,
        }
        @binding(1) @group(0) var<uniform> light : LightUniforms;

        // Sphere for ray intersection
        struct SphereUniforms {
          center : vec3f,
          radius : f32,
        }
        @binding(2) @group(0) var<uniform> sphere : SphereUniforms;

        // Textures for rendering
        @binding(3) @group(0) var tileSampler : sampler;
        @binding(4) @group(0) var tileTexture : texture_2d<f32>;
        @binding(5) @group(0) var waterSampler : sampler;
        @binding(6) @group(0) var waterTexture : texture_2d<f32>;
        @binding(7) @group(0) var skySampler : sampler;
        @binding(8) @group(0) var skyTexture : texture_cube<f32>;
        @binding(9) @group(0) var causticTexture : texture_2d<f32>;

        // Physical constants
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

          // Sample water height at this vertex position
          let uv = position.xy * 0.5 + 0.5;
          let info = textureSampleLevel(waterTexture, waterSampler, uv, 0.0);

          // Transform from XY plane to XZ plane with height from texture
          var pos = position.xzy;
          pos.y = info.r;

          output.worldPos = pos;
          output.position = commonUniforms.viewProjectionMatrix * vec4f(pos, 1.0);

          return output;
        }

        // Ray-box intersection for pool walls
        fn intersectCube(origin: vec3f, ray: vec3f, cubeMin: vec3f, cubeMax: vec3f) -> vec2f {
          let tMin = (cubeMin - origin) / ray;
          let tMax = (cubeMax - origin) / ray;
          let t1 = min(tMin, tMax);
          let t2 = max(tMin, tMax);
          let tNear = max(max(t1.x, t1.y), t1.z);
          let tFar = min(min(t2.x, t2.y), t2.z);
          return vec2f(tNear, tFar);
        }

        // Ray-sphere intersection
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
            return 1.0e6; // No hit
        }

        // Calculates sphere color at hit point (same as sphere.ts shader)
        fn getSphereColor(point: vec3f, IOR_AIR: f32, IOR_WATER: f32) -> vec3f {
            var color = vec3f(0.5);
            let sphereRadius = sphere.radius;

            // Distance-based darkening near pool walls
            color *= 1.0 - 0.9 / pow((1.0 + sphereRadius - abs(point.x)) / sphereRadius, 3.0);
            color *= 1.0 - 0.9 / pow((1.0 + sphereRadius - abs(point.z)) / sphereRadius, 3.0);
            color *= 1.0 - 0.9 / pow((point.y + 1.0 + sphereRadius) / sphereRadius, 3.0);

            // Diffuse lighting with caustics
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

        // Calculates pool wall color at hit point
        fn getWallColor(point: vec3f, IOR_AIR: f32, IOR_WATER: f32, poolHeight: f32) -> vec3f {
            var wallColor : vec3f;
            var normal = vec3f(0.0, 1.0, 0.0);

            // Sample tile texture based on wall orientation
            if (abs(point.x) > 0.999) {
                wallColor = textureSampleLevel(tileTexture, tileSampler, point.yz * 0.5 + vec2f(1.0, 0.5), 0.0).rgb;
                normal = vec3f(-point.x, 0.0, 0.0);
            } else if (abs(point.z) > 0.999) {
                wallColor = textureSampleLevel(tileTexture, tileSampler, point.yx * 0.5 + vec2f(1.0, 0.5), 0.0).rgb;
                normal = vec3f(0.0, 0.0, -point.z);
            } else {
                wallColor = textureSampleLevel(tileTexture, tileSampler, point.xz * 0.5 + 0.5, 0.0).rgb;
            }

            // Ambient occlusion
            var scale = 0.5;
            scale /= length(point);
            scale *= 1.0 - 0.9 / pow(length(point - sphere.center) / sphere.radius, 4.0);

            // Lighting with caustics or rim shadow
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

        // Traces a ray from water surface to find color
        fn getSurfaceRayColor(origin: vec3f, ray: vec3f, waterColor: vec3f) -> vec3f {
            var color : vec3f;
            let poolHeight = 1.0;

            // Check sphere intersection first
            let q = intersectSphere(origin, ray, sphere.center, sphere.radius);
            if (q < 1.0e6) {
                color = getSphereColor(origin + ray * q, IOR_AIR, IOR_WATER);
            } else if (ray.y < 0.0) {
                // Ray going down - hit pool walls/floor
                let t = intersectCube(origin, ray, vec3f(-1.0, -poolHeight, -1.0), vec3f(1.0, 2.0, 1.0));
                color = getWallColor(origin + ray * t.y, IOR_AIR, IOR_WATER, poolHeight);
            } else {
                // Ray going up - hit walls or sky
                let t = intersectCube(origin, ray, vec3f(-1.0, -poolHeight, -1.0), vec3f(1.0, 2.0, 1.0));
                let hit = origin + ray * t.y;
                if (hit.y < 2.0 / 12.0) {
                    color = getWallColor(hit, IOR_AIR, IOR_WATER, poolHeight);
                } else {
                    // Sample skybox
                    color = textureSampleLevel(skyTexture, skySampler, ray, 0.0).rgb;
                    // Add sun specular highlight
                    let sunDir = normalize(light.direction);
                    let spec = pow(max(0.0, dot(sunDir, ray)), 5000.0);
                    color += vec3f(spec) * vec3f(10.0, 8.0, 6.0);
                }
            }

            // Apply underwater tint for downward rays
            if (ray.y < 0.0) {
                color *= waterColor;
            }
            return color;
        }

        @fragment
        fn fs_main(@location(0) worldPos : vec3f) -> @location(0) vec4f {
            // Sample normal with UV refinement for smooth appearance
            var uv = worldPos.xz * 0.5 + 0.5;
            var info = textureSampleLevel(waterTexture, waterSampler, uv, 0.0);

            // Iteratively refine UV based on normal offset
            for (var i = 0; i < 5; i++) {
                uv += info.ba * 0.005;
                info = textureSampleLevel(waterTexture, waterSampler, uv, 0.0);
            }

            // Reconstruct normal from BA channels
            let ba = vec2f(info.b, info.a);
            var normal = vec3f(info.b, sqrt(max(0.0, 1.0 - dot(ba, ba))), info.a);

            // Ray from camera to water surface
            let incomingRay = normalize(worldPos - commonUniforms.eyePosition);

            ${S?`
            // UNDERWATER VIEW: Looking up at water surface
            normal = -normal; // Flip normal for underwater
            let reflectedRay = reflect(incomingRay, normal);
            let refractedRay = refract(incomingRay, normal, IOR_WATER / IOR_AIR);
            let fresnel = mix(0.5, 1.0, pow(1.0 - dot(normal, -incomingRay), 3.0));

            let reflectedColor = getSurfaceRayColor(worldPos, reflectedRay, UNDERwaterColor);
            let refractedColor = getSurfaceRayColor(worldPos, refractedRay, vec3f(1.0)) * vec3f(0.8, 1.0, 1.1);

            let finalColor = mix(reflectedColor, refractedColor, (1.0 - fresnel) * length(refractedRay));
            `:`
            // ABOVE WATER VIEW: Looking down at water surface
            let reflectedRay = reflect(incomingRay, normal);
            let refractedRay = refract(incomingRay, normal, IOR_AIR / IOR_WATER);
            let fresnel = mix(0.25, 1.0, pow(1.0 - dot(normal, -incomingRay), 3.0));

            let reflectedColor = getSurfaceRayColor(worldPos, reflectedRay, ABOVewaterColor);
            let refractedColor = getSurfaceRayColor(worldPos, refractedRay, ABOVewaterColor);

            let finalColor = mix(refractedColor, reflectedColor, fresnel);
            `}

            return vec4f(finalColor, 1.0);
        }
        `;this.surfaceBindGroupLayout=this.device.createBindGroupLayout({label:"Water Surface BindGroupLayout",entries:[{binding:0,visibility:GPUShaderStage.VERTEX|GPUShaderStage.FRAGMENT,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.FRAGMENT,buffer:{type:"uniform"}},{binding:2,visibility:GPUShaderStage.FRAGMENT,buffer:{type:"uniform"}},{binding:3,visibility:GPUShaderStage.FRAGMENT,sampler:{}},{binding:4,visibility:GPUShaderStage.FRAGMENT,texture:{}},{binding:5,visibility:GPUShaderStage.VERTEX|GPUShaderStage.FRAGMENT,sampler:{}},{binding:6,visibility:GPUShaderStage.VERTEX|GPUShaderStage.FRAGMENT,texture:{}},{binding:7,visibility:GPUShaderStage.FRAGMENT,sampler:{}},{binding:8,visibility:GPUShaderStage.FRAGMENT,texture:{viewDimension:"cube"}},{binding:9,visibility:GPUShaderStage.FRAGMENT,texture:{}}]});const A=this.device.createPipelineLayout({label:"Water Surface PipelineLayout",bindGroupLayouts:[this.surfaceBindGroupLayout]}),P=(S,z,b)=>{const O=this.device.createShaderModule({label:`${S} Shader`,code:w(z)});return this.device.createRenderPipeline({label:S,layout:A,vertex:{module:O,entryPoint:"vs_main",buffers:[{arrayStride:12,attributes:[{shaderLocation:0,offset:0,format:"float32x3"}]}]},fragment:{module:O,entryPoint:"fs_main",targets:[{format:navigator.gpu.getPreferredCanvasFormat()}]},primitive:{topology:"triangle-list",cullMode:b},depthStencil:{depthWriteEnabled:!0,depthCompare:"less",format:"depth24plus"}})};this.surfacePipelineAbove=P("Water Surface Above Pipeline",!1,"front"),this.surfacePipelineUnder=P("Water Surface Under Pipeline",!0,"back")}renderSurface(w){const A=this.device.createBindGroup({layout:this.surfaceBindGroupLayout,entries:[{binding:0,resource:{buffer:this.commonUniformBuffer}},{binding:1,resource:{buffer:this.lightUniformBuffer}},{binding:2,resource:{buffer:this.sphereUniformBuffer}},{binding:3,resource:this.tileSampler},{binding:4,resource:this.tileTexture.createView()},{binding:5,resource:this.sampler},{binding:6,resource:this.textureA.createView()},{binding:7,resource:this.skySampler},{binding:8,resource:this.skyTexture.createView({dimension:"cube"})},{binding:9,resource:this.causticsTexture.createView()}]});w.setPipeline(this.surfacePipelineAbove),w.setBindGroup(0,A),w.setVertexBuffer(0,this.positionBuffer),w.setIndexBuffer(this.indexBuffer,"uint32"),w.drawIndexed(this.vertexCount),w.setPipeline(this.surfacePipelineUnder),w.setBindGroup(0,A),w.drawIndexed(this.vertexCount)}createCausticsPipeline(){const w=this.device.createShaderModule({label:"Caustics Shader",code:`
        // Light direction for refraction calculation
        struct LightUniforms {
           direction : vec3f,
        }
        @binding(0) @group(0) var<uniform> light : LightUniforms;

        // Sphere for shadow calculation
        struct SphereUniforms {
          center : vec3f,
          radius : f32,
        }
        @binding(1) @group(0) var<uniform> sphere : SphereUniforms;

        // Shadow toggle flags
        struct ShadowUniforms {
            rim : f32,
            sphere : f32,
            ao : f32,
        }
        @binding(4) @group(0) var<uniform> shadows : ShadowUniforms;

        // Water simulation texture
        @binding(2) @group(0) var waterSampler : sampler;
        @binding(3) @group(0) var waterTexture : texture_2d<f32>;

        struct VertexOutput {
          @builtin(position) position : vec4f,
          @location(0) oldPos : vec3f,  // Where ray would hit with flat water
          @location(1) newPos : vec3f,  // Where ray hits with displaced water
          @location(2) ray : vec3f,     // Refracted ray direction
        }

        // Ray-box intersection
        fn intersectCube(origin: vec3f, ray: vec3f, cubeMin: vec3f, cubeMax: vec3f) -> vec2f {
          let tMin = (cubeMin - origin) / ray;
          let tMax = (cubeMax - origin) / ray;
          let t1 = min(tMin, tMax);
          let t2 = max(tMin, tMax);
          let tNear = max(max(t1.x, t1.y), t1.z);
          let tFar = min(min(t2.x, t2.y), t2.z);
          return vec2f(tNear, tFar);
        }

        // Projects ray from water surface to pool floor
        fn project(origin: vec3f, ray: vec3f, refractedLight: vec3f) -> vec3f {
            let poolHeight = 1.0;
            var point = origin;

            // First find where ray exits pool volume
            let tcube = intersectCube(origin, ray, vec3f(-1.0, -poolHeight, -1.0), vec3f(1.0, 2.0, 1.0));
            point += ray * tcube.y;

            // Then project down to floor plane (y = -1)
            let tplane = (-point.y - 1.0) / refractedLight.y;
            return point + refractedLight * tplane;
        }

        @vertex
        fn vs_main(@location(0) position : vec3f) -> VertexOutput {
          var output : VertexOutput;
          let uv = position.xy * 0.5 + 0.5;

          // Sample water height and normal
          let info = textureSampleLevel(waterTexture, waterSampler, uv, 0.0);

          // Reconstruct normal (scaled down for stability)
          let ba = info.ba * 0.5;
          let normal = vec3f(ba.x, sqrt(max(0.0, 1.0 - dot(ba, ba))), ba.y);

          // Calculate refracted light directions
          let IOR_AIR = 1.0;
          let IOR_WATER = 1.333;
          let lightDir = normalize(light.direction);

          // Flat water refraction (reference)
          let refractedLight = refract(-lightDir, vec3f(0.0, 1.0, 0.0), IOR_AIR / IOR_WATER);
          // Displaced water refraction (actual)
          let ray = refract(-lightDir, normal, IOR_AIR / IOR_WATER);

          // Water surface position
          let pos = vec3f(position.x, 0.0, position.y);

          // Project both rays to pool floor
          output.oldPos = project(pos, refractedLight, refractedLight);
          output.newPos = project(pos + vec3f(0.0, info.r, 0.0), ray, refractedLight);
          output.ray = ray;

          // Position in caustics texture space
          let projectedPos = 0.75 * (output.newPos.xz - output.newPos.y * refractedLight.xz / refractedLight.y);
          output.position = vec4f(projectedPos.x, -projectedPos.y, 0.0, 1.0);

          return output;
        }

        @fragment
        fn fs_main(@location(0) oldPos : vec3f, @location(1) newPos : vec3f, @location(2) ray : vec3f) -> @location(0) vec4f {
            // Calculate intensity from area ratio using screen-space derivatives
            // Light converges where triangles shrink, diverges where they grow
            let oldArea = length(dpdx(oldPos)) * length(dpdy(oldPos));
            let newArea = length(dpdx(newPos)) * length(dpdy(newPos));

            var intensity = oldArea / newArea * 0.2;

            // Calculate sphere shadow
            let IOR_AIR = 1.0;
            let IOR_WATER = 1.333;
            let lightDir = normalize(light.direction);
            let refractedLight = refract(-lightDir, vec3f(0.0, 1.0, 0.0), IOR_AIR / IOR_WATER);

            // Sphere shadow using distance to ray
            let dir = (sphere.center - newPos) / sphere.radius;
            let area = cross(dir, refractedLight);
            var shadow = dot(area, area);
            let dist = dot(dir, -refractedLight);

            shadow = 1.0 + (shadow - 1.0) / (0.05 + dist * 0.025);
            shadow = clamp(1.0 / (1.0 + exp(-shadow)), 0.0, 1.0);
            shadow = mix(1.0, shadow, clamp(dist * 2.0, 0.0, 1.0));
            shadow = mix(1.0, shadow, shadows.sphere);

            // Rim shadow at pool edges
            let poolHeight = 1.0;
            let t = intersectCube(newPos, -refractedLight, vec3f(-1.0, -poolHeight, -1.0), vec3f(1.0, 2.0, 1.0));
            let rimShadow = 1.0 / (1.0 + exp(-200.0 / (1.0 + 10.0 * (t.y - t.x)) * (newPos.y - refractedLight.y * t.y - 2.0 / 12.0)));
            intensity *= mix(1.0, rimShadow, shadows.rim);

            // R = caustic intensity, G = sphere shadow factor
            return vec4f(intensity, shadow, 0.0, 1.0);
        }
        `});this.causticsPipeline=this.device.createRenderPipeline({label:"Caustics Pipeline",layout:"auto",vertex:{module:w,entryPoint:"vs_main",buffers:[{arrayStride:12,attributes:[{shaderLocation:0,offset:0,format:"float32x3"}]}]},fragment:{module:w,entryPoint:"fs_main",targets:[{format:"rgba8unorm",blend:{color:{operation:"add",srcFactor:"one",dstFactor:"one"},alpha:{operation:"add",srcFactor:"one",dstFactor:"one"}}}]},primitive:{topology:"triangle-list"}})}updateCaustics(){const w=this.device.createBindGroup({layout:this.causticsPipeline.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:this.lightUniformBuffer}},{binding:1,resource:{buffer:this.sphereUniformBuffer}},{binding:2,resource:this.sampler},{binding:3,resource:this.textureA.createView()},{binding:4,resource:{buffer:this.shadowUniformBuffer}}]}),A=this.device.createCommandEncoder(),P=A.beginRenderPass({colorAttachments:[{view:this.causticsTexture.createView(),loadOp:"clear",storeOp:"store",clearValue:{r:0,g:0,b:0,a:0}}]});P.setPipeline(this.causticsPipeline),P.setBindGroup(0,w),P.setVertexBuffer(0,this.positionBuffer),P.setIndexBuffer(this.indexBuffer,"uint32"),P.drawIndexed(this.vertexCount),P.end(),this.device.queue.submit([A.finish()])}}class Z{x;y;z;constructor(w=0,A=0,P=0){this.x=w,this.y=A,this.z=P}negative(){return new Z(-this.x,-this.y,-this.z)}add(w){return w instanceof Z?new Z(this.x+w.x,this.y+w.y,this.z+w.z):new Z(this.x+w,this.y+w,this.z+w)}subtract(w){return w instanceof Z?new Z(this.x-w.x,this.y-w.y,this.z-w.z):new Z(this.x-w,this.y-w,this.z-w)}multiply(w){return w instanceof Z?new Z(this.x*w.x,this.y*w.y,this.z*w.z):new Z(this.x*w,this.y*w,this.z*w)}divide(w){return w instanceof Z?new Z(this.x/w.x,this.y/w.y,this.z/w.z):new Z(this.x/w,this.y/w,this.z/w)}dot(w){return this.x*w.x+this.y*w.y+this.z*w.z}cross(w){return new Z(this.y*w.z-this.z*w.y,this.z*w.x-this.x*w.z,this.x*w.y-this.y*w.x)}length(){return Math.sqrt(this.dot(this))}unit(){return this.divide(this.length())}min(){return Math.min(this.x,this.y,this.z)}max(){return Math.max(this.x,this.y,this.z)}toArray(){return[this.x,this.y,this.z]}clone(){return new Z(this.x,this.y,this.z)}static fromAngles(w,A){return new Z(Math.cos(A)*Math.cos(w),Math.sin(A),Math.cos(A)*Math.sin(w))}static lerp(w,A,P){return w.add(A.subtract(w).multiply(P))}static min(w,A){return new Z(Math.min(w.x,A.x),Math.min(w.y,A.y),Math.min(w.z,A.z))}static max(w,A){return new Z(Math.max(w.x,A.x),Math.max(w.y,A.y),Math.max(w.z,A.z))}}class De{t;hit;normal;constructor(w,A,P){this.t=w,this.hit=A,this.normal=P}}class $t{eye;viewport;invViewProj;ray00;ray10;ray01;ray11;constructor(w,A,P){this.viewport=P;const S=Vt.invert(w),z=Zt.transformMat4([0,0,0],S);this.eye=new Z(z[0],z[1],z[2]),this.invViewProj=Vt.invert(Vt.multiply(A,w));const[b,O,B,W]=P,N=b+B,q=O+W;this.ray00=this.unProject(b,O,1).subtract(this.eye),this.ray10=this.unProject(N,O,1).subtract(this.eye),this.ray01=this.unProject(b,q,1).subtract(this.eye),this.ray11=this.unProject(N,q,1).subtract(this.eye)}unProject(w,A,P){const[S,z,b,O]=this.viewport,B=(w-S)/b*2-1,W=(1-(A-z)/O)*2-1,N=Zt.transformMat4([B,W,P],this.invViewProj);return new Z(N[0],N[1],N[2])}getRayForPixel(w,A){const[P,S,z,b]=this.viewport,O=(w-P)/z,B=(A-S)/b,W=Z.lerp(this.ray00,this.ray10,O),N=Z.lerp(this.ray01,this.ray11,O);return Z.lerp(W,N,B).unit()}static hitTestSphere(w,A,P,S){const z=w.subtract(P),b=A.dot(A),O=2*A.dot(z),B=z.dot(z)-S*S,W=O*O-4*b*B;if(W>0){const N=(-O-Math.sqrt(W))/(2*b),q=w.add(A.multiply(N)),j=q.subtract(P).divide(S);return new De(N,q,j)}return null}}class Pe{device;constructor(w){this.device=w}async load(w){const A=["xpos","xneg","ypos","yneg","zpos","zneg"],P=await Promise.all(A.map(O=>fetch(w[O]).then(B=>B.blob()).then(B=>createImageBitmap(B)))),{width:S,height:z}=P[0],b=this.device.createTexture({size:[S,z,6],format:"rgba8unorm",usage:GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_DST|GPUTextureUsage.RENDER_ATTACHMENT});return P.forEach((O,B)=>{this.device.queue.copyExternalImageToTexture({source:O,flipY:!0},{texture:b,origin:[0,0,B]},{width:S,height:z})}),b}}var qt=(g=>(g[g.None=-1]="None",g[g.AddDrops=0]="AddDrops",g[g.OrbitCamera=1]="OrbitCamera",g[g.MoveSphere=2]="MoveSphere",g))(qt||{});async function Ae(){const g=navigator.gpu;if(!g){document.getElementById("loading").innerHTML="WebGPU not supported.";return}const w=await g.requestAdapter();if(!w){document.getElementById("loading").innerHTML="No WebGPU adapter found.";return}const A=[];w.features.has("float32-filterable")&&A.push("float32-filterable");const P=await w.requestDevice({requiredFeatures:A}),S=document.querySelector("canvas"),z=S.getContext("webgpu"),b=navigator.gpu.getPreferredCanvasFormat();z.configure({device:P,format:b,alphaMode:"premultiplied"});const O=document.getElementById("help"),B=window.devicePixelRatio||1;let W=performance.now();async function N(h){const a=await(await fetch(h)).blob(),r=await createImageBitmap(a),o=P.createTexture({label:h,size:[r.width,r.height],format:"rgba8unorm",usage:GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_DST|GPUTextureUsage.RENDER_ATTACHMENT});return P.queue.copyExternalImageToTexture({source:r,flipY:!0},{texture:o},{width:r.width,height:r.height}),o}const q="/webgpu-water/",j=await N(`${q}tiles.jpg`),K=P.createSampler({magFilter:"linear",minFilter:"linear",addressModeU:"repeat",addressModeV:"repeat"}),C=await new Pe(P).load({xpos:`${q}xpos.jpg`,xneg:`${q}xneg.jpg`,ypos:`${q}ypos.jpg`,yneg:`${q}yneg.jpg`,zpos:`${q}zpos.jpg`,zneg:`${q}zneg.jpg`}),gt=P.createSampler({magFilter:"linear",minFilter:"linear"});let J=-25,nt=-200.5;function et(){const h=S.width/S.height,t=Vt.perspective(Math.PI/4,h,.01,100),a=Vt.identity();return Vt.translate(a,[0,0,-4],a),Vt.rotateX(a,-J*Math.PI/180,a),Vt.rotateY(a,-nt*Math.PI/180,a),Vt.translate(a,[0,.5,0],a),{projectionMatrix:t,viewMatrix:a}}const ht=P.createBuffer({size:80,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),lt=P.createBuffer({size:16,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),pt=P.createBuffer({size:16,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),xt=P.createBuffer({size:16,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST});let yt=new Z(2,2,-1).unit();function mt(){P.queue.writeBuffer(lt,0,new Float32Array([...yt.toArray(),0]))}mt(),P.queue.writeBuffer(xt,0,new Float32Array([1,1,1,0]));const ot=new ve(P,b,ht,j,K,lt,pt,xt),vt=new Me(P,b,ht,lt,pt),$=new Se(P,256,256,ht,lt,pt,xt,j,K,C,gt);let H=new Z(-.4,-.75,.2),st=H.clone();const G=.25;let V=new Z;const X=new Z(0,-4,0);let it=!1,Tt=!1;vt.update(H.toArray(),G);for(let h=0;h<20;h++)$.addDrop(Math.random()*2-1,Math.random()*2-1,.03,h&1?.01:-.01);const Q={};window.addEventListener("keydown",h=>{const t=h.key.toUpperCase();Q[t]=!0,t==="G"?it=!it:t===" "&&(Tt=!Tt)}),window.addEventListener("keyup",h=>{Q[h.key.toUpperCase()]=!1});let rt=qt.None,dt=0,bt=0,ct,Mt;function St(){return[0,0,S.width,S.height]}function y(h,t){dt=h,bt=t;const{projectionMatrix:a,viewMatrix:r}=et(),o=new $t(r,a,St()),n=o.getRayForPixel(h*B,t*B),i=$t.hitTestSphere(o.eye,n,H,G);if(i){rt=qt.MoveSphere,ct=i.hit,Mt=o.getRayForPixel(S.width/2,S.height/2).negative();return}const d=-o.eye.y/n.y,f=o.eye.add(n.multiply(d));Math.abs(f.x)<1&&Math.abs(f.z)<1?(rt=qt.AddDrops,$.addDrop(f.x,f.z,.03,.01)):rt=qt.OrbitCamera}function D(h,t){if(rt===qt.OrbitCamera)nt-=h-dt,J-=t-bt,J=Math.max(-89.999,Math.min(89.999,J));else if(rt===qt.MoveSphere){const{projectionMatrix:a,viewMatrix:r}=et(),o=new $t(r,a,St()),n=o.getRayForPixel(h*B,t*B),i=-Mt.dot(o.eye.subtract(ct))/Mt.dot(n),d=o.eye.add(n.multiply(i));H=H.add(d.subtract(ct)),H.x=Math.max(G-1,Math.min(1-G,H.x)),H.y=Math.max(G-1,Math.min(10,H.y)),H.z=Math.max(G-1,Math.min(1-G,H.z)),vt.update(H.toArray(),G),ct=d}else if(rt===qt.AddDrops){const{projectionMatrix:a,viewMatrix:r}=et(),o=new $t(r,a,St()),n=o.getRayForPixel(h*B,t*B),i=-o.eye.y/n.y,d=o.eye.add(n.multiply(i));Math.abs(d.x)<1&&Math.abs(d.z)<1&&$.addDrop(d.x,d.z,.03,.01)}dt=h,bt=t}function l(){rt=qt.None}S.addEventListener("pointerdown",h=>{h.preventDefault(),S.setPointerCapture(h.pointerId),y(h.offsetX,h.offsetY)}),S.addEventListener("pointermove",h=>{rt!==qt.None&&D(h.offsetX,h.offsetY)}),S.addEventListener("pointerup",h=>{S.releasePointerCapture(h.pointerId),l()}),S.addEventListener("pointercancel",h=>{S.releasePointerCapture(h.pointerId),l()});let e;function c(){const t=window.matchMedia("(max-width: 600px)").matches?window.innerWidth:window.innerWidth-O.clientWidth-20,a=window.innerHeight;S.width=Math.floor(t*B),S.height=Math.floor(a*B),S.style.width=`${t}px`,S.style.height=`${a}px`,e&&e.destroy(),e=P.createTexture({size:[S.width,S.height],format:"depth24plus",usage:GPUTextureUsage.RENDER_ATTACHMENT}),p()}window.addEventListener("resize",c);const s=document.getElementById("help-toggle");s.addEventListener("click",()=>{O.classList.toggle("collapsed"),s.textContent=O.classList.contains("collapsed")?"menu":"chevron_right",c()}),document.getElementById("loading").innerHTML="",c();function u(){const{projectionMatrix:h,viewMatrix:t}=et(),a=Vt.multiply(h,t),r=Vt.invert(t),o=Zt.transformMat4([0,0,0],r),n=new Float32Array(20);n.set(a,0),n.set(o,16),P.queue.writeBuffer(ht,0,n)}function p(){const h=performance.now();let t=(h-W)/1e3;if(W=h,t>1&&(t=1),Q.L&&(yt=Z.fromAngles((90-nt)*Math.PI/180,-J*Math.PI/180),mt()),!Tt){if(rt===qt.MoveSphere)V=new Z;else if(it){const o=Math.max(0,Math.min(1,(G-H.y)/(2*G)));V=V.add(X.multiply(t-1.1*t*o)),V=V.subtract(V.unit().multiply(o*t*V.dot(V))),H=H.add(V.multiply(t)),H.y<G-1&&(H.y=G-1,V.y=Math.abs(V.y)*.7),vt.update(H.toArray(),G)}$.moveSphere(st.toArray(),H.toArray(),G),st=H.clone(),$.stepSimulation(),$.stepSimulation(),$.updateNormals(),$.updateCaustics()}u();const a=P.createCommandEncoder(),r=a.beginRenderPass({colorAttachments:[{view:z.getCurrentTexture().createView(),clearValue:{r:0,g:0,b:0,a:1},loadOp:"clear",storeOp:"store"}],depthStencilAttachment:{view:e.createView(),depthClearValue:1,depthLoadOp:"clear",depthStoreOp:"store"}});ot.render(r,$.textureA,$.sampler,$.causticsTexture),vt.render(r,$.textureA,$.sampler,$.causticsTexture),$.renderSurface(r),r.end(),P.queue.submit([a.finish()])}function x(){requestAnimationFrame(x),p()}requestAnimationFrame(x)}Ae();
