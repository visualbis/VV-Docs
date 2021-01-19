---
id: create-cluster
title: Creating a Cluster
sidebar_label: Creating a Cluster
---

import useBaseUrl from "@docusaurus/useBaseUrl";
import Link from '@docusaurus/Link';
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

1. Click on *Agent Manager* from the menu pane. Click on the *Cluster Manager* Tab and then click *Add cluster*.
  <div class="center">
    <Zoom>
      <img alt="Cluster Manager Tab" src={useBaseUrl('doc-images/admin-guide/admin-functions/mult-instances/cluster-manager-tab.jpg')}/>
    </Zoom>
  </div>

 *Cluster Manager Tab*
1. Give a name for the cluster, URL, Port and the type of agent to be clustered. Note that the URL and Port must be the same used by the load balancer which is already deployed in the enterprise. Contact the administrator of the enterprise to get these details.
2. Click on Manage clusters to display a list of instances for that agent.
3. Choose the required instances (These instances should have been created already in the Agent Manager) and mark one of them as Primary and click save and then click Submit. This creates a cluster of that agent (type).
4. The cluster manager home page lists all the clusters created in BI Hub and selecting a cluster reveals the details of the instances of that cluster.

  <div class="center">
    <Zoom>
      <img alt="Add Clusters" src={useBaseUrl('doc-images/admin-guide/admin-functions/mult-instances/cluster-manager2.png')}/>
    </Zoom>
  </div>

*Add Clusters*

