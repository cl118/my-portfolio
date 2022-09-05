import React, { useContext, useState } from 'react'
import { AiOutlineZoomIn } from 'react-icons/ai'
import { LightboxContext } from '../../contexts/LightboxContext'

const GraphicsCard = ({ item }) => {
  const [showOverlay, setShowOverlay] = useState(false)
  const { setShowLightbox, setLightboxContent } = useContext(LightboxContext)

  const shadowBox = (
    <div className='fixed z-50 flex items-center justify-center w-full h-screen bg-black/70'>
      <p className='text-white'>Content will go here</p>
    </div>
  )

  const handleClick = () => {
    setLightboxContent(item.image)
    setShowLightbox(true)
  }

  const overlay = (
    <>
      <div className='absolute top-0 left-0 z-20 w-full h-full rounded-lg bg-gradient-to-t from-black/70 to-transparent' />
      <div className='relative w-full h-[300px] lg:max-w-[270px] lg:h-[270px] rounded-lg flex flex-col items-center justify-center pb-2 z-30 text-gray-300'>
        <h2 className='pb-8 text-lg font-semibold'>{item.title}</h2>
        <AiOutlineZoomIn
          size={24}
          className='cursor-pointer hover:text-green-600'
          onClick={handleClick}
        />
      </div>
    </>
  )
  return (
    <div
      className='relative w-full h-[300px] lg:max-w-[270px] lg:h-[270px] bg-red-500 rounded-lg z-10'
      onMouseOver={() => setShowOverlay(true)}
      onMouseOut={() => setShowOverlay(false)}
    >
      {showOverlay ? overlay : null}
    </div>
  )
}

export default GraphicsCard
