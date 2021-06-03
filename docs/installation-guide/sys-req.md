---
id: sys-req
title: System Requirements
sidebar_label: System Requirements
---

import useBaseUrl from '@docusaurus/useBaseUrl';

The following table shows the various scenarios of application installation and their system requirements:

| Component            | Single Box                   | Multibox BI Hub Server       | Multibox BI Hub Agent        |
|----------------------|------------------------------|------------------------------|------------------------------|
| **Operating System** | Windows Server 2008 or later | Windows Server 2008 or later | Windows Server 2008 or later |
| **Processor**        | 2.4 GHz, Quadcore            | 2 GHz, Quadcore              | 2 GHz, Quadcore              |
| **RAM**              | 16 GB                        | 8 GB                         | 8 GB                         |

## Browser Compatibility

The following table shows the various Browsers compatible with BI Hub:

| Chrome      | Mozilla Firefox | Internet Explorer | Edge        |
|-------------|-----------------|-------------------|-------------|
| 35 or above | 30 or above     | 11.xxx            | 40 or above |

## Databases and Webservers

The following table shows a certified list of databases and web-servers which are certified to run BI Hub:

| Components | Supported                                           | Recommended                            |
|------------|-----------------------------------------------------|----------------------------------------|
| Database   | MSSQLServer2012, Oracle10g, MySQL5.7, PostgreSQL9.6 | Dedicated DB instance for Production   |
| Webserver  | Nginx, Apache Tomcat, Microsoft IIS8.0              | Nginx that is bundled with the product |

To use **MSSQL database** with the BI Hub server, install any of the below drivers in the server machine:

* SQL Server Native Client 11.0 - released with SQL Server 2012
* ODBC Driver 11 for SQL Server - supports SQL Server 2005 through 2014
* ODBC Driver 13 for SQL Server - supports SQL Server 2005 through 2016
