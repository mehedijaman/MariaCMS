import{E as v,r as b,T as w,o as h,d as C,b as r,w as t,u as i,m as k,e as l,t as s,n as $}from"./app-029d3c12.js";import{_ as S}from"./ConfirmationModal-3e9220f0.js";import{_ as E}from"./ActionButton-0db8adf7.js";import{_ as j}from"./PrimaryButton-4a147dbe.js";import{_ as y}from"./SecondaryButton-c3ca0618.js";import{r as B}from"./ArrowUturnLeftIcon-612d48c4.js";import"./Modal-0faaa9fe.js";const F={__name:"Restore",props:{title:String,item:Object},emits:["open"],setup(u,{emit:f}){const d=v("removeItem"),_=f,m=b(!1),a=u,n=w({}),g=()=>{var e;n.post(route("tags.restore",(e=a.item)==null?void 0:e.id),{preserveScroll:!0,onSuccess:()=>{var o;c(),d((o=a.item)==null?void 0:o.id)},onError:()=>null,onFinish:()=>null})},c=()=>{m.value=!1};return(e,o)=>(h(),C("div",null,[r(E,{variant:"success",onClick:o[0]||(o[0]=k(p=>(m.value=!0,_("open")),["prevent"]))},{default:t(()=>[r(i(B),{class:"w-4 h-auto"})]),_:1}),r(S,{show:m.value,onClose:c},{title:t(()=>[l(s(e.lang().label.restore)+" "+s(a.title),1)]),content:t(()=>{var p;return[l(s(e.lang().label.restore_confirm)+" "+s((p=a.item)==null?void 0:p.name)+"? ",1)]}),footer:t(()=>[r(y,{onClick:c},{default:t(()=>[l(s(e.lang().button.cancel),1)]),_:1}),r(j,{class:$(["ml-3",{"opacity-25":i(n).processing}]),disabled:i(n).processing,onClick:g},{default:t(()=>[l(s(e.lang().button.restore)+" "+s(i(n).processing?"...":""),1)]),_:1},8,["class","disabled"])]),_:1},8,["show"])]))}};export{F as default};
