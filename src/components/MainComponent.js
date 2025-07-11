import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";
import useNowPlaying from "../hooks/useNowPlaying";
import usePopularMovies from "../hooks/usePopularMovies";
import useTrendingMovies from "../hooks/useTrendingMovies";

const MainComponent = () => {

    useNowPlaying();
    usePopularMovies();
    useTrendingMovies();


  return (
    <div>
      <VideoTitle />
      <VideoBackground/>
    </div>
  );
};

export default MainComponent;
