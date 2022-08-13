"use strict";(self.webpackChunkdocs_docusaurus=self.webpackChunkdocs_docusaurus||[]).push([[6772],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=l(n),m=r,h=u["".concat(c,".").concat(m)]||u[m]||p[m]||i;return n?a.createElement(h,o(o({ref:t},d),{},{components:n})):a.createElement(h,o({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},11359:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return w},frontMatter:function(){return c},metadata:function(){return d},toc:function(){return u}});var a=n(83117),r=n(80102),i=(n(67294),n(3905)),o=n(95645),s=["components"],c={title:"\ud83d\udd2a Melee",description:"A Melee represents an Entity which can be Pickable by a Character and can be used to melee attack, Charactes can hold it with hands with pre-defined handling modes.",sidebar_position:0,tags:["class"]},l=void 0,d={unversionedId:"scripting-reference/classes/melee",id:"version-latest/scripting-reference/classes/melee",title:"\ud83d\udd2a Melee",description:"A Melee represents an Entity which can be Pickable by a Character and can be used to melee attack, Charactes can hold it with hands with pre-defined handling modes.",source:"@site/i18n/pt-BR/docusaurus-plugin-content-docs/version-latest/scripting-reference/classes/melee.mdx",sourceDirName:"scripting-reference/classes",slug:"/scripting-reference/classes/melee",permalink:"/pt-BR/docs/scripting-reference/classes/melee",draft:!1,editUrl:"https://github.com/nanos-world/docs/edit/master/versioned_docs/version-latest/scripting-reference/classes/melee.mdx",tags:[{label:"class",permalink:"/pt-BR/docs/tags/class"}],version:"latest",sidebarPosition:0,frontMatter:{title:"\ud83d\udd2a Melee",description:"A Melee represents an Entity which can be Pickable by a Character and can be used to melee attack, Charactes can hold it with hands with pre-defined handling modes.",sidebar_position:0,tags:["class"]},sidebar:"version-latest/main",previous:{title:"\ud83d\udca1 Light",permalink:"/pt-BR/docs/scripting-reference/classes/light"},next:{title:"\u2728 Particle",permalink:"/pt-BR/docs/scripting-reference/classes/particle"}},p={},u=[{value:"\ud83c\udf92 Examples",id:"-examples",level:2},{value:"\ud83c\udfd7\ufe0f Constructor",id:"\ufe0f-constructor",level:2},{value:"\ud83e\udda0 Functions",id:"-functions",level:2},{value:"\ud83d\ude80 Events",id:"-events",level:2}],m=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",t)}},h=m("HeaderDeclaration"),f=m("ConstructorDeclaration"),y=m("FunctionsDeclaration"),g=m("EventsDeclaration"),b={toc:u};function w(e){var t=e.components,n=(0,r.Z)(e,s);return(0,i.kt)("wrapper",(0,a.Z)({},b,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)(h,{class_data:o,image:"/img/docs/torch.webp",mdxType:"HeaderDeclaration"}),(0,i.kt)("h2",{id:"-examples"},"\ud83c\udf92 Examples"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},'local crowbar = Melee(\n  Vector(-900, 185, 215),\n  Rotator(0, 90, 90),\n  "nanos-world::SM_Crowbar_01",\n  CollisionType.Normal,\n  true,\n  HandlingMode.SingleHandedMelee,\n  ""\n)\n\ncrowbar:SetScale(Vector(1.5, 1.5, 1.5))\ncrowbar:SetAnimationCharacterUse("nanos-world::AM_Mannequin_Melee_Slash_Attack")\ncrowbar:SetDamageSettings(0.3, 0.5)\ncrowbar:SetCooldown(0.5)\ncrowbar:SetBaseDamage(40)\n')),(0,i.kt)("h2",{id:"\ufe0f-constructor"},"\ud83c\udfd7\ufe0f Constructor"),(0,i.kt)(f,{class_data:o,mdxType:"ConstructorDeclaration"}),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"nanos world provides a special ",(0,i.kt)("em",{parentName:"p"},"Particle*")," called ",(0,i.kt)("inlineCode",{parentName:"p"},"nanos-world::P_Grenade_Special")," which spawns different particles depending on the surface it explodes, and also if is underwater."),(0,i.kt)("p",{parentName:"admonition"},"*",(0,i.kt)("em",{parentName:"p"},'This "Particle" is just a special identifier which can only be used on Grenades!'))),(0,i.kt)("h2",{id:"-functions"},"\ud83e\udda0 Functions"),(0,i.kt)(y,{class_data:o,mdxType:"FunctionsDeclaration"}),(0,i.kt)("h2",{id:"-events"},"\ud83d\ude80 Events"),(0,i.kt)(g,{class_data:o,mdxType:"EventsDeclaration"}))}w.isMDXComponent=!0},95645:function(e){e.exports=JSON.parse('{"name":"Melee","description":"A Melee represents an Entity which can be Pickable by a Character and can be used to melee attack, Charactes can hold it with hands with pre-defined handling modes.","authority":"server","inheritance":["Actor","Paintable","Pickable"],"constructor":[{"type":"Vector","name":"location","default":"Vector(0, 0, 0)"},{"type":"Rotator","name":"rotation","default":"Rotator(0, 0, 0)"},{"type":"StaticMeshPath","name":"asset","default":""},{"type":"CollisionType","name":"collision_type","default":"CollisionType.Normal"},{"type":"boolean","name":"gravity_enabled","default":"true"},{"type":"HandlingMode","name":"handling_mode","default":"HandlingMode.Torch"},{"type":"MaterialPath","name":"crosshair_material","default":""}],"functions":[{"authority":"server","name":"SetAnimationCharacterUse","description":"Sets the Animation when attacking","parameters":[{"type":"AnimationPath","name":"asset_path","description":"The Animation used when attacking"}]},{"authority":"server","name":"SetSoundUse","description":"Sets the Sound when attacking","parameters":[{"type":"SoundPath","name":"asset_path","description":"The Sound used when attacking"}]},{"authority":"server","name":"SetBaseDamage","description":"Sets the Base Damage","parameters":[{"type":"number","name":"damage","default":"","description":"The Base Damage value"}]},{"authority":"server","name":"SetDamageSettings","description":"Sets the times when to start applying damage and when to end","description_long":"Sets the times when to start applying damage and when to end. During this time the collision of the melee will be enabled and the damage will be applied if it hits something","parameters":[{"type":"number","name":"damage_start_time","description":"The initial time to start applying damage"},{"type":"number","name":"damage_duration_time","description":"The duration time to stop applying damage"}]},{"authority":"server","name":"SetCooldown","description":"Sets the cooldown between attacking","parameters":[{"type":"number","name":"cooldown"}]},{"authority":"","name":"GetAnimationCharacterUse","description":"Gets the Animation when Character uses it","return":[{"type":"AnimationPath"}]},{"authority":"","name":"GetSoundUse","description":"Gets the Sound when Character uses it","return":[{"type":"SoundPath"}]},{"authority":"","name":"GetBaseDamage","description":"Gets the Base Damage","return":[{"type":"number"}]},{"authority":"","name":"GetCooldown","description":"Gets the Cooldown between usages","return":[{"type":"number"}]}]}')}}]);