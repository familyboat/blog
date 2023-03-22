"use strict";(self.webpackChunkrust_lang_zh_cn=self.webpackChunkrust_lang_zh_cn||[]).push([[298],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=p(n),h=i,m=u["".concat(l,".").concat(h)]||u[h]||c[h]||o;return n?a.createElement(m,r(r({ref:t},d),{},{components:n})):a.createElement(m,r({ref:t},d))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:i,r[1]=s;for(var p=2;p<o;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},1292:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var a=n(7462),i=(n(7294),n(3905));const o={},r=void 0,s={unversionedId:"appendix/appendix-05-editions",id:"appendix/appendix-05-editions",title:"appendix-05-editions",description:"Appendix E - Editions",source:"@site/docs/appendix/appendix-05-editions.md",sourceDirName:"appendix",slug:"/appendix/appendix-05-editions",permalink:"/blog/rust-lang-zh-cn/docs/appendix/appendix-05-editions",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u5b89\u88c5",permalink:"/blog/rust-lang-zh-cn/docs/ch01/ch01-01-installation"},next:{title:"appendix-06-translation",permalink:"/blog/rust-lang-zh-cn/docs/appendix/appendix-06-translation"}},l={},p=[{value:"Appendix E - Editions",id:"appendix-e---editions",level:2}],d={toc:p},u="wrapper";function c(e){let{components:t,...n}=e;return(0,i.kt)(u,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"appendix-e---editions"},"Appendix E - Editions"),(0,i.kt)("p",null,"In Chapter 1, you saw that ",(0,i.kt)("inlineCode",{parentName:"p"},"cargo new")," adds a bit of metadata to your\n",(0,i.kt)("em",{parentName:"p"},"Cargo.toml")," file about an edition. This appendix talks about what that means!"),(0,i.kt)("p",null,"The Rust language and compiler have a six-week release cycle, meaning users get\na constant stream of new features. Other programming languages release larger\nchanges less often; Rust releases smaller updates more frequently. After a\nwhile, all of these tiny changes add up. But from release to release, it can be\ndifficult to look back and say, \u201cWow, between Rust 1.10 and Rust 1.31, Rust has\nchanged a lot!\u201d"),(0,i.kt)("p",null,"Every two or three years, the Rust team produces a new Rust ",(0,i.kt)("em",{parentName:"p"},"edition"),". Each\nedition brings together the features that have landed into a clear package with\nfully updated documentation and tooling. New editions ship as part of the usual\nsix-week release process."),(0,i.kt)("p",null,"Editions serve different purposes for different people:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"For active Rust users, a new edition brings together incremental changes into\nan easy-to-understand package."),(0,i.kt)("li",{parentName:"ul"},"For non-users, a new edition signals that some major advancements have\nlanded, which might make Rust worth another look."),(0,i.kt)("li",{parentName:"ul"},"For those developing Rust, a new edition provides a rallying point for the\nproject as a whole.")),(0,i.kt)("p",null,"At the time of this writing, three Rust editions are available: Rust 2015, Rust\n2018, and Rust 2021. This book is written using Rust 2021 edition idioms."),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"edition")," key in ",(0,i.kt)("em",{parentName:"p"},"Cargo.toml")," indicates which edition the compiler should\nuse for your code. If the key doesn\u2019t exist, Rust uses ",(0,i.kt)("inlineCode",{parentName:"p"},"2015")," as the edition\nvalue for backward compatibility reasons."),(0,i.kt)("p",null,"Each project can opt in to an edition other than the default 2015 edition.\nEditions can contain incompatible changes, such as including a new keyword that\nconflicts with identifiers in code. However, unless you opt in to those\nchanges, your code will continue to compile even as you upgrade the Rust\ncompiler version you use."),(0,i.kt)("p",null,"All Rust compiler versions support any edition that existed prior to that\ncompiler\u2019s release, and they can link crates of any supported editions\ntogether. Edition changes only affect the way the compiler initially parses\ncode. Therefore, if you\u2019re using Rust 2015 and one of your dependencies uses\nRust 2018, your project will compile and be able to use that dependency. The\nopposite situation, where your project uses Rust 2018 and a dependency uses\nRust 2015, works as well."),(0,i.kt)("p",null,"To be clear: most features will be available on all editions. Developers using\nany Rust edition will continue to see improvements as new stable releases are\nmade. However, in some cases, mainly when new keywords are added, some new\nfeatures might only be available in later editions. You will need to switch\neditions if you want to take advantage of such features."),(0,i.kt)("p",null,"For more details, the ",(0,i.kt)("a",{parentName:"p",href:"https://doc.rust-lang.org/stable/edition-guide/"},(0,i.kt)("em",{parentName:"a"},"Edition\nGuide"))," is a complete book\nabout editions that enumerates the differences between editions and explains\nhow to automatically upgrade your code to a new edition via ",(0,i.kt)("inlineCode",{parentName:"p"},"cargo fix"),"."))}c.isMDXComponent=!0}}]);