export type PortfolioDataType = {
  id: number
  title: string
  image: string
  category: string
  liveLink?: string
  githubLink?: string
  techStack?: string
  moreInfo?: string
}

export const portfolioGridData: PortfolioDataType[] = [
  {
    id: 1,
    title: 'Unit Clerk Tools',
    image: '/uc-tools-mockup.png',
    category: 'web',
    liveLink: 'https://uc-tools-client.vercel.app/log',
    githubLink: 'https://github.com',
    techStack: 'React, Node.js, Express, MongoDB',
    moreInfo: 'ContextAPI, Actions/Reducers, Auth',
  },
  {
    id: 2,
    title: 'Trip Hut',
    image: '/trip-hut-mockup.png',
    category: 'web',
    liveLink: 'https://triphut.vercel.app/',
    githubLink: 'https://github.com/cl118/trip-hut',
    techStack: 'Next.js, MongoDB',
    moreInfo: 'Server Side Rendering',
  },
  {
    id: 3,
    title: 'Double Down Entertainment',
    image: '/dde-site-mockup.png',
    category: 'web',
    liveLink: 'https://doubledownent-website.vercel.app/',
    githubLink: 'https://github.com/cl118/doubledownent-website',
    techStack: 'Next.js',
  },
  // {
  //   id: 4,
  //   title: 'Club Twenty3',
  //   image: '/',
  //   category: 'web',
  //   liveLink: 'http://',
  //   githubLink: 'https://github.com',
  // },
  // {
  //   id: 5,
  //   title: 'The Wood MDW Announcement',
  //   image: '/',
  //   category: 'media',
  // },
  // {
  //   id: 6,
  //   title: 'Double Down El Chingon Recap',
  //   image: '/',
  //   category: 'media',
  // },
  // {
  //   id: 7,
  //   title: 'DJ Jason Weiss Pitbull Recap',
  //   image: '/',
  //   category: 'media',
  // },
  // {
  //   id: 8,
  //   title: 'Club Twenty3 Flyer',
  //   image: '/c23 flyer',
  //   category: 'graphics',
  // },
  // {
  //   id: 9,
  //   title: 'Hi-Point Flyer',
  //   image: '/hi point flyer',
  //   category: 'graphics',
  // },
  // {
  //   id: 10,
  //   title: 'Animated Flyer',
  //   image: '/animated flyer',
  //   category: 'graphics',
  // },
]
