import React from 'react'
import { HiChevronDoubleDown } from 'react-icons/hi'

const Hero = () => {
  return (
    <div className='relative bg-[#007a3b] pt-16 rounded-b-[100px]'>
      <div className='w-full max-w-[1170px] px-4 mx-auto text-[#fdfdff] flex'>
        {/* Hero Left */}
        <div className='w-[48%] flex flex-col justify-center my-40'>
          <div className='relative max-w-[440px]'>
            <img
              src='./dot-grid.svg'
              alt='/'
              className='absolute top-0 right-0 h-[160px] opacity-80'
            />
            <h3 className='text-2xl font-thin leading-none tracking-wider mb-5'>PORTFOLIO</h3>
            <h2 className='text-7xl font-extrabold tracking-wider z-10'>Hello, I'm</h2>
            <h2 className='text-7xl font-extrabold tracking-wider mb-8 z-10'>Chris Le</h2>
            <p className='text-xl font-thin mb-8'>
              I am a full stack developer with an extensive background in music production, graphic
              design, and multimedia editing with a passion for creating the best interactive user
              experience.
            </p>
          </div>
          <div>
            <button className='rounded-lg px-12 py-2 border border-[#F9DBB3] bg-[#F9DBB3] text-[#393d3f]'>
              Learn More
            </button>
            <button className='rounded-lg px-12 py-2 border ml-8'>Resume</button>
          </div>
        </div>
        {/* Hero Right */}
        <div className='flex-grow relative'>
          <img
            src='./chris-avatar.svg'
            alt='avatar of Chris'
            className='h-[620px] absolute bottom-0 align-bottom'
          />
        </div>
      </div>
      <div className='absolute left-[50%] translate-x-[-50%] bottom-6 h-9 w-9 text-[#fdfdff] p-2 border border-white rounded-full flex items-center justify-center'>
        <HiChevronDoubleDown className='w-full h-full' />
      </div>
    </div>
  )
}
export default Hero
