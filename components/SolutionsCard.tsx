import { FaCode } from 'react-icons/fa'
import { ImVideoCamera } from 'react-icons/im'
import { MdOutlinePalette } from 'react-icons/md'
import { motion } from 'framer-motion'

const SolutionsCard = ({ title, icon, text, index }) => {
  return (
    <motion.div
      key={index}
      className='bg-[#f0f0f0] rounded-lg lg:max-w-[320px] xl:max-w-[370px] mb-4 lg:mb-0 relavtive z-10'
      initial={{ y: '20px', opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ ease: 'easeInOut', duration: 0.7, delay: 0.9 }}
    >
      <div className='flex flex-col p-12 sm:flex-row lg:flex-col'>
        <div className='flex sm:flex-grow lg:flex-grow-0 sm:justify-center sm:items-center lg:justify-start lg:items-start'>
          <motion.div
            className='h-[112px] w-[112px] bg-[#f9dbb3] rounded-lg mb-12 sm:mb-0 lg:mb-24 flex justify-center items-center'
            initial={{ y: '20px', opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ ease: 'easeInOut', duration: 0.7, delay: 0.9 }}
          >
            {icon === 'FaCode' ? (
              <FaCode className='w-12 h-12' />
            ) : icon === 'MdOutlinePalette' ? (
              <MdOutlinePalette className='w-12 h-12' />
            ) : (
              <ImVideoCamera className='w-12 h-12' />
            )}
          </motion.div>
        </div>
        <div className='flex flex-col w-full sm:w-2/3 lg:w-full'>
          <motion.h3
            className='text-2xl font-bold lg:text-3xl xl:text-4xl lg:mb-5'
            initial={{ y: '20px', opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ ease: 'easeInOut', duration: 0.7, delay: 0.9 }}
          >
            {title}
          </motion.h3>
          <motion.p
            className='text-lg font-light'
            initial={{ y: '20px', opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ ease: 'easeInOut', duration: 0.7, delay: 1.2 }}
          >
            {text}
          </motion.p>
        </div>
      </div>
    </motion.div>
  )
}
export default SolutionsCard
