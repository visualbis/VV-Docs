---
id: synch-ms-ad-bihub
title: Synchronize Microsoft AD users with BI Hub
sidebar_label: Synchronize Microsoft AD users with BI Hub
---

import useBaseUrl from "@docusaurus/useBaseUrl";
import Link from '@docusaurus/Link';
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

1. Click on Authentication Menu from the application pane as shown below.

    <div style={{textAlign: 'center'}}>
    <Zoom>
      <img alt="Authentication Manager Menu" src={useBaseUrl('doc-images/admin-guide/admin-functions/authentication-manager-menu.jpg')}/>
    </Zoom>
  </div>

1. Choose the platform (Windows AD or LDAP) and click on “Sync Users”.
1. Now all the users under the given Authentication information will be added to the BI Hub.
1. If users of all BI platforms are authenticated using Microsoft AD/LDAP and user names are identical across platforms, then upon
completion of Step:2 go directly to Section <Link to={useBaseUrl('#')}>Synchronize Reports of Users</Link> to synchronize reports. When one BI platform authenticates through Microsoft AD and the other BI platform authenticates users natively and If the user names are different between BI platforms, then
    Step:2 above would have imported users only with Microsoft AD authentication. In order to import users from the other BI Platform(s), Click Save and proceed to Section <Link to={useBaseUrl('#')}>Add Users from other BI Platforms (users having different user names across BI Platforms)</Link> and then to Section <Link to={useBaseUrl('#')}>Synchronize Reports of Users</Link> to synchronize reports.
1. Note that this functionality can be scheduled to be run automatically using the Authentication Synchronization utility.
    [Refer Section <Link to={useBaseUrl('#')}> Scheduled synchronization with AD</Link>].
    
In Authentication Manager screen, you will be able to set the Default Authentication Type as shown in the Figure below. In our example, Windows AD has been selected as the Default Authentication Type.

  <div style={{textAlign: 'center'}}>
    <Zoom>
      <img alt="Authentication Manager - Default Authentication Type" src={useBaseUrl('doc-images/admin-guide/admin-functions/amg1.jpg')}/>
    </Zoom>
  </div>

After selecting the Windows AD as Default Authentication Type, you will be able to see the Auhthentication Manager screen with Windows AD being selected as Default Authentication type (see Figure below).

  <div style={{textAlign: 'center'}}>
    <Zoom>
      <img alt="Authentication Manager - Default Authentication Type as Windows AD" src={useBaseUrl('doc-images/admin-guide/admin-functions/amg2.jpg')}/>
    </Zoom>
  </div>

