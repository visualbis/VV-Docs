---
id: instances-tab
title: Instances Tab
sidebar_label: Instances Tab
---

import useBaseUrl from "@docusaurus/useBaseUrl";
import Link from '@docusaurus/Link';
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

Instances tab is used to configure **BI Hub Server Instances**. 
This takes advantage of multi-threading processing and increases the CPU utilization.

When you provide multiple instances, you need to load balance the instances on your own.

:::warning
 At least one instance is required to run the BI Hub Server.
:::

  <div style={{textAlign: 'center'}}>
    <Zoom>
      <img alt="BI Hub Server Instances Configuration" src={useBaseUrl('doc-images/installation-guide/bihub-server-instances.png')}/>
    </Zoom>
  </div>

*BI Hub Server Instances*

* To add new instance press, Add New Instances button in the top right corner to launch New form. In that form, provide name of the instance and the port number at which the Instance will need to run.

:::note
Every newly added instance has to be started and must be in the running state
:::

* To start the instances press the play button ( <Zoom><img alt="Play" src={useBaseUrl('doc-images/installation-guide/start.svg')} width="15"/></Zoom> ) for that instance.
* To restart the instance, press the reload icon ( <Zoom><img alt="Play" src={useBaseUrl('doc-images/installation-guide/refresh.svg')} width="20" height="20"/></Zoom> ) for that instance.
* To stop the already started instances, press the stop button ( <Zoom><img alt="Play" src={useBaseUrl('doc-images/installation-guide/stop.svg')} width="15"/></Zoom> ) for that instance.

:::note
Deleting any instance will not delete data, but just the snapshot of it. The data is safely backed up on the database that you configured.
:::

* To delete an instance press trash icon ( <Zoom><img alt="Play" src={useBaseUrl('doc-images/installation-guide/delete.svg')} width="15"/></Zoom> ) for that instance.

With the adding of instances, configuration of BI Hub Server is completed.
To verify the configuration, kindly follow the next section.
