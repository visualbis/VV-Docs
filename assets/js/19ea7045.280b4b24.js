(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{80:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return s})),a.d(t,"toc",(function(){return b})),a.d(t,"default",(function(){return m}));var n=a(3),i=a(7),r=(a(0),a(209)),c=a(210),p=(a(211),a(212)),o=(a(56),{id:"sharepoint",sidebar_label:"SHAREPOINT",title:"SharePoint Platform Configuration"}),s={unversionedId:"admin-guide/getting-started/prerequisite/bi-platform-config/sharepoint",id:"admin-guide/getting-started/prerequisite/bi-platform-config/sharepoint",isDocsHomePage:!1,title:"SharePoint Platform Configuration",description:"Before we connect the SharePoint site to BI Hub, we need to set up the Sharepoint App and Azure App. Create the application Secret, and Configure the permissions.",source:"@site/docs/admin-guide/getting-started/prerequisite/bi-platform-config/sharepoint.md",sourceDirName:"admin-guide/getting-started/prerequisite/bi-platform-config",slug:"/admin-guide/getting-started/prerequisite/bi-platform-config/sharepoint",permalink:"/docs/admin-guide/getting-started/prerequisite/bi-platform-config/sharepoint",version:"current",sidebar_label:"SHAREPOINT",frontMatter:{id:"sharepoint",sidebar_label:"SHAREPOINT",title:"SharePoint Platform Configuration"},sidebar:"adminGuide",previous:{title:"Looker Platform Configuration",permalink:"/docs/admin-guide/getting-started/prerequisite/bi-platform-config/looker"},next:{title:"OneDrive",permalink:"/docs/admin-guide/getting-started/prerequisite/bi-platform-config/onedrive"}},b=[{value:"SharePoint App Registration",id:"sharepoint-app-registration",children:[]},{value:"Set up the application in Azure",id:"set-up-the-application-in-azure",children:[]},{value:"Create the Application Secret",id:"create-the-application-secret",children:[]},{value:"Configure permission for the App",id:"configure-permission-for-the-app",children:[]}],l={toc:b};function m(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Before we connect the ",Object(r.b)("em",{parentName:"p"},"SharePoint")," site to BI Hub, we need to set up the ",Object(r.b)("strong",{parentName:"p"},"Sharepoint App")," and ",Object(r.b)("strong",{parentName:"p"},"Azure App"),". Create the application ",Object(r.b)("strong",{parentName:"p"},"Secret"),", and ",Object(r.b)("strong",{parentName:"p"},"Configure the permissions"),"."),Object(r.b)("h2",{id:"sharepoint-app-registration"},"SharePoint App Registration"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Go to the URL: ",Object(r.b)("inlineCode",{parentName:"p"},"https://yourtenantname.sharepoint.com/sites/SiteName/_layouts/15/appregnew.aspx"),". Replace ",Object(r.b)("inlineCode",{parentName:"p"},"yourtenantname")," with your name.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Click ",Object(r.b)("strong",{parentName:"p"},"Generate")," to get ",Object(r.b)("strong",{parentName:"p"},"Client Id"),", and ",Object(r.b)("strong",{parentName:"p"},"Client Secret"),".")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Enter ",Object(r.b)("strong",{parentName:"p"},"Title, App Domain"),", and ",Object(r.b)("strong",{parentName:"p"},"Redirect URI"),"."),Object(r.b)("div",{class:"center"},Object(r.b)(p.a,{mdxType:"Zoom"},Object(r.b)("img",{alt:"App Registration",src:Object(c.a)("/doc-images/sharepoint/app-register.png")})),Object(r.b)("p",null,"SharePoint App registration")),Object(r.b)("div",{parentName:"li",className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"Copy and save the ",Object(r.b)("strong",{parentName:"p"},"Client Id")," and ",Object(r.b)("strong",{parentName:"p"},"Client Secret")," to be used in further configuration screens.")))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Click on the ",Object(r.b)("strong",{parentName:"p"},"appinv.aspx")," page (with which you can grant permissions to an app). The URL of that page will be similar to ",Object(r.b)("inlineCode",{parentName:"p"},"https://yourtenantname.sharepoint.com/sites/SiteName/_layouts/15/appinv.aspx")),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Paste the Client Id in the ",Object(r.b)("strong",{parentName:"li"},"App Id")," text box and click on ",Object(r.b)("strong",{parentName:"li"},"Lookup"),". This will load the details of the app that we registered previously.")),Object(r.b)("div",{class:"center"},Object(r.b)(p.a,{mdxType:"Zoom"},Object(r.b)("img",{alt:"AppInv App Details",src:Object(c.a)("/doc-images/sharepoint/appinv-details.png")})),Object(r.b)("p",null,"AppInv App Details")),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"In the ",Object(r.b)("strong",{parentName:"p"},"Permission Request XML")," textbox paste the following XML and click ",Object(r.b)("strong",{parentName:"p"},"Create")),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",{parentName:"pre",className:"language-xml"},'<AppPermissionRequests AllowAppOnlyPolicy="true">\n <AppPermissionRequest Scope="http://sharepoint/content/sitecollection/web" Right="FullControl" />\n</AppPermissionRequests>\n')),Object(r.b)("div",{parentName:"li",className:"admonition admonition-tip alert alert--success"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"}," The XML provides full control to the app over the current web (this is the main permission required to configure the SharePoint agent)"))),Object(r.b)("div",{parentName:"li",className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"}," If you want to provide different permissions, please take a look at ",Object(r.b)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/sharepoint/dev/sp-add-ins/add-in-permissions-in-sharepoint"},"this article")," by Microsoft.")))))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"In the next screen click on ",Object(r.b)("strong",{parentName:"p"},"Trust It")," to allow the app to have the required permissions."))),Object(r.b)("div",{class:"center"},Object(r.b)(p.a,{mdxType:"Zoom"},Object(r.b)("img",{alt:"Trust SharePoint App",src:Object(c.a)("/doc-images/sharepoint/trust-app.jpg")})),Object(r.b)("p",null,"Allow required permissions to the App")),Object(r.b)("h2",{id:"set-up-the-application-in-azure"},"Set up the application in Azure"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Go to ",Object(r.b)("a",{parentName:"p",href:"https://portal.azure.com"},"https://portal.azure.com"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Click on ",Object(r.b)("strong",{parentName:"p"},"Azure Active Directory > App registrations > New registration"),"."),Object(r.b)("div",{class:"center"},Object(r.b)(p.a,{mdxType:"Zoom"},Object(r.b)("img",{alt:"New App Registration",src:Object(c.a)("/doc-images/powerbi/azure-new-registration.png")})),Object(r.b)("p",null,"Azure new application registration"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Set ",Object(r.b)("strong",{parentName:"p"},"Name, Supported account types"),", and ",Object(r.b)("strong",{parentName:"p"},"Redirect URI")," of the application:"),Object(r.b)("div",{class:"center"},Object(r.b)(p.a,{mdxType:"Zoom"},Object(r.b)("img",{alt:"Application Registration",src:Object(c.a)("/doc-images/powerbi/register_app.png")})),Object(r.b)("p",null,"Application Registration")))),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"The type should be Native and the Redirect URI must be formatted as: ",Object(r.b)("inlineCode",{parentName:"p"},"https://servername:port/Redirect"),"."))),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Click ",Object(r.b)("strong",{parentName:"li"},"Register"),".")),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"Note the ",Object(r.b)("strong",{parentName:"p"},"Application (client) ID")," upon successfully registering the application.")),Object(r.b)("div",{class:"center"},Object(r.b)(p.a,{mdxType:"Zoom"},Object(r.b)("img",{alt:"Application registered",src:Object(c.a)("/doc-images/sharepoint/app-registered.png")})),Object(r.b)("p",null,"Application registered")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Provide the ",Object(r.b)("strong",{parentName:"li"},"Application (client) ID")," under the key ",Object(r.b)("strong",{parentName:"li"},"userclientid")," in the configuration of SharePoint in BI Hub."),Object(r.b)("li",{parentName:"ul"},"Click on the newly created Application and go to ",Object(r.b)("strong",{parentName:"li"},"Authentication"),".")),Object(r.b)("div",{class:"center"},Object(r.b)(p.a,{mdxType:"Zoom"},Object(r.b)("img",{alt:"Authentication",src:Object(c.a)("/doc-images/sharepoint/authentication.png")})),Object(r.b)("p",null,"Authentication")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Select the tokens to be issued at authorization endpoints and also choose the supported account types.")),Object(r.b)("div",{class:"center"},Object(r.b)(p.a,{mdxType:"Zoom"},Object(r.b)("img",{alt:"Authentication access tokens",src:Object(c.a)("/doc-images/sharepoint/azapp5.png")})),Object(r.b)("p",null,"Authentication access tokens")),Object(r.b)("h2",{id:"create-the-application-secret"},"Create the Application Secret"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Go to ",Object(r.b)("strong",{parentName:"p"},"Azure portal > azure active directory > App registrations")," and click on your application."),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Navigate to ",Object(r.b)("strong",{parentName:"li"},"Certificates & secrets")," and click on ",Object(r.b)("strong",{parentName:"li"},"New Client secret")," to add a new key.")),Object(r.b)("div",{class:"center"},Object(r.b)(p.a,{mdxType:"Zoom"},Object(r.b)("img",{alt:"User client secret setup",src:Object(c.a)("/doc-images/sharepoint/azapp6.png")})),Object(r.b)("p",null,"User client secret setup"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Specify a ",Object(r.b)("strong",{parentName:"p"},"Description")," and ",Object(r.b)("strong",{parentName:"p"},"Expiry")," duration for client secret and click ",Object(r.b)("strong",{parentName:"p"},"Add"),"."),Object(r.b)("div",{class:"center"},Object(r.b)(p.a,{mdxType:"Zoom"},Object(r.b)("img",{alt:"Client Secret",src:Object(c.a)("/doc-images/sharepoint/azapp7.png")})),Object(r.b)("p",null,"Client secret submission")),Object(r.b)("p",{parentName:"li"},Object(r.b)("em",{parentName:"p"},"Client secret submission")))),Object(r.b)("p",null,'The UserClient secret is added and the value is displayed. Provide this under the key "USERCLIENTSECRET" during the configuration of SharePoint agent in BI Hub'),Object(r.b)("div",{class:"center"},Object(r.b)(p.a,{mdxType:"Zoom"},Object(r.b)("img",{alt:"Copy the client Secret",src:Object(c.a)("/doc-images/sharepoint/azapp8.png")})),Object(r.b)("p",null,"Copy the Client secret ID")),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"Copy the client secret value. You will not be able to retrieve it after you perform another operation or leave this blade. If failed to note down the value, please repeat the step ",Object(r.b)("a",{parentName:"p",href:"#setup-the-application-in-azure"},"Set up the application in Azure")," to create a new key."))),Object(r.b)("h2",{id:"configure-permission-for-the-app"},"Configure permission for the App"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Go to ",Object(r.b)("strong",{parentName:"li"},Object(r.b)("a",{parentName:"strong",href:"https://portal.azure.com"},"Azure portal")," > Azure Active Directory > App registrations"),"."),Object(r.b)("li",{parentName:"ul"},"Click on your application and select ",Object(r.b)("strong",{parentName:"li"},"API permissions"),"."),Object(r.b)("li",{parentName:"ul"},"Click ",Object(r.b)("strong",{parentName:"li"},"Add a permission")," and expand ",Object(r.b)("strong",{parentName:"li"},"Microsoft Graph"),"."),Object(r.b)("li",{parentName:"ul"},"Provide the permissions for ",Object(r.b)("strong",{parentName:"li"},"Sites.Read.All")," and ",Object(r.b)("strong",{parentName:"li"},"User.Read"),".")),Object(r.b)("div",{class:"center"},Object(r.b)(p.a,{mdxType:"Zoom"},Object(r.b)("img",{alt:"Application Permissions configured",src:Object(c.a)("/doc-images/sharepoint/azapp9.png")})),Object(r.b)("p",null,"Application Permissions configured")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Click ",Object(r.b)("strong",{parentName:"li"},"Save")," and then click ",Object(r.b)("strong",{parentName:"li"},"Grant Permissions")," to delegate the permissions to the service account.")),Object(r.b)("div",{class:"center"},Object(r.b)(p.a,{mdxType:"Zoom"},Object(r.b)("img",{alt:"Permissions to be given",src:Object(c.a)("/doc-images/powerbi/permissions-consolidated.png")})),Object(r.b)("p",null,"Permissions granted")),Object(r.b)("p",null,"\u2705 SharePoint agent successfully configured."))}m.isMDXComponent=!0}}]);