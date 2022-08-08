import {
  SiCss3,
  SiExpress,
  SiFigma,
  SiFirebase,
  SiGit,
  SiHtml5,
  SiJavascript,
  SiMongodb,
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
      title: 'Javascript',
      Icon: SiJavascript,
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
      title: 'Express.js',
      Icon: SiExpress,
    },
    {
      title: 'MongoDB',
      Icon: SiMongodb,
    },
    {
      title: 'Firebase',
      Icon: SiFirebase,
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
    <div className='flex gap-4 lg:gap-6 flex-wrap justify-center items-center'>
      {skills.map(({ title, Icon }, index) => {
        return (
          <div
            key={index}
            className='h-[75px] w-[75px] sm:h-[100px] sm:w-[100px] lg:h-[130px] lg:w-[130px] flex flex-col bg-white rounded-lg shadow-lg justify-center items-center'
          >
            <Icon className='h-8 w-8 lg:h-12 lg:w-12' />
            <h3 className='text-sm lg:text-base'>{title}</h3>
          </div>
        )
      })}
    </div>
  )
}
export default SkillsIconGrid
