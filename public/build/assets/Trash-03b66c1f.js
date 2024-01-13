import{h as V,r as c,C as u,q as C,o as p,c as f,w as n,a as t,t as v,b as s,u as b,s as D,e as h,g as _,j as g,E as N,v as x}from"./app-2598048d.js";import T from"./DeleteForce-bbbc4f19.js";import j from"./DeleteForceBulk-9e1a616a.js";import E from"./DeleteForceAll-5ba8c864.js";import A from"./Restore-f4d60328.js";import P from"./RestoreBulk-401a65cb.js";import U from"./RestoreAll-dde29dc2.js";import{r as q,_ as F}from"./Empty-189c9ddc.js";import{_ as M}from"./AppLayout-d6195b27.js";import{_ as R}from"./Breadcrumb-fb78a766.js";import{r as z}from"./BackwardIcon-da2554b2.js";import"./ConfirmationModal-ff1f0b7d.js";import"./Modal-aa19319a.js";import"./ActionButton-c7fad4fa.js";import"./DangerButton-fc893115.js";import"./SecondaryButton-a4f6ae6f.js";import"./TrashIcon-3ac790d6.js";import"./PrimaryButton-7f18ea50.js";import"./ArrowUturnLeftIcon-406e2d21.js";import"./empty-bbb98b41.js";import"./index-03b8a18a.js";import"./Toast-03eae3dd.js";/* empty css                                              */import"./_plugin-vue_export-helper-c27b6911.js";import"./XMarkIcon-eb784676.js";import"./ApplicationLogo-d7439a2b.js";import"./SwitchLocale-1d554e12.js";/* empty css                                               */const G={class:"py-6"},H={class:"max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-4"},J={class:"bg-white dark:bg-slate-800 overflow-hidden shadow sm:rounded p-2"},K={class:"flex justify-between"},L={class:"flex shrink-0 rounded overflow-hidden"},Q={class:"flex flex-column sm:flex-row flex-wrap space-y-4 sm:space-y-0 items-center gap-2"},W={class:"relative"},X={class:"absolute inset-y-0 left-2 rtl:inset-r-0 rtl:right-0 flex items-center ps-3 pointer-events-none"},Y=t("strong",null,"Items: ",-1),Z={class:"flex w-fit rounded overflow-hidden"},Oe={__name:"Trash",props:{title:String,testimonials:Object,breadcrumbs:Object},setup(w){const m=w,r=V(m.testimonials),i=c([]),y=c(10),k=c(""),d=c(""),$=[{text:"Name",value:"name",sortable:!0},{text:"Designation",value:"designation",sortable:!0},{text:"Company",value:"company",sortable:!0},{text:"Rating",value:"rating",sortable:!0},{text:"Action",value:"actions"}],I=a=>{const o=r.findIndex(l=>l.id===a);o!==-1&&r.splice(o,1)},S=a=>{a.forEach(o=>{const l=r.findIndex(e=>e.id===o);l!==-1&&r.splice(l,1)})},B=()=>{r.splice(0,r.length)};return u("removeItem",I),u("removeBulkItems",S),u("removeAllItems",B),(a,o)=>{const l=C("EasyDataTable");return p(),f(M,{title:m.title},{title:n(()=>[t("span",null,v(m.title),1)]),default:n(()=>[s(R,{breadcrumbs:m.breadcrumbs},null,8,["breadcrumbs"]),t("div",G,[t("div",H,[t("div",J,[t("div",K,[t("div",L,[s(b(D),{class:"inline-flex gap-2 items-center px-3 py-1.5 bg-blue-500 dark:bg-blue-500 font-semibold text-xs text-white tracking-widest hover:bg-blue-600 dark:hover:bg-blue-400 focus:bg-blue-500 dark:focus:bg-blue-400 active:bg-blue-500/60 dark:active:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-slate-800 transition ease-in-out duration-150 h-8",href:a.route("testimonials.index")},{default:n(()=>[s(b(z),{class:"w-5 h-5"}),h(" Back ")]),_:1},8,["href"]),s(U),s(E),i.value.length!=0&&a.can(["message delete"])?(p(),f(P,{key:0,itemsSelected:i.value,title:"Items"},null,8,["itemsSelected"])):_("",!0),i.value.length!=0&&a.can(["message delete"])?(p(),f(j,{key:1,itemsSelected:i.value,title:"Items"},null,8,["itemsSelected"])):_("",!0)]),t("div",Q,[t("div",W,[t("div",X,[s(b(q),{class:"w-5 h-5 text-gray-500 dark:text-gray-400"})]),g(t("input",{type:"text","onUpdate:modelValue":o[0]||(o[0]=e=>d.value=e),class:"block p-2 pl-8 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",placeholder:"Search for items"},null,512),[[N,d.value]])])])]),s(l,{class:"mt-2","rows-per-page":y.value,"show-index":"",alternating:"","border-cell":"","buttons-pagination":"",headers:$,items:r,"search-field":k.value,"search-value":d.value,"items-selected":i.value,"onUpdate:itemsSelected":o[1]||(o[1]=e=>i.value=e)},{expand:n(e=>[t("div",null,[Y,h(" "+v(e.items),1)])]),"empty-message":n(()=>[s(F)]),"item-actions":n(e=>[t("div",Z,[g(s(A,{title:e.name,item:e,onOpen:O=>e=e},null,8,["title","item","onOpen"]),[[x,a.can(["message update"])]]),g(s(T,{title:e.name,item:e,onOpen:O=>e=e},null,8,["title","item","onOpen"]),[[x,a.can(["message delete"])]])])]),_:1},8,["rows-per-page","items","search-field","search-value","items-selected"])])])])]),_:1},8,["title"])}}};export{Oe as default};
