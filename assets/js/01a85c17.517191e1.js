"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8209],{9564:(e,t,a)=>{a.d(t,{in:()=>c,OU:()=>k,Ki:()=>y,kJ:()=>f,x:()=>l,e7:()=>u,J_:()=>b,Gx:()=>A});var n=a(6540),s=a(9532),r=a(6803),i=a(4848);function l(){const e=(0,r.A)(),t=e?.data?.blogMetadata;if(!t)throw new Error("useBlogMetadata() can't be called on the current route because the blog metadata could not be found in route context");return t}const o=n.createContext(null);function c(e){let{children:t,content:a,isBlogPostPage:s=!1}=e;const r=function(e){let{content:t,isBlogPostPage:a}=e;return(0,n.useMemo)((()=>({metadata:t.metadata,frontMatter:t.frontMatter,assets:t.assets,toc:t.toc,isBlogPostPage:a})),[t,a])}({content:a,isBlogPostPage:s});return(0,i.jsx)(o.Provider,{value:r,children:t})}function u(){const e=(0,n.useContext)(o);if(null===e)throw new s.dV("BlogPostProvider");return e}var m=a(6025),d=a(4586);const g=e=>new Date(e).toISOString();function h(e){const t=e.map(x);return{author:1===t.length?t[0]:t}}function p(e,t,a){return e?{image:j({imageUrl:t(e,{absolute:!0}),caption:`title image for the blog post: ${a}`})}:{}}function f(e){const{siteConfig:t}=(0,d.A)(),{withBaseUrl:a}=(0,m.hH)(),{metadata:{blogDescription:n,blogTitle:s,permalink:r}}=e,i=`${t.url}${r}`;return{"@context":"https://schema.org","@type":"Blog","@id":i,mainEntityOfPage:i,headline:s,description:n,blogPost:e.items.map((e=>function(e,t,a){const{assets:n,frontMatter:s,metadata:r}=e,{date:i,title:l,description:o,lastUpdatedAt:c}=r,u=n.image??s.image,m=s.keywords??[],d=`${t.url}${r.permalink}`,f=c?g(c):void 0;return{"@type":"BlogPosting","@id":d,mainEntityOfPage:d,url:d,headline:l,name:l,description:o,datePublished:i,...f?{dateModified:f}:{},...h(r.authors),...p(u,a,l),...m?{keywords:m}:{}}}(e.content,t,a)))}}function b(){const e=l(),{assets:t,metadata:a}=u(),{siteConfig:n}=(0,d.A)(),{withBaseUrl:s}=(0,m.hH)(),{date:r,title:i,description:o,frontMatter:c,lastUpdatedAt:f}=a,b=t.image??c.image,x=c.keywords??[],j=f?g(f):void 0,v=`${n.url}${a.permalink}`;return{"@context":"https://schema.org","@type":"BlogPosting","@id":v,mainEntityOfPage:v,url:v,headline:i,name:i,description:o,datePublished:r,...j?{dateModified:j}:{},...h(a.authors),...p(b,s,i),...x?{keywords:x}:{},isPartOf:{"@type":"Blog","@id":`${n.url}${e.blogBasePath}`,name:e.blogTitle}}}function x(e){return{"@type":"Person",...e.name?{name:e.name}:{},...e.title?{description:e.title}:{},...e.url?{url:e.url}:{},...e.email?{email:e.email}:{},...e.imageURL?{image:e.imageURL}:{}}}function j(e){let{imageUrl:t,caption:a}=e;return{"@type":"ImageObject","@id":t,url:t,contentUrl:t,caption:a}}var v=a(6347),N=a(8774);var C=a(9169);function A(e){const{pathname:t}=(0,v.zy)();return(0,n.useMemo)((()=>e.filter((e=>function(e,t){return!(e.unlisted&&!(0,C.ys)(e.permalink,t))}(e,t)))),[e,t])}function y(e){const t=function(e,t){const a={};let n=0;for(const s of e){const e=t(s,n);a[e]??=[],a[e].push(s),n+=1}return a}(e,(e=>`${new Date(e.date).getFullYear()}`)),a=Object.entries(t);return a.reverse(),a}function k(e){let{items:t,ulClassName:a,liClassName:n,linkClassName:s,linkActiveClassName:r}=e;return(0,i.jsx)("ul",{className:a,children:t.map((e=>(0,i.jsx)("li",{className:n,children:(0,i.jsx)(N.A,{isNavLink:!0,to:e.permalink,className:s,activeClassName:r,children:e.title})},e.permalink)))})}},8027:(e,t,a)=>{a.d(t,{A:()=>M});var n=a(6540),s=a(4164),r=a(1704),i=a(4581),l=a(1312),o=a(9564),c=a(6342),u=a(1107),m=a(4848);function d(e){let{year:t,yearGroupHeadingClassName:a,children:n}=e;return(0,m.jsxs)("div",{role:"group",children:[(0,m.jsx)(u.A,{as:"h3",className:a,children:t}),n]})}function g(e){let{items:t,yearGroupHeadingClassName:a,ListComponent:n}=e;if((0,c.p)().blog.sidebar.groupByYear){const e=(0,o.Ki)(t);return(0,m.jsx)(m.Fragment,{children:e.map((e=>{let[t,s]=e;return(0,m.jsx)(d,{year:t,yearGroupHeadingClassName:a,children:(0,m.jsx)(n,{items:s})},t)}))})}return(0,m.jsx)(n,{items:t})}const h=(0,n.memo)(g),p="sidebar_re4s",f="sidebarItemTitle_pO2u",b="sidebarItemList_Yudw",x="sidebarItem__DBe",j="sidebarItemLink_mo7H",v="sidebarItemLinkActive_I1ZP",N="yearGroupHeading_rMGB",C=e=>{let{items:t}=e;return(0,m.jsx)(o.OU,{items:t,ulClassName:(0,s.A)(b,"clean-list"),liClassName:x,linkClassName:j,linkActiveClassName:v})};function A(e){let{sidebar:t}=e;const a=(0,o.Gx)(t.items);return(0,m.jsx)("aside",{className:"col col--3",children:(0,m.jsxs)("nav",{className:(0,s.A)(p,"thin-scrollbar"),"aria-label":(0,l.T)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"}),children:[(0,m.jsx)("div",{className:(0,s.A)(f,"margin-bottom--md"),children:t.title}),(0,m.jsx)(h,{items:a,ListComponent:C,yearGroupHeadingClassName:N})]})})}const y=(0,n.memo)(A);var k=a(5600);const P="yearGroupHeading_QT03",_=e=>{let{items:t}=e;return(0,m.jsx)(o.OU,{items:t,ulClassName:"menu__list",liClassName:"menu__list-item",linkClassName:"menu__link",linkActiveClassName:"menu__link--active"})};function w(e){let{sidebar:t}=e;const a=(0,o.Gx)(t.items);return(0,m.jsx)(h,{items:a,ListComponent:_,yearGroupHeadingClassName:P})}function B(e){return(0,m.jsx)(k.GX,{component:w,props:e})}const U=(0,n.memo)(B);function G(e){let{sidebar:t}=e;const a=(0,i.l)();return t?.items.length?"mobile"===a?(0,m.jsx)(U,{sidebar:t}):(0,m.jsx)(y,{sidebar:t}):null}function M(e){const{sidebar:t,toc:a,children:n,...i}=e,l=t&&t.items.length>0;return(0,m.jsx)(r.A,{...i,children:(0,m.jsx)("div",{className:"container margin-vert--lg",children:(0,m.jsxs)("div",{className:"row",children:[(0,m.jsx)(G,{sidebar:t}),(0,m.jsx)("main",{className:(0,s.A)("col",{"col--7":l,"col--9 col--offset-1":!l}),children:n}),a&&(0,m.jsx)("div",{className:"col col--2",children:a})]})})})}},9158:(e,t,a)=>{a.r(t),a.d(t,{default:()=>f});a(6540);var n=a(4164),s=a(1312);const r=()=>(0,s.T)({id:"theme.tags.tagsPageTitle",message:"Tags",description:"The title of the tag list page"});var i=a(1213),l=a(7559),o=a(8027),c=a(6133),u=a(1107);const m={tag:"tag_Nnez"};var d=a(4848);function g(e){let{letterEntry:t}=e;return(0,d.jsxs)("article",{children:[(0,d.jsx)(u.A,{as:"h2",id:t.letter,children:t.letter}),(0,d.jsx)("ul",{className:"padding--none",children:t.tags.map((e=>(0,d.jsx)("li",{className:m.tag,children:(0,d.jsx)(c.A,{...e})},e.permalink)))}),(0,d.jsx)("hr",{})]})}function h(e){let{tags:t}=e;const a=function(e){const t={};return Object.values(e).forEach((e=>{const a=function(e){return e[0].toUpperCase()}(e.label);t[a]??=[],t[a].push(e)})),Object.entries(t).sort(((e,t)=>{let[a]=e,[n]=t;return a.localeCompare(n)})).map((e=>{let[t,a]=e;return{letter:t,tags:a.sort(((e,t)=>e.label.localeCompare(t.label)))}}))}(t);return(0,d.jsx)("section",{className:"margin-vert--lg",children:a.map((e=>(0,d.jsx)(g,{letterEntry:e},e.letter)))})}var p=a(1463);function f(e){let{tags:t,sidebar:a}=e;const s=r();return(0,d.jsxs)(i.e3,{className:(0,n.A)(l.G.wrapper.blogPages,l.G.page.blogTagsListPage),children:[(0,d.jsx)(i.be,{title:s}),(0,d.jsx)(p.A,{tag:"blog_tags_list"}),(0,d.jsxs)(o.A,{sidebar:a,children:[(0,d.jsx)(u.A,{as:"h1",children:s}),(0,d.jsx)(h,{tags:t})]})]})}},6133:(e,t,a)=>{a.d(t,{A:()=>l});a(6540);var n=a(4164),s=a(8774);const r={tag:"tag_zVej",tagRegular:"tagRegular_sFm0",tagWithCount:"tagWithCount_h2kH"};var i=a(4848);function l(e){let{permalink:t,label:a,count:l,description:o}=e;return(0,i.jsxs)(s.A,{href:t,title:o,className:(0,n.A)(r.tag,l?r.tagWithCount:r.tagRegular),children:[a,l&&(0,i.jsx)("span",{children:l})]})}},9169:(e,t,a)=>{a.d(t,{Dt:()=>l,ys:()=>i});var n=a(6540),s=a(8328),r=a(4586);function i(e,t){const a=e=>(!e||e.endsWith("/")?e:`${e}/`)?.toLowerCase();return a(e)===a(t)}function l(){const{baseUrl:e}=(0,r.A)().siteConfig;return(0,n.useMemo)((()=>function(e){let{baseUrl:t,routes:a}=e;function n(e){return e.path===t&&!0===e.exact}function s(e){return e.path===t&&!e.exact}return function e(t){if(0===t.length)return;return t.find(n)||e(t.filter(s).flatMap((e=>e.routes??[])))}(a)}({routes:s.A,baseUrl:e})),[e])}}}]);