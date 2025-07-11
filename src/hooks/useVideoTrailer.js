import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addVideoTrailer } from '../utils/movieSlice';
import { OPTIONS } from '../utils/constants';

const useVideoTrailer = (movieId) => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (!movieId) return;

    const getVideoById = async () => {
      try {
        const data = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos`, OPTIONS);
        const videoData = await data.json();

        console.log("Video data:", videoData);

        if (!videoData?.results) return;

        const trailers = videoData.results.filter(video => video?.type === "Trailer");
        dispatch(addVideoTrailer(trailers?.[0]));
      } catch (error) {
        console.error("Error fetching trailer:", error);
      }
    };

    getVideoById();
  }, [movieId]); 
};

export default useVideoTrailer;
