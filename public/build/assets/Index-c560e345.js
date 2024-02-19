import{_ as m}from"./AppLayout-b6d474c1.js";import _ from"./Published-0d8a10d1.js";import y from"./Unpublished-83503af9.js";import f from"./Draft-f2f1bb9f.js";import{h as x,y as l,D as s,o as v,c as k,w as n,a as t,t as w,b as r,u as d,e as i,s as $}from"./app-d9a7eb7a.js";import{_ as B}from"./Breadcrumb-0f1306a2.js";import{r as D,a as I,b as N}from"./BriefcaseIcon-1cf1e6ff.js";import{r as V}from"./TrashIcon-bd67dff6.js";import"./EnvelopeIcon-2012792a.js";/* empty css                                              */import"./_plugin-vue_export-helper-c27b6911.js";import"./XMarkIcon-ece63d39.js";import"./ApplicationLogo-b1fb8e97.js";import"./SwitchLocale-e1a0094f.js";import"./index-69bf5e6b.js";import"./TagIcon-9e396b28.js";import"./StarIcon-6568bc52.js";/* empty css                                               */import"./Create-03d56d59.js";import"./DialogModal-6f025864.js";import"./Modal-2710b0e7.js";import"./InputError-19c360d7.js";import"./InputLabel-5e293a64.js";import"./PrimaryButton-a904e7d6.js";import"./SecondaryButton-cb1663f8.js";import"./TextInput-0d35b9b5.js";import"./TextAreaInput-4c0f8a95.js";import"./PlusIcon-367248f7.js";import"./Edit-8afd7ff4.js";import"./ActionButton-db588b65.js";import"./PencilIcon-090e16d6.js";import"./Delete-ed95c263.js";import"./ConfirmationModal-d6115ef6.js";import"./DangerButton-8b979788.js";import"./DeleteBulk-4db166bb.js";import"./Empty-54e01f86.js";import"./empty-bbb98b41.js";const j={class:"py-4"},O={class:"max-w-7xl mx-auto sm:px-6 lg:px-4 space-y-4"},S={class:"bg-white dark:bg-slate-800 overflow-hidden shadow sm:rounded"},T={class:"border-b border-gray-200 dark:border-gray-700"},C={class:"flex flex-wrap -mb-px text-sm font-medium text-center",id:"default-tab","data-tabs-toggle":"#default-tab-content",role:"tablist"},E={class:"me-2",role:"presentation"},P={class:"inline-flex gap-2 p-4 border-b-2 rounded-t-lg",id:"published-tab","data-tabs-target":"#published",type:"button",role:"tab","aria-controls":"published","aria-selected":"false"},U={class:"me-2",role:"presentation"},q={class:"inline-flex gap-2 p-4 border-b-2 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300",id:"unpublished-tab","data-tabs-target":"#unpublished",type:"button",role:"tab","aria-controls":"unpublished","aria-selected":"false"},z={class:"me-2",role:"presentation"},A={class:"inline-flex gap-2 p-4 border-b-2 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300",id:"draft-tab","data-tabs-target":"#draft",type:"button",role:"tab","aria-controls":"draft","aria-selected":"false"},F={class:"me-2",role:"presentation"},G={id:"default-tab-content"},H={class:"hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800",id:"published",role:"tabpanel","aria-labelledby":"published-tab"},J={class:"hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800",id:"unpublished",role:"tabpanel","aria-labelledby":"unpublished-tab"},K={class:"hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800",id:"draft",role:"tabpanel","aria-labelledby":"draft-tab"},L=t("div",{class:"hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800",id:"trash",role:"tabpanel","aria-labelledby":"trash-tab"},null,-1),jt={__name:"Index",props:{title:String,important_links:Object,breadcrumbs:Object},setup(b){const a=b,o=x(a.important_links),u=l(()=>o.filter(e=>e.status==!0&&e.deleted_at==null)),c=l(()=>o.filter(e=>e.status==!1&&e.deleted_at==null)),g=l(()=>o.filter(e=>e.status==null&&e.deleted_at==null)),h=e=>{o.length=0,e.forEach(p=>o.push(p))};return s("title",a.title),s("published",u),s("unpublished",c),s("draft",g),s("updateItems",h),(e,p)=>(v(),k(m,{title:a.title},{title:n(()=>[t("span",null,w(a.title),1)]),default:n(()=>[r(B,{breadcrumbs:a.breadcrumbs},null,8,["breadcrumbs"]),t("div",j,[t("div",O,[t("div",S,[t("div",T,[t("ul",C,[t("li",E,[t("button",P,[r(d(D),{class:"w-5 h-5 text-gray-400 group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-300"}),i(" Published ")])]),t("li",U,[t("button",q,[r(d(I),{class:"w-5 h-5 text-gray-400 group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-300"}),i(" Unpublished ")])]),t("li",z,[t("button",A,[r(d(N),{class:"w-5 h-5 text-gray-400 group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-300"}),i(" Draft ")])]),t("li",F,[r(d($),{href:e.route("important-links.trash"),class:"inline-flex gap-2 p-4 border-none rounded-t-lg text-gray-400 hover:text-gray-600 group-hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300",type:"button"},{default:n(()=>[r(d(V),{class:"w-5 h-5 text-gray-400 group-hover:text-gray-600 dark:text-gray-500 dark:group-hover:text-gray-300"}),i(" Trash ")]),_:1},8,["href"])])])]),t("div",G,[t("div",H,[r(_)]),t("div",J,[r(y)]),t("div",K,[r(f)]),L])])])])]),_:1},8,["title"]))}};export{jt as default};
