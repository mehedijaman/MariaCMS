import{E as h,r as w,T as S,p as k,o as v,d as C,b as a,w as o,u as i,m as E,e as r,t,n as $}from"./app-c4f5b0ab.js";import{_ as y}from"./ConfirmationModal-9be1e3e5.js";import{_ as u}from"./DangerButton-84c9d29b.js";import{_ as B}from"./SecondaryButton-73139509.js";import{r as I}from"./TrashIcon-1a6eb028.js";import"./Modal-cad72a07.js";const z={__name:"DeleteBulk",props:{title:String,itemsSelected:Object},emits:["close"],setup(p,{emit:f}){const _=h("updateItems"),g=f,n=w(!1),s=p,l=S({id:[]});k(()=>{n&&(s.itemsSelected&&s.itemsSelected.length>0?l.id=s.itemsSelected.map(e=>e.id):l.id=[])});const b=()=>{l.delete(route("testimonials.destroy.bulk"),{preserveScroll:!0,onSuccess:e=>{c(),g("close"),_(e.props.testimonials)},onError:()=>null,onFinish:()=>null})},c=()=>{n.value=!1};return(e,m)=>(v(),C("div",null,[a(u,{class:"rounded-none",onClick:m[0]||(m[0]=E(d=>n.value=!0,["prevent"]))},{default:o(()=>[a(i(I),{class:"w-4 h-auto"})]),_:1}),a(y,{show:n.value,onClose:c},{title:o(()=>[r(t(e.lang().label.delete_selected)+" "+t(s.title),1)]),content:o(()=>{var d;return[r(t(e.lang().label.delete_confirm)+" "+t((d=s.selectedId)==null?void 0:d.length)+" "+t(s.title)+"? ",1)]}),footer:o(()=>[a(B,{onClick:c},{default:o(()=>[r(t(e.lang().button.cancel),1)]),_:1}),a(u,{class:$(["ml-3",{"opacity-25":i(l).processing}]),disabled:i(l).processing,onClick:b},{default:o(()=>[r(t(e.lang().button.delete)+" "+t(i(l).processing?"...":""),1)]),_:1},8,["class","disabled"])]),_:1},8,["show"])]))}};export{z as default};
