import{E as C,r as M,T,o as $,d as U,b as o,w as d,u as s,m as x,e as f,t as u,a as l,g as F,j as N,C as S,n as P}from"./app-c4f5b0ab.js";import{_ as z}from"./DialogModal-ead8dcea.js";import{_ as r}from"./InputError-85854109.js";import{_ as m}from"./InputLabel-d739c1d0.js";import{_ as O}from"./ActionButton-841fd9c8.js";import{_ as q}from"./PrimaryButton-458f03b6.js";import{_ as A}from"./SecondaryButton-73139509.js";import{_}from"./TextInput-776fb8b7.js";import{_ as G}from"./ImageInput-22c042be.js";import{_ as H}from"./TextAreaInput-215a2aad.js";import{r as J}from"./PencilIcon-3be4436b.js";import"./Modal-cad72a07.js";import"./XMarkIcon-c9c2e3cc.js";const K={class:"grid grid-cols-3 space-x-2"},L={class:"col-span-1"},Q=["value"],R={class:"col-span-2"},W={class:"flex flex-col md:flex-row gap-4"},X={class:"space-y-1 w-full"},Y=l("option",{value:"5"},"***** (5) ",-1),Z=l("option",{value:"4"},"**** (4) ",-1),ee=l("option",{value:"3"},"*** (3) ",-1),se=l("option",{value:"2"},"** (2) ",-1),oe=l("option",{value:"1"},"* (1) ",-1),le=l("option",{value:null},"None",-1),ae=[Y,Z,ee,se,oe,le],te={class:"space-y-1 w-full"},ne=l("option",{value:"1"},"Published",-1),ie=l("option",{value:"0"},"Unpublished",-1),re=l("option",{value:null},"Draft",-1),me=[ne,ie,re],de={class:""},ue={class:"flex flex-col md:flex-row md:gap-4"},ce={class:"space-y-1 w-full"},pe={class:"space-y-1 w-full"},ge={class:"space-y-1"},Ne={__name:"Edit",props:{item:Object},emits:["open"],setup(E,{emit:j}){var h,b,y,w,V,k;C("title");const B=C("updateItems"),D=j,c=M(!1),i=E,e=T({image:null,name:(h=i.item)==null?void 0:h.name,designation:(b=i.item)==null?void 0:b.designation,company:(y=i.item)==null?void 0:y.company,description:(w=i.item)==null?void 0:w.description,rating:(V=i.item)==null?void 0:V.rating,status:(k=i.item)==null?void 0:k.status,_method:"PUT"}),v=()=>{var a;e.post(route("testimonials.update",(a=i.item)==null?void 0:a.id),{preserveScroll:!0,onSuccess:t=>{p(),B(t.props.testimonials)},onError:()=>null,onFinish:()=>null})},p=()=>{c.value=!1,e.errors={},e.reset()},I=a=>{a.source==="image"&&(e.image=a.file)};return(a,t)=>($(),U("div",null,[o(O,{onClick:t[0]||(t[0]=x(g=>(c.value=!0,D("open")),["prevent"]))},{default:d(()=>[o(s(J),{class:"w-4 h-auto"})]),_:1}),o(z,{show:c.value,onClose:p,"max-width":"2xl"},{title:d(()=>[f(u(a.lang().label.edit)+" "+u(i.title),1)]),content:d(()=>{var g;return[l("form",{class:"space-y-2",onSubmit:x(v,["prevent"])},[l("div",K,[l("div",L,[o(m,{for:"image",value:"Image"}),o(G,{source:"image",class:"mt-1 block w-36 h-36 rounded-full",image:(g=i.item.media[0])==null?void 0:g.original_url,onFileChange:I},null,8,["image"]),o(r,{message:s(e).errors.image,class:"mt-2"},null,8,["message"]),s(e).progress?($(),U("progress",{key:0,value:s(e).progress.percentage,max:"100"},u(s(e).progress.percentage)+"% ",9,Q)):F("",!0)]),l("div",R,[l("div",W,[l("div",X,[o(m,{for:"rating",value:a.lang().label.rating},null,8,["value"]),N(l("select",{"onUpdate:modelValue":t[1]||(t[1]=n=>s(e).rating=n),id:"rating",name:"rating",class:"block w-full"},ae,512),[[S,s(e).rating]]),o(r,{message:s(e).errors.rating},null,8,["message"])]),l("div",te,[o(m,{for:"status",value:a.lang().label.status},null,8,["value"]),N(l("select",{"onUpdate:modelValue":t[2]||(t[2]=n=>s(e).status=n),id:"status",name:"status",class:"block w-full"},me,512),[[S,s(e).status]]),o(r,{message:s(e).errors.status},null,8,["message"])])]),l("div",de,[o(m,{for:"name",value:a.lang().label.name},null,8,["value"]),o(_,{id:"name",modelValue:s(e).name,"onUpdate:modelValue":t[3]||(t[3]=n=>s(e).name=n),type:"text",class:"block w-full",autocomplete:"name",placeholder:a.lang().placeholder.name,error:s(e).errors.name},null,8,["modelValue","placeholder","error"]),o(r,{message:s(e).errors.name},null,8,["message"])]),l("div",ue,[l("div",ce,[o(m,{for:"designation",value:a.lang().label.designation},null,8,["value"]),o(_,{id:"designation",modelValue:s(e).designation,"onUpdate:modelValue":t[4]||(t[4]=n=>s(e).designation=n),type:"text",class:"block w-full",autocomplete:"designation",placeholder:a.lang().placeholder.designation,error:s(e).errors.designation},null,8,["modelValue","placeholder","error"]),o(r,{message:s(e).errors.designation},null,8,["message"])]),l("div",pe,[o(m,{for:"company",value:a.lang().label.company},null,8,["value"]),o(_,{id:"company",modelValue:s(e).company,"onUpdate:modelValue":t[5]||(t[5]=n=>s(e).company=n),type:"text",class:"block w-full",autocomplete:"company",placeholder:a.lang().placeholder.company,error:s(e).errors.company},null,8,["modelValue","placeholder","error"]),o(r,{message:s(e).errors.company},null,8,["message"])])])])]),l("div",ge,[o(m,{for:"slug",value:a.lang().label.description},null,8,["value"]),o(H,{id:"slug",modelValue:s(e).description,"onUpdate:modelValue":t[6]||(t[6]=n=>s(e).description=n),type:"text",class:"block w-full",autocomplete:"description",placeholder:a.lang().placeholder.description,error:s(e).errors.desctiption},null,8,["modelValue","placeholder","error"]),o(r,{message:s(e).errors.description},null,8,["message"])])],32)]}),footer:d(()=>[o(A,{onClick:p},{default:d(()=>[f(u(a.lang().button.cancel),1)]),_:1}),o(q,{class:P(["ml-3",{"opacity-25":s(e).processing}]),disabled:s(e).processing,onClick:v},{default:d(()=>[f(u(a.lang().button.save)+" "+u(s(e).processing?"...":""),1)]),_:1},8,["class","disabled"])]),_:1},8,["show"])]))}};export{Ne as default};
