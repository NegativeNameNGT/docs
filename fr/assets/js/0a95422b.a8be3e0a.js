"use strict";(self.webpackChunkdocs_docusaurus=self.webpackChunkdocs_docusaurus||[]).push([[6543],{41548:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>o,contentTitle:()=>a,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var s=i(85893),t=i(11151);const r={title:"\ud83d\udda5\ufe0f WebUI",description:"Classe pour faire appara\xeetre un navigateur web \xe0 l'\xe9cran",sidebar_position:0,tags:["scripting","ui"]},a=void 0,l={id:"scripting-reference/classes/webui",title:"\ud83d\udda5\ufe0f WebUI",description:"Classe pour faire appara\xeetre un navigateur web \xe0 l'\xe9cran",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-latest/scripting-reference/classes/webui.mdx",sourceDirName:"scripting-reference/classes",slug:"/scripting-reference/classes/webui",permalink:"/fr/docs/scripting-reference/classes/webui",draft:!1,unlisted:!1,editUrl:"https://crowdin.com/project/nanos-world-docs/fr",tags:[{label:"scripting",permalink:"/fr/docs/tags/scripting"},{label:"ui",permalink:"/fr/docs/tags/ui"}],version:"latest",sidebarPosition:0,frontMatter:{title:"\ud83d\udda5\ufe0f WebUI",description:"Classe pour faire appara\xeetre un navigateur web \xe0 l'\xe9cran",sidebar_position:0,tags:["scripting","ui"]},sidebar:"main",previous:{title:"\ud83d\udd2b Weapon",permalink:"/fr/docs/scripting-reference/classes/weapon"},next:{title:"\ud83e\ude9f Widget3D",permalink:"/fr/docs/scripting-reference/classes/widget-3d"}},o={},c=[{value:"\ud83c\udf92\xa0Examples",id:"examples",level:2},{value:"Using a WebUI as Mesh Material",id:"using-a-webui-as-mesh-material",level:4},{value:"Communication entre Lua et JS (WebUI)",id:"communication-entre-lua-et-js-webui",level:4},{value:"Belle barre de d\xe9filement",id:"belle-barre-de-d\xe9filement",level:4},{value:"\ud83d\udcda\xa0Libraries &amp; Frameworks",id:"libraries--frameworks",level:2},{value:"\ud83d\udee0\xa0Constructors",id:"constructors",level:2},{value:"\ud83d\udd0d\xa0HTML Path Searchers",id:"html-path-searchers",level:2},{value:"\ud83d\uddff\xa0Static Functions",id:"static-functions",level:2},{value:"\ud83e\udda0\xa0Functions",id:"functions",level:2},{value:"\ud83d\ude80\xa0Events",id:"events",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,t.a)(),...e.components},{CardLink:i,ConstructorDeclaration:r,EventsDeclaration:a,FunctionsDeclaration:l,HeaderDeclaration:o,ReferenceLink:c,StaticFunctionsDeclaration:d}=n;return i||m("CardLink",!0),r||m("ConstructorDeclaration",!0),a||m("EventsDeclaration",!0),l||m("FunctionsDeclaration",!0),o||m("HeaderDeclaration",!0),c||m("ReferenceLink",!0),d||m("StaticFunctionsDeclaration",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(o,{type:"Class",name:"WebUI",image:"/img/docs/webui.webp"}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsxs)(n.p,{children:["Our WebUI implementation is built using the last versions of ",(0,s.jsx)(n.a,{href:"https://bitbucket.org/chromiumembedded/cef",children:"Chromium Embedded Framework"}),"."]})}),"\n",(0,s.jsx)(n.admonition,{title:"Proprietary Codecs",type:"note",children:(0,s.jsxs)(n.p,{children:["Proprietary Codecs like ",(0,s.jsx)(n.strong,{children:"MP3"})," and ",(0,s.jsx)(n.strong,{children:"AAC"})," are not supported on public CEF builds. We recommend converting your media files to ",(0,s.jsx)(n.strong,{children:"WEBM"})," or ",(0,s.jsx)(n.strong,{children:"OGG"}),"."]})}),"\n",(0,s.jsx)(n.h2,{id:"examples",children:"\ud83c\udf92\xa0Examples"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-lua",metastring:'title="Client/Index.lua"',children:'-- Loading a local file\nlocal my_ui = WebUI(\n    "Awesome UI",            -- Name\n    "file://UI/index.html",  -- Path relative to this package (Client/)\n    WebUIVisibility.Visible  -- Is Visible on Screen\n)\n\n-- Loading a Web URL\nlocal my_browser = WebUI(\n    "Awesome Site",          -- Name\n    "https://nanos.world",   -- Web\'s URL\n    WebUIVisibility.Visible  -- Is Visible on Screen\n)\n\n-- Loading a local file from other package\nlocal my_ui = WebUI(\n    "Awesome Other UI",      -- Name\n    "file://other-package/Client/UI/index.html",\n    WebUIVisibility.Visible  -- Is Visible on Screen\n)\n'})}),"\n",(0,s.jsx)(n.h4,{id:"using-a-webui-as-mesh-material",children:"Using a WebUI as Mesh Material"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-lua",metastring:'title="Client/Index.lua"',children:'-- Spawns a WebUI with is_visible = false, is_transparent = false, auto_resize = false and size of 500x500\nlocal my_ui = WebUI("Awesome Site", "https://nanos.world", false, false, false, 500, 500)\n\n-- Spawns a StaticMesh (can be any mesh)\nlocal static_mesh = StaticMesh(Vector(0, 0, 100), Rotator(), "nanos-world::SM_Cube")\n\n-- Sets the mesh material to use the WebUI\nstatic_mesh:SetMaterialFromWebUI(my_ui)\n'})}),"\n",(0,s.jsx)(n.h4,{id:"communication-entre-lua-et-js-webui",children:"Communication entre Lua et JS (WebUI)"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-lua",metastring:'title="Client/Index.lua"',children:'local my_ui = WebUI("Awesome UI", "file://UI/index.html")\n\nlocal param1 = 123\nlocal param2 = "hello"\n\n-- Calls a JS event\nmy_ui:CallEvent("MyEvent", param1, param2)\n\n-- Subscribes to receive JS events\nmy_ui:Subscribe("MyAnswer", function(param1)\n    Console.Log("Received back! %s", param1)\n    -- Will output \'Received back! Hey there!\'\nend)\n'})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",metastring:'title="script.js"',children:'// Register for "MyEvent" from Lua\nEvents.Subscribe("MyEvent", function(param1, param2) {\n    console.log("Triggered! " + param1 + " " + param2);\n    // Will output \'Triggered! 123 hello\'\n\n    // Triggers "MyAnswer" on Lua\n    Events.Call("MyAnswer", "Hey there!");\n})\n'})}),"\n",(0,s.jsx)(n.h4,{id:"belle-barre-de-d\xe9filement",children:"Belle barre de d\xe9filement"}),"\n",(0,s.jsx)(n.p,{children:"Since we migrated from Webkit to CEF, some scrollbars got ugly. Here's a small CSS snippet to make them almost like the Webkit ones:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-css",children:"::-webkit-scrollbar {\n    width: 6px;\n}\n\n::-webkit-scrollbar-thumb {\n    border-radius: 10px;\n    background-color: #494949;\n}\n\nbody {\n    scrollbar-gutter: stable both-edges;\n}\n"})}),"\n",(0,s.jsx)(n.p,{children:"Plus d'exemples comme celui-ci:"}),"\n",(0,s.jsx)(c,{href:"core-concepts/scripting/user-interface",children:"User Interface"}),"\n",(0,s.jsx)(c,{href:"getting-started/tutorials-and-examples/basic-hud-html",children:"Basic HUD (HTML)"}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsxs)(n.p,{children:["You can use the output Texture from a Canvas with ",(0,s.jsxs)(n.a,{href:"/fr/docs/scripting-reference/classes/base-classes/paintable#setmaterialfromwebui",children:[":SetMaterialFromWebUI","()"]})," method!"]})}),"\n",(0,s.jsx)(n.h2,{id:"libraries--frameworks",children:"\ud83d\udcda\xa0Libraries & Frameworks"}),"\n",(0,s.jsx)(n.p,{children:"Here a list of Community Created Libraries & Frameworks making use of WebUIs expanding it's possibilities:"}),"\n",(0,s.jsxs)("div",{className:"card-links",children:[(0,s.jsx)(i,{title:"EGUI",description:"Framework for creating User Interfaces by MegaThorx",image_src:"https://nanos-world.github.io/egui-docs/assets/images/tab-panel-2c678b43d0cc8a3fec78e8507eaebac1.png",href:"https://github.com/nanos-world/egui",is_lean:!0}),(0,s.jsx)(i,{title:"WebUI3d2d",description:"Spawn interactable WebUIs in the 3D world by Timmy",image_src:"/img/docs/webui3d2d.webp",href:"https://github.com/Timmy-the-nobody/WebUI3d2d",is_lean:!0}),(0,s.jsx)(i,{title:"UI Framework",description:"A powerful UI framework ported by Voltaism",image_src:"https://github.com/vugi99/nanos-uiframework/raw/master/screenshots/UIFrameworkLogo2_1000x500.png",href:"https://github.com/vugi99/nanos-uiframework",is_lean:!0})]}),"\n",(0,s.jsx)(n.h2,{id:"constructors",children:"\ud83d\udee0\xa0Constructors"}),"\n",(0,s.jsx)(r,{type:"Class",name:"WebUI"}),"\n",(0,s.jsx)(n.h2,{id:"html-path-searchers",children:"\ud83d\udd0d\xa0HTML Path Searchers"}),"\n",(0,s.jsx)(n.p,{children:"Loading a .html file supports the following searchers, which are looked in the following order:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["Relative to ",(0,s.jsx)(n.code,{children:"current-file-path/"})]}),"\n",(0,s.jsxs)(n.li,{children:["Relative to ",(0,s.jsx)(n.code,{children:"current-package/Client/"})]}),"\n",(0,s.jsxs)(n.li,{children:["Relative to ",(0,s.jsx)(n.code,{children:"current-package/"})]}),"\n",(0,s.jsxs)(n.li,{children:["Relative to ",(0,s.jsx)(n.code,{children:"Packages/"})]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"static-functions",children:"\ud83d\uddff\xa0Static Functions"}),"\n",(0,s.jsx)(d,{type:"Class",name:"WebUI"}),"\n",(0,s.jsx)(n.h2,{id:"functions",children:"\ud83e\udda0\xa0Functions"}),"\n",(0,s.jsx)(l,{type:"Class",name:"WebUI"}),"\n",(0,s.jsx)(n.h2,{id:"events",children:"\ud83d\ude80\xa0Events"}),"\n",(0,s.jsx)(a,{type:"Class",name:"WebUI"})]})}function u(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}function m(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},11151:(e,n,i)=>{i.d(n,{Z:()=>l,a:()=>a});var s=i(67294);const t={},r=s.createContext(t);function a(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);