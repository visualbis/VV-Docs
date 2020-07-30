module.exports = {
  title: 'BI Hub',
  tagline: 'BI Hub is a web-based Visual BI product',
  url: 'https://github.com/divyabhushan/VV-Docs',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  favicon: 'img/favicon.ico',
  organizationName: 'divyabhushan', // Usually your GitHub org/user name.
  projectName: 'VV-Docs', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'BI Hub',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
/*        {to: 'blog', label: 'Blog', position: 'left'}, */
/*        {
          href: 'https://github.com/facebook/docusaurus',
          label: 'GitHub',
          position: 'right',
        },
*/
{
to: 'docs/installation-guide/welcome',
label: 'Installation Guide',
position: 'right',
},
{
  to: 'docs/admin-guide/getting-started/welcome',
  label: 'Admin Guide',
  position: 'right',
  },
  {
    to: 'docs/user-guide/dashboard',
    label: 'User Guide',
    position: 'right',
    },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'BI Hub',
          items: [
            {
              label: 'BI Hub',
              to: 'docs/',
            },
            {
              label: 'Docs',
              to: 'docs/doc1',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/docusaurus',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/facebook/docusaurus',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          // It is recommended to set document id as docs home page (`docs/` path).
          homePageId: 'getting-started/intro',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
