"use strict";(self.webpackChunkdocs_docusaurus=self.webpackChunkdocs_docusaurus||[]).push([[2433],{3905:function(e,n,t){t.d(n,{Zo:function(){return l},kt:function(){return m}});var r=t(67294);function s(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){s(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,s=function(e,n){if(null==e)return{};var t,r,s={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(s[t]=e[t]);return s}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var c=r.createContext({}),u=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},l=function(e){var n=u(e.components);return r.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,s=e.mdxType,o=e.originalType,c=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),d=u(t),m=s,f=d["".concat(c,".").concat(m)]||d[m]||p[m]||o;return t?r.createElement(f,i(i({ref:n},l),{},{components:t})):r.createElement(f,i({ref:n},l))}));function m(e,n){var t=arguments,s=n&&n.mdxType;if("string"==typeof e||s){var o=t.length,i=new Array(o);i[0]=d;var a={};for(var c in n)hasOwnProperty.call(n,c)&&(a[c]=n[c]);a.originalType=e,a.mdxType="string"==typeof e?e:s,i[1]=a;for(var u=2;u<o;u++)i[u]=t[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},92213:function(e,n,t){t.r(n),t.d(n,{assets:function(){return p},contentTitle:function(){return u},default:function(){return g},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return d}});var r,s=t(83117),o=t(80102),i=(t(67294),t(3905)),a=["components"],c={title:"Enums",description:"nanos world Enums.",tags:["scripting"]},u=void 0,l={unversionedId:"scripting-reference/glossary/enums",id:"version-latest/scripting-reference/glossary/enums",title:"Enums",description:"nanos world Enums.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-latest/scripting-reference/glossary/enums.mdx",sourceDirName:"scripting-reference/glossary",slug:"/scripting-reference/glossary/enums",permalink:"/fr/docs/scripting-reference/glossary/enums",draft:!1,editUrl:"https://github.com/nanos-world/docs/edit/master/versioned_docs/version-latest/scripting-reference/glossary/enums.mdx",tags:[{label:"scripting",permalink:"/fr/docs/tags/scripting"}],version:"latest",frontMatter:{title:"Enums",description:"nanos world Enums.",tags:["scripting"]},sidebar:"version-latest/main",previous:{title:"Types de base",permalink:"/fr/docs/scripting-reference/glossary/basic-types"},next:{title:"Setting Up Unreal Engine",permalink:"/fr/docs/assets-modding/creating-assets/setting-up-ue"}},p={},d=[{value:"Tous les Enums",id:"tous-les-enums",level:2}],m=(r="EnumsDeclaration",function(e){return console.warn("Component "+r+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",e)}),f={toc:d};function g(e){var n=e.components,t=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,s.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Au lieu de passer des nombres aux m\xe9thodes ou de comparer des nombres dans les callbacks d'\xe9v\xe9nements, vous pouvez utiliser les ",(0,i.kt)("strong",{parentName:"p"},"Enums")," suivants pour le faire. Exemples:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},'-- Utilisation des Enums pour d\xe9terminer le StanceMode du personnage.\nCharacter.Subscribe("StanceModeChanged", function(character, old_stance, new_stance)\n   if (new_stance == StanceMode.Standing) then\n      Package.Log("Je suis debout !")\n   else if (new_stance == StanceMode.Crouching) then\n      Package.Log("Je suis accroupi !")\n   end\nend)\n\n-- Utilisation des Enums pour passer un type de lumi\xe8re au constructeur.\nlocal my_light = Light(Vector(-5, 0, 50), Rotator(), Color.RED, LightType.Point)\n\n-- Utilisation des Enums pour d\xe9finir la vue d\'un personnage\ncharacter:SetViewMode(ViewMode.FPS)\n')),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"The functions which use the Enums are still receiving numbers as parameters (as always), using Enums is just a facilitator.")),(0,i.kt)("h2",{id:"tous-les-enums"},"Tous les Enums"),(0,i.kt)(m,{mdxType:"EnumsDeclaration"}))}g.isMDXComponent=!0}}]);