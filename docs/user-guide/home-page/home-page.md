---
id: home-page
title: Home Page 
sidebar_label: Home Page 
---

import useBaseUrl from "@docusaurus/useBaseUrl"; 
import Link from '@docusaurus/Link'; 
import Zoom from "react-medium-image-zoom"; 
import "react-medium-image-zoom/dist/styles.css";

BI Hub can be integrated with Directory Service and SSO server. If it runs in that kind of setup, then user need not login into BI Hub separately. When launched, BI Hub detects that the user has already been successfully authenticated by directory service and lets the user in without even displaying the login box. However, if BI Hub is not integrated with Directory service and SSO, then it will prompt with a login page for the user to enter his/her credentials. Upon successful login into the application, user sees the landing page as shown below.

  <div style={{textAlign: 'center'}}>
    <Zoom>
      <img alt="Home Page" src={useBaseUrl('doc-images/user-guide/home1.png')}/>
    </Zoom>
  </div>

User can add the Reports which are accessible by the respective login users. By clicking the “Add Report” button (see Figure above) they can select the Reports from the Reports List (see Figure below) which can be displayed in the Dashboard.

  <div style={{textAlign: 'center'}}>
    <Zoom>
      <img alt="Add Reports" src={useBaseUrl('doc-images/user-guide/home2.png')}/>
    </Zoom>
  </div>

After selecting the respective Reports, the Dashboard will contain all the selected Reports (see Figure below).

  <div style={{textAlign: 'center'}}>
    <Zoom>
      <img alt="My Dashboard wit Large Tile View" src={useBaseUrl('doc-images/user-guide/home3.png')}/>
    </Zoom>
  </div>

The user can view the Reports in Small Tile and Large Tile Views. For our example, Small Tile View has been selected (see Figure above) and the Dashboard shows the Reports in Small Tile View. When the user selects the Large Tile View, the Dashboard shows the Reports in Large Tile View as shown below.

  <div style={{textAlign: 'center'}}>
    <Zoom>
      <img alt="My Dashboard with Small Tile View" src={useBaseUrl('doc-images/user-guide/home4.png')}/>
    </Zoom>
  </div>

When the user clicks any Report Tile then the user will be able to view the entire Report in full screen mode (see Figure below). The selected Report will be opening in a separate Tab in the BI Hub application. This functionality can be also achieved by disabling the "Open report as new tab" option in the Profile Settings screen (Refer <Link to={useBaseUrl('docs/user-guide/profile-settings')}>Section: Profile Settings</Link>).

  <div style={{textAlign: 'center'}}>
    <Zoom>
      <img alt="My Dashboard with selected Report" src={useBaseUrl('doc-images/user-guide/home5.png')}/>
    </Zoom>
  </div>

You have the option to reload the selected Report by clicking the "Reload Button" (see Figure below).

  <div style={{textAlign: 'center'}}>
    <Zoom>
      <img alt="Selected Report with Reload button" src={useBaseUrl('doc-images/user-guide/reload.png')}/>
    </Zoom>
  </div>