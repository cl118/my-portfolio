import React, { useState } from 'react'
import { AiOutlineEye, AiOutlineGithub } from 'react-icons/ai'

const WebCard = ({ item }) => {
  const [showOverlay, setShowOverlay] = useState(false)
  const overlay = (
    <>
      <div className='absolute top-0 left-0 z-20 w-full h-full rounded-lg bg-gradient-to-t from-black/70 to-transparent' />
      <div className='relative w-full h-[300px] lg:max-w-[270px] lg:h-[270px] rounded-lg flex flex-col items-center justify-end pb-2 z-30 text-gray-300'>
        <h2 className='text-lg font-semibold'>{item.title}</h2>
        <p className='text-xs text-center'>[{item.techStack}]</p>
        {item.moreInfo ? <p className='text-xs text-center'>[{item.moreInfo}]</p> : null}
        <div className='flex gap-4 mt-1'>
          <a
            href={item.liveLink}
            target='_blank'
            className='flex flex-col items-center justify-center hover:text-green-600'
          >
            <AiOutlineEye size={24} />
            <p>Demo</p>
          </a>
          <a
            href={item.githubLink}
            target='_blank'
            className='flex flex-col items-center justify-center hover:text-green-600'
          >
            <AiOutlineGithub size={24} />
            <p>Github</p>
          </a>
        </div>
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

export default WebCard
