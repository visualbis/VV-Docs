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

1. Embed Report in User Dashboard
1. Number of Allowed Report
1. Allow User to change Dashboard Order Preference
1. Enable My Dashboard for Users

  <div class="center">
    <Zoom>
      <img alt="User Dashboard Tab Settings" src={useBaseUrl('doc-images/admin-guide/admin-functions/settings/gen1.png')}/>
    </Zoom>
  </div>
  
*User Dashboard Tab Settings*

The embed report in user dashboard option when enabled, will load the reports live inside the thumbnail in tile view (see Figure below).

  <div class="center">
    <Zoom>
      <img alt="Dashboard Page" src={useBaseUrl('doc-images/admin-guide/admin-functions/settings/gen2.png')}/>
    </Zoom>
  </div>

*Dashboard page*

When the toggle is set to OFF, the default stock image will be displayed in the tile (see Figure below).

  <div class="center">
    <Zoom>
      <img alt="Dashboard page with Reports as Thumbnails" src={useBaseUrl('doc-images/admin-guide/admin-functions/settings/gen3.png')}/>
    </Zoom>
  </div>

*Dashboard page with Reports as Thumbnails*

The number of allowed report value determines the count of reports that can be added in the dashboard. The value 2 which was provided in the "Number of Allowed Reports" field indicates that only 2 reports can be added in the dashboard. The range for the Number of Allowed Report should be between 0 to 24.(see Figure below).

By activating the Allow User to change Dashboard Order Preference option, the Admin can allow the user to change the Dashboard Order preference (see Figure below).

  <div class="center">
    <Zoom>
      <img alt="User Dashboard Settings page - Change Dashboard Order Preference" src={useBaseUrl('doc-images/admin-guide/admin-functions/settings/ud1.png')}/>
    </Zoom>
  </div>

*User Dashboard Settings page - Change Dashboard Order Preference*

For our example, the User Dashboards "Sales" and "Accounts" have been created as shown below.
  <div class="center">
    <Zoom>
      <img alt="User Dashboard Page" src={useBaseUrl('doc-images/admin-guide/admin-functions/settings/ud2.png')}/>
    </Zoom>
  </div>

*User Dashboard page*

From the above Figure, you can observe that the user can reorder the Dashboard pages "Sales" and "Accounts" by swapping the tab positions.

By disabling the Enable My Dashboard for Users option, the Admin can disable the My Dashboard page for the user (see Figure below),
  <div class="center">
    <Zoom>
      <img alt="User Dashboard Settings Page" src={useBaseUrl('doc-images/admin-guide/admin-functions/settings/ud3.png')}/>
    </Zoom>
  </div>

*User Dashboard Settings page - Enable/Disable My Dashboard for Users*

Now you can observe that the user will not be able to view the My Dashboard page as shown in the below Figure.
  <div class="center">
    <Zoom>
      <img alt="My Dashboard disabled for Users" src={useBaseUrl('doc-images/admin-guide/admin-functions/settings/ud4.png')}/>
    </Zoom>
  </div>

*My Dashboard disabled for Users*

## Custom Dashboard

In Custom Dashboard panel, the Admin will be able to create a Dashboard for the User and embed the Reports for the User view in the Dashboard.

## Custom Dashboard - Add Dashboard

The Admin can create a new Dashboard using the Add Dashboard option as shown below:
  <div class="center">
    <Zoom>
      <img alt="Add Dashboard option" src={useBaseUrl('doc-images/admin-guide/admin-functions/settings/ud5.png')}/>
    </Zoom>
  </div>

*Add Dashboard option*

In the User Dashboard screen, the Admin can enter the details for the Dashboard Name, Description for the Dashboard and also can configure the selected users or all the users who can view the created Dashboard (see Figure below). For our example, the Dashboard Name is "Sales".

  <div class="center">
    <Zoom>
      <img alt="User Dashboard screen" src={useBaseUrl('doc-images/admin-guide/admin-functions/settings/ud6.png')}/>
    </Zoom>
  </div>

*User Dashboard screen*

The Admin needs to click the Next option to add the Reports for the created Dashboard (see Figure above). Now the Admin can click the "Add Reports" option as shown in the below Figure.

  <div class="center">
    <Zoom>
      <img alt="Add Reports option" src={useBaseUrl('doc-images/admin-guide/admin-functions/settings/ud6a.png')}/>
    </Zoom>
  </div>

*Add Reports option*

For our example, the Reports "AO_Downtime_demo" and "Design Contest Results - Sample" has been selected from the Add Reports page as shown in the below Figure.

  <div class="center">
    <Zoom>
      <img alt="Add Reports" src={useBaseUrl('doc-images/admin-guide/admin-functions/settings/ud7.png')}/>
    </Zoom>
  </div>

*Add Reports*

After adding the required Reports, the Sales Dashboard screen can be viewed with the added Reports as shown below.

  <div class="center">
    <Zoom>
      <img alt="Sales Dashboard with Reports" src={useBaseUrl('doc-images/admin-guide/admin-functions/settings/ud9.png')}/>
    </Zoom>
  </div>

*Sales Dashboard with Reports*

Using the Save option, the Admin can save the Reports in the Sales Dashboard (see Figure above).
Using the Publish option, the Admin can publish the saved Dashboards (see Figure below). If the publish option is not selected, the dashboard will be added but will not be seen for any of the users.

  <div class="center">
    <Zoom>
      <img alt="Sales Dashboard with Publish option" src={useBaseUrl('doc-images/admin-guide/admin-functions/settings/ud10.png')}/>
    </Zoom>
  </div>

