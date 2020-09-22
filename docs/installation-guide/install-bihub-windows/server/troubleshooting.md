---
id: troubleshooting
title: Troubleshooting Steps
sidebar_label: Troubleshooting Steps
---

import useBaseUrl from "@docusaurus/useBaseUrl";

If you didn’t get the webpage response then kindly follow the steps below to troubleshoot 

* Verify whether the instance is in running state in Configuration Utility.
* Open the log files which could be found in `<installation folder>/server/log/<instance_name>.log`.
* Check the log files for any errors.
* If you have enabled SSL, verify whether you have valid SSL certificate. Check the logs for any SSL certificate error. If there is SSL certificate error, Server instance will fall back to http. You could verify by visiting the http URL.
* Verify any Database connection errors have occurred in log.•Change the log level to Info in configuration utility and try to restart the server instance. After that check whether any errors have occurred in the log.
* For Agents, go to agent installation folder, edit the manager.ini, change the log level to info here to set the log level.
* For agents, the log files could be found in `<installation folder>/logs/*.log`.

If you are not able to successfully connect the server after following this steps, kindly contact the BI Hub Support Team by raising ticket in the support portal or by sending an email to support@visualbi.com with the supporting log files with the logger level set to Info.