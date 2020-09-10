---
id: scheduled-synch-bi
title: Scheduled synchronization with BI platforms
sidebar_label: Scheduled synchronization with BI platforms
---

To synchronize the users or reports from one or more agent instances,
follow the steps below.

1. Navigate to the following location to locate the Instance Synchronization utility: `<VBI View Server installation directory>/utilities/InstanceSynchronization.exe`
1. Click on **File > Open in command prompt > Open command prompt as administrator**
1. Two parameters need to be passed. They are:
 - Synchronization option - It can either be users or reports to synchronize users and reports respectively.
 - Instance list - list of configured instances for which the synchronization process should take place

Any instance name having a space in between its name should be enclosed in double quotes. There is an optional “all” parameter which can be passed instead of individual instance names to synchronize all the
configured instances. Given below are some sample commands which can be stored in a batch file and it can be scheduled to run using the organization’s scheduling tool:

- To synchronize users from all instances `InstanceSynchronization.exe --u --i all`
- To synchronize reports from all instances `InstanceSynchronization.exe --r --i all`
- To synchronize users from certain instances `InstanceSynchronization.exe --u –i BOBJ`, Tableau and “Qlik Sense” where BOBJ, Tableau and Qlik Sense are names of some of the instances configured in BI Hub
- To synchronize reports from certain instances `InstanceSynchronization.exe --r –i BOBJ`, Tableau where BOBJ and Tableau are names of some of the agents configured in BI Hub
