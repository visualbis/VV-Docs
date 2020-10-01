(window.webpackJsonp=window.webpackJsonp||[]).push([[141],{196:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return b})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return m}));var a=n(2),i=n(6),o=(n(0),n(215)),r=n(216),c=(n(217),n(218)),s=(n(48),{id:"microstrategy",sidebar_label:"MICROSTRATEGY",title:"Microstrategy Platform Configuration"}),b={unversionedId:"installation-guide/install-bihub-windows/agents/bi-platform-config/microstrategy",id:"installation-guide/install-bihub-windows/agents/bi-platform-config/microstrategy",isDocsHomePage:!1,title:"Microstrategy Platform Configuration",description:"To access MicroStrategy reports through BI Hub, SSO should be configured and enabled in the MicroStrategy Platform as the only authentication mode.",source:"@site/docs/installation-guide/install-bihub-windows/agents/bi-platform-config/microstrategy.md",permalink:"/VV-Docs/docs/installation-guide/install-bihub-windows/agents/bi-platform-config/microstrategy",sidebar_label:"MICROSTRATEGY",sidebar:"installationGuide",previous:{title:"Spotfire Platform Configuration",permalink:"/VV-Docs/docs/installation-guide/install-bihub-windows/agents/bi-platform-config/spotfire"},next:{title:"SAC Platform Configuration",permalink:"/VV-Docs/docs/installation-guide/install-bihub-windows/agents/bi-platform-config/sac"}},l=[],d={rightToc:l};function m(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"To access MicroStrategy reports through BI Hub, SSO should be configured and enabled in the MicroStrategy Platform as the only authentication mode."),Object(o.b)("p",null,"The following steps are to be followed to achieve the same:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Mapping Windows AD users:"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"In MicroStrategy Developer, select a user group under ",Object(o.b)("strong",{parentName:"li"},"Administration > User Manager"),", right click on each user and select Edit")),Object(o.b)("div",{style:{textAlign:"center"}},Object(o.b)(c.a,{mdxType:"Zoom"},Object(o.b)("img",{alt:"Microstrategy Developer",src:Object(r.a)("/doc-images/microstrategy/microstrategy-developer.png")}))),"- Go to **Authentication > Metadata** and select the corresponding Windows AD user in the Link Windows user section",Object(o.b)("div",{style:{textAlign:"center"}},Object(o.b)(c.a,{mdxType:"Zoom"},Object(o.b)("img",{alt:"User Editor",src:Object(r.a)("/doc-images/microstrategy/user-editor.png")})))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Create a Group Policy object for Internet Explorer:"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"In the Group Policy Management, go to ",Object(o.b)("strong",{parentName:"li"},"User Configuration > Administrative Templates > Windows Components > Internet Explorer > Internet Control Panel > Security Page > Site")," to Zone Assignment List and Enable Site to Zone Assignment list as in the screenshot")),Object(o.b)("div",{style:{textAlign:"center"}},Object(o.b)(c.a,{mdxType:"Zoom"},Object(o.b)("img",{alt:"",src:Object(r.a)("/doc-images/microstrategy/site-zone-assign.png")}))),Object(o.b)("p",{parentName:"li"},Object(o.b)("em",{parentName:"p"},"Figure: Site to Zone Assignment List")),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Click on the show button and add MicroStrategy Server URL in Value Name and 2 in value to mark it as a trusted Server")),Object(o.b)("div",{style:{textAlign:"center"}},Object(o.b)(c.a,{mdxType:"Zoom"},Object(o.b)("img",{alt:"Show Content",src:Object(r.a)("/doc-images/microstrategy/show-content.png")})))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"In Windows ",Object(o.b)("strong",{parentName:"p"},"Control Panel > Internet Options >Advanced"),", check Enable Integrated Windows Authentication"),Object(o.b)("div",{style:{textAlign:"center"}},Object(o.b)(c.a,{mdxType:"Zoom"},Object(o.b)("img",{alt:"IE properties",src:Object(r.a)("/doc-images/microstrategy/internet-properties.png")})))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"In ",Object(o.b)("strong",{parentName:"p"},"MicroStrategy Web Administrator > Default Properties"),", Enable the Windows Authentication and make it default and uncheck all the other login mode and change the '\u2018Trusted Authentication Providers' to Custom SSO"))),Object(o.b)("div",{style:{textAlign:"center"}},Object(o.b)(c.a,{mdxType:"Zoom"},Object(o.b)("img",{alt:"Admin page",src:Object(r.a)("/doc-images/microstrategy/admin-page.png")}))),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Restart the server for the changes to take place.")),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"It is recommended to do the above configuration in IIS Server."))))}m.isMDXComponent=!0}}]);