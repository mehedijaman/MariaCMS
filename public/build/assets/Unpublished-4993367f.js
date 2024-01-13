import{D as y,r as l,q as w,o as n,d as k,a as t,c as m,g as p,b as s,u,j as d,E as S,w as c,e as $,t as D,v as f,F as V}from"./app-2598048d.js";import T from"./Create-6454c16f.js";import B from"./Edit-f04d84bd.js";import E from"./Delete-bc4d1104.js";import N from"./DeleteBulk-7caa3908.js";import{r as O,_ as j}from"./Empty-189c9ddc.js";import"./DialogModal-1533a031.js";import"./Modal-aa19319a.js";import"./XMarkIcon-eb784676.js";import"./InputError-68ba7ea3.js";import"./InputLabel-c9a43dc8.js";import"./ImageInput-d9e6654d.js";import"./PrimaryButton-7f18ea50.js";import"./SecondaryButton-a4f6ae6f.js";import"./TextInput-d95d676f.js";import"./PlusIcon-1d2627bc.js";import"./ActionButton-c7fad4fa.js";import"./PencilIcon-87a100fa.js";import"./ConfirmationModal-ff1f0b7d.js";import"./DangerButton-fc893115.js";import"./TrashIcon-3ac790d6.js";import"./empty-bbb98b41.js";import"./index-03b8a18a.js";const C={class:"flex justify-between"},F={class:"flex shrink-0 rounded overflow-hidden"},U={class:"flex flex-column sm:flex-row flex-wrap space-y-4 sm:space-y-0 items-center gap-2"},I={class:"relative"},P={class:"absolute inset-y-0 left-2 rtl:inset-r-0 rtl:right-0 flex items-center ps-3 pointer-events-none"},q=t("strong",null,"Items: ",-1),A={class:"flex w-fit rounded overflow-hidden"},me={__name:"Unpublished",setup(M){const v=y("unpublished"),r=l([]),h=l(10),_=l(""),i=l(""),g=[{text:"Title",value:"title",sortable:!0},{text:"Description",value:"description",sortable:!0},{text:"Action",value:"actions"}];return(a,o)=>{const b=w("EasyDataTable");return n(),k(V,null,[t("div",C,[t("div",F,[a.can(["slider item create"])?(n(),m(T,{key:0})):p("",!0),r.value.length!=0&&a.can(["slider item delete"])?(n(),m(N,{key:1,itemsSelected:r.value,title:"Items"},null,8,["itemsSelected"])):p("",!0)]),t("div",U,[t("div",I,[t("div",P,[s(u(O),{class:"w-5 h-5 text-gray-500 dark:text-gray-400"})]),d(t("input",{type:"text","onUpdate:modelValue":o[0]||(o[0]=e=>i.value=e),class:"block p-2 pl-8 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",placeholder:"Search for items"},null,512),[[S,i.value]])])])]),s(b,{class:"mt-2","rows-per-page":h.value,"show-index":"",alternating:"","border-cell":"","buttons-pagination":"",headers:g,items:u(v),"search-field":_.value,"search-value":i.value,"items-selected":r.value,"onUpdate:itemsSelected":o[1]||(o[1]=e=>r.value=e)},{expand:c(e=>[t("div",null,[q,$(" "+D(e.items),1)])]),"empty-message":c(()=>[s(j)]),"item-actions":c(e=>[t("div",A,[d(s(B,{title:e.name,item:e,onOpen:x=>e=e},null,8,["title","item","onOpen"]),[[f,a.can(["slider item update"])]]),d(s(E,{title:e.name,item:e,onOpen:x=>e=e},null,8,["title","item","onOpen"]),[[f,a.can(["slider item delete"])]])])]),_:1},8,["rows-per-page","items","search-field","search-value","items-selected"])],64)}}};export{me as default};
