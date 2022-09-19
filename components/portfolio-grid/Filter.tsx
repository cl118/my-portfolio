import React, { useEffect, useState } from 'react'
import { PortfolioDataType } from '../../data/portfolioGridData'
import { GoTriangleDown } from 'react-icons/go'
import { MotionValue } from 'framer-motion'

type PropsType = {
  data: PortfolioDataType[]
  setFiltered?: React.Dispatch<React.SetStateAction<PortfolioDataType[]>>
  activeCategory?: string
  setActiveCategory?: React.Dispatch<React.SetStateAction<string>>
}

const Filter = ({ data, setFiltered, activeCategory, setActiveCategory }: PropsType) => {
  const [open, setOpen] = useState(false)
  const [value, setValue] = useState(null)

  useEffect(() => {
    if (activeCategory === 'all') {
      setFiltered(data)
      return
    }
    const filtered = data.filter((item) => item.category === activeCategory)
    setFiltered(filtered)
  }, [activeCategory])

  return (
    <div className='flex items-center justify-center w-full h-20 p-4 text-lg bg-gray-100 rounded-t-lg shadow-md'>
      {/* dropdown */}
      <div className='relative z-20 w-full px-8 py-2 text-gray-400 border border-gray-500 rounded-lg sm:hidden bg-gray-50'>
        <div onClick={() => setOpen((prev) => !prev)}>
          <div className={value ? 'text-gray-600' : null}>
            {value ? value : 'Select Category...'}
          </div>
          <div className='absolute top-3.5 right-2.5'>
            <GoTriangleDown
              className={
                open ? 'rotate-180 transition duration-300' : 'rotate-0 transition duration-300'
              }
            />
          </div>
        </div>
        <div
          className={
            open
              ? 'block w-full absolute top-[100%] left-0 text-gray-600 bg-white border border-gray-500 rounded-lg py-2'
              : 'hidden'
          }
        >
          <div
            onClick={() => {
              setValue('All Works')
              setActiveCategory('all')
              setOpen(false)
            }}
            className='px-8 hover:text-gray-600 hover:bg-gray-200'
          >
            All Works
          </div>
          <div
            onClick={() => {
              setValue('Web Development')
              setActiveCategory('web')
              setOpen(false)
            }}
            className='px-8 hover:text-gray-600 hover:bg-gray-200'
          >
            Web Development
          </div>
          <div
            onClick={() => {
              setValue('Graphic Design')
              setActiveCategory('graphics')
              setOpen(false)
            }}
            className='px-8 hover:text-gray-600 hover:bg-gray-200'
          >
            Graphic Design
          </div>
          <div
            onClick={() => {
              setValue('Multimedia')
              setActiveCategory('media')
              setOpen(false)
            }}
            className='px-8 hover:text-gray-600 hover:bg-gray-200'
          >
            Multimedia
          </div>
        </div>
      </div>

      {/* category list */}
      <div className='items-center justify-center hidden gap-8 sm:flex'>
        <button
          className={
            activeCategory === 'all'
              ? 'border-b-4 border-[#007a3b]'
              : 'hover:border-b-4 hover:border-[#007a3b] transition-all duration-50'
          }
          onClick={() => setActiveCategory('all')}
        >
          All works
        </button>
        <button
          className={
            activeCategory === 'web'
              ? 'border-b-4 border-[#007a3b]'
              : 'hover:border-b-4 hover:border-[#007a3b] transition-all duration-50'
          }
          onClick={() => setActiveCategory('web')}
        >
          Web Development
        </button>
        <button
          className={
            activeCategory === 'graphics'
              ? 'border-b-4 border-[#007a3b]'
              : 'hover:border-b-4 hover:border-[#007a3b] transition-all duration-50'
          }
          onClick={() => setActiveCategory('graphics')}
        >
          Graphic Design
        </button>
        <button
          className={
            activeCategory === 'media'
              ? 'border-b-4 border-[#007a3b]'
              : 'hover:border-b-4 hover:border-[#007a3b] transition-all duration-50'
          }
          onClick={() => setActiveCategory('media')}
        >
          Multimedia
        </button>
      </div>
    </div>
  )
}
export default Filter
