import{E as f,r as B,h as E,i as b,T as w,o as g,d as _,b as s,w as u,u as a,a as r,t as i,m as V,e as v,j as k,F,f as M,C as y,n as N}from"./app-029d3c12.js";import{_ as T}from"./DialogModal-d0f6ace0.js";import{_ as d}from"./InputError-5ba87def.js";import{_ as m}from"./InputLabel-4b2acd49.js";import{_ as C}from"./PrimaryButton-4a147dbe.js";import{_ as I}from"./SecondaryButton-c3ca0618.js";import{_ as $}from"./TextInput-f658579c.js";import{_ as z}from"./TextAreaInput-3de8a557.js";import{g as L,t as P}from"./textHelper-8b1dfc94.js";import{r as q}from"./PlusIcon-f748347f.js";import"./Modal-0faaa9fe.js";import"./XMarkIcon-e53425f1.js";const x={class:"hidden md:block"},A={class:"flex flex-col md:flex-row gap-4"},G={class:"w-full"},H=["value"],J={class:"w-full"},K=r("option",{value:"1"},"Published",-1),O=r("option",{value:"0"},"Unpublished",-1),Q=r("option",{value:null},"Draft",-1),R=[K,O,Q],W={class:"space-y-1"},X={class:"space-y-1"},Y={class:"space-y-1"},pe={__name:"Create",setup(Z){const S=f("updateItems"),U=f("product_categories"),D=f("title"),p=B(!1),o=E({name:"",parent_id:null,slug:null,description:null,status:1});b(()=>o.name,e=>{o.slug=L(e)});let l=w(o);b(o,e=>{l=w(e)});const h=()=>{l.post(route("product-categories.store"),{preserveScroll:!0,onSuccess:e=>{S(e.props.product_categories),c()},onError:()=>null,onFinish:()=>null})},c=()=>{p.value=!1,l.errors={},l.reset()};return(e,n)=>(g(),_("div",null,[s(C,{class:"flex rounded-none items-center justify-start gap-2",onClick:n[0]||(n[0]=V(t=>p.value=!0,["prevent"]))},{default:u(()=>[s(a(q),{class:"w-4 h-auto"}),r("span",x,i(e.lang().label.add),1)]),_:1}),s(T,{show:p.value,onClose:c,"max-width":"lg"},{title:u(()=>[v(i(e.lang().label.add)+" "+i(a(D)),1)]),content:u(()=>[r("form",{class:"space-y-2",onSubmit:V(h,["prevent"])},[r("div",A,[r("div",G,[s(m,{for:"parent_id",value:e.lang().label.parent},null,8,["value"]),k(r("select",{"onUpdate:modelValue":n[1]||(n[1]=t=>o.parent_id=t),id:"parent_id",name:"parent_id",class:"block w-full"},[(g(!0),_(F,null,M(a(U),(t,j)=>(g(),_("option",{key:j,value:t.id},i(a(P)(t.name)),9,H))),128))],512),[[y,o.parent_id]]),s(d,{message:a(l).errors.parent_id},null,8,["message"])]),r("div",J,[s(m,{for:"status",value:e.lang().label.status},null,8,["value"]),k(r("select",{"onUpdate:modelValue":n[2]||(n[2]=t=>o.status=t),id:"status",name:"status",class:"block w-full"},R,512),[[y,o.status]]),s(d,{message:a(l).errors.status},null,8,["message"])])]),r("div",W,[s(m,{for:"name",value:e.lang().label.name},null,8,["value"]),s($,{id:"name",modelValue:o.name,"onUpdate:modelValue":n[3]||(n[3]=t=>o.name=t),type:"text",class:"block w-full",autocomplete:"name",placeholder:e.lang().placeholder.category_name,error:a(l).errors.name},null,8,["modelValue","placeholder","error"]),s(d,{message:a(l).errors.name},null,8,["message"])]),r("div",X,[s(m,{for:"slug",value:e.lang().label.slug},null,8,["value"]),s($,{id:"slug",modelValue:o.slug,"onUpdate:modelValue":n[4]||(n[4]=t=>o.slug=t),type:"text",class:"block w-full",autocomplete:"slug",placeholder:e.lang().placeholder.slug,error:a(l).errors.slug},null,8,["modelValue","placeholder","error"]),s(d,{message:a(l).errors.slug},null,8,["message"])]),r("div",Y,[s(m,{for:"slug",value:e.lang().label.description},null,8,["value"]),s(z,{id:"slug",modelValue:o.description,"onUpdate:modelValue":n[5]||(n[5]=t=>o.description=t),type:"text",class:"block w-full",autocomplete:"description",placeholder:e.lang().placeholder.description,error:a(l).errors.desctiption},null,8,["modelValue","placeholder","error"]),s(d,{message:a(l).errors.description},null,8,["message"])])],32)]),footer:u(()=>[s(I,{onClick:c},{default:u(()=>[v(i(e.lang().button.cancel),1)]),_:1}),s(C,{class:N(["ml-3",{"opacity-25":a(l).processing}]),disabled:a(l).processing,onClick:h},{default:u(()=>[v(i(e.lang().button.save)+" "+i(a(l).processing?"...":""),1)]),_:1},8,["class","disabled"])]),_:1},8,["show"])]))}};export{pe as default};
