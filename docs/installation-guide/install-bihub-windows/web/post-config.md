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

* Open any browser in the server.•If SSL is enabled, go to URL `https://<BI Hub Web full URL>`

* If SSL is not enabled, go to URL `http://<BI Hub Web full URL>`.

* The webpage with the BI Hub login page as shown in the figure below should appear.

<div style={{textAlign: 'center'}}>
  <Zoom>
<img alt="img" src={useBaseUrl('/doc-images/fig3.3-web-verification.png')}/>
  </Zoom>
</ div>

*Figure: BI Hub Web Verification*

* Login to BI Hub with the default administrator username: vbiview, default password: password, select authentication method as Native and click Login button. If there is no Native authentication method in the dropdown box or the error connecting to backend error message is shown, follow the troubleshooting steps provided in the next section.

* In the next change password screen, kindly change the default password.

* The next screen will be initial profile settings screen, provide the necessary details and save the profile settings.

* On saving the profile settings, you will be provided with the admin dashboard.

On finishing these steps, you have successfully installed and configured BI Hub Web. You can skip the troubleshooting section and start installing the required Agents.

If you are stuck at any stage of this verification steps, kindly follow the troubleshooting steps provided in the next section.
