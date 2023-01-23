"use strict";(self.webpackChunkdocs_docusaurus=self.webpackChunkdocs_docusaurus||[]).push([[7649],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=s(n),d=r,g=m["".concat(c,".").concat(d)]||m[d]||u[d]||o;return n?a.createElement(g,i(i({ref:t},p),{},{components:n})):a.createElement(g,i({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},78585:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var a=n(87462),r=(n(67294),n(3905));const o={title:"Packages Communication",description:"All you need to know to communicate between different Packages",sidebar_position:3,tags:["scripting"]},i=void 0,l={unversionedId:"core-concepts/scripting/communicating-between-packages",id:"core-concepts/scripting/communicating-between-packages",title:"Packages Communication",description:"All you need to know to communicate between different Packages",source:"@site/docs/core-concepts/scripting/communicating-between-packages.md",sourceDirName:"core-concepts/scripting",slug:"/core-concepts/scripting/communicating-between-packages",permalink:"/docs/next/core-concepts/scripting/communicating-between-packages",draft:!1,editUrl:"https://github.com/nanos-world/docs/edit/master/docs/core-concepts/scripting/communicating-between-packages.md",tags:[{label:"scripting",permalink:"/docs/next/tags/scripting"}],version:"current",lastUpdatedBy:"Gabriel T. Nardy",lastUpdatedAt:1674481877,formattedLastUpdatedAt:"Jan 23, 2023",sidebarPosition:3,frontMatter:{title:"Packages Communication",description:"All you need to know to communicate between different Packages",sidebar_position:3,tags:["scripting"]},sidebar:"main",previous:{title:"Authority Concepts",permalink:"/docs/next/core-concepts/scripting/authority-concepts"},next:{title:"Entity Values",permalink:"/docs/next/core-concepts/scripting/entity-values"}},c={},s=[{value:"Custom Events",id:"custom-events",level:2},{value:"Communicating with Packages in the same Side",id:"communicating-with-packages-in-the-same-side",level:3},{value:"Sending data through the network",id:"sending-data-through-the-network",level:3},{value:"Exporting Variables Globally",id:"exporting-variables-globally",level:2},{value:"Exporting a Function",id:"exporting-a-function",level:3},{value:"Calling an Exported Function from another Package",id:"calling-an-exported-function-from-another-package",level:3}],p={toc:s};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"All you need to know to communicate between different Packages"),(0,r.kt)("p",null,"In nanos world there are 2 main ways which you can interact with other ",(0,r.kt)("strong",{parentName:"p"},"Packages"),". In this page we will explain in details how to do so."),(0,r.kt)("h2",{id:"custom-events"},"Custom Events"),(0,r.kt)("h3",{id:"communicating-with-packages-in-the-same-side"},"Communicating with Packages in the same Side"),(0,r.kt)("p",null,"Custom Events are the easier way to send or receive generic data or information to other packages:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="package-one/Server/Index.lua"',title:'"package-one/Server/Index.lua"'},'local my_parameter1 = 123\nlocal my_parameter2 = "hello there"\nlocal my_parameter3 = { important_stuff = "omg!" }\n\nEvents.Call("MyAwesomeEvent", my_parameter1, my_parameter2, my_parameter3)\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="package-two/Server/Index.lua"',title:'"package-two/Server/Index.lua"'},'Events.Subscribe("MyAwesomeEvent", function(parameter1, parameter2, parameter3)\n    Console.Log("Received " .. parameter1) -- Received 123\n    Console.Log("Received " .. parameter2) -- Received hello there\n    Console.Log("Received " .. parameter3) -- Received table\nend)\n')),(0,r.kt)("h3",{id:"sending-data-through-the-network"},"Sending data through the network"),(0,r.kt)("p",null,"Sending information through the network is not different from sending in the same side:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="Server/Index.lua"',title:'"Server/Index.lua"'},'local my_parameter1 = "cool data from network"\n\n-- Call this event to all Players\nEvents.BroadcastRemote("GetThisFromServer", my_parameter1)\n\nlocal player_02 = GetPlayerSomehow()\n\n-- Or call this event to a specific player\nEvents.CallRemote("GetThisFromServer", player_02, my_parameter1)\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="Client/Index.lua"',title:'"Client/Index.lua"'},'Events.Subscribe("GetThisFromServer", function(parameter1, parameter2, parameter3)\n    Console.Log("Received " .. parameter1) -- Received cool data from network\nend)\n')),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"For more information and examples about using Custom Events, please refer to ",(0,r.kt)("a",{parentName:"p",href:"/docs/next/scripting-reference/static-classes/events"},"Events"),".")),(0,r.kt)("h2",{id:"exporting-variables-globally"},"Exporting Variables Globally"),(0,r.kt)("p",null,"Another way of communicating is using ",(0,r.kt)("inlineCode",{parentName:"p"},"Package.Export()")," method, it allows exposing variables (tables, functions, etc) globally so all other Packages can access it directly."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Unlike events, exported functions can return values to the caller. But exported functions are only available to the same side (Server or Client).")),(0,r.kt)("h3",{id:"exporting-a-function"},"Exporting a Function"),(0,r.kt)("p",null,"With that, you can export functions for example, like that:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="package-one/Server/Index.lua"',title:'"package-one/Server/Index.lua"'},'-- Defines a function which you want to export\nfunction SpawnCoolWeapon(location, rotation)\n    local cool_weapon = Weapon(location or Vector(), rotation or Rotator(), ...)\n    return cool_weapon\nend\n\n-- Exports the function to be called by other Packages\nPackage.Export("SpawnCoolWeapon", SpawnCoolWeapon)\n')),(0,r.kt)("p",null,"You can even export a whole table containing functions for example, to work as a library:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="package-one/Server/Index.lua"',title:'"package-one/Server/Index.lua"'},'-- Defines a table with functions which you want to export\nMyAwesomeLibrary = {\n    CoolMethod = function(a, b)\n        return a + b\n    end,\n    AnotherAwesomeImportantMethod = function(c, d)\n        return c * d\n    end\n}\n\n-- Exports the table to be accessed by other Packages\nPackage.Export("MyAwesomeLibrary", MyAwesomeLibrary)\n')),(0,r.kt)("h3",{id:"calling-an-exported-function-from-another-package"},"Calling an Exported Function from another Package"),(0,r.kt)("p",null,"Now you can access that directly from other packages:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="package-two/Server/Index.lua"',title:'"package-two/Server/Index.lua"'},"-- Calls the exported function\nlocal cool_weapon = SpawnCoolWeapon(Vector(), Rotator())\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="package-two/Server/Index.lua"',title:'"package-two/Server/Index.lua"'},"-- Calls the exported table\nlocal awesome_result = MyAwesomeLibrary.CoolMethod(123, 456)\n")))}u.isMDXComponent=!0}}]);