---
id: config-tab
title: Config Tab
sidebar_label: Config Tab
---

import useBaseUrl from "@docusaurus/useBaseUrl";
import Link from "@docusaurus/Link";

Editing the configuration properties affects the BI Hub server and requires a restart of BI Hub Server instances.

:::note
Click the **Continue** button upon changing the instances configuration properties after each section.
:::

The *Config* tab allows the configuration of the following:
- [General Section](#general-section): Configuration fields general to the BI Hub server.
- [Database Section](#database-section): Configuration fields of the main database connection to the server.
- [Audit Database Section](#audit-database-section): Configuration fields of the audit database connection to the server.
- [SSL Section](#ssl-section): Establish a secure connection via SSL between browser and BI Hub Server.
- [Elastic Search Section](#elastic-search-section): Configure the Elastic Search details.
- [Mail Connection Server](#mail-connection-server): Configure Mail connection server.
- [Web Config](#web-config): BI Hub Web configuration.
- [Message Queue](#message-queue): Message Queue configurations

## General Section

This section lists out the general BI Hub Server configuration fields.

| Property | Purpose | Description |
| --- | --- | --- |
| Max Log Size | Maximum size of the log file in MB | Default value - 10 |
| Max Log Count | Maximum number of log files that can be generated without a backup. Once the number is reached, the files need to be backed up. | Default value -10 |
| Log Level | Level of detail at which the log is written | <ul><li>**Info** – Will log all the available information</li><li>**Warning** – Will log all the warnings and errors</li><li>**Error** (Default) – Will log only errors.</li></ul> |
| Agent Timeout | Timeout for the Agent health check in seconds | Default value - 5 | 
| Cache Timeout | Timeout for the cache storage of BI Hub Server | Default value - 1 hour | 
| CORS (Cross-origin resource sharing) | Settings for the BI Hub Server. To be more secure please set this value of the DNS URL of your machine. | Default value - * |

## Database Section

This section defines the configuration fields (same as audit database below) related to the main database connection to the BI Hub server. 

## Audit Database Section

Audit database connection to the server configurations.

| Property | Purpose | Description |
| :--- | :--- | :--- |
| Type | Type of the database in which the metadata is stored | MySQL/MSSQL/Oracle/PostgreSQL |
| Driver | Only available for MSSQL database type | Kindly provide the name of the MSSQL driver installed in the current system. For other database types, this field won’t be available |
| Host Name | Host name of the preferred database server | Default value : 127.0.0.1 |
| Port | Database server port at which the database server is running | Default value : 3306 | 
| Name | Schema to connect to | Default DB Name : bihubaudit |
| Username | Enter the database username | It should have all the privileges for the provided schema. <br></br>Provide the username that you used while installing the BI Hub Server  |
| Password | Password of the above-provided username. | <br></br>Provide the password that you used while installing the BI Hub Server |
| SSL | Enable SSL to have a secured connection between your database and BI Hub Server. Set to "True" to enable, and "False" to disable the SSL. | Default value - True |
| Create database | Create the database mentioned if not already present | If the installer software should create database/schema, check this box. If this box is not checked, the database/schema should be created manually with the same name as indicated in the ‘Name’ property |
| Collate | Database Collation in which you created the database schema. (enabled only when "Create database" is selected)| Default value - utf8_unicode_ci <br></br>Use the Default value unless you have a specific requirement. | 
| Character set | Character set of the database (enabled only when "Create database" is selected) | Default value - utf8 <br></br>Use the Default value unless you have a specific requirement. |

## SSL Section

This section establishes a secure connection via SSL between browser and BI Hub Server. 
For the initial configuration please skip this section without any changes.
To configure SSL in all the BI Hub configuration, please follow the <Link to={useBaseUrl('docs/installation-guide/advanced/ssl/ssl')}>SSL Configuration</Link> section.

## Elastic Search Section

This section helps to configure the connection details of the Elastic Search which is pre-installed with the BI Hub Server.
:::note
If you want to use your Elastic Search instance, you will be allowed to provide the details below.
:::

| Property | Purpose | Description |
| :--- | :--- | :--- |
| URL | Provide the URL to reach the elastic search server | <ul><li>If you are using pre-installed Elastic Search, provide the following values: `https://127.0.0.1:<https_port>/elasticsearch`. <br></br>Note: https_port is the port number that you gave while installing BI Hub Server Elastic Search Port configuration Page. The default value is 9443</li><li>If you are using your own Elastic Search, then use the following details: `{http/https}://<hostname>:<port>`</li></ul> |
| Username | Username of the Elastic search which is provided in the Elastic Search user configuration section of the installer | Default username : esadmin <br></br>Provide the username that you used while installing the BI Hub Server | 
| Password | Password of the user which is provided in the Elastic Search user configuration section of the installer | Provide the password that you used while installing the BI Hub Server |
| Index | Name of the index under which all the metadata needs to be stored | Default index : bihub |

## Mail Connection Server

Configure the mail server connection details that is used to send emails from the Smart Search feature of BI Hub.

| Type | Purpose | Description |
| :--- | :--- | :--- |
| ServerMail | Server host name | Ex: smtp.office365.com |
| Port | Port which should be used to connect with mail server | Default value : 567 |
| Encryption | Encryption type that needs to be used | Default Encryption : TLS |
| Username | Username that needs to be used for login into the SMTP server. | |
| Password | Password that needs to be used for login into the SMTP server |
| Sender | Sender email address. Emails generated by Smart Search will use this address in From | |
| CC Sender | Address that needs to be provided in CC, to audit all the emails triggered from VBIView | |

After configuring all this section, press save and continue to start configuring Instances.

## Web Config

This section defines the URL and Port configuration required to setup the BI Hub Web.

| Type | Purpose | Description |
| --- | --- | --- |
| URL | Provide the DNS resolvable URL for the BI Hub Web | This is the DNS resolvable URL for logging into the BI Hub Web application |
| Port | Provide the Port number for the BI Hub Web | Default value for HTTP is 80, for HTTPS is 443 |

## Message Queue

Message Queue configuration parameters and their description.

| Type | Purpose | Description |
| --- | --- | --- |
| Host | Hostname for the machine where you have installed the Message Queue | Enter localhost as its value (change required only while configuring high availability configuration)|
| Username | Username to login | Enter the same username you provided while installing BI Hub Server |
| Password | Password to login | Enter the same password you provided while installing BI Hub Server |
| Port | Message Queue Port value | Default value 5672 | 


