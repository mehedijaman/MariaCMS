import{_ as n}from"./AppLayout-de15fb7b.js";import c from"./DeleteUserForm-09b4b842.js";import l from"./LogoutOtherBrowserSessionsForm-e8da1c74.js";import{S as e}from"./SectionBorder-3d7be758.js";import u from"./TwoFactorAuthenticationForm-34e62859.js";import f from"./UpdatePasswordForm-4cbe87ff.js";import d from"./UpdateProfileInformationForm-b3cb835f.js";import{o as r,c as _,w as p,a,t as g,d as s,b as t,g as i,F as h}from"./app-45c1fa09.js";import"./EnvelopeIcon-b3858613.js";/* empty css                                              */import"./_plugin-vue_export-helper-c27b6911.js";import"./XMarkIcon-90ada5e1.js";import"./ApplicationLogo-05ed4892.js";import"./SwitchLocale-4cf7807c.js";import"./index-873b4fc6.js";import"./TagIcon-1b6053fc.js";import"./StarIcon-1539470f.js";/* empty css                                               */import"./ActionSection-91f02934.js";import"./SectionTitle-342d3a6e.js";import"./DangerButton-1c744f6e.js";import"./DialogModal-a0641e4b.js";import"./Modal-e31d547a.js";import"./InputError-43ea7f75.js";import"./SecondaryButton-071ca990.js";import"./TextInput-7f45e80c.js";import"./ActionMessage-1c2ab172.js";import"./PrimaryButton-b921ab23.js";import"./InputLabel-056a23eb.js";import"./FormSection-ba4e7731.js";const $={class:"max-w-7xl mx-auto py-10 sm:px-6 lg:px-8"},w={key:0},k={key:1},y={key:2},Z={__name:"Show",props:{confirmsTwoFactorAuthentication:Boolean,sessions:Array},setup(m){return(o,B)=>(r(),_(n,{title:o.lang().label.profile},{title:p(()=>[a("span",null,g(o.lang().label.profile),1)]),default:p(()=>[a("div",null,[a("div",$,[o.$page.props.jetstream.canUpdateProfileInformation?(r(),s("div",w,[t(d,{user:o.$page.props.auth.user},null,8,["user"]),t(e)])):i("",!0),o.$page.props.jetstream.canUpdatePassword?(r(),s("div",k,[t(f,{class:"mt-10 sm:mt-0"}),t(e)])):i("",!0),o.$page.props.jetstream.canManageTwoFactorAuthentication?(r(),s("div",y,[t(u,{"requires-confirmation":m.confirmsTwoFactorAuthentication,class:"mt-10 sm:mt-0"},null,8,["requires-confirmation"]),t(e)])):i("",!0),t(l,{sessions:m.sessions,class:"mt-10 sm:mt-0"},null,8,["sessions"]),o.$page.props.jetstream.hasAccountDeletionFeatures?(r(),s(h,{key:3},[t(e),t(c,{class:"mt-10 sm:mt-0"})],64)):i("",!0)])])]),_:1},8,["title"]))}};export{Z as default};
