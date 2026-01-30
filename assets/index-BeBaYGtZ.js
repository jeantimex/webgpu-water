(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const M of document.querySelectorAll('link[rel="modulepreload"]'))x(M);new MutationObserver(M=>{for(const D of M)if(D.type==="childList")for(const P of D.addedNodes)P.tagName==="LINK"&&P.rel==="modulepreload"&&x(P)}).observe(document,{childList:!0,subtree:!0});function v(M){const D={};return M.integrity&&(D.integrity=M.integrity),M.referrerPolicy&&(D.referrerPolicy=M.referrerPolicy),M.crossOrigin==="use-credentials"?D.credentials="include":M.crossOrigin==="anonymous"?D.credentials="omit":D.credentials="same-origin",D}function x(M){if(M.ep)return;M.ep=!0;const D=v(M);fetch(M.href,D)}})();function me(f,i){return class extends f{constructor(...v){super(...v),i(this)}}}const we=me(Array,f=>f.fill(0));let H=1e-6;function ve(f){function i(g=0,m=0){const w=new f(2);return g!==void 0&&(w[0]=g,m!==void 0&&(w[1]=m)),w}const v=i;function x(g,m,w){const t=w??new f(2);return t[0]=g,t[1]=m,t}function M(g,m){const w=m??new f(2);return w[0]=Math.ceil(g[0]),w[1]=Math.ceil(g[1]),w}function D(g,m){const w=m??new f(2);return w[0]=Math.floor(g[0]),w[1]=Math.floor(g[1]),w}function P(g,m){const w=m??new f(2);return w[0]=Math.round(g[0]),w[1]=Math.round(g[1]),w}function z(g,m=0,w=1,t){const l=t??new f(2);return l[0]=Math.min(w,Math.max(m,g[0])),l[1]=Math.min(w,Math.max(m,g[1])),l}function T(g,m,w){const t=w??new f(2);return t[0]=g[0]+m[0],t[1]=g[1]+m[1],t}function k(g,m,w,t){const l=t??new f(2);return l[0]=g[0]+m[0]*w,l[1]=g[1]+m[1]*w,l}function V(g,m){const w=g[0],t=g[1],l=m[0],r=m[1],s=Math.sqrt(w*w+t*t),n=Math.sqrt(l*l+r*r),a=s*n,d=a&&vt(g,m)/a;return Math.acos(d)}function B(g,m,w){const t=w??new f(2);return t[0]=g[0]-m[0],t[1]=g[1]-m[1],t}const N=B;function X(g,m){return Math.abs(g[0]-m[0])<H&&Math.abs(g[1]-m[1])<H}function et(g,m){return g[0]===m[0]&&g[1]===m[1]}function Y(g,m,w,t){const l=t??new f(2);return l[0]=g[0]+w*(m[0]-g[0]),l[1]=g[1]+w*(m[1]-g[1]),l}function ot(g,m,w,t){const l=t??new f(2);return l[0]=g[0]+w[0]*(m[0]-g[0]),l[1]=g[1]+w[1]*(m[1]-g[1]),l}function $(g,m,w){const t=w??new f(2);return t[0]=Math.max(g[0],m[0]),t[1]=Math.max(g[1],m[1]),t}function L(g,m,w){const t=w??new f(2);return t[0]=Math.min(g[0],m[0]),t[1]=Math.min(g[1],m[1]),t}function j(g,m,w){const t=w??new f(2);return t[0]=g[0]*m,t[1]=g[1]*m,t}const rt=j;function at(g,m,w){const t=w??new f(2);return t[0]=g[0]/m,t[1]=g[1]/m,t}function pt(g,m){const w=m??new f(2);return w[0]=1/g[0],w[1]=1/g[1],w}const gt=pt;function wt(g,m,w){const t=w??new f(3),l=g[0]*m[1]-g[1]*m[0];return t[0]=0,t[1]=0,t[2]=l,t}function vt(g,m){return g[0]*m[0]+g[1]*m[1]}function lt(g){const m=g[0],w=g[1];return Math.sqrt(m*m+w*w)}const xt=lt;function Q(g){const m=g[0],w=g[1];return m*m+w*w}const Z=Q;function ut(g,m){const w=g[0]-m[0],t=g[1]-m[1];return Math.sqrt(w*w+t*t)}const C=ut;function q(g,m){const w=g[0]-m[0],t=g[1]-m[1];return w*w+t*t}const W=q;function st(g,m){const w=m??new f(2),t=g[0],l=g[1],r=Math.sqrt(t*t+l*l);return r>1e-5?(w[0]=t/r,w[1]=l/r):(w[0]=0,w[1]=0),w}function Rt(g,m){const w=m??new f(2);return w[0]=-g[0],w[1]=-g[1],w}function J(g,m){const w=m??new f(2);return w[0]=g[0],w[1]=g[1],w}const ct=J;function yt(g,m,w){const t=w??new f(2);return t[0]=g[0]*m[0],t[1]=g[1]*m[1],t}const Et=yt;function it(g,m,w){const t=w??new f(2);return t[0]=g[0]/m[0],t[1]=g[1]/m[1],t}const bt=it;function Mt(g=1,m){const w=m??new f(2),t=Math.random()*2*Math.PI;return w[0]=Math.cos(t)*g,w[1]=Math.sin(t)*g,w}function b(g){const m=g??new f(2);return m[0]=0,m[1]=0,m}function A(g,m,w){const t=w??new f(2),l=g[0],r=g[1];return t[0]=l*m[0]+r*m[4]+m[12],t[1]=l*m[1]+r*m[5]+m[13],t}function p(g,m,w){const t=w??new f(2),l=g[0],r=g[1];return t[0]=m[0]*l+m[4]*r+m[8],t[1]=m[1]*l+m[5]*r+m[9],t}function e(g,m,w,t){const l=t??new f(2),r=g[0]-m[0],s=g[1]-m[1],n=Math.sin(w),a=Math.cos(w);return l[0]=r*a-s*n+m[0],l[1]=r*n+s*a+m[1],l}function c(g,m,w){const t=w??new f(2);return st(g,t),j(t,m,t)}function o(g,m,w){const t=w??new f(2);return lt(g)>m?c(g,m,t):J(g,t)}function u(g,m,w){const t=w??new f(2);return Y(g,m,.5,t)}return{create:i,fromValues:v,set:x,ceil:M,floor:D,round:P,clamp:z,add:T,addScaled:k,angle:V,subtract:B,sub:N,equalsApproximately:X,equals:et,lerp:Y,lerpV:ot,max:$,min:L,mulScalar:j,scale:rt,divScalar:at,inverse:pt,invert:gt,cross:wt,dot:vt,length:lt,len:xt,lengthSq:Q,lenSq:Z,distance:ut,dist:C,distanceSq:q,distSq:W,normalize:st,negate:Rt,copy:J,clone:ct,multiply:yt,mul:Et,divide:it,div:bt,random:Mt,zero:b,transformMat4:A,transformMat3:p,rotate:e,setLength:c,truncate:o,midpoint:u}}const ae=new Map;function ge(f){let i=ae.get(f);return i||(i=ve(f),ae.set(f,i)),i}function xe(f){function i(n,a,d){const h=new f(3);return n!==void 0&&(h[0]=n,a!==void 0&&(h[1]=a,d!==void 0&&(h[2]=d))),h}const v=i;function x(n,a,d,h){const y=h??new f(3);return y[0]=n,y[1]=a,y[2]=d,y}function M(n,a){const d=a??new f(3);return d[0]=Math.ceil(n[0]),d[1]=Math.ceil(n[1]),d[2]=Math.ceil(n[2]),d}function D(n,a){const d=a??new f(3);return d[0]=Math.floor(n[0]),d[1]=Math.floor(n[1]),d[2]=Math.floor(n[2]),d}function P(n,a){const d=a??new f(3);return d[0]=Math.round(n[0]),d[1]=Math.round(n[1]),d[2]=Math.round(n[2]),d}function z(n,a=0,d=1,h){const y=h??new f(3);return y[0]=Math.min(d,Math.max(a,n[0])),y[1]=Math.min(d,Math.max(a,n[1])),y[2]=Math.min(d,Math.max(a,n[2])),y}function T(n,a,d){const h=d??new f(3);return h[0]=n[0]+a[0],h[1]=n[1]+a[1],h[2]=n[2]+a[2],h}function k(n,a,d,h){const y=h??new f(3);return y[0]=n[0]+a[0]*d,y[1]=n[1]+a[1]*d,y[2]=n[2]+a[2]*d,y}function V(n,a){const d=n[0],h=n[1],y=n[2],S=a[0],_=a[1],E=a[2],U=Math.sqrt(d*d+h*h+y*y),R=Math.sqrt(S*S+_*_+E*E),I=U*R,G=I&&vt(n,a)/I;return Math.acos(G)}function B(n,a,d){const h=d??new f(3);return h[0]=n[0]-a[0],h[1]=n[1]-a[1],h[2]=n[2]-a[2],h}const N=B;function X(n,a){return Math.abs(n[0]-a[0])<H&&Math.abs(n[1]-a[1])<H&&Math.abs(n[2]-a[2])<H}function et(n,a){return n[0]===a[0]&&n[1]===a[1]&&n[2]===a[2]}function Y(n,a,d,h){const y=h??new f(3);return y[0]=n[0]+d*(a[0]-n[0]),y[1]=n[1]+d*(a[1]-n[1]),y[2]=n[2]+d*(a[2]-n[2]),y}function ot(n,a,d,h){const y=h??new f(3);return y[0]=n[0]+d[0]*(a[0]-n[0]),y[1]=n[1]+d[1]*(a[1]-n[1]),y[2]=n[2]+d[2]*(a[2]-n[2]),y}function $(n,a,d){const h=d??new f(3);return h[0]=Math.max(n[0],a[0]),h[1]=Math.max(n[1],a[1]),h[2]=Math.max(n[2],a[2]),h}function L(n,a,d){const h=d??new f(3);return h[0]=Math.min(n[0],a[0]),h[1]=Math.min(n[1],a[1]),h[2]=Math.min(n[2],a[2]),h}function j(n,a,d){const h=d??new f(3);return h[0]=n[0]*a,h[1]=n[1]*a,h[2]=n[2]*a,h}const rt=j;function at(n,a,d){const h=d??new f(3);return h[0]=n[0]/a,h[1]=n[1]/a,h[2]=n[2]/a,h}function pt(n,a){const d=a??new f(3);return d[0]=1/n[0],d[1]=1/n[1],d[2]=1/n[2],d}const gt=pt;function wt(n,a,d){const h=d??new f(3),y=n[2]*a[0]-n[0]*a[2],S=n[0]*a[1]-n[1]*a[0];return h[0]=n[1]*a[2]-n[2]*a[1],h[1]=y,h[2]=S,h}function vt(n,a){return n[0]*a[0]+n[1]*a[1]+n[2]*a[2]}function lt(n){const a=n[0],d=n[1],h=n[2];return Math.sqrt(a*a+d*d+h*h)}const xt=lt;function Q(n){const a=n[0],d=n[1],h=n[2];return a*a+d*d+h*h}const Z=Q;function ut(n,a){const d=n[0]-a[0],h=n[1]-a[1],y=n[2]-a[2];return Math.sqrt(d*d+h*h+y*y)}const C=ut;function q(n,a){const d=n[0]-a[0],h=n[1]-a[1],y=n[2]-a[2];return d*d+h*h+y*y}const W=q;function st(n,a){const d=a??new f(3),h=n[0],y=n[1],S=n[2],_=Math.sqrt(h*h+y*y+S*S);return _>1e-5?(d[0]=h/_,d[1]=y/_,d[2]=S/_):(d[0]=0,d[1]=0,d[2]=0),d}function Rt(n,a){const d=a??new f(3);return d[0]=-n[0],d[1]=-n[1],d[2]=-n[2],d}function J(n,a){const d=a??new f(3);return d[0]=n[0],d[1]=n[1],d[2]=n[2],d}const ct=J;function yt(n,a,d){const h=d??new f(3);return h[0]=n[0]*a[0],h[1]=n[1]*a[1],h[2]=n[2]*a[2],h}const Et=yt;function it(n,a,d){const h=d??new f(3);return h[0]=n[0]/a[0],h[1]=n[1]/a[1],h[2]=n[2]/a[2],h}const bt=it;function Mt(n=1,a){const d=a??new f(3),h=Math.random()*2*Math.PI,y=Math.random()*2-1,S=Math.sqrt(1-y*y)*n;return d[0]=Math.cos(h)*S,d[1]=Math.sin(h)*S,d[2]=y*n,d}function b(n){const a=n??new f(3);return a[0]=0,a[1]=0,a[2]=0,a}function A(n,a,d){const h=d??new f(3),y=n[0],S=n[1],_=n[2],E=a[3]*y+a[7]*S+a[11]*_+a[15]||1;return h[0]=(a[0]*y+a[4]*S+a[8]*_+a[12])/E,h[1]=(a[1]*y+a[5]*S+a[9]*_+a[13])/E,h[2]=(a[2]*y+a[6]*S+a[10]*_+a[14])/E,h}function p(n,a,d){const h=d??new f(3),y=n[0],S=n[1],_=n[2];return h[0]=y*a[0]+S*a[4]+_*a[8],h[1]=y*a[1]+S*a[5]+_*a[9],h[2]=y*a[2]+S*a[6]+_*a[10],h}function e(n,a,d){const h=d??new f(3),y=n[0],S=n[1],_=n[2];return h[0]=y*a[0]+S*a[4]+_*a[8],h[1]=y*a[1]+S*a[5]+_*a[9],h[2]=y*a[2]+S*a[6]+_*a[10],h}function c(n,a,d){const h=d??new f(3),y=a[0],S=a[1],_=a[2],E=a[3]*2,U=n[0],R=n[1],I=n[2],G=S*I-_*R,O=_*U-y*I,F=y*R-S*U;return h[0]=U+G*E+(S*F-_*O)*2,h[1]=R+O*E+(_*G-y*F)*2,h[2]=I+F*E+(y*O-S*G)*2,h}function o(n,a){const d=a??new f(3);return d[0]=n[12],d[1]=n[13],d[2]=n[14],d}function u(n,a,d){const h=d??new f(3),y=a*4;return h[0]=n[y+0],h[1]=n[y+1],h[2]=n[y+2],h}function g(n,a){const d=a??new f(3),h=n[0],y=n[1],S=n[2],_=n[4],E=n[5],U=n[6],R=n[8],I=n[9],G=n[10];return d[0]=Math.sqrt(h*h+y*y+S*S),d[1]=Math.sqrt(_*_+E*E+U*U),d[2]=Math.sqrt(R*R+I*I+G*G),d}function m(n,a,d,h){const y=h??new f(3),S=[],_=[];return S[0]=n[0]-a[0],S[1]=n[1]-a[1],S[2]=n[2]-a[2],_[0]=S[0],_[1]=S[1]*Math.cos(d)-S[2]*Math.sin(d),_[2]=S[1]*Math.sin(d)+S[2]*Math.cos(d),y[0]=_[0]+a[0],y[1]=_[1]+a[1],y[2]=_[2]+a[2],y}function w(n,a,d,h){const y=h??new f(3),S=[],_=[];return S[0]=n[0]-a[0],S[1]=n[1]-a[1],S[2]=n[2]-a[2],_[0]=S[2]*Math.sin(d)+S[0]*Math.cos(d),_[1]=S[1],_[2]=S[2]*Math.cos(d)-S[0]*Math.sin(d),y[0]=_[0]+a[0],y[1]=_[1]+a[1],y[2]=_[2]+a[2],y}function t(n,a,d,h){const y=h??new f(3),S=[],_=[];return S[0]=n[0]-a[0],S[1]=n[1]-a[1],S[2]=n[2]-a[2],_[0]=S[0]*Math.cos(d)-S[1]*Math.sin(d),_[1]=S[0]*Math.sin(d)+S[1]*Math.cos(d),_[2]=S[2],y[0]=_[0]+a[0],y[1]=_[1]+a[1],y[2]=_[2]+a[2],y}function l(n,a,d){const h=d??new f(3);return st(n,h),j(h,a,h)}function r(n,a,d){const h=d??new f(3);return lt(n)>a?l(n,a,h):J(n,h)}function s(n,a,d){const h=d??new f(3);return Y(n,a,.5,h)}return{create:i,fromValues:v,set:x,ceil:M,floor:D,round:P,clamp:z,add:T,addScaled:k,angle:V,subtract:B,sub:N,equalsApproximately:X,equals:et,lerp:Y,lerpV:ot,max:$,min:L,mulScalar:j,scale:rt,divScalar:at,inverse:pt,invert:gt,cross:wt,dot:vt,length:lt,len:xt,lengthSq:Q,lenSq:Z,distance:ut,dist:C,distanceSq:q,distSq:W,normalize:st,negate:Rt,copy:J,clone:ct,multiply:yt,mul:Et,divide:it,div:bt,random:Mt,zero:b,transformMat4:A,transformMat4Upper3x3:p,transformMat3:e,transformQuat:c,getTranslation:o,getAxis:u,getScaling:g,rotateX:m,rotateY:w,rotateZ:t,setLength:l,truncate:r,midpoint:s}}const ce=new Map;function Kt(f){let i=ce.get(f);return i||(i=xe(f),ce.set(f,i)),i}function ye(f){const i=ge(f),v=Kt(f);function x(e,c,o,u,g,m,w,t,l){const r=new f(12);return r[3]=0,r[7]=0,r[11]=0,e!==void 0&&(r[0]=e,c!==void 0&&(r[1]=c,o!==void 0&&(r[2]=o,u!==void 0&&(r[4]=u,g!==void 0&&(r[5]=g,m!==void 0&&(r[6]=m,w!==void 0&&(r[8]=w,t!==void 0&&(r[9]=t,l!==void 0&&(r[10]=l))))))))),r}function M(e,c,o,u,g,m,w,t,l,r){const s=r??new f(12);return s[0]=e,s[1]=c,s[2]=o,s[3]=0,s[4]=u,s[5]=g,s[6]=m,s[7]=0,s[8]=w,s[9]=t,s[10]=l,s[11]=0,s}function D(e,c){const o=c??new f(12);return o[0]=e[0],o[1]=e[1],o[2]=e[2],o[3]=0,o[4]=e[4],o[5]=e[5],o[6]=e[6],o[7]=0,o[8]=e[8],o[9]=e[9],o[10]=e[10],o[11]=0,o}function P(e,c){const o=c??new f(12),u=e[0],g=e[1],m=e[2],w=e[3],t=u+u,l=g+g,r=m+m,s=u*t,n=g*t,a=g*l,d=m*t,h=m*l,y=m*r,S=w*t,_=w*l,E=w*r;return o[0]=1-a-y,o[1]=n+E,o[2]=d-_,o[3]=0,o[4]=n-E,o[5]=1-s-y,o[6]=h+S,o[7]=0,o[8]=d+_,o[9]=h-S,o[10]=1-s-a,o[11]=0,o}function z(e,c){const o=c??new f(12);return o[0]=-e[0],o[1]=-e[1],o[2]=-e[2],o[4]=-e[4],o[5]=-e[5],o[6]=-e[6],o[8]=-e[8],o[9]=-e[9],o[10]=-e[10],o}function T(e,c,o){const u=o??new f(12);return u[0]=e[0]*c,u[1]=e[1]*c,u[2]=e[2]*c,u[4]=e[4]*c,u[5]=e[5]*c,u[6]=e[6]*c,u[8]=e[8]*c,u[9]=e[9]*c,u[10]=e[10]*c,u}const k=T;function V(e,c,o){const u=o??new f(12);return u[0]=e[0]+c[0],u[1]=e[1]+c[1],u[2]=e[2]+c[2],u[4]=e[4]+c[4],u[5]=e[5]+c[5],u[6]=e[6]+c[6],u[8]=e[8]+c[8],u[9]=e[9]+c[9],u[10]=e[10]+c[10],u}function B(e,c){const o=c??new f(12);return o[0]=e[0],o[1]=e[1],o[2]=e[2],o[4]=e[4],o[5]=e[5],o[6]=e[6],o[8]=e[8],o[9]=e[9],o[10]=e[10],o}const N=B;function X(e,c){return Math.abs(e[0]-c[0])<H&&Math.abs(e[1]-c[1])<H&&Math.abs(e[2]-c[2])<H&&Math.abs(e[4]-c[4])<H&&Math.abs(e[5]-c[5])<H&&Math.abs(e[6]-c[6])<H&&Math.abs(e[8]-c[8])<H&&Math.abs(e[9]-c[9])<H&&Math.abs(e[10]-c[10])<H}function et(e,c){return e[0]===c[0]&&e[1]===c[1]&&e[2]===c[2]&&e[4]===c[4]&&e[5]===c[5]&&e[6]===c[6]&&e[8]===c[8]&&e[9]===c[9]&&e[10]===c[10]}function Y(e){const c=e??new f(12);return c[0]=1,c[1]=0,c[2]=0,c[4]=0,c[5]=1,c[6]=0,c[8]=0,c[9]=0,c[10]=1,c}function ot(e,c){const o=c??new f(12);if(o===e){let a;return a=e[1],e[1]=e[4],e[4]=a,a=e[2],e[2]=e[8],e[8]=a,a=e[6],e[6]=e[9],e[9]=a,o}const u=e[0],g=e[1],m=e[2],w=e[4],t=e[5],l=e[6],r=e[8],s=e[9],n=e[10];return o[0]=u,o[1]=w,o[2]=r,o[4]=g,o[5]=t,o[6]=s,o[8]=m,o[9]=l,o[10]=n,o}function $(e,c){const o=c??new f(12),u=e[0],g=e[1],m=e[2],w=e[4],t=e[5],l=e[6],r=e[8],s=e[9],n=e[10],a=n*t-l*s,d=-n*w+l*r,h=s*w-t*r,y=1/(u*a+g*d+m*h);return o[0]=a*y,o[1]=(-n*g+m*s)*y,o[2]=(l*g-m*t)*y,o[4]=d*y,o[5]=(n*u-m*r)*y,o[6]=(-l*u+m*w)*y,o[8]=h*y,o[9]=(-s*u+g*r)*y,o[10]=(t*u-g*w)*y,o}function L(e){const c=e[0],o=e[1],u=e[2],g=e[4],m=e[5],w=e[6],t=e[8],l=e[9],r=e[10];return c*(m*r-l*w)-g*(o*r-l*u)+t*(o*w-m*u)}const j=$;function rt(e,c,o){const u=o??new f(12),g=e[0],m=e[1],w=e[2],t=e[4],l=e[5],r=e[6],s=e[8],n=e[9],a=e[10],d=c[0],h=c[1],y=c[2],S=c[4],_=c[5],E=c[6],U=c[8],R=c[9],I=c[10];return u[0]=g*d+t*h+s*y,u[1]=m*d+l*h+n*y,u[2]=w*d+r*h+a*y,u[4]=g*S+t*_+s*E,u[5]=m*S+l*_+n*E,u[6]=w*S+r*_+a*E,u[8]=g*U+t*R+s*I,u[9]=m*U+l*R+n*I,u[10]=w*U+r*R+a*I,u}const at=rt;function pt(e,c,o){const u=o??Y();return e!==u&&(u[0]=e[0],u[1]=e[1],u[2]=e[2],u[4]=e[4],u[5]=e[5],u[6]=e[6]),u[8]=c[0],u[9]=c[1],u[10]=1,u}function gt(e,c){const o=c??i.create();return o[0]=e[8],o[1]=e[9],o}function wt(e,c,o){const u=o??i.create(),g=c*4;return u[0]=e[g+0],u[1]=e[g+1],u}function vt(e,c,o,u){const g=u===e?e:B(e,u),m=o*4;return g[m+0]=c[0],g[m+1]=c[1],g}function lt(e,c){const o=c??i.create(),u=e[0],g=e[1],m=e[4],w=e[5];return o[0]=Math.sqrt(u*u+g*g),o[1]=Math.sqrt(m*m+w*w),o}function xt(e,c){const o=c??v.create(),u=e[0],g=e[1],m=e[2],w=e[4],t=e[5],l=e[6],r=e[8],s=e[9],n=e[10];return o[0]=Math.sqrt(u*u+g*g+m*m),o[1]=Math.sqrt(w*w+t*t+l*l),o[2]=Math.sqrt(r*r+s*s+n*n),o}function Q(e,c){const o=c??new f(12);return o[0]=1,o[1]=0,o[2]=0,o[4]=0,o[5]=1,o[6]=0,o[8]=e[0],o[9]=e[1],o[10]=1,o}function Z(e,c,o){const u=o??new f(12),g=c[0],m=c[1],w=e[0],t=e[1],l=e[2],r=e[4],s=e[5],n=e[6],a=e[8],d=e[9],h=e[10];return e!==u&&(u[0]=w,u[1]=t,u[2]=l,u[4]=r,u[5]=s,u[6]=n),u[8]=w*g+r*m+a,u[9]=t*g+s*m+d,u[10]=l*g+n*m+h,u}function ut(e,c){const o=c??new f(12),u=Math.cos(e),g=Math.sin(e);return o[0]=u,o[1]=g,o[2]=0,o[4]=-g,o[5]=u,o[6]=0,o[8]=0,o[9]=0,o[10]=1,o}function C(e,c,o){const u=o??new f(12),g=e[0],m=e[1],w=e[2],t=e[4],l=e[5],r=e[6],s=Math.cos(c),n=Math.sin(c);return u[0]=s*g+n*t,u[1]=s*m+n*l,u[2]=s*w+n*r,u[4]=s*t-n*g,u[5]=s*l-n*m,u[6]=s*r-n*w,e!==u&&(u[8]=e[8],u[9]=e[9],u[10]=e[10]),u}function q(e,c){const o=c??new f(12),u=Math.cos(e),g=Math.sin(e);return o[0]=1,o[1]=0,o[2]=0,o[4]=0,o[5]=u,o[6]=g,o[8]=0,o[9]=-g,o[10]=u,o}function W(e,c,o){const u=o??new f(12),g=e[4],m=e[5],w=e[6],t=e[8],l=e[9],r=e[10],s=Math.cos(c),n=Math.sin(c);return u[4]=s*g+n*t,u[5]=s*m+n*l,u[6]=s*w+n*r,u[8]=s*t-n*g,u[9]=s*l-n*m,u[10]=s*r-n*w,e!==u&&(u[0]=e[0],u[1]=e[1],u[2]=e[2]),u}function st(e,c){const o=c??new f(12),u=Math.cos(e),g=Math.sin(e);return o[0]=u,o[1]=0,o[2]=-g,o[4]=0,o[5]=1,o[6]=0,o[8]=g,o[9]=0,o[10]=u,o}function Rt(e,c,o){const u=o??new f(12),g=e[0],m=e[1],w=e[2],t=e[8],l=e[9],r=e[10],s=Math.cos(c),n=Math.sin(c);return u[0]=s*g-n*t,u[1]=s*m-n*l,u[2]=s*w-n*r,u[8]=s*t+n*g,u[9]=s*l+n*m,u[10]=s*r+n*w,e!==u&&(u[4]=e[4],u[5]=e[5],u[6]=e[6]),u}const J=ut,ct=C;function yt(e,c){const o=c??new f(12);return o[0]=e[0],o[1]=0,o[2]=0,o[4]=0,o[5]=e[1],o[6]=0,o[8]=0,o[9]=0,o[10]=1,o}function Et(e,c,o){const u=o??new f(12),g=c[0],m=c[1];return u[0]=g*e[0],u[1]=g*e[1],u[2]=g*e[2],u[4]=m*e[4],u[5]=m*e[5],u[6]=m*e[6],e!==u&&(u[8]=e[8],u[9]=e[9],u[10]=e[10]),u}function it(e,c){const o=c??new f(12);return o[0]=e[0],o[1]=0,o[2]=0,o[4]=0,o[5]=e[1],o[6]=0,o[8]=0,o[9]=0,o[10]=e[2],o}function bt(e,c,o){const u=o??new f(12),g=c[0],m=c[1],w=c[2];return u[0]=g*e[0],u[1]=g*e[1],u[2]=g*e[2],u[4]=m*e[4],u[5]=m*e[5],u[6]=m*e[6],u[8]=w*e[8],u[9]=w*e[9],u[10]=w*e[10],u}function Mt(e,c){const o=c??new f(12);return o[0]=e,o[1]=0,o[2]=0,o[4]=0,o[5]=e,o[6]=0,o[8]=0,o[9]=0,o[10]=1,o}function b(e,c,o){const u=o??new f(12);return u[0]=c*e[0],u[1]=c*e[1],u[2]=c*e[2],u[4]=c*e[4],u[5]=c*e[5],u[6]=c*e[6],e!==u&&(u[8]=e[8],u[9]=e[9],u[10]=e[10]),u}function A(e,c){const o=c??new f(12);return o[0]=e,o[1]=0,o[2]=0,o[4]=0,o[5]=e,o[6]=0,o[8]=0,o[9]=0,o[10]=e,o}function p(e,c,o){const u=o??new f(12);return u[0]=c*e[0],u[1]=c*e[1],u[2]=c*e[2],u[4]=c*e[4],u[5]=c*e[5],u[6]=c*e[6],u[8]=c*e[8],u[9]=c*e[9],u[10]=c*e[10],u}return{add:V,clone:N,copy:B,create:x,determinant:L,equals:et,equalsApproximately:X,fromMat4:D,fromQuat:P,get3DScaling:xt,getAxis:wt,getScaling:lt,getTranslation:gt,identity:Y,inverse:$,invert:j,mul:at,mulScalar:k,multiply:rt,multiplyScalar:T,negate:z,rotate:C,rotateX:W,rotateY:Rt,rotateZ:ct,rotation:ut,rotationX:q,rotationY:st,rotationZ:J,scale:Et,scale3D:bt,scaling:yt,scaling3D:it,set:M,setAxis:vt,setTranslation:pt,translate:Z,translation:Q,transpose:ot,uniformScale:b,uniformScale3D:p,uniformScaling:Mt,uniformScaling3D:A}}const le=new Map;function be(f){let i=le.get(f);return i||(i=ye(f),le.set(f,i)),i}function Me(f){const i=Kt(f);function v(t,l,r,s,n,a,d,h,y,S,_,E,U,R,I,G){const O=new f(16);return t!==void 0&&(O[0]=t,l!==void 0&&(O[1]=l,r!==void 0&&(O[2]=r,s!==void 0&&(O[3]=s,n!==void 0&&(O[4]=n,a!==void 0&&(O[5]=a,d!==void 0&&(O[6]=d,h!==void 0&&(O[7]=h,y!==void 0&&(O[8]=y,S!==void 0&&(O[9]=S,_!==void 0&&(O[10]=_,E!==void 0&&(O[11]=E,U!==void 0&&(O[12]=U,R!==void 0&&(O[13]=R,I!==void 0&&(O[14]=I,G!==void 0&&(O[15]=G)))))))))))))))),O}function x(t,l,r,s,n,a,d,h,y,S,_,E,U,R,I,G,O){const F=O??new f(16);return F[0]=t,F[1]=l,F[2]=r,F[3]=s,F[4]=n,F[5]=a,F[6]=d,F[7]=h,F[8]=y,F[9]=S,F[10]=_,F[11]=E,F[12]=U,F[13]=R,F[14]=I,F[15]=G,F}function M(t,l){const r=l??new f(16);return r[0]=t[0],r[1]=t[1],r[2]=t[2],r[3]=0,r[4]=t[4],r[5]=t[5],r[6]=t[6],r[7]=0,r[8]=t[8],r[9]=t[9],r[10]=t[10],r[11]=0,r[12]=0,r[13]=0,r[14]=0,r[15]=1,r}function D(t,l){const r=l??new f(16),s=t[0],n=t[1],a=t[2],d=t[3],h=s+s,y=n+n,S=a+a,_=s*h,E=n*h,U=n*y,R=a*h,I=a*y,G=a*S,O=d*h,F=d*y,tt=d*S;return r[0]=1-U-G,r[1]=E+tt,r[2]=R-F,r[3]=0,r[4]=E-tt,r[5]=1-_-G,r[6]=I+O,r[7]=0,r[8]=R+F,r[9]=I-O,r[10]=1-_-U,r[11]=0,r[12]=0,r[13]=0,r[14]=0,r[15]=1,r}function P(t,l){const r=l??new f(16);return r[0]=-t[0],r[1]=-t[1],r[2]=-t[2],r[3]=-t[3],r[4]=-t[4],r[5]=-t[5],r[6]=-t[6],r[7]=-t[7],r[8]=-t[8],r[9]=-t[9],r[10]=-t[10],r[11]=-t[11],r[12]=-t[12],r[13]=-t[13],r[14]=-t[14],r[15]=-t[15],r}function z(t,l,r){const s=r??new f(16);return s[0]=t[0]+l[0],s[1]=t[1]+l[1],s[2]=t[2]+l[2],s[3]=t[3]+l[3],s[4]=t[4]+l[4],s[5]=t[5]+l[5],s[6]=t[6]+l[6],s[7]=t[7]+l[7],s[8]=t[8]+l[8],s[9]=t[9]+l[9],s[10]=t[10]+l[10],s[11]=t[11]+l[11],s[12]=t[12]+l[12],s[13]=t[13]+l[13],s[14]=t[14]+l[14],s[15]=t[15]+l[15],s}function T(t,l,r){const s=r??new f(16);return s[0]=t[0]*l,s[1]=t[1]*l,s[2]=t[2]*l,s[3]=t[3]*l,s[4]=t[4]*l,s[5]=t[5]*l,s[6]=t[6]*l,s[7]=t[7]*l,s[8]=t[8]*l,s[9]=t[9]*l,s[10]=t[10]*l,s[11]=t[11]*l,s[12]=t[12]*l,s[13]=t[13]*l,s[14]=t[14]*l,s[15]=t[15]*l,s}const k=T;function V(t,l){const r=l??new f(16);return r[0]=t[0],r[1]=t[1],r[2]=t[2],r[3]=t[3],r[4]=t[4],r[5]=t[5],r[6]=t[6],r[7]=t[7],r[8]=t[8],r[9]=t[9],r[10]=t[10],r[11]=t[11],r[12]=t[12],r[13]=t[13],r[14]=t[14],r[15]=t[15],r}const B=V;function N(t,l){return Math.abs(t[0]-l[0])<H&&Math.abs(t[1]-l[1])<H&&Math.abs(t[2]-l[2])<H&&Math.abs(t[3]-l[3])<H&&Math.abs(t[4]-l[4])<H&&Math.abs(t[5]-l[5])<H&&Math.abs(t[6]-l[6])<H&&Math.abs(t[7]-l[7])<H&&Math.abs(t[8]-l[8])<H&&Math.abs(t[9]-l[9])<H&&Math.abs(t[10]-l[10])<H&&Math.abs(t[11]-l[11])<H&&Math.abs(t[12]-l[12])<H&&Math.abs(t[13]-l[13])<H&&Math.abs(t[14]-l[14])<H&&Math.abs(t[15]-l[15])<H}function X(t,l){return t[0]===l[0]&&t[1]===l[1]&&t[2]===l[2]&&t[3]===l[3]&&t[4]===l[4]&&t[5]===l[5]&&t[6]===l[6]&&t[7]===l[7]&&t[8]===l[8]&&t[9]===l[9]&&t[10]===l[10]&&t[11]===l[11]&&t[12]===l[12]&&t[13]===l[13]&&t[14]===l[14]&&t[15]===l[15]}function et(t){const l=t??new f(16);return l[0]=1,l[1]=0,l[2]=0,l[3]=0,l[4]=0,l[5]=1,l[6]=0,l[7]=0,l[8]=0,l[9]=0,l[10]=1,l[11]=0,l[12]=0,l[13]=0,l[14]=0,l[15]=1,l}function Y(t,l){const r=l??new f(16);if(r===t){let K;return K=t[1],t[1]=t[4],t[4]=K,K=t[2],t[2]=t[8],t[8]=K,K=t[3],t[3]=t[12],t[12]=K,K=t[6],t[6]=t[9],t[9]=K,K=t[7],t[7]=t[13],t[13]=K,K=t[11],t[11]=t[14],t[14]=K,r}const s=t[0],n=t[1],a=t[2],d=t[3],h=t[4],y=t[5],S=t[6],_=t[7],E=t[8],U=t[9],R=t[10],I=t[11],G=t[12],O=t[13],F=t[14],tt=t[15];return r[0]=s,r[1]=h,r[2]=E,r[3]=G,r[4]=n,r[5]=y,r[6]=U,r[7]=O,r[8]=a,r[9]=S,r[10]=R,r[11]=F,r[12]=d,r[13]=_,r[14]=I,r[15]=tt,r}function ot(t,l){const r=l??new f(16),s=t[0],n=t[1],a=t[2],d=t[3],h=t[4],y=t[5],S=t[6],_=t[7],E=t[8],U=t[9],R=t[10],I=t[11],G=t[12],O=t[13],F=t[14],tt=t[15],K=R*tt,ht=F*I,ft=S*tt,dt=F*_,mt=S*I,St=R*_,_t=a*tt,At=F*d,Dt=a*I,Pt=R*d,Tt=a*_,zt=S*d,Lt=E*O,Bt=G*U,$t=h*O,It=G*y,Ot=h*U,Gt=E*y,qt=s*O,Nt=G*n,Ht=s*U,jt=E*n,Wt=s*y,Xt=h*n,ie=K*y+dt*U+mt*O-(ht*y+ft*U+St*O),re=ht*n+_t*U+Pt*O-(K*n+At*U+Dt*O),se=ft*n+At*y+Tt*O-(dt*n+_t*y+zt*O),oe=St*n+Dt*y+zt*U-(mt*n+Pt*y+Tt*U),Ut=1/(s*ie+h*re+E*se+G*oe);return r[0]=Ut*ie,r[1]=Ut*re,r[2]=Ut*se,r[3]=Ut*oe,r[4]=Ut*(ht*h+ft*E+St*G-(K*h+dt*E+mt*G)),r[5]=Ut*(K*s+At*E+Dt*G-(ht*s+_t*E+Pt*G)),r[6]=Ut*(dt*s+_t*h+zt*G-(ft*s+At*h+Tt*G)),r[7]=Ut*(mt*s+Pt*h+Tt*E-(St*s+Dt*h+zt*E)),r[8]=Ut*(Lt*_+It*I+Ot*tt-(Bt*_+$t*I+Gt*tt)),r[9]=Ut*(Bt*d+qt*I+jt*tt-(Lt*d+Nt*I+Ht*tt)),r[10]=Ut*($t*d+Nt*_+Wt*tt-(It*d+qt*_+Xt*tt)),r[11]=Ut*(Gt*d+Ht*_+Xt*I-(Ot*d+jt*_+Wt*I)),r[12]=Ut*($t*R+Gt*F+Bt*S-(Ot*F+Lt*S+It*R)),r[13]=Ut*(Ht*F+Lt*a+Nt*R-(qt*R+jt*F+Bt*a)),r[14]=Ut*(qt*S+Xt*F+It*a-(Wt*F+$t*a+Nt*S)),r[15]=Ut*(Wt*R+Ot*a+jt*S-(Ht*S+Xt*R+Gt*a)),r}function $(t){const l=t[0],r=t[1],s=t[2],n=t[3],a=t[4],d=t[5],h=t[6],y=t[7],S=t[8],_=t[9],E=t[10],U=t[11],R=t[12],I=t[13],G=t[14],O=t[15],F=E*O,tt=G*U,K=h*O,ht=G*y,ft=h*U,dt=E*y,mt=s*O,St=G*n,_t=s*U,At=E*n,Dt=s*y,Pt=h*n,Tt=F*d+ht*_+ft*I-(tt*d+K*_+dt*I),zt=tt*r+mt*_+At*I-(F*r+St*_+_t*I),Lt=K*r+St*d+Dt*I-(ht*r+mt*d+Pt*I),Bt=dt*r+_t*d+Pt*_-(ft*r+At*d+Dt*_);return l*Tt+a*zt+S*Lt+R*Bt}const L=ot;function j(t,l,r){const s=r??new f(16),n=t[0],a=t[1],d=t[2],h=t[3],y=t[4],S=t[5],_=t[6],E=t[7],U=t[8],R=t[9],I=t[10],G=t[11],O=t[12],F=t[13],tt=t[14],K=t[15],ht=l[0],ft=l[1],dt=l[2],mt=l[3],St=l[4],_t=l[5],At=l[6],Dt=l[7],Pt=l[8],Tt=l[9],zt=l[10],Lt=l[11],Bt=l[12],$t=l[13],It=l[14],Ot=l[15];return s[0]=n*ht+y*ft+U*dt+O*mt,s[1]=a*ht+S*ft+R*dt+F*mt,s[2]=d*ht+_*ft+I*dt+tt*mt,s[3]=h*ht+E*ft+G*dt+K*mt,s[4]=n*St+y*_t+U*At+O*Dt,s[5]=a*St+S*_t+R*At+F*Dt,s[6]=d*St+_*_t+I*At+tt*Dt,s[7]=h*St+E*_t+G*At+K*Dt,s[8]=n*Pt+y*Tt+U*zt+O*Lt,s[9]=a*Pt+S*Tt+R*zt+F*Lt,s[10]=d*Pt+_*Tt+I*zt+tt*Lt,s[11]=h*Pt+E*Tt+G*zt+K*Lt,s[12]=n*Bt+y*$t+U*It+O*Ot,s[13]=a*Bt+S*$t+R*It+F*Ot,s[14]=d*Bt+_*$t+I*It+tt*Ot,s[15]=h*Bt+E*$t+G*It+K*Ot,s}const rt=j;function at(t,l,r){const s=r??et();return t!==s&&(s[0]=t[0],s[1]=t[1],s[2]=t[2],s[3]=t[3],s[4]=t[4],s[5]=t[5],s[6]=t[6],s[7]=t[7],s[8]=t[8],s[9]=t[9],s[10]=t[10],s[11]=t[11]),s[12]=l[0],s[13]=l[1],s[14]=l[2],s[15]=1,s}function pt(t,l){const r=l??i.create();return r[0]=t[12],r[1]=t[13],r[2]=t[14],r}function gt(t,l,r){const s=r??i.create(),n=l*4;return s[0]=t[n+0],s[1]=t[n+1],s[2]=t[n+2],s}function wt(t,l,r,s){const n=s===t?s:V(t,s),a=r*4;return n[a+0]=l[0],n[a+1]=l[1],n[a+2]=l[2],n}function vt(t,l){const r=l??i.create(),s=t[0],n=t[1],a=t[2],d=t[4],h=t[5],y=t[6],S=t[8],_=t[9],E=t[10];return r[0]=Math.sqrt(s*s+n*n+a*a),r[1]=Math.sqrt(d*d+h*h+y*y),r[2]=Math.sqrt(S*S+_*_+E*E),r}function lt(t,l,r,s,n){const a=n??new f(16),d=Math.tan(Math.PI*.5-.5*t);if(a[0]=d/l,a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=d,a[6]=0,a[7]=0,a[8]=0,a[9]=0,a[11]=-1,a[12]=0,a[13]=0,a[15]=0,Number.isFinite(s)){const h=1/(r-s);a[10]=s*h,a[14]=s*r*h}else a[10]=-1,a[14]=-r;return a}function xt(t,l,r,s=1/0,n){const a=n??new f(16),d=1/Math.tan(t*.5);if(a[0]=d/l,a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=d,a[6]=0,a[7]=0,a[8]=0,a[9]=0,a[11]=-1,a[12]=0,a[13]=0,a[15]=0,s===1/0)a[10]=0,a[14]=r;else{const h=1/(s-r);a[10]=r*h,a[14]=s*r*h}return a}function Q(t,l,r,s,n,a,d){const h=d??new f(16);return h[0]=2/(l-t),h[1]=0,h[2]=0,h[3]=0,h[4]=0,h[5]=2/(s-r),h[6]=0,h[7]=0,h[8]=0,h[9]=0,h[10]=1/(n-a),h[11]=0,h[12]=(l+t)/(t-l),h[13]=(s+r)/(r-s),h[14]=n/(n-a),h[15]=1,h}function Z(t,l,r,s,n,a,d){const h=d??new f(16),y=l-t,S=s-r,_=n-a;return h[0]=2*n/y,h[1]=0,h[2]=0,h[3]=0,h[4]=0,h[5]=2*n/S,h[6]=0,h[7]=0,h[8]=(t+l)/y,h[9]=(s+r)/S,h[10]=a/_,h[11]=-1,h[12]=0,h[13]=0,h[14]=n*a/_,h[15]=0,h}function ut(t,l,r,s,n,a=1/0,d){const h=d??new f(16),y=l-t,S=s-r;if(h[0]=2*n/y,h[1]=0,h[2]=0,h[3]=0,h[4]=0,h[5]=2*n/S,h[6]=0,h[7]=0,h[8]=(t+l)/y,h[9]=(s+r)/S,h[11]=-1,h[12]=0,h[13]=0,h[15]=0,a===1/0)h[10]=0,h[14]=n;else{const _=1/(a-n);h[10]=n*_,h[14]=a*n*_}return h}const C=i.create(),q=i.create(),W=i.create();function st(t,l,r,s){const n=s??new f(16);return i.normalize(i.subtract(l,t,W),W),i.normalize(i.cross(r,W,C),C),i.normalize(i.cross(W,C,q),q),n[0]=C[0],n[1]=C[1],n[2]=C[2],n[3]=0,n[4]=q[0],n[5]=q[1],n[6]=q[2],n[7]=0,n[8]=W[0],n[9]=W[1],n[10]=W[2],n[11]=0,n[12]=t[0],n[13]=t[1],n[14]=t[2],n[15]=1,n}function Rt(t,l,r,s){const n=s??new f(16);return i.normalize(i.subtract(t,l,W),W),i.normalize(i.cross(r,W,C),C),i.normalize(i.cross(W,C,q),q),n[0]=C[0],n[1]=C[1],n[2]=C[2],n[3]=0,n[4]=q[0],n[5]=q[1],n[6]=q[2],n[7]=0,n[8]=W[0],n[9]=W[1],n[10]=W[2],n[11]=0,n[12]=t[0],n[13]=t[1],n[14]=t[2],n[15]=1,n}function J(t,l,r,s){const n=s??new f(16);return i.normalize(i.subtract(t,l,W),W),i.normalize(i.cross(r,W,C),C),i.normalize(i.cross(W,C,q),q),n[0]=C[0],n[1]=q[0],n[2]=W[0],n[3]=0,n[4]=C[1],n[5]=q[1],n[6]=W[1],n[7]=0,n[8]=C[2],n[9]=q[2],n[10]=W[2],n[11]=0,n[12]=-(C[0]*t[0]+C[1]*t[1]+C[2]*t[2]),n[13]=-(q[0]*t[0]+q[1]*t[1]+q[2]*t[2]),n[14]=-(W[0]*t[0]+W[1]*t[1]+W[2]*t[2]),n[15]=1,n}function ct(t,l){const r=l??new f(16);return r[0]=1,r[1]=0,r[2]=0,r[3]=0,r[4]=0,r[5]=1,r[6]=0,r[7]=0,r[8]=0,r[9]=0,r[10]=1,r[11]=0,r[12]=t[0],r[13]=t[1],r[14]=t[2],r[15]=1,r}function yt(t,l,r){const s=r??new f(16),n=l[0],a=l[1],d=l[2],h=t[0],y=t[1],S=t[2],_=t[3],E=t[4],U=t[5],R=t[6],I=t[7],G=t[8],O=t[9],F=t[10],tt=t[11],K=t[12],ht=t[13],ft=t[14],dt=t[15];return t!==s&&(s[0]=h,s[1]=y,s[2]=S,s[3]=_,s[4]=E,s[5]=U,s[6]=R,s[7]=I,s[8]=G,s[9]=O,s[10]=F,s[11]=tt),s[12]=h*n+E*a+G*d+K,s[13]=y*n+U*a+O*d+ht,s[14]=S*n+R*a+F*d+ft,s[15]=_*n+I*a+tt*d+dt,s}function Et(t,l){const r=l??new f(16),s=Math.cos(t),n=Math.sin(t);return r[0]=1,r[1]=0,r[2]=0,r[3]=0,r[4]=0,r[5]=s,r[6]=n,r[7]=0,r[8]=0,r[9]=-n,r[10]=s,r[11]=0,r[12]=0,r[13]=0,r[14]=0,r[15]=1,r}function it(t,l,r){const s=r??new f(16),n=t[4],a=t[5],d=t[6],h=t[7],y=t[8],S=t[9],_=t[10],E=t[11],U=Math.cos(l),R=Math.sin(l);return s[4]=U*n+R*y,s[5]=U*a+R*S,s[6]=U*d+R*_,s[7]=U*h+R*E,s[8]=U*y-R*n,s[9]=U*S-R*a,s[10]=U*_-R*d,s[11]=U*E-R*h,t!==s&&(s[0]=t[0],s[1]=t[1],s[2]=t[2],s[3]=t[3],s[12]=t[12],s[13]=t[13],s[14]=t[14],s[15]=t[15]),s}function bt(t,l){const r=l??new f(16),s=Math.cos(t),n=Math.sin(t);return r[0]=s,r[1]=0,r[2]=-n,r[3]=0,r[4]=0,r[5]=1,r[6]=0,r[7]=0,r[8]=n,r[9]=0,r[10]=s,r[11]=0,r[12]=0,r[13]=0,r[14]=0,r[15]=1,r}function Mt(t,l,r){const s=r??new f(16),n=t[0],a=t[1],d=t[2],h=t[3],y=t[8],S=t[9],_=t[10],E=t[11],U=Math.cos(l),R=Math.sin(l);return s[0]=U*n-R*y,s[1]=U*a-R*S,s[2]=U*d-R*_,s[3]=U*h-R*E,s[8]=U*y+R*n,s[9]=U*S+R*a,s[10]=U*_+R*d,s[11]=U*E+R*h,t!==s&&(s[4]=t[4],s[5]=t[5],s[6]=t[6],s[7]=t[7],s[12]=t[12],s[13]=t[13],s[14]=t[14],s[15]=t[15]),s}function b(t,l){const r=l??new f(16),s=Math.cos(t),n=Math.sin(t);return r[0]=s,r[1]=n,r[2]=0,r[3]=0,r[4]=-n,r[5]=s,r[6]=0,r[7]=0,r[8]=0,r[9]=0,r[10]=1,r[11]=0,r[12]=0,r[13]=0,r[14]=0,r[15]=1,r}function A(t,l,r){const s=r??new f(16),n=t[0],a=t[1],d=t[2],h=t[3],y=t[4],S=t[5],_=t[6],E=t[7],U=Math.cos(l),R=Math.sin(l);return s[0]=U*n+R*y,s[1]=U*a+R*S,s[2]=U*d+R*_,s[3]=U*h+R*E,s[4]=U*y-R*n,s[5]=U*S-R*a,s[6]=U*_-R*d,s[7]=U*E-R*h,t!==s&&(s[8]=t[8],s[9]=t[9],s[10]=t[10],s[11]=t[11],s[12]=t[12],s[13]=t[13],s[14]=t[14],s[15]=t[15]),s}function p(t,l,r){const s=r??new f(16);let n=t[0],a=t[1],d=t[2];const h=Math.sqrt(n*n+a*a+d*d);n/=h,a/=h,d/=h;const y=n*n,S=a*a,_=d*d,E=Math.cos(l),U=Math.sin(l),R=1-E;return s[0]=y+(1-y)*E,s[1]=n*a*R+d*U,s[2]=n*d*R-a*U,s[3]=0,s[4]=n*a*R-d*U,s[5]=S+(1-S)*E,s[6]=a*d*R+n*U,s[7]=0,s[8]=n*d*R+a*U,s[9]=a*d*R-n*U,s[10]=_+(1-_)*E,s[11]=0,s[12]=0,s[13]=0,s[14]=0,s[15]=1,s}const e=p;function c(t,l,r,s){const n=s??new f(16);let a=l[0],d=l[1],h=l[2];const y=Math.sqrt(a*a+d*d+h*h);a/=y,d/=y,h/=y;const S=a*a,_=d*d,E=h*h,U=Math.cos(r),R=Math.sin(r),I=1-U,G=S+(1-S)*U,O=a*d*I+h*R,F=a*h*I-d*R,tt=a*d*I-h*R,K=_+(1-_)*U,ht=d*h*I+a*R,ft=a*h*I+d*R,dt=d*h*I-a*R,mt=E+(1-E)*U,St=t[0],_t=t[1],At=t[2],Dt=t[3],Pt=t[4],Tt=t[5],zt=t[6],Lt=t[7],Bt=t[8],$t=t[9],It=t[10],Ot=t[11];return n[0]=G*St+O*Pt+F*Bt,n[1]=G*_t+O*Tt+F*$t,n[2]=G*At+O*zt+F*It,n[3]=G*Dt+O*Lt+F*Ot,n[4]=tt*St+K*Pt+ht*Bt,n[5]=tt*_t+K*Tt+ht*$t,n[6]=tt*At+K*zt+ht*It,n[7]=tt*Dt+K*Lt+ht*Ot,n[8]=ft*St+dt*Pt+mt*Bt,n[9]=ft*_t+dt*Tt+mt*$t,n[10]=ft*At+dt*zt+mt*It,n[11]=ft*Dt+dt*Lt+mt*Ot,t!==n&&(n[12]=t[12],n[13]=t[13],n[14]=t[14],n[15]=t[15]),n}const o=c;function u(t,l){const r=l??new f(16);return r[0]=t[0],r[1]=0,r[2]=0,r[3]=0,r[4]=0,r[5]=t[1],r[6]=0,r[7]=0,r[8]=0,r[9]=0,r[10]=t[2],r[11]=0,r[12]=0,r[13]=0,r[14]=0,r[15]=1,r}function g(t,l,r){const s=r??new f(16),n=l[0],a=l[1],d=l[2];return s[0]=n*t[0],s[1]=n*t[1],s[2]=n*t[2],s[3]=n*t[3],s[4]=a*t[4],s[5]=a*t[5],s[6]=a*t[6],s[7]=a*t[7],s[8]=d*t[8],s[9]=d*t[9],s[10]=d*t[10],s[11]=d*t[11],t!==s&&(s[12]=t[12],s[13]=t[13],s[14]=t[14],s[15]=t[15]),s}function m(t,l){const r=l??new f(16);return r[0]=t,r[1]=0,r[2]=0,r[3]=0,r[4]=0,r[5]=t,r[6]=0,r[7]=0,r[8]=0,r[9]=0,r[10]=t,r[11]=0,r[12]=0,r[13]=0,r[14]=0,r[15]=1,r}function w(t,l,r){const s=r??new f(16);return s[0]=l*t[0],s[1]=l*t[1],s[2]=l*t[2],s[3]=l*t[3],s[4]=l*t[4],s[5]=l*t[5],s[6]=l*t[6],s[7]=l*t[7],s[8]=l*t[8],s[9]=l*t[9],s[10]=l*t[10],s[11]=l*t[11],t!==s&&(s[12]=t[12],s[13]=t[13],s[14]=t[14],s[15]=t[15]),s}return{add:z,aim:st,axisRotate:c,axisRotation:p,cameraAim:Rt,clone:B,copy:V,create:v,determinant:$,equals:X,equalsApproximately:N,fromMat3:M,fromQuat:D,frustum:Z,frustumReverseZ:ut,getAxis:gt,getScaling:vt,getTranslation:pt,identity:et,inverse:ot,invert:L,lookAt:J,mul:rt,mulScalar:k,multiply:j,multiplyScalar:T,negate:P,ortho:Q,perspective:lt,perspectiveReverseZ:xt,rotate:o,rotateX:it,rotateY:Mt,rotateZ:A,rotation:e,rotationX:Et,rotationY:bt,rotationZ:b,scale:g,scaling:u,set:x,setAxis:wt,setTranslation:at,translate:yt,translation:ct,transpose:Y,uniformScale:w,uniformScaling:m}}const ue=new Map;function Se(f){let i=ue.get(f);return i||(i=Me(f),ue.set(f,i)),i}function _e(f){const i=Kt(f);function v(b,A,p,e){const c=new f(4);return b!==void 0&&(c[0]=b,A!==void 0&&(c[1]=A,p!==void 0&&(c[2]=p,e!==void 0&&(c[3]=e)))),c}const x=v;function M(b,A,p,e,c){const o=c??new f(4);return o[0]=b,o[1]=A,o[2]=p,o[3]=e,o}function D(b,A,p){const e=p??new f(4),c=A*.5,o=Math.sin(c);return e[0]=o*b[0],e[1]=o*b[1],e[2]=o*b[2],e[3]=Math.cos(c),e}function P(b,A){const p=A??i.create(3),e=Math.acos(b[3])*2,c=Math.sin(e*.5);return c>H?(p[0]=b[0]/c,p[1]=b[1]/c,p[2]=b[2]/c):(p[0]=1,p[1]=0,p[2]=0),{angle:e,axis:p}}function z(b,A){const p=lt(b,A);return Math.acos(2*p*p-1)}function T(b,A,p){const e=p??new f(4),c=b[0],o=b[1],u=b[2],g=b[3],m=A[0],w=A[1],t=A[2],l=A[3];return e[0]=c*l+g*m+o*t-u*w,e[1]=o*l+g*w+u*m-c*t,e[2]=u*l+g*t+c*w-o*m,e[3]=g*l-c*m-o*w-u*t,e}const k=T;function V(b,A,p){const e=p??new f(4),c=A*.5,o=b[0],u=b[1],g=b[2],m=b[3],w=Math.sin(c),t=Math.cos(c);return e[0]=o*t+m*w,e[1]=u*t+g*w,e[2]=g*t-u*w,e[3]=m*t-o*w,e}function B(b,A,p){const e=p??new f(4),c=A*.5,o=b[0],u=b[1],g=b[2],m=b[3],w=Math.sin(c),t=Math.cos(c);return e[0]=o*t-g*w,e[1]=u*t+m*w,e[2]=g*t+o*w,e[3]=m*t-u*w,e}function N(b,A,p){const e=p??new f(4),c=A*.5,o=b[0],u=b[1],g=b[2],m=b[3],w=Math.sin(c),t=Math.cos(c);return e[0]=o*t+u*w,e[1]=u*t-o*w,e[2]=g*t+m*w,e[3]=m*t-g*w,e}function X(b,A,p,e){const c=e??new f(4),o=b[0],u=b[1],g=b[2],m=b[3];let w=A[0],t=A[1],l=A[2],r=A[3],s=o*w+u*t+g*l+m*r;s<0&&(s=-s,w=-w,t=-t,l=-l,r=-r);let n,a;if(1-s>H){const d=Math.acos(s),h=Math.sin(d);n=Math.sin((1-p)*d)/h,a=Math.sin(p*d)/h}else n=1-p,a=p;return c[0]=n*o+a*w,c[1]=n*u+a*t,c[2]=n*g+a*l,c[3]=n*m+a*r,c}function et(b,A){const p=A??new f(4),e=b[0],c=b[1],o=b[2],u=b[3],g=e*e+c*c+o*o+u*u,m=g?1/g:0;return p[0]=-e*m,p[1]=-c*m,p[2]=-o*m,p[3]=u*m,p}function Y(b,A){const p=A??new f(4);return p[0]=-b[0],p[1]=-b[1],p[2]=-b[2],p[3]=b[3],p}function ot(b,A){const p=A??new f(4),e=b[0]+b[5]+b[10];if(e>0){const c=Math.sqrt(e+1);p[3]=.5*c;const o=.5/c;p[0]=(b[6]-b[9])*o,p[1]=(b[8]-b[2])*o,p[2]=(b[1]-b[4])*o}else{let c=0;b[5]>b[0]&&(c=1),b[10]>b[c*4+c]&&(c=2);const o=(c+1)%3,u=(c+2)%3,g=Math.sqrt(b[c*4+c]-b[o*4+o]-b[u*4+u]+1);p[c]=.5*g;const m=.5/g;p[3]=(b[o*4+u]-b[u*4+o])*m,p[o]=(b[o*4+c]+b[c*4+o])*m,p[u]=(b[u*4+c]+b[c*4+u])*m}return p}function $(b,A,p,e,c){const o=c??new f(4),u=b*.5,g=A*.5,m=p*.5,w=Math.sin(u),t=Math.cos(u),l=Math.sin(g),r=Math.cos(g),s=Math.sin(m),n=Math.cos(m);switch(e){case"xyz":o[0]=w*r*n+t*l*s,o[1]=t*l*n-w*r*s,o[2]=t*r*s+w*l*n,o[3]=t*r*n-w*l*s;break;case"xzy":o[0]=w*r*n-t*l*s,o[1]=t*l*n-w*r*s,o[2]=t*r*s+w*l*n,o[3]=t*r*n+w*l*s;break;case"yxz":o[0]=w*r*n+t*l*s,o[1]=t*l*n-w*r*s,o[2]=t*r*s-w*l*n,o[3]=t*r*n+w*l*s;break;case"yzx":o[0]=w*r*n+t*l*s,o[1]=t*l*n+w*r*s,o[2]=t*r*s-w*l*n,o[3]=t*r*n-w*l*s;break;case"zxy":o[0]=w*r*n-t*l*s,o[1]=t*l*n+w*r*s,o[2]=t*r*s+w*l*n,o[3]=t*r*n-w*l*s;break;case"zyx":o[0]=w*r*n-t*l*s,o[1]=t*l*n+w*r*s,o[2]=t*r*s-w*l*n,o[3]=t*r*n+w*l*s;break;default:throw new Error(`Unknown rotation order: ${e}`)}return o}function L(b,A){const p=A??new f(4);return p[0]=b[0],p[1]=b[1],p[2]=b[2],p[3]=b[3],p}const j=L;function rt(b,A,p){const e=p??new f(4);return e[0]=b[0]+A[0],e[1]=b[1]+A[1],e[2]=b[2]+A[2],e[3]=b[3]+A[3],e}function at(b,A,p){const e=p??new f(4);return e[0]=b[0]-A[0],e[1]=b[1]-A[1],e[2]=b[2]-A[2],e[3]=b[3]-A[3],e}const pt=at;function gt(b,A,p){const e=p??new f(4);return e[0]=b[0]*A,e[1]=b[1]*A,e[2]=b[2]*A,e[3]=b[3]*A,e}const wt=gt;function vt(b,A,p){const e=p??new f(4);return e[0]=b[0]/A,e[1]=b[1]/A,e[2]=b[2]/A,e[3]=b[3]/A,e}function lt(b,A){return b[0]*A[0]+b[1]*A[1]+b[2]*A[2]+b[3]*A[3]}function xt(b,A,p,e){const c=e??new f(4);return c[0]=b[0]+p*(A[0]-b[0]),c[1]=b[1]+p*(A[1]-b[1]),c[2]=b[2]+p*(A[2]-b[2]),c[3]=b[3]+p*(A[3]-b[3]),c}function Q(b){const A=b[0],p=b[1],e=b[2],c=b[3];return Math.sqrt(A*A+p*p+e*e+c*c)}const Z=Q;function ut(b){const A=b[0],p=b[1],e=b[2],c=b[3];return A*A+p*p+e*e+c*c}const C=ut;function q(b,A){const p=A??new f(4),e=b[0],c=b[1],o=b[2],u=b[3],g=Math.sqrt(e*e+c*c+o*o+u*u);return g>1e-5?(p[0]=e/g,p[1]=c/g,p[2]=o/g,p[3]=u/g):(p[0]=0,p[1]=0,p[2]=0,p[3]=1),p}function W(b,A){return Math.abs(b[0]-A[0])<H&&Math.abs(b[1]-A[1])<H&&Math.abs(b[2]-A[2])<H&&Math.abs(b[3]-A[3])<H}function st(b,A){return b[0]===A[0]&&b[1]===A[1]&&b[2]===A[2]&&b[3]===A[3]}function Rt(b){const A=b??new f(4);return A[0]=0,A[1]=0,A[2]=0,A[3]=1,A}const J=i.create(),ct=i.create(),yt=i.create();function Et(b,A,p){const e=p??new f(4),c=i.dot(b,A);return c<-.999999?(i.cross(ct,b,J),i.len(J)<1e-6&&i.cross(yt,b,J),i.normalize(J,J),D(J,Math.PI,e),e):c>.999999?(e[0]=0,e[1]=0,e[2]=0,e[3]=1,e):(i.cross(b,A,J),e[0]=J[0],e[1]=J[1],e[2]=J[2],e[3]=1+c,q(e,e))}const it=new f(4),bt=new f(4);function Mt(b,A,p,e,c,o){const u=o??new f(4);return X(b,e,c,it),X(A,p,c,bt),X(it,bt,2*c*(1-c),u),u}return{create:v,fromValues:x,set:M,fromAxisAngle:D,toAxisAngle:P,angle:z,multiply:T,mul:k,rotateX:V,rotateY:B,rotateZ:N,slerp:X,inverse:et,conjugate:Y,fromMat:ot,fromEuler:$,copy:L,clone:j,add:rt,subtract:at,sub:pt,mulScalar:gt,scale:wt,divScalar:vt,dot:lt,lerp:xt,length:Q,len:Z,lengthSq:ut,lenSq:C,normalize:q,equalsApproximately:W,equals:st,identity:Rt,rotationTo:Et,sqlerp:Mt}}const he=new Map;function Ae(f){let i=he.get(f);return i||(i=_e(f),he.set(f,i)),i}function De(f){function i(p,e,c,o){const u=new f(4);return p!==void 0&&(u[0]=p,e!==void 0&&(u[1]=e,c!==void 0&&(u[2]=c,o!==void 0&&(u[3]=o)))),u}const v=i;function x(p,e,c,o,u){const g=u??new f(4);return g[0]=p,g[1]=e,g[2]=c,g[3]=o,g}function M(p,e){const c=e??new f(4);return c[0]=Math.ceil(p[0]),c[1]=Math.ceil(p[1]),c[2]=Math.ceil(p[2]),c[3]=Math.ceil(p[3]),c}function D(p,e){const c=e??new f(4);return c[0]=Math.floor(p[0]),c[1]=Math.floor(p[1]),c[2]=Math.floor(p[2]),c[3]=Math.floor(p[3]),c}function P(p,e){const c=e??new f(4);return c[0]=Math.round(p[0]),c[1]=Math.round(p[1]),c[2]=Math.round(p[2]),c[3]=Math.round(p[3]),c}function z(p,e=0,c=1,o){const u=o??new f(4);return u[0]=Math.min(c,Math.max(e,p[0])),u[1]=Math.min(c,Math.max(e,p[1])),u[2]=Math.min(c,Math.max(e,p[2])),u[3]=Math.min(c,Math.max(e,p[3])),u}function T(p,e,c){const o=c??new f(4);return o[0]=p[0]+e[0],o[1]=p[1]+e[1],o[2]=p[2]+e[2],o[3]=p[3]+e[3],o}function k(p,e,c,o){const u=o??new f(4);return u[0]=p[0]+e[0]*c,u[1]=p[1]+e[1]*c,u[2]=p[2]+e[2]*c,u[3]=p[3]+e[3]*c,u}function V(p,e,c){const o=c??new f(4);return o[0]=p[0]-e[0],o[1]=p[1]-e[1],o[2]=p[2]-e[2],o[3]=p[3]-e[3],o}const B=V;function N(p,e){return Math.abs(p[0]-e[0])<H&&Math.abs(p[1]-e[1])<H&&Math.abs(p[2]-e[2])<H&&Math.abs(p[3]-e[3])<H}function X(p,e){return p[0]===e[0]&&p[1]===e[1]&&p[2]===e[2]&&p[3]===e[3]}function et(p,e,c,o){const u=o??new f(4);return u[0]=p[0]+c*(e[0]-p[0]),u[1]=p[1]+c*(e[1]-p[1]),u[2]=p[2]+c*(e[2]-p[2]),u[3]=p[3]+c*(e[3]-p[3]),u}function Y(p,e,c,o){const u=o??new f(4);return u[0]=p[0]+c[0]*(e[0]-p[0]),u[1]=p[1]+c[1]*(e[1]-p[1]),u[2]=p[2]+c[2]*(e[2]-p[2]),u[3]=p[3]+c[3]*(e[3]-p[3]),u}function ot(p,e,c){const o=c??new f(4);return o[0]=Math.max(p[0],e[0]),o[1]=Math.max(p[1],e[1]),o[2]=Math.max(p[2],e[2]),o[3]=Math.max(p[3],e[3]),o}function $(p,e,c){const o=c??new f(4);return o[0]=Math.min(p[0],e[0]),o[1]=Math.min(p[1],e[1]),o[2]=Math.min(p[2],e[2]),o[3]=Math.min(p[3],e[3]),o}function L(p,e,c){const o=c??new f(4);return o[0]=p[0]*e,o[1]=p[1]*e,o[2]=p[2]*e,o[3]=p[3]*e,o}const j=L;function rt(p,e,c){const o=c??new f(4);return o[0]=p[0]/e,o[1]=p[1]/e,o[2]=p[2]/e,o[3]=p[3]/e,o}function at(p,e){const c=e??new f(4);return c[0]=1/p[0],c[1]=1/p[1],c[2]=1/p[2],c[3]=1/p[3],c}const pt=at;function gt(p,e){return p[0]*e[0]+p[1]*e[1]+p[2]*e[2]+p[3]*e[3]}function wt(p){const e=p[0],c=p[1],o=p[2],u=p[3];return Math.sqrt(e*e+c*c+o*o+u*u)}const vt=wt;function lt(p){const e=p[0],c=p[1],o=p[2],u=p[3];return e*e+c*c+o*o+u*u}const xt=lt;function Q(p,e){const c=p[0]-e[0],o=p[1]-e[1],u=p[2]-e[2],g=p[3]-e[3];return Math.sqrt(c*c+o*o+u*u+g*g)}const Z=Q;function ut(p,e){const c=p[0]-e[0],o=p[1]-e[1],u=p[2]-e[2],g=p[3]-e[3];return c*c+o*o+u*u+g*g}const C=ut;function q(p,e){const c=e??new f(4),o=p[0],u=p[1],g=p[2],m=p[3],w=Math.sqrt(o*o+u*u+g*g+m*m);return w>1e-5?(c[0]=o/w,c[1]=u/w,c[2]=g/w,c[3]=m/w):(c[0]=0,c[1]=0,c[2]=0,c[3]=0),c}function W(p,e){const c=e??new f(4);return c[0]=-p[0],c[1]=-p[1],c[2]=-p[2],c[3]=-p[3],c}function st(p,e){const c=e??new f(4);return c[0]=p[0],c[1]=p[1],c[2]=p[2],c[3]=p[3],c}const Rt=st;function J(p,e,c){const o=c??new f(4);return o[0]=p[0]*e[0],o[1]=p[1]*e[1],o[2]=p[2]*e[2],o[3]=p[3]*e[3],o}const ct=J;function yt(p,e,c){const o=c??new f(4);return o[0]=p[0]/e[0],o[1]=p[1]/e[1],o[2]=p[2]/e[2],o[3]=p[3]/e[3],o}const Et=yt;function it(p){const e=p??new f(4);return e[0]=0,e[1]=0,e[2]=0,e[3]=0,e}function bt(p,e,c){const o=c??new f(4),u=p[0],g=p[1],m=p[2],w=p[3];return o[0]=e[0]*u+e[4]*g+e[8]*m+e[12]*w,o[1]=e[1]*u+e[5]*g+e[9]*m+e[13]*w,o[2]=e[2]*u+e[6]*g+e[10]*m+e[14]*w,o[3]=e[3]*u+e[7]*g+e[11]*m+e[15]*w,o}function Mt(p,e,c){const o=c??new f(4);return q(p,o),L(o,e,o)}function b(p,e,c){const o=c??new f(4);return wt(p)>e?Mt(p,e,o):st(p,o)}function A(p,e,c){const o=c??new f(4);return et(p,e,.5,o)}return{create:i,fromValues:v,set:x,ceil:M,floor:D,round:P,clamp:z,add:T,addScaled:k,subtract:V,sub:B,equalsApproximately:N,equals:X,lerp:et,lerpV:Y,max:ot,min:$,mulScalar:L,scale:j,divScalar:rt,inverse:at,invert:pt,dot:gt,length:wt,len:vt,lengthSq:lt,lenSq:xt,distance:Q,dist:Z,distanceSq:ut,distSq:C,normalize:q,negate:W,copy:st,clone:Rt,multiply:J,mul:ct,divide:yt,div:Et,zero:it,transformMat4:bt,setLength:Mt,truncate:b,midpoint:A}}const fe=new Map;function Pe(f){let i=fe.get(f);return i||(i=De(f),fe.set(f,i)),i}function ee(f,i,v,x,M,D){return{mat3:be(f),mat4:Se(i),quat:Ae(v),vec2:ge(x),vec3:Kt(M),vec4:Pe(D)}}const{mat4:Vt,vec3:Jt}=ee(Float32Array,Float32Array,Float32Array,Float32Array,Float32Array,Float32Array);ee(Float64Array,Float64Array,Float64Array,Float64Array,Float64Array,Float64Array);ee(we,Array,Array,Array,Array,Array);class Ct{constructor(i,v,x,M,D="div"){this.parent=i,this.object=v,this.property=x,this._disabled=!1,this._hidden=!1,this.initialValue=this.getValue(),this.domElement=document.createElement(D),this.domElement.classList.add("lil-controller"),this.domElement.classList.add(M),this.$name=document.createElement("div"),this.$name.classList.add("lil-name"),Ct.nextNameID=Ct.nextNameID||0,this.$name.id=`lil-gui-name-${++Ct.nextNameID}`,this.$widget=document.createElement("div"),this.$widget.classList.add("lil-widget"),this.$disable=this.$widget,this.domElement.appendChild(this.$name),this.domElement.appendChild(this.$widget),this.domElement.addEventListener("keydown",P=>P.stopPropagation()),this.domElement.addEventListener("keyup",P=>P.stopPropagation()),this.parent.children.push(this),this.parent.controllers.push(this),this.parent.$children.appendChild(this.domElement),this._listenCallback=this._listenCallback.bind(this),this.name(x)}name(i){return this._name=i,this.$name.textContent=i,this}onChange(i){return this._onChange=i,this}_callOnChange(){this.parent._callOnChange(this),this._onChange!==void 0&&this._onChange.call(this,this.getValue()),this._changed=!0}onFinishChange(i){return this._onFinishChange=i,this}_callOnFinishChange(){this._changed&&(this.parent._callOnFinishChange(this),this._onFinishChange!==void 0&&this._onFinishChange.call(this,this.getValue())),this._changed=!1}reset(){return this.setValue(this.initialValue),this._callOnFinishChange(),this}enable(i=!0){return this.disable(!i)}disable(i=!0){return i===this._disabled?this:(this._disabled=i,this.domElement.classList.toggle("lil-disabled",i),this.$disable.toggleAttribute("disabled",i),this)}show(i=!0){return this._hidden=!i,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}options(i){const v=this.parent.add(this.object,this.property,i);return v.name(this._name),this.destroy(),v}min(i){return this}max(i){return this}step(i){return this}decimals(i){return this}listen(i=!0){return this._listening=i,this._listenCallbackID!==void 0&&(cancelAnimationFrame(this._listenCallbackID),this._listenCallbackID=void 0),this._listening&&this._listenCallback(),this}_listenCallback(){this._listenCallbackID=requestAnimationFrame(this._listenCallback);const i=this.save();i!==this._listenPrevValue&&this.updateDisplay(),this._listenPrevValue=i}getValue(){return this.object[this.property]}setValue(i){return this.getValue()!==i&&(this.object[this.property]=i,this._callOnChange(),this.updateDisplay()),this}updateDisplay(){return this}load(i){return this.setValue(i),this._callOnFinishChange(),this}save(){return this.getValue()}destroy(){this.listen(!1),this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.controllers.splice(this.parent.controllers.indexOf(this),1),this.parent.$children.removeChild(this.domElement)}}class Ue extends Ct{constructor(i,v,x){super(i,v,x,"lil-boolean","label"),this.$input=document.createElement("input"),this.$input.setAttribute("type","checkbox"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$input.addEventListener("change",()=>{this.setValue(this.$input.checked),this._callOnFinishChange()}),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.checked=this.getValue(),this}}function te(f){let i,v;return(i=f.match(/(#|0x)?([a-f0-9]{6})/i))?v=i[2]:(i=f.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/))?v=parseInt(i[1]).toString(16).padStart(2,0)+parseInt(i[2]).toString(16).padStart(2,0)+parseInt(i[3]).toString(16).padStart(2,0):(i=f.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i))&&(v=i[1]+i[1]+i[2]+i[2]+i[3]+i[3]),v?"#"+v:!1}const Re={isPrimitive:!0,match:f=>typeof f=="string",fromHexString:te,toHexString:te},kt={isPrimitive:!0,match:f=>typeof f=="number",fromHexString:f=>parseInt(f.substring(1),16),toHexString:f=>"#"+f.toString(16).padStart(6,0)},Ee={isPrimitive:!1,match:f=>Array.isArray(f)||ArrayBuffer.isView(f),fromHexString(f,i,v=1){const x=kt.fromHexString(f);i[0]=(x>>16&255)/255*v,i[1]=(x>>8&255)/255*v,i[2]=(x&255)/255*v},toHexString([f,i,v],x=1){x=255/x;const M=f*x<<16^i*x<<8^v*x<<0;return kt.toHexString(M)}},Te={isPrimitive:!1,match:f=>Object(f)===f,fromHexString(f,i,v=1){const x=kt.fromHexString(f);i.r=(x>>16&255)/255*v,i.g=(x>>8&255)/255*v,i.b=(x&255)/255*v},toHexString({r:f,g:i,b:v},x=1){x=255/x;const M=f*x<<16^i*x<<8^v*x<<0;return kt.toHexString(M)}},ze=[Re,kt,Ee,Te];function Le(f){return ze.find(i=>i.match(f))}class Be extends Ct{constructor(i,v,x,M){super(i,v,x,"lil-color"),this.$input=document.createElement("input"),this.$input.setAttribute("type","color"),this.$input.setAttribute("tabindex",-1),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$text=document.createElement("input"),this.$text.setAttribute("type","text"),this.$text.setAttribute("spellcheck","false"),this.$text.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("lil-display"),this.$display.appendChild(this.$input),this.$widget.appendChild(this.$display),this.$widget.appendChild(this.$text),this._format=Le(this.initialValue),this._rgbScale=M,this._initialValueHexString=this.save(),this._textFocused=!1,this.$input.addEventListener("input",()=>{this._setValueFromHexString(this.$input.value)}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$text.addEventListener("input",()=>{const D=te(this.$text.value);D&&this._setValueFromHexString(D)}),this.$text.addEventListener("focus",()=>{this._textFocused=!0,this.$text.select()}),this.$text.addEventListener("blur",()=>{this._textFocused=!1,this.updateDisplay(),this._callOnFinishChange()}),this.$disable=this.$text,this.updateDisplay()}reset(){return this._setValueFromHexString(this._initialValueHexString),this}_setValueFromHexString(i){if(this._format.isPrimitive){const v=this._format.fromHexString(i);this.setValue(v)}else this._format.fromHexString(i,this.getValue(),this._rgbScale),this._callOnChange(),this.updateDisplay()}save(){return this._format.toHexString(this.getValue(),this._rgbScale)}load(i){return this._setValueFromHexString(i),this._callOnFinishChange(),this}updateDisplay(){return this.$input.value=this._format.toHexString(this.getValue(),this._rgbScale),this._textFocused||(this.$text.value=this.$input.value.substring(1)),this.$display.style.backgroundColor=this.$input.value,this}}class Qt extends Ct{constructor(i,v,x){super(i,v,x,"lil-function"),this.$button=document.createElement("button"),this.$button.appendChild(this.$name),this.$widget.appendChild(this.$button),this.$button.addEventListener("click",M=>{M.preventDefault(),this.getValue().call(this.object),this._callOnChange()}),this.$button.addEventListener("touchstart",()=>{},{passive:!0}),this.$disable=this.$button}}class $e extends Ct{constructor(i,v,x,M,D,P){super(i,v,x,"lil-number"),this._initInput(),this.min(M),this.max(D);const z=P!==void 0;this.step(z?P:this._getImplicitStep(),z),this.updateDisplay()}decimals(i){return this._decimals=i,this.updateDisplay(),this}min(i){return this._min=i,this._onUpdateMinMax(),this}max(i){return this._max=i,this._onUpdateMinMax(),this}step(i,v=!0){return this._step=i,this._stepExplicit=v,this}updateDisplay(){const i=this.getValue();if(this._hasSlider){let v=(i-this._min)/(this._max-this._min);v=Math.max(0,Math.min(v,1)),this.$fill.style.width=v*100+"%"}return this._inputFocused||(this.$input.value=this._decimals===void 0?i:i.toFixed(this._decimals)),this}_initInput(){this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("aria-labelledby",this.$name.id),window.matchMedia("(pointer: coarse)").matches&&(this.$input.setAttribute("type","number"),this.$input.setAttribute("step","any")),this.$widget.appendChild(this.$input),this.$disable=this.$input;const v=()=>{let L=parseFloat(this.$input.value);isNaN(L)||(this._stepExplicit&&(L=this._snap(L)),this.setValue(this._clamp(L)))},x=L=>{const j=parseFloat(this.$input.value);isNaN(j)||(this._snapClampSetValue(j+L),this.$input.value=this.getValue())},M=L=>{L.key==="Enter"&&this.$input.blur(),L.code==="ArrowUp"&&(L.preventDefault(),x(this._step*this._arrowKeyMultiplier(L))),L.code==="ArrowDown"&&(L.preventDefault(),x(this._step*this._arrowKeyMultiplier(L)*-1))},D=L=>{this._inputFocused&&(L.preventDefault(),x(this._step*this._normalizeMouseWheel(L)))};let P=!1,z,T,k,V,B;const N=5,X=L=>{z=L.clientX,T=k=L.clientY,P=!0,V=this.getValue(),B=0,window.addEventListener("mousemove",et),window.addEventListener("mouseup",Y)},et=L=>{if(P){const j=L.clientX-z,rt=L.clientY-T;Math.abs(rt)>N?(L.preventDefault(),this.$input.blur(),P=!1,this._setDraggingStyle(!0,"vertical")):Math.abs(j)>N&&Y()}if(!P){const j=L.clientY-k;B-=j*this._step*this._arrowKeyMultiplier(L),V+B>this._max?B=this._max-V:V+B<this._min&&(B=this._min-V),this._snapClampSetValue(V+B)}k=L.clientY},Y=()=>{this._setDraggingStyle(!1,"vertical"),this._callOnFinishChange(),window.removeEventListener("mousemove",et),window.removeEventListener("mouseup",Y)},ot=()=>{this._inputFocused=!0},$=()=>{this._inputFocused=!1,this.updateDisplay(),this._callOnFinishChange()};this.$input.addEventListener("input",v),this.$input.addEventListener("keydown",M),this.$input.addEventListener("wheel",D,{passive:!1}),this.$input.addEventListener("mousedown",X),this.$input.addEventListener("focus",ot),this.$input.addEventListener("blur",$)}_initSlider(){this._hasSlider=!0,this.$slider=document.createElement("div"),this.$slider.classList.add("lil-slider"),this.$fill=document.createElement("div"),this.$fill.classList.add("lil-fill"),this.$slider.appendChild(this.$fill),this.$widget.insertBefore(this.$slider,this.$input),this.domElement.classList.add("lil-has-slider");const i=($,L,j,rt,at)=>($-L)/(j-L)*(at-rt)+rt,v=$=>{const L=this.$slider.getBoundingClientRect();let j=i($,L.left,L.right,this._min,this._max);this._snapClampSetValue(j)},x=$=>{this._setDraggingStyle(!0),v($.clientX),window.addEventListener("mousemove",M),window.addEventListener("mouseup",D)},M=$=>{v($.clientX)},D=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("mousemove",M),window.removeEventListener("mouseup",D)};let P=!1,z,T;const k=$=>{$.preventDefault(),this._setDraggingStyle(!0),v($.touches[0].clientX),P=!1},V=$=>{$.touches.length>1||(this._hasScrollBar?(z=$.touches[0].clientX,T=$.touches[0].clientY,P=!0):k($),window.addEventListener("touchmove",B,{passive:!1}),window.addEventListener("touchend",N))},B=$=>{if(P){const L=$.touches[0].clientX-z,j=$.touches[0].clientY-T;Math.abs(L)>Math.abs(j)?k($):(window.removeEventListener("touchmove",B),window.removeEventListener("touchend",N))}else $.preventDefault(),v($.touches[0].clientX)},N=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("touchmove",B),window.removeEventListener("touchend",N)},X=this._callOnFinishChange.bind(this),et=400;let Y;const ot=$=>{if(Math.abs($.deltaX)<Math.abs($.deltaY)&&this._hasScrollBar)return;$.preventDefault();const j=this._normalizeMouseWheel($)*this._step;this._snapClampSetValue(this.getValue()+j),this.$input.value=this.getValue(),clearTimeout(Y),Y=setTimeout(X,et)};this.$slider.addEventListener("mousedown",x),this.$slider.addEventListener("touchstart",V,{passive:!1}),this.$slider.addEventListener("wheel",ot,{passive:!1})}_setDraggingStyle(i,v="horizontal"){this.$slider&&this.$slider.classList.toggle("lil-active",i),document.body.classList.toggle("lil-dragging",i),document.body.classList.toggle(`lil-${v}`,i)}_getImplicitStep(){return this._hasMin&&this._hasMax?(this._max-this._min)/1e3:.1}_onUpdateMinMax(){!this._hasSlider&&this._hasMin&&this._hasMax&&(this._stepExplicit||this.step(this._getImplicitStep(),!1),this._initSlider(),this.updateDisplay())}_normalizeMouseWheel(i){let{deltaX:v,deltaY:x}=i;return Math.floor(i.deltaY)!==i.deltaY&&i.wheelDelta&&(v=0,x=-i.wheelDelta/120,x*=this._stepExplicit?1:10),v+-x}_arrowKeyMultiplier(i){let v=this._stepExplicit?1:10;return i.shiftKey?v*=10:i.altKey&&(v/=10),v}_snap(i){let v=0;return this._hasMin?v=this._min:this._hasMax&&(v=this._max),i-=v,i=Math.round(i/this._step)*this._step,i+=v,i=parseFloat(i.toPrecision(15)),i}_clamp(i){return i<this._min&&(i=this._min),i>this._max&&(i=this._max),i}_snapClampSetValue(i){this.setValue(this._clamp(this._snap(i)))}get _hasScrollBar(){const i=this.parent.root.$children;return i.scrollHeight>i.clientHeight}get _hasMin(){return this._min!==void 0}get _hasMax(){return this._max!==void 0}}class Ie extends Ct{constructor(i,v,x,M){super(i,v,x,"lil-option"),this.$select=document.createElement("select"),this.$select.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("lil-display"),this.$select.addEventListener("change",()=>{this.setValue(this._values[this.$select.selectedIndex]),this._callOnFinishChange()}),this.$select.addEventListener("focus",()=>{this.$display.classList.add("lil-focus")}),this.$select.addEventListener("blur",()=>{this.$display.classList.remove("lil-focus")}),this.$widget.appendChild(this.$select),this.$widget.appendChild(this.$display),this.$disable=this.$select,this.options(M)}options(i){return this._values=Array.isArray(i)?i:Object.values(i),this._names=Array.isArray(i)?i:Object.keys(i),this.$select.replaceChildren(),this._names.forEach(v=>{const x=document.createElement("option");x.textContent=v,this.$select.appendChild(x)}),this.updateDisplay(),this}updateDisplay(){const i=this.getValue(),v=this._values.indexOf(i);return this.$select.selectedIndex=v,this.$display.textContent=v===-1?i:this._names[v],this}}class Oe extends Ct{constructor(i,v,x){super(i,v,x,"lil-string"),this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("spellcheck","false"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$input.addEventListener("input",()=>{this.setValue(this.$input.value)}),this.$input.addEventListener("keydown",M=>{M.code==="Enter"&&this.$input.blur()}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$widget.appendChild(this.$input),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.value=this.getValue(),this}}var Fe=`.lil-gui {
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
}`;function Ve(f){const i=document.createElement("style");i.innerHTML=f;const v=document.querySelector("head link[rel=stylesheet], head style");v?document.head.insertBefore(i,v):document.head.appendChild(i)}let de=!1;class ne{constructor({parent:i,autoPlace:v=i===void 0,container:x,width:M,title:D="Controls",closeFolders:P=!1,injectStyles:z=!0,touchStyles:T=!0}={}){if(this.parent=i,this.root=i?i.root:this,this.children=[],this.controllers=[],this.folders=[],this._closed=!1,this._hidden=!1,this.domElement=document.createElement("div"),this.domElement.classList.add("lil-gui"),this.$title=document.createElement("button"),this.$title.classList.add("lil-title"),this.$title.setAttribute("aria-expanded",!0),this.$title.addEventListener("click",()=>this.openAnimated(this._closed)),this.$title.addEventListener("touchstart",()=>{},{passive:!0}),this.$children=document.createElement("div"),this.$children.classList.add("lil-children"),this.domElement.appendChild(this.$title),this.domElement.appendChild(this.$children),this.title(D),this.parent){this.parent.children.push(this),this.parent.folders.push(this),this.parent.$children.appendChild(this.domElement);return}this.domElement.classList.add("lil-root"),T&&this.domElement.classList.add("lil-allow-touch-styles"),!de&&z&&(Ve(Fe),de=!0),x?x.appendChild(this.domElement):v&&(this.domElement.classList.add("lil-auto-place","autoPlace"),document.body.appendChild(this.domElement)),M&&this.domElement.style.setProperty("--width",M+"px"),this._closeFolders=P}add(i,v,x,M,D){if(Object(x)===x)return new Ie(this,i,v,x);const P=i[v];switch(typeof P){case"number":return new $e(this,i,v,x,M,D);case"boolean":return new Ue(this,i,v);case"string":return new Oe(this,i,v);case"function":return new Qt(this,i,v)}console.error(`gui.add failed
	property:`,v,`
	object:`,i,`
	value:`,P)}addColor(i,v,x=1){return new Be(this,i,v,x)}addFolder(i){const v=new ne({parent:this,title:i});return this.root._closeFolders&&v.close(),v}load(i,v=!0){return i.controllers&&this.controllers.forEach(x=>{x instanceof Qt||x._name in i.controllers&&x.load(i.controllers[x._name])}),v&&i.folders&&this.folders.forEach(x=>{x._title in i.folders&&x.load(i.folders[x._title])}),this}save(i=!0){const v={controllers:{},folders:{}};return this.controllers.forEach(x=>{if(!(x instanceof Qt)){if(x._name in v.controllers)throw new Error(`Cannot save GUI with duplicate property "${x._name}"`);v.controllers[x._name]=x.save()}}),i&&this.folders.forEach(x=>{if(x._title in v.folders)throw new Error(`Cannot save GUI with duplicate folder "${x._title}"`);v.folders[x._title]=x.save()}),v}open(i=!0){return this._setClosed(!i),this.$title.setAttribute("aria-expanded",!this._closed),this.domElement.classList.toggle("lil-closed",this._closed),this}close(){return this.open(!1)}_setClosed(i){this._closed!==i&&(this._closed=i,this._callOnOpenClose(this))}show(i=!0){return this._hidden=!i,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}openAnimated(i=!0){return this._setClosed(!i),this.$title.setAttribute("aria-expanded",!this._closed),requestAnimationFrame(()=>{const v=this.$children.clientHeight;this.$children.style.height=v+"px",this.domElement.classList.add("lil-transition");const x=D=>{D.target===this.$children&&(this.$children.style.height="",this.domElement.classList.remove("lil-transition"),this.$children.removeEventListener("transitionend",x))};this.$children.addEventListener("transitionend",x);const M=i?this.$children.scrollHeight:0;this.domElement.classList.toggle("lil-closed",!i),requestAnimationFrame(()=>{this.$children.style.height=M+"px"})}),this}title(i){return this._title=i,this.$title.textContent=i,this}reset(i=!0){return(i?this.controllersRecursive():this.controllers).forEach(x=>x.reset()),this}onChange(i){return this._onChange=i,this}_callOnChange(i){this.parent&&this.parent._callOnChange(i),this._onChange!==void 0&&this._onChange.call(this,{object:i.object,property:i.property,value:i.getValue(),controller:i})}onFinishChange(i){return this._onFinishChange=i,this}_callOnFinishChange(i){this.parent&&this.parent._callOnFinishChange(i),this._onFinishChange!==void 0&&this._onFinishChange.call(this,{object:i.object,property:i.property,value:i.getValue(),controller:i})}onOpenClose(i){return this._onOpenClose=i,this}_callOnOpenClose(i){this.parent&&this.parent._callOnOpenClose(i),this._onOpenClose!==void 0&&this._onOpenClose.call(this,i)}destroy(){this.parent&&(this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.folders.splice(this.parent.folders.indexOf(this),1)),this.domElement.parentElement&&this.domElement.parentElement.removeChild(this.domElement),Array.from(this.children).forEach(i=>i.destroy())}controllersRecursive(){let i=Array.from(this.controllers);return this.folders.forEach(v=>{i=i.concat(v.controllersRecursive())}),i}foldersRecursive(){let i=Array.from(this.folders);return this.folders.forEach(v=>{i=i.concat(v.foldersRecursive())}),i}}var Ce=`struct CommonUniforms {
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
}`;class Ge{device;format;uniformBuffer;tileTexture;tileSampler;lightUniformBuffer;sphereUniformBuffer;shadowUniformBuffer;positionBuffer;indexBuffer;vertexCount;pipeline;constructor(i,v,x,M,D,P,z,T){this.device=i,this.format=v,this.uniformBuffer=x,this.tileTexture=M,this.tileSampler=D,this.lightUniformBuffer=P,this.sphereUniformBuffer=z,this.shadowUniformBuffer=T,this.createGeometry(),this.createPipeline()}createGeometry(){function i(P){return[(P&1)*2-1,(P&2)-1,(P&4)/2-1]}const v=[[0,4,2,6,-1,0,0],[1,3,5,7,1,0,0],[2,6,3,7,0,1,0],[0,2,1,3,0,0,-1],[4,5,6,7,0,0,1]],x=[],M=[];let D=0;for(const P of v){const z=D;for(let T=0;T<4;T++){const k=P[T],V=i(k);x.push(...V),D++}M.push(z+0,z+1,z+2),M.push(z+2,z+1,z+3)}this.vertexCount=M.length,this.positionBuffer=this.device.createBuffer({label:"Pool Vertex Buffer",size:x.length*4,usage:GPUBufferUsage.VERTEX,mappedAtCreation:!0}),new Float32Array(this.positionBuffer.getMappedRange()).set(x),this.positionBuffer.unmap(),this.indexBuffer=this.device.createBuffer({label:"Pool Index Buffer",size:M.length*4,usage:GPUBufferUsage.INDEX,mappedAtCreation:!0}),new Uint32Array(this.indexBuffer.getMappedRange()).set(M),this.indexBuffer.unmap()}createPipeline(){const i=this.device.createShaderModule({label:"Pool Vertex Shader",code:Ce}),v=this.device.createShaderModule({label:"Pool Fragment Shader",code:ke});this.pipeline=this.device.createRenderPipeline({label:"Pool Pipeline",layout:"auto",vertex:{module:i,entryPoint:"vs_main",buffers:[{arrayStride:12,attributes:[{shaderLocation:0,offset:0,format:"float32x3"}]}]},fragment:{module:v,entryPoint:"fs_main",targets:[{format:this.format}]},primitive:{topology:"triangle-list",cullMode:"back"},depthStencil:{depthWriteEnabled:!0,depthCompare:"less",format:"depth24plus"}})}render(i,v,x,M){const D=this.device.createBindGroup({layout:this.pipeline.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:this.uniformBuffer}},{binding:1,resource:this.tileSampler},{binding:2,resource:this.tileTexture.createView()},{binding:3,resource:{buffer:this.lightUniformBuffer}},{binding:4,resource:{buffer:this.sphereUniformBuffer}},{binding:5,resource:x},{binding:6,resource:v.createView()},{binding:7,resource:M.createView()},{binding:8,resource:{buffer:this.shadowUniformBuffer}}]});i.setPipeline(this.pipeline),i.setBindGroup(0,D),i.setVertexBuffer(0,this.positionBuffer),i.setIndexBuffer(this.indexBuffer,"uint32"),i.drawIndexed(this.vertexCount)}}var qe=`struct CommonUniforms {
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
}`;class He{device;format;commonUniformBuffer;sphereUniformBuffer;lightUniformBuffer;positionBuffer;indexBuffer;vertexCount;pipeline;constructor(i,v,x,M,D){this.device=i,this.format=v,this.commonUniformBuffer=x,this.sphereUniformBuffer=D,this.lightUniformBuffer=M,this.createGeometry(),this.createPipeline()}update(i,v){const x=new Float32Array([...i,v]);this.device.queue.writeBuffer(this.sphereUniformBuffer,0,x)}createGeometry(){class v{unique;map;constructor(){this.unique=[],this.map=new Map}add(k){const V=k.join(",");return this.map.has(V)||(this.map.set(V,this.unique.length),this.unique.push(k)),this.map.get(V)}}function x(T){return[(T&1)*2-1,(T&2)-1,(T&4)/2-1]}function M(T){return T+(T-T*T)/2}const D=new v,P=[];for(let T=0;T<8;T++){const k=x(T),V=k[0]*k[1]*k[2]>0,B=[];for(let N=0;N<=10;N++)for(let X=0;N+X<=10;X++){const et=N/10,Y=X/10,ot=(10-N-X)/10,$=[M(et),M(Y),M(ot)],L=Math.sqrt($[0]*$[0]+$[1]*$[1]+$[2]*$[2]),j=[$[0]/L*k[0],$[1]/L*k[1],$[2]/L*k[2]];B.push(D.add(j))}for(let N=0;N<=10;N++)if(N>0)for(let X=0;N+X<=10;X++){const et=(N-1)*11+(N-1-(N-1)*(N-1))/2+X,Y=N*11+(N-N*N)/2+X;V?P.push(B[et],B[Y],B[et+1]):P.push(B[et],B[et+1],B[Y]),N+X<10&&(V?P.push(B[Y],B[Y+1],B[et+1]):P.push(B[Y],B[et+1],B[Y+1]))}}this.vertexCount=P.length;const z=[];for(const T of D.unique)z.push(...T);this.positionBuffer=this.device.createBuffer({label:"Sphere Vertex Buffer",size:z.length*4,usage:GPUBufferUsage.VERTEX,mappedAtCreation:!0}),new Float32Array(this.positionBuffer.getMappedRange()).set(z),this.positionBuffer.unmap(),this.indexBuffer=this.device.createBuffer({label:"Sphere Index Buffer",size:P.length*4,usage:GPUBufferUsage.INDEX,mappedAtCreation:!0}),new Uint32Array(this.indexBuffer.getMappedRange()).set(P),this.indexBuffer.unmap()}createPipeline(){const i=this.device.createShaderModule({label:"Sphere Vertex Shader",code:qe}),v=this.device.createShaderModule({label:"Sphere Fragment Shader",code:Ne});this.pipeline=this.device.createRenderPipeline({label:"Sphere Pipeline",layout:"auto",vertex:{module:i,entryPoint:"vs_main",buffers:[{arrayStride:12,attributes:[{shaderLocation:0,offset:0,format:"float32x3"}]}]},fragment:{module:v,entryPoint:"fs_main",targets:[{format:this.format}]},primitive:{topology:"triangle-list",cullMode:"back"},depthStencil:{depthWriteEnabled:!0,depthCompare:"less",format:"depth24plus"}})}render(i,v,x,M){const D=this.device.createBindGroup({layout:this.pipeline.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:this.commonUniformBuffer}},{binding:1,resource:{buffer:this.sphereUniformBuffer}},{binding:2,resource:{buffer:this.lightUniformBuffer}},{binding:3,resource:x},{binding:4,resource:v.createView()},{binding:5,resource:M.createView()}]});i.setPipeline(this.pipeline),i.setBindGroup(0,D),i.setVertexBuffer(0,this.positionBuffer),i.setIndexBuffer(this.indexBuffer,"uint32"),i.drawIndexed(this.vertexCount)}}const Yt=`struct VertexOutput {
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
}`;class tn{device;width;height;commonUniformBuffer;lightUniformBuffer;sphereUniformBuffer;shadowUniformBuffer;tileTexture;tileSampler;skyTexture;skySampler;textureA;textureB;causticsTexture;sampler;dropPipeline;updatePipeline;normalPipeline;spherePipeline;positionBuffer;indexBuffer;vertexCount;surfaceBindGroupLayout;surfacePipelineAbove;surfacePipelineUnder;causticsPipeline;constructor(i,v,x,M,D,P,z,T,k,V,B){this.device=i,this.width=v,this.height=x,this.commonUniformBuffer=M,this.lightUniformBuffer=D,this.sphereUniformBuffer=P,this.shadowUniformBuffer=z,this.tileTexture=T,this.tileSampler=k,this.skyTexture=V,this.skySampler=B,this.textureA=this.createTexture(),this.textureB=this.createTexture(),this.causticsTexture=this.device.createTexture({size:[1024,1024],format:"rgba8unorm",usage:GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.RENDER_ATTACHMENT}),this.sampler=i.createSampler({magFilter:"linear",minFilter:"linear",addressModeU:"clamp-to-edge",addressModeV:"clamp-to-edge"}),this.createPipelines(),this.createSurfaceMesh(),this.createSurfacePipeline(),this.createCausticsPipeline()}createTexture(){const i=this.device.features.has("float32-filterable")?"rgba32float":"rgba16float";return this.device.createTexture({size:[this.width,this.height],format:i,usage:GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.RENDER_ATTACHMENT})}createPipelines(){const i=this.device.features.has("float32-filterable")?"rgba32float":"rgba16float";this.dropPipeline=this.createPipeline("Drop",Yt,je,32,i),this.updatePipeline=this.createPipeline("Update",Yt,We,16,i),this.normalPipeline=this.createPipeline("Normal",Yt,Xe,16,i),this.spherePipeline=this.createPipeline("Sphere",Yt,Ye,32,i)}createPipeline(i,v,x,M,D){const P=this.device.createShaderModule({label:i+" Module",code:v+x});return{pipeline:this.device.createRenderPipeline({label:i+" Pipeline",layout:"auto",vertex:{module:P,entryPoint:"vs_main"},fragment:{module:P,entryPoint:"fs_main",targets:[{format:D}]},primitive:{topology:"triangle-list"}}),uniformSize:M,uniformBuffer:this.device.createBuffer({size:M,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST})}}runPipeline(i,v){this.device.queue.writeBuffer(i.uniformBuffer,0,v);const x=this.device.createBindGroup({layout:i.pipeline.getBindGroupLayout(0),entries:[{binding:0,resource:this.textureA.createView()},{binding:1,resource:this.sampler},{binding:2,resource:{buffer:i.uniformBuffer}}]}),M=this.device.createCommandEncoder(),D=M.beginRenderPass({colorAttachments:[{view:this.textureB.createView(),loadOp:"clear",storeOp:"store",clearValue:{r:0,g:0,b:0,a:0}}]});D.setPipeline(i.pipeline),D.setBindGroup(0,x),D.draw(6),D.end(),this.device.queue.submit([M.finish()]);const P=this.textureA;this.textureA=this.textureB,this.textureB=P}addDrop(i,v,x,M){const D=new Float32Array(4);D[0]=i,D[1]=v,D[2]=x,D[3]=M,this.runPipeline(this.dropPipeline,D)}stepSimulation(){const i=new Float32Array(2);i[0]=1/this.width,i[1]=1/this.height,this.runPipeline(this.updatePipeline,i)}updateNormals(){const i=new Float32Array(2);i[0]=1/this.width,i[1]=1/this.height,this.runPipeline(this.normalPipeline,i)}moveSphere(i,v,x){const M=new Float32Array(8);M[0]=i[0],M[1]=i[1],M[2]=i[2],M[3]=x,M[4]=v[0],M[5]=v[1],M[6]=v[2],M[7]=0,this.runPipeline(this.spherePipeline,M)}createSurfaceMesh(){const v=[],x=[];for(let M=0;M<=200;M++){const D=M/200;for(let P=0;P<=200;P++){const z=P/200;v.push(2*z-1,2*D-1,0)}}for(let M=0;M<200;M++)for(let D=0;D<200;D++){const P=D+M*201;x.push(P,P+1,P+200+1),x.push(P+200+1,P+1,P+200+2)}this.vertexCount=x.length,this.positionBuffer=this.device.createBuffer({label:"Water Surface Vertices",size:v.length*4,usage:GPUBufferUsage.VERTEX,mappedAtCreation:!0}),new Float32Array(this.positionBuffer.getMappedRange()).set(v),this.positionBuffer.unmap(),this.indexBuffer=this.device.createBuffer({label:"Water Surface Indices",size:x.length*4,usage:GPUBufferUsage.INDEX,mappedAtCreation:!0}),new Uint32Array(this.indexBuffer.getMappedRange()).set(x),this.indexBuffer.unmap()}createSurfacePipeline(){const i=(D,P)=>this.device.createShaderModule({label:`${D} Vertex Shader`,code:P}),v=(D,P)=>this.device.createShaderModule({label:`${D} Fragment Shader`,code:P});this.surfaceBindGroupLayout=this.device.createBindGroupLayout({label:"Water Surface BindGroupLayout",entries:[{binding:0,visibility:GPUShaderStage.VERTEX|GPUShaderStage.FRAGMENT,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.FRAGMENT,buffer:{type:"uniform"}},{binding:2,visibility:GPUShaderStage.FRAGMENT,buffer:{type:"uniform"}},{binding:3,visibility:GPUShaderStage.FRAGMENT,sampler:{}},{binding:4,visibility:GPUShaderStage.FRAGMENT,texture:{}},{binding:5,visibility:GPUShaderStage.VERTEX|GPUShaderStage.FRAGMENT,sampler:{}},{binding:6,visibility:GPUShaderStage.VERTEX|GPUShaderStage.FRAGMENT,texture:{}},{binding:7,visibility:GPUShaderStage.FRAGMENT,sampler:{}},{binding:8,visibility:GPUShaderStage.FRAGMENT,texture:{viewDimension:"cube"}},{binding:9,visibility:GPUShaderStage.FRAGMENT,texture:{}},{binding:10,visibility:GPUShaderStage.FRAGMENT,buffer:{type:"uniform"}}]});const x=this.device.createPipelineLayout({label:"Water Surface PipelineLayout",bindGroupLayouts:[this.surfaceBindGroupLayout]}),M=(D,P,z,T)=>{const k=i(D,P),V=v(D,z);return this.device.createRenderPipeline({label:D,layout:x,vertex:{module:k,entryPoint:"vs_main",buffers:[{arrayStride:12,attributes:[{shaderLocation:0,offset:0,format:"float32x3"}]}]},fragment:{module:V,entryPoint:"fs_main",targets:[{format:navigator.gpu.getPreferredCanvasFormat()}]},primitive:{topology:"triangle-list",cullMode:T},depthStencil:{depthWriteEnabled:!0,depthCompare:"less",format:"depth24plus"}})};this.surfacePipelineAbove=M("Water Surface Above Pipeline",pe,Ze,"front"),this.surfacePipelineUnder=M("Water Surface Under Pipeline",pe,Ke,"back")}renderSurface(i){const v=this.device.createBindGroup({layout:this.surfaceBindGroupLayout,entries:[{binding:0,resource:{buffer:this.commonUniformBuffer}},{binding:1,resource:{buffer:this.lightUniformBuffer}},{binding:2,resource:{buffer:this.sphereUniformBuffer}},{binding:3,resource:this.tileSampler},{binding:4,resource:this.tileTexture.createView()},{binding:5,resource:this.sampler},{binding:6,resource:this.textureA.createView()},{binding:7,resource:this.skySampler},{binding:8,resource:this.skyTexture.createView({dimension:"cube"})},{binding:9,resource:this.causticsTexture.createView()},{binding:10,resource:{buffer:this.shadowUniformBuffer}}]});i.setPipeline(this.surfacePipelineAbove),i.setBindGroup(0,v),i.setVertexBuffer(0,this.positionBuffer),i.setIndexBuffer(this.indexBuffer,"uint32"),i.drawIndexed(this.vertexCount),i.setPipeline(this.surfacePipelineUnder),i.setBindGroup(0,v),i.drawIndexed(this.vertexCount)}createCausticsPipeline(){const i=this.device.createShaderModule({label:"Caustics Vertex Shader",code:Qe}),v=this.device.createShaderModule({label:"Caustics Fragment Shader",code:Je});this.causticsPipeline=this.device.createRenderPipeline({label:"Caustics Pipeline",layout:"auto",vertex:{module:i,entryPoint:"vs_main",buffers:[{arrayStride:12,attributes:[{shaderLocation:0,offset:0,format:"float32x3"}]}]},fragment:{module:v,entryPoint:"fs_main",targets:[{format:"rgba8unorm",blend:{color:{operation:"add",srcFactor:"one",dstFactor:"one"},alpha:{operation:"add",srcFactor:"one",dstFactor:"one"}}}]},primitive:{topology:"triangle-list"}})}updateCaustics(){const i=this.device.createBindGroup({layout:this.causticsPipeline.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:this.lightUniformBuffer}},{binding:1,resource:{buffer:this.sphereUniformBuffer}},{binding:2,resource:this.sampler},{binding:3,resource:this.textureA.createView()},{binding:4,resource:{buffer:this.shadowUniformBuffer}}]}),v=this.device.createCommandEncoder(),x=v.beginRenderPass({colorAttachments:[{view:this.causticsTexture.createView(),loadOp:"clear",storeOp:"store",clearValue:{r:0,g:0,b:0,a:0}}]});x.setPipeline(this.causticsPipeline),x.setBindGroup(0,i),x.setVertexBuffer(0,this.positionBuffer),x.setIndexBuffer(this.indexBuffer,"uint32"),x.drawIndexed(this.vertexCount),x.end(),this.device.queue.submit([v.finish()])}}class nt{x;y;z;constructor(i=0,v=0,x=0){this.x=i,this.y=v,this.z=x}negative(){return new nt(-this.x,-this.y,-this.z)}add(i){return i instanceof nt?new nt(this.x+i.x,this.y+i.y,this.z+i.z):new nt(this.x+i,this.y+i,this.z+i)}subtract(i){return i instanceof nt?new nt(this.x-i.x,this.y-i.y,this.z-i.z):new nt(this.x-i,this.y-i,this.z-i)}multiply(i){return i instanceof nt?new nt(this.x*i.x,this.y*i.y,this.z*i.z):new nt(this.x*i,this.y*i,this.z*i)}divide(i){return i instanceof nt?new nt(this.x/i.x,this.y/i.y,this.z/i.z):new nt(this.x/i,this.y/i,this.z/i)}dot(i){return this.x*i.x+this.y*i.y+this.z*i.z}length(){return Math.sqrt(this.dot(this))}unit(){return this.divide(this.length())}toArray(){return[this.x,this.y,this.z]}clone(){return new nt(this.x,this.y,this.z)}static fromAngles(i,v){return new nt(Math.cos(v)*Math.cos(i),Math.sin(v),Math.cos(v)*Math.sin(i))}static lerp(i,v,x){return i.add(v.subtract(i).multiply(x))}}class en{t;hit;normal;constructor(i,v,x){this.t=i,this.hit=v,this.normal=x}}class Zt{eye;viewport;invViewProj;ray00;ray10;ray01;ray11;constructor(i,v,x){this.viewport=x;const M=Vt.invert(i),D=Jt.transformMat4([0,0,0],M);this.eye=new nt(D[0],D[1],D[2]),this.invViewProj=Vt.invert(Vt.multiply(v,i));const[P,z,T,k]=x,V=P+T,B=z+k;this.ray00=this.unProject(P,z,1).subtract(this.eye),this.ray10=this.unProject(V,z,1).subtract(this.eye),this.ray01=this.unProject(P,B,1).subtract(this.eye),this.ray11=this.unProject(V,B,1).subtract(this.eye)}unProject(i,v,x){const[M,D,P,z]=this.viewport,T=(i-M)/P*2-1,k=(1-(v-D)/z)*2-1,V=Jt.transformMat4([T,k,x],this.invViewProj);return new nt(V[0],V[1],V[2])}getRayForPixel(i,v){const[x,M,D,P]=this.viewport,z=(i-x)/D,T=(v-M)/P,k=nt.lerp(this.ray00,this.ray10,z),V=nt.lerp(this.ray01,this.ray11,z);return nt.lerp(k,V,T).unit()}static hitTestSphere(i,v,x,M){const D=i.subtract(x),P=v.dot(v),z=2*v.dot(D),T=D.dot(D)-M*M,k=z*z-4*P*T;if(k>0){const V=(-z-Math.sqrt(k))/(2*P),B=i.add(v.multiply(V)),N=B.subtract(x).divide(M);return new en(V,B,N)}return null}}class nn{device;constructor(i){this.device=i}async load(i){const v=["xpos","xneg","ypos","yneg","zpos","zneg"],x=await Promise.all(v.map(z=>fetch(i[z]).then(T=>T.blob()).then(T=>createImageBitmap(T)))),{width:M,height:D}=x[0],P=this.device.createTexture({size:[M,D,6],format:"rgba8unorm",usage:GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_DST|GPUTextureUsage.RENDER_ATTACHMENT});return x.forEach((z,T)=>{this.device.queue.copyExternalImageToTexture({source:z,flipY:!0},{texture:P,origin:[0,0,T]},{width:M,height:D})}),P}}var Ft=(f=>(f[f.None=-1]="None",f[f.AddDrops=0]="AddDrops",f[f.OrbitCamera=1]="OrbitCamera",f[f.MoveSphere=2]="MoveSphere",f))(Ft||{});async function rn(){const f=navigator.gpu;if(!f){document.getElementById("loading").innerHTML="WebGPU not supported.";return}const i=await f.requestAdapter();if(!i){document.getElementById("loading").innerHTML="No WebGPU adapter found.";return}const v=[];i.features.has("float32-filterable")&&v.push("float32-filterable");const x=await i.requestDevice({requiredFeatures:v}),M=document.querySelector("canvas"),D=M.getContext("webgpu"),P=navigator.gpu.getPreferredCanvasFormat();D.configure({device:x,format:P,alphaMode:"premultiplied"});const z=document.getElementById("help"),T=window.devicePixelRatio||1;let k=performance.now();async function V(r){const n=await(await fetch(r)).blob(),a=await createImageBitmap(n),d=x.createTexture({label:r,size:[a.width,a.height],format:"rgba8unorm",usage:GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_DST|GPUTextureUsage.RENDER_ATTACHMENT});return x.queue.copyExternalImageToTexture({source:a,flipY:!0},{texture:d},{width:a.width,height:a.height}),d}const B="/webgpu-water/",N=await V(`${B}tiles.jpg`),X=x.createSampler({magFilter:"linear",minFilter:"linear",addressModeU:"repeat",addressModeV:"repeat"}),Y=await new nn(x).load({xpos:`${B}xpos.jpg`,xneg:`${B}xneg.jpg`,ypos:`${B}ypos.jpg`,yneg:`${B}yneg.jpg`,zpos:`${B}zpos.jpg`,zneg:`${B}zneg.jpg`}),ot=x.createSampler({magFilter:"linear",minFilter:"linear"});let $=-25,L=-200.5;function j(){const r=M.width/M.height,s=Vt.perspective(Math.PI/4,r,.01,100),n=Vt.identity();return Vt.translate(n,[0,0,-4],n),Vt.rotateX(n,-$*Math.PI/180,n),Vt.rotateY(n,-L*Math.PI/180,n),Vt.translate(n,[0,.5,0],n),{projectionMatrix:s,viewMatrix:n}}const rt=x.createBuffer({size:80,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),at=x.createBuffer({size:16,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),pt=x.createBuffer({size:16,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),gt=x.createBuffer({size:16,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST});let wt=new nt(2,2,-1).unit();function vt(){x.queue.writeBuffer(at,0,new Float32Array([...wt.toArray(),0]))}vt(),x.queue.writeBuffer(gt,0,new Float32Array([1,1,1,0]));const lt=new Ge(x,P,rt,N,X,at,pt,gt),xt=new He(x,P,rt,at,pt),Q=new tn(x,256,256,rt,at,pt,gt,N,X,Y,ot);let Z=new nt(-.4,-.75,.2),ut=Z.clone();const C=.25;let q=new nt;const W=new nt(0,-4,0);let st=!1,Rt=!1;const J=new ne({title:"Settings"});J.close();const ct={gravity:st,followCamera:!1,showSphere:!0};J.add(ct,"showSphere").name("Render Sphere").onChange(r=>{x.queue.writeBuffer(gt,0,new Float32Array([1,r?1:0,1,0])),document.activeElement?.blur()});const yt=J.add(ct,"gravity").name("Toggle Gravity").onChange(r=>{st=r,document.activeElement?.blur()});J.add(ct,"followCamera").name("Light From Camera").onChange(()=>{document.activeElement?.blur()}),xt.update(Z.toArray(),C);for(let r=0;r<20;r++)Q.addDrop(Math.random()*2-1,Math.random()*2-1,.03,r&1?.01:-.01);const Et={};window.addEventListener("keydown",r=>{const s=r.key.toUpperCase();Et[s]=!0,s==="G"?(st=!st,ct.gravity=st,yt.updateDisplay()):s===" "&&(Rt=!Rt)}),window.addEventListener("keyup",r=>{Et[r.key.toUpperCase()]=!1});let it=Ft.None,bt=0,Mt=0,b,A;function p(){return[0,0,M.width,M.height]}function e(r,s){bt=r,Mt=s;const{projectionMatrix:n,viewMatrix:a}=j(),d=new Zt(a,n,p()),h=d.getRayForPixel(r*T,s*T),y=ct.showSphere?Zt.hitTestSphere(d.eye,h,Z,C):null;if(y){it=Ft.MoveSphere,b=y.hit,A=d.getRayForPixel(M.width/2,M.height/2).negative();return}const S=-d.eye.y/h.y,_=d.eye.add(h.multiply(S));Math.abs(_.x)<1&&Math.abs(_.z)<1?(it=Ft.AddDrops,Q.addDrop(_.x,_.z,.03,.01)):it=Ft.OrbitCamera}function c(r,s){if(it===Ft.OrbitCamera)L-=r-bt,$-=s-Mt,$=Math.max(-89.999,Math.min(89.999,$));else if(it===Ft.MoveSphere){const{projectionMatrix:n,viewMatrix:a}=j(),d=new Zt(a,n,p()),h=d.getRayForPixel(r*T,s*T),y=-A.dot(d.eye.subtract(b))/A.dot(h),S=d.eye.add(h.multiply(y));Z=Z.add(S.subtract(b)),Z.x=Math.max(C-1,Math.min(1-C,Z.x)),Z.y=Math.max(C-1,Math.min(10,Z.y)),Z.z=Math.max(C-1,Math.min(1-C,Z.z)),xt.update(Z.toArray(),C),b=S}else if(it===Ft.AddDrops){const{projectionMatrix:n,viewMatrix:a}=j(),d=new Zt(a,n,p()),h=d.getRayForPixel(r*T,s*T),y=-d.eye.y/h.y,S=d.eye.add(h.multiply(y));Math.abs(S.x)<1&&Math.abs(S.z)<1&&Q.addDrop(S.x,S.z,.03,.01)}bt=r,Mt=s}function o(){it=Ft.None}M.addEventListener("pointerdown",r=>{r.preventDefault(),M.setPointerCapture(r.pointerId),e(r.offsetX,r.offsetY)}),M.addEventListener("pointermove",r=>{it!==Ft.None&&c(r.offsetX,r.offsetY)}),M.addEventListener("pointerup",r=>{M.releasePointerCapture(r.pointerId),o()}),M.addEventListener("pointercancel",r=>{M.releasePointerCapture(r.pointerId),o()});let u;function g(){const s=window.matchMedia("(max-width: 600px)").matches?window.innerWidth:window.innerWidth-z.clientWidth-20,n=window.innerHeight;M.width=Math.floor(s*T),M.height=Math.floor(n*T),M.style.width=`${s}px`,M.style.height=`${n}px`,u&&u.destroy(),u=x.createTexture({size:[M.width,M.height],format:"depth24plus",usage:GPUTextureUsage.RENDER_ATTACHMENT}),t()}window.addEventListener("resize",g);const m=document.getElementById("help-toggle");m.addEventListener("click",()=>{z.classList.toggle("collapsed"),m.textContent=z.classList.contains("collapsed")?"menu":"chevron_right",g()}),window.addEventListener("pointerdown",r=>{if(window.matchMedia("(max-width: 600px)").matches&&!z.classList.contains("collapsed")){const n=r.target;!z.contains(n)&&!m.contains(n)&&(z.classList.add("collapsed"),m.textContent="menu",g())}}),document.getElementById("loading").innerHTML="",g();function w(){const{projectionMatrix:r,viewMatrix:s}=j(),n=Vt.multiply(r,s),a=Vt.invert(s),d=Jt.transformMat4([0,0,0],a),h=new Float32Array(20);h.set(n,0),h.set(d,16),x.queue.writeBuffer(rt,0,h)}function t(){const r=performance.now();let s=(r-k)/1e3;if(k=r,s>1&&(s=1),(Et.L||ct.followCamera)&&(wt=nt.fromAngles((90-L)*Math.PI/180,-$*Math.PI/180),vt()),!Rt){if(it===Ft.MoveSphere)q=new nt;else if(st){const d=Math.max(0,Math.min(1,(C-Z.y)/(2*C)));q=q.add(W.multiply(s-1.1*s*d)),q=q.subtract(q.unit().multiply(d*s*q.dot(q))),Z=Z.add(q.multiply(s)),Z.y<C-1&&(Z.y=C-1,q.y=Math.abs(q.y)*.7),xt.update(Z.toArray(),C)}ct.showSphere&&Q.moveSphere(ut.toArray(),Z.toArray(),C),ut=Z.clone(),Q.stepSimulation(),Q.stepSimulation(),Q.updateNormals(),Q.updateCaustics()}w();const n=x.createCommandEncoder(),a=n.beginRenderPass({colorAttachments:[{view:D.getCurrentTexture().createView(),clearValue:{r:0,g:0,b:0,a:1},loadOp:"clear",storeOp:"store"}],depthStencilAttachment:{view:u.createView(),depthClearValue:1,depthLoadOp:"clear",depthStoreOp:"store"}});lt.render(a,Q.textureA,Q.sampler,Q.causticsTexture),ct.showSphere&&xt.render(a,Q.textureA,Q.sampler,Q.causticsTexture),Q.renderSurface(a),a.end(),x.queue.submit([n.finish()])}function l(){requestAnimationFrame(l),t()}requestAnimationFrame(l)}rn();
