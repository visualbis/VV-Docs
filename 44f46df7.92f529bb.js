(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{111:function(e,t,o){"use strict";o.r(t),o.d(t,"frontMatter",(function(){return b})),o.d(t,"metadata",(function(){return c})),o.d(t,"rightToc",(function(){return s})),o.d(t,"default",(function(){return p}));var i=o(3),n=o(7),a=(o(0),o(211)),r=o(212),l=(o(213),o(214)),b=(o(53),{id:"looker",sidebar_label:"LOOKER",title:"Looker Platform Configuration"}),c={unversionedId:"admin-guide/getting-started/prerequisite/bi-platform-config/looker",id:"admin-guide/getting-started/prerequisite/bi-platform-config/looker",isDocsHomePage:!1,title:"Looker Platform Configuration",description:'import "react-medium-image-zoom/dist/styles.css";',source:"@site/docs/admin-guide/getting-started/prerequisite/bi-platform-config/looker.md",slug:"/admin-guide/getting-started/prerequisite/bi-platform-config/looker",permalink:"/docs/admin-guide/getting-started/prerequisite/bi-platform-config/looker",version:"current",sidebar_label:"LOOKER",sidebar:"adminGuide",previous:{title:"SAC Platform Configuration",permalink:"/docs/admin-guide/getting-started/prerequisite/bi-platform-config/sac"},next:{title:"SharePoint Platform Configuration",permalink:"/docs/admin-guide/getting-started/prerequisite/bi-platform-config/sharepoint"}},s=[],d={rightToc:s};function p(e){var t=e.components,o=Object(n.a)(e,["components"]);return Object(a.b)("wrapper",Object(i.a)({},d,o,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Admin needs to configure the following keys in the Looker platform to authenticate the application and fetch the Dashboards and Users from it."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"API3 Credentials")),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"Login into Looker Instance as Admin")),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"Navigate to ",Object(a.b)("strong",{parentName:"p"},"Admin -> Users")),Object(a.b)("div",{class:"center"},Object(a.b)(l.a,{mdxType:"Zoom"},Object(a.b)("img",{alt:"Looker Admin User",src:Object(r.a)("/doc-images/looker/looker-admin-user.png"),height:"400"})))),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"Click on Edit Keys and generate new ",Object(a.b)("em",{parentName:"p"},"Client_Id")," and ",Object(a.b)("em",{parentName:"p"},"Client_Secret"),"."),Object(a.b)("div",{class:"center"},Object(a.b)(l.a,{mdxType:"Zoom"},Object(a.b)("img",{alt:"Client Id and Client Secret",src:Object(r.a)("/doc-images/looker/client-id-secret.png")}))))),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"API Host URL")),Object(a.b)("p",null,"API Host URL is used to reach the Looker API server endpoint. It must have a hostname and port. The default port is 19999. Kindly follow the below steps to setup the URL."),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"Click Admin to open the Admin menu")),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"Click API in the Admin panel")),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"Set the new API in the API Host URL input field"),Object(a.b)("div",{class:"center"},Object(a.b)(l.a,{mdxType:"Zoom"},Object(a.b)("img",{alt:"Looker Admin Page",src:Object(r.a)("/doc-images/looker/admin-page.png")}))))),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Looker\u2019s Secret Key")),Object(a.b)("p",null,"The Looker\u2019s Secret Key is used to validate the SSO embedding request and embed the dashboards into the application. Follow the below steps to setup the looker\u2019s secret key in the looker instance."),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Go to the Embed page in the Admin section of Looker"),Object(a.b)("li",{parentName:"ol"},'Select "Enabled" from the Embed Authentication drop-down and the press Update'),Object(a.b)("li",{parentName:"ol"},"Press the Set Secret button to generate the embed secret. Copy this secret to a secure location, because you will not be able to retrieve it from Looker again without resetting it. Resetting the key will break any embeds using the old key.")),Object(a.b)("div",{class:"center"},Object(a.b)(l.a,{mdxType:"Zoom"},Object(a.b)("img",{alt:"Embed Page",src:Object(r.a)("/doc-images/looker/embed-page.png")}))))}p.isMDXComponent=!0}}]);