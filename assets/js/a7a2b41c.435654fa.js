(window.webpackJsonp=window.webpackJsonp||[]).push([[83],{152:function(e,a,t){"use strict";t.r(a),t.d(a,"frontMatter",(function(){return r})),t.d(a,"metadata",(function(){return c})),t.d(a,"toc",(function(){return l})),t.d(a,"default",(function(){return s}));var i=t(3),n=t(7),o=(t(0),t(209)),r={id:"backup",title:"Backup",sidebar_label:"Backup"},c={unversionedId:"admin-guide/backup-recovery/backup",id:"admin-guide/backup-recovery/backup",isDocsHomePage:!1,title:"Backup",description:"BI Hub stores crucial metadata information in a database and the configuration information in files. A backup of this database and config files must be taken periodically so that they can be used in recovery in the event of an application crash.",source:"@site/docs/admin-guide/backup-recovery/backup.md",sourceDirName:"admin-guide/backup-recovery",slug:"/admin-guide/backup-recovery/backup",permalink:"/docs/admin-guide/backup-recovery/backup",version:"current",sidebar_label:"Backup",frontMatter:{id:"backup",title:"Backup",sidebar_label:"Backup"},sidebar:"adminGuide",previous:{title:"Email Template",permalink:"/docs/admin-guide/settings/email-template"},next:{title:"Recovery (in the event of a system crash)",permalink:"/docs/admin-guide/backup-recovery/recovery"}},l=[],b={toc:l};function s(e){var a=e.components,t=Object(n.a)(e,["components"]);return Object(o.b)("wrapper",Object(i.a)({},b,t,{components:a,mdxType:"MDXLayout"}),Object(o.b)("p",null,"BI Hub stores crucial metadata information in a database and the configuration information in files. A backup of this database and config files must be taken periodically so that they can be used in recovery in the event of an application crash."),Object(o.b)("p",null,"Follow the steps below to perform a backup."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"All the config folders which contain the configuration information of the installed software (BI Hub Server, BI Hub Agents, and BI Hub Web) are to be backed up. The following details contain the location of the config files for the installed software:"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"BI Hub Server: ",Object(o.b)("inlineCode",{parentName:"li"},"<Installation Location>VBI ViewVBIViewServerserverconfig.json")),Object(o.b)("li",{parentName:"ul"},"BI Hub Web: ",Object(o.b)("inlineCode",{parentName:"li"},"<Installation Location>config.js")),Object(o.b)("li",{parentName:"ul"},"For all BI Hub Agents, the file ",Object(o.b)("inlineCode",{parentName:"li"},"manager.ini")," has to be included for backup along with other configuration files. The ",Object(o.b)("inlineCode",{parentName:"li"},"manager.ini")," file can be found inside the installation directory of every agent.",Object(o.b)("ol",{parentName:"li"},Object(o.b)("li",{parentName:"ol"},Object(o.b)("inlineCode",{parentName:"li"},"<Installation Location>VBI View<Platform name>Agentconf"))))))),Object(o.b)("p",null,"Apart from these files, every agent has an SSL and TRUSTED folder in their installation directory that stores the SSL certificates and trusted configuration files. Backing up these files is preferred."),Object(o.b)("p",null,"BI Hub application database is to be backed up based on the enterprise\u2019s backup policy. Daily backup of the database is preferred."),Object(o.b)("p",null,"If there is a need to back up the log files for troubleshooting purposes, the location of the Log files is mentioned in the Log Levels."))}s.isMDXComponent=!0}}]);