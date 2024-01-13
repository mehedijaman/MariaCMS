import{D as b,r as j,h as B,i as w,T as V,o as g,d as f,b as s,w as u,u as o,a as n,t as i,m as y,e as v,j as k,F,f as M,G as C,n as N}from"./app-2598048d.js";import{_ as T}from"./DialogModal-1533a031.js";import{_ as d}from"./InputError-68ba7ea3.js";import{_ as m}from"./InputLabel-c9a43dc8.js";import{_ as $}from"./PrimaryButton-7f18ea50.js";import{_ as E}from"./SecondaryButton-a4f6ae6f.js";import{_}from"./TextInput-d95d676f.js";import{g as I,t as z}from"./textHelper-8b1dfc94.js";import{r as G}from"./PlusIcon-1d2627bc.js";import"./Modal-aa19319a.js";import"./XMarkIcon-eb784676.js";const L={class:"hidden md:block"},P={class:"space-y-1"},q={class:"space-y-1"},A={class:"space-y-1"},H={class:"space-y-1"},J=["value"],K={class:"space-y-1"},O=n("option",{value:"1"},"Published",-1),Q=n("option",{value:"0"},"Unpublished",-1),R=n("option",{value:null},"Draft",-1),W=[O,Q,R],ue={__name:"Create",setup(X){const S=b("updateItems"),U=b("categories"),p=j(!1),a=B({name:"",parent:null,slug:null,description:null,status:1});w(()=>a.name,e=>{a.slug=I(e)});let l=V(a);w(a,e=>{l=V(e)});const h=()=>{l.post(route("categories.store"),{preserveScroll:!0,onSuccess:e=>{S(e.props.categories),c()},onError:()=>null,onFinish:()=>null})},c=()=>{p.value=!1,l.errors={},l.reset()};return(e,r)=>(g(),f("div",null,[s($,{class:"flex rounded-none items-center justify-start gap-2",onClick:r[0]||(r[0]=y(t=>p.value=!0,["prevent"]))},{default:u(()=>[s(o(G),{class:"w-4 h-auto"}),n("span",L,i(e.lang().label.add),1)]),_:1}),s(T,{show:p.value,onClose:c,"max-width":"2xl"},{title:u(()=>[v(i(e.lang().label.add),1)]),content:u(()=>[n("form",{class:"space-y-2",onSubmit:y(h,["prevent"])},[n("div",P,[s(m,{for:"name",value:e.lang().label.name},null,8,["value"]),s(_,{id:"name",modelValue:a.name,"onUpdate:modelValue":r[1]||(r[1]=t=>a.name=t),type:"text",class:"block w-full",autocomplete:"name",placeholder:e.lang().placeholder.category_name,error:o(l).errors.name},null,8,["modelValue","placeholder","error"]),s(d,{message:o(l).errors.name},null,8,["message"])]),n("div",q,[s(m,{for:"slug",value:e.lang().label.slug},null,8,["value"]),s(_,{id:"slug",modelValue:a.slug,"onUpdate:modelValue":r[2]||(r[2]=t=>a.slug=t),type:"text",class:"block w-full",autocomplete:"slug",placeholder:e.lang().placeholder.slug,error:o(l).errors.slug},null,8,["modelValue","placeholder","error"]),s(d,{message:o(l).errors.slug},null,8,["message"])]),n("div",A,[s(m,{for:"slug",value:e.lang().label.description},null,8,["value"]),s(_,{id:"slug",modelValue:a.description,"onUpdate:modelValue":r[3]||(r[3]=t=>a.description=t),type:"text",class:"block w-full",autocomplete:"description",placeholder:e.lang().placeholder.description,error:o(l).errors.desctiption},null,8,["modelValue","placeholder","error"]),s(d,{message:o(l).errors.description},null,8,["message"])]),n("div",H,[s(m,{for:"parent",value:e.lang().label.parent},null,8,["value"]),k(n("select",{"onUpdate:modelValue":r[4]||(r[4]=t=>a.parent=t),id:"parent",name:"parent",class:"block w-full"},[(g(!0),f(F,null,M(o(U),(t,D)=>(g(),f("option",{key:D,value:t.id},i(o(z)(t.name)),9,J))),128))],512),[[C,a.parent]]),s(d,{message:o(l).errors.parent},null,8,["message"])]),n("div",K,[s(m,{for:"status",value:e.lang().label.status},null,8,["value"]),k(n("select",{"onUpdate:modelValue":r[5]||(r[5]=t=>a.status=t),id:"status",name:"status",class:"block w-full"},W,512),[[C,a.status]]),s(d,{message:o(l).errors.status},null,8,["message"])])],32)]),footer:u(()=>[s(E,{onClick:c},{default:u(()=>[v(i(e.lang().button.cancel),1)]),_:1}),s($,{class:N(["ml-3",{"opacity-25":o(l).processing}]),disabled:o(l).processing,onClick:h},{default:u(()=>[v(i(e.lang().button.save)+" "+i(o(l).processing?"...":""),1)]),_:1},8,["class","disabled"])]),_:1},8,["show"])]))}};export{ue as default};
