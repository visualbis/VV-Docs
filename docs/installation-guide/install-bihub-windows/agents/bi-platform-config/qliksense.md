---
id: qliksense
sidebar_label: QLIKSENSE
title: QlikSense Platform Configuration
---

import useBaseUrl from "@docusaurus/useBaseUrl";
import Link from '@docusaurus/Link';
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

Below are the steps to generate certificates:

* Log in to Qlik Sense QMC as an administrator.
* In the left side menu bar click Certificates menu under the configure system menu sections.

<div style={{textAlign: 'center'}}>
  <Zoom>
<img alt="img" src={useBaseUrl('/doc-images/qliksense/qlicksense-governance.png')}/>
  </Zoom>
</ div>

* Certificate generation form opens.

* Click on Add machine name to which the certificate needs to be generated.

* In the export file format for certificate dropdown, select platform independent PEM-format.

* Fill in other additional optional fields, but it’s not necessary.

* Click export certificate button in the bottom.

<div style={{textAlign: 'center'}}>
  <Zoom>
<img alt="certificates" src={useBaseUrl('/doc-images/qliksense/certificates.png')}/>
  </Zoom>
</ div>

* The certificate will be generated and will be exported to the location shown in that form itself.

* Now copy and paste that certificates to the agent installed machine into the directory `<installation location>/TRUSTED` directory.
