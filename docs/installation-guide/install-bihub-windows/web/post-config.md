---
id: post-config
title: Post Configuration Steps
sidebar_label: Post Configuration Steps
---

import useBaseUrl from "@docusaurus/useBaseUrl";
import Link from '@docusaurus/Link';
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

To verify the successful installation and configuration of BI Hub Web, perform the following steps.

1. Open any browser in the server.
1. If SSL is enabled, go to URL `https://<BI Hub Web full URL>`
1. If SSL is not enabled, go to URL `http://<BI Hub Web full URL>`.
1. The webpage with the BI Hub login page as shown in the figure below should appear.

 <div style={{textAlign: 'center'}}>
   <Zoom>
     <img alt="img" src={useBaseUrl('/doc-images/fig3_3-web-verification.png')}/>
   </Zoom>
 </div>

 *BI Hub Web Verification*
 
1. Login to BI Hub with the default super administrator username: bihubadmin, default password: password. Select authentication method as *Native* and click Login button. If there is no Native authentication method in the dropdown box or the error connecting to backend error message is shown, follow the troubleshooting steps provided in the next section.
1. In the next change password screen, kindly change the default password.
1. The next screen will be initial profile settings screen, provide the necessary details and save the profile settings.
1. On saving the profile settings, you will be provided with the admin dashboard.

:::success
You have successfully installed and configured BI Hub Web.
You may skip the troubleshooting section and start installing the required Agents.
:::


:::note
If you are stuck at any of these verification steps, kindly follow the troubleshooting steps provided in the next section.
:::