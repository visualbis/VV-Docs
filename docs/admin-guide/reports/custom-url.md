---
id: custom-url
title: Custom URL
sidebar_label: Custom URL
---

import useBaseUrl from "@docusaurus/useBaseUrl";
import Link from '@docusaurus/Link';
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

The Admin User can create the Custom URL by navigating to the **Platforms Folder** Tab in Reports Menu.

  <div class="center">
    <Zoom>
      <img alt="Custom URL in Platforms Folder" src={useBaseUrl('doc-images/admin-guide/admin-functions/custom-url/csu1.png')}/>
    </Zoom>
  </div>

* Select the **URL** icon.
* In the URL folder, select **+ Add**.

  <div class="center">
    <Zoom>
      <img alt="Add New URL option" src={useBaseUrl('doc-images/admin-guide/admin-functions/custom-url/csu3.png')}/>
    </Zoom>
  </div>

* From the drop-down list, select **New URL**.

  <div class="center">
    <Zoom>
      <img alt="Add URL Page" src={useBaseUrl('doc-images/admin-guide/admin-functions/custom-url/csu4.png')}/>
    </Zoom>
  </div>

  *Add URL Page*

In the **Add URL** page, enter the following details:

1. Name: Visual BI
1. URL: `<https://visualbi.com>`
1. Description: Visual BI website
1. Share with All (or) particular User/Group - Based on the respective selection, the Custom URL details can be viewed by all the users or specific users.
1. Enable the Live Embed option
1. Enable the Launch in New Tab option

:::note
When the "Live Embed" option is enabled for the Custom URL "Visual BI" in the Add URL page, then you will be able to view the loading page of the Custom URL "Visual BI" as a Thumbnail in the Home Page of the User screen while adding the Reports (as shown in the below screenshot.)
:::

If the "Live Embed" option is disabled, then you will be able to view the Custom URL "Visual BI" as customized image or Report Thumbnail based on the settings.
  <div class="center">
    <Zoom>
      <img alt="Loading Page of the Custom URL in the Home Page of the User screen" src={useBaseUrl('doc-images/admin-guide/admin-functions/custom-url/lee1.png')}/>
    </Zoom>
    <p>Loading Page of the Custom URL in the Home Page of the User screen</p>
  </div>

The URL can be also added to the Hub Folder. The URLs created by the Admin User can be viewed by the User in the BI Platform pane as shown below:

  <div class="center">
    <Zoom>
      <img alt="URLs in BI Platform" src={useBaseUrl('doc-images/admin-guide/admin-functions/custom-url/crl1.png')}/>
    </Zoom>
    <p>URLs in BI Platform</p>
  </div>

You can also add details for Image and Custom Fields Tabs just like other platforms.

* Select **Submit**.

Custom URL "Visual BI" will be updated successfully in the Platform Folders:

  <div class="center">
    <Zoom>
      <img alt="Custom URL in Platform Folders" src={useBaseUrl('doc-images/admin-guide/admin-functions/custom-url/csu5.png')}/>
    </Zoom>
    <p>Custom URL in Platform Folders</p>
  </div>

The Admin User can also edit the Custom URL by clicking the Edit icon as shown below.
  <div class="center">
    <Zoom>
      <img alt="Edit Custom URL" src={useBaseUrl('doc-images/admin-guide/admin-functions/custom-url/csu5a.png')}/>
    </Zoom>
  </div>

Similarly, users can also create custom URLs.

> If you enable the "Launch in New Tab" option for the Custom URL - “Visual BI”, then the Custom URL will always be opened as a new Browser Tab for the user.
