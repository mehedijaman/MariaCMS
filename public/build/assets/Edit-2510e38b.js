import{r as M,h as N,T as z,a2 as O,l as T,o as u,d as _,j as y,c as A,w as c,b as a,u as r,m as w,e as b,t as d,a as i,F as S,f as x,k as L,n as C}from"./app-983f79d7.js";import{_ as q}from"./DialogModal-af4f8976.js";import{_ as $}from"./InputError-e786aad1.js";import{_ as h}from"./InputLabel-1eca0411.js";import{_ as G}from"./ActionButton-061dc52a.js";import{_ as H}from"./PrimaryButton-a4bfb3bc.js";import{_ as I}from"./SecondaryButton-804a16cb.js";import{_ as J}from"./TextInput-23cfbb72.js";import{_ as K}from"./Checkbox-a4a0640a.js";import{r as P}from"./PencilIcon-9a778aac.js";import"./Modal-ef71f02a.js";import"./XMarkIcon-29e0de1e.js";const Q={class:"space-y-1"},R={class:"flex justify-start items-center space-x-2 mt-2"},W={class:"font-semibold text-primary capitalize"},X={class:"flex flex-wrap gap-4 mt-1 mb-4"},Y=["id","value"],de={__name:"Edit",props:{title:String,permissions:Object,role:Object},emits:["open"],setup(V,{emit:j}){const E=j,g=M(!1),o=V,n=N({multipleSelect:!1}),e=z({name:"",guard_name:"web",permissions:[]});O(()=>{var s,l,p,t;g&&(e.name=(s=o.role)==null?void 0:s.name,e.permissions=(p=(l=o.role)==null?void 0:l.permissions)==null?void 0:p.map(f=>f.id)),o.permissions.reduce((f,m)=>f+m.data.length,0)==((t=o.role)==null?void 0:t.permissions.length)?n.multipleSelect=!0:n.multipleSelect=!1});const k=()=>{var s;e.put(route("role.update",(s=o.role)==null?void 0:s.id),{preserveScroll:!0,onSuccess:()=>v(),onError:()=>null,onFinish:()=>null})},v=()=>{g.value=!1,e.errors={},e.reset(),n.multipleSelect=!1},B=s=>{s.target.checked===!1?e.permissions=[]:o.permissions.forEach(l=>{l.data.forEach(p=>{e.permissions.push(p.id)})})},U=()=>{o.permissions.reduce((s,l)=>s+l.data.length,0)==e.permissions.length?n.multipleSelect=!0:n.multipleSelect=!1};return(s,l)=>{const p=T("tooltip");return u(),_("div",null,[y((u(),A(G,{onClick:l[0]||(l[0]=w(t=>(g.value=!0,E("open")),["prevent"]))},{default:c(()=>[a(r(P),{class:"w-4 h-auto"})]),_:1})),[[p,s.lang().label.edit]]),a(q,{show:g.value,onClose:v,"max-width":"md"},{title:c(()=>[b(d(s.lang().label.edit)+" "+d(o.title),1)]),content:c(()=>[i("form",{class:"space-y-2",onSubmit:w(k,["prevent"])},[i("div",Q,[a(h,{for:"name",value:s.lang().label.name},null,8,["value"]),a(J,{id:"name",modelValue:r(e).name,"onUpdate:modelValue":l[1]||(l[1]=t=>r(e).name=t),type:"text",class:"block w-full",autocomplete:"name",placeholder:s.lang().placeholder.role_name,error:r(e).errors.name},null,8,["modelValue","placeholder","error"]),a($,{message:r(e).errors.name},null,8,["message"])]),i("div",null,[a(h,{value:s.lang().label.permissions},null,8,["value"]),a($,{class:"mt-2",message:r(e).errors.permissions},null,8,["message"]),i("div",R,[a(K,{id:"permission-all",checked:n.multipleSelect,"onUpdate:checked":l[2]||(l[2]=t=>n.multipleSelect=t),onChange:B},null,8,["checked"]),a(h,{for:"permission-all",value:s.lang().label.check_all},null,8,["value"])]),(u(!0),_(S,null,x(o.permissions,(t,f)=>(u(),_("div",{class:"mt-2",key:f},[i("p",W,d(t.group),1),i("div",X,[(u(!0),_(S,null,x(t.data,(m,D)=>(u(),_("div",{class:"flex items-center justify-start space-x-2",key:D},[y(i("input",{onChange:U,class:"rounded dark:bg-slate-900 border-slate-300 dark:border-slate-700 text-primary dark:text-primary shadow-sm focus:ring-primary/80 dark:focus:ring-primary dark:focus:ring-offset-slate-800 dark:checked:bg-primary dark:checked:border-primary",type:"checkbox",id:"permission_"+m.id,value:m.id,"onUpdate:modelValue":l[3]||(l[3]=F=>r(e).permissions=F)},null,40,Y),[[L,r(e).permissions]]),a(h,{for:"permission_"+m.id},{default:c(()=>[i("p",{class:C(m.name=="delete"?"text-red-500 font-semibold":"")},d(m.name),3)]),_:2},1032,["for"])]))),128))])]))),128))])],32)]),footer:c(()=>[a(I,{onClick:v},{default:c(()=>[b(d(s.lang().button.cancel),1)]),_:1}),a(H,{class:C(["ml-3",{"opacity-25":r(e).processing}]),disabled:r(e).processing,onClick:k},{default:c(()=>[b(d(s.lang().button.save)+" "+d(r(e).processing?"...":""),1)]),_:1},8,["class","disabled"])]),_:1},8,["show"])])}}};export{de as default};
