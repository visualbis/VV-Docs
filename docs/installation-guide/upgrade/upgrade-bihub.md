---
id: upgrade-bihub
title: Upgrade Of BI Hub
sidebar_label: Upgrade of BI Hub
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Link from '@docusaurus/Link';
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

The user can upgrade the trial version to either the production version or extend the trial period.

## Upgrade from the previous version to the new version

* <Link to={useBaseUrl('docs/installation-guide/download-bihub')}>Download</Link> the latest versions of BI Hub Web, BI Hub Server, and BI Hub agents.
* Double click on the `<desired agent name>Agent-X.X.X-windows-installer.exe` file to start the upgrade process.
* The installer pops up with a *Setup* screen with the message that indicates that a previous version is already running. If you wish to proceed, click **Next**.
   <div class="center">
     <Zoom>
       <img alt="Upgrade BI Hub setup screen" src={useBaseUrl('/doc-images/installation-guide/upgrade-confirm.png')}/>
     </Zoom>
   <p>Confirm to upgrade BI Hub version</p>
   </div>

* Read through the license agreement and accept the terms before proceeding with the upgrade.
* On the next screen click **Next** to confirm the upgrade from the current version to the new version.
* A successful upgrade screen provides options to open the Readme file.

Similar steps need to be followed for all other agents and BI Hub Web. For BI Hub Server however, we have a couple of extra steps:

  1. We need to stop the backend instances before upgrading.
   <div class="center">
     <Zoom>
       <img alt="Stop backend instances" src={useBaseUrl('/doc-images/installation-guide/stop-backend-instance.png')}/>
     </Zoom>
   </div>

* Click **Next**. Go to the **Instances** tab in the **Config utility** and stop ( ![icon](/doc-images/installation-guide/stop.svg) ) all the running *instances*.

   <div class="center">
     <Zoom>
       <img alt="BI Hub Server instances" src={useBaseUrl('/doc-images/installation-guide/bihub-server-instances.png')}/>
     </Zoom>
   <p>BI Hub Server instances</p>
   </div>


:::warning
Ensure all the instances listed in the *Config utility* are stopped before proceeding.
The below screenshot indicates the above *Backend* instance is stopped and the *Play* button ( ![icon](/doc-images/installation-guide/start.svg ) ) is now highlighted.

   <div class="center">
     <Zoom>
       <img alt="BI Hub Server instances" src={useBaseUrl('/doc-images/installation-guide/stopped-instances.png')}/>
     </Zoom>
   </div>
:::

:::note
Close the **Config utility** after you stop the backend instances before you proceed with the installer, if not an error will be thrown during the upgrade.
:::

* Click **Next** to start the upgrade process.
* On successful upgrade, you will be prompted to open the *Config utility* and the *Readme* file. 
* Restart all the backend instances in the *Config utility* one by one.

:::note
Give some time before starting every instance. Do not immediately start one after the other.
:::

:::note
No *Port* number should be asked during the upgrade. If you are prompted for the *port* number, kindly contact the support team at support@bihub.com.
:::
