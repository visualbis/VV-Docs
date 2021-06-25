---
id: backup
title: Backup
sidebar_label: Backup
---

BI Hub stores crucial metadata information in database and the configuration information in files. It is important that a backup of this database and config files are done periodically so that they can be used in recovery in the event of an application crash.

Follow the steps below to perform a backup.

* All the config folders which contains the configuration information of the installed software (BI Hub Server, BI Hub Agents and BI Hub Web) are to be backed up. The following details contain the location of the config files for the installed software:

  * BI Hub Server: `<Installation Location>VBI ViewVBIViewServerserverconfig.json`
  * BI Hub Web: `<Installation Location>config.js`
  * For all BI Hub Agents, the file `manager.ini` has to be included for backup along with other configuration files. The `manager.ini` file can be found inside the installation directory of every agents.
    1. `<Installation Location>VBI View<Platform name>Agentconf`

Apart from these files, every agent has an SSL and TRUSTED folder in their installation directory tha stores the SSL certificates and trusted configuration files. Backing up these files are preferred.

BI Hub application database is to be backed up based on enterprise’s backup policy. Daily backup of the database is preferred.

If there is a need to back up the log files for troubleshooting purposes, the location of the Log files is mentioned in the Log Levels.
