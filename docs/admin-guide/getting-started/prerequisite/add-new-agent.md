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
scenarios. 
- The first step involved in setting up BI Hub is creating
agents and its instances necessary to connect with BI platforms.
- <Link to={useBaseUrl('docs/admin-guide/agent-manager/mult-instances')}>Multiple instances of BI Hub agents</Link> are required for load balancing and high availability purposes.

## Adding the Agent/Instances

1. In the **Admin Home** screen, select **Agent Manager** menu from the application pane as shown below.

 <div class="center">
  <Zoom>
    <img alt="Agent Manager Menu" height="400" src={useBaseUrl('/doc-images/admin-guide/agent/agent-manager-menu.png')}/>
  </Zoom>
  <p>Agent Manager</p>
 </div>

2. Select **Agent Manager** tab and then click **Add Agent** at the top right corner.

  <div class="center">
    <Zoom>
      <img alt="Add new agent" src={useBaseUrl('/doc-images/admin-guide/agent/add-agent.png')}/>
    </Zoom>
    <p>Add new agent</p>
  </div>

  - Enter **Agent Name, Server**, and **Port** (This is the same *Port* number entered while installing the *Agents*. Refer the <Link to={useBaseUrl('docs/installation-guide/install-bihub-windows/agents/install')}>BI Hub Installation Guide - Port Requirements</Link> for reference).
    <div class="center">
      <Zoom>
        <img alt="Add new agent" height="400" src={useBaseUrl('/doc-images/admin-guide/agent/new-agent-form.png')}/>
      </Zoom>
      <p>Add new agent</p>
    </div>
  
  - Click **Continue**.

2. In the next **Add Agent** screen, fill in the instance details.

 <div class="center">
  <Zoom>
    <img alt="Add agent instance details" height="400" src={useBaseUrl('/doc-images/admin-guide/agent/add-agent-instance.png')}/>
  </Zoom>
  <p>Add instance details</p>
 </div>

 > Attributes will be accepted depending on the agent type being added.
 > For example: *BOBJ* agent instance attributes are different from the *Qlik* agent instance. 
  
 For easier maintenance, the *Port* number must be entered in the same series as that of the agent.
 > For example; If the agent is at *12100*, then the instances must be in *12101,12102,...* series.  
  <div class="center">
     <Zoom>
       <img alt="Instance Manager" src={useBaseUrl('/doc-images/admin-guide/agent/instance-manager.jpg')}/>
     </Zoom>
    <p>Agent and the Instances on the similar Port number and Port series</p>
  </div>

The Tool-tips provide necessary guidance and show screenshots of the BI platform with the values.

- Click **Submit** to add the instance or click **Submit** & **Add New Instance** to add another instance of the same agent.
 - The **Status** column of the configured instance is displayed in the **Home** page of that agent. Following is the color-coding indicating the status of the *Agent* and *BI Platform*:
   - <a id="color-green"><b>Green</b></a> : active
   - <a id="color-red"><b>Red</b></a> : inactive
   - <a id="color-orange"><b>Orange</b></a> : The Agent is active but the BI platform is inactive or it cannot reach the platform.
 - In the **Actions** column, you can *Stop ( <img src={useBaseUrl('/img/stop.svg')} width="15"/> )/Restart ( <img src={useBaseUrl('/img/restart.svg')} width="15"/> )* the instance.

After all the agent instances are successfully created, return to the *Agent Manager* screen to view the *status* and details of all agents as shown below. 

<div class="center">
      <Zoom>
        <img alt="Agent Manager New" src={useBaseUrl('/doc-images/admin-guide/agent/agent-manager.png')}/>
      </Zoom>
	<p>Agent Manager with list of Agents installed and their details</p>
</div>


:white_check_mark: Agents are now *installed* and are in the *running* state.

## Next Steps

- [ ] Agent Configuration with BI Platform

Follow the next section to **Configure the BI Platform** and make the trusted connection between the respective *BI Hub Agent* and its *BI Platform*.
