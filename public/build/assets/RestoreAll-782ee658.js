import{E as d,r as w,T as y,o as C,d as k,b as r,w as s,e as l,m as A,t as e,n as S,u as m}from"./app-c4f5b0ab.js";import{_ as $}from"./ConfirmationModal-9be1e3e5.js";import{_ as f}from"./PrimaryButton-458f03b6.js";import{_ as E}from"./SecondaryButton-73139509.js";import"./Modal-cad72a07.js";const T={__name:"RestoreAll",props:{title:String},emits:["close"],setup(p,{emit:_}){const g=d("removeAllItems"),v=d("gallery"),b=_,n=w(!1),a=p,o=y({}),h=()=>{o.post(route("gallery.items.restore.all",{gallery:v.id}),{preserveScroll:!0,onSuccess:()=>{i(),b("close"),g()},onError:()=>null,onFinish:()=>null})},i=()=>{n.value=!1};return(t,u)=>(C(),k("div",null,[r(f,{class:"rounded-none",onClick:u[0]||(u[0]=A(c=>n.value=!0,["prevent"]))},{default:s(()=>[l(" Restore All ")]),_:1}),r($,{show:n.value,onClose:i},{title:s(()=>[l(e(t.lang().label.restore_selected)+" "+e(a.title),1)]),content:s(()=>{var c;return[l(e(t.lang().label.restore_confirm)+" "+e((c=a.selectedId)==null?void 0:c.length)+" "+e(a.title)+"? ",1)]}),footer:s(()=>[r(E,{onClick:i},{default:s(()=>[l(e(t.lang().button.cancel),1)]),_:1}),r(f,{class:S(["ml-3",{"opacity-25":m(o).processing}]),disabled:m(o).processing,onClick:h},{default:s(()=>[l(e(t.lang().button.restore)+" "+e(m(o).processing?"...":""),1)]),_:1},8,["class","disabled"])]),_:1},8,["show"])]))}};export{T as default};
