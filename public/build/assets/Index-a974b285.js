import{h as j,i as O,O as V,o as n,c as f,w as p,a as e,t as i,b as o,j as c,v as m,u as _,d as u,F as C,f as P,k as B}from"./app-0add7d3b.js";import{_ as U}from"./AppLayout-7617d952.js";import{T as D,r as g,_ as N,p as A}from"./TablePagination-fc40780d.js";import{_ as E}from"./Breadcrumb-0b36a753.js";import{_ as F}from"./SelectInput-108ca651.js";import{_ as T}from"./TextInput-fee49252.js";import G from"./Create-6df905fb.js";import L from"./Edit-a562e869.js";import M from"./Delete-faf760c2.js";import q from"./DeleteBulk-7517c765.js";import w from"./Permission-a803c193.js";import{_ as z}from"./Checkbox-b1335d45.js";import"./Toast-67717151.js";/* empty css                                              */import"./_plugin-vue_export-helper-c27b6911.js";import"./XMarkIcon-48a26f73.js";import"./ApplicationLogo-11a5ac5e.js";import"./SwitchLocale-00a50926.js";import"./index-c33f0066.js";/* empty css                                               */import"./empty-bbb98b41.js";import"./DialogModal-2828c21a.js";import"./Modal-600a46a3.js";import"./InputError-120a7b85.js";import"./InputLabel-2c550e11.js";import"./PrimaryButton-156a4b37.js";import"./SecondaryButton-d46d9a20.js";import"./PlusIcon-1f67ab25.js";import"./ActionButton-21b09c7e.js";import"./PencilIcon-5dde8c8e.js";import"./ConfirmationModal-58ca8c19.js";import"./DangerButton-b98c492e.js";import"./TrashIcon-67035a6d.js";const H={class:"py-4"},J={class:"max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-4"},K={class:"bg-white dark:bg-slate-800 overflow-hidden shadow sm:rounded"},Q={class:"flex shrink-0 rounded overflow-hidden"},R={class:"flex justify-end items-center gap-2"},W={class:"flex space-x-2"},X={class:"p-4 text-left"},Y=e("th",{class:"p-4 text-center"},"#",-1),Z={class:"flex justify-between items-center"},ee={class:"flex justify-between items-center"},se=e("span",null,"Guard",-1),te={class:"p-4t text-left"},ae={class:"flex justify-between items-center"},le=e("th",{class:"p-4 text-center sr-only"},"Action",-1),re={class:"whitespace-nowrap px-4 py-2"},oe=["value"],ie={class:"whitespace-nowrap px-4 py-2 sm:py-3 text-center"},ne={class:"whitespace-nowrap px-4 py-2"},pe={class:"whitespace-nowrap px-4 py-2"},de={class:"whitespace-nowrap px-4 py-2"},ce={key:0},me={key:1},ue={class:"whitespace-nowrap px-4 py-2"},he={class:"whitespace-nowrap flex justify-end px-4 py-2 sm:py-3"},fe={class:"flex w-fit rounded overflow-hidden"},Re={__name:"Index",props:{title:String,filters:Object,roles:Object,permissions:Object,breadcrumbs:Object,perPage:Number},setup(b){const{_:y,debounce:v,pickBy:x}=A,r=b,s=j({params:{search:r.filters.search,field:r.filters.field,order:r.filters.order,perPage:r.perPage},selectedId:[],multipleSelect:!1,role:null}),h=a=>{s.params.field=a,s.params.order=s.params.order==="asc"?"desc":"asc"};O(()=>y.cloneDeep(s.params),v(()=>{let a=x(s.params);V.get(route("role.index"),a,{replace:!0,preserveState:!0,preserveScroll:!0})},150));const $=a=>{var l;a.target.checked===!1?s.selectedId=[]:(l=r.roles)==null||l.data.forEach(t=>{s.selectedId.push(t.id)})},S=()=>{var a;((a=r.roles)==null?void 0:a.data.length)==s.selectedId.length?s.multipleSelect=!0:s.multipleSelect=!1};return(a,l)=>(n(),f(U,{title:r.title},{title:p(()=>[e("span",null,i(r.title),1)]),breadcrumb:p(()=>[o(E)]),default:p(()=>[e("div",H,[e("div",J,[e("div",K,[o(D,null,{"table-action":p(()=>[e("div",Q,[c(o(G,{title:r.title,permissions:r.permissions},null,8,["title","permissions"]),[[m,a.can(["role create"])]]),c(o(q,{selectedId:s.selectedId,title:r.title,onClose:l[0]||(l[0]=t=>(s.selectedId=[],s.multipleSelect=!1))},null,8,["selectedId","title"]),[[m,s.selectedId.length!=0&&a.can(["role delete"])]])]),e("div",R,[e("div",W,[o(F,{class:"h-9 text-sm",modelValue:s.params.perPage,"onUpdate:modelValue":l[1]||(l[1]=t=>s.params.perPage=t),dataSet:a.$page.props.app.perpage},null,8,["modelValue","dataSet"])]),o(T,{modelValue:s.params.search,"onUpdate:modelValue":l[2]||(l[2]=t=>s.params.search=t),type:"search",class:"block h-9",placeholder:a.lang().placeholder.search},null,8,["modelValue","placeholder"])])]),"table-head":p(()=>[e("tr",null,[e("th",X,[o(z,{checked:s.multipleSelect,"onUpdate:checked":l[3]||(l[3]=t=>s.multipleSelect=t),onChange:$},null,8,["checked"])]),Y,e("th",{class:"p-4 cursor-pointer",onClick:l[4]||(l[4]=t=>h("name"))},[e("div",Z,[e("span",null,i(a.lang().label.name),1),o(_(g),{class:"w-4 h-4"})])]),e("th",{class:"p-4 cursor-pointer",onClick:l[5]||(l[5]=t=>h("guard_name"))},[e("div",ee,[se,o(_(g),{class:"w-4 h-4"})])]),e("th",te,i(a.lang().label.permission),1),e("th",{class:"p-4 cursor-pointer",onClick:l[6]||(l[6]=t=>h("created_at"))},[e("div",ae,[e("span",null,i(a.lang().label.created),1),o(_(g),{class:"w-4 h-4"})])]),le])]),"table-body":p(()=>[(n(!0),u(C,null,P(b.roles.data,(t,k)=>(n(),u("tr",{key:k,class:"border-t border-slate-200 dark:border-slate-700 hover:bg-slate-200/30 hover:dark:bg-slate-900/20"},[e("td",re,[c(e("input",{class:"rounded dark:bg-slate-900 border-slate-300 dark:border-slate-700 text-primary dark:text-primary shadow-sm focus:ring-primary/80 dark:focus:ring-primary dark:focus:ring-offset-slate-800 dark:checked:bg-primary dark:checked:border-primary",type:"checkbox",onChange:S,value:t.id,"onUpdate:modelValue":l[7]||(l[7]=d=>s.selectedId=d)},null,40,oe),[[B,s.selectedId]])]),e("td",ie,i(++k),1),e("td",ne,i(t.name),1),e("td",pe,i(t.guard_name),1),e("td",de,[t.permissions.length!=0?(n(),u("div",ce,[t.permissions.length==r.permissions.reduce((d,I)=>d+I.data.length,0)?(n(),f(w,{key:0,permissions:t.permissions,title:a.lang().label.all_permission,caption:t.name},null,8,["permissions","title","caption"])):(n(),f(w,{key:1,permissions:t.permissions,title:t.permissions.length+" Permissions",caption:t.name},null,8,["permissions","title","caption"]))])):(n(),u("p",me,i(a.lang().label.no_permission),1))]),e("td",ue,i(t.created_at),1),e("td",he,[e("div",fe,[c(o(L,{title:r.title,role:s.role,onOpen:d=>s.role=t,permissions:r.permissions},null,8,["title","role","onOpen","permissions"]),[[m,a.can(["role update"])]]),c(o(M,{title:r.title,role:s.role,onOpen:d=>s.role=t},null,8,["title","role","onOpen"]),[[m,a.can(["role delete"])]])])])]))),128))]),"table-pagination":p(()=>[o(N,{links:r.roles,filters:s.params},null,8,["links","filters"])]),_:1})])])])]),_:1},8,["title"]))}};export{Re as default};
