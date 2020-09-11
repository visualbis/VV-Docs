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
      <img alt="BI Hub Server Verification Screen" src={useBaseUrl('doc-images/welcome.png')}/>
    </Zoom>
  </div>

*Figure 3.2: BI Hub Server Verification Screen*

If the above webpage is seen, then BI Hub server installation and configuration is successfully completed.

The next component to be installed is, BI Hub Web, which is explained in the section <Link to={useBaseUrl('docs/installation-guide/install-bihub-windows/web/install')}>Installation of BI Hub Web</Link>

