---
id: multiple-admin-acct
title: Multiple Administrator Account
sidebar_label: Multiple Administrator Account
---

import useBaseUrl from "@docusaurus/useBaseUrl";
import Link from '@docusaurus/Link';
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

A Super Admin, can add multiple Admins who can access BI Hub with full admin rights except for the below-listed actions:
- Admin User cannot make another account as an Admin.
- Admin User cannot edit/delete/remove another Admin account.
  <div class="center">
    <Zoom>
      <img alt="Multiple Admins" src={useBaseUrl('doc-images/admin-guide/admin-utilities/admin-group.png')}/>
    </Zoom>
    <p>Multiple Admins</p>
  </div>

Click **User Manager > Manage User Groups**, and select the **Admin** group checkbox on the left. 
Click **ADD** and select the username to add it to this admin group.

This Group will also be listed under the Membership Tab while editing/adding the users.