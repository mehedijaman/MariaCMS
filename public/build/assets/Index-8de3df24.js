import{o as d,d as m,a as e,h as C,i as O,O as A,l as B,c as $,w as c,t as i,b as o,j as n,v as p,u,F as P,f as D,k as N,a7 as U,g as E}from"./app-029d3c12.js";import{_ as F}from"./AppLayout-b96ade91.js";import{T as L,r as g,_ as M,p as T}from"./TablePagination-7e9e35f7.js";import{_ as Z}from"./Breadcrumb-b1a05033.js";import{_ as z}from"./SelectInput-2a0248cb.js";import{_ as q}from"./TextInput-f658579c.js";import G from"./Create-435ca219.js";import H from"./Edit-d09f8afd.js";import J from"./Delete-ad27183b.js";import K from"./DeleteBulk-d7889374.js";import Q from"./Permission-0f664c90.js";import{_ as R}from"./Checkbox-5e67eacf.js";import"./Toast-047c208b.js";/* empty css                                              */import"./_plugin-vue_export-helper-c27b6911.js";import"./XMarkIcon-e53425f1.js";import"./ApplicationLogo-ead9b018.js";import"./SwitchLocale-2e53f119.js";import"./index-c4e474fb.js";/* empty css                                               */import"./empty-bbb98b41.js";import"./DialogModal-d0f6ace0.js";import"./Modal-0faaa9fe.js";import"./InputError-5ba87def.js";import"./InputLabel-4b2acd49.js";import"./PrimaryButton-4a147dbe.js";import"./SecondaryButton-c3ca0618.js";import"./PlusIcon-f748347f.js";import"./ActionButton-0db8adf7.js";import"./PencilIcon-c6d05811.js";import"./ConfirmationModal-3e9220f0.js";import"./DangerButton-d1685ae6.js";import"./TrashIcon-51127647.js";function W(h,v){return d(),m("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true","data-slot":"icon"},[e("path",{"fill-rule":"evenodd",d:"M8.603 3.799A4.49 4.49 0 0 1 12 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 0 1 3.498 1.307 4.491 4.491 0 0 1 1.307 3.497A4.49 4.49 0 0 1 21.75 12a4.49 4.49 0 0 1-1.549 3.397 4.491 4.491 0 0 1-1.307 3.497 4.491 4.491 0 0 1-3.497 1.307A4.49 4.49 0 0 1 12 21.75a4.49 4.49 0 0 1-3.397-1.549 4.49 4.49 0 0 1-3.498-1.306 4.491 4.491 0 0 1-1.307-3.498A4.49 4.49 0 0 1 2.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 0 1 1.307-3.497 4.49 4.49 0 0 1 3.497-1.307Zm7.007 6.387a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z","clip-rule":"evenodd"})])}const X={class:"py-4"},Y={class:"max-w-7xl mx-auto sm:px-6 lg:px-4 space-y-4"},ee={class:"bg-white dark:bg-slate-800 overflow-hidden shadow sm:rounded"},te={class:"flex shrink-0 rounded overflow-hidden"},se={class:"flex justify-end items-center gap-2"},le={class:"flex space-x-2"},ae={class:"p-4 text-left"},re=e("th",{class:"p-4 text-center"},"#",-1),oe={class:"flex justify-between items-center"},ie={class:"flex justify-between items-center"},ne={class:"p-4 text-left"},de={class:"flex justify-between items-center"},ce=e("th",{class:"p-4 text-center sr-only"},"Action",-1),pe={class:"whitespace-nowrap px-4 py-2"},me=["value"],ue={class:"whitespace-nowrap px-4 py-2 text-center"},he={class:"whitespace-nowrap px-4 py-2"},_e={class:"flex items-center"},fe={class:"mt-2 shrink-0"},be=["src","alt"],ge={class:"mt-2 shrink-0"},ve={class:"truncate ml-3"},we={class:"whitespace-nowrap truncate px-4 py-2"},ke={class:"whitespace-nowrap px-4 py-2"},ye={key:0},xe={key:1},$e={class:"whitespace-nowrap px-4 py-2"},Se={class:"whitespace-nowrap flex justify-end px-4 py-2"},Ie={class:"flex w-fit rounded overflow-hidden"},ot={__name:"Index",props:{title:String,filters:Object,users:Object,roles:Object,breadcrumbs:Object,perPage:Number},setup(h){const{_:v,debounce:S,pickBy:I}=T,r=h,t=C({params:{search:r.filters.search,field:r.filters.field,order:r.filters.order,perPage:r.perPage},selectedId:[],multipleSelect:!1,user:null}),_=l=>{t.params.field=l,t.params.order=t.params.order==="asc"?"desc":"asc"};O(()=>v.cloneDeep(t.params),S(()=>{let l=I(t.params);A.get(route("user.index"),l,{replace:!0,preserveState:!0,preserveScroll:!0})},150));const j=l=>{var a;l.target.checked===!1?t.selectedId=[]:(a=r.users)==null||a.data.forEach(f=>{t.selectedId.push(f.id)})},V=()=>{var l;((l=r.users)==null?void 0:l.data.length)==t.selectedId.length?t.multipleSelect=!0:t.multipleSelect=!1};return(l,a)=>{const f=B("tooltip");return d(),$(F,{title:r.title},{title:c(()=>[e("span",null,i(r.title),1)]),default:c(()=>[o(Z,{breadcrumbs:r.breadcrumbs},null,8,["breadcrumbs"]),e("div",X,[e("div",Y,[e("div",ee,[o(L,null,{"table-action":c(()=>[e("div",te,[n(o(G,{title:r.title,roles:r.roles},null,8,["title","roles"]),[[p,l.can(["user create"])]]),n(o(K,{selectedId:t.selectedId,title:r.title,onClose:a[0]||(a[0]=s=>(t.selectedId=[],t.multipleSelect=!1))},null,8,["selectedId","title"]),[[p,t.selectedId.length!=0&&l.can(["user delete"])]])]),e("div",se,[e("div",le,[o(z,{class:"h-9 text-sm",modelValue:t.params.perPage,"onUpdate:modelValue":a[1]||(a[1]=s=>t.params.perPage=s),dataSet:l.$page.props.app.perpage},null,8,["modelValue","dataSet"])]),o(q,{modelValue:t.params.search,"onUpdate:modelValue":a[2]||(a[2]=s=>t.params.search=s),type:"search",class:"block h-9",placeholder:l.lang().placeholder.search},null,8,["modelValue","placeholder"])])]),"table-head":c(()=>[e("tr",null,[e("th",ae,[o(R,{checked:t.multipleSelect,"onUpdate:checked":a[3]||(a[3]=s=>t.multipleSelect=s),onChange:j},null,8,["checked"])]),re,e("th",{class:"p-4 cursor-pointer",onClick:a[4]||(a[4]=s=>_("name"))},[e("div",oe,[e("span",null,i(l.lang().label.name),1),o(u(g),{class:"w-4 h-4"})])]),e("th",{class:"p-4 cursor-pointer",onClick:a[5]||(a[5]=s=>_("email"))},[e("div",ie,[e("span",null,i(l.lang().label.email),1),o(u(g),{class:"w-4 h-4"})])]),e("th",ne,i(l.lang().label.role),1),e("th",{class:"p-4 cursor-pointer",onClick:a[6]||(a[6]=s=>_("created_at"))},[e("div",de,[e("span",null,i(l.lang().label.created),1),o(u(g),{class:"w-4 h-4"})])]),ce])]),"table-body":c(()=>[(d(!0),m(P,null,D(h.users.data,(s,w)=>{var k,y,x;return d(),m("tr",{key:w,class:"border-t border-slate-200 dark:border-slate-700 hover:bg-slate-200/30 hover:dark:bg-slate-900/20"},[e("td",pe,[n(e("input",{class:"rounded dark:bg-slate-900 border-slate-300 dark:border-slate-700 text-primary dark:text-primary shadow-sm focus:ring-primary/80 dark:focus:ring-primary dark:focus:ring-offset-slate-800 dark:checked:bg-primary dark:checked:border-primary",type:"checkbox",onChange:V,value:s.id,"onUpdate:modelValue":a[7]||(a[7]=b=>t.selectedId=b)},null,40,me),[[N,t.selectedId]])]),e("td",ue,i(++w),1),e("td",he,[e("div",_e,[n(e("div",fe,[e("img",{src:s.profile_photo_url,alt:s.name,class:"rounded h-8 w-8 object-cover"},null,8,be)],512),[[p,!s.profile_photo_path]]),n(e("div",ge,[e("span",{class:"block rounded w-8 h-8 bg-cover bg-no-repeat bg-center",style:U("background-image: url('"+s.profile_photo_url+"');")},null,4)],512),[[p,s.profile_photo_path]]),e("p",ve,i(s.name),1),s.email_verified_at?n((d(),$(u(W),{key:0,class:"w-4 h-auto text-blue-500 ml-1 shrink-0"},null,512)),[[f,"Verified at "+s.email_verified_at]]):E("",!0)])]),e("td",we,i(s.email),1),e("td",ke,[(k=s.roles[0])!=null&&k.name?(d(),m("p",ye,[o(Q,{permissions:(y=s.roles[0])==null?void 0:y.permissions,title:(x=s.roles[0])==null?void 0:x.name},null,8,["permissions","title"])])):(d(),m("p",xe,i(l.lang().label.not_selected),1))]),e("td",$e,i(s.created_at),1),e("td",Se,[e("div",Ie,[n(o(H,{title:r.title,user:t.user,onOpen:b=>t.user=s,roles:r.roles},null,8,["title","user","onOpen","roles"]),[[p,l.can(["user update"])]]),n(o(J,{title:r.title,user:t.user,onOpen:b=>t.user=s,roles:r.roles},null,8,["title","user","onOpen","roles"]),[[p,l.can(["user delete"])]])])])])}),128))]),"table-pagination":c(()=>[o(M,{links:r.users,filters:t.params},null,8,["links","filters"])]),_:1})])])])]),_:1},8,["title"])}}};export{ot as default};
