import{D as q,r as V,h as k,T as v,i as y,o as C,d as $,b as s,w as u,u as l,a as o,t as i,m as w,e as c,j as D,G as S,n as U}from"./app-2598048d.js";import{_ as j}from"./DialogModal-1533a031.js";import{_ as p}from"./InputError-68ba7ea3.js";import{_ as f}from"./InputLabel-c9a43dc8.js";import{_ as h}from"./PrimaryButton-7f18ea50.js";import{_ as B}from"./SecondaryButton-a4f6ae6f.js";import{_ as g}from"./TextInput-d95d676f.js";import{r as M}from"./PlusIcon-1d2627bc.js";import"./Modal-aa19319a.js";import"./XMarkIcon-eb784676.js";const N={class:"hidden md:block"},E={class:"space-y-1"},I={class:"space-y-1"},T={class:"space-y-1"},z=o("option",{value:"1"},"Published",-1),F=o("option",{value:"0"},"Unpublished",-1),G=o("option",{value:null},"Draft",-1),P=[z,F,G],Y={__name:"Create",setup(x){const b=q("updateItems"),d=V(!1),t=k({question:null,answer:null,status:1});let a=v(t);y(t,e=>{a=v(e)});const _=()=>{a.post(route("faqs.store"),{preserveScroll:!0,onSuccess:e=>{b(e.props.faqs),m()},onError:()=>null,onFinish:()=>null})},m=()=>{d.value=!1,a.errors={},a.reset()};return(e,r)=>(C(),$("div",null,[s(h,{class:"flex rounded-none items-center justify-start gap-2",onClick:r[0]||(r[0]=w(n=>d.value=!0,["prevent"]))},{default:u(()=>[s(l(M),{class:"w-4 h-auto"}),o("span",N,i(e.lang().label.add),1)]),_:1}),s(j,{show:d.value,onClose:m,"max-width":"2xl"},{title:u(()=>[c(i(e.lang().label.add),1)]),content:u(()=>[o("form",{class:"space-y-2",onSubmit:w(_,["prevent"])},[o("div",E,[s(f,{for:"question",value:e.lang().label.question},null,8,["value"]),s(g,{id:"question",modelValue:t.question,"onUpdate:modelValue":r[1]||(r[1]=n=>t.question=n),type:"text",class:"block w-full",autocomplete:"question",placeholder:e.lang().placeholder.faq_question,error:l(a).errors.question},null,8,["modelValue","placeholder","error"]),s(p,{message:l(a).errors.question},null,8,["message"])]),o("div",I,[s(f,{for:"answer",value:e.lang().label.answer},null,8,["value"]),s(g,{id:"answer",modelValue:t.answer,"onUpdate:modelValue":r[2]||(r[2]=n=>t.answer=n),type:"text",class:"block w-full",autocomplete:"answer",placeholder:e.lang().placeholder.faq_answer,error:l(a).errors.answer},null,8,["modelValue","placeholder","error"]),s(p,{message:l(a).errors.answer},null,8,["message"])]),o("div",T,[s(f,{for:"status",value:e.lang().label.status},null,8,["value"]),D(o("select",{"onUpdate:modelValue":r[3]||(r[3]=n=>t.status=n),id:"status",name:"status",class:"block w-full"},P,512),[[S,t.status]]),s(p,{message:l(a).errors.status},null,8,["message"])])],32)]),footer:u(()=>[s(B,{onClick:m},{default:u(()=>[c(i(e.lang().button.cancel),1)]),_:1}),s(h,{class:U(["ml-3",{"opacity-25":l(a).processing}]),disabled:l(a).processing,onClick:_},{default:u(()=>[c(i(e.lang().button.save)+" "+i(l(a).processing?"...":""),1)]),_:1},8,["class","disabled"])]),_:1},8,["show"])]))}};export{Y as default};
