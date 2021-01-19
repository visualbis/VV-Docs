---
id: bi-platform
title: BI Platform
sidebar_label: BI Platform
---
import useBaseUrl from "@docusaurus/useBaseUrl";
import Link from '@docusaurus/Link';
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

The BI Platform Folder menu will list down all the Folders/Reports based on the BI Platforms. The Admin created URLs can be viewed in this page (see Figure below). The user can view all the Folders/Reports and move the selected Folders/Reports to any folder in “My Folder” screen that has been already created by the user. You can also view the Custom URLs created by the Admin in this page.

  <div class="center">
    <Zoom>
      <img alt="BI Platform" src={useBaseUrl('doc-images/user-guide/bi1.png')}/>
    </Zoom>
  </div>

*BI Platform*

For our example, the folder “Tableau” has the sub folder “Tableau Samples” and under this sub folder, there exists another sub folder "Regional". Under the sub folder "Regional", there exists the Report “Stocks”. Now you can move any one of these sub folders or Report “Stocks” to the user created folder “Testing”. For our example, the Report "Stocks" has been selected to get moved to the Testing Folder in My Folders page (see Figure below).

  <div class="center">
    <Zoom>
      <img alt="Report selection" src={useBaseUrl('doc-images/user-guide/bi2.png')}/>
    </Zoom>
  </div>

*Report selection*

After clicking the “Add To My Folders” option, you need to specify to which folder the selected Report “Stocks” needs to be moved (see Figure below).

  <div class="center">
    <Zoom>
      <img alt="Folder selection" src={useBaseUrl('doc-images/user-guide/bi3.png')}/>
    </Zoom>
  </div>

*Folder selection*

For our example, Testing Folder has been selected and now the Report “Stocks” has been moved to Testing Folder in My Folders page as shown below.

  <div class="center">
    <Zoom>
      <img alt="Report moved to My Folder" src={useBaseUrl('doc-images/user-guide/bi4.png')}/>
    </Zoom>
  </div>

*Report moved to My Folder*

