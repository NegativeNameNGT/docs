"use strict";(self.webpackChunkdocs_docusaurus=self.webpackChunkdocs_docusaurus||[]).push([[5266],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(n),f=i,m=u["".concat(c,".").concat(f)]||u[f]||d[f]||a;return n?r.createElement(m,o(o({ref:t},p),{},{components:n})):r.createElement(m,o({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:i,o[1]=s;for(var l=2;l<a;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},55431:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>y,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var r=n(87462),i=(n(67294),n(3905));const a={title:"NanosMath",description:"A table containing useful and aux Math functions",tags:["utility-class"],sidebar_position:2},o=void 0,s={unversionedId:"scripting-reference/utility-libraries/nanosmath",id:"version-latest/scripting-reference/utility-libraries/nanosmath",title:"NanosMath",description:"A table containing useful and aux Math functions",source:"@site/versioned_docs/version-latest/scripting-reference/utility-libraries/nanosmath.mdx",sourceDirName:"scripting-reference/utility-libraries",slug:"/scripting-reference/utility-libraries/nanosmath",permalink:"/pt-BR/docs/scripting-reference/utility-libraries/nanosmath",draft:!1,editUrl:"https://crowdin.com/project/nanos-world-docs/pt-BR",tags:[{label:"utility-class",permalink:"/pt-BR/docs/tags/utility-class"}],version:"latest",lastUpdatedBy:"Timmy",lastUpdatedAt:1680779871,formattedLastUpdatedAt:"6 de abr. de 2023",sidebarPosition:2,frontMatter:{title:"NanosMath",description:"A table containing useful and aux Math functions",tags:["utility-class"],sidebar_position:2},sidebar:"version-latest/main",previous:{title:"JSON",permalink:"/pt-BR/docs/scripting-reference/utility-libraries/json"},next:{title:"NanosUtils",permalink:"/pt-BR/docs/scripting-reference/utility-libraries/nanosutils"}},c={},l=[{value:"\ud83c\udf92\xa0Examples",id:"examples",level:2},{value:"\ud83d\uddff\xa0Static Functions",id:"static-functions",level:2}],p=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",t)},u=p("HeaderDeclaration"),d=p("StaticFunctionsDeclaration"),f={toc:l},m="wrapper";function y(e){let{components:t,...n}=e;return(0,i.kt)(m,(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)(u,{type:"UtilityClass",name:"NanosMath",is_static:!0,is_open_source:!0,mdxType:"HeaderDeclaration"}),(0,i.kt)("h2",{id:"examples"},"\ud83c\udf92\xa0Examples"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},"local axis = NanosMath.ClampAxis(720)\n")),(0,i.kt)("h2",{id:"static-functions"},"\ud83d\uddff\xa0Static Functions"),(0,i.kt)(d,{type:"UtilityClass",name:"NanosMath",mdxType:"StaticFunctionsDeclaration"}))}y.isMDXComponent=!0}}]);