import{o,d as a,g as _,a as e,F as x,f as g,b as l,w as d,e as m,t as s,u as n,s as u}from"./app-89e89ab1.js";import{r as f}from"./ArrowRightIcon-1d83ca10.js";const y={class:"bg-white pb-4 rounded-sm shadow-lg mb-2"},b=["src","alt"],w={class:"px-4"},Z={class:"flex gap-2 py-3"},k={class:"text-base font-bold py-3"},V={class:"flex justify-start items-center space-x-2 text-sm text-gray-500 pb-1"},H=e("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-4 h-4"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z"})],-1),M={class:"flex justify-start items-center space-x-2 text-sm text-gray-500"},j=["src","alt"],A={class:"py-4 text-gray-600 text-justify text-sm"},F={__name:"PostCard",props:{post:Object},setup(v){const t=v;return(p,B)=>{var h,i,c;return o(),a("div",y,[t.post.media?(o(),a("img",{key:0,class:"w-full h-48",src:t.post.media[0]?t.post.media[0].original_url:"",alt:t.post.name},null,8,b)):_("",!0),e("div",w,[e("div",Z,[(o(!0),a(x,null,g(t.post.categories,r=>(o(),a("span",{key:r.id,class:"bg-blue-200 text-primary-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-primary-200 dark:text-primary-800"},[l(n(u),{href:p.route("blog.category.posts",{slug:r.slug})},{default:d(()=>[m(s(r.name),1)]),_:2},1032,["href"])]))),128))]),e("h2",k,s(t.post.name),1),e("h6",V,[H,e("span",null,s(t.post.created_at),1)]),e("h6",M,[e("img",{class:"w-4 h-4",src:(h=t.post.author)==null?void 0:h.profile_photo_url,alt:(i=t.post.author)==null?void 0:i.name},null,8,j),e("span",null,s((c=t.post.author)==null?void 0:c.name),1)]),e("p",A,s(t.post.excerpt),1),l(n(u),{href:p.route("blog.posts",{slug:t.post.slug}),class:"flex gap-2 py-1.5 px-3 border bg-yellow-400 rounded-md hover:bg-yellow-500 text-gray-200"},{default:d(()=>[m(" Read More "),l(n(f),{class:"w-8 h-6"})]),_:1},8,["href"])])])}}};export{F as default};
