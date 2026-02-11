(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const S of document.querySelectorAll('link[rel="modulepreload"]'))y(S);new MutationObserver(S=>{for(const U of S)if(U.type==="childList")for(const R of U.addedNodes)R.tagName==="LINK"&&R.rel==="modulepreload"&&y(R)}).observe(document,{childList:!0,subtree:!0});function v(S){const U={};return S.integrity&&(U.integrity=S.integrity),S.referrerPolicy&&(U.referrerPolicy=S.referrerPolicy),S.crossOrigin==="use-credentials"?U.credentials="include":S.crossOrigin==="anonymous"?U.credentials="omit":U.credentials="same-origin",U}function y(S){if(S.ep)return;S.ep=!0;const U=v(S);fetch(S.href,U)}})();function me(f,i){return class extends f{constructor(...v){super(...v),i(this)}}}const we=me(Array,f=>f.fill(0));let j=1e-6;function ve(f){function i(p=0,m=0){const w=new f(2);return p!==void 0&&(w[0]=p,m!==void 0&&(w[1]=m)),w}const v=i;function y(p,m,w){const t=w??new f(2);return t[0]=p,t[1]=m,t}function S(p,m){const w=m??new f(2);return w[0]=Math.ceil(p[0]),w[1]=Math.ceil(p[1]),w}function U(p,m){const w=m??new f(2);return w[0]=Math.floor(p[0]),w[1]=Math.floor(p[1]),w}function R(p,m){const w=m??new f(2);return w[0]=Math.round(p[0]),w[1]=Math.round(p[1]),w}function L(p,m=0,w=1,t){const l=t??new f(2);return l[0]=Math.min(w,Math.max(m,p[0])),l[1]=Math.min(w,Math.max(m,p[1])),l}function T(p,m,w){const t=w??new f(2);return t[0]=p[0]+m[0],t[1]=p[1]+m[1],t}function q(p,m,w,t){const l=t??new f(2);return l[0]=p[0]+m[0]*w,l[1]=p[1]+m[1]*w,l}function G(p,m){const w=p[0],t=p[1],l=m[0],r=m[1],o=Math.sqrt(w*w+t*t),n=Math.sqrt(l*l+r*r),a=o*n,g=a&&dt(p,m)/a;return Math.acos(g)}function F(p,m,w){const t=w??new f(2);return t[0]=p[0]-m[0],t[1]=p[1]-m[1],t}const N=F;function K(p,m){return Math.abs(p[0]-m[0])<j&&Math.abs(p[1]-m[1])<j}function tt(p,m){return p[0]===m[0]&&p[1]===m[1]}function Q(p,m,w,t){const l=t??new f(2);return l[0]=p[0]+w*(m[0]-p[0]),l[1]=p[1]+w*(m[1]-p[1]),l}function lt(p,m,w,t){const l=t??new f(2);return l[0]=p[0]+w[0]*(m[0]-p[0]),l[1]=p[1]+w[1]*(m[1]-p[1]),l}function V(p,m,w){const t=w??new f(2);return t[0]=Math.max(p[0],m[0]),t[1]=Math.max(p[1],m[1]),t}function O(p,m,w){const t=w??new f(2);return t[0]=Math.min(p[0],m[0]),t[1]=Math.min(p[1],m[1]),t}function X(p,m,w){const t=w??new f(2);return t[0]=p[0]*m,t[1]=p[1]*m,t}const it=X;function ft(p,m,w){const t=w??new f(2);return t[0]=p[0]/m,t[1]=p[1]/m,t}function rt(p,m){const w=m??new f(2);return w[0]=1/p[0],w[1]=1/p[1],w}const bt=rt;function ht(p,m,w){const t=w??new f(3),l=p[0]*m[1]-p[1]*m[0];return t[0]=0,t[1]=0,t[2]=l,t}function dt(p,m){return p[0]*m[0]+p[1]*m[1]}function st(p){const m=p[0],w=p[1];return Math.sqrt(m*m+w*w)}const Mt=st;function pt(p){const m=p[0],w=p[1];return m*m+w*w}const Tt=pt;function gt(p,m){const w=p[0]-m[0],t=p[1]-m[1];return Math.sqrt(w*w+t*t)}const Y=gt;function k(p,m){const w=p[0]-m[0],t=p[1]-m[1];return w*w+t*t}const C=k;function mt(p,m){const w=m??new f(2),t=p[0],l=p[1],r=Math.sqrt(t*t+l*l);return r>1e-5?(w[0]=t/r,w[1]=l/r):(w[0]=0,w[1]=0),w}function et(p,m){const w=m??new f(2);return w[0]=-p[0],w[1]=-p[1],w}function H(p,m){const w=m??new f(2);return w[0]=p[0],w[1]=p[1],w}const wt=H;function vt(p,m,w){const t=w??new f(2);return t[0]=p[0]*m[0],t[1]=p[1]*m[1],t}const xt=vt;function J(p,m,w){const t=w??new f(2);return t[0]=p[0]/m[0],t[1]=p[1]/m[1],t}const Lt=J;function Bt(p=1,m){const w=m??new f(2),t=Math.random()*2*Math.PI;return w[0]=Math.cos(t)*p,w[1]=Math.sin(t)*p,w}function b(p){const m=p??new f(2);return m[0]=0,m[1]=0,m}function A(p,m,w){const t=w??new f(2),l=p[0],r=p[1];return t[0]=l*m[0]+r*m[4]+m[12],t[1]=l*m[1]+r*m[5]+m[13],t}function h(p,m,w){const t=w??new f(2),l=p[0],r=p[1];return t[0]=m[0]*l+m[4]*r+m[8],t[1]=m[1]*l+m[5]*r+m[9],t}function e(p,m,w,t){const l=t??new f(2),r=p[0]-m[0],o=p[1]-m[1],n=Math.sin(w),a=Math.cos(w);return l[0]=r*a-o*n+m[0],l[1]=r*n+o*a+m[1],l}function c(p,m,w){const t=w??new f(2);return mt(p,t),X(t,m,t)}function s(p,m,w){const t=w??new f(2);return st(p)>m?c(p,m,t):H(p,t)}function u(p,m,w){const t=w??new f(2);return Q(p,m,.5,t)}return{create:i,fromValues:v,set:y,ceil:S,floor:U,round:R,clamp:L,add:T,addScaled:q,angle:G,subtract:F,sub:N,equalsApproximately:K,equals:tt,lerp:Q,lerpV:lt,max:V,min:O,mulScalar:X,scale:it,divScalar:ft,inverse:rt,invert:bt,cross:ht,dot:dt,length:st,len:Mt,lengthSq:pt,lenSq:Tt,distance:gt,dist:Y,distanceSq:k,distSq:C,normalize:mt,negate:et,copy:H,clone:wt,multiply:vt,mul:xt,divide:J,div:Lt,random:Bt,zero:b,transformMat4:A,transformMat3:h,rotate:e,setLength:c,truncate:s,midpoint:u}}const ae=new Map;function ge(f){let i=ae.get(f);return i||(i=ve(f),ae.set(f,i)),i}function xe(f){function i(n,a,g){const d=new f(3);return n!==void 0&&(d[0]=n,a!==void 0&&(d[1]=a,g!==void 0&&(d[2]=g))),d}const v=i;function y(n,a,g,d){const M=d??new f(3);return M[0]=n,M[1]=a,M[2]=g,M}function S(n,a){const g=a??new f(3);return g[0]=Math.ceil(n[0]),g[1]=Math.ceil(n[1]),g[2]=Math.ceil(n[2]),g}function U(n,a){const g=a??new f(3);return g[0]=Math.floor(n[0]),g[1]=Math.floor(n[1]),g[2]=Math.floor(n[2]),g}function R(n,a){const g=a??new f(3);return g[0]=Math.round(n[0]),g[1]=Math.round(n[1]),g[2]=Math.round(n[2]),g}function L(n,a=0,g=1,d){const M=d??new f(3);return M[0]=Math.min(g,Math.max(a,n[0])),M[1]=Math.min(g,Math.max(a,n[1])),M[2]=Math.min(g,Math.max(a,n[2])),M}function T(n,a,g){const d=g??new f(3);return d[0]=n[0]+a[0],d[1]=n[1]+a[1],d[2]=n[2]+a[2],d}function q(n,a,g,d){const M=d??new f(3);return M[0]=n[0]+a[0]*g,M[1]=n[1]+a[1]*g,M[2]=n[2]+a[2]*g,M}function G(n,a){const g=n[0],d=n[1],M=n[2],_=a[0],x=a[1],P=a[2],D=Math.sqrt(g*g+d*d+M*M),E=Math.sqrt(_*_+x*x+P*P),z=D*E,$=z&&dt(n,a)/z;return Math.acos($)}function F(n,a,g){const d=g??new f(3);return d[0]=n[0]-a[0],d[1]=n[1]-a[1],d[2]=n[2]-a[2],d}const N=F;function K(n,a){return Math.abs(n[0]-a[0])<j&&Math.abs(n[1]-a[1])<j&&Math.abs(n[2]-a[2])<j}function tt(n,a){return n[0]===a[0]&&n[1]===a[1]&&n[2]===a[2]}function Q(n,a,g,d){const M=d??new f(3);return M[0]=n[0]+g*(a[0]-n[0]),M[1]=n[1]+g*(a[1]-n[1]),M[2]=n[2]+g*(a[2]-n[2]),M}function lt(n,a,g,d){const M=d??new f(3);return M[0]=n[0]+g[0]*(a[0]-n[0]),M[1]=n[1]+g[1]*(a[1]-n[1]),M[2]=n[2]+g[2]*(a[2]-n[2]),M}function V(n,a,g){const d=g??new f(3);return d[0]=Math.max(n[0],a[0]),d[1]=Math.max(n[1],a[1]),d[2]=Math.max(n[2],a[2]),d}function O(n,a,g){const d=g??new f(3);return d[0]=Math.min(n[0],a[0]),d[1]=Math.min(n[1],a[1]),d[2]=Math.min(n[2],a[2]),d}function X(n,a,g){const d=g??new f(3);return d[0]=n[0]*a,d[1]=n[1]*a,d[2]=n[2]*a,d}const it=X;function ft(n,a,g){const d=g??new f(3);return d[0]=n[0]/a,d[1]=n[1]/a,d[2]=n[2]/a,d}function rt(n,a){const g=a??new f(3);return g[0]=1/n[0],g[1]=1/n[1],g[2]=1/n[2],g}const bt=rt;function ht(n,a,g){const d=g??new f(3),M=n[2]*a[0]-n[0]*a[2],_=n[0]*a[1]-n[1]*a[0];return d[0]=n[1]*a[2]-n[2]*a[1],d[1]=M,d[2]=_,d}function dt(n,a){return n[0]*a[0]+n[1]*a[1]+n[2]*a[2]}function st(n){const a=n[0],g=n[1],d=n[2];return Math.sqrt(a*a+g*g+d*d)}const Mt=st;function pt(n){const a=n[0],g=n[1],d=n[2];return a*a+g*g+d*d}const Tt=pt;function gt(n,a){const g=n[0]-a[0],d=n[1]-a[1],M=n[2]-a[2];return Math.sqrt(g*g+d*d+M*M)}const Y=gt;function k(n,a){const g=n[0]-a[0],d=n[1]-a[1],M=n[2]-a[2];return g*g+d*d+M*M}const C=k;function mt(n,a){const g=a??new f(3),d=n[0],M=n[1],_=n[2],x=Math.sqrt(d*d+M*M+_*_);return x>1e-5?(g[0]=d/x,g[1]=M/x,g[2]=_/x):(g[0]=0,g[1]=0,g[2]=0),g}function et(n,a){const g=a??new f(3);return g[0]=-n[0],g[1]=-n[1],g[2]=-n[2],g}function H(n,a){const g=a??new f(3);return g[0]=n[0],g[1]=n[1],g[2]=n[2],g}const wt=H;function vt(n,a,g){const d=g??new f(3);return d[0]=n[0]*a[0],d[1]=n[1]*a[1],d[2]=n[2]*a[2],d}const xt=vt;function J(n,a,g){const d=g??new f(3);return d[0]=n[0]/a[0],d[1]=n[1]/a[1],d[2]=n[2]/a[2],d}const Lt=J;function Bt(n=1,a){const g=a??new f(3),d=Math.random()*2*Math.PI,M=Math.random()*2-1,_=Math.sqrt(1-M*M)*n;return g[0]=Math.cos(d)*_,g[1]=Math.sin(d)*_,g[2]=M*n,g}function b(n){const a=n??new f(3);return a[0]=0,a[1]=0,a[2]=0,a}function A(n,a,g){const d=g??new f(3),M=n[0],_=n[1],x=n[2],P=a[3]*M+a[7]*_+a[11]*x+a[15]||1;return d[0]=(a[0]*M+a[4]*_+a[8]*x+a[12])/P,d[1]=(a[1]*M+a[5]*_+a[9]*x+a[13])/P,d[2]=(a[2]*M+a[6]*_+a[10]*x+a[14])/P,d}function h(n,a,g){const d=g??new f(3),M=n[0],_=n[1],x=n[2];return d[0]=M*a[0]+_*a[4]+x*a[8],d[1]=M*a[1]+_*a[5]+x*a[9],d[2]=M*a[2]+_*a[6]+x*a[10],d}function e(n,a,g){const d=g??new f(3),M=n[0],_=n[1],x=n[2];return d[0]=M*a[0]+_*a[4]+x*a[8],d[1]=M*a[1]+_*a[5]+x*a[9],d[2]=M*a[2]+_*a[6]+x*a[10],d}function c(n,a,g){const d=g??new f(3),M=a[0],_=a[1],x=a[2],P=a[3]*2,D=n[0],E=n[1],z=n[2],$=_*z-x*E,B=x*D-M*z,I=M*E-_*D;return d[0]=D+$*P+(_*I-x*B)*2,d[1]=E+B*P+(x*$-M*I)*2,d[2]=z+I*P+(M*B-_*$)*2,d}function s(n,a){const g=a??new f(3);return g[0]=n[12],g[1]=n[13],g[2]=n[14],g}function u(n,a,g){const d=g??new f(3),M=a*4;return d[0]=n[M+0],d[1]=n[M+1],d[2]=n[M+2],d}function p(n,a){const g=a??new f(3),d=n[0],M=n[1],_=n[2],x=n[4],P=n[5],D=n[6],E=n[8],z=n[9],$=n[10];return g[0]=Math.sqrt(d*d+M*M+_*_),g[1]=Math.sqrt(x*x+P*P+D*D),g[2]=Math.sqrt(E*E+z*z+$*$),g}function m(n,a,g,d){const M=d??new f(3),_=[],x=[];return _[0]=n[0]-a[0],_[1]=n[1]-a[1],_[2]=n[2]-a[2],x[0]=_[0],x[1]=_[1]*Math.cos(g)-_[2]*Math.sin(g),x[2]=_[1]*Math.sin(g)+_[2]*Math.cos(g),M[0]=x[0]+a[0],M[1]=x[1]+a[1],M[2]=x[2]+a[2],M}function w(n,a,g,d){const M=d??new f(3),_=[],x=[];return _[0]=n[0]-a[0],_[1]=n[1]-a[1],_[2]=n[2]-a[2],x[0]=_[2]*Math.sin(g)+_[0]*Math.cos(g),x[1]=_[1],x[2]=_[2]*Math.cos(g)-_[0]*Math.sin(g),M[0]=x[0]+a[0],M[1]=x[1]+a[1],M[2]=x[2]+a[2],M}function t(n,a,g,d){const M=d??new f(3),_=[],x=[];return _[0]=n[0]-a[0],_[1]=n[1]-a[1],_[2]=n[2]-a[2],x[0]=_[0]*Math.cos(g)-_[1]*Math.sin(g),x[1]=_[0]*Math.sin(g)+_[1]*Math.cos(g),x[2]=_[2],M[0]=x[0]+a[0],M[1]=x[1]+a[1],M[2]=x[2]+a[2],M}function l(n,a,g){const d=g??new f(3);return mt(n,d),X(d,a,d)}function r(n,a,g){const d=g??new f(3);return st(n)>a?l(n,a,d):H(n,d)}function o(n,a,g){const d=g??new f(3);return Q(n,a,.5,d)}return{create:i,fromValues:v,set:y,ceil:S,floor:U,round:R,clamp:L,add:T,addScaled:q,angle:G,subtract:F,sub:N,equalsApproximately:K,equals:tt,lerp:Q,lerpV:lt,max:V,min:O,mulScalar:X,scale:it,divScalar:ft,inverse:rt,invert:bt,cross:ht,dot:dt,length:st,len:Mt,lengthSq:pt,lenSq:Tt,distance:gt,dist:Y,distanceSq:k,distSq:C,normalize:mt,negate:et,copy:H,clone:wt,multiply:vt,mul:xt,divide:J,div:Lt,random:Bt,zero:b,transformMat4:A,transformMat4Upper3x3:h,transformMat3:e,transformQuat:c,getTranslation:s,getAxis:u,getScaling:p,rotateX:m,rotateY:w,rotateZ:t,setLength:l,truncate:r,midpoint:o}}const ce=new Map;function Kt(f){let i=ce.get(f);return i||(i=xe(f),ce.set(f,i)),i}function ye(f){const i=ge(f),v=Kt(f);function y(e,c,s,u,p,m,w,t,l){const r=new f(12);return r[3]=0,r[7]=0,r[11]=0,e!==void 0&&(r[0]=e,c!==void 0&&(r[1]=c,s!==void 0&&(r[2]=s,u!==void 0&&(r[4]=u,p!==void 0&&(r[5]=p,m!==void 0&&(r[6]=m,w!==void 0&&(r[8]=w,t!==void 0&&(r[9]=t,l!==void 0&&(r[10]=l))))))))),r}function S(e,c,s,u,p,m,w,t,l,r){const o=r??new f(12);return o[0]=e,o[1]=c,o[2]=s,o[3]=0,o[4]=u,o[5]=p,o[6]=m,o[7]=0,o[8]=w,o[9]=t,o[10]=l,o[11]=0,o}function U(e,c){const s=c??new f(12);return s[0]=e[0],s[1]=e[1],s[2]=e[2],s[3]=0,s[4]=e[4],s[5]=e[5],s[6]=e[6],s[7]=0,s[8]=e[8],s[9]=e[9],s[10]=e[10],s[11]=0,s}function R(e,c){const s=c??new f(12),u=e[0],p=e[1],m=e[2],w=e[3],t=u+u,l=p+p,r=m+m,o=u*t,n=p*t,a=p*l,g=m*t,d=m*l,M=m*r,_=w*t,x=w*l,P=w*r;return s[0]=1-a-M,s[1]=n+P,s[2]=g-x,s[3]=0,s[4]=n-P,s[5]=1-o-M,s[6]=d+_,s[7]=0,s[8]=g+x,s[9]=d-_,s[10]=1-o-a,s[11]=0,s}function L(e,c){const s=c??new f(12);return s[0]=-e[0],s[1]=-e[1],s[2]=-e[2],s[4]=-e[4],s[5]=-e[5],s[6]=-e[6],s[8]=-e[8],s[9]=-e[9],s[10]=-e[10],s}function T(e,c,s){const u=s??new f(12);return u[0]=e[0]*c,u[1]=e[1]*c,u[2]=e[2]*c,u[4]=e[4]*c,u[5]=e[5]*c,u[6]=e[6]*c,u[8]=e[8]*c,u[9]=e[9]*c,u[10]=e[10]*c,u}const q=T;function G(e,c,s){const u=s??new f(12);return u[0]=e[0]+c[0],u[1]=e[1]+c[1],u[2]=e[2]+c[2],u[4]=e[4]+c[4],u[5]=e[5]+c[5],u[6]=e[6]+c[6],u[8]=e[8]+c[8],u[9]=e[9]+c[9],u[10]=e[10]+c[10],u}function F(e,c){const s=c??new f(12);return s[0]=e[0],s[1]=e[1],s[2]=e[2],s[4]=e[4],s[5]=e[5],s[6]=e[6],s[8]=e[8],s[9]=e[9],s[10]=e[10],s}const N=F;function K(e,c){return Math.abs(e[0]-c[0])<j&&Math.abs(e[1]-c[1])<j&&Math.abs(e[2]-c[2])<j&&Math.abs(e[4]-c[4])<j&&Math.abs(e[5]-c[5])<j&&Math.abs(e[6]-c[6])<j&&Math.abs(e[8]-c[8])<j&&Math.abs(e[9]-c[9])<j&&Math.abs(e[10]-c[10])<j}function tt(e,c){return e[0]===c[0]&&e[1]===c[1]&&e[2]===c[2]&&e[4]===c[4]&&e[5]===c[5]&&e[6]===c[6]&&e[8]===c[8]&&e[9]===c[9]&&e[10]===c[10]}function Q(e){const c=e??new f(12);return c[0]=1,c[1]=0,c[2]=0,c[4]=0,c[5]=1,c[6]=0,c[8]=0,c[9]=0,c[10]=1,c}function lt(e,c){const s=c??new f(12);if(s===e){let a;return a=e[1],e[1]=e[4],e[4]=a,a=e[2],e[2]=e[8],e[8]=a,a=e[6],e[6]=e[9],e[9]=a,s}const u=e[0],p=e[1],m=e[2],w=e[4],t=e[5],l=e[6],r=e[8],o=e[9],n=e[10];return s[0]=u,s[1]=w,s[2]=r,s[4]=p,s[5]=t,s[6]=o,s[8]=m,s[9]=l,s[10]=n,s}function V(e,c){const s=c??new f(12),u=e[0],p=e[1],m=e[2],w=e[4],t=e[5],l=e[6],r=e[8],o=e[9],n=e[10],a=n*t-l*o,g=-n*w+l*r,d=o*w-t*r,M=1/(u*a+p*g+m*d);return s[0]=a*M,s[1]=(-n*p+m*o)*M,s[2]=(l*p-m*t)*M,s[4]=g*M,s[5]=(n*u-m*r)*M,s[6]=(-l*u+m*w)*M,s[8]=d*M,s[9]=(-o*u+p*r)*M,s[10]=(t*u-p*w)*M,s}function O(e){const c=e[0],s=e[1],u=e[2],p=e[4],m=e[5],w=e[6],t=e[8],l=e[9],r=e[10];return c*(m*r-l*w)-p*(s*r-l*u)+t*(s*w-m*u)}const X=V;function it(e,c,s){const u=s??new f(12),p=e[0],m=e[1],w=e[2],t=e[4],l=e[5],r=e[6],o=e[8],n=e[9],a=e[10],g=c[0],d=c[1],M=c[2],_=c[4],x=c[5],P=c[6],D=c[8],E=c[9],z=c[10];return u[0]=p*g+t*d+o*M,u[1]=m*g+l*d+n*M,u[2]=w*g+r*d+a*M,u[4]=p*_+t*x+o*P,u[5]=m*_+l*x+n*P,u[6]=w*_+r*x+a*P,u[8]=p*D+t*E+o*z,u[9]=m*D+l*E+n*z,u[10]=w*D+r*E+a*z,u}const ft=it;function rt(e,c,s){const u=s??Q();return e!==u&&(u[0]=e[0],u[1]=e[1],u[2]=e[2],u[4]=e[4],u[5]=e[5],u[6]=e[6]),u[8]=c[0],u[9]=c[1],u[10]=1,u}function bt(e,c){const s=c??i.create();return s[0]=e[8],s[1]=e[9],s}function ht(e,c,s){const u=s??i.create(),p=c*4;return u[0]=e[p+0],u[1]=e[p+1],u}function dt(e,c,s,u){const p=u===e?e:F(e,u),m=s*4;return p[m+0]=c[0],p[m+1]=c[1],p}function st(e,c){const s=c??i.create(),u=e[0],p=e[1],m=e[4],w=e[5];return s[0]=Math.sqrt(u*u+p*p),s[1]=Math.sqrt(m*m+w*w),s}function Mt(e,c){const s=c??v.create(),u=e[0],p=e[1],m=e[2],w=e[4],t=e[5],l=e[6],r=e[8],o=e[9],n=e[10];return s[0]=Math.sqrt(u*u+p*p+m*m),s[1]=Math.sqrt(w*w+t*t+l*l),s[2]=Math.sqrt(r*r+o*o+n*n),s}function pt(e,c){const s=c??new f(12);return s[0]=1,s[1]=0,s[2]=0,s[4]=0,s[5]=1,s[6]=0,s[8]=e[0],s[9]=e[1],s[10]=1,s}function Tt(e,c,s){const u=s??new f(12),p=c[0],m=c[1],w=e[0],t=e[1],l=e[2],r=e[4],o=e[5],n=e[6],a=e[8],g=e[9],d=e[10];return e!==u&&(u[0]=w,u[1]=t,u[2]=l,u[4]=r,u[5]=o,u[6]=n),u[8]=w*p+r*m+a,u[9]=t*p+o*m+g,u[10]=l*p+n*m+d,u}function gt(e,c){const s=c??new f(12),u=Math.cos(e),p=Math.sin(e);return s[0]=u,s[1]=p,s[2]=0,s[4]=-p,s[5]=u,s[6]=0,s[8]=0,s[9]=0,s[10]=1,s}function Y(e,c,s){const u=s??new f(12),p=e[0],m=e[1],w=e[2],t=e[4],l=e[5],r=e[6],o=Math.cos(c),n=Math.sin(c);return u[0]=o*p+n*t,u[1]=o*m+n*l,u[2]=o*w+n*r,u[4]=o*t-n*p,u[5]=o*l-n*m,u[6]=o*r-n*w,e!==u&&(u[8]=e[8],u[9]=e[9],u[10]=e[10]),u}function k(e,c){const s=c??new f(12),u=Math.cos(e),p=Math.sin(e);return s[0]=1,s[1]=0,s[2]=0,s[4]=0,s[5]=u,s[6]=p,s[8]=0,s[9]=-p,s[10]=u,s}function C(e,c,s){const u=s??new f(12),p=e[4],m=e[5],w=e[6],t=e[8],l=e[9],r=e[10],o=Math.cos(c),n=Math.sin(c);return u[4]=o*p+n*t,u[5]=o*m+n*l,u[6]=o*w+n*r,u[8]=o*t-n*p,u[9]=o*l-n*m,u[10]=o*r-n*w,e!==u&&(u[0]=e[0],u[1]=e[1],u[2]=e[2]),u}function mt(e,c){const s=c??new f(12),u=Math.cos(e),p=Math.sin(e);return s[0]=u,s[1]=0,s[2]=-p,s[4]=0,s[5]=1,s[6]=0,s[8]=p,s[9]=0,s[10]=u,s}function et(e,c,s){const u=s??new f(12),p=e[0],m=e[1],w=e[2],t=e[8],l=e[9],r=e[10],o=Math.cos(c),n=Math.sin(c);return u[0]=o*p-n*t,u[1]=o*m-n*l,u[2]=o*w-n*r,u[8]=o*t+n*p,u[9]=o*l+n*m,u[10]=o*r+n*w,e!==u&&(u[4]=e[4],u[5]=e[5],u[6]=e[6]),u}const H=gt,wt=Y;function vt(e,c){const s=c??new f(12);return s[0]=e[0],s[1]=0,s[2]=0,s[4]=0,s[5]=e[1],s[6]=0,s[8]=0,s[9]=0,s[10]=1,s}function xt(e,c,s){const u=s??new f(12),p=c[0],m=c[1];return u[0]=p*e[0],u[1]=p*e[1],u[2]=p*e[2],u[4]=m*e[4],u[5]=m*e[5],u[6]=m*e[6],e!==u&&(u[8]=e[8],u[9]=e[9],u[10]=e[10]),u}function J(e,c){const s=c??new f(12);return s[0]=e[0],s[1]=0,s[2]=0,s[4]=0,s[5]=e[1],s[6]=0,s[8]=0,s[9]=0,s[10]=e[2],s}function Lt(e,c,s){const u=s??new f(12),p=c[0],m=c[1],w=c[2];return u[0]=p*e[0],u[1]=p*e[1],u[2]=p*e[2],u[4]=m*e[4],u[5]=m*e[5],u[6]=m*e[6],u[8]=w*e[8],u[9]=w*e[9],u[10]=w*e[10],u}function Bt(e,c){const s=c??new f(12);return s[0]=e,s[1]=0,s[2]=0,s[4]=0,s[5]=e,s[6]=0,s[8]=0,s[9]=0,s[10]=1,s}function b(e,c,s){const u=s??new f(12);return u[0]=c*e[0],u[1]=c*e[1],u[2]=c*e[2],u[4]=c*e[4],u[5]=c*e[5],u[6]=c*e[6],e!==u&&(u[8]=e[8],u[9]=e[9],u[10]=e[10]),u}function A(e,c){const s=c??new f(12);return s[0]=e,s[1]=0,s[2]=0,s[4]=0,s[5]=e,s[6]=0,s[8]=0,s[9]=0,s[10]=e,s}function h(e,c,s){const u=s??new f(12);return u[0]=c*e[0],u[1]=c*e[1],u[2]=c*e[2],u[4]=c*e[4],u[5]=c*e[5],u[6]=c*e[6],u[8]=c*e[8],u[9]=c*e[9],u[10]=c*e[10],u}return{add:G,clone:N,copy:F,create:y,determinant:O,equals:tt,equalsApproximately:K,fromMat4:U,fromQuat:R,get3DScaling:Mt,getAxis:ht,getScaling:st,getTranslation:bt,identity:Q,inverse:V,invert:X,mul:ft,mulScalar:q,multiply:it,multiplyScalar:T,negate:L,rotate:Y,rotateX:C,rotateY:et,rotateZ:wt,rotation:gt,rotationX:k,rotationY:mt,rotationZ:H,scale:xt,scale3D:Lt,scaling:vt,scaling3D:J,set:S,setAxis:dt,setTranslation:rt,translate:Tt,translation:pt,transpose:lt,uniformScale:b,uniformScale3D:h,uniformScaling:Bt,uniformScaling3D:A}}const le=new Map;function be(f){let i=le.get(f);return i||(i=ye(f),le.set(f,i)),i}function Me(f){const i=Kt(f);function v(t,l,r,o,n,a,g,d,M,_,x,P,D,E,z,$){const B=new f(16);return t!==void 0&&(B[0]=t,l!==void 0&&(B[1]=l,r!==void 0&&(B[2]=r,o!==void 0&&(B[3]=o,n!==void 0&&(B[4]=n,a!==void 0&&(B[5]=a,g!==void 0&&(B[6]=g,d!==void 0&&(B[7]=d,M!==void 0&&(B[8]=M,_!==void 0&&(B[9]=_,x!==void 0&&(B[10]=x,P!==void 0&&(B[11]=P,D!==void 0&&(B[12]=D,E!==void 0&&(B[13]=E,z!==void 0&&(B[14]=z,$!==void 0&&(B[15]=$)))))))))))))))),B}function y(t,l,r,o,n,a,g,d,M,_,x,P,D,E,z,$,B){const I=B??new f(16);return I[0]=t,I[1]=l,I[2]=r,I[3]=o,I[4]=n,I[5]=a,I[6]=g,I[7]=d,I[8]=M,I[9]=_,I[10]=x,I[11]=P,I[12]=D,I[13]=E,I[14]=z,I[15]=$,I}function S(t,l){const r=l??new f(16);return r[0]=t[0],r[1]=t[1],r[2]=t[2],r[3]=0,r[4]=t[4],r[5]=t[5],r[6]=t[6],r[7]=0,r[8]=t[8],r[9]=t[9],r[10]=t[10],r[11]=0,r[12]=0,r[13]=0,r[14]=0,r[15]=1,r}function U(t,l){const r=l??new f(16),o=t[0],n=t[1],a=t[2],g=t[3],d=o+o,M=n+n,_=a+a,x=o*d,P=n*d,D=n*M,E=a*d,z=a*M,$=a*_,B=g*d,I=g*M,Z=g*_;return r[0]=1-D-$,r[1]=P+Z,r[2]=E-I,r[3]=0,r[4]=P-Z,r[5]=1-x-$,r[6]=z+B,r[7]=0,r[8]=E+I,r[9]=z-B,r[10]=1-x-D,r[11]=0,r[12]=0,r[13]=0,r[14]=0,r[15]=1,r}function R(t,l){const r=l??new f(16);return r[0]=-t[0],r[1]=-t[1],r[2]=-t[2],r[3]=-t[3],r[4]=-t[4],r[5]=-t[5],r[6]=-t[6],r[7]=-t[7],r[8]=-t[8],r[9]=-t[9],r[10]=-t[10],r[11]=-t[11],r[12]=-t[12],r[13]=-t[13],r[14]=-t[14],r[15]=-t[15],r}function L(t,l,r){const o=r??new f(16);return o[0]=t[0]+l[0],o[1]=t[1]+l[1],o[2]=t[2]+l[2],o[3]=t[3]+l[3],o[4]=t[4]+l[4],o[5]=t[5]+l[5],o[6]=t[6]+l[6],o[7]=t[7]+l[7],o[8]=t[8]+l[8],o[9]=t[9]+l[9],o[10]=t[10]+l[10],o[11]=t[11]+l[11],o[12]=t[12]+l[12],o[13]=t[13]+l[13],o[14]=t[14]+l[14],o[15]=t[15]+l[15],o}function T(t,l,r){const o=r??new f(16);return o[0]=t[0]*l,o[1]=t[1]*l,o[2]=t[2]*l,o[3]=t[3]*l,o[4]=t[4]*l,o[5]=t[5]*l,o[6]=t[6]*l,o[7]=t[7]*l,o[8]=t[8]*l,o[9]=t[9]*l,o[10]=t[10]*l,o[11]=t[11]*l,o[12]=t[12]*l,o[13]=t[13]*l,o[14]=t[14]*l,o[15]=t[15]*l,o}const q=T;function G(t,l){const r=l??new f(16);return r[0]=t[0],r[1]=t[1],r[2]=t[2],r[3]=t[3],r[4]=t[4],r[5]=t[5],r[6]=t[6],r[7]=t[7],r[8]=t[8],r[9]=t[9],r[10]=t[10],r[11]=t[11],r[12]=t[12],r[13]=t[13],r[14]=t[14],r[15]=t[15],r}const F=G;function N(t,l){return Math.abs(t[0]-l[0])<j&&Math.abs(t[1]-l[1])<j&&Math.abs(t[2]-l[2])<j&&Math.abs(t[3]-l[3])<j&&Math.abs(t[4]-l[4])<j&&Math.abs(t[5]-l[5])<j&&Math.abs(t[6]-l[6])<j&&Math.abs(t[7]-l[7])<j&&Math.abs(t[8]-l[8])<j&&Math.abs(t[9]-l[9])<j&&Math.abs(t[10]-l[10])<j&&Math.abs(t[11]-l[11])<j&&Math.abs(t[12]-l[12])<j&&Math.abs(t[13]-l[13])<j&&Math.abs(t[14]-l[14])<j&&Math.abs(t[15]-l[15])<j}function K(t,l){return t[0]===l[0]&&t[1]===l[1]&&t[2]===l[2]&&t[3]===l[3]&&t[4]===l[4]&&t[5]===l[5]&&t[6]===l[6]&&t[7]===l[7]&&t[8]===l[8]&&t[9]===l[9]&&t[10]===l[10]&&t[11]===l[11]&&t[12]===l[12]&&t[13]===l[13]&&t[14]===l[14]&&t[15]===l[15]}function tt(t){const l=t??new f(16);return l[0]=1,l[1]=0,l[2]=0,l[3]=0,l[4]=0,l[5]=1,l[6]=0,l[7]=0,l[8]=0,l[9]=0,l[10]=1,l[11]=0,l[12]=0,l[13]=0,l[14]=0,l[15]=1,l}function Q(t,l){const r=l??new f(16);if(r===t){let W;return W=t[1],t[1]=t[4],t[4]=W,W=t[2],t[2]=t[8],t[8]=W,W=t[3],t[3]=t[12],t[12]=W,W=t[6],t[6]=t[9],t[9]=W,W=t[7],t[7]=t[13],t[13]=W,W=t[11],t[11]=t[14],t[14]=W,r}const o=t[0],n=t[1],a=t[2],g=t[3],d=t[4],M=t[5],_=t[6],x=t[7],P=t[8],D=t[9],E=t[10],z=t[11],$=t[12],B=t[13],I=t[14],Z=t[15];return r[0]=o,r[1]=d,r[2]=P,r[3]=$,r[4]=n,r[5]=M,r[6]=D,r[7]=B,r[8]=a,r[9]=_,r[10]=E,r[11]=I,r[12]=g,r[13]=x,r[14]=z,r[15]=Z,r}function lt(t,l){const r=l??new f(16),o=t[0],n=t[1],a=t[2],g=t[3],d=t[4],M=t[5],_=t[6],x=t[7],P=t[8],D=t[9],E=t[10],z=t[11],$=t[12],B=t[13],I=t[14],Z=t[15],W=E*Z,ot=I*z,at=_*Z,ct=I*x,ut=_*z,yt=E*x,St=a*Z,_t=I*g,Dt=a*z,At=E*g,Ut=a*x,Et=_*g,Rt=P*B,zt=$*D,It=d*B,$t=$*M,Ot=d*D,kt=P*M,qt=o*B,Nt=$*n,Ht=o*D,jt=P*n,Wt=o*M,Xt=d*n,ie=W*M+ct*D+ut*B-(ot*M+at*D+yt*B),re=ot*n+St*D+At*B-(W*n+_t*D+Dt*B),se=at*n+_t*M+Ut*B-(ct*n+St*M+Et*B),oe=yt*n+Dt*M+Et*D-(ut*n+At*M+Ut*D),Pt=1/(o*ie+d*re+P*se+$*oe);return r[0]=Pt*ie,r[1]=Pt*re,r[2]=Pt*se,r[3]=Pt*oe,r[4]=Pt*(ot*d+at*P+yt*$-(W*d+ct*P+ut*$)),r[5]=Pt*(W*o+_t*P+Dt*$-(ot*o+St*P+At*$)),r[6]=Pt*(ct*o+St*d+Et*$-(at*o+_t*d+Ut*$)),r[7]=Pt*(ut*o+At*d+Ut*P-(yt*o+Dt*d+Et*P)),r[8]=Pt*(Rt*x+$t*z+Ot*Z-(zt*x+It*z+kt*Z)),r[9]=Pt*(zt*g+qt*z+jt*Z-(Rt*g+Nt*z+Ht*Z)),r[10]=Pt*(It*g+Nt*x+Wt*Z-($t*g+qt*x+Xt*Z)),r[11]=Pt*(kt*g+Ht*x+Xt*z-(Ot*g+jt*x+Wt*z)),r[12]=Pt*(It*E+kt*I+zt*_-(Ot*I+Rt*_+$t*E)),r[13]=Pt*(Ht*I+Rt*a+Nt*E-(qt*E+jt*I+zt*a)),r[14]=Pt*(qt*_+Xt*I+$t*a-(Wt*I+It*a+Nt*_)),r[15]=Pt*(Wt*E+Ot*a+jt*_-(Ht*_+Xt*E+kt*a)),r}function V(t){const l=t[0],r=t[1],o=t[2],n=t[3],a=t[4],g=t[5],d=t[6],M=t[7],_=t[8],x=t[9],P=t[10],D=t[11],E=t[12],z=t[13],$=t[14],B=t[15],I=P*B,Z=$*D,W=d*B,ot=$*M,at=d*D,ct=P*M,ut=o*B,yt=$*n,St=o*D,_t=P*n,Dt=o*M,At=d*n,Ut=I*g+ot*x+at*z-(Z*g+W*x+ct*z),Et=Z*r+ut*x+_t*z-(I*r+yt*x+St*z),Rt=W*r+yt*g+Dt*z-(ot*r+ut*g+At*z),zt=ct*r+St*g+At*x-(at*r+_t*g+Dt*x);return l*Ut+a*Et+_*Rt+E*zt}const O=lt;function X(t,l,r){const o=r??new f(16),n=t[0],a=t[1],g=t[2],d=t[3],M=t[4],_=t[5],x=t[6],P=t[7],D=t[8],E=t[9],z=t[10],$=t[11],B=t[12],I=t[13],Z=t[14],W=t[15],ot=l[0],at=l[1],ct=l[2],ut=l[3],yt=l[4],St=l[5],_t=l[6],Dt=l[7],At=l[8],Ut=l[9],Et=l[10],Rt=l[11],zt=l[12],It=l[13],$t=l[14],Ot=l[15];return o[0]=n*ot+M*at+D*ct+B*ut,o[1]=a*ot+_*at+E*ct+I*ut,o[2]=g*ot+x*at+z*ct+Z*ut,o[3]=d*ot+P*at+$*ct+W*ut,o[4]=n*yt+M*St+D*_t+B*Dt,o[5]=a*yt+_*St+E*_t+I*Dt,o[6]=g*yt+x*St+z*_t+Z*Dt,o[7]=d*yt+P*St+$*_t+W*Dt,o[8]=n*At+M*Ut+D*Et+B*Rt,o[9]=a*At+_*Ut+E*Et+I*Rt,o[10]=g*At+x*Ut+z*Et+Z*Rt,o[11]=d*At+P*Ut+$*Et+W*Rt,o[12]=n*zt+M*It+D*$t+B*Ot,o[13]=a*zt+_*It+E*$t+I*Ot,o[14]=g*zt+x*It+z*$t+Z*Ot,o[15]=d*zt+P*It+$*$t+W*Ot,o}const it=X;function ft(t,l,r){const o=r??tt();return t!==o&&(o[0]=t[0],o[1]=t[1],o[2]=t[2],o[3]=t[3],o[4]=t[4],o[5]=t[5],o[6]=t[6],o[7]=t[7],o[8]=t[8],o[9]=t[9],o[10]=t[10],o[11]=t[11]),o[12]=l[0],o[13]=l[1],o[14]=l[2],o[15]=1,o}function rt(t,l){const r=l??i.create();return r[0]=t[12],r[1]=t[13],r[2]=t[14],r}function bt(t,l,r){const o=r??i.create(),n=l*4;return o[0]=t[n+0],o[1]=t[n+1],o[2]=t[n+2],o}function ht(t,l,r,o){const n=o===t?o:G(t,o),a=r*4;return n[a+0]=l[0],n[a+1]=l[1],n[a+2]=l[2],n}function dt(t,l){const r=l??i.create(),o=t[0],n=t[1],a=t[2],g=t[4],d=t[5],M=t[6],_=t[8],x=t[9],P=t[10];return r[0]=Math.sqrt(o*o+n*n+a*a),r[1]=Math.sqrt(g*g+d*d+M*M),r[2]=Math.sqrt(_*_+x*x+P*P),r}function st(t,l,r,o,n){const a=n??new f(16),g=Math.tan(Math.PI*.5-.5*t);if(a[0]=g/l,a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=g,a[6]=0,a[7]=0,a[8]=0,a[9]=0,a[11]=-1,a[12]=0,a[13]=0,a[15]=0,Number.isFinite(o)){const d=1/(r-o);a[10]=o*d,a[14]=o*r*d}else a[10]=-1,a[14]=-r;return a}function Mt(t,l,r,o=1/0,n){const a=n??new f(16),g=1/Math.tan(t*.5);if(a[0]=g/l,a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=g,a[6]=0,a[7]=0,a[8]=0,a[9]=0,a[11]=-1,a[12]=0,a[13]=0,a[15]=0,o===1/0)a[10]=0,a[14]=r;else{const d=1/(o-r);a[10]=r*d,a[14]=o*r*d}return a}function pt(t,l,r,o,n,a,g){const d=g??new f(16);return d[0]=2/(l-t),d[1]=0,d[2]=0,d[3]=0,d[4]=0,d[5]=2/(o-r),d[6]=0,d[7]=0,d[8]=0,d[9]=0,d[10]=1/(n-a),d[11]=0,d[12]=(l+t)/(t-l),d[13]=(o+r)/(r-o),d[14]=n/(n-a),d[15]=1,d}function Tt(t,l,r,o,n,a,g){const d=g??new f(16),M=l-t,_=o-r,x=n-a;return d[0]=2*n/M,d[1]=0,d[2]=0,d[3]=0,d[4]=0,d[5]=2*n/_,d[6]=0,d[7]=0,d[8]=(t+l)/M,d[9]=(o+r)/_,d[10]=a/x,d[11]=-1,d[12]=0,d[13]=0,d[14]=n*a/x,d[15]=0,d}function gt(t,l,r,o,n,a=1/0,g){const d=g??new f(16),M=l-t,_=o-r;if(d[0]=2*n/M,d[1]=0,d[2]=0,d[3]=0,d[4]=0,d[5]=2*n/_,d[6]=0,d[7]=0,d[8]=(t+l)/M,d[9]=(o+r)/_,d[11]=-1,d[12]=0,d[13]=0,d[15]=0,a===1/0)d[10]=0,d[14]=n;else{const x=1/(a-n);d[10]=n*x,d[14]=a*n*x}return d}const Y=i.create(),k=i.create(),C=i.create();function mt(t,l,r,o){const n=o??new f(16);return i.normalize(i.subtract(l,t,C),C),i.normalize(i.cross(r,C,Y),Y),i.normalize(i.cross(C,Y,k),k),n[0]=Y[0],n[1]=Y[1],n[2]=Y[2],n[3]=0,n[4]=k[0],n[5]=k[1],n[6]=k[2],n[7]=0,n[8]=C[0],n[9]=C[1],n[10]=C[2],n[11]=0,n[12]=t[0],n[13]=t[1],n[14]=t[2],n[15]=1,n}function et(t,l,r,o){const n=o??new f(16);return i.normalize(i.subtract(t,l,C),C),i.normalize(i.cross(r,C,Y),Y),i.normalize(i.cross(C,Y,k),k),n[0]=Y[0],n[1]=Y[1],n[2]=Y[2],n[3]=0,n[4]=k[0],n[5]=k[1],n[6]=k[2],n[7]=0,n[8]=C[0],n[9]=C[1],n[10]=C[2],n[11]=0,n[12]=t[0],n[13]=t[1],n[14]=t[2],n[15]=1,n}function H(t,l,r,o){const n=o??new f(16);return i.normalize(i.subtract(t,l,C),C),i.normalize(i.cross(r,C,Y),Y),i.normalize(i.cross(C,Y,k),k),n[0]=Y[0],n[1]=k[0],n[2]=C[0],n[3]=0,n[4]=Y[1],n[5]=k[1],n[6]=C[1],n[7]=0,n[8]=Y[2],n[9]=k[2],n[10]=C[2],n[11]=0,n[12]=-(Y[0]*t[0]+Y[1]*t[1]+Y[2]*t[2]),n[13]=-(k[0]*t[0]+k[1]*t[1]+k[2]*t[2]),n[14]=-(C[0]*t[0]+C[1]*t[1]+C[2]*t[2]),n[15]=1,n}function wt(t,l){const r=l??new f(16);return r[0]=1,r[1]=0,r[2]=0,r[3]=0,r[4]=0,r[5]=1,r[6]=0,r[7]=0,r[8]=0,r[9]=0,r[10]=1,r[11]=0,r[12]=t[0],r[13]=t[1],r[14]=t[2],r[15]=1,r}function vt(t,l,r){const o=r??new f(16),n=l[0],a=l[1],g=l[2],d=t[0],M=t[1],_=t[2],x=t[3],P=t[4],D=t[5],E=t[6],z=t[7],$=t[8],B=t[9],I=t[10],Z=t[11],W=t[12],ot=t[13],at=t[14],ct=t[15];return t!==o&&(o[0]=d,o[1]=M,o[2]=_,o[3]=x,o[4]=P,o[5]=D,o[6]=E,o[7]=z,o[8]=$,o[9]=B,o[10]=I,o[11]=Z),o[12]=d*n+P*a+$*g+W,o[13]=M*n+D*a+B*g+ot,o[14]=_*n+E*a+I*g+at,o[15]=x*n+z*a+Z*g+ct,o}function xt(t,l){const r=l??new f(16),o=Math.cos(t),n=Math.sin(t);return r[0]=1,r[1]=0,r[2]=0,r[3]=0,r[4]=0,r[5]=o,r[6]=n,r[7]=0,r[8]=0,r[9]=-n,r[10]=o,r[11]=0,r[12]=0,r[13]=0,r[14]=0,r[15]=1,r}function J(t,l,r){const o=r??new f(16),n=t[4],a=t[5],g=t[6],d=t[7],M=t[8],_=t[9],x=t[10],P=t[11],D=Math.cos(l),E=Math.sin(l);return o[4]=D*n+E*M,o[5]=D*a+E*_,o[6]=D*g+E*x,o[7]=D*d+E*P,o[8]=D*M-E*n,o[9]=D*_-E*a,o[10]=D*x-E*g,o[11]=D*P-E*d,t!==o&&(o[0]=t[0],o[1]=t[1],o[2]=t[2],o[3]=t[3],o[12]=t[12],o[13]=t[13],o[14]=t[14],o[15]=t[15]),o}function Lt(t,l){const r=l??new f(16),o=Math.cos(t),n=Math.sin(t);return r[0]=o,r[1]=0,r[2]=-n,r[3]=0,r[4]=0,r[5]=1,r[6]=0,r[7]=0,r[8]=n,r[9]=0,r[10]=o,r[11]=0,r[12]=0,r[13]=0,r[14]=0,r[15]=1,r}function Bt(t,l,r){const o=r??new f(16),n=t[0],a=t[1],g=t[2],d=t[3],M=t[8],_=t[9],x=t[10],P=t[11],D=Math.cos(l),E=Math.sin(l);return o[0]=D*n-E*M,o[1]=D*a-E*_,o[2]=D*g-E*x,o[3]=D*d-E*P,o[8]=D*M+E*n,o[9]=D*_+E*a,o[10]=D*x+E*g,o[11]=D*P+E*d,t!==o&&(o[4]=t[4],o[5]=t[5],o[6]=t[6],o[7]=t[7],o[12]=t[12],o[13]=t[13],o[14]=t[14],o[15]=t[15]),o}function b(t,l){const r=l??new f(16),o=Math.cos(t),n=Math.sin(t);return r[0]=o,r[1]=n,r[2]=0,r[3]=0,r[4]=-n,r[5]=o,r[6]=0,r[7]=0,r[8]=0,r[9]=0,r[10]=1,r[11]=0,r[12]=0,r[13]=0,r[14]=0,r[15]=1,r}function A(t,l,r){const o=r??new f(16),n=t[0],a=t[1],g=t[2],d=t[3],M=t[4],_=t[5],x=t[6],P=t[7],D=Math.cos(l),E=Math.sin(l);return o[0]=D*n+E*M,o[1]=D*a+E*_,o[2]=D*g+E*x,o[3]=D*d+E*P,o[4]=D*M-E*n,o[5]=D*_-E*a,o[6]=D*x-E*g,o[7]=D*P-E*d,t!==o&&(o[8]=t[8],o[9]=t[9],o[10]=t[10],o[11]=t[11],o[12]=t[12],o[13]=t[13],o[14]=t[14],o[15]=t[15]),o}function h(t,l,r){const o=r??new f(16);let n=t[0],a=t[1],g=t[2];const d=Math.sqrt(n*n+a*a+g*g);n/=d,a/=d,g/=d;const M=n*n,_=a*a,x=g*g,P=Math.cos(l),D=Math.sin(l),E=1-P;return o[0]=M+(1-M)*P,o[1]=n*a*E+g*D,o[2]=n*g*E-a*D,o[3]=0,o[4]=n*a*E-g*D,o[5]=_+(1-_)*P,o[6]=a*g*E+n*D,o[7]=0,o[8]=n*g*E+a*D,o[9]=a*g*E-n*D,o[10]=x+(1-x)*P,o[11]=0,o[12]=0,o[13]=0,o[14]=0,o[15]=1,o}const e=h;function c(t,l,r,o){const n=o??new f(16);let a=l[0],g=l[1],d=l[2];const M=Math.sqrt(a*a+g*g+d*d);a/=M,g/=M,d/=M;const _=a*a,x=g*g,P=d*d,D=Math.cos(r),E=Math.sin(r),z=1-D,$=_+(1-_)*D,B=a*g*z+d*E,I=a*d*z-g*E,Z=a*g*z-d*E,W=x+(1-x)*D,ot=g*d*z+a*E,at=a*d*z+g*E,ct=g*d*z-a*E,ut=P+(1-P)*D,yt=t[0],St=t[1],_t=t[2],Dt=t[3],At=t[4],Ut=t[5],Et=t[6],Rt=t[7],zt=t[8],It=t[9],$t=t[10],Ot=t[11];return n[0]=$*yt+B*At+I*zt,n[1]=$*St+B*Ut+I*It,n[2]=$*_t+B*Et+I*$t,n[3]=$*Dt+B*Rt+I*Ot,n[4]=Z*yt+W*At+ot*zt,n[5]=Z*St+W*Ut+ot*It,n[6]=Z*_t+W*Et+ot*$t,n[7]=Z*Dt+W*Rt+ot*Ot,n[8]=at*yt+ct*At+ut*zt,n[9]=at*St+ct*Ut+ut*It,n[10]=at*_t+ct*Et+ut*$t,n[11]=at*Dt+ct*Rt+ut*Ot,t!==n&&(n[12]=t[12],n[13]=t[13],n[14]=t[14],n[15]=t[15]),n}const s=c;function u(t,l){const r=l??new f(16);return r[0]=t[0],r[1]=0,r[2]=0,r[3]=0,r[4]=0,r[5]=t[1],r[6]=0,r[7]=0,r[8]=0,r[9]=0,r[10]=t[2],r[11]=0,r[12]=0,r[13]=0,r[14]=0,r[15]=1,r}function p(t,l,r){const o=r??new f(16),n=l[0],a=l[1],g=l[2];return o[0]=n*t[0],o[1]=n*t[1],o[2]=n*t[2],o[3]=n*t[3],o[4]=a*t[4],o[5]=a*t[5],o[6]=a*t[6],o[7]=a*t[7],o[8]=g*t[8],o[9]=g*t[9],o[10]=g*t[10],o[11]=g*t[11],t!==o&&(o[12]=t[12],o[13]=t[13],o[14]=t[14],o[15]=t[15]),o}function m(t,l){const r=l??new f(16);return r[0]=t,r[1]=0,r[2]=0,r[3]=0,r[4]=0,r[5]=t,r[6]=0,r[7]=0,r[8]=0,r[9]=0,r[10]=t,r[11]=0,r[12]=0,r[13]=0,r[14]=0,r[15]=1,r}function w(t,l,r){const o=r??new f(16);return o[0]=l*t[0],o[1]=l*t[1],o[2]=l*t[2],o[3]=l*t[3],o[4]=l*t[4],o[5]=l*t[5],o[6]=l*t[6],o[7]=l*t[7],o[8]=l*t[8],o[9]=l*t[9],o[10]=l*t[10],o[11]=l*t[11],t!==o&&(o[12]=t[12],o[13]=t[13],o[14]=t[14],o[15]=t[15]),o}return{add:L,aim:mt,axisRotate:c,axisRotation:h,cameraAim:et,clone:F,copy:G,create:v,determinant:V,equals:K,equalsApproximately:N,fromMat3:S,fromQuat:U,frustum:Tt,frustumReverseZ:gt,getAxis:bt,getScaling:dt,getTranslation:rt,identity:tt,inverse:lt,invert:O,lookAt:H,mul:it,mulScalar:q,multiply:X,multiplyScalar:T,negate:R,ortho:pt,perspective:st,perspectiveReverseZ:Mt,rotate:s,rotateX:J,rotateY:Bt,rotateZ:A,rotation:e,rotationX:xt,rotationY:Lt,rotationZ:b,scale:p,scaling:u,set:y,setAxis:ht,setTranslation:ft,translate:vt,translation:wt,transpose:Q,uniformScale:w,uniformScaling:m}}const ue=new Map;function Se(f){let i=ue.get(f);return i||(i=Me(f),ue.set(f,i)),i}function _e(f){const i=Kt(f);function v(b,A,h,e){const c=new f(4);return b!==void 0&&(c[0]=b,A!==void 0&&(c[1]=A,h!==void 0&&(c[2]=h,e!==void 0&&(c[3]=e)))),c}const y=v;function S(b,A,h,e,c){const s=c??new f(4);return s[0]=b,s[1]=A,s[2]=h,s[3]=e,s}function U(b,A,h){const e=h??new f(4),c=A*.5,s=Math.sin(c);return e[0]=s*b[0],e[1]=s*b[1],e[2]=s*b[2],e[3]=Math.cos(c),e}function R(b,A){const h=A??i.create(3),e=Math.acos(b[3])*2,c=Math.sin(e*.5);return c>j?(h[0]=b[0]/c,h[1]=b[1]/c,h[2]=b[2]/c):(h[0]=1,h[1]=0,h[2]=0),{angle:e,axis:h}}function L(b,A){const h=st(b,A);return Math.acos(2*h*h-1)}function T(b,A,h){const e=h??new f(4),c=b[0],s=b[1],u=b[2],p=b[3],m=A[0],w=A[1],t=A[2],l=A[3];return e[0]=c*l+p*m+s*t-u*w,e[1]=s*l+p*w+u*m-c*t,e[2]=u*l+p*t+c*w-s*m,e[3]=p*l-c*m-s*w-u*t,e}const q=T;function G(b,A,h){const e=h??new f(4),c=A*.5,s=b[0],u=b[1],p=b[2],m=b[3],w=Math.sin(c),t=Math.cos(c);return e[0]=s*t+m*w,e[1]=u*t+p*w,e[2]=p*t-u*w,e[3]=m*t-s*w,e}function F(b,A,h){const e=h??new f(4),c=A*.5,s=b[0],u=b[1],p=b[2],m=b[3],w=Math.sin(c),t=Math.cos(c);return e[0]=s*t-p*w,e[1]=u*t+m*w,e[2]=p*t+s*w,e[3]=m*t-u*w,e}function N(b,A,h){const e=h??new f(4),c=A*.5,s=b[0],u=b[1],p=b[2],m=b[3],w=Math.sin(c),t=Math.cos(c);return e[0]=s*t+u*w,e[1]=u*t-s*w,e[2]=p*t+m*w,e[3]=m*t-p*w,e}function K(b,A,h,e){const c=e??new f(4),s=b[0],u=b[1],p=b[2],m=b[3];let w=A[0],t=A[1],l=A[2],r=A[3],o=s*w+u*t+p*l+m*r;o<0&&(o=-o,w=-w,t=-t,l=-l,r=-r);let n,a;if(1-o>j){const g=Math.acos(o),d=Math.sin(g);n=Math.sin((1-h)*g)/d,a=Math.sin(h*g)/d}else n=1-h,a=h;return c[0]=n*s+a*w,c[1]=n*u+a*t,c[2]=n*p+a*l,c[3]=n*m+a*r,c}function tt(b,A){const h=A??new f(4),e=b[0],c=b[1],s=b[2],u=b[3],p=e*e+c*c+s*s+u*u,m=p?1/p:0;return h[0]=-e*m,h[1]=-c*m,h[2]=-s*m,h[3]=u*m,h}function Q(b,A){const h=A??new f(4);return h[0]=-b[0],h[1]=-b[1],h[2]=-b[2],h[3]=b[3],h}function lt(b,A){const h=A??new f(4),e=b[0]+b[5]+b[10];if(e>0){const c=Math.sqrt(e+1);h[3]=.5*c;const s=.5/c;h[0]=(b[6]-b[9])*s,h[1]=(b[8]-b[2])*s,h[2]=(b[1]-b[4])*s}else{let c=0;b[5]>b[0]&&(c=1),b[10]>b[c*4+c]&&(c=2);const s=(c+1)%3,u=(c+2)%3,p=Math.sqrt(b[c*4+c]-b[s*4+s]-b[u*4+u]+1);h[c]=.5*p;const m=.5/p;h[3]=(b[s*4+u]-b[u*4+s])*m,h[s]=(b[s*4+c]+b[c*4+s])*m,h[u]=(b[u*4+c]+b[c*4+u])*m}return h}function V(b,A,h,e,c){const s=c??new f(4),u=b*.5,p=A*.5,m=h*.5,w=Math.sin(u),t=Math.cos(u),l=Math.sin(p),r=Math.cos(p),o=Math.sin(m),n=Math.cos(m);switch(e){case"xyz":s[0]=w*r*n+t*l*o,s[1]=t*l*n-w*r*o,s[2]=t*r*o+w*l*n,s[3]=t*r*n-w*l*o;break;case"xzy":s[0]=w*r*n-t*l*o,s[1]=t*l*n-w*r*o,s[2]=t*r*o+w*l*n,s[3]=t*r*n+w*l*o;break;case"yxz":s[0]=w*r*n+t*l*o,s[1]=t*l*n-w*r*o,s[2]=t*r*o-w*l*n,s[3]=t*r*n+w*l*o;break;case"yzx":s[0]=w*r*n+t*l*o,s[1]=t*l*n+w*r*o,s[2]=t*r*o-w*l*n,s[3]=t*r*n-w*l*o;break;case"zxy":s[0]=w*r*n-t*l*o,s[1]=t*l*n+w*r*o,s[2]=t*r*o+w*l*n,s[3]=t*r*n-w*l*o;break;case"zyx":s[0]=w*r*n-t*l*o,s[1]=t*l*n+w*r*o,s[2]=t*r*o-w*l*n,s[3]=t*r*n+w*l*o;break;default:throw new Error(`Unknown rotation order: ${e}`)}return s}function O(b,A){const h=A??new f(4);return h[0]=b[0],h[1]=b[1],h[2]=b[2],h[3]=b[3],h}const X=O;function it(b,A,h){const e=h??new f(4);return e[0]=b[0]+A[0],e[1]=b[1]+A[1],e[2]=b[2]+A[2],e[3]=b[3]+A[3],e}function ft(b,A,h){const e=h??new f(4);return e[0]=b[0]-A[0],e[1]=b[1]-A[1],e[2]=b[2]-A[2],e[3]=b[3]-A[3],e}const rt=ft;function bt(b,A,h){const e=h??new f(4);return e[0]=b[0]*A,e[1]=b[1]*A,e[2]=b[2]*A,e[3]=b[3]*A,e}const ht=bt;function dt(b,A,h){const e=h??new f(4);return e[0]=b[0]/A,e[1]=b[1]/A,e[2]=b[2]/A,e[3]=b[3]/A,e}function st(b,A){return b[0]*A[0]+b[1]*A[1]+b[2]*A[2]+b[3]*A[3]}function Mt(b,A,h,e){const c=e??new f(4);return c[0]=b[0]+h*(A[0]-b[0]),c[1]=b[1]+h*(A[1]-b[1]),c[2]=b[2]+h*(A[2]-b[2]),c[3]=b[3]+h*(A[3]-b[3]),c}function pt(b){const A=b[0],h=b[1],e=b[2],c=b[3];return Math.sqrt(A*A+h*h+e*e+c*c)}const Tt=pt;function gt(b){const A=b[0],h=b[1],e=b[2],c=b[3];return A*A+h*h+e*e+c*c}const Y=gt;function k(b,A){const h=A??new f(4),e=b[0],c=b[1],s=b[2],u=b[3],p=Math.sqrt(e*e+c*c+s*s+u*u);return p>1e-5?(h[0]=e/p,h[1]=c/p,h[2]=s/p,h[3]=u/p):(h[0]=0,h[1]=0,h[2]=0,h[3]=1),h}function C(b,A){return Math.abs(b[0]-A[0])<j&&Math.abs(b[1]-A[1])<j&&Math.abs(b[2]-A[2])<j&&Math.abs(b[3]-A[3])<j}function mt(b,A){return b[0]===A[0]&&b[1]===A[1]&&b[2]===A[2]&&b[3]===A[3]}function et(b){const A=b??new f(4);return A[0]=0,A[1]=0,A[2]=0,A[3]=1,A}const H=i.create(),wt=i.create(),vt=i.create();function xt(b,A,h){const e=h??new f(4),c=i.dot(b,A);return c<-.999999?(i.cross(wt,b,H),i.len(H)<1e-6&&i.cross(vt,b,H),i.normalize(H,H),U(H,Math.PI,e),e):c>.999999?(e[0]=0,e[1]=0,e[2]=0,e[3]=1,e):(i.cross(b,A,H),e[0]=H[0],e[1]=H[1],e[2]=H[2],e[3]=1+c,k(e,e))}const J=new f(4),Lt=new f(4);function Bt(b,A,h,e,c,s){const u=s??new f(4);return K(b,e,c,J),K(A,h,c,Lt),K(J,Lt,2*c*(1-c),u),u}return{create:v,fromValues:y,set:S,fromAxisAngle:U,toAxisAngle:R,angle:L,multiply:T,mul:q,rotateX:G,rotateY:F,rotateZ:N,slerp:K,inverse:tt,conjugate:Q,fromMat:lt,fromEuler:V,copy:O,clone:X,add:it,subtract:ft,sub:rt,mulScalar:bt,scale:ht,divScalar:dt,dot:st,lerp:Mt,length:pt,len:Tt,lengthSq:gt,lenSq:Y,normalize:k,equalsApproximately:C,equals:mt,identity:et,rotationTo:xt,sqlerp:Bt}}const fe=new Map;function De(f){let i=fe.get(f);return i||(i=_e(f),fe.set(f,i)),i}function Ae(f){function i(h,e,c,s){const u=new f(4);return h!==void 0&&(u[0]=h,e!==void 0&&(u[1]=e,c!==void 0&&(u[2]=c,s!==void 0&&(u[3]=s)))),u}const v=i;function y(h,e,c,s,u){const p=u??new f(4);return p[0]=h,p[1]=e,p[2]=c,p[3]=s,p}function S(h,e){const c=e??new f(4);return c[0]=Math.ceil(h[0]),c[1]=Math.ceil(h[1]),c[2]=Math.ceil(h[2]),c[3]=Math.ceil(h[3]),c}function U(h,e){const c=e??new f(4);return c[0]=Math.floor(h[0]),c[1]=Math.floor(h[1]),c[2]=Math.floor(h[2]),c[3]=Math.floor(h[3]),c}function R(h,e){const c=e??new f(4);return c[0]=Math.round(h[0]),c[1]=Math.round(h[1]),c[2]=Math.round(h[2]),c[3]=Math.round(h[3]),c}function L(h,e=0,c=1,s){const u=s??new f(4);return u[0]=Math.min(c,Math.max(e,h[0])),u[1]=Math.min(c,Math.max(e,h[1])),u[2]=Math.min(c,Math.max(e,h[2])),u[3]=Math.min(c,Math.max(e,h[3])),u}function T(h,e,c){const s=c??new f(4);return s[0]=h[0]+e[0],s[1]=h[1]+e[1],s[2]=h[2]+e[2],s[3]=h[3]+e[3],s}function q(h,e,c,s){const u=s??new f(4);return u[0]=h[0]+e[0]*c,u[1]=h[1]+e[1]*c,u[2]=h[2]+e[2]*c,u[3]=h[3]+e[3]*c,u}function G(h,e,c){const s=c??new f(4);return s[0]=h[0]-e[0],s[1]=h[1]-e[1],s[2]=h[2]-e[2],s[3]=h[3]-e[3],s}const F=G;function N(h,e){return Math.abs(h[0]-e[0])<j&&Math.abs(h[1]-e[1])<j&&Math.abs(h[2]-e[2])<j&&Math.abs(h[3]-e[3])<j}function K(h,e){return h[0]===e[0]&&h[1]===e[1]&&h[2]===e[2]&&h[3]===e[3]}function tt(h,e,c,s){const u=s??new f(4);return u[0]=h[0]+c*(e[0]-h[0]),u[1]=h[1]+c*(e[1]-h[1]),u[2]=h[2]+c*(e[2]-h[2]),u[3]=h[3]+c*(e[3]-h[3]),u}function Q(h,e,c,s){const u=s??new f(4);return u[0]=h[0]+c[0]*(e[0]-h[0]),u[1]=h[1]+c[1]*(e[1]-h[1]),u[2]=h[2]+c[2]*(e[2]-h[2]),u[3]=h[3]+c[3]*(e[3]-h[3]),u}function lt(h,e,c){const s=c??new f(4);return s[0]=Math.max(h[0],e[0]),s[1]=Math.max(h[1],e[1]),s[2]=Math.max(h[2],e[2]),s[3]=Math.max(h[3],e[3]),s}function V(h,e,c){const s=c??new f(4);return s[0]=Math.min(h[0],e[0]),s[1]=Math.min(h[1],e[1]),s[2]=Math.min(h[2],e[2]),s[3]=Math.min(h[3],e[3]),s}function O(h,e,c){const s=c??new f(4);return s[0]=h[0]*e,s[1]=h[1]*e,s[2]=h[2]*e,s[3]=h[3]*e,s}const X=O;function it(h,e,c){const s=c??new f(4);return s[0]=h[0]/e,s[1]=h[1]/e,s[2]=h[2]/e,s[3]=h[3]/e,s}function ft(h,e){const c=e??new f(4);return c[0]=1/h[0],c[1]=1/h[1],c[2]=1/h[2],c[3]=1/h[3],c}const rt=ft;function bt(h,e){return h[0]*e[0]+h[1]*e[1]+h[2]*e[2]+h[3]*e[3]}function ht(h){const e=h[0],c=h[1],s=h[2],u=h[3];return Math.sqrt(e*e+c*c+s*s+u*u)}const dt=ht;function st(h){const e=h[0],c=h[1],s=h[2],u=h[3];return e*e+c*c+s*s+u*u}const Mt=st;function pt(h,e){const c=h[0]-e[0],s=h[1]-e[1],u=h[2]-e[2],p=h[3]-e[3];return Math.sqrt(c*c+s*s+u*u+p*p)}const Tt=pt;function gt(h,e){const c=h[0]-e[0],s=h[1]-e[1],u=h[2]-e[2],p=h[3]-e[3];return c*c+s*s+u*u+p*p}const Y=gt;function k(h,e){const c=e??new f(4),s=h[0],u=h[1],p=h[2],m=h[3],w=Math.sqrt(s*s+u*u+p*p+m*m);return w>1e-5?(c[0]=s/w,c[1]=u/w,c[2]=p/w,c[3]=m/w):(c[0]=0,c[1]=0,c[2]=0,c[3]=0),c}function C(h,e){const c=e??new f(4);return c[0]=-h[0],c[1]=-h[1],c[2]=-h[2],c[3]=-h[3],c}function mt(h,e){const c=e??new f(4);return c[0]=h[0],c[1]=h[1],c[2]=h[2],c[3]=h[3],c}const et=mt;function H(h,e,c){const s=c??new f(4);return s[0]=h[0]*e[0],s[1]=h[1]*e[1],s[2]=h[2]*e[2],s[3]=h[3]*e[3],s}const wt=H;function vt(h,e,c){const s=c??new f(4);return s[0]=h[0]/e[0],s[1]=h[1]/e[1],s[2]=h[2]/e[2],s[3]=h[3]/e[3],s}const xt=vt;function J(h){const e=h??new f(4);return e[0]=0,e[1]=0,e[2]=0,e[3]=0,e}function Lt(h,e,c){const s=c??new f(4),u=h[0],p=h[1],m=h[2],w=h[3];return s[0]=e[0]*u+e[4]*p+e[8]*m+e[12]*w,s[1]=e[1]*u+e[5]*p+e[9]*m+e[13]*w,s[2]=e[2]*u+e[6]*p+e[10]*m+e[14]*w,s[3]=e[3]*u+e[7]*p+e[11]*m+e[15]*w,s}function Bt(h,e,c){const s=c??new f(4);return k(h,s),O(s,e,s)}function b(h,e,c){const s=c??new f(4);return ht(h)>e?Bt(h,e,s):mt(h,s)}function A(h,e,c){const s=c??new f(4);return tt(h,e,.5,s)}return{create:i,fromValues:v,set:y,ceil:S,floor:U,round:R,clamp:L,add:T,addScaled:q,subtract:G,sub:F,equalsApproximately:N,equals:K,lerp:tt,lerpV:Q,max:lt,min:V,mulScalar:O,scale:X,divScalar:it,inverse:ft,invert:rt,dot:bt,length:ht,len:dt,lengthSq:st,lenSq:Mt,distance:pt,dist:Tt,distanceSq:gt,distSq:Y,normalize:k,negate:C,copy:mt,clone:et,multiply:H,mul:wt,divide:vt,div:xt,zero:J,transformMat4:Lt,setLength:Bt,truncate:b,midpoint:A}}const he=new Map;function Pe(f){let i=he.get(f);return i||(i=Ae(f),he.set(f,i)),i}function ee(f,i,v,y,S,U){return{mat3:be(f),mat4:Se(i),quat:De(v),vec2:ge(y),vec3:Kt(S),vec4:Pe(U)}}const{mat4:Vt,vec3:Jt}=ee(Float32Array,Float32Array,Float32Array,Float32Array,Float32Array,Float32Array);ee(Float64Array,Float64Array,Float64Array,Float64Array,Float64Array,Float64Array);ee(we,Array,Array,Array,Array,Array);class Ct{constructor(i,v,y,S,U="div"){this.parent=i,this.object=v,this.property=y,this._disabled=!1,this._hidden=!1,this.initialValue=this.getValue(),this.domElement=document.createElement(U),this.domElement.classList.add("lil-controller"),this.domElement.classList.add(S),this.$name=document.createElement("div"),this.$name.classList.add("lil-name"),Ct.nextNameID=Ct.nextNameID||0,this.$name.id=`lil-gui-name-${++Ct.nextNameID}`,this.$widget=document.createElement("div"),this.$widget.classList.add("lil-widget"),this.$disable=this.$widget,this.domElement.appendChild(this.$name),this.domElement.appendChild(this.$widget),this.domElement.addEventListener("keydown",R=>R.stopPropagation()),this.domElement.addEventListener("keyup",R=>R.stopPropagation()),this.parent.children.push(this),this.parent.controllers.push(this),this.parent.$children.appendChild(this.domElement),this._listenCallback=this._listenCallback.bind(this),this.name(y)}name(i){return this._name=i,this.$name.textContent=i,this}onChange(i){return this._onChange=i,this}_callOnChange(){this.parent._callOnChange(this),this._onChange!==void 0&&this._onChange.call(this,this.getValue()),this._changed=!0}onFinishChange(i){return this._onFinishChange=i,this}_callOnFinishChange(){this._changed&&(this.parent._callOnFinishChange(this),this._onFinishChange!==void 0&&this._onFinishChange.call(this,this.getValue())),this._changed=!1}reset(){return this.setValue(this.initialValue),this._callOnFinishChange(),this}enable(i=!0){return this.disable(!i)}disable(i=!0){return i===this._disabled?this:(this._disabled=i,this.domElement.classList.toggle("lil-disabled",i),this.$disable.toggleAttribute("disabled",i),this)}show(i=!0){return this._hidden=!i,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}options(i){const v=this.parent.add(this.object,this.property,i);return v.name(this._name),this.destroy(),v}min(i){return this}max(i){return this}step(i){return this}decimals(i){return this}listen(i=!0){return this._listening=i,this._listenCallbackID!==void 0&&(cancelAnimationFrame(this._listenCallbackID),this._listenCallbackID=void 0),this._listening&&this._listenCallback(),this}_listenCallback(){this._listenCallbackID=requestAnimationFrame(this._listenCallback);const i=this.save();i!==this._listenPrevValue&&this.updateDisplay(),this._listenPrevValue=i}getValue(){return this.object[this.property]}setValue(i){return this.getValue()!==i&&(this.object[this.property]=i,this._callOnChange(),this.updateDisplay()),this}updateDisplay(){return this}load(i){return this.setValue(i),this._callOnFinishChange(),this}save(){return this.getValue()}destroy(){this.listen(!1),this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.controllers.splice(this.parent.controllers.indexOf(this),1),this.parent.$children.removeChild(this.domElement)}}class Ue extends Ct{constructor(i,v,y){super(i,v,y,"lil-boolean","label"),this.$input=document.createElement("input"),this.$input.setAttribute("type","checkbox"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$input.addEventListener("change",()=>{this.setValue(this.$input.checked),this._callOnFinishChange()}),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.checked=this.getValue(),this}}function te(f){let i,v;return(i=f.match(/(#|0x)?([a-f0-9]{6})/i))?v=i[2]:(i=f.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/))?v=parseInt(i[1]).toString(16).padStart(2,0)+parseInt(i[2]).toString(16).padStart(2,0)+parseInt(i[3]).toString(16).padStart(2,0):(i=f.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i))&&(v=i[1]+i[1]+i[2]+i[2]+i[3]+i[3]),v?"#"+v:!1}const Ee={isPrimitive:!0,match:f=>typeof f=="string",fromHexString:te,toHexString:te},Gt={isPrimitive:!0,match:f=>typeof f=="number",fromHexString:f=>parseInt(f.substring(1),16),toHexString:f=>"#"+f.toString(16).padStart(6,0)},Re={isPrimitive:!1,match:f=>Array.isArray(f)||ArrayBuffer.isView(f),fromHexString(f,i,v=1){const y=Gt.fromHexString(f);i[0]=(y>>16&255)/255*v,i[1]=(y>>8&255)/255*v,i[2]=(y&255)/255*v},toHexString([f,i,v],y=1){y=255/y;const S=f*y<<16^i*y<<8^v*y<<0;return Gt.toHexString(S)}},ze={isPrimitive:!1,match:f=>Object(f)===f,fromHexString(f,i,v=1){const y=Gt.fromHexString(f);i.r=(y>>16&255)/255*v,i.g=(y>>8&255)/255*v,i.b=(y&255)/255*v},toHexString({r:f,g:i,b:v},y=1){y=255/y;const S=f*y<<16^i*y<<8^v*y<<0;return Gt.toHexString(S)}},Te=[Ee,Gt,Re,ze];function Le(f){return Te.find(i=>i.match(f))}class Be extends Ct{constructor(i,v,y,S){super(i,v,y,"lil-color"),this.$input=document.createElement("input"),this.$input.setAttribute("type","color"),this.$input.setAttribute("tabindex",-1),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$text=document.createElement("input"),this.$text.setAttribute("type","text"),this.$text.setAttribute("spellcheck","false"),this.$text.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("lil-display"),this.$display.appendChild(this.$input),this.$widget.appendChild(this.$display),this.$widget.appendChild(this.$text),this._format=Le(this.initialValue),this._rgbScale=S,this._initialValueHexString=this.save(),this._textFocused=!1,this.$input.addEventListener("input",()=>{this._setValueFromHexString(this.$input.value)}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$text.addEventListener("input",()=>{const U=te(this.$text.value);U&&this._setValueFromHexString(U)}),this.$text.addEventListener("focus",()=>{this._textFocused=!0,this.$text.select()}),this.$text.addEventListener("blur",()=>{this._textFocused=!1,this.updateDisplay(),this._callOnFinishChange()}),this.$disable=this.$text,this.updateDisplay()}reset(){return this._setValueFromHexString(this._initialValueHexString),this}_setValueFromHexString(i){if(this._format.isPrimitive){const v=this._format.fromHexString(i);this.setValue(v)}else this._format.fromHexString(i,this.getValue(),this._rgbScale),this._callOnChange(),this.updateDisplay()}save(){return this._format.toHexString(this.getValue(),this._rgbScale)}load(i){return this._setValueFromHexString(i),this._callOnFinishChange(),this}updateDisplay(){return this.$input.value=this._format.toHexString(this.getValue(),this._rgbScale),this._textFocused||(this.$text.value=this.$input.value.substring(1)),this.$display.style.backgroundColor=this.$input.value,this}}class Qt extends Ct{constructor(i,v,y){super(i,v,y,"lil-function"),this.$button=document.createElement("button"),this.$button.appendChild(this.$name),this.$widget.appendChild(this.$button),this.$button.addEventListener("click",S=>{S.preventDefault(),this.getValue().call(this.object),this._callOnChange()}),this.$button.addEventListener("touchstart",()=>{},{passive:!0}),this.$disable=this.$button}}class Ie extends Ct{constructor(i,v,y,S,U,R){super(i,v,y,"lil-number"),this._initInput(),this.min(S),this.max(U);const L=R!==void 0;this.step(L?R:this._getImplicitStep(),L),this.updateDisplay()}decimals(i){return this._decimals=i,this.updateDisplay(),this}min(i){return this._min=i,this._onUpdateMinMax(),this}max(i){return this._max=i,this._onUpdateMinMax(),this}step(i,v=!0){return this._step=i,this._stepExplicit=v,this}updateDisplay(){const i=this.getValue();if(this._hasSlider){let v=(i-this._min)/(this._max-this._min);v=Math.max(0,Math.min(v,1)),this.$fill.style.width=v*100+"%"}return this._inputFocused||(this.$input.value=this._decimals===void 0?i:i.toFixed(this._decimals)),this}_initInput(){this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("aria-labelledby",this.$name.id),window.matchMedia("(pointer: coarse)").matches&&(this.$input.setAttribute("type","number"),this.$input.setAttribute("step","any")),this.$widget.appendChild(this.$input),this.$disable=this.$input;const v=()=>{let O=parseFloat(this.$input.value);isNaN(O)||(this._stepExplicit&&(O=this._snap(O)),this.setValue(this._clamp(O)))},y=O=>{const X=parseFloat(this.$input.value);isNaN(X)||(this._snapClampSetValue(X+O),this.$input.value=this.getValue())},S=O=>{O.key==="Enter"&&this.$input.blur(),O.code==="ArrowUp"&&(O.preventDefault(),y(this._step*this._arrowKeyMultiplier(O))),O.code==="ArrowDown"&&(O.preventDefault(),y(this._step*this._arrowKeyMultiplier(O)*-1))},U=O=>{this._inputFocused&&(O.preventDefault(),y(this._step*this._normalizeMouseWheel(O)))};let R=!1,L,T,q,G,F;const N=5,K=O=>{L=O.clientX,T=q=O.clientY,R=!0,G=this.getValue(),F=0,window.addEventListener("mousemove",tt),window.addEventListener("mouseup",Q)},tt=O=>{if(R){const X=O.clientX-L,it=O.clientY-T;Math.abs(it)>N?(O.preventDefault(),this.$input.blur(),R=!1,this._setDraggingStyle(!0,"vertical")):Math.abs(X)>N&&Q()}if(!R){const X=O.clientY-q;F-=X*this._step*this._arrowKeyMultiplier(O),G+F>this._max?F=this._max-G:G+F<this._min&&(F=this._min-G),this._snapClampSetValue(G+F)}q=O.clientY},Q=()=>{this._setDraggingStyle(!1,"vertical"),this._callOnFinishChange(),window.removeEventListener("mousemove",tt),window.removeEventListener("mouseup",Q)},lt=()=>{this._inputFocused=!0},V=()=>{this._inputFocused=!1,this.updateDisplay(),this._callOnFinishChange()};this.$input.addEventListener("input",v),this.$input.addEventListener("keydown",S),this.$input.addEventListener("wheel",U,{passive:!1}),this.$input.addEventListener("mousedown",K),this.$input.addEventListener("focus",lt),this.$input.addEventListener("blur",V)}_initSlider(){this._hasSlider=!0,this.$slider=document.createElement("div"),this.$slider.classList.add("lil-slider"),this.$fill=document.createElement("div"),this.$fill.classList.add("lil-fill"),this.$slider.appendChild(this.$fill),this.$widget.insertBefore(this.$slider,this.$input),this.domElement.classList.add("lil-has-slider");const i=(V,O,X,it,ft)=>(V-O)/(X-O)*(ft-it)+it,v=V=>{const O=this.$slider.getBoundingClientRect();let X=i(V,O.left,O.right,this._min,this._max);this._snapClampSetValue(X)},y=V=>{this._setDraggingStyle(!0),v(V.clientX),window.addEventListener("mousemove",S),window.addEventListener("mouseup",U)},S=V=>{v(V.clientX)},U=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("mousemove",S),window.removeEventListener("mouseup",U)};let R=!1,L,T;const q=V=>{V.preventDefault(),this._setDraggingStyle(!0),v(V.touches[0].clientX),R=!1},G=V=>{V.touches.length>1||(this._hasScrollBar?(L=V.touches[0].clientX,T=V.touches[0].clientY,R=!0):q(V),window.addEventListener("touchmove",F,{passive:!1}),window.addEventListener("touchend",N))},F=V=>{if(R){const O=V.touches[0].clientX-L,X=V.touches[0].clientY-T;Math.abs(O)>Math.abs(X)?q(V):(window.removeEventListener("touchmove",F),window.removeEventListener("touchend",N))}else V.preventDefault(),v(V.touches[0].clientX)},N=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("touchmove",F),window.removeEventListener("touchend",N)},K=this._callOnFinishChange.bind(this),tt=400;let Q;const lt=V=>{if(Math.abs(V.deltaX)<Math.abs(V.deltaY)&&this._hasScrollBar)return;V.preventDefault();const X=this._normalizeMouseWheel(V)*this._step;this._snapClampSetValue(this.getValue()+X),this.$input.value=this.getValue(),clearTimeout(Q),Q=setTimeout(K,tt)};this.$slider.addEventListener("mousedown",y),this.$slider.addEventListener("touchstart",G,{passive:!1}),this.$slider.addEventListener("wheel",lt,{passive:!1})}_setDraggingStyle(i,v="horizontal"){this.$slider&&this.$slider.classList.toggle("lil-active",i),document.body.classList.toggle("lil-dragging",i),document.body.classList.toggle(`lil-${v}`,i)}_getImplicitStep(){return this._hasMin&&this._hasMax?(this._max-this._min)/1e3:.1}_onUpdateMinMax(){!this._hasSlider&&this._hasMin&&this._hasMax&&(this._stepExplicit||this.step(this._getImplicitStep(),!1),this._initSlider(),this.updateDisplay())}_normalizeMouseWheel(i){let{deltaX:v,deltaY:y}=i;return Math.floor(i.deltaY)!==i.deltaY&&i.wheelDelta&&(v=0,y=-i.wheelDelta/120,y*=this._stepExplicit?1:10),v+-y}_arrowKeyMultiplier(i){let v=this._stepExplicit?1:10;return i.shiftKey?v*=10:i.altKey&&(v/=10),v}_snap(i){let v=0;return this._hasMin?v=this._min:this._hasMax&&(v=this._max),i-=v,i=Math.round(i/this._step)*this._step,i+=v,i=parseFloat(i.toPrecision(15)),i}_clamp(i){return i<this._min&&(i=this._min),i>this._max&&(i=this._max),i}_snapClampSetValue(i){this.setValue(this._clamp(this._snap(i)))}get _hasScrollBar(){const i=this.parent.root.$children;return i.scrollHeight>i.clientHeight}get _hasMin(){return this._min!==void 0}get _hasMax(){return this._max!==void 0}}class $e extends Ct{constructor(i,v,y,S){super(i,v,y,"lil-option"),this.$select=document.createElement("select"),this.$select.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("lil-display"),this.$select.addEventListener("change",()=>{this.setValue(this._values[this.$select.selectedIndex]),this._callOnFinishChange()}),this.$select.addEventListener("focus",()=>{this.$display.classList.add("lil-focus")}),this.$select.addEventListener("blur",()=>{this.$display.classList.remove("lil-focus")}),this.$widget.appendChild(this.$select),this.$widget.appendChild(this.$display),this.$disable=this.$select,this.options(S)}options(i){return this._values=Array.isArray(i)?i:Object.values(i),this._names=Array.isArray(i)?i:Object.keys(i),this.$select.replaceChildren(),this._names.forEach(v=>{const y=document.createElement("option");y.textContent=v,this.$select.appendChild(y)}),this.updateDisplay(),this}updateDisplay(){const i=this.getValue(),v=this._values.indexOf(i);return this.$select.selectedIndex=v,this.$display.textContent=v===-1?i:this._names[v],this}}class Oe extends Ct{constructor(i,v,y){super(i,v,y,"lil-string"),this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("spellcheck","false"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$input.addEventListener("input",()=>{this.setValue(this.$input.value)}),this.$input.addEventListener("keydown",S=>{S.code==="Enter"&&this.$input.blur()}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$widget.appendChild(this.$input),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.value=this.getValue(),this}}var Fe=`.lil-gui {
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
}`;function Ve(f){const i=document.createElement("style");i.innerHTML=f;const v=document.querySelector("head link[rel=stylesheet], head style");v?document.head.insertBefore(i,v):document.head.appendChild(i)}let de=!1;class ne{constructor({parent:i,autoPlace:v=i===void 0,container:y,width:S,title:U="Controls",closeFolders:R=!1,injectStyles:L=!0,touchStyles:T=!0}={}){if(this.parent=i,this.root=i?i.root:this,this.children=[],this.controllers=[],this.folders=[],this._closed=!1,this._hidden=!1,this.domElement=document.createElement("div"),this.domElement.classList.add("lil-gui"),this.$title=document.createElement("button"),this.$title.classList.add("lil-title"),this.$title.setAttribute("aria-expanded",!0),this.$title.addEventListener("click",()=>this.openAnimated(this._closed)),this.$title.addEventListener("touchstart",()=>{},{passive:!0}),this.$children=document.createElement("div"),this.$children.classList.add("lil-children"),this.domElement.appendChild(this.$title),this.domElement.appendChild(this.$children),this.title(U),this.parent){this.parent.children.push(this),this.parent.folders.push(this),this.parent.$children.appendChild(this.domElement);return}this.domElement.classList.add("lil-root"),T&&this.domElement.classList.add("lil-allow-touch-styles"),!de&&L&&(Ve(Fe),de=!0),y?y.appendChild(this.domElement):v&&(this.domElement.classList.add("lil-auto-place","autoPlace"),document.body.appendChild(this.domElement)),S&&this.domElement.style.setProperty("--width",S+"px"),this._closeFolders=R}add(i,v,y,S,U){if(Object(y)===y)return new $e(this,i,v,y);const R=i[v];switch(typeof R){case"number":return new Ie(this,i,v,y,S,U);case"boolean":return new Ue(this,i,v);case"string":return new Oe(this,i,v);case"function":return new Qt(this,i,v)}console.error(`gui.add failed
	property:`,v,`
	object:`,i,`
	value:`,R)}addColor(i,v,y=1){return new Be(this,i,v,y)}addFolder(i){const v=new ne({parent:this,title:i});return this.root._closeFolders&&v.close(),v}load(i,v=!0){return i.controllers&&this.controllers.forEach(y=>{y instanceof Qt||y._name in i.controllers&&y.load(i.controllers[y._name])}),v&&i.folders&&this.folders.forEach(y=>{y._title in i.folders&&y.load(i.folders[y._title])}),this}save(i=!0){const v={controllers:{},folders:{}};return this.controllers.forEach(y=>{if(!(y instanceof Qt)){if(y._name in v.controllers)throw new Error(`Cannot save GUI with duplicate property "${y._name}"`);v.controllers[y._name]=y.save()}}),i&&this.folders.forEach(y=>{if(y._title in v.folders)throw new Error(`Cannot save GUI with duplicate folder "${y._title}"`);v.folders[y._title]=y.save()}),v}open(i=!0){return this._setClosed(!i),this.$title.setAttribute("aria-expanded",!this._closed),this.domElement.classList.toggle("lil-closed",this._closed),this}close(){return this.open(!1)}_setClosed(i){this._closed!==i&&(this._closed=i,this._callOnOpenClose(this))}show(i=!0){return this._hidden=!i,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}openAnimated(i=!0){return this._setClosed(!i),this.$title.setAttribute("aria-expanded",!this._closed),requestAnimationFrame(()=>{const v=this.$children.clientHeight;this.$children.style.height=v+"px",this.domElement.classList.add("lil-transition");const y=U=>{U.target===this.$children&&(this.$children.style.height="",this.domElement.classList.remove("lil-transition"),this.$children.removeEventListener("transitionend",y))};this.$children.addEventListener("transitionend",y);const S=i?this.$children.scrollHeight:0;this.domElement.classList.toggle("lil-closed",!i),requestAnimationFrame(()=>{this.$children.style.height=S+"px"})}),this}title(i){return this._title=i,this.$title.textContent=i,this}reset(i=!0){return(i?this.controllersRecursive():this.controllers).forEach(y=>y.reset()),this}onChange(i){return this._onChange=i,this}_callOnChange(i){this.parent&&this.parent._callOnChange(i),this._onChange!==void 0&&this._onChange.call(this,{object:i.object,property:i.property,value:i.getValue(),controller:i})}onFinishChange(i){return this._onFinishChange=i,this}_callOnFinishChange(i){this.parent&&this.parent._callOnFinishChange(i),this._onFinishChange!==void 0&&this._onFinishChange.call(this,{object:i.object,property:i.property,value:i.getValue(),controller:i})}onOpenClose(i){return this._onOpenClose=i,this}_callOnOpenClose(i){this.parent&&this.parent._callOnOpenClose(i),this._onOpenClose!==void 0&&this._onOpenClose.call(this,i)}destroy(){this.parent&&(this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.folders.splice(this.parent.folders.indexOf(this),1)),this.domElement.parentElement&&this.domElement.parentElement.removeChild(this.domElement),Array.from(this.children).forEach(i=>i.destroy())}controllersRecursive(){let i=Array.from(this.controllers);return this.folders.forEach(v=>{i=i.concat(v.controllersRecursive())}),i}foldersRecursive(){let i=Array.from(this.folders);return this.folders.forEach(v=>{i=i.concat(v.foldersRecursive())}),i}}var Ce=`struct CommonUniforms {
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
}`;class ke{device;format;uniformBuffer;tileTexture;tileSampler;lightUniformBuffer;sphereUniformBuffer;shadowUniformBuffer;positionBuffer;indexBuffer;vertexCount;pipeline;constructor(i,v,y,S,U,R,L,T){this.device=i,this.format=v,this.uniformBuffer=y,this.tileTexture=S,this.tileSampler=U,this.lightUniformBuffer=R,this.sphereUniformBuffer=L,this.shadowUniformBuffer=T,this.createGeometry(),this.createPipeline()}createGeometry(){function i(R){return[(R&1)*2-1,(R&2)-1,(R&4)/2-1]}const v=[[0,4,2,6,-1,0,0],[1,3,5,7,1,0,0],[2,6,3,7,0,1,0],[0,2,1,3,0,0,-1],[4,5,6,7,0,0,1]],y=[],S=[];let U=0;for(const R of v){const L=U;for(let T=0;T<4;T++){const q=R[T],G=i(q);y.push(...G),U++}S.push(L+0,L+1,L+2),S.push(L+2,L+1,L+3)}this.vertexCount=S.length,this.positionBuffer=this.device.createBuffer({label:"Pool Vertex Buffer",size:y.length*4,usage:GPUBufferUsage.VERTEX,mappedAtCreation:!0}),new Float32Array(this.positionBuffer.getMappedRange()).set(y),this.positionBuffer.unmap(),this.indexBuffer=this.device.createBuffer({label:"Pool Index Buffer",size:S.length*4,usage:GPUBufferUsage.INDEX,mappedAtCreation:!0}),new Uint32Array(this.indexBuffer.getMappedRange()).set(S),this.indexBuffer.unmap()}createPipeline(){const i=this.device.createShaderModule({label:"Pool Vertex Shader",code:Ce}),v=this.device.createShaderModule({label:"Pool Fragment Shader",code:Ge});this.pipeline=this.device.createRenderPipeline({label:"Pool Pipeline",layout:"auto",vertex:{module:i,entryPoint:"vs_main",buffers:[{arrayStride:12,attributes:[{shaderLocation:0,offset:0,format:"float32x3"}]}]},fragment:{module:v,entryPoint:"fs_main",targets:[{format:this.format}]},primitive:{topology:"triangle-list",cullMode:"back"},depthStencil:{depthWriteEnabled:!0,depthCompare:"less",format:"depth24plus"}})}render(i,v,y,S){const U=this.device.createBindGroup({layout:this.pipeline.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:this.uniformBuffer}},{binding:1,resource:this.tileSampler},{binding:2,resource:this.tileTexture.createView()},{binding:3,resource:{buffer:this.lightUniformBuffer}},{binding:4,resource:{buffer:this.sphereUniformBuffer}},{binding:5,resource:y},{binding:6,resource:v.createView()},{binding:7,resource:S.createView()},{binding:8,resource:{buffer:this.shadowUniformBuffer}}]});i.setPipeline(this.pipeline),i.setBindGroup(0,U),i.setVertexBuffer(0,this.positionBuffer),i.setIndexBuffer(this.indexBuffer,"uint32"),i.drawIndexed(this.vertexCount)}}var qe=`struct CommonUniforms {
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
}`;class He{device;format;commonUniformBuffer;sphereUniformBuffer;lightUniformBuffer;positionBuffer;indexBuffer;vertexCount;pipeline;constructor(i,v,y,S,U){this.device=i,this.format=v,this.commonUniformBuffer=y,this.sphereUniformBuffer=U,this.lightUniformBuffer=S,this.createGeometry(),this.createPipeline()}update(i,v){const y=new Float32Array([...i,v]);this.device.queue.writeBuffer(this.sphereUniformBuffer,0,y)}createGeometry(){class v{unique;map;constructor(){this.unique=[],this.map=new Map}add(q){const G=q.join(",");return this.map.has(G)||(this.map.set(G,this.unique.length),this.unique.push(q)),this.map.get(G)}}function y(T){return[(T&1)*2-1,(T&2)-1,(T&4)/2-1]}function S(T){return T+(T-T*T)/2}const U=new v,R=[];for(let T=0;T<8;T++){const q=y(T),G=q[0]*q[1]*q[2]>0,F=[];for(let N=0;N<=10;N++)for(let K=0;N+K<=10;K++){const tt=N/10,Q=K/10,lt=(10-N-K)/10,V=[S(tt),S(Q),S(lt)],O=Math.sqrt(V[0]*V[0]+V[1]*V[1]+V[2]*V[2]),X=[V[0]/O*q[0],V[1]/O*q[1],V[2]/O*q[2]];F.push(U.add(X))}for(let N=0;N<=10;N++)if(N>0)for(let K=0;N+K<=10;K++){const tt=(N-1)*11+(N-1-(N-1)*(N-1))/2+K,Q=N*11+(N-N*N)/2+K;G?R.push(F[tt],F[Q],F[tt+1]):R.push(F[tt],F[tt+1],F[Q]),N+K<10&&(G?R.push(F[Q],F[Q+1],F[tt+1]):R.push(F[Q],F[tt+1],F[Q+1]))}}this.vertexCount=R.length;const L=[];for(const T of U.unique)L.push(...T);this.positionBuffer=this.device.createBuffer({label:"Sphere Vertex Buffer",size:L.length*4,usage:GPUBufferUsage.VERTEX,mappedAtCreation:!0}),new Float32Array(this.positionBuffer.getMappedRange()).set(L),this.positionBuffer.unmap(),this.indexBuffer=this.device.createBuffer({label:"Sphere Index Buffer",size:R.length*4,usage:GPUBufferUsage.INDEX,mappedAtCreation:!0}),new Uint32Array(this.indexBuffer.getMappedRange()).set(R),this.indexBuffer.unmap()}createPipeline(){const i=this.device.createShaderModule({label:"Sphere Vertex Shader",code:qe}),v=this.device.createShaderModule({label:"Sphere Fragment Shader",code:Ne});this.pipeline=this.device.createRenderPipeline({label:"Sphere Pipeline",layout:"auto",vertex:{module:i,entryPoint:"vs_main",buffers:[{arrayStride:12,attributes:[{shaderLocation:0,offset:0,format:"float32x3"}]}]},fragment:{module:v,entryPoint:"fs_main",targets:[{format:this.format}]},primitive:{topology:"triangle-list",cullMode:"back"},depthStencil:{depthWriteEnabled:!0,depthCompare:"less",format:"depth24plus"}})}render(i,v,y,S){const U=this.device.createBindGroup({layout:this.pipeline.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:this.commonUniformBuffer}},{binding:1,resource:{buffer:this.sphereUniformBuffer}},{binding:2,resource:{buffer:this.lightUniformBuffer}},{binding:3,resource:y},{binding:4,resource:v.createView()},{binding:5,resource:S.createView()}]});i.setPipeline(this.pipeline),i.setBindGroup(0,U),i.setVertexBuffer(0,this.positionBuffer),i.setIndexBuffer(this.indexBuffer,"uint32"),i.drawIndexed(this.vertexCount)}}const Yt=`struct VertexOutput {
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
}`;class tn{device;width;height;commonUniformBuffer;lightUniformBuffer;sphereUniformBuffer;shadowUniformBuffer;waterUniformBuffer;tileTexture;tileSampler;skyTexture;skySampler;textureA;textureB;causticsTexture;sampler;dropPipeline;updatePipeline;normalPipeline;spherePipeline;positionBuffer;indexBuffer;vertexCount;surfaceBindGroupLayout;surfacePipelineAbove;surfacePipelineUnder;causticsPipeline;constructor(i,v,y,S,U,R,L,T,q,G,F){this.device=i,this.width=v,this.height=y,this.commonUniformBuffer=S,this.lightUniformBuffer=U,this.sphereUniformBuffer=R,this.shadowUniformBuffer=L,this.tileTexture=T,this.tileSampler=q,this.skyTexture=G,this.skySampler=F,this.waterUniformBuffer=this.device.createBuffer({size:16,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),this.textureA=this.createTexture(),this.textureB=this.createTexture(),this.causticsTexture=this.device.createTexture({size:[1024,1024],format:"rgba8unorm",usage:GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.RENDER_ATTACHMENT}),this.sampler=i.createSampler({magFilter:"linear",minFilter:"linear",addressModeU:"clamp-to-edge",addressModeV:"clamp-to-edge"}),this.createPipelines(),this.createSurfaceMesh(),this.createSurfacePipeline(),this.createCausticsPipeline()}createTexture(){const i=this.device.features.has("float32-filterable")?"rgba32float":"rgba16float";return this.device.createTexture({size:[this.width,this.height],format:i,usage:GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.RENDER_ATTACHMENT})}createPipelines(){const i=this.device.features.has("float32-filterable")?"rgba32float":"rgba16float";this.dropPipeline=this.createPipeline("Drop",Yt,je,32,i),this.updatePipeline=this.createPipeline("Update",Yt,We,16,i),this.normalPipeline=this.createPipeline("Normal",Yt,Xe,16,i),this.spherePipeline=this.createPipeline("Sphere",Yt,Ye,32,i)}createPipeline(i,v,y,S,U){const R=this.device.createShaderModule({label:i+" Module",code:v+y});return{pipeline:this.device.createRenderPipeline({label:i+" Pipeline",layout:"auto",vertex:{module:R,entryPoint:"vs_main"},fragment:{module:R,entryPoint:"fs_main",targets:[{format:U}]},primitive:{topology:"triangle-list"}}),uniformSize:S,uniformBuffer:this.device.createBuffer({size:S,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST})}}runPipeline(i,v){this.device.queue.writeBuffer(i.uniformBuffer,0,v);const y=this.device.createBindGroup({layout:i.pipeline.getBindGroupLayout(0),entries:[{binding:0,resource:this.textureA.createView()},{binding:1,resource:this.sampler},{binding:2,resource:{buffer:i.uniformBuffer}}]}),S=this.device.createCommandEncoder(),U=S.beginRenderPass({colorAttachments:[{view:this.textureB.createView(),loadOp:"clear",storeOp:"store",clearValue:{r:0,g:0,b:0,a:0}}]});U.setPipeline(i.pipeline),U.setBindGroup(0,y),U.draw(6),U.end(),this.device.queue.submit([S.finish()]);const R=this.textureA;this.textureA=this.textureB,this.textureB=R}addDrop(i,v,y,S){const U=new Float32Array(4);U[0]=i,U[1]=v,U[2]=y,U[3]=S,this.runPipeline(this.dropPipeline,U)}stepSimulation(){const i=new Float32Array(2);i[0]=1/this.width,i[1]=1/this.height,this.runPipeline(this.updatePipeline,i)}updateNormals(){const i=new Float32Array(2);i[0]=1/this.width,i[1]=1/this.height,this.runPipeline(this.normalPipeline,i)}moveSphere(i,v,y){const S=new Float32Array(8);S[0]=i[0],S[1]=i[1],S[2]=i[2],S[3]=y,S[4]=v[0],S[5]=v[1],S[6]=v[2],S[7]=0,this.runPipeline(this.spherePipeline,S)}createSurfaceMesh(){const v=[],y=[];for(let S=0;S<=200;S++){const U=S/200;for(let R=0;R<=200;R++){const L=R/200;v.push(2*L-1,2*U-1,0)}}for(let S=0;S<200;S++)for(let U=0;U<200;U++){const R=U+S*201;y.push(R,R+1,R+200+1),y.push(R+200+1,R+1,R+200+2)}this.vertexCount=y.length,this.positionBuffer=this.device.createBuffer({label:"Water Surface Vertices",size:v.length*4,usage:GPUBufferUsage.VERTEX,mappedAtCreation:!0}),new Float32Array(this.positionBuffer.getMappedRange()).set(v),this.positionBuffer.unmap(),this.indexBuffer=this.device.createBuffer({label:"Water Surface Indices",size:y.length*4,usage:GPUBufferUsage.INDEX,mappedAtCreation:!0}),new Uint32Array(this.indexBuffer.getMappedRange()).set(y),this.indexBuffer.unmap()}createSurfacePipeline(){const i=(U,R)=>this.device.createShaderModule({label:`${U} Vertex Shader`,code:R}),v=(U,R)=>this.device.createShaderModule({label:`${U} Fragment Shader`,code:R});this.surfaceBindGroupLayout=this.device.createBindGroupLayout({label:"Water Surface BindGroupLayout",entries:[{binding:0,visibility:GPUShaderStage.VERTEX|GPUShaderStage.FRAGMENT,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.FRAGMENT,buffer:{type:"uniform"}},{binding:2,visibility:GPUShaderStage.FRAGMENT,buffer:{type:"uniform"}},{binding:3,visibility:GPUShaderStage.FRAGMENT,sampler:{}},{binding:4,visibility:GPUShaderStage.FRAGMENT,texture:{}},{binding:5,visibility:GPUShaderStage.VERTEX|GPUShaderStage.FRAGMENT,sampler:{}},{binding:6,visibility:GPUShaderStage.VERTEX|GPUShaderStage.FRAGMENT,texture:{}},{binding:7,visibility:GPUShaderStage.FRAGMENT,sampler:{}},{binding:8,visibility:GPUShaderStage.FRAGMENT,texture:{viewDimension:"cube"}},{binding:9,visibility:GPUShaderStage.FRAGMENT,texture:{}},{binding:10,visibility:GPUShaderStage.FRAGMENT,buffer:{type:"uniform"}},{binding:11,visibility:GPUShaderStage.FRAGMENT,buffer:{type:"uniform"}}]});const y=this.device.createPipelineLayout({label:"Water Surface PipelineLayout",bindGroupLayouts:[this.surfaceBindGroupLayout]}),S=(U,R,L,T)=>{const q=i(U,R),G=v(U,L);return this.device.createRenderPipeline({label:U,layout:y,vertex:{module:q,entryPoint:"vs_main",buffers:[{arrayStride:12,attributes:[{shaderLocation:0,offset:0,format:"float32x3"}]}]},fragment:{module:G,entryPoint:"fs_main",targets:[{format:navigator.gpu.getPreferredCanvasFormat()}]},primitive:{topology:"triangle-list",cullMode:T},depthStencil:{depthWriteEnabled:!0,depthCompare:"less",format:"depth24plus"}})};this.surfacePipelineAbove=S("Water Surface Above Pipeline",pe,Ze,"front"),this.surfacePipelineUnder=S("Water Surface Under Pipeline",pe,Ke,"back")}renderSurface(i){const v=this.device.createBindGroup({layout:this.surfaceBindGroupLayout,entries:[{binding:0,resource:{buffer:this.commonUniformBuffer}},{binding:1,resource:{buffer:this.lightUniformBuffer}},{binding:2,resource:{buffer:this.sphereUniformBuffer}},{binding:3,resource:this.tileSampler},{binding:4,resource:this.tileTexture.createView()},{binding:5,resource:this.sampler},{binding:6,resource:this.textureA.createView()},{binding:7,resource:this.skySampler},{binding:8,resource:this.skyTexture.createView({dimension:"cube"})},{binding:9,resource:this.causticsTexture.createView()},{binding:10,resource:{buffer:this.shadowUniformBuffer}},{binding:11,resource:{buffer:this.waterUniformBuffer}}]});i.setPipeline(this.surfacePipelineAbove),i.setBindGroup(0,v),i.setVertexBuffer(0,this.positionBuffer),i.setIndexBuffer(this.indexBuffer,"uint32"),i.drawIndexed(this.vertexCount),i.setPipeline(this.surfacePipelineUnder),i.setBindGroup(0,v),i.drawIndexed(this.vertexCount)}createCausticsPipeline(){const i=this.device.createShaderModule({label:"Caustics Vertex Shader",code:Qe}),v=this.device.createShaderModule({label:"Caustics Fragment Shader",code:Je});this.causticsPipeline=this.device.createRenderPipeline({label:"Caustics Pipeline",layout:"auto",vertex:{module:i,entryPoint:"vs_main",buffers:[{arrayStride:12,attributes:[{shaderLocation:0,offset:0,format:"float32x3"}]}]},fragment:{module:v,entryPoint:"fs_main",targets:[{format:"rgba8unorm",blend:{color:{operation:"add",srcFactor:"one",dstFactor:"one"},alpha:{operation:"add",srcFactor:"one",dstFactor:"one"}}}]},primitive:{topology:"triangle-list"}})}updateCaustics(){const i=this.device.createBindGroup({layout:this.causticsPipeline.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:this.lightUniformBuffer}},{binding:1,resource:{buffer:this.sphereUniformBuffer}},{binding:2,resource:this.sampler},{binding:3,resource:this.textureA.createView()},{binding:4,resource:{buffer:this.shadowUniformBuffer}}]}),v=this.device.createCommandEncoder(),y=v.beginRenderPass({colorAttachments:[{view:this.causticsTexture.createView(),loadOp:"clear",storeOp:"store",clearValue:{r:0,g:0,b:0,a:0}}]});y.setPipeline(this.causticsPipeline),y.setBindGroup(0,i),y.setVertexBuffer(0,this.positionBuffer),y.setIndexBuffer(this.indexBuffer,"uint32"),y.drawIndexed(this.vertexCount),y.end(),this.device.queue.submit([v.finish()])}updateDensity(i){this.device.queue.writeBuffer(this.waterUniformBuffer,0,new Float32Array([i]))}}class nt{x;y;z;constructor(i=0,v=0,y=0){this.x=i,this.y=v,this.z=y}negative(){return new nt(-this.x,-this.y,-this.z)}add(i){return i instanceof nt?new nt(this.x+i.x,this.y+i.y,this.z+i.z):new nt(this.x+i,this.y+i,this.z+i)}subtract(i){return i instanceof nt?new nt(this.x-i.x,this.y-i.y,this.z-i.z):new nt(this.x-i,this.y-i,this.z-i)}multiply(i){return i instanceof nt?new nt(this.x*i.x,this.y*i.y,this.z*i.z):new nt(this.x*i,this.y*i,this.z*i)}divide(i){return i instanceof nt?new nt(this.x/i.x,this.y/i.y,this.z/i.z):new nt(this.x/i,this.y/i,this.z/i)}dot(i){return this.x*i.x+this.y*i.y+this.z*i.z}length(){return Math.sqrt(this.dot(this))}unit(){return this.divide(this.length())}toArray(){return[this.x,this.y,this.z]}clone(){return new nt(this.x,this.y,this.z)}static fromAngles(i,v){return new nt(Math.cos(v)*Math.cos(i),Math.sin(v),Math.cos(v)*Math.sin(i))}static lerp(i,v,y){return i.add(v.subtract(i).multiply(y))}}class en{t;hit;normal;constructor(i,v,y){this.t=i,this.hit=v,this.normal=y}}class Zt{eye;viewport;invViewProj;ray00;ray10;ray01;ray11;constructor(i,v,y){this.viewport=y;const S=Vt.invert(i),U=Jt.transformMat4([0,0,0],S);this.eye=new nt(U[0],U[1],U[2]),this.invViewProj=Vt.invert(Vt.multiply(v,i));const[R,L,T,q]=y,G=R+T,F=L+q;this.ray00=this.unProject(R,L,1).subtract(this.eye),this.ray10=this.unProject(G,L,1).subtract(this.eye),this.ray01=this.unProject(R,F,1).subtract(this.eye),this.ray11=this.unProject(G,F,1).subtract(this.eye)}unProject(i,v,y){const[S,U,R,L]=this.viewport,T=(i-S)/R*2-1,q=(1-(v-U)/L)*2-1,G=Jt.transformMat4([T,q,y],this.invViewProj);return new nt(G[0],G[1],G[2])}getRayForPixel(i,v){const[y,S,U,R]=this.viewport,L=(i-y)/U,T=(v-S)/R,q=nt.lerp(this.ray00,this.ray10,L),G=nt.lerp(this.ray01,this.ray11,L);return nt.lerp(q,G,T).unit()}static hitTestSphere(i,v,y,S){const U=i.subtract(y),R=v.dot(v),L=2*v.dot(U),T=U.dot(U)-S*S,q=L*L-4*R*T;if(q>0){const G=(-L-Math.sqrt(q))/(2*R),F=i.add(v.multiply(G)),N=F.subtract(y).divide(S);return new en(G,F,N)}return null}}class nn{device;constructor(i){this.device=i}async load(i){const v=["xpos","xneg","ypos","yneg","zpos","zneg"],y=await Promise.all(v.map(L=>fetch(i[L]).then(T=>T.blob()).then(T=>createImageBitmap(T)))),{width:S,height:U}=y[0],R=this.device.createTexture({size:[S,U,6],format:"rgba8unorm",usage:GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_DST|GPUTextureUsage.RENDER_ATTACHMENT});return y.forEach((L,T)=>{this.device.queue.copyExternalImageToTexture({source:L,flipY:!0},{texture:R,origin:[0,0,T]},{width:S,height:U})}),R}}var Ft=(f=>(f[f.None=-1]="None",f[f.AddDrops=0]="AddDrops",f[f.OrbitCamera=1]="OrbitCamera",f[f.MoveSphere=2]="MoveSphere",f))(Ft||{});async function rn(){const f=navigator.gpu;if(!f){document.getElementById("loading").innerHTML="WebGPU not supported.";return}const i=await f.requestAdapter();if(!i){document.getElementById("loading").innerHTML="No WebGPU adapter found.";return}const v=[];i.features.has("float32-filterable")&&v.push("float32-filterable");const y=await i.requestDevice({requiredFeatures:v}),S=document.querySelector("canvas"),U=S.getContext("webgpu"),R=navigator.gpu.getPreferredCanvasFormat();U.configure({device:y,format:R,alphaMode:"premultiplied"});const L=document.getElementById("help"),T=window.devicePixelRatio||1;let q=performance.now();async function G(x){const D=await(await fetch(x)).blob(),E=await createImageBitmap(D),z=y.createTexture({label:x,size:[E.width,E.height],format:"rgba8unorm",usage:GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_DST|GPUTextureUsage.RENDER_ATTACHMENT});return y.queue.copyExternalImageToTexture({source:E,flipY:!0},{texture:z},{width:E.width,height:E.height}),z}const F="/webgpu-water/",N=await G(`${F}tiles.jpg`),K=y.createSampler({magFilter:"linear",minFilter:"linear",addressModeU:"repeat",addressModeV:"repeat"}),Q=await new nn(y).load({xpos:`${F}xpos.jpg`,xneg:`${F}xneg.jpg`,ypos:`${F}ypos.jpg`,yneg:`${F}yneg.jpg`,zpos:`${F}zpos.jpg`,zneg:`${F}zneg.jpg`}),lt=y.createSampler({magFilter:"linear",minFilter:"linear"});let V=-25,O=-200.5,X=4,it=V,ft=O,rt=X;function bt(){const x=S.width/S.height,P=Vt.perspective(Math.PI/4,x,.01,100),D=Vt.identity();return Vt.translate(D,[0,0,-X],D),Vt.rotateX(D,-V*Math.PI/180,D),Vt.rotateY(D,-O*Math.PI/180,D),Vt.translate(D,[0,.5,0],D),{projectionMatrix:P,viewMatrix:D}}const ht=y.createBuffer({size:80,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),dt=y.createBuffer({size:16,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),st=y.createBuffer({size:16,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),Mt=y.createBuffer({size:16,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST});let pt=new nt(2,2,-1).unit();function Tt(){y.queue.writeBuffer(dt,0,new Float32Array([...pt.toArray(),0]))}Tt(),y.queue.writeBuffer(Mt,0,new Float32Array([1,1,1,0]));const gt=new ke(y,R,ht,N,K,dt,st,Mt),Y=new He(y,R,ht,dt,st),k=new tn(y,256,256,ht,dt,st,Mt,N,K,Q,lt);let C=new nt(-.4,-.75,.2),mt=C.clone();const et=.25;let H=new nt,wt=!1,vt=!1;const xt=new ne({title:"Settings"});xt.close();const J={gravity:wt,followCamera:!1,showSphere:!0,useDensity:!1,density:.9};xt.add(J,"showSphere").name("Render Sphere").onChange(x=>{y.queue.writeBuffer(Mt,0,new Float32Array([1,x?1:0,1,0])),document.activeElement?.blur()});const Lt=xt.add(J,"gravity").name("Toggle Gravity").onChange(x=>{wt=x,document.activeElement?.blur()});xt.add(J,"useDensity").name("Enable Density").onChange(()=>{b(),document.activeElement?.blur()});const Bt=xt.add(J,"density",.2,2,.1).name("Sphere Density").onChange(()=>{document.activeElement?.blur()});function b(){Bt.show(J.useDensity)}b(),xt.add(J,"followCamera").name("Light From Camera").onChange(()=>{document.activeElement?.blur()}),Y.update(C.toArray(),et);for(let x=0;x<20;x++)k.addDrop(Math.random()*2-1,Math.random()*2-1,.03,x&1?.01:-.01);const A={};window.addEventListener("keydown",x=>{const P=x.key.toUpperCase();A[P]=!0,P==="G"?(wt=!wt,J.gravity=wt,Lt.updateDisplay()):P===" "&&(vt=!vt)}),window.addEventListener("keyup",x=>{A[x.key.toUpperCase()]=!1});let h=Ft.None,e=0,c=0,s,u;const p=new Map;let m=0;function w(){return[0,0,S.width,S.height]}function t(x,P,D){if(e=x,c=P,D===2){h=Ft.OrbitCamera;return}const{projectionMatrix:E,viewMatrix:z}=bt(),$=new Zt(z,E,w()),B=$.getRayForPixel(x*T,P*T),I=J.showSphere?Zt.hitTestSphere($.eye,B,C,et):null;if(I){h=Ft.MoveSphere,s=I.hit,u=$.getRayForPixel(S.width/2,S.height/2).negative();return}const Z=-$.eye.y/B.y,W=$.eye.add(B.multiply(Z));Math.abs(W.x)<1&&Math.abs(W.z)<1?(h=Ft.AddDrops,k.addDrop(W.x,W.z,.03,.01)):h=Ft.OrbitCamera}function l(x,P){if(h===Ft.OrbitCamera)ft-=x-e,it-=P-c,it=Math.max(-89.999,Math.min(89.999,it));else if(h===Ft.MoveSphere){const{projectionMatrix:D,viewMatrix:E}=bt(),z=new Zt(E,D,w()),$=z.getRayForPixel(x*T,P*T),B=-u.dot(z.eye.subtract(s))/u.dot($),I=z.eye.add($.multiply(B));C=C.add(I.subtract(s)),C.x=Math.max(et-1,Math.min(1-et,C.x)),C.y=Math.max(et-1,Math.min(10,C.y)),C.z=Math.max(et-1,Math.min(1-et,C.z)),Y.update(C.toArray(),et),s=I}else if(h===Ft.AddDrops){const{projectionMatrix:D,viewMatrix:E}=bt(),z=new Zt(E,D,w()),$=z.getRayForPixel(x*T,P*T),B=-z.eye.y/$.y,I=z.eye.add($.multiply(B));Math.abs(I.x)<1&&Math.abs(I.z)<1&&k.addDrop(I.x,I.z,.03,.01)}e=x,c=P}function r(){h=Ft.None}function o(){const x=Array.from(p.values());if(x.length<2)return 0;const P=x[0].x-x[1].x,D=x[0].y-x[1].y;return Math.sqrt(P*P+D*D)}S.addEventListener("pointerdown",x=>{if(x.button!==1){if(x.preventDefault(),S.setPointerCapture(x.pointerId),p.set(x.pointerId,{x:x.offsetX,y:x.offsetY}),p.size===2){h=Ft.None,m=o();return}p.size===1&&t(x.offsetX,x.offsetY,x.button)}}),S.addEventListener("contextmenu",x=>x.preventDefault()),S.addEventListener("pointermove",x=>{if(p.has(x.pointerId)&&p.set(x.pointerId,{x:x.offsetX,y:x.offsetY}),p.size===2){const P=o();if(m>0){const D=m-P;rt+=D*.01,rt=Math.max(1.5,Math.min(10,rt))}m=P;return}h!==Ft.None&&p.size===1&&l(x.offsetX,x.offsetY)}),S.addEventListener("pointerup",x=>{S.releasePointerCapture(x.pointerId),p.delete(x.pointerId),p.size<2&&(m=0),p.size===0&&r()}),S.addEventListener("pointercancel",x=>{S.releasePointerCapture(x.pointerId),p.delete(x.pointerId),p.size<2&&(m=0),p.size===0&&r()}),S.addEventListener("wheel",x=>{x.preventDefault(),rt+=x.deltaY*.005,rt=Math.max(1.5,Math.min(10,rt))},{passive:!1});let n;function a(){const P=window.matchMedia("(max-width: 600px)").matches?window.innerWidth:window.innerWidth-L.clientWidth-20,D=window.innerHeight;S.width=Math.floor(P*T),S.height=Math.floor(D*T),S.style.width=`${P}px`,S.style.height=`${D}px`,n&&n.destroy(),n=y.createTexture({size:[S.width,S.height],format:"depth24plus",usage:GPUTextureUsage.RENDER_ATTACHMENT}),M()}window.addEventListener("resize",a);const g=document.getElementById("help-toggle");g.addEventListener("click",()=>{L.classList.toggle("collapsed"),g.textContent=L.classList.contains("collapsed")?"menu":"chevron_right",a()}),window.addEventListener("pointerdown",x=>{if(window.matchMedia("(max-width: 600px)").matches&&!L.classList.contains("collapsed")){const D=x.target;!L.contains(D)&&!g.contains(D)&&(L.classList.add("collapsed"),g.textContent="menu",a())}}),document.getElementById("loading").innerHTML="",a();function d(){const{projectionMatrix:x,viewMatrix:P}=bt(),D=Vt.multiply(x,P),E=Vt.invert(P),z=Jt.transformMat4([0,0,0],E),$=new Float32Array(20);$.set(D,0),$.set(z,16),y.queue.writeBuffer(ht,0,$)}function M(){const x=performance.now();let P=(x-q)/1e3;if(q=x,P>1&&(P=1),V+=(it-V)*.15,O+=(ft-O)*.15,X+=(rt-X)*.15,(A.L||J.followCamera)&&(pt=nt.fromAngles((90-O)*Math.PI/180,-V*Math.PI/180),Tt()),!vt){if(h===Ft.MoveSphere)H=new nt;else if(wt){const z=Math.max(0,Math.min(1,(et-C.y)/(2*et))),$=J.useDensity?1/J.density:1.1,B=-15;H.y+=(B-$*B*z)*P,H.length()>0&&(H=H.subtract(H.unit().multiply(z*P*H.dot(H)*2)));const I=.1,Z=1-z;H=H.multiply(1-I*P*Z);const W=J.useDensity?J.density:1,ot=Math.abs(C.y),at=Math.max(0,1-ot/et),ct=.5,ut=.5*W,yt=1-at*(ct+ut)*P;H=H.multiply(Math.max(0,yt)),C=C.add(H.multiply(P)),C.y<et-1&&(C.y=et-1,H.y=Math.abs(H.y)*.7),Y.update(C.toArray(),et)}J.showSphere&&k.moveSphere(mt.toArray(),C.toArray(),et),mt=C.clone(),k.stepSimulation(),k.stepSimulation(),k.updateNormals(),k.updateCaustics()}k.updateDensity(J.useDensity?J.density:0),d();const D=y.createCommandEncoder(),E=D.beginRenderPass({colorAttachments:[{view:U.getCurrentTexture().createView(),clearValue:{r:0,g:0,b:0,a:1},loadOp:"clear",storeOp:"store"}],depthStencilAttachment:{view:n.createView(),depthClearValue:1,depthLoadOp:"clear",depthStoreOp:"store"}});gt.render(E,k.textureA,k.sampler,k.causticsTexture),J.showSphere&&Y.render(E,k.textureA,k.sampler,k.causticsTexture),k.renderSurface(E),E.end(),y.queue.submit([D.finish()])}function _(){requestAnimationFrame(_),M()}requestAnimationFrame(_)}rn();
