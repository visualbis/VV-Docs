(window.webpackJsonp=window.webpackJsonp||[]).push([[132],{201:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return p}));var a=n(3),i=n(7),r=(n(0),n(218)),b=n(219),c=(n(220),n(221)),o=(n(56),{id:"bobj-rest-bi",title:"BOBJ REST BI Platform Configuration",sidebar_label:"BOBJ Rest BI"}),l={unversionedId:"admin-guide/getting-started/prerequisite/bi-platform-config/bobj-rest-bi",id:"admin-guide/getting-started/prerequisite/bi-platform-config/bobj-rest-bi",isDocsHomePage:!1,title:"BOBJ REST BI Platform Configuration",description:"1. Launch Central Management Console and click on Authentication.",source:"@site/docs/admin-guide/getting-started/prerequisite/bi-platform-config/bobj-rest-bi.mdx",sourceDirName:"admin-guide/getting-started/prerequisite/bi-platform-config",slug:"/admin-guide/getting-started/prerequisite/bi-platform-config/bobj-rest-bi",permalink:"/docs/admin-guide/getting-started/prerequisite/bi-platform-config/bobj-rest-bi",version:"current",sidebar_label:"BOBJ Rest BI",frontMatter:{id:"bobj-rest-bi",title:"BOBJ REST BI Platform Configuration",sidebar_label:"BOBJ Rest BI"},sidebar:"adminGuide",previous:{title:"BOBJ Platform Configuration",permalink:"/docs/admin-guide/getting-started/prerequisite/bi-platform-config/bobj"},next:{title:"Tableau Platform Configuration",permalink:"/docs/admin-guide/getting-started/prerequisite/bi-platform-config/tableau"}},s=[],m={toc:s};function p(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},m,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Launch ",Object(r.b)("strong",{parentName:"li"},"Central Management Console")," and click on ",Object(r.b)("strong",{parentName:"li"},"Authentication"),".")),Object(r.b)("div",{class:"center"},Object(r.b)(c.a,{mdxType:"Zoom"},Object(r.b)("img",{alt:"Central Management Console screen",src:Object(b.a)("/doc-images/cms.png")})),Object(r.b)("p",null,"Select Authentication in the Central Management Console screen")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"In the next screen, select ",Object(r.b)("strong",{parentName:"li"},"Authentication > Enterprise"),".")),Object(r.b)("div",{class:"center"},Object(r.b)(c.a,{mdxType:"Zoom"},Object(r.b)("img",{alt:"img",src:Object(b.a)("/doc-images/admin-guide/central-management-console.png")}))),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"In the ",Object(r.b)("strong",{parentName:"li"},"Trusted Authentication")," section, check the box against ",Object(r.b)("strong",{parentName:"li"},"Trusted Authentication is enabled"),".")),Object(r.b)("div",{class:"center"},Object(r.b)(c.a,{mdxType:"Zoom"},Object(r.b)("img",{alt:"img",src:Object(b.a)("/doc-images/bobj-trusted1.png")}))),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Click ",Object(r.b)("strong",{parentName:"li"},"New Shared Secret")," to generate the shared secret key.")),Object(r.b)("div",{class:"center"},Object(r.b)(c.a,{mdxType:"Zoom"},Object(r.b)("img",{alt:"img",src:Object(b.a)("/doc-images/bobj-trusted2.png")}))),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Click ",Object(r.b)("strong",{parentName:"li"},"Download Shared Secret"),", and then click ",Object(r.b)("strong",{parentName:"li"},"Update"),".")),Object(r.b)("div",{class:"center"},Object(r.b)(c.a,{mdxType:"Zoom"},Object(r.b)("img",{alt:"img",src:Object(b.a)("/doc-images/bobj-trusted3.png")}))),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Copy the downloaded file ",Object(r.b)("inlineCode",{parentName:"li"},"TrustedPrincipal.conf")," to ",Object(r.b)("inlineCode",{parentName:"li"},"<INSTALLDIR>\\SAP BusinessObjects Enterprise XI 4.0\\java\\pjs\\container\\bin")," in Windows."),Object(r.b)("li",{parentName:"ul"},"Also copy the same file ",Object(r.b)("em",{parentName:"li"},"TrustedPrincipal.conf")," to ",Object(r.b)("inlineCode",{parentName:"li"},"INSTALLDIR>\\SAP BusinessObjects Enterprise XI 4.0\\win64_x64\\")," and ",Object(r.b)("inlineCode",{parentName:"li"},"<INSTALLDIR>\\SAP BusinessObjects Enterprise XI 4.0\\win32_x86\\")," locations.")),Object(r.b)("ol",{start:2},Object(r.b)("li",{parentName:"ol"},"Next in ",Object(r.b)("strong",{parentName:"li"},"Central Management Console")," select ",Object(r.b)("strong",{parentName:"li"},"Servers"),", and expand  ",Object(r.b)("strong",{parentName:"li"},"Service Categories"),". ")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Click ",Object(r.b)("strong",{parentName:"li"},"Core Services")," in the right pane.")),Object(r.b)("div",{class:"center"},Object(r.b)(c.a,{mdxType:"Zoom"},Object(r.b)("img",{alt:"Service Categories > Core Services",src:Object(b.a)("/doc-images/core-services.png")})),Object(r.b)("p",null,"Select Core Services")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"In the ",Object(r.b)("em",{parentName:"li"},"Server Name"),", right-click ",Object(r.b)("strong",{parentName:"li"},"BISBX.WebApplicationContainerServer")," and select ",Object(r.b)("em",{parentName:"li"},"properties"),".")),Object(r.b)("div",{class:"center"},Object(r.b)(c.a,{mdxType:"Zoom"},Object(r.b)("img",{alt:"img",src:Object(b.a)("/doc-images/wac-services.png")}))),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"In the ",Object(r.b)("strong",{parentName:"li"},"Trusted Authentication Configuration"),", set ",Object(r.b)("strong",{parentName:"li"},"Retrieving Method")," as 'HTTP_HEADER' and ",Object(r.b)("strong",{parentName:"li"},"User Name Parameter")," as 'X-SAP-VBI-TRUSTED-USER' or any other relevant name:")),Object(r.b)("div",{class:"center"},Object(r.b)(c.a,{mdxType:"Zoom"},Object(r.b)("img",{alt:"Trusted Authentication Configuration",src:Object(b.a)("/doc-images/trusted-auth-config.png")})),Object(r.b)("p",null,"Trusted Authentication Configuration parameters")),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"Kindly note these parameters details to be used for the BOBJ REST Agent creation step.")),Object(r.b)("ol",{start:3},Object(r.b)("li",{parentName:"ol"},"Go to the location: ",Object(r.b)("inlineCode",{parentName:"li"},"<BOBJ-Installation-Directory>\\tomcat\\webapps\\BOE\\WEB-INF\\config\\custom"),".")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Edit the ",Object(r.b)("inlineCode",{parentName:"li"},"global.properties")," file as shown below:")),Object(r.b)("div",{class:"center"},Object(r.b)(c.a,{mdxType:"Zoom"},Object(r.b)("img",{alt:"Edit the global properties file",src:Object(b.a)("/doc-images/global-properties-edit.png")})),Object(r.b)("p",null,"Global properties file content")),Object(r.b)("p",null,"Click below to copy the content of the file:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-jsx",metastring:'title="BOBJ-Installation-Directory>\\tomcat\\webapps\\BOE\\WEB-INF\\config\\custom\\global.properties"',title:'"BOBJ-Installation-Directory>\\tomcat\\webapps\\BOE\\WEB-INF\\config\\custom\\global.properties"'},"sso.enabled=true \ntrusted.auth.user.retrieval=HTTP_HEADER \ntrusted.auth.user.param=X-SAP-VBI-TRUSTED-USER\n")),Object(r.b)("p",null,"\u2705 BOBJ REST BI configured."))}p.isMDXComponent=!0}}]);