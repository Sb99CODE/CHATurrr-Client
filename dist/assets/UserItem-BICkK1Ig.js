import{j as r,r as c,S as l,W as p}from"./index-cg0HLfUH.js";import{L as x}from"./ListItem-DOFOj8C6.js";import{A as d}from"./Avatar-BvyMi6ro.js";import{c as h,T as f}from"./Typography-C8iy1uN8.js";import{I as v}from"./IconButton-BswfLypL.js";import{A as j}from"./Delete-BAXklz8b.js";const I=h(r.jsx("path",{d:"M19 13H5v-2h14z"}),"Remove"),b=({user:e,handler:t,handlerIsLoading:s,isAdded:o=!1,styling:a={}})=>{const{name:i,_id:m,avatar:n}=e;return r.jsx(x,{children:r.jsxs(l,{direction:"row",alignItems:"center",spacing:"1rem",width:"100%",...a,children:[r.jsx(d,{src:p(n)}),r.jsx(f,{variant:"body1",sx:{flexGlow:1,display:"-webkit-box",WebkitLineClamp:1,WebkitBoxOrient:"vertical",overflow:"hidden",textOverflow:"ellipsis",width:"100%"},children:i}),r.jsx(v,{size:"small",sx:{bgcolor:o?"error.main":"primary.main",color:"white","&:hover":{bgcolor:o?"error.dark":"primary.dark"}},onClick:()=>t(m),disabled:s,children:o?r.jsx(I,{}):r.jsx(j,{})})]})})},R=c.memo(b);export{R as U};
