---
id: post-config
title: Post Configuration Steps
sidebar_label: Post Configuration Steps
---

import useBaseUrl from "@docusaurus/useBaseUrl";
import Link from '@docusaurus/Link';
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

To verify the successful installation and configuration of BI Hub Server,  perform the following steps.

* Open any browser in the server.
* If SSL is enabled, go to URL `https://<hostname>:<instance_port>`
* If SSL is not enabled, go to URL `http://<hostname>:<instance_port>`
* The webpage with the message Welcome to BI Hub as shown in the figure below should appear.

  <div style={{textAlign: 'center'}}>
    <Zoom>
      <img alt="BI Hub Server Verification Screen" src={useBaseUrl('/doc-images/installation-guide/bihub-web-welcome-verification.png')}/>
    </Zoom>
  </div>

*BI Hub Server Verification Screen*

:::success
The webpage shown indicates that you have successfully completed the BI Hub server installation and configuration.
:::

The next component to be installed is, BI Hub Web, which is explained in the section <Link to={useBaseUrl('docs/installation-guide/install-bihub-windows/web/install')}>Installation of BI Hub Web</Link>

:::note
- Verify all the instances are in running state by following the above mentioned steps
- After a restart, the server takes a bit longer time to warm up the first time. Kindly be patient.
:::