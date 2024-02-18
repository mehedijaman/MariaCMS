import{E as d,r as $,h as y,T as b,i as S,o as B,d as N,b as e,w as i,u as l,m as w,e as p,t as m,a as o,j as T,C as j,n as D}from"./app-c4f5b0ab.js";import{_ as E}from"./DialogModal-ead8dcea.js";import{_ as f}from"./InputError-85854109.js";import{_}from"./InputLabel-d739c1d0.js";import{_ as M}from"./PrimaryButton-458f03b6.js";import{_ as U}from"./ActionButton-841fd9c8.js";import{_ as I}from"./SecondaryButton-73139509.js";import{_ as k}from"./TextInput-776fb8b7.js";import{r as x}from"./PlusIcon-b2df1b43.js";import"./Modal-cad72a07.js";import"./XMarkIcon-c9c2e3cc.js";const z={class:"grid grid-cols-3 items-center"},F={class:"grid grid-cols-3 items-center"},P={class:"grid grid-cols-3 items-center"},q=o("option",{value:null},"Self Tab",-1),A=o("option",{value:"_blank"},"Blank Tab",-1),G=[q,A],ee={__name:"CreateNested",props:{parent},setup(V){const C=d("updateItems"),g=d("menu");d("items");const u=$(!1),v=V,t=y({menu_id:g.id,parent_id:v.parent.id,order:null,name:null,url:null,target:null,status:1});let s=b(t);S(t,a=>{s=b(a)});const h=()=>{s.post(route("menu.items.store",g.id),{preserveScroll:!0,onSuccess:a=>{C(a.props.items),c()},onError:()=>null,onFinish:()=>null})},c=()=>{u.value=!1,s.errors={},s.reset()};return(a,r)=>(B(),N("div",null,[e(U,{variant:"info",class:"rounded-none items-center justify-start",onClick:r[0]||(r[0]=w(n=>u.value=!0,["prevent"]))},{default:i(()=>[e(l(x),{class:"w-4 h-auto"})]),_:1}),e(E,{show:u.value,onClose:c,"max-width":"md"},{title:i(()=>[p(" Parent :: "+m(v.parent.name),1)]),content:i(()=>[o("form",{class:"space-y-2",onSubmit:w(h,["prevent"])},[o("div",z,[e(_,{for:"name",value:a.lang().label.name,class:"col-span-1"},null,8,["value"]),e(k,{id:"name",modelValue:t.name,"onUpdate:modelValue":r[1]||(r[1]=n=>t.name=n),type:"text",class:"block w-full h-9 col-span-2",autocomplete:"name",placeholder:a.lang().placeholder.menu_name,error:l(s).errors.name},null,8,["modelValue","placeholder","error"]),e(f,{message:l(s).errors.name},null,8,["message"])]),o("div",F,[e(_,{for:"url",value:a.lang().label.url,class:"col-span-1"},null,8,["value"]),e(k,{id:"url",modelValue:t.url,"onUpdate:modelValue":r[2]||(r[2]=n=>t.url=n),type:"text",class:"block w-full h-9 col-span-2",autocomplete:"url",placeholder:"https://",error:l(s).errors.url},null,8,["modelValue","error"]),e(f,{message:l(s).errors.url},null,8,["message"])]),o("div",P,[e(_,{for:"target",value:a.lang().label.target,class:"col-span-1 items-center"},null,8,["value"]),T(o("select",{"onUpdate:modelValue":r[3]||(r[3]=n=>t.target=n),id:"target",name:"target",class:"block w-full h-9 col-span-2"},G,512),[[j,t.target]]),e(f,{message:l(s).errors.target},null,8,["message"])])],32)]),footer:i(()=>[e(I,{onClick:c},{default:i(()=>[p(m(a.lang().button.cancel),1)]),_:1}),e(M,{class:D(["ml-3",{"opacity-25":l(s).processing}]),disabled:l(s).processing,onClick:h},{default:i(()=>[p(m(a.lang().button.save)+" "+m(l(s).processing?"...":""),1)]),_:1},8,["class","disabled"])]),_:1},8,["show"])]))}};export{ee as default};
