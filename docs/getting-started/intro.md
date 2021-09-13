---
id: intro
title: What is BI Hub
sidebar_label: Introduction
slug: /
---

import useBaseUrl from "@docusaurus/useBaseUrl"; // Add to the top of the file below the front matter.
import Link from '@docusaurus/Link';

BI Hub is a web-based VBI View LLC product.

BI Hub enables users to view and analyze reports built-in various BI platforms on one page, without having to login into those platforms individually.

Highlights of this product include but are not limited to:

* **Smart view and Discovery of BI assets** - Discover not accessible assets and request access

* **Unified view of BI assets** – A consolidated view of reports from multiple BI platforms on one page.

* **Incredibly easy setup and maintenance** – Easy to set up and 100% automated synchronization between BI Hub and BI platforms.

BI Hub consists of **BI Hub Server, BI Hub Web, and BI Hub Agents**.

This installation document explains the steps involved in the installation of the three components and the procedure to check the success/failure of the installation process.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
  defaultValue="Installation Guide"
  values={[
    {label: 'Installation Guide', value: 'Installation Guide'},
    {label: 'Admin Guide', value: 'Admin Guide'},
    {label: 'User Guide', value: 'User Guide'},
  ]}>
  <TabItem value="Installation Guide"><Link to={useBaseUrl('docs/installation-guide/welcome')}>Installation Guide</Link></TabItem>
  <TabItem value="Admin Guide"><Link to={useBaseUrl('docs/admin-guide/getting-started/welcome')}>Admin Guide</Link></TabItem>
  <TabItem value="User Guide"><Link to={useBaseUrl('docs/user-guide/onboard')}>User Guide</Link></TabItem>
</Tabs>
