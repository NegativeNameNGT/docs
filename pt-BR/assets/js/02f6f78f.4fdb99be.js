"use strict";(self.webpackChunkdocs_docusaurus=self.webpackChunkdocs_docusaurus||[]).push([[1034],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,h=d["".concat(l,".").concat(m)]||d[m]||u[m]||s;return n?a.createElement(h,o(o({ref:t},p),{},{components:n})):a.createElement(h,o({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,o=new Array(s);o[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[d]="string"==typeof e?e:r,o[1]=i;for(var c=2;c<s;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3123:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const s={},o=void 0,i={unversionedId:"assets-modding/creating-assets/maps-and-levels/water",id:"assets-modding/creating-assets/maps-and-levels/water",title:"water",description:"- - -",source:"@site/i18n/pt-BR/docusaurus-plugin-content-docs/current/assets-modding/creating-assets/maps-and-levels/water.md",sourceDirName:"assets-modding/creating-assets/maps-and-levels",slug:"/assets-modding/creating-assets/maps-and-levels/water",permalink:"/pt-BR/docs/next/assets-modding/creating-assets/maps-and-levels/water",draft:!1,editUrl:"https://crowdin.com/project/nanos-world-docs/pt-BR",tags:[],version:"current",frontMatter:{},sidebar:"main",previous:{title:"Criar um mapa personalizado",permalink:"/pt-BR/docs/next/assets-modding/creating-assets/maps-and-levels/importing-maps"},next:{title:"Default Asset Pack List",permalink:"/pt-BR/docs/next/assets-modding/default-asset-pack/default-assets-list"}},l={},c=[{value:"How Objects react to Water",id:"how-objects-react-to-water",level:2},{value:"Props &amp; Pickables",id:"props--pickables",level:3},{value:"Vehicles",id:"vehicles",level:3},{value:"Character",id:"character",level:3}],p={toc:c},d="wrapper";function u(e){let{components:t,...s}=e;return(0,r.kt)(d,(0,a.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("hr",null),(0,r.kt)("p",null,"title: Water description: How to add Unreal Water in your Level and seamlessly integrate it with nanos world tags: ","[assets, water]"," keywords: ","[map, level, water, unreal, physics]"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"How to add Unreal Water in your Level and seamlessly integrate it with nanos world"),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(9357).Z,width:"1367",height:"767"})),(0,r.kt)("p",null,"Since Unreal Engine 4.26, it is possible to use an amazing and beautiful ",(0,r.kt)("a",{parentName:"p",href:"https://docs.unrealengine.com/4.27/en-US/BuildingWorlds/Water/"},"Water System")," in your Maps. And nanos world managed to integrate this system seamlessly in our game."),(0,r.kt)("p",null,"Any ",(0,r.kt)("strong",{parentName:"p"},"Prop"),", ",(0,r.kt)("strong",{parentName:"p"},"Character"),", ",(0,r.kt)("strong",{parentName:"p"},"Vehicle"),", or even ",(0,r.kt)("strong",{parentName:"p"},"Pickables")," will react procedurally to this Water System, no additional tweaks are necessary, you can just drag-n-drop your Water Actors into your Level and it works!"),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Using the new Water Plugin from Unreal requires you enabling it in your ADK Project, and also requires you have installed Visual Studio and all usual .NET dependencies for compiling it.")),(0,r.kt)("p",null,"In ",(0,r.kt)("a",{parentName:"p",href:"https://docs.unrealengine.com/4.27/en-US/BuildingWorlds/Water/"},"Unreal Engine Documentation")," you can find dozens of guides and tutorials on how to use it, and don't worry, everything will work once you import it into nanos world!"),(0,r.kt)("h2",{id:"how-objects-react-to-water"},"How Objects react to Water"),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(43698).Z,width:"1157",height:"655"})),(0,r.kt)("p",null,"Unreal Water has the concept of Buoyance Spheres, each sphere represents a Buoyance element which will make the object float."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"We still want to expose ways of you customizing and controlling the Buoyance Spheres through scripting!")),(0,r.kt)("h3",{id:"props--pickables"},"Props & Pickables"),(0,r.kt)("p",null,"Props and Pickables are the most straightforward objects, they will automatically get ",(0,r.kt)("strong",{parentName:"p"},"one")," Buoyance Sphere at the same size of their Meshes."),(0,r.kt)("h3",{id:"vehicles"},"Vehicles"),(0,r.kt)("p",null,"Vehicles will automatically get ",(0,r.kt)("strong",{parentName:"p"},"four")," Buoyance Spheres, positioned around each Wheel, which will make Vehicles float and do not turn that easily."),(0,r.kt)("h3",{id:"character"},"Character"),(0,r.kt)("p",null,"Characters use a more complex system, integrated with Swimming states and animations. It uses ",(0,r.kt)("strong",{parentName:"p"},"one")," Buoyance Sphere as well, slightly translated to make the swimming animation transitions work perfectly."))}u.isMDXComponent=!0},43698:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/water-boat-f5ee62b09c2b57d2201d7dc86cbc06f9.webp"},9357:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/water-f62686b6d6cd6794e0b0d27364cb5485.webp"}}]);