module.exports = {
  title: "BI Hub",
  tagline: "Your BI Search Engine",
  url: "https://github.com/divyabhushan/VV-Docs",
  baseUrl: "/",
  onBrokenLinks: "ignore",
  favicon: "img/favicon.ico",
  organizationName: "divyabhushan", // Usually your GitHub org/user name.
  projectName: "VV-Docs", // Usually your repo name.
  themeConfig: {
    sidebarCollapsible: true,
    /*
    algolia: {
      apiKey: "api-key",
      indexName: "index-name",
      algoliaOptions: {}, // Optional, if provided by Algolia
  },
  */
    navbar: {
      hideOnScroll: true,
      logo: {
        alt: "BI Hub",
        src: "img/buhub-logo.svg",
        srcDark: "img/logo-darkmode.svg",
      },
      items: [
        /*
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',

        },
        */
        /*        {to: 'blog', label: 'Blog', position: 'left'}, */
        /*        {
          href: 'https://github.com/facebook/docusaurus',
          label: 'GitHub',
          position: 'right',
        },
*/
        {
          to: "docs/installation-guide/welcome",
          label: "Installation Guide",
          position: "right",
        },
        {
          to: "docs/admin-guide/getting-started/welcome",
          label: "Admin Guide",
          position: "right",
        },
        {
          to: "docs/user-guide/onboard-info",
          label: "User Guide",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",

      copyright: `
    <div class="row">
      <div class="col" style="text-align:left">Copyright © ${new Date().getFullYear()} Visual BI Solutions.</div>
      <div class="col" style="text-align:right">
        <a href="https://twitter.com/vbi_hub" target="_blank"><img src="img/twitter.svg" width="21px" height="16px"></a>
        <a href="https://www.facebook.com/vbihub/" target="_blank" style="padding-left:10px"><img src="img/facebook.svg" width="18px" height="17px"></a>
        <a href="https://www.linkedin.com/company/bi-hub/" target="_blank" style="padding-left:10px"><img src="img/linkedin.svg" width="18px" height="17px"></a>
      </div>
    </div>
      `,
    },
  },
  plugins: ["docusaurus-lunr-search"],
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          // It is recommended to set document id as docs home page (`docs/` path).
          
          sidebarPath: require.resolve("./sidebars.js"),
        },
        /*
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        */
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
