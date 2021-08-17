---
id: row-level-security
title: Row Level Security for Power BI/Onedrive Reports
sidebar_label: Row Level Authentication
---

import useBaseUrl from "@docusaurus/useBaseUrl";
import Link from '@docusaurus/Link';
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

There is a 2-step authentication for these 2 agents that requires a sign in validation from both *Admins (Super Admin/Admins)*, and *Users*:

* Admins must create a new instance and authenticate the login credentials.
* Regular users must also log in to the agents and validate the credentials to access the reports.

## Create Instance: Admin-level authentication

Admin creates a new Power BI or Onedrive instance in the **Agent Manager > Instance Manager** screen by clicking **Add Instance**.

  <div class="center">
    <Zoom>
      <img alt="Authentication Pending" src={useBaseUrl('doc-images/admin-guide/agent/auth-pending.png')}/>
    </Zoom>
    <p>New PowerBI instance created</p>
  </div>

The initial **Status** of the instance will be "Yellow". This status indicates that Authentication is pending for the Agent.

* Select the Instance and click **Login As Admin**.

  <div class="center">
    <Zoom>
      <img alt="Login as Admin" src={useBaseUrl('doc-images/admin-guide/agent/login-as-admin.png')}/>
    </Zoom>
    <p>Login as Admin</p>
  </div>

* In the pop-up window, enter the credentials of an account with administrative privileges:

  <div class="center">
    <Zoom>
      <img alt="Power BI Administrator Login" width="400" src={useBaseUrl('doc-images/admin-guide/agent/ms-sign-in.jpg')}/>
    </Zoom>
  </div>

* Now the user will be authenticated successfully:

  <div class="center">
    <Zoom>
      <img alt="Successful User Authentication" width="500" src={useBaseUrl('doc-images/admin-guide/admin-mode/rw4.png')}/>
    </Zoom>
  </div>

* Power BI/Onedrive Agent is activated with a "Green" status.

  <div class="center">
  <Zoom>
    <img alt="Instance Manager active" src={useBaseUrl('doc-images/admin-guide/agent/instance-green.png')}/>
  </Zoom>
  <p>Instance status activated</p>
  </div>

* Go to **Agent Manager**, select Power BI/Onedrive agents and click **Sync Users** and **Sync Reports**.

:::note
If there is a mismatch in the platform user mapping and the user credentials, then the below authentication error will be shown:

  <div class="center">
    <Zoom>
      <img alt="Powerbi agent Login Credentials" src={useBaseUrl('doc-images/admin-guide/agent/auth-failure.png')}/>
    </Zoom>
  </div>

Check the Microsoft Office login credentials for any other user log-in.
You must log out the other user and sign in as your logged-in user credentials.
:::
