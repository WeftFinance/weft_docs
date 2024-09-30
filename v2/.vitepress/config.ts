import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config

export default defineConfig({

  srcDir: "",

  title: "v2",
  description: "Lend and Borrow on Radix",

  lastUpdated: true,
  cleanUrls: true,

  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/icons/favicon.svg' }],
    ['link', { rel: 'icon', type: 'image/png', href: '/icons/favicon.png' }],
    // ['script', { src: 'https://www.googletagmanager.com/gtag/js?id=G-3PZRCH0F0E' }],
    // ['script', { src: '/gtag.js' }]
  ],

  themeConfig: {

    logo: {
      light: '/icons/Wft_full_blue.svg',
      dark: '/icons/Wft_full_green.svg'
    },

    search: {
      provider: 'local'
    },

    editLink: {
      pattern: 'https://github.com/WeftFinance/weft_docs/tree/main/content/:path',
      text: 'Edit this page on GitHub'
    },

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2023-present Weft Finance'
    },

    nav: [
      { text: 'Home', link: '/' },
      { text: 'Overview', link: '/overview/intro' },
      { text: 'Launch the dApp', link: 'https://beta.weft.finance' }
    ],

    sidebar: [
      {
        text: 'Weft Overview',
        link: '/overview/intro',
        items: [
          {
            text: 'Introduction',
            link: '/overview/intro'
          },
          {
            text: 'Lending',
            link: '/overview/lending'
          },
          {
            text: 'Borrowing',
            link: '/overview/borrowing'
          },
          {
            text: 'Isolation',
            link: '/overview/isolation'
          },
          {
            text: 'Liquidation',
            link: '/overview/liquidation'
          },
          {
            text: 'Extra features',
            link: '/overview/extra'
          },
          {
            text: 'Other components',
            link: '/overview/components'
          },
          {
            text: 'Glossary',
            link: '/overview/glossary'
          },
        ]
      },

      // {
      //   text: 'The WEFT Token',
      //   link: '/token',
      // },

      // {
      //   text: 'Revenue and Insurance',
      //   link: '/revenue',
      // },
      // {
      //   text: 'Roadmap',
      //   link: '/roadmap',
      // },

      {
        text: 'Term of use',
        link: '/term-condition'
      },
      {
        text: 'Privacy Policy',
        link: '/privacy-policy'
      }

    ],

    socialLinks: [
      { icon: 'twitter', link: 'https://twitter.com/Weft_Finance' },
      { icon: 'github', link: 'https://github.com/WeftFinance' }
    ]
  }

  ,


})
