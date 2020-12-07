---
id: changelog
title: Changelog
sidebar_label: Changelog
---
import useBaseUrl from '@docusaurus/useBaseUrl';

## v2.5.0 - BI Hub (Oct 13, 2020)

### Features

* SAML Login Integration support
* Agent Sync Users flow changed which includes Windows AD Authentication
* Support for Tableau Agent sub-project
* Support for File BI Agent long file path

<details>
<ul><a href="https://bihub.com/blogs/">BI Hub Blogs</a></ul>
<summary>
resources
</summary>
</details>

## v2.4.0 - BI Hub (Jul 20, 2020)

### Features

* Enables Admin to logout from the agents which requires admin login
* Implemented User Settings page where User can go and configure available options
* Feature which enables User to login and logout from the OAuth agents available to him
* Auto OAuth logout if the token expires at any time during synch process
* Announcement Feature which enables admin to announce *info*, *warning* and *alert* message in the specified timeline.
* Thumbnail Lazy loading for all the views has been implemented
* Clear all Notification feature added for the user
* Settings to disable or enable Agent down notification mail has been implemented
* Custom CSS feature which enables the User to implement their own advanced CSS styles and colors
* Agent Instance Health Check algorithm has been improved to provide a better health check.

### Important Fixes
We have also fixed a good amount of bugs with this release. Some important bugs or issues that have been fixed in this version:

* Custom URL with special characters validation bug fixed
* Admin mode, Advance sync info calendar related issues
* User Mode, search, and advanced search performance fixes
* CSS changes due to the latest chrome changes
* Clustered agent Instances, issues with Pre Sync Action while syncing reports
* Power User, dashboard related fixes
* Admin Mode, Edit User related fixes
* SAC and Tableau agent related fixes with latest changes in the BI Platform

<details>
<summary>
<a href="https://bihub.com/whats-new-in-bi-hub-2-4-0/">What’s new in BI Hub v2.4.0?</a>
</summary>
</details>

## v2.3.1 (Jun 01, 2020)

* Fixes for Chrome 83 Download issue
* Support for Cognos Agent
* Users OAuth automatic logout in case of token invalid or logged out from Power BI
* Issue with Open reports in New tab fixed
* Power BI Shared with Me reports related fixes
* Regression issue w.r.t Postgres and MSSQL is fixed

## v2.3.0 (May 06, 2020)

* Rebranded VBIView to BI Hub
* File Agent to support PDF files to open in the browser itself
* Thumbnail priority of the dashboard has been changed with respect to the admin side settings
* Certification, the default attribute was made configurable
* Support for LDAPS was implemented in Windows AD
* BOBJ Sessions were handled perfectly, hereafter there won't be any dangling sessions Special Character and navigation issue in the folder names issue
* Breadcrumb will show from where it is launched instead of the actual location of the folder. CSS issue with Notification count
* SSRS/PBIRS issue with the group access control has been fixed
* Multiple Socket issue and audit user tab performance issues.

### Important Fixes
We have also squashed some bugs with this release. Some of the important fixes are:

* Fix for dangling BOBJ Sessions
* Fix for special character in folder names causing navigation issues
* CSS issue with notification count and other minor tweaks
* SSRS/PBIRS issue with the group access control has been fixed
* Multiple Socket issue
* Improved the performance of the Audit user tab
* A few cross-browser issues on Postgres and MS SQL have been fixed.

<details>
<summary>
<a href="https://bihub.com/whats-new-in-bi-hub-v2-3-0/">What’s new in BI Hub v2.3.0?</a>
</summary>
</details>

## v2.2.3 (Mar 06 2020)

* Performance Fixes when editing users
* Lazy loading in getting windows AD Users
* Support for BOBJ Instances
* Support for Spotfire V10
* Support for Qlik View
* Bug fixes related to SAC
* Initial version of Mobile App

## v2.2.2 (Jan 27 2020)

* Performance fixes
* BOBJ Rest Agent Performance Optimization
* BOBJ Rest Agent supports Cookie Based Trusted Authentication
* OneDrive Agent Added

## v2.2.1 (Oct 25 2019)

* Audit - Table grid improved with filtering and sorting options
* Custom URL - Ability to restrict access to set of users or group
* Notifications - Notification and Mail to be sent to the user when a report request access is rejected by the admin
* Settings - Default Launch in new tab admin
* Sharepoint - Office Files in Edit mode when launched in New Tab
* Default Custom Attribute added for Mobile Enabled
* Option for Custom URL to open it in New Tab
* Removed the restriction of Dashboard Menu reordering

## v2.2.0 (Sep 11 2019)

* User Dashboard – Custom Dashboard can be created and shared by admin User Dashboard – More settings and power user options for Admin Looker Agent
* SharePoint Agent
* Smart Search – Refined to bring more accurate result when searching from the textbox
* SSRS Agent – Report URL Format changed
* Windows AD User Sync improvement
* Power BI Agent – Optimization and Groups changed

