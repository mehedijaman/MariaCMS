import{_ as m}from"./AppLayout-a085250a.js";import{h as _,y as l,D as o,o as f,c as y,w as n,a as t,t as x,b as r,u as d,e as i,s as v}from"./app-94de279c.js";import k from"./Published-325471b4.js";import w from"./Unpublished-095a0306.js";import $ from"./Draft-2b31692b.js";import{_ as B}from"./Breadcrumb-8cebe692.js";import{r as D,a as I,b as N}from"./BriefcaseIcon-d40064b9.js";import{r as V}from"./TrashIcon-f01fc569.js";import"./Toast-dd16d87a.js";/* empty css                                              */import"./_plugin-vue_export-helper-c27b6911.js";import"./XMarkIcon-2828e103.js";import"./ApplicationLogo-41115823.js";import"./SwitchLocale-cc927578.js";import"./index-5abade51.js";/* empty css                                               */import"./Create-de64d6ef.js";import"./DialogModal-c80aaba5.js";import"./Modal-38f1bd9c.js";import"./InputError-a749efb7.js";import"./InputLabel-7fb7a9c2.js";import"./PrimaryButton-e5fd0fc6.js";import"./SecondaryButton-7a5ed3a0.js";import"./TextInput-4b961fa3.js";import"./TextAreaInput-cc116e33.js";import"./textHelper-8b1dfc94.js";import"./PlusIcon-2fbf8ad0.js";import"./Edit-7c78efd7.js";import"./ActionButton-9b0479c1.js";import"./PencilIcon-a8f5f414.js";import"./Delete-60e01fc6.js";import"./ConfirmationModal-1d517c40.js";import"./DangerButton-094e60d3.js";import"./DeleteBulk-e9763988.js";import"./Empty-a0519d90.js";import"./empty-bbb98b41.js";const j={class:"py-4"},O={class:"max-w-7xl mx-auto sm:px-6 lg:px-4 space-y-2"},S={class:"bg-white dark:bg-slate-800 overflow-hidden shadow sm:rounded"},T={class:"border-b border-gray-200 dark:border-gray-700"},C={class:"flex flex-wrap -mb-px text-sm font-medium text-center",id:"default-tab","data-tabs-toggle":"#default-tab-content",role:"tablist"},E={class:"me-2",role:"presentation"},P={class:"inline-flex gap-2 p-4 border-b-2 rounded-t-lg",id:"published-tab","data-tabs-target":"#published",type:"button",role:"tab","aria-controls":"published","aria-selected":"false"},U={class:"me-2",role:"presentation"},q={class:"inline-flex gap-2 p-4 border-b-2 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300",id:"unpublished-tab","data-tabs-target":"#unpublished",type:"button",role:"tab","aria-controls":"unpublished","aria-selected":"false"},z={class:"me-2",role:"presentation"},A={class:"inline-flex gap-2 p-4 border-b-2 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300",id:"draft-tab","data-tabs-target":"#draft",type:"button",role:"tab","aria-controls":"draft","aria-selected":"false"},F={class:"me-2",role:"presentation"},G={id:"default-tab-content"},H={class:"hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800",id:"published",role:"tabpanel","aria-labelledby":"published-tab"},J={class:"hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800",id:"unpublished",role:"tabpanel","aria-labelledby":"unpublished-tab"},K={class:"hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800",id:"draft",role:"tabpanel","aria-labelledby":"draft-tab"},Nt={__name:"Index",props:{title:String,categories:Object,breadcrumbs:Object},setup(b){const s=b,a=_(s.categories),c=l(()=>a.filter(e=>e.status==!0&&e.deleted_at==null)),u=l(()=>a.filter(e=>e.status==!1&&e.deleted_at==null)),g=l(()=>a.filter(e=>e.status==null&&e.deleted_at==null)),h=e=>{a.length=0,e.forEach(p=>a.push(p))};return o("title",s.title),o("categories",a),o("published",c),o("unpublished",u),o("draft",g),o("updateItems",h),(e,p)=>(f(),y(m,{title:s.title},{title:n(()=>[t("span",null,x(s.title),1)]),default:n(()=>[r(B,{breadcrumbs:s.breadcrumbs},null,8,["breadcrumbs"]),t("div",j,[t("div",O,[t("div",S,[t("div",T,[t("ul",C,[t("li",E,[t("button",P,[r(d(D),{class:"w-5 h-5 text-gray-400 group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-300"}),i(" Published ")])]),t("li",U,[t("button",q,[r(d(I),{class:"w-5 h-5 text-gray-400 group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-300"}),i(" Unpublished ")])]),t("li",z,[t("button",A,[r(d(N),{class:"w-5 h-5 text-gray-400 group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-300"}),i(" Draft ")])]),t("li",F,[r(d(v),{href:e.route("categories.trash"),class:"inline-flex gap-2 p-4 border-none rounded-t-lg text-gray-400 hover:text-gray-600 group-hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300",type:"button"},{default:n(()=>[r(d(V),{class:"w-5 h-5 text-gray-400 group-hover:text-gray-600 dark:text-gray-500 dark:group-hover:text-gray-300"}),i(" Trash ")]),_:1},8,["href"])])])]),t("div",G,[t("div",H,[r(k)]),t("div",J,[r(w)]),t("div",K,[r($)])])])])])]),_:1},8,["title"]))}};export{Nt as default};
