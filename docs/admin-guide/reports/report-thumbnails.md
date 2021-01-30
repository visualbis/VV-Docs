---
id: report-thumbnails
title: Report Thumbnails
sidebar_label: Report Thumbnails
---

import useBaseUrl from "@docusaurus/useBaseUrl";
import Link from '@docusaurus/Link';
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

Each report can be given a unique thumbnail to identify it easier. This can be done by using the Images option in the report details.

For our example, navigate to **Platform Folders > BOBJ Test > Analysis for OLAP Samples**. Click on Details icon for the report **Cycle Time_demo**.
Click on the Image Tab. The Image Tab can be also navigated by directly clicking the cloud icon for the respective Report (see Figure below).
  <div class="center">
    <Zoom>
      <img alt="Select Icon for Image Upload screen" src={useBaseUrl('doc-images/admin-guide/admin-functions/reports/rpt1.jpg')}/>
    </Zoom>
  </div>

  *Select Icon for Image Upload screen*

The Image Menu screen is shown below.
  <div class="center">
    <Zoom>
      <img alt="Select & Upload Image" src={useBaseUrl('doc-images/admin-guide/admin-functions/reports/rp10.png')}/>
    </Zoom>
  </div>

  *Select & Upload Image*

Click on upload image to upload any thumbnail and click submit.
  <div class="center">
    <Zoom>
      <img alt="Uploaded Image" src={useBaseUrl('doc-images/admin-guide/admin-functions/reports/rp11.png')}/>
    </Zoom>
  </div>

 *Uploaded Image*

This thumbnail will be now shown for the report when the user logins. If there is no thumbnail uploaded for a report, then a default image will be shown.
  <div class="center">
    <Zoom>
      <img alt="Reports Display in User Login" src={useBaseUrl('doc-images/admin-guide/admin-functions/reports/rp12.png')}/>
    </Zoom>
  </div>

  *Reports Display in User Login*
