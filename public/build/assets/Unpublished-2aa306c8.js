import{D as x,r as l,q as w,o as i,d as k,a as t,c as d,g as p,b as s,u,j as m,E as S,w as c,e as $,t as V,v as f,F as D}from"./app-0add7d3b.js";import N from"./Create-c4d56d6c.js";import B from"./Edit-1037d411.js";import E from"./Delete-4b1a34d7.js";import O from"./DeleteBulk-ac59d53c.js";import{r as T,_ as j}from"./Empty-9e9ab285.js";import"./DialogModal-2828c21a.js";import"./Modal-600a46a3.js";import"./XMarkIcon-48a26f73.js";import"./InputError-120a7b85.js";import"./InputLabel-2c550e11.js";import"./ImageInput-8d56e1e3.js";import"./PrimaryButton-156a4b37.js";import"./SecondaryButton-d46d9a20.js";import"./TextInput-fee49252.js";import"./TextAreaInput-c9fd3aca.js";import"./textHelper-8b1dfc94.js";import"./PlusIcon-1f67ab25.js";import"./ActionButton-21b09c7e.js";import"./PencilIcon-5dde8c8e.js";import"./ConfirmationModal-58ca8c19.js";import"./DangerButton-b98c492e.js";import"./TrashIcon-67035a6d.js";import"./empty-bbb98b41.js";import"./index-c33f0066.js";const C={class:"flex justify-between"},F={class:"flex shrink-0 rounded overflow-hidden"},U={class:"flex flex-column sm:flex-row flex-wrap space-y-4 sm:space-y-0 items-center gap-2"},I={class:"relative"},P={class:"absolute inset-y-0 left-2 rtl:inset-r-0 rtl:right-0 flex items-center ps-3 pointer-events-none"},q=t("strong",null,"Items: ",-1),A={class:"flex w-fit rounded overflow-hidden"},ue={__name:"Unpublished",setup(M){const g=x("unpublished"),a=l([]),v=l(10),h=l(""),n=l(""),_=[{text:"Name",value:"name",sortable:!0},{text:"Slug",value:"slug",sortable:!0},{text:"Action",value:"actions"}];return(r,o)=>{const b=w("EasyDataTable");return i(),k(D,null,[t("div",C,[t("div",F,[r.can(["gallery create"])?(i(),d(N,{key:0})):p("",!0),a.value.length!=0&&r.can(["gallery delete"])?(i(),d(O,{key:1,itemsSelected:a.value,title:"Items"},null,8,["itemsSelected"])):p("",!0)]),t("div",U,[t("div",I,[t("div",P,[s(u(T),{class:"w-5 h-5 text-gray-500 dark:text-gray-400"})]),m(t("input",{type:"text","onUpdate:modelValue":o[0]||(o[0]=e=>n.value=e),class:"block p-2 pl-8 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",placeholder:"Search for items"},null,512),[[S,n.value]])])])]),s(b,{class:"mt-2","rows-per-page":v.value,"show-index":"",alternating:"","border-cell":"","buttons-pagination":"",headers:_,items:u(g),"search-field":h.value,"search-value":n.value,"items-selected":a.value,"onUpdate:itemsSelected":o[1]||(o[1]=e=>a.value=e)},{expand:c(e=>[t("div",null,[q,$(" "+V(e.items),1)])]),"empty-message":c(()=>[s(j)]),"item-actions":c(e=>[t("div",A,[m(s(B,{title:e.name,item:e,onOpen:y=>e=e},null,8,["title","item","onOpen"]),[[f,r.can(["gallery update"])]]),m(s(E,{title:e.name,item:e,onOpen:y=>e=e},null,8,["title","item","onOpen"]),[[f,r.can(["gallery delete"])]])])]),_:1},8,["rows-per-page","items","search-field","search-value","items-selected"])],64)}}};export{ue as default};
