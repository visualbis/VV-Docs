---
id: troubleshooting
title: Troubleshooting Steps
sidebar_label: Troubleshooting Steps
---
import useBaseUrl from '@docusaurus/useBaseUrl';
import Link from '@docusaurus/Link';
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

Follow the below troubleshooting steps, if you did not get the BI Hub welcome webpage response as indicated in the below screenshot.

 <div style={{textAlign: 'center'}}>
   <Zoom>
     <img alt="img" src={useBaseUrl('/doc-images/fig3_3-web-verification.png')}/>
   </Zoom>
 </div>

 *BI Hub Web welcome page*

1. To enable the login for the `https` version of URL `https://<BI Hub Web full URL>`, ensure that both **BI Hub Web** and **BI Hub Server** are configured with SSL protocols.
> A mixed content error is thrown by the browser if *BI Hub Web* and *BI Hub Server* are configured for different protocols.
1. Verify if the *BI Hub Web server* machine is reachable by entering a `ping` command in the command prompt.
  - For "*Error Connecting to BI Hub Server*" error message, open a new tab in the browser and type the BI Hub Server URL including the *Port*, example: `http://bihub.com:12000` which has been configured in step:4 of <Link to={useBaseUrl('docs/installation-guide/install-bihub-windows/web/install')}>Installation of BI Hub Web</Link> section.

The **BI Hub Login** screen should appear now, if not continue with the next steps.

1. Verify if the *BI Hub Server* machine is reachable by entering a `ping` command in the command prompt, and if the URL is resolvable with your DNS settings.
1. Check the firewall or antivirus for rules which may block the *BI Hub Web* and *BI Hub Server* incoming and outgoing connections.
1. Open the browser console by pressing `F12` and check for any mixed content error or insecure response error.
1. If you are using Self Signed SSL certificate, make sure that the SSL certificate has been added to the trusted certificate store, to avoid "insecure response error".

> If none of the above steps worked, login into the server where you have installed BI Hub and try the same steps above in the browser.
> If the *Login* page appears on the server but not on your local machine, the problem is related to your firewall or proxy settings or DNS settings. Contact your network Administrator/team to resolve this problem.

If the problem persis
If you still do not get the *BI Hub Web* login screen after following the above troubleshooting steps, kindly contact the BI Hub Support Team by raising a ticket in the support portal or by sending an email to support@visualbi.com with the supporting log files and images.