import{D as h,r as k,T as v,p as S,o as w,d as y,b as a,w as o,u as i,m as C,e as r,t,n as B}from"./app-0add7d3b.js";import{_ as $}from"./ConfirmationModal-58ca8c19.js";import{_ as u}from"./DangerButton-b98c492e.js";import{_ as D}from"./SecondaryButton-d46d9a20.js";import{r as E}from"./TrashIcon-67035a6d.js";import"./Modal-600a46a3.js";const z={__name:"DeleteBulk",props:{title:String,itemsSelected:Object},emits:["close"],setup(f,{emit:p}){const _=h("removeBulkItems"),g=p,n=k(!1),s=f,l=v({id:[]});S(()=>{n&&(s.itemsSelected&&s.itemsSelected.length>0?l.id=s.itemsSelected.map(e=>e.id):l.id=[])});const b=()=>{var e;l.delete(route("gallery.items.destroy.bulk",{gallery:(e=s.itemsSelected[0])==null?void 0:e.gallery_id}),{preserveScroll:!0,onSuccess:()=>{c(),g("close"),_(l.id)},onError:()=>null,onFinish:()=>null})},c=()=>{n.value=!1};return(e,d)=>(w(),y("div",null,[a(u,{class:"rounded-none",onClick:d[0]||(d[0]=C(m=>n.value=!0,["prevent"]))},{default:o(()=>[a(i(E),{class:"w-4 h-auto"})]),_:1}),a($,{show:n.value,onClose:c},{title:o(()=>[r(t(e.lang().label.delete_selected)+" "+t(s.title),1)]),content:o(()=>{var m;return[r(t(e.lang().label.delete_confirm)+" "+t((m=s.selectedId)==null?void 0:m.length)+" "+t(s.title)+"? ",1)]}),footer:o(()=>[a(D,{onClick:c},{default:o(()=>[r(t(e.lang().button.cancel),1)]),_:1}),a(u,{class:B(["ml-3",{"opacity-25":i(l).processing}]),disabled:i(l).processing,onClick:b},{default:o(()=>[r(t(e.lang().button.delete)+" "+t(i(l).processing?"...":""),1)]),_:1},8,["class","disabled"])]),_:1},8,["show"])]))}};export{z as default};
