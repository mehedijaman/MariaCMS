import{h as T,r as c,C as m,q as V,o as p,c as f,w as d,a as t,t as g,b as s,u as b,s as j,e as _,g as h,j as v,E as D,v as x}from"./app-2598048d.js";import C from"./DeleteForce-7889979c.js";import E from"./DeleteForceBulk-5486e2aa.js";import N from"./DeleteForceAll-f948d841.js";import A from"./Restore-9e7a3de4.js";import P from"./RestoreBulk-d0ae29a0.js";import U from"./RestoreAll-3a76d107.js";import{r as q,_ as F}from"./Empty-189c9ddc.js";import{_ as M}from"./AppLayout-d6195b27.js";import{_ as z}from"./Breadcrumb-fb78a766.js";import{r as G}from"./BackwardIcon-da2554b2.js";import"./ConfirmationModal-ff1f0b7d.js";import"./Modal-aa19319a.js";import"./ActionButton-c7fad4fa.js";import"./DangerButton-fc893115.js";import"./SecondaryButton-a4f6ae6f.js";import"./TrashIcon-3ac790d6.js";import"./PrimaryButton-7f18ea50.js";import"./ArrowUturnLeftIcon-406e2d21.js";import"./empty-bbb98b41.js";import"./index-03b8a18a.js";import"./Toast-03eae3dd.js";/* empty css                                              */import"./_plugin-vue_export-helper-c27b6911.js";import"./XMarkIcon-eb784676.js";import"./ApplicationLogo-d7439a2b.js";import"./SwitchLocale-1d554e12.js";/* empty css                                               */const H={class:"py-6"},J={class:"max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-4"},K={class:"bg-white dark:bg-slate-800 overflow-hidden shadow sm:rounded p-2"},L={class:"flex justify-between"},Q={class:"flex shrink-0 rounded overflow-hidden"},R={class:"flex flex-column sm:flex-row flex-wrap space-y-4 sm:space-y-0 items-center gap-2"},W={class:"relative"},X={class:"absolute inset-y-0 left-2 rtl:inset-r-0 rtl:right-0 flex items-center ps-3 pointer-events-none"},Y=t("strong",null,"Items: ",-1),Z={class:"flex w-fit rounded overflow-hidden"},Be={__name:"Trash",props:{title:String,slider:Object,slider_items:Object,breadcrumbs:Object},setup(w){const a=w,o=T(a.slider_items),l=c([]),k=c(10),y=c(""),u=c(""),$=[{text:"Title",value:"title",sortable:!0},{text:"Description",value:"description",sortable:!0},{text:"Action",value:"actions"}],I=r=>{const i=o.findIndex(n=>n.id===r);i!==-1&&o.splice(i,1)},S=r=>{r.forEach(i=>{const n=o.findIndex(e=>e.id===i);n!==-1&&o.splice(n,1)})},O=()=>{o.splice(0,o.length)};return m("slider",a.slider),m("removeItem",I),m("removeBulkItems",S),m("removeAllItems",O),(r,i)=>{const n=V("EasyDataTable");return p(),f(M,{title:a.title},{title:d(()=>[t("span",null,g(a.title),1)]),default:d(()=>[s(z,{breadcrumbs:a.breadcrumbs},null,8,["breadcrumbs"]),t("div",H,[t("div",J,[t("div",K,[t("div",L,[t("div",Q,[s(b(j),{class:"inline-flex gap-2 items-center px-3 py-1.5 bg-blue-500 dark:bg-blue-500 font-semibold text-xs text-white tracking-widest hover:bg-blue-600 dark:hover:bg-blue-400 focus:bg-blue-500 dark:focus:bg-blue-400 active:bg-blue-500/60 dark:active:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-slate-800 transition ease-in-out duration-150 h-8",href:r.route("slider.items.index",{slider:a.slider.id})},{default:d(()=>[s(b(G),{class:"w-5 h-5"}),_(" Back ")]),_:1},8,["href"]),s(U),s(N),l.value.length!=0&&r.can(["slider item delete"])?(p(),f(P,{key:0,itemsSelected:l.value,title:"Items"},null,8,["itemsSelected"])):h("",!0),l.value.length!=0&&r.can(["slider item delete"])?(p(),f(E,{key:1,itemsSelected:l.value,title:"Items"},null,8,["itemsSelected"])):h("",!0)]),t("div",R,[t("div",W,[t("div",X,[s(b(q),{class:"w-5 h-5 text-gray-500 dark:text-gray-400"})]),v(t("input",{type:"text","onUpdate:modelValue":i[0]||(i[0]=e=>u.value=e),class:"block p-2 pl-8 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",placeholder:"Search for items"},null,512),[[D,u.value]])])])]),s(n,{class:"mt-2","rows-per-page":k.value,"show-index":"",alternating:"","border-cell":"","buttons-pagination":"",headers:$,items:o,"search-field":y.value,"search-value":u.value,"items-selected":l.value,"onUpdate:itemsSelected":i[1]||(i[1]=e=>l.value=e)},{expand:d(e=>[t("div",null,[Y,_(" "+g(e.items),1)])]),"empty-message":d(()=>[s(F)]),"item-actions":d(e=>[t("div",Z,[v(s(A,{title:e.name,item:e,onOpen:B=>e=e},null,8,["title","item","onOpen"]),[[x,r.can(["slider item update"])]]),v(s(C,{title:e.name,item:e,onOpen:B=>e=e},null,8,["title","item","onOpen"]),[[x,r.can(["slider item delete"])]])])]),_:1},8,["rows-per-page","items","search-field","search-value","items-selected"])])])])]),_:1},8,["title"])}}};export{Be as default};
