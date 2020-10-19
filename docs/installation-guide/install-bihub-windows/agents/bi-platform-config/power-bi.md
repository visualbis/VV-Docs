---
id: power-bi 
sidebar_label: POWER BI 
title: Power BI Platform Configuration
---

import useBaseUrl from "@docusaurus/useBaseUrl";
import Link from '@docusaurus/Link';
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

We need to Setup the application in Azure Active Directory 

This application will be the communication point for the PowerBIAgent. All calls to the Microsoft API's will be made on behalf of this application. 

:::note
This guideline assumes that the user has a tenant in Azure. If the tenant is not present, please refer to https://docs.microsoft.com/en-us/azure/active-directory/develop/active-directory-howto-tenant for steps to acquire a tenant.
:::

:::important
Contact the Active Directory Administrator to perform the following steps as some of the actions will require administrator consent.
:::

There are 3 main steps to configure Power BI agent:
- [Set up the Application in Azure](#set-up-the-application-in-azure)
- [Create the Application Secret](#create-the-application-secret)
- [Configure Permissions for the Application](#configure-permissions-for-the-application)

### Set up the Application in Azure
 - Go to https://portal.azure.com
 - Navigate to Azure Active Directory and select App Registrations
 - Click on New Applicant registration.

  <div style={{textAlign: 'center'}}>
  <Zoom>
    <img alt="Azure Application setup" src={useBaseUrl('/doc-images/powerbi/azure-app-setup.png')}/>
  </Zoom>
  </ div>

 *Azure Application setup*

 - Set the name, type and redirect URI of the application. 
 :::note
 The type should be Native and the Redirect URI must be formatted as `https://servername:port/Redirect` 
 :::
 - Once the data is entered, click on Create. This URI should reflect the PowerBI Agent machine hostname or public IP address and the port at which the new agent instance needs to be created.

  <div style={{textAlign: 'center'}}>
  <Zoom>
    <img alt="Application Registration" src={useBaseUrl('/doc-images/powerbi/application-registeration.png')}/>
  </Zoom>
  </ div>

 *Application Registration*

 - Note the Application ID upon successfully registering the application.

  <div style={{textAlign: 'center'}}>
  <Zoom>
      <img alt="New Application Id" src={useBaseUrl('/doc-images/powerbi/new-app-id.png')}/>
  </Zoom>
  </ div>
 
 :::note
 Provide this under the key "CLIENTID" during the configuration of Power BI agent in BI Hub. 
 :::
 - To verify the Redirect URI, Click on the application and go to Authentication. 
 > The URL shown here is the one that you entered while creating the new application. 
 
  <div style={{textAlign: 'center'}}>
   <Zoom>
    <img alt="Settings page & Redirect URI" src={useBaseUrl('/doc-images/powerbi/settings-redirect.png')}/>
   </Zoom>
  </ div>

 *Settings page & Redirect URI*

### Create the Application Secret
   
 - Go to **Azure portal > azure active directory > App registrations** and click on your application.
 - Navigate to Certificates & secrets and click on **New Client secret** to add a new key.
 - Specify a description and duration for client secret and click on **Add**.  
 
  <div style={{textAlign: 'center'}}>
  <Zoom>
    <img alt="Client secret setup" src={useBaseUrl('/doc-images/powerbi/app-key-setup.png')}/>
  </Zoom>
  </ div>

  *Client secret setup*

 The Client secret is added and the value is displayed.

   <div style={{textAlign: 'center'}}>
  <Zoom>
    <img alt="Client Secret" src={useBaseUrl('/doc-images/powerbi/client-secret.png')}/>
  </Zoom>
  </div>

 *Client Secret* 

 :::note
 Provide this under the key "CLIENTSECRET" during the configuration of Power BI agent in BI Hub.
 If failed to note down the value, please repeat the step [Create the Application Secret](#create-the-application-secret) to create a new key.
 :::

### Configure Permissions for the Application

 The application requires some permission level actions on behalf of the user. 
 - Go to **Azure portal > azure active directory > App registrations** and click on your application and select **API permissions**.
 - Click on Add.
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

 *Permissions to be given*

 - Click Save. Upon granting the permissions, click **Grant Permissions** to delegate the permissions to the service account.

<div style={{textAlign: 'center'}}>
  <Zoom>
<img alt="Permissions to be given" src={useBaseUrl('/doc-images/powerbi/permissions-consolidated.png')}/>
  </Zoom>
</ div>

  *Permissions*

The permissions must be given to the BI Hub Power BI Agent service account:
- Office 365 Global Administrator
- Power BI Service Administrator
