import React, { useContext, useState } from 'react'
import { AiOutlinePlayCircle } from 'react-icons/ai'
import { LightboxContext } from '../../contexts/LightboxContext'

const MediaCard = ({ item }) => {
  const [showOverlay, setShowOverlay] = useState(false)
  const { setShowLightbox, setLightboxContent, setLightboxContentType, setAspectRatio } =
    useContext(LightboxContext)

  const handleClick = () => {
    setLightboxContent(item.source)
    setLightboxContentType(item.category)
    if (item.aspectRatio) {
      setAspectRatio(item.aspectRatio)
    }
    setShowLightbox(true)
  }

  const overlay = (
    <>
      <div className='absolute top-0 left-0 z-20 w-full h-full rounded-lg bg-gradient-to-t from-black/90 to-transparent' />
      <div className='relative w-full h-[300px] lg:max-w-[270px] lg:h-[270px] rounded-lg flex flex-col items-center justify-center pb-2 z-30 text-gray-300'>
        <h2 className='text-lg font-semibold text-center'>{item.title}</h2>
        {item.moreInfo && <p className='text-xs text-center'>[{item.moreInfo}]</p>}
        <AiOutlinePlayCircle
          size={40}
          className='mt-4 cursor-pointer hover:text-green-600'
          onClick={handleClick}
        />
      </div>
    </>
  )
  return (
    <div
      style={{ backgroundImage: `url(${item.image})` }}
      className='relative w-full h-[300px] lg:max-w-[270px] lg:h-[270px] rounded-lg z-10'
      onMouseOver={() => setShowOverlay(true)}
      onMouseOut={() => setShowOverlay(false)}
    >
      {showOverlay ? overlay : null}
    </div>
  )
}

export default MediaCard
