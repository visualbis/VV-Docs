---
id: report
title: Report Tab
sidebar_label: Report Tab
---

import useBaseUrl from "@docusaurus/useBaseUrl";
import Link from '@docusaurus/Link';
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

In addition to the metadata from BI platform, we can have our own metadata for reports. This can be done using the Report Tab option in Settings Menu. (see Figure below).

  <div style={{textAlign: 'center'}}>
    <Zoom>
      <img alt="Report Tab" src={useBaseUrl('doc-images/admin-guide/admin-functions/settings/newad3.png')}/>
    </Zoom>
  </div>

  *Report Tab*

To add an attribute, click on Add attribute and give a name for the metadata field you wish to add. Enter the label, description and type of Attribute and click submit. The types of Attributes are Text, URL, Date Time, List and User Selector. For our example, all the types of Attributes have been selected. The added Attributes will now be part of the metadata of the reports (see the Figures below).
  <div style={{textAlign: 'center'}}>
    <Zoom>
      <img alt="Add Text as Custom Attribute" src={useBaseUrl('doc-images/admin-guide/admin-functions/settings/text.png')}/>
    </Zoom>
  </div>

  *Add Text as Custom Attribute*

  <div style={{textAlign: 'center'}}>
    <Zoom>
      <img alt="Add URL as Custom Attribute" src={useBaseUrl('doc-images/admin-guide/admin-functions/settings/url.png')}/>
    </Zoom>
  </div>

  *Add URL as Custom Attribute*

  <div style={{textAlign: 'center'}}>
    <Zoom>
      <img alt="Add Date Time as Custom Attribute" src={useBaseUrl('doc-images/admin-guide/admin-functions/settings/datetime.png')}/>
    </Zoom>
  </div>

  *Add Date Time as Custom Attribute*

  <div style={{textAlign: 'center'}}>
    <Zoom>
      <img alt="Add User Selector as Custom Attribute" src={useBaseUrl('doc-images/admin-guide/admin-functions/settings/userselector.png')}/>
    </Zoom>
  </div>

  *Add User Selector as Custom Attribute*

  <div style={{textAlign: 'center'}}>
    <Zoom>
      <img alt="Add List as Custom Attribute" src={useBaseUrl('doc-images/admin-guide/admin-functions/settings/list.png')}/>
    </Zoom>
  </div>

  *Add List as Custom Attribute*

Now you can view all the added attributes as shown in the below Figure. The attributes can be enabled/disabled based on our choice. For our example, all the attributes have been enabled and those attributes can be mapped to a Report (see Figure below). You can also view the default attributes namely Subject Matter Expert, Certification, Documentation and Mobile Enabled as shown in the Figure below.
  <div style={{textAlign: 'center'}}>
    <Zoom>
      <img alt="Attributes List" src={useBaseUrl('doc-images/admin-guide/admin-functions/settings/customattributeenable.png')}/>
    </Zoom>
  </div>

  *Attributes List*

To add value for these new attributes, click on **Reports > Platform Folders**. Select the report for which the values for those attributes have to be added and click on Details icon.

  <div style={{textAlign: 'center'}}>
    <Zoom>
      <img alt="Select Icon for Custom Fields screen" src={useBaseUrl('doc-images/admin-guide/admin-functions/settings/stocksreport.png')}/>
    </Zoom>
  </div>

  *Select Icon for Custom Fields screen*

Now click on Custom Fields. The Custom Fields Tab can be also navigated by directly clicking the edit icon for the respective Report (see Figure below).The added attributes will be listed here. Enter the desired value and click submit (see Figure below). The Attributes namely Subject
Matter Expert, Certification and Documentation are common attributes which would get displayed in the Custom Fields screen and the user can provide the appropriate inputs.

  <div style={{textAlign: 'center'}}>
    <Zoom>
      <img alt="Custom Fields" src={useBaseUrl('doc-images/admin-guide/admin-functions/settings/stockscustomdetails.png')}/>
    </Zoom>
  </div>

  *Custom Fields*

This fields will now be seen in the details of the same report when
logged in as a user (see Figure below).

  <div style={{textAlign: 'center'}}>
    <Zoom>
      <img alt="Details of all Custom Attributes" src={useBaseUrl('doc-images/admin-guide/admin-functions/settings/custom-attributes.png')}/>
    </Zoom>
  </div>

  *Details of all Custom Attributes*

As part of the New Release, the Mobile Enabled attribute has been included in the Custom Fields screen (see Figure below).
  <div style={{textAlign: 'center'}}>
    <Zoom>
      <img alt="Mobile Enabled Attribute" src={useBaseUrl('doc-images/admin-guide/admin-functions/settings/mobile1.jpg')}/>
    </Zoom>
  </div>

 *Mobile Enabled attribute*

When this attribute is set to True, it denotes that those reports are compatible in mobile devices. For our example, the selected "Stocks" Report will be mobile compatible (see Figure above).