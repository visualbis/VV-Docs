---
id: delete-instance-cluster
title: Deleting instances of cluster
sidebar_label: Deleting instances of cluster
---

import useBaseUrl from "@docusaurus/useBaseUrl";
import Link from '@docusaurus/Link';
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

Instances of cluster are same as other agent instances and the **Agent Manager > Instance Manager** lists those instances, with the primary instance marked with an asterisk. BI Hub enables the administrator to delete the instances and/or add new instances to the cluster. The deletion step happens in the **Agent Manager > Instance Manager** by selecting the instance and clicking delete and adding new instances to the cluster happens in Cluster Manager as indicated in Section <Link to={useBaseUrl('docs/admin-guide/admin-functions/multiple-instances/modify-prim-instance')}>Modifying Primary instance of a cluster</Link>. If the Primary is deleted, BI Hub automatically makes the secondary instance as Primary and it is the responsibility of
the administrator to add a second instance to the cluster.
  
  <div class="center">
    <Zoom>
      <img alt="Cluster Instances" src={useBaseUrl('doc-images/admin-guide/admin-functions/mult-instances/delete-instance.png')}/>
    </Zoom>
	<p>Cluster Instances</p>
  </div>

