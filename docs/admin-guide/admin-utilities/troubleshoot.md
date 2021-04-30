---
id: troubleshoot
title: Troubleshooting
sidebar_label: Troubleshooting
---

import useBaseUrl from "@docusaurus/useBaseUrl";
import Link from '@docusaurus/Link';
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

If any of the synchronizations failed with the "red" status:
- In the BI Hub app, click on the Sync information to fetch more details and download sync logs:

  <div class="center">
    <Zoom>
      <img alt="Sync details" src={useBaseUrl('doc-images/admin-guide/admin-utilities/sync-error.png')}/>
    </Zoom>
    <p>Sync information and logs</p>
  </div>

- In the Server, check the synchronization Server logs in the location - `C:\Program Files\Visual BI Solutions\VBI View\VBIViewServer\server\log\running_log`.
- Agent Sync logs in the respective agent installation directory in the location - `C:\Program Files\Visual BI Solutions\VBI View\<agent-name>\logs`.