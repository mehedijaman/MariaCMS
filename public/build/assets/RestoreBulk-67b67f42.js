import{D as h,r as k,T as v,p as w,o as S,d as C,b as r,w as l,u as n,m as B,e as i,t as e,n as $}from"./app-0add7d3b.js";import{_ as E}from"./ConfirmationModal-58ca8c19.js";import{_ as u}from"./PrimaryButton-156a4b37.js";import{_ as I}from"./SecondaryButton-d46d9a20.js";import{r as j}from"./ArrowUturnLeftIcon-43aa676a.js";import"./Modal-600a46a3.js";const z={__name:"RestoreBulk",props:{title:String,itemsSelected:Object},emits:["close"],setup(f,{emit:p}){const _=h("removeBulkItems"),g=p,a=k(!1),t=f,s=v({id:[]});w(()=>{a&&(t.itemsSelected&&t.itemsSelected.length>0?s.id=t.itemsSelected.map(o=>o.id):s.id=[])});const b=()=>{s.post(route("pages.restore.bulk"),{preserveScroll:!0,onSuccess:()=>{c(),g("close"),_(s.id)},onError:()=>null,onFinish:()=>null})},c=()=>{a.value=!1};return(o,d)=>(S(),C("div",null,[r(u,{class:"rounded-none",onClick:d[0]||(d[0]=B(m=>a.value=!0,["prevent"]))},{default:l(()=>[r(n(j),{class:"w-4 h-auto"})]),_:1}),r(E,{show:a.value,onClose:c},{title:l(()=>[i(e(o.lang().label.restore_selected)+" "+e(t.title),1)]),content:l(()=>{var m;return[i(e(o.lang().label.restore_confirm)+" "+e((m=t.selectedId)==null?void 0:m.length)+" "+e(t.title)+"? ",1)]}),footer:l(()=>[r(I,{onClick:c},{default:l(()=>[i(e(o.lang().button.cancel),1)]),_:1}),r(u,{class:$(["ml-3",{"opacity-25":n(s).processing}]),disabled:n(s).processing,onClick:b},{default:l(()=>[i(e(o.lang().button.restore)+" "+e(n(s).processing?"...":""),1)]),_:1},8,["class","disabled"])]),_:1},8,["show"])]))}};export{z as default};
