import React, { useEffect, useState } from 'react'
import { PortfolioDataType } from '../../data/portfolioGridData'
import { GoTriangleDown } from 'react-icons/go'
import { MotionValue } from 'framer-motion'

type PropsType = {
  data: PortfolioDataType[]
  setFiltered?: React.Dispatch<React.SetStateAction<PortfolioDataType[]>>
  activeCategory?: number
  setActiveCategory?: React.Dispatch<React.SetStateAction<number>>
}

const Filter = ({ data, setFiltered, activeCategory, setActiveCategory }: PropsType) => {
  const [open, setOpen] = useState(false)
  const [value, setValue] = useState(null)

  useEffect(() => {
    if (activeCategory === 0) {
      setFiltered(data)
      return
    }
    const filtered = data.filter((item) => item.category === activeCategory)
    setFiltered(filtered)
  }, [activeCategory])

  console.log(open)

  return (
    <div className='bg-gray-100 w-full h-20 p-4 rounded-t-lg text-lg flex items-center justify-center shadow-md'>
      {/* dropdown */}
      <div className='sm:hidden relative w-full bg-gray-50 text-gray-400 border border-gray-500 rounded-lg px-8 py-2 z-20'>
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
              setActiveCategory(0)
              setOpen(false)
            }}
            className='px-8 hover:text-gray-600 hover:bg-gray-200'
          >
            All Works
          </div>
          <div
            onClick={() => {
              setValue('Web Development')
              setActiveCategory(1)
              setOpen(false)
            }}
            className='px-8 hover:text-gray-600 hover:bg-gray-200'
          >
            Web Development
          </div>
          <div
            onClick={() => {
              setValue('Graphic Design')
              setActiveCategory(2)
              setOpen(false)
            }}
            className='px-8 hover:text-gray-600 hover:bg-gray-200'
          >
            Graphic Design
          </div>
          <div
            onClick={() => {
              setValue('Multimedia')
              setActiveCategory(3)
              setOpen(false)
            }}
            className='px-8 hover:text-gray-600 hover:bg-gray-200'
          >
            Multimedia
          </div>
        </div>
      </div>

      {/* category list */}
      <div className='hidden sm:flex justify-center items-center gap-8'>
        <button
          className={
            activeCategory === 0
              ? 'border-b-4 border-[#007a3b]'
              : 'hover:border-b-4 hover:border-[#007a3b] transition-all duration-50'
          }
          onClick={() => setActiveCategory(0)}
        >
          All works
        </button>
        <button
          className={
            activeCategory === 1
              ? 'border-b-4 border-[#007a3b]'
              : 'hover:border-b-4 hover:border-[#007a3b] transition-all duration-50'
          }
          onClick={() => setActiveCategory(1)}
        >
          Web Development
        </button>
        <button
          className={
            activeCategory === 2
              ? 'border-b-4 border-[#007a3b]'
              : 'hover:border-b-4 hover:border-[#007a3b] transition-all duration-50'
          }
          onClick={() => setActiveCategory(2)}
        >
          Graphic Design
        </button>
        <button
          className={
            activeCategory === 3
              ? 'border-b-4 border-[#007a3b]'
              : 'hover:border-b-4 hover:border-[#007a3b] transition-all duration-50'
          }
          onClick={() => setActiveCategory(3)}
        >
          Multimedia
        </button>
      </div>
    </div>
  )
}
export default Filter
