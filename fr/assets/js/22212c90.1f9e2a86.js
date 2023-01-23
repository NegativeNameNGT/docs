"use strict";(self.webpackChunkdocs_docusaurus=self.webpackChunkdocs_docusaurus||[]).push([[583],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>m});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=a.createContext({}),c=function(e){var t=a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},d=function(e){var t=c(e.components);return a.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,i=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=c(r),m=n,g=u["".concat(i,".").concat(m)]||u[m]||p[m]||l;return r?a.createElement(g,s(s({ref:t},d),{},{components:r})):a.createElement(g,s({ref:t},d))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,s=new Array(l);s[0]=u;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:n,s[1]=o;for(var c=2;c<l;c++)s[c]=r[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},7925:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>p,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var a=r(87462),n=(r(67294),r(3905));const l={title:"Couleur de tchat",description:"Apprenez \xe0 afficher des messages color\xe9s dans le chat int\xe9gr\xe9 du jeu",tags:["tutorial-example"]},s=void 0,o={unversionedId:"getting-started/tutorials-and-examples/chat-colors",id:"version-latest/getting-started/tutorials-and-examples/chat-colors",title:"Couleur de tchat",description:"Apprenez \xe0 afficher des messages color\xe9s dans le chat int\xe9gr\xe9 du jeu",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-latest/getting-started/tutorials-and-examples/chat-colors.md",sourceDirName:"getting-started/tutorials-and-examples",slug:"/getting-started/tutorials-and-examples/chat-colors",permalink:"/fr/docs/getting-started/tutorials-and-examples/chat-colors",draft:!1,editUrl:"https://crowdin.com/project/nanos-world-docs/fr",tags:[{label:"tutorial-example",permalink:"/fr/docs/tags/tutorial-example"}],version:"latest",frontMatter:{title:"Couleur de tchat",description:"Apprenez \xe0 afficher des messages color\xe9s dans le chat int\xe9gr\xe9 du jeu",tags:["tutorial-example"]},sidebar:"version-latest/main",previous:{title:"Blueprint Communication",permalink:"/fr/docs/getting-started/tutorials-and-examples/blueprint-communication"},next:{title:"Portes",permalink:"/fr/docs/getting-started/tutorials-and-examples/doors"}},i={},c=[{value:"Exemple",id:"exemple",level:2},{value:"Liste des tags de style",id:"liste-des-tags-de-style",level:2}],d={toc:c};function p(e){let{components:t,...l}=e;return(0,n.kt)("wrapper",(0,a.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Apprenez \xe0 afficher des messages color\xe9s dans le chat int\xe9gr\xe9 du jeu"),(0,n.kt)("p",null,(0,n.kt)("img",{src:r(49370).Z,width:"314",height:"309"})),(0,n.kt)("p",null,"Pour colorer un texte il vous suffit de l'ins\xe9rer entre deux balises de style : ",(0,n.kt)("inlineCode",{parentName:"p"},"<TAG> mon super texte </>"),"."),(0,n.kt)("h2",{id:"exemple"},"Exemple"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="Server/Index.lua"',title:'"Server/Index.lua"'},'Server.BroadcastChatMessage("Hello with Normal text message!")\nServer.BroadcastChatMessage("Hello with <cyan>Cyan</> text message!")\nServer.BroadcastChatMessage("Hello with <green>Green</> text message!")\nServer.BroadcastChatMessage("Hello with <blue>Blue</> text message!")\nServer.BroadcastChatMessage("Hello with <marengo>Marengo</> text message!")\nServer.BroadcastChatMessage("Hello with <yellow>Yellow</> text message!")\nServer.BroadcastChatMessage("Hello with <orange>Orange</> text message!")\nServer.BroadcastChatMessage("Hello with <red>Red</> text message!")\nServer.BroadcastChatMessage("Hello with <grey>Grey</> text message!")\nServer.BroadcastChatMessage("Hello with <bold>Bold</> text message!")\nServer.BroadcastChatMessage("Hello with <italic>Italic</> text message!")\n')),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"Il est impossible de combiner plusieurs styles ensemble ","(","ex.: Bold + Red",")",".")),(0,n.kt)("h2",{id:"liste-des-tags-de-style"},"Liste des tags de style"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"<cyan>")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"<green>")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"<blue>")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"<purple>")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"<marengo>")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"<yellow>")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"<orange>")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"<red>")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"<grey>")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"<bold>")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"<italic>"))))}p.isMDXComponent=!0},49370:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/chat-colors-9596ca9eed3901b5207c3154a74ef645.webp"}}]);