---
id: sharepoint 
sidebar_label: SHAREPOINT
title: SharePoint Platform Configuration 
---

import useBaseUrl from "@docusaurus/useBaseUrl";
import Link from '@docusaurus/Link';
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

There are two ways to access SharePoint data as listed below:
1. Microsoft Graph API
1. SharePoint REST API

We have integrated SharePoint in our BIHub using the second method.

## SharePoint App Registration

 - Open the Azure portal > https://portal.azure.com
 - Go to **Azure Active Directory > App Registrations > New Application registration**
 - The URL of the page will be similar to https://yourtenantname.sharepoint.com/_layouts/15/appregnew.aspx.

 <div style={{textAlign: 'center'}}>
   <Zoom>
    <img alt="App Registration" src={useBaseUrl('/doc-images/sharepoint/app-register.png')}/>
   </Zoom>
 </div>

 > The **Client Id** and **Client Secret** generated above will be used for configuration of Sharepoint in BI Hub.
 
 :::note
 Copy and save the **Client Id** and **Client Secret** to be used in further configuration screens.
 :::

 - Fill the details in the page as per the following table and click **Create**.

 <div style={{textAlign: 'center'}}>
   <Zoom>
    <img alt="App Registration Fields" src={useBaseUrl('/doc-images/sharepoint/app-register-fields.png')}/>
   </Zoom>
 </div>

 Now, the app is being registered and we need to provide the app with some permissions so that it can access data. 
 - Click on the **appinv.aspx** page (with which you can grant permissions to an app). The URL of that page will be similar to `https://yourtenantname.sharepoint.com/_layouts/15/appinv.aspx`
   - Paste the Client Id in the **App Id** text box and click on **Lookup**. This will load the details of the app that we registered previously.

  <div style={{textAlign: 'center'}}>
    <Zoom>
      <img alt="AppInv App Details" src={useBaseUrl('/doc-images/sharepoint/appinv-details.png')}/>
    </Zoom>
  </div>

   - In the **Permission Request XML** textbox paste the following XML and click **Create**
   <div style={{textAlign: 'center'}}>
    <Zoom>
     <img alt="XML" src={useBaseUrl('/doc-images/sharepoint/xml.png')}/>
    </Zoom>
   </div>

   :::tip
    The XML provides full control to the app over the current web (this is the main permission required to configure the Sharepoint agent)
   :::

   :::note
    If you want to provide different permissions,then please take a look at [this article](https://docs.microsoft.com/en-us/sharepoint/dev/sp-add-ins/add-in-permissions-in-sharepoint) by Microsoft.
    :::
  
- In the next screen click on **Trust It** to allow the app to have the required permissions.

<div style={{textAlign: 'center'}}>
  <Zoom>
<img alt="Trust SharePoint App" src={useBaseUrl('/doc-images/sharepoint/trust-app.png')}/>
  </Zoom>
</div>

## Setup the application in Azure

To enable OAuth for the user, set up Azure Active Directory.

:::important
The below listed steps need to be followed for the registration of the Azure Active Directory:
:::

* Go to https://portal.azure.com
* Click on **Azure Active Directory > App Registrations > New application registration**

  <div style={{textAlign: 'center'}}>
    <Zoom>
      <img alt="New App Registration" src={useBaseUrl('/doc-images/powerbi/azure-app-setup.png')}/>
    </Zoom>
  </div>

* Set  the  name, type  and  redirect  URI  of  the  application. 
  
  <div style={{textAlign: 'center'}}>
  <Zoom>
    <img alt="Application Registration" src={useBaseUrl('/doc-images/powerbi/application-registeration.png')}/>
  </Zoom>
  </ div>

 *Application Registration*
  
  :::note
  The type should be  Native and  the  Redirect  URI  must  be formatted as: `https://servername:port/Redirect`.
  :::

* Click **Create**. 
  
  :::note
  This URI should reflect the SharePoint Agent machine hostname or public IP address and the port at which the new agent instance needs to be created.
  :::

Note the Application ID upon successfully registering the application.

<div style={{textAlign: 'center'}}>
  <Zoom>
<img alt="App registered" src={useBaseUrl('/doc-images/sharepoint/app-registered.png')}/>
  </Zoom>
</div>

- Provide this under the key "userclientid" in the configuration of SharePoint in BI Hub

## Create the Application Secret 

 - Go to **Azure portal > azure active directory > App registrations** and click on your application.
 - Navigate to Certificates & secrets and click on **New Client secret** to add a new key.
 - Specify a description and duration for client secret and click on **Add**.  
 
  <div style={{textAlign: 'center'}}>
  <Zoom>
    <img alt="User Client secret setup" src={useBaseUrl('/doc-images/powerbi/app-key-setup.png')}/>
  </Zoom>
  </ div>

  *User client secret setup*

 The UserClient secret is added and the value is displayed.

   <div style={{textAlign: 'center'}}>
  <Zoom>
    <img alt="Client Secret" src={useBaseUrl('/doc-images/powerbi/client-secret.png')}/>
  </Zoom>
  </div>

 *Client Secret* 

 :::note
 Provide this under the key "USERCLIENTSECRET" during the configuration of Sharepoint agent in BI Hub.
 If failed to note down the value, please repeat the step [Setup the application in Azure](#setup-the-application-in-azure) to create a new key.
 :::

<!-- A screenshot -->
<!-- Confirm with Mohan if this is needed
- **Sharepointsite** = Your sharepoint site url (For eg: https://yoursite.sharepoint.com/sites/test)
- **ClientId** = Client ID Registered in sharepoint app 
- **Clientsecret** = Client Secret Registered in sharepoint app 
- **Userclientid** = Client ID Registered in Azure Portal
- **Userclientsecret** = Client Secret Registered in Azure Portal
- **Tokenurl** = https://login.microsoftonline.com/{azure_tenantID}/oauth2/token
- **Redirecturl** = Redirect URL mentioned in Azure Portal
- **Resource** = Your sharepoint domain url(For eg: `https://yourdomain.sharepoint.com`)
- **Host** = Your sharepoint domain name without http/https. (For eg: `yourdomain.sharepoint.com`)
- **Sharepointid** = 00000003-0000-0ff1-ce00-000000000000 (Common for all)
- **Tenantid** = Tenant ID registered in Azure Portal
-->