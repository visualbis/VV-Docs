---
id: config
title: BI Hub Web Configuration
sidebar_label: BI Hub Web Configuration
---

import useBaseUrl from '@docusaurus/useBaseUrl';

BI Hub Web has been configured with default basic configuration in the installer phase itself. There is no need for other configuration required for normal working of http version of BI Hub Web. 

But if there is additional SSL configuration or to change the configuration that you need, kindly follow the section below.

## Changing BI Hub Server URL Details

BI Hub Web will be configured with the URL details provided in the section [Installation of BI Hub Web](install), step number 4.
If you want to change the configuration, follow the below steps:

* Open the `config.json` file in administrator mode. If you have installed the bundled Nginx version of BI Hub Web, then the config.json file could be found in the `<installation folder>/nginx/nginx/html/`. To open the configuration file, right click `openconfig.bat` and choose *run as administrator* from the same location. 
* If you have installed the non-bundled version of BI Hub Web, then the config.json file could be found in the `<installation folder>/`.
* Replace the host with the desired URL of BI Hub Server URL. Please note that the URL should be DNS resolvable and it should be accessible for all client machines.
* Replace the port with the desired BI Hub Server port. Save the file. 

:::note
There is no need for restarting the server. Make sure that the client browser cache has been cleared or restart the client browser for the new configuration to take effect.
:::

<!-- 
## SSL Configuration

If you have installed BI Hub Web without Nginx, then configuring SSL will be out of the scope for this documentation. If you have installed BI Hub Web with Nginx, then follow the steps below to properly configure SSL.

By default,the bundled Nginx will contain the self-signed SSL certificate issued to example.com. Kindly have the proper SSL certificate from the authorized vendor in .crt format and key file. You can also have your own Self-Signed SSL certificate, but you need to make sure that certificate to a trusted certificate store by following the configuration steps provided by the particular browser which is out of scope for this document. BI Hub recommends to have the proper SSL certificate from the authorized vendor.

* To start with rename the SSL files to the required names. The X.X.X.X.crt file should be renamed to server.crt file and the X.X.X.X.key file should be renamed to server.key.
* Take backup of the server.crt and server.key files which could be found in the folder location `<installation_folder>/VBIViewWeb/nginx/nginx/conf`. In case of any failure in SSL configuration, we will need this file to bring back the server to normal working condition.
* Now replace these files with your own SSL files.•Nginx Server needs to be restarted for the configuration to take effect. For restarting the Nginx server, open manager-windows.exe file in administrator mode which could be found in the location `<installation_folder>/VBIViewWeb/nginx/`.
* In that application, select Manage Server tab, select Nginx server and click restart button. Wait for the server to get restarted.
* If there is any problem in restarting server, check the log files for the errors which could be found at `<installation_folder>/VBIViewWeb/nginx/nginx/logs/`.
* If you couldn’t trouble shoot the errors, kindly replace the old SSL file with the new one and restart the server.
* If the server starts successfully, then the problem will be mostly with the SSL file. Kindly verify the SSL certificate format and have a proper SSL format.

If you continue to have the problem, you could raise the support ticket in support portal or by sending email to support@visualbi.comwith supported log files and error images.

:::importantw
If you are going to configure SSL, please make sure that BI Hub Server and BI Hub Agents and its respective BI platforms should be also configured with proper SSL. You cannot access http content from the https protocol. Browser will throw the mixed content error, if you try to access http content from the https URL.
:::
-->