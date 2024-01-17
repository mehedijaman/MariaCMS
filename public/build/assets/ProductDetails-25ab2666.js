import{_ as i}from"./WebsiteLayout-055b9363.js";import{r as n,o as l,c as _,w as m,a as t,t as o,d,F as h,f as u}from"./app-029d3c12.js";import"./Toast-047c208b.js";/* empty css                                              */import"./_plugin-vue_export-helper-c27b6911.js";import"./XMarkIcon-e53425f1.js";import"./ApplicationLogo-ead9b018.js";import"./PhoneIcon-6279cd37.js";import"./EnvelopeOpenIcon-3d0b9237.js";import"./SwitchLocale-2e53f119.js";import"./index-c4e474fb.js";const g={class:"py-12 sm:py-16"},p={class:"container mx-auto px-4"},f={class:"flex"},x={role:"list",class:"flex items-center"},v={class:"text-left"},y={class:"-m-1"},b=["href"],w={class:"text-left"},k={class:"flex items-center"},B=t("span",{class:"mx-2 text-gray-400"},"/",-1),C={class:"-m-1"},j=["href"],D={class:"text-left"},P={class:"flex items-center"},F=t("span",{class:"mx-2 text-gray-400"},"/",-1),L={class:"-m-1"},$=["href"],q={class:"lg:col-gap-12 xl:col-gap-16 mt-8 grid grid-cols-1 gap-12 lg:mt-12 lg:grid-cols-5 lg:gap-16"},E={class:"lg:col-span-3 lg:row-end-1"},H={class:"lg:flex lg:items-start"},I={class:"lg:order-2 lg:ml-5"},N={class:"max-w-xl overflow-hidden rounded-lg"},O=["src"],R={class:"mt-2 w-full lg:order-1 lg:w-32 lg:flex-shrink-0"},S={class:"flex flex-row items-start lg:flex-col"},U=["onClick"],V=["src"],z={class:"lg:col-span-2 lg:row-span-2 lg:row-end-2"},A={class:"sm: text-2xl font-bold text-gray-900 sm:text-3xl"},G=t("h2",{class:"mt-8 text-base text-gray-900"},"Category",-1),J={class:"mt-3 flex select-none flex-wrap items-center gap-1"},K={class:""},M=t("input",{type:"radio",name:"type",value:"Powder",class:"peer sr-only",checked:""},null,-1),Q={class:"peer-checked:bg-black peer-checked:text-white rounded-lg border border-black px-6 py-2 font-bold"},T={class:"lg:col-span-3"},W=t("div",{class:"border-b border-gray-300"},[t("nav",{class:"flex gap-4"},[t("a",{href:"#",title:"",class:"border-b-2 border-gray-900 py-4 text-sm font-medium text-gray-900 hover:border-gray-400 hover:text-gray-800"}," Description ")])],-1),X={class:"mt-8 flow-root sm:mt-12"},_t={__name:"ProductDetails",props:{product:Object},setup(r){const s=r,c=n(s.product.media[0].original_url);return(e,Y)=>(l(),_(i,{title:s.title},{default:m(()=>[t("section",g,[t("div",p,[t("nav",f,[t("ol",x,[t("li",v,[t("div",y,[t("a",{href:e.route("index"),class:"rounded-md p-1 text-sm font-medium text-gray-600 focus:text-gray-900 focus:shadow hover:text-gray-800"}," Home ",8,b)])]),t("li",w,[t("div",k,[B,t("div",C,[t("a",{href:e.route("products"),class:"rounded-md p-1 text-sm font-medium text-gray-600 focus:text-gray-900 focus:shadow hover:text-gray-800"}," Products ",8,j)])])]),t("li",D,[t("div",P,[F,t("div",L,[t("a",{href:e.route("products",{slug:s.product.slug}),class:"rounded-md p-1 text-sm font-medium text-gray-600 focus:text-gray-900 focus:shadow hover:text-gray-800","aria-current":"page"},o(s.product.name),9,$)])])])])]),t("div",q,[t("div",E,[t("div",H,[t("div",I,[t("div",N,[t("img",{class:"h-full w-full max-w-full object-cover",src:c.value,alt:""},null,8,O)])]),t("div",R,[t("div",S,[(l(!0),d(h,null,u(s.product.media,a=>(l(),d("button",{onClick:Z=>c.value=a.original_url,key:e.index,type:"button",class:"flex-0 aspect-square mb-3 h-20 overflow-hidden rounded-lg border-2 border-gray-900 text-center"},[t("img",{class:"h-full w-full object-cover",src:a.original_url,alt:""},null,8,V)],8,U))),128))])])])]),t("div",z,[t("h1",A,o(r.product.title),1),G,t("div",J,[t("label",K,[M,t("p",Q,o(s.product.category.name),1)])])]),t("div",T,[W,t("div",X,[t("p",null,o(s.product.description),1)])])])])])]),_:1},8,["title"]))}};export{_t as default};
