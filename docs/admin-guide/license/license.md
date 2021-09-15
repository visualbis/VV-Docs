---
id: license
title: License Details
sidebar_label: License Details
---

import useBaseUrl from "@docusaurus/useBaseUrl";
import Link from '@docusaurus/Link';
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

The license details of the product can be seen in the admin dashboard. The license of the whole product can be seen on the top right.

  <div class="center">
    <Zoom>
      <img alt="License Details" src={useBaseUrl('doc-images/admin-guide/lc1.png')}/>
    </Zoom>
  </div>

We can also check the license of individual agents. To view the agent license, click on the help icon on the top right and choose License Details. The list of agents with their start date and end date can be
seen.

  <div class="center">
    <Zoom>
      <img alt="License Details with Sync Online and Sync Offline options" src={useBaseUrl('doc-images/admin-guide/lc2.png')}/>
    </Zoom>
  </div>

If any changes are done for the order in the shop, it can be updated in
BI Hub in the license details. This can be done in two ways: Sync Online and Sync Offline.

## Sync Online

Sync online is done when there is an internet connection in the server hosting the BI Hub Product. Once the admin is notified that the change has been done, they can click on the license details and select **sync online**. The changes that were done will now be reflected in the license details table.

## Sync Offline

Sync offline is done when there is no internet connection in the server hosting the BI Hub Product. In such a case, once the admin is notified that the changes are done, admin can follow the below steps for the license details to be updated:

1. From the help icon select **License Details**.
1. Select **SYNC OFFLINE**.

  <div class="center">
    <Zoom>
      <img alt="License Details - General Key and Upload" src={useBaseUrl('doc-images/admin-guide/lc3.png')}/>
    </Zoom>
  </div>

1. Select **GENERATE KEY**.
1. Copy and paste the generated key at https://shop.bihub.com/license-generator/
1. Enter the **Email ID** and **License Key** given during the subscription to get the `license.licx` file.
1. Now select **UPLOAD** in the **License Details** pop-up window to upload the `license.licx` file.

The license changes will now be reflected in the **License Details** main window.

:::note
When the License Period is expired in the Server Level, then you will be able to view the License Expired Message in the Admin page as shown below:

  <div class="center">
    <Zoom>
      <img alt="License Expired Alert" src={useBaseUrl('doc-images/admin-guide/le1.png')}/>
    </Zoom>
  </div>
:::
