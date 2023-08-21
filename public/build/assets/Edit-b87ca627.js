import{_ as c}from"./AuthenticatedLayout-aa6c7cea.js";import n from"./EditUserForm-7394434b.js";import{h as d,a as e,u as p,w as s,F as u,o as f,X as h,b as t,d as m,k as l}from"./app-126fe506.js";import"./Toast-363db794.js";import"./toast-08d90f84.js";import"./ApplicationLogo-35aeaf9c.js";import"./defaultFile-22c0d257.js";import"./useCountries-b95cb512.js";import"./Dropdown-8d5ccaa4.js";import"./Image-935c5f6b.js";import"./DangerButton-4c3ebc1b.js";import"./SecondaryButton-e7a16315.js";import"./InputLabel-3684cf6d.js";import"./PrimaryButton-23f4d7f0.js";import"./TextInput-6edb0220.js";import"./default.css_vue_type_style_index_0_src_true_lang-d7e06aac.js";const _=t("h2",{class:"font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight"}," Edit User ",-1),x={class:"py-12"},w={class:"max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6"},b={class:"p-4 sm:p-8 bg-white dark:bg-gray-800 dark:text-white shadow sm:rounded-lg"},y={class:"sm:flex sm:items-center"},g=t("div",{class:"sm:flex-auto"},[t("h1",{class:"text-xl font-semibold text-gray-900 dark:text-white"}," Edit User "),t("p",{class:"mt-2 text-sm text-gray-700 dark:text-white"}," Edit a new users with roles. ")],-1),k={class:"mt-4 sm:mt-0 sm:ml-16 sm:flex-none space-x-1 sm:space-x-2 space-y-2 sm:space-y-0"},D={__name:"Edit",props:{user:Object,roleArr:Object,statusArr:Object},setup(r){return(a,A)=>{const o=l("font-awesome-icon"),i=l("Link");return f(),d(u,null,[e(p(h),{title:"User"}),e(c,null,{header:s(()=>[_]),default:s(()=>[t("div",x,[t("div",w,[t("div",b,[t("div",y,[g,t("div",k,[e(i,{href:a.route("user.show",r.user.id),class:"btn btn-primary"},{default:s(()=>[e(o,{icon:"fa-solid fa-eye",class:"mr-1"}),m(" Back ")]),_:1},8,["href"]),e(i,{href:a.route("user.create"),class:"btn btn-primary"},{default:s(()=>[e(o,{icon:"fa-solid fa-circle-plus",class:"mr-1"}),m(" Create New ")]),_:1},8,["href"]),e(i,{href:a.route("user.index"),class:"btn btn-primary"},{default:s(()=>[e(o,{icon:"fa-solid fa-eye",class:"mr-1"}),m(" View All ")]),_:1},8,["href"])])]),e(n,{user:r.user,roleArr:r.roleArr,statusArr:r.statusArr},null,8,["user","roleArr","statusArr"])])])])]),_:1})],64)}}};export{D as default};
