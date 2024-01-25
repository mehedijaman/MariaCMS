import{E as y,r as i,q as w,o as n,d as k,a as t,c as m,g as p,b as s,u,j as d,G as S,w as c,e as $,t as D,v as f,F as V}from"./app-40e302ae.js";import T from"./Create-443168c7.js";import B from"./Edit-a442309d.js";import E from"./Delete-c455d205.js";import N from"./DeleteBulk-3c1c7b55.js";import{r as O,_ as j}from"./Empty-91beee50.js";import"./DialogModal-112a7533.js";import"./Modal-9818fca1.js";import"./XMarkIcon-5aea3a76.js";import"./InputError-54276dc2.js";import"./InputLabel-99c3d693.js";import"./ImageInput-c9c1a446.js";import"./PrimaryButton-19d7538d.js";import"./SecondaryButton-a4fc0b9c.js";import"./TextInput-e0c63212.js";import"./TextAreaInput-584ba47e.js";import"./PlusIcon-279310fa.js";import"./ActionButton-8f7a17f6.js";import"./PencilIcon-1c695c69.js";import"./ConfirmationModal-ce1d7017.js";import"./DangerButton-70b51d3a.js";import"./TrashIcon-1421cd56.js";import"./empty-bbb98b41.js";import"./index-316c9229.js";const C={class:"flex justify-between"},F={class:"flex shrink-0 rounded overflow-hidden"},I={class:"flex flex-column sm:flex-row flex-wrap space-y-4 sm:space-y-0 items-center gap-2"},P={class:"relative"},U={class:"absolute inset-y-0 left-2 rtl:inset-r-0 rtl:right-0 flex items-center ps-3 pointer-events-none"},q=t("strong",null,"Items: ",-1),A={class:"flex w-fit rounded overflow-hidden"},pe={__name:"Draft",setup(G){const v=y("draft"),r=i([]),_=i(10),g=i(""),l=i(""),h=[{text:"Title",value:"title",sortable:!0},{text:"Description",value:"description",sortable:!0},{text:"Action",value:"actions"}];return(a,o)=>{const b=w("EasyDataTable");return n(),k(V,null,[t("div",C,[t("div",F,[a.can(["slider item create"])?(n(),m(T,{key:0})):p("",!0),r.value.length!=0&&a.can(["slider item delete"])?(n(),m(N,{key:1,itemsSelected:r.value,title:"Items"},null,8,["itemsSelected"])):p("",!0)]),t("div",I,[t("div",P,[t("div",U,[s(u(O),{class:"w-5 h-5 text-gray-500 dark:text-gray-400"})]),d(t("input",{type:"text","onUpdate:modelValue":o[0]||(o[0]=e=>l.value=e),class:"block p-2 pl-8 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",placeholder:"Search for items"},null,512),[[S,l.value]])])])]),s(b,{class:"mt-2","rows-per-page":_.value,"show-index":"",alternating:"","border-cell":"","buttons-pagination":"",headers:h,items:u(v),"search-field":g.value,"search-value":l.value,"items-selected":r.value,"onUpdate:itemsSelected":o[1]||(o[1]=e=>r.value=e)},{expand:c(e=>[t("div",null,[q,$(" "+D(e.items),1)])]),"empty-message":c(()=>[s(j)]),"item-actions":c(e=>[t("div",A,[d(s(B,{title:e.name,item:e,onOpen:x=>e=e},null,8,["title","item","onOpen"]),[[f,a.can(["slider item update"])]]),d(s(E,{title:e.name,item:e,onOpen:x=>e=e},null,8,["title","item","onOpen"]),[[f,a.can(["slider item delete"])]])])]),_:1},8,["rows-per-page","items","search-field","search-value","items-selected"])],64)}}};export{pe as default};
