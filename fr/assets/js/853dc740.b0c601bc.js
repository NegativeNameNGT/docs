"use strict";(self.webpackChunkdocs_docusaurus=self.webpackChunkdocs_docusaurus||[]).push([[1982],{86788:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>c,default:()=>d,frontMatter:()=>r,metadata:()=>o,toc:()=>l});var t=s(85893),i=s(11151);const r={title:"\ud83d\udcc1 Fichier",description:"Un fichier repr\xe9sente une entr\xe9e vers un fichier syst\xe8me.",sidebar_position:0,tags:["class"]},c=void 0,o={id:"scripting-reference/classes/file",title:"\ud83d\udcc1 Fichier",description:"Un fichier repr\xe9sente une entr\xe9e vers un fichier syst\xe8me.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/scripting-reference/classes/file.mdx",sourceDirName:"scripting-reference/classes",slug:"/scripting-reference/classes/file",permalink:"/fr/docs/next/scripting-reference/classes/file",draft:!1,unlisted:!1,editUrl:"https://crowdin.com/project/nanos-world-docs/fr",tags:[{label:"class",permalink:"/fr/docs/next/tags/class"}],version:"current",sidebarPosition:0,frontMatter:{title:"\ud83d\udcc1 Fichier",description:"Un fichier repr\xe9sente une entr\xe9e vers un fichier syst\xe8me.",sidebar_position:0,tags:["class"]},sidebar:"main",previous:{title:"\ud83d\udd8c\ufe0f Decal",permalink:"/fr/docs/next/scripting-reference/classes/decal"},next:{title:"\ud83e\udded Gizmo",permalink:"/fr/docs/next/scripting-reference/classes/gizmo"}},a={},l=[{value:"\ud83c\udf92\xa0Examples",id:"examples",level:2},{value:"\ud83d\udee0\xa0Constructors",id:"constructors",level:2},{value:"\ud83d\uddff\xa0Static Functions",id:"static-functions",level:2},{value:"\ud83e\udda0\xa0Functions",id:"functions",level:2},{value:"\ud83d\ude80\xa0Events",id:"events",level:2}];function u(e){const n={admonition:"admonition",code:"code",h2:"h2",p:"p",pre:"pre",...(0,i.a)(),...e.components},{ConstructorDeclaration:s,EventsDeclaration:r,FunctionsDeclaration:c,HeaderDeclaration:o,StaticFunctionsDeclaration:a}=n;return s||p("ConstructorDeclaration",!0),r||p("EventsDeclaration",!0),c||p("FunctionsDeclaration",!0),o||p("HeaderDeclaration",!0),a||p("StaticFunctionsDeclaration",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o,{type:"Class",name:"File"}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsx)(n.p,{children:"Il n'est pas possible d'ouvrir des fichiers en dehors du dossier du serveur. Tous les chemins doivent \xeatre relatifs au dossier ex\xe9cutable du serveur. Tous les fichiers sont ouverts en tant que fichier binaire par d\xe9faut."})}),"\n",(0,t.jsx)(n.h2,{id:"examples",children:"\ud83c\udf92\xa0Examples"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lua",children:'local configuration_file = File("my_awesome_configuration.json")\n\nlocal configuration_file_json = JSON.parse(configuration_file:Read(configuration_file:Size()))\n'})}),"\n",(0,t.jsx)(n.h2,{id:"constructors",children:"\ud83d\udee0\xa0Constructors"}),"\n",(0,t.jsx)(s,{type:"Class",name:"File"}),"\n",(0,t.jsx)(n.h2,{id:"static-functions",children:"\ud83d\uddff\xa0Static Functions"}),"\n",(0,t.jsx)(a,{type:"Class",name:"File"}),"\n",(0,t.jsx)(n.h2,{id:"functions",children:"\ud83e\udda0\xa0Functions"}),"\n",(0,t.jsx)(c,{type:"Class",name:"File"}),"\n",(0,t.jsx)(n.h2,{id:"events",children:"\ud83d\ude80\xa0Events"}),"\n",(0,t.jsx)(r,{type:"Class",name:"File"})]})}function d(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(u,{...e})}):u(e)}function p(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},11151:(e,n,s)=>{s.d(n,{Z:()=>o,a:()=>c});var t=s(67294);const i={},r=t.createContext(i);function c(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);