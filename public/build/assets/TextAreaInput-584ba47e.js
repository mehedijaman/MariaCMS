import{r as l,z as u,o as d,d as n,t as i,n as c}from"./app-40e302ae.js";const p={__name:"TextAreaInput",props:{modelValue:String,error:{type:String,default:null}},emits:["update:modelValue"],setup(r,{expose:o}){const e=l(null);return u(()=>{e.value.hasAttribute("autofocus")&&e.value.focus()}),o({focus:()=>e.value.focus()}),(t,a)=>(d(),n("textarea",{ref_key:"input",ref:e,class:c([r.error?"border-rose-500 dark:border-rose-400 dark:bg-slate-900 dark:text-slate-300 focus:border-rose-500 dark:focus:border-rose-400 focus:ring-rose-500 dark:focus:ring-rose-400 ":"border-slate-300 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300 focus:border-primary dark:focus:border-primary focus:ring-primary dark:focus:ring-primary ","rounded shadow-sm placeholder:text-slate-300 dark:placeholder:text-slate-700"]),onInput:a[0]||(a[0]=s=>t.$emit("update:modelValue",s.target.value))},i(r.modelValue),35))}};export{p as _};
