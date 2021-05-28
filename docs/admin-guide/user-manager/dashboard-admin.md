---
id: dashboard-admin
title: Dashboard Administration
sidebar_label: Dashboard Administration
---

import useBaseUrl from "@docusaurus/useBaseUrl";
import Link from '@docusaurus/Link';
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

The power users can also have permissions related to dashboard. In our example, the User Group has been created as Dashboard Manager:

  <div class="center">
    <Zoom>
          <img alt="Manage Permissions for Dashboard Manager User Group" src={useBaseUrl('doc-images/admin-guide/power-users/pdm1.png')}/>
    </Zoom>
    <p>Manage Permissions for Dashboard Manager User Group</p>
  </div>

Click **Manage Permissions** to open the **Dashboard Administration** Settings.
  <div class="center">
    <Zoom>
      <img alt="Dashboard Administration Settings" src={useBaseUrl('doc-images/admin-guide/power-users/pdm2.png')}/>
    </Zoom>
    <p>Dashboard Administration Settings</p>
  </div>

Following are the Dashboard administration permissions available: 

* **Dashboard Admin**: As a Dashboard Admin, the Power User will have access rights similar to that of Admin for managing both the Dashboard Settings and Custom Dashboard (Refer <Link to={useBaseUrl('docs/admin-guide/settings/user-dashboard')}>Section: User Dashboard</Link>).
* **Dashboard Manager**: The Power User can manage only the Dashboards created by all the Users and cannot configure the Dashboard settings.
( Refer <Link to={useBaseUrl('docs/admin-guide/settings/user-dashboard#custom-dashboard')}>Custom Dashboard</Link> section ).
* **Dashboard Creator**: As a Dashboard Creator, the Power User do not have the access rights for managing both the Dashboard Settings and Custom Dashboard. Instead, Power User can only create and manage Dashboard for the self profile.
* **None**: No Dashboard Administration settings are visible.

:::note
Reports for which the Power User has access in the User Mode will be live loaded and the Reports for which the Power User has no access in the User Mode will be shown as default thumbnail reports (see Figure below).
:::

  <div class="center">
    <Zoom>
      <img alt="Reports View for Power User" src={useBaseUrl('doc-images/admin-guide/power-users/pdm3.png')}/>
    </Zoom>
    <p>Reports View for a Power user</p>
  </div>