import{E as h,r as w,T as S,p as k,o as v,d as C,b as a,w as l,u as r,m as E,e as i,t,n as $}from"./app-029d3c12.js";import{_ as y}from"./ConfirmationModal-3e9220f0.js";import{_ as u}from"./DangerButton-d1685ae6.js";import{_ as B}from"./SecondaryButton-c3ca0618.js";import{r as I}from"./TrashIcon-51127647.js";import"./Modal-0faaa9fe.js";const z={__name:"DeleteBulk",props:{title:String,itemsSelected:Object},emits:["close"],setup(p,{emit:f}){const _=h("updateItems"),g=f,n=w(!1),s=p,o=S({id:[]});k(()=>{n&&(s.itemsSelected&&s.itemsSelected.length>0?o.id=s.itemsSelected.map(e=>e.id):o.id=[])});const b=()=>{o.delete(route("product-categories.destroy.bulk"),{preserveScroll:!0,onSuccess:e=>{c(),g("close"),_(e.props.product_categories)},onError:()=>null,onFinish:()=>null})},c=()=>{n.value=!1};return(e,m)=>(v(),C("div",null,[a(u,{class:"rounded-none",onClick:m[0]||(m[0]=E(d=>n.value=!0,["prevent"]))},{default:l(()=>[a(r(I),{class:"w-4 h-auto"})]),_:1}),a(y,{show:n.value,onClose:c},{title:l(()=>[i(t(e.lang().label.delete_selected)+" "+t(s.title),1)]),content:l(()=>{var d;return[i(t(e.lang().label.delete_confirm)+" "+t((d=s.selectedId)==null?void 0:d.length)+" "+t(s.title)+"? ",1)]}),footer:l(()=>[a(B,{onClick:c},{default:l(()=>[i(t(e.lang().button.cancel),1)]),_:1}),a(u,{class:$(["ml-3",{"opacity-25":r(o).processing}]),disabled:r(o).processing,onClick:b},{default:l(()=>[i(t(e.lang().button.delete)+" "+t(r(o).processing?"...":""),1)]),_:1},8,["class","disabled"])]),_:1},8,["show"])]))}};export{z as default};
