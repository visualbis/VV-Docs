---
id: install
title: Installation of BI Hub Web
sidebar_label: Installation of BI Hub Web
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Link from '@docusaurus/Link';

Before you install and configure the **BI Hub Web** the following prerequisites are met:

:white_check_mark: <Link to={useBaseUrl('docs/installation-guide/install-bihub-windows/server/install')}>BI Hub Server</Link> is installed.

:white_check_mark: <Link to={useBaseUrl('#')}>At least one instance of BI Hub Server is configured and in running state</Link>.

Follow the steps below to install the BI Hub Web:

1. Double click the <Link to={useBaseUrl('docs/installation-guide/download-bihub')}>BIHubWeb-X.X.X-windows-installer.exe</Link> file that you downloaded to start the installation process.
1. Click **Next** in the startup page.
1. Read through the license terms and conditions. To proceed further accept the license terms and click **Next** to continue.
1. In the next screen provide the *DNS resolvable URL* and *Port details* of the **BI Hub Server instance**. This URL should be accessed by the Users (i.e., External URL of the BI Hub Server).
:::note
The installation will not proceed if the URL is not accessible.
:::
1. In the **Component Selection** screen select either:
   - *BI Hub Web with NGINX* if you prefer the bundled NGINX webserver or
   - *BI Hub Web without NGINX* If you have your webserver like *Apache* or *Tomcat* INX
1. In the **Directory Selection** screen, choose the directory to install the BI Hub Server. The default directory is `C:\Program Files\Visual BI Solutions\BI Hub\BIHubWeb`. 
   1. For *BI Hub Web without NGINX* Component Selection version, choose the *web root* directory of your webserver.
   > - For *Apache* the directory should be `<Apache installation directory>/htdocs`.
   > - For *Nginx* the directory should be `<Nginx Installation directory>/html`.
   1. For *BI Hub Web with NGINX(bundled)* in the *NGINX Port* details screen, accept the default port or provide your *Port* details.
1. Click **Next** to verify the installation details and start installing the *BI Hub Web* with all the selected components.
1. A successful installation screen provides options to open the *Readme file*.

:white_check_mark: **BI Hub Web** is installed with basic default configurations in your Server.

> The HTTP version of BI Hub Web is now available.

### Next Steps

- [ ] For advanced *BI Hub Web* configuration, follow the next section.
