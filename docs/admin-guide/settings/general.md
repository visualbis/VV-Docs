---
id: general 
title: General Tab
sidebar_label: General Tab
---

import useBaseUrl from "@docusaurus/useBaseUrl";
import Link from '@docusaurus/Link';
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

The **General** tab, has four different categories:
1. <Link to={useBaseUrl('#navigation')}>Navigation</Link>
2. <Link to={useBaseUrl('#search')}>Search</Link>
3. <Link to={useBaseUrl('#views')}>Views</Link>
4. <Link to={useBaseUrl('#customization')}>Customization</Link>

## Navigation

To customize the **Navigation Panel** for other users, the super Admin can:

- **Drag to rearrange** the navigation menus,
- **Rename** the navigation labels,
- Enable/disable the navigation menus with the **ON/OFF** toggle.

Let's consider the highlighted changes done by the Admin:

  <div class="center">
    <Zoom>
      <img alt="Admin customizes Navigation Panel" src={useBaseUrl('doc-images/admin-guide/navpanel-customized.png')}/>
    </Zoom>
    <p>Admin customizes the Navigation Panel</p>
  </div>

The **Navigation** menu items change will reflect for all the other users as indicated in the screenshot:

  <div class="center">
    <Zoom>
      <img alt="Navigation Panel for other users" src={useBaseUrl('doc-images/admin-guide/navpanel-users.png')}/>
    </Zoom>
    <p>Navigation Panel as seen by all other users</p>
  </div>

'Favorites' renamed as 'My Favorites', 'BI Platform', and 'History' menus disabled.

## Search

By default the **Search** section allows users to search and request the reports they do not have access to.

If the Admin wishes to hide the inaccessible report, the Admin can turn OFF the **Show Inaccessible reports** toggle.

  <div class="center">
    <Zoom>
      <img alt="Search - Show Inaccessible Reports" src={useBaseUrl('doc-images/admin-guide/settings/enable-inaccessible-reports.png')}/>
    </Zoom>
    <p><b>Show Inaccessible reports</b> enabled by default</p>
  </div>

When the users search for the reports, the **Inaccessible** reports would be visible or hidden based on the selection made by the Admin.

  <div class="center">
    <Zoom>
      <img alt="Inaccessible Reports" src={useBaseUrl('doc-images/admin-guide/settings/inaccessible-reports.png')}/>
    </Zoom>
    <p>Inaccessible Reports view</p>
  </div>

## Views

By default, the **Show Agent Instance** is enabled for each report for all the users.
Admin can choose to hide the agent instance by turning this toggle OFF.

  <div class="center">
    <Zoom>
      <img alt="View - Show Agent Instance option" src={useBaseUrl('doc-images/admin-guide/settings/general-settings-views.png')}/>
    </Zoom>
    <p>Agent Instance display ON</p>
  </div>

When the **Show Agent Instance** is enabled, the *user* can view the Report with the **Instance Agent** details:

  <div class="center">
    <Zoom>
      <img alt="Report with Instance Agent Display" src={useBaseUrl('doc-images/admin-guide/settings/view-instance-name.png')}/>
    </Zoom>
    <p>Report with Instance Agent name</p>
  </div>

## Customization

The Admin can allow users to **Launch Reports In New Tab** with the ON/OFF toggle:

  <div class="center">
    <Zoom>
      <img alt="Customization – Launch Reports in New Tab" src={useBaseUrl('doc-images/admin-guide/settings/settings-customization.png')}/>
    </Zoom>
    <p>Customization – Launch Reports in New Tab</p>
  </div>

- When Admin enables this option, by default **Open Report in new tab** is enabled for the users when they login for the first time.

- The user can later choose to enable/disable this option from the **Settings > Customization Settings** section.

> User customized settings take precedence over customizations done by Admin.
