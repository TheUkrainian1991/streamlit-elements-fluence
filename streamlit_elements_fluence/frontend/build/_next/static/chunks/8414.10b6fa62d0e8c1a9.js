(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8414],{828414:(e,t,n)=>{"use strict";n.r(t),n.d(t,{ResponsiveTreeMap:()=>_,ResponsiveTreeMapCanvas:()=>et,ResponsiveTreeMapHtml:()=>q,TreeMap:()=>Z,TreeMapCanvas:()=>ee,TreeMapHtml:()=>K,canvasDefaultProps:()=>A,commonDefaultProps:()=>I,htmlDefaultProps:()=>R,htmlLabelTransform:()=>O,htmlNodeTransform:()=>S,htmlParentLabelTransform:()=>k,svgDefaultProps:()=>z,svgLabelTransform:()=>w,svgNodeTransform:()=>M,tileByType:()=>W});var o=n(296540),i=n(754522),a=n(590179),r=n.n(a),l=n(688055),d=n.n(l),u=n(190128),s=n.n(u),c=n(934227);function f(e,t,n,o,i){for(var a,r=e.children,l=-1,d=r.length,u=e.value&&(i-n)/e.value;++l<d;)(a=r[l]).x0=t,a.x1=o,a.y0=n,a.y1=n+=a.value*u}let b=function e(t){function n(e,n,o,i,a){!function(e,t,n,o,i,a){for(var r,l,d,u,s,b,p,v,h,g,x,L=[],m=t.children,y=0,C=0,P=m.length,M=t.value;y<P;){d=i-n,u=a-o;do s=m[C++].value;while(!s&&C<P);for(b=p=s,h=Math.max(p/(x=s*s*(g=Math.max(u/d,d/u)/(M*e))),x/b);C<P;++C){if(s+=l=m[C].value,l<b&&(b=l),l>p&&(p=l),(v=Math.max(p/(x=s*s*g),x/b))>h){s-=l;break}h=v}L.push(r={value:s,dice:d<u,children:m.slice(y,C)}),r.dice?(0,c.A)(r,n,o,i,M?o+=u*s/M:a):f(r,n,o,M?n+=d*s/M:i,a),M-=s,y=C}}(t,e,n,o,i,a)}return n.ratio=function(t){return e((t=+t)>1?t:1)},n}((1+Math.sqrt(5))/2);var p=n(887438),v=n(830086),h=n(900431),g=n(490751),x=n(969616),L=n(760956),m=n(349231),y=n(474848);function C(){return(C=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}function P(e,t){if(null==e)return{};var n,o,i={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}var M=function(e,t){return(0,m.to)([e,t],function(e,t){return"translate("+e+","+t+")"})},S=function(e,t){return(0,m.to)([e,t],function(e,t){return"translate("+e+"px, "+t+"px)"})},w=function(e,t,n){return(0,m.to)([e,t,n],function(e,t,n){return"translate("+e+","+t+") rotate("+n+")"})},O=function(e,t,n){return(0,m.to)([e,t,n],function(e,t,n){return"translate("+e+"px,"+t+"px) rotate("+n+"deg)"})},k=function(e,t,n){return(0,m.to)([e,t,n],function(e,t,n){return"translate("+(e-(0===n?0:5))+"px,"+(t-(0===n?5:0))+"px) rotate("+n+"deg)"})},T=(0,o.memo)(function(e){var t=e.node,n=e.animatedProps,o=e.borderWidth,a=e.enableLabel,r=e.enableParentLabel,l=e.labelSkipSize,d=(0,i.DP)(),u=a&&t.isLeaf&&(0===l||Math.min(t.width,t.height)>l),s=r&&t.isParent;return(0,y.jsxs)(m.CS.g,{transform:M(n.x,n.y),children:[(0,y.jsx)(m.CS.rect,{"data-testid":"node."+t.id,width:(0,m.to)(n.width,function(e){return Math.max(e,0)}),height:(0,m.to)(n.height,function(e){return Math.max(e,0)}),fill:t.fill?t.fill:n.color,strokeWidth:o,stroke:t.borderColor,fillOpacity:t.opacity,onMouseEnter:t.onMouseEnter,onMouseMove:t.onMouseMove,onMouseLeave:t.onMouseLeave,onClick:t.onClick}),u&&(0,y.jsx)(m.CS.text,{"data-testid":"label."+t.id,textAnchor:"middle",dominantBaseline:"central",style:C({},d.labels.text,{fill:t.labelTextColor,pointerEvents:"none"}),fillOpacity:n.labelOpacity,transform:w(n.labelX,n.labelY,n.labelRotation),children:t.label}),s&&(0,y.jsx)(m.CS.text,{"data-testid":"parentLabel."+t.id,dominantBaseline:"central",style:C({},d.labels.text,{fill:t.parentLabelTextColor,pointerEvents:"none"}),fillOpacity:n.parentLabelOpacity,transform:w(n.parentLabelX,n.parentLabelY,n.parentLabelRotation),children:t.parentLabel})]})}),j=(0,o.memo)(function(e){var t=e.node;return(0,y.jsx)(L.GK,{id:t.id,value:t.formattedValue,enableChip:!0,color:t.color})}),E=(0,o.memo)(function(e){var t=e.node,n=e.animatedProps,o=e.borderWidth,a=e.enableLabel,r=e.enableParentLabel,l=e.labelSkipSize,d=(0,i.DP)(),u=a&&t.isLeaf&&(0===l||Math.min(t.width,t.height)>l),s=r&&t.isParent;return(0,y.jsxs)(m.CS.div,{"data-testid":"node."+t.id,id:t.path.replace(/[^\w]/gi,"-"),style:{boxSizing:"border-box",position:"absolute",top:0,left:0,transform:S(n.x,n.y),width:n.width,height:n.height,borderWidth:o,borderStyle:"solid",borderColor:t.borderColor,overflow:"hidden"},children:[(0,y.jsx)(m.CS.div,{style:{boxSizing:"border-box",position:"absolute",top:0,left:0,opacity:t.opacity,width:n.width,height:n.height,background:n.color},onMouseEnter:t.onMouseEnter,onMouseMove:t.onMouseMove,onMouseLeave:t.onMouseLeave,onClick:t.onClick}),u&&(0,y.jsx)(m.CS.span,{"data-testid":"label."+t.id,style:C({},d.labels.text,{position:"absolute",display:"flex",top:-5,left:-5,width:10,height:10,justifyContent:"center",alignItems:"center",whiteSpace:"nowrap",color:t.labelTextColor,transformOrigin:"center center",transform:O(n.labelX,n.labelY,n.labelRotation),opacity:n.labelOpacity,pointerEvents:"none"}),children:t.label}),s&&(0,y.jsx)(m.CS.span,{"data-testid":"parentLabel."+t.id,style:C({},d.labels.text,{position:"absolute",display:"flex",justifyContent:"flex-start",alignItems:"center",whiteSpace:"nowrap",width:10,height:10,color:t.parentLabelTextColor,transformOrigin:"top left",transform:k(n.parentLabelX,n.parentLabelY,n.parentLabelRotation),opacity:n.parentLabelOpacity,pointerEvents:"none"}),children:t.parentLabel})]})}),I={layers:["nodes"],identity:"id",value:"value",tile:"squarify",leavesOnly:!1,innerPadding:0,outerPadding:0,colors:{scheme:"nivo"},colorBy:"pathComponents.1",nodeOpacity:.33,enableLabel:!0,label:"formattedValue",labelSkipSize:0,labelTextColor:{from:"color",modifiers:[["darker",1]]},orientLabel:!0,enableParentLabel:!0,parentLabel:"id",parentLabelSize:20,parentLabelPosition:"top",parentLabelPadding:6,parentLabelTextColor:{from:"color",modifiers:[["darker",1]]},borderWidth:1,borderColor:{from:"color",modifiers:[["darker",1]]},isInteractive:!0,tooltip:j,role:"img",animate:!0,motionConfig:"gentle"},z=C({},I,{nodeComponent:T,defs:[],fill:[]}),R=C({},I,{nodeComponent:E}),A=C({},I,{pixelRatio:"undefined"!=typeof window&&window.devicePixelRatio||1}),W={binary:function(e,t,n,o,i){var a,r,l=e.children,d=l.length,u=Array(d+1);for(u[0]=r=a=0;a<d;++a)u[a+1]=r+=l[a].value;!function e(t,n,o,i,a,r,d){if(t>=n-1){var s=l[t];s.x0=i,s.y0=a,s.x1=r,s.y1=d;return}for(var c=u[t],f=o/2+c,b=t+1,p=n-1;b<p;){var v=b+p>>>1;u[v]<f?b=v+1:p=v}f-u[b-1]<u[b]-f&&t+1<b&&--b;var h=u[b]-c,g=o-h;if(r-i>d-a){var x=(i*g+r*h)/o;e(t,b,h,i,a,x,d),e(b,n,g,x,a,r,d)}else{var L=(a*g+d*h)/o;e(t,b,h,i,a,r,L),e(b,n,g,i,L,r,d)}}(0,d,e.value,t,n,o,i)},dice:c.A,slice:f,sliceDice:function(e,t,n,o,i){(1&e.depth?f:c.A)(e,t,n,o,i)},squarify:b},B=function(e){var t=e.root,n=e.getValue;return(0,o.useMemo)(function(){return(0,p.Ay)(t).sum(n)},[t,n])},D=function(e){var t,n,a,l,u,c,f,p,L,m,y=e.data,P=e.width,M=e.height,S=e.identity,w=void 0===S?I.identity:S,O=e.value,k=void 0===O?I.value:O,T=e.valueFormat,j=e.leavesOnly,E=void 0===j?I.leavesOnly:j,z=e.tile,R=void 0===z?I.tile:z,A=e.innerPadding,D=void 0===A?I.innerPadding:A,X=e.outerPadding,Y=void 0===X?I.outerPadding:X,F=e.label,H=void 0===F?I.label:F,U=e.orientLabel,N=void 0===U?I.orientLabel:U,Z=e.enableParentLabel,_=void 0===Z?I.enableParentLabel:Z,G=e.parentLabel,V=void 0===G?I.parentLabel:G,K=e.parentLabelSize,q=void 0===K?I.parentLabelSize:K,J=e.parentLabelPosition,$=void 0===J?I.parentLabelPosition:J,Q=e.parentLabelPadding,ee=void 0===Q?I.parentLabelPadding:Q,et=e.colors,en=void 0===et?I.colors:et,eo=e.colorBy,ei=void 0===eo?I.colorBy:eo,ea=e.nodeOpacity,er=void 0===ea?I.nodeOpacity:ea,el=e.borderColor,ed=void 0===el?I.borderColor:el,eu=e.labelTextColor,es=void 0===eu?I.labelTextColor:eu,ec=e.parentLabelTextColor,ef=void 0===ec?I.parentLabelTextColor:ec,eb=(0,i.Ob)(w),ep=(0,i.Ob)(k),ev=(0,i.d_)(T),eh=(0,i.Ob)(H),eg=(0,i.Ob)(V),ex=(n=(t={width:P,height:M,tile:R,innerPadding:D,outerPadding:Y,enableParentLabel:_,parentLabelSize:q,parentLabelPosition:$,leavesOnly:E}).width,a=t.height,l=t.tile,u=t.innerPadding,c=t.outerPadding,f=t.enableParentLabel,p=t.parentLabelSize,L=t.parentLabelPosition,m=t.leavesOnly,(0,o.useMemo)(function(){var e=(function(){var e=b,t=!1,n=1,o=1,i=[0],a=g.P,r=g.P,l=g.P,d=g.P,u=g.P;function s(e){return e.x0=e.y0=0,e.x1=n,e.y1=o,e.eachBefore(c),i=[0],t&&e.eachBefore(v.A),e}function c(t){var n=i[t.depth],o=t.x0+n,s=t.y0+n,c=t.x1-n,f=t.y1-n;c<o&&(o=c=(o+c)/2),f<s&&(s=f=(s+f)/2),t.x0=o,t.y0=s,t.x1=c,t.y1=f,t.children&&(n=i[t.depth+1]=a(t)/2,o+=u(t)-n,s+=r(t)-n,c-=l(t)-n,f-=d(t)-n,c<o&&(o=c=(o+c)/2),f<s&&(s=f=(s+f)/2),e(t,o,s,c,f))}return s.round=function(e){return arguments.length?(t=!!e,s):t},s.size=function(e){return arguments.length?(n=+e[0],o=+e[1],s):[n,o]},s.tile=function(t){return arguments.length?(e=(0,h.m)(t),s):e},s.padding=function(e){return arguments.length?s.paddingInner(e).paddingOuter(e):s.paddingInner()},s.paddingInner=function(e){return arguments.length?(a="function"==typeof e?e:(0,g.A)(+e),s):a},s.paddingOuter=function(e){return arguments.length?s.paddingTop(e).paddingRight(e).paddingBottom(e).paddingLeft(e):s.paddingTop()},s.paddingTop=function(e){return arguments.length?(r="function"==typeof e?e:(0,g.A)(+e),s):r},s.paddingRight=function(e){return arguments.length?(l="function"==typeof e?e:(0,g.A)(+e),s):l},s.paddingBottom=function(e){return arguments.length?(d="function"==typeof e?e:(0,g.A)(+e),s):d},s.paddingLeft=function(e){return arguments.length?(u="function"==typeof e?e:(0,g.A)(+e),s):u},s})().size([n,a]).tile(W[l]).round(!0).paddingInner(u).paddingOuter(c);if(f&&!m){var t=p+2*c;e["padding"+s()(L)](t)}return e},[n,a,l,u,c,f,p,L,m])),eL=B({root:y,getValue:ep}),em=(0,o.useMemo)(function(){var e=d()(eL);return ex(e),E?e.leaves():e.descendants()},[eL,ex,E]),ey=(0,o.useMemo)(function(){return em.map(function(e){var t,n={path:(t=e.ancestors().map(function(e){return eb(e.data)}).reverse()).join("."),pathComponents:t},o=n.path,i=n.pathComponents,a={id:eb(e.data),path:o,pathComponents:i,data:r()(e.data,"children"),x:e.x0,y:e.y0,width:e.x1-e.x0,height:e.y1-e.y0,value:e.value,formattedValue:ev(e.value),treeDepth:e.depth,treeHeight:e.height,isParent:e.height>0,isLeaf:0===e.height,parentLabelX:0,parentLabelY:0,parentLabelRotation:0};return a.labelRotation=N&&a.height>a.width?-90:0,"top"===$&&(a.parentLabelX=Y+ee,a.parentLabelY=Y+q/2),"right"===$&&(a.parentLabelX=a.width-Y-q/2,a.parentLabelY=a.height-Y-ee,a.parentLabelRotation=-90),"bottom"===$&&(a.parentLabelX=Y+ee,a.parentLabelY=a.height-Y-q/2),"left"===$&&(a.parentLabelX=Y+q/2,a.parentLabelY=a.height-Y-ee,a.parentLabelRotation=-90),a.label=eh(a),a.parentLabel=eg(a),a})},[em,eb,ev,eh,N,eg,q,$,ee,Y]),eC=(0,i.DP)(),eP=(0,x.m1)(en,ei),eM=(0,x.nz)(ed,eC),eS=(0,x.nz)(es,eC),ew=(0,x.nz)(ef,eC);return{hierarchy:eL,nodes:(0,o.useMemo)(function(){return ey.map(function(e){var t=C({},e,{color:eP(e),opacity:er});return t.borderColor=eM(t),t.labelTextColor=eS(t),t.parentLabelTextColor=ew(t),t})},[ey,eP,er,eM,eS,ew]),layout:ex}},X=function(e){var t=e.nodes;return(0,o.useMemo)(function(){return{nodes:t}},[t])},Y=function(e){return{x:e.x,y:e.y,width:e.width,height:e.height,color:e.color,labelX:e.width/2,labelY:e.height/2,labelRotation:e.labelRotation,labelOpacity:1,parentLabelX:e.parentLabelX,parentLabelY:e.parentLabelY,parentLabelRotation:e.parentLabelRotation,parentLabelOpacity:1}},F=function(e){return{x:e.x+e.width/2,y:e.y+e.height/2,width:0,height:0,color:e.color,labelX:0,labelY:0,labelRotation:e.labelRotation,labelOpacity:0,parentLabelX:0,parentLabelY:0,parentLabelRotation:e.parentLabelRotation,parentLabelOpacity:0}},H=(0,o.memo)(function(e){var t,n,a,r,l,d,u,s,c,f,b,p,v,h,g,x=e.nodes,P=e.nodeComponent,M=e.borderWidth,S=e.enableLabel,w=e.labelSkipSize,O=e.enableParentLabel,k=(n=(t={isInteractive:e.isInteractive,onMouseEnter:e.onMouseEnter,onMouseMove:e.onMouseMove,onMouseLeave:e.onMouseLeave,onClick:e.onClick,tooltip:e.tooltip}).isInteractive,a=t.onMouseEnter,r=t.onMouseMove,l=t.onMouseLeave,d=t.onClick,u=t.tooltip,c=(s=(0,L.fS)()).showTooltipFromEvent,f=s.hideTooltip,b=(0,o.useCallback)(function(e,t){c((0,o.createElement)(u,{node:e}),t,"left")},[c,u]),p=(0,o.useCallback)(function(e,t){b(e,t),null==a||a(e,t)},[a,b]),v=(0,o.useCallback)(function(e,t){b(e,t),null==r||r(e,t)},[r,b]),h=(0,o.useCallback)(function(e,t){f(),null==l||l(e,t)},[l,f]),g=(0,o.useCallback)(function(e,t){null==d||d(e,t)},[d]),(0,o.useMemo)(function(){return x.map(function(e){return n?C({},e,{onMouseEnter:function(t){return p(e,t)},onMouseMove:function(t){return v(e,t)},onMouseLeave:function(t){return h(e,t)},onClick:function(t){return g(e,t)}}):e})},[n,x,p,v,h,g])),T=(0,i.mk)(),j=T.animate,E=T.config,I=(0,m.pn)(k,{keys:function(e){return e.path},initial:Y,from:F,enter:Y,update:Y,leave:F,config:E,immediate:!j});return(0,y.jsx)(y.Fragment,{children:I(function(e,t){return(0,o.createElement)(P,{key:t.path,node:t,animatedProps:e,borderWidth:M,enableLabel:S,labelSkipSize:w,enableParentLabel:O})})})}),U=["isInteractive","animate","motionConfig","theme","renderWrapper"],N=function(e){var t=e.data,n=e.identity,a=void 0===n?z.identity:n,r=e.value,l=void 0===r?z.value:r,d=e.valueFormat,u=e.tile,s=void 0===u?z.tile:u,c=e.nodeComponent,f=void 0===c?z.nodeComponent:c,b=e.innerPadding,p=void 0===b?z.innerPadding:b,v=e.outerPadding,h=void 0===v?z.outerPadding:v,g=e.leavesOnly,x=void 0===g?z.leavesOnly:g,L=e.width,m=e.height,C=e.margin,P=e.layers,M=void 0===P?z.layers:P,S=e.colors,w=void 0===S?z.colors:S,O=e.colorBy,k=void 0===O?z.colorBy:O,T=e.nodeOpacity,j=void 0===T?z.nodeOpacity:T,E=e.borderWidth,I=void 0===E?z.borderWidth:E,R=e.borderColor,A=void 0===R?z.borderColor:R,W=e.defs,B=void 0===W?z.defs:W,Y=e.fill,F=void 0===Y?z.fill:Y,U=e.enableLabel,N=void 0===U?z.enableLabel:U,Z=e.label,_=void 0===Z?z.label:Z,G=e.labelTextColor,V=void 0===G?z.labelTextColor:G,K=e.orientLabel,q=void 0===K?z.orientLabel:K,J=e.labelSkipSize,$=void 0===J?z.labelSkipSize:J,Q=e.enableParentLabel,ee=void 0===Q?z.enableParentLabel:Q,et=e.parentLabel,en=void 0===et?z.parentLabel:et,eo=e.parentLabelSize,ei=void 0===eo?z.parentLabelSize:eo,ea=e.parentLabelPosition,er=void 0===ea?z.parentLabelPosition:ea,el=e.parentLabelPadding,ed=void 0===el?z.parentLabelPadding:el,eu=e.parentLabelTextColor,es=void 0===eu?z.parentLabelTextColor:eu,ec=e.isInteractive,ef=void 0===ec?z.isInteractive:ec,eb=e.onMouseEnter,ep=e.onMouseMove,ev=e.onMouseLeave,eh=e.onClick,eg=e.tooltip,ex=void 0===eg?z.tooltip:eg,eL=e.role,em=e.ariaLabel,ey=e.ariaLabelledBy,eC=e.ariaDescribedBy,eP=(0,i.Xl)(L,m,C),eM=eP.margin,eS=eP.innerWidth,ew=eP.innerHeight,eO=eP.outerWidth,ek=eP.outerHeight,eT=D({data:t,identity:a,value:l,valueFormat:d,leavesOnly:x,width:eS,height:ew,tile:s,innerPadding:p,outerPadding:h,colors:w,colorBy:k,nodeOpacity:j,borderColor:A,label:_,labelTextColor:V,orientLabel:q,enableParentLabel:ee,parentLabel:en,parentLabelSize:ei,parentLabelPosition:er,parentLabelPadding:ed,parentLabelTextColor:es}).nodes,ej={nodes:null};M.includes("nodes")&&(ej.nodes=(0,y.jsx)(H,{nodes:eT,nodeComponent:f,borderWidth:I,enableLabel:N,labelSkipSize:$,enableParentLabel:ee,isInteractive:ef,onMouseEnter:eb,onMouseMove:ep,onMouseLeave:ev,onClick:eh,tooltip:ex},"nodes"));var eE=X({nodes:eT}),eI=(0,i.kc)(B,eT,F);return(0,y.jsx)(i.Ge,{width:eO,height:ek,margin:eM,defs:eI,role:eL,ariaLabel:em,ariaLabelledBy:ey,ariaDescribedBy:eC,children:M.map(function(e,t){var n;return"function"==typeof e?(0,y.jsx)(o.Fragment,{children:(0,o.createElement)(e,eE)},t):null!=(n=null==ej?void 0:ej[e])?n:null})})},Z=function(e){var t=e.isInteractive,n=void 0===t?z.isInteractive:t,o=e.animate,a=void 0===o?z.animate:o,r=e.motionConfig,l=void 0===r?z.motionConfig:r,d=e.theme,u=e.renderWrapper,s=P(e,U);return(0,y.jsx)(i.mc,{animate:a,isInteractive:n,motionConfig:l,renderWrapper:u,theme:d,children:(0,y.jsx)(N,C({isInteractive:n},s))})},_=function(e){return(0,y.jsx)(i.KF,{children:function(t){var n=t.width,o=t.height;return(0,y.jsx)(Z,C({width:n,height:o},e))}})},G=["isInteractive","animate","motionConfig","theme","renderWrapper"],V=function(e){var t=e.data,n=e.identity,a=void 0===n?R.identity:n,r=e.value,l=void 0===r?R.value:r,d=e.tile,u=void 0===d?R.tile:d,s=e.nodeComponent,c=void 0===s?R.nodeComponent:s,f=e.valueFormat,b=e.innerPadding,p=void 0===b?R.innerPadding:b,v=e.outerPadding,h=void 0===v?R.outerPadding:v,g=e.leavesOnly,x=void 0===g?R.leavesOnly:g,L=e.width,m=e.height,C=e.margin,P=e.layers,M=void 0===P?z.layers:P,S=e.colors,w=void 0===S?R.colors:S,O=e.colorBy,k=void 0===O?R.colorBy:O,T=e.nodeOpacity,j=void 0===T?R.nodeOpacity:T,E=e.borderWidth,I=void 0===E?R.borderWidth:E,A=e.borderColor,W=void 0===A?R.borderColor:A,B=e.enableLabel,Y=void 0===B?R.enableLabel:B,F=e.label,U=void 0===F?R.label:F,N=e.labelTextColor,Z=void 0===N?R.labelTextColor:N,_=e.orientLabel,G=void 0===_?R.orientLabel:_,V=e.labelSkipSize,K=void 0===V?R.labelSkipSize:V,q=e.enableParentLabel,J=void 0===q?R.enableParentLabel:q,$=e.parentLabel,Q=void 0===$?R.parentLabel:$,ee=e.parentLabelSize,et=void 0===ee?R.parentLabelSize:ee,en=e.parentLabelPosition,eo=void 0===en?R.parentLabelPosition:en,ei=e.parentLabelPadding,ea=void 0===ei?R.parentLabelPadding:ei,er=e.parentLabelTextColor,el=void 0===er?R.parentLabelTextColor:er,ed=e.isInteractive,eu=void 0===ed?R.isInteractive:ed,es=e.onMouseEnter,ec=e.onMouseMove,ef=e.onMouseLeave,eb=e.onClick,ep=e.tooltip,ev=void 0===ep?R.tooltip:ep,eh=e.role,eg=e.ariaLabel,ex=e.ariaLabelledBy,eL=e.ariaDescribedBy,em=(0,i.Xl)(L,m,C),ey=em.margin,eC=em.innerWidth,eP=em.innerHeight,eM=em.outerWidth,eS=em.outerHeight,ew=D({data:t,identity:a,value:l,valueFormat:f,leavesOnly:x,width:eC,height:eP,tile:u,innerPadding:p,outerPadding:h,colors:w,colorBy:k,nodeOpacity:j,borderColor:W,label:U,labelTextColor:Z,orientLabel:G,enableParentLabel:J,parentLabel:Q,parentLabelSize:et,parentLabelPosition:eo,parentLabelPadding:ea,parentLabelTextColor:el}).nodes,eO={nodes:null};M.includes("nodes")&&(eO.nodes=(0,y.jsx)(H,{nodes:ew,nodeComponent:c,borderWidth:I,enableLabel:Y,labelSkipSize:K,enableParentLabel:J,isInteractive:eu,onMouseEnter:es,onMouseMove:ec,onMouseLeave:ef,onClick:eb,tooltip:ev},"nodes"));var ek=X({nodes:ew});return(0,y.jsx)("div",{role:eh,"aria-label":eg,"aria-labelledby":ex,"aria-describedby":eL,style:{position:"relative",width:eM,height:eS},children:(0,y.jsx)("div",{style:{position:"absolute",top:ey.top,left:ey.left},children:M.map(function(e,t){var n;return"function"==typeof e?(0,y.jsx)(o.Fragment,{children:(0,o.createElement)(e,ek)},t):null!=(n=null==eO?void 0:eO[e])?n:null})})})},K=function(e){var t=e.isInteractive,n=void 0===t?R.isInteractive:t,o=e.animate,a=void 0===o?R.animate:o,r=e.motionConfig,l=void 0===r?R.motionConfig:r,d=e.theme,u=e.renderWrapper,s=P(e,G);return(0,y.jsx)(i.mc,{animate:a,isInteractive:n,motionConfig:l,renderWrapper:u,theme:d,children:(0,y.jsx)(V,C({isInteractive:n},s))})},q=function(e){return(0,y.jsx)(i.KF,{children:function(t){var n=t.width,o=t.height;return(0,y.jsx)(K,C({width:n,height:o},e))}})},J=["theme","isInteractive","animate","motionConfig","renderWrapper"],$=function(e,t,n,o){return e.find(function(e){return(0,i.u7)(e.x+t.left,e.y+t.top,e.width,e.height,n,o)})},Q=function(e){var t=e.data,n=e.identity,a=void 0===n?A.identity:n,r=e.value,l=void 0===r?A.identity:r,d=e.tile,u=void 0===d?A.tile:d,s=e.valueFormat,c=e.innerPadding,f=void 0===c?A.innerPadding:c,b=e.outerPadding,p=void 0===b?A.outerPadding:b,v=e.leavesOnly,h=void 0===v?A.leavesOnly:v,g=e.width,x=e.height,m=e.margin,C=e.colors,P=void 0===C?A.colors:C,M=e.colorBy,S=void 0===M?A.colorBy:M,w=e.nodeOpacity,O=void 0===w?A.nodeOpacity:w,k=e.borderWidth,T=void 0===k?A.borderWidth:k,j=e.borderColor,E=void 0===j?A.borderColor:j,I=e.enableLabel,z=void 0===I?A.enableLabel:I,R=e.label,W=void 0===R?A.label:R,B=e.labelTextColor,X=void 0===B?A.labelTextColor:B,Y=e.orientLabel,F=void 0===Y?A.orientLabel:Y,H=e.labelSkipSize,U=void 0===H?A.labelSkipSize:H,N=e.isInteractive,Z=void 0===N?A.isInteractive:N,_=e.onMouseMove,G=e.onClick,V=e.tooltip,K=void 0===V?A.tooltip:V,q=e.pixelRatio,J=void 0===q?A.pixelRatio:q,Q=e.role,ee=e.ariaLabel,et=e.ariaLabelledBy,en=e.ariaDescribedBy,eo=(0,o.useRef)(null),ei=(0,i.Xl)(g,x,m),ea=ei.margin,er=ei.innerWidth,el=ei.innerHeight,ed=ei.outerWidth,eu=ei.outerHeight,es=D({data:t,identity:a,value:l,valueFormat:s,leavesOnly:h,width:er,height:el,tile:u,innerPadding:f,outerPadding:p,colors:P,colorBy:S,nodeOpacity:O,borderColor:E,label:W,labelTextColor:X,orientLabel:F,enableParentLabel:!1}).nodes,ec=(0,i.DP)();(0,o.useEffect)(function(){if(null!==eo.current){var e=eo.current.getContext("2d");null!==e&&(eo.current.width=ed*J,eo.current.height=eu*J,e.scale(J,J),e.fillStyle=ec.background,e.fillRect(0,0,ed,eu),e.translate(ea.left,ea.top),es.forEach(function(t){e.fillStyle=t.color,e.fillRect(t.x,t.y,t.width,t.height),T>0&&(e.strokeStyle=t.borderColor,e.lineWidth=T,e.strokeRect(t.x,t.y,t.width,t.height))}),z&&(e.textAlign="center",e.textBaseline="middle",e.font=ec.labels.text.fontSize+"px "+ec.labels.text.fontFamily,es.forEach(function(t){if(t.isLeaf&&(0===U||Math.min(t.width,t.height)>U)){var n=F&&t.height>t.width;e.save(),e.translate(t.x+t.width/2,t.y+t.height/2),e.rotate((0,i.tR)(n?-90:0)),e.fillStyle=t.labelTextColor,e.fillText(""+t.label,0,0),e.restore()}})))}},[eo,es,ed,eu,er,el,ea,T,z,F,U,ec,J]);var ef=(0,L.fS)(),eb=ef.showTooltipFromEvent,ep=ef.hideTooltip,ev=(0,o.useCallback)(function(e){if(null!==eo.current){var t=(0,i.H9)(eo.current,e),n=$(es,ea,t[0],t[1]);void 0!==n?(eb((0,o.createElement)(K,{node:n}),e,"left"),null==_||_(n,e)):ep()}},[eo,es,ea,eb,ep,K,_]),eh=(0,o.useCallback)(function(){ep()},[ep]),eg=(0,o.useCallback)(function(e){if(null!==eo.current){var t=(0,i.H9)(eo.current,e),n=$(es,ea,t[0],t[1]);void 0!==n&&(null==G||G(n,e))}},[eo,es,ea,G]);return(0,y.jsx)("canvas",{ref:eo,width:ed*J,height:eu*J,style:{width:ed,height:eu},onMouseEnter:Z?ev:void 0,onMouseMove:Z?ev:void 0,onMouseLeave:Z?eh:void 0,onClick:Z?eg:void 0,role:Q,"aria-label":ee,"aria-labelledby":et,"aria-describedby":en})},ee=function(e){var t=e.theme,n=e.isInteractive,o=void 0===n?A.isInteractive:n,a=e.animate,r=void 0===a?A.animate:a,l=e.motionConfig,d=void 0===l?A.motionConfig:l,u=e.renderWrapper,s=P(e,J);return(0,y.jsx)(i.mc,{isInteractive:o,animate:r,motionConfig:d,theme:t,renderWrapper:u,children:(0,y.jsx)(Q,C({isInteractive:o},s))})},et=function(e){return(0,y.jsx)(i.KF,{children:function(t){var n=t.width,o=t.height;return(0,y.jsx)(ee,C({width:n,height:o},e))}})}},900431:(e,t,n)=>{"use strict";function o(e){return null==e?null:i(e)}function i(e){if("function"!=typeof e)throw Error();return e}n.d(t,{l:()=>o,m:()=>i})},490751:(e,t,n)=>{"use strict";function o(){return 0}function i(e){return function(){return e}}n.d(t,{A:()=>i,P:()=>o})},934227:(e,t,n)=>{"use strict";function o(e,t,n,o,i){for(var a,r=e.children,l=-1,d=r.length,u=e.value&&(o-t)/e.value;++l<d;)(a=r[l]).y0=n,a.y1=i,a.x0=t,a.x1=t+=a.value*u}n.d(t,{A:()=>o})},830086:(e,t,n)=>{"use strict";function o(e){e.x0=Math.round(e.x0),e.y0=Math.round(e.y0),e.x1=Math.round(e.x1),e.y1=Math.round(e.y1)}n.d(t,{A:()=>o})},640882:e=>{e.exports=function(e,t,n,o){var i=-1,a=null==e?0:e.length;for(o&&a&&(n=e[++i]);++i<a;)n=t(n,e[i],i,e);return n}},161074:e=>{e.exports=function(e){return e.split("")}},401733:e=>{var t=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;e.exports=function(e){return e.match(t)||[]}},554552:e=>{e.exports=function(e){return function(t){return null==e?void 0:e[t]}}},225160:e=>{e.exports=function(e,t,n){var o=-1,i=e.length;t<0&&(t=-t>i?0:i+t),(n=n>i?i:n)<0&&(n+=i),i=t>n?0:n-t>>>0,t>>>=0;for(var a=Array(i);++o<i;)a[o]=e[o+t];return a}},419931:(e,t,n)=>{var o=n(831769),i=n(468090),a=n(468969),r=n(877797);e.exports=function(e,t){return t=o(t,e),null==(e=a(e,t))||delete e[r(i(t))]}},528754:(e,t,n)=>{var o=n(225160);e.exports=function(e,t,n){var i=e.length;return n=void 0===n?i:n,!t&&n>=i?e:o(e,t,n)}},312507:(e,t,n)=>{var o=n(528754),i=n(349698),a=n(763912),r=n(213222);e.exports=function(e){return function(t){var n=i(t=r(t))?a(t):void 0,l=n?n[0]:t.charAt(0),d=n?o(n,1).join(""):t.slice(1);return l[e]()+d}}},745539:(e,t,n)=>{var o=n(640882),i=n(350828),a=n(466645),r=RegExp("['’]","g");e.exports=function(e){return function(t){return o(a(i(t).replace(r,"")),e,"")}}},653138:(e,t,n)=>{var o=n(411331);e.exports=function(e){return o(e)?void 0:e}},124647:(e,t,n)=>{var o=n(554552)({À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",Ç:"C",ç:"c",Ð:"D",ð:"d",È:"E",É:"E",Ê:"E",Ë:"E",è:"e",é:"e",ê:"e",ë:"e",Ì:"I",Í:"I",Î:"I",Ï:"I",ì:"i",í:"i",î:"i",ï:"i",Ñ:"N",ñ:"n",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"O",Ø:"O",ò:"o",ó:"o",ô:"o",õ:"o",ö:"o",ø:"o",Ù:"U",Ú:"U",Û:"U",Ü:"U",ù:"u",ú:"u",û:"u",ü:"u",Ý:"Y",ý:"y",ÿ:"y",Æ:"Ae",æ:"ae",Þ:"Th",þ:"th",ß:"ss",Ā:"A",Ă:"A",Ą:"A",ā:"a",ă:"a",ą:"a",Ć:"C",Ĉ:"C",Ċ:"C",Č:"C",ć:"c",ĉ:"c",ċ:"c",č:"c",Ď:"D",Đ:"D",ď:"d",đ:"d",Ē:"E",Ĕ:"E",Ė:"E",Ę:"E",Ě:"E",ē:"e",ĕ:"e",ė:"e",ę:"e",ě:"e",Ĝ:"G",Ğ:"G",Ġ:"G",Ģ:"G",ĝ:"g",ğ:"g",ġ:"g",ģ:"g",Ĥ:"H",Ħ:"H",ĥ:"h",ħ:"h",Ĩ:"I",Ī:"I",Ĭ:"I",Į:"I",İ:"I",ĩ:"i",ī:"i",ĭ:"i",į:"i",ı:"i",Ĵ:"J",ĵ:"j",Ķ:"K",ķ:"k",ĸ:"k",Ĺ:"L",Ļ:"L",Ľ:"L",Ŀ:"L",Ł:"L",ĺ:"l",ļ:"l",ľ:"l",ŀ:"l",ł:"l",Ń:"N",Ņ:"N",Ň:"N",Ŋ:"N",ń:"n",ņ:"n",ň:"n",ŋ:"n",Ō:"O",Ŏ:"O",Ő:"O",ō:"o",ŏ:"o",ő:"o",Ŕ:"R",Ŗ:"R",Ř:"R",ŕ:"r",ŗ:"r",ř:"r",Ś:"S",Ŝ:"S",Ş:"S",Š:"S",ś:"s",ŝ:"s",ş:"s",š:"s",Ţ:"T",Ť:"T",Ŧ:"T",ţ:"t",ť:"t",ŧ:"t",Ũ:"U",Ū:"U",Ŭ:"U",Ů:"U",Ű:"U",Ų:"U",ũ:"u",ū:"u",ŭ:"u",ů:"u",ű:"u",ų:"u",Ŵ:"W",ŵ:"w",Ŷ:"Y",ŷ:"y",Ÿ:"Y",Ź:"Z",Ż:"Z",Ž:"Z",ź:"z",ż:"z",ž:"z",Ĳ:"IJ",ĳ:"ij",Œ:"Oe",œ:"oe",ŉ:"'n",ſ:"s"});e.exports=o},349698:e=>{var t=RegExp("[\\u200d\ud800-\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]");e.exports=function(e){return t.test(e)}},645434:e=>{var t=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;e.exports=function(e){return t.test(e)}},468969:(e,t,n)=>{var o=n(47422),i=n(225160);e.exports=function(e,t){return t.length<2?e:o(e,i(t,0,-1))}},763912:(e,t,n)=>{var o=n(161074),i=n(349698),a=n(242054);e.exports=function(e){return i(e)?a(e):o(e)}},242054:e=>{var t="\ud800-\udfff",n="[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",o="\ud83c[\udffb-\udfff]",i="[^"+t+"]",a="(?:\ud83c[\udde6-\uddff]){2}",r="[\ud800-\udbff][\udc00-\udfff]",l="(?:"+n+"|"+o+")?",d="[\\ufe0e\\ufe0f]?",u="(?:\\u200d(?:"+[i,a,r].join("|")+")"+d+l+")*",s=RegExp(o+"(?="+o+")|(?:"+[i+n+"?",n,a,r,"["+t+"]"].join("|")+")"+(d+l+u),"g");e.exports=function(e){return e.match(s)||[]}},922225:e=>{var t="\ud800-\udfff",n="\\u2700-\\u27bf",o="a-z\\xdf-\\xf6\\xf8-\\xff",i="A-Z\\xc0-\\xd6\\xd8-\\xde",a="\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",r="['’]",l="["+a+"]",d="["+o+"]",u="[^"+t+a+"\\d+"+n+o+i+"]",s="(?:\ud83c[\udde6-\uddff]){2}",c="[\ud800-\udbff][\udc00-\udfff]",f="["+i+"]",b="(?:"+d+"|"+u+")",p="(?:"+f+"|"+u+")",v="(?:"+r+"(?:d|ll|m|re|s|t|ve))?",h="(?:"+r+"(?:D|LL|M|RE|S|T|VE))?",g="(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\ud83c[\udffb-\udfff])?",x="[\\ufe0e\\ufe0f]?",L="(?:\\u200d(?:"+["[^"+t+"]",s,c].join("|")+")"+x+g+")*",m="(?:"+["["+n+"]",s,c].join("|")+")"+(x+g+L),y=RegExp([f+"?"+d+"+"+v+"(?="+[l,f,"$"].join("|")+")",p+"+"+h+"(?="+[l,f+b,"$"].join("|")+")",f+"?"+b+"+"+v,f+"+"+h,"\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])","\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])","\\d+",m].join("|"),"g");e.exports=function(e){return e.match(y)||[]}},350828:(e,t,n)=>{var o=n(124647),i=n(213222),a=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,r=RegExp("[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]","g");e.exports=function(e){return(e=i(e))&&e.replace(a,o).replace(r,"")}},590179:(e,t,n)=>{var o=n(634932),i=n(509999),a=n(419931),r=n(831769),l=n(921791),d=n(653138),u=n(538816),s=n(483349),c=u(function(e,t){var n={};if(null==e)return n;var u=!1;t=o(t,function(t){return t=r(t,e),u||(u=t.length>1),t}),l(e,s(e),n),u&&(n=i(n,7,d));for(var c=t.length;c--;)a(n,t[c]);return n});e.exports=c},190128:(e,t,n)=>{var o=n(745539),i=n(555808),a=o(function(e,t,n){return e+(n?" ":"")+i(t)});e.exports=a},555808:(e,t,n)=>{var o=n(312507)("toUpperCase");e.exports=o},466645:(e,t,n)=>{var o=n(401733),i=n(645434),a=n(213222),r=n(922225);e.exports=function(e,t,n){return(e=a(e),void 0===(t=n?void 0:t))?i(e)?r(e):o(e):e.match(t)||[]}}}]);