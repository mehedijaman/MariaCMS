import{E as b,r as l,q as y,o as s,d as x,a as t,c as n,g as i,b as m,u,j as k,G as w,a4 as S,w as c,e as $,t as V,F as j}from"./app-40e302ae.js";import E from"./Show-8841fc78.js";import N from"./Edit-8395a16f.js";import B from"./Delete-5f1376af.js";import D from"./DeleteBulk-83119689.js";import{r as O,_ as T}from"./Empty-91beee50.js";import"./DialogModal-112a7533.js";import"./Modal-9818fca1.js";import"./XMarkIcon-5aea3a76.js";import"./ActionButton-8f7a17f6.js";import"./SecondaryButton-a4fc0b9c.js";import"./InputError-54276dc2.js";import"./InputLabel-99c3d693.js";import"./PrimaryButton-19d7538d.js";import"./TextInput-e0c63212.js";import"./PencilIcon-1c695c69.js";import"./ConfirmationModal-ce1d7017.js";import"./DangerButton-70b51d3a.js";import"./TrashIcon-1421cd56.js";import"./empty-bbb98b41.js";import"./index-316c9229.js";const C={class:"flex justify-between"},F={class:"flex shrink-0 rounded overflow-hidden"},P={class:"flex flex-column sm:flex-row flex-wrap space-y-4 sm:space-y-0 items-center gap-2"},U={class:"relative"},M={class:"absolute inset-y-0 left-2 rtl:inset-r-0 rtl:right-0 flex items-center ps-3 pointer-events-none"},q=t("strong",null,"Message: ",-1),A={class:"flex w-fit rounded overflow-hidden"},de={__name:"Unread",setup(G){const p=b("unread"),r=l([]),f=l(10),g=l(""),d=l(""),v=[{text:"Name",value:"name",sortable:!0},{text:"Email",value:"email",sortable:!0},{text:"Phone",value:"phone",sortable:!0},{text:"Subject",value:"subject",sortable:!0},{text:"Action",value:"actions"}];return(a,o)=>{const h=y("EasyDataTable");return s(),x(j,null,[t("div",C,[t("div",F,[r.value.length!=0&&a.can(["message delete"])?(s(),n(D,{key:0,itemsSelected:r.value,title:"Items"},null,8,["itemsSelected"])):i("",!0)]),t("div",P,[t("div",U,[t("div",M,[m(u(O),{class:"w-5 h-5 text-gray-500 dark:text-gray-400"})]),k(t("input",{type:"text","onUpdate:modelValue":o[0]||(o[0]=e=>d.value=e),class:"block p-2 pl-8 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",placeholder:"Search for items"},null,512),[[w,d.value]])])])]),m(h,{class:"mt-2","rows-per-page":f.value,"show-index":"",alternating:"","border-cell":"","buttons-pagination":"",headers:v,items:u(p),"search-field":g.value,"search-value":d.value,"items-selected":r.value,"onUpdate:itemsSelected":o[1]||(o[1]=e=>r.value=e)},S({"empty-message":c(()=>[m(T)]),"item-actions":c(e=>[t("div",A,[a.can(["message read"])?(s(),n(E,{key:0,title:e.name,item:e,update:!0},null,8,["title","item"])):i("",!0),a.can(["message update"])?(s(),n(N,{key:1,title:e.name,item:e,onOpen:_=>e=e},null,8,["title","item","onOpen"])):i("",!0),a.can(["message delete"])?(s(),n(B,{key:2,title:e.name,item:e,onOpen:_=>e=e},null,8,["title","item","onOpen"])):i("",!0)])]),_:2},[a.can(["message read"])?{name:"expand",fn:c(e=>[t("div",null,[q,$(" "+V(e.message),1)])]),key:"0"}:void 0]),1032,["rows-per-page","items","search-field","search-value","items-selected"])],64)}}};export{de as default};
