import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  return (
    <div className="mb-6 scrollbar-hidden">
      <h1 className="text-3xl p-2 font-bold">{title}</h1>
      <div className="flex overflow-x-auto scrollbar-hidden gap-4 p-2">
        {movies?.map((movie) => (
          <MovieCard key={movie.id} movies={movie} />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
