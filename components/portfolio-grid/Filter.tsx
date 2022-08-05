import React, { useEffect } from 'react'
import { PortfolioDataType } from '../../data/portfolioGridData'

type PropsType = {
  data: PortfolioDataType[]
  setFiltered?: React.Dispatch<React.SetStateAction<PortfolioDataType[]>>
  activeCategory?: number
  setActiveCategory?: React.Dispatch<React.SetStateAction<number>>
}

const Filter = ({ data, setFiltered, activeCategory, setActiveCategory }: PropsType) => {
  useEffect(() => {
    if (activeCategory === 0) {
      setFiltered(data)
      return
    }
    const filtered = data.filter((item) => item.category === activeCategory)
    setFiltered(filtered)
  }, [activeCategory])

  return (
    <div className='bg-gray-100 w-full h-20 rounded-t-lg text-lg flex justify-center items-center gap-8'>
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
  )
}
export default Filter
