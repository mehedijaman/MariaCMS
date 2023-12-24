import{o as i,c as n,w as d,a as e,B as a,m as c,b as m,u as f}from"./app-983f79d7.js";import{_ as x}from"./Modal-ef71f02a.js";import{r as u}from"./XMarkIcon-29e0de1e.js";const h={class:"px-6 py-4"},b={class:"flex justify-between items-center text-lg font-medium text-slate-900 dark:text-slate-100 space-x-2"},p={class:"mt-4 text-sm text-slate-600 dark:text-slate-400"},g={class:"flex flex-row justify-end px-6 py-4 bg-slate-100 dark:bg-slate-900/30 text-right"},y={__name:"DialogModal",props:{show:{type:Boolean,default:!1},maxWidth:{type:String,default:"xl"},closeable:{type:Boolean,default:!1}},emits:["close"],setup(t,{emit:l}){const r=l,o=()=>{r("close")};return(s,w)=>(i(),n(x,{show:t.show,"max-width":t.maxWidth,closeable:t.closeable,onClose:o},{default:d(()=>[e("div",h,[e("div",b,[a(s.$slots,"title"),e("button",{class:"inline-flex items-center p-2 border border-slate-200 dark:border-slate-700 text-sm leading-4 font-medium rounded text-slate-500 dark:text-slate-400 bg-white dark:bg-slate-800 hover:text-slate-700 dark:hover:text-slate-300 focus:outline-none focus:bg-slate-50 dark:focus:bg-slate-700 active:bg-slate-50 dark:active:bg-slate-700 transition ease-in-out duration-150",onClick:c(o,["prevent"])},[m(f(u),{class:"w-4 h-auto"})])]),e("div",p,[a(s.$slots,"content")])]),e("div",g,[a(s.$slots,"footer")])]),_:3},8,["show","max-width","closeable"]))}};export{y as _};
