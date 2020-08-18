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

2. SharePoint REST API

We have integrated SharePoint in our BIHub using the second method.

**SharePoint App Registration**

To register an app in SharePoint,navigate to the "New App Registration" page. The URL of that page will be similar to https://yourtenantname.sharepoint.com/_layouts/15/appregnew.aspx.

<div style={{textAlign: 'center'}}>
  <Zoom>
<img alt="App Registeration" src={useBaseUrl('/doc-images/sharepoint/app-register.png')}/>
  </Zoom>
</div>

This will be the client id and client secret, you will be provided in `config.json`.

Fill the details in that page as per the following table and click "Create".

<div style={{textAlign: 'center'}}>
  <Zoom>
<img alt="App Registeration Fields" src={useBaseUrl('/doc-images/sharepoint/app-register-fields.png')}/>
  </Zoom>
</div>

Copy the generated Client Id and Client Secret into notepad (or any of your favorite editor) as we will need these later.

Now,the app is being registered and we need to provide the app with some permissions so that it can access data. In order to do that, navigate to the "appinv.aspx" page (with which you can grant permissions to an app). The URL of that page will be similar to the one given below https://yourtenantname.sharepoint.com/_layouts/15/appinv.aspx

On that page, paste the Client Id in the "App Id" text box and click on "Lookup". This will load the details of the app that we registered previously.

<div style={{textAlign: 'center'}}>
  <Zoom>
<img alt="AppInv App Details" src={useBaseUrl('/doc-images/sharepoint/appinv-details.png')}/>
  </Zoom>
</div>

In the "Permission Request XML",paste the following XML. This XML says that the app can have full control over the current web (which is all that is needed for this case). If you need to give different permissions,then please take a look at [this article](https://docs.microsoft.com/en-us/sharepoint/dev/sp-add-ins/add-in-permissions-in-sharepoint) by Microsoft.

<div style={{textAlign: 'center'}}>
  <Zoom>
<img alt="XML" src={useBaseUrl('/doc-images/sharepoint/xml.png')}/>
  </Zoom>
</div>

Once XMLis added, click on "Create". In the next screen click on "Trust It" and this will mean that the app will have the required permissions.

<div style={{textAlign: 'center'}}>
  <Zoom>
<img alt="Trust SharePoint App" src={useBaseUrl('/doc-images/sharepoint/trust-app.png')}/>
  </Zoom>
</div>

We need to do OAuth for the user, so we need to set up Azure Active Directory.

:::important
The below listed steps need to be followed for the registration of the Azure Active Directory:
[x] Set up the Application in Azure.

[x] Go to https://portal.azure.com

[x] Navigate to Azure Active Directory and select App Registrations

  - Click on New Applicant registration.
:::

<div style={{textAlign: 'center'}}>
  <Zoom>
<img alt="New App Registeration" src={useBaseUrl('/doc-images/sharepoint/new-app-registeration.png')}/>
  </Zoom>
</div>

Set  the  name,  type  and  redirect  URI  of  the  application.  The  type  should  be  Native  and  the  Redirect  URI  must  be formatted as follows: `https://servername:port/Redirect`.

Once the data is entered, click on Create. This URI should reflect the SharePoint Agent machine hostname or public IP address and the port at which the new agent instance needs to be created.

Note the Application ID upon successfully registering the application.

<div style={{textAlign: 'center'}}>
  <Zoom>
<img alt="App registered" src={useBaseUrl('/doc-images/sharepoint/app-registered.png')}/>
  </Zoom>
</div>

- Provide this under the key "userclientid" in the `config.json` file in the SharePoint agent.

Create the Application Secret -> Open the application in Azure Portal. 

Navigate to **All Settings -> Keys** and create a **new key -> Specify a desired value for the key name** and note down the value provided.

<div style={{textAlign: 'center'}}>
  <Zoom>
<img alt="Keys" src={useBaseUrl('/doc-images/sharepoint/keys.png')}/>
  </Zoom>
</div>

Note that, this value will be displayed only once and will not be displayed again after we close the blade. This value will be the **userclientsecret** in the `config.json` file of SharePoint Agent.

If failed to note down the value, please repeat step two to create a new key.

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
