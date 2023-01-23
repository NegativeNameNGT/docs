"use strict";(self.webpackChunkdocs_docusaurus=self.webpackChunkdocs_docusaurus||[]).push([[7320],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var n=r(67294);function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,s=function(e,t){if(null==e)return{};var r,n,s={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(s[r]=e[r]);return s}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}var i=n.createContext({}),l=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,s=e.mdxType,a=e.originalType,i=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),f=l(r),d=s,m=f["".concat(i,".").concat(d)]||f[d]||u[d]||a;return r?n.createElement(m,c(c({ref:t},p),{},{components:r})):n.createElement(m,c({ref:t},p))}));function d(e,t){var r=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var a=r.length,c=new Array(a);c[0]=f;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:s,c[1]=o;for(var l=2;l<a;l++)c[l]=r[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},10871:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>c,default:()=>b,frontMatter:()=>a,metadata:()=>o,toc:()=>l});var n=r(87462),s=(r(67294),r(3905));const a={title:"Acteur de base",description:"Base class for all Actor entities",tags:["base-class"]},c=void 0,o={unversionedId:"scripting-reference/classes/base-classes/actor",id:"scripting-reference/classes/base-classes/actor",title:"Acteur de base",description:"Base class for all Actor entities",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/scripting-reference/classes/base-classes/actor.mdx",sourceDirName:"scripting-reference/classes/base-classes",slug:"/scripting-reference/classes/base-classes/actor",permalink:"/fr/docs/next/scripting-reference/classes/base-classes/actor",draft:!1,editUrl:"https://crowdin.com/project/nanos-world-docs/fr",tags:[{label:"base-class",permalink:"/fr/docs/next/tags/base-class"}],version:"current",frontMatter:{title:"Acteur de base",description:"Base class for all Actor entities",tags:["base-class"]},sidebar:"main",previous:{title:"\ud83d\udda5\ufe0f WebUI",permalink:"/fr/docs/next/scripting-reference/classes/webui"},next:{title:"Base Entity",permalink:"/fr/docs/next/scripting-reference/classes/base-classes/entity"}},i={},l=[{value:"\ud83d\uddff\xa0Static Functions",id:"static-functions",level:2},{value:"\ud83e\udda0\xa0Functions",id:"functions",level:2},{value:"\ud83d\ude80\xa0Events",id:"events",level:2}],p=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,s.kt)("div",t)},u=p("HeaderDeclaration"),f=p("StaticFunctionsDeclaration"),d=p("FunctionsDeclaration"),m=p("EventsDeclaration"),y={toc:l};function b(e){let{components:t,...r}=e;return(0,s.kt)("wrapper",(0,n.Z)({},y,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)(u,{type:"Class",name:"Actor",mdxType:"HeaderDeclaration"}),(0,s.kt)("admonition",{type:"info"},(0,s.kt)("p",{parentName:"admonition"},"This is the base class for all Actors we have. Vous ne pouvez pas la cr\xe9er directement.")),(0,s.kt)("h2",{id:"static-functions"},"\ud83d\uddff\xa0Static Functions"),(0,s.kt)(f,{type:"Class",name:"Actor",mdxType:"StaticFunctionsDeclaration"}),(0,s.kt)("h2",{id:"functions"},"\ud83e\udda0\xa0Functions"),(0,s.kt)("admonition",{type:"caution"},(0,s.kt)("p",{parentName:"admonition"},"Some of the following methods may not work on certain Actor classes.")),(0,s.kt)(d,{type:"Class",name:"Actor",mdxType:"FunctionsDeclaration"}),(0,s.kt)("h2",{id:"events"},"\ud83d\ude80\xa0Events"),(0,s.kt)(m,{type:"Class",name:"Actor",mdxType:"EventsDeclaration"}))}b.isMDXComponent=!0}}]);