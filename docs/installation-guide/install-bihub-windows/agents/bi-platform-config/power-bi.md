---
id: power-bi 
sidebar_label: POWER BI 
<<<<<<< HEAD
---
=======
title: PowerBI Platform Configuration
---

import useBaseUrl from "@docusaurus/useBaseUrl";
import Link from '@docusaurus/Link';
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

We need to Setup the application in Azure Active Directory 

This application will be the communication point for the PowerBIAgent. All calls to the Microsoft API's will be made on behalf of this application. This guideline assumes that the user has a tenant in Azure. If the tenant is not present, please refer to https://docs.microsoft.com/en-us/azure/active-directory/develop/active-directory-howto-tenantfor steps to acquire a tenant.

Please contact the Active Directory Administrator to do the steps since some actions will require administrator consent.

There are 3 main steps:

* Set up the Application in Azure.

1. Go to https://portal.azure.com

1. Navigate to Azure Active Directory and select App Registrations

1. Click on New Applicant registration.

<div style={{textAlign: 'center'}}>
  <Zoom>
<img alt="Azure Application setup" src={useBaseUrl('/doc-images/powerbi/azure-app-setup.png')}/>
  </Zoom>
</ div>

*Figure 3.4: Azure Application setup*

  * Set the name, type and redirect URI of the application. The type should be Native and the Redirect URI must be formatted as follows:https://servername:port/Redirect. Once the data is entered, click on Create. This URI should reflect the PowerBI Agent machine hostname or public IP address and the port at which the new agent instance needs to be created.

<div style={{textAlign: 'center'}}>
  <Zoom>
<img alt="Application Registration" src={useBaseUrl('/doc-images/powerbi/application-registeration.png')}/>
  </Zoom>
</ div>

Figure 3.5: Application Registration

  * Note the Application ID upon successfully registering the application.

<div style={{textAlign: 'center'}}>
  <Zoom>
  <img alt="New Application Id" src={useBaseUrl('/doc-images/powerbi/new-app-id.png')}/>
  </Zoom>
</ div>

* Provide this under the key "CLIENTID" in the *config.json* file in the PowerBI agent.

* To verify the Redirect URI, Click on the application and go to Settings. Select Redirect URI. The URI given during create will be reflected here.

<div style={{textAlign: 'center'}}>
  <Zoom>
<img alt="Settings page & Redirect URI" src={useBaseUrl('/doc-images/powerbi/settings-redirect.png')}/>
  </Zoom>
</ div>

*Figure 3.6: Settings page & Redirect URI*

  * Create the Application Secret.
   
   - Open the application inAzure Portal. Navigate to All Settings →Keys and create a new key. 

   - Specify a desired value for the key name and note down the value provided.

<div style={{textAlign: 'center'}}>
  <Zoom>
<img alt="Application Key setup" src={useBaseUrl('/doc-images/powerbi/app-key-setup.png')}/>
  </Zoom>
</ div>

   *Figure 3.7: Application Key setup*

  - Note that, this value will be displayed only once and will not be displayed again after we close the blade. This value will be the CLIENTSECRET in the config.json file of Power BI Agent.

  - If failed to note down the value, please repeat step two to create a 
  new key.

 * Configure Permissions for the Application

   - The application requires some permission to do the actions on behalf of the user. 

   - Click on the application and go to settings →required permissions. 

   - Click on Add.

   - Map the permissions for the API's referring to the table below for Microsoft Graph API , Windows Azure Active Directory APIand Microsoft Power BI API .

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
|                                      | Dataset.ReadWrite.All      | Read and write all datasets                |
|                                      | Metadata.View_Any          | View Content Properties                    |
|                                      | Report.Read.All            | View All Reports                           |
|                                      | Group.Read.All             | View All Groups                            |
|                                      | Group.Read                 | View User's Group                          |
|                                      | Report.ReadWrite.All       | Read and write all reports                 |
|                                      | App.Read.All               | View All PowerBI Apps                      |
|                                      | Capacity.Read.All          | View all capacities                        |
|                                      | Tenant.Read.All            | View All content in tenant                 |
|                                      | Workspace.Read.All         | View all workspaces                        |

   *Table 3.3: Permissions to be given*

   - Click Save. Upon granting the permissions, click Grant Permissions to delegate the permissions to the service account.

<div style={{textAlign: 'center'}}>
  <Zoom>
<img alt="Permissions to be given" src={useBaseUrl('/doc-images/powerbi/permission.png')}/>
  </Zoom>
</ div>

   *Figure 3.8: Permissions*

The below listed Permissions need to be given to the BI Hub Power BI Agent service account

1. Office 365 Global Administrator

1. Power BI Service Administrator
>>>>>>> 7cd3941... Restructured BI Hub Agents configurations
