import{u as S,r as t,j as s,I as A,a as G}from"./index-CO1LhOMl.js";import{L as N}from"./Layout-B1EvdRiN.js";import{N as w,S as L}from"./SmallCard-CiEUXqrQ.js";import{B as E}from"./BackBtn-w3Jl13pc.js";const q=()=>{const l=S().slug,[r,c]=t.useState([]),[f,p]=t.useState(`genre=${l}`),[d,m]=t.useState(!0),[x,u]=t.useState(1);t.useEffect(()=>{i()},[]);const i=async(e=!1,a=f)=>{e&&(u(1),c([]));const n=await(await fetch(`https://web-anime-psi.vercel.app/anime?page=${e?1:x}&${a}`)).json();n.length>0?(m(!0),c(o=>{const j=e?n:n.filter(y=>!o.some(B=>B.slug===y.slug));return[...o,...j]}),u(o=>e?2:o+1)):m(!1)},h=t.useMemo(()=>r.filter((e,a,g)=>g.findIndex(n=>n.slug===e.slug)===a),[r]);return s.jsxs(N,{children:[s.jsx(w,{ongoingAnimes:r,setRequest:p,getAnimes:i}),s.jsx(E,{}),s.jsxs("section",{className:"flex flex-col items-start gap-5 pt-10",children:[s.jsxs("h1",{className:"h1",children:[l," anime collection"]}),s.jsx(A,{dataLength:h.length,hasMore:d,next:i,loader:s.jsx(G,{}),className:"grid grid-cols-2 justify-start items-start gap-5 gap-y-5 md:grid-cols-4",children:r.map((e,a)=>s.jsx(L,{anime:e},a))})]})]})};export{q as default};