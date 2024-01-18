import{E as y,r as i,q as w,o as n,d as k,a as t,c as d,g as p,b as a,u,j as m,G as D,w as c,e as S,t as $,v as f,F as V}from"./app-029d3c12.js";import N from"./Create-60c8d62f.js";import B from"./Edit-4add5483.js";import C from"./Delete-2600c3c1.js";import E from"./DeleteBulk-4cd436f7.js";import{r as O,_ as T}from"./Empty-cfe29f6a.js";import"./DialogModal-d0f6ace0.js";import"./Modal-0faaa9fe.js";import"./XMarkIcon-e53425f1.js";import"./InputError-5ba87def.js";import"./InputLabel-4b2acd49.js";import"./ImageInput-99f321b1.js";import"./PrimaryButton-4a147dbe.js";import"./SecondaryButton-c3ca0618.js";import"./TextInput-f658579c.js";import"./TextAreaInput-3de8a557.js";import"./textHelper-8b1dfc94.js";import"./PlusIcon-f748347f.js";import"./ActionButton-0db8adf7.js";import"./PencilIcon-c6d05811.js";import"./ConfirmationModal-3e9220f0.js";import"./DangerButton-d1685ae6.js";import"./TrashIcon-51127647.js";import"./empty-bbb98b41.js";import"./index-c4e474fb.js";const j={class:"flex justify-between"},F={class:"flex shrink-0 rounded overflow-hidden"},P={class:"flex flex-column sm:flex-row flex-wrap space-y-4 sm:space-y-0 items-center gap-2"},U={class:"relative"},q={class:"absolute inset-y-0 left-2 rtl:inset-r-0 rtl:right-0 flex items-center ps-3 pointer-events-none"},A=t("strong",null,"Description: ",-1),G={class:"flex w-fit rounded overflow-hidden"},ue={__name:"Draft",setup(I){const v=y("draft"),s=i([]),g=i(10),_=i(""),l=i(""),h=[{text:"Name",value:"name",sortable:!0},{text:"Designation",value:"designation",sortable:!0},{text:"Company",value:"company",sortable:!0},{text:"Rating",value:"rating",sortable:!0},{text:"Action",value:"actions"}];return(r,o)=>{const b=w("EasyDataTable");return n(),k(V,null,[t("div",j,[t("div",F,[r.can(["testimonial create"])?(n(),d(N,{key:0})):p("",!0),s.value.length!=0&&r.can(["testimonial delete"])?(n(),d(E,{key:1,itemsSelected:s.value,title:"Items"},null,8,["itemsSelected"])):p("",!0)]),t("div",P,[t("div",U,[t("div",q,[a(u(O),{class:"w-5 h-5 text-gray-500 dark:text-gray-400"})]),m(t("input",{type:"text","onUpdate:modelValue":o[0]||(o[0]=e=>l.value=e),class:"block p-2 pl-8 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",placeholder:"Search for items"},null,512),[[D,l.value]])])])]),a(b,{class:"mt-2","rows-per-page":g.value,"show-index":"",alternating:"","border-cell":"","buttons-pagination":"",headers:h,items:u(v),"search-field":_.value,"search-value":l.value,"items-selected":s.value,"onUpdate:itemsSelected":o[1]||(o[1]=e=>s.value=e)},{expand:c(e=>[t("div",null,[A,S(" "+$(e.description),1)])]),"empty-message":c(()=>[a(T)]),"item-actions":c(e=>[t("div",G,[m(a(B,{title:e.name,item:e,onOpen:x=>e=e},null,8,["title","item","onOpen"]),[[f,r.can(["testimonial update"])]]),m(a(C,{title:e.name,item:e,onOpen:x=>e=e},null,8,["title","item","onOpen"]),[[f,r.can(["testimonial delete"])]])])]),_:1},8,["rows-per-page","items","search-field","search-value","items-selected"])],64)}}};export{ue as default};
