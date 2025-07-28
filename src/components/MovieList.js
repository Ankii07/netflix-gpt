import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({title, movies}) => {
    // console.log('movies', movies);
  return (
      <div className='p-6'>
        <h1 className='mt-30 text-3xl font-bold font-serif text-white'>{title}</h1>
      <div className='flex mt-2 overflow-x-scroll [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden'>
         <div className='flex gap-4 '>
         {/* <MovieCard posterPath={movies[0]?.poster_path}/> */}
         {movies && movies.map((movie) => (<MovieCard  key={movie.id} posterPath={movie.poster_path} />))}
         </div>
      </div>
    </div>
  )
}

export default MovieList
