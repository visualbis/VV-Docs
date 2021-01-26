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

In Search category, the Admin can enable the Show Inaccessible Reports option as shown in the Figure below.
  <div class="center">
    <Zoom>
      <img alt="Search - Show Inaccessible Reports" src={useBaseUrl('doc-images/admin-guide/admin-functions/settings/sea1.png')}/>
    </Zoom>
  </div>

  *Search - Show Inaccessible Reports*

Based on the above configuration, the users will be able to view the
Inaccessible Reports in the User pages (see Figure below).
  <div class="center">
    <Zoom>
      <img alt="Inaccessible Reports" src={useBaseUrl('doc-images/admin-guide/admin-functions/settings/ina.png')}/>
    </Zoom>
  </div>

  *Inaccessible Reports*

## Views

In Views category, the Admin will be able to enable the Show Agent Instance option (see Figure below). The Show Agent Instance option is activated as shown in the below Figure.
  <div class="center">
    <Zoom>
      <img alt="View - Show Agent Instance option" src={useBaseUrl('doc-images/admin-guide/admin-functions/settings/vw2.png')}/>
    </Zoom>
  </div>

  *View - Show Agent Instance option*

When the Show Agent Instance option is activated, the user can view the Report with the Instance Agent details in the User pages (see Figure below).
  <div class="center">
    <Zoom>
      <img alt="Report with Instance Agent Display" src={useBaseUrl('doc-images/admin-guide/admin-functions/settings/newad2.png')}/>
    </Zoom>
  </div>

  *Report with Instance Agent Display*

## Customization

In the Customization category, the Admin will be now able to enable the “Launch Reports in New Tab” option (see Figure below). When this option is enabled by the Admin, the user will be able to view the “Launch Reports in New Tab” option being enabled in the Profile Settings for his first login and by later the user can configure the same based on his
choice.
  <div class="center">
    <Zoom>
      <img alt="Customization – Launch Reports in New Tab" src={useBaseUrl('doc-images/admin-guide/admin-functions/settings/cust.png')}/>
    </Zoom>
  </div>

  *Customization – Launch Reports in New Tab*

