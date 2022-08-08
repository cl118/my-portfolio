import {
  SiAbletonlive,
  SiAdobeaftereffects,
  SiAdobephotoshop,
  SiAdobepremierepro,
} from 'react-icons/si'
import SkillsIconGrid from './SkillsIconGrid'

const Skills = () => {
  return (
    <div id='skills' className='bg-[#007a3b] rounded-[50px] lg:rounded-[100px] p-4'>
      <div className='bg-[#f7f7f7] rounded-[40px] lg:rounded-[90px]'>
        <div className='w-full max-w-[1170px] mx-auto flex flex-col lg:flex-row'>
          {/* Top/Left Side */}
          <div className='w-full lg:w-[48%] flex flex-col justify-center px-2 lg:pr-0 lg:pl-4'>
            <div className='relative lg:max-w-[440px] mt-10'>
              <img
                src='./dot-grid-accent.svg'
                alt='/'
                className='absolute top-0 right-0 h-[160px]'
              />
              <h3 className='text-2xl font-thin leading-none tracking-wider mb-5'>MY SKILLS</h3>
              <h2 className='text-5xl font-extrabold tracking-wide mb-8'>
                Beautfiul and unique digital experiences
              </h2>
              <p className='text-lg font-thin mb-8'>
                I strive to write the cleanest functional code utilizing modern libraries and
                frameworks to create user-friendly digital experiences. My preferred tech stack is
                React/Next.js, Tailwind CSS, Node.js, Express and MongoDB.
              </p>
            </div>
          </div>
          {/* Bottom/Right Side */}
          <div className='flex mb-10 lg:my-32 pl-4 lg:pl-0 pr-4'>
            <SkillsIconGrid />
          </div>
        </div>
      </div>
      <div className='hidden mt-24 mb-16 max-w-[1170px] w-full mx-auto lg:flex flex-col lg:flex-row justify-between text-[#fdfdff]'>
        <div className='max-w-[270px] flex flex-col justify-center items-center text-center'>
          <div className='h-[128px] w-[128px] bg-[#f9dbb3] rounded-lg mb-6 flex justify-center items-center text-[#393d3f]'>
            <SiAdobephotoshop className='h-12 w-12' />
          </div>
          <h4 className='text-2xl font-bold mb-5'>Photoshop</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <div className='max-w-[270px] flex flex-col justify-center items-center text-center'>
          <div className='h-[128px] w-[128px] bg-[#f9dbb3] rounded-lg mb-6 flex justify-center items-center text-[#393d3f]'>
            <SiAdobepremierepro className='h-12 w-12' />
          </div>
          <h4 className='text-2xl font-bold mb-5'>Premiere Pro</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <div className='max-w-[270px] flex flex-col justify-center items-center text-center'>
          <div className='h-[128px] w-[128px] bg-[#f9dbb3] rounded-lg mb-6 flex justify-center items-center text-[#393d3f]'>
            <SiAdobeaftereffects className='h-12 w-12' />
          </div>
          <h4 className='text-2xl font-bold mb-5'>After Effects</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <div className='max-w-[270px] flex flex-col justify-center items-center text-center'>
          <div className='h-[128px] w-[128px] bg-[#f9dbb3] rounded-lg mb-6 flex justify-center items-center text-[#393d3f]'>
            <SiAbletonlive className='h-12 w-12' />
          </div>
          <h4 className='text-2xl font-bold mb-5'>Ableton Live</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
      </div>
    </div>
  )
}
export default Skills
