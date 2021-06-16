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

1. Mapping Windows AD users:

* In MicroStrategy Developer, select expand the **Administration** section.
* In the right-hand side window, select **User Manager**.
* Right-click on each user and select **Edit**.

  <div class="center">
    <Zoom>
      <img alt="Microstrategy Developer" src={useBaseUrl('/doc-images/microstrategy/microstrategy-developer.png')}/>
    </Zoom>
  </div>

* In the User Editor window, from the **Authentication** menu select **Metadata**.
* In the **Link Windows user** section on the right-hand side, select **Browse** to chose the corresponding Windows AD user.

  <div class="center">
    <Zoom>
      <img alt="User Editor" src={useBaseUrl('/doc-images/microstrategy/user-editor.png')}/>
    </Zoom>
  </div>

2. Create a Group Policy object for Internet Explorer:
  
* In Group Policy Management window, go to **User Configuration > Administrative Templates > Windows Components > Internet Explorer > Internet Control Panel > Security Page > Site to Zone Assignment List**.
  
  <div class="center">
    <Zoom>
      <img alt="" src={useBaseUrl('/doc-images/microstrategy/site-zone-assign.png')}/>
    </Zoom>
  	<p>Site to Zone Assignment List</p>
  </div>

* Select the **Enabled** option.
* Next, select the **Show** button.
* Add MicroStrategy Server URL in the **Value Name** field and 2 in the **Value** field to mark it as a trusted Server.

  <div class="center">
    <Zoom>
      <img alt="Show Content" src={useBaseUrl('/doc-images/microstrategy/show-content.png')}/>
    </Zoom>
  </ div>

* Go to Windows **Control Panel > Internet Options > Advanced** tab.
* Enable the *Enable Integrated Windows Authentication* option and select **OK**.

  <div class="center">
    <Zoom>
      <img alt="IE properties" src={useBaseUrl('/doc-images/microstrategy/internet-properties.png')}/>
    </Zoom>
  </div>

* Select **MicroStrategy Web Administrator > Default Properties** option.

<div class="center">
  <Zoom>
<img alt="Admin page" src={useBaseUrl('/doc-images/microstrategy/admin-page.png')}/>
  </Zoom>
</ div>

* In the **Login** section on the right, enable **Windows Authentication** and make it the default authentication.
* Un-check all the other login mode options.
* In the **Trusted Authentication Providers** option, select **Custom SSO** from the drop-down list.

Restart the server for the changes to take place.

:::note
It is recommended to do the above configuration in IIS Server.
:::
