---
id: scheduled-synch-ad
title: Scheduled synchronization with AD
sidebar_label: Scheduled synchronization with AD
---

To synchronize the users from Windows AD, follow the steps below.

1. Navigate to the following location to locate the Authentication Synchronization utility:
`<VBI View Server installation directory\/utilities/AuthenticationSynchronization.exe`
1. Click on **File > Open in command prompt > Open command prompt as administrator** and type the command: `AuthenticationSynchronization.exe --a “Windows AD”`

The users from Windows AD Authentication will be synchronized to BI Hub and a success message will be shown. This statement can be stored in batch file and it can be scheduled to run using the organization’s
scheduling tool. Please note that the double quotes should be given only where the parameter has more than one word. If the parameter is just a single term, no quotes are required.
