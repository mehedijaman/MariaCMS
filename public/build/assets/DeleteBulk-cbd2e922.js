import{D as h,r as k,T as v,p as w,o as S,d as C,b as n,w as o,u as i,m as B,e as r,t as e,n as $}from"./app-2598048d.js";import{_ as y}from"./ConfirmationModal-ff1f0b7d.js";import{_ as u}from"./DangerButton-fc893115.js";import{_ as D}from"./SecondaryButton-a4f6ae6f.js";import{r as E}from"./TrashIcon-3ac790d6.js";import"./Modal-aa19319a.js";const z={__name:"DeleteBulk",props:{title:String,itemsSelected:Object},emits:["close"],setup(f,{emit:p}){const _=h("removeBulkItems"),g=p,a=k(!1),s=f,t=v({id:[]});w(()=>{a&&(s.itemsSelected&&s.itemsSelected.length>0?t.id=s.itemsSelected.map(l=>l.id):t.id=[])});const b=()=>{t.delete(route("menus.items.destroy.force.bulk"),{preserveScroll:!0,onSuccess:()=>{c(),g("close"),_(t.id)},onError:()=>null,onFinish:()=>null})},c=()=>{a.value=!1};return(l,d)=>(S(),C("div",null,[n(u,{class:"rounded-none",onClick:d[0]||(d[0]=B(m=>a.value=!0,["prevent"]))},{default:o(()=>[n(i(E),{class:"w-4 h-auto"})]),_:1}),n(y,{show:a.value,onClose:c},{title:o(()=>[r(e(l.lang().label.delete_selected)+" "+e(s.title),1)]),content:o(()=>{var m;return[r(e(l.lang().label.delete_confirm)+" "+e((m=s.selectedId)==null?void 0:m.length)+" "+e(s.title)+"? ",1)]}),footer:o(()=>[n(D,{onClick:c},{default:o(()=>[r(e(l.lang().button.cancel),1)]),_:1}),n(u,{class:$(["ml-3",{"opacity-25":i(t).processing}]),disabled:i(t).processing,onClick:b},{default:o(()=>[r(e(l.lang().button.delete)+" "+e(i(t).processing?"...":""),1)]),_:1},8,["class","disabled"])]),_:1},8,["show"])]))}};export{z as default};
