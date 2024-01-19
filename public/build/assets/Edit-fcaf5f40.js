import{E as f,r as F,h as M,i as w,T as V,o as g,d as _,b as l,w as i,u as o,m as k,e as v,t as u,a as n,j as $,F as N,f as T,C,n as I}from"./app-94de279c.js";import{_ as z}from"./DialogModal-c80aaba5.js";import{_ as d}from"./InputError-a749efb7.js";import{_ as m}from"./InputLabel-7fb7a9c2.js";import{_ as L}from"./ActionButton-9b0479c1.js";import{_ as O}from"./PrimaryButton-e5fd0fc6.js";import{_ as P}from"./SecondaryButton-7a5ed3a0.js";import{_ as y}from"./TextInput-4b961fa3.js";import{_ as q}from"./TextAreaInput-cc116e33.js";import{g as A,t as G}from"./textHelper-8b1dfc94.js";import{r as H}from"./PencilIcon-a8f5f414.js";import"./Modal-38f1bd9c.js";import"./XMarkIcon-2828e103.js";const J={class:"flex flex-col md:flex-row gap-4"},K={class:"w-full"},Q={class:"w-full"},R={class:"space-y-1"},W={class:"flex flex-col md:flex-row gap-4"},X={class:"w-full"},Y=["value"],Z={class:"w-full"},ee=n("option",{value:"1"},"Published",-1),le=n("option",{value:"0"},"Unpublished",-1),se=n("option",{value:null},"Draft",-1),oe=[ee,le,se],ve={__name:"Edit",props:{item:Object},emits:["open"],setup(S,{emit:U}){const x=f("updateItems"),D=f("product_categories"),E=f("title"),j=U,p=F(!1),h=S,a=M(h.item);w(()=>a.name,e=>{a.slug=A(e)});let s=V(a);w(a,e=>{s=V(e)});const b=()=>{var e;s.put(route("product-categories.update",(e=h.item)==null?void 0:e.id),{preserveScroll:!0,onSuccess:t=>{c(),x(t.props.product_categories)},onError:()=>null,onFinish:()=>null})},c=()=>{p.value=!1,s.errors={},s.reset()};return(e,t)=>(g(),_("div",null,[l(L,{onClick:t[0]||(t[0]=k(r=>(p.value=!0,j("open")),["prevent"]))},{default:i(()=>[l(o(H),{class:"w-4 h-auto"})]),_:1}),l(z,{show:p.value,onClose:c,"max-width":"xl"},{title:i(()=>[v(u(e.lang().label.edit)+" "+u(o(E)),1)]),content:i(()=>[n("form",{class:"space-y-2",onSubmit:k(b,["prevent"])},[n("div",J,[n("div",K,[l(m,{for:"name",value:e.lang().label.name},null,8,["value"]),l(y,{id:"name",modelValue:a.name,"onUpdate:modelValue":t[1]||(t[1]=r=>a.name=r),type:"text",class:"block w-full",autocomplete:"name",placeholder:e.lang().placeholder.name,error:o(s).errors.name},null,8,["modelValue","placeholder","error"]),l(d,{message:o(s).errors.name},null,8,["message"])]),n("div",Q,[l(m,{for:"slug",value:e.lang().label.slug},null,8,["value"]),l(y,{id:"slug",modelValue:a.slug,"onUpdate:modelValue":t[2]||(t[2]=r=>a.slug=r),type:"text",class:"block w-full",autocomplete:"slug",placeholder:e.lang().placeholder.slug,error:o(s).errors.slug},null,8,["modelValue","placeholder","error"]),l(d,{message:o(s).errors.slug},null,8,["message"])])]),n("div",R,[l(m,{for:"slug",value:e.lang().label.description},null,8,["value"]),l(q,{id:"slug",modelValue:a.description,"onUpdate:modelValue":t[3]||(t[3]=r=>a.description=r),type:"text",class:"block w-full",autocomplete:"description",placeholder:e.lang().placeholder.description,error:o(s).errors.desctiption},null,8,["modelValue","placeholder","error"]),l(d,{message:o(s).errors.description},null,8,["message"])]),n("div",W,[n("div",X,[l(m,{for:"parent_id",value:e.lang().label.parent},null,8,["value"]),$(n("select",{"onUpdate:modelValue":t[4]||(t[4]=r=>a.parent_id=r),id:"parent_id",name:"parent_id",class:"block w-full"},[(g(!0),_(N,null,T(o(D),(r,B)=>(g(),_("option",{key:B,value:r.id},u(o(G)(r.name)),9,Y))),128))],512),[[C,a.parent_id]]),l(d,{message:o(s).errors.parent_id},null,8,["message"])]),n("div",Z,[l(m,{for:"status",value:e.lang().label.status},null,8,["value"]),$(n("select",{"onUpdate:modelValue":t[5]||(t[5]=r=>a.status=r),id:"status",name:"status",class:"block w-full"},oe,512),[[C,a.status]]),l(d,{message:o(s).errors.status},null,8,["message"])])])],32)]),footer:i(()=>[l(P,{onClick:c},{default:i(()=>[v(u(e.lang().button.cancel),1)]),_:1}),l(O,{class:I(["ml-3",{"opacity-25":o(s).processing}]),disabled:o(s).processing,onClick:b},{default:i(()=>[v(u(e.lang().button.save)+" "+u(o(s).processing?"...":""),1)]),_:1},8,["class","disabled"])]),_:1},8,["show"])]))}};export{ve as default};
