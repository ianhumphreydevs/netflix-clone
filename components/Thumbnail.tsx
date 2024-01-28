import { Movie } from '@/typings'
import Image from 'next/image'
import React from 'react'

interface Props {
    movie: Movie 
}

function Thumbnail({movie}: Props) {
  return (
    <div className='relative h-28 min-w-[180px] cursor-pointer transition duraction-200 ease-out md:h-36 md:min-w-[260px] md:hover:scale-105'>
      <Image
      alt='Image cannot be found'
        src={`https://image.tmdb.org/t/p/w500${
          movie.backdrop_path || movie.poster_path
        }`}
        className="rounded-sm object-cover md:rounded"
        layout="fill"
      />
    </div>
  )
}

export default Thumbnail
