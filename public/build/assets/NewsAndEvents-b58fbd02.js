import{o as s,d as o,a as e,F as n,f as c,t as d,b as i,w as x,e as r,u as _,s as p,g}from"./app-89e89ab1.js";const h={clsss:"bg-inherit"},y={class:"max-w-7xl mx-auto px-4 py-12"},u=e("div",{class:"flex gap-3 justify-center mx-auto"},[e("span",{class:"w-10 h-0.5 bg-red-600 mt-4"}),e("p",{class:"text-2xl font-semibold"},"News and Events")],-1),f={class:"grid grid-cols-1 md:grid-cols-2 gap-6"},m={key:0},b=e("h1",{class:"text-center text-2xl md:text-3xl font-bold py-4 text-gray-900"},[r(" LATEST "),e("span",{class:"text-red-600"},"EVENTS")],-1),v={class:"flex flex-col gap-1"},w={class:"px-2"},E={class:"text-gray-600 font-semibold md:text-base"},N={class:"text-sm font-light text-gray-500 md:py-1"},V={class:"text-center pt-4"},k={key:1},A=e("h1",{class:"text-center text-2xl md:text-3xl font-bold py-4 text-gray-900"},[r(" LATEST "),e("span",{class:"text-red-600"},"NEWS")],-1),T={class:"flex flex-col gap-1"},j=e("div",{class:"px-6 text-gray-500 bg-[#253b80] text-center py-2"},null,-1),S={class:"px-2"},B={class:"text-gray-600 font-semibold text-base"},L={class:"text-center pt-4"},O={__name:"NewsAndEvents",props:{news:Object,events:Object},setup(l){return(a,C)=>(s(),o("div",h,[e("div",y,[u,e("div",f,[a.$page.props.app.setting.is_event?(s(),o("div",m,[b,e("div",v,[(s(!0),o(n,null,c(l.events,t=>(s(),o("div",{key:t.id,class:"flex justify-start items-center bg-gray-50 rounded-sm border-y-2 border-gray-400"},[e("div",w,[e("h5",E,d(t.name),1),e("p",N," Published At "+d(t.created_at),1)])]))),128)),e("div",V,[i(_(p),{href:a.route("events"),class:"px-4 py-2 font-semibold bg-yellow-400 rounded-sm hover:bg-yellow-500 text-gray-200"},{default:x(()=>[r(" View All ")]),_:1},8,["href"])])])])):g("",!0),a.$page.props.app.setting.is_news?(s(),o("div",k,[A,e("div",T,[(s(!0),o(n,null,c(l.news,t=>(s(),o("div",{key:t.id,class:"flex justify-start items-center bg-gray-50 shadow-md rounded-sm border-y-2 border-gray-400"},[j,e("div",S,[e("h5",B,d(t.name),1),e("p",null,d(t.created_at),1)])]))),128)),e("div",L,[i(_(p),{href:a.route("news"),class:"px-4 py-2 font-semibold bg-yellow-400 rounded-sm hover:bg-yellow-500 text-gray-200"},{default:x(()=>[r(" View All ")]),_:1},8,["href"])])])])):g("",!0)])])]))}};export{O as default};
