import{E as _,r as o,q as b,o as l,d as x,a as t,c as i,g as d,b as c,u,j as y,G as k,a4 as w,w as m,e as S,t as V,F as j}from"./app-029d3c12.js";import E from"./Show-832367fc.js";import N from"./Delete-e88959d0.js";import $ from"./DeleteBulk-33625627.js";import{r as B,_ as D}from"./Empty-cfe29f6a.js";import"./DialogModal-d0f6ace0.js";import"./Modal-0faaa9fe.js";import"./XMarkIcon-e53425f1.js";import"./ActionButton-0db8adf7.js";import"./SecondaryButton-c3ca0618.js";import"./ConfirmationModal-3e9220f0.js";import"./DangerButton-d1685ae6.js";import"./TrashIcon-51127647.js";import"./empty-bbb98b41.js";import"./index-c4e474fb.js";const T={class:"flex justify-between"},C={class:"flex shrink-0 rounded overflow-hidden"},F={class:"flex flex-column sm:flex-row flex-wrap space-y-4 sm:space-y-0 items-center gap-2"},P={class:"relative"},M={class:"absolute inset-y-0 left-2 rtl:inset-r-0 rtl:right-0 flex items-center ps-3 pointer-events-none"},O=t("strong",null,"Message: ",-1),U={class:"flex w-fit rounded overflow-hidden"},ae={__name:"Read",setup(q){const p=_("read"),a=o([]),f=o(10),g=o(""),n=o(""),v=[{text:"Name",value:"name",sortable:!0},{text:"Email",value:"email",sortable:!0},{text:"Phone",value:"phone",sortable:!0},{text:"Subject",value:"subject",sortable:!0},{text:"Action",value:"actions"}];return(s,r)=>{const h=b("EasyDataTable");return l(),x(j,null,[t("div",T,[t("div",C,[a.value.length!=0&&s.can(["message delete"])?(l(),i($,{key:0,itemsSelected:a.value,title:"Items"},null,8,["itemsSelected"])):d("",!0)]),t("div",F,[t("div",P,[t("div",M,[c(u(B),{class:"w-5 h-5 text-gray-500 dark:text-gray-400"})]),y(t("input",{type:"text","onUpdate:modelValue":r[0]||(r[0]=e=>n.value=e),class:"block p-2 pl-8 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",placeholder:"Search for items"},null,512),[[k,n.value]])])])]),c(h,{class:"mt-2","rows-per-page":f.value,"show-index":"",alternating:"","border-cell":"","buttons-pagination":"",headers:v,items:u(p),"search-field":g.value,"search-value":n.value,"items-selected":a.value,"onUpdate:itemsSelected":r[1]||(r[1]=e=>a.value=e)},w({"empty-message":m(()=>[c(D)]),"item-actions":m(e=>[t("div",U,[s.can(["message read"])?(l(),i(E,{key:0,title:e.name,item:e},null,8,["title","item"])):d("",!0),s.can(["message delete"])?(l(),i(N,{key:1,title:e.name,item:e,onOpen:A=>e=e},null,8,["title","item","onOpen"])):d("",!0)])]),_:2},[s.can(["message read"])?{name:"expand",fn:m(e=>[t("div",null,[O,S(" "+V(e.message),1)])]),key:"0"}:void 0]),1032,["rows-per-page","items","search-field","search-value","items-selected"])],64)}}};export{ae as default};
