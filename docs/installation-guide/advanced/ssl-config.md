---
id: ssl-config
title: SSL Configuration
sidebar_label: SSL Configuration
---

This section explains the steps to *configure the SSL*, if you have installed *BI Hub Web with Nginx*.

:::note
If you have installed BI Hub Web without Nginx, then configuring SSL will be out of the scope for this document. 
:::

By default,the bundled Nginx will contain the self-signed SSL certificate issued to example.com. Kindly have the proper SSL certificate from the authorized vendor in .crt format and key file. You can also have your own Self-Signed SSL certificate, but you need to make sure that certificate to a trusted certificate store by following the configuration steps provided by the particular browser which is out of scope for this document. BI Hub recommends having the proper SSL certificate from the authorized vendor.

1. Rename the SSL files to the required names. The X.X.X.X.crt file should be renamed to `server.crt` file and the `X.X.X.X.key` file should be renamed to `server.key`.
1. Take a backup of the `server.crt` and `server.key` files which could be found in the folder location `<installation_folder>/VBIViewWeb/nginx/nginx/conf`. In case of any failure in SSL configuration, we will need this file to bring back the server to normal working condition.
1. Now replace these files with your SSL files.
1. Nginx Server needs to be restarted for the configuration to take effect. For restarting the Nginx server, open `manager-windows.exe` file in administrator mode which could be found in the location `<installation_folder>/VBIViewWeb/nginx/`.
1. Select **Manage Server > Nginx** and click **Restart**. Wait for the server to get restarted.
   
:white_check_mark: SSL is configured successfully for your BI Hub Web.

:::note
  - If there is any problem in restarting the server, check the log files for the errors which could be found at `<installation_folder>/VBIViewWeb/nginx/nginx/logs/`.
  - If you couldn’t troubleshoot the errors, kindly replace the old SSL file with the new one and restart the server.
  - If the server starts successfully, then the problem will be mostly with the SSL file. Kindly verify the SSL certificate format and have a proper SSL format.

If you continue to have the problem, you could raise the support ticket in the support portal or by sending an email to support@visualbi.comwith supported log files and error images.
:::

:::important
If you are going to configure SSL, please make sure that BI Hub Server and BI Hub Agents and its respective BI platforms should also be configured with proper SSL. You cannot access HTTP content from the https protocol. The browser will throw the mixed content error if you try to access HTTP content from the https URL.
:::