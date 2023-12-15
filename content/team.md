---
layout: page
---
<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers
} from 'vitepress/theme'


const members = [
  {
    avatar: '/team-members/yetinin.jpeg',
    name: 'Yetinin',
    title: 'Co-Founder',
    links: [
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/yetininoliviercoulibaly/' },
      { icon: 'twitter', link: 'https://twitter.com/cyover1' },
    ]
  },
  {
    avatar: '/team-members/zivile.png',
    name: 'Zivile',
    title: 'UX/UI Designer',
    links: [
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/zivile-camara-477974196/' },
      // { icon: 'twitter', link: '' },
    ]
  },
    {
    avatar: '/team-members/penifana.png',
    name: 'Penifana',
    title: 'Frontend Developer',
    links: [
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/penifana-rodrigue-ouattara' },
      // { icon: 'twitter', link: '' },
    ]
  },
  {
    avatar: '/team-members/roland.png',
    name: 'Yetenessoko',
    title: 'Backend Developer',
    links: [
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/yetenessoko-roland-coulibaly-90b649103/' },
      // { icon: 'twitter', link: '' },
    ]
  },
  {
    avatar: '/team-members/maxence.jpeg',
    name: 'Maxence',
    title: 'Product Manager',
    links: [
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/maxence-iritie-ab5253149/' },
      // { icon: 'twitter', link: '' },
    ]
  },
    {
    avatar: '/team-members/atoumbre.jpeg',
    name: 'Atoumbre',
    title: 'Co-Founder',
    links: [
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/atoumbre/' },
      { icon: 'twitter', link: 'https://twitter.com/atoumbre' },
    ]
  },
]
</script>

<VPTeamPage>
    <VPTeamPageTitle>
        <template #title>We are <b>Weft’ers</b></template>
        <template #lead>
        A group of passionate people working together to contribute to the future of Decentralised Finance by building accessible financial services to everyone.
        </template>
    </VPTeamPageTitle>
    <VPTeamMembers :members="members" />
</VPTeamPage>