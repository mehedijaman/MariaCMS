import{D as b,r as h,T as w,o as C,d as k,b as r,w as s,e as o,m as A,t as e,n as S,u as m}from"./app-0add7d3b.js";import{_ as $}from"./ConfirmationModal-58ca8c19.js";import{_ as f}from"./PrimaryButton-156a4b37.js";import{_ as I}from"./SecondaryButton-d46d9a20.js";import"./Modal-600a46a3.js";const N={__name:"RestoreAll",props:{title:String},emits:["close"],setup(p,{emit:d}){const _=b("removeAllItems"),g=d,n=h(!1),a=p,t=w({}),v=()=>{t.post(route("categories.restore.all"),{preserveScroll:!0,onSuccess:()=>{i(),g("close"),_()},onError:()=>null,onFinish:()=>null})},i=()=>{n.value=!1};return(l,u)=>(C(),k("div",null,[r(f,{class:"rounded-none",onClick:u[0]||(u[0]=A(c=>n.value=!0,["prevent"]))},{default:s(()=>[o(" Restore All ")]),_:1}),r($,{show:n.value,onClose:i},{title:s(()=>[o(e(l.lang().label.restore_selected)+" "+e(a.title),1)]),content:s(()=>{var c;return[o(e(l.lang().label.restore_confirm)+" "+e((c=a.selectedId)==null?void 0:c.length)+" "+e(a.title)+"? ",1)]}),footer:s(()=>[r(I,{onClick:i},{default:s(()=>[o(e(l.lang().button.cancel),1)]),_:1}),r(f,{class:S(["ml-3",{"opacity-25":m(t).processing}]),disabled:m(t).processing,onClick:v},{default:s(()=>[o(e(l.lang().button.restore)+" "+e(m(t).processing?"...":""),1)]),_:1},8,["class","disabled"])]),_:1},8,["show"])]))}};export{N as default};
