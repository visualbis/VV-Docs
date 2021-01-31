---
id: mult-instances
title: Multiple Instances of BI Hub
sidebar_label: Cluster Manager
---

To ensure high availability or perform load balancing when a large number of concurrent users (excess of 800) use BI Hub, multiple instances of BI Hub agents are required. Two or more instances of the same agent type can be clustered together and they point to the same BI
platform. 

For example, two *Tableau* agents are created to form a cluster and these two agents point to the same Tableau platform. If one agent fails, the load will be taken by another instance, thus ensuring high availability. 
Similarly, if a large number of BI Hub concurrent users launch Tableau reports, these two agents perform load balancing. Tying up the two agents to form an agent cluster is accomplished using the BI Hub cluster manager. This BI Hub agent cluster interacts with the cluster/load balancer already setup in the enterprise to handle load balancing/high availability. In fact, the details entered during BI Hub cluster setup such as URL, Port etc., is based on the configuration of
the Load Balancer used in the enterprise.
