(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4583],{834583:(r,e,n)=>{"use strict";n.r(e),n.d(e,{ResponsiveSunburst:()=>j,Sunburst:()=>L,defaultProps:()=>x,useSunburst:()=>m,useSunburstLayerContext:()=>g});var t=n(296540),o=n(754522),i=n(465472),a=n(760956),u=n(474848),l=n(887438),c=n(830086),d=n(934227),s=n(688055),f=n.n(s),v=n(333031),h=n.n(v),p=n(969616);function b(){return(b=Object.assign?Object.assign.bind():function(r){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(r[t]=n[t])}return r}).apply(this,arguments)}var x={id:"id",value:"value",cornerRadius:0,layers:["arcs","arcLabels"],colors:{scheme:"nivo"},colorBy:"id",inheritColorFromParent:!0,childColor:{from:"color"},borderWidth:1,borderColor:"white",enableArcLabels:!1,arcLabel:"formattedValue",arcLabelsRadiusOffset:.5,arcLabelsSkipAngle:0,arcLabelsTextColor:{theme:"labels.text.fill"},animate:!0,motionConfig:"gentle",transitionMode:"innerRadius",isInteractive:!0,defs:[],fill:[],tooltip:function(r){var e=r.id,n=r.formattedValue,t=r.color;return(0,u.jsx)(a.GK,{id:e,value:n,enableChip:!0,color:t})},role:"img"},m=function(r){var e=r.data,n=r.id,a=void 0===n?x.id:n,u=r.value,s=void 0===u?x.value:u,v=r.valueFormat,b=r.radius,m=r.cornerRadius,g=void 0===m?x.cornerRadius:m,M=r.colors,y=void 0===M?x.colors:M,C=r.colorBy,L=void 0===C?x.colorBy:C,j=r.inheritColorFromParent,A=void 0===j?x.inheritColorFromParent:j,O=r.childColor,k=void 0===O?x.childColor:O,R=(0,o.DP)(),F=(0,p.m1)(y,L),I=(0,p.nz)(k,R),W=(0,o.Ob)(a),w=(0,o.Ob)(s),E=(0,o.d_)(v),G=(0,t.useMemo)(function(){var r,n=f()(e),t=(0,l.Ay)(n).sum(w),o=(function(){var r=1,e=1,n=0,t=!1;function o(o){var i,a=o.height+1;return o.x0=o.y0=n,o.x1=r,o.y1=e/a,o.eachBefore((i=e,function(r){r.children&&(0,d.A)(r,r.x0,i*(r.depth+1)/a,r.x1,i*(r.depth+2)/a);var e=r.x0,t=r.y0,o=r.x1-n,u=r.y1-n;o<e&&(e=o=(e+o)/2),u<t&&(t=u=(t+u)/2),r.x0=e,r.y0=t,r.x1=o,r.y1=u})),t&&o.eachBefore(c.A),o}return o.round=function(r){return arguments.length?(t=!!r,o):t},o.size=function(n){return arguments.length?(r=+n[0],e=+n[1],o):[r,e]},o.padding=function(r){return arguments.length?(n=+r,o):n},o})().size([2*Math.PI,b*b])(t).descendants().slice(1),i=null!=(r=t.value)?r:0;return h()(o,"depth").reduce(function(r,e){var n,t=W(e.data),o=e.value,a=100*o/i,u=e.ancestors().map(function(r){return W(r.data)}),l={startAngle:e.x0,endAngle:e.x1,innerRadius:Math.sqrt(e.y0),outerRadius:Math.sqrt(e.y1)};e.parent&&(n=r.find(function(r){return r.id===W(e.parent.data)}));var c={id:t,path:u,value:o,percentage:a,formattedValue:v?E(o):a.toFixed(2)+"%",color:"",arc:l,data:e.data,depth:e.depth,height:e.height};return A&&n&&c.depth>1?c.color=I(n,c):c.color=F(c),[].concat(r,[c])},[])},[e,b,w,W,v,E,F,A,I]);return{arcGenerator:(0,i.dq)({cornerRadius:g}),nodes:G}},g=function(r){var e=r.nodes,n=r.arcGenerator,o=r.centerX,i=r.centerY,a=r.radius;return(0,t.useMemo)(function(){return{nodes:e,arcGenerator:n,centerX:o,centerY:i,radius:a}},[e,n,o,i,a])},M=function(r){var e=r.center,n=r.data,o=r.arcGenerator,l=r.borderWidth,c=r.borderColor,d=r.isInteractive,s=r.onClick,f=r.onMouseEnter,v=r.onMouseMove,h=r.onMouseLeave,p=r.tooltip,b=r.transitionMode,x=(0,a.fS)(),m=x.showTooltipFromEvent,g=x.hideTooltip,M=(0,t.useMemo)(function(){if(d)return function(r,e){null==s||s(r,e)}},[d,s]),y=(0,t.useMemo)(function(){if(d)return function(r,e){m((0,t.createElement)(p,r),e),null==f||f(r,e)}},[d,m,p,f]),C=(0,t.useMemo)(function(){if(d)return function(r,e){m((0,t.createElement)(p,r),e),null==v||v(r,e)}},[d,m,p,v]),L=(0,t.useMemo)(function(){if(d)return function(r,e){g(),null==h||h(r,e)}},[d,g,h]);return(0,u.jsx)(i.fJ,{center:e,data:n,arcGenerator:o,borderWidth:l,borderColor:c,transitionMode:b,onClick:M,onMouseEnter:y,onMouseMove:C,onMouseLeave:L})},y=["isInteractive","animate","motionConfig","theme","renderWrapper"],C=function(r){var e=r.data,n=r.id,a=void 0===n?x.id:n,l=r.value,c=void 0===l?x.value:l,d=r.valueFormat,s=r.cornerRadius,f=void 0===s?x.cornerRadius:s,v=r.layers,h=void 0===v?x.layers:v,p=r.colors,b=void 0===p?x.colors:p,y=r.colorBy,C=void 0===y?x.colorBy:y,L=r.inheritColorFromParent,j=void 0===L?x.inheritColorFromParent:L,A=r.childColor,O=void 0===A?x.childColor:A,k=r.borderWidth,R=void 0===k?x.borderWidth:k,F=r.borderColor,I=void 0===F?x.borderColor:F,W=r.margin,w=r.width,E=r.height,G=r.enableArcLabels,P=void 0===G?x.enableArcLabels:G,B=r.arcLabel,S=void 0===B?x.arcLabel:B,X=r.arcLabelsRadiusOffset,K=void 0===X?x.arcLabelsRadiusOffset:X,T=r.arcLabelsSkipAngle,Y=void 0===T?x.arcLabelsSkipAngle:T,_=r.arcLabelsTextColor,q=void 0===_?x.arcLabelsTextColor:_,z=r.arcLabelsComponent,V=r.defs,H=void 0===V?x.defs:V,J=r.fill,N=void 0===J?x.fill:J,D=r.transitionMode,Q=void 0===D?x.transitionMode:D,U=r.isInteractive,Z=void 0===U?x.isInteractive:U,$=r.onClick,rr=r.onMouseEnter,re=r.onMouseLeave,rn=r.onMouseMove,rt=r.tooltip,ro=void 0===rt?x.tooltip:rt,ri=r.role,ra=void 0===ri?x.role:ri,ru=(0,o.Xl)(w,E,W),rl=ru.innerHeight,rc=ru.innerWidth,rd=ru.margin,rs=ru.outerHeight,rf=ru.outerWidth,rv=(0,t.useMemo)(function(){return{radius:Math.min(rc,rl)/2,centerX:rc/2,centerY:rl/2}},[rl,rc]),rh=rv.centerX,rp=rv.centerY,rb=rv.radius,rx=m({data:e,id:a,value:c,valueFormat:d,radius:rb,cornerRadius:f,colors:b,colorBy:C,inheritColorFromParent:j,childColor:O}),rm=rx.arcGenerator,rg=rx.nodes,rM=(0,o.kc)(H,rg,N,{dataKey:".",colorKey:"color",targetKey:"fill"}),ry={arcs:null,arcLabels:null};h.includes("arcs")&&(ry.arcs=(0,u.jsx)(M,{center:[rh,rp],data:rg,arcGenerator:rm,borderWidth:R,borderColor:I,transitionMode:Q,isInteractive:Z,tooltip:ro,onClick:$,onMouseEnter:rr,onMouseLeave:re,onMouseMove:rn},"arcs")),P&&h.includes("arcLabels")&&(ry.arcLabels=(0,u.jsx)(i.Js,{center:[rh,rp],data:rg,label:S,radiusOffset:K,skipAngle:Y,textColor:q,transitionMode:Q,component:z},"arcLabels"));var rC=g({nodes:rg,arcGenerator:rm,centerX:rh,centerY:rp,radius:rb});return(0,u.jsx)(o.Ge,{width:rf,height:rs,defs:rM,margin:rd,role:ra,children:h.map(function(r,e){return void 0!==ry[r]?ry[r]:"function"==typeof r?(0,u.jsx)(t.Fragment,{children:(0,t.createElement)(r,rC)},e):null})})},L=function(r){var e=r.isInteractive,n=void 0===e?x.isInteractive:e,t=r.animate,i=void 0===t?x.animate:t,a=r.motionConfig,l=void 0===a?x.motionConfig:a,c=r.theme,d=r.renderWrapper,s=function(r,e){if(null==r)return{};var n,t,o={},i=Object.keys(r);for(t=0;t<i.length;t++)n=i[t],e.indexOf(n)>=0||(o[n]=r[n]);return o}(r,y);return(0,u.jsx)(o.mc,{isInteractive:n,animate:i,motionConfig:l,theme:c,renderWrapper:d,children:(0,u.jsx)(C,b({isInteractive:n},s))})},j=function(r){return(0,u.jsx)(o.KF,{children:function(e){var n=e.width,t=e.height;return(0,u.jsx)(L,b({width:n,height:t},r))}})}},934227:(r,e,n)=>{"use strict";function t(r,e,n,t,o){for(var i,a=r.children,u=-1,l=a.length,c=r.value&&(t-e)/r.value;++u<l;)(i=a[u]).y0=n,i.y1=o,i.x0=e,i.x1=e+=i.value*c}n.d(e,{A:()=>t})},830086:(r,e,n)=>{"use strict";function t(r){r.x0=Math.round(r.x0),r.y0=Math.round(r.y0),r.x1=Math.round(r.x1),r.y1=Math.round(r.y1)}n.d(e,{A:()=>t})},480909:(r,e,n)=>{var t=n(230641),o=n(938329)(t);r.exports=o},230641:(r,e,n)=>{var t=n(886649),o=n(395950);r.exports=function(r,e){return r&&t(r,e,o)}},41799:(r,e,n)=>{var t=n(37217),o=n(860270);r.exports=function(r,e,n,i){var a=n.length,u=a,l=!i;if(null==r)return!u;for(r=Object(r);a--;){var c=n[a];if(l&&c[2]?c[1]!==r[c[0]]:!(c[0]in r))return!1}for(;++a<u;){var d=(c=n[a])[0],s=r[d],f=c[1];if(l&&c[2]){if(void 0===s&&!(d in r))return!1}else{var v=new t;if(i)var h=i(s,f,d,r,e,v);if(!(void 0===h?o(f,s,3,i,v):h))return!1}}return!0}},315389:(r,e,n)=>{var t=n(293663),o=n(587978),i=n(383488),a=n(956449),u=n(550583);r.exports=function(r){return"function"==typeof r?r:null==r?i:"object"==typeof r?a(r)?o(r[0],r[1]):t(r):u(r)}},205128:(r,e,n)=>{var t=n(480909),o=n(864894);r.exports=function(r,e){var n=-1,i=o(r)?Array(r.length):[];return t(r,function(r,t,o){i[++n]=e(r,t,o)}),i}},293663:(r,e,n)=>{var t=n(41799),o=n(10776),i=n(567197);r.exports=function(r){var e=o(r);return 1==e.length&&e[0][2]?i(e[0][0],e[0][1]):function(n){return n===r||t(n,r,e)}}},587978:(r,e,n)=>{var t=n(860270),o=n(858156),i=n(380631),a=n(628586),u=n(430756),l=n(567197),c=n(877797);r.exports=function(r,e){return a(r)&&u(e)?l(c(r),e):function(n){var a=o(n,r);return void 0===a&&a===e?i(n,r):t(e,a,3)}}},146155:(r,e,n)=>{var t=n(634932),o=n(47422),i=n(315389),a=n(205128),u=n(973937),l=n(827301),c=n(43714),d=n(383488),s=n(956449);r.exports=function(r,e,n){e=e.length?t(e,function(r){return s(r)?function(e){return o(e,1===r.length?r[0]:r)}:r}):[d];var f=-1;return e=t(e,l(i)),u(a(r,function(r,n,o){return{criteria:t(e,function(e){return e(r)}),index:++f,value:r}}),function(r,e){return c(r,e,n)})}},247237:r=>{r.exports=function(r){return function(e){return null==e?void 0:e[r]}}},117255:(r,e,n)=>{var t=n(47422);r.exports=function(r){return function(e){return t(e,r)}}},973937:r=>{r.exports=function(r,e){var n=r.length;for(r.sort(e);n--;)r[n]=r[n].value;return r}},153730:(r,e,n)=>{var t=n(244394);r.exports=function(r,e){if(r!==e){var n=void 0!==r,o=null===r,i=r==r,a=t(r),u=void 0!==e,l=null===e,c=e==e,d=t(e);if(!l&&!d&&!a&&r>e||a&&u&&c&&!l&&!d||o&&u&&c||!n&&c||!i)return 1;if(!o&&!a&&!d&&r<e||d&&n&&i&&!o&&!a||l&&n&&i||!u&&i||!c)return -1}return 0}},43714:(r,e,n)=>{var t=n(153730);r.exports=function(r,e,n){for(var o=-1,i=r.criteria,a=e.criteria,u=i.length,l=n.length;++o<u;){var c=t(i[o],a[o]);if(c){if(o>=l)return c;return c*("desc"==n[o]?-1:1)}}return r.index-e.index}},938329:(r,e,n)=>{var t=n(864894);r.exports=function(r,e){return function(n,o){if(null==n)return n;if(!t(n))return r(n,o);for(var i=n.length,a=e?i:-1,u=Object(n);(e?a--:++a<i)&&!1!==o(u[a],a,u););return n}}},10776:(r,e,n)=>{var t=n(430756),o=n(395950);r.exports=function(r){for(var e=o(r),n=e.length;n--;){var i=e[n],a=r[i];e[n]=[i,a,t(a)]}return e}},430756:(r,e,n)=>{var t=n(223805);r.exports=function(r){return r==r&&!t(r)}},567197:r=>{r.exports=function(r,e){return function(n){return null!=n&&n[r]===e&&(void 0!==e||r in Object(n))}}},550583:(r,e,n)=>{var t=n(247237),o=n(117255),i=n(628586),a=n(877797);r.exports=function(r){return i(r)?t(a(r)):o(r)}},333031:(r,e,n)=>{var t=n(983120),o=n(146155),i=n(269302),a=n(936800),u=i(function(r,e){if(null==r)return[];var n=e.length;return n>1&&a(r,e[0],e[1])?e=[]:n>2&&a(e[0],e[1],e[2])&&(e=[e[0]]),o(r,t(e,1),[])});r.exports=u}}]);