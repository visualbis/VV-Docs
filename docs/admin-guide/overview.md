---
id: overview
title: BI Hub Application overview
sidebar_label: BI Hub Application overview
---

import useBaseUrl from "@docusaurus/useBaseUrl";
import Link from '@docusaurus/Link';
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

BI Hub is used only for viewing reports and it cannot be used to create/modify/delete reports. Those tasks will have to be done from the BI platform. Most of the features explained in this guide are launched from the application pane after the user/admin does a successful login.

<div class="center">
  <Zoom>
<img alt="Admin Menu" height="400" src={useBaseUrl('/doc-images/admin-guide/overview/admin-menu.png')}/>
  </Zoom>
	<p>Admin sidebar menus</p>
</div>

Following are the modules displayed in the application side panel:

- <Link to={useBaseUrl('docs/admin-guide/getting-started/homepage')}>Admin Home Page</Link>: Admin's Dashboard with configuration summary of Instances, Authentication, and Components Synchronization Information.
- <Link to={useBaseUrl('docs/admin-guide/agent-manager/agent-manager-main')}>Agent Manager</Link>: Agent/Instance and Cluster management.
- <Link to={useBaseUrl('docs/admin-guide/user-manager/user-manager-main')}>User manager</Link>: Group/user management, permissions assignment, and map reports to the users.
- <Link to={useBaseUrl('docs/admin-guide/authenticate/authenticate')}>Authentication</Link>: Manage different authentication types and sync users.
- <Link to={useBaseUrl('docs/admin-guide/audit')}>Audit</Link>: Audit BI Hub platform usage.
- <Link to={useBaseUrl('docs/admin-guide/reports/reports')}>Reports</Link>: Hub/Platform reports classifications.
- <Link to={useBaseUrl('docs/admin-guide/request-access-reports-admin')}>User Requests</Link>: User's reports access summary.
- <Link to={useBaseUrl('docs/admin-guide/settings/settings')}>Settings</Link>: Configure BI Hub for all users.

### First-time Login

BI Hub administrator-mode and user-mode uses the same product URL and depending on the
login (as admin or user name) appropriate modules of the application are rendered.

* After launching the product, the administrator can log into the application by entering the user ID as *bihubadmin* and password as *password*.
* A Set Admin Password screen pops up during the first login to accept a new password.

> Note: An admin logins with the authentication type set as **Native**; whereas users login with authentication type set as **Microsoft AD/LDAP**, or **SSO Login**. Refer the <Link to={useBaseUrl('docs/admin-guide/authenticate/manage-auth')}>Authentication</Link> section more details.

### Forgot Password

To recover a lost password or reset password for security reasons, an administrator can use the <Link to={useBaseUrl('docs/admin-guide/admin-utilities/change-passwd')}>Change Password</Link> utility.
