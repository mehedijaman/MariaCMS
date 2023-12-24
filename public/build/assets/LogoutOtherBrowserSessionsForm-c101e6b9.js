import{r as h,T as b,o as n,c as y,w as r,e as l,t as s,a,d as c,F as V,f as x,g as C,b as d,u as i,a3 as A,n as B}from"./app-983f79d7.js";import{_ as $}from"./ActionMessage-9dc7c072.js";import{_ as S}from"./ActionSection-306bbbb2.js";import{_ as H}from"./DialogModal-af4f8976.js";import{_ as L}from"./InputError-e786aad1.js";import{_ as g}from"./PrimaryButton-a4bfb3bc.js";import{_ as F}from"./SecondaryButton-804a16cb.js";import{_ as N}from"./TextInput-23cfbb72.js";import"./SectionTitle-ebc51687.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./Modal-ef71f02a.js";import"./XMarkIcon-29e0de1e.js";const M={class:"max-w-xl text-sm text-slate-600 dark:text-slate-400"},T={key:0,class:"mt-5 space-y-6"},U={key:0,class:"w-8 h-8 text-slate-500",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor"},j=a("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25"},null,-1),D=[j],E={key:1,class:"w-8 h-8 text-slate-500",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor"},I=a("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"},null,-1),K=[I],O={class:"ml-3"},z={class:"text-sm text-slate-600 dark:text-slate-400"},q={class:"text-xs text-slate-500"},G={key:0,class:"text-green-500 font-semibold"},J={key:1},P={class:"flex items-center mt-5"},Q={class:"mt-4"},ns={__name:"LogoutOtherBrowserSessionsForm",props:{sessions:Array},setup(p){const _=h(!1),m=h(null),e=b({password:""}),v=()=>{_.value=!0,setTimeout(()=>m.value.focus(),250)},w=()=>{e.delete(route("other-browser-sessions.destroy"),{preserveScroll:!0,onSuccess:()=>u(),onError:()=>m.value.focus(),onFinish:()=>e.reset()})},u=()=>{_.value=!1,e.reset()};return(o,f)=>(n(),y(S,null,{title:r(()=>[l(s(o.lang().label.browser_session),1)]),description:r(()=>[l(s(o.lang().label.browser_session_description),1)]),content:r(()=>[a("div",M,s(o.lang().label.browser_session_content),1),p.sessions.length>0?(n(),c("div",T,[(n(!0),c(V,null,x(p.sessions,(t,k)=>(n(),c("div",{key:k,class:"flex items-center"},[a("div",null,[t.agent.is_desktop?(n(),c("svg",U,D)):(n(),c("svg",E,K))]),a("div",O,[a("div",z,s(t.agent.platform?t.agent.platform:"Unknown")+" - "+s(t.agent.browser?t.agent.browser:"Unknown"),1),a("div",null,[a("div",q,[l(s(t.ip_address)+", ",1),t.is_current_device?(n(),c("span",G,s(o.lang().label.this_device),1)):(n(),c("span",J,s(o.lang().label.last_active)+" "+s(t.last_active),1))])])])]))),128))])):C("",!0),a("div",P,[d(g,{onClick:v},{default:r(()=>[l(s(o.lang().button.logout_other_browser_session),1)]),_:1}),d($,{on:i(e).recentlySuccessful,class:"ml-3"},{default:r(()=>[l(" Done. ")]),_:1},8,["on"])]),d(H,{show:_.value,onClose:u},{title:r(()=>[l(s(o.lang().label.logout_other_browser_session),1)]),content:r(()=>[l(s(o.lang().label.browser_session_caption)+" ",1),a("div",Q,[d(N,{ref_key:"passwordInput",ref:m,modelValue:i(e).password,"onUpdate:modelValue":f[0]||(f[0]=t=>i(e).password=t),type:"password",class:"mt-1 block w-full",placeholder:o.lang().placeholder.password,autocomplete:"current-password",onKeyup:A(w,["enter"]),error:i(e).errors.password},null,8,["modelValue","placeholder","error"]),d(L,{message:i(e).errors.password,class:"mt-2"},null,8,["message"])])]),footer:r(()=>[d(F,{onClick:u},{default:r(()=>[l(s(o.lang().button.cancel),1)]),_:1}),d(g,{class:B(["ml-3",{"opacity-25":i(e).processing}]),disabled:i(e).processing,onClick:w},{default:r(()=>[l(s(o.lang().button.logout_other_browser_session)+" "+s(i(e).processing?"...":""),1)]),_:1},8,["class","disabled"])]),_:1},8,["show"])]),_:1}))}};export{ns as default};
