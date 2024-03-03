import{h as O,i as V,O as C,o as d,c as y,w as p,a as e,t as i,b as o,j as n,v as c,u as m,d as u,F as B,f as P,k as N,$ as U,g as D}from"./app-41a1d8f2.js";import{r as A,_ as E}from"./AppLayout-4e25088a.js";import{T as F,r as f,_ as T,p as z}from"./TablePagination-48297444.js";import{_ as L}from"./Breadcrumb-62688d32.js";import{_ as M}from"./SelectInput-9de7ba2b.js";import{_ as q}from"./TextInput-a0dbf631.js";import G from"./Create-e99537c4.js";import H from"./Edit-d1f4b633.js";import J from"./Delete-7c6383ef.js";import K from"./DeleteBulk-76e8d8da.js";import Q from"./Permission-0d0921ef.js";import{_ as R}from"./Checkbox-aa2fbfac.js";import"./EnvelopeIcon-8d26f0a2.js";/* empty css                                              */import"./_plugin-vue_export-helper-c27b6911.js";import"./XMarkIcon-69a4576f.js";import"./ApplicationLogo-6065d1d8.js";import"./SwitchLocale-ebb47473.js";import"./index-1f0d1df1.js";import"./TagIcon-8e30871f.js";import"./StarIcon-ce18b240.js";/* empty css                                               */import"./empty-bbb98b41.js";import"./DialogModal-d4c49218.js";import"./Modal-d8ae855a.js";import"./InputError-16bd74d2.js";import"./InputLabel-2f5450e1.js";import"./PrimaryButton-8ca9f46a.js";import"./SecondaryButton-1cee5f88.js";import"./PlusIcon-ff3dc48c.js";import"./ActionButton-55ac4b36.js";import"./PencilIcon-4cd8dd86.js";import"./ConfirmationModal-984f0214.js";import"./DangerButton-0be53ad4.js";import"./TrashIcon-bdde2e93.js";const W={class:"py-4"},X={class:"max-w-7xl mx-auto sm:px-6 lg:px-4 space-y-4"},Y={class:"bg-white dark:bg-slate-800 overflow-hidden shadow sm:rounded"},Z={class:"flex shrink-0 rounded overflow-hidden"},ee={class:"flex justify-end items-center gap-2"},te={class:"flex space-x-2"},se={class:"p-4 text-left"},le=e("th",{class:"p-4 text-center"},"#",-1),ae={class:"flex justify-between items-center"},re={class:"flex justify-between items-center"},oe={class:"p-4 text-left"},ie={class:"flex justify-between items-center"},ne=e("th",{class:"p-4 text-center sr-only"},"Action",-1),de={class:"whitespace-nowrap px-4 py-2"},pe=["value"],ce={class:"whitespace-nowrap px-4 py-2 text-center"},me={class:"whitespace-nowrap px-4 py-2"},ue={class:"flex items-center"},he={class:"mt-2 shrink-0"},_e=["src","alt"],fe={class:"mt-2 shrink-0"},be={class:"truncate ml-3"},ge={class:"whitespace-nowrap truncate px-4 py-2"},ke={class:"whitespace-nowrap px-4 py-2"},ve={key:0},we={key:1},ye={class:"whitespace-nowrap px-4 py-2"},xe={class:"whitespace-nowrap flex justify-end px-4 py-2"},$e={class:"flex w-fit rounded overflow-hidden"},ot={__name:"Index",props:{title:String,filters:Object,users:Object,roles:Object,breadcrumbs:Object,perPage:Number},setup(b){const{_:x,debounce:$,pickBy:S}=z,r=b,t=O({params:{search:r.filters.search,field:r.filters.field,order:r.filters.order,perPage:r.perPage},selectedId:[],multipleSelect:!1,user:null}),h=l=>{t.params.field=l,t.params.order=t.params.order==="asc"?"desc":"asc"};V(()=>x.cloneDeep(t.params),$(()=>{let l=S(t.params);C.get(route("user.index"),l,{replace:!0,preserveState:!0,preserveScroll:!0})},150));const I=l=>{var a;l.target.checked===!1?t.selectedId=[]:(a=r.users)==null||a.data.forEach(s=>{t.selectedId.push(s.id)})},j=()=>{var l;((l=r.users)==null?void 0:l.data.length)==t.selectedId.length?t.multipleSelect=!0:t.multipleSelect=!1};return(l,a)=>(d(),y(E,{title:r.title},{title:p(()=>[e("span",null,i(r.title),1)]),default:p(()=>[o(L,{breadcrumbs:r.breadcrumbs},null,8,["breadcrumbs"]),e("div",W,[e("div",X,[e("div",Y,[o(F,null,{"table-action":p(()=>[e("div",Z,[n(o(G,{title:r.title,roles:r.roles},null,8,["title","roles"]),[[c,l.can(["user create"])]]),n(o(K,{selectedId:t.selectedId,title:r.title,onClose:a[0]||(a[0]=s=>(t.selectedId=[],t.multipleSelect=!1))},null,8,["selectedId","title"]),[[c,t.selectedId.length!=0&&l.can(["user delete"])]])]),e("div",ee,[e("div",te,[o(M,{class:"h-9 text-sm",modelValue:t.params.perPage,"onUpdate:modelValue":a[1]||(a[1]=s=>t.params.perPage=s),dataSet:l.$page.props.app.perpage},null,8,["modelValue","dataSet"])]),o(q,{modelValue:t.params.search,"onUpdate:modelValue":a[2]||(a[2]=s=>t.params.search=s),type:"search",class:"block h-9",placeholder:l.lang().placeholder.search},null,8,["modelValue","placeholder"])])]),"table-head":p(()=>[e("tr",null,[e("th",se,[o(R,{checked:t.multipleSelect,"onUpdate:checked":a[3]||(a[3]=s=>t.multipleSelect=s),onChange:I},null,8,["checked"])]),le,e("th",{class:"p-4 cursor-pointer",onClick:a[4]||(a[4]=s=>h("name"))},[e("div",ae,[e("span",null,i(l.lang().label.name),1),o(m(f),{class:"w-4 h-4"})])]),e("th",{class:"p-4 cursor-pointer",onClick:a[5]||(a[5]=s=>h("email"))},[e("div",re,[e("span",null,i(l.lang().label.email),1),o(m(f),{class:"w-4 h-4"})])]),e("th",oe,i(l.lang().label.role),1),e("th",{class:"p-4 cursor-pointer",onClick:a[6]||(a[6]=s=>h("created_at"))},[e("div",ie,[e("span",null,i(l.lang().label.created),1),o(m(f),{class:"w-4 h-4"})])]),ne])]),"table-body":p(()=>[(d(!0),u(B,null,P(b.users.data,(s,g)=>{var k,v,w;return d(),u("tr",{key:g,class:"border-t border-slate-200 dark:border-slate-700 hover:bg-slate-200/30 hover:dark:bg-slate-900/20"},[e("td",de,[n(e("input",{class:"rounded dark:bg-slate-900 border-slate-300 dark:border-slate-700 text-primary dark:text-primary shadow-sm focus:ring-primary/80 dark:focus:ring-primary dark:focus:ring-offset-slate-800 dark:checked:bg-primary dark:checked:border-primary",type:"checkbox",onChange:j,value:s.id,"onUpdate:modelValue":a[7]||(a[7]=_=>t.selectedId=_)},null,40,pe),[[N,t.selectedId]])]),e("td",ce,i(++g),1),e("td",me,[e("div",ue,[n(e("div",he,[e("img",{src:s.profile_photo_url,alt:s.name,class:"rounded h-8 w-8 object-cover"},null,8,_e)],512),[[c,!s.profile_photo_path]]),n(e("div",fe,[e("span",{class:"block rounded w-8 h-8 bg-cover bg-no-repeat bg-center",style:U("background-image: url('"+s.profile_photo_url+"');")},null,4)],512),[[c,s.profile_photo_path]]),e("p",be,i(s.name),1),s.email_verified_at?(d(),y(m(A),{key:0,class:"w-4 h-auto text-blue-500 ml-1 shrink-0"})):D("",!0)])]),e("td",ge,i(s.email),1),e("td",ke,[(k=s.roles[0])!=null&&k.name?(d(),u("p",ve,[o(Q,{permissions:(v=s.roles[0])==null?void 0:v.permissions,title:(w=s.roles[0])==null?void 0:w.name},null,8,["permissions","title"])])):(d(),u("p",we,i(l.lang().label.not_selected),1))]),e("td",ye,i(s.created_at),1),e("td",xe,[e("div",$e,[n(o(H,{title:r.title,user:t.user,onOpen:_=>t.user=s,roles:r.roles},null,8,["title","user","onOpen","roles"]),[[c,l.can(["user update"])]]),n(o(J,{title:r.title,user:t.user,onOpen:_=>t.user=s,roles:r.roles},null,8,["title","user","onOpen","roles"]),[[c,l.can(["user delete"])]])])])])}),128))]),"table-pagination":p(()=>[o(T,{links:r.users,filters:t.params},null,8,["links","filters"])]),_:1})])])])]),_:1},8,["title"]))}};export{ot as default};
