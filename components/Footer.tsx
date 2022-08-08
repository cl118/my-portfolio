import { Link } from 'react-scroll'

const Footer = () => {
  return (
    <>
      <div className='w-full bg-[#393d3f] text-[#fdfdff] -mt-24 pt-44 pb-20'>
        <div className='w-full max-w-[1170px] mx-auto'>
          <div className='px-4 flex text-2xl font-bold items-center'>
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
        </div>
      </div>
      <div className='text-[#fdfdff] bg-[#282828] w-full'>
        <p className='opacity-60 py-4 text-center font-thin'>
          © 2022 Christopher Le. All Rights Reserved.
        </p>
      </div>
    </>
  )
}
export default Footer
