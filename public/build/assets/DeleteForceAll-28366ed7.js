import{E as u,r as h,T as w,o as C,d as k,b as a,w as l,e as s,m as E,t as e,n as S,u as m}from"./app-029d3c12.js";import{_ as $}from"./ConfirmationModal-3e9220f0.js";import{_ as f}from"./DangerButton-d1685ae6.js";import{_ as A}from"./SecondaryButton-c3ca0618.js";import"./Modal-0faaa9fe.js";const M={__name:"DeleteForceAll",props:{title:String},emits:["close"],setup(p,{emit:_}){const g=u("removeAllItems"),v=u("gallery"),b=_,n=h(!1),r=p,t=w({}),y=()=>{t.delete(route("gallery.items.destroy.force.all",{gallery:v.id}),{preserveScroll:!0,onSuccess:()=>{i(),b("close"),g()},onError:()=>null,onFinish:()=>null})},i=()=>{n.value=!1};return(o,d)=>(C(),k("div",null,[a(f,{class:"rounded-none",onClick:d[0]||(d[0]=E(c=>n.value=!0,["prevent"]))},{default:l(()=>[s(" Empty Trash ")]),_:1}),a($,{show:n.value,onClose:i},{title:l(()=>[s(e(o.lang().label.delete_selected)+" "+e(r.title),1)]),content:l(()=>{var c;return[s(e(o.lang().label.delete_confirm)+" "+e((c=r.selectedId)==null?void 0:c.length)+" "+e(r.title)+"? ",1)]}),footer:l(()=>[a(A,{onClick:i},{default:l(()=>[s(e(o.lang().button.cancel),1)]),_:1}),a(f,{class:S(["ml-3",{"opacity-25":m(t).processing}]),disabled:m(t).processing,onClick:y},{default:l(()=>[s(e(o.lang().button.delete)+" "+e(m(t).processing?"...":""),1)]),_:1},8,["class","disabled"])]),_:1},8,["show"])]))}};export{M as default};
