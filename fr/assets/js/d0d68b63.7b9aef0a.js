"use strict";(self.webpackChunkdocs_docusaurus=self.webpackChunkdocs_docusaurus||[]).push([[1175],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return m}});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=o.createContext({}),l=function(e){var t=o.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=l(e.components);return o.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(r),m=n,f=d["".concat(c,".").concat(m)]||d[m]||p[m]||i;return r?o.createElement(f,a(a({ref:t},u),{},{components:r})):o.createElement(f,a({ref:t},u))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,a=new Array(i);a[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,a[1]=s;for(var l=2;l<i;l++)a[l]=r[l];return o.createElement.apply(null,a)}return o.createElement.apply(null,r)}d.displayName="MDXCreateElement"},57906:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return w},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return d}});var o=r(83117),n=r(80102),i=(r(67294),r(3905)),a=r(9685),s=["components"],c={title:"Rotator",description:"Un conteneur pour les informations de rotation. Toutes les valeurs de rotation sont stock\xe9es en degr\xe9s.",tags:["classe-utilitaire"]},l=void 0,u={unversionedId:"scripting-reference/utility-classes/rotator",id:"version-latest/scripting-reference/utility-classes/rotator",title:"Rotator",description:"Un conteneur pour les informations de rotation. Toutes les valeurs de rotation sont stock\xe9es en degr\xe9s.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-latest/scripting-reference/utility-classes/rotator.mdx",sourceDirName:"scripting-reference/utility-classes",slug:"/scripting-reference/utility-classes/rotator",permalink:"/fr/docs/scripting-reference/utility-classes/rotator",draft:!1,editUrl:"https://github.com/nanos-world/docs/edit/master/versioned_docs/version-latest/scripting-reference/utility-classes/rotator.mdx",tags:[{label:"classe-utilitaire",permalink:"/fr/docs/tags/classe-utilitaire"}],version:"latest",frontMatter:{title:"Rotator",description:"Un conteneur pour les informations de rotation. Toutes les valeurs de rotation sont stock\xe9es en degr\xe9s.",tags:["classe-utilitaire"]},sidebar:"version-latest/main",previous:{title:"Quat",permalink:"/fr/docs/scripting-reference/utility-classes/quaternion"},next:{title:"Vector",permalink:"/fr/docs/scripting-reference/utility-classes/vector"}},p={},d=[{value:"\ud83c\udf92 Examples",id:"-examples",level:2},{value:"\ud83c\udfd7\ufe0f Constructor",id:"\ufe0f-constructor",level:2},{value:"\ud83e\uddfd Properties",id:"-properties",level:2},{value:"\ud83e\udda0 Functions",id:"-functions",level:2},{value:"\ud83d\uddff Static Functions",id:"-static-functions",level:2}],m=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",t)}},f=m("HeaderDeclaration"),h=m("ConstructorDeclaration"),y=m("PropertiesDeclaration"),v=m("FunctionsDeclaration"),g=m("StaticFunctionsDeclaration"),b={toc:d};function w(e){var t=e.components,r=(0,n.Z)(e,s);return(0,i.kt)("wrapper",(0,o.Z)({},b,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)(f,{class_data:a,is_open_sourced:!0,mdxType:"HeaderDeclaration"}),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Les Rotator sont compress\xe9s en interne et automatiquement, ce qui r\xe9duit leur taille dans le r\xe9seau jusqu'\xe0 90 %. Leurs composants sont g\xe9n\xe9ralement compress\xe9s en 1 octets chacun (\xe0 quelques exceptions o\xf9 nous avons besoin de plus de pr\xe9cision).")),(0,i.kt)("h2",{id:"-examples"},"\ud83c\udf92 Examples"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},"local new_rotator = Rotator(-90, 153, 24.5)\n")),(0,i.kt)("h2",{id:"\ufe0f-constructor"},"\ud83c\udfd7\ufe0f Constructor"),(0,i.kt)(h,{class_data:a,mdxType:"ConstructorDeclaration"}),(0,i.kt)("h2",{id:"-properties"},"\ud83e\uddfd Properties"),(0,i.kt)(y,{class_data:a,mdxType:"PropertiesDeclaration"}),(0,i.kt)("h2",{id:"-functions"},"\ud83e\udda0 Functions"),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"This structure supports ",(0,i.kt)("inlineCode",{parentName:"p"},"+"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"-"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"*")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"tostring")," operations.")),(0,i.kt)(v,{class_data:a,mdxType:"FunctionsDeclaration"}),(0,i.kt)("h2",{id:"-static-functions"},"\ud83d\uddff Static Functions"),(0,i.kt)(g,{class_data:a,mdxType:"StaticFunctionsDeclaration"}))}w.isMDXComponent=!0},9685:function(e){e.exports=JSON.parse('{"name":"Rotator","description":"A container for rotation information (Pitch, Yaw, Ro). All rotation values are stored in degrees.","constructor":[{"name":"Pitch","type":"number","default":"0","description":"Pitch"},{"name":"Yaw","type":"number","default":"0","description":"Yaw"},{"name":"Roll","type":"number","default":"0","description":"Roll"}],"properties":[{"name":"Pitch","type":"number","description":"Rotation around the right axis (around Y axis), Looking up and down (0=Straight Ahead, +Up, -Down)"},{"name":"Yaw","type":"number","description":"Rotation around the up axis (around Z axis), Running in circles 0=East, +North, -South."},{"name":"Roll","type":"number","description":"Rotation around the forward axis (around X axis), Tilting your head, 0=Straight, +Clockwise, -CCW."}],"functions":[{"name":"GetForwardVector","description":"Get the forward (X) unit direction vector from this component, in world space.","return":[{"type":"Vector","description":"the forward direction"}]},{"name":"GetRightVector","description":"Get the right (Y) unit direction vector from this component, in world space.","return":[{"type":"Vector","description":"the right direction"}]},{"name":"GetUpVector","description":"Get the up (Z) unit direction vector from this component, in world space.","return":[{"type":"Vector","description":"the up direction"}]},{"name":"RotateVector","description":"Rotate a vector rotated by this rotator.","parameters":[{"type":"Vector","name":"vector","description":"the vector to rotate by the Rotator"}],"return":[{"type":"Vector","description":"the rotated vector"}]},{"name":"Normalize","description":"In-place normalize, removes all winding and creates the \u201cshortest route\u201d rotation."},{"name":"UnrotateVector","description":"Returns the vector rotated by the inverse of this rotator.","parameters":[{"type":"Vector","name":"vector","description":"The vector to rotate by the inverse of the Rotator"}],"return":[{"type":"Vector","description":"the unrotated vector"}]},{"name":"Quaternion","description":"Get Rotation as a quaternion.","return":[{"type":"Quat","description":"the rotation as a quaternion"}]},{"name":"GetNormalized","description":"Returns a new Rotator normalized.","return":[{"type":"Rotator","description":"the normalized Rotator"}]},{"name":"IsNearlyZero","description":"Checks whether rotator is near to zero within a specified tolerance","parameters":[{"type":"number","name":"tolerance","description":"Tolerance to check","default":"0.000001"}],"return":[{"type":"boolean","description":"whether the rotator is nearly zero"}]},{"name":"IsZero","description":"Checks whether all components of the rotator are exactly zero","return":[{"type":"boolean","description":"whether the rotator is exactly zero"}]}],"static_functions":[{"name":"Random","description":"Generates a random rotation, with optional random roll","parameters":[{"type":"boolean","name":"roll","description":"Whether to use a random roll in the rotator, otherwise uses 0 for roll","default":"false"}],"return":[{"type":"Rotator","description":"the random rotation"}]}]}')}}]);