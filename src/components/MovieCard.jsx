import React from 'react'
import { BACKFROP_URL } from '../utils/constants'

const MovieCard = ({backdrop_path}) => {
  return (
    <div className='w-52 mr-4'>
      <img alt="Movie Poster" src={BACKFROP_URL + backdrop_path} />
    </div>
  )
}

export default MovieCard