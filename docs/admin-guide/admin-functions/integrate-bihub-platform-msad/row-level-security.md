---
id: row-level-security
title: Row Level Security for Power BI Reports
sidebar_label: Row Level Security for Power BI Reports
---

import useBaseUrl from "@docusaurus/useBaseUrl";
import Link from '@docusaurus/Link';

The Row Level Security feature has been implemented for the Power BI
Reports. The steps followed for the configuration of the Row Level
Security feature has been explained below for each mode:

- [Admin Mode](#admin-mode)
- [User Mode](#user-mode)

## Admin Mode

1.  For Power BI Agent, once the Instance is being newly added, then the status will be in “Yellow” color in the Instance Manager screen (see Figure below). The Yellow color status indicates that the Authentication is pending for the Agent.

  <div style={{textAlign: 'center'}}>
    <Zoom>
      <img alt="Authentication Pending" src={useBaseUrl('doc-images/admin-guide/admin-mode/rw1.jpg')}/>
    </Zoom>
  </div>

1.  Now select the Instance and click the "Login as Admin" button as shown in the below Figure.

  <div style={{textAlign: 'center'}}>
    <Zoom>
      <img alt="Login as Admin" src={useBaseUrl('doc-images/admin-guide/admin-mode/rw2.jpg')}/>
    </Zoom>
  </div>

1.  A pop up window appears where the Admin needs to provide the Power BI Administrator Login credentials (see Figure below).

  <div style={{textAlign: 'center'}}>
    <Zoom>
      <img alt="Power BI Administrator Login pop window" src={useBaseUrl('doc-images/admin-guide/admin-mode/rw3.jpg')}/>
    </Zoom>
  </div>

1.  Now the user will be authenticated successfully as shown in the below Figure.

  <div style={{textAlign: 'center'}}>
    <Zoom>
      <img alt="Successful User Authentication" src={useBaseUrl('doc-images/admin-guide/admin-mode/rw4.jpg')}/>
    </Zoom>
  </div>

1. After providing the login credentials, the Power BI Agent will be activated and now the status will be in “Green” color in the Instance Manager screen (see Figure below).

  <div style={{textAlign: 'center'}}>
  <Zoom>
    <img alt="Instance Manager active" src={useBaseUrl('doc-images/admin-guide/admin-mode/rw5.jpg')}/>
  </Zoom>
  </div>

## User Mode

1.  After logging in as an User in BI Hub application, the user will be able to access the Power BI Reports (see Figure below).

  <div style={{textAlign: 'center'}}>
    <Zoom>
      <img alt="Power BI Report" src={useBaseUrl('doc-images/admin-guide/user-mode/rw6.jpg')}/>
    </Zoom>
  </div>

1. In our example, the VBI View Demo user has mapped the Power BI Agent "Power BI QE Test" with the user “powerbiagent” in the Agent Mapping screen in Admin Mode (see Figure below).

  <div style={{textAlign: 'center'}}>
    <Zoom>
      <img alt="Agent Mapping" src={useBaseUrl('doc-images/admin-guide/user-mode/rw7.jpg')}/>
    </Zoom>
  </div>

1. Now when the VBI View Demo user selects the Power BI Report in the User screen (see Figure: Power BI Report \<PowerBI\>) then he needs to provide the powerbiagent login credentials to access the Power BI Report (see Figure below).

  <div style={{textAlign: 'center'}}>
    <Zoom>
      <img alt="Powerbiagent Login Credentials" src={useBaseUrl('doc-images/admin-guide/user-mode/rw8.jpg')}/>
    </Zoom>
  </div>

1. If the VBI View Demo user has provided any other user login credentials (other than powerbiagent), then an Error Message will be
    displayed as shown below.

  <div style={{textAlign: 'center'}}>
    <Zoom>
      <img alt="Authentication Error Message" src={useBaseUrl('doc-images/admin-guide/user-mode/rw9.jpg')}/>
    </Zoom>
  </div>

1. For the Row Level Security implementation in the Power BI Platform Reports, the Toggle button for the "Comply with Row Level Security" option in the Add Agent screen of the Admin Mode should be enabled (see Figure below).

  <div style={{textAlign: 'center'}}>
    <Zoom>
      <img alt="Row Level Security" src={useBaseUrl('doc-images/admin-guide/user-mode/rw10.jpg')}/>
    </Zoom>
  </div>


