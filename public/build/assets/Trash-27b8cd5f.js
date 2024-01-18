import{h as V,r as d,D as u,q as D,o as p,c as f,w as n,a as t,t as v,b as s,u as g,s as N,e as h,g as _,j as b,G as T,v as x}from"./app-029d3c12.js";import j from"./DeleteForce-d769aa8c.js";import A from"./DeleteForceBulk-8c0a4e0d.js";import C from"./DeleteForceAll-380a1e71.js";import E from"./Restore-5ace116b.js";import P from"./RestoreBulk-be0ee289.js";import U from"./RestoreAll-1adec185.js";import{r as q,_ as F}from"./Empty-cfe29f6a.js";import{_ as G}from"./AppLayout-b96ade91.js";import{_ as M}from"./Breadcrumb-b1a05033.js";import{r as z}from"./BackwardIcon-8f8cff18.js";import"./ConfirmationModal-3e9220f0.js";import"./Modal-0faaa9fe.js";import"./ActionButton-0db8adf7.js";import"./DangerButton-d1685ae6.js";import"./SecondaryButton-c3ca0618.js";import"./TrashIcon-51127647.js";import"./PrimaryButton-4a147dbe.js";import"./ArrowUturnLeftIcon-612d48c4.js";import"./empty-bbb98b41.js";import"./index-c4e474fb.js";import"./Toast-047c208b.js";/* empty css                                              */import"./_plugin-vue_export-helper-c27b6911.js";import"./XMarkIcon-e53425f1.js";import"./ApplicationLogo-ead9b018.js";import"./SwitchLocale-2e53f119.js";/* empty css                                               */const H={class:"py-6"},J={class:"max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-4"},K={class:"bg-white dark:bg-slate-800 overflow-hidden shadow sm:rounded p-2"},L={class:"flex justify-between"},Q={class:"flex shrink-0 rounded overflow-hidden"},R={class:"flex flex-column sm:flex-row flex-wrap space-y-4 sm:space-y-0 items-center gap-2"},W={class:"relative"},X={class:"absolute inset-y-0 left-2 rtl:inset-r-0 rtl:right-0 flex items-center ps-3 pointer-events-none"},Y=t("strong",null,"Items: ",-1),Z={class:"flex w-fit rounded overflow-hidden"},Oe={__name:"Trash",props:{title:String,tags:Object,breadcrumbs:Object},setup(y){const c=y,a=V(c.tags),l=d([]),w=d(10),k=d(""),m=d(""),$=[{text:"Name",value:"name",sortable:!0},{text:"Slug",value:"slug",sortable:!0},{text:"Action",value:"actions"}],I=r=>{const o=a.findIndex(i=>i.id===r);o!==-1&&a.splice(o,1)},S=r=>{r.forEach(o=>{const i=a.findIndex(e=>e.id===o);i!==-1&&a.splice(i,1)})},B=()=>{a.splice(0,a.length)};return u("removeItem",I),u("removeBulkItems",S),u("removeAllItems",B),(r,o)=>{const i=D("EasyDataTable");return p(),f(G,{title:c.title},{title:n(()=>[t("span",null,v(c.title),1)]),default:n(()=>[s(M,{breadcrumbs:c.breadcrumbs},null,8,["breadcrumbs"]),t("div",H,[t("div",J,[t("div",K,[t("div",L,[t("div",Q,[s(g(N),{class:"inline-flex gap-2 items-center px-3 py-1.5 bg-blue-500 dark:bg-blue-500 font-semibold text-xs text-white tracking-widest hover:bg-blue-600 dark:hover:bg-blue-400 focus:bg-blue-500 dark:focus:bg-blue-400 active:bg-blue-500/60 dark:active:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-slate-800 transition ease-in-out duration-150 h-8",href:r.route("tags.index")},{default:n(()=>[s(g(z),{class:"w-5 h-5"}),h(" Back ")]),_:1},8,["href"]),s(U),s(C),l.value.length!=0&&r.can(["category delete"])?(p(),f(P,{key:0,itemsSelected:l.value,title:"Items"},null,8,["itemsSelected"])):_("",!0),l.value.length!=0&&r.can(["category delete"])?(p(),f(A,{key:1,itemsSelected:l.value,title:"Items"},null,8,["itemsSelected"])):_("",!0)]),t("div",R,[t("div",W,[t("div",X,[s(g(q),{class:"w-5 h-5 text-gray-500 dark:text-gray-400"})]),b(t("input",{type:"text","onUpdate:modelValue":o[0]||(o[0]=e=>m.value=e),class:"block p-2 pl-8 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",placeholder:"Search for items"},null,512),[[T,m.value]])])])]),s(i,{class:"mt-2","rows-per-page":w.value,"show-index":"",alternating:"","border-cell":"","buttons-pagination":"",headers:$,items:a,"search-field":k.value,"search-value":m.value,"items-selected":l.value,"onUpdate:itemsSelected":o[1]||(o[1]=e=>l.value=e)},{expand:n(e=>[t("div",null,[Y,h(" "+v(e.items),1)])]),"empty-message":n(()=>[s(F)]),"item-actions":n(e=>[t("div",Z,[b(s(E,{title:e.name,item:e,onOpen:O=>e=e},null,8,["title","item","onOpen"]),[[x,r.can(["category update"])]]),b(s(j,{title:e.name,item:e,onOpen:O=>e=e},null,8,["title","item","onOpen"]),[[x,r.can(["category delete"])]])])]),_:1},8,["rows-per-page","items","search-field","search-value","items-selected"])])])])]),_:1},8,["title"])}}};export{Oe as default};
