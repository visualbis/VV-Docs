---
id: multiple-admin-acct
title: Multiple Administrator Account
sidebar_label: Multiple Administrator Account
---

import useBaseUrl from "@docusaurus/useBaseUrl";
import Link from '@docusaurus/Link';
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

A Super Admin can add multiple Admins who can access BI Hub with full admin rights except for the below-listed actions:

- Admin User cannot make another account as an Admin.
- Admin User cannot edit/delete/remove another Admin account.

  <div class="center">
    <Zoom>
      <img alt="Multiple Admins" src={useBaseUrl('doc-images/admin-guide/admin-utilities/admin-group.png')}/>
    </Zoom>
    <p>Multiple Admins</p>
  </div>

* Select **User Manager > Manage User Groups**.
* Select **Admin** group.
* Click **ADD**.
* In the **Add user to group(s)** pop-up window, search the list of user(s) from the drop-down list.
* Select **ADD**.

The user(s) that you selected here will be added to the **Admin** group and will have administrative privileges.

This Group will also be listed under the **Membership** tab while <Link to={useBaseUrl('docs/admin-guide/user-manager/user-management#addremove-a-user-tofrom-a-group')}>editing/adding</Link> the users.
