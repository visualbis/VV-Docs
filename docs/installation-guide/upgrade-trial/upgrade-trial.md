---
id: upgrade-trial
title: Upgrade Of BI Hub
sidebar_label: Upgrade of BI Hub
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Link from '@docusaurus/Link';

The user can upgrade the trial version to either the production version or extend the trial period.

## Upgrade from the previous version to the new version

* <Link to={useBaseUrl('docs/installation-guide/download-bihub')}>Download</Link> and install the latest versions of BI Hub Web, BI Hub Server, and BI Hub agents.
* Double click on the `<desired agent name>Agent-X.X.X-windows-installer.exe` file to start the upgrade process.
* The installer pops up with a *Setup* screen with the message that indicates that a previous version is already running, if you wish to proceed with the upgraded installer. Click **Next**.
   <div>
     <Zoom>
       <img alt="Upgrade BI Hub setup screen" src={useBaseUrl('/doc-images/installation-guide/upgrade-confirm.png')}/>
     </Zoom>
   </div>

   *Confirm to upgrade BI Hub version*
* Read through the license terms and conditions and click **Next** to continue with the upgrade.
* On the next screen click **Next** to confirm the upgrade from the current version to the new version.
* A successful upgrade screen provides options to open the Readme file.

Similar steps need to be followed for all other agents, BI Hub Web and BI Hub Server.

* For BI Hub Server, you will be prompted to stop the backend to proceed with the update.
   <div>
     <Zoom>
       <img alt="Stop backend instances" src={useBaseUrl('/doc-images/installation-guide/stop-backend-instance.png')}/>
     </Zoom>
   </div>
* Click **Next** and stop the backend in the **Config utility**. 
  Close the **Config utility** after you stop the backend server before you proceed with the installer, if not an error will be thrown during the upgrade.
* Click **Next** to complete the upgrade process.

:::note
No *Port* number should be asked during the upgrade. If you are prompted for the *port* number, kindly contact the support team at support@bihub.com.
:::

## Upgrade from trial to production

Follow the steps below to upgrade from trial to production:
1. Contact Visual BI support team support@bihub.com by raising a ticket to upgrade the trial version.
1. Contact the Sales representative to purchase the new order, Licensing of the new BI Hub version.
1. The application can be checked for the updated license.

## Extend the trial period

Follow the steps below to extend the trial period of the BI Hub application:

1. For any further questions or queries contact the Visual BI sales team at sales@bihub.com. Raise a ticket requesting for an extension in the trial period with a valid reason.
1. Note that the trial period will be extended only if the reason for the extension is valid.
1. The support team will work on extending the trial and send a confirmation email.
1. BI Hub can be used with the extended trial period.