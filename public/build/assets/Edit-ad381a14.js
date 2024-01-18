import{E as I,r as M,T as F,o as y,d as C,b as l,w as n,u as s,m as $,e as g,t as m,a,g as T,j as S,C as U,n as z}from"./app-029d3c12.js";import{_ as O}from"./DialogModal-d0f6ace0.js";import{_ as u}from"./InputError-5ba87def.js";import{_ as d}from"./InputLabel-4b2acd49.js";import{_ as P}from"./ImageInput-99f321b1.js";import{_ as q}from"./ActionButton-0db8adf7.js";import{_ as x}from"./PrimaryButton-4a147dbe.js";import{_ as A}from"./SecondaryButton-c3ca0618.js";import{_ as f}from"./TextInput-f658579c.js";import{r as G}from"./PencilIcon-c6d05811.js";import"./Modal-0faaa9fe.js";import"./XMarkIcon-e53425f1.js";const H={class:"space-y-1"},J=["value"],K={class:"space-y-1"},L={class:"space-y-1"},Q={class:"grid grid-cols-3 gap-2"},R={class:"col-span-2"},W={class:"col-span-1"},X=["error"],Y=a("option",{value:null},"Self",-1),Z=a("option",{value:"_blank"},"Blank",-1),ee=[Y,Z],se={class:"space-y-1"},le=a("option",{value:1},"Published",-1),te=a("option",{value:0},"Unpublished",-1),oe=a("option",{value:null},"Draft",-1),ae=[le,te,oe],he={__name:"Edit",props:{title:String,item:Object},emits:["open"],setup(B,{emit:E}){var v,h,k,b,V,w;const N=I("updateItems"),j=E,p=M(!1),i=B,e=F({image:null,title:(v=i.item)==null?void 0:v.title,description:(h=i.item)==null?void 0:h.description,link:(k=i.item)==null?void 0:k.link,target:(b=i.item)==null?void 0:b.target,order:(V=i.item)==null?void 0:V.order,status:(w=i.item)==null?void 0:w.status}),_=()=>{var o,t;e.put(route("slider.items.update",{slider:(o=i.item)==null?void 0:o.slider_id,item:(t=i.item)==null?void 0:t.id}),{preserveScroll:!0,onSuccess:r=>{N(r.props.slider_items),c()},onError:()=>null,onFinish:()=>null})},c=()=>{p.value=!1,e.errors={},e.reset()},D=o=>{o.source==="image"&&(e.image=o.file)};return(o,t)=>(y(),C("div",null,[l(q,{onClick:t[0]||(t[0]=$(r=>(p.value=!0,j("open")),["prevent"]))},{default:n(()=>[l(s(G),{class:"w-4 h-auto"})]),_:1}),l(O,{show:p.value,onClose:c,"max-width":"2xl"},{title:n(()=>[g(m(o.lang().label.edit)+" "+m(i.title),1)]),content:n(()=>[a("form",{class:"space-y-2",onSubmit:$(_,["prevent"])},[a("div",H,[l(d,{for:"image",value:"Image"}),l(P,{source:"image",modelValue:s(e).image,"onUpdate:modelValue":t[1]||(t[1]=r=>s(e).image=r),class:"mt-1 block w-full h-64",image:i.item.media[0].original_url,onFileChange:D},null,8,["modelValue","image"]),l(u,{message:s(e).errors.image,class:"mt-2"},null,8,["message"]),s(e).progress?(y(),C("progress",{key:0,value:s(e).progress.percentage,max:"100"},m(s(e).progress.percentage)+"% ",9,J)):T("",!0)]),a("div",K,[l(d,{for:"title",value:o.lang().label.title},null,8,["value"]),l(f,{id:"title",modelValue:s(e).title,"onUpdate:modelValue":t[2]||(t[2]=r=>s(e).title=r),type:"text",class:"block w-full",autocomplete:"title",placeholder:o.lang().placeholder.slider_title,error:s(e).errors.title},null,8,["modelValue","placeholder","error"]),l(u,{message:s(e).errors.name},null,8,["message"])]),a("div",L,[l(d,{for:"slug",value:o.lang().label.description},null,8,["value"]),l(f,{id:"slug",modelValue:s(e).description,"onUpdate:modelValue":t[3]||(t[3]=r=>s(e).description=r),type:"text",class:"block w-full",autocomplete:"description",placeholder:o.lang().placeholder.description,error:s(e).errors.desctiption},null,8,["modelValue","placeholder","error"]),l(u,{message:s(e).errors.description},null,8,["message"])]),a("div",Q,[a("div",R,[l(d,{for:"link",value:o.lang().label.link},null,8,["value"]),l(f,{id:"link",modelValue:s(e).link,"onUpdate:modelValue":t[4]||(t[4]=r=>s(e).link=r),type:"text",class:"block w-full",autocomplete:"link",placeholder:"https://",error:s(e).errors.link},null,8,["modelValue","error"]),l(u,{message:s(e).errors.link},null,8,["message"])]),a("div",W,[l(d,{for:"target",value:o.lang().label.target},null,8,["value"]),S(a("select",{"onUpdate:modelValue":t[5]||(t[5]=r=>s(e).target=r),id:"target",name:"target",class:"block w-full",error:s(e).errors.target},ee,8,X),[[U,s(e).target]]),l(u,{message:s(e).errors.target},null,8,["message"])])]),a("div",se,[l(d,{for:"status",value:o.lang().label.status},null,8,["value"]),S(a("select",{"onUpdate:modelValue":t[6]||(t[6]=r=>s(e).status=r),id:"status",name:"status",class:"block w-full"},ae,512),[[U,s(e).status]]),l(u,{message:s(e).errors.status},null,8,["message"])])],32)]),footer:n(()=>[l(A,{onClick:c},{default:n(()=>[g(m(o.lang().button.cancel),1)]),_:1}),l(x,{class:z(["ml-3",{"opacity-25":s(e).processing}]),disabled:s(e).processing,onClick:_},{default:n(()=>[g(m(o.lang().button.save)+" "+m(s(e).processing?"...":""),1)]),_:1},8,["class","disabled"])]),_:1},8,["show"])]))}};export{he as default};
