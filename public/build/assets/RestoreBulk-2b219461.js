import{E as h,r as k,T as v,p as w,o as S,d as C,b as r,w as l,u as a,m as B,e as i,t as e,n as E}from"./app-c4f5b0ab.js";import{_ as $}from"./ConfirmationModal-9be1e3e5.js";import{_ as u}from"./PrimaryButton-458f03b6.js";import{_ as I}from"./SecondaryButton-73139509.js";import{r as j}from"./ArrowUturnLeftIcon-4a0e38e2.js";import"./Modal-cad72a07.js";const D={__name:"RestoreBulk",props:{title:String,itemsSelected:Object},emits:["close"],setup(f,{emit:p}){const _=h("removeBulkItems"),g=p,n=k(!1),t=f,s=v({id:[]});w(()=>{n&&(t.itemsSelected&&t.itemsSelected.length>0?s.id=t.itemsSelected.map(o=>o.id):s.id=[])});const b=()=>{s.post(route("testimonials.restore.bulk"),{preserveScroll:!0,onSuccess:()=>{c(),g("close"),_(s.id)},onError:()=>null,onFinish:()=>null})},c=()=>{n.value=!1};return(o,d)=>(S(),C("div",null,[r(u,{class:"rounded-none",onClick:d[0]||(d[0]=B(m=>n.value=!0,["prevent"]))},{default:l(()=>[r(a(j),{class:"w-4 h-auto"})]),_:1}),r($,{show:n.value,onClose:c},{title:l(()=>[i(e(o.lang().label.restore_selected)+" "+e(t.title),1)]),content:l(()=>{var m;return[i(e(o.lang().label.restore_confirm)+" "+e((m=t.selectedId)==null?void 0:m.length)+" "+e(t.title)+"? ",1)]}),footer:l(()=>[r(I,{onClick:c},{default:l(()=>[i(e(o.lang().button.cancel),1)]),_:1}),r(u,{class:E(["ml-3",{"opacity-25":a(s).processing}]),disabled:a(s).processing,onClick:b},{default:l(()=>[i(e(o.lang().button.restore)+" "+e(a(s).processing?"...":""),1)]),_:1},8,["class","disabled"])]),_:1},8,["show"])]))}};export{D as default};
