"use strict";(self.webpackChunkdocs_docusaurus=self.webpackChunkdocs_docusaurus||[]).push([[3046],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=u(n),m=r,f=p["".concat(l,".").concat(m)]||p[m]||d[m]||s;return n?a.createElement(f,i(i({ref:t},c),{},{components:n})):a.createElement(f,i({ref:t},c))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,i=new Array(s);i[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[p]="string"==typeof e?e:r,i[1]=o;for(var u=2;u<s;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},61826:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>s,metadata:()=>o,toc:()=>u});var a=n(87462),r=(n(67294),n(3905));const s={title:"Types de base",description:"Types de base utilis\xe9s dans l'API.",tags:["scripting"]},i=void 0,o={unversionedId:"scripting-reference/glossary/basic-types",id:"version-latest/scripting-reference/glossary/basic-types",title:"Types de base",description:"Types de base utilis\xe9s dans l'API.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-latest/scripting-reference/glossary/basic-types.md",sourceDirName:"scripting-reference/glossary",slug:"/scripting-reference/glossary/basic-types",permalink:"/fr/docs/scripting-reference/glossary/basic-types",draft:!1,editUrl:"https://crowdin.com/project/nanos-world-docs/fr",tags:[{label:"scripting",permalink:"/fr/docs/tags/scripting"}],version:"latest",frontMatter:{title:"Types de base",description:"Types de base utilis\xe9s dans l'API.",tags:["scripting"]},sidebar:"version-latest/main",previous:{title:"table",permalink:"/fr/docs/scripting-reference/standard-libraries/table"},next:{title:"Enums",permalink:"/fr/docs/scripting-reference/glossary/enums"}},l={},u=[{value:"Types Lua",id:"types-lua",level:2},{value:"<code>number</code>",id:"number",level:3},{value:"<code>string</code>",id:"string",level:3},{value:"<code>function</code>",id:"function",level:3},{value:"<code>boolean</code>",id:"boolean",level:3},{value:"<code>nil</code>",id:"nil",level:3},{value:"<code>table</code>",id:"table",level:3},{value:"<code>iterator</code>",id:"iterator",level:3},{value:"<code>any</code>",id:"any",level:3},{value:"<code>varargs</code>",id:"varargs",level:3},{value:"Types num\xe9riques",id:"types-num\xe9riques",level:2},{value:"<code>integer</code>",id:"integer",level:3},{value:"<code>float</code>",id:"float",level:3},{value:"Types sp\xe9ciaux",id:"types-sp\xe9ciaux",level:2},{value:"<code>SpecialPath</code>",id:"specialpath",level:3},{value:"R\xe9f\xe9rencer des fichiers d&#39;Asset Packs",id:"r\xe9f\xe9rencer-des-fichiers-dasset-packs",level:4},{value:"R\xe9f\xe9rencer des fichiers Packages",id:"r\xe9f\xe9rencer-des-fichiers-packages",level:4},{value:"Exemple acc\xe9der aux <em>images</em> du <code>quaternius</code> Asset Pack:",id:"exemple-acc\xe9der-aux-images-du-quaternius-asset-pack",level:4},{value:"Exemple acc\xe9der aux sons <em>.ogg</em> du package <code>sandbox</code> :",id:"exemple-acc\xe9der-aux-sons-ogg-du-package-sandbox-",level:4},{value:"Example accessing a <em>.ttf sound</em> from <code>my-fonts</code> Package:",id:"example-accessing-a-ttf-sound-from-my-fonts-package",level:4}],c={toc:u},p="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"types-lua"},"Types Lua"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Pour plus d'informations et de tutoriels, veuillez regarder la ",(0,r.kt)("a",{parentName:"p",href:"https://www.lua.org/pil/2.html"},"Documentation officielle sur Lua"),".")),(0,r.kt)("h3",{id:"number"},(0,r.kt)("inlineCode",{parentName:"h3"},"number")),(0,r.kt)("p",null,"Le type number repr\xe9sente des nombres r\xe9els (flottants \xe0 double pr\xe9cision). Lua n'a pas de type entier, car il n'en a pas besoin. Les erreurs arithm\xe9tiques \xe0 virgule flottante font l'objet d'une id\xe9e fausse tr\xe8s r\xe9pandue et certaines personnes craignent que m\xeame un simple incr\xe9ment puisse devenir bizarre avec des nombres \xe0 virgule flottante. Le fait est que, lorsque vous utilisez un double pour repr\xe9senter un nombre entier, il n'y a aucune erreur d'arrondi (sauf si le nombre est sup\xe9rieur \xe0 100 000 000 000 000). Plus pr\xe9cis\xe9ment, un nombre Lua peut repr\xe9senter n'importe quel nombre entier long sans probl\xe8me d'arrondi. De plus, la plupart des processeurs modernes effectuent l'arithm\xe9tique en virgule flottante aussi rapidement que l'arithm\xe9tique en nombre entier (ou m\xeame plus rapidement)."),(0,r.kt)("h3",{id:"string"},(0,r.kt)("inlineCode",{parentName:"h3"},"string")),(0,r.kt)("p",null,"Le type string a une signification habituelle : une s\xe9quence de caract\xe8res. Lua est un langage \xe0 huit bits, de sorte que les cha\xeenes de caract\xe8res peuvent contenir des caract\xe8res de n'importe quelle valeur num\xe9rique, y compris des z\xe9ros int\xe9gr\xe9s. Cela signifie que vous pouvez stocker n'importe quelle donn\xe9e binaire dans une cha\xeene de caract\xe8res. Les strings en Lua ont des valeurs immuables. Vous ne pouvez pas modifier un caract\xe8re \xe0 l'int\xe9rieur d'une cha\xeene, comme c'est le cas en C. Au lieu de cela, vous cr\xe9ez une nouvelle cha\xeene avec les modifications souhait\xe9es, comme dans l'exemple suivant :"),(0,r.kt)("h3",{id:"function"},(0,r.kt)("inlineCode",{parentName:"h3"},"function")),(0,r.kt)("p",null,"Les fonctions sont des valeurs de premi\xe8re classe en Lua. Cela signifie que les fonctions peuvent \xeatre stock\xe9es dans des variables, transmises comme arguments \xe0 d'autres fonctions et retourn\xe9es comme r\xe9sultats. De telles facilit\xe9s donnent une grande flexibilit\xe9 au langage : un programme peut red\xe9finir une fonction pour ajouter une nouvelle fonctionnalit\xe9, ou simplement effacer une fonction pour cr\xe9er un environnement s\xe9curis\xe9 lors de l'ex\xe9cution d'un morceau de code non fiable (tel que du code re\xe7u via un r\xe9seau). De plus, Lua offre une bonne prise en charge de la programmation fonctionnelle, notamment des fonctions imbriqu\xe9es avec une port\xe9e lexicale appropri\xe9e ; il suffit d'attendre. Enfin, les fonctions de premi\xe8re classe jouent un r\xf4le essentiel dans les fonctions orient\xe9es objet de Lua."),(0,r.kt)("h3",{id:"boolean"},(0,r.kt)("inlineCode",{parentName:"h3"},"boolean")),(0,r.kt)("p",null,"Le type boolean poss\xe8de deux valeurs, false et true (faux et vrai), qui repr\xe9sentent les valeurs bool\xe9ennes traditionnelles. Cependant, ils ne d\xe9tiennent pas le monopole des valeurs de condition : En Lua, toute valeur peut repr\xe9senter une condition. Les conditionnels (tels que ceux des structures de contr\xf4le) consid\xe8rent false et nil comme faux et tout le reste comme vrai. Attention, contrairement \xe0 d'autres langages de script, Lua consid\xe8re \xe0 la fois z\xe9ro et la cha\xeene vide comme vrais dans les tests conditionnels."),(0,r.kt)("h3",{id:"nil"},(0,r.kt)("inlineCode",{parentName:"h3"},"nil")),(0,r.kt)("p",null,"Nil est un type avec une seule valeur, nil, dont la principale propri\xe9t\xe9 est d'\xeatre diff\xe9rente de toute autre valeur. Comme nous l'avons vu, une variable globale a une valeur nulle par d\xe9faut, avant une premi\xe8re affectation, et vous pouvez affecter nil \xe0 une variable globale pour la supprimer. Lua utilise nil comme une sorte de non-valeur, pour repr\xe9senter l'absence d'une valeur utile."),(0,r.kt)("h3",{id:"table"},(0,r.kt)("inlineCode",{parentName:"h3"},"table")),(0,r.kt)("p",null,"Le type table met en \u0153uvre des tableaux associatifs. Un tableau associatif est un tableau qui peut \xeatre index\xe9 non seulement avec des nombres, mais aussi avec des cha\xeenes de caract\xe8res ou toute autre valeur du langage, sauf nil. En outre, les tableaux n'ont pas de taille fixe ; vous pouvez ajouter autant d'\xe9l\xe9ments que vous le souhaitez \xe0 un tableau de mani\xe8re dynamique. Les tableaux sont le principal (en fait, le seul) m\xe9canisme de structuration des donn\xe9es en Lua, mais n'en est pas moins puissant. Nous utilisons les tableaux pour repr\xe9senter des tableaux ordinaires, des tables de symboles, des ensembles, des enregistrements, des files d'attente et d'autres structures de donn\xe9es, d'une mani\xe8re simple, uniforme et efficace. Lua utilise \xe9galement des tableaux pour repr\xe9senter les packages. Lorsque nous \xe9crivons io.read, nous voulons dire \"l'entr\xe9e de lecture du package io\". Pour Lua, cela signifie \"indexer la table io en utilisant la cha\xeene \"read\" comme cl\xe9\"."),(0,r.kt)("h3",{id:"iterator"},(0,r.kt)("inlineCode",{parentName:"h3"},"iterator")),(0,r.kt)("p",null,"Iterator permet de parcourir les \xe9l\xe9ments d'un tableau avec ",(0,r.kt)("inlineCode",{parentName:"p"},"for k, v in ipairs()"),"."),(0,r.kt)("h3",{id:"any"},(0,r.kt)("inlineCode",{parentName:"h3"},"any")),(0,r.kt)("p",null,"Nous utilisons l'expression \"n'importe quel\" dans les documentations pour indiquer que n'importe quel type peut \xeatre utilis\xe9."),(0,r.kt)("h3",{id:"varargs"},(0,r.kt)("inlineCode",{parentName:"h3"},"varargs")),(0,r.kt)("p",null,"Variadic list of values."),(0,r.kt)("h2",{id:"types-num\xe9riques"},"Types num\xe9riques"),(0,r.kt)("p",null,"Besides the Lua Types, some methods on the API have specific numeric types, those are converted and treated differently internally."),(0,r.kt)("h3",{id:"integer"},(0,r.kt)("inlineCode",{parentName:"h3"},"integer")),(0,r.kt)("p",null,"Whole numbers without any fractional parts."),(0,r.kt)("h3",{id:"float"},(0,r.kt)("inlineCode",{parentName:"h3"},"float")),(0,r.kt)("p",null,"Floating-point type with decimal points."),(0,r.kt)("h2",{id:"types-sp\xe9ciaux"},"Types sp\xe9ciaux"),(0,r.kt)("h3",{id:"specialpath"},(0,r.kt)("inlineCode",{parentName:"h3"},"SpecialPath")),(0,r.kt)("p",null,"nanos world supports a special type of Path when loading ",(0,r.kt)("strong",{parentName:"p"},"Textures (.jpg, .png)"),", ",(0,r.kt)("strong",{parentName:"p"},"Sounds (.ogg)")," or referencing files from ",(0,r.kt)("strong",{parentName:"p"},"WebUI"),". It allows any Package or WebUI to access files from other Packages or Asset Packs easily."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"SpecialPath")," is a string input which supports the following formats for accessing Assets or Packages files:"),(0,r.kt)("h4",{id:"r\xe9f\xe9rencer-des-fichiers-dasset-packs"},"R\xe9f\xe9rencer des fichiers d'Asset Packs"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"assets://[ASSET_PACK_PATH]/[PATH/TO/FILE.jpg]")),(0,r.kt)("h4",{id:"r\xe9f\xe9rencer-des-fichiers-packages"},"R\xe9f\xe9rencer des fichiers Packages"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"package://[PACKAGE_PATH]/[PATH/TO/FILE.jpg]")),(0,r.kt)("h4",{id:"exemple-acc\xe9der-aux-images-du-quaternius-asset-pack"},"Exemple acc\xe9der aux ",(0,r.kt)("em",{parentName:"h4"},"images")," du ",(0,r.kt)("inlineCode",{parentName:"h4"},"quaternius")," Asset Pack:"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"assets://quaternius/Thumbnails/SK_Revolver_01.jpg")),(0,r.kt)("h4",{id:"exemple-acc\xe9der-aux-sons-ogg-du-package-sandbox-"},"Exemple acc\xe9der aux sons ",(0,r.kt)("em",{parentName:"h4"},".ogg")," du package ",(0,r.kt)("inlineCode",{parentName:"h4"},"sandbox")," :"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"package://sandbox/Client/my_awesome_audio.ogg")),(0,r.kt)("h4",{id:"example-accessing-a-ttf-sound-from-my-fonts-package"},"Example accessing a ",(0,r.kt)("em",{parentName:"h4"},".ttf sound")," from ",(0,r.kt)("inlineCode",{parentName:"h4"},"my-fonts")," Package:"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"package://my-fonts/Client/Roboto.ttf")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"SpecialPath input also supports relative and traditional paths!")))}d.isMDXComponent=!0}}]);