"use strict";(self.webpackChunkdocs_docusaurus=self.webpackChunkdocs_docusaurus||[]).push([[6275],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>v});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),i=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=i(e.components);return a.createElement(u.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,u=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=i(n),m=r,v=d["".concat(u,".").concat(m)]||d[m]||p[m]||s;return n?a.createElement(v,l(l({ref:t},c),{},{components:n})):a.createElement(v,l({ref:t},c))}));function v(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,l=new Array(s);l[0]=m;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o[d]="string"==typeof e?e:r,l[1]=o;for(var i=2;i<s;i++)l[i]=n[i];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(67294),r=n(86010);const s={tabItem:"tabItem_Ymn6"};function l(e){let{children:t,hidden:n,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(s.tabItem,l),hidden:n},t)}},74866:(e,t,n)=>{n.d(t,{Z:()=>w});var a=n(87462),r=n(67294),s=n(86010),l=n(12466),o=n(16550),u=n(91980),i=n(67392),c=n(50012);function d(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function p(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??d(n);return function(e){const t=(0,i.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function v(e){let{queryString:t=!1,groupId:n}=e;const a=(0,o.k6)(),s=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,u._X)(s),(0,r.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(a.location.search);t.set(s,e),a.replace({...a.location,search:t.toString()})}),[s,a])]}function g(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,s=p(e),[l,o]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:s}))),[u,i]=v({queryString:n,groupId:a}),[d,g]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,s]=(0,c.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&s.set(e)}),[n,s])]}({groupId:a}),f=(()=>{const e=u??d;return m({value:e,tabValues:s})?e:null})();(0,r.useLayoutEffect)((()=>{f&&o(f)}),[f]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);o(e),i(e),g(e)}),[i,g,s]),tabValues:s}}var f=n(72389);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function h(e){let{className:t,block:n,selectedValue:o,selectValue:u,tabValues:i}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,l.o5)(),p=e=>{const t=e.currentTarget,n=c.indexOf(t),a=i[n].value;a!==o&&(d(t),u(a))},m=e=>{let t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":n},t)},i.map((e=>{let{value:t,label:n,attributes:l}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:e=>c.push(e),onKeyDown:m,onClick:p},l,{className:(0,s.Z)("tabs__item",b.tabItem,l?.className,{"tabs__item--active":o===t})}),n??t)})))}function k(e){let{lazy:t,children:n,selectedValue:a}=e;const s=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},s.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function y(e){const t=g(e);return r.createElement("div",{className:(0,s.Z)("tabs-container",b.tabList)},r.createElement(h,(0,a.Z)({},e,t)),r.createElement(k,(0,a.Z)({},e,t)))}function w(e){const t=(0,f.Z)();return r.createElement(y,(0,a.Z)({key:String(t)},e))}},94030:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>u,default:()=>v,frontMatter:()=>o,metadata:()=>i,toc:()=>d});var a=n(87462),r=(n(67294),n(3905)),s=n(74866),l=n(85162);const o={title:"Installation du serveur",description:"Cr\xe9er des serveurs sur nanos world est tr\xe8s simple, suivez juste quelques \xe9tapes et vous aurez un serveur pr\xeat \xe0 \xeatre utilis\xe9 !",sidebar_position:1,tags:["hosting"]},u=void 0,i={unversionedId:"core-concepts/server-manual/server-installation",id:"core-concepts/server-manual/server-installation",title:"Installation du serveur",description:"Cr\xe9er des serveurs sur nanos world est tr\xe8s simple, suivez juste quelques \xe9tapes et vous aurez un serveur pr\xeat \xe0 \xeatre utilis\xe9 !",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/core-concepts/server-manual/server-installation.mdx",sourceDirName:"core-concepts/server-manual",slug:"/core-concepts/server-manual/server-installation",permalink:"/fr/docs/next/core-concepts/server-manual/server-installation",draft:!1,editUrl:"https://crowdin.com/project/nanos-world-docs/fr",tags:[{label:"hosting",permalink:"/fr/docs/next/tags/hosting"}],version:"current",sidebarPosition:1,frontMatter:{title:"Installation du serveur",description:"Cr\xe9er des serveurs sur nanos world est tr\xe8s simple, suivez juste quelques \xe9tapes et vous aurez un serveur pr\xeat \xe0 \xeatre utilis\xe9 !",sidebar_position:1,tags:["hosting"]},sidebar:"main",previous:{title:"Game-Modes & Packages",permalink:"/fr/docs/next/explore/game-modes-and-packages"},next:{title:"Configuration du serveur",permalink:"/fr/docs/next/core-concepts/server-manual/server-configuration"}},c={},d=[{value:"Caract\xe9ristiques syst\xe8mes requises",id:"caract\xe9ristiques-syst\xe8mes-requises",level:2},{value:"Windows",id:"windows",level:2},{value:"Linux",id:"linux",level:2},{value:"T\xe9l\xe9chargement \xe0 l&#39;aide de SteamCMD",id:"t\xe9l\xe9chargement-\xe0-laide-de-steamcmd",level:2},{value:"1. Apr\xe8s le t\xe9l\xe9chargement, ex\xe9cutez l&#39;ex\xe9cutable <code>steamcmd</code> , une fois charg\xe9, vous serez dans sa console :",id:"1-apr\xe8s-le-t\xe9l\xe9chargement-ex\xe9cutez-lex\xe9cutable-steamcmd--une-fois-charg\xe9-vous-serez-dans-sa-console-",level:4},{value:"2. Vous pouvez \xe9ventuellement d\xe9finir un dossier d&#39;installation pour installer votre serveur nanos world :",id:"2-vous-pouvez-\xe9ventuellement-d\xe9finir-un-dossier-dinstallation-pour-installer-votre-serveur-nanos-world-",level:4},{value:"3. L&#39;\xe9tape suivante consiste \xe0 se connecter sur SteamCMD, vous pouvez vous connecter de mani\xe8re anonyme avec :",id:"3-l\xe9tape-suivante-consiste-\xe0-se-connecter-sur-steamcmd-vous-pouvez-vous-connecter-de-mani\xe8re-anonyme-avec-",level:4},{value:"4. Vous pouvez ensuite installer ou mettre \xe0 jour le serveur nanos world en utilisant son id app : <code>1936830</code>:",id:"4-vous-pouvez-ensuite-installer-ou-mettre-\xe0-jour-le-serveur-nanos-world-en-utilisant-son-id-app--1936830",level:4},{value:"Vous avez termin\xe9 ! Vous pouvez quitter la console :",id:"vous-avez-termin\xe9--vous-pouvez-quitter-la-console-",level:4},{value:"Installation de la version bleeding-edge",id:"installation-de-la-version-bleeding-edge",level:2},{value:"Installation automatis\xe9e",id:"installation-automatis\xe9e",level:2}],p={toc:d},m="wrapper";function v(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Cr\xe9er des serveurs sur nanos world est tr\xe8s simple, suivez juste quelques \xe9tapes et vous aurez un serveur pr\xeat \xe0 \xeatre utilis\xe9 !"),(0,r.kt)("h2",{id:"caract\xe9ristiques-syst\xe8mes-requises"},"Caract\xe9ristiques syst\xe8mes requises"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"OS: Windows ou Linux"),(0,r.kt)("li",{parentName:"ul"},"Processeur : ",(0,r.kt)("inlineCode",{parentName:"li"},"1.0 GHz")," (Un c\u0153ur plus rapide est meilleur que plusieurs c\u0153urs)"),(0,r.kt)("li",{parentName:"ul"},"M\xe9moire : ",(0,r.kt)("inlineCode",{parentName:"li"},"50 MB")," (augmente si vous avez trop de joueurs ou d'entit\xe9s)"),(0,r.kt)("li",{parentName:"ul"},"Stockage : ",(0,r.kt)("inlineCode",{parentName:"li"},"10 MB")," (+ taille des Assets & Packages)"),(0,r.kt)("li",{parentName:"ul"},"R\xe9seau : Recommand\xe9 au moins ",(0,r.kt)("inlineCode",{parentName:"li"},"1 Mo/s")," (augmente si on trop de joueurs ou d'entit\xe9s)"),(0,r.kt)("li",{parentName:"ul"},"Ports de transfert r\xe9seau: ",(0,r.kt)("inlineCode",{parentName:"li"},"7777 TCP/UDP")," et ",(0,r.kt)("inlineCode",{parentName:"li"},"7778 UDP")," (vous pouvez le modifier dans la configuration)")),(0,r.kt)("h2",{id:"windows"},"Windows"),(0,r.kt)("p",null,"Sous Windows, vous avez ",(0,r.kt)("strong",{parentName:"p"},"trois options")," pour t\xe9l\xe9charger le serveur Nanos world :"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Utilisez l'executable (",(0,r.kt)("em",{parentName:"li"},".exe"),") d\xe9j\xe0 situ\xe9 \xe0 ",(0,r.kt)("inlineCode",{parentName:"li"},"nanos-world/Server/NanosWorldServer.exe")," (si vous avez t\xe9l\xe9charg\xe9 le jeu de base)."),(0,r.kt)("li",{parentName:"ol"},"Ou t\xe9l\xe9chargez l'outil ",(0,r.kt)("strong",{parentName:"li"},"nanos world\u2122 Dedicated Server")," \xe0 partir de Steam."),(0,r.kt)("li",{parentName:"ol"},"Use ",(0,r.kt)("a",{parentName:"li",href:"#steamcmd"},"SteamCMD"),".")),(0,r.kt)("h2",{id:"linux"},"Linux"),(0,r.kt)("p",null,"Sous Linux, le seul moyen de t\xe9l\xe9charger le serveur est de passer par SteamCMD. Si vous \xeates sur une machine Linux Ubuntu/Debian, vous pouvez facilement l'installer ainsi :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"sudo add-apt-repository multiverse\nsudo dpkg --add-architecture i386\nsudo apt update\nsudo apt install lib32gcc1 steamcmd \n")),(0,r.kt)("p",null,"Remarque : sous Linux, vous devez d\xe9marrer le serveur en utilisant le Shell Script ",(0,r.kt)("inlineCode",{parentName:"p"},"./NanosWorldServer. h"),", qui configurera les chemins appropri\xe9s et les biblioth\xe8ques dynamiques n\xe9cessaires qui doivent \xeatre charg\xe9es !"),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"You should probably look into ",(0,r.kt)("inlineCode",{parentName:"p"},"Linux & ARM Server installation")," to see if your operating system is entirely supported!")),(0,r.kt)("h2",{id:"t\xe9l\xe9chargement-\xe0-laide-de-steamcmd"},"T\xe9l\xe9chargement \xe0 l'aide de SteamCMD"),(0,r.kt)("p",null,"Pour t\xe9l\xe9charger le serveur via SteamCMD (une version en ligne de commande de Steam) veuillez ",(0,r.kt)("a",{parentName:"p",href:"https://developer.valvesoftware.com/wiki/SteamCMD#Downloading_SteamCMD"},"le t\xe9l\xe9charger")," avant de continuer."),(0,r.kt)("h4",{id:"1-apr\xe8s-le-t\xe9l\xe9chargement-ex\xe9cutez-lex\xe9cutable-steamcmd--une-fois-charg\xe9-vous-serez-dans-sa-console-"},"1. Apr\xe8s le t\xe9l\xe9chargement, ex\xe9cutez l'ex\xe9cutable ",(0,r.kt)("inlineCode",{parentName:"h4"},"steamcmd")," , une fois charg\xe9, vous serez dans sa console :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"Steam>\n")),(0,r.kt)("h4",{id:"2-vous-pouvez-\xe9ventuellement-d\xe9finir-un-dossier-dinstallation-pour-installer-votre-serveur-nanos-world-"},"2. Vous pouvez \xe9ventuellement d\xe9finir un dossier d'installation pour installer votre serveur nanos world :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"Steam> force_install_dir c:/nanos-world-server/\n")),(0,r.kt)("h4",{id:"3-l\xe9tape-suivante-consiste-\xe0-se-connecter-sur-steamcmd-vous-pouvez-vous-connecter-de-mani\xe8re-anonyme-avec-"},"3. L'\xe9tape suivante consiste \xe0 se connecter sur SteamCMD, vous pouvez vous connecter de mani\xe8re anonyme avec :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"Steam> login anonymous\n")),(0,r.kt)("h4",{id:"4-vous-pouvez-ensuite-installer-ou-mettre-\xe0-jour-le-serveur-nanos-world-en-utilisant-son-id-app--1936830"},"4. Vous pouvez ensuite installer ou mettre \xe0 jour le serveur nanos world en utilisant son id app : ",(0,r.kt)("inlineCode",{parentName:"h4"},"1936830"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"Steam> app_update 1936830\n")),(0,r.kt)("h4",{id:"vous-avez-termin\xe9--vous-pouvez-quitter-la-console-"},"Vous avez termin\xe9 ! Vous pouvez quitter la console :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"Steam> quit\n")),(0,r.kt)("h2",{id:"installation-de-la-version-bleeding-edge"},"Installation de la version bleeding-edge"),(0,r.kt)("p",null,"Pour installer la version ",(0,r.kt)("inlineCode",{parentName:"p"},"bleeding-edge")," du serveur, vous devrez sp\xe9cifier sa branche lors de l'installation :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"Steam> app_update 1936830 -beta bleeding-edge\n")),(0,r.kt)("h2",{id:"installation-automatis\xe9e"},"Installation automatis\xe9e"),(0,r.kt)("p",null,"Un moyen plus simple d'installer ou de mettre \xe0 jour le serveur Nanos world est d'utiliser une commande en une seule ligne pour ex\xe9cuter SteamCMD:"),(0,r.kt)(s.Z,{defaultValue:"windows",values:[{label:"Windows",value:"windows"},{label:"Linux",value:"linux"}],mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"windows",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"steamcmd.exe +login anonymous +app_update 1936830 validate +quit\n"))),(0,r.kt)(l.Z,{value:"linux",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"steamcmd +login anonymous +app_update 1936830 validate +quit\n")))),(0,r.kt)("p",null,"or on bleeding-edge:"),(0,r.kt)(s.Z,{defaultValue:"windows",values:[{label:"Windows",value:"windows"},{label:"Linux",value:"linux"}],mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"windows",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"steamcmd.exe +login anonymous +app_update 1936830 -beta bleeding-edge validate +quit\n"))),(0,r.kt)(l.Z,{value:"linux",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'steamcmd +login anonymous +app_update "1936830 -beta bleeding-edge" validate +quit\n')))),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Finished! You can now proceed to the next steps to configure your nanos world server.")))}v.isMDXComponent=!0}}]);