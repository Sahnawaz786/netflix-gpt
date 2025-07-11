import { useEffect } from "react";
import { OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addTrendingMovies } from "../utils/movieSlice";

const useTrendingMovies = () => {
  const dispatch = useDispatch();

  const getData = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
      OPTIONS
    );
    const videos = await data.json();
    console.log(videos?.results);
    dispatch(addTrendingMovies(videos?.results));
  };

  useEffect(() => {
    getData();
  }, []);
};

export default useTrendingMovies;
