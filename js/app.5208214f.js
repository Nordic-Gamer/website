(function(){"use strict";var e={265:function(e,t,n){var o=n(963),a=n(252);const r={id:"app"};function c(e,t,n,o,c,i){const u=(0,a.up)("Header"),d=(0,a.up)("Home"),s=(0,a.up)("About"),l=(0,a.up)("Contact"),v=(0,a.up)("Footer");return(0,a.wg)(),(0,a.iD)("div",r,[(0,a.Wm)(u),(0,a.Wm)(d),(0,a.Wm)(s),(0,a.Wm)(l),(0,a.Wm)(v)])}var i=n.p+"img/logo.728c7153.png";const u=e=>((0,a.dD)("data-v-76c20a25"),e=e(),(0,a.Cn)(),e),d={class:"header"},s={class:"toolbar"},l=u((()=>(0,a._)("img",{src:i,alt:"Menu"},null,-1))),v=[l],m=(0,a.uE)('<h1 class="title" data-v-76c20a25>Nordic Gamer</h1><div class="nav-links" data-v-76c20a25><a href="#home" data-v-76c20a25>Home</a><a href="#about" data-v-76c20a25>About</a><a href="#buy" data-v-76c20a25>How to buy</a><a href="#tokenomics" data-v-76c20a25>Tokenomics</a><a href="#roadmap" data-v-76c20a25>Roadmap</a><a href="#contact" data-v-76c20a25>Contact</a></div>',2);function p(e,t,n,o,r,c){return(0,a.wg)(),(0,a.iD)("header",d,[(0,a._)("nav",s,[(0,a._)("button",{onClick:t[0]||(t[0]=(...e)=>c.toggleMenu&&c.toggleMenu(...e)),class:"menu-button"},v),m])])}var f={name:"NordicHeader",methods:{toggleMenu(){}}},h=n(744);const g=(0,h.Z)(f,[["render",p],["__scopeId","data-v-76c20a25"]]);var b=g;const _=e=>((0,a.dD)("data-v-27880928"),e=e(),(0,a.Cn)(),e),w={id:"home",class:"home-section"},y=_((()=>(0,a._)("div",{class:"text-container"},[(0,a._)("h2",null,"Welcome to Nordic Gamer"),(0,a._)("p",null,"Your decentralized meme coin platform.")],-1))),C=[y];function x(e,t,n,o,r,c){return(0,a.wg)(),(0,a.iD)("section",w,C)}var N={name:"NordicHome"};const D=(0,h.Z)(N,[["render",x],["__scopeId","data-v-27880928"]]);var O=D;const k=e=>((0,a.dD)("data-v-339c04dd"),e=e(),(0,a.Cn)(),e),M={id:"about",style:{padding:"64px 0","background-color":"#2C3E50",color:"#ECF0F1"}},H=k((()=>(0,a._)("div",{style:{"max-width":"1170px",margin:"auto"}},[(0,a._)("h2",{style:{"font-size":"2rem","margin-bottom":"16px","text-align":"center"}}," About Nordic Gamer "),(0,a._)("p",null,"Welcome to Nordic Gamer"),(0,a._)("p",null,"Coin"),(0,a._)("p",null,"Yes")],-1))),A=[H];function F(e,t,n,o,r,c){return(0,a.wg)(),(0,a.iD)("div",M,A)}var G={name:"NordicAbout"};const W=(0,h.Z)(G,[["render",F],["__scopeId","data-v-339c04dd"]]);var j=W;const Z=e=>((0,a.dD)("data-v-e5b50b4c"),e=e(),(0,a.Cn)(),e),E={id:"contact",class:"contact-container"},I={class:"container"},Y=Z((()=>(0,a._)("h2",null,"Contact Us",-1))),z=Z((()=>(0,a._)("p",null,"Have questions or want to learn more about Nordic Gamer? Get in touch with us!",-1))),R=Z((()=>(0,a._)("input",{type:"text",placeholder:"Name"},null,-1))),T=Z((()=>(0,a._)("input",{type:"email",placeholder:"Email"},null,-1))),P=Z((()=>(0,a._)("textarea",{rows:"4",placeholder:"Message"},null,-1))),S=Z((()=>(0,a._)("button",{type:"submit"},"Send Message",-1))),q=[R,T,P,S];function U(e,t,n,r,c,i){return(0,a.wg)(),(0,a.iD)("div",E,[(0,a._)("div",I,[Y,z,(0,a._)("form",{onSubmit:t[0]||(t[0]=(0,o.iM)(((...e)=>i.sendMessage&&i.sendMessage(...e)),["prevent"])),class:"contact-form"},q,32)])])}var B={name:"NordicContact",methods:{sendMessage(){}}};const J=(0,h.Z)(B,[["render",U],["__scopeId","data-v-e5b50b4c"]]);var K=J,L=n(577);const Q={class:"footer"},V={class:"container"};function X(e,t,n,o,r,c){return(0,a.wg)(),(0,a.iD)("footer",Q,[(0,a._)("div",V,[(0,a._)("p",null,"© "+(0,L.zw)(c.currentYear)+" Nordic Gamer. All Rights Reserved.",1)])])}var $={name:"NordicFooter",computed:{currentYear(){return(new Date).getFullYear()}}};const ee=(0,h.Z)($,[["render",X],["__scopeId","data-v-74a123dc"]]);var te=ee,ne={name:"App",components:{Header:b,Home:O,About:j,Contact:K,Footer:te}};const oe=(0,h.Z)(ne,[["render",c]]);var ae=oe;(0,o.ri)(ae).mount("#app")}},t={};function n(o){var a=t[o];if(void 0!==a)return a.exports;var r=t[o]={exports:{}};return e[o](r,r.exports,n),r.exports}n.m=e,function(){var e=[];n.O=function(t,o,a,r){if(!o){var c=1/0;for(s=0;s<e.length;s++){o=e[s][0],a=e[s][1],r=e[s][2];for(var i=!0,u=0;u<o.length;u++)(!1&r||c>=r)&&Object.keys(n.O).every((function(e){return n.O[e](o[u])}))?o.splice(u--,1):(i=!1,r<c&&(c=r));if(i){e.splice(s--,1);var d=a();void 0!==d&&(t=d)}}return t}r=r||0;for(var s=e.length;s>0&&e[s-1][2]>r;s--)e[s]=e[s-1];e[s]=[o,a,r]}}(),function(){n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){n.p="/website/"}(),function(){var e={143:0};n.O.j=function(t){return 0===e[t]};var t=function(t,o){var a,r,c=o[0],i=o[1],u=o[2],d=0;if(c.some((function(t){return 0!==e[t]}))){for(a in i)n.o(i,a)&&(n.m[a]=i[a]);if(u)var s=u(n)}for(t&&t(o);d<c.length;d++)r=c[d],n.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return n.O(s)},o=self["webpackChunknordic_gamer"]=self["webpackChunknordic_gamer"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=n.O(void 0,[998],(function(){return n(265)}));o=n.O(o)})();
//# sourceMappingURL=app.5208214f.js.map