import{E as x,r as l,q as w,o as n,d as k,a as t,c as m,g as d,b as r,u as p,j as c,G as $,w as u,v as f,F as S}from"./app-40e302ae.js";import V from"./Create-a067ad85.js";import B from"./Edit-b4220814.js";import D from"./Delete-664a17da.js";import E from"./DeleteBulk-95d74f5a.js";import{r as O,_ as T}from"./Empty-91beee50.js";import"./DialogModal-112a7533.js";import"./Modal-9818fca1.js";import"./XMarkIcon-5aea3a76.js";import"./InputError-54276dc2.js";import"./InputLabel-99c3d693.js";import"./ImageInput-c9c1a446.js";import"./PrimaryButton-19d7538d.js";import"./SecondaryButton-a4fc0b9c.js";import"./TextInput-e0c63212.js";import"./TextAreaInput-584ba47e.js";import"./PlusIcon-279310fa.js";import"./ActionButton-8f7a17f6.js";import"./PencilIcon-1c695c69.js";import"./ConfirmationModal-ce1d7017.js";import"./DangerButton-70b51d3a.js";import"./TrashIcon-1421cd56.js";import"./empty-bbb98b41.js";import"./index-316c9229.js";const j={class:"flex justify-between"},C={class:"flex shrink-0 rounded overflow-hidden"},F={class:"flex flex-column sm:flex-row flex-wrap space-y-4 sm:space-y-0 items-center gap-2"},N={class:"relative"},U={class:"absolute inset-y-0 left-2 rtl:inset-r-0 rtl:right-0 flex items-center ps-3 pointer-events-none"},P={class:"flex w-fit rounded overflow-hidden"},ce={__name:"Unpublished",setup(q){const v=x("unpublished"),s=l([]),g=l(10),h=l(""),i=l(""),_=[{text:"Title",value:"title",sortable:!0},{text:"Description",value:"description",sortable:!0},{text:"Action",value:"actions"}];return(a,o)=>{const b=w("EasyDataTable");return n(),k(S,null,[t("div",j,[t("div",C,[a.can(["gallery item create"])?(n(),m(V,{key:0})):d("",!0),s.value.length!=0&&a.can(["gallery item delete"])?(n(),m(E,{key:1,itemsSelected:s.value,title:"Items"},null,8,["itemsSelected"])):d("",!0)]),t("div",F,[t("div",N,[t("div",U,[r(p(O),{class:"w-5 h-5 text-gray-500 dark:text-gray-400"})]),c(t("input",{type:"text","onUpdate:modelValue":o[0]||(o[0]=e=>i.value=e),class:"block p-2 pl-8 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",placeholder:"Search for items"},null,512),[[$,i.value]])])])]),r(b,{class:"mt-2","rows-per-page":g.value,"show-index":"",alternating:"","border-cell":"","buttons-pagination":"",headers:_,items:p(v),"search-field":h.value,"search-value":i.value,"items-selected":s.value,"onUpdate:itemsSelected":o[1]||(o[1]=e=>s.value=e)},{"empty-message":u(()=>[r(T)]),"item-actions":u(e=>[t("div",P,[c(r(B,{title:e.name,item:e,onOpen:y=>e=e},null,8,["title","item","onOpen"]),[[f,a.can(["gallery item update"])]]),c(r(D,{title:e.name,item:e,onOpen:y=>e=e},null,8,["title","item","onOpen"]),[[f,a.can(["gallery item delete"])]])])]),_:1},8,["rows-per-page","items","search-field","search-value","items-selected"])],64)}}};export{ce as default};
