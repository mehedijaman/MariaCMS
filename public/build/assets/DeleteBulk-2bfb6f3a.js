import{r as h,T as w,p as k,l as C,o as u,d as B,j as D,c as S,w as t,b as r,u as n,m as $,e as i,t as e,n as y}from"./app-029d3c12.js";import{_ as E}from"./ConfirmationModal-3e9220f0.js";import{_ as f}from"./DangerButton-d1685ae6.js";import{_ as I}from"./SecondaryButton-c3ca0618.js";import{r as j}from"./TrashIcon-51127647.js";import"./Modal-0faaa9fe.js";const O={__name:"DeleteBulk",props:{title:String,selectedId:Object},emits:["close"],setup(p,{emit:_}){const b=_,o=h(!1),a=p,s=w({id:[]});k(()=>{o&&(s.id=a.selectedId)});const g=()=>{s.post(route("role.destroy-bulk"),{preserveScroll:!0,onSuccess:()=>{c(),b("close")},onError:()=>null,onFinish:()=>null})},c=()=>{o.value=!1};return(l,m)=>{const v=C("tooltip");return u(),B("div",null,[D((u(),S(f,{class:"rounded-none",onClick:m[0]||(m[0]=$(d=>o.value=!0,["prevent"]))},{default:t(()=>[r(n(j),{class:"w-4 h-auto"})]),_:1})),[[v,l.lang().label.delete_selected]]),r(E,{show:o.value,onClose:c},{title:t(()=>[i(e(l.lang().label.delete_selected)+" "+e(a.title),1)]),content:t(()=>{var d;return[i(e(l.lang().label.delete_confirm)+" "+e((d=a.selectedId)==null?void 0:d.length)+" "+e(a.title)+"? ",1)]}),footer:t(()=>[r(I,{onClick:c},{default:t(()=>[i(e(l.lang().button.cancel),1)]),_:1}),r(f,{class:y(["ml-3",{"opacity-25":n(s).processing}]),disabled:n(s).processing,onClick:g},{default:t(()=>[i(e(l.lang().button.delete)+" "+e(n(s).processing?"...":""),1)]),_:1},8,["class","disabled"])]),_:1},8,["show"])])}}};export{O as default};
