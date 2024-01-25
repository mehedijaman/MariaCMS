import{o,d as l,a as e,F as m,f as h,b as n,w as i,e as d,t as s,u as c,s as p}from"./app-40e302ae.js";const f={class:"p-6 mb-4 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700"},_={class:"flex justify-between items-center mb-5 text-gray-500"},g={class:"flex items-center space-x-2"},x={class:"text-sm"},b={class:"mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"},y={class:"mb-5 font-light text-gray-500 dark:text-gray-400"},w={class:"flex justify-between items-center"},k={class:"flex items-center space-x-4"},v=["src"],B={class:"font-medium dark:text-white"},j=e("svg",{class:"ml-2 w-4 h-4",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},[e("path",{"fill-rule":"evenodd",d:"M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z","clip-rule":"evenodd"})],-1),V={__name:"PostCard",props:{post:Object},setup(u){const t=u;return(r,C)=>(o(),l("article",f,[e("div",_,[e("div",g,[(o(!0),l(m,null,h(t.post.categories,a=>(o(),l("span",{key:a.id,class:"bg-blue-200 text-primary-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-primary-200 dark:text-primary-800"},[n(c(p),{href:r.route("blog.category.posts",{slug:a.slug})},{default:i(()=>[d(s(a.name),1)]),_:2},1032,["href"])]))),128))]),e("span",x,s(t.post.created_at),1)]),e("h2",b,[n(c(p),{href:r.route("blog.posts",{slug:t.post.slug})},{default:i(()=>[d(s(t.post.name),1)]),_:1},8,["href"])]),e("p",y,s(t.post.excerpt),1),e("div",w,[e("div",k,[e("img",{class:"w-7 h-7 rounded-full",src:t.post.author.profile_photo_url,alt:"Bonnie Green avatar"},null,8,v),e("span",B,s(t.post.author.name),1)]),n(c(p),{href:r.route("blog.posts",{slug:t.post.slug}),class:"inline-flex items-center font-medium text-primary-600 dark:text-primary-500 hover:underline"},{default:i(()=>[d(" Read more "),j]),_:1},8,["href"])])]))}};export{V as default};
