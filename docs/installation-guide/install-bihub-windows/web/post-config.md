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

1. Go to the URL at `https://<BI Hub Web full URL>` (if SSL is enabled), or `http://<BI Hub Web full URL>` (if SSL is not enabled).
1. A **BI Hub** login page must load up as shown in the below screenshot:
 <div class="center">
   <Zoom>
     <img alt="img" src={useBaseUrl('/doc-images/fig3_3-web-verification.png')}/>
   </Zoom>
   <p>BI Hub Web Verification</p>
 </div>
 
2. Log in to BI Hub with the default super administrator USERNAME: `bihubadmin`, default PASSWORD: `password`. Select the AUTHENTICATION method as *Native* and click **LOGIN**.
> If there is no *Native* authentication method in the dropdown box or the error connecting to the backend error message is shown, follow the troubleshooting steps provided in the next section.
1. In the next **Change Password** screen change the default password.
1. In the next initial **Profile Settings** screen, enter your profile details and click **Save**.

This brings you to the **Admin Dashboard** page on the BI Hub Web application.

<div class="center">
  <Zoom>
    <img alt="Onboarding Information – Options" src={useBaseUrl('doc-images/user-guide/on1.png')}/>
  </Zoom>
  <p>BI Hub Dashboard</p>
</div>

:white_check_mark: **BI Hub Web** is successfully installed and configured.

### Next Steps

- [ ] <Link to={useBaseUrl('#')}>Install the required BI Hub Agents</Link>.

:::note
If you are stuck at any of these verification steps, kindly follow the troubleshooting steps provided in the next section.
:::