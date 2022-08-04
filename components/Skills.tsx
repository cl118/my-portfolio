const Skills = () => {
  return (
    <div className='bg-[#007a3b] rounded-[100px] p-4'>
      <div className='bg-[#f7f7f7] rounded-[85px]'>
        <div className='w-full max-w-[1170px] mx-auto flex'>
          {/* Left Side */}
          <div className='w-[48%] flex flex-col justify-center'>
            <div className='relative max-w-[440px]'>
              <img
                src='./dot-grid-accent.svg'
                alt='/'
                className='absolute top-0 right-0 h-[160px]'
              />
              <h3 className='text-2xl font-thin leading-none tracking-wider mb-5'>MY SKILLS</h3>
              <h2 className='text-5xl font-extrabold tracking-wide mb-8'>
                Beautfiul and unique digital experiences
              </h2>
              <p className='text-lg font-thin mb-8'>
                I am a full stack developer with an extensive background in music production,
                graphic design, and multimedia editing with a passion for creating the best
                interactive user experience.
              </p>
            </div>
            <div>
              <button className='rounded-lg px-12 py-2 border border-[#F9DBB3] bg-[#F9DBB3] text-[#393d3f]'>
                About
              </button>
              <button className='rounded-lg px-12 py-2 border ml-8'>Resume</button>
            </div>
          </div>
          {/* Right Side */}
          <div className='flex flex-col gap-8 my-32'>
            <div className='flex gap-8'>
              <div className='h-[135px] w-[135px] bg-gray-400'></div>
              <div className='h-[135px] w-[135px] bg-gray-400'></div>
              <div className='h-[135px] w-[135px] bg-gray-400'></div>
              <div className='h-[135px] w-[135px] bg-gray-400'></div>
            </div>
            <div className='flex gap-8'>
              <div className='h-[135px] w-[135px] bg-gray-400'></div>
              <div className='h-[135px] w-[135px] bg-gray-400'></div>
              <div className='h-[135px] w-[135px] bg-gray-400'></div>
              <div className='h-[135px] w-[135px] bg-gray-400'></div>
            </div>
            <div className='flex gap-8'>
              <div className='h-[135px] w-[135px] bg-gray-400'></div>
              <div className='h-[135px] w-[135px] bg-gray-400'></div>
              <div className='h-[135px] w-[135px] bg-gray-400'></div>
              <div className='h-[135px] w-[135px] bg-gray-400'></div>
            </div>
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
    </div>
  )
}
export default Skills
