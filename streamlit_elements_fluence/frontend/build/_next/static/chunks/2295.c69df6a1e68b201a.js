"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2295],{682295:function(e,t,n){n.r(t),n.d(t,{default:function(){return Z},getMasonryUtilityClass:function(){return b},masonryClasses:function(){return N}});var r=n(263366),o=n(487462),i=n(794780),a=n(973935),s=n(690948),l=n(128628),u=n(495408),c=n(998700),d=n(604953),m=n(573546),f=n(33703),h=n(490512),p=n(667294),g=n(34867);function b(e){return(0,g.ZP)("MuiMasonry",e)}var N=(0,n(1588).Z)("MuiMasonry",["root"]),y=n(785893);const x=["children","className","component","columns","spacing","sequential","defaultColumns","defaultHeight","defaultSpacing"],w=e=>Number(e.replace("px","")),C={flexBasis:"100%",width:0,margin:0,padding:0},S=(0,s.ZP)("div",{name:"MuiMasonry",slot:"Root",overridesResolver:(e,t)=>[t.root]})((({ownerState:e,theme:t})=>{let n={width:"100%",display:"flex",flexFlow:"column wrap",alignContent:"flex-start",boxSizing:"border-box","& > *":{boxSizing:"border-box"}};const r={};if(e.isSSR){const i={},a=w(t.spacing(e.defaultSpacing));for(let t=1;t<=e.defaultColumns;t+=1)i[`&:nth-of-type(${e.defaultColumns}n+${t%e.defaultColumns})`]={order:t};return r.height=e.defaultHeight,r.margin=-a/2,r["& > *"]=(0,o.Z)({},n["& > *"],i,{margin:a/2,width:`calc(${(100/e.defaultColumns).toFixed(2)}% - ${a}px)`}),(0,o.Z)({},n,r)}const i=(0,u.P$)({values:e.spacing,breakpoints:t.breakpoints.values}),a=(0,c.hB)(t);n=(0,d.Z)(n,(0,u.k9)({theme:t},i,(t=>{let n;if("string"===typeof t&&!Number.isNaN(Number(t))||"number"===typeof t){const e=Number(t);n=(0,c.NA)(a,e)}else n=t;return(0,o.Z)({margin:`calc(0px - (${n} / 2))`,"& > *":{margin:`calc(${n} / 2)`}},e.maxColumnHeight&&{height:"number"===typeof n?Math.ceil(e.maxColumnHeight+w(n)):`calc(${e.maxColumnHeight}px + ${n})`})})));const s=(0,u.P$)({values:e.columns,breakpoints:t.breakpoints.values});return n=(0,d.Z)(n,(0,u.k9)({theme:t},s,(e=>({"& > *":{width:`calc(${`${(100/Number(e)).toFixed(2)}%`} - ${"string"===typeof i&&!Number.isNaN(Number(i))||"number"===typeof i?(0,c.NA)(a,Number(i)):"0px"})`}})))),"object"===typeof i&&(n=(0,d.Z)(n,(0,u.k9)({theme:t},i,((e,t)=>{if(t){const n=Number(e),r=Object.keys(s).pop(),o=(0,c.NA)(a,n);return{"& > *":{width:`calc(${`${(100/("object"===typeof s?s[t]||s[r]:s)).toFixed(2)}%`} - ${o})`}}}return null})))),n}));var Z=p.forwardRef((function(e,t){const n=(0,l.i)({props:e,name:"MuiMasonry"}),{children:s,className:u,component:c="div",columns:d=4,spacing:g=1,sequential:N=!1,defaultColumns:Z,defaultHeight:k,defaultSpacing:v}=n,M=(0,r.Z)(n,x),$=p.useRef(),[H,R]=p.useState(),E=!H&&k&&void 0!==Z&&void 0!==v,[A,F]=p.useState(E?Z-1:0),j=(0,o.Z)({},n,{spacing:g,columns:d,maxColumnHeight:H,defaultColumns:Z,defaultHeight:k,defaultSpacing:v,isSSR:E}),O=(e=>{const{classes:t}=e;return(0,i.Z)({root:["root"]},b,t)})(j),_=p.useCallback((e=>{if(!$.current||!e||0===e.length)return;const t=$.current,n=$.current.firstChild,r=t.clientWidth,o=n.clientWidth;if(0===r||0===o)return;const i=window.getComputedStyle(n),s=w(i.marginLeft),l=w(i.marginRight),u=Math.round(r/(o+s+l)),c=new Array(u).fill(0);let d=!1,m=1;t.childNodes.forEach((e=>{if(e.nodeType!==Node.ELEMENT_NODE||"line-break"===e.dataset.class||d)return;const t=window.getComputedStyle(e),n=w(t.marginTop),r=w(t.marginBottom),o=w(t.height)?Math.ceil(w(t.height))+n+r:0;if(0!==o){for(let t=0;t<e.childNodes.length;t+=1){const n=e.childNodes[t];if("IMG"===n.tagName&&0===n.clientHeight){d=!0;break}}if(!d)if(N)c[m-1]+=o,e.style.order=m,m+=1,m>u&&(m=1);else{const t=c.indexOf(Math.min(...c));c[t]+=o;const n=t+1;e.style.order=n}}else d=!0})),d||a.flushSync((()=>{R(Math.max(...c)),F(u>0?u-1:0)}))}),[N]);(0,m.Z)((()=>{if("undefined"===typeof ResizeObserver)return;let e;const t=new ResizeObserver((()=>{e=requestAnimationFrame(_)}));return $.current&&$.current.childNodes.forEach((e=>{t.observe(e)})),()=>{e&&window.cancelAnimationFrame(e),t&&t.disconnect()}}),[d,g,s,_]);const z=(0,f.Z)(t,$),P=new Array(A).fill("").map(((e,t)=>(0,y.jsx)("span",{"data-class":"line-break",style:(0,o.Z)({},C,{order:t+1})},t)));return(0,y.jsxs)(S,(0,o.Z)({as:c,className:(0,h.Z)(O.root,u),ref:z,ownerState:j},M,{children:[s,P]}))}))}}]);