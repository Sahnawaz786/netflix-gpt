import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'
import store from '../utils/store'

const SecondaryComponent = () => {
    const movies = useSelector(store=>store.movie)
    console.log("Movies : ",movies?.nowPlayingMovies)
  return (
    <div>
        <MovieList classname="-mt-96" title={"Now Playing"} movies = {movies?.nowPlayingMovies} />
        <MovieList title={"Popular Movies"} movies = {movies?.popularMovies} />
        <MovieList title={"Trending Movies"} movies = {movies?.trendingMovies} />
    </div>
  )
}

export default SecondaryComponent