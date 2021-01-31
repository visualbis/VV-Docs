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
Following are the sequence of steps to install the BI Hub Server:

1. Double click the installer <Link to={useBaseUrl('docs/installation-guide/download-bihub')}>BIHubServer-X.X.X-windows-installer.exe</Link> file that you downloaded to start the installation process.
1. Click **Next** in the **Startup Info** page.
1. Read through the license terms and conditions. To proceed further accept the license terms and click next to continue.
1. In the next **Component Selection** screen:
   - Select **MySQL component** to install the bundled *MySql database*
   - Click **Next** to install your own database.
2. In the **Directory Selection** screen, choose the directory to install the BI Hub Server. The default directory is `C:\Program Files\Visual BI Solutions\VBI View\VBIViewServer`.
3. In the next **Message Queue** screen, enter the *Port number (default: 5672), Username*, and *Password* to be used in <Link to={useBaseUrl('docs/installation-guide/install-bihub-windows/server/config/config')}>BI Hub Server Configuration</Link>.
4. Select the preferred License activation step and click **Next**:
   - *Online Mode* - Choose this option if this machine is connected to the internet. If this machine is behind the firewall, make sure to whitelist the URL https://products.visualbi.com. If the installer can reach the BI Hub activation server, then it will navigate to the next screen.
   - *Offline Mode* - Choose this option if this machine is not connected to the internet. The license can be activated offline.
5.  If *Offline mode* is chosen, continue with this step, else skip to Step 12. The next screen will give a unique activation key for this installation instance. Open https://products.visualbi.com/license-generator (Refer the screenshot below) in another computer which has internet connection. In that page, type the registered email address, the license key, and copy & paste the activation key generated into the Key code box.
   <div class="center">
     <Zoom>
       <img alt="License File Generator" src={useBaseUrl('/doc-images/fig3.1-licence-generator.png')}/>
     </Zoom>
     <p>Offline License Generator Webpage</p>
   </div>

11. Click the **Download File** button that generates the `license.licx` file and prompt you to download the file on your system.
12. Download the file and save it on the system where the installer is currently running and click **Next**.
13. Browse and select the correct downloaded license file (`license.licx`). 
   :::note
   This file is valid only for the current installation, it cannot be reused for another fresh installation in another machine or same machine.
   :::
12. On clicking **Next**, the selected license file will be verified and on successful verification the next screen is shown. Skip the next step and go to step number 13.
13. In the next screen, fill out license information in its respective box. On clicking next, the installer will try to activate your license with the information provided. On successful validation, the next screen is shown.
14. If the MySQL component is selected in Step:4, Enter the **Port** and **Root user password** details.
    :::note
    The Root password must not contain special characters such as '@'.
    :::
15. Enter and save the **Elastic Search** user details that is used to <Link to={useBaseUrl('docs/installation-guide/install-bihub-windows/server/config/config-tab#elastic-search-section')}>connect Elastic search with BI Hub Server</Link>.
16. In the **Elastic Search Port Configuration**, either use the default value or use the ports which are free. Save the details to be used in configuring the BI Hub Server.
17. Click **Next** to install the BI Hub Server with all the selected components.
18. After successful installation, the final screen provides options to Open *Readme file* and to Open *BI Hub Server Configuration Utility*. After viewing the readme file, proceed with the Configuration utility.
19. Click **Finish** with the required option.

:white_check_mark: **BI Hub Server** is now installed.

### Next Steps

- [ ] Configure and start the BI Hub Server as described in the next section.