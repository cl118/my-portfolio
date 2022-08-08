import React from 'react'
import PortfolioGrid from './portfolio-grid/PortfolioGrid'

const Portfolio = () => {
  return (
    <div id='portfolio' className='w-full max-w-[1170px] mx-auto mb-32'>
      {/* Title */}
      <div className='text-center mt-16'>
        <h3 className='text-2xl font-light leading-none tracking-wider mb-5'>PORTFOLIO</h3>
        <h2 className='text-5xl font-extrabold tracking-wide mb-8'>Featured Works</h2>
      </div>
      {/* Header Image */}
      <div className='mt-14 relative'>
        <img
          src='./dot-grid-accent.svg'
          alt='/'
          className='absolute top-[-35px] right-3 lg:right-[-35px] h-[160px]'
        />
        <img
          src='./portfolio-header.png'
          className='w-full max-w-[1170px] mx-auto max-h-[500px] rounded-lg object-cover relative'
        />
      </div>
      <div className='px-4'>
        <PortfolioGrid />
      </div>
    </div>
  )
}
export default Portfolio
