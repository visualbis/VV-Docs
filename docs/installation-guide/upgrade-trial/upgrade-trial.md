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

* For BI Hub Server, you will be prompted to stop the backend instances to proceed with the update.
   <div>
     <Zoom>
       <img alt="Stop backend instances" src={useBaseUrl('/doc-images/installation-guide/stop-backend-instance.png')}/>
     </Zoom>
   </div>
* Click **Next**. Go to the **Instances** tab in the **Config utility** and stop ( <img src="/static/doc-images/installation-guide/stop.svg" height="18" width="12"/> ) all the running *instances*.

   <div>
     <Zoom>
       <img alt="BI Hub Server instances" src={useBaseUrl('/doc-images/installation-guide/bihub-server-instances.png')}/>
     </Zoom>
   </div>

   *BI Hub Server instances*

:::warning
Ensure all the instances listed in the *Config utility* are stopped before proceeding.
The below screenshot indicates the above *Backend* instance is stopped and the *Play* button ( <img src="/static/doc-images/installation-guide/start.svg" height="18"/> ) is now highlighted.
   <div>
     <Zoom>
       <img alt="BI Hub Server instances" src={useBaseUrl('/doc-images/installation-guide/stopped-instances.png')}/>
     </Zoom>
   </div>

:::

:::note
Close the **Config utility** after you stop the backend instances before you proceed with the installer, if not an error will be thrown during the upgrade.
:::

* Click **Next** to complete the upgrade process.

:::note
No *Port* number should be asked during the upgrade. If you are prompted for the *port* number, kindly contact the support team at support@bihub.com.
:::