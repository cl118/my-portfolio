import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { AiOutlineMail } from 'react-icons/ai'
import ContactForm from './ContactForm'

const Contact = () => {
  return (
    <div id='contact' className='bg-[#007a3b] rounded-[50px] lg:rounded-[100px] p-4 relative z-10'>
      <div className='bg-[#f7f7f7] rounded-[40px] lg:rounded-[90px]'>
        <div className='w-full max-w-[1170px] mx-auto flex flex-col lg:flex-row py-10 lg:py-0'>
          {/* Left Side */}
          <div className='flex flex-col justify-center w-full pl-4 pr-4 lg:w-1/2 lg:pr-0'>
            <div className='relative w-full lg:max-w-[440px]'>
              <img
                src='./dot-grid-accent.svg'
                alt='/'
                className='absolute top-0 right-0 h-[160px]'
              />
              <h3 className='my-6 text-2xl font-thin leading-none tracking-wider'>CONTACT</h3>
              <h2 className='mb-10 text-5xl font-extrabold tracking-wide'>Get In Touch </h2>
              <p className='mb-8 text-lg font-thin'>
                Thank you for checking out my portfolio! Please send me a message if you have any
                questions. I look forward to hearing from you!
              </p>
            </div>
          </div>
          {/* Right Side */}
          <div className='flex items-center justify-end w-full pl-4 pr-4 lg:w-1/2 lg:my-40 lg:pl-0'>
            <ContactForm />
          </div>
        </div>
      </div>

      <div className='w-full max-w-[1170px] text-[#fdfdff] justify-start md:justify-center lg:justify-start mx-auto flex flex-col lg:flex-row mt-16'>
        {/* Left Side */}
        <div className='flex flex-col justify-center w-full pl-4 pr-4 lg:w-1/2 lg:pr-0'>
          <div className='relative max-w-[440px] mx-auto'>
            <h2 className='mb-4 text-5xl font-extrabold tracking-wide'>Important Links</h2>
            <p className='text-lg font-thin text-left md:text-center lg:text-left'>
              Give my Github a peek and connect with me on LinkedIn. Liked what you saw? Shoot me an
              email and talk further!
            </p>
          </div>
        </div>
        {/* Right Side */}
        <div className='relative flex items-center justify-center w-full pl-4 pr-4 my-12 lg:w-1/2 lg:my-36 lg:pl-0'>
          <div className='relative flex items-center gap-4 z-10 text-[#393d3f]'>
            <div className='h-[110px] w-[110px] lg:h-[128px] lg:w-[128px] bg-[#f9dbb3] rounded-lg flex justify-center items-center shadow-lg'>
              <a href='https://github.com/cl118' target='_blank'>
                <FaGithub className='w-12 h-12 rounded-full hover:text-green-900 active:scale-95' />
              </a>
            </div>
            <div className='h-[110px] w-[110px] lg:h-[128px] lg:w-[128px] bg-[#f9dbb3] rounded-lg flex justify-center items-center shadow-lg'>
              <a href='https://www.linkedin.com/in/cl118' target='_blank'>
                <FaLinkedinIn className='w-12 h-12 hover:text-green-900 active:scale-95' />
              </a>
            </div>
            <div className='h-[110px] w-[110px] lg:h-[128px] lg:w-[128px] bg-[#f9dbb3] rounded-lg flex justify-center items-center shadow-lg'>
              <a href='mailto:christopher.vinh.le@gmail.com'>
                <AiOutlineMail className='w-12 h-12 hover:text-green-900 active:scale-95' />
              </a>
            </div>
          </div>
          <img
            src='./dot-grid.svg'
            alt='/'
            className='absolute -top-4 left-16 md:left-64 lg:left-32 h-[160px]'
          />
        </div>
      </div>
    </div>
  )
}
export default Contact
