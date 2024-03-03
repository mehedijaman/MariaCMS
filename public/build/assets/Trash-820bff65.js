import{h as B,r as m,D as f,q as O,o as u,c as g,w as n,a as r,t as V,b as s,u as b,s as C,e as N,g as v,j as _,G as T,d as j,v as h}from"./app-89e89ab1.js";import E from"./DeleteForce-f0cbdb1a.js";import A from"./DeleteForceBulk-f35743f2.js";import P from"./DeleteForceAll-6e6e8163.js";import U from"./Restore-323cb3c3.js";import M from"./RestoreBulk-eb086e77.js";import q from"./RestoreAll-f4e87587.js";import{f as x}from"./dateHelper-c252884b.js";import{r as F,_ as G}from"./Empty-4442ffd9.js";import{_ as z}from"./AppLayout-0e895c8d.js";import{_ as H}from"./Breadcrumb-58052a84.js";import{r as J}from"./BackwardIcon-2f2c9339.js";import"./ConfirmationModal-77244361.js";import"./Modal-75790771.js";import"./ActionButton-80021745.js";import"./DangerButton-21815e66.js";import"./SecondaryButton-f89467d6.js";import"./TrashIcon-9e90bfa8.js";import"./PrimaryButton-02d1171f.js";import"./ArrowUturnLeftIcon-cf94ef6c.js";import"./empty-bbb98b41.js";import"./index-3e88fe63.js";import"./EnvelopeIcon-89a6aad5.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./XMarkIcon-712abe92.js";import"./ApplicationLogo-86413425.js";import"./SwitchLocale-aa45ba92.js";import"./TagIcon-debe317c.js";import"./StarIcon-1429ebc1.js";const K={class:"py-6"},L={class:"max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-4"},Q={class:"bg-white dark:bg-slate-800 overflow-hidden shadow sm:rounded p-2"},R={class:"flex justify-between"},W={class:"flex shrink-0 rounded overflow-hidden"},X={class:"flex flex-column sm:flex-row flex-wrap space-y-4 sm:space-y-0 items-center gap-2"},Y={class:"relative"},Z={class:"absolute inset-y-0 left-2 rtl:inset-r-0 rtl:right-0 flex items-center ps-3 pointer-events-none"},ee=["src"],te={class:"flex w-fit rounded overflow-hidden"},Ce={__name:"Trash",props:{title:String,product_categories:Object,breadcrumbs:Object},setup(y){const c=y,o=B(c.product_categories),i=m([]),w=m(10),k=m(""),p=m(""),$=[{text:"Media",value:"media",sortable:!0},{text:"Name",value:"name",sortable:!0},{text:"Created",value:"created_at",sortable:!0,format:t=>x(new Date(t))},{text:"Updated",value:"updated_at",sortable:!0,format:t=>x(new Date(t))},{text:"Action",value:"actions"}],I=t=>{const a=o.findIndex(l=>l.id===t);a!==-1&&o.splice(a,1)},S=t=>{t.forEach(a=>{const l=o.findIndex(e=>e.id===a);l!==-1&&o.splice(l,1)})},D=()=>{o.splice(0,o.length)};return f("removeItem",I),f("removeBulkItems",S),f("removeAllItems",D),(t,a)=>{const l=O("EasyDataTable");return u(),g(z,{title:c.title},{title:n(()=>[r("span",null,V(c.title),1)]),default:n(()=>[s(H,{breadcrumbs:c.breadcrumbs},null,8,["breadcrumbs"]),r("div",K,[r("div",L,[r("div",Q,[r("div",R,[r("div",W,[s(b(C),{class:"inline-flex gap-2 items-center px-3 py-1.5 bg-blue-500 dark:bg-blue-500 font-semibold text-xs text-white tracking-widest hover:bg-blue-600 dark:hover:bg-blue-400 focus:bg-blue-500 dark:focus:bg-blue-400 active:bg-blue-500/60 dark:active:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-slate-800 transition ease-in-out duration-150 h-8",href:t.route("product-categories.index")},{default:n(()=>[s(b(J),{class:"w-5 h-5"}),N(" Back ")]),_:1},8,["href"]),s(q),s(P),i.value.length!=0&&t.can(["product category delete"])?(u(),g(M,{key:0,itemsSelected:i.value,title:"Items"},null,8,["itemsSelected"])):v("",!0),i.value.length!=0&&t.can(["product category delete"])?(u(),g(A,{key:1,itemsSelected:i.value,title:"Items"},null,8,["itemsSelected"])):v("",!0)]),r("div",X,[r("div",Y,[r("div",Z,[s(b(F),{class:"w-5 h-5 text-gray-500 dark:text-gray-400"})]),_(r("input",{type:"text","onUpdate:modelValue":a[0]||(a[0]=e=>p.value=e),class:"block p-2 pl-8 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",placeholder:"Search for items"},null,512),[[T,p.value]])])])]),s(l,{class:"mt-2","rows-per-page":w.value,"show-index":"",alternating:"","border-cell":"","buttons-pagination":"",headers:$,items:o,"search-field":k.value,"search-value":p.value,"items-selected":i.value,"onUpdate:itemsSelected":a[1]||(a[1]=e=>i.value=e)},{"item-media":n(e=>{var d;return[e.media[0]?(u(),j("img",{key:0,src:(d=e.media[0])==null?void 0:d.original_url,alt:"Product Category",class:"w-10 h-10 rounded-sm"},null,8,ee)):v("",!0)]}),"empty-message":n(()=>[s(G)]),"item-actions":n(e=>[r("div",te,[_(s(U,{title:e.name,item:e,onOpen:d=>e=e},null,8,["title","item","onOpen"]),[[h,t.can(["product category update"])]]),_(s(E,{title:e.name,item:e,onOpen:d=>e=e},null,8,["title","item","onOpen"]),[[h,t.can(["product category delete"])]])])]),_:1},8,["rows-per-page","items","search-field","search-value","items-selected"])])])])]),_:1},8,["title"])}}};export{Ce as default};
