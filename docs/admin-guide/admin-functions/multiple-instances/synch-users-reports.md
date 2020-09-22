---
id: synch-users-reports
title: Synchronizing users and reports in BI Hub cluster
sidebar_label: Synchronizing users and reports in BI Hub cluster
---

The Agent Manager contains definition of the agent instances. For example, TableauPrimary and TableauFallback are two Tableau instances and they belong to an agent named as Tableau. Both the Tableau agent instances point to the same Tableau BI platform as illustrated by the
Tableau Server URL in the Agent Instance definition page. So, the agent is a logical group of agent instances and is used to Synchronize Users and Reports. Activities such as Report synchronization, User synchronization can be executed at the Agent level or in the Instance
level by selecting the Primary instance only. When the secondary instance is chosen, Sync Reports and Sync Users are not available.
