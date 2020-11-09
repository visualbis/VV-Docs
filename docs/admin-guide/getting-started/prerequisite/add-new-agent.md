---
id: add-new-agent
title: Add New Agent
sidebar_label: Add New Agent
---

import useBaseUrl from "@docusaurus/useBaseUrl";
import Link from '@docusaurus/Link';
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

The agent is the component that establishes connectivity between BI Hub and
the BI platform and this section is applicable for all the above
scenarios. The first step involved in setting up BI Hub is creating
agents and its instances necessary to connect with BI platforms.
Multiple instances of BI Hub agents are required for load balancing and
high availability purposes and these are covered in detail in Section
multiple instances of this document.

## Adding the Agent/Instances

Follow the steps below to add a new agent:

- In the Admin Home screen, select Agent Manager Menu from the application pane as shown below.

 <div style={{textAlign: 'center'}}>
  <Zoom>
    <img alt="Agent Manager Menu" src={useBaseUrl('/doc-images/admin-guide/agent/agent-manager-menu.jpg')}/>
  </Zoom>
 </div>
- Click on the Agent Manager Tab and then click on Add Agent given on the right top corner to open the Add Agent page.
- Type agent information such as Agent name, Server and Port. The port number that was given during the installation of the agent should be entered here. Please check the <Link to={useBaseUrl('docs/installation-guide/install-bihub-windows/agents/install')}>BI Hub Installation Guide V1.5.4 - Port Requirements</Link> for reference. The tool tips will provide the necessary guidance.
- Click on Continue and the Add instance dialog box appears.
- Attributes will be accepted depending on the agent type being added.
    For ex: BOBJ agent instance attributes are very different from the Qlik
    agent instance. For easier maintenance, the port number must be
    given in the same series as that of the agent. Ex. If the agent is
    at 12100, then the instances must be in 12101,12102 etc. The tool
    tips provide necessary guidance and shows screenshots of the BI platform
    which provides the values.

    <div style={{textAlign: 'center'}}>
      <Zoom>
        <img alt="Instance Manager" src={useBaseUrl('/doc-images/admin-guide/agent/instance-manager.jpg')}/>
      </Zoom>
    </div>

- Click Submit to add the instance or Click on Submit & Add New Instance to add another instance of the same agent.
- The Status column of the configured instance is displayed in the Home
    page of that agent. Green status indicates that the Agent and BI
    platform are active. Red status indicates that the Agent and BI
    platforms are inactive. Orange status indicates that the Agent is
    active but the BI platform is inactive or it cannot reach the
    platform. Stop/Restart of instance can be done in the Actions
    column.
- After all the agent instances are successfully created, return to
    Agent Manager to view the status and details of all agents as shown
    below. The number of instances configured for the agent will also be
    displayed.

    <div style={{textAlign: 'center'}}>
      <Zoom>
        <img alt="Agent Manager New" src={useBaseUrl('/doc-images/admin-guide/agent/agent-manager-new.jpg')}/>
      </Zoom>
    </div>
