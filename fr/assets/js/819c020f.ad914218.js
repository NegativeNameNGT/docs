"use strict";(self.webpackChunkdocs_docusaurus=self.webpackChunkdocs_docusaurus||[]).push([[8159],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),u=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=u(e.components);return n.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(a),m=r,f=p["".concat(i,".").concat(m)]||p[m]||d[m]||l;return a?n.createElement(f,o(o({ref:t},c),{},{components:a})):n.createElement(f,o({ref:t},c))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=p;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var u=2;u<l;u++)o[u]=a[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},85162:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(67294),r=a(86010);const l="tabItem_Ymn6";function o(e){let{children:t,hidden:a,className:o}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,o),hidden:a},t)}},74866:(e,t,a)=>{a.d(t,{Z:()=>w});var n=a(87462),r=a(67294),l=a(86010),o=a(12466),s=a(16550),i=a(91980),u=a(67392),c=a(50012);function d(e){return function(e){return r.Children.map(e,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function p(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??d(a);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function m(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:a}=e;const n=(0,s.k6)(),l=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,i._X)(l),(0,r.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(n.location.search);t.set(l,e),n.replace({...n.location,search:t.toString()})}),[l,n])]}function k(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,l=p(e),[o,s]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:l}))),[i,u]=f({queryString:a,groupId:n}),[d,k]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,l]=(0,c.Nk)(a);return[n,(0,r.useCallback)((e=>{a&&l.set(e)}),[a,l])]}({groupId:n}),g=(()=>{const e=i??d;return m({value:e,tabValues:l})?e:null})();(0,r.useLayoutEffect)((()=>{g&&s(g)}),[g]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);s(e),u(e),k(e)}),[u,k,l]),tabValues:l}}var g=a(72389);const b="tabList__CuJ",v="tabItem_LNqP";function h(e){let{className:t,block:a,selectedValue:s,selectValue:i,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,o.o5)(),p=e=>{const t=e.currentTarget,a=c.indexOf(t),n=u[a].value;n!==s&&(d(t),i(n))},m=e=>{var t;let a=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;a=c[t]??c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;a=c[t]??c[c.length-1];break}}null==(t=a)||t.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":a},t)},u.map((e=>{let{value:t,label:a,attributes:o}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>c.push(e),onKeyDown:m,onClick:p},o,{className:(0,l.Z)("tabs__item",v,null==o?void 0:o.className,{"tabs__item--active":s===t})}),a??t)})))}function y(e){let{lazy:t,children:a,selectedValue:n}=e;if(a=Array.isArray(a)?a:[a],t){const e=a.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function N(e){const t=k(e);return r.createElement("div",{className:(0,l.Z)("tabs-container",b)},r.createElement(h,(0,n.Z)({},e,t)),r.createElement(y,(0,n.Z)({},e,t)))}function w(e){const t=(0,g.Z)();return r.createElement(N,(0,n.Z)({key:String(t)},e))}},88717:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>s,metadata:()=>u,toc:()=>d});var n=a(87462),r=(a(67294),a(3905)),l=a(74866),o=a(85162);const s={title:"Command Line Interface - CLI",description:"How to use nanos world CLI to install packages and update the server.",sidebar_position:3,tags:["hosting"]},i=void 0,u={unversionedId:"core-concepts/server-manual/nanos-world-cli",id:"core-concepts/server-manual/nanos-world-cli",title:"Command Line Interface - CLI",description:"How to use nanos world CLI to install packages and update the server.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/core-concepts/server-manual/nanos-world-cli.mdx",sourceDirName:"core-concepts/server-manual",slug:"/core-concepts/server-manual/nanos-world-cli",permalink:"/fr/docs/next/core-concepts/server-manual/nanos-world-cli",draft:!1,editUrl:"https://crowdin.com/project/nanos-world-docs/fr",tags:[{label:"hosting",permalink:"/fr/docs/next/tags/hosting"}],version:"current",sidebarPosition:3,frontMatter:{title:"Command Line Interface - CLI",description:"How to use nanos world CLI to install packages and update the server.",sidebar_position:3,tags:["hosting"]},sidebar:"main",previous:{title:"Configuration du serveur",permalink:"/fr/docs/next/core-concepts/server-manual/server-configuration"},next:{title:"Game Panels",permalink:"/fr/docs/next/core-concepts/server-manual/game-panels"}},c={},d=[{value:"Starting the CLI",id:"starting-the-cli",level:2},{value:"CLI Commands",id:"cli-commands",level:2},{value:"One-Liner CLI",id:"one-liner-cli",level:2}],p={toc:d};function m(e){let{components:t,...s}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"How to use nanos world CLI to install packages and update the server."),(0,r.kt)("p",null,"nanos world provides a CLI ","(","Command Line Interface",")"," to help updating the server, packages and assets and also downloading them!"),(0,r.kt)("h2",{id:"starting-the-cli"},"Starting the CLI"),(0,r.kt)("p",null,"To run the cli, start the server with ",(0,r.kt)("inlineCode",{parentName:"p"},"--cli")," argument:"),(0,r.kt)(l.Z,{defaultValue:"cmd",values:[{label:"Windows",value:"cmd"},{label:"Linux",value:"linux"}],mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"cmd",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"./NanosWorldServer.exe --cli\n"))),(0,r.kt)(o.Z,{value:"linux",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"./NanosWorldServer.sh --cli\n")))),(0,r.kt)("p",null," After started, if you type ",(0,r.kt)("inlineCode",{parentName:"p"},"help")," you can see all the available commands:"),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(96999).Z,width:"890",height:"171"})),(0,r.kt)("h2",{id:"cli-commands"},"CLI Commands"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Commands"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"install package [PACKAGE_NAMES...]")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Install Packages")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"update package [PACKAGE_NAMES...]")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Update Packages")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"install assets [ASSET_NAMES...]")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Install Asset Packs")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"update assets [ASSET_NAMES...]")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Update Asset Packs")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"add package [PACKAGE_PATH]")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Creates a new Package in a interactive way")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"add assets [ASSET_PATH]")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Creates a new Asset Pack in a interactive way")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"check")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Check for Updates")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"help")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Display all Commands")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"stop")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Stops the CLI")))),(0,r.kt)("h2",{id:"one-liner-cli"},"One-Liner CLI"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"It is also possible to run the CLI in a non-interactive mode, just run the command together after the ",(0,r.kt)("inlineCode",{parentName:"p"},"--cli"),".")),(0,r.kt)(l.Z,{defaultValue:"cmd",values:[{label:"Windows",value:"cmd"},{label:"Linux",value:"linux"}],mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"cmd",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"./NanosWorldServer.exe --cli update package sandbox\n"))),(0,r.kt)(o.Z,{value:"linux",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"./NanosWorldServer.sh --cli update package sandbox\n")))),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"You can also install/update several Packages/Assets in a single command, separating them by spaces:"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"install package sandbox battlefield-kill-ui\n"))))}m.isMDXComponent=!0},96999:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/cli-01-9d9f96b3e580babfbfa6cf6ed4416040.jpg"}}]);