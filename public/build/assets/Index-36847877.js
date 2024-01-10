import{h as $,i as S,O as I,o as m,c as j,w as n,a as e,t as i,b as r,j as u,v,u as c,d as w,F as C,f as V,k as O}from"./app-0add7d3b.js";import{_ as P}from"./AppLayout-7617d952.js";import{T as B,r as p,_ as D,p as U}from"./TablePagination-fc40780d.js";import{_ as E}from"./Breadcrumb-0b36a753.js";import{_ as N}from"./SelectInput-108ca651.js";import{_ as A}from"./TextInput-fee49252.js";import F from"./Delete-4324f237.js";import T from"./DeleteBulk-dd7313bd.js";import L from"./Properties-cd581c37.js";import{_ as M}from"./Checkbox-b1335d45.js";import"./Toast-67717151.js";/* empty css                                              */import"./_plugin-vue_export-helper-c27b6911.js";import"./XMarkIcon-48a26f73.js";import"./ApplicationLogo-11a5ac5e.js";import"./SwitchLocale-00a50926.js";import"./index-c33f0066.js";/* empty css                                               */import"./empty-bbb98b41.js";import"./ConfirmationModal-58ca8c19.js";import"./Modal-600a46a3.js";import"./ActionButton-21b09c7e.js";import"./DangerButton-b98c492e.js";import"./SecondaryButton-d46d9a20.js";import"./TrashIcon-67035a6d.js";import"./DialogModal-2828c21a.js";const q={class:"py-4"},z={class:"max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-4"},G={class:"bg-white dark:bg-slate-800 overflow-hidden shadow sm:rounded"},H={class:"flex shrink-0 rounded overflow-hidden"},J={class:"flex justify-end items-center gap-2"},K={class:"flex space-x-2"},Q={class:"p-4 text-left"},R=e("th",{class:"p-4 text-center"},"#",-1),W={class:"flex justify-between items-center"},X={class:"flex justify-between items-center"},Y=e("span",null,"Event",-1),Z={class:"flex justify-between items-center"},ee=e("span",null,"Description",-1),te={class:"flex justify-between items-center"},se=e("span",null,"Properties",-1),ae={class:"flex justify-between items-center"},le=e("th",{class:"p-4 text-center sr-only"},"Action",-1),re={class:"whitespace-nowrap px-4 py-2"},oe=["value"],ie={class:"whitespace-nowrap px-4 py-2 sm:py-3 text-center"},ne={class:"whitespace-nowrap px-4 py-2"},de={class:"whitespace-nowrap px-4 py-2"},ce={class:"whitespace-nowrap px-4 py-2"},pe={class:"whitespace-nowrap px-4 py-2 max-w-xs truncate"},me={class:"whitespace-nowrap px-4 py-2"},ue={class:"whitespace-nowrap flex justify-end px-4 py-2 sm:py-3"},he={class:"flex w-fit rounded overflow-hidden"},Me={__name:"Index",props:{title:String,filters:Object,activities:Object,breadcrumbs:Object,perPage:Number},setup(h){const{_:b,debounce:g,pickBy:k}=U,o=h,t=$({params:{search:o.filters.search,field:o.filters.field,order:o.filters.order,perPage:o.perPage},selectedId:[],multipleSelect:!1,activity:null}),d=l=>{t.params.field=l,t.params.order=t.params.order==="asc"?"desc":"asc"};S(()=>b.cloneDeep(t.params),g(()=>{let l=k(t.params);I.get(route("activity.index"),l,{replace:!0,preserveState:!0,preserveScroll:!0})},150));const y=l=>{var s;l.target.checked===!1?t.selectedId=[]:(s=o.activities)==null||s.data.forEach(a=>{t.selectedId.push(a.id)})},x=()=>{var l;((l=o.activities)==null?void 0:l.data.length)==t.selectedId.length?t.multipleSelect=!0:t.multipleSelect=!1};return(l,s)=>(m(),j(P,{title:o.title},{title:n(()=>[e("span",null,i(o.title),1)]),breadcrumb:n(()=>[r(E)]),default:n(()=>[e("div",q,[e("div",z,[e("div",G,[r(B,null,{"table-action":n(()=>[e("div",H,[u(r(T,{selectedId:t.selectedId,title:o.title,onClose:s[0]||(s[0]=a=>(t.selectedId=[],t.multipleSelect=!1))},null,8,["selectedId","title"]),[[v,t.selectedId.length!=0&&l.can(["activity delete"])]])]),e("div",J,[e("div",K,[r(N,{class:"h-9 text-sm",modelValue:t.params.perPage,"onUpdate:modelValue":s[1]||(s[1]=a=>t.params.perPage=a),dataSet:l.$page.props.app.perpage},null,8,["modelValue","dataSet"])]),r(A,{modelValue:t.params.search,"onUpdate:modelValue":s[2]||(s[2]=a=>t.params.search=a),type:"search",class:"block h-9",placeholder:l.lang().placeholder.search},null,8,["modelValue","placeholder"])])]),"table-head":n(()=>[e("tr",null,[e("th",Q,[r(M,{checked:t.multipleSelect,"onUpdate:checked":s[3]||(s[3]=a=>t.multipleSelect=a),onChange:y},null,8,["checked"])]),R,e("th",{class:"p-4 cursor-pointer",onClick:s[4]||(s[4]=a=>d("log_name"))},[e("div",W,[e("span",null,i(l.lang().label.name),1),r(c(p),{class:"w-4 h-4"})])]),e("th",{class:"p-4 cursor-pointer",onClick:s[5]||(s[5]=a=>d("event"))},[e("div",X,[Y,r(c(p),{class:"w-4 h-4"})])]),e("th",{class:"p-4 cursor-pointer",onClick:s[6]||(s[6]=a=>d("description"))},[e("div",Z,[ee,r(c(p),{class:"w-4 h-4"})])]),e("th",{class:"p-4 cursor-pointer",onClick:s[7]||(s[7]=a=>d("properties"))},[e("div",te,[se,r(c(p),{class:"w-4 h-4"})])]),e("th",{class:"p-4 cursor-pointer",onClick:s[8]||(s[8]=a=>d("created_at"))},[e("div",ae,[e("span",null,i(l.lang().label.created),1),r(c(p),{class:"w-4 h-4"})])]),le])]),"table-body":n(()=>[(m(!0),w(C,null,V(h.activities.data,(a,f)=>(m(),w("tr",{key:f,class:"border-t border-slate-200 dark:border-slate-700 hover:bg-slate-200/30 hover:dark:bg-slate-900/20"},[e("td",re,[u(e("input",{class:"rounded dark:bg-slate-900 border-slate-300 dark:border-slate-700 text-primary dark:text-primary shadow-sm focus:ring-primary/80 dark:focus:ring-primary dark:focus:ring-offset-slate-800 dark:checked:bg-primary dark:checked:border-primary",type:"checkbox",onChange:x,value:a.id,"onUpdate:modelValue":s[9]||(s[9]=_=>t.selectedId=_)},null,40,oe),[[O,t.selectedId]])]),e("td",ie,i(++f),1),e("td",ne,i(a.log_name),1),e("td",de,i(a.event),1),e("td",ce,i(a.description),1),e("td",pe,[r(L,{title:"Properties",data:a.properties},null,8,["data"])]),e("td",me,i(a.created_at),1),e("td",ue,[e("div",he,[u(r(F,{title:o.title,activity:t.activity,onOpen:_=>t.activity=a},null,8,["title","activity","onOpen"]),[[v,l.can(["activity delete"])]])])])]))),128))]),"table-pagination":n(()=>[r(D,{links:o.activities,filters:t.params},null,8,["links","filters"])]),_:1})])])])]),_:1},8,["title"]))}};export{Me as default};
