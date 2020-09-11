---
id: synch-reports-users
title: Synchronize Reports of Users
sidebar_title: Synchronize Reports of Users
---

import useBaseUrl from "@docusaurus/useBaseUrl";
import Link from '@docusaurus/Link';
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

If the admin wishes to associate all reports to BI Hub users using the single-click ‘Sync Reports’ option, then follow the steps below in this section. However, if the admin wants to manually add reports to users, instructions in the Section <Link to={useBaseUrl('#')}>"Add reports to an existing user"</Link>.

-   Click on Agent Manager from the application pane.
-   Select the agents whose user’s reports are to be imported (synchronized) into BI Hub and click "Sync Reports"
-   All reports of the users of the selected agents will be synchronized with BI Hub. Note that this synchronization only brings in reports of users with identical user names in BI platforms.
-   The initial setup is completed, and the users can now login into BI Hub and execute reports.
-   Administrator can switch to the home page and view the number of reports synchronized in the Reports Information tile and the details in Synchronization Information tile.

  <div style={{textAlign: 'center'}}>
    <Zoom>
      <img alt="Synchronization Information" src={useBaseUrl('doc-images/admin-guide/admin-functions/ion.jpg')}/>
    </Zoom>
  </div>

  *Synchronization Information*

-   Note that this functionality can be scheduled to be run automatically using the Agent Synchronization utility [Refer Section <Link to={useBaseUrl('#')}>"Scheduled synchronization with BI platforms"</Link>].
