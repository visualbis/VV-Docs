---
id: user-dashboard 
title: User Dashboard
sidebar_label: User Dashboard
---

import useBaseUrl from "@docusaurus/useBaseUrl";
import Link from '@docusaurus/Link';
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

In User Dashboard Tab, you have Dashboard Settings and Custom Dashboard
panels.

## Dashboard Settings

In Dashboard Settings, you have four different options as listed below:

  <div class="center">
    <Zoom>
      <img alt="User Dashboard Tab Settings" src={useBaseUrl('doc-images/admin-guide/admin-functions/settings/gen1.png')}/>
    </Zoom>
    <p>User Dashboard Tab Settings</p>
  </div>

1. **Embed Report in User Dashboard**: When enabled with the toggle "ON", will will load the reports live inside the thumbnail in tile view:

  <div class="center">
    <Zoom>
      <img alt="Dashboard Page" src={useBaseUrl('doc-images/admin-guide/admin-functions/settings/gen2.png')}/>
    </Zoom>
  </div>

1. **Number of Allowed Report**: Set the count of reports that can be added in the dashboard. The range for the Number of Allowed Report should be between 1 to 24.
1. **Allow user to change dashboard order preference**: If enabled, the users will be able to change their dashboard order preference. They can swap the tabs in the **HOME** page using the icon-swap ( <img width="20" src={useBaseUrl('img/drag-drop.png')} /> ) icon.
1. **Enable My Dashboard for Users**: If set to "ON", the **My Dashboard** page will be enabled for the users.

## Custom Dashboard

In Custom Dashboard panel, an admin can create a Dashboard for the user(s) and embed the reports for the user view in the Dashboard.

## Custom Dashboard - Add Dashboard

To create a new Dashboard, select **Add Dashboard**:

  <div class="center">
    <Zoom>
      <img alt="Add Dashboard option" src={useBaseUrl('doc-images/admin-guide/admin-functions/settings/ud5.png')} />
    </Zoom>
    <p>Add a Custom Dashboard</p>
  </div>

In the **User Dashboard** screen, enter the **Dashboard Name**, **Description** for the Dashboard, and select the users/groups to share the dashboard with.

  <div class="center">
    <Zoom>
      <img alt="User Dashboard screen" src={useBaseUrl('doc-images/admin-guide/admin-functions/settings/ud6.png')} width="350" />
    </Zoom>
  </div>

Select **Next**.

Next to add reports to this new Custom Dashboard, select **ADD REPORT**.

  <div class="center">
    <Zoom>
      <img alt="Custom Dashboard Panel with Sales Dashboard" src={useBaseUrl('doc-images/admin-guide/settings/custom-dashboard-add-report.png')}/>
    </Zoom>
  </div>

In the **Add Report** panel on the right-hand side, pick and select the reports.
The chosen reports will be added to the dashboard.

* Once you finish adding the reports to the new Custom Dashboard, select **Save** at the rop-right corner.
* To make the new Dashboard visible for all the users, you must select **Publish** at the top-right corner of the screen.

  <div class="center">
    <Zoom>
      <img alt="Custom Dashboard" src={useBaseUrl('doc-images/admin-guide/settings/custom-dash.png')}/>
    </Zoom>
    <p>Custom Dashboards</p>
  </div>

* The Details icon give a summary of the Dashboard settings.

  <div class="center">
    <Zoom>
      <img alt="Sales Dashboard Details Page" src={useBaseUrl('doc-images/admin-guide/admin-functions/settings/ud12.png')}/>
    </Zoom>
    <p>Sales Dashboard Details Page</p>
  </div>

* To delete a Dashobar, select the Delete ( <img width="20" src={useBaseUrl('img/delete.png')} /> ) icon to next to the Dashboard.

:::note
If you delete all the reports, an empty Dashboard will be created and will be set to unpublished by default.
  <div class="center">
    <Zoom>
      <img alt="Empty Dashboard alert warning" src={useBaseUrl('doc-images/admin-guide/settings/delete-all.png')}/>
    </Zoom>
    <p>Empty Dashboard alert</p>
  </div>
:::

## Custom Dashboard - Edit Dashboard

To edit any Custom Dashboard, select the Edit ( <img width="20" src={useBaseUrl('img/edit.png')} /> ) icon next to the Dashboard.

You can edit the **Dashboard Name, Description**, and **Share with** option.
Select **Update** to save your changes.

## Custom Dashboard - Manage Reports

To add/remove reports from a dashboard, select the Dashboard and then select **Manage Reports**.

  <div class="center">
    <Zoom>
      <img alt="Manage Dashboard using check box and link" src={useBaseUrl('doc-images/admin-guide/admin-functions/settings/mg.png')}/>
    </Zoom>
  </div>

* To add more reports, select **ADD REPORT** and select the reports.
* To remove any report from the dashboard, hover over the report and select **Delete**.

Select **Save**.

To re-order the Dashboards, select the drag-and-drop ( <img width="20" src={useBaseUrl('img/drag-drop.png')} /> ) icon in the Custom Dashboard panel.
