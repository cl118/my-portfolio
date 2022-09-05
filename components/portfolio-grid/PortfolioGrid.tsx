import React, { useState } from 'react'
import { PortfolioDataType, portfolioGridData } from '../../data/portfolioGridData'
import Filter from './Filter'
import { motion, AnimatePresence } from 'framer-motion'
import { ImInsertTemplate } from 'react-icons/im'
import WebCard from './WebCard'
import MediaCard from './MediaCard'
import GraphicsCard from './GraphicsCard'

const PortfolioGrid = () => {
  const [data, setData] = useState<PortfolioDataType[]>(portfolioGridData)
  const [filtered, setFiltered] = useState<PortfolioDataType[]>(portfolioGridData)
  const [activeCategory, setActiveCategory] = useState('all')

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
        className='relative grid w-full grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4'
      >
        {filtered.map((item) => (
          <AnimatePresence key={item.id}>
            <motion.div
              animate={{ opacity: 1, scale: 1 }}
              initial={{ opacity: 0 }}
              exit={{ opacity: 0, scale: 0 }}
              transition={{ duration: 0.4 }}
              layout
              // className='relative w-full h-[300px] lg:max-w-[270px] lg:h-[270px] bg-red-500 rounded-lg flex flex-col items-center justify-center z-10'
            >
              {item.category === 'web' ? (
                <WebCard item={item} />
              ) : item.category === 'graphics' ? (
                <GraphicsCard item={item} />
              ) : item.category === 'media' ? (
                <MediaCard item={item} />
              ) : null}
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
