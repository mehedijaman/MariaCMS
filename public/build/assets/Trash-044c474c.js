import{h as V,r as d,D as u,q as N,o as p,c as f,w as n,a as s,t as v,b as r,u as b,s as T,e as _,g as h,j as g,G as j,v as x}from"./app-9d6b1113.js";import C from"./DeleteForce-197f0f46.js";import A from"./DeleteForceBulk-861f9d06.js";import E from"./DeleteForceAll-babd3f70.js";import U from"./Restore-4649037f.js";import P from"./RestoreBulk-f04e2391.js";import q from"./RestoreAll-3b1ba1a4.js";import{f as w}from"./dateHelper-c252884b.js";import{r as F,_ as G}from"./Empty-4e9272fb.js";import{_ as M}from"./AppLayout-a9b239e4.js";import{_ as z}from"./Breadcrumb-823e1307.js";import{r as H}from"./BackwardIcon-87217261.js";import"./ConfirmationModal-0dbceda6.js";import"./Modal-a36d6e9c.js";import"./ActionButton-1152b21c.js";import"./DangerButton-187eb523.js";import"./SecondaryButton-4005d2d9.js";import"./TrashIcon-8f8d1924.js";import"./PrimaryButton-1e7e16a5.js";import"./ArrowUturnLeftIcon-e530f38a.js";import"./empty-bbb98b41.js";import"./index-bc83c8ef.js";import"./Toast-3e56a37b.js";/* empty css                                              */import"./_plugin-vue_export-helper-c27b6911.js";import"./XMarkIcon-df349cb6.js";import"./ApplicationLogo-44e79128.js";import"./SwitchLocale-63d6a5fa.js";import"./StarIcon-c35c7474.js";/* empty css                                               */const J={class:"py-6"},K={class:"max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-4"},L={class:"bg-white dark:bg-slate-800 overflow-hidden shadow sm:rounded p-2"},Q={class:"flex justify-between"},R={class:"flex shrink-0 rounded overflow-hidden"},W={class:"flex flex-column sm:flex-row flex-wrap space-y-4 sm:space-y-0 items-center gap-2"},X={class:"relative"},Y={class:"absolute inset-y-0 left-2 rtl:inset-r-0 rtl:right-0 flex items-center ps-3 pointer-events-none"},Z=s("strong",null,"Items: ",-1),ee={class:"flex w-fit rounded overflow-hidden"},Ne={__name:"Trash",props:{title:String,product_categories:Object,breadcrumbs:Object},setup(y){const c=y,a=V(c.product_categories),i=d([]),k=d(10),$=d(""),m=d(""),I=[{text:"Name",value:"name",sortable:!0},{text:"Created",value:"created_at",sortable:!0,format:t=>w(new Date(t))},{text:"Updated",value:"updated_at",sortable:!0,format:t=>w(new Date(t))},{text:"Action",value:"actions"}],S=t=>{const o=a.findIndex(l=>l.id===t);o!==-1&&a.splice(o,1)},D=t=>{t.forEach(o=>{const l=a.findIndex(e=>e.id===o);l!==-1&&a.splice(l,1)})},B=()=>{a.splice(0,a.length)};return u("removeItem",S),u("removeBulkItems",D),u("removeAllItems",B),(t,o)=>{const l=N("EasyDataTable");return p(),f(M,{title:c.title},{title:n(()=>[s("span",null,v(c.title),1)]),default:n(()=>[r(z,{breadcrumbs:c.breadcrumbs},null,8,["breadcrumbs"]),s("div",J,[s("div",K,[s("div",L,[s("div",Q,[s("div",R,[r(b(T),{class:"inline-flex gap-2 items-center px-3 py-1.5 bg-blue-500 dark:bg-blue-500 font-semibold text-xs text-white tracking-widest hover:bg-blue-600 dark:hover:bg-blue-400 focus:bg-blue-500 dark:focus:bg-blue-400 active:bg-blue-500/60 dark:active:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-slate-800 transition ease-in-out duration-150 h-8",href:t.route("product-categories.index")},{default:n(()=>[r(b(H),{class:"w-5 h-5"}),_(" Back ")]),_:1},8,["href"]),r(q),r(E),i.value.length!=0&&t.can(["product category delete"])?(p(),f(P,{key:0,itemsSelected:i.value,title:"Items"},null,8,["itemsSelected"])):h("",!0),i.value.length!=0&&t.can(["product category delete"])?(p(),f(A,{key:1,itemsSelected:i.value,title:"Items"},null,8,["itemsSelected"])):h("",!0)]),s("div",W,[s("div",X,[s("div",Y,[r(b(F),{class:"w-5 h-5 text-gray-500 dark:text-gray-400"})]),g(s("input",{type:"text","onUpdate:modelValue":o[0]||(o[0]=e=>m.value=e),class:"block p-2 pl-8 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",placeholder:"Search for items"},null,512),[[j,m.value]])])])]),r(l,{class:"mt-2","rows-per-page":k.value,"show-index":"",alternating:"","border-cell":"","buttons-pagination":"",headers:I,items:a,"search-field":$.value,"search-value":m.value,"items-selected":i.value,"onUpdate:itemsSelected":o[1]||(o[1]=e=>i.value=e)},{expand:n(e=>[s("div",null,[Z,_(" "+v(e.items),1)])]),"empty-message":n(()=>[r(G)]),"item-actions":n(e=>[s("div",ee,[g(r(U,{title:e.name,item:e,onOpen:O=>e=e},null,8,["title","item","onOpen"]),[[x,t.can(["product category update"])]]),g(r(C,{title:e.name,item:e,onOpen:O=>e=e},null,8,["title","item","onOpen"]),[[x,t.can(["product category delete"])]])])]),_:1},8,["rows-per-page","items","search-field","search-value","items-selected"])])])])]),_:1},8,["title"])}}};export{Ne as default};
