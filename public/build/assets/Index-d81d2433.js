import{T as w,o as U,c as k,w as i,a as s,t as d,b as t,u as l,j as x,C as $,e as h,n as C}from"./app-c4f5b0ab.js";import{_ as L}from"./AppLayout-ad179e80.js";import{_ as R}from"./ActionMessage-4a4cf8a6.js";import{_ as S}from"./FormSection-bf483564.js";import{_ as u}from"./InputError-85854109.js";import{_ as m}from"./InputLabel-d739c1d0.js";import{_ as y}from"./PrimaryButton-458f03b6.js";import{_ as c}from"./TextInput-776fb8b7.js";import{_ as B}from"./TextAreaInput-215a2aad.js";import{_ as j}from"./ImageInput-22c042be.js";import{_ as N}from"./Breadcrumb-4ee1626d.js";import"./EnvelopeIcon-cb4659d4.js";/* empty css                                              */import"./_plugin-vue_export-helper-c27b6911.js";import"./XMarkIcon-c9c2e3cc.js";import"./ApplicationLogo-6915d697.js";import"./SwitchLocale-0d5c3757.js";import"./index-c1ed15bb.js";import"./TagIcon-23c823f5.js";import"./StarIcon-c588ff73.js";/* empty css                                               */import"./SectionTitle-3ffc4411.js";const D={class:"max-w-7xl mx-auto sm:px-4 lg:px-4 lg:pb-4"},F={class:"col-span-6 flex gap-4 w-full"},O={class:"w-1/2"},z={class:""},E={class:""},I={class:""},M=s("option",{value:null},"Self",-1),P=s("option",{value:"_blank"},"Blank Tab",-1),q=[M,P],A={class:"w-1/2 h-fit"},G={class:"col-span-6 sm:col-span-6"},be={__name:"Index",props:{title:String,hero:Object,breadcrumbs:Object},setup(v){var p,b,g,f,_;const n=v,e=w({image:null,title:(p=n.hero)==null?void 0:p.title,description:(b=n.hero)==null?void 0:b.description,buttonText:(g=n.hero)==null?void 0:g.button_text,buttonURL:(f=n.hero)==null?void 0:f.button_url,buttonTarget:(_=n.hero)==null?void 0:_.button_target,_method:"PUT"}),V=()=>{var o;e.post(route("heroes.update",(o=n.hero)==null?void 0:o.id),{preserveScroll:!0,onSuccess:()=>null,onError:()=>null,onFinish:()=>null})},T=o=>{o.source==="image"&&(e.image=o.file)};return(o,a)=>(U(),k(L,{title:n.title},{title:i(()=>[s("span",null,d(n.title),1)]),default:i(()=>[t(N,{breadcrumbs:n.breadcrumbs},null,8,["breadcrumbs"]),s("div",D,[t(S,null,{form:i(()=>[s("div",F,[s("div",O,[s("div",z,[t(m,{for:"title",value:o.lang().label.title},null,8,["value"]),t(c,{id:"title",modelValue:l(e).title,"onUpdate:modelValue":a[0]||(a[0]=r=>l(e).title=r),type:"text",class:"mt-1 block w-full",placeholder:o.lang().placeholder.title,error:l(e).errors.title},null,8,["modelValue","placeholder","error"]),t(u,{message:l(e).errors.title,class:"mt-2"},null,8,["message"])]),s("div",E,[t(m,{for:"buttonText",value:o.lang().label.button_text},null,8,["value"]),t(c,{id:"buttonText",modelValue:l(e).buttonText,"onUpdate:modelValue":a[1]||(a[1]=r=>l(e).buttonText=r),type:"text",class:"mt-1 block w-full",placeholder:o.lang().placeholder.button_text,error:l(e).errors.buttonText},null,8,["modelValue","placeholder","error"]),t(u,{message:l(e).errors.buttonText,class:"mt-2"},null,8,["message"])]),s("div",I,[t(m,{for:"buttonURL",value:o.lang().label.button_url},null,8,["value"]),t(c,{id:"buttonURL",modelValue:l(e).buttonURL,"onUpdate:modelValue":a[2]||(a[2]=r=>l(e).buttonURL=r),type:"text",class:"mt-1 block w-full",placeholder:o.lang().placeholder.button_url,error:l(e).errors.buttonURL},null,8,["modelValue","placeholder","error"]),t(u,{message:l(e).errors.buttonURL,class:"mt-2"},null,8,["message"])]),s("div",null,[t(m,{for:"buttonTarget",value:o.lang().label.button_target},null,8,["value"]),x(s("select",{"onUpdate:modelValue":a[3]||(a[3]=r=>l(e).buttonTarget=r),id:"buttonTarget",name:"buttonTarget",class:"block w-full"},q,512),[[$,l(e).buttonTarget]]),t(u,{message:l(e).errors.buttonTarget,class:"mt-2"},null,8,["message"])])]),s("div",A,[t(m,{for:"image",value:o.lang().label.image},null,8,["value"]),t(j,{source:"image",modelValue:l(e).image,"onUpdate:modelValue":a[4]||(a[4]=r=>l(e).image=r),image:n.hero.full_path_image,tooltip:"Click to select/change image",class:"mt-1 block w-full h-64",onFileChange:T},null,8,["modelValue","image"]),t(u,{message:l(e).errors.image,class:"mt-2"},null,8,["message"])])]),s("div",G,[t(m,{for:"description",value:o.lang().label.description},null,8,["value"]),t(B,{id:"description",rows:"4",modelValue:l(e).description,"onUpdate:modelValue":a[5]||(a[5]=r=>l(e).description=r),class:"mt-1 block w-full",placeholder:o.lang().placeholder.description,error:l(e).errors.description},null,8,["modelValue","placeholder","error"]),t(u,{message:l(e).errors.description,class:"mt-2"},null,8,["message"])])]),actions:i(()=>[t(R,{on:l(e).recentlySuccessful,class:"mr-3"},{default:i(()=>[h(d(o.lang().label.saved),1)]),_:1},8,["on"]),t(y,{class:C({"opacity-25":l(e).processing}),disabled:l(e).processing,onClick:V},{default:i(()=>[h(d(o.lang().button.save)+" "+d(l(e).processing?"...":""),1)]),_:1},8,["class","disabled"])]),_:1})])]),_:1},8,["title"]))}};export{be as default};
