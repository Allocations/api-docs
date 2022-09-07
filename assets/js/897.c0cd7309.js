"use strict";(self.webpackChunkapi_docs=self.webpackChunkapi_docs||[]).push([[897,972],{67748:(e,t,l)=>{l.d(t,{Z:()=>d});var a=l(67294),n=l(86010),o=l(95999),c=l(35281),r=l(12466),i=l(85936);const s="backToTopButton_sjWU",m="backToTopButtonShow_xfvO";function d(){const{shown:e,scrollToTop:t}=function(e){let{threshold:t}=e;const[l,n]=(0,a.useState)(!1),o=(0,a.useRef)(!1),{startScroll:c,cancelScroll:s}=(0,r.Ct)();return(0,r.RF)(((e,l)=>{let{scrollY:a}=e;const c=null==l?void 0:l.scrollY;c&&(o.current?o.current=!1:a>=c?(s(),n(!1)):a<t?n(!1):a+window.innerHeight<document.documentElement.scrollHeight&&n(!0))})),(0,i.S)((e=>{e.location.hash&&(o.current=!0,n(!1))})),{shown:l,scrollToTop:()=>c(0)}}({threshold:300});return a.createElement("button",{"aria-label":(0,o.I)({id:"theme.BackToTopButton.buttonAriaLabel",message:"Scroll back to top",description:"The ARIA label for the back to top button"}),className:(0,n.Z)("clean-btn",c.k.common.backToTopButton,s,e&&m),type:"button",onClick:t})}},68612:(e,t,l)=>{l.d(t,{Z:()=>Q});var a=l(67294),n=l(87524),o=l(86010),c=l(86668),r=l(21327),i=l(95999),s=l(6023);const m="collapseSidebarButton_PEFL",d="collapseSidebarButtonIcon_kv0_";function u(e){let{onClick:t}=e;return a.createElement("button",{type:"button",title:(0,i.I)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":(0,i.I)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:(0,o.Z)("button button--secondary button--outline",m),onClick:t},a.createElement(s.Z,{className:d}))}var p=l(35281),b=l(59689),h=l(12466),E=l(87462),f=l(902);const k=Symbol("EmptyContext"),_=a.createContext(k);function v(e){let{children:t}=e;const[l,n]=(0,a.useState)(null),o=(0,a.useMemo)((()=>({expandedItem:l,setExpandedItem:n})),[l]);return a.createElement(_.Provider,{value:o},t)}var g=l(86043),Z=l(52802),N=l(48596),C=l(39960),I=l(72389);function S(e){let{categoryLabel:t,onClick:l}=e;return a.createElement("button",{"aria-label":(0,i.I)({id:"theme.DocSidebarItem.toggleCollapsedCategoryAriaLabel",message:"Toggle the collapsible sidebar category '{label}'",description:"The ARIA label to toggle the collapsible sidebar category"},{label:t}),type:"button",className:"clean-btn menu__caret",onClick:l})}function y(e){let{item:t,onItemClick:l,activePath:n,level:r,index:i,...s}=e;const{items:m,label:d,collapsible:u,className:b,href:h}=t,{docs:{sidebar:{autoCollapseCategories:v}}}=(0,c.L)(),y=function(e){const t=(0,I.Z)();return(0,a.useMemo)((()=>e.href?e.href:!t&&e.collapsible?(0,Z.Wl)(e):void 0),[e,t])}(t),T=(0,Z._F)(t,n),L=(0,N.Mg)(h,n),{collapsed:x,setCollapsed:w}=(0,g.u)({initialState:()=>!!u&&(!T&&t.collapsed)}),{expandedItem:A,setExpandedItem:F}=function(){const e=(0,a.useContext)(_);if(e===k)throw new f.i6("DocSidebarItemsExpandedStateProvider");return e}(),B=function(e){void 0===e&&(e=!x),F(e?null:i),w(e)};return function(e){let{isActive:t,collapsed:l,updateCollapsed:n}=e;const o=(0,f.D9)(t);(0,a.useEffect)((()=>{t&&!o&&l&&n(!1)}),[t,o,l,n])}({isActive:T,collapsed:x,updateCollapsed:B}),(0,a.useEffect)((()=>{u&&null!=A&&A!==i&&v&&w(!0)}),[u,A,i,w,v]),a.createElement("li",{className:(0,o.Z)(p.k.docs.docSidebarItemCategory,p.k.docs.docSidebarItemCategoryLevel(r),"menu__list-item",{"menu__list-item--collapsed":x},b)},a.createElement("div",{className:(0,o.Z)("menu__list-item-collapsible",{"menu__list-item-collapsible--active":L})},a.createElement(C.Z,(0,E.Z)({className:(0,o.Z)("menu__link",{"menu__link--sublist":u,"menu__link--sublist-caret":!h&&u,"menu__link--active":T}),onClick:u?e=>{null==l||l(t),h?B(!1):(e.preventDefault(),B())}:()=>{null==l||l(t)},"aria-current":L?"page":void 0,"aria-expanded":u?!x:void 0,href:u?y??"#":y},s),d),h&&u&&a.createElement(S,{categoryLabel:d,onClick:e=>{e.preventDefault(),B()}})),a.createElement(g.z,{lazy:!0,as:"ul",className:"menu__list",collapsed:x},a.createElement(P,{items:m,tabIndex:x?-1:0,onItemClick:l,activePath:n,level:r+1})))}var T=l(13919),L=l(39471);const x="menuExternalLink_NmtK";function w(e){let{item:t,onItemClick:l,activePath:n,level:c,index:r,...i}=e;const{href:s,label:m,className:d,autoAddBaseUrl:u}=t,b=(0,Z._F)(t,n),h=(0,T.Z)(s);return a.createElement("li",{className:(0,o.Z)(p.k.docs.docSidebarItemLink,p.k.docs.docSidebarItemLinkLevel(c),"menu__list-item",d),key:m},a.createElement(C.Z,(0,E.Z)({className:(0,o.Z)("menu__link",!h&&x,{"menu__link--active":b}),autoAddBaseUrl:u,"aria-current":b?"page":void 0,to:s},h&&{onClick:l?()=>l(t):void 0},i),m,!h&&a.createElement(L.Z,null)))}const A="menuHtmlItem_M9Kj";function F(e){let{item:t,level:l,index:n}=e;const{value:c,defaultStyle:r,className:i}=t;return a.createElement("li",{className:(0,o.Z)(p.k.docs.docSidebarItemLink,p.k.docs.docSidebarItemLinkLevel(l),r&&[A,"menu__list-item"],i),key:n,dangerouslySetInnerHTML:{__html:c}})}function B(e){let{item:t,...l}=e;switch(t.type){case"category":return a.createElement(y,(0,E.Z)({item:t},l));case"html":return a.createElement(F,(0,E.Z)({item:t},l));default:return a.createElement(w,(0,E.Z)({item:t},l))}}function M(e){let{items:t,...l}=e;return a.createElement(v,null,t.map(((e,t)=>a.createElement(B,(0,E.Z)({key:t,item:e,index:t},l)))))}const P=(0,a.memo)(M),H="menu_SIkG",R="menuWithAnnouncementBar_GW3s";function W(e){let{path:t,sidebar:l,className:n}=e;const c=function(){const{isActive:e}=(0,b.nT)(),[t,l]=(0,a.useState)(e);return(0,h.RF)((t=>{let{scrollY:a}=t;e&&l(0===a)}),[e]),e&&t}();return a.createElement("nav",{className:(0,o.Z)("menu thin-scrollbar",H,c&&R,n)},a.createElement("ul",{className:(0,o.Z)(p.k.docs.docSidebarMenu,"menu__list")},a.createElement(P,{items:l,activePath:t,level:1})))}const D="sidebar_njMd",U="sidebarWithHideableNavbar_wUlq",z="sidebarHidden_VK0M",j="sidebarLogo_isFc";function K(e){let{path:t,sidebar:l,onCollapse:n,isHidden:i}=e;const{navbar:{hideOnScroll:s},docs:{sidebar:{hideable:m}}}=(0,c.L)();return a.createElement("div",{className:(0,o.Z)(D,s&&U,i&&z)},s&&a.createElement(r.Z,{tabIndex:-1,className:j}),a.createElement(W,{path:t,sidebar:l}),m&&a.createElement(u,{onClick:n}))}const Y=a.memo(K);var G=l(13102),O=l(72961);const q=e=>{let{sidebar:t,path:l}=e;const n=(0,O.e)();return a.createElement("ul",{className:(0,o.Z)(p.k.docs.docSidebarMenu,"menu__list")},a.createElement(P,{items:t,activePath:l,onItemClick:e=>{"category"===e.type&&e.href&&n.toggle(),"link"===e.type&&n.toggle()},level:1}))};function V(e){return a.createElement(G.Zo,{component:q,props:e})}const J=a.memo(V);function Q(e){const t=(0,n.i)(),l="desktop"===t||"ssr"===t,o="mobile"===t;return a.createElement(a.Fragment,null,l&&a.createElement(Y,e),o&&a.createElement(J,e))}},6023:(e,t,l)=>{l.d(t,{Z:()=>o});var a=l(87462),n=l(67294);function o(e){return n.createElement("svg",(0,a.Z)({width:"20",height:"20","aria-hidden":"true"},e),n.createElement("g",{fill:"#7a7a7a"},n.createElement("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),n.createElement("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})))}},4972:(e,t,l)=>{l.r(t),l.d(t,{default:()=>r});var a=l(67294),n=l(95999),o=l(1944),c=l(80215);function r(){return a.createElement(a.Fragment,null,a.createElement(o.d,{title:(0,n.I)({id:"theme.NotFound.title",message:"Page Not Found"})}),a.createElement(c.Z,null,a.createElement("main",{className:"container margin-vert--xl"},a.createElement("div",{className:"row"},a.createElement("div",{className:"col col--6 col--offset-3"},a.createElement("h1",{className:"hero__title"},a.createElement(n.Z,{id:"theme.NotFound.title",description:"The title of the 404 page"},"Page Not Found")),a.createElement("p",null,a.createElement(n.Z,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page"},"We could not find what you were looking for.")),a.createElement("p",null,a.createElement(n.Z,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page"},"Please contact the owner of the site that linked you to the original URL and let them know their link is broken.")))))))}}}]);