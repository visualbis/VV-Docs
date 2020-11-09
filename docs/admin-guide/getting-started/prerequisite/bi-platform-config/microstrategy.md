---
id: microstrategy
sidebar_label: MICROSTRATEGY
title: Microstrategy Platform Configuration
---

import useBaseUrl from "@docusaurus/useBaseUrl";
import Link from '@docusaurus/Link';
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

To access MicroStrategy reports through BI Hub, SSO should be configured and enabled in the MicroStrategy Platform as the only authentication mode.

The following steps are to be followed to achieve the same:

* Mapping Windows AD users:
  - In MicroStrategy Developer, select a user group under **Administration > User Manager**, right-click on each user and select Edit

  <div style={{textAlign: 'center'}}>
    <Zoom>
      <img alt="Microstrategy Developer" src={useBaseUrl('/doc-images/microstrategy/microstrategy-developer.png')}/>
    </Zoom>
  </div>
  - Go to **Authentication > Metadata** and select the corresponding Windows AD user in the Link Windows user section

  <div style={{textAlign: 'center'}}>
    <Zoom>
      <img alt="User Editor" src={useBaseUrl('/doc-images/microstrategy/user-editor.png')}/>
    </Zoom>
  </div>

* Create a Group Policy object for Internet Explorer:
  - In the Group Policy Management, go to **User Configuration > Administrative Templates > Windows Components > Internet Explorer > Internet Control Panel > Security Page > Site** to Zone Assignment List and Enable Site to Zone Assignment list as in the screenshot

  <div style={{textAlign: 'center'}}>
    <Zoom>
      <img alt="" src={useBaseUrl('/doc-images/microstrategy/site-zone-assign.png')}/>
    </Zoom>
  </div>

  *Figure: Site to Zone Assignment List*

  - Click on the show button and add MicroStrategy Server URL in Value Name and 2 in value to mark it as a trusted Server

  <div style={{textAlign: 'center'}}>
    <Zoom>
      <img alt="Show Content" src={useBaseUrl('/doc-images/microstrategy/show-content.png')}/>
    </Zoom>
  </ div>

* In Windows **Control Panel > Internet Options >Advanced**, check Enable Integrated Windows Authentication

  <div style={{textAlign: 'center'}}>
    <Zoom>
      <img alt="IE properties" src={useBaseUrl('/doc-images/microstrategy/internet-properties.png')}/>
    </Zoom>
  </div>

* In **MicroStrategy Web Administrator > Default Properties**, Enable the Windows Authentication and make it default and un-check all the other login mode and change the '‘Trusted Authentication Providers' to Custom SSO

<div style={{textAlign: 'center'}}>
  <Zoom>
<img alt="Admin page" src={useBaseUrl('/doc-images/microstrategy/admin-page.png')}/>
  </Zoom>
</ div>

* Restart the server for the changes to take place.

:::note
It is recommended to do the above configuration in IIS Server.
:::
