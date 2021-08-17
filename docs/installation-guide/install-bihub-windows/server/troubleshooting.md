---
id: troubleshooting
title: Troubleshooting Steps
sidebar_label: Troubleshooting Steps
---

import useBaseUrl from "@docusaurus/useBaseUrl";

If you didn’t get the webpage response then kindly follow the steps below to troubleshoot:

* Check if the instance is in running state in the **Configuration Utility**.
* Go to **Start > Run > Services.msc** utility, and check if the **Server instance service** is running.
* Open the log files from the location (default) `<installation folder>/server/log/app-log/<instance_name>.log` and check for any errors.

:::note
For more information, you have to set the log type. Please change the **Log Level** as **info** in the **General Section** of the **Configuration Utility**.
Remember to restart the instance after changing the value.
:::

* If you have enabled SSL, verify whether you have a valid SSL certificate. Check the logs for any SSL certificate error. If there is an SSL certificate error, the Server instance will fall back to HTTP. You could verify by visiting the HTTP URL.
* Verify the log if there are any database connection errors.

If the above troubleshooting steps failed, kindly contact the BI Hub Support Team by raising a ticket in the support portal or by sending an email to support@bihub.com. Kindly attach the supporting log files with the logger level set to **Info** in the **Configuration Utility**.
