import { defineConfig } from 'vitepress'


export default defineConfig({

  srcDir: "",

  title: " ",
  description: "Lend and Borrow on Radix",

  lastUpdated: true,
  cleanUrls: true,

  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/icons/favicon.svg' }],
    ['link', { rel: 'icon', type: 'image/png', href: '/icons/favicon.png' }],
    ['script', { src: 'https://www.googletagmanager.com/gtag/js?id=G-3PZRCH0F0E' }],
    ['script', { src: '/gtag.js' }]
  ],


  themeConfig: {

    search: {
      provider: 'local',
      options: {}
    },

    logo: {
      light: '/icons/Wft_full_blue.svg',
      dark: '/icons/Wft_full_green.svg',
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
      { text: 'Overview', link: '/overview' },
      // { text: 'Roadmap', link: '/roadmap' },
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
        text: 'Incentive programs',
        link: '/incentives',
      },


      {
        text: 'Revenue and Insurance',
        link: '/revenue',
      },
      // {
      //   text: 'Roadmap',
      //   link: '/roadmap',
      // },
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
