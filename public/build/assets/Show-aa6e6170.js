import{_ as n}from"./AppLayout-b37d2fc1.js";import c from"./DeleteUserForm-14c8876a.js";import l from"./LogoutOtherBrowserSessionsForm-34f19946.js";import{S as e}from"./SectionBorder-f826c1a8.js";import u from"./TwoFactorAuthenticationForm-0c658c10.js";import f from"./UpdatePasswordForm-10ff49b1.js";import d from"./UpdateProfileInformationForm-82b7743e.js";import{o as r,c as _,w as p,a,t as g,d as s,b as t,g as i,F as h}from"./app-198c837c.js";import"./EnvelopeIcon-9e0c3160.js";/* empty css                                              */import"./_plugin-vue_export-helper-c27b6911.js";import"./XMarkIcon-6315b5fb.js";import"./ApplicationLogo-1f20c0c4.js";import"./SwitchLocale-186e770e.js";import"./index-94c05ca6.js";import"./TagIcon-7e321f0f.js";import"./StarIcon-4856bd7b.js";/* empty css                                               */import"./ActionSection-bcfc842e.js";import"./SectionTitle-c23bb3e6.js";import"./DangerButton-59714cdf.js";import"./DialogModal-a5fca333.js";import"./Modal-4a32bed8.js";import"./InputError-e4aa8344.js";import"./SecondaryButton-07e9fd6f.js";import"./TextInput-4f404eec.js";import"./ActionMessage-ea21a432.js";import"./PrimaryButton-751d0466.js";import"./InputLabel-d2578485.js";import"./FormSection-df8d7b87.js";const $={class:"max-w-7xl mx-auto py-10 sm:px-6 lg:px-8"},w={key:0},k={key:1},y={key:2},Z={__name:"Show",props:{confirmsTwoFactorAuthentication:Boolean,sessions:Array},setup(m){return(o,B)=>(r(),_(n,{title:o.lang().label.profile},{title:p(()=>[a("span",null,g(o.lang().label.profile),1)]),default:p(()=>[a("div",null,[a("div",$,[o.$page.props.jetstream.canUpdateProfileInformation?(r(),s("div",w,[t(d,{user:o.$page.props.auth.user},null,8,["user"]),t(e)])):i("",!0),o.$page.props.jetstream.canUpdatePassword?(r(),s("div",k,[t(f,{class:"mt-10 sm:mt-0"}),t(e)])):i("",!0),o.$page.props.jetstream.canManageTwoFactorAuthentication?(r(),s("div",y,[t(u,{"requires-confirmation":m.confirmsTwoFactorAuthentication,class:"mt-10 sm:mt-0"},null,8,["requires-confirmation"]),t(e)])):i("",!0),t(l,{sessions:m.sessions,class:"mt-10 sm:mt-0"},null,8,["sessions"]),o.$page.props.jetstream.hasAccountDeletionFeatures?(r(),s(h,{key:3},[t(e),t(c,{class:"mt-10 sm:mt-0"})],64)):i("",!0)])])]),_:1},8,["title"]))}};export{Z as default};
