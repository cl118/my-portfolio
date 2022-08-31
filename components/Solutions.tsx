import React from 'react'
import { solutionsData } from '../data/solutionsData'
import SolutionsCard from './SolutionsCard'

const Solutions = () => {
  return (
    <div id='about' className='w-full max-w-[1170px] mx-auto'>
      {/* Title and description */}
      <div className='flex flex-col pl-4 pr-4 mt-20 sm:flex-row mb-14 lg:pr-0'>
        <div className='w-1/2'>
          <h3 className='mb-5 text-2xl font-thin leading-none tracking-wider'>MY EXPERTISE</h3>
          <h2 className='w-20 text-5xl font-bold tracking-wide'>Innovative Solutions</h2>
        </div>
        <div className=' sm:w-1/2 lg:max-w-[470px] flex items-end'>
          <p>
            I will utilize my experience in graphics and multimedia editing to create pixel-perfect,
            user-friendly platforms.
          </p>
        </div>
      </div>
      {/* Cards */}
      <div className='w-full max-w-[1170px] px-4 mx-auto relative flex flex-col lg:flex-row justify-between mb-12 lg:mb-28'>
        <img
          src='./dot-grid-accent.svg'
          alt='/'
          className='absolute top-[-35px] right-[10px] lg:right-[-35px] h-[160px]'
        />
        {solutionsData.map(({ title, icon, text }, index) => (
          <SolutionsCard key={index} title={title} icon={icon} text={text} index={index} />
        ))}
      </div>
    </div>
  )
}
export default Solutions
