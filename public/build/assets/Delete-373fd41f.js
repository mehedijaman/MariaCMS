import{E as v,r as b,T as w,o as h,d as C,b as a,w as o,u as l,m as k,e as i,t,n as $}from"./app-029d3c12.js";import{_ as S}from"./ConfirmationModal-3e9220f0.js";import{_ as y}from"./ActionButton-0db8adf7.js";import{_ as E}from"./DangerButton-d1685ae6.js";import{_ as j}from"./SecondaryButton-c3ca0618.js";import{r as B}from"./TrashIcon-51127647.js";import"./Modal-0faaa9fe.js";const F={__name:"Delete",props:{title:String,item:Object},emits:["open"],setup(f,{emit:p}){const u=v("removeItem"),_=p,m=b(!1),n=f,r=w({}),g=()=>{var e;r.delete(route("galleries.destroy",(e=n.item)==null?void 0:e.id),{preserveScroll:!0,onSuccess:()=>{var s;c(),u((s=n.item)==null?void 0:s.id)},onError:()=>null,onFinish:()=>null})},c=()=>{m.value=!1};return(e,s)=>(h(),C("div",null,[a(y,{variant:"danger",onClick:s[0]||(s[0]=k(d=>(m.value=!0,_("open")),["prevent"]))},{default:o(()=>[a(l(B),{class:"w-4 h-auto"})]),_:1}),a(S,{show:m.value,onClose:c},{title:o(()=>[i(t(e.lang().label.delete)+" "+t(n.title),1)]),content:o(()=>{var d;return[i(t(e.lang().label.delete_confirm)+" "+t((d=n.item)==null?void 0:d.name)+"? ",1)]}),footer:o(()=>[a(j,{onClick:c},{default:o(()=>[i(t(e.lang().button.cancel),1)]),_:1}),a(E,{class:$(["ml-3",{"opacity-25":l(r).processing}]),disabled:l(r).processing,onClick:g},{default:o(()=>[i(t(e.lang().button.delete)+" "+t(l(r).processing?"...":""),1)]),_:1},8,["class","disabled"])]),_:1},8,["show"])]))}};export{F as default};
