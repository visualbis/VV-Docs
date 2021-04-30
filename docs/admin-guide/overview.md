---
id: overview
title: Overview of BI Hub
sidebar_label: Overview of BI Hub
---

import useBaseUrl from "@docusaurus/useBaseUrl";
import Link from '@docusaurus/Link';
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

BI Hub is used only for viewing reports and it cannot be used to create/modify/delete reports. Those tasks will have to be done from the BI platform. Most of the features explained in this guide are launched from the application pane after the user/admin does a successful login.

The application pane displays all the modules in this application – 

- <Link to={useBaseUrl('#admin-home-page')}>Admin Home Page</Link>
- <Link to={useBaseUrl('docs/admin-guide/agent-manager/agent-manager-main')}>Agent Manager</Link>
- <Link to={useBaseUrl('docs/admin-guide/user-manager/user-manager-main')}>User manager</Link>
- <Link to={useBaseUrl('docs/admin-guide/authenticate/authenticate')}>Authentication</Link>
- <Link to={useBaseUrl('docs/admin-guide/audit')}>Audit</Link>
- <Link to={useBaseUrl('docs/admin-guide/reports/reports')}>Reports</Link>
- <Link to={useBaseUrl('docs/admin-guide/request-access-reports-admin')}>User Requests</Link>
- <Link to={useBaseUrl('docs/admin-guide/settings/settings')}>Settings</Link>

<div class="center">
  <Zoom>
<img alt="Admin Menu" height="400" src={useBaseUrl('/doc-images/admin-guide/overview/admin-menu.png')}/>
  </Zoom>
	<p>Admin sidebar menus</p>
</div>


### First-time Login

BI Hub administrator mode and user mode uses the same product URL and depending on the 
login (as admin or user name) appropriate modules of the application are rendered. After launching the 
product, the administrator can log into the application by entering the user ID as *vbiview*, which is the administrator login ID. A Set Admin Password screen opens up during the first login to accept a new password.
>Note that the administrator logins with the authentication type set as *Native*; 
Users login with authentication type set as *Microsoft AD/LDAP*.

### Forgot Password

To recover a lost password or reset password for security reasons, an administrator can use the <Link to={useBaseUrl('docs/admin-guide/admin-utilities/change-passwd')}>Change Password</Link> utility.
