---
id: upload-metadata-csv
title: Upload metadata by using CSV
sidebar_label: Upload metadata by using CSV
---

import useBaseUrl from "@docusaurus/useBaseUrl";
import Link from '@docusaurus/Link';
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

In addition to classifying reports functionally, other attributes such as Owner of the report, Refresh frequency of the report, Links to other reports, Last Refresh date time can be entered for the reports into a CSV file and uploaded into BI Hub.

To do this, click on Platform Folders tab in Reports Menu and enter any search term say "Sales". All the reports that have the term “Sales” in their Name, Description, BI Platform Path are displayed here. Select all the reports and click on Download. This extracts all the attributes of the reports to a CSV file which can be updated by the administrator with the help of business owners and administrators of those BI platforms.
Once the metadata information is updated, BI Hub admin can navigate to **Reports Menu > Platform Folders** and then click on **Upload** to upload the metadata CSV into BI Hub.

The Hub Folders column in the CSV file denotes the folders in the Hub Folders tab of the Reports Menu.

  <div style={{textAlign: 'center'}}>
    <Zoom>
      <img alt="Sample CSV File" src={useBaseUrl('doc-images/admin-guide/admin-functions/reports/rp6.png')}/>
    </Zoom>
  </div>

  *Screenshot: Sample CSV File*

The folder names can be entered in the CSV file too. If the folder is available in Hub Folders Tab, then the reports are moved into that folder. If the Hub Folder does not exist, a folder will be created in that name and the reports will be placed under that folder.
  <div style={{textAlign: 'center'}}>
    <Zoom>
      <img alt="Hub Folders" src={useBaseUrl('doc-images/admin-guide/admin-functions/reports/rp7.png')}/>
    </Zoom>
  </div>

  *Screenshot: Hub Folders*

Reports menu will also enable the BI Hub administrator to propagate the metadata of reports from BI platforms into BI Hub. Admin can navigate to the report in the Platform folders or search for the reports and select them and click on Sync Metadata. This will import only the metadata for those selected reports from the BI platform into BI Hub.

  <div style={{textAlign: 'center'}}>
    <Zoom>
      <img alt="Synch Metadata" src={useBaseUrl('doc-images/admin-guide/admin-functions/reports/rp8.png')}/>
    </Zoom>
  </div>

 * Screenshot: Sync Metadata*