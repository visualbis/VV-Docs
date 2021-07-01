(window.webpackJsonp=window.webpackJsonp||[]).push([[74],{143:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return b})),n.d(t,"metadata",(function(){return d})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return u}));var a=n(3),s=n(7),o=(n(0),n(217)),r=n(218),i=n(219),c=n(220),b=(n(56),{id:"homepage",title:"Admin Guide Dashboard",sidebar_label:"Admin Home Page"}),d={unversionedId:"admin-guide/getting-started/homepage",id:"admin-guide/getting-started/homepage",isDocsHomePage:!1,title:"Admin Guide Dashboard",description:"Log in to BI Hub application with admin's username/password. Switch to the administrator mode by selecting the Admin mode button at the top right corner.",source:"@site/docs/admin-guide/getting-started/homepage.mdx",sourceDirName:"admin-guide/getting-started",slug:"/admin-guide/getting-started/homepage",permalink:"/docs/admin-guide/getting-started/homepage",version:"current",sidebar_label:"Admin Home Page",frontMatter:{id:"homepage",title:"Admin Guide Dashboard",sidebar_label:"Admin Home Page"},sidebar:"adminGuide",previous:{title:"Overview of BI Hub",permalink:"/docs/admin-guide/overview"},next:{title:"Profile Settings",permalink:"/docs/admin-guide/getting-started/profile-settings"}},p=[{value:"1. Instances Configured",id:"1-instances-configured",children:[]},{value:"2. Authentication Configured",id:"2-authentication-configured",children:[]},{value:"3. Components Configured",id:"3-components-configured",children:[]},{value:"4. Synchronization Information",id:"4-synchronization-information",children:[{value:"Sync Users",id:"sync-users",children:[]},{value:"Sync Reports",id:"sync-reports",children:[]},{value:"Report Metadata Update",id:"report-metadata-update",children:[]},{value:"Sync Authentication",id:"sync-authentication",children:[]}]}],m={toc:p};function u(e){var t=e.components,n=Object(s.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},m,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("div",{className:"admonition admonition-important alert alert--info"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"important")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"Log in to BI Hub application with admin's username/password. Switch to the administrator mode by selecting the ",Object(o.b)("strong",{parentName:"p"},"Admin mode")," button at the top right corner."))),Object(o.b)("p",null,"Upon successfully configuring the Agents, connecting the directory services, and a few successful synchronizations, the landing page displays four tiles:"),Object(o.b)("div",{class:"center"},Object(o.b)(c.a,{mdxType:"Zoom"},Object(o.b)("img",{alt:"Admin's Landing Page",src:Object(r.a)("/doc-images/admin-guide/admin-landing-page.png")})),Object(o.b)("p",null,"Admin's Home Page")),Object(o.b)("h2",{id:"1-instances-configured"},"1. Instances Configured"),Object(o.b)("p",null,"This section lists the instances configured,  number of ",Object(o.b)("strong",{parentName:"p"},"Reports")," synched, Agent's ",Object(o.b)("strong",{parentName:"p"},"Server")," URL, Instance ",Object(o.b)("strong",{parentName:"p"},"Port")," number, and Instance ",Object(o.b)("strong",{parentName:"p"},"Status"),".\nThe instances are managed from the ",Object(o.b)(i.a,{to:Object(r.a)("docs/admin-guide/agent-manager/agent/agent-management#instance-manager"),mdxType:"Link"},"Instance Manager")," screen."),Object(o.b)("h2",{id:"2-authentication-configured"},"2. Authentication Configured"),Object(o.b)("p",null,"This section summarizes the user account types with ",Object(o.b)("strong",{parentName:"p"},"Authentication Name"),", ",Object(o.b)("strong",{parentName:"p"},"Type"),", and ",Object(o.b)("strong",{parentName:"p"},"Status"),". These accounts are managed in the ",Object(o.b)(i.a,{to:Object(r.a)("docs/admin-guide/authenticate/authenticate"),mdxType:"Link"},"Authentication")," section."),Object(o.b)("h2",{id:"3-components-configured"},"3. Components Configured"),Object(o.b)("p",null,"The components like Elastic Search, Message Queue, and SMTP configured during Server configuration are listed in this section.\nYou can view ",Object(o.b)("strong",{parentName:"p"},"Component Name, Server, Port"),", and ",Object(o.b)("strong",{parentName:"p"},"Status")," indicator."),Object(o.b)("h2",{id:"4-synchronization-information"},"4. Synchronization Information"),Object(o.b)("p",null,"In this section, you can view the detailed summary of the syncs that were triggered from the ",Object(o.b)("strong",{parentName:"p"},"Agent Manager > Instance Manager"),", and ",Object(o.b)("strong",{parentName:"p"},"Authentication")," sections."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Select ",Object(o.b)("strong",{parentName:"p"},"Synchronization Information"),"."),Object(o.b)("div",{class:"center"},Object(o.b)(c.a,{mdxType:"Zoom"},Object(o.b)("img",{alt:"Sync information",src:Object(r.a)("/doc-images/admin-guide/synch/sync-info.png")})),Object(o.b)("p",null,"Synchronization Information"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"To view the recent activities over a period, click on the ",Object(o.b)("strong",{parentName:"p"},"Calendar")," icon and select the period as ",Object(o.b)("strong",{parentName:"p"},"Today, Yesterday, Last 7 Days, Last 30 days, This month, Last month"),", or select your ",Object(o.b)("strong",{parentName:"p"},"Custom range"),".")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Select the type of synchronization you want to view the details of: ",Object(o.b)("strong",{parentName:"p"},"Sync Users/Sync Reports/Report Metadata Update/Sync Authentication"),"."))),Object(o.b)("h3",{id:"sync-users"},"Sync Users"),Object(o.b)("p",null,"In the ",Object(o.b)("strong",{parentName:"p"},"Synchronization Information")," screen, you get the Sync ",Object(o.b)("strong",{parentName:"p"},"Type"),", success/failure ",Object(o.b)("strong",{parentName:"p"},"Status")," of the sync process, ",Object(o.b)("strong",{parentName:"p"},"Last updated at")," timestamp, ",Object(o.b)("strong",{parentName:"p"},"Last updated by")," username, and ",Object(o.b)("strong",{parentName:"p"},"Agent Instance(s)")," names."),Object(o.b)("div",{class:"center"},Object(o.b)(c.a,{mdxType:"Zoom"},Object(o.b)("img",{alt:"Users sync information",src:Object(r.a)("/doc-images/admin-guide/synch/sync-users-info.png")})),Object(o.b)("p",null,"Sync information for Users")),Object(o.b)("p",null,"The users that are synchronized are categorized as:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Inserted"),": New Users added to the Agents"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Updated"),": Existing users updated that are common to the selected Agents"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Excluded"),": Users not common to the selected Agents")),Object(o.b)("p",null,"To download the detailed logs of the sync process, select ",Object(o.b)("strong",{parentName:"p"},"Download Logs"),"."),Object(o.b)("h3",{id:"sync-reports"},"Sync Reports"),Object(o.b)("p",null,"In the ",Object(o.b)("strong",{parentName:"p"},"Synchronization Information")," screen, you get the Sync ",Object(o.b)("strong",{parentName:"p"},"Type"),", success/failure ",Object(o.b)("strong",{parentName:"p"},"Status")," of the sync process, ",Object(o.b)("strong",{parentName:"p"},"Last updated at")," timestamp, ",Object(o.b)("strong",{parentName:"p"},"Last updated by")," username, and ",Object(o.b)("strong",{parentName:"p"},"Agent Instance(s)")," names."),Object(o.b)("div",{class:"center"},Object(o.b)(c.a,{mdxType:"Zoom"},Object(o.b)("img",{alt:"Reports sync information",src:Object(r.a)("/doc-images/admin-guide/synch/sync-reports-info.png")})),Object(o.b)("p",null,"Sync information for Reports")),Object(o.b)("p",null,"The synchronized reports are categorized as:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"New"),": New reports added into BI Hub."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Updated"),": Those Reports that already exist in BI Hub for other users and given access for new users."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Revoked"),": Reports for which access is revoked for the user from the platform.")),Object(o.b)("p",null,"To view the number of users affected by the sync, click on ",Object(o.b)("strong",{parentName:"p"},"No. of Users")," column. The list of users are listed in the column on the left."),Object(o.b)("p",null,"Select the download icon to ",Object(o.b)("strong",{parentName:"p"},"Download Logs")," for the sync."),Object(o.b)("h3",{id:"report-metadata-update"},"Report Metadata Update"),Object(o.b)("p",null,"After you ",Object(o.b)(i.a,{to:Object(r.a)("docs/admin-guide/user-manager/user-management#add-reports-to-an-existing-user"),mdxType:"Link"},"Manage Reports")," to assign/un-assign reports to a user, you must run a Sync Metadata for the affected agent.\nTo view the sync details, select ",Object(o.b)("strong",{parentName:"p"},"Home > Synchronization Information > Report Metadata Update"),"."),Object(o.b)("div",{class:"center"},Object(o.b)(c.a,{mdxType:"Zoom"},Object(o.b)("img",{alt:"Reports Metadata information",src:Object(r.a)("/doc-images/admin-guide/synch/report-meta-sync.png")})),Object(o.b)("p",null,"Report Metadata Update")),Object(o.b)("p",null,"In the ",Object(o.b)("strong",{parentName:"p"},"Synchronization Information")," screen, you get the Sync ",Object(o.b)("strong",{parentName:"p"},"Type"),", success/failure ",Object(o.b)("strong",{parentName:"p"},"Status")," of the sync process, ",Object(o.b)("strong",{parentName:"p"},"Last updated at")," timestamp, and ",Object(o.b)("strong",{parentName:"p"},"Last updated by")," username."),Object(o.b)("p",null,"A list of reports ",Object(o.b)("strong",{parentName:"p"},"Assigned")," and ",Object(o.b)("strong",{parentName:"p"},"Unassigned")," is displayed.\nYou can view further details like the ",Object(o.b)("strong",{parentName:"p"},"Report Name, Agent, Path"),", and ",Object(o.b)("strong",{parentName:"p"},"Users"),"."),Object(o.b)("h3",{id:"sync-authentication"},"Sync Authentication"),Object(o.b)("p",null,"In the ",Object(o.b)("strong",{parentName:"p"},"Synchronization Information")," screen, you get the Sync ",Object(o.b)("strong",{parentName:"p"},"Type"),", success/failure ",Object(o.b)("strong",{parentName:"p"},"Status")," of the sync process, ",Object(o.b)("strong",{parentName:"p"},"Last updated at")," timestamp, and ",Object(o.b)("strong",{parentName:"p"},"Last updated by")," username."),Object(o.b)("div",{class:"center"},Object(o.b)(c.a,{mdxType:"Zoom"},Object(o.b)("img",{alt:"Authentication Sync Information",src:Object(r.a)("/doc-images/admin-guide/synch/sync-auth.png")})),Object(o.b)("p",null,"Authentication Sync Details")),Object(o.b)("p",null,"The list displays the user's ",Object(o.b)("strong",{parentName:"p"},"Fullname, Authentication User Name"),", and ",Object(o.b)("strong",{parentName:"p"},"Authentication Type"),"."))}u.isMDXComponent=!0}}]);