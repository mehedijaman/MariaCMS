import{D as y,r as k,h as C,i as v,T as h,o as $,d as S,b as s,w as u,u as o,a as r,t as i,m as b,e as g,j as D,G as U,n as j}from"./app-0add7d3b.js";import{_ as B}from"./DialogModal-2828c21a.js";import{_ as d}from"./InputError-120a7b85.js";import{_ as m}from"./InputLabel-2c550e11.js";import{_ as w}from"./PrimaryButton-156a4b37.js";import{_ as M}from"./SecondaryButton-d46d9a20.js";import{_ as f}from"./TextInput-fee49252.js";import{g as N}from"./textHelper-8b1dfc94.js";import{r as E}from"./PlusIcon-1f67ab25.js";import"./Modal-600a46a3.js";import"./XMarkIcon-48a26f73.js";const I={class:"hidden md:block"},T={class:"space-y-1"},z={class:"space-y-1"},F={class:"space-y-1"},G={class:"space-y-1"},P=r("option",{value:"1"},"Published",-1),q=r("option",{value:"0"},"Unpublished",-1),A=r("option",{value:null},"Draft",-1),H=[P,q,A],se={__name:"Create",setup(J){const V=y("updateItems"),p=k(!1),a=C({name:"",parent:null,slug:null,description:null,status:1});v(()=>a.name,e=>{a.slug=N(e)});let l=h(a);v(a,e=>{l=h(e)});const _=()=>{l.post(route("tags.store"),{preserveScroll:!0,onSuccess:e=>{V(e.props.tags),c()},onError:()=>null,onFinish:()=>null})},c=()=>{p.value=!1,l.errors={},l.reset()};return(e,t)=>($(),S("div",null,[s(w,{class:"flex rounded-none items-center justify-start gap-2",onClick:t[0]||(t[0]=b(n=>p.value=!0,["prevent"]))},{default:u(()=>[s(o(E),{class:"w-4 h-auto"}),r("span",I,i(e.lang().label.add),1)]),_:1}),s(B,{show:p.value,onClose:c,"max-width":"2xl"},{title:u(()=>[g(i(e.lang().label.add),1)]),content:u(()=>[r("form",{class:"space-y-2",onSubmit:b(_,["prevent"])},[r("div",T,[s(m,{for:"name",value:e.lang().label.name},null,8,["value"]),s(f,{id:"name",modelValue:a.name,"onUpdate:modelValue":t[1]||(t[1]=n=>a.name=n),type:"text",class:"block w-full",autocomplete:"name",placeholder:e.lang().placeholder.category_name,error:o(l).errors.name},null,8,["modelValue","placeholder","error"]),s(d,{message:o(l).errors.name},null,8,["message"])]),r("div",z,[s(m,{for:"slug",value:e.lang().label.slug},null,8,["value"]),s(f,{id:"slug",modelValue:a.slug,"onUpdate:modelValue":t[2]||(t[2]=n=>a.slug=n),type:"text",class:"block w-full",autocomplete:"slug",placeholder:e.lang().placeholder.slug,error:o(l).errors.slug},null,8,["modelValue","placeholder","error"]),s(d,{message:o(l).errors.slug},null,8,["message"])]),r("div",F,[s(m,{for:"slug",value:e.lang().label.description},null,8,["value"]),s(f,{id:"slug",modelValue:a.description,"onUpdate:modelValue":t[3]||(t[3]=n=>a.description=n),type:"text",class:"block w-full",autocomplete:"description",placeholder:e.lang().placeholder.description,error:o(l).errors.desctiption},null,8,["modelValue","placeholder","error"]),s(d,{message:o(l).errors.description},null,8,["message"])]),r("div",G,[s(m,{for:"status",value:e.lang().label.status},null,8,["value"]),D(r("select",{"onUpdate:modelValue":t[4]||(t[4]=n=>a.status=n),id:"status",name:"status",class:"block w-full"},H,512),[[U,a.status]]),s(d,{message:o(l).errors.status},null,8,["message"])])],32)]),footer:u(()=>[s(M,{onClick:c},{default:u(()=>[g(i(e.lang().button.cancel),1)]),_:1}),s(w,{class:j(["ml-3",{"opacity-25":o(l).processing}]),disabled:o(l).processing,onClick:_},{default:u(()=>[g(i(e.lang().button.save)+" "+i(o(l).processing?"...":""),1)]),_:1},8,["class","disabled"])]),_:1},8,["show"])]))}};export{se as default};
