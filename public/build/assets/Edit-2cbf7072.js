import{E as v,r as U,h as D,i as h,T as b,o as E,d as j,b as s,w as i,u as t,m as w,e as f,t as u,a as r,j as B,C as M,n as N}from"./app-40e302ae.js";import{_ as x}from"./DialogModal-112a7533.js";import{_ as m}from"./InputError-54276dc2.js";import{_ as d}from"./InputLabel-99c3d693.js";import{_ as I}from"./ActionButton-8f7a17f6.js";import{_ as T}from"./PrimaryButton-19d7538d.js";import{_ as z}from"./SecondaryButton-a4fc0b9c.js";import{_ as V}from"./TextInput-e0c63212.js";import{_ as F}from"./TextAreaInput-584ba47e.js";import{g as O}from"./textHelper-8b1dfc94.js";import{r as P}from"./PencilIcon-1c695c69.js";import"./Modal-9818fca1.js";import"./XMarkIcon-5aea3a76.js";const q={class:"flex flex-col md:flex-row gap-4"},A={class:"w-full"},G={class:"w-full"},H={class:"space-y-1"},J={class:"space-y-1"},K=r("option",{value:"1"},"Published",-1),L=r("option",{value:"0"},"Unpublished",-1),Q=r("option",{value:null},"Draft",-1),R=[K,L,Q],ue={__name:"Edit",props:{title:String,item:Object},emits:["open"],setup(k,{emit:$}){const y=v("title"),C=v("updateItems"),S=$,p=U(!1),g=k,o=D(g.item);h(()=>o.name,e=>{o.slug=O(e)});let l=b(o);h(o,e=>{l=b(e)});const _=()=>{var e;l.put(route("tags.update",(e=g.item)==null?void 0:e.id),{preserveScroll:!0,onSuccess:a=>{c(),C(a.props.tags)},onError:()=>null,onFinish:()=>null})},c=()=>{p.value=!1,l.errors={},l.reset()};return(e,a)=>(E(),j("div",null,[s(I,{onClick:a[0]||(a[0]=w(n=>(p.value=!0,S("open")),["prevent"]))},{default:i(()=>[s(t(P),{class:"w-4 h-auto"})]),_:1}),s(x,{show:p.value,onClose:c,"max-width":"xl"},{title:i(()=>[f(u(e.lang().label.edit)+" "+u(t(y)),1)]),content:i(()=>[r("form",{class:"space-y-2",onSubmit:w(_,["prevent"])},[r("div",q,[r("div",A,[s(d,{for:"name",value:e.lang().label.name},null,8,["value"]),s(V,{id:"name",modelValue:o.name,"onUpdate:modelValue":a[1]||(a[1]=n=>o.name=n),type:"text",class:"block w-full",autocomplete:"name",placeholder:e.lang().placeholder.name,error:t(l).errors.name},null,8,["modelValue","placeholder","error"]),s(m,{message:t(l).errors.name},null,8,["message"])]),r("div",G,[s(d,{for:"slug",value:e.lang().label.slug},null,8,["value"]),s(V,{id:"slug",modelValue:o.slug,"onUpdate:modelValue":a[2]||(a[2]=n=>o.slug=n),type:"text",class:"block w-full",autocomplete:"slug",placeholder:e.lang().placeholder.slug,error:t(l).errors.slug},null,8,["modelValue","placeholder","error"]),s(m,{message:t(l).errors.slug},null,8,["message"])])]),r("div",H,[s(d,{for:"slug",value:e.lang().label.description},null,8,["value"]),s(F,{id:"slug",modelValue:o.description,"onUpdate:modelValue":a[3]||(a[3]=n=>o.description=n),type:"text",class:"block w-full",autocomplete:"description",placeholder:e.lang().placeholder.description,error:t(l).errors.desctiption},null,8,["modelValue","placeholder","error"]),s(m,{message:t(l).errors.description},null,8,["message"])]),r("div",J,[s(d,{for:"status",value:e.lang().label.status},null,8,["value"]),B(r("select",{"onUpdate:modelValue":a[4]||(a[4]=n=>o.status=n),id:"status",name:"status",class:"block w-full"},R,512),[[M,o.status]]),s(m,{message:t(l).errors.status},null,8,["message"])])],32)]),footer:i(()=>[s(z,{onClick:c},{default:i(()=>[f(u(e.lang().button.cancel),1)]),_:1}),s(T,{class:N(["ml-3",{"opacity-25":t(l).processing}]),disabled:t(l).processing,onClick:_},{default:i(()=>[f(u(e.lang().button.save)+" "+u(t(l).processing?"...":""),1)]),_:1},8,["class","disabled"])]),_:1},8,["show"])]))}};export{ue as default};
