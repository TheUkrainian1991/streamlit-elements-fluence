(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7570],{422385:(e,t,r)=>{var s=Object.create,o=Object.defineProperty,a=Object.getOwnPropertyDescriptor,l=Object.getOwnPropertyNames,n=Object.getPrototypeOf,i=Object.prototype.hasOwnProperty,p=(e,t,r)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,u=(e,t,r,s)=>{if(t&&"object"==typeof t||"function"==typeof t)for(let n of l(t))i.call(e,n)||n===r||o(e,n,{get:()=>t[n],enumerable:!(s=a(t,n))||s.enumerable});return e},h=(e,t,r)=>(p(e,"symbol"!=typeof t?t+"":t,r),r),d={};((e,t)=>{for(var r in t)o(e,r,{get:t[r],enumerable:!0})})(d,{default:()=>f}),e.exports=u(o({},"__esModule",{value:!0}),d);var c=((e,t,r)=>(r=null!=e?s(n(e)):{},u(!t&&e&&e.__esModule?r:o(r,"default",{value:e,enumerable:!0}),e)))(r(296540)),y=r(287032),m=r(987430);class f extends c.Component{constructor(){super(...arguments),h(this,"callPlayer",y.callPlayer),h(this,"duration",null),h(this,"currentTime",null),h(this,"secondsLoaded",null),h(this,"mute",()=>{}),h(this,"unmute",()=>{}),h(this,"ref",e=>{this.iframe=e})}componentDidMount(){this.props.onMount&&this.props.onMount(this)}load(e){(0,y.getSDK)("https://widget.mixcloud.com/media/js/widgetApi.js","Mixcloud").then(e=>{this.player=e.PlayerWidget(this.iframe),this.player.ready.then(()=>{this.player.events.play.on(this.props.onPlay),this.player.events.pause.on(this.props.onPause),this.player.events.ended.on(this.props.onEnded),this.player.events.error.on(this.props.error),this.player.events.progress.on((e,t)=>{this.currentTime=e,this.duration=t}),this.props.onReady()})},this.props.onError)}play(){this.callPlayer("play")}pause(){this.callPlayer("pause")}stop(){}seekTo(e,t=!0){this.callPlayer("seek",e),t||this.pause()}setVolume(e){}getDuration(){return this.duration}getCurrentTime(){return this.currentTime}getSecondsLoaded(){return null}render(){let{url:e,config:t}=this.props,r=e.match(m.MATCH_URL_MIXCLOUD)[1],s=(0,y.queryString)({...t.options,feed:`/${r}/`});return c.default.createElement("iframe",{key:r,ref:this.ref,style:{width:"100%",height:"100%"},src:`https://www.mixcloud.com/widget/iframe/?${s}`,frameBorder:"0",allow:"autoplay"})}}h(f,"displayName","Mixcloud"),h(f,"canPlay",m.canPlay.mixcloud),h(f,"loopOnEnded",!0)}}]);