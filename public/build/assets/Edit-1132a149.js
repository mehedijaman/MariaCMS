import{r as k,h as S,z as $,i as w,T as v,q as N,o as p,c as D,w as x,b as r,a as e,m as E,u as d,t as m,s as F,e as O,j as g,C as h,d as f,F as I,f as T,k as P,g as Y}from"./app-9d6b1113.js";import{_ as i}from"./InputError-bb3d6837.js";import{_ as c}from"./InputLabel-f2e5caf5.js";import{_ as u}from"./TextInput-540fe3c4.js";import{_ as q}from"./TextAreaInput-7f2c8bc4.js";import{_ as z}from"./ImageInput-57b06846.js";import{g as L}from"./textHelper-8b1dfc94.js";import{_ as A}from"./AppLayout-a9b239e4.js";import{_ as G}from"./Breadcrumb-823e1307.js";import{C as H}from"./ckeditor-37499063.js";import"./Toast-3e56a37b.js";/* empty css                                              */import"./_plugin-vue_export-helper-c27b6911.js";import"./XMarkIcon-df349cb6.js";import"./ApplicationLogo-44e79128.js";import"./SwitchLocale-63d6a5fa.js";import"./index-bc83c8ef.js";import"./StarIcon-c35c7474.js";/* empty css                                               */const J={class:"p-4"},K={class:"w-full mx-auto"},Q={class:"grid grid-cols-5 gap-2"},R={class:"col-span-4 grid grid-cols-2"},W={class:"col-span-1"},X={class:"col-span-1"},Z={class:"col-span-1 flex gap-1"},ee=["disabled"],oe={class:"grid grid-cols-5 gap-2"},re={class:"col-span-4 bg-white dark:bg-slate-800 overflow-hidden shadow rounded-lg"},te={class:"col-span-1 bg-white dark:bg-slate-800 overflow-hidden shadow rounded-md text-sm"},se={id:"accordion-open","data-accordion":"open"},ae=e("h2",{id:"accordion-open-heading-1"},[e("button",{type:"button",class:"flex items-center justify-between w-full p-2 font-sans rtl:text-right text-gray-800 border border-b-0 border-gray-200 focus:ring-2 focus:ring-red-300 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3","data-accordion-target":"#post-summary","aria-expanded":"true","aria-controls":"post-summary"},[e("span",{class:"flex items-center"},"Summary"),e("svg",{"data-accordion-icon":"",class:"w-3 h-3 rotate-180 shrink-0","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 10 6"},[e("path",{stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M9 5 5 1 1 5"})])])],-1),le={id:"post-summary",class:"hidden","aria-labelledby":"accordion-open-heading-1"},de={class:"p-2 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900"},ne={class:"space-y-1"},ie=e("option",{value:"1"},"Published",-1),ce=e("option",{value:"0"},"Unpublished",-1),ue=e("option",{value:null},"Draft",-1),pe=[ie,ce,ue],ge={class:"space-y-1"},me=e("option",{value:"1"},"Yes",-1),he=e("option",{value:"0"},"No",-1),fe=[me,he],be={class:"space-y-1"},_e=e("h2",{id:"accordion-open-heading-2"},[e("button",{type:"button",class:"flex items-center justify-between w-full p-2 font-sans rtl:text-right text-gray-800 border border-b-0 border-gray-200 focus:ring-2 focus:ring-red-300 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3","data-accordion-target":"#post-categories","aria-expanded":"true","aria-controls":"post-categories"},[e("span",{class:"flex items-center"},"Categories"),e("svg",{"data-accordion-icon":"",class:"w-3 h-3 rotate-180 shrink-0","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 10 6"},[e("path",{stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M9 5 5 1 1 5"})])])],-1),ye={id:"post-categories",class:"hidden","aria-labelledby":"accordion-open-heading-2"},ke={class:"p-2 border border-b-0 border-gray-200 dark:border-gray-700 flex flex-col gap-2"},we=["index"],ve={class:"flex gap-2"},xe=["id","value","onChange","checked"],Ve=e("h2",{id:"accordion-open-heading-3"},[e("button",{type:"button",class:"flex items-center justify-between w-full p-2 font-sans rtl:text-right text-gray-800 border border-gray-200 focus:ring-2 focus:ring-red-300 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3","data-accordion-target":"#post-featured-image","aria-expanded":"true","aria-controls":"post-featured-image"},[e("span",{class:"flex items-center"},"Featured Image"),e("svg",{"data-accordion-icon":"",class:"w-3 h-3 rotate-180 shrink-0","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 10 6"},[e("path",{stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M9 5 5 1 1 5"})])])],-1),Ce={id:"post-featured-image",class:"hidden","aria-labelledby":"accordion-open-heading-3"},je={class:"p-2 border border-t-0 border-gray-200 dark:border-gray-700"},Ue={class:"space-y-1"},Me=["value"],Be=e("h2",{id:"accordion-open-heading-3"},[e("button",{type:"button",class:"flex items-center justify-between w-full p-2 font-sans rtl:text-right text-gray-800 border border-gray-200 focus:ring-2 focus:ring-red-300 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3","data-accordion-target":"#post-excerpt","aria-expanded":"false","aria-controls":"post-excerpt"},[e("span",{class:"flex items-center"},"Excerpt"),e("svg",{"data-accordion-icon":"",class:"w-3 h-3 rotate-180 shrink-0","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 10 6"},[e("path",{stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M9 5 5 1 1 5"})])])],-1),Se={id:"post-excerpt",class:"hidden","aria-labelledby":"accordion-open-heading-3"},$e={class:"p-2 border border-t-0 border-gray-200 dark:border-gray-700"},Ne={class:"space-y-1"},De=e("h2",{id:"accordion-open-heading-3"},[e("button",{type:"button",class:"flex items-center justify-between w-full p-2 font-sans rtl:text-right text-gray-800 border border-gray-200 focus:ring-2 focus:ring-red-300 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3","data-accordion-target":"#post-discussion","aria-expanded":"false","aria-controls":"post-discussion"},[e("span",{class:"flex items-center"},"Discussion"),e("svg",{"data-accordion-icon":"",class:"w-3 h-3 rotate-180 shrink-0","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 10 6"},[e("path",{stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M9 5 5 1 1 5"})])])],-1),Ee={id:"post-discussion",class:"hidden","aria-labelledby":"accordion-open-heading-3"},Fe={class:"p-2 border border-t-0 border-gray-200 dark:border-gray-700"},Oe={class:"space-y-1"},Ie=e("option",{value:"1"},"Yes",-1),Te=e("option",{value:"0"},"No",-1),Pe=[Ie,Te],Ye=e("h2",{id:"accordion-open-heading-3"},[e("button",{type:"button",class:"flex items-center justify-between w-full p-2 font-sans rtl:text-right text-gray-800 border border-gray-200 focus:ring-2 focus:ring-red-300 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3","data-accordion-target":"#post-meta-information","aria-expanded":"false","aria-controls":"post-meta-information"},[e("span",{class:"flex items-center"},"Meta Information"),e("svg",{"data-accordion-icon":"",class:"w-3 h-3 rotate-180 shrink-0","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 10 6"},[e("path",{stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M9 5 5 1 1 5"})])])],-1),qe={id:"post-meta-information",class:"hidden","aria-labelledby":"accordion-open-heading-3"},ze={class:"p-2 border border-t-0 border-gray-200 dark:border-gray-700"},Le={class:"space-y-1"},Ae={class:"space-y-1"},Ge={class:"space-y-1"},go={__name:"Edit",props:{title:String,post:Object,breadcrumbs:Object,categories:Object,postCategories:Object},setup(V){const C=k(H),j=k({}),n=V;function U(s){return n.postCategories.includes(s)}function He(s){}const o=S({name:n.post.name,slug:n.post.slug,content:n.post.content,excerpt:n.post.excerpt,password:n.post.password,categories:[],allow_comment:n.post.allow_comment,is_featured:n.post.is_featured,featured_image:n.post.featured_image,status:n.post.status,meta_title:n.post.meta_title,meta_description:n.post.meta_description,meta_keywords:n.post.meta_description,_method:"PUT"});$(()=>{o.categories.push(...n.postCategories)}),w(()=>o.name,s=>{o.slug=L(s)});let a=v(o);w(o,s=>{a=v(s)});const b=()=>{var s;a.post(route("posts.update",(s=n.post)==null?void 0:s.id),{preserveScroll:!0,onSuccess:()=>null,onError:()=>null,onFinish:()=>null})},M=s=>{s.source==="featured_image"&&(o.featured_image=s.file)};return(s,l)=>{const B=N("ckeditor");return p(),D(A,{title:n.title},{default:x(()=>{var _;return[r(G,{breadcrumbs:n.breadcrumbs},null,8,["breadcrumbs"]),e("div",J,[e("div",K,[e("form",{onSubmit:E(b,["prevent"]),class:"flex flex-col gap-2"},[e("div",Q,[e("div",R,[e("div",W,[r(u,{id:"name",modelValue:o.name,"onUpdate:modelValue":l[0]||(l[0]=t=>o.name=t),type:"text",class:"block w-full",autocomplete:"name",placeholder:s.lang().placeholder.post_name,error:d(a).errors.name},null,8,["modelValue","placeholder","error"]),r(i,{message:d(a).errors.name},null,8,["message"])]),e("div",X,[r(u,{id:"slug",modelValue:o.slug,"onUpdate:modelValue":l[1]||(l[1]=t=>o.slug=t),type:"text",class:"block w-full",autocomplete:"slug",placeholder:s.lang().placeholder.slug,error:d(a).errors.slug},null,8,["modelValue","placeholder","error"]),r(i,{message:d(a).errors.slug},null,8,["message"])])]),e("div",Z,[e("button",{disabled:d(a).processing,onClick:b,type:"button",class:"text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 px-3 font-medium rounded-md text-sm dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 col-span-1 w-full"},m(s.lang().button.update)+" "+m(d(a).processing?"...":""),9,ee),r(d(F),{href:s.route("posts.index"),class:"text-white bg-slate-600 hover:bg-slate-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-md text-sm px-5 py-3 dark:bg-slate-500 dark:hover:bg-slate-600 dark:focus:ring-slate-700 text-center items-center col-span-1 w-full"},{default:x(()=>[O(" Cancel ")]),_:1},8,["href"])])]),e("div",oe,[e("div",re,[r(i,{message:d(a).errors.content},null,8,["message"]),r(B,{editor:C.value,modelValue:o.content,"onUpdate:modelValue":l[2]||(l[2]=t=>o.content=t),config:j.value},null,8,["editor","modelValue","config"])]),e("div",te,[e("div",se,[ae,e("div",le,[e("div",de,[e("div",ne,[r(c,{for:"status",value:s.lang().label.status},null,8,["value"]),g(e("select",{"onUpdate:modelValue":l[3]||(l[3]=t=>o.status=t),id:"status",name:"status",class:"block w-full h-8 py-0 text-sm"},pe,512),[[h,o.status]]),r(i,{message:d(a).errors.status},null,8,["message"])]),e("div",ge,[r(c,{for:"is_featured",value:s.lang().label.is_featured},null,8,["value"]),g(e("select",{"onUpdate:modelValue":l[4]||(l[4]=t=>o.is_featured=t),id:"is_featured",name:"is_featured",class:"block w-full h-8 py-0 text-sm"},fe,512),[[h,o.is_featured]]),r(i,{message:d(a).errors.is_featured},null,8,["message"])]),e("div",be,[r(c,{for:"password",value:s.lang().label.password},null,8,["value"]),r(u,{id:"password",modelValue:o.password,"onUpdate:modelValue":l[5]||(l[5]=t=>o.password=t),type:"text",class:"block w-full h-8 py-0 text-sm",autocomplete:"password",placeholder:s.lang().placeholder.password,error:d(a).errors.desctiption},null,8,["modelValue","placeholder","error"]),r(i,{message:d(a).errors.password},null,8,["message"])])])]),_e,e("div",ye,[e("div",ke,[(p(!0),f(I,null,T(n.categories,t=>(p(),f("div",{index:t.id},[e("div",ve,[g(e("input",{class:"rounded dark:bg-slate-900 border-slate-300 dark:border-slate-700 text-primary dark:text-primary shadow-sm focus:ring-primary/80 dark:focus:ring-primary dark:focus:ring-offset-slate-800 dark:checked:bg-primary dark:checked:border-primary p-2",type:"checkbox",id:t.slug,value:t.id,"onUpdate:modelValue":l[6]||(l[6]=y=>o.categories=y),onChange:y=>(t.id,void 0),checked:U(t.id)},null,40,xe),[[P,o.categories]]),r(c,{for:t.slug,value:t.name},null,8,["for","value"])])],8,we))),256))])]),Ve,e("div",Ce,[e("div",je,[e("div",Ue,[r(z,{source:"featured_image",modelValue:o.featured_image,"onUpdate:modelValue":l[7]||(l[7]=t=>o.featured_image=t),image:(_=n.post.media[0])==null?void 0:_.original_url,class:"mt-1 block w-44 h-44",onFileChange:M},null,8,["modelValue","image"]),r(i,{message:d(a).errors.featured_image,class:"mt-2"},null,8,["message"]),d(a).progress?(p(),f("progress",{key:0,value:d(a).progress.percentage,max:"100"},m(d(a).progress.percentage)+"% ",9,Me)):Y("",!0)])])]),Be,e("div",Se,[e("div",$e,[e("div",Ne,[r(c,{for:"excerpt",value:s.lang().label.excerpt},null,8,["value"]),r(q,{id:"excerpt",modelValue:o.excerpt,"onUpdate:modelValue":l[8]||(l[8]=t=>o.excerpt=t),type:"text",class:"block w-full h-8 py-0 text-sm",autocomplete:"excerpt",placeholder:s.lang().placeholder.excerpt,error:d(a).errors.desctiption},null,8,["modelValue","placeholder","error"]),r(i,{message:d(a).errors.excerpt},null,8,["message"])])])]),De,e("div",Ee,[e("div",Fe,[e("div",Oe,[r(c,{for:"allow_comment",value:s.lang().label.allow_comment},null,8,["value"]),g(e("select",{"onUpdate:modelValue":l[9]||(l[9]=t=>o.allow_comment=t),id:"allow_comment",name:"allow_comment",class:"block w-full h-8 py-0 text-sm"},Pe,512),[[h,o.allow_comment]]),r(i,{message:d(a).errors.allow_comment},null,8,["message"])])])]),Ye,e("div",qe,[e("div",ze,[e("div",Le,[r(c,{for:"meta_title",value:s.lang().label.meta_title},null,8,["value"]),r(u,{id:"meta_title",modelValue:o.meta_title,"onUpdate:modelValue":l[10]||(l[10]=t=>o.meta_title=t),type:"text",class:"block w-full h-8 text-sm",autocomplete:"meta_title",placeholder:s.lang().placeholder.meta_title,error:d(a).errors.desctiption},null,8,["modelValue","placeholder","error"]),r(i,{message:d(a).errors.meta_title},null,8,["message"])]),e("div",Ae,[r(c,{for:"meta_description",value:s.lang().label.meta_description},null,8,["value"]),r(u,{id:"meta_description",modelValue:o.meta_description,"onUpdate:modelValue":l[11]||(l[11]=t=>o.meta_description=t),type:"text",class:"block w-full h-8 text-sm",autocomplete:"meta_description",placeholder:s.lang().placeholder.meta_description,error:d(a).errors.desctiption},null,8,["modelValue","placeholder","error"]),r(i,{message:d(a).errors.meta_description},null,8,["message"])]),e("div",Ge,[r(c,{for:"meta_keywords",value:s.lang().label.meta_keywords},null,8,["value"]),r(u,{id:"meta_keywords",modelValue:o.meta_keywords,"onUpdate:modelValue":l[12]||(l[12]=t=>o.meta_keywords=t),type:"text",class:"block w-full h-8 text-sm",autocomplete:"meta_keywords",placeholder:s.lang().placeholder.meta_keywords,error:d(a).errors.desctiption},null,8,["modelValue","placeholder","error"]),r(i,{message:d(a).errors.meta_keywords},null,8,["message"])])])])])])])],32)])])]}),_:1},8,["title"])}}};export{go as default};
