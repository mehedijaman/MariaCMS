import{D as b,r as l,q as x,o as c,d as y,a as t,c as w,g as k,b as s,u as d,j as i,E as S,a2 as V,w as m,e as $,t as j,v as p,F as D}from"./app-0add7d3b.js";import E from"./Edit-d39180bb.js";import N from"./Delete-db61708b.js";import B from"./DeleteBulk-5f1d1c1a.js";import{r as O,_ as T}from"./Empty-9e9ab285.js";import"./DialogModal-2828c21a.js";import"./Modal-600a46a3.js";import"./XMarkIcon-48a26f73.js";import"./InputError-120a7b85.js";import"./InputLabel-2c550e11.js";import"./ActionButton-21b09c7e.js";import"./PrimaryButton-156a4b37.js";import"./SecondaryButton-d46d9a20.js";import"./TextInput-fee49252.js";import"./PencilIcon-5dde8c8e.js";import"./ConfirmationModal-58ca8c19.js";import"./DangerButton-b98c492e.js";import"./TrashIcon-67035a6d.js";import"./empty-bbb98b41.js";import"./index-c33f0066.js";const C={class:"flex justify-between"},F={class:"flex shrink-0 rounded overflow-hidden"},P={class:"flex flex-column sm:flex-row flex-wrap space-y-4 sm:space-y-0 items-center gap-2"},M={class:"relative"},U={class:"absolute inset-y-0 left-2 rtl:inset-r-0 rtl:right-0 flex items-center ps-3 pointer-events-none"},q=t("strong",null,"Message: ",-1),A={class:"flex w-fit rounded overflow-hidden"},ie={__name:"Spam",setup(I){const u=b("spam"),a=l([]),f=l(10),v=l(""),n=l(""),g=[{text:"Name",value:"name",sortable:!0},{text:"Email",value:"email",sortable:!0},{text:"Phone",value:"phone",sortable:!0},{text:"Subject",value:"subject",sortable:!0},{text:"Action",value:"actions"}];return(r,o)=>{const h=x("EasyDataTable");return c(),y(D,null,[t("div",C,[t("div",F,[a.value.length!=0&&r.can(["message delete"])?(c(),w(B,{key:0,itemsSelected:a.value,title:"Items"},null,8,["itemsSelected"])):k("",!0)]),t("div",P,[t("div",M,[t("div",U,[s(d(O),{class:"w-5 h-5 text-gray-500 dark:text-gray-400"})]),i(t("input",{type:"text","onUpdate:modelValue":o[0]||(o[0]=e=>n.value=e),class:"block p-2 pl-8 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",placeholder:"Search for items"},null,512),[[S,n.value]])])])]),s(h,{class:"mt-2","rows-per-page":f.value,"show-index":"",alternating:"","border-cell":"","buttons-pagination":"",headers:g,items:d(u),"search-field":v.value,"search-value":n.value,"items-selected":a.value,"onUpdate:itemsSelected":o[1]||(o[1]=e=>a.value=e)},V({"empty-message":m(()=>[s(T)]),"item-actions":m(e=>[t("div",A,[i(s(E,{title:e.name,item:e,onOpen:_=>e=e},null,8,["title","item","onOpen"]),[[p,r.can(["message update"])]]),i(s(N,{title:e.name,item:e,onOpen:_=>e=e},null,8,["title","item","onOpen"]),[[p,r.can(["message delete"])]])])]),_:2},[r.can(["message read"])?{name:"expand",fn:m(e=>[t("div",null,[q,$(" "+j(e.message),1)])]),key:"0"}:void 0]),1032,["rows-per-page","items","search-field","search-value","items-selected"])],64)}}};export{ie as default};
