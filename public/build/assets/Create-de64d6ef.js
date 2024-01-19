import{E as f,r as j,h as B,i as b,T as w,o as g,d as _,b as l,w as u,u as a,a as t,t as i,m as V,e as v,j as k,F as E,f as F,C as y,n as M}from"./app-94de279c.js";import{_ as N}from"./DialogModal-c80aaba5.js";import{_ as d}from"./InputError-a749efb7.js";import{_ as m}from"./InputLabel-7fb7a9c2.js";import{_ as C}from"./PrimaryButton-e5fd0fc6.js";import{_ as T}from"./SecondaryButton-7a5ed3a0.js";import{_ as $}from"./TextInput-4b961fa3.js";import{_ as I}from"./TextAreaInput-cc116e33.js";import{g as z,t as L}from"./textHelper-8b1dfc94.js";import{r as P}from"./PlusIcon-2fbf8ad0.js";import"./Modal-38f1bd9c.js";import"./XMarkIcon-2828e103.js";const q={class:"hidden md:block"},A={class:"flex flex-col md:flex-row gap-4"},G={class:"w-full"},H={class:"w-full"},J={class:"space-y-1"},K={class:"flex flex-col md:flex-row gap-4"},O={class:"w-full"},Q=["value"],R={class:"w-full"},W=t("option",{value:"1"},"Published",-1),X=t("option",{value:"0"},"Unpublished",-1),Y=t("option",{value:null},"Draft",-1),Z=[W,X,Y],ce={__name:"Create",setup(ee){const S=f("updateItems"),U=f("categories"),x=f("title"),p=j(!1),o=B({name:"",parent_id:null,slug:null,description:null,status:1});b(()=>o.name,e=>{o.slug=z(e)});let s=w(o);b(o,e=>{s=w(e)});const h=()=>{s.post(route("categories.store"),{preserveScroll:!0,onSuccess:e=>{S(e.props.categories),c()},onError:()=>null,onFinish:()=>null})},c=()=>{p.value=!1,s.errors={},s.reset()};return(e,n)=>(g(),_("div",null,[l(C,{class:"flex rounded-none items-center justify-start gap-2",onClick:n[0]||(n[0]=V(r=>p.value=!0,["prevent"]))},{default:u(()=>[l(a(P),{class:"w-4 h-auto"}),t("span",q,i(e.lang().label.add),1)]),_:1}),l(N,{show:p.value,onClose:c,"max-width":"xl"},{title:u(()=>[v(i(e.lang().label.add)+" "+i(a(x)),1)]),content:u(()=>[t("form",{class:"space-y-2",onSubmit:V(h,["prevent"])},[t("div",A,[t("div",G,[l(m,{for:"name",value:e.lang().label.name},null,8,["value"]),l($,{id:"name",modelValue:o.name,"onUpdate:modelValue":n[1]||(n[1]=r=>o.name=r),type:"text",class:"block w-full",autocomplete:"name",placeholder:e.lang().placeholder.category_name,error:a(s).errors.name},null,8,["modelValue","placeholder","error"]),l(d,{message:a(s).errors.name},null,8,["message"])]),t("div",H,[l(m,{for:"slug",value:e.lang().label.slug},null,8,["value"]),l($,{id:"slug",modelValue:o.slug,"onUpdate:modelValue":n[2]||(n[2]=r=>o.slug=r),type:"text",class:"block w-full",autocomplete:"slug",placeholder:e.lang().placeholder.slug,error:a(s).errors.slug},null,8,["modelValue","placeholder","error"]),l(d,{message:a(s).errors.slug},null,8,["message"])])]),t("div",J,[l(m,{for:"slug",value:e.lang().label.description},null,8,["value"]),l(I,{id:"slug",modelValue:o.description,"onUpdate:modelValue":n[3]||(n[3]=r=>o.description=r),type:"text",class:"block w-full",autocomplete:"description",placeholder:e.lang().placeholder.description,error:a(s).errors.desctiption},null,8,["modelValue","placeholder","error"]),l(d,{message:a(s).errors.description},null,8,["message"])]),t("div",K,[t("div",O,[l(m,{for:"parent_id",value:e.lang().label.parent},null,8,["value"]),k(t("select",{"onUpdate:modelValue":n[4]||(n[4]=r=>o.parent_id=r),id:"parent_id",name:"parent_id",class:"block w-full"},[(g(!0),_(E,null,F(a(U),(r,D)=>(g(),_("option",{key:D,value:r.id},i(a(L)(r.name)),9,Q))),128))],512),[[y,o.parent_id]]),l(d,{message:a(s).errors.parent_id},null,8,["message"])]),t("div",R,[l(m,{for:"status",value:e.lang().label.status},null,8,["value"]),k(t("select",{"onUpdate:modelValue":n[5]||(n[5]=r=>o.status=r),id:"status",name:"status",class:"block w-full"},Z,512),[[y,o.status]]),l(d,{message:a(s).errors.status},null,8,["message"])])])],32)]),footer:u(()=>[l(T,{onClick:c},{default:u(()=>[v(i(e.lang().button.cancel),1)]),_:1}),l(C,{class:M(["ml-3",{"opacity-25":a(s).processing}]),disabled:a(s).processing,onClick:h},{default:u(()=>[v(i(e.lang().button.save)+" "+i(a(s).processing?"...":""),1)]),_:1},8,["class","disabled"])]),_:1},8,["show"])]))}};export{ce as default};
