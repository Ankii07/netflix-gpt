import { useEffect } from 'react'
import { API_OPTIONS } from '../utils/constant'
import { useDispatch } from 'react-redux';
import { addTrendingMovies } from '../utils/moviesSlice';
// a custom hook is just a normal javascript function
const useTrendingMovies = () => {

const dispatch = useDispatch();

// API call to fetch movies or shows can be added here
// fetch Data from TMDB API and update the store
const getTrendingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?page=1", API_OPTIONS 
    );
    const json = await data.json();
    //  json.results
    // console.log("trending",json);
    dispatch(addTrendingMovies(json.results));
}

// to make API call for only once..
useEffect(() => {
    getTrendingMovies();
  }, []);
}

export default useTrendingMovies;