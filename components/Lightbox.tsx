import React, { useContext } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { LightboxContext } from '../contexts/LightboxContext'

const Lightbox = () => {
  const { setShowLightbox, lightboxContent, lightboxContentType, aspectRatio, altText } =
    useContext(LightboxContext)

  const handleClick = () => {
    setShowLightbox(false)
  }

  const videoContainerPadding = () => {
    if (aspectRatio === '16:9') return '56.25%'
    else return 0
  }

  return (
    <div
      className='fixed top-0 left-0 z-[100] flex items-center justify-center w-full h-full bg-black/90 text-white'
      onClick={handleClick}
    >
      <AiOutlineClose
        size={32}
        className='absolute text-gray-300 cursor-pointer right-4 top-4'
        onClick={handleClick}
      />
      {lightboxContentType === 'graphics' ? (
        <div
          className='flex items-center justify-center w-full md:w-[50%] md:max-w-[800px]'
          onClick={(e) => e.stopPropagation()}
        >
          <img src={lightboxContent} alt={altText} width='100%' height='auto' />
        </div>
      ) : lightboxContentType === 'media' ? (
        <div
          className={`flex items-center justify-center w-full md:w-[50%] pt-[${videoContainerPadding}]`}
        >
          <video width='100%' height='auto' autoPlay controls onClick={(e) => e.stopPropagation()}>
            <source src={lightboxContent} type='video/mp4' />
            Your browser does not support the video tag.
          </video>
        </div>
      ) : null}
    </div>
  )
}

export default Lightbox
