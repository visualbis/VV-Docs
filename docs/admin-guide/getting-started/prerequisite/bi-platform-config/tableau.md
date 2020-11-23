---
id: tableau 
sidebar_label: TABLEAU 
title: Tableau Platform Configuration
---

## Configuration of Tableau Server - Version 2018.2 and above

1. Click the **Start** button and select **All Programs > Accessories > Command Prompt**.
Right-click Command Prompt and select **Run as administrator**.
1. For disabling the ClickJack protection, enter the command:
 ```bash
 tsm configuration set -k wgserver.clickjack_defense.enabled -v false
 ```
1. For adding the Trusted Hosts, enter the command:
 ```bash
 tsm authentication trusted configure -th <trusted IP address1 or host name1>,<trusted IP address2 or host name2>
 ```
1. For enabling API Access, enter the command: 
   ```bash
   tsm configuration set -k api.server.enabled -v true
   ```
2. To save all the above changes, enter the command:
   ```bash
   tsm pending-changes apply
   ``` 

## Configuration of Tableau Server - Before Version 2018.2

1. Click the **Start** button and select **All Programs > Accessories > Command Prompt**.
Right-click Command Prompt and select **Run as administrator**.
1. To enable the trusted host run the following commands in the command prompt. IP address or host name of the Tableau agent Server machine should be given in the place of `<trusted IP addresses or host names>`

 ```bash
$ cd "<Tableau Server Installation Location>\Tableau\Tableau Server\<version>\bin"

 $ tabadmin stop
 $ tabadmin set wgserver.trusted_hosts "<trusted IP addresses or host names>" 
 $ tabadmin config
 $ tabadmin start

 ```

1. To disable clickjack protection, change the location folder with the command:
   ```bash
   $ cd "<Tableau Server Installation Location> \Tableau\Tableau Server\<version>\bin"
   ```

 Run the following commands, in order:

 ```bash

 $ tabadmin stop
 $ tabadmin set wgserver.clickjack_defense.enabled false
 $ tabadmin config
 $ tabadmin start

 ```

:white_check_mark: Tableau Platform configuration completed.
