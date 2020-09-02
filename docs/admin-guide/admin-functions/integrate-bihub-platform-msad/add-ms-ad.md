---
id: add-ms-ad
title: Add Microsoft AD details to BI Hub
sidebar_label: Add Microsoft AD details to BI Hub
---

import useBaseUrl from "@docusaurus/useBaseUrl";
import Link from '@docusaurus/Link';

Microsoft AD information can be added by following the steps below:

1. Select “Authentication" from the application pane.
2. Click on Add authentication. The Add Authentication screen opens.
3. Here is a set of sample entries for Windows AD Authentication Type:
   > --\> Base DN - DC=VBI, DC=SOLUTIONS; URL - <ldap://xxxdomain.companyname.solutions>; User name, password –

  Enter the credentials of the account that will be used to query AD to fetch details about the users; Groups – Enter the groups from which users will be synchronized with BI Hub. This group represents the community of BI Hub users.
1. If Full SSO setup is established in the organization, then enable the check box and BI Hub will leverage that setup. In such cases, when a user does a sign-on successfully into the company’s network, then BI Hub will not prompt for a login and the user can work on the product directly.
