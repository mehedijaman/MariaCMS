import{r as _,h as B,i as y,T as k,q as M,o as u,c as S,w as v,b as r,a as e,m as $,u as l,t as m,s as N,e as D,j as p,C as h,d as f,F,f as E,k as I,g as O}from"./app-40e302ae.js";import{_ as T}from"./AppLayout-41e5c864.js";import{_ as n}from"./InputError-54276dc2.js";import{_ as i}from"./InputLabel-99c3d693.js";import{_ as c}from"./TextInput-e0c63212.js";import{_ as Y}from"./TextAreaInput-584ba47e.js";import{_ as q}from"./ImageInput-c9c1a446.js";import{g as L}from"./textHelper-8b1dfc94.js";import{_ as P}from"./Breadcrumb-d50aa64f.js";import{C as z}from"./ckeditor-248e791f.js";import"./Toast-55aefdbe.js";/* empty css                                              */import"./_plugin-vue_export-helper-c27b6911.js";import"./XMarkIcon-5aea3a76.js";import"./ApplicationLogo-f456f601.js";import"./SwitchLocale-96c25329.js";import"./index-316c9229.js";/* empty css                                               */const A={class:"p-4"},G={class:"w-full mx-auto"},H={class:"grid grid-cols-5 gap-2"},J={class:"col-span-4 grid grid-cols-2"},K={class:"col-span-1"},Q={class:"col-span-1"},R={class:"col-span-1 flex gap-1"},W=["disabled"],X={class:"grid grid-cols-5 gap-2"},Z={class:"col-span-4 bg-white dark:bg-slate-800 overflow-hidden shadow rounded-lg"},ee={class:"col-span-1 bg-white dark:bg-slate-800 overflow-hidden shadow rounded-md text-sm"},re={id:"accordion-open","data-accordion":"open"},oe=e("h2",{id:"accordion-open-heading-1"},[e("button",{type:"button",class:"flex items-center justify-between w-full p-2 font-sans rtl:text-right text-gray-800 border border-b-0 border-gray-200 focus:ring-2 focus:ring-red-300 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3","data-accordion-target":"#post-summary","aria-expanded":"true","aria-controls":"post-summary"},[e("span",{class:"flex items-center"},"Summary"),e("svg",{"data-accordion-icon":"",class:"w-3 h-3 rotate-180 shrink-0","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 10 6"},[e("path",{stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M9 5 5 1 1 5"})])])],-1),te={id:"post-summary",class:"hidden","aria-labelledby":"accordion-open-heading-1"},se={class:"p-2 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900"},ae={class:"space-y-1"},le=e("option",{value:"1"},"Published",-1),de=e("option",{value:"0"},"Unpublished",-1),ne=e("option",{value:null},"Draft",-1),ie=[le,de,ne],ce={class:"space-y-1"},ue=e("option",{value:"1"},"Yes",-1),pe=e("option",{value:"0"},"No",-1),ge=[ue,pe],me={class:"space-y-1"},he=e("h2",{id:"accordion-open-heading-2"},[e("button",{type:"button",class:"flex items-center justify-between w-full p-2 font-sans rtl:text-right text-gray-800 border border-b-0 border-gray-200 focus:ring-2 focus:ring-red-300 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3","data-accordion-target":"#post-categories","aria-expanded":"true","aria-controls":"post-categories"},[e("span",{class:"flex items-center"},"Categories"),e("svg",{"data-accordion-icon":"",class:"w-3 h-3 rotate-180 shrink-0","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 10 6"},[e("path",{stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M9 5 5 1 1 5"})])])],-1),fe={id:"post-categories",class:"hidden","aria-labelledby":"accordion-open-heading-2"},be={class:"p-2 border border-b-0 border-gray-200 dark:border-gray-700 flex flex-col gap-2"},_e=["index"],ye={class:"flex gap-2"},ke=["id","value"],ve=e("h2",{id:"accordion-open-heading-3"},[e("button",{type:"button",class:"flex items-center justify-between w-full p-2 font-sans rtl:text-right text-gray-800 border border-gray-200 focus:ring-2 focus:ring-red-300 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3","data-accordion-target":"#post-featured-image","aria-expanded":"true","aria-controls":"post-featured-image"},[e("span",{class:"flex items-center"},"Featured Image"),e("svg",{"data-accordion-icon":"",class:"w-3 h-3 rotate-180 shrink-0","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 10 6"},[e("path",{stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M9 5 5 1 1 5"})])])],-1),we={id:"post-featured-image",class:"hidden","aria-labelledby":"accordion-open-heading-3"},xe={class:"p-2 border border-t-0 border-gray-200 dark:border-gray-700"},Ve={class:"space-y-1"},Ce=["value"],je=e("h2",{id:"accordion-open-heading-3"},[e("button",{type:"button",class:"flex items-center justify-between w-full p-2 font-sans rtl:text-right text-gray-800 border border-gray-200 focus:ring-2 focus:ring-red-300 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3","data-accordion-target":"#post-excerpt","aria-expanded":"false","aria-controls":"post-excerpt"},[e("span",{class:"flex items-center"},"Excerpt"),e("svg",{"data-accordion-icon":"",class:"w-3 h-3 rotate-180 shrink-0","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 10 6"},[e("path",{stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M9 5 5 1 1 5"})])])],-1),Ue={id:"post-excerpt",class:"hidden","aria-labelledby":"accordion-open-heading-3"},Be={class:"p-2 border border-t-0 border-gray-200 dark:border-gray-700"},Me={class:"space-y-1"},Se=e("h2",{id:"accordion-open-heading-3"},[e("button",{type:"button",class:"flex items-center justify-between w-full p-2 font-sans rtl:text-right text-gray-800 border border-gray-200 focus:ring-2 focus:ring-red-300 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3","data-accordion-target":"#post-discussion","aria-expanded":"false","aria-controls":"post-discussion"},[e("span",{class:"flex items-center"},"Discussion"),e("svg",{"data-accordion-icon":"",class:"w-3 h-3 rotate-180 shrink-0","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 10 6"},[e("path",{stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M9 5 5 1 1 5"})])])],-1),$e={id:"post-discussion",class:"hidden","aria-labelledby":"accordion-open-heading-3"},Ne={class:"p-2 border border-t-0 border-gray-200 dark:border-gray-700"},De={class:"space-y-1"},Fe=e("option",{value:"1"},"Yes",-1),Ee=e("option",{value:"0"},"No",-1),Ie=[Fe,Ee],Oe=e("h2",{id:"accordion-open-heading-3"},[e("button",{type:"button",class:"flex items-center justify-between w-full p-2 font-sans rtl:text-right text-gray-800 border border-gray-200 focus:ring-2 focus:ring-red-300 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3","data-accordion-target":"#post-meta-information","aria-expanded":"false","aria-controls":"post-meta-information"},[e("span",{class:"flex items-center"},"Meta Information"),e("svg",{"data-accordion-icon":"",class:"w-3 h-3 rotate-180 shrink-0","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 10 6"},[e("path",{stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M9 5 5 1 1 5"})])])],-1),Te={id:"post-meta-information",class:"hidden","aria-labelledby":"accordion-open-heading-3"},Ye={class:"p-2 border border-t-0 border-gray-200 dark:border-gray-700"},qe={class:"space-y-1"},Le={class:"space-y-1"},Pe={class:"space-y-1"},dr={__name:"Create",props:{title:String,breadcrumbs:Object,categories:Object},setup(w){const x=_(z),V=_({}),g=w,o=B({name:null,slug:null,content:null,excerpt:null,password:null,categories:[],allow_comment:1,is_featured:0,featured_image:null,status:1,meta_title:null,meta_description:null,meta_keywords:null});y(()=>o.name,d=>{o.slug=L(d)});let s=k(o);y(o,d=>{s=k(d)});const b=()=>{s.post(route("posts.store"),{preserveScroll:!0,onSuccess:()=>null,onError:()=>null,onFinish:()=>null})},C=d=>{d.source==="featured_image"&&(o.featured_image=d.file)};return(d,a)=>{const j=M("ckeditor");return u(),S(T,{title:g.title},{default:v(()=>[r(P,{breadcrumbs:g.breadcrumbs},null,8,["breadcrumbs"]),e("div",A,[e("div",G,[e("form",{onSubmit:$(b,["prevent"]),class:"flex flex-col gap-2"},[e("div",H,[e("div",J,[e("div",K,[r(c,{id:"name",modelValue:o.name,"onUpdate:modelValue":a[0]||(a[0]=t=>o.name=t),type:"text",class:"block w-full",autocomplete:"name",placeholder:d.lang().placeholder.post_name,error:l(s).errors.name},null,8,["modelValue","placeholder","error"]),r(n,{message:l(s).errors.name},null,8,["message"])]),e("div",Q,[r(c,{id:"slug",modelValue:o.slug,"onUpdate:modelValue":a[1]||(a[1]=t=>o.slug=t),type:"text",class:"block w-full",autocomplete:"slug",placeholder:d.lang().placeholder.slug,error:l(s).errors.slug},null,8,["modelValue","placeholder","error"]),r(n,{message:l(s).errors.slug},null,8,["message"])])]),e("div",R,[e("button",{disabled:l(s).processing,onClick:b,type:"button",class:"text-white bg-blue-700 hover:bg-blue-800 focus:ring-2 focus:ring-blue-300 px-3 font-sans rounded-md text-sm dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 col-span-1 w-full"},m(d.lang().button.save)+" "+m(l(s).processing?"...":""),9,W),r(l(N),{href:d.route("posts.index"),class:"text-white bg-slate-600 hover:bg-slate-700 focus:ring-2 focus:ring-blue-300 font-sans rounded-md text-sm px-5 py-3 dark:bg-slate-500 dark:hover:bg-slate-600 dark:focus:ring-slate-700 text-center items-center col-span-1 w-full"},{default:v(()=>[D(" Cancel ")]),_:1},8,["href"])])]),e("div",X,[e("div",Z,[r(n,{message:l(s).errors.content},null,8,["message"]),r(j,{editor:x.value,modelValue:o.content,"onUpdate:modelValue":a[2]||(a[2]=t=>o.content=t),config:V.value},null,8,["editor","modelValue","config"])]),e("div",ee,[e("div",re,[oe,e("div",te,[e("div",se,[e("div",ae,[r(i,{for:"status",value:d.lang().label.status},null,8,["value"]),p(e("select",{"onUpdate:modelValue":a[3]||(a[3]=t=>o.status=t),id:"status",name:"status",class:"block w-full h-8 py-0 text-sm"},ie,512),[[h,o.status]]),r(n,{message:l(s).errors.status},null,8,["message"])]),e("div",ce,[r(i,{for:"is_featured",value:d.lang().label.is_featured},null,8,["value"]),p(e("select",{"onUpdate:modelValue":a[4]||(a[4]=t=>o.is_featured=t),id:"is_featured",name:"is_featured",class:"block w-full h-8 py-0 text-sm"},ge,512),[[h,o.is_featured]]),r(n,{message:l(s).errors.is_featured},null,8,["message"])]),e("div",me,[r(i,{for:"password",value:d.lang().label.password},null,8,["value"]),r(c,{id:"password",modelValue:o.password,"onUpdate:modelValue":a[5]||(a[5]=t=>o.password=t),type:"text",class:"block w-full h-8 py-0 text-sm",autocomplete:"password",placeholder:d.lang().placeholder.password,error:l(s).errors.desctiption},null,8,["modelValue","placeholder","error"]),r(n,{message:l(s).errors.password},null,8,["message"])])])]),he,e("div",fe,[e("div",be,[(u(!0),f(F,null,E(g.categories,t=>(u(),f("div",{index:t.id},[e("div",ye,[p(e("input",{class:"rounded dark:bg-slate-900 border-slate-300 dark:border-slate-700 text-primary dark:text-primary shadow-sm focus:ring-primary/80 dark:focus:ring-primary dark:focus:ring-offset-slate-800 dark:checked:bg-primary dark:checked:border-primary p-2",type:"checkbox",id:t.slug,value:t.id,"onUpdate:modelValue":a[6]||(a[6]=U=>o.categories=U)},null,8,ke),[[I,o.categories]]),r(i,{for:t.slug,value:t.name},null,8,["for","value"])])],8,_e))),256))])]),ve,e("div",we,[e("div",xe,[e("div",Ve,[r(q,{source:"featured_image",modelValue:o.featured_image,"onUpdate:modelValue":a[7]||(a[7]=t=>o.featured_image=t),class:"mt-1 block w-44 h-44",onFileChange:C},null,8,["modelValue"]),r(n,{message:l(s).errors.featured_image,class:"mt-2"},null,8,["message"]),l(s).progress?(u(),f("progress",{key:0,value:l(s).progress.percentage,max:"100"},m(l(s).progress.percentage)+"% ",9,Ce)):O("",!0)])])]),je,e("div",Ue,[e("div",Be,[e("div",Me,[r(i,{for:"excerpt",value:d.lang().label.excerpt},null,8,["value"]),r(Y,{id:"excerpt",modelValue:o.excerpt,"onUpdate:modelValue":a[8]||(a[8]=t=>o.excerpt=t),type:"text",class:"block w-full h-8 py-0 text-sm",autocomplete:"excerpt",placeholder:d.lang().placeholder.excerpt,error:l(s).errors.desctiption},null,8,["modelValue","placeholder","error"]),r(n,{message:l(s).errors.excerpt},null,8,["message"])])])]),Se,e("div",$e,[e("div",Ne,[e("div",De,[r(i,{for:"allow_comment",value:d.lang().label.allow_comment},null,8,["value"]),p(e("select",{"onUpdate:modelValue":a[9]||(a[9]=t=>o.allow_comment=t),id:"allow_comment",name:"allow_comment",class:"block w-full h-8 py-0 text-sm"},Ie,512),[[h,o.allow_comment]]),r(n,{message:l(s).errors.allow_comment},null,8,["message"])])])]),Oe,e("div",Te,[e("div",Ye,[e("div",qe,[r(i,{for:"meta_title",value:d.lang().label.meta_title},null,8,["value"]),r(c,{id:"meta_title",modelValue:o.meta_title,"onUpdate:modelValue":a[10]||(a[10]=t=>o.meta_title=t),type:"text",class:"block w-full h-8 text-sm",autocomplete:"meta_title",placeholder:d.lang().placeholder.meta_title,error:l(s).errors.desctiption},null,8,["modelValue","placeholder","error"]),r(n,{message:l(s).errors.meta_title},null,8,["message"])]),e("div",Le,[r(i,{for:"meta_description",value:d.lang().label.meta_description},null,8,["value"]),r(c,{id:"meta_description",modelValue:o.meta_description,"onUpdate:modelValue":a[11]||(a[11]=t=>o.meta_description=t),type:"text",class:"block w-full h-8 text-sm",autocomplete:"meta_description",placeholder:d.lang().placeholder.meta_description,error:l(s).errors.desctiption},null,8,["modelValue","placeholder","error"]),r(n,{message:l(s).errors.meta_description},null,8,["message"])]),e("div",Pe,[r(i,{for:"meta_keywords",value:d.lang().label.meta_keywords},null,8,["value"]),r(c,{id:"meta_keywords",modelValue:o.meta_keywords,"onUpdate:modelValue":a[12]||(a[12]=t=>o.meta_keywords=t),type:"text",class:"block w-full h-8 text-sm",autocomplete:"meta_keywords",placeholder:d.lang().placeholder.meta_keywords,error:l(s).errors.desctiption},null,8,["modelValue","placeholder","error"]),r(n,{message:l(s).errors.meta_keywords},null,8,["message"])])])])])])])],32)])])]),_:1},8,["title"])}}};export{dr as default};
