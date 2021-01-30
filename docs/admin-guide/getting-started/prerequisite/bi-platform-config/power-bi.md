---
id: power-bi 
sidebar_label: POWER BI 
title: Power BI Platform Configuration
---

import useBaseUrl from "@docusaurus/useBaseUrl";
import Link from '@docusaurus/Link';
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

To configure Power BI, We need to set the application in Azure Active Directory.

This application will be the communication point for the PowerBIAgent. All calls to the Microsoft API's will be made on behalf of this application.

:::note
This guideline assumes that the user has a tenant in Azure. If the tenant is not present, please refer [How to set up an Azure tenant](https://docs.microsoft.com/en-us/azure/active-directory/develop/active-directory-howto-tenant) for steps to acquire a tenant.
:::

:::important
Contact the Active Directory Administrator to perform the following steps as some of the actions will require administrator consent.
:::

There are 3 main steps to configure Power BI agent:
- [Set up the Application in Azure](#set-up-the-application-in-azure)
- [Create the Application Secret](#create-the-application-secret)
- [Configure Permissions for the Application](#configure-permissions-for-the-application)

### Set up the Application in Azure
 - Open the Azure portal > https://portal.azure.com
 - Go to **Azure Active Directory > App registrations > New registration**.

  <div class="center">
  <Zoom>
    <img alt="Azure Application Registration" src={useBaseUrl('/doc-images/powerbi/azure-new-registration.png')}/>
  </Zoom>
 	<p>Azure new application registration</p>
  </ div>

* Set **Name, Supported account types**, and **Redirect URI** of the application:
  
  <div class="center">
  <Zoom>
    <img alt="Application Registration" src={useBaseUrl('/doc-images/powerbi/register_app.png')}/>
  </Zoom>
 	<p>Application Registration</p>
  </ div>

:::note
The type should be Native and the Redirect URI must be formatted as `https://servername:port/Redirect` 
:::

- Click **Register**.

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

### Create the Application Secret
   
 - Go to **Azure portal > azure active directory > App registrations** and click on your application.
 - Navigate to **Certificates & Secrets** and click on **New Client secret** to add a new key.
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
Copy the client secret value. You will not be able to retrieve if after you perform another operation or leave this blade . If failed to note down the value, please repeat the step [Set up the application in Azure](#setup-the-application-in-azure) to create a new key.
:::

### Configure Permissions for the Application

 The application requires some permission level actions on behalf of the user. 
 - Go to **[Azure portal](https://portal.azure.com) > Azure Active Directory > App registrations**.
 - Click on your application and select **API permissions**.
 - Click **Add a permission**.
 - Map the permissions for the API's referring to the table below for **Microsoft Graph API , Windows Azure Active Directory API** and **Microsoft Power BI** API.

| **API**                              | **Permissions**            | **Access Details**                         |
| ------------------------------------ | -------------------------- | ------------------------------------------ |
| **Microsoft Graph**                  | Profile                    | View Users Basic Profile                   |
|                                      | Email                      | View Users Email Address                   |
|                                      | Group.Read.All             | Read All Groups                            |
|                                      | User.Read.All              | Read all users' full profile               |
| **Microsoft Azure Active Directory** | Directory.Read.All         | Read Directory Data                        |
|                                      | Group.Read.All             | Read All Groups                            |
|                                      | User.Read.All              | Read All Users' full profiles              |
|                                      | User.Read                  | Sign in and read user profile              |
|                                      | Directory.AccessAsUser.All | Access the directory as the signed-in user |
| **Power BI Service**                 | Dashboard.Read.All         | View All Dashboards                        |
|                                      | Dataset.Read.All           | View all datasets                          |
|                                      | Metadata.View_Any          | View Content Properties                    |
|                                      | Report.Read.All            | View All Reports                           |
|                                      | Group.Read.All             | View All Groups                            |
|                                      | Group.Read                 | View User's Group                          |
|                                      | App.Read.All               | View All PowerBI Apps                      |
|                                      | Capacity.Read.All          | View all capacities                        |
|                                      | Tenant.Read.All            | View All content in tenant                 |
|                                      | Workspace.Read.All         | View all workspaces                        |

<div class="center"><p>API Permissions</p></div>

 - Click **Save** and then click **Grant Permissions** to delegate the permissions to the service account.

<div class="center">
  <Zoom>
<img alt="Permissions to be given" src={useBaseUrl('/doc-images/powerbi/permissions-consolidated.png')}/>
  </Zoom>
	<p>Permissions granted</p>
</div>

The permissions must be given to the BI Hub Power BI Agent service account:
- Office 365 Global Administrator
- Power BI Service Administrator
