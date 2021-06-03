---
id: ssl-agents
title: Configure SSL for BI Hub Agents
sidebar_label: Configure SSL for BI Hub Agents
---

import useBaseUrl from "@docusaurus/useBaseUrl";
import Link from '@docusaurus/Link';
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

BI Hub Agents will communicate with BI Hub Server and Web via REST API connection.

## Before you begin

You must have a proper SSL certificate (recommended) from the authorized vendor in `.crt` format and `.key` file.

> You can also have a Self-Signed SSL certificate, but you need to make sure that the certificate belongs to a trusted certificate store by following the configuration steps provided by the particular browser (The steps are browser-specific and out of scope for this document).

## Configuration

Follow the below common steps to configure the *REST* connections from all the agents (except BOBJ agent) to https:

1. Open the `manager.ini` file in edit mode with administrative privileges. The file is located in the `C:\Program Files\Visual BI Solutions\VBI View\<installing agent name>` location.
1. Change the **SSL** property from **False** to **True** and save the file:

   ```jsx title="C:\Program Files\Visual BI Solutions\VBI View\<installing agent name>\manager.ini" {2}
   [SSL]
   enable ssl = True //Default value is "False"
   ```

1. Copy and paste the SSL files to the SSL folder - `<Agent Installation Folder>/SSL`.
1. Rename the file `<your name>.crt` to `public.crt` and `<your name>.key` to `private.key`.
1. Go to **Start > services.msc** and restart the **Agent Service Manager**.

   > The service name will be `VBI<Agent name>SM`.
   > For example for *Tableau* agent, the service name will be **VBITableauSM**.
1. Open the browser and type the url - `<https://Backend server url:<Agent Port Number>`.

  <div class="center">
    <Zoom>
      <img alt="BI Hub Agent with secured SSL connection" src={useBaseUrl('doc-images/installation-guide/agent-ssl-confirm.png')}/>
    </Zoom>
  <p>BI Hub Agent with secured SSL connection</p>
  </div>

:white_check_mark: This loads up Agent Service Manager success screen with a secured SSL connection.

> `<Agent Port number>` is the same that you entered while <Link to={useBaseUrl('docs/installation-guide/install-bihub-windows/agents/install')}>installing the Agents</Link>.

## SSL Configuration for BOBJ Agent

For BOBJ Agent, the SSL certificates also need to be in `.jks` (Java Key Store) format apart from `.crt` format.

1. Open **manager.ini** file in edit mode with administrative privileges.
1. In the **SSL** section, set `enable ssl = True` and save the file.
1. Copy and paste the SSL files to the SSL folder found in the `< BOBJ Instance installation location >/SSL`.
1. Rename the file `<your name>.crt` to `public.crt` and `<your name>.key` to `private.key`.
1. Import the SSL Certificate and key into the Java KeyStore.
1. Make sure that the Java KeyStore file is generated with the name **BOBJ_Keystore.jks**.
1. Move the **BOBJ_Keystore.jks** file to the SSL folder: `<BOBJ Instance installation location>/SSL`.
1. Enter an appropriate password of the generated KeyStore file in the SSL Password field in the `manager.ini` file.( This must be given after the SSL field ).

   > Example : `SSL Password = password` of the *keystore.jks*

1. Go to **Start > services.msc** and restart the **Agent Service Manager**.

   > The service name will be **BIHUBBOBJSM**.

:white_check_mark: SSL successfully configured for BOBJ Agent.
