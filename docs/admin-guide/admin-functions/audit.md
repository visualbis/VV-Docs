---
id: audit 
title: Audit
sidebar_label: Audit
---

import useBaseUrl from "@docusaurus/useBaseUrl";
import Link from '@docusaurus/Link';
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

The user can navigate to the Audit Menu as shown below.

  <div style={{textAlign: 'center'}}>
    <Zoom>
      <img alt="Audit" src={useBaseUrl('doc-images/admin-guide/admin-functions/audit.jpg')}/>
    </Zoom>
  </div>

*Audit*

The Audit Menu contains three tabs – Administrator, User and Reports. Administrator tab displays uptime/downtime of agents, Most and least Viewed reports, Most active and Least active users etc., In order to see the exact downtime and uptime of agents, hover the mouse on the time graph (see Figure below).

  <div style={{textAlign: 'center'}}>
    <Zoom>
      <img alt="Audit - Administrator Tab" src={useBaseUrl('doc-images/admin-guide/admin-functions/audit1.jpg')}/>
    </Zoom>
  </div>

*Audit - Administrator Tab*

Similarly, the User tab displays valuable information about specific users. In the user tab, select a particular user to view details such as list of Accessible reports, list of reports revoked from the BI platform for that user and the list of reports frequently accessed by the user.
  <div style={{textAlign: 'center'}}>
    <Zoom>
      <img alt="Audit - User Tab" src={useBaseUrl('doc-images/admin-guide/admin-functions/audit2.jpg')}/>
    </Zoom>
  </div>

*Audit - User Tab*

The Reports Tab will be displaying the Report details in the Audit screen. Here you will be able to view the Report Name, Agent Name, Number of users who have accessed that Report, Number of Views for that Report and Number of Favourites assigned to the specific Report (see Figure below).
  <div style={{textAlign: 'center'}}>
    <Zoom>
      <img alt="Audit - Reports Tab" src={useBaseUrl('doc-images/admin-guide/admin-functions/audit3.jpg')}/>
    </Zoom>
  </div>

*Audit - Reports Tab*

As part of the New Release, the User details can be sorted based on the fields namely User Name, Created On, No. of Reports, Removed Reports, Last Login and Last Password Change. The User Name details can be also filtered (see Figure below).

  <div style={{textAlign: 'center'}}>
    <Zoom>
      <img alt="Audit - User Tab with sorting and filter options" src={useBaseUrl('doc-images/admin-guide/admin-functions/adduser.jpg')}/>
    </Zoom>
  </div>

*Audit - User Tab with sorting and filter options*

Similarly the Report details can be sorted based on the fields namely Report Name, Agent Name, No. of users, No. of views and No. of Favourites. The Report Name and Agent Name details can be also filtered (see Figure below).

  <div style={{textAlign: 'center'}}>
    <Zoom>
      <img alt="Audit - Reports Tab with sorting and filter options" src={useBaseUrl('doc-images/admin-guide/admin-functions/audrep.jpg')}/>
    </Zoom>
  </div>

*Audit - Reports Tab with sorting and filter options*