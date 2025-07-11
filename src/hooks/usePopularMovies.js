import { useEffect } from "react";
import { OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addPopularMovies } from "../utils/movieSlice";

const usePopularMovies = () => {
  const dispatch = useDispatch();

  const getData = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
      OPTIONS
    );
    const videos = await data.json();
    console.log(videos?.results);
    dispatch(addPopularMovies(videos?.results));
  };

  useEffect(() => {
    getData();
  }, []);
};

export default usePopularMovies;
