import React from 'react'
import { HiChevronDoubleDown } from 'react-icons/hi'
import { FaCloudDownloadAlt } from 'react-icons/fa'
import { Link } from 'react-scroll'

const Hero = () => {
  return (
    <div id='hero' className='relative bg-[#007a3b] pt-10 rounded-b-[100px]'>
      <div className='h-full w-full max-w-[1170px] px-4 mx-auto text-[#fdfdff] flex'>
        {/* Hero Left */}
        <div className='w-[46%] flex flex-col justify-center my-40'>
          <div className='relative max-w-[440px]'>
            <img
              src='./dot-grid.svg'
              alt='/'
              className='absolute top-0 right-0 max-h-[160px] opacity-80'
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
          <div className='flex'>
            <Link
              to='about'
              spy={true}
              smooth={true}
              duration={400}
              offset={-100}
              className='rounded-lg px-12 py-2 border border-[#F9DBB3] bg-[#F9DBB3] hover:bg-orange-300 hover:border-orange-300 active:scale-95 text-[#393d3f] transition-all duration-100 cursor-pointer'
            >
              Learn More
            </Link>
            <button className='rounded-lg px-12 py-2 border ml-8 flex hover:bg-[#fdfdff] hover:border-[#fdfdff] hover:text-[#007a3b] active:scale-95 cursor-pointer'>
              <FaCloudDownloadAlt className='h-6 w-6 mr-2' />
              Resume
            </button>
          </div>
        </div>
        {/* Hero Right */}
        <div className='flex-grow relative'>
          <img
            src='./chris-avatar.svg'
            alt='avatar of Chris'
            className='w-full max-h-[650px] pr-4 absolute bottom-0 align-bottom object-cover'
          />
        </div>
      </div>
      <div className='absolute left-[50%] translate-x-[-50%] bottom-6 h-9 w-9 text-[#fdfdff] p-2 border border-white rounded-full flex items-center justify-center hover:bg-[#fdfdff] hover:border-[#fdfdff] hover:text-[#007a3b] active:scale-95 cursor-pointer'>
        <Link
          to='about'
          spy={true}
          smooth={true}
          duration={400}
          offset={-100}
          className='cursor-pointer'
        >
          <HiChevronDoubleDown className='w-full h-full' />
        </Link>
      </div>
    </div>
  )
}
export default Hero
