import React, { useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { HiOutlineMenuAlt2 } from 'react-icons/hi'
import { FaCloudDownloadAlt, FaGithub, FaLinkedin } from 'react-icons/fa'
import { Link } from 'react-scroll'
import MobileNavMenu from './layout/MobileNavMenu'

const Navbar = () => {
  const [nav, setNav] = useState(false)

  const handleNav = () => {
    setNav(!nav)
  }

  return (
    <header className='sticky top-0 w-full z-[100] bg-[#fdfdff] shadow-lg'>
      <nav className='max-w-[1170px] mx-auto px-4 py-2 flex justify-between items-center text-[#007a3b]'>
        <div className='flex items-center text-2xl font-bold'>
          <Link
            to='hero'
            spy={true}
            smooth={true}
            duration={400}
            offset={-100}
            className='cursor-pointer hover:text-green-900'
          >
            &lt;CL /&gt;
          </Link>
        </div>
        <ul className='items-center justify-center hidden gap-4 font-semibold sm:flex'>
          <li>
            <Link
              to='about'
              spy={true}
              smooth={true}
              duration={400}
              offset={-100}
              activeClass='border-b-4 pb-1 text-green-900'
              className='pb-1 border-green-900 cursor-pointer hover:text-green-900 hover:border-b-4'
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to='skills'
              spy={true}
              smooth={true}
              duration={400}
              offset={-100}
              activeClass='border-b-4 pb-1 text-green-900'
              className='pb-1 border-green-900 cursor-pointer hover:text-green-900 hover:border-b-4'
            >
              Skills
            </Link>
          </li>
          <li>
            <Link
              to='portfolio'
              spy={true}
              smooth={true}
              duration={400}
              offset={-100}
              activeClass='border-b-4 pb-1 text-green-900'
              className='pb-1 border-green-900 cursor-pointer hover:text-green-900 hover:border-b-4'
            >
              Portfolio
            </Link>
          </li>
          <li>
            <Link
              to='contact'
              spy={true}
              smooth={true}
              duration={400}
              offset={-100}
              activeClass='border-b-4 pb-1 text-green-900'
              className='pb-1 border-green-900 cursor-pointer hover:text-green-900 hover:border-b-4'
            >
              Contact
            </Link>
          </li>
        </ul>
        <div className='items-center justify-end hidden sm:flex'>
          <a href='https://github.com/cl118' target='_blank'>
            <FaGithub className='h-7 w-7 text-[#007a3b] hover:text-green-900 shadow-sm hover:shadow-md active:scale-95 cursor-pointer rounded-full' />
          </a>
          <a href='https://www.linkedin.com/in/cl118' target='_blank'>
            <FaLinkedin className='h-7 w-7 ml-4 text-[#007a3b] hover:text-green-900 shadow-sm hover:shadow-md active:scale-95 cursor-pointer' />
          </a>
          <a
            href='https://d3pw4l21beyd8c.cloudfront.net/christopher-le-resume.pdf'
            target='_blank'
            className='rounded-lg px-2 py-2 border ml-4 flex text-xs items-center text-[#fdfdff] bg-[#007a3b] hover:bg-green-900 shadow-sm hover:shadow-md active:scale-95 cursor-pointer'
          >
            <FaCloudDownloadAlt className='w-4 h-4 mr-2' />
            Resume
          </a>
        </div>

        {/* Hamburger Menu */}
        <div onClick={handleNav} className='block sm:hidden cursor-pointer z-[100]'>
          {nav ? <AiOutlineClose size={30} /> : <HiOutlineMenuAlt2 size={20} />}
        </div>
        <MobileNavMenu nav={nav} handleNav={handleNav} />
      </nav>
    </header>
  )
}
export default Navbar
