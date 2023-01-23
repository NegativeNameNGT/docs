"use strict";(self.webpackChunkdocs_docusaurus=self.webpackChunkdocs_docusaurus||[]).push([[2092],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(r),m=a,g=d["".concat(l,".").concat(m)]||d[m]||p[m]||o;return r?n.createElement(g,i(i({ref:t},u),{},{components:r})):n.createElement(g,i({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},31999:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var n=r(87462),a=(r(67294),r(3905));const o={title:"Viseur d'arme",description:"Cet exemple de code montre comment attacher un mesh de viseur custom sur une arme et le rendre fonctionnel.",tags:["tutorial-example","scripting","assets"]},i=void 0,s={unversionedId:"getting-started/tutorials-and-examples/weapon-scope",id:"getting-started/tutorials-and-examples/weapon-scope",title:"Viseur d'arme",description:"Cet exemple de code montre comment attacher un mesh de viseur custom sur une arme et le rendre fonctionnel.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/getting-started/tutorials-and-examples/weapon-scope.md",sourceDirName:"getting-started/tutorials-and-examples",slug:"/getting-started/tutorials-and-examples/weapon-scope",permalink:"/fr/docs/next/getting-started/tutorials-and-examples/weapon-scope",draft:!1,editUrl:"https://crowdin.com/project/nanos-world-docs/fr",tags:[{label:"tutorial-example",permalink:"/fr/docs/next/tags/tutorial-example"},{label:"scripting",permalink:"/fr/docs/next/tags/scripting"},{label:"assets",permalink:"/fr/docs/next/tags/assets"}],version:"current",frontMatter:{title:"Viseur d'arme",description:"Cet exemple de code montre comment attacher un mesh de viseur custom sur une arme et le rendre fonctionnel.",tags:["tutorial-example","scripting","assets"]},sidebar:"main",previous:{title:"Lampe de poche pour arme",permalink:"/fr/docs/next/getting-started/tutorials-and-examples/weapon-flashlight"},next:{title:"X-Ray & Highlight",permalink:"/fr/docs/next/getting-started/tutorials-and-examples/x-ray-and-highlight"}},l={},c=[{value:"Quelques Static Mesh pouvant \xeatre utilis\xe9s comme viseur :",id:"quelques-static-mesh-pouvant-\xeatre-utilis\xe9s-comme-viseur-",level:2}],u={toc:c};function p(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Cet exemple de code montre comment attacher un mesh de viseur custom sur une arme et le rendre fonctionnel."),(0,a.kt)("p",null,(0,a.kt)("img",{src:r(42146).Z,width:"1918",height:"1022"})),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="Server/Index.lua"',title:'"Server/Index.lua"'},'-- Cr\xe9ation d\'une AK47\nlocal my_ak47 = NanosWorldWeapons.AK47(Vector(1035, 154, 300), Rotator())\n\n-- Ajoute un StaticMesh de viseur point rouge a l\'AK47 sur le bone "sight_socket". Notre AK47 disposant d\xe9j\xe0 d\'un bone nomm\xe9 "sight_socket" au bon emplacement sur l\'arme, nous pouvons simplement y attacher le viseur. Si l\'arme ne dispose pas d\'un bone pr\xe9-configur\xe9, il aurait \xe9t\xe9 n\xe9cessaire d\'attacher le viseur a un bone dont le nom est "" (empty) et modifier sa position en modifiant sont Attach Location pour correspondre \xe0 l\'emplacement id\xe9al\nmy_ak47:AddStaticMeshAttached("sight", "nanos-world::SM_T4_Sight", "sight_socket")\n\n-- Modifie du coeficient de FOV a 0.35x lors de la vis\xe9e\nmy_ak47.SightFOVMultiplier = 0.35\n\n-- D\xe9finit le d\xe9calage de la vis\xe9e afin de correspondre au centre du viseur,\n-- ce decalage devra \xeatre adapt\xe9 a chaque arme. Pour l\'AK47, le viseur point rouge est id\xe9alement plac\xe9 a Z = -15.9\nmy_ak47:SetSightTransform(Vector(0, 0, -15.9), Rotator(0, 0, 0))\n')),(0,a.kt)("h2",{id:"quelques-static-mesh-pouvant-\xeatre-utilis\xe9s-comme-viseur-"},"Quelques Static Mesh pouvant \xeatre utilis\xe9s comme viseur :"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"nanos-world::SM_T4_Sight")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"nanos-world::SM_Vertgrip")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"nanos-world::SM_Suppressor")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"nanos-world::SM_Scope_25x56_X"))))}p.isMDXComponent=!0},42146:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/weapon-scope-abab608d65ff37a5b3f3c71736ec1cc5.webp"}}]);