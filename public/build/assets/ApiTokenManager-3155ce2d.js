import{T as h,r as y,o as u,d,b as a,w as l,e as i,t as s,a as r,u as n,F as $,f as C,g as v,n as S}from"./app-029d3c12.js";import{_ as U}from"./ActionMessage-a8ddb6ff.js";import{_ as x}from"./ActionSection-cf98616c.js";import{_ as A}from"./Checkbox-5e67eacf.js";import{_ as z}from"./ConfirmationModal-3e9220f0.js";import{_ as E}from"./DangerButton-d1685ae6.js";import{_ as w}from"./DialogModal-d0f6ace0.js";import{_ as L}from"./FormSection-904a328d.js";import{_ as M}from"./InputError-5ba87def.js";import{_ as P}from"./InputLabel-4b2acd49.js";import{_ as V}from"./PrimaryButton-4a147dbe.js";import{_ as T}from"./SecondaryButton-c3ca0618.js";import{S as q}from"./SectionBorder-fa410b41.js";import{_ as G}from"./TextInput-f658579c.js";import"./SectionTitle-a5e557df.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./Modal-0faaa9fe.js";import"./XMarkIcon-e53425f1.js";const H={class:"col-span-6 sm:col-span-4"},I={key:0,class:"col-span-6"},J={class:"mt-2 grid grid-cols-1 md:grid-cols-2 gap-4"},K={class:"flex items-center"},O={class:"ml-2 text-sm text-slate-600 dark:text-slate-400"},Q={key:0},R={class:"mt-10 sm:mt-0"},W={class:"space-y-6"},X={class:"break-all dark:text-white"},Y={class:"flex items-center ml-2"},Z={key:0,class:"text-sm text-slate-400"},ee=["onClick"],se=["onClick"],le={key:0,class:"mt-4 bg-slate-100 dark:bg-slate-900 px-4 py-2 rounded font-mono text-sm text-slate-500 break-all"},te={class:"grid grid-cols-1 md:grid-cols-2 gap-4"},ae={class:"flex items-center"},oe={class:"ml-2 text-sm text-slate-600 dark:text-slate-400"},Te={__name:"ApiTokenManager",props:{tokens:Array,availablePermissions:Array,defaultPermissions:Array},setup(c){const m=h({name:"",permissions:c.defaultPermissions}),p=h({permissions:[]}),k=h({}),b=y(!1),f=y(null),g=y(null),F=()=>{m.post(route("api-tokens.store"),{preserveScroll:!0,onSuccess:()=>{b.value=!0,m.reset()}})},B=e=>{p.permissions=e.abilities,f.value=e},N=()=>{p.put(route("api-tokens.update",f.value),{preserveScroll:!0,preserveState:!0,onSuccess:()=>f.value=null})},j=e=>{g.value=e},D=()=>{k.delete(route("api-tokens.destroy",g.value),{preserveScroll:!0,preserveState:!0,onSuccess:()=>g.value=null})};return(e,o)=>(u(),d("div",null,[a(L,{onSubmitted:F},{title:l(()=>[i(s(e.lang().label.create_api_token),1)]),description:l(()=>[i(s(e.lang().label.create_api_token_caption),1)]),form:l(()=>[r("div",H,[a(P,{for:"name",value:e.lang().label.token_name},null,8,["value"]),a(G,{id:"name",modelValue:n(m).name,"onUpdate:modelValue":o[0]||(o[0]=t=>n(m).name=t),type:"text",class:"mt-1 block w-full",autofocus:"",placeholder:e.lang().placeholder.token_name,error:n(m).errors.name},null,8,["modelValue","placeholder","error"]),a(M,{message:n(m).errors.name,class:"mt-2"},null,8,["message"])]),c.availablePermissions.length>0?(u(),d("div",I,[a(P,{for:"permissions",value:e.lang().label.permissions},null,8,["value"]),r("div",J,[(u(!0),d($,null,C(c.availablePermissions,t=>(u(),d("div",{key:t},[r("label",K,[a(A,{checked:n(m).permissions,"onUpdate:checked":o[1]||(o[1]=_=>n(m).permissions=_),value:t},null,8,["checked","value"]),r("span",O,s(t),1)])]))),128))])])):v("",!0)]),actions:l(()=>[a(U,{on:n(m).recentlySuccessful,class:"mr-3"},{default:l(()=>[i(s(e.lang().label.created),1)]),_:1},8,["on"]),a(V,{class:S({"opacity-25":n(m).processing}),disabled:n(m).processing},{default:l(()=>[i(s(e.lang().button.create)+" "+s(n(m).processing?"...":""),1)]),_:1},8,["class","disabled"])]),_:1}),c.tokens.length>0?(u(),d("div",Q,[a(q),r("div",R,[a(x,null,{title:l(()=>[i(s(e.lang().label.manage_api_tokens),1)]),description:l(()=>[i(s(e.lang().label.manage_api_tokens_caption),1)]),content:l(()=>[r("div",W,[(u(!0),d($,null,C(c.tokens,t=>(u(),d("div",{key:t.id,class:"flex items-center justify-between"},[r("div",X,s(t.name),1),r("div",Y,[t.last_used_ago?(u(),d("div",Z,s(e.lang().label.last_used)+" "+s(t.last_used_ago),1)):v("",!0),c.availablePermissions.length>0?(u(),d("button",{key:1,class:"cursor-pointer ml-6 text-sm text-slate-400 underline",onClick:_=>B(t)},s(e.lang().button.permissions),9,ee)):v("",!0),r("button",{class:"cursor-pointer ml-6 text-sm text-rose-500",onClick:_=>j(t)},s(e.lang().button.delete),9,se)])]))),128))])]),_:1})])])):v("",!0),a(w,{show:b.value,onClose:o[3]||(o[3]=t=>b.value=!1)},{title:l(()=>[i(s(e.lang().label.api_token),1)]),content:l(()=>[r("div",null,s(e.lang().label.api_token_caption),1),e.$page.props.jetstream.flash.token?(u(),d("div",le,s(e.$page.props.jetstream.flash.token),1)):v("",!0)]),footer:l(()=>[a(T,{onClick:o[2]||(o[2]=t=>b.value=!1)},{default:l(()=>[i(s(e.lang().button.close),1)]),_:1})]),_:1},8,["show"]),a(w,{show:f.value!=null,onClose:o[6]||(o[6]=t=>f.value=null)},{title:l(()=>[i(s(e.lang().label.api_token_permissions),1)]),content:l(()=>[r("div",te,[(u(!0),d($,null,C(c.availablePermissions,t=>(u(),d("div",{key:t},[r("label",ae,[a(A,{checked:n(p).permissions,"onUpdate:checked":o[4]||(o[4]=_=>n(p).permissions=_),value:t},null,8,["checked","value"]),r("span",oe,s(t),1)])]))),128))])]),footer:l(()=>[a(T,{onClick:o[5]||(o[5]=t=>f.value=null)},{default:l(()=>[i(s(e.lang().button.cancel),1)]),_:1}),a(V,{class:S(["ml-3",{"opacity-25":n(p).processing}]),disabled:n(p).processing,onClick:N},{default:l(()=>[i(s(e.lang().button.save)+" "+s(n(p).processing?"...":""),1)]),_:1},8,["class","disabled"])]),_:1},8,["show"]),a(z,{show:g.value!=null,onClose:o[8]||(o[8]=t=>g.value=null)},{title:l(()=>[i(s(e.lang().label.delete_api_token),1)]),content:l(()=>[i(s(e.lang().label.delete_api_token_caption),1)]),footer:l(()=>[a(T,{onClick:o[7]||(o[7]=t=>g.value=null)},{default:l(()=>[i(s(e.lang().button.cancel),1)]),_:1}),a(E,{class:S(["ml-3",{"opacity-25":n(k).processing}]),disabled:n(k).processing,onClick:D},{default:l(()=>[i(s(e.lang().button.delete)+" "+s(n(k).processing?"...":""),1)]),_:1},8,["class","disabled"])]),_:1},8,["show"])]))}};export{Te as default};
