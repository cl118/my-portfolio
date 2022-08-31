import { Link } from 'react-scroll'

const Footer = () => {
  return (
    <>
      <div className='w-full bg-[#393d3f] text-[#fdfdff] -mt-24 pt-36 pb-12'>
        <div className='w-full max-w-[1170px] mx-auto'>
          <div className='flex flex-col justify-center px-4 '>
            <Link
              to='hero'
              spy={true}
              smooth={true}
              duration={400}
              offset={-100}
              className='text-2xl font-bold cursor-pointer hover:text-green-900'
            >
              &lt;CL /&gt;
            </Link>
            <p>Christopher Le</p>
            <p>[Full Stack Developer]</p>
          </div>
        </div>
      </div>
      <div className='text-[#fdfdff] bg-[#282828] w-full'>
        <p className='py-4 font-thin text-center opacity-60'>
          © 2022 Christopher Le. All Rights Reserved.
        </p>
      </div>
    </>
  )
}
export default Footer
