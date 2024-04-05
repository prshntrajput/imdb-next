import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { FiThumbsUp } from 'react-icons/fi' 

const Card = ({result}) => {
  return (
    <div>
        <div className='mx-2 my-2 bg-slate-400 rounded-md hover:shadow-xl'>
            <Link href={`/movie/${result.id}`} >
                <Image src={`https://image.tmdb.org/t/p/original/${result.backdrop_path ||
                 result.poster_path}`} width={500} height={300} className='rounded-md'>

                </Image>
            </Link>
            <div>
            <p className='line-clamp-2 text-md px-2 my-2 text-sm'>{result.overview}</p>
            <h2 className='font-bold px-2'>{result.original_title}</h2>
            <p className='line-clamp-2 text-md px-2 py-1 text-sm flex items-center justify-between'>{result.release_date || result.first_air_date} <span className='flex items-center'><FiThumbsUp className='text-black mr-1'/> {result.vote_count}</span> </p>
            
            </div>
        </div>
    </div>
  )
}

export default Card