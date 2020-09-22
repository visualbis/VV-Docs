---
id: user-dashboard
title: User Dashboard
sidebar_label: User Dashboard
---

import useBaseUrl from "@docusaurus/useBaseUrl"; 
import Link from '@docusaurus/Link'; 
import Zoom from "react-medium-image-zoom"; 
import "react-medium-image-zoom/dist/styles.css";

In addition to my dashboard, the admin created dashboards will also be seen in the home page as tabs. Also, if the specific user has the access for the reports in User Mode, then those reports will be live loaded. If the specific user do not have access for the reports in User Mode, then those reports will be loaded as thumbnail reports (see Figure below).

  <div style={{textAlign: 'center'}}>
    <Zoom>
      <img alt="User Dashboard with Reports" src={useBaseUrl('doc-images/user-guide/userdb1_.png')}/>
    </Zoom>
  </div>

If any report is being represented with lock icon, then it indicates that there is no access to the report and the report can be requested for access. By clicking the report with the lock icon, then the access can be requested for that report which follows the same functionality as explained in <Link to={useBaseUrl('docs/user-guide/home-page/request-access-inaccessible')}>Section: Request Access for Inaccessible Reports</Link>.

  <div style={{textAlign: 'center'}}>
    <Zoom>
      <img alt="Reports with Lock icon" src={useBaseUrl('doc-images/user-guide/userdb2.png')}/>
    </Zoom>
  </div>

*Reports wit Lock icon*

Once the Reports have been requested for access, then the Reports will be displayed with the Text Message as "Request Pending" as shown in the below Figure.

  <div style={{textAlign: 'center'}}>
    <Zoom>
      <img alt="Reports with Request Pending Message" src={useBaseUrl('doc-images/user-guide/userdb3.png')}/>
    </Zoom>
  </div>

When the Admin disables the order preference option and enable my dashboard option in the <Link to={useBaseUrl('docs/admin-guide/admin-functions/settings/user-dashboard')}>Dashboard settings</Link>, then the user cannot set the order and can only view *My Dashboard* in the User Page (see Figure below).

  <div style={{textAlign: 'center'}}>
    <Zoom>
      <img alt="User Page with disabled status for order preference and my dashboard options" src={useBaseUrl('doc-images/user-guide/userdb4.png')}/>
    </Zoom>
  </div>

*User Page with disabled status for order preference and my dashboard options*