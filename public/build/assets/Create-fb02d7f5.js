import{r as F,T as M,h as N,o as d,d as p,b as s,w as i,u as r,a as o,t as n,m as k,e as h,F as v,f as y,j as U,k as z,n as w}from"./app-029d3c12.js";import{_ as D}from"./Checkbox-5e67eacf.js";import{_ as T}from"./DialogModal-d0f6ace0.js";import{_ as x}from"./InputError-5ba87def.js";import{_ as f}from"./InputLabel-4b2acd49.js";import{_ as S}from"./PrimaryButton-4a147dbe.js";import{_ as A}from"./SecondaryButton-c3ca0618.js";import{_ as L}from"./TextInput-f658579c.js";import{r as O}from"./PlusIcon-f748347f.js";import"./Modal-0faaa9fe.js";import"./XMarkIcon-e53425f1.js";const q={class:"hidden md:block"},G={class:"space-y-1"},H={class:"flex justify-start items-center space-x-2 mt-2"},I={class:"font-semibold text-primary capitalize"},J={class:"flex flex-wrap gap-4 mt-1 mb-4"},K=["id","value"],re={__name:"Create",props:{title:String,permissions:Object},setup(C){const _=F(!1),u=C,e=M({name:"",guard_name:"web",permissions:[]}),m=N({multipleSelect:!1}),b=()=>{e.post(route("role.store"),{preserveScroll:!0,onSuccess:()=>g(),onError:()=>null,onFinish:()=>null})},g=()=>{_.value=!1,e.errors={},e.reset(),m.multipleSelect=!1},$=l=>{l.target.checked===!1?e.permissions=[]:(e.permissions=[],u.permissions.forEach(a=>{a.data.forEach(t=>{e.permissions.push(t.id)})}))},V=()=>{u.permissions.reduce((l,a)=>l+a.data.length,0)==e.permissions.length?m.multipleSelect=!0:m.multipleSelect=!1};return(l,a)=>(d(),p("div",null,[s(S,{class:"flex rounded-none items-center justify-start gap-2",onClick:a[0]||(a[0]=k(t=>_.value=!0,["prevent"]))},{default:i(()=>[s(r(O),{class:"w-4 h-auto"}),o("span",q,n(l.lang().label.add),1)]),_:1}),s(T,{show:_.value,onClose:g,"max-width":"md"},{title:i(()=>[h(n(l.lang().label.add)+" "+n(u.title),1)]),content:i(()=>[o("form",{class:"space-y-2",onSubmit:k(b,["prevent"])},[o("div",G,[s(f,{for:"name",value:l.lang().label.name},null,8,["value"]),s(L,{id:"name",modelValue:r(e).name,"onUpdate:modelValue":a[1]||(a[1]=t=>r(e).name=t),type:"text",class:"block w-full",autocomplete:"name",placeholder:l.lang().placeholder.role_name,error:r(e).errors.name},null,8,["modelValue","placeholder","error"]),s(x,{message:r(e).errors.name},null,8,["message"])]),o("div",null,[s(f,{value:l.lang().label.permissions},null,8,["value"]),s(x,{class:"mt-2",message:r(e).errors.permissions},null,8,["message"]),o("div",H,[s(D,{id:"permission-all",checked:m.multipleSelect,"onUpdate:checked":a[2]||(a[2]=t=>m.multipleSelect=t),onChange:$},null,8,["checked"]),s(f,{for:"permission-all",value:l.lang().label.check_all},null,8,["value"])]),(d(!0),p(v,null,y(u.permissions,(t,j)=>(d(),p("div",{class:"mt-2",key:j},[o("p",I,n(t.group),1),o("div",J,[(d(!0),p(v,null,y(t.data,(c,E)=>(d(),p("div",{class:"flex items-center justify-start space-x-2",key:E},[U(o("input",{onChange:V,class:"rounded dark:bg-slate-900 border-slate-300 dark:border-slate-700 text-primary dark:text-primary shadow-sm focus:ring-primary/80 dark:focus:ring-primary dark:focus:ring-offset-slate-800 dark:checked:bg-primary dark:checked:border-primary",type:"checkbox",id:"permission_"+c.id,value:c.id,"onUpdate:modelValue":a[3]||(a[3]=B=>r(e).permissions=B)},null,40,K),[[z,r(e).permissions]]),s(f,{for:"permission_"+c.id},{default:i(()=>[o("p",{class:w(c.name=="delete"?"text-red-500 font-semibold":"")},n(c.name),3)]),_:2},1032,["for"])]))),128))])]))),128))])],32)]),footer:i(()=>[s(A,{onClick:g},{default:i(()=>[h(n(l.lang().button.cancel),1)]),_:1}),s(S,{class:w(["ml-3",{"opacity-25":r(e).processing}]),disabled:r(e).processing,onClick:b},{default:i(()=>[h(n(l.lang().button.save)+" "+n(r(e).processing?"...":""),1)]),_:1},8,["class","disabled"])]),_:1},8,["show"])]))}};export{re as default};
