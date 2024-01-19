import{_ as h}from"./AppLayout-a085250a.js";import _ from"./Published-3f797872.js";import y from"./Unpublished-6eae67e1.js";import f from"./Draft-fae74e27.js";import{h as x,y as l,D as s,o as v,c as k,w as n,a as t,t as w,b as r,u as d,e as i,s as $}from"./app-94de279c.js";import{_ as B}from"./Breadcrumb-8cebe692.js";import{r as D,a as I,b as N}from"./BriefcaseIcon-d40064b9.js";import{r as V}from"./TrashIcon-f01fc569.js";import"./Toast-dd16d87a.js";/* empty css                                              */import"./_plugin-vue_export-helper-c27b6911.js";import"./XMarkIcon-2828e103.js";import"./ApplicationLogo-41115823.js";import"./SwitchLocale-cc927578.js";import"./index-5abade51.js";/* empty css                                               */import"./Create-2b4d4b1e.js";import"./DialogModal-c80aaba5.js";import"./Modal-38f1bd9c.js";import"./InputError-a749efb7.js";import"./InputLabel-7fb7a9c2.js";import"./ImageInput-6599c080.js";import"./PrimaryButton-e5fd0fc6.js";import"./SecondaryButton-7a5ed3a0.js";import"./TextInput-4b961fa3.js";import"./TextAreaInput-cc116e33.js";import"./textHelper-8b1dfc94.js";import"./PlusIcon-2fbf8ad0.js";import"./Edit-01bf266b.js";import"./ActionButton-9b0479c1.js";import"./PencilIcon-a8f5f414.js";import"./Delete-bc517bd5.js";import"./ConfirmationModal-1d517c40.js";import"./DangerButton-094e60d3.js";import"./DeleteBulk-a6495f7e.js";import"./Empty-a0519d90.js";import"./empty-bbb98b41.js";const j={class:"py-4"},O={class:"max-w-7xl mx-auto sm:px-6 lg:px-4 space-y-4"},S={class:"bg-white dark:bg-slate-800 overflow-hidden shadow sm:rounded"},T={class:"border-b border-gray-200 dark:border-gray-700"},C={class:"flex flex-wrap -mb-px text-sm font-medium text-center",id:"default-tab","data-tabs-toggle":"#default-tab-content",role:"tablist"},E={class:"me-2",role:"presentation"},P={class:"inline-flex gap-2 p-4 border-b-2 rounded-t-lg",id:"published-tab","data-tabs-target":"#published",type:"button",role:"tab","aria-controls":"published","aria-selected":"false"},U={class:"me-2",role:"presentation"},q={class:"inline-flex gap-2 p-4 border-b-2 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300",id:"unpublished-tab","data-tabs-target":"#unpublished",type:"button",role:"tab","aria-controls":"unpublished","aria-selected":"false"},z={class:"me-2",role:"presentation"},A={class:"inline-flex gap-2 p-4 border-b-2 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300",id:"draft-tab","data-tabs-target":"#draft",type:"button",role:"tab","aria-controls":"draft","aria-selected":"false"},F={class:"me-2",role:"presentation"},G={id:"default-tab-content"},H={class:"hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800",id:"published",role:"tabpanel","aria-labelledby":"published-tab"},J={class:"hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800",id:"unpublished",role:"tabpanel","aria-labelledby":"unpublished-tab"},K={class:"hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800",id:"draft",role:"tabpanel","aria-labelledby":"draft-tab"},L=t("div",{class:"hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800",id:"trash",role:"tabpanel","aria-labelledby":"trash-tab"},null,-1),jt={__name:"Index",props:{title:String,testimonials:Object,breadcrumbs:Object},setup(b){const a=b,o=x(a.testimonials),u=l(()=>o.filter(e=>e.status==!0&&e.deleted_at==null)),c=l(()=>o.filter(e=>e.status==!1&&e.deleted_at==null)),g=l(()=>o.filter(e=>e.status==null&&e.deleted_at==null)),m=e=>{o.length=0,e.forEach(p=>o.push(p))};return s("title",a.title),s("published",u),s("unpublished",c),s("draft",g),s("updateItems",m),(e,p)=>(v(),k(h,{title:a.title},{title:n(()=>[t("span",null,w(a.title),1)]),default:n(()=>[r(B,{breadcrumbs:a.breadcrumbs},null,8,["breadcrumbs"]),t("div",j,[t("div",O,[t("div",S,[t("div",T,[t("ul",C,[t("li",E,[t("button",P,[r(d(D),{class:"w-5 h-5 me-2 text-gray-400 group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-300"}),i(" Published ")])]),t("li",U,[t("button",q,[r(d(I),{class:"w-5 h-5 me-2 text-gray-400 group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-300"}),i(" Unpublished ")])]),t("li",z,[t("button",A,[r(d(N),{class:"w-5 h-5 me-2 text-gray-400 group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-300"}),i(" Draft ")])]),t("li",F,[r(d($),{href:e.route("testimonials.trash"),class:"inline-flex gap-2 p-4 border-none rounded-t-lg text-gray-400 hover:text-gray-600 group-hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300",type:"button"},{default:n(()=>[r(d(V),{class:"w-5 h-5 me-2 text-gray-400 group-hover:text-gray-600 dark:text-gray-500 dark:group-hover:text-gray-300"}),i(" Trash ")]),_:1},8,["href"])])])]),t("div",G,[t("div",H,[r(_)]),t("div",J,[r(y)]),t("div",K,[r(f)]),L])])])])]),_:1},8,["title"]))}};export{jt as default};
