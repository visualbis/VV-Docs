---
id: search-function
title: Search Function
sidebar_label: Search Function
---
import useBaseUrl from "@docusaurus/useBaseUrl"; 
import Link from '@docusaurus/Link'; 
import Zoom from "react-medium-image-zoom"; 
import "react-medium-image-zoom/dist/styles.css";

Reports can be searched using the parameters Report Name, Report Description, Path, Hub Folders and User Tags associated with the report. User can type the search criterion on the left top of user landing page in the Search box (see Figure below). The matching reports is fetched and displayed on the same page.

  <div style={{textAlign: 'center'}}>
    <Zoom>
      <img alt="Common Search Function" src={useBaseUrl('doc-images/user-guide/cf1.png')}/>
    </Zoom>
  </div>

*Common Search Function* 

Reports can be also searched using Tags that were created in BI Platform by the Admin user. The Figure below shows an example that the Tag ‘Sales Performance’ is used as search.

  <div style={{textAlign: 'center'}}>
    <Zoom>
      <img alt="Search based on BI Platform Tags" src={useBaseUrl('doc-images/user-guide/cf2.png')}/>
    </Zoom>
  </div>

*Search based on BI Platform Tags*

BI Hub responds that the phrase “Sales Performance” matches with any one of the parameters as discussed above and displays all the corresponding Reports (see Figure below).

  <div style={{textAlign: 'center'}}>
    <Zoom>
      <img alt="Search Result" src={useBaseUrl('doc-images/user-guide/cf3.png')}/>
    </Zoom>
  </div>

*Search Result*

The Reports will get displayed under the categories as “Accessible” and Inaccessible”. The “Accessible” Report count shows that all the 75 Reports are already assigned to the respective login user.

  <div style={{textAlign: 'center'}}>
    <Zoom>
      <img alt="Accessible Reports" src={useBaseUrl('doc-images/user-guide/cf4.png')}/>
    </Zoom>
  </div>

*Accessible Reports*

The “Inaccessible” count shows that all the 6 Reports are not assigned to the respective login user, but they are accessible to other users. The logged in user can request access for all these 6 reports (see Figure below).

  <div style={{textAlign: 'center'}}>
    <Zoom>
      <img alt="Inaccessible Reports" src={useBaseUrl('doc-images/user-guide/cf5.png')}/>
    </Zoom>
  </div>

The Inaccessible reports are the reports which cannot be accessed by the user running the search but accessible by other BI Hub users. In other words, before a user launches Not Accessible, BI Hub administrator should have run Sync Users and Sync Reports at least once so that Smart Search can determine the list of reports not accessible to this user.

BI Hub sends an email to the administrator of the BI platform (agent) as indicated in the BI Hub admin module agent definition page and copies the user who raised this request.