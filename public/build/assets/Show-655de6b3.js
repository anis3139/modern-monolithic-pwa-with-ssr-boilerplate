import{_ as x}from"./AuthenticatedLayout-aa6c7cea.js";import{h as d,a as t,u as _,w as s,F as m,o as n,X as f,b as e,d as a,t as h,m as g,k as p}from"./app-126fe506.js";import"./Toast-363db794.js";import"./toast-08d90f84.js";import"./ApplicationLogo-35aeaf9c.js";import"./defaultFile-22c0d257.js";import"./useCountries-b95cb512.js";import"./Dropdown-8d5ccaa4.js";const u=e("h2",{class:"font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight"}," Show Role ",-1),w={class:"py-12 dark:text-white"},y={class:"max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6"},b={class:"p-4 sm:p-8 bg-white dark:bg-gray-800 dark:text-white shadow sm:rounded-lg"},v={class:"sm:flex sm:items-center mb-5"},k=e("div",{class:"sm:flex-auto"},[e("h1",{class:"text-xl font-semibold text-gray-900 dark:text-white"}," View Role and permission "),e("p",{class:"mt-2 text-sm text-gray-700 dark:text-white"}," View roles with permission. ")],-1),V={class:"mt-4 sm:mt-0 sm:ml-16 sm:flex-none space-x-2"},N={class:"mt-8 flex flex-col"},R={class:"-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8"},B={class:"inline-block min-w-full py-2 align-middle md:px-6 lg:px-8"},C={class:"relative overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg"},L={class:"min-w-full table-auto divide-y divide-gray-300 p-3"},S=e("thead",{class:"bg-gray-50"},[e("tr",null,[e("th",{scope:"col",class:"py-3.5 pr-3 pl-3 text-left text-base font-bold text-gray-900"}," Role Name "),e("th",{scope:"col",class:"px-3 py-3.5 text-left text-base font-bold text-gray-900"}," Permissions ")])],-1),E={class:"divide-y divide-gray-200 bg-white"},F={class:"w-[20%] whitespace-nowrap text-left p-4 font-semibold text-gray-900 capitalize"},j={class:"w-60% whitespace-normal p-3 text-md text-gray-500 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4"},G={__name:"Show",props:{role:Object},setup(l){return(i,q)=>{const o=p("font-awesome-icon"),r=p("Link");return n(),d(m,null,[t(_(f),{title:"Role"}),t(x,null,{header:s(()=>[u]),default:s(()=>[e("div",w,[e("div",y,[e("div",b,[e("div",v,[k,e("div",V,[t(r,{href:i.route("role.edit",l.role.id),class:"btn btn-primary"},{default:s(()=>[t(o,{icon:"fa-solid fa-pen-to-square",class:"mr-1"}),a(" Edit ")]),_:1},8,["href"]),t(r,{href:i.route("role.create"),class:"btn btn-primary"},{default:s(()=>[t(o,{icon:"fa-solid fa-circle-plus",class:"mr-1"}),a(" Create New ")]),_:1},8,["href"]),t(r,{href:i.route("role.index"),class:"btn btn-primary"},{default:s(()=>[t(o,{icon:"fa-solid fa-eye",class:"mr-1"}),a(" View All ")]),_:1},8,["href"])])]),e("div",N,[e("div",R,[e("div",B,[e("div",C,[e("table",L,[S,e("tbody",E,[e("tr",null,[e("td",F,h(l.role.name),1),e("td",j,[(n(!0),d(m,null,g(l.role.permissions,c=>(n(),d("p",{key:c.id,class:"mr-2"},[t(o,{icon:"fa-solid fa-user-shield",class:"text-blue-400"}),a(" "+h(c.name),1)]))),128))])])])])])])])])])])])]),_:1})],64)}}};export{G as default};
