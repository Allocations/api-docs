"use strict";(self.webpackChunkapi_docs=self.webpackChunkapi_docs||[]).push([[1460],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),y=p(r),d=a,f=y["".concat(l,".").concat(d)]||y[d]||u[d]||o;return r?n.createElement(f,i(i({ref:t},c),{},{components:r})):n.createElement(f,i({ref:t},c))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=y;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},91303:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const o={sidebar_position:2},i="Create an API Key",s={unversionedId:"tutorials/create-api-key",id:"tutorials/create-api-key",title:"Create an API Key",description:"Access to the Allocations API is granted to an organization via API keys. Each API key is tied to an",source:"@site/docs/tutorials/create-api-key.md",sourceDirName:"tutorials",slug:"/tutorials/create-api-key",permalink:"/docs/tutorials/create-api-key",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Getting Started",permalink:"/docs/tutorials/intro"}},l={},p=[{value:"Get an API Key",id:"get-an-api-key",level:2},{value:"Using an API Key",id:"using-an-api-key",level:2}],c={toc:p};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"create-an-api-key"},"Create an API Key"),(0,a.kt)("p",null,"Access to the Allocations API is granted to an organization via API keys. Each API key is tied to an\norganization and has full access to the API on behalf of that organization."),(0,a.kt)("p",null,"See the ",(0,a.kt)("a",{parentName:"p",href:"/docs/tutorials/intro"},"Getting Started")," to create a new organization."),(0,a.kt)("h2",{id:"get-an-api-key"},"Get an API Key"),(0,a.kt)("p",null,"API keys can be generated from the Allocations API Dashboard on the ",(0,a.kt)("a",{parentName:"p",href:"https://developer.allocations.app/organizations/api-keys"},"API Keys page"),"."),(0,a.kt)("h2",{id:"using-an-api-key"},"Using an API Key"),(0,a.kt)("p",null,"The API key should be used as a ",(0,a.kt)("inlineCode",{parentName:"p"},"Bearer")," token in the ",(0,a.kt)("inlineCode",{parentName:"p"},"Authorization")," header on each API request."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Authorization: Bearer YOUR_API_KEY_HERE\n")),(0,a.kt)("p",null,"Try out a new API Key from your browser ",(0,a.kt)("a",{parentName:"p",href:"/api/list-investor-passports"},"here"),"."))}u.isMDXComponent=!0}}]);