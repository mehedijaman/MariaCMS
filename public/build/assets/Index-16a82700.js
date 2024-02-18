import{_ as v}from"./AppLayout-ad179e80.js";import{h as k,y as c,D as i,o as w,c as I,w as b,a as r,t as $,b as o,u as d,e as n,s as B}from"./app-c4f5b0ab.js";import N from"./Published-ce016024.js";import V from"./Unpublished-9daabe11.js";import j from"./Draft-66c02b44.js";import{_ as O}from"./Breadcrumb-4ee1626d.js";import{r as S,a as T,b as C}from"./BriefcaseIcon-01228b12.js";import{r as E}from"./TrashIcon-1a6eb028.js";import"./EnvelopeIcon-cb4659d4.js";/* empty css                                              */import"./_plugin-vue_export-helper-c27b6911.js";import"./XMarkIcon-c9c2e3cc.js";import"./ApplicationLogo-6915d697.js";import"./SwitchLocale-0d5c3757.js";import"./index-c1ed15bb.js";import"./TagIcon-23c823f5.js";import"./StarIcon-c588ff73.js";/* empty css                                               */import"./ckeditor-6a63ee7f.js";import"./Delete-ec4694ac.js";import"./ConfirmationModal-9be1e3e5.js";import"./Modal-cad72a07.js";import"./ActionButton-841fd9c8.js";import"./DangerButton-84c9d29b.js";import"./SecondaryButton-73139509.js";import"./DeleteBulk-6509a535.js";import"./Empty-e3c566e9.js";import"./empty-bbb98b41.js";import"./PlusIcon-b2df1b43.js";import"./PencilIcon-3be4436b.js";const P={class:"py-4"},U={class:"max-w-7xl mx-auto sm:px-6 lg:px-4 space-y-4"},q={class:"bg-white dark:bg-slate-800 overflow-hidden shadow sm:rounded"},z={class:"border-b border-gray-200 dark:border-gray-700"},A={class:"flex flex-wrap -mb-px text-sm font-medium text-center",id:"default-tab","data-tabs-toggle":"#default-tab-content",role:"tablist"},F={class:"me-2",role:"presentation"},G={class:"inline-flex gap-2 p-4 border-b-2 rounded-t-lg",id:"published-tab","data-tabs-target":"#published",type:"button",role:"tab","aria-controls":"published","aria-selected":"false"},H={class:"me-2",role:"presentation"},J={class:"inline-flex gap-2 p-4 border-b-2 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300",id:"unpublished-tab","data-tabs-target":"#unpublished",type:"button",role:"tab","aria-controls":"unpublished","aria-selected":"false"},K={class:"me-2",role:"presentation"},L={class:"inline-flex gap-2 p-4 border-b-2 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300",id:"draft-tab","data-tabs-target":"#draft",type:"button",role:"tab","aria-controls":"draft","aria-selected":"false"},M={class:"me-2",role:"presentation"},Q={id:"default-tab-content"},R={class:"hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800",id:"published",role:"tabpanel","aria-labelledby":"published-tab"},W={class:"hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800",id:"unpublished",role:"tabpanel","aria-labelledby":"unpublished-tab"},X={class:"hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800",id:"draft",role:"tabpanel","aria-labelledby":"draft-tab"},Ne={__name:"Index",props:{title:String,pages:Object,breadcrumbs:Object},setup(m){const l=m,e=k(l.pages),g=c(()=>e.filter(t=>t.status==!0&&t.deleted_at==null)),u=c(()=>e.filter(t=>t.status==!1&&t.deleted_at==null)),h=c(()=>e.filter(t=>t.status==null&&t.deleted_at==null)),_=t=>{e.push(t)},f=t=>{const a=e.findIndex(s=>s.id===t);a!==-1&&e.splice(a,1)},x=t=>{t.forEach(a=>{const s=e.findIndex(p=>p.id===a);s!==-1&&e.splice(s,1)})},y=(t,a)=>{const s=e.findIndex(p=>p.id===t);s!==-1&&(e[s].name=a.name,e[s].slug=a.slug,e[s].content=a.content,e[s].excerpt=a.excerpt,e[s].parent=a.parent,e[s].password=a.password,e[s].status=a.status,e[s].meta_title=a.meta_title,e[s].meta_description=a.meta_description,e[s].meta_keywords=a.meta_keywords)};return i("pages",e),i("published",g),i("unpublished",u),i("draft",h),i("addItem",_),i("removeItem",f),i("removeBulkItems",x),i("updateItem",y),(t,a)=>(w(),I(v,{title:l.title},{title:b(()=>[r("span",null,$(l.title),1)]),default:b(()=>[o(O,{breadcrumbs:l.breadcrumbs},null,8,["breadcrumbs"]),r("div",P,[r("div",U,[r("div",q,[r("div",z,[r("ul",A,[r("li",F,[r("button",G,[o(d(S),{class:"w-5 h-5 text-gray-400 group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-300"}),n(" Published ")])]),r("li",H,[r("button",J,[o(d(T),{class:"w-5 h-5 text-gray-400 group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-300"}),n(" Unpublished ")])]),r("li",K,[r("button",L,[o(d(C),{class:"w-5 h-5 text-gray-400 group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-300"}),n(" Draft ")])]),r("li",M,[o(d(B),{href:t.route("pages.trash"),class:"inline-flex gap-2 p-4 border-none rounded-t-lg text-gray-400 hover:text-gray-600 group-hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300",type:"button"},{default:b(()=>[o(d(E),{class:"w-5 h-5 text-gray-400 group-hover:text-gray-600 dark:text-gray-500 dark:group-hover:text-gray-300"}),n(" Trash ")]),_:1},8,["href"])])])]),r("div",Q,[r("div",R,[o(N)]),r("div",W,[o(V)]),r("div",X,[o(j)])])])])])]),_:1},8,["title"]))}};export{Ne as default};
