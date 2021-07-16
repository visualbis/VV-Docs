---
id: custom-url
title: Custom URL
sidebar_label: Custom URL
---
import useBaseUrl from "@docusaurus/useBaseUrl";
import Link from '@docusaurus/Link';
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

In addition to adding reports, you can also create a URL link to another resource.

To do so, in the **My Folders** section, navigate to a folder location and select **Add**.
Then select **New URL**.

  <div class="center">
    <Zoom>
      <img alt="Add URL" src={useBaseUrl('doc-images/user-guide/add-url.png')}/>
    </Zoom>
  </div>

In **Add URL** pane, enter the required fields.

  <div class="center">
    <Zoom>
      <img alt="Add URL Page" src={useBaseUrl('doc-images/user-guide/cu6.png')} width="300" />
    </Zoom>
  </div>

* In the **Details** tab, you can enter:
  * Name: Name of the URL.
  * URL: Complete URL path of the resource such as a report or website.
  * Description: Precise description of the resource.
  * Live Embed option: Enable the toggle to view a thumbnail of the loading page of the URL in **My Dashboard** section of the home page.
  * Launch in New Tab: Select the option to launch the URL in a new browser tab.
* In the **Image** tab, you can upload/delete the thumbnail image for the URL.
* In the **Optional Fields** tab, enter the values for Report's attributes ( default and custom ).

Select **Submit**.

  <div class="center">
    <Zoom>
      <img alt="URL Link created" src={useBaseUrl('doc-images/user-guide/cu7.png')}/>
    </Zoom>
    <p>New URL created</p>
  </div>

* To edit the details of a URL, select the edit ( <img width="25" src={useBaseUrl('img/edit.png')} /> ) icon next to a URL.
* To move the URL to another folder location, select the URL and then select **Move To**.

Here is a screenshot that displays the Custom URL "Visual BI" opens in a separate tab:

  <div class="center">
    <Zoom>
      <img alt="URL opened in a separate Tab" src={useBaseUrl('doc-images/user-guide/cu8.png')}/>
    </Zoom>
    <p>URL opened in a separate Tab</p>
  </div>

* To delete a URL, select the URL and then select **Delete**.
