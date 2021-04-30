---
id: user-role
title: User Role and Privileges
sidebar_label: User Role and Privileges
---

BI Hub Web application ensures data security by providing different access permissions to the assigned users.
These roles define administrative tasks each role is allowed on BI Hub platform.

We use Microsoft 365 Admin and Windows AD to create user accounts for every user who needs access to BI Hub Reports.

BI Hub Super Admin is a pre-defined role, that gets created at the time of installation.  

<!--
|           Role           | Privileges                                                      | Description                                                                                                                                                                                                                                                                                             |
|:------------------------:|-----------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|       Super Admin        | Create other Admins/users, Customizations                       | The default Admin can perform all the administrative tasks with the global scope for all users: <ul><li>Agent Management</li><li>Instance Management</li><li>User Management</li><li>Authentication</li><li>Audit Management</li><li>Reports - add/upload/remove/synch</li><li>Customizations</li></ul> |
| Admins (Multiple Admins) | All access in Admin Mode, but less privileged than a Super user | <ul><li>Admins can add/remove regular users</li><li>Admins cannot make another account as an Admin</li><li>Admins cannot edit/delete/remove the Admin group</li></ul>                                                                                                                                   |
|        Power User        | Admin mode<sup>1</sup>, and User mode<sup>2</sup>               | This is a user with specific menus in Admin mode                                                                                                                                                                                                                                                        |
|       Regular User       | User mode<sup>2</sup>                                           | This is a regular user with just the User Mode                                                                                                                                                                                                                                                          |
-->

| User            | Description                                                                                                                                                                                                                                                    |
|-----------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Super Admin** | User ( most privileged) configured while installing BI Hub. Super Admin is added to the "Admin" group and is the default user.                                                                                                                                 |
| **Admin**       | User added to the "Admin" group by the Super Admin and granted all the privileges like a Super admin. Except that Admins cannot modify "admin" group permissions, nor can add/remove other Admins. Have both admin-mode<sup>1</sup> and user-mode<sup>2</sup>. |
| **Power User**  | Special user added by an Admin. A Power user can perform all the assigned admin tasks, except they cannot modify the group permissions. A Power user has both admin and user-mode.                                                                             |
| **User**        | This is a regular user with just user-mode<sup>2</sup>.                                                                                                                                                                                                        |

<sup>1</sup>Admin mode: User with administrative tasks
<br></br>
<sup>2</sup>User mode: Regular user activities such as accessing the Reports and customizing own profile settings.
