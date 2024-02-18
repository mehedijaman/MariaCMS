import{E as y,r as l,q as w,o as i,d as k,a as t,c as d,g as p,b as a,u,j as c,G as S,w as m,e as $,t as V,v as f,F as D}from"./app-c4f5b0ab.js";import N from"./Create-1e39840c.js";import B from"./Edit-edb2d99b.js";import E from"./Delete-d4807db2.js";import O from"./DeleteBulk-a6cdbdbc.js";import{r as T,_ as j}from"./Empty-e3c566e9.js";import"./DialogModal-ead8dcea.js";import"./Modal-cad72a07.js";import"./XMarkIcon-c9c2e3cc.js";import"./InputError-85854109.js";import"./InputLabel-d739c1d0.js";import"./PrimaryButton-458f03b6.js";import"./SecondaryButton-73139509.js";import"./TextInput-776fb8b7.js";import"./TextAreaInput-215a2aad.js";import"./textHelper-8b1dfc94.js";import"./PlusIcon-b2df1b43.js";import"./ActionButton-841fd9c8.js";import"./PencilIcon-3be4436b.js";import"./ConfirmationModal-9be1e3e5.js";import"./DangerButton-84c9d29b.js";import"./TrashIcon-1a6eb028.js";import"./empty-bbb98b41.js";import"./index-c1ed15bb.js";const C={class:"flex justify-between"},F={class:"flex shrink-0 rounded overflow-hidden"},I={class:"flex flex-column sm:flex-row flex-wrap space-y-4 sm:space-y-0 items-center gap-2"},P={class:"relative"},U={class:"absolute inset-y-0 left-2 rtl:inset-r-0 rtl:right-0 flex items-center ps-3 pointer-events-none"},q=t("strong",null,"Items: ",-1),A={class:"flex w-fit rounded overflow-hidden"},pe={__name:"Draft",setup(G){const g=y("draft"),s=l([]),v=l(10),_=l(""),n=l(""),h=[{text:"Name",value:"name",sortable:!0},{text:"Slug",value:"slug",sortable:!0},{text:"Action",value:"actions"}];return(r,o)=>{const b=w("EasyDataTable");return i(),k(D,null,[t("div",C,[t("div",F,[r.can(["tag create"])?(i(),d(N,{key:0})):p("",!0),s.value.length!=0&&r.can(["tag delete"])?(i(),d(O,{key:1,itemsSelected:s.value,title:"Items"},null,8,["itemsSelected"])):p("",!0)]),t("div",I,[t("div",P,[t("div",U,[a(u(T),{class:"w-5 h-5 text-gray-500 dark:text-gray-400"})]),c(t("input",{type:"text","onUpdate:modelValue":o[0]||(o[0]=e=>n.value=e),class:"block p-2 pl-8 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",placeholder:"Search for items"},null,512),[[S,n.value]])])])]),a(b,{class:"mt-2","rows-per-page":v.value,"show-index":"",alternating:"","border-cell":"","buttons-pagination":"",headers:h,items:u(g),"search-field":_.value,"search-value":n.value,"items-selected":s.value,"onUpdate:itemsSelected":o[1]||(o[1]=e=>s.value=e)},{expand:m(e=>[t("div",null,[q,$(" "+V(e.items),1)])]),"empty-message":m(()=>[a(j)]),"item-actions":m(e=>[t("div",A,[c(a(B,{title:e.name,item:e,onOpen:x=>e=e},null,8,["title","item","onOpen"]),[[f,r.can(["tag update"])]]),c(a(E,{title:e.name,item:e,onOpen:x=>e=e},null,8,["title","item","onOpen"]),[[f,r.can(["tag delete"])]])])]),_:1},8,["rows-per-page","items","search-field","search-value","items-selected"])],64)}}};export{pe as default};
