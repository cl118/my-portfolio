import { Link } from 'react-scroll'
import React from 'react'
import { FaCloudDownloadAlt, FaGithub, FaLinkedin } from 'react-icons/fa'

interface Props {
  nav: boolean
  handleNav: () => void
}

const MobileNavMenu = ({ nav, handleNav }: Props) => {
  return (
    <div
      className={
        nav
          ? 'sm:hidden absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-center items-center w-full h-screen bg-[#fdfdff] text-[#007a3b] text-center ease-in duration-300 z-50'
          : 'sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex flex-col justify-center items-center w-full h-screen bg-[#fdfdff] text-[#007a3b] text-center ease-in duration-300 z-50'
      }
    >
      <ul>
        <li className='p-4 text-4xl cursor-pointer hover:text-gray-500'>
          <Link to='hero' spy={true} smooth={true} offset={-100} duration={500} onClick={handleNav}>
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
          <Link to='contact' spy={true} smooth={true} offset={0} duration={500} onClick={handleNav}>
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
          href='https://d3pw4l21beyd8c.cloudfront.net/christopher-le-resume.pdf'
          target='_blank'
          className='rounded-lg px-4 py-1 border flex text-xl items-center text-[#fdfdff] bg-[#007a3b] hover:bg-green-900 shadow-sm hover:shadow-md active:scale-95 cursor-pointer'
        >
          <FaCloudDownloadAlt size={30} className='mr-2' />
          Resume
        </a>
      </div>
    </div>
  )
}

export default MobileNavMenu
