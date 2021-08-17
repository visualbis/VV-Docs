---
id: onedrive
title: OneDrive
sidebar_label: OneDrive 
---

import useBaseUrl from "@docusaurus/useBaseUrl";
import Link from '@docusaurus/Link';
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

The OneDrive agent needs no special configuration, apart from setting the application in Azure and creating the application secret.

## Set up the Application in Azure.

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
The type should be  Native and the Redirect URI must be formatted as:`https://servername:port/Redirect`.
:::

* Click **Register**.
  
:::note
This URI should reflect the OneDrive Agent machine hostname or public IP address and the port at which the new agent instance needs to be created.
:::

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

<!-- Check with Mohan if required?
- **OneDrive Site** = Your OneDrive site url (For eg: https://yoursite.sharepoint.com/sites/test)
- **ClientId** = Client ID Registered in Azuer Portal 
- **Clientsecret** = Client Secret Registered in Azure Portal 
- **Tokenurl** = https://login.microsoftonline.com/{azure_tenantID}/oauth2/token
- **Redirecturl** = Redirect URL mentioned in Azure Portal
- **Resource** = Your OneDrive domain url(For eg: `https://yourdomain.sharepoint.com`)
- **Tenantid** = Tenant ID registered in Azure Portal
-->
