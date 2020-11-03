---
id: post-config
title: Post Configuration Steps
sidebar_label: Post Configuration Steps
---
import useBaseUrl from "@docusaurus/useBaseUrl";
import Link from '@docusaurus/Link';
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

To verify the successful installation of BI Hub Agents follow the steps below:
* Open the Browser and navigate to `http://<agent_hostname>:<agent_instance_port>`
* If you have configured agent with SSL, use https instead of http.
* You should see the screen as shown in the figure below.

<div style={{textAlign: 'center'}}>
  <Zoom>
<img alt="Agent Success Screen" src={useBaseUrl('/doc-images/post-config/agent-success.jpg')}/>
  </Zoom>
</div>

*Agent Success Screen*

If you didn’t get the success screen, kindly follow the troubleshooting steps given below.

If you are not able to successfully connect the server after following these steps, kindly contact the BI Hub Support Team by raising ticket in the support portal or by sending email to support@visualbi.com with the supporting log files with the logger level set to Info.
