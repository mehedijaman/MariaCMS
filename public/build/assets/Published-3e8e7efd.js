import{D as x,r as l,q as k,o as i,d as w,a as t,c as u,g as m,b as s,u as n,j as p,E as S,w as c,e as $,t as D,s as V,v as f,F as N}from"./app-2598048d.js";import B from"./Create-3099ed4e.js";import E from"./Edit-bb0ada4f.js";import O from"./Delete-03ca39cf.js";import T from"./DeleteBulk-f62d8f27.js";import{r as j,_ as C}from"./Empty-189c9ddc.js";import{r as F}from"./ComputerDesktopIcon-f65a5a4b.js";import"./DialogModal-1533a031.js";import"./Modal-aa19319a.js";import"./XMarkIcon-eb784676.js";import"./InputError-68ba7ea3.js";import"./InputLabel-c9a43dc8.js";import"./ImageInput-d9e6654d.js";import"./PrimaryButton-7f18ea50.js";import"./SecondaryButton-a4f6ae6f.js";import"./TextInput-d95d676f.js";import"./TextAreaInput-07d0e025.js";import"./textHelper-8b1dfc94.js";import"./PlusIcon-1d2627bc.js";import"./ActionButton-c7fad4fa.js";import"./PencilIcon-87a100fa.js";import"./ConfirmationModal-ff1f0b7d.js";import"./DangerButton-fc893115.js";import"./TrashIcon-3ac790d6.js";import"./empty-bbb98b41.js";import"./index-03b8a18a.js";const P={class:"flex justify-between"},U={class:"flex shrink-0 rounded overflow-hidden"},q={class:"flex flex-column sm:flex-row flex-wrap space-y-4 sm:space-y-0 items-center gap-2"},A={class:"relative"},I={class:"absolute inset-y-0 left-2 rtl:inset-r-0 rtl:right-0 flex items-center ps-3 pointer-events-none"},M=t("strong",null,"Description: ",-1),z={class:"flex w-fit rounded overflow-hidden"},be={__name:"Published",setup(G){const g=x("published"),a=l([]),b=l(10),v=l(""),d=l(""),h=[{text:"Name",value:"name",sortable:!0},{text:"Slug",value:"slug",sortable:!0},{text:"Action",value:"actions"}];return(r,o)=>{const y=k("EasyDataTable");return i(),w(N,null,[t("div",P,[t("div",U,[r.can(["gallery create"])?(i(),u(B,{key:0})):m("",!0),a.value.length!=0&&r.can(["gallery delete"])?(i(),u(T,{key:1,itemsSelected:a.value,title:"Items"},null,8,["itemsSelected"])):m("",!0)]),t("div",q,[t("div",A,[t("div",I,[s(n(j),{class:"w-5 h-5 text-gray-500 dark:text-gray-400"})]),p(t("input",{type:"text","onUpdate:modelValue":o[0]||(o[0]=e=>d.value=e),class:"block p-2 pl-8 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",placeholder:"Search for items"},null,512),[[S,d.value]])])])]),s(y,{class:"mt-2","rows-per-page":b.value,"show-index":"",alternating:"","border-cell":"","buttons-pagination":"",headers:h,items:n(g),"search-field":v.value,"search-value":d.value,"items-selected":a.value,"onUpdate:itemsSelected":o[1]||(o[1]=e=>a.value=e)},{expand:c(e=>[t("div",null,[M,$(" "+D(e.description),1)])]),"empty-message":c(()=>[s(C)]),"item-actions":c(e=>[t("div",z,[r.can(["gallery item create"])?(i(),u(n(V),{key:0,href:r.route("gallery.items.index",{gallery:e.id}),class:"inline-flex items-center px-3 py-1.5 bg-violet-500 dark:bg-violet-600 border border-transparent font-semibold text-xs text-white uppercase tracking-widest hover:bg-violet-600 dark:hover:bg-blue-400 focus:bg-blue-500 dark:focus:bg-blue-400 active:bg-blue-500/60 dark:active:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-slate-800 transition ease-in-out duration-150"},{default:c(()=>[s(n(F),{class:"w-4 h-auto"})]),_:2},1032,["href"])):m("",!0),p(s(E,{title:e.name,item:e,onOpen:_=>e=e},null,8,["title","item","onOpen"]),[[f,r.can(["gallery update"])]]),p(s(O,{title:e.name,item:e,onOpen:_=>e=e},null,8,["title","item","onOpen"]),[[f,r.can(["gallery delete"])]])])]),_:1},8,["rows-per-page","items","search-field","search-value","items-selected"])],64)}}};export{be as default};
