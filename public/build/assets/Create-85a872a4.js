import{E as h,r as D,h as U,T as b,i as j,o as p,d as c,b as s,w as i,u as o,a as t,t as m,m as w,e as f,j as k,F as B,f as E,C as y,n as F}from"./app-40e302ae.js";import{_ as M}from"./DialogModal-112a7533.js";import{_}from"./InputError-54276dc2.js";import{_ as v}from"./InputLabel-99c3d693.js";import{_ as C}from"./PrimaryButton-19d7538d.js";import{_ as N}from"./SecondaryButton-a4fc0b9c.js";import{_ as T}from"./TextInput-e0c63212.js";import{t as I}from"./textHelper-8b1dfc94.js";import{r as z}from"./PlusIcon-279310fa.js";import"./Modal-9818fca1.js";import"./XMarkIcon-5aea3a76.js";const L={class:"hidden md:block"},P={class:"space-y-1"},q={class:"space-y-1"},A=["value"],G={class:"space-y-1"},H=t("option",{value:"1"},"Published",-1),J=t("option",{value:"0"},"Unpublished",-1),K=t("option",{value:null},"Draft",-1),O=[H,J,K],le={__name:"Create",setup(Q){const V=h("positions"),$=h("updateItems"),u=D(!1),n=U({name:"",position:"primary",status:1});let a=b(n);j(n,e=>{a=b(e)});const g=()=>{a.post(route("menus.store"),{preserveScroll:!0,onSuccess:e=>{$(e.props.menus),d()},onError:()=>null,onFinish:()=>null})},d=()=>{u.value=!1,a.errors={},a.reset()};return(e,r)=>(p(),c("div",null,[s(C,{class:"flex rounded-none items-center justify-start gap-2",onClick:r[0]||(r[0]=w(l=>u.value=!0,["prevent"]))},{default:i(()=>[s(o(z),{class:"w-4 h-auto"}),t("span",L,m(e.lang().label.add),1)]),_:1}),s(M,{show:u.value,onClose:d,"max-width":"md"},{title:i(()=>[f(m(e.lang().label.add),1)]),content:i(()=>[t("form",{class:"space-y-2",onSubmit:w(g,["prevent"])},[t("div",P,[s(v,{for:"name",value:e.lang().label.name},null,8,["value"]),s(T,{id:"name",modelValue:n.name,"onUpdate:modelValue":r[1]||(r[1]=l=>n.name=l),type:"text",class:"block w-full",autocomplete:"name",placeholder:e.lang().placeholder.menu_name,error:o(a).errors.name},null,8,["modelValue","placeholder","error"]),s(_,{message:o(a).errors.name},null,8,["message"])]),t("div",q,[s(v,{for:"position",value:e.lang().label.position},null,8,["value"]),k(t("select",{"onUpdate:modelValue":r[2]||(r[2]=l=>n.position=l),id:"position",name:"position",class:"block w-full"},[(p(!0),c(B,null,E(o(V),(l,S)=>(p(),c("option",{key:S,value:l},m(o(I)(l)),9,A))),128))],512),[[y,n.position]]),s(_,{message:o(a).errors.position},null,8,["message"])]),t("div",G,[s(v,{for:"status",value:e.lang().label.status},null,8,["value"]),k(t("select",{"onUpdate:modelValue":r[3]||(r[3]=l=>n.status=l),id:"status",name:"status",class:"block w-full"},O,512),[[y,n.status]]),s(_,{message:o(a).errors.status},null,8,["message"])])],32)]),footer:i(()=>[s(N,{onClick:d},{default:i(()=>[f(m(e.lang().button.cancel),1)]),_:1}),s(C,{class:F(["ml-3",{"opacity-25":o(a).processing}]),disabled:o(a).processing,onClick:g},{default:i(()=>[f(m(e.lang().button.save)+" "+m(o(a).processing?"...":""),1)]),_:1},8,["class","disabled"])]),_:1},8,["show"])]))}};export{le as default};
