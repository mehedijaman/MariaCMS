import{E as v,r as b,T as w,o as h,d as C,b as r,w as o,u as i,m as k,e as l,t as s,n as $}from"./app-40e302ae.js";import{_ as S}from"./ConfirmationModal-ce1d7017.js";import{_ as E}from"./ActionButton-8f7a17f6.js";import{_ as j}from"./PrimaryButton-19d7538d.js";import{_ as y}from"./SecondaryButton-a4fc0b9c.js";import{r as B}from"./ArrowUturnLeftIcon-8084d27d.js";import"./Modal-9818fca1.js";const F={__name:"Restore",props:{title:String,item:Object},emits:["open"],setup(u,{emit:f}){const d=v("removeItem"),_=f,m=b(!1),a=u,n=w({}),g=()=>{var e;n.post(route("categories.restore",(e=a.item)==null?void 0:e.id),{preserveScroll:!0,onSuccess:()=>{var t;c(),d((t=a.item)==null?void 0:t.id)},onError:()=>null,onFinish:()=>null})},c=()=>{m.value=!1};return(e,t)=>(h(),C("div",null,[r(E,{variant:"success",onClick:t[0]||(t[0]=k(p=>(m.value=!0,_("open")),["prevent"]))},{default:o(()=>[r(i(B),{class:"w-4 h-auto"})]),_:1}),r(S,{show:m.value,onClose:c},{title:o(()=>[l(s(e.lang().label.restore)+" "+s(a.title),1)]),content:o(()=>{var p;return[l(s(e.lang().label.restore_confirm)+" "+s((p=a.item)==null?void 0:p.name)+"? ",1)]}),footer:o(()=>[r(y,{onClick:c},{default:o(()=>[l(s(e.lang().button.cancel),1)]),_:1}),r(j,{class:$(["ml-3",{"opacity-25":i(n).processing}]),disabled:i(n).processing,onClick:g},{default:o(()=>[l(s(e.lang().button.restore)+" "+s(i(n).processing?"...":""),1)]),_:1},8,["class","disabled"])]),_:1},8,["show"])]))}};export{F as default};
