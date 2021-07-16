---
id: onboard-info
title: Introduction to BI Hub application
---

import useBaseUrl from "@docusaurus/useBaseUrl";
import Link from '@docusaurus/Link';
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

BI Hub User guide is written for any BI Hub user that is configured in the BI Hub platform.

This guide will help you understand and use the BI Hub application and it's features.

## Log-in to BI Hub application

Enter the BI Hub app url given by your BI Hub admin.

On the log-in page, enter your user credentials and select your authentication type ( Native/Windows AD/LDAP/SSO Login ).

<div class="center">
  <Zoom>
    <img alt="BI Hub Log-in screen" src={useBaseUrl('/doc-images/fig3_3-web-verification.png')}/>
  </Zoom>
</div>

## Change Password

On successfully logging in for the first time, native users will be asked to change the default password.

<div class="center">
  <Zoom>
    <img alt="Change Password" src={useBaseUrl('doc-images/user-guide/change-passwd.png')}/>
  </Zoom>
</div>

Set your new password and select **SUBMIT**.

## Profile Settings

Next, you must enter your profile settings:

<div class="center">
  <Zoom>
    <img alt="Profile Settings" src={useBaseUrl('doc-images/user-guide/profile-settings.png')}/>
  </Zoom>
  <p>Enter your Profile settings</p>
</div>

Enter your **EMAIL**, and **DIVISION**. You may also **Upload Profile Picture** and select **CONTINUE**.

* On the next screen, you may be asked to login to authorize the agents that are configured with 2-step authentication. You may login now or skip the step. You may authorize these agents later from the <Link to={useBaseUrl('docs/user-guide/settings#authorize-agents')}>Settings > Authorize Agents</Link> section.

## Onboarding Information

When you log-in for the first time, the welcome message pops-up with the quick product tour videos.
You may get started with the videos or skip tutorial.

You can access the same Onboarding demo videos by selecting the Help( <img width="25" src={useBaseUrl('img/help.png')} /> ) icon and then select **Show Onboarding Tips**.

<div class="center">
  <Zoom>
    <img alt="Onboarding Information – Options" src={useBaseUrl('doc-images/user-guide/dashboard.png')}/>
  </Zoom>
</div>

Following are the topics covered in the demo videos:

1. Add Reports to your Dashboard
1. Launch your Reports stored in any BI Platform
1. Organize the Reports
1. Search for Reports across multiple platforms easily
1. Advance Search
1. View Reports by Function
1. Collaborate with other users with comment and mention features

## Next Steps

On your home page, you can:

* Customize your user profile.
* Organize your Dashboard by adding/removing reports.
* Perform a basic and advanced search for the reports.
* Organize reports into folders and perform basic actions on them.
* Comment on the reports and collaborate with others.
