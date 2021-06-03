---
id: instances-tab
title: Instances Tab
sidebar_label: Instances Tab
---

import useBaseUrl from "@docusaurus/useBaseUrl";
import Link from '@docusaurus/Link';
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

The *Instances tab* is used to configure **BI Hub Server Instances**. 
This takes advantage of multi-threading processing and increases CPU utilization.

When you provide multiple instances, you need to load balance the instances on your own.

:::caution
 At least one instance is required to run the BI Hub Server.
:::

  <div class="center">
    <Zoom>
      <img alt="BI Hub Server Instances Configuration" src={useBaseUrl('doc-images/installation-guide/bihub-server-instances.png')}/>
    </Zoom>
    <p>BI Hub Server Instances</p>
  </div>

* Click the **Add instance** button in the top right corner to add a new instance. In the pop-up window, enter an *instance* name and the *Port* number at which the instance will run.

:::note
Every newly added instance has to be started and must be in the running state.
:::

* To start the instances press the play button ( <Zoom><img alt="Play" src={useBaseUrl('doc-images/installation-guide/start.svg')} width="15"/></Zoom> ) for that instance.
* To restart the instance, press the reload icon ( <Zoom><img alt="Refresh" src={useBaseUrl('doc-images/installation-guide/refresh.svg')} width="20" height="20"/></Zoom> ) for that instance.
* To stop the already started instances, press the stop button ( <Zoom><img alt="Stop" src={useBaseUrl('doc-images/installation-guide/stop.svg')} width="15"/></Zoom> ) for that instance.

:::note
Deleting any instance will not delete data, but just the snapshot of it. The data is safely backed up on the database that you configured.
:::

* To delete an instance press trash icon ( <Zoom><img alt="Play" src={useBaseUrl('doc-images/installation-guide/delete.svg')} width="15"/></Zoom> ) for that instance.

:white_check_mark: BI Hub Server instance is installed and configured.

## Next Steps

* [ ] To verify the configuration, kindly follow the next section.
