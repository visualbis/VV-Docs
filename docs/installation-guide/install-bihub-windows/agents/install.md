---
id: install
sidebar_label: BI Hub Agents Installation
title: BI Hub Agents Installation
---

import useBaseUrl from "@docusaurus/useBaseUrl";
import Link from '@docusaurus/Link';
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

This section is applicable and the same for all the agents which are being released and supported by BI Hub.
Download the required agents from the product downloads page as covered in the <Link to={useBaseUrl('docs/installation-guide/download-bihub')}>BI Hub Download section</Link>.

Follow the steps below to install and configure the BI Hub Agents:

1. Double click on the `<desired agent name>Agent-X.X.X-windows-installer.exe` file to start the installation process.
1. Click **Next** in the startup page.
1. Read through the license terms and conditions and click **Next** to continue with the installation.
1. In the **Directory Selection** screen, choose the directory to install BI Hub Agent.  The default directory is `C:\Program Files\Visual BI Solutions\VBI View\<installing agent name>Agent`.
1. In the **Agent Port** details screen, accept the default<sup>1</sup> *Port* number or enter your *Port* details.
:::note
The *Port* must be free and not used by other applications. 
Save the *Port* details to be used while configuring the agents in the <Link to={useBaseUrl('docs/admin-guide/getting-started/prerequisite/add-new-agent')}>BI Hub Administration Guide, Add New Agent</Link>.
:::
1. In the **Installation summary** screen, click **Next** to proceed with the installation.
1. A successful installation screen provides options to open the *Readme* file.

:white_check_mark: You have successfully installed **BI Hub Agent** in your Server.

:::info
Repeat all the above steps to install other required agents.
:::

:::note
<sup>1</sup>
The recommended Port Requirements for the different Platforms have been listed below:

| Platform      | Service Manager Port |
|:--------------|:---------------------|
| BOBJ          | 12100                |
| Tableau       | 12200                |
| Qlik          | 12300                |
| File          | 12400                |
| Power BI      | 12500                |
| SSRS          | 12600                |
| SpotFire      | 12700                |
| BOBJ Rest     | 12900                |
| SAC           | 13000                |
| Looker        | 13100                |
| SharePoint    | 13200                |
| One Drive     | 13300                |
| Qlik View     | 13400                |
| Cognos        | 13500                |
| Microstrategy | 13600                |

*Port Requirements for Platforms*
:::

## Next Steps

- [ ] Verify the Agent welcome page in the next section.
