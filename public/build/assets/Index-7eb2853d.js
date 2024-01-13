import{_ as y}from"./AppLayout-d6195b27.js";import v from"./Published-6cf342a9.js";import k from"./Unpublished-4993367f.js";import w from"./Draft-e85c5fcb.js";import{h as I,y as p,C as s,o as $,c as B,w as b,a as t,t as j,b as a,u as i,e as n,s as N}from"./app-2598048d.js";import{_ as O}from"./Breadcrumb-fb78a766.js";import{r as V,a as C,b as D}from"./BriefcaseIcon-b2e3abf6.js";import{r as E}from"./TrashIcon-3ac790d6.js";import"./Toast-03eae3dd.js";/* empty css                                              */import"./_plugin-vue_export-helper-c27b6911.js";import"./XMarkIcon-eb784676.js";import"./ApplicationLogo-d7439a2b.js";import"./SwitchLocale-1d554e12.js";import"./index-03b8a18a.js";/* empty css                                               */import"./Create-6454c16f.js";import"./DialogModal-1533a031.js";import"./Modal-aa19319a.js";import"./InputError-68ba7ea3.js";import"./InputLabel-c9a43dc8.js";import"./ImageInput-d9e6654d.js";import"./PrimaryButton-7f18ea50.js";import"./SecondaryButton-a4f6ae6f.js";import"./TextInput-d95d676f.js";import"./PlusIcon-1d2627bc.js";import"./Edit-f04d84bd.js";import"./ActionButton-c7fad4fa.js";import"./PencilIcon-87a100fa.js";import"./Delete-bc4d1104.js";import"./ConfirmationModal-ff1f0b7d.js";import"./DangerButton-fc893115.js";import"./DeleteBulk-7caa3908.js";import"./Empty-189c9ddc.js";import"./empty-bbb98b41.js";const S={class:"py-4"},T={class:"max-w-7xl mx-auto sm:px-4 lg:px-4 space-y-4"},P={class:"bg-white dark:bg-slate-800 overflow-hidden shadow sm:rounded"},U={class:"border-b border-gray-200 dark:border-gray-700"},q={class:"flex flex-wrap -mb-px text-sm font-medium text-center",id:"default-tab","data-tabs-toggle":"#default-tab-content",role:"tablist"},z={class:"me-2",role:"presentation"},A={class:"inline-flex gap-2 p-4 border-b-2 rounded-t-lg",id:"published-tab","data-tabs-target":"#published",type:"button",role:"tab","aria-controls":"published","aria-selected":"false"},F={class:"me-2",role:"presentation"},G={class:"inline-flex gap-2 p-4 border-b-2 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300",id:"unpublished-tab","data-tabs-target":"#unpublished",type:"button",role:"tab","aria-controls":"unpublished","aria-selected":"false"},H={class:"me-2",role:"presentation"},J={class:"inline-flex gap-2 p-4 border-b-2 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300",id:"draft-tab","data-tabs-target":"#draft",type:"button",role:"tab","aria-controls":"draft","aria-selected":"false"},K={class:"me-2",role:"presentation"},L={id:"default-tab-content"},M={class:"hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800",id:"published",role:"tabpanel","aria-labelledby":"published-tab"},Q={class:"hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800",id:"unpublished",role:"tabpanel","aria-labelledby":"unpublished-tab"},R={class:"hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800",id:"draft",role:"tabpanel","aria-labelledby":"draft-tab"},Ct={__name:"Index",props:{title:String,slider:Object,slider_items:Object,breadcrumbs:Object},setup(c){const d=c,r=I(d.slider_items),u=p(()=>r.filter(e=>e.status==!0&&e.deleted_at==null)),m=p(()=>r.filter(e=>e.status==!1&&e.deleted_at==null)),g=p(()=>r.filter(e=>e.status==null&&e.deleted_at==null)),h=e=>{r.length=0,e.forEach(o=>r.push(o))},_=e=>{const o=r.findIndex(l=>l.id===e);o!==-1&&r.splice(o,1)},f=e=>{e.forEach(o=>{const l=r.findIndex(x=>x.id===o);l!==-1&&r.splice(l,1)})};return s("slider",d.slider),s("published",u),s("unpublished",m),s("draft",g),s("updateItems",h),s("removeItem",_),s("removeBulkItems",f),(e,o)=>($(),B(y,{title:d.title},{title:b(()=>[t("span",null,j(d.title),1)]),default:b(()=>[a(O,{breadcrumbs:d.breadcrumbs},null,8,["breadcrumbs"]),t("div",S,[t("div",T,[t("div",P,[t("div",U,[t("ul",q,[t("li",z,[t("button",A,[a(i(V),{class:"w-5 h-5 text-gray-400 group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-300"}),n(" Published ")])]),t("li",F,[t("button",G,[a(i(C),{class:"w-5 h-5 text-gray-400 group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-300"}),n(" Unpublished ")])]),t("li",H,[t("button",J,[a(i(D),{class:"w-5 h-5 text-gray-400 group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-300"}),n(" Draft ")])]),t("li",K,[a(i(N),{href:e.route("slider.items.trash",{slider:d.slider.id}),class:"inline-flex gap-2 p-4 border-none rounded-t-lg text-gray-400 hover:text-gray-600 group-hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300",type:"button"},{default:b(()=>[a(i(E),{class:"w-5 h-5 text-gray-400 group-hover:text-gray-600 dark:text-gray-500 dark:group-hover:text-gray-300"}),n(" Trash ")]),_:1},8,["href"])])])]),t("div",L,[t("div",M,[a(v)]),t("div",Q,[a(k)]),t("div",R,[a(w)])])])])])]),_:1},8,["title"]))}};export{Ct as default};
