import{E as y,r as l,q as w,o as i,d as k,a as t,c as m,g as p,b as s,u,j as c,G as S,w as d,e as $,t as V,v as f,F as N}from"./app-029d3c12.js";import B from"./Create-a6855fd8.js";import D from"./Edit-8487ec94.js";import E from"./Delete-3696cd45.js";import O from"./DeleteBulk-63e0b714.js";import{r as T,_ as j}from"./Empty-cfe29f6a.js";import"./DialogModal-d0f6ace0.js";import"./Modal-0faaa9fe.js";import"./XMarkIcon-e53425f1.js";import"./InputError-5ba87def.js";import"./InputLabel-4b2acd49.js";import"./PrimaryButton-4a147dbe.js";import"./SecondaryButton-c3ca0618.js";import"./TextInput-f658579c.js";import"./textHelper-8b1dfc94.js";import"./PlusIcon-f748347f.js";import"./ActionButton-0db8adf7.js";import"./PencilIcon-c6d05811.js";import"./ConfirmationModal-3e9220f0.js";import"./DangerButton-d1685ae6.js";import"./TrashIcon-51127647.js";import"./empty-bbb98b41.js";import"./index-c4e474fb.js";const C={class:"flex justify-between"},F={class:"flex shrink-0 rounded overflow-hidden"},U={class:"flex flex-column sm:flex-row flex-wrap space-y-4 sm:space-y-0 items-center gap-2"},I={class:"relative"},P={class:"absolute inset-y-0 left-2 rtl:inset-r-0 rtl:right-0 flex items-center ps-3 pointer-events-none"},q=t("strong",null,"Items: ",-1),A={class:"flex w-fit rounded overflow-hidden"},me={__name:"Unpublished",setup(G){const g=y("unpublished"),a=l([]),v=l(10),h=l(""),n=l(""),_=[{text:"Name",value:"name",sortable:!0},{text:"Slug",value:"slug",sortable:!0},{text:"Action",value:"actions"}];return(r,o)=>{const b=w("EasyDataTable");return i(),k(N,null,[t("div",C,[t("div",F,[r.can(["tag create"])?(i(),m(B,{key:0})):p("",!0),a.value.length!=0&&r.can(["tag delete"])?(i(),m(O,{key:1,itemsSelected:a.value,title:"Items"},null,8,["itemsSelected"])):p("",!0)]),t("div",U,[t("div",I,[t("div",P,[s(u(T),{class:"w-5 h-5 text-gray-500 dark:text-gray-400"})]),c(t("input",{type:"text","onUpdate:modelValue":o[0]||(o[0]=e=>n.value=e),class:"block p-2 pl-8 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",placeholder:"Search for items"},null,512),[[S,n.value]])])])]),s(b,{class:"mt-2","rows-per-page":v.value,"show-index":"",alternating:"","border-cell":"","buttons-pagination":"",headers:_,items:u(g),"search-field":h.value,"search-value":n.value,"items-selected":a.value,"onUpdate:itemsSelected":o[1]||(o[1]=e=>a.value=e)},{expand:d(e=>[t("div",null,[q,$(" "+V(e.items),1)])]),"empty-message":d(()=>[s(j)]),"item-actions":d(e=>[t("div",A,[c(s(D,{title:e.name,item:e,onOpen:x=>e=e},null,8,["title","item","onOpen"]),[[f,r.can(["tag update"])]]),c(s(E,{title:e.name,item:e,onOpen:x=>e=e},null,8,["title","item","onOpen"]),[[f,r.can(["tag delete"])]])])]),_:1},8,["rows-per-page","items","search-field","search-value","items-selected"])],64)}}};export{me as default};
