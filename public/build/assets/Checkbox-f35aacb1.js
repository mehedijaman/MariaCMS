import{y as l,j as u,k as n,o as k,d as p}from"./app-c4f5b0ab.js";const i=["value"],h={__name:"Checkbox",props:{checked:{type:[Array,Boolean],default:!1},value:{default:null}},emits:["update:checked"],setup(e,{emit:o}){const c=o,s=e,r=l({get(){return s.checked},set(a){c("update:checked",a)}});return(a,t)=>u((k(),p("input",{type:"checkbox",value:e.value,"onUpdate:modelValue":t[0]||(t[0]=d=>r.value=d),class:"rounded dark:bg-slate-900 border-slate-300 dark:border-slate-700 text-primary dark:text-primary shadow-sm focus:ring-primary/80 dark:focus:ring-primary dark:focus:ring-offset-slate-800 dark:checked:bg-primary dark:checked:border-primary"},null,8,i)),[[n,r.value]])}};export{h as _};
