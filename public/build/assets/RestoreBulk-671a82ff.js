import{E as u,r as v,T as w,p as S,o as y,d as C,b as r,w as o,u as n,m as B,e as i,t as e,n as E}from"./app-40e302ae.js";import{_ as $}from"./ConfirmationModal-ce1d7017.js";import{_ as f}from"./PrimaryButton-19d7538d.js";import{_ as I}from"./SecondaryButton-a4fc0b9c.js";import{r as j}from"./ArrowUturnLeftIcon-8084d27d.js";import"./Modal-9818fca1.js";const F={__name:"RestoreBulk",props:{title:String,itemsSelected:Object},emits:["close"],setup(p,{emit:g}){const _=u("removeBulkItems"),b=u("gallery"),h=g,a=v(!1),t=p,s=w({id:[]});S(()=>{a&&(t.itemsSelected&&t.itemsSelected.length>0?s.id=t.itemsSelected.map(l=>l.id):s.id=[])});const k=()=>{s.post(route("gallery.items.restore.bulk",{gallery:b.id}),{preserveScroll:!0,onSuccess:()=>{c(),h("close"),_(s.id)},onError:()=>null,onFinish:()=>null})},c=()=>{a.value=!1};return(l,d)=>(y(),C("div",null,[r(f,{class:"rounded-none",onClick:d[0]||(d[0]=B(m=>a.value=!0,["prevent"]))},{default:o(()=>[r(n(j),{class:"w-4 h-auto"})]),_:1}),r($,{show:a.value,onClose:c},{title:o(()=>[i(e(l.lang().label.restore_selected)+" "+e(t.title),1)]),content:o(()=>{var m;return[i(e(l.lang().label.restore_confirm)+" "+e((m=t.selectedId)==null?void 0:m.length)+" "+e(t.title)+"? ",1)]}),footer:o(()=>[r(I,{onClick:c},{default:o(()=>[i(e(l.lang().button.cancel),1)]),_:1}),r(f,{class:E(["ml-3",{"opacity-25":n(s).processing}]),disabled:n(s).processing,onClick:k},{default:o(()=>[i(e(l.lang().button.restore)+" "+e(n(s).processing?"...":""),1)]),_:1},8,["class","disabled"])]),_:1},8,["show"])]))}};export{F as default};
