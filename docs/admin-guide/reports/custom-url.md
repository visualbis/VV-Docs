---
id: custom-url
title: Custom URL
sidebar_label: Custom URL
---

import useBaseUrl from "@docusaurus/useBaseUrl";
import Link from '@docusaurus/Link';
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

The Admin User can create the Custom URL by navigating to the **Platforms Folder** Tab in Reports Menu (see Figure below).

  <div class="center">
    <Zoom>
      <img alt="Custom URL in Platforms Folder" src={useBaseUrl('doc-images/admin-guide/admin-functions/custom-url/csu1.png')}/>
    </Zoom>
  </div>

  *Custom URL in Platforms Folder*

For our example, click the URL icon and you will be navigated to the URL Folder as shown in the below Figure.
  <div class="center">
    <Zoom>
      <img alt="URL icon in Platforms Folder" src={useBaseUrl('doc-images/admin-guide/admin-functions/custom-url/csu2.png')}/>
    </Zoom>
  </div>

  *URL icon in Platforms Folder*

Now click the "+ Add" button and then click the "New URL" option (see Figure below).
  <div class="center">
    <Zoom>
      <img alt="Add New URL option" src={useBaseUrl('doc-images/admin-guide/admin-functions/custom-url/csu3.png')}/>
    </Zoom>
  </div>

*Add New URL option*

Now you will be navigated to the Add URL page as shown below.
  <div class="center">
    <Zoom>
      <img alt="Add URL Page" src={useBaseUrl('doc-images/admin-guide/admin-functions/custom-url/csu4.png')}/>
    </Zoom>
  </div>

  *Add URL Page*

For our example, set the following details in the Add URL page (see Figure above).

1. Name: Visual BI
1. URL: `<https://visualbi.com>`
1. Description: Visual BI website
1. Share with All (or) particular User/Group - Based on the respective selection, the Custom URL details can be viewed by all the users or specific user.
1. Enable the Live Embed option
1. Enable the Launch in New Tab option

:::note
When the "Live Embed" option is enabled for the Custom URL "Visual BI" in the Add URL page, then you will be able to view the loading page of the Custom URL "Visual BI" as a Thumbnail in the Home Page of the User screen while adding the Reports (see Figure below.)
:::

If the "Live Embed" option is disabled, then you will be able to view the Custom URL "Visual BI" as customized image or Report Thumbnail based on the settings.
  <div class="center">
    <Zoom>
      <img alt="Loading Page of the Custom URL in the Home Page of the User screen" src={useBaseUrl('doc-images/admin-guide/admin-functions/custom-url/lee1.png')}/>
    </Zoom>
  </div>

*Loading Page of the Custom URL in the Home Page of the User screen*

The URL can be also added to the Hub Folder. The URLs created by the Admin User can be viewed by the User in the BI Platfrom pane as shown in the below Figure.
  <div class="center">
    <Zoom>
      <img alt="URLs in BI Platform" src={useBaseUrl('doc-images/admin-guide/admin-functions/custom-url/crl1.png')}/>
    </Zoom>
  </div>

  *URLs in BI Platform*

You can also add the details for Image and Custom Fields Tabs as the process follows the similar steps given for the other platforms. Now click Submit and the Custom URL "Visual BI" will be updated successfully in the Platform Folders (see Figure below).
  <div class="center">
    <Zoom>
      <img alt="Custom URL in Platform Folders" src={useBaseUrl('doc-images/admin-guide/admin-functions/custom-url/csu5.png')}/>
    </Zoom>
  </div>

  *Custom URL in Platform Folders*

The Admin User can also edit the Custom URL by clicking the Edit icon as shown below.
  <div class="center">
    <Zoom>
      <img alt="Edit Custom URL" src={useBaseUrl('doc-images/admin-guide/admin-functions/custom-url/csu5a.png')}/>
    </Zoom>
  </div>

  *Edit Custom URL*

In a similar method, the Custom URL can be also created by the Users and the process for the same has been explained in the BI Hub User Guide.

Also it is to be noted that when the "Launch in New Tab" option is enabled for the Custom URL “Visual BI” in the Add URL page, then the Custom URL will be always opened as a new Browser Tab for the user. When the “Launch In New Tab” option is disabled, then the Custom URL will not be opened as a Browser Tab for the user.
