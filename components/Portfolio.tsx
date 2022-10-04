import React from 'react'
import PortfolioGrid from './portfolio-grid/PortfolioGrid'

const Portfolio = () => {
  return (
    <div id='portfolio' className='w-full max-w-[1170px] mx-auto mb-32'>
      {/* Title */}
      <div className='mt-16 text-center'>
        <h3 className='mb-5 text-2xl font-light leading-none tracking-wider'>PORTFOLIO</h3>
        <h2 className='mb-8 text-5xl font-extrabold tracking-wide'>Featured Works</h2>
      </div>
      {/* Header Image */}
      <div className='relative mt-14'>
        <img
          src='./dot-grid-accent.svg'
          alt='/'
          className='absolute top-[-35px] right-3 lg:right-[-35px] h-[160px]'
        />
        <img
          src='https://d3pw4l21beyd8c.cloudfront.net/images/portfolio-header.png'
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
