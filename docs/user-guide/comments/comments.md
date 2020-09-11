---
id: comments
title: Comments
sidebar_label: Comments
---
import useBaseUrl from "@docusaurus/useBaseUrl"; 
import Link from '@docusaurus/Link'; 
import Zoom from "react-medium-image-zoom"; 
import "react-medium-image-zoom/dist/styles.css";

The user can add the comments for the selected Reports using the Comment Icon as shown below.

  <div style={{textAlign: 'center'}}>
    <Zoom>
      <img alt="Comments Icon" src={useBaseUrl('doc-images/user-guide/cf16.png')}/>
    </Zoom>
  </div>

*Comments Icon*

The user can create, edit and delete the comment which was created against the selected Report (see Figure below)

  <div style={{textAlign: 'center'}}>
    <Zoom>
      <img alt="Comments Window" src={useBaseUrl('doc-images/user-guide/cf17.png')}/>
    </Zoom>
  </div>

*Comments Window*

The Comments are classified as "Public" and "Private" categories. When the user provides the comment as <%22@SRV03>" without selecting the Private option (means that it is Public), then it implies that the comment is provided for the SRV03 User and it can be also viewed by other users too (see Figure below).

  <div style={{textAlign: 'center'}}>
    <Zoom>
      <img alt="Public Comment" src={useBaseUrl('doc-images/user-guide/public.png')}/>
    </Zoom>
  </div>

*Public Comment*

When the user provides the comment as <%22@SRV03>" by selecting the Private option (means that it is Private), then it implies that the comment is provided for the SRV03 User and it can be viewed only by the User and not the other users (see Figure below).

  <div style={{textAlign: 'center'}}>
    <Zoom>
      <img alt="Private Comment" src={useBaseUrl('doc-images/user-guide/private.png')}/>
    </Zoom>
  </div>

*Private Comment*