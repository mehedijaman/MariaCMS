import{_ as n}from"./AppLayout-5e1e4bab.js";import c from"./DeleteUserForm-a360b30c.js";import l from"./LogoutOtherBrowserSessionsForm-bf677dc1.js";import{S as e}from"./SectionBorder-e054d3e8.js";import u from"./TwoFactorAuthenticationForm-be09d747.js";import f from"./UpdatePasswordForm-0cfbc471.js";import d from"./UpdateProfileInformationForm-36971a5d.js";import{o as r,c as _,w as p,a as i,t as g,d as s,b as t,g as a,F as h}from"./app-753cbe3d.js";import"./EnvelopeIcon-64b56a8a.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./XMarkIcon-e197ecf8.js";import"./ApplicationLogo-29f09a28.js";import"./SwitchLocale-37a552c9.js";import"./index-d00803f1.js";import"./TagIcon-79147096.js";import"./StarIcon-fd4d4276.js";import"./ActionSection-24e2653b.js";import"./SectionTitle-2c5ac57d.js";import"./DangerButton-815455e9.js";import"./DialogModal-229283b2.js";import"./Modal-ba31200e.js";import"./InputError-fef4ba90.js";import"./SecondaryButton-2e1acee2.js";import"./TextInput-fa49a075.js";import"./ActionMessage-4d27bfe1.js";import"./PrimaryButton-8e75a860.js";import"./InputLabel-819567af.js";import"./FormSection-dcf9bdc2.js";const $={class:"max-w-7xl mx-auto py-10 sm:px-6 lg:px-8"},w={key:0},k={key:1},y={key:2},X={__name:"Show",props:{confirmsTwoFactorAuthentication:Boolean,sessions:Array},setup(m){return(o,B)=>(r(),_(n,{title:o.lang().label.profile},{title:p(()=>[i("span",null,g(o.lang().label.profile),1)]),default:p(()=>[i("div",null,[i("div",$,[o.$page.props.jetstream.canUpdateProfileInformation?(r(),s("div",w,[t(d,{user:o.$page.props.auth.user},null,8,["user"]),t(e)])):a("",!0),o.$page.props.jetstream.canUpdatePassword?(r(),s("div",k,[t(f,{class:"mt-10 sm:mt-0"}),t(e)])):a("",!0),o.$page.props.jetstream.canManageTwoFactorAuthentication?(r(),s("div",y,[t(u,{"requires-confirmation":m.confirmsTwoFactorAuthentication,class:"mt-10 sm:mt-0"},null,8,["requires-confirmation"]),t(e)])):a("",!0),t(l,{sessions:m.sessions,class:"mt-10 sm:mt-0"},null,8,["sessions"]),o.$page.props.jetstream.hasAccountDeletionFeatures?(r(),s(h,{key:3},[t(e),t(c,{class:"mt-10 sm:mt-0"})],64)):a("",!0)])])]),_:1},8,["title"]))}};export{X as default};