## v2.1.1 (July 5 2019)

* Settings - Rename and Enable/Disable Navigation Menu
* Custom URL – it will have all the features of Report
* Automatic Sync Trigger for OAuth Agent, when the user authenticates Background sync task queue has been implemented
* Reload Option for Embedded Report Settings - BI Hub Website Tab Heading Agent Down Notification
* Multiple Admin Account
* Audit - Shows Report level details
* Exposing Audit Data - As REST API

## v2.1.0 (May 16 2019)

* UI/UX changes for the Settings Menu in Admin Mode
* Included the About Information Page under Help Icon
* Added support for Changing Login Page Logo
* Added support for SSO with NTLM
* Added support for Power BI Apps and Reports
* Added support for disabling report embed in dashboard
* Added support for restricting the number of reports that can be pinned in dashboard Added support for show/hide BI Platform Page
* Added support to disable Inaccessible Reports Search
* Fixed other minor issues and Cache Issues for Frontend
* Fixed problem with Tableau Same Workbook name Issue

## v2.0.1 (Apr 17 2019)

* Show Instance names in user mode (List and tile views)
* Added support for downloading synchronization logs from Admin mode
* Fix for mapping AD additional attribute during synchronization
* Fixed Tableau agent to support paginated results
* Cross-browser (IE, Edge, Firefox) issue fixes

## v2.0.0 (Mar 21 2019)

* Added support for Advanced Search – Search by Report Metadata
* Added support for Power BI – Row Level Security
* Performance optimization fixes
* Added status of components configured in Admin Dashboard
* Fixed Site accessibility issues
* Added support for Automatic Instance recovery
* Added support for the scheduled Agent health check

## v1.5.5 (Feb 01 2019)

* Added support for Power Users
* Added Linux Platform support (1.5.4 version)
* Added onboarding for first-time users
* Added support for notifications for comments, request access
* Added support for themes
* Added support for List and User Selector Custom Attributes
* Added out-of-the-box custom attributes for Certification Level, Subject Matter Expert, and Documentation URL
* Added support for Tableau thumbnails
* Added support for Power BI Reporting Server
* Added support for AD integration with File BI and SSRS agent
* Agent logging improved for debugging. Logs can be downloaded from admin mode instances
* Request report access workflow changed with the ability for users and admin to track the requests
* Compression enabled for image upload
* Fixed a bug to support Finish characters
* Fixed a bug to support Windows AD or LDAP paginated result set

## v1.5 (Dec 31 2017)

* Multi-instance BI Hub to enhance availability and provide load balancing.
* SpotFire integrated with BI Hub
* User attributes – email address, picture, division captured
* Support for bookmarks in BOBJ environment
* Integrated email communication in Smart Search feature
* Enhanced UI with the Dark and Light themes
* Theme generator which enables the administrator to generate corporate themes

## v1.4 - BI Hub (Sep 30, 2017)

* Detailed status regarding scheduled and manual synchronization of users and reports in admin landing page
* Bulk upload and download of reports metadata in Admin mode
* Accessible files moved to a separate tab in User mode
* SSRS BI platform integrated with BI Hub
* iPad support for BI Hub
* Audit module enhanced with details of usage of BI Hub
* User guide launched from the product
* Smart Search feature enables searching for reports the user doesn’t have access to, displays the accessible and not accessible reports in separate tabs.

## v1.3 - BI Hub (Jun 30, 2017)

* BI Hub leverages the user authentication store of Microsoft AD. By integrating with SSO, a further login prompt is eliminated.
* BI Hub uses Microsoft AD to authenticate users. If there is no AD, then BI Hub leverages the BI platform authentication.
* BI Hub supports environments in which one BI platform is integrated with AD and the other ones may use Native authentication.
* Scheduled/Automated synchronization with AD, BI platform authentication store. Scheduled/Automated synchronization with addition/deletions of reports in the BI platform. Launches SAP WebI, Lumira, Design Studio, Crystal, Tableau, Qlik Sense reports in one page. Support for more BI platforms in future releases.
* Users can create/delete folders and reorganize reports as per their requirements
* Ability to mark reports as favorites so that they appear at the top and can be easily accessed. Ability to search for reports/folders based on names.
* Recently launched reports appear on the landing page of the user.
* Admin landing page shows a high-level status of agents and # of users.
* Ability to manually add/delete Users and assign Reports to the users. This is used to override the automated synchronization with BI platforms.

## Known Issues

1. Multiple mapping of users for the same agent when manual mapping is done to another user account which is not listed in the user manager.
1. Tableau report shows a log-in screen in Iframe when it is opened in the Chrome Incognito which is inconsistent.
1. One Drive/Sharepoint – When reports are opened for the first time, the login prompts inside the same tab rather than in the new tab.
