import { useEffect } from 'react'
import { API_OPTIONS } from '../utils/constant'
import { useDispatch } from 'react-redux';
import {  addPopularMovies } from '../utils/moviesSlice';
// a custom hook is just a normal javascript function
const usePopularMovies = () => {

const dispatch = useDispatch();

// API call to fetch movies or shows can be added here
// fetch Data from TMDB API and update the store
const getPopularMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?page=1", API_OPTIONS 
    );
    const json = await data.json();
    //  json.results
    // console.log(json);
    dispatch(addPopularMovies(json.results));
}

// to make API call for only once..
useEffect(() => {
    getPopularMovies();
  }, []);
}

export default usePopularMovies;