import{E as u,r as v,T as w,p as S,o as C,d as B,b as r,w as l,u as n,m as E,e as a,t as e,n as $}from"./app-c4f5b0ab.js";import{_ as I}from"./ConfirmationModal-9be1e3e5.js";import{_ as f}from"./PrimaryButton-458f03b6.js";import{_ as j}from"./SecondaryButton-73139509.js";import{r as y}from"./ArrowUturnLeftIcon-4a0e38e2.js";import"./Modal-cad72a07.js";const F={__name:"RestoreBulk",props:{title:String,itemsSelected:Object},emits:["close"],setup(p,{emit:_}){const g=u("removeBulkItems"),b=u("slider"),h=_,i=v(!1),t=p,s=w({id:[]});S(()=>{i&&(t.itemsSelected&&t.itemsSelected.length>0?s.id=t.itemsSelected.map(o=>o.id):s.id=[])});const k=()=>{s.post(route("slider.items.restore.bulk",{slider:b.id}),{preserveScroll:!0,onSuccess:()=>{c(),h("close"),g(s.id)},onError:()=>null,onFinish:()=>null})},c=()=>{i.value=!1};return(o,d)=>(C(),B("div",null,[r(f,{class:"rounded-none",onClick:d[0]||(d[0]=E(m=>i.value=!0,["prevent"]))},{default:l(()=>[r(n(y),{class:"w-4 h-auto"})]),_:1}),r(I,{show:i.value,onClose:c},{title:l(()=>[a(e(o.lang().label.restore_selected)+" "+e(t.title),1)]),content:l(()=>{var m;return[a(e(o.lang().label.restore_confirm)+" "+e((m=t.selectedId)==null?void 0:m.length)+" "+e(t.title)+"? ",1)]}),footer:l(()=>[r(j,{onClick:c},{default:l(()=>[a(e(o.lang().button.cancel),1)]),_:1}),r(f,{class:$(["ml-3",{"opacity-25":n(s).processing}]),disabled:n(s).processing,onClick:k},{default:l(()=>[a(e(o.lang().button.restore)+" "+e(n(s).processing?"...":""),1)]),_:1},8,["class","disabled"])]),_:1},8,["show"])]))}};export{F as default};
