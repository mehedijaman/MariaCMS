import{D as v,r as b,T as w,o as h,d as C,b as a,w as s,u as l,m as k,e as i,t,n as $}from"./app-0add7d3b.js";import{_ as S}from"./ConfirmationModal-58ca8c19.js";import{_ as y}from"./ActionButton-21b09c7e.js";import{_ as D}from"./DangerButton-b98c492e.js";import{_ as j}from"./SecondaryButton-d46d9a20.js";import{r as B}from"./TrashIcon-67035a6d.js";import"./Modal-600a46a3.js";const F={__name:"Delete",props:{title:String,item:Object},emits:["open"],setup(f,{emit:p}){const u=v("removeItem"),_=p,m=b(!1),n=f,r=w({}),g=()=>{var e;r.delete(route("messages.destroy",(e=n.item)==null?void 0:e.id),{preserveScroll:!0,onSuccess:()=>{var o;c(),u((o=n.item)==null?void 0:o.id)},onError:()=>null,onFinish:()=>null})},c=()=>{m.value=!1};return(e,o)=>(h(),C("div",null,[a(y,{variant:"danger",onClick:o[0]||(o[0]=k(d=>(m.value=!0,_("open")),["prevent"]))},{default:s(()=>[a(l(B),{class:"w-4 h-auto"})]),_:1}),a(S,{show:m.value,onClose:c},{title:s(()=>[i(t(e.lang().label.delete)+" "+t(n.title),1)]),content:s(()=>{var d;return[i(t(e.lang().label.delete_confirm)+" "+t((d=n.item)==null?void 0:d.name)+"? ",1)]}),footer:s(()=>[a(j,{onClick:c},{default:s(()=>[i(t(e.lang().button.cancel),1)]),_:1}),a(D,{class:$(["ml-3",{"opacity-25":l(r).processing}]),disabled:l(r).processing,onClick:g},{default:s(()=>[i(t(e.lang().button.delete)+" "+t(l(r).processing?"...":""),1)]),_:1},8,["class","disabled"])]),_:1},8,["show"])]))}};export{F as default};
