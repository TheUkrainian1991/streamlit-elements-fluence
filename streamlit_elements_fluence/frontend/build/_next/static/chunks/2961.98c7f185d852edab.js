"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2961],{492961:(r,t,e)=>{e.r(t),e.d(t,{default:()=>R});var n=e(860718),i=e(58168),a=e(198587),o=e(296540),c=e(440961),u=e(221529),s=e(474848);let l=function(r){var t=r.children,e=r.defer,i=void 0!==e&&e,a=r.fallback,c=o.useState(!1),l=(0,n.A)(c,2),d=l[0],f=l[1];return(0,u.A)(function(){i||f(!0)},[i]),o.useEffect(function(){i&&f(!0)},[i]),(0,s.jsx)(o.Fragment,{children:d?t:void 0===a?null:a})};var d=e(8174),f=e(353496),p=e(81529),h=e(251019),v=e(711390),g=e(943671),m=e(928309),A=e(816368),y=e(994653),w=e(473556),b=e(634164),T=e(678967),S=e(821715),P=e(934467),x=["anchor","classes","className","width","style"],k=(0,T.Ay)("div",{shouldForwardProp:S.A})(function(r){var t=r.theme,e=r.ownerState;return(0,i.A)({position:"fixed",top:0,left:0,bottom:0,zIndex:t.zIndex.drawer-1},"left"===e.anchor&&{right:"auto"},"right"===e.anchor&&{left:"auto",right:0},"top"===e.anchor&&{bottom:"auto",right:0},"bottom"===e.anchor&&{top:"auto",bottom:0,right:0})}),M=o.forwardRef(function(r,t){var e=r.anchor,n=r.classes,o=void 0===n?{}:n,c=r.className,u=r.width,l=r.style,d=(0,a.A)(r,x);return(0,s.jsx)(k,(0,i.A)({className:(0,b.A)("PrivateSwipeArea-root",o.root,o["anchor".concat((0,P.A)(e))],c),ref:t,style:(0,i.A)((0,w.A)({},(0,f.$b)(e)?"width":"height",u),l),ownerState:r},d))}),E=["BackdropProps"],B=["anchor","disableBackdropTransition","disableDiscovery","disableSwipeToOpen","hideBackdrop","hysteresis","allowSwipeInChildren","minFlingVelocity","ModalProps","onClose","onOpen","open","PaperProps","SwipeAreaProps","swipeAreaWidth","transitionDuration","variant"],H=null;function X(r,t,e){return"right"===r?e.body.offsetWidth-t[0].pageX:t[0].pageX}function Y(r,t,e){return"bottom"===r?e.innerHeight-t[0].clientY:t[0].clientY}function C(r,t){return r?t.clientWidth:t.clientHeight}function W(r,t,e,n){return Math.min(Math.max(e?t-r:n+t-r,0),n)}var D="undefined"!=typeof navigator&&/iPad|iPhone|iPod/.test(navigator.userAgent);let R=o.forwardRef(function(r,t){var e=(0,d.b)({name:"MuiSwipeableDrawer",props:r}),u=(0,A.A)(),w={enter:u.transitions.duration.enteringScreen,exit:u.transitions.duration.leavingScreen},b=e.anchor,T=void 0===b?"left":b,S=e.disableBackdropTransition,P=void 0!==S&&S,x=e.disableDiscovery,k=void 0!==x&&x,R=e.disableSwipeToOpen,L=void 0===R?D:R,j=e.hideBackdrop,$=e.hysteresis,F=void 0===$?.52:$,N=e.allowSwipeInChildren,O=void 0!==N&&N,I=e.minFlingVelocity,V=void 0===I?450:I,_=e.ModalProps,z=(void 0===_?{}:_).BackdropProps,q=e.onClose,G=e.onOpen,J=e.open,K=void 0!==J&&J,Q=e.PaperProps,U=void 0===Q?{}:Q,Z=e.SwipeAreaProps,rr=e.swipeAreaWidth,rt=void 0===rr?20:rr,re=e.transitionDuration,rn=void 0===re?w:re,ri=e.variant,ra=void 0===ri?"temporary":ri,ro=(0,a.A)(e.ModalProps,E),rc=(0,a.A)(e,B),ru=o.useState(!1),rs=(0,n.A)(ru,2),rl=rs[0],rd=rs[1],rf=o.useRef({isSwiping:null}),rp=o.useRef(),rh=o.useRef(),rv=o.useRef(),rg=(0,p.A)(U.ref,rv),rm=o.useRef(!1),rA=o.useRef();(0,m.A)(function(){rA.current=null},[K]);var ry=o.useCallback(function(r){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},e=t.mode,n=void 0===e?null:e,i=t.changeTransition,a=void 0===i||i,o=-1!==["right","bottom"].indexOf((0,f.iB)(u,T))?1:-1,c=(0,f.$b)(T),s=c?"translate(".concat(o*r,"px, 0)"):"translate(0, ".concat(o*r,"px)"),l=rv.current.style;l.webkitTransform=s,l.transform=s;var d="";if(n&&(d=u.transitions.create("all",(0,y.c)({easing:void 0,style:void 0,timeout:rn},{mode:n}))),a&&(l.webkitTransition=d,l.transition=d),!P&&!j){var p=rh.current.style;p.opacity=1-r/C(c,rv.current),a&&(p.webkitTransition=d,p.transition=d)}},[T,P,j,u,rn]),rw=(0,g.A)(function(r){if(rm.current){if(H=null,rm.current=!1,c.flushSync(function(){rd(!1)}),!rf.current.isSwiping){rf.current.isSwiping=null;return}rf.current.isSwiping=null;var t,e=(0,f.iB)(u,T),n=(0,f.$b)(T);t=n?X(e,r.changedTouches,(0,h.A)(r.currentTarget)):Y(e,r.changedTouches,(0,v.A)(r.currentTarget));var i=n?rf.current.startX:rf.current.startY,a=C(n,rv.current),o=W(t,i,K,a),s=o/a;if(Math.abs(rf.current.velocity)>V&&(rA.current=1e3*Math.abs((a-o)/rf.current.velocity)),K){rf.current.velocity>V||s>F?q():ry(0,{mode:"exit"});return}rf.current.velocity<-V||1-s>F?G():ry(C(n,rv.current),{mode:"enter"})}}),rb=function(){var r=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(!rl){(r||!(k&&O))&&c.flushSync(function(){rd(!0)});var t=(0,f.$b)(T);!K&&rv.current&&ry(C(t,rv.current)+(k?15:-20),{changeTransition:!1}),rf.current.velocity=0,rf.current.lastTime=null,rf.current.lastTranslate=null,rf.current.paperHit=!1,rm.current=!0}},rT=(0,g.A)(function(r){if(rv.current&&rm.current&&(null===H||H===rf.current)){rb(!0);var t,e,n,i,a,o,c,s,l=(0,f.iB)(u,T),d=(0,f.$b)(T),p=X(l,r.touches,(0,h.A)(r.currentTarget)),g=Y(l,r.touches,(0,v.A)(r.currentTarget));if(K&&rv.current.contains(r.target)&&null===H){if(e=(t={domTreeShapes:function(r,t){for(var e=[];r&&r!==t.parentElement;){var n=(0,v.A)(t).getComputedStyle(r);"absolute"===n.getPropertyValue("position")||"hidden"===n.getPropertyValue("overflow-x")||(r.clientWidth>0&&r.scrollWidth>r.clientWidth||r.clientHeight>0&&r.scrollHeight>r.clientHeight)&&e.push(r),r=r.parentElement}return e}(r.target,rv.current),start:d?rf.current.startX:rf.current.startY,current:d?p:g,anchor:T}).domTreeShapes,n=t.start,i=t.current,a=t.anchor,o={x:"scrollLeft",y:"scrollTop"},c={x:"scrollWidth",y:"scrollHeight"},s={x:"clientWidth",y:"clientHeight"},e.some(function(r){var t=i>=n;("top"===a||"left"===a)&&(t=!t);var e="left"===a||"right"===a?"x":"y",u=Math.round(r[o[e]]),l=u+r[s[e]]<r[c[e]];return!!t&&!!l||!t&&u>0})){H=!0;return}H=rf.current}if(null==rf.current.isSwiping){var m=Math.abs(p-rf.current.startX),A=Math.abs(g-rf.current.startY),y=d?m>A&&m>3:A>m&&A>3;if(y&&r.cancelable&&r.preventDefault(),!0===y||(d?A>3:m>3)){if(rf.current.isSwiping=y,!y){rw(r);return}rf.current.startX=p,rf.current.startY=g,k||K||(d?rf.current.startX-=20:rf.current.startY-=20)}}if(rf.current.isSwiping){var w=C(d,rv.current),b=d?rf.current.startX:rf.current.startY;K&&!rf.current.paperHit&&(b=Math.min(b,w));var S=W(d?p:g,b,K,w);if(K){if(rf.current.paperHit)0===S&&(rf.current.startX=p,rf.current.startY=g);else{if(!(d?p<w:g<w))return;rf.current.paperHit=!0,rf.current.startX=p,rf.current.startY=g}}null===rf.current.lastTranslate&&(rf.current.lastTranslate=S,rf.current.lastTime=performance.now()+1);var P=(S-rf.current.lastTranslate)/(performance.now()-rf.current.lastTime)*1e3;rf.current.velocity=.4*rf.current.velocity+.6*P,rf.current.lastTranslate=S,rf.current.lastTime=performance.now(),r.cancelable&&r.preventDefault(),ry(S)}}}),rS=(0,g.A)(function(r){if(!r.defaultPrevented&&!r.defaultMuiPrevented&&(!K||!j&&rh.current.contains(r.target)||rv.current.contains(r.target))){var t,e=(0,f.iB)(u,T),n=(0,f.$b)(T),i=X(e,r.touches,(0,h.A)(r.currentTarget)),a=Y(e,r.touches,(0,v.A)(r.currentTarget));if(!K){if(L||!(r.target===rp.current||null!=(t=rv.current)&&t.contains(r.target)&&("function"==typeof O?O(r,rp.current,rv.current):O)))return;if(n){if(i>rt)return}else if(a>rt)return}r.defaultMuiPrevented=!0,H=null,rf.current.startX=i,rf.current.startY=a,rb()}});return o.useEffect(function(){if("temporary"===ra){var r=(0,h.A)(rv.current);return r.addEventListener("touchstart",rS),r.addEventListener("touchmove",rT,{passive:!K}),r.addEventListener("touchend",rw),function(){r.removeEventListener("touchstart",rS),r.removeEventListener("touchmove",rT,{passive:!K}),r.removeEventListener("touchend",rw)}}},[ra,K,rS,rT,rw]),o.useEffect(function(){return function(){H===rf.current&&(H=null)}},[]),o.useEffect(function(){K||rd(!1)},[K]),(0,s.jsxs)(o.Fragment,{children:[(0,s.jsx)(f.Ay,(0,i.A)({open:"temporary"===ra&&!!rl||K,variant:ra,ModalProps:(0,i.A)({BackdropProps:(0,i.A)({},z,{ref:rh})},"temporary"===ra&&{keepMounted:!0},ro),hideBackdrop:j,PaperProps:(0,i.A)({},U,{style:(0,i.A)({pointerEvents:"temporary"!==ra||K||O?"":"none"},U.style),ref:rg}),anchor:T,transitionDuration:rA.current||rn,onClose:q,ref:t},rc)),!L&&"temporary"===ra&&(0,s.jsx)(l,{children:(0,s.jsx)(M,(0,i.A)({anchor:T,ref:rp,width:rt},Z))})]})})},251019:(r,t,e)=>{e.d(t,{A:()=>n});let n=e(532325).A},928309:(r,t,e)=>{e.d(t,{A:()=>n});let n=e(221529).A},943671:(r,t,e)=>{e.d(t,{A:()=>n});let n=e(171547).A}}]);