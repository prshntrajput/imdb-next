import React from 'react'
import Image from "next/image"
import axios from '../../axios'

const API_KEY = process.env.API_KEY


const MovieDetail = async ({params}) => {
    const movieId = params.id
    const {data} = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}`)


    
  return (
    <div className='w-full xl:h-screen h-screen bg-slate-600'>
    <div className='max-w-6xl mx-auto'>
        <div className='flex items-center justify-center'>
            <Image alt='image' src={`https://image.tmdb.org/t/p/original/${data.backdrop_path ||
                 data.poster_path}`} width={500} height={300} className='rounded-md mt-2 shadow-lg'>
            </Image>
        </div>
        <span className='flex items-center justify-center xl:w-[50%] xl:ml-[24%] mt-2 px-2 text-sm'><h1 className='text-center font-semibold'>{data.overview}</h1>
        
        </span>
        <h1 className='text-center py-2 font-bold text-2xl text-white'>{data.title}</h1>
        
    </div>
    </div>
  )
}

export default MovieDetail