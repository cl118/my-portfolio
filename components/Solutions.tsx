import React from 'react'
import { solutionsData } from '../data/solutionsData'
import SolutionsCard from './SolutionsCard'

const Solutions = () => {
  return (
    <div id='about' className='w-full max-w-[1170px] mx-auto'>
      {/* Title and description */}
      <div className='flex flex-col sm:flex-row mt-20 mb-14 pl-4 pr-4 lg:pr-0'>
        <div className='w-1/2'>
          <h3 className='text-2xl font-thin leading-none tracking-wider mb-5'>MY EXPERTISE</h3>
          <h2 className='text-5xl tracking-wide font-bold w-20'>Innovative Solutions</h2>
        </div>
        <div className=' sm:w-1/2 lg:max-w-[470px] flex items-end'>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae optio odit officia
            deleniti ipsam doloribus rem quam iure, eligendi consequuntur necessitatibus, voluptates
            eveniet perferendis a fuga?
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
