// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'StarRocks',
  tagline: 'StarRocks documentation',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  //url: 'https://docs.galacticbase.com',
  url: 'https://danroscigno.github.io/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/doc/',
  //https://danroscigno.github.io/docusaurusv3/docs/3.0/administration/Authentication.html

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'StarRocks', // Usually your GitHub org/user name.
  projectName: 'starrocks', // Usually your repo name.
  trailingSlash: false,

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          // id: 'english', // this is the default instance, so it has no id
          // I just gave it an id of 'english' as this is for the English docs
          path: 'en',
          routeBasePath: 'en',
          sidebarPath: require.resolve('./sidebarsEnglish.js'),
          
          // example for main branch of English docs:
          // https://github.com/StarRocks/starrocks/edit/main/docs/administration/Backup_and_restore.md
          //
          // example for main branch of Chinese docs:
          // https://github.com/StarRocks/docs.zh-cn/edit/main/administration/Backup_and_restore.md
          //
          editUrl: ({docPath}) => {
              return 'https://github.com/StarRocks/starrocks/edit/main/docs/' + docPath
          },
          lastVersion: '3.1',
          versions: {
            '3.1': {
            },
            '3.0': {
              banner: 'none'
            },
            '2.5': {
              banner: 'none'
            },
          },
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],
    plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'chinese',
        path: 'zh',
        routeBasePath: 'zh',
        sidebarPath: require.resolve('./sidebarsChinese.js'),
        // example for main branch of English docs:
        // https://github.com/StarRocks/starrocks/edit/main/docs/administration/Backup_and_restore.md
        //
        // example for main branch of Chinese docs:
        // https://github.com/StarRocks/docs.zh-cn/edit/main/administration/Backup_and_restore.md
        //
        editUrl: ({docPath}) => {
            return 'https://github.com/StarRocks/docs.zh-cn/edit/main/' + docPath
        },
        lastVersion: '3.1',
        versions: {
          '3.1': {
          },
          '3.0': {
            banner: 'none'
          },
          '2.5': {
            banner: 'none'
          },
          '2.4': {
            banner: 'none'
          },
          '2.3': {
            banner: 'none'
          },
          '2.2': {
            banner: 'none'
          },
          '2.1': {
            banner: 'none'
          },
          '2.0': {
            banner: 'none'
          },
          '1.19': {
            banner: 'none'
          },
        },
      },
    ],
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'StarRocks',
        logo: {
          alt: 'StarRocks Logo',
          src: 'img/logo.svg',
          href: 'https://www.starrocks.io/',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'documentation',
            position: 'left',
            label: 'Documentation',
          },
          {
            type: 'docsVersionDropdown',
            position: 'left',
          },
          {
            type: 'docsVersionDropdown',
            position: 'left',
            docsPluginId: 'chinese',
          },
         /* {
            type: 'docsVersionDropdown',
            position: 'left',
            dropdownActiveClassDisabled: true,
          },*/
          {
            href: 'https://github.com/StarRocks/starrocks',
            label: 'GitHub',
            position: 'right',
          },
          {
            type: 'localeDropdown',
            position: 'left',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Documentation',
                to: '/docs/introduction/StarRocks_intro',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} StarRocks, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      algolia: {
        // The application ID provided by Algolia
        appId: 'ER08SJMRY1',
  
        // Public API key: it is safe to commit it
        apiKey: '08af8d37380974edb873fe8fd61e8dda',
  
        indexName: 'starrocks',
  
        // Optional: see doc section below
        contextualSearch: true,
  
        // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
        //externalUrlRegex: 'external\\.com|domain\\.com',

        // Optional: Replace parts of the item URLs from Algolia. Useful when using the same search index for multiple deployments using a different baseUrl. You can use regexp or string in the `from` param. For example: localhost:3000 vs myCompany.com/docs
        //replaceSearchResultPathname: {
          //from: '/en-us/latest/', // or as RegExp: /\/docs\//
          //to: '/docs/',
        //},

        // Optional: Algolia search parameters
        searchParameters: {},

        // Optional: path for search page that enabled by default (`false` to disable it)
        searchPagePath: 'search',

        //... other Algolia params
      },
    }),
};

module.exports = config;
