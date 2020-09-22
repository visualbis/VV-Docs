---
id: config-tab
title: Config Tab
sidebar_label: Config Tab
---

import useBaseUrl from "@docusaurus/useBaseUrl";

Changing the value of Properties in this tab affects BI Hub server. 
Since changing the configuration affects all the BI Hub server instances they need to be restarted for the configuration changes to take effect. 

This tab contains following sections which are as follows.
- [General Section](#general-section)
- [Database Section](#database-section)
- [Audit Database Section](#audit-database-section)
- [SSL Section](#ssl-section)
- [Elastic Search Section](#elastic-search-section)
- [Mail Connection Server](#mail-connection-server)

## General Section

This section will have configuration fields which are general to the server.

| Property | Purpose | Description |
| --- | --- | --- |
| Max Log Size | Maximum size of the log file in MB | Default value - 10 |
| Max Log Count | Maximum number of log files that can be generated without a backup. Once the number is reached, the files need to be backed up. | Default value -10 |
| Log Level | Level of detail at which the log is written | **Info** – Will log all the available information
| | | **Warning** – Will log all the warnings and errors |
| | | **Error** – Will log only errors. |

## Database Section

This section will have configuration fields related to the main database connection to the server.

| Property | Purpose | Description |
| :--- | :--- | :--- |
| Type | Type of the database in which the metadata is stored | MySQL/MSSQL/Oracle/PostgreSQL |
| Driver | Only available for MSSQL database type | Kindly provide the name of the MSSQL driver installed in the current system. For other database types, this field won’t be available |
| Host Name | Host name of the preferred database server | Default value : 127.0.0.1 |
| Port | Database server port at which the database server is running | Default value : 3306 |
| Name | Schema to connect to | Default DB Name : bihub |
Username | Enter the database username | It should have all the privilege for the provided schema. Default username is root |
| Password | Password of the above provided username | |
| Create database | Create the database mentioned if not already present | If the installer software should create database/schema, check this box. If this box is not checked, the database/schema should be created manually with the same name as indicated in the ‘Name’ property |

## Audit Database Section

This section will have configuration fields related to the audit database connection to the server.

| Property | Purpose | Description |
| :--- | :--- | :--- |
| Type | Type of the database in which the metadata is stored | MySQL/MSSQL/Oracle/PostgreSQL |
| Driver | Only available for MSSQL database type | Kindly provide the name of the MSSQL driver installed in the current system. For other database types, this field won’t be available |
| Host Name | Host name of the preferred database server | Default value : 127.0.0.1 |
| Port | Database server port at which the database server is running | Default value : 3306 | 
| Name | Schema to connect to | Default DB Name : bihubaudit |
| Username | Enter the database username | It should have all the privilege for the provided schema |
| Password | Password of the above provided username | |
| Create database | Create the database mentioned if not already present | If the installer software should create database/schema, check this box. If this box is not checked, the database/schema should be created manually with the same name as indicated in the ‘Name’ property |

## SSL Section

This section establishes a secure connection via SSL between browser and BI Hub components. To configure the SSL properly, please follow the below listed information:

- Kindly have a proper valid SSL certificate from an authorized vendor in .crt format. This public certificate should be provided in `<certificate_name>.crt` and private key in `<certificate_name>.key` file format.
- If the customer wishes to use the organization’s own self signed SSL certificate, then necessary steps have to be taken to add the certificate in the trusted certificate key store in all client machine. 
- Making this self-signed certificate as a trusted certificate in all browsers is out of the scope of this documentation.  BI Hub recommends having a valid SSL certificate to properly secure the connection.
- Enable the SSL by checking the checkbox. After enabling the SSL, use the file selection browse button to select the files (private.key and public.crt files) and then click continue for the next section.

:::note
If you are going to configure SSL, please make sure that BI Hub Web and BI Hub Agents and its respective BI platforms should be also configured with proper SSL. You cannot access http content from the https protocol. Browser will throw the mixed content error, if you try to access http content from the https URL.
:::

## Elastic Search Section

This section helps to configure the connection details of the Elastic Search which is pre-installed with the BI Hub Server.

| Property | Purpose | Description |
| :--- | :--- | :--- |
| URL | Provide the URL to reach the elastic search server | It is always recommended to use the https version and its format is `https://127.0.0.1:<Apache https port>/elasticsearch`. Default port is 9443. If http is desired, then the format is `http://127.0.0.1:<Apache http port>/elasticsearch`. Default port is 9080 |
| Username | Username of the Elastic search which is provided in the Elastic Search user configuration section of the installer | Default username : esadmin | 
| Password | Password of the user which is provided in the Elastic Search user configuration section of the installer | |
| Index | Name of the index under which all the metadata needs to be stored | Default index : bihub |

## Mail Connection Server

This section helps to configure the mail server connection details. Mail server connection will be used to send emails from Smart Search feature of BI Hub.

| Type | Purpose | Description |
| :--- | :--- | :--- |
| ServerMail | Server host name | Ex: smtp.office365.com |
| Port | Port which should be used to connect with mail server | Default value : 567 |
| Encryption | Encryption type that needs to be used | Default Encryption : TLS |
| Sender | Sender email address. Emails generated by Smart Search will use this address in From | |
| Username | Username that needs to be used for login into the smtp server. | |
| Password | Password that needs to be used for login into the smtp server |
| CC Sender | Address that needs to be provided in CC, to audit all the emails triggered from VBIView | |

After configuring all this section, press save and continue to start configuring Instances.



