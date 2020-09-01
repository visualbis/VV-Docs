---
id: looker 
<<<<<<< HEAD
sidebar_label: LOOKER 
---
=======
sidebar_label: LOOKER
title: Looker Platform Configuration
---

import useBaseUrl from "@docusaurus/useBaseUrl";
import Link from '@docusaurus/Link';
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

Admin needs to configure the following keys in Looker platform in order to authenticate the application and fetch the Dashboards and Users from it.

**API3 Credentials**

1. Login into Looker Instance as Admin

1. Navigate to **Admin -> Users**

  <div style={{textAlign: 'center'}}>
    <Zoom>
       <img alt="Looker Admin User" src={useBaseUrl('/doc-images/looker/looker-admin-user.png')}/>
    </Zoom>
  </div>

1. Click on Edit Keys and generate new *Client_Id* and *Client_Secret*.

  <div style={{textAlign: 'center'}}>
    <Zoom>
       <img alt="Client Id and Client Secret" src={useBaseUrl('/doc-images/looker/client-id-secret.png')}/>
    </Zoom>
  </div>

**API Host URL**

API Host URL is used to reach the Looker API server endpoint. It must have host name and port. The default port is 19999. Kindly follow the below steps to setup the URL.

1. Click Admin to open the Admin menu

1. Click API in the Admin panel

1. Set the new API in API Host URL input field

  <div style={{textAlign: 'center'}}>
    <Zoom>
       <img alt="Looker Admin Page" src={useBaseUrl('/doc-images/looker/admin-page.png')}/>
    </Zoom>
  </div>

**Looker’s Secret Key**

The Looker’s Secret Key is used to validate the SSO embedding request and embed the dashboards into application. Follow the below steps to setup the looker’s secret key in looker instance.

1. Go to the Embed page in the Admin section of Looker

1. Select "Enabled" from the Embed Authentication drop-down and the press Update

1. Press the Set Secret button to generate the embed secret. Copy this secret to a secure location, because you will not be able to retrieve it from Looker again without resetting it. Resetting the key will break any embeds using the old key.

<div style={{textAlign: 'center'}}>
  <Zoom>
<img alt="Embed Page" src={useBaseUrl('/doc-images/looker/embed-page.png')}/>
  </Zoom>
</div>
>>>>>>> 7cd3941... Restructured BI Hub Agents configurations
