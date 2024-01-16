import{E as T,r as j,h as D,T as V,i as M,o as N,d as U,b as e,w as m,u as t,m as y,e as p,t as u,a as i,j as I,C as z,n as F}from"./app-55bd926a.js";import{_ as O}from"./DialogModal-5e619bba.js";import{_ as f}from"./InputError-d531a35b.js";import{_}from"./InputLabel-642910fa.js";import{_ as q}from"./ActionButton-dd197941.js";import{_ as x}from"./PrimaryButton-dbe80795.js";import{_ as A}from"./SecondaryButton-7948f4a8.js";import{_ as $}from"./TextInput-31f35ad9.js";import{r as G}from"./PencilIcon-4c7eea83.js";import"./Modal-ca5568ac.js";import"./XMarkIcon-25757767.js";const H={class:"space-y-1 grid grid-cols-3"},J={class:"space-y-1 grid grid-cols-3"},K={class:"space-y-1 grid grid-cols-3"},L=i("option",{value:null},"Self Tab",-1),P=i("option",{value:"_blank"},"Blank Tab",-1),Q=[L,P],re={__name:"Edit",props:{title:String,item:Object},emits:["open"],setup(C,{emit:S}){var v,b,h,w,k;const B=T("updateItems"),E=S,c=j(!1),o=C,r=D({menu_id:(v=o.item)==null?void 0:v.menu_id,parent_id:(b=o.item)==null?void 0:b.parent_id,name:(h=o.item)==null?void 0:h.name,url:(w=o.item)==null?void 0:w.url,target:(k=o.item)==null?void 0:k.target});let a=V(r);M(r,s=>{a=V(s)});const g=()=>{var s,l;a.put(route("menu.items.update",{menu:(s=o.item)==null?void 0:s.menu_id,item:(l=o.item)==null?void 0:l.id}),{preserveScroll:!0,onSuccess:n=>{d(),B(n.props.items)},onError:()=>null,onFinish:()=>null})},d=()=>{c.value=!1,a.errors={},a.reset()};return(s,l)=>(N(),U("div",null,[e(q,{onClick:l[0]||(l[0]=y(n=>(c.value=!0,E("open")),["prevent"]))},{default:m(()=>[e(t(G),{class:"w-4 h-auto"})]),_:1}),e(O,{show:c.value,onClose:d,"max-width":"md"},{title:m(()=>[p(u(s.lang().label.edit)+" "+u(o.title),1)]),content:m(()=>[i("form",{class:"space-y-2",onSubmit:y(g,["prevent"])},[i("div",H,[e(_,{for:"name",value:s.lang().label.name,class:"col-span-1"},null,8,["value"]),e($,{id:"name",modelValue:r.name,"onUpdate:modelValue":l[1]||(l[1]=n=>r.name=n),type:"text",class:"block w-full h-9 col-span-2",autocomplete:"name",placeholder:s.lang().placeholder.menu_name,error:t(a).errors.name},null,8,["modelValue","placeholder","error"]),e(f,{message:t(a).errors.name},null,8,["message"])]),i("div",J,[e(_,{for:"url",value:s.lang().label.url,class:"col-span-1"},null,8,["value"]),e($,{id:"url",modelValue:r.url,"onUpdate:modelValue":l[2]||(l[2]=n=>r.url=n),type:"text",class:"block w-full h-9 col-span-2",autocomplete:"url",placeholder:"https://",error:t(a).errors.url},null,8,["modelValue","error"]),e(f,{message:t(a).errors.url},null,8,["message"])]),i("div",K,[e(_,{for:"target",value:s.lang().label.target,class:"col-span-1 items-center"},null,8,["value"]),I(i("select",{"onUpdate:modelValue":l[3]||(l[3]=n=>r.target=n),id:"target",name:"target",class:"block w-full h-9 col-span-2"},Q,512),[[z,r.target]]),e(f,{message:t(a).errors.target},null,8,["message"])])],32)]),footer:m(()=>[e(A,{onClick:d},{default:m(()=>[p(u(s.lang().button.cancel),1)]),_:1}),e(x,{class:F(["ml-3",{"opacity-25":t(a).processing}]),disabled:t(a).processing,onClick:g},{default:m(()=>[p(u(s.lang().button.save)+" "+u(t(a).processing?"...":""),1)]),_:1},8,["class","disabled"])]),_:1},8,["show"])]))}};export{re as default};
