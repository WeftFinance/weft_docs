import { defineConfig } from 'vitepress'


export default defineConfig({
  title: "Weft Finance",
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


    logo: '/weft-logo.png',

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
      { text: 'Overview', link: '/overview' },
      { text: 'Roadmap', link: '/roadmap' },
      { text: 'Launch the dApp', link: 'https://app.weft.finance' }
    ],


    sidebar: [
      {
        text: 'Weft Overview',
        link: '/overview',
        items: [
          {
            text: 'Description and core concepts',
            link: '/description'
          },
          {
            text: 'On-ledger components',
            link: '/components'
          },
          {
            text: 'Lending and Borrowing Operations',
            link: '/operations'
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
      }

    ],

    socialLinks: [
      { icon: 'twitter', link: 'https://twitter.com/Weft_Finance' },
      { icon: 'github', link: 'https://github.com/WeftFinance' }
    ]
  }
})
