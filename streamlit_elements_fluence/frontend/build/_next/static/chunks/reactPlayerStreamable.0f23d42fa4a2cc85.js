(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7627],{356146:(e,t,r)=>{var s=Object.create,a=Object.defineProperty,o=Object.getOwnPropertyDescriptor,l=Object.getOwnPropertyNames,i=Object.getPrototypeOf,n=Object.prototype.hasOwnProperty,p=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,h=(e,t,r,s)=>{if(t&&"object"==typeof t||"function"==typeof t)for(let i of l(t))n.call(e,i)||i===r||a(e,i,{get:()=>t[i],enumerable:!(s=o(t,i))||s.enumerable});return e},u=(e,t,r)=>(p(e,"symbol"!=typeof t?t+"":t,r),r),y={};((e,t)=>{for(var r in t)a(e,r,{get:t[r],enumerable:!0})})(y,{default:()=>f}),e.exports=h(a({},"__esModule",{value:!0}),y);var c=((e,t,r)=>(r=null!=e?s(i(e)):{},h(!t&&e&&e.__esModule?r:a(r,"default",{value:e,enumerable:!0}),e)))(r(296540)),d=r(287032),m=r(987430);class f extends c.Component{constructor(){super(...arguments),u(this,"callPlayer",d.callPlayer),u(this,"duration",null),u(this,"currentTime",null),u(this,"secondsLoaded",null),u(this,"mute",()=>{this.callPlayer("mute")}),u(this,"unmute",()=>{this.callPlayer("unmute")}),u(this,"ref",e=>{this.iframe=e})}componentDidMount(){this.props.onMount&&this.props.onMount(this)}load(e){(0,d.getSDK)("https://cdn.embed.ly/player-0.1.0.min.js","playerjs").then(e=>{this.iframe&&(this.player=new e.Player(this.iframe),this.player.setLoop(this.props.loop),this.player.on("ready",this.props.onReady),this.player.on("play",this.props.onPlay),this.player.on("pause",this.props.onPause),this.player.on("seeked",this.props.onSeek),this.player.on("ended",this.props.onEnded),this.player.on("error",this.props.onError),this.player.on("timeupdate",({duration:e,seconds:t})=>{this.duration=e,this.currentTime=t}),this.player.on("buffered",({percent:e})=>{this.duration&&(this.secondsLoaded=this.duration*e)}),this.props.muted&&this.player.mute())},this.props.onError)}play(){this.callPlayer("play")}pause(){this.callPlayer("pause")}stop(){}seekTo(e,t=!0){this.callPlayer("setCurrentTime",e),t||this.pause()}setVolume(e){this.callPlayer("setVolume",100*e)}setLoop(e){this.callPlayer("setLoop",e)}getDuration(){return this.duration}getCurrentTime(){return this.currentTime}getSecondsLoaded(){return this.secondsLoaded}render(){let e=this.props.url.match(m.MATCH_URL_STREAMABLE)[1];return c.default.createElement("iframe",{ref:this.ref,src:`https://streamable.com/o/${e}`,frameBorder:"0",scrolling:"no",style:{width:"100%",height:"100%"},allow:"encrypted-media; autoplay; fullscreen;"})}}u(f,"displayName","Streamable"),u(f,"canPlay",m.canPlay.streamable)}}]);