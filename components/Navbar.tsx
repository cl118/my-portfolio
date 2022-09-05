import React, { useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { HiOutlineMenuAlt2 } from 'react-icons/hi'
import { FaCloudDownloadAlt, FaGithub, FaLinkedin } from 'react-icons/fa'
import { Link } from 'react-scroll'

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
            href='/christopher-le-resume.pdf'
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

        <div
          className={
            nav
              ? 'sm:hidden absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-center items-center w-full h-screen bg-[#fdfdff] text-[#007a3b] text-center ease-in duration-300 z-50'
              : 'sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex flex-col justify-center items-center w-full h-screen bg-[#fdfdff] text-[#007a3b] text-center ease-in duration-300 z-50'
          }
        >
          <ul>
            <li className='p-4 text-4xl cursor-pointer hover:text-gray-500'>
              <Link
                to='hero'
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                onClick={handleNav}
              >
                Home
              </Link>
            </li>
            <li className='p-4 text-4xl cursor-pointer hover:text-gray-500'>
              <Link
                to='about'
                spy={true}
                smooth={true}
                offset={-120}
                duration={500}
                onClick={handleNav}
              >
                About
              </Link>
            </li>
            <li className='p-4 text-4xl cursor-pointer hover:text-gray-500'>
              <Link
                to='skills'
                spy={true}
                smooth={true}
                offset={-60}
                duration={500}
                onClick={handleNav}
              >
                Skills
              </Link>
            </li>
            <li className='p-4 text-4xl cursor-pointer hover:text-gray-500'>
              <Link
                to='portfolio'
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                onClick={handleNav}
              >
                Portfolio
              </Link>
            </li>
            <li className='p-4 text-4xl cursor-pointer hover:text-gray-500'>
              <Link
                to='contact'
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
                onClick={handleNav}
              >
                Contact
              </Link>
            </li>
          </ul>
          <div className='flex flex-col items-center justify-center mt-16'>
            <div className='flex gap-8 mb-4'>
              <a href='https://github.com/cl118' target='_blank'>
                <FaGithub size={32} className='rounded-full cursor-pointer active:scale-95' />
              </a>
              <a href='https://www.linkedin.com/in/cl118' target='_blank'>
                <FaLinkedin size={32} className='cursor-pointer active:scale-95' />
              </a>
            </div>
            <a
              href='/christopher-le-resume.pdf'
              target='_blank'
              className='rounded-lg px-4 py-1 border flex text-xl items-center text-[#fdfdff] bg-[#007a3b] hover:bg-green-900 shadow-sm hover:shadow-md active:scale-95 cursor-pointer'
            >
              <FaCloudDownloadAlt size={30} className='mr-2' />
              Resume
            </a>
          </div>
        </div>
      </nav>
    </header>
  )
}
export default Navbar
