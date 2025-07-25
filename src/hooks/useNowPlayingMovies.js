import { useEffect } from 'react'
import { API_OPTIONS } from '../utils/constant'
import { useDispatch } from 'react-redux';
import { addNowPlayingMovies } from '../utils/moviesSlice';
// a custom hook is just a normal javascript function
const useNowPlayingMovies = () => {
     const dispatch = useDispatch();

// API call to fetch movies or shows can be added here
// fetch Data from TMDB API and update the store
const getNowPlayingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=1", API_OPTIONS 
    );
    const json = await data.json();
    // return json.results
    // console.log(json);
    dispatch(addNowPlayingMovies(json.results));
}

// to make API call for only once..
useEffect(() => {
    getNowPlayingMovies();
  }, []);
}

export default useNowPlayingMovies;