import React from 'react'
import { solutionsData } from '../data/solutionsData'
import SolutionsCard from './SolutionsCard'
import { motion } from 'framer-motion'

const Solutions = () => {
  return (
    <div id='about' className='w-full max-w-[1170px] mx-auto'>
      {/* Title and description */}
      <div className='flex flex-col pl-4 pr-4 mt-20 sm:flex-row mb-14 lg:pr-0'>
        <div className='w-1/2'>
          <motion.h3
            className='mb-5 text-2xl font-thin leading-none tracking-wider'
            initial={{ x: '-100px', opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ ease: 'easeInOut', duration: 0.7, delay: 0 }}
          >
            MY EXPERTISE
          </motion.h3>
          <motion.h2
            className='w-20 text-5xl font-bold tracking-wide'
            initial={{ x: '-100px', opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ ease: 'easeInOut', duration: 0.7, delay: 0.3 }}
          >
            Innovative Solutions
          </motion.h2>
        </div>
        <motion.p
          className=' sm:w-1/2 lg:max-w-[470px] flex items-end'
          initial={{ y: '10px', opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ ease: 'easeInOut', duration: 0.7, delay: 0.6 }}
        >
          I will utilize my experience in graphics and multimedia editing to create pixel-perfect,
          user-friendly platforms.
        </motion.p>
      </div>
      {/* Cards */}
      <div className='w-full max-w-[1170px] px-4 mx-auto relative flex flex-col lg:flex-row justify-between mb-12 lg:mb-28'>
        <motion.img
          src='./dot-grid-accent.svg'
          alt='/'
          className='absolute top-[-35px] right-[10px] lg:right-[-35px] h-[160px]'
          initial={{ x: '100px', opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ ease: 'easeInOut', duration: 0.7, delay: 0.6 }}
        />
        {solutionsData.map(({ title, icon, text }, index) => (
          <SolutionsCard key={index} title={title} icon={icon} text={text} index={index} />
        ))}
      </div>
    </div>
  )
}
export default Solutions
