import{_ as n}from"./AppLayout-ad179e80.js";import c from"./DeleteUserForm-55b00392.js";import l from"./LogoutOtherBrowserSessionsForm-d1232eb7.js";import{S as e}from"./SectionBorder-2042ba9a.js";import u from"./TwoFactorAuthenticationForm-071707d1.js";import f from"./UpdatePasswordForm-4ce0e997.js";import d from"./UpdateProfileInformationForm-25cf8391.js";import{o as r,c as _,w as p,a,t as g,d as s,b as t,g as i,F as h}from"./app-c4f5b0ab.js";import"./EnvelopeIcon-cb4659d4.js";/* empty css                                              */import"./_plugin-vue_export-helper-c27b6911.js";import"./XMarkIcon-c9c2e3cc.js";import"./ApplicationLogo-6915d697.js";import"./SwitchLocale-0d5c3757.js";import"./index-c1ed15bb.js";import"./TagIcon-23c823f5.js";import"./StarIcon-c588ff73.js";/* empty css                                               */import"./ActionSection-f5004fe6.js";import"./SectionTitle-3ffc4411.js";import"./DangerButton-84c9d29b.js";import"./DialogModal-ead8dcea.js";import"./Modal-cad72a07.js";import"./InputError-85854109.js";import"./SecondaryButton-73139509.js";import"./TextInput-776fb8b7.js";import"./ActionMessage-4a4cf8a6.js";import"./PrimaryButton-458f03b6.js";import"./InputLabel-d739c1d0.js";import"./FormSection-bf483564.js";const $={class:"max-w-7xl mx-auto py-10 sm:px-6 lg:px-8"},w={key:0},k={key:1},y={key:2},Z={__name:"Show",props:{confirmsTwoFactorAuthentication:Boolean,sessions:Array},setup(m){return(o,B)=>(r(),_(n,{title:o.lang().label.profile},{title:p(()=>[a("span",null,g(o.lang().label.profile),1)]),default:p(()=>[a("div",null,[a("div",$,[o.$page.props.jetstream.canUpdateProfileInformation?(r(),s("div",w,[t(d,{user:o.$page.props.auth.user},null,8,["user"]),t(e)])):i("",!0),o.$page.props.jetstream.canUpdatePassword?(r(),s("div",k,[t(f,{class:"mt-10 sm:mt-0"}),t(e)])):i("",!0),o.$page.props.jetstream.canManageTwoFactorAuthentication?(r(),s("div",y,[t(u,{"requires-confirmation":m.confirmsTwoFactorAuthentication,class:"mt-10 sm:mt-0"},null,8,["requires-confirmation"]),t(e)])):i("",!0),t(l,{sessions:m.sessions,class:"mt-10 sm:mt-0"},null,8,["sessions"]),o.$page.props.jetstream.hasAccountDeletionFeatures?(r(),s(h,{key:3},[t(e),t(c,{class:"mt-10 sm:mt-0"})],64)):i("",!0)])])]),_:1},8,["title"]))}};export{Z as default};
