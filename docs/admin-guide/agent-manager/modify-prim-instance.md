---
id: modify-prim-instance
title: Modifying Primary instance of a cluster
sidebar_label: Modifying Primary instance of a cluster
---

import useBaseUrl from "@docusaurus/useBaseUrl";
import Link from '@docusaurus/Link';
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

Cluster is a grouping of agent instances for performance, availability
and load-balancing purposes. Using the above-mentioned tableau
instances, TableauPrimary and TableauFallback, a cluster called
TableauCluster is created. When the cluster is selected in the Cluster
Manager page, the Cluster details tab shows the Primary instance and the
other instances are secondary/fallback.

  <div class="center">
    <Zoom>
      <img alt="Edit Cluster" src={useBaseUrl('doc-images/admin-guide/admin-functions/mult-instances/clusters.jpg')}/>
    </Zoom>
	<p>Edit Cluster</p>
  </div>

BI Hub administrator can modify this definition of cluster use the steps below:

1. Click on the Edit icon on the Cluster Details tab shown above to launch the Edit Cluster 
   page and further click on the Manage Clusters page. Primary instance of the agent is marked green tick on the left top of the instance. The other instance can be made primary
    by clicking the check box on the left top. 
1. Click Save, Submit. BI Hub will treat the selected instance as the Primary and this can
   be visualized in the Cluster Details tab.

Users wouldn’t even notice this re-definition of cluster and they can continue to launch reports, dashboards.
