(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const b of document.querySelectorAll('link[rel="modulepreload"]'))y(b);new MutationObserver(b=>{for(const _ of b)if(_.type==="childList")for(const P of _.addedNodes)P.tagName==="LINK"&&P.rel==="modulepreload"&&y(P)}).observe(document,{childList:!0,subtree:!0});function x(b){const _={};return b.integrity&&(_.integrity=b.integrity),b.referrerPolicy&&(_.referrerPolicy=b.referrerPolicy),b.crossOrigin==="use-credentials"?_.credentials="include":b.crossOrigin==="anonymous"?_.credentials="omit":_.credentials="same-origin",_}function y(b){if(b.ep)return;b.ep=!0;const _=x(b);fetch(b.href,_)}})();function pe(d,i){return class extends d{constructor(...x){super(...x),i(this)}}}const ge=pe(Array,d=>d.fill(0));let H=1e-6;function we(d){function i(g=0,w=0){const m=new d(2);return g!==void 0&&(m[0]=g,w!==void 0&&(m[1]=w)),m}const x=i;function y(g,w,m){const t=m??new d(2);return t[0]=g,t[1]=w,t}function b(g,w){const m=w??new d(2);return m[0]=Math.ceil(g[0]),m[1]=Math.ceil(g[1]),m}function _(g,w){const m=w??new d(2);return m[0]=Math.floor(g[0]),m[1]=Math.floor(g[1]),m}function P(g,w){const m=w??new d(2);return m[0]=Math.round(g[0]),m[1]=Math.round(g[1]),m}function T(g,w=0,m=1,t){const l=t??new d(2);return l[0]=Math.min(m,Math.max(w,g[0])),l[1]=Math.min(m,Math.max(w,g[1])),l}function z(g,w,m){const t=m??new d(2);return t[0]=g[0]+w[0],t[1]=g[1]+w[1],t}function q(g,w,m,t){const l=t??new d(2);return l[0]=g[0]+w[0]*m,l[1]=g[1]+w[1]*m,l}function V(g,w){const m=g[0],t=g[1],l=w[0],s=w[1],r=Math.sqrt(m*m+t*t),n=Math.sqrt(l*l+s*s),a=r*n,f=a&&xt(g,w)/a;return Math.acos(f)}function L(g,w,m){const t=m??new d(2);return t[0]=g[0]-w[0],t[1]=g[1]-w[1],t}const N=L;function X(g,w){return Math.abs(g[0]-w[0])<H&&Math.abs(g[1]-w[1])<H}function nt(g,w){return g[0]===w[0]&&g[1]===w[1]}function Y(g,w,m,t){const l=t??new d(2);return l[0]=g[0]+m*(w[0]-g[0]),l[1]=g[1]+m*(w[1]-g[1]),l}function ot(g,w,m,t){const l=t??new d(2);return l[0]=g[0]+m[0]*(w[0]-g[0]),l[1]=g[1]+m[1]*(w[1]-g[1]),l}function $(g,w,m){const t=m??new d(2);return t[0]=Math.max(g[0],w[0]),t[1]=Math.max(g[1],w[1]),t}function B(g,w,m){const t=m??new d(2);return t[0]=Math.min(g[0],w[0]),t[1]=Math.min(g[1],w[1]),t}function j(g,w,m){const t=m??new d(2);return t[0]=g[0]*w,t[1]=g[1]*w,t}const st=j;function at(g,w,m){const t=m??new d(2);return t[0]=g[0]/w,t[1]=g[1]/w,t}function pt(g,w){const m=w??new d(2);return m[0]=1/g[0],m[1]=1/g[1],m}const gt=pt;function mt(g,w,m){const t=m??new d(3),l=g[0]*w[1]-g[1]*w[0];return t[0]=0,t[1]=0,t[2]=l,t}function xt(g,w){return g[0]*w[0]+g[1]*w[1]}function lt(g){const w=g[0],m=g[1];return Math.sqrt(w*w+m*m)}const yt=lt;function Q(g){const w=g[0],m=g[1];return w*w+m*m}const Z=Q;function ut(g,w){const m=g[0]-w[0],t=g[1]-w[1];return Math.sqrt(m*m+t*t)}const k=ut;function C(g,w){const m=g[0]-w[0],t=g[1]-w[1];return m*m+t*t}const W=C;function rt(g,w){const m=w??new d(2),t=g[0],l=g[1],s=Math.sqrt(t*t+l*l);return s>1e-5?(m[0]=t/s,m[1]=l/s):(m[0]=0,m[1]=0),m}function Ut(g,w){const m=w??new d(2);return m[0]=-g[0],m[1]=-g[1],m}function J(g,w){const m=w??new d(2);return m[0]=g[0],m[1]=g[1],m}const ct=J;function vt(g,w,m){const t=m??new d(2);return t[0]=g[0]*w[0],t[1]=g[1]*w[1],t}const Rt=vt;function it(g,w,m){const t=m??new d(2);return t[0]=g[0]/w[0],t[1]=g[1]/w[1],t}const Mt=it;function bt(g=1,w){const m=w??new d(2),t=Math.random()*2*Math.PI;return m[0]=Math.cos(t)*g,m[1]=Math.sin(t)*g,m}function M(g){const w=g??new d(2);return w[0]=0,w[1]=0,w}function D(g,w,m){const t=m??new d(2),l=g[0],s=g[1];return t[0]=l*w[0]+s*w[4]+w[12],t[1]=l*w[1]+s*w[5]+w[13],t}function p(g,w,m){const t=m??new d(2),l=g[0],s=g[1];return t[0]=w[0]*l+w[4]*s+w[8],t[1]=w[1]*l+w[5]*s+w[9],t}function e(g,w,m,t){const l=t??new d(2),s=g[0]-w[0],r=g[1]-w[1],n=Math.sin(m),a=Math.cos(m);return l[0]=s*a-r*n+w[0],l[1]=s*n+r*a+w[1],l}function c(g,w,m){const t=m??new d(2);return rt(g,t),j(t,w,t)}function o(g,w,m){const t=m??new d(2);return lt(g)>w?c(g,w,t):J(g,t)}function u(g,w,m){const t=m??new d(2);return Y(g,w,.5,t)}return{create:i,fromValues:x,set:y,ceil:b,floor:_,round:P,clamp:T,add:z,addScaled:q,angle:V,subtract:L,sub:N,equalsApproximately:X,equals:nt,lerp:Y,lerpV:ot,max:$,min:B,mulScalar:j,scale:st,divScalar:at,inverse:pt,invert:gt,cross:mt,dot:xt,length:lt,len:yt,lengthSq:Q,lenSq:Z,distance:ut,dist:k,distanceSq:C,distSq:W,normalize:rt,negate:Ut,copy:J,clone:ct,multiply:vt,mul:Rt,divide:it,div:Mt,random:bt,zero:M,transformMat4:D,transformMat3:p,rotate:e,setLength:c,truncate:o,midpoint:u}}const oe=new Map;function fe(d){let i=oe.get(d);return i||(i=we(d),oe.set(d,i)),i}function me(d){function i(n,a,f){const h=new d(3);return n!==void 0&&(h[0]=n,a!==void 0&&(h[1]=a,f!==void 0&&(h[2]=f))),h}const x=i;function y(n,a,f,h){const v=h??new d(3);return v[0]=n,v[1]=a,v[2]=f,v}function b(n,a){const f=a??new d(3);return f[0]=Math.ceil(n[0]),f[1]=Math.ceil(n[1]),f[2]=Math.ceil(n[2]),f}function _(n,a){const f=a??new d(3);return f[0]=Math.floor(n[0]),f[1]=Math.floor(n[1]),f[2]=Math.floor(n[2]),f}function P(n,a){const f=a??new d(3);return f[0]=Math.round(n[0]),f[1]=Math.round(n[1]),f[2]=Math.round(n[2]),f}function T(n,a=0,f=1,h){const v=h??new d(3);return v[0]=Math.min(f,Math.max(a,n[0])),v[1]=Math.min(f,Math.max(a,n[1])),v[2]=Math.min(f,Math.max(a,n[2])),v}function z(n,a,f){const h=f??new d(3);return h[0]=n[0]+a[0],h[1]=n[1]+a[1],h[2]=n[2]+a[2],h}function q(n,a,f,h){const v=h??new d(3);return v[0]=n[0]+a[0]*f,v[1]=n[1]+a[1]*f,v[2]=n[2]+a[2]*f,v}function V(n,a){const f=n[0],h=n[1],v=n[2],S=a[0],A=a[1],R=a[2],E=Math.sqrt(f*f+h*h+v*v),U=Math.sqrt(S*S+A*A+R*R),I=E*U,G=I&&xt(n,a)/I;return Math.acos(G)}function L(n,a,f){const h=f??new d(3);return h[0]=n[0]-a[0],h[1]=n[1]-a[1],h[2]=n[2]-a[2],h}const N=L;function X(n,a){return Math.abs(n[0]-a[0])<H&&Math.abs(n[1]-a[1])<H&&Math.abs(n[2]-a[2])<H}function nt(n,a){return n[0]===a[0]&&n[1]===a[1]&&n[2]===a[2]}function Y(n,a,f,h){const v=h??new d(3);return v[0]=n[0]+f*(a[0]-n[0]),v[1]=n[1]+f*(a[1]-n[1]),v[2]=n[2]+f*(a[2]-n[2]),v}function ot(n,a,f,h){const v=h??new d(3);return v[0]=n[0]+f[0]*(a[0]-n[0]),v[1]=n[1]+f[1]*(a[1]-n[1]),v[2]=n[2]+f[2]*(a[2]-n[2]),v}function $(n,a,f){const h=f??new d(3);return h[0]=Math.max(n[0],a[0]),h[1]=Math.max(n[1],a[1]),h[2]=Math.max(n[2],a[2]),h}function B(n,a,f){const h=f??new d(3);return h[0]=Math.min(n[0],a[0]),h[1]=Math.min(n[1],a[1]),h[2]=Math.min(n[2],a[2]),h}function j(n,a,f){const h=f??new d(3);return h[0]=n[0]*a,h[1]=n[1]*a,h[2]=n[2]*a,h}const st=j;function at(n,a,f){const h=f??new d(3);return h[0]=n[0]/a,h[1]=n[1]/a,h[2]=n[2]/a,h}function pt(n,a){const f=a??new d(3);return f[0]=1/n[0],f[1]=1/n[1],f[2]=1/n[2],f}const gt=pt;function mt(n,a,f){const h=f??new d(3),v=n[2]*a[0]-n[0]*a[2],S=n[0]*a[1]-n[1]*a[0];return h[0]=n[1]*a[2]-n[2]*a[1],h[1]=v,h[2]=S,h}function xt(n,a){return n[0]*a[0]+n[1]*a[1]+n[2]*a[2]}function lt(n){const a=n[0],f=n[1],h=n[2];return Math.sqrt(a*a+f*f+h*h)}const yt=lt;function Q(n){const a=n[0],f=n[1],h=n[2];return a*a+f*f+h*h}const Z=Q;function ut(n,a){const f=n[0]-a[0],h=n[1]-a[1],v=n[2]-a[2];return Math.sqrt(f*f+h*h+v*v)}const k=ut;function C(n,a){const f=n[0]-a[0],h=n[1]-a[1],v=n[2]-a[2];return f*f+h*h+v*v}const W=C;function rt(n,a){const f=a??new d(3),h=n[0],v=n[1],S=n[2],A=Math.sqrt(h*h+v*v+S*S);return A>1e-5?(f[0]=h/A,f[1]=v/A,f[2]=S/A):(f[0]=0,f[1]=0,f[2]=0),f}function Ut(n,a){const f=a??new d(3);return f[0]=-n[0],f[1]=-n[1],f[2]=-n[2],f}function J(n,a){const f=a??new d(3);return f[0]=n[0],f[1]=n[1],f[2]=n[2],f}const ct=J;function vt(n,a,f){const h=f??new d(3);return h[0]=n[0]*a[0],h[1]=n[1]*a[1],h[2]=n[2]*a[2],h}const Rt=vt;function it(n,a,f){const h=f??new d(3);return h[0]=n[0]/a[0],h[1]=n[1]/a[1],h[2]=n[2]/a[2],h}const Mt=it;function bt(n=1,a){const f=a??new d(3),h=Math.random()*2*Math.PI,v=Math.random()*2-1,S=Math.sqrt(1-v*v)*n;return f[0]=Math.cos(h)*S,f[1]=Math.sin(h)*S,f[2]=v*n,f}function M(n){const a=n??new d(3);return a[0]=0,a[1]=0,a[2]=0,a}function D(n,a,f){const h=f??new d(3),v=n[0],S=n[1],A=n[2],R=a[3]*v+a[7]*S+a[11]*A+a[15]||1;return h[0]=(a[0]*v+a[4]*S+a[8]*A+a[12])/R,h[1]=(a[1]*v+a[5]*S+a[9]*A+a[13])/R,h[2]=(a[2]*v+a[6]*S+a[10]*A+a[14])/R,h}function p(n,a,f){const h=f??new d(3),v=n[0],S=n[1],A=n[2];return h[0]=v*a[0]+S*a[4]+A*a[8],h[1]=v*a[1]+S*a[5]+A*a[9],h[2]=v*a[2]+S*a[6]+A*a[10],h}function e(n,a,f){const h=f??new d(3),v=n[0],S=n[1],A=n[2];return h[0]=v*a[0]+S*a[4]+A*a[8],h[1]=v*a[1]+S*a[5]+A*a[9],h[2]=v*a[2]+S*a[6]+A*a[10],h}function c(n,a,f){const h=f??new d(3),v=a[0],S=a[1],A=a[2],R=a[3]*2,E=n[0],U=n[1],I=n[2],G=S*I-A*U,O=A*E-v*I,F=v*U-S*E;return h[0]=E+G*R+(S*F-A*O)*2,h[1]=U+O*R+(A*G-v*F)*2,h[2]=I+F*R+(v*O-S*G)*2,h}function o(n,a){const f=a??new d(3);return f[0]=n[12],f[1]=n[13],f[2]=n[14],f}function u(n,a,f){const h=f??new d(3),v=a*4;return h[0]=n[v+0],h[1]=n[v+1],h[2]=n[v+2],h}function g(n,a){const f=a??new d(3),h=n[0],v=n[1],S=n[2],A=n[4],R=n[5],E=n[6],U=n[8],I=n[9],G=n[10];return f[0]=Math.sqrt(h*h+v*v+S*S),f[1]=Math.sqrt(A*A+R*R+E*E),f[2]=Math.sqrt(U*U+I*I+G*G),f}function w(n,a,f,h){const v=h??new d(3),S=[],A=[];return S[0]=n[0]-a[0],S[1]=n[1]-a[1],S[2]=n[2]-a[2],A[0]=S[0],A[1]=S[1]*Math.cos(f)-S[2]*Math.sin(f),A[2]=S[1]*Math.sin(f)+S[2]*Math.cos(f),v[0]=A[0]+a[0],v[1]=A[1]+a[1],v[2]=A[2]+a[2],v}function m(n,a,f,h){const v=h??new d(3),S=[],A=[];return S[0]=n[0]-a[0],S[1]=n[1]-a[1],S[2]=n[2]-a[2],A[0]=S[2]*Math.sin(f)+S[0]*Math.cos(f),A[1]=S[1],A[2]=S[2]*Math.cos(f)-S[0]*Math.sin(f),v[0]=A[0]+a[0],v[1]=A[1]+a[1],v[2]=A[2]+a[2],v}function t(n,a,f,h){const v=h??new d(3),S=[],A=[];return S[0]=n[0]-a[0],S[1]=n[1]-a[1],S[2]=n[2]-a[2],A[0]=S[0]*Math.cos(f)-S[1]*Math.sin(f),A[1]=S[0]*Math.sin(f)+S[1]*Math.cos(f),A[2]=S[2],v[0]=A[0]+a[0],v[1]=A[1]+a[1],v[2]=A[2]+a[2],v}function l(n,a,f){const h=f??new d(3);return rt(n,h),j(h,a,h)}function s(n,a,f){const h=f??new d(3);return lt(n)>a?l(n,a,h):J(n,h)}function r(n,a,f){const h=f??new d(3);return Y(n,a,.5,h)}return{create:i,fromValues:x,set:y,ceil:b,floor:_,round:P,clamp:T,add:z,addScaled:q,angle:V,subtract:L,sub:N,equalsApproximately:X,equals:nt,lerp:Y,lerpV:ot,max:$,min:B,mulScalar:j,scale:st,divScalar:at,inverse:pt,invert:gt,cross:mt,dot:xt,length:lt,len:yt,lengthSq:Q,lenSq:Z,distance:ut,dist:k,distanceSq:C,distSq:W,normalize:rt,negate:Ut,copy:J,clone:ct,multiply:vt,mul:Rt,divide:it,div:Mt,random:bt,zero:M,transformMat4:D,transformMat4Upper3x3:p,transformMat3:e,transformQuat:c,getTranslation:o,getAxis:u,getScaling:g,rotateX:w,rotateY:m,rotateZ:t,setLength:l,truncate:s,midpoint:r}}const ae=new Map;function Zt(d){let i=ae.get(d);return i||(i=me(d),ae.set(d,i)),i}function xe(d){const i=fe(d),x=Zt(d);function y(e,c,o,u,g,w,m,t,l){const s=new d(12);return s[3]=0,s[7]=0,s[11]=0,e!==void 0&&(s[0]=e,c!==void 0&&(s[1]=c,o!==void 0&&(s[2]=o,u!==void 0&&(s[4]=u,g!==void 0&&(s[5]=g,w!==void 0&&(s[6]=w,m!==void 0&&(s[8]=m,t!==void 0&&(s[9]=t,l!==void 0&&(s[10]=l))))))))),s}function b(e,c,o,u,g,w,m,t,l,s){const r=s??new d(12);return r[0]=e,r[1]=c,r[2]=o,r[3]=0,r[4]=u,r[5]=g,r[6]=w,r[7]=0,r[8]=m,r[9]=t,r[10]=l,r[11]=0,r}function _(e,c){const o=c??new d(12);return o[0]=e[0],o[1]=e[1],o[2]=e[2],o[3]=0,o[4]=e[4],o[5]=e[5],o[6]=e[6],o[7]=0,o[8]=e[8],o[9]=e[9],o[10]=e[10],o[11]=0,o}function P(e,c){const o=c??new d(12),u=e[0],g=e[1],w=e[2],m=e[3],t=u+u,l=g+g,s=w+w,r=u*t,n=g*t,a=g*l,f=w*t,h=w*l,v=w*s,S=m*t,A=m*l,R=m*s;return o[0]=1-a-v,o[1]=n+R,o[2]=f-A,o[3]=0,o[4]=n-R,o[5]=1-r-v,o[6]=h+S,o[7]=0,o[8]=f+A,o[9]=h-S,o[10]=1-r-a,o[11]=0,o}function T(e,c){const o=c??new d(12);return o[0]=-e[0],o[1]=-e[1],o[2]=-e[2],o[4]=-e[4],o[5]=-e[5],o[6]=-e[6],o[8]=-e[8],o[9]=-e[9],o[10]=-e[10],o}function z(e,c,o){const u=o??new d(12);return u[0]=e[0]*c,u[1]=e[1]*c,u[2]=e[2]*c,u[4]=e[4]*c,u[5]=e[5]*c,u[6]=e[6]*c,u[8]=e[8]*c,u[9]=e[9]*c,u[10]=e[10]*c,u}const q=z;function V(e,c,o){const u=o??new d(12);return u[0]=e[0]+c[0],u[1]=e[1]+c[1],u[2]=e[2]+c[2],u[4]=e[4]+c[4],u[5]=e[5]+c[5],u[6]=e[6]+c[6],u[8]=e[8]+c[8],u[9]=e[9]+c[9],u[10]=e[10]+c[10],u}function L(e,c){const o=c??new d(12);return o[0]=e[0],o[1]=e[1],o[2]=e[2],o[4]=e[4],o[5]=e[5],o[6]=e[6],o[8]=e[8],o[9]=e[9],o[10]=e[10],o}const N=L;function X(e,c){return Math.abs(e[0]-c[0])<H&&Math.abs(e[1]-c[1])<H&&Math.abs(e[2]-c[2])<H&&Math.abs(e[4]-c[4])<H&&Math.abs(e[5]-c[5])<H&&Math.abs(e[6]-c[6])<H&&Math.abs(e[8]-c[8])<H&&Math.abs(e[9]-c[9])<H&&Math.abs(e[10]-c[10])<H}function nt(e,c){return e[0]===c[0]&&e[1]===c[1]&&e[2]===c[2]&&e[4]===c[4]&&e[5]===c[5]&&e[6]===c[6]&&e[8]===c[8]&&e[9]===c[9]&&e[10]===c[10]}function Y(e){const c=e??new d(12);return c[0]=1,c[1]=0,c[2]=0,c[4]=0,c[5]=1,c[6]=0,c[8]=0,c[9]=0,c[10]=1,c}function ot(e,c){const o=c??new d(12);if(o===e){let a;return a=e[1],e[1]=e[4],e[4]=a,a=e[2],e[2]=e[8],e[8]=a,a=e[6],e[6]=e[9],e[9]=a,o}const u=e[0],g=e[1],w=e[2],m=e[4],t=e[5],l=e[6],s=e[8],r=e[9],n=e[10];return o[0]=u,o[1]=m,o[2]=s,o[4]=g,o[5]=t,o[6]=r,o[8]=w,o[9]=l,o[10]=n,o}function $(e,c){const o=c??new d(12),u=e[0],g=e[1],w=e[2],m=e[4],t=e[5],l=e[6],s=e[8],r=e[9],n=e[10],a=n*t-l*r,f=-n*m+l*s,h=r*m-t*s,v=1/(u*a+g*f+w*h);return o[0]=a*v,o[1]=(-n*g+w*r)*v,o[2]=(l*g-w*t)*v,o[4]=f*v,o[5]=(n*u-w*s)*v,o[6]=(-l*u+w*m)*v,o[8]=h*v,o[9]=(-r*u+g*s)*v,o[10]=(t*u-g*m)*v,o}function B(e){const c=e[0],o=e[1],u=e[2],g=e[4],w=e[5],m=e[6],t=e[8],l=e[9],s=e[10];return c*(w*s-l*m)-g*(o*s-l*u)+t*(o*m-w*u)}const j=$;function st(e,c,o){const u=o??new d(12),g=e[0],w=e[1],m=e[2],t=e[4],l=e[5],s=e[6],r=e[8],n=e[9],a=e[10],f=c[0],h=c[1],v=c[2],S=c[4],A=c[5],R=c[6],E=c[8],U=c[9],I=c[10];return u[0]=g*f+t*h+r*v,u[1]=w*f+l*h+n*v,u[2]=m*f+s*h+a*v,u[4]=g*S+t*A+r*R,u[5]=w*S+l*A+n*R,u[6]=m*S+s*A+a*R,u[8]=g*E+t*U+r*I,u[9]=w*E+l*U+n*I,u[10]=m*E+s*U+a*I,u}const at=st;function pt(e,c,o){const u=o??Y();return e!==u&&(u[0]=e[0],u[1]=e[1],u[2]=e[2],u[4]=e[4],u[5]=e[5],u[6]=e[6]),u[8]=c[0],u[9]=c[1],u[10]=1,u}function gt(e,c){const o=c??i.create();return o[0]=e[8],o[1]=e[9],o}function mt(e,c,o){const u=o??i.create(),g=c*4;return u[0]=e[g+0],u[1]=e[g+1],u}function xt(e,c,o,u){const g=u===e?e:L(e,u),w=o*4;return g[w+0]=c[0],g[w+1]=c[1],g}function lt(e,c){const o=c??i.create(),u=e[0],g=e[1],w=e[4],m=e[5];return o[0]=Math.sqrt(u*u+g*g),o[1]=Math.sqrt(w*w+m*m),o}function yt(e,c){const o=c??x.create(),u=e[0],g=e[1],w=e[2],m=e[4],t=e[5],l=e[6],s=e[8],r=e[9],n=e[10];return o[0]=Math.sqrt(u*u+g*g+w*w),o[1]=Math.sqrt(m*m+t*t+l*l),o[2]=Math.sqrt(s*s+r*r+n*n),o}function Q(e,c){const o=c??new d(12);return o[0]=1,o[1]=0,o[2]=0,o[4]=0,o[5]=1,o[6]=0,o[8]=e[0],o[9]=e[1],o[10]=1,o}function Z(e,c,o){const u=o??new d(12),g=c[0],w=c[1],m=e[0],t=e[1],l=e[2],s=e[4],r=e[5],n=e[6],a=e[8],f=e[9],h=e[10];return e!==u&&(u[0]=m,u[1]=t,u[2]=l,u[4]=s,u[5]=r,u[6]=n),u[8]=m*g+s*w+a,u[9]=t*g+r*w+f,u[10]=l*g+n*w+h,u}function ut(e,c){const o=c??new d(12),u=Math.cos(e),g=Math.sin(e);return o[0]=u,o[1]=g,o[2]=0,o[4]=-g,o[5]=u,o[6]=0,o[8]=0,o[9]=0,o[10]=1,o}function k(e,c,o){const u=o??new d(12),g=e[0],w=e[1],m=e[2],t=e[4],l=e[5],s=e[6],r=Math.cos(c),n=Math.sin(c);return u[0]=r*g+n*t,u[1]=r*w+n*l,u[2]=r*m+n*s,u[4]=r*t-n*g,u[5]=r*l-n*w,u[6]=r*s-n*m,e!==u&&(u[8]=e[8],u[9]=e[9],u[10]=e[10]),u}function C(e,c){const o=c??new d(12),u=Math.cos(e),g=Math.sin(e);return o[0]=1,o[1]=0,o[2]=0,o[4]=0,o[5]=u,o[6]=g,o[8]=0,o[9]=-g,o[10]=u,o}function W(e,c,o){const u=o??new d(12),g=e[4],w=e[5],m=e[6],t=e[8],l=e[9],s=e[10],r=Math.cos(c),n=Math.sin(c);return u[4]=r*g+n*t,u[5]=r*w+n*l,u[6]=r*m+n*s,u[8]=r*t-n*g,u[9]=r*l-n*w,u[10]=r*s-n*m,e!==u&&(u[0]=e[0],u[1]=e[1],u[2]=e[2]),u}function rt(e,c){const o=c??new d(12),u=Math.cos(e),g=Math.sin(e);return o[0]=u,o[1]=0,o[2]=-g,o[4]=0,o[5]=1,o[6]=0,o[8]=g,o[9]=0,o[10]=u,o}function Ut(e,c,o){const u=o??new d(12),g=e[0],w=e[1],m=e[2],t=e[8],l=e[9],s=e[10],r=Math.cos(c),n=Math.sin(c);return u[0]=r*g-n*t,u[1]=r*w-n*l,u[2]=r*m-n*s,u[8]=r*t+n*g,u[9]=r*l+n*w,u[10]=r*s+n*m,e!==u&&(u[4]=e[4],u[5]=e[5],u[6]=e[6]),u}const J=ut,ct=k;function vt(e,c){const o=c??new d(12);return o[0]=e[0],o[1]=0,o[2]=0,o[4]=0,o[5]=e[1],o[6]=0,o[8]=0,o[9]=0,o[10]=1,o}function Rt(e,c,o){const u=o??new d(12),g=c[0],w=c[1];return u[0]=g*e[0],u[1]=g*e[1],u[2]=g*e[2],u[4]=w*e[4],u[5]=w*e[5],u[6]=w*e[6],e!==u&&(u[8]=e[8],u[9]=e[9],u[10]=e[10]),u}function it(e,c){const o=c??new d(12);return o[0]=e[0],o[1]=0,o[2]=0,o[4]=0,o[5]=e[1],o[6]=0,o[8]=0,o[9]=0,o[10]=e[2],o}function Mt(e,c,o){const u=o??new d(12),g=c[0],w=c[1],m=c[2];return u[0]=g*e[0],u[1]=g*e[1],u[2]=g*e[2],u[4]=w*e[4],u[5]=w*e[5],u[6]=w*e[6],u[8]=m*e[8],u[9]=m*e[9],u[10]=m*e[10],u}function bt(e,c){const o=c??new d(12);return o[0]=e,o[1]=0,o[2]=0,o[4]=0,o[5]=e,o[6]=0,o[8]=0,o[9]=0,o[10]=1,o}function M(e,c,o){const u=o??new d(12);return u[0]=c*e[0],u[1]=c*e[1],u[2]=c*e[2],u[4]=c*e[4],u[5]=c*e[5],u[6]=c*e[6],e!==u&&(u[8]=e[8],u[9]=e[9],u[10]=e[10]),u}function D(e,c){const o=c??new d(12);return o[0]=e,o[1]=0,o[2]=0,o[4]=0,o[5]=e,o[6]=0,o[8]=0,o[9]=0,o[10]=e,o}function p(e,c,o){const u=o??new d(12);return u[0]=c*e[0],u[1]=c*e[1],u[2]=c*e[2],u[4]=c*e[4],u[5]=c*e[5],u[6]=c*e[6],u[8]=c*e[8],u[9]=c*e[9],u[10]=c*e[10],u}return{add:V,clone:N,copy:L,create:y,determinant:B,equals:nt,equalsApproximately:X,fromMat4:_,fromQuat:P,get3DScaling:yt,getAxis:mt,getScaling:lt,getTranslation:gt,identity:Y,inverse:$,invert:j,mul:at,mulScalar:q,multiply:st,multiplyScalar:z,negate:T,rotate:k,rotateX:W,rotateY:Ut,rotateZ:ct,rotation:ut,rotationX:C,rotationY:rt,rotationZ:J,scale:Rt,scale3D:Mt,scaling:vt,scaling3D:it,set:b,setAxis:xt,setTranslation:pt,translate:Z,translation:Q,transpose:ot,uniformScale:M,uniformScale3D:p,uniformScaling:bt,uniformScaling3D:D}}const ce=new Map;function ye(d){let i=ce.get(d);return i||(i=xe(d),ce.set(d,i)),i}function ve(d){const i=Zt(d);function x(t,l,s,r,n,a,f,h,v,S,A,R,E,U,I,G){const O=new d(16);return t!==void 0&&(O[0]=t,l!==void 0&&(O[1]=l,s!==void 0&&(O[2]=s,r!==void 0&&(O[3]=r,n!==void 0&&(O[4]=n,a!==void 0&&(O[5]=a,f!==void 0&&(O[6]=f,h!==void 0&&(O[7]=h,v!==void 0&&(O[8]=v,S!==void 0&&(O[9]=S,A!==void 0&&(O[10]=A,R!==void 0&&(O[11]=R,E!==void 0&&(O[12]=E,U!==void 0&&(O[13]=U,I!==void 0&&(O[14]=I,G!==void 0&&(O[15]=G)))))))))))))))),O}function y(t,l,s,r,n,a,f,h,v,S,A,R,E,U,I,G,O){const F=O??new d(16);return F[0]=t,F[1]=l,F[2]=s,F[3]=r,F[4]=n,F[5]=a,F[6]=f,F[7]=h,F[8]=v,F[9]=S,F[10]=A,F[11]=R,F[12]=E,F[13]=U,F[14]=I,F[15]=G,F}function b(t,l){const s=l??new d(16);return s[0]=t[0],s[1]=t[1],s[2]=t[2],s[3]=0,s[4]=t[4],s[5]=t[5],s[6]=t[6],s[7]=0,s[8]=t[8],s[9]=t[9],s[10]=t[10],s[11]=0,s[12]=0,s[13]=0,s[14]=0,s[15]=1,s}function _(t,l){const s=l??new d(16),r=t[0],n=t[1],a=t[2],f=t[3],h=r+r,v=n+n,S=a+a,A=r*h,R=n*h,E=n*v,U=a*h,I=a*v,G=a*S,O=f*h,F=f*v,tt=f*S;return s[0]=1-E-G,s[1]=R+tt,s[2]=U-F,s[3]=0,s[4]=R-tt,s[5]=1-A-G,s[6]=I+O,s[7]=0,s[8]=U+F,s[9]=I-O,s[10]=1-A-E,s[11]=0,s[12]=0,s[13]=0,s[14]=0,s[15]=1,s}function P(t,l){const s=l??new d(16);return s[0]=-t[0],s[1]=-t[1],s[2]=-t[2],s[3]=-t[3],s[4]=-t[4],s[5]=-t[5],s[6]=-t[6],s[7]=-t[7],s[8]=-t[8],s[9]=-t[9],s[10]=-t[10],s[11]=-t[11],s[12]=-t[12],s[13]=-t[13],s[14]=-t[14],s[15]=-t[15],s}function T(t,l,s){const r=s??new d(16);return r[0]=t[0]+l[0],r[1]=t[1]+l[1],r[2]=t[2]+l[2],r[3]=t[3]+l[3],r[4]=t[4]+l[4],r[5]=t[5]+l[5],r[6]=t[6]+l[6],r[7]=t[7]+l[7],r[8]=t[8]+l[8],r[9]=t[9]+l[9],r[10]=t[10]+l[10],r[11]=t[11]+l[11],r[12]=t[12]+l[12],r[13]=t[13]+l[13],r[14]=t[14]+l[14],r[15]=t[15]+l[15],r}function z(t,l,s){const r=s??new d(16);return r[0]=t[0]*l,r[1]=t[1]*l,r[2]=t[2]*l,r[3]=t[3]*l,r[4]=t[4]*l,r[5]=t[5]*l,r[6]=t[6]*l,r[7]=t[7]*l,r[8]=t[8]*l,r[9]=t[9]*l,r[10]=t[10]*l,r[11]=t[11]*l,r[12]=t[12]*l,r[13]=t[13]*l,r[14]=t[14]*l,r[15]=t[15]*l,r}const q=z;function V(t,l){const s=l??new d(16);return s[0]=t[0],s[1]=t[1],s[2]=t[2],s[3]=t[3],s[4]=t[4],s[5]=t[5],s[6]=t[6],s[7]=t[7],s[8]=t[8],s[9]=t[9],s[10]=t[10],s[11]=t[11],s[12]=t[12],s[13]=t[13],s[14]=t[14],s[15]=t[15],s}const L=V;function N(t,l){return Math.abs(t[0]-l[0])<H&&Math.abs(t[1]-l[1])<H&&Math.abs(t[2]-l[2])<H&&Math.abs(t[3]-l[3])<H&&Math.abs(t[4]-l[4])<H&&Math.abs(t[5]-l[5])<H&&Math.abs(t[6]-l[6])<H&&Math.abs(t[7]-l[7])<H&&Math.abs(t[8]-l[8])<H&&Math.abs(t[9]-l[9])<H&&Math.abs(t[10]-l[10])<H&&Math.abs(t[11]-l[11])<H&&Math.abs(t[12]-l[12])<H&&Math.abs(t[13]-l[13])<H&&Math.abs(t[14]-l[14])<H&&Math.abs(t[15]-l[15])<H}function X(t,l){return t[0]===l[0]&&t[1]===l[1]&&t[2]===l[2]&&t[3]===l[3]&&t[4]===l[4]&&t[5]===l[5]&&t[6]===l[6]&&t[7]===l[7]&&t[8]===l[8]&&t[9]===l[9]&&t[10]===l[10]&&t[11]===l[11]&&t[12]===l[12]&&t[13]===l[13]&&t[14]===l[14]&&t[15]===l[15]}function nt(t){const l=t??new d(16);return l[0]=1,l[1]=0,l[2]=0,l[3]=0,l[4]=0,l[5]=1,l[6]=0,l[7]=0,l[8]=0,l[9]=0,l[10]=1,l[11]=0,l[12]=0,l[13]=0,l[14]=0,l[15]=1,l}function Y(t,l){const s=l??new d(16);if(s===t){let K;return K=t[1],t[1]=t[4],t[4]=K,K=t[2],t[2]=t[8],t[8]=K,K=t[3],t[3]=t[12],t[12]=K,K=t[6],t[6]=t[9],t[9]=K,K=t[7],t[7]=t[13],t[13]=K,K=t[11],t[11]=t[14],t[14]=K,s}const r=t[0],n=t[1],a=t[2],f=t[3],h=t[4],v=t[5],S=t[6],A=t[7],R=t[8],E=t[9],U=t[10],I=t[11],G=t[12],O=t[13],F=t[14],tt=t[15];return s[0]=r,s[1]=h,s[2]=R,s[3]=G,s[4]=n,s[5]=v,s[6]=E,s[7]=O,s[8]=a,s[9]=S,s[10]=U,s[11]=F,s[12]=f,s[13]=A,s[14]=I,s[15]=tt,s}function ot(t,l){const s=l??new d(16),r=t[0],n=t[1],a=t[2],f=t[3],h=t[4],v=t[5],S=t[6],A=t[7],R=t[8],E=t[9],U=t[10],I=t[11],G=t[12],O=t[13],F=t[14],tt=t[15],K=U*tt,ht=F*I,dt=S*tt,ft=F*A,wt=S*I,St=U*A,At=a*tt,Dt=F*f,_t=a*I,Pt=U*f,zt=a*A,Tt=S*f,Bt=R*O,Lt=G*E,$t=h*O,It=G*v,Ot=h*E,qt=R*v,Ct=r*O,Nt=G*n,Ht=r*E,jt=R*n,Wt=r*v,Xt=h*n,ne=K*v+ft*E+wt*O-(ht*v+dt*E+St*O),ie=ht*n+At*E+Pt*O-(K*n+Dt*E+_t*O),se=dt*n+Dt*v+zt*O-(ft*n+At*v+Tt*O),re=St*n+_t*v+Tt*E-(wt*n+Pt*v+zt*E),Et=1/(r*ne+h*ie+R*se+G*re);return s[0]=Et*ne,s[1]=Et*ie,s[2]=Et*se,s[3]=Et*re,s[4]=Et*(ht*h+dt*R+St*G-(K*h+ft*R+wt*G)),s[5]=Et*(K*r+Dt*R+_t*G-(ht*r+At*R+Pt*G)),s[6]=Et*(ft*r+At*h+Tt*G-(dt*r+Dt*h+zt*G)),s[7]=Et*(wt*r+Pt*h+zt*R-(St*r+_t*h+Tt*R)),s[8]=Et*(Bt*A+It*I+Ot*tt-(Lt*A+$t*I+qt*tt)),s[9]=Et*(Lt*f+Ct*I+jt*tt-(Bt*f+Nt*I+Ht*tt)),s[10]=Et*($t*f+Nt*A+Wt*tt-(It*f+Ct*A+Xt*tt)),s[11]=Et*(qt*f+Ht*A+Xt*I-(Ot*f+jt*A+Wt*I)),s[12]=Et*($t*U+qt*F+Lt*S-(Ot*F+Bt*S+It*U)),s[13]=Et*(Ht*F+Bt*a+Nt*U-(Ct*U+jt*F+Lt*a)),s[14]=Et*(Ct*S+Xt*F+It*a-(Wt*F+$t*a+Nt*S)),s[15]=Et*(Wt*U+Ot*a+jt*S-(Ht*S+Xt*U+qt*a)),s}function $(t){const l=t[0],s=t[1],r=t[2],n=t[3],a=t[4],f=t[5],h=t[6],v=t[7],S=t[8],A=t[9],R=t[10],E=t[11],U=t[12],I=t[13],G=t[14],O=t[15],F=R*O,tt=G*E,K=h*O,ht=G*v,dt=h*E,ft=R*v,wt=r*O,St=G*n,At=r*E,Dt=R*n,_t=r*v,Pt=h*n,zt=F*f+ht*A+dt*I-(tt*f+K*A+ft*I),Tt=tt*s+wt*A+Dt*I-(F*s+St*A+At*I),Bt=K*s+St*f+_t*I-(ht*s+wt*f+Pt*I),Lt=ft*s+At*f+Pt*A-(dt*s+Dt*f+_t*A);return l*zt+a*Tt+S*Bt+U*Lt}const B=ot;function j(t,l,s){const r=s??new d(16),n=t[0],a=t[1],f=t[2],h=t[3],v=t[4],S=t[5],A=t[6],R=t[7],E=t[8],U=t[9],I=t[10],G=t[11],O=t[12],F=t[13],tt=t[14],K=t[15],ht=l[0],dt=l[1],ft=l[2],wt=l[3],St=l[4],At=l[5],Dt=l[6],_t=l[7],Pt=l[8],zt=l[9],Tt=l[10],Bt=l[11],Lt=l[12],$t=l[13],It=l[14],Ot=l[15];return r[0]=n*ht+v*dt+E*ft+O*wt,r[1]=a*ht+S*dt+U*ft+F*wt,r[2]=f*ht+A*dt+I*ft+tt*wt,r[3]=h*ht+R*dt+G*ft+K*wt,r[4]=n*St+v*At+E*Dt+O*_t,r[5]=a*St+S*At+U*Dt+F*_t,r[6]=f*St+A*At+I*Dt+tt*_t,r[7]=h*St+R*At+G*Dt+K*_t,r[8]=n*Pt+v*zt+E*Tt+O*Bt,r[9]=a*Pt+S*zt+U*Tt+F*Bt,r[10]=f*Pt+A*zt+I*Tt+tt*Bt,r[11]=h*Pt+R*zt+G*Tt+K*Bt,r[12]=n*Lt+v*$t+E*It+O*Ot,r[13]=a*Lt+S*$t+U*It+F*Ot,r[14]=f*Lt+A*$t+I*It+tt*Ot,r[15]=h*Lt+R*$t+G*It+K*Ot,r}const st=j;function at(t,l,s){const r=s??nt();return t!==r&&(r[0]=t[0],r[1]=t[1],r[2]=t[2],r[3]=t[3],r[4]=t[4],r[5]=t[5],r[6]=t[6],r[7]=t[7],r[8]=t[8],r[9]=t[9],r[10]=t[10],r[11]=t[11]),r[12]=l[0],r[13]=l[1],r[14]=l[2],r[15]=1,r}function pt(t,l){const s=l??i.create();return s[0]=t[12],s[1]=t[13],s[2]=t[14],s}function gt(t,l,s){const r=s??i.create(),n=l*4;return r[0]=t[n+0],r[1]=t[n+1],r[2]=t[n+2],r}function mt(t,l,s,r){const n=r===t?r:V(t,r),a=s*4;return n[a+0]=l[0],n[a+1]=l[1],n[a+2]=l[2],n}function xt(t,l){const s=l??i.create(),r=t[0],n=t[1],a=t[2],f=t[4],h=t[5],v=t[6],S=t[8],A=t[9],R=t[10];return s[0]=Math.sqrt(r*r+n*n+a*a),s[1]=Math.sqrt(f*f+h*h+v*v),s[2]=Math.sqrt(S*S+A*A+R*R),s}function lt(t,l,s,r,n){const a=n??new d(16),f=Math.tan(Math.PI*.5-.5*t);if(a[0]=f/l,a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=f,a[6]=0,a[7]=0,a[8]=0,a[9]=0,a[11]=-1,a[12]=0,a[13]=0,a[15]=0,Number.isFinite(r)){const h=1/(s-r);a[10]=r*h,a[14]=r*s*h}else a[10]=-1,a[14]=-s;return a}function yt(t,l,s,r=1/0,n){const a=n??new d(16),f=1/Math.tan(t*.5);if(a[0]=f/l,a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=f,a[6]=0,a[7]=0,a[8]=0,a[9]=0,a[11]=-1,a[12]=0,a[13]=0,a[15]=0,r===1/0)a[10]=0,a[14]=s;else{const h=1/(r-s);a[10]=s*h,a[14]=r*s*h}return a}function Q(t,l,s,r,n,a,f){const h=f??new d(16);return h[0]=2/(l-t),h[1]=0,h[2]=0,h[3]=0,h[4]=0,h[5]=2/(r-s),h[6]=0,h[7]=0,h[8]=0,h[9]=0,h[10]=1/(n-a),h[11]=0,h[12]=(l+t)/(t-l),h[13]=(r+s)/(s-r),h[14]=n/(n-a),h[15]=1,h}function Z(t,l,s,r,n,a,f){const h=f??new d(16),v=l-t,S=r-s,A=n-a;return h[0]=2*n/v,h[1]=0,h[2]=0,h[3]=0,h[4]=0,h[5]=2*n/S,h[6]=0,h[7]=0,h[8]=(t+l)/v,h[9]=(r+s)/S,h[10]=a/A,h[11]=-1,h[12]=0,h[13]=0,h[14]=n*a/A,h[15]=0,h}function ut(t,l,s,r,n,a=1/0,f){const h=f??new d(16),v=l-t,S=r-s;if(h[0]=2*n/v,h[1]=0,h[2]=0,h[3]=0,h[4]=0,h[5]=2*n/S,h[6]=0,h[7]=0,h[8]=(t+l)/v,h[9]=(r+s)/S,h[11]=-1,h[12]=0,h[13]=0,h[15]=0,a===1/0)h[10]=0,h[14]=n;else{const A=1/(a-n);h[10]=n*A,h[14]=a*n*A}return h}const k=i.create(),C=i.create(),W=i.create();function rt(t,l,s,r){const n=r??new d(16);return i.normalize(i.subtract(l,t,W),W),i.normalize(i.cross(s,W,k),k),i.normalize(i.cross(W,k,C),C),n[0]=k[0],n[1]=k[1],n[2]=k[2],n[3]=0,n[4]=C[0],n[5]=C[1],n[6]=C[2],n[7]=0,n[8]=W[0],n[9]=W[1],n[10]=W[2],n[11]=0,n[12]=t[0],n[13]=t[1],n[14]=t[2],n[15]=1,n}function Ut(t,l,s,r){const n=r??new d(16);return i.normalize(i.subtract(t,l,W),W),i.normalize(i.cross(s,W,k),k),i.normalize(i.cross(W,k,C),C),n[0]=k[0],n[1]=k[1],n[2]=k[2],n[3]=0,n[4]=C[0],n[5]=C[1],n[6]=C[2],n[7]=0,n[8]=W[0],n[9]=W[1],n[10]=W[2],n[11]=0,n[12]=t[0],n[13]=t[1],n[14]=t[2],n[15]=1,n}function J(t,l,s,r){const n=r??new d(16);return i.normalize(i.subtract(t,l,W),W),i.normalize(i.cross(s,W,k),k),i.normalize(i.cross(W,k,C),C),n[0]=k[0],n[1]=C[0],n[2]=W[0],n[3]=0,n[4]=k[1],n[5]=C[1],n[6]=W[1],n[7]=0,n[8]=k[2],n[9]=C[2],n[10]=W[2],n[11]=0,n[12]=-(k[0]*t[0]+k[1]*t[1]+k[2]*t[2]),n[13]=-(C[0]*t[0]+C[1]*t[1]+C[2]*t[2]),n[14]=-(W[0]*t[0]+W[1]*t[1]+W[2]*t[2]),n[15]=1,n}function ct(t,l){const s=l??new d(16);return s[0]=1,s[1]=0,s[2]=0,s[3]=0,s[4]=0,s[5]=1,s[6]=0,s[7]=0,s[8]=0,s[9]=0,s[10]=1,s[11]=0,s[12]=t[0],s[13]=t[1],s[14]=t[2],s[15]=1,s}function vt(t,l,s){const r=s??new d(16),n=l[0],a=l[1],f=l[2],h=t[0],v=t[1],S=t[2],A=t[3],R=t[4],E=t[5],U=t[6],I=t[7],G=t[8],O=t[9],F=t[10],tt=t[11],K=t[12],ht=t[13],dt=t[14],ft=t[15];return t!==r&&(r[0]=h,r[1]=v,r[2]=S,r[3]=A,r[4]=R,r[5]=E,r[6]=U,r[7]=I,r[8]=G,r[9]=O,r[10]=F,r[11]=tt),r[12]=h*n+R*a+G*f+K,r[13]=v*n+E*a+O*f+ht,r[14]=S*n+U*a+F*f+dt,r[15]=A*n+I*a+tt*f+ft,r}function Rt(t,l){const s=l??new d(16),r=Math.cos(t),n=Math.sin(t);return s[0]=1,s[1]=0,s[2]=0,s[3]=0,s[4]=0,s[5]=r,s[6]=n,s[7]=0,s[8]=0,s[9]=-n,s[10]=r,s[11]=0,s[12]=0,s[13]=0,s[14]=0,s[15]=1,s}function it(t,l,s){const r=s??new d(16),n=t[4],a=t[5],f=t[6],h=t[7],v=t[8],S=t[9],A=t[10],R=t[11],E=Math.cos(l),U=Math.sin(l);return r[4]=E*n+U*v,r[5]=E*a+U*S,r[6]=E*f+U*A,r[7]=E*h+U*R,r[8]=E*v-U*n,r[9]=E*S-U*a,r[10]=E*A-U*f,r[11]=E*R-U*h,t!==r&&(r[0]=t[0],r[1]=t[1],r[2]=t[2],r[3]=t[3],r[12]=t[12],r[13]=t[13],r[14]=t[14],r[15]=t[15]),r}function Mt(t,l){const s=l??new d(16),r=Math.cos(t),n=Math.sin(t);return s[0]=r,s[1]=0,s[2]=-n,s[3]=0,s[4]=0,s[5]=1,s[6]=0,s[7]=0,s[8]=n,s[9]=0,s[10]=r,s[11]=0,s[12]=0,s[13]=0,s[14]=0,s[15]=1,s}function bt(t,l,s){const r=s??new d(16),n=t[0],a=t[1],f=t[2],h=t[3],v=t[8],S=t[9],A=t[10],R=t[11],E=Math.cos(l),U=Math.sin(l);return r[0]=E*n-U*v,r[1]=E*a-U*S,r[2]=E*f-U*A,r[3]=E*h-U*R,r[8]=E*v+U*n,r[9]=E*S+U*a,r[10]=E*A+U*f,r[11]=E*R+U*h,t!==r&&(r[4]=t[4],r[5]=t[5],r[6]=t[6],r[7]=t[7],r[12]=t[12],r[13]=t[13],r[14]=t[14],r[15]=t[15]),r}function M(t,l){const s=l??new d(16),r=Math.cos(t),n=Math.sin(t);return s[0]=r,s[1]=n,s[2]=0,s[3]=0,s[4]=-n,s[5]=r,s[6]=0,s[7]=0,s[8]=0,s[9]=0,s[10]=1,s[11]=0,s[12]=0,s[13]=0,s[14]=0,s[15]=1,s}function D(t,l,s){const r=s??new d(16),n=t[0],a=t[1],f=t[2],h=t[3],v=t[4],S=t[5],A=t[6],R=t[7],E=Math.cos(l),U=Math.sin(l);return r[0]=E*n+U*v,r[1]=E*a+U*S,r[2]=E*f+U*A,r[3]=E*h+U*R,r[4]=E*v-U*n,r[5]=E*S-U*a,r[6]=E*A-U*f,r[7]=E*R-U*h,t!==r&&(r[8]=t[8],r[9]=t[9],r[10]=t[10],r[11]=t[11],r[12]=t[12],r[13]=t[13],r[14]=t[14],r[15]=t[15]),r}function p(t,l,s){const r=s??new d(16);let n=t[0],a=t[1],f=t[2];const h=Math.sqrt(n*n+a*a+f*f);n/=h,a/=h,f/=h;const v=n*n,S=a*a,A=f*f,R=Math.cos(l),E=Math.sin(l),U=1-R;return r[0]=v+(1-v)*R,r[1]=n*a*U+f*E,r[2]=n*f*U-a*E,r[3]=0,r[4]=n*a*U-f*E,r[5]=S+(1-S)*R,r[6]=a*f*U+n*E,r[7]=0,r[8]=n*f*U+a*E,r[9]=a*f*U-n*E,r[10]=A+(1-A)*R,r[11]=0,r[12]=0,r[13]=0,r[14]=0,r[15]=1,r}const e=p;function c(t,l,s,r){const n=r??new d(16);let a=l[0],f=l[1],h=l[2];const v=Math.sqrt(a*a+f*f+h*h);a/=v,f/=v,h/=v;const S=a*a,A=f*f,R=h*h,E=Math.cos(s),U=Math.sin(s),I=1-E,G=S+(1-S)*E,O=a*f*I+h*U,F=a*h*I-f*U,tt=a*f*I-h*U,K=A+(1-A)*E,ht=f*h*I+a*U,dt=a*h*I+f*U,ft=f*h*I-a*U,wt=R+(1-R)*E,St=t[0],At=t[1],Dt=t[2],_t=t[3],Pt=t[4],zt=t[5],Tt=t[6],Bt=t[7],Lt=t[8],$t=t[9],It=t[10],Ot=t[11];return n[0]=G*St+O*Pt+F*Lt,n[1]=G*At+O*zt+F*$t,n[2]=G*Dt+O*Tt+F*It,n[3]=G*_t+O*Bt+F*Ot,n[4]=tt*St+K*Pt+ht*Lt,n[5]=tt*At+K*zt+ht*$t,n[6]=tt*Dt+K*Tt+ht*It,n[7]=tt*_t+K*Bt+ht*Ot,n[8]=dt*St+ft*Pt+wt*Lt,n[9]=dt*At+ft*zt+wt*$t,n[10]=dt*Dt+ft*Tt+wt*It,n[11]=dt*_t+ft*Bt+wt*Ot,t!==n&&(n[12]=t[12],n[13]=t[13],n[14]=t[14],n[15]=t[15]),n}const o=c;function u(t,l){const s=l??new d(16);return s[0]=t[0],s[1]=0,s[2]=0,s[3]=0,s[4]=0,s[5]=t[1],s[6]=0,s[7]=0,s[8]=0,s[9]=0,s[10]=t[2],s[11]=0,s[12]=0,s[13]=0,s[14]=0,s[15]=1,s}function g(t,l,s){const r=s??new d(16),n=l[0],a=l[1],f=l[2];return r[0]=n*t[0],r[1]=n*t[1],r[2]=n*t[2],r[3]=n*t[3],r[4]=a*t[4],r[5]=a*t[5],r[6]=a*t[6],r[7]=a*t[7],r[8]=f*t[8],r[9]=f*t[9],r[10]=f*t[10],r[11]=f*t[11],t!==r&&(r[12]=t[12],r[13]=t[13],r[14]=t[14],r[15]=t[15]),r}function w(t,l){const s=l??new d(16);return s[0]=t,s[1]=0,s[2]=0,s[3]=0,s[4]=0,s[5]=t,s[6]=0,s[7]=0,s[8]=0,s[9]=0,s[10]=t,s[11]=0,s[12]=0,s[13]=0,s[14]=0,s[15]=1,s}function m(t,l,s){const r=s??new d(16);return r[0]=l*t[0],r[1]=l*t[1],r[2]=l*t[2],r[3]=l*t[3],r[4]=l*t[4],r[5]=l*t[5],r[6]=l*t[6],r[7]=l*t[7],r[8]=l*t[8],r[9]=l*t[9],r[10]=l*t[10],r[11]=l*t[11],t!==r&&(r[12]=t[12],r[13]=t[13],r[14]=t[14],r[15]=t[15]),r}return{add:T,aim:rt,axisRotate:c,axisRotation:p,cameraAim:Ut,clone:L,copy:V,create:x,determinant:$,equals:X,equalsApproximately:N,fromMat3:b,fromQuat:_,frustum:Z,frustumReverseZ:ut,getAxis:gt,getScaling:xt,getTranslation:pt,identity:nt,inverse:ot,invert:B,lookAt:J,mul:st,mulScalar:q,multiply:j,multiplyScalar:z,negate:P,ortho:Q,perspective:lt,perspectiveReverseZ:yt,rotate:o,rotateX:it,rotateY:bt,rotateZ:D,rotation:e,rotationX:Rt,rotationY:Mt,rotationZ:M,scale:g,scaling:u,set:y,setAxis:mt,setTranslation:at,translate:vt,translation:ct,transpose:Y,uniformScale:m,uniformScaling:w}}const le=new Map;function Me(d){let i=le.get(d);return i||(i=ve(d),le.set(d,i)),i}function be(d){const i=Zt(d);function x(M,D,p,e){const c=new d(4);return M!==void 0&&(c[0]=M,D!==void 0&&(c[1]=D,p!==void 0&&(c[2]=p,e!==void 0&&(c[3]=e)))),c}const y=x;function b(M,D,p,e,c){const o=c??new d(4);return o[0]=M,o[1]=D,o[2]=p,o[3]=e,o}function _(M,D,p){const e=p??new d(4),c=D*.5,o=Math.sin(c);return e[0]=o*M[0],e[1]=o*M[1],e[2]=o*M[2],e[3]=Math.cos(c),e}function P(M,D){const p=D??i.create(3),e=Math.acos(M[3])*2,c=Math.sin(e*.5);return c>H?(p[0]=M[0]/c,p[1]=M[1]/c,p[2]=M[2]/c):(p[0]=1,p[1]=0,p[2]=0),{angle:e,axis:p}}function T(M,D){const p=lt(M,D);return Math.acos(2*p*p-1)}function z(M,D,p){const e=p??new d(4),c=M[0],o=M[1],u=M[2],g=M[3],w=D[0],m=D[1],t=D[2],l=D[3];return e[0]=c*l+g*w+o*t-u*m,e[1]=o*l+g*m+u*w-c*t,e[2]=u*l+g*t+c*m-o*w,e[3]=g*l-c*w-o*m-u*t,e}const q=z;function V(M,D,p){const e=p??new d(4),c=D*.5,o=M[0],u=M[1],g=M[2],w=M[3],m=Math.sin(c),t=Math.cos(c);return e[0]=o*t+w*m,e[1]=u*t+g*m,e[2]=g*t-u*m,e[3]=w*t-o*m,e}function L(M,D,p){const e=p??new d(4),c=D*.5,o=M[0],u=M[1],g=M[2],w=M[3],m=Math.sin(c),t=Math.cos(c);return e[0]=o*t-g*m,e[1]=u*t+w*m,e[2]=g*t+o*m,e[3]=w*t-u*m,e}function N(M,D,p){const e=p??new d(4),c=D*.5,o=M[0],u=M[1],g=M[2],w=M[3],m=Math.sin(c),t=Math.cos(c);return e[0]=o*t+u*m,e[1]=u*t-o*m,e[2]=g*t+w*m,e[3]=w*t-g*m,e}function X(M,D,p,e){const c=e??new d(4),o=M[0],u=M[1],g=M[2],w=M[3];let m=D[0],t=D[1],l=D[2],s=D[3],r=o*m+u*t+g*l+w*s;r<0&&(r=-r,m=-m,t=-t,l=-l,s=-s);let n,a;if(1-r>H){const f=Math.acos(r),h=Math.sin(f);n=Math.sin((1-p)*f)/h,a=Math.sin(p*f)/h}else n=1-p,a=p;return c[0]=n*o+a*m,c[1]=n*u+a*t,c[2]=n*g+a*l,c[3]=n*w+a*s,c}function nt(M,D){const p=D??new d(4),e=M[0],c=M[1],o=M[2],u=M[3],g=e*e+c*c+o*o+u*u,w=g?1/g:0;return p[0]=-e*w,p[1]=-c*w,p[2]=-o*w,p[3]=u*w,p}function Y(M,D){const p=D??new d(4);return p[0]=-M[0],p[1]=-M[1],p[2]=-M[2],p[3]=M[3],p}function ot(M,D){const p=D??new d(4),e=M[0]+M[5]+M[10];if(e>0){const c=Math.sqrt(e+1);p[3]=.5*c;const o=.5/c;p[0]=(M[6]-M[9])*o,p[1]=(M[8]-M[2])*o,p[2]=(M[1]-M[4])*o}else{let c=0;M[5]>M[0]&&(c=1),M[10]>M[c*4+c]&&(c=2);const o=(c+1)%3,u=(c+2)%3,g=Math.sqrt(M[c*4+c]-M[o*4+o]-M[u*4+u]+1);p[c]=.5*g;const w=.5/g;p[3]=(M[o*4+u]-M[u*4+o])*w,p[o]=(M[o*4+c]+M[c*4+o])*w,p[u]=(M[u*4+c]+M[c*4+u])*w}return p}function $(M,D,p,e,c){const o=c??new d(4),u=M*.5,g=D*.5,w=p*.5,m=Math.sin(u),t=Math.cos(u),l=Math.sin(g),s=Math.cos(g),r=Math.sin(w),n=Math.cos(w);switch(e){case"xyz":o[0]=m*s*n+t*l*r,o[1]=t*l*n-m*s*r,o[2]=t*s*r+m*l*n,o[3]=t*s*n-m*l*r;break;case"xzy":o[0]=m*s*n-t*l*r,o[1]=t*l*n-m*s*r,o[2]=t*s*r+m*l*n,o[3]=t*s*n+m*l*r;break;case"yxz":o[0]=m*s*n+t*l*r,o[1]=t*l*n-m*s*r,o[2]=t*s*r-m*l*n,o[3]=t*s*n+m*l*r;break;case"yzx":o[0]=m*s*n+t*l*r,o[1]=t*l*n+m*s*r,o[2]=t*s*r-m*l*n,o[3]=t*s*n-m*l*r;break;case"zxy":o[0]=m*s*n-t*l*r,o[1]=t*l*n+m*s*r,o[2]=t*s*r+m*l*n,o[3]=t*s*n-m*l*r;break;case"zyx":o[0]=m*s*n-t*l*r,o[1]=t*l*n+m*s*r,o[2]=t*s*r-m*l*n,o[3]=t*s*n+m*l*r;break;default:throw new Error(`Unknown rotation order: ${e}`)}return o}function B(M,D){const p=D??new d(4);return p[0]=M[0],p[1]=M[1],p[2]=M[2],p[3]=M[3],p}const j=B;function st(M,D,p){const e=p??new d(4);return e[0]=M[0]+D[0],e[1]=M[1]+D[1],e[2]=M[2]+D[2],e[3]=M[3]+D[3],e}function at(M,D,p){const e=p??new d(4);return e[0]=M[0]-D[0],e[1]=M[1]-D[1],e[2]=M[2]-D[2],e[3]=M[3]-D[3],e}const pt=at;function gt(M,D,p){const e=p??new d(4);return e[0]=M[0]*D,e[1]=M[1]*D,e[2]=M[2]*D,e[3]=M[3]*D,e}const mt=gt;function xt(M,D,p){const e=p??new d(4);return e[0]=M[0]/D,e[1]=M[1]/D,e[2]=M[2]/D,e[3]=M[3]/D,e}function lt(M,D){return M[0]*D[0]+M[1]*D[1]+M[2]*D[2]+M[3]*D[3]}function yt(M,D,p,e){const c=e??new d(4);return c[0]=M[0]+p*(D[0]-M[0]),c[1]=M[1]+p*(D[1]-M[1]),c[2]=M[2]+p*(D[2]-M[2]),c[3]=M[3]+p*(D[3]-M[3]),c}function Q(M){const D=M[0],p=M[1],e=M[2],c=M[3];return Math.sqrt(D*D+p*p+e*e+c*c)}const Z=Q;function ut(M){const D=M[0],p=M[1],e=M[2],c=M[3];return D*D+p*p+e*e+c*c}const k=ut;function C(M,D){const p=D??new d(4),e=M[0],c=M[1],o=M[2],u=M[3],g=Math.sqrt(e*e+c*c+o*o+u*u);return g>1e-5?(p[0]=e/g,p[1]=c/g,p[2]=o/g,p[3]=u/g):(p[0]=0,p[1]=0,p[2]=0,p[3]=1),p}function W(M,D){return Math.abs(M[0]-D[0])<H&&Math.abs(M[1]-D[1])<H&&Math.abs(M[2]-D[2])<H&&Math.abs(M[3]-D[3])<H}function rt(M,D){return M[0]===D[0]&&M[1]===D[1]&&M[2]===D[2]&&M[3]===D[3]}function Ut(M){const D=M??new d(4);return D[0]=0,D[1]=0,D[2]=0,D[3]=1,D}const J=i.create(),ct=i.create(),vt=i.create();function Rt(M,D,p){const e=p??new d(4),c=i.dot(M,D);return c<-.999999?(i.cross(ct,M,J),i.len(J)<1e-6&&i.cross(vt,M,J),i.normalize(J,J),_(J,Math.PI,e),e):c>.999999?(e[0]=0,e[1]=0,e[2]=0,e[3]=1,e):(i.cross(M,D,J),e[0]=J[0],e[1]=J[1],e[2]=J[2],e[3]=1+c,C(e,e))}const it=new d(4),Mt=new d(4);function bt(M,D,p,e,c,o){const u=o??new d(4);return X(M,e,c,it),X(D,p,c,Mt),X(it,Mt,2*c*(1-c),u),u}return{create:x,fromValues:y,set:b,fromAxisAngle:_,toAxisAngle:P,angle:T,multiply:z,mul:q,rotateX:V,rotateY:L,rotateZ:N,slerp:X,inverse:nt,conjugate:Y,fromMat:ot,fromEuler:$,copy:B,clone:j,add:st,subtract:at,sub:pt,mulScalar:gt,scale:mt,divScalar:xt,dot:lt,lerp:yt,length:Q,len:Z,lengthSq:ut,lenSq:k,normalize:C,equalsApproximately:W,equals:rt,identity:Ut,rotationTo:Rt,sqlerp:bt}}const ue=new Map;function Se(d){let i=ue.get(d);return i||(i=be(d),ue.set(d,i)),i}function Ae(d){function i(p,e,c,o){const u=new d(4);return p!==void 0&&(u[0]=p,e!==void 0&&(u[1]=e,c!==void 0&&(u[2]=c,o!==void 0&&(u[3]=o)))),u}const x=i;function y(p,e,c,o,u){const g=u??new d(4);return g[0]=p,g[1]=e,g[2]=c,g[3]=o,g}function b(p,e){const c=e??new d(4);return c[0]=Math.ceil(p[0]),c[1]=Math.ceil(p[1]),c[2]=Math.ceil(p[2]),c[3]=Math.ceil(p[3]),c}function _(p,e){const c=e??new d(4);return c[0]=Math.floor(p[0]),c[1]=Math.floor(p[1]),c[2]=Math.floor(p[2]),c[3]=Math.floor(p[3]),c}function P(p,e){const c=e??new d(4);return c[0]=Math.round(p[0]),c[1]=Math.round(p[1]),c[2]=Math.round(p[2]),c[3]=Math.round(p[3]),c}function T(p,e=0,c=1,o){const u=o??new d(4);return u[0]=Math.min(c,Math.max(e,p[0])),u[1]=Math.min(c,Math.max(e,p[1])),u[2]=Math.min(c,Math.max(e,p[2])),u[3]=Math.min(c,Math.max(e,p[3])),u}function z(p,e,c){const o=c??new d(4);return o[0]=p[0]+e[0],o[1]=p[1]+e[1],o[2]=p[2]+e[2],o[3]=p[3]+e[3],o}function q(p,e,c,o){const u=o??new d(4);return u[0]=p[0]+e[0]*c,u[1]=p[1]+e[1]*c,u[2]=p[2]+e[2]*c,u[3]=p[3]+e[3]*c,u}function V(p,e,c){const o=c??new d(4);return o[0]=p[0]-e[0],o[1]=p[1]-e[1],o[2]=p[2]-e[2],o[3]=p[3]-e[3],o}const L=V;function N(p,e){return Math.abs(p[0]-e[0])<H&&Math.abs(p[1]-e[1])<H&&Math.abs(p[2]-e[2])<H&&Math.abs(p[3]-e[3])<H}function X(p,e){return p[0]===e[0]&&p[1]===e[1]&&p[2]===e[2]&&p[3]===e[3]}function nt(p,e,c,o){const u=o??new d(4);return u[0]=p[0]+c*(e[0]-p[0]),u[1]=p[1]+c*(e[1]-p[1]),u[2]=p[2]+c*(e[2]-p[2]),u[3]=p[3]+c*(e[3]-p[3]),u}function Y(p,e,c,o){const u=o??new d(4);return u[0]=p[0]+c[0]*(e[0]-p[0]),u[1]=p[1]+c[1]*(e[1]-p[1]),u[2]=p[2]+c[2]*(e[2]-p[2]),u[3]=p[3]+c[3]*(e[3]-p[3]),u}function ot(p,e,c){const o=c??new d(4);return o[0]=Math.max(p[0],e[0]),o[1]=Math.max(p[1],e[1]),o[2]=Math.max(p[2],e[2]),o[3]=Math.max(p[3],e[3]),o}function $(p,e,c){const o=c??new d(4);return o[0]=Math.min(p[0],e[0]),o[1]=Math.min(p[1],e[1]),o[2]=Math.min(p[2],e[2]),o[3]=Math.min(p[3],e[3]),o}function B(p,e,c){const o=c??new d(4);return o[0]=p[0]*e,o[1]=p[1]*e,o[2]=p[2]*e,o[3]=p[3]*e,o}const j=B;function st(p,e,c){const o=c??new d(4);return o[0]=p[0]/e,o[1]=p[1]/e,o[2]=p[2]/e,o[3]=p[3]/e,o}function at(p,e){const c=e??new d(4);return c[0]=1/p[0],c[1]=1/p[1],c[2]=1/p[2],c[3]=1/p[3],c}const pt=at;function gt(p,e){return p[0]*e[0]+p[1]*e[1]+p[2]*e[2]+p[3]*e[3]}function mt(p){const e=p[0],c=p[1],o=p[2],u=p[3];return Math.sqrt(e*e+c*c+o*o+u*u)}const xt=mt;function lt(p){const e=p[0],c=p[1],o=p[2],u=p[3];return e*e+c*c+o*o+u*u}const yt=lt;function Q(p,e){const c=p[0]-e[0],o=p[1]-e[1],u=p[2]-e[2],g=p[3]-e[3];return Math.sqrt(c*c+o*o+u*u+g*g)}const Z=Q;function ut(p,e){const c=p[0]-e[0],o=p[1]-e[1],u=p[2]-e[2],g=p[3]-e[3];return c*c+o*o+u*u+g*g}const k=ut;function C(p,e){const c=e??new d(4),o=p[0],u=p[1],g=p[2],w=p[3],m=Math.sqrt(o*o+u*u+g*g+w*w);return m>1e-5?(c[0]=o/m,c[1]=u/m,c[2]=g/m,c[3]=w/m):(c[0]=0,c[1]=0,c[2]=0,c[3]=0),c}function W(p,e){const c=e??new d(4);return c[0]=-p[0],c[1]=-p[1],c[2]=-p[2],c[3]=-p[3],c}function rt(p,e){const c=e??new d(4);return c[0]=p[0],c[1]=p[1],c[2]=p[2],c[3]=p[3],c}const Ut=rt;function J(p,e,c){const o=c??new d(4);return o[0]=p[0]*e[0],o[1]=p[1]*e[1],o[2]=p[2]*e[2],o[3]=p[3]*e[3],o}const ct=J;function vt(p,e,c){const o=c??new d(4);return o[0]=p[0]/e[0],o[1]=p[1]/e[1],o[2]=p[2]/e[2],o[3]=p[3]/e[3],o}const Rt=vt;function it(p){const e=p??new d(4);return e[0]=0,e[1]=0,e[2]=0,e[3]=0,e}function Mt(p,e,c){const o=c??new d(4),u=p[0],g=p[1],w=p[2],m=p[3];return o[0]=e[0]*u+e[4]*g+e[8]*w+e[12]*m,o[1]=e[1]*u+e[5]*g+e[9]*w+e[13]*m,o[2]=e[2]*u+e[6]*g+e[10]*w+e[14]*m,o[3]=e[3]*u+e[7]*g+e[11]*w+e[15]*m,o}function bt(p,e,c){const o=c??new d(4);return C(p,o),B(o,e,o)}function M(p,e,c){const o=c??new d(4);return mt(p)>e?bt(p,e,o):rt(p,o)}function D(p,e,c){const o=c??new d(4);return nt(p,e,.5,o)}return{create:i,fromValues:x,set:y,ceil:b,floor:_,round:P,clamp:T,add:z,addScaled:q,subtract:V,sub:L,equalsApproximately:N,equals:X,lerp:nt,lerpV:Y,max:ot,min:$,mulScalar:B,scale:j,divScalar:st,inverse:at,invert:pt,dot:gt,length:mt,len:xt,lengthSq:lt,lenSq:yt,distance:Q,dist:Z,distanceSq:ut,distSq:k,normalize:C,negate:W,copy:rt,clone:Ut,multiply:J,mul:ct,divide:vt,div:Rt,zero:it,transformMat4:Mt,setLength:bt,truncate:M,midpoint:D}}const he=new Map;function De(d){let i=he.get(d);return i||(i=Ae(d),he.set(d,i)),i}function te(d,i,x,y,b,_){return{mat3:ye(d),mat4:Me(i),quat:Se(x),vec2:fe(y),vec3:Zt(b),vec4:De(_)}}const{mat4:Vt,vec3:Qt}=te(Float32Array,Float32Array,Float32Array,Float32Array,Float32Array,Float32Array);te(Float64Array,Float64Array,Float64Array,Float64Array,Float64Array,Float64Array);te(ge,Array,Array,Array,Array,Array);class kt{constructor(i,x,y,b,_="div"){this.parent=i,this.object=x,this.property=y,this._disabled=!1,this._hidden=!1,this.initialValue=this.getValue(),this.domElement=document.createElement(_),this.domElement.classList.add("lil-controller"),this.domElement.classList.add(b),this.$name=document.createElement("div"),this.$name.classList.add("lil-name"),kt.nextNameID=kt.nextNameID||0,this.$name.id=`lil-gui-name-${++kt.nextNameID}`,this.$widget=document.createElement("div"),this.$widget.classList.add("lil-widget"),this.$disable=this.$widget,this.domElement.appendChild(this.$name),this.domElement.appendChild(this.$widget),this.domElement.addEventListener("keydown",P=>P.stopPropagation()),this.domElement.addEventListener("keyup",P=>P.stopPropagation()),this.parent.children.push(this),this.parent.controllers.push(this),this.parent.$children.appendChild(this.domElement),this._listenCallback=this._listenCallback.bind(this),this.name(y)}name(i){return this._name=i,this.$name.textContent=i,this}onChange(i){return this._onChange=i,this}_callOnChange(){this.parent._callOnChange(this),this._onChange!==void 0&&this._onChange.call(this,this.getValue()),this._changed=!0}onFinishChange(i){return this._onFinishChange=i,this}_callOnFinishChange(){this._changed&&(this.parent._callOnFinishChange(this),this._onFinishChange!==void 0&&this._onFinishChange.call(this,this.getValue())),this._changed=!1}reset(){return this.setValue(this.initialValue),this._callOnFinishChange(),this}enable(i=!0){return this.disable(!i)}disable(i=!0){return i===this._disabled?this:(this._disabled=i,this.domElement.classList.toggle("lil-disabled",i),this.$disable.toggleAttribute("disabled",i),this)}show(i=!0){return this._hidden=!i,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}options(i){const x=this.parent.add(this.object,this.property,i);return x.name(this._name),this.destroy(),x}min(i){return this}max(i){return this}step(i){return this}decimals(i){return this}listen(i=!0){return this._listening=i,this._listenCallbackID!==void 0&&(cancelAnimationFrame(this._listenCallbackID),this._listenCallbackID=void 0),this._listening&&this._listenCallback(),this}_listenCallback(){this._listenCallbackID=requestAnimationFrame(this._listenCallback);const i=this.save();i!==this._listenPrevValue&&this.updateDisplay(),this._listenPrevValue=i}getValue(){return this.object[this.property]}setValue(i){return this.getValue()!==i&&(this.object[this.property]=i,this._callOnChange(),this.updateDisplay()),this}updateDisplay(){return this}load(i){return this.setValue(i),this._callOnFinishChange(),this}save(){return this.getValue()}destroy(){this.listen(!1),this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.controllers.splice(this.parent.controllers.indexOf(this),1),this.parent.$children.removeChild(this.domElement)}}class _e extends kt{constructor(i,x,y){super(i,x,y,"lil-boolean","label"),this.$input=document.createElement("input"),this.$input.setAttribute("type","checkbox"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$input.addEventListener("change",()=>{this.setValue(this.$input.checked),this._callOnFinishChange()}),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.checked=this.getValue(),this}}function Jt(d){let i,x;return(i=d.match(/(#|0x)?([a-f0-9]{6})/i))?x=i[2]:(i=d.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/))?x=parseInt(i[1]).toString(16).padStart(2,0)+parseInt(i[2]).toString(16).padStart(2,0)+parseInt(i[3]).toString(16).padStart(2,0):(i=d.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i))&&(x=i[1]+i[1]+i[2]+i[2]+i[3]+i[3]),x?"#"+x:!1}const Pe={isPrimitive:!0,match:d=>typeof d=="string",fromHexString:Jt,toHexString:Jt},Gt={isPrimitive:!0,match:d=>typeof d=="number",fromHexString:d=>parseInt(d.substring(1),16),toHexString:d=>"#"+d.toString(16).padStart(6,0)},Ee={isPrimitive:!1,match:d=>Array.isArray(d)||ArrayBuffer.isView(d),fromHexString(d,i,x=1){const y=Gt.fromHexString(d);i[0]=(y>>16&255)/255*x,i[1]=(y>>8&255)/255*x,i[2]=(y&255)/255*x},toHexString([d,i,x],y=1){y=255/y;const b=d*y<<16^i*y<<8^x*y<<0;return Gt.toHexString(b)}},Ue={isPrimitive:!1,match:d=>Object(d)===d,fromHexString(d,i,x=1){const y=Gt.fromHexString(d);i.r=(y>>16&255)/255*x,i.g=(y>>8&255)/255*x,i.b=(y&255)/255*x},toHexString({r:d,g:i,b:x},y=1){y=255/y;const b=d*y<<16^i*y<<8^x*y<<0;return Gt.toHexString(b)}},Re=[Pe,Gt,Ee,Ue];function ze(d){return Re.find(i=>i.match(d))}class Te extends kt{constructor(i,x,y,b){super(i,x,y,"lil-color"),this.$input=document.createElement("input"),this.$input.setAttribute("type","color"),this.$input.setAttribute("tabindex",-1),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$text=document.createElement("input"),this.$text.setAttribute("type","text"),this.$text.setAttribute("spellcheck","false"),this.$text.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("lil-display"),this.$display.appendChild(this.$input),this.$widget.appendChild(this.$display),this.$widget.appendChild(this.$text),this._format=ze(this.initialValue),this._rgbScale=b,this._initialValueHexString=this.save(),this._textFocused=!1,this.$input.addEventListener("input",()=>{this._setValueFromHexString(this.$input.value)}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$text.addEventListener("input",()=>{const _=Jt(this.$text.value);_&&this._setValueFromHexString(_)}),this.$text.addEventListener("focus",()=>{this._textFocused=!0,this.$text.select()}),this.$text.addEventListener("blur",()=>{this._textFocused=!1,this.updateDisplay(),this._callOnFinishChange()}),this.$disable=this.$text,this.updateDisplay()}reset(){return this._setValueFromHexString(this._initialValueHexString),this}_setValueFromHexString(i){if(this._format.isPrimitive){const x=this._format.fromHexString(i);this.setValue(x)}else this._format.fromHexString(i,this.getValue(),this._rgbScale),this._callOnChange(),this.updateDisplay()}save(){return this._format.toHexString(this.getValue(),this._rgbScale)}load(i){return this._setValueFromHexString(i),this._callOnFinishChange(),this}updateDisplay(){return this.$input.value=this._format.toHexString(this.getValue(),this._rgbScale),this._textFocused||(this.$text.value=this.$input.value.substring(1)),this.$display.style.backgroundColor=this.$input.value,this}}class Kt extends kt{constructor(i,x,y){super(i,x,y,"lil-function"),this.$button=document.createElement("button"),this.$button.appendChild(this.$name),this.$widget.appendChild(this.$button),this.$button.addEventListener("click",b=>{b.preventDefault(),this.getValue().call(this.object),this._callOnChange()}),this.$button.addEventListener("touchstart",()=>{},{passive:!0}),this.$disable=this.$button}}class Be extends kt{constructor(i,x,y,b,_,P){super(i,x,y,"lil-number"),this._initInput(),this.min(b),this.max(_);const T=P!==void 0;this.step(T?P:this._getImplicitStep(),T),this.updateDisplay()}decimals(i){return this._decimals=i,this.updateDisplay(),this}min(i){return this._min=i,this._onUpdateMinMax(),this}max(i){return this._max=i,this._onUpdateMinMax(),this}step(i,x=!0){return this._step=i,this._stepExplicit=x,this}updateDisplay(){const i=this.getValue();if(this._hasSlider){let x=(i-this._min)/(this._max-this._min);x=Math.max(0,Math.min(x,1)),this.$fill.style.width=x*100+"%"}return this._inputFocused||(this.$input.value=this._decimals===void 0?i:i.toFixed(this._decimals)),this}_initInput(){this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("aria-labelledby",this.$name.id),window.matchMedia("(pointer: coarse)").matches&&(this.$input.setAttribute("type","number"),this.$input.setAttribute("step","any")),this.$widget.appendChild(this.$input),this.$disable=this.$input;const x=()=>{let B=parseFloat(this.$input.value);isNaN(B)||(this._stepExplicit&&(B=this._snap(B)),this.setValue(this._clamp(B)))},y=B=>{const j=parseFloat(this.$input.value);isNaN(j)||(this._snapClampSetValue(j+B),this.$input.value=this.getValue())},b=B=>{B.key==="Enter"&&this.$input.blur(),B.code==="ArrowUp"&&(B.preventDefault(),y(this._step*this._arrowKeyMultiplier(B))),B.code==="ArrowDown"&&(B.preventDefault(),y(this._step*this._arrowKeyMultiplier(B)*-1))},_=B=>{this._inputFocused&&(B.preventDefault(),y(this._step*this._normalizeMouseWheel(B)))};let P=!1,T,z,q,V,L;const N=5,X=B=>{T=B.clientX,z=q=B.clientY,P=!0,V=this.getValue(),L=0,window.addEventListener("mousemove",nt),window.addEventListener("mouseup",Y)},nt=B=>{if(P){const j=B.clientX-T,st=B.clientY-z;Math.abs(st)>N?(B.preventDefault(),this.$input.blur(),P=!1,this._setDraggingStyle(!0,"vertical")):Math.abs(j)>N&&Y()}if(!P){const j=B.clientY-q;L-=j*this._step*this._arrowKeyMultiplier(B),V+L>this._max?L=this._max-V:V+L<this._min&&(L=this._min-V),this._snapClampSetValue(V+L)}q=B.clientY},Y=()=>{this._setDraggingStyle(!1,"vertical"),this._callOnFinishChange(),window.removeEventListener("mousemove",nt),window.removeEventListener("mouseup",Y)},ot=()=>{this._inputFocused=!0},$=()=>{this._inputFocused=!1,this.updateDisplay(),this._callOnFinishChange()};this.$input.addEventListener("input",x),this.$input.addEventListener("keydown",b),this.$input.addEventListener("wheel",_,{passive:!1}),this.$input.addEventListener("mousedown",X),this.$input.addEventListener("focus",ot),this.$input.addEventListener("blur",$)}_initSlider(){this._hasSlider=!0,this.$slider=document.createElement("div"),this.$slider.classList.add("lil-slider"),this.$fill=document.createElement("div"),this.$fill.classList.add("lil-fill"),this.$slider.appendChild(this.$fill),this.$widget.insertBefore(this.$slider,this.$input),this.domElement.classList.add("lil-has-slider");const i=($,B,j,st,at)=>($-B)/(j-B)*(at-st)+st,x=$=>{const B=this.$slider.getBoundingClientRect();let j=i($,B.left,B.right,this._min,this._max);this._snapClampSetValue(j)},y=$=>{this._setDraggingStyle(!0),x($.clientX),window.addEventListener("mousemove",b),window.addEventListener("mouseup",_)},b=$=>{x($.clientX)},_=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("mousemove",b),window.removeEventListener("mouseup",_)};let P=!1,T,z;const q=$=>{$.preventDefault(),this._setDraggingStyle(!0),x($.touches[0].clientX),P=!1},V=$=>{$.touches.length>1||(this._hasScrollBar?(T=$.touches[0].clientX,z=$.touches[0].clientY,P=!0):q($),window.addEventListener("touchmove",L,{passive:!1}),window.addEventListener("touchend",N))},L=$=>{if(P){const B=$.touches[0].clientX-T,j=$.touches[0].clientY-z;Math.abs(B)>Math.abs(j)?q($):(window.removeEventListener("touchmove",L),window.removeEventListener("touchend",N))}else $.preventDefault(),x($.touches[0].clientX)},N=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("touchmove",L),window.removeEventListener("touchend",N)},X=this._callOnFinishChange.bind(this),nt=400;let Y;const ot=$=>{if(Math.abs($.deltaX)<Math.abs($.deltaY)&&this._hasScrollBar)return;$.preventDefault();const j=this._normalizeMouseWheel($)*this._step;this._snapClampSetValue(this.getValue()+j),this.$input.value=this.getValue(),clearTimeout(Y),Y=setTimeout(X,nt)};this.$slider.addEventListener("mousedown",y),this.$slider.addEventListener("touchstart",V,{passive:!1}),this.$slider.addEventListener("wheel",ot,{passive:!1})}_setDraggingStyle(i,x="horizontal"){this.$slider&&this.$slider.classList.toggle("lil-active",i),document.body.classList.toggle("lil-dragging",i),document.body.classList.toggle(`lil-${x}`,i)}_getImplicitStep(){return this._hasMin&&this._hasMax?(this._max-this._min)/1e3:.1}_onUpdateMinMax(){!this._hasSlider&&this._hasMin&&this._hasMax&&(this._stepExplicit||this.step(this._getImplicitStep(),!1),this._initSlider(),this.updateDisplay())}_normalizeMouseWheel(i){let{deltaX:x,deltaY:y}=i;return Math.floor(i.deltaY)!==i.deltaY&&i.wheelDelta&&(x=0,y=-i.wheelDelta/120,y*=this._stepExplicit?1:10),x+-y}_arrowKeyMultiplier(i){let x=this._stepExplicit?1:10;return i.shiftKey?x*=10:i.altKey&&(x/=10),x}_snap(i){let x=0;return this._hasMin?x=this._min:this._hasMax&&(x=this._max),i-=x,i=Math.round(i/this._step)*this._step,i+=x,i=parseFloat(i.toPrecision(15)),i}_clamp(i){return i<this._min&&(i=this._min),i>this._max&&(i=this._max),i}_snapClampSetValue(i){this.setValue(this._clamp(this._snap(i)))}get _hasScrollBar(){const i=this.parent.root.$children;return i.scrollHeight>i.clientHeight}get _hasMin(){return this._min!==void 0}get _hasMax(){return this._max!==void 0}}class Le extends kt{constructor(i,x,y,b){super(i,x,y,"lil-option"),this.$select=document.createElement("select"),this.$select.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("lil-display"),this.$select.addEventListener("change",()=>{this.setValue(this._values[this.$select.selectedIndex]),this._callOnFinishChange()}),this.$select.addEventListener("focus",()=>{this.$display.classList.add("lil-focus")}),this.$select.addEventListener("blur",()=>{this.$display.classList.remove("lil-focus")}),this.$widget.appendChild(this.$select),this.$widget.appendChild(this.$display),this.$disable=this.$select,this.options(b)}options(i){return this._values=Array.isArray(i)?i:Object.values(i),this._names=Array.isArray(i)?i:Object.keys(i),this.$select.replaceChildren(),this._names.forEach(x=>{const y=document.createElement("option");y.textContent=x,this.$select.appendChild(y)}),this.updateDisplay(),this}updateDisplay(){const i=this.getValue(),x=this._values.indexOf(i);return this.$select.selectedIndex=x,this.$display.textContent=x===-1?i:this._names[x],this}}class $e extends kt{constructor(i,x,y){super(i,x,y,"lil-string"),this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("spellcheck","false"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$input.addEventListener("input",()=>{this.setValue(this.$input.value)}),this.$input.addEventListener("keydown",b=>{b.code==="Enter"&&this.$input.blur()}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$widget.appendChild(this.$input),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.value=this.getValue(),this}}var Ie=`.lil-gui {
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
}`;function Oe(d){const i=document.createElement("style");i.innerHTML=d;const x=document.querySelector("head link[rel=stylesheet], head style");x?document.head.insertBefore(i,x):document.head.appendChild(i)}let de=!1;class ee{constructor({parent:i,autoPlace:x=i===void 0,container:y,width:b,title:_="Controls",closeFolders:P=!1,injectStyles:T=!0,touchStyles:z=!0}={}){if(this.parent=i,this.root=i?i.root:this,this.children=[],this.controllers=[],this.folders=[],this._closed=!1,this._hidden=!1,this.domElement=document.createElement("div"),this.domElement.classList.add("lil-gui"),this.$title=document.createElement("button"),this.$title.classList.add("lil-title"),this.$title.setAttribute("aria-expanded",!0),this.$title.addEventListener("click",()=>this.openAnimated(this._closed)),this.$title.addEventListener("touchstart",()=>{},{passive:!0}),this.$children=document.createElement("div"),this.$children.classList.add("lil-children"),this.domElement.appendChild(this.$title),this.domElement.appendChild(this.$children),this.title(_),this.parent){this.parent.children.push(this),this.parent.folders.push(this),this.parent.$children.appendChild(this.domElement);return}this.domElement.classList.add("lil-root"),z&&this.domElement.classList.add("lil-allow-touch-styles"),!de&&T&&(Oe(Ie),de=!0),y?y.appendChild(this.domElement):x&&(this.domElement.classList.add("lil-auto-place","autoPlace"),document.body.appendChild(this.domElement)),b&&this.domElement.style.setProperty("--width",b+"px"),this._closeFolders=P}add(i,x,y,b,_){if(Object(y)===y)return new Le(this,i,x,y);const P=i[x];switch(typeof P){case"number":return new Be(this,i,x,y,b,_);case"boolean":return new _e(this,i,x);case"string":return new $e(this,i,x);case"function":return new Kt(this,i,x)}console.error(`gui.add failed
	property:`,x,`
	object:`,i,`
	value:`,P)}addColor(i,x,y=1){return new Te(this,i,x,y)}addFolder(i){const x=new ee({parent:this,title:i});return this.root._closeFolders&&x.close(),x}load(i,x=!0){return i.controllers&&this.controllers.forEach(y=>{y instanceof Kt||y._name in i.controllers&&y.load(i.controllers[y._name])}),x&&i.folders&&this.folders.forEach(y=>{y._title in i.folders&&y.load(i.folders[y._title])}),this}save(i=!0){const x={controllers:{},folders:{}};return this.controllers.forEach(y=>{if(!(y instanceof Kt)){if(y._name in x.controllers)throw new Error(`Cannot save GUI with duplicate property "${y._name}"`);x.controllers[y._name]=y.save()}}),i&&this.folders.forEach(y=>{if(y._title in x.folders)throw new Error(`Cannot save GUI with duplicate folder "${y._title}"`);x.folders[y._title]=y.save()}),x}open(i=!0){return this._setClosed(!i),this.$title.setAttribute("aria-expanded",!this._closed),this.domElement.classList.toggle("lil-closed",this._closed),this}close(){return this.open(!1)}_setClosed(i){this._closed!==i&&(this._closed=i,this._callOnOpenClose(this))}show(i=!0){return this._hidden=!i,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}openAnimated(i=!0){return this._setClosed(!i),this.$title.setAttribute("aria-expanded",!this._closed),requestAnimationFrame(()=>{const x=this.$children.clientHeight;this.$children.style.height=x+"px",this.domElement.classList.add("lil-transition");const y=_=>{_.target===this.$children&&(this.$children.style.height="",this.domElement.classList.remove("lil-transition"),this.$children.removeEventListener("transitionend",y))};this.$children.addEventListener("transitionend",y);const b=i?this.$children.scrollHeight:0;this.domElement.classList.toggle("lil-closed",!i),requestAnimationFrame(()=>{this.$children.style.height=b+"px"})}),this}title(i){return this._title=i,this.$title.textContent=i,this}reset(i=!0){return(i?this.controllersRecursive():this.controllers).forEach(y=>y.reset()),this}onChange(i){return this._onChange=i,this}_callOnChange(i){this.parent&&this.parent._callOnChange(i),this._onChange!==void 0&&this._onChange.call(this,{object:i.object,property:i.property,value:i.getValue(),controller:i})}onFinishChange(i){return this._onFinishChange=i,this}_callOnFinishChange(i){this.parent&&this.parent._callOnFinishChange(i),this._onFinishChange!==void 0&&this._onFinishChange.call(this,{object:i.object,property:i.property,value:i.getValue(),controller:i})}onOpenClose(i){return this._onOpenClose=i,this}_callOnOpenClose(i){this.parent&&this.parent._callOnOpenClose(i),this._onOpenClose!==void 0&&this._onOpenClose.call(this,i)}destroy(){this.parent&&(this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.folders.splice(this.parent.folders.indexOf(this),1)),this.domElement.parentElement&&this.domElement.parentElement.removeChild(this.domElement),Array.from(this.children).forEach(i=>i.destroy())}controllersRecursive(){let i=Array.from(this.controllers);return this.folders.forEach(x=>{i=i.concat(x.controllersRecursive())}),i}foldersRecursive(){let i=Array.from(this.folders);return this.folders.forEach(x=>{i=i.concat(x.foldersRecursive())}),i}}class Fe{device;format;uniformBuffer;tileTexture;tileSampler;lightUniformBuffer;sphereUniformBuffer;shadowUniformBuffer;positionBuffer;indexBuffer;vertexCount;pipeline;constructor(i,x,y,b,_,P,T,z){this.device=i,this.format=x,this.uniformBuffer=y,this.tileTexture=b,this.tileSampler=_,this.lightUniformBuffer=P,this.sphereUniformBuffer=T,this.shadowUniformBuffer=z,this.createGeometry(),this.createPipeline()}createGeometry(){function i(P){return[(P&1)*2-1,(P&2)-1,(P&4)/2-1]}const x=[[0,4,2,6,-1,0,0],[1,3,5,7,1,0,0],[2,6,3,7,0,1,0],[0,2,1,3,0,0,-1],[4,5,6,7,0,0,1]],y=[],b=[];let _=0;for(const P of x){const T=_;for(let z=0;z<4;z++){const q=P[z],V=i(q);y.push(...V),_++}b.push(T+0,T+1,T+2),b.push(T+2,T+1,T+3)}this.vertexCount=b.length,this.positionBuffer=this.device.createBuffer({label:"Pool Vertex Buffer",size:y.length*4,usage:GPUBufferUsage.VERTEX,mappedAtCreation:!0}),new Float32Array(this.positionBuffer.getMappedRange()).set(y),this.positionBuffer.unmap(),this.indexBuffer=this.device.createBuffer({label:"Pool Index Buffer",size:b.length*4,usage:GPUBufferUsage.INDEX,mappedAtCreation:!0}),new Uint32Array(this.indexBuffer.getMappedRange()).set(b),this.indexBuffer.unmap()}createPipeline(){const i=this.device.createShaderModule({label:"Pool Shader",code:`
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

            // Ambient occlusion
            var scale = 0.5;
            scale /= length(point);
            scale *= mix(1.0, 1.0 - 0.9 / pow(length(point - sphere.center) / sphere.radius, 4.0), shadows.sphere);

            // Lighting with caustics or rim shadow

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
      `});this.pipeline=this.device.createRenderPipeline({label:"Pool Pipeline",layout:"auto",vertex:{module:i,entryPoint:"vs_main",buffers:[{arrayStride:12,attributes:[{shaderLocation:0,offset:0,format:"float32x3"}]}]},fragment:{module:i,entryPoint:"fs_main",targets:[{format:this.format}]},primitive:{topology:"triangle-list",cullMode:"back"},depthStencil:{depthWriteEnabled:!0,depthCompare:"less",format:"depth24plus"}})}render(i,x,y,b){const _=this.device.createBindGroup({layout:this.pipeline.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:this.uniformBuffer}},{binding:1,resource:this.tileSampler},{binding:2,resource:this.tileTexture.createView()},{binding:3,resource:{buffer:this.lightUniformBuffer}},{binding:4,resource:{buffer:this.sphereUniformBuffer}},{binding:5,resource:y},{binding:6,resource:x.createView()},{binding:7,resource:b.createView()},{binding:8,resource:{buffer:this.shadowUniformBuffer}}]});i.setPipeline(this.pipeline),i.setBindGroup(0,_),i.setVertexBuffer(0,this.positionBuffer),i.setIndexBuffer(this.indexBuffer,"uint32"),i.drawIndexed(this.vertexCount)}}class Ve{device;format;commonUniformBuffer;sphereUniformBuffer;lightUniformBuffer;positionBuffer;indexBuffer;vertexCount;pipeline;constructor(i,x,y,b,_){this.device=i,this.format=x,this.commonUniformBuffer=y,this.sphereUniformBuffer=_,this.lightUniformBuffer=b,this.createGeometry(),this.createPipeline()}update(i,x){const y=new Float32Array([...i,x]);this.device.queue.writeBuffer(this.sphereUniformBuffer,0,y)}createGeometry(){class x{unique;map;constructor(){this.unique=[],this.map=new Map}add(q){const V=q.join(",");return this.map.has(V)||(this.map.set(V,this.unique.length),this.unique.push(q)),this.map.get(V)}}function y(z){return[(z&1)*2-1,(z&2)-1,(z&4)/2-1]}function b(z){return z+(z-z*z)/2}const _=new x,P=[];for(let z=0;z<8;z++){const q=y(z),V=q[0]*q[1]*q[2]>0,L=[];for(let N=0;N<=10;N++)for(let X=0;N+X<=10;X++){const nt=N/10,Y=X/10,ot=(10-N-X)/10,$=[b(nt),b(Y),b(ot)],B=Math.sqrt($[0]*$[0]+$[1]*$[1]+$[2]*$[2]),j=[$[0]/B*q[0],$[1]/B*q[1],$[2]/B*q[2]];L.push(_.add(j))}for(let N=0;N<=10;N++)if(N>0)for(let X=0;N+X<=10;X++){const nt=(N-1)*11+(N-1-(N-1)*(N-1))/2+X,Y=N*11+(N-N*N)/2+X;V?P.push(L[nt],L[Y],L[nt+1]):P.push(L[nt],L[nt+1],L[Y]),N+X<10&&(V?P.push(L[Y],L[Y+1],L[nt+1]):P.push(L[Y],L[nt+1],L[Y+1]))}}this.vertexCount=P.length;const T=[];for(const z of _.unique)T.push(...z);this.positionBuffer=this.device.createBuffer({label:"Sphere Vertex Buffer",size:T.length*4,usage:GPUBufferUsage.VERTEX,mappedAtCreation:!0}),new Float32Array(this.positionBuffer.getMappedRange()).set(T),this.positionBuffer.unmap(),this.indexBuffer=this.device.createBuffer({label:"Sphere Index Buffer",size:P.length*4,usage:GPUBufferUsage.INDEX,mappedAtCreation:!0}),new Uint32Array(this.indexBuffer.getMappedRange()).set(P),this.indexBuffer.unmap()}createPipeline(){const i=this.device.createShaderModule({label:"Sphere Shader",code:`
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
      `});this.pipeline=this.device.createRenderPipeline({label:"Sphere Pipeline",layout:"auto",vertex:{module:i,entryPoint:"vs_main",buffers:[{arrayStride:12,attributes:[{shaderLocation:0,offset:0,format:"float32x3"}]}]},fragment:{module:i,entryPoint:"fs_main",targets:[{format:this.format}]},primitive:{topology:"triangle-list",cullMode:"back"},depthStencil:{depthWriteEnabled:!0,depthCompare:"less",format:"depth24plus"}})}render(i,x,y,b){const _=this.device.createBindGroup({layout:this.pipeline.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:this.commonUniformBuffer}},{binding:1,resource:{buffer:this.sphereUniformBuffer}},{binding:2,resource:{buffer:this.lightUniformBuffer}},{binding:3,resource:y},{binding:4,resource:x.createView()},{binding:5,resource:b.createView()}]});i.setPipeline(this.pipeline),i.setBindGroup(0,_),i.setVertexBuffer(0,this.positionBuffer),i.setIndexBuffer(this.indexBuffer,"uint32"),i.drawIndexed(this.vertexCount)}}class ke{device;width;height;commonUniformBuffer;lightUniformBuffer;sphereUniformBuffer;shadowUniformBuffer;tileTexture;tileSampler;skyTexture;skySampler;textureA;textureB;causticsTexture;sampler;dropPipeline;updatePipeline;normalPipeline;spherePipeline;positionBuffer;indexBuffer;vertexCount;surfaceBindGroupLayout;surfacePipelineAbove;surfacePipelineUnder;causticsPipeline;constructor(i,x,y,b,_,P,T,z,q,V,L){this.device=i,this.width=x,this.height=y,this.commonUniformBuffer=b,this.lightUniformBuffer=_,this.sphereUniformBuffer=P,this.shadowUniformBuffer=T,this.tileTexture=z,this.tileSampler=q,this.skyTexture=V,this.skySampler=L,this.textureA=this.createTexture(),this.textureB=this.createTexture(),this.causticsTexture=this.device.createTexture({size:[1024,1024],format:"rgba8unorm",usage:GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.RENDER_ATTACHMENT}),this.sampler=i.createSampler({magFilter:"linear",minFilter:"linear",addressModeU:"clamp-to-edge",addressModeV:"clamp-to-edge"}),this.createPipelines(),this.createSurfaceMesh(),this.createSurfacePipeline(),this.createCausticsPipeline()}createTexture(){const i=this.device.features.has("float32-filterable")?"rgba32float":"rgba16float";return this.device.createTexture({size:[this.width,this.height],format:i,usage:GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.RENDER_ATTACHMENT})}createPipelines(){const i=this.device.features.has("float32-filterable")?"rgba32float":"rgba16float",x=`
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
    `;this.dropPipeline=this.createPipeline("Drop",x,`
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
    `,32,i),this.updatePipeline=this.createPipeline("Update",x,`
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
    `,16,i),this.normalPipeline=this.createPipeline("Normal",x,`
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
    `,16,i),this.spherePipeline=this.createPipeline("Sphere",x,`
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
    `,32,i)}createPipeline(i,x,y,b,_){const P=this.device.createShaderModule({label:i+" Module",code:x+y});return{pipeline:this.device.createRenderPipeline({label:i+" Pipeline",layout:"auto",vertex:{module:P,entryPoint:"vs_main"},fragment:{module:P,entryPoint:"fs_main",targets:[{format:_}]},primitive:{topology:"triangle-list"}}),uniformSize:b,uniformBuffer:this.device.createBuffer({size:b,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST})}}runPipeline(i,x){this.device.queue.writeBuffer(i.uniformBuffer,0,x);const y=this.device.createBindGroup({layout:i.pipeline.getBindGroupLayout(0),entries:[{binding:0,resource:this.textureA.createView()},{binding:1,resource:this.sampler},{binding:2,resource:{buffer:i.uniformBuffer}}]}),b=this.device.createCommandEncoder(),_=b.beginRenderPass({colorAttachments:[{view:this.textureB.createView(),loadOp:"clear",storeOp:"store",clearValue:{r:0,g:0,b:0,a:0}}]});_.setPipeline(i.pipeline),_.setBindGroup(0,y),_.draw(6),_.end(),this.device.queue.submit([b.finish()]);const P=this.textureA;this.textureA=this.textureB,this.textureB=P}addDrop(i,x,y,b){const _=new Float32Array(4);_[0]=i,_[1]=x,_[2]=y,_[3]=b,this.runPipeline(this.dropPipeline,_)}stepSimulation(){const i=new Float32Array(2);i[0]=1/this.width,i[1]=1/this.height,this.runPipeline(this.updatePipeline,i)}updateNormals(){const i=new Float32Array(2);i[0]=1/this.width,i[1]=1/this.height,this.runPipeline(this.normalPipeline,i)}moveSphere(i,x,y){const b=new Float32Array(8);b[0]=i[0],b[1]=i[1],b[2]=i[2],b[3]=y,b[4]=x[0],b[5]=x[1],b[6]=x[2],b[7]=0,this.runPipeline(this.spherePipeline,b)}createSurfaceMesh(){const x=[],y=[];for(let b=0;b<=200;b++){const _=b/200;for(let P=0;P<=200;P++){const T=P/200;x.push(2*T-1,2*_-1,0)}}for(let b=0;b<200;b++)for(let _=0;_<200;_++){const P=_+b*201;y.push(P,P+1,P+200+1),y.push(P+200+1,P+1,P+200+2)}this.vertexCount=y.length,this.positionBuffer=this.device.createBuffer({label:"Water Surface Vertices",size:x.length*4,usage:GPUBufferUsage.VERTEX,mappedAtCreation:!0}),new Float32Array(this.positionBuffer.getMappedRange()).set(x),this.positionBuffer.unmap(),this.indexBuffer=this.device.createBuffer({label:"Water Surface Indices",size:y.length*4,usage:GPUBufferUsage.INDEX,mappedAtCreation:!0}),new Uint32Array(this.indexBuffer.getMappedRange()).set(y),this.indexBuffer.unmap()}createSurfacePipeline(){const i=b=>`
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

        // Shadow toggle flags
        struct ShadowUniforms {
            rim : f32,
            sphere : f32,
            ao : f32,
        }
        @binding(10) @group(0) var<uniform> shadows : ShadowUniforms;

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
            scale *= mix(1.0, 1.0 - 0.9 / pow(length(point - sphere.center) / sphere.radius, 4.0), shadows.sphere);

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

            // Check sphere intersection first (only if sphere is enabled)
            var q = 1.0e6;
            if (shadows.sphere > 0.5) {
                q = intersectSphere(origin, ray, sphere.center, sphere.radius);
            }
            
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

            ${b?`
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
        `;this.surfaceBindGroupLayout=this.device.createBindGroupLayout({label:"Water Surface BindGroupLayout",entries:[{binding:0,visibility:GPUShaderStage.VERTEX|GPUShaderStage.FRAGMENT,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.FRAGMENT,buffer:{type:"uniform"}},{binding:2,visibility:GPUShaderStage.FRAGMENT,buffer:{type:"uniform"}},{binding:3,visibility:GPUShaderStage.FRAGMENT,sampler:{}},{binding:4,visibility:GPUShaderStage.FRAGMENT,texture:{}},{binding:5,visibility:GPUShaderStage.VERTEX|GPUShaderStage.FRAGMENT,sampler:{}},{binding:6,visibility:GPUShaderStage.VERTEX|GPUShaderStage.FRAGMENT,texture:{}},{binding:7,visibility:GPUShaderStage.FRAGMENT,sampler:{}},{binding:8,visibility:GPUShaderStage.FRAGMENT,texture:{viewDimension:"cube"}},{binding:9,visibility:GPUShaderStage.FRAGMENT,texture:{}},{binding:10,visibility:GPUShaderStage.FRAGMENT,buffer:{type:"uniform"}}]});const x=this.device.createPipelineLayout({label:"Water Surface PipelineLayout",bindGroupLayouts:[this.surfaceBindGroupLayout]}),y=(b,_,P)=>{const T=this.device.createShaderModule({label:`${b} Shader`,code:i(_)});return this.device.createRenderPipeline({label:b,layout:x,vertex:{module:T,entryPoint:"vs_main",buffers:[{arrayStride:12,attributes:[{shaderLocation:0,offset:0,format:"float32x3"}]}]},fragment:{module:T,entryPoint:"fs_main",targets:[{format:navigator.gpu.getPreferredCanvasFormat()}]},primitive:{topology:"triangle-list",cullMode:P},depthStencil:{depthWriteEnabled:!0,depthCompare:"less",format:"depth24plus"}})};this.surfacePipelineAbove=y("Water Surface Above Pipeline",!1,"front"),this.surfacePipelineUnder=y("Water Surface Under Pipeline",!0,"back")}renderSurface(i){const x=this.device.createBindGroup({layout:this.surfaceBindGroupLayout,entries:[{binding:0,resource:{buffer:this.commonUniformBuffer}},{binding:1,resource:{buffer:this.lightUniformBuffer}},{binding:2,resource:{buffer:this.sphereUniformBuffer}},{binding:3,resource:this.tileSampler},{binding:4,resource:this.tileTexture.createView()},{binding:5,resource:this.sampler},{binding:6,resource:this.textureA.createView()},{binding:7,resource:this.skySampler},{binding:8,resource:this.skyTexture.createView({dimension:"cube"})},{binding:9,resource:this.causticsTexture.createView()},{binding:10,resource:{buffer:this.shadowUniformBuffer}}]});i.setPipeline(this.surfacePipelineAbove),i.setBindGroup(0,x),i.setVertexBuffer(0,this.positionBuffer),i.setIndexBuffer(this.indexBuffer,"uint32"),i.drawIndexed(this.vertexCount),i.setPipeline(this.surfacePipelineUnder),i.setBindGroup(0,x),i.drawIndexed(this.vertexCount)}createCausticsPipeline(){const i=this.device.createShaderModule({label:"Caustics Shader",code:`
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
        `});this.causticsPipeline=this.device.createRenderPipeline({label:"Caustics Pipeline",layout:"auto",vertex:{module:i,entryPoint:"vs_main",buffers:[{arrayStride:12,attributes:[{shaderLocation:0,offset:0,format:"float32x3"}]}]},fragment:{module:i,entryPoint:"fs_main",targets:[{format:"rgba8unorm",blend:{color:{operation:"add",srcFactor:"one",dstFactor:"one"},alpha:{operation:"add",srcFactor:"one",dstFactor:"one"}}}]},primitive:{topology:"triangle-list"}})}updateCaustics(){const i=this.device.createBindGroup({layout:this.causticsPipeline.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:this.lightUniformBuffer}},{binding:1,resource:{buffer:this.sphereUniformBuffer}},{binding:2,resource:this.sampler},{binding:3,resource:this.textureA.createView()},{binding:4,resource:{buffer:this.shadowUniformBuffer}}]}),x=this.device.createCommandEncoder(),y=x.beginRenderPass({colorAttachments:[{view:this.causticsTexture.createView(),loadOp:"clear",storeOp:"store",clearValue:{r:0,g:0,b:0,a:0}}]});y.setPipeline(this.causticsPipeline),y.setBindGroup(0,i),y.setVertexBuffer(0,this.positionBuffer),y.setIndexBuffer(this.indexBuffer,"uint32"),y.drawIndexed(this.vertexCount),y.end(),this.device.queue.submit([x.finish()])}}class et{x;y;z;constructor(i=0,x=0,y=0){this.x=i,this.y=x,this.z=y}negative(){return new et(-this.x,-this.y,-this.z)}add(i){return i instanceof et?new et(this.x+i.x,this.y+i.y,this.z+i.z):new et(this.x+i,this.y+i,this.z+i)}subtract(i){return i instanceof et?new et(this.x-i.x,this.y-i.y,this.z-i.z):new et(this.x-i,this.y-i,this.z-i)}multiply(i){return i instanceof et?new et(this.x*i.x,this.y*i.y,this.z*i.z):new et(this.x*i,this.y*i,this.z*i)}divide(i){return i instanceof et?new et(this.x/i.x,this.y/i.y,this.z/i.z):new et(this.x/i,this.y/i,this.z/i)}dot(i){return this.x*i.x+this.y*i.y+this.z*i.z}cross(i){return new et(this.y*i.z-this.z*i.y,this.z*i.x-this.x*i.z,this.x*i.y-this.y*i.x)}length(){return Math.sqrt(this.dot(this))}unit(){return this.divide(this.length())}min(){return Math.min(this.x,this.y,this.z)}max(){return Math.max(this.x,this.y,this.z)}toArray(){return[this.x,this.y,this.z]}clone(){return new et(this.x,this.y,this.z)}static fromAngles(i,x){return new et(Math.cos(x)*Math.cos(i),Math.sin(x),Math.cos(x)*Math.sin(i))}static lerp(i,x,y){return i.add(x.subtract(i).multiply(y))}static min(i,x){return new et(Math.min(i.x,x.x),Math.min(i.y,x.y),Math.min(i.z,x.z))}static max(i,x){return new et(Math.max(i.x,x.x),Math.max(i.y,x.y),Math.max(i.z,x.z))}}class Ge{t;hit;normal;constructor(i,x,y){this.t=i,this.hit=x,this.normal=y}}class Yt{eye;viewport;invViewProj;ray00;ray10;ray01;ray11;constructor(i,x,y){this.viewport=y;const b=Vt.invert(i),_=Qt.transformMat4([0,0,0],b);this.eye=new et(_[0],_[1],_[2]),this.invViewProj=Vt.invert(Vt.multiply(x,i));const[P,T,z,q]=y,V=P+z,L=T+q;this.ray00=this.unProject(P,T,1).subtract(this.eye),this.ray10=this.unProject(V,T,1).subtract(this.eye),this.ray01=this.unProject(P,L,1).subtract(this.eye),this.ray11=this.unProject(V,L,1).subtract(this.eye)}unProject(i,x,y){const[b,_,P,T]=this.viewport,z=(i-b)/P*2-1,q=(1-(x-_)/T)*2-1,V=Qt.transformMat4([z,q,y],this.invViewProj);return new et(V[0],V[1],V[2])}getRayForPixel(i,x){const[y,b,_,P]=this.viewport,T=(i-y)/_,z=(x-b)/P,q=et.lerp(this.ray00,this.ray10,T),V=et.lerp(this.ray01,this.ray11,T);return et.lerp(q,V,z).unit()}static hitTestSphere(i,x,y,b){const _=i.subtract(y),P=x.dot(x),T=2*x.dot(_),z=_.dot(_)-b*b,q=T*T-4*P*z;if(q>0){const V=(-T-Math.sqrt(q))/(2*P),L=i.add(x.multiply(V)),N=L.subtract(y).divide(b);return new Ge(V,L,N)}return null}}class qe{device;constructor(i){this.device=i}async load(i){const x=["xpos","xneg","ypos","yneg","zpos","zneg"],y=await Promise.all(x.map(T=>fetch(i[T]).then(z=>z.blob()).then(z=>createImageBitmap(z)))),{width:b,height:_}=y[0],P=this.device.createTexture({size:[b,_,6],format:"rgba8unorm",usage:GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_DST|GPUTextureUsage.RENDER_ATTACHMENT});return y.forEach((T,z)=>{this.device.queue.copyExternalImageToTexture({source:T,flipY:!0},{texture:P,origin:[0,0,z]},{width:b,height:_})}),P}}var Ft=(d=>(d[d.None=-1]="None",d[d.AddDrops=0]="AddDrops",d[d.OrbitCamera=1]="OrbitCamera",d[d.MoveSphere=2]="MoveSphere",d))(Ft||{});async function Ce(){const d=navigator.gpu;if(!d){document.getElementById("loading").innerHTML="WebGPU not supported.";return}const i=await d.requestAdapter();if(!i){document.getElementById("loading").innerHTML="No WebGPU adapter found.";return}const x=[];i.features.has("float32-filterable")&&x.push("float32-filterable");const y=await i.requestDevice({requiredFeatures:x}),b=document.querySelector("canvas"),_=b.getContext("webgpu"),P=navigator.gpu.getPreferredCanvasFormat();_.configure({device:y,format:P,alphaMode:"premultiplied"});const T=document.getElementById("help"),z=window.devicePixelRatio||1;let q=performance.now();async function V(s){const n=await(await fetch(s)).blob(),a=await createImageBitmap(n),f=y.createTexture({label:s,size:[a.width,a.height],format:"rgba8unorm",usage:GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_DST|GPUTextureUsage.RENDER_ATTACHMENT});return y.queue.copyExternalImageToTexture({source:a,flipY:!0},{texture:f},{width:a.width,height:a.height}),f}const L="/webgpu-water/",N=await V(`${L}tiles.jpg`),X=y.createSampler({magFilter:"linear",minFilter:"linear",addressModeU:"repeat",addressModeV:"repeat"}),Y=await new qe(y).load({xpos:`${L}xpos.jpg`,xneg:`${L}xneg.jpg`,ypos:`${L}ypos.jpg`,yneg:`${L}yneg.jpg`,zpos:`${L}zpos.jpg`,zneg:`${L}zneg.jpg`}),ot=y.createSampler({magFilter:"linear",minFilter:"linear"});let $=-25,B=-200.5;function j(){const s=b.width/b.height,r=Vt.perspective(Math.PI/4,s,.01,100),n=Vt.identity();return Vt.translate(n,[0,0,-4],n),Vt.rotateX(n,-$*Math.PI/180,n),Vt.rotateY(n,-B*Math.PI/180,n),Vt.translate(n,[0,.5,0],n),{projectionMatrix:r,viewMatrix:n}}const st=y.createBuffer({size:80,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),at=y.createBuffer({size:16,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),pt=y.createBuffer({size:16,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),gt=y.createBuffer({size:16,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST});let mt=new et(2,2,-1).unit();function xt(){y.queue.writeBuffer(at,0,new Float32Array([...mt.toArray(),0]))}xt(),y.queue.writeBuffer(gt,0,new Float32Array([1,1,1,0]));const lt=new Fe(y,P,st,N,X,at,pt,gt),yt=new Ve(y,P,st,at,pt),Q=new ke(y,256,256,st,at,pt,gt,N,X,Y,ot);let Z=new et(-.4,-.75,.2),ut=Z.clone();const k=.25;let C=new et;const W=new et(0,-4,0);let rt=!1,Ut=!1;const J=new ee({title:"Settings"});J.close();const ct={gravity:rt,followCamera:!1,showSphere:!0};J.add(ct,"showSphere").name("Render Sphere").onChange(s=>{y.queue.writeBuffer(gt,0,new Float32Array([1,s?1:0,1,0]))});const vt=J.add(ct,"gravity").name("Toggle Gravity").onChange(s=>{rt=s});J.add(ct,"followCamera").name("Light From Camera").onChange(()=>{document.activeElement?.blur()}),yt.update(Z.toArray(),k);for(let s=0;s<20;s++)Q.addDrop(Math.random()*2-1,Math.random()*2-1,.03,s&1?.01:-.01);const Rt={};window.addEventListener("keydown",s=>{const r=s.key.toUpperCase();Rt[r]=!0,r==="G"?(rt=!rt,ct.gravity=rt,vt.updateDisplay()):r===" "&&(Ut=!Ut)}),window.addEventListener("keyup",s=>{Rt[s.key.toUpperCase()]=!1});let it=Ft.None,Mt=0,bt=0,M,D;function p(){return[0,0,b.width,b.height]}function e(s,r){Mt=s,bt=r;const{projectionMatrix:n,viewMatrix:a}=j(),f=new Yt(a,n,p()),h=f.getRayForPixel(s*z,r*z),v=ct.showSphere?Yt.hitTestSphere(f.eye,h,Z,k):null;if(v){it=Ft.MoveSphere,M=v.hit,D=f.getRayForPixel(b.width/2,b.height/2).negative();return}const S=-f.eye.y/h.y,A=f.eye.add(h.multiply(S));Math.abs(A.x)<1&&Math.abs(A.z)<1?(it=Ft.AddDrops,Q.addDrop(A.x,A.z,.03,.01)):it=Ft.OrbitCamera}function c(s,r){if(it===Ft.OrbitCamera)B-=s-Mt,$-=r-bt,$=Math.max(-89.999,Math.min(89.999,$));else if(it===Ft.MoveSphere){const{projectionMatrix:n,viewMatrix:a}=j(),f=new Yt(a,n,p()),h=f.getRayForPixel(s*z,r*z),v=-D.dot(f.eye.subtract(M))/D.dot(h),S=f.eye.add(h.multiply(v));Z=Z.add(S.subtract(M)),Z.x=Math.max(k-1,Math.min(1-k,Z.x)),Z.y=Math.max(k-1,Math.min(10,Z.y)),Z.z=Math.max(k-1,Math.min(1-k,Z.z)),yt.update(Z.toArray(),k),M=S}else if(it===Ft.AddDrops){const{projectionMatrix:n,viewMatrix:a}=j(),f=new Yt(a,n,p()),h=f.getRayForPixel(s*z,r*z),v=-f.eye.y/h.y,S=f.eye.add(h.multiply(v));Math.abs(S.x)<1&&Math.abs(S.z)<1&&Q.addDrop(S.x,S.z,.03,.01)}Mt=s,bt=r}function o(){it=Ft.None}b.addEventListener("pointerdown",s=>{s.preventDefault(),b.setPointerCapture(s.pointerId),e(s.offsetX,s.offsetY)}),b.addEventListener("pointermove",s=>{it!==Ft.None&&c(s.offsetX,s.offsetY)}),b.addEventListener("pointerup",s=>{b.releasePointerCapture(s.pointerId),o()}),b.addEventListener("pointercancel",s=>{b.releasePointerCapture(s.pointerId),o()});let u;function g(){const r=window.matchMedia("(max-width: 600px)").matches?window.innerWidth:window.innerWidth-T.clientWidth-20,n=window.innerHeight;b.width=Math.floor(r*z),b.height=Math.floor(n*z),b.style.width=`${r}px`,b.style.height=`${n}px`,u&&u.destroy(),u=y.createTexture({size:[b.width,b.height],format:"depth24plus",usage:GPUTextureUsage.RENDER_ATTACHMENT}),t()}window.addEventListener("resize",g);const w=document.getElementById("help-toggle");w.addEventListener("click",()=>{T.classList.toggle("collapsed"),w.textContent=T.classList.contains("collapsed")?"menu":"chevron_right",g()}),window.addEventListener("pointerdown",s=>{if(window.matchMedia("(max-width: 600px)").matches&&!T.classList.contains("collapsed")){const n=s.target;!T.contains(n)&&!w.contains(n)&&(T.classList.add("collapsed"),w.textContent="menu",g())}}),document.getElementById("loading").innerHTML="",g();function m(){const{projectionMatrix:s,viewMatrix:r}=j(),n=Vt.multiply(s,r),a=Vt.invert(r),f=Qt.transformMat4([0,0,0],a),h=new Float32Array(20);h.set(n,0),h.set(f,16),y.queue.writeBuffer(st,0,h)}function t(){const s=performance.now();let r=(s-q)/1e3;if(q=s,r>1&&(r=1),(Rt.L||ct.followCamera)&&(mt=et.fromAngles((90-B)*Math.PI/180,-$*Math.PI/180),xt()),!Ut){if(it===Ft.MoveSphere)C=new et;else if(rt){const f=Math.max(0,Math.min(1,(k-Z.y)/(2*k)));C=C.add(W.multiply(r-1.1*r*f)),C=C.subtract(C.unit().multiply(f*r*C.dot(C))),Z=Z.add(C.multiply(r)),Z.y<k-1&&(Z.y=k-1,C.y=Math.abs(C.y)*.7),yt.update(Z.toArray(),k)}ct.showSphere&&Q.moveSphere(ut.toArray(),Z.toArray(),k),ut=Z.clone(),Q.stepSimulation(),Q.stepSimulation(),Q.updateNormals(),Q.updateCaustics()}m();const n=y.createCommandEncoder(),a=n.beginRenderPass({colorAttachments:[{view:_.getCurrentTexture().createView(),clearValue:{r:0,g:0,b:0,a:1},loadOp:"clear",storeOp:"store"}],depthStencilAttachment:{view:u.createView(),depthClearValue:1,depthLoadOp:"clear",depthStoreOp:"store"}});lt.render(a,Q.textureA,Q.sampler,Q.causticsTexture),ct.showSphere&&yt.render(a,Q.textureA,Q.sampler,Q.causticsTexture),Q.renderSurface(a),a.end(),y.queue.submit([n.finish()])}function l(){requestAnimationFrame(l),t()}requestAnimationFrame(l)}Ce();
