---
id: ssl-advanced
title: Advanced Agent Configuration
sidebar_label: Advanced Agent Configuration
---

import useBaseUrl from "@docusaurus/useBaseUrl";
import Link from '@docusaurus/Link';

To edit the basic default BI Hub Agents configurations and port number, edit the **manager.ini** file.

- Open the **manager.ini** file in edit mode with administrative privileges. The file is located in `<agent installation location>/` directory.
- Change the required property to the desired value. Save the file and restart the agent service manager from **Start > services.msc**.
> The service name will be `BIHub<Agentname>SM`. For example *Tableau* agent service name will be **BIHubTableauSM**.

## Next Steps

A new *Agent* instance must be added and each agent must be configured with the the BI Platform. These steps are covered in the <Link to={useBaseUrl('docs/admin-guide/getting-started/prerequisite/prerequisite')}>Administration Guide - pre-requisite</Link> section.

