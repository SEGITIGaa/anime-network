import{j as s,L as t,r as c,c as l}from"./index-CO1LhOMl.js";const n=({anime:e})=>s.jsxs(t,{to:`/anime/${e.slug}`,className:"snap-start snap-always h-96 flex flex-col gap-3 items-center cursor-pointer",children:[s.jsx("img",{src:e.gambar,alt:e.judul,width:252,height:288,className:"object-cover h-72 rounded-md"}),s.jsxs("div",{className:"flex flex-col gap-2 items-center w-56",children:[s.jsx("p",{className:"text-second font-semibold break-words w-52 truncate text-center text-lg",children:e.judul}),s.jsxs("p",{className:"text-second break-words truncate text-center text-xs",children:[e.eps," episode"]})]})]}),i=({ongoingAnimes:e})=>s.jsxs("section",{className:"flex flex-col gap-5",children:[s.jsxs("div",{className:"w-full items-center justify-between flex",children:[s.jsx("h1",{className:"h1",children:"Ongoing"}),s.jsxs(t,{to:"/ongoing",className:"arrow-btn",children:["more",s.jsx("img",{src:"/arrow.svg",alt:"",height:18,width:18})]})]}),s.jsx("div",{className:"carousel",children:s.jsx(c.Suspense,{fallback:s.jsx(l,{}),children:e.map((a,r)=>s.jsx(n,{anime:a},r))})})]});export{i as default};
