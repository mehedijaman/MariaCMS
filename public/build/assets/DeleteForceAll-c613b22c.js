import{D as b,r as h,T as w,o as C,d as k,b as n,w as s,e as t,m as y,t as e,n as S,u as m}from"./app-2598048d.js";import{_ as $}from"./ConfirmationModal-ff1f0b7d.js";import{_ as u}from"./DangerButton-fc893115.js";import{_ as A}from"./SecondaryButton-a4f6ae6f.js";import"./Modal-aa19319a.js";const F={__name:"DeleteForceAll",props:{title:String},emits:["close"],setup(f,{emit:p}){const _=b("removeAllItems"),g=p,a=h(!1),r=f,l=w({}),v=()=>{l.delete(route("tags.destroy.force.all"),{preserveScroll:!0,onSuccess:()=>{i(),g("close"),_()},onError:()=>null,onFinish:()=>null})},i=()=>{a.value=!1};return(o,d)=>(C(),k("div",null,[n(u,{class:"rounded-none",onClick:d[0]||(d[0]=y(c=>a.value=!0,["prevent"]))},{default:s(()=>[t(" Empty Trash ")]),_:1}),n($,{show:a.value,onClose:i},{title:s(()=>[t(e(o.lang().label.delete_selected)+" "+e(r.title),1)]),content:s(()=>{var c;return[t(e(o.lang().label.delete_confirm)+" "+e((c=r.selectedId)==null?void 0:c.length)+" "+e(r.title)+"? ",1)]}),footer:s(()=>[n(A,{onClick:i},{default:s(()=>[t(e(o.lang().button.cancel),1)]),_:1}),n(u,{class:S(["ml-3",{"opacity-25":m(l).processing}]),disabled:m(l).processing,onClick:v},{default:s(()=>[t(e(o.lang().button.delete)+" "+e(m(l).processing?"...":""),1)]),_:1},8,["class","disabled"])]),_:1},8,["show"])]))}};export{F as default};
