"use strict";(self.webpackChunkapi_docs=self.webpackChunkapi_docs||[]).push([[9],{62002:(e,a,t)=>{t.r(a),t.d(a,{default:()=>I});var n=t(67294),i=t(18790),r=t(76775),o=t(95999),c=t(3905),d=t(67748),s=t(68612),l=t(6023),p=t(80215),u=t(78433),m=t(4972),b=t(86010);const f="apiPage_KQrU",h="apiMainContainer_L2xG",E="apiSidebarContainer_Korj",A="apiMainContainerEnhanced_KekW",k="apiSidebarContainerHidden_KLHn",C="collapsedApiSidebar_Ic1j",M="expandSidebarButtonIcon_Z2po",Z="apiItemWrapperEnhanced_aX4w";function _(e){let{currentApiRoute:a,apiMetadata:t}=e;const n=a.sidebar;return n?t.apiSidebars[n]:void 0}function g(e){let a=[];for(let t of e)switch(t.type){case"link":a.push(t.href);break;case"category":a.push(...g(t.items))}return a}function x(e){let{currentApiRoute:a,apiMetadata:t}=e;const n=_({currentApiRoute:a,apiMetadata:t});return n?g(n):[]}function R(e){let{currentApiRoute:a,apiMetadata:t,children:i}=e;const r=_({currentApiRoute:a,apiMetadata:t}),[m,g]=(0,n.useState)(!1),[x,R]=(0,n.useState)(!1),I=(0,n.useCallback)((()=>{x&&R(!1),g((e=>!e))}),[x]);return n.createElement(p.Z,{wrapperClassName:"api-wrapper"},n.createElement("div",{className:f},n.createElement(d.Z,null),r&&n.createElement("aside",{className:(0,b.Z)(E,{[k]:m}),onTransitionEnd:e=>{e.currentTarget.classList.contains(E)&&m&&R(!0)}},n.createElement(s.Z,{key:a.sidebar,sidebar:r,path:a.path,onCollapse:I,isHidden:x}),x&&n.createElement("div",{className:C,title:(0,o.I)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":(0,o.I)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:I,onClick:I},n.createElement(l.Z,{className:M}))),n.createElement("main",{className:(0,b.Z)(h,{[A]:m||!r})},n.createElement("div",{className:(0,b.Z)("container padding-top--md padding-bottom--lg",{[Z]:m})},n.createElement(c.Zo,{components:u.Z},i)))))}const I=function(e){const{route:{routes:a},apiMetadata:t,location:o}=e;let c=a.find((e=>(0,r.LX)(o.pathname,e)));if(!c)return n.createElement(m.default,null);const d=x({currentApiRoute:c,apiMetadata:t});return d.find((e=>(0,r.LX)(o.pathname,e)))||(c={...c,path:d[0]}),n.createElement(n.Fragment,null,n.createElement(R,{currentApiRoute:c,apiMetadata:t},(0,i.H)(a)))}}}]);