import{D as h,r as k,T as v,p as w,o as S,d as C,b as a,w as o,u as i,m as B,e as r,t as e,n as $}from"./app-0add7d3b.js";import{_ as y}from"./ConfirmationModal-58ca8c19.js";import{_ as u}from"./DangerButton-b98c492e.js";import{_ as D}from"./SecondaryButton-d46d9a20.js";import{r as E}from"./TrashIcon-67035a6d.js";import"./Modal-600a46a3.js";const z={__name:"DeleteBulk",props:{title:String,itemsSelected:Object},emits:["close"],setup(f,{emit:p}){const _=h("removeBulkItems"),g=p,n=k(!1),s=f,t=v({id:[]});w(()=>{n&&(s.itemsSelected&&s.itemsSelected.length>0?t.id=s.itemsSelected.map(l=>l.id):t.id=[])});const b=()=>{t.delete(route("messages.destroy.bulk"),{preserveScroll:!0,onSuccess:()=>{c(),g("close"),_(t.id)},onError:()=>null,onFinish:()=>null})},c=()=>{n.value=!1};return(l,d)=>(S(),C("div",null,[a(u,{class:"rounded-none",onClick:d[0]||(d[0]=B(m=>n.value=!0,["prevent"]))},{default:o(()=>[a(i(E),{class:"w-4 h-auto"})]),_:1}),a(y,{show:n.value,onClose:c},{title:o(()=>[r(e(l.lang().label.delete_selected)+" "+e(s.title),1)]),content:o(()=>{var m;return[r(e(l.lang().label.delete_confirm)+" "+e((m=s.selectedId)==null?void 0:m.length)+" "+e(s.title)+"? ",1)]}),footer:o(()=>[a(D,{onClick:c},{default:o(()=>[r(e(l.lang().button.cancel),1)]),_:1}),a(u,{class:$(["ml-3",{"opacity-25":i(t).processing}]),disabled:i(t).processing,onClick:b},{default:o(()=>[r(e(l.lang().button.delete)+" "+e(i(t).processing?"...":""),1)]),_:1},8,["class","disabled"])]),_:1},8,["show"])]))}};export{z as default};
