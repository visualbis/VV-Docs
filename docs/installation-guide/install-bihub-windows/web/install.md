---
id: install
title: Installation of BI Hub Web
sidebar_label: Installation of BI Hub Web
---

import useBaseUrl from '@docusaurus/useBaseUrl';

Follow the below steps to install and configure the BI Hub Web.

:::note
Kindly make sure whether you have installed BI Hub Server and configured at least one instance of BI Hub Server in running state.
:::

1. Double Click on the BIHubWeb-X.X.X-windows-installer.exe file to start the installation process.
1. Click Next in the startup page.
1. Read through the license terms and conditions. To proceed further accept the license terms and click next to continue.
1. In the next screen provide the DNS resolvable URL and port details of the BI Hub Server instance.This URL should be accessed by the Users (i.e., External URL of the BI Hub Server).
:::note
The installation will not proceed if the URL is not accessible.
:::
1. In the next Component Selection screen, select BI Hub Web with NGINX if you prefer the bundled NGINX webserver. If you have your webserver like *Apache* or *Tomcat* then select BI Hub Web without NGINX component. You cannot select both components.
1. In the Directory Selection screen, choose the directory to install the BI Hub Server. The default directory is `C:\Program Files\Visual BI Solutions\BI Hub\BIHubWeb`. If you have chosen BI Hub Web without NGINX version, then kindly make sure that you choose the web root directory of your webserver. For example in Apache the directory should be `<Apache installation directory>/htdocs`. In Nginx the directory should be `<Nginx Installation directory>/html`
1. If you have chosen a bundled NGINX webserver to be installed,you will be shown an NGINX port details screen. Accept the default port or else provide your own port details.
1. The next screen provides details of installation. Clicking the **Next** button will start to install the BI Hub Web with all the selected components.
1. Kindly wait for the installation to finish. After successful installation, the final screen provides options to open the *Readme file*.

:::success
You have successfully installed and configured the BI Hub Web in your server.
:::

:::info
As of now, BI Hub Web has been configured with a basic default configuration. If you want to do advanced configuration, kindly follow the next section of the document.
:::