"use strict";(self.webpackChunkdocs_docusaurus=self.webpackChunkdocs_docusaurus||[]).push([[7066],{44199:(e,o,a)=>{a.r(o),a.d(o,{assets:()=>t,contentTitle:()=>s,default:()=>l,frontMatter:()=>r,metadata:()=>d,toc:()=>c});var n=a(85893),i=a(11151);const r={title:"Integra\xe7\xe3o do Discord",description:"Como usar nanos m\xe9todos do Discord para criar uma boa integra\xe7\xe3o para o seu servidor",tags:["script"]},s=void 0,d={id:"core-concepts/scripting/discord-integration",title:"Integra\xe7\xe3o do Discord",description:"Como usar nanos m\xe9todos do Discord para criar uma boa integra\xe7\xe3o para o seu servidor",source:"@site/i18n/pt-BR/docusaurus-plugin-content-docs/version-latest/core-concepts/scripting/discord-integration.md",sourceDirName:"core-concepts/scripting",slug:"/core-concepts/scripting/discord-integration",permalink:"/pt-BR/docs/core-concepts/scripting/discord-integration",draft:!1,unlisted:!1,editUrl:"https://crowdin.com/project/nanos-world-docs/pt-BR",tags:[{label:"script",permalink:"/pt-BR/docs/tags/script"}],version:"latest",frontMatter:{title:"Integra\xe7\xe3o do Discord",description:"Como usar nanos m\xe9todos do Discord para criar uma boa integra\xe7\xe3o para o seu servidor",tags:["script"]},sidebar:"main",previous:{title:"Dimensions",permalink:"/pt-BR/docs/core-concepts/scripting/dimensions"},next:{title:"Dados persistentes",permalink:"/pt-BR/docs/core-concepts/scripting/persistent-data"}},t={},c=[{value:"Atualizando a atividade do jogador do Discord (Rich Presence)",id:"atualizando-a-atividade-do-jogador-do-discord-rich-presence",level:2},{value:"Usando seu pr\xf3prio ID de Aplicativo",id:"usando-seu-pr\xf3prio-id-de-aplicativo",level:2}];function p(e){const o={admonition:"admonition",code:"code",h2:"h2",img:"img",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(o.p,{children:"Como usar nanos m\xe9todos do Discord para criar uma boa integra\xe7\xe3o para o seu servidor."}),"\n",(0,n.jsx)(o.p,{children:(0,n.jsx)(o.img,{src:a(41582).Z+"",width:"704",height:"264"})}),"\n",(0,n.jsx)(o.p,{children:"Integrar seu servidor ao Discord \xe9 muito f\xe1cil! N\xf3s fornecemos uma integra\xe7\xe3o que est\xe1 pronta para ser usada, mas voc\xea tamb\xe9m pode adicionar seu pr\xf3prio ID de aplicativo do Discord e usar seu pr\xf3prio aplicativo!"}),"\n",(0,n.jsx)(o.h2,{id:"atualizando-a-atividade-do-jogador-do-discord-rich-presence",children:"Atualizando a atividade do jogador do Discord (Rich Presence)"}),"\n",(0,n.jsx)(o.p,{children:"Fizemos o processo muito simples, temos um m\xe9todo para alterar a atividade do jogador:"}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-lua",metastring:'title="Client/Index.lua"',children:'local state = "Working as Truck Driver"\nlocal details = "Awesome Roleplay"\nlocal large_text = "Honk!"\nlocal large_image = "nanos-world-full-world"\n\nClient.SetDiscordActivity(state, details, large_image, large_text)\n'})}),"\n",(0,n.jsx)(o.p,{children:(0,n.jsx)(o.img,{alt:"Como vai se parecer",src:a(35541).Z+"",width:"398",height:"415"})}),"\n",(0,n.jsx)(o.admonition,{type:"info",children:(0,n.jsx)(o.p,{children:"Voc\xea pode usar seu pr\xf3prio ID de Aplicativo para enviar suas pr\xf3prias imagens!"})}),"\n",(0,n.jsx)(o.h2,{id:"usando-seu-pr\xf3prio-id-de-aplicativo",children:"Usando seu pr\xf3prio ID de Aplicativo"}),"\n",(0,n.jsx)(o.p,{children:"Usar o seu pr\xf3prio ID de Aplicativo traz a vantagem de ser capaz de configur\xe1-lo como voc\xea quer, e at\xe9 mesmo enviar suas pr\xf3prias imagens para serem exibidas no Rich Presence."}),"\n",(0,n.jsx)(o.p,{children:(0,n.jsx)(o.img,{alt:"Como vai se parecer",src:a(82930).Z+"",width:"1867",height:"541"})}),"\n",(0,n.jsx)(o.p,{children:"Inicializar seu pr\xf3prio ID de aplicativo \xe9 extremamente f\xe1cil, basta executar o seguinte c\xf3digo do cliente:"}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-lua",metastring:'title="Client/Index.lua"',children:"Client.InitializeDiscord(client_id)\n"})}),"\n",(0,n.jsx)(o.admonition,{type:"tip",children:(0,n.jsxs)(o.p,{children:["E voc\xea est\xe1 pronto! Agora voc\xea pode usar o m\xe9todo ",(0,n.jsx)(o.code,{children:"Client.SetDiscordActivity()"}),"!"]})})]})}function l(e={}){const{wrapper:o}={...(0,i.a)(),...e.components};return o?(0,n.jsx)(o,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}},35541:(e,o,a)=>{a.d(o,{Z:()=>n});const n=a.p+"assets/images/discord-integration-01-ac058b689d6a1512e58a10d80051049e.webp"},82930:(e,o,a)=>{a.d(o,{Z:()=>n});const n=a.p+"assets/images/discord-integration-02-4898b92410ab77a8f53913abbea2a483.webp"},41582:(e,o,a)=>{a.d(o,{Z:()=>n});const n="data:image/webp;base64,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"},11151:(e,o,a)=>{a.d(o,{Z:()=>d,a:()=>s});var n=a(67294);const i={},r=n.createContext(i);function s(e){const o=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function d(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),n.createElement(r.Provider,{value:o},e.children)}}}]);