---
id: spotfire 
sidebar_label: SPOTFIRE 
<<<<<<< HEAD
---
=======
title: Spotfire Platform Configuration
---

import useBaseUrl from "@docusaurus/useBaseUrl";
import Link from '@docusaurus/Link';
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

Spotfire requires external authentication to be enabled to work with BI Hub.

* Copy all the files from `<spotfire installation location>/ext_auth/ directory` and paste that to `"tibco\tss\tomcat\lib\webapps\spotfire\WEB-INF\lib"`.

* In Spotfire configuration utility, to enable Spotfire Server to use the custom Java authentication filter, set the type in the external authentication to "Authentication Filter".

With the external authentication set to "Authentication Filter", the Filter class in the authentication filter configuration is set to `"vbi.spotfireagent.VbiExtAuthenticator"`.

* Service account needs to be created for this agent and that account should have the role of API User, Impersonator.

<div style={{textAlign: 'center'}}>
  <Zoom>
<img alt="Users and Groups" src={useBaseUrl('/doc-images/spotfire/users-groups.png')}/>
  </Zoom>
</ div>

<div style={{textAlign: 'center'}}>
  <Zoom>
<img alt="Add Users" src={useBaseUrl('/doc-images/spotfire/add-users.png')}/>
  </Zoom>
</ div>

Restart the server for the changes to take place.

>>>>>>> 7cd3941... Restructured BI Hub Agents configurations
