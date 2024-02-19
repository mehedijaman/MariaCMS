import{u as x,a as w}from"./index-69bf5e6b.js";import{o as r,d as l,a as e,u as t,c as f,g as d,Q as p,F as h,f as y,b as m,w as k,e as v,t as _,s as b}from"./app-d9a7eb7a.js";function M(o,i){return r(),l("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true","data-slot":"icon"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"})])}function B(o,i){return r(),l("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true","data-slot":"icon"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"})])}const A={__name:"SwitchDarkMode",setup(o){const i=x(),n=w(i);return(c,a)=>(r(),l("button",{title:"Switch Dark/Light Mode",class:"inline-flex items-center justify-center p-2 rounded text-slate-400 dark:text-slate-500 hover:text-slate-500 dark:hover:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-900 focus:outline-none focus:bg-slate-100 dark:focus:bg-slate-900 focus:text-slate-500 dark:focus:text-slate-400 transition duration-150 ease-in-out",onClick:a[0]||(a[0]=s=>t(n)())},[t(i)?(r(),f(t(B),{key:0,class:"w-5 h-5 fill-current"})):d("",!0),t(i)?d("",!0):(r(),f(t(M),{key:1,class:"w-5 h-5 fill-current"}))]))}},g=[{code:"en",name:"English",flag:`
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 400" class="h-4 w-6">
            <!-- Blue rectangle (Union) -->
            <rect width="300" height="200" fill="#3C3B6E" />

            <!-- White stripes -->
            <rect width="600" height="40" y="40" fill="#fff" />
            <rect width="600" height="40" y="120" fill="#fff" />
            <rect width="600" height="40" y="200" fill="#fff" />
            <rect width="600" height="40" y="280" fill="#fff" />

            <!-- Red stripes -->
            <rect width="600" height="40" y="80" fill="#FF0000" />
            <rect width="600" height="40" y="160" fill="#FF0000" />
            <rect width="600" height="40" y="240" fill="#FF0000" />

            <!-- Stars (simplified representation) -->
            <circle cx="30" cy="30" r="5" fill="#fff" />
            <circle cx="90" cy="30" r="5" fill="#fff" />
            <circle cx="150" cy="30" r="5" fill="#fff" />
            <circle cx="210" cy="30" r="5" fill="#fff" />
            <circle cx="270" cy="30" r="5" fill="#fff" />
            <circle cx="30" cy="70" r="5" fill="#fff" />
            <circle cx="90" cy="70" r="5" fill="#fff" />
            <circle cx="150" cy="70" r="5" fill="#fff" />
            <circle cx="210" cy="70" r="5" fill="#fff" />
            <circle cx="270" cy="70" r="5" fill="#fff" />
            <circle cx="30" cy="110" r="5" fill="#fff" />
            <circle cx="90" cy="110" r="5" fill="#fff" />
            <circle cx="150" cy="110" r="5" fill="#fff" />
            <circle cx="210" cy="110" r="5" fill="#fff" />
            <circle cx="270" cy="110" r="5" fill="#fff" />
            </svg>
        `},{code:"bn",name:"বাংলা",flag:'<svg class="h-4 w-6" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--twemoji" preserveAspectRatio="xMidYMid meet"><path fill="#006A4D" d="M36 27a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V9a4 4 0 0 1 4-4h28a4 4 0 0 1 4 4v18z"></path><circle fill="#F42A41" cx="16" cy="17.5" r="7"></circle></svg>'}],F={type:"button","data-dropdown-toggle":"language-dropdown-menu",class:"inline-flex gap-2 items-center font-medium justify-center px-2 py-2 text-sm text-gray-900 dark:text-white rounded-sm cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"},L=["innerHTML"],C={class:"z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-sm shadow dark:bg-gray-700",id:"language-dropdown-menu"},D={class:"py-2 font-medium",role:"none"},H={class:"inline-flex items-center gap-2"},T=["innerHTML"],S={__name:"SwitchLocale",setup(o){const i=p().props.app.locale,n=g.find(c=>c.code===i);return(c,a)=>(r(),l(h,null,[e("button",F,[e("span",{innerHTML:t(n).flag},null,8,L)]),e("div",C,[e("ul",D,[(r(!0),l(h,null,y(t(g),(s,u)=>(r(),l("li",{key:u},[m(t(b),{href:c.route("set-locale",s.code),class:"block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"},{default:k(()=>[e("div",H,[e("span",{innerHTML:s.flag},null,8,T),v(" "+_(s.name),1)])]),_:2},1032,["href"])]))),128))])])],64))}};export{S as _,A as a};
