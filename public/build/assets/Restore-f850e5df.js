import{D as b,r as g,T as w,o as h,d as C,b as r,w as o,u as i,m as k,e as l,t as s,n as $}from"./app-2598048d.js";import{_ as S}from"./ConfirmationModal-ff1f0b7d.js";import{_ as j}from"./ActionButton-c7fad4fa.js";import{_ as y}from"./PrimaryButton-7f18ea50.js";import{_ as B}from"./SecondaryButton-a4f6ae6f.js";import{r as D}from"./ArrowUturnLeftIcon-406e2d21.js";import"./Modal-aa19319a.js";const F={__name:"Restore",props:{title:String,item:Object},emits:["open"],setup(u,{emit:f}){const d=b("removeItem"),_=f,m=g(!1),a=u,n=w({}),v=()=>{var e;n.post(route("sliders.restore",(e=a.item)==null?void 0:e.id),{preserveScroll:!0,onSuccess:()=>{var t;c(),d((t=a.item)==null?void 0:t.id)},onError:()=>null,onFinish:()=>null})},c=()=>{m.value=!1};return(e,t)=>(h(),C("div",null,[r(j,{variant:"success",onClick:t[0]||(t[0]=k(p=>(m.value=!0,_("open")),["prevent"]))},{default:o(()=>[r(i(D),{class:"w-4 h-auto"})]),_:1}),r(S,{show:m.value,onClose:c},{title:o(()=>[l(s(e.lang().label.restore)+" "+s(a.title),1)]),content:o(()=>{var p;return[l(s(e.lang().label.restore_confirm)+" "+s((p=a.item)==null?void 0:p.name)+"? ",1)]}),footer:o(()=>[r(B,{onClick:c},{default:o(()=>[l(s(e.lang().button.cancel),1)]),_:1}),r(y,{class:$(["ml-3",{"opacity-25":i(n).processing}]),disabled:i(n).processing,onClick:v},{default:o(()=>[l(s(e.lang().button.restore)+" "+s(i(n).processing?"...":""),1)]),_:1},8,["class","disabled"])]),_:1},8,["show"])]))}};export{F as default};
