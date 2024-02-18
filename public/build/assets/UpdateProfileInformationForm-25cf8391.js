import{T as D,r as f,o as p,c as V,w as t,e as n,t as s,d as S,a as r,b as o,j as v,v as h,$ as E,m as _,g,u as l,s as F,n as O,O as T}from"./app-c4f5b0ab.js";import{_ as z}from"./ActionMessage-4a4cf8a6.js";import{_ as L}from"./FormSection-bf483564.js";import{_ as b}from"./InputError-85854109.js";import{_ as k}from"./InputLabel-d739c1d0.js";import{_ as R}from"./PrimaryButton-458f03b6.js";import{_ as $}from"./SecondaryButton-73139509.js";import{_ as C}from"./TextInput-776fb8b7.js";import"./SectionTitle-3ffc4411.js";import"./_plugin-vue_export-helper-c27b6911.js";const A={key:0,class:"col-span-6 sm:col-span-4"},M={class:"mt-2"},q=["src","alt"],G={class:"mt-2"},H={class:"col-span-6 sm:col-span-4"},J={class:"col-span-6 sm:col-span-4"},K={key:0},Q={class:"text-sm mt-2 dark:text-white"},te={__name:"UpdateProfileInformationForm",props:{user:Object},setup(u){const w=u,a=D({_method:"PUT",name:w.user.name,email:w.user.email,photo:null}),y=f(null),c=f(null),i=f(null),I=()=>{i.value&&(a.photo=i.value.files[0]),a.post(route("user-profile-information.update"),{errorBag:"updateProfileInformation",preserveScroll:!0,onSuccess:()=>P()})},j=()=>{y.value=!0},B=()=>{i.value.click()},N=()=>{const e=i.value.files[0];if(!e)return;const m=new FileReader;m.onload=d=>{c.value=d.target.result},m.readAsDataURL(e)},U=()=>{T.delete(route("current-user-photo.destroy"),{preserveScroll:!0,onSuccess:()=>{c.value=null,P()}})},P=()=>{var e;(e=i.value)!=null&&e.value&&(i.value.value=null)};return(e,m)=>(p(),V(L,{onSubmitted:I},{title:t(()=>[n(s(e.lang().label.profile_information),1)]),description:t(()=>[n(s(e.lang().label.profile_information_description),1)]),form:t(()=>[e.$page.props.jetstream.managesProfilePhotos?(p(),S("div",A,[r("input",{ref_key:"photoInput",ref:i,type:"file",class:"hidden",onChange:N},null,544),o(k,{for:"photo",value:e.lang().label.photo},null,8,["value"]),v(r("div",M,[r("img",{src:u.user.profile_photo_url,alt:u.user.name,class:"rounded h-20 w-20 object-cover"},null,8,q)],512),[[h,!c.value]]),v(r("div",G,[r("span",{class:"block rounded w-20 h-20 bg-cover bg-no-repeat bg-center",style:E("background-image: url('"+c.value+"');")},null,4)],512),[[h,c.value]]),o($,{class:"mt-2 mr-2",type:"button",onClick:_(B,["prevent"])},{default:t(()=>[n(s(e.lang().button.select_new_photo),1)]),_:1}),u.user.profile_photo_path?(p(),V($,{key:0,type:"button",class:"mt-2",onClick:_(U,["prevent"])},{default:t(()=>[n(s(e.lang().button.remove_photo),1)]),_:1})):g("",!0),o(b,{message:l(a).errors.photo,class:"mt-2"},null,8,["message"])])):g("",!0),r("div",H,[o(k,{for:"name",value:e.lang().label.name},null,8,["value"]),o(C,{id:"name",modelValue:l(a).name,"onUpdate:modelValue":m[0]||(m[0]=d=>l(a).name=d),type:"text",class:"mt-1 block w-full",autocomplete:"name",placeholder:e.lang().placeholder.name,error:l(a).errors.name},null,8,["modelValue","placeholder","error"]),o(b,{message:l(a).errors.name,class:"mt-2"},null,8,["message"])]),r("div",J,[o(k,{for:"email",value:e.lang().label.email},null,8,["value"]),o(C,{id:"email",modelValue:l(a).email,"onUpdate:modelValue":m[1]||(m[1]=d=>l(a).email=d),type:"email",class:"mt-1 block w-full",autocomplete:"username",placeholder:e.lang().placeholder.email,error:l(a).errors.email},null,8,["modelValue","placeholder","error"]),o(b,{message:l(a).errors.email,class:"mt-2"},null,8,["message"]),e.$page.props.jetstream.hasEmailVerification&&u.user.email_verified_at===null?(p(),S("div",K,[r("p",Q,[n(s(e.lang().label.email_address_is_unverified)+" ",1),o(l(F),{href:e.route("verification.send"),method:"post",as:"button",class:"underline text-sm text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary dark:focus:ring-offset-slate-800",onClick:_(j,["prevent"])},{default:t(()=>[n(s(e.lang().label.click_here_to_resend_verification_email),1)]),_:1},8,["href"])]),v(r("div",{class:"mt-2 font-medium text-sm text-green-600 dark:text-green-400"},s(e.lang().label.an_new_verification_link),513),[[h,y.value]])])):g("",!0)])]),actions:t(()=>[o(z,{on:l(a).recentlySuccessful,class:"mr-3"},{default:t(()=>[n(s(e.lang().label.saved),1)]),_:1},8,["on"]),o(R,{class:O({"opacity-25":l(a).processing}),disabled:l(a).processing},{default:t(()=>[n(s(e.lang().button.save)+" "+s(l(a).processing?"...":""),1)]),_:1},8,["class","disabled"])]),_:1}))}};export{te as default};
