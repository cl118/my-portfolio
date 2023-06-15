import {
  SiCss3,
  SiPostgresql,
  SiFigma,
  SiDocker,
  SiGit,
  SiHtml5,
  SiTypescript,
  SiAmazonaws,
  SiNextdotjs,
  SiNodedotjs,
  SiReact,
  SiTailwindcss,
} from 'react-icons/si'

const SkillsIconGrid = () => {
  const skills = [
    {
      title: 'HTML',
      Icon: SiHtml5,
    },
    {
      title: 'CSS',
      Icon: SiCss3,
    },
    {
      title: 'TypeScript',
      Icon: SiTypescript,
    },
    {
      title: 'React',
      Icon: SiReact,
    },
    {
      title: 'Next.js',
      Icon: SiNextdotjs,
    },
    {
      title: 'Tailwind',
      Icon: SiTailwindcss,
    },
    {
      title: 'Node.js',
      Icon: SiNodedotjs,
    },
    {
      title: 'PostgreSQL',
      Icon: SiPostgresql,
    },
    {
      title: 'AWS',
      Icon: SiAmazonaws,
    },
    {
      title: 'Docker',
      Icon: SiDocker,
    },
    {
      title: 'Git',
      Icon: SiGit,
    },
    {
      title: 'Figma',
      Icon: SiFigma,
    },
  ]

  return (
    <div className='flex flex-wrap items-center justify-center gap-4 lg:gap-6'>
      {skills.map(({ title, Icon }, index) => {
        return (
          <div
            key={index}
            className='h-[75px] w-[75px] sm:h-[100px] sm:w-[100px] lg:h-[130px] lg:w-[130px] flex flex-col bg-white rounded-lg shadow-lg justify-center items-center'
          >
            <Icon className='w-8 h-8 lg:h-12 lg:w-12' />
            <h3 className='text-sm lg:text-base'>{title}</h3>
          </div>
        )
      })}
    </div>
  )
}
export default SkillsIconGrid
