import React from 'react'
import { FaCloudDownloadAlt, FaGithub, FaLinkedin } from 'react-icons/fa'
import { Link } from 'react-scroll'

const Navbar = () => {
  return (
    <header className='sticky top-0 w-full z-20 bg-[#fdfdff] shadow-lg'>
      <nav className='max-w-[1170px] mx-auto px-4 py-2 flex justify-between items-center text-[#007a3b]'>
        <div className='flex text-2xl font-bold items-center'>
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
        <ul className='flex gap-4 items-center justify-center font-semibold'>
          <li>
            <Link
              to='about'
              spy={true}
              smooth={true}
              duration={400}
              offset={-100}
              activeClass='border-b-4 pb-1 text-green-900'
              className='cursor-pointer pb-1 hover:text-green-900 hover:border-b-4 border-green-900'
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
              className='cursor-pointer pb-1 hover:text-green-900 hover:border-b-4 border-green-900'
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
              className='cursor-pointer pb-1 hover:text-green-900 hover:border-b-4 border-green-900'
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
              className='cursor-pointer pb-1 hover:text-green-900 hover:border-b-4 border-green-900'
            >
              Contact
            </Link>
          </li>
        </ul>
        <div className='flex justify-end items-center'>
          <a href='https://github.com/cl118' target='_blank'>
            <FaGithub className='h-7 w-7 text-[#007a3b] hover:text-green-900 shadow-sm hover:shadow-md active:scale-95 cursor-pointer' />
          </a>
          <a href='https://www.linkedin.com/in/cl118' target='_blank'>
            <FaLinkedin className='h-7 w-7 ml-4 text-[#007a3b] hover:text-green-900 shadow-sm hover:shadow-md active:scale-95 cursor-pointer' />
          </a>
          <a
            href='#'
            download
            className='rounded-lg px-2 py-2 border ml-4 flex text-xs items-center text-[#fdfdff] bg-[#007a3b] hover:bg-green-900 shadow-sm hover:shadow-md active:scale-95 cursor-pointer'
          >
            <FaCloudDownloadAlt className='h-4 w-4 mr-2' />
            Resume
          </a>
        </div>
      </nav>
    </header>
  )
}
export default Navbar
