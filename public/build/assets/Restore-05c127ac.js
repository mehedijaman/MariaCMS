import{E as b,r as g,T as w,o as h,d as k,b as r,w as t,u as i,m as C,e as l,t as s,n as $}from"./app-d9a7eb7a.js";import{_ as S}from"./ConfirmationModal-d6115ef6.js";import{_ as E}from"./ActionButton-db588b65.js";import{_ as j}from"./PrimaryButton-a904e7d6.js";import{_ as y}from"./SecondaryButton-cb1663f8.js";import{r as B}from"./ArrowUturnLeftIcon-1b2f4aac.js";import"./Modal-2710b0e7.js";const F={__name:"Restore",props:{title:String,item:Object},emits:["open"],setup(u,{emit:f}){const d=b("removeItem"),_=f,m=g(!1),n=u,a=w({}),v=()=>{var e;a.post(route("important-links.restore",(e=n.item)==null?void 0:e.id),{preserveScroll:!0,onSuccess:()=>{var o;c(),d((o=n.item)==null?void 0:o.id)},onError:()=>null,onFinish:()=>null})},c=()=>{m.value=!1};return(e,o)=>(h(),k("div",null,[r(E,{variant:"success",onClick:o[0]||(o[0]=C(p=>(m.value=!0,_("open")),["prevent"]))},{default:t(()=>[r(i(B),{class:"w-4 h-auto"})]),_:1}),r(S,{show:m.value,onClose:c},{title:t(()=>[l(s(e.lang().label.restore)+" "+s(n.title),1)]),content:t(()=>{var p;return[l(s(e.lang().label.restore_confirm)+" "+s((p=n.item)==null?void 0:p.name)+"? ",1)]}),footer:t(()=>[r(y,{onClick:c},{default:t(()=>[l(s(e.lang().button.cancel),1)]),_:1}),r(j,{class:$(["ml-3",{"opacity-25":i(a).processing}]),disabled:i(a).processing,onClick:v},{default:t(()=>[l(s(e.lang().button.restore)+" "+s(i(a).processing?"...":""),1)]),_:1},8,["class","disabled"])]),_:1},8,["show"])]))}};export{F as default};
