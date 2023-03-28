"use strict";(self.webpackChunkdocs_docusaurus=self.webpackChunkdocs_docusaurus||[]).push([[5937],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(n),f=a,m=p["".concat(c,".").concat(f)]||p[f]||d[f]||i;return n?r.createElement(m,o(o({ref:t},u),{},{components:n})):r.createElement(m,o({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[p]="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},74643:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>y,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var r=n(87462),a=(n(67294),n(3905));const i={title:"NanosMath",description:"A table containing useful and aux Math functions",tags:["utility-class"],sidebar_position:2},o=void 0,s={unversionedId:"scripting-reference/utility-libraries/nanosmath",id:"scripting-reference/utility-libraries/nanosmath",title:"NanosMath",description:"A table containing useful and aux Math functions",source:"@site/docs/scripting-reference/utility-libraries/nanosmath.mdx",sourceDirName:"scripting-reference/utility-libraries",slug:"/scripting-reference/utility-libraries/nanosmath",permalink:"/fr/docs/next/scripting-reference/utility-libraries/nanosmath",draft:!1,editUrl:"https://crowdin.com/project/nanos-world-docs/fr",tags:[{label:"utility-class",permalink:"/fr/docs/next/tags/utility-class"}],version:"current",lastUpdatedBy:"Gabriel T. Nardy",lastUpdatedAt:1680022145,formattedLastUpdatedAt:"28 mars 2023",sidebarPosition:2,frontMatter:{title:"NanosMath",description:"A table containing useful and aux Math functions",tags:["utility-class"],sidebar_position:2},sidebar:"main",previous:{title:"JSON",permalink:"/fr/docs/next/scripting-reference/utility-libraries/json"},next:{title:"NanosUtils",permalink:"/fr/docs/next/scripting-reference/utility-libraries/nanosutils"}},c={},l=[{value:"\ud83c\udf92\xa0Examples",id:"examples",level:2},{value:"\ud83d\uddff\xa0Static Functions",id:"static-functions",level:2}],u=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",t)},p=u("HeaderDeclaration"),d=u("StaticFunctionsDeclaration"),f={toc:l},m="wrapper";function y(e){let{components:t,...n}=e;return(0,a.kt)(m,(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(p,{type:"UtilityClass",name:"NanosMath",is_static:!0,is_open_source:!0,mdxType:"HeaderDeclaration"}),(0,a.kt)("h2",{id:"examples"},"\ud83c\udf92\xa0Examples"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},"local axis = NanosMath.ClampAxis(720)\n")),(0,a.kt)("h2",{id:"static-functions"},"\ud83d\uddff\xa0Static Functions"),(0,a.kt)(d,{type:"UtilityClass",name:"NanosMath",mdxType:"StaticFunctionsDeclaration"}))}y.isMDXComponent=!0}}]);