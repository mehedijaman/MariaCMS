import{o,d as l,a as n,h,p,b as _,u as w,t as v}from"./app-029d3c12.js";function x(i,c){return o(),l("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true","data-slot":"icon"},[n("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"})])}const k=["for"],y={key:0,class:"flex flex-col justify-center items-center m-10"},b={class:"text-center"},B={key:1,class:"h-full w-full"},j=["src"],C=["id"],S={__name:"ImageInput",props:{image:{type:String,default:null},source:{type:String,default:"image"}},emits:["fileChange"],setup(i,{emit:c}){const e=i,d=c,t=h({image:null,file:null});p(()=>{e.image!=null&&(t.image=e.image)});const u=async a=>{const s=a.target.files[0];s&&(t.image=await f(s),t.file=s,d("fileChange",{file:t.file,source:e.source}))},f=a=>new Promise((s,m)=>{const r=new FileReader;r.readAsDataURL(a),r.onload=()=>s(r.result),r.onerror=g=>m(g)});return(a,s)=>(o(),l("label",{for:e.source,class:"mt-1 text-slate-400 dark:text-slate-600 border-2 border-dashed border-slate-300 dark:border-slate-600 overflow-hidden flex justify-center items-center hover:cursor-pointer rounded"},[t.image?(o(),l("div",B,[n("img",{class:"h-full w-full",src:t.image,alt:"Image"},null,8,j)])):(o(),l("div",y,[_(w(x),{class:"w-22 h-22"}),n("p",b,"Select "+v(e.source),1)])),n("input",{class:"hidden",type:"file",accept:".jpg,.png,.gif,.svg",id:e.source,onChange:u},null,40,C)],8,k))}};export{S as _};
