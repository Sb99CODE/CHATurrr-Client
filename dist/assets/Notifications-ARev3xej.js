import{d as j,u as g,aW as w,j as e,S as n,v as y,r as k,aX as q,a0 as m}from"./index-cg0HLfUH.js";import{b as v,a as A}from"./Menu-BoKfsZEJ.js";import{D as R,a as b}from"./DialogTitle-C2W9bb5I.js";import{T as x}from"./Typography-C8iy1uN8.js";import{L as N}from"./ListItem-DOFOj8C6.js";import{A as I}from"./Avatar-BvyMi6ro.js";import{B as p}from"./Button-B6Lohw-c.js";import"./Modal-BTIp2LLF.js";import"./Menu-BTXWW0Dp.js";import"./isMuiElement-Bx8imJWi.js";const M=()=>{var l;const{isNotification:a}=j(i=>i.misc),t=g(),{isLoading:r,data:s,error:c,isError:d}=w(),[u]=v(q),f=async({_id:i,accept:o})=>{t(m(!1)),await u("Accepting...",{requestId:i,accept:o})},h=()=>t(m(!1));return A([{error:c,isError:d}]),e.jsx(R,{open:a,onClose:h,children:e.jsxs(n,{p:{xs:"1rem",sm:"2rem"},maxWidth:"25rem",children:[e.jsx(b,{children:"Notifications"}),r?e.jsx(y,{}):e.jsx(e.Fragment,{children:(s==null?void 0:s.allRequests.length)>0?(l=s==null?void 0:s.allRequests)==null?void 0:l.map(({sender:i,_id:o})=>e.jsx(C,{sender:i,_id:o,handler:f},o)):e.jsx(x,{textAlign:"center",children:"0 notifications"})})]})})},C=k.memo(({sender:a,_id:t,handler:r})=>{const{name:s,avatar:c}=a;return e.jsx(N,{children:e.jsxs(n,{direction:"row",alignItems:"center",spacing:"1rem",width:"100%",children:[e.jsx(I,{}),e.jsx(x,{variant:"body1",sx:{flexGlow:1,display:"-webkit-box",WebkitLineClamp:1,WebkitBoxOrient:"vertical",overflow:"hidden",textOverflow:"ellipsis",width:"100%"},children:`${s} sent you a friend request.`}),e.jsxs(n,{direction:{xs:"column",sm:"row"},children:[e.jsx(p,{onClick:()=>r({_id:t,accept:!0}),children:"Accept"}),e.jsx(p,{color:"error",onClick:()=>r({_id:t,accept:!1}),children:"Reject"})]})]})})});export{M as default};
