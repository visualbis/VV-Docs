---
id: initial-setup
title: BI Hub Initial Set up
---

import useBaseUrl from "@docusaurus/useBaseUrl";
import Link from '@docusaurus/Link';
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

Admin can perform the following functions to integrate BI Hub with the various BI platforms:

* Set up trusted Authentication(s) between BI Platform and BI Hub application.
* Establish connectivity between BI Hub, directory service and BI platforms by creating Agents.
* Synchronize and maintain BI Hub users and accessibility to reports.
* Create and maintain metadata of the reports.
* Configure settings for all BI Hub users.
* Maintain and configure the backup and restore of BI Hub data.
* Monitor usage of BI Hub using Audit module.

## Maintenance of BI Hub

Once the initial setup is complete, following are some of the on-going maintenance activities that you must perform:

1. <Link to={useBaseUrl('docs/admin-guide/admin-functions/maintenance-bihub/add-new-user')}>Adding a new user to BI Hub</Link>: To add new users manually without synchronizing from Microsoft AD or other LDAP.
2. <Link to={useBaseUrl('docs/admin-guide/admin-functions/maintenance-bihub/add-reports-existing-user')}>Add Reports to an existing User</Link>: To add reports to a user manually without performing bulk synchronization.
3. <Link to={useBaseUrl('docs/admin-guide/admin-functions/maintenance-bihub/edit-bihub-users')}>Edit BI Hub Users</Link>: Modify existing information of users described.
4. <Link to={useBaseUrl('docs/admin-guide/user-manager/user-management#edit-the-password-of-bi-hub-native-authenticated-user')}>Edit the password of BI Hub (Native)</Link>: To change password of a user authenticated by BI Hub.
5. <Link to={useBaseUrl('docs/admin-guide/user-manager/user-management#delete-user')}>Delete a User</Link>: To delete a user.

## Begin With

Set up trusted Authentication(s) between BI Platform and BI Hub application. [ Refer the <Link to={useBaseUrl('docs/admin-guide/authenticate/manage-auth')}>Authentication</Link> section. ]

## Next Steps

Manage Agents and Instances from <Link to={useBaseUrl('docs/admin-guide/agent-manager/agent-manager-main')}>Agent Manager</Link> section, and Groups and users from the <Link to={useBaseUrl('docs/admin-guide/user-manager/user-manager-main')}>User Manager</Link> section.
