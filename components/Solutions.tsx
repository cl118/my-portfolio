import React from 'react'

const Solutions = () => {
  return (
    <div className='w-full max-w-[1170px] mx-auto'>
      {/* Title and description */}
      <div className='flex flex-row mt-20 mb-14'>
        <div className='w-1/2'>
          <h3 className='text-2xl font-thin leading-none tracking-wider mb-5'>MY EXPERTISE</h3>
          <h2 className='text-5xl tracking-wide font-bold w-20'>Innovative Solutions</h2>
        </div>
        <div className='max-w-[470px] flex items-end'>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae optio odit officia
            deleniti ipsam doloribus rem quam iure, eligendi consequuntur necessitatibus, voluptates
            eveniet perferendis a fuga?
          </p>
        </div>
      </div>
      {/* Cards */}
      <div className='w-full max-w-[1170px] mx-auto relative flex justify-between mb-28'>
        <img
          src='./dot-grid-accent.svg'
          alt='/'
          className='absolute top-[-35px] right-[-35px] h-[160px]'
        />
        <div className='bg-[#f0f0f0] rounded-lg max-w-[370px]'>
          <div className='p-12 flex flex-col'>
            <div className='h-[112px] w-[112px] bg-[#f9dbb3] rounded-lg mb-24'></div>
            <h3 className='text-5xl font-bold mb-5'>Graphics</h3>
            <p className='text-lg font-light'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, vel perspiciatis error
              accusamus rem alias modi.
            </p>
          </div>
        </div>
        <div className='bg-[#f0f0f0] rounded-lg max-w-[370px]'>
          <div className='p-12 flex flex-col'>
            <div className='h-[112px] w-[112px] bg-[#f9dbb3] rounded-lg mb-24'></div>
            <h3 className='text-5xl font-bold mb-5'>Development</h3>
            <p className='text-lg font-light'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, vel perspiciatis error
              accusamus rem alias modi.
            </p>
          </div>
        </div>
        <div className='bg-[#f0f0f0] rounded-lg max-w-[370px] z-10'>
          <div className='p-12 flex flex-col'>
            <div className='h-[112px] w-[112px] bg-[#f9dbb3] rounded-lg mb-24'></div>
            <h3 className='text-5xl font-bold mb-5'>Multimedia</h3>
            <p className='text-lg font-light'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, vel perspiciatis error
              accusamus rem alias modi.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Solutions
