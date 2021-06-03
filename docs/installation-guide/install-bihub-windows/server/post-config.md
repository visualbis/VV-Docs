---
id: post-config
title: Post Configuration Steps
sidebar_label: Post Configuration Steps
---

import useBaseUrl from "@docusaurus/useBaseUrl";
import Link from '@docusaurus/Link';
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

To verify the successful installation and configuration of BI Hub Server, perform the following steps.

* Open any browser in the server.
* If SSL is enabled, go to URL `https://<hostname>:<instance_port>`
* If SSL is not enabled, go to URL `http://<hostname>:<instance_port>`
* The welcome webpage confirms successful installation and configuration of BI Hub Server as shown in the image below:

  <div class="center">
    <Zoom>
      <img alt="BI Hub Server Verification Screen" src={useBaseUrl('/doc-images/installation-guide/bihub-web-welcome-verification.png')}/>
    </Zoom>
    <p>BI Hub Server Verification Screen</p>
  </div>

:white_check_mark: **BI Hub Server** is successfully installed and verified.

### Next Steps

* [ ] <Link to={useBaseUrl('docs/installation-guide/install-bihub-windows/web/install')}>Install BI Hub Web</Link>.

:::note

* Verify all the instances are in running state by following the above-mentioned steps
* After a restart, the server takes a bit longer time to warm up the first time. Kindly be patient.
:::
