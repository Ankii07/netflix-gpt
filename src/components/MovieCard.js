import React from 'react'
import { IMG_CDN_URL } from '../utils/constant'

const MovieCard = ({posterPath}) => {
  return (
    <div className="w-48  ">
      <img className='rounded-lg shadow-lg shadow-lg shadow-blue-500/50' alt="Movie_Card" src={IMG_CDN_URL + posterPath} />
    </div>
  )
}

export default MovieCard
