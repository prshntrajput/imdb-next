import React from 'react'
import Link from  "next/link"

const NavBar = () => {
  return (
    <div>
        <div className='w-full h-[8vh] bg-yellow-200 flex gap-8 items-center justify-center mt-4'>
       <Link href="/"> <h1 className='font-bold hover:underline'>Trending</h1></Link>
        <Link href="/"><h1 className='font-bold hover:underline'>TopRated</h1></Link>
        </div>
    </div>
  )
}

export default NavBar