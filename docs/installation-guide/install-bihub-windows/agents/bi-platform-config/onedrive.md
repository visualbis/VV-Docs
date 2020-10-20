---
id: onedrive
title: OneDrive
sidebar_label: OneDrive 
---

import useBaseUrl from "@docusaurus/useBaseUrl";
import Link from '@docusaurus/Link';
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

## Set up the Application in Azure.

* Go to https://portal.azure.com
* Click on **Azure Active Directory > App Registrations > New application registration**

<div style={{textAlign: 'center'}}>
  <Zoom>
<img alt="New App Registration" src={useBaseUrl('/doc-images/powerbi/azure-app-setup.png')}/>
  </Zoom>
</div>

*Azure new App Registration*

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
  This URI should reflect the OneDrive Agent machine hostname or public IP address and the port at which the new agent instance needs to be created.
  :::

Note the Application ID upon successfully registering the application.

<div style={{textAlign: 'center'}}>
  <Zoom>
<img alt="App registered" src={useBaseUrl('/doc-images/sharepoint/app-registered.png')}/>
  </Zoom>
</div>

- Provide this under the key **clientid** in the configuration of OneDrive in BI Hub

## Create the Application Secret 

* Open the application in Azure Portal
* Go to **All Settings > Keys** and create a **New key**
* Specify a desired value for the key name and note down the value provided.

<div style={{textAlign: 'center'}}>
  <Zoom>
<img alt="Keys" src={useBaseUrl('/doc-images/sharepoint/keys.png')}/>
  </Zoom>
</div>

:::note
The **Value** text will be displayed only once and will not be displayed again after we close the blade. This value will be the **clientsecret** in the configuration of OneDrive in BI Hub.

If failed to note down the value, please repeat the step [Setup the application in Azure](#set-up-the-application-in-azure) to create a new key.
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