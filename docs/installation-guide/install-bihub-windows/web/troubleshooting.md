---
id: troubleshooting
title: Troubleshooting Steps
sidebar_label: Troubleshooting Steps
---
import useBaseUrl from '@docusaurus/useBaseUrl';
import Link from '@docusaurus/Link';
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

If you didn’t get the webpage response as shown in the <Link to={useBaseUrl('docs/installation-guide/install-bihub-windows/web/post-config')}>figure number 3.3</Link>, then kindly follow the steps below to troubleshoot on your own.

* If you are trying with https version of URL, make sure that the BI Hub Server is also configured with SSL properly. You cannot have BI Hub Web in https and BI Hub Server in http protocol. Mixed content error will be thrown by the browser, if you try to mix these two protocols.
* Verify whether the BI Hub Web server machine is reachable by using ping test from the command prompt.
* If you see the webpage response with the Error Connecting to Backend error message, then open new tab in the browser and type the BI Hub Server URL which has been configured during the installation step number 4. You should see the webpage with the message Welcome to BI Hub as shown in the figure 3.2.
* If you couldn’t get that page, then check whether the BI Hub Server machine is reachable by doing ping test from the command prompt. Also check whether the URL is resolvable with your DNS settings.
* Check the firewall or antivirus for rules which may block the BI Hub Web and BI Hub Server incoming and outgoing connections.
* Open the browser console by pressing F12 and check for any mixed content error or insecure response error.
* If you are using Self Signed SSL certificate, make sure that the SSL certificate has been added to trusted certificate store, to avoid insecure response error.

If you are not able to successfully connect the BI Hub Web after following this steps, kindly contact the BI Hub Support Team by raising ticket in the support portal or by sending email to support@visualbi.comwith the supporting log files and images.