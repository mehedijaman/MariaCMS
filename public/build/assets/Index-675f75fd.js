import{_ as m}from"./AppLayout-a9b239e4.js";import _ from"./Published-f1f10ba0.js";import f from"./Unpublished-3e754acf.js";import y from"./Draft-a5f61789.js";import{h as x,y as l,D as o,o as v,c as k,w as p,a as t,t as w,b as r,u as d,e as i,s as $}from"./app-9d6b1113.js";import{_ as B}from"./Breadcrumb-823e1307.js";import{r as D,a as I,b as N}from"./BriefcaseIcon-df1dd402.js";import{r as V}from"./TrashIcon-8f8d1924.js";import"./Toast-3e56a37b.js";/* empty css                                              */import"./_plugin-vue_export-helper-c27b6911.js";import"./XMarkIcon-df349cb6.js";import"./ApplicationLogo-44e79128.js";import"./SwitchLocale-63d6a5fa.js";import"./index-bc83c8ef.js";import"./StarIcon-c35c7474.js";/* empty css                                               */import"./Create-b59cf7e5.js";import"./DialogModal-e8a5d713.js";import"./Modal-a36d6e9c.js";import"./InputError-bb3d6837.js";import"./InputLabel-f2e5caf5.js";import"./PrimaryButton-1e7e16a5.js";import"./SecondaryButton-4005d2d9.js";import"./TextInput-540fe3c4.js";import"./TextAreaInput-7f2c8bc4.js";import"./textHelper-8b1dfc94.js";import"./PlusIcon-c5a42798.js";import"./Edit-61f0eb67.js";import"./ActionButton-1152b21c.js";import"./PencilIcon-8a4a21c2.js";import"./Delete-f00c80ee.js";import"./ConfirmationModal-0dbceda6.js";import"./DangerButton-187eb523.js";import"./DeleteBulk-e9a565ca.js";import"./Empty-4e9272fb.js";import"./empty-bbb98b41.js";const j={class:"py-4"},O={class:"max-w-7xl mx-auto sm:px-6 lg:px-4 space-y-2"},S={class:"bg-white dark:bg-slate-800 overflow-hidden shadow sm:rounded"},T={class:"border-b border-gray-200 dark:border-gray-700"},C={class:"flex flex-wrap -mb-px text-sm font-medium text-center",id:"default-tab","data-tabs-toggle":"#default-tab-content",role:"tablist"},E={class:"me-2",role:"presentation"},P={class:"inline-flex gap-2 p-4 border-b-2 rounded-t-lg",id:"published-tab","data-tabs-target":"#published",type:"button",role:"tab","aria-controls":"published","aria-selected":"false"},U={class:"me-2",role:"presentation"},q={class:"inline-flex gap-2 p-4 border-b-2 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300",id:"unpublished-tab","data-tabs-target":"#unpublished",type:"button",role:"tab","aria-controls":"unpublished","aria-selected":"false"},z={class:"me-2",role:"presentation"},A={class:"inline-flex gap-2 p-4 border-b-2 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300",id:"draft-tab","data-tabs-target":"#draft",type:"button",role:"tab","aria-controls":"draft","aria-selected":"false"},F={class:"me-2",role:"presentation"},G={id:"default-tab-content"},H={class:"hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800",id:"published",role:"tabpanel","aria-labelledby":"published-tab"},J={class:"hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800",id:"unpublished",role:"tabpanel","aria-labelledby":"unpublished-tab"},K={class:"hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800",id:"draft",role:"tabpanel","aria-labelledby":"draft-tab"},Vt={__name:"Index",props:{title:String,product_categories:Object,breadcrumbs:Object},setup(c){const s=c,a=x(s.product_categories),b=l(()=>a.filter(e=>e.status==!0&&e.deleted_at==null)),u=l(()=>a.filter(e=>e.status==!1&&e.deleted_at==null)),g=l(()=>a.filter(e=>e.status==null&&e.deleted_at==null)),h=e=>{a.length=0,e.forEach(n=>a.push(n))};return o("title",s.title),o("product_categories",a),o("published",b),o("unpublished",u),o("draft",g),o("updateItems",h),(e,n)=>(v(),k(m,{title:s.title},{title:p(()=>[t("span",null,w(s.title),1)]),default:p(()=>[r(B,{breadcrumbs:s.breadcrumbs},null,8,["breadcrumbs"]),t("div",j,[t("div",O,[t("div",S,[t("div",T,[t("ul",C,[t("li",E,[t("button",P,[r(d(D),{class:"w-5 h-5 text-gray-400 group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-300"}),i(" Published ")])]),t("li",U,[t("button",q,[r(d(I),{class:"w-5 h-5 text-gray-400 group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-300"}),i(" Unpublished ")])]),t("li",z,[t("button",A,[r(d(N),{class:"w-5 h-5 text-gray-400 group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-300"}),i(" Draft ")])]),t("li",F,[r(d($),{href:e.route("product-categories.trash"),class:"inline-flex gap-2 p-4 border-none rounded-t-lg text-gray-400 hover:text-gray-600 group-hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300",type:"button"},{default:p(()=>[r(d(V),{class:"w-5 h-5 text-gray-400 group-hover:text-gray-600 dark:text-gray-500 dark:group-hover:text-gray-300"}),i(" Trash ")]),_:1},8,["href"])])])]),t("div",G,[t("div",H,[r(_)]),t("div",J,[r(f)]),t("div",K,[r(y)])])])])])]),_:1},8,["title"]))}};export{Vt as default};
