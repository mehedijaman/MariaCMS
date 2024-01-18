import{_ as m}from"./WebsiteLayout-055b9363.js";import d from"./Hero-8427d7e2.js";import c from"./Home-5b36426d.js";import g from"./Slider-a1fd1ce3.js";import u from"./FAQ-3ee388be.js";import f from"./TestimonialCard-55d80eb4.js";import _ from"./LatestPosts-46211af1.js";import h from"./Feature-96817464.js";import b from"./CTA-68a86afc.js";import y from"./News-342a9904.js";import{o as e,c as r,w as p,g as s,a as o,d as n,F as k,f as x,b as $,u as w,s as v,e as q}from"./app-029d3c12.js";import B from"./FeaturedProducts-e0bfd3c5.js";import"./Toast-047c208b.js";/* empty css                                              */import"./_plugin-vue_export-helper-c27b6911.js";import"./XMarkIcon-e53425f1.js";import"./ApplicationLogo-ead9b018.js";import"./PhoneIcon-6279cd37.js";import"./EnvelopeOpenIcon-3d0b9237.js";import"./SwitchLocale-2e53f119.js";import"./index-c4e474fb.js";import"./PostCard-d8133919.js";import"./ProductCard-2a52f279.js";import"./ArrowRightIcon-73ff7c2f.js";const N={class:"min-h-[calc(100vh)] bg-pattern grid place-items-center bg-pattern",id:"home"},V={class:"max-w-7xl mx-auto w-full"},F={class:"grid grid-cols-2"},C={key:1,class:"bg-white dark:bg-gray-900 my-4"},S={class:"py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6"},T=o("div",{class:"mx-auto max-w-screen-sm"},[o("h2",{class:"mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white"}," Testimonials"),o("p",{class:"mb-8 font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400"},"Unveiling the authentic voices of satisfaction and success as shared by those who have experienced our exceptional service firsthand.")],-1),j={class:"grid mb-8 lg:mb-12 lg:grid-cols-2"},z={class:"text-center"},ie={__name:"Index",props:{title:String,data:Object},setup(l){const t=l;return(a,E)=>(e(),r(m,{title:t.title},{default:p(()=>[a.$page.props.app.setting.slider_enabled&&t.data.slider?(e(),r(g,{key:0,slides:t.data.slider.items},null,8,["slides"])):s("",!0),o("section",N,[a.$page.props.app.setting.hero_enabled?(e(),r(d,{key:0,hero:t.data.hero},null,8,["hero"])):s("",!0),a.$page.props.app.setting.homepage_enabled?(e(),r(c,{key:1,homepage:t.data.homepage},null,8,["homepage"])):s("",!0),a.$page.props.app.setting.feature_enabled?(e(),r(h,{key:2,features:t.data.features},null,8,["features"])):s("",!0),a.$page.props.app.setting.cta_enabled?(e(),r(b,{key:3,cta:t.data.cta},null,8,["cta"])):s("",!0),o("div",V,[a.$page.props.app.setting.featured_product_enabled?(e(),r(B,{key:0,products:t.data.featured_products},null,8,["products"])):s("",!0),o("div",F,[a.$page.props.app.setting.faq_enabled?(e(),r(u,{key:0,faqs:t.data.faqs},null,8,["faqs"])):s("",!0),a.$page.props.app.setting.news_enabled?(e(),r(y,{key:1,news:t.data.news},null,8,["news"])):s("",!0)]),a.$page.props.app.setting.testimonial_enabled?(e(),n("section",C,[o("div",S,[T,o("div",j,[(e(!0),n(k,null,x(t.data.testimonials,i=>(e(),r(f,{key:i.id,testimonial:i},null,8,["testimonial"]))),128))]),o("div",z,[$(w(v),{href:a.route("testimonials.view"),class:"py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"},{default:p(()=>[q(" Show more... ")]),_:1},8,["href"])])])])):s("",!0),a.$page.props.app.setting.blog_enabled?(e(),r(_,{key:2,posts:t.data.latest_posts},null,8,["posts"])):s("",!0)])])]),_:1},8,["title"]))}};export{ie as default};
