---
id: db-web
title: Databases, WebServer
sidebar_label: Databases, WebServer
---

import useBaseUrl from '@docusaurus/useBaseUrl';

The following table shows a certified list of databases and webservers which are certified to run BI Hub.

| Components | Supported                                           | Recommended                            |
|------------|-----------------------------------------------------|----------------------------------------|
| Database   | MSSQLServer2012, Oracle10g, MySQL5.7, PostgreSQL9.6 | Dedicated DB instance for Production   |
| Webserver  | Nginx, Apache Tomcat, Microsoft IIS8.0              | Nginx that is bundled with the product |

If you prefer the MSSQL database to be used with the BI Hub server, then you need to install any one of the following drivers in the server machine.

* SQL Server Native Client 11.0 -released with SQL Server 2012
* ODBC Driver 11 for SQL Server -supports SQL Server 2005 through 2014
* ODBC Driver 13 for SQL Server -supports SQL Server 2005 through 2016