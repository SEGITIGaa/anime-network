import{r as u,j as s,L as d}from"./index-CO1LhOMl.js";const m=({ongoingAnimes:e,getAnimes:o,setRequest:l})=>{const[a,r]=u.useState(""),n=()=>{const t=Math.floor(Math.random()*24)+1;r(e[t].judul)};return s.jsx("form",{className:"navbar",onSubmit:t=>{t.preventDefault();const c=t.target.querySelector("input").value;l(`search=${c}`),o(!0,`search=${c}`)},children:s.jsx("input",{type:"search",name:"",id:"",onFocus:n,onBlur:()=>r(""),placeholder:a!==""?`"${a}"`:"what’s looking for..",className:"input-search"})})},i=({anime:e})=>s.jsxs(d,{to:`/anime/${e.slug}`,className:"snap-start snap-always h-72 md:h-96 flex flex-col gap-3 items-center cursor-pointer",children:[s.jsx("img",{src:e.gambar,alt:e.judul,width:252,height:288,className:"object-cover h-80 rounded-md"}),s.jsxs("div",{className:"flex flex-col gap-2 items-center w-4/6",children:[s.jsx("p",{className:"text-second font-semibold break-words truncate text-center text-sm w-full",children:e.judul}),s.jsxs("p",{className:"text-second break-words truncate text-center text-xs",children:[e.eps," episode"]})]})]});export{m as N,i as S};