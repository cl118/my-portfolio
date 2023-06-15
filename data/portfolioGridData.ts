export type PortfolioDataType = {
  id: number
  title: string
  image: string
  source?: string
  aspectRatio?: string
  category: string
  liveLink?: string
  githubLink?: string
  techStack?: string
  moreInfo?: string
}

export const portfolioGridData: PortfolioDataType[] = [
  {
    id: 1,
    title: 'UMortgage Website',
    image: 'https://d3pw4l21beyd8c.cloudfront.net/images/um-mockup.png',
    category: 'web',
    liveLink: 'https://umortgage.com',
    techStack: 'Next.js, TailwindCSS, PostgreSQL, AWS',
    moreInfo: 'Sanity.io, Docker, RESTful APIs',
  },
  {
    id: 2,
    title: 'Unit Clerk Tools',
    image: 'https://d3pw4l21beyd8c.cloudfront.net/images/uc-tools-mockup.png',
    category: 'web',
    liveLink: 'https://uc-tools-client.vercel.app/',
    githubLink: 'https://github.com',
    techStack: 'React, Node.js, Express, MongoDB',
    moreInfo: 'ContextAPI, Actions/Reducers, Auth',
  },
  {
    id: 3,
    title: 'Double Down Entertainment',
    image: 'https://d3pw4l21beyd8c.cloudfront.net/images/dde-site-mockup.png',
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
  {
    id: 5,
    title: 'The Wood MDW Lineup',
    image: 'https://d3pw4l21beyd8c.cloudfront.net/images/the-wood-mdw-lineup-mockup.png',
    source: 'https://d3pw4l21beyd8c.cloudfront.net/videos/the-wood-mdw-lineup.mp4',
    aspectRatio: '1:1',
    category: 'media',
    moreInfo: 'Motion Graphics Design',
  },
  {
    id: 6,
    title: 'DDE El Chingon Recap',
    image: 'https://d3pw4l21beyd8c.cloudfront.net/images/el-chingon-dfw-dde-takeover-mockup.png',
    source: 'https://d3pw4l21beyd8c.cloudfront.net/videos/el-chingon-dfw-dde-takeover.mp4',
    aspectRatio: '16:9',
    category: 'media',
    moreInfo: 'Edited Footage',
  },
  {
    id: 7,
    title: 'DJ Jason Weiss Pitbull Recap',
    image:
      'https://d3pw4l21beyd8c.cloudfront.net/images/jason-weiss-pitbull-hard-rock-atlantic-city-mockup.png',
    source:
      'https://d3pw4l21beyd8c.cloudfront.net/videos/jason-weiss-pitbull-hard-rock-atlantic-city.mp4',
    aspectRatio: '16:9',
    category: 'media',
    moreInfo: 'Filmed and Edited',
  },
  {
    id: 8,
    title: 'Night Club Flyer',
    image: 'https://d3pw4l21beyd8c.cloudfront.net/images/nightclub-flyers-mockup.png',
    source: 'https://d3pw4l21beyd8c.cloudfront.net/images/nightclub-flyers-mockup.png',
    category: 'graphics',
    moreInfo: 'Sample of flyer design for Club Twenty3',
  },
  {
    id: 9,
    title: 'Sportsbar Flyer',
    image: 'https://d3pw4l21beyd8c.cloudfront.net/images/sportsbar-flyers-mockup.png',
    source: 'https://d3pw4l21beyd8c.cloudfront.net/images/sportsbar-flyers-mockup.png',
    category: 'graphics',
    moreInfo: 'Sample marketing for a sportsbar',
  },
  {
    id: 10,
    title: 'Animated Flyer',
    image: 'https://d3pw4l21beyd8c.cloudfront.net/images/animated-flyer-mockup.png',
    source: 'https://d3pw4l21beyd8c.cloudfront.net/images/club-twenty3-2021-09-18-dr1ft.gif',
    category: 'graphics',
    moreInfo: 'Sample flyer animation for Club Twenty3',
  },
]
