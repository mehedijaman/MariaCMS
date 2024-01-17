import{r as h,h as U,i as v,T as y,q as j,o as u,c as B,w as k,b as o,a as e,m as $,u as l,t as c,s as F,e as N,j as g,d as m,F as D,f as M,C as p,g as E}from"./app-029d3c12.js";import{_ as O}from"./AppLayout-b96ade91.js";import{_ as n}from"./InputError-5ba87def.js";import{_ as i}from"./InputLabel-4b2acd49.js";import{_ as w}from"./TextInput-f658579c.js";import{_ as T}from"./ImageInput-99f321b1.js";import{g as q}from"./textHelper-8b1dfc94.js";import{_ as I}from"./Breadcrumb-b1a05033.js";import{C as L}from"./ckeditor-85099a55.js";import"./Toast-047c208b.js";/* empty css                                              */import"./_plugin-vue_export-helper-c27b6911.js";import"./XMarkIcon-e53425f1.js";import"./ApplicationLogo-ead9b018.js";import"./SwitchLocale-2e53f119.js";import"./index-c4e474fb.js";/* empty css                                               */const P={class:"p-4"},Y={class:"w-full mx-auto bg-white p-4"},z={class:"grid grid-cols-5 gap-2"},A={class:"col-span-4 grid grid-cols-2 gap-2"},G={class:"col-span-1"},H={class:"col-span-1"},J={class:"col-span-1 flex gap-1 h-fit"},K=["disabled"],Q={class:"grid grid-cols-5 gap-2"},R={class:"col-span-4 bg-white dark:bg-slate-800 overflow-hidden shadow rounded-lg"},W={class:"col-span-1 bg-white dark:bg-slate-800 overflow-hidden shadow rounded-md text-sm"},X={id:"accordion-open","data-accordion":"open"},Z=e("h2",{id:"accordion-open-heading-1"},[e("button",{type:"button",class:"flex items-center justify-between w-full p-2 font-sans rtl:text-right text-gray-800 border border-b-0 border-gray-200 focus:ring-2 focus:ring-red-300 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3","data-accordion-target":"#product-summary","aria-expanded":"true","aria-controls":"product-summary"},[e("span",{class:"flex items-center"},"Summary"),e("svg",{"data-accordion-icon":"",class:"w-3 h-3 rotate-180 shrink-0","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 10 6"},[e("path",{stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M9 5 5 1 1 5"})])])],-1),ee={id:"product-summary",class:"hidden","aria-labelledby":"accordion-open-heading-1"},se={class:"p-2 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900"},oe={class:"space-y-1"},ae=["value"],re={class:"space-y-1"},te=e("option",{value:"1"},"Published",-1),le=e("option",{value:"0"},"Unpublished",-1),de=e("option",{value:null},"Draft",-1),ne=[te,le,de],ie={class:"space-y-1"},ue=e("option",{value:"1"},"Yes",-1),ce=e("option",{value:"0"},"No",-1),ge=[ue,ce],me=e("h2",{id:"accordion-open-heading-3"},[e("button",{type:"button",class:"flex items-center justify-between w-full p-2 font-sans rtl:text-right text-gray-800 border border-gray-200 focus:ring-2 focus:ring-red-300 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3","data-accordion-target":"#product-featured-image","aria-expanded":"true","aria-controls":"product-featured-image"},[e("span",{class:"flex items-center"},"Featured Image"),e("svg",{"data-accordion-icon":"",class:"w-3 h-3 rotate-180 shrink-0","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 10 6"},[e("path",{stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M9 5 5 1 1 5"})])])],-1),pe={id:"product-featured-image",class:"hidden","aria-labelledby":"accordion-open-heading-3"},fe={class:"p-2 border border-t-0 border-gray-200 dark:border-gray-700"},_e={class:"space-y-1"},be=["value"],Ee={__name:"Create",props:{title:String,breadcrumbs:Object,categories:Object},setup(f){const x=h(L),V=h({}),_=f,s=U({category_id:null,name:null,slug:null,description:null,is_featured:null,status:1,featured_image:null});v(()=>s.name,a=>{s.slug=q(a)});let t=y(s);v(s,a=>{t=y(a)});const b=()=>{t.post(route("products.store"),{preserveScroll:!0,onSuccess:()=>null,onError:()=>null,onFinish:()=>null})},C=a=>{a.source==="featured_image"&&(s.featured_image=a.file)};return(a,d)=>{const S=j("ckeditor");return u(),B(O,{title:_.title},{default:k(()=>[o(I,{breadcrumbs:_.breadcrumbs},null,8,["breadcrumbs"]),e("div",P,[e("div",Y,[e("form",{onSubmit:$(b,["prevent"]),class:"flex flex-col gap-2"},[e("div",z,[e("div",A,[e("div",G,[o(i,{for:"name",value:a.lang().label.name},null,8,["value"]),o(w,{id:"name",modelValue:s.name,"onUpdate:modelValue":d[0]||(d[0]=r=>s.name=r),type:"text",class:"block w-full",autocomplete:"name",placeholder:a.lang().placeholder.name,error:l(t).errors.name},null,8,["modelValue","placeholder","error"]),o(n,{message:l(t).errors.name},null,8,["message"])]),e("div",H,[o(i,{for:"slug",value:a.lang().label.slug},null,8,["value"]),o(w,{id:"slug",modelValue:s.slug,"onUpdate:modelValue":d[1]||(d[1]=r=>s.slug=r),type:"text",class:"block w-full",autocomplete:"slug",placeholder:a.lang().placeholder.slug,error:l(t).errors.slug},null,8,["modelValue","placeholder","error"]),o(n,{message:l(t).errors.slug},null,8,["message"])])]),e("div",J,[e("button",{disabled:l(t).processing,onClick:b,type:"button",class:"text-white bg-blue-700 hover:bg-blue-800 focus:ring-2 focus:ring-blue-300 px-3 font-sans rounded-md text-sm dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 col-span-1 w-full"},c(a.lang().button.save)+" "+c(l(t).processing?"...":""),9,K),o(l(F),{href:a.route("products.index"),class:"text-white bg-slate-600 hover:bg-slate-700 focus:ring-2 focus:ring-blue-300 font-sans rounded-md text-sm px-5 py-3 dark:bg-slate-500 dark:hover:bg-slate-600 dark:focus:ring-slate-700 text-center items-center col-span-1 w-full"},{default:k(()=>[N(" Cancel ")]),_:1},8,["href"])])]),e("div",Q,[e("div",R,[o(i,{for:"status",value:a.lang().label.description},null,8,["value"]),o(S,{editor:x.value,id:"description",modelValue:s.description,"onUpdate:modelValue":d[2]||(d[2]=r=>s.description=r),config:V.value},null,8,["editor","modelValue","config"]),o(n,{message:l(t).errors.description},null,8,["message"])]),e("div",W,[e("div",X,[Z,e("div",ee,[e("div",se,[e("div",oe,[o(i,{for:"category_id",value:a.lang().label.category},null,8,["value"]),g(e("select",{"onUpdate:modelValue":d[3]||(d[3]=r=>s.category_id=r),id:"category_id",name:"category_id",class:"block w-full h-8 py-0 text-sm"},[(u(!0),m(D,null,M(f.categories,r=>(u(),m("option",{key:r.id,value:r.id},c(r.name),9,ae))),128))],512),[[p,s.category_id]]),o(n,{message:l(t).errors.category_id},null,8,["message"])]),e("div",re,[o(i,{for:"status",value:a.lang().label.status},null,8,["value"]),g(e("select",{"onUpdate:modelValue":d[4]||(d[4]=r=>s.status=r),id:"status",name:"status",class:"block w-full h-8 py-0 text-sm"},ne,512),[[p,s.status]]),o(n,{message:l(t).errors.status},null,8,["message"])]),e("div",ie,[o(i,{for:"is_featured",value:a.lang().label.is_featured},null,8,["value"]),g(e("select",{"onUpdate:modelValue":d[5]||(d[5]=r=>s.is_featured=r),id:"is_featured",name:"is_featured",class:"block w-full h-8 py-0 text-sm"},ge,512),[[p,s.is_featured]]),o(n,{message:l(t).errors.is_featured},null,8,["message"])])])]),me,e("div",pe,[e("div",fe,[e("div",_e,[o(T,{source:"featured_image",modelValue:s.featured_image,"onUpdate:modelValue":d[6]||(d[6]=r=>s.featured_image=r),class:"mt-1 block w-44 h-44",onFileChange:C},null,8,["modelValue"]),o(n,{message:l(t).errors.featured_image,class:"mt-2"},null,8,["message"]),l(t).progress?(u(),m("progress",{key:0,value:l(t).progress.percentage,max:"100"},c(l(t).progress.percentage)+"% ",9,be)):E("",!0)])])])])])])],32)])])]),_:1},8,["title"])}}};export{Ee as default};
