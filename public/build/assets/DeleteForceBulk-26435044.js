import{E as k,r as v,T as h,p as w,o as S,d as C,b as n,w as o,u as r,m as B,e as i,t,n as E}from"./app-40e302ae.js";import{_ as $}from"./ConfirmationModal-ce1d7017.js";import{_ as u}from"./DangerButton-70b51d3a.js";import{_ as y}from"./SecondaryButton-a4fc0b9c.js";import{r as j}from"./TrashIcon-1421cd56.js";import"./Modal-9818fca1.js";const V={__name:"DeleteForceBulk",props:{title:String,itemsSelected:Object},emits:["open"],setup(f,{emit:p}){const _=k("removeBulkItems"),b=p,a=v(!1),l=f,e=h({id:[]});w(()=>{a&&(l.itemsSelected&&l.itemsSelected.length>0?e.id=l.itemsSelected.map(s=>s.id):e.id=[])});const g=()=>{e.delete(route("sliders.destroy.force.bulk"),{preserveScroll:!0,onSuccess:()=>{c(),_(e.id)},onError:()=>null,onFinish:()=>null})},c=()=>{a.value=!1};return(s,d)=>(S(),C("div",null,[n(u,{class:"rounded-none",onClick:d[0]||(d[0]=B(m=>(a.value=!0,b("open")),["prevent"]))},{default:o(()=>[n(r(j),{class:"w-4 h-auto"})]),_:1}),n($,{show:a.value,onClose:c},{title:o(()=>[i(t(s.lang().label.delete)+" "+t(l.title),1)]),content:o(()=>{var m;return[i(t(s.lang().label.delete_confirm)+" "+t((m=l.item)==null?void 0:m.name)+"? ",1)]}),footer:o(()=>[n(y,{onClick:c},{default:o(()=>[i(t(s.lang().button.cancel),1)]),_:1}),n(u,{class:E(["ml-3",{"opacity-25":r(e).processing}]),disabled:r(e).processing,onClick:g},{default:o(()=>[i(t(s.lang().button.delete)+" "+t(r(e).processing?"...":""),1)]),_:1},8,["class","disabled"])]),_:1},8,["show"])]))}};export{V as default};
