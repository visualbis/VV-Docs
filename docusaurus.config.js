module.exports = {
  title: "BI Hub",
  tagline: "Your BI Search Engine",
  url: "https://github.com/divyabhushan/VV-Docs",
  baseUrl: "/VV-Docs/",
  onBrokenLinks: "throw",
  favicon: "img/favicon.ico",
  organizationName: "divyabhushan", // Usually your GitHub org/user name.
  projectName: "VV-Docs", // Usually your repo name.
  themeConfig: {
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
          to: "docs/user-guide/onboard",
          label: "User Guide",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",

      copyright: `
    <div class="row" id="footer">
      <div class="col" style="text-align:left; font-color: #FFFFFF;">
        <a href="#" style="float:left">Blogs</a>
        <a href="#" style="float:left; padding-left:2px; margin-left:15px;">Product Website</a>
      </div>
      <div class="col" style="text-align:center">Copyright © ${new Date().getFullYear()} Visual BI Solutions.</div>
      <div class="col" style="text-align:right">
        <a href="#"><img src="img/twitter.svg" width="21px" height="16px"></a>
        <a href="#" style="padding-left:10px"><img src="img/facebook.svg" width="18px" height="17px"></a>
        <a href="#" style="padding-left:10px"><img src="img/linkedin.svg" width="18px" height="17px"></a>
      </div>
    </div>
      `,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          // It is recommended to set document id as docs home page (`docs/` path).
          homePageId: "getting-started/intro",
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
