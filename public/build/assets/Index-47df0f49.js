import{_ as x}from"./AppLayout-ad179e80.js";import v from"./Published-1c2c0366.js";import k from"./Unpublished-c5354ea2.js";import w from"./Draft-b1b83eee.js";import{h as I,y as p,D as s,o as $,c as B,w as b,a as t,t as D,b as a,u as i,e as n,s as N}from"./app-c4f5b0ab.js";import{_ as V}from"./Breadcrumb-4ee1626d.js";import{r as j,a as E,b as O}from"./BriefcaseIcon-01228b12.js";import{r as S}from"./TrashIcon-1a6eb028.js";import"./EnvelopeIcon-cb4659d4.js";/* empty css                                              */import"./_plugin-vue_export-helper-c27b6911.js";import"./XMarkIcon-c9c2e3cc.js";import"./ApplicationLogo-6915d697.js";import"./SwitchLocale-0d5c3757.js";import"./index-c1ed15bb.js";import"./TagIcon-23c823f5.js";import"./StarIcon-c588ff73.js";/* empty css                                               */import"./Create-6f1b5bcc.js";import"./DialogModal-ead8dcea.js";import"./Modal-cad72a07.js";import"./InputError-85854109.js";import"./InputLabel-d739c1d0.js";import"./PrimaryButton-458f03b6.js";import"./SecondaryButton-73139509.js";import"./TextInput-776fb8b7.js";import"./TextAreaInput-215a2aad.js";import"./textHelper-8b1dfc94.js";import"./PlusIcon-b2df1b43.js";import"./Edit-ed31e0ce.js";import"./ActionButton-841fd9c8.js";import"./PencilIcon-3be4436b.js";import"./Delete-c502f6fd.js";import"./ConfirmationModal-9be1e3e5.js";import"./DangerButton-84c9d29b.js";import"./DeleteBulk-0e46b29d.js";import"./Empty-e3c566e9.js";import"./empty-bbb98b41.js";import"./ComputerDesktopIcon-50860f81.js";const T={class:"py-4"},C={class:"max-w-7xl mx-auto sm:px-6 lg:px-4 space-y-4"},P={class:"bg-white dark:bg-slate-800 overflow-hidden shadow sm:rounded"},U={class:"border-b border-gray-200 dark:border-gray-700"},q={class:"flex flex-wrap -mb-px text-sm font-medium text-center",id:"default-tab","data-tabs-toggle":"#default-tab-content",role:"tablist"},z={class:"me-2",role:"presentation"},A={class:"inline-flex gap-2 p-4 border-b-2 rounded-t-lg",id:"published-tab","data-tabs-target":"#published",type:"button",role:"tab","aria-controls":"published","aria-selected":"false"},F={class:"me-2",role:"presentation"},G={class:"inline-flex gap-2 p-4 border-b-2 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300",id:"unpublished-tab","data-tabs-target":"#unpublished",type:"button",role:"tab","aria-controls":"unpublished","aria-selected":"false"},H={class:"me-2",role:"presentation"},J={class:"inline-flex gap-2 p-4 border-b-2 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300",id:"draft-tab","data-tabs-target":"#draft",type:"button",role:"tab","aria-controls":"draft","aria-selected":"false"},K={class:"me-2",role:"presentation"},L={id:"default-tab-content"},M={class:"hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800",id:"published",role:"tabpanel","aria-labelledby":"published-tab"},Q={class:"hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800",id:"unpublished",role:"tabpanel","aria-labelledby":"unpublished-tab"},R={class:"hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800",id:"draft",role:"tabpanel","aria-labelledby":"draft-tab"},W=t("div",{class:"hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800",id:"trash",role:"tabpanel","aria-labelledby":"trash-tab"},null,-1),Pt={__name:"Index",props:{title:String,sliders:Object,breadcrumbs:Object},setup(c){const d=c,r=I(d.sliders),u=p(()=>r.filter(e=>e.status==!0&&e.deleted_at==null)),m=p(()=>r.filter(e=>e.status==!1&&e.deleted_at==null)),g=p(()=>r.filter(e=>e.status==null&&e.deleted_at==null)),h=e=>{r.length=0,e.forEach(o=>r.push(o))},_=e=>{const o=r.findIndex(l=>l.id===e);o!==-1&&r.splice(o,1)},f=e=>{e.forEach(o=>{const l=r.findIndex(y=>y.id===o);l!==-1&&r.splice(l,1)})};return s("title",d.title),s("published",u),s("unpublished",m),s("draft",g),s("updateItems",h),s("removeItem",_),s("removeBulkItems",f),(e,o)=>($(),B(x,{title:d.title},{title:b(()=>[t("span",null,D(d.title),1)]),default:b(()=>[a(V,{breadcrumbs:d.breadcrumbs},null,8,["breadcrumbs"]),t("div",T,[t("div",C,[t("div",P,[t("div",U,[t("ul",q,[t("li",z,[t("button",A,[a(i(j),{class:"w-5 h-5 text-gray-400 group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-300"}),n(" Published ")])]),t("li",F,[t("button",G,[a(i(E),{class:"w-5 h-5 text-gray-400 group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-300"}),n(" Unpublished ")])]),t("li",H,[t("button",J,[a(i(O),{class:"w-5 h-5 text-gray-400 group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-300"}),n(" Draft ")])]),t("li",K,[a(i(N),{href:e.route("sliders.trash"),class:"inline-flex gap-2 p-4 border-none rounded-t-lg text-gray-400 hover:text-gray-600 group-hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300",type:"button"},{default:b(()=>[a(i(S),{class:"w-5 h-5 text-gray-400 group-hover:text-gray-600 dark:text-gray-500 dark:group-hover:text-gray-300"}),n(" Trash ")]),_:1},8,["href"])])])]),t("div",L,[t("div",M,[a(v)]),t("div",Q,[a(k)]),t("div",R,[a(w)]),W])])])])]),_:1},8,["title"]))}};export{Pt as default};
