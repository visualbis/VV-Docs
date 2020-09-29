---
id: install
title: Installation of BI Hub Server
---

import useBaseUrl from "@docusaurus/useBaseUrl";
import Link from '@docusaurus/Link';
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

<!-- 
The recommended Port Requirements for the different Components have been listed in the Table below:

| Component      | Default Port |
|----------------|--------------|
| Elastic Search | 9443         |
| Rabbit MQ      | 5672         |

*Table: Port Requirements for Components*
-->
Follow the steps below to install the BI Hub Server:

1. Double click on the downloaded executable installer **BIHubServer-X.X.X-windows-installer.exe** file to start the installation process.
1. Click **Next** in the **Startup Info** page.
1. Read through the license terms and conditions. To proceed further accept the license terms and click next to continue.
1. In the next **Component Selection** screen - 
   - If you want to install the bundled *MySql database*, select **MySQL component** 
   - If you have your database, click **Next** to continue to the **Directory Selection** screen
1. In the Directory Selection screen, choose the directory to install BI Hub Server. The default directory is `C:\Program Files\Visual BI Solutions\BI Hub\BIHubServer`.
1. Select the preferred License activation step and click Next
   - *Online Mode* - Choose this option if this machine is connected to internet. If this machine is behind the firewall, make sure to whitelist the URL https://products.visualbi.com. If the installer can reach the BI Hub activation server, then it will navigate to the next screen.
   - *Offline Mode* - Choose this option if this machine is not connected to internet. License can be activated offline.
1. If *Offline mode* is chosen, continue with this step, else skip to Step 12. The next screen will give a unique activation key for this installation instance. Open https://products.visualbi.com/license-generator (Refer the screenshot below) in another computer which has internet connection. In that page, type the registered email address, the license key, and copy paste the activation key generated into the Key code box.
   <div>
     <Zoom>
       <img alt="img" src={useBaseUrl('/doc-images/fig3.1-licence-generator.png')}/>
     </Zoom>
   </div>

   *Figure: Offline License Generator Webpage*
1. Click the **Download file** button which will generate the `license.licx` file and prompt you to download the file on your system.
1. Download the file and copy-paste it to the system where the installer is currently running. Then click  the **Next** button in the installer which will prompt you to select the generated license file. 
1. Browse and select the correct downloaded license file. 
   :::note
   This file is valid only for the current installation, it cannot be reused for another fresh installation in another machine or same machine.
   :::
1. On clicking **Next**, the selected license file will be verified and on successful verification the next screen is shown. Skip the next step and go to step number 13.
1. In the next screen, fill out license information in its respective box. On clicking next, the installer will try to activate your license with the information provided. On successful validation, the next screen is shown.
1. If MySQL component is selected in Step:4, provide **Port** and **Root user password** details.
2. In the next screen, Elastic Search user details should be provided which is used later to connect Elastic search with BI Hub Server. Kindly save the details which will be required while configuring the BI Hub Server.
3. After that Elastic Search port configuration will be prompted by the installer. Kindly use the ports which are free or leave the default value. Kindly save the details which will be required while configuring the BI Hub Server.
4. The next screen provides details of installation. Clicking **Next** button will start to install the BI Hub Server with all the selected components.
5. Kindly wait for the installation to finish. After successful installation, the final screen provides options to Open *Readme file* and to Open *BI Hub Server Configuration Utility*. After viewing the readme file, proceed with the Configuration utility.
6. Click finish with the necessary option.

:::success
You have successfully installed the BI Hub Server.
:::

To configure and start the BI Hub Server you can follow the next section in this Installation Guide.
