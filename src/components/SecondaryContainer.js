import React, { use } from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux';

const SecondaryContainer = () => {
  const movies = useSelector((state) => state.movies);
  // const popularMovies = useSelector((store) => store.movies);
  // console.log("Trending_movies",movies.trendingMovies);
  // console.log("popularMovies",movies.popularMovies);
  // console.log("popularMovies",popularMovies)
  // console.log(movies.nowPlayingMovies);
  return (
    <div className='-mt-28 relative z-20'>
      <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies}/>
       <MovieList title={"Trending"} movies={movies.trendingMovies}/>
        <MovieList title={"Popular"} movies={movies.popularMovies}/>
         <MovieList title={"Upcoming Movies"} movies={movies.UpcomingMovies}/>
      {/* 
        MoviesList - Popular
           MovieCards *n
        MovieList -Now Playing
        MovieList - Trending
        MovieList - Horror
         
      */}
    </div>
  )
}

export default SecondaryContainer
