import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  if(!movies) return; // Handle case where there are no movies
  const mainMovie = movies[0];
  const {original_title, overview, id} = mainMovie;
  return (
    <div className="relative w-screen">
      <VideoTitle title={original_title} overview={overview}/>
      <VideoBackground movieId={id}/>
    </div>
  );
};

export default MainContainer;
