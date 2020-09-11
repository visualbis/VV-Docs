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

To integrate SAC Platform with BI Hub, you need to do some setup in your SAC tenant.
* Step 1: Register a new client with grant type as 'Authorization Code' - User
* Step 2: Register a new client with grant type as 'Client Credentials' –Resource Owner
Currently, these two authorization methods are available.

1. **AuthorizationCodeGrant (three-legged) - User**

User needs to do OAuth to access a SAC resource, To Register an OAuth client, follow these below steps.
1. Login to your SAC tenant as an admin.
1. Navigate to the administration page by clicking on ** ≡ (Main Menu) -> System -> Administration**.

<div style={{textAlign: 'center'}}>
  <Zoom>
<img alt="SAC Admin Page" src={useBaseUrl('/doc-images/sac/admin-page.png')}/>
  </Zoom>
</div>

- Move to the tab called "**AppIntegration**" –You will find a button called "Add a New OAuth Client", this will open a dialogue box where you will be able to register a new OAuth Client.

<div style={{textAlign: 'center'}}>
  <Zoom>
<img alt="New OAuth Client" src={useBaseUrl('/doc-images/sac/new-oauth-client.png')}/>
  </Zoom>
</div>

Also, you will find both Authorization URL and Token URL on this screen, which you will use in your `config.json` of SAC Agent.

<div style={{textAlign: 'center'}}>
  <Zoom>
<img alt="New OAuth Client Form" src={useBaseUrl('/doc-images/sac/new-oauth-client-form.png')}/>
  </Zoom>
</div>

- **Name** – Enter any relevant name.
- **OAuth Client ID** – This will be the ThreeLegged Client ID in the `config.json` file of SAC Agent.
- **Authorization Grant** – set it as an "Authorization Code".
- **Secret** – This will be the ThreeLegged Client Secret in the `config.json` file of SAC Agent.
- **Redirect URL** – Enter your BIHub’s backend app URL. Example: `https://host:8080/Redirect`.
- **Token Details** – Defining a lifetime for tokens is optional.

2. **ClientCredentialsGrant (two-legged) – ResourceOwner**

This flow does not belong to a specific user. This configuration is for the resource owner, To explain briefly, We need to pass the resource owner(admin) credentials to access and get all users available on SAC.
In the above steps, we have done some setup for Registering an OAuth Client as a grant type 'authorization code', like that we need to Register an OAuth Client as a grant type 'client credentials'.

<div style={{textAlign: 'center'}}>
  <Zoom>
<img alt="New OAuth Client Credentials" src={useBaseUrl('/doc-images/sac/new-oauth-client-credentials.png')}/>
  </Zoom>
</div>

- **Name** – Enter any relevant name.
- **OAuth Client ID** – This will be the Client ID in the `config.json` file of SAC Agent.
- **Authorization Grant** – set it as a "Client Credentials".
- **Secret** – This will be the Client Secret in the `config.json` file of SAC Agent.
- **Token Details** – Defining a lifetime for tokens is optional.