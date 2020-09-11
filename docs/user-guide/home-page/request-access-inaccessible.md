---
id: request-access-inaccessible
title: Request Access for Inaccessible Reports
sidebar_label: Request Access for Inaccessible Reports
---
import useBaseUrl from "@docusaurus/useBaseUrl"; 
import Link from '@docusaurus/Link'; 
import Zoom from "react-medium-image-zoom"; 
import "react-medium-image-zoom/dist/styles.css";

The user can request access for the specific Report to the Admin from the Inaccessible page and the Admin will receive a Request Access Notification mail for the Report. Similarly the user will also receive the Access Notification mail from the Admin.

The following steps explains the Request Access flow:

1. Login into BI Hub Screen as a User.
1. Navigate to the Inaccessible Reports page by searching with the respective Report Folder Name. In our example, the user has selected **"Analysis"** Folder and the **"Mechanical Downtime Analysis"** Report has been selected for Access Request (see Figure below).

  <div style={{textAlign: 'center'}}>
    <Zoom>
      <img alt="Reports selected for Request Access" src={useBaseUrl('doc-images/user-guide/rq1.png')}/>
    </Zoom>
  </div>

 *Report selected for Request Access*

1. Now click the Request Access as shown in the Figure above. You will be navigated to the Request Access Window and click "Yes" to request access for the "Mechanical Downtime Analysis" Report (see Figure below).

  <div style={{textAlign: 'center'}}>
    <Zoom>
      <img alt="Request Access Window" src={useBaseUrl('doc-images/user-guide/rq2.png')}/>
    </Zoom>
  </div>

  *Request Access Window*

2. The Access requested by the user will be triggered as mail message as well as notification pop up to the Admin User and the Access Notification will be sent as mail message as well as notification pop up to the requested user.

