import{b as m,e as C,g as x,j as L,k as f}from"./chunk-WZBAAMYE.js";import{b as i,c as w,e as N,ea as b,fa as u,j as k,k as A,t as y}from"./chunk-AAVM7DYT.js";import"./chunk-XC6LD34M.js";import{c as v}from"./chunk-XLVIKQIO.js";v(),v();var E=n=>{i(n+" .md img")&&(f("fancybox"),f("justifiedGallery"),L("fancybox",()=>{let e=jQuery.noConflict();i.each(n+" p.gallery",a=>{let t=document.createElement("div");t.className="gallery",t.setAttribute("data-height",String(a.getAttribute("data-height")||220)),t.innerHTML=a.innerHTML.replace(/<br>/g,""),a.parentNode.insertBefore(t,a),a.remove()}),i.each(n+" .md img:not(.emoji):not(.vemoji)",a=>{let t=e(a),l=t.attr("data-src")||t.attr("src"),r=t.wrap('<a class="fancybox" href="'+l+'" itemscope itemtype="https://schema.org/ImageObject" itemprop="url"></a>').parent("a"),o,d="image-info";if(t.is("a img")||(t.data("safe-src",l),t.is(".gallery img")?d="jg-caption":r.attr("data-fancybox","default").attr("rel","default")),o=a.getAttribute("title")){r.attr("data-caption",o);let s=document.createElement("span"),c=document.createTextNode(o);s.appendChild(c),s.addClass(d),w(a,s)}}),i.each(n+" div.gallery",(a,t)=>{e(a).justifiedGallery({rowHeight:e(a).data("height")||120,rel:"gallery-"+t}).on("jg.complete",function(){e(this).find("a").each((l,r)=>{r.setAttribute("data-fancybox","gallery-"+t)})})}),e.fancybox.defaults.hash=!1,e(n+" .fancybox").fancybox({loop:!0,helpers:{overlay:{locked:!1}}})},window.jQuery))},j=()=>{if(!i(".md"))return;E(".post.block"),i(".post.block").oncopy=e=>{if(m(LOCAL.copyright),LOCAL.nocopy){e.preventDefault();return}let a=i("#copyright");if(window.getSelection().toString().length>30&&a){e.preventDefault();let t="# "+a.child(".author").innerText,l="# "+a.child(".link").innerText,r="# "+a.child(".license").innerText,o=t+"<br>"+l+"<br>"+r+"<br><br>"+window.getSelection().toString().replace(/\r\n/g,"<br>"),d=t+`
`+l+`
`+r+`

`+window.getSelection().toString().replace(/\r\n/g,`
`);if(e.clipboardData)e.clipboardData.setData("text/html",o),e.clipboardData.setData("text/plain",d);else if(window.clipboardData)return window.clipboardData.setData("text",d)}},i.each("li ruby",e=>{let a=e.parentNode;e.parentNode.tagName!=="LI"&&(a=e.parentNode.parentNode),a.addClass("ruby")}),i.each("ol[start]",e=>{e.style.counterReset="counter "+parseInt(e.getAttribute("start")-1)}),i.each(".md table",e=>{N(e,{className:"table-container"})}),i.each(".highlight > .table-container",e=>{e.className="code-container"}),i.each("figure.highlight",e=>{let a=e.child(".code-container"),t=e.child("figcaption");e.insertAdjacentHTML("beforeend",'<div class="operation"><span class="breakline-btn"><i class="ic i-align-left"></i></span><span class="copy-btn"><i class="ic i-clipboard"></i></span><span class="fullscreen-btn"><i class="ic i-expand"></i></span></div>');let l=e.child(".copy-btn");LOCAL.nocopy?l.remove():(l.addEventListener("click",s=>{let c=s.currentTarget,h="",g="";a.find("pre").forEach(p=>{g+=h+p.innerText,h=`
`}),C(g,p=>{c.child(".ic").className=p?"ic i-check":"ic i-times",c.blur(),m(LOCAL.copyright)})},{passive:!0}),l.addEventListener("mouseleave",s=>{setTimeout(()=>{s.target.child(".ic").className="ic i-clipboard"},1e3)})),e.child(".breakline-btn").addEventListener("click",s=>{let c=s.currentTarget;e.hasClass("breakline")?(e.removeClass("breakline"),c.child(".ic").className="ic i-align-left"):(e.addClass("breakline"),c.child(".ic").className="ic i-align-justify")});let r=e.child(".fullscreen-btn"),o=()=>{e.removeClass("fullscreen"),e.scrollTop=0,y.removeClass("fullscreen"),r.child(".ic").className="ic i-expand"},d=()=>{if(e.hasClass("fullscreen")){if(o(),a&&a.find("tr").length>15){let s=a.child(".show-btn");a.style.maxHeight="300px",s.removeClass("open")}u(e)}else if(e.addClass("fullscreen"),y.addClass("fullscreen"),r.child(".ic").className="ic i-compress",a&&a.find("tr").length>15){let s=a.child(".show-btn");a.style.maxHeight="",s.addClass("open")}};if(r.addEventListener("click",d),t&&t.addEventListener("click",d),a&&a.find("tr").length>15){a.style.maxHeight="300px",a.insertAdjacentHTML("beforeend",'<div class="show-btn"><i class="ic i-angle-down"></i></div>');let s=a.child(".show-btn"),c=()=>{a.style.maxHeight="300px",s.removeClass("open")},h=()=>{a.style.maxHeight="",s.addClass("open")};s.addEventListener("click",()=>{s.hasClass("open")?(o(),c(),u(a)):h()})}}),i.each("pre.mermaid > svg",e=>{let a=e;a.style.maxWidth=""}),i.each(".reward button",e=>{e.addEventListener("click",a=>{a.preventDefault();let t=i("#qr");k(t)==="inline-flex"?b(t,0):b(t,1,()=>{A(t,"inline-flex")})})}),i.each(".quiz > ul.options li",e=>{e.addEventListener("click",()=>{e.hasClass("correct")?(e.toggleClass("right"),e.parentNode.parentNode.addClass("show")):e.toggleClass("wrong")})}),i.each(".quiz > p",e=>{e.addEventListener("click",()=>{e.parentNode.toggleClass("show")})}),i.each(".quiz > p:first-child",e=>{let a=e.parentNode,t="choice";(a.hasClass("true")||a.hasClass("false"))&&(t="true_false"),a.hasClass("multi")&&(t="multiple"),a.hasClass("fill")&&(t="gap_fill"),a.hasClass("essay")&&(t="essay"),e.setAttribute("data-type",LOCAL.quiz[t])}),i.each(".quiz .mistake",e=>{e.setAttribute("data-type",LOCAL.quiz.mistake)}),i.each("div.tags a",e=>{e.className=["primary","success","info","warning","danger"][Math.floor(Math.random()*5)]}),i.each(".md div.player",e=>{x(e,{type:e.getAttribute("data-type"),mode:"order",btns:[]}).player.load(JSON.parse(e.getAttribute("data-src"))).fetch()});let n=document.querySelectorAll(".show-btn .i-angle-down");if(n.length){let e=new IntersectionObserver(a=>{a.forEach(t=>{t.isIntersecting?n.forEach(l=>{l.classList.remove("stop-animation")}):n.forEach(l=>{l.classList.add("stop-animation")})})},{root:null,threshold:.5});n.forEach(a=>{e.observe(a)})}};export{j as postBeauty};/*! For license information please see post-ZONNMGSU.js.LEGAL.txt */
