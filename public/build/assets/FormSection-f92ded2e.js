import{y as m,P as n,o as a,d as i,b as l,w as r,B as e,a as t,m as c,n as p,g as u}from"./app-983f79d7.js";import{S as g}from"./SectionTitle-ebc51687.js";const _={class:"grid grid-cols-1 gap-4"},b={class:"mt-5 md:mt-0 md:col-span-2"},h={class:"grid grid-cols-6 gap-6"},v={key:0,class:"flex items-center justify-end px-4 py-3 bg-slate-50 dark:bg-slate-800 text-right sm:px-6 shadow sm:rounded-bl-md sm:rounded-br-md"},k={__name:"FormSection",emits:["submitted"],setup(f){const o=m(()=>!!n().actions);return(s,d)=>(a(),i("div",_,[l(g,null,{title:r(()=>[e(s.$slots,"title")]),description:r(()=>[e(s.$slots,"description")]),_:3}),t("div",b,[t("form",{onSubmit:d[0]||(d[0]=c(w=>s.$emit("submitted"),["prevent"]))},[t("div",{class:p(["px-4 py-5 bg-white dark:bg-slate-800 sm:p-6 shadow",o.value?"sm:rounded-tl-md sm:rounded-tr-md":"sm:rounded"])},[t("div",h,[e(s.$slots,"form")])],2),o.value?(a(),i("div",v,[e(s.$slots,"actions")])):u("",!0)],32)])]))}};export{k as _};
