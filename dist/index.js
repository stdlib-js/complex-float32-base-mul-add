"use strict";var p=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(i){throw (r=0, i)}};};var B=p(function(T,z){
var K=require('@stdlib/complex-float32-ctor/dist'),l=require('@stdlib/complex-float32-real/dist'),w=require('@stdlib/complex-float32-imag/dist'),s=require('@stdlib/number-float64-base-to-float32/dist');function L(e,r,i){var v=l(e),q=w(e),m=l(r),a=w(r),d=l(i),t=w(i),c=s(s(s(v*m)-s(q*a))+d),g=s(s(s(v*a)+s(q*m))+t);return new K(c,g)}z.exports=L
});var E=p(function(U,D){
var n=require('@stdlib/number-float64-base-to-float32/dist');function M(e,r,i,v,q,m,a,d,t){return a[t]=n(n(n(e*i)-n(r*v))+q),a[t+d]=n(n(n(e*v)+n(r*i))+m),a}D.exports=M
});var G=p(function(V,F){
var u=require('@stdlib/number-float64-base-to-float32/dist');function N(e,r,i,v,q,m,a,d,t,c,g,C){var R=e[i],b=e[i+r],j=v[m],k=v[m+q],I=a[t],J=a[t+d];return c[C]=u(u(u(R*j)-u(b*k))+I),c[C+g]=u(u(u(R*k)+u(b*j))+J),c}F.exports=N
});var H=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),x=B(),P=E(),Q=G();H(x,"assign",P);H(x,"strided",Q);module.exports=x;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
