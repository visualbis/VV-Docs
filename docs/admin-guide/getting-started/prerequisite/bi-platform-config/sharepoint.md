---
id: sharepoint 
sidebar_label: SHAREPOINT
title: SharePoint Platform Configuration 
---

import useBaseUrl from "@docusaurus/useBaseUrl";
import Link from '@docusaurus/Link';
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

Before we connect the *SharePoint* site to BI Hub, we need to set up the **Sharepoint App** and **Azure App**. Create the application **Secret**, and **Configure the permissions**.

## SharePoint App Registration

 - Go to the URL: `https://yourtenantname.sharepoint.com/_layouts/15/appregnew.aspx`. Replace `yourtenantname` with your name.
 - Click **Generate** to get **Client Id**, and **Client Secret**.
 - Enter **Title, App Domain**, and **Redirect URI**.

 <div class="center">
   <Zoom>
    <img alt="App Registration" src={useBaseUrl('/doc-images/sharepoint/app-register.png')}/>
   </Zoom>
 	<p>SharePoint App registration</p>
 </div>

 :::note
 Copy and save the **Client Id** and **Client Secret** to be used in further configuration screens.
 :::

 - Click on the **appinv.aspx** page (with which you can grant permissions to an app). The URL of that page will be similar to `https://yourtenantname.sharepoint.com/_layouts/15/appinv.aspx`
   - Paste the Client Id in the **App Id** text box and click on **Lookup**. This will load the details of the app that we registered previously.

  <div class="center">
    <Zoom>
      <img alt="AppInv App Details" src={useBaseUrl('/doc-images/sharepoint/appinv-details.png')}/>
    </Zoom>
  	<p>AppInv App Details</p>
  </div>

  *AppInv App Details*

   - In the **Permission Request XML** textbox paste the following XML and click **Create**
   ```xml
   <AppPermissionRequests AllowAppOnlyPolicy="true">
    <AppPermissionRequest Scope="http://sharepoint/content/sitecollection/web" Right="FullControl" />
   </AppPermissionRequests>
   ```

   :::tip
    The XML provides full control to the app over the current web (this is the main permission required to configure the Sharepoint agent)
   :::

   :::note
    If you want to provide different permissions, please take a look at [this article](https://docs.microsoft.com/en-us/sharepoint/dev/sp-add-ins/add-in-permissions-in-sharepoint) by Microsoft.
   :::
  
- In the next screen click on **Trust It** to allow the app to have the required permissions.

<div class="center">
  <Zoom>
<img alt="Trust SharePoint App" src={useBaseUrl('/doc-images/sharepoint/trust-app.jpg')}/>
  </Zoom>
	<p>Allow required permissions to the App</p>
</div>

## Set up the application in Azure

* Go to https://portal.azure.com
* Click on **Azure Active Directory > App registrations > New registration**.

  <div class="center">
    <Zoom>
      <img alt="New App Registration" src={useBaseUrl('/doc-images/powerbi/azure-new-registration.png')}/>
    </Zoom>
  	<p>Azure new application registration</p>
  </div>

* Set **Name, Supported account types**, and **Redirect URI** of the application:
  
  <div class="center">
  <Zoom>
    <img alt="Application Registration" src={useBaseUrl('/doc-images/powerbi/register_app.png')}/>
  </Zoom>
 	<p>Application Registration</p>
  </ div>
  
:::note
The type should be Native and the Redirect URI must be formatted as: `https://servername:port/Redirect`.
:::

* Click **Register**. 
  
> Note the **Application (client) ID** upon successfully registering the application.

<div class="center">
  <Zoom>
<img alt="Application registered" src={useBaseUrl('/doc-images/sharepoint/app-registered.png')}/>
  </Zoom>
	<p>Application registered</p>
</div>

- Provide the **Application (client) ID** under the key **userclientid** in the configuration of SharePoint in BI Hub.
- Click on the newly created Application and go to **Authentication**.

<div class="center">
  <Zoom>
<img alt="Authentication" src={useBaseUrl('/doc-images/sharepoint/authentication.png')}/>
  </Zoom>
	<p>Authentication</p>
</div>

- Select the tokens to be issued at authorization endpoints and also choose the supported account types. 

<div class="center">
  <Zoom>
<img alt="Authentication access tokens" src={useBaseUrl('/doc-images/sharepoint/azapp5.png')}/>
  </Zoom>
	<p>Authentication access tokens</p>
</div>

## Create the Application Secret 

 - Go to **Azure portal > azure active directory > App registrations** and click on your application.
 - Navigate to **Certificates & secrets** and click on **New Client secret** to add a new key.
 
  <div class="center">
  <Zoom>
    <img alt="User client secret setup" src={useBaseUrl('/doc-images/sharepoint/azapp6.png')}/>
  </Zoom>
  	<p>User client secret setup</p>
  </div>


 - Specify a **Description** and **Expiry** duration for client secret and click **Add**.

   <div class="center">
  <Zoom>
    <img alt="Client Secret" src={useBaseUrl('/doc-images/sharepoint/azapp7.png')}/>
  </Zoom>
  	<p>Client secret submission</p>
  </div>
  
  *Client secret submission*

The UserClient secret is added and the value is displayed. Provide this under the key "USERCLIENTSECRET" during the configuration of Sharepoint agent in BI Hub

   <div class="center">
  <Zoom>
    <img alt="Copy the client Secret" src={useBaseUrl('/doc-images/sharepoint/azapp8.png')}/>
  </Zoom>
  	<p>Copy the Client secret ID</p>
  </div>

:::note
Copy the client secret value. You will not be able to retrieve it after you perform another operation or leave this blade. If failed to note down the value, please repeat the step [Set up the application in Azure](#setup-the-application-in-azure) to create a new key.
:::

## Configure permission for the App

* Go to **[Azure portal](https://portal.azure.com) > Azure Active Directory > App registrations**.
* Click on your application and select **API permissions**.
* Click **Add a permission** and expand **Microsoft Graph**.
* Provide the permissions for **Sites.Read.All** and **User.Read**.

<div class="center">
  <Zoom>
    <img alt="Application Permissions configured" src={useBaseUrl('/doc-images/sharepoint/azapp9.png')}/>
  </Zoom>
	<p>Application Permissions configured</p>
</div>

- Click **Save** and then click **Grant Permissions** to delegate the permissions to the service account.

<div class="center">
  <Zoom>
<img alt="Permissions to be given" src={useBaseUrl('/doc-images/powerbi/permissions-consolidated.png')}/>
  </Zoom>
	<p>Permissions granted</p>
</div>

:white_check_mark: Sharepoint agent successfully configured.
