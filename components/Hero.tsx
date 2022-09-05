import React from 'react'
import { HiChevronDoubleDown } from 'react-icons/hi'
import { FaCloudDownloadAlt } from 'react-icons/fa'
import { Link } from 'react-scroll'

const Hero = () => {
  return (
    <div id='hero' className='relative bg-[#007a3b] pt-10 rounded-b-[50px] lg:rounded-b-[100px]'>
      <div className='h-full w-full max-w-[1170px] px-2 sm:px-4 mx-auto text-[#fdfdff] flex flex-col sm:flex-row'>
        {/* Hero Left */}
        <div className='w-full sm:w-[50%] lg:w-[46%] flex flex-col justify-center mb-6 sm:mb-10 lg:my-40'>
          <div className='relative w-full lg:max-w-[440px] overflow-hidden'>
            <img
              src='./dot-grid.svg'
              alt='/'
              className='absolute top-0 -right-[105px] sm:right-0 max-h-[160px] opacity-80'
            />
            <h3 className='mb-10 text-2xl font-thin leading-none tracking-wider sm:mb-6 lg:mb-5'>
              PORTFOLIO
            </h3>
            <h2 className='z-10 text-5xl font-extrabold tracking-wider sm:text-6xl lg:text-7xl'>
              Hello, I'm
            </h2>
            <h2 className='z-10 mb-8 text-5xl font-extrabold tracking-wider sm:text-6xl lg:text-7xl'>
              Chris Le
            </h2>
            <p className='mb-8 text-xl font-thin'>
              I am a full stack developer with an extensive background in music production, graphic
              design, and multimedia editing with a passion for creating the best interactive user
              experience.
            </p>
          </div>
          <div className='flex justify-center md:justify-start'>
            <Link
              to='about'
              spy={true}
              smooth={true}
              duration={400}
              offset={-100}
              className='rounded-lg px-8 sm:px-6 lg:px-12 py-2 border border-[#F9DBB3] bg-[#F9DBB3] hover:bg-orange-300 hover:border-orange-300 active:scale-95 text-[#393d3f] transition-all duration-100 cursor-pointer'
            >
              Learn More
            </Link>
            <a
              href='/christopher-le-resume.pdf'
              target='_blank'
              className='rounded-lg px-8 sm:px-6 lg:px-12 py-2 border ml-8 flex hover:bg-[#fdfdff] hover:border-[#fdfdff] hover:text-[#007a3b] active:scale-95 cursor-pointer'
            >
              <FaCloudDownloadAlt className='w-6 h-6 mr-2' />
              Resume
            </a>
          </div>
        </div>
        {/* Hero Right */}
        <div className='flex justify-center flex-grow sm:relative'>
          <img
            src='./chris-avatar.svg'
            alt='avatar of Chris'
            className='lg:w-full max-h-[550px] sm:min-h-[450px] sm:max-h-[500px] lg:max-h-[650px] pr-4 sm:absolute sm:bottom-0 align-bottom object-cover'
          />
        </div>
      </div>

      {/* Scroll Down Icon */}
      <div className='hidden sm:absolute left-[50%] translate-x-[-50%] bottom-6 h-9 w-9 text-[#fdfdff] p-2 border border-white rounded-full lg:flex items-center justify-center hover:bg-[#fdfdff] hover:border-[#fdfdff] hover:text-[#007a3b] active:scale-95 cursor-pointer'>
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
