// @ts-check
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'deliberate',
  tagline: 'Public debates — argument trees, rated by markets, tallied on-chain.',
  favicon: 'img/deliberateIcon.ico',

  url: 'https://deliberate-app.github.io',
  baseUrl: '/docs/',
  organizationName: 'deliberate-app',
  projectName: 'docs',
  deploymentBranch: 'gh-pages',

  onBrokenLinks: 'warn',

  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.16.22/dist/katex.min.css',
      type: 'text/css',
      crossorigin: 'anonymous',
    },
    {
      // The frontend's exact font trio (see frontend/index.html).
      href: 'https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,300..900&family=IBM+Plex+Mono:wght@400;500&family=Public+Sans:wght@400;500;600&display=swap',
      type: 'text/css',
    },
  ],

  plugins: [
    [
      '@docusaurus/plugin-client-redirects',
      {
        redirects: [
          {from: '/docs/ratingmarkets', to: '/docs/argument-markets'},
          {from: '/docs/incentives', to: '/docs/argument-markets'},
          {from: '/docs/curation', to: '/docs/argument-markets'},
          {from: '/docs/disputes', to: '/docs/argument-markets'},
          {from: '/docs/payout', to: '/docs/bounty'},
          {from: '/docs/layer2', to: '/docs/roadmap'},
        ],
      },
    ],
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          showLastUpdateTime: true,
          remarkPlugins: [remarkMath],
          rehypePlugins: [[rehypeKatex, {strict: false}]],
        },
        blog: {
          showReadingTime: true,
          onUntruncatedBlogPosts: 'ignore',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // The brand's link-preview card.
      image: 'img/og-image.png',
      // The app is light-only paper; the docs match instead of shipping a second, dark identity.
      colorMode: {
        defaultMode: 'light',
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },
      navbar: {
        logo: {
          alt: 'deliberate',
          src: 'img/deliberateIcon.svg',
        },
        items: [
          {
            type: 'html',
            position: 'left',
            value: '<a class="navbar-wordmark" href="/docs/">delibe<span class="nw-rate">rate</span></a>',
          },
          {
            to: 'docs/',
            activeBasePath: 'docs',
            label: 'Docs',
            position: 'left',
          },
          {to: 'blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/deliberate-app/',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'light',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Overview',
                to: 'docs/',
              },
              {
                label: 'Phases',
                to: 'docs/phases/',
              },
              {
                label: 'Argument Markets',
                to: 'docs/argument-markets/',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.gg/p4ZvtnprEE',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/deliberate',
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
                href: 'https://github.com/deliberate-app/',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Michael A. Heuer.`,
      },
    }),
};

export default config;
