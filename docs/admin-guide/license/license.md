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

  <div style={{textAlign: 'center'}}>
    <Zoom>
      <img alt="License Details" src={useBaseUrl('doc-images/admin-guide/lc1.png')}/>
    </Zoom>
  </div>

*License Details*

We can also check the license of individual agents. To view the agent license, click on the help icon on the top right and choose License Details. The list of agents with their start date and end date can be
seen.

  <div style={{textAlign: 'center'}}>
    <Zoom>
      <img alt="License Details with Sync Online and Sync Offline options" src={useBaseUrl('doc-images/admin-guide/lc2.png')}/>
    </Zoom>
  </div>

*License Details with Sync Online and Sync Offline options*

If any changes are done for the order in the shop, it can be updated in
BI Hub in the license details. This can be done in two ways:

- [Sync Online](#sync-online)
- [Sync Offline](#sync-offline)

## Sync Online

Sync online is done when there is an internet connection in the server hosting the BI Hub Product. Once the admin is notified that the change has been done, they can click on the license details and click on sync online. The changes that were done will now be reflected in the license details table.

## Sync Offline

Sync offline is done when there is no internet connection in the server hosting the BI Hub Product. In such a case, once the admin is notified that the changes are done, they need to follow the below steps for the license details to be updated: 

1. Click on the help icon > License Details > Sync Offline. The below screen appears

  <div style={{textAlign: 'center'}}>
    <Zoom>
      <img alt="License Details - General Key and Upload" src={useBaseUrl('doc-images/admin-guide/lc3.png')}/>
    </Zoom>
  </div>

 *License Details - General Key and Upload*

1. Click on Generate Key and copy and paste the generated key at <https://products.visualbi.com/license-generator/> . Also enter the email ID and License Key given during the subscription to get the license.licx file
1. Now click on Upload int the sync offline screen to upload the license.licx file.

The license changes will now be reflected in the license details.

It is to be noted that when the License Period is expired in the Server Level, then you will be able to view the License Expired Message in the Admin page shown in the below Figure.

  <div style={{textAlign: 'center'}}>
    <Zoom>
      <img alt="License Expired Alert" src={useBaseUrl('doc-images/admin-guide/le1.png')}/>
    </Zoom>
  </div>


*License Expired Alert*

