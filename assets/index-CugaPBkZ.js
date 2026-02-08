(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const M of document.querySelectorAll('link[rel="modulepreload"]'))y(M);new MutationObserver(M=>{for(const D of M)if(D.type==="childList")for(const P of D.addedNodes)P.tagName==="LINK"&&P.rel==="modulepreload"&&y(P)}).observe(document,{childList:!0,subtree:!0});function v(M){const D={};return M.integrity&&(D.integrity=M.integrity),M.referrerPolicy&&(D.referrerPolicy=M.referrerPolicy),M.crossOrigin==="use-credentials"?D.credentials="include":M.crossOrigin==="anonymous"?D.credentials="omit":D.credentials="same-origin",D}function y(M){if(M.ep)return;M.ep=!0;const D=v(M);fetch(M.href,D)}})();function me(d,i){return class extends d{constructor(...v){super(...v),i(this)}}}const we=me(Array,d=>d.fill(0));let H=1e-6;function ve(d){function i(g=0,m=0){const w=new d(2);return g!==void 0&&(w[0]=g,m!==void 0&&(w[1]=m)),w}const v=i;function y(g,m,w){const t=w??new d(2);return t[0]=g,t[1]=m,t}function M(g,m){const w=m??new d(2);return w[0]=Math.ceil(g[0]),w[1]=Math.ceil(g[1]),w}function D(g,m){const w=m??new d(2);return w[0]=Math.floor(g[0]),w[1]=Math.floor(g[1]),w}function P(g,m){const w=m??new d(2);return w[0]=Math.round(g[0]),w[1]=Math.round(g[1]),w}function z(g,m=0,w=1,t){const l=t??new d(2);return l[0]=Math.min(w,Math.max(m,g[0])),l[1]=Math.min(w,Math.max(m,g[1])),l}function T(g,m,w){const t=w??new d(2);return t[0]=g[0]+m[0],t[1]=g[1]+m[1],t}function q(g,m,w,t){const l=t??new d(2);return l[0]=g[0]+m[0]*w,l[1]=g[1]+m[1]*w,l}function k(g,m){const w=g[0],t=g[1],l=m[0],r=m[1],o=Math.sqrt(w*w+t*t),n=Math.sqrt(l*l+r*r),a=o*n,u=a&&pt(g,m)/a;return Math.acos(u)}function B(g,m,w){const t=w??new d(2);return t[0]=g[0]-m[0],t[1]=g[1]-m[1],t}const N=B;function Y(g,m){return Math.abs(g[0]-m[0])<H&&Math.abs(g[1]-m[1])<H}function J(g,m){return g[0]===m[0]&&g[1]===m[1]}function Z(g,m,w,t){const l=t??new d(2);return l[0]=g[0]+w*(m[0]-g[0]),l[1]=g[1]+w*(m[1]-g[1]),l}function ot(g,m,w,t){const l=t??new d(2);return l[0]=g[0]+w[0]*(m[0]-g[0]),l[1]=g[1]+w[1]*(m[1]-g[1]),l}function $(g,m,w){const t=w??new d(2);return t[0]=Math.max(g[0],m[0]),t[1]=Math.max(g[1],m[1]),t}function L(g,m,w){const t=w??new d(2);return t[0]=Math.min(g[0],m[0]),t[1]=Math.min(g[1],m[1]),t}function j(g,m,w){const t=w??new d(2);return t[0]=g[0]*m,t[1]=g[1]*m,t}const nt=j;function ft(g,m,w){const t=w??new d(2);return t[0]=g[0]/m,t[1]=g[1]/m,t}function ht(g,m){const w=m??new d(2);return w[0]=1/g[0],w[1]=1/g[1],w}const vt=ht;function dt(g,m,w){const t=w??new d(3),l=g[0]*m[1]-g[1]*m[0];return t[0]=0,t[1]=0,t[2]=l,t}function pt(g,m){return g[0]*m[0]+g[1]*m[1]}function it(g){const m=g[0],w=g[1];return Math.sqrt(m*m+w*w)}const yt=it;function gt(g){const m=g[0],w=g[1];return m*m+w*w}const zt=gt;function mt(g,m){const w=g[0]-m[0],t=g[1]-m[1];return Math.sqrt(w*w+t*t)}const W=mt;function G(g,m){const w=g[0]-m[0],t=g[1]-m[1];return w*w+t*t}const O=G;function wt(g,m){const w=m??new d(2),t=g[0],l=g[1],r=Math.sqrt(t*t+l*l);return r>1e-5?(w[0]=t/r,w[1]=l/r):(w[0]=0,w[1]=0),w}function et(g,m){const w=m??new d(2);return w[0]=-g[0],w[1]=-g[1],w}function X(g,m){const w=m??new d(2);return w[0]=g[0],w[1]=g[1],w}const Bt=X;function rt(g,m,w){const t=w??new d(2);return t[0]=g[0]*m[0],t[1]=g[1]*m[1],t}const Pt=rt;function at(g,m,w){const t=w??new d(2);return t[0]=g[0]/m[0],t[1]=g[1]/m[1],t}const st=at;function Lt(g=1,m){const w=m??new d(2),t=Math.random()*2*Math.PI;return w[0]=Math.cos(t)*g,w[1]=Math.sin(t)*g,w}function b(g){const m=g??new d(2);return m[0]=0,m[1]=0,m}function A(g,m,w){const t=w??new d(2),l=g[0],r=g[1];return t[0]=l*m[0]+r*m[4]+m[12],t[1]=l*m[1]+r*m[5]+m[13],t}function p(g,m,w){const t=w??new d(2),l=g[0],r=g[1];return t[0]=m[0]*l+m[4]*r+m[8],t[1]=m[1]*l+m[5]*r+m[9],t}function e(g,m,w,t){const l=t??new d(2),r=g[0]-m[0],o=g[1]-m[1],n=Math.sin(w),a=Math.cos(w);return l[0]=r*a-o*n+m[0],l[1]=r*n+o*a+m[1],l}function c(g,m,w){const t=w??new d(2);return wt(g,t),j(t,m,t)}function s(g,m,w){const t=w??new d(2);return it(g)>m?c(g,m,t):X(g,t)}function h(g,m,w){const t=w??new d(2);return Z(g,m,.5,t)}return{create:i,fromValues:v,set:y,ceil:M,floor:D,round:P,clamp:z,add:T,addScaled:q,angle:k,subtract:B,sub:N,equalsApproximately:Y,equals:J,lerp:Z,lerpV:ot,max:$,min:L,mulScalar:j,scale:nt,divScalar:ft,inverse:ht,invert:vt,cross:dt,dot:pt,length:it,len:yt,lengthSq:gt,lenSq:zt,distance:mt,dist:W,distanceSq:G,distSq:O,normalize:wt,negate:et,copy:X,clone:Bt,multiply:rt,mul:Pt,divide:at,div:st,random:Lt,zero:b,transformMat4:A,transformMat3:p,rotate:e,setLength:c,truncate:s,midpoint:h}}const ae=new Map;function ge(d){let i=ae.get(d);return i||(i=ve(d),ae.set(d,i)),i}function xe(d){function i(n,a,u){const f=new d(3);return n!==void 0&&(f[0]=n,a!==void 0&&(f[1]=a,u!==void 0&&(f[2]=u))),f}const v=i;function y(n,a,u,f){const x=f??new d(3);return x[0]=n,x[1]=a,x[2]=u,x}function M(n,a){const u=a??new d(3);return u[0]=Math.ceil(n[0]),u[1]=Math.ceil(n[1]),u[2]=Math.ceil(n[2]),u}function D(n,a){const u=a??new d(3);return u[0]=Math.floor(n[0]),u[1]=Math.floor(n[1]),u[2]=Math.floor(n[2]),u}function P(n,a){const u=a??new d(3);return u[0]=Math.round(n[0]),u[1]=Math.round(n[1]),u[2]=Math.round(n[2]),u}function z(n,a=0,u=1,f){const x=f??new d(3);return x[0]=Math.min(u,Math.max(a,n[0])),x[1]=Math.min(u,Math.max(a,n[1])),x[2]=Math.min(u,Math.max(a,n[2])),x}function T(n,a,u){const f=u??new d(3);return f[0]=n[0]+a[0],f[1]=n[1]+a[1],f[2]=n[2]+a[2],f}function q(n,a,u,f){const x=f??new d(3);return x[0]=n[0]+a[0]*u,x[1]=n[1]+a[1]*u,x[2]=n[2]+a[2]*u,x}function k(n,a){const u=n[0],f=n[1],x=n[2],S=a[0],_=a[1],R=a[2],E=Math.sqrt(u*u+f*f+x*x),U=Math.sqrt(S*S+_*_+R*R),I=E*U,C=I&&pt(n,a)/I;return Math.acos(C)}function B(n,a,u){const f=u??new d(3);return f[0]=n[0]-a[0],f[1]=n[1]-a[1],f[2]=n[2]-a[2],f}const N=B;function Y(n,a){return Math.abs(n[0]-a[0])<H&&Math.abs(n[1]-a[1])<H&&Math.abs(n[2]-a[2])<H}function J(n,a){return n[0]===a[0]&&n[1]===a[1]&&n[2]===a[2]}function Z(n,a,u,f){const x=f??new d(3);return x[0]=n[0]+u*(a[0]-n[0]),x[1]=n[1]+u*(a[1]-n[1]),x[2]=n[2]+u*(a[2]-n[2]),x}function ot(n,a,u,f){const x=f??new d(3);return x[0]=n[0]+u[0]*(a[0]-n[0]),x[1]=n[1]+u[1]*(a[1]-n[1]),x[2]=n[2]+u[2]*(a[2]-n[2]),x}function $(n,a,u){const f=u??new d(3);return f[0]=Math.max(n[0],a[0]),f[1]=Math.max(n[1],a[1]),f[2]=Math.max(n[2],a[2]),f}function L(n,a,u){const f=u??new d(3);return f[0]=Math.min(n[0],a[0]),f[1]=Math.min(n[1],a[1]),f[2]=Math.min(n[2],a[2]),f}function j(n,a,u){const f=u??new d(3);return f[0]=n[0]*a,f[1]=n[1]*a,f[2]=n[2]*a,f}const nt=j;function ft(n,a,u){const f=u??new d(3);return f[0]=n[0]/a,f[1]=n[1]/a,f[2]=n[2]/a,f}function ht(n,a){const u=a??new d(3);return u[0]=1/n[0],u[1]=1/n[1],u[2]=1/n[2],u}const vt=ht;function dt(n,a,u){const f=u??new d(3),x=n[2]*a[0]-n[0]*a[2],S=n[0]*a[1]-n[1]*a[0];return f[0]=n[1]*a[2]-n[2]*a[1],f[1]=x,f[2]=S,f}function pt(n,a){return n[0]*a[0]+n[1]*a[1]+n[2]*a[2]}function it(n){const a=n[0],u=n[1],f=n[2];return Math.sqrt(a*a+u*u+f*f)}const yt=it;function gt(n){const a=n[0],u=n[1],f=n[2];return a*a+u*u+f*f}const zt=gt;function mt(n,a){const u=n[0]-a[0],f=n[1]-a[1],x=n[2]-a[2];return Math.sqrt(u*u+f*f+x*x)}const W=mt;function G(n,a){const u=n[0]-a[0],f=n[1]-a[1],x=n[2]-a[2];return u*u+f*f+x*x}const O=G;function wt(n,a){const u=a??new d(3),f=n[0],x=n[1],S=n[2],_=Math.sqrt(f*f+x*x+S*S);return _>1e-5?(u[0]=f/_,u[1]=x/_,u[2]=S/_):(u[0]=0,u[1]=0,u[2]=0),u}function et(n,a){const u=a??new d(3);return u[0]=-n[0],u[1]=-n[1],u[2]=-n[2],u}function X(n,a){const u=a??new d(3);return u[0]=n[0],u[1]=n[1],u[2]=n[2],u}const Bt=X;function rt(n,a,u){const f=u??new d(3);return f[0]=n[0]*a[0],f[1]=n[1]*a[1],f[2]=n[2]*a[2],f}const Pt=rt;function at(n,a,u){const f=u??new d(3);return f[0]=n[0]/a[0],f[1]=n[1]/a[1],f[2]=n[2]/a[2],f}const st=at;function Lt(n=1,a){const u=a??new d(3),f=Math.random()*2*Math.PI,x=Math.random()*2-1,S=Math.sqrt(1-x*x)*n;return u[0]=Math.cos(f)*S,u[1]=Math.sin(f)*S,u[2]=x*n,u}function b(n){const a=n??new d(3);return a[0]=0,a[1]=0,a[2]=0,a}function A(n,a,u){const f=u??new d(3),x=n[0],S=n[1],_=n[2],R=a[3]*x+a[7]*S+a[11]*_+a[15]||1;return f[0]=(a[0]*x+a[4]*S+a[8]*_+a[12])/R,f[1]=(a[1]*x+a[5]*S+a[9]*_+a[13])/R,f[2]=(a[2]*x+a[6]*S+a[10]*_+a[14])/R,f}function p(n,a,u){const f=u??new d(3),x=n[0],S=n[1],_=n[2];return f[0]=x*a[0]+S*a[4]+_*a[8],f[1]=x*a[1]+S*a[5]+_*a[9],f[2]=x*a[2]+S*a[6]+_*a[10],f}function e(n,a,u){const f=u??new d(3),x=n[0],S=n[1],_=n[2];return f[0]=x*a[0]+S*a[4]+_*a[8],f[1]=x*a[1]+S*a[5]+_*a[9],f[2]=x*a[2]+S*a[6]+_*a[10],f}function c(n,a,u){const f=u??new d(3),x=a[0],S=a[1],_=a[2],R=a[3]*2,E=n[0],U=n[1],I=n[2],C=S*I-_*U,F=_*E-x*I,V=x*U-S*E;return f[0]=E+C*R+(S*V-_*F)*2,f[1]=U+F*R+(_*C-x*V)*2,f[2]=I+V*R+(x*F-S*C)*2,f}function s(n,a){const u=a??new d(3);return u[0]=n[12],u[1]=n[13],u[2]=n[14],u}function h(n,a,u){const f=u??new d(3),x=a*4;return f[0]=n[x+0],f[1]=n[x+1],f[2]=n[x+2],f}function g(n,a){const u=a??new d(3),f=n[0],x=n[1],S=n[2],_=n[4],R=n[5],E=n[6],U=n[8],I=n[9],C=n[10];return u[0]=Math.sqrt(f*f+x*x+S*S),u[1]=Math.sqrt(_*_+R*R+E*E),u[2]=Math.sqrt(U*U+I*I+C*C),u}function m(n,a,u,f){const x=f??new d(3),S=[],_=[];return S[0]=n[0]-a[0],S[1]=n[1]-a[1],S[2]=n[2]-a[2],_[0]=S[0],_[1]=S[1]*Math.cos(u)-S[2]*Math.sin(u),_[2]=S[1]*Math.sin(u)+S[2]*Math.cos(u),x[0]=_[0]+a[0],x[1]=_[1]+a[1],x[2]=_[2]+a[2],x}function w(n,a,u,f){const x=f??new d(3),S=[],_=[];return S[0]=n[0]-a[0],S[1]=n[1]-a[1],S[2]=n[2]-a[2],_[0]=S[2]*Math.sin(u)+S[0]*Math.cos(u),_[1]=S[1],_[2]=S[2]*Math.cos(u)-S[0]*Math.sin(u),x[0]=_[0]+a[0],x[1]=_[1]+a[1],x[2]=_[2]+a[2],x}function t(n,a,u,f){const x=f??new d(3),S=[],_=[];return S[0]=n[0]-a[0],S[1]=n[1]-a[1],S[2]=n[2]-a[2],_[0]=S[0]*Math.cos(u)-S[1]*Math.sin(u),_[1]=S[0]*Math.sin(u)+S[1]*Math.cos(u),_[2]=S[2],x[0]=_[0]+a[0],x[1]=_[1]+a[1],x[2]=_[2]+a[2],x}function l(n,a,u){const f=u??new d(3);return wt(n,f),j(f,a,f)}function r(n,a,u){const f=u??new d(3);return it(n)>a?l(n,a,f):X(n,f)}function o(n,a,u){const f=u??new d(3);return Z(n,a,.5,f)}return{create:i,fromValues:v,set:y,ceil:M,floor:D,round:P,clamp:z,add:T,addScaled:q,angle:k,subtract:B,sub:N,equalsApproximately:Y,equals:J,lerp:Z,lerpV:ot,max:$,min:L,mulScalar:j,scale:nt,divScalar:ft,inverse:ht,invert:vt,cross:dt,dot:pt,length:it,len:yt,lengthSq:gt,lenSq:zt,distance:mt,dist:W,distanceSq:G,distSq:O,normalize:wt,negate:et,copy:X,clone:Bt,multiply:rt,mul:Pt,divide:at,div:st,random:Lt,zero:b,transformMat4:A,transformMat4Upper3x3:p,transformMat3:e,transformQuat:c,getTranslation:s,getAxis:h,getScaling:g,rotateX:m,rotateY:w,rotateZ:t,setLength:l,truncate:r,midpoint:o}}const ce=new Map;function Kt(d){let i=ce.get(d);return i||(i=xe(d),ce.set(d,i)),i}function ye(d){const i=ge(d),v=Kt(d);function y(e,c,s,h,g,m,w,t,l){const r=new d(12);return r[3]=0,r[7]=0,r[11]=0,e!==void 0&&(r[0]=e,c!==void 0&&(r[1]=c,s!==void 0&&(r[2]=s,h!==void 0&&(r[4]=h,g!==void 0&&(r[5]=g,m!==void 0&&(r[6]=m,w!==void 0&&(r[8]=w,t!==void 0&&(r[9]=t,l!==void 0&&(r[10]=l))))))))),r}function M(e,c,s,h,g,m,w,t,l,r){const o=r??new d(12);return o[0]=e,o[1]=c,o[2]=s,o[3]=0,o[4]=h,o[5]=g,o[6]=m,o[7]=0,o[8]=w,o[9]=t,o[10]=l,o[11]=0,o}function D(e,c){const s=c??new d(12);return s[0]=e[0],s[1]=e[1],s[2]=e[2],s[3]=0,s[4]=e[4],s[5]=e[5],s[6]=e[6],s[7]=0,s[8]=e[8],s[9]=e[9],s[10]=e[10],s[11]=0,s}function P(e,c){const s=c??new d(12),h=e[0],g=e[1],m=e[2],w=e[3],t=h+h,l=g+g,r=m+m,o=h*t,n=g*t,a=g*l,u=m*t,f=m*l,x=m*r,S=w*t,_=w*l,R=w*r;return s[0]=1-a-x,s[1]=n+R,s[2]=u-_,s[3]=0,s[4]=n-R,s[5]=1-o-x,s[6]=f+S,s[7]=0,s[8]=u+_,s[9]=f-S,s[10]=1-o-a,s[11]=0,s}function z(e,c){const s=c??new d(12);return s[0]=-e[0],s[1]=-e[1],s[2]=-e[2],s[4]=-e[4],s[5]=-e[5],s[6]=-e[6],s[8]=-e[8],s[9]=-e[9],s[10]=-e[10],s}function T(e,c,s){const h=s??new d(12);return h[0]=e[0]*c,h[1]=e[1]*c,h[2]=e[2]*c,h[4]=e[4]*c,h[5]=e[5]*c,h[6]=e[6]*c,h[8]=e[8]*c,h[9]=e[9]*c,h[10]=e[10]*c,h}const q=T;function k(e,c,s){const h=s??new d(12);return h[0]=e[0]+c[0],h[1]=e[1]+c[1],h[2]=e[2]+c[2],h[4]=e[4]+c[4],h[5]=e[5]+c[5],h[6]=e[6]+c[6],h[8]=e[8]+c[8],h[9]=e[9]+c[9],h[10]=e[10]+c[10],h}function B(e,c){const s=c??new d(12);return s[0]=e[0],s[1]=e[1],s[2]=e[2],s[4]=e[4],s[5]=e[5],s[6]=e[6],s[8]=e[8],s[9]=e[9],s[10]=e[10],s}const N=B;function Y(e,c){return Math.abs(e[0]-c[0])<H&&Math.abs(e[1]-c[1])<H&&Math.abs(e[2]-c[2])<H&&Math.abs(e[4]-c[4])<H&&Math.abs(e[5]-c[5])<H&&Math.abs(e[6]-c[6])<H&&Math.abs(e[8]-c[8])<H&&Math.abs(e[9]-c[9])<H&&Math.abs(e[10]-c[10])<H}function J(e,c){return e[0]===c[0]&&e[1]===c[1]&&e[2]===c[2]&&e[4]===c[4]&&e[5]===c[5]&&e[6]===c[6]&&e[8]===c[8]&&e[9]===c[9]&&e[10]===c[10]}function Z(e){const c=e??new d(12);return c[0]=1,c[1]=0,c[2]=0,c[4]=0,c[5]=1,c[6]=0,c[8]=0,c[9]=0,c[10]=1,c}function ot(e,c){const s=c??new d(12);if(s===e){let a;return a=e[1],e[1]=e[4],e[4]=a,a=e[2],e[2]=e[8],e[8]=a,a=e[6],e[6]=e[9],e[9]=a,s}const h=e[0],g=e[1],m=e[2],w=e[4],t=e[5],l=e[6],r=e[8],o=e[9],n=e[10];return s[0]=h,s[1]=w,s[2]=r,s[4]=g,s[5]=t,s[6]=o,s[8]=m,s[9]=l,s[10]=n,s}function $(e,c){const s=c??new d(12),h=e[0],g=e[1],m=e[2],w=e[4],t=e[5],l=e[6],r=e[8],o=e[9],n=e[10],a=n*t-l*o,u=-n*w+l*r,f=o*w-t*r,x=1/(h*a+g*u+m*f);return s[0]=a*x,s[1]=(-n*g+m*o)*x,s[2]=(l*g-m*t)*x,s[4]=u*x,s[5]=(n*h-m*r)*x,s[6]=(-l*h+m*w)*x,s[8]=f*x,s[9]=(-o*h+g*r)*x,s[10]=(t*h-g*w)*x,s}function L(e){const c=e[0],s=e[1],h=e[2],g=e[4],m=e[5],w=e[6],t=e[8],l=e[9],r=e[10];return c*(m*r-l*w)-g*(s*r-l*h)+t*(s*w-m*h)}const j=$;function nt(e,c,s){const h=s??new d(12),g=e[0],m=e[1],w=e[2],t=e[4],l=e[5],r=e[6],o=e[8],n=e[9],a=e[10],u=c[0],f=c[1],x=c[2],S=c[4],_=c[5],R=c[6],E=c[8],U=c[9],I=c[10];return h[0]=g*u+t*f+o*x,h[1]=m*u+l*f+n*x,h[2]=w*u+r*f+a*x,h[4]=g*S+t*_+o*R,h[5]=m*S+l*_+n*R,h[6]=w*S+r*_+a*R,h[8]=g*E+t*U+o*I,h[9]=m*E+l*U+n*I,h[10]=w*E+r*U+a*I,h}const ft=nt;function ht(e,c,s){const h=s??Z();return e!==h&&(h[0]=e[0],h[1]=e[1],h[2]=e[2],h[4]=e[4],h[5]=e[5],h[6]=e[6]),h[8]=c[0],h[9]=c[1],h[10]=1,h}function vt(e,c){const s=c??i.create();return s[0]=e[8],s[1]=e[9],s}function dt(e,c,s){const h=s??i.create(),g=c*4;return h[0]=e[g+0],h[1]=e[g+1],h}function pt(e,c,s,h){const g=h===e?e:B(e,h),m=s*4;return g[m+0]=c[0],g[m+1]=c[1],g}function it(e,c){const s=c??i.create(),h=e[0],g=e[1],m=e[4],w=e[5];return s[0]=Math.sqrt(h*h+g*g),s[1]=Math.sqrt(m*m+w*w),s}function yt(e,c){const s=c??v.create(),h=e[0],g=e[1],m=e[2],w=e[4],t=e[5],l=e[6],r=e[8],o=e[9],n=e[10];return s[0]=Math.sqrt(h*h+g*g+m*m),s[1]=Math.sqrt(w*w+t*t+l*l),s[2]=Math.sqrt(r*r+o*o+n*n),s}function gt(e,c){const s=c??new d(12);return s[0]=1,s[1]=0,s[2]=0,s[4]=0,s[5]=1,s[6]=0,s[8]=e[0],s[9]=e[1],s[10]=1,s}function zt(e,c,s){const h=s??new d(12),g=c[0],m=c[1],w=e[0],t=e[1],l=e[2],r=e[4],o=e[5],n=e[6],a=e[8],u=e[9],f=e[10];return e!==h&&(h[0]=w,h[1]=t,h[2]=l,h[4]=r,h[5]=o,h[6]=n),h[8]=w*g+r*m+a,h[9]=t*g+o*m+u,h[10]=l*g+n*m+f,h}function mt(e,c){const s=c??new d(12),h=Math.cos(e),g=Math.sin(e);return s[0]=h,s[1]=g,s[2]=0,s[4]=-g,s[5]=h,s[6]=0,s[8]=0,s[9]=0,s[10]=1,s}function W(e,c,s){const h=s??new d(12),g=e[0],m=e[1],w=e[2],t=e[4],l=e[5],r=e[6],o=Math.cos(c),n=Math.sin(c);return h[0]=o*g+n*t,h[1]=o*m+n*l,h[2]=o*w+n*r,h[4]=o*t-n*g,h[5]=o*l-n*m,h[6]=o*r-n*w,e!==h&&(h[8]=e[8],h[9]=e[9],h[10]=e[10]),h}function G(e,c){const s=c??new d(12),h=Math.cos(e),g=Math.sin(e);return s[0]=1,s[1]=0,s[2]=0,s[4]=0,s[5]=h,s[6]=g,s[8]=0,s[9]=-g,s[10]=h,s}function O(e,c,s){const h=s??new d(12),g=e[4],m=e[5],w=e[6],t=e[8],l=e[9],r=e[10],o=Math.cos(c),n=Math.sin(c);return h[4]=o*g+n*t,h[5]=o*m+n*l,h[6]=o*w+n*r,h[8]=o*t-n*g,h[9]=o*l-n*m,h[10]=o*r-n*w,e!==h&&(h[0]=e[0],h[1]=e[1],h[2]=e[2]),h}function wt(e,c){const s=c??new d(12),h=Math.cos(e),g=Math.sin(e);return s[0]=h,s[1]=0,s[2]=-g,s[4]=0,s[5]=1,s[6]=0,s[8]=g,s[9]=0,s[10]=h,s}function et(e,c,s){const h=s??new d(12),g=e[0],m=e[1],w=e[2],t=e[8],l=e[9],r=e[10],o=Math.cos(c),n=Math.sin(c);return h[0]=o*g-n*t,h[1]=o*m-n*l,h[2]=o*w-n*r,h[8]=o*t+n*g,h[9]=o*l+n*m,h[10]=o*r+n*w,e!==h&&(h[4]=e[4],h[5]=e[5],h[6]=e[6]),h}const X=mt,Bt=W;function rt(e,c){const s=c??new d(12);return s[0]=e[0],s[1]=0,s[2]=0,s[4]=0,s[5]=e[1],s[6]=0,s[8]=0,s[9]=0,s[10]=1,s}function Pt(e,c,s){const h=s??new d(12),g=c[0],m=c[1];return h[0]=g*e[0],h[1]=g*e[1],h[2]=g*e[2],h[4]=m*e[4],h[5]=m*e[5],h[6]=m*e[6],e!==h&&(h[8]=e[8],h[9]=e[9],h[10]=e[10]),h}function at(e,c){const s=c??new d(12);return s[0]=e[0],s[1]=0,s[2]=0,s[4]=0,s[5]=e[1],s[6]=0,s[8]=0,s[9]=0,s[10]=e[2],s}function st(e,c,s){const h=s??new d(12),g=c[0],m=c[1],w=c[2];return h[0]=g*e[0],h[1]=g*e[1],h[2]=g*e[2],h[4]=m*e[4],h[5]=m*e[5],h[6]=m*e[6],h[8]=w*e[8],h[9]=w*e[9],h[10]=w*e[10],h}function Lt(e,c){const s=c??new d(12);return s[0]=e,s[1]=0,s[2]=0,s[4]=0,s[5]=e,s[6]=0,s[8]=0,s[9]=0,s[10]=1,s}function b(e,c,s){const h=s??new d(12);return h[0]=c*e[0],h[1]=c*e[1],h[2]=c*e[2],h[4]=c*e[4],h[5]=c*e[5],h[6]=c*e[6],e!==h&&(h[8]=e[8],h[9]=e[9],h[10]=e[10]),h}function A(e,c){const s=c??new d(12);return s[0]=e,s[1]=0,s[2]=0,s[4]=0,s[5]=e,s[6]=0,s[8]=0,s[9]=0,s[10]=e,s}function p(e,c,s){const h=s??new d(12);return h[0]=c*e[0],h[1]=c*e[1],h[2]=c*e[2],h[4]=c*e[4],h[5]=c*e[5],h[6]=c*e[6],h[8]=c*e[8],h[9]=c*e[9],h[10]=c*e[10],h}return{add:k,clone:N,copy:B,create:y,determinant:L,equals:J,equalsApproximately:Y,fromMat4:D,fromQuat:P,get3DScaling:yt,getAxis:dt,getScaling:it,getTranslation:vt,identity:Z,inverse:$,invert:j,mul:ft,mulScalar:q,multiply:nt,multiplyScalar:T,negate:z,rotate:W,rotateX:O,rotateY:et,rotateZ:Bt,rotation:mt,rotationX:G,rotationY:wt,rotationZ:X,scale:Pt,scale3D:st,scaling:rt,scaling3D:at,set:M,setAxis:pt,setTranslation:ht,translate:zt,translation:gt,transpose:ot,uniformScale:b,uniformScale3D:p,uniformScaling:Lt,uniformScaling3D:A}}const le=new Map;function be(d){let i=le.get(d);return i||(i=ye(d),le.set(d,i)),i}function Me(d){const i=Kt(d);function v(t,l,r,o,n,a,u,f,x,S,_,R,E,U,I,C){const F=new d(16);return t!==void 0&&(F[0]=t,l!==void 0&&(F[1]=l,r!==void 0&&(F[2]=r,o!==void 0&&(F[3]=o,n!==void 0&&(F[4]=n,a!==void 0&&(F[5]=a,u!==void 0&&(F[6]=u,f!==void 0&&(F[7]=f,x!==void 0&&(F[8]=x,S!==void 0&&(F[9]=S,_!==void 0&&(F[10]=_,R!==void 0&&(F[11]=R,E!==void 0&&(F[12]=E,U!==void 0&&(F[13]=U,I!==void 0&&(F[14]=I,C!==void 0&&(F[15]=C)))))))))))))))),F}function y(t,l,r,o,n,a,u,f,x,S,_,R,E,U,I,C,F){const V=F??new d(16);return V[0]=t,V[1]=l,V[2]=r,V[3]=o,V[4]=n,V[5]=a,V[6]=u,V[7]=f,V[8]=x,V[9]=S,V[10]=_,V[11]=R,V[12]=E,V[13]=U,V[14]=I,V[15]=C,V}function M(t,l){const r=l??new d(16);return r[0]=t[0],r[1]=t[1],r[2]=t[2],r[3]=0,r[4]=t[4],r[5]=t[5],r[6]=t[6],r[7]=0,r[8]=t[8],r[9]=t[9],r[10]=t[10],r[11]=0,r[12]=0,r[13]=0,r[14]=0,r[15]=1,r}function D(t,l){const r=l??new d(16),o=t[0],n=t[1],a=t[2],u=t[3],f=o+o,x=n+n,S=a+a,_=o*f,R=n*f,E=n*x,U=a*f,I=a*x,C=a*S,F=u*f,V=u*x,Q=u*S;return r[0]=1-E-C,r[1]=R+Q,r[2]=U-V,r[3]=0,r[4]=R-Q,r[5]=1-_-C,r[6]=I+F,r[7]=0,r[8]=U+V,r[9]=I-F,r[10]=1-_-E,r[11]=0,r[12]=0,r[13]=0,r[14]=0,r[15]=1,r}function P(t,l){const r=l??new d(16);return r[0]=-t[0],r[1]=-t[1],r[2]=-t[2],r[3]=-t[3],r[4]=-t[4],r[5]=-t[5],r[6]=-t[6],r[7]=-t[7],r[8]=-t[8],r[9]=-t[9],r[10]=-t[10],r[11]=-t[11],r[12]=-t[12],r[13]=-t[13],r[14]=-t[14],r[15]=-t[15],r}function z(t,l,r){const o=r??new d(16);return o[0]=t[0]+l[0],o[1]=t[1]+l[1],o[2]=t[2]+l[2],o[3]=t[3]+l[3],o[4]=t[4]+l[4],o[5]=t[5]+l[5],o[6]=t[6]+l[6],o[7]=t[7]+l[7],o[8]=t[8]+l[8],o[9]=t[9]+l[9],o[10]=t[10]+l[10],o[11]=t[11]+l[11],o[12]=t[12]+l[12],o[13]=t[13]+l[13],o[14]=t[14]+l[14],o[15]=t[15]+l[15],o}function T(t,l,r){const o=r??new d(16);return o[0]=t[0]*l,o[1]=t[1]*l,o[2]=t[2]*l,o[3]=t[3]*l,o[4]=t[4]*l,o[5]=t[5]*l,o[6]=t[6]*l,o[7]=t[7]*l,o[8]=t[8]*l,o[9]=t[9]*l,o[10]=t[10]*l,o[11]=t[11]*l,o[12]=t[12]*l,o[13]=t[13]*l,o[14]=t[14]*l,o[15]=t[15]*l,o}const q=T;function k(t,l){const r=l??new d(16);return r[0]=t[0],r[1]=t[1],r[2]=t[2],r[3]=t[3],r[4]=t[4],r[5]=t[5],r[6]=t[6],r[7]=t[7],r[8]=t[8],r[9]=t[9],r[10]=t[10],r[11]=t[11],r[12]=t[12],r[13]=t[13],r[14]=t[14],r[15]=t[15],r}const B=k;function N(t,l){return Math.abs(t[0]-l[0])<H&&Math.abs(t[1]-l[1])<H&&Math.abs(t[2]-l[2])<H&&Math.abs(t[3]-l[3])<H&&Math.abs(t[4]-l[4])<H&&Math.abs(t[5]-l[5])<H&&Math.abs(t[6]-l[6])<H&&Math.abs(t[7]-l[7])<H&&Math.abs(t[8]-l[8])<H&&Math.abs(t[9]-l[9])<H&&Math.abs(t[10]-l[10])<H&&Math.abs(t[11]-l[11])<H&&Math.abs(t[12]-l[12])<H&&Math.abs(t[13]-l[13])<H&&Math.abs(t[14]-l[14])<H&&Math.abs(t[15]-l[15])<H}function Y(t,l){return t[0]===l[0]&&t[1]===l[1]&&t[2]===l[2]&&t[3]===l[3]&&t[4]===l[4]&&t[5]===l[5]&&t[6]===l[6]&&t[7]===l[7]&&t[8]===l[8]&&t[9]===l[9]&&t[10]===l[10]&&t[11]===l[11]&&t[12]===l[12]&&t[13]===l[13]&&t[14]===l[14]&&t[15]===l[15]}function J(t){const l=t??new d(16);return l[0]=1,l[1]=0,l[2]=0,l[3]=0,l[4]=0,l[5]=1,l[6]=0,l[7]=0,l[8]=0,l[9]=0,l[10]=1,l[11]=0,l[12]=0,l[13]=0,l[14]=0,l[15]=1,l}function Z(t,l){const r=l??new d(16);if(r===t){let K;return K=t[1],t[1]=t[4],t[4]=K,K=t[2],t[2]=t[8],t[8]=K,K=t[3],t[3]=t[12],t[12]=K,K=t[6],t[6]=t[9],t[9]=K,K=t[7],t[7]=t[13],t[13]=K,K=t[11],t[11]=t[14],t[14]=K,r}const o=t[0],n=t[1],a=t[2],u=t[3],f=t[4],x=t[5],S=t[6],_=t[7],R=t[8],E=t[9],U=t[10],I=t[11],C=t[12],F=t[13],V=t[14],Q=t[15];return r[0]=o,r[1]=f,r[2]=R,r[3]=C,r[4]=n,r[5]=x,r[6]=E,r[7]=F,r[8]=a,r[9]=S,r[10]=U,r[11]=V,r[12]=u,r[13]=_,r[14]=I,r[15]=Q,r}function ot(t,l){const r=l??new d(16),o=t[0],n=t[1],a=t[2],u=t[3],f=t[4],x=t[5],S=t[6],_=t[7],R=t[8],E=t[9],U=t[10],I=t[11],C=t[12],F=t[13],V=t[14],Q=t[15],K=U*Q,ct=V*I,lt=S*Q,ut=V*_,xt=S*I,bt=U*_,Mt=a*Q,St=V*u,_t=a*I,At=U*u,Ut=a*_,Et=S*u,Rt=R*F,Tt=C*E,$t=f*F,It=C*x,Ot=f*E,Gt=R*x,qt=o*F,Nt=C*n,Ht=o*E,jt=R*n,Wt=o*x,Xt=f*n,ie=K*x+ut*E+xt*F-(ct*x+lt*E+bt*F),re=ct*n+Mt*E+At*F-(K*n+St*E+_t*F),se=lt*n+St*x+Ut*F-(ut*n+Mt*x+Et*F),oe=bt*n+_t*x+Et*E-(xt*n+At*x+Ut*E),Dt=1/(o*ie+f*re+R*se+C*oe);return r[0]=Dt*ie,r[1]=Dt*re,r[2]=Dt*se,r[3]=Dt*oe,r[4]=Dt*(ct*f+lt*R+bt*C-(K*f+ut*R+xt*C)),r[5]=Dt*(K*o+St*R+_t*C-(ct*o+Mt*R+At*C)),r[6]=Dt*(ut*o+Mt*f+Et*C-(lt*o+St*f+Ut*C)),r[7]=Dt*(xt*o+At*f+Ut*R-(bt*o+_t*f+Et*R)),r[8]=Dt*(Rt*_+It*I+Ot*Q-(Tt*_+$t*I+Gt*Q)),r[9]=Dt*(Tt*u+qt*I+jt*Q-(Rt*u+Nt*I+Ht*Q)),r[10]=Dt*($t*u+Nt*_+Wt*Q-(It*u+qt*_+Xt*Q)),r[11]=Dt*(Gt*u+Ht*_+Xt*I-(Ot*u+jt*_+Wt*I)),r[12]=Dt*($t*U+Gt*V+Tt*S-(Ot*V+Rt*S+It*U)),r[13]=Dt*(Ht*V+Rt*a+Nt*U-(qt*U+jt*V+Tt*a)),r[14]=Dt*(qt*S+Xt*V+It*a-(Wt*V+$t*a+Nt*S)),r[15]=Dt*(Wt*U+Ot*a+jt*S-(Ht*S+Xt*U+Gt*a)),r}function $(t){const l=t[0],r=t[1],o=t[2],n=t[3],a=t[4],u=t[5],f=t[6],x=t[7],S=t[8],_=t[9],R=t[10],E=t[11],U=t[12],I=t[13],C=t[14],F=t[15],V=R*F,Q=C*E,K=f*F,ct=C*x,lt=f*E,ut=R*x,xt=o*F,bt=C*n,Mt=o*E,St=R*n,_t=o*x,At=f*n,Ut=V*u+ct*_+lt*I-(Q*u+K*_+ut*I),Et=Q*r+xt*_+St*I-(V*r+bt*_+Mt*I),Rt=K*r+bt*u+_t*I-(ct*r+xt*u+At*I),Tt=ut*r+Mt*u+At*_-(lt*r+St*u+_t*_);return l*Ut+a*Et+S*Rt+U*Tt}const L=ot;function j(t,l,r){const o=r??new d(16),n=t[0],a=t[1],u=t[2],f=t[3],x=t[4],S=t[5],_=t[6],R=t[7],E=t[8],U=t[9],I=t[10],C=t[11],F=t[12],V=t[13],Q=t[14],K=t[15],ct=l[0],lt=l[1],ut=l[2],xt=l[3],bt=l[4],Mt=l[5],St=l[6],_t=l[7],At=l[8],Ut=l[9],Et=l[10],Rt=l[11],Tt=l[12],$t=l[13],It=l[14],Ot=l[15];return o[0]=n*ct+x*lt+E*ut+F*xt,o[1]=a*ct+S*lt+U*ut+V*xt,o[2]=u*ct+_*lt+I*ut+Q*xt,o[3]=f*ct+R*lt+C*ut+K*xt,o[4]=n*bt+x*Mt+E*St+F*_t,o[5]=a*bt+S*Mt+U*St+V*_t,o[6]=u*bt+_*Mt+I*St+Q*_t,o[7]=f*bt+R*Mt+C*St+K*_t,o[8]=n*At+x*Ut+E*Et+F*Rt,o[9]=a*At+S*Ut+U*Et+V*Rt,o[10]=u*At+_*Ut+I*Et+Q*Rt,o[11]=f*At+R*Ut+C*Et+K*Rt,o[12]=n*Tt+x*$t+E*It+F*Ot,o[13]=a*Tt+S*$t+U*It+V*Ot,o[14]=u*Tt+_*$t+I*It+Q*Ot,o[15]=f*Tt+R*$t+C*It+K*Ot,o}const nt=j;function ft(t,l,r){const o=r??J();return t!==o&&(o[0]=t[0],o[1]=t[1],o[2]=t[2],o[3]=t[3],o[4]=t[4],o[5]=t[5],o[6]=t[6],o[7]=t[7],o[8]=t[8],o[9]=t[9],o[10]=t[10],o[11]=t[11]),o[12]=l[0],o[13]=l[1],o[14]=l[2],o[15]=1,o}function ht(t,l){const r=l??i.create();return r[0]=t[12],r[1]=t[13],r[2]=t[14],r}function vt(t,l,r){const o=r??i.create(),n=l*4;return o[0]=t[n+0],o[1]=t[n+1],o[2]=t[n+2],o}function dt(t,l,r,o){const n=o===t?o:k(t,o),a=r*4;return n[a+0]=l[0],n[a+1]=l[1],n[a+2]=l[2],n}function pt(t,l){const r=l??i.create(),o=t[0],n=t[1],a=t[2],u=t[4],f=t[5],x=t[6],S=t[8],_=t[9],R=t[10];return r[0]=Math.sqrt(o*o+n*n+a*a),r[1]=Math.sqrt(u*u+f*f+x*x),r[2]=Math.sqrt(S*S+_*_+R*R),r}function it(t,l,r,o,n){const a=n??new d(16),u=Math.tan(Math.PI*.5-.5*t);if(a[0]=u/l,a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=u,a[6]=0,a[7]=0,a[8]=0,a[9]=0,a[11]=-1,a[12]=0,a[13]=0,a[15]=0,Number.isFinite(o)){const f=1/(r-o);a[10]=o*f,a[14]=o*r*f}else a[10]=-1,a[14]=-r;return a}function yt(t,l,r,o=1/0,n){const a=n??new d(16),u=1/Math.tan(t*.5);if(a[0]=u/l,a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=u,a[6]=0,a[7]=0,a[8]=0,a[9]=0,a[11]=-1,a[12]=0,a[13]=0,a[15]=0,o===1/0)a[10]=0,a[14]=r;else{const f=1/(o-r);a[10]=r*f,a[14]=o*r*f}return a}function gt(t,l,r,o,n,a,u){const f=u??new d(16);return f[0]=2/(l-t),f[1]=0,f[2]=0,f[3]=0,f[4]=0,f[5]=2/(o-r),f[6]=0,f[7]=0,f[8]=0,f[9]=0,f[10]=1/(n-a),f[11]=0,f[12]=(l+t)/(t-l),f[13]=(o+r)/(r-o),f[14]=n/(n-a),f[15]=1,f}function zt(t,l,r,o,n,a,u){const f=u??new d(16),x=l-t,S=o-r,_=n-a;return f[0]=2*n/x,f[1]=0,f[2]=0,f[3]=0,f[4]=0,f[5]=2*n/S,f[6]=0,f[7]=0,f[8]=(t+l)/x,f[9]=(o+r)/S,f[10]=a/_,f[11]=-1,f[12]=0,f[13]=0,f[14]=n*a/_,f[15]=0,f}function mt(t,l,r,o,n,a=1/0,u){const f=u??new d(16),x=l-t,S=o-r;if(f[0]=2*n/x,f[1]=0,f[2]=0,f[3]=0,f[4]=0,f[5]=2*n/S,f[6]=0,f[7]=0,f[8]=(t+l)/x,f[9]=(o+r)/S,f[11]=-1,f[12]=0,f[13]=0,f[15]=0,a===1/0)f[10]=0,f[14]=n;else{const _=1/(a-n);f[10]=n*_,f[14]=a*n*_}return f}const W=i.create(),G=i.create(),O=i.create();function wt(t,l,r,o){const n=o??new d(16);return i.normalize(i.subtract(l,t,O),O),i.normalize(i.cross(r,O,W),W),i.normalize(i.cross(O,W,G),G),n[0]=W[0],n[1]=W[1],n[2]=W[2],n[3]=0,n[4]=G[0],n[5]=G[1],n[6]=G[2],n[7]=0,n[8]=O[0],n[9]=O[1],n[10]=O[2],n[11]=0,n[12]=t[0],n[13]=t[1],n[14]=t[2],n[15]=1,n}function et(t,l,r,o){const n=o??new d(16);return i.normalize(i.subtract(t,l,O),O),i.normalize(i.cross(r,O,W),W),i.normalize(i.cross(O,W,G),G),n[0]=W[0],n[1]=W[1],n[2]=W[2],n[3]=0,n[4]=G[0],n[5]=G[1],n[6]=G[2],n[7]=0,n[8]=O[0],n[9]=O[1],n[10]=O[2],n[11]=0,n[12]=t[0],n[13]=t[1],n[14]=t[2],n[15]=1,n}function X(t,l,r,o){const n=o??new d(16);return i.normalize(i.subtract(t,l,O),O),i.normalize(i.cross(r,O,W),W),i.normalize(i.cross(O,W,G),G),n[0]=W[0],n[1]=G[0],n[2]=O[0],n[3]=0,n[4]=W[1],n[5]=G[1],n[6]=O[1],n[7]=0,n[8]=W[2],n[9]=G[2],n[10]=O[2],n[11]=0,n[12]=-(W[0]*t[0]+W[1]*t[1]+W[2]*t[2]),n[13]=-(G[0]*t[0]+G[1]*t[1]+G[2]*t[2]),n[14]=-(O[0]*t[0]+O[1]*t[1]+O[2]*t[2]),n[15]=1,n}function Bt(t,l){const r=l??new d(16);return r[0]=1,r[1]=0,r[2]=0,r[3]=0,r[4]=0,r[5]=1,r[6]=0,r[7]=0,r[8]=0,r[9]=0,r[10]=1,r[11]=0,r[12]=t[0],r[13]=t[1],r[14]=t[2],r[15]=1,r}function rt(t,l,r){const o=r??new d(16),n=l[0],a=l[1],u=l[2],f=t[0],x=t[1],S=t[2],_=t[3],R=t[4],E=t[5],U=t[6],I=t[7],C=t[8],F=t[9],V=t[10],Q=t[11],K=t[12],ct=t[13],lt=t[14],ut=t[15];return t!==o&&(o[0]=f,o[1]=x,o[2]=S,o[3]=_,o[4]=R,o[5]=E,o[6]=U,o[7]=I,o[8]=C,o[9]=F,o[10]=V,o[11]=Q),o[12]=f*n+R*a+C*u+K,o[13]=x*n+E*a+F*u+ct,o[14]=S*n+U*a+V*u+lt,o[15]=_*n+I*a+Q*u+ut,o}function Pt(t,l){const r=l??new d(16),o=Math.cos(t),n=Math.sin(t);return r[0]=1,r[1]=0,r[2]=0,r[3]=0,r[4]=0,r[5]=o,r[6]=n,r[7]=0,r[8]=0,r[9]=-n,r[10]=o,r[11]=0,r[12]=0,r[13]=0,r[14]=0,r[15]=1,r}function at(t,l,r){const o=r??new d(16),n=t[4],a=t[5],u=t[6],f=t[7],x=t[8],S=t[9],_=t[10],R=t[11],E=Math.cos(l),U=Math.sin(l);return o[4]=E*n+U*x,o[5]=E*a+U*S,o[6]=E*u+U*_,o[7]=E*f+U*R,o[8]=E*x-U*n,o[9]=E*S-U*a,o[10]=E*_-U*u,o[11]=E*R-U*f,t!==o&&(o[0]=t[0],o[1]=t[1],o[2]=t[2],o[3]=t[3],o[12]=t[12],o[13]=t[13],o[14]=t[14],o[15]=t[15]),o}function st(t,l){const r=l??new d(16),o=Math.cos(t),n=Math.sin(t);return r[0]=o,r[1]=0,r[2]=-n,r[3]=0,r[4]=0,r[5]=1,r[6]=0,r[7]=0,r[8]=n,r[9]=0,r[10]=o,r[11]=0,r[12]=0,r[13]=0,r[14]=0,r[15]=1,r}function Lt(t,l,r){const o=r??new d(16),n=t[0],a=t[1],u=t[2],f=t[3],x=t[8],S=t[9],_=t[10],R=t[11],E=Math.cos(l),U=Math.sin(l);return o[0]=E*n-U*x,o[1]=E*a-U*S,o[2]=E*u-U*_,o[3]=E*f-U*R,o[8]=E*x+U*n,o[9]=E*S+U*a,o[10]=E*_+U*u,o[11]=E*R+U*f,t!==o&&(o[4]=t[4],o[5]=t[5],o[6]=t[6],o[7]=t[7],o[12]=t[12],o[13]=t[13],o[14]=t[14],o[15]=t[15]),o}function b(t,l){const r=l??new d(16),o=Math.cos(t),n=Math.sin(t);return r[0]=o,r[1]=n,r[2]=0,r[3]=0,r[4]=-n,r[5]=o,r[6]=0,r[7]=0,r[8]=0,r[9]=0,r[10]=1,r[11]=0,r[12]=0,r[13]=0,r[14]=0,r[15]=1,r}function A(t,l,r){const o=r??new d(16),n=t[0],a=t[1],u=t[2],f=t[3],x=t[4],S=t[5],_=t[6],R=t[7],E=Math.cos(l),U=Math.sin(l);return o[0]=E*n+U*x,o[1]=E*a+U*S,o[2]=E*u+U*_,o[3]=E*f+U*R,o[4]=E*x-U*n,o[5]=E*S-U*a,o[6]=E*_-U*u,o[7]=E*R-U*f,t!==o&&(o[8]=t[8],o[9]=t[9],o[10]=t[10],o[11]=t[11],o[12]=t[12],o[13]=t[13],o[14]=t[14],o[15]=t[15]),o}function p(t,l,r){const o=r??new d(16);let n=t[0],a=t[1],u=t[2];const f=Math.sqrt(n*n+a*a+u*u);n/=f,a/=f,u/=f;const x=n*n,S=a*a,_=u*u,R=Math.cos(l),E=Math.sin(l),U=1-R;return o[0]=x+(1-x)*R,o[1]=n*a*U+u*E,o[2]=n*u*U-a*E,o[3]=0,o[4]=n*a*U-u*E,o[5]=S+(1-S)*R,o[6]=a*u*U+n*E,o[7]=0,o[8]=n*u*U+a*E,o[9]=a*u*U-n*E,o[10]=_+(1-_)*R,o[11]=0,o[12]=0,o[13]=0,o[14]=0,o[15]=1,o}const e=p;function c(t,l,r,o){const n=o??new d(16);let a=l[0],u=l[1],f=l[2];const x=Math.sqrt(a*a+u*u+f*f);a/=x,u/=x,f/=x;const S=a*a,_=u*u,R=f*f,E=Math.cos(r),U=Math.sin(r),I=1-E,C=S+(1-S)*E,F=a*u*I+f*U,V=a*f*I-u*U,Q=a*u*I-f*U,K=_+(1-_)*E,ct=u*f*I+a*U,lt=a*f*I+u*U,ut=u*f*I-a*U,xt=R+(1-R)*E,bt=t[0],Mt=t[1],St=t[2],_t=t[3],At=t[4],Ut=t[5],Et=t[6],Rt=t[7],Tt=t[8],$t=t[9],It=t[10],Ot=t[11];return n[0]=C*bt+F*At+V*Tt,n[1]=C*Mt+F*Ut+V*$t,n[2]=C*St+F*Et+V*It,n[3]=C*_t+F*Rt+V*Ot,n[4]=Q*bt+K*At+ct*Tt,n[5]=Q*Mt+K*Ut+ct*$t,n[6]=Q*St+K*Et+ct*It,n[7]=Q*_t+K*Rt+ct*Ot,n[8]=lt*bt+ut*At+xt*Tt,n[9]=lt*Mt+ut*Ut+xt*$t,n[10]=lt*St+ut*Et+xt*It,n[11]=lt*_t+ut*Rt+xt*Ot,t!==n&&(n[12]=t[12],n[13]=t[13],n[14]=t[14],n[15]=t[15]),n}const s=c;function h(t,l){const r=l??new d(16);return r[0]=t[0],r[1]=0,r[2]=0,r[3]=0,r[4]=0,r[5]=t[1],r[6]=0,r[7]=0,r[8]=0,r[9]=0,r[10]=t[2],r[11]=0,r[12]=0,r[13]=0,r[14]=0,r[15]=1,r}function g(t,l,r){const o=r??new d(16),n=l[0],a=l[1],u=l[2];return o[0]=n*t[0],o[1]=n*t[1],o[2]=n*t[2],o[3]=n*t[3],o[4]=a*t[4],o[5]=a*t[5],o[6]=a*t[6],o[7]=a*t[7],o[8]=u*t[8],o[9]=u*t[9],o[10]=u*t[10],o[11]=u*t[11],t!==o&&(o[12]=t[12],o[13]=t[13],o[14]=t[14],o[15]=t[15]),o}function m(t,l){const r=l??new d(16);return r[0]=t,r[1]=0,r[2]=0,r[3]=0,r[4]=0,r[5]=t,r[6]=0,r[7]=0,r[8]=0,r[9]=0,r[10]=t,r[11]=0,r[12]=0,r[13]=0,r[14]=0,r[15]=1,r}function w(t,l,r){const o=r??new d(16);return o[0]=l*t[0],o[1]=l*t[1],o[2]=l*t[2],o[3]=l*t[3],o[4]=l*t[4],o[5]=l*t[5],o[6]=l*t[6],o[7]=l*t[7],o[8]=l*t[8],o[9]=l*t[9],o[10]=l*t[10],o[11]=l*t[11],t!==o&&(o[12]=t[12],o[13]=t[13],o[14]=t[14],o[15]=t[15]),o}return{add:z,aim:wt,axisRotate:c,axisRotation:p,cameraAim:et,clone:B,copy:k,create:v,determinant:$,equals:Y,equalsApproximately:N,fromMat3:M,fromQuat:D,frustum:zt,frustumReverseZ:mt,getAxis:vt,getScaling:pt,getTranslation:ht,identity:J,inverse:ot,invert:L,lookAt:X,mul:nt,mulScalar:q,multiply:j,multiplyScalar:T,negate:P,ortho:gt,perspective:it,perspectiveReverseZ:yt,rotate:s,rotateX:at,rotateY:Lt,rotateZ:A,rotation:e,rotationX:Pt,rotationY:st,rotationZ:b,scale:g,scaling:h,set:y,setAxis:dt,setTranslation:ft,translate:rt,translation:Bt,transpose:Z,uniformScale:w,uniformScaling:m}}const ue=new Map;function Se(d){let i=ue.get(d);return i||(i=Me(d),ue.set(d,i)),i}function _e(d){const i=Kt(d);function v(b,A,p,e){const c=new d(4);return b!==void 0&&(c[0]=b,A!==void 0&&(c[1]=A,p!==void 0&&(c[2]=p,e!==void 0&&(c[3]=e)))),c}const y=v;function M(b,A,p,e,c){const s=c??new d(4);return s[0]=b,s[1]=A,s[2]=p,s[3]=e,s}function D(b,A,p){const e=p??new d(4),c=A*.5,s=Math.sin(c);return e[0]=s*b[0],e[1]=s*b[1],e[2]=s*b[2],e[3]=Math.cos(c),e}function P(b,A){const p=A??i.create(3),e=Math.acos(b[3])*2,c=Math.sin(e*.5);return c>H?(p[0]=b[0]/c,p[1]=b[1]/c,p[2]=b[2]/c):(p[0]=1,p[1]=0,p[2]=0),{angle:e,axis:p}}function z(b,A){const p=it(b,A);return Math.acos(2*p*p-1)}function T(b,A,p){const e=p??new d(4),c=b[0],s=b[1],h=b[2],g=b[3],m=A[0],w=A[1],t=A[2],l=A[3];return e[0]=c*l+g*m+s*t-h*w,e[1]=s*l+g*w+h*m-c*t,e[2]=h*l+g*t+c*w-s*m,e[3]=g*l-c*m-s*w-h*t,e}const q=T;function k(b,A,p){const e=p??new d(4),c=A*.5,s=b[0],h=b[1],g=b[2],m=b[3],w=Math.sin(c),t=Math.cos(c);return e[0]=s*t+m*w,e[1]=h*t+g*w,e[2]=g*t-h*w,e[3]=m*t-s*w,e}function B(b,A,p){const e=p??new d(4),c=A*.5,s=b[0],h=b[1],g=b[2],m=b[3],w=Math.sin(c),t=Math.cos(c);return e[0]=s*t-g*w,e[1]=h*t+m*w,e[2]=g*t+s*w,e[3]=m*t-h*w,e}function N(b,A,p){const e=p??new d(4),c=A*.5,s=b[0],h=b[1],g=b[2],m=b[3],w=Math.sin(c),t=Math.cos(c);return e[0]=s*t+h*w,e[1]=h*t-s*w,e[2]=g*t+m*w,e[3]=m*t-g*w,e}function Y(b,A,p,e){const c=e??new d(4),s=b[0],h=b[1],g=b[2],m=b[3];let w=A[0],t=A[1],l=A[2],r=A[3],o=s*w+h*t+g*l+m*r;o<0&&(o=-o,w=-w,t=-t,l=-l,r=-r);let n,a;if(1-o>H){const u=Math.acos(o),f=Math.sin(u);n=Math.sin((1-p)*u)/f,a=Math.sin(p*u)/f}else n=1-p,a=p;return c[0]=n*s+a*w,c[1]=n*h+a*t,c[2]=n*g+a*l,c[3]=n*m+a*r,c}function J(b,A){const p=A??new d(4),e=b[0],c=b[1],s=b[2],h=b[3],g=e*e+c*c+s*s+h*h,m=g?1/g:0;return p[0]=-e*m,p[1]=-c*m,p[2]=-s*m,p[3]=h*m,p}function Z(b,A){const p=A??new d(4);return p[0]=-b[0],p[1]=-b[1],p[2]=-b[2],p[3]=b[3],p}function ot(b,A){const p=A??new d(4),e=b[0]+b[5]+b[10];if(e>0){const c=Math.sqrt(e+1);p[3]=.5*c;const s=.5/c;p[0]=(b[6]-b[9])*s,p[1]=(b[8]-b[2])*s,p[2]=(b[1]-b[4])*s}else{let c=0;b[5]>b[0]&&(c=1),b[10]>b[c*4+c]&&(c=2);const s=(c+1)%3,h=(c+2)%3,g=Math.sqrt(b[c*4+c]-b[s*4+s]-b[h*4+h]+1);p[c]=.5*g;const m=.5/g;p[3]=(b[s*4+h]-b[h*4+s])*m,p[s]=(b[s*4+c]+b[c*4+s])*m,p[h]=(b[h*4+c]+b[c*4+h])*m}return p}function $(b,A,p,e,c){const s=c??new d(4),h=b*.5,g=A*.5,m=p*.5,w=Math.sin(h),t=Math.cos(h),l=Math.sin(g),r=Math.cos(g),o=Math.sin(m),n=Math.cos(m);switch(e){case"xyz":s[0]=w*r*n+t*l*o,s[1]=t*l*n-w*r*o,s[2]=t*r*o+w*l*n,s[3]=t*r*n-w*l*o;break;case"xzy":s[0]=w*r*n-t*l*o,s[1]=t*l*n-w*r*o,s[2]=t*r*o+w*l*n,s[3]=t*r*n+w*l*o;break;case"yxz":s[0]=w*r*n+t*l*o,s[1]=t*l*n-w*r*o,s[2]=t*r*o-w*l*n,s[3]=t*r*n+w*l*o;break;case"yzx":s[0]=w*r*n+t*l*o,s[1]=t*l*n+w*r*o,s[2]=t*r*o-w*l*n,s[3]=t*r*n-w*l*o;break;case"zxy":s[0]=w*r*n-t*l*o,s[1]=t*l*n+w*r*o,s[2]=t*r*o+w*l*n,s[3]=t*r*n-w*l*o;break;case"zyx":s[0]=w*r*n-t*l*o,s[1]=t*l*n+w*r*o,s[2]=t*r*o-w*l*n,s[3]=t*r*n+w*l*o;break;default:throw new Error(`Unknown rotation order: ${e}`)}return s}function L(b,A){const p=A??new d(4);return p[0]=b[0],p[1]=b[1],p[2]=b[2],p[3]=b[3],p}const j=L;function nt(b,A,p){const e=p??new d(4);return e[0]=b[0]+A[0],e[1]=b[1]+A[1],e[2]=b[2]+A[2],e[3]=b[3]+A[3],e}function ft(b,A,p){const e=p??new d(4);return e[0]=b[0]-A[0],e[1]=b[1]-A[1],e[2]=b[2]-A[2],e[3]=b[3]-A[3],e}const ht=ft;function vt(b,A,p){const e=p??new d(4);return e[0]=b[0]*A,e[1]=b[1]*A,e[2]=b[2]*A,e[3]=b[3]*A,e}const dt=vt;function pt(b,A,p){const e=p??new d(4);return e[0]=b[0]/A,e[1]=b[1]/A,e[2]=b[2]/A,e[3]=b[3]/A,e}function it(b,A){return b[0]*A[0]+b[1]*A[1]+b[2]*A[2]+b[3]*A[3]}function yt(b,A,p,e){const c=e??new d(4);return c[0]=b[0]+p*(A[0]-b[0]),c[1]=b[1]+p*(A[1]-b[1]),c[2]=b[2]+p*(A[2]-b[2]),c[3]=b[3]+p*(A[3]-b[3]),c}function gt(b){const A=b[0],p=b[1],e=b[2],c=b[3];return Math.sqrt(A*A+p*p+e*e+c*c)}const zt=gt;function mt(b){const A=b[0],p=b[1],e=b[2],c=b[3];return A*A+p*p+e*e+c*c}const W=mt;function G(b,A){const p=A??new d(4),e=b[0],c=b[1],s=b[2],h=b[3],g=Math.sqrt(e*e+c*c+s*s+h*h);return g>1e-5?(p[0]=e/g,p[1]=c/g,p[2]=s/g,p[3]=h/g):(p[0]=0,p[1]=0,p[2]=0,p[3]=1),p}function O(b,A){return Math.abs(b[0]-A[0])<H&&Math.abs(b[1]-A[1])<H&&Math.abs(b[2]-A[2])<H&&Math.abs(b[3]-A[3])<H}function wt(b,A){return b[0]===A[0]&&b[1]===A[1]&&b[2]===A[2]&&b[3]===A[3]}function et(b){const A=b??new d(4);return A[0]=0,A[1]=0,A[2]=0,A[3]=1,A}const X=i.create(),Bt=i.create(),rt=i.create();function Pt(b,A,p){const e=p??new d(4),c=i.dot(b,A);return c<-.999999?(i.cross(Bt,b,X),i.len(X)<1e-6&&i.cross(rt,b,X),i.normalize(X,X),D(X,Math.PI,e),e):c>.999999?(e[0]=0,e[1]=0,e[2]=0,e[3]=1,e):(i.cross(b,A,X),e[0]=X[0],e[1]=X[1],e[2]=X[2],e[3]=1+c,G(e,e))}const at=new d(4),st=new d(4);function Lt(b,A,p,e,c,s){const h=s??new d(4);return Y(b,e,c,at),Y(A,p,c,st),Y(at,st,2*c*(1-c),h),h}return{create:v,fromValues:y,set:M,fromAxisAngle:D,toAxisAngle:P,angle:z,multiply:T,mul:q,rotateX:k,rotateY:B,rotateZ:N,slerp:Y,inverse:J,conjugate:Z,fromMat:ot,fromEuler:$,copy:L,clone:j,add:nt,subtract:ft,sub:ht,mulScalar:vt,scale:dt,divScalar:pt,dot:it,lerp:yt,length:gt,len:zt,lengthSq:mt,lenSq:W,normalize:G,equalsApproximately:O,equals:wt,identity:et,rotationTo:Pt,sqlerp:Lt}}const fe=new Map;function Ae(d){let i=fe.get(d);return i||(i=_e(d),fe.set(d,i)),i}function De(d){function i(p,e,c,s){const h=new d(4);return p!==void 0&&(h[0]=p,e!==void 0&&(h[1]=e,c!==void 0&&(h[2]=c,s!==void 0&&(h[3]=s)))),h}const v=i;function y(p,e,c,s,h){const g=h??new d(4);return g[0]=p,g[1]=e,g[2]=c,g[3]=s,g}function M(p,e){const c=e??new d(4);return c[0]=Math.ceil(p[0]),c[1]=Math.ceil(p[1]),c[2]=Math.ceil(p[2]),c[3]=Math.ceil(p[3]),c}function D(p,e){const c=e??new d(4);return c[0]=Math.floor(p[0]),c[1]=Math.floor(p[1]),c[2]=Math.floor(p[2]),c[3]=Math.floor(p[3]),c}function P(p,e){const c=e??new d(4);return c[0]=Math.round(p[0]),c[1]=Math.round(p[1]),c[2]=Math.round(p[2]),c[3]=Math.round(p[3]),c}function z(p,e=0,c=1,s){const h=s??new d(4);return h[0]=Math.min(c,Math.max(e,p[0])),h[1]=Math.min(c,Math.max(e,p[1])),h[2]=Math.min(c,Math.max(e,p[2])),h[3]=Math.min(c,Math.max(e,p[3])),h}function T(p,e,c){const s=c??new d(4);return s[0]=p[0]+e[0],s[1]=p[1]+e[1],s[2]=p[2]+e[2],s[3]=p[3]+e[3],s}function q(p,e,c,s){const h=s??new d(4);return h[0]=p[0]+e[0]*c,h[1]=p[1]+e[1]*c,h[2]=p[2]+e[2]*c,h[3]=p[3]+e[3]*c,h}function k(p,e,c){const s=c??new d(4);return s[0]=p[0]-e[0],s[1]=p[1]-e[1],s[2]=p[2]-e[2],s[3]=p[3]-e[3],s}const B=k;function N(p,e){return Math.abs(p[0]-e[0])<H&&Math.abs(p[1]-e[1])<H&&Math.abs(p[2]-e[2])<H&&Math.abs(p[3]-e[3])<H}function Y(p,e){return p[0]===e[0]&&p[1]===e[1]&&p[2]===e[2]&&p[3]===e[3]}function J(p,e,c,s){const h=s??new d(4);return h[0]=p[0]+c*(e[0]-p[0]),h[1]=p[1]+c*(e[1]-p[1]),h[2]=p[2]+c*(e[2]-p[2]),h[3]=p[3]+c*(e[3]-p[3]),h}function Z(p,e,c,s){const h=s??new d(4);return h[0]=p[0]+c[0]*(e[0]-p[0]),h[1]=p[1]+c[1]*(e[1]-p[1]),h[2]=p[2]+c[2]*(e[2]-p[2]),h[3]=p[3]+c[3]*(e[3]-p[3]),h}function ot(p,e,c){const s=c??new d(4);return s[0]=Math.max(p[0],e[0]),s[1]=Math.max(p[1],e[1]),s[2]=Math.max(p[2],e[2]),s[3]=Math.max(p[3],e[3]),s}function $(p,e,c){const s=c??new d(4);return s[0]=Math.min(p[0],e[0]),s[1]=Math.min(p[1],e[1]),s[2]=Math.min(p[2],e[2]),s[3]=Math.min(p[3],e[3]),s}function L(p,e,c){const s=c??new d(4);return s[0]=p[0]*e,s[1]=p[1]*e,s[2]=p[2]*e,s[3]=p[3]*e,s}const j=L;function nt(p,e,c){const s=c??new d(4);return s[0]=p[0]/e,s[1]=p[1]/e,s[2]=p[2]/e,s[3]=p[3]/e,s}function ft(p,e){const c=e??new d(4);return c[0]=1/p[0],c[1]=1/p[1],c[2]=1/p[2],c[3]=1/p[3],c}const ht=ft;function vt(p,e){return p[0]*e[0]+p[1]*e[1]+p[2]*e[2]+p[3]*e[3]}function dt(p){const e=p[0],c=p[1],s=p[2],h=p[3];return Math.sqrt(e*e+c*c+s*s+h*h)}const pt=dt;function it(p){const e=p[0],c=p[1],s=p[2],h=p[3];return e*e+c*c+s*s+h*h}const yt=it;function gt(p,e){const c=p[0]-e[0],s=p[1]-e[1],h=p[2]-e[2],g=p[3]-e[3];return Math.sqrt(c*c+s*s+h*h+g*g)}const zt=gt;function mt(p,e){const c=p[0]-e[0],s=p[1]-e[1],h=p[2]-e[2],g=p[3]-e[3];return c*c+s*s+h*h+g*g}const W=mt;function G(p,e){const c=e??new d(4),s=p[0],h=p[1],g=p[2],m=p[3],w=Math.sqrt(s*s+h*h+g*g+m*m);return w>1e-5?(c[0]=s/w,c[1]=h/w,c[2]=g/w,c[3]=m/w):(c[0]=0,c[1]=0,c[2]=0,c[3]=0),c}function O(p,e){const c=e??new d(4);return c[0]=-p[0],c[1]=-p[1],c[2]=-p[2],c[3]=-p[3],c}function wt(p,e){const c=e??new d(4);return c[0]=p[0],c[1]=p[1],c[2]=p[2],c[3]=p[3],c}const et=wt;function X(p,e,c){const s=c??new d(4);return s[0]=p[0]*e[0],s[1]=p[1]*e[1],s[2]=p[2]*e[2],s[3]=p[3]*e[3],s}const Bt=X;function rt(p,e,c){const s=c??new d(4);return s[0]=p[0]/e[0],s[1]=p[1]/e[1],s[2]=p[2]/e[2],s[3]=p[3]/e[3],s}const Pt=rt;function at(p){const e=p??new d(4);return e[0]=0,e[1]=0,e[2]=0,e[3]=0,e}function st(p,e,c){const s=c??new d(4),h=p[0],g=p[1],m=p[2],w=p[3];return s[0]=e[0]*h+e[4]*g+e[8]*m+e[12]*w,s[1]=e[1]*h+e[5]*g+e[9]*m+e[13]*w,s[2]=e[2]*h+e[6]*g+e[10]*m+e[14]*w,s[3]=e[3]*h+e[7]*g+e[11]*m+e[15]*w,s}function Lt(p,e,c){const s=c??new d(4);return G(p,s),L(s,e,s)}function b(p,e,c){const s=c??new d(4);return dt(p)>e?Lt(p,e,s):wt(p,s)}function A(p,e,c){const s=c??new d(4);return J(p,e,.5,s)}return{create:i,fromValues:v,set:y,ceil:M,floor:D,round:P,clamp:z,add:T,addScaled:q,subtract:k,sub:B,equalsApproximately:N,equals:Y,lerp:J,lerpV:Z,max:ot,min:$,mulScalar:L,scale:j,divScalar:nt,inverse:ft,invert:ht,dot:vt,length:dt,len:pt,lengthSq:it,lenSq:yt,distance:gt,dist:zt,distanceSq:mt,distSq:W,normalize:G,negate:O,copy:wt,clone:et,multiply:X,mul:Bt,divide:rt,div:Pt,zero:at,transformMat4:st,setLength:Lt,truncate:b,midpoint:A}}const he=new Map;function Pe(d){let i=he.get(d);return i||(i=De(d),he.set(d,i)),i}function ee(d,i,v,y,M,D){return{mat3:be(d),mat4:Se(i),quat:Ae(v),vec2:ge(y),vec3:Kt(M),vec4:Pe(D)}}const{mat4:Vt,vec3:Jt}=ee(Float32Array,Float32Array,Float32Array,Float32Array,Float32Array,Float32Array);ee(Float64Array,Float64Array,Float64Array,Float64Array,Float64Array,Float64Array);ee(we,Array,Array,Array,Array,Array);class Ct{constructor(i,v,y,M,D="div"){this.parent=i,this.object=v,this.property=y,this._disabled=!1,this._hidden=!1,this.initialValue=this.getValue(),this.domElement=document.createElement(D),this.domElement.classList.add("lil-controller"),this.domElement.classList.add(M),this.$name=document.createElement("div"),this.$name.classList.add("lil-name"),Ct.nextNameID=Ct.nextNameID||0,this.$name.id=`lil-gui-name-${++Ct.nextNameID}`,this.$widget=document.createElement("div"),this.$widget.classList.add("lil-widget"),this.$disable=this.$widget,this.domElement.appendChild(this.$name),this.domElement.appendChild(this.$widget),this.domElement.addEventListener("keydown",P=>P.stopPropagation()),this.domElement.addEventListener("keyup",P=>P.stopPropagation()),this.parent.children.push(this),this.parent.controllers.push(this),this.parent.$children.appendChild(this.domElement),this._listenCallback=this._listenCallback.bind(this),this.name(y)}name(i){return this._name=i,this.$name.textContent=i,this}onChange(i){return this._onChange=i,this}_callOnChange(){this.parent._callOnChange(this),this._onChange!==void 0&&this._onChange.call(this,this.getValue()),this._changed=!0}onFinishChange(i){return this._onFinishChange=i,this}_callOnFinishChange(){this._changed&&(this.parent._callOnFinishChange(this),this._onFinishChange!==void 0&&this._onFinishChange.call(this,this.getValue())),this._changed=!1}reset(){return this.setValue(this.initialValue),this._callOnFinishChange(),this}enable(i=!0){return this.disable(!i)}disable(i=!0){return i===this._disabled?this:(this._disabled=i,this.domElement.classList.toggle("lil-disabled",i),this.$disable.toggleAttribute("disabled",i),this)}show(i=!0){return this._hidden=!i,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}options(i){const v=this.parent.add(this.object,this.property,i);return v.name(this._name),this.destroy(),v}min(i){return this}max(i){return this}step(i){return this}decimals(i){return this}listen(i=!0){return this._listening=i,this._listenCallbackID!==void 0&&(cancelAnimationFrame(this._listenCallbackID),this._listenCallbackID=void 0),this._listening&&this._listenCallback(),this}_listenCallback(){this._listenCallbackID=requestAnimationFrame(this._listenCallback);const i=this.save();i!==this._listenPrevValue&&this.updateDisplay(),this._listenPrevValue=i}getValue(){return this.object[this.property]}setValue(i){return this.getValue()!==i&&(this.object[this.property]=i,this._callOnChange(),this.updateDisplay()),this}updateDisplay(){return this}load(i){return this.setValue(i),this._callOnFinishChange(),this}save(){return this.getValue()}destroy(){this.listen(!1),this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.controllers.splice(this.parent.controllers.indexOf(this),1),this.parent.$children.removeChild(this.domElement)}}class Ue extends Ct{constructor(i,v,y){super(i,v,y,"lil-boolean","label"),this.$input=document.createElement("input"),this.$input.setAttribute("type","checkbox"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$input.addEventListener("change",()=>{this.setValue(this.$input.checked),this._callOnFinishChange()}),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.checked=this.getValue(),this}}function te(d){let i,v;return(i=d.match(/(#|0x)?([a-f0-9]{6})/i))?v=i[2]:(i=d.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/))?v=parseInt(i[1]).toString(16).padStart(2,0)+parseInt(i[2]).toString(16).padStart(2,0)+parseInt(i[3]).toString(16).padStart(2,0):(i=d.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i))&&(v=i[1]+i[1]+i[2]+i[2]+i[3]+i[3]),v?"#"+v:!1}const Ee={isPrimitive:!0,match:d=>typeof d=="string",fromHexString:te,toHexString:te},kt={isPrimitive:!0,match:d=>typeof d=="number",fromHexString:d=>parseInt(d.substring(1),16),toHexString:d=>"#"+d.toString(16).padStart(6,0)},Re={isPrimitive:!1,match:d=>Array.isArray(d)||ArrayBuffer.isView(d),fromHexString(d,i,v=1){const y=kt.fromHexString(d);i[0]=(y>>16&255)/255*v,i[1]=(y>>8&255)/255*v,i[2]=(y&255)/255*v},toHexString([d,i,v],y=1){y=255/y;const M=d*y<<16^i*y<<8^v*y<<0;return kt.toHexString(M)}},Te={isPrimitive:!1,match:d=>Object(d)===d,fromHexString(d,i,v=1){const y=kt.fromHexString(d);i.r=(y>>16&255)/255*v,i.g=(y>>8&255)/255*v,i.b=(y&255)/255*v},toHexString({r:d,g:i,b:v},y=1){y=255/y;const M=d*y<<16^i*y<<8^v*y<<0;return kt.toHexString(M)}},ze=[Ee,kt,Re,Te];function Le(d){return ze.find(i=>i.match(d))}class Be extends Ct{constructor(i,v,y,M){super(i,v,y,"lil-color"),this.$input=document.createElement("input"),this.$input.setAttribute("type","color"),this.$input.setAttribute("tabindex",-1),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$text=document.createElement("input"),this.$text.setAttribute("type","text"),this.$text.setAttribute("spellcheck","false"),this.$text.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("lil-display"),this.$display.appendChild(this.$input),this.$widget.appendChild(this.$display),this.$widget.appendChild(this.$text),this._format=Le(this.initialValue),this._rgbScale=M,this._initialValueHexString=this.save(),this._textFocused=!1,this.$input.addEventListener("input",()=>{this._setValueFromHexString(this.$input.value)}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$text.addEventListener("input",()=>{const D=te(this.$text.value);D&&this._setValueFromHexString(D)}),this.$text.addEventListener("focus",()=>{this._textFocused=!0,this.$text.select()}),this.$text.addEventListener("blur",()=>{this._textFocused=!1,this.updateDisplay(),this._callOnFinishChange()}),this.$disable=this.$text,this.updateDisplay()}reset(){return this._setValueFromHexString(this._initialValueHexString),this}_setValueFromHexString(i){if(this._format.isPrimitive){const v=this._format.fromHexString(i);this.setValue(v)}else this._format.fromHexString(i,this.getValue(),this._rgbScale),this._callOnChange(),this.updateDisplay()}save(){return this._format.toHexString(this.getValue(),this._rgbScale)}load(i){return this._setValueFromHexString(i),this._callOnFinishChange(),this}updateDisplay(){return this.$input.value=this._format.toHexString(this.getValue(),this._rgbScale),this._textFocused||(this.$text.value=this.$input.value.substring(1)),this.$display.style.backgroundColor=this.$input.value,this}}class Qt extends Ct{constructor(i,v,y){super(i,v,y,"lil-function"),this.$button=document.createElement("button"),this.$button.appendChild(this.$name),this.$widget.appendChild(this.$button),this.$button.addEventListener("click",M=>{M.preventDefault(),this.getValue().call(this.object),this._callOnChange()}),this.$button.addEventListener("touchstart",()=>{},{passive:!0}),this.$disable=this.$button}}class $e extends Ct{constructor(i,v,y,M,D,P){super(i,v,y,"lil-number"),this._initInput(),this.min(M),this.max(D);const z=P!==void 0;this.step(z?P:this._getImplicitStep(),z),this.updateDisplay()}decimals(i){return this._decimals=i,this.updateDisplay(),this}min(i){return this._min=i,this._onUpdateMinMax(),this}max(i){return this._max=i,this._onUpdateMinMax(),this}step(i,v=!0){return this._step=i,this._stepExplicit=v,this}updateDisplay(){const i=this.getValue();if(this._hasSlider){let v=(i-this._min)/(this._max-this._min);v=Math.max(0,Math.min(v,1)),this.$fill.style.width=v*100+"%"}return this._inputFocused||(this.$input.value=this._decimals===void 0?i:i.toFixed(this._decimals)),this}_initInput(){this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("aria-labelledby",this.$name.id),window.matchMedia("(pointer: coarse)").matches&&(this.$input.setAttribute("type","number"),this.$input.setAttribute("step","any")),this.$widget.appendChild(this.$input),this.$disable=this.$input;const v=()=>{let L=parseFloat(this.$input.value);isNaN(L)||(this._stepExplicit&&(L=this._snap(L)),this.setValue(this._clamp(L)))},y=L=>{const j=parseFloat(this.$input.value);isNaN(j)||(this._snapClampSetValue(j+L),this.$input.value=this.getValue())},M=L=>{L.key==="Enter"&&this.$input.blur(),L.code==="ArrowUp"&&(L.preventDefault(),y(this._step*this._arrowKeyMultiplier(L))),L.code==="ArrowDown"&&(L.preventDefault(),y(this._step*this._arrowKeyMultiplier(L)*-1))},D=L=>{this._inputFocused&&(L.preventDefault(),y(this._step*this._normalizeMouseWheel(L)))};let P=!1,z,T,q,k,B;const N=5,Y=L=>{z=L.clientX,T=q=L.clientY,P=!0,k=this.getValue(),B=0,window.addEventListener("mousemove",J),window.addEventListener("mouseup",Z)},J=L=>{if(P){const j=L.clientX-z,nt=L.clientY-T;Math.abs(nt)>N?(L.preventDefault(),this.$input.blur(),P=!1,this._setDraggingStyle(!0,"vertical")):Math.abs(j)>N&&Z()}if(!P){const j=L.clientY-q;B-=j*this._step*this._arrowKeyMultiplier(L),k+B>this._max?B=this._max-k:k+B<this._min&&(B=this._min-k),this._snapClampSetValue(k+B)}q=L.clientY},Z=()=>{this._setDraggingStyle(!1,"vertical"),this._callOnFinishChange(),window.removeEventListener("mousemove",J),window.removeEventListener("mouseup",Z)},ot=()=>{this._inputFocused=!0},$=()=>{this._inputFocused=!1,this.updateDisplay(),this._callOnFinishChange()};this.$input.addEventListener("input",v),this.$input.addEventListener("keydown",M),this.$input.addEventListener("wheel",D,{passive:!1}),this.$input.addEventListener("mousedown",Y),this.$input.addEventListener("focus",ot),this.$input.addEventListener("blur",$)}_initSlider(){this._hasSlider=!0,this.$slider=document.createElement("div"),this.$slider.classList.add("lil-slider"),this.$fill=document.createElement("div"),this.$fill.classList.add("lil-fill"),this.$slider.appendChild(this.$fill),this.$widget.insertBefore(this.$slider,this.$input),this.domElement.classList.add("lil-has-slider");const i=($,L,j,nt,ft)=>($-L)/(j-L)*(ft-nt)+nt,v=$=>{const L=this.$slider.getBoundingClientRect();let j=i($,L.left,L.right,this._min,this._max);this._snapClampSetValue(j)},y=$=>{this._setDraggingStyle(!0),v($.clientX),window.addEventListener("mousemove",M),window.addEventListener("mouseup",D)},M=$=>{v($.clientX)},D=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("mousemove",M),window.removeEventListener("mouseup",D)};let P=!1,z,T;const q=$=>{$.preventDefault(),this._setDraggingStyle(!0),v($.touches[0].clientX),P=!1},k=$=>{$.touches.length>1||(this._hasScrollBar?(z=$.touches[0].clientX,T=$.touches[0].clientY,P=!0):q($),window.addEventListener("touchmove",B,{passive:!1}),window.addEventListener("touchend",N))},B=$=>{if(P){const L=$.touches[0].clientX-z,j=$.touches[0].clientY-T;Math.abs(L)>Math.abs(j)?q($):(window.removeEventListener("touchmove",B),window.removeEventListener("touchend",N))}else $.preventDefault(),v($.touches[0].clientX)},N=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("touchmove",B),window.removeEventListener("touchend",N)},Y=this._callOnFinishChange.bind(this),J=400;let Z;const ot=$=>{if(Math.abs($.deltaX)<Math.abs($.deltaY)&&this._hasScrollBar)return;$.preventDefault();const j=this._normalizeMouseWheel($)*this._step;this._snapClampSetValue(this.getValue()+j),this.$input.value=this.getValue(),clearTimeout(Z),Z=setTimeout(Y,J)};this.$slider.addEventListener("mousedown",y),this.$slider.addEventListener("touchstart",k,{passive:!1}),this.$slider.addEventListener("wheel",ot,{passive:!1})}_setDraggingStyle(i,v="horizontal"){this.$slider&&this.$slider.classList.toggle("lil-active",i),document.body.classList.toggle("lil-dragging",i),document.body.classList.toggle(`lil-${v}`,i)}_getImplicitStep(){return this._hasMin&&this._hasMax?(this._max-this._min)/1e3:.1}_onUpdateMinMax(){!this._hasSlider&&this._hasMin&&this._hasMax&&(this._stepExplicit||this.step(this._getImplicitStep(),!1),this._initSlider(),this.updateDisplay())}_normalizeMouseWheel(i){let{deltaX:v,deltaY:y}=i;return Math.floor(i.deltaY)!==i.deltaY&&i.wheelDelta&&(v=0,y=-i.wheelDelta/120,y*=this._stepExplicit?1:10),v+-y}_arrowKeyMultiplier(i){let v=this._stepExplicit?1:10;return i.shiftKey?v*=10:i.altKey&&(v/=10),v}_snap(i){let v=0;return this._hasMin?v=this._min:this._hasMax&&(v=this._max),i-=v,i=Math.round(i/this._step)*this._step,i+=v,i=parseFloat(i.toPrecision(15)),i}_clamp(i){return i<this._min&&(i=this._min),i>this._max&&(i=this._max),i}_snapClampSetValue(i){this.setValue(this._clamp(this._snap(i)))}get _hasScrollBar(){const i=this.parent.root.$children;return i.scrollHeight>i.clientHeight}get _hasMin(){return this._min!==void 0}get _hasMax(){return this._max!==void 0}}class Ie extends Ct{constructor(i,v,y,M){super(i,v,y,"lil-option"),this.$select=document.createElement("select"),this.$select.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("lil-display"),this.$select.addEventListener("change",()=>{this.setValue(this._values[this.$select.selectedIndex]),this._callOnFinishChange()}),this.$select.addEventListener("focus",()=>{this.$display.classList.add("lil-focus")}),this.$select.addEventListener("blur",()=>{this.$display.classList.remove("lil-focus")}),this.$widget.appendChild(this.$select),this.$widget.appendChild(this.$display),this.$disable=this.$select,this.options(M)}options(i){return this._values=Array.isArray(i)?i:Object.values(i),this._names=Array.isArray(i)?i:Object.keys(i),this.$select.replaceChildren(),this._names.forEach(v=>{const y=document.createElement("option");y.textContent=v,this.$select.appendChild(y)}),this.updateDisplay(),this}updateDisplay(){const i=this.getValue(),v=this._values.indexOf(i);return this.$select.selectedIndex=v,this.$display.textContent=v===-1?i:this._names[v],this}}class Oe extends Ct{constructor(i,v,y){super(i,v,y,"lil-string"),this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("spellcheck","false"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$input.addEventListener("input",()=>{this.setValue(this.$input.value)}),this.$input.addEventListener("keydown",M=>{M.code==="Enter"&&this.$input.blur()}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$widget.appendChild(this.$input),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.value=this.getValue(),this}}var Fe=`.lil-gui {
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
}`;function Ve(d){const i=document.createElement("style");i.innerHTML=d;const v=document.querySelector("head link[rel=stylesheet], head style");v?document.head.insertBefore(i,v):document.head.appendChild(i)}let de=!1;class ne{constructor({parent:i,autoPlace:v=i===void 0,container:y,width:M,title:D="Controls",closeFolders:P=!1,injectStyles:z=!0,touchStyles:T=!0}={}){if(this.parent=i,this.root=i?i.root:this,this.children=[],this.controllers=[],this.folders=[],this._closed=!1,this._hidden=!1,this.domElement=document.createElement("div"),this.domElement.classList.add("lil-gui"),this.$title=document.createElement("button"),this.$title.classList.add("lil-title"),this.$title.setAttribute("aria-expanded",!0),this.$title.addEventListener("click",()=>this.openAnimated(this._closed)),this.$title.addEventListener("touchstart",()=>{},{passive:!0}),this.$children=document.createElement("div"),this.$children.classList.add("lil-children"),this.domElement.appendChild(this.$title),this.domElement.appendChild(this.$children),this.title(D),this.parent){this.parent.children.push(this),this.parent.folders.push(this),this.parent.$children.appendChild(this.domElement);return}this.domElement.classList.add("lil-root"),T&&this.domElement.classList.add("lil-allow-touch-styles"),!de&&z&&(Ve(Fe),de=!0),y?y.appendChild(this.domElement):v&&(this.domElement.classList.add("lil-auto-place","autoPlace"),document.body.appendChild(this.domElement)),M&&this.domElement.style.setProperty("--width",M+"px"),this._closeFolders=P}add(i,v,y,M,D){if(Object(y)===y)return new Ie(this,i,v,y);const P=i[v];switch(typeof P){case"number":return new $e(this,i,v,y,M,D);case"boolean":return new Ue(this,i,v);case"string":return new Oe(this,i,v);case"function":return new Qt(this,i,v)}console.error(`gui.add failed
	property:`,v,`
	object:`,i,`
	value:`,P)}addColor(i,v,y=1){return new Be(this,i,v,y)}addFolder(i){const v=new ne({parent:this,title:i});return this.root._closeFolders&&v.close(),v}load(i,v=!0){return i.controllers&&this.controllers.forEach(y=>{y instanceof Qt||y._name in i.controllers&&y.load(i.controllers[y._name])}),v&&i.folders&&this.folders.forEach(y=>{y._title in i.folders&&y.load(i.folders[y._title])}),this}save(i=!0){const v={controllers:{},folders:{}};return this.controllers.forEach(y=>{if(!(y instanceof Qt)){if(y._name in v.controllers)throw new Error(`Cannot save GUI with duplicate property "${y._name}"`);v.controllers[y._name]=y.save()}}),i&&this.folders.forEach(y=>{if(y._title in v.folders)throw new Error(`Cannot save GUI with duplicate folder "${y._title}"`);v.folders[y._title]=y.save()}),v}open(i=!0){return this._setClosed(!i),this.$title.setAttribute("aria-expanded",!this._closed),this.domElement.classList.toggle("lil-closed",this._closed),this}close(){return this.open(!1)}_setClosed(i){this._closed!==i&&(this._closed=i,this._callOnOpenClose(this))}show(i=!0){return this._hidden=!i,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}openAnimated(i=!0){return this._setClosed(!i),this.$title.setAttribute("aria-expanded",!this._closed),requestAnimationFrame(()=>{const v=this.$children.clientHeight;this.$children.style.height=v+"px",this.domElement.classList.add("lil-transition");const y=D=>{D.target===this.$children&&(this.$children.style.height="",this.domElement.classList.remove("lil-transition"),this.$children.removeEventListener("transitionend",y))};this.$children.addEventListener("transitionend",y);const M=i?this.$children.scrollHeight:0;this.domElement.classList.toggle("lil-closed",!i),requestAnimationFrame(()=>{this.$children.style.height=M+"px"})}),this}title(i){return this._title=i,this.$title.textContent=i,this}reset(i=!0){return(i?this.controllersRecursive():this.controllers).forEach(y=>y.reset()),this}onChange(i){return this._onChange=i,this}_callOnChange(i){this.parent&&this.parent._callOnChange(i),this._onChange!==void 0&&this._onChange.call(this,{object:i.object,property:i.property,value:i.getValue(),controller:i})}onFinishChange(i){return this._onFinishChange=i,this}_callOnFinishChange(i){this.parent&&this.parent._callOnFinishChange(i),this._onFinishChange!==void 0&&this._onFinishChange.call(this,{object:i.object,property:i.property,value:i.getValue(),controller:i})}onOpenClose(i){return this._onOpenClose=i,this}_callOnOpenClose(i){this.parent&&this.parent._callOnOpenClose(i),this._onOpenClose!==void 0&&this._onOpenClose.call(this,i)}destroy(){this.parent&&(this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.folders.splice(this.parent.folders.indexOf(this),1)),this.domElement.parentElement&&this.domElement.parentElement.removeChild(this.domElement),Array.from(this.children).forEach(i=>i.destroy())}controllersRecursive(){let i=Array.from(this.controllers);return this.folders.forEach(v=>{i=i.concat(v.controllersRecursive())}),i}foldersRecursive(){let i=Array.from(this.folders);return this.folders.forEach(v=>{i=i.concat(v.foldersRecursive())}),i}}var Ce=`struct CommonUniforms {
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
}`;class Ge{device;format;uniformBuffer;tileTexture;tileSampler;lightUniformBuffer;sphereUniformBuffer;shadowUniformBuffer;positionBuffer;indexBuffer;vertexCount;pipeline;constructor(i,v,y,M,D,P,z,T){this.device=i,this.format=v,this.uniformBuffer=y,this.tileTexture=M,this.tileSampler=D,this.lightUniformBuffer=P,this.sphereUniformBuffer=z,this.shadowUniformBuffer=T,this.createGeometry(),this.createPipeline()}createGeometry(){function i(P){return[(P&1)*2-1,(P&2)-1,(P&4)/2-1]}const v=[[0,4,2,6,-1,0,0],[1,3,5,7,1,0,0],[2,6,3,7,0,1,0],[0,2,1,3,0,0,-1],[4,5,6,7,0,0,1]],y=[],M=[];let D=0;for(const P of v){const z=D;for(let T=0;T<4;T++){const q=P[T],k=i(q);y.push(...k),D++}M.push(z+0,z+1,z+2),M.push(z+2,z+1,z+3)}this.vertexCount=M.length,this.positionBuffer=this.device.createBuffer({label:"Pool Vertex Buffer",size:y.length*4,usage:GPUBufferUsage.VERTEX,mappedAtCreation:!0}),new Float32Array(this.positionBuffer.getMappedRange()).set(y),this.positionBuffer.unmap(),this.indexBuffer=this.device.createBuffer({label:"Pool Index Buffer",size:M.length*4,usage:GPUBufferUsage.INDEX,mappedAtCreation:!0}),new Uint32Array(this.indexBuffer.getMappedRange()).set(M),this.indexBuffer.unmap()}createPipeline(){const i=this.device.createShaderModule({label:"Pool Vertex Shader",code:Ce}),v=this.device.createShaderModule({label:"Pool Fragment Shader",code:ke});this.pipeline=this.device.createRenderPipeline({label:"Pool Pipeline",layout:"auto",vertex:{module:i,entryPoint:"vs_main",buffers:[{arrayStride:12,attributes:[{shaderLocation:0,offset:0,format:"float32x3"}]}]},fragment:{module:v,entryPoint:"fs_main",targets:[{format:this.format}]},primitive:{topology:"triangle-list",cullMode:"back"},depthStencil:{depthWriteEnabled:!0,depthCompare:"less",format:"depth24plus"}})}render(i,v,y,M){const D=this.device.createBindGroup({layout:this.pipeline.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:this.uniformBuffer}},{binding:1,resource:this.tileSampler},{binding:2,resource:this.tileTexture.createView()},{binding:3,resource:{buffer:this.lightUniformBuffer}},{binding:4,resource:{buffer:this.sphereUniformBuffer}},{binding:5,resource:y},{binding:6,resource:v.createView()},{binding:7,resource:M.createView()},{binding:8,resource:{buffer:this.shadowUniformBuffer}}]});i.setPipeline(this.pipeline),i.setBindGroup(0,D),i.setVertexBuffer(0,this.positionBuffer),i.setIndexBuffer(this.indexBuffer,"uint32"),i.drawIndexed(this.vertexCount)}}var qe=`struct CommonUniforms {
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
}`;class He{device;format;commonUniformBuffer;sphereUniformBuffer;lightUniformBuffer;positionBuffer;indexBuffer;vertexCount;pipeline;constructor(i,v,y,M,D){this.device=i,this.format=v,this.commonUniformBuffer=y,this.sphereUniformBuffer=D,this.lightUniformBuffer=M,this.createGeometry(),this.createPipeline()}update(i,v){const y=new Float32Array([...i,v]);this.device.queue.writeBuffer(this.sphereUniformBuffer,0,y)}createGeometry(){class v{unique;map;constructor(){this.unique=[],this.map=new Map}add(q){const k=q.join(",");return this.map.has(k)||(this.map.set(k,this.unique.length),this.unique.push(q)),this.map.get(k)}}function y(T){return[(T&1)*2-1,(T&2)-1,(T&4)/2-1]}function M(T){return T+(T-T*T)/2}const D=new v,P=[];for(let T=0;T<8;T++){const q=y(T),k=q[0]*q[1]*q[2]>0,B=[];for(let N=0;N<=10;N++)for(let Y=0;N+Y<=10;Y++){const J=N/10,Z=Y/10,ot=(10-N-Y)/10,$=[M(J),M(Z),M(ot)],L=Math.sqrt($[0]*$[0]+$[1]*$[1]+$[2]*$[2]),j=[$[0]/L*q[0],$[1]/L*q[1],$[2]/L*q[2]];B.push(D.add(j))}for(let N=0;N<=10;N++)if(N>0)for(let Y=0;N+Y<=10;Y++){const J=(N-1)*11+(N-1-(N-1)*(N-1))/2+Y,Z=N*11+(N-N*N)/2+Y;k?P.push(B[J],B[Z],B[J+1]):P.push(B[J],B[J+1],B[Z]),N+Y<10&&(k?P.push(B[Z],B[Z+1],B[J+1]):P.push(B[Z],B[J+1],B[Z+1]))}}this.vertexCount=P.length;const z=[];for(const T of D.unique)z.push(...T);this.positionBuffer=this.device.createBuffer({label:"Sphere Vertex Buffer",size:z.length*4,usage:GPUBufferUsage.VERTEX,mappedAtCreation:!0}),new Float32Array(this.positionBuffer.getMappedRange()).set(z),this.positionBuffer.unmap(),this.indexBuffer=this.device.createBuffer({label:"Sphere Index Buffer",size:P.length*4,usage:GPUBufferUsage.INDEX,mappedAtCreation:!0}),new Uint32Array(this.indexBuffer.getMappedRange()).set(P),this.indexBuffer.unmap()}createPipeline(){const i=this.device.createShaderModule({label:"Sphere Vertex Shader",code:qe}),v=this.device.createShaderModule({label:"Sphere Fragment Shader",code:Ne});this.pipeline=this.device.createRenderPipeline({label:"Sphere Pipeline",layout:"auto",vertex:{module:i,entryPoint:"vs_main",buffers:[{arrayStride:12,attributes:[{shaderLocation:0,offset:0,format:"float32x3"}]}]},fragment:{module:v,entryPoint:"fs_main",targets:[{format:this.format}]},primitive:{topology:"triangle-list",cullMode:"back"},depthStencil:{depthWriteEnabled:!0,depthCompare:"less",format:"depth24plus"}})}render(i,v,y,M){const D=this.device.createBindGroup({layout:this.pipeline.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:this.commonUniformBuffer}},{binding:1,resource:{buffer:this.sphereUniformBuffer}},{binding:2,resource:{buffer:this.lightUniformBuffer}},{binding:3,resource:y},{binding:4,resource:v.createView()},{binding:5,resource:M.createView()}]});i.setPipeline(this.pipeline),i.setBindGroup(0,D),i.setVertexBuffer(0,this.positionBuffer),i.setIndexBuffer(this.indexBuffer,"uint32"),i.drawIndexed(this.vertexCount)}}const Yt=`struct VertexOutput {
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
}`;class tn{device;width;height;commonUniformBuffer;lightUniformBuffer;sphereUniformBuffer;shadowUniformBuffer;tileTexture;tileSampler;skyTexture;skySampler;textureA;textureB;causticsTexture;sampler;dropPipeline;updatePipeline;normalPipeline;spherePipeline;positionBuffer;indexBuffer;vertexCount;surfaceBindGroupLayout;surfacePipelineAbove;surfacePipelineUnder;causticsPipeline;constructor(i,v,y,M,D,P,z,T,q,k,B){this.device=i,this.width=v,this.height=y,this.commonUniformBuffer=M,this.lightUniformBuffer=D,this.sphereUniformBuffer=P,this.shadowUniformBuffer=z,this.tileTexture=T,this.tileSampler=q,this.skyTexture=k,this.skySampler=B,this.textureA=this.createTexture(),this.textureB=this.createTexture(),this.causticsTexture=this.device.createTexture({size:[1024,1024],format:"rgba8unorm",usage:GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.RENDER_ATTACHMENT}),this.sampler=i.createSampler({magFilter:"linear",minFilter:"linear",addressModeU:"clamp-to-edge",addressModeV:"clamp-to-edge"}),this.createPipelines(),this.createSurfaceMesh(),this.createSurfacePipeline(),this.createCausticsPipeline()}createTexture(){const i=this.device.features.has("float32-filterable")?"rgba32float":"rgba16float";return this.device.createTexture({size:[this.width,this.height],format:i,usage:GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.RENDER_ATTACHMENT})}createPipelines(){const i=this.device.features.has("float32-filterable")?"rgba32float":"rgba16float";this.dropPipeline=this.createPipeline("Drop",Yt,je,32,i),this.updatePipeline=this.createPipeline("Update",Yt,We,16,i),this.normalPipeline=this.createPipeline("Normal",Yt,Xe,16,i),this.spherePipeline=this.createPipeline("Sphere",Yt,Ye,32,i)}createPipeline(i,v,y,M,D){const P=this.device.createShaderModule({label:i+" Module",code:v+y});return{pipeline:this.device.createRenderPipeline({label:i+" Pipeline",layout:"auto",vertex:{module:P,entryPoint:"vs_main"},fragment:{module:P,entryPoint:"fs_main",targets:[{format:D}]},primitive:{topology:"triangle-list"}}),uniformSize:M,uniformBuffer:this.device.createBuffer({size:M,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST})}}runPipeline(i,v){this.device.queue.writeBuffer(i.uniformBuffer,0,v);const y=this.device.createBindGroup({layout:i.pipeline.getBindGroupLayout(0),entries:[{binding:0,resource:this.textureA.createView()},{binding:1,resource:this.sampler},{binding:2,resource:{buffer:i.uniformBuffer}}]}),M=this.device.createCommandEncoder(),D=M.beginRenderPass({colorAttachments:[{view:this.textureB.createView(),loadOp:"clear",storeOp:"store",clearValue:{r:0,g:0,b:0,a:0}}]});D.setPipeline(i.pipeline),D.setBindGroup(0,y),D.draw(6),D.end(),this.device.queue.submit([M.finish()]);const P=this.textureA;this.textureA=this.textureB,this.textureB=P}addDrop(i,v,y,M){const D=new Float32Array(4);D[0]=i,D[1]=v,D[2]=y,D[3]=M,this.runPipeline(this.dropPipeline,D)}stepSimulation(){const i=new Float32Array(2);i[0]=1/this.width,i[1]=1/this.height,this.runPipeline(this.updatePipeline,i)}updateNormals(){const i=new Float32Array(2);i[0]=1/this.width,i[1]=1/this.height,this.runPipeline(this.normalPipeline,i)}moveSphere(i,v,y){const M=new Float32Array(8);M[0]=i[0],M[1]=i[1],M[2]=i[2],M[3]=y,M[4]=v[0],M[5]=v[1],M[6]=v[2],M[7]=0,this.runPipeline(this.spherePipeline,M)}createSurfaceMesh(){const v=[],y=[];for(let M=0;M<=200;M++){const D=M/200;for(let P=0;P<=200;P++){const z=P/200;v.push(2*z-1,2*D-1,0)}}for(let M=0;M<200;M++)for(let D=0;D<200;D++){const P=D+M*201;y.push(P,P+1,P+200+1),y.push(P+200+1,P+1,P+200+2)}this.vertexCount=y.length,this.positionBuffer=this.device.createBuffer({label:"Water Surface Vertices",size:v.length*4,usage:GPUBufferUsage.VERTEX,mappedAtCreation:!0}),new Float32Array(this.positionBuffer.getMappedRange()).set(v),this.positionBuffer.unmap(),this.indexBuffer=this.device.createBuffer({label:"Water Surface Indices",size:y.length*4,usage:GPUBufferUsage.INDEX,mappedAtCreation:!0}),new Uint32Array(this.indexBuffer.getMappedRange()).set(y),this.indexBuffer.unmap()}createSurfacePipeline(){const i=(D,P)=>this.device.createShaderModule({label:`${D} Vertex Shader`,code:P}),v=(D,P)=>this.device.createShaderModule({label:`${D} Fragment Shader`,code:P});this.surfaceBindGroupLayout=this.device.createBindGroupLayout({label:"Water Surface BindGroupLayout",entries:[{binding:0,visibility:GPUShaderStage.VERTEX|GPUShaderStage.FRAGMENT,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.FRAGMENT,buffer:{type:"uniform"}},{binding:2,visibility:GPUShaderStage.FRAGMENT,buffer:{type:"uniform"}},{binding:3,visibility:GPUShaderStage.FRAGMENT,sampler:{}},{binding:4,visibility:GPUShaderStage.FRAGMENT,texture:{}},{binding:5,visibility:GPUShaderStage.VERTEX|GPUShaderStage.FRAGMENT,sampler:{}},{binding:6,visibility:GPUShaderStage.VERTEX|GPUShaderStage.FRAGMENT,texture:{}},{binding:7,visibility:GPUShaderStage.FRAGMENT,sampler:{}},{binding:8,visibility:GPUShaderStage.FRAGMENT,texture:{viewDimension:"cube"}},{binding:9,visibility:GPUShaderStage.FRAGMENT,texture:{}},{binding:10,visibility:GPUShaderStage.FRAGMENT,buffer:{type:"uniform"}}]});const y=this.device.createPipelineLayout({label:"Water Surface PipelineLayout",bindGroupLayouts:[this.surfaceBindGroupLayout]}),M=(D,P,z,T)=>{const q=i(D,P),k=v(D,z);return this.device.createRenderPipeline({label:D,layout:y,vertex:{module:q,entryPoint:"vs_main",buffers:[{arrayStride:12,attributes:[{shaderLocation:0,offset:0,format:"float32x3"}]}]},fragment:{module:k,entryPoint:"fs_main",targets:[{format:navigator.gpu.getPreferredCanvasFormat()}]},primitive:{topology:"triangle-list",cullMode:T},depthStencil:{depthWriteEnabled:!0,depthCompare:"less",format:"depth24plus"}})};this.surfacePipelineAbove=M("Water Surface Above Pipeline",pe,Ze,"front"),this.surfacePipelineUnder=M("Water Surface Under Pipeline",pe,Ke,"back")}renderSurface(i){const v=this.device.createBindGroup({layout:this.surfaceBindGroupLayout,entries:[{binding:0,resource:{buffer:this.commonUniformBuffer}},{binding:1,resource:{buffer:this.lightUniformBuffer}},{binding:2,resource:{buffer:this.sphereUniformBuffer}},{binding:3,resource:this.tileSampler},{binding:4,resource:this.tileTexture.createView()},{binding:5,resource:this.sampler},{binding:6,resource:this.textureA.createView()},{binding:7,resource:this.skySampler},{binding:8,resource:this.skyTexture.createView({dimension:"cube"})},{binding:9,resource:this.causticsTexture.createView()},{binding:10,resource:{buffer:this.shadowUniformBuffer}}]});i.setPipeline(this.surfacePipelineAbove),i.setBindGroup(0,v),i.setVertexBuffer(0,this.positionBuffer),i.setIndexBuffer(this.indexBuffer,"uint32"),i.drawIndexed(this.vertexCount),i.setPipeline(this.surfacePipelineUnder),i.setBindGroup(0,v),i.drawIndexed(this.vertexCount)}createCausticsPipeline(){const i=this.device.createShaderModule({label:"Caustics Vertex Shader",code:Qe}),v=this.device.createShaderModule({label:"Caustics Fragment Shader",code:Je});this.causticsPipeline=this.device.createRenderPipeline({label:"Caustics Pipeline",layout:"auto",vertex:{module:i,entryPoint:"vs_main",buffers:[{arrayStride:12,attributes:[{shaderLocation:0,offset:0,format:"float32x3"}]}]},fragment:{module:v,entryPoint:"fs_main",targets:[{format:"rgba8unorm",blend:{color:{operation:"add",srcFactor:"one",dstFactor:"one"},alpha:{operation:"add",srcFactor:"one",dstFactor:"one"}}}]},primitive:{topology:"triangle-list"}})}updateCaustics(){const i=this.device.createBindGroup({layout:this.causticsPipeline.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:this.lightUniformBuffer}},{binding:1,resource:{buffer:this.sphereUniformBuffer}},{binding:2,resource:this.sampler},{binding:3,resource:this.textureA.createView()},{binding:4,resource:{buffer:this.shadowUniformBuffer}}]}),v=this.device.createCommandEncoder(),y=v.beginRenderPass({colorAttachments:[{view:this.causticsTexture.createView(),loadOp:"clear",storeOp:"store",clearValue:{r:0,g:0,b:0,a:0}}]});y.setPipeline(this.causticsPipeline),y.setBindGroup(0,i),y.setVertexBuffer(0,this.positionBuffer),y.setIndexBuffer(this.indexBuffer,"uint32"),y.drawIndexed(this.vertexCount),y.end(),this.device.queue.submit([v.finish()])}}class tt{x;y;z;constructor(i=0,v=0,y=0){this.x=i,this.y=v,this.z=y}negative(){return new tt(-this.x,-this.y,-this.z)}add(i){return i instanceof tt?new tt(this.x+i.x,this.y+i.y,this.z+i.z):new tt(this.x+i,this.y+i,this.z+i)}subtract(i){return i instanceof tt?new tt(this.x-i.x,this.y-i.y,this.z-i.z):new tt(this.x-i,this.y-i,this.z-i)}multiply(i){return i instanceof tt?new tt(this.x*i.x,this.y*i.y,this.z*i.z):new tt(this.x*i,this.y*i,this.z*i)}divide(i){return i instanceof tt?new tt(this.x/i.x,this.y/i.y,this.z/i.z):new tt(this.x/i,this.y/i,this.z/i)}dot(i){return this.x*i.x+this.y*i.y+this.z*i.z}length(){return Math.sqrt(this.dot(this))}unit(){return this.divide(this.length())}toArray(){return[this.x,this.y,this.z]}clone(){return new tt(this.x,this.y,this.z)}static fromAngles(i,v){return new tt(Math.cos(v)*Math.cos(i),Math.sin(v),Math.cos(v)*Math.sin(i))}static lerp(i,v,y){return i.add(v.subtract(i).multiply(y))}}class en{t;hit;normal;constructor(i,v,y){this.t=i,this.hit=v,this.normal=y}}class Zt{eye;viewport;invViewProj;ray00;ray10;ray01;ray11;constructor(i,v,y){this.viewport=y;const M=Vt.invert(i),D=Jt.transformMat4([0,0,0],M);this.eye=new tt(D[0],D[1],D[2]),this.invViewProj=Vt.invert(Vt.multiply(v,i));const[P,z,T,q]=y,k=P+T,B=z+q;this.ray00=this.unProject(P,z,1).subtract(this.eye),this.ray10=this.unProject(k,z,1).subtract(this.eye),this.ray01=this.unProject(P,B,1).subtract(this.eye),this.ray11=this.unProject(k,B,1).subtract(this.eye)}unProject(i,v,y){const[M,D,P,z]=this.viewport,T=(i-M)/P*2-1,q=(1-(v-D)/z)*2-1,k=Jt.transformMat4([T,q,y],this.invViewProj);return new tt(k[0],k[1],k[2])}getRayForPixel(i,v){const[y,M,D,P]=this.viewport,z=(i-y)/D,T=(v-M)/P,q=tt.lerp(this.ray00,this.ray10,z),k=tt.lerp(this.ray01,this.ray11,z);return tt.lerp(q,k,T).unit()}static hitTestSphere(i,v,y,M){const D=i.subtract(y),P=v.dot(v),z=2*v.dot(D),T=D.dot(D)-M*M,q=z*z-4*P*T;if(q>0){const k=(-z-Math.sqrt(q))/(2*P),B=i.add(v.multiply(k)),N=B.subtract(y).divide(M);return new en(k,B,N)}return null}}class nn{device;constructor(i){this.device=i}async load(i){const v=["xpos","xneg","ypos","yneg","zpos","zneg"],y=await Promise.all(v.map(z=>fetch(i[z]).then(T=>T.blob()).then(T=>createImageBitmap(T)))),{width:M,height:D}=y[0],P=this.device.createTexture({size:[M,D,6],format:"rgba8unorm",usage:GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_DST|GPUTextureUsage.RENDER_ATTACHMENT});return y.forEach((z,T)=>{this.device.queue.copyExternalImageToTexture({source:z,flipY:!0},{texture:P,origin:[0,0,T]},{width:M,height:D})}),P}}var Ft=(d=>(d[d.None=-1]="None",d[d.AddDrops=0]="AddDrops",d[d.OrbitCamera=1]="OrbitCamera",d[d.MoveSphere=2]="MoveSphere",d))(Ft||{});async function rn(){const d=navigator.gpu;if(!d){document.getElementById("loading").innerHTML="WebGPU not supported.";return}const i=await d.requestAdapter();if(!i){document.getElementById("loading").innerHTML="No WebGPU adapter found.";return}const v=[];i.features.has("float32-filterable")&&v.push("float32-filterable");const y=await i.requestDevice({requiredFeatures:v}),M=document.querySelector("canvas"),D=M.getContext("webgpu"),P=navigator.gpu.getPreferredCanvasFormat();D.configure({device:y,format:P,alphaMode:"premultiplied"});const z=document.getElementById("help"),T=window.devicePixelRatio||1;let q=performance.now();async function k(u){const x=await(await fetch(u)).blob(),S=await createImageBitmap(x),_=y.createTexture({label:u,size:[S.width,S.height],format:"rgba8unorm",usage:GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_DST|GPUTextureUsage.RENDER_ATTACHMENT});return y.queue.copyExternalImageToTexture({source:S,flipY:!0},{texture:_},{width:S.width,height:S.height}),_}const B="/webgpu-water/",N=await k(`${B}tiles.jpg`),Y=y.createSampler({magFilter:"linear",minFilter:"linear",addressModeU:"repeat",addressModeV:"repeat"}),Z=await new nn(y).load({xpos:`${B}xpos.jpg`,xneg:`${B}xneg.jpg`,ypos:`${B}ypos.jpg`,yneg:`${B}yneg.jpg`,zpos:`${B}zpos.jpg`,zneg:`${B}zneg.jpg`}),ot=y.createSampler({magFilter:"linear",minFilter:"linear"});let $=-25,L=-200.5,j=4,nt=$,ft=L,ht=j;function vt(){const u=M.width/M.height,f=Vt.perspective(Math.PI/4,u,.01,100),x=Vt.identity();return Vt.translate(x,[0,0,-j],x),Vt.rotateX(x,-$*Math.PI/180,x),Vt.rotateY(x,-L*Math.PI/180,x),Vt.translate(x,[0,.5,0],x),{projectionMatrix:f,viewMatrix:x}}const dt=y.createBuffer({size:80,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),pt=y.createBuffer({size:16,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),it=y.createBuffer({size:16,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),yt=y.createBuffer({size:16,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST});let gt=new tt(2,2,-1).unit();function zt(){y.queue.writeBuffer(pt,0,new Float32Array([...gt.toArray(),0]))}zt(),y.queue.writeBuffer(yt,0,new Float32Array([1,1,1,0]));const mt=new Ge(y,P,dt,N,Y,pt,it,yt),W=new He(y,P,dt,pt,it),G=new tn(y,256,256,dt,pt,it,yt,N,Y,Z,ot);let O=new tt(-.4,-.75,.2),wt=O.clone();const et=.25;let X=new tt;const Bt=new tt(0,-4,0);let rt=!1,Pt=!1;const at=new ne({title:"Settings"});at.close();const st={gravity:rt,followCamera:!1,showSphere:!0};at.add(st,"showSphere").name("Render Sphere").onChange(u=>{y.queue.writeBuffer(yt,0,new Float32Array([1,u?1:0,1,0])),document.activeElement?.blur()});const Lt=at.add(st,"gravity").name("Toggle Gravity").onChange(u=>{rt=u,document.activeElement?.blur()});at.add(st,"followCamera").name("Light From Camera").onChange(()=>{document.activeElement?.blur()}),W.update(O.toArray(),et);for(let u=0;u<20;u++)G.addDrop(Math.random()*2-1,Math.random()*2-1,.03,u&1?.01:-.01);const b={};window.addEventListener("keydown",u=>{const f=u.key.toUpperCase();b[f]=!0,f==="G"?(rt=!rt,st.gravity=rt,Lt.updateDisplay()):f===" "&&(Pt=!Pt)}),window.addEventListener("keyup",u=>{b[u.key.toUpperCase()]=!1});let A=Ft.None,p=0,e=0,c,s;function h(){return[0,0,M.width,M.height]}function g(u,f,x){if(p=u,e=f,x===2){A=Ft.OrbitCamera;return}const{projectionMatrix:S,viewMatrix:_}=vt(),R=new Zt(_,S,h()),E=R.getRayForPixel(u*T,f*T),U=st.showSphere?Zt.hitTestSphere(R.eye,E,O,et):null;if(U){A=Ft.MoveSphere,c=U.hit,s=R.getRayForPixel(M.width/2,M.height/2).negative();return}const I=-R.eye.y/E.y,C=R.eye.add(E.multiply(I));Math.abs(C.x)<1&&Math.abs(C.z)<1?(A=Ft.AddDrops,G.addDrop(C.x,C.z,.03,.01)):A=Ft.OrbitCamera}function m(u,f){if(A===Ft.OrbitCamera)ft-=u-p,nt-=f-e,nt=Math.max(-89.999,Math.min(89.999,nt));else if(A===Ft.MoveSphere){const{projectionMatrix:x,viewMatrix:S}=vt(),_=new Zt(S,x,h()),R=_.getRayForPixel(u*T,f*T),E=-s.dot(_.eye.subtract(c))/s.dot(R),U=_.eye.add(R.multiply(E));O=O.add(U.subtract(c)),O.x=Math.max(et-1,Math.min(1-et,O.x)),O.y=Math.max(et-1,Math.min(10,O.y)),O.z=Math.max(et-1,Math.min(1-et,O.z)),W.update(O.toArray(),et),c=U}else if(A===Ft.AddDrops){const{projectionMatrix:x,viewMatrix:S}=vt(),_=new Zt(S,x,h()),R=_.getRayForPixel(u*T,f*T),E=-_.eye.y/R.y,U=_.eye.add(R.multiply(E));Math.abs(U.x)<1&&Math.abs(U.z)<1&&G.addDrop(U.x,U.z,.03,.01)}p=u,e=f}function w(){A=Ft.None}M.addEventListener("pointerdown",u=>{u.button!==1&&(u.preventDefault(),M.setPointerCapture(u.pointerId),g(u.offsetX,u.offsetY,u.button))}),M.addEventListener("contextmenu",u=>u.preventDefault()),M.addEventListener("pointermove",u=>{A!==Ft.None&&m(u.offsetX,u.offsetY)}),M.addEventListener("pointerup",u=>{M.releasePointerCapture(u.pointerId),w()}),M.addEventListener("pointercancel",u=>{M.releasePointerCapture(u.pointerId),w()}),M.addEventListener("wheel",u=>{u.preventDefault(),ht+=u.deltaY*.005,ht=Math.max(1.5,Math.min(10,ht))},{passive:!1});let t;function l(){const f=window.matchMedia("(max-width: 600px)").matches?window.innerWidth:window.innerWidth-z.clientWidth-20,x=window.innerHeight;M.width=Math.floor(f*T),M.height=Math.floor(x*T),M.style.width=`${f}px`,M.style.height=`${x}px`,t&&t.destroy(),t=y.createTexture({size:[M.width,M.height],format:"depth24plus",usage:GPUTextureUsage.RENDER_ATTACHMENT}),n()}window.addEventListener("resize",l);const r=document.getElementById("help-toggle");r.addEventListener("click",()=>{z.classList.toggle("collapsed"),r.textContent=z.classList.contains("collapsed")?"menu":"chevron_right",l()}),window.addEventListener("pointerdown",u=>{if(window.matchMedia("(max-width: 600px)").matches&&!z.classList.contains("collapsed")){const x=u.target;!z.contains(x)&&!r.contains(x)&&(z.classList.add("collapsed"),r.textContent="menu",l())}}),document.getElementById("loading").innerHTML="",l();function o(){const{projectionMatrix:u,viewMatrix:f}=vt(),x=Vt.multiply(u,f),S=Vt.invert(f),_=Jt.transformMat4([0,0,0],S),R=new Float32Array(20);R.set(x,0),R.set(_,16),y.queue.writeBuffer(dt,0,R)}function n(){const u=performance.now();let f=(u-q)/1e3;if(q=u,f>1&&(f=1),$+=(nt-$)*.15,L+=(ft-L)*.15,j+=(ht-j)*.15,(b.L||st.followCamera)&&(gt=tt.fromAngles((90-L)*Math.PI/180,-$*Math.PI/180),zt()),!Pt){if(A===Ft.MoveSphere)X=new tt;else if(rt){const _=Math.max(0,Math.min(1,(et-O.y)/(2*et)));X=X.add(Bt.multiply(f-1.1*f*_)),X=X.subtract(X.unit().multiply(_*f*X.dot(X))),O=O.add(X.multiply(f)),O.y<et-1&&(O.y=et-1,X.y=Math.abs(X.y)*.7),W.update(O.toArray(),et)}st.showSphere&&G.moveSphere(wt.toArray(),O.toArray(),et),wt=O.clone(),G.stepSimulation(),G.stepSimulation(),G.updateNormals(),G.updateCaustics()}o();const x=y.createCommandEncoder(),S=x.beginRenderPass({colorAttachments:[{view:D.getCurrentTexture().createView(),clearValue:{r:0,g:0,b:0,a:1},loadOp:"clear",storeOp:"store"}],depthStencilAttachment:{view:t.createView(),depthClearValue:1,depthLoadOp:"clear",depthStoreOp:"store"}});mt.render(S,G.textureA,G.sampler,G.causticsTexture),st.showSphere&&W.render(S,G.textureA,G.sampler,G.causticsTexture),G.renderSurface(S),S.end(),y.queue.submit([x.finish()])}function a(){requestAnimationFrame(a),n()}requestAnimationFrame(a)}rn();
