import { useSelector } from "react-redux";
import useVideoTrailer from "../hooks/useVideoTrailer";
import store from "../utils/store";

const VideoBackground = () => {
  const movieId = useSelector(store=>store?.movie?.nowPlayingMovies)
  useVideoTrailer(movieId?.[0]?.id);
  const videoId = useSelector(store=>store?.movie?.videoTrailer)
  console.log(videoId)

  return (
    <div className="w-screen">
      <iframe
        className="w-screen aspect-video "
        src={"https://www.youtube.com/embed/"+ videoId?.key +"?si=EzLSko3oEelPvNGX"+"?&autoplay=1&mute=1"}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
