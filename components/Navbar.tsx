import React, { useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { HiOutlineMenuAlt2 } from 'react-icons/hi'
import { FaCloudDownloadAlt, FaGithub, FaLinkedin } from 'react-icons/fa'
import { Link } from 'react-scroll'
import MobileNavMenu from './layout/MobileNavMenu'
import { motion } from 'framer-motion'

const Navbar = () => {
  const [nav, setNav] = useState(false)

  const handleNav = () => {
    setNav(!nav)
  }

  const parent = {
    hidden: { y: '-8px', opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        ease: 'easeInOut',
        duration: 0.5,
        // type: 'spring',
        // damping: 10,
        // mass: 0.4,
        staggerChildren: 0.3,
      },
    },
  }

  const item = {
    hidden: { y: '-8px', opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        ease: 'easeInOut',
        duration: 0.5,
        // type: 'spring',
        // damping: 10,
        // mass: 0.4,
      },
    },
  }

  return (
    <header className='sticky top-0 w-full z-[100] bg-[#fdfdff] shadow-lg'>
      <nav className='max-w-[1170px] mx-auto px-4 py-2 flex justify-between items-center text-[#007a3b]'>
        <motion.div
          className='flex items-center text-2xl font-bold'
          initial={{ y: '-8px', opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ ease: 'easeInOut', duration: 0.5 }}
        >
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
        </motion.div>
        <motion.ul
          className='items-center justify-center hidden gap-4 font-semibold sm:flex'
          variants={parent}
          initial='hidden'
          animate='show'
        >
          <motion.li
            initial={{ y: '-8px', opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ ease: 'easeInOut', duration: 0.5, delay: 0.2 }}
          >
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
          </motion.li>
          <motion.li
            initial={{ y: '-8px', opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ ease: 'easeInOut', duration: 0.5, delay: 0.3 }}
          >
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
          </motion.li>
          <motion.li
            initial={{ y: '-8px', opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ ease: 'easeInOut', duration: 0.5, delay: 0.4 }}
          >
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
          </motion.li>
          <motion.li
            initial={{ y: '-8px', opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ ease: 'easeInOut', duration: 0.5, delay: 0.5 }}
          >
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
          </motion.li>
        </motion.ul>
        <div className='items-center justify-end hidden sm:flex'>
          <motion.a
            href='https://github.com/cl118'
            target='_blank'
            initial={{ y: '-8px', opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ ease: 'easeInOut', duration: 0.5, delay: 0.6 }}
          >
            <FaGithub className='h-7 w-7 text-[#007a3b] hover:text-green-900 shadow-sm hover:shadow-md active:scale-95 cursor-pointer rounded-full' />
          </motion.a>
          <motion.a
            href='https://www.linkedin.com/in/cl118'
            target='_blank'
            initial={{ y: '-8px', opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ ease: 'easeInOut', duration: 0.5, delay: 0.7 }}
          >
            <FaLinkedin className='h-7 w-7 ml-4 text-[#007a3b] hover:text-green-900 shadow-sm hover:shadow-md active:scale-95 cursor-pointer' />
          </motion.a>
          <motion.a
            href='https://d3pw4l21beyd8c.cloudfront.net/christopher-le-resume.pdf'
            target='_blank'
            className='rounded-lg px-2 py-2 border ml-4 flex text-xs items-center text-[#fdfdff] bg-[#007a3b] hover:bg-green-900 shadow-sm hover:shadow-md active:scale-95 cursor-pointer'
            initial={{ y: '-8px', opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ ease: 'easeInOut', duration: 0.5, delay: 0.8 }}
          >
            <FaCloudDownloadAlt className='w-4 h-4 mr-2' />
            Resume
          </motion.a>
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
