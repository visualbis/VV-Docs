(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{84:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return b})),a.d(t,"metadata",(function(){return l})),a.d(t,"rightToc",(function(){return d})),a.d(t,"default",(function(){return m}));var n=a(3),i=a(7),r=(a(0),a(211)),c=a(212),s=a(213),o=a(214),b=(a(53),{id:"ssl-server",title:"Configure SSL for BI Hub Server",sidebar_label:"Configure SSL for BI Hub Server"}),l={unversionedId:"installation-guide/advanced/ssl/ssl-server",id:"installation-guide/advanced/ssl/ssl-server",isDocsHomePage:!1,title:"Configure SSL for BI Hub Server",description:'import "react-medium-image-zoom/dist/styles.css";',source:"@site/docs/installation-guide/advanced/ssl/ssl-server.md",slug:"/installation-guide/advanced/ssl/ssl-server",permalink:"/docs/installation-guide/advanced/ssl/ssl-server",version:"current",sidebar_label:"Configure SSL for BI Hub Server",sidebar:"installationGuide",previous:{title:"What is SSL",permalink:"/docs/installation-guide/advanced/ssl/ssl"},next:{title:"Configure SSL for BI Hub Web",permalink:"/docs/installation-guide/advanced/ssl/ssl-web"}},d=[],p={rightToc:d};function m(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("ol",{className:"contains-task-list"},Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Launch BI Hub Server Config from ",Object(r.b)("inlineCode",{parentName:"p"},"<Installation-Directory>/Visual BI Solutions/VBI View/VBIViewServer")," and expand ",Object(r.b)("strong",{parentName:"p"},"SSL"),"."),Object(r.b)("div",{class:"center"},Object(r.b)(o.a,{mdxType:"Zoom"},Object(r.b)("img",{alt:"Expand SSL in the BI Hub config utility",src:Object(c.a)("doc-images/installation-guide/server-config.png")})),Object(r.b)("p",null,"Select SSL section"))),Object(r.b)("li",Object(n.a)({parentName:"ol"},{className:"task-list-item"}),Object(r.b)("p",{parentName:"li"},Object(r.b)("input",Object(n.a)({parentName:"p"},{type:"checkbox",checked:!0,disabled:!0}))," ",Object(r.b)("strong",{parentName:"p"},"Enable")," the ",Object(r.b)("strong",{parentName:"p"},"SSL")," config, then choose the ",Object(r.b)("strong",{parentName:"p"},"Private Key")," with ",Object(r.b)("inlineCode",{parentName:"p"},"<filename>.key")," extension and ",Object(r.b)("strong",{parentName:"p"},"Public Certificate")," with ",Object(r.b)("inlineCode",{parentName:"p"},"<filename>.crt")," extension.\nClick ",Object(r.b)("strong",{parentName:"p"},"Continue"),"."),Object(r.b)("div",{class:"center"},Object(r.b)(o.a,{mdxType:"Zoom"},Object(r.b)("img",{alt:"Upload Private key and Public Certificate",src:Object(c.a)("doc-images/installation-guide/enable-ssl.png")})),Object(r.b)("p",null,"Upload Private key and Public Certificate"))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Restart( ",Object(r.b)(o.a,{mdxType:"Zoom"},Object(r.b)("img",{alt:"Refresh",src:Object(c.a)("doc-images/installation-guide/refresh.svg"),width:"20",height:"20"}))," ) the backend server from the ",Object(r.b)(s.a,{to:Object(c.a)("docs/installation-guide/install-bihub-windows/server/config/instances-tab"),mdxType:"Link"},"BI Hub Server > Instances")," tab.")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Go to SSL config folder, usually at the path ",Object(r.b)("inlineCode",{parentName:"p"},"C:\\Program Files\\Visual BI Solutions\\VBI View\\VBIViewServer\\server\\SSL"),"."))),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Ensure that the files ",Object(r.b)("inlineCode",{parentName:"li"},"<filename>.key")," and ",Object(r.b)("inlineCode",{parentName:"li"},"<filenaem>.crt")," are copied in this location.")),Object(r.b)("ol",{start:5},Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Open the browser and type the backened url and port number - ",Object(r.b)("inlineCode",{parentName:"p"},"<https://Backend server url>:<Port number>"),"."),Object(r.b)("div",{class:"center"},Object(r.b)(o.a,{mdxType:"Zoom"},Object(r.b)("img",{alt:"BI Hub Server with secured SSL connection",src:Object(c.a)("doc-images/installation-guide/server-ssl-confirm.png")})),Object(r.b)("p",null,"BI Hub Server with secured SSL connection")),Object(r.b)("p",{parentName:"li"},"\u2705 Your BI Hub Server must be loaded with a secured SSL connection."))),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},'If the Server loads up with an "in-secure" connection, please check if the certificate files are valid.'))))}m.isMDXComponent=!0}}]);