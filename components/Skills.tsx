import {
  SiAbletonlive,
  SiAdobeaftereffects,
  SiAdobephotoshop,
  SiAdobepremierepro,
} from 'react-icons/si'
import SkillsIconGrid from './SkillsIconGrid'
import { motion } from 'framer-motion'

const Skills = () => {
  return (
    <div id='skills' className='bg-[#007a3b] rounded-[50px] lg:rounded-[100px] p-4'>
      <div className='bg-[#f7f7f7] rounded-[40px] lg:rounded-[90px]'>
        <div className='w-full max-w-[1170px] mx-auto flex flex-col lg:flex-row'>
          {/* Top/Left Side */}
          <div className='w-full lg:w-[48%] flex flex-col justify-center px-2 lg:pr-0 lg:pl-4'>
            <div className='relative lg:max-w-[440px] mt-10'>
              <motion.img
                src='./dot-grid-accent.svg'
                alt='/'
                className='absolute top-0 right-0 h-[160px]'
                initial={{ x: '-100px', opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ ease: 'easeInOut', duration: 0.7, delay: 0 }}
              />
              <motion.h3
                className='mb-5 text-2xl font-thin leading-none tracking-wider'
                initial={{ x: '-100px', opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ ease: 'easeInOut', duration: 0.7, delay: 0.3 }}
              >
                MY SKILLS
              </motion.h3>
              <motion.h2
                className='mb-8 text-5xl font-extrabold tracking-wide'
                initial={{ x: '-100px', opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ ease: 'easeInOut', duration: 0.7, delay: 0.6 }}
              >
                Beautfiul and unique digital experiences
              </motion.h2>
              <motion.p
                className='mb-8 text-lg font-thin'
                initial={{ x: '-100px', opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ ease: 'easeInOut', duration: 0.7, delay: 0.9 }}
              >
                I strive to write the cleanest functional code utilizing modern libraries and
                frameworks to create user-friendly digital experiences. My preferred tech stack is
                React/Next.js, Tailwind CSS, Node.js, Express and MongoDB, but able to learn and
                adapt quickly to new environments.
              </motion.p>
            </div>
          </div>
          {/* Bottom/Right Side */}
          <div className='flex lg:w-[52%] mb-10 lg:my-32 pl-4 lg:pl-0 pr-4'>
            <SkillsIconGrid />
          </div>
        </div>
      </div>
      <h2 className='hidden pt-12 text-4xl font-semibold text-center text-white lg:block'>
        Design and Editing Tools
      </h2>
      <div className='hidden mt-12 mb-16 max-w-[750px] w-full mx-auto lg:flex flex-col lg:flex-row justify-around text-[#fdfdff]'>
        <div className='max-w-[250px] flex flex-col justify-center items-center text-center'>
          <div className='h-[90px] w-[90px] bg-[#f9dbb3] rounded-lg mb-6 flex justify-center items-center text-[#393d3f]'>
            <SiAdobephotoshop className='w-12 h-12' />
          </div>
          <h4 className='mb-5 text-lg'>Photoshop</h4>
        </div>
        <div className='max-w-[250px] flex flex-col justify-center items-center text-center'>
          <div className='h-[90px] w-[90px] bg-[#f9dbb3] rounded-lg mb-6 flex justify-center items-center text-[#393d3f]'>
            <SiAdobepremierepro className='w-12 h-12' />
          </div>
          <h4 className='mb-5 text-lg'>Premiere Pro</h4>
        </div>
        <div className='max-w-[250px] flex flex-col justify-center items-center text-center'>
          <div className='h-[90px] w-[90px] bg-[#f9dbb3] rounded-lg mb-6 flex justify-center items-center text-[#393d3f]'>
            <SiAdobeaftereffects className='w-12 h-12' />
          </div>
          <h4 className='mb-5 text-lg'>After Effects</h4>
        </div>
        <div className='max-w-[250px] flex flex-col justify-center items-center text-center'>
          <div className='h-[90px] w-[90px] bg-[#f9dbb3] rounded-lg mb-6 flex justify-center items-center text-[#393d3f]'>
            <SiAbletonlive className='w-12 h-12' />
          </div>
          <h4 className='mb-5 text-lg'>Ableton Live</h4>
        </div>
      </div>
    </div>
  )
}
export default Skills
