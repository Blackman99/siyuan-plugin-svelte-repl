function b(){}const ft=t=>t;function dt(t,e){for(const n in e)t[n]=e[n];return t}function _t(t){return!!t&&(typeof t=="object"||typeof t=="function")&&typeof t.then=="function"}function Y(t){return t()}function Q(){return Object.create(null)}function E(t){t.forEach(Y)}function D(t){return typeof t=="function"}function Gt(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function ht(t){return Object.keys(t).length===0}function mt(t,...e){if(t==null)return b;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function Jt(t,e,n){t.$$.on_destroy.push(mt(e,n))}function Kt(t,e,n,i){if(t){const r=Z(t,e,n,i);return t[0](r)}}function Z(t,e,n,i){return t[1]&&i?dt(n.ctx.slice(),t[1](i(e))):n.ctx}function Qt(t,e,n,i){if(t[2]&&i){const r=t[2](i(n));if(e.dirty===void 0)return r;if(typeof r=="object"){const l=[],s=Math.max(e.dirty.length,r.length);for(let o=0;o<s;o+=1)l[o]=e.dirty[o]|r[o];return l}return e.dirty|r}return e.dirty}function Ut(t,e,n,i,r,l){if(r){const s=Z(e,n,i,l);t.p(s,r)}}function Vt(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}function Xt(t){return t??""}function Yt(t,e,n){return t.set(n),e}function Zt(t){return t&&D(t.destroy)?t.destroy:b}const tt=typeof window<"u";let pt=tt?()=>window.performance.now():()=>Date.now(),I=tt?t=>requestAnimationFrame(t):b;const v=new Set;function et(t){v.forEach(e=>{e.c(t)||(v.delete(e),e.f())}),v.size!==0&&I(et)}function yt(t){let e;return v.size===0&&I(et),{promise:new Promise(n=>{v.add(e={c:t,f:n})}),abort(){v.delete(e)}}}let q=!1;function gt(){q=!0}function bt(){q=!1}function $t(t,e,n,i){for(;t<e;){const r=t+(e-t>>1);n(r)<=i?t=r+1:e=r}return t}function xt(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const c=[];for(let u=0;u<e.length;u++){const f=e[u];f.claim_order!==void 0&&c.push(f)}e=c}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let r=0;for(let c=0;c<e.length;c++){const u=e[c].claim_order,f=(r>0&&e[n[r]].claim_order<=u?r+1:$t(1,r,_=>e[n[_]].claim_order,u))-1;i[c]=n[f]+1;const a=f+1;n[a]=c,r=Math.max(a,r)}const l=[],s=[];let o=e.length-1;for(let c=n[r]+1;c!=0;c=i[c-1]){for(l.push(e[c-1]);o>=c;o--)s.push(e[o]);o--}for(;o>=0;o--)s.push(e[o]);l.reverse(),s.sort((c,u)=>c.claim_order-u.claim_order);for(let c=0,u=0;c<s.length;c++){for(;u<l.length&&s[c].claim_order>=l[u].claim_order;)u++;const f=u<l.length?l[u]:null;t.insertBefore(s[c],f)}}function nt(t,e){t.appendChild(e)}function it(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function wt(t){const e=G("style");return vt(it(t),e),e.sheet}function vt(t,e){return nt(t.head||t,e),e.sheet}function kt(t,e){if(q){for(xt(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function te(t,e,n){q&&!n?kt(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function H(t){t.parentNode&&t.parentNode.removeChild(t)}function ee(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function G(t){return document.createElement(t)}function Et(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function J(t){return document.createTextNode(t)}function ne(){return J(" ")}function ie(){return J("")}function U(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function re(t){return function(e){return e.stopPropagation(),t.call(this,e)}}function se(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function ce(t){let e;return{p(...n){e=n,e.forEach(i=>t.push(i))},r(){e.forEach(n=>t.splice(t.indexOf(n),1))}}}function Nt(t){return Array.from(t.childNodes)}function Ct(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function rt(t,e,n,i,r=!1){Ct(t);const l=(()=>{for(let s=t.claim_info.last_index;s<t.length;s++){const o=t[s];if(e(o)){const c=n(o);return c===void 0?t.splice(s,1):t[s]=c,r||(t.claim_info.last_index=s),o}}for(let s=t.claim_info.last_index-1;s>=0;s--){const o=t[s];if(e(o)){const c=n(o);return c===void 0?t.splice(s,1):t[s]=c,r?c===void 0&&t.claim_info.last_index--:t.claim_info.last_index=s,o}}return i()})();return l.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,l}function st(t,e,n,i){return rt(t,r=>r.nodeName===e,r=>{const l=[];for(let s=0;s<r.attributes.length;s++){const o=r.attributes[s];n[o.name]||l.push(o.name)}l.forEach(s=>r.removeAttribute(s))},()=>i(e))}function oe(t,e,n){return st(t,e,n,G)}function le(t,e,n){return st(t,e,n,Et)}function At(t,e){return rt(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>J(e),!0)}function ue(t){return At(t," ")}function ae(t,e){e=""+e,t.data!==e&&(t.data=e)}function fe(t,e){t.value=e??""}function de(t,e,n,i){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}let j;function St(){if(j===void 0){j=!1;try{typeof window<"u"&&window.parent&&window.parent.document}catch{j=!0}}return j}function _e(t,e){getComputedStyle(t).position==="static"&&(t.style.position="relative");const i=G("iframe");i.setAttribute("style","display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden; border: 0; opacity: 0; pointer-events: none; z-index: -1;"),i.setAttribute("aria-hidden","true"),i.tabIndex=-1;const r=St();let l;return r?(i.src="data:text/html,<script>onresize=function(){parent.postMessage(0,'*')}<\/script>",l=U(window,"message",s=>{s.source===i.contentWindow&&e()})):(i.src="about:blank",i.onload=()=>{l=U(i.contentWindow,"resize",e),e()}),nt(t,i),()=>{(r||l&&i.contentWindow)&&l(),H(i)}}function he(t,e,n){t.classList[n?"add":"remove"](e)}function ct(t,e,{bubbles:n=!1,cancelable:i=!1}={}){const r=document.createEvent("CustomEvent");return r.initCustomEvent(t,n,i,e),r}function me(t,e){return new t(e)}const z=new Map;let O=0;function jt(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function Mt(t,e){const n={stylesheet:wt(e),rules:{}};return z.set(t,n),n}function V(t,e,n,i,r,l,s,o=0){const c=16.666/i;let u=`{
`;for(let g=0;g<=1;g+=c){const $=e+(n-e)*l(g);u+=g*100+`%{${s($,1-$)}}
`}const f=u+`100% {${s(n,1-n)}}
}`,a=`__svelte_${jt(f)}_${o}`,_=it(t),{stylesheet:d,rules:h}=z.get(_)||Mt(_,t);h[a]||(h[a]=!0,d.insertRule(`@keyframes ${a} ${f}`,d.cssRules.length));const m=t.style.animation||"";return t.style.animation=`${m?`${m}, `:""}${a} ${i}ms linear ${r}ms 1 both`,O+=1,a}function zt(t,e){const n=(t.style.animation||"").split(", "),i=n.filter(e?l=>l.indexOf(e)<0:l=>l.indexOf("__svelte")===-1),r=n.length-i.length;r&&(t.style.animation=i.join(", "),O-=r,O||Ot())}function Ot(){I(()=>{O||(z.forEach(t=>{const{ownerNode:e}=t.stylesheet;e&&H(e)}),z.clear())})}let A;function p(t){A=t}function N(){if(!A)throw new Error("Function called outside component initialization");return A}function pe(t){N().$$.on_mount.push(t)}function ye(t){N().$$.after_update.push(t)}function ge(){const t=N();return(e,n,{cancelable:i=!1}={})=>{const r=t.$$.callbacks[e];if(r){const l=ct(e,n,{cancelable:i});return r.slice().forEach(s=>{s.call(t,l)}),!l.defaultPrevented}return!0}}function be(t,e){return N().$$.context.set(t,e),e}function $e(t){return N().$$.context.get(t)}function xe(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach(i=>i.call(this,e))}const w=[],X=[];let k=[];const T=[],ot=Promise.resolve();let F=!1;function lt(){F||(F=!0,ot.then(K))}function we(){return lt(),ot}function P(t){k.push(t)}function ve(t){T.push(t)}const W=new Set;let x=0;function K(){if(x!==0)return;const t=A;do{try{for(;x<w.length;){const e=w[x];x++,p(e),Pt(e.$$)}}catch(e){throw w.length=0,x=0,e}for(p(null),w.length=0,x=0;X.length;)X.pop()();for(let e=0;e<k.length;e+=1){const n=k[e];W.has(n)||(W.add(n),n())}k.length=0}while(w.length);for(;T.length;)T.pop()();F=!1,W.clear(),p(t)}function Pt(t){if(t.fragment!==null){t.update(),E(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(P)}}function Dt(t){const e=[],n=[];k.forEach(i=>t.indexOf(i)===-1?e.push(i):n.push(i)),n.forEach(i=>i()),k=e}let C;function qt(){return C||(C=Promise.resolve(),C.then(()=>{C=null})),C}function B(t,e,n){t.dispatchEvent(ct(`${e?"intro":"outro"}${n}`))}const M=new Set;let y;function Lt(){y={r:0,c:[],p:y}}function Rt(){y.r||E(y.c),y=y.p}function ut(t,e){t&&t.i&&(M.delete(t),t.i(e))}function Wt(t,e,n,i){if(t&&t.o){if(M.has(t))return;M.add(t),y.c.push(()=>{M.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}const Bt={duration:0};function ke(t,e,n,i){const r={direction:"both"};let l=e(t,n,r),s=i?0:1,o=null,c=null,u=null;function f(){u&&zt(t,u)}function a(d,h){const m=d.b-s;return h*=Math.abs(m),{a:s,b:d.b,d:m,duration:h,start:d.start,end:d.start+h,group:d.group}}function _(d){const{delay:h=0,duration:m=300,easing:g=ft,tick:$=b,css:L}=l||Bt,R={start:pt()+h,b:d};d||(R.group=y,y.r+=1),o||c?c=R:(L&&(f(),u=V(t,s,d,m,h,g,L)),d&&$(0,1),o=a(R,m),P(()=>B(t,d,"start")),yt(S=>{if(c&&S>c.start&&(o=a(c,m),c=null,B(t,o.b,"start"),L&&(f(),u=V(t,s,o.b,o.duration,0,g,l.css))),o){if(S>=o.end)$(s=o.b,1-s),B(t,o.b,"end"),c||(o.b?f():--o.group.r||E(o.group.c)),o=null;else if(S>=o.start){const at=S-o.start;s=o.a+o.d*g(at/o.duration),$(s,1-s)}}return!!(o||c)}))}return{run(d){D(l)?qt().then(()=>{l=l(r),_(d)}):_(d)},end(){f(),o=c=null}}}function Ee(t,e){const n=e.token={};function i(r,l,s,o){if(e.token!==n)return;e.resolved=o;let c=e.ctx;s!==void 0&&(c=c.slice(),c[s]=o);const u=r&&(e.current=r)(c);let f=!1;e.block&&(e.blocks?e.blocks.forEach((a,_)=>{_!==l&&a&&(Lt(),Wt(a,1,1,()=>{e.blocks[_]===a&&(e.blocks[_]=null)}),Rt())}):e.block.d(1),u.c(),ut(u,1),u.m(e.mount(),e.anchor),f=!0),e.block=u,e.blocks&&(e.blocks[l]=u),f&&K()}if(_t(t)){const r=N();if(t.then(l=>{p(r),i(e.then,1,e.value,l),p(null)},l=>{if(p(r),i(e.catch,2,e.error,l),p(null),!e.hasCatch)throw l}),e.current!==e.pending)return i(e.pending,0),!0}else{if(e.current!==e.then)return i(e.then,1,e.value,t),!0;e.resolved=t}}function Ne(t,e,n){const i=e.slice(),{resolved:r}=t;t.current===t.then&&(i[t.value]=r),t.current===t.catch&&(i[t.error]=r),t.block.p(i,n)}function Ce(t,e){const n={},i={},r={$$scope:1};let l=t.length;for(;l--;){const s=t[l],o=e[l];if(o){for(const c in s)c in o||(i[c]=1);for(const c in o)r[c]||(n[c]=o[c],r[c]=1);t[l]=o}else for(const c in s)r[c]=1}for(const s in i)s in n||(n[s]=void 0);return n}function Ae(t){return typeof t=="object"&&t!==null?t:{}}const Tt=["allowfullscreen","allowpaymentrequest","async","autofocus","autoplay","checked","controls","default","defer","disabled","formnovalidate","hidden","inert","ismap","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","selected"];[...Tt];function Se(t,e,n){const i=t.$$.props[e];i!==void 0&&(t.$$.bound[i]=n,n(t.$$.ctx[i]))}function je(t){t&&t.c()}function Me(t,e){t&&t.l(e)}function Ft(t,e,n,i){const{fragment:r,after_update:l}=t.$$;r&&r.m(e,n),i||P(()=>{const s=t.$$.on_mount.map(Y).filter(D);t.$$.on_destroy?t.$$.on_destroy.push(...s):E(s),t.$$.on_mount=[]}),l.forEach(P)}function It(t,e){const n=t.$$;n.fragment!==null&&(Dt(n.after_update),E(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Ht(t,e){t.$$.dirty[0]===-1&&(w.push(t),lt(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function ze(t,e,n,i,r,l,s,o=[-1]){const c=A;p(t);const u=t.$$={fragment:null,ctx:[],props:l,update:b,not_equal:r,bound:Q(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(c?c.$$.context:[])),callbacks:Q(),dirty:o,skip_bound:!1,root:e.target||c.$$.root};s&&s(u.root);let f=!1;if(u.ctx=n?n(t,e.props||{},(a,_,...d)=>{const h=d.length?d[0]:_;return u.ctx&&r(u.ctx[a],u.ctx[a]=h)&&(!u.skip_bound&&u.bound[a]&&u.bound[a](h),f&&Ht(t,a)),_}):[],u.update(),f=!0,E(u.before_update),u.fragment=i?i(u.ctx):!1,e.target){if(e.hydrate){gt();const a=Nt(e.target);u.fragment&&u.fragment.l(a),a.forEach(H)}else u.fragment&&u.fragment.c();e.intro&&ut(t.$$.fragment),Ft(t,e.target,e.anchor,e.customElement),bt(),K()}p(c)}class Oe{$destroy(){It(this,1),this.$destroy=b}$on(e,n){if(!D(n))return b;const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const r=i.indexOf(n);r!==-1&&i.splice(r,1)}}$set(e){this.$$set&&!ht(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{be as $,Ft as A,It as B,Kt as C,Ut as D,Vt as E,Qt as F,kt as G,b as H,Jt as I,P as J,_e as K,ge as L,Zt as M,E as N,U as O,Se as P,he as Q,ve as R,Oe as S,$e as T,Et as U,le as V,ee as W,mt as X,Yt as Y,fe as Z,ke as _,ne as a,re as a0,Xt as a1,Ce as a2,Ae as a3,dt as a4,D as a5,pt as a6,yt as a7,ce as a8,Ee as a9,Ne as aa,xe as ab,te as b,ue as c,Wt as d,ie as e,Rt as f,ut as g,H as h,ze as i,ye as j,G as k,oe as l,Nt as m,se as n,pe as o,de as p,J as q,At as r,Gt as s,we as t,ae as u,Lt as v,X as w,me as x,je as y,Me as z};
