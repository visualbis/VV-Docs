(window.webpackJsonp=window.webpackJsonp||[]).push([[119],{186:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return o})),a.d(t,"rightToc",(function(){return m})),a.d(t,"default",(function(){return g}));var n=a(3),r=a(7),i=(a(0),a(205)),s=a(206),c=a(207),b=a(208),l=(a(53),{id:"agent-manager",sidebar_label:"Agent Manager",title:"Agent Manager"}),o={unversionedId:"admin-guide/agent-manager/agent-manager",id:"admin-guide/agent-manager/agent-manager",isDocsHomePage:!1,title:"Agent Manager",description:'import "react-medium-image-zoom/dist/styles.css";',source:"@site/docs/admin-guide/agent-manager/agent-manager.mdx",slug:"/admin-guide/agent-manager/agent-manager",permalink:"/docs/admin-guide/agent-manager/agent-manager",version:"current",sidebar_label:"Agent Manager",sidebar:"adminGuide",previous:{title:"Integrating BI Hub with BI platforms and Microsoft AD \u2013 Initial Setup",permalink:"/docs/admin-guide/integrate"},next:{title:"Agent Management",permalink:"/docs/admin-guide/agent-manager/agent-management"}},m=[{value:"Agent Manager",id:"agent-manager",children:[{value:"Instance Manager",id:"instance-manager",children:[]},{value:"Synchronize Users",id:"synchronize-users",children:[]},{value:"1.1 Synchronize Users between Agent and BI Hub",id:"11-synchronize-users-between-agent-and-bi-hub",children:[]},{value:"Editing Agent/Instance Details",id:"editing-agentinstance-details",children:[]}]}],d={rightToc:m};function g(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},d,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"The ",Object(i.b)("strong",{parentName:"p"},"Agent Manager")," screen provides ",Object(i.b)("em",{parentName:"p"},"Agent")," and ",Object(i.b)("em",{parentName:"p"},"Cluster")," management features:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Agent Manager: "),Object(i.b)("li",{parentName:"ul"},"Cluster Manager: ")),Object(i.b)("h2",{id:"agent-manager"},"Agent Manager"),Object(i.b)("p",null,"Following are the tasks allowed in the ",Object(i.b)("strong",{parentName:"p"},"Agent Manager")," feature:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("strong",{parentName:"li"},"Add Agents")," that are configured with the BI Platform."),Object(i.b)("li",{parentName:"ol"},Object(i.b)("strong",{parentName:"li"},"Instance Manager"),": Manage(add/edit/delete) instances of an Agent.")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Edit")," agent's ",Object(i.b)("em",{parentName:"li"},"Name, Server"),", and ",Object(i.b)("em",{parentName:"li"},"Port")," details."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Delete")," an agent.")),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"#synchronize-users"}),"Synch Users"),": Synchronize Users between Agent and BI Hub.")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Synch Users, and Reports."),Object(i.b)("li",{parentName:"ul"},"Manage an agent ",Object(i.b)("strong",{parentName:"li"},"Cluster"),".")),Object(i.b)("p",null,Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"#synch"}),"Synch Users")),Object(i.b)("h3",{id:"instance-manager"},"Instance Manager"),Object(i.b)("p",null,"To edit the ",Object(i.b)("em",{parentName:"p"},"Instances")," configured with an ",Object(i.b)("em",{parentName:"p"},"Agent"),":"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Select the Agent ",Object(i.b)("strong",{parentName:"li"},"Name")," in the ",Object(i.b)("strong",{parentName:"li"},"Agent Manager")," screen."),Object(i.b)("li",{parentName:"ol"},"In the ",Object(i.b)("strong",{parentName:"li"},"Instances")," tab, click the number on the right."),Object(i.b)("li",{parentName:"ol"},"In the ",Object(i.b)("strong",{parentName:"li"},"Agent Manager > Instance Manager")," screen, select the ",Object(i.b)("em",{parentName:"li"},"Instance")," and click ",Object(i.b)("strong",{parentName:"li"},"Edit")," at the top right corner."),Object(i.b)("li",{parentName:"ol"},"In the ",Object(i.b)("strong",{parentName:"li"},"Edit Instance")," sidebar, edit the instance details such as - ",Object(i.b)("em",{parentName:"li"},"Instance Name, Email, Agent Port"),", and rest of the required details."),Object(i.b)("li",{parentName:"ol"},"Click ",Object(i.b)("strong",{parentName:"li"},"Submit")," to save the changes.")),Object(i.b)("p",null,"You can also ",Object(i.b)("strong",{parentName:"p"},"Delete"),", ",Object(i.b)("strong",{parentName:"p"},"Synch Users"),", and ",Object(i.b)("strong",{parentName:"p"},"Synch Reports")," for the selected instance."),Object(i.b)("div",{class:"center"},Object(i.b)(b.a,{mdxType:"Zoom"},Object(i.b)("img",{alt:"Edit Instance",src:Object(s.a)("doc-images/admin-guide/admin-functions/integrate-bihub/editinstancenew.jpg")}))),Object(i.b)("p",null,"  ",Object(i.b)("em",{parentName:"p"},"Edit Instance")),Object(i.b)("h3",{id:"synchronize-users"},"Synchronize Users"),Object(i.b)("h3",{id:"11-synchronize-users-between-agent-and-bi-hub"},"1.1 Synchronize Users between Agent and BI Hub"),Object(i.b)("p",null,"This feature is used by an administrator to import users from the BI\nplatform into the portal. It is only used in scenarios when the BI\nplatform stores all user credentials and users are authenticated using\nthe BI platform and not a directory service like Microsoft AD/LDAP."),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"In the Admin Home Screen, select Agent Manager.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"If the user names are same across all BI platforms, then select all Agents (except the one that points to a file system folder). If the user names are different between BI platforms, then select the agent, which has the most number of users. Click Sync Users and then Save."),Object(i.b)("div",{class:"center"},Object(i.b)(b.a,{mdxType:"Zoom"},Object(i.b)("img",{alt:"Synch Users",src:Object(s.a)("doc-images/admin-guide/synch/sync-users.jpg")}))),Object(i.b)("p",{parentName:"li"},Object(i.b)("em",{parentName:"p"},"Sync Users"))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"The application shows a list of users imported from BI platforms to BI Hub and this list can be seen by selecting the User Manager page.\nThe agent icon against a user name indicates the number of agents (BI platforms) in which the user account was present. The types of Authentication assigned for the users can be also viewed in this page. You can select the user and click on the Agent Users tab on the right pane to visualize the BI platforms and the name of the user in that platform."),Object(i.b)("div",{class:"center"},Object(i.b)(b.a,{mdxType:"Zoom"},Object(i.b)("img",{alt:"User Managar",src:Object(s.a)("doc-images/admin-guide/synch/user-manager.jpg")}))),Object(i.b)("p",{parentName:"li"},"  ",Object(i.b)("em",{parentName:"p"},"User Manager")),Object(i.b)("p",{parentName:"li"},"  The number of users mentioned in parenthesis near the User Manager Label represents the total number of users who exist in BI Hub (see Figure above). The Users can also be filtered based on the platforms and the Authentication types (see Figures below)."),Object(i.b)("div",{class:"center"},Object(i.b)(b.a,{mdxType:"Zoom"},Object(i.b)("img",{alt:"User Manager with Agents Filtering",src:Object(s.a)("doc-images/admin-guide/synch/um2.jpg")}))),Object(i.b)("p",{parentName:"li"},"  ",Object(i.b)("em",{parentName:"p"},"User Manager with Agents Filtering")),Object(i.b)("div",{class:"center"},Object(i.b)(b.a,{mdxType:"Zoom"},Object(i.b)("img",{alt:"User Manager with Authentication Filtering",src:Object(s.a)("doc-images/admin-guide/synch/umauth.jpg")}))),Object(i.b)("p",{parentName:"li"},"  ",Object(i.b)("em",{parentName:"p"},"User Manager with Authentication Filtering")),Object(i.b)("p",{parentName:"li"},"  The user details such as Instance Name, Username and Environment can also be seen by just clicking on the username (see Figure below)."),Object(i.b)("div",{class:"center"},Object(i.b)(b.a,{mdxType:"Zoom"},Object(i.b)("img",{alt:"User Manager with User details",src:Object(s.a)("doc-images/admin-guide/synch/um3new.jpg")}))),Object(i.b)("p",{parentName:"li"},"  ",Object(i.b)("em",{parentName:"p"},"User Manager with User details"))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"It should be noted that when users are added via \u201cSync User\u201d operation, the default login password for the added users will be ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"mailto:username@123"}),"username@123")," (e.g. ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"mailto:adrian@123"}),"adrian@123")," for username \u2018adrian\u2019). During the first login, the users will be asked to change to a new password.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"If the user names are different between BI platforms, to import users from the other BI platform(s), Click Save and proceed to Section ",Object(i.b)(c.a,{to:Object(s.a)("docs/admin-guide/admin-functions/integrate-bihub-platform-msad/add-users-bi-platform"),mdxType:"Link"},"Add Users from other BI Platforms (users having different user names across BI Platforms)"),". If user names are identical across platforms, then upon completion of Step:2 go to Section ",Object(i.b)(c.a,{to:Object(s.a)("docs/admin-guide/admin-functions/integrate-bihub-platform-msad/synch-reports-users"),mdxType:"Link"},"Synchronize Reports of Users"),".")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Note that this functionality can be scheduled to be run automatically as and when required using the Agent Synchronization utility. Refer Section ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"#"}),"Scheduled synchronization with AD")))),Object(i.b)("h3",{id:"editing-agentinstance-details"},"Editing Agent/Instance Details"),Object(i.b)("p",null,"When the Admin wants to make some changes to an already configured Agent\n(i.e. editing the agent configuration), the following steps are to be\nfollowed"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Click on Agent Manager from the application pane")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Select the agent that you want to modify and click on the count that shows the number of instances. The instance manager opens.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Select the agent instance and click on the Edit icon in the Instance details tab. Make the necessary changes and click on submit.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"The agent will be modified accordingly, and the changes will be reflected in the Agent Manager page."),Object(i.b)("div",{class:"center"},Object(i.b)(b.a,{mdxType:"Zoom"},Object(i.b)("img",{alt:"Edit Instance",src:Object(s.a)("doc-images/admin-guide/admin-functions/integrate-bihub/editinstancenew.jpg")}))),Object(i.b)("p",{parentName:"li"},Object(i.b)("em",{parentName:"p"},"Edit Instance")))))}g.isMDXComponent=!0}}]);