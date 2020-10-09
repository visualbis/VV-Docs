---
id: post-config
title: Post Configuration Steps
sidebar_label: Post Configuration Steps
---
import useBaseUrl from "@docusaurus/useBaseUrl";
import Link from '@docusaurus/Link';
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

After successfully configuring the agent and its respective BI Platforms, you can verify it by following the below steps.

* Open the Browser and navigate to `http://<agent_hostname>:<agent_instance_port>`
* If you have configured agent with SSL, use https instead of http.
* You should see the screen as shown in the figure below.

> Change image

<div style={{textAlign: 'center'}}>
  <Zoom>
<img alt="Agent Success Screen" src={useBaseUrl('/doc-images/post-config/agent-success.png')}/>
  </Zoom>
</div>

*Agent Success Screen*

If you didn’t get the success screen, kindly follow the troubleshooting steps given below.

:::warning
REWRITE
### Troubleshooting Steps

- Verify whether the instance is in running state in Agent Instance Manager in BI Hub Web.
- Open the log files which could be found in `<installation folder>/log/<instance_name>.log`
- Check the log files for any errors.
- If you have enabled SSL, verify whether you have valid SSL certificate. Check the logs for any SSL certificate error. If there is SSL certificate error, Server instance will fall back to http. You could verify by visiting the http URL
- Verify any BI Platform connection or authentication errors have occurred in log.
- Change the log level to Info in `manager.ini` and try to restart the agent service manager. After that check whether any errors have occurred in the log.
:::

If you are not able to successfully connect the server after following this steps, kindly contact the BI Hub Support Team by raising ticket in the support portal or by sending email to support@visualbi.com with the supporting log files with the logger level set to Info.
