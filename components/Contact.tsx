import ContactForm from './ContactForm'

const Contact = () => {
  return (
    <div id='contact' className='bg-[#007a3b] rounded-[100px] p-4 relative z-10'>
      <div className='bg-[#f7f7f7] rounded-[90px]'>
        <div className='w-full max-w-[1170px] mx-auto flex'>
          {/* Left Side */}
          <div className='w-1/2 flex flex-col justify-center pl-4'>
            <div className='relative max-w-[440px]'>
              <img
                src='./dot-grid-accent.svg'
                alt='/'
                className='absolute top-0 right-0 h-[160px]'
              />
              <h3 className='text-2xl font-thin leading-none tracking-wider my-6'>CONTACT</h3>
              <h2 className='text-5xl font-extrabold tracking-wide mb-10'>Get In Touch </h2>
              <p className='text-lg font-thin mb-8'>
                Thank you for checking out my portfolio! Please drop me a message if you have any
                questions. I look forward to hearing from you!
              </p>
            </div>
          </div>
          {/* Right Side */}
          <div className='w-1/2 flex items-center justify-end my-40 pr-4'>
            <ContactForm />
          </div>
        </div>
      </div>
      <div className='mt-24 mb-16 max-w-[1170px] w-full mx-auto flex justify-between text-[#fdfdff]'>
        <div className='max-w-[270px] flex flex-col justify-center items-center text-center'>
          <div className='h-[128px] w-[128px] bg-[#f9dbb3] rounded-lg mb-6'></div>
          <h4 className='text-2xl font-bold mb-5'>Photoshop</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <div className='max-w-[270px] flex flex-col justify-center items-center text-center'>
          <div className='h-[128px] w-[128px] bg-[#f9dbb3] rounded-lg mb-6'></div>
          <h4 className='text-2xl font-bold mb-5'>Photoshop</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <div className='max-w-[270px] flex flex-col justify-center items-center text-center'>
          <div className='h-[128px] w-[128px] bg-[#f9dbb3] rounded-lg mb-6'></div>
          <h4 className='text-2xl font-bold mb-5'>Photoshop</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <div className='max-w-[270px] flex flex-col justify-center items-center text-center'>
          <div className='h-[128px] w-[128px] bg-[#f9dbb3] rounded-lg mb-6'></div>
          <h4 className='text-2xl font-bold mb-5'>Photoshop</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
      </div>
      {/* Links */}
      <div></div>
    </div>
  )
}
export default Contact
