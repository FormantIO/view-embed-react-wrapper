let r;const a=new Uint8Array(16);function y(){if(!r&&(r=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!r))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return r(a)}const p=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;function g(n){return typeof n=="string"&&p.test(n)}const i=[];for(let n=0;n<256;++n)i.push((n+256).toString(16).slice(1));function c(n,t=0){return i[n[t+0]]+i[n[t+1]]+i[n[t+2]]+i[n[t+3]]+"-"+i[n[t+4]]+i[n[t+5]]+"-"+i[n[t+6]]+i[n[t+7]]+"-"+i[n[t+8]]+i[n[t+9]]+"-"+i[n[t+10]]+i[n[t+11]]+i[n[t+12]]+i[n[t+13]]+i[n[t+14]]+i[n[t+15]]}function m(n,t=0){const d=c(n,t);if(!g(d))throw TypeError("Stringified UUID is invalid");return d}const U=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),o={randomUUID:U};function l(n,t,d){if(o.randomUUID&&!t&&!n)return o.randomUUID();n=n||{};const e=n.random||(n.rng||y)();if(e[6]=e[6]&15|64,e[8]=e[8]&63|128,t){d=d||0;for(let u=0;u<16;++u)t[d+u]=e[u];return t}return c(e)}export{g as a,y as r,m as s,c as u,l as v};
