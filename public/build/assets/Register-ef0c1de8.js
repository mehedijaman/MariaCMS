import{T as _,o as p,d as c,b as r,u as s,Z as h,w as i,a as l,t as n,m as w,e as u,g as b,s as v,n as k,F as y}from"./app-c4f5b0ab.js";import{_ as V}from"./AuthenticationCard-504baa98.js";import{_ as $}from"./AuthenticationCardLogo-96fb91dc.js";import{_ as x}from"./Checkbox-f35aacb1.js";import{_ as m}from"./InputError-85854109.js";import{_ as d}from"./InputLabel-d739c1d0.js";import{_ as q}from"./PrimaryButton-458f03b6.js";import{_ as f}from"./TextInput-776fb8b7.js";import"./SwitchLocale-0d5c3757.js";import"./index-c1ed15bb.js";import"./ApplicationLogo-6915d697.js";import"./_plugin-vue_export-helper-c27b6911.js";const U={class:"flex flex-col mb-4"},F={class:"text-primary font-semibold text-xl"},N={class:"text-slate-400"},B={class:"mt-4"},C={class:"mt-4"},T={class:"mt-4"},j={key:0,class:"mt-4"},P={class:"flex items-center"},S={class:"ml-2"},z=["href"],A=["href"],D={class:"flex items-center justify-between mt-4"},X={__name:"Register",setup(E){const e=_({name:"",email:"",password:"",password_confirmation:"",terms:!1}),g=()=>{e.post(route("register"),{onFinish:()=>e.reset("password","password_confirmation")})};return(a,o)=>(p(),c(y,null,[r(s(h),{title:a.lang().label.register},null,8,["title"]),r(V,null,{logo:i(()=>[r($)]),default:i(()=>[l("div",U,[l("h2",F,n(a.lang().label.register),1),l("small",N,n(a.lang().label.register_caption),1)]),l("form",{onSubmit:w(g,["prevent"])},[l("div",null,[r(d,{for:"name",value:a.lang().label.name},null,8,["value"]),r(f,{id:"name",modelValue:s(e).name,"onUpdate:modelValue":o[0]||(o[0]=t=>s(e).name=t),type:"text",class:"mt-1 block w-full",required:"",autofocus:"",autocomplete:"name",placeholder:a.lang().placeholder.name,error:s(e).errors.name},null,8,["modelValue","placeholder","error"]),r(m,{class:"mt-2",message:s(e).errors.name},null,8,["message"])]),l("div",B,[r(d,{for:"email",value:a.lang().label.email},null,8,["value"]),r(f,{id:"email",modelValue:s(e).email,"onUpdate:modelValue":o[1]||(o[1]=t=>s(e).email=t),type:"email",class:"mt-1 block w-full",required:"",autocomplete:"username",placeholder:a.lang().placeholder.email,error:s(e).errors.email},null,8,["modelValue","placeholder","error"]),r(m,{class:"mt-2",message:s(e).errors.email},null,8,["message"])]),l("div",C,[r(d,{for:"password",value:a.lang().label.password},null,8,["value"]),r(f,{id:"password",modelValue:s(e).password,"onUpdate:modelValue":o[2]||(o[2]=t=>s(e).password=t),type:"password",class:"mt-1 block w-full",required:"",autocomplete:"new-password",placeholder:a.lang().placeholder.password,error:s(e).errors.password},null,8,["modelValue","placeholder","error"]),r(m,{class:"mt-2",message:s(e).errors.password},null,8,["message"])]),l("div",T,[r(d,{for:"password_confirmation",value:a.lang().label.confirm_password},null,8,["value"]),r(f,{id:"password_confirmation",modelValue:s(e).password_confirmation,"onUpdate:modelValue":o[3]||(o[3]=t=>s(e).password_confirmation=t),type:"password",class:"mt-1 block w-full",required:"",autocomplete:"new-password",placeholder:a.lang().placeholder.password,error:s(e).errors.password_confirmation},null,8,["modelValue","placeholder","error"]),r(m,{class:"mt-2",message:s(e).errors.password_confirmation},null,8,["message"])]),a.$page.props.jetstream.hasTermsAndPrivacyPolicyFeature?(p(),c("div",j,[r(d,{for:"terms"},{default:i(()=>[l("div",P,[r(x,{id:"terms",checked:s(e).terms,"onUpdate:checked":o[4]||(o[4]=t=>s(e).terms=t),name:"terms",required:""},null,8,["checked"]),l("div",S,[u(n(a.lang().label.i_agree_to_the)+" ",1),l("a",{target:"_blank",href:a.route("terms.show"),class:"underline text-sm text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary dark:focus:ring-offset-slate-800"},n(a.lang().label.terms_of_service),9,z),u(" "+n(a.lang().label.and)+" ",1),l("a",{target:"_blank",href:a.route("policy.show"),class:"underline text-sm text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary dark:focus:ring-offset-slate-800"},n(a.lang().label.privacy_policy),9,A)])]),r(m,{class:"mt-2",message:s(e).errors.terms},null,8,["message"])]),_:1})])):b("",!0),l("div",D,[r(s(v),{href:a.route("login"),class:"underline text-sm text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary dark:focus:ring-offset-slate-800"},{default:i(()=>[u(n(a.lang().label.already_registered),1)]),_:1},8,["href"]),r(q,{class:k(["ml-4",{"opacity-25":s(e).processing}]),disabled:s(e).processing},{default:i(()=>[u(n(a.lang().button.register)+" "+n(s(e).processing?"...":""),1)]),_:1},8,["class","disabled"])])],32)]),_:1})],64))}};export{X as default};
