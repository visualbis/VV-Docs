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


:white_check_mark: BI Hub Server SSL configuration completed.
