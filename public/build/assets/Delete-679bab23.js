import{D as b,r as v,T as w,o as h,d as C,b as o,w as s,u as r,m as k,e as l,t,n as $}from"./app-2598048d.js";import{_ as S}from"./ConfirmationModal-ff1f0b7d.js";import{_ as y}from"./ActionButton-c7fad4fa.js";import{_ as D}from"./DangerButton-fc893115.js";import{_ as j}from"./SecondaryButton-a4f6ae6f.js";import{r as q}from"./TrashIcon-3ac790d6.js";import"./Modal-aa19319a.js";const z={__name:"Delete",props:{title:String,item:Object},emits:["open"],setup(f,{emit:u}){const d=b("updateItems"),_=u,i=v(!1),m=f,a=w({}),g=()=>{var e;a.delete(route("faqs.destroy",(e=m.item)==null?void 0:e.id),{preserveScroll:!0,onSuccess:n=>{c(),d(n.props.faqs)},onError:()=>null,onFinish:()=>null})},c=()=>{i.value=!1};return(e,n)=>(h(),C("div",null,[o(y,{variant:"danger",onClick:n[0]||(n[0]=k(p=>(i.value=!0,_("open")),["prevent"]))},{default:s(()=>[o(r(q),{class:"w-4 h-auto"})]),_:1}),o(S,{show:i.value,onClose:c},{title:s(()=>[l(t(e.lang().label.delete)+" "+t(m.title),1)]),content:s(()=>{var p;return[l(t(e.lang().label.delete_confirm)+" "+t((p=m.item)==null?void 0:p.name)+"? ",1)]}),footer:s(()=>[o(j,{onClick:c},{default:s(()=>[l(t(e.lang().button.cancel),1)]),_:1}),o(D,{class:$(["ml-3",{"opacity-25":r(a).processing}]),disabled:r(a).processing,onClick:g},{default:s(()=>[l(t(e.lang().button.delete)+" "+t(r(a).processing?"...":""),1)]),_:1},8,["class","disabled"])]),_:1},8,["show"])]))}};export{z as default};
