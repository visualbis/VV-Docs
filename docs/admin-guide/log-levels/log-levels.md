---
id: log-levels
title: Log Levels
sidebar_label: Log Levels
---

The application log contains events that happen in the application. 
There are three Logger Levels as mentioned below:

1. **Info** : Represents information messages that capture the events occurring during the usage of the application

1. **Error** : Represents error events that occur during the application

1. **All** : Represents all types of log (i.e. both Info and Error) events captured in the log files

To change the logger level for BI Hub Server, open the configuration utility as administrator and change the log level. The configuration utility can be found inside the BI Hub Server installation directory.

To change the log level for BI Hub Agents, open the`manager.ini` file and change the properties under the Log section. The `manager.ini` file can be found inside the BI Hub Agents installation directory.

:::note
Restart the instances/ services for the log level changes to take place
:::

Logs recorded in the log files are in the following format: LOG TYPE | TIMESTAMP | MESSAGE
