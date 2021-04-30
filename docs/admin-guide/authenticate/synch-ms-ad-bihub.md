---
id: synch-ms-ad-bihub
title: Synchronize Microsoft AD users with BI Hub
sidebar_label: Synchronize Microsoft AD users with BI Hub
---

import useBaseUrl from "@docusaurus/useBaseUrl";
import Link from '@docusaurus/Link';
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

Go to **Authentication** page, select the platform (Windows AD or LDAP) and click **Sync Users**.

  <div class="center">
    <Zoom>
      <img alt="Authentication Manager Menu" src={useBaseUrl('doc-images/admin-guide/synch/sync-ad-users.png')}/>
    </Zoom>
  </div>

All the users under the given Authentication information will be added to the BI Hub.

:::note
If users of all BI platforms are authenticated using Microsoft AD/LDAP and user names are identical across platforms, then proceed to <Link to={useBaseUrl('docs/admin-guide/agent-manager/agent/agent-management#sync-reports')}>Synchronize Reports of Users</Link> section. 
:::

### Next Steps

Consider the scenario When one BI platform authenticates through Microsoft AD and the other BI platform authenticates Native users, also if the user names are different between BI platforms. 
In such a case, the above sync would import the users only with the Microsoft AD authentication. 

In order to import users from the other BI Platform(s), proceed to <Link to={useBaseUrl('docs/admin-guide/user-manager/user-management#add-users-from-other-bi-platforms')}>Add Users from other BI Platforms (users having different user names across BI Platforms)</Link> section.

Next proceed to <Link to={useBaseUrl('docs/admin-guide/agent-manager/agent/agent-management#sync-reports')}>Synchronize Reports of Users</Link> section.

:::important
You can schedule to sync the Windows AD users automatically using the Authentication Synchronization utility. [Refer the <Link to={useBaseUrl('docs/admin-guide/admin-utilities/scheduled-sync-ad')}> Scheduled synchronization with AD</Link>] section.
:::

To set the default Authentication type, select the Authentication name - "Windows AD" and click **Set as Default**:

  <div class="center">
    <Zoom>
      <img alt="Authentication Manager - Default Authentication Type" src={useBaseUrl('doc-images/admin-guide/synch/win-ad-default.png')}/>
    </Zoom>
    <p>Windows AD selected as the Default Authentication Type</p>
  </div>