---
id: ssl-server
title: Configure SSL for BI Hub Server
sidebar_label: Configure SSL for BI Hub Server
---

import useBaseUrl from "@docusaurus/useBaseUrl";
import Link from '@docusaurus/Link';
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";


1. Launch BI Hub Server Config from `<Installation-Directory>/Visual BI Solutions/VBI View/VBIViewServer` and expand **SSL**.

  <div class="center">
    <Zoom>
      <img alt="Expand SSL in the BI Hub config utility" src={useBaseUrl('doc-images/installation-guide/server-config.png')}/>
    </Zoom>
  <p>Select SSL section</p>
  </div>

2. [x] **Enable** the **SSL** config, then choose the **Private Key** with `<filename>.key` extension and **Public Certificate** with `<filename>.crt` extension.
Click **Continue**.

  <div class="center">
    <Zoom>
      <img alt="Upload Private key and Public Certificate" src={useBaseUrl('doc-images/installation-guide/enable-ssl.png')}/>
    </Zoom>
  <p>Upload Private key and Public Certificate</p>
  </div>

3. Restart( <Zoom><img alt="Refresh" src={useBaseUrl('doc-images/installation-guide/refresh.svg')} width="20" height="20"/></Zoom> ) the backend server from the <Link to={useBaseUrl('docs/installation-guide/install-bihub-windows/server/config/instances-tab')}>BI Hub Server > Instances</Link> tab.
4. Go to SSL config folder, usually at the path `C:\Program Files\Visual BI Solutions\VBI View\VBIViewServer\server\SSL`.
 - Ensure that the files `<filename>.key` and `<filenaem>.crt` are copied in this location.
5. Open the browser and type the backened url and port number - `<https://Backend server url>:<Port number>`.
  <div class="center">
    <Zoom>
      <img alt="BI Hub Server with secured SSL connection" src={useBaseUrl('doc-images/installation-guide/server-ssl-confirm.png')}/>
    </Zoom>
  <p>BI Hub Server with secured SSL connection</p>
  </div>

  :white_check_mark: Your BI Hub Server must be loaded with a secured SSL connection.

:::note
If the Server loads up with an "in-secure" connection, please check if the certificate files are valid.
:::