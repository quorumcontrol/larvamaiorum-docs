// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: 'Crypto Colosseum: Larva Maiorum',
    tagline: 'The masks of our ancestors breathe.',
    url: 'https://larvamaiorum-docs.netlify.app',
    baseUrl: '/',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'img/favicon.ico',

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: 'quorumcontrol', // Usually your GitHub org/user name.
    projectName: 'larva-maiorum-docs', // Usually your repo name.

    // Even if you don't use internalization, you can use this field to set useful
    // metadata like html lang. For example, if your site is Chinese, you may want
    // to replace "en" with "zh-Hans".
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
                    routeBasePath: '/',
                    sidebarPath: require.resolve('./sidebars.js'),
                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.

                    editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
                },
                // blog: {
                //     showReadingTime: true,
                //     // Please change this to your repo.
                //     // Remove this to remove the "edit this page" links.
                //     editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
                // },
                theme: {
                    customCss: require.resolve('./src/css/custom.css'),
                },
            }),
        ],
    ],

    themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
        colorMode: {
            defaultMode: 'dark',
        },
        navbar: {
            title: 'Crypto Colosseum: Larva Maiorum',
            logo: {
                alt: 'Crypto Colosseum Logo',
                src: 'img/logo.svg',
            },
            // items: [{
            //         type: 'doc',
            //         docId: 'intro',
            //         position: 'left',
            //         label: 'Tutorial',
            //     },
            //     { to: '/blog', label: 'Blog', position: 'left' },
            //     {
            //         href: 'https://github.com/facebook/docusaurus',
            //         label: 'GitHub',
            //         position: 'right',
            //     },
            // ],
        },
        footer: {
            style: 'dark',
            links: [{
                    title: 'Docs',
                    items: [{
                        label: 'Litepaper',
                        to: '/',
                    }, ],
                },
                {
                    title: 'Community',
                    items: [{
                            label: 'Discord',
                            href: 'https://discord.gg/YrAwv2r5KA',
                        },
                        {
                            label: 'Twitter',
                            href: 'https://twitter.com/CryptoColosseum',
                        },
                    ],
                },
                {
                    title: 'More',
                    items: [{
                        label: 'GitHub',
                        href: 'https://github.com/quorumcontrol',
                    }, ],
                },
            ],
            copyright: `Copyright © ${new Date().getFullYear()} Quorum Control GmbH`,
        },
        prism: {
            theme: darkCodeTheme,
            darkTheme: darkCodeTheme,
        },
    }),
};

module.exports = config;