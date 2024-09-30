import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({

  srcDir: "",

  title: " ",
  description: "Lend and Borrow on Radix",

  lastUpdated: true,
  cleanUrls: true,

  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/favicons/favicon.svg' }],
    ['link', { rel: 'icon', type: 'image/png', href: '/favicons/favicon.png' }],
    ['script', { src: 'https://www.googletagmanager.com/gtag/js?id=G-3PZRCH0F0E' }],
    ['script', { src: '/gtag.js' }]
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
      { text: 'Overview', link: '/intro' },
      { text: 'Launch the dApp', link: 'https://beta.weft.finance' }
    ],

    sidebar: [
      {
        text: 'Weft Overview',
        link: '/overview',
        items: [
          {
            text: 'Description and core concepts',
            link: '/intro'
          },
          {
            text: 'Lending',
            link: '/lending'
          },
          {
            text: 'Borrowing',
            link: '/borrowing'
          },
          {
            text: 'Borrowing',
            link: '/liquidation'
          },
        ]
      },

      {
        text: 'The WEFT Token',
        link: '/token',
      },

      {
        text: 'Revenue and Insurance',
        link: '/revenue',
      },
      {
        text: 'Roadmap',
        link: '/roadmap',
      },
      {
        text: 'The team',
        link: '/team'
      },
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
