import _ from"./BlogLayout-2489287f.js";import{o,c as x,w as r,a as t,d as i,F as f,f as u,b as l,u as n,s as c,e as m,t as s}from"./app-0add7d3b.js";import"./WebsiteLayout-8ae7cf29.js";import"./Toast-67717151.js";/* empty css                                              */import"./_plugin-vue_export-helper-c27b6911.js";import"./XMarkIcon-48a26f73.js";import"./ApplicationLogo-11a5ac5e.js";import"./PhoneIcon-3f80c050.js";import"./EnvelopeOpenIcon-bdb117fa.js";import"./SwitchLocale-00a50926.js";import"./index-c33f0066.js";import"./Categories-34cc1940.js";const g={class:"pt-8 pb-16 lg:pt-4 lg:pb-4 bg-white dark:bg-gray-900 antialiased"},h={class:"flex justify-between px-4 mx-auto max-w-screen-xl"},b={class:"mx-auto w-full format format-sm sm:format-base lg:format-lg format-blue dark:format-invert"},k={class:"mb-4 lg:mb-6 not-format"},y={class:"flex items-center space-x-2 mb-4"},w={class:"mb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl dark:text-white"},v={class:"flex items-center mb-6 not-italic"},B={class:"inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white"},L=["src"],j={class:"text-base text-gray-500 dark:text-gray-400"},N={class:"lead"},T=["innerHTML"],A={__name:"PostDetails",props:{post:Object,categories:Object},setup(d){const e=d;return(p,V)=>(o(),x(_,{categories:e.categories,title:e.post.name},{default:r(()=>[t("main",g,[t("div",h,[t("article",b,[t("header",k,[t("div",y,[(o(!0),i(f,null,u(e.post.categories,a=>(o(),i("span",{key:a.id,class:"bg-blue-200 text-primary-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-slate-700 dark:text-primary-800"},[l(n(c),{href:p.route("blog.category.posts",{slug:a.slug})},{default:r(()=>[m(s(a.name),1)]),_:2},1032,["href"])]))),128))]),t("h1",w,s(e.post.name),1),t("address",v,[t("div",B,[t("img",{class:"mr-4 w-16 h-16 rounded-full",src:e.post.author.profile_photo_url,alt:"Jese Leos"},null,8,L),t("div",null,[l(n(c),{href:"",rel:"author",class:"text-xl font-bold text-gray-900 dark:text-white"},{default:r(()=>[m(s(e.post.author.name),1)]),_:1}),t("p",j,s(e.post.created_at),1)])])])]),t("p",N,[t("span",{innerHTML:e.post.content},null,8,T)])])])])]),_:1},8,["categories","title"]))}};export{A as default};
