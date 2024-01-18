import{h as V,r as d,D as u,q as N,o as p,c as f,w as n,a as s,t as g,b as r,u as b,s as T,e as _,g as h,j as v,G as j,v as x}from"./app-029d3c12.js";import C from"./DeleteForce-fcf13a1e.js";import A from"./DeleteForceBulk-eeea4ab8.js";import E from"./DeleteForceAll-e7f1a7f2.js";import P from"./Restore-023d3239.js";import U from"./RestoreBulk-e78583c5.js";import q from"./RestoreAll-701871e6.js";import{f as w}from"./dateHelper-c252884b.js";import{r as F,_ as G}from"./Empty-cfe29f6a.js";import{_ as M}from"./AppLayout-b96ade91.js";import{_ as z}from"./Breadcrumb-b1a05033.js";import{r as H}from"./BackwardIcon-8f8cff18.js";import"./ConfirmationModal-3e9220f0.js";import"./Modal-0faaa9fe.js";import"./ActionButton-0db8adf7.js";import"./DangerButton-d1685ae6.js";import"./SecondaryButton-c3ca0618.js";import"./TrashIcon-51127647.js";import"./PrimaryButton-4a147dbe.js";import"./ArrowUturnLeftIcon-612d48c4.js";import"./empty-bbb98b41.js";import"./index-c4e474fb.js";import"./Toast-047c208b.js";/* empty css                                              */import"./_plugin-vue_export-helper-c27b6911.js";import"./XMarkIcon-e53425f1.js";import"./ApplicationLogo-ead9b018.js";import"./SwitchLocale-2e53f119.js";/* empty css                                               */const J={class:"py-6"},K={class:"max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-4"},L={class:"bg-white dark:bg-slate-800 overflow-hidden shadow sm:rounded p-2"},Q={class:"flex justify-between"},R={class:"flex shrink-0 rounded overflow-hidden"},W={class:"flex flex-column sm:flex-row flex-wrap space-y-4 sm:space-y-0 items-center gap-2"},X={class:"relative"},Y={class:"absolute inset-y-0 left-2 rtl:inset-r-0 rtl:right-0 flex items-center ps-3 pointer-events-none"},Z=s("strong",null,"Items: ",-1),ee={class:"flex w-fit rounded overflow-hidden"},Ve={__name:"Trash",props:{title:String,menus:Object,breadcrumbs:Object},setup(k){const m=k,o=V(m.menus),i=d([]),y=d(10),$=d(""),c=d(""),I=[{text:"Name",value:"name",sortable:!0},{text:"Position",value:"position",sortable:!0},{text:"Created",value:"created_at",sortable:!0,format:t=>w(new Date(t))},{text:"Updated",value:"updated_at",sortable:!0,format:t=>w(new Date(t))},{text:"Action",value:"actions"}],S=t=>{const a=o.findIndex(l=>l.id===t);a!==-1&&o.splice(a,1)},D=t=>{t.forEach(a=>{const l=o.findIndex(e=>e.id===a);l!==-1&&o.splice(l,1)})},B=()=>{o.splice(0,o.length)};return u("removeItem",S),u("removeBulkItems",D),u("removeAllItems",B),(t,a)=>{const l=N("EasyDataTable");return p(),f(M,{title:m.title},{title:n(()=>[s("span",null,g(m.title),1)]),default:n(()=>[r(z,{breadcrumbs:m.breadcrumbs},null,8,["breadcrumbs"]),s("div",J,[s("div",K,[s("div",L,[s("div",Q,[s("div",R,[r(b(T),{class:"inline-flex gap-2 items-center px-3 py-1.5 bg-blue-500 dark:bg-blue-500 font-semibold text-xs text-white tracking-widest hover:bg-blue-600 dark:hover:bg-blue-400 focus:bg-blue-500 dark:focus:bg-blue-400 active:bg-blue-500/60 dark:active:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-slate-800 transition ease-in-out duration-150 h-8",href:t.route("menus.index")},{default:n(()=>[r(b(H),{class:"w-5 h-5"}),_(" Back ")]),_:1},8,["href"]),r(q),r(E),i.value.length!=0&&t.can(["menu delete"])?(p(),f(U,{key:0,itemsSelected:i.value,title:"Items"},null,8,["itemsSelected"])):h("",!0),i.value.length!=0&&t.can(["menu delete"])?(p(),f(A,{key:1,itemsSelected:i.value,title:"Items"},null,8,["itemsSelected"])):h("",!0)]),s("div",W,[s("div",X,[s("div",Y,[r(b(F),{class:"w-5 h-5 text-gray-500 dark:text-gray-400"})]),v(s("input",{type:"text","onUpdate:modelValue":a[0]||(a[0]=e=>c.value=e),class:"block p-2 pl-8 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",placeholder:"Search for items"},null,512),[[j,c.value]])])])]),r(l,{class:"mt-2","rows-per-page":y.value,"show-index":"",alternating:"","border-cell":"","buttons-pagination":"",headers:I,items:o,"search-field":$.value,"search-value":c.value,"items-selected":i.value,"onUpdate:itemsSelected":a[1]||(a[1]=e=>i.value=e)},{expand:n(e=>[s("div",null,[Z,_(" "+g(e.items),1)])]),"empty-message":n(()=>[r(G)]),"item-actions":n(e=>[s("div",ee,[v(r(P,{title:e.name,item:e,onOpen:O=>e=e},null,8,["title","item","onOpen"]),[[x,t.can(["menu update"])]]),v(r(C,{title:e.name,item:e,onOpen:O=>e=e},null,8,["title","item","onOpen"]),[[x,t.can(["menu delete"])]])])]),_:1},8,["rows-per-page","items","search-field","search-value","items-selected"])])])])]),_:1},8,["title"])}}};export{Ve as default};
