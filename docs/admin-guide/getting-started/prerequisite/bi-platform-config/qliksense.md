---
id: qliksense
sidebar_label: QLIKSENSE
title: QlikSense Platform Configuration
---

import useBaseUrl from "@docusaurus/useBaseUrl";
import Link from '@docusaurus/Link';
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

Follow the below steps to **Generate Qliksense Certificates**:

1. Log in to **Qlik Sense QMC** as an *Administrator*.
1. In the **Configure System** menu on the left, click **Certificates**.

 <div style={{textAlign: 'center'}}>
  <Zoom>
    <img alt="img" src={useBaseUrl('/doc-images/qliksense/qlicksense-governance.png')}/>
  </Zoom>
 </ div>

1. In the **Certificates** generation window click **Add machine name**.

 <div style={{textAlign: 'center'}}>
  <Zoom>
    <img alt="certificates" src={useBaseUrl('/doc-images/qliksense/certificates.png')}/>
  </Zoom>
 </ div>

  - Select **Platform Independent PEM-format** in the **Export file format for certificates** drop-down list.
  - Fill in the other additional optional fields.
  - Click **Export certificates**.

* The certificate files will be generated and will be exported to the location shown in that form itself.
> Here is a list of the files that will be generated-
> * client.pem
> * client_key.pem
> * root.pem
> * server.pem
> * server_key.pem
* Copy and paste these certificate files in the `<installation location>/TRUSTED` directory.

:::important
These certificate files are needed to start the Qliksense agent.
:::
