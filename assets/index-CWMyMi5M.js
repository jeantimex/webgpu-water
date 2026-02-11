(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const _ of document.querySelectorAll('link[rel="modulepreload"]'))y(_);new MutationObserver(_=>{for(const P of _)if(P.type==="childList")for(const R of P.addedNodes)R.tagName==="LINK"&&R.rel==="modulepreload"&&y(R)}).observe(document,{childList:!0,subtree:!0});function v(_){const P={};return _.integrity&&(P.integrity=_.integrity),_.referrerPolicy&&(P.referrerPolicy=_.referrerPolicy),_.crossOrigin==="use-credentials"?P.credentials="include":_.crossOrigin==="anonymous"?P.credentials="omit":P.credentials="same-origin",P}function y(_){if(_.ep)return;_.ep=!0;const P=v(_);fetch(_.href,P)}})();function me(f,i){return class extends f{constructor(...v){super(...v),i(this)}}}const we=me(Array,f=>f.fill(0));let H=1e-6;function ve(f){function i(g=0,m=0){const w=new f(2);return g!==void 0&&(w[0]=g,m!==void 0&&(w[1]=m)),w}const v=i;function y(g,m,w){const t=w??new f(2);return t[0]=g,t[1]=m,t}function _(g,m){const w=m??new f(2);return w[0]=Math.ceil(g[0]),w[1]=Math.ceil(g[1]),w}function P(g,m){const w=m??new f(2);return w[0]=Math.floor(g[0]),w[1]=Math.floor(g[1]),w}function R(g,m){const w=m??new f(2);return w[0]=Math.round(g[0]),w[1]=Math.round(g[1]),w}function L(g,m=0,w=1,t){const l=t??new f(2);return l[0]=Math.min(w,Math.max(m,g[0])),l[1]=Math.min(w,Math.max(m,g[1])),l}function z(g,m,w){const t=w??new f(2);return t[0]=g[0]+m[0],t[1]=g[1]+m[1],t}function q(g,m,w,t){const l=t??new f(2);return l[0]=g[0]+m[0]*w,l[1]=g[1]+m[1]*w,l}function k(g,m){const w=g[0],t=g[1],l=m[0],r=m[1],o=Math.sqrt(w*w+t*t),n=Math.sqrt(l*l+r*r),a=o*n,p=a&&pt(g,m)/a;return Math.acos(p)}function $(g,m,w){const t=w??new f(2);return t[0]=g[0]-m[0],t[1]=g[1]-m[1],t}const N=$;function Z(g,m){return Math.abs(g[0]-m[0])<H&&Math.abs(g[1]-m[1])<H}function J(g,m){return g[0]===m[0]&&g[1]===m[1]}function K(g,m,w,t){const l=t??new f(2);return l[0]=g[0]+w*(m[0]-g[0]),l[1]=g[1]+w*(m[1]-g[1]),l}function at(g,m,w,t){const l=t??new f(2);return l[0]=g[0]+w[0]*(m[0]-g[0]),l[1]=g[1]+w[1]*(m[1]-g[1]),l}function O(g,m,w){const t=w??new f(2);return t[0]=Math.max(g[0],m[0]),t[1]=Math.max(g[1],m[1]),t}function B(g,m,w){const t=w??new f(2);return t[0]=Math.min(g[0],m[0]),t[1]=Math.min(g[1],m[1]),t}function j(g,m,w){const t=w??new f(2);return t[0]=g[0]*m,t[1]=g[1]*m,t}const nt=j;function ht(g,m,w){const t=w??new f(2);return t[0]=g[0]/m,t[1]=g[1]/m,t}function it(g,m){const w=m??new f(2);return w[0]=1/g[0],w[1]=1/g[1],w}const vt=it;function dt(g,m,w){const t=w??new f(3),l=g[0]*m[1]-g[1]*m[0];return t[0]=0,t[1]=0,t[2]=l,t}function pt(g,m){return g[0]*m[0]+g[1]*m[1]}function rt(g){const m=g[0],w=g[1];return Math.sqrt(m*m+w*w)}const yt=rt;function gt(g){const m=g[0],w=g[1];return m*m+w*w}const Tt=gt;function mt(g,m){const w=g[0]-m[0],t=g[1]-m[1];return Math.sqrt(w*w+t*t)}const W=mt;function G(g,m){const w=g[0]-m[0],t=g[1]-m[1];return w*w+t*t}const F=G;function wt(g,m){const w=m??new f(2),t=g[0],l=g[1],r=Math.sqrt(t*t+l*l);return r>1e-5?(w[0]=t/r,w[1]=l/r):(w[0]=0,w[1]=0),w}function et(g,m){const w=m??new f(2);return w[0]=-g[0],w[1]=-g[1],w}function X(g,m){const w=m??new f(2);return w[0]=g[0],w[1]=g[1],w}const It=X;function st(g,m,w){const t=w??new f(2);return t[0]=g[0]*m[0],t[1]=g[1]*m[1],t}const Pt=st;function ct(g,m,w){const t=w??new f(2);return t[0]=g[0]/m[0],t[1]=g[1]/m[1],t}const ot=ct;function Lt(g=1,m){const w=m??new f(2),t=Math.random()*2*Math.PI;return w[0]=Math.cos(t)*g,w[1]=Math.sin(t)*g,w}function b(g){const m=g??new f(2);return m[0]=0,m[1]=0,m}function A(g,m,w){const t=w??new f(2),l=g[0],r=g[1];return t[0]=l*m[0]+r*m[4]+m[12],t[1]=l*m[1]+r*m[5]+m[13],t}function d(g,m,w){const t=w??new f(2),l=g[0],r=g[1];return t[0]=m[0]*l+m[4]*r+m[8],t[1]=m[1]*l+m[5]*r+m[9],t}function e(g,m,w,t){const l=t??new f(2),r=g[0]-m[0],o=g[1]-m[1],n=Math.sin(w),a=Math.cos(w);return l[0]=r*a-o*n+m[0],l[1]=r*n+o*a+m[1],l}function c(g,m,w){const t=w??new f(2);return wt(g,t),j(t,m,t)}function s(g,m,w){const t=w??new f(2);return rt(g)>m?c(g,m,t):X(g,t)}function u(g,m,w){const t=w??new f(2);return K(g,m,.5,t)}return{create:i,fromValues:v,set:y,ceil:_,floor:P,round:R,clamp:L,add:z,addScaled:q,angle:k,subtract:$,sub:N,equalsApproximately:Z,equals:J,lerp:K,lerpV:at,max:O,min:B,mulScalar:j,scale:nt,divScalar:ht,inverse:it,invert:vt,cross:dt,dot:pt,length:rt,len:yt,lengthSq:gt,lenSq:Tt,distance:mt,dist:W,distanceSq:G,distSq:F,normalize:wt,negate:et,copy:X,clone:It,multiply:st,mul:Pt,divide:ct,div:ot,random:Lt,zero:b,transformMat4:A,transformMat3:d,rotate:e,setLength:c,truncate:s,midpoint:u}}const ae=new Map;function ge(f){let i=ae.get(f);return i||(i=ve(f),ae.set(f,i)),i}function xe(f){function i(n,a,p){const h=new f(3);return n!==void 0&&(h[0]=n,a!==void 0&&(h[1]=a,p!==void 0&&(h[2]=p))),h}const v=i;function y(n,a,p,h){const M=h??new f(3);return M[0]=n,M[1]=a,M[2]=p,M}function _(n,a){const p=a??new f(3);return p[0]=Math.ceil(n[0]),p[1]=Math.ceil(n[1]),p[2]=Math.ceil(n[2]),p}function P(n,a){const p=a??new f(3);return p[0]=Math.floor(n[0]),p[1]=Math.floor(n[1]),p[2]=Math.floor(n[2]),p}function R(n,a){const p=a??new f(3);return p[0]=Math.round(n[0]),p[1]=Math.round(n[1]),p[2]=Math.round(n[2]),p}function L(n,a=0,p=1,h){const M=h??new f(3);return M[0]=Math.min(p,Math.max(a,n[0])),M[1]=Math.min(p,Math.max(a,n[1])),M[2]=Math.min(p,Math.max(a,n[2])),M}function z(n,a,p){const h=p??new f(3);return h[0]=n[0]+a[0],h[1]=n[1]+a[1],h[2]=n[2]+a[2],h}function q(n,a,p,h){const M=h??new f(3);return M[0]=n[0]+a[0]*p,M[1]=n[1]+a[1]*p,M[2]=n[2]+a[2]*p,M}function k(n,a){const p=n[0],h=n[1],M=n[2],x=a[0],S=a[1],D=a[2],U=Math.sqrt(p*p+h*h+M*M),E=Math.sqrt(x*x+S*S+D*D),T=U*E,V=T&&pt(n,a)/T;return Math.acos(V)}function $(n,a,p){const h=p??new f(3);return h[0]=n[0]-a[0],h[1]=n[1]-a[1],h[2]=n[2]-a[2],h}const N=$;function Z(n,a){return Math.abs(n[0]-a[0])<H&&Math.abs(n[1]-a[1])<H&&Math.abs(n[2]-a[2])<H}function J(n,a){return n[0]===a[0]&&n[1]===a[1]&&n[2]===a[2]}function K(n,a,p,h){const M=h??new f(3);return M[0]=n[0]+p*(a[0]-n[0]),M[1]=n[1]+p*(a[1]-n[1]),M[2]=n[2]+p*(a[2]-n[2]),M}function at(n,a,p,h){const M=h??new f(3);return M[0]=n[0]+p[0]*(a[0]-n[0]),M[1]=n[1]+p[1]*(a[1]-n[1]),M[2]=n[2]+p[2]*(a[2]-n[2]),M}function O(n,a,p){const h=p??new f(3);return h[0]=Math.max(n[0],a[0]),h[1]=Math.max(n[1],a[1]),h[2]=Math.max(n[2],a[2]),h}function B(n,a,p){const h=p??new f(3);return h[0]=Math.min(n[0],a[0]),h[1]=Math.min(n[1],a[1]),h[2]=Math.min(n[2],a[2]),h}function j(n,a,p){const h=p??new f(3);return h[0]=n[0]*a,h[1]=n[1]*a,h[2]=n[2]*a,h}const nt=j;function ht(n,a,p){const h=p??new f(3);return h[0]=n[0]/a,h[1]=n[1]/a,h[2]=n[2]/a,h}function it(n,a){const p=a??new f(3);return p[0]=1/n[0],p[1]=1/n[1],p[2]=1/n[2],p}const vt=it;function dt(n,a,p){const h=p??new f(3),M=n[2]*a[0]-n[0]*a[2],x=n[0]*a[1]-n[1]*a[0];return h[0]=n[1]*a[2]-n[2]*a[1],h[1]=M,h[2]=x,h}function pt(n,a){return n[0]*a[0]+n[1]*a[1]+n[2]*a[2]}function rt(n){const a=n[0],p=n[1],h=n[2];return Math.sqrt(a*a+p*p+h*h)}const yt=rt;function gt(n){const a=n[0],p=n[1],h=n[2];return a*a+p*p+h*h}const Tt=gt;function mt(n,a){const p=n[0]-a[0],h=n[1]-a[1],M=n[2]-a[2];return Math.sqrt(p*p+h*h+M*M)}const W=mt;function G(n,a){const p=n[0]-a[0],h=n[1]-a[1],M=n[2]-a[2];return p*p+h*h+M*M}const F=G;function wt(n,a){const p=a??new f(3),h=n[0],M=n[1],x=n[2],S=Math.sqrt(h*h+M*M+x*x);return S>1e-5?(p[0]=h/S,p[1]=M/S,p[2]=x/S):(p[0]=0,p[1]=0,p[2]=0),p}function et(n,a){const p=a??new f(3);return p[0]=-n[0],p[1]=-n[1],p[2]=-n[2],p}function X(n,a){const p=a??new f(3);return p[0]=n[0],p[1]=n[1],p[2]=n[2],p}const It=X;function st(n,a,p){const h=p??new f(3);return h[0]=n[0]*a[0],h[1]=n[1]*a[1],h[2]=n[2]*a[2],h}const Pt=st;function ct(n,a,p){const h=p??new f(3);return h[0]=n[0]/a[0],h[1]=n[1]/a[1],h[2]=n[2]/a[2],h}const ot=ct;function Lt(n=1,a){const p=a??new f(3),h=Math.random()*2*Math.PI,M=Math.random()*2-1,x=Math.sqrt(1-M*M)*n;return p[0]=Math.cos(h)*x,p[1]=Math.sin(h)*x,p[2]=M*n,p}function b(n){const a=n??new f(3);return a[0]=0,a[1]=0,a[2]=0,a}function A(n,a,p){const h=p??new f(3),M=n[0],x=n[1],S=n[2],D=a[3]*M+a[7]*x+a[11]*S+a[15]||1;return h[0]=(a[0]*M+a[4]*x+a[8]*S+a[12])/D,h[1]=(a[1]*M+a[5]*x+a[9]*S+a[13])/D,h[2]=(a[2]*M+a[6]*x+a[10]*S+a[14])/D,h}function d(n,a,p){const h=p??new f(3),M=n[0],x=n[1],S=n[2];return h[0]=M*a[0]+x*a[4]+S*a[8],h[1]=M*a[1]+x*a[5]+S*a[9],h[2]=M*a[2]+x*a[6]+S*a[10],h}function e(n,a,p){const h=p??new f(3),M=n[0],x=n[1],S=n[2];return h[0]=M*a[0]+x*a[4]+S*a[8],h[1]=M*a[1]+x*a[5]+S*a[9],h[2]=M*a[2]+x*a[6]+S*a[10],h}function c(n,a,p){const h=p??new f(3),M=a[0],x=a[1],S=a[2],D=a[3]*2,U=n[0],E=n[1],T=n[2],V=x*T-S*E,I=S*U-M*T,C=M*E-x*U;return h[0]=U+V*D+(x*C-S*I)*2,h[1]=E+I*D+(S*V-M*C)*2,h[2]=T+C*D+(M*I-x*V)*2,h}function s(n,a){const p=a??new f(3);return p[0]=n[12],p[1]=n[13],p[2]=n[14],p}function u(n,a,p){const h=p??new f(3),M=a*4;return h[0]=n[M+0],h[1]=n[M+1],h[2]=n[M+2],h}function g(n,a){const p=a??new f(3),h=n[0],M=n[1],x=n[2],S=n[4],D=n[5],U=n[6],E=n[8],T=n[9],V=n[10];return p[0]=Math.sqrt(h*h+M*M+x*x),p[1]=Math.sqrt(S*S+D*D+U*U),p[2]=Math.sqrt(E*E+T*T+V*V),p}function m(n,a,p,h){const M=h??new f(3),x=[],S=[];return x[0]=n[0]-a[0],x[1]=n[1]-a[1],x[2]=n[2]-a[2],S[0]=x[0],S[1]=x[1]*Math.cos(p)-x[2]*Math.sin(p),S[2]=x[1]*Math.sin(p)+x[2]*Math.cos(p),M[0]=S[0]+a[0],M[1]=S[1]+a[1],M[2]=S[2]+a[2],M}function w(n,a,p,h){const M=h??new f(3),x=[],S=[];return x[0]=n[0]-a[0],x[1]=n[1]-a[1],x[2]=n[2]-a[2],S[0]=x[2]*Math.sin(p)+x[0]*Math.cos(p),S[1]=x[1],S[2]=x[2]*Math.cos(p)-x[0]*Math.sin(p),M[0]=S[0]+a[0],M[1]=S[1]+a[1],M[2]=S[2]+a[2],M}function t(n,a,p,h){const M=h??new f(3),x=[],S=[];return x[0]=n[0]-a[0],x[1]=n[1]-a[1],x[2]=n[2]-a[2],S[0]=x[0]*Math.cos(p)-x[1]*Math.sin(p),S[1]=x[0]*Math.sin(p)+x[1]*Math.cos(p),S[2]=x[2],M[0]=S[0]+a[0],M[1]=S[1]+a[1],M[2]=S[2]+a[2],M}function l(n,a,p){const h=p??new f(3);return wt(n,h),j(h,a,h)}function r(n,a,p){const h=p??new f(3);return rt(n)>a?l(n,a,h):X(n,h)}function o(n,a,p){const h=p??new f(3);return K(n,a,.5,h)}return{create:i,fromValues:v,set:y,ceil:_,floor:P,round:R,clamp:L,add:z,addScaled:q,angle:k,subtract:$,sub:N,equalsApproximately:Z,equals:J,lerp:K,lerpV:at,max:O,min:B,mulScalar:j,scale:nt,divScalar:ht,inverse:it,invert:vt,cross:dt,dot:pt,length:rt,len:yt,lengthSq:gt,lenSq:Tt,distance:mt,dist:W,distanceSq:G,distSq:F,normalize:wt,negate:et,copy:X,clone:It,multiply:st,mul:Pt,divide:ct,div:ot,random:Lt,zero:b,transformMat4:A,transformMat4Upper3x3:d,transformMat3:e,transformQuat:c,getTranslation:s,getAxis:u,getScaling:g,rotateX:m,rotateY:w,rotateZ:t,setLength:l,truncate:r,midpoint:o}}const ce=new Map;function Kt(f){let i=ce.get(f);return i||(i=xe(f),ce.set(f,i)),i}function ye(f){const i=ge(f),v=Kt(f);function y(e,c,s,u,g,m,w,t,l){const r=new f(12);return r[3]=0,r[7]=0,r[11]=0,e!==void 0&&(r[0]=e,c!==void 0&&(r[1]=c,s!==void 0&&(r[2]=s,u!==void 0&&(r[4]=u,g!==void 0&&(r[5]=g,m!==void 0&&(r[6]=m,w!==void 0&&(r[8]=w,t!==void 0&&(r[9]=t,l!==void 0&&(r[10]=l))))))))),r}function _(e,c,s,u,g,m,w,t,l,r){const o=r??new f(12);return o[0]=e,o[1]=c,o[2]=s,o[3]=0,o[4]=u,o[5]=g,o[6]=m,o[7]=0,o[8]=w,o[9]=t,o[10]=l,o[11]=0,o}function P(e,c){const s=c??new f(12);return s[0]=e[0],s[1]=e[1],s[2]=e[2],s[3]=0,s[4]=e[4],s[5]=e[5],s[6]=e[6],s[7]=0,s[8]=e[8],s[9]=e[9],s[10]=e[10],s[11]=0,s}function R(e,c){const s=c??new f(12),u=e[0],g=e[1],m=e[2],w=e[3],t=u+u,l=g+g,r=m+m,o=u*t,n=g*t,a=g*l,p=m*t,h=m*l,M=m*r,x=w*t,S=w*l,D=w*r;return s[0]=1-a-M,s[1]=n+D,s[2]=p-S,s[3]=0,s[4]=n-D,s[5]=1-o-M,s[6]=h+x,s[7]=0,s[8]=p+S,s[9]=h-x,s[10]=1-o-a,s[11]=0,s}function L(e,c){const s=c??new f(12);return s[0]=-e[0],s[1]=-e[1],s[2]=-e[2],s[4]=-e[4],s[5]=-e[5],s[6]=-e[6],s[8]=-e[8],s[9]=-e[9],s[10]=-e[10],s}function z(e,c,s){const u=s??new f(12);return u[0]=e[0]*c,u[1]=e[1]*c,u[2]=e[2]*c,u[4]=e[4]*c,u[5]=e[5]*c,u[6]=e[6]*c,u[8]=e[8]*c,u[9]=e[9]*c,u[10]=e[10]*c,u}const q=z;function k(e,c,s){const u=s??new f(12);return u[0]=e[0]+c[0],u[1]=e[1]+c[1],u[2]=e[2]+c[2],u[4]=e[4]+c[4],u[5]=e[5]+c[5],u[6]=e[6]+c[6],u[8]=e[8]+c[8],u[9]=e[9]+c[9],u[10]=e[10]+c[10],u}function $(e,c){const s=c??new f(12);return s[0]=e[0],s[1]=e[1],s[2]=e[2],s[4]=e[4],s[5]=e[5],s[6]=e[6],s[8]=e[8],s[9]=e[9],s[10]=e[10],s}const N=$;function Z(e,c){return Math.abs(e[0]-c[0])<H&&Math.abs(e[1]-c[1])<H&&Math.abs(e[2]-c[2])<H&&Math.abs(e[4]-c[4])<H&&Math.abs(e[5]-c[5])<H&&Math.abs(e[6]-c[6])<H&&Math.abs(e[8]-c[8])<H&&Math.abs(e[9]-c[9])<H&&Math.abs(e[10]-c[10])<H}function J(e,c){return e[0]===c[0]&&e[1]===c[1]&&e[2]===c[2]&&e[4]===c[4]&&e[5]===c[5]&&e[6]===c[6]&&e[8]===c[8]&&e[9]===c[9]&&e[10]===c[10]}function K(e){const c=e??new f(12);return c[0]=1,c[1]=0,c[2]=0,c[4]=0,c[5]=1,c[6]=0,c[8]=0,c[9]=0,c[10]=1,c}function at(e,c){const s=c??new f(12);if(s===e){let a;return a=e[1],e[1]=e[4],e[4]=a,a=e[2],e[2]=e[8],e[8]=a,a=e[6],e[6]=e[9],e[9]=a,s}const u=e[0],g=e[1],m=e[2],w=e[4],t=e[5],l=e[6],r=e[8],o=e[9],n=e[10];return s[0]=u,s[1]=w,s[2]=r,s[4]=g,s[5]=t,s[6]=o,s[8]=m,s[9]=l,s[10]=n,s}function O(e,c){const s=c??new f(12),u=e[0],g=e[1],m=e[2],w=e[4],t=e[5],l=e[6],r=e[8],o=e[9],n=e[10],a=n*t-l*o,p=-n*w+l*r,h=o*w-t*r,M=1/(u*a+g*p+m*h);return s[0]=a*M,s[1]=(-n*g+m*o)*M,s[2]=(l*g-m*t)*M,s[4]=p*M,s[5]=(n*u-m*r)*M,s[6]=(-l*u+m*w)*M,s[8]=h*M,s[9]=(-o*u+g*r)*M,s[10]=(t*u-g*w)*M,s}function B(e){const c=e[0],s=e[1],u=e[2],g=e[4],m=e[5],w=e[6],t=e[8],l=e[9],r=e[10];return c*(m*r-l*w)-g*(s*r-l*u)+t*(s*w-m*u)}const j=O;function nt(e,c,s){const u=s??new f(12),g=e[0],m=e[1],w=e[2],t=e[4],l=e[5],r=e[6],o=e[8],n=e[9],a=e[10],p=c[0],h=c[1],M=c[2],x=c[4],S=c[5],D=c[6],U=c[8],E=c[9],T=c[10];return u[0]=g*p+t*h+o*M,u[1]=m*p+l*h+n*M,u[2]=w*p+r*h+a*M,u[4]=g*x+t*S+o*D,u[5]=m*x+l*S+n*D,u[6]=w*x+r*S+a*D,u[8]=g*U+t*E+o*T,u[9]=m*U+l*E+n*T,u[10]=w*U+r*E+a*T,u}const ht=nt;function it(e,c,s){const u=s??K();return e!==u&&(u[0]=e[0],u[1]=e[1],u[2]=e[2],u[4]=e[4],u[5]=e[5],u[6]=e[6]),u[8]=c[0],u[9]=c[1],u[10]=1,u}function vt(e,c){const s=c??i.create();return s[0]=e[8],s[1]=e[9],s}function dt(e,c,s){const u=s??i.create(),g=c*4;return u[0]=e[g+0],u[1]=e[g+1],u}function pt(e,c,s,u){const g=u===e?e:$(e,u),m=s*4;return g[m+0]=c[0],g[m+1]=c[1],g}function rt(e,c){const s=c??i.create(),u=e[0],g=e[1],m=e[4],w=e[5];return s[0]=Math.sqrt(u*u+g*g),s[1]=Math.sqrt(m*m+w*w),s}function yt(e,c){const s=c??v.create(),u=e[0],g=e[1],m=e[2],w=e[4],t=e[5],l=e[6],r=e[8],o=e[9],n=e[10];return s[0]=Math.sqrt(u*u+g*g+m*m),s[1]=Math.sqrt(w*w+t*t+l*l),s[2]=Math.sqrt(r*r+o*o+n*n),s}function gt(e,c){const s=c??new f(12);return s[0]=1,s[1]=0,s[2]=0,s[4]=0,s[5]=1,s[6]=0,s[8]=e[0],s[9]=e[1],s[10]=1,s}function Tt(e,c,s){const u=s??new f(12),g=c[0],m=c[1],w=e[0],t=e[1],l=e[2],r=e[4],o=e[5],n=e[6],a=e[8],p=e[9],h=e[10];return e!==u&&(u[0]=w,u[1]=t,u[2]=l,u[4]=r,u[5]=o,u[6]=n),u[8]=w*g+r*m+a,u[9]=t*g+o*m+p,u[10]=l*g+n*m+h,u}function mt(e,c){const s=c??new f(12),u=Math.cos(e),g=Math.sin(e);return s[0]=u,s[1]=g,s[2]=0,s[4]=-g,s[5]=u,s[6]=0,s[8]=0,s[9]=0,s[10]=1,s}function W(e,c,s){const u=s??new f(12),g=e[0],m=e[1],w=e[2],t=e[4],l=e[5],r=e[6],o=Math.cos(c),n=Math.sin(c);return u[0]=o*g+n*t,u[1]=o*m+n*l,u[2]=o*w+n*r,u[4]=o*t-n*g,u[5]=o*l-n*m,u[6]=o*r-n*w,e!==u&&(u[8]=e[8],u[9]=e[9],u[10]=e[10]),u}function G(e,c){const s=c??new f(12),u=Math.cos(e),g=Math.sin(e);return s[0]=1,s[1]=0,s[2]=0,s[4]=0,s[5]=u,s[6]=g,s[8]=0,s[9]=-g,s[10]=u,s}function F(e,c,s){const u=s??new f(12),g=e[4],m=e[5],w=e[6],t=e[8],l=e[9],r=e[10],o=Math.cos(c),n=Math.sin(c);return u[4]=o*g+n*t,u[5]=o*m+n*l,u[6]=o*w+n*r,u[8]=o*t-n*g,u[9]=o*l-n*m,u[10]=o*r-n*w,e!==u&&(u[0]=e[0],u[1]=e[1],u[2]=e[2]),u}function wt(e,c){const s=c??new f(12),u=Math.cos(e),g=Math.sin(e);return s[0]=u,s[1]=0,s[2]=-g,s[4]=0,s[5]=1,s[6]=0,s[8]=g,s[9]=0,s[10]=u,s}function et(e,c,s){const u=s??new f(12),g=e[0],m=e[1],w=e[2],t=e[8],l=e[9],r=e[10],o=Math.cos(c),n=Math.sin(c);return u[0]=o*g-n*t,u[1]=o*m-n*l,u[2]=o*w-n*r,u[8]=o*t+n*g,u[9]=o*l+n*m,u[10]=o*r+n*w,e!==u&&(u[4]=e[4],u[5]=e[5],u[6]=e[6]),u}const X=mt,It=W;function st(e,c){const s=c??new f(12);return s[0]=e[0],s[1]=0,s[2]=0,s[4]=0,s[5]=e[1],s[6]=0,s[8]=0,s[9]=0,s[10]=1,s}function Pt(e,c,s){const u=s??new f(12),g=c[0],m=c[1];return u[0]=g*e[0],u[1]=g*e[1],u[2]=g*e[2],u[4]=m*e[4],u[5]=m*e[5],u[6]=m*e[6],e!==u&&(u[8]=e[8],u[9]=e[9],u[10]=e[10]),u}function ct(e,c){const s=c??new f(12);return s[0]=e[0],s[1]=0,s[2]=0,s[4]=0,s[5]=e[1],s[6]=0,s[8]=0,s[9]=0,s[10]=e[2],s}function ot(e,c,s){const u=s??new f(12),g=c[0],m=c[1],w=c[2];return u[0]=g*e[0],u[1]=g*e[1],u[2]=g*e[2],u[4]=m*e[4],u[5]=m*e[5],u[6]=m*e[6],u[8]=w*e[8],u[9]=w*e[9],u[10]=w*e[10],u}function Lt(e,c){const s=c??new f(12);return s[0]=e,s[1]=0,s[2]=0,s[4]=0,s[5]=e,s[6]=0,s[8]=0,s[9]=0,s[10]=1,s}function b(e,c,s){const u=s??new f(12);return u[0]=c*e[0],u[1]=c*e[1],u[2]=c*e[2],u[4]=c*e[4],u[5]=c*e[5],u[6]=c*e[6],e!==u&&(u[8]=e[8],u[9]=e[9],u[10]=e[10]),u}function A(e,c){const s=c??new f(12);return s[0]=e,s[1]=0,s[2]=0,s[4]=0,s[5]=e,s[6]=0,s[8]=0,s[9]=0,s[10]=e,s}function d(e,c,s){const u=s??new f(12);return u[0]=c*e[0],u[1]=c*e[1],u[2]=c*e[2],u[4]=c*e[4],u[5]=c*e[5],u[6]=c*e[6],u[8]=c*e[8],u[9]=c*e[9],u[10]=c*e[10],u}return{add:k,clone:N,copy:$,create:y,determinant:B,equals:J,equalsApproximately:Z,fromMat4:P,fromQuat:R,get3DScaling:yt,getAxis:dt,getScaling:rt,getTranslation:vt,identity:K,inverse:O,invert:j,mul:ht,mulScalar:q,multiply:nt,multiplyScalar:z,negate:L,rotate:W,rotateX:F,rotateY:et,rotateZ:It,rotation:mt,rotationX:G,rotationY:wt,rotationZ:X,scale:Pt,scale3D:ot,scaling:st,scaling3D:ct,set:_,setAxis:pt,setTranslation:it,translate:Tt,translation:gt,transpose:at,uniformScale:b,uniformScale3D:d,uniformScaling:Lt,uniformScaling3D:A}}const le=new Map;function be(f){let i=le.get(f);return i||(i=ye(f),le.set(f,i)),i}function Me(f){const i=Kt(f);function v(t,l,r,o,n,a,p,h,M,x,S,D,U,E,T,V){const I=new f(16);return t!==void 0&&(I[0]=t,l!==void 0&&(I[1]=l,r!==void 0&&(I[2]=r,o!==void 0&&(I[3]=o,n!==void 0&&(I[4]=n,a!==void 0&&(I[5]=a,p!==void 0&&(I[6]=p,h!==void 0&&(I[7]=h,M!==void 0&&(I[8]=M,x!==void 0&&(I[9]=x,S!==void 0&&(I[10]=S,D!==void 0&&(I[11]=D,U!==void 0&&(I[12]=U,E!==void 0&&(I[13]=E,T!==void 0&&(I[14]=T,V!==void 0&&(I[15]=V)))))))))))))))),I}function y(t,l,r,o,n,a,p,h,M,x,S,D,U,E,T,V,I){const C=I??new f(16);return C[0]=t,C[1]=l,C[2]=r,C[3]=o,C[4]=n,C[5]=a,C[6]=p,C[7]=h,C[8]=M,C[9]=x,C[10]=S,C[11]=D,C[12]=U,C[13]=E,C[14]=T,C[15]=V,C}function _(t,l){const r=l??new f(16);return r[0]=t[0],r[1]=t[1],r[2]=t[2],r[3]=0,r[4]=t[4],r[5]=t[5],r[6]=t[6],r[7]=0,r[8]=t[8],r[9]=t[9],r[10]=t[10],r[11]=0,r[12]=0,r[13]=0,r[14]=0,r[15]=1,r}function P(t,l){const r=l??new f(16),o=t[0],n=t[1],a=t[2],p=t[3],h=o+o,M=n+n,x=a+a,S=o*h,D=n*h,U=n*M,E=a*h,T=a*M,V=a*x,I=p*h,C=p*M,Y=p*x;return r[0]=1-U-V,r[1]=D+Y,r[2]=E-C,r[3]=0,r[4]=D-Y,r[5]=1-S-V,r[6]=T+I,r[7]=0,r[8]=E+C,r[9]=T-I,r[10]=1-S-U,r[11]=0,r[12]=0,r[13]=0,r[14]=0,r[15]=1,r}function R(t,l){const r=l??new f(16);return r[0]=-t[0],r[1]=-t[1],r[2]=-t[2],r[3]=-t[3],r[4]=-t[4],r[5]=-t[5],r[6]=-t[6],r[7]=-t[7],r[8]=-t[8],r[9]=-t[9],r[10]=-t[10],r[11]=-t[11],r[12]=-t[12],r[13]=-t[13],r[14]=-t[14],r[15]=-t[15],r}function L(t,l,r){const o=r??new f(16);return o[0]=t[0]+l[0],o[1]=t[1]+l[1],o[2]=t[2]+l[2],o[3]=t[3]+l[3],o[4]=t[4]+l[4],o[5]=t[5]+l[5],o[6]=t[6]+l[6],o[7]=t[7]+l[7],o[8]=t[8]+l[8],o[9]=t[9]+l[9],o[10]=t[10]+l[10],o[11]=t[11]+l[11],o[12]=t[12]+l[12],o[13]=t[13]+l[13],o[14]=t[14]+l[14],o[15]=t[15]+l[15],o}function z(t,l,r){const o=r??new f(16);return o[0]=t[0]*l,o[1]=t[1]*l,o[2]=t[2]*l,o[3]=t[3]*l,o[4]=t[4]*l,o[5]=t[5]*l,o[6]=t[6]*l,o[7]=t[7]*l,o[8]=t[8]*l,o[9]=t[9]*l,o[10]=t[10]*l,o[11]=t[11]*l,o[12]=t[12]*l,o[13]=t[13]*l,o[14]=t[14]*l,o[15]=t[15]*l,o}const q=z;function k(t,l){const r=l??new f(16);return r[0]=t[0],r[1]=t[1],r[2]=t[2],r[3]=t[3],r[4]=t[4],r[5]=t[5],r[6]=t[6],r[7]=t[7],r[8]=t[8],r[9]=t[9],r[10]=t[10],r[11]=t[11],r[12]=t[12],r[13]=t[13],r[14]=t[14],r[15]=t[15],r}const $=k;function N(t,l){return Math.abs(t[0]-l[0])<H&&Math.abs(t[1]-l[1])<H&&Math.abs(t[2]-l[2])<H&&Math.abs(t[3]-l[3])<H&&Math.abs(t[4]-l[4])<H&&Math.abs(t[5]-l[5])<H&&Math.abs(t[6]-l[6])<H&&Math.abs(t[7]-l[7])<H&&Math.abs(t[8]-l[8])<H&&Math.abs(t[9]-l[9])<H&&Math.abs(t[10]-l[10])<H&&Math.abs(t[11]-l[11])<H&&Math.abs(t[12]-l[12])<H&&Math.abs(t[13]-l[13])<H&&Math.abs(t[14]-l[14])<H&&Math.abs(t[15]-l[15])<H}function Z(t,l){return t[0]===l[0]&&t[1]===l[1]&&t[2]===l[2]&&t[3]===l[3]&&t[4]===l[4]&&t[5]===l[5]&&t[6]===l[6]&&t[7]===l[7]&&t[8]===l[8]&&t[9]===l[9]&&t[10]===l[10]&&t[11]===l[11]&&t[12]===l[12]&&t[13]===l[13]&&t[14]===l[14]&&t[15]===l[15]}function J(t){const l=t??new f(16);return l[0]=1,l[1]=0,l[2]=0,l[3]=0,l[4]=0,l[5]=1,l[6]=0,l[7]=0,l[8]=0,l[9]=0,l[10]=1,l[11]=0,l[12]=0,l[13]=0,l[14]=0,l[15]=1,l}function K(t,l){const r=l??new f(16);if(r===t){let Q;return Q=t[1],t[1]=t[4],t[4]=Q,Q=t[2],t[2]=t[8],t[8]=Q,Q=t[3],t[3]=t[12],t[12]=Q,Q=t[6],t[6]=t[9],t[9]=Q,Q=t[7],t[7]=t[13],t[13]=Q,Q=t[11],t[11]=t[14],t[14]=Q,r}const o=t[0],n=t[1],a=t[2],p=t[3],h=t[4],M=t[5],x=t[6],S=t[7],D=t[8],U=t[9],E=t[10],T=t[11],V=t[12],I=t[13],C=t[14],Y=t[15];return r[0]=o,r[1]=h,r[2]=D,r[3]=V,r[4]=n,r[5]=M,r[6]=U,r[7]=I,r[8]=a,r[9]=x,r[10]=E,r[11]=C,r[12]=p,r[13]=S,r[14]=T,r[15]=Y,r}function at(t,l){const r=l??new f(16),o=t[0],n=t[1],a=t[2],p=t[3],h=t[4],M=t[5],x=t[6],S=t[7],D=t[8],U=t[9],E=t[10],T=t[11],V=t[12],I=t[13],C=t[14],Y=t[15],Q=E*Y,lt=C*T,ut=x*Y,ft=C*S,xt=x*T,bt=E*S,Mt=a*Y,St=C*p,_t=a*T,At=E*p,Ut=a*S,Et=x*p,Rt=D*I,zt=V*U,Bt=h*I,$t=V*M,Ot=h*U,Gt=D*M,qt=o*I,Nt=V*n,Ht=o*U,jt=D*n,Wt=o*M,Xt=h*n,ie=Q*M+ft*U+xt*I-(lt*M+ut*U+bt*I),re=lt*n+Mt*U+At*I-(Q*n+St*U+_t*I),se=ut*n+St*M+Ut*I-(ft*n+Mt*M+Et*I),oe=bt*n+_t*M+Et*U-(xt*n+At*M+Ut*U),Dt=1/(o*ie+h*re+D*se+V*oe);return r[0]=Dt*ie,r[1]=Dt*re,r[2]=Dt*se,r[3]=Dt*oe,r[4]=Dt*(lt*h+ut*D+bt*V-(Q*h+ft*D+xt*V)),r[5]=Dt*(Q*o+St*D+_t*V-(lt*o+Mt*D+At*V)),r[6]=Dt*(ft*o+Mt*h+Et*V-(ut*o+St*h+Ut*V)),r[7]=Dt*(xt*o+At*h+Ut*D-(bt*o+_t*h+Et*D)),r[8]=Dt*(Rt*S+$t*T+Ot*Y-(zt*S+Bt*T+Gt*Y)),r[9]=Dt*(zt*p+qt*T+jt*Y-(Rt*p+Nt*T+Ht*Y)),r[10]=Dt*(Bt*p+Nt*S+Wt*Y-($t*p+qt*S+Xt*Y)),r[11]=Dt*(Gt*p+Ht*S+Xt*T-(Ot*p+jt*S+Wt*T)),r[12]=Dt*(Bt*E+Gt*C+zt*x-(Ot*C+Rt*x+$t*E)),r[13]=Dt*(Ht*C+Rt*a+Nt*E-(qt*E+jt*C+zt*a)),r[14]=Dt*(qt*x+Xt*C+$t*a-(Wt*C+Bt*a+Nt*x)),r[15]=Dt*(Wt*E+Ot*a+jt*x-(Ht*x+Xt*E+Gt*a)),r}function O(t){const l=t[0],r=t[1],o=t[2],n=t[3],a=t[4],p=t[5],h=t[6],M=t[7],x=t[8],S=t[9],D=t[10],U=t[11],E=t[12],T=t[13],V=t[14],I=t[15],C=D*I,Y=V*U,Q=h*I,lt=V*M,ut=h*U,ft=D*M,xt=o*I,bt=V*n,Mt=o*U,St=D*n,_t=o*M,At=h*n,Ut=C*p+lt*S+ut*T-(Y*p+Q*S+ft*T),Et=Y*r+xt*S+St*T-(C*r+bt*S+Mt*T),Rt=Q*r+bt*p+_t*T-(lt*r+xt*p+At*T),zt=ft*r+Mt*p+At*S-(ut*r+St*p+_t*S);return l*Ut+a*Et+x*Rt+E*zt}const B=at;function j(t,l,r){const o=r??new f(16),n=t[0],a=t[1],p=t[2],h=t[3],M=t[4],x=t[5],S=t[6],D=t[7],U=t[8],E=t[9],T=t[10],V=t[11],I=t[12],C=t[13],Y=t[14],Q=t[15],lt=l[0],ut=l[1],ft=l[2],xt=l[3],bt=l[4],Mt=l[5],St=l[6],_t=l[7],At=l[8],Ut=l[9],Et=l[10],Rt=l[11],zt=l[12],Bt=l[13],$t=l[14],Ot=l[15];return o[0]=n*lt+M*ut+U*ft+I*xt,o[1]=a*lt+x*ut+E*ft+C*xt,o[2]=p*lt+S*ut+T*ft+Y*xt,o[3]=h*lt+D*ut+V*ft+Q*xt,o[4]=n*bt+M*Mt+U*St+I*_t,o[5]=a*bt+x*Mt+E*St+C*_t,o[6]=p*bt+S*Mt+T*St+Y*_t,o[7]=h*bt+D*Mt+V*St+Q*_t,o[8]=n*At+M*Ut+U*Et+I*Rt,o[9]=a*At+x*Ut+E*Et+C*Rt,o[10]=p*At+S*Ut+T*Et+Y*Rt,o[11]=h*At+D*Ut+V*Et+Q*Rt,o[12]=n*zt+M*Bt+U*$t+I*Ot,o[13]=a*zt+x*Bt+E*$t+C*Ot,o[14]=p*zt+S*Bt+T*$t+Y*Ot,o[15]=h*zt+D*Bt+V*$t+Q*Ot,o}const nt=j;function ht(t,l,r){const o=r??J();return t!==o&&(o[0]=t[0],o[1]=t[1],o[2]=t[2],o[3]=t[3],o[4]=t[4],o[5]=t[5],o[6]=t[6],o[7]=t[7],o[8]=t[8],o[9]=t[9],o[10]=t[10],o[11]=t[11]),o[12]=l[0],o[13]=l[1],o[14]=l[2],o[15]=1,o}function it(t,l){const r=l??i.create();return r[0]=t[12],r[1]=t[13],r[2]=t[14],r}function vt(t,l,r){const o=r??i.create(),n=l*4;return o[0]=t[n+0],o[1]=t[n+1],o[2]=t[n+2],o}function dt(t,l,r,o){const n=o===t?o:k(t,o),a=r*4;return n[a+0]=l[0],n[a+1]=l[1],n[a+2]=l[2],n}function pt(t,l){const r=l??i.create(),o=t[0],n=t[1],a=t[2],p=t[4],h=t[5],M=t[6],x=t[8],S=t[9],D=t[10];return r[0]=Math.sqrt(o*o+n*n+a*a),r[1]=Math.sqrt(p*p+h*h+M*M),r[2]=Math.sqrt(x*x+S*S+D*D),r}function rt(t,l,r,o,n){const a=n??new f(16),p=Math.tan(Math.PI*.5-.5*t);if(a[0]=p/l,a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=p,a[6]=0,a[7]=0,a[8]=0,a[9]=0,a[11]=-1,a[12]=0,a[13]=0,a[15]=0,Number.isFinite(o)){const h=1/(r-o);a[10]=o*h,a[14]=o*r*h}else a[10]=-1,a[14]=-r;return a}function yt(t,l,r,o=1/0,n){const a=n??new f(16),p=1/Math.tan(t*.5);if(a[0]=p/l,a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=p,a[6]=0,a[7]=0,a[8]=0,a[9]=0,a[11]=-1,a[12]=0,a[13]=0,a[15]=0,o===1/0)a[10]=0,a[14]=r;else{const h=1/(o-r);a[10]=r*h,a[14]=o*r*h}return a}function gt(t,l,r,o,n,a,p){const h=p??new f(16);return h[0]=2/(l-t),h[1]=0,h[2]=0,h[3]=0,h[4]=0,h[5]=2/(o-r),h[6]=0,h[7]=0,h[8]=0,h[9]=0,h[10]=1/(n-a),h[11]=0,h[12]=(l+t)/(t-l),h[13]=(o+r)/(r-o),h[14]=n/(n-a),h[15]=1,h}function Tt(t,l,r,o,n,a,p){const h=p??new f(16),M=l-t,x=o-r,S=n-a;return h[0]=2*n/M,h[1]=0,h[2]=0,h[3]=0,h[4]=0,h[5]=2*n/x,h[6]=0,h[7]=0,h[8]=(t+l)/M,h[9]=(o+r)/x,h[10]=a/S,h[11]=-1,h[12]=0,h[13]=0,h[14]=n*a/S,h[15]=0,h}function mt(t,l,r,o,n,a=1/0,p){const h=p??new f(16),M=l-t,x=o-r;if(h[0]=2*n/M,h[1]=0,h[2]=0,h[3]=0,h[4]=0,h[5]=2*n/x,h[6]=0,h[7]=0,h[8]=(t+l)/M,h[9]=(o+r)/x,h[11]=-1,h[12]=0,h[13]=0,h[15]=0,a===1/0)h[10]=0,h[14]=n;else{const S=1/(a-n);h[10]=n*S,h[14]=a*n*S}return h}const W=i.create(),G=i.create(),F=i.create();function wt(t,l,r,o){const n=o??new f(16);return i.normalize(i.subtract(l,t,F),F),i.normalize(i.cross(r,F,W),W),i.normalize(i.cross(F,W,G),G),n[0]=W[0],n[1]=W[1],n[2]=W[2],n[3]=0,n[4]=G[0],n[5]=G[1],n[6]=G[2],n[7]=0,n[8]=F[0],n[9]=F[1],n[10]=F[2],n[11]=0,n[12]=t[0],n[13]=t[1],n[14]=t[2],n[15]=1,n}function et(t,l,r,o){const n=o??new f(16);return i.normalize(i.subtract(t,l,F),F),i.normalize(i.cross(r,F,W),W),i.normalize(i.cross(F,W,G),G),n[0]=W[0],n[1]=W[1],n[2]=W[2],n[3]=0,n[4]=G[0],n[5]=G[1],n[6]=G[2],n[7]=0,n[8]=F[0],n[9]=F[1],n[10]=F[2],n[11]=0,n[12]=t[0],n[13]=t[1],n[14]=t[2],n[15]=1,n}function X(t,l,r,o){const n=o??new f(16);return i.normalize(i.subtract(t,l,F),F),i.normalize(i.cross(r,F,W),W),i.normalize(i.cross(F,W,G),G),n[0]=W[0],n[1]=G[0],n[2]=F[0],n[3]=0,n[4]=W[1],n[5]=G[1],n[6]=F[1],n[7]=0,n[8]=W[2],n[9]=G[2],n[10]=F[2],n[11]=0,n[12]=-(W[0]*t[0]+W[1]*t[1]+W[2]*t[2]),n[13]=-(G[0]*t[0]+G[1]*t[1]+G[2]*t[2]),n[14]=-(F[0]*t[0]+F[1]*t[1]+F[2]*t[2]),n[15]=1,n}function It(t,l){const r=l??new f(16);return r[0]=1,r[1]=0,r[2]=0,r[3]=0,r[4]=0,r[5]=1,r[6]=0,r[7]=0,r[8]=0,r[9]=0,r[10]=1,r[11]=0,r[12]=t[0],r[13]=t[1],r[14]=t[2],r[15]=1,r}function st(t,l,r){const o=r??new f(16),n=l[0],a=l[1],p=l[2],h=t[0],M=t[1],x=t[2],S=t[3],D=t[4],U=t[5],E=t[6],T=t[7],V=t[8],I=t[9],C=t[10],Y=t[11],Q=t[12],lt=t[13],ut=t[14],ft=t[15];return t!==o&&(o[0]=h,o[1]=M,o[2]=x,o[3]=S,o[4]=D,o[5]=U,o[6]=E,o[7]=T,o[8]=V,o[9]=I,o[10]=C,o[11]=Y),o[12]=h*n+D*a+V*p+Q,o[13]=M*n+U*a+I*p+lt,o[14]=x*n+E*a+C*p+ut,o[15]=S*n+T*a+Y*p+ft,o}function Pt(t,l){const r=l??new f(16),o=Math.cos(t),n=Math.sin(t);return r[0]=1,r[1]=0,r[2]=0,r[3]=0,r[4]=0,r[5]=o,r[6]=n,r[7]=0,r[8]=0,r[9]=-n,r[10]=o,r[11]=0,r[12]=0,r[13]=0,r[14]=0,r[15]=1,r}function ct(t,l,r){const o=r??new f(16),n=t[4],a=t[5],p=t[6],h=t[7],M=t[8],x=t[9],S=t[10],D=t[11],U=Math.cos(l),E=Math.sin(l);return o[4]=U*n+E*M,o[5]=U*a+E*x,o[6]=U*p+E*S,o[7]=U*h+E*D,o[8]=U*M-E*n,o[9]=U*x-E*a,o[10]=U*S-E*p,o[11]=U*D-E*h,t!==o&&(o[0]=t[0],o[1]=t[1],o[2]=t[2],o[3]=t[3],o[12]=t[12],o[13]=t[13],o[14]=t[14],o[15]=t[15]),o}function ot(t,l){const r=l??new f(16),o=Math.cos(t),n=Math.sin(t);return r[0]=o,r[1]=0,r[2]=-n,r[3]=0,r[4]=0,r[5]=1,r[6]=0,r[7]=0,r[8]=n,r[9]=0,r[10]=o,r[11]=0,r[12]=0,r[13]=0,r[14]=0,r[15]=1,r}function Lt(t,l,r){const o=r??new f(16),n=t[0],a=t[1],p=t[2],h=t[3],M=t[8],x=t[9],S=t[10],D=t[11],U=Math.cos(l),E=Math.sin(l);return o[0]=U*n-E*M,o[1]=U*a-E*x,o[2]=U*p-E*S,o[3]=U*h-E*D,o[8]=U*M+E*n,o[9]=U*x+E*a,o[10]=U*S+E*p,o[11]=U*D+E*h,t!==o&&(o[4]=t[4],o[5]=t[5],o[6]=t[6],o[7]=t[7],o[12]=t[12],o[13]=t[13],o[14]=t[14],o[15]=t[15]),o}function b(t,l){const r=l??new f(16),o=Math.cos(t),n=Math.sin(t);return r[0]=o,r[1]=n,r[2]=0,r[3]=0,r[4]=-n,r[5]=o,r[6]=0,r[7]=0,r[8]=0,r[9]=0,r[10]=1,r[11]=0,r[12]=0,r[13]=0,r[14]=0,r[15]=1,r}function A(t,l,r){const o=r??new f(16),n=t[0],a=t[1],p=t[2],h=t[3],M=t[4],x=t[5],S=t[6],D=t[7],U=Math.cos(l),E=Math.sin(l);return o[0]=U*n+E*M,o[1]=U*a+E*x,o[2]=U*p+E*S,o[3]=U*h+E*D,o[4]=U*M-E*n,o[5]=U*x-E*a,o[6]=U*S-E*p,o[7]=U*D-E*h,t!==o&&(o[8]=t[8],o[9]=t[9],o[10]=t[10],o[11]=t[11],o[12]=t[12],o[13]=t[13],o[14]=t[14],o[15]=t[15]),o}function d(t,l,r){const o=r??new f(16);let n=t[0],a=t[1],p=t[2];const h=Math.sqrt(n*n+a*a+p*p);n/=h,a/=h,p/=h;const M=n*n,x=a*a,S=p*p,D=Math.cos(l),U=Math.sin(l),E=1-D;return o[0]=M+(1-M)*D,o[1]=n*a*E+p*U,o[2]=n*p*E-a*U,o[3]=0,o[4]=n*a*E-p*U,o[5]=x+(1-x)*D,o[6]=a*p*E+n*U,o[7]=0,o[8]=n*p*E+a*U,o[9]=a*p*E-n*U,o[10]=S+(1-S)*D,o[11]=0,o[12]=0,o[13]=0,o[14]=0,o[15]=1,o}const e=d;function c(t,l,r,o){const n=o??new f(16);let a=l[0],p=l[1],h=l[2];const M=Math.sqrt(a*a+p*p+h*h);a/=M,p/=M,h/=M;const x=a*a,S=p*p,D=h*h,U=Math.cos(r),E=Math.sin(r),T=1-U,V=x+(1-x)*U,I=a*p*T+h*E,C=a*h*T-p*E,Y=a*p*T-h*E,Q=S+(1-S)*U,lt=p*h*T+a*E,ut=a*h*T+p*E,ft=p*h*T-a*E,xt=D+(1-D)*U,bt=t[0],Mt=t[1],St=t[2],_t=t[3],At=t[4],Ut=t[5],Et=t[6],Rt=t[7],zt=t[8],Bt=t[9],$t=t[10],Ot=t[11];return n[0]=V*bt+I*At+C*zt,n[1]=V*Mt+I*Ut+C*Bt,n[2]=V*St+I*Et+C*$t,n[3]=V*_t+I*Rt+C*Ot,n[4]=Y*bt+Q*At+lt*zt,n[5]=Y*Mt+Q*Ut+lt*Bt,n[6]=Y*St+Q*Et+lt*$t,n[7]=Y*_t+Q*Rt+lt*Ot,n[8]=ut*bt+ft*At+xt*zt,n[9]=ut*Mt+ft*Ut+xt*Bt,n[10]=ut*St+ft*Et+xt*$t,n[11]=ut*_t+ft*Rt+xt*Ot,t!==n&&(n[12]=t[12],n[13]=t[13],n[14]=t[14],n[15]=t[15]),n}const s=c;function u(t,l){const r=l??new f(16);return r[0]=t[0],r[1]=0,r[2]=0,r[3]=0,r[4]=0,r[5]=t[1],r[6]=0,r[7]=0,r[8]=0,r[9]=0,r[10]=t[2],r[11]=0,r[12]=0,r[13]=0,r[14]=0,r[15]=1,r}function g(t,l,r){const o=r??new f(16),n=l[0],a=l[1],p=l[2];return o[0]=n*t[0],o[1]=n*t[1],o[2]=n*t[2],o[3]=n*t[3],o[4]=a*t[4],o[5]=a*t[5],o[6]=a*t[6],o[7]=a*t[7],o[8]=p*t[8],o[9]=p*t[9],o[10]=p*t[10],o[11]=p*t[11],t!==o&&(o[12]=t[12],o[13]=t[13],o[14]=t[14],o[15]=t[15]),o}function m(t,l){const r=l??new f(16);return r[0]=t,r[1]=0,r[2]=0,r[3]=0,r[4]=0,r[5]=t,r[6]=0,r[7]=0,r[8]=0,r[9]=0,r[10]=t,r[11]=0,r[12]=0,r[13]=0,r[14]=0,r[15]=1,r}function w(t,l,r){const o=r??new f(16);return o[0]=l*t[0],o[1]=l*t[1],o[2]=l*t[2],o[3]=l*t[3],o[4]=l*t[4],o[5]=l*t[5],o[6]=l*t[6],o[7]=l*t[7],o[8]=l*t[8],o[9]=l*t[9],o[10]=l*t[10],o[11]=l*t[11],t!==o&&(o[12]=t[12],o[13]=t[13],o[14]=t[14],o[15]=t[15]),o}return{add:L,aim:wt,axisRotate:c,axisRotation:d,cameraAim:et,clone:$,copy:k,create:v,determinant:O,equals:Z,equalsApproximately:N,fromMat3:_,fromQuat:P,frustum:Tt,frustumReverseZ:mt,getAxis:vt,getScaling:pt,getTranslation:it,identity:J,inverse:at,invert:B,lookAt:X,mul:nt,mulScalar:q,multiply:j,multiplyScalar:z,negate:R,ortho:gt,perspective:rt,perspectiveReverseZ:yt,rotate:s,rotateX:ct,rotateY:Lt,rotateZ:A,rotation:e,rotationX:Pt,rotationY:ot,rotationZ:b,scale:g,scaling:u,set:y,setAxis:dt,setTranslation:ht,translate:st,translation:It,transpose:K,uniformScale:w,uniformScaling:m}}const ue=new Map;function Se(f){let i=ue.get(f);return i||(i=Me(f),ue.set(f,i)),i}function _e(f){const i=Kt(f);function v(b,A,d,e){const c=new f(4);return b!==void 0&&(c[0]=b,A!==void 0&&(c[1]=A,d!==void 0&&(c[2]=d,e!==void 0&&(c[3]=e)))),c}const y=v;function _(b,A,d,e,c){const s=c??new f(4);return s[0]=b,s[1]=A,s[2]=d,s[3]=e,s}function P(b,A,d){const e=d??new f(4),c=A*.5,s=Math.sin(c);return e[0]=s*b[0],e[1]=s*b[1],e[2]=s*b[2],e[3]=Math.cos(c),e}function R(b,A){const d=A??i.create(3),e=Math.acos(b[3])*2,c=Math.sin(e*.5);return c>H?(d[0]=b[0]/c,d[1]=b[1]/c,d[2]=b[2]/c):(d[0]=1,d[1]=0,d[2]=0),{angle:e,axis:d}}function L(b,A){const d=rt(b,A);return Math.acos(2*d*d-1)}function z(b,A,d){const e=d??new f(4),c=b[0],s=b[1],u=b[2],g=b[3],m=A[0],w=A[1],t=A[2],l=A[3];return e[0]=c*l+g*m+s*t-u*w,e[1]=s*l+g*w+u*m-c*t,e[2]=u*l+g*t+c*w-s*m,e[3]=g*l-c*m-s*w-u*t,e}const q=z;function k(b,A,d){const e=d??new f(4),c=A*.5,s=b[0],u=b[1],g=b[2],m=b[3],w=Math.sin(c),t=Math.cos(c);return e[0]=s*t+m*w,e[1]=u*t+g*w,e[2]=g*t-u*w,e[3]=m*t-s*w,e}function $(b,A,d){const e=d??new f(4),c=A*.5,s=b[0],u=b[1],g=b[2],m=b[3],w=Math.sin(c),t=Math.cos(c);return e[0]=s*t-g*w,e[1]=u*t+m*w,e[2]=g*t+s*w,e[3]=m*t-u*w,e}function N(b,A,d){const e=d??new f(4),c=A*.5,s=b[0],u=b[1],g=b[2],m=b[3],w=Math.sin(c),t=Math.cos(c);return e[0]=s*t+u*w,e[1]=u*t-s*w,e[2]=g*t+m*w,e[3]=m*t-g*w,e}function Z(b,A,d,e){const c=e??new f(4),s=b[0],u=b[1],g=b[2],m=b[3];let w=A[0],t=A[1],l=A[2],r=A[3],o=s*w+u*t+g*l+m*r;o<0&&(o=-o,w=-w,t=-t,l=-l,r=-r);let n,a;if(1-o>H){const p=Math.acos(o),h=Math.sin(p);n=Math.sin((1-d)*p)/h,a=Math.sin(d*p)/h}else n=1-d,a=d;return c[0]=n*s+a*w,c[1]=n*u+a*t,c[2]=n*g+a*l,c[3]=n*m+a*r,c}function J(b,A){const d=A??new f(4),e=b[0],c=b[1],s=b[2],u=b[3],g=e*e+c*c+s*s+u*u,m=g?1/g:0;return d[0]=-e*m,d[1]=-c*m,d[2]=-s*m,d[3]=u*m,d}function K(b,A){const d=A??new f(4);return d[0]=-b[0],d[1]=-b[1],d[2]=-b[2],d[3]=b[3],d}function at(b,A){const d=A??new f(4),e=b[0]+b[5]+b[10];if(e>0){const c=Math.sqrt(e+1);d[3]=.5*c;const s=.5/c;d[0]=(b[6]-b[9])*s,d[1]=(b[8]-b[2])*s,d[2]=(b[1]-b[4])*s}else{let c=0;b[5]>b[0]&&(c=1),b[10]>b[c*4+c]&&(c=2);const s=(c+1)%3,u=(c+2)%3,g=Math.sqrt(b[c*4+c]-b[s*4+s]-b[u*4+u]+1);d[c]=.5*g;const m=.5/g;d[3]=(b[s*4+u]-b[u*4+s])*m,d[s]=(b[s*4+c]+b[c*4+s])*m,d[u]=(b[u*4+c]+b[c*4+u])*m}return d}function O(b,A,d,e,c){const s=c??new f(4),u=b*.5,g=A*.5,m=d*.5,w=Math.sin(u),t=Math.cos(u),l=Math.sin(g),r=Math.cos(g),o=Math.sin(m),n=Math.cos(m);switch(e){case"xyz":s[0]=w*r*n+t*l*o,s[1]=t*l*n-w*r*o,s[2]=t*r*o+w*l*n,s[3]=t*r*n-w*l*o;break;case"xzy":s[0]=w*r*n-t*l*o,s[1]=t*l*n-w*r*o,s[2]=t*r*o+w*l*n,s[3]=t*r*n+w*l*o;break;case"yxz":s[0]=w*r*n+t*l*o,s[1]=t*l*n-w*r*o,s[2]=t*r*o-w*l*n,s[3]=t*r*n+w*l*o;break;case"yzx":s[0]=w*r*n+t*l*o,s[1]=t*l*n+w*r*o,s[2]=t*r*o-w*l*n,s[3]=t*r*n-w*l*o;break;case"zxy":s[0]=w*r*n-t*l*o,s[1]=t*l*n+w*r*o,s[2]=t*r*o+w*l*n,s[3]=t*r*n-w*l*o;break;case"zyx":s[0]=w*r*n-t*l*o,s[1]=t*l*n+w*r*o,s[2]=t*r*o-w*l*n,s[3]=t*r*n+w*l*o;break;default:throw new Error(`Unknown rotation order: ${e}`)}return s}function B(b,A){const d=A??new f(4);return d[0]=b[0],d[1]=b[1],d[2]=b[2],d[3]=b[3],d}const j=B;function nt(b,A,d){const e=d??new f(4);return e[0]=b[0]+A[0],e[1]=b[1]+A[1],e[2]=b[2]+A[2],e[3]=b[3]+A[3],e}function ht(b,A,d){const e=d??new f(4);return e[0]=b[0]-A[0],e[1]=b[1]-A[1],e[2]=b[2]-A[2],e[3]=b[3]-A[3],e}const it=ht;function vt(b,A,d){const e=d??new f(4);return e[0]=b[0]*A,e[1]=b[1]*A,e[2]=b[2]*A,e[3]=b[3]*A,e}const dt=vt;function pt(b,A,d){const e=d??new f(4);return e[0]=b[0]/A,e[1]=b[1]/A,e[2]=b[2]/A,e[3]=b[3]/A,e}function rt(b,A){return b[0]*A[0]+b[1]*A[1]+b[2]*A[2]+b[3]*A[3]}function yt(b,A,d,e){const c=e??new f(4);return c[0]=b[0]+d*(A[0]-b[0]),c[1]=b[1]+d*(A[1]-b[1]),c[2]=b[2]+d*(A[2]-b[2]),c[3]=b[3]+d*(A[3]-b[3]),c}function gt(b){const A=b[0],d=b[1],e=b[2],c=b[3];return Math.sqrt(A*A+d*d+e*e+c*c)}const Tt=gt;function mt(b){const A=b[0],d=b[1],e=b[2],c=b[3];return A*A+d*d+e*e+c*c}const W=mt;function G(b,A){const d=A??new f(4),e=b[0],c=b[1],s=b[2],u=b[3],g=Math.sqrt(e*e+c*c+s*s+u*u);return g>1e-5?(d[0]=e/g,d[1]=c/g,d[2]=s/g,d[3]=u/g):(d[0]=0,d[1]=0,d[2]=0,d[3]=1),d}function F(b,A){return Math.abs(b[0]-A[0])<H&&Math.abs(b[1]-A[1])<H&&Math.abs(b[2]-A[2])<H&&Math.abs(b[3]-A[3])<H}function wt(b,A){return b[0]===A[0]&&b[1]===A[1]&&b[2]===A[2]&&b[3]===A[3]}function et(b){const A=b??new f(4);return A[0]=0,A[1]=0,A[2]=0,A[3]=1,A}const X=i.create(),It=i.create(),st=i.create();function Pt(b,A,d){const e=d??new f(4),c=i.dot(b,A);return c<-.999999?(i.cross(It,b,X),i.len(X)<1e-6&&i.cross(st,b,X),i.normalize(X,X),P(X,Math.PI,e),e):c>.999999?(e[0]=0,e[1]=0,e[2]=0,e[3]=1,e):(i.cross(b,A,X),e[0]=X[0],e[1]=X[1],e[2]=X[2],e[3]=1+c,G(e,e))}const ct=new f(4),ot=new f(4);function Lt(b,A,d,e,c,s){const u=s??new f(4);return Z(b,e,c,ct),Z(A,d,c,ot),Z(ct,ot,2*c*(1-c),u),u}return{create:v,fromValues:y,set:_,fromAxisAngle:P,toAxisAngle:R,angle:L,multiply:z,mul:q,rotateX:k,rotateY:$,rotateZ:N,slerp:Z,inverse:J,conjugate:K,fromMat:at,fromEuler:O,copy:B,clone:j,add:nt,subtract:ht,sub:it,mulScalar:vt,scale:dt,divScalar:pt,dot:rt,lerp:yt,length:gt,len:Tt,lengthSq:mt,lenSq:W,normalize:G,equalsApproximately:F,equals:wt,identity:et,rotationTo:Pt,sqlerp:Lt}}const fe=new Map;function Ae(f){let i=fe.get(f);return i||(i=_e(f),fe.set(f,i)),i}function De(f){function i(d,e,c,s){const u=new f(4);return d!==void 0&&(u[0]=d,e!==void 0&&(u[1]=e,c!==void 0&&(u[2]=c,s!==void 0&&(u[3]=s)))),u}const v=i;function y(d,e,c,s,u){const g=u??new f(4);return g[0]=d,g[1]=e,g[2]=c,g[3]=s,g}function _(d,e){const c=e??new f(4);return c[0]=Math.ceil(d[0]),c[1]=Math.ceil(d[1]),c[2]=Math.ceil(d[2]),c[3]=Math.ceil(d[3]),c}function P(d,e){const c=e??new f(4);return c[0]=Math.floor(d[0]),c[1]=Math.floor(d[1]),c[2]=Math.floor(d[2]),c[3]=Math.floor(d[3]),c}function R(d,e){const c=e??new f(4);return c[0]=Math.round(d[0]),c[1]=Math.round(d[1]),c[2]=Math.round(d[2]),c[3]=Math.round(d[3]),c}function L(d,e=0,c=1,s){const u=s??new f(4);return u[0]=Math.min(c,Math.max(e,d[0])),u[1]=Math.min(c,Math.max(e,d[1])),u[2]=Math.min(c,Math.max(e,d[2])),u[3]=Math.min(c,Math.max(e,d[3])),u}function z(d,e,c){const s=c??new f(4);return s[0]=d[0]+e[0],s[1]=d[1]+e[1],s[2]=d[2]+e[2],s[3]=d[3]+e[3],s}function q(d,e,c,s){const u=s??new f(4);return u[0]=d[0]+e[0]*c,u[1]=d[1]+e[1]*c,u[2]=d[2]+e[2]*c,u[3]=d[3]+e[3]*c,u}function k(d,e,c){const s=c??new f(4);return s[0]=d[0]-e[0],s[1]=d[1]-e[1],s[2]=d[2]-e[2],s[3]=d[3]-e[3],s}const $=k;function N(d,e){return Math.abs(d[0]-e[0])<H&&Math.abs(d[1]-e[1])<H&&Math.abs(d[2]-e[2])<H&&Math.abs(d[3]-e[3])<H}function Z(d,e){return d[0]===e[0]&&d[1]===e[1]&&d[2]===e[2]&&d[3]===e[3]}function J(d,e,c,s){const u=s??new f(4);return u[0]=d[0]+c*(e[0]-d[0]),u[1]=d[1]+c*(e[1]-d[1]),u[2]=d[2]+c*(e[2]-d[2]),u[3]=d[3]+c*(e[3]-d[3]),u}function K(d,e,c,s){const u=s??new f(4);return u[0]=d[0]+c[0]*(e[0]-d[0]),u[1]=d[1]+c[1]*(e[1]-d[1]),u[2]=d[2]+c[2]*(e[2]-d[2]),u[3]=d[3]+c[3]*(e[3]-d[3]),u}function at(d,e,c){const s=c??new f(4);return s[0]=Math.max(d[0],e[0]),s[1]=Math.max(d[1],e[1]),s[2]=Math.max(d[2],e[2]),s[3]=Math.max(d[3],e[3]),s}function O(d,e,c){const s=c??new f(4);return s[0]=Math.min(d[0],e[0]),s[1]=Math.min(d[1],e[1]),s[2]=Math.min(d[2],e[2]),s[3]=Math.min(d[3],e[3]),s}function B(d,e,c){const s=c??new f(4);return s[0]=d[0]*e,s[1]=d[1]*e,s[2]=d[2]*e,s[3]=d[3]*e,s}const j=B;function nt(d,e,c){const s=c??new f(4);return s[0]=d[0]/e,s[1]=d[1]/e,s[2]=d[2]/e,s[3]=d[3]/e,s}function ht(d,e){const c=e??new f(4);return c[0]=1/d[0],c[1]=1/d[1],c[2]=1/d[2],c[3]=1/d[3],c}const it=ht;function vt(d,e){return d[0]*e[0]+d[1]*e[1]+d[2]*e[2]+d[3]*e[3]}function dt(d){const e=d[0],c=d[1],s=d[2],u=d[3];return Math.sqrt(e*e+c*c+s*s+u*u)}const pt=dt;function rt(d){const e=d[0],c=d[1],s=d[2],u=d[3];return e*e+c*c+s*s+u*u}const yt=rt;function gt(d,e){const c=d[0]-e[0],s=d[1]-e[1],u=d[2]-e[2],g=d[3]-e[3];return Math.sqrt(c*c+s*s+u*u+g*g)}const Tt=gt;function mt(d,e){const c=d[0]-e[0],s=d[1]-e[1],u=d[2]-e[2],g=d[3]-e[3];return c*c+s*s+u*u+g*g}const W=mt;function G(d,e){const c=e??new f(4),s=d[0],u=d[1],g=d[2],m=d[3],w=Math.sqrt(s*s+u*u+g*g+m*m);return w>1e-5?(c[0]=s/w,c[1]=u/w,c[2]=g/w,c[3]=m/w):(c[0]=0,c[1]=0,c[2]=0,c[3]=0),c}function F(d,e){const c=e??new f(4);return c[0]=-d[0],c[1]=-d[1],c[2]=-d[2],c[3]=-d[3],c}function wt(d,e){const c=e??new f(4);return c[0]=d[0],c[1]=d[1],c[2]=d[2],c[3]=d[3],c}const et=wt;function X(d,e,c){const s=c??new f(4);return s[0]=d[0]*e[0],s[1]=d[1]*e[1],s[2]=d[2]*e[2],s[3]=d[3]*e[3],s}const It=X;function st(d,e,c){const s=c??new f(4);return s[0]=d[0]/e[0],s[1]=d[1]/e[1],s[2]=d[2]/e[2],s[3]=d[3]/e[3],s}const Pt=st;function ct(d){const e=d??new f(4);return e[0]=0,e[1]=0,e[2]=0,e[3]=0,e}function ot(d,e,c){const s=c??new f(4),u=d[0],g=d[1],m=d[2],w=d[3];return s[0]=e[0]*u+e[4]*g+e[8]*m+e[12]*w,s[1]=e[1]*u+e[5]*g+e[9]*m+e[13]*w,s[2]=e[2]*u+e[6]*g+e[10]*m+e[14]*w,s[3]=e[3]*u+e[7]*g+e[11]*m+e[15]*w,s}function Lt(d,e,c){const s=c??new f(4);return G(d,s),B(s,e,s)}function b(d,e,c){const s=c??new f(4);return dt(d)>e?Lt(d,e,s):wt(d,s)}function A(d,e,c){const s=c??new f(4);return J(d,e,.5,s)}return{create:i,fromValues:v,set:y,ceil:_,floor:P,round:R,clamp:L,add:z,addScaled:q,subtract:k,sub:$,equalsApproximately:N,equals:Z,lerp:J,lerpV:K,max:at,min:O,mulScalar:B,scale:j,divScalar:nt,inverse:ht,invert:it,dot:vt,length:dt,len:pt,lengthSq:rt,lenSq:yt,distance:gt,dist:Tt,distanceSq:mt,distSq:W,normalize:G,negate:F,copy:wt,clone:et,multiply:X,mul:It,divide:st,div:Pt,zero:ct,transformMat4:ot,setLength:Lt,truncate:b,midpoint:A}}const he=new Map;function Pe(f){let i=he.get(f);return i||(i=De(f),he.set(f,i)),i}function ee(f,i,v,y,_,P){return{mat3:be(f),mat4:Se(i),quat:Ae(v),vec2:ge(y),vec3:Kt(_),vec4:Pe(P)}}const{mat4:Vt,vec3:Jt}=ee(Float32Array,Float32Array,Float32Array,Float32Array,Float32Array,Float32Array);ee(Float64Array,Float64Array,Float64Array,Float64Array,Float64Array,Float64Array);ee(we,Array,Array,Array,Array,Array);class Ct{constructor(i,v,y,_,P="div"){this.parent=i,this.object=v,this.property=y,this._disabled=!1,this._hidden=!1,this.initialValue=this.getValue(),this.domElement=document.createElement(P),this.domElement.classList.add("lil-controller"),this.domElement.classList.add(_),this.$name=document.createElement("div"),this.$name.classList.add("lil-name"),Ct.nextNameID=Ct.nextNameID||0,this.$name.id=`lil-gui-name-${++Ct.nextNameID}`,this.$widget=document.createElement("div"),this.$widget.classList.add("lil-widget"),this.$disable=this.$widget,this.domElement.appendChild(this.$name),this.domElement.appendChild(this.$widget),this.domElement.addEventListener("keydown",R=>R.stopPropagation()),this.domElement.addEventListener("keyup",R=>R.stopPropagation()),this.parent.children.push(this),this.parent.controllers.push(this),this.parent.$children.appendChild(this.domElement),this._listenCallback=this._listenCallback.bind(this),this.name(y)}name(i){return this._name=i,this.$name.textContent=i,this}onChange(i){return this._onChange=i,this}_callOnChange(){this.parent._callOnChange(this),this._onChange!==void 0&&this._onChange.call(this,this.getValue()),this._changed=!0}onFinishChange(i){return this._onFinishChange=i,this}_callOnFinishChange(){this._changed&&(this.parent._callOnFinishChange(this),this._onFinishChange!==void 0&&this._onFinishChange.call(this,this.getValue())),this._changed=!1}reset(){return this.setValue(this.initialValue),this._callOnFinishChange(),this}enable(i=!0){return this.disable(!i)}disable(i=!0){return i===this._disabled?this:(this._disabled=i,this.domElement.classList.toggle("lil-disabled",i),this.$disable.toggleAttribute("disabled",i),this)}show(i=!0){return this._hidden=!i,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}options(i){const v=this.parent.add(this.object,this.property,i);return v.name(this._name),this.destroy(),v}min(i){return this}max(i){return this}step(i){return this}decimals(i){return this}listen(i=!0){return this._listening=i,this._listenCallbackID!==void 0&&(cancelAnimationFrame(this._listenCallbackID),this._listenCallbackID=void 0),this._listening&&this._listenCallback(),this}_listenCallback(){this._listenCallbackID=requestAnimationFrame(this._listenCallback);const i=this.save();i!==this._listenPrevValue&&this.updateDisplay(),this._listenPrevValue=i}getValue(){return this.object[this.property]}setValue(i){return this.getValue()!==i&&(this.object[this.property]=i,this._callOnChange(),this.updateDisplay()),this}updateDisplay(){return this}load(i){return this.setValue(i),this._callOnFinishChange(),this}save(){return this.getValue()}destroy(){this.listen(!1),this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.controllers.splice(this.parent.controllers.indexOf(this),1),this.parent.$children.removeChild(this.domElement)}}class Ue extends Ct{constructor(i,v,y){super(i,v,y,"lil-boolean","label"),this.$input=document.createElement("input"),this.$input.setAttribute("type","checkbox"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$input.addEventListener("change",()=>{this.setValue(this.$input.checked),this._callOnFinishChange()}),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.checked=this.getValue(),this}}function te(f){let i,v;return(i=f.match(/(#|0x)?([a-f0-9]{6})/i))?v=i[2]:(i=f.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/))?v=parseInt(i[1]).toString(16).padStart(2,0)+parseInt(i[2]).toString(16).padStart(2,0)+parseInt(i[3]).toString(16).padStart(2,0):(i=f.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i))&&(v=i[1]+i[1]+i[2]+i[2]+i[3]+i[3]),v?"#"+v:!1}const Ee={isPrimitive:!0,match:f=>typeof f=="string",fromHexString:te,toHexString:te},kt={isPrimitive:!0,match:f=>typeof f=="number",fromHexString:f=>parseInt(f.substring(1),16),toHexString:f=>"#"+f.toString(16).padStart(6,0)},Re={isPrimitive:!1,match:f=>Array.isArray(f)||ArrayBuffer.isView(f),fromHexString(f,i,v=1){const y=kt.fromHexString(f);i[0]=(y>>16&255)/255*v,i[1]=(y>>8&255)/255*v,i[2]=(y&255)/255*v},toHexString([f,i,v],y=1){y=255/y;const _=f*y<<16^i*y<<8^v*y<<0;return kt.toHexString(_)}},ze={isPrimitive:!1,match:f=>Object(f)===f,fromHexString(f,i,v=1){const y=kt.fromHexString(f);i.r=(y>>16&255)/255*v,i.g=(y>>8&255)/255*v,i.b=(y&255)/255*v},toHexString({r:f,g:i,b:v},y=1){y=255/y;const _=f*y<<16^i*y<<8^v*y<<0;return kt.toHexString(_)}},Te=[Ee,kt,Re,ze];function Le(f){return Te.find(i=>i.match(f))}class Ie extends Ct{constructor(i,v,y,_){super(i,v,y,"lil-color"),this.$input=document.createElement("input"),this.$input.setAttribute("type","color"),this.$input.setAttribute("tabindex",-1),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$text=document.createElement("input"),this.$text.setAttribute("type","text"),this.$text.setAttribute("spellcheck","false"),this.$text.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("lil-display"),this.$display.appendChild(this.$input),this.$widget.appendChild(this.$display),this.$widget.appendChild(this.$text),this._format=Le(this.initialValue),this._rgbScale=_,this._initialValueHexString=this.save(),this._textFocused=!1,this.$input.addEventListener("input",()=>{this._setValueFromHexString(this.$input.value)}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$text.addEventListener("input",()=>{const P=te(this.$text.value);P&&this._setValueFromHexString(P)}),this.$text.addEventListener("focus",()=>{this._textFocused=!0,this.$text.select()}),this.$text.addEventListener("blur",()=>{this._textFocused=!1,this.updateDisplay(),this._callOnFinishChange()}),this.$disable=this.$text,this.updateDisplay()}reset(){return this._setValueFromHexString(this._initialValueHexString),this}_setValueFromHexString(i){if(this._format.isPrimitive){const v=this._format.fromHexString(i);this.setValue(v)}else this._format.fromHexString(i,this.getValue(),this._rgbScale),this._callOnChange(),this.updateDisplay()}save(){return this._format.toHexString(this.getValue(),this._rgbScale)}load(i){return this._setValueFromHexString(i),this._callOnFinishChange(),this}updateDisplay(){return this.$input.value=this._format.toHexString(this.getValue(),this._rgbScale),this._textFocused||(this.$text.value=this.$input.value.substring(1)),this.$display.style.backgroundColor=this.$input.value,this}}class Qt extends Ct{constructor(i,v,y){super(i,v,y,"lil-function"),this.$button=document.createElement("button"),this.$button.appendChild(this.$name),this.$widget.appendChild(this.$button),this.$button.addEventListener("click",_=>{_.preventDefault(),this.getValue().call(this.object),this._callOnChange()}),this.$button.addEventListener("touchstart",()=>{},{passive:!0}),this.$disable=this.$button}}class Be extends Ct{constructor(i,v,y,_,P,R){super(i,v,y,"lil-number"),this._initInput(),this.min(_),this.max(P);const L=R!==void 0;this.step(L?R:this._getImplicitStep(),L),this.updateDisplay()}decimals(i){return this._decimals=i,this.updateDisplay(),this}min(i){return this._min=i,this._onUpdateMinMax(),this}max(i){return this._max=i,this._onUpdateMinMax(),this}step(i,v=!0){return this._step=i,this._stepExplicit=v,this}updateDisplay(){const i=this.getValue();if(this._hasSlider){let v=(i-this._min)/(this._max-this._min);v=Math.max(0,Math.min(v,1)),this.$fill.style.width=v*100+"%"}return this._inputFocused||(this.$input.value=this._decimals===void 0?i:i.toFixed(this._decimals)),this}_initInput(){this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("aria-labelledby",this.$name.id),window.matchMedia("(pointer: coarse)").matches&&(this.$input.setAttribute("type","number"),this.$input.setAttribute("step","any")),this.$widget.appendChild(this.$input),this.$disable=this.$input;const v=()=>{let B=parseFloat(this.$input.value);isNaN(B)||(this._stepExplicit&&(B=this._snap(B)),this.setValue(this._clamp(B)))},y=B=>{const j=parseFloat(this.$input.value);isNaN(j)||(this._snapClampSetValue(j+B),this.$input.value=this.getValue())},_=B=>{B.key==="Enter"&&this.$input.blur(),B.code==="ArrowUp"&&(B.preventDefault(),y(this._step*this._arrowKeyMultiplier(B))),B.code==="ArrowDown"&&(B.preventDefault(),y(this._step*this._arrowKeyMultiplier(B)*-1))},P=B=>{this._inputFocused&&(B.preventDefault(),y(this._step*this._normalizeMouseWheel(B)))};let R=!1,L,z,q,k,$;const N=5,Z=B=>{L=B.clientX,z=q=B.clientY,R=!0,k=this.getValue(),$=0,window.addEventListener("mousemove",J),window.addEventListener("mouseup",K)},J=B=>{if(R){const j=B.clientX-L,nt=B.clientY-z;Math.abs(nt)>N?(B.preventDefault(),this.$input.blur(),R=!1,this._setDraggingStyle(!0,"vertical")):Math.abs(j)>N&&K()}if(!R){const j=B.clientY-q;$-=j*this._step*this._arrowKeyMultiplier(B),k+$>this._max?$=this._max-k:k+$<this._min&&($=this._min-k),this._snapClampSetValue(k+$)}q=B.clientY},K=()=>{this._setDraggingStyle(!1,"vertical"),this._callOnFinishChange(),window.removeEventListener("mousemove",J),window.removeEventListener("mouseup",K)},at=()=>{this._inputFocused=!0},O=()=>{this._inputFocused=!1,this.updateDisplay(),this._callOnFinishChange()};this.$input.addEventListener("input",v),this.$input.addEventListener("keydown",_),this.$input.addEventListener("wheel",P,{passive:!1}),this.$input.addEventListener("mousedown",Z),this.$input.addEventListener("focus",at),this.$input.addEventListener("blur",O)}_initSlider(){this._hasSlider=!0,this.$slider=document.createElement("div"),this.$slider.classList.add("lil-slider"),this.$fill=document.createElement("div"),this.$fill.classList.add("lil-fill"),this.$slider.appendChild(this.$fill),this.$widget.insertBefore(this.$slider,this.$input),this.domElement.classList.add("lil-has-slider");const i=(O,B,j,nt,ht)=>(O-B)/(j-B)*(ht-nt)+nt,v=O=>{const B=this.$slider.getBoundingClientRect();let j=i(O,B.left,B.right,this._min,this._max);this._snapClampSetValue(j)},y=O=>{this._setDraggingStyle(!0),v(O.clientX),window.addEventListener("mousemove",_),window.addEventListener("mouseup",P)},_=O=>{v(O.clientX)},P=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("mousemove",_),window.removeEventListener("mouseup",P)};let R=!1,L,z;const q=O=>{O.preventDefault(),this._setDraggingStyle(!0),v(O.touches[0].clientX),R=!1},k=O=>{O.touches.length>1||(this._hasScrollBar?(L=O.touches[0].clientX,z=O.touches[0].clientY,R=!0):q(O),window.addEventListener("touchmove",$,{passive:!1}),window.addEventListener("touchend",N))},$=O=>{if(R){const B=O.touches[0].clientX-L,j=O.touches[0].clientY-z;Math.abs(B)>Math.abs(j)?q(O):(window.removeEventListener("touchmove",$),window.removeEventListener("touchend",N))}else O.preventDefault(),v(O.touches[0].clientX)},N=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("touchmove",$),window.removeEventListener("touchend",N)},Z=this._callOnFinishChange.bind(this),J=400;let K;const at=O=>{if(Math.abs(O.deltaX)<Math.abs(O.deltaY)&&this._hasScrollBar)return;O.preventDefault();const j=this._normalizeMouseWheel(O)*this._step;this._snapClampSetValue(this.getValue()+j),this.$input.value=this.getValue(),clearTimeout(K),K=setTimeout(Z,J)};this.$slider.addEventListener("mousedown",y),this.$slider.addEventListener("touchstart",k,{passive:!1}),this.$slider.addEventListener("wheel",at,{passive:!1})}_setDraggingStyle(i,v="horizontal"){this.$slider&&this.$slider.classList.toggle("lil-active",i),document.body.classList.toggle("lil-dragging",i),document.body.classList.toggle(`lil-${v}`,i)}_getImplicitStep(){return this._hasMin&&this._hasMax?(this._max-this._min)/1e3:.1}_onUpdateMinMax(){!this._hasSlider&&this._hasMin&&this._hasMax&&(this._stepExplicit||this.step(this._getImplicitStep(),!1),this._initSlider(),this.updateDisplay())}_normalizeMouseWheel(i){let{deltaX:v,deltaY:y}=i;return Math.floor(i.deltaY)!==i.deltaY&&i.wheelDelta&&(v=0,y=-i.wheelDelta/120,y*=this._stepExplicit?1:10),v+-y}_arrowKeyMultiplier(i){let v=this._stepExplicit?1:10;return i.shiftKey?v*=10:i.altKey&&(v/=10),v}_snap(i){let v=0;return this._hasMin?v=this._min:this._hasMax&&(v=this._max),i-=v,i=Math.round(i/this._step)*this._step,i+=v,i=parseFloat(i.toPrecision(15)),i}_clamp(i){return i<this._min&&(i=this._min),i>this._max&&(i=this._max),i}_snapClampSetValue(i){this.setValue(this._clamp(this._snap(i)))}get _hasScrollBar(){const i=this.parent.root.$children;return i.scrollHeight>i.clientHeight}get _hasMin(){return this._min!==void 0}get _hasMax(){return this._max!==void 0}}class $e extends Ct{constructor(i,v,y,_){super(i,v,y,"lil-option"),this.$select=document.createElement("select"),this.$select.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("lil-display"),this.$select.addEventListener("change",()=>{this.setValue(this._values[this.$select.selectedIndex]),this._callOnFinishChange()}),this.$select.addEventListener("focus",()=>{this.$display.classList.add("lil-focus")}),this.$select.addEventListener("blur",()=>{this.$display.classList.remove("lil-focus")}),this.$widget.appendChild(this.$select),this.$widget.appendChild(this.$display),this.$disable=this.$select,this.options(_)}options(i){return this._values=Array.isArray(i)?i:Object.values(i),this._names=Array.isArray(i)?i:Object.keys(i),this.$select.replaceChildren(),this._names.forEach(v=>{const y=document.createElement("option");y.textContent=v,this.$select.appendChild(y)}),this.updateDisplay(),this}updateDisplay(){const i=this.getValue(),v=this._values.indexOf(i);return this.$select.selectedIndex=v,this.$display.textContent=v===-1?i:this._names[v],this}}class Oe extends Ct{constructor(i,v,y){super(i,v,y,"lil-string"),this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("spellcheck","false"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$input.addEventListener("input",()=>{this.setValue(this.$input.value)}),this.$input.addEventListener("keydown",_=>{_.code==="Enter"&&this.$input.blur()}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$widget.appendChild(this.$input),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.value=this.getValue(),this}}var Fe=`.lil-gui {
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
}`;function Ve(f){const i=document.createElement("style");i.innerHTML=f;const v=document.querySelector("head link[rel=stylesheet], head style");v?document.head.insertBefore(i,v):document.head.appendChild(i)}let de=!1;class ne{constructor({parent:i,autoPlace:v=i===void 0,container:y,width:_,title:P="Controls",closeFolders:R=!1,injectStyles:L=!0,touchStyles:z=!0}={}){if(this.parent=i,this.root=i?i.root:this,this.children=[],this.controllers=[],this.folders=[],this._closed=!1,this._hidden=!1,this.domElement=document.createElement("div"),this.domElement.classList.add("lil-gui"),this.$title=document.createElement("button"),this.$title.classList.add("lil-title"),this.$title.setAttribute("aria-expanded",!0),this.$title.addEventListener("click",()=>this.openAnimated(this._closed)),this.$title.addEventListener("touchstart",()=>{},{passive:!0}),this.$children=document.createElement("div"),this.$children.classList.add("lil-children"),this.domElement.appendChild(this.$title),this.domElement.appendChild(this.$children),this.title(P),this.parent){this.parent.children.push(this),this.parent.folders.push(this),this.parent.$children.appendChild(this.domElement);return}this.domElement.classList.add("lil-root"),z&&this.domElement.classList.add("lil-allow-touch-styles"),!de&&L&&(Ve(Fe),de=!0),y?y.appendChild(this.domElement):v&&(this.domElement.classList.add("lil-auto-place","autoPlace"),document.body.appendChild(this.domElement)),_&&this.domElement.style.setProperty("--width",_+"px"),this._closeFolders=R}add(i,v,y,_,P){if(Object(y)===y)return new $e(this,i,v,y);const R=i[v];switch(typeof R){case"number":return new Be(this,i,v,y,_,P);case"boolean":return new Ue(this,i,v);case"string":return new Oe(this,i,v);case"function":return new Qt(this,i,v)}console.error(`gui.add failed
	property:`,v,`
	object:`,i,`
	value:`,R)}addColor(i,v,y=1){return new Ie(this,i,v,y)}addFolder(i){const v=new ne({parent:this,title:i});return this.root._closeFolders&&v.close(),v}load(i,v=!0){return i.controllers&&this.controllers.forEach(y=>{y instanceof Qt||y._name in i.controllers&&y.load(i.controllers[y._name])}),v&&i.folders&&this.folders.forEach(y=>{y._title in i.folders&&y.load(i.folders[y._title])}),this}save(i=!0){const v={controllers:{},folders:{}};return this.controllers.forEach(y=>{if(!(y instanceof Qt)){if(y._name in v.controllers)throw new Error(`Cannot save GUI with duplicate property "${y._name}"`);v.controllers[y._name]=y.save()}}),i&&this.folders.forEach(y=>{if(y._title in v.folders)throw new Error(`Cannot save GUI with duplicate folder "${y._title}"`);v.folders[y._title]=y.save()}),v}open(i=!0){return this._setClosed(!i),this.$title.setAttribute("aria-expanded",!this._closed),this.domElement.classList.toggle("lil-closed",this._closed),this}close(){return this.open(!1)}_setClosed(i){this._closed!==i&&(this._closed=i,this._callOnOpenClose(this))}show(i=!0){return this._hidden=!i,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}openAnimated(i=!0){return this._setClosed(!i),this.$title.setAttribute("aria-expanded",!this._closed),requestAnimationFrame(()=>{const v=this.$children.clientHeight;this.$children.style.height=v+"px",this.domElement.classList.add("lil-transition");const y=P=>{P.target===this.$children&&(this.$children.style.height="",this.domElement.classList.remove("lil-transition"),this.$children.removeEventListener("transitionend",y))};this.$children.addEventListener("transitionend",y);const _=i?this.$children.scrollHeight:0;this.domElement.classList.toggle("lil-closed",!i),requestAnimationFrame(()=>{this.$children.style.height=_+"px"})}),this}title(i){return this._title=i,this.$title.textContent=i,this}reset(i=!0){return(i?this.controllersRecursive():this.controllers).forEach(y=>y.reset()),this}onChange(i){return this._onChange=i,this}_callOnChange(i){this.parent&&this.parent._callOnChange(i),this._onChange!==void 0&&this._onChange.call(this,{object:i.object,property:i.property,value:i.getValue(),controller:i})}onFinishChange(i){return this._onFinishChange=i,this}_callOnFinishChange(i){this.parent&&this.parent._callOnFinishChange(i),this._onFinishChange!==void 0&&this._onFinishChange.call(this,{object:i.object,property:i.property,value:i.getValue(),controller:i})}onOpenClose(i){return this._onOpenClose=i,this}_callOnOpenClose(i){this.parent&&this.parent._callOnOpenClose(i),this._onOpenClose!==void 0&&this._onOpenClose.call(this,i)}destroy(){this.parent&&(this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.folders.splice(this.parent.folders.indexOf(this),1)),this.domElement.parentElement&&this.domElement.parentElement.removeChild(this.domElement),Array.from(this.children).forEach(i=>i.destroy())}controllersRecursive(){let i=Array.from(this.controllers);return this.folders.forEach(v=>{i=i.concat(v.controllersRecursive())}),i}foldersRecursive(){let i=Array.from(this.folders);return this.folders.forEach(v=>{i=i.concat(v.foldersRecursive())}),i}}var Ce=`struct CommonUniforms {
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
}`,ke=`struct CommonUniforms {
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
}`;class Ge{device;format;uniformBuffer;tileTexture;tileSampler;lightUniformBuffer;sphereUniformBuffer;shadowUniformBuffer;positionBuffer;indexBuffer;vertexCount;pipeline;constructor(i,v,y,_,P,R,L,z){this.device=i,this.format=v,this.uniformBuffer=y,this.tileTexture=_,this.tileSampler=P,this.lightUniformBuffer=R,this.sphereUniformBuffer=L,this.shadowUniformBuffer=z,this.createGeometry(),this.createPipeline()}createGeometry(){function i(R){return[(R&1)*2-1,(R&2)-1,(R&4)/2-1]}const v=[[0,4,2,6,-1,0,0],[1,3,5,7,1,0,0],[2,6,3,7,0,1,0],[0,2,1,3,0,0,-1],[4,5,6,7,0,0,1]],y=[],_=[];let P=0;for(const R of v){const L=P;for(let z=0;z<4;z++){const q=R[z],k=i(q);y.push(...k),P++}_.push(L+0,L+1,L+2),_.push(L+2,L+1,L+3)}this.vertexCount=_.length,this.positionBuffer=this.device.createBuffer({label:"Pool Vertex Buffer",size:y.length*4,usage:GPUBufferUsage.VERTEX,mappedAtCreation:!0}),new Float32Array(this.positionBuffer.getMappedRange()).set(y),this.positionBuffer.unmap(),this.indexBuffer=this.device.createBuffer({label:"Pool Index Buffer",size:_.length*4,usage:GPUBufferUsage.INDEX,mappedAtCreation:!0}),new Uint32Array(this.indexBuffer.getMappedRange()).set(_),this.indexBuffer.unmap()}createPipeline(){const i=this.device.createShaderModule({label:"Pool Vertex Shader",code:Ce}),v=this.device.createShaderModule({label:"Pool Fragment Shader",code:ke});this.pipeline=this.device.createRenderPipeline({label:"Pool Pipeline",layout:"auto",vertex:{module:i,entryPoint:"vs_main",buffers:[{arrayStride:12,attributes:[{shaderLocation:0,offset:0,format:"float32x3"}]}]},fragment:{module:v,entryPoint:"fs_main",targets:[{format:this.format}]},primitive:{topology:"triangle-list",cullMode:"back"},depthStencil:{depthWriteEnabled:!0,depthCompare:"less",format:"depth24plus"}})}render(i,v,y,_){const P=this.device.createBindGroup({layout:this.pipeline.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:this.uniformBuffer}},{binding:1,resource:this.tileSampler},{binding:2,resource:this.tileTexture.createView()},{binding:3,resource:{buffer:this.lightUniformBuffer}},{binding:4,resource:{buffer:this.sphereUniformBuffer}},{binding:5,resource:y},{binding:6,resource:v.createView()},{binding:7,resource:_.createView()},{binding:8,resource:{buffer:this.shadowUniformBuffer}}]});i.setPipeline(this.pipeline),i.setBindGroup(0,P),i.setVertexBuffer(0,this.positionBuffer),i.setIndexBuffer(this.indexBuffer,"uint32"),i.drawIndexed(this.vertexCount)}}var qe=`struct CommonUniforms {
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
}`;class He{device;format;commonUniformBuffer;sphereUniformBuffer;lightUniformBuffer;positionBuffer;indexBuffer;vertexCount;pipeline;constructor(i,v,y,_,P){this.device=i,this.format=v,this.commonUniformBuffer=y,this.sphereUniformBuffer=P,this.lightUniformBuffer=_,this.createGeometry(),this.createPipeline()}update(i,v){const y=new Float32Array([...i,v]);this.device.queue.writeBuffer(this.sphereUniformBuffer,0,y)}createGeometry(){class v{unique;map;constructor(){this.unique=[],this.map=new Map}add(q){const k=q.join(",");return this.map.has(k)||(this.map.set(k,this.unique.length),this.unique.push(q)),this.map.get(k)}}function y(z){return[(z&1)*2-1,(z&2)-1,(z&4)/2-1]}function _(z){return z+(z-z*z)/2}const P=new v,R=[];for(let z=0;z<8;z++){const q=y(z),k=q[0]*q[1]*q[2]>0,$=[];for(let N=0;N<=10;N++)for(let Z=0;N+Z<=10;Z++){const J=N/10,K=Z/10,at=(10-N-Z)/10,O=[_(J),_(K),_(at)],B=Math.sqrt(O[0]*O[0]+O[1]*O[1]+O[2]*O[2]),j=[O[0]/B*q[0],O[1]/B*q[1],O[2]/B*q[2]];$.push(P.add(j))}for(let N=0;N<=10;N++)if(N>0)for(let Z=0;N+Z<=10;Z++){const J=(N-1)*11+(N-1-(N-1)*(N-1))/2+Z,K=N*11+(N-N*N)/2+Z;k?R.push($[J],$[K],$[J+1]):R.push($[J],$[J+1],$[K]),N+Z<10&&(k?R.push($[K],$[K+1],$[J+1]):R.push($[K],$[J+1],$[K+1]))}}this.vertexCount=R.length;const L=[];for(const z of P.unique)L.push(...z);this.positionBuffer=this.device.createBuffer({label:"Sphere Vertex Buffer",size:L.length*4,usage:GPUBufferUsage.VERTEX,mappedAtCreation:!0}),new Float32Array(this.positionBuffer.getMappedRange()).set(L),this.positionBuffer.unmap(),this.indexBuffer=this.device.createBuffer({label:"Sphere Index Buffer",size:R.length*4,usage:GPUBufferUsage.INDEX,mappedAtCreation:!0}),new Uint32Array(this.indexBuffer.getMappedRange()).set(R),this.indexBuffer.unmap()}createPipeline(){const i=this.device.createShaderModule({label:"Sphere Vertex Shader",code:qe}),v=this.device.createShaderModule({label:"Sphere Fragment Shader",code:Ne});this.pipeline=this.device.createRenderPipeline({label:"Sphere Pipeline",layout:"auto",vertex:{module:i,entryPoint:"vs_main",buffers:[{arrayStride:12,attributes:[{shaderLocation:0,offset:0,format:"float32x3"}]}]},fragment:{module:v,entryPoint:"fs_main",targets:[{format:this.format}]},primitive:{topology:"triangle-list",cullMode:"back"},depthStencil:{depthWriteEnabled:!0,depthCompare:"less",format:"depth24plus"}})}render(i,v,y,_){const P=this.device.createBindGroup({layout:this.pipeline.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:this.commonUniformBuffer}},{binding:1,resource:{buffer:this.sphereUniformBuffer}},{binding:2,resource:{buffer:this.lightUniformBuffer}},{binding:3,resource:y},{binding:4,resource:v.createView()},{binding:5,resource:_.createView()}]});i.setPipeline(this.pipeline),i.setBindGroup(0,P),i.setVertexBuffer(0,this.positionBuffer),i.setIndexBuffer(this.indexBuffer,"uint32"),i.drawIndexed(this.vertexCount)}}const Yt=`struct VertexOutput {
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
`,je=`@group(0) @binding(0) var waterTexture : texture_2d<f32>;
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
}`;class tn{device;width;height;commonUniformBuffer;lightUniformBuffer;sphereUniformBuffer;shadowUniformBuffer;tileTexture;tileSampler;skyTexture;skySampler;textureA;textureB;causticsTexture;sampler;dropPipeline;updatePipeline;normalPipeline;spherePipeline;positionBuffer;indexBuffer;vertexCount;surfaceBindGroupLayout;surfacePipelineAbove;surfacePipelineUnder;causticsPipeline;constructor(i,v,y,_,P,R,L,z,q,k,$){this.device=i,this.width=v,this.height=y,this.commonUniformBuffer=_,this.lightUniformBuffer=P,this.sphereUniformBuffer=R,this.shadowUniformBuffer=L,this.tileTexture=z,this.tileSampler=q,this.skyTexture=k,this.skySampler=$,this.textureA=this.createTexture(),this.textureB=this.createTexture(),this.causticsTexture=this.device.createTexture({size:[1024,1024],format:"rgba8unorm",usage:GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.RENDER_ATTACHMENT}),this.sampler=i.createSampler({magFilter:"linear",minFilter:"linear",addressModeU:"clamp-to-edge",addressModeV:"clamp-to-edge"}),this.createPipelines(),this.createSurfaceMesh(),this.createSurfacePipeline(),this.createCausticsPipeline()}createTexture(){const i=this.device.features.has("float32-filterable")?"rgba32float":"rgba16float";return this.device.createTexture({size:[this.width,this.height],format:i,usage:GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.RENDER_ATTACHMENT})}createPipelines(){const i=this.device.features.has("float32-filterable")?"rgba32float":"rgba16float";this.dropPipeline=this.createPipeline("Drop",Yt,je,32,i),this.updatePipeline=this.createPipeline("Update",Yt,We,16,i),this.normalPipeline=this.createPipeline("Normal",Yt,Xe,16,i),this.spherePipeline=this.createPipeline("Sphere",Yt,Ye,32,i)}createPipeline(i,v,y,_,P){const R=this.device.createShaderModule({label:i+" Module",code:v+y});return{pipeline:this.device.createRenderPipeline({label:i+" Pipeline",layout:"auto",vertex:{module:R,entryPoint:"vs_main"},fragment:{module:R,entryPoint:"fs_main",targets:[{format:P}]},primitive:{topology:"triangle-list"}}),uniformSize:_,uniformBuffer:this.device.createBuffer({size:_,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST})}}runPipeline(i,v){this.device.queue.writeBuffer(i.uniformBuffer,0,v);const y=this.device.createBindGroup({layout:i.pipeline.getBindGroupLayout(0),entries:[{binding:0,resource:this.textureA.createView()},{binding:1,resource:this.sampler},{binding:2,resource:{buffer:i.uniformBuffer}}]}),_=this.device.createCommandEncoder(),P=_.beginRenderPass({colorAttachments:[{view:this.textureB.createView(),loadOp:"clear",storeOp:"store",clearValue:{r:0,g:0,b:0,a:0}}]});P.setPipeline(i.pipeline),P.setBindGroup(0,y),P.draw(6),P.end(),this.device.queue.submit([_.finish()]);const R=this.textureA;this.textureA=this.textureB,this.textureB=R}addDrop(i,v,y,_){const P=new Float32Array(4);P[0]=i,P[1]=v,P[2]=y,P[3]=_,this.runPipeline(this.dropPipeline,P)}stepSimulation(){const i=new Float32Array(2);i[0]=1/this.width,i[1]=1/this.height,this.runPipeline(this.updatePipeline,i)}updateNormals(){const i=new Float32Array(2);i[0]=1/this.width,i[1]=1/this.height,this.runPipeline(this.normalPipeline,i)}moveSphere(i,v,y){const _=new Float32Array(8);_[0]=i[0],_[1]=i[1],_[2]=i[2],_[3]=y,_[4]=v[0],_[5]=v[1],_[6]=v[2],_[7]=0,this.runPipeline(this.spherePipeline,_)}createSurfaceMesh(){const v=[],y=[];for(let _=0;_<=200;_++){const P=_/200;for(let R=0;R<=200;R++){const L=R/200;v.push(2*L-1,2*P-1,0)}}for(let _=0;_<200;_++)for(let P=0;P<200;P++){const R=P+_*201;y.push(R,R+1,R+200+1),y.push(R+200+1,R+1,R+200+2)}this.vertexCount=y.length,this.positionBuffer=this.device.createBuffer({label:"Water Surface Vertices",size:v.length*4,usage:GPUBufferUsage.VERTEX,mappedAtCreation:!0}),new Float32Array(this.positionBuffer.getMappedRange()).set(v),this.positionBuffer.unmap(),this.indexBuffer=this.device.createBuffer({label:"Water Surface Indices",size:y.length*4,usage:GPUBufferUsage.INDEX,mappedAtCreation:!0}),new Uint32Array(this.indexBuffer.getMappedRange()).set(y),this.indexBuffer.unmap()}createSurfacePipeline(){const i=(P,R)=>this.device.createShaderModule({label:`${P} Vertex Shader`,code:R}),v=(P,R)=>this.device.createShaderModule({label:`${P} Fragment Shader`,code:R});this.surfaceBindGroupLayout=this.device.createBindGroupLayout({label:"Water Surface BindGroupLayout",entries:[{binding:0,visibility:GPUShaderStage.VERTEX|GPUShaderStage.FRAGMENT,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.FRAGMENT,buffer:{type:"uniform"}},{binding:2,visibility:GPUShaderStage.FRAGMENT,buffer:{type:"uniform"}},{binding:3,visibility:GPUShaderStage.FRAGMENT,sampler:{}},{binding:4,visibility:GPUShaderStage.FRAGMENT,texture:{}},{binding:5,visibility:GPUShaderStage.VERTEX|GPUShaderStage.FRAGMENT,sampler:{}},{binding:6,visibility:GPUShaderStage.VERTEX|GPUShaderStage.FRAGMENT,texture:{}},{binding:7,visibility:GPUShaderStage.FRAGMENT,sampler:{}},{binding:8,visibility:GPUShaderStage.FRAGMENT,texture:{viewDimension:"cube"}},{binding:9,visibility:GPUShaderStage.FRAGMENT,texture:{}},{binding:10,visibility:GPUShaderStage.FRAGMENT,buffer:{type:"uniform"}}]});const y=this.device.createPipelineLayout({label:"Water Surface PipelineLayout",bindGroupLayouts:[this.surfaceBindGroupLayout]}),_=(P,R,L,z)=>{const q=i(P,R),k=v(P,L);return this.device.createRenderPipeline({label:P,layout:y,vertex:{module:q,entryPoint:"vs_main",buffers:[{arrayStride:12,attributes:[{shaderLocation:0,offset:0,format:"float32x3"}]}]},fragment:{module:k,entryPoint:"fs_main",targets:[{format:navigator.gpu.getPreferredCanvasFormat()}]},primitive:{topology:"triangle-list",cullMode:z},depthStencil:{depthWriteEnabled:!0,depthCompare:"less",format:"depth24plus"}})};this.surfacePipelineAbove=_("Water Surface Above Pipeline",pe,Ze,"front"),this.surfacePipelineUnder=_("Water Surface Under Pipeline",pe,Ke,"back")}renderSurface(i){const v=this.device.createBindGroup({layout:this.surfaceBindGroupLayout,entries:[{binding:0,resource:{buffer:this.commonUniformBuffer}},{binding:1,resource:{buffer:this.lightUniformBuffer}},{binding:2,resource:{buffer:this.sphereUniformBuffer}},{binding:3,resource:this.tileSampler},{binding:4,resource:this.tileTexture.createView()},{binding:5,resource:this.sampler},{binding:6,resource:this.textureA.createView()},{binding:7,resource:this.skySampler},{binding:8,resource:this.skyTexture.createView({dimension:"cube"})},{binding:9,resource:this.causticsTexture.createView()},{binding:10,resource:{buffer:this.shadowUniformBuffer}}]});i.setPipeline(this.surfacePipelineAbove),i.setBindGroup(0,v),i.setVertexBuffer(0,this.positionBuffer),i.setIndexBuffer(this.indexBuffer,"uint32"),i.drawIndexed(this.vertexCount),i.setPipeline(this.surfacePipelineUnder),i.setBindGroup(0,v),i.drawIndexed(this.vertexCount)}createCausticsPipeline(){const i=this.device.createShaderModule({label:"Caustics Vertex Shader",code:Qe}),v=this.device.createShaderModule({label:"Caustics Fragment Shader",code:Je});this.causticsPipeline=this.device.createRenderPipeline({label:"Caustics Pipeline",layout:"auto",vertex:{module:i,entryPoint:"vs_main",buffers:[{arrayStride:12,attributes:[{shaderLocation:0,offset:0,format:"float32x3"}]}]},fragment:{module:v,entryPoint:"fs_main",targets:[{format:"rgba8unorm",blend:{color:{operation:"add",srcFactor:"one",dstFactor:"one"},alpha:{operation:"add",srcFactor:"one",dstFactor:"one"}}}]},primitive:{topology:"triangle-list"}})}updateCaustics(){const i=this.device.createBindGroup({layout:this.causticsPipeline.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:this.lightUniformBuffer}},{binding:1,resource:{buffer:this.sphereUniformBuffer}},{binding:2,resource:this.sampler},{binding:3,resource:this.textureA.createView()},{binding:4,resource:{buffer:this.shadowUniformBuffer}}]}),v=this.device.createCommandEncoder(),y=v.beginRenderPass({colorAttachments:[{view:this.causticsTexture.createView(),loadOp:"clear",storeOp:"store",clearValue:{r:0,g:0,b:0,a:0}}]});y.setPipeline(this.causticsPipeline),y.setBindGroup(0,i),y.setVertexBuffer(0,this.positionBuffer),y.setIndexBuffer(this.indexBuffer,"uint32"),y.drawIndexed(this.vertexCount),y.end(),this.device.queue.submit([v.finish()])}}class tt{x;y;z;constructor(i=0,v=0,y=0){this.x=i,this.y=v,this.z=y}negative(){return new tt(-this.x,-this.y,-this.z)}add(i){return i instanceof tt?new tt(this.x+i.x,this.y+i.y,this.z+i.z):new tt(this.x+i,this.y+i,this.z+i)}subtract(i){return i instanceof tt?new tt(this.x-i.x,this.y-i.y,this.z-i.z):new tt(this.x-i,this.y-i,this.z-i)}multiply(i){return i instanceof tt?new tt(this.x*i.x,this.y*i.y,this.z*i.z):new tt(this.x*i,this.y*i,this.z*i)}divide(i){return i instanceof tt?new tt(this.x/i.x,this.y/i.y,this.z/i.z):new tt(this.x/i,this.y/i,this.z/i)}dot(i){return this.x*i.x+this.y*i.y+this.z*i.z}length(){return Math.sqrt(this.dot(this))}unit(){return this.divide(this.length())}toArray(){return[this.x,this.y,this.z]}clone(){return new tt(this.x,this.y,this.z)}static fromAngles(i,v){return new tt(Math.cos(v)*Math.cos(i),Math.sin(v),Math.cos(v)*Math.sin(i))}static lerp(i,v,y){return i.add(v.subtract(i).multiply(y))}}class en{t;hit;normal;constructor(i,v,y){this.t=i,this.hit=v,this.normal=y}}class Zt{eye;viewport;invViewProj;ray00;ray10;ray01;ray11;constructor(i,v,y){this.viewport=y;const _=Vt.invert(i),P=Jt.transformMat4([0,0,0],_);this.eye=new tt(P[0],P[1],P[2]),this.invViewProj=Vt.invert(Vt.multiply(v,i));const[R,L,z,q]=y,k=R+z,$=L+q;this.ray00=this.unProject(R,L,1).subtract(this.eye),this.ray10=this.unProject(k,L,1).subtract(this.eye),this.ray01=this.unProject(R,$,1).subtract(this.eye),this.ray11=this.unProject(k,$,1).subtract(this.eye)}unProject(i,v,y){const[_,P,R,L]=this.viewport,z=(i-_)/R*2-1,q=(1-(v-P)/L)*2-1,k=Jt.transformMat4([z,q,y],this.invViewProj);return new tt(k[0],k[1],k[2])}getRayForPixel(i,v){const[y,_,P,R]=this.viewport,L=(i-y)/P,z=(v-_)/R,q=tt.lerp(this.ray00,this.ray10,L),k=tt.lerp(this.ray01,this.ray11,L);return tt.lerp(q,k,z).unit()}static hitTestSphere(i,v,y,_){const P=i.subtract(y),R=v.dot(v),L=2*v.dot(P),z=P.dot(P)-_*_,q=L*L-4*R*z;if(q>0){const k=(-L-Math.sqrt(q))/(2*R),$=i.add(v.multiply(k)),N=$.subtract(y).divide(_);return new en(k,$,N)}return null}}class nn{device;constructor(i){this.device=i}async load(i){const v=["xpos","xneg","ypos","yneg","zpos","zneg"],y=await Promise.all(v.map(L=>fetch(i[L]).then(z=>z.blob()).then(z=>createImageBitmap(z)))),{width:_,height:P}=y[0],R=this.device.createTexture({size:[_,P,6],format:"rgba8unorm",usage:GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_DST|GPUTextureUsage.RENDER_ATTACHMENT});return y.forEach((L,z)=>{this.device.queue.copyExternalImageToTexture({source:L,flipY:!0},{texture:R,origin:[0,0,z]},{width:_,height:P})}),R}}var Ft=(f=>(f[f.None=-1]="None",f[f.AddDrops=0]="AddDrops",f[f.OrbitCamera=1]="OrbitCamera",f[f.MoveSphere=2]="MoveSphere",f))(Ft||{});async function rn(){const f=navigator.gpu;if(!f){document.getElementById("loading").innerHTML="WebGPU not supported.";return}const i=await f.requestAdapter();if(!i){document.getElementById("loading").innerHTML="No WebGPU adapter found.";return}const v=[];i.features.has("float32-filterable")&&v.push("float32-filterable");const y=await i.requestDevice({requiredFeatures:v}),_=document.querySelector("canvas"),P=_.getContext("webgpu"),R=navigator.gpu.getPreferredCanvasFormat();P.configure({device:y,format:R,alphaMode:"premultiplied"});const L=document.getElementById("help"),z=window.devicePixelRatio||1;let q=performance.now();async function k(x){const D=await(await fetch(x)).blob(),U=await createImageBitmap(D),E=y.createTexture({label:x,size:[U.width,U.height],format:"rgba8unorm",usage:GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_DST|GPUTextureUsage.RENDER_ATTACHMENT});return y.queue.copyExternalImageToTexture({source:U,flipY:!0},{texture:E},{width:U.width,height:U.height}),E}const $="/webgpu-water/",N=await k(`${$}tiles.jpg`),Z=y.createSampler({magFilter:"linear",minFilter:"linear",addressModeU:"repeat",addressModeV:"repeat"}),K=await new nn(y).load({xpos:`${$}xpos.jpg`,xneg:`${$}xneg.jpg`,ypos:`${$}ypos.jpg`,yneg:`${$}yneg.jpg`,zpos:`${$}zpos.jpg`,zneg:`${$}zneg.jpg`}),at=y.createSampler({magFilter:"linear",minFilter:"linear"});let O=-25,B=-200.5,j=4,nt=O,ht=B,it=j;function vt(){const x=_.width/_.height,S=Vt.perspective(Math.PI/4,x,.01,100),D=Vt.identity();return Vt.translate(D,[0,0,-j],D),Vt.rotateX(D,-O*Math.PI/180,D),Vt.rotateY(D,-B*Math.PI/180,D),Vt.translate(D,[0,.5,0],D),{projectionMatrix:S,viewMatrix:D}}const dt=y.createBuffer({size:80,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),pt=y.createBuffer({size:16,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),rt=y.createBuffer({size:16,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),yt=y.createBuffer({size:16,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST});let gt=new tt(2,2,-1).unit();function Tt(){y.queue.writeBuffer(pt,0,new Float32Array([...gt.toArray(),0]))}Tt(),y.queue.writeBuffer(yt,0,new Float32Array([1,1,1,0]));const mt=new Ge(y,R,dt,N,Z,pt,rt,yt),W=new He(y,R,dt,pt,rt),G=new tn(y,256,256,dt,pt,rt,yt,N,Z,K,at);let F=new tt(-.4,-.75,.2),wt=F.clone();const et=.25;let X=new tt;const It=new tt(0,-4,0);let st=!1,Pt=!1;const ct=new ne({title:"Settings"});ct.close();const ot={gravity:st,followCamera:!1,showSphere:!0};ct.add(ot,"showSphere").name("Render Sphere").onChange(x=>{y.queue.writeBuffer(yt,0,new Float32Array([1,x?1:0,1,0])),document.activeElement?.blur()});const Lt=ct.add(ot,"gravity").name("Toggle Gravity").onChange(x=>{st=x,document.activeElement?.blur()});ct.add(ot,"followCamera").name("Light From Camera").onChange(()=>{document.activeElement?.blur()}),W.update(F.toArray(),et);for(let x=0;x<20;x++)G.addDrop(Math.random()*2-1,Math.random()*2-1,.03,x&1?.01:-.01);const b={};window.addEventListener("keydown",x=>{const S=x.key.toUpperCase();b[S]=!0,S==="G"?(st=!st,ot.gravity=st,Lt.updateDisplay()):S===" "&&(Pt=!Pt)}),window.addEventListener("keyup",x=>{b[x.key.toUpperCase()]=!1});let A=Ft.None,d=0,e=0,c,s;const u=new Map;let g=0;function m(){return[0,0,_.width,_.height]}function w(x,S,D){if(d=x,e=S,D===2){A=Ft.OrbitCamera;return}const{projectionMatrix:U,viewMatrix:E}=vt(),T=new Zt(E,U,m()),V=T.getRayForPixel(x*z,S*z),I=ot.showSphere?Zt.hitTestSphere(T.eye,V,F,et):null;if(I){A=Ft.MoveSphere,c=I.hit,s=T.getRayForPixel(_.width/2,_.height/2).negative();return}const C=-T.eye.y/V.y,Y=T.eye.add(V.multiply(C));Math.abs(Y.x)<1&&Math.abs(Y.z)<1?(A=Ft.AddDrops,G.addDrop(Y.x,Y.z,.03,.01)):A=Ft.OrbitCamera}function t(x,S){if(A===Ft.OrbitCamera)ht-=x-d,nt-=S-e,nt=Math.max(-89.999,Math.min(89.999,nt));else if(A===Ft.MoveSphere){const{projectionMatrix:D,viewMatrix:U}=vt(),E=new Zt(U,D,m()),T=E.getRayForPixel(x*z,S*z),V=-s.dot(E.eye.subtract(c))/s.dot(T),I=E.eye.add(T.multiply(V));F=F.add(I.subtract(c)),F.x=Math.max(et-1,Math.min(1-et,F.x)),F.y=Math.max(et-1,Math.min(10,F.y)),F.z=Math.max(et-1,Math.min(1-et,F.z)),W.update(F.toArray(),et),c=I}else if(A===Ft.AddDrops){const{projectionMatrix:D,viewMatrix:U}=vt(),E=new Zt(U,D,m()),T=E.getRayForPixel(x*z,S*z),V=-E.eye.y/T.y,I=E.eye.add(T.multiply(V));Math.abs(I.x)<1&&Math.abs(I.z)<1&&G.addDrop(I.x,I.z,.03,.01)}d=x,e=S}function l(){A=Ft.None}function r(){const x=Array.from(u.values());if(x.length<2)return 0;const S=x[0].x-x[1].x,D=x[0].y-x[1].y;return Math.sqrt(S*S+D*D)}_.addEventListener("pointerdown",x=>{if(x.button!==1){if(x.preventDefault(),_.setPointerCapture(x.pointerId),u.set(x.pointerId,{x:x.offsetX,y:x.offsetY}),u.size===2){A=Ft.None,g=r();return}u.size===1&&w(x.offsetX,x.offsetY,x.button)}}),_.addEventListener("contextmenu",x=>x.preventDefault()),_.addEventListener("pointermove",x=>{if(u.has(x.pointerId)&&u.set(x.pointerId,{x:x.offsetX,y:x.offsetY}),u.size===2){const S=r();if(g>0){const D=g-S;it+=D*.01,it=Math.max(1.5,Math.min(10,it))}g=S;return}A!==Ft.None&&u.size===1&&t(x.offsetX,x.offsetY)}),_.addEventListener("pointerup",x=>{_.releasePointerCapture(x.pointerId),u.delete(x.pointerId),u.size<2&&(g=0),u.size===0&&l()}),_.addEventListener("pointercancel",x=>{_.releasePointerCapture(x.pointerId),u.delete(x.pointerId),u.size<2&&(g=0),u.size===0&&l()}),_.addEventListener("wheel",x=>{x.preventDefault(),it+=x.deltaY*.005,it=Math.max(1.5,Math.min(10,it))},{passive:!1});let o;function n(){const S=window.matchMedia("(max-width: 600px)").matches?window.innerWidth:window.innerWidth-L.clientWidth-20,D=window.innerHeight;_.width=Math.floor(S*z),_.height=Math.floor(D*z),_.style.width=`${S}px`,_.style.height=`${D}px`,o&&o.destroy(),o=y.createTexture({size:[_.width,_.height],format:"depth24plus",usage:GPUTextureUsage.RENDER_ATTACHMENT}),h()}window.addEventListener("resize",n);const a=document.getElementById("help-toggle");a.addEventListener("click",()=>{L.classList.toggle("collapsed"),a.textContent=L.classList.contains("collapsed")?"menu":"chevron_right",n()}),window.addEventListener("pointerdown",x=>{if(window.matchMedia("(max-width: 600px)").matches&&!L.classList.contains("collapsed")){const D=x.target;!L.contains(D)&&!a.contains(D)&&(L.classList.add("collapsed"),a.textContent="menu",n())}}),document.getElementById("loading").innerHTML="",n();function p(){const{projectionMatrix:x,viewMatrix:S}=vt(),D=Vt.multiply(x,S),U=Vt.invert(S),E=Jt.transformMat4([0,0,0],U),T=new Float32Array(20);T.set(D,0),T.set(E,16),y.queue.writeBuffer(dt,0,T)}function h(){const x=performance.now();let S=(x-q)/1e3;if(q=x,S>1&&(S=1),O+=(nt-O)*.15,B+=(ht-B)*.15,j+=(it-j)*.15,(b.L||ot.followCamera)&&(gt=tt.fromAngles((90-B)*Math.PI/180,-O*Math.PI/180),Tt()),!Pt){if(A===Ft.MoveSphere)X=new tt;else if(st){const E=Math.max(0,Math.min(1,(et-F.y)/(2*et)));X=X.add(It.multiply(S-1.1*S*E)),X=X.subtract(X.unit().multiply(E*S*X.dot(X))),F=F.add(X.multiply(S)),F.y<et-1&&(F.y=et-1,X.y=Math.abs(X.y)*.7),W.update(F.toArray(),et)}ot.showSphere&&G.moveSphere(wt.toArray(),F.toArray(),et),wt=F.clone(),G.stepSimulation(),G.stepSimulation(),G.updateNormals(),G.updateCaustics()}p();const D=y.createCommandEncoder(),U=D.beginRenderPass({colorAttachments:[{view:P.getCurrentTexture().createView(),clearValue:{r:0,g:0,b:0,a:1},loadOp:"clear",storeOp:"store"}],depthStencilAttachment:{view:o.createView(),depthClearValue:1,depthLoadOp:"clear",depthStoreOp:"store"}});mt.render(U,G.textureA,G.sampler,G.causticsTexture),ot.showSphere&&W.render(U,G.textureA,G.sampler,G.causticsTexture),G.renderSurface(U),U.end(),y.queue.submit([D.finish()])}function M(){requestAnimationFrame(M),h()}requestAnimationFrame(M)}rn();
