import{r as h,T as w,p as k,l as C,o as u,d as B,j as D,c as S,w as t,b as n,u as r,m as $,e as i,t as e,n as y}from"./app-2598048d.js";import{_ as E}from"./ConfirmationModal-ff1f0b7d.js";import{_ as p}from"./DangerButton-fc893115.js";import{_ as I}from"./SecondaryButton-a4f6ae6f.js";import{r as j}from"./TrashIcon-3ac790d6.js";import"./Modal-aa19319a.js";const O={__name:"DeleteBulk",props:{title:String,selectedId:Object},emits:["close"],setup(f,{emit:_}){const b=_,o=h(!1),a=f,s=w({id:[]});k(()=>{o&&(s.id=a.selectedId)});const g=()=>{s.post(route("permission.destroy-bulk"),{preserveScroll:!0,onSuccess:()=>{c(),b("close")},onError:()=>null,onFinish:()=>null})},c=()=>{o.value=!1};return(l,m)=>{const v=C("tooltip");return u(),B("div",null,[D((u(),S(p,{class:"rounded-none",onClick:m[0]||(m[0]=$(d=>o.value=!0,["prevent"]))},{default:t(()=>[n(r(j),{class:"w-4 h-auto"})]),_:1})),[[v,l.lang().label.delete_selected]]),n(E,{show:o.value,onClose:c},{title:t(()=>[i(e(l.lang().label.delete_selected)+" "+e(a.title),1)]),content:t(()=>{var d;return[i(e(l.lang().label.delete_confirm)+" "+e((d=a.selectedId)==null?void 0:d.length)+" "+e(a.title)+"? ",1)]}),footer:t(()=>[n(I,{onClick:c},{default:t(()=>[i(e(l.lang().button.cancel),1)]),_:1}),n(p,{class:y(["ml-3",{"opacity-25":r(s).processing}]),disabled:r(s).processing,onClick:g},{default:t(()=>[i(e(l.lang().button.delete)+" "+e(r(s).processing?"...":""),1)]),_:1},8,["class","disabled"])]),_:1},8,["show"])])}}};export{O as default};
