"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6488],{153296:(e,t,n)=>{n.d(t,{DP:()=>b,Y5:()=>g,ZY:()=>S,_0:()=>m,xA:()=>p,xu:()=>M});var i=n(296540),o=n(754522),r=n(349231),a=n(800438),l=n(2607),s=n(25658),d=n(474848);function c(){return(c=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}).apply(this,arguments)}var u=function(e){var t,n=e.axis,i=e.scale,r=e.ticksPosition,a=e.tickValues,l=e.tickSize,d=e.tickPadding,u=e.tickRotation,f=e.truncateTickAt,h=e.engine,x=(0,s.fS)(i,a),m=o.ni[void 0===h?"svg":h],v="bandwidth"in i?(0,s.ok)(i):i,g={lineX:0,lineY:0},y={textX:0,textY:0},k="object"==typeof document&&"rtl"===document.dir,p=m.align.center,b=m.baseline.center;return"x"===n?(t=function(e){var t;return{x:null!=(t=v(e))?t:0,y:0}},g.lineY=l*("after"===r?1:-1),y.textY=(l+d)*("after"===r?1:-1),b="after"===r?m.baseline.top:m.baseline.bottom,0===u?p=m.align.center:"after"===r&&u<0||"before"===r&&u>0?(p=m.align[k?"left":"right"],b=m.baseline.center):("after"===r&&u>0||"before"===r&&u<0)&&(p=m.align[k?"right":"left"],b=m.baseline.center)):(t=function(e){var t;return{x:0,y:null!=(t=v(e))?t:0}},g.lineX=l*("after"===r?1:-1),y.textX=(l+d)*("after"===r?1:-1),p="after"===r?m.align.left:m.align.right),{ticks:x.map(function(e){var n,i="string"==typeof e?(n=String(e).length,f&&f>0&&n>f?""+String(e).slice(0,f).concat("..."):""+e):e;return c({key:e instanceof Date?""+e.valueOf():""+e,value:i},t(e),g,y)}),textAlign:p,textBaseline:b}},f=function(e,t){if(void 0===e||"function"==typeof e)return e;if("time"===t.type){var n=(0,a.DC)(e);return function(e){return n(e instanceof Date?e:new Date(e))}}return(0,l.GP)(e)},h=function(e){var t=e.width,n=e.height,i=e.scale,o=e.axis,r=e.values,a=(Array.isArray(r)?r:void 0)||(0,s.fS)(i,r),l="bandwidth"in i?(0,s.ok)(i):i;return"x"===o?a.map(function(e){var t,i;return{key:e instanceof Date?""+e.valueOf():""+e,x1:null!=(t=l(e))?t:0,x2:null!=(i=l(e))?i:0,y1:0,y2:n}}):a.map(function(e){var n,i;return{key:e instanceof Date?""+e.valueOf():""+e,x1:0,x2:t,y1:null!=(n=l(e))?n:0,y2:null!=(i=l(e))?i:0}})},x=(0,i.memo)(function(e){var t,n=e.value,a=e.format,l=e.lineX,s=e.lineY,u=e.onClick,f=e.textBaseline,h=e.textAnchor,x=e.animatedProps,m=(0,o.DP)(),v=m.axis.ticks.line,g=m.axis.ticks.text,y=null!=(t=null==a?void 0:a(n))?t:n,k=(0,i.useMemo)(function(){var e={opacity:x.opacity};return u?{style:c({},e,{cursor:"pointer"}),onClick:function(e){return u(e,y)}}:{style:e}},[x.opacity,u,y]);return(0,d.jsxs)(r.CS.g,c({transform:x.transform},k,{children:[(0,d.jsx)("line",{x1:0,x2:l,y1:0,y2:s,style:v}),g.outlineWidth>0&&(0,d.jsx)(r.CS.text,{dominantBaseline:f,textAnchor:h,transform:x.textTransform,style:g,strokeWidth:2*g.outlineWidth,stroke:g.outlineColor,strokeLinejoin:"round",children:""+y}),(0,d.jsx)(r.CS.text,{dominantBaseline:f,textAnchor:h,transform:x.textTransform,style:(0,o.Ou)(g),children:""+y})]}))}),m=(0,i.memo)(function(e){var t=e.axis,n=e.scale,a=e.x,l=e.y,s=e.length,h=e.ticksPosition,m=e.tickValues,v=e.tickSize,g=e.tickPadding,y=e.tickRotation,k=void 0===y?0:y,p=e.format,b=e.renderTick,S=void 0===b?x:b,M=e.truncateTickAt,C=e.legend,w=e.legendPosition,j=void 0===w?"end":w,P=e.legendOffset,E=void 0===P?0:P,I=e.onClick,W=e.ariaHidden,z=(0,o.DP)(),T=z.axis.legend.text,A=(0,i.useMemo)(function(){return f(p,n)},[p,n]),Y=u({axis:t,scale:n,ticksPosition:h,tickValues:m,tickSize:void 0===v?5:v,tickPadding:void 0===g?5:g,tickRotation:k,truncateTickAt:M}),X=Y.ticks,F=Y.textAlign,L=Y.textBaseline,B=null;if(void 0!==C){var R,D=0,V=0,O=0;"y"===t?(O=-90,D=E,"start"===j?(R="start",V=s):"middle"===j?(R="middle",V=s/2):"end"===j&&(R="end")):(V=E,"start"===j?R="start":"middle"===j?(R="middle",D=s/2):"end"===j&&(R="end",D=s)),B=(0,d.jsxs)(d.Fragment,{children:[T.outlineWidth>0&&(0,d.jsx)("text",{transform:"translate("+D+", "+V+") rotate("+O+")",textAnchor:R,style:c({dominantBaseline:"central"},T),strokeWidth:2*T.outlineWidth,stroke:T.outlineColor,strokeLinejoin:"round",children:C}),(0,d.jsx)("text",{transform:"translate("+D+", "+V+") rotate("+O+")",textAnchor:R,style:c({dominantBaseline:"central"},T),children:C})]})}var G=(0,o.mk)(),H=G.animate,N=G.config,_=(0,r.zh)({transform:"translate("+(void 0===a?0:a)+","+(void 0===l?0:l)+")",lineX2:"x"===t?s:0,lineY2:"x"===t?0:s,config:N,immediate:!H}),K=(0,i.useCallback)(function(e){return{opacity:1,transform:"translate("+e.x+","+e.y+")",textTransform:"translate("+e.textX+","+e.textY+") rotate("+k+")"}},[k]),Z=(0,i.useCallback)(function(e){return{opacity:0,transform:"translate("+e.x+","+e.y+")",textTransform:"translate("+e.textX+","+e.textY+") rotate("+k+")"}},[k]),q=(0,r.pn)(X,{keys:function(e){return e.key},initial:K,from:Z,enter:K,update:K,leave:{opacity:0},config:N,immediate:!H});return(0,d.jsxs)(r.CS.g,{transform:_.transform,"aria-hidden":W,children:[q(function(e,t,n,o){return i.createElement(S,c({tickIndex:o,format:A,rotate:k,textBaseline:L,textAnchor:F,truncateTickAt:M,animatedProps:e},t,I?{onClick:I}:{}))}),(0,d.jsx)(r.CS.line,{style:z.axis.domain.line,x1:0,x2:_.lineX2,y1:0,y2:_.lineY2}),B]})}),v=["top","right","bottom","left"],g=(0,i.memo)(function(e){var t=e.xScale,n=e.yScale,i=e.width,o=e.height,r={top:e.top,right:e.right,bottom:e.bottom,left:e.left};return(0,d.jsx)(d.Fragment,{children:v.map(function(e){var a=r[e];if(!a)return null;var l="top"===e||"bottom"===e;return(0,d.jsx)(m,c({},a,{axis:l?"x":"y",x:"right"===e?i:0,y:"bottom"===e?o:0,scale:l?t:n,length:l?i:o,ticksPosition:"top"===e||"left"===e?"before":"after",truncateTickAt:a.truncateTickAt}),e)})})}),y=(0,i.memo)(function(e){var t=e.animatedProps,n=(0,o.DP)();return(0,d.jsx)(r.CS.line,c({},t,n.grid.line))}),k=(0,i.memo)(function(e){var t=e.lines,n=(0,o.mk)(),a=n.animate,l=n.config,s=(0,r.pn)(t,{keys:function(e){return e.key},initial:function(e){return{opacity:1,x1:e.x1,x2:e.x2,y1:e.y1,y2:e.y2}},from:function(e){return{opacity:0,x1:e.x1,x2:e.x2,y1:e.y1,y2:e.y2}},enter:function(e){return{opacity:1,x1:e.x1,x2:e.x2,y1:e.y1,y2:e.y2}},update:function(e){return{opacity:1,x1:e.x1,x2:e.x2,y1:e.y1,y2:e.y2}},leave:{opacity:0},config:l,immediate:!a});return(0,d.jsx)("g",{children:s(function(e,t){return(0,i.createElement)(y,c({},t,{key:t.key,animatedProps:e}))})})}),p=(0,i.memo)(function(e){var t=e.width,n=e.height,o=e.xScale,r=e.yScale,a=e.xValues,l=e.yValues,s=(0,i.useMemo)(function(){return!!o&&h({width:t,height:n,scale:o,axis:"x",values:a})},[o,a,t,n]),c=(0,i.useMemo)(function(){return!!r&&h({width:t,height:n,scale:r,axis:"y",values:l})},[n,t,r,l]);return(0,d.jsxs)(d.Fragment,{children:[s&&(0,d.jsx)(k,{lines:s}),c&&(0,d.jsx)(k,{lines:c})]})}),b=function(e,t){var n,i=t.axis,r=t.scale,a=t.x,l=t.y,s=t.length,d=t.ticksPosition,c=t.tickValues,f=t.tickSize,h=t.tickPadding,x=t.tickRotation,m=void 0===x?0:x,v=t.format,g=t.legend,y=t.legendPosition,k=void 0===y?"end":y,p=t.legendOffset,b=void 0===p?0:p,S=t.theme,M=u({axis:i,scale:r,ticksPosition:d,tickValues:c,tickSize:void 0===f?5:f,tickPadding:void 0===h?5:h,tickRotation:m,engine:"canvas"}),C=M.ticks,w=M.textAlign,j=M.textBaseline;e.save(),e.translate(void 0===a?0:a,void 0===l?0:l),e.textAlign=w,e.textBaseline=j;var P=S.axis.ticks.text;e.font=(P.fontWeight?P.fontWeight+" ":"")+P.fontSize+"px "+P.fontFamily,(null!=(n=S.axis.domain.line.strokeWidth)?n:0)>0&&(e.lineWidth=Number(S.axis.domain.line.strokeWidth),e.lineCap="square",S.axis.domain.line.stroke&&(e.strokeStyle=S.axis.domain.line.stroke),e.beginPath(),e.moveTo(0,0),e.lineTo("x"===i?s:0,"x"===i?0:s),e.stroke());var E="function"==typeof v?v:function(e){return""+e};if(C.forEach(function(t){(null!=(n=S.axis.ticks.line.strokeWidth)?n:0)>0&&(e.lineWidth=Number(S.axis.ticks.line.strokeWidth),e.lineCap="square",S.axis.ticks.line.stroke&&(e.strokeStyle=S.axis.ticks.line.stroke),e.beginPath(),e.moveTo(t.x,t.y),e.lineTo(t.x+t.lineX,t.y+t.lineY),e.stroke());var n,i=E(t.value);e.save(),e.translate(t.x+t.textX,t.y+t.textY),e.rotate((0,o.tR)(m)),P.outlineWidth>0&&(e.strokeStyle=P.outlineColor,e.lineWidth=2*P.outlineWidth,e.lineJoin="round",e.strokeText(""+i,0,0)),S.axis.ticks.text.fill&&(e.fillStyle=P.fill),e.fillText(""+i,0,0),e.restore()}),void 0!==g){var I=0,W=0,z=0,T="center";"y"===i?(z=-90,I=b,"start"===k?(T="start",W=s):"middle"===k?(T="center",W=s/2):"end"===k&&(T="end")):(W=b,"start"===k?T="start":"middle"===k?(T="center",I=s/2):"end"===k&&(T="end",I=s)),e.translate(I,W),e.rotate((0,o.tR)(z)),e.font=(S.axis.legend.text.fontWeight?S.axis.legend.text.fontWeight+" ":"")+S.axis.legend.text.fontSize+"px "+S.axis.legend.text.fontFamily,S.axis.legend.text.fill&&(e.fillStyle=S.axis.legend.text.fill),e.textAlign=T,e.textBaseline="middle",e.fillText(g,0,0)}e.restore()},S=function(e,t){var n=t.xScale,i=t.yScale,o=t.width,r=t.height,a=t.top,l=t.right,s=t.bottom,d=t.left,u=t.theme,h={top:a,right:l,bottom:s,left:d};v.forEach(function(t){var a=h[t];if(!a)return null;var l="top"===t||"bottom"===t,s=l?n:i,d=f(a.format,s);b(e,c({},a,{axis:l?"x":"y",x:"right"===t?o:0,y:"bottom"===t?r:0,scale:s,format:d,length:l?o:r,ticksPosition:"top"===t||"left"===t?"before":"after",theme:u}))})},M=function(e,t){h({width:t.width,height:t.height,scale:t.scale,axis:t.axis,values:t.values}).forEach(function(t){e.beginPath(),e.moveTo(t.x1,t.y1),e.lineTo(t.x2,t.y2),e.stroke()})}},416488:(e,t,n)=>{n.r(t),n.d(t,{ResponsiveScatterPlot:()=>V,ResponsiveScatterPlotCanvas:()=>N,ScatterPlot:()=>D,ScatterPlotCanvas:()=>H,canvasDefaultProps:()=>z,commonDefaultProps:()=>I,svgDefaultProps:()=>W,useScatterPlot:()=>j,useScatterPlotAnnotations:()=>P});var i=n(296540),o=n(754522),r=n(153296),a=n(58448),l=n(969616),s=n(25658),d=n(207184),c=n(858156),u=n.n(c),f=n(185015),h=n.n(f),x=n(198023),m=n.n(x),v=n(411331),g=n.n(v),y=n(411827),k=n(349231),p=n(474848),b=n(760956),S=n(513216);function M(){return(M=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}).apply(this,arguments)}function C(e,t){if(null==e)return{};var n,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}var w=function(e){if("function"==typeof e)return e;if(m()(e))return function(){return e};if(g()(e)){if(!h()(e.key))throw Error("symbolSize is invalid, key should be a string pointing to the property to use to determine node size");if(!Array.isArray(e.values)||2!==e.values.length)throw Error("symbolSize is invalid, values spec should be an array containing two values, min and max");if(!Array.isArray(e.sizes)||2!==e.sizes.length)throw Error("symbolSize is invalid, sizes spec should be an array containing two values, min and max");var t=(0,y.A)().domain([e.values[0],e.values[1]]).range([e.sizes[0],e.sizes[1]]);return function(n){return t(u()(n,e.key))}}throw Error("nodeSize is invalid, it should be either a function, a number or an object")},j=function(e){var t,n=e.data,r=e.xScaleSpec,a=e.xFormat,d=e.yScaleSpec,c=e.yFormat,u=e.width,f=e.height,h=e.nodeId,x=e.nodeSize,m=e.colors,v=(0,i.useMemo)(function(){return(0,s._6)(n,r,d,u,f)},[n,r,d,u,f]),g=v.series,y=v.xScale,k=v.yScale,p=(0,o.d_)(a),b=(0,o.d_)(c),S=(0,o.Ob)(h),C=(0,i.useMemo)(function(){var e,t,n,i,o,r;return t=(e={series:g,formatX:p,formatY:b,getNodeId:S}).series,n=e.formatX,i=e.formatY,o=e.getNodeId,r=[],t.forEach(function(e){e.data.forEach(function(t,a){var l={index:r.length,serieIndex:a,serieId:e.id,x:t.position.x,xValue:t.data.x,formattedX:n(t.data.x),y:t.position.y,yValue:t.data.y,formattedY:i(t.data.y),data:t.data};r.push(M({},l,{id:o(l)}))})}),r},[g,p,b,S]),j=(0,i.useMemo)(function(){return w(t)},[t=x]),P=(0,l.m1)(m,"serieId");return{xScale:y,yScale:k,nodes:(0,i.useMemo)(function(){return C.map(function(e){return M({},e,{size:j(e),color:P({serieId:e.serieId})})})},[C,j,P]),legendData:(0,i.useMemo)(function(){return g.map(function(e){return{id:e.id,label:e.id,color:P({serieId:e.id})}})},[g,P])}},P=function(e,t){return(0,d.wI)({data:e,annotations:t,getPosition:function(e){return{x:e.x,y:e.y}},getDimensions:function(e){return{size:e.size,width:e.size,height:e.size}}})},E=function(e){return e/2},I={xScale:{type:"linear",min:0,max:"auto"},yScale:{type:"linear",min:0,max:"auto"},enableGridX:!0,enableGridY:!0,axisBottom:{},axisLeft:{},nodeId:function(e){return e.serieId+"."+e.index},nodeSize:9,nodeComponent:function(e){var t=e.node,n=e.style,o=e.blendMode,r=e.isInteractive,a=e.onMouseEnter,l=e.onMouseMove,s=e.onMouseLeave,d=e.onClick,c=(0,i.useCallback)(function(e){return null==a?void 0:a(t,e)},[t,a]),u=(0,i.useCallback)(function(e){return null==l?void 0:l(t,e)},[t,l]),f=(0,i.useCallback)(function(e){return null==s?void 0:s(t,e)},[t,s]),h=(0,i.useCallback)(function(e){return null==d?void 0:d(t,e)},[t,d]);return(0,p.jsx)(k.CS.circle,{cx:n.x,cy:n.y,r:n.size.to(E),fill:n.color,style:{mixBlendMode:o},onMouseEnter:r?c:void 0,onMouseMove:r?u:void 0,onMouseLeave:r?f:void 0,onClick:r?h:void 0})},colors:{scheme:"nivo"},isInteractive:!0,debugMesh:!1,tooltip:function(e){var t=e.node;return(0,p.jsx)(b.GK,{id:t.serieId,value:"x: "+t.formattedX+", y: "+t.formattedY,enableChip:!0,color:t.color})},markers:[],legends:[],annotations:[]},W=M({},I,{blendMode:"normal",layers:["grid","axes","nodes","markers","mesh","legends","annotations"],role:"img",useMesh:!0,animate:!0,motionConfig:"default"}),z=M({},I,{layers:["grid","axes","nodes","mesh","legends","annotations"],pixelRatio:"undefined"!=typeof window&&window.devicePixelRatio||1,renderNode:function(e,t){e.beginPath(),e.arc(t.x,t.y,t.size/2,0,2*Math.PI),e.fillStyle=t.color,e.fill()}}),T=function(e){var t=P(e.nodes,e.annotations);return(0,p.jsx)(p.Fragment,{children:t.map(function(e,t){return(0,p.jsx)(d.YH,M({},e),t)})})},A=function(e){return e.id},Y=function(e){return{x:e.x,y:e.y,size:e.size,color:e.color}},X=function(e){return{x:e.x,y:e.y,size:0,color:e.color}},F=function(e){var t=e.nodes,n=e.nodeComponent,r=e.isInteractive,a=e.onMouseEnter,l=e.onMouseMove,s=e.onMouseLeave,d=e.onClick,c=e.tooltip,u=e.blendMode,f=(0,o.mk)(),h=f.animate,x=f.config,m=(0,k.pn)(t,{keys:A,from:Y,enter:Y,update:Y,leave:X,config:x,immediate:!h}),v=(0,b.fS)(),g=v.showTooltipFromEvent,y=v.hideTooltip,S=(0,i.useCallback)(function(e,t){g((0,i.createElement)(c,{node:e}),t),null==a||a(e,t)},[c,g,a]),M=(0,i.useCallback)(function(e,t){g((0,i.createElement)(c,{node:e}),t),null==l||l(e,t)},[c,g,l]),C=(0,i.useCallback)(function(e,t){y(),null==s||s(e,t)},[y,s]),w=(0,i.useCallback)(function(e,t){return null==d?void 0:d(e,t)},[d]);return(0,p.jsx)(p.Fragment,{children:m(function(e,t){return(0,i.createElement)(n,{node:t,style:e,blendMode:u,isInteractive:r,onMouseEnter:r?S:void 0,onMouseMove:r?M:void 0,onMouseLeave:r?C:void 0,onClick:r?w:void 0})})})},L=function(e){var t=e.nodes,n=e.width,o=e.height,r=e.onMouseEnter,a=e.onMouseMove,l=e.onMouseLeave,s=e.onClick,d=e.tooltip,c=e.debug,u=(0,b.fS)(),f=u.showTooltipFromEvent,h=u.hideTooltip,x=(0,i.useCallback)(function(e,t){f((0,i.createElement)(d,{node:e}),t),r&&r(e,t)},[f,d,r]),m=(0,i.useCallback)(function(e,t){f((0,i.createElement)(d,{node:e}),t),a&&a(e,t)},[f,d,a]),v=(0,i.useCallback)(function(e,t){h(),l&&l(e,t)},[h,l]),g=(0,i.useCallback)(function(e,t){s&&s(e,t)},[s]);return(0,p.jsx)(S.Mesh,{nodes:t,width:n,height:o,onMouseEnter:x,onMouseMove:m,onMouseLeave:v,onClick:g,debug:c})},B=["isInteractive","animate","motionConfig","theme","renderWrapper"],R=function(e){var t=e.data,n=e.xScale,l=void 0===n?W.xScale:n,s=e.xFormat,d=e.yScale,c=void 0===d?W.yScale:d,u=e.yFormat,f=e.width,h=e.height,x=e.margin,m=e.layers,v=void 0===m?W.layers:m,g=e.colors,y=void 0===g?W.colors:g,k=e.blendMode,b=void 0===k?W.blendMode:k,S=e.nodeId,C=void 0===S?W.nodeId:S,w=e.nodeSize,P=void 0===w?W.nodeSize:w,E=e.nodeComponent,I=void 0===E?W.nodeComponent:E,z=e.enableGridX,A=void 0===z?W.enableGridX:z,Y=e.enableGridY,X=void 0===Y?W.enableGridY:Y,B=e.gridXValues,R=e.gridYValues,D=e.axisTop,V=e.axisRight,O=e.axisBottom,G=void 0===O?W.axisBottom:O,H=e.axisLeft,N=void 0===H?W.axisLeft:H,_=e.annotations,K=void 0===_?W.annotations:_,Z=e.isInteractive,q=void 0===Z?W.isInteractive:Z,U=e.useMesh,J=void 0===U?W.useMesh:U,$=e.debugMesh,Q=void 0===$?W.debugMesh:$,ee=e.onMouseEnter,et=e.onMouseMove,en=e.onMouseLeave,ei=e.onClick,eo=e.tooltip,er=void 0===eo?W.tooltip:eo,ea=e.markers,el=void 0===ea?W.markers:ea,es=e.legends,ed=void 0===es?W.legends:es,ec=e.role,eu=void 0===ec?W.role:ec,ef=e.ariaLabel,eh=e.ariaLabelledBy,ex=e.ariaDescribedBy,em=(0,o.Xl)(f,h,x),ev=em.margin,eg=em.innerWidth,ey=em.innerHeight,ek=em.outerWidth,ep=em.outerHeight,eb=j({data:t,xScaleSpec:l,xFormat:s,yScaleSpec:c,yFormat:u,width:eg,height:ey,nodeId:C,nodeSize:P,colors:y}),eS=eb.xScale,eM=eb.yScale,eC=eb.nodes,ew=eb.legendData,ej=(0,i.useMemo)(function(){return{xScale:eS,yScale:eM,nodes:eC,margin:ev,innerWidth:eg,innerHeight:ey,outerWidth:ek,outerHeight:ep}},[eS,eM,eC,ev,eg,ey,ek,ep]),eP={grid:null,axes:null,nodes:null,markers:null,mesh:null,annotations:null,legends:null};return v.includes("grid")&&(eP.grid=(0,p.jsx)(r.xA,{width:eg,height:ey,xScale:A?eS:null,yScale:X?eM:null,xValues:B,yValues:R},"grid")),v.includes("axes")&&(eP.axes=(0,p.jsx)(r.Y5,{xScale:eS,yScale:eM,width:eg,height:ey,top:D,right:V,bottom:G,left:N},"axes")),v.includes("nodes")&&(eP.nodes=(0,p.jsx)(F,{nodes:eC,nodeComponent:I,isInteractive:q,tooltip:er,blendMode:b,onMouseEnter:ee,onMouseMove:et,onMouseLeave:en,onClick:ei},"nodes")),v.includes("markers")&&(eP.markers=(0,p.jsx)(o.U9,{markers:el,width:eg,height:ey,xScale:eS,yScale:eM},"markers")),v.includes("mesh")&&q&&J&&(eP.mesh=(0,p.jsx)(L,{nodes:eC,width:eg,height:ey,onMouseEnter:ee,onMouseMove:et,onMouseLeave:en,onClick:ei,tooltip:er,debug:Q},"mesh")),v.includes("annotations")&&(eP.annotations=(0,p.jsx)(T,{nodes:eC,annotations:K},"annotations")),v.includes("legends")&&(eP.legends=ed.map(function(e,t){return(0,p.jsx)(a.$i,M({},e,{containerWidth:eg,containerHeight:ey,data:ew}),t)})),(0,p.jsx)(o.Ge,{width:ek,height:ep,margin:ev,role:eu,ariaLabel:ef,ariaLabelledBy:eh,ariaDescribedBy:ex,children:v.map(function(e,t){if("string"==typeof e&&void 0!==eP[e])return eP[e];if("function"==typeof e)return(0,p.jsx)(i.Fragment,{children:(0,i.createElement)(e,ej)},t);throw Error("Unknown layer ("+e+")")})})},D=function(e){var t=e.isInteractive,n=void 0===t?W.isInteractive:t,i=e.animate,r=void 0===i?W.animate:i,a=e.motionConfig,l=void 0===a?W.motionConfig:a,s=e.theme,d=e.renderWrapper,c=C(e,B);return(0,p.jsx)(o.mc,{animate:r,isInteractive:n,motionConfig:l,renderWrapper:d,theme:s,children:(0,p.jsx)(R,M({isInteractive:n},c))})},V=function(e){return(0,p.jsx)(o.KF,{children:function(t){var n=t.width,i=t.height;return(0,p.jsx)(D,M({width:n,height:i},e))}})},O=["isInteractive","renderWrapper","theme"],G=function(e){var t=e.data,n=e.xScale,l=void 0===n?z.xScale:n,s=e.xFormat,c=e.yScale,u=void 0===c?z.yScale:c,f=e.yFormat,h=e.width,x=e.height,m=e.margin,v=e.pixelRatio,g=void 0===v?z.pixelRatio:v,y=e.layers,k=void 0===y?z.layers:y,C=e.colors,w=void 0===C?z.colors:C,E=e.nodeId,I=void 0===E?W.nodeId:E,T=e.nodeSize,A=void 0===T?z.nodeSize:T,Y=e.renderNode,X=void 0===Y?z.renderNode:Y,F=e.enableGridX,L=void 0===F?z.enableGridX:F,B=e.gridXValues,R=e.enableGridY,D=void 0===R?z.enableGridY:R,V=e.gridYValues,O=e.axisTop,G=e.axisRight,H=e.axisBottom,N=void 0===H?z.axisBottom:H,_=e.axisLeft,K=void 0===_?z.axisLeft:_,Z=e.annotations,q=void 0===Z?z.annotations:Z,U=e.isInteractive,J=void 0===U?z.isInteractive:U,$=e.debugMesh,Q=void 0===$?z.debugMesh:$,ee=e.onMouseEnter,et=e.onMouseMove,en=e.onMouseLeave,ei=e.onClick,eo=e.tooltip,er=void 0===eo?z.tooltip:eo,ea=e.legends,el=void 0===ea?z.legends:ea,es=e.canvasRef,ed=(0,i.useRef)(null),ec=(0,o.DP)(),eu=(0,i.useState)(null),ef=eu[0],eh=eu[1],ex=(0,o.Xl)(h,x,m),em=ex.margin,ev=ex.innerWidth,eg=ex.innerHeight,ey=ex.outerWidth,ek=ex.outerHeight,ep=j({data:t,xScaleSpec:l,xFormat:s,yScaleSpec:u,yFormat:f,width:ev,height:eg,nodeId:I,nodeSize:A,colors:w}),eb=ep.xScale,eS=ep.yScale,eM=ep.nodes,eC=ep.legendData,ew=P(eM,q),ej=(0,S.useVoronoiMesh)({points:eM,width:ev,height:eg,debug:Q}),eP=ej.delaunay,eE=ej.voronoi,eI=(0,i.useMemo)(function(){return{xScale:eb,yScale:eS,nodes:eM,margin:em,innerWidth:ev,innerHeight:eg,outerWidth:ey,outerHeight:ek}},[eb,eS,eM,em,ev,eg,ey,ek]);(0,i.useEffect)(function(){if(ed.current){ed.current.width=ey*g,ed.current.height=ek*g;var e=ed.current.getContext("2d");e.scale(g,g),e.fillStyle=ec.background,e.fillRect(0,0,ey,ek),e.translate(em.left,em.top),k.forEach(function(t){if("grid"===t)e.lineWidth=ec.grid.line.strokeWidth,e.strokeStyle=ec.grid.line.stroke,L&&(0,r.xu)(e,{width:ev,height:eg,scale:eb,axis:"x",values:B}),D&&(0,r.xu)(e,{width:ev,height:eg,scale:eS,axis:"y",values:V});else if("annotations"===t)(0,d.e0)(e,{annotations:ew,theme:ec});else if("axes"===t)(0,r.ZY)(e,{xScale:eb,yScale:eS,width:ev,height:eg,top:O,right:G,bottom:N,left:K,theme:ec});else if("nodes"===t)eM.forEach(function(t){X(e,t)});else if("mesh"===t)Q&&((0,S.renderVoronoiToCanvas)(e,eE),ef&&(0,S.renderVoronoiCellToCanvas)(e,eE,ef.index));else if("legends"===t)el.forEach(function(t){(0,a.ZG)(e,M({},t,{data:eC,containerWidth:ev,containerHeight:eg,theme:ec}))});else{if("function"!=typeof t)throw Error("Invalid layer: "+t);t(e,eI)}})}},[ed,ev,eg,ey,ek,em.top,em.left,g,X,k,eI,ec,eb,eS,eM,L,D,O,G,N,K,el,eC,Q,eE,ef,ew]);var eW=(0,b.fS)(),ez=eW.showTooltipFromEvent,eT=eW.hideTooltip,eA=(0,i.useCallback)(function(e){var t=(0,o.H9)(ed.current,e),n=t[0],i=t[1];return(0,o.u7)(em.left,em.top,ev,eg,n,i)?eM[eP.find(n-em.left,i-em.top)]:null},[ed,em,ev,eg,eP]),eY=(0,i.useCallback)(function(e){var t=eA(e);eh(t),t?(ez((0,i.createElement)(er,{node:t}),e),ef&&ef.id!==t.id&&(en&&en(ef,e),ee&&ee(t,e)),ef||ee&&ee(t,e),et&&et(t,e)):(eT(),ef&&en&&en(ef,e))},[eA,ef,eh,ez,eT,er,ee,et,en]),eX=(0,i.useCallback)(function(e){eT(),eh(null),ef&&en&&en(ef,e)},[eT,ef,eh,en]),eF=(0,i.useCallback)(function(e){if(ei){var t=eA(e);t&&ei(t,e)}},[eA,ei]);return(0,p.jsx)("canvas",{ref:function(e){ed.current=e,es&&"current"in es&&(es.current=e)},width:ey*g,height:ek*g,style:{width:ey,height:ek,cursor:J?"auto":"normal"},onMouseEnter:J?eY:void 0,onMouseMove:J?eY:void 0,onMouseLeave:J?eX:void 0,onClick:J?eF:void 0})},H=(0,i.forwardRef)(function(e,t){var n=e.isInteractive,i=e.renderWrapper,r=e.theme,a=C(e,O);return(0,p.jsx)(o.mc,{isInteractive:n,renderWrapper:i,theme:r,animate:!1,children:(0,p.jsx)(G,M({},a,{canvasRef:t}))})}),N=(0,i.forwardRef)(function(e,t){return(0,p.jsx)(o.KF,{children:function(n){var i=n.width,o=n.height;return(0,p.jsx)(H,M({width:i,height:o},e,{ref:t}))}})})}}]);