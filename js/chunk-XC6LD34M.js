import{c as O}from"./chunk-XLVIKQIO.js";O();var T=class{constructor(){this.queue=[]}add(e){return this.queue.push(new $(e)),this}play(){this.queue.forEach(e=>e.play())}},k={targets:null,duration:1/0,easing:"linear",delay:0,begin:null,update:null,complete:null},E=()=>{let e={linear:()=>s=>s},n={Sine:()=>s=>1-Math.cos(s*Math.PI/2),Circ:()=>s=>1-Math.sqrt(1-s*s),Back:()=>s=>s*s*(3*s-2),Bounce:()=>s=>{let o,l=4;for(;s<((o=Math.pow(2,--l))-1)/11;);return 1/Math.pow(4,3-l)-7.5625*Math.pow((o*3-2)/22-s,2)}};return["Quad","Cubic","Quart","Quint","Expo"].forEach((s,o)=>{n[s]=()=>l=>Math.pow(l,o+2)}),Object.keys(n).forEach(s=>{let o=n[s];e["easeIn"+s]=o,e["easeOut"+s]=()=>l=>1-o()(1-l),e["easeInOut"+s]=()=>l=>l<.5?o()(l*2)/2:1-o()(l*-2+2)/2,e["easeOutIn"+s]=()=>l=>l<.5?(1-o()(1-l*2))/2:(o()(l*2-1)+1)/2}),e},j=["translateX","translateY","translateZ"],M=(e,n)=>e instanceof HTMLElement&&e.style&&"transform"in e.style&&j.includes(n)?"transform":e instanceof HTMLElement&&e.style&&n in e.style?"style":"attribute",F=e=>{let n=Date.now()+e.delay,s=n+e.duration,o=!!e.targets,l=[],w=()=>{if(o){Array.isArray(e.targets)||(e.targets=[e.targets]);for(let t of e.targets){let i={};for(let r in e.dest){let a=e.dest[r];if(Array.isArray(a))if(a.length===2&&typeof a[0]!="object"){switch(M(t,r)){case"transform":typeof a[0]=="string"?t.style.transform=`${r}(${a[0]})`:t.style.transform=`${r}(${a[0]}px)`;break;case"style":t.style[r]=a[0];break;case"attribute":t[r]=a[0];break}i[r]=a[0],e.dest[r]=a[1]}else{let c=0;for(let h of a)h.startTimeStamp=c,c+=h.duration;i[r]=t[r]}else switch(M(t,r)){case"transform":let c=new RegExp(`${r}((w+))`,"g");i[r]=t.style.transform.match(c)[0];break;case"style":i[r]=t.style[r];break;case"attribute":i[r]=t[r]}}l.push(i)}}},f=(t,i,r,a,c,h=!1)=>{let y;if(typeof a=="string")if(a.endsWith("%"))y="%",a=parseFloat(a);else if(a.endsWith("px"))y="px",a=parseFloat(a);else throw new TypeError("string value must ends with '%' or 'px'");let u=h?a:(a-i)*r+i;switch(y&&(u+=y),M(t,c)){case"transform":y?t.style.transform=`${c}(${u})`:t.style.transform=`${c}(${u}px)`;break;case"style":t.style[c]=u;break;case"attribute":t[c]=u}},m=(t,i,r=!1)=>{e.targets.forEach((a,c)=>{Object.keys(e.dest).forEach(h=>{let y=parseFloat(l[c][h]),u=e.dest[h];if(typeof u=="object")if(Array.isArray(u)){let p=0;for(;p<u.length&&!(i-n<u[p].startTimeStamp);p++);let{value:d,duration:b,easing:A,startTimeStamp:q}=u[p-1];i<=n+b+q?(t=E()[A||e.easing]()((i-n)/b),f(a,y,t,d,h)):r&&f(a,y,t,d,h,r)}else{let{value:p,duration:d,easing:b}=u;i<=n+d?(t=E()[b||e.easing]()((i-n)/d),f(a,y,t,p,h)):r&&f(a,y,t,p,h,r)}else typeof u=="function"&&(u=u(a,c)),f(a,y,t,u,h,r)})})},g=()=>{let t=Date.now();if(t>s){m(1,t,!0),typeof e.complete=="function"&&e.complete(e.targets),e.isPlay=!1;return}if(t<n){requestAnimationFrame(g);return}let i=E()[e.easing]()((t-n)/e.duration);o&&m(i,t),typeof e.update=="function"&&e.update(e.targets),requestAnimationFrame(g)};w(),typeof e.begin=="function"&&e.begin(e.targets),g()},$=class{constructor(e=k){e=Object.assign({},k,e);let{targets:n,duration:s,easing:o,delay:l,begin:w,update:f,complete:m,...g}=e;this.targets=n,this.duration=s,this.easing=o,this.delay=l,this.begin=w,this.update=f,this.complete=m,this.dest=g||{},this.tl=null,this.isPlay=!1}timeline(){return this.tl===null&&(this.tl=new T),this.tl}play(){this.isPlay||(this.isPlay=!0,F(this))}},x=e=>new $(e);x.random=function(e,n){return Math.floor(Math.random()*(n-e+1))+e};export{x as a};/*! For license information please see chunk-XC6LD34M.js.LEGAL.txt */
