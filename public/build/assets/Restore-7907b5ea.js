import{E as g,r as v,T as w,o as h,d as C,b as o,w as t,u as n,m as k,e as l,t as s,n as $}from"./app-029d3c12.js";import{_ as S}from"./ConfirmationModal-3e9220f0.js";import{_ as E}from"./ActionButton-0db8adf7.js";import{_ as j}from"./PrimaryButton-4a147dbe.js";import{_ as y}from"./SecondaryButton-c3ca0618.js";import{r as B}from"./ArrowUturnLeftIcon-612d48c4.js";import"./Modal-0faaa9fe.js";const F={__name:"Restore",props:{title:String,item:Object},emits:["open"],setup(u,{emit:f}){const d=g("updateItems"),_=f,i=v(!1),c=u,r=w({}),b=()=>{var e;r.post(route("products.restore",(e=c.item)==null?void 0:e.id),{preserveScroll:!0,onSuccess:a=>{m(),d(a.props.products)},onError:()=>null,onFinish:()=>null})},m=()=>{i.value=!1};return(e,a)=>(h(),C("div",null,[o(E,{variant:"success",onClick:a[0]||(a[0]=k(p=>(i.value=!0,_("open")),["prevent"]))},{default:t(()=>[o(n(B),{class:"w-4 h-auto"})]),_:1}),o(S,{show:i.value,onClose:m},{title:t(()=>[l(s(e.lang().label.restore)+" "+s(c.title),1)]),content:t(()=>{var p;return[l(s(e.lang().label.restore_confirm)+" "+s((p=c.item)==null?void 0:p.name)+"? ",1)]}),footer:t(()=>[o(y,{onClick:m},{default:t(()=>[l(s(e.lang().button.cancel),1)]),_:1}),o(j,{class:$(["ml-3",{"opacity-25":n(r).processing}]),disabled:n(r).processing,onClick:b},{default:t(()=>[l(s(e.lang().button.restore)+" "+s(n(r).processing?"...":""),1)]),_:1},8,["class","disabled"])]),_:1},8,["show"])]))}};export{F as default};
