import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";


const VideoBackground = ({ movieId }) => {
     const trailerVideo = useSelector((store) => store.movies?.trailerVideo);
     useMovieTrailer(movieId);
  return (
    <div className="w-screen h-screen" >
      <iframe
        className="w-screen aspect-video"
       src={`https://www.youtube.com/embed/OWEq2Pf8qpk?si=${trailerVideo?.key}&mute=1`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
