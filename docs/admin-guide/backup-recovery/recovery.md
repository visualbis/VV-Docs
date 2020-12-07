---
id: recovery
title: Recovery (in the event of a system crash)
sidebar_label: Recovery (in the event of a system crash)
---

Follow the steps below in case of a Recovery:

-  In the event of a system crash and if the application needs to be re-installed OR if the application needs to be migrated from one server to another, contact Visual BI support (<support@bihub.com>) to deactivate the current instance details and activate a new one.
-  BI Hub Server:
 1. As a part of your application recovery, when you configure the application database, use the recent database backup.
 2. Replace the backup files in the appropriate folder and create the instances BI Hub Agents:
    - To restore all the agent instances, after the new installation of agents follow the steps below
        1. Stop the service manager if it is running
        2. Replace the manager.ini and the conf folder which has been backed up as said in Backup
        3. Open manager.ini file and add Mode=recovery under the Main section
        4. Start the service manager. This recovers all the agent instances and logs the output in logsServiceManager.log
        5. After recovery of instances, remove the value that has been added in 3 above
     - Repeat the above steps for all the agents to be recovered.

- BI Hub Web:

Replace the backup files in the appropriate folder inside the installation directory.
