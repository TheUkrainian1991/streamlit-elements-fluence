"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3216],{513216:(e,t,i)=>{i.r(t),i.d(t,{Mesh:()=>Q,ResponsiveVoronoi:()=>J,Voronoi:()=>Y,computeMesh:()=>K,computeMeshPoints:()=>H,defaultVoronoiProps:()=>R,renderDebugToCanvas:()=>en,renderDelaunayPointsToCanvas:()=>et,renderVoronoiCellToCanvas:()=>ei,renderVoronoiToCanvas:()=>ee,useMesh:()=>q,useMeshEvents:()=>Z,useVoronoi:()=>O,useVoronoiLayerContext:()=>B,useVoronoiMesh:()=>V});var n=i(296540),l=i(754522),o=i(411827);let r=(3+8881784197001252e-31)*11102230246251565e-32;function s(e,t,i,n,l){let o,r,s,h;let a=t[0],u=n[0],d=0,c=0;u>a==u>-a?(o=a,a=t[++d]):(o=u,u=n[++c]);let f=0;if(d<e&&c<i)for(u>a==u>-a?(r=a+o,s=o-(r-a),a=t[++d]):(r=u+o,s=o-(r-u),u=n[++c]),o=r,0!==s&&(l[f++]=s);d<e&&c<i;)u>a==u>-a?(h=(r=o+a)-o,s=o-(r-h)+(a-h),a=t[++d]):(h=(r=o+u)-o,s=o-(r-h)+(u-h),u=n[++c]),o=r,0!==s&&(l[f++]=s);for(;d<e;)h=(r=o+a)-o,s=o-(r-h)+(a-h),a=t[++d],o=r,0!==s&&(l[f++]=s);for(;c<i;)h=(r=o+u)-o,s=o-(r-h)+(u-h),u=n[++c],o=r,0!==s&&(l[f++]=s);return(0!==o||0===f)&&(l[f++]=o),f}function h(e){return new Float64Array(e)}let a=(3+17763568394002505e-31)*11102230246251565e-32,u=(2+13322676295501878e-31)*11102230246251565e-32,d=(9+7105427357601002e-30)*11102230246251565e-32*11102230246251565e-32,c=h(4),f=h(8),g=h(12),_=h(16),v=h(4);function m(e,t,i,n,l,o){let h=(t-o)*(i-l),m=(e-l)*(n-o),y=h-m,x=Math.abs(h+m);return Math.abs(y)>=a*x?y:-function(e,t,i,n,l,o,h){let a,m,y,x,p,M,b,k,w,T,C,P,A,L,S,E,j,$;let I=e-l,W=i-l,F=t-o,z=n-o;L=I*z,b=(M=0x8000001*I)-(M-I),k=I-b,w=(M=0x8000001*z)-(M-z),S=k*(T=z-w)-(L-b*w-k*w-b*T),E=F*W,b=(M=0x8000001*F)-(M-F),k=F-b,w=(M=0x8000001*W)-(M-W),C=S-(j=k*(T=W-w)-(E-b*w-k*w-b*T)),p=S-C,c[0]=S-(C+p)+(p-j),p=(P=L+C)-L,C=(A=L-(P-p)+(C-p))-E,p=A-C,c[1]=A-(C+p)+(p-E),p=($=P+C)-P,c[2]=P-($-p)+(C-p),c[3]=$;let R=function(e,t){let i=t[0];for(let e=1;e<4;e++)i+=t[e];return i}(0,c),D=u*h;if(R>=D||-R>=D||(p=e-I,a=e-(I+p)+(p-l),p=i-W,y=i-(W+p)+(p-l),p=t-F,m=t-(F+p)+(p-o),p=n-z,x=n-(z+p)+(p-o),0===a&&0===m&&0===y&&0===x)||(D=d*h+r*Math.abs(R),(R+=I*x+z*a-(F*y+W*m))>=D||-R>=D))return R;L=a*z,b=(M=0x8000001*a)-(M-a),k=a-b,w=(M=0x8000001*z)-(M-z),S=k*(T=z-w)-(L-b*w-k*w-b*T),E=m*W,b=(M=0x8000001*m)-(M-m),k=m-b,w=(M=0x8000001*W)-(M-W),C=S-(j=k*(T=W-w)-(E-b*w-k*w-b*T)),p=S-C,v[0]=S-(C+p)+(p-j),p=(P=L+C)-L,C=(A=L-(P-p)+(C-p))-E,p=A-C,v[1]=A-(C+p)+(p-E),p=($=P+C)-P,v[2]=P-($-p)+(C-p),v[3]=$;let N=s(4,c,4,v,f);L=I*x,b=(M=0x8000001*I)-(M-I),k=I-b,w=(M=0x8000001*x)-(M-x),S=k*(T=x-w)-(L-b*w-k*w-b*T),E=F*y,b=(M=0x8000001*F)-(M-F),k=F-b,w=(M=0x8000001*y)-(M-y),C=S-(j=k*(T=y-w)-(E-b*w-k*w-b*T)),p=S-C,v[0]=S-(C+p)+(p-j),p=(P=L+C)-L,C=(A=L-(P-p)+(C-p))-E,p=A-C,v[1]=A-(C+p)+(p-E),p=($=P+C)-P,v[2]=P-($-p)+(C-p),v[3]=$;let U=s(N,f,4,v,g);L=a*x,b=(M=0x8000001*a)-(M-a),k=a-b,w=(M=0x8000001*x)-(M-x),S=k*(T=x-w)-(L-b*w-k*w-b*T),E=m*y,b=(M=0x8000001*m)-(M-m),k=m-b,w=(M=0x8000001*y)-(M-y),C=S-(j=k*(T=y-w)-(E-b*w-k*w-b*T)),p=S-C,v[0]=S-(C+p)+(p-j),p=(P=L+C)-L,C=(A=L-(P-p)+(C-p))-E,p=A-C,v[1]=A-(C+p)+(p-E),p=($=P+C)-P,v[2]=P-($-p)+(C-p),v[3]=$;let H=s(U,g,4,v,_);return _[H-1]}(e,t,i,n,l,o,x)}h(4),h(4),h(4),h(4),h(4),h(4),h(4),h(4),h(4),h(8),h(8),h(8),h(4),h(8),h(8),h(8),h(12);let y=h(192),x=h(192);h(4),h(4),h(4),h(4),h(4),h(4),h(4),h(4),h(8),h(8),h(8),h(8),h(8),h(8),h(8),h(8),h(8),h(4),h(4),h(4),h(8),h(16),h(16),h(16),h(32),h(32),h(48),h(64),h(1152),h(1152),h(4),h(4),h(4),h(4),h(4),h(4),h(4),h(4),h(4),h(4),h(24),h(24),h(24),h(24),h(24),h(24),h(24),h(24),h(24),h(24),h(1152),h(1152),h(1152),h(1152),h(1152),h(2304),h(2304),h(3456),h(5760),h(8),h(8),h(8),h(16),h(24),h(48),h(48),h(96),h(192),h(384),h(384),h(384),h(768),h(96),h(96),h(96),h(1152);let p=new Uint32Array(512);class M{static from(e,t=T,i=C){let n=e.length,l=new Float64Array(2*n);for(let o=0;o<n;o++){let n=e[o];l[2*o]=t(n),l[2*o+1]=i(n)}return new M(l)}constructor(e){let t=e.length>>1;if(t>0&&"number"!=typeof e[0])throw Error("Expected coords to contain numbers.");this.coords=e;let i=Math.max(2*t-5,0);this._triangles=new Uint32Array(3*i),this._halfedges=new Int32Array(3*i),this._hashSize=Math.ceil(Math.sqrt(t)),this._hullPrev=new Uint32Array(t),this._hullNext=new Uint32Array(t),this._hullTri=new Uint32Array(t),this._hullHash=new Int32Array(this._hashSize),this._ids=new Uint32Array(t),this._dists=new Float64Array(t),this.update()}update(){let e,t,i;let{coords:n,_hullPrev:l,_hullNext:o,_hullTri:r,_hullHash:s}=this,h=n.length>>1,a=1/0,u=1/0,d=-1/0,c=-1/0;for(let e=0;e<h;e++){let t=n[2*e],i=n[2*e+1];t<a&&(a=t),i<u&&(u=i),t>d&&(d=t),i>c&&(c=i),this._ids[e]=e}let f=(a+d)/2,g=(u+c)/2;for(let t=0,i=1/0;t<h;t++){let l=b(f,g,n[2*t],n[2*t+1]);l<i&&(e=t,i=l)}let _=n[2*e],v=n[2*e+1];for(let i=0,l=1/0;i<h;i++){if(i===e)continue;let o=b(_,v,n[2*i],n[2*i+1]);o<l&&o>0&&(t=i,l=o)}let y=n[2*t],x=n[2*t+1],p=1/0;for(let l=0;l<h;l++){if(l===e||l===t)continue;let o=function(e,t,i,n,l,o){let r=i-e,s=n-t,h=l-e,a=o-t,u=r*r+s*s,d=h*h+a*a,c=.5/(r*a-s*h),f=(a*u-s*d)*c,g=(r*d-h*u)*c;return f*f+g*g}(_,v,y,x,n[2*l],n[2*l+1]);o<p&&(i=l,p=o)}let M=n[2*i],w=n[2*i+1];if(p===1/0){for(let e=0;e<h;e++)this._dists[e]=n[2*e]-n[0]||n[2*e+1]-n[1];k(this._ids,this._dists,0,h-1);let e=new Uint32Array(h),t=0;for(let i=0,n=-1/0;i<h;i++){let l=this._ids[i],o=this._dists[l];o>n&&(e[t++]=l,n=o)}this.hull=e.subarray(0,t),this.triangles=new Uint32Array(0),this.halfedges=new Uint32Array(0);return}if(0>m(_,v,y,x,M,w)){let e=t,n=y,l=x;t=i,y=M,x=w,i=e,M=n,w=l}let T=function(e,t,i,n,l,o){let r=i-e,s=n-t,h=l-e,a=o-t,u=r*r+s*s,d=h*h+a*a,c=.5/(r*a-s*h);return{x:e+(a*u-s*d)*c,y:t+(r*d-h*u)*c}}(_,v,y,x,M,w);this._cx=T.x,this._cy=T.y;for(let e=0;e<h;e++)this._dists[e]=b(n[2*e],n[2*e+1],T.x,T.y);k(this._ids,this._dists,0,h-1),this._hullStart=e;let C=3;o[e]=l[i]=t,o[t]=l[e]=i,o[i]=l[t]=e,r[e]=0,r[t]=1,r[i]=2,s.fill(-1),s[this._hashKey(_,v)]=e,s[this._hashKey(y,x)]=t,s[this._hashKey(M,w)]=i,this.trianglesLen=0,this._addTriangle(e,t,i,-1,-1,-1);for(let h=0,a,u;h<this._ids.length;h++){let d=this._ids[h],c=n[2*d],f=n[2*d+1];if(h>0&&2220446049250313e-31>=Math.abs(c-a)&&2220446049250313e-31>=Math.abs(f-u)||(a=c,u=f,d===e||d===t||d===i))continue;let g=0;for(let e=0,t=this._hashKey(c,f);e<this._hashSize&&(-1===(g=s[(t+e)%this._hashSize])||g===o[g]);e++);let _=g=l[g],v;for(;v=o[_],m(c,f,n[2*_],n[2*_+1],n[2*v],n[2*v+1])>=0;)if((_=v)===g){_=-1;break}if(-1===_)continue;let y=this._addTriangle(_,d,o[_],-1,-1,r[_]);r[d]=this._legalize(y+2),r[_]=y,C++;let x=o[_];for(;v=o[x],0>m(c,f,n[2*x],n[2*x+1],n[2*v],n[2*v+1]);)y=this._addTriangle(x,d,v,r[d],-1,r[x]),r[d]=this._legalize(y+2),o[x]=x,C--,x=v;if(_===g)for(;0>m(c,f,n[2*(v=l[_])],n[2*v+1],n[2*_],n[2*_+1]);)y=this._addTriangle(v,d,_,-1,r[_],r[v]),this._legalize(y+2),r[v]=y,o[_]=_,C--,_=v;this._hullStart=l[d]=_,o[_]=l[x]=d,o[d]=x,s[this._hashKey(c,f)]=d,s[this._hashKey(n[2*_],n[2*_+1])]=_}this.hull=new Uint32Array(C);for(let e=0,t=this._hullStart;e<C;e++)this.hull[e]=t,t=o[t];this.triangles=this._triangles.subarray(0,this.trianglesLen),this.halfedges=this._halfedges.subarray(0,this.trianglesLen)}_hashKey(e,t){return Math.floor(function(e,t){let i=e/(Math.abs(e)+Math.abs(t));return(t>0?3-i:1+i)/4}(e-this._cx,t-this._cy)*this._hashSize)%this._hashSize}_legalize(e){let{_triangles:t,_halfedges:i,coords:n}=this,l=0,o=0;for(;;){let r=i[e],s=e-e%3;if(o=s+(e+2)%3,-1===r){if(0===l)break;e=p[--l];continue}let h=r-r%3,a=s+(e+1)%3,u=h+(r+2)%3,d=t[o],c=t[e],f=t[a],g=t[u];if(function(e,t,i,n,l,o,r,s){let h=e-r,a=t-s,u=i-r,d=n-s,c=l-r,f=o-s,g=u*u+d*d,_=c*c+f*f;return h*(d*_-g*f)-a*(u*_-g*c)+(h*h+a*a)*(u*f-d*c)<0}(n[2*d],n[2*d+1],n[2*c],n[2*c+1],n[2*f],n[2*f+1],n[2*g],n[2*g+1])){t[e]=g,t[r]=d;let n=i[u];if(-1===n){let t=this._hullStart;do{if(this._hullTri[t]===u){this._hullTri[t]=e;break}t=this._hullPrev[t]}while(t!==this._hullStart)}this._link(e,n),this._link(r,i[o]),this._link(o,u);let s=h+(r+1)%3;l<p.length&&(p[l++]=s)}else{if(0===l)break;e=p[--l]}}return o}_link(e,t){this._halfedges[e]=t,-1!==t&&(this._halfedges[t]=e)}_addTriangle(e,t,i,n,l,o){let r=this.trianglesLen;return this._triangles[r]=e,this._triangles[r+1]=t,this._triangles[r+2]=i,this._link(r,n),this._link(r+1,l),this._link(r+2,o),this.trianglesLen+=3,r}}function b(e,t,i,n){let l=e-i,o=t-n;return l*l+o*o}function k(e,t,i,n){if(n-i<=20)for(let l=i+1;l<=n;l++){let n=e[l],o=t[n],r=l-1;for(;r>=i&&t[e[r]]>o;)e[r+1]=e[r--];e[r+1]=n}else{let l=i+n>>1,o=i+1,r=n;w(e,l,o),t[e[i]]>t[e[n]]&&w(e,i,n),t[e[o]]>t[e[n]]&&w(e,o,n),t[e[i]]>t[e[o]]&&w(e,i,o);let s=e[o],h=t[s];for(;;){do o++;while(t[e[o]]<h);do r--;while(t[e[r]]>h);if(r<o)break;w(e,o,r)}e[i+1]=e[r],e[r]=s,n-o+1>=r-i?(k(e,t,o,n),k(e,t,i,r-1)):(k(e,t,i,r-1),k(e,t,o,n))}}function w(e,t,i){let n=e[t];e[t]=e[i],e[i]=n}function T(e){return e[0]}function C(e){return e[1]}class P{constructor(){this._x0=this._y0=this._x1=this._y1=null,this._=""}moveTo(e,t){this._+=`M${this._x0=this._x1=+e},${this._y0=this._y1=+t}`}closePath(){null!==this._x1&&(this._x1=this._x0,this._y1=this._y0,this._+="Z")}lineTo(e,t){this._+=`L${this._x1=+e},${this._y1=+t}`}arc(e,t,i){e=+e,t=+t;let n=e+(i=+i),l=t;if(i<0)throw Error("negative radius");null===this._x1?this._+=`M${n},${l}`:(Math.abs(this._x1-n)>1e-6||Math.abs(this._y1-l)>1e-6)&&(this._+="L"+n+","+l),i&&(this._+=`A${i},${i},0,1,1,${e-i},${t}A${i},${i},0,1,1,${this._x1=n},${this._y1=l}`)}rect(e,t,i,n){this._+=`M${this._x0=this._x1=+e},${this._y0=this._y1=+t}h${+i}v${+n}h${-i}Z`}value(){return this._||null}}class A{constructor(){this._=[]}moveTo(e,t){this._.push([e,t])}closePath(){this._.push(this._[0].slice())}lineTo(e,t){this._.push([e,t])}value(){return this._.length?this._:null}}class L{constructor(e,[t,i,n,l]=[0,0,960,500]){if(!((n=+n)>=(t=+t))||!((l=+l)>=(i=+i)))throw Error("invalid bounds");this.delaunay=e,this._circumcenters=new Float64Array(2*e.points.length),this.vectors=new Float64Array(2*e.points.length),this.xmax=n,this.xmin=t,this.ymax=l,this.ymin=i,this._init()}update(){return this.delaunay.update(),this._init(),this}_init(){let e,t;let{delaunay:{points:i,hull:n,triangles:l},vectors:o}=this,r=this.circumcenters=this._circumcenters.subarray(0,l.length/3*2);for(let o=0,s=0,h=l.length,a,u;o<h;o+=3,s+=2){let h=2*l[o],d=2*l[o+1],c=2*l[o+2],f=i[h],g=i[h+1],_=i[d],v=i[d+1],m=i[c],y=i[c+1],x=_-f,p=v-g,M=m-f,b=y-g,k=(x*b-p*M)*2;if(1e-9>Math.abs(k)){if(void 0===e){for(let l of(e=t=0,n))e+=i[2*l],t+=i[2*l+1];e/=n.length,t/=n.length}let l=1e9*Math.sign((e-f)*b-(t-g)*M);a=(f+m)/2-l*b,u=(g+y)/2+l*M}else{let e=1/k,t=x*x+p*p,i=M*M+b*b;a=f+(b*t-p*i)*e,u=g+(x*i-M*t)*e}r[s]=a,r[s+1]=u}let s=n[n.length-1],h,a=4*s,u,d=i[2*s],c,f=i[2*s+1];o.fill(0);for(let e=0;e<n.length;++e)s=n[e],h=a,u=d,c=f,a=4*s,d=i[2*s],f=i[2*s+1],o[h+2]=o[a]=c-f,o[h+3]=o[a+1]=d-u}render(e){let t=null==e?e=new P:void 0,{delaunay:{halfedges:i,inedges:n,hull:l},circumcenters:o,vectors:r}=this;if(l.length<=1)return null;for(let t=0,n=i.length;t<n;++t){let n=i[t];if(n<t)continue;let l=2*Math.floor(t/3),r=2*Math.floor(n/3),s=o[l],h=o[l+1],a=o[r],u=o[r+1];this._renderSegment(s,h,a,u,e)}let s,h=l[l.length-1];for(let t=0;t<l.length;++t){s=h;let i=2*Math.floor(n[h=l[t]]/3),a=o[i],u=o[i+1],d=4*s,c=this._project(a,u,r[d+2],r[d+3]);c&&this._renderSegment(a,u,c[0],c[1],e)}return t&&t.value()}renderBounds(e){let t=null==e?e=new P:void 0;return e.rect(this.xmin,this.ymin,this.xmax-this.xmin,this.ymax-this.ymin),t&&t.value()}renderCell(e,t){let i=null==t?t=new P:void 0,n=this._clip(e);if(null===n||!n.length)return;t.moveTo(n[0],n[1]);let l=n.length;for(;n[0]===n[l-2]&&n[1]===n[l-1]&&l>1;)l-=2;for(let e=2;e<l;e+=2)(n[e]!==n[e-2]||n[e+1]!==n[e-1])&&t.lineTo(n[e],n[e+1]);return t.closePath(),i&&i.value()}*cellPolygons(){let{delaunay:{points:e}}=this;for(let t=0,i=e.length/2;t<i;++t){let e=this.cellPolygon(t);e&&(e.index=t,yield e)}}cellPolygon(e){let t=new A;return this.renderCell(e,t),t.value()}_renderSegment(e,t,i,n,l){let o;let r=this._regioncode(e,t),s=this._regioncode(i,n);0===r&&0===s?(l.moveTo(e,t),l.lineTo(i,n)):(o=this._clipSegment(e,t,i,n,r,s))&&(l.moveTo(o[0],o[1]),l.lineTo(o[2],o[3]))}contains(e,t,i){return(t=+t)==t&&(i=+i)==i&&this.delaunay._step(e,t,i)===e}*neighbors(e){let t=this._clip(e);if(t)for(let i of this.delaunay.neighbors(e)){let e=this._clip(i);if(e){e:for(let n=0,l=t.length;n<l;n+=2)for(let o=0,r=e.length;o<r;o+=2)if(t[n]===e[o]&&t[n+1]===e[o+1]&&t[(n+2)%l]===e[(o+r-2)%r]&&t[(n+3)%l]===e[(o+r-1)%r]){yield i;break e}}}}_cell(e){let{circumcenters:t,delaunay:{inedges:i,halfedges:n,triangles:l}}=this,o=i[e];if(-1===o)return null;let r=[],s=o;do{let i=Math.floor(s/3);if(r.push(t[2*i],t[2*i+1]),l[s=s%3==2?s-2:s+1]!==e)break;s=n[s]}while(s!==o&&-1!==s);return r}_clip(e){if(0===e&&1===this.delaunay.hull.length)return[this.xmax,this.ymin,this.xmax,this.ymax,this.xmin,this.ymax,this.xmin,this.ymin];let t=this._cell(e);if(null===t)return null;let{vectors:i}=this,n=4*e;return this._simplify(i[n]||i[n+1]?this._clipInfinite(e,t,i[n],i[n+1],i[n+2],i[n+3]):this._clipFinite(e,t))}_clipFinite(e,t){let i=t.length,n=null,l,o,r=t[i-2],s=t[i-1],h,a=this._regioncode(r,s),u,d=0;for(let c=0;c<i;c+=2)if(l=r,o=s,r=t[c],s=t[c+1],h=a,a=this._regioncode(r,s),0===h&&0===a)u=d,d=0,n?n.push(r,s):n=[r,s];else{let t,i,c,f,g;if(0===h){if(null===(t=this._clipSegment(l,o,r,s,h,a)))continue;[i,c,f,g]=t}else{if(null===(t=this._clipSegment(r,s,l,o,a,h)))continue;[f,g,i,c]=t,u=d,d=this._edgecode(i,c),u&&d&&this._edge(e,u,d,n,n.length),n?n.push(i,c):n=[i,c]}u=d,d=this._edgecode(f,g),u&&d&&this._edge(e,u,d,n,n.length),n?n.push(f,g):n=[f,g]}if(n)u=d,d=this._edgecode(n[0],n[1]),u&&d&&this._edge(e,u,d,n,n.length);else if(this.contains(e,(this.xmin+this.xmax)/2,(this.ymin+this.ymax)/2))return[this.xmax,this.ymin,this.xmax,this.ymax,this.xmin,this.ymax,this.xmin,this.ymin];return n}_clipSegment(e,t,i,n,l,o){let r=l<o;for(r&&([e,t,i,n,l,o]=[i,n,e,t,o,l]);;){if(0===l&&0===o)return r?[i,n,e,t]:[e,t,i,n];if(l&o)return null;let s,h,a=l||o;8&a?(s=e+(i-e)*(this.ymax-t)/(n-t),h=this.ymax):4&a?(s=e+(i-e)*(this.ymin-t)/(n-t),h=this.ymin):2&a?(h=t+(n-t)*(this.xmax-e)/(i-e),s=this.xmax):(h=t+(n-t)*(this.xmin-e)/(i-e),s=this.xmin),l?(e=s,t=h,l=this._regioncode(e,t)):(i=s,n=h,o=this._regioncode(i,n))}}_clipInfinite(e,t,i,n,l,o){let r=Array.from(t),s;if((s=this._project(r[0],r[1],i,n))&&r.unshift(s[0],s[1]),(s=this._project(r[r.length-2],r[r.length-1],l,o))&&r.push(s[0],s[1]),r=this._clipFinite(e,r))for(let t=0,i=r.length,n,l=this._edgecode(r[i-2],r[i-1]);t<i;t+=2)n=l,l=this._edgecode(r[t],r[t+1]),n&&l&&(t=this._edge(e,n,l,r,t),i=r.length);else this.contains(e,(this.xmin+this.xmax)/2,(this.ymin+this.ymax)/2)&&(r=[this.xmin,this.ymin,this.xmax,this.ymin,this.xmax,this.ymax,this.xmin,this.ymax]);return r}_edge(e,t,i,n,l){for(;t!==i;){let i,o;switch(t){case 5:t=4;continue;case 4:t=6,i=this.xmax,o=this.ymin;break;case 6:t=2;continue;case 2:t=10,i=this.xmax,o=this.ymax;break;case 10:t=8;continue;case 8:t=9,i=this.xmin,o=this.ymax;break;case 9:t=1;continue;case 1:t=5,i=this.xmin,o=this.ymin}(n[l]!==i||n[l+1]!==o)&&this.contains(e,i,o)&&(n.splice(l,0,i,o),l+=2)}return l}_project(e,t,i,n){let l=1/0,o,r,s;if(n<0){if(t<=this.ymin)return null;(o=(this.ymin-t)/n)<l&&(s=this.ymin,r=e+(l=o)*i)}else if(n>0){if(t>=this.ymax)return null;(o=(this.ymax-t)/n)<l&&(s=this.ymax,r=e+(l=o)*i)}if(i>0){if(e>=this.xmax)return null;(o=(this.xmax-e)/i)<l&&(r=this.xmax,s=t+(l=o)*n)}else if(i<0){if(e<=this.xmin)return null;(o=(this.xmin-e)/i)<l&&(r=this.xmin,s=t+(l=o)*n)}return[r,s]}_edgecode(e,t){return(e===this.xmin?1:e===this.xmax?2:0)|(t===this.ymin?4:t===this.ymax?8:0)}_regioncode(e,t){return(e<this.xmin?1:e>this.xmax?2:0)|(t<this.ymin?4:t>this.ymax?8:0)}_simplify(e){if(e&&e.length>4){for(let t=0;t<e.length;t+=2){let i=(t+2)%e.length,n=(t+4)%e.length;(e[t]===e[i]&&e[i]===e[n]||e[t+1]===e[i+1]&&e[i+1]===e[n+1])&&(e.splice(i,2),t-=2)}e.length||(e=null)}return e}}let S=2*Math.PI,E=Math.pow;function j(e){return e[0]}function $(e){return e[1]}class I{static from(e,t=j,i=$,n){return new I("length"in e?function(e,t,i,n){let l=e.length,o=new Float64Array(2*l);for(let r=0;r<l;++r){let l=e[r];o[2*r]=t.call(n,l,r,e),o[2*r+1]=i.call(n,l,r,e)}return o}(e,t,i,n):Float64Array.from(function*(e,t,i,n){let l=0;for(let o of e)yield t.call(n,o,l,e),yield i.call(n,o,l,e),++l}(e,t,i,n)))}constructor(e){this._delaunator=new M(e),this.inedges=new Int32Array(e.length/2),this._hullIndex=new Int32Array(e.length/2),this.points=this._delaunator.coords,this._init()}update(){return this._delaunator.update(),this._init(),this}_init(){let e=this._delaunator,t=this.points;if(e.hull&&e.hull.length>2&&function(e){let{triangles:t,coords:i}=e;for(let e=0;e<t.length;e+=3){let n=2*t[e],l=2*t[e+1],o=2*t[e+2];if((i[o]-i[n])*(i[l+1]-i[n+1])-(i[l]-i[n])*(i[o+1]-i[n+1])>1e-10)return!1}return!0}(e)){this.collinear=Int32Array.from({length:t.length/2},(e,t)=>t).sort((e,i)=>t[2*e]-t[2*i]||t[2*e+1]-t[2*i+1]);let e=this.collinear[0],l=this.collinear[this.collinear.length-1],o=[t[2*e],t[2*e+1],t[2*l],t[2*l+1]],r=1e-8*Math.hypot(o[3]-o[1],o[2]-o[0]);for(let e=0,l=t.length/2;e<l;++e){var i,n;let l=[(i=t[2*e])+Math.sin(i+(n=t[2*e+1]))*r,n+Math.cos(i-n)*r];t[2*e]=l[0],t[2*e+1]=l[1]}this._delaunator=new M(t)}else delete this.collinear;let l=this.halfedges=this._delaunator.halfedges,o=this.hull=this._delaunator.hull,r=this.triangles=this._delaunator.triangles,s=this.inedges.fill(-1),h=this._hullIndex.fill(-1);for(let e=0,t=l.length;e<t;++e){let t=r[e%3==2?e-2:e+1];(-1===l[e]||-1===s[t])&&(s[t]=e)}for(let e=0,t=o.length;e<t;++e)h[o[e]]=e;o.length<=2&&o.length>0&&(this.triangles=new Int32Array(3).fill(-1),this.halfedges=new Int32Array(3).fill(-1),this.triangles[0]=o[0],s[o[0]]=1,2===o.length&&(s[o[1]]=0,this.triangles[1]=o[1],this.triangles[2]=o[1]))}voronoi(e){return new L(this,e)}*neighbors(e){let{inedges:t,hull:i,_hullIndex:n,halfedges:l,triangles:o,collinear:r}=this;if(r){let t=r.indexOf(e);t>0&&(yield r[t-1]),t<r.length-1&&(yield r[t+1]);return}let s=t[e];if(-1===s)return;let h=s,a=-1;do{if(yield a=o[h],o[h=h%3==2?h-2:h+1]!==e)return;if(-1===(h=l[h])){let t=i[(n[e]+1)%i.length];t!==a&&(yield t);return}}while(h!==s)}find(e,t,i=0){let n;if((e=+e)!=e||(t=+t)!=t)return -1;let l=i;for(;(n=this._step(i,e,t))>=0&&n!==i&&n!==l;)i=n;return n}_step(e,t,i){let{inedges:n,hull:l,_hullIndex:o,halfedges:r,triangles:s,points:h}=this;if(-1===n[e]||!h.length)return(e+1)%(h.length>>1);let a=e,u=E(t-h[2*e],2)+E(i-h[2*e+1],2),d=n[e],c=d;do{let n=s[c],d=E(t-h[2*n],2)+E(i-h[2*n+1],2);if(d<u&&(u=d,a=n),s[c=c%3==2?c-2:c+1]!==e)break;if(-1===(c=r[c])){if((c=l[(o[e]+1)%l.length])!==n&&E(t-h[2*c],2)+E(i-h[2*c+1],2)<u)return c;break}}while(c!==d);return a}render(e){let t=null==e?e=new P:void 0,{points:i,halfedges:n,triangles:l}=this;for(let t=0,o=n.length;t<o;++t){let o=n[t];if(o<t)continue;let r=2*l[t],s=2*l[o];e.moveTo(i[r],i[r+1]),e.lineTo(i[s],i[s+1])}return this.renderHull(e),t&&t.value()}renderPoints(e,t){void 0!==t||e&&"function"==typeof e.moveTo||(t=e,e=null),t=void 0==t?2:+t;let i=null==e?e=new P:void 0,{points:n}=this;for(let i=0,l=n.length;i<l;i+=2){let l=n[i],o=n[i+1];e.moveTo(l+t,o),e.arc(l,o,t,0,S)}return i&&i.value()}renderHull(e){let t=null==e?e=new P:void 0,{hull:i,points:n}=this,l=2*i[0],o=i.length;e.moveTo(n[l],n[l+1]);for(let t=1;t<o;++t){let l=2*i[t];e.lineTo(n[l],n[l+1])}return e.closePath(),t&&t.value()}hullPolygon(){let e=new A;return this.renderHull(e),e.value()}renderTriangle(e,t){let i=null==t?t=new P:void 0,{points:n,triangles:l}=this,o=2*l[e*=3],r=2*l[e+1],s=2*l[e+2];return t.moveTo(n[o],n[o+1]),t.lineTo(n[r],n[r+1]),t.lineTo(n[s],n[s+1]),t.closePath(),i&&i.value()}*trianglePolygons(){let{triangles:e}=this;for(let t=0,i=e.length/3;t<i;++t)yield this.trianglePolygon(t)}trianglePolygon(e){let t=new A;return this.renderTriangle(e,t),t.value()}}var W=i(760956),F=i(474848);function z(){return(z=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}return e}).apply(this,arguments)}var R={xDomain:[0,1],yDomain:[0,1],layers:["links","cells","points","bounds"],enableLinks:!1,linkLineWidth:1,linkLineColor:"#bbbbbb",enableCells:!0,cellLineWidth:2,cellLineColor:"#000000",enablePoints:!0,pointSize:4,pointColor:"#666666",role:"img"},D=function(e){return[e.x,e.y]},N=l.kT,U="cursor",H=function(e){var t=e.points,i=e.getNodePosition,n=void 0===i?D:i,l=e.margin,o=void 0===l?N:l;return t.map(function(e){var t=n(e),i=t[0],l=t[1];return[i+o.left,l+o.top]})},K=function(e){var t=e.points,i=e.width,n=e.height,l=e.margin,o=void 0===l?N:l,r=e.debug,s=I.from(t),h=r?s.voronoi([0,0,o.left+i+o.right,o.top+n+o.bottom]):void 0;return{points:t,delaunay:s,voronoi:h}},V=function(e){var t=e.points,i=e.getNodePosition,l=void 0===i?D:i,o=e.width,r=e.height,s=e.margin,h=void 0===s?N:s,a=e.debug;return(0,n.useMemo)(function(){return K({points:H({points:t,margin:h,getNodePosition:l}),width:o,height:r,margin:h,debug:a})},[t,o,r,h,a])},O=function(e){var t=e.data,i=e.width,l=e.height,r=e.xDomain,s=e.yDomain,h=(0,n.useMemo)(function(){return(0,o.A)().domain(r).range([0,i])},[r,i]),a=(0,n.useMemo)(function(){return(0,o.A)().domain(s).range([0,l])},[s,l]),u=(0,n.useMemo)(function(){return t.map(function(e){return{x:h(e.x),y:a(e.y),data:e}})},[t,h,a]);return(0,n.useMemo)(function(){var e=I.from(u.map(function(e){return[e.x,e.y]})),t=e.voronoi([0,0,i,l]);return{points:u,delaunay:e,voronoi:t}},[u,i,l])},B=function(e){var t=e.points,i=e.delaunay,l=e.voronoi;return(0,n.useMemo)(function(){return{points:t,delaunay:i,voronoi:l}},[t,i,l])},Z=function(e){var t=e.elementRef,i=e.nodes,o=e.getNodePosition,r=void 0===o?D:o,s=e.delaunay,h=e.setCurrent,a=e.margin,u=void 0===a?N:a,d=e.detectionRadius,c=void 0===d?1/0:d,f=e.isInteractive,g=void 0===f||f,_=e.onMouseEnter,v=e.onMouseMove,m=e.onMouseLeave,y=e.onClick,x=e.onTouchStart,p=e.onTouchMove,M=e.onTouchEnd,b=e.enableTouchCrosshair,k=void 0!==b&&b,w=e.tooltip,T=e.tooltipPosition,C=void 0===T?U:T,P=e.tooltipAnchor,A=void 0===P?"top":P,L=(0,n.useState)(null),S=L[0],E=L[1],j=(0,n.useRef)(null);(0,n.useEffect)(function(){j.current=S},[j,S]);var $=(0,n.useCallback)(function(e){if(!t.current)return null;var n=(0,l.H9)(t.current,e),o=n[0],h=n[1],a=s.find(o,h),d=void 0!==a?i[a]:null;if(d&&c!==1/0){var f=r(d),g=f[0],_=f[1];(0,l.Yf)(o,h,g+u.left,_+u.top)>c&&(a=null,d=null)}return null===a||null===d?null:[a,d]},[t,s,i,r,u,c]),I=(0,W.fS)(),F=I.showTooltipAt,z=I.showTooltipFromEvent,R=I.hideTooltip,H=(0,n.useMemo)(function(){if(w)return"cursor"===C?function(e,t){z(w(e),t,A)}:function(e){var t=r(e),i=t[0],n=t[1];F(w(e),[i+u.left,n+u.top],A)}},[F,z,w,C,A,r,u]),K=(0,n.useCallback)(function(e){var t=$(e);if(E(t),null==h||h(t?t[1]:null),t){var i=t[1];null==H||H(i,e),null==_||_(t[1],e)}},[$,E,h,H,_]),V=(0,n.useCallback)(function(e){var t=$(e);if(E(t),t){var i=t[0],n=t[1];if(null==h||h(n),null==H||H(n,e),j.current){var l=j.current,o=l[0],r=l[1];i!==o?null==m||m(r,e):null==v||v(n,e)}else null==_||_(n,e)}else null==h||h(null),null==R||R(),j.current&&(null==m||m(j.current[1],e))},[$,E,j,_,v,m,H,R]),O=(0,n.useCallback)(function(e){E(null),null==h||h(null),R(),m&&j.current&&m(j.current[1],e)},[E,h,j,R,m]),B=(0,n.useCallback)(function(e){var t=$(e);E(t),t&&(null==y||y(t[1],e))},[$,E,y]),Z=(0,n.useCallback)(function(e){var t=$(e);k&&(E(t),null==h||h(t?t[1]:null)),t&&(null==x||x(t[1],e))},[$,E,h,k,x]),q=(0,n.useCallback)(function(e){var t=$(e);k&&(E(t),null==h||h(t?t[1]:null)),t&&(null==p||p(t[1],e))},[$,E,h,k,p]),G=(0,n.useCallback)(function(e){k&&(E(null),null==h||h(null)),M&&j.current&&M(j.current[1],e)},[k,E,h,M,j]);return{current:S,handleMouseEnter:g?K:void 0,handleMouseMove:g?V:void 0,handleMouseLeave:g?O:void 0,handleClick:g?B:void 0,handleTouchStart:g?Z:void 0,handleTouchMove:g?q:void 0,handleTouchEnd:g?G:void 0}},q=function(e){var t=e.elementRef,i=e.nodes,n=e.getNodePosition,l=e.width,o=e.height,r=e.margin,s=void 0===r?N:r,h=e.isInteractive,a=e.detectionRadius,u=e.setCurrent,d=e.onMouseEnter,c=e.onMouseMove,f=e.onMouseLeave,g=e.onClick,_=e.tooltip,v=e.tooltipPosition,m=e.tooltipAnchor,y=e.debug,x=V({points:i,getNodePosition:n,width:l,height:o,margin:s,debug:void 0!==y&&y}),p=x.delaunay,M=x.voronoi,b=Z({elementRef:t,nodes:i,margin:s,setCurrent:u,delaunay:p,detectionRadius:void 0===a?1/0:a,isInteractive:void 0===h||h,onMouseEnter:d,onMouseMove:c,onMouseLeave:f,onClick:g,tooltip:_,tooltipPosition:void 0===v?U:v,tooltipAnchor:void 0===m?"top":m}),k=b.handleMouseEnter,w=b.handleMouseMove,T=b.handleMouseLeave,C=b.handleClick;return{delaunay:p,voronoi:M,current:b.current,handleMouseEnter:k,handleMouseMove:w,handleMouseLeave:T,handleClick:C}},G=["theme"],X=function(e){var t=e.data,i=e.width,o=e.height,r=e.margin,s=e.layers,h=void 0===s?R.layers:s,a=e.xDomain,u=void 0===a?R.xDomain:a,d=e.yDomain,c=void 0===d?R.yDomain:d,f=e.enableLinks,g=void 0===f?R.enableLinks:f,_=e.linkLineWidth,v=void 0===_?R.linkLineWidth:_,m=e.linkLineColor,y=void 0===m?R.linkLineColor:m,x=e.enableCells,p=void 0===x?R.enableCells:x,M=e.cellLineWidth,b=void 0===M?R.cellLineWidth:M,k=e.cellLineColor,w=void 0===k?R.cellLineColor:k,T=e.enablePoints,C=void 0===T?R.enableCells:T,P=e.pointSize,A=void 0===P?R.pointSize:P,L=e.pointColor,S=void 0===L?R.pointColor:L,E=e.role,j=void 0===E?R.role:E,$=(0,l.Xl)(i,o,r),I=$.outerWidth,W=$.outerHeight,z=$.margin,D=O({data:t,width:$.innerWidth,height:$.innerHeight,xDomain:u,yDomain:c}),N=D.points,U=D.delaunay,H=D.voronoi,K={links:null,cells:null,points:null,bounds:null};g&&h.includes("links")&&(K.links=(0,F.jsx)("path",{stroke:y,strokeWidth:v,fill:"none",d:U.render()},"links")),p&&h.includes("cells")&&(K.cells=(0,F.jsx)("path",{d:H.render(),fill:"none",stroke:w,strokeWidth:b},"cells")),C&&h.includes("points")&&(K.points=(0,F.jsx)("path",{stroke:"none",fill:S,d:U.renderPoints(void 0,A/2)},"points")),h.includes("bounds")&&(K.bounds=(0,F.jsx)("path",{fill:"none",stroke:w,strokeWidth:b,d:H.renderBounds()},"bounds"));var V=B({points:N,delaunay:U,voronoi:H});return(0,F.jsx)(l.Ge,{width:I,height:W,margin:z,role:j,children:h.map(function(e,t){return void 0!==K[e]?K[e]:"function"==typeof e?(0,F.jsx)(n.Fragment,{children:(0,n.createElement)(e,V)},t):null})})},Y=function(e){var t=e.theme,i=function(e,t){if(null==e)return{};var i,n,l={},o=Object.keys(e);for(n=0;n<o.length;n++)i=o[n],t.indexOf(i)>=0||(l[i]=e[i]);return l}(e,G);return(0,F.jsx)(l.mc,{isInteractive:!1,animate:!1,theme:t,children:(0,F.jsx)(X,z({},i))})},J=function(e){return(0,F.jsx)(l.KF,{children:function(t){var i=t.width,n=t.height;return(0,F.jsx)(Y,z({width:i,height:n},e))}})},Q=function(e){var t=e.nodes,i=e.width,l=e.height,o=e.margin,r=void 0===o?N:o,s=e.getNodePosition,h=e.setCurrent,a=e.onMouseEnter,u=e.onMouseMove,d=e.onMouseLeave,c=e.onClick,f=e.onTouchStart,g=e.onTouchMove,_=e.onTouchEnd,v=e.enableTouchCrosshair,m=e.detectionRadius,y=void 0===m?1/0:m,x=e.tooltip,p=e.tooltipPosition,M=e.tooltipAnchor,b=e.debug,k=(0,n.useRef)(null),w=V({points:t,getNodePosition:s,width:i,height:l,margin:r,debug:b}),T=w.delaunay,C=w.voronoi,P=Z({elementRef:k,nodes:t,delaunay:T,margin:r,detectionRadius:y,setCurrent:h,onMouseEnter:a,onMouseMove:u,onMouseLeave:d,onClick:c,onTouchStart:f,onTouchMove:g,onTouchEnd:_,enableTouchCrosshair:void 0!==v&&v,tooltip:x,tooltipPosition:void 0===p?U:p,tooltipAnchor:void 0===M?"top":M}),A=P.current,L=P.handleMouseEnter,S=P.handleMouseMove,E=P.handleMouseLeave,j=P.handleClick,$=P.handleTouchStart,I=P.handleTouchMove,W=P.handleTouchEnd,z=(0,n.useMemo)(function(){if(b&&C)return C.render()},[b,C]);return(0,F.jsxs)("g",{ref:k,transform:"translate("+-r.left+","+-r.top+")",children:[b&&C&&(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)("path",{d:z,stroke:"red",strokeWidth:1,opacity:.75}),y<1/0&&(0,F.jsx)("path",{stroke:"red",strokeWidth:.35,fill:"none",d:T.renderPoints(void 0,y)}),A&&(0,F.jsx)("path",{fill:"pink",opacity:.35,d:C.renderCell(A[0])})]}),(0,F.jsx)("rect",{"data-ref":"mesh-interceptor",width:r.left+i+r.right,height:r.top+l+r.bottom,fill:"red",opacity:0,style:{cursor:"auto"},onMouseEnter:L,onMouseMove:S,onMouseLeave:E,onTouchStart:$,onTouchMove:I,onTouchEnd:W,onClick:j})]})},ee=function(e,t){e.save(),e.globalAlpha=.75,e.beginPath(),t.render(e),e.strokeStyle="red",e.lineWidth=1,e.stroke(),e.restore()},et=function(e,t,i){e.save(),e.globalAlpha=.15,e.beginPath(),t.renderPoints(e,i),e.strokeStyle="red",e.lineWidth=1,e.stroke(),e.restore()},ei=function(e,t,i){e.save(),e.globalAlpha=.35,e.beginPath(),t.renderCell(i,e),e.fillStyle="pink",e.fill(),e.restore()},en=function(e,t){var i=t.delaunay,n=t.voronoi,l=t.detectionRadius,o=t.index;ee(e,n),l<1/0&&et(e,i,l),null!==o&&ei(e,n,o)}}}]);