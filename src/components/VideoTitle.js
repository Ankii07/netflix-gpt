import React from 'react'

const VideoTitle = ({title, overview}) => {
  return (
    <div className="w-screen aspect-video pt-80 px-12 absolute text-white bg-gradient-to-r from-black">
       <h1 className="text-6xl font-bold">{title}</h1>
       <p className="py-6 text-lg w-1/2">{overview}</p>
       <div className="flex gap-4">
         <button className='bg-gray-500 text-white flex items-center px-10 py-4 text-lg rounded-lg hover:bg-opacity-40'>▶️ Play</button>
         <button className='bg-white border border-gray-500 text-black flex items-center px-10 py-4 text-lg rounded-lg font-bold'> More Info</button>
       </div>
    </div>
  )
}

export default VideoTitle
