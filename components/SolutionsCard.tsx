import { FaCode } from 'react-icons/fa'
import { ImVideoCamera } from 'react-icons/im'
import { MdOutlinePalette } from 'react-icons/md'

const SolutionsCard = ({ title, icon, text, index }) => {
  return (
    <div
      key={index}
      className='bg-[#f0f0f0] rounded-lg lg:max-w-[320px] xl:max-w-[370px] mb-4 lg:mb-0 relavtive z-10'
    >
      <div className='p-12 flex flex-col sm:flex-row lg:flex-col'>
        <div className='sm:flex-grow lg:flex-grow-0 flex sm:justify-center sm:items-center lg:justify-start lg:items-start'>
          <div className='h-[112px] w-[112px] bg-[#f9dbb3] rounded-lg mb-12 sm:mb-0 lg:mb-24 flex justify-center items-center'>
            {icon === 'FaCode' ? (
              <FaCode className='w-12 h-12' />
            ) : icon === 'MdOutlinePalette' ? (
              <MdOutlinePalette className='w-12 h-12' />
            ) : (
              <ImVideoCamera className='h-12 w-12' />
            )}
          </div>
        </div>
        <div className='w-full sm:w-2/3 lg:w-full flex flex-col'>
          <h3 className='text-3xl lg:text-4xl xl:text-5xl font-bold lg:mb-5'>{title}</h3>
          <p className='text-lg font-light'>{text}</p>
        </div>
      </div>
    </div>
  )
}
export default SolutionsCard
