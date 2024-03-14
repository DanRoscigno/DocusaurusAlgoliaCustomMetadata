// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'My Site',
  tagline: 'Dinosaurs are cool',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://docs.galacticbase.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'DanRoscigno', // Usually your GitHub org/user name.
  projectName: 'doc', // Usually your repo name.

  // Netlify should have this disabled, but I am seeing redirects to URLs with trailing slash...
  trailingSlash: true,

  onBrokenLinks: 'ignore',
  onBrokenMarkdownLinks: 'ignore',
  onBrokenAnchors: 'ignore',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          path: "serverless",
          id: "serverless",
          routeBasePath: "serverless",
          sidebarPath: 'sidebars.json',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  plugins: [
    //'docusaurus-plugin-hubspot',
    [
      "@docusaurus/plugin-content-docs",
      {
        path: "private",
        id: "private",
        routeBasePath: "private",
        sidebarPath: 'sidebars.json',
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        path: "enterprise",
        id: "enterprise",
        routeBasePath: "enterprise",
        sidebarPath: 'sidebars.json',
      },
    ],
    [
    '@docusaurus/plugin-client-redirects',
    {
      redirects: [
        // /docs/oldDoc -> /docs/newDoc
      ],
    },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      docs: {
        sidebar: {
          hideable: true,
          autoCollapseCategories: true,
        },
      },
      // This image shows in Slack when you paste a link
      image: 'img/celerdata.svg',
      navbar: {
        title: 'CelerData',
        logo: {
          alt: 'CelerData Logo',
          src: 'img/celerdata.svg',
          href: 'https://celerdata.com/',
        },
        items: [
          {
            label: 'Privacy policy',
            position: 'right',
            to: 'https://www.starrocks.io/product/privacy-policy',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            items: [
              {
                label: 'StarRocks.io',
                to: 'https://starrocks.io/',
              },
              {
                label: 'Privacy policy',
                to: 'https://www.starrocks.io/product/privacy-policy',
              },
            ],
          },
        ],
        copyright: `Docs built with Docusaurus.`,
      },

      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
        additionalLanguages: [
          'java',
          'haskell',
          'python',
          'matlab',
          'bash',
          'diff',
          'json',
          'scss',
        ],
      },
      algolia: {
        appId: 'NHCE31YG9M',
        apiKey: 'eca266f9e49940e2d220ea88fdafa636',
        indexName: 'galacticbase',
        
      // Optional: see doc section below
      contextualSearch: true,

      // Optional: Algolia search parameters
      searchParameters: { hitsPerPage: 1000},

      // Optional: path for search page that enabled by default (`false` to disable it)
      searchPagePath: false,

      //... other Algolia params
      },
  
    }),
};

module.exports = config;
