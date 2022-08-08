import React, { useState } from 'react'
import { PortfolioDataType, portfolioGridData } from '../../data/portfolioGridData'
import Filter from './Filter'
import { motion, AnimatePresence } from 'framer-motion'

const PortfolioGrid = () => {
  const [data, setData] = useState<PortfolioDataType[]>(portfolioGridData)
  const [filtered, setFiltered] = useState<PortfolioDataType[]>(portfolioGridData)
  const [activeCategory, setActiveCategory] = useState(0)

  return (
    <>
      {/* Category Selector */}
      <div className='my-8'>
        <Filter
          data={data}
          setFiltered={setFiltered}
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
        />
      </div>

      {/* Portfolio Grid */}
      <motion.div
        layout
        className='w-full relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'
      >
        {filtered.map((item) => (
          <AnimatePresence key={item.id}>
            <motion.div
              animate={{ opacity: 1, scale: 1 }}
              initial={{ opacity: 0 }}
              exit={{ opacity: 0, scale: 0 }}
              transition={{ duration: 0.4 }}
              layout
              className='w-full h-[300px] lg:max-w-[270px] lg:h-[270px] bg-red-500 rounded-lg flex flex-col items-center justify-center z-10'
            >
              <h2>{item.title}</h2>
            </motion.div>
          </AnimatePresence>
        ))}
        <img
          src='./dot-grid-accent.svg'
          alt='/'
          className='absolute bottom-[-35px] left-[-35px] h-[160px]'
        />
      </motion.div>
    </>
  )
}
export default PortfolioGrid
