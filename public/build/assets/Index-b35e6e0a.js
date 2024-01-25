import{_ as v}from"./AppLayout-41e5c864.js";import{h as k,y as c,D as i,o as w,c as I,w as b,a,t as $,b as o,u as d,e as n,s as B}from"./app-40e302ae.js";import N from"./Published-4b89e34e.js";import V from"./Unpublished-8a15428b.js";import j from"./Draft-f7235af4.js";import{_ as O}from"./Breadcrumb-d50aa64f.js";import{r as S,a as T,b as C}from"./BriefcaseIcon-d6308a35.js";import{r as E}from"./TrashIcon-1421cd56.js";import"./Toast-55aefdbe.js";/* empty css                                              */import"./_plugin-vue_export-helper-c27b6911.js";import"./XMarkIcon-5aea3a76.js";import"./ApplicationLogo-f456f601.js";import"./SwitchLocale-96c25329.js";import"./index-316c9229.js";/* empty css                                               */import"./ckeditor-248e791f.js";import"./Delete-4f5809ff.js";import"./ConfirmationModal-ce1d7017.js";import"./Modal-9818fca1.js";import"./ActionButton-8f7a17f6.js";import"./DangerButton-70b51d3a.js";import"./SecondaryButton-a4fc0b9c.js";import"./DeleteBulk-750b2c6a.js";import"./Empty-91beee50.js";import"./empty-bbb98b41.js";import"./PlusIcon-279310fa.js";import"./PencilIcon-1c695c69.js";const P={class:"py-4"},U={class:"max-w-7xl mx-auto sm:px-6 lg:px-4 space-y-4"},q={class:"bg-white dark:bg-slate-800 overflow-hidden shadow sm:rounded"},z={class:"border-b border-gray-200 dark:border-gray-700"},A={class:"flex flex-wrap -mb-px text-sm font-medium text-center",id:"default-tab","data-tabs-toggle":"#default-tab-content",role:"tablist"},F={class:"me-2",role:"presentation"},G={class:"inline-flex gap-2 p-4 border-b-2 rounded-t-lg",id:"published-tab","data-tabs-target":"#published",type:"button",role:"tab","aria-controls":"published","aria-selected":"false"},H={class:"me-2",role:"presentation"},J={class:"inline-flex gap-2 p-4 border-b-2 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300",id:"unpublished-tab","data-tabs-target":"#unpublished",type:"button",role:"tab","aria-controls":"unpublished","aria-selected":"false"},K={class:"me-2",role:"presentation"},L={class:"inline-flex gap-2 p-4 border-b-2 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300",id:"draft-tab","data-tabs-target":"#draft",type:"button",role:"tab","aria-controls":"draft","aria-selected":"false"},M={class:"me-2",role:"presentation"},Q={id:"default-tab-content"},R={class:"hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800",id:"published",role:"tabpanel","aria-labelledby":"published-tab"},W={class:"hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800",id:"unpublished",role:"tabpanel","aria-labelledby":"unpublished-tab"},X={class:"hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800",id:"draft",role:"tabpanel","aria-labelledby":"draft-tab"},$t={__name:"Index",props:{title:String,posts:Object,breadcrumbs:Object},setup(m){const l=m,t=k(l.posts),u=c(()=>t.filter(e=>e.status==!0&&e.deleted_at==null)),g=c(()=>t.filter(e=>e.status==!1&&e.deleted_at==null)),h=c(()=>t.filter(e=>e.status==null&&e.deleted_at==null)),_=e=>{t.push(e)},f=e=>{const r=t.findIndex(s=>s.id===e);r!==-1&&t.splice(r,1)},x=e=>{e.forEach(r=>{const s=t.findIndex(p=>p.id===r);s!==-1&&t.splice(s,1)})},y=(e,r)=>{const s=t.findIndex(p=>p.id===e);s!==-1&&(t[s].name=r.name,t[s].slug=r.slug,t[s].content=r.content,t[s].excerpt=r.excerpt,t[s].password=r.password,t[s].allow_comment=r.allow_comment,t[s].is_featured=r.is_featured,t[s].status=r.status,t[s].meta_title=r.meta_title,t[s].meta_description=r.meta_description,t[s].meta_keywords=r.meta_keywords)};return i("posts",t),i("published",u),i("unpublished",g),i("draft",h),i("addItem",_),i("removeItem",f),i("removeBulkItems",x),i("updateItem",y),(e,r)=>(w(),I(v,{title:l.title},{title:b(()=>[a("span",null,$(l.title),1)]),default:b(()=>[o(O,{breadcrumbs:l.breadcrumbs},null,8,["breadcrumbs"]),a("div",P,[a("div",U,[a("div",q,[a("div",z,[a("ul",A,[a("li",F,[a("button",G,[o(d(S),{class:"w-5 h-5 text-gray-400 group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-300"}),n(" Published ")])]),a("li",H,[a("button",J,[o(d(T),{class:"w-5 h-5 text-gray-400 group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-300"}),n(" Unpublished ")])]),a("li",K,[a("button",L,[o(d(C),{class:"w-5 h-5 text-gray-400 group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-300"}),n(" Draft ")])]),a("li",M,[o(d(B),{href:e.route("posts.trash"),class:"inline-flex gap-2 p-4 border-none rounded-t-lg text-gray-400 hover:text-gray-600 group-hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300",type:"button"},{default:b(()=>[o(d(E),{class:"w-5 h-5 text-gray-400 group-hover:text-gray-600 dark:text-gray-500 dark:group-hover:text-gray-300"}),n(" Trash ")]),_:1},8,["href"])])])]),a("div",Q,[a("div",R,[o(N)]),a("div",W,[o(V)]),a("div",X,[o(j)])])])])])]),_:1},8,["title"]))}};export{$t as default};
