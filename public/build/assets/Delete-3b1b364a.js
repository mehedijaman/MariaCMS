import{D as v,r as b,T as w,o as h,d as C,b as a,w as o,u as l,m as k,e as i,t,n as $}from"./app-2598048d.js";import{_ as S}from"./ConfirmationModal-ff1f0b7d.js";import{_ as y}from"./ActionButton-c7fad4fa.js";import{_ as D}from"./DangerButton-fc893115.js";import{_ as j}from"./SecondaryButton-a4f6ae6f.js";import{r as B}from"./TrashIcon-3ac790d6.js";import"./Modal-aa19319a.js";const F={__name:"Delete",props:{title:String,item:Object},emits:["open"],setup(d,{emit:f}){const u=v("removeItem"),_=f,m=b(!1),n=d,r=w({}),g=()=>{var e;r.delete(route("pages.destroy",(e=n.item)==null?void 0:e.id),{preserveScroll:!0,onSuccess:()=>{var s;c(),u((s=n.item)==null?void 0:s.id)},onError:()=>null,onFinish:()=>null})},c=()=>{m.value=!1};return(e,s)=>(h(),C("div",null,[a(y,{variant:"danger",onClick:s[0]||(s[0]=k(p=>(m.value=!0,_("open")),["prevent"]))},{default:o(()=>[a(l(B),{class:"w-4 h-auto"})]),_:1}),a(S,{show:m.value,onClose:c},{title:o(()=>[i(t(e.lang().label.delete)+" "+t(n.title),1)]),content:o(()=>{var p;return[i(t(e.lang().label.delete_confirm)+" "+t((p=n.item)==null?void 0:p.name)+"? ",1)]}),footer:o(()=>[a(j,{onClick:c},{default:o(()=>[i(t(e.lang().button.cancel),1)]),_:1}),a(D,{class:$(["ml-3",{"opacity-25":l(r).processing}]),disabled:l(r).processing,onClick:g},{default:o(()=>[i(t(e.lang().button.delete)+" "+t(l(r).processing?"...":""),1)]),_:1},8,["class","disabled"])]),_:1},8,["show"])]))}};export{F as default};
