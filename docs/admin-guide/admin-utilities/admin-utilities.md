---
id: admin-utilities
title: Administrator Utilities
sidebar_label: Administrator Utilities
---

import useBaseUrl from "@docusaurus/useBaseUrl";
import Link from '@docusaurus/Link';
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

Admin utilities are run by Server admin to carry out admin tasks such as changing the admin password and setting-up scheduled synchronization between BI Hub and BI platforms.

These utilities are located and managed in the backend server.

  <div class="center">
    <Zoom>
        <img alt="Admin Utilities in the Server"
        src={useBaseUrl('doc-images/admin-guide/admin-utilities/admin-utilities.png')}/>
    </Zoom>
    <p>Admin Utilities</p>
  </div>

## Synchronization Information in BI Hub

A summary of synchronizations initiated by both the BI Hub admin and Server admin are displayed in the **Home > Synchronization Information** section page.

  <div class="center">
    <Zoom>
      <img alt="Agent Manager" src={useBaseUrl('doc-images/admin-guide/admin-utilities/synch-info.png')}/>
    </Zoom>
    <p>Agent Manager main screen</p>
  </div>

- The sync utilities executed by the Server Admin is listed as **"Bot"** in the **Last Updated By** column.
- The Utilities run by an Admin from BI Hub app are listed as **"Admin"** in the **Last Updated By** column.
