---
id: user-role
title: User Role and Privileges
sidebar_label: User Role and Privileges
---

BI Hub Web application ensures data security by providing different access permissions to the assigned users.
These permissions define administrative tasks each role is allowed on BI Hub platform.

We use Microsoft 365 and Windows AD to create user accounts for every user who needs access to BI Hub Reports.

BI Hub Super Admin is a pre-defined role, that gets created at the time of installation.  

| User            | Description                                                                                                                                                                                                                                                |
|-----------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Super Admin** | User( most privileged ) configured while installing BI Hub. Super Admin is added to the "Admin" group and is the default user.                                                                                                                             |
| **Admin**       | User added to the "Admin" group by Super Admin and granted all the privileges like a Super admin. Except that Admins cannot modify "admin" group permissions, nor can add/remove other Admins. Have both admin-mode<sup>1</sup> and user-mode<sup>2</sup>. |
| **Power User**  | Special user added by an Admin. A Power user can perform all the assigned admin tasks, except they cannot modify the group permissions. A Power user has both admin and user-mode.                                                                         |
| **User**        | This is a regular user with just user-mode<sup>2</sup>.                                                                                                                                                                                                    |

<sup>1</sup>Admin mode: User with administrative tasks
<br></br>
<sup>2</sup>User mode: Regular user activities such as accessing the Reports and customizing own profile settings.
