"use strict";(self.webpackChunkdocs_docusaurus=self.webpackChunkdocs_docusaurus||[]).push([[1734],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>f});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),l=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},d=function(e){var n=l(e.components);return r.createElement(c.Provider,{value:n},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=l(t),m=a,f=p["".concat(c,".").concat(m)]||p[m]||u[m]||o;return t?r.createElement(f,s(s({ref:n},d),{},{components:t})):r.createElement(f,s({ref:n},d))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,s=new Array(o);s[0]=m;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i[p]="string"==typeof e?e:a,s[1]=i;for(var l=2;l<o;l++)s[l]=t[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},93667:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>b,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var r=t(87462),a=(t(67294),t(3905));const o={title:"\ud83d\udca3 Grenade",description:"Chad Grenade",sidebar_position:0,tags:["class"]},s=void 0,i={unversionedId:"scripting-reference/classes/grenade",id:"scripting-reference/classes/grenade",title:"\ud83d\udca3 Grenade",description:"Chad Grenade",source:"@site/i18n/de/docusaurus-plugin-content-docs/current/scripting-reference/classes/grenade.mdx",sourceDirName:"scripting-reference/classes",slug:"/scripting-reference/classes/grenade",permalink:"/de/docs/next/scripting-reference/classes/grenade",draft:!1,editUrl:"https://crowdin.com/project/nanos-world-docs/de",tags:[{label:"class",permalink:"/de/docs/next/tags/class"}],version:"current",sidebarPosition:0,frontMatter:{title:"\ud83d\udca3 Grenade",description:"Chad Grenade",sidebar_position:0,tags:["class"]},sidebar:"main",previous:{title:"\ud83d\udcc1 File",permalink:"/de/docs/next/scripting-reference/classes/file"},next:{title:"\ud83d\udca1 Light",permalink:"/de/docs/next/scripting-reference/classes/light"}},c={},l=[{value:"\ud83c\udf92\xa0Examples",id:"examples",level:2},{value:"\ud83d\udee0\xa0Constructors",id:"constructors",level:2},{value:"\ud83d\uddff\xa0Static Functions",id:"static-functions",level:2},{value:"\ud83e\udda0\xa0Functions",id:"functions",level:2},{value:"\ud83d\ude80\xa0Events",id:"events",level:2}],d=e=>function(n){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",n)},p=d("HeaderDeclaration"),u=d("ConstructorDeclaration"),m=d("StaticFunctionsDeclaration"),f=d("FunctionsDeclaration"),g=d("EventsDeclaration"),y={toc:l},v="wrapper";function b(e){let{components:n,...t}=e;return(0,a.kt)(v,(0,r.Z)({},y,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)(p,{type:"Class",name:"Grenade",image:"/img/docs/grenade.webp",mdxType:"HeaderDeclaration"}),(0,a.kt)("h2",{id:"examples"},"\ud83c\udf92\xa0Examples"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},'local new_grenade = Grenade(\n    Vector(-900, 185, 215),\n    Rotator(0, 90, 90),\n    "nanos-world::SM_Grenade_G67",\n    "nanos-world::P_Grenade_Special",\n    "nanos-world::A_Explosion_Large"\n)\n')),(0,a.kt)("h2",{id:"constructors"},"\ud83d\udee0\xa0Constructors"),(0,a.kt)(u,{type:"Class",name:"Grenade",mdxType:"ConstructorDeclaration"}),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"nanos world provides a special ",(0,a.kt)("em",{parentName:"p"},"Particle*")," called ",(0,a.kt)("inlineCode",{parentName:"p"},"nanos-world::P_Grenade_Special")," which spawns different particles depending on the surface it explodes, and also if is underwater."),(0,a.kt)("p",{parentName:"admonition"},"*",(0,a.kt)("em",{parentName:"p"},'This "Particle" is just a special identifier which can only be used on Grenades!'))),(0,a.kt)("h2",{id:"static-functions"},"\ud83d\uddff\xa0Static Functions"),(0,a.kt)(m,{type:"Class",name:"Grenade",mdxType:"StaticFunctionsDeclaration"}),(0,a.kt)("h2",{id:"functions"},"\ud83e\udda0\xa0Functions"),(0,a.kt)(f,{type:"Class",name:"Grenade",mdxType:"FunctionsDeclaration"}),(0,a.kt)("h2",{id:"events"},"\ud83d\ude80\xa0Events"),(0,a.kt)(g,{type:"Class",name:"Grenade",mdxType:"EventsDeclaration"}))}b.isMDXComponent=!0}}]);