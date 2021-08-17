---
id: user-requests
title: User Requests
sidebar_label: User Requests Access Summary
---

import useBaseUrl from "@docusaurus/useBaseUrl";
import Link from '@docusaurus/Link';
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

In the **User Requests** screen an admin can only view a summary of the report's access requests raised by the user and reject the request.

:::note
When a user raises a request to view an inaccessible report, a mail is triggered to the admin.
The mail specifies the report name, instance name, and the platform path location.

Once the platform admin provides access to the report to the user, the BI Hub admin can approve a user's access on the report.
To do so, the BI Hub admin must manually grant permission to the user as explained in the <Link to={useBaseUrl('docs/admin-guide/user-manager/user-management#add-reports-to-an-existing-user')}>Add Reports to an existing User</Link> section.
:::

  <div class="center">
    <Zoom>
      <img alt="Users requests access on the reports summary" src={useBaseUrl('doc-images/admin-guide/user-requests.png')}/>
    </Zoom>
    <p>User Requests summary with Granted/Pending/Rejected report's status</p>
  </div>

* You can filter out the reports:
  * By "Report Name/Request ID".
  * By usernames by clicking on the drop-down list against the label **User**.
  * Date-wise by selecting a date range in the **Date** label.
  * By the status of the reports. Select the status as **Pending/Granted/Rejected** in the **Status** label.
* The reports assigned to the user by both platform admin and BI Hub admin appear with the <b id="color-green">Granted</b> status.
* The reports rejected by the BI Hub admin appear with <b id="color-red">Rejected</b> status.
* The reports neither approved nor rejected appear with <b id="color-orange">Pending</b> status.
* To reject a **Pending** user access on the report, select the report and select **Reject Request**.
* The Admin can specify the reason for rejecting the Report in the **Reject Request** pop-up window and select **REJECT**.

> The respective user will be notified if the report's access was approved or denied.
