import{r as C,T as U,a3 as K,l as B,o as V,d as j,j as D,c as E,w as i,b as o,u as l,m as y,e as g,t as d,a as m,a4 as w,n as N}from"./app-2598048d.js";import{_ as M}from"./DialogModal-1533a031.js";import{_ as p}from"./InputError-68ba7ea3.js";import{_ as u}from"./InputLabel-c9a43dc8.js";import{_ as O}from"./ActionButton-c7fad4fa.js";import{_ as T}from"./PrimaryButton-7f18ea50.js";import{_ as z}from"./SecondaryButton-a4f6ae6f.js";import{_ as v}from"./TextInput-d95d676f.js";import{_ as F}from"./SelectInput-1691193b.js";import{r as q}from"./PencilIcon-87a100fa.js";import"./Modal-aa19319a.js";import"./XMarkIcon-eb784676.js";const A={class:"space-y-1"},G={class:"space-y-1"},H={class:"space-y-1"},I={class:"space-y-1"},J={class:"space-y-1"},oe={__name:"Edit",props:{title:String,roles:Object,user:Object},emits:["open"],setup(h,{emit:k}){var b;const $=k,c=C(!1),n=h,e=U({name:"",email:"",password:"",password_confirmation:"",role:""});K(()=>{var a,s,f,r;c&&(e.name=(a=n.user)==null?void 0:a.name,e.email=(s=n.user)==null?void 0:s.email,e.role=((f=n.user)==null?void 0:f.roles)==0?"":(r=n.user)==null?void 0:r.roles[0].name)});const t=()=>{var a;e.put(route("user.update",(a=n.user)==null?void 0:a.id),{preserveScroll:!0,onSuccess:()=>_(),onError:()=>null,onFinish:()=>null})},_=()=>{c.value=!1,e.errors={},e.reset()},S=(b=n.roles)==null?void 0:b.map(a=>({label:a.name,value:a.name}));return(a,s)=>{const f=B("tooltip");return V(),j("div",null,[D((V(),E(O,{onClick:s[0]||(s[0]=y(r=>(c.value=!0,$("open")),["prevent"]))},{default:i(()=>[o(l(q),{class:"w-4 h-auto"})]),_:1})),[[f,a.lang().label.edit]]),o(M,{show:c.value,onClose:_},{title:i(()=>[g(d(a.lang().label.edit)+" "+d(n.title),1)]),content:i(()=>[m("form",{class:"space-y-2",onSubmit:y(t,["prevent"])},[m("div",A,[o(u,{for:"name",value:a.lang().label.name},null,8,["value"]),o(v,{id:"name",modelValue:l(e).name,"onUpdate:modelValue":s[1]||(s[1]=r=>l(e).name=r),type:"text",class:"block w-full",autocomplete:"name",placeholder:a.lang().placeholder.name,error:l(e).errors.name,onKeyup:w(t,["enter"])},null,8,["modelValue","placeholder","error"]),o(p,{message:l(e).errors.name},null,8,["message"])]),m("div",G,[o(u,{for:"email",value:a.lang().label.email},null,8,["value"]),o(v,{id:"email",modelValue:l(e).email,"onUpdate:modelValue":s[2]||(s[2]=r=>l(e).email=r),type:"email",class:"block w-full",placeholder:a.lang().placeholder.email,error:l(e).errors.email,onKeyup:w(t,["enter"])},null,8,["modelValue","placeholder","error"]),o(p,{message:l(e).errors.email},null,8,["message"])]),m("div",H,[o(u,{for:"password",value:a.lang().label.password},null,8,["value"]),o(v,{id:"password",modelValue:l(e).password,"onUpdate:modelValue":s[3]||(s[3]=r=>l(e).password=r),type:"password",class:"block w-full",placeholder:a.lang().placeholder.password,error:l(e).errors.password,onKeyup:w(t,["enter"])},null,8,["modelValue","placeholder","error"]),o(p,{message:l(e).errors.password},null,8,["message"])]),m("div",I,[o(u,{for:"password_confirmation",value:a.lang().label.password_confirmation},null,8,["value"]),o(v,{id:"password_confirmation",modelValue:l(e).password_confirmation,"onUpdate:modelValue":s[4]||(s[4]=r=>l(e).password_confirmation=r),type:"password",class:"block w-full",placeholder:a.lang().placeholder.password,error:l(e).errors.password_confirmation,onKeyup:w(t,["enter"])},null,8,["modelValue","placeholder","error"]),o(p,{message:l(e).errors.password_confirmation},null,8,["message"])]),m("div",J,[o(u,{for:"role",value:a.lang().label.role},null,8,["value"]),o(F,{id:"role",modelValue:l(e).role,"onUpdate:modelValue":s[5]||(s[5]=r=>l(e).role=r),dataSet:l(S),class:"block w-full",error:l(e).errors.role},null,8,["modelValue","dataSet","error"]),o(p,{message:l(e).errors.role},null,8,["message"])])],32)]),footer:i(()=>[o(z,{onClick:_},{default:i(()=>[g(d(a.lang().button.cancel),1)]),_:1}),o(T,{class:N(["ml-3",{"opacity-25":l(e).processing}]),disabled:l(e).processing,onClick:t},{default:i(()=>[g(d(a.lang().button.save)+" "+d(l(e).processing?"...":""),1)]),_:1},8,["class","disabled"])]),_:1},8,["show"])])}}};export{oe as default};
