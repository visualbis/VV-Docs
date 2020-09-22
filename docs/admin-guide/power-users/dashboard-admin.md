---
id: dashboard-admin
title: Dashboard Administration
sidebar_label: Dashboard Administration
---

import useBaseUrl from "@docusaurus/useBaseUrl";
import Link from '@docusaurus/Link';
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

The power users can also have permissions related to dashboard. In our example, the User Group has been created as Dashboard Manager (see Figure below).

  <div style={{textAlign: 'center'}}>
    <Zoom>
          <img alt="Manage Permissions for Dashboard Manager User Group" src={useBaseUrl('doc-images/admin-guide/power-users/pdm1.png')}/>
    </Zoom>
  </div>

*Manage Permissions for Dashboard Manager User Group*

Once when the Manage Permissions option is clicked, you will be able to view the Dashboard Administration Settings in Manage Permissions screen (see Figure below).

  <div style={{textAlign: 'center'}}>
    <Zoom>
      <img alt="Dashboard Administration Settings" src={useBaseUrl('doc-images/admin-guide/power-users/pdm2.png')}/>
    </Zoom>
  </div>

*Dashboard Administration Settings*

There are 4 different categories under which the Power Users can manage the Dashboard Administration and they are listed below:

-   [Dashboard Admin](#dashboard-admin) - The Power User can manage the Dashboards created by all the Users and
    configure the Dashboard settings.
-   [Dashboard Manager](#dashboard-manager) - The Power User can manage only the Dashboards created by all the Users and cannot configure the Dashboard settings.
-   [Dashboard Creator](#dashboard-creator) - The Power User can only manage his self created Dashboards.
-   None - The Dashboard Administration settings will not be applicable.

## Dashboard Admin

As a Dashboard Admin, the Power User has the access rights similar to that of Admin for managing both the Dashboard Settings and Custom Dashboard (Refer <Link to={useBaseUrl('docs/admin-guide/admin-functions/settings/user-dashboard')}>Section: User Dashboard</Link>).

## Dashboard Manager

The dashboard manager can add/manage dashboards. They do not have access for dashboard settings. For further details, you can refer <Link to={useBaseUrl('docs/admin-guide/admin-functions/settings/user-dashboard#custom-dashboard')}>Section: Custom Dashboard</Link>.

## Dashboard Creator

As a Dashboard Creator, the Power User do not have the access rights for managing both the Dashboard Settings and Custom Dashboard. Instead, the Power User can create his own set of Dashboards and can manage them.

When the option "None" is selected, then the complete Dashboard Administration settings in the Manage Permissions screen will not be visible.

:::note
It is to be noted that the Reports for which the Power User has access in the User Mode will be live loaded and the Reports for which the Power User has no access in the User Mode will be shown as default thumbnail reports (see Figure below).
:::

  <div style={{textAlign: 'center'}}>
    <Zoom>
      <img alt="Reports View for Power User" src={useBaseUrl('doc-images/admin-guide/power-users/pdm3.png')}/>
    </Zoom>
  </div>

*Reports View for Power User*
