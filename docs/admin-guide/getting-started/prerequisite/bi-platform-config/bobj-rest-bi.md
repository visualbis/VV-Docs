---
id: bobj-rest-bi 
title: BOBJ REST BI Platform Configuration
sidebar_label: BOBJ Rest BI 
---

import useBaseUrl from "@docusaurus/useBaseUrl";
import Link from '@docusaurus/Link';
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

1. Launch **Central Management Console** and click on **Authentication**.

<div style={{textAlign: 'center'}}>
  <Zoom>
<img alt="Central Management Console screen" src={useBaseUrl('/doc-images/cms.png')}/>
  </Zoom>
</ div>

*Select Authentication in the Central Management Console screen*

* In the next screen, select **Authentication > Enterprise**.

<div style={{textAlign: 'center'}}>
  <Zoom>
<img alt="img" src={useBaseUrl('/doc-images/bobj-central-management-console.png')}/>
  </Zoom>
</ div>

* In the **Trusted Authentication** section, check the box against **Trusted Authentication is enabled**.

<div style={{textAlign: 'center'}}>
  <Zoom>
<img alt="img" src={useBaseUrl('/doc-images/bobj-trusted1.png')}/>
  </Zoom>
</ div>

* Click **New Shared Secret** to generate the shared secret key.

<div style={{textAlign: 'center'}}>
  <Zoom>
<img alt="img" src={useBaseUrl('/doc-images/bobj-trusted2.png')}/>
  </Zoom>
</ div>

* Click **Download Shared Secret**, and then click **Update**.

<div style={{textAlign: 'center'}}>
  <Zoom>
<img alt="img" src={useBaseUrl('/doc-images/bobj-trusted3.png')}/>
  </Zoom>
</ div>

* Copy the downloaded file `TrustedPrincipal.conf` to `<INSTALLDIR>\SAP BusinessObjects Enterprise XI 4.0\java\pjs\container\bin` in Windows.
* Also copy the same file *TrustedPrincipal.conf* to `INSTALLDIR>\SAP BusinessObjects Enterprise XI 4.0\win64_x64\` and `<INSTALLDIR>\SAP BusinessObjects Enterprise XI 4.0\win32_x86\` locations.

2. Next in **Central Management Console** select **Servers**, and expand  **Service Categories**. 
  - Click **Core Services** in the right pane.

<div style={{textAlign: 'center'}}>
  <Zoom>
<img alt="Service Categories > Core Services" src={useBaseUrl('/doc-images/core-services.png')}/>
  </Zoom>
</ div>

*Select Core Services*

  - In the *Server Name*, right-click **BISBX.WebApplicationContainerServer** and select *properties*.

<div style={{textAlign: 'center'}}>
  <Zoom>
<img alt="img" src={useBaseUrl('/doc-images/wac-services.png')}/>
  </Zoom>
</ div>

  - In the **Trusted Authentication Configuration**, set **Retrieving Method** as 'HTTP_HEADER' and **User Name Parameter** as 'X-SAP-VBI-TRUSTED-USER' or any other relevant name:

<div style={{textAlign: 'center'}}>
  <Zoom>
<img alt="Trusted Authentication Configuration" src={useBaseUrl('/doc-images/trusted-auth-config.png')}/>
  </Zoom>
</ div>

*Trusted Authentication Configuration parameters*

> Kindly note these parameters details to be used for the BOBJ REST Agent creation step.

3. Go to the location: `<BOBJ-Installation-Directory>\tomcat\webapps\BOE\WEB-INF\config\custom`.

 - Edit the `global.properties` file as shown below:
  
<div style={{textAlign: 'center'}}>
  <Zoom>
<img alt="Edit the global properties file" src={useBaseUrl('/doc-images/global-properties-edit.png')}/>
  </Zoom>
</ div>

*Global properties file content*

Click below to copy the content of the file:

  ```text
  sso.enabled=true 
  trusted.auth.user.retrieval=HTTP_HEADER 
  trusted.auth.user.param=X-SAP-VBI-TRUSTED-USER
  ```

:white_check_mark: BOBJ REST BI configured.
