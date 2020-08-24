---
id: install
title: Installation of BI Hub Server
---

import useBaseUrl from "@docusaurus/useBaseUrl";
import Link from '@docusaurus/Link';
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

The recommended Port Requirements for the different Components have been listed in the Table below:

| Component      | Default Port |
| -------------- | ------------ |
| Elastic Search | 9443         |
| Rabbit         | MQ5672       |

*Table 3.1: Port Requirements for Components*

Follow the steps below to activate the license and install the BI Hub Server.

1. Double Click on the **BIHubServer-X.X.X-windows-installer.exe** file to start the installation process.

1. Click Next in the startup page.

1. Read through the license terms and conditions. To proceed further accept the license terms and click next to continue.

1. In the Component Selection screen, select MySQL component to install bundled MySQL Database. If you have your own Database, Click next to continue to the Directory Selection screen without selecting MySQL component.

1. In the Directory Selection screen, choose the directory to install BI Hub Server. The default directory is `C:\Program Files\Visual BI Solutions\BI Hub\BIHubServer`

1. Select the preferred activation step and click Next

   - *Online Mode* - Choose this option if this machine is connected to internet. If this machine is behind the firewall, make sure to whitelist the URL https://products.visualbi.com. If the installer can reach the BI Hub activation server, then it will navigate to the next screen.

   - *Offline Mode* - Choose this option if this machine is not connected to internet. License can be activated offline.

1. If Offline mode is chosen, continue with this step, else skip to Step 12. The next screen will give a unique activation key for this installation instance. Open https://products.visualbi.com/license-generator (Refer Fig:3.1) in another computer which has internet connection. In that page, type the contact email address, the license key that was provided during BI Hub download and copy paste the activation key generated into the Key code box.

   <div>
     <Zoom>
       <img alt="img" src={useBaseUrl('/doc-images/fig3.1-licence-generator.png')}/>
     </Zoom>
   </div>

   *Figure 3.1: Offline License Generator Webpage*

1. Click Download file button which will generate the license.licx file and prompt to download the file.

1. Download the file and copy paste it to the system where the installer is currently running. Then click next button in the installer which will prompt to select the generated license file. 

1. Browse for the downloaded license file and select the correct license file. This file is valid only for the current installation. It cannot be reused for another fresh installation in another machine or same machine.

1. On clicking next, selected license file will be verified and on successful verification the next screen is shown. Skip the next step and go to step number 13.

1. In the next screen, fill out license information in its respective box. On clicking next, installer will try to activate your license with the information provided. On successful validation, next screen is shown.

1. If MySQL component is selected in Step:4,provide port and root user password details.

1. In the next screen, Elastic Search user details should be provided which is used later to connect Elastic search with BI Hub Server. Kindly save the details which will be required while configuring the BI Hub Server in the section 3.1.2.1.5

1. After that Elastic Search port configuration will be prompted by the installer. Kindly use the ports which are free or leave the default value. Kindly save the details which will be required while configuring the BI Hub Server in the section 3.1.2.1.5

1. The next screen provides details of installation. Clicking next button will start to install the BI Hub Server with all the selected components.

1. Kindly wait for the installation to finish. After successful installation, the final screen provides options to Open Readme file and to Open BI Hub Server Configuration Utility. After viewing the readme file, proceed with the Configuration utility in Section 3.1.2 

1. Click finish with necessary option.

You have successfully installed the BI Hub Server in your server.

To configure and start the BI Hub Server you can follow the next section in this Installation Guide.
