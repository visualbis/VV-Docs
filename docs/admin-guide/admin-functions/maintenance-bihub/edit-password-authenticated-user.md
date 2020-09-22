---
id: edit-password-authenticated-user
title: Edit the Password of BI Hub (Native) authenticated user
sidebar_label: Edit the Password of BI Hub (Native)
---

import useBaseUrl from "@docusaurus/useBaseUrl";
import Link from '@docusaurus/Link';
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

When user forgets his/her BI Hub password (choosing BI Hub as Authentication Type), they have to request a change password through an internal ticketing system. Upon receiving the notification, the
Administrator can take the following steps to set the password to a generic one and notify the user. Note that if user has forgotten his/her Windows AD password, then he/she has to approach the Windows AD administrator to reset that password and then use it to login into BI Hub.

1. Select User Manager from the application pane.
1. Select the user whose password is to be edited.
1. Click on Edit on the left top of the page below the User Manager Label.
1. The Edit User screen opens.
1. Click the Authentication tab and expand the Native option. Now provide the new password as received from administrator and click on Update.
1. When the user does a login next time, he/she will be prompted to change the password which can be used in future.

  <div style={{textAlign: 'center'}}>
    <Zoom>
      <img alt="Edit User" src={useBaseUrl('doc-images/admin-guide/admin-functions/maintenance-bihub/edituserpwd.jpg')}/>
    </Zoom>
  </div>

  *Edit User*

  <div style={{textAlign: 'center'}}>
    <Zoom>
      <img alt="Edit User" src={useBaseUrl('doc-images/admin-guide/admin-functions/maintenance-bihub/edituser1.jpg')}/>
    </Zoom>
  </div>
  
  *Edit User*

