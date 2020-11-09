---
id: sac 
sidebar_label: SAC
title: SAC Platform Configuration 
---

import useBaseUrl from "@docusaurus/useBaseUrl";
import Link from '@docusaurus/Link';
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

SAC allows third-party applications to access its web services by using the authorization protocol [OAuth2.0](https://oauth.net/2/). With OAuth 2.0, we can make web service calls without exchanging user credentials between applications.

To integrate the SAC Platform with BI Hub, you need to do some setup in your SAC tenant. There are 2 authorization methods available.
* Step 1: Register a new client with grant type as 'Authorization Code' - User
* Step 2: Register a new client with grant type as 'Client Credentials' – Resource Owner

The user needs to do OAuth to access a SAC resource, To Register an OAuth client, follow the below steps.
 * Login to your SAC tenant as an admin.
 * Navigate to the administration page by clicking on ** ≡ (Main Menu) > System > Administration**.

 <div style={{textAlign: 'center'}}>
  <Zoom>
    <img alt="SAC Admin Page" src={useBaseUrl('/doc-images/sac/admin-page.png')}/>
  </Zoom>
 </div>

 *SAC Admin Page*

* Select the **AppIntegration** tab and click the button **Add a New OAuth Client**. Fill out the form fields to register a **New OAuth Client**.

 <div style={{textAlign: 'center'}}>
  <Zoom>
    <img alt="New OAuth Client" src={useBaseUrl('/doc-images/sac/new-oauth-client.png')}/>
  </Zoom>
 </div>

 *New OAuth Client*

:::note
Authorization URL and Token URL show in the form is required in your `config.json` file of the SAC Agent.
:::

## AuthorizationCodeGrant (three-legged) - User

Register an **OAuth Client** as a grant type **'Authorization Code'** as shown in the image below.

 <div style={{textAlign: 'center'}}>
  <Zoom>
    <img alt="New OAuth Client Form" src={useBaseUrl('/doc-images/sac/new-oauth-client-form.png')}/>
  </Zoom>
 </div>

 *New OAuth Client form*


 - **Name** – Enter any relevant name.
 - **OAuth Client ID** – This will be the ThreeLegged Client ID in the `config.json` file of SAC Agent.
 - **Authorization Grant** – Set it as an "Authorization Code"
 - **Secret** – This will be the ThreeLegged Client Secret in the `config.json` file of SAC Agent.
 - **Redirect URL** – Enter your BIHub’s backend app URL. Example: `https://host:8080/Redirect`.
 - **Token Details** – Defining a lifetime for tokens is optional.

## ClientCredentialsGrant (two-legged) – ResourceOwner

:::note
This flow does not belong to a specific user. This configuration is for the resource owner.
:::
You need to pass the resource owner(admin) credentials to access and get all users available on SAC.
Register an **OAuth Client** as a grant type **'Client Credentials'** as shown in the image below.

<div style={{textAlign: 'center'}}>
  <Zoom>
<img alt="New OAuth Client Credentials" src={useBaseUrl('/doc-images/sac/new-oauth-client-credentials.png')}/>
  </Zoom>
</div>

*New OAuth Client Credentials form*

- **Name** – Enter any relevant name.
- **OAuth Client ID** – This will be the Client ID in the `config.json` file of SAC Agent.
- **Authorization Grant** – set it as a "Client Credentials".
- **Secret** – This will be the Client Secret in the `config.json` file of SAC Agent.
- **Token Details** – Defining a lifetime for tokens is optional.