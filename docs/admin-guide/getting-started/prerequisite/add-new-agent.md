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

- In the **Admin Home** screen, select **Agent Manager Menu** from the application pane as shown below.

 <div style={{textAlign: 'center'}}>
  <Zoom>
    <img alt="Agent Manager Menu" src={useBaseUrl('/doc-images/admin-guide/agent/agent-manager-menu.jpg')}/>
  </Zoom>
 </div>
- Click on the **Agent Manager** tab and then click **Add Agent** at the top right corner.
- Type *Agent* information such as **Agent name, Server**, and **Port** (This is the same *Port* number entered while installing the *Agents*. Refer the <Link to={useBaseUrl('docs/installation-guide/install-bihub-windows/agents/install')}>BI Hub Installation Guide - Port Requirements</Link> for reference).
> The tool tips provide the necessary guidance.
- Click **Continue**, and the **Add instance** dialog box appears.
  - Attributes will be accepted depending on the agent type being added.
    > For example: *BOBJ* agent instance attributes are different from the *Qlik* agent instance. 
  
   For easier maintenance, the *Port* number must be entered in the same series as that of the agent.
    > For example; If the agent is at *12100*, then the instances must be in *12101,12102,...* series. 
      The *Tool* tips provide necessary guidance and show screenshots of the BI platform with the values.

    <div style={{textAlign: 'center'}}>
      <Zoom>
        <img alt="Instance Manager" src={useBaseUrl('/doc-images/admin-guide/agent/instance-manager.jpg')}/>
      </Zoom>
    </div>

    *Agent and the Instances on the similar Port number and Port series*

- Click **Submit** to add the instance or click **Submit** & **Add New Instance** to add another instance of the same agent.
 - The **Status** column of the configured instance is displayed in the **Home** page of that agent. Following is the color-coding indicating the status of the *Agent* and *BI Platform*:
   - **Green** - active
   - **Red** - inactive
   - **Orange** - *Agent* is active but the *BI platform* is inactive or it cannot reach the
    platform.
 - In the **Actions** column, you can *Stop/Restart* the instance.

After all the agent instances are successfully created, return to the *Agent Manager* screen to view the *status* and details of all agents as shown below. 

<div style={{textAlign: 'center'}}>
      <Zoom>
        <img alt="Agent Manager New" src={useBaseUrl('/doc-images/admin-guide/agent/agent-manager-new.jpg')}/>
      </Zoom>
</div>

*Agent Manager with list of Agents installed and their details*

:white_check_mark: Agents are successfully *installed* and are in the *running* state.

## Next Steps

- [ ] Agent Configuration with BI Platform

Follow the next section to **Configure the BI Platform** and make the trusted connection between the respective *BI Hub Agent* and its *BI Platform*.
