---
id: ssl-server
title: Configure SSL for BI Hub Server
sidebar_label: Configure SSL for BI Hub Server
---

import useBaseUrl from "@docusaurus/useBaseUrl";
import Link from '@docusaurus/Link';
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

1. Go to `<Installation-Directory>/Visual BI Solutions/VBI View/VBIViewServer` directory.
1. Right-click on **BI Hub Server Config** and click on **Run as administrator**.
1. Select the **Config** tab, and Expand **SSL**.

  <div class="center">
    <Zoom>
      <img alt="Expand SSL in the BI Hub config utility" src={useBaseUrl('doc-images/installation-guide/server-config.png')}/>
    </Zoom>
  <p>Select SSL section</p>
  </div>

1. [x] **Enable** the **SSL** config.

  <div class="center">
    <Zoom>
      <img alt="Upload Private key and Public Certificate" src={useBaseUrl('doc-images/installation-guide/enable-ssl.png')}/>
    </Zoom>
  <p>Upload Private key and Public Certificate</p>
  </div>

1. Choose the **Private Key** with `<filename>.key` extension and **Public Certificate** with `<filename>.crt` extension.
1. Select **Continue**.
1. Click on the **Instances** tab, and restart( <Zoom><img alt="Refresh" src={useBaseUrl('doc-images/installation-guide/refresh.svg')} width="20" height="20"/></Zoom> ) the backend server.
1. Go to SSL config folder, usually at the path `C:\Program Files\Visual BI Solutions\VBI View\VBIViewServer\server\SSL`.
Ensure that the files `<filename>.key` and `<filename>.crt` are copied in this location.
1. Open the browser and type the backend url and port number - `<https://Backend server url>:<Port number>`.

  <div class="center" id="border">
    <Zoom>
      <img alt="BI Hub Server with secured SSL connection" src={useBaseUrl('doc-images/installation-guide/server-ssl-confirm.png')}/>
    </Zoom>
  </div>
  <div class="center"><p>BI Hub Server with secured SSL connection</p></div>

  :white_check_mark: Your BI Hub Server must be loaded with a secured SSL connection.

:::note
If the Server loads up with an "in-secure" connection, please check if the certificate files are valid.
:::
