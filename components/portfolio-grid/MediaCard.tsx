import React from 'react'

const MediaCard = (item) => {
  return (
    <div className='relative w-full h-[300px] lg:max-w-[270px] lg:h-[270px] bg-red-500 rounded-lg flex flex-col items-center justify-center z-10'>
      <h2>{item.title}</h2>
    </div>
  )
}

export default MediaCard
