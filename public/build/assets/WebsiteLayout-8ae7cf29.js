import{o,d as l,a as e,h as x,j as b,v as w,b as a,u as i,g as _,w as f,t as n,s as u,c as p,e as k,z as v,A as $,n as c,F as j,Z as M,B}from"./app-0add7d3b.js";import{T as C}from"./Toast-67717151.js";import{A as g}from"./ApplicationLogo-11a5ac5e.js";import{r as T}from"./PhoneIcon-3f80c050.js";import{r as z}from"./EnvelopeOpenIcon-bdb117fa.js";import{a as m,_ as L}from"./SwitchLocale-00a50926.js";import{r as A}from"./XMarkIcon-48a26f73.js";function S(r,t){return o(),l("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true","data-slot":"icon"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M12 19.5v-15m0 0-6.75 6.75M12 4.5l6.75 6.75"})])}function O(r,t){return o(),l("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true","data-slot":"icon"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"})])}function V(r,t){return o(),l("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true","data-slot":"icon"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M12 18.75a6 6 0 0 0 6-6v-1.5m-6 7.5a6 6 0 0 1-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 0 1-3-3V4.5a3 3 0 1 1 6 0v8.25a3 3 0 0 1-3 3Z"})])}const H={__name:"BackToTop",setup(r){const t=x({show:!1}),s=()=>{window.scrollTo(0,0)};return window.addEventListener("scroll",()=>{window.scrollY>0?t.show=!0:t.show=!1}),(h,y)=>b((o(),l("a",{onClick:s,class:"h-10 w-10 bg-primary/50 fixed flex m-auto justify-center items-center z-[9999] bottom-4 right-4 rounded text-white hover:bg-primary cursor-pointer"},[a(i(S),{class:"w-6 h-6"})],512)),[[w,t.show]])}},N={class:"h-10 bg-indigo-800"},F={class:"flex flex-col max-w-7xl px-4 sm:px-8 lg:px-12 py-2 mx-auto sm:items-center sm:justify-between sm:flex-row"},D={class:"flex gap-8 text-slate-100"},P={key:0,class:"flex gap-2"},E=["innerHTML"],Y={class:"inline-flex"},R=["href"],Z=e("svg",{fill:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",class:"w-5 h-5",viewBox:"0 0 24 24"},[e("path",{d:"M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"})],-1),W=[Z],q=["href"],G=e("svg",{fill:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",class:"w-5 h-5",viewBox:"0 0 24 24"},[e("path",{d:"M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"})],-1),I=[G],J=["href"],K=e("svg",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",class:"w-5 h-5",viewBox:"0 0 24 24"},[e("rect",{width:"20",height:"20",x:"2",y:"2",rx:"5",ry:"5"}),e("path",{d:"M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"})],-1),Q=[K],U=["href"],X=e("svg",{fill:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",class:"w-5 h-5",viewBox:"0 0 24 24"},[e("path",{d:"M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"})],-1),ee=[X],te={__name:"TopBar",setup(r){return(t,s)=>(o(),l("div",N,[e("div",F,[e("div",D,[t.$page.props.app.setting.header?(o(),l("div",P,[a(i(V),{class:"w-4"}),e("span",{innerHTML:t.$page.props.app.setting.header},null,8,E)])):_("",!0)]),e("div",Y,[e("a",{class:"text-slate-100",href:t.$page.props.app.setting.facebook,target:"_blank"},W,8,R),e("a",{class:"ml-4 text-slate-100",href:t.$page.props.app.setting.twitter,target:"_blank"},I,8,q),e("a",{class:"ml-4 text-slate-100",href:t.$page.props.app.setting.instagram,target:"_blank"},Q,8,J),e("a",{class:"ml-4 text-slate-100",href:t.$page.props.app.setting.whatsapp,target:"_blank"},ee,8,U)])])]))}},se={key:0,class:"max-h-[100px] bg-white dark:bg-slate-900 p-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex justify-between"},ae=["src"],oe={key:1,class:"max-h-[100px] bg-white dark:bg-slate-900 p-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex justify-between"},re={class:"shrink-0 flex justify-start items-center space-x-2"},le={class:"flex flex-col"},ne={class:"text-3xl font-semibold"},ie={class:"text-sm"},ce={class:"shrink-0 flex justify-start items-center space-x-14"},de={class:"shrink-0 flex justify-start items-center space-x-2"},pe={class:"flex flex-col"},he={class:"text-md font-semibold"},fe={class:"text-sm"},ue={class:"shrink-0 flex justify-start items-center space-x-2"},_e={class:"flex flex-col"},ge={class:"text-md font-semibold"},me={class:"text-sm"},xe={__name:"Banner",setup(r){return(t,s)=>t.$page.props.app.setting.banner_enabled&&t.$page.props.app.setting.banner_full_path!==null?(o(),l("div",se,[e("img",{class:"",src:t.$page.props.app.setting.banner_full_path,alt:""},null,8,ae)])):(o(),l("div",oe,[e("div",re,[a(g,{class:"block h-14 w-auto"}),e("div",le,[a(i(u),{href:t.route("index"),class:""},{default:f(()=>[e("span",ne,n(t.$page.props.app.setting.name),1)]),_:1},8,["href"]),e("span",ie,n(t.$page.props.app.setting.tagline),1)])]),e("div",ce,[e("div",de,[a(i(T),{class:"w-6 h-6"}),e("div",pe,[e("span",he,n(t.lang().label.call_us),1),e("span",fe,n(t.$page.props.app.setting.contact_no),1)])]),e("div",ue,[a(i(z),{class:"w-6 h-6"}),e("div",_e,[e("span",ge,n(t.lang().label.email_us),1),e("span",me,n(t.$page.props.app.setting.email),1)])])])]))}},d={__name:"NavbarLink",props:{href:String,label:String,taget:String},setup(r){return(t,s)=>(o(),p(i(u),{target:r.taget,href:r.href,class:"inline-flex items-center justify-start sm:justify-center p-2 rounded hover:bg-slate-100 dark:hover:bg-slate-800 focus:outline-none focus:bg-slate-100 dark:focus:bg-slate-900 transition duration-150 ease-in-out w-full"},{default:f(()=>[k(n(r.label),1)]),_:1},8,["target","href"]))}},be={class:"flex flex-col max-w-7xl px-4 mx-auto sm:items-center sm:justify-between sm:flex-row sm:px-6 lg:px-6 py-2"},we={class:"flex items-center justify-between"},ke={class:"text-lg font-semibold"},ve={class:"sm:hidden"},$e={__name:"Navbar",setup(r){const t=x({isOpen:!1,fixed:!1});return window.addEventListener("scroll",()=>{window.scrollY>0?t.fixed=!0:t.fixed=!1}),v(()=>{$()}),(s,h)=>(o(),l("header",{class:c([t.fixed||t.isOpen?"bg-white/70 dark:bg-slate-900/70 backdrop-blur-lg border-b border-slate-300/50 dark:border-slate-700/50 top-0":"bg-white/70 dark:bg-slate-900/70 backdrop-blur-lg border border-slate-300/50 dark:border-slate-700/50","w-full fixed text-slate-600 dark:text-slate-200 z-50"])},[e("div",be,[e("div",we,[e("div",null,[a(i(u),{href:s.route("index"),class:"shrink-0 flex w-full justify-start items-center space-x-2"},{default:f(()=>[b(a(g,{class:"block h-8 w-auto"},null,512),[[w,t.fixed||t.isOpen]]),e("p",ke,n(s.$page.props.app.setting.short_name),1)]),_:1},8,["href"])]),e("div",ve,[a(m),e("button",{onClick:h[0]||(h[0]=y=>t.isOpen=!t.isOpen),class:"inline-flex items-center justify-center p-2 rounded text-slate-400 dark:text-slate-500 hover:text-slate-500 dark:hover:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-900 focus:outline-none focus:bg-slate-100 dark:focus:bg-slate-900 focus:text-slate-500 dark:focus:text-slate-400 transition duration-150 ease-in-out"},[t.isOpen?(o(),p(i(A),{key:1,class:"w-6 h-auto"})):(o(),p(i(O),{key:0,class:"w-6 h-auto"}))])])]),e("nav",{class:c([t.isOpen?"":"hidden","relative sm:flex items-center space-y-2 sm:space-y-0 gap-2 py-4 sm:py-0"])},[a(d,{class:c(s.route().current("index")?"font-bold text-primary":""),href:s.route("index"),label:s.lang().label.home},null,8,["class","href","label"]),a(d,{class:c(s.route().current("blog.posts")?"font-bold text-primary":""),href:s.route("blog.posts"),label:s.lang().label.blog},null,8,["class","href","label"]),a(d,{class:c(s.route().current("gallery")?"font-bold text-primary":""),href:s.route("gallery"),label:s.lang().label.gallery},null,8,["class","href","label"]),a(d,{class:c(s.route().current("contact")?"font-bold text-primary":""),href:s.route("contact"),label:s.lang().label.contact},null,8,["class","href","label"]),s.$page.props.auth.user?(o(),p(d,{key:0,href:s.route("dashboard"),label:s.lang().label.dashboard},null,8,["href","label"])):(o(),l(j,{key:1},[s.route().has("login")?(o(),p(d,{key:0,href:s.route("login"),label:"Login"},null,8,["href"])):_("",!0)],64)),a(L),a(m,{class:"hidden sm:block"})],2)])],2))}},ye={class:"p-4 bg-[#f9f9f9] border-t-[1px] border-slate-300/50 md:p-8 lg:p-10 dark:bg-gray-800"},je={class:"mx-auto max-w-screen-xl text-center"},Me={class:"text-lg font-semibold"},Be={class:"my-6 text-gray-500 dark:text-gray-400"},Ce=["innerHTML"],Te={class:"flex flex-wrap justify-center items-center mb-6 text-gray-900 dark:text-white"},ze={class:"inline-flex"},Le=["href"],Ae=e("svg",{fill:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",class:"w-5 h-5",viewBox:"0 0 24 24"},[e("path",{d:"M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"})],-1),Se=[Ae],Oe=["href"],Ve=e("svg",{fill:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",class:"w-5 h-5",viewBox:"0 0 24 24"},[e("path",{d:"M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"})],-1),He=[Ve],Ne=["href"],Fe=e("svg",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",class:"w-5 h-5",viewBox:"0 0 24 24"},[e("rect",{width:"20",height:"20",x:"2",y:"2",rx:"5",ry:"5"}),e("path",{d:"M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"})],-1),De=[Fe],Pe=["href"],Ee=e("svg",{fill:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",class:"w-5 h-5",viewBox:"0 0 24 24"},[e("path",{d:"M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"})],-1),Ye=[Ee],Re={class:"text-sm text-gray-500 sm:text-center dark:text-gray-400"},Ze=e("a",{class:"text-primary font-semibold",target:"_blank",href:"https://gtechservice.net"},"gTechService",-1),We={__name:"Footer",setup(r){return(t,s)=>(o(),l("footer",ye,[e("div",je,[a(i(u),{href:t.route("index"),class:"shrink-0 flex w-full justify-center items-center space-x-4"},{default:f(()=>[a(g,{class:"block h-8 w-auto"}),e("p",Me,n(t.$page.props.app.setting.name),1)]),_:1},8,["href"]),e("p",Be,[e("span",{innerHTML:t.$page.props.app.setting.footer},null,8,Ce)]),e("ul",Te,[e("span",ze,[e("a",{class:"text-gray-500",href:t.$page.props.app.setting.facebook,target:"_blank"},Se,8,Le),e("a",{class:"ml-4 text-gray-500",href:t.$page.props.app.setting.twitter,target:"_blank"},He,8,Oe),e("a",{class:"ml-4 text-gray-500",href:t.$page.props.app.setting.instagram,target:"_blank"},De,8,Ne),e("a",{class:"ml-4 text-gray-500",href:t.$page.props.app.setting.whatsapp,target:"_blank"},Ye,8,Pe)])]),e("span",Re,[k(" © 2023-"+n(new Date().getFullYear())+". "+n(t.$page.props.app.setting.name)+". All Rights Reserved. Development & Maintenance by - ",1),Ze])])]))}},qe={class:"flex relative w-full min-h-screen dark:bg-slate-900 text-slate-900 dark:text-slate-200 overflow-x-hidden"},Ge={class:"w-full"},Ie={class:"text-slate-600 dark:text-slate-200"},st={__name:"WebsiteLayout",props:{title:String},setup(r){return v(()=>{$()}),(t,s)=>(o(),l("div",null,[a(i(M),{title:r.title},null,8,["title"]),a(C,{flash:t.$page.props.flash},null,8,["flash"]),e("div",qe,[e("div",Ge,[t.$page.props.app.setting.topbar_enabled?(o(),p(te,{key:0})):_("",!0),a(xe),a($e),e("main",Ie,[B(t.$slots,"default"),a(H)]),a(We)])])]))}};export{st as _};
