"use strict";(self.webpackChunkdocs_docusaurus=self.webpackChunkdocs_docusaurus||[]).push([[6967],{84106:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>u,frontMatter:()=>t,metadata:()=>d,toc:()=>i});var s=a(85893),o=a(11151);const t={title:"Events Guide",description:"Tudo o que voc\xea precisa saber sobre Eventos",sidebar_position:1,tags:["script"]},r=void 0,d={id:"core-concepts/scripting/events-guide",title:"Events Guide",description:"Tudo o que voc\xea precisa saber sobre Eventos",source:"@site/i18n/pt-BR/docusaurus-plugin-content-docs/current/core-concepts/scripting/events-guide.md",sourceDirName:"core-concepts/scripting",slug:"/core-concepts/scripting/events-guide",permalink:"/pt-BR/docs/next/core-concepts/scripting/events-guide",draft:!1,unlisted:!1,editUrl:"https://crowdin.com/project/nanos-world-docs/pt-BR",tags:[{label:"script",permalink:"/pt-BR/docs/next/tags/script"}],version:"current",sidebarPosition:1,frontMatter:{title:"Events Guide",description:"Tudo o que voc\xea precisa saber sobre Eventos",sidebar_position:1,tags:["script"]},sidebar:"main",previous:{title:"Classes Guide",permalink:"/pt-BR/docs/next/core-concepts/scripting/classes-guide"},next:{title:"Conceitos de Autoridade",permalink:"/pt-BR/docs/next/core-concepts/scripting/authority-concepts"}},c={},i=[{value:"Eventos de aulas",id:"eventos-de-aulas",level:2},{value:"Inscrevendo-se para Eventos de Classe",id:"inscrevendo-se-para-eventos-de-classe",level:3},{value:"Cancelando assinatura de Eventos de Classe",id:"cancelando-assinatura-de-eventos-de-classe",level:3},{value:"Cancelando assinatura de todos os eventos",id:"cancelando-assinatura-de-todos-os-eventos",level:4},{value:"Cancelando a assinatura de um Callback de Evento espec\xedfico",id:"cancelando-a-assinatura-de-um-callback-de-evento-espec\xedfico",level:4},{value:"Eventos de Entidade",id:"eventos-de-entidade",level:2},{value:"Inscrevendo-se para Eventos de Entidade",id:"inscrevendo-se-para-eventos-de-entidade",level:3},{value:"Cancelando assinatura de Eventos de Entidade",id:"cancelando-assinatura-de-eventos-de-entidade",level:3},{value:"Cancelando assinatura de todos os eventos da entidade",id:"cancelando-assinatura-de-todos-os-eventos-da-entidade",level:4},{value:"Desinscrevendo-se de um Callback de evento de entidade espec\xedfica",id:"desinscrevendo-se-de-um-callback-de-evento-de-entidade-espec\xedfica",level:4},{value:"Eventos Personalizados",id:"eventos-personalizados",level:2}];function l(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",strong:"strong",...(0,o.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"Tudo o que voc\xea precisa saber sobre os eventos."}),"\n",(0,s.jsx)(n.h2,{id:"eventos-de-aulas",children:"Eventos de aulas"}),"\n",(0,s.jsxs)(n.p,{children:["No mundo do nano, todas as a\xe7\xf5es realizadas por Jogadores ou Entidades podem ser obtidas atrav\xe9s de ",(0,s.jsx)(n.strong,{children:"eventos"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["O evento mais b\xe1sico para trazer um exemplo \xe9 o ",(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"Invocar"})}),". Toda vez que uma entidade \xe9 gerada, o evento ",(0,s.jsx)(n.code,{children:"gerador"})," ser\xe1 acionado."]}),"\n",(0,s.jsx)(n.h3,{id:"inscrevendo-se-para-eventos-de-classe",children:"Inscrevendo-se para Eventos de Classe"}),"\n",(0,s.jsxs)(n.p,{children:["Registrar para eventos \xe9 muito f\xe1cil e direto usando o m\xe9todo ",(0,s.jsx)(n.code,{children:"Inscrever-se"}),", digamos que queremos saber onde um jogador entrou no servidor:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-lua",children:'Player.Subscribe("Spawn", function(player)\n    Console.Log(player:GetName() .. " entrou!")\nend)\n'})}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsxs)(n.p,{children:["Most events are triggered on both Client and Server sides, only a few rare exceptions which will be elicited by the ",(0,s.jsx)(n.a,{href:"/pt-BR/docs/next/core-concepts/scripting/authority-concepts#methods-and-events-availability",children:"Availability"}),"."]})}),"\n",(0,s.jsx)(n.h3,{id:"cancelando-assinatura-de-eventos-de-classe",children:"Cancelando assinatura de Eventos de Classe"}),"\n",(0,s.jsx)(n.p,{children:"Atualmente existem duas maneiras de cancelar a assinatura dos eventos:"}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Nota:"})," Cancelar a assinatura de eventos ",(0,s.jsx)(n.strong,{children:"sempre"})," cancelar o registro de eventos que foram registrados no pacote que voc\xea \xe9."]})}),"\n",(0,s.jsx)(n.h4,{id:"cancelando-assinatura-de-todos-os-eventos",children:"Cancelando assinatura de todos os eventos"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-lua",children:'-- Isto ir\xe1 cancelar o registro de todos os eventos "Spawn" do jogador registrado neste pacote\nPlayer.Unsubscribe("Spawn")\n'})}),"\n",(0,s.jsx)(n.h4,{id:"cancelando-a-assinatura-de-um-callback-de-evento-espec\xedfico",children:"Cancelando a assinatura de um Callback de Evento espec\xedfico"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-lua",children:'-- Declares the Callback beforehand\nfunction OnSpawnPlayer(player)\n    Console.Log(player:GetName() .. " entrou!")\nend\n\n-- Subscribes the event, passing the Callback\nPlayer.Subscribe("Spawn", OnSpawnPlayer)\n\n-- Subscribes for the same event, twice\nPlayer.Subscribe("Spawn", function(player)\n    Console.Log(player:GetName() .. " entrou novamente!")\nfinal)\n\n-- Desinscreve-se somente do primeiro reprodutor de chamadas\nnsubscribe("Spawn", OnSpawnPlayer)\n\n-- Isso continuar\xe1 acionando "player entrou novamente" mas n\xe3o ativar\xe1\n-- "jogador j\xe1 entrou"\n'})}),"\n",(0,s.jsx)(n.h2,{id:"eventos-de-entidade",children:"Eventos de Entidade"}),"\n",(0,s.jsx)(n.p,{children:"No mundo do nanos \xe9 poss\xedvel registrar eventos em entidades espec\xedficas tamb\xe9m Desta forma, o retorno de chamada s\xf3 ser\xe1 acionado se a entidade espec\xedfica for o motivo do evento."}),"\n",(0,s.jsx)(n.h3,{id:"inscrevendo-se-para-eventos-de-entidade",children:"Inscrevendo-se para Eventos de Entidade"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-lua",children:'-- Gera um car\xe1ter\nlocal meu_caractere = Character()\n\nmeu_caractere:Subscribe("EnterVehicle", fun\xe7\xe3o(si mesmo, ve\xedculo)\n    -- meu_caractere entrou no ve\xedculo\nfim)\n'})}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsx)(n.p,{children:"Note que uma vez que a entidade \xe9 destru\xedda, todos os eventos registrados ser\xe3o cancelados automaticamente!"})}),"\n",(0,s.jsx)(n.h3,{id:"cancelando-assinatura-de-eventos-de-entidade",children:"Cancelando assinatura de Eventos de Entidade"}),"\n",(0,s.jsx)(n.p,{children:"Atualmente existem duas maneiras de cancelar a assinatura dos eventos:"}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Nota:"})," Cancelar a assinatura de eventos ",(0,s.jsx)(n.strong,{children:"sempre"})," cancelar o registro de eventos que foram registrados no pacote que voc\xea \xe9."]})}),"\n",(0,s.jsx)(n.h4,{id:"cancelando-assinatura-de-todos-os-eventos-da-entidade",children:"Cancelando assinatura de todos os eventos da entidade"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-lua",children:'-- Isso ir\xe1 cancelar o registro de todos os eventos "EnterVehicle" deste Personagem espec\xedfico\n-- registrado nesse Pacote\nmeu_character:Unsubscribe("EnterVehicle")\n'})}),"\n",(0,s.jsx)(n.h4,{id:"desinscrevendo-se-de-um-callback-de-evento-de-entidade-espec\xedfica",children:"Desinscrevendo-se de um Callback de evento de entidade espec\xedfica"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-lua",children:'-- Declara a fun\xe7\xe3o de retorno de chamada\nOnCharacterEnteredVehicle(personagem, ve\xedculo)\n    -- Ve\xedculo!\nfim\n\n-- Inscreva-se no evento, passando o Callback\nmeu_character:Subscribe("EnterVehicle", OnCharacterEnteredVehicle)\n\n-- Inscreva-se para o mesmo evento duas vezes\nmeu_personagem:Subscribe("EnterVehicle", fun\xe7\xe3o(personagem, ve\xedculo)\n    -- Ve\xedculo digitado novamente!\nfinal)\n\n-- Cancelar inscri\xe7\xe3o apenas do primeiro retorno\nmeu_caractere:Cancelar inscri\xe7\xe3o ("EnterVehicle", OnCharacterEnteredVehicle)\n'})}),"\n",(0,s.jsx)(n.h2,{id:"eventos-personalizados",children:"Eventos Personalizados"}),"\n",(0,s.jsxs)(n.p,{children:["No mundo do nano, \xe9 poss\xedvel definir e chamar eventos personalizados. Please refer to ",(0,s.jsx)(n.a,{href:"/pt-BR/docs/next/scripting-reference/static-classes/events",children:"Events"})," Static Class for the technical documentation."]}),"\n",(0,s.jsx)(n.p,{children:"Custom events are user-created events which you can subscribe or call to all other Packages."})]})}function u(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},11151:(e,n,a)=>{a.d(n,{Z:()=>d,a:()=>r});var s=a(67294);const o={},t=s.createContext(o);function r(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);