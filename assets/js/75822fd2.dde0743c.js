"use strict";(self.webpackChunkdocs_docusaurus=self.webpackChunkdocs_docusaurus||[]).push([[2910],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),c=p(n),m=a,g=c["".concat(l,".").concat(m)]||c[m]||u[m]||o;return n?r.createElement(g,s(s({ref:t},d),{},{components:n})):r.createElement(g,s({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=c;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var p=2;p<o;p++)s[p]=n[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},25422:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return u}});var r=n(83117),a=n(80102),o=(n(67294),n(3905)),s=["components"],i={title:"Setting Up Unreal Engine",description:"Learn how to Create and Import custom Assets into nanos world",sidebar_position:0,tags:["assets"],keywords:["assets","ADK","import","unreal"]},l=void 0,p={unversionedId:"assets-modding/creating-assets/setting-up-ue",id:"assets-modding/creating-assets/setting-up-ue",title:"Setting Up Unreal Engine",description:"Learn how to Create and Import custom Assets into nanos world",source:"@site/docs/assets-modding/creating-assets/setting-up-ue.md",sourceDirName:"assets-modding/creating-assets",slug:"/assets-modding/creating-assets/setting-up-ue",permalink:"/docs/next/assets-modding/creating-assets/setting-up-ue",draft:!1,editUrl:"https://github.com/nanos-world/docs/edit/master/docs/assets-modding/creating-assets/setting-up-ue.md",tags:[{label:"assets",permalink:"/docs/next/tags/assets"}],version:"current",lastUpdatedBy:"Gabriel T. Nardy",lastUpdatedAt:1659270773,formattedLastUpdatedAt:"Jul 31, 2022",sidebarPosition:0,frontMatter:{title:"Setting Up Unreal Engine",description:"Learn how to Create and Import custom Assets into nanos world",sidebar_position:0,tags:["assets"],keywords:["assets","ADK","import","unreal"]},sidebar:"main",previous:{title:"Enums",permalink:"/docs/next/scripting-reference/glossary/enums"},next:{title:"Assets Development Kit",permalink:"/docs/next/assets-modding/creating-assets/adk-assets-development-kit"}},d={},u=[{value:"On Windows",id:"on-windows",level:2},{value:"On Linux",id:"on-linux",level:2},{value:"Next Steps",id:"next-steps",level:2}],c={toc:u};function m(e){var t=e.components,n=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"How to set up Unreal Engine to import assets into nanos world"),(0,o.kt)("p",null,"Currently all our workflow for exporting content is through Unreal Engine as the Assets need to be Cooked and Packaged in the correct way before being accessible by the game."),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Little by little we are able to allow loading some assets without the need of cooking them through Unreal, such as the already supported ",(0,o.kt)("strong",{parentName:"p"},"Textures")," and ",(0,o.kt)("strong",{parentName:"p"},"Sounds"),".")),(0,o.kt)("p",null,"The first step for creating your own Assets, is downloading and installing Unreal Engine."),(0,o.kt)("h2",{id:"on-windows"},"On Windows"),(0,o.kt)("p",null,"On Windows, the download of Unreal Engine must be done from inside ",(0,o.kt)("a",{parentName:"p",href:"https://www.unrealengine.com/en-US/download"},"Epic Games Launcher"),". Please download and install it before proceeding to the Unreal installation:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Open Epic Games Launcher."),(0,o.kt)("li",{parentName:"ol"},"Access ",(0,o.kt)("strong",{parentName:"li"},"Unreal Engine")," tab."),(0,o.kt)("li",{parentName:"ol"},"Open ",(0,o.kt)("strong",{parentName:"li"},"Library")," tab."),(0,o.kt)("li",{parentName:"ol"},"Press ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"+"))," and select the correct ",(0,o.kt)("strong",{parentName:"li"},"Unreal Engine")," version (currently nanos world is on ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"5.0.X")),")."),(0,o.kt)("li",{parentName:"ol"},"Press ",(0,o.kt)("inlineCode",{parentName:"li"},"Install")," and a Popup will appear."),(0,o.kt)("li",{parentName:"ol"},"Select an installation folder and press ",(0,o.kt)("inlineCode",{parentName:"li"},"Install"),".")),(0,o.kt)("h2",{id:"on-linux"},"On Linux"),(0,o.kt)("p",null,"If you are on Linux, Epic Games is releasing standalone binaries which can be downloaded directly from their site. Download the latest Unreal Engine version ",(0,o.kt)("a",{parentName:"p",href:"https://www.unrealengine.com/en-US/linux"},"here"),"."),(0,o.kt)("h2",{id:"next-steps"},"Next Steps"),(0,o.kt)("p",null,"After downloading Unreal Engine, launch it once to finish the engine installation."),(0,o.kt)("p",null,"And you are ready to proceed to the next step to download and use the Assets Development Kit!"))}m.isMDXComponent=!0}}]);