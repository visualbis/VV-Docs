---
id: overview
title: Overview of BI Hub
sidebar_label: Overview of BI Hub
---

import useBaseUrl from "@docusaurus/useBaseUrl";
import Link from '@docusaurus/Link';
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

BI Hub is used for only viewing reports and it cannot be used to create/modify/delete reports. Those tasks will have to be done in the BI platform. Most of the features explained in this guide are launched from the application pane (shown below this text) after user/admin does a successful login.

The application pane displays all the modules in this application – 

- <Link to={useBaseUrl('#admin-home-page')}>Admin Home Page</Link>
- <Link to={useBaseUrl('docs/admin-guide/admin-functions/integrate-bihub-platform-msad/edit-agent-instance')}>Agent Manager</Link>
- User manager

- Authentication

- Audit

- Reports

- User Request

- Customization

This is the same order in which the modules are displayed in the application pane as shown below. Functionality of these modules are covered in subsequent sections of this document.

<div style={{textAlign: 'center'}}>
  <Zoom>
<img alt="Admin Menu" src={useBaseUrl('/doc-images/admin-guide/overview/admin-menu.png')}/>
  </Zoom>
</div>

### First time Login

BI Hub administrator mode and user mode uses the same product URL and depending on the 
login (as admin or user name) appropriate modules of the application are rendered. After launching the 
product, the administrator can log into the application by entering the user ID as *vbiview*, which is the administrator login ID. A Set Admin Password screen opens up during the first login to accept a new password.
>Note that the administrator does a log in with the authentication type set as *Native*; 
Users login with authentication type set as *Microsoft AD/LDAP*.

### Forgot Password

If the administrator forgets his/her password or wishes to reset the password for security reasons 
the Change Password utility can be used. Refer Section <Link to={useBaseUrl('#')}>changepassword</Link>. <!-- Administrator Utilities > Change Password -->


### Landing Page

After setup of agents, connectivity with directory services and a few successful synchronizations, the landing page displays four tiles.

- **Instances configured** – List of instances under the agents being configured and their status
- **Authentications configured** – List of authentications 
- **Components configured** – List of components like Elastic Search, Message Queue, SMTP
- **Synchronization Information** – Synchronization details for users, reports and authentication. The administrator can check here for recent activities that happened in BI Hub. To view the recent activities over a period of time, the administrator can click on the calendar icon and provide a date range as input.

### Admin Home Page

<div style={{textAlign: 'center'}}>
  <Zoom>
<img alt="Landing Page New" src={useBaseUrl('/doc-images/admin-guide/overview/langing-page-new.png')}/>
  </Zoom>
</div>

*Landing Page*