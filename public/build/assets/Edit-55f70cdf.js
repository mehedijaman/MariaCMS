import{r as $,T as k,a5 as C,l as V,o as f,d as y,j as S,c as B,w as r,b as o,u as a,m as _,e as c,t as l,a as v,n as j}from"./app-40e302ae.js";import{_ as D}from"./DialogModal-112a7533.js";import{_ as E}from"./InputError-54276dc2.js";import{_ as N}from"./InputLabel-99c3d693.js";import{_ as M}from"./ActionButton-8f7a17f6.js";import{_ as O}from"./PrimaryButton-19d7538d.js";import{_ as T}from"./SecondaryButton-a4fc0b9c.js";import{_ as U}from"./TextInput-e0c63212.js";import{r as z}from"./PencilIcon-1c695c69.js";import"./Modal-9818fca1.js";import"./XMarkIcon-5aea3a76.js";const F={class:"space-y-1"},W={__name:"Edit",props:{title:String,roles:Object,permission:Object},emits:["open"],setup(b,{emit:g}){var u;const w=g,t=$(!1),n=b,s=k({name:"",guard_name:"web"});C(()=>{var e;t&&(s.name=(e=n.permission)==null?void 0:e.name)});const p=()=>{var e;s.put(route("permission.update",(e=n.permission)==null?void 0:e.id),{preserveScroll:!0,onSuccess:()=>m(),onError:()=>null,onFinish:()=>null})},m=()=>{t.value=!1,s.errors={},s.reset()};return(u=n.roles)==null||u.map(e=>({label:e.name,value:e.name})),(e,i)=>{const h=V("tooltip");return f(),y("div",null,[S((f(),B(M,{onClick:i[0]||(i[0]=_(d=>(t.value=!0,w("open")),["prevent"]))},{default:r(()=>[o(a(z),{class:"w-4 h-auto"})]),_:1})),[[h,e.lang().label.edit]]),o(D,{show:t.value,onClose:m},{title:r(()=>[c(l(e.lang().label.edit)+" "+l(n.title),1)]),content:r(()=>[v("form",{class:"space-y-2",onSubmit:_(p,["prevent"])},[v("div",F,[o(N,{for:"name",value:e.lang().label.name},null,8,["value"]),o(U,{id:"name",modelValue:a(s).name,"onUpdate:modelValue":i[1]||(i[1]=d=>a(s).name=d),type:"text",class:"block w-full",autocomplete:"name",placeholder:e.lang().placeholder.permission_name,error:a(s).errors.name},null,8,["modelValue","placeholder","error"]),o(E,{message:a(s).errors.name},null,8,["message"])])],32)]),footer:r(()=>[o(T,{onClick:m},{default:r(()=>[c(l(e.lang().button.cancel),1)]),_:1}),o(O,{class:j(["ml-3",{"opacity-25":a(s).processing}]),disabled:a(s).processing,onClick:p},{default:r(()=>[c(l(e.lang().button.save)+" "+l(a(s).processing?"...":""),1)]),_:1},8,["class","disabled"])]),_:1},8,["show"])])}}};export{W as default};
