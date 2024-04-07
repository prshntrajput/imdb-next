import React from 'react'
import Image from "next/image"

const API_KEY = process.env.API_KEY


const MovieDetail = async ({params}) => {
    const movieId = params.id
    const res = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}`)

    const movie = await res.json();
    
  return (
    <div className='w-full xl:h-screen h-screen bg-slate-600'>
    <div className='max-w-6xl mx-auto'>
        <div className='flex items-center justify-center'>
            <Image src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path ||
                 movie.poster_path}`} width={500} height={300} className='rounded-md mt-2 shadow-lg'>
            </Image>
        </div>
        <span className='flex items-center justify-center xl:w-[50%] xl:ml-[24%] mt-2 px-2 text-sm'><h1 className='text-center font-semibold'>{movie.overview}</h1>
        
        </span>
        <h1 className='text-center py-2 font-bold text-2xl text-white'>{movie.title}</h1>
        
    </div>
    </div>
  )
}

export default MovieDetail