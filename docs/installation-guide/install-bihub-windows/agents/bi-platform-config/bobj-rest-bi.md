---
id: bobj-rest-bi 
title: BOBJ REST BI Platform Configuration
sidebar_label: BOBJ Rest BI 
---

import useBaseUrl from "@docusaurus/useBaseUrl";
import Link from '@docusaurus/Link';
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

* Launch Central Management Console.

* Go to Authentication Enterprise.

<div style={{textAlign: 'center'}}>
  <Zoom>
<img alt="img" src={useBaseUrl('/doc-images/cms.png')}/>
  </Zoom>
</ div>

<div style={{textAlign: 'center'}}>
  <Zoom>
<img alt="img" src={useBaseUrl('/doc-images/bobj-central-management-console.png')}/>
  </Zoom>
</ div>

* Under Trusted Authentication, check the box against Trusted Authentication is enabled.

<div style={{textAlign: 'center'}}>
  <Zoom>
<img alt="img" src={useBaseUrl('/doc-images/bobj-trusted1.png')}/>
  </Zoom>
</ div>

* Choose New Shared Secret.This will generate the shared secret key.

<div style={{textAlign: 'center'}}>
  <Zoom>
<img alt="img" src={useBaseUrl('/doc-images/bobj-trusted2.png')}/>
  </Zoom>
</ div>

* Choose Download Shared Secret and then Update.

<div style={{textAlign: 'center'}}>
  <Zoom>
<img alt="img" src={useBaseUrl('/doc-images/bobj-trusted3.png')}/>
  </Zoom>
</ div>

* Copy the downloaded file *TrustedPrincipal.conf* to `<INSTALLDIR>\SAP BusinessObjects Enterprise XI 4.0\java\pjs\container\bin` in Windows.

* Copy the downloaded file *TrustedPrincipal.conf* to `INSTALLDIR>\SAP BusinessObjects Enterprise XI 4.0\win64_x64\` and `<INSTALLDIR>\SAP BusinessObjects Enterprise XI 4.0\win32_x86\`

* Next in CMC go to **Servers -> Core Services -> WebApplicationContainerServer**

<div style={{textAlign: 'center'}}>
  <Zoom>
<img alt="img" src={useBaseUrl('/doc-images/core-services.png')}/>
  </Zoom>
</ div>

<div style={{textAlign: 'center'}}>
  <Zoom>
<img alt="img" src={useBaseUrl('/doc-images/wac-services.png')}/>
  </Zoom>
</ div>

* Now right click that WACS services and then select properties.

* In that properties, under Trusted Authentication Configuration set Retrieving Method as 'HTTP_HEADER' and User Name Parameter as 'X-SAP-VBI-TRUSTED-USER' or some other name that you want.

Kindly note this parameter name since it will be needed for BOBJ REST Agent creation step.

<div style={{textAlign: 'center'}}>
  <Zoom>
<img alt="img" src={useBaseUrl('/doc-images/trusted-auth-config.png')}/>
  </Zoom>
</ div>

