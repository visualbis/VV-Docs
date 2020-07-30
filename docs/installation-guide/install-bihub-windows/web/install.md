---
id: install
title: Installation of BI Hub Web
sidebar_label: Installation of BI Hub Web
---

import useBaseUrl from '@docusaurus/useBaseUrl';

Follow the steps below to install and configure the BI Hub Web.

:::note
Kindly make sure whether you have installed BI Hub Server and configured at least one instance of BI Hub Server in running state.
:::

1. Double Click on the VBIViewWeb-X.X.X-windows-installer.exe file to start the installation process.

2. Click Next in the startup page.

3. Read through the license terms and conditions. To proceed further accept the license terms and click next to continue.

4. In the next screen provide the DNS resolvable URL and port details of BI Hub Server instance.This URL should be accessed by the Users (i.e., External URL of the BI Hub Server).

5. In the next Component Selection screen, select BI Hub Web with NGINX if you prefer the bundled NGINX webserver. If you have your own webserver then select BI Hub Web without NGINX component. You cannot select both the components.

6. In the Directory Selection screen, choose the directory to install BI Hub Server. The default directory is C:\Program Files\Visual BI Solutions\BI Hub\VBIViewWeb. If you have chosen BI Hub Web without NGINX version, then kindly make sure that you choose the web root directory of your webserver. For example in Apache the directory should be `<Apache installation directory>/htdocs`. In Nginx the directory should be `<Nginx Installation directory>/html`

7. If you have chosen bundled NGINX webserver to be installed,you will be shown a NGINX port details screen. Accept the default port or else provide your own port details.

8. The next screen provides details of installation. Clicking next button will start to install the BI Hub Web with all the selected components.

9. Kindly wait for the installation to finish. After successful installation, the final screen provides options to Open Readme file

You have successfully installed and configured the BI Hub Web in your server.

:::info
As of now, BI Hub Web has been configured with basic default configuration. If you want to do advanced configuration, kindly follow the next section of the document.
:::