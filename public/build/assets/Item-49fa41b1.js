import{_ as x}from"./DialogModal-c80aaba5.js";import{_ as y}from"./SecondaryButton-7a5ed3a0.js";import{r as k,l as C,o as t,d as s,a,j as D,e as c,t as e,b as u,w as l,F as f,f as _,n as B}from"./app-94de279c.js";import"./Modal-38f1bd9c.js";import"./XMarkIcon-2828e103.js";const N={class:"space-y-2"},S={class:"font-bold text-primary capitalize"},V={class:"flex flex-wrap gap-4"},I={__name:"Item",props:{title:String,caption:{type:String,default:null},items:Object},setup(v){const i=k(!1),o=v,g=[],p=()=>{i.value=!1};return(n,m)=>{const w=C("tooltip");return t(),s("div",null,[a("div",null,[D((t(),s("p",{class:"text-primary underline cursor-pointer w-fit",onClick:m[0]||(m[0]=r=>i.value=!0)},[c(e(o.title),1)])),[[w,n.lang().label.show_item]])]),u(x,{show:i.value,onClose:p,"max-width":"md"},{title:l(()=>[c(e(n.lang().label.item)+" "+e(o.caption?o.caption:o.title),1)]),content:l(()=>[a("div",N,[(t(),s(f,null,_(g,(r,h)=>a("div",{class:"mt-2",key:h},[a("p",S,e(r.group),1),a("div",V,[(t(!0),s(f,null,_(r.data,(d,b)=>(t(),s("p",{key:b,class:B([d.name=="delete"?"text-red-500 font-semibold":"","mt-1 mb-4"])},e(d.name),3))),128))])])),64))])]),footer:l(()=>[u(y,{onClick:p},{default:l(()=>[c(e(n.lang().button.close),1)]),_:1})]),_:1},8,["show"])])}}};export{I as default};
