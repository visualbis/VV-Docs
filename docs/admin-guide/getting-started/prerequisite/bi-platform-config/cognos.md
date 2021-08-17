---
id: cognos 
title: Cognos
sidebar_label: Cognos 
---

import useBaseUrl from "@docusaurus/useBaseUrl";
import Link from '@docusaurus/Link';
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

- User Privileges:

By default, the Cognos built-in entries include the role **System Administrators** which is a special role. Members of this role are considered root users or super users. They may access any object in the content store.

In BI Hub, the username used to configure Cognos Instance should be a member of this role(**System Administrators**), only then the sync reports will fetch reports for all the existing users otherwise it will fetch reports for the user who is configured in Cognos Instance alone.
