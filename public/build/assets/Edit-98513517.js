import{E as _,r as S,h as x,i as v,T as g,o as E,d as V,b as t,w as r,u as n,m as h,e as u,t as i,a as o,j,C as y,n as B}from"./app-c4f5b0ab.js";import{_ as D}from"./DialogModal-ead8dcea.js";import{_ as M}from"./InputError-85854109.js";import{_ as N}from"./InputLabel-d739c1d0.js";import{_ as I}from"./ActionButton-841fd9c8.js";import{_ as P}from"./PrimaryButton-458f03b6.js";import{_ as T}from"./SecondaryButton-73139509.js";import{g as z}from"./textHelper-8b1dfc94.js";import{r as F}from"./PencilIcon-3be4436b.js";import"./Modal-cad72a07.js";import"./XMarkIcon-c9c2e3cc.js";const O={class:"flex flex-col md:flex-row gap-4"},U={class:"w-full"},q=o("option",{value:null},"Pending",-1),A=o("option",{value:"0"},"Processing",-1),G=o("option",{value:"1"},"Completed",-1),H=[q,A,G],ts={__name:"Edit",props:{item:Object},emits:["open"],setup(w,{emit:b}){const C=_("updateItems"),$=_("title"),k=b,m=S(!1),p=w,a=x(p.item);v(()=>a.name,s=>{a.slug=z(s)});let e=g(a);v(a,s=>{e=g(s)});const d=()=>{var s;e.put(route("orders.update",(s=p.item)==null?void 0:s.id),{preserveScroll:!0,onSuccess:l=>{c(),C(l.props.orders)},onError:()=>null,onFinish:()=>null})},c=()=>{m.value=!1,e.errors={},e.reset()};return(s,l)=>(E(),V("div",null,[t(I,{onClick:l[0]||(l[0]=h(f=>(m.value=!0,k("open")),["prevent"]))},{default:r(()=>[t(n(F),{class:"w-4 h-auto"})]),_:1}),t(D,{show:m.value,onClose:c,"max-width":"xl"},{title:r(()=>[u(i(s.lang().label.edit)+" "+i(n($)),1)]),content:r(()=>[o("form",{class:"space-y-2",onSubmit:h(d,["prevent"])},[o("div",O,[o("div",U,[t(N,{for:"status",value:s.lang().label.status},null,8,["value"]),j(o("select",{"onUpdate:modelValue":l[1]||(l[1]=f=>a.status=f),id:"status",name:"status",class:"block w-full"},H,512),[[y,a.status]]),t(M,{message:n(e).errors.status},null,8,["message"])])])],32)]),footer:r(()=>[t(T,{onClick:c},{default:r(()=>[u(i(s.lang().button.cancel),1)]),_:1}),t(P,{class:B(["ml-3",{"opacity-25":n(e).processing}]),disabled:n(e).processing,onClick:d},{default:r(()=>[u(i(s.lang().button.save)+" "+i(n(e).processing?"...":""),1)]),_:1},8,["class","disabled"])]),_:1},8,["show"])]))}};export{ts as default};
