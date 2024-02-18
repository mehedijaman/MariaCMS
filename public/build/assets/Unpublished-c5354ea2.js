import{E as y,r as l,q as w,o as n,d as k,a as t,c as m,g as p,b as s,u,j as d,G as S,w as c,e as $,t as V,v as f,F as N}from"./app-c4f5b0ab.js";import B from"./Create-6f1b5bcc.js";import D from"./Edit-ed31e0ce.js";import E from"./Delete-c502f6fd.js";import O from"./DeleteBulk-0e46b29d.js";import{r as T,_ as j}from"./Empty-e3c566e9.js";import"./DialogModal-ead8dcea.js";import"./Modal-cad72a07.js";import"./XMarkIcon-c9c2e3cc.js";import"./InputError-85854109.js";import"./InputLabel-d739c1d0.js";import"./PrimaryButton-458f03b6.js";import"./SecondaryButton-73139509.js";import"./TextInput-776fb8b7.js";import"./TextAreaInput-215a2aad.js";import"./textHelper-8b1dfc94.js";import"./PlusIcon-b2df1b43.js";import"./ActionButton-841fd9c8.js";import"./PencilIcon-3be4436b.js";import"./ConfirmationModal-9be1e3e5.js";import"./DangerButton-84c9d29b.js";import"./TrashIcon-1a6eb028.js";import"./empty-bbb98b41.js";import"./index-c1ed15bb.js";const C={class:"flex justify-between"},F={class:"flex shrink-0 rounded overflow-hidden"},U={class:"flex flex-column sm:flex-row flex-wrap space-y-4 sm:space-y-0 items-center gap-2"},I={class:"relative"},P={class:"absolute inset-y-0 left-2 rtl:inset-r-0 rtl:right-0 flex items-center ps-3 pointer-events-none"},q=t("strong",null,"Items: ",-1),A={class:"flex w-fit rounded overflow-hidden"},pe={__name:"Unpublished",setup(G){const v=y("unpublished"),r=l([]),g=l(10),h=l(""),i=l(""),_=[{text:"Name",value:"name",sortable:!0},{text:"Slug",value:"slug",sortable:!0},{text:"Action",value:"actions"}];return(a,o)=>{const b=w("EasyDataTable");return n(),k(N,null,[t("div",C,[t("div",F,[a.can(["slider create"])?(n(),m(B,{key:0})):p("",!0),r.value.length!=0&&a.can(["slider delete"])?(n(),m(O,{key:1,itemsSelected:r.value,title:"Items"},null,8,["itemsSelected"])):p("",!0)]),t("div",U,[t("div",I,[t("div",P,[s(u(T),{class:"w-5 h-5 text-gray-500 dark:text-gray-400"})]),d(t("input",{type:"text","onUpdate:modelValue":o[0]||(o[0]=e=>i.value=e),class:"block p-2 pl-8 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",placeholder:"Search for items"},null,512),[[S,i.value]])])])]),s(b,{class:"mt-2","rows-per-page":g.value,"show-index":"",alternating:"","border-cell":"","buttons-pagination":"",headers:_,items:u(v),"search-field":h.value,"search-value":i.value,"items-selected":r.value,"onUpdate:itemsSelected":o[1]||(o[1]=e=>r.value=e)},{expand:c(e=>[t("div",null,[q,$(" "+V(e.items),1)])]),"empty-message":c(()=>[s(j)]),"item-actions":c(e=>[t("div",A,[d(s(D,{title:e.name,item:e,onOpen:x=>e=e},null,8,["title","item","onOpen"]),[[f,a.can(["slider update"])]]),d(s(E,{title:e.name,item:e,onOpen:x=>e=e},null,8,["title","item","onOpen"]),[[f,a.can(["slider delete"])]])])]),_:1},8,["rows-per-page","items","search-field","search-value","items-selected"])],64)}}};export{pe as default};
