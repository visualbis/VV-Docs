---
id: troubleshooting
title: Troubleshooting Steps
sidebar_label: Troubleshooting Steps
---
import useBaseUrl from '@docusaurus/useBaseUrl';
import Link from '@docusaurus/Link';
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

Follow the below troubleshooting steps, incase you did not get the BI Hub welcome webpage response as indicated in the below screenshot.

 <div style={{textAlign: 'center'}}>
   <Zoom>
     <img alt="img" src={useBaseUrl('/doc-images/fig3_3-web-verification.png')}/>
   </Zoom>
 </div>

 *BI Hub Web welcome page*

1. If you are trying with the https version of the URL, make sure that the BI Hub Server is also configured with SSL properly. You cannot have BI Hub Web in the https and BI Hub Server in HTTP protocol. The mixed content error will be thrown by the browser if you try to mix these two protocols.
1. Verify whether the BI Hub Web server machine is reachable by using a ping test from the command prompt.
2. If you see the webpage response with the Error Connecting to BI Hub Server error message, then open a new tab in the browser and type the BI Hub Server URL including the port, example: `http://bihub.com:12000` which has been configured during the [Installation of BI Hub Web](install), step number 4. You should see the webpage with the message "Welcome to BI Hub" as shown in the above screenshot.
1. If you couldn’t get that page, then check whether the BI Hub Server machine is reachable by doing a ping test from the command prompt. Also check whether the URL is resolvable with your DNS settings.
1. Check the firewall or antivirus for rules which may block the BI Hub Web and BI Hub Server incoming and outgoing connections.
1. Open the browser console by pressing F12 and check for any mixed content error or insecure response error.
1. If you are using Self Signed SSL certificate, make sure that the SSL certificate has been added to the trusted certificate store, to avoid insecure response error.
1. If none of the above steps work, login into the server where you have installed BI Hub and try the same steps above in the browser. If you are able to get the login page on the server but on your local machine, the problem maybe your firewall or proxy settings or else DNS settings. Contact your network administrator/team to resolve this problem.

If you are not able to successfully connect the BI Hub Web after following these steps, kindly contact the BI Hub Support Team by raising a ticket in the support portal or by sending an email to support@visualbi.com with the supporting log files and images.