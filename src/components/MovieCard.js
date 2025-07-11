import React from 'react'
import { IMG_URL_CDN } from '../utils/constants'

const MovieCard = ({title,movies}) => {
  return (
    <div>
        
            <img  className='min-w-[170px] max-w-[170px] flex-shrink-0' src={IMG_URL_CDN + movies?.poster_path} alt="" />
        
    </div>
  )
}

export default MovieCard