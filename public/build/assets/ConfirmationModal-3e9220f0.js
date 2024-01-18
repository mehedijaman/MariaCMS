import{_ as c}from"./Modal-0faaa9fe.js";import{o as n,c as r,w as m,a as t,B as o}from"./app-029d3c12.js";const d={class:"bg-white dark:bg-slate-800 px-4 pt-5 pb-4 sm:p-6 sm:pb-4"},h={class:"sm:flex sm:items-start"},x=t("div",{class:"mx-auto shrink-0 flex items-center justify-center h-12 w-12 rounded bg-rose-100 sm:mx-0 sm:h-10 sm:w-10"},[t("svg",{class:"h-6 w-6 text-rose-600 dark:text-rose-400",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"})])],-1),f={class:"mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left"},w={class:"text-lg font-medium text-slate-900 dark:text-slate-100"},_={class:"mt-4 text-sm text-slate-600 dark:text-slate-400"},p={class:"flex flex-row justify-end px-6 py-4 bg-slate-100 dark:bg-slate-800 text-right"},b={__name:"ConfirmationModal",props:{show:{type:Boolean,default:!1},maxWidth:{type:String,default:"2xl"},closeable:{type:Boolean,default:!1}},emits:["close"],setup(e,{emit:a}){const l=a,i=()=>{l("close")};return(s,u)=>(n(),r(c,{show:e.show,"max-width":e.maxWidth,closeable:e.closeable,onClose:i},{default:m(()=>[t("div",d,[t("div",h,[x,t("div",f,[t("h3",w,[o(s.$slots,"title")]),t("div",_,[o(s.$slots,"content")])])])]),t("div",p,[o(s.$slots,"footer")])]),_:3},8,["show","max-width","closeable"]))}};export{b as _};
