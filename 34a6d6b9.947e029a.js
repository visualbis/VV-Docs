(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{100:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return b})),n.d(t,"rightToc",(function(){return d})),n.d(t,"default",(function(){return p}));var a=n(3),i=n(7),o=(n(0),n(211)),r=n(212),l=n(213),s=n(214),c=(n(53),{id:"ssl-agents",title:"Configure SSL for BI Hub Agents",sidebar_label:"Configure SSL for BI Hub Agents"}),b={unversionedId:"installation-guide/advanced/ssl/ssl-agents",id:"installation-guide/advanced/ssl/ssl-agents",isDocsHomePage:!1,title:"Configure SSL for BI Hub Agents",description:'import "react-medium-image-zoom/dist/styles.css";',source:"@site/docs/installation-guide/advanced/ssl/ssl-agents.md",slug:"/installation-guide/advanced/ssl/ssl-agents",permalink:"/docs/installation-guide/advanced/ssl/ssl-agents",version:"current",sidebar_label:"Configure SSL for BI Hub Agents",sidebar:"installationGuide",previous:{title:"Configure SSL for BI Hub Web",permalink:"/docs/installation-guide/advanced/ssl/ssl-web"},next:{title:"Advanced Agent Configuration",permalink:"/docs/installation-guide/advanced/advanced"}},d=[{value:"Before you begin",id:"before-you-begin",children:[]},{value:"Configuration",id:"configuration",children:[]}],u={rightToc:d};function p(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"BI Hub Agents will communicate with BI Hub Server and Web via the REST API connection. "),Object(o.b)("h2",{id:"before-you-begin"},"Before you begin"),Object(o.b)("p",null,"You must have the proper SSL certificate from the authorized vendor in ",Object(o.b)("inlineCode",{parentName:"p"},".crt")," format and ",Object(o.b)("inlineCode",{parentName:"p"},".key")," file. "),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"You can also have a Self-Signed SSL certificate, but you need to make sure that the certificate belongs to a trusted certificate store by following the configuration steps provided by the particular browser (The steps are browser-specific and out of scope for this document). ")),Object(o.b)("p",null,"BI Hub recommends having the proper SSL certificate from the authorized vendor."),Object(o.b)("h2",{id:"configuration"},"Configuration"),Object(o.b)("p",null,"Follow the below common steps to configure the ",Object(o.b)("em",{parentName:"p"},"REST")," connections from all the agents (except BOBJ agent) to https:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Open the ",Object(o.b)("strong",{parentName:"li"},"manager.ini")," file in edit mode with administrative privileges. The file is located in the ",Object(o.b)(l.a,{to:Object(r.a)("docs/installation-guide/install-bihub-windows/agents/install"),mdxType:"Link"},"Agents installation directory"),"."),Object(o.b)("li",{parentName:"ol"},"Change the ",Object(o.b)("strong",{parentName:"li"},"SSL")," property from ",Object(o.b)("strong",{parentName:"li"},"False")," to ",Object(o.b)("strong",{parentName:"li"},"True")," and save the file:",Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json",metastring:"{2}","{2}":!0}),"[SSL]\nenable ssl = True\n"))),Object(o.b)("li",{parentName:"ol"},"Copy and paste the SSL files to the SSL folder - ",Object(o.b)("inlineCode",{parentName:"li"},"<Agent Installation Folder>/SSL"),"."),Object(o.b)("li",{parentName:"ol"},"Rename the file ",Object(o.b)("inlineCode",{parentName:"li"},"<your name>.crt")," to ",Object(o.b)("inlineCode",{parentName:"li"},"public.crt")," and ",Object(o.b)("inlineCode",{parentName:"li"},"<your name>.key")," to ",Object(o.b)("inlineCode",{parentName:"li"},"private.key"),"."),Object(o.b)("li",{parentName:"ol"},"Go to ",Object(o.b)("strong",{parentName:"li"},"Start > services.msc")," and restart the ",Object(o.b)("strong",{parentName:"li"},"Agent Service Manager"),".",Object(o.b)("blockquote",{parentName:"li"},Object(o.b)("p",{parentName:"blockquote"},"The service name will be ",Object(o.b)("inlineCode",{parentName:"p"},"BIHub<Agent name>SM"),".\nFor example for ",Object(o.b)("em",{parentName:"p"},"Tableau")," agent the service name will be ",Object(o.b)("strong",{parentName:"p"},"VBITableauSM"),"."))),Object(o.b)("li",{parentName:"ol"},"Open the browser and type the url - ",Object(o.b)("inlineCode",{parentName:"li"},"<https://Backend server url:<Agent Port Number>"),".  ",Object(o.b)("div",{class:"center"},Object(o.b)(s.a,{mdxType:"Zoom"},Object(o.b)("img",{alt:"BI Hub Agent with secured SSL connection",src:Object(r.a)("doc-images/installation-guide/agent-ssl-confirm.png")})),Object(o.b)("p",null,"BI Hub Agent with secured SSL connection")))),Object(o.b)("p",null,"\u2705 This loads up Agent Service Manager success screen with a secured SSL connection."),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("inlineCode",{parentName:"p"},"<Agent Port number>")," is the same that you entered while ",Object(o.b)(l.a,{to:Object(r.a)("docs/installation-guide/install-bihub-windows/agents/install"),mdxType:"Link"},"installing the Agents"),".")))}p.isMDXComponent=!0}}]);