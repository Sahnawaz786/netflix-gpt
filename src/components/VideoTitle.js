import React from 'react'
import { useSelector } from 'react-redux'
import store from '../utils/store'

const VideoTitle = () => {

    const movieData = useSelector(store=> store.movie.nowPlayingMovies)
    if(!movieData) return;

    const {original_title,overview} = movieData[0];



  return (
    <div className='pt-[20%] px-16 absolute w-screen aspect-video bg-gradient-to-r to-black text-white '>
        <p className='text-5xl font-bold p-2 '>{original_title}</p>
        <p className='text-xl w-1/4 pl-2 mt-2'>{overview}</p>
        <div className='mt-6 flex gap-3 '>
            <button className='bg-gray-400 text-black text-xl p-2 w-20 '>Play</button>
            <button className='bg-gray-400 text-black p-2 w-24 '>More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle