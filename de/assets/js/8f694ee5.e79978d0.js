"use strict";(self.webpackChunkdocs_docusaurus=self.webpackChunkdocs_docusaurus||[]).push([[4403],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>k});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),d=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=d(a),k=r,g=c["".concat(s,".").concat(k)]||c[k]||m[k]||i;return a?n.createElement(g,o(o({ref:t},p),{},{components:a})):n.createElement(g,o({ref:t},p))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var d=2;d<i;d++)o[d]=a[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},48315:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var n=a(87462),r=(a(67294),a(3905));const i={title:"Paketleitfaden",description:"Alles, was Sie \xfcber Pakete wissen m\xfcssen",sidebar_position:0,tags:["scripting","packages"],keywords:["packages","scripting","lua"]},o=void 0,l={unversionedId:"core-concepts/packages/packages-guide",id:"version-latest/core-concepts/packages/packages-guide",title:"Paketleitfaden",description:"Alles, was Sie \xfcber Pakete wissen m\xfcssen",source:"@site/i18n/de/docusaurus-plugin-content-docs/version-latest/core-concepts/packages/packages-guide.md",sourceDirName:"core-concepts/packages",slug:"/core-concepts/packages/packages-guide",permalink:"/de/docs/core-concepts/packages/packages-guide",draft:!1,editUrl:"https://crowdin.com/project/nanos-world-docs/de",tags:[{label:"scripting",permalink:"/de/docs/tags/scripting"},{label:"packages",permalink:"/de/docs/tags/packages"}],version:"latest",sidebarPosition:0,frontMatter:{title:"Paketleitfaden",description:"Alles, was Sie \xfcber Pakete wissen m\xfcssen",sidebar_position:0,tags:["scripting","packages"],keywords:["packages","scripting","lua"]},sidebar:"version-latest/main",previous:{title:"Linux & ARM Server installation",permalink:"/de/docs/core-concepts/server-manual/server-linux-arm"},next:{title:"Ladebildschirm",permalink:"/de/docs/core-concepts/packages/loading-screen"}},s={},d=[{value:"Ordnerstruktur",id:"ordnerstruktur",level:2},{value:"Paketkonfiguration",id:"paketkonfiguration",level:2},{value:"Paketarten",id:"paketarten",level:2},{value:"<code>script</code>",id:"script",level:3},{value:"<code>game-mode</code>",id:"game-mode",level:3},{value:"<code>loading-screen</code>",id:"loading-screen",level:3},{value:"Einstellungen detailliert",id:"einstellungen-detailliert",level:2},{value:"Compatibility Version",id:"compatibility-version",level:3},{value:"Custom Settings",id:"custom-settings",level:3},{value:"List of Types",id:"list-of-types",level:4},{value:"Ignoring Client Folders",id:"ignoring-client-folders",level:2},{value:"Logo Image",id:"logo-image",level:2}],p={toc:d};function m(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Pakete")," sind Teile/Komponenten deines Servers, die beispielsweise Lua-Skripte ausf\xfchren, um mit dem Spiel zu interagieren."),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(55583).Z,width:"628",height:"170"})),(0,r.kt)("h2",{id:"ordnerstruktur"},"Ordnerstruktur"),(0,r.kt)("p",null,"All Packages must go under ",(0,r.kt)("inlineCode",{parentName:"p"},"Server/Packages/")," folder. Each Package is a folder under that."),(0,r.kt)("p",null,"Ein Paket muss dabei folgende Ordner enthalten: ",(0,r.kt)("inlineCode",{parentName:"p"},"Server"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Client")," und ",(0,r.kt)("inlineCode",{parentName:"p"},"Shared"),". Nur ",(0,r.kt)("strong",{parentName:"p"},"Client")," und ",(0,r.kt)("strong",{parentName:"p"},"Shared")," Ordner werden an die Clients gesendet und geladen, sobald diese sich mit dem Server verbinden."),(0,r.kt)("p",null,"Jedes ",(0,r.kt)("strong",{parentName:"p"},"Package")," ","(","Paket",")"," muss eine Datei namens ",(0,r.kt)("inlineCode",{parentName:"p"},"Index.lua")," besitzen. Dabei sollte die Datei in den Ordnern ",(0,r.kt)("strong",{parentName:"p"},"Server"),", ",(0,r.kt)("strong",{parentName:"p"},"Client")," oder ",(0,r.kt)("strong",{parentName:"p"},"Shared")," hinterlegt werden. Dies ist die einzige Datei, welche ausgel\xf6st wird, sobald das Paket geladen wird. Auf dieser Weise ist diese Datei verantwortlich f\xfcr die Aufnahme anderer Dateien und das Starten der Funktionalit\xe4ten."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text",metastring:'title="Server Folder"',title:'"Server','Folder"':!0},"NanosWorldServer.exe\nPackages/\n\u251c\u2500\u2500 my-package-01/\n\u2502   \u251c\u2500\u2500 Server/\n\u2502   \u2502   \u251c\u2500\u2500 Index.lua\n\u2502   \u2502   \u2514\u2500\u2500 *.lua\n\u2502   \u251c\u2500\u2500 Client/\n\u2502   \u2502   \u2514\u2500\u2500 *.lua\n\u2502   \u251c\u2500\u2500 Shared/\n\u2502   \u2502   \u2514\u2500\u2500 *.lua\n\u2502   \u2514\u2500\u2500 Package.toml\n\u251c\u2500\u2500 my-package-02/\n\u2502   \u251c\u2500\u2500 Package.toml\n\u2502   \u2514\u2500\u2500 ...\nAssets/\nConfig.toml\n")),(0,r.kt)("h2",{id:"paketkonfiguration"},"Paketkonfiguration"),(0,r.kt)("p",null,"Packages have a configuration file in the root of the package folder, called ",(0,r.kt)("inlineCode",{parentName:"p"},"Package.toml"),", in this file we can setup all pertinent settings related to the Package. Each ",(0,r.kt)("a",{parentName:"p",href:"#package-types"},"Package Type")," has it's own configuration file format."),(0,r.kt)("p",null,"They all share the same header ",(0,r.kt)("inlineCode",{parentName:"p"},"[meta]"),", which contains the following settings:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-toml",metastring:"reference",reference:!0},"https://github.com/nanos-world/nanos-world-server/blob/main/_meta.toml\n")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Einstellung"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Beschreibung"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"title"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"Friendly name")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"autor"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"Contributor(s)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"version"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"Version - in the ",(0,r.kt)("a",{parentName:"td",href:"https://semver.org/"},"SemVer")," format ",(0,r.kt)("inlineCode",{parentName:"td"},"X.Y.Z"))))),(0,r.kt)("h2",{id:"paketarten"},"Paketarten"),(0,r.kt)("p",null,"We have 3 types of packages: ",(0,r.kt)("a",{parentName:"p",href:"#script"},"script"),", ",(0,r.kt)("a",{parentName:"p",href:"#game-mode"},"game-mode")," and ",(0,r.kt)("a",{parentName:"p",href:"#loading-screen"},"loading-screen"),", each one with with a specific functionality and an unique purpose:"),(0,r.kt)("h3",{id:"script"},(0,r.kt)("inlineCode",{parentName:"h3"},"script")),(0,r.kt)("p",null,"Script is a normal Package, you can load as many as you want."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-toml",metastring:'title="Package.toml" reference',title:'"Package.toml"',reference:!0},"https://github.com/nanos-world/nanos-world-server/blob/main/_script_.toml\n")),(0,r.kt)("h3",{id:"game-mode"},(0,r.kt)("inlineCode",{parentName:"h3"},"game-mode")),(0,r.kt)("p",null,"GameModes are Like ",(0,r.kt)("inlineCode",{parentName:"p"},"script")," but you can only load one ",(0,r.kt)("inlineCode",{parentName:"p"},"game-mode")," package at once."),(0,r.kt)("p",null,"They are used when you are creating full games which cannot be loaded with other full games packages."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-toml",metastring:'title="Package.toml" reference',title:'"Package.toml"',reference:!0},"https://github.com/nanos-world/nanos-world-server/blob/main/_game_mode_.toml\n")),(0,r.kt)("h3",{id:"loading-screen"},(0,r.kt)("inlineCode",{parentName:"h3"},"loading-screen")),(0,r.kt)("p",null,"Loading Screen is a special Package which will be loaded during player's loading screen."),(0,r.kt)("p",null,"It must have an ",(0,r.kt)("inlineCode",{parentName:"p"},"index.html")," in the root. Please refer to ",(0,r.kt)("a",{parentName:"p",href:"/de/docs/core-concepts/packages/loading-screen"},"Loading Screen")," for more information."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-toml",metastring:'title="Package.toml" reference',title:'"Package.toml"',reference:!0},"https://github.com/nanos-world/nanos-world-server/blob/main/_loading_screen_.toml\n")),(0,r.kt)("h2",{id:"einstellungen-detailliert"},"Einstellungen detailliert"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Einstellung"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Package\xa0Types"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Beschreibung"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"force_no_map_package"))),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"script"),(0,r.kt)("br",null),(0,r.kt)("inlineCode",{parentName:"td"},"game-mode")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Enabling this will force the map package (if any) to do NOT load")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"auto_cleanup"))),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"script"),(0,r.kt)("br",null),(0,r.kt)("inlineCode",{parentName:"td"},"game-mode")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Aktivieren wird alle Entit\xe4ten dieses Pakets zerst\xf6ren, wenn es entl\xe4dt")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"compatibility_version"))),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"script"),(0,r.kt)("br",null),(0,r.kt)("inlineCode",{parentName:"td"},"game-mode")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The game version (",(0,r.kt)("inlineCode",{parentName:"td"},"major.minor"),") at the time this package was created, for granting backwards compatibility between breaking changes. See more ",(0,r.kt)("a",{parentName:"td",href:"#compatibility-version"},"here"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"packages_requirements"))),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"script"),(0,r.kt)("br",null),(0,r.kt)("inlineCode",{parentName:"td"},"game-mode")),(0,r.kt)("td",{parentName:"tr",align:"left"},"List of Packages dependencies used by this Package which need to be loaded first")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"assets_requirements"))),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"script"),(0,r.kt)("br",null),(0,r.kt)("inlineCode",{parentName:"td"},"game-mode")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Liste der zu ladenden Asset-Pakete beim Laden dieses Pakets")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"compatible_maps"))),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"game-mode")),(0,r.kt)("td",{parentName:"tr",align:"left"},"List of Maps compatible/recommended to work with this Game Mode")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"custom_settings"))),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"game-mode")),(0,r.kt)("td",{parentName:"tr",align:"left"},"List of Custom Settings which can be set when starting a new game or passed through command line to the server. See more ",(0,r.kt)("a",{parentName:"td",href:"#custom-settings"},"here"))))),(0,r.kt)("h3",{id:"compatibility-version"},"Compatibility Version"),(0,r.kt)("p",null,"This setting deserves a special attention. It is meant to assure your packages will not break in future breaking changes updates."),(0,r.kt)("p",null,"It works by forcing that package to run code in a compatibility mode, meaning that breaking changes will keep working as the way it was before. Example:"),(0,r.kt)("p",null,"Let's say you have this code running right now:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},'-- Make an asynchronous HTTP request\nHTTP.Request("https://api.nanos.world/", "store/v1/packages/halloween", "GET", "", "application/json", false, {}, function(status, data)\n    -- Do something with my data\nend)\n')),(0,r.kt)("p",null,"And then, in the hypothetical update 9.99 the API changes and make ",(0,r.kt)("inlineCode",{parentName:"p"},"HTTP.RequestSync")," to become ",(0,r.kt)("inlineCode",{parentName:"p"},"HTTP.Request")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"HTTP.Request")," to become ",(0,r.kt)("inlineCode",{parentName:"p"},"HTTP.RequestAsync"),". I.e. you need to update your code to use ",(0,r.kt)("inlineCode",{parentName:"p"},"HTTP.RequestAsync")," now, this is a breaking change as the new functions uses the same name as before."),(0,r.kt)("p",null,"With compatibility version, your code can keep working as it was before this update, for that, in your Package.toml you just need to make sure it's ",(0,r.kt)("inlineCode",{parentName:"p"},"compatibility_version")," is set to a version lower than ",(0,r.kt)("inlineCode",{parentName:"p"},"9.99")," (i.e. ",(0,r.kt)("inlineCode",{parentName:"p"},"9.98"),")."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"The Compatibility Mode is a feature that aims to keep old and unmaintained packages/game-modes to keep working for a longer time. But from time to time all the deprecated compatibility modes will be removed from the codebase. So always keep your packages up-to-date!")),(0,r.kt)("h3",{id:"custom-settings"},"Custom Settings"),(0,r.kt)("p",null,"GameModes can define Custom Settings in the ",(0,r.kt)("inlineCode",{parentName:"p"},"[custom_settings]")," section to be set when creating a new game through main menu, or set when starting the server with the command ",(0,r.kt)("inlineCode",{parentName:"p"},'--custom_settings "var1 = value1, var2 = value2, ..."')),(0,r.kt)("p",null,"The values defined can be accessed through the method ",(0,r.kt)("a",{parentName:"p",href:"https://docs.nanos.world/docs/next/scripting-reference/static-classes/server#getcustomsettings"},"Server.GetCustomSettings()"),"."),(0,r.kt)("h4",{id:"list-of-types"},"List of Types"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Beschreibung"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"boolean")),(0,r.kt)("td",{parentName:"tr",align:"left"},"A toggleable checkbox")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"integer")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Integer numeric values")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"floating")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Floating numeric values")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"text")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Text Box")))),(0,r.kt)("h2",{id:"ignoring-client-folders"},"Ignoring Client Folders"),(0,r.kt)("p",null,"Sometimes you want to ignore some folders from being sent to the clients (e.g. auto generated folders from Node.js HTML ones)."),(0,r.kt)("p",null,"So, to make the server ignore it you just need to add an ",(0,r.kt)("inlineCode",{parentName:"p"},".ignore")," file in the root of that folder. Simple as that \ud83d\ude09."),(0,r.kt)("h2",{id:"logo-image"},"Logo Image"),(0,r.kt)("p",null,"It is possible to have a custom image to be displayed in the Vault. For that, add a file called ",(0,r.kt)("inlineCode",{parentName:"p"},"Package.jpg")," besides the Package.toml with the image you wish. The recommended size is ",(0,r.kt)("inlineCode",{parentName:"p"},"300x150"),"."))}m.isMDXComponent=!0},55583:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/packages-01-e5ca40b3250f77522f7e280d3a183cf9.jpg"}}]);