import{E as b,r as v,T as w,o as h,d as C,b as o,w as s,u as r,m as k,e as l,t,n as $}from"./app-40e302ae.js";import{_ as S}from"./ConfirmationModal-ce1d7017.js";import{_ as y}from"./ActionButton-8f7a17f6.js";import{_ as E}from"./DangerButton-70b51d3a.js";import{_ as j}from"./SecondaryButton-a4fc0b9c.js";import{r as B}from"./TrashIcon-1421cd56.js";import"./Modal-9818fca1.js";const F={__name:"Delete",props:{title:String,item:Object},emits:["open"],setup(u,{emit:d}){const f=b("updateItems"),_=d,i=v(!1),c=u,a=w({}),g=()=>{var e;a.delete(route("categories.destroy",(e=c.item)==null?void 0:e.id),{preserveScroll:!0,onSuccess:n=>{m(),f(n.props.categories)},onError:()=>null,onFinish:()=>null})},m=()=>{i.value=!1};return(e,n)=>(h(),C("div",null,[o(y,{variant:"danger",onClick:n[0]||(n[0]=k(p=>(i.value=!0,_("open")),["prevent"]))},{default:s(()=>[o(r(B),{class:"w-4 h-auto"})]),_:1}),o(S,{show:i.value,onClose:m},{title:s(()=>[l(t(e.lang().label.delete)+" "+t(c.title),1)]),content:s(()=>{var p;return[l(t(e.lang().label.delete_confirm)+" "+t((p=c.item)==null?void 0:p.name)+"? ",1)]}),footer:s(()=>[o(j,{onClick:m},{default:s(()=>[l(t(e.lang().button.cancel),1)]),_:1}),o(E,{class:$(["ml-3",{"opacity-25":r(a).processing}]),disabled:r(a).processing,onClick:g},{default:s(()=>[l(t(e.lang().button.delete)+" "+t(r(a).processing?"...":""),1)]),_:1},8,["class","disabled"])]),_:1},8,["show"])]))}};export{F as default};
