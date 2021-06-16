---
id: spotfire 
sidebar_label: SPOTFIRE 
title: Spotfire Platform Configuration
---

import useBaseUrl from "@docusaurus/useBaseUrl";
import Link from '@docusaurus/Link';
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

- [ ] Spotfire requires external authentication to be enabled to work with BI Hub.

## v10.6.0

1. Register a new **OAuth Client**.

* On the computer running Spotfire Server, open a command line as an administrator and change the directory to the location of the `config.bat` file (`config.sh` in Linux). The default location is `<server installation dir>/tomcat/spotfire-bin`.
* Run the below command to register a new *OAuth Client*:

```bash
$ register-api-client --name="BIHubAPIClient" -S api.soap.user-directory-service -S api.soap.impersonate -S api.soap.library-service
```

2. Copy both the **Client ID** and **Client Secret** displayed on the output screen.

> These details are displayed just once, and lost once you close the screen.

3. Copy and paste the contents of `<Spotfire Agent installation folder>/ext_auth` to the `<Server installation dir>/tomcat/webapps/spotfire/WEB-INF/lib` location.

4. **Enable External Authentication** and set the type and class name.

* Open **Spotfire Server Configuration** utility.
* In the **Configuration** tab, select **External Authentication** in the left panel.

  <div class="center">
    <Zoom>
     <img alt="Enable External Authentication and configure" src={useBaseUrl('/doc-images/admin-guide/spotfire-config-tool.png')}/>
    </Zoom>
  <p>Spotfire External Authentication configurations</p>
  </div>

* Select **Yes** to **Enable external authentication** in the right panel.
* In the **Type** label, select **Custom Authenticator** from the dropdown list.
* In the **Class name** label, enter: **vbi.spotfireagent.VbiExtAuthenticator**.  
* Click **Save Configuration** and restart Spotfire related services.

> If there is an error in starting the Spotfire services, check the access log or system log for any errors and make sure the file is in the location mentioned.

Following are the configuration fields details required from the BI Platform:

* Spotfire Server URL
* Spotfire Server Port
* Spotfire Service Account Username
* Spotfire Service Account Domain
* Spotfire Platform Version
* Client ID – Registered OAuth Client ID
* Client Secret - Registered OAuth Client ID

## v7.10.0

* Copy all the files from `<spotfire installation location>/ext_auth/ directory` and paste them to the location - `"tibco\tss\tomcat\lib\webapps\spotfire\WEB-INF\lib"`.
* Go to **Spotfire Server Configuration > External Authentication**, and set the **Type** as **Authentication Filter**. This will enable Spotfire Server to use the custom Java authentication filter.
* Enter the **Class Name** as - **vbi.spotfireagent.VbiExtAuthenticator**.

 <div class="center">
  <Zoom>
    <img alt="Users and Groups" src={useBaseUrl('/doc-images/spotfire/users-groups.jpg')}/>
  </Zoom>
 	<p>Manage Users and Groups account</p>
 </ div>

* Create a **Service account** for the *Spotfire* agent with both **API User**, and **Impersonator** user roles.
* Click **Add Users** and add the user members with the *Display name*, and *Composite name*.

 <div class="center">
  <Zoom>
    <img alt="Add Users" src={useBaseUrl('/doc-images/spotfire/add-users.png')}/>
  </Zoom>
	<p>Add Users</p>
 </ div>

Restart the server for the changes to take place.

:white_check_mark: Spotfire agent configured with the BI Platform.
