import { useEffect } from 'react'
import { API_OPTIONS } from '../utils/constant'
import { useDispatch } from 'react-redux';
import { addTrendingMovies, addUpcomingMovies } from '../utils/moviesSlice';
// a custom hook is just a normal javascript function
const useUpcomingMovies = () => {

const dispatch = useDispatch();

// API call to fetch movies or shows can be added here
// fetch Data from TMDB API and update the store
const getUpcomingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?page=1", API_OPTIONS 
    );
    const json = await data.json();
    //  json.results
    // console.log("trending",json);
    dispatch(addUpcomingMovies(json.results));
}

// to make API call for only once..
useEffect(() => {
    getUpcomingMovies();
  }, []);
}

export default useUpcomingMovies;