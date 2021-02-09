---
id: tableau 
sidebar_label: TABLEAU 
title: Tableau Platform Configuration
---

## Configuration of Tableau Server - Version 2018.2 and above

Follow the below steps to configure the Tableau Server Version 2018.2 and above.

1. Click the Start button and select **All Programs > Accessories > Command Prompt**.
Right-click Command Prompt and select **Run as administrator**.

1. For disabling the ClickJack protection, follow the below command:

 `tsm configuration set -k wgserver.clickjack_defense.enabled -v false`

1. For adding the Trusted Hosts, follow the below command:

 `tsm authentication trusted configure -th <trusted IP address1 or host name1>,<trusted IP address2 or host name2>`

1. For enabling API Access, follow the below command:

 `tsm configuration set -k api.server.enabled -v true`

1. Follow the below command to save all the above changes:

 `tsm pending-changes apply`

## Configuration of Tableau Server - Before Version 2018.2

Follow the below steps to configure the Tableau Server before Version 2018.2.

1. Click the Start button and select **All Programs>Accessories>Command Prompt**.
Right-click Command Prompt and select **Run as administrator**.

1. To enable the trusted host run the following commands in the command prompt. IP address or host name of the Tableau agent Server machine should be given in the place of `<trusted IP addresses or host names>`

 ```bash
 cd "<Tableau Server Installation Location>\Tableau\Tableau Server\<version>\bin"

 tabadmin stop

 tabadmin set wgserver.trusted_hosts "<trusted IP addresses or host names>" 

 tabadmin config

 tabadmin start

 ```

1. To disable clickjack protection run the following commands in the command prompt

 `cd "<Tableau Server Installation Location> \Tableau\Tableau Server\<version>\bin"`

 Run the following commands, in order:

 ```bash

 tabadmin stop

 tabadmin set wgserver.clickjack_defense.enabled false

 tabadmin config

 tabadmin start

 ```