import{T as p,o as n,d,b as a,u as s,Z as f,w as r,a as o,t as l,g as _,m as g,n as b,e as h,F as w}from"./app-40e302ae.js";import{_ as x}from"./AuthenticationCard-4cd7b8a3.js";import{_ as v}from"./AuthenticationCardLogo-8001b3f3.js";import{_ as V}from"./InputError-54276dc2.js";import{_ as k}from"./InputLabel-99c3d693.js";import{_ as y}from"./PrimaryButton-19d7538d.js";import{_ as $}from"./TextInput-e0c63212.js";import"./SwitchLocale-96c25329.js";import"./index-316c9229.js";import"./ApplicationLogo-f456f601.js";import"./_plugin-vue_export-helper-c27b6911.js";const N={class:"flex flex-col mb-4"},B={class:"text-primary font-semibold text-xl"},C={class:"text-slate-400"},F={key:0,class:"mb-4 font-medium text-sm text-green-600 dark:text-green-400"},S={class:"flex items-center justify-end mt-4"},G={__name:"ForgotPassword",props:{status:String},setup(m){const e=p({email:""}),c=()=>{e.post(route("password.email"))};return(t,i)=>(n(),d(w,null,[a(s(f),{title:t.lang().label.forgot_password},null,8,["title"]),a(x,null,{logo:r(()=>[a(v)]),default:r(()=>[o("div",N,[o("h2",B,l(t.lang().label.forgot_password),1),o("small",C,l(t.lang().label.forgot_password_caption),1)]),m.status?(n(),d("div",F,l(m.status),1)):_("",!0),o("form",{onSubmit:g(c,["prevent"])},[o("div",null,[a(k,{for:"email",value:t.lang().label.email},null,8,["value"]),a($,{id:"email",modelValue:s(e).email,"onUpdate:modelValue":i[0]||(i[0]=u=>s(e).email=u),type:"email",class:"mt-1 block w-full",required:"",autofocus:"",autocomplete:"username",placeholder:t.lang().placeholder.email,error:s(e).errors.email},null,8,["modelValue","placeholder","error"]),a(V,{class:"mt-2",message:s(e).errors.email},null,8,["message"])]),o("div",S,[a(y,{class:b({"opacity-25":s(e).processing}),disabled:s(e).processing},{default:r(()=>[h(l(t.lang().button.email_password_reset_link)+" "+l(s(e).processing?"...":""),1)]),_:1},8,["class","disabled"])])],32)]),_:1})],64))}};export{G as default};
