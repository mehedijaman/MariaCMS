import{r as _,T as x,o as r,d as s,b as a,u as l,Z as V,w as f,a as c,t,F as i,e as d,m as y,n as C,x as $}from"./app-40e302ae.js";import{_ as I}from"./AuthenticationCard-4cd7b8a3.js";import{_ as T}from"./AuthenticationCardLogo-8001b3f3.js";import{_ as g}from"./InputError-54276dc2.js";import{_ as b}from"./InputLabel-99c3d693.js";import{_ as B}from"./PrimaryButton-19d7538d.js";import{_ as h}from"./TextInput-e0c63212.js";import"./SwitchLocale-96c25329.js";import"./index-316c9229.js";import"./ApplicationLogo-f456f601.js";import"./_plugin-vue_export-helper-c27b6911.js";const F={class:"flex flex-col mb-4"},N={class:"text-primary font-semibold text-xl"},S={class:"text-slate-400"},U={class:"mb-4 text-sm text-slate-600 dark:text-slate-400"},j={key:0},z={key:1},D={class:"flex items-center justify-between mt-4"},P={__name:"TwoFactorChallenge",setup(E){const n=_(!1),e=x({code:"",recovery_code:""}),p=_(null),v=_(null),k=async()=>{n.value^=!0,await $(),n.value?(p.value.focus(),e.code=""):(v.value.focus(),e.recovery_code="")},w=()=>{e.post(route("two-factor.login"))};return(o,m)=>(r(),s(i,null,[a(l(V),{title:o.lang().label.two_factor_confirmation},null,8,["title"]),a(I,null,{logo:f(()=>[a(T)]),default:f(()=>[c("div",F,[c("h2",N,t(o.lang().label.two_factor_confirmation),1),c("small",S,t(o.lang().label.two_factor_confirmation_caption),1)]),c("div",U,[n.value?(r(),s(i,{key:1},[d(t(o.lang().label.please_confirm_access_recovery),1)],64)):(r(),s(i,{key:0},[d(t(o.lang().label.please_confirm_access),1)],64))]),c("form",{onSubmit:y(w,["prevent"])},[n.value?(r(),s("div",z,[a(b,{for:"recovery_code",value:o.lang().label.recovery_code},null,8,["value"]),a(h,{id:"recovery_code",ref_key:"recoveryCodeInput",ref:p,modelValue:l(e).recovery_code,"onUpdate:modelValue":m[1]||(m[1]=u=>l(e).recovery_code=u),type:"text",class:"mt-1 block w-full",autocomplete:"one-time-code",placeholder:o.lang().placeholder.recovery_code,error:l(e).errors.recovery_code},null,8,["modelValue","placeholder","error"]),a(g,{class:"mt-2",message:l(e).errors.recovery_code},null,8,["message"])])):(r(),s("div",j,[a(b,{for:"code",value:o.lang().label.code},null,8,["value"]),a(h,{id:"code",ref_key:"codeInput",ref:v,modelValue:l(e).code,"onUpdate:modelValue":m[0]||(m[0]=u=>l(e).code=u),type:"text",inputmode:"numeric",class:"mt-1 block w-full",autofocus:"",autocomplete:"one-time-code",placeholder:o.lang().placeholder.code,error:l(e).errors.code},null,8,["modelValue","placeholder","error"]),a(g,{class:"mt-2",message:l(e).errors.code},null,8,["message"])])),c("div",D,[c("button",{type:"button",class:"text-sm text-slate-600 dark:text-slate-400 hover:text-slate-900 underline cursor-pointer",onClick:y(k,["prevent"])},[n.value?(r(),s(i,{key:1},[d(t(o.lang().label.use_authentication_code),1)],64)):(r(),s(i,{key:0},[d(t(o.lang().label.use_recovery_code),1)],64))]),a(B,{class:C(["ml-4",{"opacity-25":l(e).processing}]),disabled:l(e).processing},{default:f(()=>[d(t(o.lang().button.login)+" "+t(l(e).processing?"...":""),1)]),_:1},8,["class","disabled"])])],32)]),_:1})],64))}};export{P as default};
