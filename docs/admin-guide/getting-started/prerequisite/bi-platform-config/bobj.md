---
id: bobj
title: BOBJ Platform Configuration
sidebar_label: BOBJ
---

import useBaseUrl from "@docusaurus/useBaseUrl";
import Link from '@docusaurus/Link';
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

1. BOBJ Agent uses the Trusted Secret Key file mechanism to authenticate itself with the BOBJ. For this we need to generate and download the Trusted Secret Key for BOBJ authentication. Kindly follow the steps below:
 - Login to the BOBJ CMC
 - In the Central Management Console Screen, select Authentication from the top down list.
 - Select Enterprise from the menu list.

 <div style={{textAlign: 'center'}}>
  <Zoom>
    <img alt="img" src={useBaseUrl('/doc-images/bobj-central-management-console.png')}/>
  </Zoom>
 </div>

 - Next scroll down to the Trusted Authentication segment and enable the checkbox “Trusted Authentication is enabled”.

 <div style={{textAlign: 'center'}}>
  <Zoom>
    <img alt="img" src={useBaseUrl('/doc-images/bobj-trusted1.png')}/>
  </Zoom>
 </ div>

 - Next select New Shared Secret and click Download Shared Secret.

 <div style={{textAlign: 'center'}}>
  <Zoom>
    <img alt="img" src={useBaseUrl('/doc-images/bobj-trusted2.png')}/>
  </Zoom>
 </ div>

 <div style={{textAlign: 'center'}}>
  <Zoom>
    <img alt="img" src={useBaseUrl('/doc-images/bobj-trusted3.png')}/>
  </Zoom>
 </ div>

:::success
The *TrustedPrinciple.conf* will get downloaded. 
:::

<!-- Obselete step ? Confirm with Nithya 
1. Next, we need to disable the CORS settings by editing the *crossdomain.xml* file.
 Location of the *crossdomain.xml* file: `<Business Objects installation directory>\Tomcat55\webapps\ROOT\`.

 Change the following section.

 ```bash
 <?xml version="1.0"?>

 <!DOCTYPE cross-domain-policy SYSTEM "http://www.macromedia.com/xml/dtds/cross-domain-policy.dtd">

 -<cross-domain-policy>

 <allow-http-request-headers-from secure="true" headers="*" domain="*"/>

 <allow-access-from secure="true" domain="*"/>

 </cross-domain-policy>

 ```

Save the file after making changes and proceed to the next step.


3. Next we need to make the dashboards and reports in iframe compatibility (Web standards).
Create a folder 'w3c' in `<Business Objects Installation directory>\Tomcat55\webapps\>`.

Create file *p3p.xml* in the folder with the following code in it.

```xml

<META>

<POLICY-REFERENCES>

  <POLICY-REF about="/w3c/policy.xml">

    <INCLUDE>/</INCLUDE>

      <COOKIE-INCLUDE/>

  </POLICY-REF>

</POLICY-REFERENCES>

</META>
```

Save the file and restart the Apache Tomcat server.
-->

:::note
Copy the *TrustedPrinciple.conf* file to the `<agent installation location>/TRUSTED/` directory to ensure that the BOBJ instance is started.
:::
