---
id: post-install
title: Post Installation Steps
sidebar_label: Post Installation Steps
---
import useBaseUrl from "@docusaurus/useBaseUrl";
import Link from '@docusaurus/Link';
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

To verify the successful installation of BI Hub Agents, open the Browser and navigate to the link `http://<agent_hostname>:<agent_instance_port>`.

> Use `https` instead of `http` if you have configured the agents with SSL

You should see the screen as shown in the screenshot below:

<div class="center" id="border">
  <Zoom>
<img alt="Agent Success Screen" src={useBaseUrl('/doc-images/post-config/agent-success.png')}/>
  </Zoom>
</div>
<div class="center"><p>Agent Success Screen</p></div>

## Next Steps

- [ ] A new *Agent* instance must be added and each agent must be configured with the the BI Platform. These steps are covered in the <Link to={useBaseUrl('docs/admin-guide/getting-started/prerequisite/prerequisite')}>Administration Guide - pre-requisite</Link> section.

:::note
If you are unable to successfully connect to the server, kindly contact the BI Hub Support Team by raising a ticket in the support portal or by sending an email to support@bihub.com with the supporting log files with the logger level set to *INFO*.
:::
