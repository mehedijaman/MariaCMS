import{D as $,r as U,h as C,T as _,i as S,o as D,d as j,b as e,w as i,u as t,m as b,e as v,t as u,a as n,j as B,G as E,n as M}from"./app-2598048d.js";import{_ as N}from"./DialogModal-1533a031.js";import{_ as d}from"./InputError-68ba7ea3.js";import{_ as m}from"./InputLabel-c9a43dc8.js";import{_ as I}from"./ActionButton-c7fad4fa.js";import{_ as T}from"./PrimaryButton-7f18ea50.js";import{_ as z}from"./SecondaryButton-a4f6ae6f.js";import{_ as p}from"./TextInput-d95d676f.js";import{r as F}from"./PencilIcon-87a100fa.js";import"./Modal-aa19319a.js";import"./XMarkIcon-eb784676.js";const G={class:"space-y-1"},O={class:"space-y-1"},P={class:"space-y-1"},q={class:"space-y-1"},A={class:"space-y-1"},H={class:"space-y-1"},J=n("option",{value:"1"},"Published",-1),K=n("option",{value:"0"},"Unpublished",-1),L=n("option",{value:null},"Draft",-1),Q=[J,K,L],te={__name:"Edit",props:{title:String,item:Object},emits:["open"],setup(y,{emit:V}){const w=$("updateItem"),k=V,g=U(!1),c=y,o=C(c.item);let a=_(o);S(o,l=>{a=_(l)});const h=()=>{var l;a.put(route("messages.update",(l=c.item)==null?void 0:l.id),{preserveScroll:!0,onSuccess:()=>{var s;f(),w((s=c.item)==null?void 0:s.id,o)},onError:()=>null,onFinish:()=>null})},f=()=>{g.value=!1,a.errors={},a.reset()};return(l,s)=>(D(),j("div",null,[e(I,{onClick:s[0]||(s[0]=b(r=>(g.value=!0,k("open")),["prevent"]))},{default:i(()=>[e(t(F),{class:"w-4 h-auto"})]),_:1}),e(N,{show:g.value,onClose:f,"max-width":"md"},{title:i(()=>[v(u(l.lang().label.edit)+" "+u(c.title),1)]),content:i(()=>[n("form",{class:"space-y-2",onSubmit:b(h,["prevent"])},[n("div",G,[e(m,{for:"name",value:l.lang().label.name},null,8,["value"]),e(p,{id:"name",modelValue:o.name,"onUpdate:modelValue":s[1]||(s[1]=r=>o.name=r),type:"text",class:"block w-full",autocomplete:"name",placeholder:l.lang().placeholder.slider_name,error:t(a).errors.name},null,8,["modelValue","placeholder","error"]),e(d,{message:t(a).errors.name},null,8,["message"])]),n("div",O,[e(m,{for:"designation",value:l.lang().label.designation},null,8,["value"]),e(p,{id:"designation",modelValue:o.designation,"onUpdate:modelValue":s[2]||(s[2]=r=>o.designation=r),type:"text",class:"block w-full",autocomplete:"designation",placeholder:l.lang().placeholder.designation,error:t(a).errors.designation},null,8,["modelValue","placeholder","error"]),e(d,{message:t(a).errors.designation},null,8,["message"])]),n("div",P,[e(m,{for:"company",value:l.lang().label.company},null,8,["value"]),e(p,{id:"company",modelValue:o.company,"onUpdate:modelValue":s[3]||(s[3]=r=>o.company=r),type:"text",class:"block w-full",autocomplete:"company",placeholder:l.lang().placeholder.company,error:t(a).errors.company},null,8,["modelValue","placeholder","error"]),e(d,{message:t(a).errors.company},null,8,["message"])]),n("div",q,[e(m,{for:"rating",value:l.lang().label.rating},null,8,["value"]),e(p,{id:"rating",modelValue:o.rating,"onUpdate:modelValue":s[4]||(s[4]=r=>o.rating=r),type:"text",class:"block w-full",autocomplete:"rating",placeholder:l.lang().placeholder.rating,error:t(a).errors.rating},null,8,["modelValue","placeholder","error"]),e(d,{message:t(a).errors.rating},null,8,["message"])]),n("div",A,[e(m,{for:"slug",value:l.lang().label.description},null,8,["value"]),e(p,{id:"slug",modelValue:o.description,"onUpdate:modelValue":s[5]||(s[5]=r=>o.description=r),type:"text",class:"block w-full",autocomplete:"description",placeholder:l.lang().placeholder.description,error:t(a).errors.desctiption},null,8,["modelValue","placeholder","error"]),e(d,{message:t(a).errors.description},null,8,["message"])]),n("div",H,[e(m,{for:"status",value:l.lang().label.status},null,8,["value"]),B(n("select",{"onUpdate:modelValue":s[6]||(s[6]=r=>o.status=r),id:"status",name:"status",class:"block w-full"},Q,512),[[E,o.status]]),e(d,{message:t(a).errors.status},null,8,["message"])])],32)]),footer:i(()=>[e(z,{onClick:f},{default:i(()=>[v(u(l.lang().button.cancel),1)]),_:1}),e(T,{class:M(["ml-3",{"opacity-25":t(a).processing}]),disabled:t(a).processing,onClick:h},{default:i(()=>[v(u(l.lang().button.save)+" "+u(t(a).processing?"...":""),1)]),_:1},8,["class","disabled"])]),_:1},8,["show"])]))}};export{te as default};
