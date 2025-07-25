import  { useEffect } from "react";
import { API_OPTIONS } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../utils/moviesSlice";

const useMovieTrailer = (movieId) =>{

  const dispatch = useDispatch();
  // const [trailerId, setTrailerId] = useState(null);

  // fetch trailer
  const getMovieVideos = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
      API_OPTIONS
    );
    const json = await data.json();
    // console.log(json);

    const filtered_data = json.results.filter(
      (video) => video.type === "Trailer"
    );
    // console.log(filtered_data);
    const trailer = filtered_data.length ? filtered_data[0] : json.results[0];
    // console.log(trailer);
    // setTrailerId(trailer.key);
    dispatch(addTrailerVideo(trailer));
  };

  useEffect(() => {
    getMovieVideos();
  }, []);

}

export default useMovieTrailer;