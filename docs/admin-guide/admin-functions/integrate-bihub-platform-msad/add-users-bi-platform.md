---
id: add-users-bi-platform
title: Add Users from other BI Platforms (users having different user names across BI Platforms)
sidebar_label: Add Users from other BI Platforms
---

import useBaseUrl from "@docusaurus/useBaseUrl";
import Link from '@docusaurus/Link';
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

If the Admin wishes to map users who have different user names across BI Platforms into one BI Hub user, then follow the steps below:

-   Click on User Manager from the application pane.
-   The users added previously (either from Section <Link to={useBaseUrl('docs/admin-guide/admin-functions/integrate-bihub-platform-msad/synch')}>Synchronize Users between Agent and BI Hub</Link> or <Link to={useBaseUrl('docs/admin-guide/admin-functions/integrate-bihub-platform-msad/synch-ms-ad-bihub')}>Synchronize Microsoft AD users with BI Hub</Link>) will be listed. Select the user whose information is to be added from another BI Platform and Click on Edit.
-   Next click “Add” to add a new row.
-   From the drop-down list boxes, select the appropriate agent name and the appropriate user name. User names can also be searched upon by typing the user name in the drop-down box.

  <div style={{textAlign: 'center'}}>
    <Zoom>
      <img alt="Edit User" src={useBaseUrl('doc-images/admin-guide/edit-user.jpg')}/>
    </Zoom>
  </div>

  *Screenshot: Edit User*

-   Click Update. Now the BI Hub user chosen in User Manager page has been mapped to the user name from the BI platform. Repeat the steps until users of all BI platforms are mapped. Upon completion, proceed with Section <Link to={useBaseUrl('docs/admin-guide/admin-functions/integrate-bihub-platform-msad/synch-reports-users')}>Synchronize reports of Users</Link> to synchronize reports to BI platform.


