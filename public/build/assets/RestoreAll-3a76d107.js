import{D as u,r as w,T as C,o as k,d as A,b as r,w as s,e as o,m as S,t as e,n as $,u as m}from"./app-2598048d.js";import{_ as I}from"./ConfirmationModal-ff1f0b7d.js";import{_ as f}from"./PrimaryButton-7f18ea50.js";import{_ as y}from"./SecondaryButton-a4f6ae6f.js";import"./Modal-aa19319a.js";const R={__name:"RestoreAll",props:{title:String},emits:["close"],setup(p,{emit:_}){const g=u("removeAllItems"),v=u("slider"),b=_,n=w(!1),a=p,t=C({}),h=()=>{t.post(route("slider.items.restore.all",{slider:v.id}),{preserveScroll:!0,onSuccess:()=>{i(),b("close"),g()},onError:()=>null,onFinish:()=>null})},i=()=>{n.value=!1};return(l,d)=>(k(),A("div",null,[r(f,{class:"rounded-none",onClick:d[0]||(d[0]=S(c=>n.value=!0,["prevent"]))},{default:s(()=>[o(" Restore All ")]),_:1}),r(I,{show:n.value,onClose:i},{title:s(()=>[o(e(l.lang().label.restore_selected)+" "+e(a.title),1)]),content:s(()=>{var c;return[o(e(l.lang().label.restore_confirm)+" "+e((c=a.selectedId)==null?void 0:c.length)+" "+e(a.title)+"? ",1)]}),footer:s(()=>[r(y,{onClick:i},{default:s(()=>[o(e(l.lang().button.cancel),1)]),_:1}),r(f,{class:$(["ml-3",{"opacity-25":m(t).processing}]),disabled:m(t).processing,onClick:h},{default:s(()=>[o(e(l.lang().button.restore)+" "+e(m(t).processing?"...":""),1)]),_:1},8,["class","disabled"])]),_:1},8,["show"])]))}};export{R as default};
