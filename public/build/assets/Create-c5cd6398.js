import{E as g,h as $,T as k,i as D,o as u,d as i,a,b as s,j as V,C as y,F as m,f,t as d,g as w,u as o,w as E,e as F,n as j,m as I}from"./app-c4f5b0ab.js";import{_ as p}from"./InputError-85854109.js";import{_}from"./InputLabel-d739c1d0.js";import{_ as M}from"./PrimaryButton-458f03b6.js";import{_ as C}from"./TextInput-776fb8b7.js";const z={class:"grid grid-cols-3 items-center"},L=a("option",{value:null},"/",-1),q=["value"],x=["value"],A=["value"],G={class:"grid grid-cols-3 items-center"},H={class:"grid grid-cols-3 items-center"},J={class:"grid grid-cols-3 items-center"},K=a("option",{value:null},"Self Tab",-1),O=a("option",{value:"_blank"},"Blank Tab",-1),P=[K,O],ee={__name:"Create",setup(Q){const S=g("updateItems"),v=g("menu"),B=g("items"),t=$({menu_id:v.id,parent_id:null,order:null,name:null,url:null,target:null,status:1});let l=k(t);D(t,r=>{l=k(r)});const h=()=>{l.post(route("menu.items.store",v.id),{preserveScroll:!0,onSuccess:r=>{S(r.props.items)},onError:()=>null,onFinish:()=>null})};return(r,n)=>(u(),i("form",{class:"space-y-2",onSubmit:I(h,["prevent"])},[a("div",z,[s(_,{for:"parent_id",value:r.lang().label.parent,class:"col-span-1 items-center"},null,8,["value"]),V(a("select",{"onUpdate:modelValue":n[0]||(n[0]=e=>t.parent_id=e),id:"parent_id",name:"parent_id",class:"block w-full h-9 col-span-2"},[L,(u(!0),i(m,null,f(o(B),(e,N)=>(u(),i(m,{key:N},[a("option",{value:e.id},d(e.name),9,q),e.children?(u(!0),i(m,{key:0},f(e.children,(c,T)=>(u(),i(m,{key:T},[a("option",{value:c.id},"    - "+d(c.name),9,x),c.children?(u(!0),i(m,{key:0},f(c.children,(b,U)=>(u(),i("option",{key:U,value:b.id},"        - "+d(b.name),9,A))),128)):w("",!0)],64))),128)):w("",!0)],64))),128))],512),[[y,t.parent_id]]),s(p,{message:o(l).errors.parent_id},null,8,["message"])]),a("div",G,[s(_,{for:"name",value:r.lang().label.name,class:"col-span-1"},null,8,["value"]),s(C,{id:"name",modelValue:t.name,"onUpdate:modelValue":n[1]||(n[1]=e=>t.name=e),type:"text",class:"block w-full h-9 col-span-2",autocomplete:"name",placeholder:r.lang().placeholder.menu_name,error:o(l).errors.name},null,8,["modelValue","placeholder","error"]),s(p,{message:o(l).errors.name},null,8,["message"])]),a("div",H,[s(_,{for:"url",value:r.lang().label.url,class:"col-span-1"},null,8,["value"]),s(C,{id:"url",modelValue:t.url,"onUpdate:modelValue":n[2]||(n[2]=e=>t.url=e),type:"text",class:"block w-full h-9 col-span-2",autocomplete:"url",placeholder:"https://",error:o(l).errors.url},null,8,["modelValue","error"]),s(p,{message:o(l).errors.url},null,8,["message"])]),a("div",J,[s(_,{for:"target",value:r.lang().label.target,class:"col-span-1 items-center"},null,8,["value"]),V(a("select",{"onUpdate:modelValue":n[3]||(n[3]=e=>t.target=e),id:"target",name:"target",class:"block w-full h-9 col-span-2"},P,512),[[y,t.target]]),s(p,{message:o(l).errors.target},null,8,["message"])]),s(M,{class:j({"opacity-25":o(l).processing}),disabled:o(l).processing,onClick:h},{default:E(()=>[F(d(r.lang().button.save)+" "+d(o(l).processing?"...":""),1)]),_:1},8,["class","disabled"])],32))}};export{ee as default};
