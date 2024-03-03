import{h as V,r as d,D as u,q as N,o as p,c as f,w as n,a as s,t as g,b as r,u as b,s as T,e as _,g as h,j as v,G as j,v as x}from"./app-89e89ab1.js";import C from"./DeleteForce-95cafb5c.js";import A from"./DeleteForceBulk-f924f743.js";import E from"./DeleteForceAll-790bac3f.js";import P from"./Restore-5de2cdec.js";import U from"./RestoreBulk-d96c0f96.js";import q from"./RestoreAll-4ac11cf8.js";import{f as w}from"./dateHelper-c252884b.js";import{r as F,_ as G}from"./Empty-4442ffd9.js";import{_ as M}from"./AppLayout-0e895c8d.js";import{_ as z}from"./Breadcrumb-58052a84.js";import{r as H}from"./BackwardIcon-2f2c9339.js";import"./ConfirmationModal-77244361.js";import"./Modal-75790771.js";import"./ActionButton-80021745.js";import"./DangerButton-21815e66.js";import"./SecondaryButton-f89467d6.js";import"./TrashIcon-9e90bfa8.js";import"./PrimaryButton-02d1171f.js";import"./ArrowUturnLeftIcon-cf94ef6c.js";import"./empty-bbb98b41.js";import"./index-3e88fe63.js";import"./EnvelopeIcon-89a6aad5.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./XMarkIcon-712abe92.js";import"./ApplicationLogo-86413425.js";import"./SwitchLocale-aa45ba92.js";import"./TagIcon-debe317c.js";import"./StarIcon-1429ebc1.js";const J={class:"py-6"},K={class:"max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-4"},L={class:"bg-white dark:bg-slate-800 overflow-hidden shadow sm:rounded p-2"},Q={class:"flex justify-between"},R={class:"flex shrink-0 rounded overflow-hidden"},W={class:"flex flex-column sm:flex-row flex-wrap space-y-4 sm:space-y-0 items-center gap-2"},X={class:"relative"},Y={class:"absolute inset-y-0 left-2 rtl:inset-r-0 rtl:right-0 flex items-center ps-3 pointer-events-none"},Z=s("strong",null,"Items: ",-1),ee={class:"flex w-fit rounded overflow-hidden"},Ve={__name:"Trash",props:{title:String,menus:Object,breadcrumbs:Object},setup(k){const m=k,o=V(m.menus),i=d([]),y=d(10),$=d(""),c=d(""),I=[{text:"Name",value:"name",sortable:!0},{text:"Position",value:"position",sortable:!0},{text:"Created",value:"created_at",sortable:!0,format:t=>w(new Date(t))},{text:"Updated",value:"updated_at",sortable:!0,format:t=>w(new Date(t))},{text:"Action",value:"actions"}],S=t=>{const a=o.findIndex(l=>l.id===t);a!==-1&&o.splice(a,1)},D=t=>{t.forEach(a=>{const l=o.findIndex(e=>e.id===a);l!==-1&&o.splice(l,1)})},B=()=>{o.splice(0,o.length)};return u("removeItem",S),u("removeBulkItems",D),u("removeAllItems",B),(t,a)=>{const l=N("EasyDataTable");return p(),f(M,{title:m.title},{title:n(()=>[s("span",null,g(m.title),1)]),default:n(()=>[r(z,{breadcrumbs:m.breadcrumbs},null,8,["breadcrumbs"]),s("div",J,[s("div",K,[s("div",L,[s("div",Q,[s("div",R,[r(b(T),{class:"inline-flex gap-2 items-center px-3 py-1.5 bg-blue-500 dark:bg-blue-500 font-semibold text-xs text-white tracking-widest hover:bg-blue-600 dark:hover:bg-blue-400 focus:bg-blue-500 dark:focus:bg-blue-400 active:bg-blue-500/60 dark:active:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-slate-800 transition ease-in-out duration-150 h-8",href:t.route("menus.index")},{default:n(()=>[r(b(H),{class:"w-5 h-5"}),_(" Back ")]),_:1},8,["href"]),r(q),r(E),i.value.length!=0&&t.can(["menu delete"])?(p(),f(U,{key:0,itemsSelected:i.value,title:"Items"},null,8,["itemsSelected"])):h("",!0),i.value.length!=0&&t.can(["menu delete"])?(p(),f(A,{key:1,itemsSelected:i.value,title:"Items"},null,8,["itemsSelected"])):h("",!0)]),s("div",W,[s("div",X,[s("div",Y,[r(b(F),{class:"w-5 h-5 text-gray-500 dark:text-gray-400"})]),v(s("input",{type:"text","onUpdate:modelValue":a[0]||(a[0]=e=>c.value=e),class:"block p-2 pl-8 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",placeholder:"Search for items"},null,512),[[j,c.value]])])])]),r(l,{class:"mt-2","rows-per-page":y.value,"show-index":"",alternating:"","border-cell":"","buttons-pagination":"",headers:I,items:o,"search-field":$.value,"search-value":c.value,"items-selected":i.value,"onUpdate:itemsSelected":a[1]||(a[1]=e=>i.value=e)},{expand:n(e=>[s("div",null,[Z,_(" "+g(e.items),1)])]),"empty-message":n(()=>[r(G)]),"item-actions":n(e=>[s("div",ee,[v(r(P,{title:e.name,item:e,onOpen:O=>e=e},null,8,["title","item","onOpen"]),[[x,t.can(["menu update"])]]),v(r(C,{title:e.name,item:e,onOpen:O=>e=e},null,8,["title","item","onOpen"]),[[x,t.can(["menu delete"])]])])]),_:1},8,["rows-per-page","items","search-field","search-value","items-selected"])])])])]),_:1},8,["title"])}}};export{Ve as default};
