"use strict";(self.webpackChunkapi_docs=self.webpackChunkapi_docs||[]).push([[610],{3905:(t,e,n)=>{n.d(e,{Zo:()=>d,kt:()=>m});var i=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,i,r=function(t,e){if(null==t)return{};var n,i,r={},a=Object.keys(t);for(i=0;i<a.length;i++)n=a[i],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(i=0;i<a.length;i++)n=a[i],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var l=i.createContext({}),p=function(t){var e=i.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},d=function(t){var e=p(t.components);return i.createElement(l.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return i.createElement(i.Fragment,{},e)}},y=i.forwardRef((function(t,e){var n=t.components,r=t.mdxType,a=t.originalType,l=t.parentName,d=s(t,["components","mdxType","originalType","parentName"]),y=p(n),m=r,u=y["".concat(l,".").concat(m)]||y[m]||c[m]||a;return n?i.createElement(u,o(o({ref:e},d),{},{components:n})):i.createElement(u,o({ref:e},d))}));function m(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var a=n.length,o=new Array(a);o[0]=y;var s={};for(var l in e)hasOwnProperty.call(e,l)&&(s[l]=e[l]);s.originalType=t,s.mdxType="string"==typeof t?t:r,o[1]=s;for(var p=2;p<a;p++)o[p]=n[p];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}y.displayName="MDXCreateElement"},38107:(t,e,n)=>{n.r(e),n.d(e,{contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var i=n(87462),r=(n(67294),n(3905));const a={},o="Create Investor Passport",s={type:"api",id:"create-investor-passport",unversionedId:"create-investor-passport",title:"Create Investor Passport",description:"",slug:"/create-investor-passport",frontMatter:{},api:{description:"Create a new [Investor Passport](/docs/concepts/investor-passport). Investor Passports collect identifying information about an investor in order to KYC/KYB an investor and generate tax returns.",tags:["Investor Passport"],security:[{ApiKeyAuth:[]}],requestBody:{required:!0,content:{"application/json":{schema:{type:"object",properties:{name:{type:"string",description:"The name of the investor passport. Either the Entity's name or the Individual's name."},type:{type:"string",enum:["Entity","Individual"],description:"Whether the passport is for an Entity or an Individual."},title:{type:"string",description:"The title of the individual signing on behalf of an Entity."},representative:{type:"string",description:"The name of the individual signing on behalf of the Entity."},country:{type:"string",description:"The country of formation or residence."},accreditation_type:{type:"string",description:"How the investor is accredited. See https://www.sec.gov/education/capitalraising/building-blocks/accredited-investor",enum:["NetWorthOver1m","SoloOver200k","JointOver300k","Certification","DirectorOfFund","KnowledgeableEmployee","EachOwnerAccredited","AssetsOver5m","AUM5m","InvestmentAdvisor","FinancialEntity"]},metadata:{type:"object",description:"Extra data to store with the investor passport."}},required:["name","type","country","accreditation_type"]}}}},responses:{200:{description:"Returns the created Investor Passport as well as the tax_form_fields required to create the correct tax form for the new investor passport",content:{"application/json":{schema:{properties:{tax_form_fields:{type:"object",oneOf:[{type:"object",properties:{address:{type:"string",description:"Investor's Street Address."},city:{type:"string",description:"Investor's city of residence."},state:{type:"string",description:"Investor's state of residence."},postal_code:{type:"string",description:"Investor's postal code."},tax_id:{type:"string",description:"Investor's tax id (SSN)."}}},{type:"object",properties:{name:{type:"string | null"},smllc_name:{type:"string | null"},ssn:{type:"string | null"},company_type:{type:"string",enum:["C Corporation","S Corporation","Partnership","Single-Member LLC","Trust or Estate","Limited Liability Company","Other"]},smllc_owner_name:{type:"string"},company_type_name:{type:"string"},taxed_as:{type:"string",enum:["C Corporation","S Corporation","Partnership"]},address:{type:"string",description:"Investor's Street Address."},city:{type:"string",description:"Investor's city of residence."},state:{type:"string",description:"Investor's state of residence."},postal_code:{type:"string",description:"Investor's postal code."},tax_id:{type:"string",description:"Investor's tax id (SSN)."}}},{type:"object",properties:{address:{type:"string",description:"Investor's Street Address."},city:{type:"string",description:"Investor's city of residence."},region:{type:"string"},postal_code:{type:"string",description:"Investor's postal code."},residence_country:{type:"string",description:"Investor's country of residence."},mailing_address:{type:"string"},mailing_city:{type:"string"},mailing_region:{type:"string"},mailing_postal_code:{type:"string"},mailing_country:{type:"string"},tax_id:{type:"string",description:"Investor's tax id (EIN)."},foreign_tax_id:{type:"string"},treaty_country:{type:"string"},treaty_article:{type:"string"},treaty_withholding:{type:"string"},treaty_income:{type:"string"},treaty_conditions:{type:"string"}}},{type:"object",properties:{disregarded_entity:{type:"string"},chapter3_status:{type:"string",description:"Chapter 3 Selection (one only)",enum:["Simple trust","Central Bank of Issue","Grantor trust","Tax-exempt organization","Private foundation","Disregarded entity","Corporation","Complex trust","Estate","International organization","Partnership","Foreign Government - Controlled Entity","Foreign Government - Integral Part"]},chapter4_status:{type:"array",description:"Chapter 4 Selections (can be multiple)",items:{type:"string",enum:["Nonparticipating FFI (including an FFI related to a Reporting IGA FFI other than a deemed-compliant FFI","participating FFI","or exempt beneficial owner)","Participating FFI","Reporting Model 1 FFI","Reporting Model 2 FFI","Registered deemed-compliant FFI (other than a reporting Model 1 FFI","sponsored FFI","or nonreporting IGA FFI covered in Part XII). See instructions","Sponsored FFI. Complete Part IV","Certified deemed-compliant nonregistering local bank. Complete Part V","Certified deemed-compliant FFI with only low-value accounts. Complete Part VI","Certified deemed-compliant sponsored","closely held investment vehicle. Complete Part VII","Certified deemed-compliant limited life debt investment entity. Complete Part VIII","Certain investment entities that do not maintain financial accounts. Complete Part IX","Owner-documented FFI. Complete Part X","Restricted distributor. Complete Part XI","Nonreporting IGA FFI. Complete Part XII","Foreign government","government of a U.S. possession","or foreign central bank of issue. Complete Part XIII","International organization. Complete Part XIV","Exempt retirement plans. Complete Part XV","Entity wholly owned by exempt beneficial owners. Complete Part XVI","Territory financial institution. Complete Part XVII","Excepted nonfinancial group entity. Complete Part XVIII","Excepted nonfinancial start-up company. Complete Part XIX","Excepted nonfinancial entity in liquidation or bankruptcy. Complete Part XX","501(c) organization. Complete Part XXI","Nonprofit organization. Complete Part XXII","Publicly traded NFFE or NFFE affiliate of a publicly traded corporation. Complete Part XXIII","Excepted territory NFFE. Complete Part XXIV","Active NFFE. Complete Part XXV","Passive NFFE. Complete Part XXVI","Excepted inter-affiliate FFI. Complete Part XXVII","Direct reporting NFFE","Sponsored direct reporting NFFE. Complete Part XXVIII","Account that is not a financial account"]}},address:{type:"string",description:"Investor's Street Address."},city:{type:"string",description:"Investor's city of residence."},region:{type:"string"},postal_code:{type:"string",description:"Investor's postal code."},residence_country:{type:"string",description:"Investor's country of residence."},tax_id:{type:"string",description:"Investor's tax id (EIN)."},foreign_tax_id:{type:"string"}}}]},_id:{type:"string",description:"The investor passport's primary key."},id:{type:"string",description:"A virtual of _id."},phase:{type:"string;",enum:["new","onboarding","kyc","review","rejected","failed","self-accredited"],description:"The phase the investor passport is currently in."},name:{type:"string",description:"The name of the Entity or Individual."},type:{type:"string",enum:["Entity","Individual"],description:"The type of investor passport."},title:{type:"string",description:"The title of the individual who represents the Entity."},representative:{type:"string",description:"The name of the individual who represents the Entity."},country:{type:"string",description:"The country of formation or residence."},accreditation_type:{type:"string",description:"How the investor is accredited. See https://www.sec.gov/education/capitalraising/building-blocks/accredited-investor",enum:["NetWorthOver1m","SoloOver200k","JointOver300k","Certification","DirectorOfFund","KnowledgeableEmployee","EachOwnerAccredited","AssetsOver5m","AUM5m","InvestmentAdvisor","FinancialEntity"]},metadata:{type:"object",description:"Extra data to store with the investor passport."}},type:"object"}}}}},method:"post",path:"/api/v1/investor-passports",servers:[{url:"https://api.allocations.app",description:"Production HVP API"}],securitySchemes:{ApiKeyAuth:{type:"apiKey",in:"header",name:"X-API-KEY"}},jsonRequestBodyExample:{name:"string",type:"Entity",title:"string",representative:"string",country:"string",accreditation_type:"NetWorthOver1m",metadata:{}},info:{title:"HVP API Documentation",description:"Checkout the [Getting Started Tutorial](/docs/tutorials/intro) to get setup with the Allocations API.\n",version:"1.0.0"},postman:{name:"Create Investor Passport",description:{content:"Create a new [Investor Passport](/docs/concepts/investor-passport). Investor Passports collect identifying information about an investor in order to KYC/KYB an investor and generate tax returns.",type:"text/plain"},url:{path:["api","v1","investor-passports"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'{\n    "name": "<string>",\n    "type": "<string>",\n    "country": "<string>",\n    "accreditation_type": "<string>",\n    "title": "<string>",\n    "representative": "<string>",\n    "metadata": "<object>"\n}'},auth:{type:"apikey",apikey:[{type:"any",value:"X-API-KEY",key:"key"},{type:"any",value:!0,key:"value"},{type:"any",value:"header",key:"in"}]}}},source:"@site/openapi.json",sourceDirName:".",permalink:"/api/create-investor-passport",previous:{title:"List Investment Agreements",permalink:"/api/list-investment-agreements-1"},next:{title:"List Investor Passports",permalink:"/api/list-investor-passports"}},l=[],p={toc:l};function d(t){let{components:e,...n}=t;return(0,r.kt)("wrapper",(0,i.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"create-investor-passport"},"Create Investor Passport"),(0,r.kt)("p",null,"Create a new ",(0,r.kt)("a",{parentName:"p",href:"/docs/concepts/investor-passport"},"Investor Passport"),". Investor Passports collect identifying information about an investor in order to KYC/KYB an investor and generate tax returns."),(0,r.kt)("table",{style:{display:"table",width:"100%"}},(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",{style:{textAlign:"left"}},"Request Body ",(0,r.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,r.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"),(0,r.kt)("div",null)))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"name"),(0,r.kt)("span",{style:{opacity:"0.6"}}," string"),(0,r.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,r.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"),(0,r.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,r.kt)("p",null,"The name of the investor passport. Either the Entity's name or the Individual's name.")))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"type"),(0,r.kt)("span",{style:{opacity:"0.6"}}," string"),(0,r.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,r.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"),(0,r.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Possible values:")," ","[",(0,r.kt)("inlineCode",{parentName:"p"},"Entity"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Individual"),"]")),(0,r.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,r.kt)("p",null,"Whether the passport is for an Entity or an Individual.")))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"title"),(0,r.kt)("span",{style:{opacity:"0.6"}}," string"),(0,r.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,r.kt)("p",null,"The title of the individual signing on behalf of an Entity.")))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"representative"),(0,r.kt)("span",{style:{opacity:"0.6"}}," string"),(0,r.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,r.kt)("p",null,"The name of the individual signing on behalf of the Entity.")))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"country"),(0,r.kt)("span",{style:{opacity:"0.6"}}," string"),(0,r.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,r.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"),(0,r.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,r.kt)("p",null,"The country of formation or residence.")))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"accreditation_type"),(0,r.kt)("span",{style:{opacity:"0.6"}}," string"),(0,r.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,r.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"),(0,r.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Possible values:")," ","[",(0,r.kt)("inlineCode",{parentName:"p"},"NetWorthOver1m"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"SoloOver200k"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"JointOver300k"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Certification"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"DirectorOfFund"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"KnowledgeableEmployee"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"EachOwnerAccredited"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"AssetsOver5m"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"AUM5m"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"InvestmentAdvisor"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"FinancialEntity"),"]")),(0,r.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,r.kt)("p",null,"How the investor is accredited. See ",(0,r.kt)("a",{parentName:"p",href:"https://www.sec.gov/education/capitalraising/building-blocks/accredited-investor"},"https://www.sec.gov/education/capitalraising/building-blocks/accredited-investor"))))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"metadata"),(0,r.kt)("span",{style:{opacity:"0.6"}}," object"),(0,r.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,r.kt)("p",null,"Extra data to store with the investor passport.")))))),(0,r.kt)("table",{style:{display:"table",width:"100%"}},(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",{style:{textAlign:"left"}},"Responses"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("div",{style:{display:"flex"}},(0,r.kt)("div",{style:{marginRight:"var(--ifm-table-cell-padding)"}},(0,r.kt)("code",null,"200")),(0,r.kt)("div",null,(0,r.kt)("p",null,"Returns the created Investor Passport as well as the tax_form_fields required to create the correct tax form for the new investor passport"))),(0,r.kt)("div",null,(0,r.kt)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"}},(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",{style:{textAlign:"left"}},"Schema ",(0,r.kt)("div",null)))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"tax_form_fields"),(0,r.kt)("span",{style:{opacity:"0.6"}}," object"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"_id"),(0,r.kt)("span",{style:{opacity:"0.6"}}," string"),(0,r.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,r.kt)("p",null,"The investor passport's primary key.")))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"id"),(0,r.kt)("span",{style:{opacity:"0.6"}}," string"),(0,r.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,r.kt)("p",null,"A virtual of _id.")))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"phase"),(0,r.kt)("span",{style:{opacity:"0.6"}}," string;"),(0,r.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Possible values:")," ","[",(0,r.kt)("inlineCode",{parentName:"p"},"new"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"onboarding"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"kyc"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"review"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"rejected"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"failed"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"self-accredited"),"]")),(0,r.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,r.kt)("p",null,"The phase the investor passport is currently in.")))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"name"),(0,r.kt)("span",{style:{opacity:"0.6"}}," string"),(0,r.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,r.kt)("p",null,"The name of the Entity or Individual.")))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"type"),(0,r.kt)("span",{style:{opacity:"0.6"}}," string"),(0,r.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Possible values:")," ","[",(0,r.kt)("inlineCode",{parentName:"p"},"Entity"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Individual"),"]")),(0,r.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,r.kt)("p",null,"The type of investor passport.")))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"title"),(0,r.kt)("span",{style:{opacity:"0.6"}}," string"),(0,r.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,r.kt)("p",null,"The title of the individual who represents the Entity.")))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"representative"),(0,r.kt)("span",{style:{opacity:"0.6"}}," string"),(0,r.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,r.kt)("p",null,"The name of the individual who represents the Entity.")))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"country"),(0,r.kt)("span",{style:{opacity:"0.6"}}," string"),(0,r.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,r.kt)("p",null,"The country of formation or residence.")))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"accreditation_type"),(0,r.kt)("span",{style:{opacity:"0.6"}}," string"),(0,r.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Possible values:")," ","[",(0,r.kt)("inlineCode",{parentName:"p"},"NetWorthOver1m"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"SoloOver200k"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"JointOver300k"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Certification"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"DirectorOfFund"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"KnowledgeableEmployee"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"EachOwnerAccredited"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"AssetsOver5m"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"AUM5m"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"InvestmentAdvisor"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"FinancialEntity"),"]")),(0,r.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,r.kt)("p",null,"How the investor is accredited. See ",(0,r.kt)("a",{parentName:"p",href:"https://www.sec.gov/education/capitalraising/building-blocks/accredited-investor"},"https://www.sec.gov/education/capitalraising/building-blocks/accredited-investor"))))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"metadata"),(0,r.kt)("span",{style:{opacity:"0.6"}}," object"),(0,r.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,r.kt)("p",null,"Extra data to store with the investor passport."))))))))))))}d.isMDXComponent=!0}}]);