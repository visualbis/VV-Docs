---
id: user-dashboard
title: User Dashboard
sidebar_label: User Dashboard
---

import useBaseUrl from "@docusaurus/useBaseUrl"; 
import Link from '@docusaurus/Link'; 
import Zoom from "react-medium-image-zoom"; 
import "react-medium-image-zoom/dist/styles.css";

The dashboards created and managed by BI Hub admin is available to the authorized users/groups.

You can view the User Dashboards as tabs if admin has given access to you on these dashboards.

  <div class="center">
    <Zoom>
      <img alt="User Dashboard with Reports" src={useBaseUrl('doc-images/user-guide/userdb1_.png')}/>
    </Zoom>
    <p>User Dashboards managed by admin</p>
  </div>

* To re-order the User Dashboard preference, select the drag and order ( <img width="25" src={useBaseUrl('img/drag-drop.png')}/> ) icon.

:::note
Drag and order icon will not be functional if BI Hub admin has disabled the functionality.
:::

For the reports that you do not have an access to; you can click on the report and request an access from the Admin.

  <div class="center">
    <Zoom>
      <img alt="Reports with Lock icon" src={useBaseUrl('doc-images/user-guide/userdb2.png')}/>
    </Zoom>
    <p>No access on the report</p>
  </div>

The reports that you have requested an access for will be displayed as "Request Pending".

  <div class="center">
    <Zoom>
      <img alt="Reports with Request Pending Message" src={useBaseUrl('doc-images/user-guide/userdb3.png')}/>
    </Zoom>
    <p>Request pending for approval</p>
  </div>
