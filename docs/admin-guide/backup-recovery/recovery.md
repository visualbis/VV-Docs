---
id: recovery
title: Recovery (in the event of a system crash)
sidebar_label: Recovery (in the event of a system crash)
---

Follow the steps below in case of a Recovery:

* In the event of a system crash if the application needs to be re-installed or migrated from one server to another, contact VBI View LLC support (<support@bihub.com>) to deactivate the current instance details and activate a new one.
* BI Hub Server:

1. As part of your application recovery, when you configure the application database use the recent database backup.
1. Replace the backup files in the appropriate folder and create the instances for BI Hub Agents:

   * To restore all the agent instances, after the new installation of agents follow the steps below:

   1. Stop the service manager if it is running.
   1. Replace the `manager.ini` and the `conf` folder which have been backed up as mentioned in the Backup section.
   1. Open `manager.ini` file and add `Mode=recovery` under the Main section.
   1. Start the service manager. This recovers all the agent instances and logs the output in `logsServiceManager.log`.
   1. After recovery of instances, remove the `Mode=recovery` value added in the `manager.ini` file as listed in the above step.
 
Repeat the above steps for all the agents to be recovered.

* BI Hub Web:

Replace the backup files in the appropriate folder inside the installation directory.
