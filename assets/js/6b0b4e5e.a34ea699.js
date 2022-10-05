"use strict";(self.webpackChunkapi_docs=self.webpackChunkapi_docs||[]).push([[1460],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>d});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),y=p(r),d=a,f=y["".concat(c,".").concat(d)]||y[d]||u[d]||o;return r?n.createElement(f,i(i({ref:t},s),{},{components:r})):n.createElement(f,i({ref:t},s))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=y;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},91303:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const o={},i=void 0,l={unversionedId:"tutorials/create-api-key",id:"tutorials/create-api-key",title:"create-api-key",description:"\\\\\\\\---",source:"@site/docs/tutorials/create-api-key.md",sourceDirName:"tutorials",slug:"/tutorials/create-api-key",permalink:"/docs/tutorials/create-api-key",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Getting Started",permalink:"/docs/tutorials/intro"}},c={},p=[{value:"Get an API Key",id:"get-an-api-key",level:2},{value:"Using an API Key",id:"using-an-api-key",level:2}],s={toc:p};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"*","*","*","*","---\nsidebar_position: 2"),(0,a.kt)("hr",null),(0,a.kt)("h1",{id:"create-an-api-key"},"Create an API Key"),(0,a.kt)("p",null,"API Keys grant access to the Allocations API for an organization. Each API key has full access to the API on behalf of that organization."),(0,a.kt)("h2",{id:"get-an-api-key"},"Get an API Key"),(0,a.kt)("p",null,"Generate API Keys from the Allocations API Dashboard on the ",(0,a.kt)("a",{parentName:"p",href:"https://dashboard.allocations.com"},"API Keys"),". There are two types of API Keys:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"test")," - Used to test your integration in a sandbox environment."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"production")," - Used in production to create real data.")),(0,a.kt)("h2",{id:"using-an-api-key"},"Using an API Key"),(0,a.kt)("p",null,"The API key should be used as a ",(0,a.kt)("inlineCode",{parentName:"p"},"Bearer")," token in the ",(0,a.kt)("inlineCode",{parentName:"p"},"Authorization")," header on each API request."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Authorization: Bearer YOUR_API_KEY_HERE\n")))}u.isMDXComponent=!0}}]);