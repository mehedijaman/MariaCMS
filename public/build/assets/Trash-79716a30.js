import{h as V,r as c,C as u,q as N,o as p,c as f,w as n,a as t,t as v,b as s,u as b,s as T,e as h,g as _,j as g,E as j,v as x}from"./app-0add7d3b.js";import C from"./DeleteForce-b0f4d91a.js";import D from"./DeleteForceBulk-0d10d4a3.js";import E from"./DeleteForceAll-4cfb6fdb.js";import A from"./Restore-be0ccf88.js";import P from"./RestoreBulk-e08dceff.js";import U from"./RestoreAll-6b9322a8.js";import{r as q,_ as F}from"./Empty-9e9ab285.js";import{_ as M}from"./AppLayout-7617d952.js";import{_ as z}from"./Breadcrumb-0b36a753.js";import{r as G}from"./BackwardIcon-1b035e1f.js";import"./ConfirmationModal-58ca8c19.js";import"./Modal-600a46a3.js";import"./ActionButton-21b09c7e.js";import"./DangerButton-b98c492e.js";import"./SecondaryButton-d46d9a20.js";import"./TrashIcon-67035a6d.js";import"./PrimaryButton-156a4b37.js";import"./ArrowUturnLeftIcon-43aa676a.js";import"./empty-bbb98b41.js";import"./index-c33f0066.js";import"./Toast-67717151.js";/* empty css                                              */import"./_plugin-vue_export-helper-c27b6911.js";import"./XMarkIcon-48a26f73.js";import"./ApplicationLogo-11a5ac5e.js";import"./SwitchLocale-00a50926.js";/* empty css                                               */const H={class:"py-6"},J={class:"max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-4"},K={class:"bg-white dark:bg-slate-800 overflow-hidden shadow sm:rounded p-2"},L={class:"flex justify-between"},Q={class:"flex shrink-0 rounded overflow-hidden"},R={class:"flex flex-column sm:flex-row flex-wrap space-y-4 sm:space-y-0 items-center gap-2"},W={class:"relative"},X={class:"absolute inset-y-0 left-2 rtl:inset-r-0 rtl:right-0 flex items-center ps-3 pointer-events-none"},Y=t("strong",null,"Items: ",-1),Z={class:"flex w-fit rounded overflow-hidden"},Oe={__name:"Trash",props:{title:String,sliders:Object,breadcrumbs:Object},setup(y){const d=y,o=V(d.sliders),l=c([]),w=c(10),k=c(""),m=c(""),$=[{text:"Name",value:"name",sortable:!0},{text:"Slug",value:"slug",sortable:!0},{text:"Action",value:"actions"}],I=r=>{const a=o.findIndex(i=>i.id===r);a!==-1&&o.splice(a,1)},S=r=>{r.forEach(a=>{const i=o.findIndex(e=>e.id===a);i!==-1&&o.splice(i,1)})},B=()=>{o.splice(0,o.length)};return u("removeItem",I),u("removeBulkItems",S),u("removeAllItems",B),(r,a)=>{const i=N("EasyDataTable");return p(),f(M,{title:d.title},{title:n(()=>[t("span",null,v(d.title),1)]),default:n(()=>[s(z,{breadcrumbs:d.breadcrumbs},null,8,["breadcrumbs"]),t("div",H,[t("div",J,[t("div",K,[t("div",L,[t("div",Q,[s(b(T),{class:"inline-flex gap-2 items-center px-3 py-1.5 bg-blue-500 dark:bg-blue-500 font-semibold text-xs text-white tracking-widest hover:bg-blue-600 dark:hover:bg-blue-400 focus:bg-blue-500 dark:focus:bg-blue-400 active:bg-blue-500/60 dark:active:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-slate-800 transition ease-in-out duration-150 h-8",href:r.route("sliders.index")},{default:n(()=>[s(b(G),{class:"w-5 h-5"}),h(" Back ")]),_:1},8,["href"]),s(U),s(E),l.value.length!=0&&r.can(["gallery delete"])?(p(),f(P,{key:0,itemsSelected:l.value,title:"Items"},null,8,["itemsSelected"])):_("",!0),l.value.length!=0&&r.can(["gallery delete"])?(p(),f(D,{key:1,itemsSelected:l.value,title:"Items"},null,8,["itemsSelected"])):_("",!0)]),t("div",R,[t("div",W,[t("div",X,[s(b(q),{class:"w-5 h-5 text-gray-500 dark:text-gray-400"})]),g(t("input",{type:"text","onUpdate:modelValue":a[0]||(a[0]=e=>m.value=e),class:"block p-2 pl-8 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",placeholder:"Search for items"},null,512),[[j,m.value]])])])]),s(i,{class:"mt-2","rows-per-page":w.value,"show-index":"",alternating:"","border-cell":"","buttons-pagination":"",headers:$,items:o,"search-field":k.value,"search-value":m.value,"items-selected":l.value,"onUpdate:itemsSelected":a[1]||(a[1]=e=>l.value=e)},{expand:n(e=>[t("div",null,[Y,h(" "+v(e.items),1)])]),"empty-message":n(()=>[s(F)]),"item-actions":n(e=>[t("div",Z,[g(s(A,{title:e.name,item:e,onOpen:O=>e=e},null,8,["title","item","onOpen"]),[[x,r.can(["gallery update"])]]),g(s(C,{title:e.name,item:e,onOpen:O=>e=e},null,8,["title","item","onOpen"]),[[x,r.can(["gallery delete"])]])])]),_:1},8,["rows-per-page","items","search-field","search-value","items-selected"])])])])]),_:1},8,["title"])}}};export{Oe as default};