*Sales Dashboard with Publish option*

Now, the list of the published Dashboards can be viewed in the Custom Dashboard panel (see Figure below). If the dashboard is not published, the publish status will be set to OFF.

  <div class="center">
    <Zoom>
      <img alt="Custom Dashboard Panel with Sales Dashboard" src={useBaseUrl('doc-images/admin-guide/admin-functions/settings/ud11.png')}/>
    </Zoom>
  </div>

*Custom Dashboard Panel with Sales Dashboard*

Now when the Admin clicks the "Details" icon, then the Dashboard details page will be displayed as shown below.

  <div class="center">
    <Zoom>
      <img alt="Sales Dashboard Details Page" src={useBaseUrl('doc-images/admin-guide/admin-functions/settings/ud12.png')}/>
    </Zoom>
  </div>

*Sales Dashboard Details Page*

## Custom Dashboard - Edit Dashboard

The Admin can also edit the details for an existing Dashboard as shown below:

  <div class="center">
    <Zoom>
      <img alt="Edit Dashboard option" src={useBaseUrl('doc-images/admin-guide/admin-functions/settings/ud13.png')}/>
    </Zoom>
  </div>

*Edit Dashboard option*

In the User Dashboard screen, the Admin can edit the details for the Dashboard Name, Description for the Dashboard and also can configure the selected users or all the users who can view the edited Dashboard (see Figure below). For our example, the Dashboard Name and Description “Sales" has been changed to "Sales1" (see Figure below).

  <div class="center">
    <Zoom>
      <img alt="User Dashboard Screen" src={useBaseUrl('doc-images/admin-guide/admin-functions/settings/ud14.png')}/>
    </Zoom>
  </div>

*User Dashboard screen*

The Admin needs to click the Update option to add the edited information to the Dashboard (see Figure below).

  <div class="center">
    <Zoom>
      <img alt="Sales Dashboard Details Page" src={useBaseUrl('doc-images/admin-guide/admin-functions/settings/ud15.png')}/>
    </Zoom>
  </div>

*Sales1 Dashboard*

The Admin can also delete the existing Dashboard using the Delete icon.

## Custom Dashboard - Manage Dashboard

The Admin can manage the Dashboards by clicking the check box against the Dashboard Name or by clicking the link of the Dashboard Name in the Custom Dashboard panel (see Figure below).
  <div class="center">
    <Zoom>
      <img alt="Manage Dashboard using check box and link" src={useBaseUrl('doc-images/admin-guide/admin-functions/settings/mg.png')}/>
    </Zoom>
  </div>

*Manage Dashboard using check box and link*

If the admin wants to add new reports to existing dashboard, they can select the dashboard and click on manage reports or directly click on the dashboard name. The reports that are already in the dashboard will be listed. Click on add reports to add new reports. For our example, the Report “OFS_EHS_BW_IPAD” has been selected as an additional Report for the Sales Dashboard (see Figure below).
  <div class="center">
    <Zoom>
      <img alt="Add Reports" src={useBaseUrl('doc-images/admin-guide/admin-functions/settings/ud16.png')}/>
    </Zoom>
  </div>

*Add Reports*

After adding the required Reports, the Sales Dashboard screen can be viewed with the added Reports. Using the Save option, the Admin can save the added Reports in the Sales Dashboard. If dashboard is already published, the Publish button will be disabled (see Figure below).
  <div class="center">
    <Zoom>
      <img alt="Sales Dashboard with Report being added" src={useBaseUrl('doc-images/admin-guide/admin-functions/settings/ud17.png')}/>
    </Zoom>
  </div>

*Sales Dashboard with Report being added*

To delete any reports in a dashboard, click on the dashboard and go into the reports page. Hovering on the report tile , we can see the delete option, using which the report can be deleted. Click on the save button to save the changes made to the dashboard.

  <div class="center">
    <Zoom>
      <img alt="Delete Report" src={useBaseUrl('doc-images/admin-guide/admin-functions/settings/ud18.png')}/>
    </Zoom>
  </div>

*Delete Report*

When the Admin deletes all the Reports, then an Alert Message will be shown as "Removing all the Reports from the Dashboard will make the Dashboard unpublished".

  <div class="center">
    <Zoom>
      <img alt="Alert Message" src={useBaseUrl('doc-images/admin-guide/admin-functions/settings/ud19.png')}/>
    </Zoom>
  </div>

*Alert Message*

When the Admin saves the Alert Message, then all the Reports will be deleted from the Dashboard and the Publish Status will remain disabled (see Figure below).

  <div class="center">
    <Zoom>
      <img alt="Dashboard showing unpublished status" src={useBaseUrl('doc-images/admin-guide/admin-functions/settings/ud20.png')}/>
    </Zoom>
  </div>

*Dashboard showing unpublished status*

Dashboards can also be re-ordered as per the admin’s requirement. This
can be done by a simple drag and drop function (see Figure below).

  <div class="center">
    <Zoom>
      <img alt="Rearrange the Order preference" src={useBaseUrl('doc-images/admin-guide/admin-functions/settings/drp.png')}/>
    </Zoom>
  </div>

*Rearrange the Order preference*

In the above example, the Dashboard Oil & Gas has been reordered (see Figure below).

  <div class="center">
    <Zoom>
      <img alt="Rearrange the Order preference" src={useBaseUrl('doc-images/admin-guide/admin-functions/settings/drp1.png')}/>
    </Zoom>
  </div>

*Rearrange the Order preference*

