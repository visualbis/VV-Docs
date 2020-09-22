(window.webpackJsonp=window.webpackJsonp||[]).push([[83],{138:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return i})),a.d(t,"rightToc",(function(){return l})),a.d(t,"default",(function(){return s}));var n=a(2),b=a(6),r=(a(0),a(214)),c=(a(215),{id:"config-tab",title:"Config Tab",sidebar_label:"Config Tab"}),i={unversionedId:"installation-guide/install-bihub-windows/server/config-tab",id:"installation-guide/install-bihub-windows/server/config-tab",isDocsHomePage:!1,title:"Config Tab",description:"Changing the value of Properties in this tab affects BI Hub server.",source:"@site/docs/installation-guide/install-bihub-windows/server/config-tab.md",permalink:"/docs/installation-guide/install-bihub-windows/server/config-tab",sidebar_label:"Config Tab",sidebar:"installationGuide",previous:{title:"BI Hub Server Configuration",permalink:"/docs/installation-guide/install-bihub-windows/server/config"},next:{title:"Instances Tab",permalink:"/docs/installation-guide/install-bihub-windows/server/instances-tab"}},l=[{value:"General Section",id:"general-section",children:[]},{value:"Database Section",id:"database-section",children:[]},{value:"Audit Database Section",id:"audit-database-section",children:[]},{value:"SSL Section",id:"ssl-section",children:[]},{value:"Elastic Search Section",id:"elastic-search-section",children:[]},{value:"Mail Connection Server",id:"mail-connection-server",children:[]}],o={rightToc:l};function s(e){var t=e.components,a=Object(b.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},o,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Changing the value of Properties in this tab affects BI Hub server.\nSince changing the configuration affects all the BI Hub server instances they need to be restarted for the configuration changes to take effect. "),Object(r.b)("p",null,"This tab contains following sections which are as follows."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"#general-section"}),"General Section")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"#database-section"}),"Database Section")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"#audit-database-section"}),"Audit Database Section")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"#ssl-section"}),"SSL Section")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"#elastic-search-section"}),"Elastic Search Section")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"#mail-connection-server"}),"Mail Connection Server"))),Object(r.b)("h2",{id:"general-section"},"General Section"),Object(r.b)("p",null,"This section will have configuration fields which are general to the server."),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Property"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Purpose"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Max Log Size"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Maximum size of the log file in MB"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Default value - 10")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Max Log Count"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Maximum number of log files that can be generated without a backup. Once the number is reached, the files need to be backed up."),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Default value -10")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Log Level"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Level of detail at which the log is written"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("strong",{parentName:"td"},"Info")," \u2013 Will log all the available information")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("strong",{parentName:"td"},"Warning")," \u2013 Will log all the warnings and errors")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("strong",{parentName:"td"},"Error")," \u2013 Will log only errors.")))),Object(r.b)("h2",{id:"database-section"},"Database Section"),Object(r.b)("p",null,"This section will have configuration fields related to the main database connection to the server."),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Property"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Purpose"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Description"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Type"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Type of the database in which the metadata is stored"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"MySQL/MSSQL/Oracle/PostgreSQL")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Driver"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Only available for MSSQL database type"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Kindly provide the name of the MSSQL driver installed in the current system. For other database types, this field won\u2019t be available")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Host Name"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Host name of the preferred database server"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Default value : 127.0.0.1")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Port"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Database server port at which the database server is running"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Default value : 3306")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Name"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Schema to connect to"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Default DB Name : bihub")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Username"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Enter the database username"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"It should have all the privilege for the provided schema. Default username is root")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Password"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Password of the above provided username"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Create database"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Create the database mentioned if not already present"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"If the installer software should create database/schema, check this box. If this box is not checked, the database/schema should be created manually with the same name as indicated in the \u2018Name\u2019 property")))),Object(r.b)("h2",{id:"audit-database-section"},"Audit Database Section"),Object(r.b)("p",null,"This section will have configuration fields related to the audit database connection to the server."),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Property"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Purpose"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Description"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Type"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Type of the database in which the metadata is stored"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"MySQL/MSSQL/Oracle/PostgreSQL")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Driver"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Only available for MSSQL database type"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Kindly provide the name of the MSSQL driver installed in the current system. For other database types, this field won\u2019t be available")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Host Name"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Host name of the preferred database server"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Default value : 127.0.0.1")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Port"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Database server port at which the database server is running"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Default value : 3306")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Name"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Schema to connect to"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Default DB Name : bihubaudit")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Username"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Enter the database username"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"It should have all the privilege for the provided schema")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Password"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Password of the above provided username"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Create database"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Create the database mentioned if not already present"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"If the installer software should create database/schema, check this box. If this box is not checked, the database/schema should be created manually with the same name as indicated in the \u2018Name\u2019 property")))),Object(r.b)("h2",{id:"ssl-section"},"SSL Section"),Object(r.b)("p",null,"This section establishes a secure connection via SSL between browser and BI Hub components. To configure the SSL properly, please follow the below listed information:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Kindly have a proper valid SSL certificate from an authorized vendor in .crt format. This public certificate should be provided in ",Object(r.b)("inlineCode",{parentName:"li"},"<certificate_name>.crt")," and private key in ",Object(r.b)("inlineCode",{parentName:"li"},"<certificate_name>.key")," file format."),Object(r.b)("li",{parentName:"ul"},"If the customer wishes to use the organization\u2019s own self signed SSL certificate, then necessary steps have to be taken to add the certificate in the trusted certificate key store in all client machine. "),Object(r.b)("li",{parentName:"ul"},"Making this self-signed certificate as a trusted certificate in all browsers is out of the scope of this documentation.  BI Hub recommends having a valid SSL certificate to properly secure the connection."),Object(r.b)("li",{parentName:"ul"},"Enable the SSL by checking the checkbox. After enabling the SSL, use the file selection browse button to select the files (private.key and public.crt files) and then click continue for the next section.")),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"If you are going to configure SSL, please make sure that BI Hub Web and BI Hub Agents and its respective BI platforms should be also configured with proper SSL. You cannot access http content from the https protocol. Browser will throw the mixed content error, if you try to access http content from the https URL."))),Object(r.b)("h2",{id:"elastic-search-section"},"Elastic Search Section"),Object(r.b)("p",null,"This section helps to configure the connection details of the Elastic Search which is pre-installed with the BI Hub Server."),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Property"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Purpose"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Description"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"URL"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Provide the URL to reach the elastic search server"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"It is always recommended to use the https version and its format is ",Object(r.b)("inlineCode",{parentName:"td"},"https://127.0.0.1:<Apache https port>/elasticsearch"),". Default port is 9443. If http is desired, then the format is ",Object(r.b)("inlineCode",{parentName:"td"},"http://127.0.0.1:<Apache http port>/elasticsearch"),". Default port is 9080")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Username"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Username of the Elastic search which is provided in the Elastic Search user configuration section of the installer"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Default username : esadmin")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Password"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Password of the user which is provided in the Elastic Search user configuration section of the installer"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Index"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Name of the index under which all the metadata needs to be stored"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Default index : bihub")))),Object(r.b)("h2",{id:"mail-connection-server"},"Mail Connection Server"),Object(r.b)("p",null,"This section helps to configure the mail server connection details. Mail server connection will be used to send emails from Smart Search feature of BI Hub."),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Purpose"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Description"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"ServerMail"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Server host name"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Ex: smtp.office365.com")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Port"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Port which should be used to connect with mail server"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Default value : 567")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Encryption"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Encryption type that needs to be used"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Default Encryption : TLS")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Sender"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Sender email address. Emails generated by Smart Search will use this address in From"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Username"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Username that needs to be used for login into the smtp server."),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Password"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Password that needs to be used for login into the smtp server"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"CC Sender"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Address that needs to be provided in CC, to audit all the emails triggered from VBIView"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}))))),Object(r.b)("p",null,"After configuring all this section, press save and continue to start configuring Instances."))}s.isMDXComponent=!0}}]);