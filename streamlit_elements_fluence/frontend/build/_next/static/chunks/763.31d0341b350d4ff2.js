"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[763],{90763:(e,t,n)=>{n.d(t,{A:()=>eM});var o=n(58168),r=n(198587),i=n(776953),a=n(296540),s=n(860718),f=n(831523),p=n(221529),c=n(532325);function l(e){if(null==e)return window;if("[object Window]"!==e.toString()){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function u(e){var t=l(e).Element;return e instanceof t||e instanceof Element}function d(e){var t=l(e).HTMLElement;return e instanceof t||e instanceof HTMLElement}function m(e){if("undefined"==typeof ShadowRoot)return!1;var t=l(e).ShadowRoot;return e instanceof t||e instanceof ShadowRoot}var h=Math.max,v=Math.min,y=Math.round;function b(){var e=navigator.userAgentData;return null!=e&&e.brands&&Array.isArray(e.brands)?e.brands.map(function(e){return e.brand+"/"+e.version}).join(" "):navigator.userAgent}function g(){return!/^((?!chrome|android).)*safari/i.test(b())}function w(e,t,n){void 0===t&&(t=!1),void 0===n&&(n=!1);var o=e.getBoundingClientRect(),r=1,i=1;t&&d(e)&&(r=e.offsetWidth>0&&y(o.width)/e.offsetWidth||1,i=e.offsetHeight>0&&y(o.height)/e.offsetHeight||1);var a=(u(e)?l(e):window).visualViewport,s=!g()&&n,f=(o.left+(s&&a?a.offsetLeft:0))/r,p=(o.top+(s&&a?a.offsetTop:0))/i,c=o.width/r,m=o.height/i;return{width:c,height:m,top:p,right:f+c,bottom:p+m,left:f,x:f,y:p}}function x(e){var t=l(e);return{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function O(e){return e?(e.nodeName||"").toLowerCase():null}function A(e){return((u(e)?e.ownerDocument:e.document)||window.document).documentElement}function P(e){return w(A(e)).left+x(e).scrollLeft}function j(e){return l(e).getComputedStyle(e)}function E(e){var t=j(e),n=t.overflow,o=t.overflowX,r=t.overflowY;return/auto|scroll|overlay|hidden/.test(n+r+o)}function k(e){var t=w(e),n=e.offsetWidth,o=e.offsetHeight;return 1>=Math.abs(t.width-n)&&(n=t.width),1>=Math.abs(t.height-o)&&(o=t.height),{x:e.offsetLeft,y:e.offsetTop,width:n,height:o}}function D(e){return"html"===O(e)?e:e.assignedSlot||e.parentNode||(m(e)?e.host:null)||A(e)}function M(e,t){void 0===t&&(t=[]);var n,o=function e(t){return["html","body","#document"].indexOf(O(t))>=0?t.ownerDocument.body:d(t)&&E(t)?t:e(D(t))}(e),r=o===(null==(n=e.ownerDocument)?void 0:n.body),i=l(o),a=r?[i].concat(i.visualViewport||[],E(o)?o:[]):o,s=t.concat(a);return r?s:s.concat(M(D(a)))}function R(e){return d(e)&&"fixed"!==j(e).position?e.offsetParent:null}function W(e){for(var t=l(e),n=R(e);n&&["table","td","th"].indexOf(O(n))>=0&&"static"===j(n).position;)n=R(n);return n&&("html"===O(n)||"body"===O(n)&&"static"===j(n).position)?t:n||function(e){var t=/firefox/i.test(b());if(/Trident/i.test(b())&&d(e)&&"fixed"===j(e).position)return null;var n=D(e);for(m(n)&&(n=n.host);d(n)&&0>["html","body"].indexOf(O(n));){var o=j(n);if("none"!==o.transform||"none"!==o.perspective||"paint"===o.contain||-1!==["transform","perspective"].indexOf(o.willChange)||t&&"filter"===o.willChange||t&&o.filter&&"none"!==o.filter)return n;n=n.parentNode}return null}(e)||t}var T="bottom",L="right",B="left",H="auto",S=["top",T,L,B],C="start",_="viewport",V="popper",q=S.reduce(function(e,t){return e.concat([t+"-"+C,t+"-end"])},[]),N=[].concat(S,[H]).reduce(function(e,t){return e.concat([t,t+"-"+C,t+"-end"])},[]),I=["beforeRead","read","afterRead","beforeMain","main","afterMain","beforeWrite","write","afterWrite"],U={placement:"bottom",modifiers:[],strategy:"absolute"};function F(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return!t.some(function(e){return!(e&&"function"==typeof e.getBoundingClientRect)})}var z={passive:!0};function X(e){return e.split("-")[0]}function Y(e){return e.split("-")[1]}function G(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function J(e){var t,n=e.reference,o=e.element,r=e.placement,i=r?X(r):null,a=r?Y(r):null,s=n.x+n.width/2-o.width/2,f=n.y+n.height/2-o.height/2;switch(i){case"top":t={x:s,y:n.y-o.height};break;case T:t={x:s,y:n.y+n.height};break;case L:t={x:n.x+n.width,y:f};break;case B:t={x:n.x-o.width,y:f};break;default:t={x:n.x,y:n.y}}var p=i?G(i):null;if(null!=p){var c="y"===p?"height":"width";switch(a){case C:t[p]=t[p]-(n[c]/2-o[c]/2);break;case"end":t[p]=t[p]+(n[c]/2-o[c]/2)}}return t}var K={top:"auto",right:"auto",bottom:"auto",left:"auto"};function Q(e){var t,n,o,r,i,a,s,f=e.popper,p=e.popperRect,c=e.placement,u=e.variation,d=e.offsets,m=e.position,h=e.gpuAcceleration,v=e.adaptive,b=e.roundOffsets,g=e.isFixed,w=d.x,x=void 0===w?0:w,O=d.y,P=void 0===O?0:O,E="function"==typeof b?b({x:x,y:P}):{x:x,y:P};x=E.x,P=E.y;var k=d.hasOwnProperty("x"),D=d.hasOwnProperty("y"),M=B,R="top",H=window;if(v){var S=W(f),C="clientHeight",_="clientWidth";S===l(f)&&"static"!==j(S=A(f)).position&&"absolute"===m&&(C="scrollHeight",_="scrollWidth"),("top"===c||(c===B||c===L)&&"end"===u)&&(R=T,P-=(g&&S===H&&H.visualViewport?H.visualViewport.height:S[C])-p.height,P*=h?1:-1),(c===B||("top"===c||c===T)&&"end"===u)&&(M=L,x-=(g&&S===H&&H.visualViewport?H.visualViewport.width:S[_])-p.width,x*=h?1:-1)}var V=Object.assign({position:m},v&&K),q=!0===b?(t={x:x,y:P},n=l(f),o=t.x,r=t.y,{x:y(o*(i=n.devicePixelRatio||1))/i||0,y:y(r*i)/i||0}):{x:x,y:P};return(x=q.x,P=q.y,h)?Object.assign({},V,((s={})[R]=D?"0":"",s[M]=k?"0":"",s.transform=1>=(H.devicePixelRatio||1)?"translate("+x+"px, "+P+"px)":"translate3d("+x+"px, "+P+"px, 0)",s)):Object.assign({},V,((a={})[R]=D?P+"px":"",a[M]=k?x+"px":"",a.transform="",a))}var Z={left:"right",right:"left",bottom:"top",top:"bottom"};function $(e){return e.replace(/left|right|bottom|top/g,function(e){return Z[e]})}var ee={start:"end",end:"start"};function et(e){return e.replace(/start|end/g,function(e){return ee[e]})}function en(e,t){var n=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(n&&m(n)){var o=t;do{if(o&&e.isSameNode(o))return!0;o=o.parentNode||o.host}while(o)}return!1}function eo(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function er(e,t,n){var o,r,i,a,s,f,p,c,d,m;return t===_?eo(function(e,t){var n=l(e),o=A(e),r=n.visualViewport,i=o.clientWidth,a=o.clientHeight,s=0,f=0;if(r){i=r.width,a=r.height;var p=g();(p||!p&&"fixed"===t)&&(s=r.offsetLeft,f=r.offsetTop)}return{width:i,height:a,x:s+P(e),y:f}}(e,n)):u(t)?((o=w(t,!1,"fixed"===n)).top=o.top+t.clientTop,o.left=o.left+t.clientLeft,o.bottom=o.top+t.clientHeight,o.right=o.left+t.clientWidth,o.width=t.clientWidth,o.height=t.clientHeight,o.x=o.left,o.y=o.top,o):eo((r=A(e),a=A(r),s=x(r),f=null==(i=r.ownerDocument)?void 0:i.body,p=h(a.scrollWidth,a.clientWidth,f?f.scrollWidth:0,f?f.clientWidth:0),c=h(a.scrollHeight,a.clientHeight,f?f.scrollHeight:0,f?f.clientHeight:0),d=-s.scrollLeft+P(r),m=-s.scrollTop,"rtl"===j(f||a).direction&&(d+=h(a.clientWidth,f?f.clientWidth:0)-p),{width:p,height:c,x:d,y:m}))}function ei(){return{top:0,right:0,bottom:0,left:0}}function ea(e){return Object.assign({},ei(),e)}function es(e,t){return t.reduce(function(t,n){return t[n]=e,t},{})}function ef(e,t){void 0===t&&(t={});var n,o,r,i,a,s,f,p,c=t,l=c.placement,m=void 0===l?e.placement:l,y=c.strategy,b=void 0===y?e.strategy:y,g=c.boundary,x=c.rootBoundary,P=c.elementContext,E=void 0===P?V:P,k=c.altBoundary,R=c.padding,B=void 0===R?0:R,H=ea("number"!=typeof B?B:es(B,S)),C=e.rects.popper,q=e.elements[void 0!==k&&k?E===V?"reference":V:E],N=(n=u(q)?q:q.contextElement||A(e.elements.popper),o=void 0===g?"clippingParents":g,r=void 0===x?_:x,f=(s=[].concat("clippingParents"===o?(i=M(D(n)),u(a=["absolute","fixed"].indexOf(j(n).position)>=0&&d(n)?W(n):n)?i.filter(function(e){return u(e)&&en(e,a)&&"body"!==O(e)}):[]):[].concat(o),[r]))[0],(p=s.reduce(function(e,t){var o=er(n,t,b);return e.top=h(o.top,e.top),e.right=v(o.right,e.right),e.bottom=v(o.bottom,e.bottom),e.left=h(o.left,e.left),e},er(n,f,b))).width=p.right-p.left,p.height=p.bottom-p.top,p.x=p.left,p.y=p.top,p),I=w(e.elements.reference),U=J({reference:I,element:C,strategy:"absolute",placement:m}),F=eo(Object.assign({},C,U)),z=E===V?F:I,X={top:N.top-z.top+H.top,bottom:z.bottom-N.bottom+H.bottom,left:N.left-z.left+H.left,right:z.right-N.right+H.right},Y=e.modifiersData.offset;if(E===V&&Y){var G=Y[m];Object.keys(X).forEach(function(e){var t=[L,T].indexOf(e)>=0?1:-1,n=["top",T].indexOf(e)>=0?"y":"x";X[e]+=G[n]*t})}return X}function ep(e,t,n){return h(e,v(t,n))}function ec(e,t,n){return void 0===n&&(n={x:0,y:0}),{top:e.top-t.height-n.y,right:e.right-t.width+n.x,bottom:e.bottom-t.height+n.y,left:e.left-t.width-n.x}}function el(e){return["top",L,T,B].some(function(t){return e[t]>=0})}var eu=function(e){void 0===e&&(e={});var t=e,n=t.defaultModifiers,o=void 0===n?[]:n,r=t.defaultOptions,i=void 0===r?U:r;return function(e,t,n){void 0===n&&(n=i);var r,a,s={placement:"bottom",orderedModifiers:[],options:Object.assign({},U,i),modifiersData:{},elements:{reference:e,popper:t},attributes:{},styles:{}},f=[],p=!1,c={state:s,setOptions:function(n){var r,a,p,l,d,h="function"==typeof n?n(s.options):n;m(),s.options=Object.assign({},i,s.options,h),s.scrollParents={reference:u(e)?M(e):e.contextElement?M(e.contextElement):[],popper:M(t)};var v=(a=Object.keys(r=[].concat(o,s.options.modifiers).reduce(function(e,t){var n=e[t.name];return e[t.name]=n?Object.assign({},n,t,{options:Object.assign({},n.options,t.options),data:Object.assign({},n.data,t.data)}):t,e},{})).map(function(e){return r[e]}),p=new Map,l=new Set,d=[],a.forEach(function(e){p.set(e.name,e)}),a.forEach(function(e){l.has(e.name)||function e(t){l.add(t.name),[].concat(t.requires||[],t.requiresIfExists||[]).forEach(function(t){if(!l.has(t)){var n=p.get(t);n&&e(n)}}),d.push(t)}(e)}),I.reduce(function(e,t){return e.concat(d.filter(function(e){return e.phase===t}))},[]));return s.orderedModifiers=v.filter(function(e){return e.enabled}),s.orderedModifiers.forEach(function(e){var t=e.name,n=e.options,o=e.effect;if("function"==typeof o){var r=o({state:s,name:t,instance:c,options:void 0===n?{}:n});f.push(r||function(){})}}),c.update()},forceUpdate:function(){if(!p){var e,t,n,o,r,i,a,f,u,m,h,v,b=s.elements,g=b.reference,j=b.popper;if(F(g,j)){;s.rects={reference:(t=W(j),n="fixed"===s.options.strategy,o=d(t),f=d(t)&&(i=y((r=t.getBoundingClientRect()).width)/t.offsetWidth||1,a=y(r.height)/t.offsetHeight||1,1!==i||1!==a),u=A(t),m=w(g,f,n),h={scrollLeft:0,scrollTop:0},v={x:0,y:0},(o||!o&&!n)&&(("body"!==O(t)||E(u))&&(h=(e=t)!==l(e)&&d(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:x(e)),d(t)?(v=w(t,!0),v.x+=t.clientLeft,v.y+=t.clientTop):u&&(v.x=P(u))),{x:m.left+h.scrollLeft-v.x,y:m.top+h.scrollTop-v.y,width:m.width,height:m.height}),popper:k(j)},s.reset=!1,s.placement=s.options.placement,s.orderedModifiers.forEach(function(e){return s.modifiersData[e.name]=Object.assign({},e.data)});for(var D=0;D<s.orderedModifiers.length;D++){if(!0===s.reset){s.reset=!1,D=-1;continue}var M=s.orderedModifiers[D],R=M.fn,T=M.options,L=void 0===T?{}:T,B=M.name;"function"==typeof R&&(s=R({state:s,options:L,name:B,instance:c})||s)}}}},update:(r=function(){return new Promise(function(e){c.forceUpdate(),e(s)})},function(){return a||(a=new Promise(function(e){Promise.resolve().then(function(){a=void 0,e(r())})})),a}),destroy:function(){m(),p=!0}};if(!F(e,t))return c;function m(){f.forEach(function(e){return e()}),f=[]}return c.setOptions(n).then(function(e){!p&&n.onFirstUpdate&&n.onFirstUpdate(e)}),c}}({defaultModifiers:[{name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:function(e){var t=e.state,n=e.instance,o=e.options,r=o.scroll,i=void 0===r||r,a=o.resize,s=void 0===a||a,f=l(t.elements.popper),p=[].concat(t.scrollParents.reference,t.scrollParents.popper);return i&&p.forEach(function(e){e.addEventListener("scroll",n.update,z)}),s&&f.addEventListener("resize",n.update,z),function(){i&&p.forEach(function(e){e.removeEventListener("scroll",n.update,z)}),s&&f.removeEventListener("resize",n.update,z)}},data:{}},{name:"popperOffsets",enabled:!0,phase:"read",fn:function(e){var t=e.state,n=e.name;t.modifiersData[n]=J({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})},data:{}},{name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function(e){var t=e.state,n=e.options,o=n.gpuAcceleration,r=n.adaptive,i=n.roundOffsets,a=void 0===i||i,s={placement:X(t.placement),variation:Y(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:void 0===o||o,isFixed:"fixed"===t.options.strategy};null!=t.modifiersData.popperOffsets&&(t.styles.popper=Object.assign({},t.styles.popper,Q(Object.assign({},s,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:void 0===r||r,roundOffsets:a})))),null!=t.modifiersData.arrow&&(t.styles.arrow=Object.assign({},t.styles.arrow,Q(Object.assign({},s,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:a})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})},data:{}},{name:"applyStyles",enabled:!0,phase:"write",fn:function(e){var t=e.state;Object.keys(t.elements).forEach(function(e){var n=t.styles[e]||{},o=t.attributes[e]||{},r=t.elements[e];d(r)&&O(r)&&(Object.assign(r.style,n),Object.keys(o).forEach(function(e){var t=o[e];!1===t?r.removeAttribute(e):r.setAttribute(e,!0===t?"":t)}))})},effect:function(e){var t=e.state,n={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,n.popper),t.styles=n,t.elements.arrow&&Object.assign(t.elements.arrow.style,n.arrow),function(){Object.keys(t.elements).forEach(function(e){var o=t.elements[e],r=t.attributes[e]||{},i=Object.keys(t.styles.hasOwnProperty(e)?t.styles[e]:n[e]).reduce(function(e,t){return e[t]="",e},{});d(o)&&O(o)&&(Object.assign(o.style,i),Object.keys(r).forEach(function(e){o.removeAttribute(e)}))})}},requires:["computeStyles"]},{name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function(e){var t=e.state,n=e.options,o=e.name,r=n.offset,i=void 0===r?[0,0]:r,a=N.reduce(function(e,n){var o,r,a,s,f,p;return e[n]=(o=t.rects,a=[B,"top"].indexOf(r=X(n))>=0?-1:1,f=(s="function"==typeof i?i(Object.assign({},o,{placement:n})):i)[0],p=s[1],f=f||0,p=(p||0)*a,[B,L].indexOf(r)>=0?{x:p,y:f}:{x:f,y:p}),e},{}),s=a[t.placement],f=s.x,p=s.y;null!=t.modifiersData.popperOffsets&&(t.modifiersData.popperOffsets.x+=f,t.modifiersData.popperOffsets.y+=p),t.modifiersData[o]=a}},{name:"flip",enabled:!0,phase:"main",fn:function(e){var t=e.state,n=e.options,o=e.name;if(!t.modifiersData[o]._skip){for(var r=n.mainAxis,i=void 0===r||r,a=n.altAxis,s=void 0===a||a,f=n.fallbackPlacements,p=n.padding,c=n.boundary,l=n.rootBoundary,u=n.altBoundary,d=n.flipVariations,m=void 0===d||d,h=n.allowedAutoPlacements,v=t.options.placement,y=X(v)===v,b=f||(y||!m?[$(v)]:function(e){if(X(e)===H)return[];var t=$(e);return[et(e),t,et(t)]}(v)),g=[v].concat(b).reduce(function(e,n){var o,r,i,a,s,f,u,d,v,y,b,g;return e.concat(X(n)===H?(r=(o={placement:n,boundary:c,rootBoundary:l,padding:p,flipVariations:m,allowedAutoPlacements:h}).placement,i=o.boundary,a=o.rootBoundary,s=o.padding,f=o.flipVariations,d=void 0===(u=o.allowedAutoPlacements)?N:u,0===(b=(y=(v=Y(r))?f?q:q.filter(function(e){return Y(e)===v}):S).filter(function(e){return d.indexOf(e)>=0})).length&&(b=y),Object.keys(g=b.reduce(function(e,n){return e[n]=ef(t,{placement:n,boundary:i,rootBoundary:a,padding:s})[X(n)],e},{})).sort(function(e,t){return g[e]-g[t]})):n)},[]),w=t.rects.reference,x=t.rects.popper,O=new Map,A=!0,P=g[0],j=0;j<g.length;j++){var E=g[j],k=X(E),D=Y(E)===C,M=["top",T].indexOf(k)>=0,R=M?"width":"height",W=ef(t,{placement:E,boundary:c,rootBoundary:l,altBoundary:u,padding:p}),_=M?D?L:B:D?T:"top";w[R]>x[R]&&(_=$(_));var V=$(_),I=[];if(i&&I.push(W[k]<=0),s&&I.push(W[_]<=0,W[V]<=0),I.every(function(e){return e})){P=E,A=!1;break}O.set(E,I)}if(A)for(var U=m?3:1,F=function(e){var t=g.find(function(t){var n=O.get(t);if(n)return n.slice(0,e).every(function(e){return e})});if(t)return P=t,"break"},z=U;z>0&&"break"!==F(z);z--);t.placement!==P&&(t.modifiersData[o]._skip=!0,t.placement=P,t.reset=!0)}},requiresIfExists:["offset"],data:{_skip:!1}},{name:"preventOverflow",enabled:!0,phase:"main",fn:function(e){var t=e.state,n=e.options,o=e.name,r=n.mainAxis,i=n.altAxis,a=n.boundary,s=n.rootBoundary,f=n.altBoundary,p=n.padding,c=n.tether,l=void 0===c||c,u=n.tetherOffset,d=void 0===u?0:u,m=ef(t,{boundary:a,rootBoundary:s,padding:p,altBoundary:f}),y=X(t.placement),b=Y(t.placement),g=!b,w=G(y),x="x"===w?"y":"x",O=t.modifiersData.popperOffsets,A=t.rects.reference,P=t.rects.popper,j="function"==typeof d?d(Object.assign({},t.rects,{placement:t.placement})):d,E="number"==typeof j?{mainAxis:j,altAxis:j}:Object.assign({mainAxis:0,altAxis:0},j),D=t.modifiersData.offset?t.modifiersData.offset[t.placement]:null,M={x:0,y:0};if(O){if(void 0===r||r){var R,H="y"===w?"top":B,S="y"===w?T:L,_="y"===w?"height":"width",V=O[w],q=V+m[H],N=V-m[S],I=l?-P[_]/2:0,U=b===C?A[_]:P[_],F=b===C?-P[_]:-A[_],z=t.elements.arrow,J=l&&z?k(z):{width:0,height:0},K=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:ei(),Q=K[H],Z=K[S],$=ep(0,A[_],J[_]),ee=g?A[_]/2-I-$-Q-E.mainAxis:U-$-Q-E.mainAxis,et=g?-A[_]/2+I+$+Z+E.mainAxis:F+$+Z+E.mainAxis,en=t.elements.arrow&&W(t.elements.arrow),eo=en?"y"===w?en.clientTop||0:en.clientLeft||0:0,er=null!=(R=null==D?void 0:D[w])?R:0,ea=ep(l?v(q,V+ee-er-eo):q,V,l?h(N,V+et-er):N);O[w]=ea,M[w]=ea-V}if(void 0!==i&&i){var es,ec,el="x"===w?"top":B,eu="x"===w?T:L,ed=O[x],em="y"===x?"height":"width",eh=ed+m[el],ev=ed-m[eu],ey=-1!==["top",B].indexOf(y),eb=null!=(ec=null==D?void 0:D[x])?ec:0,eg=ey?eh:ed-A[em]-P[em]-eb+E.altAxis,ew=ey?ed+A[em]+P[em]-eb-E.altAxis:ev,ex=l&&ey?(es=ep(eg,ed,ew))>ew?ew:es:ep(l?eg:eh,ed,l?ew:ev);O[x]=ex,M[x]=ex-ed}t.modifiersData[o]=M}},requiresIfExists:["offset"]},{name:"arrow",enabled:!0,phase:"main",fn:function(e){var t,n,o=e.state,r=e.name,i=e.options,a=o.elements.arrow,s=o.modifiersData.popperOffsets,f=X(o.placement),p=G(f),c=[B,L].indexOf(f)>=0?"height":"width";if(a&&s){var l=ea("number"!=typeof(t="function"==typeof(t=i.padding)?t(Object.assign({},o.rects,{placement:o.placement})):t)?t:es(t,S)),u=k(a),d="y"===p?"top":B,m="y"===p?T:L,h=o.rects.reference[c]+o.rects.reference[p]-s[p]-o.rects.popper[c],v=s[p]-o.rects.reference[p],y=W(a),b=y?"y"===p?y.clientHeight||0:y.clientWidth||0:0,g=l[d],w=b-u[c]-l[m],x=b/2-u[c]/2+(h/2-v/2),O=ep(g,x,w);o.modifiersData[r]=((n={})[p]=O,n.centerOffset=O-x,n)}},effect:function(e){var t=e.state,n=e.options.element,o=void 0===n?"[data-popper-arrow]":n;null!=o&&("string"!=typeof o||(o=t.elements.popper.querySelector(o)))&&en(t.elements.popper,o)&&(t.elements.arrow=o)},requires:["popperOffsets"],requiresIfExists:["preventOverflow"]},{name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function(e){var t=e.state,n=e.name,o=t.rects.reference,r=t.rects.popper,i=t.modifiersData.preventOverflow,a=ef(t,{elementContext:"reference"}),s=ef(t,{altBoundary:!0}),f=ec(a,o),p=ec(s,r,i),c=el(f),l=el(p);t.modifiersData[n]={referenceClippingOffsets:f,popperEscapeOffsets:p,isReferenceHidden:c,hasPopperEscaped:l},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":c,"data-popper-escaped":l})}}]}),ed=n(175659),em=n(779329),eh=n(23038),ev=n(748088),ey=n(474848),eb=["anchorEl","children","direction","disablePortal","modifiers","open","placement","popperOptions","popperRef","slotProps","slots","TransitionProps","ownerState"],eg=["anchorEl","children","container","direction","disablePortal","keepMounted","modifiers","open","placement","popperOptions","popperRef","style","transition","slotProps","slots"];function ew(e){return"function"==typeof e?e():e}var ex=function(e){var t=e.classes;return(0,ed.A)({root:["root"]},ev.b,t)},eO={},eA=a.forwardRef(function(e,t){var n,i=e.anchorEl,c=e.children,l=e.direction,u=e.disablePortal,d=e.modifiers,m=e.open,h=e.placement,v=e.popperOptions,y=e.popperRef,b=e.slotProps,g=e.slots,w=e.TransitionProps,x=(0,r.A)(e,eb),O=a.useRef(null),A=(0,f.A)(O,t),P=a.useRef(null),j=(0,f.A)(P,y),E=a.useRef(j);(0,p.A)(function(){E.current=j},[j]),a.useImperativeHandle(y,function(){return P.current},[]);var k=function(e,t){if("ltr"===t)return e;switch(e){case"bottom-end":return"bottom-start";case"bottom-start":return"bottom-end";case"top-end":return"top-start";case"top-start":return"top-end";default:return e}}(h,l),D=a.useState(k),M=(0,s.A)(D,2),R=M[0],W=M[1],T=a.useState(ew(i)),L=(0,s.A)(T,2),B=L[0],H=L[1];a.useEffect(function(){P.current&&P.current.forceUpdate()}),a.useEffect(function(){i&&H(ew(i))},[i]),(0,p.A)(function(){if(B&&m){var e=function(e){W(e.placement)},t=[{name:"preventOverflow",options:{altBoundary:u}},{name:"flip",options:{altBoundary:u}},{name:"onUpdate",enabled:!0,phase:"afterWrite",fn:function(t){e(t.state)}}];null!=d&&(t=t.concat(d)),v&&null!=v.modifiers&&(t=t.concat(v.modifiers));var n=eu(B,O.current,(0,o.A)({placement:k},v,{modifiers:t}));return E.current(n),function(){n.destroy(),E.current(null)}}},[B,u,d,m,v,k]);var S={placement:R};null!==w&&(S.TransitionProps=w);var C=ex(e),_=null!=(n=(void 0===g?{}:g).root)?n:"div",V=(0,em.A)({elementType:_,externalSlotProps:(void 0===b?{}:b).root,externalForwardedProps:x,additionalProps:{role:"tooltip",ref:A},ownerState:e,className:C.root});return(0,ey.jsx)(_,(0,o.A)({},V,{children:"function"==typeof c?c(S):c}))}),eP=a.forwardRef(function(e,t){var n,i=e.anchorEl,f=e.children,p=e.container,l=e.direction,u=e.disablePortal,d=void 0!==u&&u,m=e.keepMounted,h=void 0!==m&&m,v=e.modifiers,y=e.open,b=e.placement,g=e.popperOptions,w=e.popperRef,x=e.style,O=e.transition,A=void 0!==O&&O,P=e.slotProps,j=e.slots,E=(0,r.A)(e,eg),k=a.useState(!0),D=(0,s.A)(k,2),M=D[0],R=D[1];if(!h&&!y&&(!A||M))return null;if(p)n=p;else if(i){var W=ew(i);n=W&&void 0!==W.nodeType?(0,c.A)(W).body:(0,c.A)(null).body}var T=!y&&h&&(!A||M)?"none":void 0,L=A?{in:y,onEnter:function(){R(!1)},onExited:function(){R(!0)}}:void 0;return(0,ey.jsx)(eh.A,{disablePortal:d,container:n,children:(0,ey.jsx)(eA,(0,o.A)({anchorEl:i,direction:void 0===l?"ltr":l,disablePortal:d,modifiers:v,ref:t,open:A?!M:y,placement:void 0===b?"bottom":b,popperOptions:void 0===g?eO:g,popperRef:w,slotProps:void 0===P?{}:P,slots:void 0===j?{}:j},E,{style:(0,o.A)({position:"fixed",top:0,left:0,display:T},x),TransitionProps:L,children:f}))})}),ej=n(678967),eE=n(8174),ek=["anchorEl","component","components","componentsProps","container","disablePortal","keepMounted","modifiers","open","placement","popperOptions","popperRef","transition","slots","slotProps"],eD=(0,ej.Ay)(eP,{name:"MuiPopper",slot:"Root",overridesResolver:function(e,t){return t.root}})({});let eM=a.forwardRef(function(e,t){var n,a=(0,i.A)(),s=(0,eE.b)({props:e,name:"MuiPopper"}),f=s.anchorEl,p=s.component,c=s.components,l=s.componentsProps,u=s.container,d=s.disablePortal,m=s.keepMounted,h=s.modifiers,v=s.open,y=s.placement,b=s.popperOptions,g=s.popperRef,w=s.transition,x=s.slots,O=s.slotProps,A=(0,r.A)(s,ek),P=null!=(n=null==x?void 0:x.root)?n:null==c?void 0:c.Root,j=(0,o.A)({anchorEl:f,container:u,disablePortal:d,keepMounted:m,modifiers:h,open:v,placement:y,popperOptions:b,popperRef:g,transition:w},A);return(0,ey.jsx)(eD,(0,o.A)({as:p,direction:null==a?void 0:a.direction,slots:{root:P},slotProps:null!=O?O:l},j,{ref:t}))})},748088:(e,t,n)=>{n.d(t,{b:()=>i});var o=n(938413),r=n(931609);function i(e){return(0,r.Ay)("MuiPopper",e)}(0,o.A)("MuiPopper",["root"])},776953:(e,t,n)=>{t.A=void 0;var o=function(e,t){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var n=i(void 0);if(n&&n.has(e))return n.get(e);var o={__proto__:null},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if("default"!==a&&Object.prototype.hasOwnProperty.call(e,a)){var s=r?Object.getOwnPropertyDescriptor(e,a):null;s&&(s.get||s.set)?Object.defineProperty(o,a,s):o[a]=e[a]}return o.default=e,n&&n.set(e,o),o}(n(296540)),r=n(119374);function i(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(i=function(e){return e?n:t})(e)}t.A=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=o.useContext(r.ThemeContext);return t&&0!==Object.keys(t).length?t:e}}}]);