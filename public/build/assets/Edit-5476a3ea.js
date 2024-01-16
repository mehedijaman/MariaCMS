import{E as T,r as F,h as I,i as k,T as C,o as $,d as S,b as s,w as m,u as o,m as U,e as _,t as u,a as r,g as x,j as z,C as O,n as P}from"./app-55bd926a.js";import{_ as q}from"./DialogModal-5e619bba.js";import{_ as d}from"./InputError-d531a35b.js";import{_ as c}from"./InputLabel-642910fa.js";import{_ as A}from"./ImageInput-100a9a72.js";import{_ as G}from"./ActionButton-dd197941.js";import{_ as H}from"./PrimaryButton-dbe80795.js";import{_ as J}from"./SecondaryButton-7948f4a8.js";import{_ as D}from"./TextInput-31f35ad9.js";import{_ as K}from"./TextAreaInput-c0ae8b5c.js";import{g as L}from"./textHelper-8b1dfc94.js";import{r as Q}from"./PencilIcon-4c7eea83.js";import"./Modal-ca5568ac.js";import"./XMarkIcon-25757767.js";const R={class:"grid grid-cols-3 space-x-2"},W={class:"col-span-1"},X=["value"],Y={class:"col-span-2"},Z={class:"space-y-1"},ee={class:"space-y-1"},se={class:"space-y-1"},le=r("option",{value:"1"},"Published",-1),ae=r("option",{value:"0"},"Unpublished",-1),oe=r("option",{value:null},"Draft",-1),te=[le,ae,oe],re={class:"space-y-1"},we={__name:"Edit",props:{title:String,item:Object},emits:["open"],setup(E,{emit:N}){var v,b,V,w,y;const j=T("updateItems"),B=N,p=F(!1),i=E,a=I({thumbnail:(v=i.item)==null?void 0:v.thumbnail,name:(b=i.item)==null?void 0:b.name,slug:(V=i.item)==null?void 0:V.slug,description:(w=i.item)==null?void 0:w.description,status:(y=i.item)==null?void 0:y.status});k(()=>a.name,e=>{a.slug=L(e)});let l=C(a);k(a,e=>{l=C(e)});const h=()=>{var e;l.put(route("galleries.update",(e=i.item)==null?void 0:e.id),{preserveScroll:!0,onSuccess:t=>{g(),j(t.props.galleries)},onError:()=>null,onFinish:()=>null})},g=()=>{p.value=!1,l.errors={},l.reset()},M=e=>{e.source==="thumbnail"&&(a.thumbnail=e.file)};return(e,t)=>($(),S("div",null,[s(G,{onClick:t[0]||(t[0]=U(f=>(p.value=!0,B("open")),["prevent"]))},{default:m(()=>[s(o(Q),{class:"w-4 h-auto"})]),_:1}),s(q,{show:p.value,onClose:g,"max-width":"2xl"},{title:m(()=>[_(u(e.lang().label.edit)+" "+u(i.title),1)]),content:m(()=>{var f;return[r("form",{class:"space-y-2",onSubmit:U(h,["prevent"])},[r("div",R,[r("div",W,[s(c,{for:"thumbnail",value:"Thumbnail"}),s(A,{source:"thumbnail",modelValue:a.thumbnail,"onUpdate:modelValue":t[1]||(t[1]=n=>a.thumbnail=n),class:"mt-1 block w-44 h-44",image:(f=i.item.media[0])==null?void 0:f.original_url,onFileChange:M},null,8,["modelValue","image"]),s(d,{message:o(l).errors.thumbnail,class:"mt-2"},null,8,["message"]),o(l).progress?($(),S("progress",{key:0,value:o(l).progress.percentage,max:"100"},u(o(l).progress.percentage)+"% ",9,X)):x("",!0)]),r("div",Y,[r("div",Z,[s(c,{for:"name",value:e.lang().label.name},null,8,["value"]),s(D,{id:"name",modelValue:a.name,"onUpdate:modelValue":t[2]||(t[2]=n=>a.name=n),type:"text",class:"block w-full",autocomplete:"name",placeholder:e.lang().placeholder.gallery_name,error:o(l).errors.name},null,8,["modelValue","placeholder","error"]),s(d,{message:o(l).errors.name},null,8,["message"])]),r("div",ee,[s(c,{for:"slug",value:e.lang().label.slug},null,8,["value"]),s(D,{id:"slug",modelValue:a.slug,"onUpdate:modelValue":t[3]||(t[3]=n=>a.slug=n),type:"text",class:"block w-full",autocomplete:"slug",placeholder:e.lang().placeholder.slug,error:o(l).errors.slug},null,8,["modelValue","placeholder","error"]),s(d,{message:o(l).errors.slug},null,8,["message"])]),r("div",se,[s(c,{for:"status",value:e.lang().label.status},null,8,["value"]),z(r("select",{"onUpdate:modelValue":t[4]||(t[4]=n=>a.status=n),id:"status",name:"status",class:"block w-full"},te,512),[[O,a.status]]),s(d,{message:o(l).errors.status},null,8,["message"])])])]),r("div",re,[s(c,{for:"slug",value:e.lang().label.description},null,8,["value"]),s(K,{id:"slug",modelValue:a.description,"onUpdate:modelValue":t[5]||(t[5]=n=>a.description=n),type:"text",class:"block w-full",autocomplete:"description",placeholder:e.lang().placeholder.description,error:o(l).errors.desctiption},null,8,["modelValue","placeholder","error"]),s(d,{message:o(l).errors.description},null,8,["message"])])],32)]}),footer:m(()=>[s(J,{onClick:g},{default:m(()=>[_(u(e.lang().button.cancel),1)]),_:1}),s(H,{class:P(["ml-3",{"opacity-25":o(l).processing}]),disabled:o(l).processing,onClick:h},{default:m(()=>[_(u(e.lang().button.save)+" "+u(o(l).processing?"...":""),1)]),_:1},8,["class","disabled"])]),_:1},8,["show"])]))}};export{we as default};
