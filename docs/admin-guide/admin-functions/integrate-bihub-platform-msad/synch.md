---
id: synch
title: Synchronize Users between Agent and BI Hub
sidebar_label: Synchronize Users between Agent and BI Hub
---

import useBaseUrl from "@docusaurus/useBaseUrl";
import Link from '@docusaurus/Link';
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

This feature is used by administrator to import users from the BI
platform into the portal. It is only used in scenarios when the BI
platform stores all user credentials and users are authenticated using
the BI platform and not a directory service like Microsoft AD/LDAP.

1.  In the Admin Home Screen, select Agent Manager.
1.  If the user names are same across all BI platforms, then select all Agents (except the one that points to a file system folder). If the user names are different between BI platforms, then select the agent, which has the most number of users. Click Sync Users and then Save.

  <div style={{textAlign: 'center'}}>
    <Zoom>
      <img alt="Synch Users" src={useBaseUrl('doc-images/admin-guide/synch/sync-users.jpg')}/>
    </Zoom>
  </div>

  *Sync Users*

1.  The application shows a list of users imported from BI platforms to BI Hub and this list can be seen by selecting the User Manager page. 
The agent icon against a user name indicates the number of agents (BI platforms) in which the user account was present. The types of Authentication assigned for the users can be also viewed in this page. You can select the user and click on the Agent Users tab on the right pane to visualize the BI platforms and the name of the user in that platform.

  <div style={{textAlign: 'center'}}>
    <Zoom>
      <img alt="User Managar" src={useBaseUrl('doc-images/admin-guide/synch/user-manager.jpg')}/>
    </Zoom>
  </div>

  *User Manager*

  The number of users mentioned in parenthesis near the User Manager Label represents the total number of users who exist in BI Hub (see Figure above). The Users can also be filtered based on the platforms and the Authentication types (see Figures below).

  <div style={{textAlign: 'center'}}>
    <Zoom>
      <img alt="User Manager with Agents Filtering" src={useBaseUrl('doc-images/admin-guide/synch/um2.jpg')}/>
    </Zoom>
  </div>

  *User Manager with Agents Filtering*

  <div style={{textAlign: 'center'}}>
    <Zoom>
      <img alt="User Manager with Authentication Filtering" src={useBaseUrl('doc-images/admin-guide/synch/umauth.jpg')}/>
    </Zoom>
  </div>

  *User Manager with Authentication Filtering*

  The user details such as Instance Name, Username and Environment can also be seen by just clicking on the username (see Figure below).

  <div style={{textAlign: 'center'}}>
    <Zoom>
      <img alt="User Manager with User details" src={useBaseUrl('doc-images/admin-guide/synch/um3new.jpg')}/>
    </Zoom>
  </div>

  *User Manager with User details*

1. It should be noted that when users are added via “Sync User” operation, the default login password for the added users will be <username@123> (e.g. <adrian@123> for username ‘adrian’). During the first login, the users will be asked to change to a new password.
1. If the user names are different between BI platforms, to import users from the other BI platform(s), Click Save and proceed to Section <Link to={useBaseUrl('docs/admin-guide/admin-functions/integrate-bihub-platform-msad/add-users-bi-platform')}>Add Users from other BI Platforms (users having different user names across BI Platforms)</Link>. If user names are identical across platforms, then upon completion of Step:2 go to Section <Link to={useBaseUrl('docs/admin-guide/admin-functions/integrate-bihub-platform-msad/synch-reports-users')}>Synchronize Reports of Users</Link>.
1. Note that this functionality can be scheduled to be run automatically as and when required using the Agent Synchronization utility. Refer Section [Scheduled synchronization with AD](#)
