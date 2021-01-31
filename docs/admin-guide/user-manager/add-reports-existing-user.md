---
id: add-reports-existing-user
title: Add Reports to an existing user
sidebar_label: Add Reports to an existing user
---

import useBaseUrl from "@docusaurus/useBaseUrl";
import Link from '@docusaurus/Link';
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

This section can be used to add reports to an existing user, without using the bulk Synchronization of reports.

1. Click on User Manager from the application pane. Select the user from the list and click on Manage Reports.

  <div class="center">
    <Zoom>
      <img alt="Manage Reports" src={useBaseUrl('/doc-images/admin-guide/manage-reports.png')}/>
    </Zoom>
  </div>

  *Manage Reports*

2. A list of agents configured for the user will be displayed on the left and assigned reports will be on the right.
3. Select the agent from the Agent List whose reports need to be added. Click on Add/Remove Reports.

  <div class="center">
    <Zoom>
      <img alt="Agent User Mapping" src={useBaseUrl('doc-images/admin-guide/admin-functions/maintenance-bihub/agentusermapping.jpg')}/>
    </Zoom>
  </div>
  *Agent User Mapping*

1.  A list of unassigned reports will be on the left and assigned reports on the right.
2.  Select the reports or folders on the Unassigned Reports pane and click Move to move them to the right. The Search Reports box can be used to search for reports in both Assigned and Unassigned columns. The breadcrumb on the top sets the context by displaying **BI Hub user name > Agent Name > BI platform user name**.
  <div class="center">
    <Zoom>
      <img alt="Assigning Reports" src={useBaseUrl('doc-images/admin-guide/admin-functions/maintenance-bihub/assigningreports.jpg')}/>
    </Zoom>
  </div>

  *Assigning Reports*

1. If the requirement is to remove reports from user then select the reports or folders on the Assigned Reports pane and click on Remove to move them to the left. Upon successful completion of this operation, the message ‘Action Completed successfully’ flashes on the right top.
1. Click Back to assign/unassign reports for the other agents against the same user. Now click on User Manager to repeat the assign/unassign steps for all the other users in BI Hub.
1. Click on Sync Metadata button and answer Yes to the message box. This completes the manual assignment of reports to BI Hub users.

  <div class="center">
    <Zoom>
      <img alt="Sync Metadata" src={useBaseUrl('doc-images/admin-guide/admin-functions/maintenance-bihub/syncmetadata.jpg')}/>
    </Zoom>
  </div>

  *Sync Metadata*

1. The message Action completed successfully flashes on the right top of the page indicating success of the step.

:::note
When the Agent is down/inactive, then the Reports cannot be retrieved. In such a scenario, an Alert Massage will be displayed as shown in the below Figure.
:::

  <div class="center">
    <Zoom>
      <img alt="Reports in disabled status" src={useBaseUrl('doc-images/admin-guide/admin-functions/maintenance-bihub/alert1.png')}/>
    </Zoom>
  </div>

  *Reports in disabled status*
