---
id: custom-url
title: Custom URL
sidebar_label: Custom URL
---

import useBaseUrl from "@docusaurus/useBaseUrl";
import Link from '@docusaurus/Link';
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

This page describes how to create a Custom URL, that is a shortcut to another website.

## Add a New URL

* Select the **Reports** menu from the left navigation pane.
* Select the **Platform Folders** tab
* Click **+ Add**, and then select **New URL**.

  <div class="center">
    <Zoom>
      <img alt="Add New URL option" src={useBaseUrl('doc-images/admin-guide/admin-functions/custom-url/csu3.png')}/>
    </Zoom>
  </div>

The **Add URL** page has 4 tabs - **Details, Thumbnail, Custom Fields**, and **History**.

### URL Details

General URL details with the following fields:
  <div class="center">
    <Zoom>
      <img alt="Add URL Page" width="400" src={useBaseUrl('doc-images/admin-guide/admin-functions/custom-url/csu4.png')}/>
    </Zoom>
    <p>Add a new url</p>
  </div>

* Name: A title for the URL
* URL: `<https://url.com>`
* Description: Short detail describing your url.
* Share with All (or) particular User/Group - Based on the respective selection, the Custom URL details can be viewed by all the users or specific users.
* Enable the **Live Embed** option, to view the loading page of the custom URL as a thumbnail in the Home Page of the User screen.

  <div class="center">
    <Zoom>
      <img alt="Loading Page of the Custom URL in the Home Page" src={useBaseUrl('doc-images/admin-guide/admin-functions/custom-url/live-embed-on-off.png')}/>
    </Zoom>
    <p>Custom URL preview screen with Live embed option enabled vs disabled</p>
  </div>

  When **Live Embed** is disabled, then the custom URL is displayed as a customized image or report thumbnail based on the settings.

* Enable the **Launch in New Tab** option, to open the report in a new browser tab.

### Customize the URL Thumbnail

In the **Thumbnail** tab you can customize the report preview screen.

  <div class="center">
    <Zoom>
      <img alt="Edit thumbnail" width="450" src={useBaseUrl('doc-images/admin-guide/admin-functions/custom-url/thumbnail.png')}/>
    </Zoom>
    <p>Edit the Thumbnail</p>
  </div>

### Edit the Custom Fields

You can edit the custom fields attributes for the URL.

  <div class="center">
    <Zoom>
      <img alt="Edit Custom Fields" width="450" height="550" src={useBaseUrl('doc-images/admin-guide/admin-functions/custom-url/url-custom-fields.png')}/>
    </Zoom>
    <p>Custom Fields</p>
  </div>

### URL History

In the **History** tab, you can track the URL edits such as who did what change and at what time.

  <div class="center">
    <Zoom>
      <img alt="History" width="450" src={useBaseUrl('doc-images/admin-guide/admin-functions/custom-url/url-history.png')}/>
    </Zoom>
    <p>History of changes</p>
  </div>

Select **Submit** to save your changes and create the URL.

The Custom URL is now listed in the Platform Folders.

  <div class="center">
    <Zoom>
      <img alt="Custom URL in Platform Folders" src={useBaseUrl('doc-images/admin-guide/admin-functions/custom-url/csu5.png')}/>
    </Zoom>
    <p>Custom URL in Platform Folders</p>
  </div>

Once the URL is created, you can also add the URL to **Hub Folders**. The URLs created by admin will be viewed by BIHub users in the BI Platform pane.

You can use the shortcut icons next to the URL to view report details (<img width="20" src={useBaseUrl('img/details-icon.png')}/>), upload the thumbnail (<img width="20" src={useBaseUrl('img/upload.png')}/>), and edit (<img width="20" src={useBaseUrl('img/edit.png')}/>) the URL details.
