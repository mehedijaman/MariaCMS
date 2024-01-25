import{h as $,i as S,O as I,o as u,c as j,w as i,a as e,t as n,b as o,j as p,v as d,u as f,d as g,F as O,f as V,k as C}from"./app-40e302ae.js";import{_ as B}from"./AppLayout-41e5c864.js";import{T as P,r as h,_ as U,p as D}from"./TablePagination-446ee255.js";import{_ as N}from"./Breadcrumb-d50aa64f.js";import{_ as A}from"./SelectInput-4840df9e.js";import{_ as E}from"./TextInput-e0c63212.js";import F from"./Create-0a5cfc61.js";import T from"./Edit-55f70cdf.js";import G from"./Delete-4f01816a.js";import L from"./DeleteBulk-f23d2c50.js";import{_ as M}from"./Checkbox-bc1c5cd3.js";import"./Toast-55aefdbe.js";/* empty css                                              */import"./_plugin-vue_export-helper-c27b6911.js";import"./XMarkIcon-5aea3a76.js";import"./ApplicationLogo-f456f601.js";import"./SwitchLocale-96c25329.js";import"./index-316c9229.js";/* empty css                                               */import"./empty-bbb98b41.js";import"./DialogModal-112a7533.js";import"./Modal-9818fca1.js";import"./InputError-54276dc2.js";import"./InputLabel-99c3d693.js";import"./PrimaryButton-19d7538d.js";import"./SecondaryButton-a4fc0b9c.js";import"./PlusIcon-279310fa.js";import"./ActionButton-8f7a17f6.js";import"./PencilIcon-1c695c69.js";import"./ConfirmationModal-ce1d7017.js";import"./DangerButton-70b51d3a.js";import"./TrashIcon-1421cd56.js";const q={class:"py-4"},z={class:"max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-4"},H={class:"bg-white dark:bg-slate-800 overflow-hidden shadow sm:rounded"},J={class:"flex shrink-0 rounded overflow-hidden"},K={class:"flex justify-end items-center gap-2"},Q={class:"flex space-x-2"},R={class:"p-4 text-left"},W=e("th",{class:"p-4 text-center"},"#",-1),X={class:"flex justify-between items-center"},Y={class:"flex justify-between items-center"},Z=e("span",null,"Guard",-1),ee={class:"flex justify-between items-center"},te=e("th",{class:"p-4 text-center sr-only"},"Action",-1),se={class:"whitespace-nowrap px-4 py-2"},ae=["value"],re={class:"whitespace-nowrap px-4 py-2 text-center"},le={class:"whitespace-nowrap px-4 py-2"},oe={class:"whitespace-nowrap px-4 py-2"},ie={class:"whitespace-nowrap px-4 py-2"},ne={class:"whitespace-nowrap flex justify-end px-4 py-2"},pe={class:"flex w-fit rounded overflow-hidden"},Me={__name:"Index",props:{title:String,filters:Object,permissions:Object,breadcrumbs:Object,perPage:Number},setup(_){const{_:k,debounce:w,pickBy:v}=D,l=_,t=$({params:{search:l.filters.search,field:l.filters.field,order:l.filters.order,perPage:l.perPage},selectedId:[],multipleSelect:!1,permission:null}),c=r=>{t.params.field=r,t.params.order=t.params.order==="asc"?"desc":"asc"};S(()=>k.cloneDeep(t.params),w(()=>{let r=v(t.params);I.get(route("permission.index"),r,{replace:!0,preserveState:!0,preserveScroll:!0})},150));const y=r=>{var s;r.target.checked===!1?t.selectedId=[]:(s=l.permissions)==null||s.data.forEach(a=>{t.selectedId.push(a.id)})},x=()=>{var r;((r=l.permissions)==null?void 0:r.data.length)==t.selectedId.length?t.multipleSelect=!0:t.multipleSelect=!1};return(r,s)=>(u(),j(B,{title:l.title},{title:i(()=>[e("span",null,n(l.title),1)]),breadcrumb:i(()=>[o(N)]),default:i(()=>[e("div",q,[e("div",z,[e("div",H,[o(P,null,{"table-action":i(()=>[e("div",J,[p(o(F,{title:l.title},null,8,["title"]),[[d,r.can(["permission create"])]]),p(o(L,{selectedId:t.selectedId,title:l.title,onClose:s[0]||(s[0]=a=>(t.selectedId=[],t.multipleSelect=!1))},null,8,["selectedId","title"]),[[d,t.selectedId.length!=0&&r.can(["permission delete"])]])]),e("div",K,[e("div",Q,[o(A,{class:"h-9 text-sm",modelValue:t.params.perPage,"onUpdate:modelValue":s[1]||(s[1]=a=>t.params.perPage=a),dataSet:r.$page.props.app.perpage},null,8,["modelValue","dataSet"])]),o(E,{modelValue:t.params.search,"onUpdate:modelValue":s[2]||(s[2]=a=>t.params.search=a),type:"search",class:"block h-9",placeholder:r.lang().placeholder.search},null,8,["modelValue","placeholder"])])]),"table-head":i(()=>[e("tr",null,[e("th",R,[o(M,{checked:t.multipleSelect,"onUpdate:checked":s[3]||(s[3]=a=>t.multipleSelect=a),onChange:y},null,8,["checked"])]),W,e("th",{class:"p-4 cursor-pointer",onClick:s[4]||(s[4]=a=>c("name"))},[e("div",X,[e("span",null,n(r.lang().label.name),1),o(f(h),{class:"w-4 h-4"})])]),e("th",{class:"p-4 cursor-pointer",onClick:s[5]||(s[5]=a=>c("guard_name"))},[e("div",Y,[Z,o(f(h),{class:"w-4 h-4"})])]),e("th",{class:"p-4 cursor-pointer",onClick:s[6]||(s[6]=a=>c("created_at"))},[e("div",ee,[e("span",null,n(r.lang().label.created),1),o(f(h),{class:"w-4 h-4"})])]),te])]),"table-body":i(()=>[(u(!0),g(O,null,V(_.permissions.data,(a,b)=>(u(),g("tr",{key:b,class:"border-t border-slate-200 dark:border-slate-700 hover:bg-slate-200/30 hover:dark:bg-slate-900/20"},[e("td",se,[p(e("input",{class:"rounded dark:bg-slate-900 border-slate-300 dark:border-slate-700 text-primary dark:text-primary shadow-sm focus:ring-primary/80 dark:focus:ring-primary dark:focus:ring-offset-slate-800 dark:checked:bg-primary dark:checked:border-primary",type:"checkbox",onChange:x,value:a.id,"onUpdate:modelValue":s[7]||(s[7]=m=>t.selectedId=m)},null,40,ae),[[C,t.selectedId]])]),e("td",re,n(++b),1),e("td",le,n(a.name),1),e("td",oe,n(a.guard_name),1),e("td",ie,n(a.created_at),1),e("td",ne,[e("div",pe,[p(o(T,{title:l.title,permission:t.permission,onOpen:m=>t.permission=a},null,8,["title","permission","onOpen"]),[[d,r.can(["permission update"])]]),p(o(G,{title:l.title,permission:t.permission,onOpen:m=>t.permission=a},null,8,["title","permission","onOpen"]),[[d,r.can(["permission delete"])]])])])]))),128))]),"table-pagination":i(()=>[o(U,{links:l.permissions,filters:t.params},null,8,["links","filters"])]),_:1})])])])]),_:1},8,["title"]))}};export{Me as default};
