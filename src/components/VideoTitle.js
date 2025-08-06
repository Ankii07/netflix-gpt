import React from 'react'
import { useDispatch } from 'react-redux';
import { togglePlayTrailer } from '../utils/moviesSlice';

const VideoTitle = ({title, overview}) => {
  

  const dispatch = useDispatch();

  const handlePlayClick =() => {
    dispatch(togglePlayTrailer());
  };
  
  return (
    <div className="w-screen aspect-video pt-80 px-12 absolute text-white bg-gradient-to-r from-black">
       <h1 className="text-6xl font-bold font-serif">{title}</h1>
       <p className="py-6 text-lg w-1/2 font-serif">{overview}</p>
       <div className="flex gap-4">
         <button className='bg-gray-500 text-white flex items-center px-10 py-4 text-lg rounded-lg hover:bg-opacity-40 font-serif' onClick={handlePlayClick}>▶️ Play</button>
         <button className='bg-white border border-gray-500 text-black flex items-center px-10 py-4 text-lg rounded-lg font-bold font-serif'> More Info</button>
       </div>
    </div>
  )
}

export default VideoTitle
