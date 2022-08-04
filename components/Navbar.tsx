import React from 'react'

const Navbar = () => {
  return (
    <header className='absolute w-full z-20'>
      <nav className='max-w-[1170px] mx-auto px-4 mt-4 flex justify-between items-center text-[#fdfdff]'>
        <div className='flex text-2xl font-bold items-center'>&lt;CL /&gt;</div>
        <ul className='flex gap-4 items-center justify-center'>
          <li>About</li>
          <li>Service</li>
          <li>Portfolio</li>
          <li>Blog</li>
          <li>Contact</li>
        </ul>
        <div>Some Buttons Here</div>
      </nav>
    </header>
  )
}
export default Navbar
